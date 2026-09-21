# Bước 1 — Xác minh sản phẩm và vị trí tích hợp

**Trạng thái:** `DONE` — 2026-09-13

**Owner:** Lead BA + Frontend lead + Integration reviewer

**Công cụ:** đọc source/cấu hình; chưa dùng Blender, chưa sửa code.

## Mục tiêu và kết quả nhìn thấy

Khóa nơi homepage sống trong SPA, state transition, CTA thật, auth behavior và feature claims. Kết quả là một integration map đủ để FE không tự bịa route hoặc contract.

## Đầu vào và điều kiện bắt đầu

- Hai brief, `AGENTS.md`, `context.md`, `app/page.js`, auth/learning hooks, simulator dashboards, `app/layout.js`, `next.config.mjs`.
- D01 được người dùng trả lời trước khi khóa kiến trúc; các kiểm kê còn lại có thể làm trước.
- Không yêu cầu Blender.

## Checklist thực hiện

- [x] **B1.1** Lập sơ đồ state hiện tại: `login/register/forgot-password/subject-select/study/admin-dashboard`, trigger và back path.
- [x] **B1.2** Ghi D01: cải tiến landing tại `/`, giữ auth overlay/luồng xác thực; xác định restore/back là test bắt buộc.
- [x] **B1.3** Lập CTA matrix; không dùng “Tiếp tục học” vì source chưa có last-visited contract.
- [x] **B1.4** Lập feature–bằng chứng–đích cho algorithm, diagram, subject select và auth overlay.
- [x] **B1.5** Xác định landing shell giữ lại và vùng GSAP/particle có nguy cơ xung đột.
- [x] **B1.6** Xác định client island/lazy-load theo tài liệu Next.js 16; R3F không tải vào study/admin khi không dùng.
- [x] **B1.7** Xác định metadata, viewport accessibility và PWA behavior cần kiểm tra.
- [x] **B1.8** Xác nhận phạm vi homepage không cần schema/endpoint/backend mới.

## File dự kiến ở giai đoạn triển khai

- Sửa: `app/page.js`, có thể `app/layout.js`, `app/globals.css`.
- Tạo: `components/home/HomeExperience.js`, `HomeContent.js`, `HomeCTA.js` hoặc tên tương đương sau review.
- Không sửa trong bước lập đặc tả; không sửa `app/api/`, `lib/server/`, `data/*.js`.

## Đầu ra và bằng chứng

- Đầu ra hoàn chỉnh tại [`integration-map.md`](integration-map.md): state/route diagram; CTA matrix; feature evidence matrix; danh sách file được phép sửa; bundle boundary note.
- Bằng chứng: đường dẫn + line reference source, không dùng ảnh mockup làm bằng chứng chức năng.

## Duyệt, rủi ro và rollback

- Người dùng duyệt D01 và CTA copy trước B4.
- Rủi ro: làm hỏng auth landing hoặc deep state. Giảm thiểu: giữ state transitions hiện có, đặt HomeExperience sau boundary và có feature flag/dev-only switch trong giai đoạn tích hợp.
- Rollback triển khai: bỏ nhánh HomeExperience và dynamic import để trở lại landing cũ; không thay contract server.

## Exit gate

D01 `DECIDED`; mọi CTA có đích thật; mọi claim có bằng chứng; sơ đồ state được FE/Integration đồng thuận. Không tối ưu hình ảnh ở bước này.
