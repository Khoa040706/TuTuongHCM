# TỔNG HỢP 2 BỘ ĐỀ THI BẪY CHUYÊN SÂU — CHƯƠNG III: NGÔN NGỮ SQL (STRUCTURED QUERY LANGUAGE / T-SQL)
## MÔN HỌC: HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)

---

### MỤC LỤC TỔNG QUAN

1. [BẢNG TRA CỨU ĐÁP ÁN NHANH ĐỀ BẪY 1 & 2](#bang-tra-cuu-dap-an-nhanh)
2. [NỘI DUNG CHI TIẾT ĐỀ BẪY 1 (db-c3-t1)](#de-thi-bay-so-1-db-c3-t1)
3. [NỘI DUNG CHI TIẾT ĐỀ BẪY 2 (db-c3-t2)](#de-thi-bay-so-2-db-c3-t2)

---

## <a name="bang-tra-cuu-dap-an-nhanh"></a> BẢNG TRA CỨU ĐÁP ÁN NHANH

### BẢNG ĐÁP ÁN ĐỀ BẪY SỐ 1 (db-c3-t1-001 ĐẾN 050)

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


### BẢNG ĐÁP ÁN ĐỀ BẪY SỐ 2 (db-c3-t2-001 ĐẾN 050)

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

## <a name="de-thi-bay-so-1-db-c3-t1"></a> ĐỀ THI BẪY SỐ 1 (db-c3-t1)

> **Quy mô:** 50 câu hỏi bẫy vận dụng cao (100% Hard / Trick Questions)
> **Mã định danh:** `db-c3-t1-001` đến `db-c3-t1-050`

### Câu 1 [db-c3-t1-001]

Khẳng định nào sau đây là HOÀN TOÀN SAI khi so sánh giữa lệnh DELETE và lệnh TRUNCATE TABLE trong T-SQL?

- **A.** Lệnh TRUNCATE TABLE là một lệnh DML thông thường và luôn ghi log chi tiết cho từng dòng dữ liệu bị xóa  *(Đáp án đúng)*
- **B.** Lệnh TRUNCATE TABLE thuộc nhóm lệnh DDL, giải phóng toàn bộ trang dữ liệu và thiết lập lại giá trị IDENTITY
- **C.** Lệnh DELETE cho phép sử dụng mệnh đề WHERE lọc dòng và có thể kích hoạt các trigger DELETE tương ứng
- **D.** Lệnh TRUNCATE TABLE bị hệ thống từ chối thực thi nếu bảng đó đang bị một khóa ngoại từ bảng khác tham chiếu

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình Chương 3 và chuẩn T-SQL: TRUNCATE TABLE thuộc nhóm DDL (Data Definition Language), không phải DML; nó ghi log cấp trang dữ liệu (deallocation) chứ không ghi log chi tiết từng dòng, không kích hoạt Trigger DELETE.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ TRUNCATE xóa dữ liệu nên mặc định nó là lệnh thao tác dữ liệu DML.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân loại DDL vs DML: TRUNCATE là DDL giải phóng trang, không phải DML`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục I.1.b & III.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* DELETE = DML (có WHERE, log từng dòng, chạy Trigger); TRUNCATE = DDL (nhanh, reset IDENTITY, kẹt FK)!

---

### Câu 2 [db-c3-t1-002]

Trong SQL Server, kiểu dữ liệu tinyint chiếm dung lượng 1 byte bộ nhớ. Điều gì sẽ xảy ra nếu ta thực hiện lệnh INSERT giá trị -5 vào cột có kiểu tinyint?

- **A.** Hệ thống tự động chuyển đổi số âm thành số bù hai dương tương ứng và lưu trữ giá trị 251 vào ô nhớ
- **B.** Hệ thống sẽ báo lỗi tràn số (Arithmetic overflow error) và từ chối thực hiện giao dịch chèn dữ liệu  *(Đáp án đúng)*
- **C.** Hệ thống tự động làm tròn giá trị âm về mức 0 và ghi nhận một cảnh báo ngầm vào nhật ký hệ thống
- **D.** Hệ thống sẽ tự động ép kiểu dữ liệu của cột đó từ tinyint mở rộng lên thành smallint để lưu số âm

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục II.1.a: tinyint chỉ lưu số nguyên dương không dấu từ 0 đến 255. Bất kỳ giá trị âm nào (như -5) hoặc vượt quá 255 đều gây ra lỗi tràn số (Arithmetic overflow error) ngay lập tức.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người học ngôn ngữ C tưởng 1 byte lưu số nguyên có dấu từ -128 đến 127 nên nghĩ -5 hợp lệ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy miền giá trị tinyint: 0 đến 255 (KHÔNG CÓ DẤU, không chấp nhận số âm)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục II.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* tinyint trong SQL Server = [0, 255] (Không dấu); Số âm ➔ Bị lỗi Arithmetic overflow error!

---

### Câu 3 [db-c3-t1-003]

Sự khác biệt cốt lõi giữa hai kiểu dữ liệu chuỗi ký tự varchar(50) và nvarchar(50) trong SQL Server là gì?

- **A.** nvarchar(50) có khả năng lưu trữ tối đa 8000 ký tự, trong khi varchar(50) chỉ lưu tối đa 4000 ký tự
- **B.** varchar(50) có độ dài cố định 50 ký tự, trong khi nvarchar(50) có độ dài co giãn linh hoạt theo dữ liệu
- **C.** nvarchar(50) lưu chuỗi Unicode với 2 bytes/ký tự, còn varchar(50) chỉ lưu chuỗi Non-Unicode 1 byte/ký tự  *(Đáp án đúng)*
- **D.** varchar(50) yêu cầu tiền tố N trước chuỗi hằng, trong khi nvarchar(50) tuyệt đối không chấp nhận tiền tố N

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục II.2.a: Tiền tố "n" biểu thị chuẩn quốc tế Unicode. varchar lưu chuỗi Non-Unicode (1 byte/ký tự, tối đa 8.000 ký tự); nvarchar lưu chuỗi Unicode (2 bytes/ký tự, tối đa 4.000 ký tự). Cả 2 đều có độ dài thay đổi.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn giữa tính chất "độ dài thay đổi" (varchar) với tính chất "Unicode" (tiền tố n).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân biệt Non-Unicode (varchar) vs Unicode (nvarchar)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục II.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Chữ "n" đầu = National / Unicode (2 bytes/ký tự, hỗ trợ tiếng Việt có dấu với tiền tố N'...')!

---

### Câu 4 [db-c3-t1-004]

Điều gì xảy ra khi ta thực hiện câu lệnh: INSERT INTO NhanVien(tennv) VALUES ('Nguyễn Văn An') vào cột tennv có kiểu nvarchar(50) mà quên không đặt tiền tố N?

- **A.** Chuỗi dữ liệu tiếng Việt vẫn luôn được bảo toàn trọn vẹn 100% không phụ thuộc vào tiền tố ký tự N
- **B.** Hệ thống SQL Server sẽ lập tức phát sinh lỗi cú pháp và từ chối toàn bộ câu lệnh chèn bản ghi này
- **C.** Hệ thống sẽ tự động nhận diện ngôn ngữ máy khách và tự chèn thêm tiền tố N vào trước câu lệnh
- **D.** Chuỗi có thể bị mất dấu tiếng Việt và chuyển thành 'Nguyen Van An' hoặc các dấu chấm hỏi '?' khó đọc  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục II.2.b: Nếu không có tiền tố N trước hằng chuỗi Unicode (ví dụ 'Nguyễn Văn An' thay vì N'Nguyễn Văn An'), SQL Server sẽ coi đó là chuỗi ký tự Non-Unicode (ASCII) và chuyển đổi theo Collation mặc định, gây hiện tượng mất dấu hoặc biến thành dấu hỏi '?'.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều lập trình viên nghĩ chỉ cần cột kiểu nvarchar là tự động lưu được tiếng Việt mà quên tiền tố N.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thiếu tiền tố N trước hằng chuỗi Unicode trong câu lệnh SQL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục II.2.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Nhập tiếng Việt vào nchar/nvarchar ➔ BẮT BUỘC dùng tiền tố N: N'Nguyễn Văn An'!

---

### Câu 5 [db-c3-t1-005]

Trong SQL Server 2000, giá trị ngày tháng nhỏ nhất (cận dưới) mà kiểu dữ liệu datetime có thể lưu trữ hợp lệ là ngày nào?

- **A.** Ngày 01 tháng 01 năm 1753 (các ngày trước mốc này sẽ phát sinh lỗi Out-of-range value khi nạp)  *(Đáp án đúng)*
- **B.** Ngày 01 tháng 01 năm 0001 (chuẩn lịch Gregory quốc tế bắt đầu từ ngày đầu tiên sau Công nguyên)
- **C.** Ngày 01 tháng 01 năm 1900 (mốc thời gian cơ sở mặc định của hệ thống máy tính cá nhân IBM)
- **D.** Ngày 01 tháng 01 năm 1970 (mốc thời gian Unix Epoch chuẩn của toàn bộ hệ điều hành hiện đại)

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục II.1.b: Kiểu datetime lưu từ 01/01/1753 đến 31/12/9999 (do Anh chuyển đổi từ lịch Julian sang Gregory năm 1752). Mốc 1900 là của smalldatetime (1900-2079).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm với mốc 1900 của smalldatetime hoặc mốc 1970 của Unix timestamp.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy cận dưới kiểu datetime: 01/01/1753 (không phải 1900 hay 1970)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục II.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* datetime = 1753 đến 9999; smalldatetime = 1900 đến 2079!

---

### Câu 6 [db-c3-t1-006]

Cho bảng đã tồn tại dữ liệu. Người quản trị thực hiện lệnh: ALTER TABLE SinhVien ADD Email varchar(50) NOT NULL; mà không chỉ định mệnh đề DEFAULT. Kết quả là gì?

- **A.** Hệ thống tự động bổ sung cột mới và gán giá trị chuỗi rỗng '' cho tất cả các bản ghi đang tồn tại
- **B.** Hệ thống báo lỗi và từ chối vì không thể điền giá trị NULL vào cột mới cho các dòng dữ liệu đang có  *(Đáp án đúng)*
- **C.** Hệ thống tự động thêm cột mới và đặt tạm thời giá trị NULL cho toàn bộ các bản ghi trong cơ sở dữ liệu
- **D.** Hệ thống sẽ tự động kích hoạt tiến trình sao lưu và tự tạo giá trị mặc định theo tên của tài khoản

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục III.2.a: Khi thêm một cột mới có ràng buộc NOT NULL vào bảng ĐÃ CÓ DỮ LIỆU, hệ thống không thể nạp giá trị NULL cho các dòng cũ. Nếu không có DEFAULT cung cấp giá trị thay thế, câu lệnh ALTER TABLE sẽ bị lỗi ngay.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ hệ quản trị sẽ tự gán chuỗi rỗng '' hoặc cho phép tạm NULL.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thêm cột NOT NULL không có DEFAULT vào bảng đã có dữ liệu`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Bảng đã có dữ liệu: Thêm cột NOT NULL ➔ BẮT BUỘC PHẢI CÓ DEFAULT!

---

### Câu 7 [db-c3-t1-007]

Khi thực hiện câu lệnh chèn dữ liệu: INSERT INTO NhanVien (manv, tennv) VALUES (1, N'Lê Văn An'); vào bảng có cột manv mang thuộc tính IDENTITY(1,1), điều gì sẽ xảy ra?

- **A.** Hệ thống tự động bỏ qua giá trị 1 và thay thế bằng một số ngẫu nhiên không trùng lặp trong bảng
- **B.** Hệ thống tự động chấp nhận giá trị 1 và đồng bộ bộ đếm tăng tự động cho các lần chèn tiếp theo sau đó
- **C.** Hệ thống báo lỗi vi phạm vì không thể gán giá trị rõ ràng cho cột IDENTITY khi chưa bật IDENTITY_INSERT  *(Đáp án đúng)*
- **D.** Hệ thống sẽ tự động ghi đè giá trị 1 vào vị trí bản ghi đầu tiên của cơ sở dữ liệu mà không báo lỗi

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục III.1.a: Cột mang thuộc tính IDENTITY tự động sinh số. Theo mặc định, SQL Server cấm người dùng tự chèn giá trị thủ công vào cột này, trừ khi thiết lập `SET IDENTITY_INSERT <ten_bang> ON`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh thường quên quy tắc bảo vệ của cột tự tăng IDENTITY.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy chèn giá trị trực tiếp vào cột IDENTITY khi chưa bật IDENTITY_INSERT`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Cột IDENTITY: CẤM tự nhập giá trị thủ công trừ khi chạy SET IDENTITY_INSERT ON!

---

### Câu 8 [db-c3-t1-008]

Cho hai bảng Khoa (MaKhoa PK) và Lop (MaLop PK, MaKhoa FK tham chiếu Khoa). Để xóa toàn bộ bảng Khoa khỏi cơ sở dữ liệu, thứ tự thực thi hợp lệ duy nhất là gì?

- **A.** Chỉ cần xóa dữ liệu trong bảng Khoa bằng lệnh TRUNCATE TABLE Khoa là bảng tự động biến mất hoàn toàn
- **B.** Phải xóa bảng Khoa trước (DROP TABLE Khoa) rồi hệ thống sẽ tự động xóa sạch các bảng Lop con theo sau
- **C.** Có thể xóa bảng Khoa bất kỳ lúc nào nếu dùng lệnh DROP TABLE Khoa CASCADE CONSTRAINTS trong SQL Server
- **D.** Phải xóa bảng Lop trước (DROP TABLE Lop) rồi mới được phép xóa bảng Khoa (DROP TABLE Khoa)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục III.2.a: Trong SQL Server, không thể DROP bảng Cha khi đang có bảng Con tham chiếu đến bằng khóa ngoại FK. Phải xóa bảng Con trước (DROP TABLE Lop) hoặc phải xóa ràng buộc FK trước bằng ALTER TABLE.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhớ cú pháp CASCADE của Oracle/PostgreSQL mà quên SQL Server 2000 không có DROP TABLE ... CASCADE.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy trật tự DROP TABLE: Bảng Con trước ➔ Bảng Cha sau (ngăn vi phạm FK)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tạo/Chèn: Cha trước, Con sau; Xóa (DROP): CON TRƯỚC, CHA SAU!

---

### Câu 9 [db-c3-t1-009]

Ràng buộc CHECK trong SQL Server hoạt động theo nguyên lý logic nào khi đánh giá tính hợp lệ của dòng dữ liệu được thêm hoặc sửa?

- **A.** Dòng dữ liệu bị từ chối CHỈ KHI biểu thức điều kiện CHECK trả về kết quả là FALSE (chấp nhận TRUE và UNKNOWN)  *(Đáp án đúng)*
- **B.** Dòng dữ liệu được chấp nhận CHỈ KHI biểu thức điều kiện CHECK trả về kết quả chính xác là TRUE (từ chối UNKNOWN)
- **C.** Dòng dữ liệu bị từ chối nếu biểu thức điều kiện trả về UNKNOWN hoặc chứa bất kỳ giá trị NULL nào bên trong
- **D.** Ràng buộc CHECK chỉ kiểm tra tính hợp lệ khi người dùng thực hiện truy vấn SELECT chứ không chặn INSERT

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Chuẩn ANSI SQL & SQL Server: Ràng buộc CHECK chỉ từ chối dòng dữ liệu khi biểu thức kiểm tra trả về FALSE. Nếu biểu thức trả về TRUE hoặc UNKNOWN (ví dụ cột có giá trị NULL khi so sánh), dữ liệu VẪN ĐƯỢC CHẤP NHẬN.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ CHECK bắt buộc phải là TRUE mới cho qua, không biết rằng UNKNOWN cũng được chấp nhận.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy nguyên lý hoạt động của ràng buộc CHECK: Chấp nhận cả TRUE và UNKNOWN (chỉ từ chối FALSE)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.1.a & III.2.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* CHECK chỉ từ chối khi kết quả là FALSE; Nếu là NULL (Unknown) thì VẪN HỢP LỆ!

---

### Câu 10 [db-c3-t1-010]

Sự khác biệt kỹ thuật cơ bản nhất giữa ràng buộc PRIMARY KEY và ràng buộc UNIQUE trong SQL Server là gì?

- **A.** PRIMARY KEY cho phép chứa nhiều giá trị NULL, trong khi ràng buộc UNIQUE tuyệt đối không cho phép bất kỳ giá trị NULL nào
- **B.** PRIMARY KEY tự động tạo chỉ mục Clustered và cấm NULL, còn UNIQUE tạo Non-clustered và cho phép tối đa 1 giá trị NULL  *(Đáp án đúng)*
- **C.** Một bảng có thể tạo được nhiều PRIMARY KEY độc lập, nhưng chỉ được phép tạo duy nhất một ràng buộc UNIQUE trên toàn bảng
- **D.** PRIMARY KEY chỉ áp dụng được trên một cột đơn lẻ, trong khi UNIQUE có thể áp dụng trên tổ hợp nhiều thuộc tính phức hợp

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục III.1.a: Mỗi bảng chỉ có tối đa 1 PRIMARY KEY (tự động tạo Clustered Index mặc định, cấm mọi giá trị NULL). Trong khi đó, bảng có thể có nhiều UNIQUE (tạo Non-clustered Index mặc định, cho phép tối đa 1 giá trị NULL trong SQL Server).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm rằng UNIQUE cấm hoàn toàn NULL hoặc bảng có thể có nhiều khóa chính.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy đối sánh PRIMARY KEY vs UNIQUE: Clustered Index & chấp nhận tối đa 1 NULL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* PK: Đúng 1 cái/bảng, Clustered Index, CẤM NULL; UNIQUE: Nhiều cái/bảng, cho phép 1 giá trị NULL!

---

### Câu 11 [db-c3-t1-011]

Khi tạo bảng với thuộc tính luong money DEFAULT (1000). Nếu thực hiện câu lệnh: INSERT INTO NhanVien (manv, luong) VALUES ('NV01', NULL); thì giá trị của cột luong sẽ là gì?

- **A.** Hệ thống sẽ lập tức báo lỗi cú pháp do xung đột trực tiếp giữa giá trị NULL và định nghĩa DEFAULT của thuộc tính
- **B.** Cột luong sẽ nhận giá trị mặc định là 1000 vì giá trị NULL không được phép ghi đè lên mệnh đề DEFAULT đã định nghĩa
- **C.** Cột luong sẽ mang giá trị NULL vì lệnh INSERT đã chủ động chỉ định rõ ràng giá trị NULL thay vì bỏ qua cột đó  *(Đáp án đúng)*
- **D.** Hệ thống sẽ tự động gán giá trị 0 vì kiểu dữ liệu money không cho phép lưu trữ trạng thái rỗng trong bộ nhớ

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục III.1.a: Mệnh đề DEFAULT chỉ được kích hoạt khi cột đó HOÀN TOÀN KHÔNG ĐƯỢC LIỆT KÊ trong danh sách cột của lệnh INSERT. Nếu người dùng chỉ định rõ ràng giá trị NULL, cột sẽ nhận giá trị NULL.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ khi có DEFAULT thì NULL sẽ bị thay thế bằng giá trị mặc định 1000.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy kích hoạt DEFAULT: Chỉ kích hoạt khi KHÔNG NHẬP, nhập NULL vẫn nhận NULL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Không nhập cột ➔ Nhận DEFAULT; Nhập rõ NULL ➔ Nhận NULL (nếu cột cho phép NULL)!

---

### Câu 12 [db-c3-t1-012]

Hành vi tham chiếu nào sau đây của khóa ngoại (ON DELETE) sẽ tự động xóa tất cả các bản ghi con tương ứng khi bản ghi cha bị xóa khỏi CSDL?

- **A.** ON DELETE SET DEFAULT (tự động cập nhật cột khóa ngoại ở bảng con về giá trị mặc định ban đầu)
- **B.** ON DELETE NO ACTION (hệ thống tự động phát hiện và ngăn chặn không cho xóa bản ghi ở bảng cha)
- **C.** ON DELETE SET NULL (tự động cập nhật cột khóa ngoại ở bảng con trở thành giá trị rỗng NULL)
- **D.** ON DELETE CASCADE (tự động lan truyền thao tác xóa từ bảng cha xuống các bản ghi con liên quan)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục III.2.b: Tùy chọn CASCADE (lan truyền) chỉ định rằng khi một dòng ở bảng cha bị xóa/sửa thì tất cả các dòng tham chiếu đến nó ở bảng con cũng tự động bị xóa/sửa theo.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn giữa NO ACTION (mặc định) và CASCADE (lan truyền).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy hành vi tham chiếu khóa ngoại: CASCADE = Lan truyền thao tác xóa/sửa`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.2.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* CASCADE = Xóa Cha thì Con chết theo; NO ACTION = Báo lỗi chặn lại!

---

### Câu 13 [db-c3-t1-013]

Cho lệnh tạo bảng: CREATE TABLE Test (A char(10), B varchar(10)). Thực hiện chèn chuỗi 'CSDL' vào cả hai cột. Hàm DATALENGTH() trả về kết quả độ dài byte của hai cột lần lượt là gì?

- **A.** Cột A trả về đúng 10 bytes (do char tự bù dấu cách), cột B trả về đúng 4 bytes (do varchar co giãn theo ký tự thực)  *(Đáp án đúng)*
- **B.** Cả hai cột A và B đều trả về đúng 4 bytes vì cùng lưu chuỗi gồm đúng 4 ký tự chữ cái 'C', 'S', 'D', 'L'
- **C.** Cả hai cột A và B đều trả về đúng 10 bytes vì dung lượng khai báo tối đa ban đầu của cả hai trường là 10 ký tự
- **D.** Cột A trả về đúng 8 bytes (chuẩn Non-Unicode), còn cột B trả về đúng 4 bytes do được nén dữ liệu tự động

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục II.2.a: char(10) là chuỗi độ dài cố định, chuỗi 'CSDL' (4 ký tự) sẽ được tự động điền thêm 6 khoảng trắng ở cuối ➔ DATALENGTH(A) = 10 bytes. varchar(10) có độ dài thay đổi theo thực tế ➔ DATALENGTH(B) = 4 bytes.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm hàm DATALENGTH (đo số byte thực tế lưu trữ) với hàm LEN (bỏ qua khoảng trắng ở đuôi).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tự động bù khoảng trắng (space padding) của kiểu dữ liệu char(n)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục II.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* char(n) LUÔN CHIẾM ĐỦ n bytes (bù space); varchar(n) chỉ chiếm đúng số ký tự thực tế!

---

### Câu 14 [db-c3-t1-014]

Điều kiện nào sau đây là BẮT BUỘC để có thể thiết lập quan hệ Khóa ngoại (Foreign Key) giữa hai bảng trong SQL Server?

- **A.** Cột khóa ngoại ở bảng con bắt buộc phải có tên gọi hoàn toàn trùng khớp với tên cột ở bảng cha được trỏ tới
- **B.** Cột được tham chiếu ở bảng cha bắt buộc phải có ràng buộc PRIMARY KEY hoặc ràng buộc UNIQUE xác thực  *(Đáp án đúng)*
- **C.** Cả hai bảng tham gia thiết lập khóa ngoại bắt buộc phải được tạo ra trong cùng một câu lệnh CREATE DATABASE
- **D.** Cột khóa ngoại ở bảng con bắt buộc phải được thiết lập thuộc tính NOT NULL và có sẵn giá trị mặc định DEFAULT

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục III.1.a & III.2.b: Khóa ngoại chỉ có thể tham chiếu đến một cột đóng vai trò là Khóa chính (PRIMARY KEY) hoặc Khóa duy nhất (UNIQUE) ở bảng cha. Tên cột ở bảng con không bắt buộc phải giống bảng cha.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ cột FK phải trùng tên với cột PK ở bảng cha, hoặc chỉ được trỏ về PRIMARY KEY (quên mất UNIQUE cũng được).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy điều kiện tham chiếu FK: Phải trỏ về cột có PRIMARY KEY hoặc UNIQUE`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* FK có thể khác tên cột; Bắt buộc trỏ về cột có PK hoặc UNIQUE ở bảng Cha!

---

### Câu 15 [db-c3-t1-015]

Để xóa hoàn toàn một ràng buộc khóa ngoại có tên FK_SV_Lop khỏi bảng SinhVien, câu lệnh chuẩn xác là gì?

- **A.** ALTER TABLE SinhVien DELETE FOREIGN KEY FK_SV_Lop; (lệnh xóa khóa ngoại chuẩn theo cấu trúc của ngôn ngữ DML)
- **B.** DROP CONSTRAINT FK_SV_Lop FROM TABLE SinhVien; (cú pháp trực tiếp được sử dụng phổ biến trong hệ điều hành)
- **C.** ALTER TABLE SinhVien DROP CONSTRAINT FK_SV_Lop; (xóa định nghĩa ràng buộc mà không làm ảnh hưởng đến dữ liệu)  *(Đáp án đúng)*
- **D.** DROP FOREIGN KEY FK_SV_Lop ON SinhVien; (cú pháp ngắn gọn loại bỏ liên kết bảng mà không kiểm tra dữ liệu)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục III.2.a: Trong SQL Server, xóa bất kỳ ràng buộc nào (PK, FK, UNIQUE, CHECK, DEFAULT) đều dùng cú pháp: `ALTER TABLE <ten_bang> DROP CONSTRAINT <ten_rang_buoc>;`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm cú pháp MySQL (`DROP FOREIGN KEY`) với cú pháp chuẩn của T-SQL (`ALTER TABLE ... DROP CONSTRAINT`).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy cú pháp T-SQL: Xóa ràng buộc bắt buộc dùng ALTER TABLE ... DROP CONSTRAINT`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* T-SQL xóa ràng buộc = ALTER TABLE <Bảng> DROP CONSTRAINT <TênRàngBuộc>!

---

### Câu 16 [db-c3-t1-016]

Thứ tự thực thi logic thực tế (Logical Query Processing Order) của các mệnh đề trong câu lệnh SELECT chuẩn là gì?

- **A.** WHERE ➔ FROM ➔ GROUP BY ➔ HAVING ➔ SELECT ➔ ORDER BY ➔ DISTINCT (trật tự lọc điều kiện trước khi quét quan hệ)
- **B.** SELECT ➔ FROM ➔ WHERE ➔ GROUP BY ➔ HAVING ➔ DISTINCT ➔ ORDER BY (theo đúng trật tự cú pháp viết của lập trình viên)
- **C.** FROM ➔ SELECT ➔ WHERE ➔ GROUP BY ➔ HAVING ➔ ORDER BY ➔ DISTINCT (trật tự nạp bộ nhớ đệm tạm thời của hệ thống)
- **D.** FROM ➔ WHERE ➔ GROUP BY ➔ HAVING ➔ SELECT ➔ DISTINCT ➔ ORDER BY (trật tự chuẩn mực của cỗ máy tối ưu hóa SQL)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục IV.1 & Section 0: Cỗ máy thực thi SQL xử lý: (1) FROM (+ JOIN); (2) WHERE; (3) GROUP BY; (4) HAVING; (5) SELECT; (6) DISTINCT; (7) ORDER BY; (8) TOP.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm thứ tự viết cú pháp (bắt đầu bằng SELECT) với thứ tự thực thi logic bên dưới động cơ SQL.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy trật tự thực thi logic: FROM chạy đầu tiên, SELECT chạy gần cuối, ORDER BY chạy cuối cùng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.1 & Section 0
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Trật tự logic: FROM ➔ WHERE ➔ GROUP BY ➔ HAVING ➔ SELECT ➔ DISTINCT ➔ ORDER BY!

---

### Câu 17 [db-c3-t1-017]

Tại sao câu lệnh sau bị báo lỗi biên dịch: SELECT luong * 12 AS ThuNhapNam FROM NhanVien WHERE ThuNhapNam > 50000;?

- **A.** Vì mệnh đề WHERE được thực thi trước mệnh đề SELECT nên bí danh (Alias) ThuNhapNam chưa hề tồn tại trong bộ nhớ  *(Đáp án đúng)*
- **B.** Vì toán tử nhân (*) không được phép sử dụng trong danh sách chiếu của mệnh đề SELECT theo chuẩn ngôn ngữ T-SQL
- **C.** Vì kiểu dữ liệu của biểu thức tính toán không tương thích với hằng số nguyên 50000 trong điều kiện lọc dữ liệu
- **D.** Vì bí danh cột bắt buộc phải được đặt trong dấu ngoặc vuông [ThuNhapNam] thì hệ thống SQL mới chấp nhận

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục IV.2.a: Theo thứ tự thực thi logic, mệnh đề WHERE chạy trước mệnh đề SELECT. Do đó tại thời điểm quét WHERE, bí danh ThuNhapNam chưa được định nghĩa. Phải viết lại là: `WHERE luong * 12 > 50000`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh thấy cú pháp viết SELECT đứng trước WHERE nên tưởng bí danh cột đã có sẵn để dùng trong WHERE.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy dùng Alias của SELECT trong mệnh đề WHERE (Lỗi logic biên dịch kinh điển)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* WHERE chạy TRƯỚC SELECT ➔ Tuyệt đối không được dùng Alias của SELECT trong WHERE!

---

### Câu 18 [db-c3-t1-018]

Điều gì xảy ra khi thực hiện truy vấn chứa điều kiện: SELECT * FROM SinhVien WHERE DiemTB = NULL;?

- **A.** Truy vấn trả về tất cả những sinh viên có điểm trung bình thực sự bị bỏ trống hoặc mang giá trị rỗng NULL
- **B.** Truy vấn không trả về bất kỳ dòng nào (kể cả những sinh viên có DiemTB là NULL) do phép so sánh = NULL trả về UNKNOWN  *(Đáp án đúng)*
- **C.** Hệ thống sẽ lập tức báo lỗi cú pháp do từ khóa NULL không được phép đứng bên phải của dấu bằng so sánh
- **D.** Truy vấn tự động thay thế giá trị NULL thành số 0 và trả về danh sách các sinh viên có điểm trung bình bằng 0

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục IV.2.a: Trong logic 3 giá trị (3-valued logic: True, False, Unknown) của SQL, NULL biểu thị giá trị chưa biết. Mọi phép so sánh với NULL bằng toán tử `=`, `<>`, `>`, `<` đều trả về UNKNOWN (được WHERE coi là False). Bắt buộc phải dùng `IS NULL`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thói quen lập trình các ngôn ngữ khác (C, Java) khiến học viên dùng `= NULL` thay vì `IS NULL`.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy so sánh bằng với NULL: = NULL luôn trả về UNKNOWN ➔ Không bao giờ ra kết quả`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tìm NULL bắt buộc dùng IS NULL; Viết = NULL hoặc <> NULL là BỊ BẪY NGAY!

---

### Câu 19 [db-c3-t1-019]

Cho bảng NhanVien có 10 dòng, trong đó có đúng 3 dòng mang giá trị NULL ở cột Thuong. Kết quả của COUNT(*) và COUNT(Thuong) lần lượt là gì?

- **A.** COUNT(*) trả về đúng 7 dòng, trong khi COUNT(Thuong) trả về đúng 10 dòng do bao hàm cả các giá trị rỗng trong bảng
- **B.** Cả hai hàm COUNT(*) và COUNT(Thuong) đều trả về đúng 10 dòng vì cùng thao tác trên một quan hệ nhân viên duy nhất
- **C.** COUNT(*) trả về đúng 10, trong khi COUNT(Thuong) trả về đúng 7 (do COUNT(cột) tự động loại bỏ các giá trị NULL)  *(Đáp án đúng)*
- **D.** Hàm COUNT(Thuong) sẽ phát sinh lỗi sập hệ thống do không thể tính toán số đếm trên một cột chứa giá trị rỗng

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục IV.3.a: COUNT(*) đếm tổng số dòng trong bảng (kể cả dòng toàn NULL). COUNT(cot) chỉ đếm các dòng có giá trị khác NULL trong cột đó (10 - 3 = 7 dòng).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ COUNT(*) và COUNT(cột) luôn trả về kết quả giống hệt nhau.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy hàm COUNT(*) vs COUNT(cột) khi dữ liệu có chứa giá trị NULL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* COUNT(*) đếm tất cả dòng; COUNT(cột) BỎ QUA các dòng mang giá trị NULL!

---

### Câu 20 [db-c3-t1-020]

Truy vấn sau đây gặp lỗi kỹ thuật gì: SELECT Phong, COUNT(*) AS SoLuong FROM NhanVien WHERE COUNT(*) > 5 GROUP BY Phong;?

- **A.** Lỗi do mệnh đề GROUP BY bắt buộc phải được đặt trước mệnh đề WHERE theo quy tắc cú pháp ngôn ngữ T-SQL
- **B.** Lỗi do không thể đặt bí danh SoLuong cho hàm kết hợp COUNT(*) khi có sử dụng mệnh đề gom nhóm GROUP BY
- **C.** Lỗi do danh sách chọn SELECT chỉ được phép chứa cột gom nhóm Phong mà không được phép chứa thêm hàm kết hợp
- **D.** Lỗi do sử dụng hàm kết hợp COUNT(*) trong mệnh đề WHERE (điều kiện nhóm bắt buộc phải đặt trong mệnh đề HAVING)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục IV.3.a: Mệnh đề WHERE lọc từng dòng ĐƠN LẺ trước khi gom nhóm, do đó KHÔNG ĐƯỢC PHÉP chứa các hàm kết hợp (COUNT, SUM, AVG, MAX, MIN). Muốn lọc theo điều kiện của hàm kết hợp, bắt buộc phải dùng mệnh đề HAVING (đặt sau GROUP BY).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Người học hay tiện tay viết điều kiện hàm gom nhóm vào mệnh đề WHERE.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy dùng hàm kết hợp (Aggregate functions) trong mệnh đề WHERE`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Lọc dòng đơn lẻ ➔ Dùng WHERE; Lọc giá trị hàm kết hợp (COUNT, SUM...) ➔ BẮT BUỘC DÙNG HAVING!

---

### Câu 21 [db-c3-t1-021]

Quy tắc bắt buộc nào sau đây được áp dụng cho danh sách các thuộc tính xuất hiện trong mệnh đề SELECT khi có sử dụng GROUP BY?

- **A.** Mọi cột trong SELECT không nằm trong hàm kết hợp thì BẮT BUỘC phải xuất hiện trong mệnh đề GROUP BY  *(Đáp án đúng)*
- **B.** Mọi cột xuất hiện trong mệnh đề GROUP BY bắt buộc phải có mặt đầy đủ trong danh sách chiếu của SELECT
- **C.** Mệnh đề SELECT chỉ được phép chứa các hàm kết hợp và tuyệt đối không được hiển thị bất kỳ cột thông thường nào
- **D.** Tất cả các cột trong bảng cơ sở đều phải được liệt kê vào mệnh đề GROUP BY để bảo toàn cấu trúc dữ liệu

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục IV.3.a: Nguyên tắc gom nhóm chuẩn: Mỗi thuộc tính xuất hiện trong danh sách SELECT bắt buộc phải là: (1) Thuộc tính có mặt trong mệnh đề GROUP BY, HOẶC (2) Đối số của một hàm kết hợp (Aggregate function).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn cột tự do vào SELECT mà không đưa vào GROUP BY, dẫn đến lỗi "is invalid in the select list because it is not contained in either an aggregate function or the GROUP BY clause".
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ràng buộc danh sách cột SELECT khi có gom nhóm GROUP BY`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Cột ở SELECT nếu không nằm trong hàm (COUNT, SUM...) ➔ BẮT BUỘC phải có trong GROUP BY!

---

### Câu 22 [db-c3-t1-022]

Cho truy vấn tìm nhân viên có mã không thuộc tập hợp: SELECT manv FROM NhanVien WHERE manv NOT IN (1, 2, NULL);. Kết quả trả về là gì?

- **A.** Truy vấn trả về tất cả các nhân viên có mã số khác 1 và khác 2 (hệ thống tự động loại bỏ giá trị NULL trong tập)
- **B.** Truy vấn trả về tập hợp rỗng (0 dòng) vì phép so sánh phủ định với giá trị NULL luôn trả về kết quả UNKNOWN  *(Đáp án đúng)*
- **C.** Truy vấn sẽ phát sinh lỗi sập hệ thống do toán tử tập hợp NOT IN không thể chấp nhận đối số có giá trị NULL
- **D.** Truy vấn trả về toàn bộ tất cả nhân viên trong bảng vì biểu thức so sánh luôn được mặc định đánh giá là TRUE

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục IV.3.b: `NOT IN (1, 2, NULL)` tương đương với `(manv <> 1) AND (manv <> 2) AND (manv <> NULL)`. Vì `manv <> NULL` luôn trả về UNKNOWN, nên toàn bộ mệnh đề logic AND sẽ trả về UNKNOWN hoặc FALSE ➔ Không bao giờ trả về bất kỳ dòng nào! Đây là bẫy tử thần của NOT IN.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Học viên nghĩ NOT IN sẽ loại bỏ 1 và 2 và bỏ qua NULL, không ngờ rằng có NULL khiến cả câu truy vấn trả về rỗng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tử thần NOT IN với tập con chứa giá trị NULL (Luôn trả về rỗng)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tập con có NULL: IN vẫn ra kết quả; nhưng NOT IN ➔ LUÔN RA TẬP RỖNG (0 dòng)!

---

### Câu 23 [db-c3-t1-023]

Để giải quyết triệt để và an toàn bẫy giá trị NULL của toán tử NOT IN trong bài toán kiểm tra sự tồn tại (Anti-Join), ta nên thay thế bằng giải pháp nào?

- **A.** Chuyển đổi toàn bộ câu lệnh sang sử dụng mệnh đề INTERSECT để tìm phần tử chung giữa hai bảng dữ liệu
- **B.** Sử dụng toán tử so sánh khác (<>) kết hợp với từ khóa ANY để so sánh từng phần tử đơn lẻ trong tập hợp
- **C.** Sử dụng mệnh đề NOT EXISTS với câu truy vấn con tương quan (an toàn tuyệt đối trước mọi giá trị NULL)  *(Đáp án đúng)*
- **D.** Thêm mệnh đề ORDER BY vào cuối câu truy vấn con để hệ thống tự động đẩy các giá trị NULL về cuối cùng

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục IV.3.b & VI.1.b: `NOT EXISTS` chỉ kiểm tra có dòng nào thỏa mãn hay không (True/False dựa trên số lượng dòng trả về), không thực hiện phép so sánh giá trị trực tiếp với NULL, do đó hoàn toàn miễn nhiễm với bẫy NULL của `NOT IN`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh không biết vì sao NOT EXISTS ưu việt hơn NOT IN trong xử lý dữ liệu thực tế.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thay thế an toàn: NOT EXISTS thay cho NOT IN để miễn nhiễm với NULL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b & VI.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tìm "không tồn tại" (Anti-Join) an toàn nhất ➔ DÙNG NOT EXISTS thay cho NOT IN!

---

### Câu 24 [db-c3-t1-024]

Sự khác biệt bản chất giữa việc đặt điều kiện lọc ở mệnh đề ON so với đặt ở mệnh đề WHERE trong phép LEFT JOIN là gì?

- **A.** Đặt điều kiện ở ON sẽ biến câu lệnh thành INNER JOIN, còn đặt ở WHERE sẽ giữ nguyên bản chất của LEFT JOIN
- **B.** ON và WHERE trong phép LEFT JOIN hoàn toàn có tác dụng và trả về kết quả giống hệt nhau trong mọi trường hợp
- **C.** Mệnh đề ON chỉ áp dụng cho bảng bên trái, còn mệnh đề WHERE chỉ có tác dụng lọc dữ liệu cho bảng bên phải
- **D.** ON lọc bảng bên phải trước khi ghép (vẫn giữ đủ các dòng bảng trái); WHERE lọc kết quả sau khi đã thực hiện phép nối  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục IV.3.a: Trong LEFT JOIN: điều kiện ở `ON` xác định dòng nào của bảng phải được ghép với bảng trái (nếu không khớp, bảng trái vẫn hiển thị và bảng phải điền NULL). Nhưng nếu đặt điều kiện lọc bảng phải ở `WHERE` (ví dụ `WHERE B.col = 5`), các dòng có B.col IS NULL sẽ bị WHERE loại bỏ ➔ vô tình biến LEFT JOIN thành INNER JOIN!
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Bẫy kinh điển trong viết SQL: Đặt điều kiện lọc bảng phụ vào WHERE làm triệt tiêu tác dụng của LEFT JOIN.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy điều kiện lọc ở ON vs WHERE trong phép LEFT OUTER JOIN`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* LEFT JOIN: Muốn giữ đủ dòng bảng trái ➔ Điều kiện bảng phải PHẢI NẰM Ở ON, không đưa vào WHERE!

---

### Câu 25 [db-c3-t1-025]

Khi sử dụng toán tử LIKE trong T-SQL, ký tự đại diện nào sau đây đại diện cho ĐÚNG MỘT KÝ TỰ BẤT KỲ?

- **A.** Ký tự dấu gạch dưới `_` (đại diện chính xác cho duy nhất một ký tự bất kỳ tại vị trí tương ứng)  *(Đáp án đúng)*
- **B.** Ký tự dấu phần trăm `%` (đại diện cho một chuỗi gồm đúng một ký tự chữ cái trong bảng mã ASCII)
- **C.** Ký tự dấu chấm hỏi `?` (đại diện cho một ký tự bất kỳ theo chuẩn biểu thức chính quy RegEx)
- **D.** Ký tự dấu hoa thị `*` (đại diện cho một ký tự đại diện mở rộng theo chuẩn hệ điều hành DOS)

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục IV.2.a: Trong SQL: `%` đại diện cho chuỗi ký tự bất kỳ có độ dài tùy ý (từ 0 đến nhiều ký tự); `_` đại diện cho ĐÚNG 1 ký tự bất kỳ. Dấu `?` và `*` là của hệ điều hành Windows/DOS, không phải của SQL.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh bị thói quen tìm kiếm tập tin trong Windows dùng `?` và `*` nên chọn nhầm.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ký tự đại diện của LIKE: `_` là 1 ký tự, `%` là chuỗi ký tự`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* SQL LIKE: `_` = Đúng 1 ký tự; `%` = Chuỗi 0 hoặc nhiều ký tự!

---

### Câu 26 [db-c3-t1-026]

Cho điều kiện lọc: WHERE Luong BETWEEN 1000 AND 3000. Khẳng định nào sau đây là CHÍNH XÁC về dải giá trị được lấy?

- **A.** Chỉ lấy các giá trị nằm nghiêm ngặt ở khoảng giữa, hoàn toàn loại trừ hai giá trị cận biên 1000 và 3000
- **B.** Lấy dải giá trị từ 1000 đến 3000 BAO GỒM CẢ 1000 VÀ 3000 (tương đương Luong >= 1000 AND Luong <= 3000)  *(Đáp án đúng)*
- **C.** Chỉ lấy giá trị cận dưới 1000 và loại trừ giá trị cận trên 3000 theo chuẩn quy ước nửa khoảng toán học
- **D.** Báo lỗi cú pháp nếu thứ tự bị đảo ngược từ lớn đến bé thành BETWEEN 3000 AND 1000 trong mệnh đề WHERE

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục IV.2.a: Toán tử `BETWEEN a AND b` trong SQL tương đương với toán tử so sánh `(x >= a AND x <= b)`. Dải giá trị là đoạn đóng $[a, b]$, LUÔN BAO GỒM CẢ HAI ĐẦU MÚT a và b.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm với khái niệm "ở giữa" trong tiếng Việt (tưởng loại trừ 2 đầu mút).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy toán tử BETWEEN: Luôn bao gồm cả hai giá trị đầu mút (Đoạn đóng [a, b])`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* BETWEEN 1000 AND 3000 = [1000, 3000] (Lấy cả 1000 và 3000)!

---

### Câu 27 [db-c3-t1-027]

Hàm kết hợp nào sau đây trong SQL KHÔNG BỎ QUA giá trị NULL khi tính toán trên tập dữ liệu?

- **A.** Hàm SUM(Luong) (tự động quy đổi các giá trị NULL về số 0 trước khi tiến hành tính tổng toàn bộ bảng)
- **B.** Hàm AVG(Luong) (tự động cộng dồn và chia trung bình cho tổng tất cả các dòng bao gồm cả các ô rỗng)
- **C.** Hàm COUNT(*) (đếm toàn bộ số lượng dòng dữ liệu của bảng bất kể giá trị các cột có NULL hay không)  *(Đáp án đúng)*
- **D.** Hàm MIN(Luong) (sẽ coi giá trị NULL là giá trị nhỏ nhất trong miền số thực và trả về kết quả là NULL)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục IV.3.a: Tất cả các hàm kết hợp (SUM, AVG, MIN, MAX, COUNT(cột)) đều tự động bỏ qua giá trị NULL khi tính toán. DUY NHẤT hàm COUNT(*) là tính toán trên từng dòng nguyên vẹn nên không bỏ qua dòng nào, kể cả dòng toàn NULL.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ AVG sẽ tính NULL là 0 và chia cho tổng số dòng (thực tế AVG bỏ qua NULL cả ở tử số lẫn mẫu số).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy xử lý NULL của các hàm kết hợp: Duy nhất COUNT(*) không bỏ qua NULL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tất cả hàm kết hợp (SUM, AVG, MIN, MAX, COUNT(cột)) đều BỎ QUA NULL; Chỉ COUNT(*) đếm hết!

---

### Câu 28 [db-c3-t1-028]

Điều gì xảy ra khi mệnh đề GROUP BY gom nhóm trên một cột có chứa nhiều giá trị NULL?

- **A.** Hệ thống sẽ phát sinh lỗi biên dịch do giá trị NULL không có giá trị cụ thể để so sánh bằng nhau
- **B.** Mỗi dòng chứa giá trị NULL sẽ được tách riêng ra thành một nhóm độc lập riêng biệt không trùng nhau
- **C.** Hệ thống sẽ tự động loại bỏ toàn bộ các dòng chứa giá trị NULL ra khỏi kết quả trước khi gom nhóm
- **D.** Tất cả các dòng chứa giá trị NULL sẽ được gom chung lại thành MỘT NHÓM DUY NHẤT trong kết quả truy vấn  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục IV.3.a: Theo chuẩn SQL, trong mệnh đề GROUP BY, tất cả các giá trị NULL được coi là tương đương nhau và được gom chung lại thành MỘT NHÓM DUY NHẤT.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ NULL <> NULL trong WHERE thì trong GROUP BY chúng cũng không bằng nhau.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy gom nhóm trên cột chứa NULL: Tất cả NULL về chung 1 nhóm duy nhất`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* GROUP BY trên cột có NULL ➔ Tất cả các dòng NULL gộp thành 1 NHÓM DUY NHẤT!

---

### Câu 29 [db-c3-t1-029]

Toán tử UNION và toán tử UNION ALL khác biệt căn bản nhất ở điểm nào trong quá trình xử lý tập kết quả?

- **A.** UNION tự động loại bỏ các dòng dữ liệu trùng lặp và sắp xếp kết quả, còn UNION ALL giữ lại tất cả các dòng  *(Đáp án đúng)*
- **B.** UNION chỉ áp dụng được cho hai bảng có cùng tên thuộc tính, còn UNION ALL áp dụng được cho mọi bảng bất kỳ
- **C.** UNION ALL có tốc độ thực thi chậm hơn nhiều so với UNION vì phải tốn tài nguyên kiểm tra trùng lặp dữ liệu
- **D.** UNION cho phép các cột khác kiểu dữ liệu ghép nối với nhau, còn UNION ALL bắt buộc phải hoàn toàn trùng kiểu

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục IV.3.b: `UNION` gộp hai tập kết quả và tự động thực hiện phép loại bỏ trùng lặp (DISTINCT - tốn chi phí sắp xếp/sort). `UNION ALL` chỉ đơn giản nối tất cả các dòng lại với nhau, giữ nguyên các dòng trùng lặp nên chạy nhanh hơn nhiều.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ UNION ALL là "tất cả" nên phải làm nhiều việc hơn và chậm hơn UNION.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy hiệu năng UNION vs UNION ALL: UNION phải khử trùng lặp (chậm hơn UNION ALL)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* UNION = Gộp + Khử trùng lặp (chậm); UNION ALL = Gộp trực tiếp giữ nguyên trùng lặp (nhanh)!

---

### Câu 30 [db-c3-t1-030]

Trong câu truy vấn con lồng nhau (Subquery), toán tử nào sau đây trả về TRUE nếu có ÍT NHẤT MỘT DÒNG kết quả được sinh ra từ truy vấn con?

- **A.** Toán tử IN (kiểm tra sự tồn tại của một tập hợp các giá trị đơn lẻ trong danh sách các thuộc tính)
- **B.** Toán tử EXISTS (kiểm tra sự tồn tại của các bản ghi, trả về TRUE ngay khi tìm thấy dòng đầu tiên)  *(Đáp án đúng)*
- **C.** Toán tử ALL (yêu cầu tất cả các phần tử trong câu truy vấn con phải thỏa mãn điều kiện so sánh)
- **D.** Toán tử ANY (yêu cầu biểu thức bên trái phải có giá trị bằng với giá trị trung bình của tập con)

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục IV.3.b: `EXISTS (<subquery>)` trả về TRUE nếu câu truy vấn con trả về từ 1 dòng trở lên, trả về FALSE nếu câu truy vấn con trả về tập rỗng (0 dòng). Ngay khi tìm thấy dòng đầu tiên, động cơ SQL dừng quét (short-circuit).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn cú pháp và cơ chế giữa IN (so khớp giá trị) và EXISTS (kiểm tra số dòng tồn tại).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy cơ chế toán tử EXISTS: Trả về TRUE khi câu truy vấn con có >= 1 dòng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* EXISTS chỉ quan tâm CÓ DÒNG NÀO KHÔNG (>= 1 dòng là TRUE, không có dòng nào là FALSE)!

---

### Câu 31 [db-c3-t1-031]

Mệnh đề ORDER BY trong câu lệnh SELECT có đặc quyền gì vượt trội hơn so với mệnh đề WHERE liên quan đến bí danh (Alias)?

- **A.** ORDER BY cho phép gán lại kiểu dữ liệu mới cho các cột được chọn mà không cần dùng hàm CONVERT
- **B.** ORDER BY có thể sử dụng các bí danh được định nghĩa tạm thời trong các hàm thủ tục lưu trữ mở rộng
- **C.** ORDER BY được phép sử dụng trực tiếp các bí danh (Alias) đã được đặt ở mệnh đề SELECT trước đó  *(Đáp án đúng)*
- **D.** ORDER BY có thể tự động bỏ qua các giá trị NULL mà không cần người dùng chỉ định điều kiện lọc

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục IV.2.a: Theo thứ tự thực thi logic, mệnh đề `ORDER BY` chạy SAU mệnh đề `SELECT`. Do đó tại bước ORDER BY, các bí danh cột (Alias) đã được tạo ra và có thể sử dụng hợp lệ (khác với WHERE chạy trước SELECT nên không dùng được).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhớ mang máng "SQL không cho dùng Alias" mà quên mất ORDER BY chạy sau SELECT nên ĐƯỢC PHÉP dùng Alias.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy dùng Alias trong ORDER BY: Hoàn toàn hợp lệ vì ORDER BY chạy sau SELECT`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* WHERE chạy trước SELECT ➔ CẤM dùng Alias; ORDER BY chạy sau SELECT ➔ ĐƯỢC DÙNG Alias!

---

### Câu 32 [db-c3-t1-032]

Để lọc ra danh sách các phòng ban có mức lương trung bình lớn hơn 3000, cấu trúc câu lệnh chuẩn xác là gì?

- **A.** SELECT Phong, AVG(Luong) FROM NhanVien HAVING AVG(Luong) > 3000; (bỏ qua mệnh đề GROUP BY để hệ thống tự suy diễn)
- **B.** SELECT Phong, AVG(Luong) FROM NhanVien WHERE AVG(Luong) > 3000 GROUP BY Phong; (lọc trực tiếp trong mệnh đề WHERE)
- **C.** SELECT Phong, AVG(Luong) FROM NhanVien GROUP BY Phong WHERE AVG(Luong) > 3000; (đổi vị trí mệnh đề WHERE ra phía sau)
- **D.** SELECT Phong, AVG(Luong) FROM NhanVien GROUP BY Phong HAVING AVG(Luong) > 3000; (chuẩn xác theo quy tắc gom nhóm)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục IV.3.a: Điều kiện lọc trên hàm kết hợp `AVG(Luong) > 3000` bắt buộc phải đặt trong mệnh đề `HAVING`, và phải đi kèm với `GROUP BY Phong`. Đặt trong WHERE là sai cú pháp.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn giữa WHERE và HAVING hoặc đặt vị trí WHERE sau GROUP BY.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy lọc hàm kết hợp AVG: Bắt buộc dùng GROUP BY ... HAVING`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Lọc hàm kết hợp (AVG, COUNT...) ➔ BẮT BUỘC dùng GROUP BY ... HAVING!

---

### Câu 33 [db-c3-t1-033]

Cho hai bảng A có 3 dòng và B có 4 dòng. Kết quả của phép nối chéo (CROSS JOIN) giữa hai bảng A và B sẽ trả về bao nhiêu dòng dữ liệu?

- **A.** Chính xác là 12 dòng dữ liệu (phép tích Descartes kết hợp từng dòng của A với mọi dòng của B: 3 x 4 = 12)  *(Đáp án đúng)*
- **B.** Chính xác là 7 dòng dữ liệu (phép cộng hợp số lượng bản ghi của hai bảng lại với nhau: 3 + 4 = 7)
- **C.** Chính xác là 4 dòng dữ liệu (lấy theo số lượng dòng tối đa của bảng có quy mô lớn hơn trong phép nối)
- **D.** Chính xác là 0 dòng dữ liệu nếu hai bảng không có bất kỳ cột nào có cùng tên và cùng kiểu dữ liệu

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục IV.3.a: CROSS JOIN là phép tích Descartes (Cartesian Product). Số dòng kết quả = (Số dòng của A) $\times$ (Số dòng của B) $= 3 \times 4 = 12$ dòng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm phép nhân tích Descartes với phép cộng gộp số dòng (3 + 4 = 7).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy số dòng CROSS JOIN: Nhân số dòng (3 x 4 = 12 dòng)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* CROSS JOIN = Tích Descartes ➔ Lấy số dòng bảng A NHÂN số dòng bảng B!

---

### Câu 34 [db-c3-t1-034]

Khi thực hiện câu lệnh SELECT DISTINCT Phong, ChucVu FROM NhanVien;, từ khóa DISTINCT hoạt động như thế nào?

- **A.** Chỉ loại bỏ các giá trị trùng lặp trên cột đầu tiên (Phong), còn cột ChucVu vẫn giữ nguyên toàn bộ
- **B.** Loại bỏ các dòng dữ liệu trùng lặp trên CẢ CẶP GIÁ TRỊ TỔ HỢP (Phong, ChucVu) trong kết quả trả về  *(Đáp án đúng)*
- **C.** Chỉ loại bỏ các giá trị trùng lặp trên cột cuối cùng (ChucVu), còn cột Phong vẫn hiển thị lặp lại
- **D.** Tự động phân tách bảng thành hai danh sách độc lập và khử trùng lặp riêng biệt trên từng cột một

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục IV.2.a: Từ khóa DISTINCT áp dụng cho TOÀN BỘ danh sách các thuộc tính được chọn trong mệnh đề SELECT, tức là khử các dòng có cặp giá trị `(Phong, ChucVu)` giống hệt nhau, chứ không áp dụng riêng lẻ cho cột đầu tiên.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ DISTINCT chỉ có tác dụng với cột đứng ngay sau nó (cột Phong).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phạm vi tác dụng của DISTINCT: Áp dụng trên toàn bộ tổ hợp các cột được chọn`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* DISTINCT áp dụng cho TOÀN BỘ các cột trong SELECT (khử trùng cả tổ hợp dòng)!

---

### Câu 35 [db-c3-t1-035]

Truy vấn con tương quan (Correlated Subquery) khác biệt căn bản nhất so với truy vấn con không tương quan (Self-contained Subquery) ở điểm nào?

- **A.** Truy vấn con tương quan bắt buộc phải trả về một hằng số vô hướng (Scalar Value) duy nhất gồm một hàng và một cột
- **B.** Truy vấn con tương quan chỉ thực thi một lần duy nhất độc lập trước khi câu truy vấn chính bên ngoài bắt đầu chạy
- **C.** Truy vấn con tương quan phụ thuộc vào dữ liệu của bảng ngoài và phải thực thi lặp lại cho từng dòng của bảng ngoài  *(Đáp án đúng)*
- **D.** Truy vấn con tương quan chỉ có thể được đặt trong mệnh đề FROM chứ tuyệt đối không được phép đặt trong WHERE

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục IV.3.b: Truy vấn con tương quan (Correlated Subquery) chứa thuộc tính tham chiếu đến bảng của truy vấn ngoài. Do đó nó không thể chạy độc lập, mà phải thực thi lặp đi lặp lại với mỗi dòng của truy vấn ngoài.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn cách thức hoạt động và hiệu năng giữa subquery độc lập (chạy 1 lần) và tương quan (chạy N lần).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy bản chất Correlated Subquery: Phụ thuộc bảng ngoài và thực thi lặp lại từng dòng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Correlated Subquery = Có thuộc tính bảng ngoài ➔ Phải chạy lặp lại cho từng dòng bảng ngoài!

---

### Câu 36 [db-c3-t1-036]

Khẳng định nào sau đây là HOÀN TOÀN ĐÚNG về bản chất kỹ thuật của Khung nhìn (View) trong SQL Server?

- **A.** Mỗi khi bảng cơ sở gốc thay đổi dữ liệu, người quản trị bắt buộc phải chạy lệnh tái tạo View thì dữ liệu mới đổi
- **B.** View là một bảng vật lý độc lập, tự động sao chép toàn bộ dữ liệu từ bảng gốc sang một tệp tin lưu trữ mới
- **C.** View cho phép tăng tốc độ truy vấn vượt trội trong mọi trường hợp do dữ liệu luôn được lưu sẵn trên RAM
- **D.** View là một bảng ảo, không chứa dữ liệu thực trên đĩa, dữ liệu hiển thị được rút trích động từ các bảng cơ sở  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục V.1.a: Khung nhìn (View) là một quan hệ nhưng là BẢNG ẢO (Virtual table). View không chứa dữ liệu thực, không lưu trữ vật lý trên đĩa (chỉ lưu định nghĩa câu lệnh SELECT trong System Catalog). Khi truy vấn View, hệ thống thực thi động câu lệnh SELECT trên các bảng gốc.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay lầm tưởng View lưu trữ bản sao dữ liệu trên đĩa và cần lệnh sync dữ liệu.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy bản chất của View: Bảng ảo, không lưu dữ liệu thực trên đĩa`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục V.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* View = BẢNG ẢO; Chỉ lưu định nghĩa câu lệnh SELECT, dữ liệu luôn rút trích động từ bảng gốc!

---

### Câu 37 [db-c3-t1-037]

Điều kiện nào sau đây khiến một Khung nhìn (View) TUYỆT ĐỐI KHÔNG THỂ thực hiện các thao tác cập nhật (INSERT, UPDATE, DELETE)?

- **A.** Khung nhìn có chứa từ khóa DISTINCT, mệnh đề GROUP BY hoặc sử dụng các hàm kết hợp (Aggregate functions)  *(Đáp án đúng)*
- **B.** Khung nhìn được tạo ra từ việc kết nối hai bảng dữ liệu khác nhau thông qua một điều kiện khóa ngoại hợp lệ
- **C.** Khung nhìn chỉ chứa một phần các cột của bảng gốc và che giấu đi các thuộc tính mang thông tin nhạy cảm
- **D.** Khung nhìn có sử dụng mệnh đề WHERE để lọc dữ liệu của các nhân viên có mức thu nhập thấp hơn định mức

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục V.1.b: Một View KHÔNG THỂ cập nhật (INSERT/UPDATE/DELETE) nếu: (1) Được xây dựng trên nhiều bảng cơ sở; (2) Có chứa `DISTINCT`; (3) Có chứa `GROUP BY` hoặc `HAVING`; (4) Chứa hàm kết hợp (COUNT, SUM...); (5) Chứa cột tính toán.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ View nào cũng cập nhật được dữ liệu xuống bảng cơ sở bên dưới.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy điều kiện cập nhật qua View: Có DISTINCT, GROUP BY, Aggregate function ➔ BẤT KHẢ CẬP NHẬT`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục V.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* View có DISTINCT, GROUP BY, Hàm kết hợp ➔ TUYỆT ĐỐI CẤM INSERT/UPDATE/DELETE!

---

### Câu 38 [db-c3-t1-038]

Tác dụng kỹ thuật then chốt của mệnh đề WITH CHECK OPTION khi định nghĩa một Khung nhìn (View) là gì?

- **A.** Tự động kiểm tra tính toàn vẹn khóa ngoại và khóa chính của toàn bộ các bảng liên quan trước khi nạp dữ liệu
- **B.** Ngăn chặn các lệnh INSERT/UPDATE làm cho dòng dữ liệu không còn thỏa mãn điều kiện WHERE của chính View đó  *(Đáp án đúng)*
- **C.** Ngăn chặn mọi người dùng không có quyền quản trị tối cao (SA) thực hiện truy vấn xem cấu trúc bên trong View
- **D.** Tự động sao lưu và khôi phục lại dữ liệu của View về trạng thái ban đầu nếu câu lệnh cập nhật bị gián đoạn

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục V.1.b: Mệnh đề `WITH CHECK OPTION` đảm bảo rằng mọi thao tác INSERT hoặc UPDATE thông qua View phải thỏa mãn điều kiện trong mệnh đề WHERE của View. Nếu sửa dữ liệu khiến dòng đó biến mất khỏi View (ví dụ sửa Luong = 1500 trong View lọc Luong > 2000), hệ thống sẽ từ chối.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ WITH CHECK OPTION là kiểm tra kiểu dữ liệu hoặc kiểm tra khóa chính/ngoại.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy mệnh đề WITH CHECK OPTION: Chặn thao tác làm dòng dữ liệu thoát khỏi điều kiện WHERE của View`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục V.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* WITH CHECK OPTION = Đảm bảo dữ liệu chèn/sửa qua View PHẢI THỎA MÃN điều kiện WHERE của View!

---

### Câu 39 [db-c3-t1-039]

Trong CSDL QLBanHang, bài toán kinh điển: "Tìm thông tin các mặt hàng CHƯA TỪNG ĐƯỢC KHÁCH ĐẶT MUA" (Bài tập 4). Biểu thức nào sau đây sử dụng LEFT JOIN chuẩn xác nhất?

- **A.** SELECT H.* FROM Hanghoa H LEFT JOIN Chitiet_HD C ON H.MaHG = C.MaHG WHERE C.MaHG = NULL;
- **B.** SELECT H.* FROM Hanghoa H LEFT JOIN Chitiet_HD C ON H.MaHG = C.MaHG WHERE C.Soluong = 0;
- **C.** SELECT H.* FROM Hanghoa H LEFT JOIN Chitiet_HD C ON H.MaHG = C.MaHG WHERE C.MaHG IS NULL;  *(Đáp án đúng)*
- **D.** SELECT H.* FROM Hanghoa H INNER JOIN Chitiet_HD C ON H.MaHG = C.MaHG WHERE C.MaHG IS NULL;

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục VI.1.a (Bài tập 4): Kỹ thuật Anti-Join dùng LEFT JOIN: Nối Hanghoa với Chitiet_HD, những mặt hàng chưa bao giờ bán sẽ có các cột từ Chitiet_HD mang giá trị NULL. Ta lọc bằng `WHERE C.MaHG IS NULL`. Dùng `= 0` hoặc `= NULL` hoặc INNER JOIN đều sai.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay bẫy chọn `Soluong = 0` (hàng chưa bán thì không hề có dòng trong Chitiet_HD) hoặc bẫy `= NULL`.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Anti-Join bài toán kinh điển: LEFT JOIN kết hợp WHERE C.Khóa IS NULL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục VI.1.a & VI.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Chưa từng bán = LEFT JOIN ... WHERE BảngPhụ.Khoa IS NULL!

---

### Câu 40 [db-c3-t1-040]

Trong CSDL QLBanHang, để giải bài toán "Tìm thông tin các khách hàng CÓ CÙNG NGÀY SINH" (Bài tập 7) bằng phép Tự kết nối (Self-Join), điều kiện lọc giữa hai bảng bí danh K1 và K2 phải là gì để KHÔNG BỊ TRÙNG CẶP?

- **A.** K1.NgaySinh <> K2.NgaySinh AND K1.MaKH <> K2.MaKH (lấy sai hoàn toàn yêu cầu ngày sinh phải giống nhau)
- **B.** K1.NgaySinh = K2.NgaySinh AND K1.MaKH <> K2.MaKH (vẫn bị trùng lặp cặp hoán vị A-B và B-A)
- **C.** K1.NgaySinh = K2.NgaySinh AND K1.MaKH = K2.MaKH (bị lỗi tự ghép chính khách hàng đó với bản thân họ)
- **D.** K1.NgaySinh = K2.NgaySinh AND K1.MaKH < K2.MaKH (khử trùng bản thân và khử cặp lặp đảo thứ tự)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục VI.1.b (Bài tập 7): Nếu dùng `K1.MaKH <> K2.MaKH`, hệ thống sẽ trả về cả cặp (KH01, KH02) và (KH02, KH01). Để kết quả xuất hiện duy nhất 1 lần cho mỗi cặp, bắt buộc phải dùng toán tử so sánh thứ tự: `K1.MaKH < K2.MaKH`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Hầu hết sinh viên chỉ dùng `<>`, kết quả bị nhân đôi do tồn tại cặp đối xứng hoán vị.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy khử trùng lặp trong Self-Join: Dùng toán tử `<` thay vì `<>``
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục VI.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Self-Join tìm cặp đối tượng cùng tính chất ➔ Dùng toán tử `<` (A.ID < B.ID) để không bị trùng cặp!

---

### Câu 41 [db-c3-t1-041]

Trong CSDL QLBanHang, bài toán "Thống kê số lượng hóa đơn đã lập của MỖI nhân viên" (Bài tập 8, bao gồm cả nhân viên chưa lập hóa đơn nào). Truy vấn nào sau đây trả về kết quả ĐÚNG?

- **A.** SELECT NV.MaNV, COUNT(HD.SoHD) FROM NhanVien NV LEFT JOIN Hoadon HD ON NV.MaNV = HD.MaNV GROUP BY NV.MaNV;  *(Đáp án đúng)*
- **B.** SELECT NV.MaNV, COUNT(*) FROM NhanVien NV LEFT JOIN Hoadon HD ON NV.MaNV = HD.MaNV GROUP BY NV.MaNV;
- **C.** SELECT NV.MaNV, COUNT(HD.SoHD) FROM NhanVien NV INNER JOIN Hoadon HD ON NV.MaNV = HD.MaNV GROUP BY NV.MaNV;
- **D.** SELECT NV.MaNV, SUM(HD.SoHD) FROM NhanVien NV LEFT JOIN Hoadon HD ON NV.MaNV = HD.MaNV GROUP BY NV.MaNV;

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục VI.1.a (Bài tập 8): Phải dùng `LEFT JOIN` để giữ lại nhân viên chưa lập hóa đơn. Khi đếm số hóa đơn, PHẢI DÙNG `COUNT(HD.SoHD)` để nhân viên chưa có hóa đơn (SoHD là NULL) sẽ được đếm ra 0. Nếu dùng `COUNT(*)`, nó sẽ đếm dòng chứa NULL đó thành 1 (sai nghiêm trọng)!
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh dùng COUNT(*) trong LEFT JOIN khiến nhân viên chưa bán được gì vẫn bị đếm là có 1 hóa đơn.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy kết hợp LEFT JOIN và COUNT(*): Bắt buộc dùng COUNT(CotBangPhai)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thống kê "MỖI... kể cả chưa có" ➔ LEFT JOIN + COUNT(BảngPhụ.ID) (CẤM dùng COUNT(*))!

---

### Câu 42 [db-c3-t1-042]

Trong CSDL QLBanHang, câu lệnh thêm ràng buộc kiểm tra cho bảng DONDATHANG (Bài tập 6): Ngày giao hàng (NgayGH) và ngày chuyển hàng (NgayCH) phải sau hoặc bằng ngày đặt hàng (NgayDH). Cú pháp chuẩn là gì?

- **A.** ALTER TABLE DONDATHANG ADD CONSTRAINT CK_Ngay CHECK (NgayGH >= NgayDH OR NgayCH >= NgayDH);
- **B.** ALTER TABLE DONDATHANG ADD CONSTRAINT CK_Ngay CHECK (NgayGH >= NgayDH AND NgayCH >= NgayDH);  *(Đáp án đúng)*
- **C.** ALTER TABLE DONDATHANG CREATE CHECK CONSTRAINT (NgayGH >= NgayDH AND NgayCH >= NgayDH);
- **D.** ALTER TABLE DONDATHANG MODIFY COLUMN ADD CHECK (NgayGH >= NgayDH AND NgayCH >= NgayDH);

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục VI.1.a (Bài tập 6): Cú pháp chuẩn: `ALTER TABLE <Bang> ADD CONSTRAINT <TenCK> CHECK (<BieuThuc>)`. Cả hai ngày đều phải sau ngày đặt hàng nên phải dùng toán tử `AND`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm toán tử logic `AND` thành `OR` hoặc dùng sai từ khóa `MODIFY TABLE`.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy cú pháp ALTER TABLE ADD CONSTRAINT CHECK & toán tử AND`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Bổ sung ràng buộc kiểm tra ➔ ALTER TABLE <Bảng> ADD CONSTRAINT <Tên> CHECK (... AND ...)!

---

### Câu 43 [db-c3-t1-043]

Trong CSDL Công Ty (QLNV), để tìm tên các nhân viên có mức lương cao hơn mức lương trung bình của chính phòng ban mà nhân viên đó đang công tác, giải pháp chuẩn mực là gì?

- **A.** Dùng truy vấn con độc lập: SELECT Ten FROM NhanVien WHERE Luong > (SELECT AVG(Luong) FROM NhanVien) AND Phong IN (SELECT Phong);
- **B.** Dùng mệnh đề gom nhóm HAVING: SELECT Ten FROM NhanVien GROUP BY Phong, Ten, Luong HAVING Luong > (SELECT AVG(Luong) FROM NhanVien);
- **C.** Dùng truy vấn con tương quan: SELECT Ten FROM NhanVien A WHERE Luong > (SELECT AVG(Luong) FROM NhanVien B WHERE B.Phong = A.Phong);  *(Đáp án đúng)*
- **D.** Dùng phép kết nối tự nhiên: SELECT Ten FROM NhanVien A JOIN NhanVien B ON A.Phong = B.Phong WHERE A.Luong > AVG(B.Luong) ALL;

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục IV.3.b: Mức lương trung bình của CHÍNH PHÒNG ĐÓ thay đổi theo từng nhân viên, do đó bắt buộc phải dùng Correlated Subquery liên kết `NV2.Phong = NV1.Phong`. Dùng Subquery độc lập (phương án C) chỉ so với lương TB toàn công ty.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn câu C (tính trung bình toàn công ty) thay vì tính trung bình riêng của từng phòng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy so sánh với mức trung bình cục bộ của nhóm: Bắt buộc dùng Correlated Subquery`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* So sánh với TB của "chính nhóm đó" ➔ Bắt buộc liên kết phòng ở truy vấn con (NV2.Phong = NV1.Phong)!

---

### Câu 44 [db-c3-t1-044]

Trong CSDL QLBanHang: Hanghoa(MaHG, TenHG, Gia, Soluong). Để tìm mã và tên các mặt hàng có giá lớn hơn 10 VÀ số lượng hiện có ít hơn 20 (Bài tập 2), câu truy vấn T-SQL chuẩn mực là gì?

- **A.** SELECT MaHG AND TenHG FROM Hanghoa WHERE Gia > 10, Soluong < 20; (sai cú pháp ngăn cách cột và điều kiện)
- **B.** SELECT MaHG, TenHG FROM Hanghoa WHERE Gia > 10 OR Soluong < 20; (dùng sai toán tử tuyển OR)
- **C.** SELECT * FROM Hanghoa HAVING Gia > 10 AND Soluong < 20; (dùng sai mệnh đề HAVING khi không có gom nhóm)
- **D.** SELECT MaHG, TenHG FROM Hanghoa WHERE Gia > 10 AND Soluong < 20; (truy vấn lọc cơ bản chuẩn mực)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục VI.1.a (Bài tập 2): Lấy mã và tên mặt hàng thỏa mãn đồng thời cả 2 điều kiện: `Gia > 10 AND Soluong < 20`. Phải dùng toán tử `AND` và ngăn cách các cột bằng dấu phẩy `,`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm giữa AND và OR hoặc nhầm cách liệt kê cột trong SELECT.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy toán tử logic AND trong câu lệnh truy vấn lọc đơn giản`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thỏa mãn đồng thời nhiều điều kiện ➔ Dùng toán tử logic AND!

---

### Câu 45 [db-c3-t1-045]

Khi thực hiện câu lệnh xóa khung nhìn: DROP VIEW View_NhanVien; thì dữ liệu trong bảng cơ sở gốc NhanVien sẽ bị ảnh hưởng như thế nào?

- **A.** Dữ liệu trong bảng gốc hoàn toàn KHÔNG BỊ ẢNH HƯỞNG (chỉ có định nghĩa của khung nhìn trong hệ thống bị xóa)  *(Đáp án đúng)*
- **B.** Toàn bộ dữ liệu của bảng gốc NhanVien sẽ bị xóa sạch hoàn toàn khỏi cơ sở dữ liệu trên đĩa cứng
- **C.** Chỉ những bản ghi nào từng xuất hiện trong khung nhìn View_NhanVien mới bị xóa khỏi bảng cơ sở
- **D.** Bảng gốc NhanVien sẽ bị khóa tạm thời và chuyển sang trạng thái chỉ đọc (Read-only) trong hệ thống

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục V.1.a: DROP VIEW chỉ xóa bỏ định nghĩa của View khỏi bộ từ điển dữ liệu (System Catalog), hoàn toàn KHÔNG ẢNH HƯỞNG hay xóa dữ liệu trong các bảng cơ sở bên dưới.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh lo sợ việc DROP VIEW sẽ làm xóa luôn dữ liệu trong bảng gốc.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tác động của DROP VIEW: Chỉ xóa định nghĩa View, KHÔNG xóa dữ liệu bảng gốc`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục V.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Xóa View (DROP VIEW) = Chỉ xóa định nghĩa bảng ảo, dữ liệu bảng gốc VẪN NGUYÊN VẸN!

---

### Câu 46 [db-c3-t1-046]

Trong CSDL QLBanHang, để giải bài toán "Cho biết thông tin những khách hàng đã từng mua mặt hàng áo Việt Tiến" (Bài tập 3), ta cần kết nối những bảng nào?

- **A.** Chỉ cần kết nối trực tiếp 2 bảng: Khach và Hanghoa thông qua khóa ngoại MaKH đặt ở bảng Hanghoa
- **B.** Cần kết nối 3 bảng: Khach, Hoadon và Chitiet_HD (thông qua MaKH và SoHD) kết hợp với bảng Hanghoa  *(Đáp án đúng)*
- **C.** Chỉ cần kết nối 2 bảng: Khach và Chitiet_HD thông qua số chứng minh nhân dân của người mua hàng
- **D.** Không cần kết nối bảng mà chỉ cần quét dữ liệu trực tiếp trên bảng Chitiet_HD là đủ toàn bộ thông tin

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục VI.1.a (Bài tập 3): Khach không có liên kết trực tiếp với Hanghoa. Phải đi qua đường dẫn: `Khach` (MaKH) ➔ `Hoadon` (SoHD) ➔ `Chitiet_HD` (MaHG) ➔ `Hanghoa` (TenHG = N'Áo Việt Tiến').
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay quên bảng trung gian Hoadon và tìm cách nối thẳng Khach với Hanghoa.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy chuỗi kết nối 4 bảng: Khach ➔ Hoadon ➔ Chitiet_HD ➔ Hanghoa`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khách mua Hàng gì ➔ Bắt buộc phải qua cầu nối Hoadon và Chitiet_HD!

---

### Câu 47 [db-c3-t1-047]

Trong CSDL QLBanHang, để tính "Tổng số lượng bán được của MỖI mặt hàng" (Bài tập 5), biểu thức tính toán chuẩn mực là gì?

- **A.** SELECT MaHG, SUM(Soluong) AS TongBan FROM Chitiet_HD; (thiếu mệnh đề gom nhóm bắt buộc GROUP BY)
- **B.** SELECT MaHG, COUNT(Soluong) AS TongBan FROM Chitiet_HD GROUP BY MaHG; (dùng nhầm hàm đếm số dòng COUNT)
- **C.** SELECT MaHG, SUM(Soluong) AS TongBan FROM Chitiet_HD GROUP BY MaHG; (chuẩn xác theo quy tắc tính tổng)  *(Đáp án đúng)*
- **D.** SELECT MaHG, AVG(Soluong) AS TongBan FROM Chitiet_HD GROUP BY MaHG; (dùng nhầm hàm tính trung bình cộng)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục VI.1.a (Bài tập 5): Tính tổng số lượng của MỖI mặt hàng đòi hỏi: dùng hàm `SUM(Soluong)` để cộng dồn số lượng, và gom nhóm theo `GROUP BY MaHG`. Dùng COUNT là đếm số lần xuất hiện chứ không phải tổng số lượng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn giữa SUM (tính tổng giá trị số) và COUNT (đếm số lần xuất hiện).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân biệt hàm SUM vs COUNT khi tính tổng số lượng bán`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tính "Tổng số lượng" ➔ Dùng SUM; Đếm "Số lần bán" ➔ Dùng COUNT!

---

### Câu 48 [db-c3-t1-048]

Điều gì xảy ra nếu cố gắng chèn một bản ghi mới thông qua một Khung nhìn (View) mà bảng gốc có một cột khác (không xuất hiện trong View) có thuộc tính NOT NULL nhưng lại KHÔNG CÓ giá trị DEFAULT?

- **A.** Hệ thống sẽ tự động sao chép giá trị từ bản ghi liền kề phía trước để lấp đầy vào cột còn thiếu đó
- **B.** Hệ thống tự động gán giá trị NULL vào cột đó ở bảng gốc và tiếp tục thực hiện lệnh chèn thành công
- **C.** Hệ thống tự động bổ sung cột đó vào định nghĩa của View và hiển thị hộp thoại yêu cầu nhập bổ sung
- **D.** Hệ thống sẽ lập tức báo lỗi và từ chối thao tác INSERT vì cột NOT NULL ở bảng gốc không nhận được dữ liệu  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục V.1.b: Khi INSERT qua View, các cột ở bảng gốc không xuất hiện trong View sẽ nhận giá trị NULL (hoặc giá trị DEFAULT nếu có). Nếu cột đó là NOT NULL mà không có DEFAULT, thao tác INSERT chắc chắn bị hệ thống từ chối vì vi phạm ràng buộc toàn vẹn.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh không hình dung được điều gì xảy ra với các cột bị ẩn đi khi thao tác INSERT qua View.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy INSERT qua View khi bảng gốc có cột NOT NULL không có DEFAULT`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục V.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Cột ẩn ở bảng gốc là NOT NULL không có DEFAULT ➔ CẤM INSERT qua View!

---

### Câu 49 [db-c3-t1-049]

Trong câu lệnh truy vấn: SELECT TOP 5 WITH TIES * FROM SinhVien ORDER BY DiemTB DESC;, từ khóa WITH TIES có ý nghĩa kỹ thuật gì?

- **A.** Lấy thêm tất cả các sinh viên có điểm số bằng với điểm số của sinh viên ở vị trí thứ 5 (kết quả có thể > 5 dòng)  *(Đáp án đúng)*
- **B.** Buộc hệ thống phải chọn ngẫu nhiên đúng 5 sinh viên khi có nhiều sinh viên có cùng mức điểm trung bình
- **C.** Chỉ lấy đúng 5 sinh viên nhưng ưu tiên những sinh viên có ngày sinh nhật nhỏ hơn xếp lên phía trước
- **D.** Tự động loại bỏ tất cả các sinh viên có điểm trùng nhau và chỉ lấy 5 mức điểm trung bình độc nhất

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Chuẩn T-SQL: `TOP n WITH TIES` (phải đi cùng ORDER BY) sẽ lấy n dòng đầu tiên, đồng thời lấy thêm tất cả các dòng tiếp theo nếu giá trị ở cột sắp xếp của chúng trùng với dòng thứ n. Kết quả trả về có thể nhiều hơn n dòng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ TOP 5 thì kết quả LUÔN LUÔN chỉ có đúng 5 dòng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy từ khóa WITH TIES: Có thể trả về nhiều hơn số lượng n chỉ định nếu trùng điểm`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* TOP n WITH TIES: Lấy n dòng + LẤY THÊM các dòng hòa điểm với dòng thứ n!

---

### Câu 50 [db-c3-t1-050]

Triết lý cốt lõi của ngôn ngữ SQL (T-SQL) khác biệt căn bản nhất so với các ngôn ngữ lập trình truyền thống (C, Pascal, Java) ở điểm nào?

- **A.** SQL là ngôn ngữ hướng đối tượng hoàn chỉnh, yêu cầu đóng gói toàn bộ các hàm nghiệp vụ vào các lớp đối tượng cụ thể
- **B.** SQL là ngôn ngữ phi thủ tục (khai báo): Người dùng chỉ cần chỉ rõ "cần lấy dữ liệu gì", không cần chỉ định thuật toán lấy  *(Đáp án đúng)*
- **C.** SQL yêu cầu lập trình viên phải tự viết mã vòng lặp duyệt từng bản ghi và tự cấp phát vùng nhớ con trỏ trên RAM
- **D.** SQL chỉ có thể thực thi được trên các hệ thống mạng cục bộ và không thể tương tác trực tiếp với hệ điều hành

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình Chương 3, Mục I.1.a & Section 0: SQL là ngôn ngữ khai báo / phi thủ tục (Declarative / Non-procedural). Người dùng chỉ mô tả kết quả mong muốn ("WHAT"), còn thuật toán quét chỉ mục hay quét toàn bảng ("HOW") do cỗ máy tối ưu hóa truy vấn (Query Optimizer) của RDBMS tự động quyết định.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm SQL với ngôn ngữ thủ tục (Procedural) do T-SQL có bổ sung một số cấu trúc IF/WHILE.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy triết lý SQL: Là ngôn ngữ Khai báo / Phi thủ tục (Declarative), chỉ cần chỉ rõ "WHAT"`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục I.1.a & Section 0
  + 💡 *Mẹo phản xạ nhanh (`tip`):* SQL = Ngôn ngữ KHAI BÁO (Phi thủ tục): Chỉ cần nói "CẦN GÌ", không cần nói "LÀM THẾ NÀO"!

---



---

## <a name="de-thi-bay-so-2-db-c3-t2"></a> ĐỀ THI BẪY SỐ 2 (db-c3-t2)

> **Quy mô:** 50 câu hỏi bẫy vận dụng cao (100% Hard / Trick Questions)
> **Mã định danh:** `db-c3-t2-001` đến `db-c3-t2-050`

### Câu 1 [db-c3-t2-001]

Khẳng định nào sau đây là KHÔNG CHÍNH XÁC khi nói về giá trị NULL của thuộc tính Khóa ngoại (Foreign Key) trong T-SQL?

- **A.** Giá trị NULL trong khóa ngoại biểu thị bản ghi con đó tạm thời chưa có mối liên kết đến bất kỳ bản ghi cha nào
- **B.** Khóa ngoại hoàn toàn có thể nhận giá trị NULL nếu cột đó không được người thiết kế gắn thêm ràng buộc NOT NULL
- **C.** Khóa ngoại tuyệt đối không bao giờ được phép mang giá trị NULL trong bất kỳ tình huống thiết kế cơ sở dữ liệu nào  *(Đáp án đúng)*
- **D.** Khi một khóa ngoại mang giá trị NULL, hệ thống sẽ tự động bỏ qua việc kiểm tra tính hợp lệ ở bảng cha tương ứng

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục III.1.a & III.2.b: Khóa ngoại ĐƯỢC PHÉP mang giá trị NULL (trừ khi nó nằm trong Khóa chính của Thực thể yếu hoặc bị ràng buộc rõ bằng NOT NULL). Khẳng định nói "tuyệt đối không bao giờ được phép mang giá trị NULL" là hoàn toàn sai.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nhầm tính chất NOT NULL của Khóa chính (PK) sang Khóa ngoại (FK).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tính chất NULL của Khóa ngoại: Khóa ngoại hoàn toàn ĐƯỢC PHÉP NULL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa chính CẤM NULL; Khóa ngoại ĐƯỢC PHÉP NULL (trừ phi có khai báo NOT NULL)!

---

### Câu 2 [db-c3-t2-002]

Trong SQL Server, hai hàm chuyển đổi kiểu dữ liệu CAST() và CONVERT() khác biệt kỹ thuật cơ bản nhất ở điểm nào?

- **A.** Hàm CAST() bắt buộc phải sử dụng trong mệnh đề WHERE, trong khi hàm CONVERT() chỉ được phép sử dụng ở mệnh đề SELECT
- **B.** CAST() là hàm mở rộng của T-SQL hỗ trợ chuyển đổi định dạng tiền tệ, còn CONVERT() là hàm tiêu chuẩn quốc tế ANSI
- **C.** CAST() chỉ có khả năng chuyển đổi qua lại giữa các kiểu số, còn CONVERT() chỉ có tác dụng chuyển đổi chuỗi ký tự
- **D.** CONVERT() là hàm mở rộng độc quyền của T-SQL có hỗ trợ tham số định dạng ngày tháng Style, còn CAST() theo chuẩn ANSI SQL  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục II.1 & II.2: `CAST(x AS type)` là chuẩn ANSI/ISO SQL có mặt trên mọi RDBMS. `CONVERT(type, x [, style])` là hàm mở rộng của riêng T-SQL (Microsoft), cung cấp tham số thứ 3 (Style) để định dạng chuỗi ngày tháng cực kỳ linh hoạt (như 101, 103, 111...).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn vai trò chuẩn hóa quốc tế ANSI của CAST với hàm mở rộng CONVERT của Microsoft.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy CAST (Chuẩn ANSI) vs CONVERT (T-SQL độc quyền kèm tham số Style)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục II.1.b & II.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* CAST = Chuẩn ANSI (không có Style); CONVERT = Độc quyền T-SQL (có tham số Style ngày tháng)!

---

### Câu 3 [db-c3-t2-003]

Sự khác biệt cốt lõi về bản chất lưu trữ giữa kiểu dữ liệu số thực gần đúng float và số có độ chính xác cố định decimal(p,s) là gì?

- **A.** float là số dấu chấm động có thể phát sinh sai số làm tròn thập phân, decimal lưu số chính xác tuyệt đối từng chữ số  *(Đáp án đúng)*
- **B.** decimal là số thực dấu chấm động chiếm bộ nhớ cố định 4 bytes, float là số nguyên mở rộng chiếm dung lượng 8 bytes
- **C.** float chỉ lưu được các số nguyên dương cực lớn, decimal chỉ lưu được các số nguyên âm có tối đa 10 chữ số thập phân
- **D.** decimal không thể sử dụng được trong các biểu thức tính toán số học, float hỗ trợ toàn bộ các hàm toán học mở rộng

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục II.1.a & II.1.b: `decimal(p,s)` (hoặc numeric) là kiểu số có độ chính xác cố định (Exact numbers), lưu trữ chính xác tuyệt đối. `float` là số dấu chấm động (Approximate numbers) theo chuẩn IEEE 754, có thể phát sinh sai số làm tròn (rounding error) khi tính toán hoặc so sánh bằng `=`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh thường dùng float để lưu tiền tệ hoặc số lượng hàng hóa và bị lỗi sai số dấu chấm động.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy số gần đúng float vs số chính xác cố định decimal/numeric`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục II.1.a & II.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Lưu tiền tệ/dữ liệu tài chính ➔ DÙNG decimal/money; CẤM dùng float vì float có sai số làm tròn!

---

### Câu 4 [db-c3-t2-004]

Khi khai báo một thuộc tính Khóa ngoại đệ quy (Recursive Foreign Key, ví dụ: MaNQL tham chiếu về chính MaNV trong cùng bảng NhanVien), quy tắc nào là BẮT BUỘC?

- **A.** Bảng NhanVien bắt buộc phải được nhân đôi thành hai bảng vật lý độc lập trước khi tạo ràng buộc đệ quy
- **B.** Cột khóa ngoại MaNQL bắt buộc phải cho phép mang giá trị NULL để lưu trữ bản ghi của người quản lý cao nhất  *(Đáp án đúng)*
- **C.** Cột khóa ngoại MaNQL bắt buộc phải có kiểu dữ liệu chuỗi ký tự tự do và không được phép đặt ràng buộc CHECK
- **D.** Hệ quản trị CSDL SQL Server sẽ tự động từ chối mọi ràng buộc khóa ngoại tự tham chiếu về chính bảng đó

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục III.1.a & III.2.b: Khóa ngoại đệ quy mô tả cây phân cấp quản lý (1:N đệ quy). Người đứng đầu cao nhất (Tổng giám đốc / Giám đốc) không có ai quản lý, nên cột MaNQL của họ BẮT BUỘC PHẢI MANG GIÁ TRỊ NULL. Nếu cột này bị gắn NOT NULL, cây phân cấp sẽ bị lỗi không thể chèn dòng đầu tiên.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay đặt NOT NULL cho tất cả các cột khóa khiến không thể nạp bản ghi gốc (Root node) của cây.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy khóa ngoại đệ quy: Cột tự tham chiếu BẮT BUỘC PHẢI CHO PHÉP NULL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.1.a & III.2.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa ngoại đệ quy (Quản lý - Nhân viên) ➔ Cột FK bắt buộc phải cho phép NULL (để lưu Sếp tổng)!

---

### Câu 5 [db-c3-t2-005]

Khi thực hiện câu lệnh xóa một cơ sở dữ liệu: DROP DATABASE QLBanHang;, điều kiện tiên quyết nào sau đây BẮT BUỘC phải được thỏa mãn?

- **A.** Cơ sở dữ liệu bắt buộc phải được sao lưu dự phòng (Full Backup) thành công vào ổ đĩa trong vòng 24 giờ
- **B.** Người thực hiện bắt buộc phải xóa sạch toàn bộ các bảng bên trong CSDL bằng lệnh DROP TABLE trước đó
- **C.** Không được có bất kỳ kết nối người dùng nào đang sử dụng (USE) hoặc đang có giao dịch mở trên CSDL đó  *(Đáp án đúng)*
- **D.** Tất cả các tệp tin nhật ký giao dịch (.LDF) bắt buộc phải được người quản trị xóa thủ công trên Windows

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục III.1.a: Trong SQL Server, không thể DROP DATABASE nếu cơ sở dữ liệu đang có người kết nối hoặc đang được phiên làm việc hiện tại sử dụng (`USE QLBanHang`). Phải chuyển sang CSDL khác (ví dụ `USE master`) và ngắt mọi kết nối hiện hữu.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Người học hay đứng trong chính CSDL đó và chạy lệnh DROP DATABASE dẫn đến lỗi "database is currently in use".
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy xóa CSDL đang sử dụng: Bắt buộc không có kết nối nào đang active (USE master trước)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Muốn DROP DATABASE ➔ Bắt buộc chuyển sang `USE master;` và ngắt hết kết nối!

---

### Câu 6 [db-c3-t2-006]

Trong câu lệnh INSERT INTO BangA SELECT * FROM BangB;, điều kiện bắt buộc nào sau đây phải được thỏa mãn giữa hai bảng?

- **A.** BangA bắt buộc phải là một bảng hoàn toàn rỗng chưa từng chứa bất kỳ một bản ghi dữ liệu nào trước đó
- **B.** Tên gọi của tất cả các cột ở BangA bắt buộc phải trùng khớp 100% với tên gọi các cột ở BangB tương ứng
- **C.** Cả hai bảng bắt buộc phải có cùng một người dùng tạo ra và phải có số lượng bản ghi hiện có bằng nhau
- **D.** Danh sách các cột của hai bảng phải tương thích hoàn toàn về thứ tự vị trí, số lượng và kiểu dữ liệu  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục III.2.a: Lệnh `INSERT INTO ... SELECT` yêu cầu tập kết quả sinh ra từ SELECT phải tương thích hoàn toàn với bảng đích về số lượng cột, thứ tự vị trí cột và kiểu dữ liệu (hoặc có thể ép kiểu ngầm định). Tên cột không cần phải trùng nhau.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ tên cột ở 2 bảng bắt buộc phải trùng nhau thì lệnh mới map được.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tương thích cột trong INSERT INTO SELECT: Vị trí & kiểu dữ liệu, KHÔNG CẦN TRÙNG TÊN`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* INSERT INTO ... SELECT: Map theo THỨ TỰ VỊ TRÍ và KIỂU DỮ LIỆU, không quan tâm tên cột!

---

### Câu 7 [db-c3-t2-007]

Cho câu lệnh: UPDATE NhanVien SET Luong = Luong * 1.1; (không có mệnh đề WHERE). Hậu quả trực tiếp của thao tác này là gì?

- **A.** Tất cả các bản ghi nhân viên trong toàn bộ bảng đều được tăng 10% lương do thiếu mệnh đề WHERE lọc dòng  *(Đáp án đúng)*
- **B.** Hệ thống SQL Server sẽ lập tức phát sinh lỗi cú pháp và từ chối thực hiện vì bắt buộc phải có WHERE
- **C.** Chỉ có duy nhất bản ghi nhân viên đầu tiên trong bảng được tăng lương 10%, các bản ghi khác giữ nguyên
- **D.** Hệ thống sẽ tự động hiển thị hộp thoại cảnh báo và yêu cầu người dùng xác nhận trước khi tiếp tục

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục III.2.a: Lệnh UPDATE khi không có mệnh đề WHERE sẽ áp dụng thao tác cập nhật lên TOÀN BỘ CÁC DÒNG trong bảng. Đây là một trong những lỗi thao tác nguy hiểm và kinh điển nhất trong quản trị CSDL.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ SQL Server sẽ chặn lại hoặc chỉ cập nhật dòng hiện tại.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy UPDATE không có WHERE: Cập nhật TOÀN BỘ dữ liệu của cả bảng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* UPDATE / DELETE không có WHERE ➔ TÁC ĐỘNG TOÀN BỘ CẢ BẢNG!

---

### Câu 8 [db-c3-t2-008]

Tại sao việc sử dụng kiểu dữ liệu money lại được khuyến nghị cho các bài toán tài chính thay vì dùng kiểu float trong SQL Server?

- **A.** money chiếm dung lượng bộ nhớ nhỏ hơn rất nhiều so với float (chỉ tốn đúng 1 byte so với 8 bytes)
- **B.** money là kiểu số chính xác cố định (chính xác đến 4 chữ số thập phân), hoàn toàn không bị sai số làm tròn  *(Đáp án đúng)*
- **C.** money tự động hiển thị ký hiệu tiền tệ của quốc gia máy khách ($ hoặc VNĐ) mà không cần định dạng chuỗi
- **D.** money cho phép người dùng lưu trữ trực tiếp tên của các ngân hàng thương mại vào cùng một thuộc tính

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục II.1.a: `money` là kiểu dữ liệu số chính xác cố định (8 bytes, chính xác đến 1/10000 đơn vị tiền tệ = 4 chữ số thập phân), không bao giờ bị sai số làm tròn dấu chấm động như `float`. Nó chỉ lưu số thuần túy, không lưu ký hiệu tiền tệ.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ kiểu money sẽ tự động lưu hoặc hiển thị ký hiệu tiền tệ ($ hay VNĐ).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy bản chất kiểu money: Số chính xác 4 chữ số thập phân, không tự gắn ký hiệu tiền tệ`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục II.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* money = Số chính xác cố định 4 số lẻ; Không tự động gắn ký hiệu tiền tệ đâu nhé!

---

### Câu 9 [db-c3-t2-009]

Khi thực hiện câu lệnh: ALTER TABLE NhanVien DROP COLUMN Email; nếu cột Email đang tham gia vào một ràng buộc CHECK, điều gì xảy ra?

- **A.** Hệ thống tự động chuyển ràng buộc CHECK sang kiểm tra trên một cột ký tự ngẫu nhiên khác trong bảng
- **B.** Hệ thống tự động xóa cột Email đồng thời tự động xóa luôn ràng buộc CHECK mà không cần cảnh báo
- **C.** Hệ thống báo lỗi và từ chối xóa cột Email cho đến khi ràng buộc CHECK liên quan được xóa bỏ trước  *(Đáp án đúng)*
- **D.** Cột Email vẫn bị xóa và ràng buộc CHECK sẽ chuyển sang trạng thái vô hiệu hóa tạm thời trong CSDL

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục III.2.a: Trong SQL Server, không thể xóa (DROP COLUMN) một cột đang bị phụ thuộc bởi một ràng buộc (CHECK, DEFAULT, FOREIGN KEY, PRIMARY KEY). Phải dùng `ALTER TABLE DROP CONSTRAINT` để xóa ràng buộc trước, rồi mới xóa cột.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ lệnh xóa cột sẽ tự động xóa kèm mọi ràng buộc gắn trên cột đó.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phụ thuộc ràng buộc khi DROP COLUMN: Phải xóa ràng buộc trước`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Cột có ràng buộc (CHECK, FK...) ➔ Muốn xóa cột PHẢI XÓA RÀNG BUỘC TRƯỚC!

---

### Câu 10 [db-c3-t2-010]

Trong câu lệnh tạo bảng: CREATE TABLE DuAn (MaDA int PRIMARY KEY, TenDA nvarchar(50));, nếu không chỉ định kiểu chỉ mục, hệ thống sẽ mặc định làm gì?

- **A.** Tự động tạo hai chỉ mục song song vừa phân cụm vừa không phân cụm để tối ưu hóa truy vấn đọc
- **B.** Tự động tạo một chỉ mục không phân cụm (Non-clustered Index) độc lập trên cột MaDA của bảng
- **C.** Hoàn toàn không tạo bất kỳ chỉ mục nào cho đến khi người dùng chủ động chạy lệnh CREATE INDEX
- **D.** Tự động tạo một chỉ mục phân cụm (Clustered Index) duy nhất trên cột MaDA của bảng dữ liệu đó  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục III.1.a: Mặc định trong SQL Server, khi khai báo khóa chính PRIMARY KEY mà không chỉ định rõ từ khóa `NONCLUSTERED`, hệ thống sẽ tự động tạo một Chỉ mục phân cụm (Clustered Index) trên cột khóa chính đó.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh không nắm được cơ chế tự động tạo Clustered Index ngầm định của PRIMARY KEY.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy chỉ mục mặc định của PRIMARY KEY: Luôn tự tạo Clustered Index`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* PRIMARY KEY mặc định ➔ TỰ TẠO CLUSTERED INDEX (trừ khi ghi rõ NONCLUSTERED)!

---

### Câu 11 [db-c3-t2-011]

Điều kiện nào sau đây là ĐÚNG khi thực hiện lệnh đổi tên bảng bằng thủ tục hệ thống sp_rename trong SQL Server 2000?

- **A.** Cú pháp chuẩn: EXEC sp_rename 'TenBangCu', 'TenBangMoi'; (sử dụng thủ tục lưu trữ hệ thống mở rộng)  *(Đáp án đúng)*
- **B.** Cú pháp chuẩn: ALTER TABLE TenBangCu RENAME TO TenBangMoi; (chuẩn cú pháp theo tiêu chuẩn Oracle)
- **C.** Cú pháp chuẩn: RENAME TABLE TenBangCu TO TenBangMoi; (chuẩn cú pháp trực tiếp của hệ thống MySQL)
- **D.** Không thể đổi tên bảng trong SQL Server 2000 mà bắt buộc phải xóa bảng cũ đi và tạo lại bảng mới

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục III.2.a: Trong SQL Server 2000/T-SQL, không có lệnh `RENAME TABLE` hay `ALTER TABLE ... RENAME`. Muốn đổi tên bảng hoặc tên cột, phải sử dụng thủ tục lưu trữ hệ thống: `EXEC sp_rename 'old_name', 'new_name';`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Người học quen với cú pháp `RENAME TABLE` của MySQL hay `RENAME TO` của Oracle nên chọn sai.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy cú pháp đổi tên đối tượng trong T-SQL: Dùng sp_rename`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đổi tên bảng/cột trong SQL Server ➔ DÙNG `sp_rename`!

---

### Câu 12 [db-c3-t2-012]

Trong T-SQL, từ khóa GO thường xuất hiện giữa các khối lệnh mang bản chất kỹ thuật gì?

- **A.** Là một câu lệnh DDL tiêu chuẩn của T-SQL dùng để lưu trữ vĩnh viễn các giao dịch đang chờ xử lý
- **B.** Là tín hiệu báo hiệu kết thúc một gói lệnh (Batch separator) gửi đến máy chủ, không phải lệnh T-SQL  *(Đáp án đúng)*
- **C.** Là một từ khóa điều khiển luồng tương đương với lệnh CONTINUE trong các vòng lặp duyệt dữ liệu
- **D.** Là một câu lệnh bảo mật yêu cầu người dùng phải xác thực lại mật khẩu trước khi chạy đoạn mã tiếp

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục I.1.b: `GO` không phải là câu lệnh T-SQL. Nó là lệnh của các công cụ tiện ích khách (như Query Analyzer, SSMS, sqlcmd) dùng để phân tách và gửi một gói lệnh (Batch) tới máy chủ SQL Server để biên dịch và thực thi độc lập.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều lập trình viên nghĩ GO là câu lệnh T-SQL tiêu chuẩn.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy từ khóa GO: Là Batch separator của công cụ máy khách, không phải lệnh T-SQL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục I.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* GO = Dấu phân tách lô lệnh (Batch Separator) của ứng dụng máy khách, không phải lệnh T-SQL!

---

### Câu 13 [db-c3-t2-013]

Cho bảng NhanVien có ràng buộc CHECK (Luong > 0). Khi thực hiện câu lệnh: INSERT INTO NhanVien (Luong) VALUES (NULL);, kết quả sẽ là gì?

- **A.** Hệ thống tự động thay thế giá trị NULL thành số 1 để thỏa mãn điều kiện lớn hơn 0 trước khi nạp vào
- **B.** Hệ thống sẽ báo lỗi vi phạm ràng buộc CHECK vì giá trị NULL không thể lớn hơn số 0 theo quy tắc số học
- **C.** Câu lệnh chèn thành công vì biểu thức NULL > 0 trả về UNKNOWN và ràng buộc CHECK không từ chối UNKNOWN  *(Đáp án đúng)*
- **D.** Câu lệnh bị từ chối vì mọi biểu thức so sánh có chứa giá trị NULL đều bị hệ thống mặc định coi là FALSE

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục III.1.a & III.2.b: Biểu thức `NULL > 0` trả về kết quả logic là `UNKNOWN`. Ràng buộc CHECK chỉ ngăn chặn (từ chối) khi kết quả kiểm tra là `FALSE`. Vì `UNKNOWN` không phải là `FALSE`, nên câu lệnh INSERT giá trị NULL VẪN THÀNH CÔNG (trừ khi cột đó có thêm ràng buộc NOT NULL)!
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Bẫy tư duy kinh điển: Thí sinh nghĩ `Luong > 0` thì NULL không lớn hơn 0 nên bị chặn.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy CHECK với NULL: NULL > 0 trả về UNKNOWN ➔ CHECK vẫn cho qua!`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.1.a & III.2.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* CHECK chỉ chặn FALSE! So sánh với NULL ra UNKNOWN ➔ CHECK CHO QUA (Muốn chặn phải thêm NOT NULL)!

---

### Câu 14 [db-c3-t2-014]

Khi thực hiện câu lệnh xóa bảng: DROP TABLE NhanVien;, nếu bảng NhanVien đang có một Trigger loại INSTEAD OF DROP thì điều gì xảy ra?

- **A.** Hệ thống sẽ tự động khóa bảng NhanVien và gửi thông báo lỗi đến hộp thư điện tử của người quản trị
- **B.** Hành vi xóa bảng sẽ bị chặn lại và đoạn mã bên trong Trigger INSTEAD OF sẽ được kích hoạt thực thi thay thế
- **C.** Bảng NhanVien vẫn bị xóa bình thường và Trigger sẽ được thực thi lùi sau khi tệp tin đã biến mất hoàn toàn
- **D.** Lệnh DROP TABLE sẽ bị lỗi cú pháp do SQL Server hoàn toàn không hỗ trợ Trigger INSTEAD OF cho lệnh DROP  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Chuẩn T-SQL / SQL Server 2000: Trigger loại INSTEAD OF chỉ hỗ trợ cho các lệnh DML (`INSERT`, `UPDATE`, `DELETE`). SQL Server không hỗ trợ trigger INSTEAD OF trên câu lệnh `DROP TABLE`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ INSTEAD OF trigger có thể áp dụng cho mọi câu lệnh SQL kể cả DROP TABLE.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phạm vi INSTEAD OF Trigger: Chỉ dành cho DML (INSERT, UPDATE, DELETE)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục I.1.b & III.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Trigger INSTEAD OF chỉ dùng cho DML (INSERT/UPDATE/DELETE); Không dùng cho DROP TABLE!

---

### Câu 15 [db-c3-t2-015]

Điều gì xảy ra với các dòng dữ liệu đang vi phạm ràng buộc CHECK mới khi người quản trị thêm ràng buộc bằng tùy chọn WITH NOCHECK?

- **A.** Ràng buộc mới vẫn được tạo thành công, dữ liệu cũ vi phạm vẫn được giữ nguyên và chỉ kiểm tra trên dữ liệu mới  *(Đáp án đúng)*
- **B.** Hệ thống sẽ lập tức quét toàn bộ bảng và tự động xóa bỏ các dòng dữ liệu cũ đang vi phạm ràng buộc đó
- **C.** Hệ thống sẽ từ chối tạo ràng buộc CHECK cho đến khi toàn bộ các dòng vi phạm được người dùng sửa chữa thủ công
- **D.** Ràng buộc CHECK sẽ tự động cập nhật các giá trị vi phạm về giá trị mặc định của thuộc tính tương ứng

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục III.2.a: Tùy chọn `WITH NOCHECK` trong câu lệnh `ALTER TABLE ADD CONSTRAINT` chỉ thị cho hệ thống KHÔNG KIỂM TRA dữ liệu hiện có trong bảng. Ràng buộc vẫn được tạo và chỉ bắt đầu kiểm soát các thao tác INSERT/UPDATE trong tương lai.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ hệ thống sẽ xóa dữ liệu cũ hoặc bắt buộc dữ liệu cũ phải đúng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tùy chọn WITH NOCHECK: Bỏ qua dữ liệu cũ, chỉ áp dụng cho dữ liệu mới`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* WITH NOCHECK = Tha cho dữ liệu cũ, chỉ bắt lỗi dữ liệu mới thêm/sửa!

---

### Câu 16 [db-c3-t2-016]

Trong mệnh đề WHERE có nhiều toán tử logic kết hợp: A OR B AND C. Thứ tự ưu tiên thực thi ngầm định của SQL Server là gì?

- **A.** Toán tử OR có độ ưu tiên cao hơn AND, nên biểu thức tương đương với (A OR B) AND C (thực hiện A OR B trước)
- **B.** Toán tử AND có độ ưu tiên cao hơn OR, nên biểu thức tương đương với A OR (B AND C) (thực hiện B AND C trước)  *(Đáp án đúng)*
- **C.** Các toán tử có độ ưu tiên hoàn toàn ngang hàng nhau và được thực thi tuần tự từ trái sang phải: (A OR B) AND C
- **D.** Hệ thống sẽ phát sinh lỗi biên dịch và bắt buộc người lập trình phải dùng dấu ngoặc đơn để chỉ rõ thứ tự

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục IV.2.a: Thứ tự ưu tiên toán tử logic trong SQL chuẩn: `NOT` cao nhất ➔ `AND` tiếp theo ➔ `OR` thấp nhất. Do đó `A OR B AND C` luôn được đánh giá là `A OR (B AND C)`. Muốn gom OR trước bắt buộc phải dùng ngoặc: `(A OR B) AND C`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay lầm tưởng các toán tử đọc từ trái sang phải khiến logic lọc dữ liệu bị sai lệch hoàn toàn.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thứ tự ưu tiên logic: AND luôn ưu tiên cao hơn OR (A OR B AND C = A OR (B AND C))`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Độ ưu tiên logic: NOT > AND > OR! Không có ngoặc thì AND chạy trước OR!

---

### Câu 17 [db-c3-t2-017]

Cho bảng Luong (NV char(5), Tien int). Có 3 dòng: ('A', 100), ('B', 200), ('C', NULL). Kết quả của phép tính: AVG(Tien) và SUM(Tien)/COUNT(*) lần lượt là gì?

- **A.** Cả hai phép tính đều trả về kết quả là 100 vì hệ thống tự động coi giá trị NULL tương đương với số 0
- **B.** Cả hai phép tính đều trả về kết quả giống hệt nhau là 150 vì giá trị NULL hoàn toàn bị loại bỏ khỏi bảng
- **C.** AVG(Tien) trả về 150 (300/2), trong khi SUM(Tien)/COUNT(*) trả về 100 (300/3 do COUNT(*) tính cả dòng NULL)  *(Đáp án đúng)*
- **D.** Phép tính AVG(Tien) sẽ trả về giá trị NULL vì xuất hiện giá trị không xác định trong tập hợp dữ liệu

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục IV.3.a: `AVG(Tien)` tự động bỏ qua dòng NULL cả ở tử số và mẫu số: $(100 + 200) / 2 = 150$. Nhưng `SUM(Tien)/COUNT(*)` thì tử số bỏ qua NULL $(100 + 200 = 300)$, còn mẫu số `COUNT(*)` đếm cả 3 dòng: $300 / 3 = 100$! Đây là bẫy tính trung bình cộng cực kỳ phổ biến.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ AVG(cột) tương đương với SUM(cột)/COUNT(*), quên mất mẫu số của AVG bỏ qua NULL.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tính trung bình: AVG(cột) [mẫu số bỏ NULL] vs SUM(cột)/COUNT(*) [mẫu số tính cả NULL]`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* AVG(cột) = SUM(cột) / COUNT(cột) (Chia 2 dòng); SUM(cột)/COUNT(*) = Chia 3 dòng!

---

### Câu 18 [db-c3-t2-018]

Truy vấn sau đây gặp lỗi thực thi run-time nào: SELECT Hoten FROM NhanVien WHERE Luong = (SELECT Luong FROM NhanVien WHERE Phong = 5);?

- **A.** Lỗi do mệnh đề WHERE của câu truy vấn chính bắt buộc phải chứa tên cột nằm trong danh sách chọn của truy vấn con
- **B.** Lỗi cú pháp do toán tử so sánh bằng (=) không bao giờ được phép đứng trước một câu truy vấn con lồng nhau
- **C.** Lỗi do câu truy vấn con bắt buộc phải chứa từ khóa DISTINCT thì mới có thể so sánh được với thuộc tính Luong
- **D.** Lỗi Subquery trả về nhiều hơn 1 giá trị (Subquery returned more than 1 value) khi phòng số 5 có từ 2 nhân viên  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục IV.3.b: Toán tử so sánh đơn trị (`=`, `>`, `<`) yêu cầu câu truy vấn con bên phải phải là một câu truy vấn đơn trị (Scalar Subquery: trả về đúng 1 hàng và 1 cột). Nếu phòng 5 có từ 2 nhân viên trở lên, hệ thống sẽ phát sinh lỗi run-time ngay lập tức. Muốn đúng phải dùng toán tử tập hợp `IN` hoặc `= ANY`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay dùng toán tử `=` với Subquery mà không lường trước trường hợp bảng con trả về nhiều dòng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Scalar Subquery trả về nhiều dòng với toán tử đơn trị (=, >, <)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Toán tử đơn trị (=, >) chỉ nhận 1 giá trị duy nhất; Trả về >= 2 dòng ➔ DÙNG `IN` hoặc `= ANY`!

---

### Câu 19 [db-c3-t2-019]

Phép nối PHẢI (RIGHT OUTER JOIN) giữa bảng A và bảng B (A RIGHT JOIN B ON A.id = B.id) có ý nghĩa kỹ thuật chuẩn mực là gì?

- **A.** Giữ lại toàn bộ tất cả các bản ghi của bảng B bên phải; nếu không có bản ghi A khớp, các cột của A sẽ điền NULL  *(Đáp án đúng)*
- **B.** Giữ lại toàn bộ tất cả các bản ghi của bảng A bên trái; nếu không có bản ghi B khớp, các cột của B sẽ điền NULL
- **C.** Chỉ giữ lại những bản ghi mà cả hai bảng A và B đều có giá trị id hoàn toàn khớp nhau tại mệnh đề nối ON
- **D.** Tự động loại bỏ tất cả các bản ghi của bảng B nếu bản ghi đó không tìm thấy sự xuất hiện của khóa ngoại ở bảng A

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục IV.3.a: `A RIGHT JOIN B`: bảng B (bên phải) là bảng chính được giữ nguyên vẹn 100% số dòng. Với những dòng của B không có dòng nào của A thỏa mãn điều kiện `ON`, các cột tương ứng của bảng A trong kết quả sẽ mang giá trị NULL.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn hướng ưu tiên giữa LEFT JOIN (giữ bảng trái) và RIGHT JOIN (giữ bảng phải).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy bản chất RIGHT JOIN: Giữ toàn bộ bảng B (phải), bảng A không khớp thì điền NULL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* RIGHT JOIN = Bảng bên PHẢI là số 1 (giữ hết); Bảng bên trái thiếu thì điền NULL!

---

### Câu 20 [db-c3-t2-020]

Điều gì xảy ra khi ta thực hiện câu lệnh: SELECT COUNT(DISTINCT Phong) FROM NhanVien; khi bảng NhanVien có 5 dòng với giá trị cột Phong là: 1, 1, 2, NULL, NULL?

- **A.** Kết quả trả về chính xác là 3 (hàm tính cả hai phòng 1, 2 và tính thêm một nhóm độc lập cho giá trị rỗng NULL)
- **B.** Kết quả trả về chính xác là 2 (hàm COUNT(DISTINCT cột) tự động loại bỏ trùng lặp và bỏ qua toàn bộ giá trị NULL)  *(Đáp án đúng)*
- **C.** Kết quả trả về chính xác là 5 (hàm đếm toàn bộ tổng số dòng hiện có bất chấp từ khóa DISTINCT được chỉ định)
- **D.** Hệ thống sẽ phát sinh lỗi biên dịch do từ khóa DISTINCT không được phép kết hợp bên trong hàm kết hợp COUNT

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục IV.3.a: `COUNT(DISTINCT Phong)`: (1) Loại bỏ trùng lặp: các giá trị 1 gộp lại thành một, (2) Loại bỏ giá trị NULL: các dòng mang giá trị NULL bị hàm `COUNT(cột)` bỏ qua hoàn toàn. Do đó chỉ còn lại phòng 1 và phòng 2 ➔ Kết quả = 2.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhớ mang máng GROUP BY tính NULL là 1 nhóm nên tưởng COUNT(DISTINCT) cũng tính NULL là 1.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy kết hợp COUNT(DISTINCT cột): Loại trùng VÀ BỎ QUA NULL (kết quả = 2)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* COUNT(DISTINCT cột) vừa khử trùng, vừa LOẠI BỎ NULL!

---

### Câu 21 [db-c3-t2-021]

Cho câu lệnh: SELECT Phong, AVG(Luong) FROM NhanVien WHERE Luong > 2000 GROUP BY Phong HAVING COUNT(*) >= 3;. Trình tự lọc dữ liệu của câu lệnh diễn ra như thế nào?

- **A.** Lọc các phòng có từ 3 người trở lên trước, sau đó tính mức lương trung bình của toàn bộ nhân viên trong phòng đó
- **B.** Gom nhóm theo phòng trước, lọc phòng có từ 3 người trở lên (HAVING), sau đó mới lọc nhân viên có Luong > 2000 (WHERE)
- **C.** Lọc nhân viên Luong > 2000 trước (WHERE), gom nhóm theo phòng, rồi giữ phòng có từ 3 người thỏa mãn trở lên (HAVING)  *(Đáp án đúng)*
- **D.** Hệ thống thực hiện đồng thời hai mệnh đề WHERE và HAVING trong cùng một lượt quét dữ liệu duy nhất trên toàn bảng

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục IV.1 & IV.3.a: Theo thứ tự thực thi logic: (1) `WHERE Luong > 2000` lọc bỏ nhân viên lương $\le 2000$ trước; (2) Gom nhóm các nhân viên còn lại theo `Phong`; (3) `HAVING COUNT(*) >= 3` lọc bỏ các nhóm có ít hơn 3 người (sau khi đã lọc WHERE); (4) Tính `AVG(Luong)` trên các nhóm còn lại.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ COUNT(*) trong HAVING đếm tổng nhân viên ban đầu của phòng (thực tế nó chỉ đếm số nhân viên đã lọt qua WHERE).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phối hợp WHERE và HAVING: WHERE lọc dòng trước ➔ Nhóm lại ➔ HAVING lọc nhóm sau`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* WHERE lọc dòng trước ➔ Gom nhóm ➔ HAVING lọc nhóm (COUNT(*) trong HAVING chỉ tính những dòng thỏa WHERE)!

---

### Câu 22 [db-c3-t2-022]

Toán tử FULL OUTER JOIN giữa hai bảng KhachHang và DonHang có thể được mô phỏng tương đương bằng biểu thức toán học nào?

- **A.** Là phép kết nối tự nhiên (NATURAL JOIN) kết hợp với mệnh đề lọc loại bỏ các thuộc tính không tương thích
- **B.** Là phép giao giữa kết quả của LEFT OUTER JOIN và RIGHT OUTER JOIN (lấy phần chung bằng INTERSECT)
- **C.** Là tích Descartes (CROSS JOIN) giữa hai bảng sau đó loại bỏ các giá trị khóa ngoại mang trạng thái rỗng
- **D.** Là phép hợp giữa kết quả của LEFT OUTER JOIN và RIGHT OUTER JOIN (loại bỏ phần trùng lặp bằng UNION)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục IV.3.a: `FULL OUTER JOIN` giữ lại tất cả các dòng của cả hai bảng (khớp thì nối, không khớp thì điền NULL). Nó hoàn toàn tương đương với: `(A LEFT JOIN B) UNION (A RIGHT JOIN B)`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm với phép giao INTERSECT hoặc tích Descartes.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy bản chất FULL OUTER JOIN: Hợp (UNION) giữa LEFT JOIN và RIGHT JOIN`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* FULL OUTER JOIN = (LEFT JOIN) UNION (RIGHT JOIN)!

---

### Câu 23 [db-c3-t2-023]

Khi sử dụng toán tử so sánh `LIKE '[A-D]%'`, điều kiện này lọc ra các chuỗi ký tự thỏa mãn tiêu chí gì?

- **A.** Bắt đầu bằng một ký tự đơn bất kỳ nằm trong dải chữ cái từ A đến D (A, B, C hoặc D), theo sau là chuỗi tùy ý  *(Đáp án đúng)*
- **B.** Bắt đầu bằng một cụm gồm đúng 5 ký tự viết liền nhau là dấu mở ngoặc, chữ A, dấu gạch ngang, chữ D, dấu đóng ngoặc
- **C.** Chỉ chấp nhận các chuỗi có độ dài cố định đúng 2 ký tự với ký tự đầu là A và ký tự kết thúc bắt buộc là D
- **D.** Bắt đầu bằng bất kỳ ký tự nào ngoại trừ các chữ cái nằm trong đoạn từ A đến D theo bảng chữ cái tiếng Anh

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục IV.2.a: Trong T-SQL: cặp ngoặc vuông `[...]` đại diện cho một ký tự đơn bất kỳ nằm trong tập hợp hoặc dải ký tự chỉ định. Do đó `[A-D]%` khớp với chuỗi có ký tự đầu tiên là A, B, C hoặc D.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm dấu ngoặc vuông là ký tự hằng chuỗi thông thường thay vì ký tự dải đại diện.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy dải ký tự trong toán tử LIKE: `[A-D]` đại diện cho 1 ký tự từ A đến D`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* LIKE `[A-D]%` = Bắt đầu bằng 1 chữ cái từ A đến D (A, B, C, D)!

---

### Câu 24 [db-c3-t2-024]

Để tìm các chuỗi có chứa ký tự dấu gạch dưới thực sự `_` (thay vì coi nó là ký tự đại diện cho 1 ký tự), ta phải xử lý như thế nào?

- **A.** Sử dụng dấu gạch chéo ngược `\_` theo quy ước mặc định của các ngôn ngữ lập trình kịch bản thông dịch
- **B.** Đặt dấu gạch dưới trong cặp ngoặc vuông `[_]` hoặc sử dụng ký tự thoát thông qua mệnh đề ESCAPE trong truy vấn  *(Đáp án đúng)*
- **C.** Tự động tăng gấp đôi ký tự thành `__` để báo cho hệ thống SQL biết đây là ký tự thuần túy cần tìm kiếm
- **D.** Toán tử LIKE hoàn toàn không hỗ trợ tìm kiếm dấu gạch dưới, bắt buộc phải dùng hàm SUBSTRING để bóc tách

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục IV.2.a: Trong T-SQL, để tìm ký tự đại diện như `%` hay `_` dưới dạng ký tự thông thường: (1) Đặt trong ngoặc vuông: `[_]`, `[%]`; hoặc (2) Dùng mệnh đề ESCAPE: `WHERE col LIKE '%!_%' ESCAPE '!'`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay dùng `\_` (kiểu C/Java) nhưng SQL Server không tự nhận `\` là escape character nếu không có mệnh đề ESCAPE.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thoát ký tự đặc biệt trong LIKE: Đặt trong `[_]` hoặc dùng mệnh đề ESCAPE`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tìm ký tự đặc biệt `_` hoặc `%` ➔ Cách dễ nhất là bọc trong ngoặc vuông: `[_]` hoặc `[%]`!

---

### Câu 25 [db-c3-t2-025]

Điều gì xảy ra khi thực hiện câu lệnh: SELECT MaSV FROM SinhVien WHERE DiemTB >= ALL (SELECT DiemTB FROM SinhVien);?

- **A.** Truy vấn trả về toàn bộ tất cả sinh viên trong bảng do điều kiện so sánh luôn tự thỏa mãn với chính nó
- **B.** Hệ thống báo lỗi vì toán tử ALL chỉ có thể đi kèm với toán tử so sánh bằng (=) chứ không đi với lớn hơn bằng
- **C.** Truy vấn trả về mã của những sinh viên có điểm trung bình cao nhất bảng (lớn hơn hoặc bằng tất cả sinh viên)  *(Đáp án đúng)*
- **D.** Truy vấn sẽ trả về tập hợp rỗng nếu trong bảng có từ hai sinh viên trở lên đạt cùng mức điểm trung bình

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục IV.3.b: `>= ALL (<subquery>)` yêu cầu giá trị phải lớn hơn hoặc bằng MỌI giá trị trả về từ truy vấn con. Trong ngữ cảnh này, nó sẽ lọc ra các sinh viên có `DiemTB` đạt giá trị lớn nhất (MAX) của toàn bảng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn giữa toán tử ALL (với tất cả) và ANY (với bất kỳ ai).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy toán tử tập hợp ALL: `>= ALL` tương đương với việc tìm giá trị MAX`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* `>= ALL (tập hợp)` = Lớn hơn hoặc bằng TẤT CẢ ➔ Chính là tìm GIÁ TRỊ LỚN NHẤT (MAX)!

---

### Câu 26 [db-c3-t2-026]

Một câu lệnh SELECT có chứa mệnh đề GROUP BY nhưng KHÔNG CÓ bất kỳ hàm kết hợp nào trong danh sách chọn có tác dụng tương đương với thao tác nào?

- **A.** Tự động tạo ra một bảng tạm trong bộ nhớ và chuyển đổi toàn bộ dữ liệu của các cột thành kiểu chuỗi
- **B.** Hệ thống sẽ lập tức báo lỗi biên dịch do mệnh đề GROUP BY bắt buộc phải đi kèm với ít nhất một hàm kết hợp
- **C.** Tự động sắp xếp kết quả theo thứ tự tăng dần nhưng vẫn giữ nguyên tất cả các dòng dữ liệu trùng lặp ban đầu
- **D.** Có tác dụng tương đương hoàn toàn với việc sử dụng từ khóa DISTINCT trên các cột đó để loại bỏ trùng lặp  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục IV.3.a: Khi viết `SELECT CotA, CotB FROM Bang GROUP BY CotA, CotB;` mà không dùng hàm kết hợp nào, hệ thống sẽ gom các dòng có cùng (CotA, CotB) thành 1 dòng duy nhất. Thao tác này có kết quả hoàn toàn giống với `SELECT DISTINCT CotA, CotB FROM Bang;`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ GROUP BY bắt buộc phải có hàm kết hợp (SUM, COUNT...) mới hợp lệ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy GROUP BY không có hàm kết hợp: Tương đương với phép lọc loại bỏ trùng lặp DISTINCT`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* GROUP BY không có hàm kết hợp ➔ Tương đương với SELECT DISTINCT!

---

### Câu 27 [db-c3-t2-027]

Trong câu lệnh truy vấn lồng: SELECT * FROM NhanVien WHERE EXISTS (SELECT * FROM PhongBan WHERE PhongBan.MaPB = 99);. Nếu phòng 99 không tồn tại, kết quả trả về là gì?

- **A.** Truy vấn trả về 0 dòng dữ liệu (tập hợp rỗng) vì điều kiện EXISTS đánh giá kết quả là FALSE cho toàn bộ các dòng  *(Đáp án đúng)*
- **B.** Truy vấn trả về toàn bộ tất cả nhân viên trong bảng vì câu truy vấn con không liên kết thuộc tính với bảng ngoài
- **C.** Hệ thống báo lỗi cú pháp do câu truy vấn con bên trong mệnh đề EXISTS không chứa từ khóa kết nối JOIN hợp lệ
- **D.** Truy vấn sẽ trả về đúng một dòng đầu tiên của bảng NhanVien kèm theo cảnh báo không tìm thấy phòng ban 99

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục IV.3.b: Mệnh đề EXISTS kiểm tra xem Subquery có trả về dòng nào không. Vì phòng 99 không có, Subquery trả về 0 dòng ➔ EXISTS trả về FALSE. Điều kiện WHERE nhận FALSE ➔ Không có dòng nào của NhanVien được chọn ➔ Trả về 0 dòng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn cách đánh giá của EXISTS khi Subquery là câu truy vấn độc lập (không tương quan).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy EXISTS với Subquery độc lập: Trả về rỗng nếu Subquery không có dòng nào`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* EXISTS: Subquery có dòng ➔ TRUE (lấy dòng); Subquery rỗng ➔ FALSE (không lấy dòng nào)!

---

### Câu 28 [db-c3-t2-028]

Điều gì xảy ra khi thực hiện phép chia hai số nguyên trong T-SQL: SELECT 5 / 2;?

- **A.** Kết quả trả về là số thực 2.5 (hệ thống SQL tự động ép kiểu mở rộng để bảo toàn độ chính xác phép toán)
- **B.** Kết quả trả về là số nguyên 2 (phép chia nguyên tự động cắt bỏ phần thập phân theo kiểu của hai toán hạng)  *(Đáp án đúng)*
- **C.** Kết quả trả về là số nguyên 3 (hệ thống SQL tự động làm tròn lên số nguyên gần nhất theo quy tắc toán học)
- **D.** Hệ thống sẽ báo lỗi do phép toán chia giữa hai số nguyên bắt buộc phải có kết quả là một số nguyên chẵn

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục II.1.a & IV.2: Trong T-SQL, khi chia hai số nguyên (integer division), kết quả trả về luôn là số nguyên (cắt bỏ phần thập phân): `5 / 2 = 2`. Muốn ra 2.5, bắt buộc ít nhất 1 toán hạng phải là số thực: `5.0 / 2` hoặc `CAST(5 AS float) / 2`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh quen với máy tính bỏ túi hoặc Python 3 tưởng 5/2 tự động ra 2.5.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phép chia nguyên (Integer Division) trong T-SQL: 5 / 2 = 2 (không phải 2.5)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục II.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* T-SQL: Nguyên chia Nguyên ➔ RA NGUYÊN (5/2 = 2); Muốn số lẻ ➔ Viết 5.0 / 2!

---

### Câu 29 [db-c3-t2-029]

Mệnh đề HAVING có thể được sử dụng độc lập mà KHÔNG CÓ mệnh đề GROUP BY trong câu lệnh SELECT hay không?

- **A.** Chỉ được phép nếu bảng dữ liệu đó có ít hơn 100 bản ghi và không chứa bất kỳ giá trị rỗng NULL nào bên trong
- **B.** Tuyệt đối không được phép trong mọi trường hợp vì HAVING là mệnh đề con phụ thuộc hoàn toàn vào GROUP BY
- **C.** Hoàn toàn được phép, khi đó toàn bộ bảng dữ liệu sẽ được coi là MỘT NHÓM DUY NHẤT để đánh giá điều kiện HAVING  *(Đáp án đúng)*
- **D.** Được phép nhưng hệ thống sẽ tự động ép kiểu câu lệnh đó chuyển đổi thành mệnh đề WHERE trước khi chạy

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Chuẩn ANSI SQL & T-SQL: Mệnh đề `HAVING` hoàn toàn có thể đứng độc lập mà không cần `GROUP BY`. Khi đó, toàn bộ bảng được coi là một nhóm duy nhất, ví dụ: `SELECT AVG(Luong) FROM NhanVien HAVING COUNT(*) > 10;`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Rất nhiều tài liệu dạy "HAVING bắt buộc phải đi cùng GROUP BY", gây ra hiểu lầm kinh điển này.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy HAVING đứng độc lập không có GROUP BY: Hoàn toàn hợp lệ (coi cả bảng là 1 nhóm)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* HAVING không có GROUP BY ➔ VẪN HỢP LỆ (Hệ thống coi cả bảng là 1 nhóm duy nhất)!

---

### Câu 30 [db-c3-t2-030]

Khi thực hiện câu lệnh: SELECT TOP 10 PERCENT * FROM SinhVien ORDER BY DiemTB DESC; trong bảng có 25 sinh viên, hệ thống sẽ trả về bao nhiêu dòng?

- **A.** Chính xác là 0 dòng do số lượng bản ghi tính toán ra không phải là một số nguyên chẵn chia hết cho cơ số 10
- **B.** Chính xác là 2 dòng (10% của 25 là 2.5, hệ thống tự động cắt bỏ phần thập phân theo quy tắc phép chia nguyên)
- **C.** Chính xác là 10 dòng (hệ thống ưu tiên con số 10 đứng trước từ khóa PERCENT để lấy số lượng bản ghi cố định)
- **D.** Chính xác là 3 dòng (10% của 25 là 2.5, hệ thống SQL Server luôn tự động làm tròn LÊN số nguyên gần nhất)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục IV.2.a: Trong T-SQL: `TOP n PERCENT` sẽ tính $25 \times 10\% = 2.5$. SQL Server LUÔN LÀM TRÒN LÊN (Ceiling) đến số nguyên tiếp theo để đảm bảo không bị thiếu dữ liệu tỷ lệ ➔ Kết quả là 3 dòng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ nó cắt phần thập phân thành 2 hoặc làm tròn thông thường.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy làm tròn của TOP n PERCENT: Luôn làm tròn LÊN (Ceiling: 2.5 ➔ 3 dòng)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* TOP n PERCENT: Lẻ chữ số ➔ LUÔN LÀM TRÒN LÊN (2.5 ➔ 3 dòng)!

---

### Câu 31 [db-c3-t2-031]

Toán tử nào sau đây trong SQL tương đương với toán tử EXISTS nhưng mang ý nghĩa kiểm tra tập hợp sinh ra KHÔNG CÓ BẤT KỲ DÒNG NÀO?

- **A.** Toán tử NOT EXISTS (trả về TRUE khi câu truy vấn con trả về tập hợp rỗng gồm đúng 0 dòng dữ liệu)  *(Đáp án đúng)*
- **B.** Toán tử NOT IN (kiểm tra phần tử không xuất hiện trong danh sách và tự động bỏ qua các trường rỗng)
- **C.** Toán tử IS NULL (kiểm tra biến con trỏ bảng có đang trỏ vào một vùng nhớ chưa được cấp phát hay không)
- **D.** Toán tử EXCEPT (thực hiện phép trừ tập hợp giữa hai bảng dữ liệu có cùng số lượng thuộc tính tương thích)

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục IV.3.b: `NOT EXISTS (<subquery>)` trả về TRUE khi và chỉ khi câu truy vấn con trả về tập rỗng (0 dòng). Nó thường được dùng trong các bài toán phủ định toàn bộ (Anti-Join).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm giữa NOT EXISTS (kiểm tra số dòng = 0) với NOT IN hay IS NULL.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy cơ chế toán tử NOT EXISTS: TRUE khi tập con trả về 0 dòng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* NOT EXISTS = TRUE khi câu truy vấn con KHÔNG CÓ DÒNG NÀO (0 dòng)!

---

### Câu 32 [db-c3-t2-032]

Điều gì xảy ra khi ta gom nhóm theo nhiều thuộc tính: GROUP BY Phong, ChucVu?

- **A.** Hệ thống sẽ gom nhóm theo cột Phong trước, sau đó xóa bỏ cột ChucVu ra khỏi cấu trúc của bảng dữ liệu
- **B.** Hệ thống sẽ gom các dòng có CÙNG CẶP GIÁ TRỊ (Phong, ChucVu) vào chung một nhóm duy nhất để tính toán hàm  *(Đáp án đúng)*
- **C.** Hệ thống sẽ tạo ra hai bảng kết quả độc lập: một bảng gom theo Phong và một bảng khác gom theo ChucVu
- **D.** Hệ thống sẽ báo lỗi cú pháp vì mệnh đề GROUP BY trong T-SQL tiêu chuẩn chỉ chấp nhận duy nhất một cột gom nhóm

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục IV.3.a: Khi gom nhóm trên nhiều cột `GROUP BY A, B`: các dòng có cùng giá trị ở cả cột A và cột B sẽ thuộc về cùng một nhóm con. Cấp độ chi tiết của phép gom nhóm được xác định bởi tổ hợp các cột đó.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ GROUP BY chỉ nhóm trên 1 cột hoặc tạo 2 bảng riêng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy gom nhóm đa thuộc tính: Nhóm theo tổ hợp giá trị (A, B)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* GROUP BY A, B ➔ Nhóm theo TỔ HỢP CẶP GIÁ TRỊ (A, B)!

---

### Câu 33 [db-c3-t2-033]

Để lọc các hóa đơn được lập trong tháng 5 năm 2024, biểu thức nào sau đây tận dụng tối đa Chỉ mục (Index SARGable) trên cột NgayLap?

- **A.** WHERE CONVERT(varchar(7), NgayLap, 120) = '2024-05' (bọc hàm CONVERT làm hệ thống phải quét toàn bộ bảng dữ liệu)
- **B.** WHERE MONTH(NgayLap) = 5 AND YEAR(NgayLap) = 2024 (bọc hàm MONTH/YEAR khiến chỉ mục bị vô hiệu hóa hoàn toàn)
- **C.** WHERE NgayLap >= '2024-05-01' AND NgayLap < '2024-06-01' (tìm kiếm theo dải không bọc hàm trên cột chỉ mục)  *(Đáp án đúng)*
- **D.** WHERE NgayLap LIKE '2024-05%' (ép kiểu chuỗi ngầm định khiến hệ thống không thể sử dụng chỉ mục phân cụm)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Chuẩn tối ưu hóa truy vấn SQL (Query Optimization): Khi bọc hàm trên cột có chỉ mục (như `MONTH(NgayLap) = 5`), hệ thống không thể sử dụng Index Seek mà phải quét toàn bộ bảng (Index Scan / Table Scan - Non-SARGable). Cách viết dùng dải giá trị `>= '2024-05-01' AND < '2024-06-01'` giữ nguyên cột giúp tận dụng tối đa Index (SARGable).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Lập trình viên thường viết `MONTH(Ngay) = 5 AND YEAR(Ngay) = 2024` cho nhanh mà không biết nó phá hủy hiệu năng chỉ mục.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy viết điều kiện SARGable: Bọc hàm trên cột làm vô hiệu hóa Index Seek`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a & Section 0
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tối ưu Index ➔ KHÔNG BỌC HÀM LÊN CỘT; Dùng dải `>= NgàyDau AND < NgàyCuoi`!

---

### Câu 34 [db-c3-t2-034]

Trong câu truy vấn có sử dụng mệnh đề HAVING, nếu điều kiện lọc không chứa bất kỳ hàm kết hợp nào (ví dụ: HAVING Phong = 5), điều này có hợp lệ không?

- **A.** Hệ thống sẽ tự động gán giá trị mặc định cho cột Phong và trả về toàn bộ dữ liệu của tất cả các phòng ban
- **B.** Tuyệt đối không hợp lệ vì mệnh đề HAVING bắt buộc phải chứa ít nhất một hàm kết hợp như COUNT, SUM hoặc AVG
- **C.** Hệ thống sẽ tự động hủy bỏ mệnh đề GROUP BY nếu phát hiện trong HAVING không có chứa bất kỳ hàm kết hợp nào
- **D.** Hoàn toàn hợp lệ theo cú pháp nếu cột Phong có mặt trong GROUP BY, nhưng về mặt hiệu năng nên chuyển vào WHERE  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Chuẩn ANSI SQL & T-SQL: Điều kiện `HAVING Phong = 5` là hoàn toàn hợp lệ về cú pháp (miễn là Phong có trong GROUP BY). Tuy nhiên, về mặt tối ưu, lọc từng dòng bằng `WHERE Phong = 5` tốt hơn nhiều vì nó loại bỏ dòng trước khi gom nhóm, giảm tải bộ nhớ đệm.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ HAVING không có hàm kết hợp là bị lỗi cú pháp ngay.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy điều kiện trong HAVING: Cho phép lọc cột gom nhóm thông thường nhưng kém tối ưu hơn WHERE`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* HAVING lọc cột thường (không hàm) ➔ HỢP LỆ nhưng NÊN ĐƯA VÀO WHERE để chạy nhanh hơn!

---

### Câu 35 [db-c3-t2-035]

Khi thực hiện câu lệnh: SELECT MaSV FROM SinhVien WHERE DiemTB > SOME (SELECT DiemTB FROM SinhVien WHERE Lop = 'CTK31');. Từ khóa SOME có ý nghĩa tương đương với từ khóa nào?

- **A.** Hoàn toàn tương đương 100% với từ khóa ANY (chỉ cần lớn hơn ít nhất một sinh viên bất kỳ trong lớp CTK31)  *(Đáp án đúng)*
- **B.** Hoàn toàn tương đương với từ khóa ALL (bắt buộc phải lớn hơn toàn bộ tất cả các sinh viên của lớp CTK31)
- **C.** Hoàn toàn tương đương với từ khóa IN (bắt buộc phải có điểm số trùng khớp với một sinh viên trong lớp CTK31)
- **D.** Hoàn toàn tương đương với từ khóa EXISTS (chỉ kiểm tra xem lớp CTK31 có sinh viên nào đang theo học hay không)

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục IV.3.b: Trong chuẩn ANSI SQL và T-SQL, hai từ khóa `SOME` và `ANY` là hoàn toàn đồng nghĩa và có thể thay thế lẫn nhau 100%. `> SOME` hay `> ANY` đều có nghĩa là lớn hơn ít nhất một giá trị trong tập hợp (lớn hơn giá trị nhỏ nhất MIN).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người học ít thấy từ khóa SOME nên nghĩ nó có cơ chế đặc biệt khác với ANY.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy từ khóa SOME vs ANY: Đồng nghĩa 100% trong chuẩn SQL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* SOME và ANY là MỘT (đồng nghĩa 100% trong SQL)!

---

### Câu 36 [db-c3-t2-036]

Khi tạo một Khung nhìn (View) nhằm mục đích bảo mật dữ liệu nhân sự, giải pháp thiết kế nào sau đây là CHÍNH XÁC NHẤT?

- **A.** Tạo View chứa toàn bộ các cột sau đó dùng lệnh ALTER TABLE để khóa các cột nhạy cảm không cho người dùng đọc
- **B.** Chỉ chọn các cột công khai (MaNV, TenNV, Phong) vào View và loại bỏ các cột nhạy cảm (Luong, MatKhau, Thuong)  *(Đáp án đúng)*
- **C.** Đặt mật khẩu truy cập trực tiếp vào định nghĩa của View thông qua mệnh đề WITH PASSWORD PROTECTION của T-SQL
- **D.** Chuyển đổi toàn bộ dữ liệu của cột nhạy cảm thành các chuỗi ký tự ngẫu nhiên trước khi đưa vào trong View

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục V.1.a: Cơ chế bảo mật bằng Khung nhìn (View): Người quản trị tạo View chỉ chiếu các thuộc tính được phép công khai (MaNV, TenNV, PhongBan), giấu đi các cột nhạy cảm (Luong, Thuong). Sau đó cấp quyền SELECT trên View cho người dùng và thu hồi quyền trên bảng gốc.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ View có tính năng đặt mật khẩu riêng biệt như file nén.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy cơ chế bảo mật của View: Chiếu lọc bỏ cột nhạy cảm và phân quyền trên View`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục V.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Bảo mật bằng View = Chỉ SELECT các cột không nhạy cảm ➔ Cấp quyền trên View thay vì bảng gốc!

---

### Câu 37 [db-c3-t2-037]

Tùy chọn WITH ENCRYPTION khi thực hiện câu lệnh CREATE VIEW mang lại tác dụng kỹ thuật gì?

- **A.** Ngăn chặn mọi người dùng không có quyền quản trị tối cao (SA) thực hiện truy vấn trích xuất dữ liệu từ View đó
- **B.** Tự động mã hóa toàn bộ dữ liệu vật lý của các bảng cơ sở gốc bằng thuật toán mã hóa khóa công khai RSA 2048-bit
- **C.** Mã hóa văn bản định nghĩa câu lệnh SELECT của View trong bảng hệ thống syscomments để chống xem trộm mã nguồn  *(Đáp án đúng)*
- **D.** Tự động nén dung lượng dữ liệu của View trên đĩa cứng để giảm thiểu tối đa tài nguyên lưu trữ của máy chủ

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục V.1.a & Section 0: `WITH ENCRYPTION` mã hóa đoạn mã nguồn định nghĩa câu lệnh tạo View lưu trong bảng hệ thống `syscomments`. Người dùng (kể cả SA) không thể dùng `sp_helptext` để xem mã nguồn câu truy vấn của View. Nó KHÔNG mã hóa dữ liệu trong bảng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm mã hóa mã nguồn View (Definition) với việc mã hóa dữ liệu vật lý (Data Encryption).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy WITH ENCRYPTION của View: Mã hóa text định nghĩa View trong syscomments`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục V.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* WITH ENCRYPTION = Giấu mã nguồn câu lệnh tạo View, KHÔNG mã hóa dữ liệu trong bảng!

---

### Câu 38 [db-c3-t2-038]

Cho View: CREATE VIEW V_LuongCao AS SELECT * FROM NhanVien WHERE Luong > 5000 WITH CHECK OPTION;. Điều gì xảy ra khi chạy lệnh: UPDATE V_LuongCao SET Luong = 3000 WHERE MaNV = 'NV01';?

- **A.** Lệnh cập nhật thành công nhưng hệ thống tự động gỡ bỏ thuộc tính WITH CHECK OPTION khỏi khung nhìn đó
- **B.** Lệnh cập nhật thành công và bản ghi NV01 lập tức biến mất khỏi kết quả hiển thị của khung nhìn V_LuongCao
- **C.** Hệ thống tự động điều chỉnh mức lương lên 5001 để thỏa mãn điều kiện tồn tại trong khung nhìn V_LuongCao
- **D.** Báo lỗi và từ chối vì lương mới 3000 vi phạm điều kiện WHERE Luong > 5000 của mệnh đề WITH CHECK OPTION  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục V.1.b: Mệnh đề `WITH CHECK OPTION` kiểm tra mọi câu lệnh INSERT và UPDATE qua View. Khi sửa `Luong = 3000`, dòng này không còn thỏa mãn `Luong > 5000` (sẽ biến mất khỏi View), do đó SQL Server lập tức chặn lại và báo lỗi vi phạm CHECK OPTION.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nếu không có WITH CHECK OPTION, lệnh UPDATE này sẽ chạy được và dòng NV01 biến mất khỏi View. Thí sinh thường quên tác dụng chặn của WITH CHECK OPTION.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy chặn UPDATE của WITH CHECK OPTION khi dữ liệu mới vi phạm điều kiện WHERE của View`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục V.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* WITH CHECK OPTION: Sửa giá trị làm mất dòng khỏi View ➔ BỊ CHẶN LỖI NGAY LẬP TỨC!

---

### Câu 39 [db-c3-t2-039]

Khung nhìn (View) có thể được định nghĩa dựa trên một hoặc nhiều Khung nhìn khác (Nested Views) đã có từ trước hay không?

- **A.** Hoàn toàn được phép định nghĩa View lồng nhau, nhưng không được phép tham chiếu vòng tròn đệ quy vô tận  *(Đáp án đúng)*
- **B.** Tuyệt đối không được phép vì chuẩn ngôn ngữ SQL quy định View bắt buộc phải được tạo trực tiếp từ bảng vật lý
- **C.** Chỉ được phép lồng tối đa 2 cấp khung nhìn, từ cấp thứ 3 trở đi hệ thống sẽ tự động phát sinh lỗi bộ nhớ
- **D.** Được phép lồng nhau nhưng bắt buộc tất cả các View tham gia đều phải có mệnh đề WITH SCHEMABINDING đi kèm

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục V.1.a: View hoàn toàn có thể được tạo từ các View khác đã tồn tại từ trước (Nested Views), miễn là không tạo ra sự phụ thuộc vòng tròn (Circular Dependency) giữa các View.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ View chỉ được tạo từ Table chứ không được tạo từ View khác.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy View lồng View (Nested Views): Hoàn toàn hợp lệ theo chuẩn SQL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục V.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* View hoàn toàn có thể SELECT từ một View khác (miễn không tham chiếu vòng tròn)!

---

### Câu 40 [db-c3-t2-040]

Trong CSDL QLBanHang, để tìm khách hàng có TỔNG SỐ TIỀN MUA HÀNG LỚN NHẤT, giải pháp câu lệnh T-SQL chuẩn mực và tối ưu nhất là gì?

- **A.** SELECT MaKH, MAX(Trigia) AS TongTien FROM Hoadon GROUP BY MaKH ORDER BY TongTien DESC;
- **B.** SELECT TOP 1 MaKH, SUM(Trigia) AS TongTien FROM Hoadon GROUP BY MaKH ORDER BY TongTien DESC;  *(Đáp án đúng)*
- **C.** SELECT MaKH, SUM(Trigia) FROM Hoadon WHERE Trigia = (SELECT MAX(Trigia) FROM Hoadon);
- **D.** SELECT MaKH, SUM(Trigia) FROM Hoadon HAVING SUM(Trigia) >= ALL (SELECT Trigia FROM Hoadon);

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục VI.1.a & Section 0: Tính tổng tiền mua của mỗi khách hàng bằng `GROUP BY MaKH` kết hợp `SUM(Trigia)`, sắp xếp giảm dần `ORDER BY TongTien DESC` và lấy người đứng đầu bằng `TOP 1`. Dùng MAX(Trigia) là tìm hóa đơn lớn nhất chứ không phải tổng tiền mua.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm giữa "hóa đơn lớn nhất" (MAX Trigia) và "tổng tiền mua lớn nhất" (MAX của SUM Trigia).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tìm đối tượng lớn nhất theo tổng: GROUP BY + SUM + ORDER BY DESC + TOP 1`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tổng tiền lớn nhất ➔ GROUP BY gom nhóm ➔ SUM tính tổng ➔ ORDER BY DESC ➔ TOP 1!

---

### Câu 41 [db-c3-t2-041]

Trong CSDL QLNV, để tìm các nhân viên KHÔNG CÓ NGƯỜI QUẢN LÝ (tức là Sếp cao nhất trong công ty), câu truy vấn chuẩn xác là gì?

- **A.** SELECT * FROM NhanVien WHERE MaNQL = ''; (dùng sai toán tử so sánh với chuỗi ký tự rỗng)
- **B.** SELECT * FROM NhanVien WHERE MaNQL = NULL; (dùng sai toán tử so sánh bằng với giá trị rỗng NULL)
- **C.** SELECT * FROM NhanVien WHERE MaNQL IS NULL; (kiểm tra trạng thái chưa được gán người quản lý)  *(Đáp án đúng)*
- **D.** SELECT * FROM NhanVien WHERE MaNQL = 0; (dùng sai quy ước gán số 0 cho người quản lý tối cao)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục IV.2.a & IV.3.a: Người không có người quản lý thì cột khóa ngoại `MaNQL` mang giá trị NULL. Để lọc giá trị NULL trong SQL, cú pháp DUY NHẤT đúng là `WHERE MaNQL IS NULL`. Mọi cách viết `= NULL`, `= ''` hay `= 0` đều sai.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn `= NULL` hoặc `= 0` theo thói quen lập trình hướng đối tượng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tìm kiếm giá trị rỗng trong khóa ngoại đệ quy: Bắt buộc dùng IS NULL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Không có người quản lý ➔ Cột MaNQL mang giá trị NULL ➔ Dùng `WHERE MaNQL IS NULL`!

---

### Câu 42 [db-c3-t2-042]

Trong CSDL QLBanHang, câu truy vấn tính tổng doanh thu của từng hóa đơn: SELECT SoHD, SUM(Soluong * Dongia) AS TongTien FROM Chitiet_HD GROUP BY SoHD;. Thao tác `Soluong * Dongia` diễn ra ở giai đoạn nào?

- **A.** Hệ thống sẽ báo lỗi biên dịch vì bên trong hàm kết hợp SUM không được phép chứa phép toán nhân số học
- **B.** Hàm SUM cộng dồn toàn bộ Soluong trước, sau đó nhân với tổng toàn bộ Dongia của nhóm hóa đơn tương ứng
- **C.** Được tính toán độc lập sau khi toàn bộ câu lệnh SELECT đã hoàn tất việc sắp xếp dữ liệu ở bước cuối cùng
- **D.** Được tính toán trên từng dòng chi tiết trước, sau đó hàm SUM mới cộng dồn các kết quả đó lại theo nhóm SoHD  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục IV.3.a & VI.1.a: Biểu thức số học `Soluong * Dongia` là biểu thức tính toán mức dòng (Row-level expression). Hệ thống nhân số lượng với đơn giá cho từng dòng chi tiết, sau đó hàm kết hợp `SUM` mới cộng dồn các tích số đó lại cho từng nhóm SoHD.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm tưởng SUM(A * B) sẽ tính SUM(A) * SUM(B) (về mặt toán học hai phép tính này hoàn toàn khác nhau).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tính toán biểu thức bên trong hàm kết hợp: Tính mức dòng trước ➔ Cộng dồn sau`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a & VI.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* SUM(Soluong * Dongia) = Nhân từng dòng thành tiền trước, rồi cộng dồn lại!

---

### Câu 43 [db-c3-t2-043]

Trong CSDL Công Ty, để tìm danh sách các phòng ban CHƯA ĐƯỢC PHÂN CÔNG BẤT KỲ ĐỀ ÁN NÀO, giải pháp dùng NOT IN chuẩn xác và an toàn nhất là gì?

- **A.** SELECT MaPB FROM PhongBan WHERE MaPB NOT IN (SELECT MaPB FROM DeAn WHERE MaPB IS NOT NULL); (an toàn)  *(Đáp án đúng)*
- **B.** SELECT MaPB FROM PhongBan WHERE MaPB NOT IN (SELECT MaPB FROM DeAn); (bị lỗi trắng kết quả nếu có NULL)
- **C.** SELECT MaPB FROM PhongBan WHERE MaPB NOT IN (SELECT DISTINCT MaPB FROM DeAn WHERE MaPB IS NOT NULL);
- **D.** SELECT MaPB FROM PhongBan WHERE MaPB NOT IN (SELECT 0 FROM DeAn WHERE PhongBan.MaPB = DeAn.MaPB); (sai)

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục IV.3.b & VI.1.b: Để dùng `NOT IN` một cách an toàn tuyệt đối, trong câu truy vấn con BẮT BUỘC PHẢI LOẠI BỎ NULL bằng điều kiện `WHERE MaPB IS NOT NULL`. Nếu bảng DeAn có dù chỉ 1 dòng mang MaPB là NULL, câu truy vấn ở phương án B sẽ trả về rỗng ngay lập tức!
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Hầu hết mọi người viết theo phương án B và bị lỗi trắng kết quả khi bảng con có chứa NULL.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy an toàn cho NOT IN: Bắt buộc lọc `WHERE Cot IS NOT NULL` ở Subquery`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b & VI.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Muốn dùng NOT IN an toàn ➔ Subquery PHẢI CÓ `WHERE Cot IS NOT NULL`!

---

### Câu 44 [db-c3-t2-044]

Khi sử dụng toán tử LIKE để tìm các nhân viên có họ tên chứa ký tự gạch dưới: WHERE Hoten LIKE '%\_%' ESCAPE '\'. Ký tự gạch chéo ngược `\` đóng vai trò gì?

- **A.** Là một ký tự đại diện cho một khoảng trắng phân cách giữa họ và tên lót của từng người nhân viên
- **B.** Là ký tự thoát (Escape character) chỉ định rằng ký tự _ đứng liền sau nó là ký tự tìm kiếm thực tế  *(Đáp án đúng)*
- **C.** Là toán tử chia số học phân tách giữa phần đầu và phần đuôi kết thúc của chuỗi ký tự tìm kiếm
- **D.** Là ký tự bắt buộc để kích hoạt chế độ tìm kiếm theo biểu thức chính quy RegEx trong SQL Server

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục IV.2.a: Mệnh đề `ESCAPE '\';` định nghĩa ký tự `\` làm ký tự thoát. Bất kỳ ký tự đại diện nào (`_` hoặc `%`) đứng ngay sau ký tự thoát sẽ mất đi tính đại diện và được xem là ký tự ký tự thông thường.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh không hiểu cơ chế của mệnh đề ESCAPE trong truy vấn chuỗi T-SQL.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy mệnh đề ESCAPE trong toán tử LIKE: Định nghĩa ký tự thoát`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mệnh đề ESCAPE: Ký tự đứng sau ký tự thoát sẽ là KÝ TỰ THỰC TẾ, không còn là ký tự đại diện!

---

### Câu 45 [db-c3-t2-045]

Trong CSDL QLBanHang, khi xóa một khách hàng trong bảng Khach: DELETE FROM Khach WHERE MaKH = 'KH01'; nếu khách hàng này đã có hóa đơn trong bảng Hoadon và FK cài đặt ON DELETE NO ACTION thì điều gì xảy ra?

- **A.** Hệ thống tự động gán mã khách hàng trong các hóa đơn liên quan thành giá trị rỗng NULL
- **B.** Hệ thống tự động xóa khách hàng KH01 đồng thời tự động xóa luôn các hóa đơn của khách hàng đó
- **C.** Hệ thống từ chối xóa và báo lỗi vi phạm ràng buộc toàn vẹn tham chiếu (FK constraint violation)  *(Đáp án đúng)*
- **D.** Khách hàng KH01 vẫn bị xóa và các hóa đơn của khách hàng đó chuyển thành hóa đơn tự do vô chủ

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục III.2.b & IV.1: Tùy chọn mặc định của khóa ngoại là `ON DELETE NO ACTION`. Hệ thống sẽ kiểm tra và chặn ngay lập tức thao tác xóa bản ghi ở bảng cha nếu đang có bản ghi con tham chiếu đến nó.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm NO ACTION (chặn xóa) với CASCADE (xóa lan truyền).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy hành vi NO ACTION của khóa ngoại: Chặn đứng thao tác xóa vi phạm tham chiếu`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.2.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa ngoại NO ACTION (mặc định) ➔ Bảng con còn dữ liệu thì CẤM XÓA BẢNG CHA!

---

### Câu 46 [db-c3-t2-046]

Trong CSDL QLBanHang, bài toán "Cho biết thông tin những khách hàng có cùng ngày sinh" (Bài tập 7). Nếu trong CSDL có đúng 3 khách hàng KH01, KH02, KH03 có cùng ngày sinh nhật, câu truy vấn dùng điều kiện `K1.MaKH < K2.MaKH` sẽ trả về bao nhiêu dòng kết quả?

- **A.** Chính xác là 1 dòng kết quả duy nhất đại diện cho nhóm những người có ngày sinh trùng khớp với nhau
- **B.** Chính xác là 6 dòng kết quả (do sinh ra đầy đủ tất cả các cặp hoán vị đối xứng qua lại giữa ba khách hàng)
- **C.** Chính xác là 9 dòng kết quả (phép tích Descartes kết hợp từng người với tất cả mọi người bao gồm cả chính họ)
- **D.** Chính xác là 3 dòng kết quả (gồm đúng 3 cặp tổ hợp chập 2 của 3 phần tử: (KH01,KH02), (KH01,KH03), (KH02,KH03))  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục VI.1.b (Bài tập 7): Số cặp đôi khác nhau được chọn từ 3 người là tổ hợp chập 2 của 3: $C_3^2 = \frac{3 \times 2}{2} = 3$ cặp: (KH01, KH02), (KH01, KH03), (KH02, KH03). Điều kiện `<` đảm bảo mỗi cặp chỉ xuất hiện đúng 1 lần duy nhất.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm với số chỉnh hợp (6 dòng) nếu dùng `<>` hoặc tích Descartes (9 dòng).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy số lượng dòng Self-Join khử trùng lặp: Tổ hợp chập 2 (C_n^2)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục VI.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* 3 người cùng ngày sinh: Dùng `<` ra đúng $C_3^2 = 3$ cặp; Dùng `<>` ra $3 \times 2 = 6$ dòng!

---

### Câu 47 [db-c3-t2-047]

Trong câu lệnh truy vấn: SELECT MaPB, TenPB INTO PhongBan_Backup FROM PhongBan;. Bản chất kỹ thuật của câu lệnh SELECT INTO là gì?

- **A.** Tự động tạo ra một bảng mới có tên PhongBan_Backup và sao chép cấu trúc cùng dữ liệu từ bảng nguồn sang  *(Đáp án đúng)*
- **B.** Chèn dữ liệu vào một bảng PhongBan_Backup đã được tạo sẵn từ trước trong cơ sở dữ liệu hiện hành
- **C.** Tạo ra một Khung nhìn (View) tạm thời có tên là PhongBan_Backup để phục vụ sao lưu dữ liệu nhanh chóng
- **D.** Xuất toàn bộ dữ liệu của hai cột chỉ định ra một tệp tin văn bản thuần túy định dạng CSV trên ổ cứng

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục III.2.a: Lệnh `SELECT ... INTO <BangMoi> FROM <BangNguon>` là lệnh DDL/DML kết hợp của T-SQL: tự động tạo bảng mới và nạp dữ liệu từ câu truy vấn sang. Bảng đích `PhongBan_Backup` PHẢI CHƯA TỒN TẠI (nếu đã tồn tại sẽ bị báo lỗi).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn giữa `SELECT INTO` (bảng đích chưa có) và `INSERT INTO SELECT` (bảng đích đã có sẵn).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy SELECT INTO vs INSERT INTO SELECT: SELECT INTO tự tạo bảng mới`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục III.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* SELECT INTO = Tự tạo bảng mới rồi nạp dữ liệu; INSERT INTO SELECT = Nạp vào bảng ĐÃ CÓ!

---

### Câu 48 [db-c3-t2-048]

Trong CSDL QLBanHang, bài toán "Cho biết tổng số lượng bán được của mỗi mặt hàng" (Bài tập 5). Nếu có một mặt hàng chưa từng được bán lần nào, làm sao để mặt hàng đó vẫn xuất hiện trong kết quả với tổng số lượng là 0?

- **A.** Dùng Hanghoa INNER JOIN Chitiet_HD và sử dụng mệnh đề HAVING để lọc các mặt hàng có tổng số lượng bằng 0
- **B.** Dùng Hanghoa LEFT JOIN Chitiet_HD, gom nhóm theo Hanghoa, và dùng hàm ISNULL(SUM(Chitiet_HD.Soluong), 0)  *(Đáp án đúng)*
- **C.** Chỉ cần dùng phép nối thông thường và hệ thống SQL sẽ tự động chuyển các giá trị NULL thành số 0
- **D.** Bắt buộc phải chèn một bản ghi giả có số lượng bằng 0 vào bảng Chitiet_HD trước khi thực hiện truy vấn

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục VI.1.a (Bài tập 5): Để lấy cả mặt hàng chưa từng bán, bắt buộc phải dùng `Hanghoa LEFT JOIN Chitiet_HD`. Với hàng chưa bán, `SUM(Chitiet_HD.Soluong)` sẽ trả về NULL. Ta dùng hàm `ISNULL(SUM(...), 0)` (hoặc `COALESCE`) để hiển thị số 0 thay vì NULL.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh dùng INNER JOIN (bị mất mặt hàng chưa bán) hoặc quên hàm ISNULL (kết quả hiển thị NULL thay vì 0).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy hiển thị số 0 cho nhóm chưa có dữ liệu: LEFT JOIN + ISNULL(SUM(...), 0)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục VI.1.a & Section 0
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Lấy cả mặt hàng chưa bán với số lượng = 0 ➔ LEFT JOIN + ISNULL(SUM(Soluong), 0)!

---

### Câu 49 [db-c3-t2-049]

Điều kiện nào sau đây đảm bảo kết quả truy vấn SELECT DISTINCT luôn trả về danh sách các bản ghi duy nhất không trùng lặp?

- **A.** Hệ thống tự động bổ sung một cột số thứ tự ẩn vào kết quả để đảm bảo mọi dòng đều có tính duy nhất
- **B.** Chỉ cần giá trị ở cột khóa chính của bảng cơ sở không trùng nhau là kết quả sẽ phân biệt rõ ràng
- **C.** Toàn bộ các giá trị cột trong danh sách SELECT của hai dòng bất kỳ không được phép giống hệt nhau  *(Đáp án đúng)*
- **D.** Mọi bảng tham gia vào truy vấn bắt buộc phải có ràng buộc toàn vẹn khóa chính PRIMARY KEY xác thực

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục IV.2.a: Từ khóa DISTINCT so sánh trên TOÀN BỘ các thuộc tính có mặt trong danh sách chiếu SELECT. Hai dòng được coi là trùng lặp khi và chỉ khi tất cả các giá trị cột tương ứng của chúng hoàn toàn bằng nhau.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ DISTINCT phụ thuộc vào khóa chính của bảng gốc.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tiêu chí so sánh của DISTINCT: So sánh toàn bộ các cột trong danh sách SELECT`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* DISTINCT chỉ xét các cột nằm trong mệnh đề SELECT, không phụ thuộc vào khóa chính bảng gốc!

---

### Câu 50 [db-c3-t2-050]

Tổng kết toàn diện Chương III: Trong kiến trúc cỗ máy cơ sở dữ liệu quan hệ RDBMS, ngôn ngữ T-SQL đóng vai trò bản chất gì?

- **A.** Là giao thức mạng truyền thông chuyên dụng dùng để định tuyến các gói tin dữ liệu giữa các máy chủ SQL
- **B.** Là ngôn ngữ hệ thống cấp thấp biên dịch trực tiếp ra mã máy nhị phân để điều khiển trực tiếp đĩa từ
- **C.** Là thư viện đồ họa giao diện người dùng độc quyền giúp thiết kế các biểu mẫu nhập liệu và báo cáo bảng
- **D.** Là ngôn ngữ chuẩn kết hợp giữa định nghĩa cấu trúc (DDL), thao tác dữ liệu (DML) và lập trình điều khiển  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình Chương 3, Mục I.1 & VII.1: T-SQL là ngôn ngữ truy vấn có cấu trúc mở rộng, là phương tiện toàn diện duy nhất cho phép: định nghĩa CSDL và bảng (DDL), truy vấn và cập nhật dữ liệu (DML/DQL), đồng thời bổ sung các cấu trúc lập trình thủ tục (IF, WHILE, Biến, Hàm, Trigger) để xây dựng ứng dụng CSDL hoàn chỉnh.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhìn nhận SQL một cách phiến diện (chỉ nghĩ nó là ngôn ngữ truy vấn SELECT).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy vai trò toàn diện của T-SQL: DDL + DML/DQL + Lập trình điều khiển thủ tục`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 3, Mục I.1 & VII.1
  + 💡 *Mẹo phản xạ nhanh (`tip`):* T-SQL = DDL (Cấu trúc) + DML/DQL (Dữ liệu) + Lập trình thủ tục điều khiển (Procedural)!

---


