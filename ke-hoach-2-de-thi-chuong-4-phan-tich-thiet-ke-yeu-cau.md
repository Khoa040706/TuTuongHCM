# KẾ HOẠCH TRIỂN KHAI & BÁO CÁO NGHIỆM THU: 2 BỘ ĐỀ THI TRẮC NGHIỆM CHƯƠNG IV
## MÔN: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU (`analysis-design` / `ad-ch4`)
### CHỦ ĐỀ: DISCOVERY PHASE I — BASELINE, ELICITATION & USE CASE FOUNDATIONS

---

## 1. MỤC TIÊU VÀ NGUYÊN TẮC THIẾT KẾ (HOÀN THÀNH 100%)

- **Quy mô dự án**: Xây dựng **02 Bộ đề thi tiêu chuẩn độc lập** (Đề 1 & Đề 2), mỗi đề đúng **40 câu hỏi** $\rightarrow$ Tổng cộng **80 câu hỏi trắc nghiệm biên soạn mới 100%**.
- **Tính độc lập & Duy nhất**: Đảm bảo 2 đề thi có câu hỏi, ngữ cảnh và phương án trả lời **hoàn toàn khác biệt, 0% trùng lặp** (đã kiểm định bằng script tự động).
- **Mã định danh chuẩn hóa (Dynamic Naming Convention)**:
  - Đề 1 (Part 1): `ad-c4-d1-001` $\rightarrow$ `ad-c4-d1-040` (lưu tại `data/questions-ad-ch4-part1.js`)
  - Đề 2 (Part 2): `ad-c4-d2-001` $\rightarrow$ `ad-c4-d2-040` (lưu tại `data/questions-ad-ch4-part2.js`)
- **Tích hợp hệ thống**: Cập nhật Curriculum Adapter tại `lib/curriculum.js` cho môn `analysis-design` (chapter `ad-ch4`).

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
- **Inside (36 câu / đề - 90%)**: Bám sát 100% nội dung 7 phần chính trong bài học `data/ad-ch4.js`:
  - **Mục I (Set Baseline)**: Định nghĩa Snapshot & Stable Reference, 3 yếu tố nền tảng (Scope, Vision, Initial Requirements), 4 lý do Set Baseline, Quản lý Scope Creep.
  - **Mục II (Discovery Phase)**: Bản chất chu trình khám phá, 5 mục tiêu cốt lõi, Chu trình 5 hoạt động (Elicit $\to$ Analyze $\to$ Specify $\to$ Validate $\to$ Manage), Vị trí Discovery trong Unified Process.
  - **Mục III (Behavioral Analysis & Use-Case Diagram)**: Behavioral (Hành vi - WHAT) vs Structural (Cấu trúc - HOW/Entities), 4 thành phần UML (Actor, Use Case, Association, System Boundary), Vai trò Use Case Diagram như Mục lục.
  - **Mục IV (Use-Case Descriptions)**: 3 cấp độ (Brief, Casual, Fully-Dressed), Khuôn mẫu 9 trường Fully-Dressed, Nguyên lý tách rời Quy tắc nghiệp vụ (Business Rules Decoupling).
  - **Mục V (Library System Exercise)**: Bài toán Thư viện (Patron, Librarian), Ca sử dụng Reserve Book và Borrow Book, Phân tích 4 sai lầm kinh điển.
  - **Mục VI (Advanced Use-Case Features)**: 3 quan hệ tái sử dụng (`<<include>>`, `<<extend>>`, Generalization), Điểm mở rộng định danh (Named Extension Points), Đóng gói ca sử dụng (Packaging Use Cases).
  - **Mục VII (Review & Traps)**: 7 cạm bẫy phòng thi, Checklist đánh giá năng lực Requirements Analysis & Design.
- **Outside (4 câu / đề - 10%)**: Vận dụng kỹ nghệ phần mềm và kiến trúc dự án thực tế:
  - Quản trị Baseline trong CI/CD & Agile backlog grooming (SAFe / PI Planning).
  - Kỹ thuật khơi gợi yêu cầu (Elicitation) trong thời đại AI & Low-code/No-code.
  - Phân rã Use Case trong kiến trúc vi dịch vụ (Microservices) & Event-Driven Architecture.
  - Thiết lập ranh giới nghiệp vụ (Bounded Contexts) theo tư duy Domain-Driven Design (DDD).

---

## 3. CƠ CHẾ CHỐNG ĐOÁN BỪA (EQUAL OPTION LENGTH BALANCE)

Áp dụng tiêu chuẩn kỹ thuật nghiêm ngặt:
$$\Delta L = L_{\max} - L_{\min} \le 15 \text{ ký tự}$$

- Tất cả 4 phương án $A, B, C, D$ trong cùng 1 câu hỏi có độ dài tương đương nhau.
- Triệt tiêu hoàn toàn thói quen chọn đáp án dài nhất.
- Đã chạy script kiểm định tự động xác nhận 80/80 câu đạt chuẩn trước khi xuất file.

---

## 4. ĐA DẠNG HÓA HÌNH THỨC CÂU HỎI

1. **Trắc nghiệm chọn một đáp án đúng (`single-correct`)**: 21 câu (Đề 1), 20 câu (Đề 2).
2. **Trắc nghiệm chọn câu SAI / Ngoại lệ (`choose-wrong`)**: 6 câu (Đề 1), 6 câu (Đề 2) với các từ phủ định in hoa (**KHÔNG**, **SAI**).
3. **Tình huống thực tế (`case-study`)**: 10 câu (Đề 1), 11 câu (Đề 2) giải quyết bài toán nghiệp vụ thư viện, đặt đơn hàng, thanh toán RFID và kiến trúc microservices.
4. **Ghép cặp đa chiều (`matching`)**: 2 câu (Đề 1), 2 câu (Đề 2).
5. **Điền khuyết / Trình tự logic (`fill-blank`)**: 1 câu (Đề 1), 1 câu (Đề 2).

---

## 5. DANH SÁCH FILE LIÊN QUAN

- Mã nguồn đề thi Part 1: [data/questions-ad-ch4-part1.js](file:///d:/TT%20HCM/data/questions-ad-ch4-part1.js)
- Mã nguồn đề thi Part 2: [data/questions-ad-ch4-part2.js](file:///d:/TT%20HCM/data/questions-ad-ch4-part2.js)
- Tích hợp hệ thống: [lib/curriculum.js](file:///d:/TT%20HCM/lib/curriculum.js)
- Bản in tài liệu 80 câu có đáp án: [tong-hop-2-de-thi-chuong-4-phan-tich-thiet-ke-yeu-cau.md](file:///d:/TT%20HCM/tong-hop-2-de-thi-chuong-4-phan-tich-thiet-ke-yeu-cau.md)
- Báo cáo quy hoạch ngân hàng: [docs/analysis-design/ch4-ngan-hang-de-thi-40-cau.md](file:///d:/TT%20HCM/docs/analysis-design/ch4-ngan-hang-de-thi-40-cau.md)
