# StudyMaster ♋ - Học viện Cự Giải

Hệ thống hỗ trợ học tập trực quan và làm bài kiểm tra trắc nghiệm các môn Lý luận chính trị (**Tư tưởng Hồ Chí Minh** & **Lịch sử Đảng Cộng sản Việt Nam**). Dự án được thiết kế với giao diện cao cấp, chế độ tối ưu hóa trải nghiệm học tập và tích hợp nhiều tính năng thông minh.

---

## ✨ Các tính năng nổi bật

* **Giao diện Cao cấp & Trải nghiệm Hài hòa (Rich Aesthetics)**: Sử dụng hệ màu thiết kế HSL tùy biến, hỗ trợ chế độ Sáng/Tối (Light/Dark mode) mượt mà, giúp học viên tập trung học tập trong thời gian dài mà không bị mỏi mắt.
* **Học tập Tương tác trực quan (Interactive Reading Panel)**:
  * Trình bày giáo trình khoa học, phân loại các khối kiến thức trọng tâm bằng Hộp Tóm tắt (Summary), Hộp Mẹo nhớ (Mnemonic) và Trích dẫn tham khảo (Reference).
  * **Khung vẽ ghi chú (Drawing Canvas Overlay)**: Vẽ tay hoặc ghi chú trực tiếp đè lên giáo trình bằng công cụ Bút vẽ, Tẩy và chọn màu sắc tùy biến. Tự động lưu nét vẽ và tự co giãn nét vẽ chuẩn tỷ lệ màn hình (Responsive Auto-scale).
* **Mô-đun Thi trắc nghiệm Toàn diện (Advanced Quiz Module)**:
  * Luyện tập theo từng Chương hoặc làm đề tổng hợp.
  * Hai chế độ chấm điểm linh hoạt: **Nhận đáp án ngay** (kèm lời giải thích chi tiết và tài liệu tham khảo tương ứng) hoặc **Nộp bài cuối giờ**.
  * Tự động khôi phục bài thi đang làm dở (State Recovery) khi gặp sự cố mạng hoặc vô tình tải lại trang.
* **Bảng xếp hạng Trực tuyến (Online Leaderboard)**: Kết nối cơ sở dữ liệu Firestore để xếp hạng kết quả thi trắc nghiệm dựa trên điểm số và thời gian làm bài thực tế của học viên.
* **Tự tạo môn học (Custom Subjects)**: Cho phép người dùng tự khởi tạo và nhập giáo trình, thiết lập ghi chú cho các môn học cá nhân khác.

---

## 🛠️ Công nghệ sử dụng

* **Frontend**: React 19, Next.js 16 (App Router), TailwindCSS v4, Lucide Icons.
* **Backend & Database**: Google Firebase Cloud Firestore (Lưu trữ Bảng xếp hạng kết quả thi).
* **Quản lý trạng thái (State Management)**: React Hooks (State, Ref, Effect), Local Storage cho bộ nhớ đệm khách hàng.

---

## 📂 Tổ chức mã nguồn

Mã nguồn được phân tách cấu trúc rõ ràng:
* **[/app](file:///c:/Users/Admin/Desktop/TT%20HCM/app)**: Điều phối trạng thái trang và cấu hình định dạng chung (giao diện, kiểu chữ, CSS toàn cục).
* **[/components](file:///c:/Users/Admin/Desktop/TT%20HCM/components)**: Chứa các cấu phần giao diện động (Thanh bên mục lục, Khung vẽ ghi chú, Bảng điều khiển thi trắc nghiệm, v.v.).
* **[/data](file:///c:/Users/Admin/Desktop/TT%20HCM/data)**: Kho dữ liệu giáo trình bài học chi tiết và ngân hàng câu hỏi trắc nghiệm đã được xác thực nội dung.
* **[/lib](file:///c:/Users/Admin/Desktop/TT%20HCM/lib)**: Khởi tạo kết nối với dịch vụ đám mây Firebase.
* **[/legacy_vanilla](file:///c:/Users/Admin/Desktop/TT%20HCM/legacy_vanilla)**: Thư mục lưu trữ mã nguồn phiên bản Progressive Web App (PWA) thuần cũ dùng để chạy độc lập hoặc tham khảo.

---

## 📖 Hướng dẫn chi tiết dành cho Nhà phát triển

Để giúp bạn nhanh chóng cài đặt và hiểu rõ cấu trúc của dự án, vui lòng đọc các tài liệu sau:

1. **[Hướng dẫn cài đặt và thiết lập nhanh (setup.md)](file:///c:/Users/Admin/Desktop/TT%20HCM/setup.md)**: Hướng dẫn cài đặt gói thư viện, cấu hình Firebase và chạy ứng dụng ở chế độ phát triển/sản xuất.
2. **[Tài liệu Kiến trúc Hệ thống (system_architecture.md)](file:///c:/Users/Admin/Desktop/TT%20HCM/system_architecture.md)**: Phân tích luồng hoạt động của ứng dụng, sơ đồ trạng thái, cấu trúc dữ liệu Firestore, và giải thích chi tiết thuật toán co giãn Canvas vẽ ghi chú.

---

## 🔑 Đăng nhập nhanh

Hệ thống có tài khoản quản trị viên cài sẵn để kiểm tra nhanh:
* **Tài khoản**: `admin`
* **Mật khẩu**: `admin`
*(Bạn cũng có thể tự đăng ký một tài khoản mới bất kỳ trực tiếp từ màn hình đăng nhập).*
