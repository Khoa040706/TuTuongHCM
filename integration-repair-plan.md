# Integration Repair Plan — NEED_DECISION

> **Trạng thái:** `PARTIAL_BACKEND_COMPLETE — NEED_DECISION`
>
> Chỉ tranche Backend/Shared độc lập với các quyết định nghiệp vụ đã được thực hiện. Các mục Frontend không bị sửa. Bốn decision gate vẫn mở; không tự chọn contract mới cho các luồng đó.

## 0. Trạng thái thực thi Backend/Shared

### REPAIR-SHARED-01 — Thống nhất curriculum catalog Cloud

- **Mismatch:** `INT-08`, `INT-33`, `DOC-03`.
- **Expected behavior:** Backend learning/report phải nhìn thấy đúng 7 chương, section và subsection Cloud giống Frontend.
- **Contract/source of truth:** `subjectId = "cloud-computing"` và catalog ghép hiện hữu trong `lib/curriculum.js`; các file đã tồn tại trong `data/` chỉ được đọc, không sửa.
- **Owner:** `Shared`.
- **Việc đã sửa:** `lib/server/content-catalog.js` sử dụng catalog ghép từ `lib/curriculum.js` thay vì đọc thẳng catalog gốc thiếu chương trong `data/index.js`.
- **Cách verify:** Backend build phải resolve adapter; kiểm tra catalog runtime có 7 chương Cloud; test learning/report sử dụng cùng `listSubjects/getSubject/listSubjectChapters`.
- **Lỗi được unblock:** Phần Backend/Shared của `INT-08`, `INT-33`, `DOC-03`; mở đường cho Frontend nối LEARN-01 và ADMIN-01.
- **Kết quả verify:** `npm.cmd run build` thành công trên Next.js 16.2.9; kiểm tra 7 module nguồn xác nhận đủ `cloud-ch1` đến `cloud-ch7` và 64 subsection. Build artifact server chứa catalog Cloud, chứng minh adapter được resolve ở server bundle.
- **Trạng thái:** `VERIFIED`.

### REPAIR-SHARED-02 — Đăng ký flashcard Cloud vào backend catalog

- **Mismatch:** `INT-09`; phần nguồn dữ liệu của `INT-25`, `INT-32`.
- **Expected behavior:** FLASH-01 trả flashcard Cloud tĩnh; FLASH-02 xác minh được `cardId`, `chapterId`, `subsectionId` từ cùng nguồn dữ liệu mà Frontend hiển thị.
- **Contract/source of truth:** `cloudFlashcards` được export bởi `lib/curriculum.js`; nội dung thẻ không được sao chép vào Firestore.
- **Owner:** `Shared`.
- **Việc đã sửa:** `lib/server/flashcard-catalog.js` đọc cả lesson catalog ghép và registry flashcard độc lập của Cloud, tiếp tục chuẩn hóa về schema FLASH-01/02 hiện hữu.
- **Cách verify:** Backend build; catalog trả đủ card Cloud; lookup từng `cardId` trả đúng chapter/subsection; unknown card vẫn trả `null` để service phát `FLASHCARD_NOT_FOUND`.
- **Lỗi được unblock:** `INT-09`; mở đường cho Frontend nối FLASH-01/02 và refresh state sau review.
- **Kết quả verify:** `npm.cmd run build` thành công; kiểm tra chéo nguồn tĩnh xác nhận 12 flashcard, 12/12 `subsectionId` đều thuộc 64 subsection Cloud và không có liên kết lỗi. ESLint các file thay đổi thành công.
- **Trạng thái:** `VERIFIED`.

### REPAIR-BE-01 — Chặn nộp subset của đề quiz đã cấp

- **Mismatch:** `INT-14`.
- **Expected behavior:** QUIZ-02 chỉ chấm khi `questionsState` chứa đúng toàn bộ ID của pool do cùng input QUIZ-01 xác định; cho phép đổi thứ tự câu nhưng không cho thiếu, thêm hoặc lặp ID.
- **Contract/source of truth:** QUIZ-01/02 và các lỗi đã chốt `QUESTION_SET_MISMATCH`, `DUPLICATE_QUESTION_ID`; không thay request/response schema.
- **Owner:** `Backend`.
- **Việc đã sửa:** Thêm validation thuần cho tập ID và gọi trước khi chấm/ghi Firestore. Submission subset hoặc có ID ngoài đề trả `QUESTION_SET_MISMATCH`; ID lặp trả `DUPLICATE_QUESTION_ID`.
- **Cách verify:** Unit test full set khác thứ tự, subset, ID ngoài đề, duplicate và empty; chạy toàn bộ backend tests và production build.
- **Lỗi được unblock:** Phần bảo mật Backend của `INT-11/12`; việc đồng bộ selector `INT-15/31` vẫn bị `DECISION-04` block.
- **Kết quả verify:** `npm.cmd run test:backend` qua 13/13 test, gồm 5 test mới cho question-set validation; ESLint thành công; `npm.cmd run build` thành công.
- **Trạng thái:** `VERIFIED`.

## 1. Dependency gate

Thứ tự dự kiến sau khi các quyết định dưới đây được chốt:

1. Auth/session và vòng đời tài khoản.
2. Shared ID/catalog/data source.
3. API request/response/error contract.
4. Quiz và các feature-specific flow.
5. Report/export và tính năng quản trị thứ cấp.
6. Regression, cấu hình deploy và đồng bộ tài liệu.

Hiện chưa thể hoàn thiện task graph cho toàn bộ 42 mismatch integration và 4 mismatch tài liệu vì các quyết định bên dưới làm thay đổi contract, ownership hoặc phạm vi dữ liệu của nhiều task hạ nguồn.

## 2. NEED_DECISION

### DECISION-01 — Phạm vi xử lý dữ liệu khi hủy tài khoản cũ

- **Mismatch liên quan:** `INT-05`; task `BE-03`; Assumption 13 trong `plan.md`.
- **Expected behavior cần chốt:** Sau khi giữ lại duy nhất tài khoản `admin/admin`, dữ liệu gắn với các tài khoản bị hủy phải được xử lý thế nào.
- **Contract/source of truth hiện có:** Yêu cầu trước đây đã chốt hủy các tài khoản hiện có trừ `admin/admin`. `plan.md` yêu cầu dry-run, backup và xóa/disable tài khoản cũ, nhưng chỉ đang giả định rằng không mặc định xóa `rankings`/progress vì ownership chưa rõ.
- **Owner:** `Shared` — Backend thực hiện migration; nghiệp vụ quyết định retention; Frontend xóa local credential cũ.
- **Cần quyết định:**
  1. Chỉ xóa/disable Firebase Auth và profile, giữ progress/rankings dưới dạng dữ liệu mồ côi;
  2. Xóa cả Auth, profile, progress, quiz summary, flashcard state và rankings của các UID bị hủy;
  3. Ẩn danh hóa lịch sử học/quiz rồi xóa dữ liệu định danh.
- **Việc phải sửa sau khi chốt:** Khóa target collections/documents chính xác; bổ sung retention contract vào `plan.md`; thiết kế dry-run, backup/export, execution log và client cleanup cho `studymaster_users`.
- **Cách verify sau khi chốt:** Dry-run liệt kê đúng UID và document liên quan; backup đọc lại được; không chạm admin; không còn credential local được backend chấp nhận; kết quả Firestore đúng retention policy đã chọn.
- **Bị block bởi quyết định này:** Kế hoạch migration tài khoản, cleanup local auth, kiểm thử auth end-to-end và đối soát report/ranking sau migration.

### DECISION-02 — Giữ, thay thế hay loại bỏ quản trị người dùng hiện hữu

- **Mismatch liên quan:** `INT-19`, một phần `INT-18`, `INT-26` và `DOC-02`.
- **Expected behavior cần chốt:** Sau integration, admin có tiếp tục quản lý danh sách user, khóa/mở tài khoản, reset password, mở khóa môn và audit log hay chỉ được xem/xuất learning report như contract hiện tại.
- **Contract/source of truth hiện có:** UI hiện có các chức năng quản trị dựa trên `localStorage`; `plan.md` chỉ định nghĩa backend contract cho auth/session và report, hoàn toàn chưa có API contract cho user CRUD, account lock, password reset, subject unlock hoặc admin audit log.
- **Owner:** `Shared` — quyết định phạm vi sản phẩm và contract là Shared; Backend sở hữu API/quyền; Frontend sở hữu UI.
- **Cần quyết định:**
  1. Giữ đầy đủ các chức năng hiện hữu và bổ sung backend contract tương ứng;
  2. Chỉ giữ chức năng phù hợp Firebase Auth như xem user, disable/enable và gửi reset-password; bỏ subject unlock/audit local nếu chưa cần;
  3. Tạm loại toàn bộ user-management khỏi UI, chỉ giữ learning report cho admin/teacher.
- **Việc phải sửa sau khi chốt:** Nếu giữ, phải cập nhật `plan.md` trước với endpoint, schema, quyền, audit và error codes; nếu bỏ/tạm ẩn, phải xác định rõ UI/route/state nào ngừng cung cấp và dữ liệu local nào được cleanup.
- **Cách verify sau khi chốt:** Ma trận quyền admin/teacher/student; kiểm thử từng hành động qua backend session; không còn CRUD quản trị dựa trên localStorage; Firestore rules không bị bypass.
- **Bị block bởi quyết định này:** Repair admin dashboard, profile/account lifecycle, role `teacher`, API facade admin, rules và regression quản trị.

### DECISION-03 — Practice quiz có phải kết quả chính thức hay không

- **Mismatch liên quan:** `INT-16`, `INT-17`, `INT-41`, `INT-42`; ảnh hưởng `INT-35` và `INT-40`.
- **Expected behavior cần chốt:** Xác định Practice attempt có được ghi vào Firestore, tính `attemptsCount`, cập nhật `bestScore10`, điều kiện hoàn thành chương, leaderboard và learning report hay chỉ cung cấp phản hồi luyện tập tạm thời.
- **Contract/source of truth hiện có:** `plan.md` mô tả hai chế độ Practice/Exam và QUIZ-02 để nộp/chấm quiz, nhưng không quy định mode nào tạo kết quả chính thức. FE hiện chấm Practice ở client; BE chỉ ghi nhận submission đi qua QUIZ-02.
- **Owner:** `Shared` — nghiệp vụ chốt semantics; Backend chấm/ghi dữ liệu; Frontend hiển thị và gọi đúng flow.
- **Cần quyết định:**
  1. Chỉ Exam là kết quả chính thức; Practice không tác động completion/report/leaderboard;
  2. Practice cũng là kết quả chính thức và phải được server cấp đề/chấm/ghi như Exam;
  3. Practice được lưu lịch sử riêng để theo dõi nhưng không tác động điểm cao nhất, completion hoặc leaderboard.
- **Việc phải sửa sau khi chốt:** Cập nhật QUIZ-01/02 hoặc thêm contract mode-specific trước khi code; xác định collection/field, scoring, attempts và report aggregation; loại bỏ ghi Firestore trực tiếp từ client.
- **Cách verify sau khi chốt:** Chạy cùng một bộ đáp án ở Practice và Exam; kiểm tra response, attempt record, best score, chapter completion, leaderboard và report đều đúng semantics đã chọn; rules tiếp tục cấm client tự ghi điểm.
- **Bị block bởi quyết định này:** Repair Practice flow, ranking consolidation, quiz-to-learning-state refresh, report attempts và regression completion `>= 7.0`.

### DECISION-04 — Namespace hợp lệ của `examSetId` trong trick mode

- **Mismatch liên quan:** `INT-15`, `INT-31`; ảnh hưởng `INT-11`, `INT-12`, `INT-14`.
- **Expected behavior cần chốt:** FE và BE phải dùng cùng tập giá trị `examSetId`, phân biệt rõ chọn toàn bộ đề bẫy, một bộ bẫy cụ thể và ID không hợp lệ.
- **Contract/source of truth hiện có:** QUIZ-01/02 chỉ khai báo `examSetId: string | number`. FE phát sinh `"trick"`, `"trick-1"`, `"trick-2"`; BE coi mọi chuỗi không parse được là yêu cầu lấy toàn bộ tricks, nên chuỗi tùy ý cũng có thể hợp lệ ngoài ý muốn.
- **Owner:** `Shared` — schema/namespace là contract chung; Backend validate; Frontend phát đúng ID.
- **Cần quyết định:**
  1. Cho phép `"trick"` là sentinel lấy toàn bộ và `"trick-{N}"` là bộ cụ thể;
  2. Chỉ cho phép `"trick-{N}"`, không có sentinel tổng;
  3. Tách `examSetId` khỏi lựa chọn tổng bằng field/mode riêng, ví dụ `selection: "all" | "set"`.
- **Việc phải sửa sau khi chốt:** Cập nhật contract QUIZ-01/02 trong `plan.md` trước; tạo validation whitelist; đồng bộ selector FE; bảo đảm ID sai trả `EXAM_SET_NOT_FOUND` hoặc `VALIDATION_ERROR` theo contract được chọn.
- **Cách verify sau khi chốt:** Contract tests cho từng ID hợp lệ, ID biên và chuỗi tùy ý; QUIZ-01 và QUIZ-02 phải resolve cùng một question set; submission không thể đổi namespace để vượt kiểm tra toàn bộ đề đã cấp.
- **Bị block bởi quyết định này:** Repair quiz selector, server validation question set, `auto`/trick resolution và test bảo mật QUIZ-01 → QUIZ-02.

## 3. Điều kiện tiếp tục

Chỉ sau khi bốn quyết định trên được xác nhận mới tiếp tục viết bản repair plan đầy đủ. Bản tiếp theo sẽ:

- sắp toàn bộ mismatch theo dependency thay vì thứ tự file/ID;
- với từng `INT-*` và `DOC-*`, ghi expected behavior, source of truth, owner, thay đổi cần làm, cách verify và quan hệ block;
- không thay API contract ngầm; mọi contract phát sinh từ quyết định sẽ được cập nhật trong `plan.md` trước khi code theo rule dự án.
