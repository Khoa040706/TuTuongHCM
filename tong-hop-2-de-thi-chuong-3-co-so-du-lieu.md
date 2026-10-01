# TỔNG HỢP 2 BỘ ĐỀ THI TRẮC NGHIỆM CHUẨN MỰC
# MÔN HỌC: HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
## CHƯƠNG III: NGÔN NGỮ SQL (STRUCTURED QUERY LANGUAGE) - TRANSACT-SQL

> **Thông tin giáo trình:** Giáo trình Hệ Cơ Sở Dữ Liệu — Chương III: Ngôn ngữ SQL (T-SQL).
> **Quy mô:** 2 Bộ đề thi độc lập (Đề 1 & Đề 2), 40 câu hỏi trắc nghiệm chuẩn / đề.
> **Tổng số câu hỏi:** 80 câu hỏi học thuật chất lượng cao (db-c3-d1-001 đến db-c3-d2-040).
> **Phân bổ độ khó chuẩn mực (30% - 40% - 30%):**
> - 🟢 **Dễ (Nhận biết):** 12 câu / đề (30%)
> - 🟡 **Trung bình (Thông hiểu):** 16 câu / đề (40%)
> - 🔴 **Khó / Bẫy (Vận dụng cao):** 12 câu / đề (30%) — 100% có bẫy tư duy, trickDetails ({ whyTrapped, trickWord, citation, tip }).
> **Cân bằng đáp án:** Chính xác 10 A, 10 B, 10 C, 10 D (25% mỗi đáp án) trên từng đề.
> **Kiểm định kỹ thuật:** Độ lệch chiều dài phương án $\Delta L = L_{max} - L_{min} \le 15$ ký tự trên toàn bộ 80 câu.
> **Đa dạng dạng câu hỏi:** Chọn câu SAI, Điền khuyết (...), Chùm mệnh đề I-II-III, Truy vấn tương đương, Tình huống CSDL thực tế (8 bài tập QLBanHang), Khái niệm & Cú pháp chuẩn.



## BỘ ĐỀ SỐ 1 (MÃ ĐỀ: db-c3-d1)

*Bộ đề kiểm tra toàn diện kiến thức Chương III: Sơ lược T-SQL & Kiểu dữ liệu, Cú pháp DDL & Ràng buộc toàn vẹn, DQL SELECT lọc và gom nhóm, Khung nhìn View & Bài tập QLBanHang.*

---

### 📌 CHUYÊN ĐỀ 1: SƠ LƯỢC RDBMS, CHUẨN T-SQL & HỆ THỐNG KIỂU DỮ LIỆU (Câu 1 - 10)

#### Câu 1 (db-c3-d1-001) — [🟢 DỄ (NHẬN BIẾT)]

**Hệ quản trị cơ sở dữ liệu quan hệ SQL Server 2000 do tập đoàn công nghệ nào phát triển và phát hành?**

- **A.** Tập đoàn Microsoft phát triển và thương mại hóa toàn cầu
- **B.** Tập đoàn Oracle nghiên cứu và giới thiệu trên thị trường
- **C.** Tập đoàn IBM thiết kế độc quyền cho các dòng máy lớn
- **D.** Tổ chức phần mềm mã nguồn mở Apache phát hành miễn phí

> **Đáp án đúng:** **A** — *Tập đoàn Microsoft phát triển và thương mại hóa toàn cầu*
>
> **Giải thích chi tiết:** SQL Server là hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) mạnh mẽ do Microsoft phát triển trên nền kiến trúc Client/Server.

---

#### Câu 2 (db-c3-d1-002) — [🟢 DỄ (NHẬN BIẾT)]

**Ngôn ngữ Transact-SQL (T-SQL) được định nghĩa chuẩn xác theo tài liệu giáo trình là gì?**

- **A.** Là ngôn ngữ truy vấn thuần túy chỉ có thể chạy trên Linux
- **B.** Là ngôn ngữ mở rộng của Microsoft bổ sung cấu trúc lập trình
- **C.** Là hệ điều hành nhúng chuyên dụng quản lý máy chủ cơ sở dữ liệu
- **D.** Là giao thức mạng dùng để mã hóa đường truyền dữ liệu máy chủ

> **Đáp án đúng:** **B** — *Là ngôn ngữ mở rộng của Microsoft bổ sung cấu trúc lập trình*
>
> **Giải thích chi tiết:** T-SQL là phiên bản mở rộng độc quyền của Microsoft dựa trên chuẩn ANSI/ISO SQL, tích hợp thêm các cấu trúc lập trình như biến, IF...ELSE, WHILE, hàm và thủ tục.

---

#### Câu 3 (db-c3-d1-003) — [🟢 DỄ (NHẬN BIẾT)]

**Nhóm lệnh nào sau đây trong ngôn ngữ SQL thuộc phân nhóm Ngôn ngữ Định nghĩa Dữ liệu (DDL)?**

- **A.** Các câu lệnh bao gồm: GRANT, DENY và câu lệnh REVOKE
- **B.** Các câu lệnh bao gồm: SELECT, INSERT và câu lệnh UPDATE
- **C.** Các câu lệnh bao gồm: CREATE, ALTER và câu lệnh DROP
- **D.** Các câu lệnh bao gồm: COMMIT, ROLLBACK và lệnh SAVE

> **Đáp án đúng:** **C** — *Các câu lệnh bao gồm: CREATE, ALTER và câu lệnh DROP*
>
> **Giải thích chi tiết:** DDL (Data Definition Language) gồm các lệnh định nghĩa và quản trị cấu trúc các đối tượng trong CSDL như CREATE, ALTER, DROP.

---

#### Câu 4 (db-c3-d1-004) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong SQL Server, kiểu dữ liệu số nguyên nào chiếm đúng 1 byte bộ nhớ và lưu được dải giá trị từ 0 đến 255?**

- **A.** Kiểu dữ liệu integer (dung lượng 4 byte, dải số tiêu chuẩn)
- **B.** Kiểu dữ liệu smallint (dung lượng 2 byte, dải số âm dương)
- **C.** Kiểu dữ liệu bigint (dung lượng 8 byte, dải số cực kỳ lớn)
- **D.** Kiểu dữ liệu tinyint (dung lượng 1 byte, dải từ 0 đến 255)

> **Đáp án đúng:** **D** — *Kiểu dữ liệu tinyint (dung lượng 1 byte, dải từ 0 đến 255)*
>
> **Giải thích chi tiết:** Kiểu tinyint lưu trữ số nguyên không dấu chiếm đúng 1 byte bộ nhớ, dải giá trị hợp lệ từ 0 đến 255.

---

#### Câu 5 (db-c3-d1-005) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khẳng định nào sau đây là HOÀN TOÀN SAI khi so sánh giữa hai kiểu dữ liệu char(n) và varchar(n)?**

- **A.** Kiểu char(n) sẽ tự động co giãn kích thước theo dữ liệu nhập
- **B.** Kiểu char(n) luôn luôn chiếm đúng n byte bộ nhớ bất kể chuỗi
- **C.** Kiểu varchar(n) chỉ tốn số byte tương ứng với ký tự thực tế
- **D.** Cả hai kiểu dữ liệu này đều chỉ hỗ trợ lưu chuỗi Non-Unicode

> **Đáp án đúng:** **A** — *Kiểu char(n) sẽ tự động co giãn kích thước theo dữ liệu nhập*
>
> **Giải thích chi tiết:** Nhận định A sai vì char(n) có kích thước cố định, luôn dùng đúng n byte (các ký tự thừa được điền khoảng trắng), chỉ có varchar(n) mới co giãn linh hoạt theo dữ liệu thực tế.

---

#### Câu 6 (db-c3-d1-006) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Kiểu chuỗi Unicode ...(1)... chiếm kích thước thay đổi linh hoạt bằng 2x + 2 bytes, và khi gán giá trị tiếng Việt bắt buộc phải có tiền tố ...(2)... đứng trước chuỗi."**

- **A.** varchar(n) / ký tự U viết hoa đứng ngay trước chuỗi
- **B.** nvarchar(n) / ký tự N viết hoa đứng ngay trước chuỗi
- **C.** nchar(n) / ký tự V viết thường đứng ngay trước chuỗi
- **D.** text / ký tự C viết hoa đặt ở cuối cùng của chuỗi

> **Đáp án đúng:** **B** — *nvarchar(n) / ký tự N viết hoa đứng ngay trước chuỗi*
>
> **Giải thích chi tiết:** Kiểu nvarchar(n) là kiểu chuỗi Unicode thay đổi độ dài (2 byte/ký tự + 2 byte overhead) và hằng chuỗi Unicode trong T-SQL bắt buộc phải có tiền tố N đứng trước (ví dụ N'Hà Nội').

---

#### Câu 7 (db-c3-d1-007) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho các nhận định sau về kiểu ngày giờ trong SQL Server:
(I) Kiểu datetime chiếm 8 bytes, quản lý từ năm 1753 đến 9999.
(II) Kiểu smalldatetime chiếm 4 bytes, quản lý từ năm 1900 đến 2079.
(III) Cả hai kiểu ngày giờ trên đều lưu trữ đến độ chính xác phần triệu giây.
Khẳng định nào sau đây là ĐÚNG?**

- **A.** Chỉ có duy nhất nhận định (III) là nhận định hoàn toàn đúng đắn
- **B.** Tất cả ba nhận định (I), (II) và (III) đều hoàn toàn chính xác
- **C.** Chỉ có nhận định (I) và (II) đúng, nhận định (III) là sai
- **D.** Nhận định (I) là nhận định sai, nhận định (II) và (III) là đúng

> **Đáp án đúng:** **C** — *Chỉ có nhận định (I) và (II) đúng, nhận định (III) là sai*
>
> **Giải thích chi tiết:** Nhận định (I) và (II) đúng. Nhận định (III) sai vì datetime chỉ chính xác đến 3.33 mili-giây, còn smalldatetime chỉ chính xác đến mức phút (00 giây).

---

#### Câu 8 (db-c3-d1-008) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Lệnh gán: UPDATE NhanVien SET TenNV = 'Nguyễn Văn An' (không có chữ N). Hậu quả gì xảy ra nếu cột TenNV có kiểu nvarchar?**

- **A.** Chuỗi tự động được chuyển đổi sang mã nhị phân không đọc được
- **B.** Hệ quản trị CSDL báo lỗi cú pháp nghiêm trọng và hủy bỏ câu lệnh
- **C.** Toàn bộ bảng dữ liệu NhanVien tự động bị khóa chặt vĩnh viễn
- **D.** Hệ thống lưu thành chuỗi mất dấu tiếng Việt thành Nguyen Van An

> **Đáp án đúng:** **D** — *Hệ thống lưu thành chuỗi mất dấu tiếng Việt thành Nguyen Van An*
>
> **Giải thích chi tiết:** Trong T-SQL, nếu nhập chuỗi tiếng Việt có dấu vào cột nvarchar mà thiếu tiền tố N phía trước, SQL Server sẽ tự ép kiểu về Non-Unicode (dựa theo code-page mặc định) làm mất toàn bộ dấu tiếng Việt.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ cột là nvarchar thì tự động giữ được tiếng Việt mà quên mất tiền tố N trong T-SQL.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy chuỗi Unicode thiếu tiền tố N (Missing Unicode string prefix N)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục II.2.b*
> - 💡 **Mẹo hóa giải:** Nhập chuỗi Unicode tiếng Việt trong T-SQL BẮT BUỘC phải viết dạng N'...'.

---

#### Câu 9 (db-c3-d1-009) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Xét biểu thức: DECLARE @x tinyint = 250; SET @x = @x + 10; Phản ứng chính xác của SQL Server khi thực thi đoạn mã lệnh này là gì?**

- **A.** Xuất hiện lỗi Arithmetic overflow error do vượt quá ngưỡng 255
- **B.** Giá trị của biến @x tự động quay vòng trở về giá trị ban đầu là 4
- **C.** Biến @x tự động mở rộng dung lượng lên kiểu smallint để lưu 260
- **D.** Hệ thống tự động gán giá trị NULL cho biến @x mà không báo lỗi

> **Đáp án đúng:** **A** — *Xuất hiện lỗi Arithmetic overflow error do vượt quá ngưỡng 255*
>
> **Giải thích chi tiết:** Kiểu tinyint chỉ lưu tối đa đến 255. Phép tính 250 + 10 = 260 vượt quá giới hạn miền giá trị nên SQL Server sẽ ném lỗi Arithmetic overflow error converting expression to data type tinyint.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người lầm tưởng SQL Server sẽ tự ép kiểu mở rộng hoặc tự động quay vòng modulo như ngôn ngữ C.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy tràn số học kiểu dữ liệu số nguyên (Arithmetic overflow error in tinyint)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục II.1.a*
> - 💡 **Mẹo hóa giải:** Tinyint chỉ từ 0..255. Vượt quá 255 = Lỗi tràn số học Arithmetic overflow!

---

#### Câu 10 (db-c3-d1-010) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Khi thiết kế cột lưu trữ mức lương của nhân viên chính xác đến từng xu lẻ, kiểu dữ liệu nào dưới đây là lựa chọn TỐI ƯU NHẤT?**

- **A.** Kiểu float(53) chuyên dụng cho tính toán khoa học vũ trụ
- **B.** Kiểu money (hoặc decimal(18,4)) chuyên dụng cho tài chính
- **C.** Kiểu real chiếm 4 bytes để tiết kiệm không gian lưu trữ đĩa
- **D.** Kiểu bigint rồi quy đổi ngầm bằng cách nhân thêm một nghìn

> **Đáp án đúng:** **B** — *Kiểu money (hoặc decimal(18,4)) chuyên dụng cho tài chính*
>
> **Giải thích chi tiết:** Giáo trình chỉ rõ: Dữ liệu tiền tệ trong SQL Server cần sử dụng kiểu money (8 bytes, chính xác đến 4 chữ số thập phân) hoặc decimal(p,s) để tránh sai số làm tròn của số chấm động float/real.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn float/real vì nghĩ số thực là lưu được số tiền có số lẻ thập phân.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy sai số làm tròn của kiểu số chấm động khi lưu trữ tiền tệ (Floating point vs Exact money)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục II.1.a & II.1.b*
> - 💡 **Mẹo hóa giải:** Tiền tệ tài chính ➔ BẮT BUỘC dùng money hoặc decimal/numeric (Exact numbers), KHÔNG dùng float/real.

---

### 📌 CHUYÊN ĐỀ 2: ĐỊNH NGHĨA DDL, CẬP NHẬT DML & RÀNG BUỘC TOÀN VẸN (Câu 11 - 20)

#### Câu 11 (db-c3-d1-011) — [🟢 DỄ (NHẬN BIẾT)]

**Thuộc tính cột IDENTITY(100, 5) trong câu lệnh CREATE TABLE mang ý nghĩa thiết lập nào sau đây?**

- **A.** Bảng chỉ có thể chứa tối đa 100 bản ghi và 5 thuộc tính khóa ngoại
- **B.** Giá trị tối đa là 100 và mỗi lần chỉ được phép nhập tối đa 5 ký tự
- **C.** Giá trị bắt đầu từ 100 và mỗi dòng mới tự động tăng thêm 5 đơn vị
- **D.** Hệ thống tự động trừ đi 5 đơn vị mỗi khi có một bản ghi mới tạo

> **Đáp án đúng:** **C** — *Giá trị bắt đầu từ 100 và mỗi dòng mới tự động tăng thêm 5 đơn vị*
>
> **Giải thích chi tiết:** Cú pháp IDENTITY(seed, increment): seed là giá trị khởi đầu (100), increment là bước nhảy tăng tự động cho mỗi bản ghi mới (5).

---

#### Câu 12 (db-c3-d1-012) — [🟢 DỄ (NHẬN BIẾT)]

**Để khai báo một ràng buộc khóa chính gồm 2 thuộc tính (MaHV, MaMH) trong bảng KETQUA, ta bắt buộc phải sử dụng cách nào?**

- **A.** Mô hình SQL Server không hỗ trợ tạo khóa chính có nhiều thuộc tính
- **B.** Khai báo từ khóa PRIMARY KEY trực tiếp ngay sau từng dòng cột
- **C.** Chỉ cần khai báo PRIMARY KEY cho thuộc tính MaHV là hệ thống tự hiểu
- **D.** Khai báo ở mức bảng (Table-level constraint) phía dưới danh sách cột

> **Đáp án đúng:** **D** — *Khai báo ở mức bảng (Table-level constraint) phía dưới danh sách cột*
>
> **Giải thích chi tiết:** Khóa chính tổng hợp gồm nhiều thuộc tính bắt buộc phải khai báo ở mức bảng: CONSTRAINT PK_KQ PRIMARY KEY (MaHV, MaMH). Không thể khai báo ở mức cột.

---

#### Câu 13 (db-c3-d1-013) — [🟢 DỄ (NHẬN BIẾT)]

**Câu lệnh nào sau đây dùng để xóa bỏ hoàn toàn cột NgayNghi ra khỏi cấu trúc của bảng NhanVien?**

- **A.** ALTER TABLE NhanVien DROP COLUMN NgayNghi;
- **B.** DELETE COLUMN NgayNghi FROM NhanVien;
- **C.** DROP COLUMN NgayNghi ON TABLE NhanVien;
- **D.** ALTER TABLE NhanVien REMOVE NgayNghi;

> **Đáp án đúng:** **A** — *ALTER TABLE NhanVien DROP COLUMN NgayNghi;*
>
> **Giải thích chi tiết:** Cú pháp chuẩn của DDL khi thay đổi cấu trúc bảng để xóa cột: ALTER TABLE <TênBảng> DROP COLUMN <TênCột>.

---

#### Câu 14 (db-c3-d1-014) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Tùy chọn ON DELETE CASCADE trong khai báo khóa ngoại (FOREIGN KEY) sẽ thực hiện hành động gì khi dòng cha bị xóa?**

- **A.** Hệ thống chặn không cho xóa và ném thông báo lỗi ràng buộc
- **B.** Tự động xóa tất cả các dòng con ở bảng tham chiếu tương ứng
- **C.** Tự động cập nhật các khóa ngoại của bảng con về giá trị NULL
- **D.** Tự động sao chép dòng cha bị xóa sang một tệp tin sao lưu tạm

> **Đáp án đúng:** **B** — *Tự động xóa tất cả các dòng con ở bảng tham chiếu tương ứng*
>
> **Giải thích chi tiết:** ON DELETE CASCADE quy định cơ chế xóa lan truyền: Khi một dòng dữ liệu ở bảng cha (bảng được tham chiếu) bị xóa, toàn bộ các dòng tương ứng ở bảng con sẽ tự động bị xóa theo.

---

#### Câu 15 (db-c3-d1-015) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khẳng định nào sau đây là NHẬN ĐỊNH ĐÚNG về sự khác nhau giữa ràng buộc PRIMARY KEY và ràng buộc UNIQUE?**

- **A.** Một bảng có thể tạo nhiều PRIMARY KEY nhưng chỉ có đúng một UNIQUE
- **B.** PRIMARY KEY được phép trùng lặp, UNIQUE thì không được trùng lặp
- **C.** PRIMARY KEY cấm hoàn toàn NULL, UNIQUE cho phép chứa 1 giá trị NULL
- **D.** UNIQUE tự động tạo Clustered Index còn PRIMARY KEY thì không tạo gì

> **Đáp án đúng:** **C** — *PRIMARY KEY cấm hoàn toàn NULL, UNIQUE cho phép chứa 1 giá trị NULL*
>
> **Giải thích chi tiết:** Trong SQL Server: Bảng chỉ có 1 PRIMARY KEY (tuyệt đối không nhận NULL). Bảng có thể có nhiều UNIQUE constraint, và UNIQUE cho phép chứa duy nhất một giá trị NULL.

---

#### Câu 16 (db-c3-d1-016) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Câu lệnh ...(1)... xóa toàn bộ dữ liệu nhưng không ghi log chi tiết từng dòng, đồng thời ...(2)... giá trị bộ đếm IDENTITY về mức ban đầu."**

- **A.** ALTER TABLE / khóa vĩnh viễn cấu trúc của
- **B.** DELETE FROM / giữ nguyên trạng thái hiện tại của
- **C.** DROP TABLE / sao lưu toàn bộ thông tin của
- **D.** TRUNCATE TABLE / tự động thiết lập lại (reset)

> **Đáp án đúng:** **D** — *TRUNCATE TABLE / tự động thiết lập lại (reset)*
>
> **Giải thích chi tiết:** TRUNCATE TABLE giải phóng toàn bộ các trang dữ liệu (deallocate pages), ghi log tối thiểu, chạy cực nhanh và tự động reset bộ đếm IDENTITY về giá trị seed ban đầu.

---

#### Câu 17 (db-c3-d1-017) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho bảng DONDATHANG(SoHD, NgayDat, NgayGiao). Câu lệnh ALTER TABLE nào bổ sung ràng buộc kiểm tra ngày giao hàng phải sau hoặc bằng ngày đặt hàng?**

- **A.** ALTER TABLE DONDATHANG ADD CHECK (NgayGiao >= NgayDat);
- **B.** ALTER TABLE DONDATHANG ADD CONSTRAINT (NgayGiao > NgayDat);
- **C.** ALTER TABLE DONDATHANG MODIFY COLUMN NgayGiao >= NgayDat;
- **D.** ALTER TABLE DONDATHANG CREATE RULE NgayGiao AFTER NgayDat;

> **Đáp án đúng:** **A** — *ALTER TABLE DONDATHANG ADD CHECK (NgayGiao >= NgayDat);*
>
> **Giải thích chi tiết:** Cú pháp bổ sung ràng buộc kiểm tra: ALTER TABLE <TênBảng> ADD CHECK (<ĐiềuKiện>) hoặc ADD CONSTRAINT <TênRB> CHECK (<ĐiềuKiện>). Ở đây điều kiện là NgayGiao >= NgayDat.

---

#### Câu 18 (db-c3-d1-018) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Bảng KHOA có khóa chính MaKhoa đang được bảng LOP tham chiếu qua khóa ngoại MaKhoa. Quản trị viên chạy lệnh: DROP TABLE KHOA; Kết quả là gì?**

- **A.** Bảng KHOA bị xóa và toàn bộ dữ liệu của bảng LOP tự động biến mất
- **B.** Lệnh thất bại do bảng KHOA đang bị tham chiếu bởi khóa ngoại từ LOP
- **C.** Hệ thống tự động xóa khóa ngoại trong bảng LOP rồi mới xóa bảng KHOA
- **D.** Bảng KHOA chuyển thành một khung nhìn ảo ẩn trong hệ quản trị CSDL

> **Đáp án đúng:** **B** — *Lệnh thất bại do bảng KHOA đang bị tham chiếu bởi khóa ngoại từ LOP*
>
> **Giải thích chi tiết:** SQL Server tuyệt đối ngăn chặn lệnh DROP TABLE đối với bảng đang được tham chiếu bởi khóa ngoại từ một bảng khác (kể cả khi bảng con không có dữ liệu). Phải DROP bảng con hoặc DROP FOREIGN KEY trước.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ nếu bảng LOP không có dữ liệu hoặc bật CASCADE thì DROP TABLE cha sẽ tự động chạy được.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy tính toàn vẹn tham chiếu khi xóa bảng bằng DROP TABLE (Referential integrity constraint on DROP)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục III.2.a*
> - 💡 **Mẹo hóa giải:** DROP TABLE bảng cha có FK trỏ tới ➔ LUÔN LUÔN BỊ TỪ CHỐI lỗi 3726, bất kể CASCADE hay bảng con rỗng!

---

#### Câu 19 (db-c3-d1-019) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho bảng HANGHOA có cột MaHG là IDENTITY(1,1). Khi chạy lệnh: INSERT INTO HANGHOA(MaHG, TenHG) VALUES (1, N'Bánh xốp'); Điều gì sẽ xảy ra?**

- **A.** Hệ thống tự động ghi đè giá trị mã hàng cũ mà không cần kiểm tra
- **B.** Bản ghi được chèn bình thường và bước nhảy tự động tăng thêm 1 đơn vị
- **C.** Báo lỗi không thể chèn giá trị tường minh vào cột có thuộc tính IDENTITY
- **D.** Giá trị 1 tự động nhân đôi thành mã hàng 2 để tránh xung đột dữ liệu

> **Đáp án đúng:** **C** — *Báo lỗi không thể chèn giá trị tường minh vào cột có thuộc tính IDENTITY*
>
> **Giải thích chi tiết:** Theo mặc định, SQL Server cấm người dùng tự nhập giá trị vào cột IDENTITY (Cannot insert explicit value for identity column in table when IDENTITY_INSERT is set to OFF).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh tưởng có thể chủ động gán số cho cột tự tăng nếu giá trị đó chưa tồn tại trong bảng.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy chèn giá trị trực tiếp vào cột tự tăng IDENTITY (Explicit insert into identity column)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục III.1.a*
> - 💡 **Mẹo hóa giải:** Cột IDENTITY mặc định KHÔNG ĐƯỢC nhập giá trị vào câu lệnh INSERT (trừ khi bật IDENTITY_INSERT ON).

---

#### Câu 20 (db-c3-d1-020) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Thực hiện lệnh TRUNCATE TABLE PhongBan; Biết bảng PhongBan đang được tham chiếu bởi khóa ngoại của bảng NhanVien (nhưng bảng NhanVien hiện đang rỗng). Lệnh có thực thi được không?**

- **A.** Hệ thống tự động chuyển sang câu lệnh DROP TABLE để xóa sạch dữ liệu
- **B.** Thực thi thành công vì bảng tham chiếu NhanVien không chứa dữ liệu
- **C.** Thực thi thành công nhưng hệ thống sẽ phát cảnh báo vi phạm bộ nhớ
- **D.** Không thể thực thi vì TRUNCATE TABLE cấm trên bảng bị FK tham chiếu

> **Đáp án đúng:** **D** — *Không thể thực thi vì TRUNCATE TABLE cấm trên bảng bị FK tham chiếu*
>
> **Giải thích chi tiết:** Quy tắc nghiêm ngặt của T-SQL: TRUNCATE TABLE không thể thực thi trên bảng được tham chiếu bởi bất kỳ FOREIGN KEY nào, ngay cả khi bảng tham chiếu đó hoàn toàn không chứa dòng dữ liệu nào.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ bảng con không có dữ liệu thì không vi phạm toàn vẹn nên TRUNCATE được.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy giới hạn kỹ thuật của TRUNCATE TABLE với khóa ngoại (Truncate table FK restriction)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục III.2.a*
> - 💡 **Mẹo hóa giải:** Bảng có FK trỏ tới (dù bảng con RỖNG) ➔ CẤM TRUNCATE TABLE. Chỉ có thể dùng DELETE FROM!

---

### 📌 CHUYÊN ĐỀ 3: TRUY VẤN DQL: SELECT, LỌC, GOM NHÓM & PHÉP JOIN (Câu 21 - 30)

#### Câu 21 (db-c3-d1-021) — [🟢 DỄ (NHẬN BIẾT)]

**Trong câu lệnh truy vấn dữ liệu SQL, mệnh đề nào được sử dụng để lọc và loại bỏ các dòng dữ liệu trùng lặp?**

- **A.** Mệnh đề từ khóa DISTINCT đứng ngay phía sau từ khóa SELECT
- **B.** Mệnh đề từ khóa UNIQUE đặt ở cuối cùng của câu lệnh truy vấn
- **C.** Mệnh đề từ khóa PRIMARY KEY kết hợp với mệnh đề sắp xếp
- **D.** Mệnh đề từ khóa NO DUPLICATE khai báo trong mệnh đề FROM

> **Đáp án đúng:** **A** — *Mệnh đề từ khóa DISTINCT đứng ngay phía sau từ khóa SELECT*
>
> **Giải thích chi tiết:** Từ khóa DISTINCT đặt ngay sau SELECT (ví dụ SELECT DISTINCT MaKH FROM Hoadon) dùng để lọc bỏ các dòng trùng lặp trong kết quả trả về.

---

#### Câu 22 (db-c3-d1-022) — [🟢 DỄ (NHẬN BIẾT)]

**Để lọc các sản phẩm có đơn giá nằm trong đoạn từ 100.000 đến 500.000 (bao gồm cả hai đầu mút), toán tử nào sau đây chuẩn nhất?**

- **A.** Toán tử DonGia IN (100000, 500000) khai báo trong mệnh đề WHERE
- **B.** Toán tử DonGia BETWEEN 100000 AND 500000 trong mệnh đề WHERE
- **C.** Toán tử DonGia LIKE '[100000-500000]' trong mệnh đề WHERE
- **D.** Toán tử DonGia EQUAL (100000 TO 500000) trong mệnh đề WHERE

> **Đáp án đúng:** **B** — *Toán tử DonGia BETWEEN 100000 AND 500000 trong mệnh đề WHERE*
>
> **Giải thích chi tiết:** Cú pháp BETWEEN ... AND ... bao gồm cả 2 giá trị biên (tương đương DonGia >= 100000 AND DonGia <= 500000).

---

#### Câu 23 (db-c3-d1-023) — [🟢 DỄ (NHẬN BIẾT)]

**Phép kết nối nào giữ lại toàn bộ các dòng của bảng bên trái kể cả khi không tìm thấy dòng khớp ở bảng bên phải?**

- **A.** Phép kết nối ngoài bên phải (RIGHT OUTER JOIN giữa hai bảng)
- **B.** Phép kết nối trong thuần túy (INNER JOIN giữa hai quan hệ)
- **C.** Phép kết nối ngoài bên trái (LEFT OUTER JOIN hoặc LEFT JOIN)
- **D.** Phép kết nối tích Descartes (CROSS JOIN giữa hai danh sách)

> **Đáp án đúng:** **C** — *Phép kết nối ngoài bên trái (LEFT OUTER JOIN hoặc LEFT JOIN)*
>
> **Giải thích chi tiết:** LEFT OUTER JOIN bảo toàn mọi dòng của bảng bên trái; các cột của bảng bên phải không khớp sẽ được điền giá trị NULL.

---

#### Câu 24 (db-c3-d1-024) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Thứ tự thực thi logic (Logical Query Processing) chuẩn xác của câu lệnh SELECT trong hệ quản trị SQL Server là gì?**

- **A.** WHERE ➔ FROM ➔ GROUP BY ➔ HAVING ➔ SELECT ➔ ORDER BY
- **B.** SELECT ➔ FROM ➔ WHERE ➔ GROUP BY ➔ HAVING ➔ ORDER BY
- **C.** FROM ➔ SELECT ➔ WHERE ➔ ORDER BY ➔ GROUP BY ➔ HAVING
- **D.** FROM ➔ WHERE ➔ GROUP BY ➔ HAVING ➔ SELECT ➔ ORDER BY

> **Đáp án đúng:** **D** — *FROM ➔ WHERE ➔ GROUP BY ➔ HAVING ➔ SELECT ➔ ORDER BY*
>
> **Giải thích chi tiết:** Thứ tự thực thi logic của cỗ máy SQL: 1) FROM (xác định nguồn), 2) WHERE (lọc dòng), 3) GROUP BY (gom nhóm), 4) HAVING (lọc nhóm), 5) SELECT (kết xuất cột), 6) ORDER BY (sắp xếp).

---

#### Câu 25 (db-c3-d1-025) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Biểu thức điều kiện WHERE TenNV LIKE '_[a-k]%' sẽ lọc ra những nhân viên có tên thỏa mãn tiêu chí nào?**

- **A.** Ký tự thứ hai trong tên là một chữ cái nằm từ a đến k
- **B.** Ký tự đầu tiên trong tên bắt buộc phải là một chữ cái từ a đến k
- **C.** Tên có độ dài chính xác là hai ký tự và kết thúc bằng chữ k
- **D.** Tên chứa ký tự gạch dưới và không chứa các ký tự từ a đến k

> **Đáp án đúng:** **A** — *Ký tự thứ hai trong tên là một chữ cái nằm từ a đến k*
>
> **Giải thích chi tiết:** Ký tự đại diện: `_` là đúng 1 ký tự bất kỳ đầu tiên, `[a-k]` là ký tự thứ hai nằm trong khoảng từ a đến k, `%` là chuỗi ký tự tùy ý phía sau.

---

#### Câu 26 (db-c3-d1-026) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho câu truy vấn: SELECT Phong, COUNT(MaNV) AS SoLuong FROM NhanVien WHERE Luong > 1000 GROUP BY Phong HAVING COUNT(MaNV) >= 5; Khẳng định nào ĐÚNG?**

- **A.** Đếm tất cả nhân viên trong phòng rồi sau đó mới lọc những phòng có mức lương trung bình > 1000
- **B.** Chỉ đếm các nhân viên có lương > 1000 và nhóm phòng đó phải có từ 5 người thỏa mãn trở lên
- **C.** Câu lệnh bị lỗi cú pháp vì không được phép dùng hàm kết hợp COUNT ở cả SELECT và HAVING
- **D.** Điều kiện Luong > 1000 bị bỏ qua vì mệnh đề HAVING có độ ưu tiên cao hơn mệnh đề WHERE

> **Đáp án đúng:** **B** — *Chỉ đếm các nhân viên có lương > 1000 và nhóm phòng đó phải có từ 5 người thỏa mãn trở lên*
>
> **Giải thích chi tiết:** Mệnh đề WHERE Luong > 1000 lọc dòng trước khi gom nhóm, sau đó GROUP BY Phong gom lại, và HAVING COUNT(MaNV) >= 5 chỉ giữ lại các phòng có từ 5 nhân viên (thỏa mãn điều kiện lương > 1000) trở lên.

---

#### Câu 27 (db-c3-d1-027) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Hai câu lệnh sau có điểm khác biệt căn bản nào về mặt ngữ nghĩa và kết quả:
(1) SELECT COUNT(*) FROM KhachHang;
(2) SELECT COUNT(Email) FROM KhachHang;**

- **A.** Câu (1) chỉ đếm các dòng không chứa NULL, câu (2) đếm luôn cả các giá trị NULL
- **B.** Cả hai câu lệnh luôn trả về cùng một kết quả giống hệt nhau trong mọi trường hợp
- **C.** Câu (1) đếm toàn bộ số dòng, câu (2) bỏ qua những khách hàng có Email là NULL
- **D.** Câu (2) bị lỗi thời gian chạy nếu cột Email trong bảng có chứa giá trị rỗng

> **Đáp án đúng:** **C** — *Câu (1) đếm toàn bộ số dòng, câu (2) bỏ qua những khách hàng có Email là NULL*
>
> **Giải thích chi tiết:** Hàm COUNT(*) đếm tổng số dòng (bất kể giá trị các cột là gì, kể cả toàn NULL). Còn COUNT(Cột) chỉ đếm các dòng mà giá trị tại cột đó KHÁC NULL.

---

#### Câu 28 (db-c3-d1-028) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Một bảng có 4 dòng với cột DiemThi nhận giá trị lần lượt là: 8, 10, NULL, 6. Giá trị của hàm SELECT AVG(DiemThi) trả về là bao nhiêu?**

- **A.** Hệ thống báo lỗi chia cho số không do sự xuất hiện của giá trị NULL
- **B.** Giá trị bằng 6 (tính tổng 8+10+0+6=24 chia cho tất cả 4 dòng)
- **C.** Giá trị trả về là NULL vì phép tính chứa phần tử có giá trị rỗng
- **D.** Giá trị bằng 8 (tính tổng 8+10+6=24 chia cho 3 dòng không NULL)

> **Đáp án đúng:** **D** — *Giá trị bằng 8 (tính tổng 8+10+6=24 chia cho 3 dòng không NULL)*
>
> **Giải thích chi tiết:** Quy tắc vàng của T-SQL: Các hàm kết hợp (SUM, AVG, MIN, MAX, COUNT(col)) tự động BỎ QUA giá trị NULL. Do đó AVG(DiemThi) = (8 + 10 + 6) / 3 = 24 / 3 = 8. (Không chia cho 4).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm là lấy tổng chia cho 4 (coi NULL là 0).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy giá trị NULL trong hàm kết hợp AVG (Aggregate function NULL elimination)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a*
> - 💡 **Mẹo hóa giải:** Hàm AVG(cột) bỏ qua NULL cả ở tử số và mẫu số: Tổng / Số lượng dòng KHÁC NULL!

---

#### Câu 29 (db-c3-d1-029) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Lập trình viên viết câu lệnh sau để tìm các phòng ban có lương trung bình trên 2000:
SELECT MaPB, AVG(Luong) FROM NhanVien WHERE AVG(Luong) > 2000 GROUP BY MaPB;
Lỗi kỹ thuật nghiêm trọng của câu lệnh này là gì?**

- **A.** Không được phép sử dụng hàm kết hợp trong mệnh đề WHERE, phải dùng HAVING
- **B.** Cột MaPB trong mệnh đề SELECT bắt buộc phải chuyển vào trong một hàm kết hợp
- **C.** Mệnh đề GROUP BY không được phép đứng sau mệnh đề WHERE trong chuẩn ANSI
- **D.** Câu lệnh hoàn toàn đúng cú pháp và sẽ trả về kết quả chính xác không có lỗi

> **Đáp án đúng:** **A** — *Không được phép sử dụng hàm kết hợp trong mệnh đề WHERE, phải dùng HAVING*
>
> **Giải thích chi tiết:** Mệnh đề WHERE lọc từng dòng đơn lẻ trước khi gom nhóm, nên không thể tính toán hàm kết hợp trên nhóm tại WHERE. Muốn lọc theo điều kiện hàm kết hợp AVG(Luong) > 2000 bắt buộc phải đặt trong mệnh đề HAVING.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người mới học SQL quen tay đưa mọi điều kiện lọc vào mệnh đề WHERE.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy sử dụng hàm kết hợp trong mệnh đề WHERE (Aggregate in WHERE clause error)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a*
> - 💡 **Mẹo hóa giải:** Hàm kết hợp (COUNT, SUM, AVG, MIN, MAX) ➔ CẤM nằm trong WHERE! Bắt buộc phải đưa vào HAVING.

---

#### Câu 30 (db-c3-d1-030) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho câu lệnh: SELECT MaPB, TenPB, COUNT(MaNV) FROM PhongBan PB INNER JOIN NhanVien NV ON PB.MaPB = NV.MaPB GROUP BY MaPB; SQL Server sẽ phản hồi thế nào?**

- **A.** Chạy bình thường và tự động lấy tên phòng ban đầu tiên của mỗi nhóm tìm được
- **B.** Báo lỗi vì cột TenPB nằm trong SELECT nhưng không xuất hiện trong GROUP BY
- **C.** Tự động bổ sung hàm MAX cho cột TenPB để câu lệnh được thực thi hoàn tất
- **D.** Báo lỗi do không thể kết nối hai bảng khi có sử dụng hàm kết hợp COUNT

> **Đáp án đúng:** **B** — *Báo lỗi vì cột TenPB nằm trong SELECT nhưng không xuất hiện trong GROUP BY*
>
> **Giải thích chi tiết:** Quy tắc nghiêm ngặt của mệnh đề GROUP BY trong SQL: Mọi cột xuất hiện trong danh sách SELECT mà không nằm trong hàm kết hợp thì BẮT BUỘC phải có mặt trong mệnh đề GROUP BY.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều hệ thống như MySQL phiên bản cũ cho phép chạy lỏng lẻo, nhưng SQL Server chuẩn mực luôn báo lỗi nghiêm ngặt.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy thiếu thuộc tính trong mệnh đề GROUP BY (Column invalid in SELECT list)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a*
> - 💡 **Mẹo hóa giải:** Mọi cột ở SELECT không có hàm kết hợp ➔ BẮT BUỘC PHẢI CÓ TÊN TRONG GROUP BY!

---

### 📌 CHUYÊN ĐỀ 4: TRUY VẤN LỒNG, KHUNG NHÌN (VIEW) & BÀI TẬP CSDL QLBANHANG (Câu 31 - 40)

#### Câu 31 (db-c3-d1-031) — [🟢 DỄ (NHẬN BIẾT)]

**Bản chất kiến trúc vật lý của Khung nhìn (View) trong hệ cơ sở dữ liệu quan hệ là gì?**

- **A.** Là một bảng tạm thời tự động bị hủy bỏ ngay khi phiên làm việc người dùng kết thúc
- **B.** Là một tệp tin vật lý độc lập được sao lưu riêng biệt trên ổ đĩa cứng máy chủ
- **C.** Là bảng ảo không lưu trữ dữ liệu thực, chỉ lưu câu lệnh truy vấn định nghĩa
- **D.** Là một chỉ mục đặc biệt dùng để tăng tốc độ ghi dữ liệu của các câu lệnh chèn

> **Đáp án đúng:** **C** — *Là bảng ảo không lưu trữ dữ liệu thực, chỉ lưu câu lệnh truy vấn định nghĩa*
>
> **Giải thích chi tiết:** Khung nhìn (View) là một bảng ảo (virtual table). View không chứa dữ liệu thực tế trên đĩa mà chỉ lưu trữ câu truy vấn SELECT định nghĩa trong từ điển dữ liệu.

---

#### Câu 32 (db-c3-d1-032) — [🟢 DỄ (NHẬN BIẾT)]

**Cú pháp chuẩn xác nào sau đây dùng để xóa bỏ một khung nhìn có tên là View_NhanVien?**

- **A.** Sử dụng câu lệnh giải phóng bộ nhớ: REMOVE VIEW View_NhanVien;
- **B.** Sử dụng câu lệnh thao tác dữ liệu: DELETE VIEW View_NhanVien;
- **C.** Sử dụng câu lệnh quản trị cấu trúc: ALTER TABLE DROP View_NhanVien;
- **D.** Sử dụng câu lệnh chuẩn DDL: DROP VIEW View_NhanVien;

> **Đáp án đúng:** **D** — *Sử dụng câu lệnh chuẩn DDL: DROP VIEW View_NhanVien;*
>
> **Giải thích chi tiết:** Cú pháp DDL xóa khung nhìn: DROP VIEW <TênKhungNhìn>.

---

#### Câu 33 (db-c3-d1-033) — [🟢 DỄ (NHẬN BIẾT)]

**Toán tử nào dưới đây được sử dụng trong truy vấn lồng tương quan để kiểm tra xem truy vấn con có trả về ít nhất một dòng dữ liệu hay không?**

- **A.** Toán tử kiểm tra sự tồn tại EXISTS (hoặc phủ định NOT EXISTS)
- **B.** Toán tử so sánh khoảng giá trị thực tế BETWEEN ... AND ...
- **C.** Toán tử tìm kiếm chuỗi mẫu theo mẫu định sẵn LIKE ... ESCAPE
- **D.** Toán tử kiểm tra danh sách tĩnh các phần tử rời rạc IN (...) 

> **Đáp án đúng:** **A** — *Toán tử kiểm tra sự tồn tại EXISTS (hoặc phủ định NOT EXISTS)*
>
> **Giải thích chi tiết:** Toán tử EXISTS kiểm tra sự tồn tại của các dòng kết quả trong truy vấn con tương quan: Trả về TRUE nếu có ít nhất 1 dòng, FALSE nếu rỗng.

---

#### Câu 34 (db-c3-d1-034) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong CSDL Bán Hàng, để tìm các khách hàng có cùng ngày sinh (Bài tập 7), kỹ thuật truy vấn nào sau đây được áp dụng tối ưu nhất?**

- **A.** Sử dụng Cross Join rồi dùng mệnh đề WHERE loại bỏ tất cả các dòng trùng
- **B.** Sử dụng Self-Join kết nối bảng KhachHang với chính nó theo NgaySinh
- **C.** Sử dụng phép chia đại số quan hệ kết hợp với phép trừ dữ liệu tập hợp
- **D.** Tạo 12 bảng tạm tương ứng với 12 tháng sinh rồi hợp dữ liệu bằng UNION

> **Đáp án đúng:** **B** — *Sử dụng Self-Join kết nối bảng KhachHang với chính nó theo NgaySinh*
>
> **Giải thích chi tiết:** Để tìm các cặp khách hàng có cùng ngày sinh, ta thực hiện Self-Join: FROM KhachHang K1 INNER JOIN KhachHang K2 ON K1.NgaySinh = K2.NgaySinh AND K1.MaKH < K2.MaKH.

---

#### Câu 35 (db-c3-d1-035) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong CSDL Bán Hàng (Bài tập 5), câu truy vấn nào sau đây tính tổng số lượng bán được của mỗi mặt hàng một cách chuẩn mực?**

- **A.** SELECT MaHG, SUM(SoLuong) FROM Chitiet_HD ORDER BY SoLuong DESC;
- **B.** SELECT MaHG, COUNT(SoLuong) FROM Chitiet_HD WHERE SoLuong > 0;
- **C.** SELECT MaHG, SUM(SoLuong) FROM Chitiet_HD GROUP BY MaHG;
- **D.** SELECT MaHG, TOTAL(SoLuong) FROM Chitiet_HD GROUP BY SoHD;

> **Đáp án đúng:** **C** — *SELECT MaHG, SUM(SoLuong) FROM Chitiet_HD GROUP BY MaHG;*
>
> **Giải thích chi tiết:** Để tính tổng số lượng bán được của mỗi mặt hàng, ta gom nhóm theo MaHG và áp dụng hàm SUM(SoLuong): SELECT MaHG, SUM(SoLuong) AS TongBan FROM Chitiet_HD GROUP BY MaHG.

---

#### Câu 36 (db-c3-d1-036) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho các khẳng định sau về Khung nhìn (View):
(I) View giúp tăng tính bảo mật bằng cách phân quyền trên từng cột nhạy cảm.
(II) Một View có chứa DISTINCT hay GROUP BY thì không thể thực hiện INSERT dữ liệu.
(III) Khi xóa một View bằng lệnh DROP VIEW, toàn bộ dữ liệu ở bảng gốc sẽ bị xóa theo.
Khẳng định nào sau đây là ĐÚNG?**

- **A.** Nhận định (I) sai hoàn toàn, nhận định (II) và (III) là đúng
- **B.** Cả ba nhận định (I), (II) và (III) đều là những nhận định chính xác
- **C.** Chỉ có duy nhất nhận định (III) là nhận định hoàn toàn đúng đắn
- **D.** Chỉ có nhận định (I) và (II) đúng, nhận định (III) là sai

> **Đáp án đúng:** **D** — *Chỉ có nhận định (I) và (II) đúng, nhận định (III) là sai*
>
> **Giải thích chi tiết:** Nhận định (I) và (II) đúng. Nhận định (III) sai vì View là bảng ảo, khi xóa View chỉ xóa định nghĩa của nó trong từ điển dữ liệu, hoàn toàn KHÔNG ảnh hưởng hay xóa dữ liệu của bảng gốc.

---

#### Câu 37 (db-c3-d1-037) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Khi tạo khung nhìn, mệnh đề ...(1)... có tác dụng kiểm tra và ngăn chặn các thao tác INSERT hoặc UPDATE làm cho dòng dữ liệu ...(2)... điều kiện WHERE của chính View đó."**

- **A.** WITH CHECK OPTION / không còn thỏa mãn
- **B.** WITH ENCRYPTION / bị lộ mật khẩu và vi phạm
- **C.** WITH SCHEMABINDING / làm thay đổi cấu trúc
- **D.** ORDER BY / bị xáo trộn thứ tự sắp xếp

> **Đáp án đúng:** **A** — *WITH CHECK OPTION / không còn thỏa mãn*
>
> **Giải thích chi tiết:** Mệnh đề WITH CHECK OPTION đảm bảo mọi thao tác INSERT/UPDATE qua View đều phải thỏa mãn điều kiện lọc của mệnh đề WHERE trong View, ngăn chặn dữ liệu chèn vào bị "biến mất" khỏi View.

---

#### Câu 38 (db-c3-d1-038) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống bẫy Anti-Join: Cho truy vấn: SELECT * FROM HangHoa WHERE MaHG NOT IN (SELECT MaHG FROM Chitiet_HD); Nếu bảng Chitiet_HD có ít nhất 1 dòng chứa MaHG là NULL, kết quả trả về là gì?**

- **A.** Truy vấn vẫn trả về chính xác tất cả các mặt hàng chưa bán bình thường
- **B.** Truy vấn trả về kết quả rỗng (0 dòng) do tính chất logic ba trị với NULL
- **C.** Hệ quản trị CSDL ném ra thông báo lỗi cú pháp và dừng câu truy vấn
- **D.** Hệ thống tự động chuyển giá trị NULL thành chuỗi rỗng để tính toán tiếp

> **Đáp án đúng:** **B** — *Truy vấn trả về kết quả rỗng (0 dòng) do tính chất logic ba trị với NULL*
>
> **Giải thích chi tiết:** Bẫy kinh điển: Trong SQL, NOT IN (tập hợp) tương đương với điều kiện AND liên tiếp (MaHG <> x AND MaHG <> NULL...). Phép so sánh với NULL luôn cho UNKNOWN, và AND với UNKNOWN dẫn đến kết quả luôn là UNKNOWN/FALSE, khiến câu truy vấn trả về TẬP RỖNG!
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay dùng NOT IN vì nghĩ nó tương đương NOT EXISTS mà không ngờ gặp NULL sẽ rỗng cả bảng.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy giá trị NULL trong toán tử NOT IN (NOT IN with NULL traps to empty set)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a & VI.1*
> - 💡 **Mẹo hóa giải:** Anti-Join nên dùng NOT EXISTS hoặc LEFT JOIN WHERE ... IS NULL. Tuyệt đối tránh NOT IN khi tập con có thể chứa NULL!

---

#### Câu 39 (db-c3-d1-039) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho View: CREATE VIEW View_NV_LuongCao AS SELECT MaNV, TenNV, Luong FROM NhanVien WHERE Luong > 5000 WITH CHECK OPTION; Người dùng chạy lệnh: UPDATE View_NV_LuongCao SET Luong = 3000 WHERE MaNV = 'NV01'; Kết quả là gì?**

- **A.** Lệnh chạy thành công và hệ thống tự động sửa điều kiện WHERE của View thành 3000
- **B.** Lệnh chạy thành công và dòng NV01 tự động biến mất khỏi View_NV_LuongCao
- **C.** Bị từ chối và báo lỗi vì mức lương 3000 vi phạm điều kiện WITH CHECK OPTION
- **D.** Bảng NhanVien gốc tự động tạo một bản sao dự phòng trước khi cập nhật lương

> **Đáp án đúng:** **C** — *Bị từ chối và báo lỗi vì mức lương 3000 vi phạm điều kiện WITH CHECK OPTION*
>
> **Giải thích chi tiết:** Vì View có mệnh đề WITH CHECK OPTION, việc sửa Luong = 3000 sẽ làm dòng này không còn thỏa mãn điều kiện Luong > 5000 của View. SQL Server sẽ ngay lập tức chặn lại và báo lỗi vi phạm CHECK OPTION.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ chỉ có lệnh INSERT mới bị kiểm tra, còn UPDATE thì cập nhật được tự do.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy cơ chế bảo vệ của mệnh đề WITH CHECK OPTION khi UPDATE qua View`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục V.1.b*
> - 💡 **Mẹo hóa giải:** WITH CHECK OPTION áp dụng cho CẢ INSERT VÀ UPDATE. Bất kỳ giá trị mới nào vi phạm WHERE đều bị BẬC LỖI chặn đứng!

---

#### Câu 40 (db-c3-d1-040) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Trong 8 bài tập QLBanHang, yêu cầu: "Tìm các mặt hàng chưa từng được khách hàng đặt mua bao giờ" (Bài 4). Biểu thức nào sau đây ĐẢM BẢO CHÍNH XÁC VÀ AN TOÀN TUYỆT ĐỐI kể cả khi có NULL?**

- **A.** SELECT * FROM HangHoa H WHERE H.MaHG = (SELECT C.MaHG FROM Chitiet_HD C WHERE C.SoLuong = 0);
- **B.** SELECT * FROM HangHoa H WHERE H.MaHG NOT IN (SELECT C.MaHG FROM Chitiet_HD C);
- **C.** SELECT * FROM HangHoa H INNER JOIN Chitiet_HD C ON H.MaHG = C.MaHG WHERE C.MaHG IS NULL;
- **D.** SELECT * FROM HangHoa H WHERE NOT EXISTS (SELECT 1 FROM Chitiet_HD C WHERE C.MaHG = H.MaHG);

> **Đáp án đúng:** **D** — *SELECT * FROM HangHoa H WHERE NOT EXISTS (SELECT 1 FROM Chitiet_HD C WHERE C.MaHG = H.MaHG);*
>
> **Giải thích chi tiết:** Cách an toàn tuyệt đối là dùng NOT EXISTS (hoặc LEFT JOIN ... WHERE C.MaHG IS NULL). Dùng NOT IN sẽ sập bẫy rỗng nếu Chitiet_HD chứa NULL. Phương án C dùng INNER JOIN thì WHERE IS NULL sẽ không bao giờ có dữ liệu.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn cách dùng NOT IN hoặc nhầm INNER JOIN với LEFT JOIN.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy kỹ thuật Anti-Join an toàn tuyệt đối trong bài toán tìm đối tượng chưa phát sinh quan hệ`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục VI.1.b*
> - 💡 **Mẹo hóa giải:** Tìm đối tượng CHƯA TỪNG phát sinh giao dịch ➔ Dùng NOT EXISTS (Correlated Subquery) hoặc LEFT JOIN ... WHERE IS NULL.

---

### 📊 BẢNG ĐÁP ÁN NHANH — BỘ ĐỀ SỐ 1 (MÃ ĐỀ: DB-C3-D1)

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **1** | `A` | **11** | `C` | **21** | `A` | **31** | `C` |
| **2** | `B` | **12** | `D` | **22** | `B` | **32** | `D` |
| **3** | `C` | **13** | `A` | **23** | `C` | **33** | `A` |
| **4** | `D` | **14** | `B` | **24** | `D` | **34** | `B` |
| **5** | `A` | **15** | `C` | **25** | `A` | **35** | `C` |
| **6** | `B` | **16** | `D` | **26** | `B` | **36** | `D` |
| **7** | `C` | **17** | `A` | **27** | `C` | **37** | `A` |
| **8** | `D` | **18** | `B` | **28** | `D` | **38** | `B` |
| **9** | `A` | **19** | `C` | **29** | `A` | **39** | `C` |
| **10** | `B` | **20** | `D` | **30** | `B` | **40** | `D` |


## BỘ ĐỀ SỐ 2 (MÃ ĐỀ: db-c3-d2)

*Bộ đề kiểm tra chuyên sâu và nâng cao: Bẫy giá trị NULL trong hàm kết hợp & NOT IN, cơ chế bảo vệ WITH CHECK OPTION, so sánh DELETE vs TRUNCATE, thứ tự khóa ngoại và phân tích lỗi T-SQL.*

---

### 📌 CHUYÊN ĐỀ 1: SƠ LƯỢC RDBMS, CHUẨN T-SQL & HỆ THỐNG KIỂU DỮ LIỆU (Câu 1 - 10)

#### Câu 1 (db-c3-d2-001) — [🟢 DỄ (NHẬN BIẾT)]

**Hệ quản trị CSDL quan hệ SQL Server hỗ trợ kiến trúc nào cho phép nhiều máy trạm kết nối tới máy chủ trung tâm?**

- **A.** Kiến trúc ngang hàng độc lập không có máy chủ quản trị trung tâm
- **B.** Kiến trúc máy khách/máy chủ phân tán (Client/Server Architecture)
- **C.** Kiến trúc tập tin đơn lẻ phân chia trên các đĩa mềm lưu trữ rời
- **D.** Kiến trúc xử lý tuần tự từng lệnh một trên bộ nhớ chỉ đọc ROM

> **Đáp án đúng:** **B** — *Kiến trúc máy khách/máy chủ phân tán (Client/Server Architecture)*
>
> **Giải thích chi tiết:** SQL Server được thiết kế trên nền tảng kiến trúc Client/Server (Máy khách gửi truy vấn - Máy chủ xử lý và trả kết quả).

---

#### Câu 2 (db-c3-d2-002) — [🟢 DỄ (NHẬN BIẾT)]

**Mục đích cốt lõi của nhóm lệnh Ngôn ngữ Thao tác Dữ liệu (DML) trong SQL là gì?**

- **A.** Dùng để phân quyền truy cập và bảo mật tài khoản người quản trị
- **B.** Dùng để khởi tạo cơ sở dữ liệu và cấu hình dung lượng bộ nhớ đệm
- **C.** Dùng để truy vấn, chèn mới, cập nhật hoặc xóa dữ liệu trong bảng
- **D.** Dùng để thiết lập kết nối mạng giữa máy khách và máy chủ CSDL

> **Đáp án đúng:** **C** — *Dùng để truy vấn, chèn mới, cập nhật hoặc xóa dữ liệu trong bảng*
>
> **Giải thích chi tiết:** DML (Data Manipulation Language) gồm các lệnh thao tác trên các bản ghi dữ liệu bên trong bảng như SELECT, INSERT, UPDATE, DELETE.

---

#### Câu 3 (db-c3-d2-003) — [🟢 DỄ (NHẬN BIẾT)]

**Kiểu dữ liệu số nguyên nào sau đây trong SQL Server chiếm dung lượng 2 bytes và lưu được dải số từ -32.768 đến 32.767?**

- **A.** Kiểu bigint (chiếm 8 byte bộ nhớ, dải số nguyên cực kỳ khổng lồ)
- **B.** Kiểu tinyint (chiếm 1 byte bộ nhớ, dải từ 0 đến 255 dương)
- **C.** Kiểu integer (chiếm 4 byte bộ nhớ, dải từ âm 2 tỷ đến dương 2 tỷ)
- **D.** Kiểu smallint (chiếm 2 byte bộ nhớ, dải từ -32.768 đến 32.767)

> **Đáp án đúng:** **D** — *Kiểu smallint (chiếm 2 byte bộ nhớ, dải từ -32.768 đến 32.767)*
>
> **Giải thích chi tiết:** Kiểu smallint chiếm đúng 2 bytes, dải giá trị từ -32.768 đến 32.767.

---

#### Câu 4 (db-c3-d2-004) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Kiểu dữ liệu ...(1)... dùng để lưu trữ số có độ chính xác cố định, trong đó tham số p là ...(2)... và d là số chữ số phần thập phân."**

- **A.** decimal(p,d) hoặc numeric(p,d) / tổng số chữ số tối đa
- **B.** float(p,d) / dung lượng bộ nhớ tối đa tính theo megabyte
- **C.** real(p,d) / số lượng các thuộc tính khóa ngoại của bảng
- **D.** money(p,d) / tỷ giá hối đoái quy đổi sang đơn vị tiền tệ

> **Đáp án đúng:** **A** — *decimal(p,d) hoặc numeric(p,d) / tổng số chữ số tối đa*
>
> **Giải thích chi tiết:** Cú pháp decimal(p, d) hoặc numeric(p, d): p (precision) là tổng số chữ số tối đa (cả phần nguyên và thập phân), d (scale) là số chữ số sau dấu phẩy.

---

#### Câu 5 (db-c3-d2-005) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Nhận định nào sau đây là HOÀN TOÀN SAI về kiểu chuỗi ký tự trong hệ quản trị SQL Server?**

- **A.** Kiểu nvarchar(n) sử dụng 2 bytes cho mỗi ký tự để hỗ trợ Unicode
- **B.** Kiểu nvarchar(n) sử dụng 1 byte cho mỗi ký tự nên tiết kiệm đĩa
- **C.** Kiểu varchar(n) chỉ lưu trữ các ký tự Non-Unicode không có dấu
- **D.** Kiểu char(n) tự động điền thêm khoảng trắng cho đủ n ký tự quy định

> **Đáp án đúng:** **B** — *Kiểu nvarchar(n) sử dụng 1 byte cho mỗi ký tự nên tiết kiệm đĩa*
>
> **Giải thích chi tiết:** Nhận định A sai vì nvarchar là kiểu Unicode, bắt buộc sử dụng 2 bytes cho mỗi ký tự chứ không phải 1 byte.

---

#### Câu 6 (db-c3-d2-006) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho các nhận định sau về các phương án sao lưu (Backup) trong SQL Server:
(I) Full Backup sao lưu toàn bộ cơ sở dữ liệu bao gồm cả transaction log.
(II) Differential Backup chỉ sao lưu những thay đổi kể từ lần Full Backup gần nhất.
(III) Transaction Log Backup chỉ khả dụng khi cơ sở dữ liệu ở chế độ Simple Recovery.
Khẳng định nào sau đây là ĐÚNG?**

- **A.** Chỉ có duy nhất nhận định (III) là nhận định hoàn toàn đúng đắn
- **B.** Cả ba nhận định (I), (II) và (III) đều là những nhận định chính xác
- **C.** Chỉ có nhận định (I) và (II) đúng, nhận định (III) là sai
- **D.** Tất cả ba nhận định trên đều là những nhận định hoàn toàn sai lệch

> **Đáp án đúng:** **C** — *Chỉ có nhận định (I) và (II) đúng, nhận định (III) là sai*
>
> **Giải thích chi tiết:** Nhận định (I) và (II) đúng. Nhận định (III) sai vì ở chế độ Simple Recovery, Transaction Log tự động bị cắt tỉa (truncate) nên KHÔNG THỂ thực hiện Log Backup (phải dùng Full hoặc Bulk-Logged Recovery).

---

#### Câu 7 (db-c3-d2-007) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**So sánh giữa biểu thức nchar(10) và nvarchar(10) khi cùng lưu chuỗi N'Hà Nội' (6 ký tự): Sự khác biệt dung lượng bộ nhớ thực tế là gì?**

- **A.** nchar(10) tốn 40 bytes bộ nhớ, còn nvarchar(10) tốn 20 bytes bộ nhớ đệm
- **B.** Cả hai kiểu dữ liệu trên đều tốn chính xác đúng 12 bytes bộ nhớ lưu trữ
- **C.** nchar(10) tốn 10 bytes bộ nhớ, còn nvarchar(10) chỉ tốn đúng 6 bytes đĩa
- **D.** nchar(10) tốn đúng 20 bytes cố định, nvarchar(10) tốn 14 bytes (2*6 + 2)

> **Đáp án đúng:** **D** — *nchar(10) tốn đúng 20 bytes cố định, nvarchar(10) tốn 14 bytes (2*6 + 2)*
>
> **Giải thích chi tiết:** nchar(10) luôn tốn cố định 10 * 2 = 20 bytes. nvarchar(10) lưu 6 ký tự sẽ tốn: 6 * 2 bytes + 2 bytes overhead lưu độ dài = 14 bytes.

---

#### Câu 8 (db-c3-d2-008) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Cột SoDienThoai lưu giá trị số bắt đầu bằng số 0 (ví dụ: 0912345678). Nếu người thiết kế chọn kiểu dữ liệu là int thì hậu quả gì sẽ xảy ra?**

- **A.** Số 0 đứng đầu sẽ tự động bị biến mất và giá trị bị lưu thành 912345678
- **B.** Hệ thống SQL Server sẽ báo lỗi kiểu dữ liệu và từ chối nhập số điện thoại
- **C.** Số điện thoại tự động chuyển thành số âm để cảnh báo người dùng nhập sai
- **D.** Toàn bộ các số điện thoại khác trong bảng sẽ bị đồng bộ hóa theo số mới

> **Đáp án đúng:** **A** — *Số 0 đứng đầu sẽ tự động bị biến mất và giá trị bị lưu thành 912345678*
>
> **Giải thích chi tiết:** Trong toán học và khoa học máy tính, kiểu số nguyên (int) không lưu giữ các số 0 vô nghĩa ở đầu chuỗi (leading zeros). Số 0912345678 sẽ bị biến thành 912345678. Số điện thoại bắt buộc phải lưu bằng varchar/char.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người thấy số điện thoại toàn chữ số nên chọn kiểu số int.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy mất chữ số 0 đầu chuỗi khi lưu số điện thoại bằng kiểu số nguyên`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục II.1.a & II.2.a*
> - 💡 **Mẹo hóa giải:** Mã số, số điện thoại, số CCCD có số 0 ở đầu ➔ BẮT BUỘC dùng char/varchar, KHÔNG dùng số nguyên int.

---

#### Câu 9 (db-c3-d2-009) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Khi thực hiện so sánh hai giá trị thực: float và real bằng toán tử bằng (Ví dụ: WHERE GiaTriFloat = GiaTriReal). Hiện tượng kỹ thuật nào thường xuyên xảy ra?**

- **A.** Hệ thống tự động ép kiểu chính xác tuyệt đối mà không có sai lệch nào
- **B.** Phép so sánh bằng thường thất bại do sai số làm tròn của số chấm động
- **C.** SQL Server tự động chuyển đổi hai số sang hệ số nhị phân để so khớp
- **D.** Hệ quản trị CSDL ném lỗi dừng khẩn cấp do không hỗ trợ so sánh số thực

> **Đáp án đúng:** **B** — *Phép so sánh bằng thường thất bại do sai số làm tròn của số chấm động*
>
> **Giải thích chi tiết:** Kiểu float và real là kiểu số xấp xỉ gần đúng (approximate data types) tuân theo chuẩn IEEE 754. Do sai số làm tròn nhị phân, việc so sánh bằng chính xác (=) giữa các số thực hầu như luôn dẫn đến kết quả sai lệch ngoài ý muốn.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh nghĩ 0.1 float bằng 0.1 real, nhưng biểu diễn bit nhị phân khác nhau.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy sai số nhị phân dấu chấm động (Floating point approximate comparison)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục II.1.b*
> - 💡 **Mẹo hóa giải:** Số float/real không bao giờ nên so sánh bằng (=). Cần độ chính xác tuyệt đối phải dùng decimal/numeric.

---

#### Câu 10 (db-c3-d2-010) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Xét câu lệnh: SELECT CAST('2024-02-30' AS datetime); Phản ứng chính xác của hệ quản trị cơ sở dữ liệu SQL Server khi chạy lệnh này là gì?**

- **A.** Hệ thống tự động làm tròn lùi về ngày 29 tháng 2 năm 2024 nhuận trước đó
- **B.** Hệ thống tự động làm tròn thành ngày mùng 1 tháng 3 năm 2024 tiếp theo
- **C.** Báo lỗi chuyển đổi chuỗi sang ngày giờ do ngày 30 tháng 2 không tồn tại
- **D.** Giá trị trả về là NULL và câu truy vấn kết thúc thành công êm đềm

> **Đáp án đúng:** **C** — *Báo lỗi chuyển đổi chuỗi sang ngày giờ do ngày 30 tháng 2 không tồn tại*
>
> **Giải thích chi tiết:** Tháng 2 không bao giờ có ngày 30. SQL Server sẽ lập tức báo lỗi Conversion failed when converting date and/or time from character string.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người tưởng SQL Server sẽ tự động làm tròn sang tháng tiếp theo.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy tính hợp lệ lịch pháp của kiểu dữ liệu datetime (Invalid calendar date conversion)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục II.1.b*
> - 💡 **Mẹo hóa giải:** SQL Server kiểm tra chặt chẽ lịch vạn niên Gregorian. Ngày không tồn tại trong thực tế = Lỗi chuyển đổi ngay lập tức!

---

### 📌 CHUYÊN ĐỀ 2: ĐỊNH NGHĨA DDL, CẬP NHẬT DML & RÀNG BUỘC TOÀN VẸN (Câu 11 - 20)

#### Câu 11 (db-c3-d2-011) — [🟢 DỄ (NHẬN BIẾT)]

**Lệnh SQL nào sau đây dùng để định nghĩa và tạo mới một cơ sở dữ liệu có tên là QLBanHang?**

- **A.** Sử dụng câu lệnh chuẩn: BUILD DATABASE QLBanHang;
- **B.** Sử dụng câu lệnh chuẩn: CREATE SCHEMA QLBanHang;
- **C.** Sử dụng câu lệnh chuẩn: MAKE DATABASE QLBanHang;
- **D.** Sử dụng câu lệnh chuẩn: CREATE DATABASE QLBanHang;

> **Đáp án đúng:** **D** — *Sử dụng câu lệnh chuẩn: CREATE DATABASE QLBanHang;*
>
> **Giải thích chi tiết:** Cú pháp DDL tạo mới CSDL trong SQL Server: CREATE DATABASE <TênCSDL>.

---

#### Câu 12 (db-c3-d2-012) — [🟢 DỄ (NHẬN BIẾT)]

**Trong câu lệnh CREATE TABLE, thuộc tính DEFAULT (0) đặt sau định nghĩa của một cột mang ý nghĩa gì?**

- **A.** Tự động điền giá trị 0 vào cột nếu khi chèn người dùng không chỉ định
- **B.** Cột chỉ được phép nhận duy nhất giá trị 0 và không nhận số nào khác
- **C.** Giá trị của cột sẽ tự động bị giảm về 0 sau mỗi lần máy chủ khởi động
- **D.** Bắt buộc người dùng phải gõ thủ công số 0 khi thực hiện chèn dữ liệu

> **Đáp án đúng:** **A** — *Tự động điền giá trị 0 vào cột nếu khi chèn người dùng không chỉ định*
>
> **Giải thích chi tiết:** Ràng buộc DEFAULT cung cấp một giá trị mặc định cho cột khi lệnh INSERT không cung cấp giá trị cho cột đó.

---

#### Câu 13 (db-c3-d2-013) — [🟢 DỄ (NHẬN BIẾT)]

**Để chèn một bản ghi mới vào bảng NhanVien gồm đầy đủ các cột theo thứ tự thiết kế, cú pháp nào sau đây là ĐÚNG?**

- **A.** ADD ROW NhanVien VALUES ('NV01', N'Lê Văn An', 3000, 1);
- **B.** INSERT INTO NhanVien VALUES ('NV01', N'Lê Văn An', 3000, 1);
- **C.** UPDATE NhanVien INSERT ('NV01', N'Lê Văn An', 3000, 1);
- **D.** INSERT ROW TO NhanVien SET ('NV01', N'Lê Văn An', 3000, 1);

> **Đáp án đúng:** **B** — *INSERT INTO NhanVien VALUES ('NV01', N'Lê Văn An', 3000, 1);*
>
> **Giải thích chi tiết:** Cú pháp chuẩn của lệnh chèn dữ liệu DML: INSERT INTO <TênBảng> VALUES (<DanhSáchGiáTrị>).

---

#### Câu 14 (db-c3-d2-014) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Hành động ON UPDATE CASCADE trong khai báo ràng buộc khóa ngoại (FOREIGN KEY) có ý nghĩa như thế nào?**

- **A.** Hệ thống ngăn chặn tuyệt đối không cho phép sửa đổi khóa chính bảng cha
- **B.** Khi khóa chính bảng cha thay đổi, toàn bộ bảng con tự động bị xóa sạch
- **C.** Khi khóa chính của bảng cha thay đổi, khóa ngoại bảng con tự đổi theo
- **D.** Tự động thiết lập giá trị khóa ngoại ở bảng con về giá trị mặc định 0

> **Đáp án đúng:** **C** — *Khi khóa chính của bảng cha thay đổi, khóa ngoại bảng con tự đổi theo*
>
> **Giải thích chi tiết:** ON UPDATE CASCADE quy định: Khi giá trị khóa chính ở bảng cha được cập nhật, các giá trị khóa ngoại tương ứng ở bảng con sẽ tự động được cập nhật đồng bộ theo.

---

#### Câu 15 (db-c3-d2-015) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Câu lệnh nào sau đây cập nhật tăng lương thêm 10% cho tất cả nhân viên thuộc phòng số 5 trong bảng NhanVien?**

- **A.** UPDATE Luong IN NhanVien SET 1.1 WHERE Phong EQUAL 5;
- **B.** ALTER NhanVien MODIFY Luong = Luong * 1.1 WHERE Phong = 5;
- **C.** MODIFY TABLE NhanVien SET Luong = Luong + 10% WHERE Phong = 5;
- **D.** UPDATE NhanVien SET Luong = Luong * 1.1 WHERE Phong = 5;

> **Đáp án đúng:** **D** — *UPDATE NhanVien SET Luong = Luong * 1.1 WHERE Phong = 5;*
>
> **Giải thích chi tiết:** Cú pháp chuẩn của lệnh cập nhật DML: UPDATE <TênBảng> SET <Cột> = <BiểuThức> WHERE <ĐiềuKiện>.

---

#### Câu 16 (db-c3-d2-016) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Phát biểu nào sau đây là NHẬN ĐỊNH SAI khi nói về sự khác nhau giữa câu lệnh DELETE và câu lệnh TRUNCATE TABLE?**

- **A.** Cả DELETE và TRUNCATE TABLE đều cho phép chỉ định điều kiện WHERE
- **B.** DELETE có thể xóa từng dòng có chọn lọc thông qua mệnh đề WHERE
- **C.** TRUNCATE TABLE giải phóng toàn bộ trang đĩa và không hỗ trợ WHERE
- **D.** TRUNCATE TABLE thường thực thi với tốc độ nhanh hơn nhiều so với DELETE

> **Đáp án đúng:** **A** — *Cả DELETE và TRUNCATE TABLE đều cho phép chỉ định điều kiện WHERE*
>
> **Giải thích chi tiết:** Nhận định A sai vì TRUNCATE TABLE tuyệt đối không hỗ trợ mệnh đề WHERE (luôn xóa sạch 100% dữ liệu của toàn bộ bảng).

---

#### Câu 17 (db-c3-d2-017) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho lệnh: ALTER TABLE SinhVien ADD CONSTRAINT CK_Diem CHECK (Diem >= 0 AND Diem <= 10); Ràng buộc này đảm bảo điều gì?**

- **A.** Sinh viên có điểm số nhỏ hơn 0 sẽ tự động được hệ thống làm tròn về 0
- **B.** Điểm số của sinh viên khi nhập vào bắt buộc phải nằm trong đoạn [0, 10]
- **C.** Mỗi sinh viên bắt buộc phải thi tối thiểu 10 môn học trong một học kỳ
- **D.** Chỉ cho phép tối đa 10 sinh viên được nhập điểm số vào trong hệ thống

> **Đáp án đúng:** **B** — *Điểm số của sinh viên khi nhập vào bắt buộc phải nằm trong đoạn [0, 10]*
>
> **Giải thích chi tiết:** Ràng buộc CHECK (Diem >= 0 AND Diem <= 10) kiểm tra toàn vẹn miền giá trị của cột Diem, chỉ cho phép dữ liệu từ 0 đến 10.

---

#### Câu 18 (db-c3-d2-018) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Bảng DonHang có ràng buộc CHECK (NgayGiao >= NgayDat). Lập trình viên chạy lệnh: INSERT INTO DonHang(MaDH, NgayDat, NgayGiao) VALUES ('DH01', '2024-05-10', NULL); Lệnh có thực thi được không?**

- **A.** Hệ thống tự động điền NgayGiao bằng đúng NgayDat để thỏa mãn ràng buộc
- **B.** Bị từ chối vì mọi giá trị NULL đều tự động biến thành sai trong mệnh đề CHECK
- **C.** Thực thi thành công vì điều kiện CHECK đánh giá NULL cho kết quả UNKNOWN
- **D.** Báo lỗi vi phạm toàn vẹn thực thể vì khóa chính không được phép chứa ngày

> **Đáp án đúng:** **C** — *Thực thi thành công vì điều kiện CHECK đánh giá NULL cho kết quả UNKNOWN*
>
> **Giải thích chi tiết:** Bẫy tư duy kinh điển: Ràng buộc CHECK chỉ từ chối bản ghi khi điều kiện logic trả về FALSE. Nếu điều kiện đánh giá ra UNKNOWN (do có NULL trong biểu thức so sánh), ràng buộc CHECK vẫn CHẤP NHẬN cho chèn dữ liệu!
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ NULL làm điều kiện sai nên bị từ chối, nhưng CHECK chỉ từ chối khi kết quả là FALSE.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy giá trị NULL trong ràng buộc CHECK (Three-valued logic in CHECK constraint)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục III.1.a*
> - 💡 **Mẹo hóa giải:** Ràng buộc CHECK: Chỉ từ chối khi FALSE. Nếu là UNKNOWN (do dính NULL) ➔ VẪN HỢP LỆ (Được chèn)!

---

#### Câu 19 (db-c3-d2-019) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho bảng NhanVien có khóa chính MaNV (kiểu char(5)). Người dùng chèn dòng thứ nhất với MaNV = 'NV01 ', dòng thứ hai với MaNV = 'NV01'. SQL Server phản ứng thế nào?**

- **A.** Hệ thống tự động gắn thêm số thứ tự ngẫu nhiên vào đuôi của mã nhân viên
- **B.** Chèn thành công cả hai dòng vì độ dài hai chuỗi ký tự này hoàn toàn khác nhau
- **C.** Tự động ghi đè dòng thứ hai lên dòng thứ nhất mà không thông báo lỗi nào
- **D.** Báo lỗi vi phạm khóa chính trùng lặp do SQL Server bỏ qua khoảng trắng cuối

> **Đáp án đúng:** **D** — *Báo lỗi vi phạm khóa chính trùng lặp do SQL Server bỏ qua khoảng trắng cuối*
>
> **Giải thích chi tiết:** Theo chuẩn ANSI/ISO SQL-92 và cơ chế so sánh chuỗi của SQL Server: Khi so sánh chuỗi, SQL Server tự động đệm khoảng trắng (trailing spaces) vào chuỗi ngắn hơn. Do đó 'NV01 ' và 'NV01' được coi là TRÙNG NHAU, dẫn đến vi phạm ràng buộc khóa chính Primary Key!
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Lập trình viên hay nghĩ 'NV01 ' (5 ký tự) khác 'NV01' (4 ký tự) nên không trùng khóa.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy khoảng trắng cuối chuỗi khi so sánh khóa chính (Trailing space padding in string comparison)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục II.2 & III.1*
> - 💡 **Mẹo hóa giải:** SQL Server bỏ qua khoảng trắng ở cuối khi so sánh chuỗi! 'ABC ' và 'ABC' là TRÙNG KHÓA CHÍNH!

---

#### Câu 20 (db-c3-d2-020) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Khi định nghĩa ràng buộc khóa ngoại (FOREIGN KEY) tham chiếu đến một bảng khác, điều kiện BẮT BUỘC đối với cột được tham chiếu ở bảng cha là gì?**

- **A.** Cột ở bảng cha bắt buộc phải có ràng buộc PRIMARY KEY hoặc UNIQUE
- **B.** Cột ở bảng cha bắt buộc phải có kiểu dữ liệu là số nguyên tự tăng IDENTITY
- **C.** Cột ở bảng cha bắt buộc phải có tên gọi hoàn toàn trùng khớp với bảng con
- **D.** Bảng cha bắt buộc phải có số lượng dòng dữ liệu lớn hơn bảng con tham chiếu

> **Đáp án đúng:** **A** — *Cột ở bảng cha bắt buộc phải có ràng buộc PRIMARY KEY hoặc UNIQUE*
>
> **Giải thích chi tiết:** Một cột chỉ có thể được làm đích tham chiếu cho khóa ngoại (FOREIGN KEY) nếu cột đó là khóa chính (PRIMARY KEY) hoặc có ràng buộc duy nhất (UNIQUE constraint) ở bảng cha.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ khóa ngoại CHỈ ĐƯỢC trỏ về Khóa chính (PRIMARY KEY).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy cột đích của khóa ngoại có thể là UNIQUE (FK target can be UNIQUE constraint)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục III.1.a*
> - 💡 **Mẹo hóa giải:** Khóa ngoại KHÔNG CHỈ trỏ về PRIMARY KEY, mà CÓ THỂ trỏ về bất kỳ cột nào có ràng buộc UNIQUE!

---

### 📌 CHUYÊN ĐỀ 3: TRUY VẤN DQL: SELECT, LỌC, GOM NHÓM & PHÉP JOIN (Câu 21 - 30)

#### Câu 21 (db-c3-d2-021) — [🟢 DỄ (NHẬN BIẾT)]

**Trong câu lệnh SELECT, để sắp xếp kết quả trả về theo thứ tự giảm dần của một cột, ta sử dụng từ khóa nào?**

- **A.** Từ khóa ASC đặt ngay sau tên cột trong mệnh đề ORDER BY
- **B.** Từ khóa DESC đặt ngay sau tên cột trong mệnh đề ORDER BY
- **C.** Từ khóa DOWN đặt ngay sau tên cột trong mệnh đề GROUP BY
- **D.** Từ khóa DECREASE đặt ngay sau tên cột trong mệnh đề WHERE

> **Đáp án đúng:** **B** — *Từ khóa DESC đặt ngay sau tên cột trong mệnh đề ORDER BY*
>
> **Giải thích chi tiết:** Cú pháp sắp xếp giảm dần trong SQL: ORDER BY <TênCột> DESC. (Mặc định không ghi hoặc ASC là tăng dần).

---

#### Câu 22 (db-c3-d2-022) — [🟢 DỄ (NHẬN BIẾT)]

**Để kiểm tra xem một thuộc tính có chứa giá trị rỗng (chưa xác định) hay không trong mệnh đề WHERE, ta dùng cú pháp nào?**

- **A.** Sử dụng cú pháp chuỗi: TenCot EQUAL 'NULL' trong biểu thức
- **B.** Sử dụng cú pháp so sánh: TenCot = NULL (hoặc TenCot <> NULL)
- **C.** Sử dụng cú pháp chuẩn: TenCot IS NULL (hoặc IS NOT NULL)
- **D.** Sử dụng cú pháp hàm: EMPTY(TenCot) == TRUE trong mệnh đề

> **Đáp án đúng:** **C** — *Sử dụng cú pháp chuẩn: TenCot IS NULL (hoặc IS NOT NULL)*
>
> **Giải thích chi tiết:** Trong SQL, giá trị NULL đại diện cho trạng thái chưa biết, không thể so sánh bằng toán tử `=` hay `<>`. Bắt buộc phải dùng toán tử chuyên dụng: `IS NULL` hoặc `IS NOT NULL`.

---

#### Câu 23 (db-c3-d2-023) — [🟢 DỄ (NHẬN BIẾT)]

**Phép kết nối nào giữa hai bảng trả về tích Descartes của tất cả các dòng dữ liệu (mỗi dòng bảng 1 kết hợp mọi dòng bảng 2)?**

- **A.** Phép kết nối tự thân SELF JOIN giữa bảng với chính bản thân nó
- **B.** Phép kết nối trong INNER JOIN có điều kiện kết nối bằng
- **C.** Phép kết nối ngoài toàn phần FULL OUTER JOIN giữa hai quan hệ
- **D.** Phép kết nối chéo CROSS JOIN (hoặc viết FROM BảngA, BảngB)

> **Đáp án đúng:** **D** — *Phép kết nối chéo CROSS JOIN (hoặc viết FROM BảngA, BảngB)*
>
> **Giải thích chi tiết:** CROSS JOIN là phép tích Descartes: Nếu bảng A có m dòng và bảng B có n dòng thì kết quả sẽ gồm đúng m * n dòng.

---

#### Câu 24 (db-c3-d2-024) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Mệnh đề ...(1)... dùng để lọc các dòng dữ liệu đơn lẻ trước khi gom nhóm, trong khi mệnh đề ...(2)... dùng để lọc các nhóm sau khi gom nhóm."**

- **A.** WHERE / HAVING (lọc nhóm dựa trên hàm kết hợp)
- **B.** HAVING / WHERE (lọc từng bản ghi đơn lẻ trong bảng)
- **C.** ORDER BY / GROUP BY (gom nhóm các thuộc tính)
- **D.** SELECT / FROM (xác định nguồn dữ liệu đầu vào)

> **Đáp án đúng:** **A** — *WHERE / HAVING (lọc nhóm dựa trên hàm kết hợp)*
>
> **Giải thích chi tiết:** Quy tắc phân biệt nền tảng: WHERE lọc các dòng trước khi gom nhóm; HAVING lọc các nhóm sau khi đã gom nhóm và tính toán hàm kết hợp.

---

#### Câu 25 (db-c3-d2-025) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Biểu thức so sánh chuỗi: WHERE MaSV LIKE '[A-C][0-9][0-9]' sẽ khớp với mã sinh viên nào dưới đây?**

- **A.** Khớp với mã sinh viên D12 (bắt đầu bằng D và tiếp theo là 2 chữ số)
- **B.** Khớp với mã sinh viên B12 (bắt đầu bằng B và tiếp theo là 2 chữ số)
- **C.** Khớp với mã sinh viên A1 (bắt đầu bằng A và tiếp theo là 1 chữ số)
- **D.** Khớp với mã sinh viên ABC (bắt đầu bằng A và tiếp theo là chữ cái)

> **Đáp án đúng:** **B** — *Khớp với mã sinh viên B12 (bắt đầu bằng B và tiếp theo là 2 chữ số)*
>
> **Giải thích chi tiết:** Ký tự đại diện `[A-C]` là 1 ký tự A, B hoặc C; `[0-9]` là 1 chữ số từ 0 đến 9. Do đó mã B12 thỏa mãn hoàn toàn.

---

#### Câu 26 (db-c3-d2-026) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho CSDL Quản lý bán hàng. Câu truy vấn nào sau đây tìm mã và tên các mặt hàng có giá bán lớn hơn 10 và số lượng tồn kho ít hơn 20 (Bài tập 2)?**

- **A.** SELECT * FROM HangHoa WHERE DonGia BETWEEN 10 AND 20;
- **B.** SELECT MaHG, TenHG FROM HangHoa WHERE DonGia > 10 OR SoLuong < 20;
- **C.** SELECT MaHG, TenHG FROM HangHoa WHERE DonGia > 10 AND SoLuong < 20;
- **D.** SELECT MaHG, TenHG FROM HangHoa HAVING DonGia > 10 AND SoLuong < 20;

> **Đáp án đúng:** **C** — *SELECT MaHG, TenHG FROM HangHoa WHERE DonGia > 10 AND SoLuong < 20;*
>
> **Giải thích chi tiết:** Bài tập 2 CSDL QLBanHang: Yêu cầu thỏa mãn đồng thời cả 2 điều kiện nên sử dụng toán tử logic AND trong mệnh đề WHERE.

---

#### Câu 27 (db-c3-d2-027) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho các nhận định sau về câu lệnh SELECT trong SQL Server:
(I) Mệnh đề TOP (N) dùng để giới hạn số lượng dòng kết quả trả về.
(II) Bí danh (Alias) đặt ở SELECT có thể dùng ngay trong mệnh đề WHERE của cùng câu lệnh.
(III) Mệnh đề ORDER BY luôn được thực thi sau cùng trong pipeline logic.
Khẳng định nào sau đây là ĐÚNG?**

- **A.** Tất cả ba nhận định trên đều là những nhận định hoàn toàn sai lệch
- **B.** Cả ba nhận định (I), (II) và (III) đều là những nhận định chính xác
- **C.** Chỉ có duy nhất nhận định (II) là nhận định hoàn toàn đúng đắn
- **D.** Chỉ có nhận định (I) và (III) đúng, nhận định (II) là sai

> **Đáp án đúng:** **D** — *Chỉ có nhận định (I) và (III) đúng, nhận định (II) là sai*
>
> **Giải thích chi tiết:** Nhận định (I) và (III) đúng. Nhận định (II) sai vì WHERE được thực thi trước SELECT, nên tại thời điểm xử lý WHERE, bí danh cột đặt ở SELECT chưa hề tồn tại (SQL Server sẽ báo lỗi Invalid column name).

---

#### Câu 28 (db-c3-d2-028) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Xét truy vấn: SELECT * FROM NhanVien WHERE Luong = NULL; Kết quả trả về của câu truy vấn này trong SQL Server là gì?**

- **A.** Luôn luôn trả về 0 dòng kết quả (rỗng) kể cả bảng có nhân viên có lương NULL
- **B.** Trả về tất cả những nhân viên thực sự chưa được nhập mức lương vào bảng
- **C.** Hệ thống báo lỗi cú pháp do toán tử so sánh bằng không thể đi cùng từ khóa
- **D.** Trả về tất cả nhân viên có mức lương bằng 0 do hệ thống tự động quy đổi

> **Đáp án đúng:** **A** — *Luôn luôn trả về 0 dòng kết quả (rỗng) kể cả bảng có nhân viên có lương NULL*
>
> **Giải thích chi tiết:** Trong SQL chuẩn (ANSI_NULLS ON): Bất kỳ phép so sánh bằng/khác với NULL (`Luong = NULL` hoặc `Luong <> NULL`) đều trả về UNKNOWN. Mệnh đề WHERE chỉ giữ lại các dòng đánh giá là TRUE. Do đó câu truy vấn luôn trả về TẬP RỖNG!
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh quen với ngôn ngữ lập trình khác nên viết Luong = NULL thay vì Luong IS NULL.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy so sánh bằng với NULL trong mệnh đề WHERE (Comparison with NULL yielding UNKNOWN)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a*
> - 💡 **Mẹo hóa giải:** Tuyệt đối KHÔNG BAO GIỜ viết col = NULL. Phải viết col IS NULL!

---

#### Câu 29 (db-c3-d2-029) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Lập trình viên muốn lọc phòng ban có tổng lương lớn hơn 50.000 và viết:
SELECT MaPB, SUM(Luong) AS TongLuong FROM NhanVien WHERE TongLuong > 50000 GROUP BY MaPB;
Lỗi kỹ thuật ở đây là gì?**

- **A.** Mệnh đề GROUP BY không hỗ trợ gom nhóm khi bí danh cột được đặt bằng chữ AS
- **B.** Bí danh TongLuong chưa tồn tại ở WHERE và hàm kết hợp SUM không được nằm ở WHERE
- **C.** Hàm SUM chỉ có thể áp dụng cho các cột kiểu số thực chứ không áp dụng cho lương
- **D.** Câu lệnh hoàn toàn chính xác theo chuẩn ANSI và sẽ chạy thành công mỹ mãn

> **Đáp án đúng:** **B** — *Bí danh TongLuong chưa tồn tại ở WHERE và hàm kết hợp SUM không được nằm ở WHERE*
>
> **Giải thích chi tiết:** Hai lỗi nghiêm trọng: 1) Bí danh TongLuong đặt ở SELECT chưa tồn tại khi WHERE thực thi; 2) Điều kiện lọc tổng lương phải dùng HAVING SUM(Luong) > 50000 chứ không thể dùng WHERE.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Lập trình viên hay tiện tay lấy bí danh ở SELECT ném xuống WHERE.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy sử dụng bí danh cột ở SELECT trong mệnh đề WHERE (Column alias in WHERE clause)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a*
> - 💡 **Mẹo hóa giải:** WHERE thực thi TRƯỚC SELECT! Bí danh ở SELECT chưa tồn tại ở WHERE. Muốn lọc hàm kết hợp phải dùng HAVING!

---

#### Câu 30 (db-c3-d2-030) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho hai bảng A (chứa các giá trị: 1, 2) và B (chứa các giá trị: 2, 3, NULL). Khi thực hiện phép FULL OUTER JOIN giữa A và B trên điều kiện A.id = B.id, kết quả có bao nhiêu dòng?**

- **A.** Có đúng 5 dòng do phép tích Descartes tự động sinh ra các cặp kết hợp
- **B.** Có đúng 2 dòng vì chỉ có giá trị 2 là trùng khớp nhau giữa hai bảng dữ liệu
- **C.** Có đúng 4 dòng (gồm cặp ghép (2,2), dòng (1,NULL), dòng (NULL,3), dòng (NULL,NULL))
- **D.** Có đúng 3 dòng vì giá trị NULL bị loại bỏ hoàn toàn khỏi phép kết nối ngoài

> **Đáp án đúng:** **C** — *Có đúng 4 dòng (gồm cặp ghép (2,2), dòng (1,NULL), dòng (NULL,3), dòng (NULL,NULL))*
>
> **Giải thích chi tiết:** FULL OUTER JOIN giữ lại: 1) Cặp khớp: (2, 2); 2) Dòng bên A không khớp: (1, NULL); 3) Dòng bên B không khớp: (NULL, 3) và (NULL, NULL). Tổng cộng là 4 dòng dữ liệu.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ giá trị NULL ở bảng B sẽ bị bỏ qua khi Join.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy bảo toàn giá trị NULL trong phép kết nối ngoài toàn phần (FULL OUTER JOIN with NULLs)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a*
> - 💡 **Mẹo hóa giải:** FULL OUTER JOIN bảo toàn TẤT CẢ các dòng của CẢ HAI BẢNG, kể cả dòng có giá trị NULL!

---

### 📌 CHUYÊN ĐỀ 4: TRUY VẤN LỒNG, KHUNG NHÌN (VIEW) & BÀI TẬP CSDL QLBANHANG (Câu 31 - 40)

#### Câu 31 (db-c3-d2-031) — [🟢 DỄ (NHẬN BIẾT)]

**Một trong những ưu điểm vượt trội nhất của việc sử dụng Khung nhìn (View) trong bảo mật CSDL là gì?**

- **A.** Tự động sao lưu dữ liệu sang máy chủ phụ trợ mỗi khi có người dùng truy cập
- **B.** Tự động mã hóa toàn bộ dữ liệu trên đĩa cứng bằng các thuật toán quân sự
- **C.** Ngăn chặn hoàn toàn các cuộc tấn công từ chối dịch vụ vào cổng máy chủ
- **D.** Cho phép phân quyền người dùng chỉ được xem một số cột hoặc dòng nhất định

> **Đáp án đúng:** **D** — *Cho phép phân quyền người dùng chỉ được xem một số cột hoặc dòng nhất định*
>
> **Giải thích chi tiết:** View là công cụ bảo mật tuyệt vời: Cho phép tạo ra khung nhìn chỉ chứa các cột không nhạy cảm (ẩn đi cột Lương, Mật khẩu...) và phân quyền cho người dùng trên View đó thay vì trên bảng gốc.

---

#### Câu 32 (db-c3-d2-032) — [🟢 DỄ (NHẬN BIẾT)]

**Cú pháp chuẩn T-SQL nào sau đây dùng để định nghĩa và tạo một khung nhìn có tên là View_NhanVienPhong5?**

- **A.** CREATE VIEW View_NhanVienPhong5 AS SELECT * FROM NhanVien WHERE Phong = 5;
- **B.** MAKE VIEW View_NhanVienPhong5 FROM SELECT * FROM NhanVien WHERE Phong = 5;
- **C.** BUILD VIEW View_NhanVienPhong5 ON TABLE NhanVien WHERE Phong = 5;
- **D.** CREATE VIRTUAL TABLE View_NhanVienPhong5 AS SELECT * FROM NhanVien;

> **Đáp án đúng:** **A** — *CREATE VIEW View_NhanVienPhong5 AS SELECT * FROM NhanVien WHERE Phong = 5;*
>
> **Giải thích chi tiết:** Cú pháp chuẩn tạo View: CREATE VIEW <TênView> AS <CâuLệnhSelect>.

---

#### Câu 33 (db-c3-d2-033) — [🟢 DỄ (NHẬN BIẾT)]

**Toán tử logic nào sau đây trả về TRUE nếu giá trị kiểm tra lớn hơn TẤT CẢ các giá trị trong tập kết quả của truy vấn con?**

- **A.** Toán tử so sánh kết hợp tập hợp: > ANY (Subquery)
- **B.** Toán tử so sánh kết hợp tập hợp: > ALL (Subquery)
- **C.** Toán tử so sánh kết hợp tập hợp: > SOME (Subquery)
- **D.** Toán tử kiểm tra sự tồn tại phần tử: IN (Subquery)

> **Đáp án đúng:** **B** — *Toán tử so sánh kết hợp tập hợp: > ALL (Subquery)*
>
> **Giải thích chi tiết:** Cú pháp `> ALL (Subquery)` đòi hỏi giá trị phải lớn hơn giá trị lớn nhất trong tập con (lớn hơn TẤT CẢ các phần tử). Ngược lại `> ANY` chỉ cần lớn hơn ít nhất một phần tử.

---

#### Câu 34 (db-c3-d2-034) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong CSDL Bán Hàng (Bài tập 3), câu truy vấn nào sau đây tìm thông tin những khách hàng đã từng mua mặt hàng "Áo Việt Tiến"?**

- **A.** SELECT DISTINCT KH.* FROM KhachHang KH, DonDatHang D, ChiTiet_HD C, HangHoa H WHERE KH.MaKH = D.SoHD AND D.SoHD = C.SoHD AND C.MaHG = H.MaHG AND H.TenHG = N'Áo Việt Tiến';
- **B.** SELECT DISTINCT KH.* FROM KhachHang KH, DonDatHang D, ChiTiet_HD C, HangHoa H WHERE KH.MaKH = D.MaKH AND D.SoHD = C.SoHD AND C.MaHG = H.MaHG AND H.MaHG = N'Áo Việt Tiến';
- **C.** SELECT DISTINCT KH.* FROM KhachHang KH, DonDatHang D, ChiTiet_HD C, HangHoa H WHERE KH.MaKH = D.MaKH AND D.SoHD = C.SoHD AND C.MaHG = H.MaHG AND H.TenHG = N'Áo Việt Tiến';
- **D.** SELECT DISTINCT KH.* FROM KhachHang KH, DonDatHang D, ChiTiet_HD C, HangHoa H WHERE KH.MaKH = D.MaKH AND D.MaKH = C.SoHD AND C.MaHG = H.MaHG AND H.TenHG = N'Áo Việt Tiến';

> **Đáp án đúng:** **C** — *SELECT DISTINCT KH.* FROM KhachHang KH, DonDatHang D, ChiTiet_HD C, HangHoa H WHERE KH.MaKH = D.MaKH AND D.SoHD = C.SoHD AND C.MaHG = H.MaHG AND H.TenHG = N'Áo Việt Tiến';*
>
> **Giải thích chi tiết:** Để tìm khách hàng mua áo Việt Tiến, ta kết nối các bảng liên quan: KhachHang qua DonDatHang qua ChiTiet_HD qua HangHoa và lọc điều kiện H.TenHG = N'Áo Việt Tiến'.

---

#### Câu 35 (db-c3-d2-035) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong CSDL Bán Hàng (Bài tập 8), câu truy vấn nào thống kê chính xác số lượng hóa đơn đã lập của mỗi nhân viên?**

- **A.** SELECT MaNV, TOTAL(SoHD) AS SoHoaDon FROM DonDatHang GROUP BY MaNV;
- **B.** SELECT MaNV, SUM(SoHD) AS TongSoHoaDon FROM DonDatHang GROUP BY MaNV;
- **C.** SELECT MaNV, COUNT(MaNV) AS SoHoaDon FROM DonDatHang WHERE MaNV > 0;
- **D.** SELECT MaNV, COUNT(SoHD) AS SoHoaDon FROM DonDatHang GROUP BY MaNV;

> **Đáp án đúng:** **D** — *SELECT MaNV, COUNT(SoHD) AS SoHoaDon FROM DonDatHang GROUP BY MaNV;*
>
> **Giải thích chi tiết:** Thống kê số hóa đơn đã lập của mỗi nhân viên: Ta gom nhóm theo MaNV trên bảng đơn hàng DonDatHang và dùng COUNT(SoHD): SELECT MaNV, COUNT(SoHD) AS SoHoaDon FROM DonDatHang GROUP BY MaNV.

---

#### Câu 36 (db-c3-d2-036) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho các nhận định sau về khả năng cập nhật dữ liệu (INSERT, UPDATE, DELETE) thông qua Khung nhìn (View):
(I) View chỉ được cập nhật khi nó dựa trên đúng một bảng cơ sở duy nhất.
(II) View chứa hàm kết hợp (SUM, AVG...) vẫn có thể chèn dữ liệu bình thường.
(III) View chứa mệnh đề DISTINCT thì tuyệt đối không thể cập nhật dữ liệu.
Khẳng định nào sau đây là ĐÚNG?**

- **A.** Chỉ có nhận định (I) và (III) đúng, nhận định (II) là sai
- **B.** Cả ba nhận định (I), (II) và (III) đều là những nhận định chính xác
- **C.** Chỉ có duy nhất nhận định (II) là nhận định hoàn toàn đúng đắn
- **D.** Nhận định (I) là nhận định sai, nhận định (II) và (III) là đúng

> **Đáp án đúng:** **A** — *Chỉ có nhận định (I) và (III) đúng, nhận định (II) là sai*
>
> **Giải thích chi tiết:** Nhận định (I) và (III) đúng. Nhận định (II) sai vì View chứa hàm kết hợp (aggregate function), GROUP BY, HAVING hay DISTINCT đều KHÔNG THỂ thực hiện bất kỳ thao tác cập nhật (INSERT/UPDATE/DELETE) nào.

---

#### Câu 37 (db-c3-d2-037) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Truy vấn lồng tương quan (Correlated Subquery) là truy vấn con có chứa thuộc tính của ...(1)..., và câu truy vấn con này sẽ được thực thi ...(2)... cho mỗi dòng của truy vấn cha."**

- **A.** bảng ở từ điển dữ liệu / một lần duy nhất
- **B.** bảng ở truy vấn cha / lặp đi lặp lại nhiều lần
- **C.** bảng ở máy chủ phụ trợ / hoàn toàn độc lập
- **D.** bảng ở hệ thống ngoài / khi máy chủ rảnh rỗi

> **Đáp án đúng:** **B** — *bảng ở truy vấn cha / lặp đi lặp lại nhiều lần*
>
> **Giải thích chi tiết:** Đặc trưng của Correlated Subquery: Truy vấn con tham chiếu đến cột của truy vấn cha bên ngoài, do đó truy vấn con phải được thực thi lặp lại ứng với từng dòng được duyệt ở truy vấn cha.

---

#### Câu 38 (db-c3-d2-038) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống bẫy tối ưu hóa: Khi viết truy vấn kiểm tra sự tồn tại của dữ liệu, vì sao lập trình viên chuyên nghiệp luôn dùng SELECT 1 thay vì SELECT * trong mệnh đề EXISTS (SELECT 1 FROM ...)?**

- **A.** Vì SELECT 1 bắt buộc hệ thống phải quét toàn bộ các trang dữ liệu trên đĩa cứng
- **B.** Vì SELECT * sẽ bị hệ quản trị cơ sở dữ liệu ném lỗi cú pháp khi đặt trong EXISTS
- **C.** Vì EXISTS chỉ kiểm tra sự tồn tại của dòng, SELECT 1 hay * đều không ảnh hưởng hiệu năng
- **D.** Vì SELECT 1 sẽ tự động chuyển câu truy vấn lồng sang một phép kết nối tự nhiên

> **Đáp án đúng:** **C** — *Vì EXISTS chỉ kiểm tra sự tồn tại của dòng, SELECT 1 hay * đều không ảnh hưởng hiệu năng*
>
> **Giải thích chi tiết:** Bản chất cỗ máy SQL: Toán tử EXISTS chỉ kiểm tra xem tập con có trả về ít nhất 1 dòng hay không (TRUE/FALSE) mà không hề quan tâm đến danh sách cột trong SELECT. T-SQL optimizer tự động tối ưu hóa nên SELECT 1 hay SELECT * hay SELECT NULL trong EXISTS đều có hiệu năng tương đương nhau.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người lầm tưởng SELECT 1 chạy nhanh hơn SELECT * trong EXISTS vì không phải load các cột.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy nhận thức về hiệu năng của SELECT 1 vs SELECT * trong mệnh đề EXISTS`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a*
> - 💡 **Mẹo hóa giải:** Trong EXISTS, danh sách cột ở SELECT HOÀN TOÀN BỊ BỎ QUA. SELECT 1, SELECT * hay SELECT NULL đều tối ưu như nhau!

---

#### Câu 39 (db-c3-d2-039) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho View: CREATE VIEW View_BanHang AS SELECT H.MaHG, H.TenHG, C.SoLuong FROM HangHoa H INNER JOIN ChiTiet_HD C ON H.MaHG = C.MaHG; Người dùng chạy lệnh: DELETE FROM View_BanHang WHERE MaHG = 'HG01'; Phản ứng của SQL Server là gì?**

- **A.** Hệ thống tự động chuyển lệnh DELETE thành lệnh UPDATE cập nhật số lượng về 0
- **B.** Xóa thành công và toàn bộ dữ liệu ở cả bảng HangHoa và ChiTiet_HD đều bị xóa sạch
- **C.** Chỉ xóa dòng ở bảng ChiTiet_HD còn bảng HangHoa thì giữ nguyên dữ liệu gốc
- **D.** Báo lỗi không thể xóa dữ liệu từ View do View được tạo từ nhiều bảng cơ sở kết hợp

> **Đáp án đúng:** **D** — *Báo lỗi không thể xóa dữ liệu từ View do View được tạo từ nhiều bảng cơ sở kết hợp*
>
> **Giải thích chi tiết:** Quy tắc cập nhật qua View trong SQL Server: Lệnh DELETE tuyệt đối KHÔNG THỂ thực thi trên một View tham chiếu từ nhiều bảng cơ sở (View kết nối Join). SQL Server sẽ báo lỗi: View or function 'View_BanHang' is not updatable because the modification affects multiple base tables.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh nghĩ lệnh DELETE sẽ chạy được hoặc xóa được trên 1 trong 2 bảng.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy cấm DELETE trên View kết nối từ nhiều bảng cơ sở (Cannot DELETE on multi-table join view)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục V.1.b*
> - 💡 **Mẹo hóa giải:** View tạo từ 2 BẢNG TRỞ LÊN (JOIN) ➔ TUYỆT ĐỐI KHÔNG THỂ DELETE! (Chỉ có thể UPDATE trên đúng 1 bảng tại 1 thời điểm).

---

#### Câu 40 (db-c3-d2-040) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống tổng hợp: Khi thực hiện truy vấn so sánh hai biến mang giá trị NULL trong T-SQL: IF (NULL = NULL) PRINT 'Bằng nhau' ELSE PRINT 'Khác nhau'. Kết quả màn hình in ra là gì (trong cấu hình mặc định ANSI_NULLS ON)?**

- **A.** Màn hình in ra chữ Khác nhau vì biểu thức NULL = NULL cho kết quả là UNKNOWN (coi như FALSE)
- **B.** Màn hình in ra chữ Bằng nhau vì hai giá trị rỗng luôn luôn tương đương với nhau
- **C.** Hệ thống báo lỗi cú pháp do không thể đặt giá trị NULL vào trong biểu thức IF
- **D.** Màn hình không in ra bất kỳ dòng chữ nào và chương trình tự động thoát đột ngột

> **Đáp án đúng:** **A** — *Màn hình in ra chữ Khác nhau vì biểu thức NULL = NULL cho kết quả là UNKNOWN (coi như FALSE)*
>
> **Giải thích chi tiết:** Theo logic 3 trị (Three-valued logic) trong chuẩn ANSI_NULLS: Biểu thức (NULL = NULL) không trả về TRUE mà trả về UNKNOWN. Cấu trúc IF chỉ thực hiện nhánh THEN khi biểu thức là TRUE; đối với UNKNOWN hoặc FALSE nó đều nhảy vào nhánh ELSE. Do đó kết quả in ra là 'Khác nhau'!
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Hầu hết lập trình viên theo thói quen trực giác đều nghĩ NULL đương nhiên bằng NULL.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy logic ba trị: NULL so sánh với NULL trong T-SQL (NULL equals NULL traps to UNKNOWN)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 3, Mục II.2 & IV.2.a*
> - 💡 **Mẹo hóa giải:** Quy tắc bất hủ: NULL = NULL KHÔNG PHẢI LÀ TRUE! Nó là UNKNOWN (coi như False trong IF). Kết quả in ra Khác nhau!

---

### 📊 BẢNG ĐÁP ÁN NHANH — BỘ ĐỀ SỐ 2 (MÃ ĐỀ: DB-C3-D2)

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **1** | `B` | **11** | `D` | **21** | `B` | **31** | `D` |
| **2** | `C` | **12** | `A` | **22** | `C` | **32** | `A` |
| **3** | `D` | **13** | `B` | **23** | `D` | **33** | `B` |
| **4** | `A` | **14** | `C` | **24** | `A` | **34** | `C` |
| **5** | `B` | **15** | `D` | **25** | `B` | **35** | `D` |
| **6** | `C` | **16** | `A` | **26** | `C` | **36** | `A` |
| **7** | `D` | **17** | `B` | **27** | `D` | **37** | `B` |
| **8** | `A` | **18** | `C` | **28** | `A` | **38** | `C` |
| **9** | `B` | **19** | `D` | **29** | `B` | **39** | `D` |
| **10** | `C` | **20** | `A` | **30** | `C` | **40** | `A` |


