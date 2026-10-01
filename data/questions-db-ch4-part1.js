/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG IV: RÀNG BUỘC TOÀN VẸN (INTEGRITY CONSTRAINTS)
   BỘ ĐỀ SỐ 1 — 40 CÂU HỎI HỌC THUẬT CHUẨN MỰC
   MÃ BỘ ĐỀ: db-c4-d1-001 ĐẾN db-c4-d1-040
   TỶ LỆ ĐỘ KHÓ: 12 DỄ (30%) - 16 TRUNG BÌNH (40%) - 12 KHÓ/BẪY (30%)
   CHUẨN KỸ THUẬT: DELTA L <= 15 CHARS, CÂN BẰNG ĐÁP ÁN 10A-10B-10C-10D
   ============================================================ */

export const questionsDbCh4Part1 = [
  {
    "id": "db-c4-d1-001",
    "question": "Khái niệm Ràng buộc toàn vẹn (RBTV) trong cơ sở dữ liệu được định nghĩa chuẩn xác là gì?",
    "options": [
      "Là các điều kiện bất biến mà mọi đối tượng CSDL phải thỏa mãn ở mọi thời điểm",
      "Là thuật toán nén dữ liệu giúp giảm thiểu không gian lưu trữ vật lý của ổ đĩa",
      "Là phương pháp mã hóa đường truyền mạng giữa máy trạm khách và máy chủ CSDL",
      "Là bảng sao lưu dự phòng tạm thời được tự động tạo ra khi có sự cố mất điện"
    ],
    "answer": 0,
    "explanation": "Giáo trình nêu rõ: RBTV là những điều kiện bất biến mà các đối tượng của CSDL phải thỏa mãn ở bất kỳ thời điểm nào. Trong thực tế, RBTV chính là các quy tắc quản lý (business rules).",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d1-002",
    "question": "Một Ràng buộc toàn vẹn (RBTV) hoàn chỉnh trong cơ sở dữ liệu được xác định bởi 3 yếu tố cốt lõi nào?",
    "options": [
      "Bao gồm 3 yếu tố: Mã nguồn chương trình, Tên bảng dữ liệu và Cổng kết nối mạng",
      "Bao gồm 3 yếu tố: Điều kiện (Condition), Bối cảnh (Context) và Tầm ảnh hưởng",
      "Bao gồm 3 yếu tố: Dung lượng bộ nhớ RAM, Tốc độ xung nhịp CPU và Ổ đĩa cứng SSD",
      "Bao gồm 3 yếu tố: Tài khoản quản trị, Mật khẩu người dùng và Quyền hạn truy cập"
    ],
    "answer": 1,
    "explanation": "Một RBTV được xác định hoàn chỉnh bởi 3 yếu tố: a) Điều kiện (quy tắc logic); b) Bối cảnh (các bảng có hiệu lực); c) Tầm ảnh hưởng (thời điểm cần kiểm tra khi Thêm, Sửa, Xóa).",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d1-003",
    "question": "Trong Bảng Tầm Ảnh Hưởng của một ràng buộc toàn vẹn, ký hiệu dấu trừ (\"-\") mang ý nghĩa kỹ thuật gì?",
    "options": [
      "Thao tác bị cấm hoàn toàn và hệ quản trị CSDL sẽ từ chối quyền thực thi lệnh",
      "Bắt buộc hệ thống phải dừng lại và kích hoạt thủ tục kiểm tra toàn bộ bảng",
      "Không cần kiểm tra RBTV vì thao tác này chắc chắn không làm vi phạm quy tắc",
      "Dữ liệu vừa cập nhật sẽ tự động bị hệ thống trừ đi một đơn vị giá trị số học"
    ],
    "answer": 2,
    "explanation": "Ký hiệu \"-\" trong Bảng Tầm Ảnh Hưởng có nghĩa là không cần kiểm tra, thao tác cập nhật đó chắc chắn an toàn và không thể vi phạm RBTV, giúp tối ưu hóa hiệu năng I/O.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d1-004",
    "question": "Hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) kích hoạt cơ chế kiểm tra các ràng buộc toàn vẹn vào thời điểm nào?",
    "options": [
      "Kích hoạt ngẫu nhiên mỗi khi bộ nhớ đệm RAM của máy chủ cơ sở dữ liệu bị đầy",
      "Chỉ kích hoạt duy nhất một lần vào thời điểm người quản trị khởi tạo máy chủ",
      "Chỉ kích hoạt khi người dùng gửi yêu cầu truy vấn trích xuất dữ liệu SELECT",
      "Kích hoạt ngay khi thực hiện cập nhật (Thêm, Sửa, Xóa) hoặc khi bảo trì định kỳ"
    ],
    "answer": 3,
    "explanation": "RDBMS kiểm tra RBTV: 1) Ngay khi thực hiện thao tác cập nhật (Thêm, Sửa, Xóa); 2) Định kỳ hoặc đột xuất khi bảo trì hệ thống.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d1-005",
    "question": "Khẳng định nào sau đây là NHẬN ĐỊNH SAI về kỹ thuật lập Bảng Tầm Ảnh Hưởng của một ràng buộc toàn vẹn?",
    "options": [
      "Tất cả các ô trong Bảng Tầm Ảnh Hưởng bắt buộc phải luôn luôn mang dấu cộng",
      "Dấu cộng (+) chỉ định hệ quản trị CSDL cần kích hoạt mã kiểm tra tính hợp lệ",
      "Dấu +(*) hoặc -(*) thể hiện việc kiểm tra có điều kiện khi sửa đúng thuộc tính",
      "Bảng Tầm Ảnh Hưởng gồm các cột tương ứng với ba thao tác: Thêm, Xóa và Sửa"
    ],
    "answer": 0,
    "explanation": "Nhận định A sai vì mục tiêu tối thượng của Bảng Tầm Ảnh Hưởng là xác định đúng ô nào cần kiểm tra (+), ô nào an toàn không cần kiểm tra (-), chứ không phải tất cả đều là dấu cộng.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d1-006",
    "question": "Điền vào chỗ trống: \"Bối cảnh (Context) của một ràng buộc toàn vẹn là ...(1)... mà ràng buộc đó có hiệu lực, có thể gồm ...(2)... tùy theo bản chất của quy tắc.\"",
    "options": [
      "những người dùng quản trị / một nhóm tài khoản hoặc toàn bộ máy chủ mạng",
      "những quan hệ (bảng dữ liệu) / một quan hệ hoặc nhiều quan hệ khác nhau",
      "những câu lệnh truy vấn SELECT / một dòng đơn lẻ hoặc nhiều trang bộ nhớ",
      "những tệp tin sao lưu dự phòng / một thiết bị đĩa hoặc toàn bộ phân vùng"
    ],
    "answer": 1,
    "explanation": "Bối cảnh (Context) là những quan hệ (bảng) mà RBTV đó có hiệu lực. Có thể là một quan hệ hoặc nhiều quan hệ.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d1-007",
    "question": "Cho các nhận định sau về Bảng Tầm Ảnh Hưởng của ràng buộc Khóa chính (Primary Key):\n(I) Thao tác Thêm một dòng mới luôn mang dấu cộng (+).\n(II) Thao tác Xóa một dòng hiện có luôn mang dấu trừ (-).\n(III) Thao tác Sửa các thuộc tính khóa chính luôn mang dấu cộng (+).\nKhẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có duy nhất nhận định (I) là nhận định đúng, hai nhận định còn lại sai",
      "Chỉ có nhận định (I) và (III) đúng, nhận định (II) là nhận định sai lầm",
      "Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác",
      "Nhận định (II) đúng còn nhận định (I) và (III) đều là nhận định sai lệch"
    ],
    "answer": 2,
    "explanation": "Cả 3 nhận định đều đúng. Với Khóa chính: Thêm mới có thể trùng khóa (+); Xóa bớt một dòng thì tập còn lại càng không thể trùng khóa (-); Sửa thuộc tính khóa chính có thể gây trùng khóa (+).",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d1-008",
    "question": "Xét Bảng Tầm Ảnh Hưởng của ràng buộc Khóa chính: Vì sao thao tác Xóa (Delete) một dòng trong bảng LUÔN LUÔN mang dấu trừ (\"-\")?",
    "options": [
      "Vì thao tác xóa dữ liệu không làm thay đổi số lượng các thuộc tính của bảng",
      "Vì hệ quản trị cơ sở dữ liệu tự động vô hiệu hóa khóa chính trước khi xóa",
      "Vì khi xóa một dòng thì hệ thống tự động chèn một dòng rỗng bù đắp vào bảng",
      "Vì xóa bớt một bộ thì các bộ còn lại chắc chắn không thể tự trùng nhau được"
    ],
    "answer": 3,
    "explanation": "Giáo trình chỉ rõ: Nếu tập các bộ ban đầu đã không trùng khóa, thì khi xóa bớt một dòng, tập các dòng còn lại hiển nhiên vẫn phân biệt đôi một, tính duy nhất của khóa chính KHÔNG THỂ bị vi phạm (dấu -).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ thao tác cập nhật nào cũng nguy hiểm nên đánh dấu (+) cho cả lệnh Xóa.",
      "trickWord": "Bẫy thao tác Xóa trong Bảng Tầm Ảnh Hưởng của Khóa chính (Delete operation on PK)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1.a & V.3",
      "tip": "Khóa chính: Xóa mang dấu TRỪ (-) tuyệt đối! Vì bớt đi 1 dòng thì các dòng còn lại không thể tự trùng nhau."
    }
  },
  {
    "id": "db-c4-d1-009",
    "question": "Trong Bảng Tầm Ảnh Hưởng của Ràng buộc khóa ngoại (phụ thuộc tồn tại giữa bảng cha R1 và bảng con R2): Dấu kiểm tra ở bảng cha R1 đối với thao tác Xóa là gì?",
    "options": [
      "Mang dấu cộng (+) vì xóa dòng cha có nguy cơ làm các dòng con bị mồ côi",
      "Mang dấu trừ (-) vì xóa dòng ở bảng cha không bao giờ ảnh hưởng tới bảng con",
      "Mang dấu trừ có điều kiện vì chỉ kiểm tra khi thuộc tính khóa cha nhận NULL",
      "Không xác định được vì bảng cha không nằm trong bối cảnh của ràng buộc ngoại"
    ],
    "answer": 0,
    "explanation": "Khi xóa một dòng ở bảng cha (R1), nếu có dòng ở bảng con (R2) đang tham chiếu đến khóa đó thì việc xóa cha sẽ vi phạm toàn vẹn tham chiếu (làm con bị mồ côi). Do đó thao tác Xóa ở bảng cha BẮT BUỘC mang dấu cộng (+).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm: nghĩ thao tác Xóa là an toàn như ở bảng Khóa chính.",
      "trickWord": "Bẫy thao tác Xóa ở bảng cha trong ràng buộc Khóa ngoại (Delete on parent table in FK)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1",
      "tip": "Khóa ngoại: Bảng cha XÓA mang dấu CỘNG (+)! (Bảng con XÓA mới mang dấu TRỪ -)."
    }
  },
  {
    "id": "db-c4-d1-010",
    "question": "Tình huống: Cho ràng buộc C: \"Số cán bộ của một khoa không được vượt quá 50 người\" trong bảng KHOA(makhoa, tenkhoa, soCB). Thao tác nào sau đây mang dấu trừ (\"-\") trong Bảng Tầm Ảnh Hưởng?",
    "options": [
      "Thao tác Thêm một khoa mới vào bảng KHOA và cập nhật giá trị cột số cán bộ",
      "Thao tác Xóa một khoa và thao tác Sửa tên khoa không liên quan đến cột soCB",
      "Thao tác Sửa giá trị cột soCB từ mức hai mươi cán bộ lên năm mươi cán bộ",
      "Mọi thao tác Thêm, Sửa, Xóa trên bảng KHOA đều bắt buộc phải mang dấu cộng"
    ],
    "answer": 1,
    "explanation": "Ràng buộc quy định soCB <= 50. Khi Xóa một khoa, số cán bộ không tăng thêm nên không thể vi phạm quy tắc (dấu -). Khi Sửa tên khoa (tenkhoa), cột soCB không đổi nên cũng an toàn tuyệt đối (dấu -).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay đánh đồng thao tác Sửa cột bất kỳ đều mang dấu (+).",
      "trickWord": "Bẫy sửa thuộc tính không liên quan đến biểu thức ràng buộc (Update non-involved attribute)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1 & V.3",
      "tip": "Sửa thuộc tính KHÔNG tham gia biểu thức RBTV ➔ Luôn mang dấu TRỪ (-)!"
    }
  },
  {
    "id": "db-c4-d1-011",
    "question": "Ràng buộc toàn vẹn có bối cảnh là MỘT quan hệ được chia thành 3 phân loại chính nào dưới đây?",
    "options": [
      "RBTV bảo mật đa tầng, RBTV lưu trữ vật lý và RBTV giao tác mạng",
      "RBTV khóa ngoại, RBTV chu trình đồ thị và RBTV thuộc tính suy diễn",
      "RBTV về miền giá trị, RBTV liên thuộc tính và RBTV liên bộ",
      "RBTV chỉ mục tự động, RBTV sao lưu tập tin và RBTV giải phóng RAM"
    ],
    "answer": 2,
    "explanation": "Giáo trình phân loại rõ: Bối cảnh một quan hệ gồm 3 loại: 1) Miền giá trị; 2) Liên thuộc tính; 3) Liên bộ.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d1-012",
    "question": "Trong CSDL HSSINHVIEN, quy tắc: \"Điểm thi của sinh viên phải từ 0 đến 10\" thuộc loại ràng buộc toàn vẹn nào?",
    "options": [
      "Ràng buộc toàn vẹn do chu trình đồ thị của lược đồ quan hệ",
      "Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ đơn",
      "Ràng buộc toàn vẹn về phụ thuộc tồn tại giữa hai quan hệ con",
      "Ràng buộc toàn vẹn về miền giá trị (Domain integrity constraint)"
    ],
    "answer": 3,
    "explanation": "Điều kiện điểm thi từ 0 đến 10 áp dụng trực tiếp và độc lập lên miền giá trị của thuộc tính Diem, do đó thuộc loại RBTV về miền giá trị.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d1-013",
    "question": "Quy tắc: \"Trong bảng HOADON, ngày lập hóa đơn (ngayHD) phải trước hoặc cùng ngày xuất kho (ngayXuat)\" thuộc loại RBTV nào?",
    "options": [
      "Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ đơn",
      "Ràng buộc toàn vẹn về miền giá trị của từng thuộc tính riêng",
      "Ràng buộc toàn vẹn liên bộ giữa các dòng dữ liệu khác nhau",
      "Ràng buộc toàn vẹn về thuộc tính tổng hợp từ nhiều quan hệ"
    ],
    "answer": 0,
    "explanation": "Quy tắc hd.ngayHD <= hd.ngayXuat là mối quan hệ giữa 2 thuộc tính khác nhau trong CÙNG MỘT DÒNG (bộ) của bảng HOADON, nên thuộc loại RBTV liên thuộc tính.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d1-014",
    "question": "Khẳng định nào sau đây diễn giải CHUẨN XÁC NHẤT về bản chất của Ràng buộc toàn vẹn liên bộ (Inter-tuple constraint)?",
    "options": [
      "Là điều kiện kiểm tra định dạng dữ liệu của từng ô độc lập trong bảng",
      "Là mối quan hệ ràng buộc giữa các bộ (dòng) khác nhau trong cùng một quan hệ",
      "Là ràng buộc giữa hai cột dữ liệu nằm trên hai dòng hoàn toàn ngẫu nhiên",
      "Là sự kết nối tham chiếu khóa ngoại giữa bảng cha và các bảng dữ liệu con"
    ],
    "answer": 1,
    "explanation": "RBTV liên bộ là sự ràng buộc giữa các bộ (tuples) bên trong MỘT quan hệ. Ví dụ: Ràng buộc khóa chính (không được có 2 bộ trùng mã số).",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d1-015",
    "question": "Trong CSDL HSSINHVIEN, ràng buộc C1: \"Mỗi sinh viên có một mã số SV duy nhất không trùng lặp\" được xếp vào loại RBTV nào?",
    "options": [
      "Ràng buộc toàn vẹn liên thuộc tính giữa họ tên và mã số của sinh viên",
      "Ràng buộc toàn vẹn về miền giá trị (Domain constraint) của cột mã số",
      "Ràng buộc toàn vẹn liên bộ (Inter-tuple constraint) trong bảng SINH_VIEN",
      "Ràng buộc toàn vẹn về phụ thuộc tồn tại tham chiếu sang danh mục khoa"
    ],
    "answer": 2,
    "explanation": "Mã sinh viên là Khóa chính. Khóa chính cấm 2 bộ bất kỳ có cùng giá trị mã số: (∀t1, t2 ∈ SINH_VIEN: t1.maSV = t2.maSV ⇒ t1 = t2), đây là sự so sánh giữa CÁC BỘ với nhau nên là RBTV liên bộ.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d1-016",
    "question": "Điền vào chỗ trống: \"Nếu một thuộc tính A trong quan hệ có thể tính toán được từ các thuộc tính khác trong ...(1)..., người thiết kế CSDL nên ...(2)... thuộc tính A để tránh dư thừa dữ liệu.\"",
    "options": [
      "máy chủ phân tán / mã hóa bảo mật cho",
      "toàn bộ các bảng khác / tăng kích thước của",
      "từ điển dữ liệu hệ thống / nhân đôi giá trị",
      "cùng một bộ (dòng) đó / loại bỏ hoàn toàn"
    ],
    "answer": 3,
    "explanation": "Giáo trình nêu rõ nguyên tắc thiết kế chuẩn: Nếu thuộc tính A tính được từ các thuộc tính khác trong cùng một bộ, ta có thể loại bỏ A khỏi quan hệ để tránh dư thừa và dị thường cập nhật.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d1-017",
    "question": "Cho các nhận định sau về RBTV trên một quan hệ:\n(I) RBTV miền giá trị chỉ kiểm tra một thuộc tính độc lập trên từng bộ.\n(II) RBTV liên thuộc tính thể hiện mối quan hệ giữa các cột trong cùng một dòng.\n(III) Quy tắc tamUng ≤ luong là một ví dụ chuẩn mực của RBTV miền giá trị.\nKhẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có nhận định (I) và (II) đúng, nhận định (III) là nhận định sai lầm",
      "Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác",
      "Chỉ có duy nhất nhận định (III) là nhận định hoàn toàn đúng đắn theo sách",
      "Nhận định (I) sai còn nhận định (II) và (III) đều là nhận định chính xác"
    ],
    "answer": 0,
    "explanation": "Nhận định (I) và (II) đúng. Nhận định (III) sai vì giáo trình ghi rõ: tamUng <= luong là VÍ DỤ SAI của miền giá trị, đây thực chất là RBTV liên thuộc tính.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d1-018",
    "question": "Trong quan hệ NHANVIEN(maNV, tenNV, luong, tamUng, conLai), quy tắc: \"tamUng ≤ luong\". Vì sao giáo trình khẳng định việc coi đây là RBTV miền giá trị là SAI LẦM?",
    "options": [
      "Vì thuộc tính tamUng có kiểu dữ liệu chuỗi ký tự không thể so sánh với số",
      "Vì điều kiện này so sánh hai cột khác nhau trong cùng bộ chứ không phải miền giá trị",
      "Vì tiền tạm ứng của nhân viên luôn luôn bắt buộc phải lớn hơn mức lương thực tế",
      "Vì quan hệ NHANVIEN có chứa khóa chính nên mọi ràng buộc đều thành liên bộ"
    ],
    "answer": 1,
    "explanation": "Giáo trình nhấn mạnh: Điều kiện tamUng <= luong không thể là RBTV miền giá trị vì miền giá trị chỉ áp dụng trên từng thuộc tính riêng lẻ đối với tập giá trị hợp lệ dom(A). Việc đối sánh giữa 2 thuộc tính trong cùng dòng là bản chất của RBTV LIÊN THUỘC TÍNH.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay thấy điều kiện kiểm tra số tiền nên nhầm với ràng buộc miền giá trị > 0.",
      "trickWord": "Bẫy nhận thức sai lầm giữa miền giá trị và liên thuộc tính (Domain vs Inter-attribute trap)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.1",
      "tip": "So sánh giữa 2 CỘT trong cùng 1 dòng (A <= B) ➔ 100% là LIÊN THUỘC TÍNH, không phải miền giá trị!"
    }
  },
  {
    "id": "db-c4-d1-019",
    "question": "Ràng buộc C2 trong CSDL HSSINHVIEN: \"Mỗi sinh viên chỉ được phép thi tối đa 2 lần cho một môn học\" trong KET_QUA(maSV, maMH, lanThi, diem) thuộc loại RBTV nào?",
    "options": [
      "Ràng buộc liên thuộc tính giữa thuộc tính lần thi lanThi và thuộc tính điểm số",
      "Ràng buộc liên bộ giữa các lần thi khác nhau của cùng một sinh viên trong bảng",
      "Ràng buộc về miền giá trị của thuộc tính lanThi (điều kiện lanThi nằm trong tập {1, 2})",
      "Ràng buộc về phụ thuộc tồn tại tham chiếu sang danh mục các môn học mở lớp"
    ],
    "answer": 2,
    "explanation": "Điều kiện mỗi sinh viên thi tối đa 2 lần được quản lý thông qua miền giá trị hợp lệ của cột lanThi chỉ được nhận giá trị 1 hoặc 2 (lanThi ∈ {1, 2} hay lanThi <= 2), do đó thuộc loại RBTV về miền giá trị.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh thấy cụm từ \"thi tối đa 2 lần\" nên nghĩ phải đếm các bộ (dòng) của sinh viên đó và chọn liên bộ.",
      "trickWord": "Bẫy hình thức ngôn ngữ của ràng buộc số lần thi (lanThi domain constraint)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục II.1 Ví dụ 1",
      "tip": "Số lần thi tối đa 2 lần được cài đặt qua điều kiện miền giá trị: lanThi <= 2 (hoặc lanThi IN (1, 2))."
    }
  },
  {
    "id": "db-c4-d1-020",
    "question": "Tình huống: Trong bảng KET_QUA(maSV, maMH, lanThi, Diem), quy tắc: \"Diem là số thực từ 0 đến 10 với độ chính xác đến 0.5 điểm\". Biểu thức số học chuẩn nào diễn đạt điều kiện bước nhảy này?",
    "options": [
      "Điều kiện số học: (t.Diem * 10 mod 5 = 1) với mọi bộ t thuộc quan hệ bảng",
      "Điều kiện số học: (t.Diem mod 0.5 = 0) trong tập hợp số nguyên không âm",
      "Điều kiện số học: (round(t.Diem, 1) = t.Diem) với mọi giá trị điểm số",
      "Điều kiện số học: ((t.Diem * 4) mod 2 = 0) với mọi bộ t thuộc quan hệ KET_QUA"
    ],
    "answer": 3,
    "explanation": "Giáo trình Mục V.1 Ví dụ 4 ghi rõ: Điểm thi 0..10 có bước nhảy 0.5 (như 0, 0.5, 1, 1.5...) được biểu diễn số học bằng: ((t.Diem * 4) mod 2 = 0, ∀t ∈ KetQua) hoặc (t.Diem * 2 là số nguyên).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ toán tử mod dùng được trực tiếp cho số thực 0.5 trong biểu thức hình thức.",
      "trickWord": "Bẫy biểu diễn số học bước nhảy độ chính xác điểm thi (Step precision arithmetic expression)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.1",
      "tip": "Bước nhảy 0.5: Quy đồng nguyên ((Diem * 4) mod 2 = 0) hoặc ((Diem * 2) mod 1 = 0)."
    }
  },
  {
    "id": "db-c4-d1-021",
    "question": "Ràng buộc về phụ thuộc tồn tại (Existence dependency) trong cơ sở dữ liệu quan hệ còn được gọi bằng tên phổ biến nào?",
    "options": [
      "Ràng buộc khóa ngoại (Foreign key / Referential integrity constraint)",
      "Ràng buộc khóa chính duy nhất của các thực thể trong cơ sở dữ liệu",
      "Ràng buộc miền giá trị mở rộng cho các thuộc tính có kiểu ngày tháng",
      "Ràng buộc tối ưu hóa tốc độ truy vấn của cỗ máy tìm kiếm dữ liệu"
    ],
    "answer": 0,
    "explanation": "Giáo trình khẳng định: RBTV về phụ thuộc tồn tại còn gọi là ràng buộc khóa ngoại (foreign key) — rất phổ biến trong CSDL quan hệ.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d1-022",
    "question": "Trong CSDL QLHANGHOA, quy tắc: \"Mỗi hóa đơn bán hàng phải có ít nhất một mặt hàng\" thuộc loại RBTV nào?",
    "options": [
      "Ràng buộc toàn vẹn về miền giá trị của thuộc tính số lượng trong bảng",
      "Ràng buộc toàn vẹn liên bộ, liên quan hệ (giữa HOA_DON và CTIET_HD)",
      "Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ HOA_DON",
      "Ràng buộc toàn vẹn về phụ thuộc hàm suy diễn của bảng HANG_HOA"
    ],
    "answer": 1,
    "explanation": "Quy tắc này ràng buộc giữa tập các bộ của HOA_DON và tập các bộ của CTIET_HD (ứng với 1 dòng HOA_DON phải tồn tại ít nhất 1 dòng CTIET_HD có cùng soHD), do đó thuộc loại RBTV liên bộ, liên quan hệ.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d1-023",
    "question": "Một thuộc tính được gọi là \"Thuộc tính tổng hợp\" (Derived / Aggregate attribute) khi giá trị của nó thỏa mãn điều kiện nào?",
    "options": [
      "Là khóa chính đại diện cho tất cả các bảng dữ liệu trong toàn hệ thống",
      "Được nhập trực tiếp từ bàn phím và không thể thay đổi sau khi tạo lập",
      "Được tính toán tự động từ các thuộc tính của các quan hệ khác trong CSDL",
      "Được mã hóa bằng hàm băm một chiều để phục vụ lưu trữ mật khẩu an toàn"
    ],
    "answer": 2,
    "explanation": "Thuộc tính tổng hợp là thuộc tính mà giá trị của nó được tính toán giá trị từ các thuộc tính của các quan hệ khác (Ví dụ: congNo tính từ tổng tiền hóa đơn trừ đi tổng tiền phiếu thu).",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d1-024",
    "question": "Dấu hiệu toán học nào sau đây chứng minh sự tồn tại phụ thuộc của quan hệ R2 vào quan hệ R1 theo giáo trình?",
    "options": [
      "Quan hệ R1 và quan hệ R2 có cùng số lượng các dòng dữ liệu bên trong bảng",
      "Số lượng thuộc tính của quan hệ R1 lớn hơn số lượng thuộc tính quan hệ R2",
      "Tên của quan hệ R1 trùng khớp hoàn toàn với một thuộc tính bất kỳ trong R2",
      "Khóa chính K1 của R1 là tập con của khóa chính phức hợp K2 của R2 (K1 ⊆ K2)"
    ],
    "answer": 3,
    "explanation": "Giáo trình Mục VI.1 chỉ rõ Dấu hiệu 1: Nếu K1 là khóa chính của R1 và K2 là khóa chính của R2, mà K1 ⊆ K2 thì có phụ thuộc tồn tại của R2 vào R1.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d1-025",
    "question": "Quy tắc: \"Ngày lập hóa đơn (HOA_DON.ngayHD) phải sau hoặc bằng ngày đặt hàng (DAT_HANG.ngayDH)\" thuộc loại RBTV nào?",
    "options": [
      "Ràng buộc toàn vẹn liên thuộc tính, liên quan hệ giữa hai quan hệ",
      "Ràng buộc toàn vẹn liên bộ trong cùng một quan hệ đơn bảng HOA_DON",
      "Ràng buộc toàn vẹn về miền giá trị của thuộc tính ngày đặt hàng",
      "Ràng buộc toàn vẹn do chu trình đồ thị của các bảng kinh doanh"
    ],
    "answer": 0,
    "explanation": "Ràng buộc này so sánh giữa 2 thuộc tính (ngayHD và ngayDH) nằm ở 2 LƯỢC ĐỒ QUAN HỆ KHÁC NHAU (HOA_DON và DAT_HANG), nên được xếp vào loại RBTV liên thuộc tính, liên quan hệ.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d1-026",
    "question": "Trong đồ thị biểu diễn lược đồ CSDL phục vụ phân tích RBTV chu trình, hai loại nút cơ bản của đồ thị là gì?",
    "options": [
      "Nút máy chủ máy khách và Nút đường truyền cáp quang của mạng nội bộ",
      "Nút thuộc tính (Attribute nodes) và Nút lược đồ quan hệ (Relation nodes)",
      "Nút tài khoản người dùng và Nút quyền hạn truy cập mức bảng dữ liệu",
      "Nút bản ghi dữ liệu hiện tại và Nút bản ghi dữ liệu trong lịch sử sao lưu"
    ],
    "answer": 1,
    "explanation": "Lược đồ CSDL được biểu diễn bằng đồ thị vô hướng gồm 2 loại nút: Nút thuộc tính (A) và Nút lược đồ quan hệ (R). Một cung nối A với R nếu A ∈ R.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d1-027",
    "question": "Cho CSDL QLHANGHOA. Công thức tính công nợ của khách hàng: congNo = Tổng trị giá các hóa đơn bán − Tổng tiền các phiếu thu. Khi phát sinh một Phiếu thu mới (Thêm phiếu thu), công nợ thay đổi thế nào?",
    "options": [
      "Công nợ của khách hàng tự động được xóa về 0 bất kể số tiền thu được là bao",
      "Công nợ của khách hàng sẽ tăng thêm đúng bằng số tiền ghi trên phiếu thu mới",
      "Công nợ của khách hàng sẽ giảm đi đúng bằng số tiền ghi trên phiếu thu mới",
      "Công nợ của khách hàng không đổi vì phiếu thu chỉ ảnh hưởng đến quỹ tiền mặt"
    ],
    "answer": 2,
    "explanation": "Theo định nghĩa: congNo = Tổng_Ban - Tổng_Thu. Do đó khi Thêm một phiếu thu (tăng Tổng_Thu), số tiền nợ congNo của khách hàng sẽ giảm tương ứng.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d1-028",
    "question": "Khi đồ thị lược đồ CSDL xuất hiện chu trình (Ví dụ chu trình 3 bảng DAT_HANG - HOA_DON - CTIET_HD), chính sách giao hàng CHUẨN MỰC của CSDL QLHANGHOA là gì?",
    "options": [
      "Hủy toàn bộ đơn đặt hàng nếu kho hàng thiếu hụt dù chỉ một sản phẩm duy nhất",
      "Bắt buộc phải giao đầy đủ 100% tất cả các mặt hàng có trong đơn đặt hàng",
      "Công ty được phép giao tùy ý mọi mặt hàng dù khách hàng có đặt mua hay không",
      "Chỉ giao các mặt hàng khách đã đặt và không bao giờ giao vượt số lượng đặt"
    ],
    "answer": 3,
    "explanation": "Giáo trình Mục VI.3 nêu rõ: CSDL QLHANGHOA áp dụng chính sách (2): Một hóa đơn chỉ giao những mặt hàng khách đã đặt, có thể không giao đủ nhưng KHÔNG BAO GIỜ GIAO VƯỢT yêu cầu đặt hàng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn phương án lý tưởng là \"phải giao đầy đủ 100% mặt hàng\" (Chính sách 1).",
      "trickWord": "Bẫy 3 trường hợp chính sách giao hàng của chu trình đồ thị CSDL QLHANGHOA",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.3 Ví dụ 12",
      "tip": "Chuẩn CSDL QLHANGHOA: Chính sách (2) ➔ Không bắt buộc giao đủ, nhưng TUYỆT ĐỐI KHÔNG GIAO VƯỢT!"
    }
  },
  {
    "id": "db-c4-d1-029",
    "question": "Tình huống: Bảng KHACH có thuộc tính tổng hợp congNo tính từ HOA_DON và PHIEU_THU. Trong Bảng Tầm Ảnh Hưởng đối với bảng PHIEU_THU, thao tác nào cần phải kiểm tra (+)?",
    "options": [
      "Cả ba thao tác: Thêm một phiếu thu, Xóa một phiếu thu và Sửa tiền phiếu thu (+)",
      "Chỉ duy nhất thao tác Thêm phiếu thu mang dấu cộng, Xóa và Sửa mang dấu trừ",
      "Chỉ thao tác Xóa phiếu thu mang dấu cộng, Thêm và Sửa an toàn không kiểm tra",
      "Bảng PHIEU_THU hoàn toàn không bị ảnh hưởng vì cột congNo nằm ở bảng KHACH"
    ],
    "answer": 0,
    "explanation": "Thuộc tính tổng hợp congNo phụ thuộc trực tiếp vào từng phiếu thu. Dù Thêm, Xóa hay Sửa (soTien, maKH) ở bảng PHIEU_THU đều làm thay đổi tổng tiền đã thu, dẫn đến giá trị congNo ở bảng KHACH bị sai lệch nếu không cập nhật lại. Do đó cả 3 thao tác đều mang dấu (+).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ bảng chứa thuộc tính (KHACH) mới chịu ảnh hưởng, bảng nguồn (PHIEU_THU) thì không.",
      "trickWord": "Bẫy Bảng Tầm Ảnh Hưởng của thuộc tính tổng hợp trên các bảng nguồn",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.2.c",
      "tip": "Thuộc tính tổng hợp: Mọi thao tác Thêm, Xóa, Sửa trên CÁC BẢNG NGUỒN đều mang dấu CỘNG (+)!"
    }
  },
  {
    "id": "db-c4-d1-030",
    "question": "Cho quy tắc: \"Mỗi hóa đơn phải có ít nhất một mặt hàng\" (HOA_DON và CTIET_HD). Khi thực hiện thao tác XÓA một dòng trong bảng CTIET_HD, hệ thống có cần kiểm tra RBTV không?",
    "options": [
      "Không cần kiểm tra (-) vì xóa bớt mặt hàng chỉ làm giảm bớt số lượng chi tiết",
      "Có cần kiểm tra (+) vì nếu xóa dòng chi tiết cuối cùng thì hóa đơn sẽ bị rỗng",
      "Chỉ kiểm tra khi người dùng xóa toàn bộ các dòng của bảng bằng lệnh TRUNCATE",
      "Không xác định được vì thao tác xóa ở bảng con luôn luôn mặc định mang dấu trừ"
    ],
    "answer": 1,
    "explanation": "Ràng buộc đòi hỏi mỗi hóa đơn phải có ÍT NHẤT 1 mặt hàng. Khi xóa một dòng trong CTIET_HD, nếu đó là mặt hàng duy nhất còn lại của hóa đơn đó thì hóa đơn sẽ vi phạm ràng buộc (không còn mặt hàng nào). Do đó thao tác Xóa ở CTIET_HD bắt buộc mang dấu CỘNG (+).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ bảng con CTIET_HD khi Xóa luôn mang dấu (-) như trong ràng buộc khóa ngoại thông thường.",
      "trickWord": "Bẫy thao tác Xóa bảng con trong RBTV liên bộ liên quan hệ tối thiểu một dòng",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.2.a",
      "tip": "Ràng buộc \"Ít nhất một...\": Xóa ở bảng con mang dấu CỘNG (+) vì nguy cơ xóa sạch thành số 0!"
    }
  },
  {
    "id": "db-c4-d1-031",
    "question": "Trong biểu diễn hình thức của RBTV bằng Logic vị từ bậc nhất, ký hiệu toán học \"∀\" mang ý nghĩa là gì?",
    "options": [
      "Toán tử kéo theo (Implication operator, nếu điều kiện này thì điều kiện kia)",
      "Lượng từ tồn tại (Existential quantifier, chỉ cần có ít nhất một bộ)",
      "Lượng từ với mọi (Universal quantifier, áp dụng cho tất cả các bộ)",
      "Toán tử tuyển logic (Logical disjunction, phép toán OR giữa hai mệnh đề)"
    ],
    "answer": 2,
    "explanation": "Ký hiệu ∀ là lượng từ \"với mọi\" (For all), chỉ định điều kiện phải đúng cho tất cả các phần tử (bộ) thuộc tập hợp.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d1-032",
    "question": "Trong biểu diễn Logic vị từ, biểu thức: \"t.nam = true ∨ t.nam = false\" đối với sinh viên t thể hiện ràng buộc gì?",
    "options": [
      "Ràng buộc khóa chính yêu cầu giới tính của sinh viên không được phép trùng nhau",
      "Ràng buộc liên thuộc tính giữa năm sinh và giới tính của sinh viên trong bảng",
      "Ràng buộc liên bộ bắt buộc lớp học phải có cả sinh viên nam và sinh viên nữ",
      "Ràng buộc miền giá trị của thuộc tính giới tính nam chỉ nhận true hoặc false"
    ],
    "answer": 3,
    "explanation": "Biểu thức kiểm tra giá trị của cột nam chỉ được là true hoặc false, đây là biểu diễn chuẩn của RBTV về miền giá trị thuộc tính boolean.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d1-033",
    "question": "Trong Đồ án Đề tài sinh viên: SINHVIEN(MaSV, Hoten, Namsinh, QQ, Hocluc) và DETAI(MaDT...). Thuộc tính nào sau đây là Khóa chính của bảng SINHVIEN?",
    "options": [
      "Thuộc tính MaSV là khóa chính xác định duy nhất thông tin mỗi sinh viên",
      "Thuộc tính Hoten là khóa chính vì mỗi sinh viên luôn có một danh xưng",
      "Thuộc tính Hocluc là khóa chính phân loại kết quả học tập của sinh viên",
      "Tổ hợp hai thuộc tính (Namsinh, QQ) là khóa chính đại diện cho sinh viên"
    ],
    "answer": 0,
    "explanation": "Mỗi sinh viên có một mã số duy nhất MaSV, đây là khóa chính của quan hệ SINHVIEN.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d1-034",
    "question": "Biểu thức Logic vị từ nào sau đây diễn đạt CHUẨN XÁC NHẤT tính duy nhất của Khóa chính K trong quan hệ R?",
    "options": [
      "∀ t1, t2 ∈ R: t1.K ≠ t2.K ⇒ t1 = t2 (nếu khác khóa thì phải là cùng một bộ)",
      "∀ t1, t2 ∈ R: t1.K = t2.K ⇒ t1 = t2 (nếu trùng khóa thì phải là cùng một bộ)",
      "∃ t1, t2 ∈ R: t1.K = t2.K ∧ t1 ≠ t2 (tồn tại hai bộ khác nhau có cùng khóa)",
      "∀ t ∈ R: t.K > 0 ∧ t.K < 1000000 (khóa chính bắt buộc phải là số nguyên dương)"
    ],
    "answer": 1,
    "explanation": "Định nghĩa hình thức của khóa chính: Với mọi cặp bộ t1, t2 trong R, nếu giá trị khóa K bằng nhau thì hai bộ đó phải trùng khít nhau hoàn toàn (t1 = t2), tức là không thể có 2 bộ khác nhau mà trùng khóa.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d1-035",
    "question": "Trong Đồ án Đề tài, bảng SV_DT(MaSV, MaDT, NoiAD, KQ) lưu sinh viên thực hiện đề tài. Khóa chính của bảng SV_DT là gì?",
    "options": [
      "Chỉ duy nhất một thuộc tính MaDT vì mỗi đề tài chỉ được giao cho đúng một người",
      "Chỉ duy nhất một thuộc tính MaSV vì mỗi sinh viên chỉ được làm đúng một đề tài",
      "Tổ hợp gồm hai thuộc tính (MaSV, MaDT) đại diện cho việc sinh viên làm đề tài",
      "Toàn bộ bốn thuộc tính (MaSV, MaDT, NoiAD, KQ) ghép lại thành một khóa chính"
    ],
    "answer": 2,
    "explanation": "Vì một sinh viên có thể làm nhiều đề tài và một đề tài có thể do nhiều sinh viên thực hiện, khóa chính của bảng kết hợp SV_DT là cặp tổ hợp (MaSV, MaDT).",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d1-036",
    "question": "Cho các nhận định sau về biểu diễn Logic vị từ của RBTV:\n(I) Lượng từ ∀ thường đi kèm với phép kéo theo (⇒).\n(II) Lượng từ ∃ thường đi kèm với phép hội (∧).\n(III) Biểu thức: ∀t ∈ KHOA: t.soCB ≤ 50 là một biểu diễn logic vị từ hoàn toàn hợp lệ.\nKhẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Nhận định (I) sai còn nhận định (II) và (III) đều là nhận định chính xác",
      "Chỉ có nhận định (I) và (II) đúng, nhận định (III) là nhận định sai lầm",
      "Chỉ có duy nhất nhận định (III) là nhận định đúng đắn theo quy chuẩn logic",
      "Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác"
    ],
    "answer": 3,
    "explanation": "Cả 3 nhận định đều chuẩn mực theo lý thuyết Logic vị từ: ∀ thường đi với ⇒; ∃ thường đi với ∧; và ∀t ∈ KHOA: t.soCB <= 50 là biểu diễn chuẩn của ràng buộc số cán bộ khoa.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d1-037",
    "question": "Điền vào chỗ trống: \"Trong bài toán Đồ án Đề tài, quy tắc ràng buộc Khóa ngoại đòi hỏi mọi giá trị MaSV trong bảng SV_DT bắt buộc phải ...(1)... trong bảng ...(2)...\"",
    "options": [
      "đã tồn tại từ trước / SINHVIEN (quan hệ cha chứa thông tin sinh viên)",
      "bị xóa bỏ hoàn toàn / DETAI (quan hệ danh mục các đề tài nghiên cứu)",
      "được mã hóa tự động / KHOA (quan hệ các đơn vị quản lý chuyên môn)",
      "nhận giá trị là NULL / KET_QUA (quan hệ bảng điểm thi của học viên)"
    ],
    "answer": 0,
    "explanation": "Ràng buộc khóa ngoại: SV_DT.MaSV tham chiếu SINHVIEN.MaSV. Do đó mọi MaSV xuất hiện ở SV_DT bắt buộc phải đã tồn tại trong bảng cha SINHVIEN.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d1-038",
    "question": "Trong Đồ án Đề tài, quy tắc nghiệp vụ: \"Sinh viên được tham gia thực hiện đề tài nghiên cứu phải có học lực (Hocluc) từ Khá trở lên\". Bảng Tầm Ảnh Hưởng của quy tắc này kiểm tra ở những đâu?",
    "options": [
      "Chỉ kiểm tra duy nhất khi Thêm một đề tài mới vào bảng DETAI trong hệ thống",
      "Kiểm tra khi Thêm mới vào SV_DT (+) và khi Sửa cột Hocluc ở bảng SINHVIEN (+)",
      "Kiểm tra khi Xóa một sinh viên khỏi bảng SINHVIEN và khi Xóa bảng SV_DT",
      "Chỉ kiểm tra khi Sửa tên đề tài trong DETAI mà không cần kiểm tra sinh viên"
    ],
    "answer": 1,
    "explanation": "Quy tắc: Sinh viên làm đề tài phải có Hocluc ∈ {'Khá', 'Giỏi', 'Xuất sắc'}. Nguy cơ vi phạm xuất hiện khi: 1) Thêm một phân công mới vào SV_DT (phải kiểm tra sinh viên đó có đủ học lực không); 2) Sửa Hocluc ở bảng SINHVIEN (từ Khá hạ xuống Trung bình trong khi đang làm đề tài).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chỉ nhớ kiểm tra ở bảng SV_DT mà quên mất bảng SINHVIEN khi bị hạ học lực.",
      "trickWord": "Bẫy xác định đầy đủ các thao tác trong Bảng Tầm Ảnh Hưởng của ràng buộc điều kiện nghiệp vụ",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VIII.1",
      "tip": "Ràng buộc điều kiện liên bảng: Phải kiểm tra CẢ THỜI ĐIỂM GÁN MỚI (SV_DT) VÀ THỜI ĐIỂM SỬA ĐIỀU KIỆN (SINHVIEN)!"
    }
  },
  {
    "id": "db-c4-d1-039",
    "question": "Xét quy tắc: \"Kinh phí thực hiện của mỗi đề tài nghiên cứu phải lớn hơn 0\" trong DETAI(MaDT, TenDT, Chunhiem, Kinhphi). Biểu thức logic vị từ hình thức nào dưới đây là CHUẨN XÁC?",
    "options": [
      "∀ dt1, dt2 ∈ DETAI: dt1.Kinhphi ≠ dt2.Kinhphi (kinh phí các đề tài không trùng nhau)",
      "∃ dt ∈ DETAI: dt.Kinhphi > 0 (tồn tại ít nhất một đề tài nghiên cứu có kinh phí > 0)",
      "∀ dt ∈ DETAI: dt.Kinhphi > 0 (với mọi bộ dt trong quan hệ DETAI thì kinh phí > 0)",
      "∀ dt ∈ DETAI: dt.Kinhphi = 0 ⇒ dt.MaDT = NULL (kinh phí bằng 0 thì mã đề tài rỗng)"
    ],
    "answer": 2,
    "explanation": "Ràng buộc áp dụng cho TẤT CẢ các đề tài trong bảng DETAI nên sử dụng lượng từ \"với mọi\": ∀ dt ∈ DETAI: dt.Kinhphi > 0.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lượng từ với mọi (∀) và lượng từ tồn tại (∃).",
      "trickWord": "Bẫy lượng từ trong biểu thức Logic vị từ của ràng buộc toàn thể (Universal vs Existential)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VIII.1",
      "tip": "Điều kiện áp dụng cho TẤT CẢ đối tượng ➔ BẮT BUỘC dùng lượng từ VỚI MỌI (∀)!"
    }
  },
  {
    "id": "db-c4-d1-040",
    "question": "Tình huống tổng hợp: Cho quy tắc: \"Mỗi sinh viên chỉ được phép thực hiện tối đa 2 đề tài nghiên cứu\". Đây là loại RBTV nào và thao tác nào cần kiểm tra trong Bảng Tầm Ảnh Hưởng?",
    "options": [
      "RBTV phụ thuộc tồn tại; chỉ kiểm tra duy nhất khi Thêm một đề tài mới vào hệ thống",
      "RBTV miền giá trị của cột MaSV; cần kiểm tra khi Xóa sinh viên khỏi bảng SINHVIEN",
      "RBTV liên thuộc tính của DETAI; cần kiểm tra khi Sửa kinh phí của đề tài nghiên cứu",
      "RBTV liên bộ liên quan hệ; cần kiểm tra khi Thêm mới vào SV_DT (+) và khi Sửa MaSV (+)"
    ],
    "answer": 3,
    "explanation": "Quy tắc giới hạn số lượng đề tài của mỗi sinh viên liên quan đến việc đếm số dòng trong SV_DT theo từng MaSV (liên bộ liên quan hệ). Nguy cơ vượt quá 2 đề tài chỉ xảy ra khi: 1) Thêm một phân công mới vào SV_DT (+); 2) Sửa MaSV của một dòng trong SV_DT (+). Thao tác Xóa (-) an toàn vì chỉ làm giảm số lượng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm với ràng buộc miền giá trị hoặc đánh dấu kiểm tra cả thao tác Xóa.",
      "trickWord": "Bẫy phân loại và Bảng Tầm Ảnh Hưởng của ràng buộc giới hạn số lượng tham gia tối đa",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.2 & VIII.1",
      "tip": "Ràng buộc \"Tối đa N...\": Thêm (+) và Sửa (+). Xóa mang dấu TRỪ (-) vì bớt đi thì càng không thể vượt quá N!"
    }
  }
];
