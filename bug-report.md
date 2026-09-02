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
- **Retest độc lập (Frontend Verifier)**: PASS (`test:integration:emulator` với Firebase Emulator Suite + Java 21). Trả về đủ 7 chapter Cloud, không yêu cầu quiz.
- **Owner chốt**: Environment / Shared.
- **Trạng thái**: `verified`

---

### 2. `ITP-CAT-004` — Hoàn thành subsection Cloud hợp lệ
- **Test ID**: `ITP-CAT-004`
- **Expected**: HTTP 200, cập nhật một subsection hợp lệ theo catalog và counter chương khi gửi `PUT /api/learning/subsections/:id/completion` kèm session học viên hợp lệ.
- **Re-verify nguyên nhân**: 401 đến từ thiếu session/emulator. Chuỗi `cloud-ch1-s1-overview` ghi trong báo cáo cũ không tồn tại trong catalog; fixture được sửa về ID chính thức `cloud-ch1-s1-scope`, không sửa dữ liệu hoặc contract.
- **Fix vòng 1**: Dùng session thật từ Auth Emulator, Firestore Emulator và fixture ID từ shared catalog.
- **Kết quả tự verify**: HTTP 200; subsection `cloud-ch1-s1-scope` hoàn thành và `completedSubsections` của `cloud-ch1` tăng thành 1.
- **Retest độc lập (Frontend Verifier)**: PASS. Subsection hoàn thành chính xác và bộ đếm tiến độ chương `cloud-ch1` tăng thành 1.
- **Owner chốt**: Environment / Shared test fixture.
- **Trạng thái**: `verified`

---

### 3. `ITP-CAT-005` — Catalog vẫn từ chối ID Cloud không tồn tại
- **Test ID**: `ITP-CAT-005`
- **Expected**: HTTP 404 với error code `CHAPTER_NOT_FOUND` hoặc `SUBSECTION_NOT_FOUND` khi truyền `chapterId=cloud-ch999` hoặc `subsectionId=cloud-missing`.
- **Re-verify nguyên nhân**: Test cũ không có session nên chỉ xác minh được auth guard; chưa thể kết luận catalog cho tới khi gỡ 401.
- **Fix vòng 1**: Chạy negative cases bằng cookie student hợp lệ từ Auth Emulator.
- **Kết quả tự verify**: `cloud-ch999` trả 404 `CHAPTER_NOT_FOUND`; `cloud-missing` trả 404 `SUBSECTION_NOT_FOUND`; không còn bị 401 che.
- **Retest độc lập (Frontend Verifier)**: PASS. Nhận đúng 404 `CHAPTER_NOT_FOUND` và `SUBSECTION_NOT_FOUND` sau khi vượt qua auth guard.
- **Owner chốt**: Environment.
- **Trạng thái**: `verified`

---

### 4. `ITP-CAT-006` — ADMIN-01 tổng hợp được Cloud
- **Test ID**: `ITP-CAT-006`
- **Expected**: HTTP 200, API trả về JSON tổng hợp tiến độ 7 chương Cloud của các học viên fixture khi gọi `GET /api/admin/learning-report?subjectId=cloud-computing`.
- **Re-verify nguyên nhân**: Test environment chưa thực hiện chuỗi AUTH-01 → custom-token exchange → AUTH-02, nên request không có admin session; chưa phải lỗi report.
- **Fix vòng 1**: Harness tạo admin emulator, custom claim `admin`, ID token và cookie theo đúng auth contract; fixture student nằm trong Firestore Emulator.
- **Kết quả tự verify**: HTTP 200; tìm thấy student fixture, subject Cloud có đủ 7 chương và `summary.totalUsers=1`.
- **Retest độc lập (Frontend Verifier)**: PASS. Nhận HTTP 200, tổng hợp đầy đủ tiến độ học tập 7 chương Cloud của student fixture từ Firestore Emulator.
- **Owner chốt**: Environment / Shared.
- **Trạng thái**: `verified`

---

### 5. `ITP-FC-002` — FLASH-01 trả thẻ chưa học là đến hạn
- **Test ID**: `ITP-FC-002`
- **Expected**: HTTP 200, `dueCount = 12`, `cards.length = 12` khi gọi `GET /api/learning/flashcards/due?subjectId=cloud-computing&limit=100` với học viên chưa có tiến độ.
- **Re-verify nguyên nhân**: 401 phát sinh trước flashcard service do thiếu session test; không đủ căn cứ kết luận catalog/due logic.
- **Fix vòng 1**: Chạy FLASH-01 bằng student cookie thật và Firestore Emulator rỗng.
- **Kết quả tự verify**: HTTP 200, `dueCount=12`, `cards.length=12`.
- **Retest độc lập (Frontend Verifier)**: PASS. Trả về đúng 12 thẻ đến hạn cho student mới.
- **Owner chốt**: Environment.
- **Trạng thái**: `verified`

---

### 6. `ITP-FC-003` — FLASH-01 tôn trọng limit nhưng giữ tổng dueCount
- **Test ID**: `ITP-FC-003`
- **Expected**: HTTP 200, `cards.length = 5`, `dueCount = 12` khi truyền tham số `limit=5`.
- **Re-verify nguyên nhân**: Giống ITP-FC-002; request cũ chưa đi qua auth guard nên chưa chạm logic limit.
- **Fix vòng 1**: Chạy case `limit=5` trong cùng emulator fixture.
- **Kết quả tự verify**: HTTP 200, `cards.length=5`, `dueCount=12`.
- **Retest độc lập (Frontend Verifier)**: PASS. `cards.length` giới hạn đúng 5 thẻ và `dueCount` giữ nguyên 12.
- **Owner chốt**: Environment.
- **Trạng thái**: `verified`

---

### 7. `ITP-FC-004` — FLASH-02 review đúng card và đúng subsection
- **Test ID**: `ITP-FC-004`
- **Expected**: HTTP 200, cập nhật `flashcardProgress` và tạo `reviewItem` gắn lý do `FLASHCARD_AGAIN` khi gọi `POST /api/learning/flashcards/cloud_fc_01/reviews`.
- **Re-verify nguyên nhân**: Thiếu session/emulator chặn trước transaction; chưa thể kết luận flashcard linkage ở lần chạy cũ.
- **Fix vòng 1**: Chạy FLASH-02 bằng student cookie thật trên Firestore Emulator.
- **Kết quả tự verify**: HTTP 200; `cloud_fc_01` liên kết đúng `cloud-ch1-s2-features` và thêm system reason `FLASHCARD_AGAIN`.
- **Retest độc lập (Frontend Verifier)**: PASS. Review cập nhật tiến độ, liên kết chính xác `cloud-ch1-s2-features` và system reason `FLASHCARD_AGAIN`.
- **Owner chốt**: Environment / Shared.
- **Trạng thái**: `verified`

---

### 8. `ITP-FC-006` — Learning state phản ánh dueCount sau review
- **Test ID**: `ITP-FC-006`
- **Expected**: `FLASH-01` và `learningState.flashcards.dueCount` đồng bộ giảm và hiển thị đúng số thẻ còn hạn sau khi hoàn thành review.
- **Re-verify nguyên nhân**: Thiếu Firestore Emulator làm chuỗi review → due list → learning state không thể chạy; không có bằng chứng lỗi đồng bộ sâu hơn.
- **Fix vòng 1**: Harness giữ cùng fixture/session qua FLASH-02, FLASH-01 và LEARN-01.
- **Kết quả tự verify**: Sau rating `again`, FLASH-01 và `learningState.flashcards.dueCount` cùng bằng 11.
- **Retest độc lập (Frontend Verifier)**: PASS. Cả hai API `FLASH-01` và `LEARN-01` đồng bộ giảm `dueCount` về 11 sau khi review thẻ.
- **Owner chốt**: Environment / Shared.
- **Trạng thái**: `verified`

---

### 9. `ITP-QUIZ-001` — QUIZ-02 chấm full issued set và ghi đúng một attempt
- **Test ID**: `ITP-QUIZ-001`
- **Expected**: Nộp đủ 40 câu hỏi đã cấp từ QUIZ-01, Server Action trả về `{ ok: true, data }`, tạo đúng 1 bản ghi `rankings` và tăng `attemptsCount` thêm 1.
- **Re-verify nguyên nhân**: Auth và Firestore Emulator đều hoạt động; thiếu sót còn lại đúng là test harness chưa gọi Server Action qua transport thật. Không tìm thấy lỗi trong `submitExamScore` khi chạy fixed set ngoài phạm vi DECISION-04.
- **Fix vòng 1**: Bổ sung Server Action harness đọc action ID từ manifest Next.js, mã hóa/giải mã React Server Components payload, giữ cookie student thật và gọi QUIZ-01 → QUIZ-02. Harness kiểm tra cả response envelope lẫn side effect trong Firestore Emulator.
- **Kết quả tự verify**: QUIZ-01 với `tu-tuong-hcm/chuong-2/de-1` trả đúng 40 câu, không lộ `answer`/`explanation`; QUIZ-02 trả `{ok:true,data}`, `total=40`, `attemptsCount=1`; có đúng 1 ranking và quiz summary có `attemptsCount=1`, `bestScore10=0`.
- **Retest độc lập (Frontend Verifier)**: PASS (`test:integration:emulator` với Firebase Emulator Suite + Java 21). Gọi QUIZ-01 (`getExamQuestions`) nhận 40 câu hỏi sạch, gọi QUIZ-02 (`submitExamScore`) qua Next.js Server Action transport nhận `{ ok: true, data }`, `total=40`, `attemptsCount=1`; xác minh trực tiếp Firestore Emulator tạo đúng 1 bản ghi `rankings` và cập nhật `quizSummary.attemptsCount=1`, `bestScore10=0`.
- **Owner chốt**: Backend test coverage; không phụ thuộc 401 nữa.
- **Trạng thái**: `verified`

---

### 10. `ITP-E2E-003` — Exam dùng issued set và hiển thị QUIZ-02 envelope
- **Test ID**: `ITP-E2E-003`
- **Expected**: Giao diện Quiz nạp đề thi sạch qua Server Action `QUIZ-01`, nộp bài và render kết quả từ `QUIZ-02` envelope.
- **Actual**: Giao diện Quiz đang tạm dừng thay đổi (STOP) theo cổng quyết định kiến trúc `DECISION-04` (chưa thống nhất contract cho chế độ auto exam và trick mode).
- **Re-verify nguyên nhân — auto exam**: FE hiểu `examSetId="auto"` là tự lấy ngẫu nhiên khoảng 40 câu từ `inside/outside`; BE hiểu cùng giá trị là toàn bộ `inside + outside`. QUIZ-02 hiện bắt `questionsState` khớp toàn bộ pool BE, vì vậy đề 40 câu do FE chọn sẽ bị `QUESTION_SET_MISMATCH`. Contract hiện không có attempt ID/ticket/seed để BE biết chính xác tập ngẫu nhiên QUIZ-01 đã cấp.
- **Re-verify nguyên nhân — trick mode**: FE phát sinh `"trick"`, `"trick-1"`, `"trick-2"` và truyền thêm `isTrickMode`. BE chỉ lọc theo `trickSet` khi parse được số và ngân hàng có tag; nếu không thì trả toàn bộ tricks. Do đó chuỗi tùy ý, `"trick-x"`, `"0"`, hoặc `"auto"` kết hợp `isTrickMode=true` đều có thể vô tình được hiểu là “toàn bộ”. Ngược lại, ngân hàng không gắn `trickSet` khiến `"trick-1"` cũng trở thành toàn bộ. Khi ghi ranking, BE luôn ép mọi trick set về `examSetId="trick"`, làm mất thông tin bộ 1/2.
- **Re-verify nguyên nhân — luồng chung**: FE hiện vẫn tự đọc ngân hàng câu hỏi, chưa gọi QUIZ-01 và đọc QUIZ-02 theo schema cũ (`res.score` thay vì `res.data.score`). Đây là phần sửa FE đã xác định được, nhưng chưa thể hoàn tất đúng nghĩa cho auto/trick trước khi chốt cách biểu diễn issued set.

#### Các phương án contract cho DECISION-04

1. **Chỉ dùng fixed set, bỏ auto và sentinel tổng**: chỉ chấp nhận `"de-{N}"` khi `isTrickMode=false` và `"trick-{N}"` khi `isTrickMode=true`.
   - **FE**: bỏ nút đề ngẫu nhiên; chỉ render các set tồn tại; ngân hàng trick không có tag cần một lựa chọn quy ước riêng hoặc không hiển thị.
   - **BE**: whitelist cặp mode/ID, reject mọi tổ hợp khác; QUIZ-01/02 vẫn tái tạo cùng pool mà không cần field mới.
   - **Dữ liệu**: ngân hàng trick chưa có `trickSet` cần được coi là một set mặc định bằng logic adapter, hoặc phải bổ sung dữ liệu sau khi được phép; ranking giữ đúng ID cụ thể.
   - **Đánh đổi**: ít thay đổi contract nhất và chắc chắn, nhưng loại bỏ chức năng “Đề ngẫu nhiên” đang có trên UI.

2. **Giữ schema hiện tại nhưng auto phải tất định**: namespace hợp lệ là `"auto" | "de-{N}" | "trick" | "trick-{N}"`; `isTrickMode` phải tương thích với ID. `"auto"` được BE suy ra thành một tập 40 câu tất định từ user/subject/chapter, không random lại mỗi attempt.
   - **FE**: gọi QUIZ-01 và dùng nguyên tập trả về; gửi lại cùng selector khi nộp; đổi mô tả “ngẫu nhiên” thành “đề tự động/cá nhân hóa cố định” nếu cần.
   - **BE**: thêm strict validation và thuật toán tất định giống nhau ở QUIZ-01/02; giữ `"trick"` cho toàn bộ ngân hàng không chia set, `"trick-{N}"` chỉ cho tag tồn tại.
   - **Dữ liệu**: không cần collection mới hay sửa file `data/`; ranking phải lưu nguyên selector thay vì ép mọi trick về `"trick"`.
   - **Đánh đổi**: không thêm field contract, nhưng “auto” không còn là đề ngẫu nhiên mới theo từng lượt.

3. **Issued-set ticket có chữ ký, không lưu attempt trước khi nộp**: QUIZ-01 trả thêm `examTicket` chứa/đại diện cho selector và danh sách ID đã cấp; QUIZ-02 bắt buộc nhận lại ticket. Namespace vẫn whitelist `"auto"`, `"de-{N}"`, `"trick"`, `"trick-{N}"`.
   - **FE**: lưu `examTicket` cùng quiz/resume state; nộp ticket với `questionsState`; không tự sample đề thi.
   - **BE**: QUIZ-01 random đúng ma trận rồi ký ticket; QUIZ-02 xác minh chữ ký, hạn dùng, subject/chapter/mode và exact IDs trước khi chấm; cần secret ký ổn định giữa các instance.
   - **Dữ liệu**: không cần collection attempt mới và không sửa ngân hàng; ranking lưu selector thật. Ticket hết hạn cần được tính đến cho chức năng resume.
   - **Đánh đổi**: giữ đúng trải nghiệm random và bảo mật issued set với ít ghi Firestore hơn, nhưng thay request/response contract và thêm cấu hình secret.

4. **Issued attempt lưu Firestore**: QUIZ-01 tạo `attemptId`, lưu selector + exact question IDs + expiry/status; QUIZ-02 nhận `attemptId` và chỉ chấm một lần.
   - **FE**: lưu `attemptId` trong resume state và gửi khi nộp; xử lý attempt hết hạn/đã nộp.
   - **BE**: thêm lifecycle tạo/nộp attempt, transaction chống replay, cleanup/TTL và error codes tương ứng.
   - **Dữ liệu**: thêm collection/subcollection quiz attempts, TTL/index/rules hoặc chỉ cho Admin SDK truy cập; ranking tham chiếu attempt và selector cụ thể.
   - **Đánh đổi**: mạnh nhất về audit, resume và chống nộp lặp, nhưng thay đổi lớn nhất.

5. **Cho client gửi bất kỳ subset 40 câu hợp lệ**: QUIZ-02 kiểm tra mỗi ID thuộc ngân hàng và đúng số lượng/ma trận thay vì exact issued set.
   - **FE**: có thể giữ sampling hiện tại, chỉ cần sửa envelope/action flow.
   - **BE**: nới validation full-pool thành subset validation.
   - **Dữ liệu**: không cần schema mới.
   - **Đánh đổi**: không chứng minh được tập đó thực sự do QUIZ-01 cấp, làm yếu yêu cầu bảo mật đã chốt; không khuyến nghị.

- **Đề xuất kỹ thuật (chưa phải quyết định)**: Phương án 3 phù hợp nhất nếu vẫn muốn “Đề ngẫu nhiên” đúng nghĩa. Nó giữ QUIZ-01 là nguồn cấp đề an toàn và QUIZ-02 chấm chính xác issued set như `plan.md`, không cần sửa/migrate ngân hàng dữ liệu, đồng thời ít trạng thái server hơn phương án 4. Nếu ưu tiên tuyệt đối không đổi schema thì phương án 2 là lựa chọn gần code hiện tại nhất, với đánh đổi rõ ràng rằng auto không random theo từng lượt.
- **Owner chốt**: Frontend / Shared contract decision.
- **Trạng thái**: `open`

---

### 11. `ITP-E2E-004` — Admin report hiển thị Cloud từ backend thật
- **Test ID**: `ITP-E2E-004`
- **Expected**: Bảng báo cáo quản trị hiển thị đầy đủ ma trận tiến độ học tập môn Cloud Computing từ API `GET /api/admin/learning-report`.
- **Re-verify nguyên nhân**: FE đã gọi API thật; blocker quan sát được là test environment chưa tạo admin cookie và student Firestore fixture. Không sửa component trong vòng này.
- **Fix vòng 1**: Bổ sung admin session/fixture qua Emulator Suite và kiểm tra trực tiếp ADMIN-01.
- **Kết quả tự verify**: Backend API trả HTTP 200 với student Cloud/7 chương. Phần render UI để verifier Frontend chạy lại.
- **Retest độc lập (Frontend Verifier)**: PASS. Backend API `GET /api/admin/learning-report` trả HTTP 200, cung cấp đầy đủ dữ liệu người dùng và tiến độ 7 chương Cloud, component Frontend `AdminLearningReportTab` nhận và hiển thị dữ liệu thật thành công.
- **Owner chốt**: Environment (phần 401); Frontend chỉ còn bước verify E2E.
- **Trạng thái**: `verified`
