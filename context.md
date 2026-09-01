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
Bạn chỉ được sửa/tạo file trong phạm vi frontend. Không đụng backend.
Luôn bám theo API contract trong plan.md, không tự thêm field/endpoint
ngoài contract.

---

# Context dự án StudyMaster


> Khảo sát trên checkout đầy đủ của nhánh `feature/backend` tại `D:\TT HCM-backend` ngày 2026-09-01. Nội dung dưới đây mô tả **mã nguồn đang tồn tại thực tế**, không coi các tài liệu roadmap/walkthrough là đã triển khai nếu không tìm thấy code tương ứng.

## 1. Bức tranh tổng thể

StudyMaster là ứng dụng học tập đa môn chạy bằng Next.js App Router nhưng trải nghiệm chính được tổ chức như một SPA: `app/page.js` giữ state trung tâm và chuyển giữa `login`, `register`, `forgot-password`, `subject-select`, `study` và `admin-dashboard` thay vì dùng nhiều route URL. Ứng dụng gồm ba khối lớn:

1. Giáo trình có cấu trúc và hàng trăm visualizer/lab tương tác.
2. Quiz hai chế độ (luyện tập phản hồi ngay và thi tính giờ/chấm phía server).
3. Dashboard quản trị học viên, câu hỏi, thống kê và bảng xếp hạng.

Quy mô checkout hiện tại (không tính `node_modules`, `.next`): 1.007 file được `rg` nhìn thấy; 965 file `.js/.mjs`, khoảng 353 nghìn dòng và 17,4 triệu ký tự. Riêng `components/` có 831 file React, tất cả là Client Components; `data/` có 123 module dữ liệu.

## 2. Tech stack

### Ngôn ngữ và runtime

- JavaScript ES Modules (`package.json` có `"type": "module"`); mã ứng dụng không dùng TypeScript dù có `typescript` trong devDependencies và tài liệu minh họa schema bằng interface TypeScript.
- Node.js runtime qua Next.js; tài liệu setup khuyến nghị Node 20/22/24.
- React 19.2.4, Next.js 16.2.9, App Router.

### Giao diện và tương tác

- Tailwind CSS v4 qua `@tailwindcss/postcss`; phần lớn styling nằm trong `className`, bổ sung bởi `app/globals.css`.
- Design tokens chính: Silk Ivory `#faf8f4`, Dark Charcoal Earth `#2c2a26`, Amber Gold `#d97706`; từng môn thay đổi `--accent`, `--secondary`, `--accent-rgb`.
- Font Be Vietnam Pro và Playfair Display, nạp từ Google Fonts trong root layout.
- GSAP 3.15, `@gsap/react`, ScrollTrigger cho animation/scroll narrative.
- Three.js 0.185 cho một số visualizer 3D; Canvas/SVG cho các mô phỏng còn lại.
- Lucide React cho icon; `canvas-confetti` cho phản hồi kết quả quiz.
- `next-themes` chỉ xuất hiện ở hồ sơ, trong khi CSS toàn cục ép class-based dark mode và giao diện thực tế thiên về light theme.

### Dữ liệu, xác thực và xuất báo cáo

- Firebase Web SDK 12.14: Firestore và Firebase Authentication. Cấu hình project hard-code trong `lib/firebase.js`; không có Firebase Admin SDK, file rules, index, migration hay emulator config trong repo.
- Google sign-in dùng `GoogleAuthProvider` + `signInWithPopup` ở client.
- ExcelJS, jsPDF và html2canvas có trong dependencies để xuất dữ liệu/báo cáo; logic dashboard hiện chủ yếu xử lý dữ liệu ở browser.
- PWA qua `next-pwa`, manifest trong `public/manifest.json`; PWA tắt ở development và dùng `NetworkFirst` cho URL HTTP(S).

### Tooling

- ESLint 9 + `eslint-config-next/core-web-vitals`; tắt `react/no-unescaped-entities`.
- npm scripts: `dev`, `build`, `start`, `lint`, `clean`.
- Không có test runner/unit-test framework. `scripts/verify_admin_test_cases.js` là QA tĩnh dựa trên đọc source và kiểm tra chuỗi.

## 3. Cấu trúc thư mục và trách nhiệm

```text
app/
  layout.js               Root HTML, metadata, font links, manifest và viewport
  page.js                 Client SPA/state orchestrator, auth UI, chọn môn, study, admin
  globals.css             Tailwind import, tokens, component styles và animations
  actions/quiz.js         Hai Server Action lấy đề và chấm/nộp điểm

components/
  admin/                   12 component dashboard, section lazy mount, drawer, modal
  ContentRenderer.js      Registry/render engine rất lớn cho content block + visualizer
  Quiz.js                 Toàn bộ luồng quiz, timer, resume, chấm, leaderboard
  Sidebar.js              Điều hướng Subject -> Chapter -> Section -> Subsection
  DrawingCanvas.js        Lớp vẽ SVG responsive, lưu nét theo bài
  ProfileModal.js         Hồ sơ/avatar và đổi mật khẩu qua Firestore users/{username}
  AlgoSimDashboard.js     Cổng vào các lab thuật toán
  DiagramSimDashboard.js  Studio sơ đồ UML/ATM
  *.js                    Hàng trăm visualizer theo HCM, LSD, OOP, DSA, DB, UML...

data/
  index.js                Metadata subject/navigation + questionsMap dùng bởi UI/quiz
  lessons.js              Ghép dữ liệu bài học và tìm subsection theo ID
  chuong-*.js             Giáo trình Tư tưởng Hồ Chí Minh (6 chương)
  lich-su-dang*.js        Giáo trình Lịch sử Đảng (mở đầu, C1-C3, kết luận)
  oop.js, dsa.js           Giáo trình OOP và DSA lớn
  database*.js            CSDL chương 1-8
  analysis-design.js,
  ad-ch*.js               Phân tích thiết kế/yêu cầu
  basic-*.js              Các môn nền tảng
  questions-*.js          Ngân hàng inside/outside/trick và các fixed set

lib/firebase.js           Khởi tạo singleton Firebase app, export db và auth
utils/                     Java syntax highlighter dùng bởi renderer
scripts/                   Sinh metadata, thử chuyển JS sang MDX, QA dashboard
public/                    Icon/PWA manifest, ảnh login/admin, mascot, sơ đồ ATM
admindashboardDoc/         BRD, SRS, TDD, data contract, UI spec, QA và roadmap admin
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

- `Quiz.js` nhận subject/chapter/questions map từ metadata, tự lấy mẫu/fixed set, xáo câu và phương án, quản lý timer, bookmark, resume và kết quả.
- Practice mode (`mode === "immediate"`) giữ đáp án ở client, tự chấm, lưu lịch sử local và cố ghi Firestore.
- Exam mode (`mode === "end"`) hiện lấy câu hỏi từ `questionsMap` đã import vào client, sau đó chỉ `delete answer/explanation` tại client trước khi bắt đầu; khi nộp mới gọi `submitExamScore` để chấm server-side.
- `getExamQuestions` có tồn tại ở server nhưng hiện không được `Quiz.js` import/gọi. Vì vậy mô tả trong `walkthrough.md` rằng đề thi được tải sạch từ server không khớp runtime hiện tại.

### Xác thực và admin

- Đăng ký username/password thường lưu plaintext trong `localStorage` key `studymaster_users`; login cũng so sánh ở client.
- Admin mặc định hard-code `admin/admin`; quyền admin được suy ra từ username và state UI, chưa có session/token/authorization phía server.
- Google Auth xác thực danh tính Google, nhưng hồ sơ ứng dụng sau đó vẫn liên kết/lưu vào `studymaster_users` ở localStorage.
- Dashboard admin CRUD user, khóa/mở, reset password, subject unlock và audit log đều thao tác localStorage. Nó chưa phải backend quản trị tập trung.

## 5. Backend/API đã có

### Không có HTTP API route

Không có `app/api/**/route.js`, Pages API, Express server, REST endpoint hay GraphQL endpoint. Backend callable duy nhất là hai Next.js Server Action trong `app/actions/quiz.js`.

### `getExamQuestions(subjectId, chapterId, examSetId, isTrickMode)`

Đây là Server Action dùng positional arguments, không phải HTTP request.

```js
subjectId: string
chapterId: string
examSetId: string | number | undefined // hiện nhận nhưng không dùng để lọc
isTrickMode: boolean
```

Action tra `subjects[subjectId].questionsMap[chapterId]`; trick mode lấy `tricks`, mode thường ghép `inside` + `outside`; loại đáp án/lời giải và trả:

```js
Array<{
  id: string,
  question: string | undefined,
  q: string | undefined,       // alias tương thích; data thực tế chủ yếu dùng `question`
  options: string[],
  difficulty: string,
  sectionId: string | undefined,
  subsectionId: string | undefined
}>
```

Nếu subject/chapter không tồn tại hoặc catch lỗi: trả `null`, không throw và không có error envelope/status code.

### `submitExamScore(payload)`

Input:

```js
{
  name: string,
  subjectId: string,
  chapterId: string,
  examSetId: string | number,
  isTrickMode: boolean,
  questionsState: Array<{ id: string, options: string[], ... }>,
  clientAnswers: number[],     // index trong options đã xáo; -1 = chưa trả lời
  elapsedTime: number          // giây
}
```

Action nạp ngân hàng gốc theo subject/chapter (hiện không lọc thực theo `examSetId`), lập lookup `questionId -> correct option text + explanation`, rồi so sánh text phương án client chọn với đáp án gốc để chịu được việc xáo options. Document ghi vào Firestore `rankings`:

```js
{
  name: string,
  subjectId: string,
  score: number,
  total: number,
  time: number,
  date: string,               // ISO 8601
  chapterId: string,
  examSetId: string | number  // `"trick"` nếu isTrickMode
}
```

Response:

```js
{
  score: number,
  total: number,
  gradedResults: Array<{
    id: string,
    isCorrect: boolean,
    correctOptionIndex: number,
    explanation: string
  }>
}
```

Lỗi subject/chapter/Firestore được catch rồi throw lại thành `Error("Lỗi khi nộp điểm thi: ...")`; không có mã lỗi có cấu trúc.

### Firestore/Firebase được gọi trực tiếp từ client

- `Quiz.js`: practice mode `addDoc(rankings)` và leaderboard `getDocs(query(rankings, where subjectId, where chapterId))`.
- `ProfileModal.js`: `getDoc(users/{currentUser})`, kiểm tra password plaintext và `updateDoc({ password })`.
- `app/page.js`: Firebase Auth Google popup.

Implementation đang lệch: record practice mode không thêm `subjectId`, trong khi query leaderboard lọc `subjectId`; đăng ký user thường/Google chỉ tạo localStorage record, không tạo `users/{username}` trên Firestore. Các luồng local và cloud chưa đồng nhất.

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

## 7. Quy ước code đang dùng

- ES Modules; component React đặt file PascalCase và thường `export default function ComponentName(...)`.
- Component admin/utility có thể dùng named export (ví dụ hai modal trong `AdminModals.js`).
- Module dữ liệu dùng tên file kebab-case, named export camelCase (`questionsChuong4`, `databaseCh3Data`, `trickSet1`).
- Indent chủ yếu 2 spaces, semicolon, string chủ yếu double quote; dữ liệu sinh/nhập có nơi dùng quoted JSON keys và style chưa hoàn toàn đồng nhất.
- Import nội bộ chủ yếu dùng relative path, dù `jsconfig.json` có alias `@/* -> ./*`.
- Client/server boundary đánh dấu bằng `"use client"` và `"use server"`; hiện chỉ `app/actions/quiz.js` là server module.
- Styling ưu tiên Tailwind utility; CSS toàn cục dành cho token, pattern dùng lại, responsive media query và keyframes.
- Animation React dùng GSAP hooks khi có thể; một số component lớn vẫn query/manipulate DOM trực tiếp cho hiệu ứng.
- Toàn bộ `data/*.js` là vùng dữ liệu bất khả xâm phạm theo `AGENTS.md`, bao gồm cả `index.js`, `lessons.js`, mọi giáo trình, metadata, ngân hàng câu hỏi và file tổng hợp; không sửa, xóa, tạo mới hoặc ghi đè.
- Commit phải theo Conventional Commits và phải chạy `npm run build` trước commit.

## 8. Các điểm liên quan trực tiếp đến phát triển backend tiếp theo

1. **Backend chưa phải lớp dữ liệu tập trung.** User, quyền, admin log, khóa môn, avatar và phần lớn ranking nằm ở localStorage; nhiều thiết bị/trình duyệt không thể chia sẻ trạng thái.
2. **Chưa có authorization server-side.** `admin/admin`, role và account lock đều được kiểm tra ở client; hai Server Action quiz cũng không xác minh session/user/role.
3. **Ranh giới quiz chưa kín.** `getExamQuestions` không được UI dùng; toàn bộ `questionsMap` có đáp án vẫn đi vào client bundle. `submitExamScore` nhận `name`, question list và thời gian từ client, không ràng buộc attempt/exam set hay chống lặp ID.
4. **Firebase server setup chưa tách biệt.** Server Action dùng chung Firebase Web SDK/config với client, không có Admin SDK/service credentials; mức bảo vệ thực tế phụ thuộc Firestore Security Rules nhưng rules không nằm trong repo.
5. **Contract/data wiring đang lệch nhưng không được sửa trong `data/`.** `lessons.js` ghép 6 chương HCM và 5 phần LSD, nhưng `data/index.js` chỉ wire metadata/questions cho HCM chương 1-3 và LSD mở đầu/chương 1; nhiều question aggregator OOP/LSD/HCM C4-C6 tồn tại nhưng chưa import vào `subjects.questionsMap`. Đây là ràng buộc đầu vào cho backend/frontend; mọi giải pháp phải tôn trọng việc toàn bộ `data/*.js` là bất khả xâm phạm.
6. **Không được chạy script ghi vào `data/`.** `scripts/generate-metadata.mjs` tạo lại `data/index.js`, còn các migration/generator khác có thể sinh hoặc ghi đè dữ liệu. Theo rule hiện hành, không được chạy chúng nếu đích ghi là bất kỳ file `.js` nào trong `data/`.
7. **Tài liệu MDX không phản ánh checkout.** `walkthrough.md` nói có `content/`, `app/actions/content.js`, `gray-matter`, `next-mdx-remote` và MDX runtime, nhưng các phần này không tồn tại trong checkout/dependencies. `scripts/convert-to-mdx.mjs` chỉ là migration script chưa tích hợp; runtime vẫn dùng structured JS.
8. **Schema cần chốt trước khi làm backend.** Cần thống nhất User/Auth, Ranking/Attempt, Question/ExamSet, AdminLog, subject unlock và error envelope; không nên suy ra contract chỉ từ UI vì UI có dữ liệu mẫu và field tùy chọn.
9. **Không có test backend thực.** Cần kiểm thử Server Actions/data validation/Firestore integration; script QA hiện chỉ kiểm tra source chứa chuỗi mong đợi.

Các file nên đọc đầu tiên khi bắt đầu hạng mục backend: `AGENTS.md`, `plan.md`, `app/actions/quiz.js`, `lib/firebase.js`, `app/page.js` (auth/session contract), `components/Quiz.js`, `components/ProfileModal.js`, `components/admin/AdminDashboard.js`, `data/index.js`, `data/lessons.js`, và `admindashboardDoc/04_DATA_MODELS_AND_CONTRACTS.md`.

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
- **Engine Hiển thị Tri thức (`components/ContentRenderer.js`)**: Parser 4.848 dòng, nạp bài học động qua hàm `findSubsectionContent` từ `data/lessons.js`. Render các khối nội dung: `label`, `paragraph`, `bullets`, `sub-bullets`, `highlight`, `quote`, `definition`, `conclusion`, `code`, `table`, cùng hơn 300+ loại visualizer chuyên biệt.
- **Lớp Vẽ Vector (`components/DrawingCanvas.js`)**: Khung vẽ SVG nổi phủ toàn màn hình, sử dụng tọa độ chuẩn hóa $[x_{norm}, y_{norm}] \in [0.0, 1.0]$. Tự động thích ứng kích thước với `ResizeObserver`, làm mượt nét vẽ bằng đường cong Bézier bậc hai, tẩy xóa thông minh theo bán kính va chạm, lưu trữ cục bộ riêng cho từng tiểu mục.
- **Hệ thống Đánh giá (`components/Quiz.js`)**: Hỗ trợ 2 chế độ (Luyện tập tức thì và Thi thử tính giờ), tích hợp timer, xáo trộn câu hỏi và phương án (Fisher-Yates), lưu checkpoint làm bài, chấm điểm và phân tích bẫy tư duy (`trickDetails`).
- **Phân hệ Quản trị (`components/admin/*`)**: Gồm 14 component chuyên trách: `AdminDashboard` (cuộn mượt Single-Page với Scrollspy), `AdminUnifiedHero` (KPIs thời gian thực), `AdminOverviewTab` (biểu đồ SVG Bézier & Donut), `AdminUsersTab` (quản lý người dùng, xuất Excel), `AdminQuestionsTab` (kiểm tra độ lệch $\Delta L \le 15$ ký tự), `AdminLeaderboardTab` (bảng vinh danh Top rankers), `AdminUserDrawer` (biểu đồ Radar năng lực 6-8 trục).
- **Bộ Bắt lỗi (`components/ErrorBoundary.js`)**: Bao bọc các phân hệ phức tạp (`Quiz`, `ContentRenderer`, `AlgoSimDashboard`, `DiagramSimDashboard`) để cô lập lỗi runtime, tránh sập toàn trang.

#### C. Kiến trúc State Management
- **Không dùng thư viện quản lý trạng thái tập trung**: Dự án không cài đặt Redux, Zustand, Recoil hay React Context API.
- **Mô hình State nội bộ + Prop Drilling**: Toàn bộ trạng thái chính được khai báo bằng `useState` và `useRef` tại `app/page.js` rồi truyền qua props / callbacks xuống các component con sâu từ 2 đến 4 tầng.
- **Lưu trữ Cục bộ (Storage-backed State)**: Ứng dụng dùng `localStorage` và `sessionStorage` làm kho dữ liệu chính để duy trì trạng thái qua các phiên:
  - Phiên đăng nhập: `studymaster_session_user`, `studymaster_remember_me`.
  - Tài khoản: `studymaster_users` (lưu danh sách user local dưới dạng plaintext JSON).
  - Nét vẽ & Highlight: `studymaster-drawings-${subjectId}-${activeSubsectionId}`, `studymaster-highlights`.
  - Trạng thái thi: `studymaster_active_quiz_state` (resume bài thi), `studymaster_quiz_rankings_${chapterId}`.
  - Quản trị: `studymaster_admin_logs`, `studymaster_unlocked_subjects_${username}`.

---

### 9.3. Cách thức Gọi API & Tích hợp Backend hiện tại

#### A. Không có REST/HTTP API (Base URL: N/A)
- Dự án không có thư mục `app/api/` hoặc `pages/api/`, không cấu hình Base URL, không dùng `axios` hay `fetch()` tới các REST endpoint tự tạo.

#### B. Cơ chế Gọi Server Actions (Next.js Server Boundaries)
Giao tiếp máy chủ duy nhất là hai Server Action trong [`app/actions/quiz.js`](file:///d:/TT%20HCM-frontend/app/actions/quiz.js):
- **`getExamQuestions(subjectId, chapterId, examSetId, isTrickMode)`**:
  - Lấy câu hỏi từ `subjects[subjectId].questionsMap[chapterId]`, bóc tách đáp án `answer` và `explanation` phía server rồi trả về mảng câu hỏi an toàn.
  - *Hiện trạng frontend*: `Quiz.js` hiện chưa gọi hàm này mà đang đọc trực tiếp từ `questionsMap` client-side rồi tự xóa field đáp án trên client.
- **`submitExamScore(payload)`**:
  - Nhận kết quả bài thi từ client, so khớp text phương án đã chọn với đáp án gốc trên server, tính điểm và ghi trực tiếp bản ghi vào Firestore collection `rankings`.
  - Được `Quiz.js` import và gọi trực tiếp khi học viên nộp bài thi tính giờ (`mode === "end"`).

#### C. Gọi Trực tiếp Firebase Client SDK
Một số thành phần frontend gọi thẳng vào Firebase SDK từ trình duyệt:
- **Xác thực Google**: `app/page.js` gọi `signInWithPopup(auth, provider)`.
- **Lưu điểm Luyện tập & Đọc Bảng xếp hạng**: `Quiz.js` trực tiếp gọi `addDoc(collection(db, "rankings"), ...)` và `getDocs(query(collection(db, "rankings"), ...))`.
- **Đổi mật khẩu Firestore**: `ProfileModal.js` gọi `getDoc` và `updateDoc` trên document `users/{currentUser}`.

#### D. Trạng thái Tải dữ liệu (Loading States)
- Sử dụng các cờ Boolean cục bộ: `loadingMdx`, `isSubmitting`, `isGrading`, `loading`.
- Tại phân hệ Admin: Áp dụng component [`SectionSkeletonPlaceholder.js`](file:///d:/TT%20HCM-frontend/components/admin/SectionSkeletonPlaceholder.js) với hiệu ứng Shimmer Skeleton kết hợp cơ chế nạp lười [`LazySection.js`](file:///d:/TT%20HCM-frontend/components/admin/LazySection.js) để bảo toàn Layout Shift (CLS = 0).

#### E. Xử lý Lỗi (Error Handling)
- **Cấp độ Bất đồng bộ**: Bao bọc bằng `try...catch`. Lỗi Server Action hoặc Firebase được log ra `console.error` và hiển thị cho người dùng qua Toast notification nổi (`showToast(msg, "error")`) hoặc Modal alert (`showAlert(msg)`).
- **Cấp độ Giao diện**: Thẻ `<ErrorBoundary>` hiển thị giao diện thay thế (fallback UI) thân thiện khi phát sinh lỗi render ở các Visualizer hoặc Quiz.

---

### 9.4. Quy ước Mã nguồn, Phong cách & Định danh (Conventions & Style)

- **Quy ước Đặt tên Tệp (File Naming)**:
  - **Component React**: Đặt tên PascalCase theo chức năng (`ContentRenderer.js`, `DrawingCanvas.js`, `AdminDashboard.js`, `BubbleSortLab.js`).
  - **Dữ liệu & Tiện ích**: Đặt tên kebab-case (`basic-algorithms.js`, `javaSyntaxHighlighter.js`, `generate-metadata.mjs`, `questions-chuong-1.js`).
  - **Server Actions**: Đặt trong `app/actions/*.js` (`quiz.js`).
- **Quy ước Cú pháp & Khai báo**:
  - ES Modules (`import / export`), khai báo `"type": "module"` trong `package.json`.
  - Ranh giới môi trường: Bắt buộc dòng đầu tiên là `"use client";` cho toàn bộ UI component và `"use server";` cho server action.
  - Định nghĩa component: Ưu tiên `export default function ComponentName({ ...props }) { ... }`. Các modal phụ trợ có thể dùng named export (`export function AdminAddUserModal`).
  - Cú pháp: Thụt lề 2 khoảng trắng (2 spaces), sử dụng dấu chấm phẩy (semicolon), chuỗi dùng nháy kép `""` hoặc template literals ``` `` ```.
- **Quy ước Styling**:
  - Ưu tiên Tailwind utility-first trên `className`.
  - Các khối học thuật dùng class ngữ nghĩa BEM nhẹ: `.content-block__label`, `.bullet-list__item`, `.definition-box`, `.highlight-box`, `.quote-block`.
- **Ranh giới Bất khả xâm phạm (Inviolable Data Boundary)**:
  - Toàn bộ 123 tệp tin `.js` trong `data/` được định danh là **dữ liệu tĩnh bất khả xâm phạm**. Mã nguồn frontend chỉ được phép `import` đọc dữ liệu, tuyệt đối không được sửa đổi, xóa bỏ hay ghi đè.

