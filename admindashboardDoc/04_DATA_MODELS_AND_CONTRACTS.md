# MÔ HÌNH DỮ LIỆU & HỢP ĐỒNG API (DATA CONTRACTS) — ADMIN DASHBOARD
**Dự án:** StudyMaster Platform  
**Tài liệu:** Data Models & Contracts Specification  
**Phiên bản:** v1.0.0  

---

## 1. Mô hình Thực thể Người dùng (`User` Schema)

Được lưu trữ trong `localStorage` (key: `studymaster_users`) và ánh xạ sang Firestore collection `users`.

```typescript
interface User {
  username: string;          // Khóa định danh duy nhất (VD: "hocsinh1", "nguyenvana")
  email: string;             // Địa chỉ email hợp lệ
  password?: string;         // Mật khẩu mã hóa hoặc chuỗi kiểm tra
  createdAt: number;         // Unix timestamp tính bằng milliseconds (VD: 1772349000000)
  locked: boolean;           // Cờ trạng thái: true = bị khóa, false = hoạt động
  avatar?: string;           // URL ảnh đại diện hoặc base64
  studentId?: string;        // Mã số sinh viên (VD: "B21DCCN001")
  phone?: string;            // Số điện thoại liên hệ
  role?: "student" | "admin" | "teacher"; // Phân quyền tài khoản
}
```

### Ví dụ Dữ liệu Mẫu (JSON):
```json
{
  "username": "nguyenvana",
  "email": "vana@gmail.com",
  "password": "Student@123",
  "createdAt": 1772089800000,
  "locked": false,
  "studentId": "B22DCAT099",
  "role": "student"
}
```

---

## 2. Mô hình Nhật ký Hoạt động (`AdminLog` Schema)

Được lưu trữ trong `localStorage` (key: `studymaster_admin_logs`). Giới hạn lưu tối đa 50 bản ghi gần nhất.

```typescript
interface AdminLog {
  id: number;                // Unique ID timestamp (VD: 1772349123456)
  user: string;              // Tên người dùng thực hiện hành vi
  action: string;            // Mô tả hành động (VD: "Hoàn thành bài thi môn Lịch sử Đảng")
  time: string;              // Chuỗi hiển thị thân thiện (VD: "5 phút trước", "Vừa xong")
  score?: number;            // Điểm số đạt được (nếu là bài thi)
  total?: number;            // Tổng số câu của đề thi (VD: 40)
}
```

### Ví dụ Dữ liệu Mẫu (JSON):
```json
{
  "id": 1772349123001,
  "user": "nguyenvana",
  "action": "Hoàn thành bài thi môn Lịch sử Đảng",
  "time": "5 phút trước",
  "score": 36,
  "total": 40
}
```

---

## 3. Mô hình Câu hỏi & Đề thi Bẫy (`Question` Schema)

Tuân thủ nghiêm ngặt quy tắc dự án trong `AGENTS.md`.

```typescript
interface Question {
  id: string;                // Định danh theo format: {MãMôn}-{MãChương}-d{SốĐề}-{STT}
  q: string;                 // Nội dung câu hỏi
  options: string[];         // Mảng 4 phương án [A, B, C, D] (Bắt buộc: Lmax - Lmin <= 15)
  answer: number;            // Chỉ số đáp án đúng (0 = A, 1 = B, 2 = C, 3 = D)
  explanation: string;       // Lời giải thích cặn kẽ dựa trên giáo trình
  difficulty: "easy" | "medium" | "hard"; // Phân loại độ khó
  sectionId?: string;        // Liên kết bài đọc mục cha
  subsectionId?: string;     // Liên kết bài đọc mục con
  
  // Thuộc tính bắt buộc 100% đối với Đề bẫy (Trick Question)
  trickDetails?: {
    whyTrapped: string;      // Nguyên nhân sinh viên hay bị nhầm lẫn
    trickWord: string;       // Từ khóa bẫy nhiễu trong câu
    citation: string;        // Trích dẫn chính xác trang/đoạn trong giáo trình
    tip: string;             // Mẹo nhớ nhanh để không bị lừa
  };
}
```

### Ví dụ Câu hỏi Bẫy Chuẩn hóa (JSON):
```json
{
  "id": "hcm-c4-d1-001",
  "q": "Theo Hồ Chí Minh, bản chất giai cấp công nhân của Nhà nước Việt Nam thể hiện ở yếu tố nào?",
  "options": [
    "Sự lãnh đạo duy nhất của Đảng Cộng sản Việt Nam",
    "Đội ngũ cán bộ cơ quan nhà nước toàn là công nhân",
    "Nhà nước chỉ bảo vệ lợi ích của giai cấp vô sản",
    "Tất cả quyền lực nhà nước trao cho giai cấp công nhân"
  ],
  "answer": 0,
  "explanation": "Bản chất giai cấp công nhân của Nhà nước Việt Nam trước hết thể hiện ở sự lãnh đạo của Đảng Cộng sản Việt Nam.",
  "difficulty": "hard",
  "trickDetails": {
    "whyTrapped": "Sinh viên dễ nhầm lẫn giữa bản chất giai cấp với thành phần xuất thân của đội ngũ công chức.",
    "trickWord": "duy nhất lãnh đạo vs thành phần xuất thân",
    "citation": "Giáo trình Tư tưởng Hồ Chí Minh, Chương IV, Mục I.1.a",
    "tip": "Nhớ công thức: Bản chất công nhân = Đảng lãnh đạo."
  }
}
```

---

## 4. Mô hình Bảng Xếp hạng (`RankingRecord` Schema)

Được lưu trữ trên Cloud Firestore (Collection: `rankings`).

```typescript
interface RankingRecord {
  id?: string;               // Document ID tự sinh bởi Firestore
  name: string;              // Tên học viên
  subjectId: string;         // Mã môn học (VD: "tu-tuong-hcm", "dsa")
  score: number;             // Số câu trả lời đúng
  total: number;             // Tổng số câu hỏi trong bài thi (VD: 40 hoặc 50)
  time: number;              // Thời gian hoàn thành tính bằng giây (VD: 1450)
  date: string;              // ISO String timestamp (VD: "2026-08-29T14:30:00.000Z")
  chapterId: string;         // Chương học (VD: "chuong-4")
  examSetId: string;         // Bộ đề (VD: "de-1", "trick")
}
```

---

## 5. Hợp đồng Thống kê Tổng hợp (`KPIStats` Contract)

Trả về từ hàm tính toán `getStats()` trong `AdminDashboard.js`:

```typescript
interface KPIStats {
  totalUsers: number;        // Tổng số học viên
  totalSubjects: number;     // Tổng số môn học đang kích hoạt
  totalAttempts: number;     // Tổng số lượt ôn tập đã hoàn thành
  avgScore: number;          // Điểm chuẩn xác trung bình (từ 0 đến 100)
}
```
