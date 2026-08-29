# ĐẶC TẢ YÊU CẦU PHẦN MỀM (SRS) — ADMIN DASHBOARD
**Dự án:** StudyMaster Platform  
**Tài liệu:** Software Requirements Specification (SRS)  
**Mã tài liệu:** SRS-ADM-2026-V1  
**Phiên bản:** v1.1.0 — Cập nhật: 2026-08-29 (Bổ sung Cinematic Scroll Navigation)

> ⚠️ **CHANGELOG v1.1.0**: Thay đổi mô hình điều hướng từ **Tab-Switch rời rạc** (ẩn/hiện toàn bộ nội dung) sang **Cinematic Scroll Narrative** (1 trang cuộn liên tục, có Dock đóng vai trò Scrollspy). Xem chi tiết luận cứ kỹ thuật tại `03_TECHNICAL_ARCHITECTURE_DESIGN.md` mục 4.

---

## 1. Yêu cầu Chức năng (Functional Requirements - FR)

### FR-1: Xác thực & Điều hướng Quản trị (Auth & Navigation)
* **FR-1.1**: Người dùng có quyền Admin sau khi đăng nhập thành công sẽ có tùy chọn chuyển sang giao diện `AdminDashboard`.
* **FR-1.2 (CẬP NHẬT)**: Cung cấp thanh `AdminDock` nổi, đóng vai trò **kép**:
  1. **Anchor Navigation**: Khi Admin bấm vào 1 mục trên Dock (VD: "Học viên"), trang tự động `scrollIntoView({behavior: "smooth"})` tới section tương ứng.
  2. **Scrollspy (Tự động Highlight)**: Khi Admin cuộn chuột/vuốt tay tới section nào, Dock tự động cập nhật trạng thái Active (Pill sáng) sang mục đó — dùng `IntersectionObserver`, **không** dùng phép tính `scrollY` thủ công (tránh giật, tốn hiệu năng).
  * 4 mục điều hướng: `overview` (Tổng quan), `users` (Học viên), `questions` (Ngân hàng câu hỏi), `leaderboard` (Bảng xếp hạng).
* **FR-1.3**: Có nút chuyển nhanh quay lại giao diện học tập ("Về trang học") và nút "Đăng xuất" an toàn — cố định tại Dock, không phụ thuộc vị trí cuộn.
* **FR-1.4 (MỚI)**: Khi 1 section được mở rộng chế độ "Quản lý đầy đủ" (Focus Mode — xem FR-3.8, FR-4.5), toàn trang tạm khóa cuộn nền (`document.body.style.overflow = 'hidden'`) để tránh xung đột thao tác giữa 2 lớp cuộn.

---

### FR-2: Section Tổng quan & Hero Cinematic (Overview Section)
* **FR-2.0 (MỚI — Hero Cinematic Banner)**:
  * Banner mở đầu trang, chiều cao tối thiểu 90% viewport (`min-h-[90vh]`).
  * Lớp chữ nền lớn ("STUDYMASTER") giảm độ tương phản (`opacity: 8-12%`, `mix-blend-mode: soft-light`), đóng vai trò **texture trang trí**, không cạnh tranh thị giác với Nav/nội dung chức năng.
  * Bắt buộc có lớp **Gradient Scrim** phủ nửa dưới ảnh nền (`linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)`) để đảm bảo văn bản/card phía trên luôn đủ tương phản đọc được, đạt chuẩn WCAG 2.1 AA (kế thừa NFR-5).
  * Toàn bộ card nổi (KPI: "10 Môn / 88% / 1 lượt thi" và đồng hồ "Thời gian thực") phải được gom vào **1 dải ngang duy nhất (bottom band)** cùng baseline, tránh bố trí rời rạc theo 2 góc màn hình như bản cũ.
  * Hỗ trợ hiệu ứng Parallax nhẹ: ảnh nền cuộn với tốc độ 0.3–0.5x so với tốc độ cuộn nội dung (dùng GSAP ScrollTrigger, đã có sẵn trong stack).
* **FR-2.1 (KPIs Summary)**: Hiển thị 4 thẻ chỉ số tổng (giữ nguyên nghiệp vụ bản v1.0.0):
  1. *Tổng học viên đăng ký*
  2. *Độ chuẩn xác trung bình*
  3. *Tổng lượt ôn tập*
  4. *Nhật ký hoạt động*
* **FR-2.2 (SVG Bézier Chart)**: Giữ nguyên nghiệp vụ bản v1.0.0 — trực quan hóa 7 ngày gần nhất, hover tooltip Ngày/Số lượt thi.
* **FR-2.3 (Donut Chart)**: Giữ nguyên nghiệp vụ bản v1.0.0.
* **FR-2.4 (System Audit Logs)**: Giữ nguyên nghiệp vụ bản v1.0.0.
* **FR-2.5 (MỚI — Lazy Mount theo Section)**: Nội dung nặng (chart, bảng dữ liệu) của mỗi section chỉ được render đầy đủ khi section đó **sắp vào viewport** (dùng `IntersectionObserver` với `rootMargin` nới trước ~200px); khi cuộn xa khỏi section, có thể unmount phần nặng để giữ hiệu năng — xem `03_TECHNICAL_ARCHITECTURE_DESIGN.md` mục 4.2.

---

### FR-3: Section Quản lý Học viên (Users Section)
* **FR-3.1 (Danh sách & Phân trang)**: Giữ nguyên nghiệp vụ bản v1.0.0.
* **FR-3.2 (Tìm kiếm & Bộ lọc)**: Giữ nguyên nghiệp vụ bản v1.0.0.
* **FR-3.3 (Thêm học viên mới)**: Giữ nguyên nghiệp vụ bản v1.0.0.
* **FR-3.4 (Khóa/Mở khóa tài khoản)**: Giữ nguyên nghiệp vụ bản v1.0.0.
* **FR-3.5 (Đổi mật khẩu học viên)**: Giữ nguyên nghiệp vụ bản v1.0.0.
* **FR-3.6 (Xóa học viên)**: Giữ nguyên nghiệp vụ bản v1.0.0.
* **FR-3.7 (Xuất Excel)**: Giữ nguyên nghiệp vụ bản v1.0.0.
* **FR-3.8 (MỚI — Chế độ Preview & Focus Mode)**:
  * Ở chế độ cuộn thông thường (Preview), section "Học viên" chỉ hiển thị **5 dòng tiêu biểu gần nhất** + nút "Quản lý đầy đủ →".
  * Khi bấm nút này, section mở rộng chiếm toàn màn hình (Focus Mode), tải đầy đủ bảng phân trang/tìm kiếm/action như đặc tả gốc, đồng thời khóa cuộn trang cha theo FR-1.4.
  * Có nút "Thu gọn ✕" hoặc phím `Escape` để thoát Focus Mode, trả về chế độ cuộn 1 trang.

---

### FR-4: Section Ngân hàng Câu hỏi & Kiểm định Đề thi (Questions Section)
* **FR-4.1 (Bộ chọn Môn & Chương)**: Giữ nguyên nghiệp vụ bản v1.0.0.
* **FR-4.2 (Kiểm định Luật Chống đoán bừa)**: Giữ nguyên nghiệp vụ bản v1.0.0 — công thức $\Delta L \le 15$ không đổi.
* **FR-4.3 (Phân loại & Lọc)**: Giữ nguyên nghiệp vụ bản v1.0.0.
* **FR-4.4 (Xem chi tiết câu hỏi & Trick Details)**: Giữ nguyên nghiệp vụ bản v1.0.0.
* **FR-4.5 (MỚI — Chế độ Preview & Focus Mode)**: Áp dụng cùng cơ chế FR-3.8 — Preview hiển thị tóm tắt số liệu kiểm định (VD: "12/40 câu vi phạm ΔL"), Focus Mode mở toàn bộ trình kiểm định chi tiết.

---

### FR-5: Section Bảng xếp hạng (Leaderboard Section)
* **FR-5.1**: Giữ nguyên nghiệp vụ bản v1.0.0 — Top 3 Podium.
* **FR-5.2**: Giữ nguyên nghiệp vụ bản v1.0.0.
* **FR-5.3**: Giữ nguyên nghiệp vụ bản v1.0.0.
* *(Section này có chiều cao ổn định, không cần Focus Mode bắt buộc — Podium + bảng rút gọn vừa đủ 1 viewport theo tinh thần Cinematic Scroll.)*

---

### FR-6: Drawer & Modals Phụ trợ
* **FR-6.1 (AdminUserDrawer)**: Giữ nguyên nghiệp vụ bản v1.0.0.
* **FR-6.2 (AdminWorkDrawer)**: Giữ nguyên nghiệp vụ bản v1.0.0.
* **FR-6.3 (AdminModals)**: Giữ nguyên nghiệp vụ bản v1.0.0.
* **FR-6.4 (MỚI)**: Drawer/Modal dùng `position: fixed`, độc lập với luồng cuộn trang; bắt buộc khóa `overflow: hidden` trên `<body>` khi mở để tránh nền cuộn xuyên qua lớp phủ.

---

## 2. Yêu cầu Phi Chức năng (Non-Functional Requirements - NFR)

| Mã NFR | Tiêu chuẩn | Chỉ số Mục tiêu |
| :--- | :--- | :--- |
| **NFR-1** | **Hiệu năng (Performance)** | Thời gian render biểu đồ $< 16\text{ms}$ (đạt 60 FPS mượt mà). Tốc độ tìm kiếm/lọc học viên $< 50\text{ms}$. **(MỚI)** Chỉ 1 section ở chế độ "đầy đủ dữ liệu nặng" được mount tại 1 thời điểm nhờ Lazy Mount (FR-2.5), tránh cùng lúc mount Bézier + Donut + Bảng Users + Ngân hàng câu hỏi + Radar. |
| **NFR-2** | **Bảo mật (Security)** | Mật khẩu học viên không được hiển thị dạng thô trong logs. Không cho phép xóa tài khoản của chính Super Admin đang đăng nhập. |
| **NFR-3** | **Khả năng Phản hồi (Responsive)** | Hỗ trợ hiển thị mượt mà trên Desktop ($\ge 1280\text{px}$), Tablet ($\ge 768\text{px}$) và Mobile ($\ge 375\text{px}$). **(MỚI)** Trên Mobile, hiệu ứng Parallax Hero (FR-2.0) tắt hoàn toàn để tránh giật khung hình trên thiết bị yếu. |
| **NFR-4** | **Tính Tin cậy (Reliability)** | Tự động khôi phục dữ liệu mẫu ban đầu nếu `localStorage` bị trống hoặc lỗi cấu trúc JSON. |
| **NFR-5** | **Thẩm mỹ & Trải nghiệm (UI/UX)** | Chuẩn Dark/Light Glassmorphism, hiệu ứng chuyển tab mượt mà bằng CSS Transitions, độ tương phản văn bản đạt chuẩn WCAG 2.1 AA. **(MỚI)** Hero bắt buộc có Gradient Scrim đảm bảo tương phản chữ/card nổi trên mọi ảnh nền. |
