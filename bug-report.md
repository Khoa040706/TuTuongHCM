# Báo cáo Lỗi Tích hợp (Bug Report — Integration Test Suite)

Tài liệu này ghi nhận toàn bộ các test case có kết quả `FAIL` sau khi thực thi toàn diện 34 test case trong [`integration-test-plan.md`](./integration-test-plan.md).
Nguyên tắc kiểm thử: **Không sửa mã nguồn trong quá trình kiểm thử**.

---

## Danh sách Lỗi Phát hiện Được (Open Defects)

### 1. `ITP-CAT-003` — LEARN-01 trả đủ 7 chương Cloud cho student mới
- **Test ID**: `ITP-CAT-003`
- **Expected**: HTTP 200, `{ ok: true, data: { chapters: [7 chapters] } }` khi gọi `GET /api/learning/state?subjectId=cloud-computing` với session của học viên mới.
- **Re-verify nguyên nhân**: Route cố ý yêu cầu session trước khi đọc catalog; 401 đến từ test environment chưa có Auth Emulator/session bootstrap, không phải bằng chứng lỗi catalog.
- **Fix vòng 1**: Bổ sung Auth + Firestore Emulator, tạo Firebase student ID token rồi trao đổi qua AUTH-02 để nhận cookie thật; không bypass `requireSession()`.
- **Kết quả tự verify**: HTTP 200, đúng 7 chapter `cloud-ch1..cloud-ch7`, tất cả `quizRequired=false`.
- **Owner chốt**: Environment / Shared.
- **Trạng thái**: `fixed_pending_verify`

---

### 2. `ITP-CAT-004` — Hoàn thành subsection Cloud hợp lệ
- **Test ID**: `ITP-CAT-004`
- **Expected**: HTTP 200, cập nhật một subsection hợp lệ theo catalog và counter chương khi gửi `PUT /api/learning/subsections/:id/completion` kèm session học viên hợp lệ.
- **Re-verify nguyên nhân**: 401 đến từ thiếu session/emulator. Chuỗi `cloud-ch1-s1-overview` ghi trong báo cáo cũ không tồn tại trong catalog; fixture được sửa về ID chính thức `cloud-ch1-s1-scope`, không sửa dữ liệu hoặc contract.
- **Fix vòng 1**: Dùng session thật từ Auth Emulator, Firestore Emulator và fixture ID từ shared catalog.
- **Kết quả tự verify**: HTTP 200; subsection `cloud-ch1-s1-scope` hoàn thành và `completedSubsections` của `cloud-ch1` tăng thành 1.
- **Owner chốt**: Environment / Shared test fixture.
- **Trạng thái**: `fixed_pending_verify`

---

### 3. `ITP-CAT-005` — Catalog vẫn từ chối ID Cloud không tồn tại
- **Test ID**: `ITP-CAT-005`
- **Expected**: HTTP 404 với error code `CHAPTER_NOT_FOUND` hoặc `SUBSECTION_NOT_FOUND` khi truyền `chapterId=cloud-ch999` hoặc `subsectionId=cloud-missing`.
- **Re-verify nguyên nhân**: Test cũ không có session nên chỉ xác minh được auth guard; chưa thể kết luận catalog cho tới khi gỡ 401.
- **Fix vòng 1**: Chạy negative cases bằng cookie student hợp lệ từ Auth Emulator.
- **Kết quả tự verify**: `cloud-ch999` trả 404 `CHAPTER_NOT_FOUND`; `cloud-missing` trả 404 `SUBSECTION_NOT_FOUND`; không còn bị 401 che.
- **Owner chốt**: Environment.
- **Trạng thái**: `fixed_pending_verify`

---

### 4. `ITP-CAT-006` — ADMIN-01 tổng hợp được Cloud
- **Test ID**: `ITP-CAT-006`
- **Expected**: HTTP 200, API trả về JSON tổng hợp tiến độ 7 chương Cloud của các học viên fixture khi gọi `GET /api/admin/learning-report?subjectId=cloud-computing`.
- **Re-verify nguyên nhân**: Test environment chưa thực hiện chuỗi AUTH-01 → custom-token exchange → AUTH-02, nên request không có admin session; chưa phải lỗi report.
- **Fix vòng 1**: Harness tạo admin emulator, custom claim `admin`, ID token và cookie theo đúng auth contract; fixture student nằm trong Firestore Emulator.
- **Kết quả tự verify**: HTTP 200; tìm thấy student fixture, subject Cloud có đủ 7 chương và `summary.totalUsers=1`.
- **Owner chốt**: Environment / Shared.
- **Trạng thái**: `fixed_pending_verify`

---

### 5. `ITP-FC-002` — FLASH-01 trả thẻ chưa học là đến hạn
- **Test ID**: `ITP-FC-002`
- **Expected**: HTTP 200, `dueCount = 12`, `cards.length = 12` khi gọi `GET /api/learning/flashcards/due?subjectId=cloud-computing&limit=100` với học viên chưa có tiến độ.
- **Re-verify nguyên nhân**: 401 phát sinh trước flashcard service do thiếu session test; không đủ căn cứ kết luận catalog/due logic.
- **Fix vòng 1**: Chạy FLASH-01 bằng student cookie thật và Firestore Emulator rỗng.
- **Kết quả tự verify**: HTTP 200, `dueCount=12`, `cards.length=12`.
- **Owner chốt**: Environment.
- **Trạng thái**: `fixed_pending_verify`

---

### 6. `ITP-FC-003` — FLASH-01 tôn trọng limit nhưng giữ tổng dueCount
- **Test ID**: `ITP-FC-003`
- **Expected**: HTTP 200, `cards.length = 5`, `dueCount = 12` khi truyền tham số `limit=5`.
- **Re-verify nguyên nhân**: Giống ITP-FC-002; request cũ chưa đi qua auth guard nên chưa chạm logic limit.
- **Fix vòng 1**: Chạy case `limit=5` trong cùng emulator fixture.
- **Kết quả tự verify**: HTTP 200, `cards.length=5`, `dueCount=12`.
- **Owner chốt**: Environment.
- **Trạng thái**: `fixed_pending_verify`

---

### 7. `ITP-FC-004` — FLASH-02 review đúng card và đúng subsection
- **Test ID**: `ITP-FC-004`
- **Expected**: HTTP 200, cập nhật `flashcardProgress` và tạo `reviewItem` gắn lý do `FLASHCARD_AGAIN` khi gọi `POST /api/learning/flashcards/cloud_fc_01/reviews`.
- **Re-verify nguyên nhân**: Thiếu session/emulator chặn trước transaction; chưa thể kết luận flashcard linkage ở lần chạy cũ.
- **Fix vòng 1**: Chạy FLASH-02 bằng student cookie thật trên Firestore Emulator.
- **Kết quả tự verify**: HTTP 200; `cloud_fc_01` liên kết đúng `cloud-ch1-s2-features` và thêm system reason `FLASHCARD_AGAIN`.
- **Owner chốt**: Environment / Shared.
- **Trạng thái**: `fixed_pending_verify`

---

### 8. `ITP-FC-006` — Learning state phản ánh dueCount sau review
- **Test ID**: `ITP-FC-006`
- **Expected**: `FLASH-01` và `learningState.flashcards.dueCount` đồng bộ giảm và hiển thị đúng số thẻ còn hạn sau khi hoàn thành review.
- **Re-verify nguyên nhân**: Thiếu Firestore Emulator làm chuỗi review → due list → learning state không thể chạy; không có bằng chứng lỗi đồng bộ sâu hơn.
- **Fix vòng 1**: Harness giữ cùng fixture/session qua FLASH-02, FLASH-01 và LEARN-01.
- **Kết quả tự verify**: Sau rating `again`, FLASH-01 và `learningState.flashcards.dueCount` cùng bằng 11.
- **Owner chốt**: Environment / Shared.
- **Trạng thái**: `fixed_pending_verify`

---

### 9. `ITP-QUIZ-001` — QUIZ-02 chấm full issued set và ghi đúng một attempt
- **Test ID**: `ITP-QUIZ-001`
- **Expected**: Nộp đủ 40 câu hỏi đã cấp từ QUIZ-01, Server Action trả về `{ ok: true, data }`, tạo đúng 1 bản ghi `rankings` và tăng `attemptsCount` thêm 1.
- **Re-verify nguyên nhân**: Blocker Auth/Firestore Emulator đã được gỡ, nhưng vòng này chưa có Server Action harness cấp/nộp một fixed set hoàn chỉnh. Theo nguyên tắc không kết luận lỗi sâu hơn khi chưa chạy đúng transport, chưa khẳng định transaction quiz đúng hoặc sai.
- **Owner chốt**: Backend test coverage; không phụ thuộc 401 nữa.
- **Trạng thái**: `open`

---

### 10. `ITP-E2E-003` — Exam dùng issued set và hiển thị QUIZ-02 envelope
- **Test ID**: `ITP-E2E-003`
- **Expected**: Giao diện Quiz nạp đề thi sạch qua Server Action `QUIZ-01`, nộp bài và render kết quả từ `QUIZ-02` envelope.
- **Actual**: Giao diện Quiz đang tạm dừng thay đổi (STOP) theo cổng quyết định kiến trúc `DECISION-04` (chưa thống nhất contract cho chế độ auto exam và trick mode).
- **Re-verify nguyên nhân**: Đây là luồng Frontend và vẫn bị `DECISION-04` che; vòng Backend/Environment không được tự chọn namespace/selector contract.
- **Owner chốt**: Frontend / Shared contract decision.
- **Trạng thái**: `open`

---

### 11. `ITP-E2E-004` — Admin report hiển thị Cloud từ backend thật
- **Test ID**: `ITP-E2E-004`
- **Expected**: Bảng báo cáo quản trị hiển thị đầy đủ ma trận tiến độ học tập môn Cloud Computing từ API `GET /api/admin/learning-report`.
- **Re-verify nguyên nhân**: FE đã gọi API thật; blocker quan sát được là test environment chưa tạo admin cookie và student Firestore fixture. Không sửa component trong vòng này.
- **Fix vòng 1**: Bổ sung admin session/fixture qua Emulator Suite và kiểm tra trực tiếp ADMIN-01.
- **Kết quả tự verify**: Backend API trả HTTP 200 với student Cloud/7 chương. Phần render UI để verifier Frontend chạy lại.
- **Owner chốt**: Environment (phần 401); Frontend chỉ còn bước verify E2E.
- **Trạng thái**: `fixed_pending_verify`
