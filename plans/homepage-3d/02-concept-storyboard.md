# Bước 2 — Concept sheet và storyboard

**Trạng thái:** `DONE — APPROVED 2026-09-13`

**Owner:** Lead BA + Art/3D designer + UI reviewer

**Công cụ:** thiết kế 2D/review; chưa dựng model final, chưa code production.

## Mục tiêu và kết quả nhìn thấy

Chuyển hai asset thương hiệu thành một ngôn ngữ 3D duy nhất; khóa silhouette, vật liệu, camera, vùng chữ và trạng thái đầu/cuối của S01–S06.

## Đầu vào và điều kiện bắt đầu

- `public/assets/logo.png`, `cancer_mascot_transparent.png`, token StudyMaster và D02.
- Integration map B1 bản draft đủ biết vùng CTA/DOM.
- D04 có thể còn mở; S03/S04 dùng placeholder có nhãn, không khóa nội dung giả.

## Checklist thực hiện

- [x] **B2.1** Tạo review board: hai asset nguồn, khác biệt, phần giữ/bỏ và mood “điềm tĩnh–chính xác–thân thiện”.
- [x] **B2.2** Tạo concept sheet v1 gồm front/three-quarter/side/exploded view để duyệt hướng silhouette.
- [x] **B2.3** Lập design DNA: token màu, material, lighting mood, khoảng trống và motion character.
- [x] **B2.4** Đề xuất exploded view cho body, claws, legs, rings, cancer mark; node/pivot cuối chờ concept approval.
- [x] **B2.5** Viết storyboard v1 S01–S06; S03/S04 đã đối chiếu implementation/asset thật.
- [x] **B2.6** Ghi reduced-motion/fallback và pose thu gọn trong storyboard; chưa tạo ảnh fallback final.
- [x] **B2.7** Ghi frame constraints cho desktop/zoom; chưa chạy layout vì chưa có code.
- [x] **B2.8** Người dùng review một lượt và phân loại MUST/SHOULD/LATER; D02 đã khóa.

## File/asset dự kiến

- Tạo khi triển khai: `assets-src/home/cancer-knowledge-machine/concept/` cho sheet và nguồn chỉnh sửa.
- Tạo bản tối ưu để review trong `artifacts/homepage-3d/concept/`; chưa đưa concept source vào `public/`.

## Đầu ra và bằng chứng

- Review/decision record: [`concept-review.md`](concept-review.md).
- Concept sheet v1: [`../../artifacts/homepage-3d/concept/cancer-knowledge-machine-concept-v1.png`](../../artifacts/homepage-3d/concept/cancer-knowledge-machine-concept-v1.png).
- Storyboard sáu cảnh: [`storyboard-v1.md`](storyboard-v1.md).
- Bằng chứng hình ảnh chỉ cần các góc giải quyết silhouette, pivot và composition.

## Duyệt, rủi ro và rollback

- Người dùng duyệt silhouette, mức giống logo, màu/vật liệu và storyboard trước blockout.
- Rủi ro: thiên văn lấn át sản phẩm học; chi tiết huy hiệu quá nặng; cua hung dữ. Xử lý: CTA/khối tri thức xuất hiện sớm, giảm chữ La Mã/hạt viền, pose càng mở sang hai bên.
- Rollback: quay về concept sheet đã duyệt gần nhất; không rebuild Blender trước khi thay đổi sheet được duyệt.

## Exit gate

D02 `DECIDED`; có một concept duy nhất được ký duyệt; mọi cảnh có frame đầu/cuối và mục đích; không còn feedback nhận diện mức MUST.
