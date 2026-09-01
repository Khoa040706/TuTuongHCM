# Kế hoạch triển khai môn Cloud Computing và hệ thống học tập đồng bộ

> Trạng thái: Chờ người dùng xác nhận trước khi triển khai.
>
> Đây chỉ là kế hoạch và hợp đồng kỹ thuật. Chưa viết source code, chưa tạo dữ liệu Cloud, chưa thay đổi Firebase và chưa xóa tài khoản.

## 1. Điều kiện tiên quyết và ranh giới bắt buộc

1. `AGENTS.md` và RULE ở đầu `context.md` hiện vẫn cấm tạo/sửa/xóa mọi `data/*.js` và giới hạn phạm vi ở frontend.
2. Tính năng đã thống nhất cần tạo dữ liệu Cloud trong `data/`, sửa hai cổng dữ liệu `data/index.js`, `data/lessons.js`, đồng thời xây backend/Auth/Firestore/API.
3. Vì vậy, **không bắt đầu implementation** cho đến khi người dùng cập nhật `AGENTS.md` và `context.md` để cấp quyền rõ ràng cho các thay đổi trên.
4. Sau khi ngoại lệ có hiệu lực:
   - Chỉ tạo file dữ liệu mới dành cho Cloud Computing.
   - Chỉ sửa `data/index.js` và `data/lessons.js` để đăng ký môn/chương nếu rule mới cho phép cụ thể.
   - Không sửa nội dung học thuật hoặc ngân hàng câu hỏi cũ nếu chưa có sự đồng ý riêng.
   - Không chạy generator/migration có thể ghi đè hàng loạt `data/*.js`.
5. Nếu cần field/endpoint ngoài contract này, phải cập nhật `plan.md` và xin xác nhận trước.

## 2. Tổng quan tính năng

StudyMaster bổ sung môn **Điện toán đám mây (Cloud Computing)** từ toàn bộ tài liệu Markdown hiện có trong `taskcanlam`. Bảy tài liệu hiện tại là 7 chương đầu; kiến trúc phải cho phép thêm chương sau này.

Thứ tự chương:

1. Giới thiệu về Điện toán đám mây.
2. Hạ tầng và Công nghệ Điện toán đám mây.
3. Software as a Service (SaaS).
4. Platform as a Service (PaaS) — nguồn `PaaS_GhiChu.md`.
5. Infrastructure as a Service (IaaS).
6. Identity as a Service (IDaaS).
7. Cloud Data Storage.

Markdown được biên tập thành ES Modules theo cây `Subject -> Chapter -> Section -> Subsection -> content blocks`. Được chuẩn hóa nhẹ tiêu đề, thuật ngữ song ngữ và cách trình bày nhưng không đổi ý nghĩa học thuật hay thêm khẳng định không có trong nguồn.

Trải nghiệm học gồm:

- Hero Banner Section 0 tổng quan toàn chương bằng pipeline/radar/bản đồ kiến thức tương tác.
- Nội dung đọc có cấu trúc, bảng, định nghĩa, ghi nhớ và visualizer phù hợp từng mục.
- Flashcard thuật ngữ và ôn lặp lại theo SM-2 đơn giản hóa.
- Tìm kiếm toàn môn theo thuật ngữ, từ đồng nghĩa và từ viết tắt Việt–Anh; query tiếng Anh trả cả kết quả Anh và Việt tương ứng.
- Bản đồ khái niệm `IaaS -> PaaS -> SaaS -> IDaaS -> Storage`.
- Decision sandbox cho deployment model, server và storage.
- Bảng so sánh tương tác và kéo-thả kiến trúc/quy trình.
- Bookmark, đánh dấu thủ công/tự động “Cần ôn lại” và tiến độ subsection.
- Dashboard admin xem tiến độ/kết quả và xuất Excel/PDF.

Người dùng bắt buộc đăng nhập mới được học hoặc làm bài; người chưa xác thực chỉ ở màn hình đăng nhập. Hỗ trợ Google và email/mật khẩu qua Firebase Auth. Giao diện tối ưu laptop/desktop; mobile/tablet ngoài phạm vi nhưng viewport nhỏ không được vỡ bố cục.

### 2.1. Quy tắc hoàn thành

- Subsection hoàn thành khi sentinel cuối nội dung đã xuất hiện trong viewport **và** người dùng bấm “Hoàn thành”.
- Chương có quiz hoàn thành khi tất cả subsection bắt buộc hoàn thành và điểm quiz cao nhất `>= 7.0/10`.
- Thi lại dùng điểm cao nhất; điểm thấp hơn không làm mất trạng thái đã đạt.
- Cloud Computing chưa có quiz trong đợt này nên tạm hoàn thành chương khi đủ subsection.
- Khi quiz Cloud được bổ sung, bật điều kiện quiz nhưng giữ nguyên tiến độ đọc.

### 2.2. Ngoài phạm vi

- Không biên soạn quiz/ngân hàng câu hỏi Cloud.
- Không quản lý lớp, giao bài hoặc cho giáo viên sửa giáo trình.
- Không theo dõi hay báo cáo thời gian học.
- Không dịch toàn bộ giáo trình và không làm semantic search toàn văn.
- Không làm app/UX mobile hoặc tablet.
- Không sửa nội dung dữ liệu cũ.

## 3. Tái sử dụng và xây mới

### 3.1. Tận dụng/mở rộng code hiện có

| Thành phần | Cách sử dụng |
|---|---|
| `app/page.js` | Giữ vai trò SPA orchestrator; thay session localStorage bằng session đã xác minh; nối learning state và UI mới. |
| `components/Sidebar.js` | Giữ cây Subject/Chapter/Section/Subsection; thêm trạng thái hoàn thành, bookmark, cần ôn. |
| `components/ContentRenderer.js` | Giữ renderer block; đăng ký thêm block/visualizer Cloud và completion sentinel. |
| `components/DrawingCanvas.js` | Giữ nguyên canvas và tọa độ chuẩn hóa `[0,1]`; chưa đồng bộ nét vẽ qua Firestore. |
| `components/Quiz.js` | Giữ UI/hai chế độ; dùng Server Action an toàn; nhận điểm cao nhất và completion. Không thêm quiz Cloud. |
| `app/actions/quiz.js` | Sửa contract để xác thực session, lọc đề đúng, chấm server, lưu UID và cập nhật progress. |
| `components/admin/*` | Giữ dashboard/lazy section/drawer; thêm báo cáo học tập thật từ API. |
| `lib/firebase.js` | Tiếp tục là Firebase Web SDK client; chuyển config sang biến môi trường public. |
| `data/index.js` | Placeholder `cloud-computing` đã có; sau khi được phép, đăng ký 7 chương và giữ `questionsMap: {}`. |
| `data/lessons.js` | Sau khi được phép, import/ghép 7 module Cloud. |
| ExcelJS, jsPDF, html2canvas | Tái sử dụng cho xuất Excel/PDF. |
| Toast, modal, ErrorBoundary, Tailwind tokens, GSAP hooks | Tái sử dụng cho feedback, lỗi, style và motion. |

### 3.2. Xây mới

- Firebase Admin SDK, server session và authorization.
- Firestore Security Rules, indexes, repository/service cho tiến độ.
- Route Handlers cho auth, learning state, completion, bookmark, review, flashcard và báo cáo.
- Migration một lần loại bỏ tài khoản cũ, chỉ giữ admin theo yêu cầu.
- 7 module nội dung Cloud, glossary và catalog flashcard.
- Component Cloud: chapter overview, concept map, comparison, sandbox, drag-drop.
- Component học tập dùng chung: completion, bookmark, review, progress, flashcard.
- Tab báo cáo admin và export Excel/PDF.
- Kiểm thử backend/API/Firestore và QA nội dung.

## 4. Cấu trúc thư mục dự kiến

> Mục trong `data/` chỉ được tạo/sửa sau khi rule được cập nhật.

```text
app/
  api/
    auth/
      admin-token/route.js
      session/route.js
    learning/
      state/route.js
      subsections/[subsectionId]/completion/route.js
      bookmarks/[subsectionId]/route.js
      review-items/[subsectionId]/route.js
      flashcards/due/route.js
      flashcards/[cardId]/reviews/route.js
    admin/
      learning-report/route.js
      learning-report/export/route.js
  actions/quiz.js                    # sửa
  page.js                            # sửa

components/
  cloud/
    CloudChapterHero.js
    CloudConceptMap.js
    CloudComparisonExplorer.js
    CloudDecisionSandbox.js
    CloudArchitectureDnD.js
    CloudSearchPanel.js
    CloudFlashcardDeck.js
  learning/
    SubsectionCompletion.js
    LearningProgressPanel.js
    BookmarkButton.js
    ReviewToggle.js
    ReviewQueue.js
  admin/
    AdminLearningReportTab.js
    AdminReportFilters.js
    AdminReportExport.js
  ContentRenderer.js                 # sửa registry
  Sidebar.js                         # sửa trạng thái
  Quiz.js                            # sửa integration

hooks/
  useAuthSession.js
  useLearningState.js
  useSubsectionCompletion.js

lib/
  firebase.js                        # Firebase client
  client/api.js
  server/
    firebase-admin.js
    auth.js
    api-response.js
    learning-repository.js
    learning-service.js
    flashcard-scheduler.js
    report-service.js

data/
  index.js                            # sửa placeholder sau khi được phép
  lessons.js                          # đăng ký modules sau khi được phép
  cloud-computing-chapter-1.js        # mới
  cloud-computing-chapter-2.js
  cloud-computing-chapter-3.js
  cloud-computing-chapter-4.js
  cloud-computing-chapter-5.js
  cloud-computing-chapter-6.js
  cloud-computing-chapter-7.js
  cloud-computing-glossary.js
  cloud-computing-flashcards.js

firebase.rules
firestore.indexes.json
scripts/migrate-auth-users.mjs        # không ghi data/
tests/api/
tests/learning/
tests/content/
```

Không tạo pipeline MDX vì checkout hiện tại vẫn dùng structured JavaScript.

## 5. Mô hình dữ liệu Firestore

### 5.1. `users/{uid}`

```js
{
  uid: string,
  email: string | null,
  displayName: string,
  photoURL: string | null,
  role: "student" | "admin" | "teacher",
  disabled: boolean,
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

Không lưu password trong Firestore/localStorage. Quyền API dựa trên session/custom claims do server xác minh, không tin `role` từ client.

### 5.2. `users/{uid}/subsectionProgress/{subjectId}__{subsectionId}`

```js
{
  subjectId: string,
  chapterId: string,
  sectionId: string,
  subsectionId: string,
  reachedEnd: true,
  completed: true,
  completedAt: Timestamp,
  updatedAt: Timestamp
}
```

Chỉ tạo khi đã đạt sentinel và bấm hoàn thành; không lưu thời lượng học.

### 5.3. `users/{uid}/chapterProgress/{subjectId}__{chapterId}`

```js
{
  subjectId: string,
  chapterId: string,
  totalRequiredSubsections: number,
  completedSubsections: number,
  allSubsectionsCompleted: boolean,
  quizRequired: boolean,
  bestQuizScore10: number | null,
  completed: boolean,
  completedAt: Timestamp | null,
  updatedAt: Timestamp
}
```

Cloud đặt `quizRequired: false`. Chương có quiz: `completed = allSubsectionsCompleted && bestQuizScore10 >= 7.0`.

### 5.4. `users/{uid}/bookmarks/{subjectId}__{subsectionId}`

```js
{
  subjectId: string,
  chapterId: string,
  sectionId: string,
  subsectionId: string,
  createdAt: Timestamp
}
```

Tiêu đề hiển thị lấy từ dữ liệu tĩnh, không nhân bản vào Firestore.

### 5.5. `users/{uid}/reviewItems/{subjectId}__{subsectionId}`

```js
{
  subjectId: string,
  chapterId: string,
  sectionId: string,
  subsectionId: string,
  manual: boolean,
  systemReasons: Array<"FLASHCARD_AGAIN" | "FLASHCARD_HARD" | "CONCEPT_ERRORS" | "QUIZ_BELOW_THRESHOLD">,
  needsReview: boolean,
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

`needsReview = manual || systemReasons.length > 0`. Gỡ manual không được xóa system reasons.

### 5.6. `users/{uid}/flashcardProgress/{subjectId}__{cardId}`

```js
{
  subjectId: string,
  chapterId: string,
  subsectionId: string,
  cardId: string,
  repetitions: number,
  intervalDays: number,
  easeFactor: number,
  lastRating: "again" | "hard" | "good" | "easy",
  lastReviewedAt: Timestamp,
  nextReviewAt: Timestamp,
  updatedAt: Timestamp
}
```

Nội dung thẻ nằm trong dữ liệu tĩnh; Firestore chỉ lưu lịch ôn.

### 5.7. `users/{uid}/quizSummary/{subjectId}__{chapterId}`

```js
{
  subjectId: string,
  chapterId: string,
  attemptsCount: number,
  bestScore10: number,
  bestRawScore: number,
  bestTotal: number,
  lastAttemptAt: Timestamp,
  updatedAt: Timestamp
}
```

`rankings` hiện hữu tiếp tục giữ từng lượt thi. Record mới bổ sung `uid`; giữ các field cũ `name`, `subjectId`, `score`, `total`, `time`, `date`, `chapterId`, `examSetId` để không phá leaderboard.

## 6. Danh sách task Backend

### BE-01 — Firebase server boundary

- Cài Firebase Admin SDK tách khỏi SDK client.
- Đưa credential/config vào environment; không commit service-account secret.
- Tạo helper session/UID/role và error envelope.

### BE-02 — Auth và session

- Giữ Google, bổ sung email/password bằng Firebase Auth.
- Đổi ID token lấy HttpOnly session cookie.
- Bảo vệ API học tập/admin.
- Luồng `admin/admin` dùng custom token, không hard-code secret trong client.
- Người chưa có session không truy cập study/quiz/admin.

### BE-03 — Migration tài khoản

- Liệt kê nguồn tài khoản trong Firebase Auth, Firestore và contract localStorage.
- Dry-run và backup/export trước khi xóa.
- Xóa/disable tài khoản cũ ngoại trừ admin.
- Client xóa `studymaster_users` khi nâng phiên bản; credential local cũ luôn bị backend từ chối.
- Provision hồ sơ và custom claim admin; migration không tự chạy trong build.

### BE-04 — Firestore learning repository

- Repository/service cho progress, chapter summary, bookmark, review và flashcard.
- Transaction/batch cho completion và điểm cao nhất.
- Chỉ lưu timestamp sự kiện, không lưu thời gian học.
- Tạo indexes cho báo cáo và thẻ đến hạn.

### BE-05 — Security Rules

- Học viên chỉ truy cập dữ liệu của chính UID.
- Học viên không tự sửa role, quiz score hoặc system review reasons.
- Admin/teacher đọc báo cáo qua backend; client không quét toàn bộ user.
- Chặn client ghi trực tiếp `rankings` sau khi Quiz chuyển sang server action.

### BE-06 — Learning API

- API snapshot learning state và hoàn thành subsection.
- Kiểm tra subject/chapter/section/subsection với catalog tĩnh.
- Server tự tính timestamp, tổng subsection và completion.

### BE-07 — Bookmark/review API

- Thêm/xóa bookmark; bật/tắt manual review.
- Service nội bộ thêm/gỡ system reason từ flashcard, concept interaction và quiz.
- Manual action không xóa system reason.

### BE-08 — Flashcard scheduler

- API lấy thẻ đến hạn và ghi rating.
- SM-2 đơn giản hóa theo Giả định.
- `again/hard` cập nhật review reason; gỡ khi đạt điều kiện ôn lại.
- Server tính `nextReviewAt`.

### BE-09 — Mở rộng quiz hiện có

- `getExamQuestions`: xác thực user, lọc đúng `examSetId`, loại đáp án/lời giải.
- `submitExamScore`: bỏ tin cậy `name`, lấy UID/displayName từ session.
- Kiểm tra ID câu hỏi, option index, câu trùng và payload.
- Ghi `rankings`, cập nhật `quizSummary`/`chapterProgress` bằng transaction.
- Trả `score10`, `bestScore10`, `chapterCompleted`.
- Không tạo question bank Cloud.

### BE-10 — Admin report

- Tổng hợp tiến độ, điểm cao nhất, số lượt quiz, nội dung cần ôn và flashcard đến hạn.
- Không tổng hợp thời gian học.
- Xuất Excel bằng ExcelJS và PDF bằng jsPDF.
- Xác minh role admin/teacher.

### BE-11 — Kiểm thử backend

- Bổ sung test runner phù hợp JavaScript/Next.js.
- Test validation, authorization, error envelope, completion, highest-score và SM-2.
- Test Firestore bằng emulator/adapter mock; không ghi production.
- Test JSON/XLSX/PDF đúng schema.

## 7. Danh sách task Frontend

### FE-01 — Biên tập 7 chương

- Mapping từng Markdown thành Chapter/Section/Subsection.
- Chuẩn hóa thuật ngữ Việt–Anh nhưng không đổi nghĩa.
- Hero overview Section 0 cho từng chương.
- Chọn visualizer theo nội dung, không ép mọi mục có đủ tính năng.
- Glossary/flashcard ID ổn định; kiểm tra ID/link/nội dung rỗng.

### FE-02 — Đăng ký Cloud subject

- Khi được cấp quyền, điền 7 chương vào placeholder `cloud-computing` trong `data/index.js`.
- Nối 7 modules trong `data/lessons.js`.
- Giữ `questionsMap: {}` và ẩn quiz Cloud.
- Bảo đảm mở rộng được chương 8+.

### FE-03 — Auth UI/guard

- Thay local plaintext login bằng Google/email-password Firebase Auth.
- Trao đổi ID token lấy session; phục hồi bằng `/api/auth/session`.
- `admin/admin` nhận custom token từ endpoint admin.
- Chưa đăng nhập thì không mount nội dung/quiz/admin.

### FE-04 — Learning state/completion

- Hooks tải/cache state theo subject.
- Sentinel cuối subsection bằng `IntersectionObserver`.
- Chỉ bật hoàn thành sau khi thấy sentinel.
- Hiển thị progress ở nội dung, Sidebar và panel; optimistic UI có rollback.

### FE-05 — Bookmark/review

- Bookmark subsection, manual review toggle và nhãn phân biệt nguồn.
- Review Queue deep-link đúng subsection.
- Không xóa system reason qua manual toggle.

### FE-06 — Flashcard

- Deck lật thẻ bằng keyboard/click; rating `again/hard/good/easy`.
- Hiển thị lịch ôn và số thẻ đến hạn.
- Kết nối scheduler; không lưu nội dung thẻ trong Firestore.

### FE-07 — Tìm kiếm Việt–Anh

- Index client từ `vi`, `en`, `aliases`, `abbreviation`.
- Chuẩn hóa Unicode/case/space; không dịch máy/AI.
- Query Anh trả nhãn Anh, Việt và link subsection.

### FE-08 — Visualizer Cloud

- 7 hero overview, concept map, comparison, decision sandbox và drag-drop.
- Phản hồi học thuật cho lựa chọn/sắp xếp.
- Drag-drop có fallback bàn phím; không phụ thuộc touch.
- Đăng ký block mới vào renderer, ErrorBoundary và lazy-load phần nặng.

### FE-09 — Quiz integration

- Exam mode dùng câu hỏi sạch từ Server Action.
- Hiển thị điểm hiện tại/cao nhất và đồng bộ completion `>= 7.0`.
- Không hiện CTA quiz Cloud khi chưa có question bank.

### FE-10 — Admin report UI

- Thêm tab vào dashboard hiện có.
- Filter user/môn/chương/completion/review.
- Hiển thị progress, điểm cao nhất, lượt quiz, review, flashcard đến hạn.
- Xuất Excel/PDF; không hiển thị thời gian học.

### FE-11 — Responsive/accessibility/hiệu năng

- Kiểm thử laptop/desktop; viewport nhỏ không overflow/vỡ layout.
- Lazy-load visualizer/report; không làm nặng login bundle.
- Keyboard, focus, label, contrast, `prefers-reduced-motion`.
- Không animation loop nặng hoặc tracker thời gian nền.

### FE-12 — QA

- Đối chiếu render với 7 Markdown theo từng subsection.
- Kiểm tra glossary/flashcard/map/navigation link.
- Test completion: chỉ cuộn, chỉ bấm, đủ cả hai.
- Test Google/email/admin/logout/session expiry và đồng bộ hai phiên.
- Test report rỗng/đầy đủ; chạy lint và bắt buộc `npm run build`.

## 8. Quy ước API chung

Base path: `/api`.

- API học tập dùng HttpOnly session cookie; client không gửi UID trong body.
- API admin yêu cầu role được server xác minh là `admin` hoặc `teacher`.
- Firebase ID token chỉ gửi đến endpoint tạo session.

### Success envelope JSON

```js
{
  ok: true,
  data: object | array | null,
  meta?: object
}
```

### Error envelope JSON

```js
{
  ok: false,
  error: {
    code: string,
    message: string,
    fields?: Record<string, string>
  }
}
```

Không trả stack trace, token, Firebase credential hoặc chi tiết giúp dò tài khoản trong production.

| HTTP | Mã lỗi chung | Ý nghĩa |
|---:|---|---|
| 400 | `VALIDATION_ERROR` | Body/query/path sai schema. |
| 401 | `UNAUTHENTICATED` | Không có hoặc hết hạn session. |
| 403 | `FORBIDDEN` | Không đủ quyền. |
| 404 | `NOT_FOUND` | Resource không tồn tại. |
| 409 | `CONFLICT` | Request xung đột trạng thái hiện tại. |
| 500 | `INTERNAL_ERROR` | Lỗi không dự kiến. |
| 503 | `DATASTORE_UNAVAILABLE` | Firebase/Firestore tạm không khả dụng. |

## 9. API contract chi tiết

### AUTH-01 — Custom token cho `admin/admin`

**Method/endpoint:** `POST /api/auth/admin-token`
**Auth:** Không yêu cầu session.

**Request**

```js
{
  username: string,
  password: string
}
```

**Response 200**

```js
{
  ok: true,
  data: { customToken: string }
}
```

Client gọi Firebase `signInWithCustomToken`, lấy ID token rồi gọi AUTH-02.

**Lỗi:** `400 VALIDATION_ERROR`, `401 INVALID_CREDENTIALS`, `403 ACCOUNT_DISABLED`, `500 INTERNAL_ERROR`.

### AUTH-02 — Tạo server session

**Method/endpoint:** `POST /api/auth/session`

**Request**

```js
{
  idToken: string,
  rememberMe: boolean
}
```

**Response 200**

```js
{
  ok: true,
  data: {
    user: {
      uid: string,
      email: string | null,
      displayName: string,
      photoURL: string | null,
      role: "student" | "admin" | "teacher"
    }
  }
}
```

Response đặt cookie HttpOnly, Secure, SameSite. `rememberMe` chỉ điều khiển tuổi thọ cookie, không lưu password.

**Lỗi:** `400 VALIDATION_ERROR`, `401 INVALID_ID_TOKEN`, `403 ACCOUNT_DISABLED`, `503 DATASTORE_UNAVAILABLE`.

### AUTH-03 — Đọc session

**Method/endpoint:** `GET /api/auth/session`

**Request:** Không có body.

**Response 200:** cùng `data.user` của AUTH-02.
**Lỗi:** `401 UNAUTHENTICATED`, `503 DATASTORE_UNAVAILABLE`.

### AUTH-04 — Đăng xuất

**Method/endpoint:** `DELETE /api/auth/session`
**Request:** Không có body.

**Response 200**

```js
{
  ok: true,
  data: { authenticated: false }
}
```

Endpoint xóa session cookie; client đồng thời gọi Firebase `signOut`.

### LEARN-01 — Lấy learning state của môn

**Method/endpoint:** `GET /api/learning/state?subjectId={subjectId}`
**Auth:** User session.

**Response 200**

```js
{
  ok: true,
  data: {
    subjectId: string,
    chapters: Array<{
      chapterId: string,
      totalRequiredSubsections: number,
      completedSubsections: number,
      allSubsectionsCompleted: boolean,
      quizRequired: boolean,
      bestQuizScore10: number | null,
      completed: boolean,
      completedAt: string | null
    }>,
    subsections: Array<{
      chapterId: string,
      sectionId: string,
      subsectionId: string,
      completed: boolean,
      completedAt: string | null
    }>,
    bookmarks: Array<{
      chapterId: string,
      sectionId: string,
      subsectionId: string,
      createdAt: string
    }>,
    reviewItems: Array<{
      chapterId: string,
      sectionId: string,
      subsectionId: string,
      manual: boolean,
      systemReasons: string[],
      needsReview: boolean,
      updatedAt: string
    }>,
    flashcards: {
      totalTracked: number,
      dueCount: number
    }
  }
}
```

**Lỗi:** `400 VALIDATION_ERROR`, `401 UNAUTHENTICATED`, `404 SUBJECT_NOT_FOUND`, `503 DATASTORE_UNAVAILABLE`.

### LEARN-02 — Hoàn thành subsection

**Method/endpoint:** `PUT /api/learning/subsections/{subsectionId}/completion`
**Auth:** User session.

**Request**

```js
{
  subjectId: string,
  chapterId: string,
  sectionId: string,
  reachedEnd: true
}
```

**Response 200**

```js
{
  ok: true,
  data: {
    subsection: {
      subsectionId: string,
      completed: true,
      completedAt: string
    },
    chapter: {
      chapterId: string,
      completedSubsections: number,
      totalRequiredSubsections: number,
      allSubsectionsCompleted: boolean,
      quizRequired: boolean,
      bestQuizScore10: number | null,
      completed: boolean,
      completedAt: string | null
    }
  }
}
```

Request lặp lại là idempotent.

**Lỗi:** `400 VALIDATION_ERROR`, `400 SCROLL_END_REQUIRED`, `401 UNAUTHENTICATED`, `404 SUBJECT_NOT_FOUND`, `404 CHAPTER_NOT_FOUND`, `404 SUBSECTION_NOT_FOUND`, `503 DATASTORE_UNAVAILABLE`.

### LEARN-03 — Thêm bookmark

**Method/endpoint:** `PUT /api/learning/bookmarks/{subsectionId}`

**Request**

```js
{
  subjectId: string,
  chapterId: string,
  sectionId: string
}
```

**Response 200**

```js
{
  ok: true,
  data: {
    subjectId: string,
    chapterId: string,
    sectionId: string,
    subsectionId: string,
    createdAt: string
  }
}
```

Idempotent nếu đã tồn tại.
**Lỗi:** `400 VALIDATION_ERROR`, `401 UNAUTHENTICATED`, `404 SUBSECTION_NOT_FOUND`, `503 DATASTORE_UNAVAILABLE`.

### LEARN-04 — Xóa bookmark

**Method/endpoint:** `DELETE /api/learning/bookmarks/{subsectionId}?subjectId={subjectId}`

**Response 200**

```js
{
  ok: true,
  data: { subsectionId: string, bookmarked: false }
}
```

Idempotent nếu không tồn tại.
**Lỗi:** `400 VALIDATION_ERROR`, `401 UNAUTHENTICATED`, `503 DATASTORE_UNAVAILABLE`.

### LEARN-05 — Bật manual review

**Method/endpoint:** `PUT /api/learning/review-items/{subsectionId}`

**Request**

```js
{
  subjectId: string,
  chapterId: string,
  sectionId: string
}
```

**Response 200**

```js
{
  ok: true,
  data: {
    subsectionId: string,
    manual: true,
    systemReasons: string[],
    needsReview: true,
    updatedAt: string
  }
}
```

**Lỗi:** `400 VALIDATION_ERROR`, `401 UNAUTHENTICATED`, `404 SUBSECTION_NOT_FOUND`, `503 DATASTORE_UNAVAILABLE`.

### LEARN-06 — Gỡ manual review

**Method/endpoint:** `DELETE /api/learning/review-items/{subsectionId}?subjectId={subjectId}`

**Response 200**

```js
{
  ok: true,
  data: {
    subsectionId: string,
    manual: false,
    systemReasons: string[],
    needsReview: boolean,
    updatedAt: string
  }
}
```

`needsReview` vẫn `true` nếu còn system reason.
**Lỗi:** `400 VALIDATION_ERROR`, `401 UNAUTHENTICATED`, `404 REVIEW_ITEM_NOT_FOUND`, `503 DATASTORE_UNAVAILABLE`.

### FLASH-01 — Lấy flashcard đến hạn

**Method/endpoint:** `GET /api/learning/flashcards/due?subjectId={subjectId}&limit={1..100}`
**Auth:** User session.

**Response 200**

```js
{
  ok: true,
  data: {
    subjectId: string,
    dueCount: number,
    cards: Array<{
      cardId: string,
      chapterId: string,
      subsectionId: string,
      front: string,
      back: string,
      vi: string,
      en: string,
      abbreviation: string | null,
      repetitions: number,
      intervalDays: number,
      easeFactor: number,
      nextReviewAt: string | null
    }>
  }
}
```

Thẻ chưa từng học được xem là đến hạn; nội dung được join từ catalog tĩnh.
**Lỗi:** `400 VALIDATION_ERROR`, `401 UNAUTHENTICATED`, `404 SUBJECT_NOT_FOUND`, `503 DATASTORE_UNAVAILABLE`.

### FLASH-02 — Ghi lần ôn flashcard

**Method/endpoint:** `POST /api/learning/flashcards/{cardId}/reviews`

**Request**

```js
{
  subjectId: string,
  rating: "again" | "hard" | "good" | "easy"
}
```

**Response 200**

```js
{
  ok: true,
  data: {
    cardId: string,
    rating: "again" | "hard" | "good" | "easy",
    repetitions: number,
    intervalDays: number,
    easeFactor: number,
    lastReviewedAt: string,
    nextReviewAt: string,
    reviewItem: {
      subsectionId: string,
      needsReview: boolean,
      systemReasons: string[]
    }
  }
}
```

**Lỗi:** `400 VALIDATION_ERROR`, `401 UNAUTHENTICATED`, `404 FLASHCARD_NOT_FOUND`, `409 REVIEW_SEQUENCE_CONFLICT`, `503 DATASTORE_UNAVAILABLE`.

### QUIZ-01 — Lấy đề an toàn (sửa Server Action)

**Method/transport:** Next.js Server Action `getExamQuestions`; HTTP method không áp dụng.

**Request:** đổi positional arguments thành object.

```js
{
  subjectId: string,
  chapterId: string,
  examSetId: string | number,
  isTrickMode: boolean
}
```

**Response thành công**

```js
{
  ok: true,
  data: {
    questions: Array<{
      id: string,
      question: string,
      options: string[],
      difficulty: "easy" | "medium" | "hard" | null,
      sectionId: string | null,
      subsectionId: string | null
    }>
  }
}
```

Không trả `answer`, `explanation`, `trickDetails`.
**Lỗi:** `UNAUTHENTICATED`, `VALIDATION_ERROR`, `SUBJECT_NOT_FOUND`, `CHAPTER_NOT_FOUND`, `EXAM_SET_NOT_FOUND`, `QUIZ_NOT_AVAILABLE`, `INTERNAL_ERROR`.

### QUIZ-02 — Nộp/chấm quiz (sửa Server Action)

**Method/transport:** Next.js Server Action `submitExamScore`; HTTP method không áp dụng.

**Request**

```js
{
  subjectId: string,
  chapterId: string,
  examSetId: string | number,
  isTrickMode: boolean,
  questionsState: Array<{
    id: string,
    options: string[]
  }>,
  clientAnswers: number[],
  elapsedTime: number
}
```

Bỏ field `name`; server lấy danh tính từ session. `elapsedTime` là thời gian làm quiz, không phải thời gian học.

**Response thành công**

```js
{
  ok: true,
  data: {
    score: number,
    total: number,
    score10: number,
    bestScore10: number,
    passed: boolean,
    chapterCompleted: boolean,
    attemptsCount: number,
    gradedResults: Array<{
      id: string,
      isCorrect: boolean,
      correctOptionIndex: number,
      explanation: string
    }>
  }
}
```

`passed = score10 >= 7.0`; `bestScore10` chỉ tăng hoặc giữ nguyên.

**Lỗi:** `UNAUTHENTICATED`, `VALIDATION_ERROR`, `SUBJECT_NOT_FOUND`, `CHAPTER_NOT_FOUND`, `EXAM_SET_NOT_FOUND`, `QUESTION_SET_MISMATCH`, `DUPLICATE_QUESTION_ID`, `INVALID_OPTION_INDEX`, `DATASTORE_UNAVAILABLE`, `INTERNAL_ERROR`.

### ADMIN-01 — Xem báo cáo học tập

**Method/endpoint:** `GET /api/admin/learning-report`
**Auth:** `admin` hoặc `teacher`.

**Query tùy chọn**

```js
{
  uid?: string,
  subjectId?: string,
  chapterId?: string,
  completion?: "all" | "completed" | "incomplete",
  needsReview?: "all" | "yes" | "no"
}
```

**Response 200**

```js
{
  ok: true,
  data: {
    summary: {
      totalUsers: number,
      completedChapters: number,
      incompleteChapters: number,
      quizAttempts: number,
      usersNeedingReview: number,
      dueFlashcards: number
    },
    users: Array<{
      uid: string,
      displayName: string,
      email: string | null,
      subjects: Array<{
        subjectId: string,
        chapters: Array<{
          chapterId: string,
          completedSubsections: number,
          totalRequiredSubsections: number,
          completed: boolean,
          bestQuizScore10: number | null,
          attemptsCount: number,
          reviewItemsCount: number,
          dueFlashcardsCount: number
        }>
      }>
    }>
  }
}
```

Không trả password/token/credential/thời gian học.
**Lỗi:** `400 VALIDATION_ERROR`, `401 UNAUTHENTICATED`, `403 FORBIDDEN`, `404 USER_NOT_FOUND`, `404 SUBJECT_NOT_FOUND`, `404 CHAPTER_NOT_FOUND`, `503 DATASTORE_UNAVAILABLE`.

### ADMIN-02 — Xuất Excel/PDF

**Method/endpoint:** `GET /api/admin/learning-report/export`
**Auth:** `admin` hoặc `teacher`.

**Query:** cùng filter ADMIN-01 và bắt buộc:

```js
{
  format: "xlsx" | "pdf"
}
```

**Response 200:** binary file.

- XLSX: `Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- PDF: `Content-Type: application/pdf`
- `Content-Disposition: attachment; filename="studymaster-learning-report-{timestamp}.{ext}"`

File gồm người học/email, tiến độ chương/subsection, điểm cao nhất, số lượt quiz, số nội dung cần ôn và số flashcard đến hạn; không có thời gian học.

**Lỗi JSON:** `400 INVALID_REPORT_FORMAT`, `400 VALIDATION_ERROR`, `401 UNAUTHENTICATED`, `403 FORBIDDEN`, `404 NO_REPORT_DATA`, `500 REPORT_GENERATION_FAILED`, `503 DATASTORE_UNAVAILABLE`.

## 10. Luồng nghiệp vụ chính

### 10.1. Đăng nhập

1. Google hoặc email/password dùng Firebase Auth; admin dùng AUTH-01.
2. Client gửi ID token tới AUTH-02.
3. Chỉ sau AUTH-03 hợp lệ mới chuyển từ login sang subject-select.
4. Chọn Cloud thì tải dữ liệu tĩnh và LEARN-01 song song.

### 10.2. Hoàn thành bài

1. `IntersectionObserver` ghi nhận sentinel cuối subsection.
2. Người dùng bấm hoàn thành.
3. LEARN-02 cập nhật subsection/chapter trong transaction.
4. Cloud cần đủ subsection; môn có quiz còn cần điểm cao nhất `>= 7.0`.

### 10.3. Flashcard

1. FLASH-01 trả thẻ đến hạn.
2. Người học chọn rating.
3. FLASH-02 tính lịch mới và review reason.
4. UI cập nhật due count/review queue.

### 10.4. Quiz môn hiện có

1. QUIZ-01 trả câu hỏi sạch.
2. QUIZ-02 chấm bằng dữ liệu gốc server.
3. Backend ghi ranking, cập nhật điểm cao nhất/completion.
4. Điểm thấp hơn không làm mất trạng thái đã đạt.

### 10.5. Báo cáo admin

1. Admin/teacher mở tab chung.
2. ADMIN-01 tải số liệu theo filter.
3. ADMIN-02 xuất XLSX/PDF bằng cùng filter.

## 11. Giả định (Assumptions)

1. Người dùng sẽ sửa `AGENTS.md` và `context.md` trước implementation để cấp quyền backend và dữ liệu Cloud; plan không tự tạo ngoại lệ.
2. Rule mới cho phép sửa đúng `data/index.js` và `data/lessons.js`. Nếu chỉ cho tạo file mới, phải dùng adapter ngoài `data/` và cập nhật plan.
3. Subject ID giữ là `cloud-computing`; chapter/section/subsection/card ID ổn định và duy nhất.
4. Điều kiện cuộn hết dựa trên `IntersectionObserver` + click. Backend kiểm tra flag/identity nhưng không thể chứng minh tuyệt đối người dùng đã đọc.
5. Cloud có `quizRequired: false`; khi có question bank sẽ migration bật quiz nhưng giữ tiến độ subsection.
6. `score10 = score / total * 10`, response làm tròn 2 chữ số; đạt khi `>= 7.0`.
7. Chương có question bank dùng điều kiện quiz; chương không có question bank chỉ cần subsection.
8. SM-2 đơn giản hóa: `easeFactor` đầu `2.5`, tối thiểu `1.3`; `again` về 1 ngày, `hard` tăng chậm, `good` theo interval/ease, `easy` tăng nhanh. Công thức phải cố định bằng test trước triển khai.
9. Search chạy client-side trên glossary biên soạn; không search API và không dùng AI/dịch máy.
10. `CONCEPT_ERRORS` được thêm khi sai ít nhất 2 lần trong interaction/quiz gắn cùng subsection; nếu chưa có dữ liệu đủ tin cậy thì không tự gắn.
11. Teacher dùng dashboard chung và chỉ đọc/xuất báo cáo; quản lý nội dung/tài khoản chỉ dành cho admin.
12. UI vẫn nhận `admin/admin`; credential thật lưu server-side/environment và cấp custom token, không hard-code client/Firestore. Đây là credential yếu và nên đổi ở task bảo mật riêng nếu được phép.
13. “Xóa mọi tài khoản cũ” gồm Firebase Auth user, Firestore profile và local account trên trình duyệt chạy migration; không mặc định xóa `rankings`/progress chưa rõ ownership. Phải dry-run, backup và liệt kê target trước thao tác phá hủy.
14. Không báo cáo thời gian học. Field ranking `time` vẫn tồn tại để tương thích thời gian làm quiz.
15. XLSX/PDF dùng cùng snapshot/filter để số liệu nhất quán.
16. Test chính laptop/desktop; viewport nhỏ chỉ cần không vỡ/overflow, không tối ưu touch/mobile navigation.

## 12. Thứ tự triển khai và cổng nghiệm thu

1. **Gate 0 — Rule:** cập nhật rule và xác nhận `plan.md`.
2. **Gate 1 — Auth/backend foundation:** Admin SDK, session, rules, migration dry-run.
3. **Gate 2 — Data contract:** repository, indexes, APIs, tests; nghiệm thu completion/highest score/review/flashcard.
4. **Gate 3 — Content:** nhập 7 chương, glossary, flashcard và QA học thuật.
5. **Gate 4 — Learning UI:** progress, search, bookmark, review, flashcard.
6. **Gate 5 — Visual learning:** heroes, map, sandbox, comparisons, drag-drop.
7. **Gate 6 — Admin report:** dashboard, XLSX/PDF, quyền teacher/admin.
8. **Gate 7 — Regression:** quiz cũ, auth, SPA, PWA, lint và `npm run build` thành công.

Không chuyển gate nếu contract hoặc rule của gate trước chưa được xác nhận.

