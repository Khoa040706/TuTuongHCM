/* ============================================================
   NGÂN HÀNG ĐỀ THI BẪY 2 (TRICK EXAM SET 2) — MÔN HỆ CƠ SỞ DỮ LIỆU
   CHƯƠNG IV: RÀNG BUỘC TOÀN VẸN (INTEGRITY CONSTRAINTS)
   MÃ BỘ ĐỀ: db-c4-t2 (50 CÂU HỎI VẬN DỤNG CAO / HARD 100%)
   CƠ CHẾ CHỐNG ĐOÁN BỪA: DELTA L <= 15 KÝ TỰ MỌI CÂU HỎI
   PHÂN BỔ ĐÁP ÁN CÂN BẰNG: 12 A, 12 B, 13 C, 13 D
   TRANG BỊ ĐẦY ĐỦ 4 TRƯỜNG BẪY HỌC THUẬT: whyTrapped, trickWord, citation, tip
   ============================================================ */

export const questionsDbCh4Trick2 = [
  {
    "id": "db-c4-t2-001",
    "question": "Giả sử tại thời điểm kiểm tra, mọi sinh viên trong bảng `SINH_VIEN` đều có năm sinh sau năm 2000. Điều này có đồng nghĩa với việc \"Sinh viên phải sinh sau năm 2000\" là một RBTV hay không?",
    "options": [
      "Chỉ đồng nghĩa nếu bảng SINH_VIEN có số lượng bản ghi lớn hơn một nghìn dòng để bảo đảm tính đại diện của mẫu thống kê",
      "Hoàn toàn đồng nghĩa, vì mọi tính chất đúng trên toàn bộ các dòng của bảng tại thời điểm hiện tại đều là một RBTV chuẩn",
      "Hoàn toàn không đồng nghĩa, vì đây chỉ là sự trùng hợp ngẫu nhiên của tập dữ liệu hiện tại chứ không phải quy tắc quản lý",
      "Hệ quản trị CSDL sẽ tự động tạo một ràng buộc CHECK tương ứng ngay khi phát hiện tính chất này trên các bản ghi hiện có"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục II.1.a & Section 0: Một tính chất tình cờ thỏa mãn trên trạng thái dữ liệu tức thời (Snapshot) KHÔNG ĐỒNG NGHĨA đó là một RBTV. RBTV phải là quy tắc quản lý bất biến do con người/nghiệp vụ quy định, áp dụng cho mọi trạng thái dữ liệu trong tương lai.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn giữa dữ liệu ngẫu nhiên hiện tại (Instance) và bất biến logic của lược đồ (Schema Invariant).",
      "trickWord": "Bẫy ngụy biện thống kê: Dữ liệu hiện có đúng KHÔNG CÓ NGHĨA đó là một RBTV",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục II.1.a",
      "tip": "RBTV = Luật quản lý bất biến! Sự trùng hợp ngẫu nhiên của dữ liệu không bao giờ tạo nên RBTV."
    }
  },
  {
    "id": "db-c4-t2-002",
    "question": "Trong thực tế quản trị hệ thống cơ sở dữ liệu, việc kiểm tra các RBTV phức tạp thường được hoãn lại để kiểm tra định kỳ vào ban đêm nhằm mục đích gì?",
    "options": [
      "Nhằm mục đích xóa bỏ hoàn toàn tất cả các ràng buộc khóa ngoại để hệ thống đạt tốc độ xử lý nhanh gấp hàng trăm lần bình thường",
      "Cho phép người dùng tùy ý chèn dữ liệu sai lệch vào hệ thống mà không bao giờ bị hệ quản trị cơ sở dữ liệu phát hiện và xử lý",
      "Vì các câu lệnh SQL ban ngày không có khả năng truy xuất đến các bảng dữ liệu lịch sử để tiến hành kiểm tra tính toàn vẹn",
      "Giảm tải áp lực tính toán I/O tức thời cho hệ thống trong giờ cao điểm và tối ưu hóa thời gian phản hồi giao dịch của người dùng"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục II.1.b: Kiểm tra RBTV có thể thực hiện tức thời (khi cập nhật) hoặc định kỳ/đột xuất khi bảo trì. Với các RBTV phức tạp đòi hỏi quét qua nhiều triệu bản ghi, việc kiểm tra định kỳ vào ban đêm (Batch verification) giúp tránh nghẽn I/O hệ thống ban ngày.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ kiểm tra định kỳ là để xóa bỏ ràng buộc hoặc che giấu lỗi.",
      "trickWord": "Bẫy thời điểm kiểm tra định kỳ: TỐI ƯU HÓA HIỆU NĂNG I/O và thời gian phản hồi",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục II.1.b",
      "tip": "Kiểm tra định kỳ = Giải pháp cân bằng giữa tính toàn vẹn và hiệu năng hệ thống!"
    }
  },
  {
    "id": "db-c4-t2-003",
    "question": "Khi một quy tắc quản lý nghiệp vụ không thể biểu diễn được bằng các ràng buộc khai báo chuẩn (như CHECK, PRIMARY KEY, FOREIGN KEY), giải pháp chuẩn mực trong RDBMS là gì?",
    "options": [
      "Cài đặt quy tắc nghiệp vụ đó bằng Bộ kích hoạt tự động (Trigger) hoặc Stored Procedure kết hợp Transaction trên máy chủ CSDL",
      "Bỏ qua hoàn toàn quy tắc nghiệp vụ đó và chỉ tin cậy vào việc người dùng sẽ tự giác nhập liệu chính xác trên bàn phím máy tính",
      "Chuyển toàn bộ cơ sở dữ liệu sang dạng các tệp văn bản phi cấu trúc XML để lập trình viên tự xử lý bằng vòng lặp thủ công",
      "Bắt buộc phải thay đổi toàn bộ lược đồ CSDL và phân rã các bảng thành dạng chuẩn tối cao 5NF thì mới có thể kiểm tra được"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục II.1.b & Section 0: Các ràng buộc phức tạp liên quan đến nhiều bảng, tính toán tổng hợp hoặc điều kiện phụ thuộc nghiệp vụ tinh vi không thể dùng CHECK khai báo sẽ được cài đặt bằng Trigger (Bộ kích hoạt tự động) hoặc Thủ tục lưu trữ (Stored Procedure).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ mọi ràng buộc đều cài được bằng lệnh CHECK hoặc chọn phương án bỏ qua.",
      "trickWord": "Bẫy cơ chế cài đặt: TRIGGER là công cụ mạnh mẽ nhất để cài đặt RBTV phức tạp",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục II.1.b & Section 0",
      "tip": "Ràng buộc đơn giản ➔ Dùng CHECK / FK; Ràng buộc liên quan hệ phức tạp ➔ Dùng TRIGGER!"
    }
  },
  {
    "id": "db-c4-t2-004",
    "question": "Ràng buộc nào sau đây thuộc nhóm \"Ràng buộc ngữ nghĩa\" (Semantic Integrity Constraint) phụ thuộc chặt chẽ vào quy tắc nghiệp vụ của từng bài toán cụ thể?",
    "options": [
      "Khóa chính của một bảng bất kỳ tuyệt đối không được phép chứa giá trị NULL và phải có giá trị phân biệt duy nhất",
      "Số tiền tạm ứng của một nhân viên không được vượt quá số tiền lương cơ bản hàng tháng được nhận của nhân viên đó",
      "Khóa ngoại của bảng con phải tham chiếu đến một khóa chính hoặc một khóa ứng viên duy nhất đã tồn tại ở bảng cha",
      "Kiểu dữ liệu của một cột được định nghĩa là số nguyên int thì không thể lưu trữ trực tiếp một đoạn văn bản chuỗi"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục II.1.a & Section 0: Khóa chính, Khóa ngoại, Kiểu dữ liệu là các ràng buộc cấu trúc (Structural constraints) có sẵn trong mô hình quan hệ. Quy định \"tamUng <= luong\" là ràng buộc ngữ nghĩa nghiệp vụ riêng biệt của từng doanh nghiệp cụ thể.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn giữa ràng buộc cấu trúc của mô hình quan hệ (PK, FK) và ràng buộc ngữ nghĩa nghiệp vụ.",
      "trickWord": "Bẫy phân biệt cấu trúc vs ngữ nghĩa: tamUng <= luong là quy tắc NGỮ NGHĨA NGHIỆP VỤ",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục II.1.a",
      "tip": "PK, FK, Kiểu dữ liệu = Ràng buộc CẤU TRÚC; Luật kinh doanh riêng (lương, tạm ứng) = Ràng buộc NGỮ NGHĨA!"
    }
  },
  {
    "id": "db-c4-t2-005",
    "question": "Ràng buộc toàn vẹn đóng vai trò là nền tảng trực tiếp bảo đảm thuộc tính nào trong 4 thuộc tính ACID chuẩn mực của một giao dịch (Transaction)?",
    "options": [
      "Thuộc tính Tính cô lập (Isolation - Chữ I trong ACID), đảm bảo các giao dịch chạy song song không nhìn thấy dữ liệu trung gian",
      "Thuộc tính Tính nguyên tố (Atomicity - Chữ A trong ACID), đảm bảo toàn bộ các thao tác trong giao dịch đều phải hoàn tất trọn vẹn",
      "Thuộc tính Tính nhất quán (Consistency - Chữ C trong ACID), đảm bảo CSDL chuyển từ trạng thái hợp lệ này sang trạng thái hợp lệ khác",
      "Thuộc tính Tính bền vững (Durability - Chữ D trong ACID), đảm bảo dữ liệu đã COMMIT sẽ không bao giờ bị mất khi gặp sự cố mất điện"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục II.1.a & Section 0: Chữ C trong ACID là Consistency (Tính nhất quán): Một giao dịch phải đưa CSDL từ một trạng thái thỏa mãn tất cả các RBTV sang một trạng thái mới cũng thỏa mãn tất cả các RBTV. RBTV chính là thước đo định nghĩa tính nhất quán này.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm sang Tính nguyên tố (Atomicity) vì nghĩ vi phạm là rollback toàn bộ.",
      "trickWord": "Bẫy ACID: RBTV bảo vệ tính NHẤT QUÁN (Consistency - chữ C)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục II.1.a & Section 0",
      "tip": "RBTV = Bản thiết kế của Tính Nhất Quán (Consistency) trong giao dịch CSDL!"
    }
  },
  {
    "id": "db-c4-t2-006",
    "question": "Cho quan hệ `NHANVIEN(maNV, tenNV, luong, maPhong)`. Ràng buộc: \"Lương nhân viên phải lớn hơn 3 triệu đồng\" có bối cảnh là gì?",
    "options": [
      "Bối cảnh gồm toàn bộ các bảng trong CSDL vì tiền lương là thông tin tài chính nhạy cảm ảnh hưởng đến kết quả kinh doanh chung",
      "Bối cảnh gồm cả 2 quan hệ NHANVIEN và PHONGBAN vì nhân viên bắt buộc phải thuộc về một phòng ban cụ thể để được trả lương",
      "Bối cảnh không xác định vì quy định mức lương tối thiểu phụ thuộc vào chính sách tiền lương chung của toàn bộ doanh nghiệp",
      "Bối cảnh là duy nhất 1 quan hệ NHANVIEN vì biểu thức điều kiện chỉ truy xuất và so sánh duy nhất thuộc tính luong của bảng này"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục III.1.a & IV.1.a: Biểu thức \"luong > 3000000\" chỉ cần kiểm tra trên thuộc tính luong của quan hệ NHANVIEN. Không cần đối chiếu sang bất kỳ bảng nào khác. Do đó bối cảnh là duy nhất 1 quan hệ NHANVIEN.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh thấy có cột maPhong nên suy diễn sang bảng PHONGBAN mặc dù điều kiện lương không hề đụng đến phòng ban.",
      "trickWord": "Bẫy suy diễn dư thừa: Chỉ xét các bảng có thuộc tính THỰC SỰ THAM GIA vào biểu thức điều kiện",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a",
      "tip": "Biểu thức chỉ chứa cột bảng nào ➔ Bối cảnh chỉ gồm bảng đó!"
    }
  },
  {
    "id": "db-c4-t2-007",
    "question": "Mặc dù rất dễ hiểu đối với người dùng thông thường, nhược điểm chí mạng lớn nhất của việc dùng Ngôn ngữ tự nhiên để đặc tả RBTV là gì?",
    "options": [
      "Dễ gây ra sự nhập nhằng, đa nghĩa, thiếu tính chính xác toán học và không thể biên dịch tự động bởi hệ quản trị cơ sở dữ liệu",
      "Tốn quá nhiều dung lượng bộ nhớ RAM trên máy chủ khi hệ thống tiến hành nạp các văn bản quy tắc vào bộ nhớ đệm ban đầu",
      "Chỉ có thể áp dụng được cho các cơ sở dữ liệu nhỏ có ít hơn năm bảng và hoàn toàn bất lực trước các hệ thống CSDL lớn",
      "Bắt buộc mọi người dùng đầu cuối phải có chứng chỉ chuyên sâu về ngôn ngữ học thì mới có thể đọc và hiểu được tài liệu"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục III.1.a: Ngôn ngữ tự nhiên có ưu điểm thân thiện, trực quan nhưng nhược điểm lớn nhất là tính nhập nhằng (ambiguity), dễ hiểu lầm ngữ nghĩa, thiếu chặt chẽ toán học và máy tính không thể trực tiếp thực thi/kiểm chứng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh chọn các phương án liên quan đến phần cứng (RAM) hoặc kích thước bảng.",
      "trickWord": "Bẫy ngôn ngữ tự nhiên: TÍNH NHẬP NHẰNG, đa nghĩa và không thể tự động biên dịch",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a",
      "tip": "Ngôn ngữ tự nhiên: Dễ hiểu với người ➔ Nhưng MƠ HỒ với máy tính!"
    }
  },
  {
    "id": "db-c4-t2-008",
    "question": "Trong CSDL `QLHANGHOA`, xét ràng buộc: \"Mỗi khách hàng có một số điện thoại riêng biệt, không có hai khách hàng nào trùng số điện thoại\". Bối cảnh là:",
    "options": [
      "Gồm 2 quan hệ KHACH và DAT_HANG vì số điện thoại của khách hàng được sử dụng để liên lạc khi nhân viên giao đơn đặt hàng",
      "Duy nhất 1 quan hệ KHACH vì điều kiện kiểm tra sự trùng lặp số điện thoại chỉ diễn ra giữa các bản ghi bên trong bảng khách hàng",
      "Gồm 3 quan hệ KHACH, DAT_HANG và HOA_DON vì số điện thoại bắt buộc phải được in rõ ràng lên trên hóa đơn thanh toán cho khách",
      "Không có bối cảnh vì số điện thoại là thông tin liên lạc tự do, khách hàng có thể sử dụng chung số điện thoại của gia đình"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục III.1.a & V.3.a: Ràng buộc số điện thoại không trùng là ràng buộc liên bộ (tính duy nhất) trên quan hệ KHACH. Việc kiểm tra chỉ diễn ra giữa các bộ trong bảng KHACH. Bối cảnh là duy nhất 1 quan hệ KHACH.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh lại liên hệ thực tế giao hàng để kéo thêm bảng DAT_HANG và HOA_DON vào bối cảnh.",
      "trickWord": "Bẫy bối cảnh bảng khách: Kiểm tra trùng số điện thoại CHỈ XÉT trên bảng KHACH",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a",
      "tip": "Đặc tả ràng buộc ở bảng nào thì bối cảnh ở bảng đó, đừng suy diễn nghiệp vụ bên ngoài!"
    }
  },
  {
    "id": "db-c4-t2-009",
    "question": "Về mặt hình thức biểu diễn, một Bảng Tầm Ảnh Hưởng chuẩn mực của một RBTV được cấu trúc như thế nào?",
    "options": [
      "Là biểu đồ tròn thể hiện tỷ lệ phần trăm các bản ghi dữ liệu bị vi phạm quy tắc trong suốt lịch sử vận hành của hệ thống",
      "Là cây phân cấp một chiều liệt kê toàn bộ các thuộc tính khóa chính và khóa ngoại của các bảng có liên quan trong hệ thống",
      "Là ma trận hai chiều: các dòng là danh sách các quan hệ trong bối cảnh, các cột tương ứng với 3 thao tác Thêm, Sửa, Xóa",
      "Là đồ thị có hướng mô tả luồng di chuyển của các gói tin mạng giữa máy khách (Client) và máy chủ cơ sở dữ liệu (Server)"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục III.1.a & Section 0: Bảng tầm ảnh hưởng là một ma trận 2 chiều: Các hàng (rows) biểu diễn các quan hệ (bảng) trong bối cảnh; Các cột (columns) biểu diễn 3 thao tác cập nhật: Thêm (Insert), Xóa (Delete), Sửa (Update).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm Bảng tầm ảnh hưởng với đồ thị dữ liệu hoặc cây phân cấp thuộc tính.",
      "trickWord": "Bẫy cấu trúc ma trận: HÀNG = CÁC BẢNG TRONG BỐI CẢNH; CỘT = THÊM, XÓA, SỬA",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a",
      "tip": "Bảng Tầm Ảnh Hưởng = Ma trận [Danh sách Bảng] x [Thêm, Xóa, Sửa]!"
    }
  },
  {
    "id": "db-c4-t2-010",
    "question": "Trong công tác phát triển phần mềm và quản trị CSDL, Bảng Tầm Ảnh Hưởng đóng vai trò cốt lõi như thế nào khi lập trình Trigger?",
    "options": [
      "Loại bỏ hoàn toàn sự cần thiết của việc tạo chỉ mục (Index) trên các bảng dữ liệu lớn mà vẫn bảo đảm tốc độ truy vấn tức thì",
      "Tự động biên dịch toàn bộ các câu lệnh SQL sang mã máy mà không cần thông qua trình tối ưu hóa truy vấn của hệ quản trị CSDL",
      "Giúp hệ thống tự động sửa chữa các lỗi cú pháp câu lệnh SQL của lập trình viên trước khi gửi câu lệnh đến bộ xử lý trung tâm",
      "Chỉ rõ cho lập trình viên biết cần phải viết Trigger trên những bảng nào và gắn với các sự kiện nào (AFTER INSERT, UPDATE, DELETE)"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục III.1.a & Section 0: Mỗi dấu (+) trong Bảng tầm ảnh hưởng tại hàng R, cột Thao tác (Insert/Delete/Update) chính là kim chỉ nam báo cho lập trình viên biết bắt buộc phải viết Trigger trên bảng R gắn với sự kiện tương ứng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ Bảng tầm ảnh hưởng tự động sửa lỗi SQL hoặc thay thế cho việc đánh chỉ mục.",
      "trickWord": "Bẫy vai trò Bảng tầm ảnh hưởng: LÀ BẢN THIẾT KẾ CHO TRIGGER trên từng bảng và từng sự kiện",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a & Section 0",
      "tip": "Mỗi ô (+) trong Bảng Tầm Ảnh Hưởng = Một Trigger cần phải được cài đặt trên hệ thống!"
    }
  },
  {
    "id": "db-c4-t2-011",
    "question": "Trong bảng `KET_QUA(maSV, maMH, lanThi, diem)` có khóa chính `(maSV, maMH, lanThi)`. Khi THÊM một bản ghi mới, thao tác này có tầm ảnh hưởng là:",
    "options": [
      "Bắt buộc kiểm tra (+) để bảo đảm bộ ba giá trị (maSV, maMH, lanThi) vừa thêm không bị trùng khớp với bất kỳ dòng nào đã có sẵn",
      "Hoàn toàn không cần kiểm tra (-) vì mỗi sinh viên luôn có kết quả thi độc lập không thể bị trùng lặp với kết quả của người khác",
      "Chỉ cần kiểm tra có điều kiện +(*) khi điểm số chèn vào nhỏ hơn điểm trung bình yêu cầu để xét tư cách tốt nghiệp ra trường",
      "Hệ thống chỉ kiểm tra thuộc tính maSV, còn maMH và lanThi thì không cần kiểm tra vì môn học đã được mở theo thời khóa biểu"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục V.3.a & Section I.1.a: Khóa chính của KET_QUA là khóa phức hợp gồm 3 thuộc tính (maSV, maMH, lanThi). Khi THÊM một bộ mới, DBMS bắt buộc phải kiểm tra (+) cả tổ hợp 3 thuộc tính này để không bị trùng lặp.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ chỉ cần kiểm tra maSV mà quên mất đây là khóa chính phức hợp 3 cột.",
      "trickWord": "Bẫy khóa chính phức hợp: Bắt buộc kiểm tra (+) TRÊN CẢ TỔ HỢP 3 CỘT (maSV, maMH, lanThi)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.3.a",
      "tip": "Khóa chính dù 1 cột hay nhiều cột: THÊM bản ghi mới LUÔN LUÔN là (+)!"
    }
  },
  {
    "id": "db-c4-t2-012",
    "question": "Giả sử thuộc tính khóa ngoại `maKhoa` trong bảng `SINH_VIEN` cho phép nhận giá trị NULL. Khi THÊM một sinh viên mới có `maKhoa = NULL`, DBMS sẽ:",
    "options": [
      "Báo lỗi vi phạm khóa ngoại ngay lập tức và từ chối thao tác chèn vì giá trị NULL không thể tìm thấy trong danh mục mã khoa của KHOA",
      "Cho phép thêm ngay mà không cần kiểm tra sự tồn tại trong bảng KHOA vì giá trị NULL biểu thị sinh viên đó chưa được xếp vào khoa nào",
      "Tự động gán mã khoa của sinh viên đó về mã khoa đầu tiên được tìm thấy trong bảng KHOA để duy trì tính toàn vẹn tham chiếu",
      "Tạm ngừng giao dịch và chờ người quản trị nhập bổ sung một mã khoa hợp lệ từ bàn phím trước khi cho phép lưu trữ vào ổ đĩa"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a & Chuẩn SQL: Khóa ngoại có thể nhận giá trị NULL (nếu không có ràng buộc NOT NULL). Khi giá trị khóa ngoại là NULL, hệ thống bỏ qua kiểm tra tham chiếu ở bảng cha vì bản ghi đó chưa có mối liên kết đến cha.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh thường nghĩ khóa ngoại KHÔNG BAO GIỜ được mang giá trị NULL, hoặc nghĩ NULL sẽ gây lỗi FK violation.",
      "trickWord": "Bẫy NULL trong khóa ngoại: NULL được chấp nhận và BỎ QUA KIỂM TRA THAM CHIẾU",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Khóa ngoại = NULL ➔ Hợp lệ (nếu cột nullable) và không cần tra cứu bảng cha!"
    }
  },
  {
    "id": "db-c4-t2-013",
    "question": "Bảng `KHOA` đang được cả hai bảng `SINH_VIEN` (qua `maKhoa`) và `GIANG_VIEN` (qua `maKhoa`) tham chiếu. Thao tác THÊM một khoa mới vào bảng `KHOA` sẽ:",
    "options": [
      "Mang dấu trừ (-) đối với bảng SINH_VIEN nhưng bắt buộc mang dấu cộng (+) đối với bảng GIANG_VIEN để bảo đảm nhân sự giảng dạy",
      "Bắt buộc có tầm ảnh hưởng là dấu cộng (+) vì hệ thống phải kiểm tra xem khoa mới thêm đã có sinh viên và giảng viên hay chưa",
      "Luôn luôn có tầm ảnh hưởng là dấu trừ (-) đối với cả hai ràng buộc khóa ngoại vì thêm khoa mới không làm bất kỳ ai bị mồ côi",
      "Bị hệ quản trị CSDL từ chối thực thi trừ khi người dùng đồng thời chèn thêm ít nhất một sinh viên và một giảng viên vào hệ thống"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a: Dù có bao nhiêu bảng con tham chiếu đến bảng KHOA thì KHOA vẫn đóng vai trò là bảng Cha. Việc THÊM một bản ghi cha mới độc lập không bao giờ làm cho bản ghi con nào hiện có bị vi phạm. Do đó luôn là dấu trừ (-).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh thấy có nhiều bảng con tham chiếu tưởng rằng thao tác Thêm ở bảng cha sẽ bị phức tạp hóa thành (+).",
      "trickWord": "Bẫy thêm bảng cha nhiều con: Luôn luôn là (-) vì sinh thêm cha không ảnh hưởng các con",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Thêm ở bảng Cha dù có 1 hay 100 bảng con tham chiếu thì vẫn luôn là DẤU TRỪ (-)!"
    }
  },
  {
    "id": "db-c4-t2-014",
    "question": "Xét quy tắc liên bộ: \"Lương của mọi nhân viên đều phải nhỏ hơn lương của trưởng phòng trực tiếp quản lý nhân viên đó\". Khi THÊM một nhân viên mới:",
    "options": [
      "Thao tác THÊM bị hệ thống khóa lại và chỉ cho phép thực hiện sau khi trưởng phòng đã ký xác nhận điện tử trên hệ thống nội bộ",
      "Thao tác THÊM trên bảng NHANVIEN hoàn toàn không cần kiểm tra (-) vì nhân viên mới vào làm luôn có mức lương khởi điểm tối thiểu",
      "Chỉ cần kiểm tra có điều kiện +(*) khi nhân viên mới thêm được bổ nhiệm vào vị trí phó trưởng phòng của một đơn vị trực thuộc",
      "Thao tác THÊM trên bảng NHANVIEN cần kiểm tra (+) vì mức lương của nhân viên mới chèn có nguy cơ cao hơn lương của trưởng phòng"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục V.3.a: Ràng buộc so sánh lương giữa các bộ trong cùng bảng NHANVIEN. Khi thêm một nhân viên mới với một mức lương cụ thể, có nguy cơ mức lương đó vượt quá lương trưởng phòng của họ. Bắt buộc phải kiểm tra (+).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ nhân viên mới lương thấp nên không cần kiểm tra.",
      "trickWord": "Bẫy nghiệp vụ lương: Thêm nhân viên mới có thể vi phạm điều kiện so sánh ➔ Kiểm tra (+)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.3.a",
      "tip": "Thêm bộ mới tham gia vào điều kiện so sánh giá trị ➔ Bắt buộc là (+)"
    }
  },
  {
    "id": "db-c4-t2-015",
    "question": "Trong CSDL `QLHANGHOA`, khi kế toán THÊM một phiếu thu mới vào bảng `PHIEU_THU`, tầm ảnh hưởng đối với ràng buộc công nợ khách hàng là gì?",
    "options": [
      "Bắt buộc kiểm tra (+) trên bảng PHIEU_THU để tính toán và cập nhật làm giảm số tiền công nợ của khách hàng trong KHACH",
      "Hoàn toàn không cần kiểm tra (-) vì việc thu thêm tiền của khách chỉ làm tăng số dư tài khoản tiền mặt của doanh nghiệp",
      "Thao tác THÊM bị hủy bỏ nếu số tiền trên phiếu thu lớn hơn tổng số tiền của tất cả các hóa đơn khách hàng đã từng mua trước đó",
      "Chỉ kiểm tra có điều kiện +(*) khi phiếu thu được thanh toán bằng hình thức chuyển khoản điện tử qua cổng thanh toán quốc tế"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục VI.4.a (Ví dụ 11): Vì congNo = Tổng HĐ - Tổng PT, khi THÊM một phiếu thu mới, tổng tiền thu tăng lên dẫn đến công nợ giảm đi. Thao tác THÊM trên PHIEU_THU bắt buộc phải kiểm tra (+) và cập nhật lại trường congNo trong bảng KHACH.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ chỉ có hóa đơn mới làm tăng nợ cần kiểm tra, còn phiếu thu là tiền về nên là (-).",
      "trickWord": "Bẫy Thêm phiếu thu: Bắt buộc là (+) vì nó trực tiếp thay đổi giá trị thuộc tính tổng hợp congNo",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.4.a",
      "tip": "Thuộc tính tổng hợp: Thao tác làm thay đổi biến số thành phần đều mang dấu (+)!"
    }
  },
  {
    "id": "db-c4-t2-016",
    "question": "Nếu ràng buộc Khóa ngoại được cấu hình với hành vi `ON DELETE CASCADE`, điều gì sẽ xảy ra khi người dùng thực thi lệnh XÓA một bản ghi ở bảng Cha?",
    "options": [
      "Thao tác xóa lập tức bị chặn lại và hệ thống trả về thông báo lỗi vi phạm tính toàn vẹn tham chiếu của cơ sở dữ liệu",
      "Hệ quản trị CSDL sẽ tự động xóa tất cả các bản ghi ở bảng Con đang tham chiếu đến bản ghi cha vừa bị xóa mà không báo lỗi",
      "Bản ghi cha bị xóa nhưng toàn bộ các bản ghi con tương ứng sẽ được hệ thống tự động gán giá trị khóa ngoại về mức mặc định 0",
      "Hệ thống sẽ sao lưu toàn bộ các bản ghi con vào một bảng tạm thời trên đĩa cứng rồi mới cho phép người dùng xóa bản ghi cha"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a & Chuẩn SQL: Hành vi CASCADE (Xóa dây chuyền): Khi một bản ghi ở bảng Cha bị xóa, DBMS sẽ tự động quét và xóa sạch tất cả các bản ghi con đang tham chiếu tới nó để bảo đảm không có bản ghi nào bị mồ côi.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm CASCADE với RESTRICT (chặn lại báo lỗi) hoặc nhầm với SET NULL.",
      "trickWord": "Bẫy ON DELETE CASCADE: TỰ ĐỘNG XÓA DÂY CHUYỀN toàn bộ các bản ghi con",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "CASCADE = Thác đổ (xóa cha ➔ xóa luôn các con); RESTRICT = Chặn đứng báo lỗi!"
    }
  },
  {
    "id": "db-c4-t2-017",
    "question": "Trong ràng buộc Khóa ngoại giữa `KET_QUA` và `MON_HOC` (`maMH` tham chiếu `MON_HOC.maMH`), thao tác XÓA một kết quả thi trong `KET_QUA` có tầm ảnh hưởng là:",
    "options": [
      "Ký hiệu kiểm tra có điều kiện +(*) vì chỉ cần kiểm tra khi điểm số của kết quả thi bị xóa có giá trị lớn hơn hoặc bằng năm",
      "Bắt buộc là dấu cộng (+) vì hệ thống phải kiểm tra xem môn học đó còn có sinh viên nào khác tham gia dự thi nữa hay không",
      "Luôn luôn là dấu trừ (-) vì xóa một kết quả thi hoàn toàn không gây ảnh hưởng đến sự tồn tại hợp lệ của môn học trong danh mục",
      "Thao tác xóa trên bảng con luôn bị cấm tuyệt đối bởi tất cả các hệ quản trị CSDL quan hệ để phục vụ mục đích lưu trữ lịch sử"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a: KET_QUA là bảng Con tham chiếu đến bảng Cha MON_HOC. Xóa một bản ghi con trong KET_QUA không bao giờ ảnh hưởng đến môn học ở bảng Cha. Do đó thao tác Xóa trên bảng Con luôn là dấu trừ (-).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ điểm thi quan trọng không được xóa hoặc nhầm Xóa ở con là (+).",
      "trickWord": "Bẫy Xóa bảng con KET_QUA: Mang dấu (-) đối với ràng buộc khóa ngoại",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Xóa bảng Con đối với Khóa ngoại ➔ LUÔN LUÔN LÀ DẤU TRỪ (-)!"
    }
  },
  {
    "id": "db-c4-t2-018",
    "question": "Xét ràng buộc liên thuộc tính trong bảng `HOA_DON`: `ngayHD <= ngayXuat`. Khi XÓA một hóa đơn bán hàng, tầm ảnh hưởng trên bảng `HOA_DON` là:",
    "options": [
      "Đánh dấu dấu cộng (+) vì hệ thống bắt buộc phải kiểm tra xem hàng hóa đã được xuất kho thực tế ra khỏi kho bãi hay chưa",
      "Đánh dấu dấu cộng (+) vì việc xóa một hóa đơn có thể làm mất tính liên tục của chuỗi số thứ tự ngày tháng phát hành hóa đơn",
      "Đánh dấu kiểm tra có điều kiện +(*) vì chỉ cần kiểm tra khi ngày xuất hàng của hóa đơn bị xóa trùng khớp với ngày hiện tại",
      "Đánh dấu dấu trừ (-) vì việc xóa bỏ một dòng không thể làm nảy sinh bất kỳ sự mâu thuẫn thời gian nào trên các dòng còn lại"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục V.2.a: Ràng buộc liên thuộc tính ngayHD <= ngayXuat chỉ có hiệu lực trên từng dòng riêng lẻ của HOA_DON. Khi xóa một dòng, bản thân dòng đó biến mất, các dòng khác không bị tác động. Do đó Xóa là dấu trừ (-).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh liên hệ sang các thủ tục xuất kho thực tế nên chọn nhầm (+).",
      "trickWord": "Bẫy Xóa liên thuộc tính: Luôn là dấu trừ (-) vì mỗi dòng kiểm tra độc lập",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.2.a",
      "tip": "Ràng buộc liên thuộc tính trong 1 bảng: Thêm = (+); XÓA = (-); Sửa = (+*(cột_tham_gia))!"
    }
  },
  {
    "id": "db-c4-t2-019",
    "question": "Trong cấu hình mặc định (RESTRICT / NO ACTION), nếu cố tình XÓA một sinh viên đang có điểm trong bảng `KET_QUA`, điều gì sẽ xảy ra?",
    "options": [
      "Lệnh DELETE bị từ chối thực thi và DBMS báo lỗi vi phạm ràng buộc khóa ngoại (Foreign key violation error) ngay lập tức",
      "Hệ thống tự động xóa toàn bộ điểm thi của sinh viên đó trong bảng KET_QUA rồi sau đó mới tiến hành xóa sinh viên trong bảng",
      "Sinh viên bị xóa thành công và các bản ghi điểm của sinh viên đó trong bảng KET_QUA sẽ tự động được gán mã sinh viên về NULL",
      "Thao tác xóa vẫn được chấp nhận nhưng hệ thống sẽ gửi một email cảnh báo đến tài khoản quản trị viên cấp cao của hệ thống"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a & Section 0: Khi xóa ở bảng Cha (SINH_VIEN) mà bảng Con (KET_QUA) đang có bản ghi tham chiếu, theo cơ chế bảo vệ tham chiếu mặc định (RESTRICT/NO ACTION), DBMS sẽ lập tức từ chối lệnh xóa và phát sinh lỗi vi phạm khóa ngoại.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm cơ chế mặc định với CASCADE hoặc SET NULL.",
      "trickWord": "Bẫy xóa bảng Cha mặc định: BỊ TỪ CHỐI THỰC THI (RESTRICT), báo lỗi vi phạm FK",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Mặc định trong RDBMS khi xóa Cha đang có Con ➔ CHẶN LẠI VÀ BÁO LỖI!"
    }
  },
  {
    "id": "db-c4-t2-020",
    "question": "Trong CSDL `QLHANGHOA`, xét ràng buộc: \"Mỗi hóa đơn phải tương ứng với một đơn đặt hàng\". Thao tác XÓA một đơn đặt hàng trong `DAT_HANG` sẽ:",
    "options": [
      "Hoàn toàn không cần kiểm tra (-) vì đơn đặt hàng là chứng từ của khách hàng, khách có toàn quyền hủy đơn hàng mà không cần hỏi",
      "Cần phải kiểm tra (+) vì nếu đơn đặt hàng đó đã được giải quyết bằng một hóa đơn trong HOA_DON thì việc xóa đơn sẽ vi phạm FK",
      "Luôn luôn bị cấm vĩnh viễn vì trong thương mại điện tử không có bất kỳ thao tác xóa vật lý nào được phép thực hiện trên bảng",
      "Chỉ kiểm tra có điều kiện +(*) khi tổng giá trị các mặt hàng được đặt trong đơn hàng đó có giá trị vượt quá mười triệu đồng"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a & Section I.1.b: DAT_HANG là bảng Cha được HOA_DON tham chiếu. Khi XÓA một đơn đặt hàng trong DAT_HANG, nếu đơn đó đã có hóa đơn xuất ra thì việc xóa đơn đặt hàng sẽ làm hóa đơn bị mất tham chiếu. Do đó Xóa trên DAT_HANG là (+).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ đơn hàng có thể hủy tùy ý mà quên mất ràng buộc khóa ngoại với hóa đơn đã lập.",
      "trickWord": "Bẫy Xóa ở bảng DAT_HANG: Là bảng CHA của HOA_DON nên bắt buộc phải kiểm tra (+)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Bảng bị tham chiếu (Cha) ➔ Xóa bản ghi LUÔN LUÔN PHẢI KIỂM TRA (+)!"
    }
  },
  {
    "id": "db-c4-t2-021",
    "question": "Về mặt bản chất lý thuyết trong hệ CSDL quan hệ, một thao tác SỬA (UPDATE) một bộ dữ liệu có thể được xem tương đương với cặp thao tác nào?",
    "options": [
      "Một thao tác TẠO BẢNG (CREATE TABLE) bản sao mới và sao chép toàn bộ các bản ghi sang bảng mới nhằm tránh bị xung đột dữ liệu",
      "Một thao tác TRUY VẤN (SELECT) dữ liệu lên bộ nhớ đệm kết hợp với việc khóa cứng toàn bộ bảng dữ liệu cho đến khi đăng xuất",
      "Một thao tác XÓA (DELETE) bộ dữ liệu cũ theo sau ngay bởi một thao tác THÊM (INSERT) bộ dữ liệu mới mang các giá trị vừa sửa",
      "Một thao tác GIẢI PHÓNG BỘ NHỚ (DEALLOCATE) vùng nhớ RAM của bộ xử lý mà không cần quan tâm đến các giá trị khóa trên ổ đĩa"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục III.1.a & V.3.a: Về mặt nguyên lý mô hình dữ liệu quan hệ, thao tác Sửa (UPDATE) có thể phân rã tương đương thành một thao tác Xóa (DELETE) bộ cũ và Thêm (INSERT) bộ mới. Vì vậy trong Trigger SQL Server, bảng `inserted` chứa giá trị mới và bảng `deleted` chứa giá trị cũ.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ Sửa là ghi đè ô nhớ vật lý tại chỗ (in-place modification) mà không hiểu bản chất quan hệ là Delete + Insert.",
      "trickWord": "Bẫy bản chất UPDATE: Tương đương một chuỗi DELETE (bộ cũ) + INSERT (bộ mới)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a",
      "tip": "UPDATE = DELETE (bộ cũ) + INSERT (bộ mới) ➔ Hiểu điều này sẽ giải thích tại sao Trigger có cả 2 bảng tạm!"
    }
  },
  {
    "id": "db-c4-t2-022",
    "question": "Trong bảng `KET_QUA(maSV, maMH, lanThi, diem)`, nếu người dùng thực hiện câu lệnh UPDATE chỉ sửa cột `diem`, những ràng buộc nào cần kiểm tra?",
    "options": [
      "Không cần kiểm tra bất kỳ ràng buộc nào vì điểm số thi là thuộc tính thay đổi liên tục theo từng đợt chấm thi của giảng viên",
      "Bắt buộc phải kiểm tra lại cả ràng buộc Khóa chính (maSV, maMH, lanThi) lẫn ràng buộc Miền giá trị của thuộc tính điểm số thi",
      "Chỉ kiểm tra ràng buộc Khóa ngoại tham chiếu đến bảng SINH_VIEN và bảng MON_HOC vì điểm số đã được gắn liền với sinh viên đó",
      "Chỉ kiểm tra ràng buộc Miền giá trị của thuộc tính diem (0 <= diem <= 10), hoàn toàn không cần kiểm tra lại ràng buộc Khóa chính"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục V.1.a & III.1.a: Cột diem không tham gia vào khóa chính (maSV, maMH, lanThi) và cũng không phải khóa ngoại. Khi chỉ sửa cột diem, DBMS chỉ kiểm tra ràng buộc miền giá trị của diem (0 <= diem <= 10). Tầm ảnh hưởng là +*(diem).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ lệnh UPDATE luôn phải kiểm tra lại Khóa chính.",
      "trickWord": "Bẫy chỉ sửa thuộc tính không khóa: Chỉ kích hoạt kiểm tra ràng buộc của chính thuộc tính đó",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.1.a",
      "tip": "Sửa cột nào ➔ Chỉ kiểm tra các RBTV có mặt cột đó!"
    }
  },
  {
    "id": "db-c4-t2-023",
    "question": "Nếu người dùng thực hiện lệnh UPDATE sửa đổi giá trị cột `lanThi` trong bảng `KET_QUA`, những ràng buộc nào BẮT BUỘC phải được DBMS kiểm tra?",
    "options": [
      "Cả ràng buộc Khóa chính phức hợp (maSV, maMH, lanThi) và ràng buộc Miền giá trị (lanThi <= 2) đều bắt buộc phải được kiểm tra",
      "Chỉ duy nhất ràng buộc Miền giá trị của lanThi cần kiểm tra, còn khóa chính thì không bị ảnh hưởng do mã sinh viên vẫn giữ nguyên",
      "Chỉ kiểm tra ràng buộc Khóa ngoại tham chiếu sang bảng SINH_VIEN để xem sinh viên đó có đủ tư cách dự thi lại lần sau hay không",
      "Hệ thống sẽ tự động khóa thuộc tính lanThi và không bao giờ cho phép thực thi lệnh UPDATE trên cột này dưới mọi hình thức nào"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục V.1.a & V.3.a: Thuộc tính lanThi vừa là thành phần của khóa chính phức hợp (maSV, maMH, lanThi), vừa chịu ràng buộc miền giá trị lanThi <= 2. Do đó khi sửa lanThi, DBMS bắt buộc phải kiểm tra CẢ HAI ràng buộc này.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh chỉ nhớ một trong hai ràng buộc (quên mất lanThi nằm trong khóa chính hoặc quên ràng buộc lanThi <= 2).",
      "trickWord": "Bẫy thuộc tính đa vai trò: lanThi vừa thuộc PK vừa có miền giá trị ➔ Kiểm tra CẢ HAI",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.1.a & V.3.a",
      "tip": "Một cột có thể tham gia vào nhiều RBTV khác nhau ➔ Sửa cột đó phải kiểm tra TẤT CẢ các RBTV liên quan!"
    }
  },
  {
    "id": "db-c4-t2-024",
    "question": "Trong quan hệ Khóa ngoại `SINH_VIEN.maKhoa -> KHOA.makhoa`, thao tác SỬA thuộc tính `makhoa` trong bảng `KHOA` có tầm ảnh hưởng như thế nào?",
    "options": [
      "Đánh dấu dấu trừ (-) vì bảng KHOA là bảng cha, người quản trị có toàn quyền đổi mã khoa mà không cần đối chiếu với bảng sinh viên",
      "Đánh dấu +*(makhoa) trên bảng KHOA vì việc đổi mã khoa sẽ làm các sinh viên đang mang mã khoa cũ trong SINH_VIEN có nguy cơ mồ côi",
      "Đánh dấu dấu cộng (+) trên cả hai cột makhoa và tenkhoa của bảng KHOA bất kể thuộc tính nào bị thay đổi nội dung bên trong bảng",
      "Hệ thống luôn tự động từ chối mọi thao tác sửa đổi trên cột khóa chính của bảng cha bất kể bảng con có chứa dữ liệu hay không"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a: Sửa khóa chính ở bảng Cha có nguy cơ làm các bản ghi ở bảng Con bị mất liên kết (mồ côi). Do đó tầm ảnh hưởng trên bảng Cha KHOA đối với thao tác Sửa là +*(makhoa).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ bảng Cha thì sửa thoải mái (-) hoặc nghĩ DBMS cấm sửa hoàn toàn.",
      "trickWord": "Bẫy sửa khóa chính bảng Cha: Là +*(makhoa) vì ảnh hưởng trực tiếp đến tham chiếu con",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Sửa khóa chính của bảng Cha ➔ Bắt buộc kiểm tra +*(PK) đối với các bảng Con!"
    }
  },
  {
    "id": "db-c4-t2-025",
    "question": "Khi nhân viên kế toán sửa giá trị cột `trigiaHD` trong bảng `HOA_DON`, tác động của thao tác này lên ràng buộc công nợ khách hàng là gì?",
    "options": [
      "Hệ thống tự động chuyển số tiền chênh lệch vào tài khoản ngân hàng của khách hàng mà không cần cập nhật vào bảng khách hàng KHACH",
      "Hoàn toàn không cần kiểm tra (-) vì trị giá hóa đơn chỉ là con số in ra giấy, không làm thay đổi các khoản tiền khách đã nộp trước",
      "Bắt buộc kiểm tra +*(trigiaHD) trên HOA_DON và tính toán lại công nợ của khách hàng tương ứng trong bảng KHACH theo công thức chuẩn",
      "Chỉ kiểm tra có điều kiện khi hóa đơn đó có trị giá mới sửa nhỏ hơn số tiền đặt cọc ban đầu được ghi trên phiếu thu tương ứng"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục VI.4.a: Ràng buộc công nợ: congNo = SUM(trigiaHD) - SUM(soTien). Khi sửa trigiaHD của một hóa đơn, tổng tiền mua thay đổi dẫn đến công nợ của khách hàng mua đơn đó phải thay đổi theo. Do đó tầm ảnh hưởng là +*(trigiaHD).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ sửa hóa đơn thì chỉ cập nhật bảng hóa đơn, quên mất thuộc tính công nợ ở bảng KHACH bị tác động.",
      "trickWord": "Bẫy thuộc tính tổng hợp khi Sửa: Sửa trigiaHD ➔ Phải cập nhật lại congNo ở KHACH",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.4.a",
      "tip": "Thuộc tính tổng hợp phụ thuộc vào trigiaHD ➔ Sửa trigiaHD mang dấu +*(trigiaHD)!"
    }
  },
  {
    "id": "db-c4-t2-026",
    "question": "So sánh hai điều kiện: (1) `ngSinh <= CURRENT_DATE` và (2) `ngayVaoLam >= ngSinh + 18`. Phân loại học thuật chuẩn của chúng lần lượt là:",
    "options": [
      "Điều kiện (1) là RBTV Liên bộ trong một quan hệ; Điều kiện (2) là RBTV Liên thuộc tính liên quan hệ giữa hai bảng nhân sự khác",
      "Cả hai điều kiện đều là RBTV về Miền giá trị vì chúng đều quy định phạm vi hợp lệ của các giá trị kiểu dữ liệu ngày tháng năm",
      "Cả hai điều kiện đều là RBTV Liên thuộc tính vì cả hai đều sử dụng các phép toán so sánh lớn hơn hoặc nhỏ hơn trong biểu thức",
      "Điều kiện (1) là RBTV về Miền giá trị; Điều kiện (2) là RBTV Liên thuộc tính vì có sự so sánh giữa hai cột thuộc tính khác nhau"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục V.1.a & V.2.a: Điều kiện (1) chỉ so sánh 1 thuộc tính ngSinh với hàm thời gian hệ thống (hằng số thời gian) ➔ Miền giá trị. Điều kiện (2) so sánh giữa 2 thuộc tính ngSinh và ngayVaoLam trên cùng một bộ ➔ Liên thuộc tính trong 1 quan hệ.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người thấy cả hai đều so sánh ngày tháng nên gộp chung thành miền giá trị.",
      "trickWord": "Bẫy so sánh ngày tháng: 1 cột vs Hằng số = Miền giá trị; 2 cột với nhau = Liên thuộc tính",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.1.a & V.2.a",
      "tip": "Cột so với Hằng số/Hàm hệ thống ➔ Miền giá trị; Cột so với Cột ➔ Liên thuộc tính!"
    }
  },
  {
    "id": "db-c4-t2-027",
    "question": "Xét quy tắc: \"Mỗi lớp học chỉ có sĩ số tối đa là 40 sinh viên\". Trong phân loại Ràng buộc toàn vẹn, đây là loại ràng buộc nào?",
    "options": [
      "RBTV liên bộ trong cùng một quan hệ vì việc kiểm soát sĩ số đòi hỏi phải đếm tổng số các bộ dữ liệu có cùng mã lớp trong bảng",
      "RBTV về miền giá trị vì quy định giới hạn số lượng sinh viên không được vượt quá giá trị số nguyên bốn mươi trên hệ thống",
      "RBTV liên thuộc tính vì cần liên kết giữa thuộc tính mã lớp học và thuộc tính mã sinh viên trên cùng một bản ghi dữ liệu đơn lẻ",
      "RBTV liên quan hệ vì lớp học thuộc về khoa quản lý còn sinh viên lại do phòng công tác sinh viên của nhà trường quản lý hồ sơ"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục V.3.a: Quy tắc \"sĩ số tối đa 40\" đòi hỏi phải đếm số lượng sinh viên (số bộ) có cùng mã lớp: COUNT(maSV) <= 40 GROUP BY maLop. Vì phải liên kết và tổng hợp dữ liệu trên NHIỀU BỘ trong cùng bảng nên đây là RBTV liên bộ.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhìn thấy con số 40 là chọn ngay Miền giá trị.",
      "trickWord": "Bẫy sĩ số lớp học: Là RBTV LIÊN BỘ (Inter-tuple) vì phải đếm nhiều dòng",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.3.a",
      "tip": "Có thao tác gom nhóm đếm dòng (COUNT/SUM nhiều dòng) ➔ RBTV LIÊN BỘ!"
    }
  },
  {
    "id": "db-c4-t2-028",
    "question": "Trong CSDL `HSSINHVIEN`, điều kiện: \"Mỗi sinh viên chỉ được thi tối đa 2 lần cho một môn học (`lanThi <= 2`)\". Ràng buộc này là:",
    "options": [
      "RBTV liên thuộc tính vì số lần thi bắt buộc phải gắn liền với kết quả điểm thi và mã số của môn học tương ứng trong cùng một dòng",
      "RBTV về miền giá trị của thuộc tính lanThi trong bảng KET_QUA vì nó giới hạn trực tiếp miền giá trị hợp lệ của cột này là {1, 2}",
      "RBTV liên bộ liên quan hệ vì cần phải đối chiếu với quy chế đào tạo tín chỉ được lưu trữ trong bảng danh mục quy định của trường",
      "RBTV phụ thuộc tồn tại vì việc thi lần hai bắt buộc phải phụ thuộc vào việc sinh viên đó đã từng bị điểm kém ở lần thi đầu tiên"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục II.1.a (Ví dụ 1, C2) & V.1.a: Giáo trình định nghĩa rõ ràng: \"C2: Mỗi sinh viên chỉ được thi tối đa hai lần cho một môn học (Ràng buộc miền giá trị lanThi <= 2)\".",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ \"thi tối đa 2 lần\" là phải đếm số dòng (liên bộ), nhưng trong thiết kế của giáo trình, số lần thi được lưu thành cột `lanThi` với miền giá trị {1, 2}.",
      "trickWord": "Bẫy giáo trình chuẩn: lanThi <= 2 được xếp vào RÀNG BUỘC MIỀN GIÁ TRỊ của thuộc tính lanThi",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục II.1.a (C2) & V.1.a",
      "tip": "Đọc kỹ giáo trình: Ràng buộc C2 lanThi <= 2 là Ràng buộc MIỀN GIÁ TRỊ!"
    }
  },
  {
    "id": "db-c4-t2-029",
    "question": "Trong quan hệ `CAN_BO(maCB, chucVu, phuCap)`, xét quy tắc: \"Nếu chức vụ là Trưởng khoa thì phụ cấp phải lớn hơn 2 triệu\". Đây là loại RBTV:",
    "options": [
      "RBTV liên bộ vì hệ thống cần phải so sánh mức phụ cấp của trưởng khoa này với mức phụ cấp của các trưởng khoa khác trong trường",
      "RBTV về miền giá trị vì nó quy định số tiền phụ cấp của cán bộ phải là một số nguyên dương lớn hơn hai triệu đồng thực tế",
      "RBTV liên thuộc tính trong một quan hệ vì nó ràng buộc mối liên hệ giá trị giữa hai cột chucVu và phuCap trên cùng một cán bộ",
      "RBTV liên quan hệ vì chức vụ của cán bộ được quyết định bởi ban giám hiệu còn tiền phụ cấp lại do phòng tài chính chi trả lương"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục V.2.a: Quy tắc có dạng: nếu chucVu = \"Trưởng khoa\" thì phuCap > 2000000. Đây là điều kiện ràng buộc giữa hai thuộc tính chucVu và phuCap trên CÙNG MỘT BỘ (dòng) của quan hệ CAN_BO. Do đó đây là RBTV liên thuộc tính trong 1 quan hệ.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhìn thấy số tiền 2 triệu lại nhầm sang miền giá trị của phụ cấp.",
      "trickWord": "Bẫy phụ cấp theo chức vụ: Là RBTV LIÊN THUỘC TÍNH (chucVu chi phối phuCap trên cùng 1 dòng)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.2.a",
      "tip": "Nếu A thì B (trong cùng 1 dòng) ➔ RBTV LIÊN THUỘC TÍNH!"
    }
  },
  {
    "id": "db-c4-t2-030",
    "question": "Nguyên lý toàn vẹn thực thể (Entity Integrity) trong mô hình cơ sở dữ liệu quan hệ đưa ra yêu cầu cốt lõi nào đối với Khóa chính?",
    "options": [
      "Khi một bảng có nhiều khóa ứng viên thì tất cả các khóa ứng viên đó đều bắt buộc phải được chọn làm khóa chính của quan hệ",
      "Khóa chính bắt buộc phải là một số nguyên tự tăng và không bao giờ được phép sử dụng các chuỗi ký tự làm định danh bản ghi",
      "Khóa chính chỉ cần duy nhất trên các dòng có dữ liệu, còn các dòng đang cập nhật dở dang thì được phép chứa giá trị rỗng NULL",
      "Không một thuộc tính nào cấu thành nên Khóa chính được phép mang giá trị NULL và mọi bộ trong quan hệ phải có khóa phân biệt"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục IV.1.a & Section 0: Toàn vẹn thực thể (Entity Integrity) quy định: Khóa chính dùng để định danh duy nhất từng thực thể, do đó không một thành phần nào của khóa chính được phép mang giá trị NULL (NOT NULL) và không có hai bộ nào có khóa trùng nhau (UNIQUE).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ khóa chính phức hợp thì 1 cột NULL cũng được miễn là các cột khác có giá trị.",
      "trickWord": "Bẫy toàn vẹn thực thể: KHÔNG MỘT THUỘC TÍNH NÀO trong khóa chính được phép NULL",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục IV.1.a & Section 0",
      "tip": "Entity Integrity: Khóa chính = DUY NHẤT + TUYỆT ĐỐI KHÔNG ĐƯỢC NULL!"
    }
  },
  {
    "id": "db-c4-t2-031",
    "question": "Cho quan hệ `NHANVIEN(maNV, hoten, maNQL)` trong đó `maNQL` là mã người quản lý tham chiếu đến `maNV` của chính bảng đó. Đây là:",
    "options": [
      "Ràng buộc Khóa ngoại tự tham chiếu (quan hệ một ngôi) với bối cảnh là duy nhất 1 quan hệ NHANVIEN nhưng có vai trò kép Cha - Con",
      "Ràng buộc liên thuộc tính trong cùng một dòng dữ liệu vì cả maNV và maNQL đều thuộc về cùng một nhân viên đang làm việc cụ thể",
      "Một lỗi thiết kế lược đồ nghiêm trọng (vòng lặp vô tận) và hệ quản trị CSDL quan hệ tuyệt đối không hỗ trợ mô hình khóa này",
      "Ràng buộc miền giá trị vì maNQL chỉ cần tuân theo định dạng chuỗi ký tự ký hiệu mã nhân viên chuẩn theo quy định doanh nghiệp"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a & Section 0: Đây là mối quan hệ phản xạ / tự tham chiếu (Recursive / Self-referencing Foreign Key). Bảng NHANVIEN vừa đóng vai trò bảng Cha (chứa maNV của người quản lý) vừa đóng vai trò bảng Con (chứa maNQL của nhân viên cấp dưới).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh thấy 2 cột trong cùng bảng tưởng là liên thuộc tính, hoặc nghĩ tự tham chiếu là lỗi vòng lặp.",
      "trickWord": "Bẫy Khóa ngoại tự tham chiếu: Là RÀNG BUỘC KHÓA NGOẠI (Unary relationship), không phải liên thuộc tính",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Cột này tham chiếu đến khóa chính của chính bảng đó = Khóa ngoại tự tham chiếu (Self-referencing FK)!"
    }
  },
  {
    "id": "db-c4-t2-032",
    "question": "Trong CSDL `QLHANGHOA`, quan hệ `CTIET_HD` có khóa chính là `(soHD, maHH)`. Nhận định nào sau đây là CHUẨN XÁC NHẤT về các phụ thuộc tồn tại?",
    "options": [
      "Tồn tại 2 phụ thuộc tồn tại theo Dấu hiệu 2 vì soHD và maHH là các thuộc tính độc lập không liên quan gì đến khóa chính bảng con",
      "Tồn tại đồng thời 2 phụ thuộc tồn tại theo Dấu hiệu 1: {soHD} ⊆ {soHD, maHH} vào HOA_DON và {maHH} ⊆ {soHD, maHH} vào HANG_HOA",
      "Chỉ có duy nhất 1 phụ thuộc tồn tại vào bảng HOA_DON, còn thuộc tính maHH chỉ là một mã số phụ dùng để phân biệt các dòng đơn",
      "CTIET_HD là bảng cha độc lập cung cấp thông tin cho cả hai bảng HOA_DON và HANG_HOA thông qua cơ chế kế thừa dữ liệu đa tầng"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a & I.1.b: Khóa chính của CTIET_HD là K = {soHD, maHH}. Khóa chính của HOA_DON là K1 = {soHD} (K1 ⊆ K). Khóa chính của HANG_HOA là K2 = {maHH} (K2 ⊆ K). Cả hai đều thỏa mãn Dấu hiệu (1) K_i ⊆ K_con.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm sang Dấu hiệu 2 vì nghĩ mỗi cột là một khóa ngoại độc lập.",
      "trickWord": "Bẫy Dấu hiệu 1 kép: Cả hai khóa cha đều là tập con của khóa chính phức hợp bảng con",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Bảng chi tiết có PK phức hợp (A, B) với A là PK cha 1, B là PK cha 2 ➔ Cả 2 đều là Dấu hiệu 1 (K1 ⊆ K2)!"
    }
  },
  {
    "id": "db-c4-t2-033",
    "question": "Khi thiết lập hành vi `ON DELETE SET NULL` cho khóa ngoại `maKhoa` trong bảng `SINH_VIEN`, điều kiện TIÊN QUYẾT bắt buộc phải thỏa mãn là gì?",
    "options": [
      "Thuộc tính maKhoa bắt buộc phải tham gia vào việc cấu thành nên một phần của khóa chính trong quan hệ sinh viên SINH_VIEN",
      "Bảng KHOA phải có ít nhất một bản ghi chứa giá trị tên khoa là chuỗi rỗng để hệ thống trỏ các sinh viên mồ côi về đó",
      "Thuộc tính maKhoa trong bảng SINH_VIEN bắt buộc phải được phép nhận giá trị NULL (không được gắn ràng buộc NOT NULL)",
      "Khóa chính của bảng KHOA phải được định nghĩa bằng kiểu dữ liệu số nguyên tự tăng thì mới có thể thiết lập giá trị NULL"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a & Chuẩn SQL: Nếu muốn sử dụng hành vi ON DELETE SET NULL, cột khóa ngoại tương ứng ở bảng con bắt buộc phải nullable (cho phép NULL). Nếu cột đó bị ràng buộc NOT NULL thì không thể gán giá trị NULL khi bản ghi cha bị xóa.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh không để ý điều kiện tiên quyết về khả năng nhận giá trị NULL của cột con.",
      "trickWord": "Bẫy SET NULL: Cột khóa ngoại BẮT BUỘC PHẢI NULLABLE (không có NOT NULL)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Muốn SET NULL thì cột đó phải cho phép NULL! Nếu cột NOT NULL ➔ Lỗi cấu hình ngay khi tạo bảng."
    }
  },
  {
    "id": "db-c4-t2-034",
    "question": "Trong chuẩn SQL và lý thuyết CSDL quan hệ hiện đại, một Khóa ngoại có BẮT BUỘC phải tham chiếu đến Khóa chính của bảng cha hay không?",
    "options": [
      "Khóa ngoại chỉ cần tham chiếu đến một bảng có cùng số lượng cột mà không cần quan tâm đến tính duy nhất của thuộc tính cha",
      "Bắt buộc 100%, khóa ngoại chỉ có thể tham chiếu duy nhất đến thuộc tính khóa chính PRIMARY KEY đã được khai báo ở bảng cha",
      "Khóa ngoại có thể tham chiếu đến một cột bất kỳ ở bảng cha kể cả khi cột đó chứa nhiều giá trị trùng lặp và giá trị NULL",
      "Không bắt buộc, khóa ngoại có thể tham chiếu đến bất kỳ cột nào có ràng buộc UNIQUE (khóa ứng viên duy nhất) ở bảng cha"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a & Chuẩn ANSI SQL: Khóa ngoại không bắt buộc phải tham chiếu đến PRIMARY KEY, mà có thể tham chiếu đến bất kỳ thuộc tính/tập thuộc tính nào được định nghĩa là duy nhất (UNIQUE constraint) ở bảng Cha (tức là một khóa ứng viên bất kỳ).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Đa số người học nghĩ khóa ngoại chỉ được phép tham chiếu đến PRIMARY KEY.",
      "trickWord": "Bẫy định nghĩa Khóa ngoại: Có thể tham chiếu đến PRIMARY KEY HOẶC UNIQUE (Khóa ứng viên)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Khóa ngoại tham chiếu đến Khóa chính HOẶC Khóa ứng viên duy nhất (UNIQUE) của bảng Cha!"
    }
  },
  {
    "id": "db-c4-t2-035",
    "question": "Giả sử Bảng A có khóa ngoại trỏ sang B, và Bảng B cũng có khóa ngoại trỏ sang A (đều có NOT NULL). Thách thức lớn nhất khi chèn dữ liệu là gì?",
    "options": [
      "Rơi vào bế tắc con gà và quả trứng: Không thể chèn vào A trước vì thiếu B, và cũng không thể chèn vào B trước vì thiếu A",
      "Hệ quản trị CSDL sẽ tự động hợp nhất hai bảng A và B thành một bảng duy nhất để xóa bỏ vĩnh viễn sự tham chiếu chéo này",
      "Thao tác truy vấn SELECT sẽ bị lặp vô tận và làm treo toàn bộ máy chủ cơ sở dữ liệu ngay khi có yêu cầu đọc dữ liệu bảng",
      "Khóa ngoại của cả hai bảng sẽ tự động biến thành khóa chính và làm mất đi toàn bộ các khóa chính đã được khai báo từ trước"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a & Chuẩn SQL: Tham chiếu chéo (Circular Foreign Keys) với NOT NULL gây ra bế tắc khi chèn dữ liệu ban đầu. Để giải quyết, người ta phải dùng cơ chế hoãn kiểm tra ràng buộc (DEFERRABLE INITIALLY DEFERRED) hoặc tạm thời cho phép NULL khi chèn rồi cập nhật sau.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ SELECT bị lặp vô tận (nhầm sang vòng lặp con trỏ) mà không nhận ra bế tắc xảy ra ngay khi INSERT.",
      "trickWord": "Bẫy tham chiếu chéo: BẾ TẮC KHI CHÈN (Con gà - Quả trứng), cần hoãn kiểm tra ràng buộc",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Tham chiếu chéo 2 chiều ➔ Không chèn được bình thường nếu không có DEFERRED hoặc NULL!"
    }
  },
  {
    "id": "db-c4-t2-036",
    "question": "Trong CSDL `HSSINHVIEN(maSV, hotenSV, nam, ...)`, quy tắc: \"Mọi sinh viên là nữ (`nam = false`) đều không tham gia NVQS\" được viết là:",
    "options": [
      "∀s ∈ SINH_VIEN: (s.nam = false ∧ s.thamGiaNVQS = false) (bắt buộc toàn bộ sinh viên trong trường đều phải là nữ)",
      "∀s ∈ SINH_VIEN: (s.nam = false → s.thamGiaNVQS = false) (lượng từ với mọi kết hợp cùng phép kéo theo điều kiện)",
      "∃s ∈ SINH_VIEN: (s.nam = false → s.thamGiaNVQS = false) (chỉ cần tồn tại một sinh viên nữ không đi nghĩa vụ quân sự)",
      "∀s ∈ SINH_VIEN: (s.nam = true ∨ s.thamGiaNVQS = true) (biểu thức đảo ngược logic hoàn toàn không tương đương quy tắc)"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục III.1.a: Quy tắc \"Mọi sinh viên thỏa tính chất P thì thỏa tính chất Q\" được viết bằng ∀s ∈ R: (P(s) → Q(s)). Ở đây P là s.nam = false, Q là s.thamGiaNVQS = false.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn phương án dùng dấu hội (∧) mà không hiểu nó bắt buộc toàn trường phải là nữ.",
      "trickWord": "Bẫy mệnh đề điều kiện: ∀ đi với → (Nếu là nữ THÌ không đi NVQS)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a",
      "tip": "Nếu là A thì phải là B ➔ ∀x: (A(x) → B(x))!"
    }
  },
  {
    "id": "db-c4-t2-037",
    "question": "Biểu thức logic vị từ biểu diễn quy tắc: \"Với mọi môn học có số tiết lý thuyết lớn hơn 30 thì số tiết thực hành phải lớn hơn 0\" là:",
    "options": [
      "∃m ∈ MON_HOC: (m.soTietLT > 30 → m.soTietTH > 0) (chỉ cần tìm được ít nhất một môn học thỏa mãn điều kiện tiết học này)",
      "∀m ∈ MON_HOC: (m.soTietLT > 30 ∧ m.soTietTH > 0) (yêu cầu tất cả các môn học trong trường đều phải có lý thuyết trên ba mươi)",
      "∀m ∈ MON_HOC: (m.soTietLT > 30 → m.soTietTH > 0) (sử dụng phép kéo theo để chỉ lọc những môn có lý thuyết nhiều)",
      "∀m ∈ MON_HOC: (m.soTietLT ≤ 30 ∧ m.soTietTH = 0) (mệnh đề phủ định hoàn toàn điều kiện chuẩn được đặt ra trong đề bài)"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục V.2.a & III.1.a: \"Với mọi môn học: nếu soTietLT > 30 thì soTietTH > 0\" chuẩn xác là: ∀m ∈ MON_HOC: (m.soTietLT > 30 → m.soTietTH > 0).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh lại chọn phép hội (∧) và làm cho các môn có soTietLT <= 30 bị xem là vi phạm!",
      "trickWord": "Bẫy kéo theo: m.soTietLT > 30 → m.soTietTH > 0",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.2.a",
      "tip": "Môn có soTietLT <= 30 thì tiền đề sai ➔ Mệnh đề kéo theo (→) HIỂN NHIÊN ĐÚNG!"
    }
  },
  {
    "id": "db-c4-t2-038",
    "question": "Để tìm các bản ghi vi phạm quy tắc \"Nếu khách hàng có điểm tín nhiệm dưới 50 thì không được phép vay vốn\", thuật toán quét tìm kiếm:",
    "options": [
      "Toàn bộ tất cả các bản ghi hiện có trong bảng khách hàng bất kể điểm tín nhiệm và tình trạng vay vốn của khách hàng đó",
      "Các bản ghi có DiemTinNhiem >= 50 VÀ ĐượcChoVay = false (tìm các khách hàng có điểm cao nhưng không có nhu cầu vay tiền)",
      "Các bản ghi có DiemTinNhiem < 50 VÀ ĐượcChoVay = false (tìm các khách hàng tuân thủ đúng quy định tín dụng của ngân hàng)",
      "Các bản ghi có DiemTinNhiem < 50 VÀ ĐượcChoVay = true (tìm các trường hợp tiền đề đúng nhưng kết luận bị vi phạm)"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục III.1.a & Section 0: Ràng buộc là: DiemTinNhiem < 50 → ĐượcChoVay = false. Để tìm bản ghi vi phạm (phủ định của P → Q), ta tìm bản ghi thỏa mãn P ∧ ¬Q: DiemTinNhiem < 50 VÀ ĐượcChoVay = true.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm tìm bản ghi vi phạm với tìm bản ghi đúng, hoặc phủ định cả tiền đề.",
      "trickWord": "Bẫy thuật toán kiểm tra vi phạm: Tìm P đúng mà Q sai (Diem < 50 ∧ ChoVay = true)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a",
      "tip": "Bắt quả tang vi phạm ➔ Tiền đề đúng (P) nhưng Hành động sai (¬Q)!"
    }
  },
  {
    "id": "db-c4-t2-039",
    "question": "Trong logic toán học, khẳng định nào sau đây là CHÍNH XÁC khi so sánh giữa hai mệnh đề: $\\forall x \\exists y, P(x, y)$ và $\\exists y \\forall x, P(x, y)$?",
    "options": [
      "Hai mệnh đề này hoàn toàn không tương đương nhau về ngữ nghĩa; trong đó ∃y∀x là điều kiện mạnh hơn nhiều so với mệnh đề ∀x∃y",
      "Hai mệnh đề này hoàn toàn tương đương nhau vì các lượng từ toán học luôn luôn có tính chất giao hoán tự do trong không gian",
      "Mệnh đề ∀x∃y luôn luôn bị coi là sai cú pháp trong mọi hệ cơ sở dữ liệu quan hệ vì không thể tìm kiếm phần tử thỏa mãn chung",
      "Cả hai mệnh đề đều chỉ có thể biểu diễn được bằng ngôn ngữ đại số quan hệ thuần túy mà không thể chuyển dịch sang câu lệnh SQL"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục III.1.a & Section 0: Trong Logic vị từ, ∀x∃y P(x,y) (mỗi người có một mẹ) KHÔNG TƯƠNG ĐƯƠNG với ∃y∀x P(x,y) (có một người mẹ chung của tất cả mọi người). ∃y∀x mạnh hơn rất nhiều và suy ra ∀x∃y, nhưng chiều ngược lại không đúng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh tưởng các lượng từ có thể đảo chỗ tự do như phép cộng/nhân toán học.",
      "trickWord": "Bẫy trật tự lượng từ: ∀x∃y KHÔNG TƯƠNG ĐƯƠNG ∃y∀x (Không có tính giao hoán khác loại)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a",
      "tip": "Trật tự lượng từ khác loại KHÔNG ĐƯỢC ĐỔI CHỖ! ∀x∃y ≠ ∃y∀x!"
    }
  },
  {
    "id": "db-c4-t2-040",
    "question": "Biểu diễn hình thức chuẩn của ràng buộc khóa ngoại `SINH_VIEN.maKhoa` tham chiếu đến `KHOA.makhoa` bằng đại số tập hợp là:",
    "options": [
      "π_makhoa(KHOA) ⊆ π_maKhoa(SINH_VIEN) (Tập hợp tất cả các mã khoa phải là tập con của mã khoa có sinh viên học)",
      "π_maKhoa(SINH_VIEN) ⊆ π_makhoa(KHOA) (Tập hợp các mã khoa của sinh viên phải là tập con của mã khoa thực tế)",
      "π_maKhoa(SINH_VIEN) = π_makhoa(KHOA) (Tập hợp mã khoa của sinh viên bắt buộc phải trùng khớp hoàn toàn với danh mục khoa)",
      "π_maKhoa(SINH_VIEN) ∩ π_makhoa(KHOA) = ∅ (Tập hợp mã khoa của sinh viên và khoa phải hoàn toàn tách rời nhau)"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục VI.1.a: Ràng buộc khóa ngoại bằng phép chiếu đại số tập hợp: Phép chiếu cột khóa ngoại ở bảng con phải là tập con của phép chiếu cột khóa chính ở bảng cha: π_maKhoa(SINH_VIEN) ⊆ π_makhoa(KHOA).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay bị đảo chiều dấu tập con (chọn nhầm Cha là con của Con).",
      "trickWord": "Bẫy chiều tập con: Con phải là tập con của Cha (π_Con ⊆ π_Cha)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1.a",
      "tip": "Khóa ngoại = Tập giá trị ở bảng Con là TẬP CON (⊆) của tập giá trị ở bảng Cha!"
    }
  },
  {
    "id": "db-c4-t2-041",
    "question": "Trong CSDL `QLHANGHOA`, ràng buộc: \"Ngày phát hành hóa đơn phải trước hoặc cùng ngày xuất hàng ra khỏi kho\" được biểu diễn chuẩn xác là:",
    "options": [
      "∃hd ∈ HOA_DON: (hd.ngayHD = hd.ngayXuat) (chỉ cần có ít nhất một hóa đơn có ngày xuất hàng trùng với ngày lập phiếu)",
      "∀hd ∈ HOA_DON: (hd.ngayHD > hd.ngayXuat) (yêu cầu hàng hóa phải được xuất đi trước rồi mới lập hóa đơn thu tiền sau)",
      "∀hd ∈ HOA_DON: (hd.ngayHD ≤ hd.ngayXuat) (biểu thức liên thuộc tính so sánh trực tiếp hai cột thời gian của hóa đơn)",
      "∀hd ∈ HOA_DON, ∃dh ∈ DAT_HANG: (hd.ngayXuat ≤ dh.ngayDH) (ngày xuất hàng phải xảy ra trước ngày đặt hàng)"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục V.2.a (Ví dụ 5): \"Hàng hóa chỉ được xuất kho sau khi đã lập hóa đơn\" ➔ Ngày lập hóa đơn phải trước hoặc bằng ngày xuất: ∀hd ∈ HOA_DON: hd.ngayHD ≤ hd.ngayXuat.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay bị đảo ngược chiều so sánh ngày hoặc nhầm dấu lớn/nhỏ.",
      "trickWord": "Bẫy chiều thời gian xuất hàng: ngayHD ≤ ngayXuat (Lập hóa đơn trước, xuất kho sau)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.2.a",
      "tip": "Trình tự kế toán: Hóa đơn lập trước ➔ Hàng xuất sau (ngayHD ≤ ngayXuat)!"
    }
  },
  {
    "id": "db-c4-t2-042",
    "question": "Giả sử đơn đặt hàng `soDH = 'DH001'` đã có hóa đơn `soHD = 'HD001'`. Nếu nhân viên cố tình lập thêm hóa đơn `HD002` cho `soDH = 'DH001'`, hệ thống sẽ:",
    "options": [
      "Tự động xóa bỏ hóa đơn HD001 cũ và thay thế bằng hóa đơn HD002 mới với các giá trị mặt hàng được cập nhật theo thời giá thị trường",
      "Tự động hợp nhất nội dung của hai hóa đơn HD001 và HD002 thành một hóa đơn tổng hợp duy nhất để thuận tiện cho việc kế toán",
      "Chấp nhận bình thường vì quy chế kinh doanh cho phép một đơn hàng có thể giao làm nhiều đợt tùy theo khả năng cung ứng của kho",
      "Lập tức chặn đứng và báo lỗi vi phạm quy tắc: \"Mỗi đơn đặt hàng chỉ được giải quyết trong duy nhất một hóa đơn bán hàng\""
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục I.1.b (Quy tắc vàng): \"Mỗi đơn đặt hàng chỉ được giải quyết trong một hóa đơn duy nhất\". Do đó trong bảng HOA_DON, thuộc tính soDH có tính chất duy nhất đối với mỗi đơn đặt hàng. Thao tác tạo hóa đơn thứ hai cho cùng một đơn hàng bị từ chối ngay lập tức.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thực tế bên ngoài cho phép giao nhiều lần, nhưng giáo trình QLHANGHOA quy định ĐÚNG 1 HÓA ĐƠN.",
      "trickWord": "Bẫy Quy tắc vàng: 1 Đơn hàng = ĐÚNG 1 Hóa đơn duy nhất (Cấm tạo hóa đơn thứ 2)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục I.1.b",
      "tip": "Thuộc lòng quy tắc vàng QLHANGHOA: 1 Đơn đặt hàng ➔ ĐÚNG 1 Hóa đơn!"
    }
  },
  {
    "id": "db-c4-t2-043",
    "question": "Trong CSDL `QLHANGHOA`, công thức tính trị giá hóa đơn: `trigiaHD = SUM(soLuongBan * giaBan)`. Nếu SỬA cột `giaBan` trong `CTIET_HD` thì:",
    "options": [
      "Cần kiểm tra +*(giaBan) trên CTIET_HD và kích hoạt cập nhật lại thuộc tính tổng hợp trigiaHD tương ứng trong bảng HOA_DON",
      "Hoàn toàn không cần kiểm tra (-) vì giá bán đã được thỏa thuận miệng giữa người mua và người bán trước khi giao hàng tại bãi",
      "Thao tác sửa bị hệ thống từ chối vì đơn giá mặt hàng là thông tin niêm yết cố định không bao giờ được phép chỉnh sửa trên đĩa",
      "Hệ thống sẽ tự động trừ số tiền chênh lệch vào tiền lương hàng tháng của nhân viên trực tiếp thực hiện thao tác sửa đổi dữ liệu"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục VI.4.a: trigiaHD là thuộc tính tổng hợp tính từ CTIET_HD. Khi sửa giaBan của một mặt hàng trong chi tiết hóa đơn, thành tiền thay đổi kéo theo trigiaHD của hóa đơn đó phải được cập nhật lại. Tầm ảnh hưởng là +*(giaBan) trên CTIET_HD.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ sửa ở CTIET_HD không ảnh hưởng HOA_DON hoặc nghĩ giá bán không được sửa.",
      "trickWord": "Bẫy thuộc tính tổng hợp lan truyền: Sửa giaBan ➔ Tác động trigiaHD ở bảng cha",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.4.a",
      "tip": "Thuộc tính tổng hợp: Sửa số lượng hoặc đơn giá ở con ➔ Phải tính lại tổng tiền ở cha!"
    }
  },
  {
    "id": "db-c4-t2-044",
    "question": "Khi khách hàng chuyển tiền đặt cọc trước khi công ty giao hàng và phát hành hóa đơn, hệ thống ghi nhận giao dịch này vào đâu và công nợ biến động ra sao?",
    "options": [
      "Bắt buộc phải tạo ngay một hóa đơn ảo trong bảng HOA_DON với trị giá bằng số tiền cọc để cân bằng hệ thống tài khoản kế toán",
      "Ghi nhận một bản ghi vào bảng PHIEU_THU, làm cho số tiền công nợ congNo của khách hàng giảm xuống (có thể nhận giá trị âm)",
      "Ghi nhận trực tiếp vào bảng KHACH bằng cách cộng thêm số tiền đó vào cột số điện thoại của khách hàng để phục vụ việc đối soát",
      "Hệ thống sẽ từ chối nhận tiền vì quy định kế toán bắt buộc phải có hóa đơn bán hàng trước thì mới được phép phát hành phiếu thu"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục I.1.b (Đặc tả PHIEU_THU): \"khách hàng có thể trả tiền không theo hóa đơn nào, hoặc trả trước khi nhận hàng (tiền đặt cọc)\". Khi đó ghi nhận vào PHIEU_THU với mã khách tương ứng, làm công nợ giảm xuống (nếu trả trước nhiều hơn mua thì congNo < 0: công ty nợ khách).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ phiếu thu bắt buộc phải đi kèm hóa đơn (nhầm lẫn nghiệp vụ).",
      "trickWord": "Bẫy phiếu thu đặt cọc: PHIEU_THU không bắt buộc phải có số hóa đơn, có thể trả trước",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục I.1.b",
      "tip": "Khách cọc tiền ➔ Lưu vào PHIEU_THU, công nợ giảm (có thể âm)!"
    }
  },
  {
    "id": "db-c4-t2-045",
    "question": "Biểu thức toán học nào sau đây biểu diễn chuẩn xác quy tắc: \"Hóa đơn chỉ được phép giao những mặt hàng mà khách hàng đã đặt mua\"?",
    "options": [
      "∃ct ∈ CTIET_HD, ∃dh ∈ DAT_HANG: (ct.maHH ≠ dh.maHH) (tồn tại mặt hàng trong chi tiết hóa đơn không có trong đơn hàng)",
      "∀ct ∈ CTIET_HD, ∀hd ∈ HOA_DON: (ct.soHD = hd.soHD → ct.giaBan = hd.trigiaHD) (giá bán mặt hàng bằng trị giá)",
      "∀ct ∈ CTIET_HD, ∃hd ∈ HOA_DON, ∃dh ∈ DAT_HANG: (ct.soHD = hd.soHD ∧ hd.soDH = dh.soDH ∧ ct.maHH = dh.maHH)",
      "∀dh ∈ DAT_HANG, ∃ct ∈ CTIET_HD: (dh.maHH = ct.maHH ∧ dh.soLuongDat = ct.soLuongBan) (bắt buộc giao đủ 100% số lượng)"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục VI.5.a (Chính sách 2) & Section 0: Quy tắc: Mọi mặt hàng xuất trong chi tiết hóa đơn (ct) phải tìm thấy trong đơn đặt hàng tương ứng (dh): ct.soHD = hd.soHD và hd.soDH = dh.soDH và ct.maHH = dh.maHH.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm lẫn giữa chính sách \"giao đủ 100%\" và chính sách \"không giao hàng ngoài đơn\".",
      "trickWord": "Bẫy mặt hàng trong đơn: Mặt hàng xuất trong CTIET_HD phải tồn tại trong DAT_HANG",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.5.a",
      "tip": "Chỉ giao hàng đã đặt: Với mọi ct ∈ CTIET_HD ➔ Tồn tại dh ∈ DAT_HANG có cùng maHH!"
    }
  },
  {
    "id": "db-c4-t2-046",
    "question": "Trong Đồ án `SV_DT(MaSV, MaDT, NoiAD, KQ)`, quy tắc: \"Kết quả `KQ` chỉ nhận một trong các giá trị ('Xuat sac', 'Tot', 'Kha', 'Trung binh', 'Khong dat')\" là:",
    "options": [
      "RBTV liên quan hệ vì danh mục các loại kết quả đánh giá phải được đối chiếu với bảng điểm tích lũy của sinh viên trong hệ thống",
      "RBTV liên thuộc tính vì kết quả đề tài phải phụ thuộc vào nơi áp dụng NoiAD và năng lực học tập của sinh viên MaSV thực hiện đề tài",
      "RBTV liên bộ vì cần phải xếp hạng kết quả của tất cả các sinh viên trong trường để phân loại theo tỷ lệ phần trăm phân phối chuẩn",
      "RBTV về miền giá trị của thuộc tính KQ trong bảng SV_DT vì nó giới hạn tập hợp các hằng số chuỗi hợp lệ mà cột này được phép lưu trữ"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Mục VIII.1.a: Quy định tập giá trị rời rạc hợp lệ của thuộc tính KQ là một phép kiểm tra miền giá trị (Domain constraint / CHECK constraint dạng IN list).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh thấy có nhiều mức xếp loại tưởng là liên bộ để tính phần trăm.",
      "trickWord": "Bẫy danh sách giá trị cố định: KQ IN (...) là RÀNG BUỘC MIỀN GIÁ TRỊ",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VIII.1.a",
      "tip": "Thuộc tính chỉ nhận tập giá trị hằng số liệt kê sẵn ➔ Ràng buộc MIỀN GIÁ TRỊ!"
    }
  },
  {
    "id": "db-c4-t2-047",
    "question": "Ràng buộc: \"Kinh phí thực hiện của mỗi đề tài nghiên cứu khoa học phải đạt tối thiểu từ 5 triệu đồng trở lên (`Kinhphi >= 5`)\" thuộc loại RBTV nào?",
    "options": [
      "RBTV về miền giá trị của thuộc tính Kinhphi trong bảng DETAI vì nó chỉ quy định cận dưới hợp lệ cho một thuộc tính số học đơn lẻ",
      "RBTV liên thuộc tính vì kinh phí phải tương xứng với tên đề tài TenDT và học hàm học vị của chủ nhiệm đề tài Chunhiem được giao",
      "RBTV liên bộ vì cần phải so sánh kinh phí của đề tài này với mức kinh phí trung bình của các đề tài nghiên cứu khoa học khác",
      "RBTV liên quan hệ vì nguồn kinh phí nghiên cứu khoa học phải được giải ngân thông qua phòng quản lý khoa học và dự án của trường"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương 4, Mục VIII.1.a: Ràng buộc Kinhphi >= 5 chỉ xét trên thuộc tính Kinhphi của từng đề tài đơn lẻ so với hằng số 5. Đây là RBTV về miền giá trị của thuộc tính trong bảng DETAI.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nhầm với ràng buộc \"tổng kinh phí của một chủ nhiệm\" (liên bộ) đã gặp ở Đề 1.",
      "trickWord": "Bẫy kinh phí mỗi đề tài: Kinhphi >= 5 trên từng dòng là MIỀN GIÁ TRỊ (không phải liên bộ)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VIII.1.a",
      "tip": "Kinh phí 1 đề tài >= 5 ➔ Miền giá trị; Tổng kinh phí theo chủ nhiệm <= 500 ➔ Liên bộ!"
    }
  },
  {
    "id": "db-c4-t2-048",
    "question": "Trong bảng `SV_DT(MaSV, MaDT, NoiAD, KQ)`, nếu người dùng thực hiện lệnh UPDATE sửa đổi giá trị cột `NoiAD` (Nơi áp dụng), DBMS sẽ xử lý thế nào?",
    "options": [
      "Bắt buộc kiểm tra lại toàn bộ các ràng buộc khóa chính (MaSV, MaDT) vì bất kỳ thao tác sửa đổi nào cũng có nguy cơ làm lỗi dữ liệu",
      "Bỏ qua kiểm tra (-) vì thuộc tính NoiAD không tham gia vào khóa chính, khóa ngoại hay bất kỳ điều kiện giới hạn số lượng đề tài nào",
      "Kích hoạt kiểm tra ràng buộc khóa ngoại tham chiếu sang bảng SINHVIEN để xác nhận sinh viên đó có hộ khẩu tại nơi áp dụng hay không",
      "Tự động hủy bỏ thao tác sửa đổi vì nơi áp dụng đề tài là địa bàn nghiên cứu cố định đã được hội đồng khoa học phê duyệt từ đầu"
    ],
    "answer": 1,
    "explanation": "Giáo trình Chương 4, Mục VIII.1.a & Bảng tầm ảnh hưởng: Cột NoiAD chỉ là thuộc tính mô tả nơi áp dụng đề tài, không nằm trong khóa chính (MaSV, MaDT), không phải khóa ngoại và không tham gia vào bất kỳ biểu thức ràng buộc nào. Khi sửa NoiAD, tầm ảnh hưởng là dấu trừ (-*(NoiAD)).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ mọi thao tác sửa đều bị kiểm tra hoặc nhầm NoiAD nằm trong khóa.",
      "trickWord": "Bẫy sửa thuộc tính mô tả độc lập: Là DẤU TRỪ (-) an toàn tuyệt đối",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VIII.1.a",
      "tip": "Sửa thuộc tính không tham gia bất kỳ luật nào ➔ Mang dấu TRỪ (-)!"
    }
  },
  {
    "id": "db-c4-t2-049",
    "question": "Trong chu trình đồ thị CSDL QLHANGHOA, chính sách giao hàng chuẩn: \"Không giao vượt số lượng đặt\" có biểu thức logic là gì?",
    "options": [
      "Biểu thức: (ct.maHH = dh.maHH ∧ ct.soHD = hd.soHD ∧ hd.soDH = dh.soDH) → (ct.soLuongBan ≥ dh.soLuongDat) cho phép giao vượt mức đặt hàng",
      "Biểu thức: (ct.maHH = dh.maHH ∧ ct.soHD = hd.soHD ∧ hd.soDH = dh.soDH) → (ct.soLuongBan = dh.soLuongDat) bắt buộc phải giao đủ 100% hàng",
      "Biểu thức: (ct.maHH = dh.maHH ∧ ct.soHD = hd.soHD ∧ hd.soDH = dh.soDH) → (ct.soLuongBan ≤ dh.soLuongDat) trên toàn bộ các bộ tương ứng",
      "Biểu thức: (ct.maHH ≠ dh.maHH ∧ ct.soHD = hd.soHD ∧ hd.soDH = dh.soDH) → (ct.soLuongBan = 0) cấm giao tất cả các mặt hàng đã được đặt mua"
    ],
    "answer": 2,
    "explanation": "Giáo trình Chương 4, Mục VI.5.a (Chính sách 2): Chính sách chuẩn CSDL QLHANGHOA: Không bao giờ giao vượt yêu cầu đặt. Nghĩa là số lượng bán trên chi tiết hóa đơn phải nhỏ hơn hoặc bằng số lượng đặt: ct.soLuongBan ≤ dh.soLuongDat.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm với chính sách giao đủ 100% (dấu bằng =) hoặc nhầm chiều dấu lớn hơn/nhỏ hơn.",
      "trickWord": "Bẫy biểu thức không giao vượt: ct.soLuongBan ≤ dh.soLuongDat",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.5.a",
      "tip": "Không giao vượt ➔ Bán ≤ Đặt (soLuongBan ≤ soLuongDat)!"
    }
  },
  {
    "id": "db-c4-t2-050",
    "question": "Tại sao việc cài đặt và thực thi các Ràng buộc toàn vẹn ngay tại Tầng CSDL (Database Engine) lại an toàn và tối ưu hơn so với việc chỉ kiểm tra ở Tầng Ứng dụng (Application Layer)?",
    "options": [
      "Làm cho tốc độ kết nối mạng Internet giữa người dùng và máy chủ tăng lên gấp mười lần nhờ việc nén các gói tin dữ liệu trước khi truyền tải trên đường truyền vật lý",
      "Giúp hệ thống hoàn toàn không cần phải mua bản quyền phần mềm hệ quản trị cơ sở dữ liệu đắt tiền mà vẫn bảo đảm khả năng hoạt động ổn định trên các nền tảng đám mây",
      "Cho phép loại bỏ hoàn toàn các lập trình viên kiểm thử phần mềm (Tester) vì hệ quản trị cơ sở dữ liệu đã tự động kiểm tra và sửa hết toàn bộ các lỗi logic nghiệp vụ",
      "Bảo vệ tính đúng đắn của dữ liệu một cách tập trung, ngăn chặn triệt để dữ liệu bẩn từ mọi nguồn truy cập (ứng dụng web, mobile, script ngoài, thao tác trực tiếp của DBA)"
    ],
    "answer": 3,
    "explanation": "Giáo trình Chương 4, Section 0 & Mục IX.1.a: Nếu chỉ kiểm tra ở tầng ứng dụng, dữ liệu vẫn có thể bị làm bẩn khi có nhiều ứng dụng cùng truy cập, hoặc khi DBA chạy lệnh trực tiếp trong DBMS. Kiểm tra tại tầng CSDL là \"Lớp khiên bảo vệ tối hậu\" (Ultimate Cyber-Shield), tập trung và an toàn tuyệt đối trước mọi nguồn truy cập.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ kiểm tra trên giao diện là đủ hoặc chọn các phương án phóng đại về tốc độ mạng/chi phí.",
      "trickWord": "Bẫy triết lý phòng thủ: TẦNG CSDL LÀ LỚP KHIÊN BẢO VỆ TỐI HẬU, tập trung và ngăn chặn mọi nguồn",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Section 0 & IX.1.a",
      "tip": "Kiểm tra tại Database = Tuyến phòng thủ vững chắc nhất, độc lập với mọi phần mềm ứng dụng!"
    }
  }
];
