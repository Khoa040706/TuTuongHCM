# 🌌 StudyMaster — Định hướng trang chủ 3D với React Three Fiber

![Status](https://img.shields.io/badge/Tr%E1%BA%A1ng%20th%C3%A1i-Draft-6235ED?style=flat-square)
![Platform](https://img.shields.io/badge/N%E1%BB%81n%20t%E1%BA%A3ng-Desktop%20first-181538?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-Next.js%20%2B%20R3F%20%2B%20GSAP-DFF6FA?style=flat-square&labelColor=181538)

| | |
|---|---|
| 👥 **Đối tượng sử dụng** | BA, Agent thiết kế, Frontend, Backend và QA |
| 🎯 **Mục tiêu** | Xây dựng trang chủ giới thiệu StudyMaster với 3D thật, kể chuyện theo cuộn chuột, chuyển cảnh và dẫn người dùng vào học tập |
| 🖥️ **Phạm vi** | Ưu tiên desktop, giao diện sáng, chuyển động nổi bật |

---

## 📑 Mục lục

| # | Chương |
|---|---|
| I | [🎯 Định hướng tổng thể](#i-định-hướng-tổng-thể) |
| II | [🧱 Stack được lựa chọn](#ii-stack-được-lựa-chọn) |
| III | [📖 Storytelling về StudyMaster](#iii-storytelling-về-studymaster) |
| IV | [🎨 Định hướng thiết kế](#iv-định-hướng-thiết-kế) |
| V | [🎬 Cách chuyển động vận hành](#v-cách-chuyển-động-vận-hành) |
| VI | [🧩 Kiến trúc component đề xuất](#vi-kiến-trúc-component-đề-xuất) |
| VII | [🛡️ Fallback, vòng đời và hiệu năng](#vii-fallback-vòng-đời-và-hiệu-năng) |
| VIII | [🔌 Nội dung và tích hợp backend](#viii-nội-dung-và-tích-hợp-backend) |
| IX | [🧑‍🤝‍🧑 Phân công và lộ trình](#ix-phân-công-và-lộ-trình) |
| X | [✅ Tiêu chí nghiệm thu](#x-tiêu-chí-nghiệm-thu) |
| XI | [📝 Prompt giao việc](#xi-prompt-giao-việc) |
| XII | [🏁 Điều kiện hoàn thành](#xii-điều-kiện-hoàn-thành) |

---

## I. Định hướng tổng thể

### 1.1. Trải nghiệm cần xây dựng

Trang chủ phải giúp người xem:

1. Hiểu StudyMaster là gì.
2. Nhìn thấy lợi ích và chức năng thực tế.
3. Trải nghiệm một hành trình hình ảnh có chuyển động.
4. Dễ dàng bắt đầu hoặc tiếp tục học.

**✅ Yêu cầu chính:**

- Có vật thể 3D thật với camera, ánh sáng, vật liệu và chiều sâu.
- Cuộn chuột điều khiển diễn tiến câu chuyện.
- Vật thể 3D thay đổi vị trí, cấu trúc hoặc trạng thái theo nội dung.
- Có chuyển cảnh giữa các chương.
- Chữ, thẻ tính năng và giao diện minh họa chuyển động đồng bộ với 3D.
- Bộ màu sáng, nổi bật, phù hợp sản phẩm học tập.
- CTA vào học luôn dễ tìm.

> 🚫 **Không nghiệm thu** một trang chỉ có khối 3D quay phía sau danh sách văn bản dài. Chuyển động phải thể hiện được diễn tiến và lợi ích của sản phẩm.

### 1.2. Phân biệt trang giới thiệu và dashboard nghiệp vụ

Trong tài liệu này, "dashboard trang chủ" được hiểu là **trang chủ giới thiệu sản phẩm kết hợp cửa vào học tập**.

| Người dùng | Trải nghiệm |
| ------------------------- | -------------------------------------------------------------------- |
| Khách chưa đăng nhập | Xem giới thiệu, khám phá chức năng, truy cập luồng đăng nhập hiện có |
| Người đã đăng nhập | Có nút vào học ngay, vẫn có thể xem phần giới thiệu |
| Người có lịch sử học | Hiển thị "Tiếp tục học" nếu dữ liệu và route hiện có hỗ trợ |
| Người chưa có lịch sử học | Hiển thị "Khám phá môn học" |
| Người giảm chuyển động | Đọc đủ nội dung và sử dụng được mọi CTA |

> ⚠️ Không bắt người dùng quay lại phải xem hết storytelling mới vào được bài học.

BA cần kiểm tra route và dashboard hiện tại trước khi quyết định vị trí tích hợp. Không tự thay thế dashboard học tập hoặc quản trị đang hoạt động.

### 1.3. Căn cứ và giới hạn

- Stack hiện tại được ghi nhận từ ảnh người dùng cung cấp.
- Chưa kiểm tra repository và phiên bản dependency thực tế.
- Storyboard, màu sắc và thông số chuyển động dưới đây là định hướng đề xuất.
- Agent phải đối chiếu tính năng trong source trước khi viết nội dung quảng cáo.
- Không tự thêm lời hứa về AI, tăng điểm, hiệu quả học tập hoặc số lượng người dùng.

---

## II. Stack được lựa chọn

### 2.1. Kiến trúc đề xuất

**Next.js + React + Tailwind CSS + React Three Fiber + Drei + Three.js + GSAP ScrollTrigger.**

| Thành phần | Vai trò |
| ----------------------------- | --------------------------------------------------------------------- |
| Next.js | Route, layout, metadata, nội dung trang và kết nối hệ thống hiện có |
| React | Component, trạng thái giao diện và tương tác |
| Tailwind CSS | Bố cục, typography, màu sắc và giao diện DOM |
| Three.js | Nền tảng đồ họa 3D |
| React Three Fiber — R3F | Xây dựng và quản lý scene Three.js bằng component React |
| Drei | Các thành phần hỗ trợ R3F, lựa chọn theo nhu cầu |
| GSAP + ScrollTrigger | Timeline, chuyển cảnh và đồng bộ chuyển động với cuộn |
| Firebase và backend hiện tại | Xác thực, dữ liệu học tập và các chức năng nghiệp vụ |

### 2.2. Hiểu đúng R3F

> **R3F là lớp tích hợp Three.js vào React.**

- Three.js cung cấp camera, geometry, material, light và renderer.
- R3F cho phép tổ chức những thành phần này thành component.
- Drei hỗ trợ các tác vụ thường gặp, giúp giảm phần code phải tự viết.
- GSAP điều khiển câu chuyện và thời điểm chuyển động.
- React/HTML hiển thị tiêu đề, mô tả, nút bấm và điều hướng.

> 🚫 HTML và R3F cùng tồn tại trong một trang. Không đưa toàn bộ chữ và nút vào texture 3D chỉ để làm mọi thứ "thành 3D".

### 2.3. Phạm vi thay đổi stack

**✅ Được làm**
- Giữ Next.js, React, Tailwind, backend và Firebase hiện tại.
- Bổ sung R3F/Drei cho trải nghiệm trang chủ mới.
- Giữ các scene Three.js cũ nếu đang hoạt động tốt.

**🚫 Không được làm**
- Không chuyển toàn bộ dự án sang R3F.
- Không migrate JavaScript sang TypeScript trong cùng hạng mục nếu repo chưa có kế hoạch.
- Không thêm nhiều thư viện animation làm cùng một việc.

**⚙️ Cần kiểm tra**
- Kiểm tra tương thích giữa React, R3F, Drei và Three.js trước khi cài.
- Giữ package manager và lockfile hiện có.

> ⭐ **Ưu tiên thử một cảnh hero hoàn chỉnh trước khi mở rộng toàn trang.**

---

## III. Storytelling về StudyMaster

### 3.1. Ý tưởng xuyên suốt

> ### "Từ kiến thức rời rạc đến hành trình học rõ ràng."

Đối tượng 3D chủ đạo đề xuất là **lõi tri thức**:

- Ban đầu gồm các thành phần rời rạc.
- Khi cuộn, chúng được tổ chức thành nhóm.
- Các nhóm kết nối với nội dung học.
- Qua giai đoạn ôn tập và theo dõi, cấu trúc trở nên rõ ràng.
- Ở phần kết, vật thể thu gọn để nhường trọng tâm cho hành động bắt đầu học.

Vật thể cần liên quan đến thông điệp học tập, không chỉ là hình trang trí xuất hiện ngẫu nhiên.

### 3.2. Storyboard đề xuất

| Cảnh | Mục tiêu | Nội dung nháp | Chuyển động |
| ------------ | ---------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------- |
| 01. Hero | Giới thiệu giá trị | "Biến kiến thức thành hành trình của bạn." | Lõi tri thức nổi nhẹ; phản ứng theo chuột; heading xuất hiện theo cụm |
| 02. Vấn đề | Tạo sự liên hệ | "Tài liệu nhiều. Bước tiếp theo cần rõ ràng." | Các mảnh kiến thức tách ra rồi được sắp xếp |
| 03. Khám phá | Giới thiệu nội dung học | Các môn hoặc chức năng đã được xác minh | Camera chuyển nhẹ; ba thẻ trọng tâm lần lượt trượt ngang |
| 04. Ôn tập | Giới thiệu cách củng cố kiến thức | Quiz, flashcard, lịch ôn nếu có | Thẻ chuyển trạng thái; các phần tử quay về lõi |
| 05. Theo dõi | Cho thấy kết quả sử dụng | Tiến độ hoặc báo cáo hiện có | Các lớp thông tin xuất hiện; cấu trúc 3D ổn định |
| 06. Bắt đầu | Chuyển sang sử dụng | "Bắt đầu từ một bài học hôm nay." | Vật thể thu gọn; CTA trở thành trọng tâm |

> ⚠️ Đây là khung kịch bản. BA phải thay nội dung chưa được xác minh bằng chức năng thực tế.

### 3.3. Quy tắc nội dung

- Mỗi cảnh có một thông điệp chính.
- Mô tả ngắn, đọc được trong lúc trải nghiệm.
- Chi tiết dài chuyển sang vùng đọc bình thường hoặc trang chức năng.
- Ưu tiên ảnh chụp hoặc preview giao diện sản phẩm thật.
- Dữ liệu mẫu phải ghi rõ **"Minh họa"**.

> 🚫 Không tạo số liệu, đánh giá người dùng hoặc thành tích giả.
> 🚫 Không dùng nội dung 20 tiêu chí production của trang tham chiếu làm nội dung quảng cáo StudyMaster.

---

## IV. Định hướng thiết kế

### 4.1. Bộ màu sáng

| Token | Màu đề xuất | Vai trò |
| -------------- | ----------- | ------------- |
| `home-bg` | `#F6F7FB` 🩶 | Nền chính |
| `home-ink` | `#181538` ⬛ | Chữ chính |
| `home-muted` | `#625E75` ◾ | Chữ phụ |
| `home-primary` | `#6235ED` 🟣 | Điểm nhấn tím |
| `home-cyan` | `#DFF6FA` 🩵 | Nền chương |
| `home-pink` | `#FFE5ED` 🩷 | Nền chương |
| `home-amber` | `#FFF0D4` 🟡 | Nền kết thúc |
| `home-surface` | `#FFFFFF` ⬜ | Thẻ nội dung |

- Bộ màu này chỉ áp dụng trong phạm vi trang giới thiệu.
- Giữ các chi tiết nhận diện StudyMaster phù hợp.
- Kiểm tra tương phản chữ trên từng nền.

> 🚫 Không tự thay theme của trang học tập hoặc quản trị.

### 4.2. Bố cục desktop

- Hero có vùng chữ và vùng 3D riêng.
- Canvas chiếm khoảng 45–60% chiều rộng màn hình mở đầu.
- Heading lớn, hiển thị đầy đủ dấu tiếng Việt.
- Body khoảng 16–18px, line-height 1.5–1.7.
- Giới hạn chiều rộng đoạn văn trên màn hình lớn.
- Thẻ không được cắt mất nội dung khi màn hình thấp.

**📐 Các mốc kiểm tra:**

| Độ phân giải | |
|---|---|
| 1366×768 | 🖥️ |
| 1440×900 | 🖥️ |
| 1920×1080 | 🖥️ |
| Zoom 200% | 🔍 |

> ℹ️ Không phát triển bố cục mobile riêng trong đợt này.

### 4.3. Chất lượng hình ảnh 3D

**Ưu tiên:**

- Một vật thể chủ đạo được thiết kế tốt.
- Ánh sáng làm rõ hình khối.
- Vật liệu nhất quán với bảng màu.
- Góc camera có chủ đích.
- Chuyển động ít nhưng rõ ý nghĩa.

> 🚫 Không mặc định dùng nhiều particle, bloom mạnh, phản chiếu nặng hoặc nhiều model cùng lúc.

Asset phải có nguồn và quyền sử dụng rõ ràng.

---

## V. Cách chuyển động vận hành

### 5.1. Một tiến trình câu chuyện chung

**🔁 Luồng vận hành:**

1. Người dùng cuộn trang tự nhiên.
2. ScrollTrigger xác định tiến trình của từng chương.
3. GSAP cập nhật trạng thái câu chuyện.
4. R3F đọc trạng thái để thay đổi scene.
5. Chữ, thẻ và chỉ báo chương chuyển động đồng bộ.
6. Cuộn ngược đưa cảnh trở lại trạng thái tương ứng.

**Trạng thái câu chuyện có thể gồm:**

- Chương đang hoạt động.
- Tiến trình chương.
- Vị trí và hướng camera.
- Vị trí, góc xoay, tỷ lệ của nhóm vật thể.
- Mức độ phân tách các thành phần.
- Màu sắc hoặc độ nổi bật.
- Tiến trình dịch chuyển thẻ.

### 5.2. Phân quyền điều khiển animation

| Thành phần | Nguồn điều khiển |
| ---------------------------- | ---------------------- |
| Tiến trình câu chuyện | GSAP ScrollTrigger |
| Vị trí chính của vật thể | Timeline của chương |
| Dao động nhẹ | R3F `useFrame` |
| Offset theo chuột | R3F, giới hạn biên độ |
| Chữ và thẻ DOM | GSAP |
| Nút và trạng thái chức năng | React |

> 🚫 **Không để GSAP và `useFrame` liên tục ghi đè cùng một thuộc tính.**

**Có thể tổ chức:**

- Nhóm cha nhận chuyển động theo timeline.
- Nhóm con nhận idle và pointer offset.
- Camera có một nguồn điều khiển chính.

> 🚫 **Không bật điều khiển camera tự do mặc định nếu nó xung đột với storytelling.**

### 5.3. Các hiệu ứng chính

| Hiệu ứng | Hành vi |
| ----------------- | ------------------------------------------ |
| Idle | Vật thể dao động/quay chậm khi không cuộn |
| Pointer parallax | Chuột tạo thay đổi góc nhỏ |
| Reveal | Chữ và thẻ xuất hiện theo cụm |
| Scrub | Cuộn điều khiển tiến trình hai chiều |
| Chuyển chương | Camera, vật thể và nền chuyển theo thứ tự |
| Track ngang | Cuộn dọc điều khiển các thẻ ngang |
| Hover CTA | Thay nền hoặc dịch chuyển nhẹ |

**⏱️ Thông số khởi đầu để tinh chỉnh:**

| Tham số | Giá trị đề xuất |
|---|---|
| Reveal | ~0,5–0,8 giây |
| Stagger | ~0,06–0,12 giây |
| Scrub smoothing | ~0,5–1 giây |
| Pointer rotation | ~±5–8 độ |
| Hover | ~150–250ms |

> ℹ️ Đây là tham số thử nghiệm, không phải điều kiện bảo đảm trang sẽ đẹp.

### 5.4. Pin và cuộn ngang

- Chỉ dùng 1–2 đoạn pin dài trong bản đầu.
- Xen kẽ các phần cuộn tự nhiên.
- Không chặn wheel toàn trang.
- Không chồng CSS sticky và ScrollTrigger pin trên cùng phần tử.
- Đo chiều rộng track thực tế.
- Cập nhật phép đo sau resize hoặc thay đổi nội dung.

```text
travel = max(0, trackWidth - viewportWidth)
trackX = -progress × travel
```

> ✅ Track phải hoạt động khi cuộn ngược và kéo scrollbar.

Nếu nội dung không đủ chỗ theo chiều cao, chuyển sang bố cục đọc dọc thay vì cắt chữ.

---

## VI. Kiến trúc component đề xuất

### 6.1. Thành phần logic

> ℹ️ Tên dưới đây mô tả trách nhiệm, không quy định vị trí file.

| Component/module | Trách nhiệm |
| ------------------ | ------------------------------------------- |
| `HomePage` | Nội dung, metadata và layout |
| `HomeExperience` | Kết nối UI, motion và scene |
| `HomeCanvas` | Khởi tạo R3F Canvas và cấu hình render |
| `KnowledgeCore` | Vật thể chủ đạo |
| `SceneLighting` | Ánh sáng, môi trường và vật liệu liên quan |
| `CameraRig` | Điều khiển camera theo câu chuyện |
| `StoryController` | GSAP timeline và trạng thái tiến trình |
| `StoryChapter` | Nội dung từng cảnh |
| `FeatureTrack` | Thẻ tính năng trượt ngang |
| `HomeCTA` | Điều hướng theo trạng thái người dùng |
| `HomeContent` | Copy, feature và route đã xác minh |
| `MotionConfig` | Tham số chuyển động |
| `QualityConfig` | Preset chất lượng render |

Agent cần đọc cấu trúc repository trước khi chọn vị trí component.

### 6.2. Next.js và client boundary

- Heading, mô tả, liên kết và metadata có nội dung HTML rõ ràng.
- Tách client boundary cho R3F và motion.
- Lazy-load scene nặng.
- Dành sẵn kích thước vùng 3D.
- Nội dung và CTA không phải chờ model tải xong.
- Nếu tắt SSR cho canvas qua dynamic import, thực hiện ở client boundary phù hợp.

> 🚫 Không tắt SSR toàn bộ trang chỉ vì có 3D.

### 6.3. Trạng thái và rendering

- Không gọi React `setState` mỗi frame.
- Dùng ref hoặc object trạng thái cho cập nhật liên tục.
- React state dùng cho thay đổi UI như chương hiện tại, trạng thái tải và chế độ motion.
- Để R3F quản lý render loop của canvas.
- Không tạo thêm loop gọi `renderer.render()` song song.
- Với chế độ render theo nhu cầu, các thay đổi từ GSAP phải yêu cầu frame mới khi cần.

---

## VII. Fallback, vòng đời và hiệu năng

### 7.1. Trạng thái bắt buộc

| Trạng thái | Hành vi |
| --------------------- | --------------------------------------------- |
| Đang tải scene | Hiện fallback; nội dung và CTA hoạt động |
| Scene sẵn sàng | Chuyển nhẹ sang 3D, không đẩy layout |
| Asset lỗi | Hiện phương án thay thế có bố cục hoàn chỉnh |
| WebGL không khả dụng | Vẫn đọc được nội dung và điều hướng |
| Giảm chuyển động | Tắt idle/parallax mạnh, hạn chế pin dài |
| Tab ẩn | Tạm dừng hoạt động không cần thiết |
| Rời route | Cleanup các tài nguyên do trang sở hữu |

### 7.2. Cleanup

- Dùng `useGSAP` với scope phù hợp.
- Cleanup listener, observer và animation được tạo ngoài vòng đời quản lý.
- Xác định rõ quyền sở hữu geometry, material và texture.
- Không dispose tài nguyên đang được chia sẻ bởi scene khác.
- Vào/ra route không được nhân đôi trigger hoặc canvas.
- Không để animation chạy ngầm sau khi rời trang.

### 7.3. Ngân sách khởi đầu

> ℹ️ Các mục tiêu sau cần đo trên máy kiểm thử thực tế.

- Hướng tới 60 FPS trên desktop mục tiêu.
- Nếu duy trì dưới 45 FPS ở cảnh nặng, giảm chất lượng.
- DPR khởi điểm tối đa khoảng 1,5.
- Hạn chế shadow, texture lớn và hậu kỳ.
- Asset 3D cùng texture mở đầu hướng tới ≤3 MB truyền tải.
- Ghi rõ máy, GPU, trình duyệt, viewport, mạng và cache khi báo cáo.

> 🚫 Không tuyên bố đạt hiệu năng chỉ dựa trên cảm giác hoặc một điểm Lighthouse.

---

## VIII. Nội dung và tích hợp backend

### 8.1. Nguyên tắc dữ liệu

- Nội dung quảng cáo ưu tiên dữ liệu tĩnh.
- Không thêm API hoặc collection chỉ để điều khiển motion.
- CTA cá nhân hóa tái sử dụng auth và dữ liệu học tập hiện có.
- Không giả lập lưu tiến độ rồi coi là tích hợp thật.
- Không hiển thị dữ liệu mẫu như dữ liệu của người đang đăng nhập.

### 8.2. Bảo mật và PWA

> 🚫 Không import Firebase Admin SDK hoặc secret vào client.
> 🚫 Không đưa đáp án, dữ liệu quản trị hoặc dữ liệu trái quyền vào scene/props.
> 🚫 Không thay đổi quy tắc server-first của các chức năng học tập.

- Kiểm tra service worker có cập nhật asset mới đúng cách.
- Không cache phản hồi cá nhân hóa sai người.
- Không tuyên bố offline hoạt động chỉ vì dự án có PWA.

---

## IX. Phân công và lộ trình

### 9.1. BA

**Nhiệm vụ:**
- Kiểm tra chức năng hiện có.
- Chốt đối tượng xem và CTA.
- Hoàn thiện storyboard.
- Viết copy và xác minh bằng chứng.
- Xác định route đích.
- Chốt acceptance criteria.

**📤 Đầu ra:**
- Storyboard.
- Bảng feature–bằng chứng–route.
- Trạng thái người dùng.
- Danh sách điểm chưa xác minh.

> ⚠️ Không hỏi lại các yêu cầu đã chốt về desktop, nền sáng và chuyển động.

### 9.2. Frontend — Vòng 1

Triển khai một lát cắt hoàn chỉnh:

- Hero với R3F.
- Một cảnh chuyển tiếp.
- Một track tính năng.
- CTA thật.
- Cuộn hai chiều.
- Fallback và reduced motion.
- Cleanup.

> ⭐ Chỉ mở rộng sau khi lát cắt thể hiện đúng cảm giác và cách vận hành mong muốn.

### 9.3. Frontend — Vòng 2

- Hoàn thiện các chương.
- Đồng bộ art direction.
- Tinh chỉnh timeline.
- Tối ưu asset và rendering.
- Kiểm tra bàn phím, route và trạng thái lỗi.
- Giữ đường vào học nhanh.

### 9.4. Backend / Integration

- Xác minh auth và route.
- Tái sử dụng hợp đồng dữ liệu hiện có.
- Chỉ sửa backend khi luồng đã chốt thực sự yêu cầu.
- Kiểm tra ảnh hưởng tới quiz, SRS, tiến độ và báo cáo.

### 9.5. QA

- Trong vòng kiểm thử, không sửa code đồng thời.
- Ghi lỗi với ID, bước tái hiện, expected, actual, mức độ và owner.
- Sau vòng sửa, retest lỗi và luồng bị ảnh hưởng.
- Báo cáo rõ phần chưa kiểm chứng.

---

## X. Tiêu chí nghiệm thu

| ID | Điều kiện đạt |
| ---- | -------------------------------------------------------- |
| AC01 | Hero nói rõ giá trị StudyMaster và có CTA thật |
| AC02 | Scene dùng R3F/Three.js, có chiều sâu và ánh sáng |
| AC03 | 3D phản ứng theo chuột và tiến trình cuộn |
| AC04 | Có ít nhất ba thay đổi trạng thái cảnh có ý nghĩa |
| AC05 | Track ngang hoạt động hai chiều, đọc được thẻ đầu/cuối |
| AC06 | Copy khớp chức năng thực tế; demo có nhãn |
| AC07 | CTA, anchor và back/forward hoạt động |
| AC08 | Desktop không tràn ngang toàn trang |
| AC09 | Màn hình thấp và zoom lớn không làm mất nội dung |
| AC10 | Tab/focus truy cập được mọi hành động |
| AC11 | Reduced motion vẫn đọc đủ nội dung |
| AC12 | WebGL hoặc asset lỗi vẫn có fallback và CTA |
| AC13 | Vào/ra route năm lần không nhân đôi tài nguyên |
| AC14 | Client không chứa secret hoặc dữ liệu trái quyền |
| AC15 | PWA cập nhật asset và cache đúng |
| AC16 | Các luồng học tập bị ảnh hưởng không hồi quy |

---

## XI. Prompt giao việc

### 11.1. Prompt cho BA

> Đọc tài liệu này cùng tài liệu và source liên quan của StudyMaster. Chốt trang chủ giới thiệu có R3F/Three.js, GSAP storytelling theo cuộn, nền sáng và ưu tiên desktop. Lập storyboard, copy, bảng feature–bằng chứng–route và acceptance criteria. Kiểm tra tính năng thật, không bịa số liệu hoặc giả định thư mục/route cố định. Chỉ hỏi các điểm còn thiếu ảnh hưởng phạm vi. Vòng này chưa code.

### 11.2. Prompt cho Agent FE — Vòng 1

> Đọc đặc tả BA và code liên quan. Giữ Next.js/React/Tailwind hiện tại, bổ sung R3F/Drei tương thích với repo. Làm hero + một cảnh storytelling + một track tính năng + CTA thật. R3F dựng 3D, GSAP điều khiển theo cuộn, React/HTML hiển thị nội dung. Có cuộn hai chiều, fallback, reduced motion và cleanup. Không thay backend hoặc migrate toàn dự án. Báo cáo kết quả và phần chưa xác minh.

### 11.3. Prompt cho Agent FE — Vòng 2

> Hoàn thiện các chương từ lát cắt đã thống nhất. Mỗi cảnh truyền đạt một lợi ích thực tế của StudyMaster. Đồng bộ camera, vật thể, chữ và thẻ bằng timeline rõ ràng. Tối ưu desktop, tải asset, rendering và vòng đời. Giữ đường vào học nhanh. Không tự thêm tính năng backend hoặc đổi theme toàn hệ thống.

### 11.4. Prompt cho Integration / QA

> Kiểm tra CTA, auth, dữ liệu và route với hệ thống hiện tại. Chạy AC01–AC16 và đo hiệu năng trên môi trường ghi rõ. Trong vòng test không sửa code. Ghi bug với bước tái hiện, expected/actual và owner. Sau vòng sửa, retest lỗi và luồng học tập bị ảnh hưởng. Không xác nhận các mục chưa kiểm chứng.

---

## XII. Điều kiện hoàn thành

Hạng mục hoàn thành khi:

- ✅ Trang được tích hợp vào StudyMaster.
- ✅ Nội dung quảng bá phản ánh đúng sản phẩm.
- ✅ Scene R3F và storytelling vận hành thực tế.
- ✅ CTA dẫn vào chức năng thật.
- ✅ Có fallback, reduced motion và cleanup.
- ✅ Có báo cáo nghiệm thu và các giới hạn còn lại.

> 🚫 **Một mockup, video dựng sẵn hoặc trang tĩnh có vật thể quay chưa thay thế được trải nghiệm tích hợp này.**

---

<div align="center">

*Tài liệu định hướng — StudyMaster · Trang chủ 3D với React Three Fiber*

</div>
