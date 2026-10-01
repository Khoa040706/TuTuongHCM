import fs from 'fs';

// ĐỀ 1: 40 CÂU HỎI HỆ CƠ SỞ DỮ LIỆU - CHƯƠNG II (db-c2-d1-001 đến db-c2-d1-040)
// Tỷ lệ độ khó: 12 Dễ (30%), 16 Trung bình (40%), 12 Khó (30%)
// Phân bổ đáp án ban đầu: Sẽ được rebalanceSet chuẩn hóa chính xác 10 A, 10 B, 10 C, 10 D
export const questionsDbCh2Part1 = [
  // --- CHUYÊN ĐỀ 1: ĐỊNH NGHĨA CƠ BẢN & HỌ NHÀ KHÓA (Câu 1 - 10) ---
  {
    id: 'db-c2-d1-001',
    question: 'Mô hình cơ sở dữ liệu quan hệ (Relational Data Model) được nhà khoa học E.F. Codd đề xuất vào năm nào?',
    options: [
      'Được đề xuất vào giai đoạn những năm 1970 - 1971',
      'Được đề xuất vào giai đoạn những năm 1950 - 1951',
      'Được đề xuất vào giai đoạn những năm 1995 - 1996',
      'Được đề xuất vào giai đoạn những năm 2010 - 2011'
    ],
    answer: 0,
    explanation: 'Giáo trình khẳng định rõ: Mô hình CSDL quan hệ (gọi tắt là mô hình quan hệ) do E.F. Codd đề xuất vào năm 1970/1971.',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d1-002',
    question: 'Mô hình dữ liệu quan hệ hoàn chỉnh theo E.F. Codd bao gồm 3 thành phần cốt lõi nào dưới đây?',
    options: [
      'Hệ thống ký hiệu, Tập hợp phép toán và Ràng buộc toàn vẹn',
      'Hệ điều hành máy chủ, Bộ nhớ đệm RAM và Ổ cứng lưu trữ SSD',
      'Màn hình hiển thị màu, Chuột máy tính quang và Bàn phím cơ',
      'Cáp mạng Internet quang, Trình duyệt web và Cổng thanh toán'
    ],
    answer: 0,
    explanation: 'Mô hình quan hệ gồm 3 thành phần: 1) Hệ thống các ký hiệu mô tả dữ liệu; 2) Tập hợp các phép toán trên dữ liệu; 3) Ràng buộc toàn vẹn quan hệ.',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d1-003',
    question: 'Quy tắc bắt buộc nào sau đây áp dụng cho các thuộc tính (Attributes) trong cùng một quan hệ?',
    options: [
      'Trong cùng một quan hệ, không được phép có hai thuộc tính cùng tên',
      'Tất cả các thuộc tính bắt buộc phải có cùng một kiểu dữ liệu số nguyên',
      'Mỗi quan hệ chỉ được phép chứa tối đa năm thuộc tính khác nhau mà thôi',
      'Tên của các thuộc tính bắt buộc phải viết hoàn toàn bằng tiếng Latinh cổ'
    ],
    answer: 0,
    explanation: 'Lưu ý quan trọng trong giáo trình: Được phân biệt bằng tên gọi. Trong cùng một quan hệ (đối tượng), không được có 2 thuộc tính cùng tên.',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d1-004',
    question: 'Điền vào chỗ trống: \"Siêu khóa (Super Key) của một lược đồ quan hệ R là tập hợp thuộc tính có tính chất xác định ...(1)... trong mỗi thể hiện của R, và tập U chứa tất cả thuộc tính luôn là một ...(2)... của R.\"',
    options: [
      'duy nhất một bộ / siêu khóa',
      'nhiều bộ trùng nhau / khóa ngoại',
      'giá trị rỗng bất kỳ / khóa chính',
      'mọi bảng liên quan / thuộc tính'
    ],
    answer: 0,
    explanation: 'Siêu khóa là tập hợp thuộc tính xác định duy nhất một bộ trong mỗi thể hiện. Tập U gồm tất cả các thuộc tính của quan hệ luôn là một siêu khóa.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d1-005',
    question: 'Nhận định nào sau đây là ĐÚNG NHẤT khi phân biệt giữa Siêu khóa (Super Key) và Khóa tối thiểu (Key)?',
    options: [
      'Khóa tối thiểu là siêu khóa mà mọi tập con thực sự của nó không là siêu khóa',
      'Siêu khóa luôn có số lượng thuộc tính ít hơn số lượng thuộc tính của khóa',
      'Một quan hệ chỉ có tối đa một siêu khóa nhưng có thể có rất nhiều khóa',
      'Khóa tối thiểu bắt buộc phải chứa toàn bộ tất cả các thuộc tính của bảng'
    ],
    answer: 0,
    explanation: 'Khóa của LĐQH là một siêu khóa sao cho mọi tập con thực sự của nó không là siêu khóa (tức là siêu khóa tối thiểu hay tối tiểu).',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d1-006',
    question: 'Phát biểu nào sau đây là SAI khi nói về các lưu ý theo lý thuyết tập hợp của một quan hệ (Relation)?',
    options: [
      'Thứ tự sắp xếp của các dòng hoặc các cột trong quan hệ là vô cùng quan trọng',
      'Thêm vào một dòng hoàn toàn giống với dòng đã có thì quan hệ không thay đổi',
      'Một quan hệ r trên lược đồ R là một tập con của tích Descartes các miền giá trị',
      'Mỗi dòng trong bảng quan hệ chứa thông tin về một đối tượng, gọi là một bộ'
    ],
    answer: 0,
    explanation: 'Khẳng định SAI là phương án A, vì theo lý thuyết tập hợp: Thứ tự của các dòng (cột) KHÔNG quan trọng.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d1-007',
    question: 'Thuộc tính khóa (Prime Attribute) trong lược đồ quan hệ được định nghĩa chính xác là gì?',
    options: [
      'Là thuộc tính có tham gia vào ít nhất một khóa bất kỳ của quan hệ',
      'Là thuộc tính bắt buộc phải có kiểu dữ liệu là chuỗi ký tự tự do',
      'Là thuộc tính không bao giờ được phép xuất hiện trong câu truy vấn',
      'Là thuộc tính chỉ xuất hiện duy nhất ở các bảng phụ của hệ thống'
    ],
    answer: 0,
    explanation: 'Giáo trình định nghĩa: Thuộc tính khóa (Prime Attribute) là thuộc tính có tham gia vào một khóa bất kỳ (khóa dự tuyển hay khóa chính).',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d1-008',
    question: 'Cho các mệnh đề sau về Lược đồ CSDL và Thể hiện CSDL:\n(I) Lược đồ CSDL là toàn bộ bản mô tả cấu trúc của CSDL.\n(II) Toàn bộ dữ liệu lưu trữ tại một thời điểm nhất định là một thể hiện của CSDL.\n(III) Nhiều thể hiện của CSDL có thể cùng tương ứng với một lược đồ CSDL duy nhất.\nSố lượng mệnh đề ĐÚNG là:',
    options: [
      'Cả 3 mệnh đề (I), (II) và (III) đều hoàn toàn chính xác',
      'Chỉ có duy nhất 1 mệnh đề đúng là mệnh đề số (I)',
      'Chỉ có 2 mệnh đề đúng là mệnh đề số (I) và số (II)',
      'Không có mệnh đề nào đúng trong cả ba mệnh đề trên'
    ],
    answer: 0,
    explanation: 'Cả 3 mệnh đề đều đúng chuẩn giáo trình: Lược đồ mô tả cấu trúc; Thể hiện là dữ liệu tại một thời điểm; Cùng một lược đồ có thể có nhiều thể hiện khác nhau qua thời gian.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm lẫn giữa Lược đồ (tĩnh) và Thể hiện (động thay đổi theo thời gian).',
      trickWord: 'Bẫy phân biệt Schema (Lược đồ) và Instance (Thể hiện) qua chùm mệnh đề',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.5',
      tip: 'Lược đồ = Khung nhà (Cố định); Thể hiện = Đồ đạc trong nhà tại thời điểm t (Thay đổi liên tục).'
    }
  },
  {
    id: 'db-c2-d1-009',
    question: 'Cho quan hệ r gồm 5 thuộc tính U = {A, B, C, D, E}. Biết K = {A, B} là một khóa của r. Tập thuộc tính nào sau đây CHẮC CHẮN là một siêu khóa của r?',
    options: [
      'Tập thuộc tính {A, B, C} vì nó là tập cha chứa khóa {A, B}',
      'Tập thuộc tính {B, C, D} vì nó chứa tới ba thuộc tính khác',
      'Tập thuộc tính {A} vì nó là thuộc tính đứng đầu trong bảng',
      'Tập thuộc tính {C, D, E} vì nó tập hợp các thuộc tính phía sau'
    ],
    answer: 0,
    explanation: 'Theo tính chất của siêu khóa: Mọi tập con của U chứa một khóa (hoặc chứa một siêu khóa) đều là một siêu khóa. Vì {A, B} là khóa nên mọi tập chứa {A, B} như {A, B, C} đều là siêu khóa.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Nhiều người chọn {A} vì nghĩ rút gọn khóa, hoặc chọn {B,C,D} vì có nhiều thuộc tính hơn.',
      trickWord: 'Bẫy tính chất tập cha của siêu khóa (Super Key expansion property)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.4.a',
      tip: 'Khóa K ⊆ SK ⊆ U ➔ Cứ tập nào CHỨA TRỌN VẸN khóa K thì tập đó CHẮC CHẮN là Siêu khóa.'
    }
  },
  {
    id: 'db-c2-d1-010',
    question: 'Tình huống: Khi cài đặt cấu trúc lưu trữ của quan hệ NHANVIEN ở Mức vật lý bằng ngôn ngữ C, thành phần nào dưới đây thể hiện mối liên kết giữa các bản ghi của tệp?',
    options: [
      'Một con trỏ kiểu cấu trúc struct NHANVIEN *next trỏ tới bản ghi kế tiếp',
      'Một mảng số nguyên một chiều gồm một triệu phần tử lưu số thứ tự',
      'Một chuỗi ký tự cố định chứa họ tên của người quản trị máy chủ CSDL',
      'Một biến logic boolean chỉ nhận giá trị đúng hoặc sai trong hàm main'
    ],
    answer: 0,
    explanation: 'Giáo trình đưa ra đoạn mã C minh họa mức vật lý: `struct NHANVIEN *next; // con trỏ đến bản ghi tiếp theo của tệp NHANVIEN` để tổ chức danh sách liên kết các bản ghi.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh ít chú ý ví dụ code C ở mức vật lý trong giáo trình nên dễ đoán mò sang mảng hoặc biến boolean.',
      trickWord: 'Bẫy cài đặt mức vật lý (Physical Schema) trong giáo trình bằng cấu trúc struct C',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.5.b',
      tip: 'Mức vật lý struct C = Con trỏ `*next` dùng để liên kết tệp bản ghi trên thiết bị đĩa.'
    }
  },

  // --- CHUYÊN ĐỀ 2: ĐẠI SỐ QUAN HỆ CƠ BẢN & TẬP HỢP TƯƠNG THÍCH (Câu 11 - 20) ---
  {
    id: 'db-c2-d1-011',
    question: 'Ký hiệu toán học chuẩn mực của phép chọn (Selection) và phép chiếu (Projection) trong đại số quan hệ lần lượt là:',
    options: [
      'Ký hiệu σ (sigma) cho phép chọn và ký hiệu π (pi) cho phép chiếu',
      'Ký hiệu π (pi) cho phép chọn và ký hiệu σ (sigma) cho phép chiếu',
      'Ký hiệu ∪ (hợp) cho phép chọn và ký hiệu ∩ (giao) cho phép chiếu',
      'Ký hiệu ⋈ (join) cho phép chọn và ký hiệu × (nhân) cho phép chiếu'
    ],
    answer: 0,
    explanation: 'Trong ĐSQH: Phép chọn ký hiệu bằng chữ cái Hy Lạp σ (sigma); Phép chiếu ký hiệu bằng chữ cái Hy Lạp π (pi).',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d1-012',
    question: 'Điều kiện bắt buộc nào sau đây phải được thỏa mãn để thực hiện các phép toán Hợp (∪), Giao (∩) và Hiệu (−)?',
    options: [
      'Hai quan hệ tham gia bắt buộc phải tương thích (có cùng tập thuộc tính U)',
      'Hai quan hệ tham gia bắt buộc phải hoàn toàn rời nhau không có thuộc tính chung',
      'Số lượng các dòng trong hai quan hệ bắt buộc phải bằng nhau tuyệt đối',
      'Hai quan hệ bắt buộc phải do cùng một nhân viên tạo ra trong cùng một ngày'
    ],
    answer: 0,
    explanation: 'Các phép toán tập hợp Hợp (∪), Giao (∩), Hiệu (−) chỉ thực hiện được trên hai quan hệ tương thích với nhau (nghĩa là có cùng tập thuộc tính U1 = U2).',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d1-013',
    question: 'Thao tác tự động đặc trưng nào sau đây LUÔN LUÔN diễn ra khi thực hiện phép chiếu π_X(r) trên quan hệ r?',
    options: [
      'Tự động chọn bộ đại diện trong các bộ giống nhau (loại bỏ trùng lặp)',
      'Tự động xóa sạch toàn bộ các thuộc tính có trong tập thuộc tính X',
      'Tự động nhân đôi số lượng các bộ dữ liệu có trong kết quả trả về',
      'Tự động sắp xếp các dòng theo thứ tự bảng chữ cái tiếng Anh từ A-Z'
    ],
    answer: 0,
    explanation: 'Thực hiện phép chiếu gồm 2 thao tác: 1) Giữ lại các thuộc tính trong tập X; 2) Chọn bộ đại diện trong các bộ giống nhau (loại bỏ trùng lặp).',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d1-014',
    question: 'Điền vào chỗ trống: \"Kết quả của phép tích Descartes r × s trên hai quan hệ rời nhau R1(A1...An) và R2(B1...Bm) là một quan hệ gồm các ...(1)..., và số lượng bộ của r × s bằng ...(2)...\"',
    options: [
      '(n+m)-bộ / tích số bộ của r nhân với số bộ của s',
      '(n-m)-bộ / hiệu số bộ của r trừ cho số bộ của s',
      '(n×m)-bộ / tổng số bộ của r cộng với số bộ của s',
      'bộ đơn lẻ / giá trị lớn nhất giữa số bộ r và s'
    ],
    answer: 0,
    explanation: 'Kết quả của phép tích Descartes là quan hệ gồm các (n+m)-bộ, và số bộ của r × s bằng (số bộ của r) × (số bộ của s).',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d1-015',
    question: 'Phát biểu nào sau đây phản ánh ĐÚNG tính chất giao hoán của phép chọn (Selection) trong đại số quan hệ?',
    options: [
      'σ_C1(σ_C2(R)) = σ_C2(σ_C1(R)) với mọi biểu thức logic C1 và C2',
      'σ_C1(σ_C2(R)) = π_C1(π_C2(R)) với mọi biểu thức logic C1 và C2',
      'Các phép chọn không bao giờ có tính giao hoán trong mọi trường hợp',
      'Tính giao hoán chỉ xảy ra khi quan hệ R hoàn toàn không có dữ liệu'
    ],
    answer: 0,
    explanation: 'Giáo trình khẳng định: Các phép chọn có tính giao hoán: σ_C1(σ_C2(R)) = σ_C2(σ_C1(R)).',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d1-016',
    question: 'Cho hai quan hệ tương thích r và s. Biểu thức nào sau đây diễn tả ĐÚNG định nghĩa của phép hiệu (r − s)?',
    options: [
      'r − s = { t | t ∈ r ∧ t ∉ s } (thuộc r nhưng không thuộc s)',
      'r − s = { t | t ∈ r ∨ t ∈ s } (thuộc r hoặc thuộc về tập s)',
      'r − s = { t | t ∈ r ∧ t ∈ s } (đồng thời vừa thuộc r vừa thuộc s)',
      'r − s = { t | t ∉ r ∧ t ∉ s } (không thuộc r cũng không thuộc s)'
    ],
    answer: 0,
    explanation: 'Hiệu của hai quan hệ tương thích r, s là quan hệ gồm các bộ thuộc r nhưng không thuộc s: r − s = { t | t ∈ r ∧ t ∉ s }.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d1-017',
    question: 'Mục đích chính của việc sử dụng Phép đặt lại tên (Rename) trong đại số quan hệ là gì?',
    options: [
      'Đặt tên cho các quan hệ trung gian giúp biểu thức rõ ràng, dễ hiểu hơn',
      'Xóa bỏ vĩnh viễn tên của tác giả viết ra hệ quản trị cơ sở dữ liệu',
      'Tự động dịch tên các cột từ tiếng Việt sang tiếng Anh cho máy tính hiểu',
      'Thay đổi tên nhà cung cấp dịch vụ máy chủ đám mây đang lưu trữ CSDL'
    ],
    answer: 0,
    explanation: 'Để trả lời câu hỏi phức tạp cần tổ hợp nhiều phép toán, dùng phép đặt tên để đặt tên cho các quan hệ trung gian và thuộc tính, giúp biểu thức mạch lạc.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d1-018',
    question: 'Cho quan hệ R gồm 10 dòng và quan hệ S gồm 5 dòng. Biết R và S rời nhau. Hỏi phép tích Descartes R × S có bao nhiêu dòng và thuộc tính thế nào?',
    options: [
      'Có đúng 50 dòng và số thuộc tính bằng tổng số thuộc tính của R cộng với S',
      'Có đúng 15 dòng và số thuộc tính bằng số thuộc tính của R trừ thuộc tính S',
      'Có đúng 5 dòng và số thuộc tính bằng số thuộc tính lớn nhất giữa hai quan hệ',
      'Có đúng 2 dòng và số thuộc tính bằng tích số thuộc tính của hai quan hệ đó'
    ],
    answer: 0,
    explanation: 'Số dòng của R × S = 10 × 5 = 50 dòng. Số thuộc tính là n + m (tổng số thuộc tính của hai quan hệ).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm phép nhân tích Descartes với phép cộng số dòng (10 + 5 = 15).',
      trickWord: 'Bẫy số dòng và số thuộc tính của phép tích Descartes (Cartesian Product)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.4',
      tip: 'Tích Descartes R × S: Dòng = |R| × |S| (nhân); Cột = n + m (cộng).'
    }
  },
  {
    id: 'db-c2-d1-019',
    question: 'Biểu thức nào sau đây cho kết quả tương đương với phép giao r ∩ s khi chỉ sử dụng phép hiệu (−)?',
    options: [
      'r − (r − s) (lấy r trừ đi phần thuộc r nhưng không thuộc s)',
      '(r − s) − r (lấy hiệu của r và s trừ tiếp cho quan hệ ban đầu)',
      '(r ∪ s) − r (lấy hợp của hai quan hệ rồi trừ đi quan hệ đầu tiên)',
      'r − (s − r) (lấy r trừ đi phần thuộc s nhưng không thuộc về r)'
    ],
    answer: 0,
    explanation: 'Theo lý thuyết tập hợp: r ∩ s = r − (r − s). Vì (r − s) là phần chỉ thuộc r mà không thuộc s, khi lấy r trừ đi phần này sẽ thu được chính xác phần chung (giao).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Dễ nhầm với r − (s − r) hoặc (r ∪ s) − r.',
      trickWord: 'Bẫy biến đổi tương đương phép giao qua phép hiệu trong lý thuyết tập hợp',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.7 & II.8',
      tip: 'Công thức tập hợp kinh điển: r ∩ s = r − (r − s) = s − (s − r).'
    }
  },
  {
    id: 'db-c2-d1-020',
    question: 'Cho bảng SINHVIEN có 100 sinh viên, trong đó chỉ có 5 quê quán khác nhau. Hỏi kết quả của phép chiếu π_QueQuan(SINHVIEN) có bao nhiêu dòng?',
    options: [
      'Có đúng 5 dòng vì phép chiếu tự động khử các giá trị trùng lặp',
      'Có đúng 100 dòng vì phép chiếu luôn giữ nguyên số dòng của bảng',
      'Có đúng 20 dòng vì lấy 100 chia cho 5 ra số dòng trung bình',
      'Có đúng 0 dòng vì quê quán không phải là thuộc tính khóa chính'
    ],
    answer: 0,
    explanation: 'Phép chiếu toán học luôn tự động loại bỏ các bộ trùng lặp để chọn bộ đại diện. Vì chỉ có 5 quê quán khác nhau nên kết quả chiếu chỉ có đúng 5 dòng.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay quen với lệnh SELECT QueQuan trong SQL (mặc định không khử trùng lặp nếu thiếu DISTINCT) nên chọn 100 dòng.',
      trickWord: 'Bẫy khử trùng lặp bắt buộc của phép chiếu trong Đại số quan hệ toán học',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.3',
      tip: 'Đại số quan hệ toán học: Phép chiếu π LUÔN LUÔN khử trùng lặp (khác với SQL SELECT thuần túy).'
    }
  },

  // --- CHUYÊN ĐỀ 3: PHÉP JOIN, PHÉP CHIA & BÀI TẬP CSDL (Câu 21 - 30) ---
  {
    id: 'db-c2-d1-021',
    question: 'Phép kết nối tự nhiên (Natural Join — ký hiệu * hoặc ⋈) giữa hai quan hệ có đặc điểm nào dưới đây?',
    options: [
      'Kết nối bằng tại thuộc tính trùng tên và loại bỏ một thuộc tính trùng',
      'Tự động cộng giá trị số của tất cả các cột có cùng tên lại với nhau',
      'Chỉ kết nối được nếu hai quan hệ hoàn toàn không có thuộc tính chung',
      'Bắt buộc người dùng phải chỉ định rõ tên của khóa chính trong câu lệnh'
    ],
    answer: 0,
    explanation: 'Kết nối tự nhiên thực hiện kết nối bằng tại các thuộc tính trùng tên của 2 quan hệ, đồng thời loại bỏ một trong hai thuộc tính trùng tên khỏi kết quả để tránh dư thừa.',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d1-022',
    question: 'Trong đại số quan hệ, phép toán nào chuyên dùng để giải quyết các câu hỏi mang ý nghĩa \"VỚI MỌI\" (∀) hoặc \"TẤT CẢ\"?',
    options: [
      'Phép chia (Division — ký hiệu ÷) trong đại số quan hệ',
      'Phép chiếu (Projection — ký hiệu π) trên tập thuộc tính',
      'Phép chọn (Selection — ký hiệu σ) với điều kiện logic',
      'Phép tích Descartes (Cartesian Product — ký hiệu ×)'
    ],
    answer: 0,
    explanation: 'Ý nghĩa nghiệp vụ của phép chia (÷): Là công cụ toán học tương ứng với lượng từ phổ quát \"VỚI MỌI\" (∀), chuyên dùng để giải các bài toán mang ý nghĩa \"TẤT CẢ\".',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d1-023',
    question: 'Khi kết nối hai quan hệ r(A, B, C) và s(C, D) bằng phép kết nối tự nhiên r * s, lược đồ quan hệ kết quả gồm các thuộc tính nào?',
    options: [
      'Lược đồ kết quả gồm 4 thuộc tính là (A, B, C, D) không bị lặp lại',
      'Lược đồ kết quả gồm 5 thuộc tính là (A, B, C, C, D) có hai cột C',
      'Lược đồ kết quả chỉ gồm duy nhất một thuộc tính chung là (C)',
      'Lược đồ kết quả gồm 3 thuộc tính là (A, B, D) đã bị xóa cột C'
    ],
    answer: 0,
    explanation: 'Phép kết nối tự nhiên loại bỏ một trong hai thuộc tính trùng tên (C), do đó lược đồ kết quả có 4 thuộc tính: (A, B, C, D).',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d1-024',
    question: 'Cho CSDL Quản lý bán hàng: Hanghoa(MaHG, TenHG, DVT, Dongia, Cohang). Biểu thức nào sau đây tìm các mặt hàng đang HẾT HÀNG (Cohang = 0)?',
    options: [
      'σ_(Cohang = 0)(Hanghoa) (dùng phép chọn với điều kiện Cohang = 0)',
      'π_(Cohang = 0)(Hanghoa) (dùng phép chiếu với biểu thức logic bằng 0)',
      'Hanghoa ÷ σ_(Cohang = 0)(Hanghoa) (dùng phép chia đại số quan hệ)',
      'Hanghoa × σ_(Cohang = 0)(Hanghoa) (dùng phép tích Descartes hai bảng)'
    ],
    answer: 0,
    explanation: 'Để lọc các dòng thỏa mãn điều kiện Cohang = 0, ta sử dụng phép chọn: σ_(Cohang = 0)(Hanghoa).',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d1-025',
    question: 'Phát biểu nào sau đây là ĐÚNG khi nói về phép kết nối điều kiện (θ-Join)?',
    options: [
      'Là phép tích Descartes kèm theo phép chọn theo điều kiện so sánh θ',
      'Bắt buộc toán tử so sánh θ phải luôn luôn là phép so sánh lớn hơn',
      'Chỉ thực hiện được khi hai quan hệ có cùng số lượng dòng bằng nhau',
      'Kết quả luôn luôn có số dòng nhiều hơn phép tích Descartes của hai bảng'
    ],
    answer: 0,
    explanation: 'Bản chất của θ-Join: r ⋈_θ s chính là thực hiện phép tích Descartes r × s rồi chọn lại các bộ thỏa điều kiện so sánh θ: σ_θ(r × s).',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d1-026',
    question: 'Cho CSDL Bán hàng gồm Khach(MaKH, Hoten...) và Hoadon(SoHD, Ngaylap, MaKH...). Biểu thức nào in ra danh sách khách hàng ĐÃ TỪNG mua ít nhất một hóa đơn?',
    options: [
      'π_(MaKH, Hoten)(Khach * Hoadon) (kết nối tự nhiên giữa Khach và Hoadon)',
      'Khach − Hoadon (lấy quan hệ Khach trừ đi toàn bộ quan hệ Hoadon)',
      'Khach ÷ π_(MaKH)(Hoadon) (lấy quan hệ Khach chia cho mã khách hàng)',
      'π_(MaKH, Hoten)(Khach) × Hoadon (nhân tích Descartes Khach với Hoadon)'
    ],
    answer: 0,
    explanation: 'Kết nối tự nhiên Khach * Hoadon sẽ giữ lại những khách hàng có MaKH xuất hiện trong bảng Hoadon (đã từng mua hàng), sau đó chiếu lấy MaKH, Hoten.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d1-027',
    question: 'Điền vào chỗ trống: \"Phép chia r ÷ s với r trên lược đồ R(A1...An) và s trên lược đồ con S(B1...Bm) sẽ cho kết quả là một quan hệ trên lược đồ ...(1)... gồm các ...(2)...\"',
    options: [
      'R − S / (n−m)-bộ ghép với mọi bộ của s đều thuộc về r',
      'R ∪ S / (n+m)-bộ xuất hiện ở cả hai quan hệ r và s',
      'R ∩ S / m-bộ có giá trị lớn nhất trong quan hệ r',
      'R × S / n-bộ không có giá trị rỗng ở bất kỳ cột nào'
    ],
    answer: 0,
    explanation: 'Định nghĩa phép chia: r ÷ s là quan hệ trên lược đồ R − S gồm các (n−m)-bộ t sao cho với mọi bộ ts ∈ s thì bộ ghép (t, ts) đều thuộc r.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d1-028',
    question: 'Cho CSDL Bán hàng. Biểu thức ĐSQH nào dưới đây tìm danh sách Mã khách hàng (MaKH) CHƯA TỪNG mua bất kỳ một hóa đơn nào?',
    options: [
      'π_(MaKH)(Khach) − π_(MaKH)(Hoadon) (chiếu MaKH của Khach trừ MaKH Hoadon)',
      'π_(MaKH)(Khach) ∩ π_(MaKH)(Hoadon) (lấy phần giao giữa Khach và Hoadon)',
      'π_(MaKH)(Khach * Hoadon) (kết nối tự nhiên giữa hai bảng Khach và Hoadon)',
      'σ_(SoHD = NULL)(Khach * Hoadon) (chọn các dòng có số hóa đơn bị rỗng)'
    ],
    answer: 0,
    explanation: 'Để tìm đối tượng \"chưa từng / không\", ta lấy toàn bộ tập khách hàng trừ đi tập khách hàng đã mua (xuất hiện trong Hoadon): π_MaKH(Khach) − π_MaKH(Hoadon).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn cách Join rồi lọc IS NULL kiểu SQL, nhưng trong ĐSQH chuẩn phép hiệu (−) là công cụ toán học chuẩn xác nhất.',
      trickWord: 'Bẫy bài toán tìm đối tượng \"chưa từng / không bao giờ\" bằng phép hiệu ĐSQH',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.8 & IV.2',
      tip: 'Tìm đối tượng \"KHÔNG / CHƯA TỪNG\" ➔ Dùng PHÉP HIỆU: Tập_Tổng_Thể − Tập_Đã_Làm.'
    }
  },
  {
    id: 'db-c2-d1-029',
    question: 'Cho CSDL Sinh viên: SINHVIEN(MaSV, Hoten...), DETAI(MaDT, TenDT...), SV_DT(MaSV, MaDT, KQ...). Biểu thức nào tìm sinh viên đã thực hiện TẤT CẢ các đề tài?',
    options: [
      'π_(MaSV, MaDT)(SV_DT) ÷ π_(MaDT)(DETAI) (dùng phép chia ĐSQH)',
      'π_(MaSV, MaDT)(SV_DT) * π_(MaDT)(DETAI) (dùng kết nối tự nhiên)',
      'π_(MaSV, MaDT)(SV_DT) − π_(MaDT)(DETAI) (dùng phép trừ hai tập)',
      'π_(MaSV, MaDT)(SV_DT) ∪ π_(MaDT)(DETAI) (dùng phép hợp hai bảng)'
    ],
    answer: 0,
    explanation: 'Để tìm sinh viên thực hiện TẤT CẢ các đề tài, ta lấy quan hệ chiếu (MaSV, MaDT) của bảng thực hiện chia cho toàn bộ tập mã đề tài π_MaDT(DETAI).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Nhiều người nhầm với phép Natural Join hoặc phép Hợp.',
      trickWord: 'Bẫy ứng dụng phép chia (Division) giải bài toán lượng từ phổ quát \"TẤT CẢ\"',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.10',
      tip: 'Bài toán \"TẤT CẢ / VỚI MỌI\" ➔ Dùng PHÉP CHIA: Quan_hệ_thực_hiện ÷ Tập_tiêu_chí_toàn_bộ.'
    }
  },
  {
    id: 'db-c2-d1-030',
    question: 'Giả sử bảng r có 5 dòng và bảng s có 3 dòng. Điều kiện kết nối θ trong phép kết nối r ⋈_θ s không thỏa mãn với bất kỳ cặp bộ nào. Kết quả trả về là gì?',
    options: [
      'Một quan hệ rỗng ∅ không chứa bất kỳ dòng nào nhưng vẫn có lược đồ',
      'Một quan hệ chứa đúng 15 dòng dữ liệu của phép tích Descartes',
      'Hệ quản trị CSDL lập tức báo lỗi cú pháp và dừng hoạt động máy chủ',
      'Một quan hệ chứa đúng 8 dòng dữ liệu của phép hợp hai quan hệ'
    ],
    answer: 0,
    explanation: 'Khi không có cặp bộ nào thỏa mãn điều kiện kết nối θ, tập kết quả trả về là một quan hệ rỗng (r = ∅), cấu trúc lược đồ vẫn được giữ nguyên.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ máy chủ sẽ báo lỗi hoặc trả về tích Descartes đầy đủ.',
      trickWord: 'Bẫy kết quả quan hệ rỗng (Empty Relation) khi không có bộ nào khớp điều kiện Join',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.5',
      tip: 'Không có dòng nào thỏa điều kiện kết nối ➔ Kết quả là Quan hệ rỗng (r = ∅), không phải lỗi cú pháp.'
    }
  },

  // --- CHUYÊN ĐỀ 4: QUY TRÌNH 7 BƯỚC CHUYỂN ĐỔI ERD SANG QUAN HỆ (Câu 31 - 40) ---
  {
    id: 'db-c2-d1-031',
    question: 'Trong quy trình 7 bước chuyển đổi ERD sang quan hệ, Bước 1 quy định thuộc tính phức hợp (Composite attribute) được chuyển đổi như thế nào?',
    options: [
      'Chỉ lấy các thuộc tính đơn thành phần của nó, không lấy thuộc tính gộp',
      'Bắt buộc phải tách thành một bảng quan hệ riêng biệt có khóa ngoại',
      'Gộp tất cả lại thành một chuỗi ký tự duy nhất và mã hóa bảo mật',
      'Xóa bỏ hoàn toàn thuộc tính phức hợp vì mô hình quan hệ không hỗ trợ'
    ],
    answer: 0,
    explanation: 'Bước 1 quy định: Thuộc tính phức hợp (composite) chỉ lấy các thuộc tính đơn thành phần của nó (ví dụ: Địa chỉ gồm Đường, Quận, TP thì chỉ lấy Đường, Quận, TP).',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d1-032',
    question: 'Theo quy tắc chuyển đổi ERD sang quan hệ, thuộc tính đa trị (Multivalued attribute) của một thực thể được xử lý như thế nào?',
    options: [
      'Tách thành một quan hệ riêng, có khóa ngoại tham chiếu về khóa chính quan hệ gốc',
      'Lưu tất cả các giá trị vào một ô duy nhất ngăn cách nhau bằng dấu chấm phẩy',
      'Ép buộc người dùng chỉ được phép chọn duy nhất một giá trị đầu tiên nhập vào',
      'Tự động nhân bản thực thể ban đầu thành mười bản sao giống hệt nhau'
    ],
    answer: 0,
    explanation: 'Bước 1c: Thuộc tính đa trị được tách thành một quan hệ riêng, có khóa ngoại tham chiếu về khóa chính của quan hệ ban đầu (tạo quan hệ 1:N).',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d1-033',
    question: 'Khi chuyển đổi mối quan hệ một - nhiều (1:N) hai ngôi sang mô hình quan hệ, khóa ngoại được đặt ở đâu?',
    options: [
      'Khóa chính ở phía \"một\" (1) sẽ trở thành khóa ngoại ở quan hệ phía \"nhiều\" (N)',
      'Khóa chính ở phía \"nhiều\" (N) sẽ trở thành khóa ngoại ở quan hệ phía \"một\" (1)',
      'Bắt buộc phải tạo một quan hệ kết hợp mới ở giữa để chứa hai khóa ngoại',
      'Khóa ngoại được đặt ngẫu nhiên ở một trong hai bảng tùy ý người lập trình'
    ],
    answer: 0,
    explanation: 'Quy tắc Bước 3 cho quan hệ 1:N: Khóa chính ở phía \"một\" (1) trở thành khóa ngoại ở quan hệ phía \"nhiều\" (N).',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d1-034',
    question: 'Khóa chính của quan hệ được tạo từ một Thực thể yếu (Weak Entity) trong Bước 2 bao gồm những thành phần nào?',
    options: [
      'Khóa riêng phần của thực thể yếu kết hợp với khóa chính của thực thể mạnh',
      'Chỉ bao gồm duy nhất khóa riêng phần của chính bản thân thực thể yếu đó',
      'Một số nguyên ngẫu nhiên do hệ điều hành máy tính tự động cấp phát khi lưu',
      'Tập hợp tất cả các thuộc tính mô tả có trong thực thể yếu đó gộp chung lại'
    ],
    answer: 0,
    explanation: 'Bước 2 quy định: Khóa chính của quan hệ thực thể yếu gồm: Khóa riêng phần (partial key) + Khóa chính của quan hệ thực thể mạnh (khóa ngoại NOT NULL).',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d1-035',
    question: 'Khi chuyển đổi mối quan hệ nhiều - nhiều (M:N) hai ngôi sang mô hình quan hệ, phương án xử lý chuẩn mực là gì?',
    options: [
      'Tạo một quan hệ mới, khóa chính là tổ hợp khóa chính của hai thực thể tham gia',
      'Chọn một thực thể bất kỳ làm bảng chính và thêm khóa ngoại vào thực thể kia',
      'Xóa bỏ mối quan hệ nhiều-nhiều vì mô hình quan hệ cấm hoàn toàn quan hệ M:N',
      'Chuyển đổi thành hai mối quan hệ một - một độc lập không liên quan với nhau'
    ],
    answer: 0,
    explanation: 'Bước 3 cho quan hệ M:N: Tạo quan hệ mới, khóa chính là tổ hợp khóa chính của hai thực thể tham gia (đồng thời là khóa ngoại tương ứng đến từng thực thể).',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d1-036',
    question: 'Trong mối quan hệ một - một (1:1), vị trí đặt khóa ngoại và các thuộc tính riêng của mối quan hệ được quy định như thế nào?',
    options: [
      'Khóa chính ở phía bắt buộc làm khóa ngoại ở phía tùy chọn kèm thuộc tính riêng',
      'Khóa chính ở phía tùy chọn làm khóa ngoại ở phía bắt buộc kèm thuộc tính riêng',
      'Bắt buộc phải tạo thêm một bảng thứ ba ở giữa dù là quan hệ một - một',
      'Khóa ngoại được đặt ở cả hai bảng và trỏ chéo lẫn nhau để đảm bảo cân bằng'
    ],
    answer: 0,
    explanation: 'Quy tắc Bước 3 cho quan hệ 1:1: Khóa chính ở phía bắt buộc làm khóa ngoại ở phía tùy chọn. Tất cả thuộc tính của mối quan hệ đều được mang sang phía tùy chọn này.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d1-037',
    question: 'Điền vào chỗ trống: \"Đối với mối quan hệ ba ngôi (Ternary Relationship), quy tắc chuẩn sẽ tạo ra ...(1)... quan hệ, trong đó có một quan hệ kết hợp chứa các ...(2)... tham chiếu đến các thực thể tham gia.\"',
    options: [
      'n + 1 (4 quan hệ) / khóa ngoại',
      'duy nhất 1 / thuộc tính đơn',
      'n − 1 (2 quan hệ) / khóa chính',
      'vô số / trường dữ liệu rỗng'
    ],
    answer: 0,
    explanation: 'Bước 6: Quy tắc n + 1 quan hệ: Với quan hệ ba ngôi sẽ tạo ra 3 + 1 = 4 quan hệ (3 quan hệ cho 3 thực thể và 1 quan hệ kết hợp chứa các khóa ngoại).',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d1-038',
    question: 'Tình huống: Thực thể NHANVIEN có mối quan hệ một ngôi 1:N \"Quản lý\" (Một nhân viên quản lý nhiều nhân viên khác). Khi chuyển sang mô hình quan hệ sẽ xử lý như thế nào?',
    options: [
      'Tạo thêm một khóa ngoại đệ quy trong cùng bảng NHANVIEN tham chiếu về MaNV',
      'Bắt buộc phải tách thành hai bảng: NHANVIEN_SEP và NHANVIEN_NHANVIEN',
      'Hệ thống tự động xóa bỏ những nhân viên không có người quản lý trực tiếp',
      'Mô hình quan hệ từ chối hỗ trợ quan hệ một ngôi vì vi phạm lý thuyết tập hợp'
    ],
    answer: 0,
    explanation: 'Bước 5: Với quan hệ một ngôi 1:N đệ quy, ta tạo một khóa ngoại đệ quy (ví dụ Manager_ID) nằm ngay trong cùng quan hệ NHANVIEN tham chiếu về khóa chính Employee_ID.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ phải tách thành 2 bảng riêng biệt cho Sếp và Nhân viên.',
      trickWord: 'Bẫy chuyển đổi quan hệ một ngôi 1:N đệ quy (Recursive Foreign Key)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục III.5.a',
      tip: 'Quan hệ đệ quy 1:N = Thêm Khóa ngoại đệ quy (Recursive FK) trong CHÍNH BẢNG ĐÓ.'
    }
  },
  {
    id: 'db-c2-d1-039',
    question: 'Khi chuyển đổi mối quan hệ Cha/Con (Supertype/Subtype) như EMPLOYEE (cha) và HOURLY_EMPLOYEE (con), khóa chính của bảng con đóng vai trò gì?',
    options: [
      'Vừa là khóa chính của quan hệ con, vừa là khóa ngoại tham chiếu đến khóa cha',
      'Chỉ là một thuộc tính thông thường không có tính chất duy nhất của bảng con',
      'Là một khóa độc lập hoàn toàn không có mối liên hệ nào với quan hệ cha',
      'Bắt buộc phải do người dùng tự nhập một mã số ngẫu nhiên không trùng lặp'
    ],
    answer: 0,
    explanation: 'Bước 7: Khóa chính của quan hệ cha (Employee_Number) trở thành khóa chính đồng thời là khóa ngoại của các quan hệ con (H_Employee_Number), thiết lập quan hệ 1:1 giữa cha và con.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Nhiều người nghĩ bảng con phải tạo khóa chính riêng và thêm một cột khóa ngoại riêng biệt.',
      trickWord: 'Bẫy khóa chính kiêm khóa ngoại (PK is FK) trong mối quan hệ Supertype/Subtype',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục III.6.a',
      tip: 'Mô hình Cha/Con (Super/Subtype) = Khóa chính của bảng con VỪA LÀ PK VỪA LÀ FK trỏ về cha.'
    }
  },
  {
    id: 'db-c2-d1-040',
    question: 'Một thực thể kết hợp SHIPMENT giữa CUSTOMER và VENDOR có sẵn danh hiệu riêng là Shipment_No. Khóa chính của quan hệ SHIPMENT sau khi chuyển đổi sẽ là gì?',
    options: [
      'Khóa chính là danh hiệu riêng Shipment_No của chính thực thể kết hợp đó',
      'Khóa chính bắt buộc phải là tổ hợp hai khóa ngoại (Customer_ID, Vendor_ID)',
      'Khóa chính là tổ hợp của cả ba thuộc tính (Shipment_No, Customer_ID, Vendor_ID)',
      'Thực thể kết hợp có danh hiệu riêng thì không được phép có bất kỳ khóa ngoại nào'
    ],
    answer: 0,
    explanation: 'Bước 4b quy định: Nếu thực thể kết hợp có danh hiệu riêng (natural identifier) như Shipment_No, thì khóa chính là danh hiệu riêng đó. Customer_ID và Vendor_ID đóng vai trò là các khóa ngoại thông thường.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay áp dụng máy móc quy tắc M:N và chọn khóa chính tổ hợp 2 khóa ngoại.',
      trickWord: 'Bẫy thực thể kết hợp có danh hiệu riêng (Associative Entity with Natural Identifier)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục III.3.b',
      tip: 'Thực thể kết hợp CÓ danh hiệu riêng ➔ Khóa chính LÀ danh hiệu riêng đó (không ghép tổ hợp).'
    }
  }
];

// ĐỀ 2: 40 CÂU HỎI HỆ CƠ SỞ DỮ LIỆU - CHƯƠNG II (db-c2-d2-001 đến db-c2-d2-040)
// Tỷ lệ độ khó: 12 Dễ (30%), 16 Trung bình (40%), 12 Khó (30%)
// Phân bổ đáp án ban đầu: Sẽ được rebalanceSet chuẩn hóa chính xác 10 A, 10 B, 10 C, 10 D
export const questionsDbCh2Part2 = [
  // --- CHUYÊN ĐỀ 1: ĐỊNH NGHĨA CƠ BẢN & HỌ NHÀ KHÓA (Câu 1 - 10) ---
  {
    id: 'db-c2-d2-001',
    question: 'Tập hợp các giá trị hợp lệ mà một thuộc tính có thể nhận được trong cơ sở dữ liệu được gọi là gì?',
    options: [
      'Miền giá trị (Domain, ký hiệu là D hay dom) của thuộc tính đó',
      'Tập hợp các siêu khóa dự tuyển của toàn bộ hệ thống CSDL',
      'Lược đồ quan hệ con định nghĩa ở mức khung nhìn ngoài',
      'Tích Descartes của hai bảng không có thuộc tính chung'
    ],
    answer: 0,
    explanation: 'Miền giá trị (domain, ký hiệu D(A) hay dom(A)) là tập các giá trị hợp lệ mà thuộc tính A có thể nhận (ví dụ: điểm thi là số thực từ 0 đến 10).',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d2-002',
    question: 'Lược đồ quan hệ (Relation Schema, ký hiệu R(U)) được định nghĩa chuẩn xác theo giáo trình là gì?',
    options: [
      'Tập tất cả các thuộc tính cần quản lý của một đối tượng cùng mối liên hệ',
      'Danh sách mật khẩu của người quản trị CSDL lưu trữ trên đĩa cứng',
      'Tổng số lượng các dòng dữ liệu hiện đang có trong bảng tại thời điểm t',
      'Giao diện đồ họa hiển thị các nút bấm điều khiển của ứng dụng web'
    ],
    answer: 0,
    explanation: 'Lược đồ quan hệ (Relation Schema) là tập tất cả các thuộc tính cần quản lý của một đối tượng cùng với những mối liên hệ giữa chúng, ký hiệu R(U).',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d2-003',
    question: 'Khái niệm \"Tân từ của lược đồ quan hệ\" (Predicate) có ý nghĩa bản chất là gì?',
    options: [
      'Là ý nghĩa ngữ nghĩa thực tế và quy tắc logic của lược đồ quan hệ đó',
      'Là tên của phần mềm diệt virus được cài đặt trên máy chủ cơ sở dữ liệu',
      'Là tốc độ quay của đĩa cứng tính theo đơn vị số vòng trên mỗi phút',
      'Là số lượng các bảng trung gian cần tạo ra khi thiết kế cơ sở dữ liệu'
    ],
    answer: 0,
    explanation: 'Tân từ của lược đồ quan hệ (Predicate) chính là ý nghĩa ngữ nghĩa của LĐQH (ví dụ: mỗi sinh viên có một mã số duy nhất, xác định họ tên, ngày sinh...).',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d2-004',
    question: 'Điền vào chỗ trống: \"Khóa chính (Primary Key) là ...(1)... được người phân tích chọn để cài đặt, còn các khóa tối thiểu khác gọi là ...(2)...\"',
    options: [
      'một khóa tối thiểu / khóa dự tuyển (Candidate Key)',
      'một siêu khóa bất kỳ / thuộc tính không khóa',
      'khóa ngoại tham chiếu / khóa riêng phần',
      'tập tất cả thuộc tính / khóa đệ quy'
    ],
    answer: 0,
    explanation: 'Khóa chính là MỘT khóa tối thiểu được chọn để cài đặt; các khóa tối thiểu còn lại không được chọn làm khóa chính được gọi là khóa dự tuyển (Candidate Key).',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d2-005',
    question: 'Nhận định nào sau đây là ĐÚNG khi nói về Khóa ngoại (Foreign Key) trong mô hình quan hệ?',
    options: [
      'Là tập thuộc tính trong một quan hệ đóng vai trò là khóa của quan hệ khác',
      'Khóa ngoại bắt buộc phải có tên gọi hoàn toàn giống với tên của khóa chính',
      'Mỗi bảng chỉ được phép có tối đa duy nhất một khóa ngoại tham chiếu',
      'Khóa ngoại không bao giờ được phép nhận giá trị rỗng (NULL) trong mọi tình huống'
    ],
    answer: 0,
    explanation: 'Khóa ngoài/Khóa ngoại là một tập hợp gồm một hay nhiều thuộc tính là khóa của một lược đồ quan hệ khác, giúp liên kết dữ liệu giữa các bảng.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d2-006',
    question: 'Phát biểu nào sau đây là SAI khi nói về thuộc tính không khóa (Non-Prime Attribute)?',
    options: [
      'Thuộc tính không khóa là thuộc tính có tham gia vào ít nhất một khóa dự tuyển',
      'Thuộc tính không khóa là thuộc tính không tham gia vào bất kỳ khóa nào của bảng',
      'Một quan hệ có thể có nhiều thuộc tính không khóa để lưu thông tin mô tả đối tượng',
      'Trong bảng SINHVIEN(MaSV, Hoten, Diachi), HoTen là thuộc tính không khóa'
    ],
    answer: 0,
    explanation: 'Khẳng định SAI là phương án A, vì thuộc tính tham gia vào khóa dự tuyển được gọi là THUỘC TÍNH KHÓA (Prime Attribute), không phải thuộc tính không khóa.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d2-007',
    question: 'Cho các nhận định sau về Siêu khóa (Super Key):\n(I) Mọi quan hệ đều có ít nhất một siêu khóa là tập U chứa tất cả thuộc tính.\n(II) Một siêu khóa có thể chứa các thuộc tính dư thừa không cần thiết.\n(III) Mọi siêu khóa đều là khóa chính của quan hệ.\nKhẳng định nào sau đây là ĐÚNG?',
    options: [
      'Chỉ có nhận định (I) và (II) đúng, nhận định (III) là sai',
      'Cả 3 nhận định (I), (II) và (III) đều là những nhận định đúng',
      'Chỉ có duy nhất nhận định (III) là nhận định hoàn toàn chính xác',
      'Tất cả các nhận định trên đều là nhận định hoàn toàn sai lệch'
    ],
    answer: 0,
    explanation: 'Nhận định (I) và (II) đúng. Nhận định (III) sai vì siêu khóa có thể chứa thuộc tính dư thừa, chỉ có siêu khóa tối thiểu mới là khóa, và trong các khóa chỉ chọn 1 khóa làm khóa chính.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d2-008',
    question: 'Tình huống: Cho quan hệ R(A, B, C, D) có các khóa tối thiểu là {A, B} và {A, C}. Tập hợp các thuộc tính khóa (Prime Attributes) của R là:',
    options: [
      'Tập {A, B, C} vì các thuộc tính này tham gia vào ít nhất một khóa',
      'Chỉ gồm tập {A} vì A là thuộc tính chung duy nhất của cả hai khóa',
      'Chỉ gồm tập {D} vì D là thuộc tính không tham gia vào bất kỳ khóa nào',
      'Tập {A, B, C, D} gồm toàn bộ tất cả các thuộc tính của quan hệ R'
    ],
    answer: 0,
    explanation: 'Thuộc tính khóa là thuộc tính tham gia vào MỘT KHÓA BẤT KỲ. Hai khóa là {A, B} và {A, C} nên các thuộc tính khóa là A, B, C. Thuộc tính D là không khóa.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay lấy phần giao {A} thay vì lấy phần hợp của các khóa {A, B, C}.',
      trickWord: 'Bẫy xác định tập thuộc tính khóa (Prime Attributes) từ nhiều khóa dự tuyển',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.4.b',
      tip: 'Thuộc tính khóa (Prime) = Thuộc tính thuộc ÍT NHẤT 1 khóa ➔ HỢP tất cả các khóa lại: {A, B} ∪ {A, C} = {A, B, C}.'
    }
  },
  {
    id: 'db-c2-d2-009',
    question: 'Cho bảng HOCBONG gồm 4 dòng dữ liệu. Nếu người dùng chèn thêm một dòng mới có đầy đủ 5 giá trị HOÀN TOÀN TRÙNG LẶP với một dòng đã có, theo lý thuyết tập hợp quan hệ sẽ thế nào?',
    options: [
      'Quan hệ hoàn toàn không thay đổi vì tập hợp không chứa các phần tử trùng lặp',
      'Quan hệ sẽ tự động tăng số lượng dòng lên thành năm dòng dữ liệu khác nhau',
      'Toàn bộ bảng dữ liệu HOCBONG sẽ bị xóa sạch khỏi bộ nhớ của máy chủ',
      'Bảng HOCBONG sẽ tự động tách thành hai bảng quan hệ con hoàn toàn độc lập'
    ],
    answer: 0,
    explanation: 'Theo lưu ý quan trọng của lý thuyết tập hợp trong giáo trình: Thêm vào một dòng (cột) giống với dòng (cột) đã có thì quan hệ KHÔNG THAY ĐỔI.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh thường nghĩ máy tính sẽ lưu thành 5 dòng hoặc báo lỗi chèn trùng.',
      trickWord: 'Bẫy bản chất quan hệ là một tập hợp toán học (Set of Tuples) không chấp nhận phần tử trùng',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.3.b',
      tip: 'Lý thuyết tập hợp: Tập {1, 2} ∪ {2} = {1, 2} ➔ Thêm dòng trùng lặp thì Quan hệ KHÔNG ĐỔI.'
    }
  },
  {
    id: 'db-c2-d2-010',
    question: 'Cho quan hệ r(R) với tập thuộc tính U. Giả sử tồn tại hai bộ ti và tj trong r sao cho ti(X) = tj(X) (với ti khác tj). Ta có thể kết luận chắc chắn điều gì về tập thuộc tính X?',
    options: [
      'Tập thuộc tính X chắc chắn KHÔNG PHẢI là một siêu khóa của quan hệ r',
      'Tập thuộc tính X chắc chắn là khóa chính được chọn của quan hệ r',
      'Tập thuộc tính X bắt buộc phải chứa toàn bộ tất cả thuộc tính của U',
      'Tập thuộc tính X là một khóa ngoại tham chiếu đến một bảng khác'
    ],
    answer: 0,
    explanation: 'Định nghĩa siêu khóa đòi hỏi: với hai bộ khác nhau bất kỳ thì giá trị trên siêu khóa phải khác nhau (ti(SK) ≠ tj(SK)). Nếu tồn tại hai bộ khác nhau có giá trị trùng nhau trên X thì X dứt khoát không thể là siêu khóa.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Nhiều người lúng túng trước định nghĩa phủ định của siêu khóa theo ngôn ngữ toán học.',
      trickWord: 'Bẫy điều kiện phủ định của định nghĩa Siêu khóa (Violation of Super Key constraint)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục I.4.a',
      tip: 'Trùng giá trị trên 2 dòng khác nhau ➔ X KHÔNG THỂ là Siêu khóa (và do đó không thể là Khóa).'
    }
  },

  // --- CHUYÊN ĐỀ 2: ĐẠI SỐ QUAN HỆ CƠ BẢN & TẬP HỢP TƯƠNG THÍCH (Câu 11 - 20) ---
  {
    id: 'db-c2-d2-011',
    question: 'Đại số quan hệ (Relational Algebra) được coi là ưu điểm nổi bật của mô hình quan hệ chủ yếu vì lý do gì?',
    options: [
      'Tiếp cận công cụ toán học vững chắc để xây dựng ngôn ngữ xử lý dữ liệu',
      'Giúp máy tính không bao giờ bị nhiễm virus độc hại từ mạng Internet',
      'Làm giảm giá thành mua sắm phần cứng máy chủ trung tâm dữ liệu',
      'Cho phép người dùng vẽ được các sơ đồ tư duy đa màu sắc trực quan'
    ],
    answer: 0,
    explanation: 'Đại số quan hệ là phương pháp mô hình hóa các phép toán trên CSDL quan hệ, kế thừa kết quả toán học chặt chẽ để thiết lập các ngôn ngữ dữ liệu bậc cao như SQL.',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d2-012',
    question: 'Hai quan hệ r1 và r2 được gọi là \"Hai quan hệ rời nhau\" khi thỏa mãn điều kiện toán học nào?',
    options: [
      'Chúng không có bất kỳ thuộc tính chung nào (giao của U1 và U2 bằng rỗng)',
      'Số lượng các dòng trong hai quan hệ hoàn toàn không bằng nhau',
      'Một quan hệ lưu trên đĩa cứng còn quan hệ kia lưu trên đám mây',
      'Hai quan hệ được tạo ra ở hai năm hoàn toàn khác biệt nhau'
    ],
    answer: 0,
    explanation: 'Giáo trình định nghĩa: r1, r2 là hai quan hệ rời nhau nếu chúng không có thuộc tính chung (U1 ∩ U2 = ∅).',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d2-013',
    question: 'Phép chọn σ_C(r) sử dụng biểu thức điều kiện logic C. Kết quả đánh giá của biểu thức C trên mỗi bộ là gì?',
    options: [
      'Chỉ nhận một trong hai giá trị chân lý logic: True (Đúng) hoặc False (Sai)',
      'Là một chuỗi ký tự tự do chứa họ tên của người viết câu truy vấn dữ liệu',
      'Là một số nguyên dương thể hiện dung lượng bộ nhớ cần dùng để lọc dòng',
      'Là một tệp hình ảnh nén lưu trữ vị trí của các bản ghi trên đĩa cứng'
    ],
    answer: 0,
    explanation: 'Điều kiện C là một biểu thức logic trả về True hoặc False. Phép chọn giữ lại các bộ t sao cho C(t) = True.',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d2-014',
    question: 'Điền vào chỗ trống: \"Toán tử so sánh {<, ≤, >, ≥} trong điều kiện của phép chọn chỉ áp dụng cho thuộc tính có ...(1)..., nếu không có thứ tự thì chỉ được dùng toán tử ...(2)...\"',
    options: [
      'miền giá trị có thứ tự / {=, ≠}',
      'kiểu dữ liệu chuỗi ký tự / {AND, OR}',
      'khóa chính tự tăng / {IN, LIKE}',
      'dung lượng lớn / {EXISTS, NOT}'
    ],
    answer: 0,
    explanation: 'Lưu ý quan trọng trong giáo trình: Toán tử so sánh chỉ áp dụng cho thuộc tính có miền giá trị có thứ tự. Nếu miền không có thứ tự thì chỉ dùng {=, ≠}.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d2-015',
    question: 'Nhận định nào sau đây là SAI khi nói về phép hợp (Union — ký hiệu ∪) trong đại số quan hệ?',
    options: [
      'Phép hợp có thể thực hiện tùy ý trên hai quan hệ bất kỳ không cần cùng thuộc tính',
      'Hợp của hai quan hệ tương thích là quan hệ gồm các bộ thuộc r1 hoặc thuộc r2',
      'Các bộ dữ liệu hoàn toàn trùng nhau ở cả hai quan hệ chỉ được lấy một lần duy nhất',
      'Lược đồ kết quả của phép hợp có tập thuộc tính giống hệt tập thuộc tính ban đầu'
    ],
    answer: 0,
    explanation: 'Khẳng định SAI là phương án A, vì phép hợp BẮT BUỘC phải thực hiện trên hai quan hệ TƯƠNG THÍCH (có cùng tập thuộc tính U1 = U2).',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d2-016',
    question: 'Cho LĐQH Canbo(Maso, Hoten...) và Giangvien(Maso, Hoten...). Biểu thức nào in ra danh sách mã số và họ tên của những người VỪA LÀ cán bộ VỪA LÀ giảng viên?',
    options: [
      'π_(Maso, Hoten)(Canbo) ∩ π_(Maso, Hoten)(Giangvien) (dùng phép giao hai tập)',
      'π_(Maso, Hoten)(Canbo) ∪ π_(Maso, Hoten)(Giangvien) (dùng phép hợp hai tập)',
      'π_(Maso, Hoten)(Canbo) − π_(Maso, Hoten)(Giangvien) (dùng phép hiệu hai tập)',
      'π_(Maso, Hoten)(Canbo) × π_(Maso, Hoten)(Giangvien) (dùng tích Descartes)'
    ],
    answer: 0,
    explanation: 'Để tìm những đối tượng thỏa mãn cả hai vai trò (vừa là cán bộ vừa là giảng viên), ta sử dụng phép giao (∩) giữa hai tập sau khi đã chiếu đồng nhất thuộc tính Maso, Hoten.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d2-017',
    question: 'Khi thực hiện chuỗi phép toán π_X(π_Y(R)) với X ⊆ Y ⊆ U, kết quả trả về tương đương với biểu thức nào?',
    options: [
      'Tương đương với π_X(R) vì việc chiếu liên tiếp thu hẹp về tập con X',
      'Tương đương với π_Y(R) vì tập Y lớn hơn và bao trùm tập con X',
      'Tương đương với một quan hệ rỗng vì vi phạm cú pháp đại số quan hệ',
      'Tương đương với tích Descartes của hai tập thuộc tính X và Y'
    ],
    answer: 0,
    explanation: 'Theo tính chất của phép chiếu liên tiếp: Nếu X ⊆ Y thì π_X(π_Y(R)) = π_X(R). Chiếu trên tập hẹp hơn X sẽ loại bỏ các cột của Y không nằm trong X.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d2-018',
    question: 'Cho quan hệ r gồm 20 bộ và quan hệ s gồm 15 bộ. Biết r và s tương thích và có 5 bộ chung nhau. Hỏi phép hợp r ∪ s có bao nhiêu bộ?',
    options: [
      'Có đúng 30 bộ (lấy 20 + 15 − 5 = 30 vì loại bỏ các bộ trùng lặp)',
      'Có đúng 35 bộ (lấy 20 + 15 = 35 giữ nguyên toàn bộ các bộ)',
      'Có đúng 5 bộ (chỉ lấy các bộ xuất hiện ở cả hai quan hệ)',
      'Có đúng 300 bộ (lấy 20 nhân với 15 theo tích Descartes)'
    ],
    answer: 0,
    explanation: 'Theo nguyên lý bao hàm và loại trừ của lý thuyết tập hợp: |r ∪ s| = |r| + |s| − |r ∩ s| = 20 + 15 − 5 = 30 bộ (vì phép hợp không chứa phần tử trùng lặp).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay cộng trực tiếp 20 + 15 = 35 mà quên mất phép hợp toán học tự động loại bỏ phần tử trùng.',
      trickWord: 'Bẫy số lượng bộ của phép hợp (Union cardinality with overlap)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.6',
      tip: 'Số phần tử phép Hợp = |r| + |s| − |r ∩ s| = 20 + 15 − 5 = 30 bộ.'
    }
  },
  {
    id: 'db-c2-d2-019',
    question: 'Cho biểu thức logic C = (A = 5 ∧ B = 10). Biểu thức phép chọn nào sau đây cho kết quả HOÀN TOÀN TƯƠNG ĐƯƠNG với σ_C(R)?',
    options: [
      'σ_(A=5)(σ_(B=10)(R)) hoặc σ_(B=10)(σ_(A=5)(R)) (tổ hợp phép chọn liên tiếp)',
      'σ_(A=5)(R) ∪ σ_(B=10)(R) (hợp của hai phép chọn độc lập từng điều kiện)',
      'π_(A=5)(R) ∩ π_(B=10)(R) (giao của hai phép chiếu trên từng điều kiện)',
      'σ_(A=5)(R) − σ_(B=10)(R) (hiệu của phép chọn thứ nhất cho thứ hai)'
    ],
    answer: 0,
    explanation: 'Phép chọn với điều kiện liên kết AND (∧): σ_(C1 ∧ C2)(R) hoàn toàn tương đương với việc thực hiện liên tiếp hai phép chọn σ_C1(σ_C2(R)) nhờ tính giao hoán.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Nhiều người nhầm phép AND với phép Hợp (∪) hoặc phép Trừ (−).',
      trickWord: 'Bẫy phân rã điều kiện liên kết AND trong phép chọn đại số quan hệ',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.2.a',
      tip: 'Quy tắc vàng: σ_(C1 ∧ C2)(R) ≡ σ_C1(σ_C2(R)) ≡ σ_C2(σ_C1(R)).'
    }
  },
  {
    id: 'db-c2-d2-020',
    question: 'Xét biểu thức: σ_C(π_X(R)) và π_X(σ_C(R)). Điều kiện cần và đủ để hai biểu thức này tương đương và có thể hoán vị an toàn là gì?',
    options: [
      'Tất cả các thuộc tính tham gia trong điều kiện C đều phải thuộc tập thuộc tính X',
      'Tập thuộc tính X bắt buộc phải chứa toàn bộ khóa chính của quan hệ R',
      'Quan hệ R bắt buộc phải có số lượng dòng nhỏ hơn mười nghìn bản ghi',
      'Điều kiện logic C bắt buộc phải là phép so sánh bằng không được dùng lớn hơn'
    ],
    answer: 0,
    explanation: 'Để đẩy phép chọn qua phép chiếu: σ_C(π_X(R)) = π_X(σ_C(R)), điều kiện bắt buộc là biểu thức C chỉ được sử dụng các thuộc tính có mặt trong tập thuộc tính X (nếu C dùng thuộc tính ngoài X thì sau khi chiếu π_X sẽ không còn thuộc tính đó để kiểm tra C).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ phép chọn và phép chiếu luôn giao hoán tự do trong mọi hoàn cảnh.',
      trickWord: 'Bẫy điều kiện tương đương đẩy phép chọn qua phép chiếu (Pushdown Selection predicate)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.2 & II.3',
      tip: 'Đẩy phép chọn qua phép chiếu: Thuộc tính trong C BẮT BUỘC phải nằm trong X.'
    }
  },

  // --- CHUYÊN ĐỀ 3: PHÉP JOIN, PHÉP CHIA & BÀI TẬP CSDL (Câu 21 - 30) ---
  {
    id: 'db-c2-d2-021',
    question: 'Khi nào một phép kết nối điều kiện (θ-Join) được gọi là \"Phép kết nối bằng\" (Equijoin)?',
    options: [
      'Khi toán tử so sánh θ được sử dụng chính là toán tử so sánh bằng (=)',
      'Khi số lượng thuộc tính của hai quan hệ tham gia bằng nhau tuyệt đối',
      'Khi số lượng các dòng dữ liệu của hai quan hệ bằng nhau hoàn toàn',
      'Khi tên gọi của hai quan hệ tham gia hoàn toàn trùng khớp với nhau'
    ],
    answer: 0,
    explanation: 'Giáo trình nêu rõ: Nếu toán tử so sánh θ là toán tử so sánh bằng \"=\" thì gọi là kết nối bằng (Equijoin).',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d2-022',
    question: 'Ý nghĩa quan trọng bậc nhất của Phép kết nối (Join) trong mô hình cơ sở dữ liệu quan hệ là gì?',
    options: [
      'Cho phép liên kết và truy xuất thông tin giữa các quan hệ trong CSDL',
      'Tự động tăng tốc độ tính toán của card đồ họa khi kết xuất biểu đồ',
      'Ngăn chặn người dùng xóa dữ liệu bảng quan trọng ra khỏi máy chủ lưu',
      'Tự động sao lưu dữ liệu máy chủ sang máy in để in ấn tài liệu giấy'
    ],
    answer: 0,
    explanation: 'Ý nghĩa của phép kết nối: Dùng để kết hợp hai bộ có liên quan thuộc hai quan hệ khác nhau thành một bộ mới, cho phép xử lý mối liên quan giữa các quan hệ trong CSDL.',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d2-023',
    question: 'Cho CSDL: Hanghoa(MaHG, TenHG, DVT, Dongia...) và Chitiet_HD(SoHD, MaHG, Soluong, Giaban). Thuộc tính chung dùng để kết nối tự nhiên hai bảng này là gì?',
    options: [
      'Thuộc tính MaHG xuất hiện ở cả hai bảng Hanghoa và Chitiet_HD',
      'Thuộc tính SoHD xuất hiện ở bảng Chitiet_HD và bảng Hoadon',
      'Thuộc tính Dongia xuất hiện ở bảng Hanghoa và bảng Khach',
      'Thuộc tính TenHG chỉ xuất hiện duy nhất ở bảng Hanghoa'
    ],
    answer: 0,
    explanation: 'Hai bảng Hanghoa và Chitiet_HD có thuộc tính chung duy nhất là MaHG, đây là thuộc tính dùng để kết nối tự nhiên.',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d2-024',
    question: 'Điền vào chỗ trống: "Phép kết nối tự nhiên r * s thực hiện kết nối bằng tại các thuộc tính trùng tên, và ...(1)... trong hai thuộc tính trùng tên sẽ bị ...(2)... khỏi kết quả để tránh dư thừa."',
    options: [
      'đúng một đại diện (loại bỏ hoàn toàn các)',
      'toàn bộ nguyên vẹn (giữ lại vĩnh viễn các)',
      'chính xác hai cái (sao chép vô thời hạn)',
      'không có cột nào (xóa sạch toàn bộ những)'
    ],
    answer: 0,
    explanation: 'Giáo trình khẳng định: Một trong hai thuộc tính trùng tên bị loại bỏ khỏi kết quả để tránh dư thừa dữ liệu.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d2-025',
    question: 'Cho CSDL Quản lý bán hàng. Biểu thức nào dưới đây in ra Tên hàng hóa (TenHG) và Giá bán (Giaban) thực tế trong các chi tiết hóa đơn?',
    options: [
      'π_(TenHG, Giaban)(Hanghoa * Chitiet_HD) (kết nối tự nhiên và chiếu thuộc tính)',
      'π_(TenHG, Giaban)(Hanghoa × Chitiet_HD) (nhân tích Descartes và chiếu lấy cột)',
      'σ_(TenHG = Giaban)(Hanghoa * Chitiet_HD) (chọn các dòng có tên bằng giá bán)',
      'Hanghoa ÷ π_(Giaban)(Chitiet_HD) (thực hiện phép chia đại số quan hệ)'
    ],
    answer: 0,
    explanation: 'Kết nối tự nhiên Hanghoa * Chitiet_HD sẽ ghép nối thông tin hàng hóa với chi tiết hóa đơn theo MaHG, sau đó dùng phép chiếu π để lấy TenHG và Giaban.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d2-026',
    question: 'Cho các nhận định sau về Phép chia (r ÷ s):\n(I) Lược đồ của quan hệ s phải là lược đồ con của r (S ⊂ R).\n(II) Kết quả của r ÷ s là quan hệ trên lược đồ R − S.\n(III) Phép chia đòi hỏi hai quan hệ r và s phải tương thích với nhau.\nKhẳng định nào sau đây là ĐÚNG?',
    options: [
      'Chỉ có nhận định (I) và (II) đúng, nhận định (III) là sai',
      'Cả ba nhận định (I), (II) và (III) đều là những nhận định đúng',
      'Chỉ có duy nhất nhận định (III) là nhận định hoàn toàn chính xác',
      'Tất cả các nhận định trên đều là nhận định hoàn toàn sai lệch'
    ],
    answer: 0,
    explanation: 'Nhận định (I) và (II) đúng. Nhận định (III) sai vì phép chia không đòi hỏi hai quan hệ tương thích, mà S là lược đồ con thực sự của R (S ⊂ R).',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d2-027',
    question: 'Cho CSDL Bán hàng gồm Hoadon(SoHD, Ngaylap, MaKH, Trigia). Biểu thức nào tìm các hóa đơn được lập trong năm 2024 có trị giá trên 10 triệu đồng?',
    options: [
      'σ_(Year(Ngaylap) = 2024 ∧ Trigia > 10000000)(Hoadon)',
      'π_(SoHD, Ngaylap)(σ_(Trigia > 10000000)(Hoadon))',
      'σ_(Year(Ngaylap) = 2024)(Hoadon) ÷ σ_(Trigia)(Hoadon)',
      'σ_(Year(Ngaylap) = 2024)(Hoadon) ∪ σ_(Trigia)(Hoadon)'
    ],
    answer: 0,
    explanation: 'Dùng phép chọn σ với điều kiện kết hợp AND (∧) cho cả khoảng thời gian lập hóa đơn trong năm 2024 và điều kiện trị giá hóa đơn > 10.000.000.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d2-028',
    question: 'Cho quan hệ R(A, B) có 4 bộ: (1, x), (1, y), (2, x), (3, y) và quan hệ S(B) có 2 bộ: (x), (y). Kết quả của phép chia R ÷ S là quan hệ trên thuộc tính A gồm những bộ nào?',
    options: [
      'Chỉ gồm duy nhất bộ (1) vì chỉ có A = 1 mới đi kèm với cả x và y',
      'Gồm cả 3 bộ là (1), (2), (3) vì các giá trị này đều có trong R',
      'Gồm hai bộ là (2) và (3) vì đây là các bộ có giá trị đơn lẻ',
      'Là quan hệ rỗng không có bộ nào vì phép chia bị lẻ số dòng'
    ],
    answer: 0,
    explanation: 'Phép chia tìm các giá trị A đi kèm với TẤT CẢ các giá trị B trong S ({x, y}). Chỉ có A = 1 đi kèm với cả x và y ((1, x) và (1, y) đều ∈ R). A = 2 chỉ có x, A = 3 chỉ có y nên bị loại.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn tất cả các giá trị của A {1, 2, 3} mà không hiểu bản chất lượng từ \"VỚI MỌI\".',
      trickWord: 'Bẫy tính toán kết quả số học cụ thể của Phép chia đại số quan hệ (Division)',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.10',
      tip: 'Phép chia R(A, B) ÷ S(B): Giá trị A nào đi kèm ĐỦ TẤT CẢ các giá trị B của S thì mới được chọn.'
    }
  },
  {
    id: 'db-c2-d2-029',
    question: 'Trong CSDL Bán hàng, để tìm các khách hàng mua TẤT CẢ các mặt hàng có trong cửa hàng, biểu thức ĐSQH chuẩn mực nào sau đây được áp dụng?',
    options: [
      'π_(MaKH, MaHG)(Hoadon * Chitiet_HD) ÷ π_(MaHG)(Hanghoa)',
      'π_(MaKH, MaHG)(Hoadon * Chitiet_HD) * π_(MaHG)(Hanghoa)',
      'π_(MaKH, MaHG)(Hoadon * Chitiet_HD) − π_(MaHG)(Hanghoa)',
      'π_(MaKH, MaHG)(Hoadon * Chitiet_HD) ∪ π_(MaHG)(Hanghoa)'
    ],
    answer: 0,
    explanation: 'Để tìm khách hàng mua TẤT CẢ mặt hàng: Ta lấy bảng lưu việc mua hàng của khách π_(MaKH, MaHG)(Hoadon * Chitiet_HD) đem CHIA cho toàn bộ tập mã hàng có trong cửa hàng π_MaHG(Hanghoa).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Dễ nhầm lẫn giữa phép chia (÷) và phép kết nối tự nhiên (*) khi đọc lướt biểu thức.',
      trickWord: 'Bẫy biểu thức đại số quan hệ phức hợp cho bài toán mua tất cả mặt hàng',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.10 & IV.2',
      tip: 'Khách mua TẤT CẢ mặt hàng = (Bảng_Khách_Mua_Hàng) ÷ (Toàn_Bộ_Mặt_Hàng).'
    }
  },
  {
    id: 'db-c2-d2-030',
    question: 'Tình huống: Khi thực hiện phép kết nối tự nhiên giữa hai quan hệ R và S. Nếu hai quan hệ này HOÀN TOÀN KHÔNG CÓ thuộc tính nào trùng tên (U_R ∩ U_S = ∅), kết quả trả về là gì?',
    options: [
      'Phép kết nối tự nhiên tự động thoái hóa trở thành phép tích Descartes R × S',
      'Hệ quản trị CSDL báo lỗi nghiêm trọng vì thiếu thuộc tính kết nối bằng',
      'Kết quả trả về là một quan hệ rỗng không chứa bất kỳ thuộc tính nào',
      'Hệ thống tự động chọn thuộc tính đầu tiên của mỗi bảng để ép kết nối'
    ],
    answer: 0,
    explanation: 'Khi hai quan hệ rời nhau (không có thuộc tính chung), điều kiện kết nối bằng tại thuộc tính trùng tên không tồn tại, do đó phép Natural Join thoái hóa thành phép tích Descartes thuần túy R × S.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ hệ thống sẽ báo lỗi hoặc trả về rỗng.',
      trickWord: 'Bẫy thoái hóa của Phép kết nối tự nhiên khi hai quan hệ rời nhau',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục II.4 & II.5',
      tip: 'Hai quan hệ KHÔNG CÓ cột chung ➔ Natural Join (*) thoái hóa thành Tích Descartes (×).'
    }
  },

  // --- CHUYÊN ĐỀ 4: QUY TRÌNH 7 BƯỚC CHUYỂN ĐỔI ERD SANG QUAN HỆ (Câu 31 - 40) ---
  {
    id: 'db-c2-d2-031',
    question: 'Mục đích cốt lõi của quy trình 7 bước chuyển đổi ERD sang quan hệ là gì?',
    options: [
      'Chuyển đổi thiết kế CSDL mức quan niệm sang mức logic để cài đặt vào RDBMS',
      'Tự động chuyển đổi mã nguồn chương trình từ ngôn ngữ C sang ngôn ngữ Python',
      'Tính toán chi phí tiền điện hàng tháng cho hệ thống máy chủ cơ sở dữ liệu',
      'Xóa sạch các ràng buộc nghiệp vụ để người dùng nhập liệu tự do hơn'
    ],
    answer: 0,
    explanation: 'Bản chất của quá trình: từ sơ đồ ERD đã xây dựng ở mức quan niệm, chuyển đổi thành tập các lược đồ quan hệ ở mức logic để cài đặt vào hệ quản trị CSDL quan hệ.',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d2-032',
    question: 'Khi chuyển đổi một thuộc tính đơn (Simple attribute) của thực thể thường trong Bước 1, kết quả là gì?',
    options: [
      'Chuyển trực tiếp thành một thuộc tính thông thường của quan hệ tương ứng',
      'Bắt buộc phải tách thành một bảng quan hệ riêng biệt có khóa ngoại',
      'Tự động biến đổi thành khóa chính của bảng quan hệ đó trong CSDL',
      'Bị xóa bỏ khỏi lược đồ quan hệ nếu thuộc tính đó không phải là số'
    ],
    answer: 0,
    explanation: 'Bước 1a: Thuộc tính đơn (Simple attribute) chuyển trực tiếp thành thuộc tính của quan hệ.',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d2-033',
    question: 'Trong quy trình chuyển đổi, một Thực thể thường (Regular entity) trong ERD sẽ được chuyển đổi thành cái gì?',
    options: [
      'Được chuyển đổi thành một bảng quan hệ (Relation) tương ứng trong RDBMS',
      'Được chuyển đổi thành một dòng dữ liệu (Tuple) duy nhất trong bảng hệ thống',
      'Được chuyển đổi thành một file văn bản thô lưu trữ trên ổ đĩa mềm máy tính',
      'Được chuyển đổi thành một câu lệnh truy vấn điều khiển truy cập mạng'
    ],
    answer: 0,
    explanation: 'Mỗi kiểu thực thể thường trong sơ đồ ERD được chuyển đổi thành một bảng quan hệ tương ứng trong CSDL quan hệ.',
    difficulty: 'easy'
  },
  {
    id: 'db-c2-d2-034',
    question: 'Điền vào chỗ trống: \"Khi chuyển đổi thực thể yếu ở Bước 2, khóa ngoại tham chiếu đến thực thể mạnh sở hữu nó ...(1)... mang giá trị ...(2)...\"',
    options: [
      'không được phép / NULL (rỗng)',
      'bắt buộc phải / âm',
      'tùy ý có thể / chuỗi chữ',
      'luôn luôn / số 0'
    ],
    answer: 0,
    explanation: 'Lưu ý bắt buộc trong giáo trình Mục III.2: Khóa ngoại tham chiếu đến thực thể mạnh KHÔNG ĐƯỢC NULL, vì thực thể yếu không thể tồn tại độc lập nếu thiếu thực thể mạnh định danh.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d2-035',
    question: 'Khi chuyển đổi mối quan hệ nhiều - nhiều (M:N) có thuộc tính riêng (ví dụ: SoLuong, DonGia) sang mô hình quan hệ, thuộc tính riêng đó được đặt ở đâu?',
    options: [
      'Được đưa vào quan hệ kết hợp mới được tạo ra ở giữa hai thực thể',
      'Được đưa vào cả hai bảng thực thể ban đầu để tránh bị mất mát dữ liệu',
      'Bị loại bỏ hoàn toàn vì mô hình quan hệ cấm mối quan hệ có thuộc tính',
      'Được lưu vào một file text riêng biệt đặt tại máy chủ của người quản trị'
    ],
    answer: 0,
    explanation: 'Khi chuyển đổi quan hệ M:N, quan hệ mới được tạo ra sẽ chứa các khóa ngoại tham chiếu hai bên, và TẤT CẢ thuộc tính riêng của mối quan hệ M:N đều được đưa vào quan hệ mới này.',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d2-036',
    question: 'Phát biểu nào sau đây là SAI khi nói về quy tắc chuyển đổi mối quan hệ một - một (1:1) hai ngôi?',
    options: [
      'Khóa chính ở phía tùy chọn bắt buộc phải làm khóa ngoại ở phía bắt buộc',
      'Khóa chính ở phía bắt buộc sẽ trở thành khóa ngoại ở phía tùy chọn',
      'Tất cả thuộc tính của mối quan hệ 1:1 đều được mang sang phía tùy chọn',
      'Mối quan hệ 1:1 không bắt buộc phải tạo thêm một bảng quan hệ thứ ba'
    ],
    answer: 0,
    explanation: 'Khẳng định SAI là phương án A. Quy tắc chuẩn là: Khóa chính ở phía BẮT BUỘC làm khóa ngoại ở phía TÙY CHỌN (chứ không phải ngược lại, nhằm tránh giá trị NULL ở phía bắt buộc).',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d2-037',
    question: 'Trong mối quan hệ một ngôi nhiều - nhiều (M:N đệ quy) của một kiểu thực thể, quy trình chuyển đổi ở Bước 5 tạo ra bao nhiêu quan hệ?',
    options: [
      'Tạo ra đúng 2 quan hệ: 1 cho thực thể đó và 1 quan hệ kết hợp chứa 2 khóa ngoại',
      'Chỉ tạo ra duy nhất 1 quan hệ và thêm hai khóa ngoại nằm cùng trên bảng đó',
      'Tạo ra 3 quan hệ độc lập để tránh sự trùng lặp dữ liệu giữa các thế hệ',
      'Không thể chuyển đổi được vì mô hình quan hệ từ chối quan hệ đệ quy M:N'
    ],
    answer: 0,
    explanation: 'Bước 5b: Với quan hệ một ngôi M:N đệ quy, ta tạo 2 quan hệ: (1) quan hệ cho kiểu thực thể đó; (2) quan hệ kết hợp gồm 2 thuộc tính là khóa ngoại cùng tham chiếu về khóa chính của (1).',
    difficulty: 'medium'
  },
  {
    id: 'db-c2-d2-038',
    question: 'Tình huống: Khi chuyển đổi quan hệ Cha/Con (Supertype/Subtype) gồm EMPLOYEE (cha) và 3 con: HOURLY, SALARIED, CONSULTANT. Phát biểu nào sau đây phản ánh ĐÚNG cấu trúc quan hệ?',
    options: [
      'Tạo 4 bảng quan hệ, bảng cha chứa thuộc tính chung, các bảng con chứa thuộc tính riêng',
      'Chỉ tạo duy nhất 3 bảng con, toàn bộ thông tin của bảng cha bị xóa bỏ hoàn toàn',
      'Chỉ tạo duy nhất 1 bảng cha khổng lồ chứa toàn bộ tất cả thuộc tính của các con',
      'Tạo 2 bảng quan hệ và dùng phép tích Descartes để kết nối dữ liệu khi cần'
    ],
    answer: 0,
    explanation: 'Bước 7: Tạo ra các quan hệ cho cả thực thể cha và thực thể con (ở đây là 1 cha + 3 con = 4 bảng). Thuộc tính chung và danh hiệu phân biệt đặt ở bảng cha, thuộc tính riêng đặt ở từng bảng con.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn cách gộp chung thành 1 bảng lớn duy nhất (chứa nhiều NULL) hoặc chỉ tạo bảng con.',
      trickWord: 'Bẫy số lượng bảng và cấu trúc thuộc tính khi chuyển đổi Supertype/Subtype chuẩn',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục III.6.a',
      tip: 'Chuẩn giáo trình Bước 7 = Tạo quan hệ cho CẢ CHA VÀ CÁC CON (1 cha + n con), liên kết 1:1 qua PK/FK.'
    }
  },
  {
    id: 'db-c2-d2-039',
    question: 'Trong mối quan hệ ba ngôi giữa PATIENT, PHYSICIAN và TREATMENT có tạo thực thể kết hợp PATIENT_TREATMENT. Khi nào khóa chính của PATIENT_TREATMENT là tổ hợp (Patient_ID, Physician_ID, Treatment_Code, Date, Time)?',
    options: [
      'Khi một bệnh nhân có thể được cùng một bác sĩ điều trị cùng một ca nhiều lần ở các thời điểm',
      'Khi bác sĩ điều trị yêu cầu bệnh nhân phải thanh toán toàn bộ chi phí khám chữa bệnh định kỳ',
      'Khi hệ thống máy chủ bệnh viện bị sự cố và cần phục hồi toàn bộ thông tin bệnh án người bệnh',
      'Khi bệnh nhân chỉ được phép đăng ký khám bệnh với một bác sĩ duy nhất trong toàn bộ quá trình'
    ],
    answer: 0,
    explanation: 'Nếu một bệnh nhân có thể khám cùng một bác sĩ với cùng một liệu trình nhiều lần, thì chỉ 3 khóa ngoại là chưa đủ phân biệt các lần khám khác nhau. Bắt buộc phải đưa thêm Date và Time vào khóa chính để đảm bảo tính duy nhất.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ khóa chính của quan hệ ba ngôi luôn cố định chỉ là 3 khóa ngoại ghép lại.',
      trickWord: 'Bẫy mở rộng khóa chính quan hệ ba ngôi khi có yếu tố thời gian lặp lại',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục III.5.b',
      tip: 'Nếu sự kiện có thể lặp lại nhiều lần ➔ Bắt buộc phải bổ sung thuộc tính thời gian (Date, Time) vào Khóa chính.'
    }
  },
  {
    id: 'db-c2-d2-040',
    question: 'Tình huống tổng hợp: Cho sơ đồ ERD có thực thể KHOA (1) và thực thể LOP (N). Nếu người thiết kế đặt nhầm khóa ngoại MaLop vào bảng KHOA thì hậu quả nghiêm trọng nào sẽ xảy ra?',
    options: [
      'Một Khoa sẽ chỉ có thể quản lý tối đa được duy nhất một Lớp học, làm sai lệch mô hình nghiệp vụ',
      'Toàn bộ các máy tính trong phòng máy của khoa sẽ bị sập nguồn điện lưới ngay tức khắc',
      'Hệ quản trị CSDL tự động xóa bỏ toàn bộ sinh viên đang theo học tại các lớp của khoa đó',
      'Không có hậu quả nào vì đặt khóa ngoại ở bảng nào trong quan hệ 1:N cũng cho kết quả tương đương'
    ],
    answer: 0,
    explanation: 'Trong quan hệ 1:N (1 Khoa có nhiều Lớp), nếu đặt MaLop vào KHOA thì mỗi dòng Khoa chỉ lưu được 1 MaLop (vì ô giá trị nguyên tố 1NF), dẫn đến một Khoa chỉ có tối đa 1 Lớp, làm phá vỡ hoàn toàn nghiệp vụ 1:N.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Nhiều người nghĩ đặt khóa ngoại ở bảng nào cũng được, hoặc không lường trước hậu quả vi phạm 1NF.',
      trickWord: 'Bẫy hậu quả nghiệp vụ khi đặt sai vị trí khóa ngoại trong mối quan hệ một - nhiều',
      citation: 'Giáo trình Hệ CSDL — Chương 2, Mục III.3',
      tip: 'Quan hệ 1:N ➔ BẮT BUỘC đặt FK ở phía NHIỀU (N). Nếu đặt ở phía 1 ➔ Biến quan hệ thành 1:1, sai lệch bản chất.'
    }
  }
];

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

function generateFiles() {
  // Mảng đáp án mục tiêu phân bổ cân bằng hoàn hảo 10 A (0), 10 B (1), 10 C (2), 10 D (3)
  const targetAnswers1 = [0, 2, 1, 3, 1, 0, 3, 2, 0, 1, 2, 3, 1, 0, 2, 3, 0, 1, 3, 2, 1, 0, 2, 3, 0, 2, 1, 3, 2, 0, 1, 3, 0, 1, 2, 3, 1, 2, 0, 3];
  const targetAnswers2 = [1, 0, 2, 3, 0, 2, 1, 3, 2, 1, 0, 3, 0, 3, 1, 2, 1, 0, 3, 2, 0, 1, 2, 3, 2, 0, 1, 3, 1, 2, 0, 3, 0, 1, 3, 2, 3, 0, 2, 1];

  rebalanceSet(questionsDbCh2Part1, targetAnswers1);
  rebalanceSet(questionsDbCh2Part2, targetAnswers2);

  // Ghi file Đề 1
  const content1 = `/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG II: MÔ HÌNH DỮ LIỆU QUAN HỆ (RELATIONAL DATA MODEL) — BỘ ĐỀ 1
   SỐ LƯỢNG: 40 CÂU CỐ ĐỊNH (30% DỄ - 40% TRUNG BÌNH - 30% KHÓ/BẪY)
   MÃ BỘ ĐỀ: db-c2-d1-001 ĐẾN db-c2-d1-040
   ĐẶC TRƯNG: TÍCH HỢP 6 DẠNG CÂU HỎI ĐA DẠNG PHỦ KÍN 4 CHUYÊN ĐỀ
   CHUẨN KỸ THUẬT: ĐỘ LỆCH CHIỀU DÀI DELTA L <= 15 CHARS, CÂN BẰNG ĐÁP ÁN
   ============================================================ */

export const questionsDbCh2Part1 = ${JSON.stringify(questionsDbCh2Part1, null, 2)};
`;

  fs.writeFileSync('./data/questions-db-ch2-part1.js', content1, 'utf8');
  console.log('Successfully written data/questions-db-ch2-part1.js!');

  // Ghi file Đề 2
  const content2 = `/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG II: MÔ HÌNH DỮ LIỆU QUAN HỆ (RELATIONAL DATA MODEL) — BỘ ĐỀ 2
   SỐ LƯỢNG: 40 CÂU CỐ ĐỊNH (30% DỄ - 40% TRUNG BÌNH - 30% KHÓ/BẪY)
   MÃ BỘ ĐỀ: db-c2-d2-001 ĐẾN db-c2-d2-040
   ĐẶC TRƯNG: TÍCH HỢP 6 DẠNG CÂU HỎI ĐA DẠNG PHỦ KÍN 4 CHUYÊN ĐỀ
   CHUẨN KỸ THUẬT: ĐỘ LỆCH CHIỀU DÀI DELTA L <= 15 CHARS, CÂN BẰNG ĐÁP ÁN
   ============================================================ */

export const questionsDbCh2Part2 = ${JSON.stringify(questionsDbCh2Part2, null, 2)};
`;

  fs.writeFileSync('./data/questions-db-ch2-part2.js', content2, 'utf8');
  console.log('Successfully written data/questions-db-ch2-part2.js!');
}

generateFiles();
