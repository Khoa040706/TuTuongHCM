/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG III: NGÔN NGỮ SQL (STRUCTURED QUERY LANGUAGE) - TRANSACT-SQL
   BỘ ĐỀ SỐ 2 — 40 CÂU HỎI HỌC THUẬT CHUẨN MỰC
   MÃ BỘ ĐỀ: db-c3-d2-001 ĐẾN db-c3-d2-040
   TỶ LỆ ĐỘ KHÓ: 12 DỄ (30%) - 16 TRUNG BÌNH (40%) - 12 KHÓ/BẪY (30%)
   CHUẨN KỸ THUẬT: DELTA L <= 15 CHARS, CÂN BẰNG ĐÁP ÁN 10A-10B-10C-10D
   ============================================================ */

export const questionsDbCh3Part2 = [
  {
    "id": "db-c3-d2-001",
    "question": "Hệ quản trị CSDL quan hệ SQL Server hỗ trợ kiến trúc nào cho phép nhiều máy trạm kết nối tới máy chủ trung tâm?",
    "options": [
      "Kiến trúc ngang hàng độc lập không có máy chủ quản trị trung tâm",
      "Kiến trúc máy khách/máy chủ phân tán (Client/Server Architecture)",
      "Kiến trúc tập tin đơn lẻ phân chia trên các đĩa mềm lưu trữ rời",
      "Kiến trúc xử lý tuần tự từng lệnh một trên bộ nhớ chỉ đọc ROM"
    ],
    "answer": 1,
    "explanation": "SQL Server được thiết kế trên nền tảng kiến trúc Client/Server (Máy khách gửi truy vấn - Máy chủ xử lý và trả kết quả).",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d2-002",
    "question": "Mục đích cốt lõi của nhóm lệnh Ngôn ngữ Thao tác Dữ liệu (DML) trong SQL là gì?",
    "options": [
      "Dùng để phân quyền truy cập và bảo mật tài khoản người quản trị",
      "Dùng để khởi tạo cơ sở dữ liệu và cấu hình dung lượng bộ nhớ đệm",
      "Dùng để truy vấn, chèn mới, cập nhật hoặc xóa dữ liệu trong bảng",
      "Dùng để thiết lập kết nối mạng giữa máy khách và máy chủ CSDL"
    ],
    "answer": 2,
    "explanation": "DML (Data Manipulation Language) gồm các lệnh thao tác trên các bản ghi dữ liệu bên trong bảng như SELECT, INSERT, UPDATE, DELETE.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d2-003",
    "question": "Kiểu dữ liệu số nguyên nào sau đây trong SQL Server chiếm dung lượng 2 bytes và lưu được dải số từ -32.768 đến 32.767?",
    "options": [
      "Kiểu bigint (chiếm 8 byte bộ nhớ, dải số nguyên cực kỳ khổng lồ)",
      "Kiểu tinyint (chiếm 1 byte bộ nhớ, dải từ 0 đến 255 dương)",
      "Kiểu integer (chiếm 4 byte bộ nhớ, dải từ âm 2 tỷ đến dương 2 tỷ)",
      "Kiểu smallint (chiếm 2 byte bộ nhớ, dải từ -32.768 đến 32.767)"
    ],
    "answer": 3,
    "explanation": "Kiểu smallint chiếm đúng 2 bytes, dải giá trị từ -32.768 đến 32.767.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d2-004",
    "question": "Điền vào chỗ trống: \"Kiểu dữ liệu ...(1)... dùng để lưu trữ số có độ chính xác cố định, trong đó tham số p là ...(2)... và d là số chữ số phần thập phân.\"",
    "options": [
      "decimal(p,d) hoặc numeric(p,d) / tổng số chữ số tối đa",
      "float(p,d) / dung lượng bộ nhớ tối đa tính theo megabyte",
      "real(p,d) / số lượng các thuộc tính khóa ngoại của bảng",
      "money(p,d) / tỷ giá hối đoái quy đổi sang đơn vị tiền tệ"
    ],
    "answer": 0,
    "explanation": "Cú pháp decimal(p, d) hoặc numeric(p, d): p (precision) là tổng số chữ số tối đa (cả phần nguyên và thập phân), d (scale) là số chữ số sau dấu phẩy.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d2-005",
    "question": "Nhận định nào sau đây là HOÀN TOÀN SAI về kiểu chuỗi ký tự trong hệ quản trị SQL Server?",
    "options": [
      "Kiểu nvarchar(n) sử dụng 2 bytes cho mỗi ký tự để hỗ trợ Unicode",
      "Kiểu nvarchar(n) sử dụng 1 byte cho mỗi ký tự nên tiết kiệm đĩa",
      "Kiểu varchar(n) chỉ lưu trữ các ký tự Non-Unicode không có dấu",
      "Kiểu char(n) tự động điền thêm khoảng trắng cho đủ n ký tự quy định"
    ],
    "answer": 1,
    "explanation": "Nhận định A sai vì nvarchar là kiểu Unicode, bắt buộc sử dụng 2 bytes cho mỗi ký tự chứ không phải 1 byte.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d2-006",
    "question": "Cho các nhận định sau về các phương án sao lưu (Backup) trong SQL Server:\n(I) Full Backup sao lưu toàn bộ cơ sở dữ liệu bao gồm cả transaction log.\n(II) Differential Backup chỉ sao lưu những thay đổi kể từ lần Full Backup gần nhất.\n(III) Transaction Log Backup chỉ khả dụng khi cơ sở dữ liệu ở chế độ Simple Recovery.\nKhẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có duy nhất nhận định (III) là nhận định hoàn toàn đúng đắn",
      "Cả ba nhận định (I), (II) và (III) đều là những nhận định chính xác",
      "Chỉ có nhận định (I) và (II) đúng, nhận định (III) là sai",
      "Tất cả ba nhận định trên đều là những nhận định hoàn toàn sai lệch"
    ],
    "answer": 2,
    "explanation": "Nhận định (I) và (II) đúng. Nhận định (III) sai vì ở chế độ Simple Recovery, Transaction Log tự động bị cắt tỉa (truncate) nên KHÔNG THỂ thực hiện Log Backup (phải dùng Full hoặc Bulk-Logged Recovery).",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d2-007",
    "question": "So sánh giữa biểu thức nchar(10) và nvarchar(10) khi cùng lưu chuỗi N'Hà Nội' (6 ký tự): Sự khác biệt dung lượng bộ nhớ thực tế là gì?",
    "options": [
      "nchar(10) tốn 40 bytes bộ nhớ, còn nvarchar(10) tốn 20 bytes bộ nhớ đệm",
      "Cả hai kiểu dữ liệu trên đều tốn chính xác đúng 12 bytes bộ nhớ lưu trữ",
      "nchar(10) tốn 10 bytes bộ nhớ, còn nvarchar(10) chỉ tốn đúng 6 bytes đĩa",
      "nchar(10) tốn đúng 20 bytes cố định, nvarchar(10) tốn 14 bytes (2*6 + 2)"
    ],
    "answer": 3,
    "explanation": "nchar(10) luôn tốn cố định 10 * 2 = 20 bytes. nvarchar(10) lưu 6 ký tự sẽ tốn: 6 * 2 bytes + 2 bytes overhead lưu độ dài = 14 bytes.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d2-008",
    "question": "Tình huống: Cột SoDienThoai lưu giá trị số bắt đầu bằng số 0 (ví dụ: 0912345678). Nếu người thiết kế chọn kiểu dữ liệu là int thì hậu quả gì sẽ xảy ra?",
    "options": [
      "Số 0 đứng đầu sẽ tự động bị biến mất và giá trị bị lưu thành 912345678",
      "Hệ thống SQL Server sẽ báo lỗi kiểu dữ liệu và từ chối nhập số điện thoại",
      "Số điện thoại tự động chuyển thành số âm để cảnh báo người dùng nhập sai",
      "Toàn bộ các số điện thoại khác trong bảng sẽ bị đồng bộ hóa theo số mới"
    ],
    "answer": 0,
    "explanation": "Trong toán học và khoa học máy tính, kiểu số nguyên (int) không lưu giữ các số 0 vô nghĩa ở đầu chuỗi (leading zeros). Số 0912345678 sẽ bị biến thành 912345678. Số điện thoại bắt buộc phải lưu bằng varchar/char.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người thấy số điện thoại toàn chữ số nên chọn kiểu số int.",
      "trickWord": "Bẫy mất chữ số 0 đầu chuỗi khi lưu số điện thoại bằng kiểu số nguyên",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục II.1.a & II.2.a",
      "tip": "Mã số, số điện thoại, số CCCD có số 0 ở đầu ➔ BẮT BUỘC dùng char/varchar, KHÔNG dùng số nguyên int."
    }
  },
  {
    "id": "db-c3-d2-009",
    "question": "Khi thực hiện so sánh hai giá trị thực: float và real bằng toán tử bằng (Ví dụ: WHERE GiaTriFloat = GiaTriReal). Hiện tượng kỹ thuật nào thường xuyên xảy ra?",
    "options": [
      "Hệ thống tự động ép kiểu chính xác tuyệt đối mà không có sai lệch nào",
      "Phép so sánh bằng thường thất bại do sai số làm tròn của số chấm động",
      "SQL Server tự động chuyển đổi hai số sang hệ số nhị phân để so khớp",
      "Hệ quản trị CSDL ném lỗi dừng khẩn cấp do không hỗ trợ so sánh số thực"
    ],
    "answer": 1,
    "explanation": "Kiểu float và real là kiểu số xấp xỉ gần đúng (approximate data types) tuân theo chuẩn IEEE 754. Do sai số làm tròn nhị phân, việc so sánh bằng chính xác (=) giữa các số thực hầu như luôn dẫn đến kết quả sai lệch ngoài ý muốn.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ 0.1 float bằng 0.1 real, nhưng biểu diễn bit nhị phân khác nhau.",
      "trickWord": "Bẫy sai số nhị phân dấu chấm động (Floating point approximate comparison)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục II.1.b",
      "tip": "Số float/real không bao giờ nên so sánh bằng (=). Cần độ chính xác tuyệt đối phải dùng decimal/numeric."
    }
  },
  {
    "id": "db-c3-d2-010",
    "question": "Xét câu lệnh: SELECT CAST('2024-02-30' AS datetime); Phản ứng chính xác của hệ quản trị cơ sở dữ liệu SQL Server khi chạy lệnh này là gì?",
    "options": [
      "Hệ thống tự động làm tròn lùi về ngày 29 tháng 2 năm 2024 nhuận trước đó",
      "Hệ thống tự động làm tròn thành ngày mùng 1 tháng 3 năm 2024 tiếp theo",
      "Báo lỗi chuyển đổi chuỗi sang ngày giờ do ngày 30 tháng 2 không tồn tại",
      "Giá trị trả về là NULL và câu truy vấn kết thúc thành công êm đềm"
    ],
    "answer": 2,
    "explanation": "Tháng 2 không bao giờ có ngày 30. SQL Server sẽ lập tức báo lỗi Conversion failed when converting date and/or time from character string.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người tưởng SQL Server sẽ tự động làm tròn sang tháng tiếp theo.",
      "trickWord": "Bẫy tính hợp lệ lịch pháp của kiểu dữ liệu datetime (Invalid calendar date conversion)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục II.1.b",
      "tip": "SQL Server kiểm tra chặt chẽ lịch vạn niên Gregorian. Ngày không tồn tại trong thực tế = Lỗi chuyển đổi ngay lập tức!"
    }
  },
  {
    "id": "db-c3-d2-011",
    "question": "Lệnh SQL nào sau đây dùng để định nghĩa và tạo mới một cơ sở dữ liệu có tên là QLBanHang?",
    "options": [
      "Sử dụng câu lệnh chuẩn: BUILD DATABASE QLBanHang;",
      "Sử dụng câu lệnh chuẩn: CREATE SCHEMA QLBanHang;",
      "Sử dụng câu lệnh chuẩn: MAKE DATABASE QLBanHang;",
      "Sử dụng câu lệnh chuẩn: CREATE DATABASE QLBanHang;"
    ],
    "answer": 3,
    "explanation": "Cú pháp DDL tạo mới CSDL trong SQL Server: CREATE DATABASE <TênCSDL>.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d2-012",
    "question": "Trong câu lệnh CREATE TABLE, thuộc tính DEFAULT (0) đặt sau định nghĩa của một cột mang ý nghĩa gì?",
    "options": [
      "Tự động điền giá trị 0 vào cột nếu khi chèn người dùng không chỉ định",
      "Cột chỉ được phép nhận duy nhất giá trị 0 và không nhận số nào khác",
      "Giá trị của cột sẽ tự động bị giảm về 0 sau mỗi lần máy chủ khởi động",
      "Bắt buộc người dùng phải gõ thủ công số 0 khi thực hiện chèn dữ liệu"
    ],
    "answer": 0,
    "explanation": "Ràng buộc DEFAULT cung cấp một giá trị mặc định cho cột khi lệnh INSERT không cung cấp giá trị cho cột đó.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d2-013",
    "question": "Để chèn một bản ghi mới vào bảng NhanVien gồm đầy đủ các cột theo thứ tự thiết kế, cú pháp nào sau đây là ĐÚNG?",
    "options": [
      "ADD ROW NhanVien VALUES ('NV01', N'Lê Văn An', 3000, 1);",
      "INSERT INTO NhanVien VALUES ('NV01', N'Lê Văn An', 3000, 1);",
      "UPDATE NhanVien INSERT ('NV01', N'Lê Văn An', 3000, 1);",
      "INSERT ROW TO NhanVien SET ('NV01', N'Lê Văn An', 3000, 1);"
    ],
    "answer": 1,
    "explanation": "Cú pháp chuẩn của lệnh chèn dữ liệu DML: INSERT INTO <TênBảng> VALUES (<DanhSáchGiáTrị>).",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d2-014",
    "question": "Hành động ON UPDATE CASCADE trong khai báo ràng buộc khóa ngoại (FOREIGN KEY) có ý nghĩa như thế nào?",
    "options": [
      "Hệ thống ngăn chặn tuyệt đối không cho phép sửa đổi khóa chính bảng cha",
      "Khi khóa chính bảng cha thay đổi, toàn bộ bảng con tự động bị xóa sạch",
      "Khi khóa chính của bảng cha thay đổi, khóa ngoại bảng con tự đổi theo",
      "Tự động thiết lập giá trị khóa ngoại ở bảng con về giá trị mặc định 0"
    ],
    "answer": 2,
    "explanation": "ON UPDATE CASCADE quy định: Khi giá trị khóa chính ở bảng cha được cập nhật, các giá trị khóa ngoại tương ứng ở bảng con sẽ tự động được cập nhật đồng bộ theo.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d2-015",
    "question": "Câu lệnh nào sau đây cập nhật tăng lương thêm 10% cho tất cả nhân viên thuộc phòng số 5 trong bảng NhanVien?",
    "options": [
      "UPDATE Luong IN NhanVien SET 1.1 WHERE Phong EQUAL 5;",
      "ALTER NhanVien MODIFY Luong = Luong * 1.1 WHERE Phong = 5;",
      "MODIFY TABLE NhanVien SET Luong = Luong + 10% WHERE Phong = 5;",
      "UPDATE NhanVien SET Luong = Luong * 1.1 WHERE Phong = 5;"
    ],
    "answer": 3,
    "explanation": "Cú pháp chuẩn của lệnh cập nhật DML: UPDATE <TênBảng> SET <Cột> = <BiểuThức> WHERE <ĐiềuKiện>.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d2-016",
    "question": "Phát biểu nào sau đây là NHẬN ĐỊNH SAI khi nói về sự khác nhau giữa câu lệnh DELETE và câu lệnh TRUNCATE TABLE?",
    "options": [
      "Cả DELETE và TRUNCATE TABLE đều cho phép chỉ định điều kiện WHERE",
      "DELETE có thể xóa từng dòng có chọn lọc thông qua mệnh đề WHERE",
      "TRUNCATE TABLE giải phóng toàn bộ trang đĩa và không hỗ trợ WHERE",
      "TRUNCATE TABLE thường thực thi với tốc độ nhanh hơn nhiều so với DELETE"
    ],
    "answer": 0,
    "explanation": "Nhận định A sai vì TRUNCATE TABLE tuyệt đối không hỗ trợ mệnh đề WHERE (luôn xóa sạch 100% dữ liệu của toàn bộ bảng).",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d2-017",
    "question": "Cho lệnh: ALTER TABLE SinhVien ADD CONSTRAINT CK_Diem CHECK (Diem >= 0 AND Diem <= 10); Ràng buộc này đảm bảo điều gì?",
    "options": [
      "Sinh viên có điểm số nhỏ hơn 0 sẽ tự động được hệ thống làm tròn về 0",
      "Điểm số của sinh viên khi nhập vào bắt buộc phải nằm trong đoạn [0, 10]",
      "Mỗi sinh viên bắt buộc phải thi tối thiểu 10 môn học trong một học kỳ",
      "Chỉ cho phép tối đa 10 sinh viên được nhập điểm số vào trong hệ thống"
    ],
    "answer": 1,
    "explanation": "Ràng buộc CHECK (Diem >= 0 AND Diem <= 10) kiểm tra toàn vẹn miền giá trị của cột Diem, chỉ cho phép dữ liệu từ 0 đến 10.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d2-018",
    "question": "Tình huống: Bảng DonHang có ràng buộc CHECK (NgayGiao >= NgayDat). Lập trình viên chạy lệnh: INSERT INTO DonHang(MaDH, NgayDat, NgayGiao) VALUES ('DH01', '2024-05-10', NULL); Lệnh có thực thi được không?",
    "options": [
      "Hệ thống tự động điền NgayGiao bằng đúng NgayDat để thỏa mãn ràng buộc",
      "Bị từ chối vì mọi giá trị NULL đều tự động biến thành sai trong mệnh đề CHECK",
      "Thực thi thành công vì điều kiện CHECK đánh giá NULL cho kết quả UNKNOWN",
      "Báo lỗi vi phạm toàn vẹn thực thể vì khóa chính không được phép chứa ngày"
    ],
    "answer": 2,
    "explanation": "Bẫy tư duy kinh điển: Ràng buộc CHECK chỉ từ chối bản ghi khi điều kiện logic trả về FALSE. Nếu điều kiện đánh giá ra UNKNOWN (do có NULL trong biểu thức so sánh), ràng buộc CHECK vẫn CHẤP NHẬN cho chèn dữ liệu!",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ NULL làm điều kiện sai nên bị từ chối, nhưng CHECK chỉ từ chối khi kết quả là FALSE.",
      "trickWord": "Bẫy giá trị NULL trong ràng buộc CHECK (Three-valued logic in CHECK constraint)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.1.a",
      "tip": "Ràng buộc CHECK: Chỉ từ chối khi FALSE. Nếu là UNKNOWN (do dính NULL) ➔ VẪN HỢP LỆ (Được chèn)!"
    }
  },
  {
    "id": "db-c3-d2-019",
    "question": "Cho bảng NhanVien có khóa chính MaNV (kiểu char(5)). Người dùng chèn dòng thứ nhất với MaNV = 'NV01 ', dòng thứ hai với MaNV = 'NV01'. SQL Server phản ứng thế nào?",
    "options": [
      "Hệ thống tự động gắn thêm số thứ tự ngẫu nhiên vào đuôi của mã nhân viên",
      "Chèn thành công cả hai dòng vì độ dài hai chuỗi ký tự này hoàn toàn khác nhau",
      "Tự động ghi đè dòng thứ hai lên dòng thứ nhất mà không thông báo lỗi nào",
      "Báo lỗi vi phạm khóa chính trùng lặp do SQL Server bỏ qua khoảng trắng cuối"
    ],
    "answer": 3,
    "explanation": "Theo chuẩn ANSI/ISO SQL-92 và cơ chế so sánh chuỗi của SQL Server: Khi so sánh chuỗi, SQL Server tự động đệm khoảng trắng (trailing spaces) vào chuỗi ngắn hơn. Do đó 'NV01 ' và 'NV01' được coi là TRÙNG NHAU, dẫn đến vi phạm ràng buộc khóa chính Primary Key!",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Lập trình viên hay nghĩ 'NV01 ' (5 ký tự) khác 'NV01' (4 ký tự) nên không trùng khóa.",
      "trickWord": "Bẫy khoảng trắng cuối chuỗi khi so sánh khóa chính (Trailing space padding in string comparison)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục II.2 & III.1",
      "tip": "SQL Server bỏ qua khoảng trắng ở cuối khi so sánh chuỗi! 'ABC ' và 'ABC' là TRÙNG KHÓA CHÍNH!"
    }
  },
  {
    "id": "db-c3-d2-020",
    "question": "Khi định nghĩa ràng buộc khóa ngoại (FOREIGN KEY) tham chiếu đến một bảng khác, điều kiện BẮT BUỘC đối với cột được tham chiếu ở bảng cha là gì?",
    "options": [
      "Cột ở bảng cha bắt buộc phải có ràng buộc PRIMARY KEY hoặc UNIQUE",
      "Cột ở bảng cha bắt buộc phải có kiểu dữ liệu là số nguyên tự tăng IDENTITY",
      "Cột ở bảng cha bắt buộc phải có tên gọi hoàn toàn trùng khớp với bảng con",
      "Bảng cha bắt buộc phải có số lượng dòng dữ liệu lớn hơn bảng con tham chiếu"
    ],
    "answer": 0,
    "explanation": "Một cột chỉ có thể được làm đích tham chiếu cho khóa ngoại (FOREIGN KEY) nếu cột đó là khóa chính (PRIMARY KEY) hoặc có ràng buộc duy nhất (UNIQUE constraint) ở bảng cha.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ khóa ngoại CHỈ ĐƯỢC trỏ về Khóa chính (PRIMARY KEY).",
      "trickWord": "Bẫy cột đích của khóa ngoại có thể là UNIQUE (FK target can be UNIQUE constraint)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.1.a",
      "tip": "Khóa ngoại KHÔNG CHỈ trỏ về PRIMARY KEY, mà CÓ THỂ trỏ về bất kỳ cột nào có ràng buộc UNIQUE!"
    }
  },
  {
    "id": "db-c3-d2-021",
    "question": "Trong câu lệnh SELECT, để sắp xếp kết quả trả về theo thứ tự giảm dần của một cột, ta sử dụng từ khóa nào?",
    "options": [
      "Từ khóa ASC đặt ngay sau tên cột trong mệnh đề ORDER BY",
      "Từ khóa DESC đặt ngay sau tên cột trong mệnh đề ORDER BY",
      "Từ khóa DOWN đặt ngay sau tên cột trong mệnh đề GROUP BY",
      "Từ khóa DECREASE đặt ngay sau tên cột trong mệnh đề WHERE"
    ],
    "answer": 1,
    "explanation": "Cú pháp sắp xếp giảm dần trong SQL: ORDER BY <TênCột> DESC. (Mặc định không ghi hoặc ASC là tăng dần).",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d2-022",
    "question": "Để kiểm tra xem một thuộc tính có chứa giá trị rỗng (chưa xác định) hay không trong mệnh đề WHERE, ta dùng cú pháp nào?",
    "options": [
      "Sử dụng cú pháp chuỗi: TenCot EQUAL 'NULL' trong biểu thức",
      "Sử dụng cú pháp so sánh: TenCot = NULL (hoặc TenCot <> NULL)",
      "Sử dụng cú pháp chuẩn: TenCot IS NULL (hoặc IS NOT NULL)",
      "Sử dụng cú pháp hàm: EMPTY(TenCot) == TRUE trong mệnh đề"
    ],
    "answer": 2,
    "explanation": "Trong SQL, giá trị NULL đại diện cho trạng thái chưa biết, không thể so sánh bằng toán tử `=` hay `<>`. Bắt buộc phải dùng toán tử chuyên dụng: `IS NULL` hoặc `IS NOT NULL`.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d2-023",
    "question": "Phép kết nối nào giữa hai bảng trả về tích Descartes của tất cả các dòng dữ liệu (mỗi dòng bảng 1 kết hợp mọi dòng bảng 2)?",
    "options": [
      "Phép kết nối tự thân SELF JOIN giữa bảng với chính bản thân nó",
      "Phép kết nối trong INNER JOIN có điều kiện kết nối bằng",
      "Phép kết nối ngoài toàn phần FULL OUTER JOIN giữa hai quan hệ",
      "Phép kết nối chéo CROSS JOIN (hoặc viết FROM BảngA, BảngB)"
    ],
    "answer": 3,
    "explanation": "CROSS JOIN là phép tích Descartes: Nếu bảng A có m dòng và bảng B có n dòng thì kết quả sẽ gồm đúng m * n dòng.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d2-024",
    "question": "Điền vào chỗ trống: \"Mệnh đề ...(1)... dùng để lọc các dòng dữ liệu đơn lẻ trước khi gom nhóm, trong khi mệnh đề ...(2)... dùng để lọc các nhóm sau khi gom nhóm.\"",
    "options": [
      "WHERE / HAVING (lọc nhóm dựa trên hàm kết hợp)",
      "HAVING / WHERE (lọc từng bản ghi đơn lẻ trong bảng)",
      "ORDER BY / GROUP BY (gom nhóm các thuộc tính)",
      "SELECT / FROM (xác định nguồn dữ liệu đầu vào)"
    ],
    "answer": 0,
    "explanation": "Quy tắc phân biệt nền tảng: WHERE lọc các dòng trước khi gom nhóm; HAVING lọc các nhóm sau khi đã gom nhóm và tính toán hàm kết hợp.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d2-025",
    "question": "Biểu thức so sánh chuỗi: WHERE MaSV LIKE '[A-C][0-9][0-9]' sẽ khớp với mã sinh viên nào dưới đây?",
    "options": [
      "Khớp với mã sinh viên D12 (bắt đầu bằng D và tiếp theo là 2 chữ số)",
      "Khớp với mã sinh viên B12 (bắt đầu bằng B và tiếp theo là 2 chữ số)",
      "Khớp với mã sinh viên A1 (bắt đầu bằng A và tiếp theo là 1 chữ số)",
      "Khớp với mã sinh viên ABC (bắt đầu bằng A và tiếp theo là chữ cái)"
    ],
    "answer": 1,
    "explanation": "Ký tự đại diện `[A-C]` là 1 ký tự A, B hoặc C; `[0-9]` là 1 chữ số từ 0 đến 9. Do đó mã B12 thỏa mãn hoàn toàn.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d2-026",
    "question": "Cho CSDL Quản lý bán hàng. Câu truy vấn nào sau đây tìm mã và tên các mặt hàng có giá bán lớn hơn 10 và số lượng tồn kho ít hơn 20 (Bài tập 2)?",
    "options": [
      "SELECT * FROM HangHoa WHERE DonGia BETWEEN 10 AND 20;",
      "SELECT MaHG, TenHG FROM HangHoa WHERE DonGia > 10 OR SoLuong < 20;",
      "SELECT MaHG, TenHG FROM HangHoa WHERE DonGia > 10 AND SoLuong < 20;",
      "SELECT MaHG, TenHG FROM HangHoa HAVING DonGia > 10 AND SoLuong < 20;"
    ],
    "answer": 2,
    "explanation": "Bài tập 2 CSDL QLBanHang: Yêu cầu thỏa mãn đồng thời cả 2 điều kiện nên sử dụng toán tử logic AND trong mệnh đề WHERE.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d2-027",
    "question": "Cho các nhận định sau về câu lệnh SELECT trong SQL Server:\n(I) Mệnh đề TOP (N) dùng để giới hạn số lượng dòng kết quả trả về.\n(II) Bí danh (Alias) đặt ở SELECT có thể dùng ngay trong mệnh đề WHERE của cùng câu lệnh.\n(III) Mệnh đề ORDER BY luôn được thực thi sau cùng trong pipeline logic.\nKhẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Tất cả ba nhận định trên đều là những nhận định hoàn toàn sai lệch",
      "Cả ba nhận định (I), (II) và (III) đều là những nhận định chính xác",
      "Chỉ có duy nhất nhận định (II) là nhận định hoàn toàn đúng đắn",
      "Chỉ có nhận định (I) và (III) đúng, nhận định (II) là sai"
    ],
    "answer": 3,
    "explanation": "Nhận định (I) và (III) đúng. Nhận định (II) sai vì WHERE được thực thi trước SELECT, nên tại thời điểm xử lý WHERE, bí danh cột đặt ở SELECT chưa hề tồn tại (SQL Server sẽ báo lỗi Invalid column name).",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d2-028",
    "question": "Xét truy vấn: SELECT * FROM NhanVien WHERE Luong = NULL; Kết quả trả về của câu truy vấn này trong SQL Server là gì?",
    "options": [
      "Luôn luôn trả về 0 dòng kết quả (rỗng) kể cả bảng có nhân viên có lương NULL",
      "Trả về tất cả những nhân viên thực sự chưa được nhập mức lương vào bảng",
      "Hệ thống báo lỗi cú pháp do toán tử so sánh bằng không thể đi cùng từ khóa",
      "Trả về tất cả nhân viên có mức lương bằng 0 do hệ thống tự động quy đổi"
    ],
    "answer": 0,
    "explanation": "Trong SQL chuẩn (ANSI_NULLS ON): Bất kỳ phép so sánh bằng/khác với NULL (`Luong = NULL` hoặc `Luong <> NULL`) đều trả về UNKNOWN. Mệnh đề WHERE chỉ giữ lại các dòng đánh giá là TRUE. Do đó câu truy vấn luôn trả về TẬP RỖNG!",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh quen với ngôn ngữ lập trình khác nên viết Luong = NULL thay vì Luong IS NULL.",
      "trickWord": "Bẫy so sánh bằng với NULL trong mệnh đề WHERE (Comparison with NULL yielding UNKNOWN)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a",
      "tip": "Tuyệt đối KHÔNG BAO GIỜ viết col = NULL. Phải viết col IS NULL!"
    }
  },
  {
    "id": "db-c3-d2-029",
    "question": "Lập trình viên muốn lọc phòng ban có tổng lương lớn hơn 50.000 và viết:\nSELECT MaPB, SUM(Luong) AS TongLuong FROM NhanVien WHERE TongLuong > 50000 GROUP BY MaPB;\nLỗi kỹ thuật ở đây là gì?",
    "options": [
      "Mệnh đề GROUP BY không hỗ trợ gom nhóm khi bí danh cột được đặt bằng chữ AS",
      "Bí danh TongLuong chưa tồn tại ở WHERE và hàm kết hợp SUM không được nằm ở WHERE",
      "Hàm SUM chỉ có thể áp dụng cho các cột kiểu số thực chứ không áp dụng cho lương",
      "Câu lệnh hoàn toàn chính xác theo chuẩn ANSI và sẽ chạy thành công mỹ mãn"
    ],
    "answer": 1,
    "explanation": "Hai lỗi nghiêm trọng: 1) Bí danh TongLuong đặt ở SELECT chưa tồn tại khi WHERE thực thi; 2) Điều kiện lọc tổng lương phải dùng HAVING SUM(Luong) > 50000 chứ không thể dùng WHERE.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Lập trình viên hay tiện tay lấy bí danh ở SELECT ném xuống WHERE.",
      "trickWord": "Bẫy sử dụng bí danh cột ở SELECT trong mệnh đề WHERE (Column alias in WHERE clause)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "WHERE thực thi TRƯỚC SELECT! Bí danh ở SELECT chưa tồn tại ở WHERE. Muốn lọc hàm kết hợp phải dùng HAVING!"
    }
  },
  {
    "id": "db-c3-d2-030",
    "question": "Cho hai bảng A (chứa các giá trị: 1, 2) và B (chứa các giá trị: 2, 3, NULL). Khi thực hiện phép FULL OUTER JOIN giữa A và B trên điều kiện A.id = B.id, kết quả có bao nhiêu dòng?",
    "options": [
      "Có đúng 5 dòng do phép tích Descartes tự động sinh ra các cặp kết hợp",
      "Có đúng 2 dòng vì chỉ có giá trị 2 là trùng khớp nhau giữa hai bảng dữ liệu",
      "Có đúng 4 dòng (gồm cặp ghép (2,2), dòng (1,NULL), dòng (NULL,3), dòng (NULL,NULL))",
      "Có đúng 3 dòng vì giá trị NULL bị loại bỏ hoàn toàn khỏi phép kết nối ngoài"
    ],
    "answer": 2,
    "explanation": "FULL OUTER JOIN giữ lại: 1) Cặp khớp: (2, 2); 2) Dòng bên A không khớp: (1, NULL); 3) Dòng bên B không khớp: (NULL, 3) và (NULL, NULL). Tổng cộng là 4 dòng dữ liệu.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ giá trị NULL ở bảng B sẽ bị bỏ qua khi Join.",
      "trickWord": "Bẫy bảo toàn giá trị NULL trong phép kết nối ngoài toàn phần (FULL OUTER JOIN with NULLs)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "FULL OUTER JOIN bảo toàn TẤT CẢ các dòng của CẢ HAI BẢNG, kể cả dòng có giá trị NULL!"
    }
  },
  {
    "id": "db-c3-d2-031",
    "question": "Một trong những ưu điểm vượt trội nhất của việc sử dụng Khung nhìn (View) trong bảo mật CSDL là gì?",
    "options": [
      "Tự động sao lưu dữ liệu sang máy chủ phụ trợ mỗi khi có người dùng truy cập",
      "Tự động mã hóa toàn bộ dữ liệu trên đĩa cứng bằng các thuật toán quân sự",
      "Ngăn chặn hoàn toàn các cuộc tấn công từ chối dịch vụ vào cổng máy chủ",
      "Cho phép phân quyền người dùng chỉ được xem một số cột hoặc dòng nhất định"
    ],
    "answer": 3,
    "explanation": "View là công cụ bảo mật tuyệt vời: Cho phép tạo ra khung nhìn chỉ chứa các cột không nhạy cảm (ẩn đi cột Lương, Mật khẩu...) và phân quyền cho người dùng trên View đó thay vì trên bảng gốc.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d2-032",
    "question": "Cú pháp chuẩn T-SQL nào sau đây dùng để định nghĩa và tạo một khung nhìn có tên là View_NhanVienPhong5?",
    "options": [
      "CREATE VIEW View_NhanVienPhong5 AS SELECT * FROM NhanVien WHERE Phong = 5;",
      "MAKE VIEW View_NhanVienPhong5 FROM SELECT * FROM NhanVien WHERE Phong = 5;",
      "BUILD VIEW View_NhanVienPhong5 ON TABLE NhanVien WHERE Phong = 5;",
      "CREATE VIRTUAL TABLE View_NhanVienPhong5 AS SELECT * FROM NhanVien;"
    ],
    "answer": 0,
    "explanation": "Cú pháp chuẩn tạo View: CREATE VIEW <TênView> AS <CâuLệnhSelect>.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d2-033",
    "question": "Toán tử logic nào sau đây trả về TRUE nếu giá trị kiểm tra lớn hơn TẤT CẢ các giá trị trong tập kết quả của truy vấn con?",
    "options": [
      "Toán tử so sánh kết hợp tập hợp: > ANY (Subquery)",
      "Toán tử so sánh kết hợp tập hợp: > ALL (Subquery)",
      "Toán tử so sánh kết hợp tập hợp: > SOME (Subquery)",
      "Toán tử kiểm tra sự tồn tại phần tử: IN (Subquery)"
    ],
    "answer": 1,
    "explanation": "Cú pháp `> ALL (Subquery)` đòi hỏi giá trị phải lớn hơn giá trị lớn nhất trong tập con (lớn hơn TẤT CẢ các phần tử). Ngược lại `> ANY` chỉ cần lớn hơn ít nhất một phần tử.",
    "difficulty": "easy"
  },
  {
    "id": "db-c3-d2-034",
    "question": "Trong CSDL Bán Hàng (Bài tập 3), câu truy vấn nào sau đây tìm thông tin những khách hàng đã từng mua mặt hàng \"Áo Việt Tiến\"?",
    "options": [
      "SELECT DISTINCT KH.* FROM KhachHang KH, DonDatHang D, ChiTiet_HD C, HangHoa H WHERE KH.MaKH = D.SoHD AND D.SoHD = C.SoHD AND C.MaHG = H.MaHG AND H.TenHG = N'Áo Việt Tiến';",
      "SELECT DISTINCT KH.* FROM KhachHang KH, DonDatHang D, ChiTiet_HD C, HangHoa H WHERE KH.MaKH = D.MaKH AND D.SoHD = C.SoHD AND C.MaHG = H.MaHG AND H.MaHG = N'Áo Việt Tiến';",
      "SELECT DISTINCT KH.* FROM KhachHang KH, DonDatHang D, ChiTiet_HD C, HangHoa H WHERE KH.MaKH = D.MaKH AND D.SoHD = C.SoHD AND C.MaHG = H.MaHG AND H.TenHG = N'Áo Việt Tiến';",
      "SELECT DISTINCT KH.* FROM KhachHang KH, DonDatHang D, ChiTiet_HD C, HangHoa H WHERE KH.MaKH = D.MaKH AND D.MaKH = C.SoHD AND C.MaHG = H.MaHG AND H.TenHG = N'Áo Việt Tiến';"
    ],
    "answer": 2,
    "explanation": "Để tìm khách hàng mua áo Việt Tiến, ta kết nối các bảng liên quan: KhachHang qua DonDatHang qua ChiTiet_HD qua HangHoa và lọc điều kiện H.TenHG = N'Áo Việt Tiến'.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d2-035",
    "question": "Trong CSDL Bán Hàng (Bài tập 8), câu truy vấn nào thống kê chính xác số lượng hóa đơn đã lập của mỗi nhân viên?",
    "options": [
      "SELECT MaNV, TOTAL(SoHD) AS SoHoaDon FROM DonDatHang GROUP BY MaNV;",
      "SELECT MaNV, SUM(SoHD) AS TongSoHoaDon FROM DonDatHang GROUP BY MaNV;",
      "SELECT MaNV, COUNT(MaNV) AS SoHoaDon FROM DonDatHang WHERE MaNV > 0;",
      "SELECT MaNV, COUNT(SoHD) AS SoHoaDon FROM DonDatHang GROUP BY MaNV;"
    ],
    "answer": 3,
    "explanation": "Thống kê số hóa đơn đã lập của mỗi nhân viên: Ta gom nhóm theo MaNV trên bảng đơn hàng DonDatHang và dùng COUNT(SoHD): SELECT MaNV, COUNT(SoHD) AS SoHoaDon FROM DonDatHang GROUP BY MaNV.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d2-036",
    "question": "Cho các nhận định sau về khả năng cập nhật dữ liệu (INSERT, UPDATE, DELETE) thông qua Khung nhìn (View):\n(I) View chỉ được cập nhật khi nó dựa trên đúng một bảng cơ sở duy nhất.\n(II) View chứa hàm kết hợp (SUM, AVG...) vẫn có thể chèn dữ liệu bình thường.\n(III) View chứa mệnh đề DISTINCT thì tuyệt đối không thể cập nhật dữ liệu.\nKhẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có nhận định (I) và (III) đúng, nhận định (II) là sai",
      "Cả ba nhận định (I), (II) và (III) đều là những nhận định chính xác",
      "Chỉ có duy nhất nhận định (II) là nhận định hoàn toàn đúng đắn",
      "Nhận định (I) là nhận định sai, nhận định (II) và (III) là đúng"
    ],
    "answer": 0,
    "explanation": "Nhận định (I) và (III) đúng. Nhận định (II) sai vì View chứa hàm kết hợp (aggregate function), GROUP BY, HAVING hay DISTINCT đều KHÔNG THỂ thực hiện bất kỳ thao tác cập nhật (INSERT/UPDATE/DELETE) nào.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d2-037",
    "question": "Điền vào chỗ trống: \"Truy vấn lồng tương quan (Correlated Subquery) là truy vấn con có chứa thuộc tính của ...(1)..., và câu truy vấn con này sẽ được thực thi ...(2)... cho mỗi dòng của truy vấn cha.\"",
    "options": [
      "bảng ở từ điển dữ liệu / một lần duy nhất",
      "bảng ở truy vấn cha / lặp đi lặp lại nhiều lần",
      "bảng ở máy chủ phụ trợ / hoàn toàn độc lập",
      "bảng ở hệ thống ngoài / khi máy chủ rảnh rỗi"
    ],
    "answer": 1,
    "explanation": "Đặc trưng của Correlated Subquery: Truy vấn con tham chiếu đến cột của truy vấn cha bên ngoài, do đó truy vấn con phải được thực thi lặp lại ứng với từng dòng được duyệt ở truy vấn cha.",
    "difficulty": "medium"
  },
  {
    "id": "db-c3-d2-038",
    "question": "Tình huống bẫy tối ưu hóa: Khi viết truy vấn kiểm tra sự tồn tại của dữ liệu, vì sao lập trình viên chuyên nghiệp luôn dùng SELECT 1 thay vì SELECT * trong mệnh đề EXISTS (SELECT 1 FROM ...)?",
    "options": [
      "Vì SELECT 1 bắt buộc hệ thống phải quét toàn bộ các trang dữ liệu trên đĩa cứng",
      "Vì SELECT * sẽ bị hệ quản trị cơ sở dữ liệu ném lỗi cú pháp khi đặt trong EXISTS",
      "Vì EXISTS chỉ kiểm tra sự tồn tại của dòng, SELECT 1 hay * đều không ảnh hưởng hiệu năng",
      "Vì SELECT 1 sẽ tự động chuyển câu truy vấn lồng sang một phép kết nối tự nhiên"
    ],
    "answer": 2,
    "explanation": "Bản chất cỗ máy SQL: Toán tử EXISTS chỉ kiểm tra xem tập con có trả về ít nhất 1 dòng hay không (TRUE/FALSE) mà không hề quan tâm đến danh sách cột trong SELECT. T-SQL optimizer tự động tối ưu hóa nên SELECT 1 hay SELECT * hay SELECT NULL trong EXISTS đều có hiệu năng tương đương nhau.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người lầm tưởng SELECT 1 chạy nhanh hơn SELECT * trong EXISTS vì không phải load các cột.",
      "trickWord": "Bẫy nhận thức về hiệu năng của SELECT 1 vs SELECT * trong mệnh đề EXISTS",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "Trong EXISTS, danh sách cột ở SELECT HOÀN TOÀN BỊ BỎ QUA. SELECT 1, SELECT * hay SELECT NULL đều tối ưu như nhau!"
    }
  },
  {
    "id": "db-c3-d2-039",
    "question": "Cho View: CREATE VIEW View_BanHang AS SELECT H.MaHG, H.TenHG, C.SoLuong FROM HangHoa H INNER JOIN ChiTiet_HD C ON H.MaHG = C.MaHG; Người dùng chạy lệnh: DELETE FROM View_BanHang WHERE MaHG = 'HG01'; Phản ứng của SQL Server là gì?",
    "options": [
      "Hệ thống tự động chuyển lệnh DELETE thành lệnh UPDATE cập nhật số lượng về 0",
      "Xóa thành công và toàn bộ dữ liệu ở cả bảng HangHoa và ChiTiet_HD đều bị xóa sạch",
      "Chỉ xóa dòng ở bảng ChiTiet_HD còn bảng HangHoa thì giữ nguyên dữ liệu gốc",
      "Báo lỗi không thể xóa dữ liệu từ View do View được tạo từ nhiều bảng cơ sở kết hợp"
    ],
    "answer": 3,
    "explanation": "Quy tắc cập nhật qua View trong SQL Server: Lệnh DELETE tuyệt đối KHÔNG THỂ thực thi trên một View tham chiếu từ nhiều bảng cơ sở (View kết nối Join). SQL Server sẽ báo lỗi: View or function 'View_BanHang' is not updatable because the modification affects multiple base tables.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ lệnh DELETE sẽ chạy được hoặc xóa được trên 1 trong 2 bảng.",
      "trickWord": "Bẫy cấm DELETE trên View kết nối từ nhiều bảng cơ sở (Cannot DELETE on multi-table join view)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục V.1.b",
      "tip": "View tạo từ 2 BẢNG TRỞ LÊN (JOIN) ➔ TUYỆT ĐỐI KHÔNG THỂ DELETE! (Chỉ có thể UPDATE trên đúng 1 bảng tại 1 thời điểm)."
    }
  },
  {
    "id": "db-c3-d2-040",
    "question": "Tình huống tổng hợp: Khi thực hiện truy vấn so sánh hai biến mang giá trị NULL trong T-SQL: IF (NULL = NULL) PRINT 'Bằng nhau' ELSE PRINT 'Khác nhau'. Kết quả màn hình in ra là gì (trong cấu hình mặc định ANSI_NULLS ON)?",
    "options": [
      "Màn hình in ra chữ Khác nhau vì biểu thức NULL = NULL cho kết quả là UNKNOWN (coi như FALSE)",
      "Màn hình in ra chữ Bằng nhau vì hai giá trị rỗng luôn luôn tương đương với nhau",
      "Hệ thống báo lỗi cú pháp do không thể đặt giá trị NULL vào trong biểu thức IF",
      "Màn hình không in ra bất kỳ dòng chữ nào và chương trình tự động thoát đột ngột"
    ],
    "answer": 0,
    "explanation": "Theo logic 3 trị (Three-valued logic) trong chuẩn ANSI_NULLS: Biểu thức (NULL = NULL) không trả về TRUE mà trả về UNKNOWN. Cấu trúc IF chỉ thực hiện nhánh THEN khi biểu thức là TRUE; đối với UNKNOWN hoặc FALSE nó đều nhảy vào nhánh ELSE. Do đó kết quả in ra là 'Khác nhau'!",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Hầu hết lập trình viên theo thói quen trực giác đều nghĩ NULL đương nhiên bằng NULL.",
      "trickWord": "Bẫy logic ba trị: NULL so sánh với NULL trong T-SQL (NULL equals NULL traps to UNKNOWN)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục II.2 & IV.2.a",
      "tip": "Quy tắc bất hủ: NULL = NULL KHÔNG PHẢI LÀ TRUE! Nó là UNKNOWN (coi như False trong IF). Kết quả in ra Khác nhau!"
    }
  }
];
