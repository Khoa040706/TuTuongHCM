import fs from 'fs';

// ========================================================================
// KỊCH BẢN BIÊN SOẠN & CÂN BẰNG ĐÁP ÁN: MÔN HỆ CƠ SỞ DỮ LIỆU - CHƯƠNG IV
// CHƯƠNG IV: RÀNG BUỘC TOÀN VẸN (INTEGRITY CONSTRAINTS)
// 2 BỘ ĐỀ ĐỘC LẬP: db-c4-d1 (40 câu) & db-c4-d2 (40 câu) = 80 CÂU HỌC THUẬT
// TỶ LỆ ĐỘ KHÓ: 12 Dễ (30%), 16 Trung bình (40%), 12 Khó (30%)
// MA TRẬN 6 DẠNG: Chọn câu SAI, Điền khuyết, Chùm mệnh đề, Logic vị từ, Bảng tầm ảnh hưởng, Khái niệm & Cây phả hệ
// TIÊU CHUẨN: Delta L <= 15 chars, Phân bổ 10A - 10B - 10C - 10D
// ========================================================================

const targetAnswers1 = [
  0, 1, 2, 3, 0, 1, 2, 3, 0, 1, // 1 - 10
  2, 3, 0, 1, 2, 3, 0, 1, 2, 3, // 11 - 20
  0, 1, 2, 3, 0, 1, 2, 3, 0, 1, // 21 - 30
  2, 3, 0, 1, 2, 3, 0, 1, 2, 3  // 31 - 40
];

const targetAnswers2 = [
  1, 2, 3, 0, 1, 2, 3, 0, 1, 2, // 1 - 10
  3, 0, 1, 2, 3, 0, 1, 2, 3, 0, // 11 - 20
  1, 2, 3, 0, 1, 2, 3, 0, 1, 2, // 21 - 30
  3, 0, 1, 2, 3, 0, 1, 2, 3, 0  // 31 - 40
];

// ------------------------------------------------------------------------
// ĐỀ SỐ 1: db-c4-d1 (40 CÂU)
// ------------------------------------------------------------------------
const questionsDbCh4Part1 = [
  // --- CỤM 1: KHÁI NIỆM RBTV, 3 YẾU TỐ & KỸ THUẬT BẢNG TẦM ẢNH HƯỞNG (Câu 1 - 10) ---
  {
    id: 'db-c4-d1-001',
    question: 'Khái niệm Ràng buộc toàn vẹn (RBTV) trong cơ sở dữ liệu được định nghĩa chuẩn xác là gì?',
    options: [
      'Là các điều kiện bất biến mà mọi đối tượng CSDL phải thỏa mãn ở mọi thời điểm',
      'Là thuật toán nén dữ liệu giúp giảm thiểu không gian lưu trữ vật lý của ổ đĩa',
      'Là phương pháp mã hóa đường truyền mạng giữa máy trạm khách và máy chủ CSDL',
      'Là bảng sao lưu dự phòng tạm thời được tự động tạo ra khi có sự cố mất điện'
    ],
    answer: 0,
    explanation: 'Giáo trình nêu rõ: RBTV là những điều kiện bất biến mà các đối tượng của CSDL phải thỏa mãn ở bất kỳ thời điểm nào. Trong thực tế, RBTV chính là các quy tắc quản lý (business rules).',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d1-002',
    question: 'Một Ràng buộc toàn vẹn (RBTV) hoàn chỉnh trong cơ sở dữ liệu được xác định bởi 3 yếu tố cốt lõi nào?',
    options: [
      'Bao gồm 3 yếu tố: Điều kiện (Condition), Bối cảnh (Context) và Tầm ảnh hưởng',
      'Bao gồm 3 yếu tố: Mã nguồn chương trình, Tên bảng dữ liệu và Cổng kết nối mạng',
      'Bao gồm 3 yếu tố: Dung lượng bộ nhớ RAM, Tốc độ xung nhịp CPU và Ổ đĩa cứng SSD',
      'Bao gồm 3 yếu tố: Tài khoản quản trị, Mật khẩu người dùng và Quyền hạn truy cập'
    ],
    answer: 0,
    explanation: 'Một RBTV được xác định hoàn chỉnh bởi 3 yếu tố: a) Điều kiện (quy tắc logic); b) Bối cảnh (các bảng có hiệu lực); c) Tầm ảnh hưởng (thời điểm cần kiểm tra khi Thêm, Sửa, Xóa).',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d1-003',
    question: 'Trong Bảng Tầm Ảnh Hưởng của một ràng buộc toàn vẹn, ký hiệu dấu trừ (\"-\") mang ý nghĩa kỹ thuật gì?',
    options: [
      'Không cần kiểm tra RBTV vì thao tác này chắc chắn không làm vi phạm quy tắc',
      'Bắt buộc hệ thống phải dừng lại và kích hoạt thủ tục kiểm tra toàn bộ bảng',
      'Thao tác bị cấm hoàn toàn và hệ quản trị CSDL sẽ từ chối quyền thực thi lệnh',
      'Dữ liệu vừa cập nhật sẽ tự động bị hệ thống trừ đi một đơn vị giá trị số học'
    ],
    answer: 0,
    explanation: 'Ký hiệu \"-\" trong Bảng Tầm Ảnh Hưởng có nghĩa là không cần kiểm tra, thao tác cập nhật đó chắc chắn an toàn và không thể vi phạm RBTV, giúp tối ưu hóa hiệu năng I/O.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d1-004',
    question: 'Hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) kích hoạt cơ chế kiểm tra các ràng buộc toàn vẹn vào thời điểm nào?',
    options: [
      'Kích hoạt ngay khi thực hiện cập nhật (Thêm, Sửa, Xóa) hoặc khi bảo trì định kỳ',
      'Chỉ kích hoạt duy nhất một lần vào thời điểm người quản trị khởi tạo máy chủ',
      'Chỉ kích hoạt khi người dùng gửi yêu cầu truy vấn trích xuất dữ liệu SELECT',
      'Kích hoạt ngẫu nhiên mỗi khi bộ nhớ đệm RAM của máy chủ cơ sở dữ liệu bị đầy'
    ],
    answer: 0,
    explanation: 'RDBMS kiểm tra RBTV: 1) Ngay khi thực hiện thao tác cập nhật (Thêm, Sửa, Xóa); 2) Định kỳ hoặc đột xuất khi bảo trì hệ thống.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d1-005',
    question: 'Khẳng định nào sau đây là NHẬN ĐỊNH SAI về kỹ thuật lập Bảng Tầm Ảnh Hưởng của một ràng buộc toàn vẹn?',
    options: [
      'Tất cả các ô trong Bảng Tầm Ảnh Hưởng bắt buộc phải luôn luôn mang dấu cộng',
      'Dấu cộng (+) chỉ định hệ quản trị CSDL cần kích hoạt mã kiểm tra tính hợp lệ',
      'Dấu +(*) hoặc -(*) thể hiện việc kiểm tra có điều kiện khi sửa đúng thuộc tính',
      'Bảng Tầm Ảnh Hưởng gồm các cột tương ứng với ba thao tác: Thêm, Xóa và Sửa'
    ],
    answer: 0,
    explanation: 'Nhận định A sai vì mục tiêu tối thượng của Bảng Tầm Ảnh Hưởng là xác định đúng ô nào cần kiểm tra (+), ô nào an toàn không cần kiểm tra (-), chứ không phải tất cả đều là dấu cộng.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d1-006',
    question: 'Điền vào chỗ trống: \"Bối cảnh (Context) của một ràng buộc toàn vẹn là ...(1)... mà ràng buộc đó có hiệu lực, có thể gồm ...(2)... tùy theo bản chất của quy tắc.\"',
    options: [
      'những quan hệ (bảng dữ liệu) / một quan hệ hoặc nhiều quan hệ khác nhau',
      'những người dùng quản trị / một nhóm tài khoản hoặc toàn bộ máy chủ mạng',
      'những câu lệnh truy vấn SELECT / một dòng đơn lẻ hoặc nhiều trang bộ nhớ',
      'những tệp tin sao lưu dự phòng / một thiết bị đĩa hoặc toàn bộ phân vùng'
    ],
    answer: 0,
    explanation: 'Bối cảnh (Context) là những quan hệ (bảng) mà RBTV đó có hiệu lực. Có thể là một quan hệ hoặc nhiều quan hệ.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d1-007',
    question: 'Cho các nhận định sau về Bảng Tầm Ảnh Hưởng của ràng buộc Khóa chính (Primary Key):\n(I) Thao tác Thêm một dòng mới luôn mang dấu cộng (+).\n(II) Thao tác Xóa một dòng hiện có luôn mang dấu trừ (-).\n(III) Thao tác Sửa các thuộc tính khóa chính luôn mang dấu cộng (+).\nKhẳng định nào sau đây là ĐÚNG?',
    options: [
      'Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác',
      'Chỉ có nhận định (I) và (III) đúng, nhận định (II) là nhận định sai lầm',
      'Chỉ có duy nhất nhận định (I) là nhận định đúng, hai nhận định còn lại sai',
      'Nhận định (II) đúng còn nhận định (I) và (III) đều là nhận định sai lệch'
    ],
    answer: 0,
    explanation: 'Cả 3 nhận định đều đúng. Với Khóa chính: Thêm mới có thể trùng khóa (+); Xóa bớt một dòng thì tập còn lại càng không thể trùng khóa (-); Sửa thuộc tính khóa chính có thể gây trùng khóa (+).',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d1-008',
    question: 'Xét Bảng Tầm Ảnh Hưởng của ràng buộc Khóa chính: Vì sao thao tác Xóa (Delete) một dòng trong bảng LUÔN LUÔN mang dấu trừ (\"-\")?',
    options: [
      'Vì xóa bớt một bộ thì các bộ còn lại chắc chắn không thể tự trùng nhau được',
      'Vì hệ quản trị cơ sở dữ liệu tự động vô hiệu hóa khóa chính trước khi xóa',
      'Vì khi xóa một dòng thì hệ thống tự động chèn một dòng rỗng bù đắp vào bảng',
      'Vì thao tác xóa dữ liệu không làm thay đổi số lượng các thuộc tính của bảng'
    ],
    answer: 0,
    explanation: 'Giáo trình chỉ rõ: Nếu tập các bộ ban đầu đã không trùng khóa, thì khi xóa bớt một dòng, tập các dòng còn lại hiển nhiên vẫn phân biệt đôi một, tính duy nhất của khóa chính KHÔNG THỂ bị vi phạm (dấu -).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Nhiều người nghĩ thao tác cập nhật nào cũng nguy hiểm nên đánh dấu (+) cho cả lệnh Xóa.',
      trickWord: 'Bẫy thao tác Xóa trong Bảng Tầm Ảnh Hưởng của Khóa chính (Delete operation on PK)',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục III.1.a & V.3',
      tip: 'Khóa chính: Xóa mang dấu TRỪ (-) tuyệt đối! Vì bớt đi 1 dòng thì các dòng còn lại không thể tự trùng nhau.'
    }
  },
  {
    id: 'db-c4-d1-009',
    question: 'Trong Bảng Tầm Ảnh Hưởng của Ràng buộc khóa ngoại (phụ thuộc tồn tại giữa bảng cha R1 và bảng con R2): Dấu kiểm tra ở bảng cha R1 đối với thao tác Xóa là gì?',
    options: [
      'Mang dấu cộng (+) vì xóa dòng cha có nguy cơ làm các dòng con bị mồ côi',
      'Mang dấu trừ (-) vì xóa dòng ở bảng cha không bao giờ ảnh hưởng tới bảng con',
      'Mang dấu trừ có điều kiện vì chỉ kiểm tra khi thuộc tính khóa cha nhận NULL',
      'Không xác định được vì bảng cha không nằm trong bối cảnh của ràng buộc ngoại'
    ],
    answer: 0,
    explanation: 'Khi xóa một dòng ở bảng cha (R1), nếu có dòng ở bảng con (R2) đang tham chiếu đến khóa đó thì việc xóa cha sẽ vi phạm toàn vẹn tham chiếu (làm con bị mồ côi). Do đó thao tác Xóa ở bảng cha BẮT BUỘC mang dấu cộng (+).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm: nghĩ thao tác Xóa là an toàn như ở bảng Khóa chính.',
      trickWord: 'Bẫy thao tác Xóa ở bảng cha trong ràng buộc Khóa ngoại (Delete on parent table in FK)',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục VI.1',
      tip: 'Khóa ngoại: Bảng cha XÓA mang dấu CỘNG (+)! (Bảng con XÓA mới mang dấu TRỪ -).'
    }
  },
  {
    id: 'db-c4-d1-010',
    question: 'Tình huống: Cho ràng buộc C: \"Số cán bộ của một khoa không được vượt quá 50 người\" trong bảng KHOA(makhoa, tenkhoa, soCB). Thao tác nào sau đây mang dấu trừ (\"-\") trong Bảng Tầm Ảnh Hưởng?',
    options: [
      'Thao tác Xóa một khoa và thao tác Sửa tên khoa không liên quan đến cột soCB',
      'Thao tác Thêm một khoa mới vào bảng KHOA và cập nhật giá trị cột số cán bộ',
      'Thao tác Sửa giá trị cột soCB từ mức hai mươi cán bộ lên năm mươi cán bộ',
      'Mọi thao tác Thêm, Sửa, Xóa trên bảng KHOA đều bắt buộc phải mang dấu cộng'
    ],
    answer: 0,
    explanation: 'Ràng buộc quy định soCB <= 50. Khi Xóa một khoa, số cán bộ không tăng thêm nên không thể vi phạm quy tắc (dấu -). Khi Sửa tên khoa (tenkhoa), cột soCB không đổi nên cũng an toàn tuyệt đối (dấu -).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay đánh đồng thao tác Sửa cột bất kỳ đều mang dấu (+).',
      trickWord: 'Bẫy sửa thuộc tính không liên quan đến biểu thức ràng buộc (Update non-involved attribute)',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục III.1 & V.3',
      tip: 'Sửa thuộc tính KHÔNG tham gia biểu thức RBTV ➔ Luôn mang dấu TRỪ (-)!'
    }
  },

  // --- CỤM 2: PHÂN LOẠI RBTV CÓ BỐI CẢNH LÀ MỘT QUAN HỆ (Câu 11 - 20) ---
  {
    id: 'db-c4-d1-011',
    question: 'Ràng buộc toàn vẹn có bối cảnh là MỘT quan hệ được chia thành 3 phân loại chính nào dưới đây?',
    options: [
      'RBTV về miền giá trị, RBTV liên thuộc tính và RBTV liên bộ',
      'RBTV khóa ngoại, RBTV chu trình đồ thị và RBTV thuộc tính suy diễn',
      'RBTV bảo mật đa tầng, RBTV lưu trữ vật lý và RBTV giao tác mạng',
      'RBTV chỉ mục tự động, RBTV sao lưu tập tin và RBTV giải phóng RAM'
    ],
    answer: 0,
    explanation: 'Giáo trình phân loại rõ: Bối cảnh một quan hệ gồm 3 loại: 1) Miền giá trị; 2) Liên thuộc tính; 3) Liên bộ.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d1-012',
    question: 'Trong CSDL HSSINHVIEN, quy tắc: \"Điểm thi của sinh viên phải từ 0 đến 10\" thuộc loại ràng buộc toàn vẹn nào?',
    options: [
      'Ràng buộc toàn vẹn về miền giá trị (Domain integrity constraint)',
      'Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ đơn',
      'Ràng buộc toàn vẹn về phụ thuộc tồn tại giữa hai quan hệ con',
      'Ràng buộc toàn vẹn do chu trình đồ thị của lược đồ quan hệ'
    ],
    answer: 0,
    explanation: 'Điều kiện điểm thi từ 0 đến 10 áp dụng trực tiếp và độc lập lên miền giá trị của thuộc tính Diem, do đó thuộc loại RBTV về miền giá trị.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d1-013',
    question: 'Quy tắc: \"Trong bảng HOADON, ngày lập hóa đơn (ngayHD) phải trước hoặc cùng ngày xuất kho (ngayXuat)\" thuộc loại RBTV nào?',
    options: [
      'Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ đơn',
      'Ràng buộc toàn vẹn về miền giá trị của từng thuộc tính riêng',
      'Ràng buộc toàn vẹn liên bộ giữa các dòng dữ liệu khác nhau',
      'Ràng buộc toàn vẹn về thuộc tính tổng hợp từ nhiều quan hệ'
    ],
    answer: 0,
    explanation: 'Quy tắc hd.ngayHD <= hd.ngayXuat là mối quan hệ giữa 2 thuộc tính khác nhau trong CÙNG MỘT DÒNG (bộ) của bảng HOADON, nên thuộc loại RBTV liên thuộc tính.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d1-014',
    question: 'Khẳng định nào sau đây diễn giải CHUẨN XÁC NHẤT về bản chất của Ràng buộc toàn vẹn liên bộ (Inter-tuple constraint)?',
    options: [
      'Là mối quan hệ ràng buộc giữa các bộ (dòng) khác nhau trong cùng một quan hệ',
      'Là điều kiện kiểm tra định dạng dữ liệu của từng ô độc lập trong bảng',
      'Là ràng buộc giữa hai cột dữ liệu nằm trên hai dòng hoàn toàn ngẫu nhiên',
      'Là sự kết nối tham chiếu khóa ngoại giữa bảng cha và các bảng dữ liệu con'
    ],
    answer: 0,
    explanation: 'RBTV liên bộ là sự ràng buộc giữa các bộ (tuples) bên trong MỘT quan hệ. Ví dụ: Ràng buộc khóa chính (không được có 2 bộ trùng mã số).',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d1-015',
    question: 'Trong CSDL HSSINHVIEN, ràng buộc C1: \"Mỗi sinh viên có một mã số SV duy nhất không trùng lặp\" được xếp vào loại RBTV nào?',
    options: [
      'Ràng buộc toàn vẹn liên bộ (Inter-tuple constraint) trong bảng SINH_VIEN',
      'Ràng buộc toàn vẹn về miền giá trị (Domain constraint) của cột mã số',
      'Ràng buộc toàn vẹn liên thuộc tính giữa họ tên và mã số của sinh viên',
      'Ràng buộc toàn vẹn về phụ thuộc tồn tại tham chiếu sang danh mục khoa'
    ],
    answer: 0,
    explanation: 'Mã sinh viên là Khóa chính. Khóa chính cấm 2 bộ bất kỳ có cùng giá trị mã số: (∀t1, t2 ∈ SINH_VIEN: t1.maSV = t2.maSV ⇒ t1 = t2), đây là sự so sánh giữa CÁC BỘ với nhau nên là RBTV liên bộ.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d1-016',
    question: 'Điền vào chỗ trống: \"Nếu một thuộc tính A trong quan hệ có thể tính toán được từ các thuộc tính khác trong ...(1)..., người thiết kế CSDL nên ...(2)... thuộc tính A để tránh dư thừa dữ liệu.\"',
    options: [
      'cùng một bộ (dòng) đó / loại bỏ hoàn toàn',
      'toàn bộ các bảng khác / tăng kích thước của',
      'từ điển dữ liệu hệ thống / nhân đôi giá trị',
      'máy chủ phân tán / mã hóa bảo mật cho'
    ],
    answer: 0,
    explanation: 'Giáo trình nêu rõ nguyên tắc thiết kế chuẩn: Nếu thuộc tính A tính được từ các thuộc tính khác trong cùng một bộ, ta có thể loại bỏ A khỏi quan hệ để tránh dư thừa và dị thường cập nhật.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d1-017',
    question: 'Cho các nhận định sau về RBTV trên một quan hệ:\n(I) RBTV miền giá trị chỉ kiểm tra một thuộc tính độc lập trên từng bộ.\n(II) RBTV liên thuộc tính thể hiện mối quan hệ giữa các cột trong cùng một dòng.\n(III) Quy tắc tamUng ≤ luong là một ví dụ chuẩn mực của RBTV miền giá trị.\nKhẳng định nào sau đây là ĐÚNG?',
    options: [
      'Chỉ có nhận định (I) và (II) đúng, nhận định (III) là nhận định sai lầm',
      'Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác',
      'Chỉ có duy nhất nhận định (III) là nhận định hoàn toàn đúng đắn theo sách',
      'Nhận định (I) sai còn nhận định (II) và (III) đều là nhận định chính xác'
    ],
    answer: 0,
    explanation: 'Nhận định (I) và (II) đúng. Nhận định (III) sai vì giáo trình ghi rõ: tamUng <= luong là VÍ DỤ SAI của miền giá trị, đây thực chất là RBTV liên thuộc tính.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d1-018',
    question: 'Trong quan hệ NHANVIEN(maNV, tenNV, luong, tamUng, conLai), quy tắc: \"tamUng ≤ luong\". Vì sao giáo trình khẳng định việc coi đây là RBTV miền giá trị là SAI LẦM?',
    options: [
      'Vì điều kiện này so sánh hai cột khác nhau trong cùng bộ chứ không phải miền giá trị',
      'Vì thuộc tính tamUng có kiểu dữ liệu chuỗi ký tự không thể so sánh với số',
      'Vì tiền tạm ứng của nhân viên luôn luôn bắt buộc phải lớn hơn mức lương thực tế',
      'Vì quan hệ NHANVIEN có chứa khóa chính nên mọi ràng buộc đều thành liên bộ'
    ],
    answer: 0,
    explanation: 'Giáo trình nhấn mạnh: Điều kiện tamUng <= luong không thể là RBTV miền giá trị vì miền giá trị chỉ áp dụng trên từng thuộc tính riêng lẻ đối với tập giá trị hợp lệ dom(A). Việc đối sánh giữa 2 thuộc tính trong cùng dòng là bản chất của RBTV LIÊN THUỘC TÍNH.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay thấy điều kiện kiểm tra số tiền nên nhầm với ràng buộc miền giá trị > 0.',
      trickWord: 'Bẫy nhận thức sai lầm giữa miền giá trị và liên thuộc tính (Domain vs Inter-attribute trap)',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục V.1',
      tip: 'So sánh giữa 2 CỘT trong cùng 1 dòng (A <= B) ➔ 100% là LIÊN THUỘC TÍNH, không phải miền giá trị!'
    }
  },
  {
    id: 'db-c4-d1-019',
    question: 'Ràng buộc C2 trong CSDL HSSINHVIEN: \"Mỗi sinh viên chỉ được phép thi tối đa 2 lần cho một môn học\" trong KET_QUA(maSV, maMH, lanThi, diem) thuộc loại RBTV nào?',
    options: [
      'Ràng buộc về miền giá trị của thuộc tính lanThi (điều kiện lanThi nằm trong tập {1, 2})',
      'Ràng buộc liên bộ giữa các lần thi khác nhau của cùng một sinh viên trong bảng',
      'Ràng buộc liên thuộc tính giữa thuộc tính lần thi lanThi và thuộc tính điểm số',
      'Ràng buộc về phụ thuộc tồn tại tham chiếu sang danh mục các môn học mở lớp'
    ],
    answer: 0,
    explanation: 'Điều kiện mỗi sinh viên thi tối đa 2 lần được quản lý thông qua miền giá trị hợp lệ của cột lanThi chỉ được nhận giá trị 1 hoặc 2 (lanThi ∈ {1, 2} hay lanThi <= 2), do đó thuộc loại RBTV về miền giá trị.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh thấy cụm từ \"thi tối đa 2 lần\" nên nghĩ phải đếm các bộ (dòng) của sinh viên đó và chọn liên bộ.',
      trickWord: 'Bẫy hình thức ngôn ngữ của ràng buộc số lần thi (lanThi domain constraint)',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục II.1 Ví dụ 1',
      tip: 'Số lần thi tối đa 2 lần được cài đặt qua điều kiện miền giá trị: lanThi <= 2 (hoặc lanThi IN (1, 2)).'
    }
  },
  {
    id: 'db-c4-d1-020',
    question: 'Tình huống: Trong bảng KET_QUA(maSV, maMH, lanThi, Diem), quy tắc: \"Diem là số thực từ 0 đến 10 với độ chính xác đến 0.5 điểm\". Biểu thức số học chuẩn nào diễn đạt điều kiện bước nhảy này?',
    options: [
      'Điều kiện số học: ((t.Diem * 4) mod 2 = 0) với mọi bộ t thuộc quan hệ KET_QUA',
      'Điều kiện số học: (t.Diem mod 0.5 = 0) trong tập hợp số nguyên không âm',
      'Điều kiện số học: (round(t.Diem, 1) = t.Diem) với mọi giá trị điểm số',
      'Điều kiện số học: (t.Diem * 10 mod 5 = 1) với mọi bộ t thuộc quan hệ bảng'
    ],
    answer: 0,
    explanation: 'Giáo trình Mục V.1 Ví dụ 4 ghi rõ: Điểm thi 0..10 có bước nhảy 0.5 (như 0, 0.5, 1, 1.5...) được biểu diễn số học bằng: ((t.Diem * 4) mod 2 = 0, ∀t ∈ KetQua) hoặc (t.Diem * 2 là số nguyên).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Nhiều người nghĩ toán tử mod dùng được trực tiếp cho số thực 0.5 trong biểu thức hình thức.',
      trickWord: 'Bẫy biểu diễn số học bước nhảy độ chính xác điểm thi (Step precision arithmetic expression)',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục V.1',
      tip: 'Bước nhảy 0.5: Quy đồng nguyên ((Diem * 4) mod 2 = 0) hoặc ((Diem * 2) mod 1 = 0).'
    }
  },

  // --- CỤM 3: PHÂN LOẠI RBTV CÓ BỐI CẢNH LÀ NHIỀU QUAN HỆ & CHU TRÌNH ĐỒ THỊ (Câu 21 - 30) ---
  {
    id: 'db-c4-d1-021',
    question: 'Ràng buộc về phụ thuộc tồn tại (Existence dependency) trong cơ sở dữ liệu quan hệ còn được gọi bằng tên phổ biến nào?',
    options: [
      'Ràng buộc khóa ngoại (Foreign key / Referential integrity constraint)',
      'Ràng buộc khóa chính duy nhất của các thực thể trong cơ sở dữ liệu',
      'Ràng buộc miền giá trị mở rộng cho các thuộc tính có kiểu ngày tháng',
      'Ràng buộc tối ưu hóa tốc độ truy vấn của cỗ máy tìm kiếm dữ liệu'
    ],
    answer: 0,
    explanation: 'Giáo trình khẳng định: RBTV về phụ thuộc tồn tại còn gọi là ràng buộc khóa ngoại (foreign key) — rất phổ biến trong CSDL quan hệ.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d1-022',
    question: 'Trong CSDL QLHANGHOA, quy tắc: \"Mỗi hóa đơn bán hàng phải có ít nhất một mặt hàng\" thuộc loại RBTV nào?',
    options: [
      'Ràng buộc toàn vẹn liên bộ, liên quan hệ (giữa HOA_DON và CTIET_HD)',
      'Ràng buộc toàn vẹn về miền giá trị của thuộc tính số lượng trong bảng',
      'Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ HOA_DON',
      'Ràng buộc toàn vẹn về phụ thuộc hàm suy diễn của bảng HANG_HOA'
    ],
    answer: 0,
    explanation: 'Quy tắc này ràng buộc giữa tập các bộ của HOA_DON và tập các bộ của CTIET_HD (ứng với 1 dòng HOA_DON phải tồn tại ít nhất 1 dòng CTIET_HD có cùng soHD), do đó thuộc loại RBTV liên bộ, liên quan hệ.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d1-023',
    question: 'Một thuộc tính được gọi là \"Thuộc tính tổng hợp\" (Derived / Aggregate attribute) khi giá trị của nó thỏa mãn điều kiện nào?',
    options: [
      'Được tính toán tự động từ các thuộc tính của các quan hệ khác trong CSDL',
      'Được nhập trực tiếp từ bàn phím và không thể thay đổi sau khi tạo lập',
      'Là khóa chính đại diện cho tất cả các bảng dữ liệu trong toàn hệ thống',
      'Được mã hóa bằng hàm băm một chiều để phục vụ lưu trữ mật khẩu an toàn'
    ],
    answer: 0,
    explanation: 'Thuộc tính tổng hợp là thuộc tính mà giá trị của nó được tính toán giá trị từ các thuộc tính của các quan hệ khác (Ví dụ: congNo tính từ tổng tiền hóa đơn trừ đi tổng tiền phiếu thu).',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d1-024',
    question: 'Dấu hiệu toán học nào sau đây chứng minh sự tồn tại phụ thuộc của quan hệ R2 vào quan hệ R1 theo giáo trình?',
    options: [
      'Khóa chính K1 của R1 là tập con của khóa chính phức hợp K2 của R2 (K1 ⊆ K2)',
      'Số lượng thuộc tính của quan hệ R1 lớn hơn số lượng thuộc tính quan hệ R2',
      'Tên của quan hệ R1 trùng khớp hoàn toàn với một thuộc tính bất kỳ trong R2',
      'Quan hệ R1 và quan hệ R2 có cùng số lượng các dòng dữ liệu bên trong bảng'
    ],
    answer: 0,
    explanation: 'Giáo trình Mục VI.1 chỉ rõ Dấu hiệu 1: Nếu K1 là khóa chính của R1 và K2 là khóa chính của R2, mà K1 ⊆ K2 thì có phụ thuộc tồn tại của R2 vào R1.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d1-025',
    question: 'Quy tắc: "Ngày lập hóa đơn (HOA_DON.ngayHD) phải sau hoặc bằng ngày đặt hàng (DAT_HANG.ngayDH)" thuộc loại RBTV nào?',
    options: [
      'Ràng buộc toàn vẹn liên thuộc tính, liên quan hệ giữa hai quan hệ',
      'Ràng buộc toàn vẹn liên bộ trong cùng một quan hệ đơn bảng HOA_DON',
      'Ràng buộc toàn vẹn về miền giá trị của thuộc tính ngày đặt hàng',
      'Ràng buộc toàn vẹn do chu trình đồ thị của các bảng kinh doanh'
    ],
    answer: 0,
    explanation: 'Ràng buộc này so sánh giữa 2 thuộc tính (ngayHD và ngayDH) nằm ở 2 LƯỢC ĐỒ QUAN HỆ KHÁC NHAU (HOA_DON và DAT_HANG), nên được xếp vào loại RBTV liên thuộc tính, liên quan hệ.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d1-026',
    question: 'Trong đồ thị biểu diễn lược đồ CSDL phục vụ phân tích RBTV chu trình, hai loại nút cơ bản của đồ thị là gì?',
    options: [
      'Nút thuộc tính (Attribute nodes) và Nút lược đồ quan hệ (Relation nodes)',
      'Nút máy chủ máy khách và Nút đường truyền cáp quang của mạng nội bộ',
      'Nút tài khoản người dùng và Nút quyền hạn truy cập mức bảng dữ liệu',
      'Nút bản ghi dữ liệu hiện tại và Nút bản ghi dữ liệu trong lịch sử sao lưu'
    ],
    answer: 0,
    explanation: 'Lược đồ CSDL được biểu diễn bằng đồ thị vô hướng gồm 2 loại nút: Nút thuộc tính (A) và Nút lược đồ quan hệ (R). Một cung nối A với R nếu A ∈ R.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d1-027',
    question: 'Cho CSDL QLHANGHOA. Công thức tính công nợ của khách hàng: congNo = Tổng trị giá các hóa đơn bán − Tổng tiền các phiếu thu. Khi phát sinh một Phiếu thu mới (Thêm phiếu thu), công nợ thay đổi thế nào?',
    options: [
      'Công nợ của khách hàng sẽ giảm đi đúng bằng số tiền ghi trên phiếu thu mới',
      'Công nợ của khách hàng sẽ tăng thêm đúng bằng số tiền ghi trên phiếu thu mới',
      'Công nợ của khách hàng tự động được xóa về 0 bất kể số tiền thu được là bao',
      'Công nợ của khách hàng không đổi vì phiếu thu chỉ ảnh hưởng đến quỹ tiền mặt'
    ],
    answer: 0,
    explanation: 'Theo định nghĩa: congNo = Tổng_Ban - Tổng_Thu. Do đó khi Thêm một phiếu thu (tăng Tổng_Thu), số tiền nợ congNo của khách hàng sẽ giảm tương ứng.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d1-028',
    question: 'Khi đồ thị lược đồ CSDL xuất hiện chu trình (Ví dụ chu trình 3 bảng DAT_HANG - HOA_DON - CTIET_HD), chính sách giao hàng CHUẨN MỰC của CSDL QLHANGHOA là gì?',
    options: [
      'Chỉ giao các mặt hàng khách đã đặt và không bao giờ giao vượt số lượng đặt',
      'Bắt buộc phải giao đầy đủ 100% tất cả các mặt hàng có trong đơn đặt hàng',
      'Công ty được phép giao tùy ý mọi mặt hàng dù khách hàng có đặt mua hay không',
      'Hủy toàn bộ đơn đặt hàng nếu kho hàng thiếu hụt dù chỉ một sản phẩm duy nhất'
    ],
    answer: 0,
    explanation: 'Giáo trình Mục VI.3 nêu rõ: CSDL QLHANGHOA áp dụng chính sách (2): Một hóa đơn chỉ giao những mặt hàng khách đã đặt, có thể không giao đủ nhưng KHÔNG BAO GIỜ GIAO VƯỢT yêu cầu đặt hàng.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn phương án lý tưởng là \"phải giao đầy đủ 100% mặt hàng\" (Chính sách 1).',
      trickWord: 'Bẫy 3 trường hợp chính sách giao hàng của chu trình đồ thị CSDL QLHANGHOA',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục VI.3 Ví dụ 12',
      tip: 'Chuẩn CSDL QLHANGHOA: Chính sách (2) ➔ Không bắt buộc giao đủ, nhưng TUYỆT ĐỐI KHÔNG GIAO VƯỢT!'
    }
  },
  {
    id: 'db-c4-d1-029',
    question: 'Tình huống: Bảng KHACH có thuộc tính tổng hợp congNo tính từ HOA_DON và PHIEU_THU. Trong Bảng Tầm Ảnh Hưởng đối với bảng PHIEU_THU, thao tác nào cần phải kiểm tra (+)?',
    options: [
      'Cả ba thao tác: Thêm một phiếu thu, Xóa một phiếu thu và Sửa tiền phiếu thu (+)',
      'Chỉ duy nhất thao tác Thêm phiếu thu mang dấu cộng, Xóa và Sửa mang dấu trừ',
      'Chỉ thao tác Xóa phiếu thu mang dấu cộng, Thêm và Sửa an toàn không kiểm tra',
      'Bảng PHIEU_THU hoàn toàn không bị ảnh hưởng vì cột congNo nằm ở bảng KHACH'
    ],
    answer: 0,
    explanation: 'Thuộc tính tổng hợp congNo phụ thuộc trực tiếp vào từng phiếu thu. Dù Thêm, Xóa hay Sửa (soTien, maKH) ở bảng PHIEU_THU đều làm thay đổi tổng tiền đã thu, dẫn đến giá trị congNo ở bảng KHACH bị sai lệch nếu không cập nhật lại. Do đó cả 3 thao tác đều mang dấu (+).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ bảng chứa thuộc tính (KHACH) mới chịu ảnh hưởng, bảng nguồn (PHIEU_THU) thì không.',
      trickWord: 'Bẫy Bảng Tầm Ảnh Hưởng của thuộc tính tổng hợp trên các bảng nguồn',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục VI.2.c',
      tip: 'Thuộc tính tổng hợp: Mọi thao tác Thêm, Xóa, Sửa trên CÁC BẢNG NGUỒN đều mang dấu CỘNG (+)!'
    }
  },
  {
    id: 'db-c4-d1-030',
    question: 'Cho quy tắc: \"Mỗi hóa đơn phải có ít nhất một mặt hàng\" (HOA_DON và CTIET_HD). Khi thực hiện thao tác XÓA một dòng trong bảng CTIET_HD, hệ thống có cần kiểm tra RBTV không?',
    options: [
      'Có cần kiểm tra (+) vì nếu xóa dòng chi tiết cuối cùng thì hóa đơn sẽ bị rỗng',
      'Không cần kiểm tra (-) vì xóa bớt mặt hàng chỉ làm giảm bớt số lượng chi tiết',
      'Chỉ kiểm tra khi người dùng xóa toàn bộ các dòng của bảng bằng lệnh TRUNCATE',
      'Không xác định được vì thao tác xóa ở bảng con luôn luôn mặc định mang dấu trừ'
    ],
    answer: 0,
    explanation: 'Ràng buộc đòi hỏi mỗi hóa đơn phải có ÍT NHẤT 1 mặt hàng. Khi xóa một dòng trong CTIET_HD, nếu đó là mặt hàng duy nhất còn lại của hóa đơn đó thì hóa đơn sẽ vi phạm ràng buộc (không còn mặt hàng nào). Do đó thao tác Xóa ở CTIET_HD bắt buộc mang dấu CỘNG (+).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Nhiều người nghĩ bảng con CTIET_HD khi Xóa luôn mang dấu (-) như trong ràng buộc khóa ngoại thông thường.',
      trickWord: 'Bẫy thao tác Xóa bảng con trong RBTV liên bộ liên quan hệ tối thiểu một dòng',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục VI.2.a',
      tip: 'Ràng buộc \"Ít nhất một...\": Xóa ở bảng con mang dấu CỘNG (+) vì nguy cơ xóa sạch thành số 0!'
    }
  },

  // --- CỤM 4: BIỂU DIỄN LOGIC VỊ TỪ, CSDL THỰC TẾ & ĐỒ ÁN ĐỀ TÀI (Câu 31 - 40) ---
  {
    id: 'db-c4-d1-031',
    question: 'Trong biểu diễn hình thức của RBTV bằng Logic vị từ bậc nhất, ký hiệu toán học \"∀\" mang ý nghĩa là gì?',
    options: [
      'Lượng từ với mọi (Universal quantifier, áp dụng cho tất cả các bộ)',
      'Lượng từ tồn tại (Existential quantifier, chỉ cần có ít nhất một bộ)',
      'Toán tử kéo theo (Implication operator, nếu điều kiện này thì điều kiện kia)',
      'Toán tử tuyển logic (Logical disjunction, phép toán OR giữa hai mệnh đề)'
    ],
    answer: 0,
    explanation: 'Ký hiệu ∀ là lượng từ \"với mọi\" (For all), chỉ định điều kiện phải đúng cho tất cả các phần tử (bộ) thuộc tập hợp.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d1-032',
    question: 'Trong biểu diễn Logic vị từ, biểu thức: \"t.nam = true ∨ t.nam = false\" đối với sinh viên t thể hiện ràng buộc gì?',
    options: [
      'Ràng buộc miền giá trị của thuộc tính giới tính nam chỉ nhận true hoặc false',
      'Ràng buộc liên thuộc tính giữa năm sinh và giới tính của sinh viên trong bảng',
      'Ràng buộc liên bộ bắt buộc lớp học phải có cả sinh viên nam và sinh viên nữ',
      'Ràng buộc khóa chính yêu cầu giới tính của sinh viên không được phép trùng nhau'
    ],
    answer: 0,
    explanation: 'Biểu thức kiểm tra giá trị của cột nam chỉ được là true hoặc false, đây là biểu diễn chuẩn của RBTV về miền giá trị thuộc tính boolean.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d1-033',
    question: 'Trong Đồ án Đề tài sinh viên: SINHVIEN(MaSV, Hoten, Namsinh, QQ, Hocluc) và DETAI(MaDT...). Thuộc tính nào sau đây là Khóa chính của bảng SINHVIEN?',
    options: [
      'Thuộc tính MaSV là khóa chính xác định duy nhất thông tin mỗi sinh viên',
      'Thuộc tính Hoten là khóa chính vì mỗi sinh viên luôn có một danh xưng',
      'Thuộc tính Hocluc là khóa chính phân loại kết quả học tập của sinh viên',
      'Tổ hợp hai thuộc tính (Namsinh, QQ) là khóa chính đại diện cho sinh viên'
    ],
    answer: 0,
    explanation: 'Mỗi sinh viên có một mã số duy nhất MaSV, đây là khóa chính của quan hệ SINHVIEN.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d1-034',
    question: 'Biểu thức Logic vị từ nào sau đây diễn đạt CHUẨN XÁC NHẤT tính duy nhất của Khóa chính K trong quan hệ R?',
    options: [
      '∀ t1, t2 ∈ R: t1.K = t2.K ⇒ t1 = t2 (nếu trùng khóa thì phải là cùng một bộ)',
      '∀ t1, t2 ∈ R: t1.K ≠ t2.K ⇒ t1 = t2 (nếu khác khóa thì phải là cùng một bộ)',
      '∃ t1, t2 ∈ R: t1.K = t2.K ∧ t1 ≠ t2 (tồn tại hai bộ khác nhau có cùng khóa)',
      '∀ t ∈ R: t.K > 0 ∧ t.K < 1000000 (khóa chính bắt buộc phải là số nguyên dương)'
    ],
    answer: 0,
    explanation: 'Định nghĩa hình thức của khóa chính: Với mọi cặp bộ t1, t2 trong R, nếu giá trị khóa K bằng nhau thì hai bộ đó phải trùng khít nhau hoàn toàn (t1 = t2), tức là không thể có 2 bộ khác nhau mà trùng khóa.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d1-035',
    question: 'Trong Đồ án Đề tài, bảng SV_DT(MaSV, MaDT, NoiAD, KQ) lưu sinh viên thực hiện đề tài. Khóa chính của bảng SV_DT là gì?',
    options: [
      'Tổ hợp gồm hai thuộc tính (MaSV, MaDT) đại diện cho việc sinh viên làm đề tài',
      'Chỉ duy nhất một thuộc tính MaSV vì mỗi sinh viên chỉ được làm đúng một đề tài',
      'Chỉ duy nhất một thuộc tính MaDT vì mỗi đề tài chỉ được giao cho đúng một người',
      'Toàn bộ bốn thuộc tính (MaSV, MaDT, NoiAD, KQ) ghép lại thành một khóa chính'
    ],
    answer: 0,
    explanation: 'Vì một sinh viên có thể làm nhiều đề tài và một đề tài có thể do nhiều sinh viên thực hiện, khóa chính của bảng kết hợp SV_DT là cặp tổ hợp (MaSV, MaDT).',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d1-036',
    question: 'Cho các nhận định sau về biểu diễn Logic vị từ của RBTV:\n(I) Lượng từ ∀ thường đi kèm với phép kéo theo (⇒).\n(II) Lượng từ ∃ thường đi kèm với phép hội (∧).\n(III) Biểu thức: ∀t ∈ KHOA: t.soCB ≤ 50 là một biểu diễn logic vị từ hoàn toàn hợp lệ.\nKhẳng định nào sau đây là ĐÚNG?',
    options: [
      'Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác',
      'Chỉ có nhận định (I) và (II) đúng, nhận định (III) là nhận định sai lầm',
      'Chỉ có duy nhất nhận định (III) là nhận định đúng đắn theo quy chuẩn logic',
      'Nhận định (I) sai còn nhận định (II) và (III) đều là nhận định chính xác'
    ],
    answer: 0,
    explanation: 'Cả 3 nhận định đều chuẩn mực theo lý thuyết Logic vị từ: ∀ thường đi với ⇒; ∃ thường đi với ∧; và ∀t ∈ KHOA: t.soCB <= 50 là biểu diễn chuẩn của ràng buộc số cán bộ khoa.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d1-037',
    question: 'Điền vào chỗ trống: \"Trong bài toán Đồ án Đề tài, quy tắc ràng buộc Khóa ngoại đòi hỏi mọi giá trị MaSV trong bảng SV_DT bắt buộc phải ...(1)... trong bảng ...(2)...\"',
    options: [
      'đã tồn tại từ trước / SINHVIEN (quan hệ cha chứa thông tin sinh viên)',
      'bị xóa bỏ hoàn toàn / DETAI (quan hệ danh mục các đề tài nghiên cứu)',
      'được mã hóa tự động / KHOA (quan hệ các đơn vị quản lý chuyên môn)',
      'nhận giá trị là NULL / KET_QUA (quan hệ bảng điểm thi của học viên)'
    ],
    answer: 0,
    explanation: 'Ràng buộc khóa ngoại: SV_DT.MaSV tham chiếu SINHVIEN.MaSV. Do đó mọi MaSV xuất hiện ở SV_DT bắt buộc phải đã tồn tại trong bảng cha SINHVIEN.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d1-038',
    question: 'Trong Đồ án Đề tài, quy tắc nghiệp vụ: \"Sinh viên được tham gia thực hiện đề tài nghiên cứu phải có học lực (Hocluc) từ Khá trở lên\". Bảng Tầm Ảnh Hưởng của quy tắc này kiểm tra ở những đâu?',
    options: [
      'Kiểm tra khi Thêm mới vào SV_DT (+) và khi Sửa cột Hocluc ở bảng SINHVIEN (+)',
      'Chỉ kiểm tra duy nhất khi Thêm một đề tài mới vào bảng DETAI trong hệ thống',
      'Kiểm tra khi Xóa một sinh viên khỏi bảng SINHVIEN và khi Xóa bảng SV_DT',
      'Chỉ kiểm tra khi Sửa tên đề tài trong DETAI mà không cần kiểm tra sinh viên'
    ],
    answer: 0,
    explanation: 'Quy tắc: Sinh viên làm đề tài phải có Hocluc ∈ {\'Khá\', \'Giỏi\', \'Xuất sắc\'}. Nguy cơ vi phạm xuất hiện khi: 1) Thêm một phân công mới vào SV_DT (phải kiểm tra sinh viên đó có đủ học lực không); 2) Sửa Hocluc ở bảng SINHVIEN (từ Khá hạ xuống Trung bình trong khi đang làm đề tài).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chỉ nhớ kiểm tra ở bảng SV_DT mà quên mất bảng SINHVIEN khi bị hạ học lực.',
      trickWord: 'Bẫy xác định đầy đủ các thao tác trong Bảng Tầm Ảnh Hưởng của ràng buộc điều kiện nghiệp vụ',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục VIII.1',
      tip: 'Ràng buộc điều kiện liên bảng: Phải kiểm tra CẢ THỜI ĐIỂM GÁN MỚI (SV_DT) VÀ THỜI ĐIỂM SỬA ĐIỀU KIỆN (SINHVIEN)!'
    }
  },
  {
    id: 'db-c4-d1-039',
    question: 'Xét quy tắc: \"Kinh phí thực hiện của mỗi đề tài nghiên cứu phải lớn hơn 0\" trong DETAI(MaDT, TenDT, Chunhiem, Kinhphi). Biểu thức logic vị từ hình thức nào dưới đây là CHUẨN XÁC?',
    options: [
      '∀ dt ∈ DETAI: dt.Kinhphi > 0 (với mọi bộ dt trong quan hệ DETAI thì kinh phí > 0)',
      '∃ dt ∈ DETAI: dt.Kinhphi > 0 (tồn tại ít nhất một đề tài nghiên cứu có kinh phí > 0)',
      '∀ dt1, dt2 ∈ DETAI: dt1.Kinhphi ≠ dt2.Kinhphi (kinh phí các đề tài không trùng nhau)',
      '∀ dt ∈ DETAI: dt.Kinhphi = 0 ⇒ dt.MaDT = NULL (kinh phí bằng 0 thì mã đề tài rỗng)'
    ],
    answer: 0,
    explanation: 'Ràng buộc áp dụng cho TẤT CẢ các đề tài trong bảng DETAI nên sử dụng lượng từ \"với mọi\": ∀ dt ∈ DETAI: dt.Kinhphi > 0.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm lượng từ với mọi (∀) và lượng từ tồn tại (∃).',
      trickWord: 'Bẫy lượng từ trong biểu thức Logic vị từ của ràng buộc toàn thể (Universal vs Existential)',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục VIII.1',
      tip: 'Điều kiện áp dụng cho TẤT CẢ đối tượng ➔ BẮT BUỘC dùng lượng từ VỚI MỌI (∀)!'
    }
  },
  {
    id: 'db-c4-d1-040',
    question: 'Tình huống tổng hợp: Cho quy tắc: \"Mỗi sinh viên chỉ được phép thực hiện tối đa 2 đề tài nghiên cứu\". Đây là loại RBTV nào và thao tác nào cần kiểm tra trong Bảng Tầm Ảnh Hưởng?',
    options: [
      'RBTV liên bộ liên quan hệ; cần kiểm tra khi Thêm mới vào SV_DT (+) và khi Sửa MaSV (+)',
      'RBTV miền giá trị của cột MaSV; cần kiểm tra khi Xóa sinh viên khỏi bảng SINHVIEN',
      'RBTV liên thuộc tính của DETAI; cần kiểm tra khi Sửa kinh phí của đề tài nghiên cứu',
      'RBTV phụ thuộc tồn tại; chỉ kiểm tra duy nhất khi Thêm một đề tài mới vào hệ thống'
    ],
    answer: 0,
    explanation: 'Quy tắc giới hạn số lượng đề tài của mỗi sinh viên liên quan đến việc đếm số dòng trong SV_DT theo từng MaSV (liên bộ liên quan hệ). Nguy cơ vượt quá 2 đề tài chỉ xảy ra khi: 1) Thêm một phân công mới vào SV_DT (+); 2) Sửa MaSV của một dòng trong SV_DT (+). Thao tác Xóa (-) an toàn vì chỉ làm giảm số lượng.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm với ràng buộc miền giá trị hoặc đánh dấu kiểm tra cả thao tác Xóa.',
      trickWord: 'Bẫy phân loại và Bảng Tầm Ảnh Hưởng của ràng buộc giới hạn số lượng tham gia tối đa',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục VI.2 & VIII.1',
      tip: 'Ràng buộc \"Tối đa N...\": Thêm (+) và Sửa (+). Xóa mang dấu TRỪ (-) vì bớt đi thì càng không thể vượt quá N!'
    }
  }
];

// ------------------------------------------------------------------------
// ĐỀ SỐ 2: db-c4-d2 (40 CÂU)
// ------------------------------------------------------------------------
const questionsDbCh4Part2 = [
  // --- CỤM 1: KHÁI NIỆM RBTV, 3 YẾU TỐ & KỸ THUẬT BẢNG TẦM ẢNH HƯỞNG (Câu 1 - 10) ---
  {
    id: 'db-c4-d2-001',
    question: 'Mục đích tối thượng của việc thiết lập các Ràng buộc toàn vẹn (RBTV) trong cơ sở dữ liệu là gì?',
    options: [
      'Bảo đảm tính đúng đắn, nhất quán và độ tin cậy của dữ liệu trong CSDL',
      'Tự động tăng tốc độ hiển thị giao diện đồ họa trên màn hình máy trạm',
      'Giảm thiểu tối đa dung lượng các tệp tin hình ảnh đính kèm trong bảng',
      'Ngăn chặn người dùng đăng xuất khỏi hệ điều hành máy chủ bất ngờ'
    ],
    answer: 0,
    explanation: 'Mục đích của RBTV là đảm bảo tính đúng đắn, tính nhất quán (consistency) và độ tin cậy phản ánh đúng thực tế của dữ liệu trong CSDL.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d2-002',
    question: 'Trong 3 yếu tố của một RBTV, yếu tố \"Điều kiện\" (Condition) KHÔNG THỂ được biểu diễn bằng hình thức nào sau đây?',
    options: [
      'Mã nhị phân máy tính thuần túy chỉ gồm các chuỗi ký tự 0 và 1 rời rạc',
      'Ngôn ngữ tự nhiên mô tả các quy tắc quản lý nghiệp vụ của thế giới thực',
      'Hệ thống các biểu thức toán học của Logic vị từ bậc nhất với lượng từ',
      'Ngôn ngữ đại số quan hệ hoặc ngôn ngữ thao tác dữ liệu tập hợp chuẩn'
    ],
    answer: 0,
    explanation: 'Giáo trình quy định điều kiện có thể biểu diễn bằng: Ngôn ngữ tự nhiên, Thuật giải, Đại số tập hợp / ĐSQH, Phụ thuộc hàm, hoặc Logic vị từ. Mã nhị phân 0-1 không phải là hình thức biểu diễn RBTV.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d2-003',
    question: 'Trong Bảng Tầm Ảnh Hưởng của một RBTV, ký hiệu dấu cộng (\"+\") thể hiện hành động nào của hệ quản trị CSDL?',
    options: [
      'Cần phải kiểm tra RBTV để kịp thời phát hiện và ngăn chặn nếu có vi phạm',
      'Cho phép câu lệnh thực thi ngay lập tức mà không cần bất kỳ sự kiểm tra nào',
      'Hệ thống tự động cộng thêm một đơn vị giá trị vào thuộc tính khóa của bảng',
      'Bắt buộc người dùng phải nhập mật khẩu xác nhận cấp cao trước khi thao tác'
    ],
    answer: 0,
    explanation: 'Ký hiệu \"+\" có nghĩa là cần phải kiểm tra: RDBMS sẽ kích hoạt thủ tục kiểm tra hoặc Trigger để chặn thao tác nếu dữ liệu vi phạm ràng buộc.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d2-004',
    question: 'Điền vào chỗ trống: \"Dấu -(+) hoặc +(*) trong Bảng Tầm Ảnh Hưởng biểu thị việc kiểm tra ...(1)..., nghĩa là chỉ kiểm tra khi thuộc tính được cập nhật có ...(2)... biểu thức của RBTV.\"',
    options: [
      'có điều kiện / tham gia trực tiếp vào trong',
      'bắt buộc tuyệt đối / bị xóa bỏ hoàn toàn khỏi',
      'tạm thời bị hoãn / giá trị mặc định trùng với',
      'ngẫu nhiên định kỳ / kiểu dữ liệu số nguyên trong'
    ],
    answer: 0,
    explanation: 'Ký hiệu +(*) hoặc -(*) chỉ định việc kiểm tra có điều kiện: chỉ kiểm tra khi thuộc tính bị sửa đổi có liên quan trực tiếp đến biểu thức ràng buộc.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d2-005',
    question: 'Khi phân loại theo Bối cảnh (Context), toàn bộ các ràng buộc toàn vẹn được chia làm hai nhánh cơ bản nào?',
    options: [
      'RBTV có bối cảnh là một quan hệ và RBTV có bối cảnh là nhiều quan hệ',
      'RBTV lưu trên ổ đĩa cứng vật lý và RBTV xử lý tạm thời trên bộ nhớ đệm',
      'RBTV dành cho người dùng cuối và RBTV dành riêng cho quản trị viên DBA',
      'RBTV cho dữ liệu kiểu số học và RBTV cho dữ liệu kiểu chuỗi ký tự dài'
    ],
    answer: 0,
    explanation: 'Giáo trình phân chia RBTV theo bối cảnh thành 2 nhóm lớn: 1) Bối cảnh là một quan hệ (Single-relation); 2) Bối cảnh là nhiều quan hệ (Multi-relation).',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d2-006',
    question: 'Cho các thao tác trên cơ sở dữ liệu: Thao tác Thêm (Insert), Thao tác Xóa (Delete) và Thao tác Sửa (Update). Thao tác nào có thể coi là tổ hợp của việc Xóa dòng cũ rồi Thêm dòng mới?',
    options: [
      'Thao tác Sửa (Update) bản chất là xóa bỏ trạng thái cũ và thêm trạng thái mới',
      'Thao tác Thêm (Insert) bản chất là xóa bỏ dữ liệu rỗng và ghi đè dữ liệu mới',
      'Thao tác Xóa (Delete) bản chất là thay thế dòng dữ liệu bằng một chuỗi rỗng',
      'Cả ba thao tác trên đều độc lập hoàn toàn và không có mối liên hệ logic nào'
    ],
    answer: 0,
    explanation: 'Về mặt lý thuyết và trong cỗ máy RDBMS (Trigger inserted / deleted): Thao tác Sửa (Update) một dòng dữ liệu tương đương với việc Xóa dòng dữ liệu cũ và Thêm dòng dữ liệu mới.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d2-007',
    question: 'Cho Bảng Tầm Ảnh Hưởng của một ràng buộc toàn vẹn bất kỳ: Nếu tại một ô mang dấu trừ (\"-\"), lợi ích kỹ thuật lớn nhất đối với hệ thống là gì?',
    options: [
      'Tiết kiệm tài nguyên xử lý và chi phí truy xuất đĩa (I/O) cho máy chủ CSDL',
      'Tự động tăng dung lượng bộ nhớ RAM thực thi của máy chủ lên gấp hai lần',
      'Ngăn chặn hoàn toàn hiện tượng nghẽn mạng xảy ra trên đường truyền nội bộ',
      'Cho phép người dùng thực hiện cập nhật mà không cần đăng nhập tài khoản'
    ],
    answer: 0,
    explanation: 'Xác định chính xác các ô mang dấu trừ (-) giúp RDBMS bỏ qua kiểm tra, tránh các truy vấn kiểm tra dư thừa, tiết kiệm tối đa tài nguyên CPU và chi phí I/O đọc ghi đĩa.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d2-008',
    question: 'Xét Bảng Tầm Ảnh Hưởng của Ràng buộc khóa ngoại (R2 tham chiếu R1): Vì sao thao tác THÊM (Insert) một dòng mới vào bảng cha R1 LUÔN LUÔN mang dấu trừ (\"-\")?',
    options: [
      'Vì thêm một dòng cha mới chỉ làm phong phú nguồn tham chiếu chứ không gây lỗi',
      'Vì hệ quản trị cơ sở dữ liệu tự động sao chép dòng cha mới sang tất cả bảng con',
      'Vì thao tác thêm vào bảng cha luôn luôn bị vô hiệu hóa nếu bảng con đang mở',
      'Vì khóa ngoại chỉ kiểm tra các thao tác xóa và không bao giờ kiểm tra thao tác thêm'
    ],
    answer: 0,
    explanation: 'Ràng buộc khóa ngoại đòi hỏi: Giá trị khóa ngoại ở bảng con phải tồn tại ở bảng cha. Khi THÊM một dòng mới vào bảng cha (R1), tập giá trị hợp lệ ở bảng cha mở rộng thêm, hoàn toàn không thể làm bất kỳ dòng nào ở bảng con bị vi phạm (dấu -).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm thao tác Thêm ở bảng con (dấu +) với thao tác Thêm ở bảng cha (dấu -).',
      trickWord: 'Bẫy thao tác Thêm ở bảng cha trong ràng buộc Khóa ngoại (Insert on parent table in FK)',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục VI.1',
      tip: 'Khóa ngoại: Bảng cha THÊM mang dấu TRỪ (-)! (Bảng con THÊM mới mang dấu CỘNG +).'
    }
  },
  {
    id: 'db-c4-d2-009',
    question: 'Trong Bảng Tầm Ảnh Hưởng của Ràng buộc khóa ngoại (R2 tham chiếu R1): Vì sao thao tác XÓA (Delete) ở bảng con R2 LUÔN LUÔN mang dấu trừ (\"-\")?',
    options: [
      'Vì xóa bớt một dòng con thì không thể làm xuất hiện khóa ngoại không tồn tại',
      'Vì bảng con không có quyền lưu trữ khóa chính nên được phép xóa tự do tùy ý',
      'Vì khi xóa bảng con thì hệ thống tự động xóa toàn bộ các dòng ở bảng cha theo',
      'Vì thao tác xóa ở bảng con luôn luôn kích hoạt cơ chế sao lưu tự động khẩn cấp'
    ],
    answer: 0,
    explanation: 'Khóa ngoại cấm dòng con trỏ về hư vô. Khi XÓA bớt một dòng ở bảng con (R2), dòng đó biến mất, không còn tham chiếu nào cần kiểm tra, các dòng con còn lại vẫn hợp lệ. Do đó xóa ở bảng con TUYỆT ĐỐI AN TOÀN (dấu -).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Nhiều người nghĩ bảng con bị ràng buộc nên khi Xóa cũng phải kiểm tra (+).',
      trickWord: 'Bẫy thao tác Xóa ở bảng con trong ràng buộc Khóa ngoại (Delete on child table in FK)',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục VI.1',
      tip: 'Khóa ngoại: Bảng con XÓA mang dấu TRỪ (-)! (Bảng cha XÓA mới mang dấu CỘNG +).'
    }
  },
  {
    id: 'db-c4-d2-010',
    question: 'Tình huống: Cho ràng buộc C: \"Trong bảng KET_QUA, điểm thi Diem phải nằm trong đoạn từ 0 đến 10\". Bảng Tầm Ảnh Hưởng của ràng buộc này đối với thao tác SỬA (Update) được xác định như thế nào?',
    options: [
      'Mang dấu +(Diem) nghĩa là chỉ kiểm tra khi giá trị cột Diem bị thay đổi',
      'Mang dấu cộng (+) đối với tất cả mọi thuộc tính bất kể cột nào bị sửa đổi',
      'Mang dấu trừ (-) tuyệt đối vì sửa điểm không làm thay đổi mã số của sinh viên',
      'Hệ thống tự động từ chối mọi thao tác sửa điểm sau khi đã nhập vào bảng'
    ],
    answer: 0,
    explanation: 'Ràng buộc chỉ kiểm tra giá trị của cột Diem. Nếu sửa MaSV hay MaMH mà không sửa Diem thì không thể làm điểm bị sai miền giá trị. Do đó thao tác Sửa mang dấu có điều kiện +(Diem).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay ghi dấu (+) chung chung mà không chỉ định thuộc tính điều kiện +(Diem).',
      trickWord: 'Bẫy ký hiệu kiểm tra có điều kiện khi sửa thuộc tính tham gia ràng buộc',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục III.1 & V.1',
      tip: 'Sửa thuộc tính: Phải ghi rõ +(ThuộcTính) để hệ thống chỉ kiểm tra khi cột đó bị sửa!'
    }
  },

  // --- CỤM 2: PHÂN LOẠI RBTV CÓ BỐI CẢNH LÀ MỘT QUAN HỆ (Câu 11 - 20) ---
  {
    id: 'db-c4-d2-011',
    question: 'Loại Ràng buộc toàn vẹn nào liên quan trực tiếp đến tập các giá trị hợp lệ mà một thuộc tính có thể nhận được?',
    options: [
      'Ràng buộc toàn vẹn về miền giá trị (Domain integrity constraint)',
      'Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ dữ liệu',
      'Ràng buộc toàn vẹn liên bộ giữa các dòng dữ liệu khác nhau trong bảng',
      'Ràng buộc toàn vẹn về phụ thuộc tồn tại giữa hai quan hệ độc lập'
    ],
    answer: 0,
    explanation: 'RBTV về miền giá trị quy định các giá trị mà một thuộc tính A có thể nhận phải thuộc vào miền xác định dom(A).',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d2-012',
    question: 'Trong bảng NHANVIEN(maNV, tenNV, luong, thuong), quy tắc: \"Tiền thưởng không được vượt quá 50% mức lương\" thuộc loại RBTV nào?',
    options: [
      'Ràng buộc toàn vẹn liên thuộc tính (Inter-attribute constraint)',
      'Ràng buộc toàn vẹn về miền giá trị của từng cột số học riêng biệt',
      'Ràng buộc toàn vẹn liên bộ giữa các nhân viên trong cùng một phòng',
      'Ràng buộc toàn vẹn do chu trình đồ thị của các quan hệ tổ chức'
    ],
    answer: 0,
    explanation: 'Quy tắc thuong <= 0.5 * luong là sự đối sánh giữa 2 thuộc tính trong CÙNG MỘT DÒNG của một nhân viên, do đó là RBTV liên thuộc tính.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d2-013',
    question: 'Ràng buộc quy định: \"Tổng số cán bộ của một khoa không được vượt quá 50 người\" trong bảng KHOA(makhoa, tenkhoa, soCB) thuộc loại RBTV nào?',
    options: [
      'Ràng buộc toàn vẹn về miền giá trị của thuộc tính số cán bộ soCB',
      'Ràng buộc toàn vẹn liên thuộc tính giữa tên khoa và số cán bộ',
      'Ràng buộc toàn vẹn về phụ thuộc tồn tại đối với danh mục cán bộ',
      'Ràng buộc toàn vẹn do chu trình đồ thị của các đơn vị đào tạo'
    ],
    answer: 0,
    explanation: 'Ràng buộc soCB <= 50 là điều kiện áp đặt trực tiếp lên miền giá trị hợp lệ của thuộc tính soCB (thuộc tập số nguyên từ 1 đến 50), do đó thuộc loại RBTV về miền giá trị.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d2-014',
    question: 'Khác biệt căn bản nhất giữa RBTV liên thuộc tính và RBTV liên bộ trong cùng một quan hệ là gì?',
    options: [
      'Liên thuộc tính xét trong cùng 1 bộ, liên bộ xét giữa các bộ khác nhau',
      'Liên thuộc tính chỉ áp dụng cho số, liên bộ chỉ áp dụng cho chuỗi',
      'Liên thuộc tính nằm trên nhiều bảng, liên bộ chỉ nằm trên một bảng',
      'Liên thuộc tính không cần kiểm tra khi Thêm, liên bộ luôn kiểm tra'
    ],
    answer: 0,
    explanation: 'Ranh giới cốt lõi: RBTV liên thuộc tính thể hiện mối liên hệ giữa các cột trong CÙNG MỘT BỘ (dòng); còn RBTV liên bộ thể hiện sự ràng buộc giữa CÁC BỘ KHÁC NHAU trong bảng.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d2-015',
    question: 'Trong bảng MON_HOC(maMH, tenMH, soTietLT, soTietTH), quy tắc: \"soTietLT + soTietTH = 45\" thuộc loại RBTV nào?',
    options: [
      'Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ MON_HOC',
      'Ràng buộc toàn vẹn về miền giá trị của thuộc tính số tiết lý thuyết',
      'Ràng buộc toàn vẹn liên bộ giữa các môn học khác nhau trong chương trình',
      'Ràng buộc toàn vẹn về thuộc tính tổng hợp từ các bảng kết quả thi'
    ],
    answer: 0,
    explanation: 'Điều kiện soTietLT + soTietTH = 45 liên kết 2 thuộc tính trong cùng một dòng môn học, nên là RBTV liên thuộc tính.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d2-016',
    question: 'Phát biểu nào sau đây là NHẬN ĐỊNH SAI khi nói về Ràng buộc toàn vẹn miền giá trị?',
    options: [
      'RBTV miền giá trị luôn đòi hỏi phải có sự so sánh giữa hai cột trong bảng',
      'RBTV miền giá trị chỉ kiểm tra tính hợp lệ của từng thuộc tính độc lập',
      'Kiểm tra kiểu dữ liệu số nguyên từ 0 đến 10 là một ví dụ về miền giá trị',
      'Trong Bảng Tầm Ảnh Hưởng, thao tác Xóa một dòng luôn mang dấu trừ (-)'
    ],
    answer: 0,
    explanation: 'Nhận định A sai vì RBTV miền giá trị chỉ áp dụng trên từng thuộc tính độc lập. Nếu so sánh giữa hai cột trong bảng thì đó là RBTV liên thuộc tính!',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d2-017',
    question: 'Cho bảng HOADON(soHD, ngayHD, ngayGiao, trigia). Quy tắc nào sau đây là một ví dụ chuẩn về RBTV liên thuộc tính?',
    options: [
      'Điều kiện logic trong cùng một hóa đơn: ngayGiao phải sau hoặc bằng ngayHD',
      'Điều kiện kiểm tra mã hóa đơn soHD không được trùng lặp giữa các dòng',
      'Điều kiện trị giá hóa đơn trigia bắt buộc phải là một số thực dương lớn hơn 0',
      'Mỗi số hóa đơn soHD trong bảng phải tồn tại trong danh mục đơn đặt hàng'
    ],
    answer: 0,
    explanation: 'Quy tắc ngayGiao >= ngayHD so sánh 2 thuộc tính trong cùng một hóa đơn, đây là ví dụ chuẩn về RBTV liên thuộc tính. (soHD không trùng là liên bộ; trigia > 0 là miền giá trị; tồn tại trong đặt hàng là khóa ngoại).',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d2-018',
    question: 'Tình huống: Cho quan hệ NHANVIEN(maNV, tenNV, luong, tamUng, conLai) với quy tắc: conLai = luong − tamUng. Về mặt tối ưu thiết kế CSDL, giải pháp chuẩn mực là gì?',
    options: [
      'Loại bỏ thuộc tính conLai khỏi bảng vì có thể tính được từ luong và tamUng',
      'Bắt buộc giữ lại thuộc tính conLai và tạo thêm bảng phụ để lưu trữ lịch sử',
      'Nhân đôi thuộc tính conLai thành hai cột độc lập để tăng tốc độ truy vấn',
      'Chuyển đổi kiểu dữ liệu của cả ba thuộc tính sang kiểu chuỗi ký tự cố định'
    ],
    answer: 0,
    explanation: 'Giáo trình Mục V.2 khẳng định: Nếu thuộc tính conLai tính toán được từ các thuộc tính khác trong cùng bảng (luong - tamUng), ta nên LOẠI BỎ thuộc tính này khỏi lược đồ để tránh dư thừa và dị thường khi cập nhật.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Nhiều người nghĩ thuộc tính nào có trong nghiệp vụ thì đều phải tạo thành cột trong bảng.',
      trickWord: 'Bẫy loại bỏ thuộc tính dư thừa có thể tính toán được trong cùng một bộ',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục V.2',
      tip: 'Thuộc tính tính được từ các cột CÙNG BẢNG ➔ Loại bỏ khỏi bảng để tránh dư thừa (Normal form design)!'
    }
  },
  {
    id: 'db-c4-d2-019',
    question: 'Xét quy tắc: \"Trong cùng một phòng ban, không có hai nhân viên nào có cùng họ tên\". Đây là loại RBTV nào và biểu diễn logic vị từ như thế nào?',
    options: [
      'RBTV liên bộ: ∀ t1, t2 ∈ NHANVIEN: (t1.Phong = t2.Phong ∧ t1.Hoten = t2.Hoten) ⇒ t1 = t2',
      'RBTV liên thuộc tính: ∀ t ∈ NHANVIEN: t.Phong ≠ t.Hoten trong cùng một dòng',
      'RBTV miền giá trị: ∀ t ∈ NHANVIEN: t.Hoten ∈ dom(Phong) với mọi nhân viên',
      'RBTV khóa ngoại: NHANVIEN.Phong tham chiếu đến bảng danh mục họ tên nhân sự'
    ],
    answer: 0,
    explanation: 'Quy tắc cấm 2 người trong cùng phòng có trùng tên là sự so sánh giữa CÁC BỘ KHÁC NHAU trong cùng bảng NHANVIEN, do đó là RBTV liên bộ. Biểu thức: Nếu cùng phòng và cùng tên thì phải là cùng 1 người (t1 = t2).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh thấy có cả 2 thuộc tính Phong và Hoten nên vội vã chọn liên thuộc tính.',
      trickWord: 'Bẫy nhầm lẫn giữa liên bộ nhiều thuộc tính và liên thuộc tính trong dòng',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục V.3',
      tip: 'So sánh giữa 2 BỘ KHÁC NHAU (t1 và t2) ➔ 100% là LIÊN BỘ (dù biểu thức dùng 1 hay nhiều cột)!'
    }
  },
  {
    id: 'db-c4-d2-020',
    question: 'Trong Bảng Tầm Ảnh Hưởng của RBTV liên thuộc tính (Ví dụ: ngayHD ≤ ngayXuat trong HOADON): Thao tác XÓA (Delete) một hóa đơn mang dấu gì và vì sao?',
    options: [
      'Mang dấu trừ (-) vì xóa nguyên một dòng thì không thể làm vi phạm quy tắc ngày',
      'Mang dấu cộng (+) vì khi xóa một hóa đơn thì các ngày xuất kho khác bị mồ côi',
      'Mang dấu +(ngayHD) vì hệ thống bắt buộc phải kiểm tra ngày lập trước khi xóa',
      'Mang dấu cộng (+) nếu hóa đơn đó có trị giá thanh toán vượt mức mười triệu'
    ],
    answer: 0,
    explanation: 'RBTV liên thuộc tính chỉ kiểm tra mối quan hệ nội tại giữa các cột trong CÙNG MỘT DÒNG. Khi xóa toàn bộ dòng đó đi, dòng đó không còn tồn tại nên không thể vi phạm quy tắc. Do đó thao tác Xóa LUÔN MANG DẤU TRỪ (-).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ bảng nghiệp vụ quan trọng thì xóa hóa đơn phải kiểm tra (+).',
      trickWord: 'Bẫy thao tác Xóa trong Bảng Tầm Ảnh Hưởng của RBTV liên thuộc tính',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục V.2',
      tip: 'RBTV liên thuộc tính (trong cùng dòng): XÓA dòng luôn luôn mang dấu TRỪ (-)! Chắc chắn không thể vi phạm!'
    }
  },

  // --- CỤM 3: PHÂN LOẠI RBTV CÓ BỐI CẢNH LÀ NHIỀU QUAN HỆ & CHU TRÌNH ĐỒ THỊ (Câu 21 - 30) ---
  {
    id: 'db-c4-d2-021',
    question: 'Ràng buộc toàn vẹn có bối cảnh là NHIỀU quan hệ bao gồm những phân loại chính nào theo giáo trình?',
    options: [
      'Phụ thuộc tồn tại, Liên bộ liên quan hệ, Liên thuộc tính liên quan hệ, Thuộc tính tổng hợp và Chu trình',
      'Miền giá trị mở rộng, Liên thuộc tính nội bộ, Phụ thuộc hàm chuẩn và Độc lập dữ liệu logic phân tán',
      'Mã hóa mật khẩu người dùng, Phân quyền bảng dữ liệu, Sao lưu dự phòng và Nhật ký giao tác toàn hệ thống',
      'Bảo mật tầng mạng, Kiểm tra phần cứng máy chủ, Giải phóng bộ nhớ đệm và Đồng bộ hóa theo thời gian thực'
    ],
    answer: 0,
    explanation: 'Giáo trình Mục VII (Sơ đồ tổng hợp): Bối cảnh nhiều quan hệ gồm 5 loại: 1) Phụ thuộc tồn tại; 2) Liên bộ liên quan hệ; 3) Liên thuộc tính liên quan hệ; 4) Thuộc tính tổng hợp; 5) Do chu trình trong đồ thị lược đồ.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d2-022',
    question: 'Trong CSDL HSSINHVIEN, điều kiện: \"Mỗi sinh viên trong bảng SINH_VIEN phải thuộc về một khoa có thật trong bảng KHOA\" là loại RBTV nào?',
    options: [
      'Ràng buộc toàn vẹn về phụ thuộc tồn tại (Ràng buộc khóa ngoại)',
      'Ràng buộc toàn vẹn về miền giá trị của mã khoa trong bảng sinh viên',
      'Ràng buộc toàn vẹn liên thuộc tính giữa họ tên sinh viên và tên khoa',
      'Ràng buộc toàn vẹn do chu trình đồ thị của các khoa chuyên môn'
    ],
    answer: 0,
    explanation: 'Sự tồn tại của sinh viên phụ thuộc vào sự tồn tại của khoa (SINH_VIEN.maKhoa tham chiếu KHOA.makhoa), đây là định nghĩa chuẩn của RBTV về phụ thuộc tồn tại (khóa ngoại).',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d2-023',
    question: 'Dấu hiệu toán học thứ hai (Dấu hiệu 2) nhận biết phụ thuộc tồn tại của quan hệ R2 vào quan hệ R1 trong giáo trình là gì?',
    options: [
      'Khóa K1 của R1 xuất hiện như một thuộc tính thông thường trong R2 (K1 ⊆ R2)',
      'Số lượng thuộc tính của quan hệ R2 bằng đúng số lượng thuộc tính quan hệ R1',
      'Tập khóa chính của R2 là tập con thực sự của tập khóa chính của quan hệ R1',
      'Hai quan hệ R1 và R2 hoàn toàn không có bất kỳ thuộc tính chung nào'
    ],
    answer: 0,
    explanation: 'Dấu hiệu (2) trong Giáo trình Mục VI.1: Nếu K1 là khóa của R1 và K1 ⊆ R2 (K1 xuất hiện như thuộc tính thường trong R2) thì có phụ thuộc tồn tại của R2 vào R1 (K1 là khóa ngoại của R2).',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d2-024',
    question: 'Trong CSDL QLHANGHOA, quy tắc: \"Số tiền công nợ (congNo) của khách hàng bằng tổng tiền hóa đơn bán trừ tổng tiền phiếu thu\" thuộc loại RBTV nào?',
    options: [
      'Ràng buộc toàn vẹn về thuộc tính tổng hợp (Aggregate / derived attribute)',
      'Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ KHACH',
      'Ràng buộc toàn vẹn về miền giá trị của số tiền công nợ khách hàng',
      'Ràng buộc toàn vẹn do chu trình đồ thị của các đơn đặt hàng'
    ],
    answer: 0,
    explanation: 'Cột congNo nằm ở bảng KHACH nhưng được tính toán từ các thuộc tính của 2 bảng khác là HOA_DON và PHIEU_THU, nên thuộc loại RBTV về thuộc tính tổng hợp.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d2-025',
    question: 'Điền vào chỗ trống: \"Trong đồ thị lược đồ CSDL, nếu tồn tại một chu trình giữa các bảng dữ liệu thì giữa chúng bắt buộc phải có một ...(1)... để điều phối và kiểm soát tính ...(2)... của dữ liệu.\"',
    options: [
      'ràng buộc toàn vẹn chu trình / nhất quán ngữ nghĩa nghiệp vụ',
      'chỉ mục phân cụm độc quyền / bảo mật đa tầng cho máy chủ',
      'bản sao lưu dữ liệu tạm / toàn vẹn bộ nhớ đệm hệ thống',
      'khóa chính tự tăng liên tục / độc lập vật lý của các bảng'
    ],
    answer: 0,
    explanation: 'Khi đồ thị CSDL xuất hiện chu trình (cycle), giữa các bảng này bắt buộc phải có một ràng buộc toàn vẹn chu trình để đảm bảo tính nhất quán ngữ nghĩa của dữ liệu.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d2-026',
    question: 'Cho các nhận định sau về RBTV phụ thuộc tồn tại (Khóa ngoại):\n(I) Khóa ngoại liên kết hai quan hệ dựa trên sự phụ thuộc tồn tại.\n(II) Bảng con tham chiếu khóa ngoại không được phép chứa giá trị NULL nếu có NOT NULL.\n(III) Bảng con có thể chứa giá trị khóa ngoại mà bảng cha hoàn toàn chưa có.\nKhẳng định nào sau đây là ĐÚNG?',
    options: [
      'Chỉ có nhận định (I) và (II) đúng, nhận định (III) là nhận định hoàn toàn sai',
      'Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác',
      'Chỉ có duy nhất nhận định (III) là nhận định đúng đắn theo nguyên lý tham chiếu',
      'Nhận định (I) là nhận định sai, nhận định (II) và (III) là những nhận định đúng'
    ],
    answer: 0,
    explanation: 'Nhận định (I) và (II) đúng. Nhận định (III) sai vì bản chất của khóa ngoại là cấm bảng con chứa giá trị không tồn tại ở bảng cha.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d2-027',
    question: 'Trong CSDL QLHANGHOA, quy tắc: \"Một đơn đặt hàng chỉ được giải quyết trong một hóa đơn duy nhất\". Đây là loại RBTV nào?',
    options: [
      'Ràng buộc toàn vẹn liên bộ, liên quan hệ (giữa DAT_HANG và HOA_DON)',
      'Ràng buộc toàn vẹn về miền giá trị của mã số đơn đặt hàng soDH',
      'Ràng buộc toàn vẹn liên thuộc tính trong cùng bảng đơn đặt hàng',
      'Ràng buộc toàn vẹn về thuộc tính tổng hợp của phiếu thanh toán'
    ],
    answer: 0,
    explanation: 'Quy tắc này ràng buộc giữa các bộ của DAT_HANG và HOA_DON (cấm 1 soDH xuất hiện trên 2 dòng HOA_DON khác nhau), do đó thuộc loại RBTV liên bộ, liên quan hệ.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d2-028',
    question: 'Xét chu trình đồ thị giữa 3 bảng: DAT_HANG - HOA_DON - CTIET_HD. Nếu một công ty áp dụng chính sách: \"Mỗi hóa đơn phải giao đầy đủ 100% tất cả mặt hàng khách đã đặt\", thì hậu quả thực tế nào có thể xảy ra?',
    options: [
      'Hóa đơn không thể xuất được nếu kho hàng bị tạm hết dù chỉ một mặt hàng duy nhất',
      'Toàn bộ dữ liệu của bảng đơn đặt hàng tự động bị chuyển sang trạng thái đã hủy',
      'Hệ thống tự động mua hàng từ nhà cung cấp bên ngoài để bù đắp vào kho hàng',
      'Không có hậu quả nào vì mọi hệ thống thương mại đều bắt buộc phải áp dụng chính sách này'
    ],
    answer: 0,
    explanation: 'Chính sách (1) đòi hỏi phải giao đủ 100% mặt hàng trong đơn. Nếu kho thiếu 1 mặt hàng thì không thể xuất hóa đơn cho các mặt hàng còn lại, gây ách tắc giao hàng trong thực tế. Vì vậy CSDL QLHANGHOA chọn chính sách (2) linh hoạt hơn: không bắt buộc đủ nhưng không giao vượt.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ chính sách giao đủ 100% luôn là tối ưu nhất mà không thấy nhược điểm thực tế.',
      trickWord: 'Bẫy phân tích ưu nhược điểm của 3 chính sách chu trình giao hàng',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục VI.3',
      tip: 'Chính sách 1 (Giao đủ 100%): Thiếu 1 món là KẸT CẢ ĐƠN. Chính sách 2 (Không giao vượt): Thực tế và tối ưu nhất!'
    }
  },
  {
    id: 'db-c4-d2-029',
    question: 'Tình huống: Bảng KHACH có thuộc tính congNo tính từ HOA_DON và PHIEU_THU. Khi thực hiện XÓA một khách hàng ra khỏi bảng KHACH, Bảng Tầm Ảnh Hưởng quy định dấu gì?',
    options: [
      'Mang dấu cộng (+) vì phải kiểm tra khách hàng đó đã thanh toán hết nợ (congNo = 0) chưa',
      'Mang dấu trừ (-) tuyệt đối vì xóa khách hàng thì công nợ tự động biến mất theo',
      'Mang dấu trừ (-) vì bảng KHACH là bảng chứa thuộc tính chứ không phải bảng nguồn',
      'Hệ thống tự động cấm xóa khách hàng trong mọi hoàn cảnh kể cả khi công nợ bằng 0'
    ],
    answer: 0,
    explanation: 'Quy tắc quản lý kinh doanh nghiêm ngặt: Không thể tùy tiện xóa một khách hàng nếu khách hàng đó vẫn còn nợ tiền công ty (congNo > 0) hoặc công ty còn nợ tiền khách (congNo < 0). Do đó thao tác Xóa ở bảng KHACH bắt buộc phải kiểm tra mang dấu CỘNG (+).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Nhiều người nghĩ xóa ở bảng chứa thuộc tính suy diễn thì chỉ việc xóa dòng là xong (dấu -).',
      trickWord: 'Bẫy kiểm tra điều kiện công nợ khi xóa khách hàng trong Bảng Tầm Ảnh Hưởng',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục VI.2.c',
      tip: 'Xóa khách hàng: BẮT BUỘC kiểm tra (+) để đảm bảo congNo = 0 mới cho phép xóa!'
    }
  },
  {
    id: 'db-c4-d2-030',
    question: 'Trong RBTV liên thuộc tính liên quan hệ (Ví dụ: HOA_DON.ngayHD ≥ DAT_HANG.ngayDH): Khi SỬA cột ngayDH ở bảng DAT_HANG, hệ thống có cần kiểm tra không?',
    options: [
      'Có kiểm tra +(ngayDH) vì nếu lùi ngày đặt hàng ra sau ngày lập hóa đơn sẽ gây vi phạm',
      'Không cần kiểm tra (-) vì hóa đơn đã lập rồi thì ngày đặt hàng sửa đổi không ảnh hưởng',
      'Chỉ kiểm tra khi người quản trị thực hiện sửa đổi cả mã số khách hàng đặt hàng',
      'Mang dấu trừ (-) tuyệt đối vì bảng DAT_HANG là bảng gốc xuất hiện trước hóa đơn'
    ],
    answer: 0,
    explanation: 'Ràng buộc đòi hỏi ngayHD >= ngayDH. Nếu ai đó sửa ngayDH ở bảng DAT_HANG thành một ngày lớn hơn ngayHD của hóa đơn tương ứng thì sẽ vi phạm ràng buộc (đặt hàng sau khi đã lập hóa đơn!). Do đó thao tác Sửa cột ngayDH bắt buộc phải kiểm tra: +(ngayDH).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ ngày đặt hàng đã qua rồi thì sửa thoải mái không ai kiểm tra.',
      trickWord: 'Bẫy Bảng Tầm Ảnh Hưởng khi sửa thuộc tính tham gia ràng buộc thời gian liên bảng',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục VI.2.b',
      tip: 'Sửa bất kỳ thuộc tính nào có mặt trong biểu thức (kể cả bảng đặt hàng) ➔ BẮT BUỘC mang dấu CỘNG (+)!'
    }
  },

  // --- CỤM 4: BIỂU DIỄN LOGIC VỊ TỪ, CSDL THỰC TẾ & ĐỒ ÁN ĐỀ TÀI (Câu 31 - 40) ---
  {
    id: 'db-c4-d2-031',
    question: 'Trong biểu diễn hình thức của RBTV bằng Logic vị từ bậc nhất, ký hiệu toán học \"∃\" mang ý nghĩa là gì?',
    options: [
      'Lượng từ tồn tại (Existential quantifier, có ít nhất một phần tử thỏa mãn)',
      'Lượng từ với mọi (Universal quantifier, áp dụng bắt buộc cho tất cả phần tử)',
      'Toán tử tương đương logic (Equivalence operator, hai vế có cùng giá trị chân lý)',
      'Toán tử phủ định logic (Logical negation, đảo ngược giá trị đúng sai)'
    ],
    answer: 0,
    explanation: 'Ký hiệu ∃ là lượng từ \"tồn tại\" (There exists), chỉ định phải có ít nhất một phần tử thỏa mãn điều kiện.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d2-032',
    question: 'Trong biểu thức Logic vị từ, toán tử kéo theo \"P ⇒ Q\" chỉ nhận giá trị SAI (False) trong trường hợp duy nhất nào?',
    options: [
      'Khi mệnh đề P nhận giá trị Đúng (True) nhưng mệnh đề Q lại nhận giá trị Sai (False)',
      'Khi cả hai mệnh đề P và Q đều cùng nhận giá trị Đúng (True) trong biểu thức',
      'Khi cả hai mệnh đề P và Q đều cùng nhận giá trị Sai (False) trong biểu thức',
      'Khi mệnh đề P nhận giá trị Sai (False) còn mệnh đề Q nhận giá trị Đúng (True)'
    ],
    answer: 0,
    explanation: 'Theo bảng chân trị của logic mệnh đề: Phép kéo theo P ⇒ Q chỉ sai khi tiền đề P đúng mà kết luận Q sai (True ⇒ False là False). Các trường hợp còn lại đều Đúng.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d2-033',
    question: 'Trong Đồ án Đề tài: DETAI(MaDT, TenDT, Chunhiem, Kinhphi). Thuộc tính nào sau đây đóng vai trò là Khóa chính của bảng DETAI?',
    options: [
      'Thuộc tính MaDT là khóa chính phân biệt duy nhất từng đề tài nghiên cứu',
      'Thuộc tính TenDT là khóa chính vì mỗi đề tài bắt buộc phải có tên riêng',
      'Thuộc tính Chunhiem là khóa chính đại diện cho giảng viên phụ trách đề tài',
      'Thuộc tính Kinhphi là khóa chính phân loại quy mô kinh phí của đề tài'
    ],
    answer: 0,
    explanation: 'Mỗi đề tài có mã số duy nhất MaDT, đây là khóa chính của quan hệ DETAI.',
    difficulty: 'easy'
  },
  {
    id: 'db-c4-d2-034',
    question: 'Biểu thức Logic vị từ nào sau đây diễn đạt CHUẨN XÁC: \"Mọi sinh viên trong KET_QUA đều phải tồn tại trong bảng SINH_VIEN\" (Khóa ngoại)?',
    options: [
      '∀ kq ∈ KET_QUA, ∃ sv ∈ SINH_VIEN: kq.maSV = sv.maSV (mọi kq đều có sv tương ứng)',
      '∃ kq ∈ KET_QUA, ∀ sv ∈ SINH_VIEN: kq.maSV = sv.maSV (tồn tại kq ứng với mọi sv)',
      '∀ kq ∈ KET_QUA, ∀ sv ∈ SINH_VIEN: kq.maSV = sv.maSV (mọi kq trùng mã với mọi sv)',
      '∃ kq ∈ KET_QUA, ∃ sv ∈ SINH_VIEN: kq.maSV ≠ sv.maSV (tồn tại cặp có mã khác nhau)'
    ],
    answer: 0,
    explanation: 'Biểu diễn hình thức chuẩn của ràng buộc khóa ngoại (phụ thuộc tồn tại): Với mọi bộ kq trong KET_QUA, phải tồn tại một bộ sv trong SINH_VIEN sao cho kq.maSV = sv.maSV.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d2-035',
    question: 'Trong Đồ án Đề tài, bảng SV_DT có hai khóa ngoại MaSV và MaDT. Hai khóa ngoại này tham chiếu tương ứng đến những bảng nào?',
    options: [
      'MaSV tham chiếu bảng cha SINHVIEN, MaDT tham chiếu bảng cha DETAI',
      'MaSV tham chiếu bảng KHOA, MaDT tham chiếu bảng MON_HOC trong hệ thống',
      'Cả hai khóa ngoại này đều cùng tham chiếu về bảng cha duy nhất là SINHVIEN',
      'MaSV tham chiếu bảng DETAI, MaDT tham chiếu bảng SINHVIEN theo thứ tự đảo'
    ],
    answer: 0,
    explanation: 'Bảng kết hợp SV_DT có: MaSV là khóa ngoại tham chiếu SINHVIEN(MaSV); MaDT là khóa ngoại tham chiếu DETAI(MaDT).',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d2-036',
    question: 'Cho các nhận định sau về biểu diễn Logic vị từ của RBTV:\n(I) Biểu thức ∀t ∈ R: P(t) tương đương với phủ định ¬(∃t ∈ R: ¬P(t)).\n(II) Lượng từ với mọi đòi hỏi toàn bộ các dòng hiện có đều phải thỏa mãn điều kiện.\n(III) Nếu quan hệ R đang rỗng (không có dòng nào), biểu thức ∀t ∈ R: P(t) luôn luôn ĐÚNG.\nKhẳng định nào sau đây là ĐÚNG?',
    options: [
      'Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác',
      'Chỉ có nhận định (I) và (II) đúng, nhận định (III) là nhận định sai lầm',
      'Chỉ có duy nhất nhận định (II) là nhận định đúng đắn theo quy chuẩn logic',
      'Nhận định (I) là nhận định sai, nhận định (II) và (III) là những nhận định đúng'
    ],
    answer: 0,
    explanation: 'Cả 3 nhận định đều chuẩn mực theo logic toán học: 1) Luật De Morgan mở rộng; 2) Bản chất lượng từ ∀; 3) Mệnh đề với mọi trên tập rỗng (Vacuous truth) luôn nhận giá trị TRUE.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d2-037',
    question: 'Điền vào chỗ trống: \"Trong Logic vị từ, để biểu diễn tính toàn vẹn tham chiếu của khóa ngoại giữa quan hệ con R2 và quan hệ cha R1, ta sử dụng cặp lượng từ ...(1)... cho R2 và ...(2)... cho R1.\"',
    options: [
      '∀ (với mọi bộ thuộc R2) / ∃ (tồn tại ít nhất một bộ thuộc R1)',
      '∃ (tồn tại một bộ thuộc R2) / ∀ (với mọi bộ thuộc R1)',
      '∀ (với mọi bộ thuộc R2) / ∀ (với mọi bộ thuộc R1)',
      '∃ (tồn tại một bộ thuộc R2) / ∃ (tồn tại một bộ thuộc R1)'
    ],
    answer: 0,
    explanation: 'Cấu trúc chuẩn của khóa ngoại trong logic vị từ: ∀ t2 ∈ R2, ∃ t1 ∈ R1: t2.FK = t1.PK.',
    difficulty: 'medium'
  },
  {
    id: 'db-c4-d2-038',
    question: 'Trong Đồ án Đề tài, quy tắc: \"Mỗi đề tài nghiên cứu chỉ được giao cho tối đa 3 sinh viên cùng thực hiện\". Khi SỬA cột MaDT trong bảng SV_DT, Bảng Tầm Ảnh Hưởng quy định dấu gì?',
    options: [
      'Mang dấu +(MaDT) vì việc đổi đề tài có thể làm đề tài mới vượt quá 3 sinh viên',
      'Mang dấu trừ (-) tuyệt đối vì sửa mã đề tài chỉ làm giảm bớt số người của đề tài cũ',
      'Mang dấu trừ có điều kiện vì chỉ kiểm tra khi sinh viên đó có học lực yếu kém',
      'Hệ thống tự động từ chối thao tác sửa mã đề tài và bắt buộc phải xóa rồi tạo mới'
    ],
    answer: 0,
    explanation: 'Quy tắc giới hạn số sinh viên tối đa cho một đề tài là 3. Khi sửa MaDT của một dòng trong SV_DT (chuyển sinh viên từ đề tài A sang đề tài B), đề tài B được cộng thêm 1 người và có nguy cơ vượt quá 3 người. Do đó bắt buộc phải kiểm tra: +(MaDT).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ sửa mã thì đề tài cũ bớt người nên an toàn (-), mà quên mất đề tài mới tăng người (+).',
      trickWord: 'Bẫy tăng số lượng ở đối tượng đích khi sửa thuộc tính phân nhóm',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục VI.2 & VIII.1',
      tip: 'Sửa thuộc tính phân nhóm (MaDT, MaPhong...): Đối tượng đích TĂNG số lượng ➔ BẮT BUỘC mang dấu CỘNG (+)!'
    }
  },
  {
    id: 'db-c4-d2-039',
    question: 'Xét quy tắc: \"Năm sinh của sinh viên phải hợp lệ: Namsinh nằm trong khoảng từ 1980 đến năm hiện hành\" trong SINHVIEN. Biểu thức Logic vị từ nào dưới đây là CHUẨN XÁC NHẤT?',
    options: [
      '∀ sv ∈ SINHVIEN: sv.Namsinh ≥ 1980 ∧ sv.Namsinh ≤ Year(GetDate())',
      '∃ sv ∈ SINHVIEN: sv.Namsinh ≥ 1980 ∨ sv.Namsinh ≤ Year(GetDate())',
      '∀ sv1, sv2 ∈ SINHVIEN: sv1.Namsinh ≠ sv2.Namsinh ∧ sv1.Namsinh ≥ 1980',
      '∀ sv ∈ SINHVIEN: sv.Namsinh = 1980 ⇒ sv.Hocluc = N\'Xuất sắc\''
    ],
    answer: 0,
    explanation: 'Ràng buộc miền giá trị áp dụng cho mọi sinh viên trong bảng SINHVIEN: ∀ sv ∈ SINHVIEN: sv.Namsinh >= 1980 ∧ sv.Namsinh <= Year(GetDate()).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Dễ nhầm phép hội (∧) với phép tuyển (∨) khi thể hiện đoạn giá trị [A, B].',
      trickWord: 'Bẫy toán tử liên kết trong đoạn giá trị miền năm sinh (AND vs OR)',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục V.1 & VIII.1',
      tip: 'Nằm trong đoạn [A, B] ➔ BẮT BUỘC dùng phép HỘI (∧) cả hai cận: x >= A ∧ x <= B!'
    }
  },
  {
    id: 'db-c4-d2-040',
    question: 'Tình huống tổng hợp: Cho quy tắc: \"Chủ nhiệm đề tài (Chunhiem) trong bảng DETAI bắt buộc phải là một cán bộ thuộc một khoa có trong bảng KHOA\". Bảng Tầm Ảnh Hưởng của quy tắc này kiểm tra ở những thao tác nào?',
    options: [
      'Thêm vào DETAI (+), Sửa Chunhiem ở DETAI (+), Xóa ở bảng KHOA (+), Sửa makhoa ở KHOA (+)',
      'Chỉ kiểm tra duy nhất khi Thêm một đề tài mới vào bảng DETAI trong hệ thống',
      'Chỉ kiểm tra khi Xóa một cán bộ khỏi danh mục và không cần kiểm tra bảng KHOA',
      'Kiểm tra tất cả các thao tác Thêm, Xóa, Sửa trên cả ba bảng SINHVIEN, DETAI, KHOA'
    ],
    answer: 0,
    explanation: 'Đây là ràng buộc khóa ngoại (phụ thuộc tồn tại) giữa DETAI (bảng con) và KHOA (bảng cha). Do đó: 1) Bảng con DETAI: Thêm (+), Sửa Chunhiem (+), Xóa (-); 2) Bảng cha KHOA: Thêm (-), Xóa (+), Sửa makhoa (+).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay bỏ sót các thao tác ở bảng cha (Xóa KHOA và Sửa makhoa).',
      trickWord: 'Bẫy Bảng Tầm Ảnh Hưởng đầy đủ hai chiều của ràng buộc khóa ngoại thực tế',
      citation: 'Giáo trình Hệ CSDL — Chương 4, Mục VI.1 & VIII.1',
      tip: 'Khóa ngoại hoàn chỉnh: Bảng con (Thêm +, Sửa +); Bảng cha (Xóa +, Sửa +)!'
    }
  }
];

// Hàm cân bằng vị trí đáp án đúng theo mảng targetAnswers
function rebalanceSet(questions, targetAnswers) {
  questions.forEach((q, idx) => {
    const targetAns = targetAnswers[idx];
    const currAns = q.answer;
    if (currAns !== targetAns) {
      const temp = q.options[targetAns];
      q.options[targetAns] = q.options[currAns];
      q.options[currAns] = temp;
      q.answer = targetAns;
    }
  });
}

// Cân bằng đáp án cho cả 2 bộ đề
rebalanceSet(questionsDbCh4Part1, targetAnswers1);
rebalanceSet(questionsDbCh4Part2, targetAnswers2);

// Ghi dữ liệu ra file
function exportExamFiles() {
  const contentP1 = `/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG IV: RÀNG BUỘC TOÀN VẸN (INTEGRITY CONSTRAINTS)
   BỘ ĐỀ SỐ 1 — 40 CÂU HỎI HỌC THUẬT CHUẨN MỰC
   MÃ BỘ ĐỀ: db-c4-d1-001 ĐẾN db-c4-d1-040
   TỶ LỆ ĐỘ KHÓ: 12 DỄ (30%) - 16 TRUNG BÌNH (40%) - 12 KHÓ/BẪY (30%)
   CHUẨN KỸ THUẬT: DELTA L <= 15 CHARS, CÂN BẰNG ĐÁP ÁN 10A-10B-10C-10D
   ============================================================ */

export const questionsDbCh4Part1 = ${JSON.stringify(questionsDbCh4Part1, null, 2)};
`;

  const contentP2 = `/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG IV: RÀNG BUỘC TOÀN VẸN (INTEGRITY CONSTRAINTS)
   BỘ ĐỀ SỐ 2 — 40 CÂU HỎI HỌC THUẬT CHUẨN MỰC
   MÃ BỘ ĐỀ: db-c4-d2-001 ĐẾN db-c4-d2-040
   TỶ LỆ ĐỘ KHÓ: 12 DỄ (30%) - 16 TRUNG BÌNH (40%) - 12 KHÓ/BẪY (30%)
   CHUẨN KỸ THUẬT: DELTA L <= 15 CHARS, CÂN BẰNG ĐÁP ÁN 10A-10B-10C-10D
   ============================================================ */

export const questionsDbCh4Part2 = ${JSON.stringify(questionsDbCh4Part2, null, 2)};
`;

  fs.writeFileSync('data/questions-db-ch4-part1.js', contentP1, 'utf-8');
  console.log('Successfully written data/questions-db-ch4-part1.js!');

  fs.writeFileSync('data/questions-db-ch4-part2.js', contentP2, 'utf-8');
  console.log('Successfully written data/questions-db-ch4-part2.js!');
}

exportExamFiles();
