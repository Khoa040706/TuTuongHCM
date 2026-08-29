# ĐẶC TẢ GIAO DIỆN & TRẢI NGHIỆM TƯƠNG TÁC (UI/UX SPEC) — ADMIN DASHBOARD
**Dự án:** StudyMaster Platform  
**Tài liệu:** UI/UX Interaction Specification  
**Tiêu chuẩn Thiết kế:** Premium Dark/Light Glassmorphism & High-contrast Accessibility  
**Phiên bản:** v1.1.0 — Cập nhật: 2026-08-29 (Bổ sung Hero Cinematic & Scroll Narrative)

> ⚠️ **CHANGELOG v1.1.0**: Bổ sung mục 0 (Hero Cinematic Banner) và cập nhật mục 3.1 (AdminDock) sang cơ chế Scrollspy + Anchor Nav. Lý do đổi: khắc phục lỗi bố cục Hero hiện tại (chữ nền chèn nội dung, KPI card nổi rời rạc, thiếu layering) — tham chiếu ảnh đối sánh mẫu Winzy.

---

## 0. (MỚI) Đặc tả Hero Cinematic Banner (`AdminUnifiedHero.js`)

### 0.1. Vấn đề của bản thiết kế cũ
* Chữ nền lớn ("STUDYMASTER") có độ tương phản quá cao, cạnh tranh thị giác trực tiếp với thanh Nav phía trên.
* Không có lớp phủ tối (scrim) phía dưới ảnh nền → KPI card và đồng hồ thời gian thực phải tự "chống lưng" bằng nền glass riêng, gây cảm giác dán đè, tách rời.
* Card bị đặt tự do theo 2 góc màn hình (KPI ở trái, đồng hồ ở phải), không có đường dẫn thị giác (visual anchor) chung.

### 0.2. Đặc tả Layer (theo thứ tự z-index từ thấp đến cao)

| Lớp (Layer) | Nội dung | Thuộc tính chính |
| :--- | :--- | :--- |
| **Z0 — Ảnh nền** | Ảnh chủ đề (VD: kiến trúc cổ điển, thư viện...) | `object-fit: cover`, full bleed |
| **Z1 — Chữ nền trang trí** | Chữ "STUDYMASTER" khổ lớn | `opacity: 0.08–0.12`, `mix-blend-mode: soft-light`, không chặn pointer-events |
| **Z2 — Gradient Scrim** | Lớp phủ tối dần từ dưới lên | `linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 50%, transparent 80%)` |
| **Z3 — Bottom Band (Content Anchor)** | 1 dải ngang duy nhất chứa KPI card + đồng hồ real-time | `bg-white/10 backdrop-blur-xl`, cùng 1 baseline, bo góc đồng bộ |
| **Z4 — Nav / Dock** | Thanh điều hướng trên cùng | `z-index` cao nhất, `backdrop-blur-xl` đậm hơn Z3 để luôn nổi bật, không bị chữ nền Z1 làm loãng |

### 0.3. Quy tắc bố cục Bottom Band (Z3)
* Toàn bộ chỉ số (KPI: Số môn học, Độ chuẩn xác, Lượt làm bài) và khối đồng hồ thời gian thực nằm **trong cùng 1 khung glass-panel bao ngoài**, chia cột nội bộ bằng `divide-x` hoặc gap đồng đều — không tách thành 2 card độc lập ở 2 góc màn hình.
* Căn theo 1 baseline ngang duy nhất để mắt người xem quét theo 1 đường, giống cấu trúc dải dưới cùng của Winzy Hero (số liệu 20K+/2K+/5K+ + nút Book Now + mini-preview cùng hàng).

### 0.4. Hiệu ứng Parallax
* Ảnh nền (Z0) di chuyển với tốc độ 0.3–0.5x so với tốc độ cuộn của nội dung phía trên, tạo chiều sâu điện ảnh.
* **Bắt buộc tắt trên Mobile** (`< 768px`) để đảm bảo NFR-3 (tránh giật khung hình trên thiết bị yếu).
* Triển khai bằng `@gsap/react` + `ScrollTrigger`, scope theo `matchMedia`.

### 0.5. Chiều cao & Hành vi cuộn tiếp
* Chiều cao tối thiểu: `min-h-[90vh]`.
* Cuối Hero có chỉ báo cuộn tiếp (mũi tên nhỏ nhấp nháy nhẹ hoặc text "Cuộn xuống") để gợi ý người dùng đây là trang cuộn liên tục, không phải trang tĩnh 1 màn hình.

---

## 1. Hệ thống Bố cục & Lưới (Layout & Grid System)

* **Khung chứa chính**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8`
* **Hiệu ứng Kính Mờ (Glassmorphism Surface)**:
  * Nền thẻ: `bg-white/80 dark:bg-[#12141a]/85`
  * Độ mờ hậu cảnh: `backdrop-blur-xl`
  * Đường viền tinh tế: `border border-stone-200/80 dark:border-stone-800/80`
  * Đổ bóng có chiều sâu: `shadow-[0_8px_30px_rgb(0,0,0,0.06)]`
* **(MỚI) Chiều cao Section trong mô hình Scroll Narrative**: Mỗi section (`#section-overview`, `#section-users`, `#section-questions`, `#section-leaderboard`) áp dụng `min-h-screen` để giữ nhịp cuộn đều đặn; nội dung vượt quá 1 viewport (VD: bảng học viên dài) chuyển sang chế độ `focus` (xem `03_TECHNICAL_ARCHITECTURE_DESIGN.md` mục 4.4) thay vì kéo dài section trong luồng cuộn chính.

---

## 2. Hệ Thống Màu sắc & Nhận diện (Color Tokens)

```
┌────────────────────────────────────────────────────────┐
│  MÀU CHỦ ĐẠO DỰ ÁN (ACCENT TOKENS)                    │
│                                                        │
│  • Brand Accent:       var(--accent) [#d97706 / Amber] │
│  • Success (Đạt chuẩn): #15803D (Green-700)            │
│  • Danger (Cảnh báo):  #DC2626 (Red-600)               │
│  • Warning (Lưu ý):    #D97706 (Amber-600)             │
│  • Neutral Dark:       #18191B (Stone-900)             │
│  • Neutral Light:      #F8FAFC (Slate-50)              │
└────────────────────────────────────────────────────────┘
```

---

## 3. Đặc tả Tương tác Thành phần (Component Interaction Specs)

### 3.1. Thanh Dock Điều Hướng Nổi (`AdminDock.js`) — (CẬP NHẬT v1.1.0)
* **Vị trí**: Cố định phía trên cùng hoặc neo giữa màn hình (`position: sticky` hoặc `fixed`) với `z-index: 40`, luôn hiển thị xuyên suốt quá trình cuộn (không chỉ khi ở section Overview).
* **Hiệu ứng Active (Scrollspy)**: Nút tab đang ở trạng thái Active — **được xác định bởi section nào đang chiếm phần lớn viewport hiện tại** (qua `IntersectionObserver`, không phải bằng click thủ công) — được bao quanh bởi viên thuốc (Pill shape) phát sáng nhẹ màu Accent, chữ đậm và có icon tương ứng.
* **Tương tác kép**:
  1. **Click-to-Scroll**: Bấm vào 1 mục Dock → `scrollIntoView({behavior: "smooth", block: "start"})` tới section tương ứng — không tải lại trang, không unmount/mount đột ngột.
  2. **Scroll-to-Highlight**: Cuộn chuột/vuốt tay qua các section → Dock tự động cập nhật Pill Active theo section đang ở giữa viewport, có transition mượt (`transition: all 250ms ease-out`) khi Pill di chuyển giữa các mục.
* Chuyển động của Pill Active giữa các mục nên dùng animation trượt ngang (giống hiệu ứng "viên thuốc trượt" quen thuộc của segmented control), không tắt/bật đột ngột.

```
┌──────────────────────────────────────────────────────────────┐
│ [ 📊 Tổng quan ]   [ 👥 Học viên ]   [ ❓ Câu hỏi ]   [ 🏆 Xếp hạng ] │
│        ▲ Pill Active — trượt mượt theo vị trí cuộn hiện tại   │
└──────────────────────────────────────────────────────────────┘
```

---

### 3.2. Biểu đồ Đường SVG Tương tác (`AdminOverviewTab.js`)
* **Đường cong Bézier**: Vẽ nét mượt bằng stroke gradient từ màu Accent sang trong suốt, độ dày nét `strokeWidth="3"`.
* **Điểm dữ liệu (Data Points)**: Vòng tròn bán kính `r="5"` phát sáng.
* **Trải nghiệm Hover (Tooltip)**: Khi rê chuột vào điểm dữ liệu bất kỳ:
  * Điểm tròn nở rộng lên `r="7"`.
  * Hộp thoại Tooltip nổi lên trên điểm đó hiển thị: `Ngày: DD/MM` và `Số lượt thi: X lượt`.

---

### 3.3. Drawer Trượt Cạnh Phải (`AdminUserDrawer.js`)
* **Kích hoạt**: Bấm nút "Xem hồ sơ" tại danh sách học viên.
* **Hoạt họa**:
  * Backdrop đen mờ: `bg-black/60 backdrop-blur-sm` chuyển từ `opacity-0` sang `opacity-100` trong 200ms.
  * Khung Drawer: Trượt từ cạnh phải `translate-x-full` sang `translate-x-0` trong 300ms với đường cong gia tốc `ease-out`.
* **Đóng Drawer**: Nhấp vào nút đóng $\times$, nhấp vào vùng ngoài Backdrop, hoặc bấm phím `Escape`.
* **(MỚI)** Vì Drawer dùng `position: fixed`, độc lập hoàn toàn với luồng cuộn Scroll Narrative của trang — không bị ảnh hưởng bởi Lazy Mount/Scrollspy của các section phía sau.

---

### 3.4. Biểu đồ Radar Năng lực 6 Trục (Radar Chart Interaction)
* **Toạ độ đa giác**: 6 đỉnh tượng trưng cho 6 nhóm môn học:
  1. *Tư tưởng HCM*
  2. *Lịch sử Đảng*
  3. *Cơ sở Dữ liệu*
  4. *Giải thuật (DSA)*
  5. *OOP Java*
  6. *PTTKYC*
* **Hiển thị**: Lớp phủ đa giác màu xanh/cam bán trong suốt thể hiện tỷ lệ hoàn thành và điểm số trung bình trên từng trục, giúp Admin nhìn thấy ngay điểm mạnh/yếu của sinh viên.

---

### 3.5. Hộp thoại Xác nhận An toàn (Confirmation Modals)
* Đối với các thao tác nguy hiểm (như **Xóa học viên**, **Khóa tài khoản**, **Xóa nhật ký logs**):
  * Bắt buộc hiển thị hộp thoại xác nhận với icon cảnh báo màu đỏ (`ShieldAlert` hoặc `AlertTriangle`).
  * Nút hành động chính có màu đỏ nổi bật, nút "Hủy" có màu xám trung tính.
  * Ngăn chặn việc bấm nhầm gây mất mát dữ liệu quan trọng.

---

### 3.6. (MỚI) Chế độ Preview ⇄ Focus Mode (`AdminUsersTab.js`, `AdminQuestionsTab.js`)
* **Preview (mặc định trong luồng cuộn)**:
  * Hiển thị tối đa 5 dòng dữ liệu tiêu biểu gần nhất, không có thanh phân trang/tìm kiếm đầy đủ.
  * Nút "Quản lý đầy đủ →" nổi bật ở cuối khối preview, màu Accent.
* **Focus Mode (khi bấm nút trên)**:
  * Section mở rộng chiếm trọn viewport (overlay hoặc expand-in-place tùy thiết kế cuối cùng của Dev), nền cuộn trang cha bị khóa (`overflow: hidden`).
  * Hoạt họa mở rộng: `scale` từ 0.96 → 1 kết hợp `opacity` 0 → 1 trong 250ms, `ease-out`.
  * Nút thoát "✕ Thu gọn" cố định góc trên phải khối Focus, hoặc phím `Escape`.
  * Khi thoát, cuộn trang cha được mở khóa và vị trí cuộn giữ nguyên tại section đó (không nhảy về đầu trang).

---

## 4. Bảng Phản hồi Thiết bị (Responsive Breakpoints Matrix)

| Kích thước Màn hình | Layout Hero | Layout Tab Overview | Layout Bảng Users | Hành vi Dock |
| :--- | :--- | :--- | :--- | :--- |
| **Desktop ($\ge 1280\text{px}$)** | Full Parallax, Bottom Band 1 hàng ngang | 4 cột KPI, 2 cột Charts (Bézier + Donut) | Đầy đủ 6 cột dữ liệu + Action buttons | Nổi căn giữa rộng rãi, Scrollspy mượt |
| **Tablet ($768\text{px} - 1279\text{px}$)** | Parallax giảm biên độ, Bottom Band 1 hàng ngang | 2 cột KPI $\times$ 2 hàng, 1 cột Charts xếp dọc | 5 cột dữ liệu (ẩn bớt ngày tham gia) | Nổi thu gọn icon + text |
| **Mobile ($< 768\text{px}$)** | **Tắt Parallax hoàn toàn**, Bottom Band xếp dọc 2 hàng | 1 cột KPI xếp dọc, biểu đồ cuộn ngang | Dạng thẻ Card cuộn dọc thay vì bảng rộng | Dock chuyển thành thanh icon tinh gọn ở đáy, vẫn giữ Scrollspy |
