/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG III: NGÔN NGỮ SQL (STRUCTURED QUERY LANGUAGE) - TRANSACT-SQL
   BỘ ĐỀ SỐ 1 — 40 CÂU HỎI HỌC THUẬT CHUẨN MỰC
   MÃ BỘ ĐỀ: db-c3-d1-001 ĐẾN db-c3-d1-040
   TỶ LỆ ĐỘ KHÓ: 12 DỄ (30%) - 16 TRUNG BÌNH (40%) - 12 KHÓ/BẪY (30%)
   CHUẨN KỸ THUẬT: DELTA L <= 15 CHARS, CÂN BẰNG ĐÁP ÁN 10A-10B-10C-10D
   ============================================================ */

export const questionsDbCh3Part1 = [
  {
    "id": "db-c3-d1-001",
    "question": "Hệ quản trị cơ sở dữ liệu quan hệ SQL Server 2000 do tập đoàn công nghệ nào phát triển và phát hành?",
    "options": [
      "Tập đoàn Microsoft phát triển và thương mại hóa toàn cầu",
      "Tập đoàn Oracle nghiên cứu và giới thiệu trên thị trường",
      "Tập đoàn IBM thiết kế độc quyền cho các dòng máy lớn",
      "Tổ chức phần mềm mã nguồn mở Apache phát hành miễn phí"
    ],
    "answer": 0,
    "explanation": "SQL Server là hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) mạnh mẽ do Microsoft phát triển trên nền kiến trúc Client/Server.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d1-002",
    "question": "Ngôn ngữ Transact-SQL (T-SQL) được định nghĩa chuẩn xác theo tài liệu giáo trình là gì?",
    "options": [
      "Là ngôn ngữ truy vấn thuần túy chỉ có thể chạy trên Linux",
      "Là ngôn ngữ mở rộng của Microsoft bổ sung cấu trúc lập trình",
      "Là hệ điều hành nhúng chuyên dụng quản lý máy chủ cơ sở dữ liệu",
      "Là giao thức mạng dùng để mã hóa đường truyền dữ liệu máy chủ"
    ],
    "answer": 1,
    "explanation": "T-SQL là phiên bản mở rộng độc quyền của Microsoft dựa trên chuẩn ANSI/ISO SQL, tích hợp thêm các cấu trúc lập trình như biến, IF...ELSE, WHILE, hàm và thủ tục.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d1-003",
    "question": "Nhóm lệnh nào sau đây trong ngôn ngữ SQL thuộc phân nhóm Ngôn ngữ Định nghĩa Dữ liệu (DDL)?",
    "options": [
      "Các câu lệnh bao gồm: GRANT, DENY và câu lệnh REVOKE",
      "Các câu lệnh bao gồm: SELECT, INSERT và câu lệnh UPDATE",
      "Các câu lệnh bao gồm: CREATE, ALTER và câu lệnh DROP",
      "Các câu lệnh bao gồm: COMMIT, ROLLBACK và lệnh SAVE"
    ],
    "answer": 2,
    "explanation": "DDL (Data Definition Language) gồm các lệnh định nghĩa và quản trị cấu trúc các đối tượng trong CSDL như CREATE, ALTER, DROP.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d1-004",
    "question": "Trong SQL Server, kiểu dữ liệu số nguyên nào chiếm đúng 1 byte bộ nhớ và lưu được dải giá trị từ 0 đến 255?",
    "options": [
      "Kiểu dữ liệu integer (dung lượng 4 byte, dải số tiêu chuẩn)",
      "Kiểu dữ liệu smallint (dung lượng 2 byte, dải số âm dương)",
      "Kiểu dữ liệu bigint (dung lượng 8 byte, dải số cực kỳ lớn)",
      "Kiểu dữ liệu tinyint (dung lượng 1 byte, dải từ 0 đến 255)"
    ],
    "answer": 3,
    "explanation": "Kiểu tinyint lưu trữ số nguyên không dấu chiếm đúng 1 byte bộ nhớ, dải giá trị hợp lệ từ 0 đến 255.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d1-005",
    "question": "Khẳng định nào sau đây là HOÀN TOÀN SAI khi so sánh giữa hai kiểu dữ liệu char(n) và varchar(n)?",
    "options": [
      "Kiểu char(n) sẽ tự động co giãn kích thước theo dữ liệu nhập",
      "Kiểu char(n) luôn luôn chiếm đúng n byte bộ nhớ bất kể chuỗi",
      "Kiểu varchar(n) chỉ tốn số byte tương ứng với ký tự thực tế",
      "Cả hai kiểu dữ liệu này đều chỉ hỗ trợ lưu chuỗi Non-Unicode"
    ],
    "answer": 0,
    "explanation": "Nhận định A sai vì char(n) có kích thước cố định, luôn dùng đúng n byte (các ký tự thừa được điền khoảng trắng), chỉ có varchar(n) mới co giãn linh hoạt theo dữ liệu thực tế.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d1-006",
    "question": "Điền vào chỗ trống: \"Kiểu chuỗi Unicode ...(1)... chiếm kích thước thay đổi linh hoạt bằng 2x + 2 bytes, và khi gán giá trị tiếng Việt bắt buộc phải có tiền tố ...(2)... đứng trước chuỗi.\"",
    "options": [
      "varchar(n) / ký tự U viết hoa đứng ngay trước chuỗi",
      "nvarchar(n) / ký tự N viết hoa đứng ngay trước chuỗi",
      "nchar(n) / ký tự V viết thường đứng ngay trước chuỗi",
      "text / ký tự C viết hoa đặt ở cuối cùng của chuỗi"
    ],
    "answer": 1,
    "explanation": "Kiểu nvarchar(n) là kiểu chuỗi Unicode thay đổi độ dài (2 byte/ký tự + 2 byte overhead) và hằng chuỗi Unicode trong T-SQL bắt buộc phải có tiền tố N đứng trước (ví dụ N'Hà Nội').",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d1-007",
    "question": "Cho các nhận định sau về kiểu ngày giờ trong SQL Server:\n(I) Kiểu datetime chiếm 8 bytes, quản lý từ năm 1753 đến 9999.\n(II) Kiểu smalldatetime chiếm 4 bytes, quản lý từ năm 1900 đến 2079.\n(III) Cả hai kiểu ngày giờ trên đều lưu trữ đến độ chính xác phần triệu giây.\nKhẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có duy nhất nhận định (III) là nhận định hoàn toàn đúng đắn",
      "Tất cả ba nhận định (I), (II) và (III) đều hoàn toàn chính xác",
      "Chỉ có nhận định (I) và (II) đúng, nhận định (III) là sai",
      "Nhận định (I) là nhận định sai, nhận định (II) và (III) là đúng"
    ],
    "answer": 2,
    "explanation": "Nhận định (I) và (II) đúng. Nhận định (III) sai vì datetime chỉ chính xác đến 3.33 mili-giây, còn smalldatetime chỉ chính xác đến mức phút (00 giây).",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d1-008",
    "question": "Lệnh gán: UPDATE NhanVien SET TenNV = 'Nguyễn Văn An' (không có chữ N). Hậu quả gì xảy ra nếu cột TenNV có kiểu nvarchar?",
    "options": [
      "Chuỗi tự động được chuyển đổi sang mã nhị phân không đọc được",
      "Hệ quản trị CSDL báo lỗi cú pháp nghiêm trọng và hủy bỏ câu lệnh",
      "Toàn bộ bảng dữ liệu NhanVien tự động bị khóa chặt vĩnh viễn",
      "Hệ thống lưu thành chuỗi mất dấu tiếng Việt thành Nguyen Van An"
    ],
    "answer": 3,
    "explanation": "Trong T-SQL, nếu nhập chuỗi tiếng Việt có dấu vào cột nvarchar mà thiếu tiền tố N phía trước, SQL Server sẽ tự ép kiểu về Non-Unicode (dựa theo code-page mặc định) làm mất toàn bộ dấu tiếng Việt.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ cột là nvarchar thì tự động giữ được tiếng Việt mà quên mất tiền tố N trong T-SQL.",
      "trickWord": "Bẫy chuỗi Unicode thiếu tiền tố N (Missing Unicode string prefix N)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục II.2.b",
      "tip": "Nhập chuỗi Unicode tiếng Việt trong T-SQL BẮT BUỘC phải viết dạng N'...'."
    }
  },
  {
    "id": "db-c3-d1-009",
    "question": "Xét biểu thức: DECLARE @x tinyint = 250; SET @x = @x + 10; Phản ứng chính xác của SQL Server khi thực thi đoạn mã lệnh này là gì?",
    "options": [
      "Xuất hiện lỗi Arithmetic overflow error do vượt quá ngưỡng 255",
      "Giá trị của biến @x tự động quay vòng trở về giá trị ban đầu là 4",
      "Biến @x tự động mở rộng dung lượng lên kiểu smallint để lưu 260",
      "Hệ thống tự động gán giá trị NULL cho biến @x mà không báo lỗi"
    ],
    "answer": 0,
    "explanation": "Kiểu tinyint chỉ lưu tối đa đến 255. Phép tính 250 + 10 = 260 vượt quá giới hạn miền giá trị nên SQL Server sẽ ném lỗi Arithmetic overflow error converting expression to data type tinyint.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người lầm tưởng SQL Server sẽ tự ép kiểu mở rộng hoặc tự động quay vòng modulo như ngôn ngữ C.",
      "trickWord": "Bẫy tràn số học kiểu dữ liệu số nguyên (Arithmetic overflow error in tinyint)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục II.1.a",
      "tip": "Tinyint chỉ từ 0..255. Vượt quá 255 = Lỗi tràn số học Arithmetic overflow!"
    }
  },
  {
    "id": "db-c3-d1-010",
    "question": "Khi thiết kế cột lưu trữ mức lương của nhân viên chính xác đến từng xu lẻ, kiểu dữ liệu nào dưới đây là lựa chọn TỐI ƯU NHẤT?",
    "options": [
      "Kiểu float(53) chuyên dụng cho tính toán khoa học vũ trụ",
      "Kiểu money (hoặc decimal(18,4)) chuyên dụng cho tài chính",
      "Kiểu real chiếm 4 bytes để tiết kiệm không gian lưu trữ đĩa",
      "Kiểu bigint rồi quy đổi ngầm bằng cách nhân thêm một nghìn"
    ],
    "answer": 1,
    "explanation": "Giáo trình chỉ rõ: Dữ liệu tiền tệ trong SQL Server cần sử dụng kiểu money (8 bytes, chính xác đến 4 chữ số thập phân) hoặc decimal(p,s) để tránh sai số làm tròn của số chấm động float/real.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn float/real vì nghĩ số thực là lưu được số tiền có số lẻ thập phân.",
      "trickWord": "Bẫy sai số làm tròn của kiểu số chấm động khi lưu trữ tiền tệ (Floating point vs Exact money)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục II.1.a & II.1.b",
      "tip": "Tiền tệ tài chính ➔ BẮT BUỘC dùng money hoặc decimal/numeric (Exact numbers), KHÔNG dùng float/real."
    }
  },
  {
    "id": "db-c3-d1-011",
    "question": "Thuộc tính cột IDENTITY(100, 5) trong câu lệnh CREATE TABLE mang ý nghĩa thiết lập nào sau đây?",
    "options": [
      "Bảng chỉ có thể chứa tối đa 100 bản ghi và 5 thuộc tính khóa ngoại",
      "Giá trị tối đa là 100 và mỗi lần chỉ được phép nhập tối đa 5 ký tự",
      "Giá trị bắt đầu từ 100 và mỗi dòng mới tự động tăng thêm 5 đơn vị",
      "Hệ thống tự động trừ đi 5 đơn vị mỗi khi có một bản ghi mới tạo"
    ],
    "answer": 2,
    "explanation": "Cú pháp IDENTITY(seed, increment): seed là giá trị khởi đầu (100), increment là bước nhảy tăng tự động cho mỗi bản ghi mới (5).",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d1-012",
    "question": "Để khai báo một ràng buộc khóa chính gồm 2 thuộc tính (MaHV, MaMH) trong bảng KETQUA, ta bắt buộc phải sử dụng cách nào?",
    "options": [
      "Mô hình SQL Server không hỗ trợ tạo khóa chính có nhiều thuộc tính",
      "Khai báo từ khóa PRIMARY KEY trực tiếp ngay sau từng dòng cột",
      "Chỉ cần khai báo PRIMARY KEY cho thuộc tính MaHV là hệ thống tự hiểu",
      "Khai báo ở mức bảng (Table-level constraint) phía dưới danh sách cột"
    ],
    "answer": 3,
    "explanation": "Khóa chính tổng hợp gồm nhiều thuộc tính bắt buộc phải khai báo ở mức bảng: CONSTRAINT PK_KQ PRIMARY KEY (MaHV, MaMH). Không thể khai báo ở mức cột.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d1-013",
    "question": "Câu lệnh nào sau đây dùng để xóa bỏ hoàn toàn cột NgayNghi ra khỏi cấu trúc của bảng NhanVien?",
    "options": [
      "ALTER TABLE NhanVien DROP COLUMN NgayNghi;",
      "DELETE COLUMN NgayNghi FROM NhanVien;",
      "DROP COLUMN NgayNghi ON TABLE NhanVien;",
      "ALTER TABLE NhanVien REMOVE NgayNghi;"
    ],
    "answer": 0,
    "explanation": "Cú pháp chuẩn của DDL khi thay đổi cấu trúc bảng để xóa cột: ALTER TABLE <TênBảng> DROP COLUMN <TênCột>.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d1-014",
    "question": "Tùy chọn ON DELETE CASCADE trong khai báo khóa ngoại (FOREIGN KEY) sẽ thực hiện hành động gì khi dòng cha bị xóa?",
    "options": [
      "Hệ thống chặn không cho xóa và ném thông báo lỗi ràng buộc",
      "Tự động xóa tất cả các dòng con ở bảng tham chiếu tương ứng",
      "Tự động cập nhật các khóa ngoại của bảng con về giá trị NULL",
      "Tự động sao chép dòng cha bị xóa sang một tệp tin sao lưu tạm"
    ],
    "answer": 1,
    "explanation": "ON DELETE CASCADE quy định cơ chế xóa lan truyền: Khi một dòng dữ liệu ở bảng cha (bảng được tham chiếu) bị xóa, toàn bộ các dòng tương ứng ở bảng con sẽ tự động bị xóa theo.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d1-015",
    "question": "Khẳng định nào sau đây là NHẬN ĐỊNH ĐÚNG về sự khác nhau giữa ràng buộc PRIMARY KEY và ràng buộc UNIQUE?",
    "options": [
      "Một bảng có thể tạo nhiều PRIMARY KEY nhưng chỉ có đúng một UNIQUE",
      "PRIMARY KEY được phép trùng lặp, UNIQUE thì không được trùng lặp",
      "PRIMARY KEY cấm hoàn toàn NULL, UNIQUE cho phép chứa 1 giá trị NULL",
      "UNIQUE tự động tạo Clustered Index còn PRIMARY KEY thì không tạo gì"
    ],
    "answer": 2,
    "explanation": "Trong SQL Server: Bảng chỉ có 1 PRIMARY KEY (tuyệt đối không nhận NULL). Bảng có thể có nhiều UNIQUE constraint, và UNIQUE cho phép chứa duy nhất một giá trị NULL.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d1-016",
    "question": "Điền vào chỗ trống: \"Câu lệnh ...(1)... xóa toàn bộ dữ liệu nhưng không ghi log chi tiết từng dòng, đồng thời ...(2)... giá trị bộ đếm IDENTITY về mức ban đầu.\"",
    "options": [
      "ALTER TABLE / khóa vĩnh viễn cấu trúc của",
      "DELETE FROM / giữ nguyên trạng thái hiện tại của",
      "DROP TABLE / sao lưu toàn bộ thông tin của",
      "TRUNCATE TABLE / tự động thiết lập lại (reset)"
    ],
    "answer": 3,
    "explanation": "TRUNCATE TABLE giải phóng toàn bộ các trang dữ liệu (deallocate pages), ghi log tối thiểu, chạy cực nhanh và tự động reset bộ đếm IDENTITY về giá trị seed ban đầu.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d1-017",
    "question": "Cho bảng DONDATHANG(SoHD, NgayDat, NgayGiao). Câu lệnh ALTER TABLE nào bổ sung ràng buộc kiểm tra ngày giao hàng phải sau hoặc bằng ngày đặt hàng?",
    "options": [
      "ALTER TABLE DONDATHANG ADD CHECK (NgayGiao >= NgayDat);",
      "ALTER TABLE DONDATHANG ADD CONSTRAINT (NgayGiao > NgayDat);",
      "ALTER TABLE DONDATHANG MODIFY COLUMN NgayGiao >= NgayDat;",
      "ALTER TABLE DONDATHANG CREATE RULE NgayGiao AFTER NgayDat;"
    ],
    "answer": 0,
    "explanation": "Cú pháp bổ sung ràng buộc kiểm tra: ALTER TABLE <TênBảng> ADD CHECK (<ĐiềuKiện>) hoặc ADD CONSTRAINT <TênRB> CHECK (<ĐiềuKiện>). Ở đây điều kiện là NgayGiao >= NgayDat.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d1-018",
    "question": "Tình huống: Bảng KHOA có khóa chính MaKhoa đang được bảng LOP tham chiếu qua khóa ngoại MaKhoa. Quản trị viên chạy lệnh: DROP TABLE KHOA; Kết quả là gì?",
    "options": [
      "Bảng KHOA bị xóa và toàn bộ dữ liệu của bảng LOP tự động biến mất",
      "Lệnh thất bại do bảng KHOA đang bị tham chiếu bởi khóa ngoại từ LOP",
      "Hệ thống tự động xóa khóa ngoại trong bảng LOP rồi mới xóa bảng KHOA",
      "Bảng KHOA chuyển thành một khung nhìn ảo ẩn trong hệ quản trị CSDL"
    ],
    "answer": 1,
    "explanation": "SQL Server tuyệt đối ngăn chặn lệnh DROP TABLE đối với bảng đang được tham chiếu bởi khóa ngoại từ một bảng khác (kể cả khi bảng con không có dữ liệu). Phải DROP bảng con hoặc DROP FOREIGN KEY trước.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ nếu bảng LOP không có dữ liệu hoặc bật CASCADE thì DROP TABLE cha sẽ tự động chạy được.",
      "trickWord": "Bẫy tính toàn vẹn tham chiếu khi xóa bảng bằng DROP TABLE (Referential integrity constraint on DROP)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.2.a",
      "tip": "DROP TABLE bảng cha có FK trỏ tới ➔ LUÔN LUÔN BỊ TỪ CHỐI lỗi 3726, bất kể CASCADE hay bảng con rỗng!"
    }
  },
  {
    "id": "db-c3-d1-019",
    "question": "Cho bảng HANGHOA có cột MaHG là IDENTITY(1,1). Khi chạy lệnh: INSERT INTO HANGHOA(MaHG, TenHG) VALUES (1, N'Bánh xốp'); Điều gì sẽ xảy ra?",
    "options": [
      "Hệ thống tự động ghi đè giá trị mã hàng cũ mà không cần kiểm tra",
      "Bản ghi được chèn bình thường và bước nhảy tự động tăng thêm 1 đơn vị",
      "Báo lỗi không thể chèn giá trị tường minh vào cột có thuộc tính IDENTITY",
      "Giá trị 1 tự động nhân đôi thành mã hàng 2 để tránh xung đột dữ liệu"
    ],
    "answer": 2,
    "explanation": "Theo mặc định, SQL Server cấm người dùng tự nhập giá trị vào cột IDENTITY (Cannot insert explicit value for identity column in table when IDENTITY_INSERT is set to OFF).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh tưởng có thể chủ động gán số cho cột tự tăng nếu giá trị đó chưa tồn tại trong bảng.",
      "trickWord": "Bẫy chèn giá trị trực tiếp vào cột tự tăng IDENTITY (Explicit insert into identity column)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.1.a",
      "tip": "Cột IDENTITY mặc định KHÔNG ĐƯỢC nhập giá trị vào câu lệnh INSERT (trừ khi bật IDENTITY_INSERT ON)."
    }
  },
  {
    "id": "db-c3-d1-020",
    "question": "Tình huống: Thực hiện lệnh TRUNCATE TABLE PhongBan; Biết bảng PhongBan đang được tham chiếu bởi khóa ngoại của bảng NhanVien (nhưng bảng NhanVien hiện đang rỗng). Lệnh có thực thi được không?",
    "options": [
      "Hệ thống tự động chuyển sang câu lệnh DROP TABLE để xóa sạch dữ liệu",
      "Thực thi thành công vì bảng tham chiếu NhanVien không chứa dữ liệu",
      "Thực thi thành công nhưng hệ thống sẽ phát cảnh báo vi phạm bộ nhớ",
      "Không thể thực thi vì TRUNCATE TABLE cấm trên bảng bị FK tham chiếu"
    ],
    "answer": 3,
    "explanation": "Quy tắc nghiêm ngặt của T-SQL: TRUNCATE TABLE không thể thực thi trên bảng được tham chiếu bởi bất kỳ FOREIGN KEY nào, ngay cả khi bảng tham chiếu đó hoàn toàn không chứa dòng dữ liệu nào.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ bảng con không có dữ liệu thì không vi phạm toàn vẹn nên TRUNCATE được.",
      "trickWord": "Bẫy giới hạn kỹ thuật của TRUNCATE TABLE với khóa ngoại (Truncate table FK restriction)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.2.a",
      "tip": "Bảng có FK trỏ tới (dù bảng con RỖNG) ➔ CẤM TRUNCATE TABLE. Chỉ có thể dùng DELETE FROM!"
    }
  },
  {
    "id": "db-c3-d1-021",
    "question": "Trong câu lệnh truy vấn dữ liệu SQL, mệnh đề nào được sử dụng để lọc và loại bỏ các dòng dữ liệu trùng lặp?",
    "options": [
      "Mệnh đề từ khóa DISTINCT đứng ngay phía sau từ khóa SELECT",
      "Mệnh đề từ khóa UNIQUE đặt ở cuối cùng của câu lệnh truy vấn",
      "Mệnh đề từ khóa PRIMARY KEY kết hợp với mệnh đề sắp xếp",
      "Mệnh đề từ khóa NO DUPLICATE khai báo trong mệnh đề FROM"
    ],
    "answer": 0,
    "explanation": "Từ khóa DISTINCT đặt ngay sau SELECT (ví dụ SELECT DISTINCT MaKH FROM Hoadon) dùng để lọc bỏ các dòng trùng lặp trong kết quả trả về.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d1-022",
    "question": "Để lọc các sản phẩm có đơn giá nằm trong đoạn từ 100.000 đến 500.000 (bao gồm cả hai đầu mút), toán tử nào sau đây chuẩn nhất?",
    "options": [
      "Toán tử DonGia IN (100000, 500000) khai báo trong mệnh đề WHERE",
      "Toán tử DonGia BETWEEN 100000 AND 500000 trong mệnh đề WHERE",
      "Toán tử DonGia LIKE '[100000-500000]' trong mệnh đề WHERE",
      "Toán tử DonGia EQUAL (100000 TO 500000) trong mệnh đề WHERE"
    ],
    "answer": 1,
    "explanation": "Cú pháp BETWEEN ... AND ... bao gồm cả 2 giá trị biên (tương đương DonGia >= 100000 AND DonGia <= 500000).",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d1-023",
    "question": "Phép kết nối nào giữ lại toàn bộ các dòng của bảng bên trái kể cả khi không tìm thấy dòng khớp ở bảng bên phải?",
    "options": [
      "Phép kết nối ngoài bên phải (RIGHT OUTER JOIN giữa hai bảng)",
      "Phép kết nối trong thuần túy (INNER JOIN giữa hai quan hệ)",
      "Phép kết nối ngoài bên trái (LEFT OUTER JOIN hoặc LEFT JOIN)",
      "Phép kết nối tích Descartes (CROSS JOIN giữa hai danh sách)"
    ],
    "answer": 2,
    "explanation": "LEFT OUTER JOIN bảo toàn mọi dòng của bảng bên trái; các cột của bảng bên phải không khớp sẽ được điền giá trị NULL.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d1-024",
    "question": "Thứ tự thực thi logic (Logical Query Processing) chuẩn xác của câu lệnh SELECT trong hệ quản trị SQL Server là gì?",
    "options": [
      "WHERE ➔ FROM ➔ GROUP BY ➔ HAVING ➔ SELECT ➔ ORDER BY",
      "SELECT ➔ FROM ➔ WHERE ➔ GROUP BY ➔ HAVING ➔ ORDER BY",
      "FROM ➔ SELECT ➔ WHERE ➔ ORDER BY ➔ GROUP BY ➔ HAVING",
      "FROM ➔ WHERE ➔ GROUP BY ➔ HAVING ➔ SELECT ➔ ORDER BY"
    ],
    "answer": 3,
    "explanation": "Thứ tự thực thi logic của cỗ máy SQL: 1) FROM (xác định nguồn), 2) WHERE (lọc dòng), 3) GROUP BY (gom nhóm), 4) HAVING (lọc nhóm), 5) SELECT (kết xuất cột), 6) ORDER BY (sắp xếp).",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d1-025",
    "question": "Biểu thức điều kiện WHERE TenNV LIKE '_[a-k]%' sẽ lọc ra những nhân viên có tên thỏa mãn tiêu chí nào?",
    "options": [
      "Ký tự thứ hai trong tên là một chữ cái nằm từ a đến k",
      "Ký tự đầu tiên trong tên bắt buộc phải là một chữ cái từ a đến k",
      "Tên có độ dài chính xác là hai ký tự và kết thúc bằng chữ k",
      "Tên chứa ký tự gạch dưới và không chứa các ký tự từ a đến k"
    ],
    "answer": 0,
    "explanation": "Ký tự đại diện: `_` là đúng 1 ký tự bất kỳ đầu tiên, `[a-k]` là ký tự thứ hai nằm trong khoảng từ a đến k, `%` là chuỗi ký tự tùy ý phía sau.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d1-026",
    "question": "Cho câu truy vấn: SELECT Phong, COUNT(MaNV) AS SoLuong FROM NhanVien WHERE Luong > 1000 GROUP BY Phong HAVING COUNT(MaNV) >= 5; Khẳng định nào ĐÚNG?",
    "options": [
      "Đếm tất cả nhân viên trong phòng rồi sau đó mới lọc những phòng có mức lương trung bình > 1000",
      "Chỉ đếm các nhân viên có lương > 1000 và nhóm phòng đó phải có từ 5 người thỏa mãn trở lên",
      "Câu lệnh bị lỗi cú pháp vì không được phép dùng hàm kết hợp COUNT ở cả SELECT và HAVING",
      "Điều kiện Luong > 1000 bị bỏ qua vì mệnh đề HAVING có độ ưu tiên cao hơn mệnh đề WHERE"
    ],
    "answer": 1,
    "explanation": "Mệnh đề WHERE Luong > 1000 lọc dòng trước khi gom nhóm, sau đó GROUP BY Phong gom lại, và HAVING COUNT(MaNV) >= 5 chỉ giữ lại các phòng có từ 5 nhân viên (thỏa mãn điều kiện lương > 1000) trở lên.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d1-027",
    "question": "Hai câu lệnh sau có điểm khác biệt căn bản nào về mặt ngữ nghĩa và kết quả:\n(1) SELECT COUNT(*) FROM KhachHang;\n(2) SELECT COUNT(Email) FROM KhachHang;",
    "options": [
      "Câu (1) chỉ đếm các dòng không chứa NULL, câu (2) đếm luôn cả các giá trị NULL",
      "Cả hai câu lệnh luôn trả về cùng một kết quả giống hệt nhau trong mọi trường hợp",
      "Câu (1) đếm toàn bộ số dòng, câu (2) bỏ qua những khách hàng có Email là NULL",
      "Câu (2) bị lỗi thời gian chạy nếu cột Email trong bảng có chứa giá trị rỗng"
    ],
    "answer": 2,
    "explanation": "Hàm COUNT(*) đếm tổng số dòng (bất kể giá trị các cột là gì, kể cả toàn NULL). Còn COUNT(Cột) chỉ đếm các dòng mà giá trị tại cột đó KHÁC NULL.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d1-028",
    "question": "Một bảng có 4 dòng với cột DiemThi nhận giá trị lần lượt là: 8, 10, NULL, 6. Giá trị của hàm SELECT AVG(DiemThi) trả về là bao nhiêu?",
    "options": [
      "Hệ thống báo lỗi chia cho số không do sự xuất hiện của giá trị NULL",
      "Giá trị bằng 6 (tính tổng 8+10+0+6=24 chia cho tất cả 4 dòng)",
      "Giá trị trả về là NULL vì phép tính chứa phần tử có giá trị rỗng",
      "Giá trị bằng 8 (tính tổng 8+10+6=24 chia cho 3 dòng không NULL)"
    ],
    "answer": 3,
    "explanation": "Quy tắc vàng của T-SQL: Các hàm kết hợp (SUM, AVG, MIN, MAX, COUNT(col)) tự động BỎ QUA giá trị NULL. Do đó AVG(DiemThi) = (8 + 10 + 6) / 3 = 24 / 3 = 8. (Không chia cho 4).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm là lấy tổng chia cho 4 (coi NULL là 0).",
      "trickWord": "Bẫy giá trị NULL trong hàm kết hợp AVG (Aggregate function NULL elimination)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "Hàm AVG(cột) bỏ qua NULL cả ở tử số và mẫu số: Tổng / Số lượng dòng KHÁC NULL!"
    }
  },
  {
    "id": "db-c3-d1-029",
    "question": "Lập trình viên viết câu lệnh sau để tìm các phòng ban có lương trung bình trên 2000:\nSELECT MaPB, AVG(Luong) FROM NhanVien WHERE AVG(Luong) > 2000 GROUP BY MaPB;\nLỗi kỹ thuật nghiêm trọng của câu lệnh này là gì?",
    "options": [
      "Không được phép sử dụng hàm kết hợp trong mệnh đề WHERE, phải dùng HAVING",
      "Cột MaPB trong mệnh đề SELECT bắt buộc phải chuyển vào trong một hàm kết hợp",
      "Mệnh đề GROUP BY không được phép đứng sau mệnh đề WHERE trong chuẩn ANSI",
      "Câu lệnh hoàn toàn đúng cú pháp và sẽ trả về kết quả chính xác không có lỗi"
    ],
    "answer": 0,
    "explanation": "Mệnh đề WHERE lọc từng dòng đơn lẻ trước khi gom nhóm, nên không thể tính toán hàm kết hợp trên nhóm tại WHERE. Muốn lọc theo điều kiện hàm kết hợp AVG(Luong) > 2000 bắt buộc phải đặt trong mệnh đề HAVING.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người mới học SQL quen tay đưa mọi điều kiện lọc vào mệnh đề WHERE.",
      "trickWord": "Bẫy sử dụng hàm kết hợp trong mệnh đề WHERE (Aggregate in WHERE clause error)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "Hàm kết hợp (COUNT, SUM, AVG, MIN, MAX) ➔ CẤM nằm trong WHERE! Bắt buộc phải đưa vào HAVING."
    }
  },
  {
    "id": "db-c3-d1-030",
    "question": "Cho câu lệnh: SELECT MaPB, TenPB, COUNT(MaNV) FROM PhongBan PB INNER JOIN NhanVien NV ON PB.MaPB = NV.MaPB GROUP BY MaPB; SQL Server sẽ phản hồi thế nào?",
    "options": [
      "Chạy bình thường và tự động lấy tên phòng ban đầu tiên của mỗi nhóm tìm được",
      "Báo lỗi vì cột TenPB nằm trong SELECT nhưng không xuất hiện trong GROUP BY",
      "Tự động bổ sung hàm MAX cho cột TenPB để câu lệnh được thực thi hoàn tất",
      "Báo lỗi do không thể kết nối hai bảng khi có sử dụng hàm kết hợp COUNT"
    ],
    "answer": 1,
    "explanation": "Quy tắc nghiêm ngặt của mệnh đề GROUP BY trong SQL: Mọi cột xuất hiện trong danh sách SELECT mà không nằm trong hàm kết hợp thì BẮT BUỘC phải có mặt trong mệnh đề GROUP BY.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều hệ thống như MySQL phiên bản cũ cho phép chạy lỏng lẻo, nhưng SQL Server chuẩn mực luôn báo lỗi nghiêm ngặt.",
      "trickWord": "Bẫy thiếu thuộc tính trong mệnh đề GROUP BY (Column invalid in SELECT list)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "Mọi cột ở SELECT không có hàm kết hợp ➔ BẮT BUỘC PHẢI CÓ TÊN TRONG GROUP BY!"
    }
  },
  {
    "id": "db-c3-d1-031",
    "question": "Bản chất kiến trúc vật lý của Khung nhìn (View) trong hệ cơ sở dữ liệu quan hệ là gì?",
    "options": [
      "Là một bảng tạm thời tự động bị hủy bỏ ngay khi phiên làm việc người dùng kết thúc",
      "Là một tệp tin vật lý độc lập được sao lưu riêng biệt trên ổ đĩa cứng máy chủ",
      "Là bảng ảo không lưu trữ dữ liệu thực, chỉ lưu câu lệnh truy vấn định nghĩa",
      "Là một chỉ mục đặc biệt dùng để tăng tốc độ ghi dữ liệu của các câu lệnh chèn"
    ],
    "answer": 2,
    "explanation": "Khung nhìn (View) là một bảng ảo (virtual table). View không chứa dữ liệu thực tế trên đĩa mà chỉ lưu trữ câu truy vấn SELECT định nghĩa trong từ điển dữ liệu.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d1-032",
    "question": "Cú pháp chuẩn xác nào sau đây dùng để xóa bỏ một khung nhìn có tên là View_NhanVien?",
    "options": [
      "Sử dụng câu lệnh giải phóng bộ nhớ: REMOVE VIEW View_NhanVien;",
      "Sử dụng câu lệnh thao tác dữ liệu: DELETE VIEW View_NhanVien;",
      "Sử dụng câu lệnh quản trị cấu trúc: ALTER TABLE DROP View_NhanVien;",
      "Sử dụng câu lệnh chuẩn DDL: DROP VIEW View_NhanVien;"
    ],
    "answer": 3,
    "explanation": "Cú pháp DDL xóa khung nhìn: DROP VIEW <TênKhungNhìn>.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d1-033",
    "question": "Toán tử nào dưới đây được sử dụng trong truy vấn lồng tương quan để kiểm tra xem truy vấn con có trả về ít nhất một dòng dữ liệu hay không?",
    "options": [
      "Toán tử kiểm tra sự tồn tại EXISTS (hoặc phủ định NOT EXISTS)",
      "Toán tử so sánh khoảng giá trị thực tế BETWEEN ... AND ...",
      "Toán tử tìm kiếm chuỗi mẫu theo mẫu định sẵn LIKE ... ESCAPE",
      "Toán tử kiểm tra danh sách tĩnh các phần tử rời rạc IN (...) "
    ],
    "answer": 0,
    "explanation": "Toán tử EXISTS kiểm tra sự tồn tại của các dòng kết quả trong truy vấn con tương quan: Trả về TRUE nếu có ít nhất 1 dòng, FALSE nếu rỗng.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d1-034",
    "question": "Trong CSDL Bán Hàng, để tìm các khách hàng có cùng ngày sinh (Bài tập 7), kỹ thuật truy vấn nào sau đây được áp dụng tối ưu nhất?",
    "options": [
      "Sử dụng Cross Join rồi dùng mệnh đề WHERE loại bỏ tất cả các dòng trùng",
      "Sử dụng Self-Join kết nối bảng KhachHang với chính nó theo NgaySinh",
      "Sử dụng phép chia đại số quan hệ kết hợp với phép trừ dữ liệu tập hợp",
      "Tạo 12 bảng tạm tương ứng với 12 tháng sinh rồi hợp dữ liệu bằng UNION"
    ],
    "answer": 1,
    "explanation": "Để tìm các cặp khách hàng có cùng ngày sinh, ta thực hiện Self-Join: FROM KhachHang K1 INNER JOIN KhachHang K2 ON K1.NgaySinh = K2.NgaySinh AND K1.MaKH < K2.MaKH.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d1-035",
    "question": "Trong CSDL Bán Hàng (Bài tập 5), câu truy vấn nào sau đây tính tổng số lượng bán được của mỗi mặt hàng một cách chuẩn mực?",
    "options": [
      "SELECT MaHG, SUM(SoLuong) FROM Chitiet_HD ORDER BY SoLuong DESC;",
      "SELECT MaHG, COUNT(SoLuong) FROM Chitiet_HD WHERE SoLuong > 0;",
      "SELECT MaHG, SUM(SoLuong) FROM Chitiet_HD GROUP BY MaHG;",
      "SELECT MaHG, TOTAL(SoLuong) FROM Chitiet_HD GROUP BY SoHD;"
    ],
    "answer": 2,
    "explanation": "Để tính tổng số lượng bán được của mỗi mặt hàng, ta gom nhóm theo MaHG và áp dụng hàm SUM(SoLuong): SELECT MaHG, SUM(SoLuong) AS TongBan FROM Chitiet_HD GROUP BY MaHG.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d1-036",
    "question": "Cho các khẳng định sau về Khung nhìn (View):\n(I) View giúp tăng tính bảo mật bằng cách phân quyền trên từng cột nhạy cảm.\n(II) Một View có chứa DISTINCT hay GROUP BY thì không thể thực hiện INSERT dữ liệu.\n(III) Khi xóa một View bằng lệnh DROP VIEW, toàn bộ dữ liệu ở bảng gốc sẽ bị xóa theo.\nKhẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Nhận định (I) sai hoàn toàn, nhận định (II) và (III) là đúng",
      "Cả ba nhận định (I), (II) và (III) đều là những nhận định chính xác",
      "Chỉ có duy nhất nhận định (III) là nhận định hoàn toàn đúng đắn",
      "Chỉ có nhận định (I) và (II) đúng, nhận định (III) là sai"
    ],
    "answer": 3,
    "explanation": "Nhận định (I) và (II) đúng. Nhận định (III) sai vì View là bảng ảo, khi xóa View chỉ xóa định nghĩa của nó trong từ điển dữ liệu, hoàn toàn KHÔNG ảnh hưởng hay xóa dữ liệu của bảng gốc.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d1-037",
    "question": "Điền vào chỗ trống: \"Khi tạo khung nhìn, mệnh đề ...(1)... có tác dụng kiểm tra và ngăn chặn các thao tác INSERT hoặc UPDATE làm cho dòng dữ liệu ...(2)... điều kiện WHERE của chính View đó.\"",
    "options": [
      "WITH CHECK OPTION / không còn thỏa mãn",
      "WITH ENCRYPTION / bị lộ mật khẩu và vi phạm",
      "WITH SCHEMABINDING / làm thay đổi cấu trúc",
      "ORDER BY / bị xáo trộn thứ tự sắp xếp"
    ],
    "answer": 0,
    "explanation": "Mệnh đề WITH CHECK OPTION đảm bảo mọi thao tác INSERT/UPDATE qua View đều phải thỏa mãn điều kiện lọc của mệnh đề WHERE trong View, ngăn chặn dữ liệu chèn vào bị \"biến mất\" khỏi View.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d1-038",
    "question": "Tình huống bẫy Anti-Join: Cho truy vấn: SELECT * FROM HangHoa WHERE MaHG NOT IN (SELECT MaHG FROM Chitiet_HD); Nếu bảng Chitiet_HD có ít nhất 1 dòng chứa MaHG là NULL, kết quả trả về là gì?",
    "options": [
      "Truy vấn vẫn trả về chính xác tất cả các mặt hàng chưa bán bình thường",
      "Truy vấn trả về kết quả rỗng (0 dòng) do tính chất logic ba trị với NULL",
      "Hệ quản trị CSDL ném ra thông báo lỗi cú pháp và dừng câu truy vấn",
      "Hệ thống tự động chuyển giá trị NULL thành chuỗi rỗng để tính toán tiếp"
    ],
    "answer": 1,
    "explanation": "Bẫy kinh điển: Trong SQL, NOT IN (tập hợp) tương đương với điều kiện AND liên tiếp (MaHG <> x AND MaHG <> NULL...). Phép so sánh với NULL luôn cho UNKNOWN, và AND với UNKNOWN dẫn đến kết quả luôn là UNKNOWN/FALSE, khiến câu truy vấn trả về TẬP RỖNG!",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay dùng NOT IN vì nghĩ nó tương đương NOT EXISTS mà không ngờ gặp NULL sẽ rỗng cả bảng.",
      "trickWord": "Bẫy giá trị NULL trong toán tử NOT IN (NOT IN with NULL traps to empty set)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a & VI.1",
      "tip": "Anti-Join nên dùng NOT EXISTS hoặc LEFT JOIN WHERE ... IS NULL. Tuyệt đối tránh NOT IN khi tập con có thể chứa NULL!"
    }
  },
  {
    "id": "db-c3-d1-039",
    "question": "Cho View: CREATE VIEW View_NV_LuongCao AS SELECT MaNV, TenNV, Luong FROM NhanVien WHERE Luong > 5000 WITH CHECK OPTION; Người dùng chạy lệnh: UPDATE View_NV_LuongCao SET Luong = 3000 WHERE MaNV = 'NV01'; Kết quả là gì?",
    "options": [
      "Lệnh chạy thành công và hệ thống tự động sửa điều kiện WHERE của View thành 3000",
      "Lệnh chạy thành công và dòng NV01 tự động biến mất khỏi View_NV_LuongCao",
      "Bị từ chối và báo lỗi vì mức lương 3000 vi phạm điều kiện WITH CHECK OPTION",
      "Bảng NhanVien gốc tự động tạo một bản sao dự phòng trước khi cập nhật lương"
    ],
    "answer": 2,
    "explanation": "Vì View có mệnh đề WITH CHECK OPTION, việc sửa Luong = 3000 sẽ làm dòng này không còn thỏa mãn điều kiện Luong > 5000 của View. SQL Server sẽ ngay lập tức chặn lại và báo lỗi vi phạm CHECK OPTION.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ chỉ có lệnh INSERT mới bị kiểm tra, còn UPDATE thì cập nhật được tự do.",
      "trickWord": "Bẫy cơ chế bảo vệ của mệnh đề WITH CHECK OPTION khi UPDATE qua View",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục V.1.b",
      "tip": "WITH CHECK OPTION áp dụng cho CẢ INSERT VÀ UPDATE. Bất kỳ giá trị mới nào vi phạm WHERE đều bị BẬC LỖI chặn đứng!"
    }
  },
  {
    "id": "db-c3-d1-040",
    "question": "Trong 8 bài tập QLBanHang, yêu cầu: \"Tìm các mặt hàng chưa từng được khách hàng đặt mua bao giờ\" (Bài 4). Biểu thức nào sau đây ĐẢM BẢO CHÍNH XÁC VÀ AN TOÀN TUYỆT ĐỐI kể cả khi có NULL?",
    "options": [
      "SELECT * FROM HangHoa H WHERE H.MaHG = (SELECT C.MaHG FROM Chitiet_HD C WHERE C.SoLuong = 0);",
      "SELECT * FROM HangHoa H WHERE H.MaHG NOT IN (SELECT C.MaHG FROM Chitiet_HD C);",
      "SELECT * FROM HangHoa H INNER JOIN Chitiet_HD C ON H.MaHG = C.MaHG WHERE C.MaHG IS NULL;",
      "SELECT * FROM HangHoa H WHERE NOT EXISTS (SELECT 1 FROM Chitiet_HD C WHERE C.MaHG = H.MaHG);"
    ],
    "answer": 3,
    "explanation": "Cách an toàn tuyệt đối là dùng NOT EXISTS (hoặc LEFT JOIN ... WHERE C.MaHG IS NULL). Dùng NOT IN sẽ sập bẫy rỗng nếu Chitiet_HD chứa NULL. Phương án C dùng INNER JOIN thì WHERE IS NULL sẽ không bao giờ có dữ liệu.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn cách dùng NOT IN hoặc nhầm INNER JOIN với LEFT JOIN.",
      "trickWord": "Bẫy kỹ thuật Anti-Join an toàn tuyệt đối trong bài toán tìm đối tượng chưa phát sinh quan hệ",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục VI.1.b",
      "tip": "Tìm đối tượng CHƯA TỪNG phát sinh giao dịch ➔ Dùng NOT EXISTS (Correlated Subquery) hoặc LEFT JOIN ... WHERE IS NULL."
    }
  }
];
