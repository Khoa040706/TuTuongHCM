<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — Rule dự án StudyMaster (Tư tưởng HCM & Đa môn học)

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

## Cấu trúc dự án
- **Backend (Server-side)**:
  * Server Actions (`app/actions/quiz.js`): Lọc bỏ đáp án/giải thích trước khi gửi về client, chấm điểm độc lập phía server.
  * Database: Google Firebase Cloud Firestore (Collection `rankings` lưu điểm số, thời gian, tên học viên) & Firebase Auth.
- **Frontend (Client-side)**:
  * Central State Orchestrator (`app/page.js`): Quản lý luồng đăng nhập, chọn môn, bài học, quiz, admin và thanh công cụ vẽ.
  * Component dựng nội dung (`components/ContentRenderer.js`): Render bài học học thuật & tích hợp hơn 820+ Visualizers tương tác.
  * Giao diện Trắc nghiệm (`components/Quiz.js`): Hỗ trợ chế độ Luyện tập (tức thì) và Thi thử (tính giờ, bảo mật).
  * Phân hệ Quản trị (`components/admin/*`): Dashboard thống kê, quản lý học viên, quét kiểm định ngân hàng câu hỏi.
  * Dữ liệu & Đề thi (`data/`): 123 file giáo trình học thuật và ngân hàng câu hỏi trắc nghiệm của 10 môn học.

## Lưu ý bắt buộc (Mandatory Protocols)
- **Đọc tài liệu điều phối trước khi code**:
  * Luôn đọc kỹ `context.md` và `plan.md` trước khi tiến hành viết mã nguồn.
  * Không tự ý bịa thêm trường (field), phương thức hoặc endpoint ngoài hợp đồng dữ liệu / API contract đã định nghĩa trong `plan.md`.
  * Cập nhật `plan.md` và xin ý kiến xác nhận trước nếu phát sinh nhu cầu thay đổi API / Data contract so với kế hoạch ban đầu.
## Vùng dữ liệu bất khả xâm phạm (data/)

- File ĐÃ TỒN TẠI trong data/ là nội dung giáo trình chính thức đã nhập —
  KHÔNG ĐƯỢC sửa, xóa, ghi đè nội dung bên trong.
- TẠO FILE MỚI trong data/ cho môn/chương CHƯA có sẵn là ĐƯỢC PHÉP, và là
  việc cần làm khi giao task nhập liệu mới — miễn không đụng file đã tồn tại.
- Khi không chắc 1 file đã tồn tại hay chưa, kiểm tra bằng cách liệt kê
  thư mục data/ trước, không tự suy đoán.

## Phạm vi làm việc — ai làm gì

- Bạn (Codex) CHỊU TRÁCH NHIỆM: lên kế hoạch (plan.md), toàn bộ phần
  backend (Server Actions trong app/actions/, logic xử lý dữ liệu, tương
  tác Firebase/Firestore), và debug lỗi được báo cáo. Backend LÀ phạm vi
  của bạn, không phải vùng cấm.
- Agent frontend (Antigravity) chịu trách nhiệm: toàn bộ UI/component/page,
  styling, routing state (appStep).
- Dự án này là Next.js App Router — 1 codebase duy nhất, KHÔNG tách thư
  mục frontend/backend riêng biệt theo đường dẫn — phân biệt theo TRÁCH
  NHIỆM/NỘI DUNG file, không theo việc file nằm ở thư mục nào.
- Rule "chỉ sửa trong phạm vi của mình" áp dụng khi THỰC SỰ GHI/SỬA FILE
  code, KHÔNG áp dụng cho giai đoạn thảo luận, đặt câu hỏi, hay lên kế
  hoạch — ở giai đoạn đó, được tự do đề xuất mọi phương án mà không cần
  né tránh.

## Quy tắc biên soạn Bài kiểm tra trắc nghiệm (Quiz / Exam Rules)
- **Quy tắc Đặt tên & Định danh (Dynamic Naming Convention)**:
  * Tên file và ID câu hỏi phải đặt theo mã định danh linh hoạt:
    + Cấu trúc ID: `{MãMôn}-{MãChương}-d{SốĐề}-{STT}` (Ví dụ: `lsd-c2-d1-001`, `hcm-c4-d1-001`).
    + Cấu trúc File: `questions-{mã-môn}-{mã-chương}-part{N}.js` hoặc `questions-{mã-môn}-{mã-chương}-trick{N}.js`.
- **Cấu trúc Bộ đề Thi Cố định (Fixed Exam Sets)**:
  * Mỗi bộ đề thi chính thức chứa đúng 40 câu hỏi cố định (36 câu Inside chuẩn giáo trình + 4 câu Outside vận dụng thực tiễn).
  * Tỷ lệ độ khó chuẩn trong 36 câu Inside: 20% Dễ (7 câu), 50% Trung bình (18 câu), 30% Khó (11 câu) + 4 câu Outside.
- **Bộ đề Bẫy (Trick Exam Sets)**:
  * Mỗi bộ đề bẫy chứa 50 câu bẫy tư duy Vận dụng cao.
  * 100% câu hỏi bẫy bắt buộc phải có thuộc tính `trickDetails` gồm: `whyTrapped`, `trickWord`, `citation`, `tip`.
- **Cơ chế Chống đoán bừa tuyệt đối (Equal Option Length Balance)**:
  * Trong CÙNG MỘT CÂU HỎI, độ lệch chiều dài giữa phương án dài nhất và ngắn nhất MUST $\le 15$ ký tự ($L_{\max} - L_{\min} \le 15$).
  * Các phương án nhiễu phải được viết công phu, tương đồng về độ dài lẫn văn phong học thuật với đáp án đúng.
- **Quy trình Kiểm thử tự động (Automated Verification Protocol)**:
  * Phải chạy script tự động (Node.js) kiểm tra 100% ma trận và độ lệch chiều dài trong câu ($\le 15$ chars) trước khi tích hợp.

## Quy tắc Làm việc & Tương tác (Workflow & Interaction Rules)
- **Quy tắc Lập Kế hoạch (Mandatory Planning Protocol)**:
  * Khi người dùng yêu cầu lên kế hoạch (Plan), Agent **BẮT BUỘC** phải tạo ngay file/artifact kế hoạch (`implementation_plan.md`) hoàn chỉnh và yêu cầu người dùng xác nhận, không được chỉ nói suông trong phần chat.
- **Quy tắc Đặt Câu hỏi Khảo sát (Interactive Survey & Decision Prompting)**:
  * Khi cần khảo sát ý kiến hay làm rõ yêu cầu, Agent **BẮT BUỘC** phải hiển thị giao diện câu hỏi trắc nghiệm tương tác (dùng công cụ `ask_question`) để người dùng dễ dàng chọn lựa.
  * Tùy chọn đề xuất đầu tiên phải có tiền tố `(Recommended)`.
  * Các phương án lựa chọn phải được viết chi tiết, rõ nghĩa, chuyên nghiệp.
- **Quy tắc Thiết kế Banner Tựa đề Chương (Chapter Hero Banner Overview)**:
  * Hero Banner tại Mục ★ (Section 0) của mỗi chương là để **Overview (Tổng quan hóa) toàn bộ kiến thức của cả chương đó**.
  * Phải thiết kế sống động, tích hợp sơ đồ luồng/pipeline tương tác, bảng chuyển đổi góc nhìn hoặc radar quét kiến thức trọng tâm của toàn chương.


