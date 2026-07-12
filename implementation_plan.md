# Kế hoạch Soạn thảo Tài liệu Dự án Toàn diện (README.md)

Tài liệu này phác thảo kế hoạch chi tiết từng bước để viết tệp tài liệu kỹ thuật toàn diện `README.md` nằm tại thư mục gốc của dự án, đóng vai trò là sách hướng dẫn lập trình viên (Developer Guide) chuyên sâu cho hệ thống *StudyMaster*.

---

## 📋 Đề cương Tài liệu Dự kiến (README.md Structure)

Tài liệu `README.md` sẽ cực kỳ chi tiết (không quá ngắn) và bao gồm các đề mục sau:

1. **Tổng quan Dự án & Triết lý Thiết kế**: Tầm nhìn của StudyMaster, cách tiếp cận học tập tương tác chủ động.
2. **Kiến trúc Hệ thống & Stack Công nghệ**: Phân tích việc sử dụng Next.js 16 (App Router), React 19, GSAP, Tailwind v4, và Firebase v12 (Firestore).
3. **Danh mục Component Tương tác**:
   * *Nhóm đại cương/chính trị*: Sơ đồ dòng thời gian, bảng khám phá đối tượng lịch sử.
   * *Nhóm CNTT*: Các bộ mô phỏng sắp xếp, biểu đồ Big O, mô phỏng ô nhớ RAM, bộ chuyển đổi định dạng và casting.
4. **Hệ thống Thiết kế UI/UX**:
   * Triết lý màu sắc (HSL Color Palette thay đổi động theo môn học).
   * Hiệu ứng chuyển động (GSAP Cinematic Scroll, Spotlight Card 3D hover).
   * Giao diện kính mờ (Glassmorphism) và hiệu ứng phát sáng (Neon glow).
5. **Đi sâu Cơ chế Kỹ thuật (Deep Dive)**:
   * Luồng xử lý & nạp bài đọc MDX động qua Server Actions và `next-mdx-remote`.
   * Luồng bảo mật trắc nghiệm 2 tầng (chênh lệch giữa Luyện tập và Thi xếp hạng).
   * Thuật toán vẽ SVG tự do tương đối trong `DrawingCanvas` lưu trữ LocalStorage.
   * Thuật toán xáo trộn Fisher-Yates shuffler.
6. **Bản đồ Thư mục Dự án**: Giải thích vai trò của từng thư mục (`app`, `components`, `content`, `data`, `legacy_data`, `scripts`).
7. **Hướng dẫn Phát triển & Mở rộng**: Cách tích hợp môn học mới, viết visualizer mới, chạy môi trường dev và build sản xuất.

---

## 📌 Phân chia 4 Giai đoạn Soạn thảo & Viết Tài liệu

Chúng ta sẽ tiến hành viết tài liệu chi tiết theo từng giai đoạn sau:

### Giai đoạn 1: Khung sườn & Định chuẩn Giao diện UI/UX (Mục 1, 2, 4)
* **Nội dung**: Viết phần Tổng quan, Stack Công nghệ và phân tích chi tiết triết lý UI/UX.
* **Chi tiết**: Giải thích cách tính toán giá trị CSS variable cho màu HSL, cách GSAP điều phối viewport scroll để kích hoạt các animation mượt mà.

### Giai đoạn 2: Danh mục Component Tương tác (Mục 3)
* **Nội dung**: Thống kê và mô tả chi tiết chức năng, cách hoạt động, các state nội bộ của toàn bộ visualizer thuật toán và explorer chính trị trong dự án.
* **Chi tiết**: Phân tích cách hoạt động của `MemoryVisualizer` (biểu diễn Stack và Heap), `QuickSortVisualizer` (luồng phân hoạch pivot).

### Giai đoạn 3: Phân tích Cơ chế Kỹ thuật Chuyên sâu (Mục 5)
* **Nội dung**: Viết hướng dẫn lập trình về 4 cơ chế cốt lõi của dự án:
  1. *Biên dịch MDX*: Parsing frontmatter và preprocessing các directive block (`:::summary`, `:::mnemonic`, v.v.).
  2. *Quiz Security*: Cách Server Action tách đáp án và chấm điểm trên Server để cập nhật Leaderboard.
  3. *Canvas Coordinates*: Cách tính toán tỷ lệ nét vẽ SVG tương đối để nét vẽ co giãn theo kích thước màn hình mà không bị lệch tọa độ.
  4. *Fisher-Yates Shuffle*: Thuật toán xáo trộn câu hỏi.

### Giai đoạn 4: Cấu trúc Thư mục & Hướng dẫn Mở rộng (Mục 6, 7)
* **Nội dung**: Cung cấp cấu trúc bản đồ file chi tiết và các bước step-by-step cho lập trình viên mới để thêm môn học hoặc visualizer.
* **Chi tiết**: Hướng dẫn cách tạo file mdx, viết frontmatter và đăng ký component mới vào registry.

---

## 🧪 Kế hoạch Kiểm tra & Nghiệm thu
* Đảm bảo tệp `README.md` được viết bằng tiếng Việt chuẩn mực học thuật, định dạng Markdown rõ ràng, hiển thị tốt trên cả VS Code và các trình xem Markdown khác.
* Xác minh tất cả các đường dẫn file liên kết cục bộ trong tài liệu (sử dụng định dạng `[basename](file:///absolute/path)`) hoạt động chính xác.
