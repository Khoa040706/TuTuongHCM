# Bước 1 — Integration Map đã xác minh

**Trạng thái:** `DONE` — 2026-09-13

## 1. Vị trí tích hợp đã chốt

Trang `/` tiếp tục dùng `app/page.js` và state machine hiện tại. Không tạo route marketing song song trong phạm vi này. Phần hình ảnh/copy của landing được cải tiến thành Home Experience; auth overlay và các luồng login/register/forgot-password hiện hữu được giữ.

## 2. Thời điểm auth overlay

| Sự kiện | Hành vi đã chốt cho triển khai |
|---|---|
| Lần đầu vào `/`, chưa có session | Landing/story hiện ngay; overlay **đóng**, không auto-open sau timer/animation |
| Bấm CTA hero “Bắt đầu học” | Mở login overlay ngay, không đợi scroll/3D tải xong |
| Bấm nút “Đăng nhập” cố định | Mở login overlay ngay |
| Bấm “Khám phá StudyMaster” | Giữ overlay đóng và cuộn tới S02 |
| Nhấn Enter | Chỉ kích hoạt khi focus đang ở button/link tương ứng; không giữ global Enter mở overlay ngoài ngữ cảnh |
| Nhấn Escape/nút đóng | Đóng overlay, trả focus về trigger và giữ landing/scroll state hợp lý |
| Chọn đăng ký/quên mật khẩu | Giữ trong auth overlay và state hiện có; back trở về login panel |
| Session học viên được phục hồi | Giữ hành vi vào nhanh `subject-select`; không ép xem storytelling |
| Session admin được phục hồi | Giữ hành vi vào `admin-dashboard` |

Overlay không được mở tự động khi model load xong, khi người dùng mới cuộn hoặc khi scene chuyển cảnh. DOM CTA phải hoạt động ngay cả khi canvas loading/error.

## 3. State và CTA map

```text
guest @ landing
├─ Khám phá StudyMaster ─> S02 (overlay closed)
├─ Bắt đầu học ──────────> login overlay
└─ Đăng nhập ────────────> login overlay
                              ├─ register
                              ├─ forgot-password
                              └─ success learner ─> subject-select ─> study
                                                 └─ admin ─────────> admin-dashboard
```

| Persona | CTA chính | Đích thật | Ghi chú |
|---|---|---|---|
| Guest | Bắt đầu học | Auth overlay | Không tạo tài khoản/tiến độ giả |
| Guest | Khám phá StudyMaster | Anchor S02 | Không phụ thuộc WebGL |
| Authenticated learner | Khám phá môn học | `subject-select` | Session restore giữ đường vào nhanh |
| Admin | Vào quản trị | `admin-dashboard` | Không đưa vào learner CTA |
| No history | Khám phá môn học | `subject-select` | Không hiển thị “Tiếp tục học” |

“Tiếp tục học” bị loại khỏi v1 vì learning contract không lưu last-visited destination.

## 4. Feature → bằng chứng → CTA

| Feature kể trong story | Bằng chứng source | CTA được phép |
|---|---|---|
| Thuật toán trực quan | `AlgoSimDashboard.js`, `BubbleSortLab.js` | Mở dashboard/lab Bubble Sort hiện có |
| Bubble Sort `[3,1,2]` | `generateBubbleSortSteps`: compare adjacent, swap, early-exit flag | “Xem Bubble Sort” |
| Activity Diagram ATM | `DiagramSimDashboard.js` + `atm_activity_diagram.png` | “Khám phá sơ đồ Activity”/mở diagram dashboard |
| Thư viện UML | Class/Use Case/Sequence/Activity entries | “Xem thư viện sơ đồ” |
| Chọn môn | `subject-select` branch + curriculum | “Khám phá môn học” |

Không dùng copy “tự thiết kế/kéo thả sơ đồ” vì dashboard ghi chức năng drag-and-drop là “Sắp tới”.

## 5. Boundary và file impact dự kiến

- `app/page.js`: giữ state/auth transitions; tích hợp Home Experience và trigger overlay.
- `components/home/*`: client island cho R3F/motion; DOM content/fallback tách khỏi scene.
- `app/globals.css`: style scoped cho home; không đổi theme study/admin.
- `app/layout.js`: metadata và zoom accessibility ở B7.
- `package.json`/lockfile: chỉ đổi ở B4 sau approval, cho R3F/Drei tương thích.
- `next.config.mjs`: chỉ đổi nếu PWA test có bằng chứng.
- Không đổi backend, Firebase, API, schema hoặc `data/*.js`.

## 6. Rủi ro đã ghi

- Landing hiện có particle canvas và GSAP: phải scope/cleanup để không tranh render/timeline.
- `app/page.js` là client bundle lớn: HomeCanvas cần lazy-load và không tải vào study/admin khi không cần.
- Back/restore trong state-driven SPA không có URL scene: anchor/chapter progress cần state xác định và test riêng.
- `app/layout.js` đang cấm zoom: đưa vào B7, không sửa trong bước lập kế hoạch.

## 7. Bằng chứng hoàn tất

D01 được người dùng duyệt; route/state/auth/CTA/feature/file-impact đã có mapping; không phát sinh nhu cầu backend. Bước 1 kết thúc tại đây.
