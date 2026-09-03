# ⚠️ RULE DỰ ÁN — ĐỌC TRƯỚC KHI LÀM BẤT CỨ GÌ

## Vùng dữ liệu bất khả xâm phạm
Toàn bộ file .js trong thư mục data/ (chuong-*, lich-su-dang*, database-ch*,
questions-chuong-*, ad-ch*, dsa.js, oop.js, basic-*, analysis-design.js,
lessons.js, và mọi file .js khác trong data/) là nội dung giáo trình/câu hỏi
đã nhập sẵn — KHÔNG ĐƯỢC sửa/xóa/ghi đè. Chỉ được đọc/import.

## Coding convention
- **Framework & Runtime**: Next.js 16 (App Router), React 19 (`use client` / `use server` boundaries), Node.js runtime.
- **Styling**: TailwindCSS v4 (`@tailwindcss/postcss`) kết hợp Design Tokens văn hóa: Silk Ivory (`#faf8f4`), Dark Charcoal Earth (`#2c2a26`), Amber Gold (`#d97706`).
- **Chuyển động & Hoạt họa**: GSAP 3.15 + ScrollTrigger + `@gsap/react`, hạn chế can thiệp DOM trực tiếp ngoài hooks của GSAP/React.
- **Canvas & Vector**: Tọa độ nét vẽ trên Canvas ghi chú bắt buộc phải lưu dạng tỷ lệ chuẩn hóa (Normalized $x_{norm}, y_{norm} \in [0.0, 1.0]$) để tự co giãn linh hoạt trên mọi kích thước màn hình qua `ResizeObserver`.
- **Ngân hàng dữ liệu**: Định dạng chuẩn ES Modules (`.js`), tách biệt cấu trúc metadata (`data/index.js`) và nội dung chi tiết (`data/lessons.js`) để tối ưu tải trang.

## Quy tắc commit / PR
- **Conventional Commits**: Bắt buộc sử dụng tiền tố chuẩn:
  * `feat:`: Tính năng mới (Visualizer mới, bộ đề mới, module mới).
  * `fix:`: Sửa lỗi hiển thị, logic trắc nghiệm, thuật toán.
  * `docs:`: Cập nhật tài liệu kỹ thuật, README, AGENTS.md, context.md, plan.md.
  * `chore:`: Dọn dẹp mã nguồn, cập nhật dependencies, cấu hình build.
  * `style:`: Cải thiện giao diện UI/UX mà không làm thay đổi logic nghiệp vụ.
- **Kiểm thử trước khi commit**: Bắt buộc chạy `npm run build` xác nhận biên dịch 100% không phát sinh lỗi trước khi commit.

## Phạm vi làm việc
- **Backend**: Server Actions trong `app/actions/`, HTTP Route Handlers trong `app/api/`, logic xử lý dữ liệu, kiểm thử backend và tương tác Firebase Admin / Firestore.
- **Frontend**: Toàn bộ UI / component / page, styling, routing state (`appStep`), visualizers tương tác và custom hooks.
- Luôn bám theo API contract trong `plan.md`, không tự thêm field/endpoint ngoài contract.

---

# Context dự án StudyMaster

> Khảo sát và cập nhật toàn diện trên mã nguồn thực tế ngày 2026-09-03. Nội dung dưới đây mô tả **chính xác kiến trúc và mã nguồn đang tồn tại thực tế trong dự án**.

## 1. Bức tranh tổng thể

StudyMaster là ứng dụng học tập đa môn chạy bằng Next.js App Router kết hợp kiến trúc Single Page Application (SPA) ở client: `app/page.js` giữ state trung tâm và chuyển giữa `login`, `register`, `forgot-password`, `subject-select`, `study` và `admin-dashboard`. Ứng dụng gồm ba khối lớn:

1. **Giáo trình & Visualizers**: 10 môn học chính quy với hàng trăm visualizer/lab tương tác (bao gồm trọn bộ 7 chương môn Điện toán đám mây mới).
2. **Hệ thống Trắc nghiệm Bảo mật 2 tầng**: Luyện tập (phản hồi tức thì) và Thi tính giờ (đề thi được cấp qua vé ký số HMAC SHA-256 `examTicket`, bảo mật chống gian lận và chấm điểm độc lập phía server).
3. **Phân hệ Quản trị & Đồng bộ Học tập**: Quản lý học viên, duyệt câu hỏi, thống kê bảng xếp hạng, đồng bộ tiến độ học tập (sentinel scroll + nút hoàn thành), bookmark, hàng đợi ôn tập lặp lại ngắt quãng (SM-2) và xuất báo cáo nhị phân (Excel/PDF).

Quy mô repo hiện tại (không tính `node_modules`, `.next`): hơn 1.000 file; trong đó `components/` có hơn 840 file React Client Components; `data/` có 132 module dữ liệu và ngân hàng đề thi; phân hệ server có 10 Route Handlers, 13 server library modules, 2 client API/mock modules, 3 custom hooks và bộ kiểm thử tự động.

## 2. Tech stack

### Ngôn ngữ và runtime

- JavaScript ES Modules (`package.json` có `"type": "module"`); mã ứng dụng đồng bộ chuẩn ES Modules.
- Node.js runtime qua Next.js (hỗ trợ tốt Node 20/22/24).
- React 19.2.4, Next.js 16.2.9, App Router (Turbopack).

### Giao diện và tương tác

- Tailwind CSS v4 qua `@tailwindcss/postcss`; styling utility-first kết hợp `app/globals.css`.
- Design tokens chính: Silk Ivory `#faf8f4`, Dark Charcoal Earth `#2c2a26`, Amber Gold `#d97706`; từng môn thay đổi biến CSS động `--accent`, `--secondary`, `--accent-rgb`.
- Font Be Vietnam Pro và Playfair Display, nạp qua Google Fonts trong root layout `app/layout.js`.
- GSAP 3.15, `@gsap/react`, ScrollTrigger cho animation, accordion chuyển mục và scroll narrative.
- Three.js 0.185 cho các visualizer 3D; Canvas và SVG vector cho các mô phỏng còn lại.
- Lucide React cho icon hệ thống; `canvas-confetti` cho hiệu ứng vinh danh quiz.
- DrawingCanvas vector SVG responsive với tọa độ chuẩn hóa $[x_{norm}, y_{norm}] \in [0.0, 1.0]$ thích ứng màn hình qua `ResizeObserver`.

### Dữ liệu, xác thực và xuất báo cáo

- **Firebase Web SDK 12.14**: Dùng ở client cho Firestore và Firebase Authentication (`signInWithPopup` Google và email/password). Cấu hình tại `lib/firebase.js`.
- **Firebase Admin SDK 13.10**: Dùng ở server (`lib/server/firebase-admin.js`) để xác thực session cookie HttpOnly, cấp Admin Custom Token và truy xuất Firestore độc lập, bảo mật.
- **Firestore Security Rules & Indexes**: Tệp `firebase.rules` bảo vệ dữ liệu `users/{uid}` và `rankings/{rankingId}`; tệp `firestore.indexes.json` quản lý các composite và collection group index.
- **Hệ thống API Client & Mock Server**: `lib/client/api.js` đóng gói request chuẩn envelope `{ ok, data }` / `{ ok, error }`; `lib/client/mock-server.js` hỗ trợ phát triển offline.
- **Xuất báo cáo**: ExcelJS (`.xlsx`), jsPDF và html2canvas cho xuất báo cáo học tập nhị phân qua streaming endpoint.
- **PWA**: `next-pwa`, manifest trong `public/manifest.json`.

### Tooling & Kiểm thử

- ESLint 9 + `eslint-config-next/core-web-vitals`.
- npm scripts: `dev`, `build`, `start`, `lint`, `test:backend`, `test:integration:emulator`, `clean`.
- **Bộ Kiểm thử Tự động**: Tích hợp Node.js Test Runner chính thức (`npm run test:backend` chạy `node --test tests/learning/*.test.js`) kiểm tra toàn diện 17/17 test cases passed (vé đề thi `exam-ticket`, thuật toán `flashcard-scheduler`, quy tắc `learning-rules`, thẩm định `quiz-validation`).
- **Kiểm thử tích hợp Emulator**: `scripts/run-integration-emulators.mjs` và `tests/integration/backend-emulator.test.mjs`.

## 3. Cấu trúc thư mục và trách nhiệm

```text
app/
  layout.js               Root HTML, metadata, font links, manifest và viewport
  page.js                 Client SPA/state orchestrator, auth UI, chọn môn, study, admin
  globals.css             Tailwind import, tokens, component styles và animations
  actions/quiz.js         Server Actions bảo mật: cấp vé đề thi đã ký HMAC và chấm điểm server
  api/                    Hệ thống Next.js HTTP Route Handlers:
    auth/session/         GET (đọc session), POST (tạo session cookie), DELETE (đăng xuất)
    auth/admin-token/     POST (cấp custom token cho admin qua Firebase Admin)
    learning/state/       GET (nạp toàn bộ tiến độ, bookmarks, review items của học viên)
    learning/subsections/ POST (xác nhận hoàn thành tiểu mục kèm sentinel scroll check)
    learning/bookmarks/   POST, DELETE (bật/tắt lưu bài học)
    learning/review-items/POST, DELETE (đánh dấu tiểu mục cần ôn tập)
    learning/flashcards/  GET (thẻ đến hạn), POST (chấm điểm flashcard theo thuật toán SM-2)
    admin/learning-report/GET (tổng hợp báo cáo học tập), GET /export (xuất Excel/PDF)

components/
  admin/                  15 component phân hệ quản trị (dashboard, users, questions, leaderboard, report)
  cloud/                  7 visualizer chuyên ngành Điện toán đám mây (hero, concept map, compare, sandbox, dnd, flashcard, search)
  learning/               4 widget tiến độ học tập (SubsectionCompletion, BookmarkButton, ReviewToggle, ReviewQueue)
  ContentRenderer.js      Registry/render engine rất lớn cho content block + hơn 820 visualizer
  Quiz.js                 Giao diện thi trắc nghiệm (tích hợp lấy đề sạch qua examTicket và chấm server)
  Sidebar.js              Điều hướng Subject -> Chapter -> Section -> Subsection, toolbox vẽ SVG
  DrawingCanvas.js        Lớp vẽ SVG responsive, lưu nét độc lập theo bài (drawingKey)
  ProfileModal.js         Hồ sơ học viên, đổi mật khẩu
  AlgoSimDashboard.js     Cổng vào các phòng lab thuật toán
  DiagramSimDashboard.js  Studio sơ đồ UML / ATM
  *.js                    Hàng trăm visualizer theo HCM, LSD, OOP, DSA, DB, UML...

data/
  index.js                Metadata subject/navigation + questionsMap dùng bởi UI/quiz
  lessons.js              Ghép dữ liệu bài học và tìm subsection theo ID
  cloud-computing-*.js    Giáo trình 7 chương, glossary song ngữ và flashcards Điện toán đám mây
  chuong-*.js             Giáo trình Tư tưởng Hồ Chí Minh (6 chương)
  lich-su-dang*.js        Giáo trình Lịch sử Đảng (mở đầu, C1-C3, kết luận)
  oop.js, dsa.js          Giáo trình OOP và DSA lớn
  database*.js            CSDL chương 1-8
  analysis-design.js, ad-ch*.js Phân tích thiết kế/yêu cầu
  basic-*.js              Các môn nền tảng
  questions-*.js          Ngân hàng inside/outside/trick và các fixed set

hooks/
  useAuthSession.js       Hook quản lý đăng nhập, khôi phục phiên, xác thực admin
  useLearningState.js     Hook đồng bộ tiến độ học tập, bookmark, review queue, flashcards
  useSubsectionCompletion.js Hook IntersectionObserver theo dõi sentinel cuối bài đọc

lib/
  curriculum.js           Adapter Pattern ghép nối môn Cloud Computing an toàn vào danh mục
  firebase.js             Khởi tạo singleton Firebase Web SDK client (db, auth)
  client/
    api.js                Client HTTP interface chuẩn envelope { ok, data } / { ok, error }
    mock-server.js        Trình giả lập server offline lưu trữ localStorage cho môi trường dev
  server/
    firebase-admin.js     Khởi tạo singleton Firebase Admin SDK
    auth.js               Xác thực session cookie HttpOnly, kiểm tra quyền admin
    exam-ticket.js        Cấp và xác thực vé đề thi ký số HMAC SHA-256 chống gian lận
    quiz-service.js       Nghiệp vụ lọc đề thi, giấu đáp án, chấm điểm thang 10 độc lập
    quiz-validation.js    Thẩm định toàn vẹn tập câu hỏi thi
    learning-repository.js Quản lý lưu trữ tiến độ học tập trên Firestore
    learning-rules.js     Quy tắc nghiệp vụ: làm tròn điểm, giữ điểm cao nhất, điều kiện đạt môn
    flashcard-scheduler.js Thuật toán lặp lại ngắt quãng SuperMemo 2 (SM-2)
    report-service.js     Tổng hợp dữ liệu báo cáo học tập, xuất file nhị phân Excel/PDF
    validation.js         Bộ kiểm tra kiểu dữ liệu đầu vào nghiêm ngặt
    api-response.js       Chuẩn hóa response envelope và mã lỗi ApiError

tests/
  learning/               Bộ unit tests: exam-ticket, flashcard-scheduler, learning-rules, quiz-validation (17/17 pass)
  integration/            Bộ integration tests với Firebase Local Emulator

utils/                    Java syntax highlighter dùng bởi renderer
scripts/                  Sinh metadata, di chuyển dữ liệu, chạy integration emulators
public/                   Icon/PWA manifest, ảnh login/admin, mascot, sơ đồ ATM
admindashboardDoc/        BRD, SRS, TDD, data contract, UI spec, QA và roadmap admin
firebase.rules            Quy tắc bảo mật Firestore Security Rules
firestore.indexes.json    Định nghĩa composite và collection group indexes
firebase.json             Cấu hình Firebase project và emulators
```

### Vùng dữ liệu bất khả xâm phạm

Theo `AGENTS.md`, **toàn bộ file `.js` nằm trong cây thư mục `data/` (kể cả thư mục con nếu có sau này) đều là dữ liệu tĩnh đã nhập sẵn, không phải code logic để chỉnh sửa**. Không được sửa, xóa, ghi đè hoặc tạo file `.js` mới trong `data/` dưới bất kỳ hình thức nào.

Phạm vi bao gồm toàn bộ `data/*.js`, tiêu biểu nhưng không giới hạn:

- Metadata và cổng dữ liệu: `data/index.js`, `data/lessons.js`.
- Giáo trình HCM và Lịch sử Đảng: `data/chuong-*.js`, `data/lich-su-dang*.js`.
- Giáo trình CSDL: `data/database.js`, `data/database-ch*.js`.
- Giáo trình/phân hệ môn khác: `data/ad-ch*.js`, `data/analysis-design.js`, `data/dsa.js`, `data/oop.js`, `data/basic-*.js`.
- Toàn bộ ngân hàng câu hỏi và file tổng hợp đề: mọi `data/questions-*.js`, không chỉ `questions-chuong-*.js`.
- Bất kỳ file `.js` hiện có hoặc được dự kiến bổ sung sau này bên trong `data/`, kể cả file có vẻ chứa hàm, import/export, metadata hay logic ghép mảng.

Quy tắc này cũng áp dụng gián tiếp cho tooling: không chạy script/generator/migration nào nếu nó sẽ tạo, sửa hoặc ghi đè file `.js` trong `data/`. Các cải tiến backend/frontend phải đọc và tiêu thụ dữ liệu hiện hữu mà không mutation vùng này.

Các tài liệu gốc (`README.md`, `system_architecture.md`, `setup.md`, `walkthrough.md`) hữu ích để hiểu ý định, nhưng có chỗ lệch với implementation và phải kiểm chứng bằng code trước khi dựa vào.

## 4. Kiến trúc frontend hiện tại

### Điều phối ứng dụng

`app/page.js` là Client Component lớn, quản lý gần như toàn bộ state bằng `useState`, `useEffect`, refs và GSAP. Nó quyết định màn hình, môn, subsection, quiz/lab, sidebar, toolbar vẽ, highlight, toast/confirm, phiên đăng nhập và dashboard admin. Không có Redux/Zustand/Context store và không có router nghiệp vụ riêng.

### Giáo trình và visualizer

- `data/lessons.js` tạo `lessonsData` và cung cấp `findSubsectionContent(subjectId, activeSubsectionId)` bằng cách duyệt chapter/section/subsection.
- Cây nội dung phổ biến: `Subject -> Chapter -> Section -> Subsection -> parts/content -> content blocks`.
- Content block có nhiều `type` như `paragraph`, `bullets`, `numbered-list`, `quote`, `definition`, `highlight`, `code`, `table`, `conclusion`, cùng hàng trăm type/component dành cho visualizer.
- `ContentRenderer.js` import tĩnh gần như toàn bộ visualizer rồi dispatch chủ yếu theo `block.type`/`block.component`. Đây là điểm nối bắt buộc nếu bổ sung loại content/visualizer mới.
- Tất cả 831 file component có `"use client"`, phản ánh kiến trúc rất nặng phía client.

### Canvas và lưu cục bộ

`DrawingCanvas.js` lưu path theo tọa độ chuẩn hóa `[0,1]`, đo lại container bằng `ResizeObserver`, rồi quy đổi sang kích thước render. Mỗi bài dùng key `studymaster-drawings-${subjectId}-${activeSubsectionId}`. Highlight văn bản dùng `studymaster-highlights`.

### Quiz

- `Quiz.js` nhận subject/chapter/questions map từ metadata (`lib/curriculum.js`), tự lấy mẫu/fixed set, xáo câu và phương án, quản lý timer, bookmark, resume và kết quả.
- **Practice mode (`mode === "immediate"`)**: Giữ đáp án ở client, tự chấm điểm tức thì và hiển thị lời giải chi tiết cho từng câu hỏi để ôn tập nhanh.
- **Exam mode (`mode === "end"`)**:
  - Client gọi Server Action `getExamQuestions` trong `app/actions/quiz.js`.
  - Server xác thực session (`requireSession()`), lọc ngân hàng câu hỏi, bóc tách hoàn toàn `answer` và `explanation`, rồi cấp **Vé đề thi đã ký số HMAC SHA-256 (`examTicket`)** có hạn dùng 4 giờ.
  - Sau khi học viên nộp bài, `Quiz.js` gọi Server Action `submitExamScore` gửi kèm `examTicket`, `clientAnswers` và `elapsedTime`.
  - Server xác thực chữ ký vé thi, kiểm tra tính toàn vẹn câu hỏi, chấm điểm thang 10, cập nhật tiến độ học tập và ghi điểm vào collection `rankings` trên Firestore.

### Xác thực và quản trị học viên

- **Mô hình Xác thực Lai (Hybrid Auth)**:
  - Client: Hỗ trợ đăng nhập Email/Password hoặc Google popup qua Firebase Auth (`lib/firebase.js`).
  - Server: Đồng bộ phiên làm việc bảo mật qua HttpOnly Cookie (`/api/auth/session`) được ký và xác minh bởi Firebase Admin SDK.
  - Tài khoản Admin: Hỗ trợ cấp Firebase Custom Token qua `POST /api/auth/admin-token`.
  - Quản lý phiên và trạng thái người dùng tập trung thông qua custom hook [`hooks/useAuthSession.js`](file:///d:/TT%20HCM/hooks/useAuthSession.js).
- **Dashboard Quản trị**:
  - Giao diện Admin quản lý danh sách học viên, kiểm tra chất lượng ngân hàng câu hỏi (độ lệch $\Delta L \le 15$ ký tự), xem bảng xếp hạng và theo dõi báo cáo tiến độ học tập thực tế từ endpoint `GET /api/admin/learning-report`.

## 5. Backend/API đã có

### Hệ thống HTTP Route Handlers (`app/api/**`)

Dự án triển khai hệ thống Next.js Route Handlers đầy đủ, đóng gói chuẩn theo envelope `{ ok: true, data }` hoặc `{ ok: false, error: { code, message, fields } }`:

1. **Xác thực & Phiên làm việc (Auth & Session)**:
   - `POST /api/auth/admin-token`: Nhận `{ username, password }`, xác thực tài khoản quản trị và cấp Firebase Custom Token qua Firebase Admin.
   - `GET /api/auth/session`: Đọc session cookie HttpOnly và trả về thông tin user đã xác thực.
   - `POST /api/auth/session`: Nhận `{ idToken, rememberMe }`, tạo session cookie qua `auth.createSessionCookie()`.
   - `DELETE /api/auth/session`: Xóa session cookie để đăng xuất an toàn.

2. **Đồng bộ Tiến độ & Học tập (Learning State)**:
   - `GET /api/learning/state`: Lấy toàn bộ danh sách tiểu mục đã hoàn thành, bookmark, review items và tiến độ flashcard của người dùng hiện tại.
   - `POST /api/learning/subsections/[subsectionId]/completion`: Đánh dấu hoàn thành tiểu mục khi học viên bấm nút và đã cuộn qua sentinel (`reachedEnd === true`).
   - `POST / DELETE /api/learning/bookmarks/[subsectionId]`: Bật/tắt lưu bookmark cho tiểu mục.
   - `POST / DELETE /api/learning/review-items/[subsectionId]`: Thêm/xóa tiểu mục vào danh sách cần ôn tập.

3. **Thẻ Ghi nhớ Thuật ngữ (Spaced Repetition Flashcards)**:
   - `GET /api/learning/flashcards/due`: Lấy danh sách flashcard đến hạn ôn tập.
   - `POST /api/learning/flashcards/[cardId]/reviews`: Nhận đánh giá độ nhớ (rating: `again`, `hard`, `good`, `easy`) và tính toán lịch ôn tập tiếp theo dựa trên thuật toán **SuperMemo-2 (SM-2)** qua `flashcard-scheduler.js`.

4. **Báo cáo & Thống kê Quản trị (Admin Learning Reports)**:
   - `GET /api/admin/learning-report`: Tổng hợp dữ liệu học tập toàn hệ thống (tỷ lệ hoàn thành, điểm quiz trung bình, số thẻ flashcard đã học) cho Admin Dashboard.
   - `GET /api/admin/learning-report/export`: Xuất dữ liệu báo cáo dạng tệp nhị phân streaming (`.xlsx` qua ExcelJS hoặc `.pdf` qua jsPDF).

### Server Actions Trắc nghiệm Bảo mật (`app/actions/quiz.js`)

Hai Server Action chính phục vụ quy trình thi trắc nghiệm độc lập:

#### 1. `getExamQuestions(payload)`
- **Input**:
  ```js
  {
    subjectId: string,
    chapterId: string,
    examSetId: string | number, // "de-1", "auto", "trick-1", v.v.
    isTrickMode: boolean
  }
  ```
- **Xử lý**:
  - Gọi `requireSession()` xác thực người dùng.
  - Lấy tập câu hỏi từ catalog, lọc theo bộ đề (36 inside + 4 outside hoặc 50 trick).
  - Loại bỏ hoàn toàn trường `answer` và `explanation`.
  - Sinh vé đề thi ký số HMAC SHA-256 (`issueExamTicket`) với TTL 4 giờ, gắn với `uid` của user, chứa nonce và thứ tự question IDs.
- **Output**:
  ```js
  {
    ok: true,
    data: {
      examTicket: string,       // "<base64url_payload>.<signature>"
      expiresAt: string,        // ISO date
      questions: Array<{
        id: string,
        question: string,
        options: string[],
        difficulty: string,
        sectionId?: string,
        subsectionId?: string
      }>,
      totalQuestions: number
    }
  }
  ```

#### 2. `submitExamScore(payload)`
- **Input**:
  ```js
  {
    examTicket: string,
    clientAnswers: number[],     // mảng index phương án đã chọn (-1 = bỏ trống)
    elapsedTime: number          // số giây làm bài
  }
  ```
- **Xử lý**:
  - Gọi `requireSession()`.
  - Giải mã và xác thực chữ ký vé thi bằng `verifyExamTicket(examTicket, user.uid)`.
  - So khớp `clientAnswers` với câu hỏi gốc tương ứng trong ngân hàng đề.
  - Tính điểm theo thang 10 (`scoreToTen`), xác định trạng thái đạt môn ($\ge 7.0/10$ và hoàn thành tất cả tiểu mục qua `isChapterCompleted`).
  - Ghi bản ghi điểm số vào Firestore collection `rankings` và cập nhật tiến độ qua `learning-repository`.
- **Output**:
  ```js
  {
    ok: true,
    data: {
      score: number,
      total: number,
      score10: number,
      isPassed: boolean,
      elapsedTime: number,
      gradedResults: Array<{
        id: string,
        isCorrect: boolean,
        correctOptionIndex: number,
        explanation: string,
        trickDetails?: object
      }>
    }
  }
  ```

### Tương tác Firestore & Quy tắc Bảo mật Server
- Các tương tác dữ liệu bảo mật (cập nhật tiến độ học tập, chấm điểm thi, cấp token) được thực thi trên server qua **Firebase Admin SDK** (`lib/server/firebase-admin.js`), không phụ thuộc vào quyền ghi trực tiếp từ client.
- Tệp `firebase.rules` bảo đảm:
  - `users/{uid}`: Chỉ chủ sở hữu (`request.auth.uid == uid`) mới được quyền đọc; quyền ghi trực tiếp từ client bị khóa (`allow write: if false`) nhằm bảo vệ tính toàn vẹn dữ liệu.
  - `rankings/{rankingId}`: Người dùng đã đăng nhập được quyền đọc; quyền ghi chỉ thực hiện qua Server Action / Admin SDK.

## 6. Schema dữ liệu chính

### Subject/navigation metadata (`data/index.js`)

```js
{
  id, title, description, category, quote,
  themeColors: { accent, secondary, accentRgb },
  icon,
  chapters: Array<Chapter>,
  questionsMap: Record<chapterId, QuestionBank>,
  isActive?: boolean
}
```

`Chapter` thường có `{ id, title, subtitle, sections }`; `Section` có `{ id, roman?, title, subsections }`; `Subsection` có `{ id, number?, title }` trong metadata và thêm `parts/content` trong lesson data đầy đủ.

10 subject ID đang khai báo: `tu-tuong-hcm`, `lich-su-dang`, `basic-general`, `oop`, `analysis-design`, `dsa`, `database`, `basic-concepts`, `basic-algorithms`, `cloud-computing`.

### Question bank

```js
{
  chapterId: string,
  inside: Question[],
  outside: Question[],
  tricks: Question[],
  sets?: Record<string | number, Question[]>
}

Question = {
  id: string,
  examSet?: number,
  trickSet?: number,
  sectionId?: string,
  subsectionId?: string,
  question: string,
  options: string[4],
  answer: 0 | 1 | 2 | 3,
  difficulty?: "easy" | "medium" | "hard",
  isOutside?: boolean,
  isTrick?: boolean,
  explanation: string,
  trickDetails?: { whyTrapped, trickWord, citation, tip }
}
```

Quy ước mục tiêu trong `AGENTS.md`: fixed set 40 câu (36 inside + 4 outside), ma trận 7 easy/18 medium/11 hard trong 36 inside; trick set 50 câu và phải đủ `trickDetails`; độ chênh độ dài options trong một câu không quá 15 ký tự. Dữ liệu cũ có nhiều thế hệ ID (`cmd-in-01`, `hcm-c4-tr1-001`, `lsd-*`, `oop-*`), nên chưa đồng nhất hoàn toàn với format mới `{MãMôn}-{MãChương}-d{SốĐề}-{STT}`.

### Browser persistence

- `studymaster_users`: `User[]`, thường `{ username, email, password, createdAt?, locked?, role? }`.
- `studymaster_session_user`, `studymaster_remember_me`, sessionStorage cùng tên: phiên UI.
- `studymaster_user_name`: tên dùng trong quiz.
- `studymaster_quiz_rankings_${chapterId}`: lịch sử `RankingRecord[]` cục bộ.
- `studymaster_active_quiz_state`: trạng thái resume quiz.
- `studymaster_admin_logs`: tối đa 50 log admin.
- `studymaster_logs`: log đăng ký Google riêng, hiện khác key admin log.
- `studymaster_unlocked_subjects_${username}`: danh sách subject ID mở cho user.
- `studymaster_avatar_${username}`, `studymaster_sound_enabled`, `studymaster-highlights`, `studymaster-drawings-*`.

### Signed Exam Ticket (`examTicket`)

Cấu trúc Claims bên trong payload base64url của vé đề thi được ký số bởi HMAC SHA-256 (`EXAM_TICKET_SECRET`):

```js
{
  v: 1,                        // Ticket schema version
  uid: string,                 // UID học viên đã xác thực
  subjectId: string,           // Mã môn học
  chapterId: string,           // Mã chương
  examSetId: string,           // Mã bộ đề ("de-1", "auto", "trick-1")
  isTrickMode: boolean,        // Có phải bộ đề bẫy không
  questionIds: string[],       // Danh sách ID câu hỏi theo đúng thứ tự đã phát hành
  nonce: string,               // Chuỗi ngẫu nhiên chống replay attack (16 bytes base64url)
  issuedAt: number,            // Timestamp lúc phát hành
  expiresAt: number            // Timestamp hết hạn (TTL 4 giờ)
}
```

### Firestore Collections & Data Model

- `users/{uid}`: Thông tin tài khoản người dùng, role (`"admin"` | `"student"`), trạng thái khóa tài khoản.
- `rankings/{rankingId}`: Kết quả thi trắc nghiệm được ghi nhận từ Server Action `submitExamScore` (`name`, `subjectId`, `chapterId`, `examSetId`, `score`, `total`, `time`, `date`, `uid`).
- Subcollections / Collection Groups:
  - `users/{uid}/subsectionProgress/{subsectionId}`: Lưu `{ subjectId, chapterId, completed, completedAt }`.
  - `users/{uid}/flashcardProgress/{cardId}`: Lưu `{ subjectId, cardId, repetitions, interval, easeFactor, nextReviewAt, lastReviewedAt }` theo thuật toán SM-2.
  - `users/{uid}/reviewItems/{subsectionId}`: Lưu `{ subjectId, chapterId, subsectionId, needsReview, markedAt, source }`.
  - `users/{uid}/bookmarks/{subsectionId}`: Lưu `{ subjectId, chapterId, subsectionId, bookmarkedAt }`.

## 7. Quy ước code đang dùng

- ES Modules; component React đặt file PascalCase và thường `export default function ComponentName(...)`.
- Component admin/utility có thể dùng named export (ví dụ hai modal trong `AdminModals.js`).
- Module dữ liệu dùng tên file kebab-case, named export camelCase (`questionsChuong4`, `databaseCh3Data`, `trickSet1`).
- Indent chủ yếu 2 spaces, semicolon, string chủ yếu double quote; dữ liệu sinh/nhập có nơi dùng quoted JSON keys và style chưa hoàn toàn đồng nhất.
- Import nội bộ chủ yếu dùng relative path, dù `jsconfig.json` có alias `@/* -> ./*`.
- Client/server boundary đánh dấu bằng `"use client"` cho UI components, `"use server"` cho Server Actions (`app/actions/quiz.js`), và các module Node.js backend trong `app/api/**/route.js`, `lib/server/*.js`.
- Styling ưu tiên Tailwind utility; CSS toàn cục dành cho token, pattern dùng lại, responsive media query và keyframes.
- Animation React dùng GSAP hooks khi có thể; một số component lớn vẫn query/manipulate DOM trực tiếp cho hiệu ứng.
- Toàn bộ `data/*.js` là vùng dữ liệu bất khả xâm phạm theo `AGENTS.md`, bao gồm cả `index.js`, `lessons.js`, mọi giáo trình, metadata, ngân hàng câu hỏi và file tổng hợp; không sửa, xóa, tạo mới hoặc ghi đè các file đã tồn tại.
- Commit phải theo Conventional Commits và phải chạy `npm run build` trước commit.

## 8. Trạng thái Backend & Các điểm kỹ thuật duy trì

1. **Backend là lớp dữ liệu tập trung**: Trạng thái học tập, hoàn thành bài, bookmarks, danh sách ôn tập và kết quả thi trắc nghiệm đã được đồng bộ hóa tập trung lên Cloud Firestore (`lib/server/learning-repository.js`) thay vì chỉ lưu đơn độc tại `localStorage`.
2. **Đã có authorization server-side**: Xác thực phiên làm việc thông qua session cookie HttpOnly (`requireSession()`), cấp token quản trị viên qua `lib/server/auth.js` và bảo vệ tài nguyên trên Firestore bằng `firebase.rules`.
3. **Ranh giới bảo mật quiz đã được đóng kín**:
   - `getExamQuestions` Server Action cấp **Vé đề thi ký số HMAC SHA-256 (`examTicket`)** giấu hoàn toàn đáp án và giải thích khỏi payload mạng gửi về client.
   - `Quiz.js` tích hợp trực tiếp `getExamQuestions` và `submitExamScore`.
   - `submitExamScore` giải mã vé thi, kiểm tra tính toàn vẹn và so khớp đáp án gốc phía server trước khi ghi điểm vào Firestore.
4. **Firebase server setup tách biệt hoàn toàn**:
   - Backend sử dụng Firebase Admin SDK 13.10 (`lib/server/firebase-admin.js`) với service account độc lập.
   - Các collection nhạy cảm được bảo vệ bởi Firestore Security Rules (`firebase.rules`) và đánh chỉ mục composite (`firestore.indexes.json`).
5. **Môn Điện toán đám mây tích hợp qua Adapter Pattern**: Toàn bộ 7 chương, glossary và flashcard môn Cloud Computing được kết nối an toàn qua [`lib/curriculum.js`](file:///d:/TT%20HCM/lib/curriculum.js), bảo đảm tuân thủ quy tắc bất biến của các tệp tin gốc trong `data/`.
6. **Đã có bộ kiểm thử tự động chính thức**: Chạy lệnh `npm run test:backend` với Node.js Test Runner để xác nhận 100% (17/17) unit test pass cho vé đề thi, thuật toán SM-2, quy tắc tính điểm và tính toàn vẹn câu hỏi. Có kịch bản kiểm thử tích hợp emulator (`scripts/run-integration-emulators.mjs`).
7. **Tài liệu MDX**: Giữ nguyên ghi chú: dự án hiện tại duy trì cấu trúc bài học dựa trên ES Modules structured JS (`lib/curriculum.js` và `data/*.js`), không dùng MDX runtime.
8. **Schema dữ liệu đồng bộ**: Toàn bộ giao tiếp giữa client và server tuân thủ chuẩn Base Envelope `{ ok: true, data }` hoặc `{ ok: false, error }` theo quy định tại `lib/server/api-response.js` và `lib/server/validation.js`.

Các file quan trọng nên tham khảo khi làm việc với phân hệ backend: `AGENTS.md`, `plan.md`, `app/actions/quiz.js`, `app/api/**`, `lib/server/**`, `lib/client/api.js`, `lib/curriculum.js`, `firebase.rules`, `tests/learning/**`.

---

## 9. Khảo sát & Tóm tắt Kiến trúc Frontend (Cập nhật từ Agent)

> Báo cáo khảo sát trực tiếp từ mã nguồn frontend toàn diện trên nhánh làm việc ngày 2026-09-01.

### 9.1. Framework & Thư viện UI đang sử dụng
- **Core Framework & Runtime**:
  - **Next.js**: `16.2.9` (App Router, Node.js runtime). Dự án không tận dụng file-based routing đa trang mà tổ chức toàn bộ giao diện thành Single Page Application (SPA) hội tụ tại `app/page.js`.
  - **React**: `19.2.4` kết hợp `react-dom: 19.2.4`. Toàn bộ 831 tệp component trong `components/` đều khai báo directive `"use client";`.
- **Hệ thống Tạo kiểu (Styling & Design Tokens)**:
  - **Tailwind CSS v4**: `@tailwindcss/postcss: ^4`, cấu hình tinh chỉnh qua `app/globals.css`.
  - **Design Tokens Văn hóa**: Silk Ivory (`#faf8f4` - Nền lụa ngà), Dark Charcoal Earth (`#2c2a26` - Đen trầm), Amber Gold (`#d97706` - Vàng hổ phách), Terracotta Sun (`#c2410c` - Đỏ gạch nung), Sand Alabaster (`#ffffff`).
  - **Typography**: Google Fonts *Be Vietnam Pro* (sans-serif) và *Playfair Display* (serif/quote) được nạp trước (preconnect) tại `app/layout.js`.
  - **Chế độ hiển thị (Theme)**: Giao diện định hướng Light Theme; tệp `app/globals.css` ép `@custom-variant dark (&:where(.dark, .dark *))` và `app/page.js` chủ động gỡ bỏ class `.dark` khỏi `documentElement` khi mount.
- **Hoạt họa & Chuyển động (Animation & Motion)**:
  - **GSAP**: `3.15.0`, `@gsap/react: ^2.1.2`, plugin `ScrollTrigger`. Dùng cho hiệu ứng lật sách 3D (3D Book Cover), hiệu ứng đánh máy chữ (Typewriter), Accordion mượt mà ở Sidebar, và thanh điều hướng trượt động (Moving Indicator).
- **Đồ họa 3D, Vector & Tương tác**:
  - **Three.js**: `^0.185.1` (kèm `@types/three: ^0.185.4`) phục vụ các mô hình mô phỏng trực quan 3D.
  - **SVG & Canvas thuần**: Lớp phủ ghi chú `DrawingCanvas.js` dùng thẻ `<svg>` vector với tọa độ chuẩn hóa $[0, 1]$; bảng vẽ Lab thuật toán dùng Canvas HTML5.
  - **Pháo hoa vinh danh**: `canvas-confetti: ^1.9.4` khi hoàn thành bài thi trắc nghiệm.
- **Biểu tượng (Iconography)**:
  - `lucide-react: ^1.17.0` cung cấp toàn bộ icon hệ thống.
- **Báo cáo & Xuất dữ liệu**:
  - `exceljs: ^4.4.0` (xuất danh sách người dùng và điểm thi sang Excel `.xlsx`).
  - `jspdf: ^4.2.1` và `html2canvas: ^1.4.1` (kết xuất và in báo cáo).
- **Progressive Web App (PWA)**:
  - `next-pwa: ^5.6.0`, cấu hình manifest tại `public/manifest.json`, hỗ trợ offline cache với chiến lược `NetworkFirst`.

---

### 9.2. Cấu trúc Component, Routing & Quản lý Trạng thái (State Management)

#### A. Cơ chế Routing (Pseudo-Routing / State-Driven Navigation)
Dự án **hoàn toàn không dùng URL routing** (không có `app/study/page.js`, `app/quiz/page.js` hay `app/admin/page.js`). Toàn bộ điều hướng là một máy trạng thái (State Machine) điều phối bởi biến state `appStep` bên trong `app/page.js`:
- `appStep === "login"`: Màn hình Đăng nhập (Local credential + Google OAuth popup).
- `appStep === "register"`: Màn hình Đăng ký tài khoản mới.
- `appStep === "forgot-password"`: Màn hình Khôi phục mật khẩu.
- `appStep === "subject-select"`: Màn hình Lựa chọn môn học (Lưới danh thiếp 10 môn học).
- `appStep === "study"`: Màn hình Học tập trung tâm, tích hợp các chế độ xem:
  - `showHero === true`: Hero mở đầu dạng cuốn sách 3D lật mở tương tác qua cuộn chuột hoặc vuốt chạm.
  - `isQuizMode === true`: Chuyển sang giao diện trắc nghiệm [`Quiz.js`](file:///d:/TT%20HCM-frontend/components/Quiz.js).
  - `isAlgoSimActive === true`: Chuyển sang giao diện phòng Lab thuật toán [`AlgoSimDashboard.js`](file:///d:/TT%20HCM-frontend/components/AlgoSimDashboard.js) hoặc các Lab thành phần (`BubbleSortLab`, `MergeSortLab`, `BfsLab`, `BstLab`...).
  - `isDiagramSimActive === true`: Chuyển sang studio phân tích thiết kế UML [`DiagramSimDashboard.js`](file:///d:/TT%20HCM-frontend/components/DiagramSimDashboard.js).
  - Chế độ đọc bài mặc định: Render song song `Sidebar.js` bên trái và `ContentRenderer.js` + `DrawingCanvas.js` bên phải.
- `appStep === "admin-dashboard"`: Màn hình Quản trị viên [`AdminDashboard.js`](file:///d:/TT%20HCM-frontend/components/admin/AdminDashboard.js).

#### B. Phân tầng Cấu trúc Component
- **State Orchestrator (`app/page.js`)**: Nắm giữ toàn bộ state gốc, xử lý sự kiện toàn cục, bridge giữa các phân hệ, quản lý auth, toast và modal xác nhận.
- **Thanh Điều hướng (`components/Sidebar.js`)**: Cây thư mục Accordion đa tầng (`Subject -> Chapter -> Section -> Subsection`). Tích hợp Floating Toolbar cho công cụ vẽ (Bút, Bút dạ quang, Tẩy, Bảng chọn màu sắc) và các phím tắt chuyển nhanh sang Quiz, Lab, Admin, Profile.
- **Engine Hiển thị Tri thức (`components/ContentRenderer.js`)**: Parser nạp bài học động qua hàm `findSubsectionContent` từ `lib/curriculum.js`. Render các khối nội dung: `label`, `paragraph`, `bullets`, `sub-bullets`, `highlight`, `quote`, `definition`, `conclusion`, `code`, `table`, cùng hơn 820+ loại visualizer chuyên biệt.
- **Lớp Vẽ Vector (`components/DrawingCanvas.js`)**: Khung vẽ SVG nổi phủ toàn màn hình, sử dụng tọa độ chuẩn hóa $[x_{norm}, y_{norm}] \in [0.0, 1.0]$. Tự động thích ứng kích thước với `ResizeObserver`, làm mượt nét vẽ bằng đường cong Bézier bậc hai, tẩy xóa thông minh theo bán kính va chạm, lưu trữ cục bộ riêng cho từng tiểu mục theo `drawingKey`.
- **Hệ thống Đánh giá (`components/Quiz.js`)**: Hỗ trợ 2 chế độ (Luyện tập tức thì và Thi thử tính giờ), tích hợp timer, xáo trộn câu hỏi và phương án (Fisher-Yates), lưu checkpoint làm bài, nhận đề thi sạch qua HMAC `examTicket`, nộp bài chấm server và phân tích bẫy tư duy (`trickDetails`).
- **Phân hệ Quản trị (`components/admin/*`)**: Gồm 15 component chuyên trách: `AdminDashboard` (cuộn mượt Single-Page với Scrollspy), `AdminUnifiedHero` (KPIs thời gian thực), `AdminOverviewTab` (biểu đồ SVG Bézier & Donut), `AdminUsersTab` (quản lý người dùng, xuất Excel), `AdminQuestionsTab` (kiểm tra độ lệch $\Delta L \le 15$ ký tự), `AdminLeaderboardTab` (bảng vinh danh Top rankers), `AdminLearningReportTab` (báo cáo tiến độ học tập thực tế), `AdminUserDrawer` (biểu đồ Radar năng lực).
- **Bộ Bắt lỗi (`components/ErrorBoundary.js`)**: Bao bọc các phân hệ phức tạp (`Quiz`, `ContentRenderer`, `AlgoSimDashboard`, `DiagramSimDashboard`) để cô lập lỗi runtime, tránh sập toàn trang.

#### C. Kiến trúc State Management
- **Không dùng thư viện quản lý trạng thái tập trung ngoài**: Dự án không cài đặt Redux hay Zustand; phân tách logic phức tạp thành các Custom Hooks chuyên biệt (`useAuthSession`, `useLearningState`, `useSubsectionCompletion`).
- **Mô hình State nội bộ + Prop Drilling**: Toàn bộ trạng thái chính được khai báo bằng `useState` và `useRef` tại `app/page.js` rồi truyền qua props / callbacks xuống các component con.
- **Lưu trữ Kết hợp (Hybrid Storage-backed State)**:
  - Phiên đăng nhập: Cookie HttpOnly an toàn kết hợp `useAuthSession`.
  - Tiến độ học tập & Bảng xếp hạng: Đồng bộ trực tiếp lên Cloud Firestore qua Server Actions và Route Handlers.
  - Nét vẽ & Highlight: `studymaster-drawings-${subjectId}-${activeSubsectionId}`, `studymaster-highlights`.
  - Trạng thái thi: `studymaster_active_quiz_state` (checkpoint resume bài thi).

---

### 9.3. Cách thức Gọi API & Tích hợp Backend hiện tại

#### A. Hệ thống RESTful HTTP Route Handlers (`app/api/**`)
- Dự án triển khai hệ thống Next.js Route Handlers đầy đủ tại `app/api/**`:
  - Phân hệ xác thực: `/api/auth/session` (GET/POST/DELETE) và `/api/auth/admin-token` (POST).
  - Phân hệ tiến độ học tập: `/api/learning/state`, `/api/learning/subsections/[subsectionId]/completion`, `/api/learning/bookmarks`, `/api/learning/review-items`.
  - Phân hệ flashcard: `/api/learning/flashcards/due`, `/api/learning/flashcards/[cardId]/reviews`.
  - Phân hệ báo cáo quản trị: `/api/admin/learning-report`, `/api/admin/learning-report/export`.
- Frontend gọi các endpoint này thông qua lớp wrapper chuẩn hóa [`lib/client/api.js`](file:///d:/TT%20HCM/lib/client/api.js) với cơ chế tự động đính kèm credentials (`same-origin`) cho session cookie HttpOnly. Hỗ trợ [`lib/client/mock-server.js`](file:///d:/TT%20HCM/lib/client/mock-server.js) cho chế độ phát triển offline.

#### B. Cơ chế Gọi Server Actions (Next.js Server Boundaries)
Phân hệ thi trắc nghiệm giao tiếp trực tiếp với server qua hai Server Action trong [`app/actions/quiz.js`](file:///d:/TT%20HCM/app/actions/quiz.js):
- **`getExamQuestions(payload)`**:
  - Nhận `{ subjectId, chapterId, examSetId, isTrickMode }`.
  - Server bóc tách hoàn toàn đáp án `answer` và `explanation`, sau đó cấp **Vé đề thi ký số HMAC SHA-256 (`examTicket`)** có hạn dùng 4 giờ gắn với UID người dùng.
  - Được `Quiz.js` import và gọi trực tiếp khi học viên bắt đầu bài thi tính giờ (`mode === "end"`).
- **`submitExamScore(payload)`**:
  - Nhận `{ examTicket, clientAnswers, elapsedTime }`.
  - Server giải mã và xác thực tính toàn vẹn của `examTicket`, so khớp mảng phương án client chọn với đáp án gốc, tính điểm chuẩn thang 10, cập nhật tiến độ học tập và ghi bản ghi vào collection `rankings` trên Firestore.
  - Được `Quiz.js` import và gọi trực tiếp khi học viên nộp bài thi.

#### C. Gọi Firebase SDK & Bảo mật Server
- **Client**: `app/page.js` gọi `signInWithPopup(auth, provider)` để xác thực danh tính Google hoặc email/mật khẩu.
- **Server**: Toàn bộ thao tác ghi nhận điểm số, tạo phiên cookie và lưu trữ tiến độ học tập đều được thực hiện thông qua **Firebase Admin SDK** phía server để bảo đảm tính toàn vẹn và chống can thiệp từ client.

#### D. Trạng thái Tải dữ liệu (Loading States)
- Sử dụng các cờ Boolean cục bộ: `loadingMdx`, `isSubmitting`, `isGrading`, `loading`.
- Tại phân hệ Admin: Áp dụng component [`SectionSkeletonPlaceholder.js`](file:///d:/TT%20HCM/components/admin/SectionSkeletonPlaceholder.js) với hiệu ứng Shimmer Skeleton kết hợp cơ chế nạp lười [`LazySection.js`](file:///d:/TT%20HCM/components/admin/LazySection.js) để bảo toàn Layout Shift (CLS = 0).

#### E. Xử lý Lỗi (Error Handling)
- **Cấp độ Bất đồng bộ**: Bao bọc bằng `try...catch`. Lỗi API hoặc Server Action được trả về theo chuẩn envelope `{ ok: false, error: { code, message } }`, được log ra `console.error` và hiển thị cho người dùng qua Toast notification nổi (`showToast(msg, "error")`) hoặc Modal alert (`showAlert(msg)`).
- **Cấp độ Giao diện**: Thẻ `<ErrorBoundary>` hiển thị giao diện thay thế (fallback UI) thân thiện khi phát sinh lỗi render ở các Visualizer hoặc Quiz.

---

### 9.4. Quy ước Mã nguồn, Phong cách & Định danh (Conventions & Style)

- **Quy ước Đặt tên Tệp (File Naming)**:
  - **Component React**: Đặt tên PascalCase theo chức năng (`ContentRenderer.js`, `DrawingCanvas.js`, `AdminDashboard.js`, `BubbleSortLab.js`).
  - **Dữ liệu & Tiện ích**: Đặt tên kebab-case (`basic-algorithms.js`, `javaSyntaxHighlighter.js`, `generate-metadata.mjs`, `questions-chuong-1.js`).
  - **Server Actions**: Đặt trong `app/actions/*.js` (`quiz.js`).
  - **Route Handlers**: Đặt trong `app/api/**/route.js`.
- **Quy ước Cú pháp & Khai báo**:
  - ES Modules (`import / export`), khai báo `"type": "module"` trong `package.json`.
  - Ranh giới môi trường: Bắt buộc dòng đầu tiên là `"use client";` cho toàn bộ UI component và `"use server";` cho server action.
  - Định nghĩa component: Ưu tiên `export default function ComponentName({ ...props }) { ... }`. Các modal phụ trợ có thể dùng named export (`export function AdminAddUserModal`).
  - Cú pháp: Thụt lề 2 khoảng trắng (2 spaces), sử dụng dấu chấm phẩy (semicolon), chuỗi dùng nháy kép `""` hoặc template literals ``` `` ```.
- **Quy ước Styling**:
  - Ưu tiên Tailwind utility-first trên `className`.
  - Các khối học thuật dùng class ngữ nghĩa BEM nhẹ: `.content-block__label`, `.bullet-list__item`, `.definition-box`, `.highlight-box`, `.quote-block`.
- **Ranh giới Bất khả xâm phạm (Inviolable Data Boundary)**:
  - Toàn bộ các tệp tin `.js` đã tồn tại trong `data/` được định danh là **dữ liệu tĩnh bất khả xâm phạm**. Mã nguồn chỉ được phép `import` đọc dữ liệu, tuyệt đối không được sửa đổi, xóa bỏ hay ghi đè. Môn học mới (Điện toán đám mây) được ghép nối an toàn qua lớp Adapter Pattern [`lib/curriculum.js`](file:///d:/TT%20HCM/lib/curriculum.js).

