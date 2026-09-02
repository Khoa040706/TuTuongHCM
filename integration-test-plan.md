# Integration Test Plan — Backend/Shared Repairs

## 1. Mục tiêu và phạm vi

Tài liệu này verify ba repair đã được đánh dấu `VERIFIED` trong `integration-repair-plan.md`:

| Repair | Mismatch được sửa | Phạm vi kiểm thử |
|---|---|---|
| `REPAIR-SHARED-01` | `INT-08`, `INT-33`, `DOC-03` | Catalog Cloud dùng chung, learning state, completion và report. |
| `REPAIR-SHARED-02` | `INT-09`, phần nguồn dữ liệu của `INT-25/32` | Catalog flashcard Cloud, due list, review và review linkage. |
| `REPAIR-BE-01` | `INT-14` | QUIZ-02 chỉ nhận đúng toàn bộ question set đã cấp. |

Không kiểm thử như một yêu cầu đã hoàn thành đối với bốn `NEED_DECISION` trong repair plan. Practice semantics, trick `examSetId`, migration dữ liệu tài khoản và admin user-management chỉ được test sau khi contract được chốt.

## 2. Quy ước kết quả

- Mỗi case có đúng một kết quả cuối: `PASS` hoặc `FAIL`.
- `BLOCKED_NOT_RUN` không phải kết quả đạt; sau khi gỡ dependency, tester bắt buộc chạy lại và đánh dấu một trong hai ô `PASS/FAIL`.
- Case tự động đã chạy trong tranche sửa trước được đánh dấu `PASS (evidence)` và ghi lệnh/bằng chứng.
- Nếu `FAIL`, ghi actual result, log/error code, môi trường, commit và liên kết defect ngay dưới case.
- Không dùng Firebase production. API/Firestore case phải chạy trên emulator hoặc Firebase project kiểm thử có thể reset.

## 3. Test data và precondition chung

1. Node.js và dependencies đúng `package-lock.json`.
2. Firebase Admin/Web SDK cùng trỏ tới emulator hoặc project kiểm thử.
3. Có ba session kiểm thử: `student`, `admin` và unauthenticated; cookie là `studymaster_session`.
4. Student test có thể reset các subcollection: `subsectionProgress`, `chapterProgress`, `flashcardProgress`, `reviewItems`, `quizSummary`; collection `rankings` dùng namespace/UID test.
5. Không sửa file hiện hữu trong `data/` để dựng fixture.
6. Quiz security case dùng một môn/chương có fixed exam set hợp lệ, không dùng Practice, `auto` hoặc trick mode để tránh các contract đang `NEED_DECISION`.

## 4. Catalog Cloud và learning/report

### ITP-CAT-001 — Shared adapter có đủ catalog Cloud chuẩn

- **Precondition:** Checkout chứa 7 module `data/cloud-computing-chapter-1.js` đến `-7.js`; không thay đổi dữ liệu trong lúc test.
- **Steps:**
  1. Nạp/kiểm tra 7 module nguồn và catalog ghép `lib/curriculum.js` qua server build.
  2. Thu thập chapter ID và toàn bộ subsection ID.
  3. Kiểm tra `lib/server/content-catalog.js` sử dụng adapter chung, không import thẳng `data/index.js`.
- **Expected:** Có đúng 7 chapter ID `cloud-ch1..cloud-ch7`, 64 subsection ID duy nhất; backend build resolve cùng adapter với FE.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — evidence: kiểm tra nguồn trả 7 chương/64 subsection và production build thành công.

### ITP-CAT-002 — ID set FE và BE giống nhau

- **Precondition:** Có test harness có thể gọi `subjects["cloud-computing"]` của shared adapter và `listSubjectChapters/listChapterSubsections` phía server.
- **Steps:**
  1. Lấy tập `{chapterId, sectionId, subsectionId}` từ catalog FE.
  2. Lấy cùng tập qua server catalog.
  3. So sánh hai tập không phụ thuộc thứ tự.
- **Expected:** Hai tập bằng nhau tuyệt đối; không thiếu, thừa hoặc trùng ID.
- **PASS/FAIL:** ☐ PASS ☐ FAIL — `NOT_RUN`.

### ITP-CAT-003 — LEARN-01 trả đủ 7 chương Cloud cho student mới

- **Precondition:** Student có session hợp lệ và chưa có progress Cloud.
- **Steps:**
  1. Gọi `GET /api/learning/state?subjectId=cloud-computing` kèm cookie.
  2. Kiểm tra HTTP status và success envelope.
  3. Đối chiếu `data.chapters` với catalog.
- **Expected:** HTTP 200; `{ok:true}`; `subjectId` đúng; đúng 7 chapter; tổng subsection từng chương đúng catalog; `quizRequired:false`, `completed:false`; không trả `SUBJECT_NOT_FOUND`.
- **PASS/FAIL:** ☐ PASS ☐ FAIL — `NOT_RUN`.

### ITP-CAT-004 — Hoàn thành subsection Cloud hợp lệ

- **Precondition:** Student session hợp lệ; chọn một subsection thật từ mỗi chương; trạng thái test đã reset.
- **Steps:**
  1. Với từng subsection, gọi LEARN-02 bằng đúng `subjectId/chapterId/sectionId`, `reachedEnd:true`.
  2. Gọi lại LEARN-01.
  3. Đối chiếu completion được ghi cho đúng subsection/chapter.
- **Expected:** Không có `CHAPTER_NOT_FOUND` hoặc `SUBSECTION_NOT_FOUND`; mỗi request trả đúng subsection; counter chương tăng chính xác và không ảnh hưởng chương khác.
- **PASS/FAIL:** ☐ PASS ☐ FAIL — `NOT_RUN`.

### ITP-CAT-005 — Catalog vẫn từ chối ID Cloud không tồn tại

- **Precondition:** Student session hợp lệ.
- **Steps:**
  1. Gọi LEARN-02 với `chapterId=cloud-ch999`.
  2. Gọi lại với chapter thật nhưng `subsectionId=cloud-missing`.
- **Expected:** Lần 1 trả 404 `CHAPTER_NOT_FOUND`; lần 2 trả 404 `SUBSECTION_NOT_FOUND`; không tạo document Firestore.
- **PASS/FAIL:** ☐ PASS ☐ FAIL — `NOT_RUN`.

### ITP-CAT-006 — ADMIN-01 tổng hợp được Cloud

- **Precondition:** Admin session hợp lệ; có ít nhất một student fixture với progress Cloud ở hai chương.
- **Steps:**
  1. Gọi `GET /api/admin/learning-report?subjectId=cloud-computing`.
  2. Tìm student fixture và duyệt các chapter row.
  3. Đối chiếu counter với Firestore fixture và catalog.
- **Expected:** HTTP 200; report có subject Cloud và đủ 7 chương; `totalRequiredSubsections`, `completedSubsections`, `completed`, review count và due count đúng; không bỏ mất Cloud.
- **PASS/FAIL:** ☐ PASS ☐ FAIL — `NOT_RUN`.

### ITP-CAT-007 — Regression catalog các môn cũ

- **Precondition:** Snapshot ID/catalog của các môn trước repair hoặc baseline từ `data/index.js`.
- **Steps:**
  1. Liệt kê các subject không phải Cloud qua backend catalog.
  2. So sánh chapter/question map với baseline.
  3. Gọi LEARN-01 cho ít nhất một môn cũ có quiz và một môn không quiz.
- **Expected:** Không mất subject/chapter/question map; `chapterRequiresQuiz` không đổi; response learning state vẫn đúng schema.
- **PASS/FAIL:** ☐ PASS ☐ FAIL — `NOT_RUN`.

## 5. Flashcard Cloud

### ITP-FC-001 — Registry flashcard và liên kết subsection hợp lệ

- **Precondition:** Dữ liệu Cloud hiện tại không bị sửa.
- **Steps:**
  1. Lấy toàn bộ `cloudFlashcards`.
  2. Kiểm tra tính duy nhất của `cardId`.
  3. Kiểm tra từng `chapterId/subsectionId` tồn tại trong catalog Cloud.
- **Expected:** Có 12 card ID duy nhất; 12/12 card liên kết chapter/subsection hợp lệ; đủ các field FLASH-01 bắt buộc.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — evidence: kiểm tra nguồn trả 12 card và `invalidCardLinks=[]`.

### ITP-FC-002 — FLASH-01 trả thẻ chưa học là đến hạn

- **Precondition:** Student session hợp lệ; không có `flashcardProgress` cho Cloud.
- **Steps:**
  1. Gọi `GET /api/learning/flashcards/due?subjectId=cloud-computing&limit=100`.
  2. Kiểm tra envelope, due count và từng card.
- **Expected:** HTTP 200; `dueCount=12`; `cards.length=12`; nội dung/card metadata đúng nguồn; state mặc định `repetitions=0`, `intervalDays=0`, `easeFactor=2.5`, `nextReviewAt=null`.
- **PASS/FAIL:** ☐ PASS ☐ FAIL — `NOT_RUN`.

### ITP-FC-003 — FLASH-01 tôn trọng limit nhưng giữ tổng dueCount

- **Precondition:** Như ITP-FC-002.
- **Steps:** Gọi FLASH-01 với `limit=5`.
- **Expected:** HTTP 200; `cards.length=5`; `dueCount=12`; không lặp card.
- **PASS/FAIL:** ☐ PASS ☐ FAIL — `NOT_RUN`.

### ITP-FC-004 — FLASH-02 review đúng card và đúng subsection

- **Precondition:** Student session hợp lệ; chọn `cloud_fc_01`; reset progress/review item tương ứng.
- **Steps:**
  1. Gọi `POST /api/learning/flashcards/cloud_fc_01/reviews` với `{subjectId:"cloud-computing", rating:"again"}`.
  2. Đọc response và hai document `flashcardProgress`, `reviewItems` của student.
- **Expected:** HTTP 200; response `cardId=cloud_fc_01`, rating/schedule hợp lệ; `reviewItem.subsectionId=cloud-ch1-s2-features`; Firestore chỉ cập nhật đúng card/subsection; có system reason `FLASHCARD_AGAIN`.
- **PASS/FAIL:** ☐ PASS ☐ FAIL — `NOT_RUN`.

### ITP-FC-005 — FLASH-02 từ chối card không tồn tại

- **Precondition:** Student session hợp lệ; chụp số document trước test.
- **Steps:** Gọi FLASH-02 với `cardId=cloud_fc_missing` và subject Cloud.
- **Expected:** HTTP 404, error code `FLASHCARD_NOT_FOUND`; không tạo flashcard progress/review item.
- **PASS/FAIL:** ☐ PASS ☐ FAIL — `NOT_RUN`.

### ITP-FC-006 — Learning state phản ánh dueCount sau review

- **Precondition:** Hoàn thành ITP-FC-004; thời điểm test trước `nextReviewAt`.
- **Steps:**
  1. Gọi FLASH-01 và LEARN-01 ngay sau review.
  2. So sánh `dueCount` giữa hai response.
- **Expected:** Card vừa review không còn trong danh sách due; FLASH-01 và `learningState.flashcards.dueCount` bằng nhau; review queue trỏ đúng subsection.
- **PASS/FAIL:** ☐ PASS ☐ FAIL — `NOT_RUN`.

### ITP-FC-007 — Regression flashcard môn cũ

- **Precondition:** Có ít nhất một môn cũ chứa flashcard embedded hoặc baseline xác nhận không có card.
- **Steps:**
  1. Gọi FLASH-01 cho môn cũ.
  2. So sánh danh sách với baseline trước repair.
  3. Nếu có card, review một card trên fixture riêng.
- **Expected:** Cơ chế quét flashcard embedded cũ không đổi; không trộn card Cloud sang subject khác; review linkage vẫn đúng.
- **PASS/FAIL:** ☐ PASS ☐ FAIL — `NOT_RUN`.

## 6. Quiz question-set integrity

### ITP-QV-001 — Chấp nhận toàn bộ ID khác thứ tự

- **Precondition:** Unit fixture expected `[q1,q2,q3]`.
- **Steps:** Chạy `inspectQuestionSetIds(expected, [q3,q1,q2])`.
- **Expected:** Trả `MATCH`.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — `tests/learning/quiz-validation.test.js`.

### ITP-QV-002 — Từ chối subset

- **Precondition:** Unit fixture expected `[q1,q2,q3]`.
- **Steps:** Chạy validation với submitted `[q1]`.
- **Expected:** Trả `MISMATCH`.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — `tests/learning/quiz-validation.test.js`.

### ITP-QV-003 — Từ chối ID ngoài đề dù số lượng bằng nhau

- **Precondition:** Unit fixture expected `[q1,q2,q3]`.
- **Steps:** Chạy validation với `[q1,q2,other]`.
- **Expected:** Trả `MISMATCH`.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — `tests/learning/quiz-validation.test.js`.

### ITP-QV-004 — Phân biệt duplicate ID

- **Precondition:** Unit fixture expected `[q1,q2,q3]`.
- **Steps:** Chạy validation với `[q1,q1,q2]`.
- **Expected:** Trả `DUPLICATE_SUBMITTED_ID`.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — `tests/learning/quiz-validation.test.js`.

### ITP-QV-005 — Từ chối tập rỗng

- **Precondition:** Unit fixture rỗng.
- **Steps:** Chạy validation với expected/submitted đều rỗng.
- **Expected:** Trả `MISMATCH`.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — `tests/learning/quiz-validation.test.js`.

### ITP-QUIZ-001 — QUIZ-02 chấm full issued set và ghi đúng một attempt

- **Precondition:** Student session hợp lệ; lấy fixed set sạch và `examTicket` bằng QUIZ-01; reset quiz fixture.
- **Steps:**
  1. Tạo `clientAnswers` đủ số câu QUIZ-01 trả về.
  2. Gọi QUIZ-02 với `examTicket`, `clientAnswers`, `elapsedTime`; không gửi question IDs/options.
  3. Đọc `rankings`, `quizSummary`, `chapterProgress` sau transaction.
- **Expected:** `{ok:true,data}` đúng contract; `total` bằng số câu đã cấp; tạo đúng một ranking; `attemptsCount` tăng đúng một; score/best/completion nhất quán.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — `tests/integration/backend-emulator.test.mjs` gọi trực tiếp QUIZ-01 → QUIZ-02 qua Next.js Server Action transport với session thật; fixed set `de-1` trả 40 câu sạch, ghi đúng 1 ranking và `quizSummary.attemptsCount = 1` trên Firestore Emulator.

### ITP-QUIZ-002 — QUIZ-02 chấm đúng exact issued set, không random lại

- **Precondition:** Cùng user gọi QUIZ-01 `auto` hai lần và giữ ticket/đề lần đầu.
- **Steps:** Sau khi đề thứ hai đã được cấp, nộp answers với ticket thứ nhất.
- **Expected:** QUIZ-02 chấm đúng ordered IDs của đề thứ nhất, không dùng đề thứ hai và không random lại.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — `tests/integration/backend-emulator.test.mjs`, case ITP-E2E-003.

### ITP-QUIZ-003 — QUIZ-02 từ chối answers thiếu và không ghi dữ liệu

- **Precondition:** Đã lấy full set bằng QUIZ-01; chụp số ranking và summary trước test.
- **Steps:** Giữ ticket nguyên vẹn nhưng bỏ một phần tử khỏi `clientAnswers` rồi gọi QUIZ-02.
- **Expected:** `{ok:false,error.code:"QUESTION_SET_MISMATCH"}`; không tạo ranking; không tăng `attemptsCount`; không đổi best score/chapter/review state.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — Emulator trả `QUESTION_SET_MISMATCH`; submission hợp lệ sau đó chỉ tạo đúng một ranking `auto`.

### ITP-QUIZ-004 — QUIZ-02 từ chối ticket bị chỉnh sửa

- **Precondition:** Có ticket hợp lệ từ QUIZ-01 và đã chụp số ranking.
- **Steps:** Sửa một byte của ticket rồi gọi QUIZ-02 với answers đủ.
- **Expected:** `INVALID_EXAM_TICKET`; không có Firestore side effect.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — Unit tamper và Emulator Server Action đều pass.

### ITP-QUIZ-005 — Ticket bị ràng buộc đúng user

- **Precondition:** User A nhận ticket hợp lệ.
- **Steps:** Xác minh/nộp ticket dưới UID user B.
- **Expected:** `INVALID_EXAM_TICKET`; không chấm hoặc ghi attempt.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — `tests/learning/exam-ticket.test.js`.

### ITP-QUIZ-006 — Ticket hết hạn

- **Precondition:** Ticket hợp lệ đã qua expiry 4 giờ.
- **Steps:** Xác minh/nộp ticket tại thời điểm hết hạn.
- **Expected:** `EXAM_TICKET_EXPIRED`; không chấm hoặc ghi attempt.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — `tests/learning/exam-ticket.test.js`.

### ITP-QUIZ-007 — Regression auth boundary

- **Precondition:** Không có session cookie.
- **Steps:** Gọi QUIZ-01 và QUIZ-02 bằng payload hợp lệ.
- **Expected:** Cả hai trả error envelope `UNAUTHENTICATED`; không lộ câu trả lời và không ghi attempt.
- **PASS/FAIL:** ☐ PASS ☐ FAIL — `NOT_RUN`.

## 7. FE ↔ BE regression sau khi Frontend gỡ mock

Các case dưới đây kiểm tra regression FE ↔ BE. Flow Quiz đã dùng QUIZ-01/QUIZ-02 thật theo contract `examTicket`; các flow khác giữ trạng thái riêng của chúng.

### ITP-E2E-001 — Mở môn Cloud và nhận cùng một navigation tree

- **Precondition:** `INT-01/02/08` phía FE đã được repair; student đăng nhập bằng backend session.
- **Steps:** Chọn Cloud, duyệt 7 chương trên Sidebar, mở subsection đầu/cuối từng chương và quan sát LEARN-01.
- **Expected:** FE và BE dùng cùng ID; không có 404; nội dung và progress row thuộc đúng subsection; không fallback sai bài.
- **PASS/FAIL:** ☐ PASS ☐ FAIL — `BLOCKED_NOT_RUN` bởi auth/API facade FE.

### ITP-E2E-002 — Flashcard Cloud tải và review qua API thật

- **Precondition:** `INT-02/09/25` phía FE đã được repair; student session hợp lệ.
- **Steps:** Mở flashcard Cloud, review `cloud_fc_01`, reload trang và mở review queue.
- **Expected:** UI nhận 12 card ban đầu, state vẫn tồn tại sau reload, due count giảm và review queue deep-link đúng `cloud-ch1-s2-features`.
- **PASS/FAIL:** ☐ PASS ☐ FAIL — `BLOCKED_NOT_RUN` bởi API facade/refresh FE.

### ITP-E2E-003 — Exam dùng issued set và hiển thị QUIZ-02 envelope

- **Precondition:** Student session hợp lệ; `EXAM_TICKET_SECRET` được cấu hình; chọn exam `auto`.
- **Steps:** QUIZ-01 cấp đề random + ticket; lưu/resume ticket; nộp answers + ticket qua QUIZ-02 và đọc success envelope.
- **Expected:** QUIZ-01 không lộ answer; ticket đại diện exact ordered set; submit không gửi question IDs/options và không random lại; FE dùng `res.data` để render score/graded results; chỉ một attempt được ghi.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — FE contract/build và Emulator Server Action flow 10/10 pass; trạng thái defect là `fixed_pending_verify` chờ verifier độc lập.

### ITP-E2E-004 — Admin report hiển thị Cloud từ backend thật

- **Precondition:** `INT-01/02/20/23/43` phía FE đã được repair; admin session hợp lệ; có fixture Cloud.
- **Steps:** Mở learning report, filter `subjectId=cloud-computing`, đối chiếu UI với ADMIN-01 JSON.
- **Expected:** UI hiển thị đúng user/7 chương/counters; không dùng MockServer; lỗi auth/datastore không bị hiển thị giả thành danh sách rỗng.
- **PASS/FAIL:** ☐ PASS ☐ FAIL — `BLOCKED_NOT_RUN` bởi admin report FE.

## 8. Build và regression gate

### ITP-REG-001 — Backend unit regression

- **Precondition:** Dependencies đã cài.
- **Steps:** Chạy `npm.cmd run test:backend`.
- **Expected:** 17/17 test đạt, gồm ticket signing/expiry/user binding, scheduler, learning rules và question-set regression.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — evidence: 17 tests, 0 fail.

### ITP-REG-002 — Lint phạm vi thay đổi

- **Precondition:** ESLint config hiện tại.
- **Steps:** Chạy ESLint cho Server Actions, `exam-ticket`, `quiz-service`, `Quiz.js` và các test ticket/integration đã đổi.
- **Expected:** Exit code 0, không warning/error.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — evidence: command exit code 0.

### ITP-REG-003 — Next.js production build

- **Precondition:** Dependencies và build environment hiện tại.
- **Steps:** Chạy `npm.cmd run build`.
- **Expected:** Next.js 16.2.9 compile, TypeScript check, page-data collection và static generation thành công; toàn bộ API route vẫn được phát hiện.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — evidence: production build hoàn tất, exit code 0.

### ITP-REG-004 — Không mutation vùng dữ liệu hoặc Frontend ngoài Quiz flow

- **Precondition:** Có diff của tranche repair.
- **Steps:**
  1. Liệt kê toàn bộ changed/untracked paths.
  2. Kiểm tra không có file `data/*.js`; Frontend chỉ được đổi `components/Quiz.js` theo quyền DECISION-04.
- **Expected:** Không sửa dữ liệu tĩnh; không có UI/component ngoài Quiz flow bị thay đổi.
- **PASS/FAIL:** ☒ PASS ☐ FAIL — evidence: diff chỉ có `components/Quiz.js` ở phía Frontend và không có path `data/`.

## 9. Exit criteria

Tranche repair chỉ được coi là nghiệm thu integration hoàn chỉnh khi:

1. Tất cả case không thuộc `NEED_DECISION` có kết quả `PASS`.
2. Không còn `BLOCKED_NOT_RUN` trong nhóm E2E sau khi Frontend hoàn tất phần việc của mình.
3. Các negative quiz case chứng minh không có Firestore side effect.
4. LEARN-01, FLASH-01/02 và ADMIN-01 cùng nhìn thấy catalog Cloud nhất quán.
5. `npm.cmd run test:backend`, lint và `npm.cmd run build` tiếp tục thành công trên commit cuối.
