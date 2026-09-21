"""Encode B4 browser frames using Blender's Video_Editing app template.

Blender 5.2 exposes FFMPEG as an assignable output format only after the
Video_Editing template initializes, so invoke this script with
``--background --app-template Video_Editing``.
"""

from pathlib import Path
import sys

import bpy


def arguments_after_double_dash():
    if "--" not in sys.argv:
        return []
    return sys.argv[sys.argv.index("--") + 1 :]


args = arguments_after_double_dash()
if len(args) not in (2, 3):
    raise SystemExit(
        "Usage: blender --background --app-template Video_Editing --python script.py -- "
        "<frames-dir> <output.mp4> [fps]"
    )

frames_dir = Path(args[0]).resolve()
output_file = Path(args[1]).resolve()
fps = int(args[2]) if len(args) == 3 else 15
if fps < 1 or fps > 60:
    raise SystemExit(f"FPS must be between 1 and 60, got {fps}")
frames = sorted(frames_dir.glob("frame-*.png"))
if not frames:
    raise SystemExit(f"No recording frames found in {frames_dir}")

output_file.parent.mkdir(parents=True, exist_ok=True)
if output_file.exists():
    output_file.unlink()
scene = bpy.context.scene
scene.sequence_editor_clear()
editor = scene.sequence_editor_create()
strip = editor.strips.new_image("B4 S01 to S02 forward reverse", str(frames[0]), 1, 1)
for frame in frames[1:]:
    strip.elements.append(frame.name)
strip.frame_final_duration = len(frames)

image = bpy.data.images.load(str(frames[0]), check_existing=False)
scene.render.resolution_x = image.size[0]
scene.render.resolution_y = image.size[1]
scene.render.resolution_percentage = 100
bpy.data.images.remove(image)
scene.render.fps = fps
scene.frame_start = 1
scene.frame_end = len(frames)
scene.render.image_settings.file_format = "FFMPEG"
scene.render.ffmpeg.format = "MPEG4"
scene.render.ffmpeg.codec = "H264"
scene.render.ffmpeg.constant_rate_factor = "MEDIUM"
scene.render.ffmpeg.audio_codec = "NONE"
scene.render.filepath = str(output_file.with_suffix(""))
scene.render.use_file_extension = True
bpy.ops.render.render(animation=True)

rendered = output_file
if not rendered.exists():
    candidates = sorted(
        output_file.parent.glob(f"{output_file.stem}*.mp4"),
        key=lambda candidate: candidate.stat().st_mtime_ns,
        reverse=True,
    )
    if not candidates:
        raise SystemExit(f"Blender reported success but no MP4 was found for {output_file.stem}")
    candidates[0].replace(output_file)
print(f"B4_REVIEW_VIDEO={rendered}")
print(f"FRAME_COUNT={len(frames)}")
print(f"FPS={fps}")
print(f"DURATION_SECONDS={len(frames) / fps:.3f}")
