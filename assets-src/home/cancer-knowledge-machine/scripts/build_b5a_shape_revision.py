"""Build the focused B5A shape revision and exactly two gray review renders.

This is intentionally a geometry-gate script, not the final export pipeline. It
preserves the prior B5A candidate and blockout v2, reuses their proven hierarchy
and pose setup, changes only the claw/carapace/leg large forms, saves a separate
.blend, and does not export GLB or run browser/full-transition QA.
"""

from __future__ import annotations

import argparse
import json
import math
import sys
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
    parser.add_argument("--blend-out", required=True)
    parser.add_argument("--render-dir", required=True)
    args = sys.argv[sys.argv.index("--") + 1 :] if "--" in sys.argv else []
    return parser.parse_args(args)


def remove_object(name: str) -> None:
    obj = bpy.data.objects.get(name)
    if obj is not None:
        bpy.data.objects.remove(obj, do_unlink=True)


def flat_shade(obj) -> None:
    if obj.type == "MESH":
        for polygon in obj.data.polygons:
            polygon.use_smooth = False


def replace_body_armor(model, config) -> None:
    """Use nested curved volumes embedded into the dome, not flat badges."""
    remove_object("body_armor_bezel")
    remove_object("body_front_plate")
    cfg = config["shapeRevision"]["bodyArmor"]
    outer = base.create_ellipsoid(
        "body_armor_bezel",
        cfg["outerLocation"],
        cfg["outerScale"],
        model["materials"]["MAT_GoldSatin"],
        model["body"],
        32,
        20,
    )
    outer["asset_role"] = "curved_shell_transition_embedded_in_body_dome"
    inner = base.create_ellipsoid(
        "body_front_plate",
        cfg["innerLocation"],
        cfg["innerScale"],
        model["materials"]["MAT_Charcoal"],
        model["body"],
        32,
        20,
    )
    inner["asset_role"] = "curved_armored_face_inset_not_flat_shield"
    lower = base.create_ellipsoid(
        "body_armor_lower_transition",
        cfg["lowerTransitionLocation"],
        cfg["lowerTransitionScale"],
        model["materials"]["MAT_GoldSatin"],
        model["body"],
        28,
        16,
    )
    lower["asset_role"] = "lower_shell_volume_transition"


def replace_claw_armor_and_fingers(model, config) -> None:
    """Raise both claw assemblies and curve their tapered fingers inward."""
    palm_source = config["claws"]["palm"]
    revision = config["shapeRevision"]["clawArmor"]
    depth = float(config["claws"]["fingerDepth"])
    for side_name, sign in (("left", -1.0), ("right", 1.0)):
        palm = (sign * palm_source[0], palm_source[1], palm_source[2])
        palm_obj = bpy.data.objects[f"claw_{side_name}_palm"]
        palm_obj.rotation_euler.y = -sign * math.radians(12.0)
        remove_object(f"claw_{side_name}_palm_cap")
        cap = base.create_ellipsoid(
            f"claw_{side_name}_palm_cap",
            (palm[0], palm[1] + revision["capFrontOffsetY"], palm[2]),
            revision["capScale"],
            model["materials"]["MAT_Charcoal"],
            model["claws"][side_name],
            24,
            16,
        )
        cap.rotation_euler.y = -sign * math.radians(12.0)
        cap["asset_role"] = "curved_claw_shell_inset_not_eye"

        remove_object(f"pincer_{side_name}_upper")
        remove_object(f"pincer_{side_name}_lower")
        finger_specs = (
            (
                "upper",
                revision["outerFingerX"],
                revision["outerFingerZ"],
                revision["outerWidths"],
                model["materials"]["MAT_Charcoal"],
            ),
            (
                "lower",
                revision["innerFingerX"],
                revision["innerFingerZ"],
                revision["innerWidths"],
                model["materials"]["MAT_AmberGlow"],
            ),
        )
        for finger_name, x_offsets, z_offsets, widths, material in finger_specs:
            points = [
                (
                    palm[0] + sign * x_offsets[index],
                    palm[1] - 0.07 - index * 0.012,
                    palm[2] + z_offsets[index],
                )
                for index in range(len(x_offsets))
            ]
            finger = base.create_tapered_blade(
                f"pincer_{side_name}_{finger_name}",
                points,
                widths,
                depth,
                material,
                model["pincer_roots"][side_name],
            )
            finger["asset_role"] = "upright_inward_curved_tapered_pincer_finger"


def remove_leg_geometry(side_name: str, suffix: str) -> None:
    prefix = f"leg_{side_name}_{suffix}_"
    for obj in list(bpy.data.objects):
        if obj.type == "MESH" and obj.name.startswith(prefix):
            bpy.data.objects.remove(obj, do_unlink=True)


def create_armored_leg_segment(
    name: str,
    start,
    end,
    radii,
    flatten: float,
    material,
    parent,
):
    obj = base.create_tapered_segment_between(
        name,
        start,
        end,
        radii[0],
        radii[1],
        material,
        parent,
        vertices=6,
        flatten=flatten,
    )
    flat_shade(obj)
    obj["asset_role"] = "faceted_tapered_leg_armor"
    return obj


def replace_leg_forms(model, config) -> None:
    """Replace rod-like legs with four visibly tapered armor segments."""
    leg = config["legs"]
    revision = config["shapeRevision"]["legs"]
    radius = float(leg["radius"])
    for side_name, sign in (("left", -1.0), ("right", 1.0)):
        for index in range(int(leg["perSide"])):
            suffix = f"{index + 1:02d}"
            parent = model["leg_roots"][(side_name, index + 1)]
            remove_leg_geometry(side_name, suffix)
            root = (
                sign * leg["rootX"],
                leg["rootY"][index],
                leg["rootZ"][index],
            )
            depth_step = leg["depthRhythm"][index]
            coxa = (
                sign * (leg["rootX"] + leg["coxaLength"][index]),
                root[1] + depth_step * 0.42,
                root[2] + leg["kneeRise"][index] * 0.22,
            )
            knee = (
                sign
                * (
                    leg["rootX"]
                    + leg["coxaLength"][index]
                    + leg["upperLength"][index]
                ),
                coxa[1] + depth_step * 0.72,
                root[2] + leg["kneeRise"][index],
            )
            lower_length = leg["lowerLength"][index]
            ankle_fraction = leg["ankleFraction"][index]
            ankle = (
                sign
                * (
                    leg["rootX"]
                    + leg["coxaLength"][index]
                    + leg["upperLength"][index]
                    + lower_length * ankle_fraction
                ),
                knee[1] + depth_step * 0.7,
                knee[2] - leg["tipDrop"][index] * leg["ankleDropFraction"][index],
            )
            tip = (
                sign
                * (
                    leg["rootX"]
                    + leg["coxaLength"][index]
                    + leg["upperLength"][index]
                    + lower_length
                ),
                ankle[1] + depth_step * 0.55,
                knee[2] - leg["tipDrop"][index],
            )
            points = (root, coxa, knee, ankle, tip)
            names = ("coxa", "upper", "lower", "tip")
            materials = (
                model["materials"]["MAT_GoldSatin"],
                model["materials"]["MAT_Charcoal"],
                model["materials"]["MAT_GoldSatin"],
                model["materials"]["MAT_Charcoal"],
            )
            for segment_index, name in enumerate(names):
                factors = revision["radiusFactors"][segment_index]
                create_armored_leg_segment(
                    f"leg_{side_name}_{suffix}_{name}",
                    points[segment_index],
                    points[segment_index + 1],
                    (radius * factors[0], radius * factors[1]),
                    revision["flatten"][segment_index],
                    materials[segment_index],
                    parent,
                )

            joint = base.create_ellipsoid(
                f"leg_{side_name}_{suffix}_knee_joint",
                knee,
                (radius * 0.77, radius * 0.53, radius * 0.64),
                model["materials"]["MAT_AmberGlow"],
                parent,
                12,
                8,
            )
            flat_shade(joint)
            joint["asset_role"] = "compact_armored_knee_joint"
            coxa_joint = base.create_ellipsoid(
                f"leg_{side_name}_{suffix}_coxa_joint",
                coxa,
                (radius * 0.82, radius * 0.56, radius * 0.67),
                model["materials"]["MAT_AmberGlow"],
                parent,
                12,
                8,
            )
            flat_shade(coxa_joint)
            coxa_joint["asset_role"] = "compact_armored_coxa_joint"


def apply_uniform_review_gray(model, config) -> None:
    gray = base.make_material(
        "REVIEW_UniformGray",
        config["shapeRevision"]["reviewGray"],
        0.0,
        0.58,
    )
    for obj in base.descendants(model["root"]):
        if obj.type != "MESH":
            continue
        obj.data.materials.clear()
        base.assign_material(obj, gray)


def structural_gate(scene, model, config) -> dict:
    root_children = {child.name for child in model["root"].children}
    required = set(base.REQUIRED_ROOT_CHILDREN)
    names = {obj.name.lower() for obj in base.descendants(model["root"])}
    leg_roots = [
        obj
        for obj in base.descendants(model["root"])
        if obj.type == "EMPTY" and obj.name.startswith("leg_") and obj.name != "legs_group"
    ]
    poses = tuple(config["poses"].keys())
    checks = {
        "rootChildrenExact": root_children == required,
        "walkingLegRoots": len(leg_roots) == 8,
        "clawRoots": all(bpy.data.objects.get(f"claw_{side}") for side in ("left", "right")),
        "independentRings": all(bpy.data.objects.get(name) for name in ("ring_inner", "ring_outer")),
        "noAntennaNames": not any(
            forbidden in name for name in names for forbidden in base.FORBIDDEN_NAME_PARTS
        ),
        "poseNamesExact": poses == base.POSE_NAMES,
        "poseFramesExact": [config["poses"][name]["frame"] for name in poses]
        == [1, 21, 41, 61, 81],
    }
    if not all(checks.values()):
        raise RuntimeError(f"Focused shape revision structural gate failed: {checks}")
    scene["shape_revision_structural_gate"] = json.dumps(checks, sort_keys=True)
    return checks


def main() -> None:
    args = parse_args()
    config_path = Path(args.config).resolve()
    blend_path = Path(args.blend_out).resolve()
    render_dir = Path(args.render_dir).resolve()
    base.ensure_parent(blend_path)
    render_dir.mkdir(parents=True, exist_ok=True)

    config = json.loads(config_path.read_text(encoding="utf-8"))
    if tuple(config["poses"].keys()) != base.POSE_NAMES:
        raise ValueError(f"Pose names/order must be exactly {base.POSE_NAMES}")
    if int(config["legs"]["perSide"]) != 4:
        raise ValueError("The contract requires exactly four walking legs per side")

    base.clear_scene()
    scene = bpy.context.scene
    scene.name = "CancerKnowledgeMachine_B5A_ShapeRevision"
    scene.unit_settings.system = "METRIC"
    scene.unit_settings.scale_length = 1.0
    scene.render.fps = int(config["animation"]["fps"])
    scene.render.fps_base = 1.0

    model = candidate.build_candidate(config)
    replace_body_armor(model, config)
    replace_claw_armor_and_fingers(model, config)
    replace_leg_forms(model, config)
    model["root"]["asset_role"] = "StudyMaster Cancer B5A focused shape revision"
    base.set_pose_keys(scene, model, config)
    checks = structural_gate(scene, model, config)
    apply_uniform_review_gray(model, config)

    camera = base.setup_review_scene(scene, config)
    scene.frame_set(scene.frame_start)
    bpy.ops.wm.save_as_mainfile(filepath=str(blend_path), check_existing=False)
    renders = base.render_reviews(scene, camera, config, render_dir)
    scene.frame_set(scene.frame_start)
    bpy.ops.wm.save_as_mainfile(filepath=str(blend_path), check_existing=False)

    print(
        "STUDYMASTER_B5A_SHAPE_REVISION_RESULT="
        + json.dumps(
            {
                "blend": str(blend_path),
                "renders": [item["path"] for item in renders],
                "structuralChecks": checks,
                "glbExported": False,
                "browserQaRun": False,
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main()
