import fs from 'fs';

// ========================================================================
// NGÂN HÀNG ĐỀ THI BẪY 2: MÔN HỆ CƠ SỞ DỮ LIỆU - CHƯƠNG II
// CHƯƠNG II: MÔ HÌNH DỮ LIỆU QUAN HỆ (RELATIONAL DATA MODEL)
// BỘ ĐỀ BẪY 2: db-c2-t2-001 ĐẾN db-c2-t2-050 (50 CÂU BẪY 100% HARD)
// CÂN BẰNG ĐÁP ÁN: 12 A, 12 B, 13 C, 13 D (TARGET: 2,3,0,1,2,3,0,1...)
// CHUẨN KỸ THUẬT: DELTA L <= 15 CHARS, 100% TRICKDETAILS 4 TRƯỜNG
// ========================================================================

const targetAnswers2 = [
  2, 3, 0, 1, 2, 3, 0, 1, 2, 3, // 1 - 10
  0, 1, 2, 3, 0, 1, 2, 3, 0, 1, // 11 - 20
  2, 3, 0, 1, 2, 3, 0, 1, 2, 3, // 21 - 30
  0, 1, 2, 3, 0, 1, 2, 3, 0, 1, // 31 - 40
  2, 3, 0, 1, 2, 3, 0, 1, 2, 3  // 41 - 50 (12 A, 12 B, 13 C, 13 D)
];

export const rawQuestionsTrick2 = [
  // --- TRỤ CỘT 1: ĐỊNH NGHĨA CƠ BẢN & PHÂN CẤP HỌ NHÀ KHÓA (Câu 1 - 15) ---
  {
    id: 'db-c2-t2-001',
    question: 'Trong mô hình quan hệ, phát biểu nào sau đây về tính chất của Siêu khóa (Super Key) là HOÀN TOÀN SAI?',
    options: [
      'Một siêu khóa bắt buộc phải có số lượng thuộc tính nhỏ hơn hoặc bằng khóa chính',
      'Mọi tập cha chứa một siêu khóa của lược đồ quan hệ cũng chính là một siêu khóa',
      'Tập hợp tất cả các thuộc tính U luôn luôn là một siêu khóa của lược đồ quan hệ',
      'Một quan hệ luôn luôn có ít nhất một siêu khóa bất kể số lượng các dòng dữ liệu'
    ],
    answer: 0,
    explanation: 'Giáo trình mục I.4.a: Khóa chính là siêu khóa tối thiểu, còn siêu khóa có thể chứa nhiều thuộc tính dư thừa tùy ý (thậm chí là toàn bộ tập thuộc tính U). Khẳng định "siêu khóa bắt buộc có số thuộc tính nhỏ hơn hoặc bằng khóa chính" là hoàn toàn sai.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ từ "Siêu" (Super) nghĩa là phải nhỏ gọn hoặc tối ưu hơn khóa chính.',
      trickWord: 'Bẫy kích thước siêu khóa: Siêu khóa thường LỚN HƠN hoặc bằng Khóa tối thiểu',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.4.a',
      tip: 'Siêu khóa chứa thuộc tính dư thừa ➔ Kích thước thường LỚN HƠN Khóa tối thiểu!'
    }
  },
  {
    id: 'db-c2-t2-002',
    question: 'Thuộc tính không khóa (Non-Prime Attribute) được định nghĩa chính xác theo chuẩn giáo trình là gì?',
    options: [
      'Là thuộc tính không tham gia vào bất kỳ một khóa tối thiểu nào của lược đồ quan hệ',
      'Là thuộc tính không được phép đặt làm khóa chính của bảng quan hệ khi cài đặt',
      'Là thuộc tính có kiểu dữ liệu chuỗi ký tự tự do và có thể nhận giá trị rỗng NULL',
      'Là thuộc tính chỉ đóng vai trò làm khóa ngoại tham chiếu sang bảng quan hệ khác'
    ],
    answer: 0,
    explanation: 'Giáo trình mục I.4.f: Thuộc tính không khóa (Non-Prime Attribute) là thuộc tính KHÔNG THAM GIA VÀO KHÓA NÀO. Nếu nó tham gia vào bất kỳ một khóa nào (kể cả khóa dự tuyển) thì nó đã là Prime Attribute.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm: tưởng không nằm trong Khóa chính thì là Non-prime attribute.',
      trickWord: 'Bẫy định nghĩa Non-Prime Attribute: Phải không tham gia vào BẤT KỲ KHÓA NÀO',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.4.f',
      tip: 'Non-Prime = Không tham gia vào BẤT KỲ khóa nào (cả PK lẫn Candidate Key)!'
    }
  },
  {
    id: 'db-c2-t2-003',
    question: 'Cho quan hệ HOCBONG với thuộc tính DiemTB chỉ nhận các giá trị số thực từ 0 đến 10. Tập hợp các giá trị hợp lệ này được gọi là gì?',
    options: [
      'Miền giá trị (Domain ký hiệu là dom hay D) của thuộc tính DiemTB',
      'Tập hợp tất cả các bộ giá trị của lược đồ quan hệ HOCBONG trên đĩa',
      'Tích Descartes của các trường thuộc tính số nguyên trong hệ cơ sở dữ liệu',
      'Lược đồ con mức ngoài dành cho người sử dụng cuối xem bảng điểm số'
    ],
    answer: 0,
    explanation: 'Giáo trình mục I.1.a & I.1.c định nghĩa: Thông thường mỗi thuộc tính chỉ chọn giá trị trong một tập con của kiểu dữ liệu ➔ gọi là Miền giá trị (Domain), ký hiệu là D(A) hay dom(A).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm Miền giá trị với Kiểu dữ liệu hoặc Tập hợp các bộ.',
      trickWord: 'Bẫy thuật ngữ Miền giá trị (Domain) vs Kiểu dữ liệu (Data Type)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.1.a & I.1.c',
      tip: 'Khoảng giá trị hợp lệ của 1 thuộc tính (0..10) = MIỀN GIÁ TRỊ (Domain)!'
    }
  },
  {
    id: 'db-c2-t2-004',
    question: 'Khi nói về cấu trúc bảng của một quan hệ r(R), khẳng định nào sau đây là ĐÚNG theo lý thuyết CSDL quan hệ?',
    options: [
      'Mỗi giao điểm giữa một dòng và một cột bắt buộc chỉ chứa duy nhất một giá trị nguyên tố',
      'Một ô trong bảng có thể chứa một danh sách mảng nhiều số nguyên để tiết kiệm dòng',
      'Một ô trong bảng có thể chứa một bảng con khác lồng nhau mà không vi phạm quy tắc',
      'Các dòng trong bảng bắt buộc phải có số lượng các cột thay đổi tùy theo từng đối tượng'
    ],
    answer: 0,
    explanation: 'Nguyên lý cốt lõi của mô hình quan hệ (chuẩn 1NF của Codd): Dữ liệu là phẳng, mỗi ô tại giao điểm của dòng và cột chỉ chứa DUY NHẤT MỘT GIÁ TRỊ NGUYÊN TỐ (Atomic value). Không chứa mảng hay bảng con lồng nhau.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh quen với NoSQL/JSON ngày nay cho phép mảng trong ô nên chọn sai.',
      trickWord: 'Bẫy tính nguyên tố của giá trị ô (Atomic value) trong mô hình quan hệ cổ điển',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.1 & I.3',
      tip: 'Mô hình quan hệ Codd: Mỗi ô CHỈ CHỨA 1 GIÁ TRỊ NGUYÊN TỐ (Atomic value)!'
    }
  },
  {
    id: 'db-c2-t2-005',
    question: 'Cho 3 phát biểu về Lược đồ và Thể hiện của CSDL:\n(I) Một lược đồ CSDL có thể tương ứng với nhiều thể hiện khác nhau theo thời gian.\n(II) Lược đồ CSDL thường xuyên thay đổi liên tục theo từng giây khi người dùng thêm dữ liệu.\n(III) Mức logic mô tả toàn bộ cấu trúc CSDL độc lập với ngôn ngữ cài đặt vật lý.\nTổ hợp ĐÚNG là:',
    options: [
      'Phát biểu (I) và (III) hoàn toàn đúng, phát biểu (II) hoàn toàn sai lệch',
      'Cả ba phát biểu (I), (II) và (III) đều hoàn toàn chính xác giáo trình',
      'Chỉ có duy nhất phát biểu (I) là đúng, phát biểu (II) và (III) là sai sót',
      'Phát biểu (II) và (III) hoàn toàn đúng, phát biểu (I) hoàn toàn sai lệch'
    ],
    answer: 0,
    explanation: '(II) sai vì Lược đồ CSDL (Schema) rất ít khi thay đổi (chỉ đổi khi tái cấu trúc hệ thống). Cái thay đổi liên tục từng giây khi thêm/sửa/xóa dữ liệu chính là Thể hiện của CSDL (Instance). (I) và (III) đúng.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh nhầm lẫn giữa tần suất thay đổi của Schema (tĩnh) và Instance (động).',
      trickWord: 'Bẫy tần suất thay đổi: Schema rất tĩnh, Instance thay đổi liên tục từng giây',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.5.a',
      tip: 'Thêm/xóa dữ liệu ➔ Thay đổi THỂ HIỆN (Instance); Lược đồ (Schema) KHÔNG ĐỔI!'
    }
  },
  {
    id: 'db-c2-t2-006',
    question: 'Trong ngôn ngữ C, cấu trúc `struct NHANVIEN { int MaNV; ... struct NHANVIEN *next; };` được dùng để minh họa cho mức nào trong kiến trúc CSDL?',
    options: [
      'Mức vật lý (Internal/Physical Level cài đặt cấu trúc lưu trữ của tập tin)',
      'Mức khái niệm (Conceptual Level mô tả mối quan hệ giữa các thực thể)',
      'Mức khung nhìn (View Level hiển thị thông tin bảng biểu cho người dùng)',
      'Mức phân tích nghiệp vụ (Business Analysis Level của các giám đốc)'
    ],
    answer: 0,
    explanation: 'Giáo trình mục I.5.b nêu rõ: Cấu trúc struct trong ngôn ngữ C (kèm con trỏ next đến bản ghi tiếp theo) là ví dụ minh họa trực quan cho MỨC VẬT LÝ (Internal/Physical Level).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ struct là định nghĩa bảng ở mức logic/khái niệm.',
      trickWord: 'Bẫy ví dụ giáo trình: Struct C với con trỏ tệp = Mức Vật Lý (Physical)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.5.b',
      tip: 'Mã nguồn struct C, con trỏ tệp (pointer) = MỨC VẬT LÝ!'
    }
  },
  {
    id: 'db-c2-t2-007',
    question: 'Điều kiện toán học để một tập thuộc tính K được công nhận là \"Khóa của lược đồ quan hệ R(U)\" gồm hai điều kiện nào sau đây?',
    options: [
      'K là một siêu khóa của R và không có bất kỳ tập con thực sự nào của K là siêu khóa',
      'K là một tập con của U và số lượng thuộc tính trong K bắt buộc phải bằng đúng 1',
      'K là khóa chính được người thiết kế chọn và K không chứa bất kỳ giá trị số âm nào',
      'K là khóa ngoại tham chiếu đến bảng cha và K có chứa ít nhất hai thuộc tính khóa'
    ],
    answer: 0,
    explanation: 'Giáo trình mục I.4.b: Khóa của LĐQH là một siêu khóa của lược đồ này sao cho mọi tập con thực sự của nó không là siêu khóa (tính chất tối thiểu/tối tiểu).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh thường quên điều kiện thứ hai: "mọi tập con thực sự không là siêu khóa".',
      trickWord: 'Bẫy định nghĩa Khóa tối thiểu: Siêu khóa + Tính tối thiểu không thể thu gọn',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.4.b',
      tip: 'Khóa = Siêu khóa + Mọi tập con thực sự của nó KHÔNG LÀ siêu khóa!'
    }
  },
  {
    id: 'db-c2-t2-008',
    question: 'Cho quan hệ SINHVIEN có khóa chính là MaSV. Khẳng định nào sau đây là KHÔNG ĐÚNG về quy tắc toàn vẹn thực thể?',
    options: [
      'Có thể tồn tại một sinh viên có giá trị MaSV là NULL nếu sinh viên đó chưa nhập học',
      'Không bao giờ được phép có hai sinh viên khác nhau cùng mang chung một giá trị MaSV',
      'Giá trị của MaSV dùng để nhận biết duy nhất từng sinh viên cụ thể trong toàn bộ CSDL',
      'Bất kỳ thao tác thêm dòng mới có MaSV trùng với dòng cũ đều bị hệ thống từ chối'
    ],
    answer: 0,
    explanation: 'Quy tắc toàn vẹn thực thể (Entity Integrity): Khóa chính tuyệt đối KHÔNG ĐƯỢC PHÉP CHỨA GIÁ TRỊ NULL. Khẳng định "MaSV có thể là NULL" là hoàn toàn sai.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh nghĩ sinh viên chưa nhập học thì mã số có thể để trống (NULL).',
      trickWord: 'Bẫy toàn vẹn thực thể: Khóa chính TUYỆT ĐỐI CẤM NULL',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.4 & Tam trụ toàn vẹn',
      tip: 'Khóa chính: CẤM TRÙNG LẶP + TUYỆT ĐỐI CẤM NULL!'
    }
  },
  {
    id: 'db-c2-t2-009',
    question: 'Điền thuật ngữ: \"Một tập hợp gồm một hay nhiều thuộc tính của quan hệ này là khóa của một quan hệ khác được gọi là (...).\"',
    options: [
      'Khóa ngoài hay Khóa ngoại (Foreign Key ký hiệu là FK)',
      'Khóa dự tuyển có độ ưu tiên cao nhất (Primary Candidate Key)',
      'Khóa riêng phần của thực thể yếu (Partial Identifying Key)',
      'Siêu khóa tối thiểu toàn cục (Global Minimal Super Key)'
    ],
    answer: 0,
    explanation: 'Giáo trình mục I.4.e định nghĩa nguyên văn: Khóa ngoài / Khóa ngoại (Foreign Key) là một tập hợp gồm một hay nhiều thuộc tính là khóa của một lược đồ quan hệ khác.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm với khóa riêng phần của thực thể yếu.',
      trickWord: 'Bẫy định nghĩa chuẩn mực của Khóa ngoại Foreign Key',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.4.e',
      tip: 'Là khóa của bảng khác ➔ Được gọi là KHÓA NGOẠI (Foreign Key)!'
    }
  },
  {
    id: 'db-c2-t2-010',
    question: 'Cho bảng KetQua(MaSV, MaMH, DiemThi). Nhận định nào sau đây về khóa của bảng KetQua là CHÍNH XÁC NHẤT?',
    options: [
      'Khóa chính bắt buộc phải là tổ hợp của cả hai thuộc tính (MaSV, MaMH)',
      'Chỉ cần một mình thuộc tính MaSV là đủ làm khóa chính duy nhất của bảng',
      'Chỉ cần một mình thuộc tính MaMH là đủ làm khóa chính duy nhất của bảng',
      'Thuộc tính DiemThi bắt buộc phải tham gia vào khóa chính để phân biệt điểm'
    ],
    answer: 0,
    explanation: 'Một sinh viên thi nhiều môn, một môn có nhiều sinh viên thi. Một mình MaSV hoặc MaMH đều bị lặp lại. Do đó khóa chính tối thiểu bắt buộc phải là tổ hợp (MaSV, MaMH).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn MaSV làm khóa chính mà quên một sinh viên thi nhiều môn khác nhau.',
      trickWord: 'Bẫy khóa chính tổ hợp trong bảng kết quả học tập',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.2.b & I.4',
      tip: 'Bảng điểm: 1 SV thi nhiều môn ➔ Khóa chính BẮT BUỘC là (MaSV, MaMH)!'
    }
  },
  {
    id: 'db-c2-t2-011',
    question: 'Khái niệm \"Tập các thuộc tính U = {A1, A2, ..., An}\" trong mô hình quan hệ có đặc trưng toán học nào?',
    options: [
      'Là một tập hợp hữu hạn các phần tử phân biệt, mỗi phần tử có một miền giá trị tương ứng',
      'Là một dãy số vô hạn các ký tự nhị phân được sắp xếp theo thứ tự địa chỉ ô nhớ RAM',
      'Là một danh sách liên kết đơn có thứ tự bắt buộc cố định từ trái sang phải trên đĩa',
      'Là tập hợp các khóa ngoại được chia sẻ chung cho toàn bộ các hệ quản trị trên mạng'
    ],
    answer: 0,
    explanation: 'Giáo trình mục I.1.a định nghĩa hình thức: Cho tập hữu hạn các phần tử U = {A1, A2, ..., An}. Tập U được gọi là tập các thuộc tính. Mỗi phần tử Ai có một miền giá trị tương ứng D(Ai).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh bị đánh lạc hướng sang danh sách liên kết có thứ tự hoặc địa chỉ RAM.',
      trickWord: 'Bẫy định nghĩa tập thuộc tính U là tập hữu hạn các phần tử phân biệt',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.1.a',
      tip: 'Tập thuộc tính U = Tập hợp HỮU HẠN các phần tử phân biệt!'
    }
  },
  {
    id: 'db-c2-t2-012',
    question: 'Khi nói về Mô hình quan hệ, 3 thành phần cấu thành hoàn chỉnh được Codd định nghĩa năm 1970 gồm những gì?',
    options: [
      'Hệ thống ký hiệu mô tả, Tập hợp các phép toán, và Ràng buộc toàn vẹn quan hệ',
      'Bộ vi xử lý trung tâm CPU, Bộ nhớ trong RAM, và Thiết bị lưu trữ ngoài đĩa từ',
      'Tài khoản đăng nhập DBA, Mật khẩu người dùng cuối, và Quyền truy cập tệp tin',
      'Ngôn ngữ lập trình C, Trình biên dịch mã máy, và Hệ điều hành máy tính chủ'
    ],
    answer: 0,
    explanation: 'Giáo trình mục I.1.b: Mô hình quan hệ bao gồm 3 thành phần: 1) Hệ thống các ký hiệu mô tả dữ liệu; 2) Tập hợp các phép toán; 3) Ràng buộc toàn vẹn quan hệ.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn phần cứng máy tính hoặc hệ thống tài khoản phân quyền.',
      trickWord: 'Bẫy 3 thành phần cấu thành Mô hình quan hệ theo Codd',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.1.b',
      tip: 'Mô hình quan hệ Codd = Ký hiệu mô tả + Phép toán + Ràng buộc toàn vẹn!'
    }
  },
  {
    id: 'db-c2-t2-013',
    question: 'Cho lược đồ quan hệ R(A, B, C) có duy nhất 1 khóa tối thiểu là {A}. Tập hợp nào sau đây KHÔNG PHẢI là siêu khóa của R?',
    options: [
      'Tập hợp thuộc tính {B, C} không chứa thuộc tính khóa A bên trong',
      'Tập hợp gồm cả 3 thuộc tính {A, B, C} của lược đồ quan hệ R',
      'Tập hợp gồm 2 thuộc tính {A, B} chứa thuộc tính khóa A bên trong',
      'Tập hợp gồm 2 thuộc tính {A, C} chứa thuộc tính khóa A bên trong'
    ],
    answer: 0,
    explanation: 'Vì {A} là khóa duy nhất, mọi siêu khóa bắt buộc phải chứa {A} (tính chất: tập cha của khóa là siêu khóa). Tập {B, C} không chứa {A} nên không thể xác định duy nhất một bộ, do đó không phải là siêu khóa.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm: tưởng 2 thuộc tính {B, C} ghép lại thì sẽ thành siêu khóa.',
      trickWord: 'Bẫy điều kiện Siêu khóa: Bắt buộc phải bao hàm ít nhất một Khóa tối thiểu',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.4.a',
      tip: 'Siêu khóa BẮT BUỘC phải chứa khóa {A} bên trong nó ➔ {B, C} KHÔNG PHẢI siêu khóa!'
    }
  },
  {
    id: 'db-c2-t2-014',
    question: 'Bẫy nhận định: \"Nếu lược đồ quan hệ có nhiều khóa dự tuyển thì người thiết kế BẮT BUỘC phải chọn tất cả các khóa dự tuyển đó làm khóa chính.\" Khẳng định này là:',
    options: [
      'Sai, người thiết kế chỉ chọn đúng DUY NHẤT MỘT khóa tối thiểu để làm khóa chính',
      'Đúng, vì hệ quản trị CSDL quan hệ yêu cầu mọi khóa dự tuyển đều phải là khóa chính',
      'Đúng, nếu quan hệ đó có trên một ngàn dòng dữ liệu được lưu trữ trên máy chủ',
      'Sai, vì quan hệ không được phép có khóa chính mà chỉ được phép có khóa ngoại'
    ],
    answer: 0,
    explanation: 'Giáo trình mục I.4.c & I.4.d: Khóa chính là MỘT khóa tối thiểu được người phân tích chọn để cài đặt. Một quan hệ chỉ có DUY NHẤT MỘT khóa chính. Các khóa tối thiểu còn lại là khóa dự tuyển.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh nhầm giữa việc có nhiều candidate keys với số lượng khóa chính được cài đặt.',
      trickWord: 'Bẫy số lượng khóa chính: Mỗi bảng chỉ có DUY NHẤT 1 Khóa chính (Primary Key)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.4.c',
      tip: 'Có thể có nhiều khóa dự tuyển, nhưng CHỈ ĐƯỢC CHỌN ĐÚNG 1 Khóa chính!'
    }
  },
  {
    id: 'db-c2-t2-015',
    question: 'Khái niệm \"Quan hệ rỗng\" (Empty Relation ký hiệu r = ∅) trong mô hình quan hệ mang ý nghĩa kỹ thuật gì?',
    options: [
      'Lược đồ quan hệ đã được khai báo các thuộc tính nhưng chưa có dòng dữ liệu nào được nạp',
      'Lược đồ quan hệ đã bị người quản trị DBA dùng lệnh xóa bỏ hoàn toàn khỏi bộ nhớ đĩa',
      'Lược đồ quan hệ không có bất kỳ thuộc tính nào và không có tên gọi trong hệ thống',
      'Một bảng dữ liệu bị hỏng cung từ vật lý khiến hệ điều hành không thể đọc được'
    ],
    answer: 0,
    explanation: 'Giáo trình mục I.2.b: Khi cho tập thuộc tính U, ta coi như cho trước LĐQH, và cùng với nó có quan hệ rỗng r = ∅. Khi lược đồ được nạp thêm ít nhất một dòng ➔ ta có quan hệ khác rỗng.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm quan hệ rỗng là bảng bị xóa khỏi CSDL (DROP TABLE).',
      trickWord: 'Bẫy quan hệ rỗng: Đã có cấu trúc cột nhưng CHƯA NẠP DÒNG DỮ LIỆU NÀO',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.2.b',
      tip: 'Quan hệ rỗng r = ∅ ➔ Đã có cấu trúc cột, chỉ là số dòng = 0!'
    }
  },

  // --- TRỤ CỘT 2: CỖ MÁY 10 PHÉP TOÁN ĐẠI SỐ QUAN HỆ (Câu 16 - 35) ---
  {
    id: 'db-c2-t2-016',
    question: 'Cho 2 quan hệ r1 và r2 có thuộc tính U1 = {MaNV, Hoten} và U2 = {MaNV, Luong}. Kết quả của Phép hợp r1 ∪ r2 trong đại số quan hệ là gì?',
    options: [
      'Không thực hiện được vì hai quan hệ r1 và r2 không tương thích (U1 khác U2)',
      'Thu được một quan hệ mới gồm cả 3 thuộc tính {MaNV, Hoten, Luong} của cả hai',
      'Thu được một quan hệ rỗng vì hai quan hệ không có cùng số lượng các dòng dữ liệu',
      'Hệ thống tự động điền giá trị NULL vào cột Hoten và Luong cho các dòng bị thiếu'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.4.a & II.4.c: Phép hợp (∪) BẮT BUỘC phải thực hiện trên hai quan hệ TƯƠNG THÍCH (có cùng tập thuộc tính U1 = U2). Ở đây U1 ≠ U2 nên phép toán KHÔNG THỂ THỰC HIỆN ĐƯỢC.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh bị nhầm sang phép kết nối tự nhiên (Join) hoặc phép Full Outer Join của SQL.',
      trickWord: 'Bẫy điều kiện tiên quyết của Phép Hợp ∪ trong toán ĐSQH',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.4.a & II.4.c',
      tip: 'Khác tập thuộc tính ➔ TUYỆT ĐỐI KHÔNG THỰC HIỆN ĐƯỢC phép hợp ∪!'
    }
  },
  {
    id: 'db-c2-t2-017',
    question: 'Trong đại số quan hệ, kết quả của Phép hiệu r1 − r2 giữa hai quan hệ tương thích được định nghĩa chính xác là gì?',
    options: [
      'Tập hợp các bộ thuộc r1 nhưng không thuộc r2: {t | t ∈ r1 ∧ t ∉ r2}',
      'Tập hợp các bộ thuộc r2 nhưng không thuộc r1: {t | t ∈ r2 ∧ t ∉ r1}',
      'Tập hợp các bộ vừa thuộc r1 vừa thuộc r2: {t | t ∈ r1 ∧ t ∈ r2}',
      'Tập hợp các bộ thuộc r1 hoặc thuộc r2: {t | t ∈ r1 ∨ t ∈ r2}'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.4.c: Hiệu của 2 quan hệ tương thích r, s, ký hiệu r − s, là quan hệ gồm các bộ thuộc r nhưng không thuộc s: r − s = {t | t ∈ r ∧ t ∉ s}.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm thứ tự trừ: lấy phần tử của r2 trừ r1.',
      trickWord: 'Bẫy định nghĩa hình thức toán học của Phép Hiệu Difference (−)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.4.c',
      tip: 'r1 − r2 = Các bộ thuộc r1 nhưng KHÔNG THUỘC r2!'
    }
  },
  {
    id: 'db-c2-t2-018',
    question: 'Khi thực hiện Phép tích Descartes r(R) × s(S) trên 2 quan hệ rời nhau với R có n thuộc tính và S có m thuộc tính, bậc của quan hệ kết quả là bao nhiêu?',
    options: [
      'Chính xác là n + m thuộc tính trên lược đồ hợp R ∪ S',
      'Chính xác là n × m thuộc tính do nhân chéo tất cả các cột',
      'Chính xác là giá trị lớn nhất giữa n và m: max(n, m)',
      'Chính xác là n − m thuộc tính trên lược đồ hiệu R − S'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.3.a: Kết quả là quan hệ gồm các (n + m)-bộ trên lược đồ R1 ∪ R2 (n thành phần đầu thuộc r, m thành phần sau thuộc s). Bậc của quan hệ kết quả là n + m.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm giữa bậc thuộc tính (cộng n + m) với số dòng (nhân n x m).',
      trickWord: 'Bẫy Bậc thuộc tính (Degree) = n + m vs Số dòng (Cardinality) = n x m',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.3.a',
      tip: 'Tích Descartes: SỐ CỘT = n + m; SỐ DÒNG = số dòng r × số dòng s!'
    }
  },
  {
    id: 'db-c2-t2-019',
    question: 'Phát biểu nào sau đây là ĐÚNG khi so sánh Phép chọn (σ) và Phép chiếu (π)?',
    options: [
      'Phép chọn cắt quan hệ theo chiều ngang (lọc dòng), phép chiếu cắt theo chiều dọc (lọc cột)',
      'Phép chọn cắt quan hệ theo chiều dọc (lọc cột), phép chiếu cắt theo chiều ngang (lọc dòng)',
      'Cả phép chọn và phép chiếu đều làm giảm đồng thời cả số dòng và số cột của quan hệ gốc',
      'Phép chọn luôn loại bỏ các bộ trùng lặp còn phép chiếu giữ nguyên tất cả các bộ trùng lặp'
    ],
    answer: 0,
    explanation: 'Phép chọn σ lọc các bộ (dòng) thỏa điều kiện ➔ Cắt ngang quan hệ (Horizontal slice). Phép chiếu π trích chọn các thuộc tính (cột) ➔ Cắt dọc quan hệ (Vertical slice).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nói ngược: tưởng chọn là cắt dọc và chiếu là cắt ngang.',
      trickWord: 'Bẫy hình học trực quan: Chọn σ = Cắt ngang (Dòng); Chiếu π = Cắt dọc (Cột)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.2',
      tip: 'Chọn σ = Lọc dòng (CẮT NGANG); Chiếu π = Lọc cột (CẮT DỌC)!'
    }
  },
  {
    id: 'db-c2-t2-020',
    question: 'Cho 2 quan hệ r và s có chung thuộc tính A. Trong kết quả của Phép kết nối tự nhiên r * s, thuộc tính A sẽ xuất hiện mấy lần?',
    options: [
      'Xuất hiện đúng 1 lần duy nhất do một trong hai thuộc tính trùng tên đã bị loại bỏ',
      'Xuất hiện 2 lần riêng biệt với tên gọi r.A và s.A giống hệt như tích Descartes',
      'Bị xóa bỏ hoàn toàn khỏi kết quả và không xuất hiện lần nào trong bảng mới',
      'Xuất hiện vô số lần tùy thuộc vào số lượng các bộ dữ liệu trùng khớp nhau'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.3.b ghi rõ: Trong phép kết nối tự nhiên, một trong hai thuộc tính trùng tên bị LOẠI BỎ khỏi kết quả để tránh dư thừa. Thuộc tính A chỉ xuất hiện đúng 1 lần.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh quen với kết quả `SELECT * FROM r JOIN s ON r.A = s.A` trong SQL (hiển thị cả 2 cột A).',
      trickWord: 'Bẫy khác biệt giữa ĐSQH và SQL: Natural Join trong ĐSQH chỉ giữ 1 cột A',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.3.b',
      tip: 'ĐSQH Natural Join (*): Thuộc tính trùng tên CHỈ XUẤT HIỆN 1 LẦN DUY NHẤT!'
    }
  },
  {
    id: 'db-c2-t2-021',
    question: 'Cho các nhận định về Phép chia (Division — ÷) trong đại số quan hệ:\n(I) Quan hệ chia s bắt buộc phải có tập thuộc tính là tập con của quan hệ bị chia r.\n(II) Kết quả của r ÷ s chứa các bộ kết hợp với mọi bộ của s đều thuộc về r.\n(III) Phép chia có tính chất giao hoán: r ÷ s = s ÷ r.\nTổ hợp ĐÚNG là:',
    options: [
      'Tổ hợp (I) và (II) hoàn toàn đúng đắn, nhận định (III) sai',
      'Cả ba nhận định (I), (II) và (III) đều hoàn toàn chính xác',
      'Chỉ duy nhất nhận định (I) là đúng, nhận định (II), (III) sai',
      'Tổ hợp (II) và (III) hoàn toàn đúng đắn, nhận định (I) sai'
    ],
    answer: 0,
    explanation: '(III) sai vì phép chia toán học không bao giờ giao hoán ($r \\div s \\neq s \\div r$). (I) và (II) hoàn toàn đúng theo giáo trình mục II.5.b.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh đọc lướt nhận định (III) tưởng phép chia cũng giao hoán như phép nhân.',
      trickWord: 'Bẫy tính giao hoán: Phép chia (Division ÷) TUYỆT ĐỐI KHÔNG GIAO HOÁN',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.5.b',
      tip: 'Phép chia r ÷ s KHÔNG CÓ tính giao hoán!'
    }
  },
  {
    id: 'db-c2-t2-022',
    question: 'Biểu thức ĐSQH tìm mã các đề tài có kinh phí ≥ 20 triệu HOẶC do thầy \'Lê Đức Phúc\' làm chủ nhiệm là gì?',
    options: [
      'π_(MaDT) (σ_(Kinhphi ≥ 20 ∨ Chunhiem = \'Lê Đức Phúc\') (DETAI))',
      'π_(MaDT) (σ_(Kinhphi ≥ 20 ∧ Chunhiem = \'Lê Đức Phúc\') (DETAI))',
      'π_(MaDT) (σ_(Kinhphi ≥ 20 ∧ Chunhiem ≠ \'Lê Đức Phúc\') (DETAI))',
      'π_(MaDT) (σ_(Kinhphi < 20 ∨ Chunhiem ≠ \'Lê Đức Phúc\') (DETAI))'
    ],
    answer: 0,
    explanation: 'Từ khóa "HOẶC" trong câu hỏi tương ứng với toán tử tuyển logic `∨` (OR) trong biểu thức của phép chọn σ. Dùng `∧` là sai vì đó là "VÀ".',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn nhầm phép `∧` (AND) thay vì `∨` (OR).',
      trickWord: 'Bẫy toán tử logic: "HOẶC" bắt buộc dùng toán tử tuyển logic ∨',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.2.a',
      tip: 'Hoặc = Toán tử ∨; Và = Toán tử ∧!'
    }
  },
  {
    id: 'db-c2-t2-023',
    question: 'Cho quan hệ r gồm các thuộc tính (MaSV, MaMH, DiemThi). Biểu thức nào sau đây tìm các sinh viên có điểm thi môn \'CSDL\' lớn hơn điểm thi môn \'CTDL\' của chính sinh viên đó?',
    options: [
      'Cần đổi tên để tự kết nối: σ_(r1.MaSV=r2.MaSV ∧ r1.DiemThi>r2.DiemThi) (σ_(MaMH=\'CSDL\')(r1) × σ_(MaMH=\'CTDL\')(r2))',
      'Chỉ dùng một phép chọn lọc đơn: σ_(MaSV=MaSV ∧ r.DiemThi>r.DiemThi) (σ_(MaMH=\'CSDL\')(r) ∩ σ_(MaMH=\'CTDL\')(r))',
      'Dùng phép hợp hai bảng điểm con lại: σ_(r.MaSV=r.MaSV ∧ DiemThi>5) (σ_(MaMH=\'CSDL\')(r) ∪ σ_(MaMH=\'CTDL\')(r))',
      'Đại số quan hệ hoàn toàn bất lực trước truy vấn so sánh hai dòng, phải chuyển sang dùng lệnh SQL nâng cao'
    ],
    answer: 0,
    explanation: 'Vì mỗi dòng chỉ lưu 1 môn, điều kiện so sánh giữa 2 môn của cùng 1 sinh viên đòi hỏi phải thực hiện phép TỰ KẾN NỐI (Self-join) thông qua phép đổi tên quan hệ trung gian r1 và r2, sau đó so sánh DiemThi.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn phương án B (viết `MaMH = CSDL ∧ MaMH = CTDL` trên 1 dòng, điều kiện này luôn luôn False).',
      trickWord: 'Bẫy Self-join trong ĐSQH: Bắt buộc đổi tên quan hệ để so sánh 2 dòng với nhau',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.3 & II.5',
      tip: 'So sánh dữ liệu giữa 2 dòng trong cùng 1 bảng ➔ Bắt buộc phải TỰ KẾT NỐI (Self-Join)!'
    }
  },
  {
    id: 'db-c2-t2-024',
    question: 'Điền thuật ngữ: \"Phép kết nối điều kiện (θ-Join) khi toán tử so sánh θ là toán tử bằng (=) thì được gọi là (...).\"',
    options: [
      'Phép kết nối điều kiện bằng (Equijoin)',
      'Phép kết nối tự nhiên chuẩn (Natural Join)',
      'Phép tích Descartes chuẩn (Cartesian Product)',
      'Phép kết nối nửa ngoài chuẩn (Semi-join)'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.3.b định nghĩa: Nếu θ là toán tử so sánh bằng "=" ➔ gọi là kết nối bằng (Equijoin). Khi kết nối bằng trên các thuộc tính trùng tên và bỏ 1 cột trùng thì mới là Kết nối tự nhiên.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm Equijoin với Natural Join (quên rằng Natural Join còn có thêm điều kiện bỏ cột trùng tên).',
      trickWord: 'Bẫy phân biệt Equijoin (kết nối bằng) vs Natural Join (kết nối tự nhiên)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.3.b',
      tip: "θ là dấu '=' ➔ KẾT NỐI BẰNG (Equijoin); Kết nối bằng cột trùng tên + bỏ 1 cột ➔ NATURAL JOIN!"
    }
  },
  {
    id: 'db-c2-t2-025',
    question: 'Cho bảng Giangvien có 10 người và Canbo có 15 người, trong đó có đúng 5 người vừa là cán bộ vừa là giảng viên. Số bộ trong kết quả của Giangvien ∪ Canbo là bao nhiêu?',
    options: [
      'Chính xác là 20 bộ (vì 10 + 15 − 5 = 20 bộ, các phần tử trùng lặp chỉ tính một lần)',
      'Chính xác là 25 bộ (vì 10 + 15 = 25 bộ, phép hợp luôn cộng gộp tất cả các dòng)',
      'Chính xác là 5 bộ (vì chỉ có 5 người chung mới được đưa vào kết quả phép hợp)',
      'Chính xác là 50 bộ (vì phép hợp nhân đôi số lượng cán bộ với số lượng giảng viên)'
    ],
    answer: 0,
    explanation: 'Theo nguyên lý tập hợp: $|A \\cup B| = |A| + |B| - |A \\cap B| = 10 + 15 - 5 = 20$ bộ. Các phần tử trùng lặp (5 người) chỉ được giữ lại 1 lần duy nhất trong phép hợp.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay lấy 10 + 15 = 25 (quên mất phép hợp trong ĐSQH loại bỏ trùng lặp).',
      trickWord: 'Bẫy loại bỏ phần tử giao trong Phép Hợp ∪ của đại số quan hệ',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.4.a',
      tip: '|A ∪ B| = |A| + |B| − |A ∩ B| = 10 + 15 − 5 = 20 bộ!'
    }
  },
  {
    id: 'db-c2-t2-026',
    question: 'Khi thực hiện Phép kết nối tự nhiên r * s, nếu hai quan hệ r và s hoàn toàn KHÔNG CÓ bất kỳ thuộc tính chung nào, kết quả sẽ tương đương với phép toán nào?',
    options: [
      'Tương đương chính xác với Phép tích Descartes r × s',
      'Thu được một quan hệ rỗng r = ∅ vì không có thuộc tính để ghép nối',
      'Bị lỗi cú pháp toán học và hệ thống từ chối thực hiện câu truy vấn',
      'Tương đương với Phép hợp r ∪ s của hai quan hệ rời nhau'
    ],
    answer: 0,
    explanation: 'Theo định nghĩa: Nếu r và s không có thuộc tính chung, điều kiện kết nối bằng trở thành luôn đúng (chân lý). Khi đó phép kết nối tự nhiên suy biến thành Phép tích Descartes r × s.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ không có thuộc tính chung thì Natural Join trả về rỗng.',
      trickWord: 'Bẫy suy biến của Natural Join khi không có thuộc tính chung: Thành Tích Descartes',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.3.b',
      tip: 'Không có cột chung ➔ Natural Join (*) biến thành TÍCH DESCARTES (×)!'
    }
  },
  {
    id: 'db-c2-t2-027',
    question: 'Hai biểu thức ĐSQH sau đây có tương đương nhau về mặt kết quả không:\nE1 = σ_C (π_X (r))\nE2 = π_X (σ_C (r))\n(Giả sử điều kiện C chỉ liên quan đến các thuộc tính nằm trong tập X).',
    options: [
      'Hoàn toàn tương đương nhau và E2 tối ưu hơn vì lọc dòng trước khi chiếu',
      'Tuyệt đối không bao giờ tương đương nhau vì thứ tự các phép toán bị đảo ngược',
      'Chỉ tương đương nhau khi quan hệ r có chứa ít nhất một khóa ngoại',
      'Chỉ tương đương nhau khi điều kiện C chỉ sử dụng duy nhất toán tử so sánh bằng'
    ],
    answer: 0,
    explanation: 'Nếu điều kiện C chỉ chứa thuộc tính trong X, thì lọc dòng trước rồi chiếu cột (E2) hay chiếu cột trước rồi lọc dòng (E1) đều cho kết quả như nhau. Trong đó E2 tối ưu hơn vì giảm số dòng trước.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ đảo thứ tự phép toán thì kết quả lúc nào cũng khác nhau.',
      trickWord: 'Bẫy quy tắc giao hoán giữa Phép chọn và Phép chiếu khi C ⊆ X',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.2',
      tip: 'Nếu C chỉ chứa cột trong X ➔ σ và π có thể hoán đổi; Lọc dòng (σ) trước thì nhanh hơn!'
    }
  },
  {
    id: 'db-c2-t2-028',
    question: 'Cho lược đồ R(A, B) và S(B). Giả sử r = {(1, a), (1, b), (2, a)} và s = {(a), (b)}. Kết quả của Phép chia r ÷ s là gì?',
    options: [
      'Gồm đúng 1 bộ duy nhất là {(1)} vì chỉ có giá trị 1 đi kèm với cả (a) và (b)',
      'Gồm 2 bộ là {(1), (2)} vì cả 1 và 2 đều có xuất hiện trong quan hệ r',
      'Gồm 0 bộ rỗng vì số lượng dòng của quan hệ s ít hơn số dòng của quan hệ r',
      'Gồm 3 bộ giống hệt như quan hệ r ban đầu do phép chia giữ nguyên dữ liệu'
    ],
    answer: 0,
    explanation: 'Theo định nghĩa phép chia: r ÷ s tìm các giá trị A sao cho A ghép với TẤT CẢ các giá trị B trong s đều thuộc r. Giá trị A = 1 có (1, a) và (1, b) ➔ Thỏa mãn. Giá trị A = 2 chỉ có (2, a), thiếu (2, b) ➔ Loại. Kết quả là {(1)}.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay lấy cả giá trị A = 2 (quên mất điều kiện phải đi kèm với TẤT CẢ phần tử của s).',
      trickWord: 'Bẫy tính toán thực tế của Phép chia r ÷ s',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.5.b',
      tip: 'Chỉ giữ lại giá trị nào đi kèm với TẤT CẢ các dòng của s ➔ Chỉ có 1!'
    }
  },
  {
    id: 'db-c2-t2-029',
    question: 'Toán tử logic nào sau đây được phép sử dụng để liên kết các biểu thức điều kiện con bên trong Phép chọn (Selection — σ)?',
    options: [
      'Các toán tử logic chuẩn: ∧ (AND - hội), ∨ (OR - tuyển), và ¬ (NOT - phủ định)',
      'Chỉ duy nhất toán tử ∧ (AND), tuyệt đối không được dùng toán tử ∨ (OR)',
      'Các phép toán số học cộng, trừ, nhân, chia giữa các chuỗi ký tự Unicode',
      'Các lệnh gán biến con trỏ bộ nhớ trong ngôn ngữ lập trình hợp ngữ'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.2.a: Điều kiện C trong phép chọn là một biểu thức logic, các biểu thức con có thể kết hợp với nhau bằng các toán tử logic: ∧ (AND), ∨ (OR), ¬ (NOT).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ phép chọn chỉ hỗ trợ AND mà không hỗ trợ OR/NOT.',
      trickWord: 'Bẫy các toán tử logic hợp lệ trong điều kiện C của Phép chọn σ',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.2.a',
      tip: 'Điều kiện chọn σ hỗ trợ đầy đủ: ∧ (AND), ∨ (OR), ¬ (NOT)!'
    }
  },
  {
    id: 'db-c2-t2-030',
    question: 'Biểu thức ĐSQH nào sau đây tìm mã số và tên các đề tài được thực hiện bởi sinh viên có học lực \'Xuất sắc\' (dùng SINHVIEN, SV_DT, DETAI)?',
    options: [
      'π_(MaDT, TenDT) (σ_(Hocluc = \'Xuất sắc\') (SINHVIEN * SV_DT * DETAI))',
      'σ_(MaDT, TenDT) (π_(Hocluc = \'Xuất sắc\') (SINHVIEN * SV_DT * DETAI))',
      'π_(MaDT, TenDT) (SINHVIEN * SV_DT) ∩ π_(MaDT, TenDT) (DETAI)',
      'π_(MaDT, TenDT) (σ_(Hocluc = \'Xuất sắc\') (SINHVIEN) × DETAI)'
    ],
    answer: 0,
    explanation: 'Kết nối tự nhiên 3 bảng để liên kết MaSV và MaDT, lọc sinh viên có Hocluc = \'Xuất sắc\' bằng σ, sau đó chiếu lấy MaDT và TenDT bằng π.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh nhầm ký hiệu σ và π hoặc dùng phép giao giữa 2 bảng không tương thích.',
      trickWord: 'Bẫy truy vấn liên kết 3 bảng bằng kết nối tự nhiên và phép chọn/chiếu',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.2 & II.3',
      tip: 'Ghép 3 bảng dùng (*), Lọc dòng dùng σ, Lấy cột dùng π!'
    }
  },
  {
    id: 'db-c2-t2-031',
    question: 'Trong đại số quan hệ, nếu quan hệ r có 0 bộ dữ liệu (r = ∅), kết quả của phép chiếu π_X(r) trên tập thuộc tính X bất kỳ sẽ là gì?',
    options: [
      'Là quan hệ rỗng (∅) trên lược đồ X và không có bất kỳ bộ dữ liệu nào',
      'Là một quan hệ chứa 1 bộ duy nhất với tất cả các trường đều mang giá trị NULL',
      'Hệ thống sẽ báo lỗi sập bộ nhớ do không thể chiếu trên một quan hệ rỗng',
      'Hệ thống tự động nạp ngẫu nhiên một dòng dữ liệu mẫu vào quan hệ kết quả'
    ],
    answer: 0,
    explanation: 'Theo định nghĩa: π_X(r) = {t[X] | t ∈ r}. Nếu r = ∅ thì không có bộ t nào thuộc r, do đó tập kết quả cũng là tập rỗng ∅ trên lược đồ X.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ kết quả trả về 1 dòng chứa giá trị NULL.',
      trickWord: 'Bẫy phép chiếu trên tập rỗng: Kết quả luôn luôn là Tập Rỗng (∅)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.2.b',
      tip: 'Chiếu trên tập rỗng ➔ Kết quả CHẮC CHẮN LÀ TẬP RỖNG (∅)!'
    }
  },
  {
    id: 'db-c2-t2-032',
    question: 'Cho 2 quan hệ r và s có U1 = {A, B} và U2 = {A, B}. Khẳng định nào sau đây về mối quan hệ giữa phép giao và phép hiệu là ĐÚNG?',
    options: [
      'Phép giao r ∩ s có thể biểu diễn qua phép hiệu là: r − (r − s)',
      'Phép giao r ∩ s có thể biểu diễn qua phép hiệu là: (r − s) − s',
      'Phép giao r ∩ s có thể biểu diễn qua phép hiệu là: s − (s ∪ r)',
      'Phép giao và phép hiệu là hai phép toán hoàn toàn độc lập không thể quy đổi'
    ],
    answer: 0,
    explanation: 'Đẳng thức tập hợp kinh điển: r ∩ s = r − (r − s). Phần bù của phần bù chính là phần giao nhau của hai tập hợp.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh không nhớ công thức biến đổi tương đương giữa phép giao và phép hiệu.',
      trickWord: 'Bẫy đẳng thức tập hợp: r ∩ s = r − (r − s)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.4.b',
      tip: 'r ∩ s = r − (r − s)!'
    }
  },
  {
    id: 'db-c2-t2-033',
    question: 'Trong biểu thức ĐSQH: `XuatSac ← σ_(DiemTB ≥ 9.0)(HOCBONG)`, ký hiệu mũi tên ngược `←` mang ý nghĩa gì?',
    options: [
      'Gán kết quả của biểu thức ĐSQH bên phải cho tên quan hệ trung gian XuatSac bên trái',
      'So sánh xem quan hệ XuatSac có nhỏ hơn hoặc bằng quan hệ HOCBONG hay không',
      'Chuyển toàn bộ dữ liệu của quan hệ XuatSac lưu đè vào bảng HOCBONG trên ổ đĩa',
      'Xóa sạch toàn bộ dữ liệu của quan hệ HOCBONG sau khi thực hiện xong câu lệnh'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.5.a: Cú pháp phép đặt tên: `⟨tên quan hệ trung gian⟩ ← ⟨biểu thức ĐSQH⟩`. Dấu `←` là phép gán kết quả của biểu thức cho một quan hệ trung gian.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm dấu `←` là phép so sánh nhỏ hơn hoặc bằng `<=`.',
      trickWord: 'Bẫy ký hiệu toán học: Mũi tên ← là phép gán tên quan hệ trung gian',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.5.a',
      tip: 'Dấu ← trong ĐSQH = Gán kết quả cho quan hệ trung gian!'
    }
  },
  {
    id: 'db-c2-t2-034',
    question: 'Một câu hỏi nghiệp vụ: \"Tìm các đề tài có tất cả sinh viên khoa CNTT tham gia\". Dấu hiệu then chốt nào trong câu hỏi chỉ ra cần dùng Phép chia (÷)?',
    options: [
      'Cụm từ \"TẤT CẢ SINH VIÊN KHOA CNTT\" tương ứng với lượng từ với mọi ∀',
      'Cụm từ \"TÌM CÁC ĐỀ TÀI\" chỉ ra rằng cần lọc cột mã đề tài bằng phép chiếu',
      'Cụm từ \"THAM GIA\" chỉ ra rằng bắt buộc phải sử dụng phép kết nối ngoài',
      'Cụm từ \"KHOA CNTT\" chỉ ra rằng bắt buộc phải sử dụng phép tích Descartes'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.5.b: Ý nghĩa nghiệp vụ của phép chia là giải quyết các bài toán mang ý nghĩa "TẤT CẢ" hoặc "MỌI" (lượng từ ∀). Khi gặp yêu cầu "tất cả sinh viên khoa CNTT", đó là dấu hiệu chuẩn xác của Phép chia (÷).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Học viên hay dùng phép Join thông thường mà không nhận ra đây là bài toán phổ quát ∀.',
      trickWord: 'Bẫy nhận diện yêu cầu nghiệp vụ: Cụm từ "TẤT CẢ" = Phép Chia (÷)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.5.b',
      tip: 'Đề bài có chữ "TẤT CẢ / MỌI" ➔ Dấu hiệu chắc chắn dùng PHÉP CHIA (÷)!'
    }
  },
  {
    id: 'db-c2-t2-035',
    question: 'Khẳng định nào sau đây là KHÔNG ĐÚNG khi nói về Đại số quan hệ (Relational Algebra)?',
    options: [
      'Đại số quan hệ là một ngôn ngữ lập trình thủ tục bắt buộc phải biên dịch ra tệp .exe',
      'Đại số quan hệ có tính đầy đủ và là ngôn ngữ phi thủ tục dựa trên toán học',
      'Đại số quan hệ là nền tảng trực tiếp để xây dựng ngôn ngữ truy vấn dữ liệu SQL',
      'Kết quả của một phép toán đại số quan hệ luôn luôn là một quan hệ mới'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.1.a: Đại số quan hệ là ngôn ngữ PHI THỦ TỤC (Non-procedural) và có tính đầy đủ, là cơ sở cho SQL. Khẳng định "là ngôn ngữ lập trình thủ tục biên dịch ra file .exe" là SAI.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh nhầm lẫn giữa ngôn ngữ thủ tục (Procedural như C) với ngôn ngữ phi thủ tục của ĐSQH.',
      trickWord: 'Bẫy bản chất ĐSQH: Là ngôn ngữ PHI THỦ TỤC, không phải ngôn ngữ thủ tục',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.1.a',
      tip: 'Đại số quan hệ = PHI THỦ TỤC (Non-procedural); Kết quả luôn là 1 quan hệ!'
    }
  },

  // --- TRỤ CỘT 3: QUY TRÌNH 7 BƯỚC CHUYỂN ĐỔI ERD & BÀI TẬP BÁN HÀNG (Câu 36 - 50) ---
  {
    id: 'db-c2-t2-036',
    question: 'Theo Bước 4, một Thực thể kết hợp (Associative Entity) KHÔNG CÓ danh hiệu riêng (No natural identifier) sẽ được chuyển đổi sang mô hình quan hệ giống như trường hợp nào?',
    options: [
      'Xử lý giống mối quan hệ nhiều - nhiều (M:N), khóa chính là tổ hợp các khóa ngoại',
      'Xử lý giống mối quan hệ một - một (1:1), khóa chính lấy từ phía thực thể tùy chọn',
      'Xử lý giống một kiểu thực thể thường độc lập, không cần bất kỳ khóa ngoại liên kết',
      'Xử lý giống mối quan hệ cha - con kế thừa, khóa chính tự động đồng bộ từ máy chủ'
    ],
    answer: 0,
    explanation: 'Giáo trình mục III.3.b (Bước 4): Thực thể kết hợp không có danh hiệu riêng được xử lý GIỐNG MỐI QUAN HỆ NHIỀU-NHIỀU (khóa chính tổ hợp từ 2 khóa ngoại của 2 thực thể tham gia).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh không nhớ quy tắc phân nhánh của Bước 4 khi thực thể kết hợp không có identifier riêng.',
      trickWord: 'Bẫy Bước 4: Không có danh hiệu riêng ➔ Xử lý như quan hệ Nhiều-Nhiều (M:N)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục III.3.b',
      tip: 'Thực thể kết hợp không có mã riêng ➔ Xử lý y hệt quan hệ M:N (PK tổ hợp từ các FK)!'
    }
  },
  {
    id: 'db-c2-t2-037',
    question: 'Theo Bước 5, khi chuyển đổi mối quan hệ một ngôi Nhiều - Nhiều đệ quy (M:N Unary, ví dụ: Môn học tiên quyết: 1 môn có nhiều môn trước, 1 môn là điều kiện cho nhiều môn sau), quy tắc chuẩn là gì?',
    options: [
      'Tạo 2 quan hệ: bảng cho thực thể gốc và bảng kết hợp gồm 2 khóa ngoại cùng trỏ về khóa chính',
      'Chỉ cần tạo duy nhất 1 quan hệ và bổ sung thêm 2 cột khóa ngoại cùng đặt trực tiếp trong bảng',
      'Bắt buộc phải phân tách thành 3 quan hệ độc lập để ngăn chặn hiện tượng lặp vô tận khi duyệt',
      'Mô hình dữ liệu quan hệ hoàn toàn không cho phép đệ quy nên bắt buộc phải loại bỏ mối quan hệ'
    ],
    answer: 0,
    explanation: 'Giáo trình mục III.5.a (Bảng Bước 5): Quan hệ một ngôi M:N đệ quy: Tạo 2 quan hệ: (1) quan hệ cho kiểu thực thể đó; (2) quan hệ kết hợp gồm 2 thuộc tính là khóa ngoại cùng tham chiếu về khóa chính của (1) -- khóa chính quan hệ kết hợp là tổ hợp 2 thuộc tính đó.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm M:N đệ quy với 1:N đệ quy (tưởng chỉ cần thêm cột trong 1 bảng).',
      trickWord: 'Bẫy đệ quy M:N: BẮT BUỘC TẠO 2 QUAN HỆ (Bảng thực thể + Bảng kết hợp đệ quy)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục III.5.a',
      tip: 'Đệ quy M:N ➔ 2 bảng: Bảng gốc + Bảng kết hợp (chứa 2 FK cùng trỏ về PK gốc)!'
    }
  },
  {
    id: 'db-c2-t2-038',
    question: 'Theo Bước 7, trong mối quan hệ Cha/Con (Supertype/Subtype), các thuộc tính chung của tất cả các đối tượng (như Mã nhân viên, Họ tên, Địa chỉ) sẽ được đặt ở đâu?',
    options: [
      'Đặt trong quan hệ Cha (Supertype), quan hệ con chỉ chứa thuộc tính đặc thù riêng',
      'Bắt buộc phải nhân bản và sao chép lặp lại trong tất cả các quan hệ Con (Subtype)',
      'Tách riêng thành một bảng trung gian độc lập lưu toàn bộ các thông tin tổng quát',
      'Không lưu trong CSDL mà chỉ được tính toán hiển thị tạm thời trên giao diện web'
    ],
    answer: 0,
    explanation: 'Giáo trình mục III.6.a: Thuộc tính của thực thể cha trở thành thuộc tính của quan hệ cha. Thuộc tính riêng của thực thể con trở thành thuộc tính của quan hệ con tương ứng. Tránh dư thừa dữ liệu.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhân bản các thuộc tính chung vào từng bảng con (gây dư thừa dữ liệu nghiêm trọng).',
      trickWord: 'Bẫy phân bổ thuộc tính Supertype/Subtype: Chung ở CHA, Riêng ở CON',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục III.6.a',
      tip: 'Thuộc tính chung nằm ở BẢNG CHA; Thuộc tính riêng nằm ở BẢNG CON!'
    }
  },
  {
    id: 'db-c2-t2-039',
    question: 'Bẫy sai lầm kinh điển: Một lập trình viên chuyển đổi quan hệ 1:N giữa LOP (1) và SINHVIEN (N) bằng cách đặt MaSV (khóa của SINHVIEN) làm khóa ngoại trong bảng LOP. Hậu quả trực tiếp là gì?',
    options: [
      'Vi phạm tính nguyên tố của thuộc tính vì ô MaSV trong bảng LOP phải lưu danh sách mảng nhiều sinh viên',
      'Hệ quản trị CSDL tự động kích hoạt tiến trình xóa sạch dữ liệu sinh viên do vi phạm ràng buộc toàn vẹn',
      'Không gây ra bất kỳ tác hại nào vì khóa ngoại đặt ở bảng nào trong mối quan hệ 1:N cũng có tác dụng như nhau',
      'Làm cho toàn bộ bảng SINHVIEN tự động bị nhân đôi dung lượng lưu trữ vật lý trên hệ thống tập tin đĩa từ'
    ],
    answer: 0,
    explanation: 'Đặt ngược khóa ngoại về phía 1 (LOP): vì 1 lớp có nhiều sinh viên, cột MaSV trong LOP sẽ phải lưu một danh sách mảng các mã SV (vi phạm 1NF) hoặc phải nhân đôi dòng LOP cho mỗi sinh viên (dư thừa dữ liệu nghiêm trọng). Quy tắc bắt buộc: Khóa ngoại phải đặt ở phía N (SINHVIEN).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Học viên không hiểu sâu lý do vì sao 1:N phải đặt FK ở phía N mà không được đặt ở phía 1.',
      trickWord: 'Bẫy đặt ngược khóa ngoại trong quan hệ 1:N: Gây vi phạm tính nguyên tố 1NF',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục III.4.a',
      tip: 'Đặt FK ở phía 1 ➔ Cột FK bị đa trị (chứa danh sách) ➔ Vi phạm chuẩn 1NF ngay!'
    }
  },
  {
    id: 'db-c2-t2-040',
    question: 'Trong CSDL Quản lý bán hàng: Hoadon(SoHD, Ngaylap, Ngaygiao, Trigia, MaKH). Thuộc tính MaKH trong bảng Hoadon đóng vai trò kỹ thuật gì?',
    options: [
      'Là Khóa ngoại (Foreign Key) tham chiếu đến khóa chính MaKH của bảng Khach',
      'Là Khóa chính (Primary Key) xác định duy nhất từng hóa đơn bán lẻ trong CSDL',
      'Là Thuộc tính đa trị lưu trữ danh sách tất cả các khách hàng mua chung hóa đơn đó',
      'Là Thuộc tính dẫn xuất được tự động tính toán từ bảng chi tiết hóa đơn bán hàng'
    ],
    answer: 0,
    explanation: 'Giáo trình mục IV.1: MaKH trong bảng Hoadon là khóa ngoại tham chiếu đến khóa chính MaKH của bảng Khach (quan hệ 1:N: một khách hàng có nhiều hóa đơn).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm MaKH là khóa chính thứ hai của Hoadon.',
      trickWord: 'Bẫy xác định vai trò của MaKH trong bảng Hoadon: Là Khóa ngoại',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục IV.1',
      tip: 'MaKH trong Hoadon = KHÓA NGOẠI tham chiếu về bảng Khach!'
    }
  },
  {
    id: 'db-c2-t2-041',
    question: 'Trong CSDL Quản lý bán hàng, biểu thức ĐSQH nào sau đây tìm mã số, họ tên các khách hàng đã từng mua mặt hàng có mã số \'HG001\'?',
    options: [
      'π_(MaKH, Hoten) (σ_(MaHG = \'HG001\') (Khach * Hoadon * Chitiet_HD))',
      'σ_(MaKH, Hoten) (π_(MaHG = \'HG001\') (Khach * Hoadon * Chitiet_HD))',
      'π_(MaKH, Hoten) (Khach) ∩ π_(MaKH, Hoten) (Hoadon * Chitiet_HD)',
      'π_(MaKH, Hoten) (σ_(MaHG = \'HG001\') (Khach × Chitiet_HD))'
    ],
    answer: 0,
    explanation: 'Cần kết nối 3 bảng: Khach (chứa Hoten, MaKH), Hoadon (nối MaKH và SoHD), Chitiet_HD (nối SoHD và MaHG). Sau đó lọc MaHG = \'HG001\' bằng σ và chiếu lấy MaKH, Hoten bằng π.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay bỏ quên bảng trung gian Hoadon và cố gắng nối trực tiếp Khach với Chitiet_HD.',
      trickWord: 'Bẫy đường dẫn kết nối chuỗi 3 bảng: Khach ➔ Hoadon ➔ Chitiet_HD',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục IV.1 & IV.2',
      tip: 'Khách không có MaHG ➔ Phải đi qua Hoadon: Khach * Hoadon * Chitiet_HD!'
    }
  },
  {
    id: 'db-c2-t2-042',
    question: 'Theo Bước 2, điều kiện bắt buộc nào sau đây được áp dụng cho khóa ngoại tham chiếu đến thực thể mạnh trong quan hệ thực thể yếu?',
    options: [
      'Khóa ngoại tham chiếu đến thực thể mạnh tuyệt đối KHÔNG ĐƯỢC PHÉP NULL',
      'Khóa ngoại tham chiếu đến thực thể mạnh bắt buộc phải luôn luôn mang giá trị NULL',
      'Khóa ngoại tham chiếu đến thực thể mạnh phải có kiểu dữ liệu chuỗi ký tự tự do',
      'Khóa ngoại tham chiếu đến thực thể mạnh có thể tự động thay đổi giá trị ngẫu nhiên'
    ],
    answer: 0,
    explanation: 'Giáo trình mục III.3.a lưu ý rõ: Khóa ngoại tham chiếu đến thực thể mạnh KHÔNG ĐƯỢC NULL. Vì thực thể yếu tồn tại phụ thuộc vào thực thể mạnh, nếu khóa ngoại này rỗng thì sự tồn tại của thực thể yếu mất căn cứ.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh nhớ mang máng "khóa ngoại được phép NULL" mà quên ngoại lệ bắt buộc của Thực thể yếu.',
      trickWord: 'Bẫy ngoại lệ khóa ngoại: Khóa ngoại trong Thực thể yếu BẮT BUỘC NOT NULL',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục III.3.a',
      tip: 'Thực thể yếu: Khóa ngoại trỏ về thực thể mạnh BẮT BUỘC NOT NULL!'
    }
  },
  {
    id: 'db-c2-t2-043',
    question: 'Trong CSDL Quản lý bán hàng, để tìm các mặt hàng CHƯA TỪNG ĐƯỢC BÁN trong bất kỳ hóa đơn nào, biểu thức ĐSQH chuẩn mực là gì?',
    options: [
      'π_(MaHG, TenHG) (Hanghoa) − π_(MaHG, TenHG) (Hanghoa * Chitiet_HD)',
      'π_(MaHG, TenHG) (Hanghoa) ∩ π_(MaHG, TenHG) (Hanghoa * Chitiet_HD)',
      'π_(MaHG, TenHG) (Hanghoa) ∪ π_(MaHG, TenHG) (Hanghoa * Chitiet_HD)',
      'π_(MaHG, TenHG) (σ_(Soluong = 0) (Hanghoa * Chitiet_HD))'
    ],
    answer: 0,
    explanation: 'Tìm các mặt hàng CHƯA TỪNG ĐƯỢC BÁN (phủ định) đòi hỏi dùng Phép Hiệu (−): Lấy tất cả mặt hàng trừ đi các mặt hàng đã có trong chi tiết hóa đơn (Chitiet_HD).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay tìm dòng có `Soluong = 0` (hàng chưa bán thì không hề có dòng trong Chitiet_HD).',
      trickWord: 'Bẫy Anti-Join bài toán kinh điển: Mặt hàng chưa từng bán = Tất cả − Đã bán',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục IV.2',
      tip: 'Mặt hàng chưa từng bán = Hanghoa − (Hanghoa * Chitiet_HD)!'
    }
  },
  {
    id: 'db-c2-t2-044',
    question: 'Quy trình 7 bước chuyển đổi ERD sang quan hệ thuộc giai đoạn nào trong vòng đời thiết kế cơ sở dữ liệu?',
    options: [
      'Giai đoạn Thiết kế dữ liệu logic (chuyển đổi từ mô hình quan niệm sang mô hình quan hệ)',
      'Giai đoạn Thiết kế dữ liệu vật lý (tạo tệp tin cấu hình và phân chia vùng đĩa cứng)',
      'Giai đoạn Phân tích yêu cầu nghiệp vụ (thu thập biểu mẫu và phỏng vấn người dùng)',
      'Giai đoạn Bảo trì và vận hành hệ thống (sao lưu dữ liệu và kiểm tra tường lửa)'
    ],
    answer: 0,
    explanation: 'Giáo trình mục III.1 (Tổng quan): Chuyển đổi ERD sang các quan hệ là quá trình THIẾT KẾ DỮ LIỆU LOGIC: từ sơ đồ ERD (mức quan niệm/khái niệm) chuyển thành các quan hệ ở mức logic để cài đặt vào RDBMS.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm chuyển đổi ERD sang quan hệ là thiết kế vật lý hoặc mức quan niệm.',
      trickWord: 'Bẫy giai đoạn thiết kế: Chuyển đổi ERD sang Relations = THIẾT KẾ LOGIC',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục III.1',
      tip: 'ERD (Quan niệm) ➔ Quan hệ (LOGIC) ➔ Bảng đĩa cứng (VẬT LÝ)!'
    }
  },
  {
    id: 'db-c2-t2-045',
    question: 'Trong quan hệ 1:1 giữa PHONG_BAN và NHAN_VIEN (mối quan hệ "Trưởng phòng": Mỗi phòng có 1 trưởng phòng, mỗi nhân viên làm trưởng phòng tối đa 1 phòng). Phía nào là phía BẮT BUỘC và phía nào là TÙY CHỌN?',
    options: [
      'PHONG_BAN là phía bắt buộc (vì phòng nào cũng phải có trưởng phòng), NHAN_VIEN là phía tùy chọn',
      'NHAN_VIEN là phía bắt buộc (vì nhân viên nào cũng làm trưởng phòng), PHONG_BAN là phía tùy chọn',
      'Cả hai phía PHONG_BAN và NHAN_VIEN đều hoàn toàn bắt buộc trong mọi doanh nghiệp',
      'Cả hai phía PHONG_BAN và NHAN_VIEN đều hoàn toàn tùy chọn và không có quy tắc ràng buộc'
    ],
    answer: 0,
    explanation: 'Mỗi phòng ban bắt buộc phải có 1 trưởng phòng ➔ PHONG_BAN là phía BẮT BUỘC. Không phải nhân viên nào cũng làm trưởng phòng (chỉ một số ít làm) ➔ NHAN_VIEN là phía TÙY CHỌN. Do đó khóa ngoại TruongPhong_ID sẽ được đặt trong bảng PHONG_BAN.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay xác định ngược phía bắt buộc và phía tùy chọn, dẫn đến đặt khóa ngoại sai bảng.',
      trickWord: 'Bẫy xác định phía Bắt buộc vs Tùy chọn trong quan hệ 1:1',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục III.4.a',
      tip: 'Phòng phải có trưởng phòng ➔ BẮT BUỘC; Nhân viên không nhất thiết làm sếp ➔ TÙY CHỌN!'
    }
  },
  {
    id: 'db-c2-t2-046',
    question: 'Cho CSDL Quản lý bán hàng: Yêu cầu \"Tìm khách hàng mua TẤT CẢ các mặt hàng hiện có trong kho\". Phép toán ĐSQH nào bắt buộc phải xuất hiện trong lời giải?',
    options: [
      'Phép chia đại số quan hệ (÷) giữa bảng các mặt hàng đã mua với bảng tất cả mặt hàng',
      'Phép tích Descartes (×) nhân đôi bảng khách hàng với bảng chi tiết hóa đơn',
      'Phép kết nối ngoài bên trái (Left Outer Join) giữa bảng khách hàng và bảng hàng hóa',
      'Phép hợp (∪) của tất cả các hóa đơn bán buôn và hóa đơn bán lẻ của công ty'
    ],
    answer: 0,
    explanation: 'Yêu cầu tìm khách hàng mua "TẤT CẢ các mặt hàng" là bài toán phổ quát ứng với lượng từ ∀. Bắt buộc phải sử dụng Phép Chia (÷): Chiếu các cặp (MaKH, MaHG) đã mua chia cho tập tất cả MaHG: `π_(MaKH, MaHG)(Hoadon * Chitiet_HD) ÷ π_(MaHG)(Hanghoa)`.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm sang phép kết nối Join hoặc Group By/Count.',
      trickWord: 'Bẫy bài toán chia trong CSDL Bán hàng: Mua TẤT CẢ mặt hàng = Phép Chia (÷)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.5.b & IV.2',
      tip: 'Mua TẤT CẢ mặt hàng ➔ Bắt buộc dùng PHÉP CHIA (÷)!'
    }
  },
  {
    id: 'db-c2-t2-047',
    question: 'Theo Bước 4, khi một Thực thể kết hợp CÓ danh hiệu riêng (ví dụ: SHIPMENT có mã `Shipment_No`), khóa chính của quan hệ kết hợp SHIPMENT sẽ là gì?',
    options: [
      'Khóa chính là danh hiệu riêng Shipment_No của chính thực thể kết hợp đó',
      'Bắt buộc phải là tổ hợp của hai khóa ngoại Customer_ID và Vendor_ID',
      'Khóa chính bắt buộc phải là ngày giao hàng kết hợp với số tiền vận chuyển',
      'Thực thể kết hợp không được phép có khóa chính mà chỉ có các khóa ngoại'
    ],
    answer: 0,
    explanation: 'Giáo trình mục III.3.b (Bước 4, phần 2): Khi thực thể kết hợp CÓ DANH HIỆU RIÊNG (Has its own identifier) ➔ Khóa chính là danh hiệu riêng của thực thể kết hợp đó (ví dụ: Shipment_No là PK; Customer_ID và Vendor_ID là các FK).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh mặc định thực thể kết hợp lúc nào cũng phải có khóa chính là tổ hợp 2 khóa ngoại.',
      trickWord: 'Bẫy phân nhánh Bước 4: Có danh hiệu riêng ➔ Khóa chính là danh hiệu riêng đó',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục III.3.b',
      tip: 'Có mã riêng (Shipment_No) ➔ Mã riêng đó làm KHÓA CHÍNH!'
    }
  },
  {
    id: 'db-c2-t2-048',
    question: 'Cho các nhận định về quy trình 7 bước chuyển đổi ERD:\n(I) Thuộc tính đa trị tách thành quan hệ riêng có khóa ngoại.\n(II) Quan hệ 1:N đặt khóa ngoại ở bảng phía Một.\n(III) Quan hệ cha/con tạo quan hệ cho cả thực thể cha và thực thể con.\nTổ hợp ĐÚNG là:',
    options: [
      'Nhận định (I) và (III) hoàn toàn đúng, nhận định (II) hoàn toàn sai lệch',
      'Cả ba nhận định (I), (II) và (III) đều hoàn toàn chính xác giáo trình',
      'Chỉ có duy nhất nhận định (I) là đúng, nhận định (II) và (III) là sai sót',
      'Nhận định (II) và (III) hoàn toàn đúng, nhận định (I) hoàn toàn sai lệch'
    ],
    answer: 0,
    explanation: '(II) sai vì quan hệ 1:N bắt buộc phải đặt khóa ngoại ở bảng phía NHIỀU (N), tuyệt đối không đặt ở phía Một. (I) và (III) hoàn toàn đúng.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh đọc lướt nhận định (II) thấy từ "khóa ngoại" là tưởng đúng.',
      trickWord: 'Bẫy vị trí đặt khóa ngoại 1:N: Đặt ở phía 1 là SAI HOÀN TOÀN',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục III.4.a',
      tip: 'Khóa ngoại 1:N đặt ở phía NHIỀU; Đặt ở phía 1 là SAI!'
    }
  },
  {
    id: 'db-c2-t2-049',
    question: 'Trong CSDL Quản lý bán hàng: Khach(MaKH, Hoten, Diachi, Daily). Ý nghĩa quy ước của giá trị thuộc tính Daily là gì?',
    options: [
      'Daily = 1 là khách hàng mua dạng đại lý; Daily = 0 là khách mua bán lẻ',
      'Daily = 1 là khách hàng mua trả góp; Daily = 0 là khách thanh toán tiền mặt',
      'Daily = 1 là khách hàng thân thiết VIP; Daily = 0 là khách hàng vãng lai',
      'Daily = 1 là khách hàng nội thành; Daily = 0 là khách hàng ở ngoại tỉnh'
    ],
    answer: 0,
    explanation: 'Giáo trình mục IV.1 ghi chú rõ ràng về thuộc tính bảng Khách: Khach(MaKH, Hoten, Diachi, Daily) -- Daily = 1: khách là đại lý; Daily = 0: khách mua bán lẻ.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm với khách VIP hay khách trả góp.',
      trickWord: 'Bẫy quy ước thuộc tính Daily: 1 = Đại lý, 0 = Bán lẻ',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục IV.1',
      tip: 'Daily: 1 = Đại lý; 0 = Bán lẻ!'
    }
  },
  {
    id: 'db-c2-t2-050',
    question: 'Tóm lược Chương II: Yếu tố nào sau đây là sự kết hợp chuẩn xác giữa mô hình toán học mức quan niệm với cỗ máy thực thi mức vật lý?',
    options: [
      'Lược đồ quan hệ (Relations) với các phép toán Đại số quan hệ và ràng buộc toàn vẹn',
      'Các bảng mạch tích hợp phần cứng và các đường truyền cáp quang tốc độ cao',
      'Các câu lệnh hợp ngữ Assembly can thiệp trực tiếp vào thanh ghi vi xử lý máy tính',
      'Các tệp tin nhị phân không có cấu trúc được lưu trữ rải rác trên các ổ đĩa mềm'
    ],
    answer: 0,
    explanation: 'Giáo trình mục V.1: Mô hình dữ liệu quan hệ kết hợp hoàn hảo giữa lý thuyết tập hợp toán học trừu tượng (LĐQH, ĐSQH, Ràng buộc toàn vẹn) với khả năng cài đặt tối ưu trên các hệ quản trị CSDL vật lý.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh bị phân tâm bởi các câu hỏi về phần cứng hoặc tệp tin cũ.',
      trickWord: 'Bẫy triết lý tổng kết Chương II: Lược đồ quan hệ + ĐSQH + Ràng buộc toàn vẹn',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục V.1',
      tip: 'Chương II = Nền tảng toán học: Lược đồ quan hệ + Đại số quan hệ + Ràng buộc toàn vẹn!'
    }
  }
];

// Hàm kiểm tra độ lệch chiều dài giữa các options
function checkOptionLengths(questions) {
  questions.forEach((q, idx) => {
    let lengths = q.options.map(o => o.length);
    let minL = Math.min(...lengths);
    let maxL = Math.max(...lengths);
    let delta = maxL - minL;
    if (delta > 15) {
      console.warn(`[T2 Q${idx + 1}] Delta L = ${delta} > 15 chars: [${lengths.join(', ')}]`);
    }
  });
}

checkOptionLengths(rawQuestionsTrick2);

export function getBalancedTrick2() {
  const balanced = JSON.parse(JSON.stringify(rawQuestionsTrick2));
  balanced.forEach((q, idx) => {
    const targetAns = targetAnswers2[idx];
    const currAns = q.answer;
    if (currAns !== targetAns) {
      const temp = q.options[targetAns];
      q.options[targetAns] = q.options[currAns];
      q.options[currAns] = temp;
      q.answer = targetAns;
    }
  });
  return balanced;
}

export const questionsTrick2 = getBalancedTrick2();
