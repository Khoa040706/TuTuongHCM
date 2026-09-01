# Báo cáo Lỗi Tích hợp (Bug Report — Integration Test Suite)

Tài liệu này ghi nhận toàn bộ các test case có kết quả `FAIL` sau khi thực thi toàn diện 34 test case trong [`integration-test-plan.md`](./integration-test-plan.md).
Nguyên tắc kiểm thử: **Không sửa mã nguồn trong quá trình kiểm thử**.

---

## Danh sách Lỗi Phát hiện Được (Open Defects)

### 1. `ITP-CAT-003` — LEARN-01 trả đủ 7 chương Cloud cho student mới
- **Test ID**: `ITP-CAT-003`
- **Expected**: HTTP 200, `{ ok: true, data: { chapters: [7 chapters] } }` khi gọi `GET /api/learning/state?subjectId=cloud-computing` với session của học viên mới.
- **Actual**: Trả về `HTTP 401 UNAUTHENTICATED` do chưa có môi trường Firebase Emulator hoặc tài khoản student session test có thể kết nối Firestore.
- **Owner nghi ngờ**: Backend / Auth / Environment
- **Trạng thái**: `open`

---

### 2. `ITP-CAT-004` — Hoàn thành subsection Cloud hợp lệ
- **Test ID**: `ITP-CAT-004`
- **Expected**: HTTP 200, cập nhật tiến độ subsection `cloud-ch1-s1-overview` và counter chương khi gửi `PUT /api/learning/subsections/:id/completion` kèm session học viên hợp lệ.
- **Actual**: Trả về `HTTP 401 UNAUTHENTICATED` do thiếu student session / Firebase Emulator để ghi nhận dữ liệu vào Firestore.
- **Owner nghi ngờ**: Backend / Auth / Environment
- **Trạng thái**: `open`

---

### 3. `ITP-CAT-005` — Catalog vẫn từ chối ID Cloud không tồn tại
- **Test ID**: `ITP-CAT-005`
- **Expected**: HTTP 404 với error code `CHAPTER_NOT_FOUND` hoặc `SUBSECTION_NOT_FOUND` khi truyền `chapterId=cloud-ch999` hoặc `subsectionId=cloud-missing`.
- **Actual**: Route handler bị chặn bởi auth guard ở tầng trên (`requireSession()`) và trả về `HTTP 401 UNAUTHENTICATED` trước khi luồng xử lý đến được bước thẩm định catalog ID.
- **Owner nghi ngờ**: Backend / Auth
- **Trạng thái**: `open`

---

### 4. `ITP-CAT-006` — ADMIN-01 tổng hợp được Cloud
- **Test ID**: `ITP-CAT-006`
- **Expected**: HTTP 200, API trả về JSON tổng hợp tiến độ 7 chương Cloud của các học viên fixture khi gọi `GET /api/admin/learning-report?subjectId=cloud-computing`.
- **Actual**: Trả về `HTTP 401 UNAUTHENTICATED` do chưa cấu hình admin session cookie và credentials Firestore trong môi trường kiểm thử.
- **Owner nghi ngờ**: Backend / Admin / Environment
- **Trạng thái**: `open`

---

### 5. `ITP-FC-002` — FLASH-01 trả thẻ chưa học là đến hạn
- **Test ID**: `ITP-FC-002`
- **Expected**: HTTP 200, `dueCount = 12`, `cards.length = 12` khi gọi `GET /api/learning/flashcards/due?subjectId=cloud-computing&limit=100` với học viên chưa có tiến độ.
- **Actual**: Trả về `HTTP 401 UNAUTHENTICATED` do thiếu student session / Firebase Emulator.
- **Owner nghi ngờ**: Backend / Flashcards / Environment
- **Trạng thái**: `open`

---

### 6. `ITP-FC-003` — FLASH-01 tôn trọng limit nhưng giữ tổng dueCount
- **Test ID**: `ITP-FC-003`
- **Expected**: HTTP 200, `cards.length = 5`, `dueCount = 12` khi truyền tham số `limit=5`.
- **Actual**: Trả về `HTTP 401 UNAUTHENTICATED` do thiếu student session / Firebase Emulator.
- **Owner nghi ngờ**: Backend / Flashcards / Environment
- **Trạng thái**: `open`

---

### 7. `ITP-FC-004` — FLASH-02 review đúng card và đúng subsection
- **Test ID**: `ITP-FC-004`
- **Expected**: HTTP 200, cập nhật `flashcardProgress` và tạo `reviewItem` gắn lý do `FLASHCARD_AGAIN` khi gọi `POST /api/learning/flashcards/cloud_fc_01/reviews`.
- **Actual**: Trả về `HTTP 401 UNAUTHENTICATED` do thiếu student session / Firestore transaction trong môi trường kiểm thử.
- **Owner nghi ngờ**: Backend / Flashcards / Environment
- **Trạng thái**: `open`

---

### 8. `ITP-FC-006` — Learning state phản ánh dueCount sau review
- **Test ID**: `ITP-FC-006`
- **Expected**: `FLASH-01` và `learningState.flashcards.dueCount` đồng bộ giảm và hiển thị đúng số thẻ còn hạn sau khi hoàn thành review.
- **Actual**: Không thể kiểm tra tương tác chuỗi do thiếu môi trường Firestore có thể lưu và cập nhật tiến độ học tập.
- **Owner nghi ngờ**: Backend / Flashcards / Environment
- **Trạng thái**: `open`

---

### 9. `ITP-QUIZ-001` — QUIZ-02 chấm full issued set và ghi đúng một attempt
- **Test ID**: `ITP-QUIZ-001`
- **Expected**: Nộp đủ 40 câu hỏi đã cấp từ QUIZ-01, Server Action trả về `{ ok: true, data }`, tạo đúng 1 bản ghi `rankings` và tăng `attemptsCount` thêm 1.
- **Actual**: Chưa có môi trường Firestore / Emulator và tài khoản student kiểm thử để thực thi transaction ghi nhận kết quả và xếp hạng.
- **Owner nghi ngờ**: Backend / Quiz / Environment
- **Trạng thái**: `open`

---

### 10. `ITP-E2E-003` — Exam dùng issued set và hiển thị QUIZ-02 envelope
- **Test ID**: `ITP-E2E-003`
- **Expected**: Giao diện Quiz nạp đề thi sạch qua Server Action `QUIZ-01`, nộp bài và render kết quả từ `QUIZ-02` envelope.
- **Actual**: Giao diện Quiz đang tạm dừng thay đổi (STOP) theo cổng quyết định kiến trúc `DECISION-04` (chưa thống nhất contract cho chế độ auto exam và trick mode).
- **Owner nghi ngờ**: Frontend / Quiz (BLOCKED by DECISION-04)
- **Trạng thái**: `open`

---

### 11. `ITP-E2E-004` — Admin report hiển thị Cloud từ backend thật
- **Test ID**: `ITP-E2E-004`
- **Expected**: Bảng báo cáo quản trị hiển thị đầy đủ ma trận tiến độ học tập môn Cloud Computing từ API `GET /api/admin/learning-report`.
- **Actual**: Component `AdminLearningReportTab` đã được nối với API backend thật, nhưng API trả về `HTTP 401 UNAUTHENTICATED` do thiếu session quản trị viên và dữ liệu học viên fixture từ Firestore.
- **Owner nghi ngờ**: Backend / Admin / Environment
- **Trạng thái**: `open`
