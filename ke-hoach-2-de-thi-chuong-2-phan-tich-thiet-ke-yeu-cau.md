# KẾ HOẠCH TRIỂN KHAI: 2 BỘ ĐỀ THI TRẮC NGHIỆM CHƯƠNG II
## MÔN: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU (`analysis-design` / `ad-ch2`)
### CHỦ ĐỀ: SYSTEMS DEVELOPMENT LIFE CYCLE (SDLC) & BUSINESS MODELING

---

## 1. MỤC TIÊU VÀ NGUYÊN TẮC THIẾT KẾ

- **Quy mô**: 02 Bộ đề thi độc lập (Đề 1 & Đề 2), mỗi đề đúng **40 câu hỏi** $\rightarrow$ Tổng cộng **80 câu hỏi trắc nghiệm biên soạn mới 100%**.
- **Tính độc lập tuyệt đối**: 2 đề thi có câu hỏi, ngữ cảnh và phương án trả lời **hoàn toàn khác biệt, 0% trùng lặp**.
- **Mã định danh chuẩn hóa**:
  - Đề 1 (Part 1): `ad-c2-d1-001` $\rightarrow$ `ad-c2-d1-040` (lưu tại `data/questions-ad-ch2-part1.js`)
  - Đề 2 (Part 2): `ad-c2-d2-001` $\rightarrow$ `ad-c2-d2-040` (lưu tại `data/questions-ad-ch2-part2.js`)
- **Tích hợp hệ thống**: Cập nhật Curriculum Adapter tại `lib/curriculum.js` cho môn `analysis-design` (chapter `ad-ch2`).

---

## 2. MA TRẬN PHÂN BỔ ĐỘ KHÓ & PHẠM VI

### 2.1. Phân bổ Độ khó theo yêu cầu người dùng
| Mức độ | Số câu / Đề | Tỷ lệ (%) | Đặc điểm nhận dạng & Yêu cầu sư phạm |
| :--- | :---: | :---: | :--- |
| **🟢 Dễ (Nhận biết)** | **12 câu** | **30.0%** | Nhận diện khái niệm cốt lõi (SDLC umbrella, 5 pha SDLC, 3 yếu tố Feasibility, định nghĩa Business Actor, ký hiệu Activity Diagram). |
| **🟡 Trung bình (Thông hiểu)** | **16 câu** | **40.0%** | So sánh 6 chiều Predictive vs Adaptive, phân biệt Deliverables giữa các pha, phân tích Business Worker vs Business Actor, luồng Activity Diagram. |
| **🔴 Khó (Vận dụng cao)** | **12 câu** | **30.0%** | Tình huống dự án thực tế (Case study), giải quyết bài toán chọn Approach, phân tích lỗi sai trong mô hình hóa nghiệp vụ, ghép cặp đa chiều. |
| **Tổng cộng** | **40 câu** | **100%** | **Cân bằng hoàn hảo trên cả 2 bộ đề thi.** |

### 2.2. Phân bổ Nguồn gốc (Scope Balance)
- **Inside (36 câu / đề - 90%)**: Bám sát 100% nội dung 5 phần chính trong bài học `data/ad-ch2.js`:
  - **Mục I (Predictive vs Adaptive SDLC)**: Bản chất SDLC vs Methodology, 6 chiều đối chiếu, 3 tiêu chí chọn tiếp cận.
  - **Mục II (SDLC 5 Phases)**: Planning (Why?), Analysis (What?), Design (How?), Implementation (Build & Deploy), Support (Keep it running).
  - **Mục III (Business Modeling)**: Ranh giới Enterprise, lý do model business trước khi model hệ thống, 4 khái niệm (Business Actor, Worker, Use Case, Entity).
  - **Mục IV (Initiation Phase)**: Cổng kiểm soát Go/No-Go, 4 hoạt động chính, Phân tích tính khả thi 3 chiều (Economic, Technical, Operational).
  - **Mục V (Business Use Case & Activity Diagram)**: Ký hiệu gạch chéo `/`, phân loại Actor, Activity Diagram (Action, Decision, Merge, Fork, Join, Swimlanes).
- **Outside (4 câu / đề - 10%)**: Vận dụng thực tế dự án kỹ nghệ phần mềm:
  - Tình huống khách hàng muốn "Agile nửa vời" hoặc ép cố định cả phạm vi lẫn ngân sách.
  - Phân tích chỉ số tài chính ROI, Payback Period, NPV trong đề án khả thi thực tế.
  - Chiến lược chuyển đổi hệ thống (Cutover/Direct, Parallel, Phased, Pilot) khi Go-Live gặp sự cố.
  - Xử lý xung đột văn hóa doanh nghiệp khi áp dụng phần mềm mới.

---

## 3. CƠ CHẾ CHỐNG ĐOÁN BỪA (EQUAL OPTION LENGTH)

Áp dụng thuật toán cân bằng độ dài nghiêm ngặt:
$$\Delta L = L_{\max} - L_{\min} \le 15 \text{ ký tự}$$
- Toàn bộ 4 phương án $A, B, C, D$ trong cùng 1 câu hỏi có độ dài tương đương nhau.
- Loại bỏ hoàn toàn bẫy thị giác "câu dài nhất là đáp án đúng".
- Chạy script kiểm thử tự động xác nhận 80/80 câu đạt chuẩn trước khi build.

---

## 4. ĐA DẠNG HÓA HÌNH THỨC CÂU HỎI

1. **Chọn câu đúng (`single-correct`)**: Đo lường lý thuyết chuẩn mực.
2. **Chọn câu sai / ngoại lệ (`choose-wrong`)**: Nhận diện khẳng định sai; in hoa từ khóa phủ định (**KHÔNG**, **SAI**, **NGOẠI TRỪ**).
3. **Tình huống thực tế (`case-study`)**: Tình huống BA đối mặt với bài toán thực tế (khách hàng, thời hạn, ngân sách, nhân sự).
4. **Ghép cặp đa chiều (`matching`)**: Ghép nối các pha SDLC với câu hỏi cốt lõi, hoặc ký hiệu Activity Diagram với chức năng.
5. **Điền khuyết / Trình tự logic (`fill-blank`)**: Điền thuật ngữ nghiệp vụ hoặc sắp xếp chuỗi hoạt động chuẩn.

---

## 5. KẾ HOẠCH TRIỂN KHAI THEO CÁC BƯỚC

1. **Bước 1**: Đặt câu hỏi khảo sát người dùng về tỷ lệ dạng câu hỏi và trọng tâm chủ đề (qua công cụ `ask_question`).
2. **Bước 2**: Khởi tạo kịch bản biên soạn tự động 80 câu hỏi mới 100%.
3. **Bước 3**: Chạy script kiểm thử tự động:
   - Kiểm tra số lượng: đúng 40 câu / đề.
   - Kiểm tra độ khó: đúng 12 Dễ, 16 TB, 12 Khó.
   - Kiểm tra phạm vi: đúng 36 Inside, 4 Outside.
   - Kiểm tra độ lệch chiều dài: $\Delta L \le 15$ ký tự trên 80 câu.
   - Kiểm tra trùng lặp: đối chiếu chéo Đề 1 và Đề 2 đạt 0% trùng lặp.
4. **Bước 4**: Ghi các file dữ liệu mới vào thư mục `data/` (`questions-ad-ch2-part1.js` và `questions-ad-ch2-part2.js`).
5. **Bước 5**: Cập nhật `lib/curriculum.js` tích hợp Chapter 2 vào `analysis-design`.
6. **Bước 6**: Xuất bản file tài liệu tổng hợp Markdown `tong-hop-2-de-thi-chuong-2-phan-tich-thiet-ke-yeu-cau.md`.
7. **Bước 7**: Chạy `npm run build` xác nhận Next.js 16 biên dịch thành công 100%.
