"""Build the StudyMaster Cancer knowledge-machine blockout in an isolated Blender process.

Run with Blender, never with the user's interactive scene:
  blender.exe --background --factory-startup --python build_blockout.py -- \
    --config blockout.json --blend-out model.blend --glb-out model.glb \
    --manifest-out model-manifest.json --render-dir review
"""

from __future__ import annotations

import argparse
import hashlib
import json
import math
import platform
import sys
from datetime import datetime, timezone
from pathlib import Path

import bpy
from mathutils import Vector


REQUIRED_ROOT_CHILDREN = {
    "crab_body",
    "claw_left",
    "claw_right",
    "legs_group",
    "cancer_mark",
    "ring_inner",
    "ring_outer",
}
POSE_NAMES = ("closed", "open", "guide_left", "guide_right", "compact")
FORBIDDEN_NAME_PARTS = ("antenna", "tentacle", "whisker", "rau_")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", required=True)
    parser.add_argument("--blend-out", required=True)
    parser.add_argument("--glb-out", required=True)
    parser.add_argument("--manifest-out", required=True)
    parser.add_argument("--render-dir", required=True)
    args = sys.argv[sys.argv.index("--") + 1 :] if "--" in sys.argv else []
    return parser.parse_args(args)


def ensure_parent(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def vector_list(value) -> list[float]:
    return [round(float(component), 6) for component in value]


def clear_scene() -> None:
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for datablocks in (bpy.data.meshes, bpy.data.curves, bpy.data.materials, bpy.data.cameras, bpy.data.lights):
        for datablock in list(datablocks):
            if datablock.users == 0:
                datablocks.remove(datablock)


def make_material(name: str, color: list[float], metallic: float, roughness: float):
    material = bpy.data.materials.new(name)
    material.use_nodes = True
    shader = material.node_tree.nodes.get("Principled BSDF")
    shader.inputs["Base Color"].default_value = color
    shader.inputs["Metallic"].default_value = metallic
    shader.inputs["Roughness"].default_value = roughness
    return material


def assign_material(obj, material) -> None:
    if hasattr(obj.data, "materials"):
        obj.data.materials.append(material)


def smooth(obj) -> None:
    if obj.type == "MESH":
        for polygon in obj.data.polygons:
            polygon.use_smooth = True


def create_empty(name: str, location=(0.0, 0.0, 0.0), parent=None):
    obj = bpy.data.objects.new(name, None)
    obj.empty_display_type = "PLAIN_AXES"
    obj.empty_display_size = 0.22
    obj.location = location
    bpy.context.collection.objects.link(obj)
    if parent:
        obj.parent = parent
    return obj


def parent_keep_world(obj, parent) -> None:
    bpy.context.view_layer.update()
    world = obj.matrix_world.copy()
    obj.parent = parent
    obj.matrix_world = world


def create_ellipsoid(name: str, location, scale, material, parent=None, segments=24, rings=16):
    bpy.ops.mesh.primitive_uv_sphere_add(
        segments=segments,
        ring_count=rings,
        radius=1.0,
        location=location,
    )
    obj = bpy.context.object
    obj.name = name
    obj.scale = scale
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    smooth(obj)
    assign_material(obj, material)
    if parent:
        parent_keep_world(obj, parent)
    return obj


def create_cylinder_between(name: str, start, end, radius: float, material, parent=None, vertices=12):
    start_vec = Vector(start)
    end_vec = Vector(end)
    direction = end_vec - start_vec
    midpoint = (start_vec + end_vec) * 0.5
    bpy.ops.mesh.primitive_cylinder_add(
        vertices=vertices,
        radius=radius,
        depth=direction.length,
        location=midpoint,
    )
    obj = bpy.context.object
    obj.name = name
    obj.rotation_euler = direction.to_track_quat("Z", "Y").to_euler()
    smooth(obj)
    assign_material(obj, material)
    if parent:
        parent_keep_world(obj, parent)
    return obj


def create_torus(name: str, radius: float, tube: float, y: float, material, parent, major_segments: int, minor_segments: int):
    bpy.ops.mesh.primitive_torus_add(
        major_segments=major_segments,
        minor_segments=minor_segments,
        major_radius=radius,
        minor_radius=tube,
        location=(0.0, y, 0.0),
        rotation=(math.pi / 2.0, 0.0, 0.0),
    )
    obj = bpy.context.object
    obj.name = name
    smooth(obj)
    assign_material(obj, material)
    parent_keep_world(obj, parent)
    return obj


def create_crescent_mark(cfg, material, parent):
    curve = bpy.data.curves.new("cancer_mark_curve", type="CURVE")
    curve.dimensions = "3D"
    curve.resolution_u = 2
    curve.bevel_depth = cfg["thickness"]
    curve.bevel_resolution = 3
    spline = curve.splines.new("POLY")
    point_count = 28
    spline.points.add(point_count - 1)
    for index in range(point_count):
        angle = math.radians(55.0 + (250.0 * index / (point_count - 1)))
        x = -0.05 + cfg["radius"] * math.cos(angle)
        z = cfg["z"] + cfg["radius"] * math.sin(angle)
        spline.points[index].co = (x, cfg["frontY"], z, 1.0)
    obj = bpy.data.objects.new("cancer_mark", curve)
    bpy.context.collection.objects.link(obj)
    assign_material(obj, material)
    obj.parent = parent
    return obj


def build_model(config):
    palette = config["palette"]
    materials = {
        "MAT_GoldSatin": make_material("MAT_GoldSatin", palette["goldSatin"], 0.72, 0.32),
        "MAT_Charcoal": make_material("MAT_Charcoal", palette["charcoal"], 0.12, 0.56),
        "MAT_AmberGlow": make_material("MAT_AmberGlow", palette["amber"], 0.45, 0.3),
    }

    root = create_empty("crab_root")
    root["asset_role"] = "StudyMaster Cancer knowledge-machine blockout"
    root["front_axis"] = config["asset"]["frontAxis"]
    root["pose_names"] = ",".join(POSE_NAMES)

    body_cfg = config["body"]
    body = create_ellipsoid(
        "crab_body",
        body_cfg["location"],
        body_cfg["scale"],
        materials["MAT_Charcoal"],
        root,
        body_cfg["segments"],
        body_cfg["rings"],
    )
    body["shape_contract"] = "curved_3d_shell_not_extruded_disc"

    rings_cfg = config["rings"]
    ring_inner = create_torus(
        "ring_inner",
        rings_cfg["inner"]["majorRadius"],
        rings_cfg["inner"]["minorRadius"],
        rings_cfg["locationY"],
        materials["MAT_GoldSatin"],
        root,
        rings_cfg["majorSegments"],
        rings_cfg["minorSegments"],
    )
    ring_outer = create_torus(
        "ring_outer",
        rings_cfg["outer"]["majorRadius"],
        rings_cfg["outer"]["minorRadius"],
        rings_cfg["locationY"] + 0.12,
        materials["MAT_Charcoal"],
        root,
        rings_cfg["majorSegments"],
        rings_cfg["minorSegments"],
    )

    legs_group = create_empty("legs_group", parent=root)
    leg_cfg = config["legs"]
    leg_roots = {}
    for side_name, sign in (("left", -1.0), ("right", 1.0)):
        for index in range(leg_cfg["perSide"]):
            suffix = f"{index + 1:02d}"
            root_point = (
                sign * leg_cfg["rootX"],
                leg_cfg["rootY"][index],
                leg_cfg["rootZ"][index],
            )
            leg_root = create_empty(f"leg_{side_name}_{suffix}", root_point, legs_group)
            leg_root["sequence"] = index + 1
            leg_root["side"] = side_name
            elbow = (
                sign * (leg_cfg["rootX"] + leg_cfg["upperLength"][index]),
                leg_cfg["rootY"][index] + (-0.08 + index * 0.05),
                leg_cfg["rootZ"][index] + leg_cfg["outwardRise"][index],
            )
            foot = (
                sign * (leg_cfg["rootX"] + leg_cfg["upperLength"][index] + leg_cfg["lowerLength"][index]),
                elbow[1] + (-0.08 + index * 0.04),
                elbow[2] - (0.64 + index * 0.04),
            )
            create_cylinder_between(
                f"leg_{side_name}_{suffix}_upper",
                root_point,
                elbow,
                leg_cfg["radius"],
                materials["MAT_GoldSatin"],
                leg_root,
            )
            create_cylinder_between(
                f"leg_{side_name}_{suffix}_lower",
                elbow,
                foot,
                leg_cfg["radius"] * 0.78,
                materials["MAT_GoldSatin"],
                leg_root,
            )
            create_ellipsoid(
                f"leg_{side_name}_{suffix}_joint",
                elbow,
                (leg_cfg["radius"] * 1.28,) * 3,
                materials["MAT_AmberGlow"],
                leg_root,
                16,
                10,
            )
            leg_roots[(side_name, index + 1)] = leg_root

    claw_cfg = config["claws"]
    claws = {}
    for side_name, sign in (("left", -1.0), ("right", 1.0)):
        signed = lambda values: (sign * values[0], values[1], values[2])
        claw_root = create_empty(f"claw_{side_name}", signed(claw_cfg["root"]), root)
        elbow = signed(claw_cfg["elbow"])
        palm = signed(claw_cfg["palm"])
        create_cylinder_between(
            f"claw_{side_name}_arm",
            signed(claw_cfg["root"]),
            elbow,
            claw_cfg["segmentRadius"],
            materials["MAT_GoldSatin"],
            claw_root,
            16,
        )
        create_cylinder_between(
            f"claw_{side_name}_forearm",
            elbow,
            palm,
            claw_cfg["segmentRadius"] * 0.88,
            materials["MAT_GoldSatin"],
            claw_root,
            16,
        )
        create_ellipsoid(
            f"claw_{side_name}_palm",
            palm,
            claw_cfg["palmScale"],
            materials["MAT_GoldSatin"],
            claw_root,
            24,
            14,
        )
        pincer_root = create_empty(f"pincer_{side_name}", palm, claw_root)
        jaw_direction = sign * claw_cfg["pincerLength"]
        for jaw_index, z_offset in enumerate((-claw_cfg["pincerGap"], claw_cfg["pincerGap"]), 1):
            jaw_start = (palm[0] + sign * 0.18, palm[1] - 0.02, palm[2] + z_offset * 0.45)
            jaw_end = (palm[0] + jaw_direction, palm[1] - 0.04, palm[2] + z_offset)
            create_cylinder_between(
                f"pincer_{side_name}_{jaw_index:02d}",
                jaw_start,
                jaw_end,
                claw_cfg["segmentRadius"] * 0.52,
                materials["MAT_AmberGlow"],
                pincer_root,
                12,
            )
        claws[side_name] = claw_root

    mark = create_crescent_mark(config["mark"], materials["MAT_AmberGlow"], root)
    mark["visual_priority"] = "restrained_secondary_symbol"

    return {
        "root": root,
        "body": body,
        "rings": {"inner": ring_inner, "outer": ring_outer},
        "legs_group": legs_group,
        "leg_roots": leg_roots,
        "claws": claws,
        "mark": mark,
        "materials": materials,
    }


def set_pose_keys(scene, model, config):
    root = model["root"]
    claws = model["claws"]
    ring_inner = model["rings"]["inner"]
    ring_outer = model["rings"]["outer"]
    legs_group = model["legs_group"]
    for marker in list(scene.timeline_markers):
        scene.timeline_markers.remove(marker)
    for pose_name in POSE_NAMES:
        pose = config["poses"][pose_name]
        frame = int(pose["frame"])
        scene.frame_set(frame)
        root_scale = float(pose["rootScale"])
        root.scale = (root_scale,) * 3
        claws["left"].rotation_euler = (0.0, math.radians(pose["clawLeftYDeg"]), 0.0)
        claws["right"].rotation_euler = (0.0, math.radians(pose["clawRightYDeg"]), 0.0)
        ring_inner.rotation_euler = (math.pi / 2.0, math.radians(pose["ringInnerYDeg"]), 0.0)
        ring_outer.rotation_euler = (math.pi / 2.0, math.radians(pose["ringOuterYDeg"]), 0.0)
        ring_scale = float(pose["ringScale"])
        ring_inner.scale = (ring_scale,) * 3
        ring_outer.scale = (ring_scale,) * 3
        legs_scale = float(pose["legsScale"])
        legs_group.scale = (legs_scale,) * 3
        for obj in (root, claws["left"], claws["right"], ring_inner, ring_outer, legs_group):
            obj.keyframe_insert(data_path="location", frame=frame)
            obj.keyframe_insert(data_path="rotation_euler", frame=frame)
            obj.keyframe_insert(data_path="scale", frame=frame)
        scene.timeline_markers.new(pose_name, frame=frame)
    # Blender 5.x uses layered/slotted Actions; pose keys are authoritative samples.
    # Interpolation is intentionally left at Blender's supported default because the
    # eventual scroll transition belongs to GSAP, not to this review-only animation.
    scene.frame_start = int(config["poses"]["closed"]["frame"])
    scene.frame_end = int(config["poses"]["compact"]["frame"])
    scene.frame_set(scene.frame_start)


def descendants(root):
    result = []
    stack = [root]
    while stack:
        current = stack.pop()
        result.append(current)
        stack.extend(current.children)
    return result


def world_bounds(scene, objects, frame: int):
    scene.frame_set(frame)
    bpy.context.view_layer.update()
    minimum = Vector((math.inf, math.inf, math.inf))
    maximum = Vector((-math.inf, -math.inf, -math.inf))
    for obj in objects:
        if obj.type not in {"MESH", "CURVE"}:
            continue
        evaluated = obj.evaluated_get(bpy.context.evaluated_depsgraph_get())
        for corner in evaluated.bound_box:
            point = evaluated.matrix_world @ Vector(corner)
            minimum.x = min(minimum.x, point.x)
            minimum.y = min(minimum.y, point.y)
            minimum.z = min(minimum.z, point.z)
            maximum.x = max(maximum.x, point.x)
            maximum.y = max(maximum.y, point.y)
            maximum.z = max(maximum.z, point.z)
    size = maximum - minimum
    return {"min": vector_list(minimum), "max": vector_list(maximum), "size": vector_list(size)}


def validate_contract(scene, model, config):
    root = model["root"]
    object_names = {obj.name for obj in descendants(root)}
    direct_children = {obj.name for obj in root.children}
    leg_root_names = {
        f"leg_{side}_{index:02d}"
        for side in ("left", "right")
        for index in range(1, config["legs"]["perSide"] + 1)
    }
    actual_leg_roots = {obj.name for obj in model["legs_group"].children if obj.name in leg_root_names}
    symmetry_errors = []
    for index in range(1, config["legs"]["perSide"] + 1):
        left = model["leg_roots"][("left", index)].location
        right = model["leg_roots"][("right", index)].location
        if abs(left.x + right.x) > 1e-6 or abs(left.y - right.y) > 1e-6 or abs(left.z - right.z) > 1e-6:
            symmetry_errors.append(index)
    closed_bounds = world_bounds(scene, descendants(root), config["poses"]["closed"]["frame"])
    compact_bounds = world_bounds(scene, descendants(root), config["poses"]["compact"]["frame"])
    compact_ratio = compact_bounds["size"][0] / closed_bounds["size"][0]
    scene.frame_set(int(config["poses"]["closed"]["frame"]))
    bpy.context.view_layer.update()
    closed_body_depth = float(model["body"].dimensions.y)
    ring_clearance = (
        config["rings"]["inner"]["majorRadius"]
        - config["rings"]["inner"]["minorRadius"]
        - max(config["body"]["scale"][0], config["body"]["scale"][2])
    )
    ring_front_y = config["rings"]["locationY"] - config["rings"]["inner"]["minorRadius"]
    body_back_y = config["body"]["location"][1] + config["body"]["scale"][1]
    leg_center_y = max(
        config["legs"]["rootY"][index]
        + (-0.08 + index * 0.05)
        + (-0.08 + index * 0.04)
        for index in range(config["legs"]["perSide"])
    )
    leg_back_y = leg_center_y + config["legs"]["radius"] * 1.28
    checks = {
        "requiredRootChildren": {
            "pass": REQUIRED_ROOT_CHILDREN.issubset(direct_children),
            "missing": sorted(REQUIRED_ROOT_CHILDREN - direct_children),
        },
        "walkingLegCount": {"pass": len(actual_leg_roots) == 8, "actual": len(actual_leg_roots), "expected": 8},
        "walkingLegSymmetry": {"pass": not symmetry_errors, "mismatchedPairs": symmetry_errors},
        "forbiddenAntennaLikeNodes": {
            "pass": not any(part in name.lower() for name in object_names for part in FORBIDDEN_NAME_PARTS),
            "matches": sorted(name for name in object_names if any(part in name.lower() for part in FORBIDDEN_NAME_PARTS)),
        },
        "curvedBodyDepth": {
            "pass": closed_body_depth >= 1.4,
            "depth": round(closed_body_depth, 6),
            "minimum": 1.4,
        },
        "ringBodyRadialClearance": {
            "pass": ring_clearance >= 0.35,
            "clearance": round(ring_clearance, 6),
            "minimum": 0.35,
        },
        "ringBodyDepthClearance": {
            "pass": ring_front_y - body_back_y >= 0.18,
            "clearance": round(ring_front_y - body_back_y, 6),
            "minimum": 0.18,
        },
        "ringLegDepthClearance": {
            "pass": ring_front_y - leg_back_y >= 0.15,
            "clearance": round(ring_front_y - leg_back_y, 6),
            "minimum": 0.15,
        },
        "poseSet": {"pass": tuple(config["poses"].keys()) == POSE_NAMES, "actual": list(config["poses"].keys())},
        "compactWidth": {
            "pass": compact_ratio <= 0.82,
            "closed": closed_bounds["size"][0],
            "compact": compact_bounds["size"][0],
            "ratio": round(compact_ratio, 6),
            "maximumRatio": 0.82,
        },
    }
    return checks, {"closed": closed_bounds, "compact": compact_bounds}


def mesh_stats(objects):
    meshes = [obj for obj in objects if obj.type == "MESH"]
    triangle_count = 0
    vertex_count = 0
    material_names = set()
    for obj in meshes:
        obj.data.calc_loop_triangles()
        triangle_count += len(obj.data.loop_triangles)
        vertex_count += len(obj.data.vertices)
        material_names.update(slot.name for slot in obj.data.materials if slot)
    return {
        "objectCount": len(objects),
        "meshCount": len(meshes),
        "triangleCount": triangle_count,
        "vertexCount": vertex_count,
        "materialCount": len(material_names),
        "materials": sorted(material_names),
        "textureCount": 0,
    }


def setup_review_scene(scene, config):
    scene.render.engine = "BLENDER_EEVEE"
    scene.render.resolution_x = int(config["render"]["resolution"][0])
    scene.render.resolution_y = int(config["render"]["resolution"][1])
    scene.render.resolution_percentage = 100
    scene.render.image_settings.file_format = "PNG"
    scene.render.film_transparent = False
    scene.render.image_settings.color_mode = "RGBA"
    scene.render.resolution_percentage = 100
    scene.world.use_nodes = True
    background = scene.world.node_tree.nodes.get("Background")
    background.inputs["Color"].default_value = config["palette"]["ivory"]
    background.inputs["Strength"].default_value = 0.55

    camera_data = bpy.data.cameras.new("ReviewCamera")
    camera = bpy.data.objects.new("ReviewCamera", camera_data)
    bpy.context.collection.objects.link(camera)
    camera.data.lens = 54.0
    scene.camera = camera

    floor_material = make_material("REVIEW_IvoryFloor", config["palette"]["ivory"], 0.0, 0.9)
    bpy.ops.mesh.primitive_plane_add(size=30.0, location=(0.0, 0.0, -3.82))
    floor = bpy.context.object
    floor.name = "REVIEW_Floor"
    assign_material(floor, floor_material)

    lights = (
        ("REVIEW_Key", "AREA", (4.5, -6.0, 7.5), 1050.0, 5.0),
        ("REVIEW_Fill", "AREA", (-5.5, -2.5, 3.0), 700.0, 4.0),
        ("REVIEW_Rim", "AREA", (2.0, 4.5, 6.0), 900.0, 3.0),
    )
    for name, light_type, location, energy, size in lights:
        light_data = bpy.data.lights.new(name, type=light_type)
        light_data.energy = energy
        light_data.shape = "DISK"
        light_data.size = size
        light = bpy.data.objects.new(name, light_data)
        light.location = location
        bpy.context.collection.objects.link(light)
        point_camera(light, (0.0, 0.0, 0.0))
    return camera


def point_camera(obj, target) -> None:
    direction = Vector(target) - obj.location
    obj.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()


def render_reviews(scene, camera, config, render_dir: Path):
    render_dir.mkdir(parents=True, exist_ok=True)
    outputs = []
    for view in config["render"]["views"]:
        scene.frame_set(int(config["poses"][view["pose"]]["frame"]))
        camera.location = view["camera"]
        point_camera(camera, view["target"])
        output = render_dir / f"{view['name']}.png"
        scene.render.filepath = str(output)
        bpy.ops.render.render(write_still=True)
        outputs.append({"name": view["name"], "pose": view["pose"], "path": str(output)})
    return outputs


def hierarchy_record(objects):
    records = []
    for obj in sorted(objects, key=lambda item: item.name):
        records.append(
            {
                "name": obj.name,
                "type": obj.type,
                "parent": obj.parent.name if obj.parent else None,
                "location": vector_list(obj.location),
                "rotationEuler": vector_list(obj.rotation_euler),
                "scale": vector_list(obj.scale),
            }
        )
    return records


def export_glb(scene, objects, glb_path: Path):
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
    )
    if "FINISHED" not in result:
        raise RuntimeError(f"glTF exporter did not finish: {result}")


def main() -> None:
    args = parse_args()
    config_path = Path(args.config).resolve()
    blend_path = Path(args.blend_out).resolve()
    glb_path = Path(args.glb_out).resolve()
    manifest_path = Path(args.manifest_out).resolve()
    render_dir = Path(args.render_dir).resolve()
    for output in (blend_path, glb_path, manifest_path):
        ensure_parent(output)
    render_dir.mkdir(parents=True, exist_ok=True)

    config = json.loads(config_path.read_text(encoding="utf-8"))
    if tuple(config["poses"].keys()) != POSE_NAMES:
        raise ValueError(f"Pose order/names must be exactly {POSE_NAMES}")
    if int(config["legs"]["perSide"]) != 4:
        raise ValueError("Model contract requires exactly four walking legs per side")

    clear_scene()
    scene = bpy.context.scene
    scene.name = "CancerKnowledgeMachine_Blockout"
    scene.unit_settings.system = "METRIC"
    scene.unit_settings.scale_length = 1.0
    model = build_model(config)
    set_pose_keys(scene, model, config)
    model_objects = descendants(model["root"])
    checks, pose_bounds = validate_contract(scene, model, config)
    failed_checks = [name for name, result in checks.items() if not result["pass"]]
    if failed_checks:
        raise RuntimeError(f"Blockout contract checks failed: {failed_checks}")

    camera = setup_review_scene(scene, config)
    scene.frame_set(scene.frame_start)
    bpy.ops.wm.save_as_mainfile(filepath=str(blend_path), check_existing=False)
    export_glb(scene, model_objects, glb_path)
    renders = render_reviews(scene, camera, config, render_dir)
    scene.frame_set(scene.frame_start)
    bpy.ops.wm.save_as_mainfile(filepath=str(blend_path), check_existing=False)

    pose_manifest = {}
    for pose_name in POSE_NAMES:
        pose = config["poses"][pose_name]
        pose_manifest[pose_name] = {
            "frame": pose["frame"],
            "rootScale": pose["rootScale"],
            "clawLeftYDeg": pose["clawLeftYDeg"],
            "clawRightYDeg": pose["clawRightYDeg"],
            "ringInnerYDeg": pose["ringInnerYDeg"],
            "ringOuterYDeg": pose["ringOuterYDeg"],
            "ringScale": pose["ringScale"],
            "legsScale": pose["legsScale"],
        }

    file_records = {}
    source_script = Path(__file__).resolve()
    for label, path in (
        ("blend", blend_path),
        ("glb", glb_path),
        ("config", config_path),
        ("script", source_script),
    ):
        file_records[label] = {"path": str(path), "bytes": path.stat().st_size, "sha256": sha256(path)}
    for render in renders:
        path = Path(render["path"])
        render["bytes"] = path.stat().st_size
        render["sha256"] = sha256(path)

    manifest = {
        "schemaVersion": "0.1-blockout-review",
        "contractStatus": "AWAITING_BLOCKOUT_APPROVAL",
        "asset": {
            "name": config["asset"]["name"],
            "stage": "blockout",
            "frontAxisBlender": config["asset"]["frontAxis"],
            "upAxisBlender": config["asset"]["upAxis"],
            "units": config["asset"]["unit"],
            "referencePolicy": config["asset"]["referencePolicy"],
            "walkingLegCount": 8,
            "clawCount": 2,
            "antennaCount": 0,
        },
        "generatedAtUtc": datetime.now(timezone.utc).isoformat(),
        "toolchain": {
            "blenderVersion": bpy.app.version_string,
            "blenderVersionTuple": list(bpy.app.version),
            "pythonVersion": platform.python_version(),
            "exportOperator": "bpy.ops.export_scene.gltf",
            "exportFormat": "GLB",
            "factoryStartupRequired": True,
        },
        "stats": mesh_stats(model_objects),
        "boundsByPose": pose_bounds,
        "poses": pose_manifest,
        "nodes": hierarchy_record(model_objects),
        "checks": checks,
        "files": file_records,
        "renders": renders,
        "limitations": [
            "Blockout geometry and materials are review-only, not final topology or look-dev.",
            "The numeric checks cover hierarchy, symmetry, body depth, ring clearance, and compact bounds; visual gaps and silhouette still require human review.",
            "Content/CTA clearance is represented by compact bounds only because product UI integration is outside Step 3.",
        ],
    }
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(
        "STUDYMASTER_BLOCKOUT_RESULT="
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
