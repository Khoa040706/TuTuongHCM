/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG II: MÔ HÌNH DỮ LIỆU QUAN HỆ (RELATIONAL DATA MODEL) — BỘ ĐỀ 1
   SỐ LƯỢNG: 40 CÂU CỐ ĐỊNH (30% DỄ - 40% TRUNG BÌNH - 30% KHÓ/BẪY)
   MÃ BỘ ĐỀ: db-c2-d1-001 ĐẾN db-c2-d1-040
   ĐẶC TRƯNG: TÍCH HỢP 6 DẠNG CÂU HỎI ĐA DẠNG PHỦ KÍN 4 CHUYÊN ĐỀ
   CHUẨN KỸ THUẬT: ĐỘ LỆCH CHIỀU DÀI DELTA L <= 15 CHARS, CÂN BẰNG ĐÁP ÁN
   ============================================================ */

export const questionsDbCh2Part1 = [
  {
    "id": "db-c2-d1-001",
    "question": "Mô hình cơ sở dữ liệu quan hệ (Relational Data Model) được nhà khoa học E.F. Codd đề xuất vào năm nào?",
    "options": [
      "Được đề xuất vào giai đoạn những năm 1970 - 1971",
      "Được đề xuất vào giai đoạn những năm 1950 - 1951",
      "Được đề xuất vào giai đoạn những năm 1995 - 1996",
      "Được đề xuất vào giai đoạn những năm 2010 - 2011"
    ],
    "answer": 0,
    "explanation": "Giáo trình khẳng định rõ: Mô hình CSDL quan hệ (gọi tắt là mô hình quan hệ) do E.F. Codd đề xuất vào năm 1970/1971.",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d1-002",
    "question": "Mô hình dữ liệu quan hệ hoàn chỉnh theo E.F. Codd bao gồm 3 thành phần cốt lõi nào dưới đây?",
    "options": [
      "Màn hình hiển thị màu, Chuột máy tính quang và Bàn phím cơ",
      "Hệ điều hành máy chủ, Bộ nhớ đệm RAM và Ổ cứng lưu trữ SSD",
      "Hệ thống ký hiệu, Tập hợp phép toán và Ràng buộc toàn vẹn",
      "Cáp mạng Internet quang, Trình duyệt web và Cổng thanh toán"
    ],
    "answer": 2,
    "explanation": "Mô hình quan hệ gồm 3 thành phần: 1) Hệ thống các ký hiệu mô tả dữ liệu; 2) Tập hợp các phép toán trên dữ liệu; 3) Ràng buộc toàn vẹn quan hệ.",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d1-003",
    "question": "Quy tắc bắt buộc nào sau đây áp dụng cho các thuộc tính (Attributes) trong cùng một quan hệ?",
    "options": [
      "Tất cả các thuộc tính bắt buộc phải có cùng một kiểu dữ liệu số nguyên",
      "Trong cùng một quan hệ, không được phép có hai thuộc tính cùng tên",
      "Mỗi quan hệ chỉ được phép chứa tối đa năm thuộc tính khác nhau mà thôi",
      "Tên của các thuộc tính bắt buộc phải viết hoàn toàn bằng tiếng Latinh cổ"
    ],
    "answer": 1,
    "explanation": "Lưu ý quan trọng trong giáo trình: Được phân biệt bằng tên gọi. Trong cùng một quan hệ (đối tượng), không được có 2 thuộc tính cùng tên.",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d1-004",
    "question": "Điền vào chỗ trống: \"Siêu khóa (Super Key) của một lược đồ quan hệ R là tập hợp thuộc tính có tính chất xác định ...(1)... trong mỗi thể hiện của R, và tập U chứa tất cả thuộc tính luôn là một ...(2)... của R.\"",
    "options": [
      "mọi bảng liên quan / thuộc tính",
      "nhiều bộ trùng nhau / khóa ngoại",
      "giá trị rỗng bất kỳ / khóa chính",
      "duy nhất một bộ / siêu khóa"
    ],
    "answer": 3,
    "explanation": "Siêu khóa là tập hợp thuộc tính xác định duy nhất một bộ trong mỗi thể hiện. Tập U gồm tất cả các thuộc tính của quan hệ luôn là một siêu khóa.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d1-005",
    "question": "Nhận định nào sau đây là ĐÚNG NHẤT khi phân biệt giữa Siêu khóa (Super Key) và Khóa tối thiểu (Key)?",
    "options": [
      "Siêu khóa luôn có số lượng thuộc tính ít hơn số lượng thuộc tính của khóa",
      "Khóa tối thiểu là siêu khóa mà mọi tập con thực sự của nó không là siêu khóa",
      "Một quan hệ chỉ có tối đa một siêu khóa nhưng có thể có rất nhiều khóa",
      "Khóa tối thiểu bắt buộc phải chứa toàn bộ tất cả các thuộc tính của bảng"
    ],
    "answer": 1,
    "explanation": "Khóa của LĐQH là một siêu khóa sao cho mọi tập con thực sự của nó không là siêu khóa (tức là siêu khóa tối thiểu hay tối tiểu).",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d1-006",
    "question": "Phát biểu nào sau đây là SAI khi nói về các lưu ý theo lý thuyết tập hợp của một quan hệ (Relation)?",
    "options": [
      "Thứ tự sắp xếp của các dòng hoặc các cột trong quan hệ là vô cùng quan trọng",
      "Thêm vào một dòng hoàn toàn giống với dòng đã có thì quan hệ không thay đổi",
      "Một quan hệ r trên lược đồ R là một tập con của tích Descartes các miền giá trị",
      "Mỗi dòng trong bảng quan hệ chứa thông tin về một đối tượng, gọi là một bộ"
    ],
    "answer": 0,
    "explanation": "Khẳng định SAI là phương án A, vì theo lý thuyết tập hợp: Thứ tự của các dòng (cột) KHÔNG quan trọng.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d1-007",
    "question": "Thuộc tính khóa (Prime Attribute) trong lược đồ quan hệ được định nghĩa chính xác là gì?",
    "options": [
      "Là thuộc tính chỉ xuất hiện duy nhất ở các bảng phụ của hệ thống",
      "Là thuộc tính bắt buộc phải có kiểu dữ liệu là chuỗi ký tự tự do",
      "Là thuộc tính không bao giờ được phép xuất hiện trong câu truy vấn",
      "Là thuộc tính có tham gia vào ít nhất một khóa bất kỳ của quan hệ"
    ],
    "answer": 3,
    "explanation": "Giáo trình định nghĩa: Thuộc tính khóa (Prime Attribute) là thuộc tính có tham gia vào một khóa bất kỳ (khóa dự tuyển hay khóa chính).",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d1-008",
    "question": "Cho các mệnh đề sau về Lược đồ CSDL và Thể hiện CSDL:\n(I) Lược đồ CSDL là toàn bộ bản mô tả cấu trúc của CSDL.\n(II) Toàn bộ dữ liệu lưu trữ tại một thời điểm nhất định là một thể hiện của CSDL.\n(III) Nhiều thể hiện của CSDL có thể cùng tương ứng với một lược đồ CSDL duy nhất.\nSố lượng mệnh đề ĐÚNG là:",
    "options": [
      "Chỉ có 2 mệnh đề đúng là mệnh đề số (I) và số (II)",
      "Chỉ có duy nhất 1 mệnh đề đúng là mệnh đề số (I)",
      "Cả 3 mệnh đề (I), (II) và (III) đều hoàn toàn chính xác",
      "Không có mệnh đề nào đúng trong cả ba mệnh đề trên"
    ],
    "answer": 2,
    "explanation": "Cả 3 mệnh đề đều đúng chuẩn giáo trình: Lược đồ mô tả cấu trúc; Thể hiện là dữ liệu tại một thời điểm; Cùng một lược đồ có thể có nhiều thể hiện khác nhau qua thời gian.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn giữa Lược đồ (tĩnh) và Thể hiện (động thay đổi theo thời gian).",
      "trickWord": "Bẫy phân biệt Schema (Lược đồ) và Instance (Thể hiện) qua chùm mệnh đề",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.5",
      "tip": "Lược đồ = Khung nhà (Cố định); Thể hiện = Đồ đạc trong nhà tại thời điểm t (Thay đổi liên tục)."
    }
  },
  {
    "id": "db-c2-d1-009",
    "question": "Cho quan hệ r gồm 5 thuộc tính U = {A, B, C, D, E}. Biết K = {A, B} là một khóa của r. Tập thuộc tính nào sau đây CHẮC CHẮN là một siêu khóa của r?",
    "options": [
      "Tập thuộc tính {A, B, C} vì nó là tập cha chứa khóa {A, B}",
      "Tập thuộc tính {B, C, D} vì nó chứa tới ba thuộc tính khác",
      "Tập thuộc tính {A} vì nó là thuộc tính đứng đầu trong bảng",
      "Tập thuộc tính {C, D, E} vì nó tập hợp các thuộc tính phía sau"
    ],
    "answer": 0,
    "explanation": "Theo tính chất của siêu khóa: Mọi tập con của U chứa một khóa (hoặc chứa một siêu khóa) đều là một siêu khóa. Vì {A, B} là khóa nên mọi tập chứa {A, B} như {A, B, C} đều là siêu khóa.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người chọn {A} vì nghĩ rút gọn khóa, hoặc chọn {B,C,D} vì có nhiều thuộc tính hơn.",
      "trickWord": "Bẫy tính chất tập cha của siêu khóa (Super Key expansion property)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.4.a",
      "tip": "Khóa K ⊆ SK ⊆ U ➔ Cứ tập nào CHỨA TRỌN VẸN khóa K thì tập đó CHẮC CHẮN là Siêu khóa."
    }
  },
  {
    "id": "db-c2-d1-010",
    "question": "Tình huống: Khi cài đặt cấu trúc lưu trữ của quan hệ NHANVIEN ở Mức vật lý bằng ngôn ngữ C, thành phần nào dưới đây thể hiện mối liên kết giữa các bản ghi của tệp?",
    "options": [
      "Một mảng số nguyên một chiều gồm một triệu phần tử lưu số thứ tự",
      "Một con trỏ kiểu cấu trúc struct NHANVIEN *next trỏ tới bản ghi kế tiếp",
      "Một chuỗi ký tự cố định chứa họ tên của người quản trị máy chủ CSDL",
      "Một biến logic boolean chỉ nhận giá trị đúng hoặc sai trong hàm main"
    ],
    "answer": 1,
    "explanation": "Giáo trình đưa ra đoạn mã C minh họa mức vật lý: `struct NHANVIEN *next; // con trỏ đến bản ghi tiếp theo của tệp NHANVIEN` để tổ chức danh sách liên kết các bản ghi.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh ít chú ý ví dụ code C ở mức vật lý trong giáo trình nên dễ đoán mò sang mảng hoặc biến boolean.",
      "trickWord": "Bẫy cài đặt mức vật lý (Physical Schema) trong giáo trình bằng cấu trúc struct C",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.5.b",
      "tip": "Mức vật lý struct C = Con trỏ `*next` dùng để liên kết tệp bản ghi trên thiết bị đĩa."
    }
  },
  {
    "id": "db-c2-d1-011",
    "question": "Ký hiệu toán học chuẩn mực của phép chọn (Selection) và phép chiếu (Projection) trong đại số quan hệ lần lượt là:",
    "options": [
      "Ký hiệu ∪ (hợp) cho phép chọn và ký hiệu ∩ (giao) cho phép chiếu",
      "Ký hiệu π (pi) cho phép chọn và ký hiệu σ (sigma) cho phép chiếu",
      "Ký hiệu σ (sigma) cho phép chọn và ký hiệu π (pi) cho phép chiếu",
      "Ký hiệu ⋈ (join) cho phép chọn và ký hiệu × (nhân) cho phép chiếu"
    ],
    "answer": 2,
    "explanation": "Trong ĐSQH: Phép chọn ký hiệu bằng chữ cái Hy Lạp σ (sigma); Phép chiếu ký hiệu bằng chữ cái Hy Lạp π (pi).",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d1-012",
    "question": "Điều kiện bắt buộc nào sau đây phải được thỏa mãn để thực hiện các phép toán Hợp (∪), Giao (∩) và Hiệu (−)?",
    "options": [
      "Hai quan hệ bắt buộc phải do cùng một nhân viên tạo ra trong cùng một ngày",
      "Hai quan hệ tham gia bắt buộc phải hoàn toàn rời nhau không có thuộc tính chung",
      "Số lượng các dòng trong hai quan hệ bắt buộc phải bằng nhau tuyệt đối",
      "Hai quan hệ tham gia bắt buộc phải tương thích (có cùng tập thuộc tính U)"
    ],
    "answer": 3,
    "explanation": "Các phép toán tập hợp Hợp (∪), Giao (∩), Hiệu (−) chỉ thực hiện được trên hai quan hệ tương thích với nhau (nghĩa là có cùng tập thuộc tính U1 = U2).",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d1-013",
    "question": "Thao tác tự động đặc trưng nào sau đây LUÔN LUÔN diễn ra khi thực hiện phép chiếu π_X(r) trên quan hệ r?",
    "options": [
      "Tự động xóa sạch toàn bộ các thuộc tính có trong tập thuộc tính X",
      "Tự động chọn bộ đại diện trong các bộ giống nhau (loại bỏ trùng lặp)",
      "Tự động nhân đôi số lượng các bộ dữ liệu có trong kết quả trả về",
      "Tự động sắp xếp các dòng theo thứ tự bảng chữ cái tiếng Anh từ A-Z"
    ],
    "answer": 1,
    "explanation": "Thực hiện phép chiếu gồm 2 thao tác: 1) Giữ lại các thuộc tính trong tập X; 2) Chọn bộ đại diện trong các bộ giống nhau (loại bỏ trùng lặp).",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d1-014",
    "question": "Điền vào chỗ trống: \"Kết quả của phép tích Descartes r × s trên hai quan hệ rời nhau R1(A1...An) và R2(B1...Bm) là một quan hệ gồm các ...(1)..., và số lượng bộ của r × s bằng ...(2)...\"",
    "options": [
      "(n+m)-bộ / tích số bộ của r nhân với số bộ của s",
      "(n-m)-bộ / hiệu số bộ của r trừ cho số bộ của s",
      "(n×m)-bộ / tổng số bộ của r cộng với số bộ của s",
      "bộ đơn lẻ / giá trị lớn nhất giữa số bộ r và s"
    ],
    "answer": 0,
    "explanation": "Kết quả của phép tích Descartes là quan hệ gồm các (n+m)-bộ, và số bộ của r × s bằng (số bộ của r) × (số bộ của s).",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d1-015",
    "question": "Phát biểu nào sau đây phản ánh ĐÚNG tính chất giao hoán của phép chọn (Selection) trong đại số quan hệ?",
    "options": [
      "Các phép chọn không bao giờ có tính giao hoán trong mọi trường hợp",
      "σ_C1(σ_C2(R)) = π_C1(π_C2(R)) với mọi biểu thức logic C1 và C2",
      "σ_C1(σ_C2(R)) = σ_C2(σ_C1(R)) với mọi biểu thức logic C1 và C2",
      "Tính giao hoán chỉ xảy ra khi quan hệ R hoàn toàn không có dữ liệu"
    ],
    "answer": 2,
    "explanation": "Giáo trình khẳng định: Các phép chọn có tính giao hoán: σ_C1(σ_C2(R)) = σ_C2(σ_C1(R)).",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d1-016",
    "question": "Cho hai quan hệ tương thích r và s. Biểu thức nào sau đây diễn tả ĐÚNG định nghĩa của phép hiệu (r − s)?",
    "options": [
      "r − s = { t | t ∉ r ∧ t ∉ s } (không thuộc r cũng không thuộc s)",
      "r − s = { t | t ∈ r ∨ t ∈ s } (thuộc r hoặc thuộc về tập s)",
      "r − s = { t | t ∈ r ∧ t ∈ s } (đồng thời vừa thuộc r vừa thuộc s)",
      "r − s = { t | t ∈ r ∧ t ∉ s } (thuộc r nhưng không thuộc s)"
    ],
    "answer": 3,
    "explanation": "Hiệu của hai quan hệ tương thích r, s là quan hệ gồm các bộ thuộc r nhưng không thuộc s: r − s = { t | t ∈ r ∧ t ∉ s }.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d1-017",
    "question": "Mục đích chính của việc sử dụng Phép đặt lại tên (Rename) trong đại số quan hệ là gì?",
    "options": [
      "Đặt tên cho các quan hệ trung gian giúp biểu thức rõ ràng, dễ hiểu hơn",
      "Xóa bỏ vĩnh viễn tên của tác giả viết ra hệ quản trị cơ sở dữ liệu",
      "Tự động dịch tên các cột từ tiếng Việt sang tiếng Anh cho máy tính hiểu",
      "Thay đổi tên nhà cung cấp dịch vụ máy chủ đám mây đang lưu trữ CSDL"
    ],
    "answer": 0,
    "explanation": "Để trả lời câu hỏi phức tạp cần tổ hợp nhiều phép toán, dùng phép đặt tên để đặt tên cho các quan hệ trung gian và thuộc tính, giúp biểu thức mạch lạc.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d1-018",
    "question": "Cho quan hệ R gồm 10 dòng và quan hệ S gồm 5 dòng. Biết R và S rời nhau. Hỏi phép tích Descartes R × S có bao nhiêu dòng và thuộc tính thế nào?",
    "options": [
      "Có đúng 15 dòng và số thuộc tính bằng số thuộc tính của R trừ thuộc tính S",
      "Có đúng 50 dòng và số thuộc tính bằng tổng số thuộc tính của R cộng với S",
      "Có đúng 5 dòng và số thuộc tính bằng số thuộc tính lớn nhất giữa hai quan hệ",
      "Có đúng 2 dòng và số thuộc tính bằng tích số thuộc tính của hai quan hệ đó"
    ],
    "answer": 1,
    "explanation": "Số dòng của R × S = 10 × 5 = 50 dòng. Số thuộc tính là n + m (tổng số thuộc tính của hai quan hệ).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm phép nhân tích Descartes với phép cộng số dòng (10 + 5 = 15).",
      "trickWord": "Bẫy số dòng và số thuộc tính của phép tích Descartes (Cartesian Product)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.4",
      "tip": "Tích Descartes R × S: Dòng = |R| × |S| (nhân); Cột = n + m (cộng)."
    }
  },
  {
    "id": "db-c2-d1-019",
    "question": "Biểu thức nào sau đây cho kết quả tương đương với phép giao r ∩ s khi chỉ sử dụng phép hiệu (−)?",
    "options": [
      "r − (s − r) (lấy r trừ đi phần thuộc s nhưng không thuộc về r)",
      "(r − s) − r (lấy hiệu của r và s trừ tiếp cho quan hệ ban đầu)",
      "(r ∪ s) − r (lấy hợp của hai quan hệ rồi trừ đi quan hệ đầu tiên)",
      "r − (r − s) (lấy r trừ đi phần thuộc r nhưng không thuộc s)"
    ],
    "answer": 3,
    "explanation": "Theo lý thuyết tập hợp: r ∩ s = r − (r − s). Vì (r − s) là phần chỉ thuộc r mà không thuộc s, khi lấy r trừ đi phần này sẽ thu được chính xác phần chung (giao).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Dễ nhầm với r − (s − r) hoặc (r ∪ s) − r.",
      "trickWord": "Bẫy biến đổi tương đương phép giao qua phép hiệu trong lý thuyết tập hợp",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.7 & II.8",
      "tip": "Công thức tập hợp kinh điển: r ∩ s = r − (r − s) = s − (s − r)."
    }
  },
  {
    "id": "db-c2-d1-020",
    "question": "Cho bảng SINHVIEN có 100 sinh viên, trong đó chỉ có 5 quê quán khác nhau. Hỏi kết quả của phép chiếu π_QueQuan(SINHVIEN) có bao nhiêu dòng?",
    "options": [
      "Có đúng 20 dòng vì lấy 100 chia cho 5 ra số dòng trung bình",
      "Có đúng 100 dòng vì phép chiếu luôn giữ nguyên số dòng của bảng",
      "Có đúng 5 dòng vì phép chiếu tự động khử các giá trị trùng lặp",
      "Có đúng 0 dòng vì quê quán không phải là thuộc tính khóa chính"
    ],
    "answer": 2,
    "explanation": "Phép chiếu toán học luôn tự động loại bỏ các bộ trùng lặp để chọn bộ đại diện. Vì chỉ có 5 quê quán khác nhau nên kết quả chiếu chỉ có đúng 5 dòng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay quen với lệnh SELECT QueQuan trong SQL (mặc định không khử trùng lặp nếu thiếu DISTINCT) nên chọn 100 dòng.",
      "trickWord": "Bẫy khử trùng lặp bắt buộc của phép chiếu trong Đại số quan hệ toán học",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.3",
      "tip": "Đại số quan hệ toán học: Phép chiếu π LUÔN LUÔN khử trùng lặp (khác với SQL SELECT thuần túy)."
    }
  },
  {
    "id": "db-c2-d1-021",
    "question": "Phép kết nối tự nhiên (Natural Join — ký hiệu * hoặc ⋈) giữa hai quan hệ có đặc điểm nào dưới đây?",
    "options": [
      "Tự động cộng giá trị số của tất cả các cột có cùng tên lại với nhau",
      "Kết nối bằng tại thuộc tính trùng tên và loại bỏ một thuộc tính trùng",
      "Chỉ kết nối được nếu hai quan hệ hoàn toàn không có thuộc tính chung",
      "Bắt buộc người dùng phải chỉ định rõ tên của khóa chính trong câu lệnh"
    ],
    "answer": 1,
    "explanation": "Kết nối tự nhiên thực hiện kết nối bằng tại các thuộc tính trùng tên của 2 quan hệ, đồng thời loại bỏ một trong hai thuộc tính trùng tên khỏi kết quả để tránh dư thừa.",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d1-022",
    "question": "Trong đại số quan hệ, phép toán nào chuyên dùng để giải quyết các câu hỏi mang ý nghĩa \"VỚI MỌI\" (∀) hoặc \"TẤT CẢ\"?",
    "options": [
      "Phép chia (Division — ký hiệu ÷) trong đại số quan hệ",
      "Phép chiếu (Projection — ký hiệu π) trên tập thuộc tính",
      "Phép chọn (Selection — ký hiệu σ) với điều kiện logic",
      "Phép tích Descartes (Cartesian Product — ký hiệu ×)"
    ],
    "answer": 0,
    "explanation": "Ý nghĩa nghiệp vụ của phép chia (÷): Là công cụ toán học tương ứng với lượng từ phổ quát \"VỚI MỌI\" (∀), chuyên dùng để giải các bài toán mang ý nghĩa \"TẤT CẢ\".",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d1-023",
    "question": "Khi kết nối hai quan hệ r(A, B, C) và s(C, D) bằng phép kết nối tự nhiên r * s, lược đồ quan hệ kết quả gồm các thuộc tính nào?",
    "options": [
      "Lược đồ kết quả chỉ gồm duy nhất một thuộc tính chung là (C)",
      "Lược đồ kết quả gồm 5 thuộc tính là (A, B, C, C, D) có hai cột C",
      "Lược đồ kết quả gồm 4 thuộc tính là (A, B, C, D) không bị lặp lại",
      "Lược đồ kết quả gồm 3 thuộc tính là (A, B, D) đã bị xóa cột C"
    ],
    "answer": 2,
    "explanation": "Phép kết nối tự nhiên loại bỏ một trong hai thuộc tính trùng tên (C), do đó lược đồ kết quả có 4 thuộc tính: (A, B, C, D).",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d1-024",
    "question": "Cho CSDL Quản lý bán hàng: Hanghoa(MaHG, TenHG, DVT, Dongia, Cohang). Biểu thức nào sau đây tìm các mặt hàng đang HẾT HÀNG (Cohang = 0)?",
    "options": [
      "Hanghoa × σ_(Cohang = 0)(Hanghoa) (dùng phép tích Descartes hai bảng)",
      "π_(Cohang = 0)(Hanghoa) (dùng phép chiếu với biểu thức logic bằng 0)",
      "Hanghoa ÷ σ_(Cohang = 0)(Hanghoa) (dùng phép chia đại số quan hệ)",
      "σ_(Cohang = 0)(Hanghoa) (dùng phép chọn với điều kiện Cohang = 0)"
    ],
    "answer": 3,
    "explanation": "Để lọc các dòng thỏa mãn điều kiện Cohang = 0, ta sử dụng phép chọn: σ_(Cohang = 0)(Hanghoa).",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d1-025",
    "question": "Phát biểu nào sau đây là ĐÚNG khi nói về phép kết nối điều kiện (θ-Join)?",
    "options": [
      "Là phép tích Descartes kèm theo phép chọn theo điều kiện so sánh θ",
      "Bắt buộc toán tử so sánh θ phải luôn luôn là phép so sánh lớn hơn",
      "Chỉ thực hiện được khi hai quan hệ có cùng số lượng dòng bằng nhau",
      "Kết quả luôn luôn có số dòng nhiều hơn phép tích Descartes của hai bảng"
    ],
    "answer": 0,
    "explanation": "Bản chất của θ-Join: r ⋈_θ s chính là thực hiện phép tích Descartes r × s rồi chọn lại các bộ thỏa điều kiện so sánh θ: σ_θ(r × s).",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d1-026",
    "question": "Cho CSDL Bán hàng gồm Khach(MaKH, Hoten...) và Hoadon(SoHD, Ngaylap, MaKH...). Biểu thức nào in ra danh sách khách hàng ĐÃ TỪNG mua ít nhất một hóa đơn?",
    "options": [
      "Khach ÷ π_(MaKH)(Hoadon) (lấy quan hệ Khach chia cho mã khách hàng)",
      "Khach − Hoadon (lấy quan hệ Khach trừ đi toàn bộ quan hệ Hoadon)",
      "π_(MaKH, Hoten)(Khach * Hoadon) (kết nối tự nhiên giữa Khach và Hoadon)",
      "π_(MaKH, Hoten)(Khach) × Hoadon (nhân tích Descartes Khach với Hoadon)"
    ],
    "answer": 2,
    "explanation": "Kết nối tự nhiên Khach * Hoadon sẽ giữ lại những khách hàng có MaKH xuất hiện trong bảng Hoadon (đã từng mua hàng), sau đó chiếu lấy MaKH, Hoten.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d1-027",
    "question": "Điền vào chỗ trống: \"Phép chia r ÷ s với r trên lược đồ R(A1...An) và s trên lược đồ con S(B1...Bm) sẽ cho kết quả là một quan hệ trên lược đồ ...(1)... gồm các ...(2)...\"",
    "options": [
      "R ∪ S / (n+m)-bộ xuất hiện ở cả hai quan hệ r và s",
      "R − S / (n−m)-bộ ghép với mọi bộ của s đều thuộc về r",
      "R ∩ S / m-bộ có giá trị lớn nhất trong quan hệ r",
      "R × S / n-bộ không có giá trị rỗng ở bất kỳ cột nào"
    ],
    "answer": 1,
    "explanation": "Định nghĩa phép chia: r ÷ s là quan hệ trên lược đồ R − S gồm các (n−m)-bộ t sao cho với mọi bộ ts ∈ s thì bộ ghép (t, ts) đều thuộc r.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d1-028",
    "question": "Cho CSDL Bán hàng. Biểu thức ĐSQH nào dưới đây tìm danh sách Mã khách hàng (MaKH) CHƯA TỪNG mua bất kỳ một hóa đơn nào?",
    "options": [
      "σ_(SoHD = NULL)(Khach * Hoadon) (chọn các dòng có số hóa đơn bị rỗng)",
      "π_(MaKH)(Khach) ∩ π_(MaKH)(Hoadon) (lấy phần giao giữa Khach và Hoadon)",
      "π_(MaKH)(Khach * Hoadon) (kết nối tự nhiên giữa hai bảng Khach và Hoadon)",
      "π_(MaKH)(Khach) − π_(MaKH)(Hoadon) (chiếu MaKH của Khach trừ MaKH Hoadon)"
    ],
    "answer": 3,
    "explanation": "Để tìm đối tượng \"chưa từng / không\", ta lấy toàn bộ tập khách hàng trừ đi tập khách hàng đã mua (xuất hiện trong Hoadon): π_MaKH(Khach) − π_MaKH(Hoadon).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn cách Join rồi lọc IS NULL kiểu SQL, nhưng trong ĐSQH chuẩn phép hiệu (−) là công cụ toán học chuẩn xác nhất.",
      "trickWord": "Bẫy bài toán tìm đối tượng \"chưa từng / không bao giờ\" bằng phép hiệu ĐSQH",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.8 & IV.2",
      "tip": "Tìm đối tượng \"KHÔNG / CHƯA TỪNG\" ➔ Dùng PHÉP HIỆU: Tập_Tổng_Thể − Tập_Đã_Làm."
    }
  },
  {
    "id": "db-c2-d1-029",
    "question": "Cho CSDL Sinh viên: SINHVIEN(MaSV, Hoten...), DETAI(MaDT, TenDT...), SV_DT(MaSV, MaDT, KQ...). Biểu thức nào tìm sinh viên đã thực hiện TẤT CẢ các đề tài?",
    "options": [
      "π_(MaSV, MaDT)(SV_DT) − π_(MaDT)(DETAI) (dùng phép trừ hai tập)",
      "π_(MaSV, MaDT)(SV_DT) * π_(MaDT)(DETAI) (dùng kết nối tự nhiên)",
      "π_(MaSV, MaDT)(SV_DT) ÷ π_(MaDT)(DETAI) (dùng phép chia ĐSQH)",
      "π_(MaSV, MaDT)(SV_DT) ∪ π_(MaDT)(DETAI) (dùng phép hợp hai bảng)"
    ],
    "answer": 2,
    "explanation": "Để tìm sinh viên thực hiện TẤT CẢ các đề tài, ta lấy quan hệ chiếu (MaSV, MaDT) của bảng thực hiện chia cho toàn bộ tập mã đề tài π_MaDT(DETAI).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nhầm với phép Natural Join hoặc phép Hợp.",
      "trickWord": "Bẫy ứng dụng phép chia (Division) giải bài toán lượng từ phổ quát \"TẤT CẢ\"",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.10",
      "tip": "Bài toán \"TẤT CẢ / VỚI MỌI\" ➔ Dùng PHÉP CHIA: Quan_hệ_thực_hiện ÷ Tập_tiêu_chí_toàn_bộ."
    }
  },
  {
    "id": "db-c2-d1-030",
    "question": "Giả sử bảng r có 5 dòng và bảng s có 3 dòng. Điều kiện kết nối θ trong phép kết nối r ⋈_θ s không thỏa mãn với bất kỳ cặp bộ nào. Kết quả trả về là gì?",
    "options": [
      "Một quan hệ rỗng ∅ không chứa bất kỳ dòng nào nhưng vẫn có lược đồ",
      "Một quan hệ chứa đúng 15 dòng dữ liệu của phép tích Descartes",
      "Hệ quản trị CSDL lập tức báo lỗi cú pháp và dừng hoạt động máy chủ",
      "Một quan hệ chứa đúng 8 dòng dữ liệu của phép hợp hai quan hệ"
    ],
    "answer": 0,
    "explanation": "Khi không có cặp bộ nào thỏa mãn điều kiện kết nối θ, tập kết quả trả về là một quan hệ rỗng (r = ∅), cấu trúc lược đồ vẫn được giữ nguyên.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ máy chủ sẽ báo lỗi hoặc trả về tích Descartes đầy đủ.",
      "trickWord": "Bẫy kết quả quan hệ rỗng (Empty Relation) khi không có bộ nào khớp điều kiện Join",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.5",
      "tip": "Không có dòng nào thỏa điều kiện kết nối ➔ Kết quả là Quan hệ rỗng (r = ∅), không phải lỗi cú pháp."
    }
  },
  {
    "id": "db-c2-d1-031",
    "question": "Trong quy trình 7 bước chuyển đổi ERD sang quan hệ, Bước 1 quy định thuộc tính phức hợp (Composite attribute) được chuyển đổi như thế nào?",
    "options": [
      "Bắt buộc phải tách thành một bảng quan hệ riêng biệt có khóa ngoại",
      "Chỉ lấy các thuộc tính đơn thành phần của nó, không lấy thuộc tính gộp",
      "Gộp tất cả lại thành một chuỗi ký tự duy nhất và mã hóa bảo mật",
      "Xóa bỏ hoàn toàn thuộc tính phức hợp vì mô hình quan hệ không hỗ trợ"
    ],
    "answer": 1,
    "explanation": "Bước 1 quy định: Thuộc tính phức hợp (composite) chỉ lấy các thuộc tính đơn thành phần của nó (ví dụ: Địa chỉ gồm Đường, Quận, TP thì chỉ lấy Đường, Quận, TP).",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d1-032",
    "question": "Theo quy tắc chuyển đổi ERD sang quan hệ, thuộc tính đa trị (Multivalued attribute) của một thực thể được xử lý như thế nào?",
    "options": [
      "Tự động nhân bản thực thể ban đầu thành mười bản sao giống hệt nhau",
      "Lưu tất cả các giá trị vào một ô duy nhất ngăn cách nhau bằng dấu chấm phẩy",
      "Ép buộc người dùng chỉ được phép chọn duy nhất một giá trị đầu tiên nhập vào",
      "Tách thành một quan hệ riêng, có khóa ngoại tham chiếu về khóa chính quan hệ gốc"
    ],
    "answer": 3,
    "explanation": "Bước 1c: Thuộc tính đa trị được tách thành một quan hệ riêng, có khóa ngoại tham chiếu về khóa chính của quan hệ ban đầu (tạo quan hệ 1:N).",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d1-033",
    "question": "Khi chuyển đổi mối quan hệ một - nhiều (1:N) hai ngôi sang mô hình quan hệ, khóa ngoại được đặt ở đâu?",
    "options": [
      "Khóa chính ở phía \"một\" (1) sẽ trở thành khóa ngoại ở quan hệ phía \"nhiều\" (N)",
      "Khóa chính ở phía \"nhiều\" (N) sẽ trở thành khóa ngoại ở quan hệ phía \"một\" (1)",
      "Bắt buộc phải tạo một quan hệ kết hợp mới ở giữa để chứa hai khóa ngoại",
      "Khóa ngoại được đặt ngẫu nhiên ở một trong hai bảng tùy ý người lập trình"
    ],
    "answer": 0,
    "explanation": "Quy tắc Bước 3 cho quan hệ 1:N: Khóa chính ở phía \"một\" (1) trở thành khóa ngoại ở quan hệ phía \"nhiều\" (N).",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d1-034",
    "question": "Khóa chính của quan hệ được tạo từ một Thực thể yếu (Weak Entity) trong Bước 2 bao gồm những thành phần nào?",
    "options": [
      "Chỉ bao gồm duy nhất khóa riêng phần của chính bản thân thực thể yếu đó",
      "Khóa riêng phần của thực thể yếu kết hợp với khóa chính của thực thể mạnh",
      "Một số nguyên ngẫu nhiên do hệ điều hành máy tính tự động cấp phát khi lưu",
      "Tập hợp tất cả các thuộc tính mô tả có trong thực thể yếu đó gộp chung lại"
    ],
    "answer": 1,
    "explanation": "Bước 2 quy định: Khóa chính của quan hệ thực thể yếu gồm: Khóa riêng phần (partial key) + Khóa chính của quan hệ thực thể mạnh (khóa ngoại NOT NULL).",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d1-035",
    "question": "Khi chuyển đổi mối quan hệ nhiều - nhiều (M:N) hai ngôi sang mô hình quan hệ, phương án xử lý chuẩn mực là gì?",
    "options": [
      "Xóa bỏ mối quan hệ nhiều-nhiều vì mô hình quan hệ cấm hoàn toàn quan hệ M:N",
      "Chọn một thực thể bất kỳ làm bảng chính và thêm khóa ngoại vào thực thể kia",
      "Tạo một quan hệ mới, khóa chính là tổ hợp khóa chính của hai thực thể tham gia",
      "Chuyển đổi thành hai mối quan hệ một - một độc lập không liên quan với nhau"
    ],
    "answer": 2,
    "explanation": "Bước 3 cho quan hệ M:N: Tạo quan hệ mới, khóa chính là tổ hợp khóa chính của hai thực thể tham gia (đồng thời là khóa ngoại tương ứng đến từng thực thể).",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d1-036",
    "question": "Trong mối quan hệ một - một (1:1), vị trí đặt khóa ngoại và các thuộc tính riêng của mối quan hệ được quy định như thế nào?",
    "options": [
      "Khóa ngoại được đặt ở cả hai bảng và trỏ chéo lẫn nhau để đảm bảo cân bằng",
      "Khóa chính ở phía tùy chọn làm khóa ngoại ở phía bắt buộc kèm thuộc tính riêng",
      "Bắt buộc phải tạo thêm một bảng thứ ba ở giữa dù là quan hệ một - một",
      "Khóa chính ở phía bắt buộc làm khóa ngoại ở phía tùy chọn kèm thuộc tính riêng"
    ],
    "answer": 3,
    "explanation": "Quy tắc Bước 3 cho quan hệ 1:1: Khóa chính ở phía bắt buộc làm khóa ngoại ở phía tùy chọn. Tất cả thuộc tính của mối quan hệ đều được mang sang phía tùy chọn này.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d1-037",
    "question": "Điền vào chỗ trống: \"Đối với mối quan hệ ba ngôi (Ternary Relationship), quy tắc chuẩn sẽ tạo ra ...(1)... quan hệ, trong đó có một quan hệ kết hợp chứa các ...(2)... tham chiếu đến các thực thể tham gia.\"",
    "options": [
      "duy nhất 1 / thuộc tính đơn",
      "n + 1 (4 quan hệ) / khóa ngoại",
      "n − 1 (2 quan hệ) / khóa chính",
      "vô số / trường dữ liệu rỗng"
    ],
    "answer": 1,
    "explanation": "Bước 6: Quy tắc n + 1 quan hệ: Với quan hệ ba ngôi sẽ tạo ra 3 + 1 = 4 quan hệ (3 quan hệ cho 3 thực thể và 1 quan hệ kết hợp chứa các khóa ngoại).",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d1-038",
    "question": "Tình huống: Thực thể NHANVIEN có mối quan hệ một ngôi 1:N \"Quản lý\" (Một nhân viên quản lý nhiều nhân viên khác). Khi chuyển sang mô hình quan hệ sẽ xử lý như thế nào?",
    "options": [
      "Hệ thống tự động xóa bỏ những nhân viên không có người quản lý trực tiếp",
      "Bắt buộc phải tách thành hai bảng: NHANVIEN_SEP và NHANVIEN_NHANVIEN",
      "Tạo thêm một khóa ngoại đệ quy trong cùng bảng NHANVIEN tham chiếu về MaNV",
      "Mô hình quan hệ từ chối hỗ trợ quan hệ một ngôi vì vi phạm lý thuyết tập hợp"
    ],
    "answer": 2,
    "explanation": "Bước 5: Với quan hệ một ngôi 1:N đệ quy, ta tạo một khóa ngoại đệ quy (ví dụ Manager_ID) nằm ngay trong cùng quan hệ NHANVIEN tham chiếu về khóa chính Employee_ID.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ phải tách thành 2 bảng riêng biệt cho Sếp và Nhân viên.",
      "trickWord": "Bẫy chuyển đổi quan hệ một ngôi 1:N đệ quy (Recursive Foreign Key)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục III.5.a",
      "tip": "Quan hệ đệ quy 1:N = Thêm Khóa ngoại đệ quy (Recursive FK) trong CHÍNH BẢNG ĐÓ."
    }
  },
  {
    "id": "db-c2-d1-039",
    "question": "Khi chuyển đổi mối quan hệ Cha/Con (Supertype/Subtype) như EMPLOYEE (cha) và HOURLY_EMPLOYEE (con), khóa chính của bảng con đóng vai trò gì?",
    "options": [
      "Vừa là khóa chính của quan hệ con, vừa là khóa ngoại tham chiếu đến khóa cha",
      "Chỉ là một thuộc tính thông thường không có tính chất duy nhất của bảng con",
      "Là một khóa độc lập hoàn toàn không có mối liên hệ nào với quan hệ cha",
      "Bắt buộc phải do người dùng tự nhập một mã số ngẫu nhiên không trùng lặp"
    ],
    "answer": 0,
    "explanation": "Bước 7: Khóa chính của quan hệ cha (Employee_Number) trở thành khóa chính đồng thời là khóa ngoại của các quan hệ con (H_Employee_Number), thiết lập quan hệ 1:1 giữa cha và con.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ bảng con phải tạo khóa chính riêng và thêm một cột khóa ngoại riêng biệt.",
      "trickWord": "Bẫy khóa chính kiêm khóa ngoại (PK is FK) trong mối quan hệ Supertype/Subtype",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục III.6.a",
      "tip": "Mô hình Cha/Con (Super/Subtype) = Khóa chính của bảng con VỪA LÀ PK VỪA LÀ FK trỏ về cha."
    }
  },
  {
    "id": "db-c2-d1-040",
    "question": "Một thực thể kết hợp SHIPMENT giữa CUSTOMER và VENDOR có sẵn danh hiệu riêng là Shipment_No. Khóa chính của quan hệ SHIPMENT sau khi chuyển đổi sẽ là gì?",
    "options": [
      "Thực thể kết hợp có danh hiệu riêng thì không được phép có bất kỳ khóa ngoại nào",
      "Khóa chính bắt buộc phải là tổ hợp hai khóa ngoại (Customer_ID, Vendor_ID)",
      "Khóa chính là tổ hợp của cả ba thuộc tính (Shipment_No, Customer_ID, Vendor_ID)",
      "Khóa chính là danh hiệu riêng Shipment_No của chính thực thể kết hợp đó"
    ],
    "answer": 3,
    "explanation": "Bước 4b quy định: Nếu thực thể kết hợp có danh hiệu riêng (natural identifier) như Shipment_No, thì khóa chính là danh hiệu riêng đó. Customer_ID và Vendor_ID đóng vai trò là các khóa ngoại thông thường.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay áp dụng máy móc quy tắc M:N và chọn khóa chính tổ hợp 2 khóa ngoại.",
      "trickWord": "Bẫy thực thể kết hợp có danh hiệu riêng (Associative Entity with Natural Identifier)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục III.3.b",
      "tip": "Thực thể kết hợp CÓ danh hiệu riêng ➔ Khóa chính LÀ danh hiệu riêng đó (không ghép tổ hợp)."
    }
  }
];
