# Bước 3 — Blender blockout

**Trạng thái:** `DONE — APPROVED FOR B4 INTEGRATION ONLY` — 2026-09-14; chưa phải phê duyệt model final

**Owner:** 3D pipeline owner + Codex script author + FE reviewer

**Công cụ:** Blender `bpy` + CLI background sau khi executable được xác minh; GUI chỉ để duyệt mắt/pivot khi cần.

## Mục tiêu và kết quả nhìn thấy

Dựng model thô có đúng silhouette, hierarchy, pivot, scale và đủ 5 pose `closed/open/guide_left/guide_right/compact`; xuất GLB nhỏ để kiểm tra bằng Three.js trước mọi chi tiết trang trí.

## Đầu vào và điều kiện bắt đầu

- Concept sheet B2 approved với MUST/SHOULD/LATER; model contract đã khóa 8 chân, thân cong, không râu và 5 pose; Blender executable/version đã xác minh trong [`blender-environment.md`](blender-environment.md).
- Chạy smoke script chỉ sau khi biết đường dẫn; không giả định quyền điều khiển GUI.

## Checklist thực hiện

- [x] **B3.1** Ghi executable/version/Python; smoke `bpy` exit 0; glTF exporter operator tồn tại và `poll=true`.
- [x] **B3.2** Viết script tham số hóa body width/depth, claw scale/open angle, ring radii/depth và palette trong config riêng.
- [x] **B3.3** Sinh hierarchy đúng `model-contract.md`; đặt origin/pivot; apply transform có kiểm soát.
- [x] **B3.4** Tạo đúng 5 pose `closed/open/guide_left/guide_right/compact`; kiểm tra symmetry, body depth, ring clearance và bounding box compact (PRE02).
- [x] **B3.5** Xuất GLB blockout và manifest kỹ thuật: node, transform, mesh/triangle/material count, bounds, version, hash.
- [x] **B3.6** Render bộ review gọn: front closed, three-quarter open, side closed, front open và front compact.
- [x] **B3.7** Load GLB bằng `Three.GLTFLoader` đang có; xác minh node lookup, bounds hữu hạn, material slots, animation data, 5 pose trong manifest và SHA-256. Kiểm tra tích hợp browser/R3F thuộc B4 và chưa thực hiện.
- [x] **B3.8** Gom feedback, hoàn thành blockout v2 và được người dùng duyệt để dùng cho kiểm chứng tích hợp B4; giữ backlog hình học cho B5.

### Vòng sửa blockout v2

- [x] Giữ riêng toàn bộ v1: config, script, `.blend`, GLB, manifest, validator report và năm render.
- [x] Thay pincer que bằng hai blade cong/thuôn có khe; nắn mai vòm + front plate; chân ba đoạn/two-joint; trăng thành mesh crescent; giảm hai vòng.
- [x] Closed/open/compact khác bằng articulation; compact root scale 0,94, claw fold 58°, leg fold 42° và pincer đóng.
- [x] Quét 21 frame chuyển tiếp với 134 cặp BVH/frame, không phát hiện collision ở các cặp kiểm tra; 12/12 internal check pass.
- [x] GLB v2 load bằng Three.js, hash khớp manifest; `.blend` mở lại được và contract không đổi.
- [x] Contact sheet v1/v2 dùng cùng camera/target/resolution cho năm view.
- [x] Người dùng duyệt B3.8 ngày 2026-09-14 cho B4; việc duyệt này không khóa hình thức model final.

## Cấu trúc file dự kiến

- `assets-src/home/cancer-knowledge-machine/blender/cancer_machine_blockout.blend`
- `assets-src/home/cancer-knowledge-machine/scripts/build_blockout.py`
- `assets-src/home/cancer-knowledge-machine/config/blockout.json`
- `public/assets/home/cancer-knowledge-machine/cancer-machine.blockout.glb`
- `public/assets/home/cancer-knowledge-machine/model-manifest.blockout.json`
- `artifacts/homepage-3d/blockout/*.png` và validation report.

## Kiểm tra và bằng chứng

- V2 pipeline hoàn tất 12/12 internal check; `.blend` mở lại được và có đúng 7 root child, 8 leg root, 5 timeline marker.
- GLB v2 422.696 byte load bằng Three.js r185: 72 named node, 57 mesh, 3 material, 16 animation clip; validator pass toàn bộ contract/hash.
- Manifest v2 ghi 71 source object, 57 mesh, 13.556 triangle, 6.888 vertex, 3 material, 0 texture. Compact width giảm `7,417469 → 5,779585` (tỷ lệ khoảng `0,779`).
- Contact sheet và self-review: `artifacts/homepage-3d/blockout/v1-v2-contact-sheet.png`, `artifacts/homepage-3d/blockout/blockout-v2-review.md`.

## Duyệt, rủi ro và rollback

- Người dùng duyệt blockout trước B4/B5.
- Rủi ro: khác phiên bản Blender/exporter, trục sai, bevel làm tăng poly. Xử lý: lưu version/preset, validator, low-poly primitives.
- Rollback: giữ file blockout theo milestone; script/config là nguồn tái tạo. Không ghi đè bản approved bằng thử nghiệm chưa đạt.

## Exit gate

Gate kỹ thuật và duyệt B3.8 đã pass cho mục đích tích hợp. B4 được phép dùng GLB v2; B5/model final vẫn chưa bắt đầu và phải xử lý backlog hình học sau khi B4 được duyệt.
