# Hướng dẫn Cài đặt & Sử dụng (Setup Guide)

Tài liệu này hướng dẫn chi tiết cách cài đặt, cấu hình và chạy dự án **StudyMaster** (Hệ sinh thái hỗ trợ học tập trực quan đa môn học: Lý luận chính trị & Khoa học máy tính).

---

## 📌 1. Yêu cầu Hệ thống (Prerequisites)

Trước khi bắt đầu, hãy đảm bảo môi trường phát triển của bạn đã cài đặt các công cụ sau:
* **Node.js**: Phiên bản đề xuất `v18.0.0` trở lên (Khuyến nghị `v20.x` hoặc `v22.x` / `v24.x`).
* **Trình quản lý gói**: `npm` (mặc định đi kèm Node.js) hoặc `yarn` / `pnpm`.
* **Trình duyệt Web hiện đại**: Google Chrome, Microsoft Edge, Mozilla Firefox hoặc Safari (hỗ trợ ES2022 và WebGL).

---

## 🚀 2. Cài đặt Dự án (Installation)

Thực hiện các bước sau để thiết lập mã nguồn và các thư viện phụ thuộc:

1. **Mở terminal và di chuyển vào thư mục dự án**:
   ```bash
   cd "TT HCM"
   ```

2. **Cài đặt các gói phụ thuộc (Dependencies)**:
   ```bash
   npm install
   ```

---

## ⚙️ 3. Cấu hình Cơ sở dữ liệu Firebase (Database Setup)

Dự án sử dụng **Google Firebase Firestore** để lưu trữ bảng xếp hạng kết quả thi trắc nghiệm (Leaderboard) và **Firebase Authentication** cho đăng nhập Google.

* Cấu hình kết nối Firebase đã được thiết lập sẵn trong tệp [`lib/firebase.js`](file:///d:/TT%20HCM/lib/firebase.js).
* Nếu bạn muốn chuyển sang cơ sở dữ liệu Firebase của riêng mình, hãy cập nhật đối tượng `firebaseConfig` trong [`lib/firebase.js`](file:///d:/TT%20HCM/lib/firebase.js):
  ```javascript
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  ```

---

## 🏃 4. Các Lệnh Thực thi (Project Scripts)

Dự án hỗ trợ đầy đủ các lệnh phát triển, đóng gói và kiểm thử trong `package.json`:

### 1. Khởi động Máy chủ Phát triển (Development Mode)
Khởi chạy dự án ở môi trường dev với bộ nhớ đệm tăng cường và tính năng hot-reload:
```bash
npm run dev
```
Sau đó, mở trình duyệt và truy cập: [http://localhost:3000](http://localhost:3000)

### 2. Biên dịch Dự án cho Production (Production Build)
Biên dịch mã nguồn Next.js bằng Turbopack, kiểm tra TypeScript và tạo các trang tĩnh tối ưu:
```bash
npm run build
```
*(Yêu cầu kết quả biên dịch: `✓ Compiled successfully` với `0 errors`).*

### 3. Khởi chạy Máy chủ Sản xuất (Production Server)
Sau khi đã biên dịch thành công bằng `npm run build`, chạy máy chủ production:
```bash
npm run start
```

### 4. Kiểm tra Lỗi Cú pháp & Quy chuẩn Code (Linting)
Kiểm tra toàn bộ mã nguồn theo chuẩn ESLint 9:
```bash
npm run lint
```

### 5. Dọn dẹp Cache Bản dựng (Clean Cache)
Nếu cần xóa sạch thư mục `.next` để build mới hoàn toàn:
```bash
npm run clean
```

---

## 🔑 5. Tài khoản Quản trị viên Mặc định (Default Admin)

Để trải nghiệm toàn bộ tính năng và truy cập bảng điều khiển quản trị **Admin Dashboard** mà không cần đăng ký tài khoản mới:
* **Tài khoản (Username)**: `admin`
* **Mật khẩu (Password)**: `admin`

---

## 📋 6. Quy trình Bàn giao & Kiểm tra Nhanh (Handoff Verification)

Khi nhận bàn giao dự án, bạn nên thực hiện nhanh các bước kiểm tra sau:
1. `npm install` ➔ Xác nhận cài đặt đầy đủ gói phụ thuộc.
2. `npm run build` ➔ Xác nhận Turbopack biên dịch thành công trong khoảng 25-30s.
3. `npm run dev` ➔ Mở [http://localhost:3000](http://localhost:3000), đăng nhập tài khoản `admin` / `admin`, thử nghiệm các tính năng:
   - Học bài và vẽ ghi chú (Drawing Canvas).
   - Làm bài kiểm tra trắc nghiệm (Practice & Exam Mode).
   - Truy cập Admin Dashboard (Xem thống kê, quản lý học viên, kiểm định câu hỏi).
   - Truy cập phòng Lab thuật toán (Bubble Sort, Merge Sort, Binary Search).
