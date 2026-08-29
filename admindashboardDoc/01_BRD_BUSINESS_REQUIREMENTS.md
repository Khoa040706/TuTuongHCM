# TÀI LIỆU YÊU CẦU NGHIỆP VỤ (BRD) — ADMIN DASHBOARD
**Dự án:** StudyMaster Platform  
**Tài liệu:** Business Requirements Document (BRD)  
**Người phụ trách:** BA Team & Dev Team  
**Trạng thái:** DRAFT / IN-REVIEW  

---

## 1. Bối cảnh & Mục tiêu Nghiệp vụ (Business Context & Objectives)

### 1.1. Thực trạng & Vấn đề (Problem Statement)
* **Thiếu công cụ giám sát tập trung**: Trước đây, học viên tự luyện tập trên hệ thống nhưng giảng viên và ban quản trị không có cái nhìn tổng quan về số lượng học viên, tần suất làm bài, môn học nào được quan tâm nhiều nhất.
* **Chất lượng câu hỏi trắc nghiệm chưa được kiểm soát chặt chẽ**: Một số câu hỏi trắc nghiệm có thể vi phạm luật cân bằng độ dài (phương án đúng quá dài so với các phương án nhiễu), tạo cơ hội cho học sinh đoán mò đáp án mà không học bài.
* **Khó khăn trong việc hỗ trợ học viên**: Khi học viên quên mật khẩu hoặc gặp sự cố tài khoản, quản trị viên phải can thiệp thủ công vào cơ sở dữ liệu thay vì có công cụ tự phục vụ trực quan.

### 1.2. Mục tiêu Nghiệp vụ (Business Goals & KPIs)
* **Goal 1 (Giám sát tức thì)**: Cung cấp Dashboard thời gian thực hiển thị 100% các chỉ số quan trọng (Học viên hoạt động, Lượt thi trong tuần, Điểm trung bình từng môn).
* **Goal 2 (Tự động hóa Kiểm định Chất lượng Đề thi)**: 100% câu hỏi trong hệ thống phải được quét tự động nhằm phát hiện vi phạm độ lệch phương án ($\Delta L \le 15$ ký tự).
* **Goal 3 (Quản trị Học viên Tập trung)**: Rút ngắn thời gian xử lý hỗ trợ học viên (khóa tài khoản, cấp lại mật khẩu) xuống dưới **30 giây**.
* **Goal 4 (Báo cáo Thành tích & Xuất dữ liệu)**: Cho phép xuất báo cáo học viên và bảng xếp hạng ra định dạng chuẩn Excel (`.xlsx`) chỉ với **1 cú nhấp chuột**.

---

## 2. Chân dung Người dùng (User Personas)

```
┌─────────────────────────┐          ┌─────────────────────────┐
│     SUPER ADMIN         │          │   TEACHER / EXAM AUDITOR│
│  Quản trị Toàn quyền    │          │  Giảng viên / Soạn đề   │
│ ─────────────────────── │          │ ─────────────────────── │
│ • Quản lý tài khoản     │          │ • Kiểm định câu hỏi     │
│ • Cấp lại mật khẩu      │          │ • Quét bẫy trắc nghiệm  │
│ • Xuất báo cáo Excel    │          │ • Đánh giá bảng điểm    │
│ • Xem System Audit Logs │          │ • Xem Radar năng lực    │
└─────────────────────────┘          └─────────────────────────┘
```

### Persona 1: Quản trị viên Hệ thống (System Admin)
* **Nhiệm vụ chính**: Quản lý toàn bộ vòng đời tài khoản học viên, giám sát nhật ký hoạt động hệ thống, giải quyết khiếu nại tài khoản, xuất báo cáo cho ban giám hiệu.
* **Điểm nghẽn**: Sợ thao tác nhầm lẫn dẫn đến mất dữ liệu hoặc khóa nhầm tài khoản học viên.
* **Kỳ vọng**: Giao diện trực quan, có bước xác nhận an toàn (Confirmation Modals) khi thực hiện các hành động nguy hiểm.

### Persona 2: Giảng viên / Chuyên viên Khảo thí (Exam Auditor)
* **Nhiệm vụ chính**: Đảm bảo các bộ đề thi 40 câu và đề bẫy 50 câu tuân thủ đúng chuẩn giáo trình và luật chống đoán bừa.
* **Điểm nghẽn**: Phải đọc thủ công từng câu hỏi để đếm độ dài chữ của từng đáp án A, B, C, D.
* **Kỳ vọng**: Hệ thống tự động gắn nhãn cảnh báo đỏ cho các câu hỏi vi phạm độ lệch $> 15$ ký tự.

---

## 3. Phạm vi Dự án (Project Scope)

### 3.1. Thuộc phạm vi (In-Scope)
1. **Module Tổng quan (Overview Module)**:
   * Thống kê 4 thẻ chỉ số KPI cốt lõi.
   * Biểu đồ đường phân tích lượt làm bài trong 7 ngày gần nhất (SVG Bézier).
   * Biểu đồ Donut phân bổ lượt học giữa các môn.
   * Danh sách nhật ký hoạt động hệ thống (System Logs) kèm tính năng xóa log.
2. **Module Quản lý Học viên (User Management Module)**:
   * Danh sách học viên có phân trang (5 - 10 items/trang).
   * Tìm kiếm học viên theo Username hoặc Email.
   * Chức năng Thêm học viên mới, Đổi mật khẩu học viên, Khóa/Mở khóa tài khoản, Xóa học viên.
   * Trích xuất danh sách học viên ra tệp Excel (.xlsx).
3. **Module Quản trị Ngân hàng Câu hỏi (Question & Exam Auditor Module)**:
   * Lọc câu hỏi theo Môn học và Chương học.
   * Tự động quét kiểm định độ lệch chiều dài phương án ($\Delta L \le 15$ ký tự).
   * Bộ lọc chuyên biệt: Tất cả câu hỏi, Câu hỏi bẫy (`tricks`), Câu hỏi cảnh báo vi phạm (`warning`).
   * Xem trước chi tiết câu hỏi, đáp án đúng và phần `trickDetails`.
4. **Module Bảng xếp hạng (Leaderboard Module)**:
   * Bảng vàng vinh danh Top 1, Top 2, Top 3 với hiệu ứng kim loại.
   * Lọc bảng điểm theo từng môn học.
5. **Drawer Hồ sơ Năng lực Cá nhân (User Radar Drawer)**:
   * Hiển thị thông tin cá nhân, tỷ lệ làm bài, lịch sử thi và biểu đồ Radar năng lực môn học.

### 3.2. Ngoài phạm vi hiện tại (Out-of-Scope - Dành cho Pha tiếp theo)
* Tích hợp cổng thanh toán học phí / mua khóa học.
* Chấm điểm bài thi tự luận dạng văn bản dài bằng AI.
* Phân quyền đa cấp trường học (Multi-tenant University hierarchy).

---

## 4. Ma trận Phân quyền Nghiệp vụ (RBAC Matrix)

| Hành động Nghiệp vụ | Super Admin | Giảng viên (Teacher) | Học viên (Student) |
| :--- | :---: | :---: | :---: |
| Truy cập Admin Dashboard | ✅ Có | ✅ Có | ❌ Không |
| Xem Thống kê Tổng quan (KPIs, Charts) | ✅ Có | ✅ Có | ❌ Không |
| Thêm / Khóa / Xóa Học viên | ✅ Có | ❌ Không | ❌ Không |
| Đổi mật khẩu của Học viên | ✅ Có | ❌ Không | ❌ Không |
| Xuất Báo cáo Excel | ✅ Có | ✅ Có | ❌ Không |
| Quét Kiểm định Đề thi ($\Delta L \le 15$) | ✅ Có | ✅ Có | ❌ Không |
| Xem Radar Năng lực Học viên | ✅ Có | ✅ Có | ❌ Chỉ xem của mình |
| Xóa Nhật ký Hoạt động (Logs) | ✅ Có | ❌ Không | ❌ Không |

---

## 5. Câu hỏi Mở dành cho BA (Dev to BA Clarification Questions)
1. *Đối với hành động "Xóa học viên", chúng ta nên xóa vật lý vĩnh viễn (Hard Delete) hay chỉ ẩn trạng thái (Soft Delete / `isDeleted = true`) để bảo toàn lịch sử làm bài thi của học viên trong bảng xếp hạng?*
2. *Khi Admin đổi mật khẩu cho học sinh, hệ thống có cần tự động gửi email thông báo mật khẩu mới đến email của học sinh hay chỉ hiển thị trên màn hình Admin?*
