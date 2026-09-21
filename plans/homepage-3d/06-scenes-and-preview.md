# Bước 6 — Hoàn thiện S03–S06

**Trạng thái:** `DONE — B6 STORYBOARD REVISION APPROVED` ngày 2026-09-16

**Owner:** Frontend agent + BA/content reviewer + Algorithm/Diagram subject reviewer

**Công cụ:** R3F/GSAP/React; Blender chỉ sửa model khi có defect cụ thể.

## Mục tiêu và kết quả nhìn thấy

Hoàn thành câu chuyện từ khối kiến thức tới thuật toán, diagram, preview công cụ thật và CTA cuối; mọi minh họa đúng học thuật và có đích sử dụng thật.

## Đầu vào và điều kiện bắt đầu

- D04 decided; GLB final; Home slice approved; CTA matrix B1.
- Reviewer xác minh thuật toán/diagram được chỉ định trước khi polish motion.

## Checklist thực hiện

- [x] **B6.1** Khóa state schema S01–S06 bằng sáu scroll stop và năm pose manifest; GSAP là writer duy nhất cho root/named-node transform, `useFrame` chỉ giữ idle child rotation.
- [x] **B6.2** S03 dùng ba data block R3F identity cố định và trace simulator thật: `[3,1,2] → [1,3,2] → [1,2,3]`; compare → swap → lock đều derive từ progress; lượt hai `1 ≤ 2`, không swap, `swapped=false`, kết thúc sớm. HTML trace giữ làm fallback.
- [x] **B6.3** S04 dựng diagram từ dữ liệu cấu trúc với 14 node/16 edge, ba swimlane, initial/final, decision guard và fork/join; timeline hiện node trước, vẽ edge sau rồi highlight main flow. `atm_activity_diagram.png` chỉ còn là nguồn đối chiếu/fallback.
- [x] **B6.4** S05 demo cô lập có nhãn “Minh họa”, không có button giả trong preview; chỉ nêu ba thao tác đã đối chiếu Bubble Sort Lab: nhập mảng, chạy/tạm dừng, tiến từng bước.
- [x] **B6.5** S06 phân nhánh CTA: guest mở auth overlay, learner tới `subject-select`, admin tới `admin-dashboard`; không dùng “Tiếp tục học”.
- [x] **B6.6** Chapter navigation đủ 01–06; jump và scroll nhanh derive state từ vị trí hiện tại, không mutate/replay trace.
- [x] **B6.7** DOM giữ source order và độc lập canvas; framing/CTA pass 1366×768 và 1440×900.
- [x] **B6.8** Reduced motion/model-error giữ đủ sáu heading và CTA; fallback không phụ thuộc WebGL.
- [x] **B6.9** Copy guard pass: không AI claim, số liệu giả, nút giả hoặc hứa drag/drop.
- [x] **B6.10** Production QA revision-v4 pass forward/reverse, vị trí/identity block trước-giữa-sau swap, diagram progress, scroll nhanh, jump, resize, reduced motion và fallback ở hai viewport desktop.
- [x] **B6.11** Guest pending destination đã click-test qua auth đến Bubble Sort và Diagram Studio; learner/admin chỉ source-reviewed do không dùng tài khoản có quyền.
- [x] **B6.12** Video 1366×768, 96 frame, 8 fps, 12 giây được Blender đọc lại; đây là ghép frame Chrome/WebGL, không phải quay real-time.

## File dự kiến

- Bổ sung `components/home/scenes/Scene03Algorithm.js` đến `Scene06CTA.js`, story/content/config và preview assets.
- Sửa integration `app/page.js`/home components; không sửa simulator gốc trừ defect riêng được giao.

## Kiểm tra và bằng chứng

- Algorithm trace, diagram notation review, CTA matrix pass.
- Video/screenshot mốc S03, S04, S05, S06; reverse/jump test log.
- Lint/backend tests/build và smoke các dashboard được liên kết.

## Duyệt, rủi ro và rollback

- Người dùng duyệt demo lựa chọn, copy, preview và CTA cuối trước B7.
- Rủi ro: scene biến thành demo giả; state tích lũy khi reverse; quá nhiều node. Xử lý: derive state từ progress, dùng dataset nhỏ, link công cụ thật.
- Rollback: disable từng scene qua config và trở lại vertical DOM section; không làm hỏng S01→S02.

## Exit gate

AC05–AC09 có bằng chứng kỹ thuật tại `artifacts/homepage-3d/b6/` và `artifacts/homepage-3d/b6-storyboard-revision-v4/`; sáu cảnh hoạt động hai chiều, S03/S04 bám storyboard và CTA thật. Đang dừng tại gate người dùng duyệt B6 revision; không mở B7 hoặc thêm scene ngoài storyboard.
