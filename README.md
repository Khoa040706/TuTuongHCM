# 📚 StudyMaster — Tư Tưởng Hồ Chí Minh
> **"Focus. Calm. Decide. Succeed."** — Một ứng dụng web học tập nội bộ (local), hiện đại và trực quan dành riêng cho việc ghi chép, hệ thống hóa kiến thức môn học **Tư tưởng Hồ Chí Minh**.

---

## 🎨 Astro-Numerology Design System

Giao diện của **StudyMaster** được thiết kế tỉ mỉ và đồng bộ dựa trên **Astro-Numerology Design System** nhằm tối ưu hóa sự tập trung và mang lại trải nghiệm học tập cao cấp nhất.

### 🎨 Bảng màu chính (Palette)
- **Primary / Focus (Earth Gold):** `#CA8A04` — Màu chủ đạo mang tính vững chãi, tập trung.
- **Secondary / Alert (Fire Crimson):** `#B91C1C` — Sử dụng cho các ghi chú, định nghĩa cốt lõi cực kỳ quan trọng.
- **Accent / CTA / Success (Sun Gold):** `#EAB308` — Điểm nhấn hành động, trạng thái thành công.
- **Support / Calmness / Info (Lunar Blue):** `#3B82F6` — Màu bổ trợ, mang cảm giác bình yên, thư giãn và tin cậy.
- **Neutral Dark (Deep Stone):** `#1C1917` — Màu nền tối sang trọng.
- **Neutral Light (Linen Light):** `#FBFBF9` — Màu nền sáng thanh tao, dịu mắt.

### 🌓 Giao diện thông minh (Themes)
Hỗ trợ chuyển đổi **Light Mode** & **Dark Mode** mượt mà chỉ với một click, tự động ghi nhớ tùy chọn của bạn cho những lần học tiếp theo (Local Storage).

---

## 🚀 Tính Năng Nổi Bật

- 📖 **Hệ Thống Phân Cấp Kiến Thức Độc Đáo:** Hiển thị bài học rõ ràng từ Chương → Phần (I, II...) → Mục (1, 2...) → Tiêu mục (a, b...) → Bullet points đa cấp.
- 📌 **Khung Định Nghĩa Cốt Lõi (Definition Box):** Các định nghĩa quan trọng được bao khung màu đỏ nổi bật (`#B91C1C`) giúp người học ghi nhớ nhanh.
- 📑 **Thanh Điều Hướng Sidebar Động:** Sidebar tự động mở rộng/thu gọn và tích hợp **Scroll Spy** — tự động highlight mục tương ứng khi bạn cuộn trang.
- 📱 **Thiết Kế Hoàn Toàn Tương Thích (Responsive):** Học tập mượt mà trên cả máy tính (Desktop) và điện thoại di động (Mobile).
- ⚡ **Khả Năng Mở Rộng Dễ Dàng:** Dữ liệu bài học được cấu trúc dưới dạng JSON độc lập trong thư mục `js/data/`, dễ dàng viết thêm chương mới mà không cần can thiệp vào mã nguồn giao diện.

---

## 📂 Cấu Trúc Dự Án

```
TutuongHCM/
├── index.html              # Trang chính (Khởi chạy ứng dụng)
├── README.md               # Tài liệu hướng dẫn này
├── css/
│   └── styles.css          # Design system, layout và toàn bộ styles
└── js/
    ├── app.js              # Logic khởi tạo, scroll spy và điều phối chính
    ├── data/
    │   └── chuong-mo-dau.js # Dữ liệu chi tiết Chương mở đầu (Phần I)
    └── components/
        ├── sidebar.js      # Component điều hướng thanh bên
        ├── content.js      # Component dựng cấu trúc bài học động
        └── theme.js        # Logic điều khiển & chuyển đổi Light/Dark theme
```

---

## 📖 Hướng Dẫn Sử Dụng & Học Tập

### 1. Chạy local cực kỳ đơn giản
Vì đây là ứng dụng web tĩnh thuần HTML/CSS/JS, bạn không cần cài đặt NodeJS hay bất cứ server phức tạp nào:
1. Tải toàn bộ mã nguồn về máy.
2. Click đúp chuột vào file `index.html` để mở trực tiếp trên trình duyệt của bạn (Chrome, Edge, Safari, Firefox,...).

### 2. Thêm chương mới khi học tiếp
Khi bạn học thêm các chương mới (ví dụ: Chương 1, Chương 2...), bạn chỉ cần:
1. Tạo một file dữ liệu mới trong `js/data/` (ví dụ: `chuong-1.js`).
2. Định nghĩa cấu trúc dữ liệu tương tự như `chuong-mo-dau.js`.
3. Nhúng file JS mới vào `index.html` và thêm đối tượng chương đó vào mảng `this.chapters` trong `js/app.js`.

---

## 🛠️ Công Nghệ Sử Dụng

- **HTML5:** Cấu trúc ngữ nghĩa (Semantic HTML), hỗ trợ SEO local.
- **Vanilla CSS:** Tự do tùy biến hoàn hảo theo Design System mà không cần thư viện cồng kềnh.
- **Pure JavaScript (ES6+):** Xử lý render động, quản lý theme, tương tác sidebar mượt mà.
- **Google Fonts:** Tích hợp bộ font tinh tế *Playfair Display* & *Plus Jakarta Sans*.

---

*Chúc bạn có những giờ phút học tập thật hiệu quả và tràn đầy cảm hứng cùng **StudyMaster**!* 🌟
