# TÀI LIỆU QUY HOẠCH & NGÂN HÀNG ĐỀ THI TRẮC NGHIỆM CHƯƠNG 1
## MÔN: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU (ANALYSIS & DESIGN)
### CHAPTER 1: INTRODUCTION — REQUIREMENTS ANALYSIS AND DESIGN

---

## 1. TỔNG QUAN HỆ THỐNG ĐỀ THI

Hệ thống đề thi trắc nghiệm Chương 1 môn **Phân tích thiết kế và yêu cầu** (`analysis-design`, mã chương `ad-ch1`) được thiết kế đồng bộ theo chuẩn học thuật cao cấp của nền tảng **StudyMaster**.

- **Số lượng bộ đề**: 02 Bộ đề thi tiêu chuẩn (Part 1 & Part 2).
- **Quy mô**: 40 câu hỏi / bộ đề $\rightarrow$ Tổng cộng **80 câu hỏi trắc nghiệm biên soạn mới 100%**.
- **Mã định danh (ID)**:
  - Đề 1 (Part 1): `ad-c1-d1-001` $\rightarrow$ `ad-c1-d1-040`
  - Đề 2 (Part 2): `ad-c1-d2-001` $\rightarrow$ `ad-c1-d2-040`
- **File lưu trữ dữ liệu**:
  - `data/questions-ad-ch1-part1.js`
  - `data/questions-ad-ch1-part2.js`
- **Tích hợp hệ thống**: Đăng ký qua Curriculum Adapter tại `lib/curriculum.js`.

---

## 2. MA TRẬN PHÂN BỔ ĐỘ KHÓ & PHẠM VI KIẾN THỨC

Tuân thủ nghiêm ngặt yêu cầu thiết kế từ người dùng và quy chuẩn kiểm định:

### 2.1. Phân bổ Độ khó (Difficulty Balance)
| Mức độ | Số câu / Đề | Tỷ lệ (%) | Mục tiêu năng lực kiểm tra |
| :--- | :---: | :---: | :--- |
| **Dễ (Easy)** | 12 câu | **30.0%** | Nhận diện khái niệm, định nghĩa, từ viết tắt, thành phần cốt lõi của HTTT & BA. |
| **Trung bình (Medium)** | 16 câu | **40.0%** | Phân biệt vai trò, so sánh kỹ thuật khơi mở yêu cầu, phân tích biểu đồ UML, các giai đoạn SDLC & UP. |
| **Khó (Hard)** | 12 câu | **30.0%** | Xử lý tình huống dự án thực tế, ghép cặp đa chiều, giải quyết mâu thuẫn yêu cầu, tư duy phản biện. |
| **Tổng cộng** | **40 câu** | **100%** | Đạt chuẩn đề thi chính quy đại học. |

### 2.2. Phân bổ Phạm vi Giáo trình (Scope Balance)
- **Inside (36 câu - 90%)**: Bám sát 100% nội dung 5 phần chính trong bài học `data/ad-ch1.js`:
  - **Mục I**: Tổng quan Hệ thống thông tin (IPO, 5 thành phần cốt lõi, Data vs. Info, TPS - MIS - DSS - ESS).
  - **Mục II**: Vai trò của Business Analyst (Cầu nối Business - IT, 4 nhóm kỹ năng cốt lõi, SDLC involvement).
  - **Mục III**: Khái niệm cốt lõi (Methodology, Model, UML 6 biểu đồ, CASE Tool, 5 Kỹ thuật khơi mở yêu cầu).
  - **Mục IV**: Các giai đoạn xây dựng HTTT (SDLC 5 pha, Unified Process 4 phases & 9 workflows, Waterfall vs. Iterative).
  - **Mục V**: Tổng kết học thuật & Thuật ngữ quốc tế.
- **Outside (4 câu - 10%)**: Vận dụng kỹ nghệ phần mềm mở rộng trong thực tế doanh nghiệp:
  - MVP (Minimum Viable Product) & Timeboxing.
  - Xử lý thay đổi phạm vi dự án (Change Request - CR / Scope creep).
  - Lựa chọn kỹ thuật khơi mở khi các bên liên quan phân tán địa lý.
  - Phân tích rủi ro kiến trúc trong các pha UP Inception & Elaboration.

---

## 3. TIÊU CHUẨN CHỐNG ĐOÁN BỪA (EQUAL OPTION LENGTH)

Hệ thống câu hỏi tuân thủ tuyệt đối quy tắc **Equal Option Length**:
$$\Delta L = L_{\max} - L_{\min} \le 15 \text{ ký tự}$$

- Trong từng câu hỏi, độ dài của 4 phương án $A, B, C, D$ xấp xỉ nhau, loại bỏ hoàn toàn hiện tượng "câu dài nhất luôn là đáp án đúng".
- Phương án đúng được phân bổ ngẫu nhiên đều ở các vị trí (Index 0, 1, 2, 3) tại lúc thi sinh luyện tập/thi thử thông qua engine xáo trộn động của `Quiz.js`.

---

## 4. ĐA DẠNG CÁC LOẠI HÌNH CÂU HỎI

| Loại hình câu hỏi | Mã định danh mẫu | Mô tả đặc trưng |
| :--- | :--- | :--- |
| **Chọn câu đúng** (`single-correct`) | `ad-c1-d1-001`, `ad-c1-d2-005` | Xác định mệnh đề chuẩn xác nhất theo lý thuyết giáo trình. |
| **Chọn câu sai / ngoại lệ** (`choose-wrong`) | `ad-c1-d1-013`, `ad-c1-d2-004` | Nhận diện phát biểu không chính xác; từ khóa phủ định được in hoa (**KHÔNG**, **SAI**, **NGOẠI TRỪ**). |
| **Tình huống thực tế** (`case-study`) | `ad-c1-d1-008`, `ad-c1-d1-036` | Đưa học viên vào ngữ cảnh dự án cụ thể để chọn cách ứng xử chuẩn của chuyên viên BA. |
| **Ghép cặp đa chiều** (`matching`) | `ad-c1-d1-009`, `ad-c1-d2-009` | Nối tương ứng giữa hệ thống thông tin (TPS/MIS/ESS) và cấp bậc quản trị hoặc vai trò người dùng. |
| **Điền khuyết / Trình tự** (`fill-blank`) | `ad-c1-d1-018`, `ad-c1-d2-038` | Điền các thuật ngữ cốt lõi theo đúng thứ tự logic quy trình kỹ nghệ yêu cầu. |

---

## 5. HƯỚNG DẪN TRUY CẬP VÀ SỬ DỤNG

1. **Trên Giao diện Người dùng (UI)**:
   - Vào môn **Phân tích thiết kế và yêu cầu** $\rightarrow$ chọn **Chương 1**.
   - Nhấp vào nút **Trắc nghiệm** (Quiz).
   - Hệ thống hiển thị hai thẻ bộ đề:
     - 📄 **Đề 1**: Bộ đề số 1 (40 câu).
     - 📄 **Đề 2**: Bộ đề số 2 (40 câu).
     - 📚 **Tất cả câu hỏi**: Xem toàn bộ 80 câu hỏi để ôn tập có giải thích chi tiết.
2. **Trong Phân hệ Quản trị (Admin Dashboard)**:
   - Tab **Ngân hàng câu hỏi**: Xem danh sách câu hỏi, kiểm định độ lệch chiều dài ($\Delta L \le 15$), bộ lọc câu hỏi bẫy/tình huống và tỷ lệ đạt chuẩn 100%.
