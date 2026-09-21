# Blender Environment Verification

**Kiểm tra:** 2026-09-13

**Trạng thái:** `VERIFIED`

## Executable

- Shortcut target do người dùng cung cấp: `D:\BLENDER\blender-launcher.exe`.
- Launcher tồn tại nhưng không dùng làm CLI contract.
- Executable CLI đã kiểm chứng: `D:\BLENDER\blender.exe`.
- Không sửa `PATH`; mọi script tương lai dùng đường dẫn tuyệt đối hoặc biến task-scoped `BLENDER_EXE` trong command/session.

## Phiên bản

- Blender: `5.2.1 LTS`.
- Build hash: `9e2066aef7ef`.
- Build date: `2026-08-25`.
- Embedded Python: `3.13.13`.
- Platform/build: Windows Release.

## Smoke test `bpy`

Đã chạy `blender.exe` trong process riêng với `--background --factory-startup`. Expression tối thiểu:

1. Tạo cube kích thước 1.0 tại origin.
2. Đặt tên `StudyMaster_BpySmoke_Cube`.
3. Ghi custom scene property `studymaster_smoke=ok`.
4. Lưu một `.blend` trong thư mục `%TEMP%` duy nhất của lượt test.
5. Xác minh file tồn tại và có kích thước 96.599 byte.
6. Xóa file và thư mục tạm sau kiểm tra.

Kết quả: exit code 0, `saved=true`, scene tạm có 4 object (factory scene + cube). Có hai warning về đường dẫn brush asset không thể chuyển thành relative khi lưu; không làm smoke test thất bại và cần theo dõi nếu xuất hiện trong pipeline asset thật.

Smoke test không kết nối, không điều khiển và không sửa Blender GUI hoặc scene người dùng đang mở.

## Gate cho Bước 3

D03 đã đóng và D02 đã được duyệt. Operator `bpy.ops.export_scene.gltf` đã kiểm tra tồn tại với `poll=true`; pipeline B3 sau đó export GLB thực thành công bằng `D:\BLENDER\blender.exe` trong process `--background --factory-startup` riêng.

Đầu ra `.blend` đã mở lại bằng một process Blender nền và xác minh `crab_root`, bảy node con bắt buộc, tám leg root cùng timeline marker tại frame 1/21/41/61/81. GLB đã parse bằng `Three.GLTFLoader` có sẵn trong dự án. Cảnh GUI của người dùng và `PATH` không bị sửa.

Warning ghi thumbnail tới `\.thumbnails` xuất hiện khi lưu nhưng không ảnh hưởng file `.blend`, GLB hoặc ảnh render; hash và khả năng đọc lại các đầu ra đã được kiểm tra độc lập.
