/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG II: MÔ HÌNH DỮ LIỆU QUAN HỆ (RELATIONAL DATA MODEL) — BỘ ĐỀ 2
   SỐ LƯỢNG: 40 CÂU CỐ ĐỊNH (30% DỄ - 40% TRUNG BÌNH - 30% KHÓ/BẪY)
   MÃ BỘ ĐỀ: db-c2-d2-001 ĐẾN db-c2-d2-040
   ĐẶC TRƯNG: TÍCH HỢP 6 DẠNG CÂU HỎI ĐA DẠNG PHỦ KÍN 4 CHUYÊN ĐỀ
   CHUẨN KỸ THUẬT: ĐỘ LỆCH CHIỀU DÀI DELTA L <= 15 CHARS, CÂN BẰNG ĐÁP ÁN
   ============================================================ */

export const questionsDbCh2Part2 = [
  {
    "id": "db-c2-d2-001",
    "question": "Tập hợp các giá trị hợp lệ mà một thuộc tính có thể nhận được trong cơ sở dữ liệu được gọi là gì?",
    "options": [
      "Tập hợp các siêu khóa dự tuyển của toàn bộ hệ thống CSDL",
      "Miền giá trị (Domain, ký hiệu là D hay dom) của thuộc tính đó",
      "Lược đồ quan hệ con định nghĩa ở mức khung nhìn ngoài",
      "Tích Descartes của hai bảng không có thuộc tính chung"
    ],
    "answer": 1,
    "explanation": "Miền giá trị (domain, ký hiệu D(A) hay dom(A)) là tập các giá trị hợp lệ mà thuộc tính A có thể nhận (ví dụ: điểm thi là số thực từ 0 đến 10).",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d2-002",
    "question": "Lược đồ quan hệ (Relation Schema, ký hiệu R(U)) được định nghĩa chuẩn xác theo giáo trình là gì?",
    "options": [
      "Tập tất cả các thuộc tính cần quản lý của một đối tượng cùng mối liên hệ",
      "Danh sách mật khẩu của người quản trị CSDL lưu trữ trên đĩa cứng",
      "Tổng số lượng các dòng dữ liệu hiện đang có trong bảng tại thời điểm t",
      "Giao diện đồ họa hiển thị các nút bấm điều khiển của ứng dụng web"
    ],
    "answer": 0,
    "explanation": "Lược đồ quan hệ (Relation Schema) là tập tất cả các thuộc tính cần quản lý của một đối tượng cùng với những mối liên hệ giữa chúng, ký hiệu R(U).",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d2-003",
    "question": "Khái niệm \"Tân từ của lược đồ quan hệ\" (Predicate) có ý nghĩa bản chất là gì?",
    "options": [
      "Là tốc độ quay của đĩa cứng tính theo đơn vị số vòng trên mỗi phút",
      "Là tên của phần mềm diệt virus được cài đặt trên máy chủ cơ sở dữ liệu",
      "Là ý nghĩa ngữ nghĩa thực tế và quy tắc logic của lược đồ quan hệ đó",
      "Là số lượng các bảng trung gian cần tạo ra khi thiết kế cơ sở dữ liệu"
    ],
    "answer": 2,
    "explanation": "Tân từ của lược đồ quan hệ (Predicate) chính là ý nghĩa ngữ nghĩa của LĐQH (ví dụ: mỗi sinh viên có một mã số duy nhất, xác định họ tên, ngày sinh...).",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d2-004",
    "question": "Điền vào chỗ trống: \"Khóa chính (Primary Key) là ...(1)... được người phân tích chọn để cài đặt, còn các khóa tối thiểu khác gọi là ...(2)...\"",
    "options": [
      "tập tất cả thuộc tính / khóa đệ quy",
      "một siêu khóa bất kỳ / thuộc tính không khóa",
      "khóa ngoại tham chiếu / khóa riêng phần",
      "một khóa tối thiểu / khóa dự tuyển (Candidate Key)"
    ],
    "answer": 3,
    "explanation": "Khóa chính là MỘT khóa tối thiểu được chọn để cài đặt; các khóa tối thiểu còn lại không được chọn làm khóa chính được gọi là khóa dự tuyển (Candidate Key).",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d2-005",
    "question": "Nhận định nào sau đây là ĐÚNG khi nói về Khóa ngoại (Foreign Key) trong mô hình quan hệ?",
    "options": [
      "Là tập thuộc tính trong một quan hệ đóng vai trò là khóa của quan hệ khác",
      "Khóa ngoại bắt buộc phải có tên gọi hoàn toàn giống với tên của khóa chính",
      "Mỗi bảng chỉ được phép có tối đa duy nhất một khóa ngoại tham chiếu",
      "Khóa ngoại không bao giờ được phép nhận giá trị rỗng (NULL) trong mọi tình huống"
    ],
    "answer": 0,
    "explanation": "Khóa ngoài/Khóa ngoại là một tập hợp gồm một hay nhiều thuộc tính là khóa của một lược đồ quan hệ khác, giúp liên kết dữ liệu giữa các bảng.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d2-006",
    "question": "Phát biểu nào sau đây là SAI khi nói về thuộc tính không khóa (Non-Prime Attribute)?",
    "options": [
      "Một quan hệ có thể có nhiều thuộc tính không khóa để lưu thông tin mô tả đối tượng",
      "Thuộc tính không khóa là thuộc tính không tham gia vào bất kỳ khóa nào của bảng",
      "Thuộc tính không khóa là thuộc tính có tham gia vào ít nhất một khóa dự tuyển",
      "Trong bảng SINHVIEN(MaSV, Hoten, Diachi), HoTen là thuộc tính không khóa"
    ],
    "answer": 2,
    "explanation": "Khẳng định SAI là phương án A, vì thuộc tính tham gia vào khóa dự tuyển được gọi là THUỘC TÍNH KHÓA (Prime Attribute), không phải thuộc tính không khóa.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d2-007",
    "question": "Cho các nhận định sau về Siêu khóa (Super Key):\n(I) Mọi quan hệ đều có ít nhất một siêu khóa là tập U chứa tất cả thuộc tính.\n(II) Một siêu khóa có thể chứa các thuộc tính dư thừa không cần thiết.\n(III) Mọi siêu khóa đều là khóa chính của quan hệ.\nKhẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Cả 3 nhận định (I), (II) và (III) đều là những nhận định đúng",
      "Chỉ có nhận định (I) và (II) đúng, nhận định (III) là sai",
      "Chỉ có duy nhất nhận định (III) là nhận định hoàn toàn chính xác",
      "Tất cả các nhận định trên đều là nhận định hoàn toàn sai lệch"
    ],
    "answer": 1,
    "explanation": "Nhận định (I) và (II) đúng. Nhận định (III) sai vì siêu khóa có thể chứa thuộc tính dư thừa, chỉ có siêu khóa tối thiểu mới là khóa, và trong các khóa chỉ chọn 1 khóa làm khóa chính.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d2-008",
    "question": "Tình huống: Cho quan hệ R(A, B, C, D) có các khóa tối thiểu là {A, B} và {A, C}. Tập hợp các thuộc tính khóa (Prime Attributes) của R là:",
    "options": [
      "Tập {A, B, C, D} gồm toàn bộ tất cả các thuộc tính của quan hệ R",
      "Chỉ gồm tập {A} vì A là thuộc tính chung duy nhất của cả hai khóa",
      "Chỉ gồm tập {D} vì D là thuộc tính không tham gia vào bất kỳ khóa nào",
      "Tập {A, B, C} vì các thuộc tính này tham gia vào ít nhất một khóa"
    ],
    "answer": 3,
    "explanation": "Thuộc tính khóa là thuộc tính tham gia vào MỘT KHÓA BẤT KỲ. Hai khóa là {A, B} và {A, C} nên các thuộc tính khóa là A, B, C. Thuộc tính D là không khóa.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay lấy phần giao {A} thay vì lấy phần hợp của các khóa {A, B, C}.",
      "trickWord": "Bẫy xác định tập thuộc tính khóa (Prime Attributes) từ nhiều khóa dự tuyển",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.4.b",
      "tip": "Thuộc tính khóa (Prime) = Thuộc tính thuộc ÍT NHẤT 1 khóa ➔ HỢP tất cả các khóa lại: {A, B} ∪ {A, C} = {A, B, C}."
    }
  },
  {
    "id": "db-c2-d2-009",
    "question": "Cho bảng HOCBONG gồm 4 dòng dữ liệu. Nếu người dùng chèn thêm một dòng mới có đầy đủ 5 giá trị HOÀN TOÀN TRÙNG LẶP với một dòng đã có, theo lý thuyết tập hợp quan hệ sẽ thế nào?",
    "options": [
      "Toàn bộ bảng dữ liệu HOCBONG sẽ bị xóa sạch khỏi bộ nhớ của máy chủ",
      "Quan hệ sẽ tự động tăng số lượng dòng lên thành năm dòng dữ liệu khác nhau",
      "Quan hệ hoàn toàn không thay đổi vì tập hợp không chứa các phần tử trùng lặp",
      "Bảng HOCBONG sẽ tự động tách thành hai bảng quan hệ con hoàn toàn độc lập"
    ],
    "answer": 2,
    "explanation": "Theo lưu ý quan trọng của lý thuyết tập hợp trong giáo trình: Thêm vào một dòng (cột) giống với dòng (cột) đã có thì quan hệ KHÔNG THAY ĐỔI.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh thường nghĩ máy tính sẽ lưu thành 5 dòng hoặc báo lỗi chèn trùng.",
      "trickWord": "Bẫy bản chất quan hệ là một tập hợp toán học (Set of Tuples) không chấp nhận phần tử trùng",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.3.b",
      "tip": "Lý thuyết tập hợp: Tập {1, 2} ∪ {2} = {1, 2} ➔ Thêm dòng trùng lặp thì Quan hệ KHÔNG ĐỔI."
    }
  },
  {
    "id": "db-c2-d2-010",
    "question": "Cho quan hệ r(R) với tập thuộc tính U. Giả sử tồn tại hai bộ ti và tj trong r sao cho ti(X) = tj(X) (với ti khác tj). Ta có thể kết luận chắc chắn điều gì về tập thuộc tính X?",
    "options": [
      "Tập thuộc tính X chắc chắn là khóa chính được chọn của quan hệ r",
      "Tập thuộc tính X chắc chắn KHÔNG PHẢI là một siêu khóa của quan hệ r",
      "Tập thuộc tính X bắt buộc phải chứa toàn bộ tất cả thuộc tính của U",
      "Tập thuộc tính X là một khóa ngoại tham chiếu đến một bảng khác"
    ],
    "answer": 1,
    "explanation": "Định nghĩa siêu khóa đòi hỏi: với hai bộ khác nhau bất kỳ thì giá trị trên siêu khóa phải khác nhau (ti(SK) ≠ tj(SK)). Nếu tồn tại hai bộ khác nhau có giá trị trùng nhau trên X thì X dứt khoát không thể là siêu khóa.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người lúng túng trước định nghĩa phủ định của siêu khóa theo ngôn ngữ toán học.",
      "trickWord": "Bẫy điều kiện phủ định của định nghĩa Siêu khóa (Violation of Super Key constraint)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.4.a",
      "tip": "Trùng giá trị trên 2 dòng khác nhau ➔ X KHÔNG THỂ là Siêu khóa (và do đó không thể là Khóa)."
    }
  },
  {
    "id": "db-c2-d2-011",
    "question": "Đại số quan hệ (Relational Algebra) được coi là ưu điểm nổi bật của mô hình quan hệ chủ yếu vì lý do gì?",
    "options": [
      "Tiếp cận công cụ toán học vững chắc để xây dựng ngôn ngữ xử lý dữ liệu",
      "Giúp máy tính không bao giờ bị nhiễm virus độc hại từ mạng Internet",
      "Làm giảm giá thành mua sắm phần cứng máy chủ trung tâm dữ liệu",
      "Cho phép người dùng vẽ được các sơ đồ tư duy đa màu sắc trực quan"
    ],
    "answer": 0,
    "explanation": "Đại số quan hệ là phương pháp mô hình hóa các phép toán trên CSDL quan hệ, kế thừa kết quả toán học chặt chẽ để thiết lập các ngôn ngữ dữ liệu bậc cao như SQL.",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d2-012",
    "question": "Hai quan hệ r1 và r2 được gọi là \"Hai quan hệ rời nhau\" khi thỏa mãn điều kiện toán học nào?",
    "options": [
      "Hai quan hệ được tạo ra ở hai năm hoàn toàn khác biệt nhau",
      "Số lượng các dòng trong hai quan hệ hoàn toàn không bằng nhau",
      "Một quan hệ lưu trên đĩa cứng còn quan hệ kia lưu trên đám mây",
      "Chúng không có bất kỳ thuộc tính chung nào (giao của U1 và U2 bằng rỗng)"
    ],
    "answer": 3,
    "explanation": "Giáo trình định nghĩa: r1, r2 là hai quan hệ rời nhau nếu chúng không có thuộc tính chung (U1 ∩ U2 = ∅).",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d2-013",
    "question": "Phép chọn σ_C(r) sử dụng biểu thức điều kiện logic C. Kết quả đánh giá của biểu thức C trên mỗi bộ là gì?",
    "options": [
      "Chỉ nhận một trong hai giá trị chân lý logic: True (Đúng) hoặc False (Sai)",
      "Là một chuỗi ký tự tự do chứa họ tên của người viết câu truy vấn dữ liệu",
      "Là một số nguyên dương thể hiện dung lượng bộ nhớ cần dùng để lọc dòng",
      "Là một tệp hình ảnh nén lưu trữ vị trí của các bản ghi trên đĩa cứng"
    ],
    "answer": 0,
    "explanation": "Điều kiện C là một biểu thức logic trả về True hoặc False. Phép chọn giữ lại các bộ t sao cho C(t) = True.",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d2-014",
    "question": "Điền vào chỗ trống: \"Toán tử so sánh {<, ≤, >, ≥} trong điều kiện của phép chọn chỉ áp dụng cho thuộc tính có ...(1)..., nếu không có thứ tự thì chỉ được dùng toán tử ...(2)...\"",
    "options": [
      "dung lượng lớn / {EXISTS, NOT}",
      "kiểu dữ liệu chuỗi ký tự / {AND, OR}",
      "khóa chính tự tăng / {IN, LIKE}",
      "miền giá trị có thứ tự / {=, ≠}"
    ],
    "answer": 3,
    "explanation": "Lưu ý quan trọng trong giáo trình: Toán tử so sánh chỉ áp dụng cho thuộc tính có miền giá trị có thứ tự. Nếu miền không có thứ tự thì chỉ dùng {=, ≠}.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d2-015",
    "question": "Nhận định nào sau đây là SAI khi nói về phép hợp (Union — ký hiệu ∪) trong đại số quan hệ?",
    "options": [
      "Hợp của hai quan hệ tương thích là quan hệ gồm các bộ thuộc r1 hoặc thuộc r2",
      "Phép hợp có thể thực hiện tùy ý trên hai quan hệ bất kỳ không cần cùng thuộc tính",
      "Các bộ dữ liệu hoàn toàn trùng nhau ở cả hai quan hệ chỉ được lấy một lần duy nhất",
      "Lược đồ kết quả của phép hợp có tập thuộc tính giống hệt tập thuộc tính ban đầu"
    ],
    "answer": 1,
    "explanation": "Khẳng định SAI là phương án A, vì phép hợp BẮT BUỘC phải thực hiện trên hai quan hệ TƯƠNG THÍCH (có cùng tập thuộc tính U1 = U2).",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d2-016",
    "question": "Cho LĐQH Canbo(Maso, Hoten...) và Giangvien(Maso, Hoten...). Biểu thức nào in ra danh sách mã số và họ tên của những người VỪA LÀ cán bộ VỪA LÀ giảng viên?",
    "options": [
      "π_(Maso, Hoten)(Canbo) − π_(Maso, Hoten)(Giangvien) (dùng phép hiệu hai tập)",
      "π_(Maso, Hoten)(Canbo) ∪ π_(Maso, Hoten)(Giangvien) (dùng phép hợp hai tập)",
      "π_(Maso, Hoten)(Canbo) ∩ π_(Maso, Hoten)(Giangvien) (dùng phép giao hai tập)",
      "π_(Maso, Hoten)(Canbo) × π_(Maso, Hoten)(Giangvien) (dùng tích Descartes)"
    ],
    "answer": 2,
    "explanation": "Để tìm những đối tượng thỏa mãn cả hai vai trò (vừa là cán bộ vừa là giảng viên), ta sử dụng phép giao (∩) giữa hai tập sau khi đã chiếu đồng nhất thuộc tính Maso, Hoten.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d2-017",
    "question": "Khi thực hiện chuỗi phép toán π_X(π_Y(R)) với X ⊆ Y ⊆ U, kết quả trả về tương đương với biểu thức nào?",
    "options": [
      "Tương đương với π_Y(R) vì tập Y lớn hơn và bao trùm tập con X",
      "Tương đương với π_X(R) vì việc chiếu liên tiếp thu hẹp về tập con X",
      "Tương đương với một quan hệ rỗng vì vi phạm cú pháp đại số quan hệ",
      "Tương đương với tích Descartes của hai tập thuộc tính X và Y"
    ],
    "answer": 1,
    "explanation": "Theo tính chất của phép chiếu liên tiếp: Nếu X ⊆ Y thì π_X(π_Y(R)) = π_X(R). Chiếu trên tập hẹp hơn X sẽ loại bỏ các cột của Y không nằm trong X.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d2-018",
    "question": "Cho quan hệ r gồm 20 bộ và quan hệ s gồm 15 bộ. Biết r và s tương thích và có 5 bộ chung nhau. Hỏi phép hợp r ∪ s có bao nhiêu bộ?",
    "options": [
      "Có đúng 30 bộ (lấy 20 + 15 − 5 = 30 vì loại bỏ các bộ trùng lặp)",
      "Có đúng 35 bộ (lấy 20 + 15 = 35 giữ nguyên toàn bộ các bộ)",
      "Có đúng 5 bộ (chỉ lấy các bộ xuất hiện ở cả hai quan hệ)",
      "Có đúng 300 bộ (lấy 20 nhân với 15 theo tích Descartes)"
    ],
    "answer": 0,
    "explanation": "Theo nguyên lý bao hàm và loại trừ của lý thuyết tập hợp: |r ∪ s| = |r| + |s| − |r ∩ s| = 20 + 15 − 5 = 30 bộ (vì phép hợp không chứa phần tử trùng lặp).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay cộng trực tiếp 20 + 15 = 35 mà quên mất phép hợp toán học tự động loại bỏ phần tử trùng.",
      "trickWord": "Bẫy số lượng bộ của phép hợp (Union cardinality with overlap)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.6",
      "tip": "Số phần tử phép Hợp = |r| + |s| − |r ∩ s| = 20 + 15 − 5 = 30 bộ."
    }
  },
  {
    "id": "db-c2-d2-019",
    "question": "Cho biểu thức logic C = (A = 5 ∧ B = 10). Biểu thức phép chọn nào sau đây cho kết quả HOÀN TOÀN TƯƠNG ĐƯƠNG với σ_C(R)?",
    "options": [
      "σ_(A=5)(R) − σ_(B=10)(R) (hiệu của phép chọn thứ nhất cho thứ hai)",
      "σ_(A=5)(R) ∪ σ_(B=10)(R) (hợp của hai phép chọn độc lập từng điều kiện)",
      "π_(A=5)(R) ∩ π_(B=10)(R) (giao của hai phép chiếu trên từng điều kiện)",
      "σ_(A=5)(σ_(B=10)(R)) hoặc σ_(B=10)(σ_(A=5)(R)) (tổ hợp phép chọn liên tiếp)"
    ],
    "answer": 3,
    "explanation": "Phép chọn với điều kiện liên kết AND (∧): σ_(C1 ∧ C2)(R) hoàn toàn tương đương với việc thực hiện liên tiếp hai phép chọn σ_C1(σ_C2(R)) nhờ tính giao hoán.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nhầm phép AND với phép Hợp (∪) hoặc phép Trừ (−).",
      "trickWord": "Bẫy phân rã điều kiện liên kết AND trong phép chọn đại số quan hệ",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.2.a",
      "tip": "Quy tắc vàng: σ_(C1 ∧ C2)(R) ≡ σ_C1(σ_C2(R)) ≡ σ_C2(σ_C1(R))."
    }
  },
  {
    "id": "db-c2-d2-020",
    "question": "Xét biểu thức: σ_C(π_X(R)) và π_X(σ_C(R)). Điều kiện cần và đủ để hai biểu thức này tương đương và có thể hoán vị an toàn là gì?",
    "options": [
      "Quan hệ R bắt buộc phải có số lượng dòng nhỏ hơn mười nghìn bản ghi",
      "Tập thuộc tính X bắt buộc phải chứa toàn bộ khóa chính của quan hệ R",
      "Tất cả các thuộc tính tham gia trong điều kiện C đều phải thuộc tập thuộc tính X",
      "Điều kiện logic C bắt buộc phải là phép so sánh bằng không được dùng lớn hơn"
    ],
    "answer": 2,
    "explanation": "Để đẩy phép chọn qua phép chiếu: σ_C(π_X(R)) = π_X(σ_C(R)), điều kiện bắt buộc là biểu thức C chỉ được sử dụng các thuộc tính có mặt trong tập thuộc tính X (nếu C dùng thuộc tính ngoài X thì sau khi chiếu π_X sẽ không còn thuộc tính đó để kiểm tra C).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ phép chọn và phép chiếu luôn giao hoán tự do trong mọi hoàn cảnh.",
      "trickWord": "Bẫy điều kiện tương đương đẩy phép chọn qua phép chiếu (Pushdown Selection predicate)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.2 & II.3",
      "tip": "Đẩy phép chọn qua phép chiếu: Thuộc tính trong C BẮT BUỘC phải nằm trong X."
    }
  },
  {
    "id": "db-c2-d2-021",
    "question": "Khi nào một phép kết nối điều kiện (θ-Join) được gọi là \"Phép kết nối bằng\" (Equijoin)?",
    "options": [
      "Khi toán tử so sánh θ được sử dụng chính là toán tử so sánh bằng (=)",
      "Khi số lượng thuộc tính của hai quan hệ tham gia bằng nhau tuyệt đối",
      "Khi số lượng các dòng dữ liệu của hai quan hệ bằng nhau hoàn toàn",
      "Khi tên gọi của hai quan hệ tham gia hoàn toàn trùng khớp với nhau"
    ],
    "answer": 0,
    "explanation": "Giáo trình nêu rõ: Nếu toán tử so sánh θ là toán tử so sánh bằng \"=\" thì gọi là kết nối bằng (Equijoin).",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d2-022",
    "question": "Ý nghĩa quan trọng bậc nhất của Phép kết nối (Join) trong mô hình cơ sở dữ liệu quan hệ là gì?",
    "options": [
      "Tự động tăng tốc độ tính toán của card đồ họa khi kết xuất biểu đồ",
      "Cho phép liên kết và truy xuất thông tin giữa các quan hệ trong CSDL",
      "Ngăn chặn người dùng xóa dữ liệu bảng quan trọng ra khỏi máy chủ lưu",
      "Tự động sao lưu dữ liệu máy chủ sang máy in để in ấn tài liệu giấy"
    ],
    "answer": 1,
    "explanation": "Ý nghĩa của phép kết nối: Dùng để kết hợp hai bộ có liên quan thuộc hai quan hệ khác nhau thành một bộ mới, cho phép xử lý mối liên quan giữa các quan hệ trong CSDL.",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d2-023",
    "question": "Cho CSDL: Hanghoa(MaHG, TenHG, DVT, Dongia...) và Chitiet_HD(SoHD, MaHG, Soluong, Giaban). Thuộc tính chung dùng để kết nối tự nhiên hai bảng này là gì?",
    "options": [
      "Thuộc tính Dongia xuất hiện ở bảng Hanghoa và bảng Khach",
      "Thuộc tính SoHD xuất hiện ở bảng Chitiet_HD và bảng Hoadon",
      "Thuộc tính MaHG xuất hiện ở cả hai bảng Hanghoa và Chitiet_HD",
      "Thuộc tính TenHG chỉ xuất hiện duy nhất ở bảng Hanghoa"
    ],
    "answer": 2,
    "explanation": "Hai bảng Hanghoa và Chitiet_HD có thuộc tính chung duy nhất là MaHG, đây là thuộc tính dùng để kết nối tự nhiên.",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d2-024",
    "question": "Điền vào chỗ trống: \"Phép kết nối tự nhiên r * s thực hiện kết nối bằng tại các thuộc tính trùng tên, và ...(1)... trong hai thuộc tính trùng tên sẽ bị ...(2)... khỏi kết quả để tránh dư thừa.\"",
    "options": [
      "không có cột nào (xóa sạch toàn bộ những)",
      "toàn bộ nguyên vẹn (giữ lại vĩnh viễn các)",
      "chính xác hai cái (sao chép vô thời hạn)",
      "đúng một đại diện (loại bỏ hoàn toàn các)"
    ],
    "answer": 3,
    "explanation": "Giáo trình khẳng định: Một trong hai thuộc tính trùng tên bị loại bỏ khỏi kết quả để tránh dư thừa dữ liệu.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d2-025",
    "question": "Cho CSDL Quản lý bán hàng. Biểu thức nào dưới đây in ra Tên hàng hóa (TenHG) và Giá bán (Giaban) thực tế trong các chi tiết hóa đơn?",
    "options": [
      "σ_(TenHG = Giaban)(Hanghoa * Chitiet_HD) (chọn các dòng có tên bằng giá bán)",
      "π_(TenHG, Giaban)(Hanghoa × Chitiet_HD) (nhân tích Descartes và chiếu lấy cột)",
      "π_(TenHG, Giaban)(Hanghoa * Chitiet_HD) (kết nối tự nhiên và chiếu thuộc tính)",
      "Hanghoa ÷ π_(Giaban)(Chitiet_HD) (thực hiện phép chia đại số quan hệ)"
    ],
    "answer": 2,
    "explanation": "Kết nối tự nhiên Hanghoa * Chitiet_HD sẽ ghép nối thông tin hàng hóa với chi tiết hóa đơn theo MaHG, sau đó dùng phép chiếu π để lấy TenHG và Giaban.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d2-026",
    "question": "Cho các nhận định sau về Phép chia (r ÷ s):\n(I) Lược đồ của quan hệ s phải là lược đồ con của r (S ⊂ R).\n(II) Kết quả của r ÷ s là quan hệ trên lược đồ R − S.\n(III) Phép chia đòi hỏi hai quan hệ r và s phải tương thích với nhau.\nKhẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có nhận định (I) và (II) đúng, nhận định (III) là sai",
      "Cả ba nhận định (I), (II) và (III) đều là những nhận định đúng",
      "Chỉ có duy nhất nhận định (III) là nhận định hoàn toàn chính xác",
      "Tất cả các nhận định trên đều là nhận định hoàn toàn sai lệch"
    ],
    "answer": 0,
    "explanation": "Nhận định (I) và (II) đúng. Nhận định (III) sai vì phép chia không đòi hỏi hai quan hệ tương thích, mà S là lược đồ con thực sự của R (S ⊂ R).",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d2-027",
    "question": "Cho CSDL Bán hàng gồm Hoadon(SoHD, Ngaylap, MaKH, Trigia). Biểu thức nào tìm các hóa đơn được lập trong năm 2024 có trị giá trên 10 triệu đồng?",
    "options": [
      "π_(SoHD, Ngaylap)(σ_(Trigia > 10000000)(Hoadon))",
      "σ_(Year(Ngaylap) = 2024 ∧ Trigia > 10000000)(Hoadon)",
      "σ_(Year(Ngaylap) = 2024)(Hoadon) ÷ σ_(Trigia)(Hoadon)",
      "σ_(Year(Ngaylap) = 2024)(Hoadon) ∪ σ_(Trigia)(Hoadon)"
    ],
    "answer": 1,
    "explanation": "Dùng phép chọn σ với điều kiện kết hợp AND (∧) cho cả khoảng thời gian lập hóa đơn trong năm 2024 và điều kiện trị giá hóa đơn > 10.000.000.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d2-028",
    "question": "Cho quan hệ R(A, B) có 4 bộ: (1, x), (1, y), (2, x), (3, y) và quan hệ S(B) có 2 bộ: (x), (y). Kết quả của phép chia R ÷ S là quan hệ trên thuộc tính A gồm những bộ nào?",
    "options": [
      "Là quan hệ rỗng không có bộ nào vì phép chia bị lẻ số dòng",
      "Gồm cả 3 bộ là (1), (2), (3) vì các giá trị này đều có trong R",
      "Gồm hai bộ là (2) và (3) vì đây là các bộ có giá trị đơn lẻ",
      "Chỉ gồm duy nhất bộ (1) vì chỉ có A = 1 mới đi kèm với cả x và y"
    ],
    "answer": 3,
    "explanation": "Phép chia tìm các giá trị A đi kèm với TẤT CẢ các giá trị B trong S ({x, y}). Chỉ có A = 1 đi kèm với cả x và y ((1, x) và (1, y) đều ∈ R). A = 2 chỉ có x, A = 3 chỉ có y nên bị loại.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn tất cả các giá trị của A {1, 2, 3} mà không hiểu bản chất lượng từ \"VỚI MỌI\".",
      "trickWord": "Bẫy tính toán kết quả số học cụ thể của Phép chia đại số quan hệ (Division)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.10",
      "tip": "Phép chia R(A, B) ÷ S(B): Giá trị A nào đi kèm ĐỦ TẤT CẢ các giá trị B của S thì mới được chọn."
    }
  },
  {
    "id": "db-c2-d2-029",
    "question": "Trong CSDL Bán hàng, để tìm các khách hàng mua TẤT CẢ các mặt hàng có trong cửa hàng, biểu thức ĐSQH chuẩn mực nào sau đây được áp dụng?",
    "options": [
      "π_(MaKH, MaHG)(Hoadon * Chitiet_HD) * π_(MaHG)(Hanghoa)",
      "π_(MaKH, MaHG)(Hoadon * Chitiet_HD) ÷ π_(MaHG)(Hanghoa)",
      "π_(MaKH, MaHG)(Hoadon * Chitiet_HD) − π_(MaHG)(Hanghoa)",
      "π_(MaKH, MaHG)(Hoadon * Chitiet_HD) ∪ π_(MaHG)(Hanghoa)"
    ],
    "answer": 1,
    "explanation": "Để tìm khách hàng mua TẤT CẢ mặt hàng: Ta lấy bảng lưu việc mua hàng của khách π_(MaKH, MaHG)(Hoadon * Chitiet_HD) đem CHIA cho toàn bộ tập mã hàng có trong cửa hàng π_MaHG(Hanghoa).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Dễ nhầm lẫn giữa phép chia (÷) và phép kết nối tự nhiên (*) khi đọc lướt biểu thức.",
      "trickWord": "Bẫy biểu thức đại số quan hệ phức hợp cho bài toán mua tất cả mặt hàng",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.10 & IV.2",
      "tip": "Khách mua TẤT CẢ mặt hàng = (Bảng_Khách_Mua_Hàng) ÷ (Toàn_Bộ_Mặt_Hàng)."
    }
  },
  {
    "id": "db-c2-d2-030",
    "question": "Tình huống: Khi thực hiện phép kết nối tự nhiên giữa hai quan hệ R và S. Nếu hai quan hệ này HOÀN TOÀN KHÔNG CÓ thuộc tính nào trùng tên (U_R ∩ U_S = ∅), kết quả trả về là gì?",
    "options": [
      "Kết quả trả về là một quan hệ rỗng không chứa bất kỳ thuộc tính nào",
      "Hệ quản trị CSDL báo lỗi nghiêm trọng vì thiếu thuộc tính kết nối bằng",
      "Phép kết nối tự nhiên tự động thoái hóa trở thành phép tích Descartes R × S",
      "Hệ thống tự động chọn thuộc tính đầu tiên của mỗi bảng để ép kết nối"
    ],
    "answer": 2,
    "explanation": "Khi hai quan hệ rời nhau (không có thuộc tính chung), điều kiện kết nối bằng tại thuộc tính trùng tên không tồn tại, do đó phép Natural Join thoái hóa thành phép tích Descartes thuần túy R × S.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ hệ thống sẽ báo lỗi hoặc trả về rỗng.",
      "trickWord": "Bẫy thoái hóa của Phép kết nối tự nhiên khi hai quan hệ rời nhau",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.4 & II.5",
      "tip": "Hai quan hệ KHÔNG CÓ cột chung ➔ Natural Join (*) thoái hóa thành Tích Descartes (×)."
    }
  },
  {
    "id": "db-c2-d2-031",
    "question": "Mục đích cốt lõi của quy trình 7 bước chuyển đổi ERD sang quan hệ là gì?",
    "options": [
      "Chuyển đổi thiết kế CSDL mức quan niệm sang mức logic để cài đặt vào RDBMS",
      "Tự động chuyển đổi mã nguồn chương trình từ ngôn ngữ C sang ngôn ngữ Python",
      "Tính toán chi phí tiền điện hàng tháng cho hệ thống máy chủ cơ sở dữ liệu",
      "Xóa sạch các ràng buộc nghiệp vụ để người dùng nhập liệu tự do hơn"
    ],
    "answer": 0,
    "explanation": "Bản chất của quá trình: từ sơ đồ ERD đã xây dựng ở mức quan niệm, chuyển đổi thành tập các lược đồ quan hệ ở mức logic để cài đặt vào hệ quản trị CSDL quan hệ.",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d2-032",
    "question": "Khi chuyển đổi một thuộc tính đơn (Simple attribute) của thực thể thường trong Bước 1, kết quả là gì?",
    "options": [
      "Bị xóa bỏ khỏi lược đồ quan hệ nếu thuộc tính đó không phải là số",
      "Bắt buộc phải tách thành một bảng quan hệ riêng biệt có khóa ngoại",
      "Tự động biến đổi thành khóa chính của bảng quan hệ đó trong CSDL",
      "Chuyển trực tiếp thành một thuộc tính thông thường của quan hệ tương ứng"
    ],
    "answer": 3,
    "explanation": "Bước 1a: Thuộc tính đơn (Simple attribute) chuyển trực tiếp thành thuộc tính của quan hệ.",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d2-033",
    "question": "Trong quy trình chuyển đổi, một Thực thể thường (Regular entity) trong ERD sẽ được chuyển đổi thành cái gì?",
    "options": [
      "Được chuyển đổi thành một bảng quan hệ (Relation) tương ứng trong RDBMS",
      "Được chuyển đổi thành một dòng dữ liệu (Tuple) duy nhất trong bảng hệ thống",
      "Được chuyển đổi thành một file văn bản thô lưu trữ trên ổ đĩa mềm máy tính",
      "Được chuyển đổi thành một câu lệnh truy vấn điều khiển truy cập mạng"
    ],
    "answer": 0,
    "explanation": "Mỗi kiểu thực thể thường trong sơ đồ ERD được chuyển đổi thành một bảng quan hệ tương ứng trong CSDL quan hệ.",
    "difficulty": "easy"
  },
  {
    "id": "db-c2-d2-034",
    "question": "Điền vào chỗ trống: \"Khi chuyển đổi thực thể yếu ở Bước 2, khóa ngoại tham chiếu đến thực thể mạnh sở hữu nó ...(1)... mang giá trị ...(2)...\"",
    "options": [
      "bắt buộc phải / âm",
      "không được phép / NULL (rỗng)",
      "tùy ý có thể / chuỗi chữ",
      "luôn luôn / số 0"
    ],
    "answer": 1,
    "explanation": "Lưu ý bắt buộc trong giáo trình Mục III.2: Khóa ngoại tham chiếu đến thực thể mạnh KHÔNG ĐƯỢC NULL, vì thực thể yếu không thể tồn tại độc lập nếu thiếu thực thể mạnh định danh.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d2-035",
    "question": "Khi chuyển đổi mối quan hệ nhiều - nhiều (M:N) có thuộc tính riêng (ví dụ: SoLuong, DonGia) sang mô hình quan hệ, thuộc tính riêng đó được đặt ở đâu?",
    "options": [
      "Được lưu vào một file text riêng biệt đặt tại máy chủ của người quản trị",
      "Được đưa vào cả hai bảng thực thể ban đầu để tránh bị mất mát dữ liệu",
      "Bị loại bỏ hoàn toàn vì mô hình quan hệ cấm mối quan hệ có thuộc tính",
      "Được đưa vào quan hệ kết hợp mới được tạo ra ở giữa hai thực thể"
    ],
    "answer": 3,
    "explanation": "Khi chuyển đổi quan hệ M:N, quan hệ mới được tạo ra sẽ chứa các khóa ngoại tham chiếu hai bên, và TẤT CẢ thuộc tính riêng của mối quan hệ M:N đều được đưa vào quan hệ mới này.",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d2-036",
    "question": "Phát biểu nào sau đây là SAI khi nói về quy tắc chuyển đổi mối quan hệ một - một (1:1) hai ngôi?",
    "options": [
      "Tất cả thuộc tính của mối quan hệ 1:1 đều được mang sang phía tùy chọn",
      "Khóa chính ở phía bắt buộc sẽ trở thành khóa ngoại ở phía tùy chọn",
      "Khóa chính ở phía tùy chọn bắt buộc phải làm khóa ngoại ở phía bắt buộc",
      "Mối quan hệ 1:1 không bắt buộc phải tạo thêm một bảng quan hệ thứ ba"
    ],
    "answer": 2,
    "explanation": "Khẳng định SAI là phương án A. Quy tắc chuẩn là: Khóa chính ở phía BẮT BUỘC làm khóa ngoại ở phía TÙY CHỌN (chứ không phải ngược lại, nhằm tránh giá trị NULL ở phía bắt buộc).",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d2-037",
    "question": "Trong mối quan hệ một ngôi nhiều - nhiều (M:N đệ quy) của một kiểu thực thể, quy trình chuyển đổi ở Bước 5 tạo ra bao nhiêu quan hệ?",
    "options": [
      "Không thể chuyển đổi được vì mô hình quan hệ từ chối quan hệ đệ quy M:N",
      "Chỉ tạo ra duy nhất 1 quan hệ và thêm hai khóa ngoại nằm cùng trên bảng đó",
      "Tạo ra 3 quan hệ độc lập để tránh sự trùng lặp dữ liệu giữa các thế hệ",
      "Tạo ra đúng 2 quan hệ: 1 cho thực thể đó và 1 quan hệ kết hợp chứa 2 khóa ngoại"
    ],
    "answer": 3,
    "explanation": "Bước 5b: Với quan hệ một ngôi M:N đệ quy, ta tạo 2 quan hệ: (1) quan hệ cho kiểu thực thể đó; (2) quan hệ kết hợp gồm 2 thuộc tính là khóa ngoại cùng tham chiếu về khóa chính của (1).",
    "difficulty": "medium"
  },
  {
    "id": "db-c2-d2-038",
    "question": "Tình huống: Khi chuyển đổi quan hệ Cha/Con (Supertype/Subtype) gồm EMPLOYEE (cha) và 3 con: HOURLY, SALARIED, CONSULTANT. Phát biểu nào sau đây phản ánh ĐÚNG cấu trúc quan hệ?",
    "options": [
      "Tạo 4 bảng quan hệ, bảng cha chứa thuộc tính chung, các bảng con chứa thuộc tính riêng",
      "Chỉ tạo duy nhất 3 bảng con, toàn bộ thông tin của bảng cha bị xóa bỏ hoàn toàn",
      "Chỉ tạo duy nhất 1 bảng cha khổng lồ chứa toàn bộ tất cả thuộc tính của các con",
      "Tạo 2 bảng quan hệ và dùng phép tích Descartes để kết nối dữ liệu khi cần"
    ],
    "answer": 0,
    "explanation": "Bước 7: Tạo ra các quan hệ cho cả thực thể cha và thực thể con (ở đây là 1 cha + 3 con = 4 bảng). Thuộc tính chung và danh hiệu phân biệt đặt ở bảng cha, thuộc tính riêng đặt ở từng bảng con.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn cách gộp chung thành 1 bảng lớn duy nhất (chứa nhiều NULL) hoặc chỉ tạo bảng con.",
      "trickWord": "Bẫy số lượng bảng và cấu trúc thuộc tính khi chuyển đổi Supertype/Subtype chuẩn",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục III.6.a",
      "tip": "Chuẩn giáo trình Bước 7 = Tạo quan hệ cho CẢ CHA VÀ CÁC CON (1 cha + n con), liên kết 1:1 qua PK/FK."
    }
  },
  {
    "id": "db-c2-d2-039",
    "question": "Trong mối quan hệ ba ngôi giữa PATIENT, PHYSICIAN và TREATMENT có tạo thực thể kết hợp PATIENT_TREATMENT. Khi nào khóa chính của PATIENT_TREATMENT là tổ hợp (Patient_ID, Physician_ID, Treatment_Code, Date, Time)?",
    "options": [
      "Khi hệ thống máy chủ bệnh viện bị sự cố và cần phục hồi toàn bộ thông tin bệnh án người bệnh",
      "Khi bác sĩ điều trị yêu cầu bệnh nhân phải thanh toán toàn bộ chi phí khám chữa bệnh định kỳ",
      "Khi một bệnh nhân có thể được cùng một bác sĩ điều trị cùng một ca nhiều lần ở các thời điểm",
      "Khi bệnh nhân chỉ được phép đăng ký khám bệnh với một bác sĩ duy nhất trong toàn bộ quá trình"
    ],
    "answer": 2,
    "explanation": "Nếu một bệnh nhân có thể khám cùng một bác sĩ với cùng một liệu trình nhiều lần, thì chỉ 3 khóa ngoại là chưa đủ phân biệt các lần khám khác nhau. Bắt buộc phải đưa thêm Date và Time vào khóa chính để đảm bảo tính duy nhất.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ khóa chính của quan hệ ba ngôi luôn cố định chỉ là 3 khóa ngoại ghép lại.",
      "trickWord": "Bẫy mở rộng khóa chính quan hệ ba ngôi khi có yếu tố thời gian lặp lại",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục III.5.b",
      "tip": "Nếu sự kiện có thể lặp lại nhiều lần ➔ Bắt buộc phải bổ sung thuộc tính thời gian (Date, Time) vào Khóa chính."
    }
  },
  {
    "id": "db-c2-d2-040",
    "question": "Tình huống tổng hợp: Cho sơ đồ ERD có thực thể KHOA (1) và thực thể LOP (N). Nếu người thiết kế đặt nhầm khóa ngoại MaLop vào bảng KHOA thì hậu quả nghiêm trọng nào sẽ xảy ra?",
    "options": [
      "Toàn bộ các máy tính trong phòng máy của khoa sẽ bị sập nguồn điện lưới ngay tức khắc",
      "Một Khoa sẽ chỉ có thể quản lý tối đa được duy nhất một Lớp học, làm sai lệch mô hình nghiệp vụ",
      "Hệ quản trị CSDL tự động xóa bỏ toàn bộ sinh viên đang theo học tại các lớp của khoa đó",
      "Không có hậu quả nào vì đặt khóa ngoại ở bảng nào trong quan hệ 1:N cũng cho kết quả tương đương"
    ],
    "answer": 1,
    "explanation": "Trong quan hệ 1:N (1 Khoa có nhiều Lớp), nếu đặt MaLop vào KHOA thì mỗi dòng Khoa chỉ lưu được 1 MaLop (vì ô giá trị nguyên tố 1NF), dẫn đến một Khoa chỉ có tối đa 1 Lớp, làm phá vỡ hoàn toàn nghiệp vụ 1:N.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ đặt khóa ngoại ở bảng nào cũng được, hoặc không lường trước hậu quả vi phạm 1NF.",
      "trickWord": "Bẫy hậu quả nghiệp vụ khi đặt sai vị trí khóa ngoại trong mối quan hệ một - nhiều",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục III.3",
      "tip": "Quan hệ 1:N ➔ BẮT BUỘC đặt FK ở phía NHIỀU (N). Nếu đặt ở phía 1 ➔ Biến quan hệ thành 1:1, sai lệch bản chất."
    }
  }
];
