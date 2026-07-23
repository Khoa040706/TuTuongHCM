<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Quy tắc phát triển dự án (Project Rules)

- **KHÔNG ĐƯỢC CHỈNH SỬA NỘI DUNG TÀI LIỆU/GIÁO TRÌNH CHÍNH THỨC**: Tuyệt đối không thay đổi hay chỉnh sửa nội dung các bài đọc học thuật, giáo trình của các môn học chính thức (như Tư tưởng Hồ Chí Minh, Lịch sử Đảng Cộng sản Việt Nam) vì đây là các tài liệu đã được nghiên cứu và kiểm duyệt kỹ càng.
- **ĐƯỢC PHÉP**: Điều chỉnh cách thiết kế giao diện, trải nghiệm người dùng (UI/UX), cải tiến công cụ hỗ trợ học tập (Canvas, Quiz, vẽ highlight) để giúp học sinh tiếp thu bài học dễ dàng hơn.

# Quy tắc biên soạn Bài kiểm tra trắc nghiệm (Quiz / Exam Rules)

- **Quy tắc Đặt tên & Định danh (Dynamic Naming Convention)**:
  * Tên file và ID câu hỏi phải đặt theo mã định danh linh hoạt của từng Môn học và Chương học:
    + Cấu trúc ID: `{MãMôn}-{MãChương}-d{SốĐề}-{STT}` (Ví dụ: Lịch sử Đảng: `lsd-c2-d1-001`; Tư tưởng HCM: `hcm-c4-d1-001`).
    + Cấu trúc File: `questions-{mã-môn}-{mã-chương}-part{N}.js` hoặc `questions-{mã-môn}-{mã-chương}-trick{N}.js`.

- **Quy tắc Cấu trúc Bộ đề Thi Cố định (Fixed Exam Sets)**:
  * Mỗi bộ đề thi chính thức chứa đúng 40 câu hỏi cố định (36 câu Inside chuẩn giáo trình + 4 câu Outside vận dụng thực tiễn).
  * Số lượng câu hỏi của từng phần trong bộ đề phải tỷ lệ thuận với độ dài dung lượng kiến thức của phần đó trong giáo trình.
  * Tỷ lệ độ khó chuẩn trong 36 câu Inside: 20% Dễ (7 câu), 50% Trung bình (18 câu), 30% Khó (11 câu) + 4 câu Outside.

- **Quy tắc Bộ đề Bẫy (Trick Exam Sets)**:
  * Mỗi bộ đề bẫy chứa 50 câu bẫy tư duy Vận dụng cao.
  * 100% câu hỏi bẫy bắt buộc phải có thuộc tính `trickDetails` gồm: `whyTrapped` (nguyên nhân hay sai), `trickWord` (từ khóa bẫy nhiễu), `citation` (trích dẫn giáo trình), `tip` (mẹo nhớ nhanh).

- **Cơ chế Chống đoán bừa tuyệt đối (Equal Option Length Balance)**:
  * Trong CÙNG MỘT CÂU HỎI, độ lệch chiều dài giữa phương án dài nhất và ngắn nhất MUST $\le 15$ ký tự ($L_{\max} - L_{\min} \le 15$).
  * Giữa các CÂU HỎI KHÁC NHAU trong cùng một đề thi, độ dài đáp án hoàn toàn linh hoạt (có câu đáp án ngắn, có câu đáp án rất dài tùy theo bản chất kiến thức), miễn là trong câu đó 4 đáp án A, B, C, D đồng đều chiều dài với nhau.
  * Các phương án nhiễu phải được viết công phu, đúng ngữ pháp và tương đồng về độ dài lẫn văn phong với đáp án đúng.

- **Quy trình Kiểm thử tự động (Automated Verification Protocol)**:
  * Phải chạy script tự động (Node.js) kiểm tra 100% ma trận và độ lệch chiều dài trong câu ($\le 15$ chars) trước khi tích hợp.
  * Phải chạy lệnh `npm run build` xác nhận biên dịch thành công 100% không phát sinh lỗi.

