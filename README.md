# HƯỚNG DẪN NHÀ PHÁT TRIỂN & TÀI LIỆU HỆ THỐNG STUDYMASTER ♋

Hệ thống hỗ trợ học tập trực quan và ôn thi trắc nghiệm bảo mật toàn diện cho các môn Đại cương (Tư tưởng Hồ Chí Minh, Lịch sử Đảng Cộng sản Việt Nam) và các môn chuyên ngành Công nghệ thông tin.

---

## 📌 PHẦN 1: TỔNG QUAN DỰ ÁN & TRIẾT LÝ THIẾT KẾ

### 1. Tầm nhìn và Mục tiêu của StudyMaster
*StudyMaster* ra đời với mục tiêu giải quyết "nỗi sợ" học các môn lý luận chính trị và lý thuyết chuyên ngành của sinh viên. Bằng cách kết hợp giữa công nghệ biên dịch bài đọc thời gian thực (**MDX**), hệ thống mô phỏng trực quan tương tác (**Interactive Visualizers**), và công cụ vẽ ghi chú tự do (**Drawing Canvas Overlay**), StudyMaster biến những trang giáo trình tĩnh, khô khan thành một không gian học tập sống động, lôi cuốn và thúc đẩy tư duy chủ động.

Hệ thống được thiết kế hướng tới:
* **Học tập đa giác quan (Multisensory Learning)**: Sinh viên vừa đọc lý thuyết chuẩn, vừa tương tác trực quan với các timeline lịch sử hoặc visualizer thuật toán, đồng thời trực tiếp ghi chép, vẽ sơ đồ tư duy ngay trên màn hình.
* **Đánh giá năng lực thực chất (Secure Assessment)**: Cơ chế trắc nghiệm 2 tầng phân tách rõ ràng giữa việc ôn tập hàng ngày (tự do tra cứu, xem giải thích ngay lập tức) và thi thử xếp hạng (bảo mật tuyệt đối đáp án, chấm điểm phía server).

### 2. Triết lý Thiết kế Trải nghiệm (UX Philosophy)
Hệ thống học tập của StudyMaster tập trung vào ba trụ cột UX cốt lõi:
1. **Giảm thiểu xao nhãng (Cognitive Load Reduction)**: Giao diện học tập được tối ưu hóa như một "Focus Mode". Sidebar có thể ẩn/hiện linh hoạt, thanh công cụ vẽ tay nằm ở góc màn hình tinh gọn, tránh làm phiền mắt người đọc.
2. **Khắc sâu kiến thức (Active Recall & Spaced Repetition)**: Tích hợp trực tiếp các hộp ghi nhớ nhanh và trắc nghiệm khái niệm nhỏ (`ConceptQuiz`) ngay giữa các đoạn văn để người học lập tức kiểm tra mức độ tiếp thu thông tin.
3. **Cảm giác tiến bộ liên tục (Gamification & Feedback Loop)**: Bảng xếp hạng online (`Leaderboard`) cập nhật điểm số theo thời gian thực tạo động lực thi đua học tập giữa các học viên.

---

## 📌 PHẦN 2: KIẾN TRÚC HỆ THỐNG & STACK CÔNG NGHỆ

Hệ thống được xây dựng trên một nền tảng công nghệ hiện đại, đảm bảo hiệu năng tải trang nhanh, render mượt mà các hiệu ứng phức tạp và bảo mật dữ liệu ở mức cao.

```
┌────────────────────────────────────────────────────────┐
│                      STUDYMASTER                       │
│                     (Client Side)                      │
│                                                        │
│  ┌─────────────────┐ ┌─────────────────┐ ┌──────────┐  │
│  │   UI Components │ │ Drawing Canvas  │ │ MDX View │  │
│  └────────┬────────┘ └────────┬────────┘ └────┬─────┘  │
└───────────┼───────────────────┼───────────────┼────────┘
            │                   │               │
            │ (Server Actions)  │               │
┌───────────▼───────────────────▼───────────────▼────────┐
│                   NEXT.JS 16 SERVER                    │
│                                                        │
│  ┌─────────────────────────┐ ┌──────────────────────┐  │
│  │      MDX Compiler       │ │ Secure Grade Action  │  │
│  │ (gray-matter & remote)  │ │ (Grading Logic)      │  │
│  └────────────┬────────────┘ └──────────┬───────────┘  │
└───────────────┼─────────────────────────┼──────────────┘
                │                         │ (SDK)
                │ (File Reads)            ▼
        ┌───────▼───────┐         ┌───────────────┐
        │ MDX Curriculum│         │ Firebase Cloud│
        │    Files      │         │   Firestore   │
        └───────────────┘         └───────────────┘
```

### 1. Stack Công nghệ chi tiết
* **Framework**: **Next.js 16.2.9 (App Router)**.
  * Tận dụng tối đa Server Components để giảm kích thước mã nguồn JavaScript gửi tới Client.
  * Sử dụng **Server Actions** làm cầu nối giao tiếp bảo mật giữa Client và Server mà không cần xây dựng API Route REST truyền thống.
* **Thư viện Giao diện**: **React 19.2.4**.
  * Quản lý trạng thái bằng React Hooks (`useState`, `useEffect`, `useRef`, `useTransition`).
* **Styling**: **TailwindCSS v4.0.0** kết hợp **PostCSS**.
  * Xây dựng layout Responsive toàn diện (Mobile, Tablet, Desktop).
  * Tận dụng các biến CSS động để điều phối hệ màu HSL linh hoạt.
* **Hiệu ứng & Hoạt họa (Animations)**: **GSAP v3.15.0 (GreenSock Animation Platform)** cùng `@gsap/react`.
  * Thực hiện các hiệu ứng Cinematic Scroll và tương tác hover Spotlight 3D cao cấp.
* **Cơ sở dữ liệu & Đám mây**: **Google Firebase SDK v12.14.0**.
  * Sử dụng Firestore để quản lý và lưu trữ bảng xếp hạng kết quả thi trắc nghiệm.
* **Biên dịch & Parser MDX**: `next-mdx-remote` và `gray-matter`.
  * Hỗ trợ lưu trữ tài liệu dưới dạng Markdown mở rộng và biên dịch sang React component một cách an toàn ở runtime.

---

## 📌 PHẦN 3: DANH MỤC COMPONENT TƯƠNG TÁC (Visualizers & Explorers)

Để hiện thực hóa triết lý "Học tập tương tác", StudyMaster tích hợp một hệ thống đa dạng các Component tùy biến hoạt động ngay trong bài đọc MDX. Các component này được chia thành 3 nhóm lớn:

### 1. Nhóm Khoa học Máy tính & Giải thuật (IT/CS Visualizers)
Nhóm component này giúp lập trình trực quan hóa các khái niệm trừu tượng trong lập trình và cấu trúc dữ liệu:
* **`BubbleSortVisualizer` (Mô phỏng Sắp xếp Nổi bọt)**: 
  * *Chức năng*: Minh họa từng bước so sánh và hoán vị (Swap) hai phần tử cạnh nhau.
  * *UX tương tác*: Các thanh giá trị đổi màu động (vàng khi so sánh, xanh lá khi đã ở vị trí đúng, đỏ khi hoán vị). Hỗ trợ nút điều khiển Play/Pause/Step-by-step và thanh trượt chỉnh tốc độ mô phỏng từ 100ms đến 2000ms.
* **`QuickSortVisualizer` (Mô phỏng Sắp xếp Nhanh)**:
  * *Chức năng*: Biểu diễn trực quan giải thuật phân hoạch (Partitioning) sử dụng phần tử chốt (Pivot).
  * *UX tương tác*: Cho phép chọn các chế độ chọn Pivot khác nhau (Pivot đầu, Pivot cuối, Pivot giữa). Trực quan hóa quá trình đệ quy chia đôi mảng bằng các phân vùng màu sắc riêng biệt.
* **`MemoryVisualizer` (Mô phỏng Bộ nhớ RAM)**:
  * *Chức năng*: Giải thích khái niệm cực kỳ hóc búa về truyền tham trị (Pass by Value) và truyền tham chiếu (Pass by Reference).
  * *Cơ chế hoạt động*: Chia đôi màn hình thành hai vùng nhớ **Stack** (chứa các biến cục bộ, địa chỉ con trỏ) và **Heap** (chứa dữ liệu đối tượng thực tế). Khi người dùng nhấn nút chạy mã giả, các ô nhớ sẽ tự động được cấp phát, trỏ mũi tên liên kết động từ Stack sang Heap, và giải phóng khi ra khỏi phạm vi khối lệnh.
* **`CastingPlayground` (Sân chơi Ép kiểu)**:
  * *Chức năng*: Mô phỏng cơ chế ép kiểu ngầm định (Implicit) và tường minh (Explicit) trong Java.
  * *UX tương tác*: Học sinh kéo các thanh trượt thay đổi giá trị của biến số lớn (như `double`, `float`) rồi ép kiểu sang biến số nhỏ hơn (như `int`, `byte`) để trực tiếp quan sát hiện tượng mất mát phần thập phân hoặc tràn số (Overflow) về dạng bit nhị phân.
* **`BigOCurveChart` & `BigOSimulator` (Biểu đồ & Bộ giả lập Big O)**:
  * *Chức năng*: So sánh tốc độ tăng trưởng của các hàm độ phức tạp thời gian.
  * *UX tương tác*: Đồ thị tương tác vẽ các đường $O(1)$, $O(\log n)$, $O(n)$, $O(n \log n)$, $O(n^2)$. Học sinh có thể tăng giá trị đầu vào $N$ lên hàng triệu để bộ giả lập tính toán thời gian chạy giả định trên siêu máy tính và máy tính cá nhân, giúp hiểu rõ tại sao thuật toán tối ưu lại quan trọng.
* **`PrintfFormatter` (Định dạng Xuất Printf)**:
  * *Chức năng*: Hướng dẫn chi tiết cách sử dụng đặc tả định dạng xuất (như `%d`, `%5d`, `%.2f`, `%-10s`).
  * *UX tương tác*: Học sinh nhập chuỗi định dạng và giá trị đầu vào, hệ thống sẽ vẽ ra từng ô ký tự đầu ra trên màn hình để minh họa khoảng trống đệm (Padding) và căn lề (Alignment).

### 2. Nhóm Lịch sử & Lý luận Chính trị (History & Political Explorers)
Các component này được thiết kế để trực quan hóa lịch sử biên niên và các học thuyết phức tạp:
* **`HcmTimeline1945to1969` (Trục thời gian Hồ Chí Minh)**:
  * *Chức năng*: Trình bày biên niên sử các hoạt động cách mạng của Bác từ năm 1945 đến năm 1969.
  * *UX tương tác*: Trục thời gian dạng đứng (Vertical Timeline) tích hợp hiệu ứng cuộn Spotlight. Khi cuộn tới năm nào, sự kiện lịch sử của năm đó sẽ sáng lên, hiển thị hình ảnh tư liệu, trích dẫn lời nói nổi tiếng và các tài liệu tham khảo liên quan.
* **`LsdHistoryTimeline` (Trục thời gian Lịch sử Đảng)**:
  * *Chức năng*: Biên niên sử các cột mốc thành lập Đảng, các kỳ Đại hội và các phong trào cách mạng (1930-1945, 1945-1954, v.v.).
  * *UX tương tác*: Phân chia các thời kỳ lịch sử bằng các tab màu sắc đặc trưng của Đảng (đỏ sẫm và vàng gold), hỗ trợ lọc sự kiện theo danh mục (Quân sự, Chính trị, Ngoại giao).
* **`LsdObjectExplorer` & `LsdMethodologyExplorer` (Bảng khám phá Đối tượng & Phương pháp)**:
  * *Chức năng*: Trực quan hóa các khái niệm trừu tượng về đối tượng nghiên cứu và phương pháp luận của môn Lịch sử Đảng.
  * *UX tương tác*: Thiết kế dạng các thẻ bài lật (Flip Cards) 3D hoặc sơ đồ tư duy tương tác (Interactive Mindmap). Người học nhấp vào từng nút để mở rộng các nhánh phương pháp nghiên cứu cụ thể (như phương pháp lịch sử, phương pháp logic, phương pháp liên ngành) kèm ví dụ thực tiễn.

### 3. Nhóm Bổ trợ Giao diện (UI Auxiliary Components)
* **`DrawingCanvas` (Lớp vẽ ghi chú tự do)**:
  * *Chức năng*: Cho phép viết vẽ tự do đè lên bài học.
  * *UX tương tác*: Cung cấp thanh công cụ nổi (Floating Toolbar) chứa bút vẽ nét mịn, tô sáng (Highlight) bán trong suốt, tẩy xóa và bảng chọn màu sắc.
* **`CinematicScrollWrapper`**: Sử dụng GSAP ScrollTrigger để tạo hiệu ứng cuộn trang điện ảnh (fade-in, slide-up mượt mà khi phần tử lọt vào khung nhìn).
* **`SpotlightCardWrapper`**: Áp dụng hiệu ứng quét ánh sáng 3D theo con trỏ chuột trên các thẻ bài học.

---

## 📌 PHẦN 4: HỆ THỐNG THIẾT KẾ UI/UX (Design System)

### 1. Triết lý Thiết kế Giao diện (Visual Aesthetics)
StudyMaster mang ngôn ngữ thiết kế **Premium Dark Mode & Glassmorphism**. Giao diện sử dụng các đường viền sắc nét, độ phản chiếu nhẹ, các thẻ bài học có hiệu ứng đổ bóng mờ ảo mang lại cảm giác chiều sâu 3D trên không gian phẳng.

* **Hiệu ứng Kính mờ (Glassmorphism)**: Các bảng điều khiển, Sidebar, và hộp thoại sử dụng background dạng bán trong suốt `bg-white/60` hoặc `bg-stone-900/80` kết hợp bộ lọc làm nhòe nền `backdrop-blur-md` mang lại cảm giác tinh tế và hiện đại.
* **Hiệu ứng Phát sáng (Neon Glow)**: Sử dụng các giải màu gradient phát sáng tinh tế (`border-accent/30`, `shadow-[0_0_20px_rgba(var(--accent-rgb),0.15)]`) để làm nổi bật các cấu phần quan trọng mà không gây lòe loẹt.

### 2. Cơ chế Hệ màu HSL Động (Dynamic Theme Engine)
Một trong những điểm độc đáo nhất của StudyMaster là khả năng thay đổi màu sắc chủ đạo (Accent Color) dựa trên môn học được chọn. Việc này giúp kích thích thị giác và phân loại không gian tâm lý học tập cho từng bộ môn khác nhau.

* **Cơ chế triển khai**:
  Trong `data/index.js`, mỗi môn học được định nghĩa kèm theo bộ mã màu HSL dưới dạng các giá trị Hex và RGB. Ví dụ:
  ```javascript
  "tu-tuong-hcm": {
    themeColors: {
      accent: "#d97706",      // Hổ phách/Vàng cam (Truyền thống chính trị)
      secondary: "#c2410c",
      accentRgb: "217, 119, 6"
    }
  },
  "oop": {
    themeColors: {
      accent: "#2563eb",      // Xanh dương công nghệ (IT/Chuyên ngành)
      secondary: "#1d4ed8",
      accentRgb: "37, 99, 235"
    }
  }
  ```
  Khi người dùng chuyển đổi môn học, một React `useEffect` trong `app/page.js` sẽ bắt sự kiện và ghi đè trực tiếp các biến CSS này vào root của tài liệu:
  ```javascript
  document.documentElement.style.setProperty("--accent", colors.accent);
  document.documentElement.style.setProperty("--accent-rgb", colors.accentRgb);
  ```
  Nhờ đó, toàn bộ các thành phần giao diện (đường viền, chữ, nút bấm, canvas vẽ ghi chú) sẽ đồng loạt đổi màu đồng bộ chỉ trong tích tắc.

### 3. Hiệu ứng Hoạt họa Cao cấp
* **Cinematic Scroll (GSAP)**:
  Khi sinh viên cuộn bài đọc, component `<CinematicScrollWrapper>` sử dụng ScrollTrigger để tính toán vị trí cuộn. Các phần của bài đọc sẽ trượt nhẹ từ dưới lên và tăng dần độ hiển thị (Opacity: 0 ➔ 1, Y-Offset: 40px ➔ 0px) tạo hiệu ứng lật trang điện ảnh mượt mà.
* **Spotlight Card (3D Mouse Tracking)**:
  Các thẻ bài đọc có hiệu ứng theo dõi chuột. Khi người dùng rê chuột lên thẻ, một vùng sáng tròn (Spotlight) phát ra từ tâm trỏ chuột sẽ quét qua bề mặt thẻ, làm lộ ra các đường viền phát sáng ẩn dưới lớp kính mờ.

---

## 📌 PHẦN 5: ĐI SÂU CƠ CHẾ KỸ THUẬT (Deep Dive)

Phần này đi sâu vào 4 giải pháp công nghệ cốt lõi giúp StudyMaster tối ưu hóa hiệu năng, bảo mật và khả năng tương tác.

### 1. Cơ chế Biên dịch & Render MDX Động (Dynamic MDX Serialization)
Để thay thế việc import cứng toàn bộ dữ liệu văn bản bài đọc vào Client (làm phình to bundle size ban đầu), StudyMaster sử dụng kiến trúc biên dịch động qua Server Actions:

* **Đọc tệp tin**: Khi người dùng chọn một mục bài học, Client kích hoạt Server Action `getSubsectionMdx`. Action này dùng Node `fs` để đọc tệp `.mdx` tương ứng từ đĩa cứng theo đường dẫn tương đối.
* **Tiền xử lý Directives (Pre-processing)**: Nhằm hỗ trợ định dạng hộp ghi nhớ màu sắc chuẩn Tailwind mà không cần cài đặt các plugin Remark nặng nề, Server Action chạy các biểu thức chính quy (Regex) để chuyển đổi cú pháp directive của Markdown thành các thẻ JSX hợp lệ trước khi gửi vào bộ biên dịch:
  ```javascript
  processedContent = processedContent.replace(/:::summary\s*\n([\s\S]*?)\n\s*:::/g, '<SummaryBox>\n$1\n</SummaryBox>');
  ```
* **Biên dịch ở Server-Side**: Sử dụng `next-mdx-remote/serialize` để phân tích Frontmatter (chứa metadata chương, phần) và compile nội dung Markdown/JSX thành một chuỗi JS đã được mã hóa (`mdxSource`).
* **Hydration ở Client-Side**: Client nhận `mdxSource` và chuyển trực tiếp vào component `<MDXRemote>` trong [components/ContentRenderer.js](file:///d:/TT%20HCM/components/ContentRenderer.js). Tại đây, ta khai báo một `components` registry để ánh xạ các thẻ JSX động (như `<MnemonicBox />`, `<BubbleSortVisualizer />`) thành các React Component thực tế.

### 2. Luồng Bảo mật Trắc nghiệm 2 tầng (2-Tier Quiz Security)
Hệ thống phân tách luồng nghiệp vụ của hai chế độ: **Luyện tập tự do (Immediate Mode)** và **Thi xếp hạng trực tuyến (Exam Mode)**:

* **Tầng 1 - Luyện tập**: Sử dụng trực tiếp dữ liệu tĩnh được nạp dưới Client. Khi người dùng click chọn phương án, component lập tức đối chiếu với `questions[idx].answer` và hiển thị giải thích đáp án ngay lập tức.
* **Tầng 2 - Thi xếp hạng**:
  1. **Khóa dữ liệu**: Khi bắt đầu bài thi, hàm `startNewQuiz` sẽ sao chép bộ câu hỏi và **xóa hoàn toàn** hai thuộc tính `answer` và `explanation` ra khỏi state của React:
     ```javascript
     const secureQuestions = sampled.map(q => {
       const qCopy = { ...q };
       delete qCopy.answer;
       delete qCopy.explanation;
       return qCopy;
     });
     ```
     Điều này chặn đứng việc học sinh xem đáp án thông qua Console biến React hoặc DevTools Network Tab.
  2. **Xáo trộn ngẫu nhiên**: Client xáo trộn thứ tự câu hỏi và thứ tự các phương án lựa chọn.
  3. **Chấm điểm Server-side**: Khi nhấn nộp bài, Client gửi mảng đáp án đã chọn cùng danh sách câu hỏi đã xáo trộn lên Server Action `submitExamScore` ở [app/actions/quiz.js](file:///d:/TT%20HCM/app/actions/quiz.js).
  4. **Tính điểm & Ghi nhận**: Server Action tải dữ liệu gốc từ bộ nhớ Server (nơi chứa đáp án đúng chưa bị xóa), so khớp giá trị chuỗi văn bản của phương án đã chọn để chấm điểm. Sau đó, Server dùng SDK quản trị để ghi thẳng điểm số vào Firestore `rankings` collection, rồi mới trả về danh sách giải thích chi tiết cho Client hiển thị.

### 3. Thuật toán Co giãn Nét vẽ SVG trong DrawingCanvas (SVG Responsive Coordinate Mapping)
Lớp Canvas vẽ ghi chép sử dụng SVG thay vì HTML5 Canvas truyền thống để nét vẽ có độ sắc nét vector cao. Tuy nhiên, việc vẽ trên màn hình có kích thước thay đổi (Responsive) sẽ làm lệch vị trí nét vẽ so với dòng chữ bên dưới. StudyMaster giải quyết việc này bằng thuật toán ánh xạ tọa độ tỉ lệ:

* **Tọa độ tương đối khi vẽ (Relative Mapping)**:
  Khi người dùng click chuột và di chuyển để vẽ, tọa độ tuyệt đối $(X_{\text{raw}}, Y_{\text{raw}})$ của chuột so với thẻ Container được chuyển đổi thành tọa độ tỉ lệ phần trăm $(X_{\text{rel}}, Y_{\text{rel}})$ dựa trên kích thước hiện tại $(\text{width}_{\text{current}}, \text{height}_{\text{current}})$ của khung chứa:
  $$X_{\text{rel}} = \frac{X_{\text{raw}}}{\text{width}_{\text{current}}}, \quad Y_{\text{rel}} = \frac{Y_{\text{raw}}}{\text{height}_{\text{current}}}$$
* **Tọa độ tuyệt đối khi hiển thị (Absolute Scaling)**:
  Khi render nét vẽ ra SVG, tọa độ tỉ lệ phần trăm được nhân ngược lại với kích thước thực tế của màn hình tại thời điểm hiển thị:
  $$X_{\text{render}} = X_{\text{rel}} \times \text{width}_{\text{current}}, \quad Y_{\text{render}} = Y_{\text{rel}} \times \text{height}_{\text{current}}$$
* **Theo dõi thay đổi**: Component sử dụng `ResizeObserver` để liên tục cập nhật kích thước Container và kích hoạt re-render lại SVG nét vẽ. Nhờ đó, dù học sinh xoay màn hình điện thoại hay thay đổi kích thước trình duyệt, các nét vẽ highlight vẫn neo chính xác vào từng dòng chữ bài đọc.

### 4. Thuật toán Xáo trộn ngẫu nhiên Fisher-Yates (Fisher-Yates Shuffle)
Để đảm bảo đề thi xếp hạng của mỗi học sinh là ngẫu nhiên và không thiên vị (unbiased), hệ thống áp dụng thuật toán Fisher-Yates để trộn câu hỏi và các phương án trả lời:

* **Giải thuật**: Duyệt mảng từ cuối lên đầu (từ chỉ số $i = n-1$ xuống $1$). Tại mỗi bước, chọn ngẫu nhiên một chỉ số $j$ trong khoảng từ $0$ đến $i$, hoán vị phần tử tại vị trí $i$ và $j$.
* **Độ phức tạp**: Thời gian chạy đạt tuyến tính $O(n)$ và độ phức tạp không gian là $O(1)$ (hoán vị tại chỗ), đảm bảo phân phối xác suất đồng đều cho tất cả các hoán vị có thể có của đề thi.

---

## 📌 PHẦN 6: BẢN ĐỒ THƯ MỤC DỰ ÁN

Dưới đây là sơ đồ tổ chức mã nguồn của hệ thống StudyMaster để lập trình viên mới dễ dàng tiếp cận:

```
studymaster-next/
├── app/                        # Thư mục ứng dụng chính (Next.js App Router)
│   ├── actions/                # Các Server Actions giao tiếp và xử lý dữ liệu
│   │   ├── content.js          # Server Action nạp & biên dịch bài đọc MDX
│   │   └── quiz.js             # Server Action chấm điểm thi & ghi Firestore
│   ├── globals.css             # Định nghĩa CSS toàn cục (biến màu sắc, fonts)
│   ├── layout.js               # Bọc bố cục HTML toàn trang
│   └── page.js                 # File điều phối trạng thái chính (Main State Dashboard)
├── components/                 # Các component UI tái sử dụng ở Client
│   ├── ContentRenderer.js      # Bộ render MDX và registry các visualizer tương tác
│   ├── DrawingCanvas.js        # Lớp vẽ ghi chú tự do vector SVG tương đối
│   ├── Quiz.js                 # Component thi trắc nghiệm (Ôn tập & Thi xếp hạng)
│   ├── Sidebar.js              # Thanh điều hướng cây mục lục môn học bên trái
│   └── ...                     # Các visualizer, timeline, explorer chuyên ngành
├── content/                    # Kho dữ liệu bài đọc dạng tệp MDX (.mdx)
│   ├── tu-tuong-hcm/           # Bài đọc môn Tư tưởng Hồ Chí Minh
│   ├── lich-su-dang/           # Bài đọc môn Lịch sử Đảng Cộng sản Việt Nam
│   └── ...                     # Các môn học khác
├── data/                       # Cấu trúc môn học (Metadata) & Ngân hàng câu hỏi
│   ├── index.js                # Tinh gọn: chứa metadata danh mục và bản đồ quiz
│   ├── questions-chuong-1.js   # Ngân hàng trắc nghiệm Tư tưởng Hồ Chí Minh ch.1
│   └── ...                     # Các tệp câu hỏi trắc nghiệm của các chương khác
├── legacy_data/                # Thư mục lưu trữ dự phòng (Backup) dữ liệu JS cũ
├── lib/                        # Khởi tạo kết nối dịch vụ
│   └── firebase.js             # Cấu hình Firebase Cloud Firestore
├── scripts/                    # Scripts tự động hóa phục vụ phát triển
│   ├── convert-to-mdx.mjs      # Script chuyển đổi dữ liệu JS sang MDX
│   └── generate-metadata.mjs   # Script tạo tệp index.js tinh gọn tự động
└── package.json                # Khai báo thư viện phụ thuộc và scripts chạy dự án
```

---

## 📌 PHẦN 7: HƯỚNG DẪN PHÁT TRIỂN & MỞ RỘNG

### 1. Hướng dẫn tích hợp môn học mới vào hệ thống
Để tích hợp thêm một môn học mới (ví dụ: `triet-hoc`), thực hiện theo 3 bước sau:

1. **Khai báo Metadata Môn học**:
   Mở tệp [data/index.js](file:///d:/TT%20HCM/data/index.js), thêm một entry mới vào đối tượng `subjects` với cấu trúc cây thư mục (Chapters ➔ Sections ➔ Subsections):
   ```javascript
   "triet-hoc": {
     id: "triet-hoc",
     title: "Triết học Mác - Lênin",
     description: "Mô tả môn học...",
     category: "Môn đại cương",
     quote: "“Triết học không chỉ giải thích thế giới, vấn đề là cải tạo thế giới.”",
     themeColors: {
       accent: "#047857",     // Mã màu CSS riêng cho môn học
       secondary: "#065f46",
       accentRgb: "4, 120, 87"
     },
     icon: "⚖️",
     chapters: [
       {
         id: "triet-chuong-1",
         title: "Chương I",
         subtitle: "Khái luận về triết học...",
         sections: [
           {
             id: "khai-niem-triet",
             roman: "I",
             title: "Triết học và vấn đề cơ bản của triết học",
             subsections: [
               { id: "triet-hoc-la-gi", number: "1", title: "Khái niệm triết học" }
             ]
           }
         ]
       }
     ],
     questionsMap: {}
   }
   ```
2. **Soạn thảo Bài đọc MDX**:
   Tạo thư mục khớp với cấu trúc id đã khai báo: `content/triet-hoc/triet-chuong-1/khai-niem-triet/`. Sau đó tạo tệp [triet-hoc-la-gi.mdx](file:///d:/TT%20HCM/content/triet-hoc/triet-chuong-1/khai-niem-triet/triet-hoc-la-gi.mdx) với frontmatter:
   ```markdown
   ---
   id: "triet-hoc-la-gi"
   number: "1"
   title: "Khái niệm triết học"
   parts:
     - id: "dinh-nghia"
       label: "a"
       title: "Định nghĩa triết học"
   ---
   <Part id="dinh-nghia">
   Nội dung bài học Triết học viết bằng Markdown...
   </Part>
   ```
3. **Cấu hình Trắc nghiệm (tùy chọn)**:
   Tạo tệp câu hỏi `data/questions-triet-hoc.js`, import và map vào `questionsMap` trong `data/index.js`.

### 2. Hướng dẫn viết một Component tương tác mới
Nếu muốn chèn một Component tương tác tùy biến mới (ví dụ: `<TreeVisualizer />`) vào bài học MDX:

1. **Viết Component**: Tạo tệp `components/TreeVisualizer.js` bằng React và Tailwind CSS.
2. **Đăng ký Component Registry**: 
   Mở tệp [components/ContentRenderer.js](file:///d:/TT%20HCM/components/ContentRenderer.js):
   * Import component mới ở đầu tệp:
     ```javascript
     import TreeVisualizer from "./TreeVisualizer";
     ```
   * Thêm component vào đối tượng `mdxComponents` inside hàm `ContentRenderer`:
     ```javascript
     const mdxComponents = {
       // ... components hiện có
       TreeVisualizer,
     };
     ```
3. **Chèn vào MDX**: Giờ đây, bạn có thể gọi trực tiếp `<TreeVisualizer />` ở bất kỳ đâu trong các tệp `.mdx` của mình.

### 3. Các lệnh điều khiển phát triển
* Chạy dự án ở local (Môi trường Phát triển):
  ```bash
  npm run dev
  ```
* Kiểm tra biên dịch và tối ưu hóa đóng gói (Môi trường Sản xuất):
  ```bash
  npm run build
  ```
* Khởi chạy Production Server sau khi build thành công:
  ```bash
  npm run start
  ```

---

## 🔑 ĐĂNG NHẬP NHANH (Hệ thống Thử nghiệm)
Hệ thống tích hợp tài khoản Admin cài sẵn phục vụ kiểm nghiệm nhanh:
* **Tài khoản**: `admin`
* **Mật khẩu**: `admin`
*(Người dùng cũng có thể tự tạo tài khoản mới ngay tại trang đăng nhập).*
