# StudyMaster — Đặc tả ý tưởng “Cỗ máy tri thức Cự Giải”

> **Tài liệu BA / Concept & Experience Brief — phiên bản 1.0**  
> Dành cho chủ dự án, BA, 3D designer, Agent Frontend, Backend và QA.  
> Mục đích: chuyển concept đã được lựa chọn thành các bước có thể hiểu, thiết kế, triển khai và nghiệm thu.  
> Trạng thái: định hướng đã được người dùng đồng ý; chi tiết dưới đây là đề xuất để đội dự án đối chiếu với source và hoàn thiện.

## I. Tóm tắt quyết định

### 1.1. Ý tưởng trong một câu

**Một linh vật cua Cự Giải mang dáng huy hiệu cơ khí mở ra không gian kiến thức, nơi các khối dữ liệu lần lượt trở thành thuật toán và diagram, rồi dẫn người xem vào công cụ học thật của StudyMaster.**

Cua là điểm nhận diện. Các vòng là cơ chế mở câu chuyện. Các khối và đường nối giải thích năng lực học tập, mô phỏng của sản phẩm.

### 1.2. Điều đã chốt và điều còn cần kiểm tra

| Trạng thái | Nội dung |
|---|---|
| Đã chốt từ người dùng | Dự án về học tập CNTT; có mô phỏng thuật toán và diagram; logo cua Cự Giải; sử dụng bộ màu dự án |
| Đã chốt từ trao đổi | Trang chủ có 3D, storytelling theo cuộn và chuyển cảnh; ưu tiên desktop; hướng R3F |
| Concept được chọn | Cỗ máy tri thức Cự Giải, giữ dấu ấn logo và mở ra không gian học |
| Đề xuất trong tài liệu | Dáng cua cơ khí giản lược, hai vòng độc lập, sáu cảnh, phạm vi bản đầu và cách chia công việc |
| Chưa xác minh | Repository, route, chức năng cụ thể, dependency, auth, nội dung preview và hiệu năng thực tế |

Tài liệu không xác nhận dự án đã có model hoặc đã hoàn thành các chức năng được nêu làm ví dụ. Không yêu cầu người dùng chốt lại concept; chỉ cần làm rõ các quyết định chưa có thông tin trước giai đoạn phụ thuộc vào chúng.

### 1.3. Vì sao concept phù hợp

- **Nhận diện:** cua Cự Giải gắn với logo và dấu ấn cá nhân của chủ dự án.
- **Liên hệ sản phẩm:** dữ liệu, cạnh nối, thứ tự xử lý thể hiện học CNTT.
- **Kể chuyện:** một tập hợp phần tử chuyển từ rời rạc sang có cấu trúc.
- **Khả năng thực hiện:** bản đầu dùng bộ phận cứng tách riêng; chưa cần nhân vật có biểu cảm hoặc chuyển động phức tạp.
- **Mở rộng:** sau này có thể tái sử dụng linh vật trong onboarding hoặc hướng dẫn; các phần đó chưa thuộc phạm vi hiện tại.

## II. Mục tiêu, người xem và phạm vi

### 2.1. Mục tiêu trải nghiệm

Sau khi xem, người dùng phải trả lời được:

1. StudyMaster là nền tảng học gì?
2. Mô phỏng thuật toán và diagram giúp tôi làm gì?
3. Tôi có thể bắt đầu ở đâu?

Hiệu ứng phục vụ ba câu hỏi này. Không biến trang học tập thành màn biểu diễn cung hoàng đạo khiến người xem không hiểu chức năng sản phẩm.

### 2.2. Người xem và hành động

| Nhóm | Nhu cầu | Hành vi đề xuất |
|---|---|---|
| Khách mới | Hiểu sản phẩm | Xem các cảnh; chọn môn hoặc mở giới thiệu bộ mô phỏng |
| Người quay lại | Vào học nhanh | Có CTA ngay từ hero; có thể bỏ qua câu chuyện |
| Đã đăng nhập | Tiếp tục sử dụng | “Tiếp tục học” nếu route và dữ liệu hiện tại hỗ trợ |
| Chưa có lịch sử học | Chọn bước đầu | “Khám phá môn học” hoặc CTA tương đương đã xác minh |
| Giảm chuyển động | Đọc và thao tác dễ chịu | Nội dung theo thứ tự, giảm hiệu ứng, mọi CTA vẫn truy cập được |

BA xác định trang này nằm ở route nào. Nếu dashboard hiện tại chứa tiến độ hay nghiệp vụ học tập, không tự thay thế toàn bộ dashboard bằng trang quảng cáo.

### 2.3. Phạm vi phiên bản đầu

**Bao gồm:** một model cua, hai vòng, bộ khối dữ liệu và đường nối đơn giản, câu chuyện giới thiệu, CTA thật, fallback, giảm chuyển động, tích hợp trong cấu trúc hiện tại.

**Chưa bao gồm:** cua đi bộ, nhảy, nói chuyện, biểu cảm mặt, thế giới 3D có thể khám phá tự do, multiplayer, AI tutor mới, viết lại simulator, giao diện mobile riêng, thay backend hoặc đổi theme toàn ứng dụng.

Desktop ưu tiên không có nghĩa là bỏ qua màn hình thấp, zoom, bàn phím hoặc máy dùng GPU tích hợp.

## III. Chuyển logo thành ngôn ngữ model

### 3.1. Giữ gì từ ảnh gốc?

| Thành phần của logo | Ý nghĩa | Hướng thiết kế 3D |
|---|---|---|
| Cua với hai càng mở | Nhận diện Cự Giải | Giữ silhouette rõ; càng mở vừa phải, có khớp |
| Vòng huy hiệu | Bảo vệ và bao quanh biểu tượng | Thành hai vòng độc lập có thể xoay/tách |
| Vàng và nền tối | Phong cách trang trọng | Kim loại vàng satin, bề mặt than mờ |
| Ký hiệu Cự Giải | Dấu ấn cá nhân | Một chi tiết nhỏ trên mai hoặc vòng |
| Hoa văn, hạt viền | Độ tinh xảo | Giản lược; chỉ giữ chi tiết thấy được ở khoảng cách trang chủ |
| Chữ và số trên huy hiệu | Phong cách thiên văn | Không bắt buộc đưa hết vào model; tránh cạnh tranh với nội dung học |

Logo gốc tiếp tục dùng ở vị trí nhận diện. Phiên bản 3D là diễn giải phục vụ chuyển động, không phải thay logo.

### 3.2. Tính cách của cua

- Điềm tĩnh, thông minh, thân thiện qua cử chỉ.
- Dẫn sự chú ý tới nội dung, không chiếm màn hình trong mọi cảnh.
- Chuyển động như một cơ cấu chính xác, không hung dữ.
- Không cần gắn mắt hoạt hình hoặc mặt cười nếu làm mất phong cách logo.
- Hai càng dùng để chào nhẹ và hướng tới vùng nội dung; không bóp, đập hay tấn công.

### 3.3. Vật liệu và bảng màu

Các mã dưới đây lấy từ ảnh người dùng cung cấp. Hiệu ứng kim loại còn phụ thuộc ánh sáng và môi trường render; không kỳ vọng một mã HEX tạo ra chất liệu vàng giống ảnh ngay lập tức.

| Màu | HEX | Vai trò |
|---|---|---|
| Silk Ivory | `#FAF8F4` | Nền chính sáng |
| Dark Charcoal Earth | `#2C2A26` | Mai cua, mặt trong khung và chữ chính |
| Amber Gold | `#D97706` | Viền, khớp, điểm nhấn và CTA |
| Amber Glow | `#F59E0B` | Điểm đang hoạt động, ánh sáng nhẹ |
| Terracotta Sun | `#C2410C` | Điểm nhấn phụ |
| Clay Ochre | `#6E6A5E` | Chữ phụ |
| Sand Alabaster | `#FFFFFF` | Bề mặt thẻ |
| Sand Border | `#EAE6DB` / `#D9D3C5` | Viền nhẹ / viền mạnh |

Đề xuất này thay thế bảng tím–cyan chủ đạo trong brief cũ. Màu môn học vẫn dùng cho dữ liệu, đường nối hoặc điểm sáng theo từng chương; cua giữ nhận diện vàng–than.

| Môn theo bảng người dùng | Accent | Secondary |
|---|---|---|
| Tư tưởng Hồ Chí Minh | `#D97706` | `#C2410C` |
| Lịch sử Đảng Cộng sản VN | `#B91C1C` | `#7F1D1D` |
| OOP | `#2563EB` | `#1D4ED8` |
| Phân tích thiết kế yêu cầu | `#059669` | `#047857` |
| DSA | `#7C3AED` | `#6D28D9` |
| Database | `#EA580C` | `#C2410C` |
| Khái niệm CNTT cơ bản | `#0D9488` | `#0F766E` |
| Thuật toán kinh điển | `#4F46E5` | `#4338CA` |
| Đại cương khác | `#DB2777` | `#BE185D` |

Không đổi màu cả trang hoặc model liên tục theo mọi môn. Bản đầu chỉ chọn màu của những môn thực sự xuất hiện trong câu chuyện. Kiểm tra tương phản trước khi dùng màu accent cho chữ nhỏ.

## IV. Bóc tách model để bàn giao 3D designer

### 4.1. Cấu trúc bộ phận

Tên dưới đây là quy ước đề xuất cho model, không phải yêu cầu về thư mục source.

| ID / tên gợi ý | Hình dáng | Chuyển động bản đầu | Yêu cầu khi dựng |
|---|---|---|---|
| M01 `crab_root` | Nhóm toàn bộ cua | Dịch, xoay và thu/phóng tổng thể | Tâm quy ước ở giữa thân |
| M02 `crab_body` | Mai gọn, silhouette bám logo | Theo nhóm gốc | Tránh chi tiết quá nhỏ |
| M03 `claw_left` | Càng trái cách điệu | Xoay hướng tới nội dung | Pivot tại khớp với thân |
| M04 `claw_right` | Càng phải cách điệu | Chào nhẹ, mở góc nhỏ | Pivot tại khớp với thân |
| M05 `pincer_left/right` | Phần kẹp, nếu cần mở/đóng | Chưa bắt buộc | Tách riêng chỉ khi animation cần |
| M06 `legs_group` | Các chân cân đối, nhận ra hình cua | Giữ cố định | Không rig đi bộ trong bản đầu |
| M07 `ring_outer` | Vòng ngoài vàng mảnh | Xoay và lùi ra sau | Tách khỏi cua |
| M08 `ring_inner` | Vòng trong ít chi tiết | Xoay theo hướng khác | Có khoảng hở tránh giao nhau |
| M09 `cancer_mark` | Ký hiệu Cự Giải nhỏ | Theo mai hoặc vòng | Nhìn rõ nhưng không thành tiêu đề chính |

### 4.2. Phân chia model và code

| Dựng trước trong Blender hoặc công cụ 3D | Tạo/điều khiển trong R3F, React và GSAP |
|---|---|
| Cua, càng, chân, vòng có hình dáng riêng | Camera và ánh sáng trang chủ |
| Chi tiết nhận diện | Tiến trình mở/tách vòng |
| Vật liệu cơ bản và UV khi cần | Khối dữ liệu, đường nối, highlight |
| Hierarchy và pivot | Bố trí theo viewport |
| Animation clip nếu thật sự cần | Nội dung, tiêu đề, CTA và preview simulator |

Bản đầu ưu tiên bộ phận cứng và animation transform. Chưa cần skinning/rig nhân vật phức tạp. Không xuất cả website thành một GLB; diagram và dữ liệu cần thay đổi linh hoạt theo nội dung.

### 4.3. Gói bàn giao model

- File nguồn chỉnh sửa được, ví dụ `.blend` nếu dựng bằng Blender.
- File `.glb` dành cho web.
- Ảnh trước, nghiêng ba phần tư và bên hông.
- Danh sách node, vật liệu, pivot và đơn vị kích thước.
- Quy ước hướng nhìn chính và trục sau khi export; kiểm tra trong trình xem web.
- Ghi rõ bộ phận nào được phép xoay, bộ phận nào giữ cố định.
- Nguồn/quyền sử dụng của asset ngoài nếu có.
- Ảnh fallback từ góc hero, không kèm chữ UI.

**Điều kiện model đạt:** nhận ra cua ở kích thước hiển thị thực; hai càng/vòng điều khiển độc lập; không thiếu texture; không xuyên nhau ở các pose đã định; model mở đúng trong môi trường web mục tiêu. Đẹp trong Blender chưa đủ để xác nhận đẹp trong trình duyệt.

## V. Kịch bản sáu cảnh — giải thích từng bước

Mỗi cảnh có trạng thái đầu, hành động do cuộn và trạng thái cuối. Các câu chữ là bản nháp, BA thay bằng nội dung đã xác minh. Không biến ví dụ thành lời hứa sản phẩm.

### 5.1. S01 — Gặp StudyMaster

**Câu hỏi cần trả lời:** “Đây là sản phẩm gì?”

- Bắt đầu: nền ngà, heading bên trái, cua và hai vòng bên phải. Camera ở góc ba phần tư nông để thấy độ dày nhưng vẫn nhận ra logo.
- Khi chưa cuộn: cua nổi nhẹ; một càng chào một lần; vòng xoay rất chậm.
- Nội dung nháp: “Hiểu kiến thức. Nhìn thấy cách nó vận hành.” Mô tả ngắn: nền tảng học tập CNTT với công cụ mô phỏng trực quan, sau khi xác minh cách gọi này trong dự án.
- CTA chính: vào học/khám phá môn theo route đã xác minh. CTA phụ: “Khám phá StudyMaster” đưa tới S02.
- Khi cuộn: chuyển động chào kết thúc, hai vòng bắt đầu tách; cua dịch nhẹ để tạo khoảng trống.
- Kết thúc: huy hiệu vẫn nguyên nhận diện, không còn pose gây xung đột với cảnh tiếp theo.

**Nghiệm thu:** ngay ở màn đầu đã hiểu sản phẩm và có đường vào học, không cần chờ scene tải xong.

### 5.2. S02 — Mở không gian kiến thức

**Câu hỏi:** “StudyMaster tổ chức việc học như thế nào?”

1. Vòng ngoài lùi lại, vòng trong nghiêng nhẹ.
2. Một nhóm khối kiến thức đi từ sau khung ra vùng giữa màn hình.
3. Khối chia thành các nhóm gắn với nội dung thực có trong dự án.
4. Cua đứng ở một bên và hướng càng tới nhóm đang được giới thiệu.

- Trạng thái đầu: cấu trúc huy hiệu đóng.
- Trạng thái cuối: không gian mở; các khối đã được sắp xếp, sẵn sàng chuyển sang mô phỏng thuật toán.
- Copy nháp: “Từ từng chủ đề đến một lộ trình dễ theo dõi.” Chỉ dùng chữ “lộ trình” nếu trải nghiệm thật hỗ trợ; nếu chưa có, đổi thành “Tìm nội dung bạn cần học”.
- Không bắt buộc có cá nhân hóa/AI; không tự thêm chức năng đó.

**Nghiệm thu:** người xem phân biệt được nhóm nội dung; chuyển động tạo khoảng trống cho chữ, không làm chữ chạy liên tục.

### 5.3. S03 — Nhìn thấy thuật toán từng bước

**Câu hỏi:** “Mô phỏng giúp tôi hiểu thuật toán như thế nào?”

1. Một số khối từ S02 xếp thành dãy trên một mặt phẳng dễ nhìn.
2. Hai khối được highlight để thể hiện so sánh.
3. Nếu cần đổi vị trí theo thuật toán đã chọn, hai khối đổi chỗ theo đường đi rõ ràng.
4. Trạng thái kết thúc giữ đủ lâu để đọc, đi kèm nhãn giải thích ngắn.

**Ví dụ nội dung để BA/dev kiểm tra:** nếu dùng Bubble Sort với dãy `[3, 1, 2]`, mô tả lần lượt so sánh 3 và 1 → đổi thành `[1, 3, 2]`; so sánh 3 và 2 → đổi thành `[1, 2, 3]`. Đây là minh họa một lượt xử lý; không gọi đó là toàn bộ khả năng simulator.

- Màu dữ liệu có thể dùng DSA tím; cua vẫn vàng–than.
- Số và giải thích cần đọc rõ; ưu tiên lớp DOM khi chữ trên model quá khó đọc.
- CTA: mở simulator tương ứng nếu tồn tại. Demo gắn nhãn “Minh họa”.
- Cuộn ngược: phục hồi trạng thái dãy tương ứng với tiến trình, không thực hiện swap thêm lần nữa lên dữ liệu đã thay đổi.

**Nghiệm thu:** dev hoặc người phụ trách học thuật xác nhận thứ tự đúng; nhìn thấy rõ so sánh và kết quả.

### 5.4. S04 — Từ dữ liệu tới cấu trúc

**Câu hỏi:** “Tôi có thể hiểu mối quan hệ và diagram ra sao?”

1. Các khối tách khỏi dãy và di chuyển tới vị trí node.
2. Sau khi node vào vị trí, đường nối mới xuất hiện.
3. Một node và các quan hệ liên quan được highlight.
4. Cảnh giữ lại bố cục để người xem đọc tên và quan hệ.

- BA chọn một loại diagram thật được sản phẩm hỗ trợ: ví dụ flowchart, UML hoặc ERD; không trộn ký hiệu từ các loại khác nhau.
- Nếu chưa xác minh loại diagram, dùng mạng nút khái quát và ghi rõ minh họa kết nối, không gọi đó là UML/ERD.
- Chỉ dùng ít node để không làm màn hình thành một mạng dây rối.
- Màu nhấn gợi ý là xanh ngọc của môn phân tích thiết kế.
- CTA: mở bộ mô phỏng diagram đã xác minh.

**Nghiệm thu:** ký hiệu, chiều cạnh và nội dung đúng với loại diagram được chọn; không che chữ bằng đường nối.

### 5.5. S05 — Từ quan sát tới thực hành

**Câu hỏi:** “Tôi có thực sự sử dụng được thứ vừa xem không?”

1. Cua và vòng thu nhỏ, dịch về vùng phụ.
2. Preview giao diện thật trở thành hình chính.
3. Highlight tối đa ba thao tác đã có, ví dụ chọn ví dụ, chạy từng bước, xem kết quả — chỉ khi đúng với sản phẩm.
4. CTA đưa tới công cụ thật.

Preview có thể là ảnh chụp được duyệt hoặc component demo cô lập. Nếu chỉ là ảnh, không đặt nút giả khiến người xem tưởng đang dùng simulator. Chức năng học thật nên mở ở route hiện có để giữ trang chủ nhẹ.

**Nghiệm thu:** phân biệt được minh họa với công cụ thật; bấm CTA đến đúng nơi và xử lý auth đúng.

### 5.6. S06 — Bắt đầu hành trình

**Câu hỏi:** “Bước tiếp theo của tôi là gì?”

1. Các phần tử phụ rút khỏi vùng CTA.
2. Cua trở về pose cân đối; hai vòng thành khung nhỏ phía sau.
3. Heading và CTA là trọng tâm; giảm chuyển động nền.

Copy nháp: “Bắt đầu từ điều bạn muốn hiểu hôm nay.”

- Khách: vào luồng chọn nội dung hoặc đăng nhập hiện tại.
- Đã đăng nhập, có dữ liệu hợp lệ: tiếp tục học nếu có.
- Chưa có lịch sử: khám phá môn hoặc mô phỏng.
- Không có route/chức năng tương ứng: BA/dev giải quyết trước khi công bố; không tạo nút trống.

**Nghiệm thu:** CTA không bị che, không chạy khỏi con trỏ và không phụ thuộc hoàn tất animation.

## VI. Luồng tương tác và quy tắc hành vi

### 6.1. User stories

| ID | Nhu cầu | Kết quả mong đợi |
|---|---|---|
| US01 | Là khách mới, tôi muốn hiểu StudyMaster | Hero nêu đúng học CNTT và cách khám phá |
| US02 | Tôi muốn thấy giá trị mô phỏng | S03/S04 có ví dụ đúng, không chỉ hiệu ứng |
| US03 | Tôi muốn vào công cụ vừa xem | CTA mở đúng route thật |
| US04 | Tôi đã dùng sản phẩm và muốn học ngay | Có đường bỏ qua storytelling |
| US05 | Tôi không thích chuyển động mạnh | Có chế độ đọc đủ nội dung, dùng đủ CTA |
| US06 | Máy không chạy được 3D | Fallback giữ bố cục và chức năng |

### 6.2. Quy tắc bắt buộc

- Cuộn tự nhiên; không chặn wheel toàn trang.
- Cuộn xuôi/ngược tạo trạng thái xác định; không phụ thuộc đã xem cảnh trước hay chưa.
- Có điều hướng chương; nhảy trực tiếp tới chương phải đặt scene đúng trạng thái.
- Chuyển động theo chuột chỉ cộng offset nhỏ, không điều khiển trực tiếp tiến trình câu chuyện.
- Khi người dùng dừng giữa cảnh, nội dung trọng tâm vẫn đọc được.
- Không để camera tự do và timeline tranh quyền điều khiển trong chế độ storytelling.
- Bàn phím, scrollbar và anchor dùng được; focus không nằm trong nội dung đã ẩn ngoài màn hình.
- Thứ tự DOM tuân theo thứ tự câu chuyện, không dựa vào canvas để truyền đạt nội dung thiết yếu.

### 6.3. Các trạng thái khác thường

| Trạng thái | Phản hồi |
|---|---|
| Model đang tải | Nội dung/CTA hiện ngay; có fallback và vùng giữ kích thước |
| Asset/WebGL lỗi | Thay bằng fallback, không crash toàn trang |
| Reduced motion | Trình bày dọc hoặc chuyển động nhẹ; không bắt pin dài |
| Tab ẩn | Tạm dừng công việc render không cần thiết |
| Rời route | Cleanup tài nguyên do trang sở hữu |
| Quay lại/khôi phục scroll | Đồng bộ chapter và scene theo vị trí hiện tại |
| Resize, zoom, màn hình thấp | Đo lại; bỏ pin nếu không đủ chỗ đọc |

## VII. Phân vai công nghệ và hợp đồng model–frontend

### 7.1. Stack mục tiêu

Giữ Next.js/React/Tailwind và backend hiện tại. Bổ sung hoặc dùng R3F/Drei tương thích với repo. Three.js là nền đồ họa; R3F tổ chức scene; GSAP/ScrollTrigger điều khiển tiến trình câu chuyện; React/HTML hiển thị nội dung và CTA.

Đây là định hướng kiến trúc, không phải hướng dẫn cài phiên bản. Dev kiểm tra package và tài liệu chính thức tương ứng với phiên bản khóa trong repo trước triển khai. Không migrate toàn dự án hoặc tự thay các scene cũ.

### 7.2. Hợp đồng bàn giao

| Bên thiết kế model cung cấp | Bên FE xác nhận |
|---|---|
| Node name, hierarchy, pivot | Tìm được node; xoay đúng bộ phận |
| Quy mô và hướng nhìn chính | Scale/camera đúng trong trình duyệt |
| Pose đóng/mở mẫu | Không xuyên nhau khi chạy timeline |
| Material và texture | Hiển thị đúng trên nền ngà |
| GLB và ảnh fallback | Tải thành công, lỗi có xử lý |
| Danh sách animation clip nếu có | Chỉ một nguồn điều khiển mỗi thuộc tính |

### 7.3. Nguyên tắc triển khai

- Bắt đầu với một Canvas cho trải nghiệm chính; không tạo canvas mới cho mỗi cảnh nếu không cần.
- Trạng thái scene gồm chapter/progress và pose đích; timeline cập nhật ref/object phù hợp.
- Nhóm cha điều khiển theo scroll, nhóm con nhận idle/pointer để tránh ghi đè.
- Không cập nhật React state mỗi frame chỉ để xoay model.
- R3F quản lý render loop; không thêm loop render trùng.
- Cleanup listener, observer, timeline và tài nguyên do trang sở hữu; thận trọng với tài nguyên chia sẻ.
- Nội dung công khai không cần API mới chỉ để chạy animation.
- Không đưa secret, đáp án hoặc dữ liệu trái quyền vào client/demo.
- Không giả lập “Tiếp tục học” bằng dữ liệu bịa; dùng hợp đồng hiện có hoặc chọn CTA khác.

## VIII. Lộ trình triển khai theo từng đầu ra

### Bước 1 — Xác minh sản phẩm và vị trí tích hợp

**Owner:** BA + dev hiểu repo.  
**Thực hiện:** kiểm tra route trang chủ, auth, danh sách môn, loại diagram, thuật toán và simulator thật.  
**Đầu ra:** bảng feature–bằng chứng–route, copy nháp, danh sách điểm chưa rõ.  
**Đạt khi:** mỗi CTA có đích; không còn tuyên bố chức năng chưa được xác minh.

### Bước 2 — Thiết kế concept thị giác

**Owner:** thiết kế/3D designer.  
**Thực hiện:** dựng hình nhìn trước, góc ba phần tư và sơ đồ tách bộ phận; xác định vật liệu vàng–than.  
**Đầu ra:** concept sheet và bảng bộ phận.  
**Đạt khi:** nhận ra cua từ logo, thấy rõ cách vòng mở và vùng dành cho nội dung. Chưa cần model chi tiết.

### Bước 3 — Dựng blockout

**Owner:** 3D designer + FE.  
**Thực hiện:** dùng hình khối thô tạo cua/vòng; kiểm tra silhouette, kích thước và pivot trong trình duyệt.  
**Đầu ra:** GLB thô hoặc scene thử và hai pose đóng/mở.  
**Đạt khi:** chuyển động đầu–cuối hợp lý; không giao nhau. Không dành thời gian làm hoa văn khi pose còn sai.

### Bước 4 — Làm một đoạn hoàn chỉnh

**Owner:** FE.  
**Thực hiện:** S01 → S02 bằng model blockout, nội dung thật và CTA; có cuộn ngược, nhảy chương, fallback.  
**Đầu ra:** lát cắt tích hợp trong dự án.  
**Đạt khi:** cảm nhận được mở huy hiệu thành không gian tri thức, chữ đọc rõ và tương tác đúng.

### Bước 5 — Hoàn thiện model

**Owner:** 3D designer.  
**Thực hiện:** làm đường cong, viền, vật liệu và chi tiết nhận diện trong giới hạn pose đã kiểm tra.  
**Đầu ra:** file nguồn, GLB tối ưu, ảnh fallback và manifest bộ phận.  
**Đạt khi:** model hiển thị tốt trong môi trường web, không chỉ trong công cụ dựng.

### Bước 6 — Thêm thuật toán, diagram và preview

**Owner:** BA/nội dung + FE.  
**Thực hiện:** S03–S05, lựa chọn ví dụ đúng và nối CTA vào chức năng hiện có.  
**Đầu ra:** câu chuyện đủ sáu cảnh gồm S06.  
**Đạt khi:** có người xác minh tính đúng của ví dụ; preview và công cụ thật được phân biệt rõ.

### Bước 7 — Tối ưu và tích hợp

**Owner:** FE + integration.  
**Thực hiện:** giảm tài nguyên nặng; kiểm tra auth, lịch sử học nếu dùng, theme scope, cache PWA, reduced motion và vòng đời.  
**Đầu ra:** bản sẵn sàng kiểm thử, ghi rõ giới hạn và thay đổi liên quan.  
**Đạt khi:** không ảnh hưởng luồng học hiện tại; không có scene chạy ngầm sau rời route.

### Bước 8 — Kiểm thử và bàn giao

**Owner:** QA; dev sửa ở vòng riêng.  
**Thực hiện:** chạy các tiêu chí ở mục IX, ghi lỗi và retest sau sửa. Không sửa code đồng thời trong vòng test.  
**Đầu ra:** test report, bug report, tài liệu asset/component và bản bàn giao.  
**Đạt khi:** case bắt buộc pass hoặc giới hạn còn lại được ghi rõ; không tuyên bố pass nếu chưa chạy.

## IX. Acceptance criteria và bằng chứng

| ID | Tiêu chí | Cách xác nhận |
|---|---|---|
| AC01 | Nhận ra cua Cự Giải và StudyMaster | Review hero đối chiếu logo/concept |
| AC02 | Giữ nền ngà, vàng–than và token dự án | Kiểm tra các cảnh, không còn bảng màu cũ áp toàn trang |
| AC03 | Cua/càng/vòng tách đúng cấu trúc | Kiểm tra node và chạy pose |
| AC04 | S01 → S02 thể hiện mở không gian | Xem xuôi và ngược ở tốc độ chậm/nhanh |
| AC05 | Thuật toán minh họa đúng | Đối chiếu từng bước với ví dụ đã chọn |
| AC06 | Diagram đúng loại/ký hiệu | Review nội dung và hướng cạnh |
| AC07 | Preview không gây hiểu nhầm | Ảnh/demo có nhãn; CTA công cụ thật rõ |
| AC08 | CTA và trạng thái auth đúng | Kiểm tra khách/đã đăng nhập/chưa có lịch sử |
| AC09 | Có đường vào học từ hero | Truy cập mà không xem hết câu chuyện |
| AC10 | Không che/cắt nội dung | Kiểm tra 1366×768, 1440×900, 1920×1080 và zoom 200% |
| AC11 | Cuộn ngược/anchor/back hoạt động | Nhảy thẳng vào S03/S04, quay lại trang |
| AC12 | Bàn phím dùng được | Tab, Enter, Page Down; focus nhìn thấy |
| AC13 | Giảm chuyển động đọc đủ nội dung | Bật hệ thống/nút trang, kiểm tra CTA |
| AC14 | Lỗi tải/WebGL có fallback | Mô phỏng thất bại khi tải scene |
| AC15 | Không rò rỉ vòng đời | Vào/ra route năm lần, kiểm tra canvas/trigger/render |
| AC16 | Không hồi quy chức năng liên quan | Kiểm thử các route học được liên kết |
| AC17 | Asset có thể tiếp tục chỉnh sửa | Có GLB, nguồn, manifest và fallback |

### 9.1. Mục tiêu hiệu năng ban đầu

Đây là ngân sách đề xuất, chưa phải kết quả đo:

- Hướng tới 60 FPS trên desktop mục tiêu; nếu cảnh nặng duy trì dưới 45 FPS thì xem xét giảm chất lượng.
- DPR khởi điểm giới hạn khoảng 1,5; điều chỉnh sau đo.
- Asset 3D và texture mở đầu hướng tới tối đa 3 MB truyền tải; nếu vượt phải có lý do và số đo.
- Hạn chế bóng động, phản chiếu và hậu kỳ trước khi giảm chất lượng nội dung.
- Ghi máy, GPU, browser, viewport, mạng, cache nóng/lạnh trong báo cáo.
- Không yêu cầu route học khác tải model quảng cáo khi không cần.

## X. Rủi ro và cách kiểm soát

| Rủi ro | Dấu hiệu | Cách xử lý |
|---|---|---|
| Quá giống website chiêm tinh | Cung hoàng đạo nổi hơn chức năng học | Đưa mô phỏng và CTA học xuất hiện sớm |
| Model quá nhiều chi tiết | Viền/hạt lấp lánh rối, tải nặng | Giản lược, ưu tiên silhouette |
| Cua trông hung dữ | Càng hướng vào người xem, cử động mạnh | Pose mở, cử chỉ nhỏ, hướng về nội dung |
| Câu chuyện dài và mệt | Nhiều pin liên tục, khó vào học | Giữ CTA nhanh, chỉ pin đoạn quan trọng |
| Motion xung đột | Camera/mesh giật khi cuộn và rê chuột | Một chủ sở hữu mỗi thuộc tính, chia nhóm |
| Ví dụ học thuật sai | Swap hoặc cạnh diagram không đúng | Xác minh dữ liệu trước khi polish |
| Chỉ đẹp ở công cụ dựng | GLB vào web tối hoặc thiếu texture | Thử web từ blockout, kiểm tra vật liệu sớm |
| Scope phình | Thêm rig đi bộ, AI hoặc simulator mới | Giữ danh sách ngoài phạm vi; tách backlog |

**Khó nhất:** phối hợp chuyển cảnh và nội dung hai chiều, đồng thời giữ model đẹp và hiệu năng ổn. Phương án giảm rủi ro là làm S01 → S02 trước; không dựng toàn bộ model chi tiết rồi mới thử motion.

## XI. Các quyết định còn mở để BA xử lý

| Mã | Cần xác định | Khi nào cần | Phương án mặc định |
|---|---|---|---|
| D01 | Route giới thiệu và CTA | Trước tích hợp | Dùng route hiện có phù hợp, giữ đường vào học |
| D02 | Thuật toán minh họa | Trước S03 | Ví dụ ngắn từ simulator đã có |
| D03 | Loại diagram | Trước S04 | Một loại thật được hệ thống hỗ trợ |
| D04 | Mức giống logo | Khi chốt concept sheet | Giữ silhouette, giản lược hoa văn |
| D05 | Preview công cụ | Trước S05 | Ảnh chụp đã duyệt + CTA thật |
| D06 | Máy desktop mục tiêu | Trước đo hiệu năng | Thống nhất một máy tham chiếu, ghi cấu hình |

Những quyết định có thể xác định từ repo thì BA/dev tự kiểm tra. Chỉ hỏi chủ dự án khi lựa chọn ảnh hưởng nhận diện, nội dung hoặc phạm vi mà không có dữ kiện giải quyết.

## XII. Prompt giao việc

### 12.1. BA

> Đọc tài liệu này và source/tài liệu liên quan StudyMaster. Giữ concept Cỗ máy tri thức Cự Giải đã chọn. Xác minh feature, thuật toán, loại diagram, route và auth; hoàn thiện bảng feature–bằng chứng–route, copy và storyboard đầu–cuối từng cảnh. Không bịa chức năng hoặc giả định thư mục. Chỉ hỏi điểm chưa rõ ảnh hưởng phạm vi. Chưa code trong bước đặc tả.

### 12.2. 3D designer / Agent hỗ trợ Blender

> Dựa vào logo cua Cự Giải và bộ màu Silk & Earth, thiết kế cua cơ khí giản lược: thân, hai càng độc lập, chân cố định và hai vòng độc lập. Làm concept sheet rồi blockout trước chi tiết. Chuẩn bị pose đóng/mở, pivot, node name và GLB thử web. Chưa làm đi bộ hoặc rig phức tạp. Bàn giao nguồn chỉnh sửa, GLB, manifest và fallback khi model hoàn thiện.

### 12.3. FE — Vòng 1

> Đọc đặc tả BA và repo. Dùng Next.js/React/Tailwind hiện có với R3F/Drei và GSAP phù hợp dependency. Làm S01 → S02 bằng model blockout, CTA thật, cuộn ngược, fallback và reduced motion. Một nguồn điều khiển mỗi thuộc tính. Không đổi backend/theme toàn dự án. Báo cáo điểm chưa xác minh.

### 12.4. FE — Vòng 2

> Từ lát cắt đã đạt, tích hợp model hoàn thiện và S03–S06. Kiểm tra ví dụ thuật toán/diagram đúng, preview có nhãn, CTA vào chức năng thật. Giữ nhận diện vàng–than, tối ưu desktop, cleanup và tải asset. Không thêm tính năng ngoài phạm vi.

### 12.5. QA / Integration

> Kiểm tra AC01–AC17, xác thực route/auth và đo hiệu năng có ghi môi trường. Trong vòng test không sửa code. Ghi bug với bước tái hiện, expected/actual, mức độ và owner. Retest sau vòng sửa; không xác nhận phần chưa chạy.

---

**Kết quả mong muốn:** một trang chủ mà cua Cự Giải thực sự dẫn người xem từ nhận diện thương hiệu tới việc hiểu và sử dụng công cụ học CNTT. Thành công được đánh giá bằng câu chuyện rõ, mô phỏng đúng, thao tác thật và chuyển động ổn định — cùng một model có thể tiếp tục chỉnh sửa, mở rộng.
