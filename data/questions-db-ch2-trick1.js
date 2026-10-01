/* ============================================================
   NGÂN HÀNG CÂU HỎI BẪY: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG II: MÔ HÌNH DỮ LIỆU QUAN HỆ (RELATIONAL DATA MODEL) — BỘ ĐỀ BẪY 1
   SỐ LƯỢNG: 50 CÂU HỎI BẪY VẬN DỤNG CAO (100% HARD / BẪY TƯ DUY)
   MÃ BỘ ĐỀ: db-c2-t1-001 ĐẾN db-c2-t1-050
   CHUẨN KỸ THUẬT: DELTA L <= 15 CHARS, 100% TRICKDETAILS, CÂN BẰNG ĐÁP ÁN (13A, 13B, 12C, 12D)
   ============================================================ */

export const questionsDbCh2Trick1 = [
  {
    "id": "db-c2-t1-001",
    "question": "Khẳng định nào sau đây là KHÔNG ĐÚNG khi nói về mối quan hệ giữa Siêu khóa (Super Key) và Khóa (Key)?",
    "options": [
      "Mọi siêu khóa đều là khóa của lược đồ quan hệ và không chứa thuộc tính dư thừa",
      "Mọi khóa của lược đồ quan hệ chắc chắn đều thỏa mãn định nghĩa của một siêu khóa",
      "Một siêu khóa bị loại bỏ các thuộc tính dư thừa sẽ trở thành một khóa tối thiểu",
      "Mọi tập con chứa một siêu khóa của lược đồ quan hệ cũng chính là một siêu khóa"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục I.4 nêu rõ: Khóa là siêu khóa tối thiểu. Mọi khóa đều là siêu khóa, nhưng một siêu khóa có thể chứa các thuộc tính dư thừa nên KHÔNG PHẢI mọi siêu khóa đều là khóa.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn tính chất hai chiều: tưởng Siêu khóa và Khóa có thể hoán đổi cho nhau.",
      "trickWord": "Bẫy ngụy biện đảo chiều: \"Mọi siêu khóa đều là khóa\"",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.4.a & I.4.b",
      "tip": "Mọi Khóa ĐỀU LÀ Siêu khóa, nhưng Siêu khóa CHƯA CHẮC là Khóa (vì có thể dư thừa)!"
    }
  },
  {
    "id": "db-c2-t1-002",
    "question": "Thuộc tính khóa (Prime Attribute) trong mô hình dữ liệu quan hệ được định nghĩa chuẩn xác là gì?",
    "options": [
      "Là thuộc tính bắt buộc phải nằm bên trong khóa chính được chọn để cài đặt",
      "Là thuộc tính có tham gia vào một khóa bất kỳ nào đó của lược đồ quan hệ",
      "Là thuộc tính duy nhất có kiểu dữ liệu số nguyên tự tăng trong bảng quan hệ",
      "Là thuộc tính khóa ngoại tham chiếu đến khóa chính của bảng quan hệ cha"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục I.4.f: Thuộc tính khóa (Prime Attribute) là thuộc tính có tham gia vào MỘT KHÓA BẤT KỲ (khóa dự tuyển hoặc khóa chính), không bắt buộc phải nằm trong khóa chính.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Hầu hết học viên cho rằng chỉ thuộc tính nằm trong \"Khóa chính\" mới là Thuộc tính khóa.",
      "trickWord": "Bẫy đánh đồng Khóa chính với Bất kỳ khóa nào trong định nghĩa Prime Attribute",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.4.f",
      "tip": "Prime Attribute = Nằm trong BẤT KỲ KHÓA NÀO (kể cả khóa dự tuyển Candidate Key)!"
    }
  },
  {
    "id": "db-c2-t1-003",
    "question": "Cho quan hệ r gồm 5 bộ dữ liệu khác nhau. Khi người dùng cố tình thêm vào một bộ mới giống hệt một bộ đã có, quan hệ r sẽ thay đổi như thế nào?",
    "options": [
      "Hệ quản trị CSDL sẽ tự động xóa sạch toàn bộ 5 bộ dữ liệu cũ của quan hệ r ngay lập tức",
      "Quan hệ r tự động tăng lên thành 6 bộ và bộ mới được xếp ở vị trí cuối cùng của bảng",
      "Quan hệ r hoàn toàn không thay đổi và số phần tử của quan hệ r vẫn giữ nguyên là 5 bộ",
      "Toàn bộ cấu trúc các cột của quan hệ r sẽ bị nhân đôi lên để chứa dữ liệu mới trùng lặp"
    ],
    "answer": 2,
    "explanation": "Theo tiên đề lý thuyết tập hợp (mục I.3.b): Một quan hệ là một tập hợp các bộ. Thêm vào một dòng (bộ) giống với dòng đã có thì quan hệ KHÔNG THAY ĐỔI ($A \\cup \\{x\\} = A$ nếu $x \\in A$).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh bị ảnh hưởng bởi bảng Excel hoặc SQL không có khóa nên nghĩ số dòng tăng lên 6.",
      "trickWord": "Bẫy lý thuyết tập hợp toán học: Tập hợp không chứa phần tử trùng lặp",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.3.b",
      "tip": "Quan hệ r = Tập hợp các bộ ➔ Thêm dòng trùng lặp thì r KHÔNG THAY ĐỔI!"
    }
  },
  {
    "id": "db-c2-t1-004",
    "question": "Khẳng định nào sau đây là ĐÚNG khi nói về giá trị của Khóa ngoại (Foreign Key) trong một quan hệ con?",
    "options": [
      "Giá trị khóa ngoại chỉ được phép nhận các giá trị số nguyên dương lớn hơn không",
      "Giá trị khóa ngoại bắt buộc phải luôn luôn khác NULL trong tất cả các trường hợp",
      "Giá trị khóa ngoại bắt buộc phải trùng khớp với khóa chính trong cùng bảng đó",
      "Giá trị khóa ngoại có thể nhận giá trị NULL nếu không có ràng buộc cấm rỗng"
    ],
    "answer": 3,
    "explanation": "Khóa ngoại tham chiếu đến khóa của quan hệ khác. Giá trị của khóa ngoại có thể là NULL (ví dụ: nhân viên chưa được phân vào phòng ban nào thì MaPhong là NULL), trừ khi có ràng buộc NOT NULL hoặc là khóa của thực thể yếu.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm quy tắc NOT NULL của Khóa chính áp đặt luôn cho Khóa ngoại.",
      "trickWord": "Bẫy tuyệt đối hóa: Khóa ngoại HOÀN TOÀN CÓ THỂ MANG GIÁ TRỊ NULL",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.4.e",
      "tip": "Khóa chính CẤM NULL; Khóa ngoại ĐƯỢC PHÉP NULL (trừ khi có ràng buộc riêng)!"
    }
  },
  {
    "id": "db-c2-t1-005",
    "question": "Cho lược đồ quan hệ R(U) với tập thuộc tính U = {A, B, C, D, E}. Phát biểu nào sau đây về Siêu khóa là HOÀN TOÀN ĐÚNG?",
    "options": [
      "Tập hợp tất cả thuộc tính U chắc chắn là một siêu khóa của lược đồ quan hệ R",
      "Chỉ có tập hợp nào gồm đúng một thuộc tính duy nhất mới được coi là siêu khóa",
      "Một lược đồ quan hệ có thể không có bất kỳ một siêu khóa nào nếu bảng đang rỗng",
      "Tập rỗng luôn luôn được định nghĩa là một siêu khóa chuẩn của mọi quan hệ toán học"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục I.4.a nêu rõ tính chất: Một quan hệ có ít nhất một siêu khóa, đó là tập U gồm tất cả thuộc tính của quan hệ.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ bảng rỗng thì không có siêu khóa hoặc nhầm tập rỗng là siêu khóa.",
      "trickWord": "Bẫy tính tồn tại: Tập thuộc tính U LUÔN LUÔN là một Siêu khóa",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.4.a",
      "tip": "Tập U chứa tất cả thuộc tính ➔ Chắc chắn là một Siêu khóa của quan hệ!"
    }
  },
  {
    "id": "db-c2-t1-006",
    "question": "Sự khác biệt bản chất duy nhất giữa \"Khóa chính\" (Primary Key) và \"Khóa dự tuyển\" (Candidate Key) là gì?",
    "options": [
      "Khóa chính có ít thuộc tính hơn so với tất cả các khóa dự tuyển của quan hệ đó",
      "Khóa chính là khóa tối thiểu được người thiết kế chọn để cài đặt cho quan hệ",
      "Khóa chính không cho phép giá trị trùng lặp còn khóa dự tuyển thì cho phép trùng",
      "Khóa chính được tạo tự động bởi hệ điều hành còn khóa dự tuyển do DBA tự gõ"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục I.4.c & I.4.d: Khóa chính là một khóa tối thiểu được người phân tích chọn để cài đặt. Các khóa tối thiểu khác không được chọn làm khóa chính gọi là khóa dự tuyển. Cả hai đều là khóa tối thiểu và đều không cho phép trùng lặp.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ Khóa chính phải có ít thuộc tính hơn Khóa dự tuyển hoặc Khóa dự tuyển được trùng.",
      "trickWord": "Bẫy bản chất: Đều là khóa tối thiểu, chỉ khác ở việc ĐƯỢC CHỌN ĐỂ CÀI ĐẶT",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.4.c & I.4.d",
      "tip": "Khóa chính = Khóa tối thiểu được CHỌN CÀI ĐẶT; Các khóa tối thiểu còn lại = Khóa dự tuyển."
    }
  },
  {
    "id": "db-c2-t1-007",
    "question": "Điền thuật ngữ: \"Toàn bộ mô tả cấu trúc của một CSDL được gọi là (...), còn dữ liệu thực tế lưu trữ tại một thời điểm nhất định được gọi là (...).\"",
    "options": [
      "Khung nhìn CSDL (Database View) ... Lược đồ quan hệ con (Sub-schema)",
      "Thể hiện của CSDL (Database Instance) ... Lược đồ CSDL (Database Schema)",
      "Lược đồ CSDL (Database Schema) ... Thể hiện của CSDL (Database Instance)",
      "Lược đồ vật lý (Internal Schema) ... Mô hình thực thể kết hợp (ERD Schema)"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục I.5.a phân biệt rõ: Toàn bộ mô tả CSDL gọi là Lược đồ CSDL (Database Schema). Toàn bộ dữ liệu lưu trữ tại một thời điểm gọi là Thể hiện của CSDL (Database Instance).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay đảo ngược thứ tự giữa Schema (Cấu trúc mô tả) và Instance (Dữ liệu tại thời điểm).",
      "trickWord": "Bẫy cặp khái niệm song sinh Schema vs Instance",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.5.a",
      "tip": "Mô tả cấu trúc = Lược đồ (Schema); Dữ liệu tại 1 thời điểm = Thể hiện (Instance)!"
    }
  },
  {
    "id": "db-c2-t1-008",
    "question": "Cho quan hệ r gồm các thuộc tính U = {MaSV, Hoten, Ngaysinh, Lop}. Khẳng định nào sau đây về thứ tự các dòng và các cột là ĐÚNG?",
    "options": [
      "Thứ tự các dòng bắt buộc phải luôn luôn được sắp xếp tăng dần theo khóa chính",
      "Đổi chỗ hai dòng trong bảng sẽ làm thay đổi bản chất toán học của quan hệ r",
      "Đổi chỗ hai cột thuộc tính sẽ tạo ra một lược đồ quan hệ hoàn toàn mới trên đĩa",
      "Thứ tự của các dòng và thứ tự của các cột hoàn toàn không làm thay đổi quan hệ"
    ],
    "answer": 3,
    "explanation": "Theo tiên đề lý thuyết tập hợp (mục I.3.b): Một quan hệ là một tập hợp các bộ, và một bộ là một ánh xạ từ thuộc tính sang giá trị. Do đó, thứ tự của các dòng và thứ tự của các cột không quan trọng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thói quen nhìn bảng vật lý có thứ tự hiển thị làm thí sinh tưởng đổi thứ tự là đổi quan hệ.",
      "trickWord": "Bẫy tính chất phi thứ tự (Unordered) của tập hợp trong mô hình quan hệ",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.3.b",
      "tip": "Lý thuyết tập hợp: Thứ tự dòng và thứ tự cột HOÀN TOÀN KHÔNG QUAN TRỌNG!"
    }
  },
  {
    "id": "db-c2-t1-009",
    "question": "Cho các nhận định về Họ nhà Khóa:\n(I) Một quan hệ có thể có nhiều khóa dự tuyển.\n(II) Mỗi quan hệ chỉ được phép có duy nhất một siêu khóa.\n(III) Khóa tối thiểu không chứa thuộc tính dư thừa.\nTổ hợp ĐÚNG là:",
    "options": [
      "Nhận định (I) và (III) hoàn toàn đúng, nhận định (II) sai",
      "Cả ba nhận định (I), (II) và (III) đều hoàn toàn chính xác theo sách",
      "Chỉ có duy nhất nhận định (III) là đúng, nhận định (I) và (II) sai",
      "Nhận định (II) và (III) hoàn toàn đúng, nhận định (I) sai"
    ],
    "answer": 0,
    "explanation": "(II) sai vì một quan hệ có thể có NHIỀU siêu khóa (mọi tập cha của khóa đều là siêu khóa). (I) và (III) hoàn toàn đúng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn số lượng siêu khóa (vô số) với khóa chính (duy nhất).",
      "trickWord": "Bẫy số lượng siêu khóa: Có thể có rất nhiều Siêu khóa, không bao giờ chỉ có duy nhất 1",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.4.a & I.4.b",
      "tip": "Siêu khóa có thể có RẤT NHIỀU; Khóa chính được chọn thì DUY NHẤT 1!"
    }
  },
  {
    "id": "db-c2-t1-010",
    "question": "Trong định nghĩa hình thức toán học của mô hình quan hệ, một quan hệ r trên lược đồ R(A1, ..., An) là một tập con của phép toán nào?",
    "options": [
      "Phép hợp logic của các tập hợp thuộc tính D(A1) U D(A2) U ... U D(An)",
      "Tích Descartes của các miền giá trị D(A1) x D(A2) x ... x D(An)",
      "Phép giao toán học của tất cả các miền giá trị D(A1) ∩ ... ∩ D(An)",
      "Phép hiệu tập hợp giữa tập thuộc tính U và các miền giá trị D(Ai)"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục I.3.a: Một quan hệ r trên LĐQH R là một tập con của tích Descartes của các miền giá trị: r ⊆ D(A1) × D(A2) × ... × D(An).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm tích Descartes với phép hợp (Union) các miền giá trị.",
      "trickWord": "Bẫy nền tảng toán học: Quan hệ là tập con của TÍCH DESCARTES các miền giá trị",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.3.a",
      "tip": "Quan hệ r ⊆ D(A1) × D(A2) × ... × D(An) (Tích Descartes)!"
    }
  },
  {
    "id": "db-c2-t1-011",
    "question": "Khái niệm \"Tân từ của lược đồ quan hệ\" (Predicate) được hiểu một cách chính xác nhất là gì?",
    "options": [
      "Là danh sách toàn bộ các giá trị số nguyên đang được lưu trong ổ đĩa cứng máy chủ",
      "Là câu lệnh lập trình C dùng để cấp phát bộ nhớ động cho các con trỏ liên kết",
      "Là ý nghĩa ngữ nghĩa thực tế giải thích quy tắc quản lý của lược đồ quan hệ đó",
      "Là hàm băm dùng để mã hóa mật khẩu người dùng trước khi lưu xuống cơ sở dữ liệu"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục I.2.a: Tân từ của LĐQH là ý nghĩa ngữ nghĩa của LĐQH (ví dụ: Mỗi sinh viên có một mã số duy nhất, mỗi mã số xác định tất cả thuộc tính của sinh viên đó...).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thuật ngữ \"Tân từ\" thuần túy toán logic làm thí sinh dễ nhầm sang câu lệnh code.",
      "trickWord": "Bẫy thuật ngữ Tân từ (Predicate) chính là Ý NGHĨA NGỮ NGHĨA của lược đồ",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.2.a",
      "tip": "Tân từ = Ý nghĩa ngữ nghĩa đời thực của Lược đồ quan hệ!"
    }
  },
  {
    "id": "db-c2-t1-012",
    "question": "Cho lược đồ quan hệ R(A, B, C, D) có 2 khóa tối thiểu là K1 = {A, B} và K2 = {B, C}. Tập hợp các thuộc tính khóa (Prime Attributes) của R là gì?",
    "options": [
      "Chỉ có duy nhất thuộc tính {D} vì D là thuộc tính không tham gia vào khóa nào",
      "Chỉ duy nhất thuộc tính {B} vì B là thuộc tính chung xuất hiện ở cả hai khóa",
      "Chỉ có 2 thuộc tính {A, B} nếu K1 được người thiết kế lựa chọn làm khóa chính",
      "Tập hợp gồm 3 thuộc tính {A, B, C} vì cả ba đều tham gia vào ít nhất một khóa"
    ],
    "answer": 3,
    "explanation": "Thuộc tính khóa (Prime Attribute) là thuộc tính tham gia vào MỘT KHÓA BẤT KỲ. Ở đây A và B tham gia vào K1; B và C tham gia vào K2. Do đó tập thuộc tính khóa là {A, B, C}. Thuộc tính D là thuộc tính không khóa.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay lấy giao của 2 khóa ({B}) hoặc chỉ lấy khóa chính {A, B}.",
      "trickWord": "Bẫy xác định Prime Attribute: Lấy HỢP của tất cả các khóa tối thiểu",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.4.f",
      "tip": "Prime Attributes = {A, B} ∪ {B, C} = {A, B, C}!"
    }
  },
  {
    "id": "db-c2-t1-013",
    "question": "Bẫy nhận định: Trong một quan hệ, có thể tồn tại 2 thuộc tính trùng tên nhau hay không?",
    "options": [
      "Không bao giờ, trong cùng một quan hệ tuyệt đối không được có 2 thuộc tính cùng tên",
      "Có thể, miễn là hai thuộc tính đó có kiểu dữ liệu khác nhau (một số và một chuỗi)",
      "Có thể, nếu một thuộc tính là khóa chính còn thuộc tính kia là khóa ngoại tham chiếu",
      "Có thể, nếu người quản trị DBA sử dụng hệ điều hành 64 bit để cài đặt cơ sở dữ liệu"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục I.1.c lưu ý quan trọng: Trong cùng một quan hệ (đối tượng), KHÔNG ĐƯỢC CÓ 2 THUỘC TÍNH CÙNG TÊN. Các thuộc tính phải được phân biệt bằng tên gọi duy nhất.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ khác kiểu dữ liệu thì được trùng tên như overloading trong OOP.",
      "trickWord": "Bẫy trùng tên thuộc tính: Trong 1 quan hệ, tên thuộc tính BẮT BUỘC PHẢI DUY NHẤT",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.1.c",
      "tip": "Trong 1 bảng quan hệ: TUYỆT ĐỐI KHÔNG ĐƯỢC có 2 cột trùng tên!"
    }
  },
  {
    "id": "db-c2-t1-014",
    "question": "Mô hình dữ liệu quan hệ được nhà khoa học E.F. Codd đề xuất chính thức vào năm nào?",
    "options": [
      "Năm 1985 khi hệ điều hành đồ họa Microsoft Windows 1.0 lần đầu tiên ra mắt",
      "Năm 1970 / 1971 trong các bài báo khoa học mang tính bước ngoặt của ACM",
      "Năm 1995 cùng thời điểm ngôn ngữ lập trình Java của hãng Sun được công bố",
      "Năm 1960 trong giai đoạn sơ khai của các hệ thống xử lý tập tin máy tính lớn"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục I.1.b nêu rõ: Mô hình CSDL quan hệ do E.F. Codd đề xuất năm 1970/1971.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm mốc 1960 (File processing) hoặc thập niên 80-90.",
      "trickWord": "Bẫy mốc lịch sử phát minh RDBMS: E.F. Codd 1970/1971",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.1.b",
      "tip": "E.F. Codd phát minh Mô hình quan hệ vào năm 1970/1971!"
    }
  },
  {
    "id": "db-c2-t1-015",
    "question": "Cho bảng NHANVIEN có 7 cột và 10 dòng dữ liệu. Theo thuật ngữ toán học trong giáo trình, quan hệ này có bao nhiêu phần tử và mỗi phần tử là một bộ mấy giá trị?",
    "options": [
      "Quan hệ có đúng 70 phần tử độc lập, mỗi phần tử tương ứng với một ô trong bảng",
      "Quan hệ có đúng 7 phần tử, và mỗi phần tử là một bộ 10 giá trị (còn gọi là 10-bộ)",
      "Quan hệ có đúng 10 phần tử, và mỗi phần tử là một bộ 7 giá trị (còn gọi là 7-bộ)",
      "Quan hệ có vô số phần tử do tích Descartes của 7 miền thuộc tính sinh ra liên tục"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục I.3.b (Ví dụ 7-bộ): Mỗi dòng là một phần tử của quan hệ. Bảng có 10 dòng ➔ 10 phần tử. Bảng có 7 thuộc tính ➔ mỗi phần tử là một bộ 7 giá trị (7-bộ).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn giữa số dòng (số phần tử) với số cột (bậc k của k-bộ), hoặc lấy 7x10=70.",
      "trickWord": "Bẫy số phần tử của quan hệ = SỐ DÒNG (bộ), Bậc của bộ = SỐ CỘT",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục I.3.b",
      "tip": "Số phần tử = Số dòng (10); Mỗi phần tử = k-bộ tương ứng số cột (7-bộ)!"
    }
  },
  {
    "id": "db-c2-t1-016",
    "question": "Hai quan hệ r1 và r2 được gọi là \"tương thích\" (Compatible) với nhau khi và chỉ khi thỏa mãn điều kiện gì?",
    "options": [
      "Chúng hoàn toàn không có bất kỳ thuộc tính chung nào (tức là U1 giao U2 bằng rỗng)",
      "Chúng có cùng số lượng các dòng dữ liệu bên trong bảng bất kể số lượng cột",
      "Chúng được lưu trữ trên cùng một cung từ (sector) của cùng một ổ đĩa cứng vật lý",
      "Chúng có cùng tập thuộc tính U (tức là U1 = U2 cả về tên gọi và miền giá trị)"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục II.1.b định nghĩa: Hai quan hệ r1, r2 tương thích với nhau nếu chúng CÓ CÙNG TẬP THUỘC TÍNH U (U1 = U2). Nếu không có thuộc tính chung (U1 ∩ U2 = ∅) thì gọi là HAI QUAN HỆ RỜI NHAU.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm định nghĩa \"tương thích\" với định nghĩa \"rời nhau\" hoặc cùng số dòng.",
      "trickWord": "Bẫy định nghĩa Tương thích (U1 = U2) vs Rời nhau (U1 ∩ U2 = ∅)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.1.b",
      "tip": "Tương thích = CÙNG TẬP THUỘC TÍNH U1 = U2!"
    }
  },
  {
    "id": "db-c2-t1-017",
    "question": "Phát biểu nào sau đây là KHÔNG ĐÚNG khi nói về Phép chiếu (Projection — ký hiệu π) trong đại số quan hệ?",
    "options": [
      "Phép chiếu luôn luôn giữ nguyên số lượng các bộ giống hệt như quan hệ ban đầu",
      "Phép chiếu dùng để trích chọn một tập con các thuộc tính cần thiết từ quan hệ gốc",
      "Phép chiếu bắt buộc phải thực hiện thao tác loại bỏ các bộ trùng lặp trong kết quả",
      "Số lượng các bộ trong kết quả của phép chiếu có thể nhỏ hơn số bộ của quan hệ gốc"
    ],
    "answer": 0,
    "explanation": "Khẳng định \"luôn giữ nguyên số lượng các bộ\" là SAI. Giáo trình mục II.2.b nêu rõ: Thao tác thực hiện phép chiếu gồm: 1) Giữ lại các thuộc tính trong tập X; 2) Loại bỏ các bộ trùng lặp. Do đó, số bộ kết quả có thể ít hơn số bộ ban đầu.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh quen với lệnh SQL `SELECT cot FROM bang` (không có DISTINCT) nên nghĩ phép chiếu không loại bỏ dòng trùng.",
      "trickWord": "Bẫy toán học của Phép chiếu π: BẮT BUỘC loại bỏ bộ trùng lặp",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.2.b",
      "tip": "Phép chiếu trong ĐSQH luôn tự động LOẠI BỎ BỘ TRÙNG LẶP (tương đương SELECT DISTINCT)!"
    }
  },
  {
    "id": "db-c2-t1-018",
    "question": "Tính chất toán học nào sau đây là ĐÚNG đối với Phép chọn (Selection — ký hiệu σ)?",
    "options": [
      "Phép chọn làm thay đổi cấu trúc số lượng cột của quan hệ kết quả thu được",
      "Các phép chọn có tính chất giao hoán: σ_C1(σ_C2(R)) = σ_C2(σ_C1(R))",
      "Các phép chọn không bao giờ có thể kết hợp với nhau bằng toán tử logic AND",
      "Phép chọn chỉ có thể thực hiện được khi quan hệ có chứa ít nhất một khóa ngoại"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục II.2.a ghi rõ: Các phép chọn có tính giao hoán: σ_C1(σ_C2(R)) = σ_C2(σ_C1(R)) = σ_(C1 ∧ C2)(R). Phép chọn lọc dòng, không làm đổi số lượng cột.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh không nhớ tính giao hoán của phép chọn hoặc nhầm phép chọn làm thay đổi cột.",
      "trickWord": "Bẫy tính chất giao hoán của Phép chọn σ",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.2.a",
      "tip": "Phép chọn σ có tính GIAO HOÁN: Lọc điều kiện 1 rồi lọc điều kiện 2 = Lọc 2 rồi lọc 1!"
    }
  },
  {
    "id": "db-c2-t1-019",
    "question": "Cho quan hệ r1 có 3 bộ và quan hệ r2 có 4 bộ, biết r1 và r2 là hai quan hệ rời nhau. Số bộ trong kết quả của Phép tích Descartes r1 x r2 là bao nhiêu?",
    "options": [
      "Chính xác là 1 bộ (vì chỉ có bộ nào có khóa chính giống nhau mới kết hợp được)",
      "Chính xác là 7 bộ (vì số bộ của tích Descartes bằng tổng số bộ của 2 quan hệ)",
      "Chính xác là 12 bộ (vì số bộ của tích Descartes bằng tích số bộ của 2 quan hệ)",
      "Chính xác là 0 bộ (vì hai quan hệ rời nhau không có thuộc tính chung để ghép)"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục II.3.a: Phép tích Descartes chỉ xét trên 2 quan hệ rời nhau; Số bộ của r × s = (số bộ của r) × (số bộ của s) = 3 × 4 = 12 bộ.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người lấy 3+4=7 bộ hoặc nhầm tích Descartes đòi hỏi thuộc tính chung.",
      "trickWord": "Bẫy số bộ tích Descartes = Số bộ r x Số bộ s",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.3.a",
      "tip": "Tích Descartes: Số bộ = 3 x 4 = 12 bộ; Bậc = n + m thuộc tính!"
    }
  },
  {
    "id": "db-c2-t1-020",
    "question": "Sự khác biệt cốt lõi giữa Phép kết nối bằng (Equijoin) và Phép kết nối tự nhiên (Natural Join — ký hiệu *) là gì?",
    "options": [
      "Kết nối bằng chỉ thực hiện trên một quan hệ đơn còn kết nối tự nhiên thực hiện trên ba quan hệ",
      "Kết nối bằng không sử dụng toán tử dấu bằng còn kết nối tự nhiên thì bắt buộc phải dùng",
      "Kết nối tự nhiên giữ lại cả hai cột trùng tên còn kết nối bằng thì xóa bỏ cả hai cột đó",
      "Kết nối tự nhiên kết nối trên thuộc tính trùng tên và loại bỏ 1 cột trùng để tránh dư thừa"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục II.3.b: Kết nối tự nhiên (r * s) là phép kết nối bằng tại các thuộc tính trùng tên của 2 quan hệ, và một trong hai thuộc tính trùng tên bị loại bỏ khỏi kết quả để tránh dư thừa dữ liệu.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ kết nối tự nhiên giữ lại cả 2 cột trùng tên như tích Descartes.",
      "trickWord": "Bẫy loại bỏ cột trùng trong Kết nối tự nhiên Natural Join (*)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.3.b",
      "tip": "Kết nối tự nhiên: Bằng nhau ở cột trùng tên + LOẠI BỎ 1 CỘT TRÙNG TÊN!"
    }
  },
  {
    "id": "db-c2-t1-021",
    "question": "Điều kiện bắt buộc để có thể thực hiện được các phép toán tập hợp: Hợp (∪), Giao (∩) và Hiệu (−) trong đại số quan hệ là gì?",
    "options": [
      "Hai quan hệ tham gia phép toán bắt buộc phải là hai quan hệ tương thích (cùng tập thuộc tính)",
      "Hai quan hệ tham gia phép toán bắt buộc phải có số lượng các bộ dữ liệu hoàn toàn bằng nhau",
      "Hai quan hệ tham gia phép toán bắt buộc phải có ít nhất một trường khóa ngoại liên kết với nhau",
      "Hai quan hệ tham gia phép toán bắt buộc phải được tạo ra bởi cùng một người sử dụng cuối"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục II.4.c nhấn mạnh: Các phép hợp (∪), giao (∩), hiệu (−) CHỈ THỰC HIỆN ĐƯỢC trên hai quan hệ TƯƠNG THÍCH (có cùng tập thuộc tính U).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh quen với UNION trong SQL có thể khác tên cột (chỉ cần cùng kiểu dữ liệu) nên quên điều kiện ĐSQH thuần túy.",
      "trickWord": "Bẫy điều kiện tương thích nghiêm ngặt trong toán Đại số quan hệ",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.4.c",
      "tip": "∪, ∩, − trong ĐSQH: BẮT BUỘC 2 quan hệ phải TƯƠNG THÍCH (Cùng tập thuộc tính U)!"
    }
  },
  {
    "id": "db-c2-t1-022",
    "question": "Trong đại số quan hệ, phép toán nào tương ứng trực tiếp với lượng từ phổ quát \"VỚI MỌI\" (∀) trong toán logic, chuyên giải bài toán mang ý nghĩa \"TẤT CẢ\"?",
    "options": [
      "Phép tích Descartes nhân chéo hai quan hệ (ký hiệu là ×)",
      "Phép chia đại số quan hệ (Division — ký hiệu là ÷)",
      "Phép kết nối tự nhiên giữa các quan hệ (ký hiệu là *)",
      "Phép hiệu giữa hai quan hệ tương thích (ký hiệu là −)"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục II.5.b khẳng định: Phép chia (÷) là công cụ toán học tương ứng với lượng từ phổ quát VỚI MỌI (∀), chuyên dùng để giải các bài toán mang ý nghĩa \"TẤT CẢ\" hoặc \"MỌI\" (VD: sinh viên học tất cả các môn của khoa CNTT).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ bài toán \"Tất cả\" dùng phép kết nối hoặc phép giao.",
      "trickWord": "Bẫy phép toán giải quyết bài toán \"TẤT CẢ\" / \"VỚI MỌI (∀)\": Chính là Phép Chia (÷)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.5.b",
      "tip": "Tìm đối tượng thỏa mãn \"TẤT CẢ\" / \"VỚI MỌI\" ➔ Bắt buộc dùng PHÉP CHIA (÷)!"
    }
  },
  {
    "id": "db-c2-t1-023",
    "question": "Cho quan hệ r trên lược đồ R(A, B, C) và quan hệ s trên lược đồ S(B, C). Tập thuộc tính của quan hệ kết quả thu được từ Phép chia r ÷ s là gì?",
    "options": [
      "Gồm 2 thuộc tính {B, C} giống hệt như lược đồ của quan hệ chia s",
      "Gồm cả 3 thuộc tính {A, B, C} giống hệt như lược đồ của quan hệ bị chia ban đầu",
      "Chỉ gồm duy nhất một thuộc tính {A} (tức là tập hiệu thuộc tính R - S)",
      "Gồm 5 thuộc tính {A, B, C, B, C} do tích hợp tất cả các cột của cả hai quan hệ"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục II.5.b định nghĩa: Phép chia của r(R) cho s(S), ký hiệu r ÷ s, là quan hệ trên lược đồ R - S. Với R = {A, B, C} và S = {B, C}, tập thuộc tính kết quả là R - S = {A}.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh không nhớ cấu trúc thuộc tính kết quả của phép chia là R - S.",
      "trickWord": "Bẫy lược đồ kết quả phép chia: Luôn có thuộc tính là R - S",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.5.b",
      "tip": "Lược đồ kết quả r(R) ÷ s(S) = R - S!"
    }
  },
  {
    "id": "db-c2-t1-024",
    "question": "Biểu thức ĐSQH nào sau đây biểu diễn ĐÚNG yêu cầu: \"Tìm mã số và họ tên của các sinh viên sinh trước năm 1985 và có quê quán ở Cần Thơ\" từ bảng SINHVIEN(MaSV, Hoten, Namsinh, QQ, Hocluc)?",
    "options": [
      "σ_(Namsinh < 1985) (SINHVIEN) ∪ σ_(QQ = 'Cần Thơ') (SINHVIEN)",
      "σ_(MaSV, Hoten) (π_(Namsinh < 1985 ∧ QQ = 'Cần Thơ') (SINHVIEN))",
      "π_(Namsinh < 1985 ∧ QQ = 'Cần Thơ') (σ_(MaSV, Hoten) (SINHVIEN))",
      "π_(MaSV, Hoten) (σ_(Namsinh < 1985 ∧ QQ = 'Cần Thơ') (SINHVIEN))"
    ],
    "answer": 3,
    "explanation": "Để lọc các dòng thỏa mãn điều kiện năm sinh và quê quán, dùng phép chọn σ_(Namsinh < 1985 ∧ QQ = 'Cần Thơ'). Sau đó chiếu lấy mã SV và họ tên bằng phép chiếu π_(MaSV, Hoten). Phương án A viết chuẩn xác.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn ký hiệu giữa Phép chiếu π (lọc cột) và Phép chọn σ (lọc dòng điều kiện).",
      "trickWord": "Bẫy đảo lộn ký hiệu toán học: π là Chiếu (cột), σ là Chọn (dòng điều kiện)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.2.a & II.2.b",
      "tip": "Chọn điều kiện dùng σ; Chiếu lấy cột dùng π!"
    }
  },
  {
    "id": "db-c2-t1-025",
    "question": "Cho 2 quan hệ r và s tương thích. Khẳng định nào sau đây về tính chất giao hoán của các phép toán tập hợp là ĐÚNG?",
    "options": [
      "Phép hợp và phép giao có tính giao hoán, nhưng phép hiệu không có tính giao hoán",
      "Cả ba phép hợp, phép giao và phép hiệu đều có tính chất giao hoán đối xứng nhau",
      "Chỉ có duy nhất phép hợp là có tính giao hoán, còn phép giao và phép hiệu thì không",
      "Không có bất kỳ phép toán tập hợp nào có tính chất giao hoán trong đại số quan hệ"
    ],
    "answer": 0,
    "explanation": "r ∪ s = s ∪ r (giao hoán); r ∩ s = s ∩ r (giao hoán). Tuy nhiên r - s ≠ s - r (phép hiệu KHÔNG có tính giao hoán).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nhớ nhầm tính giao hoán áp dụng cho cả phép trừ/hiệu.",
      "trickWord": "Bẫy tính giao hoán: Phép hiệu (Difference −) KHÔNG GIAO HOÁN",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.4",
      "tip": "Hợp và Giao có giao hoán; Phép Hiệu r - s KHÔNG giao hoán!"
    }
  },
  {
    "id": "db-c2-t1-026",
    "question": "Khi thực hiện Phép chọn σ_C(r), nếu điều kiện C sử dụng các toán tử so sánh thứ tự {<, ≤, >, ≥}, miền giá trị của thuộc tính tham gia BẮT BUỘC phải thỏa mãn điều kiện gì?",
    "options": [
      "Miền giá trị của thuộc tính đó bắt buộc phải là kiểu chuỗi ký tự Unicode",
      "Miền giá trị của thuộc tính đó bắt buộc phải là miền có thứ tự xác định",
      "Miền giá trị của thuộc tính đó bắt buộc phải chứa toàn các số nguyên dương",
      "Miền giá trị của thuộc tính đó bắt buộc không được phép chứa giá trị rỗng NULL"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục II.2.a lưu ý rõ: Toán tử so sánh {=, <, ≤, >, ≥, ≠} chỉ áp dụng cho thuộc tính có miền giá trị CÓ THỨ TỰ. Nếu miền không có thứ tự thì CHỈ ĐƯỢC DÙNG {=, ≠}.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh ít chú ý đến điều kiện tiên quyết \"miền giá trị có thứ tự\" đối với các toán tử so sánh.",
      "trickWord": "Bẫy điều kiện tiên quyết: Toán tử so sánh thứ tự chỉ áp dụng cho Miền có thứ tự",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.2.a",
      "tip": "So sánh lớn hơn/nhỏ hơn: Bắt buộc Miền giá trị phải có thứ tự!"
    }
  },
  {
    "id": "db-c2-t1-027",
    "question": "Phép đặt lại tên (Rename) trong đại số quan hệ có vai trò kỹ thuật quan trọng nhất là gì?",
    "options": [
      "Tự động mã hóa tên người dùng để ngăn chặn tin tặc tấn công nghe lén qua đường truyền mạng",
      "Làm thay đổi vĩnh viễn tên của bảng dữ liệu lưu trữ vật lý trên đĩa cứng của máy chủ",
      "Giúp đặt tên cho các quan hệ trung gian và thuộc tính, làm biểu thức phức hợp rõ ràng hơn",
      "Bắt buộc phải sử dụng để hệ điều hành Windows nhận diện được các ký tự tiếng Việt có dấu"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục II.5.a: Để trả lời một câu hỏi phức tạp, phải tổ hợp nhiều phép toán. Dùng phép đặt tên để đặt tên cho các quan hệ trung gian (và thuộc tính), giúp biểu thức ĐSQH rõ ràng, mạch lạc hơn.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm phép Rename trong ĐSQH với lệnh đổi tên bảng vĩnh viễn `sp_rename` trong SQL.",
      "trickWord": "Bẫy vai trò của Rename: Tạo định danh cho quan hệ trung gian trong chuỗi tính toán",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.5.a",
      "tip": "Rename trong ĐSQH = Đặt tên cho quan hệ trung gian giúp biểu thức rõ ràng!"
    }
  },
  {
    "id": "db-c2-t1-028",
    "question": "Cho 3 mệnh đề về Đại số quan hệ:\n(I) ĐSQH có tính đầy đủ và phi thủ tục.\n(II) Phép kết nối điều kiện θ-Join chỉ chấp nhận duy nhất toán tử so sánh bằng (=).\n(III) Phép chiếu π luôn tự động loại bỏ các bộ trùng lặp.\nTổ hợp ĐÚNG là:",
    "options": [
      "Mệnh đề (II) và (III) hoàn toàn đúng, mệnh đề (I) hoàn toàn sai lệch",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn chính xác giáo trình",
      "Chỉ có duy nhất mệnh đề (I) là đúng, mệnh đề (II) và (III) là sai sót",
      "Mệnh đề (I) và (III) hoàn toàn đúng, mệnh đề (II) hoàn toàn sai lệch"
    ],
    "answer": 3,
    "explanation": "(II) sai vì phép θ-Join chấp nhận bất kỳ toán tử so sánh nào trong {=, <, ≤, >, ≥, ≠}. Khi θ là toán tử bằng (=) thì mới gọi là Equijoin. (I) và (III) hoàn toàn đúng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm lẫn giữa định nghĩa tổng quát của θ-Join với trường hợp riêng Equijoin.",
      "trickWord": "Bẫy toán tử θ-Join: θ có thể là bất kỳ toán tử so sánh nào, không chỉ có dấu bằng",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.1.a, II.2.b, II.3.b",
      "tip": "θ-Join: θ là {=, <, ≤, >, ≥, ≠}; Chỉ khi θ là dấu '=' mới là Equijoin!"
    }
  },
  {
    "id": "db-c2-t1-029",
    "question": "Biểu thức ĐSQH biểu diễn câu hỏi: \"In ra mã số và họ tên của các sinh viên KHÔNG tham gia thực hiện bất kỳ đề tài nào\" (dùng SINHVIEN và SV_DT) là gì?",
    "options": [
      "π_(MaSV, Hoten) (SINHVIEN) − π_(MaSV, Hoten) (SINHVIEN * SV_DT)",
      "π_(MaSV, Hoten) (SINHVIEN) ∩ π_(MaSV, Hoten) (SINHVIEN * SV_DT)",
      "π_(MaSV, Hoten) (SINHVIEN) ∪ π_(MaSV, Hoten) (SINHVIEN * SV_DT)",
      "π_(MaSV, Hoten) (σ_(MaDT = NULL) (SINHVIEN * SV_DT))"
    ],
    "answer": 0,
    "explanation": "Để tìm đối tượng KHÔNG tham gia (phủ định), kỹ thuật chuẩn mực trong ĐSQH là dùng PHÉP HIỆU (Difference −): Lấy tất cả sinh viên trừ đi những sinh viên có xuất hiện trong bảng SV_DT. Hai vế của phép hiệu đều có thuộc tính {MaSV, Hoten} nên hoàn toàn tương thích.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay cố gắng dùng điều kiện `MaDT = NULL` trong phép kết nối tự nhiên (vốn loại bỏ dòng không khớp).",
      "trickWord": "Bẫy kỹ thuật Anti-Join trong ĐSQH: Bắt buộc dùng Phép Hiệu (−)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.4.c",
      "tip": "Tìm đối tượng KHÔNG làm gì ➔ Lấy Tất cả TRỪ ĐI đối tượng Có làm: Tất cả − Có tham gia!"
    }
  },
  {
    "id": "db-c2-t1-030",
    "question": "Cho quan hệ r(A, B) có 2 bộ {(1, 2), (1, 3)}. Khi thực hiện phép chiếu π_A(r), kết quả thu được gồm bao nhiêu bộ dữ liệu?",
    "options": [
      "Gồm 2 bộ giống nhau là {(1), (1)} vì phép chiếu giữ nguyên số bộ",
      "Đúng 1 bộ duy nhất là {(1)} do giá trị trùng lặp đã bị loại bỏ",
      "Gồm 0 bộ vì phép chiếu bị lỗi do hai dòng có giá trị cột A trùng nhau",
      "Gồm 4 bộ do hệ quản trị CSDL nhân đôi dữ liệu để lưu vết lịch sử"
    ],
    "answer": 1,
    "explanation": "Các bộ ban đầu có giá trị trên thuộc tính A là 1 và 1. Theo định nghĩa phép chiếu trong lý thuyết tập hợp, các bộ trùng lặp bị loại bỏ, chỉ giữ lại một bộ đại diện duy nhất là {(1)}.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh chọn 2 bộ do thói quen nhìn thấy 2 dòng trong kết quả truy vấn SQL không có DISTINCT.",
      "trickWord": "Bẫy loại bỏ trùng lặp trong phép chiếu của Đại số quan hệ",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.2.b",
      "tip": "Phép chiếu π trong ĐSQH: Tự động loại bỏ trùng ➔ 2 dòng số 1 chỉ còn 1 dòng duy nhất!"
    }
  },
  {
    "id": "db-c2-t1-031",
    "question": "Biểu thức nào sau đây thể hiện phép kết nối tự nhiên giữa 3 quan hệ SINHVIEN, SV_DT và DETAI để tìm sinh viên làm đề tài tại nơi áp dụng 'Cần Thơ'?",
    "options": [
      "π_(NoiAD = 'Cần Thơ') (SINHVIEN ∪ SV_DT ∪ DETAI)",
      "σ_(NoiAD = 'Cần Thơ') (SINHVIEN × SV_DT × DETAI)",
      "σ_(NoiAD = 'Cần Thơ') (SINHVIEN * SV_DT * DETAI)",
      "σ_(NoiAD = 'Cần Thơ') (SINHVIEN ∩ SV_DT ∩ DETAI)"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục II.3.b (Ví dụ): Sử dụng phép kết nối tự nhiên (*) giữa 3 quan hệ để tự động ghép trên các thuộc tính trùng tên (MaSV giữa SINHVIEN và SV_DT; MaDT giữa SV_DT và DETAI), sau đó áp dụng phép chọn σ với điều kiện NoiAD = 'Cần Thơ'.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm dấu kết nối tự nhiên (*) với tích Descartes (×) hoặc phép hợp (∪).",
      "trickWord": "Bẫy cú pháp kết nối chuỗi 3 quan hệ: Dùng dấu sao (*)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.3.b",
      "tip": "Kết nối tự nhiên nhiều bảng dùng dấu sao (*): SINHVIEN * SV_DT * DETAI!"
    }
  },
  {
    "id": "db-c2-t1-032",
    "question": "Điền thuật ngữ: \"Phép kết nối dùng để (...) hai bộ có liên quan nhau thuộc hai quan hệ khác nhau thành một bộ mới, cho phép xử lý (...) giữa các quan hệ trong CSDL.\"",
    "options": [
      "Định dạng ... tốc độ quay đĩa cứng",
      "Nhân đôi ... sự phân mảnh phần cứng",
      "Xóa bỏ ... sự xung đột khóa chính",
      "Kết hợp ... mối liên quan ngữ nghĩa"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục II.3.b nêu rõ ý nghĩa: Phép kết nối dùng để kết hợp hai bộ có liên quan nhau thuộc hai quan hệ khác nhau thành một bộ mới; cho phép xử lý mối liên quan giữa các quan hệ trong toàn bộ CSDL.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh bị lôi cuốn bởi các phương án kỹ thuật phần cứng.",
      "trickWord": "Bẫy ý nghĩa cốt lõi của Phép kết nối Join trong RDBMS",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.3.b",
      "tip": "Kết nối = Kết hợp 2 bộ có liên quan + Xử lý mối liên quan giữa các bảng!"
    }
  },
  {
    "id": "db-c2-t1-033",
    "question": "Khi thực hiện Phép giao r1 ∩ r2, biểu thức nào sau đây tương đương về mặt toán học thông qua Phép hiệu (−)?",
    "options": [
      "r1 − (r1 − r2)",
      "(r1 − r2) ∪ (r2 − r1)",
      "(r1 ∪ r2) − r1",
      "(r1 − r2) − r2"
    ],
    "answer": 0,
    "explanation": "Theo lý thuyết tập hợp: Phần tử thuộc r1 ∩ r2 là phần tử thuộc r1 nhưng không thuộc (r1 − r2). Do đó r1 ∩ r2 = r1 − (r1 − r2).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn công thức hiệu đối xứng `(r1 − r2) ∪ (r2 − r1)` (đó là XOR, không phải AND/Giao).",
      "trickWord": "Bẫy tương đương đại số: r1 ∩ r2 = r1 − (r1 − r2)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.4.b",
      "tip": "Giao bằng 2 lần hiệu: r1 ∩ r2 = r1 − (r1 − r2)!"
    }
  },
  {
    "id": "db-c2-t1-034",
    "question": "Bẫy cú pháp ĐSQH: Biểu thức nào sau đây là SAI VỀ MẶT CÚ PHÁP ĐẠI SỐ QUAN HỆ?",
    "options": [
      "π_(MaSV, Hoten) (σ_(DiemTB > 8) (SINHVIEN))",
      "σ_(MaSV, Hoten) (π_(DiemTB > 8) (SINHVIEN))",
      "σ_(DiemTB > 8 ∧ QQ = 'Hà Nội') (SINHVIEN)",
      "π_(Hoten) (SINHVIEN) − π_(Hoten) (GIANGVIEN)"
    ],
    "answer": 1,
    "explanation": "Phương án A sai cú pháp nghiêm trọng: Phép chọn σ nhận điều kiện logic dạng Boolean (như DiemTB > 8), không được truyền danh sách thuộc tính (MaSV, Hoten). Ngược lại, phép chiếu π mới nhận danh sách thuộc tính. Phương án A đã đánh tráo vị trí của σ và π.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh đọc lướt không chú ý tham số bên dưới của σ là danh sách cột (sai cú pháp).",
      "trickWord": "Bẫy đánh tráo tham số giữa Phép chọn σ (điều kiện) và Phép chiếu π (danh sách cột)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.2.a & II.2.b",
      "tip": "σ nhận ĐIỀU KIỆN (Boolean); π nhận DANH SÁCH CỘT!"
    }
  },
  {
    "id": "db-c2-t1-035",
    "question": "Cho quan hệ r(A, B, C) và điều kiện C1: A = 1, điều kiện C2: B > 5. Khẳng định nào sau đây là ĐÚNG khi tối ưu hóa câu truy vấn trong RDBMS?",
    "options": [
      "Thực hiện phép chiếu trên tất cả các cột trước khi lọc dòng để tiết kiệm bộ nhớ RAM",
      "Luôn luôn bắt buộc phải thực hiện tích Descartes trước rồi mới được phép áp dụng phép chọn",
      "Nên thực hiện phép chọn σ trước để giảm bớt số dòng trước khi thực hiện phép kết nối tốn kém",
      "Thứ tự thực hiện các phép toán đại số quan hệ hoàn toàn không ảnh hưởng đến tốc độ thực thi"
    ],
    "answer": 2,
    "explanation": "Nguyên lý tối ưu hóa truy vấn kinh điển trong RDBMS (dựa trên ĐSQH): \"Đẩy phép chọn xuống càng sớm càng tốt\" (Push down selections) để giảm kích thước dữ liệu trung gian trước khi thực hiện các phép kết nối (Join) tốn kém.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ tích Descartes là bước bắt buộc đầu tiên.",
      "trickWord": "Bẫy nguyên lý tối ưu hóa: Đẩy phép chọn σ xuống sớm nhất để giảm số dòng",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.2 & II.3",
      "tip": "Tối ưu hóa: LỌC DÒNG (σ) TRƯỚC ➔ Giảm kích thước bảng ➔ Kết nối (Join) nhanh hơn!"
    }
  },
  {
    "id": "db-c2-t1-036",
    "question": "Theo Bước 1 của quy trình chuyển đổi ERD sang quan hệ, một thuộc tính đa trị (Multivalued attribute, ví dụ: Skill của nhân viên) được xử lý như thế nào?",
    "options": [
      "Chuyển thành một cột mới ngay trong bảng nhân viên và cho phép cột đó mang giá trị rỗng",
      "Gộp tất cả các giá trị vào chung một ô duy nhất và ngăn cách nhau bằng dấu phẩy",
      "Bỏ qua hoàn toàn thuộc tính đa trị vì mô hình quan hệ không hỗ trợ kiểu dữ liệu danh sách",
      "Tách thành một quan hệ riêng, có khóa ngoại tham chiếu về khóa chính của thực thể ban đầu"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục III.2.a (Bước 1): Thuộc tính đa trị được tách thành MỘT QUAN HỆ RIÊNG, có khóa ngoại tham chiếu về khóa chính của quan hệ ban đầu (ví dụ: EMPLOYEE_SKILL(Employee_ID, Skill)).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Học viên hay chọn gộp chuỗi bằng dấu phẩy (vi phạm chuẩn 1NF) hoặc thêm cột vào bảng gốc.",
      "trickWord": "Bẫy chuyển đổi thuộc tính đa trị: Bắt buộc tách thành một bảng quan hệ riêng",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục III.2.a",
      "tip": "Thuộc tính đa trị ➔ TÁCH THÀNH QUAN HỆ RIÊNG + Khóa ngoại về bảng gốc!"
    }
  },
  {
    "id": "db-c2-t1-037",
    "question": "Theo Bước 1, khi chuyển đổi một thuộc tính phức hợp (Composite attribute, ví dụ: Address gồm Street, City, State, Zip) sang quan hệ, quy tắc chuẩn là gì?",
    "options": [
      "Chỉ đưa các thuộc tính đơn thành phần vào quan hệ, loại bỏ thuộc tính phức hợp gộp",
      "Đưa cả thuộc tính gộp Address và tất cả các thuộc tính con vào chung quan hệ đó",
      "Tạo một bảng riêng có tên là ADDRESS và đặt khóa ngoại tham chiếu về bảng CUSTOMER",
      "Chuyển thuộc tính phức hợp thành một khóa chính thứ hai của lược đồ quan hệ"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục III.2.a: Thuộc tính phức hợp chỉ lấy các THUỘC TÍNH ĐƠN THÀNH PHẦN của nó (không lấy thuộc tính gộp). Ví dụ: CUSTOMER chỉ chứa Street, City, State, Zip; không có cột Customer_Address.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay giữ lại cả cột gộp cha (Address) lẫn các cột con thành phần.",
      "trickWord": "Bẫy thuộc tính phức hợp: CHỈ LẤY THÀNH PHẦN ĐƠN, LOẠI BỎ THUỘC TÍNH GỘP",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục III.2.a",
      "tip": "Thuộc tính phức hợp ➔ Rã thành các cột con đơn lẻ; Bỏ cột gộp cha!"
    }
  },
  {
    "id": "db-c2-t1-038",
    "question": "Theo Bước 2, khóa chính của một quan hệ được tạo từ Thực thể yếu (Weak Entity) được cấu thành chuẩn xác từ những thành phần nào?",
    "options": [
      "Chỉ duy nhất khóa riêng phần của thực thể yếu là đủ để xác định duy nhất bản ghi",
      "Khóa riêng phần (Partial key) của thực thể yếu kết hợp với Khóa chính của thực thể mạnh",
      "Chỉ sử dụng khóa chính của thực thể mạnh làm khóa chính duy nhất của thực thể yếu",
      "Một số nguyên tự tăng ngẫu nhiên do hệ điều hành máy tính tự động cấp phát"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục III.3.a: Khóa chính của thực thể yếu gồm: 1) Khóa riêng phần (Partial key) của thực thể yếu; 2) Khóa chính của quan hệ định danh (thực thể mạnh). Đồng thời khóa ngoại tham chiếu thực thể mạnh KHÔNG ĐƯỢC NULL.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ khóa riêng phần tự đứng một mình làm khóa chính được.",
      "trickWord": "Bẫy cấu trúc khóa chính thực thể yếu: Partial key + Khóa ngoại thực thể mạnh",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục III.3.a",
      "tip": "Khóa chính thực thể yếu = Khóa riêng phần (Partial key) + Khóa chính thực thể mạnh!"
    }
  },
  {
    "id": "db-c2-t1-039",
    "question": "Theo Bước 3, khi chuyển đổi một mối quan hệ hai ngôi Một - Nhiều (1:N, ví dụ: KHOA 1 - N LOP), vị trí đặt khóa ngoại chuẩn xác là gì?",
    "options": [
      "Bắt buộc phải tạo thêm một bảng trung gian mới chứa hai khóa ngoại của cả hai thực thể",
      "Khóa chính ở phía \"Nhiều\" (LOP) trở thành khóa ngoại đặt ở quan hệ phía \"Một\" (KHOA)",
      "Khóa chính ở phía \"Một\" (KHOA) trở thành khóa ngoại đặt ở quan hệ phía \"Nhiều\" (LOP)",
      "Không cần đặt khóa ngoại ở bảng nào vì mối quan hệ 1:N được lưu bằng con trỏ vật lý"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục III.4.a (Bảng tổng kết Bước 3): Quan hệ Một - nhiều (1:N): Khóa chính ở phía \"MỘT\" trở thành khóa ngoại ở phía \"NHIỀU\". Đặt ngược lại sẽ vi phạm tính nguyên tố và gây dư thừa dữ liệu.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Rất nhiều học viên bị nhầm đặt ngược khóa ngoại từ phía Nhiều sang phía Một.",
      "trickWord": "Bẫy chiều đặt khóa ngoại 1:N: Khóa của phía 1 sang làm khóa ngoại phía N",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục III.4.a",
      "tip": "1:N ➔ Lấy khóa của phía 1 đem sang làm KHÓA NGOẠI ở phía N!"
    }
  },
  {
    "id": "db-c2-t1-040",
    "question": "Theo Bước 3, khi chuyển đổi một mối quan hệ hai ngôi Nhiều - Nhiều (M:N, ví dụ: SINHVIEN M - N MONHOC), giải pháp kỹ thuật bắt buộc là gì?",
    "options": [
      "Tạo thêm một thuộc tính đa trị chứa danh sách mã môn học trong bảng SINHVIEN",
      "Đặt khóa chính của SINHVIEN sang làm khóa ngoại nằm trong bảng MONHOC",
      "Đặt khóa chính của MONHOC sang làm khóa ngoại nằm trong bảng SINHVIEN",
      "Tạo một quan hệ mới, khóa chính là tổ hợp khóa chính của hai thực thể tham gia"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục III.4.a: Mối quan hệ Nhiều - nhiều (M:N): Tạo quan hệ mới, khóa chính là tổ hợp khóa chính của hai thực thể tham gia (đồng thời là khóa ngoại tương ứng đến từng thực thể).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay cố gắng nhét khóa ngoại vào 1 trong 2 bảng (bất khả thi với M:N).",
      "trickWord": "Bẫy chuyển đổi quan hệ M:N: BẮT BUỘC tạo một quan hệ kết hợp mới",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục III.4.a",
      "tip": "M:N ➔ Bắt buộc TẠO BẢNG MỚI có khóa chính là tổ hợp 2 khóa ngoại!"
    }
  },
  {
    "id": "db-c2-t1-041",
    "question": "Theo Bước 3, trong mối quan hệ Một - Một (1:1), vị trí đặt khóa ngoại và các thuộc tính của mối quan hệ chuẩn xác nhất là ở đâu?",
    "options": [
      "Khóa chính ở phía bắt buộc làm khóa ngoại ở phía tùy chọn kèm các thuộc tính của quan hệ",
      "Khóa chính ở phía tùy chọn làm khóa ngoại ở phía bắt buộc kèm các thuộc tính của quan hệ",
      "Bắt buộc phải tạo thêm một bảng thứ ba để chứa hai khóa ngoại giống như quan hệ nhiều-nhiều",
      "Khóa ngoại có thể đặt tùy tiện ở bất kỳ phía nào mà không cần quan tâm đến tính bắt buộc"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục III.4.a: Quan hệ 1:1: Khóa chính ở phía bắt buộc làm khóa ngoại ở phía tùy chọn. Chú ý: Tất cả thuộc tính của mối quan hệ đều được mang sang quan hệ ở phía tùy chọn (nơi đặt khóa ngoại) để tránh phát sinh giá trị NULL.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay đặt khóa ngoại ở phía bắt buộc, dẫn đến hàng loạt bản ghi bị mang giá trị NULL ở phía tùy chọn.",
      "trickWord": "Bẫy quy tắc 1:1: Đặt khóa ngoại ở phía TÙY CHỌN (Optional side)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục III.4.a",
      "tip": "Quan hệ 1:1 ➔ Đặt khóa ngoại và thuộc tính quan hệ ở PHÍA TÙY CHỌN!"
    }
  },
  {
    "id": "db-c2-t1-042",
    "question": "Theo Bước 5, khi chuyển đổi một mối quan hệ một ngôi Một - Nhiều đệ quy (1:N Unary, ví dụ: Nhân viên quản lý nhân viên khác), giải pháp chuẩn là gì?",
    "options": [
      "Bắt buộc phải nhân đôi bảng nhân viên thành hai bảng độc lập hoàn toàn trên đĩa",
      "Tạo khóa ngoại đệ quy tham chiếu đến chính khóa chính trong cùng quan hệ đó",
      "Tách thành một bảng kết hợp mới chứa hai khóa ngoại tham chiếu về máy chủ",
      "Mô hình quan hệ không hỗ trợ quan hệ đệ quy nên bắt buộc phải loại bỏ"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục III.5.a: Quan hệ một ngôi Một - nhiều (1:N đệ quy): Tạo khóa ngoại đệ quy (Recursive Foreign Key) tham chiếu đến khóa chính trong cùng một quan hệ (ví dụ: EMPLOYEE có cột Manager_ID tham chiếu Employee_ID).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay tưởng đệ quy là phải tạo bảng trung gian mới.",
      "trickWord": "Bẫy quan hệ đệ quy 1:N: Khóa ngoại đệ quy (Recursive FK) trong CÙNG 1 BẢNG",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục III.5.a",
      "tip": "Đệ quy 1:N ➔ Thêm 1 cột Khóa ngoại đệ quy trỏ về chính Khóa chính của bảng đó!"
    }
  },
  {
    "id": "db-c2-t1-043",
    "question": "Theo Bước 6, quy tắc tổng quát khi chuyển đổi một mối quan hệ n-ngôi (n-ary Relationship, ví dụ: 3 ngôi giữa Vendor, Part, Warehouse) là tạo ra bao nhiêu quan hệ?",
    "options": [
      "Tạo ra đúng 2n quan hệ để lưu trữ các bảng chỉ dẫn ngược cho từng thực thể",
      "Tạo ra đúng n quan hệ và ghép nối khóa ngoại vòng tròn khép kín giữa chúng",
      "Tạo ra đúng n + 1 quan hệ (gồm n quan hệ thực thể và 1 quan hệ kết hợp mới)",
      "Chỉ tạo duy nhất 1 quan hệ khổng lồ chứa tất cả các thuộc tính của n thực thể"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục III.5.b định nghĩa: Quy tắc n + 1 quan hệ: Tạo ra n + 1 quan hệ gồm: n quan hệ cho n kiểu thực thể tham gia; và 1 quan hệ kết hợp chứa các khóa ngoại tham chiếu đến khóa chính của n quan hệ kia.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh không nhớ công thức chuẩn n + 1 quan hệ cho mối kết hợp n-ngôi.",
      "trickWord": "Bẫy quy tắc n + 1 quan hệ trong chuyển đổi quan hệ n-ngôi",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục III.5.b",
      "tip": "Quan hệ n-ngôi ➔ Tạo n + 1 QUAN HỆ (n bảng thực thể + 1 bảng kết hợp)!"
    }
  },
  {
    "id": "db-c2-t1-044",
    "question": "Theo Bước 7, trong mối quan hệ Cha/Con (Supertype/Subtype, ví dụ: EMPLOYEE và HOURLY_EMPLOYEE), khóa chính của quan hệ con có đặc điểm kỹ thuật gì?",
    "options": [
      "Quan hệ con không được phép có khóa chính riêng mà dùng chung vùng nhớ với quan hệ cha",
      "Là một mã số độc lập không có bất kỳ liên hệ tham chiếu nào với bảng thực thể cha",
      "Bắt buộc phải là một chuỗi ký tự ngẫu nhiên do lập trình viên quy định trong mã nguồn",
      "Vừa là khóa chính của quan hệ con, vừa là khóa ngoại tham chiếu về khóa chính quan hệ cha"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục III.6.a: Khóa chính của quan hệ cha trở thành khóa chính ĐỒNG THỜI là khóa ngoại của các quan hệ con (tham chiếu về quan hệ cha). Giữa cha và con hình thành quan hệ 1:1.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ bảng con có khóa chính riêng và một khóa ngoại riêng biệt.",
      "trickWord": "Bẫy PK bảng con Supertype/Subtype: Vừa là Khóa chính VỪA LÀ Khóa ngoại trỏ về Cha",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục III.6.a",
      "tip": "Bảng con Subtype: Khóa chính ĐỒNG THỜI là Khóa ngoại tham chiếu về Bảng cha!"
    }
  },
  {
    "id": "db-c2-t1-045",
    "question": "Trong CSDL Quản lý bán hàng (Chương II, Mục IV): Hanghoa(MaHG, TenHG, DVT, Dongia, Cohang). Thuộc tính Cohang lưu giá trị 0 hoặc 1 mang ý nghĩa nghiệp vụ gì?",
    "options": [
      "Cohang = 0 nghĩa là hết hàng; Cohang = 1 nghĩa là mặt hàng đó hiện còn hàng trong kho",
      "Cohang = 0 nghĩa là hàng bán lẻ; Cohang = 1 nghĩa là hàng chỉ bán buôn cho đại lý",
      "Cohang = 0 nghĩa là hàng nhập khẩu; Cohang = 1 nghĩa là hàng sản xuất nội địa",
      "Cohang = 0 nghĩa là hàng chưa chịu thuế; Cohang = 1 nghĩa là hàng đã hoàn thành thuế"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục IV.1 ghi chú rõ ràng về thuộc tính: Hanghoa(MaHG, TenHG, DVT, Dongia, Cohang) -- Cohang = 0: hết hàng; Cohang = 1: còn hàng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm với thuộc tính Daily (đại lý/bán lẻ) của bảng Khách.",
      "trickWord": "Bẫy ý nghĩa quy ước thuộc tính Cohang trong CSDL Quản lý bán hàng",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục IV.1",
      "tip": "Cohang: 0 = Hết hàng; 1 = Còn hàng (Khach.Daily: 1 = Đại lý; 0 = Bán lẻ)!"
    }
  },
  {
    "id": "db-c2-t1-046",
    "question": "Trong CSDL Quản lý bán hàng: Khach(MaKH, Hoten, Diachi, Daily). Biểu thức ĐSQH tìm mã số, họ tên của các khách hàng là ĐẠI LÝ và ở địa chỉ 'Cần Thơ' là gì?",
    "options": [
      "σ_(MaKH, Hoten) (π_(Daily = 1 ∧ Diachi = 'Cần Thơ') (Khach))",
      "π_(MaKH, Hoten) (σ_(Daily = 1 ∧ Diachi = 'Cần Thơ') (Khach))",
      "π_(Daily = 1) (Khach) ∩ π_(Diachi = 'Cần Thơ') (Khach)",
      "π_(MaKH, Hoten) (Khach) − σ_(Daily = 0) (Khach)"
    ],
    "answer": 1,
    "explanation": "Khách là đại lý có `Daily = 1`, địa chỉ Cần Thơ có `Diachi = 'Cần Thơ'`. Biểu thức chọn lọc các dòng thỏa mãn cả 2 điều kiện bằng phép `∧`, sau đó chiếu lấy MaKH và Hoten bằng π.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm Daily=1 với Daily=0 hoặc nhầm ký hiệu giữa π và σ.",
      "trickWord": "Bẫy điều kiện đại lý Daily=1 và cú pháp chọn/chiếu ĐSQH",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục IV.1 & IV.2",
      "tip": "Đại lý = Daily = 1; Chọn điều kiện dùng σ, Chiếu cột dùng π!"
    }
  },
  {
    "id": "db-c2-t1-047",
    "question": "Trong CSDL Quản lý bán hàng, cấu trúc khóa chính của bảng Chitiet_HD(SoHD, MaHG, Soluong, Giaban) được thiết kế chuẩn xác là gì?",
    "options": [
      "Khóa chính chỉ gồm duy nhất một thuộc tính MaHG của hàng hóa",
      "Khóa chính chỉ gồm duy nhất một thuộc tính SoHD của hóa đơn",
      "Khóa chính là tổ hợp của cả hai thuộc tính (SoHD, MaHG)",
      "Khóa chính là tổ hợp của cả 4 thuộc tính SoHD, MaHG, Soluong, Giaban"
    ],
    "answer": 2,
    "explanation": "Một hóa đơn có thể có nhiều mặt hàng, một mặt hàng có thể nằm trong nhiều hóa đơn (quan hệ nhiều-nhiều). Do đó bảng Chitiet_HD có khóa chính là tổ hợp (SoHD, MaHG).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ SoHD đứng một mình làm khóa chính (khi đó 1 hóa đơn chỉ mua được 1 món hàng, sai thực tế).",
      "trickWord": "Bẫy khóa chính tổ hợp trong bảng Chi tiết hóa đơn (Chitiet_HD)",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục IV.1",
      "tip": "Chi tiết hóa đơn = Bảng kết hợp M:N ➔ Khóa chính bắt buộc là (SoHD, MaHG)!"
    }
  },
  {
    "id": "db-c2-t1-048",
    "question": "Yêu cầu: \"In ra số hóa đơn và tổng trị giá của các hóa đơn có ngày giao hàng sau ngày lập hóa đơn\". Phép toán ĐSQH nào được sử dụng để kiểm tra điều kiện ngày?",
    "options": [
      "Phép chia ĐSQH giữa cột Ngaygiao và Ngaylap: Hoadon ÷ Hoadon này",
      "Phép chiếu trích xuất hai cột: π_(Ngaygiao > Ngaylap) (Hoadon)",
      "Phép tích Descartes nhân chéo hai bảng: Hoadon × Hoadon bán hàng",
      "Phép chọn so sánh hai thuộc tính: σ_(Ngaygiao > Ngaylap) (Hoadon)"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục II.2.a nêu rõ cấu trúc biểu thức logic C của phép chọn: `(tên thuộc tính) (toán tử so sánh) (tên thuộc tính)`. Ở đây so sánh giữa Ngaygiao và Ngaylap dùng phép chọn σ_(Ngaygiao > Ngaylap).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ phép chọn chỉ so sánh thuộc tính với hằng số, không biết so sánh giữa 2 thuộc tính.",
      "trickWord": "Bẫy cú pháp phép chọn: Hoàn toàn có thể so sánh giữa 2 thuộc tính với nhau",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.2.a",
      "tip": "So sánh giữa 2 cột trong cùng dòng: Dùng phép chọn σ_(Cột1 > Cột2)!"
    }
  },
  {
    "id": "db-c2-t1-049",
    "question": "Khi chuyển đổi một mối quan hệ ba ngôi có danh hiệu riêng (ví dụ: PATIENT_TREATMENT có mã điều trị riêng), điểm cốt lõi cần lưu ý khi chọn khóa chính là gì?",
    "options": [
      "Khóa chính bắt buộc phải đảm bảo tính duy nhất và có thể là danh hiệu riêng của thực thể kết hợp",
      "Bắt buộc không được phép đặt danh hiệu riêng làm khóa chính mà phải gộp 3 khóa ngoại",
      "Mối quan hệ ba ngôi không được phép có bất kỳ khóa chính nào khi cài đặt vào RDBMS",
      "Khóa chính bắt buộc phải là địa chỉ IP máy chủ của bác sĩ trực tiếp điều trị ca đó"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục III.5.b lưu ý quan trọng: Khi mối quan hệ ba ngôi có danh hiệu riêng (VD: PATIENT_TREATMENT), cần xác định rõ khóa chính cho quan hệ kết hợp này... Nguyên tắc bắt buộc: khóa chính phải đảm bảo tính duy nhất (unique).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người mặc định mối quan hệ 3 ngôi lúc nào cũng phải ghép cả 3 khóa ngoại làm khóa chính.",
      "trickWord": "Bẫy linh hoạt khi có danh hiệu riêng: Có thể chọn danh hiệu riêng làm Khóa chính",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục III.5.b",
      "tip": "Có danh hiệu riêng (Identifier) ➔ Có thể dùng danh hiệu riêng làm Khóa chính!"
    }
  },
  {
    "id": "db-c2-t1-050",
    "question": "Tổng kết Chương II: Cỗ máy Đại số quan hệ (Relational Algebra) đóng vai trò nền tảng nào trong cấu trúc hoạt động của các hệ quản trị CSDL quan hệ hiện đại?",
    "options": [
      "Là ngôn ngữ dòng lệnh duy nhất mà người dùng cuối phải gõ trực tiếp trên bàn phím máy trạm",
      "Là cơ sở lý thuyết toán học trực tiếp để phân tích, tối ưu hóa và thực thi các câu lệnh truy vấn SQL",
      "Là chương trình điều khiển phần cứng dùng để định dạng các track và sector trên đĩa cứng",
      "Là giao thức mạng dùng để truyền tải các gói tin TCP/IP giữa máy khách và máy chủ CSDL"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục II.1.a & V.1 khẳng định: Đại số quan hệ là cơ sở lý thuyết toán học cho việc thiết lập các ngôn ngữ dữ liệu bậc cao hơn (như SQL). Bộ tối ưu hóa truy vấn (Query Optimizer) của RDBMS biên dịch SQL thành cây biểu thức ĐSQH để tối ưu và thực thi.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nghĩ ĐSQH chỉ là lý thuyết trên giấy, không biết RDBMS chuyển SQL thành ĐSQH để tối ưu.",
      "trickWord": "Bẫy vai trò cốt lõi của ĐSQH: Nền tảng toán học tối ưu và thực thi truy vấn SQL",
      "citation": "Giáo trình Hệ CSDL — Chương 2, Mục II.1.a & V.1",
      "tip": "Đại số quan hệ = Nền tảng toán học để RDBMS phân tích, tối ưu hóa và thực thi SQL!"
    }
  }
];
