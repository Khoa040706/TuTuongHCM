# 🌌 MASTER PLAN: Tái Thiết Kế Dashboard Kho Mô Phỏng CNTT (Midnight Cyber-Studio Dark Mode)

Tài liệu này lưu trữ Kế hoạch Tổng Thể (Master Plan) cho toàn bộ quá trình tái thiết kế **Kho Mô Phỏng CNTT Tập Trung** từ nền sáng nhạt thành một **Midnight Cyber-Studio Dark Hub (`#0B0F17` → `#111827`)** đẳng cấp.

---

## 📌 1. Triết Lý Thiết Kế & Định Hướng Giao Diện

- **Theme**: Nền xám đen sâu Midnight Studio `#0B0F17` phối hợp với hiệu ứng kính mờ (Glassmorphism backdrop-blur), đường viền phát sáng Neon Cyan (`#06B6D4`), Indigo (`#6366F1`) và Emerald (`#10B981`).
- **Phân Khúc**: Thiết kế dành cho học viên ngành CNTT/CS, hiện đại, sắc nét như các công cụ lập trình cao cấp (VS Code, Vercel Dark, Stripe Developer Portal).
- **Trải Nghiệm**: 100% Full-Screen, hoàn toàn ẩn Sidebar bài học để tối ưu khoảng không cho mô phỏng.

---

## 🚀 2. Phân Chia 3 Đợt Triển Khai Chi Tiết

### 🚀 **ĐỢT 1: Tái Cấu Trúc Giao Diện Nền Tối (Midnight Dark Mode), Sticky Header, Search Bar Ctrl+K & Card Grid** *(Đang thực hiện)*
- **Cyber Gantry Header (Sticky Topbar)**: Header kính mờ cố định trên cùng khi cuộn. Logo phát sáng Neon Cyan, Nút `← Quay lại Bài học [Tên Môn]` và `🏠 Đổi môn học`.
- **Search Bar & Multi-Filter Bar**: Thanh tìm kiếm lớn tích hợp shortcut `Ctrl+K`, tìm kiếm Anh/Việt/Mô tả thời gian thực. Hàng Filter Chips lọc theo độ khó (*Dễ, Trung bình, Khó, Vận dụng cao*).
- **Cấu trúc 6 Nhóm Chủ Đề CNTT**:
  1. 📊 *Thuật Toán Sắp Xếp (Sorting)*: Bubble, Selection, Insertion, Merge, Quick, Heap Sort.
  2. 🔍 *Thuật Toán Tìm Kiếm (Searching)*: Linear Search, Binary Search.
  3. 🌐 *Duyệt Đồ Thị & Đường Đi (Graph)*: BFS, DFS, Dijkstra.
  4. 🌳 *Cấu Trúc Dữ Liệu (Data Structures)*: Binary Tree, BST, Stack, Queue, Linked List, Hash Table.
  5. 🔄 *Đệ Quy & Quy Hoạch Động (Recursion & DP)*: Recursion, Fibonacci, Knapsack.
  6. 💾 *Bộ Nhớ & OOP (Memory & OOP)*: Java Stack/Heap, Pass-by-Value/Reference.
- **Thẻ Card 3D Glassmorphism Đầy Đủ**: Nền kính mờ `#0D121F` viền glowing, hiển thị Tên Anh/Việt, Badge Time/Space Complexity ($O(n \log n)$, $O(1)$), Badge Độ khó và Nút `Bắt đầu Lab 3D →`.

---

### 🎬 **ĐỢT 2: Nâng Cấp Hệ Thống Live SVG Animation Loop Cho Từng Thẻ Card Thuật Toán**
- Xây dựng các khối đồ họa SVG Animation tự chạy vô hạn (Infinite Loop) cho từng bài Lab trong 6 chủ đề:
  - *Bubble Sort*: 5 thanh bar màu neon tự nâng gắp và hoán đổi vị trí.
  - *Binary Search*: Mảng dữ liệu tự phân đôi, con trỏ Mid xanh lá nhảy tìm kiếm.
  - *BFS Graph*: Các nút đồ thị tỏa sóng xung kích lan tỏa theo tầng.
  - *Heap/BST Tree*: Cây nhị phân tỏa sáng các đường nối node.
  - *Java Stack/Heap*: Khối RAM nạp/rút biến số trực quan.

---

### 🔮 **ĐỢT 3: Tối Ưu Hóa Trải Nghiệm (Micro-Interactions, Hover Spotlight & Polish)**
- Hiệu ứng chuột Radial Gradient Spotlight chạy theo con trỏ chuột khi lướt qua các Card.
- Micro-animations mượt mà khi lọc/tìm kiếm.
- Kiểm thử responsive trơn tru trên mọi độ phân giải thiết bị (Mobile, Tablet, Desktop).

---

## 📂 Vị Trí Lưu Trữ
- **File Kế Hoạch Master**: [`d:\TT HCM\REDESIGN_MASTER_PLAN.md`](file:///d:/TT%20HCM/REDESIGN_MASTER_PLAN.md)
- **File Kế Hoạch Thi Công Từng Đợt**: [`implementation_plan.md`](file:///C:/Users/Admin/.gemini/antigravity/brain/06c1528d-ffbe-489a-b227-4cc9bbcf89ff/implementation_plan.md)
