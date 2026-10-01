# TỔNG HỢP 2 BỘ ĐỀ THI BẪY CHUYÊN SÂU — CHƯƠNG IV: RÀNG BUỘC TOÀN VẸN (INTEGRITY CONSTRAINTS)
## MÔN HỌC: HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)

---

### MỤC LỤC TỔNG QUAN

1. [BẢNG TRA CỨU ĐÁP ÁN NHANH ĐỀ BẪY 1 & 2](#bang-tra-cuu-dap-an-nhanh)
2. [NỘI DUNG CHI TIẾT ĐỀ BẪY 1 (db-c4-t1)](#de-thi-bay-so-1-db-c4-t1)
3. [NỘI DUNG CHI TIẾT ĐỀ BẪY 2 (db-c4-t2)](#de-thi-bay-so-2-db-c4-t2)

---

## <a name="bang-tra-cuu-dap-an-nhanh"></a> BẢNG TRA CỨU ĐÁP ÁN NHANH

### BẢNG ĐÁP ÁN ĐỀ BẪY SỐ 1 (db-c4-t1-001 ĐẾN 050)

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


### BẢNG ĐÁP ÁN ĐỀ BẪY SỐ 2 (db-c4-t2-001 ĐẾN 050)

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

## <a name="de-thi-bay-so-1-db-c4-t1"></a> ĐỀ THI BẪY SỐ 1 (db-c4-t1)

> **Quy mô:** 50 câu hỏi bẫy vận dụng cao (100% Hard / Trick Questions)
> **Mã định danh:** `db-c4-t1-001` đến `db-c4-t1-050`
> **Cơ chế chống đoán bừa:** Độ lệch chiều dài phương án $\Delta L \le 15$ ký tự mọi câu hỏi

### Câu 1 [db-c4-t1-001]

Khẳng định nào sau đây là ĐÚNG ĐẮN NHẤT về bản chất của một Ràng buộc toàn vẹn (RBTV) trong hệ cơ sở dữ liệu quan hệ?

- **A.** Là điều kiện bất biến mà mọi trạng thái hợp lệ của CSDL đều bắt buộc phải thỏa mãn tại mọi thời điểm  *(Đáp án đúng)*
- **B.** Là tập hợp các quy tắc kiểm tra tạm thời do lập trình viên ứng dụng tự thiết lập trên giao diện người dùng
- **C.** Là tính chất thống kê được suy diễn tự động từ trạng thái dữ liệu ngẫu nhiên đang có sẵn trong các bảng
- **D.** Là cơ chế khóa bản ghi được kích hoạt riêng biệt nhằm phục vụ mục đích kiểm soát các truy cập đồng thời

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục II.1.a: RBTV là những điều kiện bất biến mà tất cả các bộ của các quan hệ liên quan trong CSDL đều phải thỏa mãn ở bất kỳ thời điểm nào. Nó phản ánh quy tắc quản lý của thế giới thực, không phụ thuộc vào trạng thái dữ liệu tức thời hay giao diện người dùng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm RBTV với các tính chất dữ liệu ngẫu nhiên hiện có hoặc nhầm với cơ chế khóa đồng thời.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy bản chất RBTV: Là ĐIỀU KIỆN BẤT BIẾN tại MỌI THỜI ĐIỂM, không phải thống kê tạm thời`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục II.1.a & Section 0
  + 💡 *Mẹo phản xạ nhanh (`tip`):* RBTV = Bất biến logic vĩnh viễn! Dữ liệu hiện tại tình cờ thỏa mãn KHÔNG ĐỒNG NGHĨA đó là RBTV.

---

### Câu 2 [db-c4-t1-002]

Khi nào Hệ quản trị cơ sở dữ liệu (DBMS) KHÔNG CẦN kích hoạt cơ chế kiểm tra các ràng buộc toàn vẹn dữ liệu?

- **A.** Khi ứng dụng thực hiện thao tác INSERT một bản ghi mới có chứa khóa ngoại vào bảng dữ liệu chi tiết
- **B.** Khi người dùng thực thi một câu lệnh SELECT thông thường để truy vấn dữ liệu từ các bảng trong hệ thống  *(Đáp án đúng)*
- **C.** Khi người quản trị thực thi lệnh UPDATE làm biến đổi giá trị của một thuộc tính nằm trong khóa chính
- **D.** Khi tiến trình nghiệp vụ gọi lệnh DELETE để loại bỏ một bản ghi cha đang được các bảng khác tham chiếu

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục II.1.b: DBMS kích hoạt kiểm tra RBTV ngay khi thực hiện thao tác cập nhật CSDL (INSERT, UPDATE, DELETE) hoặc kiểm tra định kỳ khi bảo trì. Câu lệnh SELECT là thao tác chỉ đọc (Read-only), không làm thay đổi trạng thái dữ liệu nên DBMS tuyệt đối không cần kiểm tra RBTV.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ SELECT cũng phải kiểm tra để bảo đảm dữ liệu đọc ra là hợp lệ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thời điểm kiểm tra: SELECT KHÔNG BAO GIỜ kích hoạt kiểm tra RBTV vì là lệnh chỉ đọc`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục II.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Chỉ có thao tác THAY ĐỔI DỮ LIỆU (Thêm, Sửa, Xóa) mới kích hoạt kiểm tra RBTV!

---

### Câu 3 [db-c4-t1-003]

Trong quá trình vận hành CSDL, nếu một thao tác cập nhật (INSERT/UPDATE/DELETE) làm vi phạm một RBTV đã định nghĩa thì DBMS sẽ xử lý như thế nào?

- **A.** Vẫn ghi nhận thao tác cập nhật vào ổ đĩa nhưng gắn cờ cảnh báo để người quản trị xử lý thủ công sau đó
- **B.** Tự động ghi đè dữ liệu vi phạm thành giá trị NULL và vẫn cho phép giao dịch được xác nhận thành công
- **C.** Hủy bỏ toàn bộ thao tác cập nhật vi phạm, hoàn nguyên trạng thái cũ của CSDL và gửi thông báo lỗi chi tiết  *(Đáp án đúng)*
- **D.** Tự động sửa đổi giá trị dữ liệu vi phạm về giá trị trung bình cộng của toàn bộ cột tương ứng trong bảng

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục II.1.b & Section 0: Khi một thao tác cập nhật vi phạm RBTV, DBMS sẽ lập tức từ chối thao tác đó, hoàn nguyên trạng thái cũ (Rollback) để bảo vệ tính nhất quán của CSDL và trả về thông báo lỗi cho người dùng/ứng dụng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm với cơ chế ghi log cảnh báo hoặc nghĩ DBMS sẽ tự động gán NULL.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phản ứng DBMS: CHẶN ĐỨNG & HỦY BỎ thao tác vi phạm, phục hồi trạng thái nhất quán`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục II.1.b & Section 0
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Vi phạm RBTV ➔ Lập tức ABORT / ROLLBACK, từ chối ghi nhận dữ liệu bẩn!

---

### Câu 4 [db-c4-t1-004]

Mối quan hệ giữa "Quy tắc quản lý" (Business Rules) trong thực tế và "Ràng buộc toàn vẹn" (RBTV) trong CSDL được hiểu chuẩn xác là:

- **A.** RBTV chỉ là các ràng buộc vật lý về phần cứng lưu trữ, không thể hiện bất kỳ quy tắc quản lý thực tế nào
- **B.** Quy tắc quản lý chỉ áp dụng cho tài liệu nội bộ, hoàn toàn độc lập và không liên quan gì tới các RBTV
- **C.** Mọi quy tắc quản lý trong thực tế đều có thể tự động cài đặt trọn vẹn bằng các ràng buộc mặc định CHECK
- **D.** RBTV chính là sự hình thức hóa các quy tắc quản lý của thế giới thực vào bên trong mô hình dữ liệu CSDL  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục II.1.a (Định nghĩa): Trong thực tế, RBTV chính là các quy tắc quản lý (business rules) được áp đặt lên các đối tượng của thế giới thực và được hình thức hóa thành các biểu thức logic trong CSDL.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ mọi quy tắc quản lý đều cài được bằng lệnh CHECK đơn giản, quên mất nhiều quy tắc cần Trigger hoặc thủ tục phức tạp.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Business Rules: RBTV là sự HÌNH THỨC HÓA các quy tắc quản lý vào mô hình CSDL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục II.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Business Rule ngoài đời thực ➔ Chuyển thành RBTV trong CSDL (bằng CHECK, FK hoặc Trigger)!

---

### Câu 5 [db-c4-t1-005]

Khẳng định nào sau đây là một cạm bẫy SAI LẦM khi phát biểu về tính bất biến của Ràng buộc toàn vẹn?

- **A.** Nếu tại một thời điểm nào đó toàn bộ dữ liệu hiện có đều thỏa một tính chất thì tính chất đó là một RBTV  *(Đáp án đúng)*
- **B.** Một RBTV đã được định nghĩa thì mọi trạng thái dữ liệu tương lai của CSDL đều bắt buộc phải thỏa mãn nó
- **C.** Dù bảng đang rỗng hoàn toàn không có dòng nào thì các quy tắc RBTV của bảng đó vẫn tồn tại nguyên vẹn
- **D.** Việc xác định một tính chất có phải là RBTV hay không phải dựa trên quy tắc quản lý chứ không dựa vào dữ liệu

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục II.1.a & Section 0: Một tính chất tình cờ đúng trên tập dữ liệu mẫu hiện tại KHÔNG THỂ coi là một RBTV nếu nó không phải là quy tắc quản lý bất biến. Ví dụ: hiện tại tất cả sinh viên đều có quê quán ở Hà Nội, nhưng đó không phải RBTV vì ngày mai có thể có sinh viên từ tỉnh khác nhập học.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn giữa dữ liệu ngẫu nhiên hiện có (Data Instance) và quy tắc bất biến của lược đồ (Schema Invariant).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ngụy biện dữ liệu: Dữ liệu hiện tại thỏa mãn KHÔNG CÓ NGHĨA đó là một RBTV`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục II.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* RBTV phụ thuộc vào QUY TẮC NGHIỆP VỤ của lược đồ, không phụ thuộc vào trạng thái ngẫu nhiên của dữ liệu!

---

### Câu 6 [db-c4-t1-006]

Một Ràng buộc toàn vẹn (RBTV) trong hệ cơ sở dữ liệu quan hệ được xác định hoàn chỉnh bởi 3 yếu tố cốt lõi nào?

- **A.** Khóa chính (Primary Key), Khóa ngoại (Foreign Key) và Chỉ mục dữ liệu (Index)
- **B.** Điều kiện (Condition), Bối cảnh (Context) và Tầm ảnh hưởng (Affected operations)  *(Đáp án đúng)*
- **C.** Tên ràng buộc, Kiểu dữ liệu thuộc tính và Bảng chứa các bản ghi bị vi phạm
- **D.** Ngôn ngữ biểu diễn, Thủ tục lưu trữ (Stored Procedure) và Bộ nhớ đệm hệ thống

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a: Một RBTV được xác định hoàn chỉnh bởi 3 yếu tố: a) Điều kiện (Condition); b) Bối cảnh (Context); c) Tầm ảnh hưởng (Affected operations).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn nhầm Khóa chính, Khóa ngoại, Chỉ mục vì đây là các đối tượng phổ biến của bảng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy 3 yếu tố RBTV: ĐIỀU KIỆN - BỐI CẢNH - TẦM ẢNH HƯỞNG`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Học thuộc lòng bộ 3: Điều kiện (luật gì) - Bối cảnh (ở bảng nào) - Tầm ảnh hưởng (thao tác nào phải xét)!

---

### Câu 7 [db-c4-t1-007]

Yếu tố "Bối cảnh" (Context) của một Ràng buộc toàn vẹn được định nghĩa chính xác nhất là:

- **A.** Khoảng thời gian từ lúc giao dịch bắt đầu cho đến khi kết thúc bằng lệnh COMMIT thành công
- **B.** Danh sách các cột thuộc tính có kiểu dữ liệu số nguyên tham gia vào biểu thức tính toán
- **C.** Tập hợp các quan hệ (bảng) trong CSDL mà RBTV đó có hiệu lực tác động và cần kiểm tra  *(Đáp án đúng)*
- **D.** Toàn bộ không gian lưu trữ vật lý trên ổ cứng được cấp phát riêng cho các bảng dữ liệu

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a: Bối cảnh (Context) là những quan hệ (bảng) mà RBTV đó có hiệu lực. Có thể là một quan hệ (bối cảnh 1 quan hệ) hoặc nhiều quan hệ (bối cảnh nhiều quan hệ).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ bối cảnh là danh sách các cột thuộc tính hoặc ngữ cảnh giao dịch thời gian.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Bối cảnh: Là tập hợp các QUAN HỆ (BẢNG) mà RBTV có hiệu lực, không phải tập hợp cột`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Bối cảnh = DANH SÁCH BẢNG (Relations) chịu sự chi phối của ràng buộc!

---

### Câu 8 [db-c4-t1-008]

Trong CSDL `HSSINHVIEN`, xét ràng buộc: "Mỗi sinh viên phải thuộc về một khoa đã tồn tại". Bối cảnh của ràng buộc này gồm những quan hệ nào?

- **A.** Chỉ gồm duy nhất 1 quan hệ KHOA vì khoa là thực thể cha quản lý danh sách toàn bộ các sinh viên
- **B.** Chỉ gồm duy nhất 1 quan hệ SINH_VIEN vì cột maKhoa được lưu trữ trực tiếp trong bảng sinh viên
- **C.** Gồm 3 quan hệ SINH_VIEN, KHOA và KET_QUA vì điểm số của sinh viên cũng phụ thuộc vào khoa quản lý
- **D.** Bối cảnh gồm 2 quan hệ là SINH_VIEN và KHOA vì đây là ràng buộc phụ thuộc tồn tại liên bảng  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a & VI.1.a: Ràng buộc "Mỗi sinh viên phải thuộc về một khoa" là ràng buộc khóa ngoại tham chiếu từ SINH_VIEN đến KHOA. Do đó bối cảnh bắt buộc phải gồm cả 2 quan hệ: SINH_VIEN và KHOA.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ chỉ có bảng SINH_VIEN chứa khóa ngoại nên bối cảnh chỉ có 1 bảng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy bối cảnh khóa ngoại: Bắt buộc gồm CẢ BẢNG CON VÀ BẢNG CHA (2 quan hệ)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a & VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Ràng buộc khóa ngoại luôn có bối cảnh là NHIỀU QUAN HỆ (tối thiểu 2 bảng: Con & Cha)!

---

### Câu 9 [db-c4-t1-009]

Điều kiện của một Ràng buộc toàn vẹn KHÔNG THỂ biểu diễn bằng hình thức nào sau đây?

- **A.** Một tệp nhật ký nhị phân tự sinh ghi lại lịch sử các giao dịch truy xuất dữ liệu phần cứng  *(Đáp án đúng)*
- **B.** Ngôn ngữ tự nhiên hoặc các thuật giải mô tả bằng lời kèm mã giả trực quan từng bước
- **C.** Ngôn ngữ đại số quan hệ, đại số tập hợp hoặc hệ thống phụ thuộc hàm chuẩn hóa
- **D.** Biểu thức toán học giải tích thuộc hệ thống Logic vị từ bậc nhất (First-Order Predicate)

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a: Điều kiện của một RBTV có thể biểu diễn bằng: Ngôn ngữ tự nhiên, Thuật giải, Đại số tập hợp / Đại số quan hệ, Phụ thuộc hàm, Logic vị từ bậc nhất. Tệp nhật ký nhị phân (Binary log) là công cụ ghi log của DBMS, không phải là ngôn ngữ biểu diễn điều kiện RBTV.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm công cụ hệ thống (transaction log) với các phương tiện đặc tả toán học của RBTV.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy hình thức biểu diễn: Nhật ký nhị phân là công cụ lưu trữ log, không phải ngôn ngữ biểu diễn`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* 5 cách biểu diễn điều kiện: Tự nhiên, Thuật giải, Đại số quan hệ, Phụ thuộc hàm, Logic vị từ!

---

### Câu 10 [db-c4-t1-010]

Ý nghĩa quan trọng nhất của việc xác định "Tầm ảnh hưởng" (Affected operations) của một RBTV là gì?

- **A.** Giúp hệ quản trị CSDL tự động phân bổ dung lượng bộ nhớ RAM lớn hơn cho các bảng có chứa nhiều dữ liệu
- **B.** Xác định chính xác các thao tác cập nhật nào cần kiểm tra để tối ưu hóa hiệu năng, tránh kiểm tra dư thừa  *(Đáp án đúng)*
- **C.** Cho phép người dùng tùy ý bỏ qua việc kiểm tra khóa chính khi cần nạp dữ liệu hàng loạt vào cơ sở dữ liệu
- **D.** Đảm bảo rằng mọi câu truy vấn SELECT đều được phân tích cú pháp nhanh hơn nhờ loại bỏ các điều kiện lọc

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a: Tầm ảnh hưởng nhằm xác định chính xác thời điểm và thao tác cập nhật nào (Thêm, Xóa, Sửa) cần kiểm tra RBTV đó. Thao tác nào an toàn thì đánh dấu (-), giúp hệ thống bỏ qua kiểm tra, tiết kiệm I/O và tối ưu hiệu năng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ tầm ảnh hưởng liên quan đến việc cấp phát RAM hoặc tối ưu câu lệnh SELECT.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ý nghĩa tầm ảnh hưởng: Xác định THỜI ĐIỂM CẦN KIỂM TRA để tối ưu thao tác cập nhật`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tầm ảnh hưởng = Bản đồ chỉ dẫn: Thao tác nào cần kiểm tra (+), thao tác nào được bỏ qua (-)!

---

### Câu 11 [db-c4-t1-011]

Trong Bảng Tầm Ảnh Hưởng của một RBTV, ký hiệu dấu trừ (`-`) tại cột "Thêm" của một quan hệ $R$ có ý nghĩa gì?

- **A.** Thao tác thêm vào R sẽ tự động xóa đi một bản ghi tương ứng ở bảng khác nhằm cân bằng kích thước
- **B.** Thao tác thêm một bộ mới vào quan hệ R bị cấm hoàn toàn bởi hệ thống để bảo đảm an toàn dữ liệu
- **C.** Thao tác thêm một bộ mới vào quan hệ R luôn luôn an toàn tuyệt đối và không thể vi phạm RBTV này  *(Đáp án đúng)*
- **D.** Thao tác thêm vào R bắt buộc phải kích hoạt kiểm tra có điều kiện dựa trên các thuộc tính của khóa

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a (Bảng ký hiệu): Dấu trừ (-) có nghĩa là KHÔNG CẦN KIỂM TRA RBTV. Thao tác đó hoàn toàn an toàn, không có nguy cơ vi phạm ràng buộc đang xét.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh thường nghĩ dấu trừ (-) là "bị cấm" hoặc "bị xóa".
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ký hiệu (-): Là KHÔNG CẦN KIỂM TRA (an toàn), không phải là hành động cấm thêm`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Dấu (+) = Bắt buộc kiểm tra; Dấu (-) = Không cần kiểm tra (An toàn tuyệt đối)!

---

### Câu 12 [db-c4-t1-012]

Xét ràng buộc Khóa ngoại: `SINH_VIEN.maKhoa` tham chiếu đến `KHOA.makhoa`. Tại sao thao tác THÊM một bản ghi mới vào bảng `KHOA` lại có ký hiệu là dấu trừ (`-`)?

- **A.** Vì thuộc tính makhoa trong bảng KHOA không có ràng buộc duy nhất và được phép nhận giá trị trùng
- **B.** Vì bảng KHOA là bảng con nên hệ thống tự động kế thừa toàn bộ các ràng buộc từ bảng SINH_VIEN
- **C.** Vì thao tác thêm vào bảng KHOA luôn tự động chèn thêm một bản ghi sinh viên mặc định tương ứng
- **D.** Vì việc bổ sung một khoa mới độc lập không bao giờ làm cho bất kỳ sinh viên nào hiện có bị mồ côi  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a & Bảng tầm ảnh hưởng Khóa ngoại: Bảng KHOA là bảng Cha. Khi thêm một khoa mới vào bảng KHOA, không có bất kỳ sinh viên nào bị mất khoa tham chiếu hay mồ côi. Do đó thao tác Thêm ở bảng Cha luôn an toàn tuyệt đối (-).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ bảng nào tham gia vào khóa ngoại thì thao tác Thêm cũng phải kiểm tra.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Thêm ở Bảng Cha: Luôn mang dấu (-) vì sinh thêm cha không làm con mồ côi`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa ngoại: Thêm ở Cha = (-); Thêm ở Con = (+)!

---

### Câu 13 [db-c4-t1-013]

Xét ràng buộc Khóa chính của bảng `SINH_VIEN(maSV, hotenSV, ...)`. Trong Bảng Tầm Ảnh Hưởng, thao tác THÊM một sinh viên mới được đánh dấu ký hiệu gì và vì sao?

- **A.** Đánh dấu dấu cộng (+) vì cần phải kiểm tra xem mã sinh viên mới thêm có bị trùng lặp với ai hay không  *(Đáp án đúng)*
- **B.** Đánh dấu dấu trừ (-) vì mỗi sinh viên mới luôn có thông tin họ tên riêng biệt không trùng với ai
- **C.** Đánh dấu kiểm tra có điều kiện +(*) vì chỉ cần kiểm tra khi sinh viên mới chưa có họ tên đầy đủ
- **D.** Đánh dấu dấu trừ (-) vì hệ thống luôn tự động tăng mã số sinh viên nên không thể xảy ra trùng lặp

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.3.a & Mục III.1.a: Ràng buộc khóa chính (mã số sinh viên không trùng) là ràng buộc liên bộ. Khi THÊM một bộ mới, bắt buộc phải kiểm tra (+) xem khóa chính của bộ mới có trùng với bất kỳ bộ nào đã tồn tại trong bảng hay không.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ nếu có auto-increment thì là (-), nhưng về mặt bản chất mô hình quan hệ luôn là (+).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Thêm khóa chính: Bắt buộc là (+) để ngăn chặn trùng lặp khóa`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa chính: Thêm = (+); Xóa = (-); Sửa = (+*(khóa))!

---

### Câu 14 [db-c4-t1-014]

Trong CSDL `QLHANGHOA`, xét ràng buộc: "Mỗi hóa đơn phải tương ứng với một đơn đặt hàng đã có (`HOA_DON.soDH` tham chiếu `DAT_HANG.soDH`)". Khi THÊM dữ liệu, bảng nào cần kiểm tra (`+`)?

- **A.** Bảng DAT_HANG cần kiểm tra (+) vì khi khách đặt hàng thì hóa đơn phải được xuất ngay lập tức tại quầy
- **B.** Bảng HOA_DON cần kiểm tra (+) vì đơn đặt hàng được tham chiếu bắt buộc phải tồn tại trong bảng DAT_HANG  *(Đáp án đúng)*
- **C.** Cả hai bảng HOA_DON và DAT_HANG đều phải kiểm tra (+) để đối chiếu danh sách các mặt hàng cùng lúc
- **D.** Cả hai bảng đều không cần kiểm tra (-) vì quan hệ đơn hàng và hóa đơn là mối quan hệ độc lập lỏng lẻo

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a & Section I.1.b: HOA_DON là bảng Con tham chiếu đến bảng Cha DAT_HANG thông qua khóa ngoại soDH. Khi THÊM một hóa đơn mới, bắt buộc phải kiểm tra (+) xem soDH đó đã tồn tại trong DAT_HANG chưa. Bảng DAT_HANG khi thêm mới là (-).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn "cả hai bảng đều kiểm tra (+)" mà không phân biệt vai trò bảng Cha vs bảng Con.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy bảng con trong khóa ngoại: Chỉ có bảng Con (HOA_DON) mới cần kiểm tra (+) khi THÊM`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thêm vào bảng Con ➔ Phải kiểm tra (+) xem Cha có tồn tại hay không!

---

### Câu 15 [db-c4-t1-015]

Đối với ràng buộc Miền giá trị của thuộc tính `diem` trong bảng `KET_QUA` ($0 \le diem \le 10$), thao tác THÊM một kết quả thi mới có tầm ảnh hưởng như thế nào?

- **A.** Phải kiểm tra trên cả hai bảng SINH_VIEN và MON_HOC trước khi cho phép chèn điểm vào bảng KET_QUA
- **B.** Hoàn toàn không cần kiểm tra (-) vì điểm số là thuộc tính số học luôn luôn nhận giá trị dương thực tế
- **C.** Bắt buộc phải kiểm tra (+) trên bảng KET_QUA để đảm bảo điểm số chèn vào nằm trong đoạn từ 0 đến 10  *(Đáp án đúng)*
- **D.** Chỉ kiểm tra có điều kiện +(*) khi điểm số chèn vào là điểm làm tròn của các bài thi phúc khảo lại

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.1.a: Ràng buộc miền giá trị của một thuộc tính trong một bảng đòi hỏi khi THÊM một bộ mới vào bảng đó thì bắt buộc phải kiểm tra (+) giá trị của thuộc tính đó có thuộc miền hợp lệ hay không.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm lẫn sang các bảng khác hoặc nghĩ thao tác thêm là +(*).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Miền giá trị khi Thêm: Luôn luôn là (+) trên chính quan hệ đó`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Ràng buộc miền giá trị: Thêm = (+); Xóa = (-); Sửa = (+*(cột_đó))!

---

### Câu 16 [db-c4-t1-016]

Xét ràng buộc Khóa ngoại: `SINH_VIEN.maKhoa` tham chiếu `KHOA.makhoa`. Tại sao thao tác XÓA một sinh viên khỏi bảng `SINH_VIEN` lại có ký hiệu dấu trừ (`-`)?

- **A.** Vì thuộc tính maKhoa trong bảng SINH_VIEN không phải là một thành phần cấu thành nên khóa chính
- **B.** Vì sinh viên là thực thể gốc của hệ thống nên thao tác xóa bản ghi luôn được thực thi vô điều kiện
- **C.** Vì hệ thống sẽ tự động xóa luôn khoa tương ứng trong bảng KHOA để duy trì tính nhất quán dữ liệu
- **D.** Vì việc một sinh viên bị xóa đi không bao giờ làm phương hại đến tính hợp lệ của danh mục các khoa  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a: Trong ràng buộc khóa ngoại, SINH_VIEN là bảng Con. Khi xóa một bản ghi con, bảng Cha (KHOA) không bị ảnh hưởng gì cả. Không có bất kỳ ràng buộc tham chiếu nào bị vi phạm khi một đứa con biến mất. Do đó Xóa ở bảng Con luôn là dấu trừ (-).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm giữa Xóa ở bảng Con (an toàn -) và Xóa ở bảng Cha (nguy hiểm +).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Xóa ở Bảng Con: Luôn luôn là (-) vì không ảnh hưởng đến sự tồn tại của Cha`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Xóa Con = (-); Xóa Cha = (+)! Hãy nhớ câu thần chú này để không bao giờ mất điểm.

---

### Câu 17 [db-c4-t1-017]

Cũng trong ràng buộc Khóa ngoại trên, thao tác XÓA một khoa khỏi bảng `KHOA` được đánh dấu ký hiệu gì trong Bảng Tầm Ảnh Hưởng và vì sao?

- **A.** Ký hiệu dấu cộng (+) vì nếu khoa đó đang có sinh viên theo học thì việc xóa khoa sẽ gây vi phạm tham chiếu  *(Đáp án đúng)*
- **B.** Ký hiệu dấu trừ (-) vì xóa khoa thì các sinh viên thuộc khoa đó sẽ tự động chuyển sang trạng thái tốt nghiệp
- **C.** Ký hiệu dấu trừ (-) vì bảng KHOA là bảng cha độc lập, việc xóa bản ghi cha không bao giờ bị hệ thống từ chối
- **D.** Ký hiệu kiểm tra có điều kiện +(*) vì chỉ cần kiểm tra khi số lượng cán bộ soCB của khoa đó lớn hơn không

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a: KHOA là bảng Cha. Nếu xóa một khoa mà khoa đó đang có sinh viên tham chiếu tới thì các sinh viên đó sẽ bị "mồ côi" (vi phạm khóa ngoại). Do đó thao tác Xóa trên bảng Cha bắt buộc phải kiểm tra (+).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ bảng Cha độc lập nên xóa không cần kiểm tra.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Xóa ở Bảng Cha: Bắt buộc là (+) để bảo vệ các bản ghi con không bị mồ côi`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Xóa Cha ➔ Phải kiểm tra (+) xem có Con nào đang bám vào không (nếu có ➔ Reject)!

---

### Câu 18 [db-c4-t1-018]

Đối với ràng buộc Khóa chính trên quan hệ $R$, thao tác XÓA một bộ dữ liệu bất kỳ khỏi quan hệ $R$ có cần phải kiểm tra tính duy nhất của khóa chính hay không?

- **A.** Bắt buộc phải kiểm tra (+) vì việc bớt đi một bộ có thể làm xuất hiện hai bộ khác có khóa trùng nhau
- **B.** Hoàn toàn không cần kiểm tra (-) vì tập hợp các khóa còn lại sau khi bớt đi một bộ vẫn luôn duy nhất  *(Đáp án đúng)*
- **C.** Cần kiểm tra có điều kiện +(*) nếu bộ bị xóa là bộ dữ liệu đầu tiên được thêm vào quan hệ ban đầu
- **D.** Bắt buộc phải kiểm tra (+) để sắp xếp lại toàn bộ chỉ mục vật lý của khóa chính trên ổ đĩa từ tính

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.3.a & III.1.a: Nếu một tập hợp các khóa đang phân biệt nhau, việc loại bỏ đi một phần tử không bao giờ làm cho các phần tử còn lại trùng nhau được. Do đó thao tác XÓA đối với ràng buộc khóa chính luôn luôn an toàn (-).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ khóa chính quan trọng nên Thêm/Sửa/Xóa đều phải kiểm tra (+).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Xóa đối với Khóa chính: Luôn là (-) vì bớt đi một khóa không thể sinh ra trùng lặp`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Ràng buộc Khóa chính trên 1 bảng: Thêm = (+); XÓA = (-); Sửa = (+*(khóa))!

---

### Câu 19 [db-c4-t1-019]

Trong CSDL `QLHANGHOA`, xét ràng buộc: "Mỗi hóa đơn phải có ít nhất một mặt hàng chi tiết trong `CTIET_HD`". Khi XÓA dữ liệu, thao tác trên bảng nào cần kiểm tra (`+`)?

- **A.** Thao tác XÓA trên bảng HOA_DON cần kiểm tra (+) vì xóa hóa đơn sẽ làm mất đi đơn đặt hàng gốc ban đầu
- **B.** Thao tác XÓA trên CTIET_HD không cần kiểm tra (-) vì hóa đơn không có hàng vẫn là một hóa đơn hợp lệ
- **C.** Thao tác XÓA trên CTIET_HD cần kiểm tra (+) vì việc xóa có thể làm hóa đơn tương ứng không còn mặt hàng nào  *(Đáp án đúng)*
- **D.** Cả hai bảng đều không cần kiểm tra (-) vì số lượng mặt hàng trong hóa đơn chỉ được xét khi tạo đơn hàng

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.2.a (Ví dụ 9): Ràng buộc "Mỗi hóa đơn phải có ít nhất một mặt hàng" là ràng buộc liên bộ liên quan hệ. Khi XÓA một dòng trong CTIET_HD, nếu đó là mặt hàng duy nhất của hóa đơn đó thì hóa đơn sẽ bị rỗng, vi phạm ràng buộc. Do đó XÓA trên CTIET_HD cần kiểm tra (+). Ngược lại XÓA trên HOA_DON là (-).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn giữa bảng HOA_DON và CTIET_HD khi xét điều kiện "ít nhất 1".
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ràng buộc tồn tại ít nhất 1: Thao tác XÓA trên bảng con CTIET_HD là (+)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Ràng buộc "ít nhất 1": Xóa phần tử con có nguy cơ làm số lượng về 0 ➔ Xóa Con là (+)!

---

### Câu 20 [db-c4-t1-020]

Xét ràng buộc: "Tổng số tiết lý thuyết và thực hành của mỗi môn học phải lớn hơn 0" (`soTietLT + soTietTH > 0`). Thao tác XÓA một môn học có tầm ảnh hưởng như thế nào đối với ràng buộc này?

- **A.** Đánh dấu dấu cộng (+) vì hệ thống cần kiểm tra xem môn học bị xóa có sinh viên nào đăng ký học hay chưa
- **B.** Đánh dấu dấu cộng (+) vì việc xóa có thể làm tổng số tiết học của toàn trường bị giảm xuống dưới mức chuẩn
- **C.** Đánh dấu kiểm tra có điều kiện +(*) vì chỉ cần kiểm tra khi môn học bị xóa có số tiết thực hành bằng 0
- **D.** Đánh dấu dấu trừ (-) vì việc xóa bỏ một môn học hoàn toàn không thể làm cho các môn học còn lại vi phạm  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.2.a: Ràng buộc soTietLT + soTietTH > 0 là ràng buộc liên thuộc tính trong cùng một bộ của bảng MON_HOC. Khi XÓA một môn học, dòng đó bị loại bỏ hoàn toàn, không thể làm cho bất kỳ dòng nào khác bị vi phạm điều kiện này. Do đó thao tác Xóa là dấu trừ (-).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh liên tưởng đến việc sinh viên đã đăng ký môn học (đó là ràng buộc khóa ngoại khác, không phải ràng buộc đang xét).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phạm vi ràng buộc: Đang xét soTiet > 0 chứ không xét khóa ngoại môn học`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Xét tầm ảnh hưởng của ràng buộc nào thì CHỈ ĐƯỢC nhìn vào biểu thức của ràng buộc đó!

---

### Câu 21 [db-c4-t1-021]

Ký hiệu `+(*)` hoặc `-(*)` tại cột "Sửa" trong Bảng Tầm Ảnh Hưởng của một RBTV mang ý nghĩa học thuật chuẩn xác là gì?

- **A.** Chỉ cần kiểm tra khi thuộc tính được sửa có tham gia trực tiếp vào biểu thức điều kiện của RBTV đó  *(Đáp án đúng)*
- **B.** Bắt buộc phải kiểm tra toàn bộ tất cả các thuộc tính của dòng dữ liệu bất kể cột nào bị thay đổi
- **C.** Hệ thống tự động từ chối mọi thao tác sửa đổi dữ liệu trên bảng để đảm bảo an toàn tuyệt đối nhất
- **D.** Thao tác sửa đổi chỉ được chấp nhận nếu người dùng có đặc quyền tối cao của người quản trị hệ thống

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a (Bảng ký hiệu): Ký hiệu +(*) hoặc -(*) biểu thị kiểm tra có điều kiện: chỉ kiểm tra khi thuộc tính được sửa có liên quan trực tiếp đến biểu thức của RBTV. Nếu sửa các thuộc tính khác không liên quan thì không cần kiểm tra.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ dấu sao nghĩa là wildcard (tất cả thuộc tính) nên chọn nhầm kiểm tra mọi thuộc tính.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ký hiệu +(*): Kiểm tra CÓ ĐIỀU KIỆN (chỉ khi sửa thuộc tính tham gia biểu thức)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* +(*) = Có điều kiện! Sửa thuộc tính trong luật ➔ Kiểm tra; Sửa thuộc tính ngoài luật ➔ Bỏ qua!

---

### Câu 22 [db-c4-t1-022]

Trong bảng `SINH_VIEN(maSV, hotenSV, nam, ngSinh, maKhoa)`, xét ràng buộc khóa chính trên `maSV`. Nếu người dùng thực hiện lệnh UPDATE thay đổi `hotenSV`, DBMS có cần kiểm tra khóa chính không?

- **A.** Bắt buộc phải kiểm tra vì bất kỳ thao tác sửa đổi nào trên bảng đều có thể làm thay đổi khóa chính
- **B.** Hoàn toàn không cần kiểm tra vì thuộc tính hotenSV không tham gia vào cấu trúc khóa chính của bảng  *(Đáp án đúng)*
- **C.** Phải kiểm tra xem họ tên mới sửa có bị trùng lặp với họ tên của sinh viên nào khác trong khoa hay không
- **D.** Chỉ kiểm tra nếu sinh viên đó đang có kết quả thi đạt điểm xuất sắc trong bảng điểm chi tiết môn học

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.3.a & III.1.a: Tầm ảnh hưởng của ràng buộc khóa chính trên SINH_VIEN đối với thao tác Sửa là +*(maSV). Nghĩa là chỉ kiểm tra khi sửa thuộc tính maSV. Khi sửa hotenSV, thuộc tính này không tham gia vào khóa chính nên DBMS hoàn toàn không cần kiểm tra.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ lệnh UPDATE nào trên bảng cũng phải kích hoạt kiểm tra khóa chính.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy sửa thuộc tính không khóa: Sửa hotenSV không ảnh hưởng đến tính duy nhất của maSV`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa chính chỉ kiểm tra khi SỬA CỘT KHÓA CHÍNH (+*(PK))!

---

### Câu 23 [db-c4-t1-023]

Xét ràng buộc Khóa ngoại: `SINH_VIEN.maKhoa` tham chiếu `KHOA.makhoa`. Thao tác SỬA thuộc tính nào sau đây KHÔNG LÀM KÍCH HOẠT kiểm tra ràng buộc khóa ngoại này?

- **A.** Sửa thuộc tính maKhoa của một sinh viên trong bảng SINH_VIEN vì mã khoa mới sửa có thể không tồn tại
- **B.** Sửa thuộc tính makhoa trong bảng KHOA thành một mã mới vì các sinh viên khoa cũ có nguy cơ bị mồ côi
- **C.** Sửa thuộc tính soCB (tổng số cán bộ) của một khoa trong bảng KHOA vì cột này không liên quan đến khóa  *(Đáp án đúng)*
- **D.** Cả thao tác sửa makhoa ở bảng KHOA và sửa maKhoa ở bảng SINH_VIEN đều làm kích hoạt kiểm tra khóa ngoại

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a: Ràng buộc khóa ngoại chỉ liên quan đến maKhoa và makhoa. Sửa soCB trong bảng KHOA hoàn toàn không ảnh hưởng đến tính toàn vẹn tham chiếu giữa sinh viên và khoa, do đó không kích hoạt kiểm tra.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ sửa bất kỳ cột nào ở bảng Cha cũng kích hoạt kiểm tra.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thuộc tính không liên quan: Sửa soCB là (-), không kiểm tra khóa ngoại`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Chỉ có sửa CỘT THAM CHIẾU (makhoa, maKhoa) mới cần kiểm tra (+*)!

---

### Câu 24 [db-c4-t1-024]

Trong CSDL `QLHANGHOA`, xét ràng buộc: `HOA_DON.ngayHD >= DAT_HANG.ngayDH`. Bảng Tầm Ảnh Hưởng của thao tác SỬA trên hai bảng này được ghi nhận như thế nào?

- **A.** HOA_DON: dấu cộng (+); DAT_HANG: dấu trừ (-) vì chỉ có ngày hóa đơn mới có khả năng bị lập sai thực tế
- **B.** HOA_DON: +*(trigiaHD); DAT_HANG: +*(soLuongDat) vì giá trị đơn hàng quyết định ngày phát hành hóa đơn
- **C.** Cả hai bảng đều ghi nhận dấu trừ (-) vì ngày tháng sau khi đã ghi nhận thì không thể chỉnh sửa được
- **D.** HOA_DON: +*(ngayHD, soDH); DAT_HANG: +*(ngayDH, soDH) vì sửa ngày hoặc mã đơn hàng đều ảnh hưởng đối chiếu  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.3.a (Ví dụ 10): Ràng buộc liên thuộc tính liên quan hệ này liên kết HOA_DON và DAT_HANG qua thuộc tính soDH và so sánh ngày. Nếu sửa ngày (ngayHD, ngayDH) hoặc sửa mã liên kết (soDH) ở một trong hai bảng thì đều phải kiểm tra lại điều kiện so sánh ngày.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh chỉ nhớ thuộc tính ngày mà quên mất thuộc tính liên kết soDH cũng quyết định việc ghép cặp.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy sửa thuộc tính liên kết: Cần kiểm tra cả thuộc tính điều kiện (ngày) VÀ thuộc tính liên kết (soDH)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Sửa liên quan hệ ➔ Phải kiểm tra cả CỘT SO SÁNH lẫn CỘT DÙNG ĐỂ JOIN (+*(ngày, soDH))!

---

### Câu 25 [db-c4-t1-025]

Xét quan hệ `NHANVIEN(maNV, luong, tamUng, conLai)` với ràng buộc `conLai = luong - tamUng`. Thao tác SỬA thuộc tính nào đòi hỏi hệ thống phải kiểm tra lại tính đúng đắn của công thức này?

- **A.** Khi sửa bất kỳ thuộc tính nào trong ba thuộc tính: luong, tamUng hoặc conLai thì đều phải kiểm tra lại  *(Đáp án đúng)*
- **B.** Chỉ kiểm tra khi sửa thuộc tính conLai, còn việc sửa luong hoặc tamUng thì không làm ảnh hưởng gì
- **C.** Chỉ kiểm tra khi sửa thuộc tính maNV vì mã nhân viên là định danh quyết định mức lương của nhân sự
- **D.** Hoàn toàn không cần kiểm tra vì hệ quản trị CSDL luôn tự động tính toán lại conLai mà không cần báo

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.2.a: Công thức liên thuộc tính liên kết cả 3 trường: conLai, luong và tamUng. Bất kỳ sự thay đổi nào trên 1 trong 3 trường này đều có thể phá vỡ sự cân bằng của đẳng thức, do đó tầm ảnh hưởng là +*(luong, tamUng, conLai).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ chỉ khi sửa vế trái (conLai) mới cần kiểm tra, quên mất sửa vế phải cũng làm sai lệch.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy đẳng thức liên thuộc tính: Sửa bất kỳ biến nào trong phương trình đều phải kiểm tra`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đẳng thức A = B - C ➔ Sửa A, sửa B hay sửa C đều phải kiểm tra lại (+*(A, B, C))!

---

### Câu 26 [db-c4-t1-026]

Trong quan hệ `NHANVIEN(maNV, tenNV, luong, tamUng, conLai)`, xét quy tắc: "Số tiền tạm ứng không được vượt quá số tiền lương (`tamUng <= luong`)". Đây là loại RBTV nào?

- **A.** RBTV về miền giá trị vì nó quy định phạm vi giá trị bằng tiền hợp lệ cho thuộc tính tamUng của nhân viên
- **B.** RBTV liên thuộc tính trong cùng một quan hệ vì nó ràng buộc giữa hai cột khác nhau trên cùng một bộ  *(Đáp án đúng)*
- **C.** RBTV liên bộ vì cần phải so sánh tiền tạm ứng của nhân viên này với tiền lương của các nhân viên khác
- **D.** RBTV phụ thuộc tồn tại vì sự tồn tại của khoản tạm ứng bắt buộc phải phụ thuộc vào việc có lương hay không

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.1.a (Lưu ý bẫy) & V.2.a: Giáo trình nhấn mạnh: "Trong quan hệ NHANVIEN(maNV, tenNV, luong, tamUng, conLai), điều kiện tamUng <= luong là VÍ DỤ SAI của miền giá trị, thực chất đây là RBTV liên thuộc tính!". Vì nó so sánh 2 thuộc tính trên cùng một bộ.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Đây là cạm bẫy kinh điển số 1 của Chương IV: thí sinh nhìn thấy so sánh số tiền là nghĩ ngay đến miền giá trị.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy kinh điển tamUng <= luong: Là LIÊN THUỘC TÍNH, tuyệt đối KHÔNG PHẢI Miền giá trị`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.1.a (Lưu ý bẫy)
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Miền giá trị = 1 thuộc tính so với HẰNG SỐ (diem >= 0); 2 thuộc tính so với nhau = LIÊN THUỘC TÍNH!

---

### Câu 27 [db-c4-t1-027]

Ràng buộc: "Mã số sinh viên `maSV` trong quan hệ `SINH_VIEN` phải là duy nhất, không có hai sinh viên nào trùng mã". Theo phân loại học thuật chuẩn, đây là loại RBTV gì?

- **A.** RBTV liên thuộc tính vì nó liên kết mã sinh viên với toàn bộ các thuộc tính thông tin cá nhân còn lại
- **B.** RBTV về miền giá trị vì nó quy định mỗi mã sinh viên chỉ được phép thuộc vào một tập hợp số nguyên nhất định
- **C.** RBTV liên bộ trong một quan hệ vì việc kiểm tra tính duy nhất đòi hỏi phải đối chiếu giữa các bộ với nhau  *(Đáp án đúng)*
- **D.** RBTV đa quan hệ vì mã sinh viên này còn được sử dụng để liên kết với các bảng kết quả thi và đề tài

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.3.a (Ví dụ 6): Ràng buộc C1 (mã số sinh viên không trùng) thuộc loại RBTV liên bộ trong một quan hệ. Biểu thức: với mọi t1, t2 thuộc SINH_VIEN, nếu t1.maSV = t2.maSV thì t1 = t2. Để kiểm tra tính duy nhất, phải so sánh giữa các bộ khác nhau trong cùng bảng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ khóa chính là ràng buộc miền giá trị hoặc chỉ gọi chung là ràng buộc thực thể mà quên phân loại bản chất là liên bộ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy bản chất Khóa chính: Là RBTV LIÊN BỘ (Inter-tuple) vì so sánh giữa các dòng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa chính = So sánh giữa bộ này với bộ khác ➔ Ràng buộc LIÊN BỘ (Inter-tuple)!

---

### Câu 28 [db-c4-t1-028]

Trong bảng `KET_QUA(maSV, maMH, lanThi, diem)`, điều kiện: "Điểm thi của sinh viên phải từ 0 đến 10 với bước nhảy 0.5" được xếp vào loại RBTV nào?

- **A.** RBTV phụ thuộc tồn tại vì điểm thi chỉ tồn tại khi sinh viên đã hoàn thành đóng học phí cho môn học
- **B.** RBTV liên thuộc tính vì điểm thi phải phụ thuộc vào môn học maMH và số lần thi lanThi của sinh viên đó
- **C.** RBTV liên bộ vì hệ thống cần duyệt qua tất cả các điểm thi của sinh viên để xác định điểm trung bình
- **D.** RBTV về miền giá trị vì nó chỉ xét phạm vi và quy cách giá trị hợp lệ của duy nhất một thuộc tính diem  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.1.a (Ví dụ 4): Trong LĐQH KetQua, miền giá trị Diem = 0..10 với độ chính xác đơn 0.5 điểm: ((t.Diem * 4) mod 2 = 0, với mọi t thuộc KetQua). Đây là RBTV về miền giá trị (Domain constraint) vì chỉ quy định phạm vi hợp lệ của một thuộc tính đơn lẻ.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh thấy công thức toán modulo phức tạp tưởng là liên thuộc tính.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy công thức bước nhảy điểm: Dù có mod 2 thì vẫn là MIỀN GIÁ TRỊ của 1 thuộc tính diem`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Chỉ có 1 biến thuộc tính trong công thức (t.Diem) ➔ Ràng buộc MIỀN GIÁ TRỊ!

---

### Câu 29 [db-c4-t1-029]

Trong lược đồ `HOADON(soHD, ngayHD, ngayXuat, triGia)`, điều kiện: "Hàng chỉ được xuất kho sau khi hoặc cùng ngày lập hóa đơn (`ngayHD <= ngayXuat`)". Đây là:

- **A.** RBTV liên thuộc tính trong một quan hệ vì so sánh giá trị giữa hai cột thời gian trên cùng một dòng hóa đơn  *(Đáp án đúng)*
- **B.** RBTV về miền giá trị vì quy định ngày xuất kho phải nằm trong khoảng thời gian của thế kỷ hai mươi mốt
- **C.** RBTV liên bộ vì cần đối chiếu ngày lập hóa đơn này với ngày xuất kho của các hóa đơn bán hàng trước đó
- **D.** RBTV liên quan hệ vì việc xuất kho liên quan đến thủ kho còn việc lập hóa đơn do nhân viên kế toán làm

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.2.a (Ví dụ 5): Ràng buộc hd.ngayHD <= hd.ngayXuat là RBTV liên thuộc tính (Inter-attribute constraint) vì thể hiện mối liên hệ giữa hai thuộc tính trong cùng một quan hệ HOADON.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ liên quan đến xuất kho và hóa đơn là phải có nhiều bảng, nhưng ở đây cả ngayHD và ngayXuat đều nằm trong 1 bảng HOADON.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ngữ cảnh nghiệp vụ: Hai cột cùng nằm trong bảng HOADON nên là LIÊN THUỘC TÍNH 1 bảng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Nhìn vào vị trí lưu trữ thuộc tính: Cùng 1 bảng ➔ Liên thuộc tính; Khác bảng ➔ Liên thuộc tính liên quan hệ!

---

### Câu 30 [db-c4-t1-030]

Khi thiết kế CSDL, nếu trong cùng một bảng có thuộc tính $A$ luôn luôn tính toán được từ các thuộc tính khác ($A = B + C$), giải pháp thiết kế chuẩn mực nhất là gì?

- **A.** Bắt buộc giữ lại thuộc tính A và tạo thêm một bảng phụ riêng biệt để lưu trữ các giá trị lịch sử của A
- **B.** Loại bỏ thuộc tính A khỏi bảng để tránh dư thừa dữ liệu và loại trừ nguy cơ vi phạm ràng buộc liên thuộc tính  *(Đáp án đúng)*
- **C.** Nhân đôi thuộc tính A sang tất cả các bảng khác trong CSDL để giúp việc truy vấn dữ liệu đạt tốc độ tối đa
- **D.** Chuyển toàn bộ các thuộc tính B và C sang kiểu chuỗi ký tự để hệ thống không tự động thực hiện phép cộng

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.2.a (Lưu ý thiết kế): Nếu thuộc tính A tính được từ các thuộc tính khác trong cùng bảng, ta có thể loại bỏ A khỏi bảng để tránh dư thừa dữ liệu và không phải duy trì ràng buộc liên thuộc tính.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ nên giữ lại cột để truy vấn nhanh hơn mà quên mất nguyên lý chuẩn hóa tránh dư thừa trong thiết kế chuẩn.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thuộc tính suy diễn trong 1 bảng: Giải pháp chuẩn là LOẠI BỎ CỘT để tránh dư thừa`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thuộc tính tính được từ các cột cùng bảng ➔ Nên loại bỏ khỏi lược đồ quan hệ!

---

### Câu 31 [db-c4-t1-031]

Dấu hiệu nhận biết thứ nhất của Ràng buộc phụ thuộc tồn tại (Khóa ngoại) giữa hai lược đồ quan hệ $R_1$ và $R_2$ theo giáo trình là gì?

- **A.** Toàn bộ các thuộc tính của quan hệ R1 đều phải xuất hiện đầy đủ bên trong danh sách thuộc tính của bảng R2
- **B.** Khóa chính K1 của quan hệ R1 phải có số lượng thuộc tính nhiều hơn khóa chính K2 của quan hệ R2 ít nhất một cột
- **C.** Khóa chính K1 của quan hệ R1 là một tập con thực sự hoặc bằng khóa chính phức hợp K2 của quan hệ R2 (K1 ⊆ K2)  *(Đáp án đúng)*
- **D.** Kiểu dữ liệu của khóa chính K1 bắt buộc phải là kiểu chuỗi ký tự trong khi khóa K2 phải là kiểu số nguyên lớn

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a: Dấu hiệu (1): Nếu K1 ⊆ K2 (khóa chính K1 của R1 là tập con của khóa chính phức hợp K2 của R2) ➔ Có phụ thuộc tồn tại của R2 vào R1.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh chỉ quen với việc khóa ngoại là một cột thông thường mà không biết dấu hiệu khóa con nằm trong khóa phức hợp.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Dấu hiệu 1: K1 ⊆ K2 (Khóa chính bảng cha nằm bên trong khóa chính phức hợp bảng con)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Dấu hiệu 1: K1 ⊆ K2 (Khóa trong khóa); Dấu hiệu 2: K1 ⊆ R2 (Khóa trong danh sách thuộc tính thường)!

---

### Câu 32 [db-c4-t1-032]

Cho hai quan hệ `SINH_VIEN(maSV, hotenSV, ...)` có khóa chính `maSV` và `KET_QUA(maSV, maMH, lanThi, diem)` có khóa chính `(maSV, maMH, lanThi)`. Đây là minh họa chuẩn xác cho:

- **A.** Ràng buộc chu trình đồ thị vì sinh viên có thể thi nhiều môn và một môn học có nhiều sinh viên dự thi
- **B.** Dấu hiệu K1 ⊆ R2 của phụ thuộc tồn tại, trong đó maSV chỉ đóng vai trò là một thuộc tính mô tả bình thường
- **C.** Ràng buộc liên thuộc tính trong cùng một bảng vì cả hai quan hệ đều chứa thuộc tính mang tên gọi là maSV
- **D.** Dấu hiệu K1 ⊆ K2 của phụ thuộc tồn tại, trong đó sự tồn tại của KET_QUA phụ thuộc vào sự tồn tại của SINH_VIEN  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a: Khóa chính K1 = {maSV} của SINH_VIEN là tập con của khóa chính phức hợp K2 = {maSV, maMH, lanThi} của KET_QUA (K1 ⊆ K2). Đây chính là minh họa cho Dấu hiệu (1) của phụ thuộc tồn tại.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm sang dấu hiệu 2 hoặc nhầm thành chu trình vì thấy có nhiều môn học.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Dấu hiệu K1 ⊆ K2: maSV vừa là PK của cha vừa là thành phần PK của con`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Nếu khóa ngoại tham gia vào khóa chính của bảng con ➔ Đó là Dấu hiệu 1 (K1 ⊆ K2)!

---

### Câu 33 [db-c4-t1-033]

Dấu hiệu nhận biết thứ hai của Ràng buộc phụ thuộc tồn tại ($K_1 \subseteq R_2$) thể hiện cấu trúc nào sau đây?

- **A.** Khóa chính K1 của R1 xuất hiện như một thuộc tính thông thường không thuộc khóa chính trong lược đồ R2  *(Đáp án đúng)*
- **B.** Khóa chính K1 của R1 bắt buộc phải trùng khớp hoàn toàn với toàn bộ danh sách các thuộc tính của bảng R2
- **C.** Tất cả các thuộc tính của R2 đều tham gia vào việc cấu thành nên một khóa ngoại tham chiếu đến bảng R1
- **D.** Bảng R2 không có khóa chính riêng mà phải mượn toàn bộ khóa chính K1 của R1 để làm khóa chính duy nhất

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a: Dấu hiệu (2): Nếu K1 ⊆ R2 (khóa K1 xuất hiện như một thuộc tính thông thường trong R2) ➔ Có phụ thuộc tồn tại của R2 vào R1; K1 gọi là khóa ngoại của R2.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm K1 ⊆ R2 nghĩa là R2 mượn toàn bộ khóa của R1 làm khóa chính.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Dấu hiệu 2: K1 xuất hiện như một THUỘC TÍNH THÔNG THƯỜNG trong R2`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* K1 ⊆ R2: Khóa ngoại đứng như 1 cột bình thường trong bảng con (ví dụ maKhoa trong SINH_VIEN)!

---

### Câu 34 [db-c4-t1-034]

Trong CSDL `HSSINHVIEN`, quan hệ giữa `SINH_VIEN(..., maKhoa)` và `KHOA(makhoa, ...)` là minh họa cho:

- **A.** Dấu hiệu K1 ⊆ K2, trong đó makhoa là thành phần nằm bên trong khóa chính của bảng sinh viên SINH_VIEN
- **B.** Dấu hiệu K1 ⊆ R2, trong đó makhoa của bảng KHOA xuất hiện như thuộc tính thông thường trong SINH_VIEN  *(Đáp án đúng)*
- **C.** Ràng buộc liên bộ trong một quan hệ vì mỗi sinh viên chỉ được phép đăng ký học tại một khoa duy nhất
- **D.** Ràng buộc chu trình vì khoa quản lý sinh viên và sinh viên có thể tham gia vào ban chủ nhiệm của khoa

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a: Khóa chính của KHOA là makhoa. Trong SINH_VIEN, khóa chính là maSV, còn maKhoa chỉ là một thuộc tính thông thường. Do đó K1 ⊆ R2 (Dấu hiệu 2).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm giữa Dấu hiệu 1 và Dấu hiệu 2.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân biệt 2 dấu hiệu: maKhoa không nằm trong khóa chính SINH_VIEN nên là K1 ⊆ R2`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* maKhoa là thuộc tính thường của SINH_VIEN ➔ Dấu hiệu 2 (K1 ⊆ R2)!

---

### Câu 35 [db-c4-t1-035]

Trong mối quan hệ Khóa ngoại giữa bảng Cha $P$ và bảng Con $C$ ($C.fk \rightarrow P.pk$), thứ tự chèn (INSERT) và xóa (DELETE) an toàn không gây lỗi là:

- **A.** Thứ tự chèn và xóa giữa bảng Cha và bảng Con là hoàn toàn tùy ý vì hệ quản trị CSDL luôn tự động sắp xếp lại các thao tác
- **B.** Khi chèn dữ liệu phải chèn bảng Con trước rồi chèn bảng Cha sau; khi xóa dữ liệu phải xóa bảng Cha trước rồi xóa Con sau
- **C.** Khi chèn dữ liệu phải chèn bảng Cha trước rồi chèn bảng Con sau; khi xóa dữ liệu phải xóa bảng Con trước rồi xóa Cha sau  *(Đáp án đúng)*
- **D.** Luôn luôn phải chèn bảng Con trước để kiểm tra dữ liệu, sau đó hệ thống sẽ tự động sinh ra bản ghi tương ứng ở bảng Cha

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a & Bảng tầm ảnh hưởng: Chèn: Phải chèn Cha trước để con có đối tượng tham chiếu hợp lệ (nếu chèn con trước ➔ lỗi FK violation). Xóa: Phải xóa Con trước để khi xóa Cha không gây mồ côi (nếu xóa Cha trước ➔ lỗi FK restrict violation).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay bị nhầm lẫn thứ tự đảo chiều giữa thao tác chèn và xóa.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thứ tự thao tác: Chèn Cha trước - Con sau; Xóa Con trước - Cha sau`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Quy tắc sinh tử: Cha sinh trước Con, Con chết trước Cha!

---

### Câu 36 [db-c4-t1-036]

Khi biểu diễn một quy tắc có dạng "Với mọi bộ trong quan hệ $R$, nếu thỏa mãn điều kiện $P$ thì phải thỏa mãn $Q$", cấu trúc logic vị từ chuẩn xác là:

- **A.** ∀t ∈ R, (P(t) ∨ ¬Q(t)) vì đây là biểu thức tương đương với phép tuyển nghịch đảo của mệnh đề
- **B.** ∀t ∈ R, (P(t) ∧ Q(t)) vì tất cả các bộ trong bảng đều bắt buộc phải thỏa mãn đồng thời P và Q
- **C.** ∃t ∈ R, (P(t) → Q(t)) vì chỉ cần có ít nhất một bộ thỏa mãn điều kiện là RBTV có hiệu lực
- **D.** ∀t ∈ R, (P(t) → Q(t)) vì lượng từ với mọi bắt buộc phải luôn luôn đi cùng phép kéo theo  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a & Section 0: Trong Logic vị từ toán học, quy tắc tổng quát "Nếu P thì Q" trên mọi phần tử luôn được biểu diễn bằng: ∀t ∈ R, (P(t) → Q(t)). Nếu dùng phép hội (∧) thì bắt buộc MỌI bộ đều phải thỏa mãn P, điều này sai hoàn toàn về mặt ngữ nghĩa.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người hay nhầm dùng phép hội (∧) thay vì phép kéo theo (→) khi viết lượng từ ∀.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Logic ∀: Lượng từ Với mọi (∀) luôn đi kèm phép KÉO THEO (→)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Nhớ nguyên lý logic: ∀ đi với → (kéo theo); ∃ đi với ∧ (hội)!

---

### Câu 37 [db-c4-t1-037]

Tại sao việc sử dụng phép hội ($\land$) thay vì phép kéo theo ($\rightarrow$) trong biểu thức $\forall t \in R, (P(t) \land Q(t))$ lại là một SAI LẦM nghiêm trọng?

- **A.** Vì nó đòi hỏi mọi bộ trong bảng đều phải thỏa tiền đề P(t), làm cho các bộ không thỏa P(t) bị quy là vi phạm  *(Đáp án đúng)*
- **B.** Vì phép hội không có tính chất giao hoán nên hệ thống không thể tối ưu hóa cây truy vấn logic của mệnh đề
- **C.** Vì trong đại số quan hệ không tồn tại phép toán nào tương ứng với phép hội logic giữa hai vị từ thuộc tính
- **D.** Vì phép hội chỉ được phép sử dụng khi biểu diễn các ràng buộc toàn vẹn có bối cảnh từ ba quan hệ trở lên

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a & Section 0: Trong mệnh đề "nếu sinh viên là Nữ thì không đi nghĩa vụ quân sự", nếu viết ∀t, (Nu(t) ∧ KhongNVQS(t)) thì hệ thống sẽ bắt buộc TẤT CẢ sinh viên đều phải là Nữ (khiến sinh viên Nam bị coi là vi phạm!). Phải viết: ∀t, (Nu(t) → KhongNVQS(t)).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ phép hội là liên kết hai điều kiện đúng mà không nhận ra nó biến điều kiện lọc thành điều kiện bắt buộc.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy sai lầm phép hội: Bắt buộc toàn bộ các dòng phải thỏa mãn tiền đề P(t)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đừng bao giờ dùng (P ∧ Q) sau ∀ nếu P chỉ là điều kiện lọc đối tượng!

---

### Câu 38 [db-c4-t1-038]

Khi biểu diễn ràng buộc có lượng từ tồn tại $\exists$ ("Với mỗi sinh viên $s$, tồn tại khoa $k$ sao cho..."), cấu trúc logic vị từ chuẩn xác là:

- **A.** ∀s ∈ SINH_VIEN, ∃k ∈ KHOA → (s.maKhoa = k.makhoa) (dùng phép kéo theo sau tồn tại)
- **B.** ∀s ∈ SINH_VIEN, ∃k ∈ KHOA ∧ (s.maKhoa = k.makhoa) (lượng từ tồn tại đi cùng phép hội)  *(Đáp án đúng)*
- **C.** ∃s ∈ SINH_VIEN, ∀k ∈ KHOA ∧ (s.maKhoa = k.makhoa) (đảo vị trí lượng từ tồn tại lên đầu)
- **D.** ∀s ∈ SINH_VIEN, ∀k ∈ KHOA → (s.maKhoa = k.makhoa) (dùng lượng từ với mọi cho cả hai)

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a & Section 0: Lượng từ tồn tại ∃ luôn đi kèm phép hội ∧: ∀s ∈ SINH_VIEN, ∃k ∈ KHOA: (s.maKhoa = k.makhoa). Nếu dùng phép kéo theo sau ∃, chỉ cần chọn một bản ghi k làm tiền đề sai thì mệnh đề sẽ luôn đúng chân lý (vacuously true) dù không hề tồn tại khoa thực sự!
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh quen tay đặt dấu kéo theo (→) sau lượng từ tồn tại ∃.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Logic ∃: Lượng từ Tồn tại (∃) luôn đi kèm phép HỘI (∧), không được dùng kéo theo`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Quy tắc vàng: ∃ luôn đi với ∧! Dùng → sau ∃ là sai hoàn toàn về mặt ngữ nghĩa.

---

### Câu 39 [db-c4-t1-039]

Theo quy tắc phủ định trong Logic vị từ, một CSDL bị coi là VI PHẠM ràng buộc $\forall t \in R, (P(t) \rightarrow Q(t))$ khi và chỉ khi:

- **A.** Tồn tại ít nhất một bộ t thuộc R sao cho cả tiền đề P(t) và kết luận Q(t) đều đồng thời nhận giá trị sai
- **B.** Mọi bộ t thuộc quan hệ R đều làm cho tiền đề P(t) nhận giá trị sai bất kể kết luận Q(t) đúng hay sai
- **C.** Tồn tại ít nhất một bộ t thuộc R sao cho tiền đề P(t) đúng nhưng kết luận Q(t) bị sai (∃t ∈ R, P(t) ∧ ¬Q(t))  *(Đáp án đúng)*
- **D.** Toàn bộ các bộ trong quan hệ R đều làm cho biểu thức điều kiện Q(t) nhận giá trị đúng trên toàn hệ thống

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a & Section 0: Phủ định của ∀t, (P(t) → Q(t)) là: ¬(∀t, P(t) → Q(t)) ≡ ∃t, ¬(¬P(t) ∨ Q(t)) ≡ ∃t, (P(t) ∧ ¬Q(t)). Nghĩa là chỉ cần tồn tại một bộ thỏa mãn điều kiện P nhưng không thỏa mãn kết luận Q là CSDL bị coi là vi phạm ràng buộc.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm phủ định của P → Q là ¬P → ¬Q hoặc nhầm thành P sai và Q sai.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phủ định mệnh đề kéo theo: ¬(P → Q) ≡ P ∧ ¬Q (Tồn tại vi phạm khi P đúng mà Q sai)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tìm ca vi phạm (Bug) ➔ Tìm bộ mà Tiền đề ĐÚNG nhưng Kết luận SAI (P ∧ ¬Q)!

---

### Câu 40 [db-c4-t1-040]

Biểu thức logic vị từ biểu diễn ràng buộc khóa chính: "Mã sinh viên là duy nhất trong quan hệ `SINH_VIEN`" được viết chuẩn xác là:

- **A.** ∀t1 ∈ SINH_VIEN, ∃t2 ∈ SINH_VIEN: (t1.maSV = t2.maSV) (mỗi bộ đều có một bộ khác trùng mã)
- **B.** ∀t1, t2 ∈ SINH_VIEN: (t1.maSV ≠ t2.maSV → t1 = t2) (khác mã thì bắt buộc phải cùng một bộ)
- **C.** ∃t1, t2 ∈ SINH_VIEN: (t1.maSV = t2.maSV ∧ t1 ≠ t2) (tồn tại hai bộ trùng mã nhưng khác nhau)
- **D.** ∀t1, t2 ∈ SINH_VIEN: (t1.maSV = t2.maSV → t1 = t2) (nếu trùng mã thì phải là cùng một bộ)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.3.a (Ví dụ 6): Định nghĩa khóa chính bằng logic vị từ: với mọi cặp bộ t1, t2 trong bảng, nếu chúng có cùng mã sinh viên (t1.maSV = t2.maSV) thì bắt buộc chúng phải là cùng một bộ (t1 = t2). Nghĩa là không thể tồn tại hai bộ khác nhau mà lại có cùng mã.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn biểu thức của ca vi phạm (∃ t1 ≠ t2 mà t1.maSV = t2.maSV).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy biểu thức Khóa chính: t1.maSV = t2.maSV → t1 = t2`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa chính: Nếu khóa bằng nhau thì 2 dòng đó phải là 1 (t1 = t2)!

---

### Câu 41 [db-c4-t1-041]

Trong CSDL `QLHANGHOA`, quy tắc nghiệp vụ vàng nào sau đây được quy định rõ ràng trong giáo trình?

- **A.** Mỗi đơn đặt hàng chỉ được giải quyết trong đúng một hóa đơn duy nhất và không bao giờ giao hàng vượt số lượng đặt  *(Đáp án đúng)*
- **B.** Mỗi đơn đặt hàng có thể được chia nhỏ để xuất thành nhiều hóa đơn khác nhau tùy theo lượng tồn kho thực tế
- **C.** Công ty bắt buộc phải giao đầy đủ 100% tất cả các mặt hàng khách đã đặt trước khi được phép in hóa đơn bán hàng
- **D.** Khách hàng chỉ được phép đặt một mặt hàng duy nhất trên mỗi đơn đặt hàng và phải thanh toán hết tiền đặt cọc

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục I.1.b (Quy tắc vàng): "Mỗi đơn đặt hàng chỉ được giải quyết trong một hóa đơn duy nhất. Do điều kiện khách quan, công ty có thể không giao đầy đủ các mặt hàng/số lượng theo đơn đặt hàng, nhưng không bao giờ giao vượt yêu cầu".
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thực tế ngoài đời nhiều đơn hàng giao nhiều lần, nhưng giáo trình QLHANGHOA quy định NGẶT NGHÈO: 1 đơn hàng giải quyết trong đúng 1 hóa đơn!
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Quy tắc vàng QLHANGHOA: 1 Đơn hàng = ĐÚNG 1 Hóa đơn; KHÔNG BAO GIỜ GIAO VƯỢT`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục I.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đặc thù đề thi: 1 Đơn đặt hàng ➔ ĐÚNG 1 Hóa đơn; Có thể giao thiếu nhưng TUYỆT ĐỐI KHÔNG GIAO VƯỢT!

---

### Câu 42 [db-c4-t1-042]

Xét ràng buộc thuộc tính tổng hợp: "Công nợ của khách hàng = Tổng tiền các hóa đơn - Tổng số tiền các phiếu thu". Bối cảnh của ràng buộc này gồm những quan hệ nào?

- **A.** Chỉ gồm 2 quan hệ là HOA_DON và PHIEU_THU vì hai bảng này chứa trực tiếp các thuộc tính số tiền giao dịch phát sinh
- **B.** Bối cảnh gồm 3 quan hệ: KHACH, HOA_DON và PHIEU_THU vì công thức tính toán liên quan trực tiếp đến cả ba bảng này  *(Đáp án đúng)*
- **C.** Chỉ gồm duy nhất 1 quan hệ KHACH vì thuộc tính congNo được lưu trữ như một cột thuộc tính nội bộ của bảng khách hàng
- **D.** Gồm 4 quan hệ: KHACH, HOA_DON, CTIET_HD và PHIEU_THU vì hóa đơn cần phải tính chi tiết từng mặt hàng và đơn giá

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.4.a (Ví dụ 11): Ràng buộc thuộc tính tổng hợp về công nợ trong CSDL QLHANGHOA xác định: congNo trong KHACH = SUM(trigiaHD trong HOA_DON) - SUM(soTien trong PHIEU_THU). Ba bảng trực tiếp tham gia vào ràng buộc này là KHACH, HOA_DON, PHIEU_THU.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh bỏ quên bảng KHACH (nghĩ công nợ chỉ là phép trừ hóa đơn với phiếu thu) hoặc thêm CTIET_HD dư thừa.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy bối cảnh Công nợ: Gồm đúng 3 bảng: KHACH, HOA_DON, PHIEU_THU`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Công nợ nằm ở KHACH, hóa đơn ở HOA_DON, phiếu thu ở PHIEU_THU ➔ Bối cảnh đúng 3 bảng!

---

### Câu 43 [db-c4-t1-043]

Trong ràng buộc công nợ trên, nếu kế toán thực hiện thao tác XÓA một phiếu thu trong bảng `PHIEU_THU`, DBMS cần xử lý như thế nào đối với công nợ của khách hàng?

- **A.** Hệ thống tự động từ chối việc xóa phiếu thu trong mọi tình huống vì dữ liệu tài chính kế toán là bất biến tuyệt đối
- **B.** Hoàn toàn không cần kiểm tra (-) vì phiếu thu bị xóa không làm ảnh hưởng đến các hóa đơn mua hàng đã phát hành trước đó
- **C.** Cần phải kiểm tra (+) và cập nhật lại công nợ của khách tương ứng bằng cách cộng thêm vào một khoản bằng số tiền phiếu thu bị xóa  *(Đáp án đúng)*
- **D.** Tự động giảm giá trị của thuộc tính congNo xuống một lượng tương ứng với số tiền được ghi trên phiếu thu vừa bị hủy bỏ

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.4.a & Bảng tầm ảnh hưởng: Vì congNo = Tổng HĐ - Tổng PT, khi XÓA một phiếu thu (bớt đi một khoản tiền đã trả), công nợ của khách sẽ phải TĂNG LÊN tương ứng. Thao tác Xóa trên PHIEU_THU mang dấu (+) và phải cập nhật lại congNo.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn "giảm công nợ" hoặc nghĩ xóa phiếu thu là an toàn (-).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Xóa phiếu thu: Làm GIẢM tổng tiền thu ➔ Công nợ phải TĂNG LÊN (+)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Xóa phiếu thu = Khách chưa trả khoản đó ➔ Công nợ tăng lên! Tầm ảnh hưởng là (+)!

---

### Câu 44 [db-c4-t1-044]

Trong CSDL `QLHANGHOA`, thuộc tính `congNo` trong bảng `KHACH` được quy ước ý nghĩa như thế nào khi mang giá trị âm (`congNo < 0`)?

- **A.** Khách hàng được hưởng chiết khấu thương mại đặc biệt tương ứng với tỷ lệ phần trăm số âm ghi nhận trên hệ thống
- **B.** Khách hàng đang nợ công ty tiền hàng và tài khoản của khách hàng đó đang bị tạm khóa giao dịch trên toàn hệ thống
- **C.** Giao dịch bị lỗi tính toán số học do nhân viên nhập sai dữ liệu đơn giá và hóa đơn cần phải được hủy bỏ ngay
- **D.** Công ty đang nợ khách hàng (do khách hàng đã trả tiền cọc hoặc thanh toán trước nhiều hơn tổng số tiền hàng đã mua)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục I.1.b (Đặc tả quan hệ KHACH): "congNo là công nợ với khách hàng — nếu congNo > 0: khách hàng nợ công ty, ngược lại congNo < 0: công ty nợ khách hàng (ví dụ do đặt cọc trước hoặc trả thừa)".
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ nợ thì phải luôn dương, số âm là lỗi nhập liệu hoặc khách nợ nhiều hơn.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy dấu công nợ: congNo > 0: Khách nợ công ty; congNo < 0: Công ty nợ khách hàng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục I.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Quy ước giáo trình: Dương = Khách nợ; Âm = Công ty nợ (khách trả trước tiền cọc)!

---

### Câu 45 [db-c4-t1-045]

Ràng buộc: "Số lượng hàng bán ra trên chi tiết hóa đơn không được vượt quá số lượng đặt hàng tương ứng (`CTIET_HD.soLuongBan <= DAT_HANG.soLuongDat`)". Đây là:

- **A.** RBTV liên thuộc tính, liên quan hệ vì ràng buộc so sánh hai giá trị thuộc tính nằm ở hai bảng khác nhau thông qua khóa liên kết  *(Đáp án đúng)*
- **B.** RBTV liên thuộc tính trong một quan hệ vì cả hai thuộc tính đều đo lường số lượng sản phẩm của cùng một mặt hàng cụ thể
- **C.** RBTV về miền giá trị vì nó quy định số lượng bán ra chỉ được phép nhận giá trị là các số nguyên dương trong thực tế
- **D.** RBTV liên bộ trong cùng một quan hệ vì cần phải so sánh số lượng giữa các dòng chi tiết hóa đơn khác nhau của cùng đơn hàng

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.3.a & Mục VI.5: Đây là ràng buộc so sánh soLuongBan (trong CTIET_HD) và soLuongDat (trong DAT_HANG thông qua HOA_DON). Vì hai thuộc tính nằm ở hai bảng khác nhau nên đây là RBTV liên thuộc tính, liên quan hệ.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm thành liên thuộc tính trong 1 bảng do không để ý soLuongBan và soLuongDat nằm ở 2 bảng khác nhau.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy hai bảng khác nhau: soLuongBan ở CTIET_HD, soLuongDat ở DAT_HANG ➔ LIÊN QUAN HỆ`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thuộc tính ở 2 bảng khác nhau so sánh với nhau = RBTV LIÊN THUỘC TÍNH, LIÊN QUAN HỆ!

---

### Câu 46 [db-c4-t1-046]

Khi biểu diễn một lược đồ CSDL bằng đồ thị vô hướng (với nút thuộc tính và nút quan hệ), sự xuất hiện của một "Chu trình" phản ánh điều gì?

- **A.** Lược đồ CSDL bị lỗi thiết kế nghiêm trọng và bắt buộc phải xóa bỏ ít nhất một quan hệ để đồ thị trở thành cây không chu trình
- **B.** Có nhiều đường dẫn ngữ nghĩa khác nhau liên kết giữa các thực thể, đòi hỏi phải thiết lập RBTV để tránh mâu thuẫn dữ liệu  *(Đáp án đúng)*
- **C.** Cơ sở dữ liệu đang xảy ra hiện tượng khóa chết (deadlock) giữa các tiến trình truy xuất đồng thời của người dùng trên hệ thống
- **D.** Toàn bộ các bảng trong chu trình đều phải có cùng một khóa chính duy nhất để đảm bảo khả năng đồng bộ hóa dữ liệu tự động

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.5.a: Khi lược đồ CSDL có chu trình trong đồ thị, giữa các thực thể sẽ có nhiều hơn một đường liên kết ngữ nghĩa. Để dữ liệu không bị mâu thuẫn giữa các đường đi, bắt buộc phải thiết lập thêm một RBTV ngữ nghĩa để kiểm soát.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ có chu trình trong CSDL là sai thiết kế (circular dependency) hoặc nhầm với deadlock.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Chu trình đồ thị: Chu trình KHÔNG PHẢI LỖI, nó chỉ đòi hỏi RBTV để tránh mâu thuẫn dữ liệu`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.5.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Chu trình trong đồ thị lược đồ CSDL ➔ Cần RBTV tương ứng để đồng bộ tính nhất quán!

---

### Câu 47 [db-c4-t1-047]

Trong chu trình 3 bảng `DAT_HANG - HOA_DON - CTIET_HD`, theo giáo trình, có mấy chính sách nghiệp vụ có thể áp dụng cho việc giao hàng?

- **A.** Có 4 chính sách: Giao hàng tận nơi, nhận hàng tại kho, giao hàng qua bên thứ ba và hủy đơn hàng tự động sau hai mươi tư giờ
- **B.** Có 2 chính sách: Chỉ cho phép thanh toán bằng tiền mặt hoặc cho phép thanh toán trả chậm qua thẻ ngân hàng liên kết
- **C.** Có 3 chính sách: Giao đủ 100% tất cả mặt hàng; Giao không vượt số lượng đặt (chuẩn QLHANGHOA); Giao tùy ý các mặt hàng  *(Đáp án đúng)*
- **D.** Duy nhất 1 chính sách: Bắt buộc giao đủ 100% tất cả các mặt hàng đã đặt thì hóa đơn mới được hệ thống xác nhận hợp lệ

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.5.a (Ví dụ 12): Có 3 chính sách: (1) Phải giao đầy đủ tất cả mặt hàng đã đặt; (2) Có thể không giao đầy đủ nhưng không bao giờ giao vượt (chuẩn CSDL QLHANGHOA); (3) Có thể gồm tùy ý các mặt hàng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh chỉ nhớ chính sách chuẩn của QLHANGHOA mà quên mất về mặt lý thuyết có đúng 3 trường hợp chính sách.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy 3 chính sách giao hàng: (1) Giao đủ 100%; (2) Không giao vượt; (3) Tùy ý`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.5.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Học thuộc 3 chính sách chu trình giao hàng trong giáo trình: Đầy đủ - Không vượt - Tùy ý!

---

### Câu 48 [db-c4-t1-048]

Trong Đồ án CSDL Sinh viên nghiên cứu đề tài: `SINHVIEN(MaSV, ...)`, `DETAI(MaDT, ...)`, `SV_DT(MaSV, MaDT, NoiAD, KQ)`. Khóa chính của bảng `SV_DT` là gì?

- **A.** Khóa chính gồm cả ba thuộc tính (MaSV, MaDT, NoiAD) để cho phép cùng một sinh viên làm cùng một đề tài tại nhiều nơi khác nhau
- **B.** Chỉ gồm duy nhất thuộc tính MaSV vì mỗi sinh viên chỉ được phép tham gia vào một đề tài nghiên cứu khoa học duy nhất mà thôi
- **C.** Chỉ gồm duy nhất thuộc tính MaDT vì mỗi đề tài khoa học chỉ được giao cho một sinh viên duy nhất đứng tên làm chủ nhiệm đề tài
- **D.** Khóa chính phức hợp gồm hai thuộc tính (MaSV, MaDT) biểu diễn mối quan hệ nhiều-nhiều giữa sinh viên và các đề tài nghiên cứu  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VIII.1.a: Lược đồ SV_DT(MaSV, MaDT, NoiAD, KQ) biểu diễn mối quan hệ nhiều-nhiều: Một sinh viên có thể làm nhiều đề tài, một đề tài có thể do nhiều sinh viên thực hiện. Khóa chính chuẩn mực là cặp thuộc tính (MaSV, MaDT).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ có thêm NoiAD thì khóa chính phải có 3 cột, hoặc nghĩ quan hệ 1-N.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Khóa chính bảng liên kết: Là cặp (MaSV, MaDT), mỗi sinh viên trong 1 đề tài có đúng 1 kết quả KQ`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VIII.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Bảng liên kết N-N chuẩn mực: Khóa chính = Cặp 2 khóa ngoại (MaSV, MaDT)!

---

### Câu 49 [db-c4-t1-049]

Xét quy tắc: "Mỗi sinh viên chỉ được tham gia tối đa 2 đề tài nghiên cứu khoa học". Trong Bảng Tầm Ảnh Hưởng, thao tác nào trên bảng `SV_DT` cần kiểm tra (`+`)?

- **A.** Thao tác THÊM (+) và SỬA (+* trên MaSV) vì các thao tác này có thể làm tăng số lượng đề tài của sinh viên đó vượt quá 2  *(Đáp án đúng)*
- **B.** Thao tác XÓA (+) vì việc rút bớt sinh viên khỏi đề tài có thể làm cho đề tài đó không còn đủ nhân sự thực hiện theo tiến độ
- **C.** Cả ba thao tác Thêm, Sửa, Xóa đều cần kiểm tra (+) vì số lượng đề tài phải luôn được giữ cố định theo quyết định của khoa
- **D.** Hoàn toàn không cần kiểm tra (-) vì số lượng đề tài tham gia là quyền tự do học thuật của mỗi cá nhân sinh viên trong trường

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VIII.1.a & Bảng tầm ảnh hưởng: Ràng buộc "tối đa 2 đề tài" là ràng buộc liên bộ. Khi THÊM một dòng mới vào SV_DT, số đề tài của sinh viên đó tăng lên ➔ có thể vượt quá 2 (cần kiểm tra +). Khi SỬA MaSV, sinh viên mới nhận đề tài có thể bị vượt quá 2 ➔ cần kiểm tra +*(MaSV). Khi XÓA, số đề tài giảm xuống nên không bao giờ vượt quá 2 ➔ Xóa là (-).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ thao tác Xóa cũng phải kiểm tra hoặc không nghĩ đến việc sửa MaSV.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ràng buộc Tối đa: Thêm = (+); Sửa MaSV = (+*); XÓA = (-) vì bớt đi thì không thể vượt trần`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VIII.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Ràng buộc trần "TỐI ĐA N": Thêm làm tăng (+); Xóa làm giảm (-) an toàn tuyệt đối!

---

### Câu 50 [db-c4-t1-050]

Xét ràng buộc: "Tổng kinh phí thực hiện các đề tài do một giảng viên làm chủ nhiệm không được vượt quá 500 triệu đồng". Đây là loại RBTV nào?

- **A.** RBTV về miền giá trị của bảng DETAI vì nó trực tiếp giới hạn mức trần của trường thuộc tính Kinhphi không được vượt quá 500
- **B.** RBTV liên bộ trong quan hệ DETAI (hoặc thuộc tính tổng hợp) vì cần gom nhóm và tính tổng kinh phí theo từng chủ nhiệm đề tài  *(Đáp án đúng)*
- **C.** RBTV liên thuộc tính trong bảng DETAI vì nó so sánh giữa thuộc tính Kinhphi và thuộc tính Chunhiem của cùng một dòng đề tài
- **D.** RBTV liên bộ liên quan hệ giữa DETAI và SINHVIEN vì sinh viên là người trực tiếp thụ hưởng nguồn kinh phí nghiên cứu khoa học

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VIII.1.a & VII.1.a: Để tính tổng kinh phí của một chủ nhiệm, hệ thống phải duyệt qua nhiều bộ (dòng) có cùng Chunhiem trong bảng DETAI để tính SUM(Kinhphi). Do đó đây là RBTV liên bộ (hoặc thuộc tính tổng hợp nội bộ). Không phải miền giá trị vì miền giá trị chỉ xét trên 1 đề tài đơn lẻ.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhìn thấy số 500 triệu là tưởng ngay ràng buộc miền giá trị của cột Kinhphi.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy TỔNG kinh phí theo nhóm: Là RBTV LIÊN BỘ (phải tính SUM qua nhiều dòng của cùng chủ nhiệm)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VIII.1.a & VII.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Có phép gom nhóm GROUP BY / SUM nhiều dòng ➔ Ràng buộc LIÊN BỘ!

---



---

## <a name="de-thi-bay-so-2-db-c4-t2"></a> ĐỀ THI BẪY SỐ 2 (db-c4-t2)

> **Quy mô:** 50 câu hỏi bẫy vận dụng cao (100% Hard / Trick Questions)
> **Mã định danh:** `db-c4-t2-001` đến `db-c4-t2-050`
> **Cơ chế chống đoán bừa:** Độ lệch chiều dài phương án $\Delta L \le 15$ ký tự mọi câu hỏi

### Câu 1 [db-c4-t2-001]

Giả sử tại thời điểm kiểm tra, mọi sinh viên trong bảng `SINH_VIEN` đều có năm sinh sau năm 2000. Điều này có đồng nghĩa với việc "Sinh viên phải sinh sau năm 2000" là một RBTV hay không?

- **A.** Chỉ đồng nghĩa nếu bảng SINH_VIEN có số lượng bản ghi lớn hơn một nghìn dòng để bảo đảm tính đại diện của mẫu thống kê
- **B.** Hoàn toàn đồng nghĩa, vì mọi tính chất đúng trên toàn bộ các dòng của bảng tại thời điểm hiện tại đều là một RBTV chuẩn
- **C.** Hoàn toàn không đồng nghĩa, vì đây chỉ là sự trùng hợp ngẫu nhiên của tập dữ liệu hiện tại chứ không phải quy tắc quản lý  *(Đáp án đúng)*
- **D.** Hệ quản trị CSDL sẽ tự động tạo một ràng buộc CHECK tương ứng ngay khi phát hiện tính chất này trên các bản ghi hiện có

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục II.1.a & Section 0: Một tính chất tình cờ thỏa mãn trên trạng thái dữ liệu tức thời (Snapshot) KHÔNG ĐỒNG NGHĨA đó là một RBTV. RBTV phải là quy tắc quản lý bất biến do con người/nghiệp vụ quy định, áp dụng cho mọi trạng thái dữ liệu trong tương lai.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn giữa dữ liệu ngẫu nhiên hiện tại (Instance) và bất biến logic của lược đồ (Schema Invariant).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ngụy biện thống kê: Dữ liệu hiện có đúng KHÔNG CÓ NGHĨA đó là một RBTV`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục II.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* RBTV = Luật quản lý bất biến! Sự trùng hợp ngẫu nhiên của dữ liệu không bao giờ tạo nên RBTV.

---

### Câu 2 [db-c4-t2-002]

Trong thực tế quản trị hệ thống cơ sở dữ liệu, việc kiểm tra các RBTV phức tạp thường được hoãn lại để kiểm tra định kỳ vào ban đêm nhằm mục đích gì?

- **A.** Nhằm mục đích xóa bỏ hoàn toàn tất cả các ràng buộc khóa ngoại để hệ thống đạt tốc độ xử lý nhanh gấp hàng trăm lần bình thường
- **B.** Cho phép người dùng tùy ý chèn dữ liệu sai lệch vào hệ thống mà không bao giờ bị hệ quản trị cơ sở dữ liệu phát hiện và xử lý
- **C.** Vì các câu lệnh SQL ban ngày không có khả năng truy xuất đến các bảng dữ liệu lịch sử để tiến hành kiểm tra tính toàn vẹn
- **D.** Giảm tải áp lực tính toán I/O tức thời cho hệ thống trong giờ cao điểm và tối ưu hóa thời gian phản hồi giao dịch của người dùng  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục II.1.b: Kiểm tra RBTV có thể thực hiện tức thời (khi cập nhật) hoặc định kỳ/đột xuất khi bảo trì. Với các RBTV phức tạp đòi hỏi quét qua nhiều triệu bản ghi, việc kiểm tra định kỳ vào ban đêm (Batch verification) giúp tránh nghẽn I/O hệ thống ban ngày.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ kiểm tra định kỳ là để xóa bỏ ràng buộc hoặc che giấu lỗi.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thời điểm kiểm tra định kỳ: TỐI ƯU HÓA HIỆU NĂNG I/O và thời gian phản hồi`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục II.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Kiểm tra định kỳ = Giải pháp cân bằng giữa tính toàn vẹn và hiệu năng hệ thống!

---

### Câu 3 [db-c4-t2-003]

Khi một quy tắc quản lý nghiệp vụ không thể biểu diễn được bằng các ràng buộc khai báo chuẩn (như CHECK, PRIMARY KEY, FOREIGN KEY), giải pháp chuẩn mực trong RDBMS là gì?

- **A.** Cài đặt quy tắc nghiệp vụ đó bằng Bộ kích hoạt tự động (Trigger) hoặc Stored Procedure kết hợp Transaction trên máy chủ CSDL  *(Đáp án đúng)*
- **B.** Bỏ qua hoàn toàn quy tắc nghiệp vụ đó và chỉ tin cậy vào việc người dùng sẽ tự giác nhập liệu chính xác trên bàn phím máy tính
- **C.** Chuyển toàn bộ cơ sở dữ liệu sang dạng các tệp văn bản phi cấu trúc XML để lập trình viên tự xử lý bằng vòng lặp thủ công
- **D.** Bắt buộc phải thay đổi toàn bộ lược đồ CSDL và phân rã các bảng thành dạng chuẩn tối cao 5NF thì mới có thể kiểm tra được

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục II.1.b & Section 0: Các ràng buộc phức tạp liên quan đến nhiều bảng, tính toán tổng hợp hoặc điều kiện phụ thuộc nghiệp vụ tinh vi không thể dùng CHECK khai báo sẽ được cài đặt bằng Trigger (Bộ kích hoạt tự động) hoặc Thủ tục lưu trữ (Stored Procedure).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ mọi ràng buộc đều cài được bằng lệnh CHECK hoặc chọn phương án bỏ qua.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy cơ chế cài đặt: TRIGGER là công cụ mạnh mẽ nhất để cài đặt RBTV phức tạp`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục II.1.b & Section 0
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Ràng buộc đơn giản ➔ Dùng CHECK / FK; Ràng buộc liên quan hệ phức tạp ➔ Dùng TRIGGER!

---

### Câu 4 [db-c4-t2-004]

Ràng buộc nào sau đây thuộc nhóm "Ràng buộc ngữ nghĩa" (Semantic Integrity Constraint) phụ thuộc chặt chẽ vào quy tắc nghiệp vụ của từng bài toán cụ thể?

- **A.** Khóa chính của một bảng bất kỳ tuyệt đối không được phép chứa giá trị NULL và phải có giá trị phân biệt duy nhất
- **B.** Số tiền tạm ứng của một nhân viên không được vượt quá số tiền lương cơ bản hàng tháng được nhận của nhân viên đó  *(Đáp án đúng)*
- **C.** Khóa ngoại của bảng con phải tham chiếu đến một khóa chính hoặc một khóa ứng viên duy nhất đã tồn tại ở bảng cha
- **D.** Kiểu dữ liệu của một cột được định nghĩa là số nguyên int thì không thể lưu trữ trực tiếp một đoạn văn bản chuỗi

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục II.1.a & Section 0: Khóa chính, Khóa ngoại, Kiểu dữ liệu là các ràng buộc cấu trúc (Structural constraints) có sẵn trong mô hình quan hệ. Quy định "tamUng <= luong" là ràng buộc ngữ nghĩa nghiệp vụ riêng biệt của từng doanh nghiệp cụ thể.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn giữa ràng buộc cấu trúc của mô hình quan hệ (PK, FK) và ràng buộc ngữ nghĩa nghiệp vụ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân biệt cấu trúc vs ngữ nghĩa: tamUng <= luong là quy tắc NGỮ NGHĨA NGHIỆP VỤ`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục II.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* PK, FK, Kiểu dữ liệu = Ràng buộc CẤU TRÚC; Luật kinh doanh riêng (lương, tạm ứng) = Ràng buộc NGỮ NGHĨA!

---

### Câu 5 [db-c4-t2-005]

Ràng buộc toàn vẹn đóng vai trò là nền tảng trực tiếp bảo đảm thuộc tính nào trong 4 thuộc tính ACID chuẩn mực của một giao dịch (Transaction)?

- **A.** Thuộc tính Tính cô lập (Isolation - Chữ I trong ACID), đảm bảo các giao dịch chạy song song không nhìn thấy dữ liệu trung gian
- **B.** Thuộc tính Tính nguyên tố (Atomicity - Chữ A trong ACID), đảm bảo toàn bộ các thao tác trong giao dịch đều phải hoàn tất trọn vẹn
- **C.** Thuộc tính Tính nhất quán (Consistency - Chữ C trong ACID), đảm bảo CSDL chuyển từ trạng thái hợp lệ này sang trạng thái hợp lệ khác  *(Đáp án đúng)*
- **D.** Thuộc tính Tính bền vững (Durability - Chữ D trong ACID), đảm bảo dữ liệu đã COMMIT sẽ không bao giờ bị mất khi gặp sự cố mất điện

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục II.1.a & Section 0: Chữ C trong ACID là Consistency (Tính nhất quán): Một giao dịch phải đưa CSDL từ một trạng thái thỏa mãn tất cả các RBTV sang một trạng thái mới cũng thỏa mãn tất cả các RBTV. RBTV chính là thước đo định nghĩa tính nhất quán này.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm sang Tính nguyên tố (Atomicity) vì nghĩ vi phạm là rollback toàn bộ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ACID: RBTV bảo vệ tính NHẤT QUÁN (Consistency - chữ C)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục II.1.a & Section 0
  + 💡 *Mẹo phản xạ nhanh (`tip`):* RBTV = Bản thiết kế của Tính Nhất Quán (Consistency) trong giao dịch CSDL!

---

### Câu 6 [db-c4-t2-006]

Cho quan hệ `NHANVIEN(maNV, tenNV, luong, maPhong)`. Ràng buộc: "Lương nhân viên phải lớn hơn 3 triệu đồng" có bối cảnh là gì?

- **A.** Bối cảnh gồm toàn bộ các bảng trong CSDL vì tiền lương là thông tin tài chính nhạy cảm ảnh hưởng đến kết quả kinh doanh chung
- **B.** Bối cảnh gồm cả 2 quan hệ NHANVIEN và PHONGBAN vì nhân viên bắt buộc phải thuộc về một phòng ban cụ thể để được trả lương
- **C.** Bối cảnh không xác định vì quy định mức lương tối thiểu phụ thuộc vào chính sách tiền lương chung của toàn bộ doanh nghiệp
- **D.** Bối cảnh là duy nhất 1 quan hệ NHANVIEN vì biểu thức điều kiện chỉ truy xuất và so sánh duy nhất thuộc tính luong của bảng này  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a & IV.1.a: Biểu thức "luong > 3000000" chỉ cần kiểm tra trên thuộc tính luong của quan hệ NHANVIEN. Không cần đối chiếu sang bất kỳ bảng nào khác. Do đó bối cảnh là duy nhất 1 quan hệ NHANVIEN.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh thấy có cột maPhong nên suy diễn sang bảng PHONGBAN mặc dù điều kiện lương không hề đụng đến phòng ban.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy suy diễn dư thừa: Chỉ xét các bảng có thuộc tính THỰC SỰ THAM GIA vào biểu thức điều kiện`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Biểu thức chỉ chứa cột bảng nào ➔ Bối cảnh chỉ gồm bảng đó!

---

### Câu 7 [db-c4-t2-007]

Mặc dù rất dễ hiểu đối với người dùng thông thường, nhược điểm chí mạng lớn nhất của việc dùng Ngôn ngữ tự nhiên để đặc tả RBTV là gì?

- **A.** Dễ gây ra sự nhập nhằng, đa nghĩa, thiếu tính chính xác toán học và không thể biên dịch tự động bởi hệ quản trị cơ sở dữ liệu  *(Đáp án đúng)*
- **B.** Tốn quá nhiều dung lượng bộ nhớ RAM trên máy chủ khi hệ thống tiến hành nạp các văn bản quy tắc vào bộ nhớ đệm ban đầu
- **C.** Chỉ có thể áp dụng được cho các cơ sở dữ liệu nhỏ có ít hơn năm bảng và hoàn toàn bất lực trước các hệ thống CSDL lớn
- **D.** Bắt buộc mọi người dùng đầu cuối phải có chứng chỉ chuyên sâu về ngôn ngữ học thì mới có thể đọc và hiểu được tài liệu

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a: Ngôn ngữ tự nhiên có ưu điểm thân thiện, trực quan nhưng nhược điểm lớn nhất là tính nhập nhằng (ambiguity), dễ hiểu lầm ngữ nghĩa, thiếu chặt chẽ toán học và máy tính không thể trực tiếp thực thi/kiểm chứng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh chọn các phương án liên quan đến phần cứng (RAM) hoặc kích thước bảng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ngôn ngữ tự nhiên: TÍNH NHẬP NHẰNG, đa nghĩa và không thể tự động biên dịch`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Ngôn ngữ tự nhiên: Dễ hiểu với người ➔ Nhưng MƠ HỒ với máy tính!

---

### Câu 8 [db-c4-t2-008]

Trong CSDL `QLHANGHOA`, xét ràng buộc: "Mỗi khách hàng có một số điện thoại riêng biệt, không có hai khách hàng nào trùng số điện thoại". Bối cảnh là:

- **A.** Gồm 2 quan hệ KHACH và DAT_HANG vì số điện thoại của khách hàng được sử dụng để liên lạc khi nhân viên giao đơn đặt hàng
- **B.** Duy nhất 1 quan hệ KHACH vì điều kiện kiểm tra sự trùng lặp số điện thoại chỉ diễn ra giữa các bản ghi bên trong bảng khách hàng  *(Đáp án đúng)*
- **C.** Gồm 3 quan hệ KHACH, DAT_HANG và HOA_DON vì số điện thoại bắt buộc phải được in rõ ràng lên trên hóa đơn thanh toán cho khách
- **D.** Không có bối cảnh vì số điện thoại là thông tin liên lạc tự do, khách hàng có thể sử dụng chung số điện thoại của gia đình

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a & V.3.a: Ràng buộc số điện thoại không trùng là ràng buộc liên bộ (tính duy nhất) trên quan hệ KHACH. Việc kiểm tra chỉ diễn ra giữa các bộ trong bảng KHACH. Bối cảnh là duy nhất 1 quan hệ KHACH.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh lại liên hệ thực tế giao hàng để kéo thêm bảng DAT_HANG và HOA_DON vào bối cảnh.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy bối cảnh bảng khách: Kiểm tra trùng số điện thoại CHỈ XÉT trên bảng KHACH`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đặc tả ràng buộc ở bảng nào thì bối cảnh ở bảng đó, đừng suy diễn nghiệp vụ bên ngoài!

---

### Câu 9 [db-c4-t2-009]

Về mặt hình thức biểu diễn, một Bảng Tầm Ảnh Hưởng chuẩn mực của một RBTV được cấu trúc như thế nào?

- **A.** Là biểu đồ tròn thể hiện tỷ lệ phần trăm các bản ghi dữ liệu bị vi phạm quy tắc trong suốt lịch sử vận hành của hệ thống
- **B.** Là cây phân cấp một chiều liệt kê toàn bộ các thuộc tính khóa chính và khóa ngoại của các bảng có liên quan trong hệ thống
- **C.** Là ma trận hai chiều: các dòng là danh sách các quan hệ trong bối cảnh, các cột tương ứng với 3 thao tác Thêm, Sửa, Xóa  *(Đáp án đúng)*
- **D.** Là đồ thị có hướng mô tả luồng di chuyển của các gói tin mạng giữa máy khách (Client) và máy chủ cơ sở dữ liệu (Server)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a & Section 0: Bảng tầm ảnh hưởng là một ma trận 2 chiều: Các hàng (rows) biểu diễn các quan hệ (bảng) trong bối cảnh; Các cột (columns) biểu diễn 3 thao tác cập nhật: Thêm (Insert), Xóa (Delete), Sửa (Update).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm Bảng tầm ảnh hưởng với đồ thị dữ liệu hoặc cây phân cấp thuộc tính.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy cấu trúc ma trận: HÀNG = CÁC BẢNG TRONG BỐI CẢNH; CỘT = THÊM, XÓA, SỬA`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Bảng Tầm Ảnh Hưởng = Ma trận [Danh sách Bảng] x [Thêm, Xóa, Sửa]!

---

### Câu 10 [db-c4-t2-010]

Trong công tác phát triển phần mềm và quản trị CSDL, Bảng Tầm Ảnh Hưởng đóng vai trò cốt lõi như thế nào khi lập trình Trigger?

- **A.** Loại bỏ hoàn toàn sự cần thiết của việc tạo chỉ mục (Index) trên các bảng dữ liệu lớn mà vẫn bảo đảm tốc độ truy vấn tức thì
- **B.** Tự động biên dịch toàn bộ các câu lệnh SQL sang mã máy mà không cần thông qua trình tối ưu hóa truy vấn của hệ quản trị CSDL
- **C.** Giúp hệ thống tự động sửa chữa các lỗi cú pháp câu lệnh SQL của lập trình viên trước khi gửi câu lệnh đến bộ xử lý trung tâm
- **D.** Chỉ rõ cho lập trình viên biết cần phải viết Trigger trên những bảng nào và gắn với các sự kiện nào (AFTER INSERT, UPDATE, DELETE)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a & Section 0: Mỗi dấu (+) trong Bảng tầm ảnh hưởng tại hàng R, cột Thao tác (Insert/Delete/Update) chính là kim chỉ nam báo cho lập trình viên biết bắt buộc phải viết Trigger trên bảng R gắn với sự kiện tương ứng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ Bảng tầm ảnh hưởng tự động sửa lỗi SQL hoặc thay thế cho việc đánh chỉ mục.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy vai trò Bảng tầm ảnh hưởng: LÀ BẢN THIẾT KẾ CHO TRIGGER trên từng bảng và từng sự kiện`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a & Section 0
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mỗi ô (+) trong Bảng Tầm Ảnh Hưởng = Một Trigger cần phải được cài đặt trên hệ thống!

---

### Câu 11 [db-c4-t2-011]

Trong bảng `KET_QUA(maSV, maMH, lanThi, diem)` có khóa chính `(maSV, maMH, lanThi)`. Khi THÊM một bản ghi mới, thao tác này có tầm ảnh hưởng là:

- **A.** Bắt buộc kiểm tra (+) để bảo đảm bộ ba giá trị (maSV, maMH, lanThi) vừa thêm không bị trùng khớp với bất kỳ dòng nào đã có sẵn  *(Đáp án đúng)*
- **B.** Hoàn toàn không cần kiểm tra (-) vì mỗi sinh viên luôn có kết quả thi độc lập không thể bị trùng lặp với kết quả của người khác
- **C.** Chỉ cần kiểm tra có điều kiện +(*) khi điểm số chèn vào nhỏ hơn điểm trung bình yêu cầu để xét tư cách tốt nghiệp ra trường
- **D.** Hệ thống chỉ kiểm tra thuộc tính maSV, còn maMH và lanThi thì không cần kiểm tra vì môn học đã được mở theo thời khóa biểu

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.3.a & Section I.1.a: Khóa chính của KET_QUA là khóa phức hợp gồm 3 thuộc tính (maSV, maMH, lanThi). Khi THÊM một bộ mới, DBMS bắt buộc phải kiểm tra (+) cả tổ hợp 3 thuộc tính này để không bị trùng lặp.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ chỉ cần kiểm tra maSV mà quên mất đây là khóa chính phức hợp 3 cột.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy khóa chính phức hợp: Bắt buộc kiểm tra (+) TRÊN CẢ TỔ HỢP 3 CỘT (maSV, maMH, lanThi)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa chính dù 1 cột hay nhiều cột: THÊM bản ghi mới LUÔN LUÔN là (+)!

---

### Câu 12 [db-c4-t2-012]

Giả sử thuộc tính khóa ngoại `maKhoa` trong bảng `SINH_VIEN` cho phép nhận giá trị NULL. Khi THÊM một sinh viên mới có `maKhoa = NULL`, DBMS sẽ:

- **A.** Báo lỗi vi phạm khóa ngoại ngay lập tức và từ chối thao tác chèn vì giá trị NULL không thể tìm thấy trong danh mục mã khoa của KHOA
- **B.** Cho phép thêm ngay mà không cần kiểm tra sự tồn tại trong bảng KHOA vì giá trị NULL biểu thị sinh viên đó chưa được xếp vào khoa nào  *(Đáp án đúng)*
- **C.** Tự động gán mã khoa của sinh viên đó về mã khoa đầu tiên được tìm thấy trong bảng KHOA để duy trì tính toàn vẹn tham chiếu
- **D.** Tạm ngừng giao dịch và chờ người quản trị nhập bổ sung một mã khoa hợp lệ từ bàn phím trước khi cho phép lưu trữ vào ổ đĩa

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a & Chuẩn SQL: Khóa ngoại có thể nhận giá trị NULL (nếu không có ràng buộc NOT NULL). Khi giá trị khóa ngoại là NULL, hệ thống bỏ qua kiểm tra tham chiếu ở bảng cha vì bản ghi đó chưa có mối liên kết đến cha.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh thường nghĩ khóa ngoại KHÔNG BAO GIỜ được mang giá trị NULL, hoặc nghĩ NULL sẽ gây lỗi FK violation.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy NULL trong khóa ngoại: NULL được chấp nhận và BỎ QUA KIỂM TRA THAM CHIẾU`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa ngoại = NULL ➔ Hợp lệ (nếu cột nullable) và không cần tra cứu bảng cha!

---

### Câu 13 [db-c4-t2-013]

Bảng `KHOA` đang được cả hai bảng `SINH_VIEN` (qua `maKhoa`) và `GIANG_VIEN` (qua `maKhoa`) tham chiếu. Thao tác THÊM một khoa mới vào bảng `KHOA` sẽ:

- **A.** Mang dấu trừ (-) đối với bảng SINH_VIEN nhưng bắt buộc mang dấu cộng (+) đối với bảng GIANG_VIEN để bảo đảm nhân sự giảng dạy
- **B.** Bắt buộc có tầm ảnh hưởng là dấu cộng (+) vì hệ thống phải kiểm tra xem khoa mới thêm đã có sinh viên và giảng viên hay chưa
- **C.** Luôn luôn có tầm ảnh hưởng là dấu trừ (-) đối với cả hai ràng buộc khóa ngoại vì thêm khoa mới không làm bất kỳ ai bị mồ côi  *(Đáp án đúng)*
- **D.** Bị hệ quản trị CSDL từ chối thực thi trừ khi người dùng đồng thời chèn thêm ít nhất một sinh viên và một giảng viên vào hệ thống

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a: Dù có bao nhiêu bảng con tham chiếu đến bảng KHOA thì KHOA vẫn đóng vai trò là bảng Cha. Việc THÊM một bản ghi cha mới độc lập không bao giờ làm cho bản ghi con nào hiện có bị vi phạm. Do đó luôn là dấu trừ (-).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh thấy có nhiều bảng con tham chiếu tưởng rằng thao tác Thêm ở bảng cha sẽ bị phức tạp hóa thành (+).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thêm bảng cha nhiều con: Luôn luôn là (-) vì sinh thêm cha không ảnh hưởng các con`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thêm ở bảng Cha dù có 1 hay 100 bảng con tham chiếu thì vẫn luôn là DẤU TRỪ (-)!

---

### Câu 14 [db-c4-t2-014]

Xét quy tắc liên bộ: "Lương của mọi nhân viên đều phải nhỏ hơn lương của trưởng phòng trực tiếp quản lý nhân viên đó". Khi THÊM một nhân viên mới:

- **A.** Thao tác THÊM bị hệ thống khóa lại và chỉ cho phép thực hiện sau khi trưởng phòng đã ký xác nhận điện tử trên hệ thống nội bộ
- **B.** Thao tác THÊM trên bảng NHANVIEN hoàn toàn không cần kiểm tra (-) vì nhân viên mới vào làm luôn có mức lương khởi điểm tối thiểu
- **C.** Chỉ cần kiểm tra có điều kiện +(*) khi nhân viên mới thêm được bổ nhiệm vào vị trí phó trưởng phòng của một đơn vị trực thuộc
- **D.** Thao tác THÊM trên bảng NHANVIEN cần kiểm tra (+) vì mức lương của nhân viên mới chèn có nguy cơ cao hơn lương của trưởng phòng  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.3.a: Ràng buộc so sánh lương giữa các bộ trong cùng bảng NHANVIEN. Khi thêm một nhân viên mới với một mức lương cụ thể, có nguy cơ mức lương đó vượt quá lương trưởng phòng của họ. Bắt buộc phải kiểm tra (+).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ nhân viên mới lương thấp nên không cần kiểm tra.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy nghiệp vụ lương: Thêm nhân viên mới có thể vi phạm điều kiện so sánh ➔ Kiểm tra (+)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thêm bộ mới tham gia vào điều kiện so sánh giá trị ➔ Bắt buộc là (+)

---

### Câu 15 [db-c4-t2-015]

Trong CSDL `QLHANGHOA`, khi kế toán THÊM một phiếu thu mới vào bảng `PHIEU_THU`, tầm ảnh hưởng đối với ràng buộc công nợ khách hàng là gì?

- **A.** Bắt buộc kiểm tra (+) trên bảng PHIEU_THU để tính toán và cập nhật làm giảm số tiền công nợ của khách hàng trong KHACH  *(Đáp án đúng)*
- **B.** Hoàn toàn không cần kiểm tra (-) vì việc thu thêm tiền của khách chỉ làm tăng số dư tài khoản tiền mặt của doanh nghiệp
- **C.** Thao tác THÊM bị hủy bỏ nếu số tiền trên phiếu thu lớn hơn tổng số tiền của tất cả các hóa đơn khách hàng đã từng mua trước đó
- **D.** Chỉ kiểm tra có điều kiện +(*) khi phiếu thu được thanh toán bằng hình thức chuyển khoản điện tử qua cổng thanh toán quốc tế

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.4.a (Ví dụ 11): Vì congNo = Tổng HĐ - Tổng PT, khi THÊM một phiếu thu mới, tổng tiền thu tăng lên dẫn đến công nợ giảm đi. Thao tác THÊM trên PHIEU_THU bắt buộc phải kiểm tra (+) và cập nhật lại trường congNo trong bảng KHACH.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ chỉ có hóa đơn mới làm tăng nợ cần kiểm tra, còn phiếu thu là tiền về nên là (-).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Thêm phiếu thu: Bắt buộc là (+) vì nó trực tiếp thay đổi giá trị thuộc tính tổng hợp congNo`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thuộc tính tổng hợp: Thao tác làm thay đổi biến số thành phần đều mang dấu (+)!

---

### Câu 16 [db-c4-t2-016]

Nếu ràng buộc Khóa ngoại được cấu hình với hành vi `ON DELETE CASCADE`, điều gì sẽ xảy ra khi người dùng thực thi lệnh XÓA một bản ghi ở bảng Cha?

- **A.** Thao tác xóa lập tức bị chặn lại và hệ thống trả về thông báo lỗi vi phạm tính toàn vẹn tham chiếu của cơ sở dữ liệu
- **B.** Hệ quản trị CSDL sẽ tự động xóa tất cả các bản ghi ở bảng Con đang tham chiếu đến bản ghi cha vừa bị xóa mà không báo lỗi  *(Đáp án đúng)*
- **C.** Bản ghi cha bị xóa nhưng toàn bộ các bản ghi con tương ứng sẽ được hệ thống tự động gán giá trị khóa ngoại về mức mặc định 0
- **D.** Hệ thống sẽ sao lưu toàn bộ các bản ghi con vào một bảng tạm thời trên đĩa cứng rồi mới cho phép người dùng xóa bản ghi cha

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a & Chuẩn SQL: Hành vi CASCADE (Xóa dây chuyền): Khi một bản ghi ở bảng Cha bị xóa, DBMS sẽ tự động quét và xóa sạch tất cả các bản ghi con đang tham chiếu tới nó để bảo đảm không có bản ghi nào bị mồ côi.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm CASCADE với RESTRICT (chặn lại báo lỗi) hoặc nhầm với SET NULL.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ON DELETE CASCADE: TỰ ĐỘNG XÓA DÂY CHUYỀN toàn bộ các bản ghi con`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* CASCADE = Thác đổ (xóa cha ➔ xóa luôn các con); RESTRICT = Chặn đứng báo lỗi!

---

### Câu 17 [db-c4-t2-017]

Trong ràng buộc Khóa ngoại giữa `KET_QUA` và `MON_HOC` (`maMH` tham chiếu `MON_HOC.maMH`), thao tác XÓA một kết quả thi trong `KET_QUA` có tầm ảnh hưởng là:

- **A.** Ký hiệu kiểm tra có điều kiện +(*) vì chỉ cần kiểm tra khi điểm số của kết quả thi bị xóa có giá trị lớn hơn hoặc bằng năm
- **B.** Bắt buộc là dấu cộng (+) vì hệ thống phải kiểm tra xem môn học đó còn có sinh viên nào khác tham gia dự thi nữa hay không
- **C.** Luôn luôn là dấu trừ (-) vì xóa một kết quả thi hoàn toàn không gây ảnh hưởng đến sự tồn tại hợp lệ của môn học trong danh mục  *(Đáp án đúng)*
- **D.** Thao tác xóa trên bảng con luôn bị cấm tuyệt đối bởi tất cả các hệ quản trị CSDL quan hệ để phục vụ mục đích lưu trữ lịch sử

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a: KET_QUA là bảng Con tham chiếu đến bảng Cha MON_HOC. Xóa một bản ghi con trong KET_QUA không bao giờ ảnh hưởng đến môn học ở bảng Cha. Do đó thao tác Xóa trên bảng Con luôn là dấu trừ (-).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ điểm thi quan trọng không được xóa hoặc nhầm Xóa ở con là (+).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Xóa bảng con KET_QUA: Mang dấu (-) đối với ràng buộc khóa ngoại`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Xóa bảng Con đối với Khóa ngoại ➔ LUÔN LUÔN LÀ DẤU TRỪ (-)!

---

### Câu 18 [db-c4-t2-018]

Xét ràng buộc liên thuộc tính trong bảng `HOA_DON`: `ngayHD <= ngayXuat`. Khi XÓA một hóa đơn bán hàng, tầm ảnh hưởng trên bảng `HOA_DON` là:

- **A.** Đánh dấu dấu cộng (+) vì hệ thống bắt buộc phải kiểm tra xem hàng hóa đã được xuất kho thực tế ra khỏi kho bãi hay chưa
- **B.** Đánh dấu dấu cộng (+) vì việc xóa một hóa đơn có thể làm mất tính liên tục của chuỗi số thứ tự ngày tháng phát hành hóa đơn
- **C.** Đánh dấu kiểm tra có điều kiện +(*) vì chỉ cần kiểm tra khi ngày xuất hàng của hóa đơn bị xóa trùng khớp với ngày hiện tại
- **D.** Đánh dấu dấu trừ (-) vì việc xóa bỏ một dòng không thể làm nảy sinh bất kỳ sự mâu thuẫn thời gian nào trên các dòng còn lại  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.2.a: Ràng buộc liên thuộc tính ngayHD <= ngayXuat chỉ có hiệu lực trên từng dòng riêng lẻ của HOA_DON. Khi xóa một dòng, bản thân dòng đó biến mất, các dòng khác không bị tác động. Do đó Xóa là dấu trừ (-).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh liên hệ sang các thủ tục xuất kho thực tế nên chọn nhầm (+).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Xóa liên thuộc tính: Luôn là dấu trừ (-) vì mỗi dòng kiểm tra độc lập`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Ràng buộc liên thuộc tính trong 1 bảng: Thêm = (+); XÓA = (-); Sửa = (+*(cột_tham_gia))!

---

### Câu 19 [db-c4-t2-019]

Trong cấu hình mặc định (RESTRICT / NO ACTION), nếu cố tình XÓA một sinh viên đang có điểm trong bảng `KET_QUA`, điều gì sẽ xảy ra?

- **A.** Lệnh DELETE bị từ chối thực thi và DBMS báo lỗi vi phạm ràng buộc khóa ngoại (Foreign key violation error) ngay lập tức  *(Đáp án đúng)*
- **B.** Hệ thống tự động xóa toàn bộ điểm thi của sinh viên đó trong bảng KET_QUA rồi sau đó mới tiến hành xóa sinh viên trong bảng
- **C.** Sinh viên bị xóa thành công và các bản ghi điểm của sinh viên đó trong bảng KET_QUA sẽ tự động được gán mã sinh viên về NULL
- **D.** Thao tác xóa vẫn được chấp nhận nhưng hệ thống sẽ gửi một email cảnh báo đến tài khoản quản trị viên cấp cao của hệ thống

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a & Section 0: Khi xóa ở bảng Cha (SINH_VIEN) mà bảng Con (KET_QUA) đang có bản ghi tham chiếu, theo cơ chế bảo vệ tham chiếu mặc định (RESTRICT/NO ACTION), DBMS sẽ lập tức từ chối lệnh xóa và phát sinh lỗi vi phạm khóa ngoại.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm cơ chế mặc định với CASCADE hoặc SET NULL.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy xóa bảng Cha mặc định: BỊ TỪ CHỐI THỰC THI (RESTRICT), báo lỗi vi phạm FK`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mặc định trong RDBMS khi xóa Cha đang có Con ➔ CHẶN LẠI VÀ BÁO LỖI!

---

### Câu 20 [db-c4-t2-020]

Trong CSDL `QLHANGHOA`, xét ràng buộc: "Mỗi hóa đơn phải tương ứng với một đơn đặt hàng". Thao tác XÓA một đơn đặt hàng trong `DAT_HANG` sẽ:

- **A.** Hoàn toàn không cần kiểm tra (-) vì đơn đặt hàng là chứng từ của khách hàng, khách có toàn quyền hủy đơn hàng mà không cần hỏi
- **B.** Cần phải kiểm tra (+) vì nếu đơn đặt hàng đó đã được giải quyết bằng một hóa đơn trong HOA_DON thì việc xóa đơn sẽ vi phạm FK  *(Đáp án đúng)*
- **C.** Luôn luôn bị cấm vĩnh viễn vì trong thương mại điện tử không có bất kỳ thao tác xóa vật lý nào được phép thực hiện trên bảng
- **D.** Chỉ kiểm tra có điều kiện +(*) khi tổng giá trị các mặt hàng được đặt trong đơn hàng đó có giá trị vượt quá mười triệu đồng

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a & Section I.1.b: DAT_HANG là bảng Cha được HOA_DON tham chiếu. Khi XÓA một đơn đặt hàng trong DAT_HANG, nếu đơn đó đã có hóa đơn xuất ra thì việc xóa đơn đặt hàng sẽ làm hóa đơn bị mất tham chiếu. Do đó Xóa trên DAT_HANG là (+).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ đơn hàng có thể hủy tùy ý mà quên mất ràng buộc khóa ngoại với hóa đơn đã lập.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Xóa ở bảng DAT_HANG: Là bảng CHA của HOA_DON nên bắt buộc phải kiểm tra (+)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Bảng bị tham chiếu (Cha) ➔ Xóa bản ghi LUÔN LUÔN PHẢI KIỂM TRA (+)!

---

### Câu 21 [db-c4-t2-021]

Về mặt bản chất lý thuyết trong hệ CSDL quan hệ, một thao tác SỬA (UPDATE) một bộ dữ liệu có thể được xem tương đương với cặp thao tác nào?

- **A.** Một thao tác TẠO BẢNG (CREATE TABLE) bản sao mới và sao chép toàn bộ các bản ghi sang bảng mới nhằm tránh bị xung đột dữ liệu
- **B.** Một thao tác TRUY VẤN (SELECT) dữ liệu lên bộ nhớ đệm kết hợp với việc khóa cứng toàn bộ bảng dữ liệu cho đến khi đăng xuất
- **C.** Một thao tác XÓA (DELETE) bộ dữ liệu cũ theo sau ngay bởi một thao tác THÊM (INSERT) bộ dữ liệu mới mang các giá trị vừa sửa  *(Đáp án đúng)*
- **D.** Một thao tác GIẢI PHÓNG BỘ NHỚ (DEALLOCATE) vùng nhớ RAM của bộ xử lý mà không cần quan tâm đến các giá trị khóa trên ổ đĩa

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a & V.3.a: Về mặt nguyên lý mô hình dữ liệu quan hệ, thao tác Sửa (UPDATE) có thể phân rã tương đương thành một thao tác Xóa (DELETE) bộ cũ và Thêm (INSERT) bộ mới. Vì vậy trong Trigger SQL Server, bảng `inserted` chứa giá trị mới và bảng `deleted` chứa giá trị cũ.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ Sửa là ghi đè ô nhớ vật lý tại chỗ (in-place modification) mà không hiểu bản chất quan hệ là Delete + Insert.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy bản chất UPDATE: Tương đương một chuỗi DELETE (bộ cũ) + INSERT (bộ mới)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* UPDATE = DELETE (bộ cũ) + INSERT (bộ mới) ➔ Hiểu điều này sẽ giải thích tại sao Trigger có cả 2 bảng tạm!

---

### Câu 22 [db-c4-t2-022]

Trong bảng `KET_QUA(maSV, maMH, lanThi, diem)`, nếu người dùng thực hiện câu lệnh UPDATE chỉ sửa cột `diem`, những ràng buộc nào cần kiểm tra?

- **A.** Không cần kiểm tra bất kỳ ràng buộc nào vì điểm số thi là thuộc tính thay đổi liên tục theo từng đợt chấm thi của giảng viên
- **B.** Bắt buộc phải kiểm tra lại cả ràng buộc Khóa chính (maSV, maMH, lanThi) lẫn ràng buộc Miền giá trị của thuộc tính điểm số thi
- **C.** Chỉ kiểm tra ràng buộc Khóa ngoại tham chiếu đến bảng SINH_VIEN và bảng MON_HOC vì điểm số đã được gắn liền với sinh viên đó
- **D.** Chỉ kiểm tra ràng buộc Miền giá trị của thuộc tính diem (0 <= diem <= 10), hoàn toàn không cần kiểm tra lại ràng buộc Khóa chính  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.1.a & III.1.a: Cột diem không tham gia vào khóa chính (maSV, maMH, lanThi) và cũng không phải khóa ngoại. Khi chỉ sửa cột diem, DBMS chỉ kiểm tra ràng buộc miền giá trị của diem (0 <= diem <= 10). Tầm ảnh hưởng là +*(diem).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ lệnh UPDATE luôn phải kiểm tra lại Khóa chính.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy chỉ sửa thuộc tính không khóa: Chỉ kích hoạt kiểm tra ràng buộc của chính thuộc tính đó`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Sửa cột nào ➔ Chỉ kiểm tra các RBTV có mặt cột đó!

---

### Câu 23 [db-c4-t2-023]

Nếu người dùng thực hiện lệnh UPDATE sửa đổi giá trị cột `lanThi` trong bảng `KET_QUA`, những ràng buộc nào BẮT BUỘC phải được DBMS kiểm tra?

- **A.** Cả ràng buộc Khóa chính phức hợp (maSV, maMH, lanThi) và ràng buộc Miền giá trị (lanThi <= 2) đều bắt buộc phải được kiểm tra  *(Đáp án đúng)*
- **B.** Chỉ duy nhất ràng buộc Miền giá trị của lanThi cần kiểm tra, còn khóa chính thì không bị ảnh hưởng do mã sinh viên vẫn giữ nguyên
- **C.** Chỉ kiểm tra ràng buộc Khóa ngoại tham chiếu sang bảng SINH_VIEN để xem sinh viên đó có đủ tư cách dự thi lại lần sau hay không
- **D.** Hệ thống sẽ tự động khóa thuộc tính lanThi và không bao giờ cho phép thực thi lệnh UPDATE trên cột này dưới mọi hình thức nào

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.1.a & V.3.a: Thuộc tính lanThi vừa là thành phần của khóa chính phức hợp (maSV, maMH, lanThi), vừa chịu ràng buộc miền giá trị lanThi <= 2. Do đó khi sửa lanThi, DBMS bắt buộc phải kiểm tra CẢ HAI ràng buộc này.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh chỉ nhớ một trong hai ràng buộc (quên mất lanThi nằm trong khóa chính hoặc quên ràng buộc lanThi <= 2).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thuộc tính đa vai trò: lanThi vừa thuộc PK vừa có miền giá trị ➔ Kiểm tra CẢ HAI`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.1.a & V.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Một cột có thể tham gia vào nhiều RBTV khác nhau ➔ Sửa cột đó phải kiểm tra TẤT CẢ các RBTV liên quan!

---

### Câu 24 [db-c4-t2-024]

Trong quan hệ Khóa ngoại `SINH_VIEN.maKhoa -> KHOA.makhoa`, thao tác SỬA thuộc tính `makhoa` trong bảng `KHOA` có tầm ảnh hưởng như thế nào?

- **A.** Đánh dấu dấu trừ (-) vì bảng KHOA là bảng cha, người quản trị có toàn quyền đổi mã khoa mà không cần đối chiếu với bảng sinh viên
- **B.** Đánh dấu +*(makhoa) trên bảng KHOA vì việc đổi mã khoa sẽ làm các sinh viên đang mang mã khoa cũ trong SINH_VIEN có nguy cơ mồ côi  *(Đáp án đúng)*
- **C.** Đánh dấu dấu cộng (+) trên cả hai cột makhoa và tenkhoa của bảng KHOA bất kể thuộc tính nào bị thay đổi nội dung bên trong bảng
- **D.** Hệ thống luôn tự động từ chối mọi thao tác sửa đổi trên cột khóa chính của bảng cha bất kể bảng con có chứa dữ liệu hay không

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a: Sửa khóa chính ở bảng Cha có nguy cơ làm các bản ghi ở bảng Con bị mất liên kết (mồ côi). Do đó tầm ảnh hưởng trên bảng Cha KHOA đối với thao tác Sửa là +*(makhoa).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ bảng Cha thì sửa thoải mái (-) hoặc nghĩ DBMS cấm sửa hoàn toàn.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy sửa khóa chính bảng Cha: Là +*(makhoa) vì ảnh hưởng trực tiếp đến tham chiếu con`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Sửa khóa chính của bảng Cha ➔ Bắt buộc kiểm tra +*(PK) đối với các bảng Con!

---

### Câu 25 [db-c4-t2-025]

Khi nhân viên kế toán sửa giá trị cột `trigiaHD` trong bảng `HOA_DON`, tác động của thao tác này lên ràng buộc công nợ khách hàng là gì?

- **A.** Hệ thống tự động chuyển số tiền chênh lệch vào tài khoản ngân hàng của khách hàng mà không cần cập nhật vào bảng khách hàng KHACH
- **B.** Hoàn toàn không cần kiểm tra (-) vì trị giá hóa đơn chỉ là con số in ra giấy, không làm thay đổi các khoản tiền khách đã nộp trước
- **C.** Bắt buộc kiểm tra +*(trigiaHD) trên HOA_DON và tính toán lại công nợ của khách hàng tương ứng trong bảng KHACH theo công thức chuẩn  *(Đáp án đúng)*
- **D.** Chỉ kiểm tra có điều kiện khi hóa đơn đó có trị giá mới sửa nhỏ hơn số tiền đặt cọc ban đầu được ghi trên phiếu thu tương ứng

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.4.a: Ràng buộc công nợ: congNo = SUM(trigiaHD) - SUM(soTien). Khi sửa trigiaHD của một hóa đơn, tổng tiền mua thay đổi dẫn đến công nợ của khách hàng mua đơn đó phải thay đổi theo. Do đó tầm ảnh hưởng là +*(trigiaHD).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ sửa hóa đơn thì chỉ cập nhật bảng hóa đơn, quên mất thuộc tính công nợ ở bảng KHACH bị tác động.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thuộc tính tổng hợp khi Sửa: Sửa trigiaHD ➔ Phải cập nhật lại congNo ở KHACH`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thuộc tính tổng hợp phụ thuộc vào trigiaHD ➔ Sửa trigiaHD mang dấu +*(trigiaHD)!

---

### Câu 26 [db-c4-t2-026]

So sánh hai điều kiện: (1) `ngSinh <= CURRENT_DATE` và (2) `ngayVaoLam >= ngSinh + 18`. Phân loại học thuật chuẩn của chúng lần lượt là:

- **A.** Điều kiện (1) là RBTV Liên bộ trong một quan hệ; Điều kiện (2) là RBTV Liên thuộc tính liên quan hệ giữa hai bảng nhân sự khác
- **B.** Cả hai điều kiện đều là RBTV về Miền giá trị vì chúng đều quy định phạm vi hợp lệ của các giá trị kiểu dữ liệu ngày tháng năm
- **C.** Cả hai điều kiện đều là RBTV Liên thuộc tính vì cả hai đều sử dụng các phép toán so sánh lớn hơn hoặc nhỏ hơn trong biểu thức
- **D.** Điều kiện (1) là RBTV về Miền giá trị; Điều kiện (2) là RBTV Liên thuộc tính vì có sự so sánh giữa hai cột thuộc tính khác nhau  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.1.a & V.2.a: Điều kiện (1) chỉ so sánh 1 thuộc tính ngSinh với hàm thời gian hệ thống (hằng số thời gian) ➔ Miền giá trị. Điều kiện (2) so sánh giữa 2 thuộc tính ngSinh và ngayVaoLam trên cùng một bộ ➔ Liên thuộc tính trong 1 quan hệ.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người thấy cả hai đều so sánh ngày tháng nên gộp chung thành miền giá trị.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy so sánh ngày tháng: 1 cột vs Hằng số = Miền giá trị; 2 cột với nhau = Liên thuộc tính`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.1.a & V.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Cột so với Hằng số/Hàm hệ thống ➔ Miền giá trị; Cột so với Cột ➔ Liên thuộc tính!

---

### Câu 27 [db-c4-t2-027]

Xét quy tắc: "Mỗi lớp học chỉ có sĩ số tối đa là 40 sinh viên". Trong phân loại Ràng buộc toàn vẹn, đây là loại ràng buộc nào?

- **A.** RBTV liên bộ trong cùng một quan hệ vì việc kiểm soát sĩ số đòi hỏi phải đếm tổng số các bộ dữ liệu có cùng mã lớp trong bảng  *(Đáp án đúng)*
- **B.** RBTV về miền giá trị vì quy định giới hạn số lượng sinh viên không được vượt quá giá trị số nguyên bốn mươi trên hệ thống
- **C.** RBTV liên thuộc tính vì cần liên kết giữa thuộc tính mã lớp học và thuộc tính mã sinh viên trên cùng một bản ghi dữ liệu đơn lẻ
- **D.** RBTV liên quan hệ vì lớp học thuộc về khoa quản lý còn sinh viên lại do phòng công tác sinh viên của nhà trường quản lý hồ sơ

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.3.a: Quy tắc "sĩ số tối đa 40" đòi hỏi phải đếm số lượng sinh viên (số bộ) có cùng mã lớp: COUNT(maSV) <= 40 GROUP BY maLop. Vì phải liên kết và tổng hợp dữ liệu trên NHIỀU BỘ trong cùng bảng nên đây là RBTV liên bộ.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhìn thấy con số 40 là chọn ngay Miền giá trị.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy sĩ số lớp học: Là RBTV LIÊN BỘ (Inter-tuple) vì phải đếm nhiều dòng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Có thao tác gom nhóm đếm dòng (COUNT/SUM nhiều dòng) ➔ RBTV LIÊN BỘ!

---

### Câu 28 [db-c4-t2-028]

Trong CSDL `HSSINHVIEN`, điều kiện: "Mỗi sinh viên chỉ được thi tối đa 2 lần cho một môn học (`lanThi <= 2`)". Ràng buộc này là:

- **A.** RBTV liên thuộc tính vì số lần thi bắt buộc phải gắn liền với kết quả điểm thi và mã số của môn học tương ứng trong cùng một dòng
- **B.** RBTV về miền giá trị của thuộc tính lanThi trong bảng KET_QUA vì nó giới hạn trực tiếp miền giá trị hợp lệ của cột này là {1, 2}  *(Đáp án đúng)*
- **C.** RBTV liên bộ liên quan hệ vì cần phải đối chiếu với quy chế đào tạo tín chỉ được lưu trữ trong bảng danh mục quy định của trường
- **D.** RBTV phụ thuộc tồn tại vì việc thi lần hai bắt buộc phải phụ thuộc vào việc sinh viên đó đã từng bị điểm kém ở lần thi đầu tiên

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục II.1.a (Ví dụ 1, C2) & V.1.a: Giáo trình định nghĩa rõ ràng: "C2: Mỗi sinh viên chỉ được thi tối đa hai lần cho một môn học (Ràng buộc miền giá trị lanThi <= 2)".
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ "thi tối đa 2 lần" là phải đếm số dòng (liên bộ), nhưng trong thiết kế của giáo trình, số lần thi được lưu thành cột `lanThi` với miền giá trị {1, 2}.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy giáo trình chuẩn: lanThi <= 2 được xếp vào RÀNG BUỘC MIỀN GIÁ TRỊ của thuộc tính lanThi`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục II.1.a (C2) & V.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đọc kỹ giáo trình: Ràng buộc C2 lanThi <= 2 là Ràng buộc MIỀN GIÁ TRỊ!

---

### Câu 29 [db-c4-t2-029]

Trong quan hệ `CAN_BO(maCB, chucVu, phuCap)`, xét quy tắc: "Nếu chức vụ là Trưởng khoa thì phụ cấp phải lớn hơn 2 triệu". Đây là loại RBTV:

- **A.** RBTV liên bộ vì hệ thống cần phải so sánh mức phụ cấp của trưởng khoa này với mức phụ cấp của các trưởng khoa khác trong trường
- **B.** RBTV về miền giá trị vì nó quy định số tiền phụ cấp của cán bộ phải là một số nguyên dương lớn hơn hai triệu đồng thực tế
- **C.** RBTV liên thuộc tính trong một quan hệ vì nó ràng buộc mối liên hệ giá trị giữa hai cột chucVu và phuCap trên cùng một cán bộ  *(Đáp án đúng)*
- **D.** RBTV liên quan hệ vì chức vụ của cán bộ được quyết định bởi ban giám hiệu còn tiền phụ cấp lại do phòng tài chính chi trả lương

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.2.a: Quy tắc có dạng: nếu chucVu = "Trưởng khoa" thì phuCap > 2000000. Đây là điều kiện ràng buộc giữa hai thuộc tính chucVu và phuCap trên CÙNG MỘT BỘ (dòng) của quan hệ CAN_BO. Do đó đây là RBTV liên thuộc tính trong 1 quan hệ.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhìn thấy số tiền 2 triệu lại nhầm sang miền giá trị của phụ cấp.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phụ cấp theo chức vụ: Là RBTV LIÊN THUỘC TÍNH (chucVu chi phối phuCap trên cùng 1 dòng)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Nếu A thì B (trong cùng 1 dòng) ➔ RBTV LIÊN THUỘC TÍNH!

---

### Câu 30 [db-c4-t2-030]

Nguyên lý toàn vẹn thực thể (Entity Integrity) trong mô hình cơ sở dữ liệu quan hệ đưa ra yêu cầu cốt lõi nào đối với Khóa chính?

- **A.** Khi một bảng có nhiều khóa ứng viên thì tất cả các khóa ứng viên đó đều bắt buộc phải được chọn làm khóa chính của quan hệ
- **B.** Khóa chính bắt buộc phải là một số nguyên tự tăng và không bao giờ được phép sử dụng các chuỗi ký tự làm định danh bản ghi
- **C.** Khóa chính chỉ cần duy nhất trên các dòng có dữ liệu, còn các dòng đang cập nhật dở dang thì được phép chứa giá trị rỗng NULL
- **D.** Không một thuộc tính nào cấu thành nên Khóa chính được phép mang giá trị NULL và mọi bộ trong quan hệ phải có khóa phân biệt  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục IV.1.a & Section 0: Toàn vẹn thực thể (Entity Integrity) quy định: Khóa chính dùng để định danh duy nhất từng thực thể, do đó không một thành phần nào của khóa chính được phép mang giá trị NULL (NOT NULL) và không có hai bộ nào có khóa trùng nhau (UNIQUE).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ khóa chính phức hợp thì 1 cột NULL cũng được miễn là các cột khác có giá trị.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy toàn vẹn thực thể: KHÔNG MỘT THUỘC TÍNH NÀO trong khóa chính được phép NULL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục IV.1.a & Section 0
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Entity Integrity: Khóa chính = DUY NHẤT + TUYỆT ĐỐI KHÔNG ĐƯỢC NULL!

---

### Câu 31 [db-c4-t2-031]

Cho quan hệ `NHANVIEN(maNV, hoten, maNQL)` trong đó `maNQL` là mã người quản lý tham chiếu đến `maNV` của chính bảng đó. Đây là:

- **A.** Ràng buộc Khóa ngoại tự tham chiếu (quan hệ một ngôi) với bối cảnh là duy nhất 1 quan hệ NHANVIEN nhưng có vai trò kép Cha - Con  *(Đáp án đúng)*
- **B.** Ràng buộc liên thuộc tính trong cùng một dòng dữ liệu vì cả maNV và maNQL đều thuộc về cùng một nhân viên đang làm việc cụ thể
- **C.** Một lỗi thiết kế lược đồ nghiêm trọng (vòng lặp vô tận) và hệ quản trị CSDL quan hệ tuyệt đối không hỗ trợ mô hình khóa này
- **D.** Ràng buộc miền giá trị vì maNQL chỉ cần tuân theo định dạng chuỗi ký tự ký hiệu mã nhân viên chuẩn theo quy định doanh nghiệp

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a & Section 0: Đây là mối quan hệ phản xạ / tự tham chiếu (Recursive / Self-referencing Foreign Key). Bảng NHANVIEN vừa đóng vai trò bảng Cha (chứa maNV của người quản lý) vừa đóng vai trò bảng Con (chứa maNQL của nhân viên cấp dưới).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh thấy 2 cột trong cùng bảng tưởng là liên thuộc tính, hoặc nghĩ tự tham chiếu là lỗi vòng lặp.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Khóa ngoại tự tham chiếu: Là RÀNG BUỘC KHÓA NGOẠI (Unary relationship), không phải liên thuộc tính`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Cột này tham chiếu đến khóa chính của chính bảng đó = Khóa ngoại tự tham chiếu (Self-referencing FK)!

---

### Câu 32 [db-c4-t2-032]

Trong CSDL `QLHANGHOA`, quan hệ `CTIET_HD` có khóa chính là `(soHD, maHH)`. Nhận định nào sau đây là CHUẨN XÁC NHẤT về các phụ thuộc tồn tại?

- **A.** Tồn tại 2 phụ thuộc tồn tại theo Dấu hiệu 2 vì soHD và maHH là các thuộc tính độc lập không liên quan gì đến khóa chính bảng con
- **B.** Tồn tại đồng thời 2 phụ thuộc tồn tại theo Dấu hiệu 1: {soHD} ⊆ {soHD, maHH} vào HOA_DON và {maHH} ⊆ {soHD, maHH} vào HANG_HOA  *(Đáp án đúng)*
- **C.** Chỉ có duy nhất 1 phụ thuộc tồn tại vào bảng HOA_DON, còn thuộc tính maHH chỉ là một mã số phụ dùng để phân biệt các dòng đơn
- **D.** CTIET_HD là bảng cha độc lập cung cấp thông tin cho cả hai bảng HOA_DON và HANG_HOA thông qua cơ chế kế thừa dữ liệu đa tầng

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a & I.1.b: Khóa chính của CTIET_HD là K = {soHD, maHH}. Khóa chính của HOA_DON là K1 = {soHD} (K1 ⊆ K). Khóa chính của HANG_HOA là K2 = {maHH} (K2 ⊆ K). Cả hai đều thỏa mãn Dấu hiệu (1) K_i ⊆ K_con.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm sang Dấu hiệu 2 vì nghĩ mỗi cột là một khóa ngoại độc lập.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Dấu hiệu 1 kép: Cả hai khóa cha đều là tập con của khóa chính phức hợp bảng con`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Bảng chi tiết có PK phức hợp (A, B) với A là PK cha 1, B là PK cha 2 ➔ Cả 2 đều là Dấu hiệu 1 (K1 ⊆ K2)!

---

### Câu 33 [db-c4-t2-033]

Khi thiết lập hành vi `ON DELETE SET NULL` cho khóa ngoại `maKhoa` trong bảng `SINH_VIEN`, điều kiện TIÊN QUYẾT bắt buộc phải thỏa mãn là gì?

- **A.** Thuộc tính maKhoa bắt buộc phải tham gia vào việc cấu thành nên một phần của khóa chính trong quan hệ sinh viên SINH_VIEN
- **B.** Bảng KHOA phải có ít nhất một bản ghi chứa giá trị tên khoa là chuỗi rỗng để hệ thống trỏ các sinh viên mồ côi về đó
- **C.** Thuộc tính maKhoa trong bảng SINH_VIEN bắt buộc phải được phép nhận giá trị NULL (không được gắn ràng buộc NOT NULL)  *(Đáp án đúng)*
- **D.** Khóa chính của bảng KHOA phải được định nghĩa bằng kiểu dữ liệu số nguyên tự tăng thì mới có thể thiết lập giá trị NULL

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a & Chuẩn SQL: Nếu muốn sử dụng hành vi ON DELETE SET NULL, cột khóa ngoại tương ứng ở bảng con bắt buộc phải nullable (cho phép NULL). Nếu cột đó bị ràng buộc NOT NULL thì không thể gán giá trị NULL khi bản ghi cha bị xóa.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh không để ý điều kiện tiên quyết về khả năng nhận giá trị NULL của cột con.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy SET NULL: Cột khóa ngoại BẮT BUỘC PHẢI NULLABLE (không có NOT NULL)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Muốn SET NULL thì cột đó phải cho phép NULL! Nếu cột NOT NULL ➔ Lỗi cấu hình ngay khi tạo bảng.

---

### Câu 34 [db-c4-t2-034]

Trong chuẩn SQL và lý thuyết CSDL quan hệ hiện đại, một Khóa ngoại có BẮT BUỘC phải tham chiếu đến Khóa chính của bảng cha hay không?

- **A.** Khóa ngoại chỉ cần tham chiếu đến một bảng có cùng số lượng cột mà không cần quan tâm đến tính duy nhất của thuộc tính cha
- **B.** Bắt buộc 100%, khóa ngoại chỉ có thể tham chiếu duy nhất đến thuộc tính khóa chính PRIMARY KEY đã được khai báo ở bảng cha
- **C.** Khóa ngoại có thể tham chiếu đến một cột bất kỳ ở bảng cha kể cả khi cột đó chứa nhiều giá trị trùng lặp và giá trị NULL
- **D.** Không bắt buộc, khóa ngoại có thể tham chiếu đến bất kỳ cột nào có ràng buộc UNIQUE (khóa ứng viên duy nhất) ở bảng cha  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a & Chuẩn ANSI SQL: Khóa ngoại không bắt buộc phải tham chiếu đến PRIMARY KEY, mà có thể tham chiếu đến bất kỳ thuộc tính/tập thuộc tính nào được định nghĩa là duy nhất (UNIQUE constraint) ở bảng Cha (tức là một khóa ứng viên bất kỳ).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Đa số người học nghĩ khóa ngoại chỉ được phép tham chiếu đến PRIMARY KEY.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy định nghĩa Khóa ngoại: Có thể tham chiếu đến PRIMARY KEY HOẶC UNIQUE (Khóa ứng viên)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa ngoại tham chiếu đến Khóa chính HOẶC Khóa ứng viên duy nhất (UNIQUE) của bảng Cha!

---

### Câu 35 [db-c4-t2-035]

Giả sử Bảng A có khóa ngoại trỏ sang B, và Bảng B cũng có khóa ngoại trỏ sang A (đều có NOT NULL). Thách thức lớn nhất khi chèn dữ liệu là gì?

- **A.** Rơi vào bế tắc con gà và quả trứng: Không thể chèn vào A trước vì thiếu B, và cũng không thể chèn vào B trước vì thiếu A  *(Đáp án đúng)*
- **B.** Hệ quản trị CSDL sẽ tự động hợp nhất hai bảng A và B thành một bảng duy nhất để xóa bỏ vĩnh viễn sự tham chiếu chéo này
- **C.** Thao tác truy vấn SELECT sẽ bị lặp vô tận và làm treo toàn bộ máy chủ cơ sở dữ liệu ngay khi có yêu cầu đọc dữ liệu bảng
- **D.** Khóa ngoại của cả hai bảng sẽ tự động biến thành khóa chính và làm mất đi toàn bộ các khóa chính đã được khai báo từ trước

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a & Chuẩn SQL: Tham chiếu chéo (Circular Foreign Keys) với NOT NULL gây ra bế tắc khi chèn dữ liệu ban đầu. Để giải quyết, người ta phải dùng cơ chế hoãn kiểm tra ràng buộc (DEFERRABLE INITIALLY DEFERRED) hoặc tạm thời cho phép NULL khi chèn rồi cập nhật sau.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ SELECT bị lặp vô tận (nhầm sang vòng lặp con trỏ) mà không nhận ra bế tắc xảy ra ngay khi INSERT.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tham chiếu chéo: BẾ TẮC KHI CHÈN (Con gà - Quả trứng), cần hoãn kiểm tra ràng buộc`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tham chiếu chéo 2 chiều ➔ Không chèn được bình thường nếu không có DEFERRED hoặc NULL!

---

### Câu 36 [db-c4-t2-036]

Trong CSDL `HSSINHVIEN(maSV, hotenSV, nam, ...)`, quy tắc: "Mọi sinh viên là nữ (`nam = false`) đều không tham gia NVQS" được viết là:

- **A.** ∀s ∈ SINH_VIEN: (s.nam = false ∧ s.thamGiaNVQS = false) (bắt buộc toàn bộ sinh viên trong trường đều phải là nữ)
- **B.** ∀s ∈ SINH_VIEN: (s.nam = false → s.thamGiaNVQS = false) (lượng từ với mọi kết hợp cùng phép kéo theo điều kiện)  *(Đáp án đúng)*
- **C.** ∃s ∈ SINH_VIEN: (s.nam = false → s.thamGiaNVQS = false) (chỉ cần tồn tại một sinh viên nữ không đi nghĩa vụ quân sự)
- **D.** ∀s ∈ SINH_VIEN: (s.nam = true ∨ s.thamGiaNVQS = true) (biểu thức đảo ngược logic hoàn toàn không tương đương quy tắc)

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a: Quy tắc "Mọi sinh viên thỏa tính chất P thì thỏa tính chất Q" được viết bằng ∀s ∈ R: (P(s) → Q(s)). Ở đây P là s.nam = false, Q là s.thamGiaNVQS = false.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn phương án dùng dấu hội (∧) mà không hiểu nó bắt buộc toàn trường phải là nữ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy mệnh đề điều kiện: ∀ đi với → (Nếu là nữ THÌ không đi NVQS)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Nếu là A thì phải là B ➔ ∀x: (A(x) → B(x))!

---

### Câu 37 [db-c4-t2-037]

Biểu thức logic vị từ biểu diễn quy tắc: "Với mọi môn học có số tiết lý thuyết lớn hơn 30 thì số tiết thực hành phải lớn hơn 0" là:

- **A.** ∃m ∈ MON_HOC: (m.soTietLT > 30 → m.soTietTH > 0) (chỉ cần tìm được ít nhất một môn học thỏa mãn điều kiện tiết học này)
- **B.** ∀m ∈ MON_HOC: (m.soTietLT > 30 ∧ m.soTietTH > 0) (yêu cầu tất cả các môn học trong trường đều phải có lý thuyết trên ba mươi)
- **C.** ∀m ∈ MON_HOC: (m.soTietLT > 30 → m.soTietTH > 0) (sử dụng phép kéo theo để chỉ lọc những môn có lý thuyết nhiều)  *(Đáp án đúng)*
- **D.** ∀m ∈ MON_HOC: (m.soTietLT ≤ 30 ∧ m.soTietTH = 0) (mệnh đề phủ định hoàn toàn điều kiện chuẩn được đặt ra trong đề bài)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.2.a & III.1.a: "Với mọi môn học: nếu soTietLT > 30 thì soTietTH > 0" chuẩn xác là: ∀m ∈ MON_HOC: (m.soTietLT > 30 → m.soTietTH > 0).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh lại chọn phép hội (∧) và làm cho các môn có soTietLT <= 30 bị xem là vi phạm!
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy kéo theo: m.soTietLT > 30 → m.soTietTH > 0`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Môn có soTietLT <= 30 thì tiền đề sai ➔ Mệnh đề kéo theo (→) HIỂN NHIÊN ĐÚNG!

---

### Câu 38 [db-c4-t2-038]

Để tìm các bản ghi vi phạm quy tắc "Nếu khách hàng có điểm tín nhiệm dưới 50 thì không được phép vay vốn", thuật toán quét tìm kiếm:

- **A.** Toàn bộ tất cả các bản ghi hiện có trong bảng khách hàng bất kể điểm tín nhiệm và tình trạng vay vốn của khách hàng đó
- **B.** Các bản ghi có DiemTinNhiem >= 50 VÀ ĐượcChoVay = false (tìm các khách hàng có điểm cao nhưng không có nhu cầu vay tiền)
- **C.** Các bản ghi có DiemTinNhiem < 50 VÀ ĐượcChoVay = false (tìm các khách hàng tuân thủ đúng quy định tín dụng của ngân hàng)
- **D.** Các bản ghi có DiemTinNhiem < 50 VÀ ĐượcChoVay = true (tìm các trường hợp tiền đề đúng nhưng kết luận bị vi phạm)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a & Section 0: Ràng buộc là: DiemTinNhiem < 50 → ĐượcChoVay = false. Để tìm bản ghi vi phạm (phủ định của P → Q), ta tìm bản ghi thỏa mãn P ∧ ¬Q: DiemTinNhiem < 50 VÀ ĐượcChoVay = true.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm tìm bản ghi vi phạm với tìm bản ghi đúng, hoặc phủ định cả tiền đề.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thuật toán kiểm tra vi phạm: Tìm P đúng mà Q sai (Diem < 50 ∧ ChoVay = true)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Bắt quả tang vi phạm ➔ Tiền đề đúng (P) nhưng Hành động sai (¬Q)!

---

### Câu 39 [db-c4-t2-039]

Trong logic toán học, khẳng định nào sau đây là CHÍNH XÁC khi so sánh giữa hai mệnh đề: $\forall x \exists y, P(x, y)$ và $\exists y \forall x, P(x, y)$?

- **A.** Hai mệnh đề này hoàn toàn không tương đương nhau về ngữ nghĩa; trong đó ∃y∀x là điều kiện mạnh hơn nhiều so với mệnh đề ∀x∃y  *(Đáp án đúng)*
- **B.** Hai mệnh đề này hoàn toàn tương đương nhau vì các lượng từ toán học luôn luôn có tính chất giao hoán tự do trong không gian
- **C.** Mệnh đề ∀x∃y luôn luôn bị coi là sai cú pháp trong mọi hệ cơ sở dữ liệu quan hệ vì không thể tìm kiếm phần tử thỏa mãn chung
- **D.** Cả hai mệnh đề đều chỉ có thể biểu diễn được bằng ngôn ngữ đại số quan hệ thuần túy mà không thể chuyển dịch sang câu lệnh SQL

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục III.1.a & Section 0: Trong Logic vị từ, ∀x∃y P(x,y) (mỗi người có một mẹ) KHÔNG TƯƠNG ĐƯƠNG với ∃y∀x P(x,y) (có một người mẹ chung của tất cả mọi người). ∃y∀x mạnh hơn rất nhiều và suy ra ∀x∃y, nhưng chiều ngược lại không đúng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh tưởng các lượng từ có thể đảo chỗ tự do như phép cộng/nhân toán học.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy trật tự lượng từ: ∀x∃y KHÔNG TƯƠNG ĐƯƠNG ∃y∀x (Không có tính giao hoán khác loại)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Trật tự lượng từ khác loại KHÔNG ĐƯỢC ĐỔI CHỖ! ∀x∃y ≠ ∃y∀x!

---

### Câu 40 [db-c4-t2-040]

Biểu diễn hình thức chuẩn của ràng buộc khóa ngoại `SINH_VIEN.maKhoa` tham chiếu đến `KHOA.makhoa` bằng đại số tập hợp là:

- **A.** π_makhoa(KHOA) ⊆ π_maKhoa(SINH_VIEN) (Tập hợp tất cả các mã khoa phải là tập con của mã khoa có sinh viên học)
- **B.** π_maKhoa(SINH_VIEN) ⊆ π_makhoa(KHOA) (Tập hợp các mã khoa của sinh viên phải là tập con của mã khoa thực tế)  *(Đáp án đúng)*
- **C.** π_maKhoa(SINH_VIEN) = π_makhoa(KHOA) (Tập hợp mã khoa của sinh viên bắt buộc phải trùng khớp hoàn toàn với danh mục khoa)
- **D.** π_maKhoa(SINH_VIEN) ∩ π_makhoa(KHOA) = ∅ (Tập hợp mã khoa của sinh viên và khoa phải hoàn toàn tách rời nhau)

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.1.a: Ràng buộc khóa ngoại bằng phép chiếu đại số tập hợp: Phép chiếu cột khóa ngoại ở bảng con phải là tập con của phép chiếu cột khóa chính ở bảng cha: π_maKhoa(SINH_VIEN) ⊆ π_makhoa(KHOA).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay bị đảo chiều dấu tập con (chọn nhầm Cha là con của Con).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy chiều tập con: Con phải là tập con của Cha (π_Con ⊆ π_Cha)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa ngoại = Tập giá trị ở bảng Con là TẬP CON (⊆) của tập giá trị ở bảng Cha!

---

### Câu 41 [db-c4-t2-041]

Trong CSDL `QLHANGHOA`, ràng buộc: "Ngày phát hành hóa đơn phải trước hoặc cùng ngày xuất hàng ra khỏi kho" được biểu diễn chuẩn xác là:

- **A.** ∃hd ∈ HOA_DON: (hd.ngayHD = hd.ngayXuat) (chỉ cần có ít nhất một hóa đơn có ngày xuất hàng trùng với ngày lập phiếu)
- **B.** ∀hd ∈ HOA_DON: (hd.ngayHD > hd.ngayXuat) (yêu cầu hàng hóa phải được xuất đi trước rồi mới lập hóa đơn thu tiền sau)
- **C.** ∀hd ∈ HOA_DON: (hd.ngayHD ≤ hd.ngayXuat) (biểu thức liên thuộc tính so sánh trực tiếp hai cột thời gian của hóa đơn)  *(Đáp án đúng)*
- **D.** ∀hd ∈ HOA_DON, ∃dh ∈ DAT_HANG: (hd.ngayXuat ≤ dh.ngayDH) (ngày xuất hàng phải xảy ra trước ngày đặt hàng)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục V.2.a (Ví dụ 5): "Hàng hóa chỉ được xuất kho sau khi đã lập hóa đơn" ➔ Ngày lập hóa đơn phải trước hoặc bằng ngày xuất: ∀hd ∈ HOA_DON: hd.ngayHD ≤ hd.ngayXuat.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay bị đảo ngược chiều so sánh ngày hoặc nhầm dấu lớn/nhỏ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy chiều thời gian xuất hàng: ngayHD ≤ ngayXuat (Lập hóa đơn trước, xuất kho sau)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục V.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Trình tự kế toán: Hóa đơn lập trước ➔ Hàng xuất sau (ngayHD ≤ ngayXuat)!

---

### Câu 42 [db-c4-t2-042]

Giả sử đơn đặt hàng `soDH = 'DH001'` đã có hóa đơn `soHD = 'HD001'`. Nếu nhân viên cố tình lập thêm hóa đơn `HD002` cho `soDH = 'DH001'`, hệ thống sẽ:

- **A.** Tự động xóa bỏ hóa đơn HD001 cũ và thay thế bằng hóa đơn HD002 mới với các giá trị mặt hàng được cập nhật theo thời giá thị trường
- **B.** Tự động hợp nhất nội dung của hai hóa đơn HD001 và HD002 thành một hóa đơn tổng hợp duy nhất để thuận tiện cho việc kế toán
- **C.** Chấp nhận bình thường vì quy chế kinh doanh cho phép một đơn hàng có thể giao làm nhiều đợt tùy theo khả năng cung ứng của kho
- **D.** Lập tức chặn đứng và báo lỗi vi phạm quy tắc: "Mỗi đơn đặt hàng chỉ được giải quyết trong duy nhất một hóa đơn bán hàng"  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục I.1.b (Quy tắc vàng): "Mỗi đơn đặt hàng chỉ được giải quyết trong một hóa đơn duy nhất". Do đó trong bảng HOA_DON, thuộc tính soDH có tính chất duy nhất đối với mỗi đơn đặt hàng. Thao tác tạo hóa đơn thứ hai cho cùng một đơn hàng bị từ chối ngay lập tức.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thực tế bên ngoài cho phép giao nhiều lần, nhưng giáo trình QLHANGHOA quy định ĐÚNG 1 HÓA ĐƠN.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Quy tắc vàng: 1 Đơn hàng = ĐÚNG 1 Hóa đơn duy nhất (Cấm tạo hóa đơn thứ 2)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục I.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thuộc lòng quy tắc vàng QLHANGHOA: 1 Đơn đặt hàng ➔ ĐÚNG 1 Hóa đơn!

---

### Câu 43 [db-c4-t2-043]

Trong CSDL `QLHANGHOA`, công thức tính trị giá hóa đơn: `trigiaHD = SUM(soLuongBan * giaBan)`. Nếu SỬA cột `giaBan` trong `CTIET_HD` thì:

- **A.** Cần kiểm tra +*(giaBan) trên CTIET_HD và kích hoạt cập nhật lại thuộc tính tổng hợp trigiaHD tương ứng trong bảng HOA_DON  *(Đáp án đúng)*
- **B.** Hoàn toàn không cần kiểm tra (-) vì giá bán đã được thỏa thuận miệng giữa người mua và người bán trước khi giao hàng tại bãi
- **C.** Thao tác sửa bị hệ thống từ chối vì đơn giá mặt hàng là thông tin niêm yết cố định không bao giờ được phép chỉnh sửa trên đĩa
- **D.** Hệ thống sẽ tự động trừ số tiền chênh lệch vào tiền lương hàng tháng của nhân viên trực tiếp thực hiện thao tác sửa đổi dữ liệu

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.4.a: trigiaHD là thuộc tính tổng hợp tính từ CTIET_HD. Khi sửa giaBan của một mặt hàng trong chi tiết hóa đơn, thành tiền thay đổi kéo theo trigiaHD của hóa đơn đó phải được cập nhật lại. Tầm ảnh hưởng là +*(giaBan) trên CTIET_HD.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ sửa ở CTIET_HD không ảnh hưởng HOA_DON hoặc nghĩ giá bán không được sửa.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thuộc tính tổng hợp lan truyền: Sửa giaBan ➔ Tác động trigiaHD ở bảng cha`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thuộc tính tổng hợp: Sửa số lượng hoặc đơn giá ở con ➔ Phải tính lại tổng tiền ở cha!

---

### Câu 44 [db-c4-t2-044]

Khi khách hàng chuyển tiền đặt cọc trước khi công ty giao hàng và phát hành hóa đơn, hệ thống ghi nhận giao dịch này vào đâu và công nợ biến động ra sao?

- **A.** Bắt buộc phải tạo ngay một hóa đơn ảo trong bảng HOA_DON với trị giá bằng số tiền cọc để cân bằng hệ thống tài khoản kế toán
- **B.** Ghi nhận một bản ghi vào bảng PHIEU_THU, làm cho số tiền công nợ congNo của khách hàng giảm xuống (có thể nhận giá trị âm)  *(Đáp án đúng)*
- **C.** Ghi nhận trực tiếp vào bảng KHACH bằng cách cộng thêm số tiền đó vào cột số điện thoại của khách hàng để phục vụ việc đối soát
- **D.** Hệ thống sẽ từ chối nhận tiền vì quy định kế toán bắt buộc phải có hóa đơn bán hàng trước thì mới được phép phát hành phiếu thu

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục I.1.b (Đặc tả PHIEU_THU): "khách hàng có thể trả tiền không theo hóa đơn nào, hoặc trả trước khi nhận hàng (tiền đặt cọc)". Khi đó ghi nhận vào PHIEU_THU với mã khách tương ứng, làm công nợ giảm xuống (nếu trả trước nhiều hơn mua thì congNo < 0: công ty nợ khách).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ phiếu thu bắt buộc phải đi kèm hóa đơn (nhầm lẫn nghiệp vụ).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phiếu thu đặt cọc: PHIEU_THU không bắt buộc phải có số hóa đơn, có thể trả trước`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục I.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khách cọc tiền ➔ Lưu vào PHIEU_THU, công nợ giảm (có thể âm)!

---

### Câu 45 [db-c4-t2-045]

Biểu thức toán học nào sau đây biểu diễn chuẩn xác quy tắc: "Hóa đơn chỉ được phép giao những mặt hàng mà khách hàng đã đặt mua"?

- **A.** ∃ct ∈ CTIET_HD, ∃dh ∈ DAT_HANG: (ct.maHH ≠ dh.maHH) (tồn tại mặt hàng trong chi tiết hóa đơn không có trong đơn hàng)
- **B.** ∀ct ∈ CTIET_HD, ∀hd ∈ HOA_DON: (ct.soHD = hd.soHD → ct.giaBan = hd.trigiaHD) (giá bán mặt hàng bằng trị giá)
- **C.** ∀ct ∈ CTIET_HD, ∃hd ∈ HOA_DON, ∃dh ∈ DAT_HANG: (ct.soHD = hd.soHD ∧ hd.soDH = dh.soDH ∧ ct.maHH = dh.maHH)  *(Đáp án đúng)*
- **D.** ∀dh ∈ DAT_HANG, ∃ct ∈ CTIET_HD: (dh.maHH = ct.maHH ∧ dh.soLuongDat = ct.soLuongBan) (bắt buộc giao đủ 100% số lượng)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.5.a (Chính sách 2) & Section 0: Quy tắc: Mọi mặt hàng xuất trong chi tiết hóa đơn (ct) phải tìm thấy trong đơn đặt hàng tương ứng (dh): ct.soHD = hd.soHD và hd.soDH = dh.soDH và ct.maHH = dh.maHH.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm lẫn giữa chính sách "giao đủ 100%" và chính sách "không giao hàng ngoài đơn".
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy mặt hàng trong đơn: Mặt hàng xuất trong CTIET_HD phải tồn tại trong DAT_HANG`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.5.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Chỉ giao hàng đã đặt: Với mọi ct ∈ CTIET_HD ➔ Tồn tại dh ∈ DAT_HANG có cùng maHH!

---

### Câu 46 [db-c4-t2-046]

Trong Đồ án `SV_DT(MaSV, MaDT, NoiAD, KQ)`, quy tắc: "Kết quả `KQ` chỉ nhận một trong các giá trị ('Xuat sac', 'Tot', 'Kha', 'Trung binh', 'Khong dat')" là:

- **A.** RBTV liên quan hệ vì danh mục các loại kết quả đánh giá phải được đối chiếu với bảng điểm tích lũy của sinh viên trong hệ thống
- **B.** RBTV liên thuộc tính vì kết quả đề tài phải phụ thuộc vào nơi áp dụng NoiAD và năng lực học tập của sinh viên MaSV thực hiện đề tài
- **C.** RBTV liên bộ vì cần phải xếp hạng kết quả của tất cả các sinh viên trong trường để phân loại theo tỷ lệ phần trăm phân phối chuẩn
- **D.** RBTV về miền giá trị của thuộc tính KQ trong bảng SV_DT vì nó giới hạn tập hợp các hằng số chuỗi hợp lệ mà cột này được phép lưu trữ  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VIII.1.a: Quy định tập giá trị rời rạc hợp lệ của thuộc tính KQ là một phép kiểm tra miền giá trị (Domain constraint / CHECK constraint dạng IN list).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh thấy có nhiều mức xếp loại tưởng là liên bộ để tính phần trăm.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy danh sách giá trị cố định: KQ IN (...) là RÀNG BUỘC MIỀN GIÁ TRỊ`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VIII.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thuộc tính chỉ nhận tập giá trị hằng số liệt kê sẵn ➔ Ràng buộc MIỀN GIÁ TRỊ!

---

### Câu 47 [db-c4-t2-047]

Ràng buộc: "Kinh phí thực hiện của mỗi đề tài nghiên cứu khoa học phải đạt tối thiểu từ 5 triệu đồng trở lên (`Kinhphi >= 5`)" thuộc loại RBTV nào?

- **A.** RBTV về miền giá trị của thuộc tính Kinhphi trong bảng DETAI vì nó chỉ quy định cận dưới hợp lệ cho một thuộc tính số học đơn lẻ  *(Đáp án đúng)*
- **B.** RBTV liên thuộc tính vì kinh phí phải tương xứng với tên đề tài TenDT và học hàm học vị của chủ nhiệm đề tài Chunhiem được giao
- **C.** RBTV liên bộ vì cần phải so sánh kinh phí của đề tài này với mức kinh phí trung bình của các đề tài nghiên cứu khoa học khác
- **D.** RBTV liên quan hệ vì nguồn kinh phí nghiên cứu khoa học phải được giải ngân thông qua phòng quản lý khoa học và dự án của trường

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VIII.1.a: Ràng buộc Kinhphi >= 5 chỉ xét trên thuộc tính Kinhphi của từng đề tài đơn lẻ so với hằng số 5. Đây là RBTV về miền giá trị của thuộc tính trong bảng DETAI.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nhầm với ràng buộc "tổng kinh phí của một chủ nhiệm" (liên bộ) đã gặp ở Đề 1.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy kinh phí mỗi đề tài: Kinhphi >= 5 trên từng dòng là MIỀN GIÁ TRỊ (không phải liên bộ)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VIII.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Kinh phí 1 đề tài >= 5 ➔ Miền giá trị; Tổng kinh phí theo chủ nhiệm <= 500 ➔ Liên bộ!

---

### Câu 48 [db-c4-t2-048]

Trong bảng `SV_DT(MaSV, MaDT, NoiAD, KQ)`, nếu người dùng thực hiện lệnh UPDATE sửa đổi giá trị cột `NoiAD` (Nơi áp dụng), DBMS sẽ xử lý thế nào?

- **A.** Bắt buộc kiểm tra lại toàn bộ các ràng buộc khóa chính (MaSV, MaDT) vì bất kỳ thao tác sửa đổi nào cũng có nguy cơ làm lỗi dữ liệu
- **B.** Bỏ qua kiểm tra (-) vì thuộc tính NoiAD không tham gia vào khóa chính, khóa ngoại hay bất kỳ điều kiện giới hạn số lượng đề tài nào  *(Đáp án đúng)*
- **C.** Kích hoạt kiểm tra ràng buộc khóa ngoại tham chiếu sang bảng SINHVIEN để xác nhận sinh viên đó có hộ khẩu tại nơi áp dụng hay không
- **D.** Tự động hủy bỏ thao tác sửa đổi vì nơi áp dụng đề tài là địa bàn nghiên cứu cố định đã được hội đồng khoa học phê duyệt từ đầu

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VIII.1.a & Bảng tầm ảnh hưởng: Cột NoiAD chỉ là thuộc tính mô tả nơi áp dụng đề tài, không nằm trong khóa chính (MaSV, MaDT), không phải khóa ngoại và không tham gia vào bất kỳ biểu thức ràng buộc nào. Khi sửa NoiAD, tầm ảnh hưởng là dấu trừ (-*(NoiAD)).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ mọi thao tác sửa đều bị kiểm tra hoặc nhầm NoiAD nằm trong khóa.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy sửa thuộc tính mô tả độc lập: Là DẤU TRỪ (-) an toàn tuyệt đối`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VIII.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Sửa thuộc tính không tham gia bất kỳ luật nào ➔ Mang dấu TRỪ (-)!

---

### Câu 49 [db-c4-t2-049]

Trong chu trình đồ thị CSDL QLHANGHOA, chính sách giao hàng chuẩn: "Không giao vượt số lượng đặt" có biểu thức logic là gì?

- **A.** Biểu thức: (ct.maHH = dh.maHH ∧ ct.soHD = hd.soHD ∧ hd.soDH = dh.soDH) → (ct.soLuongBan ≥ dh.soLuongDat) cho phép giao vượt mức đặt hàng
- **B.** Biểu thức: (ct.maHH = dh.maHH ∧ ct.soHD = hd.soHD ∧ hd.soDH = dh.soDH) → (ct.soLuongBan = dh.soLuongDat) bắt buộc phải giao đủ 100% hàng
- **C.** Biểu thức: (ct.maHH = dh.maHH ∧ ct.soHD = hd.soHD ∧ hd.soDH = dh.soDH) → (ct.soLuongBan ≤ dh.soLuongDat) trên toàn bộ các bộ tương ứng  *(Đáp án đúng)*
- **D.** Biểu thức: (ct.maHH ≠ dh.maHH ∧ ct.soHD = hd.soHD ∧ hd.soDH = dh.soDH) → (ct.soLuongBan = 0) cấm giao tất cả các mặt hàng đã được đặt mua

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình Chương 4, Mục VI.5.a (Chính sách 2): Chính sách chuẩn CSDL QLHANGHOA: Không bao giờ giao vượt yêu cầu đặt. Nghĩa là số lượng bán trên chi tiết hóa đơn phải nhỏ hơn hoặc bằng số lượng đặt: ct.soLuongBan ≤ dh.soLuongDat.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm với chính sách giao đủ 100% (dấu bằng =) hoặc nhầm chiều dấu lớn hơn/nhỏ hơn.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy biểu thức không giao vượt: ct.soLuongBan ≤ dh.soLuongDat`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Mục VI.5.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Không giao vượt ➔ Bán ≤ Đặt (soLuongBan ≤ soLuongDat)!

---

### Câu 50 [db-c4-t2-050]

Tại sao việc cài đặt và thực thi các Ràng buộc toàn vẹn ngay tại Tầng CSDL (Database Engine) lại an toàn và tối ưu hơn so với việc chỉ kiểm tra ở Tầng Ứng dụng (Application Layer)?

- **A.** Làm cho tốc độ kết nối mạng Internet giữa người dùng và máy chủ tăng lên gấp mười lần nhờ việc nén các gói tin dữ liệu trước khi truyền tải trên đường truyền vật lý
- **B.** Giúp hệ thống hoàn toàn không cần phải mua bản quyền phần mềm hệ quản trị cơ sở dữ liệu đắt tiền mà vẫn bảo đảm khả năng hoạt động ổn định trên các nền tảng đám mây
- **C.** Cho phép loại bỏ hoàn toàn các lập trình viên kiểm thử phần mềm (Tester) vì hệ quản trị cơ sở dữ liệu đã tự động kiểm tra và sửa hết toàn bộ các lỗi logic nghiệp vụ
- **D.** Bảo vệ tính đúng đắn của dữ liệu một cách tập trung, ngăn chặn triệt để dữ liệu bẩn từ mọi nguồn truy cập (ứng dụng web, mobile, script ngoài, thao tác trực tiếp của DBA)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 4, Section 0 & Mục IX.1.a: Nếu chỉ kiểm tra ở tầng ứng dụng, dữ liệu vẫn có thể bị làm bẩn khi có nhiều ứng dụng cùng truy cập, hoặc khi DBA chạy lệnh trực tiếp trong DBMS. Kiểm tra tại tầng CSDL là "Lớp khiên bảo vệ tối hậu" (Ultimate Cyber-Shield), tập trung và an toàn tuyệt đối trước mọi nguồn truy cập.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ kiểm tra trên giao diện là đủ hoặc chọn các phương án phóng đại về tốc độ mạng/chi phí.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy triết lý phòng thủ: TẦNG CSDL LÀ LỚP KHIÊN BẢO VỆ TỐI HẬU, tập trung và ngăn chặn mọi nguồn`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 4, Section 0 & IX.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Kiểm tra tại Database = Tuyến phòng thủ vững chắc nhất, độc lập với mọi phần mềm ứng dụng!

---


