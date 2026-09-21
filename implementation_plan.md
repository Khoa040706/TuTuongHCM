# Implementation Plan — Trang chủ 3D StudyMaster

> **Trạng thái:** `AWAITING REVIEW — B7 BLOCKED / NON-DETERMINISTIC CLEANUP`; B8 chưa mở
>
> **Tài liệu điều phối chính:** [`plan.md`](plan.md)

## Mục tiêu lượt hiện tại

- [x] Đọc hai brief và `AGENTS.md`.
- [x] Đối chiếu dependency, SPA state, auth, learning state, simulator, diagram, asset, PWA và Blender runtime.
- [x] Tạo bộ kế hoạch tám bước, model contract, decision log và traceability matrix.
- [x] Nhận và đồng bộ D01, D03, D04.
- [x] Hoàn thành Bước 1 và chuẩn bị concept/storyboard Bước 2.
- [x] Nhận duyệt D02 tại concept sheet và khóa MUST/SHOULD/LATER.
- [x] Đồng bộ model contract: 8 chân đối xứng, không râu, mai cong, hai vòng độc lập và 5 pose.
- [x] Tạo pipeline `bpy` có config riêng; xuất `.blend`, GLB, manifest và bộ ảnh review.
- [x] Giữ nguyên bộ v1; hoàn thành vòng sửa blockout v2 về càng/mai/chân/trăng/vòng/pose và contact sheet cùng camera.
- [x] Kiểm tra lại `.blend` v2; load GLB bằng Three.js, kiểm tra contract/hash và quét collision ở frame chuyển tiếp.
- [x] Người dùng duyệt blockout B3.8 để dùng cho kiểm chứng tích hợp; không phải phê duyệt model final.
- [x] B4 — tích hợp GLB v2 vào R3F, hoàn thiện S01→S02, build và kiểm chứng Chrome production.
- [x] B4 revision — sửa framing ở 1366×768/1440×900, tách pha storytelling, đo controller/transform/reduced motion và bàn giao ảnh + video xuôi/ngược 18 giây.
- [x] Người dùng duyệt B4 revision trong phạm vi proof slice desktop S01→S02.
- [x] B5A — tạo ứng viên hình học riêng: càng đầy đặn có vỏ giáp/ngón cong thuôn, mai có cấu trúc giáp, chân dày và thuôn hơn; giữ asset v2, hierarchy/pivot và 5 pose.
- [x] B5A — kiểm tra pose theo thời gian rõ ràng trong manifest, contract/GLB/chuyển tiếp, geometry stats, ảnh ba góc, contact sheet concept/v2/ứng viên và preview B4 S01/S02.
- [x] B5A revision — giữ ứng viên trước, tạo script/config/output riêng; sửa càng dựng và ôm vào giữa, mai giáp hòa vào vòm, chân giáp thuôn có đầu cong xuống.
- [x] B5A revision — render duy nhất front closed và three-quarter open bằng xám đồng nhất cùng camera/scale; ghép concept màu để review và tự ghi điểm còn lệch.
- [x] B5A revision — xác nhận nhẹ node/pivot, 8 chân, 2 càng, không râu, hai vòng độc lập và 5 pose trong `.blend`; chưa xuất GLB/chạy full validator/browser QA.
- [x] Gate B5A hình khối — người dùng chấp nhận hướng shape revision để kiểm chứng kỹ thuật; chưa phải duyệt model final.
- [x] B5A technical — GLB/manifest revision có `timeSeconds`, node/pivot/load/5 pose/BVH transition đạt; lỗi giao nhau thật ở coxa đã sửa cục bộ, phần chồng còn lại ở góc ba phần tư là camera occlusion.
- [x] B5A web — runtime B4 lấy pose theo `timeSeconds` manifest; 16 action canonical, S01/S02 xuôi/ngược tại 1366×768 và 1440×900 đạt sau khi controller/master/phases ổn định.
- [x] B5B — material vàng satin/than mờ, bevel/normal và bốn đường phân mảng lớn; GLB dưới budget, fallback/source/license/manifest và preview B4 hoàn thành.
- [x] Gate B5B — người dùng duyệt model hiện tại làm baseline B6; khóa GLB 736.372 byte, SHA-256 `95eb4b7bd2ec87480daa9e0e97366f62fe6adb605fed088c9f2a4a6b71badf35`; không chỉnh form/hoa văn nếu không có defect.
- [x] Typography — xác nhận JSX là Unicode NFC; Chrome QA bị chặn Google Fonts nên Georgia fallback theo glyph tạo advance width sai. Đổi fallback display font riêng homepage sang Times New Roman trước Georgia và chụp lại S01/S02 production không còn tách chữ.
- [x] B6 — hoàn thiện cầu nối S02, trace Bubble Sort S03, Activity Diagram ATM S04 từ asset thật, preview có nhãn “Minh họa” S05 và CTA auth matrix S06.
- [x] B6 — controller duy nhất lấy 5 pose theo `timeSeconds`; chapter jump, forward/reverse, 21 mốc nội suy, scroll nhanh, resize, pause/resume, reduced motion và model-error fallback đều pass production.
- [x] B6 — bàn giao ảnh từng cảnh và video 12 giây S01→S06→S01 ghép từ 96 frame Chrome/WebGL thật.
- [x] B6 revision — thay snapshot-only S03 bằng ba data block R3F identity cố định, derive compare/swap/lock/early-exit từ progress; giữ HTML trace làm fallback.
- [x] B6 revision — thay PNG-only S04 bằng diagram có cấu trúc 14 node/16 edge, guard/fork/join đúng vai trò, node-first → edge-draw → main-flow highlight; giữ PNG nguồn để đối chiếu/fallback.
- [x] B6 revision — guest pending destination đã click-test đến Bubble Sort và Diagram Studio; learner/admin mới kiểm tra source.
- [x] B6 revision — browser QA v4 `pass=true`, video 1366×768 gồm 96 frame ở 8 fps/12 giây đã được Blender đọc lại; video là ghép frame, không phải quay real-time.
- [x] Gate B6 revision — người dùng duyệt chức năng/storyboard để chuyển sang B7; giữ B5B và đúng sáu cảnh.
- [x] B7 — ghi nhận/sửa/retest header, label data block, ATM connector/guard, bounds toàn khối và hash restore; ảnh/JSON before-after đã lưu.
- [x] B7 — đo production baseline, lifecycle năm vòng, integration/auth, accessibility và PWA; báo cáo phân loại PASS/FAIL/NOT TESTED. Lifecycle retention còn FAIL; GPU desktop và learner/admin NOT TESTED.
- [x] B7 targeted revision — sửa nhãn StoryDataBlocks đúng aspect texture/geometry và PASS ảnh/đo S03/S04 ở 1366×768, 1440×900.
- [x] B7 targeted revision — thay hardcode lifecycle bằng registry Canvas/controller thực; heap snapshot + retaining paths xác nhận delta đã giảm nhưng retention vẫn `FAIL`. B7 tiếp tục `AWAITING REVIEW`, B8 chưa mở.
- [x] B7 revision2 — tăng font nhãn và đo glyph/plane riêng; PASS S03/S04 tại 1366×768 và 1440×900.
- [x] B7 revision2 — đối chứng auth tối giản, DOM/GSAP không Canvas, Canvas tối giản và homepage đầy đủ; sửa owner ảnh responsive S04. DOM/GSAP retest về 309→309 node, nhưng full homepage vẫn `FAIL` do rooted WebGL context/canvas tăng theo vòng; instrumentation-off cho cùng xu hướng.
- [x] B7 WebGL reproduction — Canvas + GLTFLoader không render plateau 390→390; khi render clone GLB tăng 472→877 (+81 node/vòng), không cần thêm lighting/StoryDataBlocks/controller để tái hiện.
- [x] B7 desktop GPU — lỗi tái hiện trên Chrome desktop, renderer thật `Intel UHD Graphics 630 / ANGLE D3D11`; GPU không phải SwiftShader. Strong path cùng hội tụ vào WebGL properties/texture → context → detached canvas.
- [x] B7 cleanup audit — hoàn tác dispose renderer/forceContextLoss; thử clone geometry/material riêng + dispose không cải thiện và không được giữ. Residual vẫn `FAIL`; reproduction/lệnh chạy được bàn giao, B8 chưa mở.
- [x] B7 minimal repro — harness tĩnh độc lập chứng minh R3F box và Three box plateau; R3F/Three render GLB tăng theo vòng ngay cả khi thay toàn bộ material bằng MeshBasicMaterial.
- [x] B7 ownership fix — strong path đi từ GLTF parser/cache qua geometry và listener renderer tới WebGLBuffer. `geometry.dispose()` kết hợp `gl.dispose()` làm harness plateau; đưa thay đổi nhỏ nhất vào production và giữ lại vì WebGLBuffer delta giảm từ +1.155 xuống 0/5 vòng.
- [x] B7 production retest — build PASS, model render/chuyển động đủ 5/5 remount; nhưng tổng DOM vẫn +2.470, listener +153 và heap +3.814.380 B/5 vòng. Material cleanup không cải thiện nên đã hoàn tác. Gate lifecycle giữ `FAIL`, B8 chưa mở.
- [x] B7 home retention — snapshot production xác định `DFG_LUT` singleton/listener renderer là strong owner chung. Đối chứng homepage đầy đủ chỉ loại PBR path làm DOM 802→802 trên Intel GPU trong 5 vòng, trong khi model/data/controller vẫn hoạt động. Không có public teardown an toàn và không hạ vật liệu B5B; production residual vẫn `FAIL`, B8 chưa mở.
- [x] B7 managed patch — patch Three r185 theo ownership renderer PASS harness PBR/two-renderer: callback shared material 2→1→0, renderer còn sống không đổi pixel hash; patch có apply/check/reverse và hash khóa.
- [x] B7 final candidate — clean build PASS và bundle chứa patch v2. Warm-up Intel xác nhận callback 2→1→0, remount 5/5 render 71 calls/28.388 triangles và có transform theo scroll. Full retention plateau DOM 1304→1304, listener từng vòng 392→392, WebGLBuffer count delta 0; nhưng cùng một callback material còn 1→1 từ baseline tới final trong lượt đầy đủ trong khi warm-up riêng là 0. Delay 650 ms không tất định, gate giữ `FAIL/BLOCKED`; không thử thêm cleanup/delay.

## Thứ tự thực hiện sau phê duyệt

1. [Xác minh tích hợp](plans/homepage-3d/01-product-integration.md)
2. [Concept và storyboard](plans/homepage-3d/02-concept-storyboard.md)
3. [Blender blockout](plans/homepage-3d/03-blender-blockout.md)
4. [Lát cắt R3F/GSAP S01→S02](plans/homepage-3d/04-r3f-story-slice.md)
5. [Model final](plans/homepage-3d/05-blender-final-model.md)
6. [S03–S06](plans/homepage-3d/06-scenes-and-preview.md)
7. [Tích hợp và hiệu năng](plans/homepage-3d/07-integration-performance.md)
8. [QA và bàn giao](plans/homepage-3d/08-qa-handoff.md)

## Gate hiện tại

D02/D03, gate B3.8, B4, B5 và B6 đã đóng. Asset v2/candidate/source revision vẫn giữ nguyên; B5B baseline/hash đã khóa. B7 đang chờ review ở trạng thái `FAIL/BLOCKED` do cleanup material còn phụ thuộc timing; B8 chưa mở.
