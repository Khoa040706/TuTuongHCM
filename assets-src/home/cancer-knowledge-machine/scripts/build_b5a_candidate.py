"""Build the separate B5A geometry candidate without overwriting blockout v2.

This module reuses the verified blockout exporter/validator, then replaces only
the large forms called out at the B5A gate: body face armor, claw palms/pincers,
and leg joint proportions. It must run in Blender background + factory startup.
"""

from __future__ import annotations

import json
import platform
import sys
from datetime import datetime, timezone
from pathlib import Path

import bpy


SCRIPT_DIR = Path(__file__).resolve().parent
if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

import build_blockout as base


ARMOR_OUTLINE = (
    (-0.72, 1.0),
    (0.72, 1.0),
    (1.0, 0.5),
    (0.94, -0.48),
    (0.56, -1.0),
    (-0.56, -1.0),
    (-0.94, -0.48),
    (-1.0, 0.5),
)


def remove_object(name: str) -> None:
    obj = bpy.data.objects.get(name)
    if obj:
        bpy.data.objects.remove(obj, do_unlink=True)


def create_armor_plate(
    name: str,
    center,
    half_size,
    depth: float,
    material,
    parent,
    bevel_width: float,
):
    center_x, center_y, center_z = center
    half_x, half_z = half_size
    outline = [
        (center_x + x * half_x, center_z + z * half_z)
        for x, z in ARMOR_OUTLINE
    ]
    vertices = []
    for y in (center_y - depth * 0.5, center_y + depth * 0.5):
        vertices.extend((x, y, z) for x, z in outline)
    count = len(outline)
    faces = [tuple(range(count)), tuple(reversed(range(count, count * 2)))]
    for index in range(count):
        next_index = (index + 1) % count
        faces.append((index, next_index, count + next_index, count + index))
    mesh = bpy.data.meshes.new(f"{name}_mesh")
    mesh.from_pydata(vertices, [], faces)
    mesh.validate()
    mesh.update()
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(obj)
    base.assign_material(obj, material)
    base.parent_keep_world(obj, parent)
    bevel = obj.modifiers.new(name="B5A_ArmorBevel", type="BEVEL")
    bevel.width = bevel_width
    bevel.segments = 3
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    bpy.ops.object.modifier_apply(modifier=bevel.name)
    obj.select_set(False)
    return obj


def replace_body_face(model, config) -> None:
    remove_object("body_front_plate")
    cfg = config["candidateGeometry"]["bodyArmor"]
    center = cfg["center"]
    create_armor_plate(
        "body_armor_bezel",
        center,
        cfg["outerHalfSize"],
        cfg["outerDepth"],
        model["materials"]["MAT_GoldSatin"],
        model["body"],
        0.055,
    )
    create_armor_plate(
        "body_front_plate",
        (center[0], center[1] - 0.09, center[2]),
        cfg["innerHalfSize"],
        cfg["innerDepth"],
        model["materials"]["MAT_Charcoal"],
        model["body"],
        0.045,
    )["asset_role"] = "angular_mechanical_shell_inset"


def replace_claw_forms(model, config) -> None:
    claw_cfg = config["claws"]
    armor_cfg = config["candidateGeometry"]["clawArmor"]
    pincer_cfg = config["candidateGeometry"]["pincer"]
    palm_source = claw_cfg["palm"]
    for side_name, sign in (("left", -1.0), ("right", 1.0)):
        palm = (sign * palm_source[0], palm_source[1], palm_source[2])
        palm_obj = bpy.data.objects[f"claw_{side_name}_palm"]
        palm_obj.data.materials.clear()
        base.assign_material(palm_obj, model["materials"]["MAT_GoldSatin"])

        remove_object(f"claw_{side_name}_palm_cap")
        cap = create_armor_plate(
            f"claw_{side_name}_palm_cap",
            (palm[0], palm[1] + armor_cfg["frontOffsetY"], palm[2]),
            armor_cfg["halfSize"],
            armor_cfg["depth"],
            model["materials"]["MAT_Charcoal"],
            model["claws"][side_name],
            0.035,
        )
        cap["asset_role"] = "claw_shell_armor_inset_not_eye"

        remove_object(f"pincer_{side_name}_upper")
        remove_object(f"pincer_{side_name}_lower")
        for finger_name, z_offsets in (
            ("upper", pincer_cfg["upperZOffsets"]),
            ("lower", pincer_cfg["lowerZOffsets"]),
        ):
            points = [
                (
                    palm[0] + sign * x_offset,
                    palm[1] - 0.08 - index * 0.008,
                    palm[2] + z_offsets[index],
                )
                for index, x_offset in enumerate(pincer_cfg["xOffsets"])
            ]
            material = (
                model["materials"]["MAT_Charcoal"]
                if finger_name == "upper"
                else model["materials"]["MAT_AmberGlow"]
            )
            blade = base.create_tapered_blade(
                f"pincer_{side_name}_{finger_name}",
                points,
                pincer_cfg["widths"],
                claw_cfg["fingerDepth"],
                material,
                model["pincer_roots"][side_name],
            )
            blade["asset_role"] = "curved_tapered_pincer_finger"


def refine_leg_joints(config) -> None:
    joint_scale = config["candidateGeometry"]["jointScale"]
    for obj in list(bpy.data.objects):
        if obj.type != "MESH" or not (
            obj.name.endswith("_coxa_joint") or obj.name.endswith("_knee_joint")
        ):
            continue
        obj.scale = joint_scale
        bpy.context.view_layer.objects.active = obj
        obj.select_set(True)
        bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
        obj.select_set(False)
        obj["asset_role"] = "flattened_armored_leg_joint"


def build_candidate(config):
    model = base.build_model(config)
    replace_body_face(model, config)
    replace_claw_forms(model, config)
    refine_leg_joints(config)
    model["root"]["asset_role"] = "StudyMaster Cancer B5A geometry candidate"
    return model


def pose_manifest(config, fps: int):
    result = {}
    for pose_name in base.POSE_NAMES:
        pose = config["poses"][pose_name]
        result[pose_name] = {
            "frame": int(pose["frame"]),
            "timeSeconds": round(float(pose["frame"]) / fps, 6),
            "rootScale": pose["rootScale"],
            "clawLeftYDeg": pose["clawLeftYDeg"],
            "clawRightYDeg": pose["clawRightYDeg"],
            "ringInnerYDeg": pose["ringInnerYDeg"],
            "ringOuterYDeg": pose["ringOuterYDeg"],
            "ringScale": pose["ringScale"],
            "legsScale": pose["legsScale"],
            "legFoldDeg": pose["legFoldDeg"],
            "pincerScaleZ": pose["pincerScaleZ"],
        }
    return result


def main() -> None:
    args = base.parse_args()
    config_path = Path(args.config).resolve()
    blend_path = Path(args.blend_out).resolve()
    glb_path = Path(args.glb_out).resolve()
    manifest_path = Path(args.manifest_out).resolve()
    render_dir = Path(args.render_dir).resolve()
    for output in (blend_path, glb_path, manifest_path):
        base.ensure_parent(output)
    render_dir.mkdir(parents=True, exist_ok=True)

    config = json.loads(config_path.read_text(encoding="utf-8"))
    if tuple(config["poses"].keys()) != base.POSE_NAMES:
        raise ValueError(f"Pose order/names must be exactly {base.POSE_NAMES}")
    if int(config["legs"]["perSide"]) != 4:
        raise ValueError("Model contract requires exactly four walking legs per side")

    base.clear_scene()
    scene = bpy.context.scene
    scene.name = "CancerKnowledgeMachine_B5A_Candidate"
    scene.unit_settings.system = "METRIC"
    scene.unit_settings.scale_length = 1.0
    fps = int(config["animation"]["fps"])
    scene.render.fps = fps
    scene.render.fps_base = 1.0

    model = build_candidate(config)
    base.set_pose_keys(scene, model, config)
    model_objects = base.descendants(model["root"])
    checks, pose_bounds = base.validate_contract(scene, model, config)
    failed_checks = [name for name, result in checks.items() if not result["pass"]]
    if failed_checks:
        print(
            "STUDYMASTER_B5A_FAILED_CHECKS="
            + json.dumps(
                {name: checks[name] for name in failed_checks},
                ensure_ascii=False,
            )
        )
        raise RuntimeError(f"B5A contract checks failed: {failed_checks}")

    camera = base.setup_review_scene(scene, config)
    scene.frame_set(scene.frame_start)
    bpy.ops.wm.save_as_mainfile(filepath=str(blend_path), check_existing=False)
    base.export_glb(scene, model_objects, glb_path)
    renders = base.render_reviews(scene, camera, config, render_dir)
    scene.frame_set(scene.frame_start)
    bpy.ops.wm.save_as_mainfile(filepath=str(blend_path), check_existing=False)

    pose_records = pose_manifest(config, fps)
    source_script = Path(__file__).resolve()
    base_script = Path(base.__file__).resolve()
    file_records = {}
    for label, path in (
        ("blend", blend_path),
        ("glb", glb_path),
        ("config", config_path),
        ("script", source_script),
        ("baseScript", base_script),
    ):
        file_records[label] = {
            "path": str(path),
            "bytes": path.stat().st_size,
            "sha256": base.sha256(path),
        }
    for render in renders:
        path = Path(render["path"])
        render["bytes"] = path.stat().st_size
        render["sha256"] = base.sha256(path)

    manifest = {
        "schemaVersion": "0.3-b5a-geometry-candidate",
        "contractStatus": "AWAITING_B5A_GEOMETRY_APPROVAL",
        "asset": {
            "name": config["asset"]["name"],
            "revision": config["asset"]["revision"],
            "stage": "b5a-geometry-candidate",
            "baseline": "cancer-machine.blockout-v2.glb",
            "frontAxisBlender": config["asset"]["frontAxis"],
            "upAxisBlender": config["asset"]["upAxis"],
            "units": config["asset"]["unit"],
            "referencePolicy": config["asset"]["referencePolicy"],
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
                for name, record in pose_records.items()
            },
            "runtimeRule": "Sample clips by manifest timeSeconds; keyframe-array index is not the pose contract.",
        },
        "stats": base.mesh_stats(model_objects),
        "boundsByPose": pose_bounds,
        "poses": pose_records,
        "nodes": base.hierarchy_record(model_objects),
        "checks": checks,
        "files": file_records,
        "renders": renders,
        "limitations": [
            "B5A reviews large geometry only; materials remain simple review slots and are not B5B look-dev.",
            "Automated BVH checks cover selected mesh pairs at sampled transition frames; silhouette and residual visual overlaps still require image/browser review.",
            "The candidate does not replace the approved blockout-v2 asset until the B5A geometry gate is approved.",
        ],
    }
    manifest_path.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(
        "STUDYMASTER_B5A_RESULT="
        + json.dumps(
            {
                "blend": str(blend_path),
                "glb": str(glb_path),
                "manifest": str(manifest_path),
                "renders": [item["path"] for item in renders],
                "checksPassed": len(checks),
                "checksFailed": failed_checks,
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main()
