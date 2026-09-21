# Bước 5 — B5A hình học ứng viên / B5B hoàn thiện model

**Trạng thái:** `DONE — B5B APPROVED BASELINE FOR B6` ngày 2026-09-15

**Owner:** 3D pipeline owner + Art reviewer + FE validator

**Công cụ:** Blender `bpy`, chỉnh tay có mục tiêu, render review và web validator.

## Mục tiêu và kết quả nhìn thấy

Trước tiên tạo ứng viên hình học B5A có silhouette gần concept hơn nhưng vẫn giữ contract/pivot và 5 pose. Sau khi người dùng duyệt hình học, B5B mới làm look-dev, tối ưu, fallback và bàn giao final trong ngân sách tải/render.

## Đầu vào và điều kiện bắt đầu

- Blockout v2 được giữ nguyên làm baseline; B4 revision desktop S01→S02 đã được người dùng duyệt ngày 2026-09-14.
- Không thay hierarchy/node name nếu chưa có change request FE.
- Concept sheet là tham khảo hình ảnh; model contract/config/script là nguồn chính xác cho count, pivot, hierarchy và pose.

## B5A — Ứng viên hình học (đã bàn giao, chờ duyệt)

- [x] **B5A.1** Chốt change list bằng đối chiếu concept/v2: càng phải đầy đặn, có mảng giáp và hai ngón cong thuôn; mai bớt dạng huy hiệu tròn; chân dày, thuôn và có nhịp ba đoạn rõ.
- [x] **B5A.2** Dựng ứng viên riêng bằng `bpy` + config; giữ đúng 8 chân, 2 càng, không râu, trăng tiết chế, hai vòng độc lập và chỉ thêm chi tiết đọc được ở kích thước hero.
- [x] **B5A.3** Giữ node names/pivot cấp contract và đủ `closed/open/guide_left/guide_right/compact`; không ghi đè `.blend`/GLB/manifest v2.
- [x] **B5A.4** Ghi thời điểm pose rõ ràng vào manifest và xác minh validator theo các thời điểm đó. Runtime B4 sản phẩm vẫn dùng chỉ số keyframe và phải được xử lý rõ trước khi tích hợp asset final.
- [x] **B5A.5** Kiểm tra tự động hierarchy/count/symmetry/bounds/5 pose/chuyển tiếp/GLB load; tách rõ kết quả tự động, review bằng mắt và giới hạn tại `artifacts/homepage-3d/b5a/b5a-review.md`.
- [x] **B5A.6** Bàn giao contact sheet concept/v2/ứng viên, ảnh front/three-quarter/side, preview ứng viên trong B4 tại S01/S02, geometry stats và GLB bytes.
- [x] **B5A.R1** Giữ nguyên ứng viên hiện tại và tạo bản sửa riêng bằng `bpy`/config: càng dựng lên và ôm vào giữa, lòng càng có vỏ rõ, hai ngón thuôn và khe kẹp đọc được ở hero.
- [x] **B5A.R2** Thay cảm giác tấm khiên phẳng bằng các lớp mai cong giao tiếp vào khối vòm; tiêu chí là chuyển tiếp thể tích, không phải tăng số cạnh.
- [x] **B5A.R3** Dựng lại hình học con của tám chân thành các đoạn giáp thuôn, đầu cong xuống và nhịp xòe khác nhau; giữ bốn chân mỗi bên ngoài hai càng.
- [x] **B5A.R4** Giữ node/pivot cấp contract, năm pose, không râu và hai vòng độc lập; chỉ kiểm tra cấu trúc nhẹ trong vòng shape gate này.
- [x] **B5A.R5** Render duy nhất front closed và three-quarter open bằng vật liệu xám đồng nhất, cùng camera/scale bản trước; kèm concept màu và self-review. Chưa xuất GLB hoặc chạy lại browser/full QA.
- [x] **Gate B5A hình khối** Người dùng chấp nhận hướng shape revision để tiếp tục kiểm chứng kỹ thuật; chưa coi là phê duyệt model final.
- [x] **B5A.T1** Xuất GLB revision riêng và manifest đủ năm pose với `frame`, FPS, `timeSeconds`; không ghi đè v2/candidate trước.
- [x] **B5A.T2** Kiểm tra node/pivot, load GLB, năm pose và các mốc chuyển tiếp. BVH phát hiện giao nhau coxa thật và đã sửa cục bộ không dời pivot; scan lại 21 mốc không còn va chạm, phần chồng ở three-quarter là camera occlusion.
- [x] **B5A.T3** Runtime B4 lấy pose từ `timeSeconds` manifest, yêu cầu đúng một action canonical cho mỗi node; GSAP vẫn là writer duy nhất của pose transform.
- [x] **B5A.T4** Preview S01/S02 xuôi/ngược tại 1366×768 và 1440×900 đạt; controller/master/phases ổn định trước capture, chân/càng đọc rõ và lớp mai có highlight tách bậc.
- [x] **Gate B5A kỹ thuật** Contract/load/pose/transition/web preview đạt, không cần đổi form lớn; B5B được mở theo phê duyệt có điều kiện của người dùng.

### Ghi chú bắt buộc cho vòng kiểm thử sau

- Preview S02 trước ghi `controller=1` nhưng `master=0.866639`, `root=0.582854`; lần chụp/đo endpoint tiếp theo phải chờ animation ổn định rồi mới kết luận.
- Validator B5A dùng `timeSeconds`, trong khi runtime sản phẩm B4 hiện vẫn lấy pose theo chỉ số keyframe. Trước khi tích hợp asset final phải chuyển runtime sang mốc thời gian manifest hoặc chứng minh và khóa contract chỉ số; không được để sai pose âm thầm.

## B5B — Vật liệu, tối ưu, fallback và baseline đã duyệt

- [x] **B5B.1** Look-dev `MAT_GoldSatin`, `MAT_Charcoal`, `MAT_AmberGlow`; đã test trên nền Ivory và ánh sáng runtime.
- [x] **B5B.2** Hoàn thiện smooth normal/bevel hai segment và bốn đường phân mảng lớn; không dùng texture hoặc hoa văn dày.
- [x] **B5B.3** Giữ ba material/không texture, giảm key animation khi export và đo geometry/GLB. Không dùng Draco/Meshopt vì GLB chuẩn đã dưới 3 MB và runtime hiện không có decoder.
- [x] **B5B.4** Xuất `.blend`, GLB, manifest, fallback image, license/source và hash (PRE04) dưới tên final candidate riêng.
- [x] **B5B.5** Load GLB final candidate vào B4; node binding/pose-time contract, forward/reverse, hai viewport, fallback và reduced motion đạt.
- [x] **B5B.6** Render front/three-quarter/side cùng open/compact, tạo sheet trước/sau và gom một vòng feedback cuối.
- [x] **Gate B5B** Người dùng duyệt model hiện tại để dùng cho B6. Baseline public là `public/assets/home/cancer-knowledge-machine/cancer-machine.glb`, 736.372 byte, SHA-256 `95eb4b7bd2ec87480daa9e0e97366f62fe6adb605fed088c9f2a4a6b71badf35`. Không chỉnh hình khối hoặc thêm hoa văn nếu không có defect cụ thể.

## File dự kiến

- B5A: `assets-src/home/cancer-knowledge-machine/blender/cancer_machine_b5a_candidate.blend`, script/config ứng viên, GLB/manifest ứng viên có tên riêng và `artifacts/homepage-3d/b5a/`.
- B5A focused revision: `assets-src/home/cancer-knowledge-machine/blender/cancer_machine_b5a_shape_revision.blend`, config/script riêng và `artifacts/homepage-3d/b5a/shape-revision/`; chưa có GLB theo đúng shape-gate scope.
- B5B: `assets-src/home/cancer-knowledge-machine/blender/cancer_machine_final.blend`, `cancer-machine.glb`, `model-manifest.json`, fallback và license; chỉ tạo sau gate B5A.
- Scripts/config theo module, tái sử dụng validator/export đã kiểm chứng; không dựng lại v2 từ đầu.

## Kiểm tra và bằng chứng

- B5A: validator contract/pose-time pass; GLB mở bằng Three.js và trong layout B4; node/pivot không đổi ngoài migration đã duyệt.
- Asset + texture mở đầu hướng tới ≤3 MB; nếu vượt phải có số đo, lý do và quyết định chấp thuận.
- Visual review trên camera/viewport thật, không chỉ Blender viewport.

## Duyệt, rủi ro và rollback

- B5A: người dùng duyệt form lớn trước; B5B: người dùng duyệt material, mức chi tiết, tối ưu và fallback.
- Rủi ro: gold cháy sáng, chi tiết/texture nặng, node drift. Xử lý: exposure reference, geometry budget, manifest diff.
- Rollback: giữ blockout và từng milestone; model final mới không ghi đè bản approved cho tới khi web validation pass.

## Exit gate

B5 kết thúc với B5B được duyệt làm baseline cho B6, đủ hình ảnh, contract/size/load, fallback, source/license và hash khóa. Mọi thay đổi asset sau mốc này cần defect cụ thể và hash mới có chủ đích.
