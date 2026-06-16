# Hướng dẫn kiểm tra & Nhật ký hoàn thành (Walkthrough)

Chúng ta đã triển khai thành công 5 môn học mới, mở khóa môn Lịch sử Đảng, và hoàn thành cơ chế **Dynamic Theme** (màu sắc động) toàn diện cho ứng dụng **StudyMaster**.

---

## Các thay đổi đã thực hiện

### 1. Dữ liệu môn học mới (`data/`)
* **Lập trình hướng đối tượng (OOP)**: Được thiết lập trong [data/oop.js](file:///d:/TT%20HCM/data/oop.js) (Màu Xanh Sapphire, icon `💻`).
* **Phân tích thiết kế và yêu cầu**: Thiết lập trong [data/analysis-design.js](file:///d:/TT%20HCM/data/analysis-design.js) (Màu Xanh Ngọc lục bảo, icon `📐`).
* **Cấu trúc dữ liệu và giải thuật**: Thiết lập trong [data/dsa.js](file:///d:/TT%20HCM/data/dsa.js) (Màu Tím Thạch anh, icon `📊`).
* **Hệ cơ sở dữ liệu**: Thiết lập trong [data/database.js](file:///d:/TT%20HCM/data/database.js) (Màu Cam Đất, icon `🗄️`).
* **Những định nghĩa và thuật toán cơ bản của CNTT**: Thiết lập trong [data/basic-it.js](file:///d:/TT%20HCM/data/basic-it.js) (Màu Chàm Indigo, icon `💡`).
* **Lịch sử Đảng Cộng sản VN**: Đã mở khóa hoàn toàn trong [data/lich-su-dang.js](file:///d:/TT%20HCM/data/lich-su-dang.js) (Màu Đỏ Crimson, icon `☭`).
* **Cấu hình trung tâm**: Cập nhật [data/index.js](file:///d:/TT%20HCM/data/index.js) để liên kết tất cả môn học và đăng ký các mã màu `themeColors` (`accent`, `secondary`, `accentRgb`).

### 2. Hệ màu chuyển đổi động (CSS Variables)
* Mở rộng `:root` trong [app/globals.css](file:///d:/TT%20HCM/app/globals.css):
  * Định nghĩa `--accent-rgb` đại diện cho giá trị màu RGB để xử lý độ mờ (opacity) cho bóng mờ phát sáng và viền sáng spotlight.
  * Liên kết tất cả bóng đổ (`box-shadow`), màu nền highlight (`--highlight-bg`), màu nền thẻ, và viền spotlight sử dụng biến `rgba(var(--accent-rgb), ...)`.
  * Cập nhật thẻ bookmark `.card-bookmark-tag` tự động chuyển màu gradient từ `var(--accent)` sang `var(--secondary)`.
  * Đặt `.text-static-accent` động: `color: var(--accent) !important`.

### 3. Logic điều khiển & Hover (Javascript)
* Cấu hình `useEffect` trong [app/page.js](file:///d:/TT%20HCM/app/page.js) lắng nghe `selectedSubjectId` để tiêm (inject) các mã màu của môn học đang chọn vào `:root` của DOM.
* Truyền các thuộc tính màu CSS cục bộ vào style của từng thẻ Bento môn học:
  `style={{ '--accent': subj.themeColors.accent, '--accent-rgb': subj.themeColors.accentRgb }}`.
  *Điều này đảm bảo khi hover vào thẻ nào ở trang chủ, thẻ đó sẽ phát hào quang và viền sáng spotlight đúng tông màu của môn học đó.*
* Tự động tạo cấu hình màu sắc động (`themeColors`) cho các môn học tự thêm dựa trên bộ chuyển đổi Hex-to-RGB.

### 4. Giao diện bài học và banner hạt bụi
* **Bài kiểm tra trắc nghiệm (Quiz)**: Nút trắc nghiệm trong [components/Sidebar.js](file:///d:/TT%20HCM/components/Sidebar.js) sẽ tự động kiểm tra xem môn học hiện tại có danh sách câu hỏi trắc nghiệm hay không. Nếu không có (các môn mới), nút sẽ chuyển sang trạng thái disabled (làm mờ 50%, hiển thị icon 🔒 ổ khóa, con trỏ chuột không cho click).
* **Hạt bụi sáng Canvas**: Trong [components/ContentRenderer.js](file:///d:/TT%20HCM/components/ContentRenderer.js), hệ thống hạt bụi stardust tự động đọc biến `--accent` của tài liệu để tô màu lấp lánh (phối hợp với các tia sáng màu trắng) theo đúng môn học đó.

---

## Kết quả kiểm thử & xác minh

* Chạy lệnh `npm run build` thành công, kiểm tra các trang tĩnh hoạt động chính xác mà không gặp bất kỳ lỗi prerender hay TDZ nào.
* Đã đẩy mã nguồn lên nhánh chính `main` của GitHub thành công.
* Vercel đã tiếp nhận lượt push và tự động cập nhật bản live.

---

## Hướng dẫn trải nghiệm bản live

1. Truy cập vào trang web StudyMaster của bạn trên Vercel.
2. Tại màn hình **Chọn môn học**:
   * Rê chuột qua các thẻ môn học khác nhau (OOP, Cơ sở dữ liệu, Cấu trúc dữ liệu, Lịch sử Đảng,...) để thưởng thức **viền sáng spotlight và bóng hào quang thay đổi màu sắc cực đẹp**.
3. Bấm **Vào học** bất kỳ môn học nào:
   * Toàn bộ màu sắc của Sidebar (mục đang chọn, nút Đổi môn, Đăng xuất) sẽ chuyển đổi sang màu đại diện của môn học đó.
   * Các hạt bụi sáng lấp lánh bay lượn ở banner chương sẽ đổi màu theo môn. Nhấp chuột vào banner để xem **hiệu ứng nổ hạt bụi stardust màu sắc** (đỏ, xanh, tím, cam,...) cực kỳ sinh động.
   * Vào Sidebar và kiểm tra xem nút **Bài kiểm tra trắc nghiệm** có ổ khóa 🔒 và bị vô hiệu hóa cho các môn mới hay không.
