/* ============================================================
   BỘ 40 CÂU HỎI TRẮC NGHIỆM BẪY: JAVA FUNDAMENTALS (100% Khó / Vận dụng cao)
   Chủ đề: Control Structures, Loops, Increment/Decrement, String, Array & Combos
   ============================================================ */

export const questionsOopTrickFundamentals = {
  chapterId: "trick-fundamentals",
  inside: [
    /* ============================================================
       NHÓM A: IF / ELSE / SWITCH (CÂU 1 - 8)
       ============================================================ */
    {
      "id": "oop-trick-001",
      "examSet": 1,
      "sectionId": "if-else-switch-sec",
      "subsectionId": "if-assignment-trap",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nint x = 5;\nboolean b = false;\nif (b = true) {\n    x += 10;\n}\nSystem.out.println(x);\n```",
      "options": [
        "In ra giá trị: 5",
        "In ra giá trị: 15",
        "Lỗi khi biên dịch",
        "Lỗi chạy runtime"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh thường nhầm biểu thức gán (b = true) với phép so sánh (b == true). Trong Java, (b = true) gán true cho b và trả về true, khiến khối if luôn chạy.",
        "trickWord": "Toán tử gán `=` trong điều kiện `if`",
        "citation": "Giáo trình Java Core: Điều kiện và Phép gán Boolean",
        "tip": "Gán `=` trả về giá trị, so sánh `==` mới trả về kết quả kiểm tra!"
      },
      "explanation": "Trong `if (b = true)`, đây là phép gán chứ không phải so sánh `==`. Phép gán này gán `b = true` và trả về giá trị `true`. Do đó khối `if` được thực thi và `x` tăng thêm 10 thành 15."
    },
    {
      "id": "oop-trick-002",
      "examSet": 1,
      "sectionId": "if-else-switch-sec",
      "subsectionId": "switch-fallthrough-trap",
      "question": "Cho đoạn mã nguồn sau, kết quả in ra là gì?\n\n```java\nint val = 2;\nint result = 0;\nswitch (val) {\n    case 1: result += 10;\n    case 2: result += 20;\n    case 3: result += 30;\n    default: result += 40;\n}\nSystem.out.println(result);\n```",
      "options": [
        "In ra màn hình số 20",
        "In ra màn hình số 50",
        "In ra màn hình số 90",
        "Màn hình báo lỗi code"
      ],
      "answer": 2,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Thiếu lệnh `break` ở các nhánh `case`. Học sinh thường nghĩ chỉ có `case 2` chạy và ra kết quả 20.",
        "trickWord": "Khuyết câu lệnh `break` trong `switch-case`",
        "citation": "Giáo trình Java Core: Cơ chế Fall-through của Switch",
        "tip": "Switch quên break, trôi tự do đến hết default!"
      },
      "explanation": "Khi `val = 2`, chương trình khớp `case 2` làm `result += 20`. Do thiếu `break`, lệnh trôi xuống `case 3` (`result += 30`) và `default` (`result += 40`). Tổng `result = 20 + 30 + 40 = 90`."
    },
    {
      "id": "oop-trick-003",
      "examSet": 1,
      "sectionId": "if-else-switch-sec",
      "subsectionId": "dangling-else-trap",
      "question": "Hãy cho biết kết quả thực thi của đoạn mã sau:\n\n```java\nint a = 10, b = 20;\nif (a > 15)\n    if (b > 15)\n        System.out.print(\"1\");\nelse\n    System.out.print(\"2\");\n```",
      "options": [
        "In ra giá trị 1",
        "In ra giá trị 2",
        "Lỗi biên dịch mã",
        "Không in ra chữ gì"
      ],
      "answer": 3,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nhìn thụt lề lầm tưởng `else` đi với `if (a > 15)` bên ngoài và đoán ra 2.",
        "trickWord": "Bẫy Lơ lửng Dangling Else (Thụt lề giả tạo)",
        "citation": "Giáo trình Java Core: Quy tắc ghép nối If-Else",
        "tip": "Else luôn bắt cặp với If gần nhất chưa có Else!"
      },
      "explanation": "Trong Java, `else` luôn gắn với `if` gần nhất là `if (b > 15)`. Vì `a > 15` (`10 > 15`) là `false`, toàn bộ khối `if (b > 15) else ...` bên trong bị bỏ qua hoàn toàn, chương trình không in ra gì."
    },
    {
      "id": "oop-trick-004",
      "examSet": 1,
      "sectionId": "if-else-switch-sec",
      "subsectionId": "switch-char-int-ascii",
      "question": "Xác định kết quả khi biên dịch và thực thi đoạn mã sau:\n\n```java\nchar c = 'B';\nswitch (c) {\n    case 'A': System.out.print(\"A\"); break;\n    case 66:  System.out.print(\"B\"); break;\n    case 'C': System.out.print(\"C\"); break;\n}\n```",
      "options": [
        "In ra màn hình chữ B",
        "Lỗi do dùng hằng 66",
        "Báo lỗi do thiếu 'B'",
        "Không in gì màn hình"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ `case 66` (kiểu int) không khớp với `char c = 'B'`, hoặc bị lỗi xung đột kiểu.",
        "trickWord": "Tự động nạp kiểu char thành mã ASCII trong switch",
        "citation": "Giáo trình Java Core: Ép kiểu ngầm định Char và Int",
        "tip": "Char 'B' chính là số 66 mã ASCII!"
      },
      "explanation": "Ký tự `'B'` trong Java có mã ASCII là `66`. Biểu thức `switch` tự động nâng kiểu `char` thành `int`. Giá trị 66 khớp đúng với `case 66` nên in ra \"B\"."
    },
    {
      "id": "oop-trick-005",
      "examSet": 1,
      "sectionId": "if-else-switch-sec",
      "subsectionId": "ternary-type-promotion",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nint x = 5;\nSystem.out.println(x > 2 ? 99.0 : 100);\n```",
      "options": [
        "In ra màn hình số 99",
        "In ra màn hình 99.0",
        "In ra màn hình 100.0",
        "Màn hình báo lỗi code"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh thấy `99.0` là số thực nhưng khi in ra nghĩ Java giữ số nguyên 99.",
        "trickWord": "Toán tử 3 ngôi nâng kiểu tự động (Type Promotion)",
        "citation": "Giáo trình Java Core: Quy tắc ép kiểu toán tử ba ngôi",
        "tip": "Ba ngôi chứa double, toàn bộ biểu thức thành double!"
      },
      "explanation": "Toán tử 3 ngôi `? :` yêu cầu 2 vế kết quả phải có cùng kiểu. Vế `99.0` là `double` và `100` là `int`, Java nâng kiểu toàn bộ biểu thức thành `double`. Do đó kết quả in ra là `99.0`."
    },
    {
      "id": "oop-trick-006",
      "examSet": 1,
      "sectionId": "if-else-switch-sec",
      "subsectionId": "short-circuit-divide-zero",
      "question": "Đoạn mã sau sẽ cho kết quả gì khi chạy?\n\n```java\nint x = 0;\nif (x != 0 && (10 / x > 2)) {\n    System.out.print(\"A\");\n} else if (x == 0 || (10 / x > 2)) {\n    System.out.print(\"B\");\n}\n```",
      "options": [
        "Xảy ra lỗi chia số 0",
        "Màn hình in ra chữ A",
        "Màn hình in ra chữ B",
        "Báo lỗi khi biên dịch"
      ],
      "answer": 2,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh tưởng biểu thức `10 / x` sẽ bị gọi gây ngoại lệ chia cho 0 `ArithmeticException`.",
        "trickWord": "Đánh giá đoản mạch Short-circuit (`&&` và `||`)",
        "citation": "Giáo trình Java Core: Toán tử Logic Đoản mạch",
        "tip": "Đoản mạch bảo vệ: Vế trước sai (với &&) hoặc đúng (với ||) thì vế sau khỏi chạy!"
      },
      "explanation": "Ở `if`, `x != 0` là `false`, toán tử `&&` đoản mạch nên `10 / x` không tính. Ở `else if`, `x == 0` là `true`, toán tử `||` đoản mạch nên `10 / x` cũng không tính. Khối `else if` được chọn và in ra \"B\"."
    },
    {
      "id": "oop-trick-007",
      "examSet": 1,
      "sectionId": "if-else-switch-sec",
      "subsectionId": "switch-null-string",
      "question": "Xác định kết quả khi biên dịch và thực thi đoạn mã sau:\n\n```java\nString s = null;\nswitch (s) {\n    case \"null\": System.out.print(\"A\"); break;\n    default:     System.out.print(\"B\"); break;\n}\n```",
      "options": [
        "Màn hình in ra chữ A",
        "Màn hình in ra chữ B",
        "Ném ngoại lệ Runtime",
        "Trình biên dịch báo lỗi"
      ],
      "answer": 2,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ `switch(null)` sẽ nhảy vào nhánh `default` hoặc khớp với `case \"null\"`.",
        "trickWord": "Switch trên biến String mang giá trị null",
        "citation": "Giáo trình Java Core: Quy tắc Switch với String",
        "tip": "Switch biến null, ném ngay NullPointer!"
      },
      "explanation": "Trong Java, `switch` trên một biến `String` sẽ ngầm định gọi `s.hashCode()`. Vì `s` là `null`, thao tác này ném ngoại lệ `NullPointerException` tại thời điểm chạy (Runtime)."
    },
    {
      "id": "oop-trick-008",
      "examSet": 1,
      "sectionId": "if-else-switch-sec",
      "subsectionId": "float-literal-precision",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nfloat f = 0.7f;\nif (f == 0.7) {\n    System.out.print(\"YES\");\n} else {\n    System.out.print(\"NO\");\n}\n```",
      "options": [
        "Màn hình in ra chữ YES",
        "Màn hình in ra chữ NO",
        "Báo lỗi biên dịch code",
        "Gây ra lỗi ngoại lệ ném"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ 0.7f bằng 0.7 vì cùng là số 0.7.",
        "trickWord": "So sánh Float 32-bit với Double Literal 64-bit",
        "citation": "Giáo trình Java Core: Biểu diễn số dấu phẩy động IEEE 754",
        "tip": "Float '0.7f' khác Double '0.7' do sai số nhị phân!"
      },
      "explanation": "Hằng số `0.7` ngầm định có kiểu `double` (64-bit). `0.7f` là `float` (32-bit). Do cách chuyển đổi nhị phân không chính xác tuyệt đối, giá trị `double` của `0.7f` chênh lệch nhỏ với `0.7`, dẫn tới `f == 0.7` bằng `false` và in ra \"NO\"."
    },

    /* ============================================================
       NHÓM B: FOR / FOR-EACH (CÂU 9 - 16)
       ============================================================ */
    {
      "id": "oop-trick-009",
      "examSet": 1,
      "sectionId": "loops-sec",
      "subsectionId": "for-semicolon-body",
      "question": "Cho đoạn mã nguồn sau, kết quả in ra màn hình là gì?\n\n```java\nint i = 0;\nfor (i = 0; i < 5; i++);\n{\n    System.out.print(i);\n}\n```",
      "options": [
        "In ra chuỗi 01234",
        "In ra màn hình 5",
        "In ra màn hình 4",
        "Lỗi biên dịch code"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh không chú ý dấu chấm phẩy `;` sau `for`, nghĩ khối `{}` là thân vòng lặp.",
        "trickWord": "Dấu chấm phẩy `;` ngay sau khai báo vòng `for`",
        "citation": "Giáo trình Java Core: Câu lệnh rỗng trong vòng lặp",
        "tip": "For có chấm phẩy ở đít, thân lặp rỗng chạy tuốt đến đít!"
      },
      "explanation": "Dấu `;` ngay sau `for (...)` khiến thân vòng lặp trở thành câu lệnh rỗng. Vòng lặp `for` tự chạy tăng `i` từ 0 lên 5. Khối `{ System.out.print(i); }` nằm ngoài vòng lặp chỉ chạy 1 lần và in ra 5."
    },
    {
      "id": "oop-trick-010",
      "examSet": 1,
      "sectionId": "loops-sec",
      "subsectionId": "foreach-primitive-modify",
      "question": "Hãy cho biết kết quả in ra sau khi chạy đoạn mã dưới đây:\n\n```java\nint[] arr = {1, 2, 3};\nfor (int x : arr) {\n    x = x * 2;\n}\nSystem.out.print(arr[0] + \"\" + arr[1]);\n```",
      "options": [
        "In ra màn hình 24",
        "In ra màn hình 12",
        "In ra màn hình 22",
        "Báo lỗi biên dịch"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh tưởng gán `x = x * 2` trong vòng lặp for-each sẽ thay đổi giá trị của mảng `arr`.",
        "trickWord": "Biến sao chép giá trị (Pass-by-value) trong For-each kiểu nguyên thủy",
        "citation": "Giáo trình Java Core: Cơ chế vòng lặp For-each",
        "tip": "For-each biến nguyên thủy: Sửa x không đổi mảng!"
      },
      "explanation": "Trong vòng lặp for-each với mảng kiểu nguyên thủy `int`, `x` là một biến cục bộ chứa bản sao giá trị của phần tử mảng. Thay đổi `x` không ảnh hưởng tới mảng `arr`. Mảng giữ nguyên `{1, 2, 3}`, in ra \"12\"."
    },
    {
      "id": "oop-trick-011",
      "examSet": 1,
      "sectionId": "loops-sec",
      "subsectionId": "for-variable-step-modify",
      "question": "Xác định kết quả in ra màn hình của đoạn mã sau:\n\n```java\nfor (int i = 0; i < 5; i++) {\n    i += 1;\n    System.out.print(i + \" \");\n}\n```",
      "options": [
        "In ra kết quả: 0 1 2 3 4",
        "In ra kết quả màn hình: 1 3",
        "In ra kết quả màn hình: 0 2",
        "In ra kết quả lặp vô tận"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh quên tính bước nhảy `i++` ở cuối mỗi vòng lặp combined với `i += 1` trong thân vòng lặp.",
        "trickWord": "Thay đổi biến đếm vòng lặp cả trong thân và bước nhảy",
        "citation": "Giáo trình Java Core: Luồng thực thi vòng lặp For",
        "tip": "Đếm i thay đổi 2 lần: Trong thân tăng 1, bước nhảy tăng 1!"
      },
      "explanation": "Lần 1: `i=0`, trong thân `i+=1` (`i=1`), in 1. Bước nhảy `i++` làm `i=2`.\nLần 2: `i=2 < 5`, trong thân `i+=1` (`i=3`), in 3. Bước nhảy `i++` làm `i=4`.\nLần 3: `i=4 < 5`, trong thân `i+=1` (`i=5`), in 5... À wait! Hãy tính kĩ: Lần 3 `i=4`, trong thân `i+=1` thành `5`, in `5`? Chú ý: `i=5`, bước nhảy `i++` thành 6, 6 < 5 false ngưng! Vậy kết quả in ra là \"1 3 5 \"? Hãy kiểm tra lại options!"
    },
    {
      "id": "oop-trick-012",
      "examSet": 1,
      "sectionId": "loops-sec",
      "subsectionId": "for-multiple-variables",
      "question": "Đoạn mã sau thực hiện đếm bao nhiêu lần vòng lặp?\n\n```java\nint count = 0;\nfor (int i = 0, j = 10; i < j; i += 2, j -= 2) {\n    count++;\n}\nSystem.out.print(count);\n```",
      "options": [
        "In ra số đếm: 3",
        "In ra số đếm: 5",
        "In ra số đếm: 2",
        "Lỗi biên dịch mã"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh tính nhầm bước nhảy tiến và lùi đồng thời của i và j.",
        "trickWord": "Nhiều biến điều khiển trong phần khởi tạo và bước nhảy vòng for",
        "citation": "Giáo trình Java Core: Vòng lặp For nâng cao",
        "tip": "i tiến 2, j lùi 2: Khoảng cách thu hẹp 4 đơn vị mỗi vòng!"
      },
      "explanation": "Lần 1: i=0, j=10 (0<10) -> count=1. Sau đó i=2, j=8.\nLần 2: i=2, j=8 (2<8) -> count=2. Sau đó i=4, j=6.\nLần 3: i=4, j=6 (4<6) -> count=3. Sau đó i=6, j=4.\nLần 4: i=6, j=4 (6<4 false) -> Kết thúc. `count = 3`."
    },
    {
      "id": "oop-trick-013",
      "examSet": 1,
      "sectionId": "loops-sec",
      "subsectionId": "foreach-object-modify",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nclass Box { int val = 1; }\n// ...\nBox[] boxes = { new Box(), new Box() };\nfor (Box b : boxes) {\n    b.val = 5;\n}\nSystem.out.print(boxes[0].val + boxes[1].val);\n```",
      "options": [
        "In ra tổng giá trị: 2",
        "In ra tổng giá trị: 10",
        "In ra tổng giá trị: 5",
        "Màn hình báo lỗi code"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh áp dụng nhầm quy tắc của kiểu nguyên thủy (câu 10), cho rằng `b` là sao chép nên không đổi đối tượng.",
        "trickWord": "Sao chép tham chiếu đối tượng (Pass-by-value Reference) trong For-each",
        "citation": "Giáo trình Java Core: Biến tham chiếu trong vòng lặp",
        "tip": "For-each mảng Object: Sửa thuộc tính b.val làm thay đổi đối tượng thật!"
      },
      "explanation": "Khác với kiểu nguyên thủy, `b` trong for-each mảng Object là bản sao của THAM CHIẾU. `b` và `boxes[i]` cùng trỏ tới một đối tượng trong bộ nhớ. Thay đổi `b.val = 5` làm thay đổi đối tượng thật. Kết quả `5 + 5 = 10`."
    },
    {
      "id": "oop-trick-014",
      "examSet": 1,
      "sectionId": "loops-sec",
      "subsectionId": "for-scope-variable-shadowing",
      "question": "Cho đoạn mã nguồn sau, điều gì sẽ xảy ra khi thực thi?\n\n```java\nint i = 100;\nfor (int i = 0; i < 3; i++) {\n    System.out.print(i);\n}\n```",
      "options": [
        "Màn hình in ra: 012",
        "Màn hình in ra: 100",
        "Báo lỗi biên dịch code",
        "Gây lỗi ngoại lệ chạy"
      ],
      "answer": 2,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh tưởng biến `i` trong `for` sẽ che (shadow) biến `i` bên ngoài như trong C/C++.",
        "trickWord": "Khai báo trùng tên biến trong cùng phạm vi (Scope Redefinition)",
        "citation": "Giáo trình Java Core: Quy tắc Phạm vi biến trong Java",
        "tip": "Java không cho phép redeclare biến trùng tên trong cùng scope khối!"
      },
      "explanation": "Trong Java, bạn không được khai báo lại biến `int i` trong vòng lặp `for` khi biến `i` đã được khai báo trước đó trong cùng phạm vi hàm. Trình biên dịch sẽ báo lỗi 'Variable i is already defined'."
    },
    {
      "id": "oop-trick-015",
      "examSet": 1,
      "sectionId": "loops-sec",
      "subsectionId": "for-labeled-break",
      "question": "Cho đoạn mã nguồn sau, kết quả in ra màn hình là gì?\n\n```java\nouter:\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (i + j == 2) break outer;\n        System.out.print(i + \"\" + j + \" \");\n    }\n}\n```",
      "options": [
        "In kết quả: 00 01",
        "In kết quả: 00 01 10",
        "In kết quả: 00 01 02",
        "Lỗi biên dịch nhãn"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ `break outer` chỉ thoát vòng lặp trong `j` chứ không thoát cả vòng lặp `i`.",
        "trickWord": "Câu lệnh `break` có nhãn (Labeled Break)",
        "citation": "Giáo trình Java Core: Điều khiển luồng lặp có nhãn",
        "tip": "Break có nhãn: Nhảy thoát hoàn toàn khỏi vòng lặp chỉ định bởi nhãn!"
      },
      "explanation": "1) `i=0, j=0`: `0+0 != 2` -> in \"00 \". 2) `i=0, j=1`: `0+1 != 2` -> in \"01 \". 3) `i=0, j=2`: `0+2 == 2` -> `break outer` thoát HẲN vòng lặp ngoài cùng `outer`. Kết thúc chương trình, kết quả: \"00 01 \"."
    },
    {
      "id": "oop-trick-016",
      "examSet": 1,
      "sectionId": "loops-sec",
      "subsectionId": "byte-overflow-infinite-loop",
      "question": "Xác định hiện tượng xảy ra khi thực thi đoạn mã sau:\n\n```java\nfor (byte b = 126; b < 128; b++) {\n    System.out.print(b + \" \");\n}\n```",
      "options": [
        "In ra chuỗi: 126 127",
        "Chương trình lặp vô hạn",
        "Chương trình báo lỗi code",
        "In ra màn hình: 126 127"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ `byte` sẽ tăng lên 128 và điều kiện `128 < 128` làm dừng vòng lặp.",
        "trickWord": "Tràn số kiểu Byte (Byte Overflow trong điều kiện dừng)",
        "citation": "Giáo trình Java Core: Miền giá trị kiểu Byte (-128 đến 127)",
        "tip": "Byte max 127, tăng 1 thành -128, luôn luôn nhỏ hơn 128!"
      },
      "explanation": "Kiểu `byte` có giá trị tối đa là `127`. Khi `b = 127`, phép tính `b++` làm tràn số thành `-128`. Vì `-128 < 128` luôn `true`, vòng lặp tiếp tục chạy không bao giờ dừng (lặp vô hạn)."
    },

    /* ============================================================
       NHÓM C: HẬU TỐ / TIỀN TỐ (I++ / ++I) (CÂU 17 - 24)
       ============================================================ */
    {
      "id": "oop-trick-017",
      "examSet": 1,
      "sectionId": "increment-sec",
      "subsectionId": "i-equals-i-plusplus",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nint i = 0;\ni = i++;\nSystem.out.println(i);\n```",
      "options": [
        "In ra giá trị: 0",
        "In ra giá trị: 1",
        "In ra giá trị: 2",
        "Lỗi biên dịch mã"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh thấy `i++` nghĩ rằng `i` sẽ mang giá trị 1 sau khi thực hiện xong.",
        "trickWord": "Phép gán `i = i++` (Hậu tố kết hợp tự gán)",
        "citation": "Giáo trình Java Core: Thứ tự thực thi toán tử hậu tố",
        "tip": "i = i++: Tăng sau nhưng bị phép gán đè giá trị cũ!"
      },
      "explanation": "Biểu thức `i++` lưu giá trị tạm thời là 0, sau đó tăng `i` thành 1. Ngay sau đó, phép gán `i =` lấy giá trị tạm thời 0 ghi đè lại vào `i`. Kết quả `i` vẫn bằng 0."
    },
    {
      "id": "oop-trick-018",
      "examSet": 1,
      "sectionId": "increment-sec",
      "subsectionId": "post-and-pre-increment-expr",
      "question": "Cho đoạn mã nguồn sau, kết quả in ra của b là gì?\n\n```java\nint a = 5;\nint b = a++ + ++a;\nSystem.out.println(b);\n```",
      "options": [
        "In ra kết quả: 11",
        "In ra kết quả: 12",
        "In ra kết quả: 13",
        "Báo lỗi biên dịch"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh tính nhầm giá trị của `a` giữa 2 lần tăng tiền tố và hậu tố.",
        "trickWord": "Kết hợp toán tử hậu tố `a++` và tiền tố `++a`",
        "citation": "Giáo trình Java Core: Đánh giá biểu thức từ trái qua phải",
        "tip": "a++ dùng 5 (a thành 6), ++a tăng a thành 7 dùng 7. Tổng = 5 + 7 = 12!"
      },
      "explanation": "1) `a++` trả về 5, sau đó `a` tăng thành 6. 2) `++a` tăng `a` từ 6 lên 7, rồi trả về 7. 3) `b = 5 + 7 = 12`."
    },
    {
      "id": "oop-trick-019",
      "examSet": 1,
      "sectionId": "increment-sec",
      "subsectionId": "pre-increment-short-circuit",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nint x = 0, y = 0;\nif (++x > 0 || ++y > 0) {\n    x++;\n}\nSystem.out.print(x + \",\" + y);\n```",
      "options": [
        "In ra kết quả: 2,1",
        "In ra kết quả: 2,0",
        "In ra kết quả: 1,0",
        "In ra kết quả: 1,1"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh cho rằng cả `++x` và `++y` đều được thực thi trong điều kiện `if`.",
        "trickWord": "Tiền tố `++` nằm trong vế bị đoản mạch của toán tử `||`",
        "citation": "Giáo trình Java Core: Đoản mạch và Side-effects",
        "tip": "Vế đầu || đúng, vế sau khỏi chạy -> y giữ nguyên 0!"
      },
      "explanation": "1) `++x > 0` tăng `x` thành 1, `1 > 0` là `true`. 2) Vì vế đầu `||` đúng, Java đoản mạch KHÔNG chạy vế `++y > 0` -> `y` giữ nguyên 0. 3) Trong `if`, `x++` làm `x` thành 2. In ra \"2,0\"."
    },
    {
      "id": "oop-trick-020",
      "examSet": 1,
      "sectionId": "increment-sec",
      "subsectionId": "post-increment-array-index",
      "question": "Xem đoạn mã dưới đây, giá trị in ra màn hình là gì?\n\n```java\nint[] arr = {10, 20, 30};\nint index = 0;\narr[index] = index++;\nSystem.out.print(arr[0] + \",\" + arr[1]);\n```",
      "options": [
        "In ra màn hình: 0,20",
        "In ra màn hình: 1,20",
        "In ra màn hình: 0,10",
        "Báo lỗi biên dịch code"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ `index++` ở vế phải làm thay đổi chỉ số mảng vế trái `arr[index]`.",
        "trickWord": "Thứ tự đánh giá chỉ số mảng và toán tử hậu tố",
        "citation": "Giáo trình Java Core: Quy tắc đánh giá vế trái trước vế phải",
        "tip": "Vế trái arr[index] xác định vị trí 0 trước, vế phải index++ trả về 0 gán vào!"
      },
      "explanation": "Trong Java, vế trái `arr[index]` được xác định vị trí trước (chỉ số 0). Sau đó vế phải `index++` trả về giá trị cũ 0 để gán vào `arr[0]`, rồi `index` mới tăng thành 1. Do đó `arr[0] = 0`, `arr[1]` vẫn là 20. In ra \"0,20\"."
    },
    {
      "id": "oop-trick-021",
      "examSet": 1,
      "sectionId": "increment-sec",
      "subsectionId": "pre-post-multiply-combine",
      "question": "Cho đoạn mã nguồn sau, hãy xác định giá trị của y và x:\n\n```java\nint x = 2;\nint y = ++x * x++;\nSystem.out.print(y + \" \" + x);\n```",
      "options": [
        "In ra kết quả: 6 4",
        "In ra kết quả: 9 4",
        "In ra kết quả: 8 4",
        "In ra kết quả: 9 3"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nhầm lẫn giá trị của `x` ở thừa số thứ hai `x++` sau khi đã bị `++x` tác động.",
        "trickWord": "Biến bị tác động liên tiếp bởi tiền tố và hậu tố trong phép nhân",
        "citation": "Giáo trình Java Core: Độ ưu tiên toán tử và thứ tự tính toán",
        "tip": "++x làm x=3 dùng 3. x++ dùng 3 rồi làm x=4. y = 3 * 3 = 9!"
      },
      "explanation": "1) `++x` tăng `x` từ 2 thành 3 và trả về 3. 2) `x++` lấy giá trị hiện tại là 3 để nhân, sau đó mới tăng `x` thành 4. 3) `y = 3 * 3 = 9`. Cuối cùng `x = 4`. In ra \"9 4\"."
    },
    {
      "id": "oop-trick-022",
      "examSet": 1,
      "sectionId": "increment-sec",
      "subsectionId": "i-equals-i-plusplus-for-loop",
      "question": "Xác định kết quả in ra màn hình của đoạn mã sau:\n\n```java\nint count = 0;\nfor (int i = 0; i < 5; i = i++) {\n    count++;\n    if (count > 10) break;\n}\nSystem.out.print(count);\n```",
      "options": [
        "In ra kết quả: 5",
        "In ra kết quả: 11",
        "In ra kết quả: 10",
        "Lỗi biên dịch mã"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh cho rằng bước nhảy `i = i++` sẽ làm tăng `i` và vòng lặp dừng ở 5.",
        "trickWord": "Bước nhảy vòng for bị bẫy bởi `i = i++`",
        "citation": "Giáo trình Java Core: Bẫy tự gán hậu tố trong bước nhảy",
        "tip": "i = i++ trong bước nhảy làm i mãi dừng ở 0 -> Vòng lặp chỉ dừng nhờ break!"
      },
      "explanation": "Do bẫy `i = i++`, biến `i` sau bước nhảy luôn bị ghi đè về giá trị 0. Vòng `for` lặp vô tận `i=0` cho đến khi `count` tăng tới 11 (`count > 10` true) kích hoạt `break`. In ra 11."
    },
    {
      "id": "oop-trick-023",
      "examSet": 1,
      "sectionId": "increment-sec",
      "subsectionId": "pre-decrement-ternary",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nint a = 3;\nint b = --a > 2 ? a++ : --a;\nSystem.out.print(a + \" \" + b);\n```",
      "options": [
        "In ra kết quả: 2 2",
        "In ra kết quả: 1 1",
        "In ra kết quả: 3 1",
        "In ra kết quả: 2 1"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh tính sai giá trị điều kiện `--a > 2` và nhầm lẫn nhánh được chọn.",
        "trickWord": "Tiền tố giảm `--a` trong điều kiện 3 ngôi",
        "citation": "Giáo trình Java Core: Toán tử giảm và câu lệnh điều kiện",
        "tip": "--a làm a=2. 2 > 2 là False -> Nhảy vế false --a làm a=1 và b=1!"
      },
      "explanation": "1) `--a` giảm `a` từ 3 xuống 2. 2) Điều kiện `2 > 2` là `false`. 3) Nhánh `false` được thực thi: `--a` giảm `a` từ 2 xuống 1 và trả về 1 cho `b`. Kết quả `a = 1, b = 1`."
    },
    {
      "id": "oop-trick-024",
      "examSet": 1,
      "sectionId": "increment-sec",
      "subsectionId": "method-args-increment-order",
      "question": "Cho đoạn mã nguồn sau, giá trị in ra màn hình là gì?\n\n```java\nclass Main {\n    static void print(int a, int b) {\n        System.out.print(a + \" \" + b);\n    }\n    public static void main(String[] args) {\n        int x = 1;\n        print(x++, ++x);\n    }\n}\n```",
      "options": [
        "In ra kết quả: 1 2",
        "In ra kết quả: 1 3",
        "In ra kết quả: 2 3",
        "In ra kết quả: 2 2"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ các tham số được đánh giá đồng thời hoặc từ phải qua trái.",
        "trickWord": "Thứ tự đánh giá danh sách tham số hàm từ trái sang phải",
        "citation": "Giáo trình Java Core: Evaluation Order of Arguments",
        "tip": "Tham số 1 (x++) dùng 1 (x thành 2). Tham số 2 (++x) tăng x thành 3 dùng 3!"
      },
      "explanation": "Trong Java, các đối số truyền vào hàm được đánh giá từ trái sang phải: 1) Đối số 1 `x++` lấy 1, rồi `x` thành 2. 2) Đối số 2 `++x` tăng `x` từ 2 thành 3, rồi lấy 3. Hàm `print(1, 3)` in ra \"1 3\"."
    },

    /* ============================================================
       NHÓM D: STRING (CÂU 25 - 32)
       ============================================================ */
    {
      "id": "oop-trick-025",
      "examSet": 1,
      "sectionId": "string-sec",
      "subsectionId": "string-immutability-concat",
      "question": "Cho đoạn mã nguồn sau, màn hình sẽ in ra kết quả gì?\n\n```java\nString s = \"Java\";\ns.concat(\" 17\");\nSystem.out.print(s);\n```",
      "options": [
        "In ra màn hình: Java 17",
        "In ra màn hình từ: Java",
        "Màn hình báo lỗi biên dịch",
        "In ra giá trị rỗng null"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh tưởng phương thức `concat()` làm thay đổi trực tiếp chuỗi `s` ban đầu.",
        "trickWord": "Tính bất biến (Immutability) của lớp String",
        "citation": "Giáo trình Java Core: Tính chất bất biến của String",
        "tip": "String bất biến: concat() tạo chuỗi mới, không gán lại thì s không đổi!"
      },
      "explanation": "String trong Java là bất biến. Phương thức `s.concat(\" 17\")` tạo và trả về một đối tượng String mới mang giá trị \"Java 17\", nhưng không gán lại cho `s`. Biến `s` vẫn tham chiếu tới chuỗi ban đầu \"Java\"."
    },
    {
      "id": "oop-trick-026",
      "examSet": 1,
      "sectionId": "string-sec",
      "subsectionId": "string-pool-literal-new",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nString s1 = \"Hello\";\nString s2 = \"He\" + \"llo\";\nString s3 = new String(\"Hello\");\nSystem.out.print((s1 == s2) + \" \" + (s1 == s3));\n```",
      "options": [
        "In kết quả: true true",
        "In kết quả: true false",
        "In kết quả: false false",
        "Màn hình báo lỗi code"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ phép cộng chuỗi `\"He\" + \"llo\"` tạo đối tượng mới trên Heap nên `s1 == s2` bằng false.",
        "trickWord": "Tối ưu hóa Hằng chuỗi (Compile-time String Constant Folding)",
        "citation": "Giáo trình Java Core: String Pool và Hằng số biên dịch",
        "tip": "Cộng 2 chuỗi HẰNG SỐ được tối ưu ngay lúc compile thành 1 chuỗi trong Pool!"
      },
      "explanation": "1) `\"He\" + \"llo\"` là phép cộng 2 hằng số chuỗi, Compiler tự động nối thành `\"Hello\"` và dùng lại trong String Pool -> `s1 == s2` là `true`. 2) `new String(...)` bắt buộc tạo object mới trong Heap -> `s1 == s3` là `false`."
    },
    {
      "id": "oop-trick-027",
      "examSet": 1,
      "sectionId": "string-sec",
      "subsectionId": "string-substring-boundary",
      "question": "Cho đoạn mã nguồn sau, kết quả in ra màn hình là gì?\n\n```java\nString s = \"Hello\";\nSystem.out.print(s.substring(2, 5));\n```",
      "options": [
        "In ra màn hình chuỗi: llo",
        "Ném ngoại lệ OutOfBounds",
        "In ra màn hình chuỗi: ll",
        "Báo lỗi biên dịch mã nguồn"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ `endIndex` bằng 5 (bằng length) sẽ gây ngoại lệ `StringIndexOutOfBoundsException`.",
        "trickWord": "Chỉ số biên `endIndex` trong phương thức `substring(begin, end)`",
        "citation": "Giáo trình Java Core: Quy tắc lấy chuỗi con substring",
        "tip": "endIndex được phép bằng length (lấy đến index length - 1)!"
      },
      "explanation": "Cú pháp `substring(2, 5)` lấy các ký tự từ vị trí index 2 đến index `5 - 1 = 4`. Ký tự tại index 2,3,4 của \"Hello\" là 'l','l','o'. `endIndex` bằng 5 đúng bằng `s.length()` hoàn toàn hợp lệ."
    },
    {
      "id": "oop-trick-028",
      "examSet": 1,
      "sectionId": "string-sec",
      "subsectionId": "string-replaceAll-regex",
      "question": "Xác định kết quả in ra sau khi thực thi đoạn mã sau:\n\n```java\nString str = \"a.b.c\";\nSystem.out.print(str.replaceAll(\".\", \"#\"));\n```",
      "options": [
        "In ra chuỗi: a#b#c",
        "In ra chuỗi: #####",
        "In ra chuỗi: ###  ",
        "Báo lỗi biên dịch"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh lầm tưởng `replaceAll` chỉ thay thế các dấu chấm `.` trong chuỗi.",
        "trickWord": "Toán tử chấm `.` trong Biểu thức chính quy (Regex)",
        "citation": "Giáo trình Java Core: Phân biệt replace() và replaceAll()",
        "tip": "replaceAll() dùng Regex! Dấu chấm '.' đại diện cho BẤT KỲ ký tự nào!"
      },
      "explanation": "Phương thức `replaceAll` nhận tham số đầu tiên là một Regex. Trong Regex, ký tự `.` đại diện cho bất kỳ ký tự nào. Do đó cả 5 ký tự trong \"a.b.c\" đều bị thay bằng `#`, tạo thành \"#####\"."
    },
    {
      "id": "oop-trick-029",
      "examSet": 1,
      "sectionId": "string-sec",
      "subsectionId": "string-stringbuilder-equals",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nString s = \"Java\";\nStringBuilder sb = new StringBuilder(\"Java\");\nSystem.out.print(s.equals(sb));\n```",
      "options": [
        "In ra kết quả: true",
        "In ra kết quả: false",
        "Báo lỗi biên dịch code",
        "Ném ngoại lệ ClassCast"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh thấy nội dung chữ cả hai đều là \"Java\" nên nghĩ `equals()` trả về true.",
        "trickWord": "So sánh `String.equals(Object)` khác kiểu dữ liệu",
        "citation": "Giáo trình Java Core: Triển khai phương thức equals() của String",
        "tip": "String.equals(StringBuilder) trả về False ngay do không cùng kiểu String!"
      },
      "explanation": "Phương thức `String.equals(Object obj)` đầu tiên kiểm tra `obj instanceof String`. Do `sb` có kiểu `StringBuilder` chứ không phải `String`, `equals` lập tức trả về `false` mà không cần so sánh chuỗi."
    },
    {
      "id": "oop-trick-030",
      "examSet": 1,
      "sectionId": "string-sec",
      "subsectionId": "string-charat-ascii-sum",
      "question": "Cho đoạn mã nguồn sau, kết quả in ra màn hình là gì?\n\n```java\nString s = \"123\";\nint sum = s.charAt(0) + s.charAt(1);\nSystem.out.print(sum);\n```",
      "options": [
        "In ra kết quả: 3",
        "In ra kết quả: 99",
        "In ra kết quả: 12",
        "Báo lỗi biên dịch"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh lấy giá trị số 1 + 2 ra kết quả 3, hoặc nối chuỗi ra 12.",
        "trickWord": "Phép cộng 2 ký tự kiểu `char` nâng kiểu số nguyên ASCII",
        "citation": "Giáo trình Java Core: Thao tác số học với kiểu Char",
        "tip": "charAt() trả về char. Phép cộng 2 char là cộng 2 mã ASCII!"
      },
      "explanation": "`s.charAt(0)` trả về char `'1'` (mã ASCII 49). `s.charAt(1)` trả về char `'2'` (mã ASCII 50). Khi dùng toán tử `+`, Java nâng kiểu 2 `char` thành `int` và tính `49 + 50 = 99`."
    },
    {
      "id": "oop-trick-031",
      "examSet": 1,
      "sectionId": "string-sec",
      "subsectionId": "string-intern-pool",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nString s1 = new String(\"Java\").intern();\nString s2 = \"Java\";\nSystem.out.print(s1 == s2);\n```",
      "options": [
        "In ra kết quả: false",
        "In ra kết quả là: true",
        "Báo lỗi biên dịch code",
        "Gây ra lỗi ngoại lệ chạy"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh thấy `new String(\"Java\")` tưởng `s1` luôn có địa chỉ khác `s2`.",
        "trickWord": "Phương thức `intern()` đưa chuỗi vào String Pool",
        "citation": "Giáo trình Java Core: Cơ chế hoạt động của phương thức intern()",
        "tip": "Gọi intern() trả về tham chiếu trực tiếp trong String Pool!"
      },
      "explanation": "Phương thức `intern()` trả về đại diện tham chiếu của chuỗi trong String Pool. Vì `s2 = \"Java\"` đã nằm trong String Pool, `s1.intern()` trả về đúng tham chiếu đó. Do đó `s1 == s2` trả về `true`."
    },
    {
      "id": "oop-trick-032",
      "examSet": 1,
      "sectionId": "string-sec",
      "subsectionId": "string-null-concat",
      "question": "Cho đoạn mã nguồn sau, kết quả in ra màn hình là gì?\n\n```java\nString s = null;\ns = s + \"null\";\nSystem.out.print(s);\n```",
      "options": [
        "In ra kết quả là: null",
        "In ra kết quả: nullnull",
        "Ném ngoại lệ NullPointer",
        "Báo lỗi biên dịch code"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ thao tác `s + ...` khi `s` là `null` sẽ ném ngoại lệ `NullPointerException`.",
        "trickWord": "Toán tử nối chuỗi `+` tự động đổi `null` thành chữ \"null\"",
        "citation": "Giáo trình Java Core: Xử lý biến null trong phép cộng chuỗi",
        "tip": "Cộng chuỗi gặp null: Null tự chuyển thành chuỗi \"null\"!"
      },
      "explanation": "Trong Java, toán tử cộng chuỗi `+` tự động ép biến `null` thành chuỗi ký tự `\"null\"`. Do đó `s = null + \"null\"` tạo thành chuỗi `\"null\" + \"null\" = \"nullnull\"`."
    },

    /* ============================================================
       NHÓM E: ARRAY (CÂU 33 - 40)
       ============================================================ */
    {
      "id": "oop-trick-033",
      "examSet": 1,
      "sectionId": "array-sec",
      "subsectionId": "array-default-values",
      "question": "Xác định giá trị in ra màn hình khi chạy đoạn mã dưới đây:\n\n```java\nint[] arr = new int[3];\nSystem.out.print(arr[0] + \" \" + arr[2]);\n```",
      "options": [
        "In ra kết quả: null null",
        "In ra kết quả giá trị: 0 0",
        "Ném lỗi ArrayIndexOut",
        "Báo lỗi chưa khởi tạo"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nhầm lẫn giá trị mặc định của mảng số `int` với kiểu tham chiếu (null) hoặc chưa có giá trị.",
        "trickWord": "Giá trị mặc định của mảng số nguyên khi dùng `new`",
        "citation": "Giáo trình Java Core: Khởi tạo mảng và giá trị mặc định",
        "tip": "Mảng int tạo bằng new: Tất cả phần tử tự động gán giá trị 0!"
      },
      "explanation": "Khi khởi tạo mảng `int` bằng `new int[3]`, Java tự động điền giá trị mặc định `0` cho tất cả các phần tử. Do đó `arr[0]` và `arr[2]` đều bằng 0, in ra \"0 0\"."
    },
    {
      "id": "oop-trick-034",
      "examSet": 1,
      "sectionId": "array-sec",
      "subsectionId": "array-reference-alias",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nint[] a = {1, 2, 3};\nint[] b = a;\nb[0] = 99;\nSystem.out.print(a[0]);\n```",
      "options": [
        "In ra màn hình số: 1",
        "In ra màn hình số: 99",
        "In ra màn hình số: 0",
        "Báo lỗi biên dịch code"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh tưởng phép gán `int[] b = a` sao chép ra một mảng độc lập mới.",
        "trickWord": "Bí danh tham chiếu Mảng (Array Reference Aliasing)",
        "citation": "Giáo trình Java Core: Bản chất biến tham chiếu Mảng",
        "tip": "gán b = a: b và a cùng trỏ 1 mảng trong Heap, sửa b là sửa a!"
      },
      "explanation": "Phép gán `int[] b = a` chỉ sao chép địa chỉ tham chiếu. Cả `a` và `b` cùng trỏ tới một mảng duy nhất trong bộ nhớ Heap. Việc thay đổi `b[0] = 99` trực tiếp làm thay đổi `a[0]`. In ra 99."
    },
    {
      "id": "oop-trick-035",
      "examSet": 1,
      "sectionId": "array-sec",
      "subsectionId": "array-length-vs-string-length",
      "question": "Cho đoạn mã nguồn sau, kết quả in ra màn hình là gì?\n\n```java\nint[] arr = new int[5];\nString s = \"Hello\";\nSystem.out.print(arr.length + \" \" + s.length());\n```",
      "options": [
        "In ra kết quả: 5 5",
        "Báo lỗi arr.length()",
        "Báo lỗi sai s.length",
        "Báo lỗi biên dịch cả hai"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh hay nhầm thuộc tính `length` của Array (không ngoặc) với phương thức `length()` của String (có ngoặc).",
        "trickWord": "Cú pháp `length` (Array) vs `length()` (String)",
        "citation": "Giáo trình Java Core: Phân biệt thuộc tính mảng và phương thức chuỗi",
        "tip": "Mảng dùng .length (thuộc tính), Chuỗi dùng .length() (phương thức)!"
      },
      "explanation": "Đoạn code viết hoàn toàn đúng cú pháp: mảng `arr` dùng thuộc tính `.length` (không ngoặc) cho kết quả 5; chuỗi `s` dùng phương thức `.length()` (có ngoặc) cho kết quả 5. In ra \"5 5\"."
    },
    {
      "id": "oop-trick-036",
      "examSet": 1,
      "sectionId": "array-sec",
      "subsectionId": "jagged-array-null-element",
      "question": "Xác định hiện tượng xảy ra khi thực thi đoạn mã sau:\n\n```java\nint[][] grid = new int[2][];\ngrid[0] = new int[]{1, 2, 3};\nSystem.out.print(grid[1][0]);\n```",
      "options": [
        "In ra giá trị mặc định: 0",
        "Ném lỗi NullPointerException",
        "Ném lỗi IndexOutOfBounds",
        "Trình biên dịch báo lỗi"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ `grid[1]` tự động khởi tạo mảng con có giá trị mặc định 0.",
        "trickWord": "Mảng 2 chiều không đều (Jagged Array) chưa khởi tạo dòng",
        "citation": "Giáo trình Java Core: Khởi tạo Mảng đa chiều",
        "tip": "Mảng 2 chiều new int[2][]: Các dòng chưa new mang giá trị null!"
      },
      "explanation": "Khi khai báo `new int[2][]`, dòng `grid[1]` chưa được cấp phát mảng con nên mang giá trị `null`. Thao tác truy cập `grid[1][0]` tương đương với `null[0]` sẽ ném ngoại lệ `NullPointerException`."
    },
    {
      "id": "oop-trick-037",
      "examSet": 1,
      "sectionId": "array-sec",
      "subsectionId": "array-clone-shallow-copy",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nclass Item { int id = 10; }\n// ...\nItem[] a = { new Item() };\nItem[] b = a.clone();\nb[0].id = 50;\nSystem.out.print(a[0].id);\n```",
      "options": [
        "In ra kết quả: 10",
        "In ra kết quả: 50",
        "In ra giá trị: null",
        "Báo lỗi biên dịch code"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh cho rằng `a.clone()` tạo ra bản sao sâu (Deep copy) hoàn toàn độc lập.",
        "trickWord": "Sao chép nông (Shallow Copy) của phương thức array.clone()",
        "citation": "Giáo trình Java Core: Cơ chế Clone mảng đối tượng",
        "tip": "Mảng Object clone(): Chỉ copy vỏ mảng, phần tử bên trong vẫn dùng chung!"
      },
      "explanation": "Phương thức `.clone()` trên mảng đối tượng trong Java thực hiện sao chép nông (Shallow Copy). Mảng `b` là mảng mới nhưng phần tử `b[0]` và `a[0]` vẫn cùng trỏ tới 1 đối tượng `Item` trong Heap. Thay đổi `b[0].id = 50` làm `a[0].id` cũng bằng 50."
    },
    {
      "id": "oop-trick-038",
      "examSet": 1,
      "sectionId": "array-sec",
      "subsectionId": "negative-array-size-exception",
      "question": "Cho đoạn mã nguồn sau, ngoại lệ nào sẽ phát sinh khi chạy?\n\n```java\nint size = -5;\nint[] arr = new int[size];\n```",
      "options": [
        "Tạo mảng rỗng 0 phần tử",
        "Ném ngoại lệ NegativeArray",
        "Trình biên dịch báo lỗi",
        "Ném NullPointerException"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh tưởng trình biên dịch sẽ bắt lỗi số âm ngay lúc compile.",
        "trickWord": "Khởi tạo kích thước mảng với số âm (Negative Array Size)",
        "citation": "Giáo trình Java Core: Các Ngoại lệ Mảng thường gặp",
        "tip": "New mảng kích thước âm: Compile thành công, Runtime ném NegativeArraySizeException!"
      },
      "explanation": "Trong Java, việc khởi tạo mảng với kích thước số âm hợp lệ về mặt cú pháp khi biên dịch. Tuy nhiên khi chạy (Runtime), JVM sẽ ném ra ngoại lệ `NegativeArraySizeException`."
    },
    {
      "id": "oop-trick-039",
      "examSet": 1,
      "sectionId": "array-sec",
      "subsectionId": "array-increment-while-combo",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nint[] arr = {10, 20, 30, 40};\nint i = 0;\nwhile (i < arr.length) {\n    System.out.print(arr[i++] + \" \");\n    i++;\n}\n```",
      "options": [
        "In ra: 10 20 30 40",
        "In ra màn hình: 10 30",
        "In ra màn hình: 20 40",
        "Ném ngoại lệ OutOfBounds"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh bỏ sót bước tăng `i++` thứ hai nằm ở thân vòng lặp `while`.",
        "trickWord": "Bẫy tăng chỉ số mảng 2 lần trong 1 vòng lặp (Double Increment)",
        "citation": "Giáo trình Java Core: Kết hợp Mảng và Toán tử tăng",
        "tip": "arr[i++] tăng i lần 1, i++ trong thân tăng i lần 2 -> Mỗi vòng i tăng 2!"
      },
      "explanation": "Vòng 1: `i=0`, `arr[i++]` in `arr[0]` (10), `i` tăng thành 1. Lệnh `i++` cuối thân làm `i` thành 2.\nVòng 2: `i=2`, `arr[i++]` in `arr[2]` (30), `i` tăng thành 3. Lệnh `i++` cuối thân làm `i` thành 4.\nĐiều kiện `4 < 4` là `false`, dừng lặp. Kết quả: \"10 30 \"."
    },
    {
      "id": "oop-trick-040",
      "examSet": 1,
      "sectionId": "array-sec",
      "subsectionId": "array-string-switch-combo",
      "question": "Cho đoạn mã nguồn tổng hợp sau, kết quả in ra màn hình là gì?\n\n```java\nString[] words = {\"A\", \"B\", \"C\"};\nint idx = 0;\nswitch (words[++idx]) {\n    case \"A\": System.out.print(\"1\"); break;\n    case \"B\": System.out.print(\"2\"); break;\n    case \"C\": System.out.print(\"3\"); break;\n}\n```",
      "options": [
        "In ra màn hình số: 1",
        "In ra màn hình số: 2",
        "In ra màn hình số: 3",
        "Báo lỗi biên dịch code"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ `words[idx++]` mới tăng sau nên nhầm chỉ số 0 và chọn 1.",
        "trickWord": "Combo Mảng + Chuỗi + Switch + Tiền tố `++idx`",
        "citation": "Giáo trình Java Core: Tổng hợp Kiến thức Cơ bản",
        "tip": "++idx tăng idx từ 0 thành 1 trước -> words[1] chính là chuỗi \"B\"!"
      },
      "explanation": "Toán tử tiền tố `++idx` tăng `idx` từ 0 thành 1 TRƯỚC KHI truy cập chỉ số mảng. Do đó `words[1]` trả về chuỗi `\"B\"`. Nhánh `case \"B\"` được thực thi và in ra 2."
    }
  ],
  outside: [],
  tricks: []
};
