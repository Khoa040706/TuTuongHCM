# Báo cáo Kết quả Khắc phục Lỗi UI/UX & Nâng cấp Hoạt cảnh 3D Hero Cards (Walkthrough)

Chúng ta đã triển khai thành công việc khắc phục các lỗi giao diện và nâng cấp hoàn toàn cơ chế chuyển cảnh sang hệ thống các thẻ bài học Hero lơ lửng động trên ứng dụng StudyMaster.


---

## 10. Nâng cấp Tiêu đề Chương thành Biểu ngữ Điện ảnh Tràn viền & Bụi vàng Tương tác

- **Ý tưởng & Kịch bản**: Thay đổi khung tiêu đề xám tĩnh cũ thành một **Biểu ngữ Điện ảnh (Cinematic Banner)** hoành tráng, làm tương phản và phân tách các chương bài học một cách rõ nét, đồng thời tích hợp ma thuật bụi vàng động tương tác thời gian thực khi rê chuột và nhấp chuột.
- **Giải pháp triển khai**:
  - **Tràn viền Điện ảnh (Cinematic Full-width Banner)**: Cấu hình container `.chapter-banner-container` trong [globals.css](file:///d:/TT%20HCM/app/globals.css#L874-L905) sử dụng lề âm (`margin-left: -1.5rem; width: calc(100% + 3rem);`) để kéo dãn biểu ngữ tràn sát mép ngang của vùng nội dung chính.
  - **Interactive Stardust Canvas**: Tích hợp `<canvas className="chapter-banner-canvas">` bên trong component `ChapterHeader` của [ContentRenderer.js](file:///d:/TT%20HCM/components/ContentRenderer.js#L8-L268):
    - Khởi tạo 65 hạt bụi vàng óng ngẫu nhiên bay tự do chậm rãi.
    - **Rê chuột (MouseMove)**: Lực hút tự động gom các hạt bụi vàng xoáy xung quanh con trỏ chuột (Galaxy Swirl).
    - **Nhấp chuột (Click)**: Kích nổ thêm 22 hạt bụi sáng hổ phách bắn toả ra từ tâm điểm click rồi mờ dần đi nhanh chóng (Click Burst).
  - **Chữ nghệ thuật chìm (Typography Overlay)**: In chìm số chương khổng lồ (`CHƯƠNG I`, v.v.) ở nền với độ mờ cực cao (`opacity: 0.03`) kết hợp chữ tiêu đề chính bằng màu vàng gold gradient óng ánh nổi bật.
  - **Hoạt cảnh GSAP bùng nổ**: Khi cuộn tới, banner tự động scale nhẹ giãn ra (`scaleX: 0.97 -> 1`) kết hợp hiệu ứng stagger trồi lên của từng lớp chữ (Badge, Title, Subtitle).

---


## 1. Khắc phục triệt để lỗi phông chữ tiếng Việt

- **Vấn đề**: Phông chữ `Outfit` trước đây không hỗ trợ đầy đủ các ký tự tiếng Việt ghép phức tạp (như `tương`, `sự`, `kết`, `đầu`, v.v.), dẫn đến trình duyệt bị fallback cục bộ sang các phông chữ hệ thống không đồng đều.
- **Giải pháp triển khai**:
  - Nhập phông chữ chuyên biệt **Be Vietnam Pro** (được tối ưu hóa hoàn hảo cho tiếng Việt) từ Google Fonts trong file [layout.js](file:///d:/TT%20HCM/app/layout.js).
  - Cấu hình lại biến CSS `--font-sans` toàn cục trong [globals.css](file:///d:/TT%20HCM/app/globals.css) để sử dụng phông chữ này trên tất cả các thành phần văn bản.
  - Các ký tự tiếng Việt hiện tại hiển thị đồng đều, sắc nét, trơn tru, hiện đại và không còn bị lệch phông chữ.

---

## 2. Loại bỏ hoàn toàn lỗi màu tối rải rác (Dark Mode Leak)

- **Vấn đề**: Các class `dark:` của Tailwind trên Sidebar và thẻ học vẫn kích hoạt do class `dark` còn lưu lại trong cache trình duyệt trên thẻ `<html>`.
- **Giải pháp triển khai**:
  - Thêm hook `useEffect` khi mount ứng dụng trong [page.js](file:///d:/TT%20HCM/app/page.js) để gọi `document.documentElement.classList.remove("dark")`, đảm bảo trình duyệt luôn ở chế độ sáng của ngà lụa đồng bộ.
  - Loại bỏ hoàn toàn tất cả các tiền tố `dark:` trong các thành phần [Sidebar.js](file:///d:/TT%20HCM/components/Sidebar.js) và [ErrorBoundary.js](file:///d:/TT%20HCM/components/ErrorBoundary.js).
  - Giao diện Sidebar, bài học, và các khối ghi chú hiển thị nhất quán tông màu đất ấm lụa ngà (`#faf8f4`) sạch sẽ, không còn các đường viền đen hay bề mặt xám tối.

---

## 3. Tái cấu trúc cơ chế Chuyển cảnh Cinematic bằng State

- **Vấn đề**: GSAP ScrollTrigger pinning cho Hero storytelling section tạo ra một khoảng đệm ảo (`.pin-spacer`). Khi người dùng click nút "Bắt đầu hành trình" hoặc "Chương mở đầu" trên Sidebar, trình duyệt bị xung đột tính toán tọa độ cuộn động với GSAP, gây trôi qua tiêu đề chương học tập hoặc trôi vào khoảng trống trắng.
- **Giải pháp triển khai**:
  - Gỡ bỏ hoàn toàn `ScrollTrigger` pinning cho Hero trong `useGSAP` của [page.js](file:///d:/TT%20HCM/app/page.js).
  - Giới thiệu trạng thái React `showHero` (mặc định là `true`). Khi ở chế độ Hero, trang học tập không thể cuộn cơ học trên tài liệu ẩn.
  - Tích hợp thêm các sự kiện cơ chế:
    - **Cuộn chuột (onWheel)**: Khi cuộn chuột xuống, tự động kích hoạt chuyển cảnh.
    - **Vuốt tay di động (onTouchStart, onTouchMove)**: Khi vuốt ngón tay lên trên di động, tự động kích hoạt chuyển cảnh.
  - Khi kích hoạt chuyển cảnh (bằng Nút bấm, cuộn chuột hoặc vuốt tay):
    - Chạy hiệu ứng GSAP làm mờ và nâng quote box, sau đó làm mờ nền Hero.
    - Kết thúc chuyển cảnh, đặt `showHero = false` và **ngay lập tức reset cuộn trang về `0`** (`window.scrollTo(0, 0)`).
  - Khi `showHero` là `false`, Hero section hoàn toàn biến mất khỏi DOM. Bố cục học tập được xếp từ đỉnh trang (`top = 0`).
  - Do không còn các spacer ảo hay thay đổi vị trí động, tất cả các liên kết điều hướng trong Sidebar (Chương mở đầu, phần La Mã lớn, các mục nhỏ) đều cuộn mượt mà dừng đúng vị trí tiêu đề mà không gặp bất kỳ lỗi lệch tọa độ nào.

---

## 4. Sửa lỗi Lệch Chỉ báo Menu Sidebar (Menu Active Indicator Alignment)

- **Vấn đề**: Thanh chỉ báo màu cam chạy dọc ở mép trái Sidebar bị trôi lệch, chỉ sai vị trí của mục đang học.
- **Giải pháp triển khai**:
  - Thay đổi đối tượng tham chiếu container: Thay thế `aside` bằng `indicator.parentElement` (chính là container cuộn có thuộc tính `relative`).
  - Cập nhật công thức tính tọa độ chuẩn: `topPos = btnRect.top - containerRect.top + container.scrollTop` để bù trừ chính xác vị trí cuộn thực tế của Sidebar.
  - Chạy hai chu kỳ cập nhật: Cập nhật ngay lập tức (50ms) để phản hồi click và cập nhật sau khi mở rộng nhóm accordion hoàn tất (350ms) để đảm bảo độ chính xác.
  - Xóa bỏ thuộc tính `top` và `height` trong khai báo `transition` của CSS trong [globals.css](file:///d:/TT%20HCM/app/globals.css) để tránh xung đột với GSAP.

---

## 5. Tự động Đồng bộ Chỉ báo khi Quay lại Đầu trang (Auto Reset to Top)

- **Vấn đề**: Khi bấm phím tắt (Logo) hoặc cuộn thủ công lên đầu trang để đọc lại, chỉ báo của Sidebar vẫn bị giữ ở phía dưới (desync).
- **Giải pháp triển khai**:
  - **Khi Click Logo**: Viết lại hàm [handleLogoClick](file:///d:/TT%20HCM/components/Sidebar.js#L233) gọi `resetToTop()`. Hàm này sẽ tự động cuộn trang về đầu, đồng thời **mở rộng accordion của Chương mở đầu và kích hoạt phần tử con đầu tiên** để chỉ báo bay lên trên cùng tương ứng.
  - **Khi Cuộn Thủ Công**: Thêm logic vào hàm theo dõi cuộn `handleScroll` trong [page.js](file:///d:/TT%20HCM/app/page.js#L365). Khi người dùng cuộn lên trên cùng (khoảng cách cuộn `< 50px`), hệ thống tự động kích hoạt phần tử con đầu tiên của Chương mở đầu, làm Sidebar tự mở ra và chỉ báo khớp với vị trí đọc đầu trang.
  - **Sửa lỗi Temporal Dead Zone (TDZ)**: Di chuyển các khai báo hằng số `currentSubject`, `chapters`, và `questionsMap` lên trên đầu component `Page` trong `app/page.js` để tránh lỗi biến chưa khởi tạo khi render tĩnh trên máy chủ Next.js.

---

## 6. Sửa lỗi Chỉ báo không di chuyển khi click Chương / Phần La Mã lớn

- **Vấn đề**: Khi người dùng click chọn tiêu đề Chương hoặc tiêu đề phần số La Mã (ví dụ: `I. Đối tượng nghiên cứu`), tài liệu học tập tự cuộn theo, nhưng chỉ báo Sidebar vẫn đứng im ở mục con cũ đã được chọn trước đó.
- **Giải pháp triển khai**:
  - Tích hợp thêm logic tự động định vị trong [Sidebar.js](file:///d:/TT%20HCM/components/Sidebar.js#L188): Khi người dùng click Chương hoặc phần La Mã, code sẽ tìm phần tử con đầu tiên của Chương hoặc phần tương ứng đó và gọi `setActiveSubsectionId(firstSubId)`.
  - Nhờ đó, việc highlight và thanh chỉ báo lập tức nhảy đến mục con đầu tiên của Chương/Phần được click một cách đồng bộ và trơn tru cùng lúc với hiệu ứng cuộn trang.

---

## 7. Khắc phục lỗi Scroll Spy ngừng hoạt động khi cập nhật tài liệu (Scroll Spy Re-observer Fix)

- **Vấn đề**: Sau khi thực hiện các thay đổi, cơ chế tự động chuyển đổi mục đang học khi cuộn tài liệu (Scroll Spy) bị ngừng hoạt động hoàn toàn. Các mục trên Sidebar và thanh chỉ báo đứng im không dịch chuyển khi cuộn trang.
- **Nguyên nhân**:
  - Khi người dùng đổi môn học hoặc khi tô bật highlight làm thay đổi `reRenderKey`, toàn bộ DOM của tài liệu học tập (`ContentRenderer`) bị unmount và remount lại để vẽ các nét vẽ/tô sáng mới.
  - Tuy nhiên, `useEffect` khởi tạo **Scroll Spy Observer** trong [page.js](file:///d:/TT%20HCM/app/page.js#L939) chỉ phụ thuộc vào `[isQuizMode, appStep]`. Nó không được kích hoạt chạy lại khi `reRenderKey` hoặc `chapters` thay đổi. Điều này dẫn đến việc observer tiếp tục theo dõi các phần tử DOM cũ đã bị phá hủy khỏi cây DOM, làm mất hoàn toàn khả năng theo dõi cuộn trang.
- **Giải pháp triển khai**:
  - Bổ sung `reRenderKey` và `chapters` vào danh sách dependency của `useEffect` khởi tạo Scroll Spy trong [page.js](file:///d:/TT%20HCM/app/page.js#L939).
  - Giờ đây, mỗi khi tài liệu được render lại (đổi môn học hoặc cập nhật highlight), observer cũ sẽ tự giải phóng (`disconnect`) và observer mới sẽ được gắn vào đúng các phần tử DOM hiện tại của tài liệu thực tế, giúp quá trình cuộn trang đồng bộ Sidebar hoạt động mượt mà và ổn định.

---

## 8. Tái cấu trúc hiệu ứng 3D thành thẻ bài học Hero (Hero Cards) kết hợp đa hướng

- **Ý tưởng & Kịch bản**: Thay vì áp dụng hiệu ứng cho từng dòng chữ/đoạn văn nhỏ khiến cuộn trang bị rời rạc ("dải thẳng tắp"), chúng ta nhóm nội dung của mỗi **Phần (Part)** thành các **Thẻ lơ lửng lớn (Hero Cards)**. Các thẻ lớn này sẽ bay vào sinh động theo chuyển động cuộn chuột đa hướng từ không gian 3D, trong khi chữ viết bên trong thẻ giữ nguyên ổn định để đọc và tô màu highlight dễ dàng.
- **Giải pháp triển khai**:
  - **Giao diện Thẻ kính ngà Silk Ivory Glassmorphism**: Định nghĩa lớp `.premium-study-card` trong [globals.css](file:///d:/TT%20HCM/app/globals.css) với nền màu Silk Ivory bán trong suốt (`rgba(250, 248, 244, 0.92)`), hiệu ứng làm mờ kính backdrop-filter `12px`, viền mảnh tinh tế và đổ bóng mịn màu hổ phách đặc trưng của mệnh Thổ.
  - **Bookmark Tag làm tiêu đề thẻ**: Mỗi thẻ bài học được gắn một tag kiểu bookmark sách nổi bật ở đầu thẻ (`.card-bookmark-tag`) làm tiêu đề (`part.label / part.title`), giúp phân biệt các phần bài học rõ ràng.
  - **Hoạt cảnh bay 3D đa hướng (Alternating X/Z-axis Fly-in)**:
    - Trong [ContentRenderer.js](file:///d:/TT%20HCM/components/ContentRenderer.js#L95-L143), chúng ta truyền tham số `index` vào `CinematicScrollWrapper`.
    - **Thẻ chẵn**: Bay chéo từ bên trái dưới lên (`startX: -80px`, `startZ: -180px`, xoay trục Y `-8deg` và trục X `10deg`).
    - **Thẻ lẻ**: Bay chéo từ bên phải dưới lên (`startX: 80px`, `startZ: -180px`, xoay trục Y `8deg` và trục X `10deg`).
  - **Ổn định chữ bên trong thẻ**: Loại bỏ tất cả wrapper animation riêng lẻ của các đoạn văn bên trong `ContentBlock` để khi thẻ bay vào tâm màn hình (Reading Zone), thẻ sẽ nằm phẳng phẳng lỳ và đứng im, giúp người dùng rê chuột nghiêng 3D toàn phần (`ThreeDTiltWrapper`) và tô màu ghi chú vô cùng thoải mái.
  - **Lối ra phóng to**: Khi trôi qua mép trên màn hình, thẻ tự động phóng to bay nhanh về phía camera (`endZ: 120px`) và mờ nhòe dần đi rất điện ảnh.

---

## 9. Kết quả Kiểm thử E2E & Build dự án

- **Trạng thái Biên dịch**: Dự án biên dịch thành công hoàn hảo (`Compiled successfully`) bằng Next.js Turbopack trong 4.3s mà không có bất kỳ lỗi hay cảnh báo nào.
- **Trải nghiệm Thực tế**: Khi cuộn chuột, các thẻ bài học kính ngà lướt bay vào so le trái phải nhẹ nhàng, lơ lửng lùi sâu 3D và tự phẳng lại sắc nét khi vào trung tâm màn hình, mang lại cảm giác cực kỳ cao cấp và chuyên nghiệp.

### Hình ảnh kiểm thử tự động (E2E Test Screenshots)
Dưới đây là các ảnh chụp tự động ghi nhận từ kịch bản kiểm thử:

**1. Sách 3D ảo khổ lớn (Hero Section - Khóa cuộn đang hoạt động):**
![Hero Book](file:///C:/Users/Admin/.gemini/antigravity/brain/3d2a8c34-fbfe-49de-aac7-3932a790effb/test_4_hero_book.png)

**2. Giao diện bài học với các thẻ Hero lơ lửng bay so le 3D sắc nét:**
![Scrolled Cards](file:///C:/Users/Admin/.gemini/antigravity/brain/3d2a8c34-fbfe-49de-aac7-3932a790effb/test_6_scrolled_cards.png)
