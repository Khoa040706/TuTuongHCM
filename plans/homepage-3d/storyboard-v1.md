# Storyboard v1 — Sáu cảnh Trang chủ 3D

**Trạng thái:** `APPROVED — D02 DECIDED; B3 blockout đang chờ duyệt`

**Phạm vi:** desktop-first; mobile là backlog, chưa triển khai/nghiệm thu.

## Nguyên tắc chung

- Overlay auth đóng khi vào trang; CTA đăng nhập/học nhanh luôn sẵn sàng.
- DOM content, CTA và fallback tồn tại độc lập với camera/timeline; canvas không mang thông tin thiết yếu.
- Mỗi scene derive từ `chapter + progress`, không mutation tích lũy; scroll ngược/jump khôi phục đúng state.
- Pose `compact` đưa cua/vòng về vùng phụ để không che content/CTA ở S05–S06.

## S01 — Gặp StudyMaster

- **Câu hỏi:** StudyMaster là gì?
- **Frame đầu:** nền Ivory; copy DOM trái; huy hiệu cua đóng bên phải; auth overlay đóng.
- **Motion:** ring idle chậm, càng chào một lần; pointer offset nhỏ.
- **Copy nháp:** “Hiểu kiến thức. Nhìn thấy cách nó vận hành.”
- **CTA:** “Bắt đầu học” mở auth overlay; “Khám phá StudyMaster” tới S02; nút đăng nhập nhanh luôn thấy.
- **Frame cuối:** vòng chuẩn bị tách, copy vẫn đọc được.
- **Reduced/fallback:** ảnh pose đóng; không pin; CTA đầy đủ.

## S02 — Mở không gian kiến thức

- **Câu hỏi:** Nội dung được tổ chức ra sao?
- **Motion:** outer ring lùi, inner ring nghiêng; khối kiến thức đi ra và gom nhóm; cua dịch sang vùng dẫn mắt.
- **Copy nháp:** “Từ từng chủ đề đến cấu trúc dễ khám phá.”
- **Frame cuối:** khối nằm trong layout sẵn sàng thành dãy Bubble Sort.
- **Guard:** không tuyên bố AI/cá nhân hóa/lộ trình tự động.

## S03 — Bubble Sort `[3,1,2]`

- **Nguồn thật:** `components/BubbleSortLab.js`, adjacent comparison, swap phases và early-exit flag.
- **Trace khóa nội dung:**
  1. `[3,1,2]`: so sánh `3 > 1`, swap → `[1,3,2]`.
  2. `[1,3,2]`: so sánh `3 > 2`, swap → `[1,2,3]`; index 2 được khóa sau lượt 1.
  3. Lượt 2: so sánh `1 ≤ 2`, không swap; `swapped=false`, kết thúc sớm và khóa mảng.
- **Motion:** chỉ minh họa compare/lift/slide/drop ở mức gọn; không tự nhận là toàn bộ lab.
- **CTA:** “Xem Bubble Sort” mở lab/dashboard thật.
- **Reverse:** array/compare/lock derive từ progress snapshot, không swap lại trên mảng đã mutate.

## S04 — Activity Diagram ATM

- **Nguồn thật:** `DiagramSimDashboard.js` và `public/assets/diagrams/atm_activity_diagram.png`.
- **Cấu trúc giữ đúng:** ba swimlane `[Customer]`, `[ATM Terminal]`, `[Bank Host Server]`; initial `●`, action state, decision `◆` có guard, fork/join bar và final `◉`.
- **Motion:** data blocks S03 chuyển thành action nodes; node vào vị trí trước, cạnh/guard xuất hiện sau; highlight luồng rút tiền mẫu.
- **Content guard:** CTA là “Khám phá sơ đồ Activity” hoặc “Xem thư viện sơ đồ”; không hứa kéo-thả/chỉnh sửa vì tính năng đó đang ghi “Sắp tới”.
- **Reverse:** cạnh biến mất trước node; không để connector che label.

## S05 — Từ quan sát tới công cụ thật

- **Pose:** cua/vòng chuyển sang `compact`, nằm vùng phụ; camera không dùng để đẩy content DOM khỏi viewport.
- **Preview:** ảnh/component cô lập của Bubble Sort và Diagram Dashboard được chụp ở milestone triển khai; gắn nhãn “Minh họa”.
- **Highlight tối đa:** chọn ví dụ, chạy từng bước, xem kết quả—chỉ sau khi đối chiếu UI thật.
- **CTA:** mở công cụ thật; không đặt control giả trên screenshot.

## S06 — Bắt đầu hành trình

- **Pose:** `compact/final`, vòng tạo khung nhỏ, chuyển động nền giảm.
- **Copy nháp:** “Bắt đầu từ điều bạn muốn hiểu hôm nay.”
- **CTA guest:** mở auth overlay; **learner:** khám phá môn học; **admin:** vào quản trị.
- **Guard:** không dùng “Tiếp tục học” trong v1 vì chưa có last-visited contract.

## Mapping PRE01–PRE05

- **PRE01:** body, hai claw, legs group, inner/outer ring và cancer mark là bộ phận độc lập; xác minh ở B3/B5.
- **PRE02:** có pose `compact`/final cho S05–S06, không chỉ pose closed/open.
- **PRE03:** HomeContent/CTA/fallback tách khỏi CameraRig/StoryController; timeline không sở hữu nội dung thiết yếu.
- **PRE04:** mọi model/stat/preview/fallback có source, hash/manifest hoặc nhãn “Minh họa”; không bịa thống kê.
- **PRE05:** touch layout/camera/quality là backlog mobile; không ghi mobile pass trong v1.

## Mốc duyệt

Người dùng đã duyệt concept synthesis v1 cùng MUST/SHOULD/LATER và khóa D02. Storyboard giữ nguyên; B3 đã tạo đủ 5 pose theo contract và đang dừng tại mốc duyệt blockout, chưa code sản phẩm hoặc dựng model final.
