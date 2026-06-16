# Kế hoạch bổ sung 5 môn học mới với Giao diện chuyển đổi Màu sắc động (Dynamic Themes)

Kế hoạch này tích hợp thêm 5 môn học chuyên ngành và cơ bản vào hệ thống **StudyMaster**, đồng thời bổ sung cơ chế **Dynamic Theme Injection** bằng Javascript giúp toàn bộ giao diện (Sidebar, thẻ bài viết, hiệu ứng spotlight, bóng mờ, bút highlight, các hạt bụi vàng trên banner) tự động đổi màu theo tông màu riêng biệt của môn học đang chọn.

---

## Chi tiết Phản hồi từ Người dùng & Quyết định thiết kế

1. **Bộ màu sắc thống nhất**:
   * **Tư tưởng HCM**: Accent `#d97706` (Hổ phách), Secondary `#c2410c` (Đất nung), RGB `217, 119, 6` (Màu mặc định).
   * **OOP**: Accent `#2563eb` (Xanh Sapphire), Secondary `#1d4ed8` (Xanh Coban), RGB `37, 99, 235` (Mã màu Blue).
   * **Phân tích thiết kế**: Accent `#059669` (Xanh Ngọc lục bảo), Secondary `#047857` (Xanh lá rừng), RGB `5, 150, 105` (Mã màu Green).
   * **Cấu trúc dữ liệu và giải thuật**: Accent `#7c3aed` (Tím Thạch anh), Secondary `#6d28d9` (Tím đậm), RGB `124, 92, 237` (Mã màu Purple).
   * **Hệ cơ sở dữ liệu**: Accent `#ea580c` (Cam đất), Secondary `#c2410c` (Đỏ gạch), RGB `234, 88, 12` (Mã màu Orange).
   * **Định nghĩa & Thuật toán CNTT**: Accent `#4f46e5` (Chàm Indigo), Secondary `#4338ca` (Xanh chàm tối), RGB `79, 70, 229` (Mã màu Indigo).
   * **Lịch sử Đảng**: Accent `#b91c1c` (Đỏ Crimson), Secondary `#7f1d1d` (Đỏ đô), RGB `185, 28, 28` (Mở khóa và áp dụng mã màu Red).

2. **Hiệu ứng trên Trang chủ (Bento Hover)**:
   * Khi rê chuột vào thẻ môn học ở trang chủ, bóng mờ phát sáng (`--glow-color`) và đường viền spotlight (`::after`) của thẻ sẽ đổi màu theo đúng tông màu của môn học đó.

3. **Phạm vi đổi màu của giao diện (Study Mode)**:
   * Khi vào một môn học, toàn bộ các thành phần (Sidebar active link, Sidebar indicator, nút "Đổi môn", nút "Đăng xuất", các nút chỉnh sửa/lưu bản vẽ, nút quay đầu trang) sẽ đồng loạt đổi màu theo biến CSS `--accent` và `--secondary` tương ứng của môn học đó.

4. **Hạt bụi sáng Canvas (Chapter Banner)**:
   * Các hạt bụi sáng lơ lửng và hiệu ứng nổ pháo hoa khi bấm chuột vào banner đầu chương học sẽ đổi màu đồng bộ theo môn học hiện tại (được cập nhật động từ biến CSS `--accent`).

5. **Khóa tính năng Trắc nghiệm (Quiz Lock)**:
   * Đối với các môn học chưa có dữ liệu câu hỏi ôn tập (OOP, Phân tích thiết kế, Cấu trúc dữ liệu, Hệ cơ sở dữ liệu, Định nghĩa & Thuật toán CNTT, Lịch sử Đảng), tuỳ chọn **"Bài kiểm tra trắc nghiệm"** trong Sidebar sẽ bị khóa (thêm biểu tượng ổ khóa, làm mờ độ đục về 50%, vô hiệu hóa click chuột và hiển thị con trỏ `cursor-not-allowed`).

6. **Mở khóa môn Lịch sử Đảng**:
   * Mở khóa hoàn toàn môn Lịch sử Đảng và thêm dữ liệu demo dạng bài đọc, sử dụng bộ màu Đỏ đặc trưng của môn học.

---

## Các thay đổi đề xuất

### 1. Tạo mới các file dữ liệu môn học (`data/`)

* Tạo mới 5 file dữ liệu môn học riêng biệt:
  * [oop.js](file:///d:/TT%20HCM/data/oop.js) (Icon: `💻`, Chương mẫu: *Lập trình hướng đối tượng*)
  * [analysis-design.js](file:///d:/TT%20HCM/data/analysis-design.js) (Icon: `📐`, Chương mẫu: *Phân tích yêu cầu và UML*)
  * [dsa.js](file:///d:/TT%20HCM/data/dsa.js) (Icon: `📊`, Chương mẫu: *Cấu trúc dữ liệu & Thuật toán*)
  * [database.js](file:///d:/TT%20HCM/data/database.js) (Icon: `🗄️`, Chương mẫu: *Hệ cơ sở dữ liệu & SQL*)
  * [basic-it.js](file:///d:/TT%20HCM/data/basic-it.js) (Icon: `💡`, Chương mẫu: *Định nghĩa & Thuật toán CNTT*)
* Cập nhật [data/index.js](file:///d:/TT%20HCM/data/index.js):
  * Import dữ liệu và đăng ký 5 môn học mới vào object `subjects`.
  * Khai báo bộ màu `themeColors` (`accent`, `secondary`, `accentRgb`) trực tiếp trong cấu hình của từng môn học.

---

### 2. Thiết lập Biến màu sắc động trong CSS (`app/globals.css`)

#### [MODIFY] [globals.css](file:///d:/TT%20HCM/app/globals.css)
* Thay thế các mã màu RGB và Hex cứng liên quan đến màu hổ phách vàng (`217, 119, 6` và `#d97706`) bằng các biến CSS tương ứng:
  * Thay `#d97706` bằng `var(--accent)`.
  * Thay `rgba(217, 119, 6, ...)` bằng `rgba(var(--accent-rgb, 217, 119, 6), ...)`.
  * Cập nhật màu nền của thẻ bookmark `.card-bookmark-tag` thành dải chuyển màu đẹp mắt từ `var(--accent)` sang `var(--secondary)`.
  * Cập nhật `.text-static-accent` thành `color: var(--accent) !important`.

---

### 3. Logic điều khiển màu sắc (`app/page.js` & `components/`)

#### [MODIFY] [page.js](file:///d:/TT%20HCM/app/page.js)
* Thêm một `useEffect` theo dõi `selectedSubjectId`.
* Khi đổi môn, ghi đè các thuộc tính CSS vào gốc `:root` (`document.documentElement.style`):
  * `--accent` -> `currentSubject.themeColors.accent`
  * `--secondary` -> `currentSubject.themeColors.secondary`
  * `--accent-rgb` -> `currentSubject.themeColors.accentRgb`
* Cập nhật hàm `onCardMouseMove` để thiết lập biến cục bộ cho từng thẻ bento dựa trên màu sắc môn học đó khi người dùng hover trên trang chủ.
* Render biểu tượng động: Thay đổi từ biểu tượng cứng sang hiển thị `subj.icon || (subj.isCustom ? "📘" : "📖")`.
* Truyền thuộc tính `hasQuiz` cho `<Sidebar>`: `hasQuiz={Object.keys(questionsMap).length > 0}`.
* Thay đổi điều kiện `isActive` tại bento grid:
  ```javascript
  const isActive = subj.isActive !== false;
  ```
  (Tất cả các môn học mặc định đều Active, cho phép vào học ngay).

#### [MODIFY] [Sidebar.js](file:///d:/TT%20HCM/components/Sidebar.js)
* Tiếp nhận prop `hasQuiz`.
* Cấu hình nút **"Bài kiểm tra trắc nghiệm"**:
  * Nếu `hasQuiz` bằng `false`, thiết lập thuộc tính `disabled`, áp dụng CSS làm mờ (`opacity-50`), vô hiệu hóa click (`cursor-not-allowed`) và hiển thị thêm icon `Lock` (ổ khóa) nhỏ ở góc phải để người dùng biết tính năng này đang khóa.

#### [MODIFY] [ContentRenderer.js](file:///d:/TT%20HCM/components/ContentRenderer.js)
* Cập nhật hệ thống hạt bụi sáng Canvas (`ChapterHeader`):
  * Đọc biến `--accent` từ style thực tế của document để hiển thị hạt bụi và hiệu ứng nổ pháo hoa theo đúng màu sắc riêng của môn đó.

---

## Kế hoạch kiểm thử & Xác minh

### Kiểm thử tự động
* Khởi chạy dự án bằng lệnh `npm run build` để kiểm tra lỗi cú pháp, kiểu dữ liệu và đảm bảo build tĩnh Next.js thành công.

### Kiểm thử thủ công
1. Vào trang chủ và kiểm tra sự xuất hiện của 7 thẻ môn học (bao gồm Lịch sử Đảng và 5 môn CNTT mới).
2. Hover vào từng thẻ môn học ở trang chủ và kiểm tra xem bóng mờ phát sáng cùng đường viền tỏa sáng có chuyển màu khớp với môn học đó không.
3. Click vào từng môn học mới để kiểm tra xem thanh Sidebar, tiêu đề Chương học và các hạt stardust có chuyển đổi màu đồng loạt theo tông màu riêng của môn học đó không.
4. Kiểm tra xem tùy chọn **"Bài kiểm tra trắc nghiệm"** trong Sidebar có bị khóa và hiển thị ổ khóa đối với các môn học mới không.
