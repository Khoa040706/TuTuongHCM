# TÀI LIỆU QUY HOẠCH & NGÂN HÀNG ĐỀ THI TRẮC NGHIỆM CHƯƠNG 2
## MÔN: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU (ANALYSIS & DESIGN)
### CHAPTER 2: SYSTEMS DEVELOPMENT LIFE CYCLE (SDLC) & BUSINESS MODELING

---

## 1. TỔNG QUAN HỆ THỐNG ĐỀ THI

Hệ thống đề thi trắc nghiệm Chương 2 môn **Phân tích thiết kế và yêu cầu** (`analysis-design`, mã chương `ad-ch2`) được thiết kế đồng bộ theo chuẩn học thuật cao cấp của nền tảng **StudyMaster**.

- **Số lượng bộ đề**: 02 Bộ đề thi tiêu chuẩn (Part 1 & Part 2).
- **Quy mô**: 40 câu hỏi / bộ đề $\rightarrow$ Tổng cộng **80 câu hỏi trắc nghiệm biên soạn mới 100%, độc lập hoàn toàn (0% trùng lặp)**.
- **Mã định danh (ID)**:
  - Đề 1 (Part 1): `ad-c2-d1-001` $\rightarrow$ `ad-c2-d1-040`
  - Đề 2 (Part 2): `ad-c2-d2-001` $\rightarrow$ `ad-c2-d2-040`
- **File lưu trữ dữ liệu**:
  - `data/questions-ad-ch2-part1.js`
  - `data/questions-ad-ch2-part2.js`
- **Tích hợp hệ thống**: Đăng ký qua Curriculum Adapter tại `lib/curriculum.js`.

---

## 2. MA TRẬN PHÂN BỔ ĐỘ KHÓ & PHẠM VI KIẾN THỨC

Tuân thủ nghiêm ngặt yêu cầu thiết kế từ người dùng và quy chuẩn kiểm định:

### 2.1. Phân bổ Độ khó (Difficulty Balance)
| Mức độ | Số câu / Đề | Tỷ lệ (%) | Mục tiêu năng lực kiểm tra |
| :--- | :---: | :---: | :--- |
| **🟢 Dễ (Easy)** | 12 câu | **30.0%** | Nhận diện khái niệm, định nghĩa SDLC umbrella, 5 pha SDLC, 4 khái niệm Business Modeling, ký hiệu Activity Diagram. |
| **🟡 Trung bình (Medium)** | 16 câu | **40.0%** | So sánh 6 chiều Predictive vs Adaptive, phân biệt Deliverables, phân tích vai trò Worker vs Actor, luồng Activity Diagram. |
| **🔴 Khó (Hard)** | 12 câu | **30.0%** | Xử lý tình huống dự án thực tế (Case study), phân tích rủi ro khả thi 3 chiều, ghép cặp đa chiều, tư duy phản biện. |
| **Tổng cộng** | **40 câu** | **100%** | Đạt chuẩn đề thi chính quy đại học. |

### 2.2. Phân bổ Phạm vi Giáo trình (Scope Balance)
- **Inside (36 câu - 90%)**: Bám sát 100% nội dung 5 phần chính trong bài học `data/ad-ch2.js`:
  - **Mục I**: Predictive vs Adaptive SDLC (SDLC umbrella, 6 chiều kích thước, 3 tiêu chí chọn Approach).
  - **Mục II**: SDLC 5 Phases (Planning - Why?, Analysis - What?, Design - How?, Implementation - Build & Deploy, Support - Keep it running).
  - **Mục III**: Business Modeling (Ranh giới Enterprise, lý do model business trước khi code, 4 khái niệm Actor, Worker, Use Case, Entity).
  - **Mục IV**: Initiation Phase (Cổng kiểm soát Go/No-Go, 4 hoạt động chính, Phân tích khả thi 3 chiều: Kinh tế ROI/NPV, Kỹ thuật, Tổ chức).
  - **Mục V**: Business Use Cases & Activity Diagrams (Ký hiệu gạch chéo `/`, Activity Diagram: Action, Decision, Merge, Fork, Join, Làn bơi Swimlanes).
- **Outside (4 câu - 10%)**: Vận dụng kỹ nghệ phần mềm và quản trị dự án mở rộng trong thực tế:
  - Bẫy "Agile nửa vời" và xử lý thay đổi phạm vi Scope Creep.
  - Phân tích hiệu quả tài chính ROI và thời gian hoàn vốn trong đề án phần mềm thực tế.
  - 4 Chiến lược chuyển đổi hệ thống (Direct/Cutover, Parallel, Phased, Pilot).
  - Quản trị thay đổi (Change Management) và giải tỏa rào cản tâm lý khi chuyển đổi số.

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
| **Chọn câu đúng** (`single-correct`) | `ad-c2-d1-001`, `ad-c2-d2-005` | Xác định mệnh đề chuẩn xác nhất theo lý thuyết giáo trình. |
| **Chọn câu sai / ngoại lệ** (`choose-wrong`) | `ad-c2-d1-004`, `ad-c2-d2-010` | Nhận diện phát biểu không chính xác; từ khóa phủ định được in hoa (**KHÔNG**, **SAI**, **NGOẠI TRỪ**). |
| **Tình huống thực tế** (`case-study`) | `ad-c2-d1-006`, `ad-c2-d2-035` | Đưa học viên vào ngữ cảnh dự án cụ thể để chọn cách ứng xử chuẩn của chuyên viên BA. |
| **Ghép cặp đa chiều** (`matching`) | `ad-c2-d1-007`, `ad-c2-d2-007` | Nối tương ứng giữa các trường phái/tiêu chí và đặc trưng quản trị dự án. |
| **Điền khuyết / Trình tự** (`fill-blank`) | `ad-c2-d1-014`, `ad-c2-d2-014` | Điền các thuật ngữ hoặc chuỗi 5 câu hỏi cốt lõi theo đúng thứ tự logic quy trình SDLC. |

---

## 5. HƯỚNG DẪN TRUY CẬP VÀ SỬ DỤNG

1. **Trên Giao diện Người dùng (UI)**:
   - Vào môn **Phân tích thiết kế và yêu cầu** $\rightarrow$ chọn **Chương 2: SDLC & Business Modeling**.
   - Nhấp vào nút **Trắc nghiệm** (Quiz).
   - Hệ thống hiển thị hai thẻ bộ đề:
     - 📄 **Đề 1**: Bộ đề số 1 (40 câu).
     - 📄 **Đề 2**: Bộ đề số 2 (40 câu).
     - 📚 **Tất cả câu hỏi**: Xem toàn bộ 80 câu hỏi để ôn tập có giải thích chi tiết.
2. **Trong Phân hệ Quản trị (Admin Dashboard)**:
   - Tab **Ngân hàng câu hỏi**: Xem danh sách câu hỏi, kiểm định độ lệch chiều dài ($\Delta L \le 15$), bộ lọc câu hỏi và tỷ lệ đạt chuẩn 100%.
