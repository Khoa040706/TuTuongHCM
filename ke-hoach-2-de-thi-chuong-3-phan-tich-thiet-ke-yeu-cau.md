# KẾ HOẠCH TRIỂN KHAI & BÁO CÁO NGHIỆM THU: 2 BỘ ĐỀ THI TRẮC NGHIỆM CHƯƠNG III
## MÔN: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU (`analysis-design` / `ad-ch3`)
### CHỦ ĐỀ: INITIATION PHASE — FROM BUSINESS EVENTS TO A SYSTEM USE CASE MODEL

---

## 1. MỤC TIÊU VÀ NGUYÊN TẮC THIẾT KẾ (HOÀN THÀNH 100%)

- **Quy mô**: 02 Bộ đề thi độc lập (Đề 1 & Đề 2), mỗi đề đúng **40 câu hỏi** $\rightarrow$ Tổng cộng **80 câu hỏi trắc nghiệm biên soạn mới 100%**.
- **Tính độc lập tuyệt đối**: 2 đề thi có câu hỏi, ngữ cảnh và phương án trả lời **hoàn toàn khác biệt, 0% trùng lặp** (đã kiểm định bằng script tự động).
- **Mã định danh chuẩn hóa**:
  - Đề 1 (Part 1): `ad-c3-d1-001` $\rightarrow$ `ad-c3-d1-040` (lưu tại `data/questions-ad-ch3-part1.js`)
  - Đề 2 (Part 2): `ad-c3-d2-001` $\rightarrow$ `ad-c3-d2-040` (lưu tại `data/questions-ad-ch3-part2.js`)
- **Tích hợp hệ thống**: Cập nhật Curriculum Adapter tại `lib/curriculum.js` cho môn `analysis-design` (chapter `ad-ch3`).

---

## 2. MA TRẬN PHÂN BỔ ĐỘ KHÓ & PHẠM VI (KẾT QUẢ NGHIỆM THU)

### 2.1. Phân bổ Độ khó theo yêu cầu người dùng
| Mức độ | Số câu / Đề | Tỷ lệ (%) | Trạng thái kiểm định |
| :--- | :---: | :---: | :--- |
| **🟢 Dễ (Nhận biết)** | **12 câu** | **30.0%** | ✅ Đạt chuẩn 12 câu / đề |
| **🟡 Trung bình (Thông hiểu)** | **16 câu** | **40.0%** | ✅ Đạt chuẩn 16 câu / đề |
| **🔴 Khó (Vận dụng cao)** | **12 câu** | **30.0%** | ✅ Đạt chuẩn 12 câu / đề |
| **Tổng cộng** | **40 câu** | **100%** | ✅ **Cân bằng hoàn hảo trên cả 2 bộ đề thi** |

### 2.2. Phân bổ Nguồn gốc (Scope Balance)
- **Inside (36 câu / đề - 90%)**: Bám sát 100% nội dung 7 phần chính trong bài học `data/ad-ch3.js`:
  - **Mục I (Initiation Phase)**: Vị trí trong Unified Process, Milestone LCO, 6 hoạt động chính của Initiation.
  - **Mục II (System Use Cases)**: Định nghĩa của Ivar Jacobson, Ký hiệu UML, Case study Course Registration, Brief vs Fully Dressed (10 trường).
  - **Mục III (Event Decomposition)**: Khái niệm Business Event, 3 loại Events (External, Temporal, State), Cấu trúc Event Table (6 cột).
  - **Mục IV (Identify Actors)**: Định nghĩa Actor, 4 loại Actor (Primary, Supporting, Offstage, System/Internal), Nguyên tắc nhận diện theo vai trò.
  - **Mục V (Identify System Use Cases)**: Quy tắc vàng 1 Event : 1 Use Case, Quy tắc đặt tên `Verb + Noun Phrase`, System Boundary.
  - **Mục VI (Organizing Use Cases)**: Quan hệ `<<include>>` (bắt buộc, tái sử dụng), `<<extend>>` (mở rộng có điều kiện tại Extension Point), Generalization (kế thừa `is-a`).
  - **Mục VII (Common Mistakes & Audit Checklist)**: 5 Sai lầm phổ biến (Functional Decomposition, nhầm hướng mũi tên, đặt tên sai), Quy trình tư duy BA 11 chặng.
- **Outside (4 câu / đề - 10%)**: Vận dụng kỹ nghệ phần mềm và thực tế dự án:
  - Chuyển đổi Use Case sang User Stories trong mô hình Agile/Scrum.
  - Xác định ranh giới hệ thống khi tích hợp API Gateway / Microservices bên thứ ba.
  - Xử lý các yêu cầu phi chức năng (Non-Functional Requirements) trong đặc tả Use Case.
  - Tránh bẫy chia nhỏ Use Case thành CRUD (Create/Read/Update/Delete) trong thực tế doanh nghiệp.

---

## 3. CƠ CHẾ CHỐNG ĐOÁN BỪA (EQUAL OPTION LENGTH)

Áp dụng thuật toán cân bằng độ dài nghiêm ngặt:
$$\Delta L = L_{\max} - L_{\min} \le 15 \text{ ký tự}$$
- Toàn bộ 4 phương án $A, B, C, D$ trong cùng 1 câu hỏi có độ dài tương đương nhau.
- Loại bỏ hoàn toàn bẫy thị giác "câu dài nhất là đáp án đúng".
- Đã chạy script kiểm thử tự động xác nhận 80/80 câu đạt chuẩn trước khi build.

---

## 4. ĐA DẠNG HÓA HÌNH THỨC CÂU HỎI

1. **Chọn câu đúng (`single-correct`)**: Đo lường lý thuyết chuẩn mực (quy tắc đặt tên, định nghĩa 3 loại sự kiện, ngữ nghĩa quan hệ UML).
2. **Chọn câu sai / ngoại lệ (`choose-wrong`)**: Nhận diện khẳng định sai; in hoa từ khóa phủ định (**KHÔNG**, **SAI**, **NGOẠI TRỪ**).
3. **Tình huống thực tế (`case-study`)**: Tình huống dự án cụ thể (nhận diện Actor trong hệ thống đăng ký môn học, xác định quan hệ `<<include>>` hay `<<extend>>` khi thanh toán thẻ/voucher).
4. **Ghép cặp đa chiều (`matching`)**: Ghép loại Business Event với kịch bản kích hoạt, hoặc ghép loại quan hệ Use Case với hướng mũi tên và ngữ nghĩa.
5. **Điền khuyết / Trình tự logic (`fill-blank`)**: Điền cấu trúc bảng sự kiện Event Table hoặc thứ tự các bước trong quy trình Event Decomposition.

---

## 5. DANH SÁCH FILE LIÊN QUAN

- Mã nguồn đề thi Part 1: [data/questions-ad-ch3-part1.js](file:///d:/TT%20HCM/data/questions-ad-ch3-part1.js)
- Mã nguồn đề thi Part 2: [data/questions-ad-ch3-part2.js](file:///d:/TT%20HCM/data/questions-ad-ch3-part2.js)
- Tích hợp hệ thống: [lib/curriculum.js](file:///d:/TT%20HCM/lib/curriculum.js)
- Bản in tài liệu 80 câu có đáp án: [tong-hop-2-de-thi-chuong-3-phan-tich-thiet-ke-yeu-cau.md](file:///d:/TT%20HCM/tong-hop-2-de-thi-chuong-3-phan-tich-thiet-ke-yeu-cau.md)
- Báo cáo quy hoạch ngân hàng: [docs/analysis-design/ch3-ngan-hang-de-thi-40-cau.md](file:///d:/TT%20HCM/docs/analysis-design/ch3-ngan-hang-de-thi-40-cau.md)
