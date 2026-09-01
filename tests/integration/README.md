# Backend integration tests với Firebase Emulator

## Yêu cầu

- Node.js theo yêu cầu của dự án.
- Java 21 trở lên cho Firestore Emulator.
- Không cần Firebase production project hoặc service-account.

Harness luôn dùng project giả `demo-studymaster`. Auth và Firestore được ánh xạ tới
`127.0.0.1:9099` và `127.0.0.1:8080`; mọi fixture bị xóa khi bắt đầu lượt test.

## Chạy test

```powershell
npm.cmd run test:integration:emulator
```

Firebase CLI và Firestore Emulator binary được cache cục bộ. Các thư mục cache,
debug log và credential tạm không được commit.

Nếu máy chưa cấu hình Java 21 toàn hệ thống, runner cũng nhận runtime đã giải nén
trong `.firebase-cache/java21/<java-home>/`. Thư mục này chỉ là cache local và bị
Git bỏ qua.
