# Integration Audit — Frontend ↔ Backend

> Phạm vi audit: trạng thái hiện tại của worktree `feature/backend` sau khi đồng bộ từ `integration`.
>
> Nguồn đối chiếu: `plan.md`, `AGENTS.md`, toàn bộ điểm gọi dữ liệu phía frontend, `app/api/`, Server Actions, `lib/client/`, `lib/server/`, Firebase rules/indexes và cấu hình liên quan.
>
> Đây là tài liệu chẩn đoán. Chưa sửa source code, chưa thay API contract, chưa chạy migration.

## 1. Quy ước đánh giá

### Loại lỗi

| Loại | Ý nghĩa |
|---|---|
| `FE` | Frontend gọi sai, chưa gọi, xử lý sai response hoặc còn dùng luồng cũ. |
| `BE` | Backend thiếu validation/behavior hoặc chưa phục vụ đúng dữ liệu đã thống nhất. |
| `CONTRACT` | Hai phía hiểu khác request, response, transport hoặc error contract. |
| `SHARED_DATA` | FE và BE đang đọc hai catalog/schema/dataset khác nhau. |
| `CONFIG` | Cấu hình Firebase, environment, rules/index hoặc deploy chưa khớp. |

### Mức độ blocker

| Mức | Ý nghĩa |
|---|---|
| `BLOCKER` | Luồng chính không thể chạy end-to-end hoặc phá vỡ boundary bảo mật bắt buộc. |
| `HIGH` | Luồng có thể chạy một phần nhưng sai dữ liệu, sai quyền, mất đồng bộ hoặc có lỗ hổng nghiêm trọng. |
| `MEDIUM` | Không chặn toàn bộ integration nhưng gây UX sai, hành vi không ổn định hoặc lệch yêu cầu. |
| `LOW` | Sai khác nhỏ, debt kỹ thuật hoặc thiếu hoàn thiện không cản trở luồng chính. |

## 2. Tóm tắt điều hành

Frontend và backend thật hiện đã cùng tồn tại trong repo nhưng chưa tạo thành một hệ thống thống nhất. Frontend học tập chủ yếu đi qua `MockServer`, auth chính vẫn dùng `localStorage`, trong khi backend yêu cầu Firebase ID token và HttpOnly session cookie. Riêng quiz exam lại gọi thẳng Server Action thật nhưng xử lý response theo schema cũ. Đồng thời frontend Cloud dùng catalog ghép ở `lib/curriculum.js`, còn backend chỉ đọc `data/index.js` và `data/lessons.js`, khiến backend không nhìn thấy 7 chương và flashcard Cloud.

Sau khi loại các mục trùng và re-verify bằng code, bản cuối có **42 mismatch integration riêng biệt** cùng **4 sai khác tài liệu**, gồm: **12 BLOCKER**, **23 HIGH**, **11 MEDIUM**.

Các blocker phải được giải quyết trước khi có thể kiểm thử integration end-to-end:

1. Thống nhất Firebase Auth và backend session.
2. Chuyển `lib/client/api.js` từ MockServer sang HTTP API thật.
3. Dùng chung một curriculum catalog giữa FE và BE.
4. Nối quiz với Server Action theo đúng envelope và dùng QUIZ-01 để cấp đề.
5. Ngừng các thao tác Firestore client bị `firebase.rules` cấm.

## 3. Danh sách mismatch chi tiết

### INT-01 — Auth UI và backend session là hai hệ thống độc lập

- **Luồng/feature:** Đăng nhập, khôi phục phiên, bảo vệ màn hình học/quiz/admin.
- **FE đang làm gì:** `app/page.js` xác thực username/password bằng `localStorage`, chấp nhận hard-code `admin/admin`, rồi lưu `studymaster_session_user` vào `localStorage` hoặc `sessionStorage`. Google popup chỉ xác thực Google, sau đó vẫn tạo hồ sơ/mật khẩu local. FE không tạo cookie backend.
- **BE đang làm gì:** Mọi learning API, report API và quiz Server Action gọi `requireSession()`, chỉ chấp nhận cookie HttpOnly `studymaster_session` được tạo từ Firebase ID token đã xác minh.
- **Contract hiện có:** AUTH-02 `POST /api/auth/session` nhận `{ idToken, rememberMe }`; AUTH-03 `GET /api/auth/session`; người chưa có session không được vào study/quiz/admin.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `BLOCKER` — UI có thể coi là đã đăng nhập trong khi toàn bộ backend thật vẫn trả `UNAUTHENTICATED`.
- **Bằng chứng chính:** `app/page.js`, `lib/server/auth.js`, toàn bộ `app/api/learning/**`, `app/actions/quiz.js`.

### INT-02 — API facade frontend vẫn trỏ 100% vào MockServer

- **Luồng/feature:** Auth, learning state, completion, bookmark, review, flashcard, quiz facade và admin report.
- **FE đang làm gì:** Mọi method trong `lib/client/api.js` gọi static method tương ứng của `MockServer`; repo không có request `fetch()` thực tới các endpoint StudyMaster.
- **BE đang làm gì:** Đã cung cấp 10 HTTP Route Handler thật dưới `/api` cùng hai quiz Server Action.
- **Contract hiện có:** AUTH-01..04, LEARN-01..06, FLASH-01..02, ADMIN-01..02 và QUIZ-01..02 trong `plan.md`.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `BLOCKER` — các API thật không được frontend sử dụng, dữ liệu vẫn nằm trong browser.
- **Bằng chứng chính:** `lib/client/api.js`, `lib/client/mock-server.js`, `app/api/`.

### INT-03 — `useAuthSession` chưa được dùng và có handshake chỉ phù hợp mock

- **Luồng/feature:** Login admin và login học viên qua API facade.
- **FE đang làm gì:** Hook tồn tại nhưng không được `app/page.js` import. `loginAdmin()` lấy custom token rồi truyền thẳng custom token vào `createSession`; `loginUser()` gửi chuỗi `mock_student_id_token` cùng `userOverride`.
- **BE đang làm gì:** AUTH-01 trả Firebase custom token; client phải gọi Firebase `signInWithCustomToken`, lấy **ID token**, sau đó mới gọi AUTH-02. AUTH-02 không chấp nhận `userOverride`.
- **Contract hiện có:** Luồng AUTH-01 → Firebase `signInWithCustomToken` → Firebase ID token → AUTH-02.
- **Loại lỗi:** `CONTRACT`.
- **Mức độ blocker:** `BLOCKER` — kể cả thay MockServer bằng HTTP fetch, login admin/học viên vẫn không tạo được session hợp lệ.
- **Bằng chứng chính:** `hooks/useAuthSession.js`, `app/api/auth/admin-token/route.js`, `app/api/auth/session/route.js`.

### INT-04 — Google login không đổi ID token lấy backend session

- **Luồng/feature:** Đăng nhập Google.
- **FE đang làm gì:** Gọi `signInWithPopup`, đọc email, tra/tạo user localStorage rồi gọi `loginSuccess()`; không gọi `user.getIdToken()` và AUTH-02.
- **BE đang làm gì:** Chỉ công nhận Firebase user sau khi ID token được xác minh và session cookie được tạo.
- **Contract hiện có:** AUTH-02 `{ idToken, rememberMe }` → `{ user }` và đặt cookie.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `BLOCKER` — Google user chỉ đăng nhập được ở lớp UI, không thể gọi backend protected API.
- **Bằng chứng chính:** `app/page.js`, `lib/server/auth.js`.

### INT-05 — Email/password và forgot-password vẫn là dữ liệu local

- **Luồng/feature:** Đăng ký, đăng nhập email/password, đặt lại mật khẩu.
- **FE đang làm gì:** Lưu password plaintext trong `studymaster_users`; forgot-password chỉ hiển thị thông báo giả.
- **BE đang làm gì:** Không có endpoint quản lý password riêng; kiến trúc dự kiến dùng Firebase Auth và chỉ nhận Firebase ID token để tạo session.
- **Contract hiện có:** Phần tổng quan/BE-02/FE-03 trong `plan.md` yêu cầu Firebase Auth cho Google và email/password; không lưu password trong localStorage/Firestore.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `BLOCKER` cho luồng email/password — trái mô hình auth thống nhất, không tạo được backend session và giữ credential không an toàn ở browser. Client cũng chưa có cơ chế loại bỏ `studymaster_users` cũ như BE-03 yêu cầu.
- **Bằng chứng chính:** `app/page.js`, mục 5.1 và BE-02/FE-03 trong `plan.md`.

### INT-06 — Logout không kết thúc Firebase/backend session

- **Luồng/feature:** Đăng xuất.
- **FE đang làm gì:** Chỉ xóa các key session cũ trong localStorage/sessionStorage.
- **BE đang làm gì:** AUTH-04 xóa cookie `studymaster_session`; Firebase client cũng cần `signOut` theo plan.
- **Contract hiện có:** `DELETE /api/auth/session` → `{ authenticated: false }`, đồng thời client gọi Firebase `signOut`.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `HIGH` — sau khi tích hợp login thật, logout UI có thể để backend/Firebase session còn hiệu lực.
- **Bằng chứng chính:** `app/page.js`, `app/api/auth/session/route.js`.

### INT-07 — Learning hook không gắn với auth lifecycle

- **Luồng/feature:** Tải tiến độ môn sau login và khi session thay đổi.
- **FE đang làm gì:** `useLearningState(selectedSubjectId)` mount ngay với subject mặc định; fetch chỉ phụ thuộc `subjectId`, không phụ thuộc user/session và không retry khi login hoàn tất.
- **BE đang làm gì:** LEARN-01 bắt buộc session hợp lệ.
- **Contract hiện có:** Sau AUTH-03 hợp lệ mới vào study; khi chọn môn mới tải LEARN-01.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `HIGH` — request đầu tiên dễ nhận 401 và state không tự phục hồi sau khi login.
- **Bằng chứng chính:** `app/page.js`, `hooks/useLearningState.js`.

### INT-08 — Frontend và backend dùng hai curriculum catalog khác nhau

- **Luồng/feature:** Cloud chapters, subsection validation, completion, report.
- **FE đang làm gì:** Đọc `subjects` và `lessonsData` từ `lib/curriculum.js`; adapter này ghép đủ 7 chương Cloud ở runtime.
- **BE đang làm gì:** `content-catalog.js` import trực tiếp `data/index.js`, nơi `cloud-computing.chapters` vẫn là `[]`. Backend không đọc adapter.
- **Contract hiện có:** `subjectId = "cloud-computing"`; 7 chương và các chapter/section/subsection ID phải là catalog chung cho FE/BE.
- **Loại lỗi:** `SHARED_DATA`.
- **Mức độ blocker:** `BLOCKER` — LEARN-01 trả Cloud không có chương; completion trả `CHAPTER_NOT_FOUND`/`SUBSECTION_NOT_FOUND`; report không có tiến độ Cloud.
- **Bằng chứng chính:** `lib/curriculum.js`, `data/index.js`, `lib/server/content-catalog.js`.

### INT-09 — Backend flashcard catalog không nhìn thấy dữ liệu Cloud mới

- **Luồng/feature:** Danh sách flashcard đến hạn và ghi lịch SM-2.
- **FE đang làm gì:** Dữ liệu thật nằm trong `data/cloud-computing-flashcards.js`, nhưng `CloudFlashcardDeck` hiện nhận 5 card hard-code từ MockServer.
- **BE đang làm gì:** `flashcard-catalog.js` chỉ quét object `lessonsData` từ `data/lessons.js` để tìm thuộc tính `flashcards`; `data/lessons.js` không đăng ký Cloud và mảng `cloudFlashcards` là module độc lập.
- **Contract hiện có:** FLASH-01 phải trả card tĩnh của subject và FLASH-02 phải xác minh `cardId`, `chapterId`, `subsectionId` theo catalog.
- **Loại lỗi:** `SHARED_DATA`.
- **Mức độ blocker:** `BLOCKER` — backend thật trả danh sách Cloud rỗng và FLASH-02 trả `FLASHCARD_NOT_FOUND`.
- **Bằng chứng chính:** `data/cloud-computing-flashcards.js`, `lib/server/flashcard-catalog.js`, `data/lessons.js`.

### INT-10 — Snapshot learning/completion mock khác contract backend

- **Luồng/feature:** Hoàn thành subsection/chương.
- **FE đang làm gì:** Với user/môn chưa có local state, MockServer trả `chapters: []` thay vì snapshot đầy đủ các chương. Khi có completion, `totalRequiredSubsections` luôn bằng `4`; Cloud được coi là hoàn thành khi completed count `>= 4`.
- **BE đang làm gì:** LEARN-01 luôn dựng danh sách chương từ catalog, kể cả chương có tiến độ bằng 0; backend tính chính xác danh sách subsection bắt buộc và yêu cầu completed count bằng tổng thực tế.
- **Contract hiện có:** Server tự tính `totalRequiredSubsections`; client không được gửi hoặc giả định con số này.
- **Loại lỗi:** `SHARED_DATA`.
- **Mức độ blocker:** `HIGH` — snapshot/progress mock không thể chuyển nguyên trạng sang Firestore, UI không có baseline chương đúng và có thể công nhận sai chương.
- **Bằng chứng chính:** `lib/client/mock-server.js`, `lib/server/learning-repository.js`.

### INT-11 — QUIZ-01 không được frontend sử dụng

- **Luồng/feature:** Cấp đề thi an toàn.
- **FE đang làm gì:** `Quiz.js` import `questionsMap` từ `data/index.js`, lấy câu hỏi có đáp án ngay trong client, sau đó mới xóa `answer`/`explanation` khỏi state exam.
- **BE đang làm gì:** Server Action `getExamQuestions()` xác thực session, chọn exam set và chỉ trả câu hỏi sạch.
- **Contract hiện có:** QUIZ-01 nhận `{ subjectId, chapterId, examSetId, isTrickMode }`, trả `{ ok: true, data: { questions } }` không có đáp án/lời giải.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `BLOCKER` về bảo mật quiz — đáp án vẫn có trong client bundle/runtime và đề không được backend cấp phát.
- **Bằng chứng chính:** `components/Quiz.js`, `app/actions/quiz.js`.

### INT-12 — QUIZ-02 response envelope bị frontend đọc theo schema cũ

- **Luồng/feature:** Nộp bài exam và hiển thị kết quả.
- **FE đang làm gì:** Gọi `submitExamScore()`, sau đó đọc `res.score` và `res.gradedResults`; không kiểm tra `res.ok`.
- **BE đang làm gì:** Trả `{ ok: true, data: { score, total, score10, bestScore10, passed, chapterCompleted, attemptsCount, gradedResults } }` hoặc `{ ok: false, error }`.
- **Contract hiện có:** QUIZ-02 trong `plan.md` dùng success/error envelope chung.
- **Loại lỗi:** `CONTRACT`.
- **Mức độ blocker:** `BLOCKER` — điểm và graded result thành `undefined`; error envelope cũng bị xử lý như success rồi gây lỗi tiếp theo.
- **Bằng chứng chính:** `components/Quiz.js`, `app/actions/quiz.js`.

### INT-13 — QUIZ-02 frontend còn gửi field `name`

- **Luồng/feature:** Danh tính người nộp quiz.
- **FE đang làm gì:** Gửi `name` trong payload và tiếp tục tạo local ranking từ tên nhập tay.
- **BE đang làm gì:** Bỏ qua field ngoài contract, lấy `uid/displayName` từ backend session.
- **Contract hiện có:** QUIZ-02 đã bỏ `name`; client không gửi UID hoặc danh tính đáng tin cậy trong body.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `MEDIUM` — backend hiện không tin field này nên chưa gây sai quyền, nhưng UI/local leaderboard có thể hiển thị danh tính khác record server.
- **Bằng chứng chính:** `components/Quiz.js`, `app/actions/quiz.js`, `lib/server/quiz-service.js`.

### INT-14 — Backend chưa buộc submission khớp toàn bộ đề đã cấp

- **Luồng/feature:** Chống sửa payload và chấm quiz server-side.
- **FE đang làm gì:** Gửi `questionsState` hiện có cùng `clientAnswers`.
- **BE đang làm gì:** Kiểm tra từng ID thuộc pool, không trùng và options có cùng multiset; nhưng không yêu cầu số lượng/ID submission bằng toàn bộ exam set đã chọn.
- **Contract hiện có:** Lỗi `QUESTION_SET_MISMATCH` nhằm bảo vệ bộ câu hỏi; QUIZ-01/QUIZ-02 mô tả cùng một đề thi được cấp và nộp lại.
- **Loại lỗi:** `BE`.
- **Mức độ blocker:** `HIGH` — client có thể nộp subset nhỏ gồm câu đã biết để tạo điểm và tiến độ không đáng tin cậy.
- **Bằng chứng chính:** `lib/server/quiz-service.js`.

### INT-15 — Cách chọn đề `auto` giữa FE và BE khác nhau

- **Luồng/feature:** Đề ngẫu nhiên/fixed set.
- **FE đang làm gì:** Tự sample theo ma trận/chapter-specific rules, thường tạo 40 câu, rồi xáo ở client.
- **BE đang làm gì:** Với `examSetId === "auto"`, `selectQuestionPool()` trả toàn bộ `inside + outside`; không áp dụng sampler của FE.
- **Contract hiện có:** QUIZ-01 phải là nguồn cấp đề; fixed set theo `examSetId`, còn quy tắc quiz yêu cầu ma trận cố định.
- **Loại lỗi:** `CONTRACT`.
- **Mức độ blocker:** `HIGH` — khi nối QUIZ-01, số lượng/nội dung đề auto sẽ thay đổi mạnh so với UI hiện tại; nếu vẫn sample client thì backend không thực sự cấp đề.
- **Bằng chứng chính:** `components/Quiz.js`, `lib/server/quiz-service.js`, quy tắc Quiz trong `AGENTS.md`.

### INT-16 — Practice mode ghi Firestore trực tiếp nhưng rules cấm

- **Luồng/feature:** Lưu điểm luyện tập.
- **FE đang làm gì:** Chấm practice tại client rồi gọi `addDoc(collection(db, "rankings"), record)`.
- **BE đang làm gì:** Chỉ quiz Server Action được phép ghi ranking qua Admin SDK.
- **Contract hiện có:** `firebase.rules` đặt `allow write: if false` cho `rankings`; BE-05 yêu cầu chặn client ghi trực tiếp.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `HIGH` — khi rules được deploy, ghi practice luôn thất bại; nếu rules cũ còn mở thì điểm client có thể bị giả mạo.
- **Bằng chứng chính:** `components/Quiz.js`, `firebase.rules`.

### INT-17 — Ranking practice thiếu `subjectId`

- **Luồng/feature:** Leaderboard theo môn/chương.
- **FE đang làm gì:** Record practice local/Firestore không có `subjectId`, nhưng leaderboard query Firestore lọc cả `subjectId` và `chapterId`.
- **BE đang làm gì:** Record server-side luôn có `uid`, `name`, `subjectId`, `chapterId` và các field tương thích cũ.
- **Contract hiện có:** Schema `rankings` trong `plan.md` giữ `subjectId` bắt buộc cho record mới.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `HIGH` — practice record không xuất hiện trong query leaderboard theo môn, ngay cả khi được phép ghi.
- **Bằng chứng chính:** `components/Quiz.js`, `lib/server/quiz-service.js`.

### INT-18 — Profile/password frontend xung đột Firebase Auth và rules

- **Luồng/feature:** Đọc profile và đổi mật khẩu.
- **FE đang làm gì:** `ProfileModal` đọc `users/{currentUser}` bằng username, kiểm tra password plaintext rồi `updateDoc({ password })`.
- **BE đang làm gì:** Identity chính là Firebase UID; profile `users/{uid}` không lưu password; Firestore rules cấm client ghi profile.
- **Contract hiện có:** Model `users/{uid}` không có password; credential do Firebase Auth quản lý.
- **Loại lỗi:** `CONTRACT`.
- **Mức độ blocker:** `HIGH` — đổi mật khẩu sẽ bị rules từ chối và không thay đổi Firebase credential; document ID cũng không khớp UID.
- **Bằng chứng chính:** `components/ProfileModal.js`, `lib/server/auth.js`, `firebase.rules`, mục 5.1 `plan.md`.

### INT-19 — Admin dashboard user management vẫn là localStorage

- **Luồng/feature:** Danh sách user, khóa/mở, reset password, mở khóa môn, audit log.
- **FE đang làm gì:** Toàn bộ CRUD và quyền admin dựa vào `studymaster_users`, `studymaster_admin_logs`, `studymaster_unlocked_subjects_*` trong browser.
- **BE đang làm gì:** Chỉ có auth/session và learning report; không có API quản lý user tương ứng trong contract hiện tại.
- **Contract hiện có:** Task hiện tại chỉ contract report; không có contract backend cho CRUD user/admin log/unlock subject.
- **Loại lỗi:** `CONTRACT`.
- **Mức độ blocker:** `HIGH` cho mục tiêu nhiều thiết bị — dữ liệu quản trị không tập trung; không được tự nối backend nếu chưa bổ sung contract vào plan.
- **Bằng chứng chính:** `components/admin/AdminDashboard.js`, `components/admin/AdminUsersTab.js`, API contract trong `plan.md`.

### INT-20 — Admin report frontend vẫn dùng mock session/report

- **Luồng/feature:** Xem báo cáo học tập.
- **FE đang làm gì:** `AdminLearningReportTab` gọi `adminApi.getReport()`, đi vào MockServer. `app/page.js` login admin cũ không tạo `studymaster_mock_session`, nên mock report thường trả `FORBIDDEN`; component không hiển thị error envelope. Nếu có mock session, MockServer vẫn bỏ qua các filter đầu vào, tính `quizAttempts/dueFlashcards` không đầy đủ và có thể đưa admin vào `totalUsers`, khác report thật.
- **BE đang làm gì:** ADMIN-01 tổng hợp Firestore thật và yêu cầu backend session role `admin`/`teacher`.
- **Contract hiện có:** `GET /api/admin/learning-report` với filter và JSON envelope.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `BLOCKER` — tab report không nhận dữ liệu thật và có thể hiển thị trạng thái rỗng thay vì lỗi quyền.
- **Bằng chứng chính:** `components/admin/AdminLearningReportTab.js`, `lib/client/api.js`, `lib/client/mock-server.js`, `app/api/admin/learning-report/route.js`.

### INT-21 — Admin export dùng client generation thay vì binary API

- **Luồng/feature:** Xuất XLSX/PDF.
- **FE đang làm gì:** Dùng ExcelJS/jsPDF trong browser từ report mock; không gọi `adminApi.exportReport()`, không có nhánh đọc `response.blob()`/`Content-Disposition`. XLSX client thiếu `attemptsCount` và `dueFlashcardsCount`; PDF chỉ liệt kê tối đa 15 user và không có chi tiết chapter/progress/quiz/review/flashcard theo contract.
- **BE đang làm gì:** ADMIN-02 tạo file server-side, trả binary với `Content-Type` và `Content-Disposition`.
- **Contract hiện có:** `GET /api/admin/learning-report/export?format=xlsx|pdf` cùng filter; lỗi vẫn trả JSON envelope.
- **Loại lỗi:** `CONTRACT`.
- **Mức độ blocker:** `HIGH` — file frontend không phải snapshot đã xác thực từ backend, thiếu trường bắt buộc và transport hoàn toàn khác contract.
- **Bằng chứng chính:** `components/admin/AdminLearningReportTab.js`, `app/api/admin/learning-report/export/route.js`.

### INT-22 — Mock export contract khác backend export contract

- **Luồng/feature:** API facade ADMIN-02.
- **FE đang làm gì:** `MockServer.exportLearningReport()` trả `{ ok, data: { format, filename, payload } }`.
- **BE đang làm gì:** Trả `Response` binary, không có success JSON envelope; chỉ lỗi mới là JSON.
- **Contract hiện có:** ADMIN-02 binary response với content headers.
- **Loại lỗi:** `CONTRACT`.
- **Mức độ blocker:** `HIGH` — không thể đổi implementation phía dưới facade mà giữ nguyên consumer hiện tại.
- **Bằng chứng chính:** `lib/client/mock-server.js`, `app/api/admin/learning-report/export/route.js`.

### INT-23 — Thiếu API error interceptor và xử lý error code/status thống nhất

- **Luồng/feature:** Toàn bộ API lỗi, đặc biệt auth expiry, forbidden và datastore unavailable.
- **FE đang làm gì:** Nhiều consumer chỉ kiểm tra `res.ok` một phần, nuốt lỗi bằng `console.warn`, hoặc không kiểm tra envelope. `lib/client/api.js` không có fetch wrapper/error interceptor; không có handler chung cho `UNAUTHENTICATED`, `ACCOUNT_DISABLED`, `FORBIDDEN`, `DATASTORE_UNAVAILABLE` và không đưa `appStep` về login khi phiên hết hạn.
- **BE đang làm gì:** Trả error envelope chuẩn với HTTP status cho Route Handler và envelope không throw cho Server Action.
- **Contract hiện có:** `{ ok: false, error: { code, message, fields? } }` cùng bảng HTTP/error code trong `plan.md`.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `HIGH` — session hết hạn, lỗi quyền và validation dễ bị hiển thị thành dữ liệu rỗng hoặc gây exception thứ cấp.
- **Bằng chứng chính:** `hooks/useLearningState.js`, `components/cloud/CloudFlashcardDeck.js`, `components/admin/AdminLearningReportTab.js`, `components/Quiz.js`.

### INT-24 — Gỡ manual review không cập nhật đầy đủ response

- **Luồng/feature:** LEARN-06 gỡ đánh dấu thủ công nhưng giữ system reason.
- **FE đang làm gì:** Khi remove thành công, hook chỉ cập nhật `manual` và `needsReview`, không thay `systemReasons`/`updatedAt` bằng dữ liệu server.
- **BE đang làm gì:** Trả đầy đủ `{ subsectionId, manual, systemReasons, needsReview, updatedAt }`.
- **Contract hiện có:** LEARN-06 response schema trong `plan.md`.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `MEDIUM` — UI có thể giữ reason cũ hoặc metadata cũ sau phản hồi server.
- **Bằng chứng chính:** `hooks/useLearningState.js`, `lib/server/learning-repository.js`.

### INT-25 — Flashcard review không đồng bộ lại learning counters/review queue

- **Luồng/feature:** Sau khi đánh giá flashcard.
- **FE đang làm gì:** `CloudFlashcardDeck` cập nhật deck riêng rồi reload card; không báo cho `useLearningState` refresh `dueCount` và `reviewItems` của toolbar/Review Queue.
- **BE đang làm gì:** FLASH-02 trả schedule mới và `reviewItem` mới.
- **Contract hiện có:** FLASH-02 response chứa `reviewItem`; LEARN-01 là snapshot tổng thể.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `MEDIUM` — toolbar và hàng đợi ôn có thể sai cho đến lần reload/refetch tiếp theo.
- **Bằng chứng chính:** `components/cloud/CloudFlashcardDeck.js`, `app/page.js`, `hooks/useLearningState.js`.

### INT-26 — Role `teacher` chỉ tồn tại phía backend/contract

- **Luồng/feature:** Teacher xem/xuất báo cáo.
- **FE đang làm gì:** Chỉ đưa username `admin` vào `admin-dashboard`; không phục hồi role từ backend session và không có nhánh teacher.
- **BE đang làm gì:** ADMIN-01/02 chấp nhận role `admin` hoặc `teacher` từ session đã xác minh.
- **Contract hiện có:** AUTH user role `student | admin | teacher`; report cho admin/teacher.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `MEDIUM` — teacher hợp lệ không có đường UI vào dashboard.
- **Bằng chứng chính:** `app/page.js`, `lib/server/auth.js`, `app/api/admin/**`.

### INT-27 — Firebase Web config chưa chuyển sang environment

- **Luồng/feature:** Cấu hình Firebase client theo môi trường.
- **FE đang làm gì:** `lib/firebase.js` hard-code toàn bộ Firebase web config và project ID.
- **BE đang làm gì:** Firebase Admin hỗ trợ environment/service account và có fallback `NEXT_PUBLIC_FIREBASE_PROJECT_ID`.
- **Contract hiện có:** Mục tái sử dụng `lib/firebase.js` trong `plan.md` yêu cầu chuyển config sang biến môi trường public.
- **Loại lỗi:** `CONFIG`.
- **Mức độ blocker:** `MEDIUM` — không nhất thiết lộ secret server, nhưng khó tách dev/staging/prod và dễ kết nối nhầm project.
- **Bằng chứng chính:** `lib/firebase.js`, `lib/server/firebase-admin.js`.

### INT-28 — Rules/indexes chưa có cấu hình deploy trong repo

- **Luồng/feature:** Triển khai Firestore Security Rules và composite indexes.
- **FE đang làm gì:** Vẫn có các luồng direct Firestore cũ phụ thuộc rules đang chạy trên project.
- **BE đang làm gì:** Repo có `firebase.rules` và `firestore.indexes.json`, nhưng không có `firebase.json` liên kết chúng với Firebase CLI/deploy target.
- **Contract hiện có:** BE-05 yêu cầu rules bảo vệ dữ liệu; BE-04 yêu cầu indexes cho query.
- **Loại lỗi:** `CONFIG`.
- **Mức độ blocker:** `HIGH` cho deploy — không thể xác nhận rules/index trong repo là rules/index thực tế của Firebase project.
- **Bằng chứng chính:** `firebase.rules`, `firestore.indexes.json`, không có `firebase.json`.

### INT-29 — Firestore rules và frontend profile/ranking assumptions không cùng mô hình

- **Luồng/feature:** Quyền đọc/ghi Firestore trực tiếp.
- **FE đang làm gì:** Giả định có thể ghi ranking và update profile/password từ client.
- **BE/config đang làm gì:** Rules cấm toàn bộ ghi `rankings`, cấm ghi `users/{uid}` và cấm mọi read/write subcollection từ client; mọi mutation mới dự kiến qua Admin SDK.
- **Contract hiện có:** User chỉ thao tác dữ liệu học tập thông qua protected backend; client không tự sửa role/score/system reason.
- **Loại lỗi:** `CONFIG`.
- **Mức độ blocker:** `HIGH` — hoặc frontend hiện tại hỏng dưới rules mới, hoặc production rules chưa được deploy và boundary bảo mật chưa có hiệu lực.
- **Bằng chứng chính:** `firebase.rules`, `components/Quiz.js`, `components/ProfileModal.js`.

### INT-30 — `ACCOUNT_DISABLED` chưa được liệt kê nhất quán trong endpoint contract

- **Luồng/feature:** User bị vô hiệu hóa gọi protected API.
- **FE đang làm gì:** Chưa có handler backend error code; trạng thái locked hiện lấy từ localStorage.
- **BE đang làm gì:** `requireSession()` có thể trả `403 ACCOUNT_DISABLED` cho bất kỳ protected endpoint nào nếu Auth user hoặc profile disabled.
- **Contract hiện có:** AUTH-01/02 có liệt kê `ACCOUNT_DISABLED`, nhưng AUTH-03 và các learning/admin endpoint không liệt kê nhất quán mã này.
- **Loại lỗi:** `CONTRACT`.
- **Mức độ blocker:** `MEDIUM` — behavior server hợp lý nhưng contract và client chưa định nghĩa phản ứng thống nhất.
- **Bằng chứng chính:** `lib/server/auth.js`, bảng lỗi từng endpoint trong `plan.md`.

### INT-31 — Contract chưa định nghĩa rõ namespace `examSetId` của trick mode

- **Luồng/feature:** Chọn bộ đề bẫy.
- **FE đang làm gì:** Gửi các ID dạng `trick`, `trick-1`, `trick-2` dựa trên state UI.
- **BE đang làm gì:** Nếu `isTrickMode = true` và không parse được set number, backend coi request là chọn toàn bộ `tricks`. Điều này hỗ trợ giá trị generic `"trick"` mà FE hiện dùng, nhưng cũng khiến các chuỗi tùy ý khác có cùng hành vi.
- **Contract hiện có:** QUIZ-01/02 chỉ nói `examSetId: string | number` và có lỗi `EXAM_SET_NOT_FOUND`; chưa quy định `"trick"`, `"trick-N"` hoặc giá trị generic nào là hợp lệ.
- **Loại lỗi:** `CONTRACT`.
- **Mức độ blocker:** `MEDIUM` — chưa thể sửa BE hoặc FE an toàn cho đến khi chốt namespace ID; không tự giả định chuỗi generic nào hợp lệ.
- **Bằng chứng chính:** `lib/server/quiz-service.js`.

### INT-32 — Mock flashcard/review liên kết sai subsection thật

- **Luồng/feature:** System review reason từ rating `again/hard`.
- **FE đang làm gì:** Mock có card ID/subsection ID riêng và khi review có thể cập nhật review item đầu tiên trong danh sách, không nhất thiết là subsection của card.
- **BE đang làm gì:** Xác minh card catalog, tìm chính xác subsection rồi transaction vào document composite tương ứng.
- **Contract hiện có:** FLASH-02 `reviewItem.subsectionId` phải là subsection gắn với card.
- **Loại lỗi:** `SHARED_DATA`.
- **Mức độ blocker:** `HIGH` — dữ liệu mock không thể migration tin cậy và UI có thể đánh dấu sai bài cần ôn.
- **Bằng chứng chính:** `lib/client/mock-server.js`, `lib/server/learning-repository.js`.

### INT-33 — Backend report/learning chỉ biết catalog gốc, frontend hiển thị catalog mở rộng

- **Luồng/feature:** Tổng hợp admin toàn môn và các chỉ số Cloud.
- **FE đang làm gì:** Subject selector và nội dung hiển thị 7 chương Cloud qua adapter.
- **BE đang làm gì:** `report-service.js` gọi `listSubjects()` từ `content-catalog.js`; Cloud trong catalog backend không có chapter nên không tạo row/report metric.
- **Contract hiện có:** ADMIN-01 phải trả tiến độ theo subject/chapter, bao gồm Cloud.
- **Loại lỗi:** `SHARED_DATA`.
- **Mức độ blocker:** `BLOCKER` cho báo cáo Cloud — admin không thể thấy tiến độ dù frontend cho phép học.
- **Bằng chứng chính:** `lib/curriculum.js`, `lib/server/content-catalog.js`, `lib/server/report-service.js`.

### INT-34 — Trạng thái UI khi API lỗi có thể giả dạng “không có dữ liệu”

- **Luồng/feature:** Flashcard rỗng, report rỗng, learning state ban đầu.
- **FE đang làm gì:** Flashcard không phân biệt lỗi với `cards.length === 0`; admin report bỏ qua error envelope; learning state giữ mảng rỗng mặc định và error không được page render.
- **BE đang làm gì:** Phân biệt rõ 401/403/404/503 và trả error code.
- **Contract hiện có:** Error envelope chung.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `MEDIUM` — che khuất integration failure, khiến QA tưởng hệ thống hoạt động nhưng chưa có dữ liệu.
- **Bằng chứng chính:** `components/cloud/CloudFlashcardDeck.js`, `components/admin/AdminLearningReportTab.js`, `hooks/useLearningState.js`.

## 4. Sai khác tài liệu ảnh hưởng integration

### DOC-01 — `context.md` mô tả code trước khi merge

- `context.md` vẫn nói không có `app/api`, Firebase Admin, rules, indexes hoặc migration.
- Thực tế các thành phần này đã tồn tại.
- `context.md` còn ghi phạm vi chỉ frontend và cấm tạo mọi file `data/*.js`, trái với `AGENTS.md` hiện tại.
- **Loại lỗi:** `CONFIG`.
- **Mức độ blocker:** `HIGH` — agent mới có thể đưa ra quyết định sai phạm vi hoặc thiết kế lại phần đã tồn tại.

### DOC-02 — `plan.md` vẫn ở trạng thái “chưa triển khai”

- Plan ghi “Chờ người dùng xác nhận”, “Chưa viết source code” và “không bắt đầu implementation”.
- Code FE/BE đã được triển khai và merge.
- **Loại lỗi:** `CONTRACT`.
- **Mức độ blocker:** `MEDIUM` — API contract vẫn dùng được, nhưng trạng thái/gate không còn phản ánh repo.

### DOC-03 — Adapter curriculum đã được chọn nhưng chưa ghi nhận trong plan

- Plan nói nếu không được sửa `data/index.js`/`data/lessons.js` thì dùng adapter ngoài `data/` và cập nhật plan.
- FE đã tạo `lib/curriculum.js` nhưng plan chưa cập nhật, backend cũng chưa dùng adapter.
- **Loại lỗi:** `SHARED_DATA`.
- **Mức độ blocker:** `BLOCKER` — đây là nguyên nhân trực tiếp khiến Cloud FE và BE có hai catalog.

### DOC-04 — Cấu trúc/test thực tế chưa đạt các task đã nêu

- Không có `lib/server/learning-service.js`; logic nằm trong repository.
- Chỉ có test scheduler và learning rules.
- Chưa có test API/auth/authorization/Firestore/report/binary export như BE-11.
- Không có Firebase emulator config.
- **Loại lỗi:** `CONFIG`.
- **Mức độ blocker:** `HIGH` cho regression safety khi bắt đầu cứu integration.

## 5. Ma trận blocker theo luồng

| Luồng | Blocker chính | Trạng thái end-to-end hiện tại |
|---|---|---|
| Google login → study API | INT-01, INT-04, INT-07, INT-37 | Không chạy với backend thật. |
| Email/password → study API | INT-01, INT-05, INT-07, INT-37 | Không chạy với backend thật. |
| Admin login → report | INT-01, INT-03, INT-20, INT-37 | Không chạy. |
| Cloud learning state | INT-02, INT-08 | Chỉ mock; backend không thấy chapter. |
| Cloud completion | INT-08, INT-10 | Mock tính sai; backend thật không nhận ID. |
| Cloud flashcard | INT-09, INT-25, INT-32 | Chỉ mock; backend thật không thấy card. |
| Exam secure question load | INT-11, INT-15 | Chưa dùng backend cấp đề. |
| Exam submit | INT-01, INT-12, INT-14, INT-35, INT-40 | Không chạy đúng; có lỗ hổng subset và state không đồng bộ. |
| Practice ranking | INT-16, INT-17, INT-29, INT-41, INT-42 | Local hoạt động; Firestore/điều kiện completion không thống nhất. |
| Profile/password | INT-05, INT-18, INT-29 | Không tương thích Firebase Auth/rules. |
| Admin report/export | INT-20, INT-21, INT-22, INT-33, INT-43 | Chỉ mock/client-side; không có Cloud thật và thiếu filter/field. |
| Runtime/deploy Firebase | INT-27, INT-28, INT-44 | Chưa tái lập được cấu hình project/rules/credential từ repo. |

---

## 6. Mismatch bổ sung đã re-verify

### INT-35 — Thiếu đồng bộ trạng thái quiz ↔ `learningState`

- **Luồng/feature:** Đồng bộ tiến độ sau khi hoàn thành bài thi Quiz.
- **FE đang làm gì:** Khi nộp bài thi đạt điểm >= 7.0, `Quiz.js` hiển thị kết quả chúc mừng nhưng không có callback/cơ chế thông báo để `useLearningState` (tại `app/page.js`) làm mới lại state.
- **BE đang làm gì:** `gradeAndRecordQuiz` tính và ghi `bestScore10`, cập nhật `chapterProgress`, rồi trả `chapterCompleted` theo cả hai điều kiện: đủ subsection và điểm cao nhất `>= 7.0`. Giá trị này không phải lúc nào cũng `true` chỉ vì lượt thi vừa đạt.
- **Contract hiện có:** `plan.md` FE-04 & FE-09 quy định khi quiz đạt >= 7.0 thì đồng bộ completion của chương.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `HIGH` — các UI đang đọc `learningState` (đặc biệt completion state trong content và các consumer được bổ sung sau này) không nhận `bestScore10/chapterCompleted` mới cho đến khi refetch/reload. Audit không gán lỗi cho Sidebar hiện tại vì Sidebar chưa được truyền learning state.
- **Bằng chứng chính:** `components/Quiz.js`, `hooks/useLearningState.js`, `app/page.js`, `lib/server/quiz-service.js`.

### INT-36 — Lệch nguồn dữ liệu danh mục ngay trong nội bộ `Quiz.js`

- **Luồng/feature:** Nạp metadata môn học/câu hỏi trong `Quiz.js`.
- **FE đang làm gì:** `app/page.js` và `ContentRenderer.js` dùng adapter `lib/curriculum.js` (Sidebar nhận chapters từ page), nhưng `components/Quiz.js` vẫn import trực tiếp `subjects` từ `data/index.js`.
- **BE đang làm gì:** Server Action `quiz.js` đọc qua `content-catalog.js`.
- **Contract hiện có:** Danh mục môn học phải nhất quán xuyên suốt ứng dụng.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `MEDIUM` — Gây bất nhất trong nội bộ Frontend; nếu sau này kích hoạt quiz cho môn Cloud Computing hoặc các môn mở rộng qua adapter, `Quiz.js` sẽ không tìm thấy dữ liệu.
- **Bằng chứng chính:** `components/Quiz.js:13`, `lib/curriculum.js`.

### INT-37 — Thiếu cơ chế reconcile vòng đời Firebase Client Auth ↔ server session

- **Luồng/feature:** Quản lý vòng đời phiên xác thực giữa client và backend.
- **FE đang làm gì:** Không có listener/boot flow thống nhất giữa Firebase Auth state và AUTH-03. Sau khi có integration thật, Firebase client token và cookie server có thể hết hạn hoặc bị thu hồi ở hai thời điểm khác nhau mà UI không reconcile lại.
- **BE đang làm gì:** Server chỉ chấp nhận và duy trì phiên qua HttpOnly Cookie `studymaster_session`.
- **Contract hiện có:** AUTH-02 / AUTH-03 quy định phiên làm việc trên server phải đồng bộ với danh tính Firebase Auth.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `HIGH` — Nếu học viên đăng nhập client thành công nhưng bước trao đổi lấy session cookie gặp sự cố (hoặc khi session cookie hết hạn trên server sau 12h/5 ngày trong khi Firebase Web SDK client vẫn còn phiên), Client sẽ ngỡ là đã đăng nhập nhưng 100% request gọi xuống Backend đều bị từ chối với lỗi `401 UNAUTHENTICATED`.
- **Bằng chứng chính:** `app/page.js`, `lib/firebase.js`, `lib/server/auth.js`.

### INT-40 — FE bỏ qua `passed`, `bestScore10` và `chapterCompleted`

- **Luồng/feature:** Hiển thị kết quả/pass và completion sau quiz.
- **FE đang làm gì:** Exam flow chỉ cố đọc `score/gradedResults` theo schema cũ; không dùng `passed`, `score10`, `bestScore10`, `chapterCompleted`, `attemptsCount`. UI luôn chúc mừng đã hoàn thành bài kiểm tra và chỉ dùng ngưỡng `80%` cho confetti/feedback, không hiển thị rõ trạng thái đạt chương theo ngưỡng `7.0`.
- **BE đang làm gì:** QUIZ-02 trả đầy đủ các field trên; `passed = score10 >= 7.0` và điểm cao nhất không giảm.
- **Contract hiện có:** QUIZ-02 response và quy tắc hoàn thành chương trong `plan.md`.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `HIGH` — FE không thể hiện kết quả nghiệp vụ mà backend đã chốt và có thể khiến người đạt 7.0–7.99 hiểu sai trạng thái.
- **Bằng chứng chính:** `components/Quiz.js`, `lib/server/quiz-service.js`.

### INT-41 — Ranking/leaderboard bị chia giữa nhiều nguồn trạng thái

- **Luồng/feature:** Lịch sử quiz, subject high score, leaderboard và dashboard admin.
- **FE đang làm gì:** `Quiz.js`, `app/page.js`, `ProfileModal` và các tab admin đọc `studymaster_quiz_rankings_{chapterId}`; practice còn thử ghi Firestore trực tiếp; leaderboard ưu tiên Firestore rồi fallback local. MockServer định nghĩa kho ranking riêng nhưng QUIZ-02 mock không persist attempt vào đó.
- **BE đang làm gì:** QUIZ-02 ghi từng attempt vào Firestore `rankings` và summary vào `users/{uid}/quizSummary`; report backend đọc `quizSummary`, không đọc localStorage.
- **Contract hiện có:** `rankings` giữ từng lượt thi và `quizSummary` giữ điểm cao nhất/số lượt; danh tính dựa trên UID session.
- **Loại lỗi:** `SHARED_DATA`.
- **Mức độ blocker:** `HIGH` — high score, leaderboard, profile và admin dashboard có thể hiển thị bốn kết quả khác nhau cho cùng người học.
- **Bằng chứng chính:** `components/Quiz.js`, `app/page.js`, `components/ProfileModal.js`, `components/admin/*`, `lib/client/mock-server.js`, `lib/server/quiz-service.js`.

### INT-42 — Chưa rõ practice mode có được tính vào completion/report hay không

- **Luồng/feature:** Practice quiz, điều kiện đạt chương và số lượt quiz.
- **FE đang làm gì:** Practice mode chấm hoàn toàn tại client, lưu local ranking và không gọi QUIZ-02; vì vậy không cập nhật `quizSummary`, `bestQuizScore10`, `chapterProgress` hoặc report thật.
- **BE đang làm gì:** Chỉ những bài gửi qua QUIZ-02 mới được xác minh, ghi attempt và tham gia điều kiện hoàn thành `>= 7.0`.
- **Contract hiện có:** Plan mô tả Quiz có hai chế độ và QUIZ-02 là nộp/chấm quiz, nhưng chưa nói rõ practice attempt có được tính điểm chính thức/completion/report hay chỉ exam mode mới được tính.
- **Loại lỗi:** `CONTRACT`.
- **Mức độ blocker:** `HIGH` — không được tự nối practice vào QUIZ-02 hoặc loại practice khỏi tiến độ cho đến khi nghiệp vụ này được chốt.
- **Bằng chứng chính:** `components/Quiz.js`, `app/actions/quiz.js`, `lib/server/quiz-service.js`, `plan.md`.

### INT-43 — UI report thiếu filter và trường xuất theo contract

- **Luồng/feature:** Lọc/xuất báo cáo admin.
- **FE đang làm gì:** State có `needsReview` nhưng UI không có control thay đổi; không có filter `uid` hoặc `chapterId`. XLSX/PDF client thiếu một phần dữ liệu chi tiết như đã nêu ở INT-21.
- **BE đang làm gì:** ADMIN-01/02 hỗ trợ `uid`, `subjectId`, `chapterId`, `completion`, `needsReview` và export đủ attempts/review/due flashcards.
- **Contract hiện có:** ADMIN-01/02 và FE-10 trong `plan.md` yêu cầu filter user/môn/chương/completion/review.
- **Loại lỗi:** `FE`.
- **Mức độ blocker:** `MEDIUM` — không chặn tải report mặc định nhưng không thể khai thác đầy đủ contract đã có.
- **Bằng chứng chính:** `components/admin/AdminLearningReportTab.js`, `app/api/admin/learning-report/route.js`, `lib/server/report-service.js`.

### INT-44 — Cấu hình runtime Firebase Admin/admin credential không tái lập từ repo

- **Luồng/feature:** Khởi động backend thật ở môi trường local/staging/production.
- **FE đang làm gì:** Firebase Web SDK trỏ cứng tới một project; không có dấu hiệu trong repo cho biết môi trường FE đang khớp với Admin SDK runtime nào.
- **BE đang làm gì:** Cần service-account base64 hoặc bộ `FIREBASE_ADMIN_*`, có fallback Application Default Credentials; admin login còn bắt buộc `ADMIN_USERNAME` và `ADMIN_PASSWORD`.
- **Contract hiện có:** Plan yêu cầu credential/config qua environment và không commit secret, nhưng repo không có `.env.example`/tài liệu mapping biến môi trường hay Firebase project alias.
- **Loại lỗi:** `CONFIG`.
- **Mức độ blocker:** `HIGH` cho một checkout mới — API có thể build nhưng auth/Firestore thật không thể được xác nhận chạy đúng project nếu thiếu cấu hình ngoài repo.
- **Bằng chứng chính:** `lib/firebase.js`, `lib/server/firebase-admin.js`, `lib/server/auth.js`, `.gitignore`, không có `.env.example` hoặc `firebase.json`.

## 7. Kết quả xử lý re-verify

- **INT-01..INT-30, INT-32..INT-34:** đã đối chiếu lại và giữ; một số lý do/phạm vi được làm rõ trong chính mục tương ứng.
- **INT-31:** phát hiện hiện tượng đúng nhưng nguyên nhân ban đầu quy hoàn toàn cho BE là chưa đủ căn cứ; đã sửa thành khoảng trống `CONTRACT` về namespace `examSetId`.
- **INT-35:** giữ, nhưng bỏ khẳng định Sidebar hiện tại tự hiển thị learning state vì code chưa truyền state này cho Sidebar.
- **INT-36:** giữ; làm rõ Sidebar nhận catalog gián tiếp từ `app/page.js` thay vì tự import adapter.
- **INT-37:** giữ; chốt loại `FE` vì contract AUTH-02/03 đã có, phần thiếu là cơ chế client reconcile hai vòng đời session.
- Phát hiện Anti về error interceptor là đúng và đã được hợp nhất vào **INT-23**; không giữ thêm một mismatch trùng nội dung.
- Phát hiện Anti về binary export là đúng và đã được hợp nhất vào **INT-21/INT-22**; không giữ thêm một mismatch trùng nội dung.
- **INT-40..INT-44:** các mismatch mới được bổ sung sau vòng re-verify cuối.

## 8. Kết luận audit cuối

Backend Route Handlers và service hiện nhìn chung bám theo API contract trong `plan.md`; lỗi integration chủ yếu nằm ở việc frontend chưa chuyển khỏi auth/localStorage/mock architecture và shared curriculum chưa thống nhất. Backend quiz vẫn có một lỗi validation rõ ràng là không ràng buộc submission bằng toàn bộ đề đã cấp. Riêng namespace `examSetId` của trick mode và việc practice mode có được tính vào completion/report hay không là hai điểm nghiệp vụ/contract chưa đủ rõ, không được tự sửa theo suy đoán.

Không nên kiểm thử UI end-to-end với Firestore production ở trạng thái này vì kết quả sẽ trộn các nguồn trạng thái độc lập: localStorage cũ, MockServer localStorage, Firebase client state và Firestore/backend thật.

