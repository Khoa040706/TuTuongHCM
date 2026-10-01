# TÀI LIỆU QUY HOẠCH & NGÂN HÀNG ĐỀ THI TRẮC NGHIỆM CHƯƠNG 4
## MÔN: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU (ANALYSIS & DESIGN)
### CHAPTER 4: DISCOVERY PHASE I — BASELINE, ELICITATION & USE CASE FOUNDATIONS

---

## 1. TỔNG QUAN HỆ THỐNG ĐỀ THI

Hệ thống đề thi trắc nghiệm Chương 4 môn **Phân tích thiết kế và yêu cầu** (`analysis-design`, mã chương `ad-ch4`) được thiết kế đồng bộ theo chuẩn học thuật cao cấp của nền tảng **StudyMaster**.

- **Số lượng bộ đề**: 02 Bộ đề thi tiêu chuẩn (Part 1 & Part 2).
- **Quy mô**: 40 câu hỏi / bộ đề $\rightarrow$ Tổng cộng **80 câu hỏi trắc nghiệm biên soạn mới 100%, độc lập hoàn toàn (0% trùng lặp)**.
- **Mã định danh (ID)**:
  - Đề 1 (Part 1): `ad-c4-d1-001` $\rightarrow$ `ad-c4-d1-040`
  - Đề 2 (Part 2): `ad-c4-d2-001` $\rightarrow$ `ad-c4-d2-040`
- **File lưu trữ dữ liệu**:
  - `data/questions-ad-ch4-part1.js`
  - `data/questions-ad-ch4-part2.js`
- **Tích hợp hệ thống**: Đăng ký qua Curriculum Adapter tại `lib/curriculum.js`.

---

## 2. MA TRẬN PHÂN BỔ ĐỘ KHÓ & PHẠM VI KIẾN THỨC

Tuân thủ nghiêm ngặt yêu cầu thiết kế từ người dùng và quy chuẩn kiểm định:

### 2.1. Phân bổ Độ khó (Difficulty Balance)
| Mức độ | Số câu / Đề | Tỷ lệ (%) | Mục tiêu năng lực kiểm tra |
| :--- | :---: | :---: | :--- |
| **🟢 Dễ (Easy)** | 12 câu | **30.0%** | Nhận diện khái niệm Baseline, 5 hoạt động Discovery, 4 thành phần Use Case Diagram, 3 cấp độ mô tả (Brief, Casual, Fully-Dressed). |
| **🟡 Trung bình (Medium)** | 16 câu | **40.0%** | Phân biệt Behavioral vs Structural, hiểu 9 trường Fully-Dressed, phân tích quan hệ <<include>>/<<extend>>, ranh giới System Boundary. |
| **🔴 Khó (Hard)** | 12 câu | **30.0%** | Xử lý tình huống dự án thực tế (Case study), nhận diện và sửa lỗi cạm bẫy thiết kế (CRUD trap, UI pollution), phân gói Packages, kỹ nghệ hiện đại. |
| **Tổng cộng** | **40 câu** | **100%** | Đạt chuẩn đề thi chính quy đại học. |

### 2.2. Phân bổ Phạm vi Giáo trình (Scope Balance)
- **Inside (36 câu - 90%)**: Bám sát 100% nội dung 7 phần chính trong bài học `data/ad-ch4.js`:
  - **Mục I (Set Baseline)**: Định nghĩa Snapshot & Stable Reference, 3 yếu tố nền tảng (Scope, Vision, Initial Requirements), 4 lý do Set Baseline, Quản lý Scope Creep.
  - **Mục II (Discovery Phase)**: Bản chất chu trình khám phá, 5 mục tiêu cốt lõi, Chu trình 5 hoạt động (Elicit $\to$ Analyze $\to$ Specify $\to$ Validate $\to$ Manage), Vị trí Discovery trong Unified Process.
  - **Mục III (Behavioral Analysis & Use-Case Diagram)**: Behavioral (Hành vi - WHAT) vs Structural (Cấu trúc - HOW/Entities), 4 thành phần UML (Actor, Use Case, Association, System Boundary), Vai trò Use Case Diagram như Mục lục.
  - **Mục IV (Use-Case Descriptions)**: 3 cấp độ (Brief, Casual, Fully-Dressed), Khuôn mẫu 9 trường Fully-Dressed, Nguyên lý tách rời Quy tắc nghiệp vụ (Business Rules Decoupling).
  - **Mục V (Library System Exercise)**: Bài toán Thư viện (Patron, Librarian), Ca sử dụng Reserve Book và Borrow Book, Phân tích 4 sai lầm kinh điển.
  - **Mục VI (Advanced Use-Case Features)**: 3 quan hệ tái sử dụng (`<<include>>`, `<<extend>>`, Generalization), Điểm mở rộng định danh (Named Extension Points), Đóng gói ca sử dụng (Packaging Use Cases).
  - **Mục VII (Review & Traps)**: 7 cạm bẫy phòng thi, Checklist đánh giá năng lực Requirements Analysis & Design.
- **Outside (4 câu - 10%)**: Vận dụng kỹ nghệ phần mềm và kiến trúc dự án thực tế:
  - Quản trị Baseline trong CI/CD & Agile backlog grooming (SAFe / PI Planning).
  - Kỹ thuật khơi gợi yêu cầu (Elicitation) trong thời đại AI & Low-code/No-code.
  - Phân rã Use Case trong kiến trúc vi dịch vụ (Microservices) & Event-Driven Architecture.
  - Thiết lập ranh giới nghiệp vụ (Bounded Contexts) theo tư duy Domain-Driven Design (DDD).

---

## 3. TIÊU CHUẨN CHỐNG ĐOÁN BỪA (EQUAL OPTION LENGTH)

Hệ thống câu hỏi tuân thủ tuyệt đối quy tắc **Equal Option Length**:
$$\Delta L = L_{\max} - L_{\min} \le 15 \text{ ký tự}$$

- Trong từng câu hỏi, độ dài của 4 phương án $A, B, C, D$ xấp xỉ nhau, loại bỏ hoàn toàn hiện tượng "câu dài nhất luôn là đáp án đúng".
- Phương án đúng được phân bổ ngẫu nhiên đều ở các vị trí (Index 0, 1, 2, 3) tại lúc thí sinh luyện tập/thi thử thông qua engine xáo trộn động của `Quiz.js`.

---

## 4. ĐA DẠNG CÁC LOẠI HÌNH CÂU HỎI

1. **Trắc nghiệm một lựa chọn đúng (Single Correct)**: Kiểm tra chuẩn kiến thức lý thuyết trọng tâm.
2. **Trắc nghiệm chọn câu SAI / Ngoại lệ (Choose Wrong)**: Từ khóa **SAI / KHÔNG** được viết hoa nổi bật, rèn luyện tư duy phản biện.
3. **Tình huống nghiệp vụ thực tế (Case Study)**: Đặt thí sinh vào vai Lead BA / Software Architect xử lý bài toán ranh giới hệ thống, tích hợp cổng thanh toán, RFID, và tối ưu hóa Use Case.
4. **Ghép cặp logic (Matching)**: Kết nối các khái niệm Baseline, chu trình Discovery, thành phần Use Case Diagram và Checklist kiểm định.
5. **Điền khuyết / Chuỗi quy trình (Fill-in-the-blank)**: Kiểm tra khả năng nắm vững thứ tự 5 hoạt động Discovery và các kỹ thuật Elicitation chuẩn mực.

---

## 5. DANH SÁCH FILE LIÊN QUAN

- Mã nguồn đề thi Part 1: `data/questions-ad-ch4-part1.js`
- Mã nguồn đề thi Part 2: `data/questions-ad-ch4-part2.js`
- Tài liệu tổng hợp 80 câu hỏi và lời giải chi tiết: `tong-hop-2-de-thi-chuong-4-phan-tich-thiet-ke-yeu-cau.md`
- Tích hợp hệ thống: `lib/curriculum.js`
