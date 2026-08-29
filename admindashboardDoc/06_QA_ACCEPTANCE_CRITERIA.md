# TIÊU CHÍ NGHIỆM THU & KỊCH BẢN KIỂM THỬ (QA / UAT) — ADMIN DASHBOARD
**Dự án:** StudyMaster Platform  
**Tài liệu:** Acceptance Criteria & UAT Test Cases  
**Định dạng:** Gherkin (Given - When - Then)  
**Tiêu chuẩn Kiểm thử:** 100% Pass trước khi Release  
**Phiên bản:** v1.1.0 — Cập nhật: 2026-08-29 (Bổ sung Test Case cho Scroll Narrative & Hero)

---

## 1. Kịch bản Kiểm thử Nghiệp vụ (UAT Scenarios)

### Test Case 1: Chuyển đổi sang Giao diện Admin Dashboard
* **Feature**: Điều hướng quyền Quản trị
* **Scenario**: Admin đăng nhập và truy cập Dashboard
  * **Given**: Người dùng đã đăng nhập với tài khoản có quyền Admin (`username: "admin"`).
  * **When**: Người dùng chọn nút "Trang quản trị" trên thanh điều hướng hoặc chọn menu Admin.
  * **Then**: Hệ thống chuyển `appStep` sang `"admin-dashboard"`, hiển thị Hero Cinematic Banner ở đầu trang, thanh `AdminDock` sticky, và mặc định vị trí cuộn tại section `overview`.

---

### Test Case 2: Kiểm định Luật Chống Đoán Bừa ($\Delta L \le 15$)
* **Feature**: Quét tự động ngân hàng câu hỏi
* **Scenario**: Phát hiện câu hỏi vi phạm độ lệch phương án
  * **Given**: Quản trị viên đang ở section `questions` (Focus Mode) của môn `tu-tuong-hcm`, chương `chuong-4`.
  * **When**: Hệ thống tải danh sách câu hỏi và tính toán $L_{\max} - L_{\min}$ của 4 phương án A, B, C, D.
  * **Then**: 
    * Nếu $\Delta L > 15$ ký tự: Câu hỏi được gắn viền đỏ và nhãn `⚠️ Lệch độ dài: +X ký tự`.
    * Nếu $\Delta L \le 15$ ký tự: Câu hỏi được gắn viền xanh và nhãn `✅ Đạt chuẩn: ΔL ≤ 15`.
    * Khi chọn bộ lọc `warning`, danh sách chỉ hiển thị các câu hỏi vi phạm để biên tập viên chỉnh sửa.

---

### Test Case 3: Thêm Học viên Mới & Bắt lỗi Trùng lặp
* **Feature**: Quản trị người dùng
* **Scenario**: Thêm tài khoản học viên mới hợp lệ
  * **Given**: Admin đang ở section `users` (Focus Mode) và bấm nút "Thêm học viên".
  * **When**: Admin nhập Username: `"nguyenvanc"`, Email: `"vanc@gmail.com"`, Password: `"Student@123"`, Xác nhận Pass: `"Student@123"` và bấm "Lưu tài khoản".
  * **Then**: 
    * Hệ thống thêm thành công học viên vào danh sách.
    * Ghi 1 bản ghi mới vào `studymaster_admin_logs` ("Admin đã thêm học viên nguyenvanc").
    * Hiển thị Toast thông báo thành công xanh lá.
* **Scenario**: Bắt lỗi trùng lặp Username
  * **Given**: Admin mở modal thêm học viên.
  * **When**: Admin nhập Username đã tồn tại trong hệ thống (VD: `"hocsinh1"`).
  * **Then**: Hệ thống chặn lưu và hiển thị thông báo lỗi: *"Tên đăng nhập này đã tồn tại trên hệ thống!"*.

---

### Test Case 4: Khóa & Mở khóa Tài khoản Học viên
* **Feature**: Bảo vệ hệ thống & Kỷ luật tài khoản
* **Scenario**: Khóa tài khoản học viên vi phạm
  * **Given**: Học viên `"hocsinh1"` đang ở trạng thái `locked: false` (Hoạt động).
  * **When**: Admin bấm nút "Khóa tài khoản" và bấm "Xác nhận" trên hộp thoại cảnh báo.
  * **Then**: 
    * Trạng thái của `"hocsinh1"` chuyển thành `locked: true` (Đã khóa) với nhãn đỏ.
    * Khi `"hocsinh1"` cố gắng đăng nhập ở màn hình Login, hệ thống từ chối và báo lỗi *"Tài khoản của bạn đã bị tạm khóa bởi Quản trị viên"*.

---

### Test Case 5: Xuất Báo cáo Danh sách Học viên ra Excel
* **Feature**: Trích xuất dữ liệu báo cáo
* **Scenario**: Tải về tệp Excel chuẩn định dạng
  * **Given**: Danh sách học viên đang có 10 bản ghi.
  * **When**: Admin bấm nút "Xuất Excel".
  * **Then**: 
    * Trình duyệt tự động tải về tệp có tên dạng: `danh_sach_hoc_vien_YYYY-MM-DD.xlsx`.
    * Mở file kiểm tra: Có dòng tiêu đề nổi bật, các cột `STT`, `Tên đăng nhập`, `Email`, `Ngày tạo`, `Trạng thái`, và đường viền bảng ngay ngắn.

---

### Test Case 6: Xem Hồ sơ & Biểu đồ Radar Năng lực
* **Feature**: Phân tích cá nhân hóa học viên
* **Scenario**: Mở Drawer xem biểu đồ Radar học viên
  * **Given**: Admin đang ở section `users`.
  * **When**: Admin bấm nút "Xem hồ sơ" của học viên `"nguyenvana"`.
  * **Then**: 
    * Drawer trượt ra mượt mà từ cạnh phải màn hình, không phụ thuộc vị trí cuộn hiện tại của trang.
    * Hiển thị thông tin chi tiết của `"nguyenvana"`.
    * Render đúng biểu đồ Radar 6 trục thể hiện năng lực các môn học.
    * Khi bấm phím `Esc` hoặc bấm ra ngoài màn hình mờ, Drawer đóng lại.

---

### Test Case 7 (MỚI): Điều hướng Scrollspy trên `AdminDock`
* **Feature**: Cinematic Scroll Narrative
* **Scenario A — Cuộn tay tự động highlight Dock**
  * **Given**: Admin đang ở đầu trang, Dock hiển thị Pill Active tại mục "Tổng quan".
  * **When**: Admin cuộn chuột/vuốt tay xuống cho tới khi section "Học viên" chiếm phần lớn viewport.
  * **Then**: Pill Active trên Dock tự động trượt mượt sang mục "Học viên" trong vòng $\le 300\text{ms}$ sau khi section đó vào vùng kích hoạt, không bị nhấp nháy (flicker) giữa 2 mục liền kề.
* **Scenario B — Bấm Dock để cuộn nhanh**
  * **Given**: Admin đang ở section "Tổng quan".
  * **When**: Admin bấm vào mục "Bảng xếp hạng" trên Dock.
  * **Then**: Trang tự động cuộn mượt (`smooth scroll`) tới section "Bảng xếp hạng", không tải lại trang, không có hiện tượng giật khung hình giữa chừng.

---

### Test Case 8 (MỚI): Đặc tả Layering & Tương phản Hero Cinematic
* **Feature**: Hero Cinematic Banner
* **Scenario**: Kiểm tra tương phản đọc được của nội dung nổi trên ảnh nền
  * **Given**: Admin Dashboard hiển thị Hero ở đầu trang với ảnh nền bất kỳ.
  * **When**: QA kiểm tra tỷ lệ tương phản (contrast ratio) của: (a) chữ trong KPI card, (b) chữ đồng hồ thời gian thực, (c) chữ trong thanh Nav.
  * **Then**:
    * Tất cả đạt tối thiểu chuẩn WCAG 2.1 AA (contrast ratio $\ge 4.5:1$ cho văn bản thường).
    * Lớp chữ nền trang trí (VD: "STUDYMASTER") không được che khuất hoặc làm giảm độ rõ của bất kỳ văn bản chức năng nào (Nav, KPI, nút bấm) khi kiểm tra bằng mắt thường ở cả 2 chế độ Light/Dark.
    * KPI card và khối đồng hồ thời gian thực nằm trong cùng 1 dải ngang (Bottom Band), không xuất hiện rời rạc ở 2 vị trí tách biệt.

---

### Test Case 9 (MỚI): Chuyển đổi Preview ⇄ Focus Mode
* **Feature**: Quản lý Học viên / Ngân hàng Câu hỏi ở chế độ cuộn
* **Scenario**: Mở rộng Focus Mode và khóa cuộn nền
  * **Given**: Admin đang cuộn tới section "Học viên", hiển thị ở chế độ Preview (5 dòng dữ liệu).
  * **When**: Admin bấm nút "Quản lý đầy đủ →".
  * **Then**: 
    * Section mở rộng chiếm toàn màn hình (Focus Mode) với hoạt họa `scale`/`opacity` mượt trong khoảng 250ms.
    * Toàn bộ nội dung bảng đầy đủ (phân trang, tìm kiếm, action buttons) được hiển thị đúng theo đặc tả FR-3 gốc.
    * Cuộn trang nền (các section khác) bị khóa hoàn toàn — thử cuộn chuột không làm trang cha di chuyển.
  * **When (tiếp)**: Admin bấm nút "✕ Thu gọn" hoặc phím `Escape`.
  * **Then (tiếp)**: Focus Mode đóng lại, cuộn trang nền được mở khóa, vị trí cuộn giữ nguyên tại section "Học viên" (không nhảy về đầu trang).

---

## 2. Danh mục Kiểm tra Ngoại lệ (Edge Cases Checklist)

- [x] **Dữ liệu rỗng ban đầu**: Nếu `localStorage` bị xóa trắng, hệ thống tự động khởi tạo 3 học viên mẫu và 3 bản ghi log mẫu mà không gây sập màn hình trắng (White Screen).
- [x] **Chống xóa chính mình**: Nút "Xóa tài khoản" bị vô hiệu hóa (disabled) đối với tài khoản `admin` đang trực tiếp đăng nhập.
- [x] **Trùng khớp mật khẩu**: Modal đổi mật khẩu bắt buộc `Mật khẩu mới === Xác nhận mật khẩu` mới cho phép bấm nút "Lưu thay đổi".
- [x] **Lọc tìm kiếm không dấu/có dấu**: Tìm kiếm tiếng Việt hoạt động chính xác (ví dụ: tìm `"van"` sẽ khớp cả `"nguyenvana"`).
- [x] **(MỚI) Hiệu năng cuộn nhanh (Fast Scroll)**: Khi Admin cuộn rất nhanh qua nhiều section liên tiếp (VD: dùng phím `End` hoặc lăn chuột mạnh), Lazy Mount không được để lộ khoảng trắng/placeholder kéo dài quá 500ms trước khi nội dung thật render xong.
- [x] **(MỚI) Parallax trên thiết bị yếu**: Trên thiết bị Mobile thực tế (không phải giả lập DevTools), xác nhận hiệu ứng Parallax Hero đã tắt hoàn toàn và FPS cuộn Hero đạt tối thiểu 50 FPS.
- [x] **(MỚI) Drawer/Modal không xung đột với khóa cuộn Focus Mode**: Khi đang ở Focus Mode (Users/Questions) và mở thêm Drawer/Modal bên trong, đóng Drawer/Modal không được vô tình mở khóa cuộn của trang cha (Focus Mode) trước thời điểm Admin chủ động thoát Focus Mode.
