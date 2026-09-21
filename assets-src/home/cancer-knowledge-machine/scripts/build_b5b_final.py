"""Finish the accepted B5A revision without rebuilding its large forms."""

from __future__ import annotations

import argparse
import json
import platform
import sys
from datetime import datetime, timezone
from pathlib import Path

import bpy


SCRIPT_DIR = Path(__file__).resolve().parent
if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

import build_b5a_candidate as candidate
import build_blockout as base
import export_b5a_shape_revision as technical


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--b5a-config", required=True)
    parser.add_argument("--b5b-config", required=True)
    parser.add_argument("--source-blend", required=True)
    parser.add_argument("--blend-out", required=True)
    parser.add_argument("--glb-out", required=True)
    parser.add_argument("--manifest-out", required=True)
    parser.add_argument("--render-dir", required=True)
    parser.add_argument("--fallback-out", required=True)
    parser.add_argument("--license", required=True)
    parser.add_argument("--bvh-report", required=True)
    args = sys.argv[sys.argv.index("--") + 1 :] if "--" in sys.argv else []
    return parser.parse_args(args)


def ensure_parent(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)


def file_record(path: Path) -> dict:
    return {"path": str(path), "bytes": path.stat().st_size, "sha256": base.sha256(path)}


def configure_material(material, config: dict) -> None:
    material.use_nodes = True
    shader = material.node_tree.nodes.get("Principled BSDF")
    shader.inputs["Base Color"].default_value = config["baseColor"]
    shader.inputs["Metallic"].default_value = config["metallic"]
    shader.inputs["Roughness"].default_value = config["roughness"]


def finish_materials(config: dict) -> dict:
    mapping = {
        "MAT_GoldSatin": config["materials"]["goldSatin"],
        "MAT_Charcoal": config["materials"]["charcoalMatte"],
        "MAT_AmberGlow": config["materials"]["amberAccent"],
    }
    materials = {}
    for name, settings in mapping.items():
        material = bpy.data.materials.get(name)
        if material is None:
            raise RuntimeError(f"Missing required material {name}")
        configure_material(material, settings)
        materials[name] = material
    return materials


def bevel_width(name: str, config: dict) -> float:
    widths = config["finish"]["bevelWidths"]
    if name.startswith("ring_"):
        return float(widths["ring"])
    if name.startswith("leg_"):
        return float(widths["leg"])
    if name.startswith("claw_") or name.startswith("pincer_"):
        return float(widths["claw"])
    if name in {"crab_body", "body_armor_bezel", "body_front_plate", "body_armor_lower_transition"}:
        return float(widths["body"])
    return 0.0


def apply_surface_finish(model, config: dict) -> list[dict]:
    records = []
    for obj in technical.base.descendants(model["root"]):
        if obj.type != "MESH":
            continue
        for polygon in obj.data.polygons:
            polygon.use_smooth = True
        width = bevel_width(obj.name, config)
        if width <= 0.0 or obj.name.startswith("cancer_mark"):
            continue
        modifier = obj.modifiers.new(name="B5B_ReadableBevel", type="BEVEL")
        modifier.width = width
        segments = int(config["finish"]["bevelSegments"])
        modifier.segments = segments
        bpy.ops.object.select_all(action="DESELECT")
        obj.select_set(True)
        bpy.context.view_layer.objects.active = obj
        bpy.ops.object.modifier_apply(modifier=modifier.name)
        records.append({"node": obj.name, "width": width, "segments": segments})
    bpy.ops.object.select_all(action="DESELECT")
    return records


def create_panel_lines(model, material, config: dict) -> list[str]:
    names = []
    for index, points in enumerate(config["finish"]["panelLines"], start=1):
        side = "left" if points[0][0] < 0 else "right"
        name = f"body_panel_line_{side}_{((index - 1) % 2) + 1:02d}"
        curve_data = bpy.data.curves.new(f"{name}_curve", type="CURVE")
        curve_data.dimensions = "3D"
        curve_data.resolution_u = 2
        curve_data.bevel_depth = float(config["finish"]["panelLineDepth"])
        curve_data.bevel_resolution = 2
        spline = curve_data.splines.new(type="BEZIER")
        spline.bezier_points.add(len(points) - 1)
        for point, (x, z) in zip(spline.bezier_points, points):
            point.co = (x, float(config["finish"]["panelLineY"]), z)
            point.handle_left_type = "AUTO"
            point.handle_right_type = "AUTO"
        obj = bpy.data.objects.new(name, curve_data)
        bpy.context.collection.objects.link(obj)
        obj.parent = model["body"]
        base.assign_material(obj, material)
        bpy.ops.object.select_all(action="DESELECT")
        obj.select_set(True)
        bpy.context.view_layer.objects.active = obj
        bpy.ops.object.convert(target="MESH")
        obj["asset_role"] = "restrained_hero_scale_armor_panel_line"
        names.append(name)
    bpy.ops.object.select_all(action="DESELECT")
    return names


def remove_review_scene_objects() -> None:
    for obj in list(bpy.data.objects):
        if obj.name.startswith("REVIEW_") or obj.name == "ReviewCamera":
            bpy.data.objects.remove(obj, do_unlink=True)


def export_optimized_glb(scene, objects, glb_path: Path) -> None:
    bpy.ops.object.select_all(action="DESELECT")
    for obj in objects:
        obj.select_set(True)
    bpy.context.view_layer.objects.active = objects[0]
    scene.frame_set(scene.frame_start)
    result = bpy.ops.export_scene.gltf(
        filepath=str(glb_path),
        export_format="GLB",
        use_selection=True,
        export_cameras=False,
        export_lights=False,
        export_yup=True,
        export_animations=True,
        export_frame_range=True,
        export_force_sampling=True,
        export_optimize_animation_size=True,
        export_optimize_animation_keep_anim_object=True,
        export_shared_accessors=True,
        export_draco_mesh_compression_enable=False,
        export_meshopt_compression_enable=False,
    )
    if "FINISHED" not in result:
        raise RuntimeError(f"glTF exporter did not finish: {result}")


def render_fallback(scene, camera, b5a_config: dict, fallback_path: Path) -> None:
    scene.frame_set(int(b5a_config["poses"]["closed"]["frame"]))
    camera.location = (0.0, -12.4, 1.0)
    base.point_camera(camera, (0.0, 0.0, 0.0))
    floor = bpy.data.objects.get("REVIEW_Floor")
    if floor:
        floor.hide_render = True
    scene.render.film_transparent = True
    scene.render.resolution_x = 768
    scene.render.resolution_y = 768
    scene.render.filepath = str(fallback_path)
    bpy.ops.render.render(write_still=True)
    scene.render.film_transparent = False
    if floor:
        floor.hide_render = False


def main() -> None:
    args = parse_args()
    paths = {
        key: Path(value).resolve()
        for key, value in {
            "b5a_config": args.b5a_config,
            "b5b_config": args.b5b_config,
            "source_blend": args.source_blend,
            "blend": args.blend_out,
            "glb": args.glb_out,
            "manifest": args.manifest_out,
            "render_dir": args.render_dir,
            "fallback": args.fallback_out,
            "license": args.license,
            "bvh_report": args.bvh_report,
        }.items()
    }
    for key in ("blend", "glb", "manifest", "fallback", "bvh_report"):
        ensure_parent(paths[key])
    paths["render_dir"].mkdir(parents=True, exist_ok=True)

    b5a_config = json.loads(paths["b5a_config"].read_text(encoding="utf-8"))
    b5b_config = json.loads(paths["b5b_config"].read_text(encoding="utf-8"))
    model = technical.reconstruct_model()
    before_stats = base.mesh_stats(base.descendants(model["root"]))
    materials = finish_materials(b5b_config)
    bevel_records = apply_surface_finish(model, b5b_config)
    panel_lines = create_panel_lines(model, materials["MAT_Charcoal"], b5b_config)
    scene = bpy.context.scene
    scene.name = "CancerKnowledgeMachine_B5B_FinalCandidate"
    scene.render.fps = int(b5a_config["animation"]["fps"])
    scene.render.fps_base = 1.0

    base_checks, pose_bounds = base.validate_contract(scene, model, b5a_config)
    targeted_scan = technical.targeted_appendage_scan(scene, model, b5a_config)
    animated = [
        model["root"], model["claws"]["left"], model["claws"]["right"],
        model["pincer_roots"]["left"], model["pincer_roots"]["right"],
        model["rings"]["inner"], model["rings"]["outer"], model["legs_group"],
        *model["leg_roots"].values(),
    ]
    checks = {
        **base_checks,
        "targetedAppendageCollisionScan": targeted_scan,
        "canonicalActionNames": technical.action_name_contract(animated),
        "restrainedPanelLines": {
            "pass": len(panel_lines) == 4,
            "actual": panel_lines,
            "maximum": 4,
        },
    }
    failed = [name for name, result in checks.items() if not result["pass"]]
    if failed:
        raise RuntimeError(f"B5B checks failed before export: {failed}")

    bvh_report = {
        "status": "PASS",
        "checkedAtUtc": datetime.now(timezone.utc).isoformat(),
        "sourceBlend": str(paths["source_blend"]),
        "checks": {
            "baselineTransitionCollisionScan": base_checks["transitionCollisionScan"],
            "targetedAppendageCollisionScan": targeted_scan,
        },
        "interpretation": "No sampled appendage intersection after surface finishing; accepted B5A form and pivots are unchanged.",
    }
    paths["bvh_report"].write_text(
        json.dumps(bvh_report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )

    remove_review_scene_objects()
    render_config = {
        **b5a_config,
        "render": b5b_config["render"],
    }
    camera = base.setup_review_scene(scene, render_config)
    scene.render.engine = "BLENDER_EEVEE"
    scene.render.image_settings.file_format = "PNG"
    scene.render.image_settings.color_mode = "RGBA"
    scene.frame_set(scene.frame_start)
    bpy.ops.wm.save_as_mainfile(filepath=str(paths["blend"]), check_existing=False)

    model_objects = base.descendants(model["root"])
    export_optimized_glb(scene, model_objects, paths["glb"])
    renders = base.render_reviews(scene, camera, render_config, paths["render_dir"])
    render_fallback(scene, camera, b5a_config, paths["fallback"])
    scene.frame_set(scene.frame_start)
    bpy.ops.wm.save_as_mainfile(filepath=str(paths["blend"]), check_existing=False)

    fps = int(b5a_config["animation"]["fps"])
    poses = candidate.pose_manifest(b5a_config, fps)
    after_stats = base.mesh_stats(model_objects)
    manifest = {
        "schemaVersion": "1.0-b5b-final-candidate",
        "contractStatus": "B5B_REVIEW_PENDING",
        "asset": {
            "name": b5b_config["asset"]["name"],
            "revision": b5b_config["asset"]["revision"],
            "stage": "b5b-final-candidate",
            "sourceRevision": b5b_config["asset"]["sourceStage"],
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
            "exportFormat": "GLB",
            "animationKeyReduction": True,
            "geometryCompression": False,
        },
        "poseSampling": {
            "fps": fps,
            "fpsBase": 1.0,
            "timeFormula": b5a_config["animation"]["timeFormula"],
            "poses": {
                name: {"frame": pose["frame"], "timeSeconds": pose["timeSeconds"]}
                for name, pose in poses.items()
            },
            "runtimeRule": "Sample clips by manifest timeSeconds; keyframe-array index is not the pose contract.",
        },
        "poses": poses,
        "stats": after_stats,
        "optimization": {
            **b5b_config["optimization"],
            "beforeFinish": before_stats,
            "afterFinish": after_stats,
        },
        "surfaceFinish": {
            "materials": b5b_config["materials"],
            "bevels": bevel_records,
            "panelLines": panel_lines,
            "textures": [],
        },
        "boundsByPose": pose_bounds,
        "nodes": base.hierarchy_record(model_objects),
        "checks": checks,
        "renders": renders,
        "provenance": {
            "source": b5b_config["asset"]["license"],
            "externalModels": [],
            "externalTextures": [],
            "licenseFile": file_record(paths["license"]),
            "fallback": file_record(paths["fallback"]),
        },
        "files": {
            "sourceBlend": file_record(paths["source_blend"]),
            "blend": file_record(paths["blend"]),
            "glb": file_record(paths["glb"]),
            "fallback": file_record(paths["fallback"]),
            "license": file_record(paths["license"]),
            "b5aConfig": file_record(paths["b5a_config"]),
            "b5bConfig": file_record(paths["b5b_config"]),
            "script": file_record(Path(__file__).resolve()),
            "bvhReport": file_record(paths["bvh_report"]),
        },
        "limitations": [
            "This is the B5B final candidate awaiting user visual approval, not an approved final model.",
            "BVH checks sample 21 transition frames; browser visual review remains separate evidence.",
            "No geometry compression is used because the standard GLB is below budget and the current runtime has no Draco/Meshopt decoder.",
        ],
    }
    paths["manifest"].write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print("STUDYMASTER_B5B_EXPORT=" + json.dumps({
        "blend": str(paths["blend"]),
        "glb": str(paths["glb"]),
        "manifest": str(paths["manifest"]),
        "fallback": str(paths["fallback"]),
        "renders": renders,
        "checksPassed": len(checks),
        "stats": after_stats,
    }, ensure_ascii=False))


if __name__ == "__main__":
    main()
