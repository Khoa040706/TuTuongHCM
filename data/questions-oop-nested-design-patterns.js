/* ============================================================
   BỘ 40 CÂU HỎI TRẮC NGHIỆM ÔN TẬP: NESTED CLASS & DESIGN PATTERNS
   ============================================================ */

export const questionsOopNestedDesignPatterns = {
  chapterId: "nested-design-patterns",
  inside: [
    /* ============================================================
       NHÓM A — MỨC DỄ (CÂU 1–10): ĐỊNH NGHĨA CƠ BẢN
       ============================================================ */
    {
      "id": "ndp-in-001",
      "examSet": 1,
      "sectionId": "nested-class-sec",
      "subsectionId": "nested-class-def",
      "question": "Nested class trong Java được hiểu là gì?",
      "options": [
        "Class được định nghĩa bên trong 1 class khác",
        "Class kế thừa từ 1 class khác hoàn toàn",
        "Class implement nhiều interface cùng lúc",
        "Class không chứa phương thức nào bên trong"
      ],
      "answer": 0,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Nested class (lớp lồng) là một lớp được khai báo và định nghĩa bên trong phạm vi của một lớp khác (Outer class)."
    },
    {
      "id": "ndp-in-002",
      "examSet": 1,
      "sectionId": "nested-class-sec",
      "subsectionId": "nested-class-def",
      "question": "Có bao nhiêu loại nested class được đề cập trong bài học (Member, Local, Anonymous, Static nested)?",
      "options": [
        "Có 2 loại nested class",
        "Có 3 loại nested class",
        "Có 4 loại nested class",
        "Có 5 loại nested class"
      ],
      "answer": 2,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Có 4 loại nested class chính: 1) Member class (Inner class), 2) Local class, 3) Anonymous class, 4) Static nested class."
    },
    {
      "id": "ndp-in-003",
      "examSet": 1,
      "sectionId": "nested-class-sec",
      "subsectionId": "nested-class-def",
      "question": "Loại nested class nào KHÔNG static và được xem là member của outer class?",
      "options": [
        "Lớp Local class",
        "Member class (Inner class)",
        "Lớp Static nested class",
        "Lớp Top-level class"
      ],
      "answer": 1,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Member class (Inner class) được định nghĩa ở cấp độ thành viên của Outer class và không có từ khóa static."
    },
    {
      "id": "ndp-in-004",
      "examSet": 1,
      "sectionId": "design-pattern-sec",
      "subsectionId": "singleton-pattern",
      "question": "Design pattern nào đảm bảo 1 class chỉ có duy nhất 1 instance trong toàn chương trình?",
      "options": [
        "Mẫu thiết kế Singleton",
        "Mẫu thiết kế Factory",
        "Mẫu thiết kế Observer",
        "Mẫu thiết kế DAO pattern"
      ],
      "answer": 0,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Singleton Pattern được dùng để đảm bảo một lớp chỉ có duy nhất một thể hiện (instance) và cung cấp một điểm truy cập toàn cục tới nó."
    },
    {
      "id": "ndp-in-005",
      "examSet": 1,
      "sectionId": "design-pattern-sec",
      "subsectionId": "pattern-overview",
      "question": "Design pattern được chia thành mấy nhóm chính?",
      "options": [
        "Được chia làm 2 nhóm",
        "Được chia làm 3 nhóm",
        "Được chia làm 4 nhóm",
        "Được chia làm 5 nhóm"
      ],
      "answer": 1,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Design pattern được phân thành 3 nhóm chính: 1) Creational (Khởi tạo), 2) Structural (Cấu trúc), 3) Behavioral (Hành vi)."
    },
    {
      "id": "ndp-in-006",
      "examSet": 1,
      "sectionId": "nested-class-sec",
      "subsectionId": "anonymous-class",
      "question": "Theo định nghĩa, anonymous class có đặc điểm gì về tên?",
      "options": [
        "Có tên do lập trình viên tự đặt",
        "Không tên, chỉ truy cập tại nơi định nghĩa",
        "Luôn trùng tên với interface hiện thực",
        "Tên được đặt tự động trùng outer class"
      ],
      "answer": 1,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Anonymous class (lớp vô danh) là lớp không có tên, được khai báo và khởi tạo đồng thời ngay tại vị trí sử dụng."
    },
    {
      "id": "ndp-in-007",
      "examSet": 1,
      "sectionId": "design-pattern-sec",
      "subsectionId": "factory-pattern",
      "question": "Factory pattern thuộc nhóm design pattern nào?",
      "options": [
        "Nhóm Creational Pattern",
        "Nhóm Structural Pattern",
        "Nhóm Behavioral Pattern",
        "Không thuộc vào nhóm nào"
      ],
      "answer": 0,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Factory Pattern thuộc nhóm Creational Design Pattern (các mẫu thiết kế khởi tạo)."
    },
    {
      "id": "ndp-in-008",
      "examSet": 1,
      "sectionId": "design-pattern-sec",
      "subsectionId": "observer-pattern",
      "question": "Observer pattern thuộc nhóm design pattern nào?",
      "options": [
        "Nhóm Creational Pattern",
        "Nhóm Structural Pattern",
        "Nhóm Behavioral Pattern",
        "Không thuộc vào nhóm nào"
      ],
      "answer": 2,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Observer Pattern thuộc nhóm Behavioral Design Pattern (các mẫu thiết kế định nghĩa hành vi và sự tương tác giữa các đối tượng)."
    },
    {
      "id": "ndp-in-009",
      "examSet": 1,
      "sectionId": "nested-class-sec",
      "subsectionId": "static-nested-class",
      "question": "Static nested class truy cập biến instance (non-static) của outer class bằng cách nào?",
      "options": [
        "Truy cập trực tiếp như member bình thường",
        "Không thể truy cập bằng bất kỳ cách nào",
        "Chỉ truy cập thông qua object reference",
        "Truy cập gián tiếp thông qua từ khóa super"
      ],
      "answer": 2,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Static nested class không tự động gắn liền với một thể hiện của Outer class, nên nó chỉ truy cập được các thành phần non-static của Outer class thông qua một tham chiếu đối tượng (object reference)."
    },
    {
      "id": "ndp-in-010",
      "examSet": 1,
      "sectionId": "nested-class-sec",
      "subsectionId": "local-class",
      "question": "Local class được định nghĩa ở đâu?",
      "options": [
        "Trong thân method, constructor hay block",
        "Ở bên ngoài mọi class trong chương trình",
        "Trong tập tin cấu hình package-info.java",
        "Trong tập tin thuộc tính .properties"
      ],
      "answer": 0,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Local class là lớp được khai báo bên trong phạm vi một khối lệnh (block), thường là bên trong một phương thức (method), constructor hoặc initializer block."
    },

    /* ============================================================
       NHÓM B — MỨC TRUNG BÌNH (CÂU 11–25): CÚ PHÁP, KEYWORD, ĐẶC ĐIỂM
       ============================================================ */
    {
      "id": "ndp-in-011",
      "examSet": 1,
      "sectionId": "nested-class-sec",
      "subsectionId": "inner-class-syntax",
      "question": "Cú pháp nào ĐÚNG để khởi tạo 1 Inner class (non-static) tên Inner nằm trong class Outer?",
      "options": [
        "Outer.Inner obj = new Outer.Inner();",
        "Outer.Inner obj = new Inner();",
        "Outer.Inner obj = objOuter.new Inner();",
        "Outer.Inner obj = new Inner(objOuter);"
      ],
      "answer": 2,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Khởi tạo Inner class non-static bắt buộc phải thông qua một đối tượng của Outer class: `Outer.Inner obj = objOuter.new Inner();`."
    },
    {
      "id": "ndp-in-012",
      "examSet": 1,
      "sectionId": "nested-class-sec",
      "subsectionId": "static-nested-syntax",
      "question": "Cú pháp nào ĐÚNG để khởi tạo 1 static nested class tên StaticNested nằm trong class Outer?",
      "options": [
        "Outer.StaticNested obj = new Outer.StaticNested();",
        "Outer.StaticNested obj = objOuter.new StaticNested();",
        "Outer.StaticNested obj = new StaticNested(Outer);",
        "Outer.StaticNested obj = new StaticNested();"
      ],
      "answer": 0,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Static nested class không yêu cầu thể hiện của Outer class nên khởi tạo trực tiếp qua tên lớp outer: `Outer.StaticNested obj = new Outer.StaticNested();`."
    },
    {
      "id": "ndp-in-013",
      "examSet": 1,
      "sectionId": "nested-class-sec",
      "subsectionId": "local-class-rules",
      "question": "Trong Local class, 1 biến local của method chỉ được truy cập nếu nó được khai báo là gì?",
      "options": [
        "Khai báo từ khóa static",
        "Khai báo từ khóa private",
        "Khai báo từ khóa final",
        "Khai báo từ khóa public"
      ],
      "answer": 2,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Local class chỉ có thể truy cập các biến cục bộ của phương thức chứa nó nếu biến đó được khai báo là `final` (hoặc effectively final từ Java 8)."
    },
    {
      "id": "ndp-in-014",
      "examSet": 1,
      "sectionId": "nested-class-sec",
      "subsectionId": "anonymous-class-rules",
      "question": "Anonymous class có thể kế thừa/hiện thực tối đa bao nhiêu trong 2 khả năng: extends 1 class, implements 1 interface — cùng lúc?",
      "options": [
        "Cả 2 khả năng cùng lúc",
        "Chỉ chọn 1 trong 2 khả năng",
        "Không được dùng cả 2 khả năng",
        "Phải dùng implements trước"
      ],
      "answer": 1,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Anonymous class chỉ được phép kế thừa từ 1 class HOẶC triển khai 1 interface duy nhất tại thời điểm khai báo, không thể vừa extends vừa implements cùng lúc."
    },
    {
      "id": "ndp-in-015",
      "examSet": 1,
      "sectionId": "nested-class-sec",
      "subsectionId": "anonymous-class-init",
      "question": "Vì không có tên để đặt constructor, anonymous class thực hiện logic khởi tạo bằng cách nào?",
      "options": [
        "Dùng constructor mang tên của lớp cha",
        "Dùng khối instance initializer block",
        "Dùng khối static initializer block",
        "Không thể dùng bất kỳ logic nào cả"
      ],
      "answer": 1,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Do Anonymous class không có tên nên không thể viết Constructor. Nếu muốn thực hiện logic khởi tạo, nó phải sử dụng khối Instance Initializer Block `{ ... }`."
    },
    {
      "id": "ndp-in-016",
      "examSet": 1,
      "sectionId": "nested-class-sec",
      "subsectionId": "member-class-features",
      "question": "Đặc điểm 'là member của outer class, có thể truy cập được cả private member' mô tả đúng nhất loại nested class nào?",
      "options": [
        "Member class (Inner class)",
        "Local class trong method",
        "Lớp vô danh Anonymous class",
        "Lớp tĩnh Static nested class"
      ],
      "answer": 0,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Member class (Inner class) là thành viên của Outer class nên có quyền truy cập trực tiếp tới tất cả thuộc tính và phương thức của Outer class, kể cả private."
    },
    {
      "id": "ndp-in-017",
      "examSet": 1,
      "sectionId": "design-pattern-sec",
      "subsectionId": "singleton-modifier",
      "question": "Singleton pattern yêu cầu constructor có access modifier gì?",
      "options": [
        "Quyền truy cập public",
        "Quyền truy cập private",
        "Quyền truy cập protected",
        "Không cần tạo constructor"
      ],
      "answer": 1,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Constructor của Singleton Pattern phải là `private` để ngăn không cho các lớp bên ngoài khởi tạo đối tượng trực tiếp bằng từ khóa `new`."
    },
    {
      "id": "ndp-in-018",
      "examSet": 1,
      "sectionId": "design-pattern-sec",
      "subsectionId": "singleton-method",
      "question": "Method nào thường được dùng để lấy về instance duy nhất trong Singleton pattern?",
      "options": [
        "Phương thức `create()`",
        "Phương thức `getInstance()`",
        "Phương thức `newInstance()`",
        "Phương thức `build()`"
      ],
      "answer": 1,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Phương thức tĩnh `public static getInstance()` là quy ước chuẩn được dùng để trả về thể hiện (instance) duy nhất của lớp Singleton."
    },
    {
      "id": "ndp-in-019",
      "examSet": 1,
      "sectionId": "design-pattern-sec",
      "subsectionId": "observer-roles",
      "question": "Trong Observer pattern, object nào giữ danh sách các observer và gửi thông báo?",
      "options": [
        "Đối tượng Observer",
        "Đối tượng Subject",
        "Đối tượng Factory",
        "Đối tượng Delegate"
      ],
      "answer": 1,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Trong Observer Pattern, đối tượng Subject (hoặc Observable) lưu giữ danh sách các đăng ký của các Observer và có nhiệm vụ phát thông báo khi có sự thay đổi trạng thái."
    },
    {
      "id": "ndp-in-020",
      "examSet": 1,
      "sectionId": "design-pattern-sec",
      "subsectionId": "factory-mechanism",
      "question": "Trong Factory pattern, việc tạo object được thực hiện như thế nào?",
      "options": [
        "Gọi trực tiếp constructor (new) ở nơi dùng.",
        "Thông qua 1 method riêng (factory method).",
        "Tái sử dụng lại 1 object sẵn có duy nhất.",
        "Bắt buộc phải sử dụng cơ chế reflection."
      ],
      "answer": 1,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Factory Pattern ủy quyền việc tạo đối tượng cho một phương thức riêng (Factory Method) thay vì gọi trực tiếp constructor ở phía client code."
    },
    {
      "id": "ndp-in-021",
      "examSet": 1,
      "sectionId": "design-pattern-sec",
      "subsectionId": "dao-pattern",
      "question": "DAO là viết tắt của cụm từ nào?",
      "options": [
        "Cụm từ Data Access Object",
        "Cụm từ Design Application Object",
        "Cụm từ Data Application Order",
        "Cụm từ Direct Access Operation"
      ],
      "answer": 0,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "DAO viết tắt của Data Access Object — một pattern tách biệt logic thao tác dữ liệu (database CRUD) khỏi logic nghiệp vụ của ứng dụng."
    },
    {
      "id": "ndp-in-022",
      "examSet": 1,
      "sectionId": "object-methods-sec",
      "subsectionId": "equals-method",
      "question": "Phương thức equals() (khi override) dùng để kiểm tra loại equality nào?",
      "options": [
        "Reference equality (địa chỉ)",
        "Logical equality (nội dung)",
        "Structural equality (cấu trúc)",
        "Static equality (kiểu tĩnh)"
      ],
      "answer": 1,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Khi ghi đè phương thức `equals()`, mục đích là để so sánh Logical equality (bằng nhau về mặt giá trị/nội dung dữ liệu giữa 2 đối tượng)."
    },
    {
      "id": "ndp-in-023",
      "examSet": 1,
      "sectionId": "object-methods-sec",
      "subsectionId": "hashcode-method",
      "question": "Mặc định (chưa override), hashCode() trả về giá trị gì?",
      "options": [
        "Chuỗi tên của class",
        "Địa chỉ bộ nhớ số hex",
        "Luôn trả về giá trị 0",
        "Trả về giá trị null"
      ],
      "answer": 1,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Phương thức `hashCode()` mặc định của lớp Object trong Java chuyển đổi địa chỉ bộ nhớ của đối tượng thành một số nguyên (thường hiển thị dạng hex)."
    },
    {
      "id": "ndp-in-024",
      "examSet": 1,
      "sectionId": "java-operators-sec",
      "subsectionId": "instanceof-operator",
      "question": "Toán tử instanceof trả về kiểu dữ liệu gì?",
      "options": [
        "Kiểu dữ liệu int",
        "Kiểu dữ liệu boolean",
        "Kiểu dữ liệu String",
        "Kiểu dữ liệu Object"
      ],
      "answer": 1,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Toán tử `instanceof` kiểm tra xem một đối tượng có phải là một thể hiện của một lớp/interface cụ thể hay không và trả về giá trị kiểu `boolean` (true/false)."
    },
    {
      "id": "ndp-in-025",
      "examSet": 1,
      "sectionId": "java-operators-sec",
      "subsectionId": "instanceof-timing",
      "question": "Toán tử instanceof được đánh giá tại thời điểm nào?",
      "options": [
        "Thời điểm Compile-time",
        "Thời điểm Runtime chạy",
        "Cả compile và runtime",
        "Không thể xác định được"
      ],
      "answer": 1,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Toán tử `instanceof` kiểm tra kiểu thực tế của đối tượng trong bộ nhớ Heap tại thời điểm chương trình thực thi (Runtime)."
    },

    /* ============================================================
       NHÓM C — MỨC KHÓ (CÂU 26–40): ĐỌC CODE, PHÂN TÍCH, TÌNH HUỐNG
       ============================================================ */
    {
      "id": "ndp-in-026",
      "examSet": 1,
      "sectionId": "code-analysis-sec",
      "subsectionId": "inner-class-valid",
      "question": "Cho đoạn code sau, đoạn code có biên dịch được không?\n\n```java\nclass Outer {\n    class Inner { }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Outer o = new Outer();\n        Outer.Inner i = o.new Inner();\n    }\n}\n```",
      "options": [
        "Biên dịch được, đây là cú pháp chuẩn.",
        "Lỗi vì thiếu từ khóa static ở Inner.",
        "Lỗi vì class Inner phải extends Outer.",
        "Lỗi vì thiếu khai báo gói package."
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "Đoạn code hoàn toàn hợp lệ. Đây là cú pháp chuẩn để khởi tạo một Inner class non-static thông qua tham chiếu đối tượng `o.new Inner()`."
    },
    {
      "id": "ndp-in-027",
      "examSet": 1,
      "sectionId": "code-analysis-sec",
      "subsectionId": "static-nested-valid",
      "question": "Cho đoạn code sau, đoạn code có biên dịch được không?\n\n```java\nclass Outer {\n    static class Nested { }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Outer.Nested n = new Outer.Nested();\n    }\n}\n```",
      "options": [
        "Biên dịch được, đúng cú pháp khởi tạo.",
        "Lỗi vì thiếu đối tượng Outer để khởi tạo.",
        "Lỗi vì Nested phải khai báo abstract.",
        "Lỗi vì thiếu câu lệnh import cho lớp."
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "Đoạn code biên dịch thành công. Static nested class `Outer.Nested` có thể khởi tạo trực tiếp mà không cần khởi tạo đối tượng `Outer`."
    },
    {
      "id": "ndp-in-028",
      "examSet": 1,
      "sectionId": "code-analysis-sec",
      "subsectionId": "inner-class-invalid",
      "question": "Cho đoạn code sau, đoạn code có lỗi biên dịch không?\n\n```java\nclass Outer {\n    class Inner { }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Outer.Inner i = new Outer.Inner();\n    }\n}\n```",
      "options": [
        "Không có lỗi biên dịch nào, đây là cách khởi tạo Inner class hợp lệ.",
        "Báo lỗi biên dịch, Inner class non-static phải khởi tạo qua object Outer.",
        "Báo lỗi biên dịch, do thiếu từ khóa static ở phần khai báo class Inner.",
        "Báo lỗi biên dịch, do lớp Outer chưa có phương thức khởi tạo công khai."
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "Gây lỗi biên dịch vì Inner class là non-static. Không thể khởi tạo bằng `new Outer.Inner()` trực tiếp mà phải thông qua đối tượng outer `outerObj.new Inner()`."
    },
    {
      "id": "ndp-in-029",
      "examSet": 1,
      "sectionId": "code-analysis-sec",
      "subsectionId": "string-equals-compare",
      "question": "Cho đoạn code sau, kết quả in ra màn hình (2 dòng, theo đúng thứ tự) là gì?\n\n```java\nString a = new String(\"JOHN\");\nString b = new String(\"JOHN\");\nSystem.out.println(a == b);\nSystem.out.println(a.equals(b));\n```",
      "options": [
        "In ra: true, true",
        "In ra: false, false",
        "In ra: false, true",
        "In ra: true, false"
      ],
      "answer": 2,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "1) `a == b` so sánh địa chỉ bộ nhớ Heap: do dùng từ khóa `new` nên 2 đối tượng có địa chỉ khác nhau -> `false`. 2) `a.equals(b)` so sánh nội dung chuỗi: cả hai cùng là \"JOHN\" -> `true`."
    },
    {
      "id": "ndp-in-030",
      "examSet": 1,
      "sectionId": "code-analysis-sec",
      "subsectionId": "singleton-count",
      "question": "Cho class Singleton bên dưới, nếu gọi Singleton.getInstance() 3 lần liên tiếp, có bao nhiêu object Singleton thực sự được tạo ra trong bộ nhớ?\n\n```java\nclass Singleton {\n    private static Singleton instance = null;\n    private Singleton() { }\n    public static Singleton getInstance() {\n        if (instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n}\n```",
      "options": [
        "Tạo 1 đối tượng duy nhất",
        "Tạo 2 đối tượng độc lập",
        "Tạo 3 đối tượng trong nhớ",
        "Không tạo đối tượng nào"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "Chỉ có 1 đối tượng duy nhất được khởi tạo ở lần gọi `getInstance()` đầu tiên khi `instance == null`. Hai lần gọi sau sẽ trả về ngay tham chiếu đối tượng đã khởi tạo đó."
    },
    {
      "id": "ndp-in-031",
      "examSet": 1,
      "sectionId": "code-analysis-sec",
      "subsectionId": "singleton-private-removed",
      "question": "Vẫn với class Singleton ở Câu 30, nếu xóa từ khóa private ở constructor thì điều gì sẽ xảy ra?",
      "options": [
        "Không ảnh hưởng, vẫn là Singleton.",
        "Vẫn là Singleton nhưng chạy chậm.",
        "Mất tính duy nhất do có thể new.",
        "Trình biên dịch báo lỗi ngay."
      ],
      "answer": 2,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "Nếu constructor không còn `private`, mã nguồn bên ngoài có thể tự do gọi `new Singleton()` tạo ra nhiều thể hiện khác nhau, làm mất đi tính chất duy nhất của Singleton Pattern."
    },
    {
      "id": "ndp-in-032",
      "examSet": 1,
      "sectionId": "code-analysis-sec",
      "subsectionId": "local-class-final-var",
      "question": "Theo đúng nội dung slide đã học, Local class có thể truy cập biến local của method chứa nó khi biến đó KHÔNG khai báo final hay không?",
      "options": [
        "Có, luôn truy cập được mọi biến.",
        "Không, chỉ truy cập nếu biến final.",
        "Chỉ truy cập được khi biến static.",
        "Không bao giờ truy cập được biến."
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "Theo lý thuyết giáo trình chuẩn, Local class chỉ có thể truy cập các biến cục bộ của phương thức chứa nó nếu biến đó được khai báo với từ khóa `final`."
    },
    {
      "id": "ndp-in-033",
      "examSet": 1,
      "sectionId": "code-analysis-sec",
      "subsectionId": "anonymous-identify",
      "question": "Đoạn code sau minh họa cho loại nested class nào?\n\n```java\nAccount objAcc = new Account() {\n    @Override\n    public void displayBalance(String accNo) {\n        System.out.println(\"Balance of \" + accNo);\n    }\n};\n```",
      "options": [
        "Loại Member class",
        "Loại Local class",
        "Loại Anonymous class",
        "Loại Static nested class"
      ],
      "answer": 2,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "Đây là Anonymous Class (Lớp vô danh), vì lớp Account được khởi tạo và ghi đè phương thức `displayBalance()` ngay tại chỗ mà không khai báo tên lớp riêng biệt."
    },
    {
      "id": "ndp-in-034",
      "examSet": 1,
      "sectionId": "code-analysis-sec",
      "subsectionId": "anonymous-extra-method",
      "question": "Trong ví dụ ở Câu 33, nếu viết thêm 1 method mới (không có trong class Account) vào bên trong thân anonymous class, có thể gọi được method đó thông qua biến objAcc không?",
      "options": [
        "Có thể gọi method mới bình thường.",
        "Không, chỉ gọi được method của Account.",
        "Có, nhưng chỉ gọi được đúng 1 lần.",
        "Không, không được phép viết method."
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "Không gọi được từ bên ngoài, vì kiểu biến khai báo `objAcc` là `Account`. Trình biên dịch chỉ cho phép truy cập các phương thức đã được khai báo trong lớp `Account`."
    },
    {
      "id": "ndp-in-035",
      "examSet": 1,
      "sectionId": "pattern-scenarios-sec",
      "subsectionId": "logger-scenario",
      "question": "Một lớp Logger cần đảm bảo toàn hệ thống chỉ dùng chung đúng 1 đối tượng ghi log duy nhất. Nên áp dụng design pattern nào?",
      "options": [
        "Mẫu thiết kế Singleton",
        "Mẫu thiết kế Factory",
        "Mẫu thiết kế Observer",
        "Mẫu thiết kế DAO"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "Singleton Pattern là lựa chọn tối ưu nhất cho bài toán Logger để đảm bảo tất cả các thành phần trong hệ thống ghi log thông qua đúng 1 instance duy nhất."
    },
    {
      "id": "ndp-in-036",
      "examSet": 1,
      "sectionId": "pattern-scenarios-sec",
      "subsectionId": "notification-scenario",
      "question": "Một lớp NotificationCenter cần gửi thông báo tới nhiều màn hình UI khác nhau mỗi khi có dữ liệu mới. Nên áp dụng design pattern nào?",
      "options": [
        "Mẫu thiết kế Singleton",
        "Mẫu thiết kế Factory",
        "Mẫu thiết kế Observer",
        "Mẫu thiết kế DAO"
      ],
      "answer": 2,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "Observer Pattern phù hợp với bài toán này: NotificationCenter đóng vai trò `Subject`, các màn hình UI đóng vai trò `Observer` tự động nhận thông báo khi dữ liệu thay đổi."
    },
    {
      "id": "ndp-in-037",
      "examSet": 1,
      "sectionId": "pattern-scenarios-sec",
      "subsectionId": "shape-factory-scenario",
      "question": "Một hệ thống cần tạo các đối tượng Shape (Circle, Square, Triangle...) mà không muốn gọi trực tiếp new Circle(), new Square()... rải rác ở nhiều nơi trong code. Nên áp dụng design pattern nào?",
      "options": [
        "Mẫu thiết kế Singleton",
        "Mẫu thiết kế Factory",
        "Mẫu thiết kế Observer",
        "Mẫu thiết kế DAO"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "Factory Pattern giúp tập trung logic tạo các đối tượng Shape vào một nơi (Factory class) và giải phóng Client code khỏi việc gọi `new` trực tiếp các lớp cụ thể."
    },
    {
      "id": "ndp-in-038",
      "examSet": 1,
      "sectionId": "pattern-concepts-sec",
      "subsectionId": "composition-aggregation-pattern",
      "question": "Composition và Aggregation thuộc nhóm design pattern nào trong 3 nhóm đã học (Creational/Structural/Behavioral)?",
      "options": [
        "Thuộc nhóm Creational Pattern",
        "Thuộc nhóm Structural Pattern",
        "Thuộc nhóm Behavioral Pattern",
        "Không thuộc nhóm pattern nào"
      ],
      "answer": 3,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "Composition và Aggregation là các khái niệm mối quan hệ giữa các lớp trong hướng đối tượng (Design Concepts / OOP Relationships), không phải là Design Pattern chính thức."
    },
    {
      "id": "ndp-in-039",
      "examSet": 1,
      "sectionId": "pattern-concepts-sec",
      "subsectionId": "aggregation-lifecycle",
      "question": "Khi object 'chủ' bị hủy, trong trường hợp nào object thành phần bên trong KHÔNG bị hủy theo?",
      "options": [
        "Trường hợp mối quan hệ Composition",
        "Trường hợp mối quan hệ Aggregation",
        "Cả trường hợp Composition và Aggregation",
        "Không có trường hợp nào được phép xảy ra"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "Trong mối quan hệ Aggregation (Tập hợp), đối tượng thành phần có vòng đời độc lập với đối tượng chủ, nên khi đối tượng chủ bị hủy thì đối tượng thành phần vẫn tồn tại."
    },
    {
      "id": "ndp-in-040",
      "examSet": 1,
      "sectionId": "code-analysis-sec",
      "subsectionId": "outer-field-access",
      "question": "Cho đoạn code sau, dòng nào (A hoặc B) có thể truy cập trực tiếp biến x của Outer mà KHÔNG cần thông qua object reference?\n\n```java\nclass Outer {\n    private int x = 10;\n    static class StaticNested {\n        void show() {\n            // Dòng A: truy cập x ở đây?\n        }\n    }\n    class Inner {\n        void show() {\n            System.out.println(x); // Dòng B\n        }\n    }\n}\n```",
      "options": [
        "Chỉ dòng A (trong StaticNested)",
        "Chỉ dòng B (trong Inner class)",
        "Cả 2 dòng A và B đều trực tiếp",
        "Không dòng nào truy cập được"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "Chỉ có dòng B (trong Inner class non-static) truy cập trực tiếp được biến instance `x`. Dòng A (trong StaticNested) bị lỗi biên dịch nếu truy cập trực tiếp `x` vì static context không thể truy cập non-static field mà không có đối tượng."
    }
  ],
  outside: [],
  tricks: []
};
