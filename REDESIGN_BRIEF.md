# 🎨 TÀI LIỆU BÀN GIAO & BẢN THIẾT KẾ REDESIGN UI/UX DỰ ÁN STUDYMASTER NEXT

> **Gửi bạn/designer**: Đây là tài liệu tổng quan toàn bộ hệ thống ứng dụng học tập & mô phỏng tương tác **StudyMaster Next**. Bạn có trọn vẹn sự tự do sáng tạo để tái thiết kế (redesign) lại toàn bộ giao diện người dùng (UI) và trải nghiệm (UX) theo phong cách cá nhân của bạn, đặc biệt là **Phân hệ Bộ mô phỏng (Visualizers & Algorithm Labs)**. 

---

## 📌 1. TỔNG QUAN VỀ DỰ ÁN & MỤC TIÊU REDESIGN

### 1.1 Dự án là gì?
**StudyMaster Next** là một ứng dụng web học tập thế hệ mới (SPA - Single Page App) tích hợp:
1. **Bài đọc học thuật chuẩn chỉnh**: Tư tưởng Hồ Chí Minh, Lịch sử Đảng, Lập trình hướng đối tượng (OOP), Cấu trúc dữ liệu & Giải thuật (DSA),...
2. **Công cụ Ghi chú Đồ họa (Drawing Canvas)**: Cho phép học viên vẽ tay, highlight, ghi chú trực tiếp đè lên tài liệu học tập.
3. **Mô-đun Thi Trắc nghiệm**: Ngân hàng đề thi chuẩn 40 câu, bộ đề bẫy tư duy 50 câu, hiển thị code Java style VS Code Dark+, bảng xếp hạng trực tuyến.
4. **Bộ Mô phỏng & Lab Tương tác (Visualizer Suite)**: Trực quan hóa các khái niệm lý thuyết trừu tượng (bộ nhớ RAM, luồng giải thuật sắp xếp, cây nhị phân, đồ thị BFS, timeline lịch sử, các mô hình OOP,...).

### 1.2 Mục tiêu Redesign
- **Làm mới hoàn toàn ngôn ngữ thiết kế (Design System)**: Từ màu sắc, typography, icon, card, layout đến các hiệu ứng chuyển cảnh (transitions/animations).
- **Nâng tầm trải nghiệm Bộ Mô phỏng (Simulators/Labs)**: Giúp các bộ mô phỏng trực quan hơn, dễ thao tác điều khiển, giàu tính tương tác và mang lại cảm giác hiện đại, cuốn hút (WOW factor).
- **Tự do Sáng tạo**: Bạn không bị ràng buộc bởi giao diện cũ. Bạn có thể chọn bất kỳ phong cách nào bạn thích (ví dụ: *Glassmorphic, Dark Neon Cyberpunk, Clean Modern Minimalist, IDE Studio Dark, Academic Dashboard, v.v.*).

---

## 🗺️ 2. CẤU TRÚC LUỒNG MÀN HÌNH (USER FLOW)

Ứng dụng hiện tại gồm các màn hình chính sau:
1. **Màn hình Đăng nhập / Đăng ký (Auth Page)**:
   - Đăng nhập bằng tài khoản hoặc Google Auth.
   - Banner linh vật / hình ảnh thương hiệu và form nhập liệu.
2. **Màn hình Chọn Môn học (Subject Selection)**:
   - Danh sách các thẻ môn học (Tư tưởng HCM, Lịch sử Đảng, OOP, DSA, Cơ sở dữ liệu,...).
   - Thẻ hiển thị icon, mô tả, câu trích dẫn (quote) và chủ đề màu sắc riêng của môn.
3. **Màn hình Học tập Chính (Study Workplace)**:
   - **Sidebar (Trái)**: Sơ đồ cây mục lục bài học (Accordion: Chương ➔ Phần ➔ Tiểu mục), bộ chuyển đổi chủ đề Light/Dark, nút chuyển mode Đọc bài ↔ Làm Quiz ↔ Bộ Mô Phỏng.
   - **Main Content (Giữa)**: Hiển thị văn bản bài đọc, các khối Mnemonic (Mẹo nhớ), Summary (Tóm tắt), Reference (Trích dẫn).
   - **Floating NoteToolbar & Canvas**: Thanh công cụ vẽ bút, tẩy, highlight nằm lơ lửng trên nội dung.
4. **Màn hình Thi Trắc nghiệm (Quiz Workspace)**:
   - Chọn bộ đề, chế độ làm bài (Luyện tập / Thi thật).
   - Giao diện câu hỏi, đồng hồ đếm ngược, trình diễn code snippet Java, giải thích chi tiết, bảng tổng sắp và Bảng xếp hạng Leaderboard.
5. **Màn hình Bộ Mô phỏng & Lab Tương tác (Visualizers & Labs)** - *TRỌNG TÂM REDESIGN*.

---

## ⚡ 3. TRỌNG TÂM REDESIGN: BỘ MÔ PHỎNG & LAB TƯƠNG TÁC (SIMULATORS & VISUALIZERS)

Bộ mô phỏng hiện tại được chia thành 3 nhóm lớn:

### 3.1 Nhóm Mô phỏng Thuật toán & Cấu trúc Dữ liệu (DSA Labs)
*Bao gồm các màn hình:*
- **AlgoSimDashboard**: Trang tổng quan các bài Lab giải thuật.
- **BubbleSortLab & SelectionSortLab & MergeSortLab**: Mô phỏng các thuật toán sắp xếp (Mảng số, thanh cột độ cao, các bước hoán đổi `swap`, con trỏ so sánh `i`, `j`, vùng đã sắp xếp).
- **BinarySearchLab**: Mô phỏng tìm kiếm nhị phân (Con trỏ `Left`, `Right`, `Mid`, vùng tìm kiếm bị thu hẹp dần).
- **BfsLab**: Mô phỏng duyệt đồ thị theo chiều rộng BFS (Đồ thị các đỉnh node, hàng đợi Queue, các node đã ghé thăm `visited`).
- **BstLab**: Mô phỏng Cây tìm kiếm nhị phân (Binary Search Tree - Chèn node, xóa node, tìm kiếm node, duyệt In-order/Pre-order/Post-order).
- **RecursionLab**: Mô phỏng Đệ quy (Cây gọi đệ quy - Call Stack frame, điều kiện dừng Base case, giá trị trả về Return value).

### 3.2 Nhóm Mô phỏng Lập trình Hướng đối tượng (OOP & Java Labs)
*Bao gồm các màn hình:*
- **MemoryVisualizer & StaticMemoryVisualizer**: Trực quan hóa bộ nhớ máy tính khi chạy code Java (Vùng nhớ Stack, Heap, Static Pool, String Constant Pool).
- **PassByValueVisualizer & ConstructorMemoryVisualizer**: Mô phỏng truyền tham trị vs tham chiếu, quá trình khởi tạo đối tượng qua `new`.
- **BankAccountExploitSimulator & InterfaceFractionSandbox**: Lab thực hành phát hiện lỗ hổng đóng gói (Encapsulation) và tương tác với Abstract Data Type (ADT).
- **UmlInteractiveDiagram & UmlToCodeSandbox**: Sơ đồ lớp UML tương tác và biên dịch sang code Java tương ứng.

### 3.3 Nhóm Mô phỏng Lý thuyết & Lịch sử (HCM Thought & CPV History)
*Bao gồm các màn hình:*
- **Timeline Lịch sử Tương tác** (`HcmTimeline1945to1969`, `LsdVerticalTimeline1945To1946`): Trục thời gian diễn biến sự kiện lịch sử qua từng năm.
- **Sơ đồ Trận đánh & Chiến dịch** (`LsdDienBienPhu56DaysVisualizer`, `LsdAugustRevolution`): Sơ đồ các giai đoạn chiến dịch.
- **Ma trận & Thống kê** (`LsdUSStrategiesMatrix`, `LsdCongress10FullContent`): So sánh các chiến lược ngoại giao, kinh tế, các mốc Đại hội Đảng.

---

## 🎨 4. GỢI Ý ĐỊNH HƯỚNG & YÊU CẦU NÂNG CẤP UX/UI CHO BỘ MÔ PHỎNG

Khi redesign lại **Bộ Mô phỏng**, bạn nên chú trọng các yếu tố sau:

### 🧩 A. Bố cục Không gian (Visual Workspace Layout)
1. **Control Panel (Bảng điều khiển)**:
   - Các nút thao tác chuẩn: `Play` (Chạy tự động), `Pause` (Tạm dừng), `Step Forward` (Tiến 1 bước), `Step Backward` (Lùi 1 bước), `Reset` (Làm lại).
   - Thanh trượt tốc độ mô phỏng (`Speed Slider`: 0.5x, 1x, 2x, 5x).
   - Ô nhập dữ liệu tùy chỉnh (nhập mảng số mới, nhập giá trị tìm kiếm, chèn node vào cây,...).
2. **Main Canvas / Stage (Khung chiếu mô phỏng)**:
   - Nơi hiển thị trực quan các phần tử (Node đồ thị, Thanh cột mảng, Khung Stack/Heap, Trục thời gian timeline).
   - Cần không gian rộng rãi, thoáng đãng, phân biệt rõ ràng màu sắc trạng thái:
     - *Đang so sánh / Đang duyệt*: Màu Vàng / Cam.
     - *Hoán đổi / Đúng vị trí*: Màu Xanh lá.
     - *Bị loại trừ / Đã xử lý*: Màu Xám / Tím.
3. **Execution Trace Log & Code Panel (Khung quan sát dòng lệnh & nhật ký)**:
   - Hiển thị đoạn mã giả (Pseudocode) hoặc code Java/C++ tương ứng.
   - Đèn sáng highlight dòng code đang được thực thi ở bước hiện tại.
   - Bảng nhật ký biến (Variables State Inspector): Hiển thị giá trị các biến `i`, `j`, `temp`, `mid`, `stack.size()` thay đổi qua từng bước.

### 🚀 B. Hiệu ứng Tương tác & Visual Aesthetics (WOW Factor)
- **Fluid Animations**: Sử dụng chuyển động mượt mà khi hoán đổi vị trí mảng, chèn node vào cây, đẩy phần tử vào Stack/Queue.
- **Micro-interactions**: Hover vào node để xem thông tin chi tiết, nhấp vào node để chỉnh sửa giá trị.
- **Visual Theme**: 
  - Thích hợp các theme như **Dark Sci-Fi Cyberpunk**, **IDE Studio Dark (VS Code / JetBrains style)**, hoặc **Clean Minimalist Glassmorphic**.
  - Sử dụng hiệu ứng mờ kính (Backdrop Blur), viền Neon phát sáng (Glow borders) cho các thành phần đang active.

### 📱 C. Trải nghiệm trên Mobile & Tablet (Responsive Design)
- Đảm bảo các nút điều khiển to rõ, dễ bấm bằng ngón tay, bố cục thu gọn thông minh (dạng tab hoặc collapsible drawer) khi chuyển sang màn hình điện thoại.

---

## 📦 5. DẠNG BÀN GIAO VÀ KẾT QUẢ MONG MUỐN

Bạn có thể bàn giao sản phẩm Redesign dưới dạng:
- **File Figma / Adobe XD / Sketch**: Bản thiết kế Figma hoàn chỉnh bao gồm UI Kit, Components, Color Palette, Typography, và Prototypes các màn hình chính + Bộ mô phỏng.
- **Hoặc các File Code Demo Component (React / HTML / CSS / Tailwind)**: Nếu bạn code trực tiếp giao diện mới.

> 💡 **Lời nhắn gửi**: Đừng ngần ngại phá cách! Toàn bộ cấu trúc logic backend và dữ liệu đã có sẵn, dự án đang rất chờ đợi một chiếc "áo mới" đỉnh cao và hiện đại từ tay nghề của bạn!
