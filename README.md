# HƯỚNG DẪN NHÀ PHÁT TRIỂN & TÀI LIỆU HỆ THỐNG STUDYMASTER ♋

Hệ thống hỗ trợ học tập trực quan đa giác quan, phòng thí nghiệm thuật toán tương tác, quản trị học tập tập trung và ôn thi trắc nghiệm bảo mật toàn diện cho các môn **Lý luận chính trị** (Tư tưởng Hồ Chí Minh, Lịch sử Đảng Cộng sản Việt Nam) và các môn **Khoa học Máy tính & Công nghệ Thông tin** (DSA, CSDL, OOP Java, PTTKYC, Kiến trúc Máy tính, Mạng máy tính, v.v.).

---

## 📌 PHẦN 1: TỔNG QUAN DỰ ÁN & TRIẾT LÝ THIẾT KẾ

### 1. Tầm nhìn và Mục tiêu của StudyMaster
*StudyMaster* ra đời với sứ mệnh xóa bỏ rào cản tiếp thu trong các môn lý thuyết trừu tượng và chuyên ngành phức tạp. Bằng cách kết hợp giữa kiến trúc bài giảng cấu trúc động (**Structured Curriculum Engine**), các phòng thí nghiệm mô phỏng thời gian thực (**Algorithm Labs & Diagram Studios**), công cụ vẽ ghi chú tự do vector (**SVG Drawing Canvas**), và hệ thống quản trị học tập hiện đại (**Admin Dashboard**), StudyMaster biến tài liệu học thuật tĩnh thành một không gian học tập sống động, lôi cuốn và thúc đẩy tư duy phản biện.

Hệ thống được thiết kế hướng tới 4 giá trị cốt lõi:
1. **Học tập đa giác quan (Multisensory Learning)**: Người học vừa tiếp cận giáo trình chuẩn mực, vừa tương tác trực tiếp với các mô hình dữ liệu động, vừa lắng nghe âm thanh nhịp điệu mô phỏng (Woodblock & Keypress sound effects) và vẽ sơ đồ tư duy ngay trên màn hình.
2. **Đánh giá năng lực thực chất & Chống đoán bừa**: Cơ chế trắc nghiệm phân tách rõ rệt giữa tự luyện tập và thi xếp hạng bảo mật trên Server Actions; áp dụng luật cân bằng độ dài phương án ($\Delta L \le 15$ ký tự) để triệt tiêu việc suy đoán đáp án theo trực giác.
3. **Phòng thí nghiệm trực quan hóa chuyên sâu**: Cung cấp các công cụ đồ họa cao cấp như Studio phân tích sơ đồ UML (Use Case, Class, Sequence, Activity) và các phòng Lab thuật toán so sánh song song.
4. **Quản trị và Giám sát toàn diện (Admin Analytics)**: Bảng điều khiển quản trị theo dõi thời gian thực tiến độ của học viên, biểu đồ phân tích năng lực radar, kiểm định chất lượng câu hỏi tự động và trích xuất báo cáo Excel.

### 2. Triết lý Thiết kế Trải nghiệm (UX Philosophy)
1. **Giảm thiểu xao nhãng (Cognitive Load Reduction)**: Giao diện học tập tối ưu hóa theo chế độ *Focus Mode*. Sidebar có thể thu gọn mượt mà, thanh công cụ ghi chú nổi tinh gọn và tự động đổi màu chủ đạo (Accent Color) theo từng môn học.
2. **Khắc sâu kiến thức (Active Recall & Spaced Repetition)**: Đặt các hộp ghi nhớ nhanh (Mnemonic Box), hộp tóm tắt (Summary Box), và trắc nghiệm khái niệm nhỏ (`ConceptQuiz`) ngay giữa các đoạn văn để người học lập tức củng cố kiến thức.
3. **Động lực tiến bộ liên tục (Gamification & Real-time Ranking)**: Bảng xếp hạng trực tuyến vinh danh Top học viên, huy hiệu thành tích và hệ thống âm thanh phản hồi tức thì tạo cảm giác hứng khởi trong quá trình ôn luyện.

---

## 📌 PHẦN 2: KIẾN TRÚC HỆ THỐNG & STACK CÔNG NGHỆ

Hệ thống áp dụng kiến trúc **Single Page App (SPA) với Central State Orchestrator** tối ưu hiệu năng tải trang, bảo mật bài thi và kết nối mượt mà giữa các tầng dữ liệu:

```
┌────────────────────────────────────────────────────────────────────────┐
│                              STUDYMASTER                               │
│                             (Client Side)                              │
│                                                                        │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────────┐  │
│  │  ContentRenderer │  │  Drawing Canvas  │  │   Admin Dashboard    │  │
│  │ & 820+ Visualizer│  │   (SVG Vector)   │  │ (12 Sub-components)  │  │
│  └────────┬─────────┘  └────────┬─────────┘  └──────────┬───────────┘  │
└───────────┼─────────────────────┼───────────────────────┼──────────────┘
            │                     │                       │
            │ (Data Query)        │                       │ (Data Flow)
┌───────────▼─────────────────────▼───────────────────────▼──────────────┐
│                    STRUCTURED LESSONS & QUIZ ENGINE                    │
│                                                                        │
│  ┌──────────────────────────┐  ┌────────────────────────────────────┐  │
│  │    data/lessons.js       │  │        Secure Quiz Engine          │  │
│  │  (Structured JS Modules) │  │  (Server Action app/actions/quiz)  │  │
│  └────────────┬─────────────┘  └─────────────────┬──────────────────┘  │
└───────────────┼──────────────────────────────────┼─────────────────────┘
                │                                  │ (SDK)
                │ (Module Imports)                 ▼
        ┌───────▼────────┐               ┌───────────────────┐
        │  Curriculum &  │               │  Firebase Cloud   │
        │ Question Sets  │               │     Firestore     │
        └────────────────┘               └───────────────────┘
```

### Stack Công nghệ chi tiết:
* **Core Framework**: **Next.js 16.2.9 (App Router)** & **React 19.2.4** (Hooks, Transitions, Suspense & Error Boundaries).
* **Styling Engine**: **TailwindCSS v4.0.0** kết hợp **PostCSS** và hệ thống CSS Variables động.
* **Hoạt họa & Kỹ xảo**: **GSAP v3.15.0 (GreenSock)** cùng `@gsap/react` và ScrollTrigger (Cinematic Scroll, 3D Spotlight Tracking).
* **Đồ họa 3D & Hiệu ứng tương tác**: **Three.js v0.185.1**, **Canvas Confetti v1.9.4**, **Lucide React v1.17.0**.
* **Đám mây & Cơ sở dữ liệu**: **Google Firebase SDK v12.14.0** (Firestore & Firebase Auth).
* **Xuất báo cáo & Dữ liệu**: **ExcelJS v4.4.0**, **JSPDF v4.2.1**, **HTML2Canvas v1.4.1**.

---

## 📌 PHẦN 3: CƠ CHẾ DỰNG BÀI HỌC CẤU TRÚC (STRUCTURED CONTENT RENDERER)

Thay vì sử dụng các tệp MDX cần phân tích chuỗi văn bản tĩnh, hệ thống StudyMaster sử dụng **Cơ chế Cấu trúc Dữ liệu Động (Structured JavaScript Data Modules)**:

1. **Kho Dữ liệu Bài học (`data/lessons.js`)**:
   * Dữ liệu bài giảng của 10 môn học được module hóa thành các tệp dữ liệu JavaScript chuẩn (`chuong-1.js`, `dsa.js`, `oop.js`, `database.js`, `lich-su-dang.js`, `ad-ch1.js`, v.v.).
   * Cấu trúc phân cấp rõ ràng: `Subject ➔ Chapter ➔ Section ➔ Subsection ➔ Parts`.
2. **Bộ Dựng Nội dung (`components/ContentRenderer.js`)**:
   * Hàm `findSubsectionContent(subjectId, activeSubsectionId)` truy xuất trực tiếp cây dữ liệu trong bộ nhớ với độ trễ $0\text{ms}$.
   * Tự động nhận diện và bao bọc các khối kiến thức đặc biệt:
     * **Hộp Mẹo nhớ (Mnemonic Box)**: Tóm tắt mẹo ghi nhớ nhanh, công thức cốt lõi.
     * **Hộp Tổng kết (Summary Box)**: Tổng hợp các luận điểm học thuật trọng tâm.
     * **Hộp Trích dẫn & Định nghĩa (Quote & Definition Box)**: Trích dẫn văn kiện và khái niệm.
   * **Nhúng trực tiếp 820+ React Visualizers**: Cho phép gắn trực tiếp các props tương tác, biến trạng thái và hàm xử lý sự kiện mà không bị giới hạn bởi rào cản serialize của Markdown.

---

## 📌 PHẦN 4: PHÂN HỆ QUẢN TRỊ ADMIN DASHBOARD (`components/admin/`)

Hệ thống quản trị **Admin Dashboard** được thiết kế theo cấu trúc module hóa cao cấp với **12 sub-components** chuyên trách:

```
components/admin/
├── AdminDashboard.js         # Khung điều phối trung tâm & quản lý State
├── AdminUnifiedHero.js       # Hero banner hiển thị Live KPIs & Quick Actions
├── AdminHero.js              # Banner phụ trợ
├── AdminCinematicHero.js     # Banner phong cách điện ảnh
├── AdminDock.js              # Thanh Dock điều hướng nổi chuyển đổi 4 Tab
├── AdminOverviewTab.js       # Tab Tổng quan: Biểu đồ SVG Bézier & Donut, System Logs
├── AdminUsersTab.js          # Tab Quản lý Học viên: Phân trang, Khóa/Mở, Đổi pass, Xuất Excel
├── AdminQuestionsTab.js      # Tab Ngân hàng Câu hỏi: Kiểm định luật chống đoán bừa (ΔL ≤ 15)
├── AdminLeaderboardTab.js    # Tab Bảng xếp hạng: Vinh danh Top học viên & Lọc bộ môn
├── AdminUserDrawer.js        # Drawer chi tiết học viên & Biểu đồ Radar năng lực
├── AdminWorkDrawer.js        # Drawer tác vụ nhanh & Kiểm tra sức khỏe hệ thống
└── AdminModals.js            # Hộp thoại Thêm học viên, Đổi mật khẩu, Xác nhận an toàn
```

### 1. Tab Tổng quan (`AdminOverviewTab.js`)
* **4 Thẻ KPI động**: Tổng số học viên, Độ chuẩn xác trung bình (%), Tổng lượt ôn tập, Số nhật ký hoạt động.
* **Biểu đồ Đường Lượt thi (SVG Smooth Cubic Bézier Curve)**: Tự động tính toán đường cong Bézier mượt mà theo lịch sử làm bài theo ngày, hỗ trợ rê chuột (hover) xem chi tiết số lượt thi tại từng mốc thời gian.
* **Biểu đồ Donut Phân bố Môn học**: Trực quan hóa tỉ trọng lượt ôn luyện giữa các môn đại cương và chuyên ngành.
* **Nhật ký Hoạt động Hệ thống (System Audit Logs)**: Ghi lại các hành vi quan trọng (hoàn thành bài thi, nộp điểm 40/40, đăng ký tài khoản) kèm bộ lọc và nút dọn dẹp log.

### 2. Tab Quản lý Học viên (`AdminUsersTab.js`)
* **Tìm kiếm & Phân loại**: Tìm kiếm theo Username/Email thời gian thực, lọc tài khoản Đang hoạt động hoặc Đã bị khóa.
* **Phân trang & Hành động nhanh**: Xem hồ sơ, Khóa/Mở khóa tài khoản ngay lập tức, Đổi mật khẩu học viên mà không cần quyền can thiệp cơ sở dữ liệu thô.
* **Trích xuất Excel (`ExcelJS`)**: Xuất danh sách toàn bộ học viên kèm ngày tạo và trạng thái ra file `.xlsx` định dạng chuyên nghiệp.

### 3. Tab Ngân hàng Câu hỏi & Kiểm định Chất lượng (`AdminQuestionsTab.js`)
* **Công cụ Kiểm định Tự động (Rule Compliance Auditor)**: Quét toàn bộ câu hỏi trong chương được chọn, tự động tính toán độ lệch chiều dài giữa phương án dài nhất và ngắn nhất ($\Delta L = L_{\max} - L_{\min}$). Nếu $\Delta L > 15$ ký tự, hệ thống gắn cờ cảnh báo vi phạm quy tắc chống đoán bừa của dự án.
* **Phân tích Cấu trúc & Đề bẫy**: Phân loại rõ ràng các nhóm câu hỏi Inside (chuẩn giáo trình), Outside (vận dụng thực tế) và Tricks (50 câu bẫy tư duy).
* **Xem trước Chi tiết**: Hiển thị đầy đủ nội dung câu hỏi, 4 phương án lựa chọn, đáp án đúng và phần giải thích cặn kẽ / bẫy tư duy (`trickDetails`).

### 4. Tab Bảng xếp hạng (`AdminLeaderboardTab.js`)
* **Vinh danh Top học viên**: Bảng vàng hiển thị Top 1, Top 2, Top 3 với hiệu ứng phát sáng kim loại (Vàng, Bạc, Đồng).
* **Lọc đa chiều**: Lọc thành tích theo từng môn học, thời gian hoàn thành và điểm số tuyệt đối.

### 5. Drawer Hồ sơ Năng lực Cá nhân (`AdminUserDrawer.js`)
* Trượt từ cạnh phải màn hình khi nhấp vào một học viên bất kỳ.
* Hiển thị chỉ số chuyên cần, tỷ lệ làm bài, lịch sử thi gần nhất và **Biểu đồ Radar Năng lực** phân tích độ thuần thục theo từng môn học.

---

## 📌 PHẦN 5: PHÒNG THÍ NGHIỆM MÔ PHỎNG & COMPONENT TƯƠNG TÁC

Hệ thống tích hợp hơn **820+ bộ mô phỏng trực quan** cùng 2 phòng Lab tương tác chuyên sâu:

### 1. Phòng Thí nghiệm Thuật toán (`AlgoSimDashboard.js`)
Bao gồm các bài Lab chuyên sâu phục vụ môn Cấu trúc Dữ liệu & Giải thuật:
* **`BubbleSortLab.js`**: Mô phỏng sắp xếp nổi bọt với thanh đo so sánh, hoán vị (Swap), bộ đếm vòng lặp và âm thanh gõ nhịp điệu trực quan.
* **`SelectionSortLab.js`**: Mô phỏng tìm phần tử nhỏ nhất và đưa về đầu mảng đã sắp xếp.
* **`InsertionSortLab.js`**: Mô phỏng giải thuật chèn từng phần tử vào mảng con đã có thứ tự.
* **`MergeSortLab.js`**: Phòng Lab sắp xếp trộn đỉnh cao với **2 cửa sổ so sánh song song**, cây đệ quy chia để trị (Divide and Conquer) và cửa sổ popup mã giả (Pseudocode) tương tác.
* **`BinarySearchLab.js`**: Mô phỏng tìm kiếm nhị phân với 3 con trỏ `Low`, `Mid`, `High` trên mảng số nguyên.
* **`BfsLab.js` & `BstLab.js`**: Mô phỏng duyệt đồ thị theo chiều rộng và thao tác thêm/xóa/cân bằng trên cây nhị phân tìm kiếm.
* **`RecursionLab.js`**: Mô phỏng ngăn xếp đệ quy (Call Stack Animation) qua bài toán Tháp Hà Nội và Dãy Fibonacci.

### 2. Studio Sơ đồ Phân tích Thiết kế Hệ thống (`DiagramSimDashboard.js`)
Dành riêng cho môn Phân tích & Thiết kế HTTT (PTTKYC):
* **Trực quan hóa 4 loại sơ đồ UML**: Sơ đồ Ca sử dụng (Use Case), Sơ đồ Lớp (Class Diagram), Sơ đồ Tuần tự (Sequence Diagram), Sơ đồ Hoạt động (Activity Diagram) của Hệ thống ATM thực tế.
* **Chế độ Lightbox Siêu Phân Giải (Fullscreen Lightbox)**:
  * Khả năng phóng to/thu nhỏ mượt mà từ **50% đến 500%** (`ZoomIn`, `ZoomOut`, nút nhanh `1:1`).
  * **Kéo chuột di chuyển bản vẽ tự do (Freehand Pan & Drag)**: Giữ chuột trái hoặc vuốt cảm ứng trên màn hình cảm ứng để di chuyển bản vẽ tới mọi góc nhìn chi tiết.
  * Hỗ trợ định dạng vector SVG sắc nét và PNG chất lượng cao.

---

## 📌 PHẦN 6: DANH MỤC 10 MÔN HỌC CHÍNH THỨC

Dữ liệu được tổ chức chuẩn hóa trong [`data/index.js`](file:///d:/TT%20HCM/data/index.js):

| Mã định danh | Tên môn học | Danh mục | Màu chủ đạo (HSL) |
| :--- | :--- | :--- | :--- |
| `tu-tuong-hcm` | **Tư tưởng Hồ Chí Minh** | Môn đại cương | Cam hổ phách (`#d97706`) |
| `lich-su-dang` | **Lịch sử Đảng Cộng sản Việt Nam** | Môn đại cương | Đỏ cờ / Vàng gold (`#dc2626`) |
| `database` | **Cơ sở Dữ liệu (Database)** | Chuyên ngành CNTT | Xanh lục bảo (`#059669`) |
| `dsa` | **Cấu trúc Dữ liệu & Giải thuật** | Chuyên ngành CNTT | Xanh dương đậm (`#2563eb`) |
| `oop` | **Lập trình Hướng đối tượng (Java OOP)** | Chuyên ngành CNTT | Tím Indigo (`#6366f1`) |
| `analysis-design` | **Phân tích & Thiết kế HTTT (PTTKYC)** | Chuyên ngành CNTT | Rêu Oliu (`#384417` / `#CCD06B`) |
| `basic-general` | **Kiến trúc Máy tính & Hợp ngữ** | Cơ sở ngành | Xám đá (`#475569`) |
| `basic-concepts` | **Mạng máy tính & Cơ bản** | Cơ sở ngành | Xanh lơ (`#0891b2`) |
| `basic-algorithms`| **Thuật toán cơ bản** | Cơ sở ngành | Vàng cam (`#ea580c`) |
| `cloud-computing` | **Điện toán đám mây & Tổng quan** | Chuyên ngành CNTT | Xanh bầu trời (`#0284c7`) |

---

## 📌 PHẦN 7: QUY CHUẨN ĐỀ THI & CƠ CHẾ BẢO MẬT 2 TẦNG

### 1. Cơ chế Bảo mật Trắc nghiệm 2 tầng (2-Tier Quiz Security)
* **Tầng 1 - Luyện tập tự do (Practice Mode)**: Dữ liệu nạp ở Client để phản hồi tức thì đúng/sai kèm lời giải chi tiết giúp việc tự học đạt hiệu quả cao nhất.
* **Tầng 2 - Thi xếp hạng trực tuyến (Ranked Exam Mode)**:
  1. **Khóa dữ liệu**: Khi bắt đầu thi, Client tải bộ câu hỏi đã bị **xóa hoàn toàn** trường `answer` và `explanation` thông qua Server Action `getExamQuestions`. Không thể tra đáp án qua Console hay Network Payload.
  2. **Xáo trộn ngẫu nhiên**: Áp dụng thuật toán Fisher-Yates xáo trộn thứ tự câu hỏi và thứ tự 4 đáp án A, B, C, D.
  3. **Chấm điểm Server-side**: Khi nộp bài, Client gửi danh sách lựa chọn lên Server Action `submitExamScore` tại [`app/actions/quiz.js`](file:///d:/TT%20HCM/app/actions/quiz.js). Server so khớp với đáp án gốc trong bộ nhớ, tính điểm và ghi thẳng vào Firestore `rankings` collection trước khi trả kết quả giải thích về cho Client.

### 2. Quy tắc Chống đoán bừa Tuyệt đối (Equal Option Length Balance)
* Trong **cùng một câu hỏi**, độ lệch chiều dài giữa phương án dài nhất và ngắn nhất **bắt buộc** $\le 15$ ký tự:
  $$\Delta L = L_{\max} - L_{\min} \le 15$$
* Các phương án nhiễu được viết công phu, chuẩn ngữ pháp, tương đồng độ dài và văn phong học thuật với đáp án đúng để học viên không thể "đoán mò câu dài nhất".

### 3. Cấu trúc Bộ đề thi Chuẩn hóa
* **Bộ đề Chính thức (Fixed Exam Sets)**: Đúng 40 câu cố định (36 câu Inside chuẩn giáo trình + 4 câu Outside vận dụng thực tiễn). Tỷ lệ độ khó trong 36 câu Inside: 20% Dễ (7 câu), 50% Trung bình (18 câu), 30% Khó (11 câu).
* **Bộ đề Bẫy (Trick Exam Sets)**: Đúng 50 câu bẫy tư duy Vận dụng cao. 100% câu hỏi bẫy bắt buộc chứa thuộc tính `trickDetails` gồm: `whyTrapped` (nguyên nhân hay sai), `trickWord` (từ khóa bẫy), `citation` (trích dẫn giáo trình), `tip` (mẹo nhớ nhanh).
* **Chapter Hero Banner Overview**: Mỗi chương học tại Mục ★ (Section 0) đều có Banner tổng quan hóa toàn bộ kiến thức của cả chương với sơ đồ luồng pipeline và bảng chuyển đổi góc nhìn.

---

## 📌 PHẦN 8: CƠ CHẾ ĐỒ HỌA SVG DRAWING CANVAS

Bảng vẽ ghi chú [`DrawingCanvas.js`](file:///d:/TT%20HCM/components/DrawingCanvas.js) cho phép học viên viết vẽ trực tiếp lên giáo trình với độ nét vector cao:
* **Khắc phục triệt để lem trang**: Mỗi bài học sở hữu một lớp vẽ ghi chép độc lập trong `localStorage` thông qua khóa định danh `drawingKey = ${subjectId}_${activeSubsectionId}`.
* **Thuật toán Co giãn Tọa độ Tương đối (Responsive SVG Mapping)**:
  * Khi vẽ, tọa độ thực $(X_{\text{raw}}, Y_{\text{raw}})$ được chuẩn hóa thành tỷ lệ phần trăm $(X_{\text{rel}}, Y_{\text{rel}}) \in [0.0, 1.0]$:
    $$X_{\text{rel}} = \frac{X_{\text{raw}}}{\text{width}_{\text{canvas}}}, \quad Y_{\text{rel}} = \frac{Y_{\text{raw}}}{\text{height}_{\text{canvas}}}$$
  * Khi hiển thị lại trên các kích thước màn hình khác nhau, tọa độ được nhân ngược lại với kích thước thực tế mới. Kết hợp cùng `ResizeObserver`, các nét vẽ highlight luôn neo chính xác vào từng dòng chữ.

---

## 📌 PHẦN 9: BẢN ĐỒ THƯ MỤC DỰ ÁN

```
TT HCM/
├── admindashboardDoc/               # Bộ tài liệu đặc tả & thiết kế Admin Dashboard (BRD, SRS, QA)
├── app/                             # Next.js App Router & Server Actions
│   ├── actions/                     # Server Actions bảo mật
│   │   └── quiz.js                  # Chấm điểm Server-side & Ghi Firestore
│   ├── globals.css                  # CSS toàn cục, Theme Variables & HSL Engine
│   ├── layout.js                    # Layout HTML bọc toàn trang
│   └── page.js                      # Bộ điều phối trạng thái chính (State Orchestrator)
├── components/                      # Kho linh kiện giao diện React (820+ Visualizers & Components)
│   ├── admin/                       # Phân hệ Quản trị Admin Dashboard (12 components)
│   ├── AlgoSimDashboard.js          # Phòng Lab Thuật toán (Bubble, Selection, Insertion, Merge...)
│   ├── DiagramSimDashboard.js       # Studio Sơ đồ Hệ thống ATM (Lightbox, Zoom, Pan & Drag)
│   ├── DrawingCanvas.js             # Lớp vẽ ghi chú vector SVG tương đối
│   ├── ContentRenderer.js           # Bộ dựng nội dung bài học & Registry Visualizers
│   ├── Quiz.js                      # Component làm bài trắc nghiệm (Luyện tập & Thi)
│   ├── Sidebar.js                   # Thanh điều hướng mục lục cây thư mục môn học
│   └── ...                          # Hơn 820+ Visualizers và Explorers chuyên biệt
├── data/                            # Dữ liệu 10 môn học & Ngân hàng câu hỏi (Structured JS Data)
│   ├── index.js                     # Cổng xuất dữ liệu và metadata danh mục
│   ├── lessons.js                   # Cổng hợp nhất dữ liệu bài giảng của toàn bộ 10 môn học
│   ├── chuong-1.js .. chuong-6.js   # Giáo trình 6 Chương Tư tưởng Hồ Chí Minh
│   ├── lich-su-dang*.js             # Giáo trình Lịch sử Đảng
│   ├── oop.js / dsa.js / database.js# Dữ liệu bài giảng chuyên ngành CNTT
│   └── questions-*.js               # Ngân hàng hàng nghìn câu hỏi trắc nghiệm & đề bẫy
├── lib/                             # Thư viện & Cấu hình dịch vụ
│   └── firebase.js                  # Khởi tạo kết nối Firebase Cloud Firestore
├── public/                          # Tài nguyên tĩnh
│   ├── assets/                      # Linh vật trong suốt (`cancer_mascot_transparent.png`), Logo
│   ├── assets/diagrams/             # Bộ sơ đồ ATM (Use Case, Class, Sequence, Activity PNG)
│   └── images/admin/                # Ảnh bối cảnh Admin Dashboard
├── scripts/                         # Script tiện ích & Sinh metadata
├── AGENTS.md                        # Bộ quy tắc phát triển & Luật kiểm định đề thi cho AI
├── setup.md                         # Hướng dẫn cài đặt & bàn giao môi trường
├── system_architecture.md           # Tài liệu kiến trúc kỹ thuật chi tiết
├── plan.md / bug-report.md / context.md # Các file ghi nhận kế hoạch & ngữ cảnh dùng chung
├── README.md                        # Tài liệu giới thiệu tổng thể hệ thống này
└── package.json                     # Danh mục thư viện phụ thuộc và scripts dự án
```

---

## 📌 PHẦN 10: HƯỚNG DẪN CÀI ĐẶT & VẬN HÀNH

```bash
npm run dev     # Chạy môi trường phát triển (http://localhost:3000)
npm run build   # Kiểm tra đóng gói & biên dịch sản xuất
npm run start   # Khởi chạy production server
```

---

## 🔑 TÀI KHOẢN ĐĂNG NHẬP THỬ NGHIỆM

* **Quản trị viên (Admin Dashboard)**: Tài khoản: `admin` | Mật khẩu: `admin`
* **Học viên mẫu (Student View)**: Tài khoản: `hocsinh1` | Mật khẩu: `Student@123`
