# TÀI LIỆU QUY HOẠCH & NGÂN HÀNG ĐỀ THI TRẮC NGHIỆM CHƯƠNG 3
## MÔN: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU (ANALYSIS & DESIGN)
### CHAPTER 3: INITIATION PHASE — FROM BUSINESS EVENTS TO A SYSTEM USE CASE MODEL

---

## 1. TỔNG QUAN HỆ THỐNG ĐỀ THI

Hệ thống đề thi trắc nghiệm Chương 3 môn **Phân tích thiết kế và yêu cầu** (`analysis-design`, mã chương `ad-ch3`) được thiết kế đồng bộ theo chuẩn học thuật cao cấp của nền tảng **StudyMaster**.

- **Số lượng bộ đề**: 02 Bộ đề thi tiêu chuẩn (Part 1 & Part 2).
- **Quy mô**: 40 câu hỏi / bộ đề $\rightarrow$ Tổng cộng **80 câu hỏi trắc nghiệm biên soạn mới 100%, độc lập hoàn toàn (0% trùng lặp)**.
- **Mã định danh (ID)**:
  - Đề 1 (Part 1): `ad-c3-d1-001` $\rightarrow$ `ad-c3-d1-040`
  - Đề 2 (Part 2): `ad-c3-d2-001` $\rightarrow$ `ad-c3-d2-040`
- **File lưu trữ dữ liệu**:
  - `data/questions-ad-ch3-part1.js`
  - `data/questions-ad-ch3-part2.js`
- **Tích hợp hệ thống**: Đăng ký qua Curriculum Adapter tại `lib/curriculum.js`.

---

## 2. MA TRẬN PHÂN BỔ ĐỘ KHÓ & PHẠM VI KIẾN THỨC

Tuân thủ nghiêm ngặt yêu cầu thiết kế từ người dùng và quy chuẩn kiểm định:

### 2.1. Phân bổ Độ khó (Difficulty Balance)
| Mức độ | Số câu / Đề | Tỷ lệ (%) | Mục tiêu năng lực kiểm tra |
| :--- | :---: | :---: | :--- |
| **🟢 Dễ (Easy)** | 12 câu | **30.0%** | Nhận diện khái niệm, định nghĩa Use Case, Actor, LCO milestone, 3 loại sự kiện, 4 thành phần sơ đồ Use Case. |
| **🟡 Trung bình (Medium)** | 16 câu | **40.0%** | So sánh sâu <<include>> vs <<extend>>, phân tích bảng Event Table, quy tắc đặt tên EBP, cấu trúc Use Case Description. |
| **🔴 Khó (Hard)** | 12 câu | **30.0%** | Xử lý tình huống dự án thực tế (Case study), nhận diện và sửa lỗi bẫy Functional Decomposition, CRUD trap, kiến trúc ngoài. |
| **Tổng cộng** | **40 câu** | **100%** | Đạt chuẩn đề thi chính quy đại học. |

### 2.2. Phân bổ Phạm vi Giáo trình (Scope Balance)
- **Inside (36 câu - 90%)**: Bám sát 100% nội dung 7 phần chính trong bài học `data/ad-ch3.js`:
  - **Mục 1**: Initiation Phase & Khái niệm cốt lõi Use Case (Cột mốc LCO, Observable result of value, 4 thành phần UML).
  - **Mục 2**: System Use Cases & Mức độ trừu tượng (Black-box view, EBP standard, User Goal level).
  - **Mục 3**: Event Decomposition Technique (External Event, Temporal Event, State Event, Event Table).
  - **Mục 4**: Nhận diện Actors (Primary Actor, Supporting/Secondary Actor, Offstage/Stakeholder, System Boundary).
  - **Mục 5**: Nhận diện System Use Cases (Quy tắc Verb - Noun, EBP test, ranh giới ca sử dụng).
  - **Mục 6**: Tổ chức mô hình Use Case (<<include>>, <<extend>>, Generalization, Extension Point).
  - **Mục 7**: Sai lầm kinh điển & Cognitive Pipeline (Functional Decomposition, CRUD trap, Login use case, Data flow trap).
- **Outside (4 câu - 10%)**: Vận dụng kỹ nghệ phần mềm và kiến trúc dự án hiện đại:
  - Chuyển dịch Use Case sang User Stories trong Agile/Scrum.
  - Phân định ranh giới Actor/API Gateway trong kiến trúc Microservices.
  - Quản lý yêu cầu phi chức năng (NFRs / Non-functional) trong đặc tả Use Case.
  - Giải pháp thực tế triệt tiêu bẫy Functional Decomposition và CRUD trap.

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
3. **Tình huống nghiệp vụ thực tế (Case Study)**: Đặt thí sinh vào vai Lead BA / Software Architect xử lý bài toán ranh giới hệ thống, tích hợp cổng thanh toán, GPS và tối ưu hóa Use Case.
4. **Ghép cặp logic (Matching)**: Kết nối các khái niệm sự kiện, ký hiệu quan hệ UML với định nghĩa tương ứng.
5. **Điền khuyết / Chuỗi quy trình (Fill-in-the-blank)**: Kiểm tra khả năng nắm vững thứ tự các bước trong quy trình phân tích và tài liệu hóa Use Case.

---

## 5. DANH SÁCH FILE LIÊN QUAN

- Mã nguồn đề thi Part 1: `data/questions-ad-ch3-part1.js`
- Mã nguồn đề thi Part 2: `data/questions-ad-ch3-part2.js`
- Tài liệu tổng hợp 80 câu hỏi và lời giải chi tiết: `tong-hop-2-de-thi-chuong-3-phan-tich-thiet-ke-yeu-cau.md`
- Tích hợp hệ thống: `lib/curriculum.js`
