"""Validate and export the accepted B5A shape revision from its saved .blend.

Run Blender with the source blend, background mode and factory startup. This
script does not rebuild geometry. It restores technical review material slots,
refreshes the five pose keys from config, performs contract/BVH checks, saves a
separate technical .blend, and exports a separate GLB + time-based manifest.
"""

from __future__ import annotations

import argparse
import json
import platform
import sys
from datetime import datetime, timezone
from itertools import combinations
from pathlib import Path

import bpy


SCRIPT_DIR = Path(__file__).resolve().parent
if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

import build_b5a_candidate as candidate
import build_blockout as base


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", required=True)
    parser.add_argument("--source-blend", required=True)
    parser.add_argument("--blend-out", required=True)
    parser.add_argument("--glb-out", required=True)
    parser.add_argument("--manifest-out", required=True)
    parser.add_argument("--bvh-report", required=True)
    args = sys.argv[sys.argv.index("--") + 1 :] if "--" in sys.argv else []
    return parser.parse_args(args)


def reconstruct_model():
    required = [
        "crab_root",
        "crab_body",
        "ring_inner",
        "ring_outer",
        "legs_group",
        "claw_left",
        "claw_right",
        "pincer_left",
        "pincer_right",
        "cancer_mark",
    ]
    missing = [name for name in required if bpy.data.objects.get(name) is None]
    if missing:
        raise RuntimeError(f"Source blend is missing required nodes: {missing}")
    leg_roots = {}
    for side in ("left", "right"):
        for index in range(1, 5):
            name = f"leg_{side}_{index:02d}"
            obj = bpy.data.objects.get(name)
            if obj is None:
                raise RuntimeError(f"Source blend is missing leg root: {name}")
            leg_roots[(side, index)] = obj
    return {
        "root": bpy.data.objects["crab_root"],
        "body": bpy.data.objects["crab_body"],
        "rings": {
            "inner": bpy.data.objects["ring_inner"],
            "outer": bpy.data.objects["ring_outer"],
        },
        "legs_group": bpy.data.objects["legs_group"],
        "leg_roots": leg_roots,
        "claws": {
            "left": bpy.data.objects["claw_left"],
            "right": bpy.data.objects["claw_right"],
        },
        "pincer_roots": {
            "left": bpy.data.objects["pincer_left"],
            "right": bpy.data.objects["pincer_right"],
        },
        "mark": bpy.data.objects["cancer_mark"],
    }


def ensure_material(name: str, color, metallic: float, roughness: float):
    material = bpy.data.materials.get(name)
    if material is None:
        material = base.make_material(name, color, metallic, roughness)
    material.use_nodes = True
    shader = material.node_tree.nodes.get("Principled BSDF")
    shader.inputs["Base Color"].default_value = color
    shader.inputs["Metallic"].default_value = metallic
    shader.inputs["Roughness"].default_value = roughness
    return material


def technical_materials(config):
    palette = config["palette"]
    return {
        "MAT_GoldSatin": ensure_material(
            "MAT_GoldSatin", palette["goldSatin"], 0.68, 0.34
        ),
        "MAT_Charcoal": ensure_material(
            "MAT_Charcoal", palette["charcoal"], 0.08, 0.58
        ),
        "MAT_AmberGlow": ensure_material(
            "MAT_AmberGlow", palette["amber"], 0.35, 0.3
        ),
    }


def material_for_object(name: str, materials):
    if name == "cancer_mark" or name.endswith("_joint") or name.endswith("_lower") and name.startswith("pincer_"):
        return materials["MAT_AmberGlow"]
    if (
        name in {"ring_outer", "body_front_plate"}
        or name.endswith("_forearm")
        or name.endswith("_palm_cap")
        or name.endswith("_upper")
        or name.endswith("_tip")
    ):
        return materials["MAT_Charcoal"]
    return materials["MAT_GoldSatin"]


def restore_material_slots(model, config) -> dict:
    materials = technical_materials(config)
    for obj in base.descendants(model["root"]):
        if obj.type != "MESH":
            continue
        obj.data.materials.clear()
        base.assign_material(obj, material_for_object(obj.name, materials))
    model["materials"] = materials
    return materials


def refresh_pose_keys(scene, model, config) -> list:
    animated = [
        model["root"],
        model["claws"]["left"],
        model["claws"]["right"],
        model["pincer_roots"]["left"],
        model["pincer_roots"]["right"],
        model["rings"]["inner"],
        model["rings"]["outer"],
        model["legs_group"],
        *model["leg_roots"].values(),
    ]
    for obj in animated:
        obj.animation_data_clear()
    # The accepted source .blend already contains actions. Remove those orphaned
    # datablocks before re-keying so Blender does not silently export `.001`
    # suffixed clip names that the web runtime cannot bind to model nodes.
    for action in list(bpy.data.actions):
        bpy.data.actions.remove(action)
    for marker in list(scene.timeline_markers):
        scene.timeline_markers.remove(marker)
    base.set_pose_keys(scene, model, config)
    for obj in animated:
        action = obj.animation_data.action if obj.animation_data else None
        if action is None:
            raise RuntimeError(f"Missing rebuilt action for {obj.name}")
        action.name = f"{obj.name}Action"
    return animated


def action_name_contract(animated) -> dict:
    expected = sorted(f"{obj.name}Action" for obj in animated)
    actual = sorted(
        obj.animation_data.action.name
        for obj in animated
        if obj.animation_data and obj.animation_data.action
    )
    return {
        "pass": actual == expected,
        "expected": expected,
        "actual": actual,
    }


def apply_local_coxa_clearance_fix(model) -> list[dict]:
    """Clear verified proximal collisions without moving any leg/claw pivot."""
    records = []
    for side in ("left", "right"):
        for index in range(1, 5):
            prefix = f"leg_{side}_{index:02d}"
            coxa = bpy.data.objects[f"{prefix}_coxa"]
            coxa_joint = bpy.data.objects[f"{prefix}_coxa_joint"]
            old_location = base.vector_list(coxa.location)
            endpoint = coxa_joint.location.copy()
            full_length = endpoint.length
            if full_length <= 0.24:
                raise RuntimeError(f"Unexpected coxa length for {coxa.name}: {full_length}")
            visible_start = endpoint.normalized() * 0.22
            visible_length = (endpoint - visible_start).length
            coxa.location = (visible_start + endpoint) * 0.5
            coxa.scale.x *= 0.78
            coxa.scale.y *= 0.78
            coxa.scale.z *= visible_length / full_length
            bpy.context.view_layer.objects.active = coxa
            coxa.select_set(True)
            bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
            coxa.select_set(False)
            coxa["local_clearance_fix"] = "inset_start_0.22_and_reduce_cross_section_0.78"
            records.append(
                {
                    "node": coxa.name,
                    "pivotNode": model["leg_roots"][(side, index)].name,
                    "pivotMoved": False,
                    "oldLocation": old_location,
                    "newLocation": base.vector_list(coxa.location),
                    "startInset": 0.22,
                    "crossSectionFactor": 0.78,
                }
            )
    bpy.context.view_layer.update()
    return records


def leg_mesh_groups(model):
    groups = {}
    for (side, index), root in model["leg_roots"].items():
        groups[(side, index)] = [obj for obj in base.descendants(root) if obj.type == "MESH"]
    return groups


def targeted_appendage_scan(scene, model, config) -> dict:
    groups = leg_mesh_groups(model)
    pairs = set()
    for side in ("left", "right"):
        for first_index, second_index in combinations(range(1, 5), 2):
            for first in groups[(side, first_index)]:
                for second in groups[(side, second_index)]:
                    pairs.add(tuple(sorted((first.name, second.name))))
        claw_meshes = [
            obj
            for obj in base.descendants(model["claws"][side])
            if obj.type == "MESH"
        ]
        for leg_meshes in (groups[(side, index)] for index in range(1, 5)):
            for claw in claw_meshes:
                for leg in leg_meshes:
                    pairs.add(tuple(sorted((claw.name, leg.name))))

    meshes = {
        obj.name: obj for obj in base.descendants(model["root"]) if obj.type == "MESH"
    }
    pose_frames = {int(pose["frame"]) for pose in config["poses"].values()}
    frames = sorted(
        set(range(int(scene.frame_start), int(scene.frame_end) + 1, 4))
        | pose_frames
        | {int(scene.frame_end)}
    )
    collisions = []
    names_needed = {name for pair in pairs for name in pair}
    for frame in frames:
        scene.frame_set(frame)
        bpy.context.view_layer.update()
        depsgraph = bpy.context.evaluated_depsgraph_get()
        trees = {
            name: base.world_bvh(meshes[name], depsgraph)
            for name in names_needed
            if name in meshes
        }
        for first_name, second_name in sorted(pairs):
            first_tree = trees.get(first_name)
            second_tree = trees.get(second_name)
            if first_tree and second_tree and first_tree.overlap(second_tree):
                collisions.append(
                    {"frame": frame, "a": first_name, "b": second_name}
                )
    return {
        "pass": not collisions,
        "purpose": "Distinguish three-quarter camera occlusion from real cross-leg or claw-leg mesh intersection.",
        "sampledFrames": frames,
        "sampleCount": len(frames),
        "pairCountPerFrame": len(pairs),
        "collisions": collisions,
    }


def file_record(path: Path) -> dict:
    return {
        "path": str(path),
        "bytes": path.stat().st_size,
        "sha256": base.sha256(path),
    }


def main() -> None:
    args = parse_args()
    config_path = Path(args.config).resolve()
    source_blend = Path(args.source_blend).resolve()
    blend_path = Path(args.blend_out).resolve()
    glb_path = Path(args.glb_out).resolve()
    manifest_path = Path(args.manifest_out).resolve()
    bvh_report_path = Path(args.bvh_report).resolve()
    for path in (blend_path, glb_path, manifest_path, bvh_report_path):
        base.ensure_parent(path)

    config = json.loads(config_path.read_text(encoding="utf-8"))
    model = reconstruct_model()
    materials = restore_material_slots(model, config)
    local_geometry_fixes = apply_local_coxa_clearance_fix(model)
    animated = refresh_pose_keys(bpy.context.scene, model, config)
    scene = bpy.context.scene
    scene.name = "CancerKnowledgeMachine_B5A_ShapeRevision_Technical"
    scene.render.fps = int(config["animation"]["fps"])
    scene.render.fps_base = 1.0

    base_checks, pose_bounds = base.validate_contract(scene, model, config)
    targeted_scan = targeted_appendage_scan(scene, model, config)
    checks = {
        **base_checks,
        "targetedAppendageCollisionScan": targeted_scan,
        "canonicalActionNames": action_name_contract(animated),
    }
    failed = [name for name, result in checks.items() if not result["pass"]]
    bvh_report = {
        "status": "PASS" if not failed else "FAIL",
        "checkedAtUtc": datetime.now(timezone.utc).isoformat(),
        "sourceBlend": str(source_blend),
        "checks": {
            "baselineTransitionCollisionScan": base_checks["transitionCollisionScan"],
            "targetedAppendageCollisionScan": targeted_scan,
        },
        "localGeometryFixes": local_geometry_fixes,
        "interpretation": (
            "No mesh intersections were found in the sampled pairs; overlap in the three-quarter render is camera occlusion."
            if not failed
            else "At least one sampled BVH pair intersects and requires local review before web preview."
        ),
    }
    bvh_report_path.write_text(
        json.dumps(bvh_report, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    if failed:
        print(
            "STUDYMASTER_B5A_REVISION_FAILED="
            + json.dumps({name: checks[name] for name in failed}, ensure_ascii=False)
        )
        raise RuntimeError(f"B5A shape revision checks failed: {failed}")

    scene.frame_set(scene.frame_start)
    bpy.ops.wm.save_as_mainfile(filepath=str(blend_path), check_existing=False)
    model_objects = base.descendants(model["root"])
    base.export_glb(scene, model_objects, glb_path)
    scene.frame_set(scene.frame_start)
    bpy.ops.wm.save_as_mainfile(filepath=str(blend_path), check_existing=False)

    fps = int(config["animation"]["fps"])
    poses = candidate.pose_manifest(config, fps)
    source_script = Path(__file__).resolve()
    manifest = {
        "schemaVersion": "0.4-b5a-shape-revision",
        "contractStatus": "B5A_TECHNICAL_PASS_PENDING_WEB_PREVIEW",
        "asset": {
            "name": config["asset"]["name"],
            "revision": config["asset"]["revision"],
            "stage": "b5a-shape-revision-technical",
            "baseline": "cancer-machine.blockout-v2.glb",
            "previousCandidate": "cancer-machine.b5a-candidate.glb",
            "frontAxisBlender": config["asset"]["frontAxis"],
            "upAxisBlender": config["asset"]["upAxis"],
            "units": config["asset"]["unit"],
            "walkingLegCount": 8,
            "clawCount": 2,
            "antennaCount": 0,
            "independentRingCount": 2,
        },
        "generatedAtUtc": datetime.now(timezone.utc).isoformat(),
        "toolchain": {
            "blenderVersion": bpy.app.version_string,
            "blenderVersionTuple": list(bpy.app.version),
            "pythonVersion": platform.python_version(),
            "exportOperator": "bpy.ops.export_scene.gltf",
            "exportFormat": "GLB",
            "exportForceSampling": True,
            "factoryStartupRequired": True,
        },
        "poseSampling": {
            "fps": fps,
            "fpsBase": 1.0,
            "timeFormula": config["animation"]["timeFormula"],
            "poses": {
                name: {
                    "frame": record["frame"],
                    "timeSeconds": record["timeSeconds"],
                }
                for name, record in poses.items()
            },
            "runtimeRule": "Sample clips by manifest timeSeconds; keyframe-array index is not the pose contract.",
        },
        "stats": base.mesh_stats(model_objects),
        "boundsByPose": pose_bounds,
        "poses": poses,
        "nodes": base.hierarchy_record(model_objects),
        "materials": sorted(materials.keys()),
        "checks": checks,
        "localGeometryFixes": local_geometry_fixes,
        "files": {
            "sourceShapeBlend": file_record(source_blend),
            "blend": file_record(blend_path),
            "glb": file_record(glb_path),
            "config": file_record(config_path),
            "script": file_record(source_script),
            "shapeBuildScript": file_record(
                SCRIPT_DIR / "build_b5a_shape_revision.py"
            ),
            "candidateScript": file_record(
                SCRIPT_DIR / "build_b5a_candidate.py"
            ),
            "baseScript": file_record(SCRIPT_DIR / "build_blockout.py"),
            "bvhReport": file_record(bvh_report_path),
        },
        "limitations": [
            "This is the accepted B5A shape revision with technical review materials, not the B5B final model.",
            "BVH is sampled at 21 frames; visual occlusion and hero readability are reviewed separately in the B4 browser preview.",
        ],
    }
    manifest_path.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(
        "STUDYMASTER_B5A_SHAPE_REVISION_EXPORT="
        + json.dumps(
            {
                "blend": str(blend_path),
                "glb": str(glb_path),
                "manifest": str(manifest_path),
                "bvhReport": str(bvh_report_path),
                "checksPassed": len(checks),
                "checksFailed": failed,
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main()
