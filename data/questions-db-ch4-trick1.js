/* ============================================================
   NGÂN HÀNG ĐỀ THI BẪY 1 (TRICK EXAM SET 1) — MÔN HỆ CƠ SỞ DỮ LIỆU
   CHƯƠNG IV: RÀNG BUỘC TOÀN VẸN (INTEGRITY CONSTRAINTS)
   MÃ BỘ ĐỀ: db-c4-t1 (50 CÂU HỎI VẬN DỤNG CAO / HARD 100%)
   CƠ CHẾ CHỐNG ĐOÁN BỪA: DELTA L <= 15 KÝ TỰ MỌI CÂU HỎI
   PHÂN BỔ ĐÁP ÁN CÂN BẰNG: 13 A, 13 B, 12 C, 12 D
   TRANG BỊ ĐẦY ĐỦ 4 TRƯỜNG BẪY HỌC THUẬT: whyTrapped, trickWord, citation, tip
   ============================================================ */

export const questionsDbCh4Trick1 = [
  {
    "id": "db-c4-t1-001",
    "question": "Khẳng định nào sau đây là ĐÚNG ĐẮN NHẤT về bản chất của một Ràng buộc toàn vẹn (RBTV) trong hệ cơ sở dữ liệu quan hệ?",
    "options": [
      "Là điều kiện bất biến mà mọi trạng thái hợp lệ của CSDL đều bắt buộc phải thỏa mãn tại mọi thời điểm",
      "Là tập hợp các quy tắc kiểm tra tạm thời do lập trình viên ứng dụng tự thiết lập trên giao diện người dùng",
      "Là tính chất thống kê được suy diễn tự động từ trạng thái dữ liệu ngẫu nhiên đang có sẵn trong các bảng",
      "Là cơ chế khóa bản ghi được kích hoạt riêng biệt nhằm phục vụ mục đích kiểm soát các truy cập đồng thời"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục II.1.a: RBTV là những điều kiện bất biến mà tất cả các bộ của các quan hệ liên quan trong CSDL đều phải thỏa mãn ở bất kỳ thời điểm nào. Nó phản ánh quy tắc quản lý của thế giới thực, không phụ thuộc vào trạng thái dữ liệu tức thời hay giao diện người dùng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm RBTV với các tính chất dữ liệu ngẫu nhiên hiện có hoặc nhầm với cơ chế khóa đồng thời.",
      "trickWord": "Bẫy bản chất RBTV: Là ĐIỀU KIỆN BẤT BIẾN tại MỌI THỜI ĐIỂM, không phải thống kê tạm thời",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục II.1.a & Section 0",
      "tip": "RBTV = Bất biến logic vĩnh viễn! Dữ liệu hiện tại tình cờ thỏa mãn KHÔNG ĐỒNG NGHĨA đó là RBTV."
    }
  },
  {
    "id": "db-c4-t1-002",
    "question": "Khi nào Hệ quản trị cơ sở dữ liệu (DBMS) KHÔNG CẦN kích hoạt cơ chế kiểm tra các ràng buộc toàn vẹn dữ liệu?",
    "options": [
      "Khi ứng dụng thực hiện thao tác INSERT một bản ghi mới có chứa khóa ngoại vào bảng dữ liệu chi tiết",
      "Khi người dùng thực thi một câu lệnh SELECT thông thường để truy vấn dữ liệu từ các bảng trong hệ thống",
      "Khi người quản trị thực thi lệnh UPDATE làm biến đổi giá trị của một thuộc tính nằm trong khóa chính",
      "Khi tiến trình nghiệp vụ gọi lệnh DELETE để loại bỏ một bản ghi cha đang được các bảng khác tham chiếu"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục II.1.b: DBMS kích hoạt kiểm tra RBTV ngay khi thực hiện thao tác cập nhật CSDL (INSERT, UPDATE, DELETE) hoặc kiểm tra định kỳ khi bảo trì. Câu lệnh SELECT là thao tác chỉ đọc (Read-only), không làm thay đổi trạng thái dữ liệu nên DBMS tuyệt đối không cần kiểm tra RBTV.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ SELECT cũng phải kiểm tra để bảo đảm dữ liệu đọc ra là hợp lệ.",
      "trickWord": "Bẫy thời điểm kiểm tra: SELECT KHÔNG BAO GIỜ kích hoạt kiểm tra RBTV vì là lệnh chỉ đọc",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục II.1.b",
      "tip": "Chỉ có thao tác THAY ĐỔI DỮ LIỆU (Thêm, Sửa, Xóa) mới kích hoạt kiểm tra RBTV!"
    }
  },
  {
    "id": "db-c4-t1-003",
    "question": "Trong quá trình vận hành CSDL, nếu một thao tác cập nhật (INSERT/UPDATE/DELETE) làm vi phạm một RBTV đã định nghĩa thì DBMS sẽ xử lý như thế nào?",
    "options": [
      "Vẫn ghi nhận thao tác cập nhật vào ổ đĩa nhưng gắn cờ cảnh báo để người quản trị xử lý thủ công sau đó",
      "Tự động ghi đè dữ liệu vi phạm thành giá trị NULL và vẫn cho phép giao dịch được xác nhận thành công",
      "Hủy bỏ toàn bộ thao tác cập nhật vi phạm, hoàn nguyên trạng thái cũ của CSDL và gửi thông báo lỗi chi tiết",
      "Tự động sửa đổi giá trị dữ liệu vi phạm về giá trị trung bình cộng của toàn bộ cột tương ứng trong bảng"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục II.1.b & Section 0: Khi một thao tác cập nhật vi phạm RBTV, DBMS sẽ lập tức từ chối thao tác đó, hoàn nguyên trạng thái cũ (Rollback) để bảo vệ tính nhất quán của CSDL và trả về thông báo lỗi cho người dùng/ứng dụng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm với cơ chế ghi log cảnh báo hoặc nghĩ DBMS sẽ tự động gán NULL.",
      "trickWord": "Bẫy phản ứng DBMS: CHẶN ĐỨNG & HỦY BỎ thao tác vi phạm, phục hồi trạng thái nhất quán",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục II.1.b & Section 0",
      "tip": "Vi phạm RBTV ➔ Lập tức ABORT / ROLLBACK, từ chối ghi nhận dữ liệu bẩn!"
    }
  },
  {
    "id": "db-c4-t1-004",
    "question": "Mối quan hệ giữa \"Quy tắc quản lý\" (Business Rules) trong thực tế và \"Ràng buộc toàn vẹn\" (RBTV) trong CSDL được hiểu chuẩn xác là:",
    "options": [
      "RBTV chỉ là các ràng buộc vật lý về phần cứng lưu trữ, không thể hiện bất kỳ quy tắc quản lý thực tế nào",
      "Quy tắc quản lý chỉ áp dụng cho tài liệu nội bộ, hoàn toàn độc lập và không liên quan gì tới các RBTV",
      "Mọi quy tắc quản lý trong thực tế đều có thể tự động cài đặt trọn vẹn bằng các ràng buộc mặc định CHECK",
      "RBTV chính là sự hình thức hóa các quy tắc quản lý của thế giới thực vào bên trong mô hình dữ liệu CSDL"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục II.1.a (Định nghĩa): Trong thực tế, RBTV chính là các quy tắc quản lý (business rules) được áp đặt lên các đối tượng của thế giới thực và được hình thức hóa thành các biểu thức logic trong CSDL.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ mọi quy tắc quản lý đều cài được bằng lệnh CHECK đơn giản, quên mất nhiều quy tắc cần Trigger hoặc thủ tục phức tạp.",
      "trickWord": "Bẫy Business Rules: RBTV là sự HÌNH THỨC HÓA các quy tắc quản lý vào mô hình CSDL",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục II.1.a",
      "tip": "Business Rule ngoài đời thực ➔ Chuyển thành RBTV trong CSDL (bằng CHECK, FK hoặc Trigger)!"
    }
  },
  {
    "id": "db-c4-t1-005",
    "question": "Khẳng định nào sau đây là một cạm bẫy SAI LẦM khi phát biểu về tính bất biến của Ràng buộc toàn vẹn?",
    "options": [
      "Nếu tại một thời điểm nào đó toàn bộ dữ liệu hiện có đều thỏa một tính chất thì tính chất đó là một RBTV",
      "Một RBTV đã được định nghĩa thì mọi trạng thái dữ liệu tương lai của CSDL đều bắt buộc phải thỏa mãn nó",
      "Dù bảng đang rỗng hoàn toàn không có dòng nào thì các quy tắc RBTV của bảng đó vẫn tồn tại nguyên vẹn",
      "Việc xác định một tính chất có phải là RBTV hay không phải dựa trên quy tắc quản lý chứ không dựa vào dữ liệu"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục II.1.a & Section 0: Một tính chất tình cờ đúng trên tập dữ liệu mẫu hiện tại KHÔNG THỂ coi là một RBTV nếu nó không phải là quy tắc quản lý bất biến. Ví dụ: hiện tại tất cả sinh viên đều có quê quán ở Hà Nội, nhưng đó không phải RBTV vì ngày mai có thể có sinh viên từ tỉnh khác nhập học.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn giữa dữ liệu ngẫu nhiên hiện có (Data Instance) và quy tắc bất biến của lược đồ (Schema Invariant).",
      "trickWord": "Bẫy ngụy biện dữ liệu: Dữ liệu hiện tại thỏa mãn KHÔNG CÓ NGHĨA đó là một RBTV",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục II.1.a",
      "tip": "RBTV phụ thuộc vào QUY TẮC NGHIỆP VỤ của lược đồ, không phụ thuộc vào trạng thái ngẫu nhiên của dữ liệu!"
    }
  },
  {
    "id": "db-c4-t1-006",
    "question": "Một Ràng buộc toàn vẹn (RBTV) trong hệ cơ sở dữ liệu quan hệ được xác định hoàn chỉnh bởi 3 yếu tố cốt lõi nào?",
    "options": [
      "Khóa chính (Primary Key), Khóa ngoại (Foreign Key) và Chỉ mục dữ liệu (Index)",
      "Điều kiện (Condition), Bối cảnh (Context) và Tầm ảnh hưởng (Affected operations)",
      "Tên ràng buộc, Kiểu dữ liệu thuộc tính và Bảng chứa các bản ghi bị vi phạm",
      "Ngôn ngữ biểu diễn, Thủ tục lưu trữ (Stored Procedure) và Bộ nhớ đệm hệ thống"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục III.1.a: Một RBTV được xác định hoàn chỉnh bởi 3 yếu tố: a) Điều kiện (Condition); b) Bối cảnh (Context); c) Tầm ảnh hưởng (Affected operations).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn nhầm Khóa chính, Khóa ngoại, Chỉ mục vì đây là các đối tượng phổ biến của bảng.",
      "trickWord": "Bẫy 3 yếu tố RBTV: ĐIỀU KIỆN - BỐI CẢNH - TẦM ẢNH HƯỞNG",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a",
      "tip": "Học thuộc lòng bộ 3: Điều kiện (luật gì) - Bối cảnh (ở bảng nào) - Tầm ảnh hưởng (thao tác nào phải xét)!"
    }
  },
  {
    "id": "db-c4-t1-007",
    "question": "Yếu tố \"Bối cảnh\" (Context) của một Ràng buộc toàn vẹn được định nghĩa chính xác nhất là:",
    "options": [
      "Khoảng thời gian từ lúc giao dịch bắt đầu cho đến khi kết thúc bằng lệnh COMMIT thành công",
      "Danh sách các cột thuộc tính có kiểu dữ liệu số nguyên tham gia vào biểu thức tính toán",
      "Tập hợp các quan hệ (bảng) trong CSDL mà RBTV đó có hiệu lực tác động và cần kiểm tra",
      "Toàn bộ không gian lưu trữ vật lý trên ổ cứng được cấp phát riêng cho các bảng dữ liệu"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục III.1.a: Bối cảnh (Context) là những quan hệ (bảng) mà RBTV đó có hiệu lực. Có thể là một quan hệ (bối cảnh 1 quan hệ) hoặc nhiều quan hệ (bối cảnh nhiều quan hệ).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ bối cảnh là danh sách các cột thuộc tính hoặc ngữ cảnh giao dịch thời gian.",
      "trickWord": "Bẫy Bối cảnh: Là tập hợp các QUAN HỆ (BẢNG) mà RBTV có hiệu lực, không phải tập hợp cột",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a",
      "tip": "Bối cảnh = DANH SÁCH BẢNG (Relations) chịu sự chi phối của ràng buộc!"
    }
  },
  {
    "id": "db-c4-t1-008",
    "question": "Trong CSDL `HSSINHVIEN`, xét ràng buộc: \"Mỗi sinh viên phải thuộc về một khoa đã tồn tại\". Bối cảnh của ràng buộc này gồm những quan hệ nào?",
    "options": [
      "Chỉ gồm duy nhất 1 quan hệ KHOA vì khoa là thực thể cha quản lý danh sách toàn bộ các sinh viên",
      "Chỉ gồm duy nhất 1 quan hệ SINH_VIEN vì cột maKhoa được lưu trữ trực tiếp trong bảng sinh viên",
      "Gồm 3 quan hệ SINH_VIEN, KHOA và KET_QUA vì điểm số của sinh viên cũng phụ thuộc vào khoa quản lý",
      "Bối cảnh gồm 2 quan hệ là SINH_VIEN và KHOA vì đây là ràng buộc phụ thuộc tồn tại liên bảng"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục III.1.a & VI.1.a: Ràng buộc \"Mỗi sinh viên phải thuộc về một khoa\" là ràng buộc khóa ngoại tham chiếu từ SINH_VIEN đến KHOA. Do đó bối cảnh bắt buộc phải gồm cả 2 quan hệ: SINH_VIEN và KHOA.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ chỉ có bảng SINH_VIEN chứa khóa ngoại nên bối cảnh chỉ có 1 bảng.",
      "trickWord": "Bẫy bối cảnh khóa ngoại: Bắt buộc gồm CẢ BẢNG CON VÀ BẢNG CHA (2 quan hệ)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a & VI.1.a",
      "tip": "Ràng buộc khóa ngoại luôn có bối cảnh là NHIỀU QUAN HỆ (tối thiểu 2 bảng: Con & Cha)!"
    }
  },
  {
    "id": "db-c4-t1-009",
    "question": "Điều kiện của một Ràng buộc toàn vẹn KHÔNG THỂ biểu diễn bằng hình thức nào sau đây?",
    "options": [
      "Một tệp nhật ký nhị phân tự sinh ghi lại lịch sử các giao dịch truy xuất dữ liệu phần cứng",
      "Ngôn ngữ tự nhiên hoặc các thuật giải mô tả bằng lời kèm mã giả trực quan từng bước",
      "Ngôn ngữ đại số quan hệ, đại số tập hợp hoặc hệ thống phụ thuộc hàm chuẩn hóa",
      "Biểu thức toán học giải tích thuộc hệ thống Logic vị từ bậc nhất (First-Order Predicate)"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục III.1.a: Điều kiện của một RBTV có thể biểu diễn bằng: Ngôn ngữ tự nhiên, Thuật giải, Đại số tập hợp / Đại số quan hệ, Phụ thuộc hàm, Logic vị từ bậc nhất. Tệp nhật ký nhị phân (Binary log) là công cụ ghi log của DBMS, không phải là ngôn ngữ biểu diễn điều kiện RBTV.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm công cụ hệ thống (transaction log) với các phương tiện đặc tả toán học của RBTV.",
      "trickWord": "Bẫy hình thức biểu diễn: Nhật ký nhị phân là công cụ lưu trữ log, không phải ngôn ngữ biểu diễn",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a",
      "tip": "5 cách biểu diễn điều kiện: Tự nhiên, Thuật giải, Đại số quan hệ, Phụ thuộc hàm, Logic vị từ!"
    }
  },
  {
    "id": "db-c4-t1-010",
    "question": "Ý nghĩa quan trọng nhất của việc xác định \"Tầm ảnh hưởng\" (Affected operations) của một RBTV là gì?",
    "options": [
      "Giúp hệ quản trị CSDL tự động phân bổ dung lượng bộ nhớ RAM lớn hơn cho các bảng có chứa nhiều dữ liệu",
      "Xác định chính xác các thao tác cập nhật nào cần kiểm tra để tối ưu hóa hiệu năng, tránh kiểm tra dư thừa",
      "Cho phép người dùng tùy ý bỏ qua việc kiểm tra khóa chính khi cần nạp dữ liệu hàng loạt vào cơ sở dữ liệu",
      "Đảm bảo rằng mọi câu truy vấn SELECT đều được phân tích cú pháp nhanh hơn nhờ loại bỏ các điều kiện lọc"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục III.1.a: Tầm ảnh hưởng nhằm xác định chính xác thời điểm và thao tác cập nhật nào (Thêm, Xóa, Sửa) cần kiểm tra RBTV đó. Thao tác nào an toàn thì đánh dấu (-), giúp hệ thống bỏ qua kiểm tra, tiết kiệm I/O và tối ưu hiệu năng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ tầm ảnh hưởng liên quan đến việc cấp phát RAM hoặc tối ưu câu lệnh SELECT.",
      "trickWord": "Bẫy ý nghĩa tầm ảnh hưởng: Xác định THỜI ĐIỂM CẦN KIỂM TRA để tối ưu thao tác cập nhật",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a",
      "tip": "Tầm ảnh hưởng = Bản đồ chỉ dẫn: Thao tác nào cần kiểm tra (+), thao tác nào được bỏ qua (-)!"
    }
  },
  {
    "id": "db-c4-t1-011",
    "question": "Trong Bảng Tầm Ảnh Hưởng của một RBTV, ký hiệu dấu trừ (`-`) tại cột \"Thêm\" của một quan hệ $R$ có ý nghĩa gì?",
    "options": [
      "Thao tác thêm vào R sẽ tự động xóa đi một bản ghi tương ứng ở bảng khác nhằm cân bằng kích thước",
      "Thao tác thêm một bộ mới vào quan hệ R bị cấm hoàn toàn bởi hệ thống để bảo đảm an toàn dữ liệu",
      "Thao tác thêm một bộ mới vào quan hệ R luôn luôn an toàn tuyệt đối và không thể vi phạm RBTV này",
      "Thao tác thêm vào R bắt buộc phải kích hoạt kiểm tra có điều kiện dựa trên các thuộc tính của khóa"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục III.1.a (Bảng ký hiệu): Dấu trừ (-) có nghĩa là KHÔNG CẦN KIỂM TRA RBTV. Thao tác đó hoàn toàn an toàn, không có nguy cơ vi phạm ràng buộc đang xét.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh thường nghĩ dấu trừ (-) là \"bị cấm\" hoặc \"bị xóa\".",
      "trickWord": "Bẫy ký hiệu (-): Là KHÔNG CẦN KIỂM TRA (an toàn), không phải là hành động cấm thêm",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a",
      "tip": "Dấu (+) = Bắt buộc kiểm tra; Dấu (-) = Không cần kiểm tra (An toàn tuyệt đối)!"
    }
  },
  {
    "id": "db-c4-t1-012",
    "question": "Xét ràng buộc Khóa ngoại: `SINH_VIEN.maKhoa` tham chiếu đến `KHOA.makhoa`. Tại sao thao tác THÊM một bản ghi mới vào bảng `KHOA` lại có ký hiệu là dấu trừ (`-`)?",
    "options": [
      "Vì thuộc tính makhoa trong bảng KHOA không có ràng buộc duy nhất và được phép nhận giá trị trùng",
      "Vì bảng KHOA là bảng con nên hệ thống tự động kế thừa toàn bộ các ràng buộc từ bảng SINH_VIEN",
      "Vì thao tác thêm vào bảng KHOA luôn tự động chèn thêm một bản ghi sinh viên mặc định tương ứng",
      "Vì việc bổ sung một khoa mới độc lập không bao giờ làm cho bất kỳ sinh viên nào hiện có bị mồ côi"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a & Bảng tầm ảnh hưởng Khóa ngoại: Bảng KHOA là bảng Cha. Khi thêm một khoa mới vào bảng KHOA, không có bất kỳ sinh viên nào bị mất khoa tham chiếu hay mồ côi. Do đó thao tác Thêm ở bảng Cha luôn an toàn tuyệt đối (-).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ bảng nào tham gia vào khóa ngoại thì thao tác Thêm cũng phải kiểm tra.",
      "trickWord": "Bẫy Thêm ở Bảng Cha: Luôn mang dấu (-) vì sinh thêm cha không làm con mồ côi",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Khóa ngoại: Thêm ở Cha = (-); Thêm ở Con = (+)!"
    }
  },
  {
    "id": "db-c4-t1-013",
    "question": "Xét ràng buộc Khóa chính của bảng `SINH_VIEN(maSV, hotenSV, ...)`. Trong Bảng Tầm Ảnh Hưởng, thao tác THÊM một sinh viên mới được đánh dấu ký hiệu gì và vì sao?",
    "options": [
      "Đánh dấu dấu cộng (+) vì cần phải kiểm tra xem mã sinh viên mới thêm có bị trùng lặp với ai hay không",
      "Đánh dấu dấu trừ (-) vì mỗi sinh viên mới luôn có thông tin họ tên riêng biệt không trùng với ai",
      "Đánh dấu kiểm tra có điều kiện +(*) vì chỉ cần kiểm tra khi sinh viên mới chưa có họ tên đầy đủ",
      "Đánh dấu dấu trừ (-) vì hệ thống luôn tự động tăng mã số sinh viên nên không thể xảy ra trùng lặp"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục V.3.a & Mục III.1.a: Ràng buộc khóa chính (mã số sinh viên không trùng) là ràng buộc liên bộ. Khi THÊM một bộ mới, bắt buộc phải kiểm tra (+) xem khóa chính của bộ mới có trùng với bất kỳ bộ nào đã tồn tại trong bảng hay không.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ nếu có auto-increment thì là (-), nhưng về mặt bản chất mô hình quan hệ luôn là (+).",
      "trickWord": "Bẫy Thêm khóa chính: Bắt buộc là (+) để ngăn chặn trùng lặp khóa",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.3.a",
      "tip": "Khóa chính: Thêm = (+); Xóa = (-); Sửa = (+*(khóa))!"
    }
  },
  {
    "id": "db-c4-t1-014",
    "question": "Trong CSDL `QLHANGHOA`, xét ràng buộc: \"Mỗi hóa đơn phải tương ứng với một đơn đặt hàng đã có (`HOA_DON.soDH` tham chiếu `DAT_HANG.soDH`)\". Khi THÊM dữ liệu, bảng nào cần kiểm tra (`+`)?",
    "options": [
      "Bảng DAT_HANG cần kiểm tra (+) vì khi khách đặt hàng thì hóa đơn phải được xuất ngay lập tức tại quầy",
      "Bảng HOA_DON cần kiểm tra (+) vì đơn đặt hàng được tham chiếu bắt buộc phải tồn tại trong bảng DAT_HANG",
      "Cả hai bảng HOA_DON và DAT_HANG đều phải kiểm tra (+) để đối chiếu danh sách các mặt hàng cùng lúc",
      "Cả hai bảng đều không cần kiểm tra (-) vì quan hệ đơn hàng và hóa đơn là mối quan hệ độc lập lỏng lẻo"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a & Section I.1.b: HOA_DON là bảng Con tham chiếu đến bảng Cha DAT_HANG thông qua khóa ngoại soDH. Khi THÊM một hóa đơn mới, bắt buộc phải kiểm tra (+) xem soDH đó đã tồn tại trong DAT_HANG chưa. Bảng DAT_HANG khi thêm mới là (-).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn \"cả hai bảng đều kiểm tra (+)\" mà không phân biệt vai trò bảng Cha vs bảng Con.",
      "trickWord": "Bẫy bảng con trong khóa ngoại: Chỉ có bảng Con (HOA_DON) mới cần kiểm tra (+) khi THÊM",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Thêm vào bảng Con ➔ Phải kiểm tra (+) xem Cha có tồn tại hay không!"
    }
  },
  {
    "id": "db-c4-t1-015",
    "question": "Đối với ràng buộc Miền giá trị của thuộc tính `diem` trong bảng `KET_QUA` ($0 \\le diem \\le 10$), thao tác THÊM một kết quả thi mới có tầm ảnh hưởng như thế nào?",
    "options": [
      "Phải kiểm tra trên cả hai bảng SINH_VIEN và MON_HOC trước khi cho phép chèn điểm vào bảng KET_QUA",
      "Hoàn toàn không cần kiểm tra (-) vì điểm số là thuộc tính số học luôn luôn nhận giá trị dương thực tế",
      "Bắt buộc phải kiểm tra (+) trên bảng KET_QUA để đảm bảo điểm số chèn vào nằm trong đoạn từ 0 đến 10",
      "Chỉ kiểm tra có điều kiện +(*) khi điểm số chèn vào là điểm làm tròn của các bài thi phúc khảo lại"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục V.1.a: Ràng buộc miền giá trị của một thuộc tính trong một bảng đòi hỏi khi THÊM một bộ mới vào bảng đó thì bắt buộc phải kiểm tra (+) giá trị của thuộc tính đó có thuộc miền hợp lệ hay không.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm lẫn sang các bảng khác hoặc nghĩ thao tác thêm là +(*).",
      "trickWord": "Bẫy Miền giá trị khi Thêm: Luôn luôn là (+) trên chính quan hệ đó",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.1.a",
      "tip": "Ràng buộc miền giá trị: Thêm = (+); Xóa = (-); Sửa = (+*(cột_đó))!"
    }
  },
  {
    "id": "db-c4-t1-016",
    "question": "Xét ràng buộc Khóa ngoại: `SINH_VIEN.maKhoa` tham chiếu `KHOA.makhoa`. Tại sao thao tác XÓA một sinh viên khỏi bảng `SINH_VIEN` lại có ký hiệu dấu trừ (`-`)?",
    "options": [
      "Vì thuộc tính maKhoa trong bảng SINH_VIEN không phải là một thành phần cấu thành nên khóa chính",
      "Vì sinh viên là thực thể gốc của hệ thống nên thao tác xóa bản ghi luôn được thực thi vô điều kiện",
      "Vì hệ thống sẽ tự động xóa luôn khoa tương ứng trong bảng KHOA để duy trì tính nhất quán dữ liệu",
      "Vì việc một sinh viên bị xóa đi không bao giờ làm phương hại đến tính hợp lệ của danh mục các khoa"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a: Trong ràng buộc khóa ngoại, SINH_VIEN là bảng Con. Khi xóa một bản ghi con, bảng Cha (KHOA) không bị ảnh hưởng gì cả. Không có bất kỳ ràng buộc tham chiếu nào bị vi phạm khi một đứa con biến mất. Do đó Xóa ở bảng Con luôn là dấu trừ (-).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm giữa Xóa ở bảng Con (an toàn -) và Xóa ở bảng Cha (nguy hiểm +).",
      "trickWord": "Bẫy Xóa ở Bảng Con: Luôn luôn là (-) vì không ảnh hưởng đến sự tồn tại của Cha",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Xóa Con = (-); Xóa Cha = (+)! Hãy nhớ câu thần chú này để không bao giờ mất điểm."
    }
  },
  {
    "id": "db-c4-t1-017",
    "question": "Cũng trong ràng buộc Khóa ngoại trên, thao tác XÓA một khoa khỏi bảng `KHOA` được đánh dấu ký hiệu gì trong Bảng Tầm Ảnh Hưởng và vì sao?",
    "options": [
      "Ký hiệu dấu cộng (+) vì nếu khoa đó đang có sinh viên theo học thì việc xóa khoa sẽ gây vi phạm tham chiếu",
      "Ký hiệu dấu trừ (-) vì xóa khoa thì các sinh viên thuộc khoa đó sẽ tự động chuyển sang trạng thái tốt nghiệp",
      "Ký hiệu dấu trừ (-) vì bảng KHOA là bảng cha độc lập, việc xóa bản ghi cha không bao giờ bị hệ thống từ chối",
      "Ký hiệu kiểm tra có điều kiện +(*) vì chỉ cần kiểm tra khi số lượng cán bộ soCB của khoa đó lớn hơn không"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a: KHOA là bảng Cha. Nếu xóa một khoa mà khoa đó đang có sinh viên tham chiếu tới thì các sinh viên đó sẽ bị \"mồ côi\" (vi phạm khóa ngoại). Do đó thao tác Xóa trên bảng Cha bắt buộc phải kiểm tra (+).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ bảng Cha độc lập nên xóa không cần kiểm tra.",
      "trickWord": "Bẫy Xóa ở Bảng Cha: Bắt buộc là (+) để bảo vệ các bản ghi con không bị mồ côi",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Xóa Cha ➔ Phải kiểm tra (+) xem có Con nào đang bám vào không (nếu có ➔ Reject)!"
    }
  },
  {
    "id": "db-c4-t1-018",
    "question": "Đối với ràng buộc Khóa chính trên quan hệ $R$, thao tác XÓA một bộ dữ liệu bất kỳ khỏi quan hệ $R$ có cần phải kiểm tra tính duy nhất của khóa chính hay không?",
    "options": [
      "Bắt buộc phải kiểm tra (+) vì việc bớt đi một bộ có thể làm xuất hiện hai bộ khác có khóa trùng nhau",
      "Hoàn toàn không cần kiểm tra (-) vì tập hợp các khóa còn lại sau khi bớt đi một bộ vẫn luôn duy nhất",
      "Cần kiểm tra có điều kiện +(*) nếu bộ bị xóa là bộ dữ liệu đầu tiên được thêm vào quan hệ ban đầu",
      "Bắt buộc phải kiểm tra (+) để sắp xếp lại toàn bộ chỉ mục vật lý của khóa chính trên ổ đĩa từ tính"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục V.3.a & III.1.a: Nếu một tập hợp các khóa đang phân biệt nhau, việc loại bỏ đi một phần tử không bao giờ làm cho các phần tử còn lại trùng nhau được. Do đó thao tác XÓA đối với ràng buộc khóa chính luôn luôn an toàn (-).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ khóa chính quan trọng nên Thêm/Sửa/Xóa đều phải kiểm tra (+).",
      "trickWord": "Bẫy Xóa đối với Khóa chính: Luôn là (-) vì bớt đi một khóa không thể sinh ra trùng lặp",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.3.a",
      "tip": "Ràng buộc Khóa chính trên 1 bảng: Thêm = (+); XÓA = (-); Sửa = (+*(khóa))!"
    }
  },
  {
    "id": "db-c4-t1-019",
    "question": "Trong CSDL `QLHANGHOA`, xét ràng buộc: \"Mỗi hóa đơn phải có ít nhất một mặt hàng chi tiết trong `CTIET_HD`\". Khi XÓA dữ liệu, thao tác trên bảng nào cần kiểm tra (`+`)?",
    "options": [
      "Thao tác XÓA trên bảng HOA_DON cần kiểm tra (+) vì xóa hóa đơn sẽ làm mất đi đơn đặt hàng gốc ban đầu",
      "Thao tác XÓA trên CTIET_HD không cần kiểm tra (-) vì hóa đơn không có hàng vẫn là một hóa đơn hợp lệ",
      "Thao tác XÓA trên CTIET_HD cần kiểm tra (+) vì việc xóa có thể làm hóa đơn tương ứng không còn mặt hàng nào",
      "Cả hai bảng đều không cần kiểm tra (-) vì số lượng mặt hàng trong hóa đơn chỉ được xét khi tạo đơn hàng"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục VI.2.a (Ví dụ 9): Ràng buộc \"Mỗi hóa đơn phải có ít nhất một mặt hàng\" là ràng buộc liên bộ liên quan hệ. Khi XÓA một dòng trong CTIET_HD, nếu đó là mặt hàng duy nhất của hóa đơn đó thì hóa đơn sẽ bị rỗng, vi phạm ràng buộc. Do đó XÓA trên CTIET_HD cần kiểm tra (+). Ngược lại XÓA trên HOA_DON là (-).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn giữa bảng HOA_DON và CTIET_HD khi xét điều kiện \"ít nhất 1\".",
      "trickWord": "Bẫy ràng buộc tồn tại ít nhất 1: Thao tác XÓA trên bảng con CTIET_HD là (+)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.2.a",
      "tip": "Ràng buộc \"ít nhất 1\": Xóa phần tử con có nguy cơ làm số lượng về 0 ➔ Xóa Con là (+)!"
    }
  },
  {
    "id": "db-c4-t1-020",
    "question": "Xét ràng buộc: \"Tổng số tiết lý thuyết và thực hành của mỗi môn học phải lớn hơn 0\" (`soTietLT + soTietTH > 0`). Thao tác XÓA một môn học có tầm ảnh hưởng như thế nào đối với ràng buộc này?",
    "options": [
      "Đánh dấu dấu cộng (+) vì hệ thống cần kiểm tra xem môn học bị xóa có sinh viên nào đăng ký học hay chưa",
      "Đánh dấu dấu cộng (+) vì việc xóa có thể làm tổng số tiết học của toàn trường bị giảm xuống dưới mức chuẩn",
      "Đánh dấu kiểm tra có điều kiện +(*) vì chỉ cần kiểm tra khi môn học bị xóa có số tiết thực hành bằng 0",
      "Đánh dấu dấu trừ (-) vì việc xóa bỏ một môn học hoàn toàn không thể làm cho các môn học còn lại vi phạm"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục V.2.a: Ràng buộc soTietLT + soTietTH > 0 là ràng buộc liên thuộc tính trong cùng một bộ của bảng MON_HOC. Khi XÓA một môn học, dòng đó bị loại bỏ hoàn toàn, không thể làm cho bất kỳ dòng nào khác bị vi phạm điều kiện này. Do đó thao tác Xóa là dấu trừ (-).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh liên tưởng đến việc sinh viên đã đăng ký môn học (đó là ràng buộc khóa ngoại khác, không phải ràng buộc đang xét).",
      "trickWord": "Bẫy phạm vi ràng buộc: Đang xét soTiet > 0 chứ không xét khóa ngoại môn học",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.2.a",
      "tip": "Xét tầm ảnh hưởng của ràng buộc nào thì CHỈ ĐƯỢC nhìn vào biểu thức của ràng buộc đó!"
    }
  },
  {
    "id": "db-c4-t1-021",
    "question": "Ký hiệu `+(*)` hoặc `-(*)` tại cột \"Sửa\" trong Bảng Tầm Ảnh Hưởng của một RBTV mang ý nghĩa học thuật chuẩn xác là gì?",
    "options": [
      "Chỉ cần kiểm tra khi thuộc tính được sửa có tham gia trực tiếp vào biểu thức điều kiện của RBTV đó",
      "Bắt buộc phải kiểm tra toàn bộ tất cả các thuộc tính của dòng dữ liệu bất kể cột nào bị thay đổi",
      "Hệ thống tự động từ chối mọi thao tác sửa đổi dữ liệu trên bảng để đảm bảo an toàn tuyệt đối nhất",
      "Thao tác sửa đổi chỉ được chấp nhận nếu người dùng có đặc quyền tối cao của người quản trị hệ thống"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục III.1.a (Bảng ký hiệu): Ký hiệu +(*) hoặc -(*) biểu thị kiểm tra có điều kiện: chỉ kiểm tra khi thuộc tính được sửa có liên quan trực tiếp đến biểu thức của RBTV. Nếu sửa các thuộc tính khác không liên quan thì không cần kiểm tra.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ dấu sao nghĩa là wildcard (tất cả thuộc tính) nên chọn nhầm kiểm tra mọi thuộc tính.",
      "trickWord": "Bẫy ký hiệu +(*): Kiểm tra CÓ ĐIỀU KIỆN (chỉ khi sửa thuộc tính tham gia biểu thức)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a",
      "tip": "+(*) = Có điều kiện! Sửa thuộc tính trong luật ➔ Kiểm tra; Sửa thuộc tính ngoài luật ➔ Bỏ qua!"
    }
  },
  {
    "id": "db-c4-t1-022",
    "question": "Trong bảng `SINH_VIEN(maSV, hotenSV, nam, ngSinh, maKhoa)`, xét ràng buộc khóa chính trên `maSV`. Nếu người dùng thực hiện lệnh UPDATE thay đổi `hotenSV`, DBMS có cần kiểm tra khóa chính không?",
    "options": [
      "Bắt buộc phải kiểm tra vì bất kỳ thao tác sửa đổi nào trên bảng đều có thể làm thay đổi khóa chính",
      "Hoàn toàn không cần kiểm tra vì thuộc tính hotenSV không tham gia vào cấu trúc khóa chính của bảng",
      "Phải kiểm tra xem họ tên mới sửa có bị trùng lặp với họ tên của sinh viên nào khác trong khoa hay không",
      "Chỉ kiểm tra nếu sinh viên đó đang có kết quả thi đạt điểm xuất sắc trong bảng điểm chi tiết môn học"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục V.3.a & III.1.a: Tầm ảnh hưởng của ràng buộc khóa chính trên SINH_VIEN đối với thao tác Sửa là +*(maSV). Nghĩa là chỉ kiểm tra khi sửa thuộc tính maSV. Khi sửa hotenSV, thuộc tính này không tham gia vào khóa chính nên DBMS hoàn toàn không cần kiểm tra.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ lệnh UPDATE nào trên bảng cũng phải kích hoạt kiểm tra khóa chính.",
      "trickWord": "Bẫy sửa thuộc tính không khóa: Sửa hotenSV không ảnh hưởng đến tính duy nhất của maSV",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.3.a",
      "tip": "Khóa chính chỉ kiểm tra khi SỬA CỘT KHÓA CHÍNH (+*(PK))!"
    }
  },
  {
    "id": "db-c4-t1-023",
    "question": "Xét ràng buộc Khóa ngoại: `SINH_VIEN.maKhoa` tham chiếu `KHOA.makhoa`. Thao tác SỬA thuộc tính nào sau đây KHÔNG LÀM KÍCH HOẠT kiểm tra ràng buộc khóa ngoại này?",
    "options": [
      "Sửa thuộc tính maKhoa của một sinh viên trong bảng SINH_VIEN vì mã khoa mới sửa có thể không tồn tại",
      "Sửa thuộc tính makhoa trong bảng KHOA thành một mã mới vì các sinh viên khoa cũ có nguy cơ bị mồ côi",
      "Sửa thuộc tính soCB (tổng số cán bộ) của một khoa trong bảng KHOA vì cột này không liên quan đến khóa",
      "Cả thao tác sửa makhoa ở bảng KHOA và sửa maKhoa ở bảng SINH_VIEN đều làm kích hoạt kiểm tra khóa ngoại"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a: Ràng buộc khóa ngoại chỉ liên quan đến maKhoa và makhoa. Sửa soCB trong bảng KHOA hoàn toàn không ảnh hưởng đến tính toàn vẹn tham chiếu giữa sinh viên và khoa, do đó không kích hoạt kiểm tra.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ sửa bất kỳ cột nào ở bảng Cha cũng kích hoạt kiểm tra.",
      "trickWord": "Bẫy thuộc tính không liên quan: Sửa soCB là (-), không kiểm tra khóa ngoại",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Chỉ có sửa CỘT THAM CHIẾU (makhoa, maKhoa) mới cần kiểm tra (+*)!"
    }
  },
  {
    "id": "db-c4-t1-024",
    "question": "Trong CSDL `QLHANGHOA`, xét ràng buộc: `HOA_DON.ngayHD >= DAT_HANG.ngayDH`. Bảng Tầm Ảnh Hưởng của thao tác SỬA trên hai bảng này được ghi nhận như thế nào?",
    "options": [
      "HOA_DON: dấu cộng (+); DAT_HANG: dấu trừ (-) vì chỉ có ngày hóa đơn mới có khả năng bị lập sai thực tế",
      "HOA_DON: +*(trigiaHD); DAT_HANG: +*(soLuongDat) vì giá trị đơn hàng quyết định ngày phát hành hóa đơn",
      "Cả hai bảng đều ghi nhận dấu trừ (-) vì ngày tháng sau khi đã ghi nhận thì không thể chỉnh sửa được",
      "HOA_DON: +*(ngayHD, soDH); DAT_HANG: +*(ngayDH, soDH) vì sửa ngày hoặc mã đơn hàng đều ảnh hưởng đối chiếu"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục VI.3.a (Ví dụ 10): Ràng buộc liên thuộc tính liên quan hệ này liên kết HOA_DON và DAT_HANG qua thuộc tính soDH và so sánh ngày. Nếu sửa ngày (ngayHD, ngayDH) hoặc sửa mã liên kết (soDH) ở một trong hai bảng thì đều phải kiểm tra lại điều kiện so sánh ngày.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh chỉ nhớ thuộc tính ngày mà quên mất thuộc tính liên kết soDH cũng quyết định việc ghép cặp.",
      "trickWord": "Bẫy sửa thuộc tính liên kết: Cần kiểm tra cả thuộc tính điều kiện (ngày) VÀ thuộc tính liên kết (soDH)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.3.a",
      "tip": "Sửa liên quan hệ ➔ Phải kiểm tra cả CỘT SO SÁNH lẫn CỘT DÙNG ĐỂ JOIN (+*(ngày, soDH))!"
    }
  },
  {
    "id": "db-c4-t1-025",
    "question": "Xét quan hệ `NHANVIEN(maNV, luong, tamUng, conLai)` với ràng buộc `conLai = luong - tamUng`. Thao tác SỬA thuộc tính nào đòi hỏi hệ thống phải kiểm tra lại tính đúng đắn của công thức này?",
    "options": [
      "Khi sửa bất kỳ thuộc tính nào trong ba thuộc tính: luong, tamUng hoặc conLai thì đều phải kiểm tra lại",
      "Chỉ kiểm tra khi sửa thuộc tính conLai, còn việc sửa luong hoặc tamUng thì không làm ảnh hưởng gì",
      "Chỉ kiểm tra khi sửa thuộc tính maNV vì mã nhân viên là định danh quyết định mức lương của nhân sự",
      "Hoàn toàn không cần kiểm tra vì hệ quản trị CSDL luôn tự động tính toán lại conLai mà không cần báo"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục V.2.a: Công thức liên thuộc tính liên kết cả 3 trường: conLai, luong và tamUng. Bất kỳ sự thay đổi nào trên 1 trong 3 trường này đều có thể phá vỡ sự cân bằng của đẳng thức, do đó tầm ảnh hưởng là +*(luong, tamUng, conLai).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ chỉ khi sửa vế trái (conLai) mới cần kiểm tra, quên mất sửa vế phải cũng làm sai lệch.",
      "trickWord": "Bẫy đẳng thức liên thuộc tính: Sửa bất kỳ biến nào trong phương trình đều phải kiểm tra",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.2.a",
      "tip": "Đẳng thức A = B - C ➔ Sửa A, sửa B hay sửa C đều phải kiểm tra lại (+*(A, B, C))!"
    }
  },
  {
    "id": "db-c4-t1-026",
    "question": "Trong quan hệ `NHANVIEN(maNV, tenNV, luong, tamUng, conLai)`, xét quy tắc: \"Số tiền tạm ứng không được vượt quá số tiền lương (`tamUng <= luong`)\". Đây là loại RBTV nào?",
    "options": [
      "RBTV về miền giá trị vì nó quy định phạm vi giá trị bằng tiền hợp lệ cho thuộc tính tamUng của nhân viên",
      "RBTV liên thuộc tính trong cùng một quan hệ vì nó ràng buộc giữa hai cột khác nhau trên cùng một bộ",
      "RBTV liên bộ vì cần phải so sánh tiền tạm ứng của nhân viên này với tiền lương của các nhân viên khác",
      "RBTV phụ thuộc tồn tại vì sự tồn tại của khoản tạm ứng bắt buộc phải phụ thuộc vào việc có lương hay không"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục V.1.a (Lưu ý bẫy) & V.2.a: Giáo trình nhấn mạnh: \"Trong quan hệ NHANVIEN(maNV, tenNV, luong, tamUng, conLai), điều kiện tamUng <= luong là VÍ DỤ SAI của miền giá trị, thực chất đây là RBTV liên thuộc tính!\". Vì nó so sánh 2 thuộc tính trên cùng một bộ.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Đây là cạm bẫy kinh điển số 1 của Chương IV: thí sinh nhìn thấy so sánh số tiền là nghĩ ngay đến miền giá trị.",
      "trickWord": "Bẫy kinh điển tamUng <= luong: Là LIÊN THUỘC TÍNH, tuyệt đối KHÔNG PHẢI Miền giá trị",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.1.a (Lưu ý bẫy)",
      "tip": "Miền giá trị = 1 thuộc tính so với HẰNG SỐ (diem >= 0); 2 thuộc tính so với nhau = LIÊN THUỘC TÍNH!"
    }
  },
  {
    "id": "db-c4-t1-027",
    "question": "Ràng buộc: \"Mã số sinh viên `maSV` trong quan hệ `SINH_VIEN` phải là duy nhất, không có hai sinh viên nào trùng mã\". Theo phân loại học thuật chuẩn, đây là loại RBTV gì?",
    "options": [
      "RBTV liên thuộc tính vì nó liên kết mã sinh viên với toàn bộ các thuộc tính thông tin cá nhân còn lại",
      "RBTV về miền giá trị vì nó quy định mỗi mã sinh viên chỉ được phép thuộc vào một tập hợp số nguyên nhất định",
      "RBTV liên bộ trong một quan hệ vì việc kiểm tra tính duy nhất đòi hỏi phải đối chiếu giữa các bộ với nhau",
      "RBTV đa quan hệ vì mã sinh viên này còn được sử dụng để liên kết với các bảng kết quả thi và đề tài"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục V.3.a (Ví dụ 6): Ràng buộc C1 (mã số sinh viên không trùng) thuộc loại RBTV liên bộ trong một quan hệ. Biểu thức: với mọi t1, t2 thuộc SINH_VIEN, nếu t1.maSV = t2.maSV thì t1 = t2. Để kiểm tra tính duy nhất, phải so sánh giữa các bộ khác nhau trong cùng bảng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ khóa chính là ràng buộc miền giá trị hoặc chỉ gọi chung là ràng buộc thực thể mà quên phân loại bản chất là liên bộ.",
      "trickWord": "Bẫy bản chất Khóa chính: Là RBTV LIÊN BỘ (Inter-tuple) vì so sánh giữa các dòng",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.3.a",
      "tip": "Khóa chính = So sánh giữa bộ này với bộ khác ➔ Ràng buộc LIÊN BỘ (Inter-tuple)!"
    }
  },
  {
    "id": "db-c4-t1-028",
    "question": "Trong bảng `KET_QUA(maSV, maMH, lanThi, diem)`, điều kiện: \"Điểm thi của sinh viên phải từ 0 đến 10 với bước nhảy 0.5\" được xếp vào loại RBTV nào?",
    "options": [
      "RBTV phụ thuộc tồn tại vì điểm thi chỉ tồn tại khi sinh viên đã hoàn thành đóng học phí cho môn học",
      "RBTV liên thuộc tính vì điểm thi phải phụ thuộc vào môn học maMH và số lần thi lanThi của sinh viên đó",
      "RBTV liên bộ vì hệ thống cần duyệt qua tất cả các điểm thi của sinh viên để xác định điểm trung bình",
      "RBTV về miền giá trị vì nó chỉ xét phạm vi và quy cách giá trị hợp lệ của duy nhất một thuộc tính diem"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục V.1.a (Ví dụ 4): Trong LĐQH KetQua, miền giá trị Diem = 0..10 với độ chính xác đơn 0.5 điểm: ((t.Diem * 4) mod 2 = 0, với mọi t thuộc KetQua). Đây là RBTV về miền giá trị (Domain constraint) vì chỉ quy định phạm vi hợp lệ của một thuộc tính đơn lẻ.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh thấy công thức toán modulo phức tạp tưởng là liên thuộc tính.",
      "trickWord": "Bẫy công thức bước nhảy điểm: Dù có mod 2 thì vẫn là MIỀN GIÁ TRỊ của 1 thuộc tính diem",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.1.a",
      "tip": "Chỉ có 1 biến thuộc tính trong công thức (t.Diem) ➔ Ràng buộc MIỀN GIÁ TRỊ!"
    }
  },
  {
    "id": "db-c4-t1-029",
    "question": "Trong lược đồ `HOADON(soHD, ngayHD, ngayXuat, triGia)`, điều kiện: \"Hàng chỉ được xuất kho sau khi hoặc cùng ngày lập hóa đơn (`ngayHD <= ngayXuat`)\". Đây là:",
    "options": [
      "RBTV liên thuộc tính trong một quan hệ vì so sánh giá trị giữa hai cột thời gian trên cùng một dòng hóa đơn",
      "RBTV về miền giá trị vì quy định ngày xuất kho phải nằm trong khoảng thời gian của thế kỷ hai mươi mốt",
      "RBTV liên bộ vì cần đối chiếu ngày lập hóa đơn này với ngày xuất kho của các hóa đơn bán hàng trước đó",
      "RBTV liên quan hệ vì việc xuất kho liên quan đến thủ kho còn việc lập hóa đơn do nhân viên kế toán làm"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục V.2.a (Ví dụ 5): Ràng buộc hd.ngayHD <= hd.ngayXuat là RBTV liên thuộc tính (Inter-attribute constraint) vì thể hiện mối liên hệ giữa hai thuộc tính trong cùng một quan hệ HOADON.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ liên quan đến xuất kho và hóa đơn là phải có nhiều bảng, nhưng ở đây cả ngayHD và ngayXuat đều nằm trong 1 bảng HOADON.",
      "trickWord": "Bẫy ngữ cảnh nghiệp vụ: Hai cột cùng nằm trong bảng HOADON nên là LIÊN THUỘC TÍNH 1 bảng",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.2.a",
      "tip": "Nhìn vào vị trí lưu trữ thuộc tính: Cùng 1 bảng ➔ Liên thuộc tính; Khác bảng ➔ Liên thuộc tính liên quan hệ!"
    }
  },
  {
    "id": "db-c4-t1-030",
    "question": "Khi thiết kế CSDL, nếu trong cùng một bảng có thuộc tính $A$ luôn luôn tính toán được từ các thuộc tính khác ($A = B + C$), giải pháp thiết kế chuẩn mực nhất là gì?",
    "options": [
      "Bắt buộc giữ lại thuộc tính A và tạo thêm một bảng phụ riêng biệt để lưu trữ các giá trị lịch sử của A",
      "Loại bỏ thuộc tính A khỏi bảng để tránh dư thừa dữ liệu và loại trừ nguy cơ vi phạm ràng buộc liên thuộc tính",
      "Nhân đôi thuộc tính A sang tất cả các bảng khác trong CSDL để giúp việc truy vấn dữ liệu đạt tốc độ tối đa",
      "Chuyển toàn bộ các thuộc tính B và C sang kiểu chuỗi ký tự để hệ thống không tự động thực hiện phép cộng"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục V.2.a (Lưu ý thiết kế): Nếu thuộc tính A tính được từ các thuộc tính khác trong cùng bảng, ta có thể loại bỏ A khỏi bảng để tránh dư thừa dữ liệu và không phải duy trì ràng buộc liên thuộc tính.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ nên giữ lại cột để truy vấn nhanh hơn mà quên mất nguyên lý chuẩn hóa tránh dư thừa trong thiết kế chuẩn.",
      "trickWord": "Bẫy thuộc tính suy diễn trong 1 bảng: Giải pháp chuẩn là LOẠI BỎ CỘT để tránh dư thừa",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.2.a",
      "tip": "Thuộc tính tính được từ các cột cùng bảng ➔ Nên loại bỏ khỏi lược đồ quan hệ!"
    }
  },
  {
    "id": "db-c4-t1-031",
    "question": "Dấu hiệu nhận biết thứ nhất của Ràng buộc phụ thuộc tồn tại (Khóa ngoại) giữa hai lược đồ quan hệ $R_1$ và $R_2$ theo giáo trình là gì?",
    "options": [
      "Toàn bộ các thuộc tính của quan hệ R1 đều phải xuất hiện đầy đủ bên trong danh sách thuộc tính của bảng R2",
      "Khóa chính K1 của quan hệ R1 phải có số lượng thuộc tính nhiều hơn khóa chính K2 của quan hệ R2 ít nhất một cột",
      "Khóa chính K1 của quan hệ R1 là một tập con thực sự hoặc bằng khóa chính phức hợp K2 của quan hệ R2 (K1 ⊆ K2)",
      "Kiểu dữ liệu của khóa chính K1 bắt buộc phải là kiểu chuỗi ký tự trong khi khóa K2 phải là kiểu số nguyên lớn"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a: Dấu hiệu (1): Nếu K1 ⊆ K2 (khóa chính K1 của R1 là tập con của khóa chính phức hợp K2 của R2) ➔ Có phụ thuộc tồn tại của R2 vào R1.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh chỉ quen với việc khóa ngoại là một cột thông thường mà không biết dấu hiệu khóa con nằm trong khóa phức hợp.",
      "trickWord": "Bẫy Dấu hiệu 1: K1 ⊆ K2 (Khóa chính bảng cha nằm bên trong khóa chính phức hợp bảng con)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Dấu hiệu 1: K1 ⊆ K2 (Khóa trong khóa); Dấu hiệu 2: K1 ⊆ R2 (Khóa trong danh sách thuộc tính thường)!"
    }
  },
  {
    "id": "db-c4-t1-032",
    "question": "Cho hai quan hệ `SINH_VIEN(maSV, hotenSV, ...)` có khóa chính `maSV` và `KET_QUA(maSV, maMH, lanThi, diem)` có khóa chính `(maSV, maMH, lanThi)`. Đây là minh họa chuẩn xác cho:",
    "options": [
      "Ràng buộc chu trình đồ thị vì sinh viên có thể thi nhiều môn và một môn học có nhiều sinh viên dự thi",
      "Dấu hiệu K1 ⊆ R2 của phụ thuộc tồn tại, trong đó maSV chỉ đóng vai trò là một thuộc tính mô tả bình thường",
      "Ràng buộc liên thuộc tính trong cùng một bảng vì cả hai quan hệ đều chứa thuộc tính mang tên gọi là maSV",
      "Dấu hiệu K1 ⊆ K2 của phụ thuộc tồn tại, trong đó sự tồn tại của KET_QUA phụ thuộc vào sự tồn tại của SINH_VIEN"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a: Khóa chính K1 = {maSV} của SINH_VIEN là tập con của khóa chính phức hợp K2 = {maSV, maMH, lanThi} của KET_QUA (K1 ⊆ K2). Đây chính là minh họa cho Dấu hiệu (1) của phụ thuộc tồn tại.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm sang dấu hiệu 2 hoặc nhầm thành chu trình vì thấy có nhiều môn học.",
      "trickWord": "Bẫy Dấu hiệu K1 ⊆ K2: maSV vừa là PK của cha vừa là thành phần PK của con",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Nếu khóa ngoại tham gia vào khóa chính của bảng con ➔ Đó là Dấu hiệu 1 (K1 ⊆ K2)!"
    }
  },
  {
    "id": "db-c4-t1-033",
    "question": "Dấu hiệu nhận biết thứ hai của Ràng buộc phụ thuộc tồn tại ($K_1 \\subseteq R_2$) thể hiện cấu trúc nào sau đây?",
    "options": [
      "Khóa chính K1 của R1 xuất hiện như một thuộc tính thông thường không thuộc khóa chính trong lược đồ R2",
      "Khóa chính K1 của R1 bắt buộc phải trùng khớp hoàn toàn với toàn bộ danh sách các thuộc tính của bảng R2",
      "Tất cả các thuộc tính của R2 đều tham gia vào việc cấu thành nên một khóa ngoại tham chiếu đến bảng R1",
      "Bảng R2 không có khóa chính riêng mà phải mượn toàn bộ khóa chính K1 của R1 để làm khóa chính duy nhất"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a: Dấu hiệu (2): Nếu K1 ⊆ R2 (khóa K1 xuất hiện như một thuộc tính thông thường trong R2) ➔ Có phụ thuộc tồn tại của R2 vào R1; K1 gọi là khóa ngoại của R2.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm K1 ⊆ R2 nghĩa là R2 mượn toàn bộ khóa của R1 làm khóa chính.",
      "trickWord": "Bẫy Dấu hiệu 2: K1 xuất hiện như một THUỘC TÍNH THÔNG THƯỜNG trong R2",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "K1 ⊆ R2: Khóa ngoại đứng như 1 cột bình thường trong bảng con (ví dụ maKhoa trong SINH_VIEN)!"
    }
  },
  {
    "id": "db-c4-t1-034",
    "question": "Trong CSDL `HSSINHVIEN`, quan hệ giữa `SINH_VIEN(..., maKhoa)` và `KHOA(makhoa, ...)` là minh họa cho:",
    "options": [
      "Dấu hiệu K1 ⊆ K2, trong đó makhoa là thành phần nằm bên trong khóa chính của bảng sinh viên SINH_VIEN",
      "Dấu hiệu K1 ⊆ R2, trong đó makhoa của bảng KHOA xuất hiện như thuộc tính thông thường trong SINH_VIEN",
      "Ràng buộc liên bộ trong một quan hệ vì mỗi sinh viên chỉ được phép đăng ký học tại một khoa duy nhất",
      "Ràng buộc chu trình vì khoa quản lý sinh viên và sinh viên có thể tham gia vào ban chủ nhiệm của khoa"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a: Khóa chính của KHOA là makhoa. Trong SINH_VIEN, khóa chính là maSV, còn maKhoa chỉ là một thuộc tính thông thường. Do đó K1 ⊆ R2 (Dấu hiệu 2).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm giữa Dấu hiệu 1 và Dấu hiệu 2.",
      "trickWord": "Bẫy phân biệt 2 dấu hiệu: maKhoa không nằm trong khóa chính SINH_VIEN nên là K1 ⊆ R2",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "maKhoa là thuộc tính thường của SINH_VIEN ➔ Dấu hiệu 2 (K1 ⊆ R2)!"
    }
  },
  {
    "id": "db-c4-t1-035",
    "question": "Trong mối quan hệ Khóa ngoại giữa bảng Cha $P$ và bảng Con $C$ ($C.fk \\rightarrow P.pk$), thứ tự chèn (INSERT) và xóa (DELETE) an toàn không gây lỗi là:",
    "options": [
      "Thứ tự chèn và xóa giữa bảng Cha và bảng Con là hoàn toàn tùy ý vì hệ quản trị CSDL luôn tự động sắp xếp lại các thao tác",
      "Khi chèn dữ liệu phải chèn bảng Con trước rồi chèn bảng Cha sau; khi xóa dữ liệu phải xóa bảng Cha trước rồi xóa Con sau",
      "Khi chèn dữ liệu phải chèn bảng Cha trước rồi chèn bảng Con sau; khi xóa dữ liệu phải xóa bảng Con trước rồi xóa Cha sau",
      "Luôn luôn phải chèn bảng Con trước để kiểm tra dữ liệu, sau đó hệ thống sẽ tự động sinh ra bản ghi tương ứng ở bảng Cha"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a & Bảng tầm ảnh hưởng: Chèn: Phải chèn Cha trước để con có đối tượng tham chiếu hợp lệ (nếu chèn con trước ➔ lỗi FK violation). Xóa: Phải xóa Con trước để khi xóa Cha không gây mồ côi (nếu xóa Cha trước ➔ lỗi FK restrict violation).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay bị nhầm lẫn thứ tự đảo chiều giữa thao tác chèn và xóa.",
      "trickWord": "Bẫy thứ tự thao tác: Chèn Cha trước - Con sau; Xóa Con trước - Cha sau",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Quy tắc sinh tử: Cha sinh trước Con, Con chết trước Cha!"
    }
  },
  {
    "id": "db-c4-t1-036",
    "question": "Khi biểu diễn một quy tắc có dạng \"Với mọi bộ trong quan hệ $R$, nếu thỏa mãn điều kiện $P$ thì phải thỏa mãn $Q$\", cấu trúc logic vị từ chuẩn xác là:",
    "options": [
      "∀t ∈ R, (P(t) ∨ ¬Q(t)) vì đây là biểu thức tương đương với phép tuyển nghịch đảo của mệnh đề",
      "∀t ∈ R, (P(t) ∧ Q(t)) vì tất cả các bộ trong bảng đều bắt buộc phải thỏa mãn đồng thời P và Q",
      "∃t ∈ R, (P(t) → Q(t)) vì chỉ cần có ít nhất một bộ thỏa mãn điều kiện là RBTV có hiệu lực",
      "∀t ∈ R, (P(t) → Q(t)) vì lượng từ với mọi bắt buộc phải luôn luôn đi cùng phép kéo theo"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục III.1.a & Section 0: Trong Logic vị từ toán học, quy tắc tổng quát \"Nếu P thì Q\" trên mọi phần tử luôn được biểu diễn bằng: ∀t ∈ R, (P(t) → Q(t)). Nếu dùng phép hội (∧) thì bắt buộc MỌI bộ đều phải thỏa mãn P, điều này sai hoàn toàn về mặt ngữ nghĩa.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người hay nhầm dùng phép hội (∧) thay vì phép kéo theo (→) khi viết lượng từ ∀.",
      "trickWord": "Bẫy Logic ∀: Lượng từ Với mọi (∀) luôn đi kèm phép KÉO THEO (→)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a",
      "tip": "Nhớ nguyên lý logic: ∀ đi với → (kéo theo); ∃ đi với ∧ (hội)!"
    }
  },
  {
    "id": "db-c4-t1-037",
    "question": "Tại sao việc sử dụng phép hội ($\\land$) thay vì phép kéo theo ($\\rightarrow$) trong biểu thức $\\forall t \\in R, (P(t) \\land Q(t))$ lại là một SAI LẦM nghiêm trọng?",
    "options": [
      "Vì nó đòi hỏi mọi bộ trong bảng đều phải thỏa tiền đề P(t), làm cho các bộ không thỏa P(t) bị quy là vi phạm",
      "Vì phép hội không có tính chất giao hoán nên hệ thống không thể tối ưu hóa cây truy vấn logic của mệnh đề",
      "Vì trong đại số quan hệ không tồn tại phép toán nào tương ứng với phép hội logic giữa hai vị từ thuộc tính",
      "Vì phép hội chỉ được phép sử dụng khi biểu diễn các ràng buộc toàn vẹn có bối cảnh từ ba quan hệ trở lên"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục III.1.a & Section 0: Trong mệnh đề \"nếu sinh viên là Nữ thì không đi nghĩa vụ quân sự\", nếu viết ∀t, (Nu(t) ∧ KhongNVQS(t)) thì hệ thống sẽ bắt buộc TẤT CẢ sinh viên đều phải là Nữ (khiến sinh viên Nam bị coi là vi phạm!). Phải viết: ∀t, (Nu(t) → KhongNVQS(t)).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ phép hội là liên kết hai điều kiện đúng mà không nhận ra nó biến điều kiện lọc thành điều kiện bắt buộc.",
      "trickWord": "Bẫy sai lầm phép hội: Bắt buộc toàn bộ các dòng phải thỏa mãn tiền đề P(t)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a",
      "tip": "Đừng bao giờ dùng (P ∧ Q) sau ∀ nếu P chỉ là điều kiện lọc đối tượng!"
    }
  },
  {
    "id": "db-c4-t1-038",
    "question": "Khi biểu diễn ràng buộc có lượng từ tồn tại $\\exists$ (\"Với mỗi sinh viên $s$, tồn tại khoa $k$ sao cho...\"), cấu trúc logic vị từ chuẩn xác là:",
    "options": [
      "∀s ∈ SINH_VIEN, ∃k ∈ KHOA → (s.maKhoa = k.makhoa) (dùng phép kéo theo sau tồn tại)",
      "∀s ∈ SINH_VIEN, ∃k ∈ KHOA ∧ (s.maKhoa = k.makhoa) (lượng từ tồn tại đi cùng phép hội)",
      "∃s ∈ SINH_VIEN, ∀k ∈ KHOA ∧ (s.maKhoa = k.makhoa) (đảo vị trí lượng từ tồn tại lên đầu)",
      "∀s ∈ SINH_VIEN, ∀k ∈ KHOA → (s.maKhoa = k.makhoa) (dùng lượng từ với mọi cho cả hai)"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a & Section 0: Lượng từ tồn tại ∃ luôn đi kèm phép hội ∧: ∀s ∈ SINH_VIEN, ∃k ∈ KHOA: (s.maKhoa = k.makhoa). Nếu dùng phép kéo theo sau ∃, chỉ cần chọn một bản ghi k làm tiền đề sai thì mệnh đề sẽ luôn đúng chân lý (vacuously true) dù không hề tồn tại khoa thực sự!",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh quen tay đặt dấu kéo theo (→) sau lượng từ tồn tại ∃.",
      "trickWord": "Bẫy Logic ∃: Lượng từ Tồn tại (∃) luôn đi kèm phép HỘI (∧), không được dùng kéo theo",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Quy tắc vàng: ∃ luôn đi với ∧! Dùng → sau ∃ là sai hoàn toàn về mặt ngữ nghĩa."
    }
  },
  {
    "id": "db-c4-t1-039",
    "question": "Theo quy tắc phủ định trong Logic vị từ, một CSDL bị coi là VI PHẠM ràng buộc $\\forall t \\in R, (P(t) \\rightarrow Q(t))$ khi và chỉ khi:",
    "options": [
      "Tồn tại ít nhất một bộ t thuộc R sao cho cả tiền đề P(t) và kết luận Q(t) đều đồng thời nhận giá trị sai",
      "Mọi bộ t thuộc quan hệ R đều làm cho tiền đề P(t) nhận giá trị sai bất kể kết luận Q(t) đúng hay sai",
      "Tồn tại ít nhất một bộ t thuộc R sao cho tiền đề P(t) đúng nhưng kết luận Q(t) bị sai (∃t ∈ R, P(t) ∧ ¬Q(t))",
      "Toàn bộ các bộ trong quan hệ R đều làm cho biểu thức điều kiện Q(t) nhận giá trị đúng trên toàn hệ thống"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục III.1.a & Section 0: Phủ định của ∀t, (P(t) → Q(t)) là: ¬(∀t, P(t) → Q(t)) ≡ ∃t, ¬(¬P(t) ∨ Q(t)) ≡ ∃t, (P(t) ∧ ¬Q(t)). Nghĩa là chỉ cần tồn tại một bộ thỏa mãn điều kiện P nhưng không thỏa mãn kết luận Q là CSDL bị coi là vi phạm ràng buộc.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm phủ định của P → Q là ¬P → ¬Q hoặc nhầm thành P sai và Q sai.",
      "trickWord": "Bẫy phủ định mệnh đề kéo theo: ¬(P → Q) ≡ P ∧ ¬Q (Tồn tại vi phạm khi P đúng mà Q sai)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a",
      "tip": "Tìm ca vi phạm (Bug) ➔ Tìm bộ mà Tiền đề ĐÚNG nhưng Kết luận SAI (P ∧ ¬Q)!"
    }
  },
  {
    "id": "db-c4-t1-040",
    "question": "Biểu thức logic vị từ biểu diễn ràng buộc khóa chính: \"Mã sinh viên là duy nhất trong quan hệ `SINH_VIEN`\" được viết chuẩn xác là:",
    "options": [
      "∀t1 ∈ SINH_VIEN, ∃t2 ∈ SINH_VIEN: (t1.maSV = t2.maSV) (mỗi bộ đều có một bộ khác trùng mã)",
      "∀t1, t2 ∈ SINH_VIEN: (t1.maSV ≠ t2.maSV → t1 = t2) (khác mã thì bắt buộc phải cùng một bộ)",
      "∃t1, t2 ∈ SINH_VIEN: (t1.maSV = t2.maSV ∧ t1 ≠ t2) (tồn tại hai bộ trùng mã nhưng khác nhau)",
      "∀t1, t2 ∈ SINH_VIEN: (t1.maSV = t2.maSV → t1 = t2) (nếu trùng mã thì phải là cùng một bộ)"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục V.3.a (Ví dụ 6): Định nghĩa khóa chính bằng logic vị từ: với mọi cặp bộ t1, t2 trong bảng, nếu chúng có cùng mã sinh viên (t1.maSV = t2.maSV) thì bắt buộc chúng phải là cùng một bộ (t1 = t2). Nghĩa là không thể tồn tại hai bộ khác nhau mà lại có cùng mã.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn biểu thức của ca vi phạm (∃ t1 ≠ t2 mà t1.maSV = t2.maSV).",
      "trickWord": "Bẫy biểu thức Khóa chính: t1.maSV = t2.maSV → t1 = t2",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.3.a",
      "tip": "Khóa chính: Nếu khóa bằng nhau thì 2 dòng đó phải là 1 (t1 = t2)!"
    }
  },
  {
    "id": "db-c4-t1-041",
    "question": "Trong CSDL `QLHANGHOA`, quy tắc nghiệp vụ vàng nào sau đây được quy định rõ ràng trong giáo trình?",
    "options": [
      "Mỗi đơn đặt hàng chỉ được giải quyết trong đúng một hóa đơn duy nhất và không bao giờ giao hàng vượt số lượng đặt",
      "Mỗi đơn đặt hàng có thể được chia nhỏ để xuất thành nhiều hóa đơn khác nhau tùy theo lượng tồn kho thực tế",
      "Công ty bắt buộc phải giao đầy đủ 100% tất cả các mặt hàng khách đã đặt trước khi được phép in hóa đơn bán hàng",
      "Khách hàng chỉ được phép đặt một mặt hàng duy nhất trên mỗi đơn đặt hàng và phải thanh toán hết tiền đặt cọc"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục I.1.b (Quy tắc vàng): \"Mỗi đơn đặt hàng chỉ được giải quyết trong một hóa đơn duy nhất. Do điều kiện khách quan, công ty có thể không giao đầy đủ các mặt hàng/số lượng theo đơn đặt hàng, nhưng không bao giờ giao vượt yêu cầu\".",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thực tế ngoài đời nhiều đơn hàng giao nhiều lần, nhưng giáo trình QLHANGHOA quy định NGẶT NGHÈO: 1 đơn hàng giải quyết trong đúng 1 hóa đơn!",
      "trickWord": "Bẫy Quy tắc vàng QLHANGHOA: 1 Đơn hàng = ĐÚNG 1 Hóa đơn; KHÔNG BAO GIỜ GIAO VƯỢT",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục I.1.b",
      "tip": "Đặc thù đề thi: 1 Đơn đặt hàng ➔ ĐÚNG 1 Hóa đơn; Có thể giao thiếu nhưng TUYỆT ĐỐI KHÔNG GIAO VƯỢT!"
    }
  },
  {
    "id": "db-c4-t1-042",
    "question": "Xét ràng buộc thuộc tính tổng hợp: \"Công nợ của khách hàng = Tổng tiền các hóa đơn - Tổng số tiền các phiếu thu\". Bối cảnh của ràng buộc này gồm những quan hệ nào?",
    "options": [
      "Chỉ gồm 2 quan hệ là HOA_DON và PHIEU_THU vì hai bảng này chứa trực tiếp các thuộc tính số tiền giao dịch phát sinh",
      "Bối cảnh gồm 3 quan hệ: KHACH, HOA_DON và PHIEU_THU vì công thức tính toán liên quan trực tiếp đến cả ba bảng này",
      "Chỉ gồm duy nhất 1 quan hệ KHACH vì thuộc tính congNo được lưu trữ như một cột thuộc tính nội bộ của bảng khách hàng",
      "Gồm 4 quan hệ: KHACH, HOA_DON, CTIET_HD và PHIEU_THU vì hóa đơn cần phải tính chi tiết từng mặt hàng và đơn giá"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục VI.4.a (Ví dụ 11): Ràng buộc thuộc tính tổng hợp về công nợ trong CSDL QLHANGHOA xác định: congNo trong KHACH = SUM(trigiaHD trong HOA_DON) - SUM(soTien trong PHIEU_THU). Ba bảng trực tiếp tham gia vào ràng buộc này là KHACH, HOA_DON, PHIEU_THU.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh bỏ quên bảng KHACH (nghĩ công nợ chỉ là phép trừ hóa đơn với phiếu thu) hoặc thêm CTIET_HD dư thừa.",
      "trickWord": "Bẫy bối cảnh Công nợ: Gồm đúng 3 bảng: KHACH, HOA_DON, PHIEU_THU",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.4.a",
      "tip": "Công nợ nằm ở KHACH, hóa đơn ở HOA_DON, phiếu thu ở PHIEU_THU ➔ Bối cảnh đúng 3 bảng!"
    }
  },
  {
    "id": "db-c4-t1-043",
    "question": "Trong ràng buộc công nợ trên, nếu kế toán thực hiện thao tác XÓA một phiếu thu trong bảng `PHIEU_THU`, DBMS cần xử lý như thế nào đối với công nợ của khách hàng?",
    "options": [
      "Hệ thống tự động từ chối việc xóa phiếu thu trong mọi tình huống vì dữ liệu tài chính kế toán là bất biến tuyệt đối",
      "Hoàn toàn không cần kiểm tra (-) vì phiếu thu bị xóa không làm ảnh hưởng đến các hóa đơn mua hàng đã phát hành trước đó",
      "Cần phải kiểm tra (+) và cập nhật lại công nợ của khách tương ứng bằng cách cộng thêm vào một khoản bằng số tiền phiếu thu bị xóa",
      "Tự động giảm giá trị của thuộc tính congNo xuống một lượng tương ứng với số tiền được ghi trên phiếu thu vừa bị hủy bỏ"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục VI.4.a & Bảng tầm ảnh hưởng: Vì congNo = Tổng HĐ - Tổng PT, khi XÓA một phiếu thu (bớt đi một khoản tiền đã trả), công nợ của khách sẽ phải TĂNG LÊN tương ứng. Thao tác Xóa trên PHIEU_THU mang dấu (+) và phải cập nhật lại congNo.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn \"giảm công nợ\" hoặc nghĩ xóa phiếu thu là an toàn (-).",
      "trickWord": "Bẫy Xóa phiếu thu: Làm GIẢM tổng tiền thu ➔ Công nợ phải TĂNG LÊN (+)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.4.a",
      "tip": "Xóa phiếu thu = Khách chưa trả khoản đó ➔ Công nợ tăng lên! Tầm ảnh hưởng là (+)!"
    }
  },
  {
    "id": "db-c4-t1-044",
    "question": "Trong CSDL `QLHANGHOA`, thuộc tính `congNo` trong bảng `KHACH` được quy ước ý nghĩa như thế nào khi mang giá trị âm (`congNo < 0`)?",
    "options": [
      "Khách hàng được hưởng chiết khấu thương mại đặc biệt tương ứng với tỷ lệ phần trăm số âm ghi nhận trên hệ thống",
      "Khách hàng đang nợ công ty tiền hàng và tài khoản của khách hàng đó đang bị tạm khóa giao dịch trên toàn hệ thống",
      "Giao dịch bị lỗi tính toán số học do nhân viên nhập sai dữ liệu đơn giá và hóa đơn cần phải được hủy bỏ ngay",
      "Công ty đang nợ khách hàng (do khách hàng đã trả tiền cọc hoặc thanh toán trước nhiều hơn tổng số tiền hàng đã mua)"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục I.1.b (Đặc tả quan hệ KHACH): \"congNo là công nợ với khách hàng — nếu congNo > 0: khách hàng nợ công ty, ngược lại congNo < 0: công ty nợ khách hàng (ví dụ do đặt cọc trước hoặc trả thừa)\".",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ nợ thì phải luôn dương, số âm là lỗi nhập liệu hoặc khách nợ nhiều hơn.",
      "trickWord": "Bẫy dấu công nợ: congNo > 0: Khách nợ công ty; congNo < 0: Công ty nợ khách hàng",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục I.1.b",
      "tip": "Quy ước giáo trình: Dương = Khách nợ; Âm = Công ty nợ (khách trả trước tiền cọc)!"
    }
  },
  {
    "id": "db-c4-t1-045",
    "question": "Ràng buộc: \"Số lượng hàng bán ra trên chi tiết hóa đơn không được vượt quá số lượng đặt hàng tương ứng (`CTIET_HD.soLuongBan <= DAT_HANG.soLuongDat`)\". Đây là:",
    "options": [
      "RBTV liên thuộc tính, liên quan hệ vì ràng buộc so sánh hai giá trị thuộc tính nằm ở hai bảng khác nhau thông qua khóa liên kết",
      "RBTV liên thuộc tính trong một quan hệ vì cả hai thuộc tính đều đo lường số lượng sản phẩm của cùng một mặt hàng cụ thể",
      "RBTV về miền giá trị vì nó quy định số lượng bán ra chỉ được phép nhận giá trị là các số nguyên dương trong thực tế",
      "RBTV liên bộ trong cùng một quan hệ vì cần phải so sánh số lượng giữa các dòng chi tiết hóa đơn khác nhau của cùng đơn hàng"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục VI.3.a & Mục VI.5: Đây là ràng buộc so sánh soLuongBan (trong CTIET_HD) và soLuongDat (trong DAT_HANG thông qua HOA_DON). Vì hai thuộc tính nằm ở hai bảng khác nhau nên đây là RBTV liên thuộc tính, liên quan hệ.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm thành liên thuộc tính trong 1 bảng do không để ý soLuongBan và soLuongDat nằm ở 2 bảng khác nhau.",
      "trickWord": "Bẫy hai bảng khác nhau: soLuongBan ở CTIET_HD, soLuongDat ở DAT_HANG ➔ LIÊN QUAN HỆ",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.3.a",
      "tip": "Thuộc tính ở 2 bảng khác nhau so sánh với nhau = RBTV LIÊN THUỘC TÍNH, LIÊN QUAN HỆ!"
    }
  },
  {
    "id": "db-c4-t1-046",
    "question": "Khi biểu diễn một lược đồ CSDL bằng đồ thị vô hướng (với nút thuộc tính và nút quan hệ), sự xuất hiện của một \"Chu trình\" phản ánh điều gì?",
    "options": [
      "Lược đồ CSDL bị lỗi thiết kế nghiêm trọng và bắt buộc phải xóa bỏ ít nhất một quan hệ để đồ thị trở thành cây không chu trình",
      "Có nhiều đường dẫn ngữ nghĩa khác nhau liên kết giữa các thực thể, đòi hỏi phải thiết lập RBTV để tránh mâu thuẫn dữ liệu",
      "Cơ sở dữ liệu đang xảy ra hiện tượng khóa chết (deadlock) giữa các tiến trình truy xuất đồng thời của người dùng trên hệ thống",
      "Toàn bộ các bảng trong chu trình đều phải có cùng một khóa chính duy nhất để đảm bảo khả năng đồng bộ hóa dữ liệu tự động"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục VI.5.a: Khi lược đồ CSDL có chu trình trong đồ thị, giữa các thực thể sẽ có nhiều hơn một đường liên kết ngữ nghĩa. Để dữ liệu không bị mâu thuẫn giữa các đường đi, bắt buộc phải thiết lập thêm một RBTV ngữ nghĩa để kiểm soát.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ có chu trình trong CSDL là sai thiết kế (circular dependency) hoặc nhầm với deadlock.",
      "trickWord": "Bẫy Chu trình đồ thị: Chu trình KHÔNG PHẢI LỖI, nó chỉ đòi hỏi RBTV để tránh mâu thuẫn dữ liệu",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.5.a",
      "tip": "Chu trình trong đồ thị lược đồ CSDL ➔ Cần RBTV tương ứng để đồng bộ tính nhất quán!"
    }
  },
  {
    "id": "db-c4-t1-047",
    "question": "Trong chu trình 3 bảng `DAT_HANG - HOA_DON - CTIET_HD`, theo giáo trình, có mấy chính sách nghiệp vụ có thể áp dụng cho việc giao hàng?",
    "options": [
      "Có 4 chính sách: Giao hàng tận nơi, nhận hàng tại kho, giao hàng qua bên thứ ba và hủy đơn hàng tự động sau hai mươi tư giờ",
      "Có 2 chính sách: Chỉ cho phép thanh toán bằng tiền mặt hoặc cho phép thanh toán trả chậm qua thẻ ngân hàng liên kết",
      "Có 3 chính sách: Giao đủ 100% tất cả mặt hàng; Giao không vượt số lượng đặt (chuẩn QLHANGHOA); Giao tùy ý các mặt hàng",
      "Duy nhất 1 chính sách: Bắt buộc giao đủ 100% tất cả các mặt hàng đã đặt thì hóa đơn mới được hệ thống xác nhận hợp lệ"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục VI.5.a (Ví dụ 12): Có 3 chính sách: (1) Phải giao đầy đủ tất cả mặt hàng đã đặt; (2) Có thể không giao đầy đủ nhưng không bao giờ giao vượt (chuẩn CSDL QLHANGHOA); (3) Có thể gồm tùy ý các mặt hàng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh chỉ nhớ chính sách chuẩn của QLHANGHOA mà quên mất về mặt lý thuyết có đúng 3 trường hợp chính sách.",
      "trickWord": "Bẫy 3 chính sách giao hàng: (1) Giao đủ 100%; (2) Không giao vượt; (3) Tùy ý",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.5.a",
      "tip": "Học thuộc 3 chính sách chu trình giao hàng trong giáo trình: Đầy đủ - Không vượt - Tùy ý!"
    }
  },
  {
    "id": "db-c4-t1-048",
    "question": "Trong Đồ án CSDL Sinh viên nghiên cứu đề tài: `SINHVIEN(MaSV, ...)`, `DETAI(MaDT, ...)`, `SV_DT(MaSV, MaDT, NoiAD, KQ)`. Khóa chính của bảng `SV_DT` là gì?",
    "options": [
      "Khóa chính gồm cả ba thuộc tính (MaSV, MaDT, NoiAD) để cho phép cùng một sinh viên làm cùng một đề tài tại nhiều nơi khác nhau",
      "Chỉ gồm duy nhất thuộc tính MaSV vì mỗi sinh viên chỉ được phép tham gia vào một đề tài nghiên cứu khoa học duy nhất mà thôi",
      "Chỉ gồm duy nhất thuộc tính MaDT vì mỗi đề tài khoa học chỉ được giao cho một sinh viên duy nhất đứng tên làm chủ nhiệm đề tài",
      "Khóa chính phức hợp gồm hai thuộc tính (MaSV, MaDT) biểu diễn mối quan hệ nhiều-nhiều giữa sinh viên và các đề tài nghiên cứu"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục VIII.1.a: Lược đồ SV_DT(MaSV, MaDT, NoiAD, KQ) biểu diễn mối quan hệ nhiều-nhiều: Một sinh viên có thể làm nhiều đề tài, một đề tài có thể do nhiều sinh viên thực hiện. Khóa chính chuẩn mực là cặp thuộc tính (MaSV, MaDT).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ có thêm NoiAD thì khóa chính phải có 3 cột, hoặc nghĩ quan hệ 1-N.",
      "trickWord": "Bẫy Khóa chính bảng liên kết: Là cặp (MaSV, MaDT), mỗi sinh viên trong 1 đề tài có đúng 1 kết quả KQ",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VIII.1.a",
      "tip": "Bảng liên kết N-N chuẩn mực: Khóa chính = Cặp 2 khóa ngoại (MaSV, MaDT)!"
    }
  },
  {
    "id": "db-c4-t1-049",
    "question": "Xét quy tắc: \"Mỗi sinh viên chỉ được tham gia tối đa 2 đề tài nghiên cứu khoa học\". Trong Bảng Tầm Ảnh Hưởng, thao tác nào trên bảng `SV_DT` cần kiểm tra (`+`)?",
    "options": [
      "Thao tác THÊM (+) và SỬA (+* trên MaSV) vì các thao tác này có thể làm tăng số lượng đề tài của sinh viên đó vượt quá 2",
      "Thao tác XÓA (+) vì việc rút bớt sinh viên khỏi đề tài có thể làm cho đề tài đó không còn đủ nhân sự thực hiện theo tiến độ",
      "Cả ba thao tác Thêm, Sửa, Xóa đều cần kiểm tra (+) vì số lượng đề tài phải luôn được giữ cố định theo quyết định của khoa",
      "Hoàn toàn không cần kiểm tra (-) vì số lượng đề tài tham gia là quyền tự do học thuật của mỗi cá nhân sinh viên trong trường"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục VIII.1.a & Bảng tầm ảnh hưởng: Ràng buộc \"tối đa 2 đề tài\" là ràng buộc liên bộ. Khi THÊM một dòng mới vào SV_DT, số đề tài của sinh viên đó tăng lên ➔ có thể vượt quá 2 (cần kiểm tra +). Khi SỬA MaSV, sinh viên mới nhận đề tài có thể bị vượt quá 2 ➔ cần kiểm tra +*(MaSV). Khi XÓA, số đề tài giảm xuống nên không bao giờ vượt quá 2 ➔ Xóa là (-).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ thao tác Xóa cũng phải kiểm tra hoặc không nghĩ đến việc sửa MaSV.",
      "trickWord": "Bẫy ràng buộc Tối đa: Thêm = (+); Sửa MaSV = (+*); XÓA = (-) vì bớt đi thì không thể vượt trần",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VIII.1.a",
      "tip": "Ràng buộc trần \"TỐI ĐA N\": Thêm làm tăng (+); Xóa làm giảm (-) an toàn tuyệt đối!"
    }
  },
  {
    "id": "db-c4-t1-050",
    "question": "Xét ràng buộc: \"Tổng kinh phí thực hiện các đề tài do một giảng viên làm chủ nhiệm không được vượt quá 500 triệu đồng\". Đây là loại RBTV nào?",
    "options": [
      "RBTV về miền giá trị của bảng DETAI vì nó trực tiếp giới hạn mức trần của trường thuộc tính Kinhphi không được vượt quá 500",
      "RBTV liên bộ trong quan hệ DETAI (hoặc thuộc tính tổng hợp) vì cần gom nhóm và tính tổng kinh phí theo từng chủ nhiệm đề tài",
      "RBTV liên thuộc tính trong bảng DETAI vì nó so sánh giữa thuộc tính Kinhphi và thuộc tính Chunhiem của cùng một dòng đề tài",
      "RBTV liên bộ liên quan hệ giữa DETAI và SINHVIEN vì sinh viên là người trực tiếp thụ hưởng nguồn kinh phí nghiên cứu khoa học"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục VIII.1.a & VII.1.a: Để tính tổng kinh phí của một chủ nhiệm, hệ thống phải duyệt qua nhiều bộ (dòng) có cùng Chunhiem trong bảng DETAI để tính SUM(Kinhphi). Do đó đây là RBTV liên bộ (hoặc thuộc tính tổng hợp nội bộ). Không phải miền giá trị vì miền giá trị chỉ xét trên 1 đề tài đơn lẻ.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhìn thấy số 500 triệu là tưởng ngay ràng buộc miền giá trị của cột Kinhphi.",
      "trickWord": "Bẫy TỔNG kinh phí theo nhóm: Là RBTV LIÊN BỘ (phải tính SUM qua nhiều dòng của cùng chủ nhiệm)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VIII.1.a & VII.1.a",
      "tip": "Có phép gom nhóm GROUP BY / SUM nhiều dòng ➔ Ràng buộc LIÊN BỘ!"
    }
  }
];
