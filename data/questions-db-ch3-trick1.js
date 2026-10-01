/* ============================================================
   NGÂN HÀNG CÂU HỎI BẪY: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG III: NGÔN NGỮ SQL (STRUCTURED QUERY LANGUAGE / T-SQL) — BỘ ĐỀ BẪY 1
   SỐ LƯỢNG: 50 CÂU HỎI BẪY VẬN DỤNG CAO (100% HARD / BẪY TƯ DUY)
   MÃ BỘ ĐỀ: db-c3-t1-001 ĐẾN db-c3-t1-050
   CHUẨN KỸ THUẬT: DELTA L <= 15 CHARS, 100% TRICKDETAILS, CÂN BẰNG ĐÁP ÁN (13A, 13B, 12C, 12D)
   ============================================================ */

export const questionsDbCh3Trick1 = [
  {
    "id": "db-c3-t1-001",
    "question": "Khẳng định nào sau đây là HOÀN TOÀN SAI khi so sánh giữa lệnh DELETE và lệnh TRUNCATE TABLE trong T-SQL?",
    "options": [
      "Lệnh TRUNCATE TABLE là một lệnh DML thông thường và luôn ghi log chi tiết cho từng dòng dữ liệu bị xóa",
      "Lệnh TRUNCATE TABLE thuộc nhóm lệnh DDL, giải phóng toàn bộ trang dữ liệu và thiết lập lại giá trị IDENTITY",
      "Lệnh DELETE cho phép sử dụng mệnh đề WHERE lọc dòng và có thể kích hoạt các trigger DELETE tương ứng",
      "Lệnh TRUNCATE TABLE bị hệ thống từ chối thực thi nếu bảng đó đang bị một khóa ngoại từ bảng khác tham chiếu"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 3 và chuẩn T-SQL: TRUNCATE TABLE thuộc nhóm DDL (Data Definition Language), không phải DML; nó ghi log cấp trang dữ liệu (deallocation) chứ không ghi log chi tiết từng dòng, không kích hoạt Trigger DELETE.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ TRUNCATE xóa dữ liệu nên mặc định nó là lệnh thao tác dữ liệu DML.",
      "trickWord": "Bẫy phân loại DDL vs DML: TRUNCATE là DDL giải phóng trang, không phải DML",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục I.1.b & III.2.a",
      "tip": "DELETE = DML (có WHERE, log từng dòng, chạy Trigger); TRUNCATE = DDL (nhanh, reset IDENTITY, kẹt FK)!"
    }
  },
  {
    "id": "db-c3-t1-002",
    "question": "Trong SQL Server, kiểu dữ liệu tinyint chiếm dung lượng 1 byte bộ nhớ. Điều gì sẽ xảy ra nếu ta thực hiện lệnh INSERT giá trị -5 vào cột có kiểu tinyint?",
    "options": [
      "Hệ thống tự động chuyển đổi số âm thành số bù hai dương tương ứng và lưu trữ giá trị 251 vào ô nhớ",
      "Hệ thống sẽ báo lỗi tràn số (Arithmetic overflow error) và từ chối thực hiện giao dịch chèn dữ liệu",
      "Hệ thống tự động làm tròn giá trị âm về mức 0 và ghi nhận một cảnh báo ngầm vào nhật ký hệ thống",
      "Hệ thống sẽ tự động ép kiểu dữ liệu của cột đó từ tinyint mở rộng lên thành smallint để lưu số âm"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục II.1.a: tinyint chỉ lưu số nguyên dương không dấu từ 0 đến 255. Bất kỳ giá trị âm nào (như -5) hoặc vượt quá 255 đều gây ra lỗi tràn số (Arithmetic overflow error) ngay lập tức.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người học ngôn ngữ C tưởng 1 byte lưu số nguyên có dấu từ -128 đến 127 nên nghĩ -5 hợp lệ.",
      "trickWord": "Bẫy miền giá trị tinyint: 0 đến 255 (KHÔNG CÓ DẤU, không chấp nhận số âm)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục II.1.a",
      "tip": "tinyint trong SQL Server = [0, 255] (Không dấu); Số âm ➔ Bị lỗi Arithmetic overflow error!"
    }
  },
  {
    "id": "db-c3-t1-003",
    "question": "Sự khác biệt cốt lõi giữa hai kiểu dữ liệu chuỗi ký tự varchar(50) và nvarchar(50) trong SQL Server là gì?",
    "options": [
      "nvarchar(50) có khả năng lưu trữ tối đa 8000 ký tự, trong khi varchar(50) chỉ lưu tối đa 4000 ký tự",
      "varchar(50) có độ dài cố định 50 ký tự, trong khi nvarchar(50) có độ dài co giãn linh hoạt theo dữ liệu",
      "nvarchar(50) lưu chuỗi Unicode với 2 bytes/ký tự, còn varchar(50) chỉ lưu chuỗi Non-Unicode 1 byte/ký tự",
      "varchar(50) yêu cầu tiền tố N trước chuỗi hằng, trong khi nvarchar(50) tuyệt đối không chấp nhận tiền tố N"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục II.2.a: Tiền tố \"n\" biểu thị chuẩn quốc tế Unicode. varchar lưu chuỗi Non-Unicode (1 byte/ký tự, tối đa 8.000 ký tự); nvarchar lưu chuỗi Unicode (2 bytes/ký tự, tối đa 4.000 ký tự). Cả 2 đều có độ dài thay đổi.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn giữa tính chất \"độ dài thay đổi\" (varchar) với tính chất \"Unicode\" (tiền tố n).",
      "trickWord": "Bẫy phân biệt Non-Unicode (varchar) vs Unicode (nvarchar)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục II.2.a",
      "tip": "Chữ \"n\" đầu = National / Unicode (2 bytes/ký tự, hỗ trợ tiếng Việt có dấu với tiền tố N'...')!"
    }
  },
  {
    "id": "db-c3-t1-004",
    "question": "Điều gì xảy ra khi ta thực hiện câu lệnh: INSERT INTO NhanVien(tennv) VALUES ('Nguyễn Văn An') vào cột tennv có kiểu nvarchar(50) mà quên không đặt tiền tố N?",
    "options": [
      "Chuỗi dữ liệu tiếng Việt vẫn luôn được bảo toàn trọn vẹn 100% không phụ thuộc vào tiền tố ký tự N",
      "Hệ thống SQL Server sẽ lập tức phát sinh lỗi cú pháp và từ chối toàn bộ câu lệnh chèn bản ghi này",
      "Hệ thống sẽ tự động nhận diện ngôn ngữ máy khách và tự chèn thêm tiền tố N vào trước câu lệnh",
      "Chuỗi có thể bị mất dấu tiếng Việt và chuyển thành 'Nguyen Van An' hoặc các dấu chấm hỏi '?' khó đọc"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục II.2.b: Nếu không có tiền tố N trước hằng chuỗi Unicode (ví dụ 'Nguyễn Văn An' thay vì N'Nguyễn Văn An'), SQL Server sẽ coi đó là chuỗi ký tự Non-Unicode (ASCII) và chuyển đổi theo Collation mặc định, gây hiện tượng mất dấu hoặc biến thành dấu hỏi '?'.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều lập trình viên nghĩ chỉ cần cột kiểu nvarchar là tự động lưu được tiếng Việt mà quên tiền tố N.",
      "trickWord": "Bẫy thiếu tiền tố N trước hằng chuỗi Unicode trong câu lệnh SQL",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục II.2.b",
      "tip": "Nhập tiếng Việt vào nchar/nvarchar ➔ BẮT BUỘC dùng tiền tố N: N'Nguyễn Văn An'!"
    }
  },
  {
    "id": "db-c3-t1-005",
    "question": "Trong SQL Server 2000, giá trị ngày tháng nhỏ nhất (cận dưới) mà kiểu dữ liệu datetime có thể lưu trữ hợp lệ là ngày nào?",
    "options": [
      "Ngày 01 tháng 01 năm 1753 (các ngày trước mốc này sẽ phát sinh lỗi Out-of-range value khi nạp)",
      "Ngày 01 tháng 01 năm 0001 (chuẩn lịch Gregory quốc tế bắt đầu từ ngày đầu tiên sau Công nguyên)",
      "Ngày 01 tháng 01 năm 1900 (mốc thời gian cơ sở mặc định của hệ thống máy tính cá nhân IBM)",
      "Ngày 01 tháng 01 năm 1970 (mốc thời gian Unix Epoch chuẩn của toàn bộ hệ điều hành hiện đại)"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục II.1.b: Kiểu datetime lưu từ 01/01/1753 đến 31/12/9999 (do Anh chuyển đổi từ lịch Julian sang Gregory năm 1752). Mốc 1900 là của smalldatetime (1900-2079).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm với mốc 1900 của smalldatetime hoặc mốc 1970 của Unix timestamp.",
      "trickWord": "Bẫy cận dưới kiểu datetime: 01/01/1753 (không phải 1900 hay 1970)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục II.1.b",
      "tip": "datetime = 1753 đến 9999; smalldatetime = 1900 đến 2079!"
    }
  },
  {
    "id": "db-c3-t1-006",
    "question": "Cho bảng đã tồn tại dữ liệu. Người quản trị thực hiện lệnh: ALTER TABLE SinhVien ADD Email varchar(50) NOT NULL; mà không chỉ định mệnh đề DEFAULT. Kết quả là gì?",
    "options": [
      "Hệ thống tự động bổ sung cột mới và gán giá trị chuỗi rỗng '' cho tất cả các bản ghi đang tồn tại",
      "Hệ thống báo lỗi và từ chối vì không thể điền giá trị NULL vào cột mới cho các dòng dữ liệu đang có",
      "Hệ thống tự động thêm cột mới và đặt tạm thời giá trị NULL cho toàn bộ các bản ghi trong cơ sở dữ liệu",
      "Hệ thống sẽ tự động kích hoạt tiến trình sao lưu và tự tạo giá trị mặc định theo tên của tài khoản"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục III.2.a: Khi thêm một cột mới có ràng buộc NOT NULL vào bảng ĐÃ CÓ DỮ LIỆU, hệ thống không thể nạp giá trị NULL cho các dòng cũ. Nếu không có DEFAULT cung cấp giá trị thay thế, câu lệnh ALTER TABLE sẽ bị lỗi ngay.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ hệ quản trị sẽ tự gán chuỗi rỗng '' hoặc cho phép tạm NULL.",
      "trickWord": "Bẫy thêm cột NOT NULL không có DEFAULT vào bảng đã có dữ liệu",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.2.a",
      "tip": "Bảng đã có dữ liệu: Thêm cột NOT NULL ➔ BẮT BUỘC PHẢI CÓ DEFAULT!"
    }
  },
  {
    "id": "db-c3-t1-007",
    "question": "Khi thực hiện câu lệnh chèn dữ liệu: INSERT INTO NhanVien (manv, tennv) VALUES (1, N'Lê Văn An'); vào bảng có cột manv mang thuộc tính IDENTITY(1,1), điều gì sẽ xảy ra?",
    "options": [
      "Hệ thống tự động bỏ qua giá trị 1 và thay thế bằng một số ngẫu nhiên không trùng lặp trong bảng",
      "Hệ thống tự động chấp nhận giá trị 1 và đồng bộ bộ đếm tăng tự động cho các lần chèn tiếp theo sau đó",
      "Hệ thống báo lỗi vi phạm vì không thể gán giá trị rõ ràng cho cột IDENTITY khi chưa bật IDENTITY_INSERT",
      "Hệ thống sẽ tự động ghi đè giá trị 1 vào vị trí bản ghi đầu tiên của cơ sở dữ liệu mà không báo lỗi"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục III.1.a: Cột mang thuộc tính IDENTITY tự động sinh số. Theo mặc định, SQL Server cấm người dùng tự chèn giá trị thủ công vào cột này, trừ khi thiết lập `SET IDENTITY_INSERT <ten_bang> ON`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh thường quên quy tắc bảo vệ của cột tự tăng IDENTITY.",
      "trickWord": "Bẫy chèn giá trị trực tiếp vào cột IDENTITY khi chưa bật IDENTITY_INSERT",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.1.a",
      "tip": "Cột IDENTITY: CẤM tự nhập giá trị thủ công trừ khi chạy SET IDENTITY_INSERT ON!"
    }
  },
  {
    "id": "db-c3-t1-008",
    "question": "Cho hai bảng Khoa (MaKhoa PK) và Lop (MaLop PK, MaKhoa FK tham chiếu Khoa). Để xóa toàn bộ bảng Khoa khỏi cơ sở dữ liệu, thứ tự thực thi hợp lệ duy nhất là gì?",
    "options": [
      "Chỉ cần xóa dữ liệu trong bảng Khoa bằng lệnh TRUNCATE TABLE Khoa là bảng tự động biến mất hoàn toàn",
      "Phải xóa bảng Khoa trước (DROP TABLE Khoa) rồi hệ thống sẽ tự động xóa sạch các bảng Lop con theo sau",
      "Có thể xóa bảng Khoa bất kỳ lúc nào nếu dùng lệnh DROP TABLE Khoa CASCADE CONSTRAINTS trong SQL Server",
      "Phải xóa bảng Lop trước (DROP TABLE Lop) rồi mới được phép xóa bảng Khoa (DROP TABLE Khoa)"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục III.2.a: Trong SQL Server, không thể DROP bảng Cha khi đang có bảng Con tham chiếu đến bằng khóa ngoại FK. Phải xóa bảng Con trước (DROP TABLE Lop) hoặc phải xóa ràng buộc FK trước bằng ALTER TABLE.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhớ cú pháp CASCADE của Oracle/PostgreSQL mà quên SQL Server 2000 không có DROP TABLE ... CASCADE.",
      "trickWord": "Bẫy trật tự DROP TABLE: Bảng Con trước ➔ Bảng Cha sau (ngăn vi phạm FK)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.2.a",
      "tip": "Tạo/Chèn: Cha trước, Con sau; Xóa (DROP): CON TRƯỚC, CHA SAU!"
    }
  },
  {
    "id": "db-c3-t1-009",
    "question": "Ràng buộc CHECK trong SQL Server hoạt động theo nguyên lý logic nào khi đánh giá tính hợp lệ của dòng dữ liệu được thêm hoặc sửa?",
    "options": [
      "Dòng dữ liệu bị từ chối CHỈ KHI biểu thức điều kiện CHECK trả về kết quả là FALSE (chấp nhận TRUE và UNKNOWN)",
      "Dòng dữ liệu được chấp nhận CHỈ KHI biểu thức điều kiện CHECK trả về kết quả chính xác là TRUE (từ chối UNKNOWN)",
      "Dòng dữ liệu bị từ chối nếu biểu thức điều kiện trả về UNKNOWN hoặc chứa bất kỳ giá trị NULL nào bên trong",
      "Ràng buộc CHECK chỉ kiểm tra tính hợp lệ khi người dùng thực hiện truy vấn SELECT chứ không chặn INSERT"
    ],
    "answer": 0,
    "explanation": "Chuẩn ANSI SQL & SQL Server: Ràng buộc CHECK chỉ từ chối dòng dữ liệu khi biểu thức kiểm tra trả về FALSE. Nếu biểu thức trả về TRUE hoặc UNKNOWN (ví dụ cột có giá trị NULL khi so sánh), dữ liệu VẪN ĐƯỢC CHẤP NHẬN.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ CHECK bắt buộc phải là TRUE mới cho qua, không biết rằng UNKNOWN cũng được chấp nhận.",
      "trickWord": "Bẫy nguyên lý hoạt động của ràng buộc CHECK: Chấp nhận cả TRUE và UNKNOWN (chỉ từ chối FALSE)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.1.a & III.2.b",
      "tip": "CHECK chỉ từ chối khi kết quả là FALSE; Nếu là NULL (Unknown) thì VẪN HỢP LỆ!"
    }
  },
  {
    "id": "db-c3-t1-010",
    "question": "Sự khác biệt kỹ thuật cơ bản nhất giữa ràng buộc PRIMARY KEY và ràng buộc UNIQUE trong SQL Server là gì?",
    "options": [
      "PRIMARY KEY cho phép chứa nhiều giá trị NULL, trong khi ràng buộc UNIQUE tuyệt đối không cho phép bất kỳ giá trị NULL nào",
      "PRIMARY KEY tự động tạo chỉ mục Clustered và cấm NULL, còn UNIQUE tạo Non-clustered và cho phép tối đa 1 giá trị NULL",
      "Một bảng có thể tạo được nhiều PRIMARY KEY độc lập, nhưng chỉ được phép tạo duy nhất một ràng buộc UNIQUE trên toàn bảng",
      "PRIMARY KEY chỉ áp dụng được trên một cột đơn lẻ, trong khi UNIQUE có thể áp dụng trên tổ hợp nhiều thuộc tính phức hợp"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục III.1.a: Mỗi bảng chỉ có tối đa 1 PRIMARY KEY (tự động tạo Clustered Index mặc định, cấm mọi giá trị NULL). Trong khi đó, bảng có thể có nhiều UNIQUE (tạo Non-clustered Index mặc định, cho phép tối đa 1 giá trị NULL trong SQL Server).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm rằng UNIQUE cấm hoàn toàn NULL hoặc bảng có thể có nhiều khóa chính.",
      "trickWord": "Bẫy đối sánh PRIMARY KEY vs UNIQUE: Clustered Index & chấp nhận tối đa 1 NULL",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.1.a",
      "tip": "PK: Đúng 1 cái/bảng, Clustered Index, CẤM NULL; UNIQUE: Nhiều cái/bảng, cho phép 1 giá trị NULL!"
    }
  },
  {
    "id": "db-c3-t1-011",
    "question": "Khi tạo bảng với thuộc tính luong money DEFAULT (1000). Nếu thực hiện câu lệnh: INSERT INTO NhanVien (manv, luong) VALUES ('NV01', NULL); thì giá trị của cột luong sẽ là gì?",
    "options": [
      "Hệ thống sẽ lập tức báo lỗi cú pháp do xung đột trực tiếp giữa giá trị NULL và định nghĩa DEFAULT của thuộc tính",
      "Cột luong sẽ nhận giá trị mặc định là 1000 vì giá trị NULL không được phép ghi đè lên mệnh đề DEFAULT đã định nghĩa",
      "Cột luong sẽ mang giá trị NULL vì lệnh INSERT đã chủ động chỉ định rõ ràng giá trị NULL thay vì bỏ qua cột đó",
      "Hệ thống sẽ tự động gán giá trị 0 vì kiểu dữ liệu money không cho phép lưu trữ trạng thái rỗng trong bộ nhớ"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục III.1.a: Mệnh đề DEFAULT chỉ được kích hoạt khi cột đó HOÀN TOÀN KHÔNG ĐƯỢC LIỆT KÊ trong danh sách cột của lệnh INSERT. Nếu người dùng chỉ định rõ ràng giá trị NULL, cột sẽ nhận giá trị NULL.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ khi có DEFAULT thì NULL sẽ bị thay thế bằng giá trị mặc định 1000.",
      "trickWord": "Bẫy kích hoạt DEFAULT: Chỉ kích hoạt khi KHÔNG NHẬP, nhập NULL vẫn nhận NULL",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.1.a",
      "tip": "Không nhập cột ➔ Nhận DEFAULT; Nhập rõ NULL ➔ Nhận NULL (nếu cột cho phép NULL)!"
    }
  },
  {
    "id": "db-c3-t1-012",
    "question": "Hành vi tham chiếu nào sau đây của khóa ngoại (ON DELETE) sẽ tự động xóa tất cả các bản ghi con tương ứng khi bản ghi cha bị xóa khỏi CSDL?",
    "options": [
      "ON DELETE SET DEFAULT (tự động cập nhật cột khóa ngoại ở bảng con về giá trị mặc định ban đầu)",
      "ON DELETE NO ACTION (hệ thống tự động phát hiện và ngăn chặn không cho xóa bản ghi ở bảng cha)",
      "ON DELETE SET NULL (tự động cập nhật cột khóa ngoại ở bảng con trở thành giá trị rỗng NULL)",
      "ON DELETE CASCADE (tự động lan truyền thao tác xóa từ bảng cha xuống các bản ghi con liên quan)"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục III.2.b: Tùy chọn CASCADE (lan truyền) chỉ định rằng khi một dòng ở bảng cha bị xóa/sửa thì tất cả các dòng tham chiếu đến nó ở bảng con cũng tự động bị xóa/sửa theo.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn giữa NO ACTION (mặc định) và CASCADE (lan truyền).",
      "trickWord": "Bẫy hành vi tham chiếu khóa ngoại: CASCADE = Lan truyền thao tác xóa/sửa",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.2.b",
      "tip": "CASCADE = Xóa Cha thì Con chết theo; NO ACTION = Báo lỗi chặn lại!"
    }
  },
  {
    "id": "db-c3-t1-013",
    "question": "Cho lệnh tạo bảng: CREATE TABLE Test (A char(10), B varchar(10)). Thực hiện chèn chuỗi 'CSDL' vào cả hai cột. Hàm DATALENGTH() trả về kết quả độ dài byte của hai cột lần lượt là gì?",
    "options": [
      "Cột A trả về đúng 10 bytes (do char tự bù dấu cách), cột B trả về đúng 4 bytes (do varchar co giãn theo ký tự thực)",
      "Cả hai cột A và B đều trả về đúng 4 bytes vì cùng lưu chuỗi gồm đúng 4 ký tự chữ cái 'C', 'S', 'D', 'L'",
      "Cả hai cột A và B đều trả về đúng 10 bytes vì dung lượng khai báo tối đa ban đầu của cả hai trường là 10 ký tự",
      "Cột A trả về đúng 8 bytes (chuẩn Non-Unicode), còn cột B trả về đúng 4 bytes do được nén dữ liệu tự động"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục II.2.a: char(10) là chuỗi độ dài cố định, chuỗi 'CSDL' (4 ký tự) sẽ được tự động điền thêm 6 khoảng trắng ở cuối ➔ DATALENGTH(A) = 10 bytes. varchar(10) có độ dài thay đổi theo thực tế ➔ DATALENGTH(B) = 4 bytes.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm hàm DATALENGTH (đo số byte thực tế lưu trữ) với hàm LEN (bỏ qua khoảng trắng ở đuôi).",
      "trickWord": "Bẫy tự động bù khoảng trắng (space padding) của kiểu dữ liệu char(n)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục II.2.a",
      "tip": "char(n) LUÔN CHIẾM ĐỦ n bytes (bù space); varchar(n) chỉ chiếm đúng số ký tự thực tế!"
    }
  },
  {
    "id": "db-c3-t1-014",
    "question": "Điều kiện nào sau đây là BẮT BUỘC để có thể thiết lập quan hệ Khóa ngoại (Foreign Key) giữa hai bảng trong SQL Server?",
    "options": [
      "Cột khóa ngoại ở bảng con bắt buộc phải có tên gọi hoàn toàn trùng khớp với tên cột ở bảng cha được trỏ tới",
      "Cột được tham chiếu ở bảng cha bắt buộc phải có ràng buộc PRIMARY KEY hoặc ràng buộc UNIQUE xác thực",
      "Cả hai bảng tham gia thiết lập khóa ngoại bắt buộc phải được tạo ra trong cùng một câu lệnh CREATE DATABASE",
      "Cột khóa ngoại ở bảng con bắt buộc phải được thiết lập thuộc tính NOT NULL và có sẵn giá trị mặc định DEFAULT"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục III.1.a & III.2.b: Khóa ngoại chỉ có thể tham chiếu đến một cột đóng vai trò là Khóa chính (PRIMARY KEY) hoặc Khóa duy nhất (UNIQUE) ở bảng cha. Tên cột ở bảng con không bắt buộc phải giống bảng cha.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ cột FK phải trùng tên với cột PK ở bảng cha, hoặc chỉ được trỏ về PRIMARY KEY (quên mất UNIQUE cũng được).",
      "trickWord": "Bẫy điều kiện tham chiếu FK: Phải trỏ về cột có PRIMARY KEY hoặc UNIQUE",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.1.a",
      "tip": "FK có thể khác tên cột; Bắt buộc trỏ về cột có PK hoặc UNIQUE ở bảng Cha!"
    }
  },
  {
    "id": "db-c3-t1-015",
    "question": "Để xóa hoàn toàn một ràng buộc khóa ngoại có tên FK_SV_Lop khỏi bảng SinhVien, câu lệnh chuẩn xác là gì?",
    "options": [
      "ALTER TABLE SinhVien DELETE FOREIGN KEY FK_SV_Lop; (lệnh xóa khóa ngoại chuẩn theo cấu trúc của ngôn ngữ DML)",
      "DROP CONSTRAINT FK_SV_Lop FROM TABLE SinhVien; (cú pháp trực tiếp được sử dụng phổ biến trong hệ điều hành)",
      "ALTER TABLE SinhVien DROP CONSTRAINT FK_SV_Lop; (xóa định nghĩa ràng buộc mà không làm ảnh hưởng đến dữ liệu)",
      "DROP FOREIGN KEY FK_SV_Lop ON SinhVien; (cú pháp ngắn gọn loại bỏ liên kết bảng mà không kiểm tra dữ liệu)"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục III.2.a: Trong SQL Server, xóa bất kỳ ràng buộc nào (PK, FK, UNIQUE, CHECK, DEFAULT) đều dùng cú pháp: `ALTER TABLE <ten_bang> DROP CONSTRAINT <ten_rang_buoc>;`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm cú pháp MySQL (`DROP FOREIGN KEY`) với cú pháp chuẩn của T-SQL (`ALTER TABLE ... DROP CONSTRAINT`).",
      "trickWord": "Bẫy cú pháp T-SQL: Xóa ràng buộc bắt buộc dùng ALTER TABLE ... DROP CONSTRAINT",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.2.a",
      "tip": "T-SQL xóa ràng buộc = ALTER TABLE <Bảng> DROP CONSTRAINT <TênRàngBuộc>!"
    }
  },
  {
    "id": "db-c3-t1-016",
    "question": "Thứ tự thực thi logic thực tế (Logical Query Processing Order) của các mệnh đề trong câu lệnh SELECT chuẩn là gì?",
    "options": [
      "WHERE ➔ FROM ➔ GROUP BY ➔ HAVING ➔ SELECT ➔ ORDER BY ➔ DISTINCT (trật tự lọc điều kiện trước khi quét quan hệ)",
      "SELECT ➔ FROM ➔ WHERE ➔ GROUP BY ➔ HAVING ➔ DISTINCT ➔ ORDER BY (theo đúng trật tự cú pháp viết của lập trình viên)",
      "FROM ➔ SELECT ➔ WHERE ➔ GROUP BY ➔ HAVING ➔ ORDER BY ➔ DISTINCT (trật tự nạp bộ nhớ đệm tạm thời của hệ thống)",
      "FROM ➔ WHERE ➔ GROUP BY ➔ HAVING ➔ SELECT ➔ DISTINCT ➔ ORDER BY (trật tự chuẩn mực của cỗ máy tối ưu hóa SQL)"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục IV.1 & Section 0: Cỗ máy thực thi SQL xử lý: (1) FROM (+ JOIN); (2) WHERE; (3) GROUP BY; (4) HAVING; (5) SELECT; (6) DISTINCT; (7) ORDER BY; (8) TOP.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm thứ tự viết cú pháp (bắt đầu bằng SELECT) với thứ tự thực thi logic bên dưới động cơ SQL.",
      "trickWord": "Bẫy trật tự thực thi logic: FROM chạy đầu tiên, SELECT chạy gần cuối, ORDER BY chạy cuối cùng",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.1 & Section 0",
      "tip": "Trật tự logic: FROM ➔ WHERE ➔ GROUP BY ➔ HAVING ➔ SELECT ➔ DISTINCT ➔ ORDER BY!"
    }
  },
  {
    "id": "db-c3-t1-017",
    "question": "Tại sao câu lệnh sau bị báo lỗi biên dịch: SELECT luong * 12 AS ThuNhapNam FROM NhanVien WHERE ThuNhapNam > 50000;?",
    "options": [
      "Vì mệnh đề WHERE được thực thi trước mệnh đề SELECT nên bí danh (Alias) ThuNhapNam chưa hề tồn tại trong bộ nhớ",
      "Vì toán tử nhân (*) không được phép sử dụng trong danh sách chiếu của mệnh đề SELECT theo chuẩn ngôn ngữ T-SQL",
      "Vì kiểu dữ liệu của biểu thức tính toán không tương thích với hằng số nguyên 50000 trong điều kiện lọc dữ liệu",
      "Vì bí danh cột bắt buộc phải được đặt trong dấu ngoặc vuông [ThuNhapNam] thì hệ thống SQL mới chấp nhận"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục IV.2.a: Theo thứ tự thực thi logic, mệnh đề WHERE chạy trước mệnh đề SELECT. Do đó tại thời điểm quét WHERE, bí danh ThuNhapNam chưa được định nghĩa. Phải viết lại là: `WHERE luong * 12 > 50000`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh thấy cú pháp viết SELECT đứng trước WHERE nên tưởng bí danh cột đã có sẵn để dùng trong WHERE.",
      "trickWord": "Bẫy dùng Alias của SELECT trong mệnh đề WHERE (Lỗi logic biên dịch kinh điển)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a",
      "tip": "WHERE chạy TRƯỚC SELECT ➔ Tuyệt đối không được dùng Alias của SELECT trong WHERE!"
    }
  },
  {
    "id": "db-c3-t1-018",
    "question": "Điều gì xảy ra khi thực hiện truy vấn chứa điều kiện: SELECT * FROM SinhVien WHERE DiemTB = NULL;?",
    "options": [
      "Truy vấn trả về tất cả những sinh viên có điểm trung bình thực sự bị bỏ trống hoặc mang giá trị rỗng NULL",
      "Truy vấn không trả về bất kỳ dòng nào (kể cả những sinh viên có DiemTB là NULL) do phép so sánh = NULL trả về UNKNOWN",
      "Hệ thống sẽ lập tức báo lỗi cú pháp do từ khóa NULL không được phép đứng bên phải của dấu bằng so sánh",
      "Truy vấn tự động thay thế giá trị NULL thành số 0 và trả về danh sách các sinh viên có điểm trung bình bằng 0"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục IV.2.a: Trong logic 3 giá trị (3-valued logic: True, False, Unknown) của SQL, NULL biểu thị giá trị chưa biết. Mọi phép so sánh với NULL bằng toán tử `=`, `<>`, `>`, `<` đều trả về UNKNOWN (được WHERE coi là False). Bắt buộc phải dùng `IS NULL`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thói quen lập trình các ngôn ngữ khác (C, Java) khiến học viên dùng `= NULL` thay vì `IS NULL`.",
      "trickWord": "Bẫy so sánh bằng với NULL: = NULL luôn trả về UNKNOWN ➔ Không bao giờ ra kết quả",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a",
      "tip": "Tìm NULL bắt buộc dùng IS NULL; Viết = NULL hoặc <> NULL là BỊ BẪY NGAY!"
    }
  },
  {
    "id": "db-c3-t1-019",
    "question": "Cho bảng NhanVien có 10 dòng, trong đó có đúng 3 dòng mang giá trị NULL ở cột Thuong. Kết quả của COUNT(*) và COUNT(Thuong) lần lượt là gì?",
    "options": [
      "COUNT(*) trả về đúng 7 dòng, trong khi COUNT(Thuong) trả về đúng 10 dòng do bao hàm cả các giá trị rỗng trong bảng",
      "Cả hai hàm COUNT(*) và COUNT(Thuong) đều trả về đúng 10 dòng vì cùng thao tác trên một quan hệ nhân viên duy nhất",
      "COUNT(*) trả về đúng 10, trong khi COUNT(Thuong) trả về đúng 7 (do COUNT(cột) tự động loại bỏ các giá trị NULL)",
      "Hàm COUNT(Thuong) sẽ phát sinh lỗi sập hệ thống do không thể tính toán số đếm trên một cột chứa giá trị rỗng"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục IV.3.a: COUNT(*) đếm tổng số dòng trong bảng (kể cả dòng toàn NULL). COUNT(cot) chỉ đếm các dòng có giá trị khác NULL trong cột đó (10 - 3 = 7 dòng).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ COUNT(*) và COUNT(cột) luôn trả về kết quả giống hệt nhau.",
      "trickWord": "Bẫy hàm COUNT(*) vs COUNT(cột) khi dữ liệu có chứa giá trị NULL",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "COUNT(*) đếm tất cả dòng; COUNT(cột) BỎ QUA các dòng mang giá trị NULL!"
    }
  },
  {
    "id": "db-c3-t1-020",
    "question": "Truy vấn sau đây gặp lỗi kỹ thuật gì: SELECT Phong, COUNT(*) AS SoLuong FROM NhanVien WHERE COUNT(*) > 5 GROUP BY Phong;?",
    "options": [
      "Lỗi do mệnh đề GROUP BY bắt buộc phải được đặt trước mệnh đề WHERE theo quy tắc cú pháp ngôn ngữ T-SQL",
      "Lỗi do không thể đặt bí danh SoLuong cho hàm kết hợp COUNT(*) khi có sử dụng mệnh đề gom nhóm GROUP BY",
      "Lỗi do danh sách chọn SELECT chỉ được phép chứa cột gom nhóm Phong mà không được phép chứa thêm hàm kết hợp",
      "Lỗi do sử dụng hàm kết hợp COUNT(*) trong mệnh đề WHERE (điều kiện nhóm bắt buộc phải đặt trong mệnh đề HAVING)"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục IV.3.a: Mệnh đề WHERE lọc từng dòng ĐƠN LẺ trước khi gom nhóm, do đó KHÔNG ĐƯỢC PHÉP chứa các hàm kết hợp (COUNT, SUM, AVG, MAX, MIN). Muốn lọc theo điều kiện của hàm kết hợp, bắt buộc phải dùng mệnh đề HAVING (đặt sau GROUP BY).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Người học hay tiện tay viết điều kiện hàm gom nhóm vào mệnh đề WHERE.",
      "trickWord": "Bẫy dùng hàm kết hợp (Aggregate functions) trong mệnh đề WHERE",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "Lọc dòng đơn lẻ ➔ Dùng WHERE; Lọc giá trị hàm kết hợp (COUNT, SUM...) ➔ BẮT BUỘC DÙNG HAVING!"
    }
  },
  {
    "id": "db-c3-t1-021",
    "question": "Quy tắc bắt buộc nào sau đây được áp dụng cho danh sách các thuộc tính xuất hiện trong mệnh đề SELECT khi có sử dụng GROUP BY?",
    "options": [
      "Mọi cột trong SELECT không nằm trong hàm kết hợp thì BẮT BUỘC phải xuất hiện trong mệnh đề GROUP BY",
      "Mọi cột xuất hiện trong mệnh đề GROUP BY bắt buộc phải có mặt đầy đủ trong danh sách chiếu của SELECT",
      "Mệnh đề SELECT chỉ được phép chứa các hàm kết hợp và tuyệt đối không được hiển thị bất kỳ cột thông thường nào",
      "Tất cả các cột trong bảng cơ sở đều phải được liệt kê vào mệnh đề GROUP BY để bảo toàn cấu trúc dữ liệu"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục IV.3.a: Nguyên tắc gom nhóm chuẩn: Mỗi thuộc tính xuất hiện trong danh sách SELECT bắt buộc phải là: (1) Thuộc tính có mặt trong mệnh đề GROUP BY, HOẶC (2) Đối số của một hàm kết hợp (Aggregate function).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn cột tự do vào SELECT mà không đưa vào GROUP BY, dẫn đến lỗi \"is invalid in the select list because it is not contained in either an aggregate function or the GROUP BY clause\".",
      "trickWord": "Bẫy ràng buộc danh sách cột SELECT khi có gom nhóm GROUP BY",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "Cột ở SELECT nếu không nằm trong hàm (COUNT, SUM...) ➔ BẮT BUỘC phải có trong GROUP BY!"
    }
  },
  {
    "id": "db-c3-t1-022",
    "question": "Cho truy vấn tìm nhân viên có mã không thuộc tập hợp: SELECT manv FROM NhanVien WHERE manv NOT IN (1, 2, NULL);. Kết quả trả về là gì?",
    "options": [
      "Truy vấn trả về tất cả các nhân viên có mã số khác 1 và khác 2 (hệ thống tự động loại bỏ giá trị NULL trong tập)",
      "Truy vấn trả về tập hợp rỗng (0 dòng) vì phép so sánh phủ định với giá trị NULL luôn trả về kết quả UNKNOWN",
      "Truy vấn sẽ phát sinh lỗi sập hệ thống do toán tử tập hợp NOT IN không thể chấp nhận đối số có giá trị NULL",
      "Truy vấn trả về toàn bộ tất cả nhân viên trong bảng vì biểu thức so sánh luôn được mặc định đánh giá là TRUE"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục IV.3.b: `NOT IN (1, 2, NULL)` tương đương với `(manv <> 1) AND (manv <> 2) AND (manv <> NULL)`. Vì `manv <> NULL` luôn trả về UNKNOWN, nên toàn bộ mệnh đề logic AND sẽ trả về UNKNOWN hoặc FALSE ➔ Không bao giờ trả về bất kỳ dòng nào! Đây là bẫy tử thần của NOT IN.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Học viên nghĩ NOT IN sẽ loại bỏ 1 và 2 và bỏ qua NULL, không ngờ rằng có NULL khiến cả câu truy vấn trả về rỗng.",
      "trickWord": "Bẫy tử thần NOT IN với tập con chứa giá trị NULL (Luôn trả về rỗng)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b",
      "tip": "Tập con có NULL: IN vẫn ra kết quả; nhưng NOT IN ➔ LUÔN RA TẬP RỖNG (0 dòng)!"
    }
  },
  {
    "id": "db-c3-t1-023",
    "question": "Để giải quyết triệt để và an toàn bẫy giá trị NULL của toán tử NOT IN trong bài toán kiểm tra sự tồn tại (Anti-Join), ta nên thay thế bằng giải pháp nào?",
    "options": [
      "Chuyển đổi toàn bộ câu lệnh sang sử dụng mệnh đề INTERSECT để tìm phần tử chung giữa hai bảng dữ liệu",
      "Sử dụng toán tử so sánh khác (<>) kết hợp với từ khóa ANY để so sánh từng phần tử đơn lẻ trong tập hợp",
      "Sử dụng mệnh đề NOT EXISTS với câu truy vấn con tương quan (an toàn tuyệt đối trước mọi giá trị NULL)",
      "Thêm mệnh đề ORDER BY vào cuối câu truy vấn con để hệ thống tự động đẩy các giá trị NULL về cuối cùng"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục IV.3.b & VI.1.b: `NOT EXISTS` chỉ kiểm tra có dòng nào thỏa mãn hay không (True/False dựa trên số lượng dòng trả về), không thực hiện phép so sánh giá trị trực tiếp với NULL, do đó hoàn toàn miễn nhiễm với bẫy NULL của `NOT IN`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh không biết vì sao NOT EXISTS ưu việt hơn NOT IN trong xử lý dữ liệu thực tế.",
      "trickWord": "Bẫy thay thế an toàn: NOT EXISTS thay cho NOT IN để miễn nhiễm với NULL",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b & VI.1.b",
      "tip": "Tìm \"không tồn tại\" (Anti-Join) an toàn nhất ➔ DÙNG NOT EXISTS thay cho NOT IN!"
    }
  },
  {
    "id": "db-c3-t1-024",
    "question": "Sự khác biệt bản chất giữa việc đặt điều kiện lọc ở mệnh đề ON so với đặt ở mệnh đề WHERE trong phép LEFT JOIN là gì?",
    "options": [
      "Đặt điều kiện ở ON sẽ biến câu lệnh thành INNER JOIN, còn đặt ở WHERE sẽ giữ nguyên bản chất của LEFT JOIN",
      "ON và WHERE trong phép LEFT JOIN hoàn toàn có tác dụng và trả về kết quả giống hệt nhau trong mọi trường hợp",
      "Mệnh đề ON chỉ áp dụng cho bảng bên trái, còn mệnh đề WHERE chỉ có tác dụng lọc dữ liệu cho bảng bên phải",
      "ON lọc bảng bên phải trước khi ghép (vẫn giữ đủ các dòng bảng trái); WHERE lọc kết quả sau khi đã thực hiện phép nối"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục IV.3.a: Trong LEFT JOIN: điều kiện ở `ON` xác định dòng nào của bảng phải được ghép với bảng trái (nếu không khớp, bảng trái vẫn hiển thị và bảng phải điền NULL). Nhưng nếu đặt điều kiện lọc bảng phải ở `WHERE` (ví dụ `WHERE B.col = 5`), các dòng có B.col IS NULL sẽ bị WHERE loại bỏ ➔ vô tình biến LEFT JOIN thành INNER JOIN!",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Bẫy kinh điển trong viết SQL: Đặt điều kiện lọc bảng phụ vào WHERE làm triệt tiêu tác dụng của LEFT JOIN.",
      "trickWord": "Bẫy điều kiện lọc ở ON vs WHERE trong phép LEFT OUTER JOIN",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "LEFT JOIN: Muốn giữ đủ dòng bảng trái ➔ Điều kiện bảng phải PHẢI NẰM Ở ON, không đưa vào WHERE!"
    }
  },
  {
    "id": "db-c3-t1-025",
    "question": "Khi sử dụng toán tử LIKE trong T-SQL, ký tự đại diện nào sau đây đại diện cho ĐÚNG MỘT KÝ TỰ BẤT KỲ?",
    "options": [
      "Ký tự dấu gạch dưới `_` (đại diện chính xác cho duy nhất một ký tự bất kỳ tại vị trí tương ứng)",
      "Ký tự dấu phần trăm `%` (đại diện cho một chuỗi gồm đúng một ký tự chữ cái trong bảng mã ASCII)",
      "Ký tự dấu chấm hỏi `?` (đại diện cho một ký tự bất kỳ theo chuẩn biểu thức chính quy RegEx)",
      "Ký tự dấu hoa thị `*` (đại diện cho một ký tự đại diện mở rộng theo chuẩn hệ điều hành DOS)"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục IV.2.a: Trong SQL: `%` đại diện cho chuỗi ký tự bất kỳ có độ dài tùy ý (từ 0 đến nhiều ký tự); `_` đại diện cho ĐÚNG 1 ký tự bất kỳ. Dấu `?` và `*` là của hệ điều hành Windows/DOS, không phải của SQL.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh bị thói quen tìm kiếm tập tin trong Windows dùng `?` và `*` nên chọn nhầm.",
      "trickWord": "Bẫy ký tự đại diện của LIKE: `_` là 1 ký tự, `%` là chuỗi ký tự",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a",
      "tip": "SQL LIKE: `_` = Đúng 1 ký tự; `%` = Chuỗi 0 hoặc nhiều ký tự!"
    }
  },
  {
    "id": "db-c3-t1-026",
    "question": "Cho điều kiện lọc: WHERE Luong BETWEEN 1000 AND 3000. Khẳng định nào sau đây là CHÍNH XÁC về dải giá trị được lấy?",
    "options": [
      "Chỉ lấy các giá trị nằm nghiêm ngặt ở khoảng giữa, hoàn toàn loại trừ hai giá trị cận biên 1000 và 3000",
      "Lấy dải giá trị từ 1000 đến 3000 BAO GỒM CẢ 1000 VÀ 3000 (tương đương Luong >= 1000 AND Luong <= 3000)",
      "Chỉ lấy giá trị cận dưới 1000 và loại trừ giá trị cận trên 3000 theo chuẩn quy ước nửa khoảng toán học",
      "Báo lỗi cú pháp nếu thứ tự bị đảo ngược từ lớn đến bé thành BETWEEN 3000 AND 1000 trong mệnh đề WHERE"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục IV.2.a: Toán tử `BETWEEN a AND b` trong SQL tương đương với toán tử so sánh `(x >= a AND x <= b)`. Dải giá trị là đoạn đóng $[a, b]$, LUÔN BAO GỒM CẢ HAI ĐẦU MÚT a và b.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm với khái niệm \"ở giữa\" trong tiếng Việt (tưởng loại trừ 2 đầu mút).",
      "trickWord": "Bẫy toán tử BETWEEN: Luôn bao gồm cả hai giá trị đầu mút (Đoạn đóng [a, b])",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a",
      "tip": "BETWEEN 1000 AND 3000 = [1000, 3000] (Lấy cả 1000 và 3000)!"
    }
  },
  {
    "id": "db-c3-t1-027",
    "question": "Hàm kết hợp nào sau đây trong SQL KHÔNG BỎ QUA giá trị NULL khi tính toán trên tập dữ liệu?",
    "options": [
      "Hàm SUM(Luong) (tự động quy đổi các giá trị NULL về số 0 trước khi tiến hành tính tổng toàn bộ bảng)",
      "Hàm AVG(Luong) (tự động cộng dồn và chia trung bình cho tổng tất cả các dòng bao gồm cả các ô rỗng)",
      "Hàm COUNT(*) (đếm toàn bộ số lượng dòng dữ liệu của bảng bất kể giá trị các cột có NULL hay không)",
      "Hàm MIN(Luong) (sẽ coi giá trị NULL là giá trị nhỏ nhất trong miền số thực và trả về kết quả là NULL)"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục IV.3.a: Tất cả các hàm kết hợp (SUM, AVG, MIN, MAX, COUNT(cột)) đều tự động bỏ qua giá trị NULL khi tính toán. DUY NHẤT hàm COUNT(*) là tính toán trên từng dòng nguyên vẹn nên không bỏ qua dòng nào, kể cả dòng toàn NULL.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ AVG sẽ tính NULL là 0 và chia cho tổng số dòng (thực tế AVG bỏ qua NULL cả ở tử số lẫn mẫu số).",
      "trickWord": "Bẫy xử lý NULL của các hàm kết hợp: Duy nhất COUNT(*) không bỏ qua NULL",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "Tất cả hàm kết hợp (SUM, AVG, MIN, MAX, COUNT(cột)) đều BỎ QUA NULL; Chỉ COUNT(*) đếm hết!"
    }
  },
  {
    "id": "db-c3-t1-028",
    "question": "Điều gì xảy ra khi mệnh đề GROUP BY gom nhóm trên một cột có chứa nhiều giá trị NULL?",
    "options": [
      "Hệ thống sẽ phát sinh lỗi biên dịch do giá trị NULL không có giá trị cụ thể để so sánh bằng nhau",
      "Mỗi dòng chứa giá trị NULL sẽ được tách riêng ra thành một nhóm độc lập riêng biệt không trùng nhau",
      "Hệ thống sẽ tự động loại bỏ toàn bộ các dòng chứa giá trị NULL ra khỏi kết quả trước khi gom nhóm",
      "Tất cả các dòng chứa giá trị NULL sẽ được gom chung lại thành MỘT NHÓM DUY NHẤT trong kết quả truy vấn"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục IV.3.a: Theo chuẩn SQL, trong mệnh đề GROUP BY, tất cả các giá trị NULL được coi là tương đương nhau và được gom chung lại thành MỘT NHÓM DUY NHẤT.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ NULL <> NULL trong WHERE thì trong GROUP BY chúng cũng không bằng nhau.",
      "trickWord": "Bẫy gom nhóm trên cột chứa NULL: Tất cả NULL về chung 1 nhóm duy nhất",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "GROUP BY trên cột có NULL ➔ Tất cả các dòng NULL gộp thành 1 NHÓM DUY NHẤT!"
    }
  },
  {
    "id": "db-c3-t1-029",
    "question": "Toán tử UNION và toán tử UNION ALL khác biệt căn bản nhất ở điểm nào trong quá trình xử lý tập kết quả?",
    "options": [
      "UNION tự động loại bỏ các dòng dữ liệu trùng lặp và sắp xếp kết quả, còn UNION ALL giữ lại tất cả các dòng",
      "UNION chỉ áp dụng được cho hai bảng có cùng tên thuộc tính, còn UNION ALL áp dụng được cho mọi bảng bất kỳ",
      "UNION ALL có tốc độ thực thi chậm hơn nhiều so với UNION vì phải tốn tài nguyên kiểm tra trùng lặp dữ liệu",
      "UNION cho phép các cột khác kiểu dữ liệu ghép nối với nhau, còn UNION ALL bắt buộc phải hoàn toàn trùng kiểu"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục IV.3.b: `UNION` gộp hai tập kết quả và tự động thực hiện phép loại bỏ trùng lặp (DISTINCT - tốn chi phí sắp xếp/sort). `UNION ALL` chỉ đơn giản nối tất cả các dòng lại với nhau, giữ nguyên các dòng trùng lặp nên chạy nhanh hơn nhiều.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ UNION ALL là \"tất cả\" nên phải làm nhiều việc hơn và chậm hơn UNION.",
      "trickWord": "Bẫy hiệu năng UNION vs UNION ALL: UNION phải khử trùng lặp (chậm hơn UNION ALL)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b",
      "tip": "UNION = Gộp + Khử trùng lặp (chậm); UNION ALL = Gộp trực tiếp giữ nguyên trùng lặp (nhanh)!"
    }
  },
  {
    "id": "db-c3-t1-030",
    "question": "Trong câu truy vấn con lồng nhau (Subquery), toán tử nào sau đây trả về TRUE nếu có ÍT NHẤT MỘT DÒNG kết quả được sinh ra từ truy vấn con?",
    "options": [
      "Toán tử IN (kiểm tra sự tồn tại của một tập hợp các giá trị đơn lẻ trong danh sách các thuộc tính)",
      "Toán tử EXISTS (kiểm tra sự tồn tại của các bản ghi, trả về TRUE ngay khi tìm thấy dòng đầu tiên)",
      "Toán tử ALL (yêu cầu tất cả các phần tử trong câu truy vấn con phải thỏa mãn điều kiện so sánh)",
      "Toán tử ANY (yêu cầu biểu thức bên trái phải có giá trị bằng với giá trị trung bình của tập con)"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục IV.3.b: `EXISTS (<subquery>)` trả về TRUE nếu câu truy vấn con trả về từ 1 dòng trở lên, trả về FALSE nếu câu truy vấn con trả về tập rỗng (0 dòng). Ngay khi tìm thấy dòng đầu tiên, động cơ SQL dừng quét (short-circuit).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn cú pháp và cơ chế giữa IN (so khớp giá trị) và EXISTS (kiểm tra số dòng tồn tại).",
      "trickWord": "Bẫy cơ chế toán tử EXISTS: Trả về TRUE khi câu truy vấn con có >= 1 dòng",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b",
      "tip": "EXISTS chỉ quan tâm CÓ DÒNG NÀO KHÔNG (>= 1 dòng là TRUE, không có dòng nào là FALSE)!"
    }
  },
  {
    "id": "db-c3-t1-031",
    "question": "Mệnh đề ORDER BY trong câu lệnh SELECT có đặc quyền gì vượt trội hơn so với mệnh đề WHERE liên quan đến bí danh (Alias)?",
    "options": [
      "ORDER BY cho phép gán lại kiểu dữ liệu mới cho các cột được chọn mà không cần dùng hàm CONVERT",
      "ORDER BY có thể sử dụng các bí danh được định nghĩa tạm thời trong các hàm thủ tục lưu trữ mở rộng",
      "ORDER BY được phép sử dụng trực tiếp các bí danh (Alias) đã được đặt ở mệnh đề SELECT trước đó",
      "ORDER BY có thể tự động bỏ qua các giá trị NULL mà không cần người dùng chỉ định điều kiện lọc"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục IV.2.a: Theo thứ tự thực thi logic, mệnh đề `ORDER BY` chạy SAU mệnh đề `SELECT`. Do đó tại bước ORDER BY, các bí danh cột (Alias) đã được tạo ra và có thể sử dụng hợp lệ (khác với WHERE chạy trước SELECT nên không dùng được).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhớ mang máng \"SQL không cho dùng Alias\" mà quên mất ORDER BY chạy sau SELECT nên ĐƯỢC PHÉP dùng Alias.",
      "trickWord": "Bẫy dùng Alias trong ORDER BY: Hoàn toàn hợp lệ vì ORDER BY chạy sau SELECT",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a",
      "tip": "WHERE chạy trước SELECT ➔ CẤM dùng Alias; ORDER BY chạy sau SELECT ➔ ĐƯỢC DÙNG Alias!"
    }
  },
  {
    "id": "db-c3-t1-032",
    "question": "Để lọc ra danh sách các phòng ban có mức lương trung bình lớn hơn 3000, cấu trúc câu lệnh chuẩn xác là gì?",
    "options": [
      "SELECT Phong, AVG(Luong) FROM NhanVien HAVING AVG(Luong) > 3000; (bỏ qua mệnh đề GROUP BY để hệ thống tự suy diễn)",
      "SELECT Phong, AVG(Luong) FROM NhanVien WHERE AVG(Luong) > 3000 GROUP BY Phong; (lọc trực tiếp trong mệnh đề WHERE)",
      "SELECT Phong, AVG(Luong) FROM NhanVien GROUP BY Phong WHERE AVG(Luong) > 3000; (đổi vị trí mệnh đề WHERE ra phía sau)",
      "SELECT Phong, AVG(Luong) FROM NhanVien GROUP BY Phong HAVING AVG(Luong) > 3000; (chuẩn xác theo quy tắc gom nhóm)"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục IV.3.a: Điều kiện lọc trên hàm kết hợp `AVG(Luong) > 3000` bắt buộc phải đặt trong mệnh đề `HAVING`, và phải đi kèm với `GROUP BY Phong`. Đặt trong WHERE là sai cú pháp.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn giữa WHERE và HAVING hoặc đặt vị trí WHERE sau GROUP BY.",
      "trickWord": "Bẫy lọc hàm kết hợp AVG: Bắt buộc dùng GROUP BY ... HAVING",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "Lọc hàm kết hợp (AVG, COUNT...) ➔ BẮT BUỘC dùng GROUP BY ... HAVING!"
    }
  },
  {
    "id": "db-c3-t1-033",
    "question": "Cho hai bảng A có 3 dòng và B có 4 dòng. Kết quả của phép nối chéo (CROSS JOIN) giữa hai bảng A và B sẽ trả về bao nhiêu dòng dữ liệu?",
    "options": [
      "Chính xác là 12 dòng dữ liệu (phép tích Descartes kết hợp từng dòng của A với mọi dòng của B: 3 x 4 = 12)",
      "Chính xác là 7 dòng dữ liệu (phép cộng hợp số lượng bản ghi của hai bảng lại với nhau: 3 + 4 = 7)",
      "Chính xác là 4 dòng dữ liệu (lấy theo số lượng dòng tối đa của bảng có quy mô lớn hơn trong phép nối)",
      "Chính xác là 0 dòng dữ liệu nếu hai bảng không có bất kỳ cột nào có cùng tên và cùng kiểu dữ liệu"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục IV.3.a: CROSS JOIN là phép tích Descartes (Cartesian Product). Số dòng kết quả = (Số dòng của A) $\\times$ (Số dòng của B) $= 3 \\times 4 = 12$ dòng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm phép nhân tích Descartes với phép cộng gộp số dòng (3 + 4 = 7).",
      "trickWord": "Bẫy số dòng CROSS JOIN: Nhân số dòng (3 x 4 = 12 dòng)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "CROSS JOIN = Tích Descartes ➔ Lấy số dòng bảng A NHÂN số dòng bảng B!"
    }
  },
  {
    "id": "db-c3-t1-034",
    "question": "Khi thực hiện câu lệnh SELECT DISTINCT Phong, ChucVu FROM NhanVien;, từ khóa DISTINCT hoạt động như thế nào?",
    "options": [
      "Chỉ loại bỏ các giá trị trùng lặp trên cột đầu tiên (Phong), còn cột ChucVu vẫn giữ nguyên toàn bộ",
      "Loại bỏ các dòng dữ liệu trùng lặp trên CẢ CẶP GIÁ TRỊ TỔ HỢP (Phong, ChucVu) trong kết quả trả về",
      "Chỉ loại bỏ các giá trị trùng lặp trên cột cuối cùng (ChucVu), còn cột Phong vẫn hiển thị lặp lại",
      "Tự động phân tách bảng thành hai danh sách độc lập và khử trùng lặp riêng biệt trên từng cột một"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục IV.2.a: Từ khóa DISTINCT áp dụng cho TOÀN BỘ danh sách các thuộc tính được chọn trong mệnh đề SELECT, tức là khử các dòng có cặp giá trị `(Phong, ChucVu)` giống hệt nhau, chứ không áp dụng riêng lẻ cho cột đầu tiên.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ DISTINCT chỉ có tác dụng với cột đứng ngay sau nó (cột Phong).",
      "trickWord": "Bẫy phạm vi tác dụng của DISTINCT: Áp dụng trên toàn bộ tổ hợp các cột được chọn",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a",
      "tip": "DISTINCT áp dụng cho TOÀN BỘ các cột trong SELECT (khử trùng cả tổ hợp dòng)!"
    }
  },
  {
    "id": "db-c3-t1-035",
    "question": "Truy vấn con tương quan (Correlated Subquery) khác biệt căn bản nhất so với truy vấn con không tương quan (Self-contained Subquery) ở điểm nào?",
    "options": [
      "Truy vấn con tương quan bắt buộc phải trả về một hằng số vô hướng (Scalar Value) duy nhất gồm một hàng và một cột",
      "Truy vấn con tương quan chỉ thực thi một lần duy nhất độc lập trước khi câu truy vấn chính bên ngoài bắt đầu chạy",
      "Truy vấn con tương quan phụ thuộc vào dữ liệu của bảng ngoài và phải thực thi lặp lại cho từng dòng của bảng ngoài",
      "Truy vấn con tương quan chỉ có thể được đặt trong mệnh đề FROM chứ tuyệt đối không được phép đặt trong WHERE"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục IV.3.b: Truy vấn con tương quan (Correlated Subquery) chứa thuộc tính tham chiếu đến bảng của truy vấn ngoài. Do đó nó không thể chạy độc lập, mà phải thực thi lặp đi lặp lại với mỗi dòng của truy vấn ngoài.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn cách thức hoạt động và hiệu năng giữa subquery độc lập (chạy 1 lần) và tương quan (chạy N lần).",
      "trickWord": "Bẫy bản chất Correlated Subquery: Phụ thuộc bảng ngoài và thực thi lặp lại từng dòng",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b",
      "tip": "Correlated Subquery = Có thuộc tính bảng ngoài ➔ Phải chạy lặp lại cho từng dòng bảng ngoài!"
    }
  },
  {
    "id": "db-c3-t1-036",
    "question": "Khẳng định nào sau đây là HOÀN TOÀN ĐÚNG về bản chất kỹ thuật của Khung nhìn (View) trong SQL Server?",
    "options": [
      "Mỗi khi bảng cơ sở gốc thay đổi dữ liệu, người quản trị bắt buộc phải chạy lệnh tái tạo View thì dữ liệu mới đổi",
      "View là một bảng vật lý độc lập, tự động sao chép toàn bộ dữ liệu từ bảng gốc sang một tệp tin lưu trữ mới",
      "View cho phép tăng tốc độ truy vấn vượt trội trong mọi trường hợp do dữ liệu luôn được lưu sẵn trên RAM",
      "View là một bảng ảo, không chứa dữ liệu thực trên đĩa, dữ liệu hiển thị được rút trích động từ các bảng cơ sở"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục V.1.a: Khung nhìn (View) là một quan hệ nhưng là BẢNG ẢO (Virtual table). View không chứa dữ liệu thực, không lưu trữ vật lý trên đĩa (chỉ lưu định nghĩa câu lệnh SELECT trong System Catalog). Khi truy vấn View, hệ thống thực thi động câu lệnh SELECT trên các bảng gốc.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay lầm tưởng View lưu trữ bản sao dữ liệu trên đĩa và cần lệnh sync dữ liệu.",
      "trickWord": "Bẫy bản chất của View: Bảng ảo, không lưu dữ liệu thực trên đĩa",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục V.1.a",
      "tip": "View = BẢNG ẢO; Chỉ lưu định nghĩa câu lệnh SELECT, dữ liệu luôn rút trích động từ bảng gốc!"
    }
  },
  {
    "id": "db-c3-t1-037",
    "question": "Điều kiện nào sau đây khiến một Khung nhìn (View) TUYỆT ĐỐI KHÔNG THỂ thực hiện các thao tác cập nhật (INSERT, UPDATE, DELETE)?",
    "options": [
      "Khung nhìn có chứa từ khóa DISTINCT, mệnh đề GROUP BY hoặc sử dụng các hàm kết hợp (Aggregate functions)",
      "Khung nhìn được tạo ra từ việc kết nối hai bảng dữ liệu khác nhau thông qua một điều kiện khóa ngoại hợp lệ",
      "Khung nhìn chỉ chứa một phần các cột của bảng gốc và che giấu đi các thuộc tính mang thông tin nhạy cảm",
      "Khung nhìn có sử dụng mệnh đề WHERE để lọc dữ liệu của các nhân viên có mức thu nhập thấp hơn định mức"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục V.1.b: Một View KHÔNG THỂ cập nhật (INSERT/UPDATE/DELETE) nếu: (1) Được xây dựng trên nhiều bảng cơ sở; (2) Có chứa `DISTINCT`; (3) Có chứa `GROUP BY` hoặc `HAVING`; (4) Chứa hàm kết hợp (COUNT, SUM...); (5) Chứa cột tính toán.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ View nào cũng cập nhật được dữ liệu xuống bảng cơ sở bên dưới.",
      "trickWord": "Bẫy điều kiện cập nhật qua View: Có DISTINCT, GROUP BY, Aggregate function ➔ BẤT KHẢ CẬP NHẬT",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục V.1.b",
      "tip": "View có DISTINCT, GROUP BY, Hàm kết hợp ➔ TUYỆT ĐỐI CẤM INSERT/UPDATE/DELETE!"
    }
  },
  {
    "id": "db-c3-t1-038",
    "question": "Tác dụng kỹ thuật then chốt của mệnh đề WITH CHECK OPTION khi định nghĩa một Khung nhìn (View) là gì?",
    "options": [
      "Tự động kiểm tra tính toàn vẹn khóa ngoại và khóa chính của toàn bộ các bảng liên quan trước khi nạp dữ liệu",
      "Ngăn chặn các lệnh INSERT/UPDATE làm cho dòng dữ liệu không còn thỏa mãn điều kiện WHERE của chính View đó",
      "Ngăn chặn mọi người dùng không có quyền quản trị tối cao (SA) thực hiện truy vấn xem cấu trúc bên trong View",
      "Tự động sao lưu và khôi phục lại dữ liệu của View về trạng thái ban đầu nếu câu lệnh cập nhật bị gián đoạn"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục V.1.b: Mệnh đề `WITH CHECK OPTION` đảm bảo rằng mọi thao tác INSERT hoặc UPDATE thông qua View phải thỏa mãn điều kiện trong mệnh đề WHERE của View. Nếu sửa dữ liệu khiến dòng đó biến mất khỏi View (ví dụ sửa Luong = 1500 trong View lọc Luong > 2000), hệ thống sẽ từ chối.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ WITH CHECK OPTION là kiểm tra kiểu dữ liệu hoặc kiểm tra khóa chính/ngoại.",
      "trickWord": "Bẫy mệnh đề WITH CHECK OPTION: Chặn thao tác làm dòng dữ liệu thoát khỏi điều kiện WHERE của View",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục V.1.b",
      "tip": "WITH CHECK OPTION = Đảm bảo dữ liệu chèn/sửa qua View PHẢI THỎA MÃN điều kiện WHERE của View!"
    }
  },
  {
    "id": "db-c3-t1-039",
    "question": "Trong CSDL QLBanHang, bài toán kinh điển: \"Tìm thông tin các mặt hàng CHƯA TỪNG ĐƯỢC KHÁCH ĐẶT MUA\" (Bài tập 4). Biểu thức nào sau đây sử dụng LEFT JOIN chuẩn xác nhất?",
    "options": [
      "SELECT H.* FROM Hanghoa H LEFT JOIN Chitiet_HD C ON H.MaHG = C.MaHG WHERE C.MaHG = NULL;",
      "SELECT H.* FROM Hanghoa H LEFT JOIN Chitiet_HD C ON H.MaHG = C.MaHG WHERE C.Soluong = 0;",
      "SELECT H.* FROM Hanghoa H LEFT JOIN Chitiet_HD C ON H.MaHG = C.MaHG WHERE C.MaHG IS NULL;",
      "SELECT H.* FROM Hanghoa H INNER JOIN Chitiet_HD C ON H.MaHG = C.MaHG WHERE C.MaHG IS NULL;"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục VI.1.a (Bài tập 4): Kỹ thuật Anti-Join dùng LEFT JOIN: Nối Hanghoa với Chitiet_HD, những mặt hàng chưa bao giờ bán sẽ có các cột từ Chitiet_HD mang giá trị NULL. Ta lọc bằng `WHERE C.MaHG IS NULL`. Dùng `= 0` hoặc `= NULL` hoặc INNER JOIN đều sai.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay bẫy chọn `Soluong = 0` (hàng chưa bán thì không hề có dòng trong Chitiet_HD) hoặc bẫy `= NULL`.",
      "trickWord": "Bẫy Anti-Join bài toán kinh điển: LEFT JOIN kết hợp WHERE C.Khóa IS NULL",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục VI.1.a & VI.1.b",
      "tip": "Chưa từng bán = LEFT JOIN ... WHERE BảngPhụ.Khoa IS NULL!"
    }
  },
  {
    "id": "db-c3-t1-040",
    "question": "Trong CSDL QLBanHang, để giải bài toán \"Tìm thông tin các khách hàng CÓ CÙNG NGÀY SINH\" (Bài tập 7) bằng phép Tự kết nối (Self-Join), điều kiện lọc giữa hai bảng bí danh K1 và K2 phải là gì để KHÔNG BỊ TRÙNG CẶP?",
    "options": [
      "K1.NgaySinh <> K2.NgaySinh AND K1.MaKH <> K2.MaKH (lấy sai hoàn toàn yêu cầu ngày sinh phải giống nhau)",
      "K1.NgaySinh = K2.NgaySinh AND K1.MaKH <> K2.MaKH (vẫn bị trùng lặp cặp hoán vị A-B và B-A)",
      "K1.NgaySinh = K2.NgaySinh AND K1.MaKH = K2.MaKH (bị lỗi tự ghép chính khách hàng đó với bản thân họ)",
      "K1.NgaySinh = K2.NgaySinh AND K1.MaKH < K2.MaKH (khử trùng bản thân và khử cặp lặp đảo thứ tự)"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục VI.1.b (Bài tập 7): Nếu dùng `K1.MaKH <> K2.MaKH`, hệ thống sẽ trả về cả cặp (KH01, KH02) và (KH02, KH01). Để kết quả xuất hiện duy nhất 1 lần cho mỗi cặp, bắt buộc phải dùng toán tử so sánh thứ tự: `K1.MaKH < K2.MaKH`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Hầu hết sinh viên chỉ dùng `<>`, kết quả bị nhân đôi do tồn tại cặp đối xứng hoán vị.",
      "trickWord": "Bẫy khử trùng lặp trong Self-Join: Dùng toán tử `<` thay vì `<>`",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục VI.1.b",
      "tip": "Self-Join tìm cặp đối tượng cùng tính chất ➔ Dùng toán tử `<` (A.ID < B.ID) để không bị trùng cặp!"
    }
  },
  {
    "id": "db-c3-t1-041",
    "question": "Trong CSDL QLBanHang, bài toán \"Thống kê số lượng hóa đơn đã lập của MỖI nhân viên\" (Bài tập 8, bao gồm cả nhân viên chưa lập hóa đơn nào). Truy vấn nào sau đây trả về kết quả ĐÚNG?",
    "options": [
      "SELECT NV.MaNV, COUNT(HD.SoHD) FROM NhanVien NV LEFT JOIN Hoadon HD ON NV.MaNV = HD.MaNV GROUP BY NV.MaNV;",
      "SELECT NV.MaNV, COUNT(*) FROM NhanVien NV LEFT JOIN Hoadon HD ON NV.MaNV = HD.MaNV GROUP BY NV.MaNV;",
      "SELECT NV.MaNV, COUNT(HD.SoHD) FROM NhanVien NV INNER JOIN Hoadon HD ON NV.MaNV = HD.MaNV GROUP BY NV.MaNV;",
      "SELECT NV.MaNV, SUM(HD.SoHD) FROM NhanVien NV LEFT JOIN Hoadon HD ON NV.MaNV = HD.MaNV GROUP BY NV.MaNV;"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục VI.1.a (Bài tập 8): Phải dùng `LEFT JOIN` để giữ lại nhân viên chưa lập hóa đơn. Khi đếm số hóa đơn, PHẢI DÙNG `COUNT(HD.SoHD)` để nhân viên chưa có hóa đơn (SoHD là NULL) sẽ được đếm ra 0. Nếu dùng `COUNT(*)`, nó sẽ đếm dòng chứa NULL đó thành 1 (sai nghiêm trọng)!",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh dùng COUNT(*) trong LEFT JOIN khiến nhân viên chưa bán được gì vẫn bị đếm là có 1 hóa đơn.",
      "trickWord": "Bẫy kết hợp LEFT JOIN và COUNT(*): Bắt buộc dùng COUNT(CotBangPhai)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục VI.1.a",
      "tip": "Thống kê \"MỖI... kể cả chưa có\" ➔ LEFT JOIN + COUNT(BảngPhụ.ID) (CẤM dùng COUNT(*))!"
    }
  },
  {
    "id": "db-c3-t1-042",
    "question": "Trong CSDL QLBanHang, câu lệnh thêm ràng buộc kiểm tra cho bảng DONDATHANG (Bài tập 6): Ngày giao hàng (NgayGH) và ngày chuyển hàng (NgayCH) phải sau hoặc bằng ngày đặt hàng (NgayDH). Cú pháp chuẩn là gì?",
    "options": [
      "ALTER TABLE DONDATHANG ADD CONSTRAINT CK_Ngay CHECK (NgayGH >= NgayDH OR NgayCH >= NgayDH);",
      "ALTER TABLE DONDATHANG ADD CONSTRAINT CK_Ngay CHECK (NgayGH >= NgayDH AND NgayCH >= NgayDH);",
      "ALTER TABLE DONDATHANG CREATE CHECK CONSTRAINT (NgayGH >= NgayDH AND NgayCH >= NgayDH);",
      "ALTER TABLE DONDATHANG MODIFY COLUMN ADD CHECK (NgayGH >= NgayDH AND NgayCH >= NgayDH);"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục VI.1.a (Bài tập 6): Cú pháp chuẩn: `ALTER TABLE <Bang> ADD CONSTRAINT <TenCK> CHECK (<BieuThuc>)`. Cả hai ngày đều phải sau ngày đặt hàng nên phải dùng toán tử `AND`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm toán tử logic `AND` thành `OR` hoặc dùng sai từ khóa `MODIFY TABLE`.",
      "trickWord": "Bẫy cú pháp ALTER TABLE ADD CONSTRAINT CHECK & toán tử AND",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục VI.1.a",
      "tip": "Bổ sung ràng buộc kiểm tra ➔ ALTER TABLE <Bảng> ADD CONSTRAINT <Tên> CHECK (... AND ...)!"
    }
  },
  {
    "id": "db-c3-t1-043",
    "question": "Trong CSDL Công Ty (QLNV), để tìm tên các nhân viên có mức lương cao hơn mức lương trung bình của chính phòng ban mà nhân viên đó đang công tác, giải pháp chuẩn mực là gì?",
    "options": [
      "Dùng truy vấn con độc lập: SELECT Ten FROM NhanVien WHERE Luong > (SELECT AVG(Luong) FROM NhanVien) AND Phong IN (SELECT Phong);",
      "Dùng mệnh đề gom nhóm HAVING: SELECT Ten FROM NhanVien GROUP BY Phong, Ten, Luong HAVING Luong > (SELECT AVG(Luong) FROM NhanVien);",
      "Dùng truy vấn con tương quan: SELECT Ten FROM NhanVien A WHERE Luong > (SELECT AVG(Luong) FROM NhanVien B WHERE B.Phong = A.Phong);",
      "Dùng phép kết nối tự nhiên: SELECT Ten FROM NhanVien A JOIN NhanVien B ON A.Phong = B.Phong WHERE A.Luong > AVG(B.Luong) ALL;"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục IV.3.b: Mức lương trung bình của CHÍNH PHÒNG ĐÓ thay đổi theo từng nhân viên, do đó bắt buộc phải dùng Correlated Subquery liên kết `NV2.Phong = NV1.Phong`. Dùng Subquery độc lập (phương án C) chỉ so với lương TB toàn công ty.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn câu C (tính trung bình toàn công ty) thay vì tính trung bình riêng của từng phòng.",
      "trickWord": "Bẫy so sánh với mức trung bình cục bộ của nhóm: Bắt buộc dùng Correlated Subquery",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b",
      "tip": "So sánh với TB của \"chính nhóm đó\" ➔ Bắt buộc liên kết phòng ở truy vấn con (NV2.Phong = NV1.Phong)!"
    }
  },
  {
    "id": "db-c3-t1-044",
    "question": "Trong CSDL QLBanHang: Hanghoa(MaHG, TenHG, Gia, Soluong). Để tìm mã và tên các mặt hàng có giá lớn hơn 10 VÀ số lượng hiện có ít hơn 20 (Bài tập 2), câu truy vấn T-SQL chuẩn mực là gì?",
    "options": [
      "SELECT MaHG AND TenHG FROM Hanghoa WHERE Gia > 10, Soluong < 20; (sai cú pháp ngăn cách cột và điều kiện)",
      "SELECT MaHG, TenHG FROM Hanghoa WHERE Gia > 10 OR Soluong < 20; (dùng sai toán tử tuyển OR)",
      "SELECT * FROM Hanghoa HAVING Gia > 10 AND Soluong < 20; (dùng sai mệnh đề HAVING khi không có gom nhóm)",
      "SELECT MaHG, TenHG FROM Hanghoa WHERE Gia > 10 AND Soluong < 20; (truy vấn lọc cơ bản chuẩn mực)"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục VI.1.a (Bài tập 2): Lấy mã và tên mặt hàng thỏa mãn đồng thời cả 2 điều kiện: `Gia > 10 AND Soluong < 20`. Phải dùng toán tử `AND` và ngăn cách các cột bằng dấu phẩy `,`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm giữa AND và OR hoặc nhầm cách liệt kê cột trong SELECT.",
      "trickWord": "Bẫy toán tử logic AND trong câu lệnh truy vấn lọc đơn giản",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục VI.1.a",
      "tip": "Thỏa mãn đồng thời nhiều điều kiện ➔ Dùng toán tử logic AND!"
    }
  },
  {
    "id": "db-c3-t1-045",
    "question": "Khi thực hiện câu lệnh xóa khung nhìn: DROP VIEW View_NhanVien; thì dữ liệu trong bảng cơ sở gốc NhanVien sẽ bị ảnh hưởng như thế nào?",
    "options": [
      "Dữ liệu trong bảng gốc hoàn toàn KHÔNG BỊ ẢNH HƯỞNG (chỉ có định nghĩa của khung nhìn trong hệ thống bị xóa)",
      "Toàn bộ dữ liệu của bảng gốc NhanVien sẽ bị xóa sạch hoàn toàn khỏi cơ sở dữ liệu trên đĩa cứng",
      "Chỉ những bản ghi nào từng xuất hiện trong khung nhìn View_NhanVien mới bị xóa khỏi bảng cơ sở",
      "Bảng gốc NhanVien sẽ bị khóa tạm thời và chuyển sang trạng thái chỉ đọc (Read-only) trong hệ thống"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục V.1.a: DROP VIEW chỉ xóa bỏ định nghĩa của View khỏi bộ từ điển dữ liệu (System Catalog), hoàn toàn KHÔNG ẢNH HƯỞNG hay xóa dữ liệu trong các bảng cơ sở bên dưới.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh lo sợ việc DROP VIEW sẽ làm xóa luôn dữ liệu trong bảng gốc.",
      "trickWord": "Bẫy tác động của DROP VIEW: Chỉ xóa định nghĩa View, KHÔNG xóa dữ liệu bảng gốc",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục V.1.a",
      "tip": "Xóa View (DROP VIEW) = Chỉ xóa định nghĩa bảng ảo, dữ liệu bảng gốc VẪN NGUYÊN VẸN!"
    }
  },
  {
    "id": "db-c3-t1-046",
    "question": "Trong CSDL QLBanHang, để giải bài toán \"Cho biết thông tin những khách hàng đã từng mua mặt hàng áo Việt Tiến\" (Bài tập 3), ta cần kết nối những bảng nào?",
    "options": [
      "Chỉ cần kết nối trực tiếp 2 bảng: Khach và Hanghoa thông qua khóa ngoại MaKH đặt ở bảng Hanghoa",
      "Cần kết nối 3 bảng: Khach, Hoadon và Chitiet_HD (thông qua MaKH và SoHD) kết hợp với bảng Hanghoa",
      "Chỉ cần kết nối 2 bảng: Khach và Chitiet_HD thông qua số chứng minh nhân dân của người mua hàng",
      "Không cần kết nối bảng mà chỉ cần quét dữ liệu trực tiếp trên bảng Chitiet_HD là đủ toàn bộ thông tin"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục VI.1.a (Bài tập 3): Khach không có liên kết trực tiếp với Hanghoa. Phải đi qua đường dẫn: `Khach` (MaKH) ➔ `Hoadon` (SoHD) ➔ `Chitiet_HD` (MaHG) ➔ `Hanghoa` (TenHG = N'Áo Việt Tiến').",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay quên bảng trung gian Hoadon và tìm cách nối thẳng Khach với Hanghoa.",
      "trickWord": "Bẫy chuỗi kết nối 4 bảng: Khach ➔ Hoadon ➔ Chitiet_HD ➔ Hanghoa",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục VI.1.a",
      "tip": "Khách mua Hàng gì ➔ Bắt buộc phải qua cầu nối Hoadon và Chitiet_HD!"
    }
  },
  {
    "id": "db-c3-t1-047",
    "question": "Trong CSDL QLBanHang, để tính \"Tổng số lượng bán được của MỖI mặt hàng\" (Bài tập 5), biểu thức tính toán chuẩn mực là gì?",
    "options": [
      "SELECT MaHG, SUM(Soluong) AS TongBan FROM Chitiet_HD; (thiếu mệnh đề gom nhóm bắt buộc GROUP BY)",
      "SELECT MaHG, COUNT(Soluong) AS TongBan FROM Chitiet_HD GROUP BY MaHG; (dùng nhầm hàm đếm số dòng COUNT)",
      "SELECT MaHG, SUM(Soluong) AS TongBan FROM Chitiet_HD GROUP BY MaHG; (chuẩn xác theo quy tắc tính tổng)",
      "SELECT MaHG, AVG(Soluong) AS TongBan FROM Chitiet_HD GROUP BY MaHG; (dùng nhầm hàm tính trung bình cộng)"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục VI.1.a (Bài tập 5): Tính tổng số lượng của MỖI mặt hàng đòi hỏi: dùng hàm `SUM(Soluong)` để cộng dồn số lượng, và gom nhóm theo `GROUP BY MaHG`. Dùng COUNT là đếm số lần xuất hiện chứ không phải tổng số lượng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn giữa SUM (tính tổng giá trị số) và COUNT (đếm số lần xuất hiện).",
      "trickWord": "Bẫy phân biệt hàm SUM vs COUNT khi tính tổng số lượng bán",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục VI.1.a",
      "tip": "Tính \"Tổng số lượng\" ➔ Dùng SUM; Đếm \"Số lần bán\" ➔ Dùng COUNT!"
    }
  },
  {
    "id": "db-c3-t1-048",
    "question": "Điều gì xảy ra nếu cố gắng chèn một bản ghi mới thông qua một Khung nhìn (View) mà bảng gốc có một cột khác (không xuất hiện trong View) có thuộc tính NOT NULL nhưng lại KHÔNG CÓ giá trị DEFAULT?",
    "options": [
      "Hệ thống sẽ tự động sao chép giá trị từ bản ghi liền kề phía trước để lấp đầy vào cột còn thiếu đó",
      "Hệ thống tự động gán giá trị NULL vào cột đó ở bảng gốc và tiếp tục thực hiện lệnh chèn thành công",
      "Hệ thống tự động bổ sung cột đó vào định nghĩa của View và hiển thị hộp thoại yêu cầu nhập bổ sung",
      "Hệ thống sẽ lập tức báo lỗi và từ chối thao tác INSERT vì cột NOT NULL ở bảng gốc không nhận được dữ liệu"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục V.1.b: Khi INSERT qua View, các cột ở bảng gốc không xuất hiện trong View sẽ nhận giá trị NULL (hoặc giá trị DEFAULT nếu có). Nếu cột đó là NOT NULL mà không có DEFAULT, thao tác INSERT chắc chắn bị hệ thống từ chối vì vi phạm ràng buộc toàn vẹn.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh không hình dung được điều gì xảy ra với các cột bị ẩn đi khi thao tác INSERT qua View.",
      "trickWord": "Bẫy INSERT qua View khi bảng gốc có cột NOT NULL không có DEFAULT",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục V.1.b",
      "tip": "Cột ẩn ở bảng gốc là NOT NULL không có DEFAULT ➔ CẤM INSERT qua View!"
    }
  },
  {
    "id": "db-c3-t1-049",
    "question": "Trong câu lệnh truy vấn: SELECT TOP 5 WITH TIES * FROM SinhVien ORDER BY DiemTB DESC;, từ khóa WITH TIES có ý nghĩa kỹ thuật gì?",
    "options": [
      "Lấy thêm tất cả các sinh viên có điểm số bằng với điểm số của sinh viên ở vị trí thứ 5 (kết quả có thể > 5 dòng)",
      "Buộc hệ thống phải chọn ngẫu nhiên đúng 5 sinh viên khi có nhiều sinh viên có cùng mức điểm trung bình",
      "Chỉ lấy đúng 5 sinh viên nhưng ưu tiên những sinh viên có ngày sinh nhật nhỏ hơn xếp lên phía trước",
      "Tự động loại bỏ tất cả các sinh viên có điểm trùng nhau và chỉ lấy 5 mức điểm trung bình độc nhất"
    ],
    "answer": 0,
    "explanation": "Chuẩn T-SQL: `TOP n WITH TIES` (phải đi cùng ORDER BY) sẽ lấy n dòng đầu tiên, đồng thời lấy thêm tất cả các dòng tiếp theo nếu giá trị ở cột sắp xếp của chúng trùng với dòng thứ n. Kết quả trả về có thể nhiều hơn n dòng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ TOP 5 thì kết quả LUÔN LUÔN chỉ có đúng 5 dòng.",
      "trickWord": "Bẫy từ khóa WITH TIES: Có thể trả về nhiều hơn số lượng n chỉ định nếu trùng điểm",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a",
      "tip": "TOP n WITH TIES: Lấy n dòng + LẤY THÊM các dòng hòa điểm với dòng thứ n!"
    }
  },
  {
    "id": "db-c3-t1-050",
    "question": "Triết lý cốt lõi của ngôn ngữ SQL (T-SQL) khác biệt căn bản nhất so với các ngôn ngữ lập trình truyền thống (C, Pascal, Java) ở điểm nào?",
    "options": [
      "SQL là ngôn ngữ hướng đối tượng hoàn chỉnh, yêu cầu đóng gói toàn bộ các hàm nghiệp vụ vào các lớp đối tượng cụ thể",
      "SQL là ngôn ngữ phi thủ tục (khai báo): Người dùng chỉ cần chỉ rõ \"cần lấy dữ liệu gì\", không cần chỉ định thuật toán lấy",
      "SQL yêu cầu lập trình viên phải tự viết mã vòng lặp duyệt từng bản ghi và tự cấp phát vùng nhớ con trỏ trên RAM",
      "SQL chỉ có thể thực thi được trên các hệ thống mạng cục bộ và không thể tương tác trực tiếp với hệ điều hành"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 3, Mục I.1.a & Section 0: SQL là ngôn ngữ khai báo / phi thủ tục (Declarative / Non-procedural). Người dùng chỉ mô tả kết quả mong muốn (\"WHAT\"), còn thuật toán quét chỉ mục hay quét toàn bảng (\"HOW\") do cỗ máy tối ưu hóa truy vấn (Query Optimizer) của RDBMS tự động quyết định.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm SQL với ngôn ngữ thủ tục (Procedural) do T-SQL có bổ sung một số cấu trúc IF/WHILE.",
      "trickWord": "Bẫy triết lý SQL: Là ngôn ngữ Khai báo / Phi thủ tục (Declarative), chỉ cần chỉ rõ \"WHAT\"",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục I.1.a & Section 0",
      "tip": "SQL = Ngôn ngữ KHAI BÁO (Phi thủ tục): Chỉ cần nói \"CẦN GÌ\", không cần nói \"LÀM THẾ NÀO\"!"
    }
  }
];
