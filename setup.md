# Hướng dẫn Cài đặt & Sử dụng (Setup Guide)

Tài liệu này hướng dẫn chi tiết cách cài đặt, cấu hình và chạy dự án **StudyMaster** (Hệ thống hỗ trợ học tập Tư tưởng Hồ Chí Minh & Lịch sử Đảng).

---

## 📌 Yêu cầu hệ thống

Trước khi bắt đầu, hãy đảm bảo máy tính của bạn đã cài đặt các công cụ sau:
* **Node.js** (Phiên bản đề xuất: `v18.0.0` trở lên)
* **NPM** (thường đi kèm với Node.js) hoặc **Yarn**

---

## 🚀 Cài đặt dự án

Thực hiện các bước sau để thiết lập môi trường phát triển:

1. **Di chuyển vào thư mục dự án**:
   ```bash
   cd "TT HCM"
   ```

2. **Cài đặt các gói phụ thuộc (Dependencies)**:
   ```bash
   npm install
   # hoặc sử dụng yarn
   yarn install
   ```

---

## ⚙️ Cấu hình Firebase

Dự án sử dụng cơ sở dữ liệu **Google Firebase Firestore** để lưu trữ bảng xếp hạng kết quả làm bài trắc nghiệm (Leaderboard).

* Cấu hình Firebase đã được thiết lập sẵn trong tệp [lib/firebase.js](file:///c:/Users/Admin/Desktop/TT%20HCM/lib/firebase.js) trỏ tới dự án Firebase `studymaster-tutuonghcm`.
* Nếu bạn muốn sử dụng cơ sở dữ liệu riêng, chỉ cần cập nhật đối tượng `firebaseConfig` trong tệp [lib/firebase.js](file:///c:/Users/Admin/Desktop/TT%20HCM/lib/firebase.js):
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

## 🏃 Các lệnh thực thi (Commands)

Dự án Next.js hỗ trợ các tập lệnh (scripts) sau để phát triển và kiểm tra sản phẩm:

### 1. Khởi động Máy chủ Phát triển (Development Server)
Chạy dự án ở chế độ phát triển để có thể tự động tải lại (hot-reload) khi chỉnh sửa mã nguồn:
```bash
npm run dev
```
Sau đó, truy cập ứng dụng tại địa chỉ: [http://localhost:3000](http://localhost:3000)

### 2. Biên dịch Dự án (Build for Production)
Tạo phiên bản build sản xuất tối ưu hóa hiệu năng và dung lượng:
```bash
npm run build
```

### 3. Khởi động Máy chủ Sản xuất (Production Server)
Sau khi đã biên dịch thành công, chạy ứng dụng ở chế độ sản xuất:
```bash
npm run start
```

### 4. Kiểm tra Lỗi Cú pháp & Quy chuẩn Mã nguồn (ESLint Check)
Kiểm tra toàn bộ mã nguồn để đảm bảo không có lỗi hoặc cảnh báo vi phạm quy chuẩn thiết kế:
```bash
npm run lint
```

---

## 🔑 Tài khoản Quản trị viên Mặc định (Default Admin)

Để kiểm tra các tính năng mà không cần đăng ký tài khoản mới, bạn có thể sử dụng tài khoản admin được cấu hình sẵn trong hệ thống:
* **Tài khoản (Username)**: `admin`
* **Mật khẩu (Password)**: `admin`

---

## 📁 Phiên bản Legacy (Vanilla HTML/JS PWA)

Nếu bạn muốn trải nghiệm hoặc tham khảo phiên bản PWA thuần túy cũ (không dùng Next.js), thư mục [legacy_vanilla/](file:///c:/Users/Admin/Desktop/TT%20HCM/legacy_vanilla) đã được giữ nguyên và chứa toàn bộ mã nguồn tự cung tự cấp.

**Cách chạy phiên bản Legacy:**
1. Chạy một máy chủ HTTP cục bộ ngay trong thư mục [legacy_vanilla/](file:///c:/Users/Admin/Desktop/TT%20HCM/legacy_vanilla).
2. Ví dụ bằng Python:
   ```bash
   cd legacy_vanilla
   python -m http.server 8000
   ```
3. Truy cập địa chỉ [http://localhost:8000](http://localhost:8000) trên trình duyệt.
