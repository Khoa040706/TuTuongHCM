# TÀI LIỆU TỔNG HỢP: 2 BỘ ĐỀ THI BẪY CHƯƠNG I — MÔN HỆ CƠ SỞ DỮ LIỆU

> **Môn học:** Hệ cơ sở dữ liệu (Database System)  
> **Chương:** Chương I — Tổng quan và giới thiệu Hệ cơ sở dữ liệu  
> **Dữ liệu giáo trình chuẩn:** `data/database.js`  
> **Loại tài liệu:** Ngân hàng đề thi BẪY học thuật chuyên sâu (Trick Exam Sets)  
> **Tổng quy mô:** 2 Bộ đề độc lập — Tổng cộng **100 câu hỏi bẫy vận dụng cao** (100% Hard, 100% có `trickDetails`)  
> **Độ lệch chiều dài:** $\Delta L = L_{\max} - L_{\min} \le 15$ ký tự trên 100% câu hỏi (Triệt tiêu hoàn toàn đoán bừa)  
> **Cân bằng đáp án:** Tổng 2 đề đúng 25 A - 25 B - 25 C - 25 D (Tỷ lệ 25% mỗi lựa chọn)

---

## MỤC LỤC & BẢNG TRA CỨU ĐÁP ÁN NHANH

### BẢNG ĐÁP ÁN NHANH: BỘ ĐỀ BẪY 1 (db-c1-t1) — 13A, 13B, 12C, 12D

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | `A` | **11** | `C` | **21** | `A` | **31** | `C` | **41** | `A` |
| **2** | `B` | **12** | `D` | **22** | `B` | **32** | `D` | **42** | `B` |
| **3** | `C` | **13** | `A` | **23** | `C` | **33** | `A` | **43** | `C` |
| **4** | `D` | **14** | `B` | **24** | `D` | **34** | `B` | **44** | `D` |
| **5** | `A` | **15** | `C` | **25** | `A` | **35** | `C` | **45** | `A` |
| **6** | `B` | **16** | `D` | **26** | `B` | **36** | `D` | **46** | `B` |
| **7** | `C` | **17** | `A` | **27** | `C` | **37** | `A` | **47** | `C` |
| **8** | `D` | **18** | `B` | **28** | `D` | **38** | `B` | **48** | `D` |
| **9** | `A` | **19** | `C` | **29** | `A` | **39** | `C` | **49** | `A` |
| **10** | `B` | **20** | `D` | **30** | `B` | **40** | `D` | **50** | `B` |


---

### BẢNG ĐÁP ÁN NHANH: BỘ ĐỀ BẪY 2 (db-c1-t2) — 12A, 12B, 13C, 13D

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | `C` | **11** | `A` | **21** | `C` | **31** | `A` | **41** | `C` |
| **2** | `D` | **12** | `B` | **22** | `D` | **32** | `B` | **42** | `D` |
| **3** | `A` | **13** | `C` | **23** | `A` | **33** | `C` | **43** | `A` |
| **4** | `B` | **14** | `D` | **24** | `B` | **34** | `D` | **44** | `B` |
| **5** | `C` | **15** | `A` | **25** | `C` | **35** | `A` | **45** | `C` |
| **6** | `D` | **16** | `B` | **26** | `D` | **36** | `B` | **46** | `D` |
| **7** | `A` | **17** | `C` | **27** | `A` | **37** | `C` | **47** | `A` |
| **8** | `B` | **18** | `D` | **28** | `B` | **38** | `D` | **48** | `B` |
| **9** | `C` | **19** | `A` | **29** | `C` | **39** | `A` | **49** | `C` |
| **10** | `D` | **20** | `B` | **30** | `D` | **40** | `B` | **50** | `D` |


---

## MA TRẬN 6 DẠNG CÂU HỎI BẪY TRONG 2 BỘ ĐỀ

1. **Bẫy "Chọn khẳng định SAI / KHÔNG ĐÚNG" (20% = 10 câu/đề):** Cài cắm từ khóa ngụy biện tuyệt đối hóa (*luôn luôn, duy nhất, bắt buộc*) hoặc đảo ngược nguyên nhân - kết quả.
2. **Bẫy đối sánh & phân biệt khái niệm song sinh (20% = 10 câu/đề):** So sánh trực diện CSDL vs HQTCSDL, File Processing vs DBMS, Thực thể mạnh vs Thực thể yếu, Lược đồ quan niệm vs Khung nhìn ngoài.
3. **Chùm mệnh đề logic phức hợp I - II - III (16% = 8 câu/đề):** Đánh giá 3 phát biểu kỹ thuật chuyên sâu về kiến trúc 3 mức ANSI-SPARC, tính độc lập dữ liệu và mô hình CSDL; chọn tổ hợp đúng.
4. **Bẫy điền khuyết thuật ngữ kỹ thuật `(...)` (16% = 8 câu/đề):** Trích xuất chuẩn xác các định nghĩa giáo trình; phương án nhiễu sử dụng thuật ngữ gần giống nhưng sai lệch bản chất kỹ thuật.
5. **Bẫy cấu trúc toán học của 5 Mô hình dữ liệu (14% = 7 câu/đề):** Khai thác sâu cấu trúc toán học của Network (Đồ thị có hướng/Set type), Hierarchical (Cây/1 cha), Relational (Tập k-bộ), ER (Số ngôi), OODM (Encapsulation/Kế thừa bội).
6. **Tình huống thực tế & Phân tích ca nghiệp vụ (14% = 7 câu/đề):** Tình huống ngắt điện khi giao dịch (Atomicity), xung đột đọc/ghi đồng thời (Concurrency), phân quyền DBA vs Dev vs End-user.

---

## BỘ ĐỀ BẪY SỐ 1 (db-c1-t1)

> **Quy mô:** 50 câu hỏi bẫy vận dụng cao (100% Hard / Trick Questions)
> **Mã định danh:** `db-c1-t1-001` đến `db-c1-t1-050`

### Câu 1 [db-c1-t1-001]

Khẳng định nào sau đây là KHÔNG ĐÚNG khi đánh giá về hệ thống xử lý tập tin truyền thống (File Processing)?

- **A.** Hệ thống xử lý tập tin hoàn toàn không có bất kỳ một ưu điểm nào về mặt triển khai và chi phí  *(Đáp án đúng)*
- **B.** Hệ thống xử lý tập tin có ưu điểm là thời gian triển khai ngắn cho những bài toán quy mô rất nhỏ
- **C.** Hệ thống xử lý tập tin có ưu điểm là ít tốn kém chi phí đầu tư ban đầu về nhân sự và thiết bị
- **D.** Hệ thống xử lý tập tin phù hợp với các ứng dụng mang tính độc lập và xử lý cục bộ của cá nhân

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình chỉ rõ: Phương pháp xử lý tập tin vẫn có những ưu điểm rõ rệt: thời gian triển khai ngắn, chi phí đầu tư thấp, phù hợp với các bài toán nhỏ độc lập.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh thường mang định kiến File Processing hoàn toàn lỗi thời và không có bất kỳ ưu điểm nào.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy từ ngữ phủ định tuyệt đối "hoàn toàn không có bất kỳ ưu điểm nào"`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Nhớ kỹ: Với bài toán nhỏ độc lập, File Processing vẫn có ưu điểm triển khai nhanh và chi phí thấp.

---

### Câu 2 [db-c1-t1-002]

Sự khác biệt bản chất giữa hiện tượng "Dư thừa dữ liệu" và "Không nhất quán dữ liệu" trong hệ thống tập tin là gì?

- **A.** Dư thừa xuất hiện ở mức vật lý, còn không nhất quán chỉ xuất hiện trong ứng dụng của người dùng
- **B.** Dư thừa là sự lặp lại dữ liệu, còn không nhất quán là sự sai lệch dữ liệu giữa các tệp tin  *(Đáp án đúng)*
- **C.** Dư thừa là do lỗi phần cứng máy tính, còn không nhất quán là do lỗi lập trình viên viết code
- **D.** Dư thừa là hậu quả tất yếu, còn không nhất quán là nguyên nhân trực tiếp làm hỏng cơ sở dữ liệu

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Dư thừa (Redundancy) là sự lặp lại thông tin ở nhiều file khác nhau; Không nhất quán (Inconsistency) là thông tin về cùng một đối tượng có giá trị khác nhau giữa các file tại cùng thời điểm. Dư thừa là nguyên nhân sinh ra không nhất quán.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn thứ tự nguyên nhân - kết quả giữa Dư thừa và Không nhất quán.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy đảo ngược mối quan hệ nhân - quả giữa Data Redundancy và Data Inconsistency`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Dư thừa (lặp lại) là NGUYÊN NHÂN, Không nhất quán (sai lệch giá trị) là HẬU QUẢ!

---

### Câu 3 [db-c1-t1-003]

Trong hệ thống xử lý tập tin, việc nhúng trực tiếp các ràng buộc toàn vẹn vào mã nguồn chương trình ứng dụng dẫn đến hệ lụy gì?

- **A.** Làm hỏng cấu trúc tệp tin trên ổ đĩa vật lý do mã nguồn bị phân mảnh trong bộ nhớ bán dẫn RAM
- **B.** Làm giảm tốc độ thực thi của CPU do chương trình phải xử lý thêm các dòng lệnh kiểm tra điều kiện
- **C.** Rất khó thay đổi đồng loạt các chương trình khi doanh nghiệp cập nhật thêm quy tắc quản lý mới  *(Đáp án đúng)*
- **D.** Bắt buộc người dùng cuối phải có chứng chỉ chuyên gia quản trị cơ sở dữ liệu mới vận hành được

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình nêu rõ nhược điểm về toàn vẹn (Integrity): Các ràng buộc bị nhúng cứng trong từng chương trình ứng dụng, nên khi có ràng buộc mới, rất khó thay đổi đồng loạt toàn bộ các chương trình.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ nhúng ràng buộc vào code giúp tăng tốc độ xử lý hoặc ảnh hưởng phần cứng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy nhận định hậu quả bảo trì phần mềm (software maintenance) vs hiệu năng phần cứng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.d
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Nhúng vào code = Cực kỳ khó bảo trì và cập nhật khi luật kinh doanh thay đổi.

---

### Câu 4 [db-c1-t1-004]

Khi hệ thống gặp sự cố mất điện đột ngột trong lúc đang xử lý tập tin, nhược điểm chí mạng nào bộc lộ rõ nhất?

- **A.** Tự động sao lưu dữ liệu sang máy chủ dự phòng nhưng lại làm lộ toàn bộ mật khẩu người dùng
- **B.** Làm hỏng toàn bộ các linh kiện vi mạch điện tử và nguồn điện của hệ thống máy chủ trung tâm
- **C.** Làm xóa sạch vĩnh viễn hệ điều hành và toàn bộ các tệp tin cấu hình khởi động của máy tính
- **D.** Không đảm bảo tính nguyên tố của giao tác, khó đưa hệ thống về trạng thái nhất quán ban đầu  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Nhược điểm về tính nguyên tố (Atomicity): Tệp xử lý truyền thống khó đảm bảo tính chất "hoặc thực hiện hoàn toàn, hoặc không thực hiện gì", không thể tự động khôi phục về trạng thái nhất quán trước sự cố.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh dễ nhầm giữa lỗi mức phần mềm (tính nguyên tố giao tác) với hỏng hóc vật lý phần cứng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tính nguyên tố All-or-Nothing của Transaction trong RDBMS vs File System`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.c
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mất điện giữa chừng ➔ Vi phạm tính nguyên tố (Atomicity) ➔ Dữ liệu dở dang, không nhất quán.

---

### Câu 5 [db-c1-t1-005]

Cho các nhận định về phương pháp xử lý tập tin (File Processing):
(I) Thời gian sử dụng phổ biến là từ những năm 60s đến 80s.
(II) Việc chia sẻ dữ liệu giữa các phòng ban diễn ra rất dễ dàng.
(III) Truy cập tương tranh không có khóa dễ dẫn đến dị thường.
Tổ hợp đúng là:

- **A.** Nhận định (I) và nhận định (III) hoàn toàn đúng, nhận định (II) sai  *(Đáp án đúng)*
- **B.** Cả ba nhận định (I), (II) và (III) đều hoàn toàn chính xác theo sách
- **C.** Chỉ có duy nhất nhận định (I) là đúng, nhận định (II) và (III) sai
- **D.** Nhận định (II) và nhận định (III) hoàn toàn đúng, nhận định (I) sai

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình nêu rõ: Hệ thống tập tin thiếu khả năng chia sẻ thông tin giữa các hệ thống, khó mở rộng (II sai). (I) và (III) hoàn toàn đúng theo giáo trình.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ tập tin văn phòng chia sẻ qua mạng rất dễ dàng nên chọn (II) đúng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy khả năng chia sẻ dữ liệu: File Processing thực chất gây cô lập dữ liệu (data isolation)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.a & I.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Hệ thống tập tin KHÓ chia sẻ thông tin, trùng lặp và cô lập giữa các phòng ban.

---

### Câu 6 [db-c1-t1-006]

Điền vào chỗ trống: "Dị thường của truy cập tương tranh xảy ra khi nhiều người dùng cùng (...) dữ liệu đồng thời mà không có cơ chế kiểm soát chặt chẽ."

- **A.** Đọc và xem thông tin báo cáo định kỳ trên màn hình máy tính
- **B.** Cập nhật (ghi/sửa/xóa) trên cùng một nguồn tài nguyên dữ liệu  *(Đáp án đúng)*
- **C.** Sao lưu dữ liệu dự phòng từ đĩa cứng sang băng từ lưu trữ ngoài
- **D.** In ấn danh sách khách hàng ra các trang giấy từ máy in văn phòng

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Truy cập tương tranh chỉ gây ra dị thường khi có thao tác CẬP NHẬT (Update/Write) đồng thời. Nếu tất cả người dùng chỉ ĐỌC (Read-only) thì không bao giờ xảy ra xung đột dữ liệu.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ cứ "truy cập đồng thời" là bị dị thường, quên mất chỉ CẬP NHẬT mới gây xung đột.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thao tác Ghi/Cập nhật (Update) vs thao tác Đọc thuần túy (Read-only)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.e
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đọc đồng thời không gây xung đột; CHỈ CẬP NHẬT ĐỒNG THỜI mới sinh dị thường!

---

### Câu 7 [db-c1-t1-007]

Nhận định nào sau đây là ĐÚNG khi nói về tính an toàn dữ liệu trong hệ thống xử lý tập tin?

- **A.** Dữ liệu luôn được sao lưu tức thời và tự động khôi phục hoàn chỉnh khi có sự cố cháy nổ đĩa
- **B.** Mặc định hệ điều hành luôn tự động mã hóa đường truyền và phân quyền chi tiết từng bản ghi
- **C.** Rất khó phân cấp quyền hạn chi tiết đến từng trường dữ liệu cho từng người dùng khác nhau  *(Đáp án đúng)*
- **D.** Người quản trị có thể dễ dàng kiểm soát quyền đọc của từng dòng dữ liệu bằng lệnh của shell

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình chỉ rõ: Hệ thống tập tin rất khó phân cấp đối tượng sử dụng dữ liệu chi tiết, cơ chế bảo mật yếu kém so với DBMS.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm quyền file của Hệ điều hành (Read/Write/Execute trên file) với quyền CSDL.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy quyền mức Tệp tin của OS vs quyền mức Cột/Bản ghi của HQTCSDL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.f
  + 💡 *Mẹo phản xạ nhanh (`tip`):* OS chỉ phân quyền trên TỆP TIN, không thể phân quyền chi tiết tới từng CỘT hay từng DÒNG.

---

### Câu 8 [db-c1-t1-008]

Hai nhân viên cùng mở tệp tin số dư tài khoản của khách hàng A (đang có 10 triệu). Cả hai cùng rút 5 triệu cùng lúc trên hệ thống tệp tin. Kết quả sai lệch điển hình là gì?

- **A.** Hệ thống tự động kích hoạt tính năng phục hồi điểm sao lưu và trả lại đúng 10 triệu ban đầu
- **B.** Tệp tin tự động bị mã hóa và hệ điều hành khóa vĩnh viễn tài khoản của cả hai nhân viên lại
- **C.** Số dư tài khoản bị trừ gấp đôi thành âm 10 triệu đồng do phần cứng máy tính bị xung đột lệnh
- **D.** Giao tác ghi đè làm mất mát thao tác cập nhật, số dư cuối cùng có thể vẫn còn 5 triệu thay vì 0  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Đây là tình huống kinh điển của hiện tượng "Mất mát cập nhật" (Lost Update Anomaly) do không có cơ chế khóa (locking) trong hệ thống tập tin: thao tác ghi của người sau đè lên người trước.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh không hình dung được cơ chế Lost Update khi hai tiến trình cùng đọc 10tr và cùng trừ 5tr.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Lost Update Anomaly trong truy cập tương tranh đồng thời`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.e
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Cùng đọc 10tr, A ghi 5tr, B ghi 5tr ➔ B ghi đè lên A ➔ Mất 1 lần trừ 5tr ➔ Số dư sai!

---

### Câu 9 [db-c1-t1-009]

Bẫy khái niệm: Lý do cơ bản nhất buộc khoa học máy tính phải chuyển từ cách tiếp cận tệp sang cách tiếp cận cơ sở dữ liệu là gì?

- **A.** Do nhu cầu xử lý dữ liệu lớn, đa người dùng đồng thời và cấu trúc liên kết dữ liệu phức tạp  *(Đáp án đúng)*
- **B.** Do các nhà sản xuất đĩa từ bắt buộc ngừng hỗ trợ định dạng tệp tin nhị phân truyền thống
- **C.** Do các ngôn ngữ lập trình hướng đối tượng đời mới không còn các hàm mở và đọc tệp tin nữa
- **D.** Do dung lượng RAM của máy tính ngày càng lớn nên không cần lưu trữ tệp xuống đĩa cứng nữa

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình nhấn mạnh: Khi bài toán nghiệp vụ có nhu cầu xử lý dữ liệu lớn, đa người dùng và liên kết phức tạp, hệ thống tập tin bộc lộ 6 nhược điểm chí mạng, buộc phải chuyển sang Database Approach.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh bị phân tâm bởi các yếu tố công nghệ phần cứng RAM/Đĩa.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy động lực chuyển dịch phương pháp luận: Dữ liệu lớn, Đa người dùng, Liên kết phức tạp`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.c
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Nhu cầu thực tiễn: Dữ liệu lớn + Đa người dùng + Quan hệ phức tạp ➔ Bắt buộc dùng CSDL!

---

### Câu 10 [db-c1-t1-010]

Điền thuật ngữ: "Hiện tượng tại một thời điểm, thông tin về cùng một đối tượng có giá trị khác nhau trên các tập tin khác nhau được gọi là (...)."

- **A.** Tính dư thừa dữ liệu không kiểm soát (Data Redundancy của hệ thống)
- **B.** Tính không nhất quán của dữ liệu (Data Inconsistency trong CSDL)  *(Đáp án đúng)*
- **C.** Dị thường xóa thông tin do thiếu khóa (Deletion Anomaly của bảng)
- **D.** Tính toàn vẹn thực thể bị xâm phạm (Entity Integrity Violation)

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Định nghĩa chuẩn trong giáo trình: Tính không nhất quán (Data Inconsistency) là hiện tượng tại một thời điểm, thông tin về cùng một đối tượng khác nhau trên các tập tin khác nhau.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh rất hay nhầm lẫn chọn "Tính dư thừa dữ liệu".
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thuật ngữ: Thông tin KHÁC NHAU về cùng 1 đối tượng là Inconsistency, không phải Redundancy`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Cùng 1 người mà nơi ghi Hà Nội, nơi ghi Sài Gòn ➔ KHÔNG NHẤT QUÁN (Inconsistency)!

---

### Câu 11 [db-c1-t1-011]

So sánh giữa tệp tin bảng tính Excel và một Hệ quản trị CSDL chuyên dụng, phát biểu nào sau đây mang tính ngụy biện SAI?

- **A.** Excel không có cơ chế khóa dòng và kiểm soát giao tác ACID chặt chẽ như các hệ quản trị CSDL
- **B.** Excel phù hợp với các bảng dữ liệu đơn lẻ, phân tích thống kê cá nhân và báo cáo dạng bảng biểu
- **C.** Excel có thể thay thế hoàn toàn DBMS vì hỗ trợ chia sẻ đồng thời hàng triệu người qua đám mây  *(Đáp án đúng)*
- **D.** Excel dễ phát sinh dư thừa và không nhất quán khi dữ liệu phình to và có nhiều người chỉnh sửa

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Excel là phần mềm bảng tính, không phải DBMS chuyên dụng, không thể đảm bảo tính toàn vẹn, giao tác ACID và khóa tương tranh cho hàng triệu người dùng đồng thời.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thực tế nhiều doanh nghiệp dùng Excel chia sẻ trên Google Drive/OneDrive nên nhầm là thay thế được DBMS.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy khả năng mở rộng và kiểm soát tương tranh: Spreadsheet vs Relational DBMS`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.1 & II.4
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Excel không thể thay thế DBMS vì thiếu giao tác ACID, khóa tương tranh và toàn vẹn dữ liệu.

---

### Câu 12 [db-c1-t1-012]

Cho 3 mệnh đề sau:
(I) Tính toàn vẹn thể hiện dữ liệu phải chính xác, hợp lý và tuân thủ quy tắc quản lý.
(II) Phương pháp tệp tin có tính an toàn dữ liệu cao hơn mô hình cơ sở dữ liệu.
(III) Tính nguyên tố giao tác đòi hỏi thực hiện tất cả hoặc không làm gì.
Mệnh đề ĐÚNG là:

- **A.** Chỉ có mệnh đề (II) và mệnh đề (III) là chính xác, mệnh đề (I) là sai
- **B.** Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn chính xác theo giáo trình
- **C.** Chỉ có duy nhất mệnh đề (I) là đúng, mệnh đề (II) và (III) là sai
- **D.** Chỉ có mệnh đề (I) và mệnh đề (III) là chính xác, mệnh đề (II) là sai  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** (II) sai vì phương pháp tệp tin có tính an toàn dữ liệu rất thấp so với CSDL (thiếu phân quyền chi tiết, thiếu bảo mật đa tầng, khó backup khôi phục). (I) và (III) hoàn toàn đúng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh đọc lướt mệnh đề (II) thấy từ "tính an toàn cao hơn" dễ bị đánh lừa.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy so sánh độ an toàn dữ liệu: File Processing có độ an toàn thấp hơn nhiều so với DBMS`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.f
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Hệ thống tệp tin an toàn KÉM HƠN CSDL rất nhiều!

---

### Câu 13 [db-c1-t1-013]

Trong tình huống doanh nghiệp có 5 chi nhánh, mỗi chi nhánh lưu trữ 1 tệp khách hàng riêng. Khi một khách hàng đổi số điện thoại, hậu quả phổ biến nhất xảy ra là gì?

- **A.** Gây ra hiện tượng không nhất quán dữ liệu do chi nhánh này cập nhật nhưng chi nhánh khác thì không  *(Đáp án đúng)*
- **B.** Làm hỏng ngay cấu trúc chỉ mục B-Tree của toàn bộ hệ điều hành mạng tại cả năm chi nhánh đó
- **C.** Toàn bộ thông tin các khách hàng khác trong danh sách đều bị xóa sạch do lỗi xung đột định dạng
- **D.** Hệ điều hành sẽ tự động gửi email cảnh báo và đồng bộ số điện thoại mới cho toàn bộ các file

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Đây là kịch bản điển hình của sự không nhất quán dữ liệu (Data Inconsistency) bắt nguồn từ việc lưu trữ phân tán, dư thừa thông tin trên các tệp tin độc lập.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ hệ thống tự động đồng bộ (bị ảnh hưởng bởi cloud ngày nay).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân tán tệp tin độc lập không đồng bộ trong File Processing System`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* File riêng lẻ độc lập ➔ Cập nhật 1 nơi, nơi khác không biết ➔ Không nhất quán dữ liệu!

---

### Câu 14 [db-c1-t1-014]

Khái niệm "Cơ sở dữ liệu" (Database) được định nghĩa chuẩn xác trong giáo trình học thuật là gì?

- **A.** Là một phần mềm máy tính chuyên dụng dùng để soạn thảo văn bản và lập bảng biểu kế toán văn phòng
- **B.** Là tập hợp có cấu trúc của thông tin, thỏa mãn khai thác đồng thời cho nhiều người dùng/ứng dụng  *(Đáp án đúng)*
- **C.** Là tập hợp các máy chủ phần cứng được kết nối với nhau thông qua hệ thống mạng cáp quang tốc độ cao
- **D.** Là hệ điều hành mã nguồn mở chuyên quản lý việc đọc ghi các khối bit nhị phân trên thiết bị ổ cứng

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình định nghĩa: CSDL là tập hợp có cấu trúc của thông tin, được lưu trữ trên các thiết bị trừ tin nhằm thỏa mãn yêu cầu khai thác thông tin đồng thời cho nhiều người dùng hay nhiều chương trình ứng dụng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Học viên hay nhầm CSDL là một phần mềm (software) hoặc thiết bị máy chủ (hardware).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy bản chất CSDL là DỮ LIỆU CÓ CẤU TRÚC, không phải phần mềm hay phần cứng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* CSDL = Dữ liệu có cấu trúc (Data); HQTCSDL mới là phần mềm (Software)!

---

### Câu 15 [db-c1-t1-015]

Mối quan hệ chính xác giữa Cơ sở dữ liệu (Database) và Hệ quản trị CSDL (DBMS) là gì?

- **A.** Cơ sở dữ liệu và Hệ quản trị CSDL là hai thuật ngữ hoàn toàn đồng nghĩa và có thể thay thế nhau
- **B.** Cơ sở dữ liệu là phần mềm điều khiển, còn Hệ quản trị CSDL là tập hợp các tập tin lưu trữ
- **C.** Hệ quản trị CSDL là phần mềm điều khiển, còn Cơ sở dữ liệu là một thành phần bên trong nó  *(Đáp án đúng)*
- **D.** Hệ quản trị CSDL là phần cứng máy chủ, còn Cơ sở dữ liệu là phần mềm tiện ích chạy trên máy đó

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình ghi rõ: HQTCSDL là phần mềm dùng để tạo lập, quản lý và xử lý dữ liệu. CSDL là một thành phần bên trong HQTCSDL.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Rất nhiều người coi Database và DBMS là một hoặc coi Database chứa DBMS.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy quan hệ chứa: DBMS là phần mềm quản lý, CSDL là thành phần dữ liệu được quản lý`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* DBMS = Cái tủ thông minh (Software); CSDL = Hồ sơ bên trong tủ (Data)!

---

### Câu 16 [db-c1-t1-016]

Hai khả năng cơ bản BẮT BUỘC của một Hệ quản trị CSDL theo chuẩn học thuật gồm những gì?

- **A.** Tự động sửa chữa các hỏng hóc vật lý của chip nhớ RAM và bảo dưỡng hệ thống tản nhiệt máy tính
- **B.** Tự động thiết kế giao diện đồ họa đẹp mắt và tự động viết mã nguồn các phần mềm ứng dụng di động
- **C.** Quản lý kết nối mạng Internet toàn cầu và cung cấp dịch vụ máy chủ phân giải tên miền hệ thống DNS
- **D.** Quản lý dữ liệu ở mức xử lý tệp như một OS và truy cập khối lượng dữ liệu lớn có hiệu quả cao  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục II.4.b ghi rõ: Hai khả năng cơ bản bắt buộc của DBMS: 1) Quản lý dữ liệu ở mức xử lý tệp như một hệ điều hành chuyên dụng; 2) Truy cập khối lượng dữ liệu lớn có hiệu quả cao.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ DBMS bắt buộc phải có tính năng viết code hoặc làm việc của mạng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy hai khả năng cơ bản bắt buộc chuẩn mực của DBMS theo giáo trình`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* 2 năng lực bắt buộc: Quản lý mức tệp như OS + Truy cập dữ liệu lớn hiệu quả cao.

---

### Câu 17 [db-c1-t1-017]

Ai là người có thẩm quyền cao nhất trong việc tổ chức CSDL (khai báo cấu trúc, ràng buộc) và cấp phát quyền hạn khai thác?

- **A.** Người quản trị cơ sở dữ liệu chuyên nghiệp (Database Administrator - viết tắt là DBA)  *(Đáp án đúng)*
- **B.** Chuyên viên tin học phụ trách viết mã nguồn chương trình ứng dụng (Application Programmer)
- **C.** Người sử dụng cuối không chuyên về tin học truy cập dữ liệu qua báo cáo (Naive End-User)
- **D.** Giám đốc điều hành doanh nghiệp trực tiếp đăng nhập bằng tài khoản dòng lệnh của hệ điều hành

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục II.2 ghi rõ: Người quản trị CSDL (DBA) là người tổ chức CSDL (khai báo cấu trúc, thiết lập ràng buộc, bảo mật) và là người cấp quyền hạn khai thác cho toàn bộ người dùng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn vai trò của Lập trình viên ứng dụng với Người quản trị DBA.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thẩm quyền tổ chức và phân quyền: DBA độc tôn, lập trình viên không có quyền cấp quyền`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tổ chức CSDL + Khai báo ràng buộc + Cấp phát quyền = Thẩm quyền tối cao của DBA!

---

### Câu 18 [db-c1-t1-018]

Khẳng định nào sau đây là KHÔNG ĐÚNG về đối tượng Người sử dụng không chuyên (Naive End-Users)?

- **A.** Họ là những người dùng cuối không có kiến thức sâu về công nghệ thông tin và cơ sở dữ liệu
- **B.** Họ phải trực tiếp viết các câu truy vấn SQL lồng nhau phức tạp trên cửa sổ dòng lệnh đen trắng  *(Đáp án đúng)*
- **C.** CSDL cần cung cấp cho họ các công cụ, giao diện trực quan như biểu mẫu và báo cáo định dạng
- **D.** Họ khai thác dữ liệu để phục vụ công việc hàng ngày như thu ngân, nhân viên bán hàng, tiếp tân

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Người dùng không chuyên (Naive/End users) không biết SQL, họ chỉ tương tác qua giao diện trực quan (GUI, Forms, Reports) do lập trình viên xây dựng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh đọc lướt không chú ý cụm từ "phải trực tiếp viết truy vấn SQL lồng nhau".
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy đối tượng người dùng: Naive Users KHÔNG viết SQL trên command line`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Naive Users chỉ dùng giao diện có sẵn, viết truy vấn SQL là việc của Programmers và DBA.

---

### Câu 19 [db-c1-t1-019]

Khi chuyển sang sử dụng cách tiếp cận CSDL, thách thức lớn nào sau đây NẢY SINH mà hệ thống tập tin cục bộ ít gặp?

- **A.** Thời gian khởi động máy tính bị kéo dài do hệ điều hành phải nạp lại toàn bộ tệp nhị phân
- **B.** Chi phí mua ổ cứng lưu trữ tăng gấp hàng ngàn lần do cơ sở dữ liệu làm phình to dữ liệu gốc
- **C.** Tranh chấp truy cập tài nguyên đồng thời và đòi hỏi cơ chế bảo mật, phân quyền nghiêm ngặt  *(Đáp án đúng)*
- **D.** Không thể kết nối máy in để in ra các báo cáo tổng kết doanh thu cho ban giám đốc công ty

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục II.1.c nêu 3 thách thức khi dùng CSDL: 1) Xác định rõ trách nhiệm an toàn/chính xác; 2) Cơ chế bảo mật và phân quyền; 3) Giải quyết tranh chấp truy cập đồng thời.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ CSDL tốn dung lượng ổ cứng hơn (thực tế CSDL giảm trùng lặp nên tiết kiệm đĩa).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy các vấn đề thách thức khi tập trung hóa dữ liệu trong CSDL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.1.c
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Dùng CSDL: Tiết kiệm đĩa, nhưng nảy sinh Thách thức Tranh chấp đồng thời & Bảo mật!

---

### Câu 20 [db-c1-t1-020]

Tập hợp các phần mềm nào sau đây HOÀN TOÀN là các Hệ quản trị cơ sở dữ liệu (DBMS)?

- **A.** PostgreSQL, Mozilla Firefox, Python Runtime, GitHub và Node.js Engine
- **B.** Oracle, Microsoft Excel, Microsoft Word, Windows 11 và Linux Ubuntu
- **C.** MySQL, Apache Web Server, Adobe Photoshop, Docker và Google Chrome
- **D.** Oracle, Microsoft SQL Server, PostgreSQL, MySQL, Sybase và MS Access  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục II.4.a liệt kê các HQTCSDL thường gặp: Oracle, Paradox, MS Access, Sybase, Foxpro, SQL Server, MySQL, PostgreSQL...
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người coi Excel là HQTCSDL hoặc nhầm lẫn giữa Web Server/Hệ điều hành với DBMS.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy danh sách phần mềm DBMS chuẩn vs các phần mềm ứng dụng bảng tính/tiện ích`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Excel, Word, Windows, Photoshop KHÔNG PHẢI là DBMS!

---

### Câu 21 [db-c1-t1-021]

Ví dụ danh bạ điện thoại cá nhân (gồm Họ tên, Số điện thoại, Địa chỉ) được quản lý bằng phần mềm Access. Đâu là CSDL và đâu là HQTCSDL?

- **A.** Tập hợp dữ liệu họ tên/số điện thoại là CSDL, còn phần mềm Access chính là Hệ quản trị CSDL  *(Đáp án đúng)*
- **B.** Phần mềm Access chính là CSDL, còn tập hợp dữ liệu họ tên/số điện thoại là Hệ quản trị CSDL
- **C.** Cả phần mềm Access và dữ liệu danh bạ đều được định nghĩa là Cơ sở dữ liệu của người dùng
- **D.** Cả phần mềm Access và dữ liệu danh bạ đều được định nghĩa là Hệ quản trị CSDL của máy tính

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục II.4.a nêu chính xác ví dụ này: Tập hợp dữ liệu có liên quan ngữ nghĩa với nhau chính là CSDL, còn phần mềm Access/Excel lưu trữ và quản lý nó chính là HQTCSDL.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay gọi phần mềm Access là "một cơ sở dữ liệu Access".
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân biệt thực thể Dữ liệu (CSDL) vs Công cụ điều khiển (HQTCSDL)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Access = HQTCSDL; Nội dung các dòng danh bạ = CSDL.

---

### Câu 22 [db-c1-t1-022]

Điền vào chỗ trống: "Nhờ giảm thiểu sự trùng lặp thông tin đến mức thấp nhất, CSDL bảo đảm được (...) và (...)."

- **A.** Tốc độ quay của đĩa từ (rotation speed) và Dung lượng bộ nhớ đệm (cache size)
- **B.** Tính nhất quán (consistency) và Tính toàn vẹn của dữ liệu (integrity)  *(Đáp án đúng)*
- **C.** Băng thông đường truyền mạng (bandwidth) và Khả năng chịu nhiệt của vi xử lý
- **D.** Khả năng phục hồi mật khẩu tự động và Tự động viết lại mã nguồn ứng dụng web

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục II.1.b nêu rõ: Giảm thiểu sự trùng lặp thông tin đến mức thấp nhất, nhờ đó: Bảo đảm tính nhất quán (consistency) và Bảo đảm tính toàn vẹn của dữ liệu (integrity).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh dễ bị cuốn vào các yếu tố hiệu năng phần cứng CPU/Đĩa.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy hệ quả cốt lõi của giảm trùng lặp: Tính nhất quán + Tính toàn vẹn`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Giảm trùng lặp ➔ Đảm bảo NHẤT QUÁN + TOÀN VẸN!

---

### Câu 23 [db-c1-t1-023]

Cho 3 phát biểu về vai trò trong hệ CSDL:
(I) Chuyên viên tin học là người viết các ứng dụng trên nền CSDL.
(II) Người dùng cuối có quyền tạo và xóa các lược đồ quan hệ trong CSDL.
(III) DBA là người chịu trách nhiệm tối cao về an toàn dữ liệu.
Tổ hợp ĐÚNG là:

- **A.** Chỉ có duy nhất phát biểu (III) là đúng, phát biểu (I) và (II) đều sai
- **B.** Cả ba phát biểu (I), (II) và (III) đều hoàn toàn chính xác theo giáo trình
- **C.** Phát biểu (I) và (III) hoàn toàn đúng, phát biểu (II) hoàn toàn sai  *(Đáp án đúng)*
- **D.** Phát biểu (II) và (III) hoàn toàn đúng, phát biểu (I) hoàn toàn sai

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** (II) sai vì người dùng cuối (End-users) không có quyền tạo/xóa bảng dữ liệu; quyền này thuộc về DBA. (I) và (III) hoàn toàn đúng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm lẫn quyền DDL (tạo/xóa bảng) với quyền thao tác dữ liệu.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân quyền DDL: Người dùng cuối KHÔNG BAO GIỜ được phép tạo/xóa bảng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tạo/xóa cấu trúc bảng = Việc của DBA; Người dùng cuối chỉ thao tác biểu mẫu/báo cáo.

---

### Câu 24 [db-c1-t1-024]

Ngôn ngữ thao tác dữ liệu chuẩn mà các HQTCSDL hiện đại cung cấp cho người dùng có đặc tính nổi bật nào?

- **A.** Là ngôn ngữ lập trình kịch bản bắt buộc phải biên dịch ra mã máy trung gian
- **B.** Là ngôn ngữ máy mã nhị phân 0 và 1 để điều khiển trực tiếp đầu đọc đĩa từ
- **C.** Là hợp ngữ Assembly với các thanh ghi phần cứng và ngắt hệ thống chuyên dụng
- **D.** Là ngôn ngữ bậc cao phi thủ tục (Non-procedural Language như SQL chuẩn)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục II.4.b nêu rõ: HQTCSDL cung cấp ngôn ngữ bậc cao (thường là ngôn ngữ phi thủ tục - Non-procedural như SQL) giúp users truy xuất và thao tác CSDL.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm SQL là ngôn ngữ thủ tục (Procedural) như C/Java.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân loại ngôn ngữ: SQL là Non-procedural (Phi thủ tục: chỉ cần nói CẦN GÌ, không cần nói LÀM THẾ NÀO)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Ngôn ngữ chuẩn CSDL = Bậc cao PHI THỦ TỤC (Non-procedural / SQL)!

---

### Câu 25 [db-c1-t1-025]

Một công ty thương mại điện tử bị sập hệ thống khi có 100.000 khách hàng cùng bấm nút mua hàng trong sự kiện Flash Sale. Lỗi kỹ thuật này phản ánh việc DBMS chưa đáp ứng tốt yêu cầu nào?

- **A.** Khả năng kiểm soát truy cập tương tranh quy mô lớn và giải quyết tranh chấp tài nguyên  *(Đáp án đúng)*
- **B.** Khả năng lưu trữ văn bản Unicode tiếng Việt có dấu trong các cột họ tên khách hàng
- **C.** Khả năng tạo ra các biểu đồ hình cột thống kê doanh số trực quan cho phòng kế toán
- **D.** Khả năng nén dung lượng hình ảnh đại diện của sản phẩm khi người dùng tải ảnh lên

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Sập hệ thống khi nhiều người dùng cùng truy cập/cập nhật đồng thời là vấn đề của Kiểm soát truy cập tương tranh (Concurrency Control) và giải quyết tranh chấp tài nguyên của DBMS.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh bị lôi cuốn bởi các tính năng phụ trợ như nén ảnh, hiển thị biểu đồ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy năng lực xử lý tương tranh đồng thời quy mô lớn của DBMS trong thực tế`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.1.c & II.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đông người truy cập đồng thời gây nghẽn/sập ➔ Vấn đề Truy cập tương tranh (Concurrency)!

---

### Câu 26 [db-c1-t1-026]

Khái niệm "Mô hình dữ liệu" (Data Model) theo quan điểm toán học chuẩn xác trong giáo trình gồm 2 phần nào?

- **A.** Bao gồm 2 phần: Bảng mạch điện tử phần cứng và Tốc độ xung nhịp của bộ vi xử lý
- **B.** Bao gồm 2 phần: Ký hiệu mô tả dữ liệu và Tập hợp các phép toán trên dữ liệu đó  *(Đáp án đúng)*
- **C.** Bao gồm 2 phần: Cáp mạng truyền dẫn tín hiệu và Hệ điều hành máy chủ trung tâm
- **D.** Bao gồm 2 phần: Mật khẩu của người quản trị và Quyền truy cập các thư mục tệp

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục II.3.a định nghĩa: Mô hình dữ liệu là sự hình thức hóa toán học, gồm 2 phần: 1) Ký hiệu mô tả dữ liệu; và 2) Tập hợp các phép toán diễn tả ràng buộc và các phép xử lý trên dữ liệu.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh thường chỉ nhớ phần mô tả dữ liệu mà quên mất phần "Tập hợp các phép toán".
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy định nghĩa toán học 2 thành phần của Data Model: Ký hiệu mô tả + Phép toán`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Data Model = Ký hiệu mô tả dữ liệu + Tập phép toán xử lý.

---

### Câu 27 [db-c1-t1-027]

Thứ tự sắp xếp đúng của Kiến trúc 3 mức ANSI-SPARC theo chiều từ người dùng cuối đi sâu vào phần cứng lưu trữ là gì?

- **A.** Mức khái niệm (quan niệm) ➔ Mức khung nhìn (ngoài) ➔ Mức vật lý (trong)
- **B.** Mức vật lý (trong) ➔ Mức khái niệm (quan niệm) ➔ Mức khung nhìn (ngoài)
- **C.** Mức khung nhìn (ngoài) ➔ Mức khái niệm (quan niệm) ➔ Mức vật lý (trong)  *(Đáp án đúng)*
- **D.** Mức khung nhìn (ngoài) ➔ Mức vật lý (trong) ➔ Mức khái niệm (quan niệm)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Từ góc nhìn người dùng vào phần cứng: External/View Level (Mức ngoài) ➔ Conceptual Level (Mức khái niệm) ➔ Internal/Physical Level (Mức trong/vật lý).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm thứ tự giữa Mức ngoài và Mức khái niệm, hoặc đảo ngược trong - ngoài.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy chiều nhìn kiến trúc 3 mức ANSI-SPARC: Từ người dùng (Ngoài) đến đĩa cứng (Trong)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a & II.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Người dùng ➔ Khung nhìn (View/Ngoài) ➔ Khái niệm (Conceptual) ➔ Vật lý (Physical/Trong)!

---

### Câu 28 [db-c1-t1-028]

Mức biểu diễn nào trong kiến trúc 3 mức là sự trừu tượng hóa toàn bộ thế giới thực của tổ chức và là DUY NHẤT trong một hệ CSDL?

- **A.** Mức ứng dụng di động (Mobile Application Level của các lập trình viên)
- **B.** Mức khung nhìn (View Level / External Schema dành riêng từng cá nhân)
- **C.** Mức vật lý (Physical Level / Internal Schema của thiết bị đĩa từ)
- **D.** Mức khái niệm (Conceptual Level / Logical Schema của toàn bộ hệ thống)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình nêu rõ: Mức khái niệm mô tả toàn bộ CSDL một cách trừu tượng gần với người dùng, và chỉ có DUY NHẤT một lược đồ khái niệm cho một CSDL. Ngược lại, mức khung nhìn có thể có NHIỀU khung nhìn khác nhau.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ mỗi người dùng có 1 mức khái niệm riêng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tính duy nhất: Mức khái niệm là DUY NHẤT; Mức khung nhìn là ĐA DẠNG`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mức khái niệm = Duy nhất toàn hệ thống; Mức View = Nhiều góc nhìn riêng biệt!

---

### Câu 29 [db-c1-t1-029]

Khái niệm "Mức khung nhìn" (View Level / External Level) được định nghĩa chính xác là gì?

- **A.** Là cách nhìn, quan điểm riêng biệt của từng người sử dụng đối với CSDL mức khái niệm  *(Đáp án đúng)*
- **B.** Là cấu trúc các sector, track và khối byte lưu trữ trực tiếp trên phiến đĩa cứng vật lý
- **C.** Là sơ đồ tổng thể toàn bộ các bảng, các khóa ngoại và ràng buộc của cả cơ quan tổ chức
- **D.** Là giao diện đồ họa hiển thị các biểu đồ hình tròn của phần mềm văn phòng Microsoft Word

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình định nghĩa: Mức khung nhìn là cách nhìn, quan điểm của từng người sử dụng đối với CSDL mức khái niệm. Mỗi khung nhìn là một phần hoặc sự trừu tượng hóa một phần của CSDL mức khái niệm.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm View là toàn bộ CSDL hoặc nhầm với giao diện GUI của Word.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy góc nhìn cục bộ: View chỉ là một phần trừu tượng hóa của mức khái niệm`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* View Level = Góc nhìn riêng của từng người dùng trên một phần CSDL.

---

### Câu 30 [db-c1-t1-030]

Bản chất của "Tính độc lập dữ liệu vật lý" (Physical Data Independence) trong hệ thống CSDL là gì?

- **A.** Khả năng tháo rời ổ cứng khỏi máy tính mà chương trình phần mềm vẫn tiếp tục chạy được
- **B.** Khả năng thay đổi cấu trúc lưu trữ vật lý mà không cần thay đổi lược đồ mức khái niệm  *(Đáp án đúng)*
- **C.** Khả năng thay đổi các bảng ở mức khái niệm mà không cần viết lại các ứng dụng mức ngoài
- **D.** Khả năng chuyển đổi qua lại giữa hệ điều hành Windows và hệ điều hành máy Mac của Apple

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Độc lập dữ liệu vật lý: Khả năng sửa đổi lược đồ vật lý (chuyển đổi đĩa cứng, đổi cấu trúc file, thêm index) mà không làm thay đổi lược đồ mức khái niệm (và do đó không ảnh hưởng mức ngoài).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm Độc lập dữ liệu vật lý với Độc lập dữ liệu logic.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân biệt Độc lập dữ liệu Vật lý vs Độc lập dữ liệu Logic`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đổi đĩa/index không đổi Conceptual = Độc lập VẬT LÝ; Đổi Conceptual không đổi View = Độc lập LOGIC.

---

### Câu 31 [db-c1-t1-031]

Người quản trị CSDL quyết định tạo thêm chỉ mục B-Tree trên cột MaSV để tăng tốc độ tìm kiếm. Mức nào trong kiến trúc 3 mức bị thay đổi trực tiếp?

- **A.** Mức khung nhìn (External Level làm thay đổi toàn bộ các form nhập liệu)
- **B.** Mức khái niệm (Conceptual Level làm thay đổi định nghĩa các bảng dữ liệu)
- **C.** Mức vật lý (Physical Level / Internal Level lưu trữ cấu trúc tệp chỉ mục)  *(Đáp án đúng)*
- **D.** Cả ba mức vật lý, mức khái niệm và mức khung nhìn đều bị thay đổi đồng loạt

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Tạo thêm chỉ mục (Index) hoặc thay đổi cấu trúc tệp lưu trữ thuộc về Mức vật lý (Internal/Physical). Mức khái niệm và mức ngoài hoàn toàn không bị ảnh hưởng (minh chứng cho tính độc lập dữ liệu vật lý).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ tạo index làm thay đổi mức khái niệm hoặc tất cả các mức.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy vị trí tác động của Index: Index thuần túy nằm ở mức Vật lý`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Chỉ mục (Index), băm (Hash), file đĩa = MỨC VẬT LÝ (Internal Level)!

---

### Câu 32 [db-c1-t1-032]

Khi phòng Đào tạo quyết định thêm cột "NoiSinh" vào bảng SinhVien ở mức khái niệm. Nhờ tính độc lập dữ liệu logic, điều gì sẽ xảy ra?

- **A.** Toàn bộ sinh viên trong trường bắt buộc phải thi lại từ đầu để hệ thống đồng bộ
- **B.** Tất cả các chương trình ứng dụng cũ đều bị lỗi biên dịch và bắt buộc phải xóa đi
- **C.** Hệ quản trị CSDL sẽ tự động định dạng lại toàn bộ ổ cứng máy chủ để dọn chỗ lưu
- **D.** Các ứng dụng tra cứu điểm cũ không sử dụng cột NoiSinh vẫn hoạt động bình thường  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Tính độc lập dữ liệu logic (Logical Data Independence) bảo vệ các chương trình ứng dụng mức ngoài: khi mở rộng lược đồ khái niệm (thêm cột, thêm bảng), các View cũ không dùng cột đó vẫn giữ nguyên tính đúng đắn.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh quen với lập trình tệp tin: thêm 1 trường vào struct là code cũ hỏng hết.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy giá trị của Tính độc lập dữ liệu logic trong kiến trúc ANSI-SPARC`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thêm cột mới ở Conceptual ➔ Ứng dụng cũ không dùng cột đó VẪN CHẠY BÌNH THƯỜNG!

---

### Câu 33 [db-c1-t1-033]

Khẳng định nào sau đây là ĐÚNG khi nói về mối quan hệ giữa Mức vật lý và Mức khái niệm?

- **A.** Mức vật lý chính là sự cài đặt cụ thể của mức khái niệm trên thiết bị lưu trữ tin  *(Đáp án đúng)*
- **B.** Mức khái niệm là sự cài đặt cụ thể của mức vật lý trong hệ điều hành máy tính
- **C.** Mức vật lý và mức khái niệm là hai khái niệm độc lập không hề có liên hệ gì với nhau
- **D.** Mức vật lý luôn luôn được định nghĩa trước khi người thiết kế xây dựng mức khái niệm

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục II.3.a ghi rõ: HQTCSDL cung cấp khả năng định nghĩa dữ liệu ở mức khái niệm để mô tả sơ đồ quan niệm. Mức vật lý là sự cài đặt cụ thể của mức khái niệm.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay bị nhầm thứ tự thiết kế: tưởng thiết kế file vật lý trước rồi mới đến khái niệm.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy quan hệ cài đặt: Mức vật lý là sự CÀI ĐẶT CỤ THỂ của mức khái niệm`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mức khái niệm (Thiết kế logic) ➔ Mức vật lý (Cài đặt lưu trữ cụ thể xuống đĩa)!

---

### Câu 34 [db-c1-t1-034]

Cho các nhận định về kiến trúc ba mức của hệ CSDL:
(I) Mức khung nhìn còn được gọi là mức ngoài (External Level).
(II) Mỗi hệ thống CSDL chỉ có thể có duy nhất một khung nhìn.
(III) Mức vật lý mô tả cách lưu trữ dữ liệu thực tế trên đĩa.
Tổ hợp ĐÚNG là:

- **A.** Cả ba nhận định (I), (II) và (III) đều hoàn toàn chính xác theo sách
- **B.** Nhận định (I) và nhận định (III) hoàn toàn đúng, nhận định (II) sai  *(Đáp án đúng)*
- **C.** Chỉ có duy nhất nhận định (I) là đúng, nhận định (II) và (III) sai
- **D.** Nhận định (II) và nhận định (III) hoàn toàn đúng, nhận định (I) sai

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** (II) sai vì một hệ CSDL có thể có NHIỀU khung nhìn (External Views) cho các nhóm người dùng khác nhau. (I) và (III) hoàn toàn đúng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh đọc lướt nhận định (II) dễ tưởng mỗi CSDL chỉ có 1 View.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy số lượng: 1 Conceptual Schema DUY NHẤT, nhưng CÓ NHIỀU External Views`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Có thể có VÔ SỐ khung nhìn (Views) cho từng người dùng, không bao giờ chỉ có duy nhất 1 View.

---

### Câu 35 [db-c1-t1-035]

Điền vào chỗ trống: "Sự trừu tượng hóa thế giới thực gần với người dùng CSDL được biểu diễn ở (...), còn các loại tệp giao dịch, tệp chỉ dẫn được biểu diễn ở (...)."

- **A.** Mức khung nhìn (View) ... Mức khái niệm (Conceptual)
- **B.** Mức vật lý (Physical) ... Mức khái niệm (Conceptual)
- **C.** Mức khái niệm (Conceptual) ... Mức vật lý (Physical)  *(Đáp án đúng)*
- **D.** Mức khái niệm (Conceptual) ... Mức khung nhìn (View)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình chỉ rõ: Mức khái niệm là sự trừu tượng hóa thế giới thực gần với người dùng. Mức vật lý chứa các loại tệp dữ liệu, tệp giao dịch, tệp chỉ dẫn...
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh dễ điền ngược thứ tự giữa Khái niệm và Vật lý.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy nội dung tương ứng của các mức trong kiến trúc 3 mức`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Trừu tượng hóa thế giới thực = Khái niệm; Tệp dữ liệu/giao dịch = Vật lý!

---

### Câu 36 [db-c1-t1-036]

Nhân viên thu ngân chỉ nhìn thấy thông tin hóa đơn và tổng tiền, không được phép nhìn thấy giá vốn sản phẩm. Kỹ thuật này thể hiện chức năng của mức nào?

- **A.** Mức hệ điều hành (Operating System Level kiểm soát cổng giao tiếp chuột)
- **B.** Mức vật lý (Physical Level giúp tối ưu hóa số vòng quay của đĩa cứng)
- **C.** Mức khái niệm (Conceptual Level giúp lưu trữ toàn bộ các bảng trong CSDL)
- **D.** Mức khung nhìn (View Level giúp bảo mật và trừu tượng hóa dữ liệu cục bộ)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giới hạn trường thông tin cho từng nhóm người dùng (che giấu giá vốn, chỉ hiển thị giá bán) là vai trò trực tiếp của Mức khung nhìn (View/External Level).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ bảo mật chỉ nằm ở hệ điều hành hoặc mức vật lý.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy chức năng bảo mật phân quyền thông qua Khung nhìn (Views)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Che giấu cột nhạy cảm đối với người dùng cụ thể = MỨC KHUNG NHÌN (View)!

---

### Câu 37 [db-c1-t1-037]

Khẳng định nào sau đây là KHÔNG ĐÚNG khi nói về kiến trúc ba mức của hệ CSDL?

- **A.** Người sử dụng cuối luôn tương tác trực tiếp với các khối dữ liệu ở mức vật lý  *(Đáp án đúng)*
- **B.** Kiến trúc ba mức giúp phân tách rõ ràng giữa việc sử dụng và việc cài đặt CSDL
- **C.** Nhờ kiến trúc ba mức, dữ liệu có được tính độc lập vật lý và độc lập logic cao
- **D.** Mỗi khung nhìn ở mức ngoài là một sự trừu tượng hóa của CSDL mức khái niệm

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Người dùng cuối KHÔNG BAO GIỜ tương tác trực tiếp với mức vật lý; họ tương tác thông qua mức ngoài (khung nhìn) và các ứng dụng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh không để ý khẳng định sai "tương tác trực tiếp với các khối dữ liệu vật lý".
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tương tác mức: Người dùng KHÔNG THỂ tương tác trực tiếp mức vật lý`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Người dùng chỉ nhìn thấy Khung nhìn ngoài, hoàn toàn bị che giấu mức vật lý.

---

### Câu 38 [db-c1-t1-038]

Khoa học cơ sở dữ liệu phân chia các mô hình dữ liệu thành 3 nhóm lớn. Mô hình nào sau đây thuộc nhóm "Mô hình logic trên cơ sở ĐỐI TƯỢNG"?

- **A.** Mô hình quan hệ (Relational Model) và Mô hình phân cấp (Hierarchical Model)
- **B.** Mô hình thực thể mối quan hệ (ER Model) và Mô hình hướng đối tượng (OODM)  *(Đáp án đúng)*
- **C.** Mô hình mạng (Network Model) và Mô hình cơ sở dữ liệu quan hệ (RDBMS)
- **D.** Mô hình hợp nhất (Unified Model) và Mô hình bộ nhớ khung (Frame Memory)

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục III.1.b phân loại 3 nhóm:
a) Logic trên cơ sở đối tượng: ER, OODM, Semantic, Functional.
b) Logic trên cơ sở bản ghi: Relational, Network, Hierarchical.
c) Vật lý: Mô hình hợp nhất, mô hình bộ nhớ khung.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm Mô hình quan hệ (Relational) vào nhóm hướng đối tượng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân loại 3 nhóm mô hình dữ liệu: Đối tượng vs Bản ghi vs Vật lý`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* ER & OODM = Logic ĐỐI TƯỢNG; Quan hệ, Mạng, Phân cấp = Logic BẢN GHI!

---

### Câu 39 [db-c1-t1-039]

Nhóm "Mô hình dữ liệu logic trên cơ sở BẢN GHI" (Record-based logical model) bao gồm chính xác các mô hình nào?

- **A.** Mô hình hợp nhất, Mô hình bộ nhớ khung và Mô hình cơ sở dữ liệu ngữ nghĩa
- **B.** Mô hình thực thể kết hợp (ER), Mô hình hướng đối tượng và Mô hình mạng
- **C.** Mô hình quan hệ (Relational), Mô hình mạng (Network) và Mô hình phân cấp  *(Đáp án đúng)*
- **D.** Mô hình chức năng, Mô hình quan hệ thực thể và Mô hình hướng đối tượng

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục III.1.b: Mô hình logic trên cơ sở bản ghi gồm: Mô hình quan hệ, Mô hình mạng, Mô hình phân cấp.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm ER Model vào nhóm bản ghi vì tưởng ER có chứa các bản ghi.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân nhóm Record-based: Chỉ có Quan hệ, Mạng, Phân cấp`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Bản ghi (Record-based) = Quan hệ + Mạng + Phân cấp.

---

### Câu 40 [db-c1-t1-040]

Trong Mô hình mạng (Network Model), phát biểu nào sau đây về "Loại liên hệ" (Set type) là HOÀN TOÀN ĐÚNG?

- **A.** Ký hiệu bằng hình thoi kép, mũi tên luôn luôn đi hai chiều qua lại đối xứng nhau
- **B.** Ký hiệu bằng hình chữ nhật, có các mũi tên đi từ Loại mẫu tin thành viên đến Chủ
- **C.** Ký hiệu bằng đường viền kẻ đôi, không có bất kỳ chiều mũi tên liên kết nào cả
- **D.** Ký hiệu bằng hình bầu dục, có các mũi tên đi từ Loại mẫu tin chủ đến Thành viên  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục III.2.a ghi rõ: Loại liên hệ ký hiệu bằng hình bầu dục, với các mũi tên đi từ loại mẫu tin chủ ➔ loại mẫu tin thành viên.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh rất hay nhầm chiều mũi tên đi từ Thành viên về Chủ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy hình dáng và chiều mũi tên trong Set Type của Network Model`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Hình bầu dục, mũi tên ĐI TỪ CHỦ ➔ THÀNH VIÊN!

---

### Câu 41 [db-c1-t1-041]

Nhược điểm lớn nhất khiến Mô hình mạng (Network Model) không thích hợp để biểu diễn các CSDL quy mô lớn là gì?

- **A.** Đồ thị có hướng hạn chế khả năng diễn đạt ngữ nghĩa khi liên hệ thực tế phức tạp  *(Đáp án đúng)*
- **B.** Mô hình mạng không cho phép lưu trữ bất kỳ thuộc tính nào của mẫu tin thành viên
- **C.** Mô hình mạng bắt buộc phải sử dụng các máy tính có kết nối mạng cáp quang quốc tế
- **D.** Mô hình mạng chỉ cho phép một mẫu tin thành viên có tối đa một mẫu tin chủ duy nhất

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình nhận xét mục III.2.a: Nhược điểm của mô hình mạng là không thích hợp biểu diễn CSDL quy mô lớn, vì đồ thị có hướng hạn chế khả năng diễn đạt ngữ nghĩa của dữ liệu, nhất là các mối liên hệ phức tạp.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm đặc điểm 1 chủ của mô hình phân cấp gán sang mô hình mạng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy nhược điểm đồ thị có hướng phức tạp của Network Model`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đồ thị có hướng chằng chịt ➔ Hạn chế diễn đạt ngữ nghĩa CSDL quy mô lớn!

---

### Câu 42 [db-c1-t1-042]

Đặc trưng cấu trúc cốt lõi phân biệt Mô hình phân cấp (Hierarchical Model) với Mô hình mạng (Network Model) là gì?

- **A.** Mô hình phân cấp là cấu trúc Đồ thị (Graph), mỗi nút con có thể có vô số nút cha
- **B.** Mô hình phân cấp là cấu trúc Cây (Tree), mỗi nút con chỉ có đúng một nút cha  *(Đáp án đúng)*
- **C.** Mô hình phân cấp lưu trữ dữ liệu dạng bảng phẳng hai chiều gồm cột và dòng dữ liệu
- **D.** Mô hình phân cấp cho phép kế thừa bội giữa các lớp đối tượng trong toàn hệ thống

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục III.2.b: Mô hình phân cấp là một CÂY (Tree), giữa nút cha và nút con liên hệ theo quan hệ 1-nhiều. Một nút con chỉ có duy nhất một nút cha. Mô hình mạng cho phép 1 thành viên có nhiều chủ (đồ thị).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn cấu trúc giữa Cây (1 cha) và Đồ thị (nhiều cha).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy cấu trúc Cây vs Đồ thị: Phân cấp = Cây (1 cha duy nhất)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.2.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Phân cấp = CÂY ➔ Con chỉ có 1 CHA duy nhất!

---

### Câu 43 [db-c1-t1-043]

Hạn chế lớn nhất của Mô hình phân cấp trong việc mô hình hóa thực tế doanh nghiệp là gì?

- **A.** Không thể thực hiện các phép toán thêm mới và sửa đổi dữ liệu của các nút con
- **B.** Không hỗ trợ lưu trữ các trường dữ liệu kiểu số nguyên và kiểu chuỗi ký tự
- **C.** Rất khó khăn khi biểu diễn trực tiếp các mối quan hệ nhiều - nhiều (N - N)  *(Đáp án đúng)*
- **D.** Bắt buộc toàn bộ các máy tính trong mạng phải chạy chung một hệ điều hành Unix

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Do ràng buộc cấu trúc cây (mỗi nút con chỉ có 1 nút cha duy nhất), mô hình phân cấp rất khó khăn khi mô hình hóa các mối liên kết Nhiều - Nhiều (N - N). Muốn biểu diễn phải nhân đôi dữ liệu gây dư thừa.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh không liên hệ được giữa quy tắc "1 nút cha" với sự bất lực khi biểu diễn quan hệ N-N.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy biểu diễn quan hệ Nhiều-Nhiều (N-N) trong Mô hình phân cấp`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.2.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Chỉ có 1 cha ➔ Không thể trực tiếp diễn đạt quan hệ Nhiều-Nhiều (N-N)!

---

### Câu 44 [db-c1-t1-044]

Trong Mô hình thực thể kết hợp (ER Model), sự khác biệt căn bản giữa "Thực thể mạnh" và "Thực thể yếu" là gì?

- **A.** Thực thể mạnh không bao giờ có thể tham gia vào bất kỳ mối kết hợp nào của sơ đồ
- **B.** Thực thể mạnh có ít thuộc tính hơn và luôn luôn ký hiệu bằng đường viền kẻ đôi
- **C.** Thực thể yếu là thực thể chứa khóa chính, còn thực thể mạnh chỉ chứa khóa ngoại
- **D.** Thực thể yếu phụ thuộc tồn tại vào thực thể khác, ký hiệu bằng đường viền kẻ đôi  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục III.3.a ghi rõ: Thực thể yếu (Weak Entity): sự tồn tại phụ thuộc vào thực thể khác (VD: ThanNhan phụ thuộc NhanVien), ký hiệu bằng đường viền kẻ đôi. Thực thể mạnh ký hiệu bằng đường viền kẻ đơn.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm ký hiệu viền kẻ đôi cho thực thể mạnh hoặc nhầm bản chất khóa.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Thực thể yếu: Phụ thuộc tồn tại + Viền kẻ đôi (Double outline)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Yếu = Phụ thuộc tồn tại + Viền kẻ đôi!

---

### Câu 45 [db-c1-t1-045]

Thuật ngữ "Số ngôi của mối kết hợp" (Degree of Relationship) trong mô hình ER được định nghĩa chuẩn xác là gì?

- **A.** Là tổng số các loại thực thể cùng tham gia vào mối kết hợp đó trong sơ đồ ER  *(Đáp án đúng)*
- **B.** Là số lượng các thuộc tính tối đa được phép khai báo bên trong mối kết hợp đó
- **C.** Là số lượng các bản ghi thực tế đang được lưu trữ bên trong cơ sở dữ liệu đĩa
- **D.** Là số lượng khóa chính của các thực thể tham gia vào mối kết hợp nhân đôi lên

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục III.3.a ghi rõ: Số ngôi của mối kết hợp (Degree) là tổng số loại thực thể tham gia vào mối kết hợp đó (ví dụ: mối kết hợp 2 ngôi - Binary, 3 ngôi - Ternary).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm Degree (số ngôi) với Cardinality (bậc số lượng 1-1, 1-n, n-n) hoặc số thuộc tính.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy số ngôi (Degree) vs Bậc số lượng (Cardinality)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Số ngôi (Degree) = Số lượng THỰC THỂ tham gia vào mối kết hợp!

---

### Câu 46 [db-c1-t1-046]

Mối kết hợp (Relationship) trong mô hình ER có thể có thuộc tính riêng của nó hay không?

- **A.** Không, tuyệt đối chỉ có các thực thể mới được phép khai báo các thuộc tính riêng
- **B.** Có, mối kết hợp hoàn toàn có thể có thuộc tính riêng mô tả cho sự liên kết đó  *(Đáp án đúng)*
- **C.** Chỉ có mối kết hợp giữa hai thực thể yếu với nhau mới được phép có thuộc tính riêng
- **D.** Chỉ có mối kết hợp một ngôi đệ quy mới được phép khai báo duy nhất một thuộc tính

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục III.3.a khẳng định rõ ràng: "Mối kết hợp cũng có thể có thuộc tính riêng" (ví dụ: mối kết hợp "Hoc" giữa SinhVien và MonHoc có thuộc tính riêng là DiemThi).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Rất nhiều học viên cho rằng chỉ Entity mới có attribute, còn Relationship chỉ là đường nối.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy khẳng định tuyệt đối: Mối kết hợp HOÀN TOÀN CÓ THỂ có thuộc tính riêng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Quan hệ có thuộc tính riêng: Ví dụ SVien học MHoc có thuộc tính DIEM!

---

### Câu 47 [db-c1-t1-047]

Cơ sở lý thuyết toán học nền tảng của Mô hình dữ liệu quan hệ (Relational Model do E.F. Codd đề xuất 1970) là gì?

- **A.** Dựa trên lý thuyết giải tích hàm và chuỗi Fourier biến đổi tín hiệu liên tục
- **B.** Dựa trên lý thuyết đồ thị luồng mạng cực đại của Ford-Fulkerson trong toán rời rạc
- **C.** Dựa trên lý thuyết tập hợp của các quan hệ, tức là các tập k-bộ toán học phẳng  *(Đáp án đúng)*
- **D.** Dựa trên lý thuyết xác suất thống kê Bayes và mạng nơ-ron học sâu nhân tạo

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục III.4.a nêu rõ: Mô hình quan hệ dựa trên cơ sở khái niệm lý thuyết tập hợp của các quan hệ, tức là các tập k-bộ với k cố định. Dữ liệu được tổ chức thành các bảng gồm thuộc tính và bộ.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn lý thuyết đồ thị (vốn thuộc về Network model).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy nền tảng toán học của Codd: Lý thuyết tập hợp k-bộ (Set Theory of k-tuples)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mô hình quan hệ = Lý thuyết tập hợp các k-bộ (Relational Set Theory)!

---

### Câu 48 [db-c1-t1-048]

Đặc trưng cơ bản nào sau đây là của Mô hình hướng đối tượng (OODM) mà Mô hình quan hệ truyền thống KHÔNG CÓ?

- **A.** Khả năng đảm bảo tính toàn vẹn của dữ liệu bằng các phép kiểm tra giá trị
- **B.** Khả năng định nghĩa các trường dữ liệu kiểu số nguyên và kiểu chuỗi ký tự
- **C.** Khả năng liên kết giữa các bảng thông qua giá trị khóa chính và khóa ngoại
- **D.** Tính đóng gói (Encapsulation đóng gói cả dữ liệu lẫn phương thức hành vi)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục III.4.b: Đặc trưng của tiếp cận hướng đối tượng là: Tính đóng gói (gộp dữ liệu và phương thức), Tính đa hình, Tính kế thừa/tái sử dụng. Mô hình quan hệ truyền thống chỉ lưu dữ liệu tĩnh, không đóng gói phương thức.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm các đặc tính chung của hệ thống dữ liệu như kiểu dữ liệu, khóa.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy đặc trưng OODM: Encapsulation (dữ liệu + phương thức hành vi)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* OODM khác RDBMS ở chỗ: Có đóng gói Phương thức (Methods) cùng Dữ liệu!

---

### Câu 49 [db-c1-t1-049]

Hai mô hình nào sau đây đại diện cho nhóm "Mô hình dữ liệu VẬT LÝ" (Physical Data Model)?

- **A.** Mô hình hợp nhất (Unified Model) và Mô hình bộ nhớ khung (Frame Memory Model)  *(Đáp án đúng)*
- **B.** Mô hình thực thể kết hợp (ER Model) và Mô hình cơ sở dữ liệu quan hệ (RDBMS)
- **C.** Mô hình mạng (Network Model) và Mô hình dữ liệu phân cấp hình cây (Hierarchical)
- **D.** Mô hình hướng đối tượng (OODM) và Mô hình dữ liệu ngữ nghĩa (Semantic Model)

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục III.1.b chỉ rõ: Nhóm mô hình dữ liệu vật lý mô tả dữ liệu ở mức thấp nhất trong máy tính. Hai mô hình vật lý thường dùng là: Mô hình hợp nhất và Mô hình bộ nhớ khung.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Rất nhiều học viên không chú ý đến 2 mô hình vật lý này vì nghĩ vật lý chỉ có đĩa cứng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tên gọi 2 mô hình vật lý học thuật: Hợp nhất (Unified) & Bộ nhớ khung (Frame memory)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.1.b.c
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mô hình vật lý = Mô hình hợp nhất + Mô hình bộ nhớ khung!

---

### Câu 50 [db-c1-t1-050]

Cho các mô hình: (1) Mô hình mạng, (2) Mô hình ER, (3) Mô hình quan hệ, (4) Mô hình phân cấp, (5) Mô hình OODM. Thứ tự xuất hiện mang tính lịch sử là gì?

- **A.** Mô hình OODM ➔ Mô hình phân cấp ➔ Mô hình quan hệ ➔ Mô hình mạng viễn thông
- **B.** Mô hình phân cấp / mạng ➔ Mô hình quan hệ (1970) ➔ Mô hình ER / OODM  *(Đáp án đúng)*
- **C.** Mô hình ER ➔ Mô hình OODM ➔ Mô hình mạng ➔ Mô hình phân cấp ➔ Mô hình quan hệ
- **D.** Mô hình quan hệ ➔ Mô hình mạng ➔ Mô hình phân cấp ➔ Mô hình OODM ➔ Mô hình ER

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Thứ tự tiến hóa lịch sử: Mô hình phân cấp và mô hình mạng (thập niên 60) ➔ Mô hình quan hệ (Codd 1970) ➔ Mô hình ER (Chen 1976) và Mô hình hướng đối tượng OODM (thập niên 80-90 và tương lai).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ ER có từ đầu tiên hoặc nhầm OODM ra đời trước RDBMS.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy dòng thời gian tiến hóa của 5 mô hình cơ sở dữ liệu kinh điển`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III & IV
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tiến hóa: Phân cấp/Mạng (60s) ➔ Quan hệ (1970) ➔ ER (1976) ➔ OODM (80s-90s)!

---



---

## BỘ ĐỀ BẪY SỐ 2 (db-c1-t2)

> **Quy mô:** 50 câu hỏi bẫy vận dụng cao (100% Hard / Trick Questions)
> **Mã định danh:** `db-c1-t2-001` đến `db-c1-t2-050`

### Câu 1 [db-c1-t2-001]

Khi phân tích về nhược điểm "Dư thừa dữ liệu" (Data Redundancy) trong hệ thống tập tin, khẳng định nào sau đây là SAI?

- **A.** Dư thừa dữ liệu làm gia tăng chi phí lưu trữ phần cứng trên các ổ đĩa từ của trung tâm dữ liệu
- **B.** Dư thừa dữ liệu gây lãng phí rất nhiều công sức khi nhân viên phải nhập liệu lặp đi lặp lại
- **C.** Dư thừa dữ liệu chỉ gây tốn dung lượng ổ đĩa chứ hoàn toàn không dẫn đến sai lệch thông tin  *(Đáp án đúng)*
- **D.** Dư thừa dữ liệu là nguyên nhân gốc rễ dẫn đến tình trạng dữ liệu không nhất quán trong hệ thống

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Khẳng định "chỉ gây tốn dung lượng đĩa chứ không dẫn đến sai lệch thông tin" là hoàn toàn sai. Giáo trình chỉ rõ: Dư thừa dữ liệu dễ dẫn đến tình trạng dị thường (anomaly) và gây ra sự không nhất quán dữ liệu.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ dư thừa chỉ đơn thuần là tốn đĩa, xem nhẹ hậu quả sai lệch thông tin.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy từ ngữ giảm thiểu hóa "chỉ gây tốn đĩa chứ hoàn toàn không dẫn đến sai lệch"`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Dư thừa dữ liệu KHÔNG CHỈ tốn đĩa mà là nguồn gốc gây ra SAI LỆCH và DỊ THƯỜNG!

---

### Câu 2 [db-c1-t2-002]

Tính chất "All-or-Nothing" trong giao tác cơ sở dữ liệu dùng để khắc phục nhược điểm chí mạng nào của hệ thống tập tin?

- **A.** Sự giới hạn về số lượng ký tự tối đa được phép đặt tên cho các thư mục con trong hệ điều hành
- **B.** Chi phí đầu tư mua sắm các thiết bị lưu trữ ban đầu cho phòng máy chủ của công ty quá tốn kém
- **C.** Khó khăn trong việc tìm kiếm nhân sự có trình độ lập trình hợp ngữ Assembly để bảo trì hệ thống
- **D.** Khó khăn trong việc đảm bảo tính nguyên tố khi hệ thống gặp sự cố mất điện hay hỏng phần cứng  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Tính chất "All-or-Nothing" (hoặc thực hiện toàn bộ, hoặc không thực hiện gì) chính là Tính nguyên tố (Atomicity), giúp khắc phục nhược điểm không thể phục hồi trạng thái nhất quán khi có sự cố của hệ thống tập tin.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm All-or-Nothing với tính toàn vẹn (Integrity) hoặc an toàn dữ liệu.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thuật ngữ All-or-Nothing chính là nguyên lý Atomicity (Tính nguyên tố)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.c
  + 💡 *Mẹo phản xạ nhanh (`tip`):* All-or-Nothing = Tính nguyên tố (Atomicity) = Giao tác hoàn tất 100% hoặc Rollback!

---

### Câu 3 [db-c1-t2-003]

Tại sao việc các ràng buộc toàn vẹn bị nhúng cứng vào từng chương trình trong hệ thống tập tin lại bị coi là nhược điểm chí mạng?

- **A.** Vì khi quy tắc nghiệp vụ thay đổi, lập trình viên phải sửa đổi và kiểm thử lại toàn bộ các phần mềm  *(Đáp án đúng)*
- **B.** Vì làm cho kích thước tệp tin thực thi (.exe) vượt quá giới hạn 64KB của bộ nhớ vi xử lý máy tính
- **C.** Vì hệ điều hành mạng sẽ tự động khóa quyền truy cập tệp tin khi phát hiện có nhiều câu lệnh IF...ELSE
- **D.** Vì người sử dụng cuối sẽ nhìn thấy toàn bộ mã nguồn lập trình và vô tình sửa đổi các thuật toán đó

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình nêu rõ: Khi các quy tắc ràng buộc nằm rải rác trong mã nguồn của nhiều chương trình khác nhau, nếu có ràng buộc mới hoặc thay đổi quy tắc quản lý, việc sửa đổi đồng loạt toàn bộ mã nguồn là cực kỳ khó khăn, tốn kém và dễ sót lỗi.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh bị đánh lạc hướng sang giới hạn bộ nhớ hoặc cơ chế khóa tệp của OS.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy chi phí bảo trì và sửa đổi phần mềm khi nhúng cứng ràng buộc nghiệp vụ`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.d
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Nhúng ràng buộc vào code = Sửa luật kinh doanh phải sửa lại TOÀN BỘ ứng dụng!

---

### Câu 4 [db-c1-t2-004]

Điền thuật ngữ: "Sự không đầy đủ của thông tin cần lưu trữ, thiếu cơ chế phân cấp người dùng và thiếu sao lưu dự phòng thể hiện (...)."

- **A.** Dị thường xóa thông tin do thiếu trường khóa chính của bản ghi
- **B.** Tính không toàn vẹn và kém an toàn dữ liệu trong hệ thống tập tin  *(Đáp án đúng)*
- **C.** Hiện tượng bế tắc tranh chấp tài nguyên giữa các luồng xử lý CPU
- **D.** Sự vi phạm tính trừu tượng hóa mức khái niệm của lược đồ quan hệ

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục I.1.b.f: Tính không toàn vẹn, an toàn dữ liệu thể hiện sự không đầy đủ của thông tin so với yêu cầu quản lý; an toàn dữ liệu bao gồm bảo mật, phân cấp người dùng và sao lưu dự phòng (backup).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn "Dị thường xóa" hoặc "Vi phạm tính trừu tượng".
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy định nghĩa mục f trong 6 nhược điểm của File Processing System`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.f
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thiếu thông tin + Thiếu phân cấp + Thiếu backup = Không toàn vẹn & Kém an toàn!

---

### Câu 5 [db-c1-t2-005]

Cho 3 phát biểu về hệ thống xử lý tập tin:
(I) Dư thừa dữ liệu là nguyên nhân trực tiếp dẫn tới không nhất quán.
(II) Hệ thống tập tin xử lý giao tác ngân hàng an toàn hơn CSDL.
(III) Tập tin phù hợp với bài toán nhỏ, chi phí đầu tư ban đầu thấp.
Tổ hợp ĐÚNG là:

- **A.** Chỉ có duy nhất phát biểu (III) là đúng, phát biểu (I) và (II) là sai
- **B.** Cả ba phát biểu (I), (II) và (III) đều hoàn toàn chính xác giáo trình
- **C.** Phát biểu (I) và (III) hoàn toàn đúng, phát biểu (II) sai hoàn toàn  *(Đáp án đúng)*
- **D.** Phát biểu (II) và (III) hoàn toàn đúng, phát biểu (I) sai hoàn toàn

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** (II) sai vì hệ thống tập tin không có cơ chế giao tác ACID và khóa tương tranh, cực kỳ nguy hiểm nếu dùng cho giao tác ngân hàng. (I) và (III) đúng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh đọc nhanh tưởng hệ thống tập tin an toàn cho ngân hàng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phát biểu sai hiển nhiên về độ an toàn của hệ thống tập tin trong ngân hàng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.a & I.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Giao tác ngân hàng bắt buộc phải dùng CSDL với ACID, tuyệt đối không dùng tệp tin!

---

### Câu 6 [db-c1-t2-006]

Một hệ thống vé tàu hỏa lưu dữ liệu bằng các tệp tin Word/Excel riêng lẻ. Khi hai hành khách ở hai đại lý cùng đặt chỗ ngồi số 15A tại cùng một giây, hiện tượng xấu nhất xảy ra là gì?

- **A.** Hệ thống sẽ tự động chuyển đổi định dạng tệp tin Excel sang cơ sở dữ liệu quan hệ Oracle tức thì
- **B.** Hệ điều hành máy chủ sẽ tự động in thêm một ghế phụ bằng nhựa trên toa tàu thực tế cho khách ngồi
- **C.** Toàn bộ mạng lưới đường sắt quốc gia sẽ tự động ngừng hoạt động để kỹ thuật viên kiểm tra ray
- **D.** Dị thường truy cập tương tranh dẫn đến bán trùng vé cùng một ghế cho cả hai hành khách khác nhau  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Không có cơ chế khóa tương tranh (Concurrency Control), hai tiến trình cùng đọc ghế trống và cùng ghi nhận thành công, dẫn đến bán trùng ghế (Double Booking Anomaly).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh không hình dung được kịch bản Double Booking do thiếu Transaction Lock.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy dị thường truy cập tương tranh đồng thời trong bài toán bán vé`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.e
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Không có khóa (Lock) ➔ 2 người cùng đặt 1 chỗ ➔ Trùng vé (Double Booking)!

---

### Câu 7 [db-c1-t2-007]

Khẳng định nào sau đây là KHÔNG ĐÚNG khi nói về việc chia sẻ dữ liệu trong phương pháp xử lý tập tin?

- **A.** Dữ liệu trong các tập tin có thể được chia sẻ rất dễ dàng và linh hoạt giữa các phần mềm độc lập  *(Đáp án đúng)*
- **B.** Dữ liệu thường bị cô lập bên trong các ứng dụng riêng biệt của từng phòng ban trong công ty
- **C.** Rất khó khăn khi cần kết xuất một báo cáo tổng hợp thông tin lấy từ nhiều tệp tin có định dạng khác nhau
- **D.** Khó mở rộng hoặc kết nối trao đổi dữ liệu tự động giữa hệ thống của cơ quan này với cơ quan khác

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình chỉ rõ: Phương pháp tập tin thiếu khả năng chia sẻ thông tin giữa các hệ thống, khó mở rộng hoặc kết nối với hệ thống khác. Khẳng định "chia sẻ rất dễ dàng" là sai.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh ngày nay quen gửi file qua email/chat nên tưởng tệp tin rất dễ chia sẻ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ngụy biện về khả năng chia sẻ dữ liệu: Tệp tin gây cô lập dữ liệu (Data Isolation)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.c
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Phương pháp tệp tin: Dữ liệu bị CÔ LẬP, KHÓ chia sẻ giữa các chương trình độc lập.

---

### Câu 8 [db-c1-t2-008]

Điền thuật ngữ: "Sự lặp đi lặp lại của thông tin được lưu trữ ở nhiều tập tin khác nhau trong cùng một tổ chức được gọi là (...)."

- **A.** Tính không nhất quán dữ liệu (Data Inconsistency gây xung đột thông tin)
- **B.** Tính dư thừa dữ liệu (Data Redundancy gây lãng phí không gian lưu trữ)  *(Đáp án đúng)*
- **C.** Tính phân mảnh dữ liệu ngang (Horizontal Fragmentation của bảng phân tán)
- **D.** Tính toàn vẹn tham chiếu (Referential Integrity giữa khóa chính và khóa ngoại)

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Định nghĩa chuẩn mục I.1.b.a: Tính dư thừa dữ liệu (Data Redundancy) là sự lặp đi lặp lại của thông tin được lưu trữ ở nhiều tập tin khác nhau trong cùng một tổ chức.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn nhầm "Tính không nhất quán".
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân biệt định nghĩa Redundancy (sự lặp lại) vs Inconsistency (sự sai lệch)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Lặp đi lặp lại ở nhiều nơi = DƯ THỪA (Data Redundancy)!

---

### Câu 9 [db-c1-t2-009]

Tại sao việc xóa một tập tin trong hệ thống xử lý tập tin có thể gây hậu quả nghiêm trọng cho các chương trình khác?

- **A.** Vì xóa tệp tin sẽ làm giảm điện áp hoạt động của bộ nguồn máy tính xuống mức nguy hiểm
- **B.** Vì hệ điều hành sẽ tự động định dạng lại toàn bộ ổ cứng khi có một tệp văn bản bị xóa đi
- **C.** Vì các chương trình khác phụ thuộc vào cấu trúc tệp đó sẽ bị sập do không tìm thấy đường dẫn  *(Đáp án đúng)*
- **D.** Vì người quản trị mạng sẽ bị tước quyền truy cập vào bảng điều khiển máy chủ vĩnh viễn

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Trong hệ thống tập tin, sự phụ thuộc giữa chương trình và dữ liệu (Program-Data Dependence) rất chặt chẽ: mã nguồn nhúng cứng đường dẫn và định dạng tệp, khi tệp bị xóa hoặc đổi cấu trúc, chương trình sẽ lập tức báo lỗi và sập.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ đến các lỗi phần cứng hoặc hệ thống máy tính.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Program-Data Dependence (Sự phụ thuộc dữ liệu và chương trình)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Phụ thuộc chương trình - dữ liệu: Đổi file hoặc xóa file ➔ Ứng dụng sập ngay!

---

### Câu 10 [db-c1-t2-010]

Bẫy nhận định: Trong các phát biểu sau đây về lịch sử phát triển của hệ thống thông tin, phát biểu nào là ĐÚNG?

- **A.** Hệ cơ sở dữ liệu quan hệ ra đời vào thập niên 1920 cùng thời điểm phát minh ra bóng bán dẫn
- **B.** Ngay từ thập niên 1940, các hệ quản trị cơ sở dữ liệu quan hệ SQL đã hoàn toàn thay thế tệp tin
- **C.** Đến nay, phương pháp xử lý tập tin đã bị cấm sử dụng hoàn toàn trong mọi ứng dụng tin học cá nhân
- **D.** Giai đoạn thập niên 60s đến 80s là thời kỳ phương pháp xử lý tập tin được sử dụng rộng rãi nhất  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục I.1.a nêu rõ: Phương pháp xử lý tập tin được sử dụng rộng rãi trong suốt những năm 60s - 80s của thế kỷ XX trước khi các HQTCSDL quan hệ trở nên phổ biến.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn mốc thời gian sai như 1940 hay nghĩ tệp tin đã bị cấm hoàn toàn.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy mốc lịch sử chuẩn mực: 60s - 80s của thế kỷ XX`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Xử lý tập tin phổ biến vào những năm 60s - 80s của thế kỷ 20.

---

### Câu 11 [db-c1-t2-011]

Một công ty chuyển từ hệ thống tệp tin sang CSDL quan hệ. Lợi ích trực tiếp lớn nhất về mặt "Sử dụng tài nguyên" là gì?

- **A.** Tiết kiệm dung lượng lưu trữ đĩa cứng nhờ loại bỏ dữ liệu dư thừa và giảm chi phí bảo trì  *(Đáp án đúng)*
- **B.** Giúp các màn hình máy tính của nhân viên tự động tăng độ phân giải lên chuẩn sắc nét 4K
- **C.** Giúp máy in văn phòng có thể in ấn với tốc độ nhanh gấp mười lần mà không lo bị kẹt giấy
- **D.** Giúp nhân viên không cần phải sử dụng bàn phím máy tính nữa mà điều khiển hoàn toàn bằng giọng nói

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục II.1.b ghi rõ về hiệu quả sử dụng thông tin: Tiết kiệm tài nguyên: Giảm thiểu dung lượng lưu trữ và chi phí bảo trì nhờ loại bỏ dữ liệu dư thừa.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh dễ bị phân tâm bởi các phương án công nghệ nghe hấp dẫn nhưng phi lý.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy lợi ích tài nguyên thực tế: Giảm dung lượng đĩa + Giảm chi phí bảo trì`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Loại bỏ dư thừa ➔ Tiết kiệm dung lượng đĩa + Giảm chi phí bảo trì!

---

### Câu 12 [db-c1-t2-012]

Cho 3 mệnh đề về sự không nhất quán dữ liệu:
(I) Phát sinh do cùng thông tin nhưng cập nhật ở tệp này mà quên tệp khác.
(II) Luôn luôn có thể phát hiện và sửa chữa tự động bằng lệnh của DOS.
(III) Gây ra các quyết định sai lầm trong quản lý và điều hành doanh nghiệp.
Mệnh đề ĐÚNG là:

- **A.** Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn chính xác giáo trình
- **B.** Mệnh đề (I) và (III) hoàn toàn đúng, mệnh đề (II) hoàn toàn sai lệch  *(Đáp án đúng)*
- **C.** Chỉ có duy nhất mệnh đề (I) là đúng, mệnh đề (II) và (III) là sai sót
- **D.** Mệnh đề (II) và (III) hoàn toàn đúng, mệnh đề (I) hoàn toàn sai lệch

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** (II) sai vì lệnh hệ điều hành (DOS/Windows) không thể hiểu được ngữ nghĩa dữ liệu để tự động sửa chữa sự không nhất quán giữa các tệp. (I) và (III) đúng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh tưởng lệnh hệ điều hành có thể tự động sửa lỗi logic dữ liệu.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy nhận thức: OS không thể tự hiểu ngữ nghĩa để giải quyết Data Inconsistency`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Hệ điều hành chỉ thấy các byte dữ liệu thô, không thể tự sửa dữ liệu không nhất quán.

---

### Câu 13 [db-c1-t2-013]

Tình huống: Một bảng điểm sinh viên được lưu ở 3 tệp riêng tại Khoa, Phòng Đào tạo và Phòng Công tác sinh viên. Khi sinh viên khiếu nại và được sửa điểm tại Khoa nhưng 2 phòng kia không sửa, hệ thống rơi vào trạng thái gì?

- **A.** Trạng thái an toàn tuyệt đối vì điểm gốc của sinh viên vẫn còn lưu tại phòng Đào tạo
- **B.** Trạng thái bế tắc chết (Deadlock) làm treo toàn bộ máy chủ của toàn bộ trường đại học
- **C.** Trạng thái không nhất quán dữ liệu do cùng một sinh viên nhưng có 2 mức điểm khác nhau  *(Đáp án đúng)*
- **D.** Trạng thái lỗi vật lý cung từ làm hỏng phiến đĩa từ lưu trữ tệp tin của phòng Đào tạo

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Cùng một đối tượng (sinh viên và môn học) nhưng tại cùng thời điểm có các giá trị khác nhau giữa các tệp ➔ Định nghĩa chính xác của Không nhất quán dữ liệu (Data Inconsistency).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn Deadlock hoặc nhầm là an toàn do có bản sao lưu.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tình huống thực tế: Điểm số mâu thuẫn giữa các phòng ban = Data Inconsistency`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mỗi phòng một điểm ➔ Không nhất quán dữ liệu (Data Inconsistency)!

---

### Câu 14 [db-c1-t2-014]

Đặc trưng nào sau đây KHÔNG PHẢI là ưu điểm của cách tiếp cận Cơ sở dữ liệu so với hệ thống tập tin?

- **A.** Khả năng chia sẻ thông tin cao cho nhiều người dùng và nhiều ứng dụng cùng khai thác đồng thời
- **B.** Giảm thiểu tối đa sự trùng lặp thông tin, đảm bảo tính nhất quán và tính toàn vẹn của dữ liệu
- **C.** Dữ liệu có thể được truy xuất theo nhiều cách khác nhau, không bị ràng buộc bởi cấu trúc đơn lẻ
- **D.** Chi phí đầu tư ban đầu về phần cứng, phần mềm và đào tạo nhân sự luôn luôn rẻ hơn tệp tin  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Chi phí đầu tư cho CSDL ban đầu (mua bản quyền DBMS, máy chủ cấu hình cao, đào tạo DBA) thường ĐẮT HƠN nhiều so với hệ thống tập tin. Nói "luôn rẻ hơn" là ngụy biện sai.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ CSDL hiện đại thì cái gì cũng tốt hơn kể cả chi phí ban đầu.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy chi phí đầu tư ban đầu: CSDL đòi hỏi chi phí lớn hơn nhiều so với File System`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.a & II.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* CSDL rất mạnh nhưng chi phí đầu tư ban đầu LỚN HƠN hệ thống tập tin.

---

### Câu 15 [db-c1-t2-015]

So sánh giữa CSDL và Hệ quản trị CSDL, phát biểu nào sau đây thể hiện ĐÚNG bản chất quan hệ bao hàm giữa chúng?

- **A.** CSDL là tập hợp dữ liệu được quản lý, còn Hệ quản trị CSDL là hệ thống phần mềm quản lý  *(Đáp án đúng)*
- **B.** Hệ quản trị CSDL là tập hợp các bảng dữ liệu, còn CSDL là phần mềm chứa các bảng đó
- **C.** CSDL là một ứng dụng di động, còn Hệ quản trị CSDL là máy chủ phần cứng đặt ở chi nhánh
- **D.** CSDL và Hệ quản trị CSDL hoàn toàn không có mối liên hệ bao hàm hay phụ thuộc nào cả

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục II.4.a nêu rõ: HQTCSDL là phần mềm dùng để tạo lập, quản lý và xử lý dữ liệu. CSDL là một thành phần bên trong HQTCSDL.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nói ngược: tưởng CSDL là phần mềm bao hàm HQTCSDL.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy mối quan hệ bao hàm giữa Database và DBMS`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* HQTCSDL là phần mềm quản lý; CSDL là dữ liệu nằm trong phần mềm đó.

---

### Câu 16 [db-c1-t2-016]

Nhiệm vụ nào sau đây KHÔNG THUỘC trách nhiệm của Người quản trị cơ sở dữ liệu (DBA)?

- **A.** Khai báo cấu trúc lược đồ bảng và thiết lập các ràng buộc toàn vẹn của cơ sở dữ liệu
- **B.** Trực tiếp ngồi nhập từng hóa đơn bán lẻ hàng ngày thay cho nhân viên thu ngân tại quầy  *(Đáp án đúng)*
- **C.** Cấp phát quyền hạn truy cập dữ liệu và quản lý các chính sách bảo mật của toàn hệ thống
- **D.** Thiết lập chính sách sao lưu dự phòng dữ liệu định kỳ và xử lý khắc phục khi gặp sự cố

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Nhập hóa đơn bán lẻ hàng ngày là công việc của Người dùng cuối (Naive End-Users/Thu ngân), tuyệt đối không phải nhiệm vụ chuyên môn của người quản trị DBA.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh bị phân tâm giữa các thao tác dữ liệu nghiệp vụ hàng ngày với nhiệm vụ DBA.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân định trách nhiệm: DBA làm việc ở mức hệ thống, không làm việc của End-user`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* DBA: Tổ chức CSDL, bảo mật, phân quyền, backup; KHÔNG ngồi nhập hóa đơn!

---

### Câu 17 [db-c1-t2-017]

Chuyên viên tin học biết khai thác CSDL (Application Programmers) đóng vai trò then chốt nào trong hệ sinh thái CSDL?

- **A.** Cấp phát tài khoản đăng nhập máy chủ và quyết định thu hồi quyền hạn của người quản trị DBA
- **B.** Chịu trách nhiệm bảo dưỡng các đường dây cáp mạng và thay thế các ổ cứng hỏng của máy chủ
- **C.** Xây dựng các chương trình ứng dụng và giao diện phục vụ các nhu cầu nghiệp vụ của người dùng  *(Đáp án đúng)*
- **D.** Trực tiếp quyết định doanh thu bán hàng và ký duyệt báo cáo tài chính của hội đồng quản trị

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục II.2.a: Chuyên viên tin học (Programmers) hiểu biết về lập trình và cách khai thác CSDL, có nhiệm vụ xây dựng các ứng dụng phục vụ nhiều mục đích khác nhau trên nền tảng CSDL.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm vai trò lập trình viên với nhân viên bảo trì mạng hoặc DBA.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy vai trò cốt lõi của Application Programmers: Viết phần mềm ứng dụng trên nền CSDL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Lập trình viên = Xây dựng ứng dụng và giao diện khai thác CSDL cho người dùng cuối.

---

### Câu 18 [db-c1-t2-018]

Điền thuật ngữ: "Trong các HQTCSDL, việc điều khiển sự khớp, tính toàn vẹn khi chuyển hóa dữ liệu và khi có sự cố hệ thống được đảm bảo bởi chức năng (...)."

- **A.** Định dạng lại phiến đĩa từ theo chuẩn phân vùng của Linux
- **B.** Tự động tăng xung nhịp xử lý của vi điều khiển trung tâm
- **C.** Mã hóa đường truyền cáp quang theo tiêu chuẩn quân sự
- **D.** Quản lý giao tác và an toàn dữ liệu của Hệ quản trị CSDL  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục II.4.b nêu chức năng quản trị & điều khiển: "Quản lý giao tác (transaction), phân quyền và an toàn dữ liệu... Điều khiển sự khớp, tính toàn vẹn khi chuyển hóa dữ liệu và khi có sự cố hệ thống."
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn các thuật ngữ phần cứng vi điều khiển hoặc phân vùng đĩa.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy chức năng quản lý giao tác (Transaction Management) của DBMS`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Toàn vẹn khi có sự cố + Điều khiển khớp = Chức năng Quản lý giao tác (Transaction)!

---

### Câu 19 [db-c1-t2-019]

Khi một bệnh viện lớn cần lưu trữ hồ sơ bệnh án của hàng triệu bệnh nhân, yếu tố nào chứng minh Excel KHÔNG THỂ thay thế DBMS?

- **A.** Excel không có cơ chế phân quyền bảo mật nhiều tầng và không hỗ trợ giao tác ACID đồng thời  *(Đáp án đúng)*
- **B.** Excel không cho phép in hồ sơ ra giấy nếu máy tính chưa được cài đặt phần mềm Adobe Acrobat
- **C.** Excel bắt buộc bác sĩ phải nhập tên thuốc bằng ngôn ngữ máy nhị phân 0 và 1 rất phức tạp
- **D.** Excel không thể lưu trữ các con số có giá trị lớn hơn một trăm ngàn trong các ô bảng tính

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Hồ sơ bệnh án đòi hỏi tính bảo mật phân quyền nghiêm ngặt (bác sĩ khoa nào xem khoa đó) và tính toàn vẹn giao tác ACID (nhiều bác sĩ/y tá cùng cập nhật đồng thời). Excel hoàn toàn thiếu các cơ chế này.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn các lý do phi thực tế như giới hạn con số hoặc in ấn.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy lý do Excel không thể dùng cho hệ thống lớn: Thiếu bảo mật đa tầng & ACID`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.1.c & II.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Hệ thống lớn bắt buộc DBMS vì cần: Bảo mật đa tầng + Giao tác ACID đồng thời!

---

### Câu 20 [db-c1-t2-020]

Nhận định nào sau đây là ĐÚNG khi nói về chức năng "Kiểm tra độ tin cậy của dữ liệu trước khi lưu trữ" của DBMS?

- **A.** DBMS sẽ tự động gọi điện thoại cho khách hàng để xác minh danh tính trước khi lưu thông tin
- **B.** DBMS tự động kiểm tra các ràng buộc toàn vẹn hợp lệ trước khi chính thức ghi dữ liệu xuống đĩa  *(Đáp án đúng)*
- **C.** DBMS bắt buộc phải gửi dữ liệu sang máy chủ của hãng Microsoft để kiểm tra chứng thực số
- **D.** DBMS sẽ từ chối lưu trữ mọi bản ghi nếu dung lượng ổ cứng của máy chủ còn trống dưới 90%

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục II.4.b: DBMS có chức năng kiểm tra độ tin cậy của dữ liệu trước khi lưu trữ, thể hiện qua việc kiểm tra các ràng buộc toàn vẹn (Integrity Constraints) như kiểu dữ liệu, khóa chính, khóa ngoại, miền giá trị.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm "kiểm tra độ tin cậy" với việc xác thực danh tính bên ngoài.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ngữ nghĩa "Kiểm tra độ tin cậy" chính là kiểm tra các ràng buộc toàn vẹn`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Kiểm tra độ tin cậy = Kiểm tra ràng buộc toàn vẹn (NOT NULL, CHECK, FK...) trước khi ghi!

---

### Câu 21 [db-c1-t2-021]

Bẫy ngụy biện: "Một công ty chỉ có duy nhất 1 nhân viên văn phòng sử dụng máy tính độc lập để ghi chú chi tiêu cá nhân thì BẮT BUỘC phải cài đặt hệ quản trị Oracle quy mô lớn." Khẳng định này là:

- **A.** Đúng, vì hệ thống xử lý tập tin đã bị pháp luật cấm lưu hành hoàn toàn trên thị trường từ năm 1990
- **B.** Đúng, vì mọi bài toán liên quan đến con số trong xã hội đều bắt buộc phải sử dụng phần mềm Oracle
- **C.** Sai, vì với bài toán nhỏ độc lập, dùng tệp tin hoặc bảng tính đơn giản tiết kiệm và hiệu quả hơn  *(Đáp án đúng)*
- **D.** Sai, vì công ty bắt buộc phải thuê tối thiểu năm chuyên gia DBA túc trực mới được phép mở máy

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình khẳng định: Phương pháp tập tin phù hợp với các bài toán nhỏ độc lập vì thời gian triển khai ngắn, chi phí thấp. Áp dụng DBMS cồng kềnh cho việc đơn giản cá nhân là lãng phí và không phù hợp.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay bị định kiến CSDL luôn là lựa chọn bắt buộc cho mọi trường hợp.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy áp dụng công nghệ thái quá: Bài toán nhỏ độc lập thì File Processing vẫn tối ưu`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục I.1.a & II.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Bài toán nhỏ, 1 người dùng ➔ File/Bảng tính đơn giản là tối ưu nhất, không cần DBMS!

---

### Câu 22 [db-c1-t2-022]

Cho các phát biểu về HQTCSDL:
(I) CSDL là một thành phần con bên trong HQTCSDL.
(II) Foxpro, MySQL, PostgreSQL đều là các HQTCSDL.
(III) HQTCSDL cung cấp ngôn ngữ phi thủ tục như SQL.
Tổ hợp ĐÚNG là:

- **A.** Phát biểu (II) và (III) hoàn toàn đúng, phát biểu (I) là sai
- **B.** Chỉ có phát biểu (I) và (III) là đúng, phát biểu (II) hoàn toàn sai
- **C.** Chỉ có duy nhất phát biểu (III) là đúng, phát biểu (I) và (II) sai
- **D.** Cả ba phát biểu (I), (II) và (III) đều hoàn toàn chính xác theo giáo trình  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Cả 3 phát biểu đều trích xuất chuẩn xác từ giáo trình mục II.4.a và II.4.b.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ Foxpro là ngôn ngữ lập trình chứ không phải DBMS.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy danh sách HQTCSDL lịch sử: Foxpro nằm trong danh mục giáo trình`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.4.a & II.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Cả 3 phát biểu đều đúng 100% chuẩn giáo trình!

---

### Câu 23 [db-c1-t2-023]

Hai khả năng cơ bản của DBMS được so sánh tương đương với thành phần nào trong hệ thống máy tính?

- **A.** Quản lý dữ liệu ở mức xử lý tệp tương đương với một hệ điều hành chuyên dụng  *(Đáp án đúng)*
- **B.** Khả năng tính toán dấu phẩy động tương đương với bộ xử lý đồ họa card màn hình
- **C.** Khả năng truyền nhận gói tin tương đương với card mạng không dây chuẩn Wi-Fi
- **D.** Khả năng làm mát dữ liệu tương đương với quạt tản nhiệt của thùng máy chủ

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục II.4.b ghi rõ: Khả năng quản lý dữ liệu ở mức xử lý tệp NHƯ MỘT HỆ ĐIỀU HÀNH CHUYÊN DỤNG.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm với GPU hoặc card mạng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy so sánh năng lực DBMS: Như một hệ điều hành chuyên dụng (Specialized OS)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Quản lý tệp như một HỆ ĐIỀU HÀNH CHUYÊN DỤNG!

---

### Câu 24 [db-c1-t2-024]

Điền vào chỗ trống: "Khả năng truy xuất dữ liệu theo nhiều cách khác nhau mà không bị gò bó bởi cấu trúc tệp đơn lẻ thể hiện tính (...) của CSDL."

- **A.** Bất biến tuyệt đối của cấu trúc phần cứng lưu trữ trên bo mạch
- **B.** Linh hoạt và khả năng chia sẻ thông tin cao giữa nhiều ứng dụng  *(Đáp án đúng)*
- **C.** Phụ thuộc chặt chẽ giữa mã nguồn phần mềm và vị trí vật lý đĩa
- **D.** Độc quyền truy cập của duy nhất một người sử dụng trong hệ thống

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục II.1.b: Dữ liệu có thể được truy xuất theo nhiều cách khác nhau, khả năng chia sẻ thông tin cao cho nhiều người dùng và ứng dụng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh bị lúng túng giữa tính linh hoạt và tính phụ thuộc.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ưu điểm về mặt truy xuất thông tin của CSDL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Truy xuất theo nhiều cách khác nhau ➔ Tính linh hoạt và chia sẻ thông tin cao!

---

### Câu 25 [db-c1-t2-025]

Trong quy trình cấp phát quyền hạn, nếu DBA cấp quyền cho nhân viên A được sửa bảng Khách hàng nhưng cấm nhân viên B sửa, cơ chế nào của DBMS đảm bảo điều này?

- **A.** Cơ chế giảm tốc độ quạt gió của CPU khi phát hiện nhân viên B đăng nhập
- **B.** Cơ chế tự động ngắt kết nối chuột của máy tính nhân viên B khi thao tác
- **C.** Cơ chế bảo mật và phân quyền khai thác thông tin chi tiết của DBMS  *(Đáp án đúng)*
- **D.** Cơ chế xóa toàn bộ tệp tin cấu hình mạng của máy tính mà nhân viên B dùng

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** DBMS quản lý bảo mật và phân quyền (Authorization/Access Control) ở mức hạt nhân CSDL, kiểm tra từng câu lệnh trước khi thực thi.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh bị phân tâm bởi các phương án phần cứng phi lý.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy cơ chế bảo mật phân quyền chi tiết (Access Control) của DBMS`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.1.c & II.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Cho A sửa, cấm B sửa = Cơ chế bảo mật và phân quyền của DBMS!

---

### Câu 26 [db-c1-t2-026]

Mô hình CSDL mức khái niệm (Conceptual Schema) còn được gọi phổ biến bằng thuật ngữ học thuật nào?

- **A.** Sơ đồ mạng nội bộ kết nối dây cáp giữa các máy tính trong công ty
- **B.** Sơ đồ chỉ mục vật lý của các khối sector trên bề mặt phiến đĩa từ
- **C.** Sơ đồ giao diện đồ họa hiển thị màu sắc của các biểu mẫu nhập liệu
- **D.** Sơ đồ quan niệm (mô hình quan niệm trừu tượng của toàn bộ hệ thống)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục II.3.a: HQTCSDL cung cấp khả năng định nghĩa dữ liệu ở mức này để mô tả sơ đồ quan niệm (thường gọi là mô hình CSDL).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm Sơ đồ quan niệm với Sơ đồ vật lý hoặc Sơ đồ mạng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thuật ngữ đồng nghĩa: Conceptual Schema chính là Sơ đồ quan niệm`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mức khái niệm (Conceptual) = Sơ đồ quan niệm (Conceptual Schema)!

---

### Câu 27 [db-c1-t2-027]

Khái niệm "Tính độc lập dữ liệu logic" (Logical Data Independence) đề cập đến khả năng nào sau đây?

- **A.** Khả năng thay đổi lược đồ mức khái niệm mà không cần thay đổi các chương trình ứng dụng mức ngoài  *(Đáp án đúng)*
- **B.** Khả năng thay đổi cấu trúc bảng đĩa cứng mà không cần khởi động lại nguồn điện của máy tính chủ
- **C.** Khả năng thay đổi ngôn ngữ lập trình từ C++ sang Java mà không cần sửa chữa bất kỳ dòng lệnh nào
- **D.** Khả năng thay đổi địa chỉ IP của máy chủ dữ liệu mà các máy in trong cơ quan vẫn in ấn bình thường

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Độc lập dữ liệu logic là khả năng sửa đổi lược đồ mức khái niệm (ví dụ: thêm bảng, thêm cột không liên quan) mà không cần thay đổi các lược đồ mức ngoài (khung nhìn) và các chương trình ứng dụng hiện có.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh rất hay nhầm lẫn định nghĩa của Độc lập logic với Độc lập vật lý.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ranh giới: Độc lập logic là giữa Mức khái niệm và Mức ngoài/Ứng dụng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Sửa Conceptual không đổi External/App = Độc lập dữ liệu LOGIC!

---

### Câu 28 [db-c1-t2-028]

Tệp chỉ dẫn (Index File) và Tệp giao dịch (Transaction Log) được xếp vào mức biểu diễn nào trong kiến trúc 3 mức ANSI-SPARC?

- **A.** Mức khái niệm (Conceptual Level mô tả mối quan hệ giữa các thực thể)
- **B.** Mức vật lý (Physical Level / Internal Level quản lý cấu trúc lưu trữ)  *(Đáp án đúng)*
- **C.** Mức khung nhìn (View Level hiển thị các cột dữ liệu cho người xem)
- **D.** Mức ứng dụng kinh doanh (Business Application Level của lập trình viên)

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình bảng mục II.3.a nêu rõ: Mức vật lý bao gồm các loại tệp dữ liệu, tệp giao dịch, tệp chỉ dẫn... theo cấu trúc nào đó trên thiết bị lưu trữ.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay xếp Tệp giao dịch vào mức khái niệm vì nghĩ giao dịch là nghiệp vụ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy vị trí lưu trữ tệp giao dịch và tệp chỉ dẫn: Thuần túy mức Vật lý`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tệp chỉ dẫn (Index), Tệp giao dịch (Log) = MỨC VẬT LÝ!

---

### Câu 29 [db-c1-t2-029]

Sơ đồ luồng truy vấn chuẩn xác trong kiến trúc 3 mức ANSI-SPARC khi người dùng tương tác là gì?

- **A.** User ➔ Lược đồ khái niệm (Conceptual) ➔ Khung nhìn (View) ➔ Lược đồ vật lý (Physical)
- **B.** User ➔ Lược đồ vật lý (Physical) ➔ Lược đồ khái niệm (Conceptual) ➔ Khung nhìn (View)
- **C.** User ➔ Khung nhìn (View) ➔ Lược đồ khái niệm (Conceptual) ➔ Lược đồ vật lý (Physical)  *(Đáp án đúng)*
- **D.** User ➔ Khung nhìn (View) ➔ Lược đồ vật lý (Physical) ➔ Lược đồ khái niệm (Conceptual)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục II.3.b minh họa rõ: User 1 -> View 1 ┐
User 2 -> View 2 ├ -> CSDL mức khái niệm -> CSDL mức vật lý.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh bị nhầm lẫn thứ tự truy xuất giữa Khái niệm và Vật lý.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy sơ đồ luồng kiến trúc 3 mức từ người dùng đến lưu trữ`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* User ➔ View ➔ Conceptual ➔ Physical!

---

### Câu 30 [db-c1-t2-030]

Khi di chuyển toàn bộ dữ liệu CSDL từ ổ đĩa cơ HDD sang ổ đĩa bán dẫn SSD tốc độ cao, tính chất nào đảm bảo ứng dụng không phải viết lại mã nguồn?

- **A.** Tính đa hình trong lập trình hướng đối tượng (Polymorphism)
- **B.** Tính độc lập dữ liệu logic (Logical Data Independence)
- **C.** Tính nguyên tố của giao tác thanh toán (Transaction Atomicity)
- **D.** Tính độc lập dữ liệu vật lý (Physical Data Independence)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Thay đổi phần cứng lưu trữ hoặc cấu trúc tệp đĩa mà không làm thay đổi lược đồ khái niệm và chương trình ứng dụng là giá trị cốt lõi của Tính độc lập dữ liệu vật lý.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nhầm sang Tính độc lập dữ liệu logic.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy nhận diện Độc lập vật lý: Đổi HDD sang SSD hoàn toàn là mức vật lý`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thay đổi ổ đĩa lưu trữ (HDD -> SSD) = Tính độc lập dữ liệu VẬT LÝ!

---

### Câu 31 [db-c1-t2-031]

Khẳng định nào sau đây là SAI khi nói về Mức khung nhìn (View Level)?

- **A.** Mỗi khung nhìn bắt buộc phải chứa đầy đủ 100% tất cả các bảng và các cột của mức khái niệm  *(Đáp án đúng)*
- **B.** Mỗi khung nhìn là một phần hoặc sự trừu tượng hóa một phần của CSDL mức khái niệm
- **C.** Mức khung nhìn cho phép che giấu những dữ liệu nhạy cảm đối với từng nhóm người dùng
- **D.** Một cơ sở dữ liệu có thể có nhiều khung nhìn khác nhau phục vụ các phòng ban khác nhau

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Khẳng định "bắt buộc chứa đầy đủ 100% tất cả các bảng và cột" là SAI. Bản chất của View là chỉ trích xuất một phần hoặc trừu tượng hóa một phần dữ liệu cần thiết cho người dùng đó.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh bị bẫy bởi từ khẳng định tuyệt đối "bắt buộc phải chứa đầy đủ 100%".
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy từ ngữ tuyệt đối hóa: View KHÔNG BAO GIỜ bắt buộc phải chứa 100% dữ liệu`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khung nhìn (View) chỉ là một phần (subset) của CSDL mức khái niệm.

---

### Câu 32 [db-c1-t2-032]

Cho 3 mệnh đề về kiến trúc 3 mức:
(I) Mức khái niệm gần với người dùng hơn mức vật lý.
(II) Mức vật lý là sự cài đặt cụ thể của mức khái niệm.
(III) Mức khái niệm thay đổi thì mức vật lý bắt buộc phải bị xóa đi.
Mệnh đề ĐÚNG là:

- **A.** Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn chính xác giáo trình
- **B.** Mệnh đề (I) và (II) hoàn toàn đúng, mệnh đề (III) hoàn toàn sai lệch  *(Đáp án đúng)*
- **C.** Chỉ có duy nhất mệnh đề (I) là đúng, mệnh đề (II) và (III) là sai sót
- **D.** Mệnh đề (II) và (III) hoàn toàn đúng, mệnh đề (I) hoàn toàn sai lệch

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** (III) sai vì khi sửa mức khái niệm, mức vật lý chỉ được cập nhật cấu trúc hoặc bảng dữ liệu tương ứng chứ không bị xóa đi. (I) và (II) đúng chuẩn giáo trình.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh đọc lướt mệnh đề (III) dễ tưởng thay đổi khái niệm là phải xóa sạch đĩa.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy khẳng định cực đoan: Mức vật lý không bị xóa sạch khi sửa mức khái niệm`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mức vật lý là cài đặt cụ thể của mức khái niệm; sửa khái niệm chỉ cập nhật ánh xạ.

---

### Câu 33 [db-c1-t2-033]

Mô hình dữ liệu thực thể liên kết (ER Model) thường được các kỹ sư sử dụng chủ yếu để thiết kế CSDL ở mức biểu diễn nào?

- **A.** Mức khung nhìn (View Level mô tả định dạng font chữ của các biểu mẫu)
- **B.** Mức vật lý (Physical Level mô tả vị trí các sector và cluster trên đĩa)
- **C.** Mức khái niệm (Conceptual Level mô tả thực thể, mối quan hệ và thuộc tính)  *(Đáp án đúng)*
- **D.** Mức vi mạch điện tử (Electronic Circuit Level của các chip bán dẫn nhớ)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình bảng mục II.3.a ghi rõ: Mức khái niệm (mô hình ER): Sự trừu tượng hóa thế giới thực gần với người dùng CSDL... mô tả sơ đồ quan niệm.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm ER Model là mức ngoài hoặc mức vật lý.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy vị trí ứng dụng của Mô hình ER: Chuẩn mực ở Mức Khái Niệm`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mô hình ER = Công cụ thiết kế ở MỨC KHÁI NIỆM (Conceptual Level)!

---

### Câu 34 [db-c1-t2-034]

Điền thuật ngữ: "Mô hình dữ liệu là sự hình thức hóa toán học, bao gồm (...) và (...)."

- **A.** Ngôn ngữ lập trình ... Trình biên dịch mã máy nhị phân hệ thống
- **B.** Cấu trúc ổ đĩa cứng ... Băng thông mạng Internet của nhà cung cấp
- **C.** Tên người sử dụng ... Mật khẩu mã hóa MD5 của tài khoản quản trị
- **D.** Ký hiệu mô tả dữ liệu ... Tập hợp các phép toán trên dữ liệu đó  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Định nghĩa chuẩn mục II.3.a: Mô hình dữ liệu là sự hình thức hóa toán học, gồm 2 phần: 1) Ký hiệu mô tả dữ liệu; và 2) Tập hợp các phép toán diễn tả ràng buộc và các phép xử lý trên dữ liệu.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn các yếu tố phần cứng mạng hoặc mật khẩu.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy định nghĩa 2 thành phần cốt lõi của Mô hình dữ liệu`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mô hình dữ liệu = Ký hiệu mô tả + Tập phép toán!

---

### Câu 35 [db-c1-t2-035]

Nếu không có kiến trúc 3 mức ANSI-SPARC, mỗi khi người quản trị phân chia lại dữ liệu trên hai ổ cứng khác nhau thì điều gì sẽ xảy ra?

- **A.** Toàn bộ các chương trình ứng dụng của công ty sẽ bị lỗi và phải viết lại toàn bộ mã nguồn  *(Đáp án đúng)*
- **B.** Hệ thống mạng Internet toàn cầu sẽ bị ngắt kết nối trong suốt thời gian bảo trì phân chia đĩa
- **C.** Các bảng dữ liệu trong CSDL sẽ tự động biến thành các tệp văn bản thô không có cấu trúc
- **D.** Người quản trị sẽ không thể đăng nhập lại vào máy chủ nếu không có chữ ký của giám đốc

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Thiếu tính độc lập dữ liệu vật lý (như trong hệ thống tập tin cũ), bất kỳ thay đổi nào ở mức đĩa cứng cũng buộc lập trình viên phải sửa đổi lại mã nguồn truy cập tệp trong chương trình ứng dụng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh không thấy được giá trị to lớn của tính độc lập dữ liệu nếu không có ANSI-SPARC.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy hậu quả khi mất Tính độc lập dữ liệu vật lý`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Không có ANSI-SPARC ➔ Đổi ổ cứng là phải viết lại toàn bộ phần mềm ứng dụng!

---

### Câu 36 [db-c1-t2-036]

Khẳng định nào sau đây là ĐÚNG khi so sánh số lượng giữa Lược đồ khái niệm và Lược đồ khung nhìn trong một hệ CSDL?

- **A.** Lược đồ khung nhìn là duy nhất, trong khi có thể có nhiều lược đồ khái niệm song song
- **B.** Lược đồ khái niệm là duy nhất, trong khi có thể có nhiều lược đồ khung nhìn khác nhau  *(Đáp án đúng)*
- **C.** Số lượng lược đồ khái niệm luôn luôn bằng chính xác số lượng lược đồ khung nhìn hiện có
- **D.** Mỗi hệ cơ sở dữ liệu bắt buộc chỉ có đúng duy nhất một lược đồ khái niệm và một khung nhìn

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục II.3.a khẳng định: Lược đồ khái niệm mô tả toàn bộ CSDL nên là DUY NHẤT. Lược đồ khung nhìn là cách nhìn riêng của từng người dùng nên CÓ THỂ CÓ NHIỀU.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nói ngược: cho rằng lược đồ khung nhìn là duy nhất.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy số lượng: 1 Conceptual duy nhất vs N External Views`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* 1 Khái niệm (duy nhất) ➔ N Khung nhìn (đa dạng)!

---

### Câu 37 [db-c1-t2-037]

Ánh xạ (Mapping) giữa Mức khái niệm và Mức vật lý do thành phần nào trong hệ thống CSDL chịu trách nhiệm duy trì và thực thi?

- **A.** Do nhà cung cấp dịch vụ mạng viễn thông quốc tế chịu trách nhiệm bảo đảm đường truyền
- **B.** Do người sử dụng cuối (End-Users) phải tự tay gõ lệnh chuyển đổi thủ công mỗi khi mở máy
- **C.** Do Hệ quản trị cơ sở dữ liệu (DBMS) tự động quản lý và chuyển đổi khi truy xuất dữ liệu  *(Đáp án đúng)*
- **D.** Do hệ điều hành Windows tự động chuyển đổi thông qua trình điều khiển thiết bị máy in

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** DBMS chịu trách nhiệm duy trì ánh xạ Khái niệm - Vật lý (Conceptual-to-Internal Mapping) và Khung nhìn - Khái niệm (External-to-Conceptual Mapping), giúp người dùng không cần biết chi tiết lưu trữ vật lý.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ lập trình viên hoặc hệ điều hành phải tự tay quản lý ánh xạ này.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy chủ thể quản lý Mapping: Chính là Hệ quản trị CSDL (DBMS)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục II.3.a & II.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Ánh xạ giữa các mức do chính HQTCSDL (DBMS) tự động đảm nhiệm!

---

### Câu 38 [db-c1-t2-038]

Khái niệm "Loại mẫu tin" (Record Type) trong Mô hình mạng (Network Model) được ký hiệu bằng hình vẽ chuẩn nào?

- **A.** Ký hiệu bằng hình tam giác đều ngược (đại diện cho quan hệ phân cấp cây thư mục)
- **B.** Ký hiệu bằng hình bầu dục (với các mũi tên đi từ chủ sang thành viên trong sơ đồ)
- **C.** Ký hiệu bằng hình thoi có viền kẻ đơn (đại diện cho các mối liên kết thực thể)
- **D.** Ký hiệu bằng hình chữ nhật (mỗi loại mẫu tin đặc trưng cho một đối tượng riêng biệt)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục III.2.a: Mỗi loại mẫu tin được ký hiệu bằng HÌNH CHỮ NHẬT. Loại liên hệ (Set type) mới được ký hiệu bằng HÌNH BẦU DỤC.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn giữa ký hiệu Loại mẫu tin (chữ nhật) và Loại liên hệ (bầu dục).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy hình học ký hiệu trong Mô hình mạng: Loại mẫu tin = Hình chữ nhật`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mẫu tin = Hình chữ nhật; Liên hệ = Hình bầu dục!

---

### Câu 39 [db-c1-t2-039]

Khẳng định nào sau đây là KHÔNG ĐÚNG khi nói về Mô hình phân cấp (Hierarchical Model)?

- **A.** Một nút con trong mô hình phân cấp có thể có cùng lúc nhiều nút cha khác nhau trong cây  *(Đáp án đúng)*
- **B.** Mô hình dữ liệu phân cấp là một cấu trúc Cây (Tree) với các nút biểu diễn tập thực thể
- **C.** Giữa nút cha và nút con trong mô hình phân cấp liên hệ theo mối quan hệ một - nhiều (1 - n)
- **D.** Mô hình phân cấp rất khó khăn khi cần biểu diễn các mối quan hệ nhiều - nhiều trong thực tế

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Khẳng định "nút con có thể có cùng lúc nhiều nút cha" là SAI HOÀN TOÀN. Định nghĩa cấu trúc cây của mô hình phân cấp: Mỗi nút con chỉ được phép có DUY NHẤT một nút cha.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm lẫn đặc tính nhiều cha của mô hình mạng gán cho mô hình phân cấp.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy cấu trúc cây phân cấp: Nút con TUYỆT ĐỐI chỉ có 1 nút cha duy nhất`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.2.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Phân cấp = CÂY ➔ Nút con chỉ có DUY NHẤT 1 nút cha!

---

### Câu 40 [db-c1-t2-040]

Trong mô hình ER, một thực thể ThanNhan (thân nhân của nhân viên) chỉ có thể tồn tại trong CSDL nếu nhân viên đó tồn tại. ThanNhan được định nghĩa là gì?

- **A.** Thực thể mạnh (Strong Entity) và được ký hiệu bằng hình chữ nhật có đường viền kẻ đơn
- **B.** Thực thể yếu (Weak Entity) và được ký hiệu bằng hình chữ nhật có đường viền kẻ đôi  *(Đáp án đúng)*
- **C.** Mối kết hợp đệ quy (Recursive Relationship) và được ký hiệu bằng hình thoi đơn viền
- **D.** Thuộc tính đa trị (Multi-valued Attribute) và được ký hiệu bằng hình bầu dục đôi viền

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục III.3.a nêu chính xác ví dụ: Thực thể yếu (Weak Entity): sự tồn tại phụ thuộc vào thực thể khác (VD: ThanNhan phụ thuộc vào NhanVien). Ký hiệu: đường viền kẻ đôi.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm ThanNhan là thực thể mạnh hoặc là mối kết hợp.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thực thể yếu: Phụ thuộc tồn tại + Ký hiệu viền đôi (Double border)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thân nhân phụ thuộc nhân viên = THỰC THỂ YẾU (Viền kẻ đôi)!

---

### Câu 41 [db-c1-t2-041]

Một mô hình dữ liệu hoàn chỉnh bắt buộc phải bao gồm đầy đủ 3 thành phần cốt lõi nào theo giáo trình?

- **A.** Mô tả tài khoản người dùng, Mô tả mật khẩu mã hóa dữ liệu, và Mô tả địa chỉ cổng máy chủ
- **B.** Mô tả cấu hình vi xử lý CPU, Mô tả dung lượng thanh nhớ RAM, và Mô tả tốc độ đường truyền
- **C.** Mô tả cấu trúc của CSDL, Mô tả các thao tác trên dữ liệu, và Mô tả các ràng buộc toàn vẹn  *(Đáp án đúng)*
- **D.** Mô tả phiên bản hệ điều hành, Mô tả phần mềm diệt virus máy tính, và Mô tả lịch sao lưu đĩa

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục III.1.a nêu rõ 3 thành phần của một mô hình dữ liệu: 1) Mô tả cấu trúc của CSDL; 2) Mô tả các thao tác trên dữ liệu; 3) Mô tả các ràng buộc toàn vẹn.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh thường quên thành phần "Ràng buộc toàn vẹn" hoặc nhầm sang cấu hình phần cứng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy 3 thành phần cấu thành một Data Model: Cấu trúc + Thao tác + Ràng buộc`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* 3 thành phần Data Model = Cấu trúc + Thao tác + Ràng buộc toàn vẹn!

---

### Câu 42 [db-c1-t2-042]

Thuật ngữ "Tập k-bộ" (Set of k-tuples) với k cố định là cơ sở toán học trực tiếp của mô hình dữ liệu nào?

- **A.** Mô hình hướng đối tượng với các lớp đối tượng và đa hình (OODM System)
- **B.** Mô hình cơ sở dữ liệu phân cấp hình cây (Hierarchical Data Model của IBM)
- **C.** Mô hình cơ sở dữ liệu mạng đồ thị có hướng (Network Model của CODASYL DBTG)
- **D.** Mô hình dữ liệu quan hệ (Relational Model do nhà khoa học E.F. Codd đề xuất)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục III.4.a: Mô hình quan hệ dựa trên cơ sở khái niệm lý thuyết tập hợp của các quan hệ, tức là các tập k-bộ với k cố định (k là bậc/số thuộc tính).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh không nhớ thuật ngữ "k-bộ" tương ứng với dòng/bản ghi trong mô hình quan hệ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thuật ngữ toán học k-bộ (k-tuples) = Mô hình Quan hệ`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tập k-bộ (k-tuple) = Mô hình QUAN HỆ (Relational Model)!

---

### Câu 43 [db-c1-t2-043]

Trong mô hình hướng đối tượng (OODM), tính chất cho phép một lớp con kế thừa đặc tính từ NHIỀU lớp cha khác nhau được gọi là gì?

- **A.** Kế thừa bội (Multiple Inheritance cho phép kế thừa thuộc tính và phương thức từ nhiều cha)  *(Đáp án đúng)*
- **B.** Tính đóng gói dữ liệu (Encapsulation đóng gói dữ liệu và phương thức trong một lớp đối tượng)
- **C.** Tính đa hình theo ngữ cảnh (Polymorphism cho phép định nghĩa lại hành vi của phương thức)
- **D.** Tính toàn vẹn thực thể (Entity Integrity bảo đảm các đối tượng không bị trùng lặp định danh)

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục III.4.b nêu rõ: Mô hình OODM sử dụng các khái niệm: Lớp (Class), đối tượng (Object), Sự kế thừa (Inheritance), KẾ THỪA BỘI (Multiple Inheritance).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn Tính đóng gói hoặc Đa hình.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thuật ngữ Kế thừa bội (Multiple Inheritance) trong OODM`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Kế thừa từ nhiều lớp cha = KẾ THỪA BỘI (Multiple Inheritance)!

---

### Câu 44 [db-c1-t2-044]

Điền thuật ngữ: "Mô hình dữ liệu ngữ nghĩa (Semantic Data Model) và Mô hình dữ liệu chức năng (Functional Data Model) được xếp vào nhóm (...)."

- **A.** Mô hình dữ liệu logic trên cơ sở bản ghi (Record-based logical model)
- **B.** Mô hình dữ liệu logic trên cơ sở đối tượng (Object-based logical model)  *(Đáp án đúng)*
- **C.** Mô hình dữ liệu mức vật lý lưu trữ thấp nhất trong hệ thống máy tính
- **D.** Mô hình dữ liệu phân tán không đồng nhất trên các nút mạng viễn thông

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục III.1.b phân loại rõ: Nhóm mô hình logic trên cơ sở đối tượng gồm: ER Model, Mô hình hướng đối tượng, Mô hình dữ liệu ngữ nghĩa, Mô hình dữ liệu chức năng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh ít chú ý đến Semantic Model và Functional Model nên hay đoán mò vào nhóm bản ghi.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân nhóm Semantic & Functional Data Model: Thuộc nhóm Logic ĐỐI TƯỢNG`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.1.b.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Semantic & Functional Model = Logic trên cơ sở ĐỐI TƯỢNG!

---

### Câu 45 [db-c1-t2-045]

Trong mô hình ER, một mối kết hợp giữa 3 loại thực thể: SinhVien, DeTai và GiaoVienHuongDan được gọi là mối kết hợp mấy ngôi?

- **A.** Mối kết hợp đơn ngôi đệ quy (Unary Relationship vì cùng thuộc về trường đại học)
- **B.** Mối kết hợp nhị phân hai ngôi (Binary Relationship vì chỉ có hai vai trò chính)
- **C.** Mối kết hợp ba ngôi (Ternary Relationship vì có đúng 3 loại thực thể tham gia)  *(Đáp án đúng)*
- **D.** Mối kết hợp đa cấp phân cấp (Hierarchical Relationship theo cấu trúc cây thư mục)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục III.3.a: Số ngôi của mối kết hợp (Degree) là tổng số loại thực thể tham gia vào mối kết hợp. Có 3 thực thể tham gia ➔ Mối kết hợp 3 ngôi (Ternary).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm với mối kết hợp nhị phân (2 ngôi) thông thường.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy xác định Số ngôi (Degree): Đếm số loại thực thể tham gia (3 thực thể = 3 ngôi)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* 3 thực thể cùng tham gia 1 mối kết hợp = Mối kết hợp 3 NGÔI (Ternary)!

---

### Câu 46 [db-c1-t2-046]

Khẳng định nào sau đây là KHÔNG ĐÚNG khi so sánh Mô hình quan hệ (Relational) và Mô hình hướng đối tượng (OODM)?

- **A.** Mô hình hướng đối tượng có cấu trúc lớp đóng gói cả thuộc tính trạng thái và phương thức hành vi
- **B.** Mô hình quan hệ lưu trữ dữ liệu dưới dạng các bảng hai chiều gồm các cột thuộc tính và các dòng bộ
- **C.** Mô hình hướng đối tượng hỗ trợ mạnh mẽ tính kế thừa và tái sử dụng mã nguồn phần mềm ứng dụng
- **D.** Mô hình quan hệ đóng gói chặt chẽ cả dữ liệu và các hàm phương thức bên trong các bảng  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Mô hình quan hệ truyền thống CHỈ LƯU TRỮ DỮ LIỆU TĨNH trong các bảng, hoàn toàn KHÔNG đóng gói phương thức hành vi (Methods). Khẳng định mô hình quan hệ đóng gói phương thức là SAI.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh đọc lướt không nhận ra sự ngụy biện khi gán tính Đóng gói phương thức cho Mô hình quan hệ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy đánh tráo khái niệm: Mô hình quan hệ KHÔNG CÓ Encapsulation của OOP`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.4.a & III.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mô hình quan hệ: CHỈ DỮ LIỆU; Mô hình OODM: DỮ LIỆU + PHƯƠNG THỨC!

---

### Câu 47 [db-c1-t2-047]

Cho các nhận định về mô hình ER:
(I) Thực thể yếu ký hiệu bằng đường viền kẻ đôi.
(II) Giữa 2 thực thể chỉ có thể có tối đa một mối kết hợp duy nhất.
(III) Mối kết hợp cũng có thể có thuộc tính riêng.
Tổ hợp ĐÚNG là:

- **A.** Nhận định (I) và (III) hoàn toàn đúng, nhận định (II) là sai  *(Đáp án đúng)*
- **B.** Cả ba nhận định (I), (II) và (III) đều hoàn toàn chính xác theo sách
- **C.** Chỉ có duy nhất nhận định (I) là đúng, nhận định (II) và (III) sai
- **D.** Nhận định (II) và (III) hoàn toàn đúng, nhận định (I) là sai

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** (II) sai vì giáo trình mục III.3.a nêu rõ: Giữa 2 thực thể CÓ THỂ CÓ NHIỀU MỐI KẾT HỢP (ví dụ: NhanVien và PhongBan vừa có mối kết hợp "LamViec", vừa có mối kết hợp "TruongPhong"). (I) và (III) đúng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Rất nhiều học viên lầm tưởng giữa 2 thực thể chỉ được phép nối 1 đường duy nhất.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy số lượng mối kết hợp: Giữa 2 thực thể CÓ THỂ CÓ NHIỀU mối kết hợp khác nhau`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Giữa 2 thực thể có thể có NHIỀU mối kết hợp (ví dụ: Nhân viên Làm việc tại và Quản lý phòng)!

---

### Câu 48 [db-c1-t2-048]

Ví dụ: Lớp MonHoc có quan hệ đệ quy "DieuKien" (môn học trước / môn học sau) trong hướng tiếp cận OODM. Bản chất của quan hệ này là gì?

- **A.** Mối liên hệ giữa một thực thể mạnh với một thực thể yếu trong mô hình ER
- **B.** Mối liên hệ giữa các đối tượng trong cùng một lớp đối tượng MonHoc với nhau  *(Đáp án đúng)*
- **C.** Mối liên kết giữa một bảng cơ sở với một khung nhìn ảo ở mức ngoài của CSDL
- **D.** Mối liên kết giữa một tệp dữ liệu phẳng với một tệp chỉ dẫn ở mức vật lý

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục III.4.b ví dụ: Lớp MHoc có quan hệ đệ quy "Mhoc truoc" / "Mhoc sau" (Dieu kien - dieu kien tien quyet). Đây là mối liên hệ giữa các đối tượng trong CÙNG MỘT LỚP MonHoc (quan hệ phản xạ/đệ quy).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm quan hệ đệ quy với quan hệ giữa 2 lớp khác nhau.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy quan hệ đệ quy (Recursive / Self-relationship) trong cùng một lớp`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Môn học trước / Môn học sau = Quan hệ đệ quy trong CÙNG 1 LỚP MonHoc!

---

### Câu 49 [db-c1-t2-049]

Hai mô hình nào sau đây thuộc nhóm "Mô hình dữ liệu logic trên cơ sở BẢN GHI" mà dữ liệu được tổ chức theo dạng đồ thị hoặc cây?

- **A.** Mô hình hợp nhất vật lý (Unified Model) và Mô hình bộ nhớ khung lưu trữ trên phiến đĩa
- **B.** Mô hình thực thể mối quan hệ (ER Model) và Mô hình cơ sở dữ liệu hướng đối tượng (OODM)
- **C.** Mô hình mạng (Network Model - Đồ thị) và Mô hình phân cấp (Hierarchical Model - Cây)  *(Đáp án đúng)*
- **D.** Mô hình quan hệ phẳng (Relational Model) và Mô hình cơ sở dữ liệu ngữ nghĩa logic đối tượng

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục III.1.b, III.2.a, III.2.b: Mô hình logic trên cơ sở bản ghi gồm Relational, Network và Hierarchical. Trong đó Network là dạng Đồ thị (Graph), Hierarchical là dạng Cây (Tree).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm ER hoặc OODM vào nhóm này.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân nhóm Record-based có cấu trúc Đồ thị (Network) và Cây (Hierarchical)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Mục III.1.b & III.2
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đồ thị = Mô hình Mạng; Cây = Mô hình Phân cấp (đều thuộc nhóm Bản ghi)!

---

### Câu 50 [db-c1-t2-050]

Tóm lược toàn bộ Chương I: Sự tiến hóa từ File Processing lên Database và từ Network/Hierarchical lên Relational Model thể hiện quy luật căn bản nào?

- **A.** Bắt buộc lập trình viên phải viết mã lệnh bằng các ngôn ngữ cấp thấp khó bảo trì hơn trước
- **B.** Tăng dần sự phụ thuộc vật lý giữa mã nguồn phần mềm ứng dụng với các khối sector đĩa từ
- **C.** Giảm dần số lượng người dùng có thể cùng khai thác thông tin trên hệ thống máy tính công ty
- **D.** Tăng dần mức độ trừu tượng hóa, độc lập dữ liệu và đảm bảo tính nhất quán, an toàn thông tin  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Sự tiến hóa của khoa học CSDL luôn hướng tới: Tăng tính trừu tượng hóa (che giấu phức tạp vật lý), Tăng tính độc lập dữ liệu (logic và vật lý), Giảm dư thừa, Đảm bảo tính nhất quán và An toàn thông tin cho đa người dùng đồng thời.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh bị lúng túng khi câu hỏi mang tính tổng quan triết lý khoa học máy tính.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy quy luật tiến hóa cốt lõi: Tăng trừu tượng hóa + Tăng độc lập dữ liệu + Đảm bảo nhất quán`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 1, Toàn bộ chương & Mục IV.1
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tiến hóa CSDL = TĂNG trừu tượng hóa + TĂNG độc lập dữ liệu + ĐẢM BẢO nhất quán!

---


