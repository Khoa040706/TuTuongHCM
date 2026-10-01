/* ============================================================
   NGÂN HÀNG CÂU HỎI BẪY: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG III: NGÔN NGỮ SQL (STRUCTURED QUERY LANGUAGE / T-SQL) — BỘ ĐỀ BẪY 2
   SỐ LƯỢNG: 50 CÂU HỎI BẪY VẬN DỤNG CAO (100% HARD / BẪY TƯ DUY)
   MÃ BỘ ĐỀ: db-c3-t2-001 ĐẾN db-c3-t2-050
   CHUẨN KỸ THUẬT: DELTA L <= 15 CHARS, 100% TRICKDETAILS, CÂN BẰNG ĐÁP ÁN (12A, 12B, 13C, 13D)
   ============================================================ */

export const questionsDbCh3Trick2 = [
  {
    "id": "db-c3-t2-001",
    "question": "Khẳng định nào sau đây là KHÔNG CHÍNH XÁC khi nói về giá trị NULL của thuộc tính Khóa ngoại (Foreign Key) trong T-SQL?",
    "options": [
      "Giá trị NULL trong khóa ngoại biểu thị bản ghi con đó tạm thời chưa có mối liên kết đến bất kỳ bản ghi cha nào",
      "Khóa ngoại hoàn toàn có thể nhận giá trị NULL nếu cột đó không được người thiết kế gắn thêm ràng buộc NOT NULL",
      "Khóa ngoại tuyệt đối không bao giờ được phép mang giá trị NULL trong bất kỳ tình huống thiết kế cơ sở dữ liệu nào",
      "Khi một khóa ngoại mang giá trị NULL, hệ thống sẽ tự động bỏ qua việc kiểm tra tính hợp lệ ở bảng cha tương ứng"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục III.1.a & III.2.b: Khóa ngoại ĐƯỢC PHÉP mang giá trị NULL (trừ khi nó nằm trong Khóa chính của Thực thể yếu hoặc bị ràng buộc rõ bằng NOT NULL). Khẳng định nói \"tuyệt đối không bao giờ được phép mang giá trị NULL\" là hoàn toàn sai.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nhầm tính chất NOT NULL của Khóa chính (PK) sang Khóa ngoại (FK).",
      "trickWord": "Bẫy tính chất NULL của Khóa ngoại: Khóa ngoại hoàn toàn ĐƯỢC PHÉP NULL",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.1.a",
      "tip": "Khóa chính CẤM NULL; Khóa ngoại ĐƯỢC PHÉP NULL (trừ phi có khai báo NOT NULL)!"
    }
  },
  {
    "id": "db-c3-t2-002",
    "question": "Trong SQL Server, hai hàm chuyển đổi kiểu dữ liệu CAST() và CONVERT() khác biệt kỹ thuật cơ bản nhất ở điểm nào?",
    "options": [
      "Hàm CAST() bắt buộc phải sử dụng trong mệnh đề WHERE, trong khi hàm CONVERT() chỉ được phép sử dụng ở mệnh đề SELECT",
      "CAST() là hàm mở rộng của T-SQL hỗ trợ chuyển đổi định dạng tiền tệ, còn CONVERT() là hàm tiêu chuẩn quốc tế ANSI",
      "CAST() chỉ có khả năng chuyển đổi qua lại giữa các kiểu số, còn CONVERT() chỉ có tác dụng chuyển đổi chuỗi ký tự",
      "CONVERT() là hàm mở rộng độc quyền của T-SQL có hỗ trợ tham số định dạng ngày tháng Style, còn CAST() theo chuẩn ANSI SQL"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục II.1 & II.2: `CAST(x AS type)` là chuẩn ANSI/ISO SQL có mặt trên mọi RDBMS. `CONVERT(type, x [, style])` là hàm mở rộng của riêng T-SQL (Microsoft), cung cấp tham số thứ 3 (Style) để định dạng chuỗi ngày tháng cực kỳ linh hoạt (như 101, 103, 111...).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn vai trò chuẩn hóa quốc tế ANSI của CAST với hàm mở rộng CONVERT của Microsoft.",
      "trickWord": "Bẫy CAST (Chuẩn ANSI) vs CONVERT (T-SQL độc quyền kèm tham số Style)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục II.1.b & II.2.a",
      "tip": "CAST = Chuẩn ANSI (không có Style); CONVERT = Độc quyền T-SQL (có tham số Style ngày tháng)!"
    }
  },
  {
    "id": "db-c3-t2-003",
    "question": "Sự khác biệt cốt lõi về bản chất lưu trữ giữa kiểu dữ liệu số thực gần đúng float và số có độ chính xác cố định decimal(p,s) là gì?",
    "options": [
      "float là số dấu chấm động có thể phát sinh sai số làm tròn thập phân, decimal lưu số chính xác tuyệt đối từng chữ số",
      "decimal là số thực dấu chấm động chiếm bộ nhớ cố định 4 bytes, float là số nguyên mở rộng chiếm dung lượng 8 bytes",
      "float chỉ lưu được các số nguyên dương cực lớn, decimal chỉ lưu được các số nguyên âm có tối đa 10 chữ số thập phân",
      "decimal không thể sử dụng được trong các biểu thức tính toán số học, float hỗ trợ toàn bộ các hàm toán học mở rộng"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục II.1.a & II.1.b: `decimal(p,s)` (hoặc numeric) là kiểu số có độ chính xác cố định (Exact numbers), lưu trữ chính xác tuyệt đối. `float` là số dấu chấm động (Approximate numbers) theo chuẩn IEEE 754, có thể phát sinh sai số làm tròn (rounding error) khi tính toán hoặc so sánh bằng `=`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh thường dùng float để lưu tiền tệ hoặc số lượng hàng hóa và bị lỗi sai số dấu chấm động.",
      "trickWord": "Bẫy số gần đúng float vs số chính xác cố định decimal/numeric",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục II.1.a & II.1.b",
      "tip": "Lưu tiền tệ/dữ liệu tài chính ➔ DÙNG decimal/money; CẤM dùng float vì float có sai số làm tròn!"
    }
  },
  {
    "id": "db-c3-t2-004",
    "question": "Khi khai báo một thuộc tính Khóa ngoại đệ quy (Recursive Foreign Key, ví dụ: MaNQL tham chiếu về chính MaNV trong cùng bảng NhanVien), quy tắc nào là BẮT BUỘC?",
    "options": [
      "Bảng NhanVien bắt buộc phải được nhân đôi thành hai bảng vật lý độc lập trước khi tạo ràng buộc đệ quy",
      "Cột khóa ngoại MaNQL bắt buộc phải cho phép mang giá trị NULL để lưu trữ bản ghi của người quản lý cao nhất",
      "Cột khóa ngoại MaNQL bắt buộc phải có kiểu dữ liệu chuỗi ký tự tự do và không được phép đặt ràng buộc CHECK",
      "Hệ quản trị CSDL SQL Server sẽ tự động từ chối mọi ràng buộc khóa ngoại tự tham chiếu về chính bảng đó"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục III.1.a & III.2.b: Khóa ngoại đệ quy mô tả cây phân cấp quản lý (1:N đệ quy). Người đứng đầu cao nhất (Tổng giám đốc / Giám đốc) không có ai quản lý, nên cột MaNQL của họ BẮT BUỘC PHẢI MANG GIÁ TRỊ NULL. Nếu cột này bị gắn NOT NULL, cây phân cấp sẽ bị lỗi không thể chèn dòng đầu tiên.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay đặt NOT NULL cho tất cả các cột khóa khiến không thể nạp bản ghi gốc (Root node) của cây.",
      "trickWord": "Bẫy khóa ngoại đệ quy: Cột tự tham chiếu BẮT BUỘC PHẢI CHO PHÉP NULL",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.1.a & III.2.b",
      "tip": "Khóa ngoại đệ quy (Quản lý - Nhân viên) ➔ Cột FK bắt buộc phải cho phép NULL (để lưu Sếp tổng)!"
    }
  },
  {
    "id": "db-c3-t2-005",
    "question": "Khi thực hiện câu lệnh xóa một cơ sở dữ liệu: DROP DATABASE QLBanHang;, điều kiện tiên quyết nào sau đây BẮT BUỘC phải được thỏa mãn?",
    "options": [
      "Cơ sở dữ liệu bắt buộc phải được sao lưu dự phòng (Full Backup) thành công vào ổ đĩa trong vòng 24 giờ",
      "Người thực hiện bắt buộc phải xóa sạch toàn bộ các bảng bên trong CSDL bằng lệnh DROP TABLE trước đó",
      "Không được có bất kỳ kết nối người dùng nào đang sử dụng (USE) hoặc đang có giao dịch mở trên CSDL đó",
      "Tất cả các tệp tin nhật ký giao dịch (.LDF) bắt buộc phải được người quản trị xóa thủ công trên Windows"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục III.1.a: Trong SQL Server, không thể DROP DATABASE nếu cơ sở dữ liệu đang có người kết nối hoặc đang được phiên làm việc hiện tại sử dụng (`USE QLBanHang`). Phải chuyển sang CSDL khác (ví dụ `USE master`) và ngắt mọi kết nối hiện hữu.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Người học hay đứng trong chính CSDL đó và chạy lệnh DROP DATABASE dẫn đến lỗi \"database is currently in use\".",
      "trickWord": "Bẫy xóa CSDL đang sử dụng: Bắt buộc không có kết nối nào đang active (USE master trước)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.1.a",
      "tip": "Muốn DROP DATABASE ➔ Bắt buộc chuyển sang `USE master;` và ngắt hết kết nối!"
    }
  },
  {
    "id": "db-c3-t2-006",
    "question": "Trong câu lệnh INSERT INTO BangA SELECT * FROM BangB;, điều kiện bắt buộc nào sau đây phải được thỏa mãn giữa hai bảng?",
    "options": [
      "BangA bắt buộc phải là một bảng hoàn toàn rỗng chưa từng chứa bất kỳ một bản ghi dữ liệu nào trước đó",
      "Tên gọi của tất cả các cột ở BangA bắt buộc phải trùng khớp 100% với tên gọi các cột ở BangB tương ứng",
      "Cả hai bảng bắt buộc phải có cùng một người dùng tạo ra và phải có số lượng bản ghi hiện có bằng nhau",
      "Danh sách các cột của hai bảng phải tương thích hoàn toàn về thứ tự vị trí, số lượng và kiểu dữ liệu"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục III.2.a: Lệnh `INSERT INTO ... SELECT` yêu cầu tập kết quả sinh ra từ SELECT phải tương thích hoàn toàn với bảng đích về số lượng cột, thứ tự vị trí cột và kiểu dữ liệu (hoặc có thể ép kiểu ngầm định). Tên cột không cần phải trùng nhau.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ tên cột ở 2 bảng bắt buộc phải trùng nhau thì lệnh mới map được.",
      "trickWord": "Bẫy tương thích cột trong INSERT INTO SELECT: Vị trí & kiểu dữ liệu, KHÔNG CẦN TRÙNG TÊN",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.2.a",
      "tip": "INSERT INTO ... SELECT: Map theo THỨ TỰ VỊ TRÍ và KIỂU DỮ LIỆU, không quan tâm tên cột!"
    }
  },
  {
    "id": "db-c3-t2-007",
    "question": "Cho câu lệnh: UPDATE NhanVien SET Luong = Luong * 1.1; (không có mệnh đề WHERE). Hậu quả trực tiếp của thao tác này là gì?",
    "options": [
      "Tất cả các bản ghi nhân viên trong toàn bộ bảng đều được tăng 10% lương do thiếu mệnh đề WHERE lọc dòng",
      "Hệ thống SQL Server sẽ lập tức phát sinh lỗi cú pháp và từ chối thực hiện vì bắt buộc phải có WHERE",
      "Chỉ có duy nhất bản ghi nhân viên đầu tiên trong bảng được tăng lương 10%, các bản ghi khác giữ nguyên",
      "Hệ thống sẽ tự động hiển thị hộp thoại cảnh báo và yêu cầu người dùng xác nhận trước khi tiếp tục"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục III.2.a: Lệnh UPDATE khi không có mệnh đề WHERE sẽ áp dụng thao tác cập nhật lên TOÀN BỘ CÁC DÒNG trong bảng. Đây là một trong những lỗi thao tác nguy hiểm và kinh điển nhất trong quản trị CSDL.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ SQL Server sẽ chặn lại hoặc chỉ cập nhật dòng hiện tại.",
      "trickWord": "Bẫy UPDATE không có WHERE: Cập nhật TOÀN BỘ dữ liệu của cả bảng",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.2.a",
      "tip": "UPDATE / DELETE không có WHERE ➔ TÁC ĐỘNG TOÀN BỘ CẢ BẢNG!"
    }
  },
  {
    "id": "db-c3-t2-008",
    "question": "Tại sao việc sử dụng kiểu dữ liệu money lại được khuyến nghị cho các bài toán tài chính thay vì dùng kiểu float trong SQL Server?",
    "options": [
      "money chiếm dung lượng bộ nhớ nhỏ hơn rất nhiều so với float (chỉ tốn đúng 1 byte so với 8 bytes)",
      "money là kiểu số chính xác cố định (chính xác đến 4 chữ số thập phân), hoàn toàn không bị sai số làm tròn",
      "money tự động hiển thị ký hiệu tiền tệ của quốc gia máy khách ($ hoặc VNĐ) mà không cần định dạng chuỗi",
      "money cho phép người dùng lưu trữ trực tiếp tên của các ngân hàng thương mại vào cùng một thuộc tính"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục II.1.a: `money` là kiểu dữ liệu số chính xác cố định (8 bytes, chính xác đến 1/10000 đơn vị tiền tệ = 4 chữ số thập phân), không bao giờ bị sai số làm tròn dấu chấm động như `float`. Nó chỉ lưu số thuần túy, không lưu ký hiệu tiền tệ.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ kiểu money sẽ tự động lưu hoặc hiển thị ký hiệu tiền tệ ($ hay VNĐ).",
      "trickWord": "Bẫy bản chất kiểu money: Số chính xác 4 chữ số thập phân, không tự gắn ký hiệu tiền tệ",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục II.1.a",
      "tip": "money = Số chính xác cố định 4 số lẻ; Không tự động gắn ký hiệu tiền tệ đâu nhé!"
    }
  },
  {
    "id": "db-c3-t2-009",
    "question": "Khi thực hiện câu lệnh: ALTER TABLE NhanVien DROP COLUMN Email; nếu cột Email đang tham gia vào một ràng buộc CHECK, điều gì xảy ra?",
    "options": [
      "Hệ thống tự động chuyển ràng buộc CHECK sang kiểm tra trên một cột ký tự ngẫu nhiên khác trong bảng",
      "Hệ thống tự động xóa cột Email đồng thời tự động xóa luôn ràng buộc CHECK mà không cần cảnh báo",
      "Hệ thống báo lỗi và từ chối xóa cột Email cho đến khi ràng buộc CHECK liên quan được xóa bỏ trước",
      "Cột Email vẫn bị xóa và ràng buộc CHECK sẽ chuyển sang trạng thái vô hiệu hóa tạm thời trong CSDL"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục III.2.a: Trong SQL Server, không thể xóa (DROP COLUMN) một cột đang bị phụ thuộc bởi một ràng buộc (CHECK, DEFAULT, FOREIGN KEY, PRIMARY KEY). Phải dùng `ALTER TABLE DROP CONSTRAINT` để xóa ràng buộc trước, rồi mới xóa cột.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ lệnh xóa cột sẽ tự động xóa kèm mọi ràng buộc gắn trên cột đó.",
      "trickWord": "Bẫy phụ thuộc ràng buộc khi DROP COLUMN: Phải xóa ràng buộc trước",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.2.a",
      "tip": "Cột có ràng buộc (CHECK, FK...) ➔ Muốn xóa cột PHẢI XÓA RÀNG BUỘC TRƯỚC!"
    }
  },
  {
    "id": "db-c3-t2-010",
    "question": "Trong câu lệnh tạo bảng: CREATE TABLE DuAn (MaDA int PRIMARY KEY, TenDA nvarchar(50));, nếu không chỉ định kiểu chỉ mục, hệ thống sẽ mặc định làm gì?",
    "options": [
      "Tự động tạo hai chỉ mục song song vừa phân cụm vừa không phân cụm để tối ưu hóa truy vấn đọc",
      "Tự động tạo một chỉ mục không phân cụm (Non-clustered Index) độc lập trên cột MaDA của bảng",
      "Hoàn toàn không tạo bất kỳ chỉ mục nào cho đến khi người dùng chủ động chạy lệnh CREATE INDEX",
      "Tự động tạo một chỉ mục phân cụm (Clustered Index) duy nhất trên cột MaDA của bảng dữ liệu đó"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục III.1.a: Mặc định trong SQL Server, khi khai báo khóa chính PRIMARY KEY mà không chỉ định rõ từ khóa `NONCLUSTERED`, hệ thống sẽ tự động tạo một Chỉ mục phân cụm (Clustered Index) trên cột khóa chính đó.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh không nắm được cơ chế tự động tạo Clustered Index ngầm định của PRIMARY KEY.",
      "trickWord": "Bẫy chỉ mục mặc định của PRIMARY KEY: Luôn tự tạo Clustered Index",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.1.a",
      "tip": "PRIMARY KEY mặc định ➔ TỰ TẠO CLUSTERED INDEX (trừ khi ghi rõ NONCLUSTERED)!"
    }
  },
  {
    "id": "db-c3-t2-011",
    "question": "Điều kiện nào sau đây là ĐÚNG khi thực hiện lệnh đổi tên bảng bằng thủ tục hệ thống sp_rename trong SQL Server 2000?",
    "options": [
      "Cú pháp chuẩn: EXEC sp_rename 'TenBangCu', 'TenBangMoi'; (sử dụng thủ tục lưu trữ hệ thống mở rộng)",
      "Cú pháp chuẩn: ALTER TABLE TenBangCu RENAME TO TenBangMoi; (chuẩn cú pháp theo tiêu chuẩn Oracle)",
      "Cú pháp chuẩn: RENAME TABLE TenBangCu TO TenBangMoi; (chuẩn cú pháp trực tiếp của hệ thống MySQL)",
      "Không thể đổi tên bảng trong SQL Server 2000 mà bắt buộc phải xóa bảng cũ đi và tạo lại bảng mới"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục III.2.a: Trong SQL Server 2000/T-SQL, không có lệnh `RENAME TABLE` hay `ALTER TABLE ... RENAME`. Muốn đổi tên bảng hoặc tên cột, phải sử dụng thủ tục lưu trữ hệ thống: `EXEC sp_rename 'old_name', 'new_name';`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Người học quen với cú pháp `RENAME TABLE` của MySQL hay `RENAME TO` của Oracle nên chọn sai.",
      "trickWord": "Bẫy cú pháp đổi tên đối tượng trong T-SQL: Dùng sp_rename",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.2.a",
      "tip": "Đổi tên bảng/cột trong SQL Server ➔ DÙNG `sp_rename`!"
    }
  },
  {
    "id": "db-c3-t2-012",
    "question": "Trong T-SQL, từ khóa GO thường xuất hiện giữa các khối lệnh mang bản chất kỹ thuật gì?",
    "options": [
      "Là một câu lệnh DDL tiêu chuẩn của T-SQL dùng để lưu trữ vĩnh viễn các giao dịch đang chờ xử lý",
      "Là tín hiệu báo hiệu kết thúc một gói lệnh (Batch separator) gửi đến máy chủ, không phải lệnh T-SQL",
      "Là một từ khóa điều khiển luồng tương đương với lệnh CONTINUE trong các vòng lặp duyệt dữ liệu",
      "Là một câu lệnh bảo mật yêu cầu người dùng phải xác thực lại mật khẩu trước khi chạy đoạn mã tiếp"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục I.1.b: `GO` không phải là câu lệnh T-SQL. Nó là lệnh của các công cụ tiện ích khách (như Query Analyzer, SSMS, sqlcmd) dùng để phân tách và gửi một gói lệnh (Batch) tới máy chủ SQL Server để biên dịch và thực thi độc lập.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều lập trình viên nghĩ GO là câu lệnh T-SQL tiêu chuẩn.",
      "trickWord": "Bẫy từ khóa GO: Là Batch separator của công cụ máy khách, không phải lệnh T-SQL",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục I.1.b",
      "tip": "GO = Dấu phân tách lô lệnh (Batch Separator) của ứng dụng máy khách, không phải lệnh T-SQL!"
    }
  },
  {
    "id": "db-c3-t2-013",
    "question": "Cho bảng NhanVien có ràng buộc CHECK (Luong > 0). Khi thực hiện câu lệnh: INSERT INTO NhanVien (Luong) VALUES (NULL);, kết quả sẽ là gì?",
    "options": [
      "Hệ thống tự động thay thế giá trị NULL thành số 1 để thỏa mãn điều kiện lớn hơn 0 trước khi nạp vào",
      "Hệ thống sẽ báo lỗi vi phạm ràng buộc CHECK vì giá trị NULL không thể lớn hơn số 0 theo quy tắc số học",
      "Câu lệnh chèn thành công vì biểu thức NULL > 0 trả về UNKNOWN và ràng buộc CHECK không từ chối UNKNOWN",
      "Câu lệnh bị từ chối vì mọi biểu thức so sánh có chứa giá trị NULL đều bị hệ thống mặc định coi là FALSE"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục III.1.a & III.2.b: Biểu thức `NULL > 0` trả về kết quả logic là `UNKNOWN`. Ràng buộc CHECK chỉ ngăn chặn (từ chối) khi kết quả kiểm tra là `FALSE`. Vì `UNKNOWN` không phải là `FALSE`, nên câu lệnh INSERT giá trị NULL VẪN THÀNH CÔNG (trừ khi cột đó có thêm ràng buộc NOT NULL)!",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Bẫy tư duy kinh điển: Thí sinh nghĩ `Luong > 0` thì NULL không lớn hơn 0 nên bị chặn.",
      "trickWord": "Bẫy CHECK với NULL: NULL > 0 trả về UNKNOWN ➔ CHECK vẫn cho qua!",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.1.a & III.2.b",
      "tip": "CHECK chỉ chặn FALSE! So sánh với NULL ra UNKNOWN ➔ CHECK CHO QUA (Muốn chặn phải thêm NOT NULL)!"
    }
  },
  {
    "id": "db-c3-t2-014",
    "question": "Khi thực hiện câu lệnh xóa bảng: DROP TABLE NhanVien;, nếu bảng NhanVien đang có một Trigger loại INSTEAD OF DROP thì điều gì xảy ra?",
    "options": [
      "Hệ thống sẽ tự động khóa bảng NhanVien và gửi thông báo lỗi đến hộp thư điện tử của người quản trị",
      "Hành vi xóa bảng sẽ bị chặn lại và đoạn mã bên trong Trigger INSTEAD OF sẽ được kích hoạt thực thi thay thế",
      "Bảng NhanVien vẫn bị xóa bình thường và Trigger sẽ được thực thi lùi sau khi tệp tin đã biến mất hoàn toàn",
      "Lệnh DROP TABLE sẽ bị lỗi cú pháp do SQL Server hoàn toàn không hỗ trợ Trigger INSTEAD OF cho lệnh DROP"
    ],
    "answer": 3,
    "explanation": "Chuẩn T-SQL / SQL Server 2000: Trigger loại INSTEAD OF chỉ hỗ trợ cho các lệnh DML (`INSERT`, `UPDATE`, `DELETE`). SQL Server không hỗ trợ trigger INSTEAD OF trên câu lệnh `DROP TABLE`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ INSTEAD OF trigger có thể áp dụng cho mọi câu lệnh SQL kể cả DROP TABLE.",
      "trickWord": "Bẫy phạm vi INSTEAD OF Trigger: Chỉ dành cho DML (INSERT, UPDATE, DELETE)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục I.1.b & III.2.a",
      "tip": "Trigger INSTEAD OF chỉ dùng cho DML (INSERT/UPDATE/DELETE); Không dùng cho DROP TABLE!"
    }
  },
  {
    "id": "db-c3-t2-015",
    "question": "Điều gì xảy ra với các dòng dữ liệu đang vi phạm ràng buộc CHECK mới khi người quản trị thêm ràng buộc bằng tùy chọn WITH NOCHECK?",
    "options": [
      "Ràng buộc mới vẫn được tạo thành công, dữ liệu cũ vi phạm vẫn được giữ nguyên và chỉ kiểm tra trên dữ liệu mới",
      "Hệ thống sẽ lập tức quét toàn bộ bảng và tự động xóa bỏ các dòng dữ liệu cũ đang vi phạm ràng buộc đó",
      "Hệ thống sẽ từ chối tạo ràng buộc CHECK cho đến khi toàn bộ các dòng vi phạm được người dùng sửa chữa thủ công",
      "Ràng buộc CHECK sẽ tự động cập nhật các giá trị vi phạm về giá trị mặc định của thuộc tính tương ứng"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục III.2.a: Tùy chọn `WITH NOCHECK` trong câu lệnh `ALTER TABLE ADD CONSTRAINT` chỉ thị cho hệ thống KHÔNG KIỂM TRA dữ liệu hiện có trong bảng. Ràng buộc vẫn được tạo và chỉ bắt đầu kiểm soát các thao tác INSERT/UPDATE trong tương lai.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ hệ thống sẽ xóa dữ liệu cũ hoặc bắt buộc dữ liệu cũ phải đúng.",
      "trickWord": "Bẫy tùy chọn WITH NOCHECK: Bỏ qua dữ liệu cũ, chỉ áp dụng cho dữ liệu mới",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.2.a",
      "tip": "WITH NOCHECK = Tha cho dữ liệu cũ, chỉ bắt lỗi dữ liệu mới thêm/sửa!"
    }
  },
  {
    "id": "db-c3-t2-016",
    "question": "Trong mệnh đề WHERE có nhiều toán tử logic kết hợp: A OR B AND C. Thứ tự ưu tiên thực thi ngầm định của SQL Server là gì?",
    "options": [
      "Toán tử OR có độ ưu tiên cao hơn AND, nên biểu thức tương đương với (A OR B) AND C (thực hiện A OR B trước)",
      "Toán tử AND có độ ưu tiên cao hơn OR, nên biểu thức tương đương với A OR (B AND C) (thực hiện B AND C trước)",
      "Các toán tử có độ ưu tiên hoàn toàn ngang hàng nhau và được thực thi tuần tự từ trái sang phải: (A OR B) AND C",
      "Hệ thống sẽ phát sinh lỗi biên dịch và bắt buộc người lập trình phải dùng dấu ngoặc đơn để chỉ rõ thứ tự"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục IV.2.a: Thứ tự ưu tiên toán tử logic trong SQL chuẩn: `NOT` cao nhất ➔ `AND` tiếp theo ➔ `OR` thấp nhất. Do đó `A OR B AND C` luôn được đánh giá là `A OR (B AND C)`. Muốn gom OR trước bắt buộc phải dùng ngoặc: `(A OR B) AND C`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay lầm tưởng các toán tử đọc từ trái sang phải khiến logic lọc dữ liệu bị sai lệch hoàn toàn.",
      "trickWord": "Bẫy thứ tự ưu tiên logic: AND luôn ưu tiên cao hơn OR (A OR B AND C = A OR (B AND C))",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a",
      "tip": "Độ ưu tiên logic: NOT > AND > OR! Không có ngoặc thì AND chạy trước OR!"
    }
  },
  {
    "id": "db-c3-t2-017",
    "question": "Cho bảng Luong (NV char(5), Tien int). Có 3 dòng: ('A', 100), ('B', 200), ('C', NULL). Kết quả của phép tính: AVG(Tien) và SUM(Tien)/COUNT(*) lần lượt là gì?",
    "options": [
      "Cả hai phép tính đều trả về kết quả là 100 vì hệ thống tự động coi giá trị NULL tương đương với số 0",
      "Cả hai phép tính đều trả về kết quả giống hệt nhau là 150 vì giá trị NULL hoàn toàn bị loại bỏ khỏi bảng",
      "AVG(Tien) trả về 150 (300/2), trong khi SUM(Tien)/COUNT(*) trả về 100 (300/3 do COUNT(*) tính cả dòng NULL)",
      "Phép tính AVG(Tien) sẽ trả về giá trị NULL vì xuất hiện giá trị không xác định trong tập hợp dữ liệu"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục IV.3.a: `AVG(Tien)` tự động bỏ qua dòng NULL cả ở tử số và mẫu số: $(100 + 200) / 2 = 150$. Nhưng `SUM(Tien)/COUNT(*)` thì tử số bỏ qua NULL $(100 + 200 = 300)$, còn mẫu số `COUNT(*)` đếm cả 3 dòng: $300 / 3 = 100$! Đây là bẫy tính trung bình cộng cực kỳ phổ biến.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ AVG(cột) tương đương với SUM(cột)/COUNT(*), quên mất mẫu số của AVG bỏ qua NULL.",
      "trickWord": "Bẫy tính trung bình: AVG(cột) [mẫu số bỏ NULL] vs SUM(cột)/COUNT(*) [mẫu số tính cả NULL]",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "AVG(cột) = SUM(cột) / COUNT(cột) (Chia 2 dòng); SUM(cột)/COUNT(*) = Chia 3 dòng!"
    }
  },
  {
    "id": "db-c3-t2-018",
    "question": "Truy vấn sau đây gặp lỗi thực thi run-time nào: SELECT Hoten FROM NhanVien WHERE Luong = (SELECT Luong FROM NhanVien WHERE Phong = 5);?",
    "options": [
      "Lỗi do mệnh đề WHERE của câu truy vấn chính bắt buộc phải chứa tên cột nằm trong danh sách chọn của truy vấn con",
      "Lỗi cú pháp do toán tử so sánh bằng (=) không bao giờ được phép đứng trước một câu truy vấn con lồng nhau",
      "Lỗi do câu truy vấn con bắt buộc phải chứa từ khóa DISTINCT thì mới có thể so sánh được với thuộc tính Luong",
      "Lỗi Subquery trả về nhiều hơn 1 giá trị (Subquery returned more than 1 value) khi phòng số 5 có từ 2 nhân viên"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục IV.3.b: Toán tử so sánh đơn trị (`=`, `>`, `<`) yêu cầu câu truy vấn con bên phải phải là một câu truy vấn đơn trị (Scalar Subquery: trả về đúng 1 hàng và 1 cột). Nếu phòng 5 có từ 2 nhân viên trở lên, hệ thống sẽ phát sinh lỗi run-time ngay lập tức. Muốn đúng phải dùng toán tử tập hợp `IN` hoặc `= ANY`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay dùng toán tử `=` với Subquery mà không lường trước trường hợp bảng con trả về nhiều dòng.",
      "trickWord": "Bẫy Scalar Subquery trả về nhiều dòng với toán tử đơn trị (=, >, <)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b",
      "tip": "Toán tử đơn trị (=, >) chỉ nhận 1 giá trị duy nhất; Trả về >= 2 dòng ➔ DÙNG `IN` hoặc `= ANY`!"
    }
  },
  {
    "id": "db-c3-t2-019",
    "question": "Phép nối PHẢI (RIGHT OUTER JOIN) giữa bảng A và bảng B (A RIGHT JOIN B ON A.id = B.id) có ý nghĩa kỹ thuật chuẩn mực là gì?",
    "options": [
      "Giữ lại toàn bộ tất cả các bản ghi của bảng B bên phải; nếu không có bản ghi A khớp, các cột của A sẽ điền NULL",
      "Giữ lại toàn bộ tất cả các bản ghi của bảng A bên trái; nếu không có bản ghi B khớp, các cột của B sẽ điền NULL",
      "Chỉ giữ lại những bản ghi mà cả hai bảng A và B đều có giá trị id hoàn toàn khớp nhau tại mệnh đề nối ON",
      "Tự động loại bỏ tất cả các bản ghi của bảng B nếu bản ghi đó không tìm thấy sự xuất hiện của khóa ngoại ở bảng A"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục IV.3.a: `A RIGHT JOIN B`: bảng B (bên phải) là bảng chính được giữ nguyên vẹn 100% số dòng. Với những dòng của B không có dòng nào của A thỏa mãn điều kiện `ON`, các cột tương ứng của bảng A trong kết quả sẽ mang giá trị NULL.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn hướng ưu tiên giữa LEFT JOIN (giữ bảng trái) và RIGHT JOIN (giữ bảng phải).",
      "trickWord": "Bẫy bản chất RIGHT JOIN: Giữ toàn bộ bảng B (phải), bảng A không khớp thì điền NULL",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "RIGHT JOIN = Bảng bên PHẢI là số 1 (giữ hết); Bảng bên trái thiếu thì điền NULL!"
    }
  },
  {
    "id": "db-c3-t2-020",
    "question": "Điều gì xảy ra khi ta thực hiện câu lệnh: SELECT COUNT(DISTINCT Phong) FROM NhanVien; khi bảng NhanVien có 5 dòng với giá trị cột Phong là: 1, 1, 2, NULL, NULL?",
    "options": [
      "Kết quả trả về chính xác là 3 (hàm tính cả hai phòng 1, 2 và tính thêm một nhóm độc lập cho giá trị rỗng NULL)",
      "Kết quả trả về chính xác là 2 (hàm COUNT(DISTINCT cột) tự động loại bỏ trùng lặp và bỏ qua toàn bộ giá trị NULL)",
      "Kết quả trả về chính xác là 5 (hàm đếm toàn bộ tổng số dòng hiện có bất chấp từ khóa DISTINCT được chỉ định)",
      "Hệ thống sẽ phát sinh lỗi biên dịch do từ khóa DISTINCT không được phép kết hợp bên trong hàm kết hợp COUNT"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục IV.3.a: `COUNT(DISTINCT Phong)`: (1) Loại bỏ trùng lặp: các giá trị 1 gộp lại thành một, (2) Loại bỏ giá trị NULL: các dòng mang giá trị NULL bị hàm `COUNT(cột)` bỏ qua hoàn toàn. Do đó chỉ còn lại phòng 1 và phòng 2 ➔ Kết quả = 2.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhớ mang máng GROUP BY tính NULL là 1 nhóm nên tưởng COUNT(DISTINCT) cũng tính NULL là 1.",
      "trickWord": "Bẫy kết hợp COUNT(DISTINCT cột): Loại trùng VÀ BỎ QUA NULL (kết quả = 2)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "COUNT(DISTINCT cột) vừa khử trùng, vừa LOẠI BỎ NULL!"
    }
  },
  {
    "id": "db-c3-t2-021",
    "question": "Cho câu lệnh: SELECT Phong, AVG(Luong) FROM NhanVien WHERE Luong > 2000 GROUP BY Phong HAVING COUNT(*) >= 3;. Trình tự lọc dữ liệu của câu lệnh diễn ra như thế nào?",
    "options": [
      "Lọc các phòng có từ 3 người trở lên trước, sau đó tính mức lương trung bình của toàn bộ nhân viên trong phòng đó",
      "Gom nhóm theo phòng trước, lọc phòng có từ 3 người trở lên (HAVING), sau đó mới lọc nhân viên có Luong > 2000 (WHERE)",
      "Lọc nhân viên Luong > 2000 trước (WHERE), gom nhóm theo phòng, rồi giữ phòng có từ 3 người thỏa mãn trở lên (HAVING)",
      "Hệ thống thực hiện đồng thời hai mệnh đề WHERE và HAVING trong cùng một lượt quét dữ liệu duy nhất trên toàn bảng"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục IV.1 & IV.3.a: Theo thứ tự thực thi logic: (1) `WHERE Luong > 2000` lọc bỏ nhân viên lương $\\le 2000$ trước; (2) Gom nhóm các nhân viên còn lại theo `Phong`; (3) `HAVING COUNT(*) >= 3` lọc bỏ các nhóm có ít hơn 3 người (sau khi đã lọc WHERE); (4) Tính `AVG(Luong)` trên các nhóm còn lại.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ COUNT(*) trong HAVING đếm tổng nhân viên ban đầu của phòng (thực tế nó chỉ đếm số nhân viên đã lọt qua WHERE).",
      "trickWord": "Bẫy phối hợp WHERE và HAVING: WHERE lọc dòng trước ➔ Nhóm lại ➔ HAVING lọc nhóm sau",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "WHERE lọc dòng trước ➔ Gom nhóm ➔ HAVING lọc nhóm (COUNT(*) trong HAVING chỉ tính những dòng thỏa WHERE)!"
    }
  },
  {
    "id": "db-c3-t2-022",
    "question": "Toán tử FULL OUTER JOIN giữa hai bảng KhachHang và DonHang có thể được mô phỏng tương đương bằng biểu thức toán học nào?",
    "options": [
      "Là phép kết nối tự nhiên (NATURAL JOIN) kết hợp với mệnh đề lọc loại bỏ các thuộc tính không tương thích",
      "Là phép giao giữa kết quả của LEFT OUTER JOIN và RIGHT OUTER JOIN (lấy phần chung bằng INTERSECT)",
      "Là tích Descartes (CROSS JOIN) giữa hai bảng sau đó loại bỏ các giá trị khóa ngoại mang trạng thái rỗng",
      "Là phép hợp giữa kết quả của LEFT OUTER JOIN và RIGHT OUTER JOIN (loại bỏ phần trùng lặp bằng UNION)"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục IV.3.a: `FULL OUTER JOIN` giữ lại tất cả các dòng của cả hai bảng (khớp thì nối, không khớp thì điền NULL). Nó hoàn toàn tương đương với: `(A LEFT JOIN B) UNION (A RIGHT JOIN B)`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm với phép giao INTERSECT hoặc tích Descartes.",
      "trickWord": "Bẫy bản chất FULL OUTER JOIN: Hợp (UNION) giữa LEFT JOIN và RIGHT JOIN",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "FULL OUTER JOIN = (LEFT JOIN) UNION (RIGHT JOIN)!"
    }
  },
  {
    "id": "db-c3-t2-023",
    "question": "Khi sử dụng toán tử so sánh `LIKE '[A-D]%'`, điều kiện này lọc ra các chuỗi ký tự thỏa mãn tiêu chí gì?",
    "options": [
      "Bắt đầu bằng một ký tự đơn bất kỳ nằm trong dải chữ cái từ A đến D (A, B, C hoặc D), theo sau là chuỗi tùy ý",
      "Bắt đầu bằng một cụm gồm đúng 5 ký tự viết liền nhau là dấu mở ngoặc, chữ A, dấu gạch ngang, chữ D, dấu đóng ngoặc",
      "Chỉ chấp nhận các chuỗi có độ dài cố định đúng 2 ký tự với ký tự đầu là A và ký tự kết thúc bắt buộc là D",
      "Bắt đầu bằng bất kỳ ký tự nào ngoại trừ các chữ cái nằm trong đoạn từ A đến D theo bảng chữ cái tiếng Anh"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục IV.2.a: Trong T-SQL: cặp ngoặc vuông `[...]` đại diện cho một ký tự đơn bất kỳ nằm trong tập hợp hoặc dải ký tự chỉ định. Do đó `[A-D]%` khớp với chuỗi có ký tự đầu tiên là A, B, C hoặc D.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm dấu ngoặc vuông là ký tự hằng chuỗi thông thường thay vì ký tự dải đại diện.",
      "trickWord": "Bẫy dải ký tự trong toán tử LIKE: `[A-D]` đại diện cho 1 ký tự từ A đến D",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a",
      "tip": "LIKE `[A-D]%` = Bắt đầu bằng 1 chữ cái từ A đến D (A, B, C, D)!"
    }
  },
  {
    "id": "db-c3-t2-024",
    "question": "Để tìm các chuỗi có chứa ký tự dấu gạch dưới thực sự `_` (thay vì coi nó là ký tự đại diện cho 1 ký tự), ta phải xử lý như thế nào?",
    "options": [
      "Sử dụng dấu gạch chéo ngược `\\_` theo quy ước mặc định của các ngôn ngữ lập trình kịch bản thông dịch",
      "Đặt dấu gạch dưới trong cặp ngoặc vuông `[_]` hoặc sử dụng ký tự thoát thông qua mệnh đề ESCAPE trong truy vấn",
      "Tự động tăng gấp đôi ký tự thành `__` để báo cho hệ thống SQL biết đây là ký tự thuần túy cần tìm kiếm",
      "Toán tử LIKE hoàn toàn không hỗ trợ tìm kiếm dấu gạch dưới, bắt buộc phải dùng hàm SUBSTRING để bóc tách"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục IV.2.a: Trong T-SQL, để tìm ký tự đại diện như `%` hay `_` dưới dạng ký tự thông thường: (1) Đặt trong ngoặc vuông: `[_]`, `[%]`; hoặc (2) Dùng mệnh đề ESCAPE: `WHERE col LIKE '%!_%' ESCAPE '!'`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay dùng `\\_` (kiểu C/Java) nhưng SQL Server không tự nhận `\\` là escape character nếu không có mệnh đề ESCAPE.",
      "trickWord": "Bẫy thoát ký tự đặc biệt trong LIKE: Đặt trong `[_]` hoặc dùng mệnh đề ESCAPE",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a",
      "tip": "Tìm ký tự đặc biệt `_` hoặc `%` ➔ Cách dễ nhất là bọc trong ngoặc vuông: `[_]` hoặc `[%]`!"
    }
  },
  {
    "id": "db-c3-t2-025",
    "question": "Điều gì xảy ra khi thực hiện câu lệnh: SELECT MaSV FROM SinhVien WHERE DiemTB >= ALL (SELECT DiemTB FROM SinhVien);?",
    "options": [
      "Truy vấn trả về toàn bộ tất cả sinh viên trong bảng do điều kiện so sánh luôn tự thỏa mãn với chính nó",
      "Hệ thống báo lỗi vì toán tử ALL chỉ có thể đi kèm với toán tử so sánh bằng (=) chứ không đi với lớn hơn bằng",
      "Truy vấn trả về mã của những sinh viên có điểm trung bình cao nhất bảng (lớn hơn hoặc bằng tất cả sinh viên)",
      "Truy vấn sẽ trả về tập hợp rỗng nếu trong bảng có từ hai sinh viên trở lên đạt cùng mức điểm trung bình"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục IV.3.b: `>= ALL (<subquery>)` yêu cầu giá trị phải lớn hơn hoặc bằng MỌI giá trị trả về từ truy vấn con. Trong ngữ cảnh này, nó sẽ lọc ra các sinh viên có `DiemTB` đạt giá trị lớn nhất (MAX) của toàn bảng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn giữa toán tử ALL (với tất cả) và ANY (với bất kỳ ai).",
      "trickWord": "Bẫy toán tử tập hợp ALL: `>= ALL` tương đương với việc tìm giá trị MAX",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b",
      "tip": "`>= ALL (tập hợp)` = Lớn hơn hoặc bằng TẤT CẢ ➔ Chính là tìm GIÁ TRỊ LỚN NHẤT (MAX)!"
    }
  },
  {
    "id": "db-c3-t2-026",
    "question": "Một câu lệnh SELECT có chứa mệnh đề GROUP BY nhưng KHÔNG CÓ bất kỳ hàm kết hợp nào trong danh sách chọn có tác dụng tương đương với thao tác nào?",
    "options": [
      "Tự động tạo ra một bảng tạm trong bộ nhớ và chuyển đổi toàn bộ dữ liệu của các cột thành kiểu chuỗi",
      "Hệ thống sẽ lập tức báo lỗi biên dịch do mệnh đề GROUP BY bắt buộc phải đi kèm với ít nhất một hàm kết hợp",
      "Tự động sắp xếp kết quả theo thứ tự tăng dần nhưng vẫn giữ nguyên tất cả các dòng dữ liệu trùng lặp ban đầu",
      "Có tác dụng tương đương hoàn toàn với việc sử dụng từ khóa DISTINCT trên các cột đó để loại bỏ trùng lặp"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục IV.3.a: Khi viết `SELECT CotA, CotB FROM Bang GROUP BY CotA, CotB;` mà không dùng hàm kết hợp nào, hệ thống sẽ gom các dòng có cùng (CotA, CotB) thành 1 dòng duy nhất. Thao tác này có kết quả hoàn toàn giống với `SELECT DISTINCT CotA, CotB FROM Bang;`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ GROUP BY bắt buộc phải có hàm kết hợp (SUM, COUNT...) mới hợp lệ.",
      "trickWord": "Bẫy GROUP BY không có hàm kết hợp: Tương đương với phép lọc loại bỏ trùng lặp DISTINCT",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "GROUP BY không có hàm kết hợp ➔ Tương đương với SELECT DISTINCT!"
    }
  },
  {
    "id": "db-c3-t2-027",
    "question": "Trong câu lệnh truy vấn lồng: SELECT * FROM NhanVien WHERE EXISTS (SELECT * FROM PhongBan WHERE PhongBan.MaPB = 99);. Nếu phòng 99 không tồn tại, kết quả trả về là gì?",
    "options": [
      "Truy vấn trả về 0 dòng dữ liệu (tập hợp rỗng) vì điều kiện EXISTS đánh giá kết quả là FALSE cho toàn bộ các dòng",
      "Truy vấn trả về toàn bộ tất cả nhân viên trong bảng vì câu truy vấn con không liên kết thuộc tính với bảng ngoài",
      "Hệ thống báo lỗi cú pháp do câu truy vấn con bên trong mệnh đề EXISTS không chứa từ khóa kết nối JOIN hợp lệ",
      "Truy vấn sẽ trả về đúng một dòng đầu tiên của bảng NhanVien kèm theo cảnh báo không tìm thấy phòng ban 99"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục IV.3.b: Mệnh đề EXISTS kiểm tra xem Subquery có trả về dòng nào không. Vì phòng 99 không có, Subquery trả về 0 dòng ➔ EXISTS trả về FALSE. Điều kiện WHERE nhận FALSE ➔ Không có dòng nào của NhanVien được chọn ➔ Trả về 0 dòng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn cách đánh giá của EXISTS khi Subquery là câu truy vấn độc lập (không tương quan).",
      "trickWord": "Bẫy EXISTS với Subquery độc lập: Trả về rỗng nếu Subquery không có dòng nào",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b",
      "tip": "EXISTS: Subquery có dòng ➔ TRUE (lấy dòng); Subquery rỗng ➔ FALSE (không lấy dòng nào)!"
    }
  },
  {
    "id": "db-c3-t2-028",
    "question": "Điều gì xảy ra khi thực hiện phép chia hai số nguyên trong T-SQL: SELECT 5 / 2;?",
    "options": [
      "Kết quả trả về là số thực 2.5 (hệ thống SQL tự động ép kiểu mở rộng để bảo toàn độ chính xác phép toán)",
      "Kết quả trả về là số nguyên 2 (phép chia nguyên tự động cắt bỏ phần thập phân theo kiểu của hai toán hạng)",
      "Kết quả trả về là số nguyên 3 (hệ thống SQL tự động làm tròn lên số nguyên gần nhất theo quy tắc toán học)",
      "Hệ thống sẽ báo lỗi do phép toán chia giữa hai số nguyên bắt buộc phải có kết quả là một số nguyên chẵn"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục II.1.a & IV.2: Trong T-SQL, khi chia hai số nguyên (integer division), kết quả trả về luôn là số nguyên (cắt bỏ phần thập phân): `5 / 2 = 2`. Muốn ra 2.5, bắt buộc ít nhất 1 toán hạng phải là số thực: `5.0 / 2` hoặc `CAST(5 AS float) / 2`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh quen với máy tính bỏ túi hoặc Python 3 tưởng 5/2 tự động ra 2.5.",
      "trickWord": "Bẫy phép chia nguyên (Integer Division) trong T-SQL: 5 / 2 = 2 (không phải 2.5)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục II.1.a",
      "tip": "T-SQL: Nguyên chia Nguyên ➔ RA NGUYÊN (5/2 = 2); Muốn số lẻ ➔ Viết 5.0 / 2!"
    }
  },
  {
    "id": "db-c3-t2-029",
    "question": "Mệnh đề HAVING có thể được sử dụng độc lập mà KHÔNG CÓ mệnh đề GROUP BY trong câu lệnh SELECT hay không?",
    "options": [
      "Chỉ được phép nếu bảng dữ liệu đó có ít hơn 100 bản ghi và không chứa bất kỳ giá trị rỗng NULL nào bên trong",
      "Tuyệt đối không được phép trong mọi trường hợp vì HAVING là mệnh đề con phụ thuộc hoàn toàn vào GROUP BY",
      "Hoàn toàn được phép, khi đó toàn bộ bảng dữ liệu sẽ được coi là MỘT NHÓM DUY NHẤT để đánh giá điều kiện HAVING",
      "Được phép nhưng hệ thống sẽ tự động ép kiểu câu lệnh đó chuyển đổi thành mệnh đề WHERE trước khi chạy"
    ],
    "answer": 2,
    "explanation": "Chuẩn ANSI SQL & T-SQL: Mệnh đề `HAVING` hoàn toàn có thể đứng độc lập mà không cần `GROUP BY`. Khi đó, toàn bộ bảng được coi là một nhóm duy nhất, ví dụ: `SELECT AVG(Luong) FROM NhanVien HAVING COUNT(*) > 10;`.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Rất nhiều tài liệu dạy \"HAVING bắt buộc phải đi cùng GROUP BY\", gây ra hiểu lầm kinh điển này.",
      "trickWord": "Bẫy HAVING đứng độc lập không có GROUP BY: Hoàn toàn hợp lệ (coi cả bảng là 1 nhóm)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "HAVING không có GROUP BY ➔ VẪN HỢP LỆ (Hệ thống coi cả bảng là 1 nhóm duy nhất)!"
    }
  },
  {
    "id": "db-c3-t2-030",
    "question": "Khi thực hiện câu lệnh: SELECT TOP 10 PERCENT * FROM SinhVien ORDER BY DiemTB DESC; trong bảng có 25 sinh viên, hệ thống sẽ trả về bao nhiêu dòng?",
    "options": [
      "Chính xác là 0 dòng do số lượng bản ghi tính toán ra không phải là một số nguyên chẵn chia hết cho cơ số 10",
      "Chính xác là 2 dòng (10% của 25 là 2.5, hệ thống tự động cắt bỏ phần thập phân theo quy tắc phép chia nguyên)",
      "Chính xác là 10 dòng (hệ thống ưu tiên con số 10 đứng trước từ khóa PERCENT để lấy số lượng bản ghi cố định)",
      "Chính xác là 3 dòng (10% của 25 là 2.5, hệ thống SQL Server luôn tự động làm tròn LÊN số nguyên gần nhất)"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục IV.2.a: Trong T-SQL: `TOP n PERCENT` sẽ tính $25 \\times 10\\% = 2.5$. SQL Server LUÔN LÀM TRÒN LÊN (Ceiling) đến số nguyên tiếp theo để đảm bảo không bị thiếu dữ liệu tỷ lệ ➔ Kết quả là 3 dòng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ nó cắt phần thập phân thành 2 hoặc làm tròn thông thường.",
      "trickWord": "Bẫy làm tròn của TOP n PERCENT: Luôn làm tròn LÊN (Ceiling: 2.5 ➔ 3 dòng)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a",
      "tip": "TOP n PERCENT: Lẻ chữ số ➔ LUÔN LÀM TRÒN LÊN (2.5 ➔ 3 dòng)!"
    }
  },
  {
    "id": "db-c3-t2-031",
    "question": "Toán tử nào sau đây trong SQL tương đương với toán tử EXISTS nhưng mang ý nghĩa kiểm tra tập hợp sinh ra KHÔNG CÓ BẤT KỲ DÒNG NÀO?",
    "options": [
      "Toán tử NOT EXISTS (trả về TRUE khi câu truy vấn con trả về tập hợp rỗng gồm đúng 0 dòng dữ liệu)",
      "Toán tử NOT IN (kiểm tra phần tử không xuất hiện trong danh sách và tự động bỏ qua các trường rỗng)",
      "Toán tử IS NULL (kiểm tra biến con trỏ bảng có đang trỏ vào một vùng nhớ chưa được cấp phát hay không)",
      "Toán tử EXCEPT (thực hiện phép trừ tập hợp giữa hai bảng dữ liệu có cùng số lượng thuộc tính tương thích)"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục IV.3.b: `NOT EXISTS (<subquery>)` trả về TRUE khi và chỉ khi câu truy vấn con trả về tập rỗng (0 dòng). Nó thường được dùng trong các bài toán phủ định toàn bộ (Anti-Join).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm giữa NOT EXISTS (kiểm tra số dòng = 0) với NOT IN hay IS NULL.",
      "trickWord": "Bẫy cơ chế toán tử NOT EXISTS: TRUE khi tập con trả về 0 dòng",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b",
      "tip": "NOT EXISTS = TRUE khi câu truy vấn con KHÔNG CÓ DÒNG NÀO (0 dòng)!"
    }
  },
  {
    "id": "db-c3-t2-032",
    "question": "Điều gì xảy ra khi ta gom nhóm theo nhiều thuộc tính: GROUP BY Phong, ChucVu?",
    "options": [
      "Hệ thống sẽ gom nhóm theo cột Phong trước, sau đó xóa bỏ cột ChucVu ra khỏi cấu trúc của bảng dữ liệu",
      "Hệ thống sẽ gom các dòng có CÙNG CẶP GIÁ TRỊ (Phong, ChucVu) vào chung một nhóm duy nhất để tính toán hàm",
      "Hệ thống sẽ tạo ra hai bảng kết quả độc lập: một bảng gom theo Phong và một bảng khác gom theo ChucVu",
      "Hệ thống sẽ báo lỗi cú pháp vì mệnh đề GROUP BY trong T-SQL tiêu chuẩn chỉ chấp nhận duy nhất một cột gom nhóm"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục IV.3.a: Khi gom nhóm trên nhiều cột `GROUP BY A, B`: các dòng có cùng giá trị ở cả cột A và cột B sẽ thuộc về cùng một nhóm con. Cấp độ chi tiết của phép gom nhóm được xác định bởi tổ hợp các cột đó.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ GROUP BY chỉ nhóm trên 1 cột hoặc tạo 2 bảng riêng.",
      "trickWord": "Bẫy gom nhóm đa thuộc tính: Nhóm theo tổ hợp giá trị (A, B)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "GROUP BY A, B ➔ Nhóm theo TỔ HỢP CẶP GIÁ TRỊ (A, B)!"
    }
  },
  {
    "id": "db-c3-t2-033",
    "question": "Để lọc các hóa đơn được lập trong tháng 5 năm 2024, biểu thức nào sau đây tận dụng tối đa Chỉ mục (Index SARGable) trên cột NgayLap?",
    "options": [
      "WHERE CONVERT(varchar(7), NgayLap, 120) = '2024-05' (bọc hàm CONVERT làm hệ thống phải quét toàn bộ bảng dữ liệu)",
      "WHERE MONTH(NgayLap) = 5 AND YEAR(NgayLap) = 2024 (bọc hàm MONTH/YEAR khiến chỉ mục bị vô hiệu hóa hoàn toàn)",
      "WHERE NgayLap >= '2024-05-01' AND NgayLap < '2024-06-01' (tìm kiếm theo dải không bọc hàm trên cột chỉ mục)",
      "WHERE NgayLap LIKE '2024-05%' (ép kiểu chuỗi ngầm định khiến hệ thống không thể sử dụng chỉ mục phân cụm)"
    ],
    "answer": 2,
    "explanation": "Chuẩn tối ưu hóa truy vấn SQL (Query Optimization): Khi bọc hàm trên cột có chỉ mục (như `MONTH(NgayLap) = 5`), hệ thống không thể sử dụng Index Seek mà phải quét toàn bộ bảng (Index Scan / Table Scan - Non-SARGable). Cách viết dùng dải giá trị `>= '2024-05-01' AND < '2024-06-01'` giữ nguyên cột giúp tận dụng tối đa Index (SARGable).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Lập trình viên thường viết `MONTH(Ngay) = 5 AND YEAR(Ngay) = 2024` cho nhanh mà không biết nó phá hủy hiệu năng chỉ mục.",
      "trickWord": "Bẫy viết điều kiện SARGable: Bọc hàm trên cột làm vô hiệu hóa Index Seek",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a & Section 0",
      "tip": "Tối ưu Index ➔ KHÔNG BỌC HÀM LÊN CỘT; Dùng dải `>= NgàyDau AND < NgàyCuoi`!"
    }
  },
  {
    "id": "db-c3-t2-034",
    "question": "Trong câu truy vấn có sử dụng mệnh đề HAVING, nếu điều kiện lọc không chứa bất kỳ hàm kết hợp nào (ví dụ: HAVING Phong = 5), điều này có hợp lệ không?",
    "options": [
      "Hệ thống sẽ tự động gán giá trị mặc định cho cột Phong và trả về toàn bộ dữ liệu của tất cả các phòng ban",
      "Tuyệt đối không hợp lệ vì mệnh đề HAVING bắt buộc phải chứa ít nhất một hàm kết hợp như COUNT, SUM hoặc AVG",
      "Hệ thống sẽ tự động hủy bỏ mệnh đề GROUP BY nếu phát hiện trong HAVING không có chứa bất kỳ hàm kết hợp nào",
      "Hoàn toàn hợp lệ theo cú pháp nếu cột Phong có mặt trong GROUP BY, nhưng về mặt hiệu năng nên chuyển vào WHERE"
    ],
    "answer": 3,
    "explanation": "Chuẩn ANSI SQL & T-SQL: Điều kiện `HAVING Phong = 5` là hoàn toàn hợp lệ về cú pháp (miễn là Phong có trong GROUP BY). Tuy nhiên, về mặt tối ưu, lọc từng dòng bằng `WHERE Phong = 5` tốt hơn nhiều vì nó loại bỏ dòng trước khi gom nhóm, giảm tải bộ nhớ đệm.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ HAVING không có hàm kết hợp là bị lỗi cú pháp ngay.",
      "trickWord": "Bẫy điều kiện trong HAVING: Cho phép lọc cột gom nhóm thông thường nhưng kém tối ưu hơn WHERE",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a",
      "tip": "HAVING lọc cột thường (không hàm) ➔ HỢP LỆ nhưng NÊN ĐƯA VÀO WHERE để chạy nhanh hơn!"
    }
  },
  {
    "id": "db-c3-t2-035",
    "question": "Khi thực hiện câu lệnh: SELECT MaSV FROM SinhVien WHERE DiemTB > SOME (SELECT DiemTB FROM SinhVien WHERE Lop = 'CTK31');. Từ khóa SOME có ý nghĩa tương đương với từ khóa nào?",
    "options": [
      "Hoàn toàn tương đương 100% với từ khóa ANY (chỉ cần lớn hơn ít nhất một sinh viên bất kỳ trong lớp CTK31)",
      "Hoàn toàn tương đương với từ khóa ALL (bắt buộc phải lớn hơn toàn bộ tất cả các sinh viên của lớp CTK31)",
      "Hoàn toàn tương đương với từ khóa IN (bắt buộc phải có điểm số trùng khớp với một sinh viên trong lớp CTK31)",
      "Hoàn toàn tương đương với từ khóa EXISTS (chỉ kiểm tra xem lớp CTK31 có sinh viên nào đang theo học hay không)"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục IV.3.b: Trong chuẩn ANSI SQL và T-SQL, hai từ khóa `SOME` và `ANY` là hoàn toàn đồng nghĩa và có thể thay thế lẫn nhau 100%. `> SOME` hay `> ANY` đều có nghĩa là lớn hơn ít nhất một giá trị trong tập hợp (lớn hơn giá trị nhỏ nhất MIN).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người học ít thấy từ khóa SOME nên nghĩ nó có cơ chế đặc biệt khác với ANY.",
      "trickWord": "Bẫy từ khóa SOME vs ANY: Đồng nghĩa 100% trong chuẩn SQL",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b",
      "tip": "SOME và ANY là MỘT (đồng nghĩa 100% trong SQL)!"
    }
  },
  {
    "id": "db-c3-t2-036",
    "question": "Khi tạo một Khung nhìn (View) nhằm mục đích bảo mật dữ liệu nhân sự, giải pháp thiết kế nào sau đây là CHÍNH XÁC NHẤT?",
    "options": [
      "Tạo View chứa toàn bộ các cột sau đó dùng lệnh ALTER TABLE để khóa các cột nhạy cảm không cho người dùng đọc",
      "Chỉ chọn các cột công khai (MaNV, TenNV, Phong) vào View và loại bỏ các cột nhạy cảm (Luong, MatKhau, Thuong)",
      "Đặt mật khẩu truy cập trực tiếp vào định nghĩa của View thông qua mệnh đề WITH PASSWORD PROTECTION của T-SQL",
      "Chuyển đổi toàn bộ dữ liệu của cột nhạy cảm thành các chuỗi ký tự ngẫu nhiên trước khi đưa vào trong View"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục V.1.a: Cơ chế bảo mật bằng Khung nhìn (View): Người quản trị tạo View chỉ chiếu các thuộc tính được phép công khai (MaNV, TenNV, PhongBan), giấu đi các cột nhạy cảm (Luong, Thuong). Sau đó cấp quyền SELECT trên View cho người dùng và thu hồi quyền trên bảng gốc.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ View có tính năng đặt mật khẩu riêng biệt như file nén.",
      "trickWord": "Bẫy cơ chế bảo mật của View: Chiếu lọc bỏ cột nhạy cảm và phân quyền trên View",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục V.1.a",
      "tip": "Bảo mật bằng View = Chỉ SELECT các cột không nhạy cảm ➔ Cấp quyền trên View thay vì bảng gốc!"
    }
  },
  {
    "id": "db-c3-t2-037",
    "question": "Tùy chọn WITH ENCRYPTION khi thực hiện câu lệnh CREATE VIEW mang lại tác dụng kỹ thuật gì?",
    "options": [
      "Ngăn chặn mọi người dùng không có quyền quản trị tối cao (SA) thực hiện truy vấn trích xuất dữ liệu từ View đó",
      "Tự động mã hóa toàn bộ dữ liệu vật lý của các bảng cơ sở gốc bằng thuật toán mã hóa khóa công khai RSA 2048-bit",
      "Mã hóa văn bản định nghĩa câu lệnh SELECT của View trong bảng hệ thống syscomments để chống xem trộm mã nguồn",
      "Tự động nén dung lượng dữ liệu của View trên đĩa cứng để giảm thiểu tối đa tài nguyên lưu trữ của máy chủ"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục V.1.a & Section 0: `WITH ENCRYPTION` mã hóa đoạn mã nguồn định nghĩa câu lệnh tạo View lưu trong bảng hệ thống `syscomments`. Người dùng (kể cả SA) không thể dùng `sp_helptext` để xem mã nguồn câu truy vấn của View. Nó KHÔNG mã hóa dữ liệu trong bảng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm mã hóa mã nguồn View (Definition) với việc mã hóa dữ liệu vật lý (Data Encryption).",
      "trickWord": "Bẫy WITH ENCRYPTION của View: Mã hóa text định nghĩa View trong syscomments",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục V.1.a",
      "tip": "WITH ENCRYPTION = Giấu mã nguồn câu lệnh tạo View, KHÔNG mã hóa dữ liệu trong bảng!"
    }
  },
  {
    "id": "db-c3-t2-038",
    "question": "Cho View: CREATE VIEW V_LuongCao AS SELECT * FROM NhanVien WHERE Luong > 5000 WITH CHECK OPTION;. Điều gì xảy ra khi chạy lệnh: UPDATE V_LuongCao SET Luong = 3000 WHERE MaNV = 'NV01';?",
    "options": [
      "Lệnh cập nhật thành công nhưng hệ thống tự động gỡ bỏ thuộc tính WITH CHECK OPTION khỏi khung nhìn đó",
      "Lệnh cập nhật thành công và bản ghi NV01 lập tức biến mất khỏi kết quả hiển thị của khung nhìn V_LuongCao",
      "Hệ thống tự động điều chỉnh mức lương lên 5001 để thỏa mãn điều kiện tồn tại trong khung nhìn V_LuongCao",
      "Báo lỗi và từ chối vì lương mới 3000 vi phạm điều kiện WHERE Luong > 5000 của mệnh đề WITH CHECK OPTION"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục V.1.b: Mệnh đề `WITH CHECK OPTION` kiểm tra mọi câu lệnh INSERT và UPDATE qua View. Khi sửa `Luong = 3000`, dòng này không còn thỏa mãn `Luong > 5000` (sẽ biến mất khỏi View), do đó SQL Server lập tức chặn lại và báo lỗi vi phạm CHECK OPTION.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nếu không có WITH CHECK OPTION, lệnh UPDATE này sẽ chạy được và dòng NV01 biến mất khỏi View. Thí sinh thường quên tác dụng chặn của WITH CHECK OPTION.",
      "trickWord": "Bẫy chặn UPDATE của WITH CHECK OPTION khi dữ liệu mới vi phạm điều kiện WHERE của View",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục V.1.b",
      "tip": "WITH CHECK OPTION: Sửa giá trị làm mất dòng khỏi View ➔ BỊ CHẶN LỖI NGAY LẬP TỨC!"
    }
  },
  {
    "id": "db-c3-t2-039",
    "question": "Khung nhìn (View) có thể được định nghĩa dựa trên một hoặc nhiều Khung nhìn khác (Nested Views) đã có từ trước hay không?",
    "options": [
      "Hoàn toàn được phép định nghĩa View lồng nhau, nhưng không được phép tham chiếu vòng tròn đệ quy vô tận",
      "Tuyệt đối không được phép vì chuẩn ngôn ngữ SQL quy định View bắt buộc phải được tạo trực tiếp từ bảng vật lý",
      "Chỉ được phép lồng tối đa 2 cấp khung nhìn, từ cấp thứ 3 trở đi hệ thống sẽ tự động phát sinh lỗi bộ nhớ",
      "Được phép lồng nhau nhưng bắt buộc tất cả các View tham gia đều phải có mệnh đề WITH SCHEMABINDING đi kèm"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục V.1.a: View hoàn toàn có thể được tạo từ các View khác đã tồn tại từ trước (Nested Views), miễn là không tạo ra sự phụ thuộc vòng tròn (Circular Dependency) giữa các View.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ View chỉ được tạo từ Table chứ không được tạo từ View khác.",
      "trickWord": "Bẫy View lồng View (Nested Views): Hoàn toàn hợp lệ theo chuẩn SQL",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục V.1.a",
      "tip": "View hoàn toàn có thể SELECT từ một View khác (miễn không tham chiếu vòng tròn)!"
    }
  },
  {
    "id": "db-c3-t2-040",
    "question": "Trong CSDL QLBanHang, để tìm khách hàng có TỔNG SỐ TIỀN MUA HÀNG LỚN NHẤT, giải pháp câu lệnh T-SQL chuẩn mực và tối ưu nhất là gì?",
    "options": [
      "SELECT MaKH, MAX(Trigia) AS TongTien FROM Hoadon GROUP BY MaKH ORDER BY TongTien DESC;",
      "SELECT TOP 1 MaKH, SUM(Trigia) AS TongTien FROM Hoadon GROUP BY MaKH ORDER BY TongTien DESC;",
      "SELECT MaKH, SUM(Trigia) FROM Hoadon WHERE Trigia = (SELECT MAX(Trigia) FROM Hoadon);",
      "SELECT MaKH, SUM(Trigia) FROM Hoadon HAVING SUM(Trigia) >= ALL (SELECT Trigia FROM Hoadon);"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục VI.1.a & Section 0: Tính tổng tiền mua của mỗi khách hàng bằng `GROUP BY MaKH` kết hợp `SUM(Trigia)`, sắp xếp giảm dần `ORDER BY TongTien DESC` và lấy người đứng đầu bằng `TOP 1`. Dùng MAX(Trigia) là tìm hóa đơn lớn nhất chứ không phải tổng tiền mua.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm giữa \"hóa đơn lớn nhất\" (MAX Trigia) và \"tổng tiền mua lớn nhất\" (MAX của SUM Trigia).",
      "trickWord": "Bẫy tìm đối tượng lớn nhất theo tổng: GROUP BY + SUM + ORDER BY DESC + TOP 1",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục VI.1.a",
      "tip": "Tổng tiền lớn nhất ➔ GROUP BY gom nhóm ➔ SUM tính tổng ➔ ORDER BY DESC ➔ TOP 1!"
    }
  },
  {
    "id": "db-c3-t2-041",
    "question": "Trong CSDL QLNV, để tìm các nhân viên KHÔNG CÓ NGƯỜI QUẢN LÝ (tức là Sếp cao nhất trong công ty), câu truy vấn chuẩn xác là gì?",
    "options": [
      "SELECT * FROM NhanVien WHERE MaNQL = ''; (dùng sai toán tử so sánh với chuỗi ký tự rỗng)",
      "SELECT * FROM NhanVien WHERE MaNQL = NULL; (dùng sai toán tử so sánh bằng với giá trị rỗng NULL)",
      "SELECT * FROM NhanVien WHERE MaNQL IS NULL; (kiểm tra trạng thái chưa được gán người quản lý)",
      "SELECT * FROM NhanVien WHERE MaNQL = 0; (dùng sai quy ước gán số 0 cho người quản lý tối cao)"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục IV.2.a & IV.3.a: Người không có người quản lý thì cột khóa ngoại `MaNQL` mang giá trị NULL. Để lọc giá trị NULL trong SQL, cú pháp DUY NHẤT đúng là `WHERE MaNQL IS NULL`. Mọi cách viết `= NULL`, `= ''` hay `= 0` đều sai.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn `= NULL` hoặc `= 0` theo thói quen lập trình hướng đối tượng.",
      "trickWord": "Bẫy tìm kiếm giá trị rỗng trong khóa ngoại đệ quy: Bắt buộc dùng IS NULL",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a",
      "tip": "Không có người quản lý ➔ Cột MaNQL mang giá trị NULL ➔ Dùng `WHERE MaNQL IS NULL`!"
    }
  },
  {
    "id": "db-c3-t2-042",
    "question": "Trong CSDL QLBanHang, câu truy vấn tính tổng doanh thu của từng hóa đơn: SELECT SoHD, SUM(Soluong * Dongia) AS TongTien FROM Chitiet_HD GROUP BY SoHD;. Thao tác `Soluong * Dongia` diễn ra ở giai đoạn nào?",
    "options": [
      "Hệ thống sẽ báo lỗi biên dịch vì bên trong hàm kết hợp SUM không được phép chứa phép toán nhân số học",
      "Hàm SUM cộng dồn toàn bộ Soluong trước, sau đó nhân với tổng toàn bộ Dongia của nhóm hóa đơn tương ứng",
      "Được tính toán độc lập sau khi toàn bộ câu lệnh SELECT đã hoàn tất việc sắp xếp dữ liệu ở bước cuối cùng",
      "Được tính toán trên từng dòng chi tiết trước, sau đó hàm SUM mới cộng dồn các kết quả đó lại theo nhóm SoHD"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục IV.3.a & VI.1.a: Biểu thức số học `Soluong * Dongia` là biểu thức tính toán mức dòng (Row-level expression). Hệ thống nhân số lượng với đơn giá cho từng dòng chi tiết, sau đó hàm kết hợp `SUM` mới cộng dồn các tích số đó lại cho từng nhóm SoHD.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm tưởng SUM(A * B) sẽ tính SUM(A) * SUM(B) (về mặt toán học hai phép tính này hoàn toàn khác nhau).",
      "trickWord": "Bẫy tính toán biểu thức bên trong hàm kết hợp: Tính mức dòng trước ➔ Cộng dồn sau",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.a & VI.1.a",
      "tip": "SUM(Soluong * Dongia) = Nhân từng dòng thành tiền trước, rồi cộng dồn lại!"
    }
  },
  {
    "id": "db-c3-t2-043",
    "question": "Trong CSDL Công Ty, để tìm danh sách các phòng ban CHƯA ĐƯỢC PHÂN CÔNG BẤT KỲ ĐỀ ÁN NÀO, giải pháp dùng NOT IN chuẩn xác và an toàn nhất là gì?",
    "options": [
      "SELECT MaPB FROM PhongBan WHERE MaPB NOT IN (SELECT MaPB FROM DeAn WHERE MaPB IS NOT NULL); (an toàn)",
      "SELECT MaPB FROM PhongBan WHERE MaPB NOT IN (SELECT MaPB FROM DeAn); (bị lỗi trắng kết quả nếu có NULL)",
      "SELECT MaPB FROM PhongBan WHERE MaPB NOT IN (SELECT DISTINCT MaPB FROM DeAn WHERE MaPB IS NOT NULL);",
      "SELECT MaPB FROM PhongBan WHERE MaPB NOT IN (SELECT 0 FROM DeAn WHERE PhongBan.MaPB = DeAn.MaPB); (sai)"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục IV.3.b & VI.1.b: Để dùng `NOT IN` một cách an toàn tuyệt đối, trong câu truy vấn con BẮT BUỘC PHẢI LOẠI BỎ NULL bằng điều kiện `WHERE MaPB IS NOT NULL`. Nếu bảng DeAn có dù chỉ 1 dòng mang MaPB là NULL, câu truy vấn ở phương án B sẽ trả về rỗng ngay lập tức!",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Hầu hết mọi người viết theo phương án B và bị lỗi trắng kết quả khi bảng con có chứa NULL.",
      "trickWord": "Bẫy an toàn cho NOT IN: Bắt buộc lọc `WHERE Cot IS NOT NULL` ở Subquery",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.3.b & VI.1.b",
      "tip": "Muốn dùng NOT IN an toàn ➔ Subquery PHẢI CÓ `WHERE Cot IS NOT NULL`!"
    }
  },
  {
    "id": "db-c3-t2-044",
    "question": "Khi sử dụng toán tử LIKE để tìm các nhân viên có họ tên chứa ký tự gạch dưới: WHERE Hoten LIKE '%\\_%' ESCAPE '\\'. Ký tự gạch chéo ngược `\\` đóng vai trò gì?",
    "options": [
      "Là một ký tự đại diện cho một khoảng trắng phân cách giữa họ và tên lót của từng người nhân viên",
      "Là ký tự thoát (Escape character) chỉ định rằng ký tự _ đứng liền sau nó là ký tự tìm kiếm thực tế",
      "Là toán tử chia số học phân tách giữa phần đầu và phần đuôi kết thúc của chuỗi ký tự tìm kiếm",
      "Là ký tự bắt buộc để kích hoạt chế độ tìm kiếm theo biểu thức chính quy RegEx trong SQL Server"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục IV.2.a: Mệnh đề `ESCAPE '\\';` định nghĩa ký tự `\\` làm ký tự thoát. Bất kỳ ký tự đại diện nào (`_` hoặc `%`) đứng ngay sau ký tự thoát sẽ mất đi tính đại diện và được xem là ký tự ký tự thông thường.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh không hiểu cơ chế của mệnh đề ESCAPE trong truy vấn chuỗi T-SQL.",
      "trickWord": "Bẫy mệnh đề ESCAPE trong toán tử LIKE: Định nghĩa ký tự thoát",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a",
      "tip": "Mệnh đề ESCAPE: Ký tự đứng sau ký tự thoát sẽ là KÝ TỰ THỰC TẾ, không còn là ký tự đại diện!"
    }
  },
  {
    "id": "db-c3-t2-045",
    "question": "Trong CSDL QLBanHang, khi xóa một khách hàng trong bảng Khach: DELETE FROM Khach WHERE MaKH = 'KH01'; nếu khách hàng này đã có hóa đơn trong bảng Hoadon và FK cài đặt ON DELETE NO ACTION thì điều gì xảy ra?",
    "options": [
      "Hệ thống tự động gán mã khách hàng trong các hóa đơn liên quan thành giá trị rỗng NULL",
      "Hệ thống tự động xóa khách hàng KH01 đồng thời tự động xóa luôn các hóa đơn của khách hàng đó",
      "Hệ thống từ chối xóa và báo lỗi vi phạm ràng buộc toàn vẹn tham chiếu (FK constraint violation)",
      "Khách hàng KH01 vẫn bị xóa và các hóa đơn của khách hàng đó chuyển thành hóa đơn tự do vô chủ"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục III.2.b & IV.1: Tùy chọn mặc định của khóa ngoại là `ON DELETE NO ACTION`. Hệ thống sẽ kiểm tra và chặn ngay lập tức thao tác xóa bản ghi ở bảng cha nếu đang có bản ghi con tham chiếu đến nó.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm NO ACTION (chặn xóa) với CASCADE (xóa lan truyền).",
      "trickWord": "Bẫy hành vi NO ACTION của khóa ngoại: Chặn đứng thao tác xóa vi phạm tham chiếu",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.2.b",
      "tip": "Khóa ngoại NO ACTION (mặc định) ➔ Bảng con còn dữ liệu thì CẤM XÓA BẢNG CHA!"
    }
  },
  {
    "id": "db-c3-t2-046",
    "question": "Trong CSDL QLBanHang, bài toán \"Cho biết thông tin những khách hàng có cùng ngày sinh\" (Bài tập 7). Nếu trong CSDL có đúng 3 khách hàng KH01, KH02, KH03 có cùng ngày sinh nhật, câu truy vấn dùng điều kiện `K1.MaKH < K2.MaKH` sẽ trả về bao nhiêu dòng kết quả?",
    "options": [
      "Chính xác là 1 dòng kết quả duy nhất đại diện cho nhóm những người có ngày sinh trùng khớp với nhau",
      "Chính xác là 6 dòng kết quả (do sinh ra đầy đủ tất cả các cặp hoán vị đối xứng qua lại giữa ba khách hàng)",
      "Chính xác là 9 dòng kết quả (phép tích Descartes kết hợp từng người với tất cả mọi người bao gồm cả chính họ)",
      "Chính xác là 3 dòng kết quả (gồm đúng 3 cặp tổ hợp chập 2 của 3 phần tử: (KH01,KH02), (KH01,KH03), (KH02,KH03))"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục VI.1.b (Bài tập 7): Số cặp đôi khác nhau được chọn từ 3 người là tổ hợp chập 2 của 3: $C_3^2 = \\frac{3 \\times 2}{2} = 3$ cặp: (KH01, KH02), (KH01, KH03), (KH02, KH03). Điều kiện `<` đảm bảo mỗi cặp chỉ xuất hiện đúng 1 lần duy nhất.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm với số chỉnh hợp (6 dòng) nếu dùng `<>` hoặc tích Descartes (9 dòng).",
      "trickWord": "Bẫy số lượng dòng Self-Join khử trùng lặp: Tổ hợp chập 2 (C_n^2)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục VI.1.b",
      "tip": "3 người cùng ngày sinh: Dùng `<` ra đúng $C_3^2 = 3$ cặp; Dùng `<>` ra $3 \\times 2 = 6$ dòng!"
    }
  },
  {
    "id": "db-c3-t2-047",
    "question": "Trong câu lệnh truy vấn: SELECT MaPB, TenPB INTO PhongBan_Backup FROM PhongBan;. Bản chất kỹ thuật của câu lệnh SELECT INTO là gì?",
    "options": [
      "Tự động tạo ra một bảng mới có tên PhongBan_Backup và sao chép cấu trúc cùng dữ liệu từ bảng nguồn sang",
      "Chèn dữ liệu vào một bảng PhongBan_Backup đã được tạo sẵn từ trước trong cơ sở dữ liệu hiện hành",
      "Tạo ra một Khung nhìn (View) tạm thời có tên là PhongBan_Backup để phục vụ sao lưu dữ liệu nhanh chóng",
      "Xuất toàn bộ dữ liệu của hai cột chỉ định ra một tệp tin văn bản thuần túy định dạng CSV trên ổ cứng"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục III.2.a: Lệnh `SELECT ... INTO <BangMoi> FROM <BangNguon>` là lệnh DDL/DML kết hợp của T-SQL: tự động tạo bảng mới và nạp dữ liệu từ câu truy vấn sang. Bảng đích `PhongBan_Backup` PHẢI CHƯA TỒN TẠI (nếu đã tồn tại sẽ bị báo lỗi).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn giữa `SELECT INTO` (bảng đích chưa có) và `INSERT INTO SELECT` (bảng đích đã có sẵn).",
      "trickWord": "Bẫy SELECT INTO vs INSERT INTO SELECT: SELECT INTO tự tạo bảng mới",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục III.2.a",
      "tip": "SELECT INTO = Tự tạo bảng mới rồi nạp dữ liệu; INSERT INTO SELECT = Nạp vào bảng ĐÃ CÓ!"
    }
  },
  {
    "id": "db-c3-t2-048",
    "question": "Trong CSDL QLBanHang, bài toán \"Cho biết tổng số lượng bán được của mỗi mặt hàng\" (Bài tập 5). Nếu có một mặt hàng chưa từng được bán lần nào, làm sao để mặt hàng đó vẫn xuất hiện trong kết quả với tổng số lượng là 0?",
    "options": [
      "Dùng Hanghoa INNER JOIN Chitiet_HD và sử dụng mệnh đề HAVING để lọc các mặt hàng có tổng số lượng bằng 0",
      "Dùng Hanghoa LEFT JOIN Chitiet_HD, gom nhóm theo Hanghoa, và dùng hàm ISNULL(SUM(Chitiet_HD.Soluong), 0)",
      "Chỉ cần dùng phép nối thông thường và hệ thống SQL sẽ tự động chuyển các giá trị NULL thành số 0",
      "Bắt buộc phải chèn một bản ghi giả có số lượng bằng 0 vào bảng Chitiet_HD trước khi thực hiện truy vấn"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục VI.1.a (Bài tập 5): Để lấy cả mặt hàng chưa từng bán, bắt buộc phải dùng `Hanghoa LEFT JOIN Chitiet_HD`. Với hàng chưa bán, `SUM(Chitiet_HD.Soluong)` sẽ trả về NULL. Ta dùng hàm `ISNULL(SUM(...), 0)` (hoặc `COALESCE`) để hiển thị số 0 thay vì NULL.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh dùng INNER JOIN (bị mất mặt hàng chưa bán) hoặc quên hàm ISNULL (kết quả hiển thị NULL thay vì 0).",
      "trickWord": "Bẫy hiển thị số 0 cho nhóm chưa có dữ liệu: LEFT JOIN + ISNULL(SUM(...), 0)",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục VI.1.a & Section 0",
      "tip": "Lấy cả mặt hàng chưa bán với số lượng = 0 ➔ LEFT JOIN + ISNULL(SUM(Soluong), 0)!"
    }
  },
  {
    "id": "db-c3-t2-049",
    "question": "Điều kiện nào sau đây đảm bảo kết quả truy vấn SELECT DISTINCT luôn trả về danh sách các bản ghi duy nhất không trùng lặp?",
    "options": [
      "Hệ thống tự động bổ sung một cột số thứ tự ẩn vào kết quả để đảm bảo mọi dòng đều có tính duy nhất",
      "Chỉ cần giá trị ở cột khóa chính của bảng cơ sở không trùng nhau là kết quả sẽ phân biệt rõ ràng",
      "Toàn bộ các giá trị cột trong danh sách SELECT của hai dòng bất kỳ không được phép giống hệt nhau",
      "Mọi bảng tham gia vào truy vấn bắt buộc phải có ràng buộc toàn vẹn khóa chính PRIMARY KEY xác thực"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục IV.2.a: Từ khóa DISTINCT so sánh trên TOÀN BỘ các thuộc tính có mặt trong danh sách chiếu SELECT. Hai dòng được coi là trùng lặp khi và chỉ khi tất cả các giá trị cột tương ứng của chúng hoàn toàn bằng nhau.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ DISTINCT phụ thuộc vào khóa chính của bảng gốc.",
      "trickWord": "Bẫy tiêu chí so sánh của DISTINCT: So sánh toàn bộ các cột trong danh sách SELECT",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục IV.2.a",
      "tip": "DISTINCT chỉ xét các cột nằm trong mệnh đề SELECT, không phụ thuộc vào khóa chính bảng gốc!"
    }
  },
  {
    "id": "db-c3-t2-050",
    "question": "Tổng kết toàn diện Chương III: Trong kiến trúc cỗ máy cơ sở dữ liệu quan hệ RDBMS, ngôn ngữ T-SQL đóng vai trò bản chất gì?",
    "options": [
      "Là giao thức mạng truyền thông chuyên dụng dùng để định tuyến các gói tin dữ liệu giữa các máy chủ SQL",
      "Là ngôn ngữ hệ thống cấp thấp biên dịch trực tiếp ra mã máy nhị phân để điều khiển trực tiếp đĩa từ",
      "Là thư viện đồ họa giao diện người dùng độc quyền giúp thiết kế các biểu mẫu nhập liệu và báo cáo bảng",
      "Là ngôn ngữ chuẩn kết hợp giữa định nghĩa cấu trúc (DDL), thao tác dữ liệu (DML) và lập trình điều khiển"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 3, Mục I.1 & VII.1: T-SQL là ngôn ngữ truy vấn có cấu trúc mở rộng, là phương tiện toàn diện duy nhất cho phép: định nghĩa CSDL và bảng (DDL), truy vấn và cập nhật dữ liệu (DML/DQL), đồng thời bổ sung các cấu trúc lập trình thủ tục (IF, WHILE, Biến, Hàm, Trigger) để xây dựng ứng dụng CSDL hoàn chỉnh.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhìn nhận SQL một cách phiến diện (chỉ nghĩ nó là ngôn ngữ truy vấn SELECT).",
      "trickWord": "Bẫy vai trò toàn diện của T-SQL: DDL + DML/DQL + Lập trình điều khiển thủ tục",
      "citation": "Giáo trình Hệ CSDL — Chương 3, Mục I.1 & VII.1",
      "tip": "T-SQL = DDL (Cấu trúc) + DML/DQL (Dữ liệu) + Lập trình thủ tục điều khiển (Procedural)!"
    }
  }
];
