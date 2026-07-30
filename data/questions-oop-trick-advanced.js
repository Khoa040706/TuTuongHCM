/* ============================================================
   BỘ 50 CÂU HỎI TRẮC NGHIỆM BẪY: OOP NÂNG CAO (100% Khó / Vận dụng cao)
   Phạm vi: Chương 2 đến Chương 8 Giáo trình Lập trình Hướng đối tượng OOP
   ============================================================ */

export const questionsOopTrickAdvanced = {
  chapterId: "trick-oop-advanced",
  inside: [
    /* ============================================================
       CHƯƠNG 2: LỚP - ĐỐI TƯỢNG - ĐÓNG GÓI (CÂU 001 - 007)
       ============================================================ */
    {
      "id": "oop-trick2-001",
      "examSet": 2,
      "sectionId": "c2-sec",
      "subsectionId": "constructor-chaining-missing-default",
      "question": "Cho đoạn mã nguồn Java sau, hãy chỉ ra kết quả khi biên dịch:\n\n```java\nclass Parent {\n    Parent(int x) {\n        System.out.print(\"P\" + x);\n    }\n}\nclass Child extends Parent {\n    Child() {\n        System.out.print(\"C\");\n    }\n}\n```",
      "options": [
        "Màn hình in ra chữ C",
        "Màn hình in ra chữ P0C",
        "Báo lỗi biên dịch code",
        "Gây lỗi ngoại lệ chạy"
      ],
      "answer": 2,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ Java tự động gọi constructor mặc định của lớp cha mà không biết lớp cha đã mất constructor mặc định khi định nghĩa constructor có tham số.",
        "trickWord": "Gọi ngầm `super()` khi lớp cha không có Constructor rỗng",
        "citation": "Giáo trình OOP C2: Hàm khởi tạo và Tiến trình Chaining",
        "tip": "Cha có constructor tham số -> Mất constructor rỗng, con gọi super() ngầm bị lỗi ngay!"
      },
      "explanation": "Trong constructor `Child()`, Java tự động chèn câu lệnh `super()` không tham số ở dòng đầu tiên. Tuy nhiên lớp `Parent` đã khai báo `Parent(int x)` nên compiler không tự tạo constructor mặc định không tham số nữa. Do đó `super()` bị lỗi biên dịch."
    },
    {
      "id": "oop-trick2-002",
      "examSet": 2,
      "sectionId": "c2-sec",
      "subsectionId": "overloading-ambiguity-wrapper-primitive",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nclass Test {\n    static void print(int x) { System.out.print(\"int \"); }\n    static void print(Integer x) { System.out.print(\"Integer \"); }\n    static void print(long x) { System.out.print(\"long \"); }\n\n    public static void main(String[] args) {\n        short s = 5;\n        print(s);\n    }\n}\n```",
      "options": [
        "In ra kết quả: int ",
        "In ra kết quả: long ",
        "In ra kết quả: Integer ",
        "Báo lỗi biên dịch code"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh cho rằng short ép kiểu thành int hay autoboxing thành Short/Integer có độ ưu tiên như nhau.",
        "trickWord": "Độ ưu tiên Nạp chồng (Widening Primitive ưu tiên hơn Autoboxing)",
        "citation": "Giáo trình OOP C2: Quy tắc nạp chồng phương thức Method Overloading",
        "tip": "Overloading ưu tiên: Widening kiểu nguyên thủy > Autoboxing > Varargs!"
      },
      "explanation": "Khi gọi `print(short)`, Java ưu tiên nạp chồng theo thứ tự: 1) Widening primitive (ép kiểu nguyên thủy rộng hơn `short` -> `int`), 2) Autoboxing, 3) Varargs. Do đó `print(int)` được chọn và in ra \"int \"."
    },
    {
      "id": "oop-trick2-003",
      "examSet": 2,
      "sectionId": "c2-sec",
      "subsectionId": "wrapper-integer-cache",
      "question": "Cho đoạn mã nguồn sau, màn hình sẽ in ra kết quả gì?\n\n```java\nInteger a = 100, b = 100;\nInteger c = 200, d = 200;\nSystem.out.print((a == b) + \" \" + (c == d));\n```",
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
        "whyTrapped": "Học sinh nghĩ cả 4 biến Integer đều là Object nên so sánh `==` sẽ trả về `false` hết.",
        "trickWord": "Vùng đệm Integer Cache (-128 đến 127)",
        "citation": "Giáo trình OOP C2: Lớp bao gói Wrapper Class và Caching",
        "tip": "Integer từ -128 đến 127 dùng chung cache (== true), ngoài khoảng tạo new (== false)!"
      },
      "explanation": "Java tự động cache các đối tượng `Integer` có giá trị từ `-128` đến `127`. Vì `100` nằm trong khoảng cache, `a` và `b` cùng tham chiếu tới 1 đối tượng -> `a == b` là `true`. Còn `200` nằm ngoài khoảng cache, `c` và `d` trỏ tới 2 đối tượng mới -> `c == d` là `false`."
    },
    {
      "id": "oop-trick2-004",
      "examSet": 2,
      "sectionId": "c2-sec",
      "subsectionId": "static-method-null-reference",
      "question": "Cho đoạn mã nguồn sau, hiện tượng gì xảy ra khi thực thi?\n\n```java\nclass Counter {\n    static int count = 10;\n    static void show() {\n        System.out.print(count);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Counter c = null;\n        c.show();\n    }\n}\n```",
      "options": [
        "Màn hình in ra số 10",
        "Ném lỗi NullPointer",
        "Báo lỗi biên dịch code",
        "Gây ra ngoại lệ chạy"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh thấy `c = null` nên cho rằng gọi `c.show()` sẽ bị `NullPointerException`.",
        "trickWord": "Gọi phương thức static qua biến tham chiếu null",
        "citation": "Giáo trình OOP C2: Thành viên thuộc về Lớp (Class Members / Static)",
        "tip": "Phương thức Static liên kết theo kiểu khai báo, gọi trên null vẫn chạy bình thường!"
      },
      "explanation": "Phương thức `static` thuộc về Lớp chứ không thuộc về đối tượng. Khi gọi `c.show()`, trình biên dịch chuyển thành `Counter.show()` dựa trên kiểu của `c` mà không giải tham chiếu `c`. Do đó không bị `NullPointerException` và in ra 10."
    },
    {
      "id": "oop-trick2-005",
      "examSet": 2,
      "sectionId": "c2-sec",
      "subsectionId": "access-modifier-package-private",
      "question": "Giả sử hai lớp nằm ở 2 package khác nhau như sau, kết quả biên dịch ra sao?\n\n```java\n// File: p1/A.java\npackage p1;\npublic class A {\n    int data = 100; // package-private\n}\n\n// File: p2/B.java\npackage p2;\nimport p1.A;\npublic class B {\n    void test() {\n        A obj = new A();\n        System.out.print(obj.data);\n    }\n}\n```",
      "options": [
        "Màn hình in ra số 100",
        "Báo lỗi biên dịch code",
        "Ném ngoại lệ Access",
        "Màn hình in giá trị 0"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh không thấy từ khóa access modifier tưởng mặc định là public nên truy cập được.",
        "trickWord": "Quyền truy cập mặc định (Default / Package-private)",
        "citation": "Giáo trình OOP C2: Đóng gói và Access Modifiers",
        "tip": "Không ghi modifier = Package-private, khác package hoàn toàn KHÔNG truy cập được!"
      },
      "explanation": "Thuộc tính `data` trong lớp `A` không ghi modifier nên có quyền truy cập `default` (package-private). Lớp `B` nằm ở package `p2` khác `p1` nên không thể truy cập `obj.data`, dẫn tới lỗi biên dịch."
    },
    {
      "id": "oop-trick2-006",
      "examSet": 2,
      "sectionId": "c2-sec",
      "subsectionId": "encapsulated-mutable-reference-leak",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nclass Student {\n    private int[] scores = {5, 6, 7};\n    public int[] getScores() { return scores; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student();\n        int[] sc = s.getScores();\n        sc[0] = 10;\n        System.out.print(s.getScores()[0]);\n    }\n}\n```",
      "options": [
        "In ra màn hình số: 5",
        "In ra màn hình số: 10",
        "Báo lỗi biên dịch code",
        "In ra màn hình số: 0"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ dữ liệu đã được đóng gói `private` nên không thể sửa từ bên ngoài.",
        "trickWord": "Rò rỉ tham chiếu dữ liệu thay đổi được (Mutable Reference Leak)",
        "citation": "Giáo trình OOP C2: Tính đóng gói và Getter an toàn",
        "tip": "Getter trả về tham chiếu mảng/đối tượng: Bên ngoài sửa mảng làm hỏng tính đóng gói!"
      },
      "explanation": "Getter `getScores()` trả về trực tiếp tham chiếu tới mảng `private scores`. Do đó `sc` và `scores` trỏ cùng mảng. Thao tác `sc[0] = 10` thay đổi dữ liệu bên trong `Student`, in ra 10."
    },
    {
      "id": "oop-trick2-007",
      "examSet": 2,
      "sectionId": "c2-sec",
      "subsectionId": "this-constructor-first-statement",
      "question": "Cho đoạn mã nguồn sau, trình biên dịch sẽ báo lỗi ở đâu?\n\n```java\nclass Demo {\n    int x;\n    Demo() {\n        this(10);\n    }\n    Demo(int x) {\n        System.out.print(\"A\");\n        this(); // Dòng 8\n        this.x = x;\n    }\n}\n```",
      "options": [
        "Báo lỗi ở Dòng 8",
        "Báo lỗi ở Dòng 4",
        "Màn hình in ra chữ A",
        "Chương trình lặp vô hạn"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh không nhớ quy tắc `this()` gọi constructor cùng lớp phải đứng ở câu lệnh đầu tiên.",
        "trickWord": "Từ khóa `this()` gọi Constructor liên hoàn",
        "citation": "Giáo trình OOP C2: Từ khóa this và Constructor Chaining",
        "tip": "this() hoặc super() bắt buộc phải là CÂU LỆNH ĐẦU TIÊN trong constructor!"
      },
      "explanation": "Trong `Demo(int x)`, lệnh `this()` nằm ở câu lệnh thứ hai (sau `System.out.print`). Java bắt buộc `this(...)` hoặc `super(...)` phải là câu lệnh ĐẦU TIÊN trong constructor, nên Dòng 8 bị lỗi biên dịch (cụ thể hơn còn bị bẫy vòng lặp đệ quy constructor)."
    },

    /* ============================================================
       CHƯƠNG 3: KẾ THỪA (CÂU 008 - 014)
       ============================================================ */
    {
      "id": "oop-trick2-008",
      "examSet": 2,
      "sectionId": "c3-sec",
      "subsectionId": "overriding-signature-change-overload",
      "question": "Cho đoạn mã nguồn sau, kết quả in ra màn hình là gì?\n\n```java\nclass Base {\n    void display(int a) {\n        System.out.print(\"Base \");\n    }\n}\nclass Derived extends Base {\n    void display(double a) {\n        System.out.print(\"Derived \");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Base obj = new Derived();\n        obj.display(5);\n    }\n}\n```",
      "options": [
        "In ra kết quả: Derived ",
        "In ra kết quả: Base ",
        "Báo lỗi biên dịch code",
        "Gây ra lỗi ngoại lệ chạy"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh tưởng `Derived.display(double)` ghi đè (override) `Base.display(int)` và đa hình gọi phương thức con.",
        "trickWord": "Thay đổi kiểu tham số là Nạp chồng (Overload) chứ KHÔNG PHẢI Ghi đè (Override)",
        "citation": "Giáo trình OOP C3: Phân biệt Overriding và Overloading",
        "tip": "Khác tham số = Overload! Tham chiếu kiểu Base chỉ thấy display(int) của Base!"
      },
      "explanation": "Lớp `Derived` đổi kiểu tham số thành `double`, đây là NẠP CHỒNG (Overload) chứ không phải Ghi đè (Override). Biến `obj` có kiểu khai báo `Base`, khi gọi `obj.display(5)` (với 5 là `int`), Java gọi `display(int)` của lớp `Base` và in ra \"Base \"."
    },
    {
      "id": "oop-trick2-009",
      "examSet": 2,
      "sectionId": "c3-sec",
      "subsectionId": "field-shadowing-parent-reference",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nclass Parent {\n    int x = 10;\n}\nclass Child extends Parent {\n    int x = 20;\n}\npublic class Main {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        System.out.print(p.x + \" \");\n        Child c = new Child();\n        System.out.print(c.x);\n    }\n}\n```",
      "options": [
        "In ra kết quả: 20 20",
        "In ra kết quả: 10 20",
        "In ra kết quả: 10 10",
        "Báo lỗi biên dịch code"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ thuộc tính `x` cũng bị ghi đè (override) đa hình giống như phương thức.",
        "trickWord": "Che thuộc tính (Field Shadowing) không có tính Đa hình",
        "citation": "Giáo trình OOP C3: Thuộc tính và Đa hình trong Kế thừa",
        "tip": "Phương thức mới Đa hình (Dynamic binding), Thuộc tính kết hành theo Kiểu khai báo (Static)!"
      },
      "explanation": "Thuộc tính trong Java KHÔNG có tính đa hình. Khi truy cập `p.x`, vì `p` có kiểu khai báo là `Parent`, Java lấy thuộc tính `x` của `Parent` (10). Khi truy cập `c.x`, `c` kiểu `Child` lấy `x` của `Child` (20). In ra \"10 20\"."
    },
    {
      "id": "oop-trick2-010",
      "examSet": 2,
      "sectionId": "c3-sec",
      "subsectionId": "covariant-return-type",
      "question": "Xác định kết quả khi biên dịch đoạn mã sau:\n\n```java\nclass A {}\nclass B extends A {}\n\nclass Parent {\n    A get() { return new A(); }\n}\nclass Child extends Parent {\n    B get() { return new B(); }\n}\n```",
      "options": [
        "Biên dịch thành công 100%",
        "Báo lỗi sai kiểu trả về",
        "Báo lỗi không cho ghi đè",
        "Lỗi do thiếu từ khóa super"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ phương thức ghi đè (override) bắt buộc phải có kiểu trả về giống hệt 100%.",
        "trickWord": "Kiểu trả về đồng biến (Covariant Return Type)",
        "citation": "Giáo trình OOP C3: Kiểu trả về trong Ghi đè phương thức",
        "tip": "Covariant return: Phương thức con ghi đè được phép trả về LỚP CON của kiểu cha!"
      },
      "explanation": "Từ Java 5+, phương thức ghi đè cho phép dùng Kiểu trả về đồng biến (Covariant Return Type). Vì `B` là lớp con của `A`, phương thức `get()` ở `Child` trả về `B` hoàn toàn hợp lệ và biên dịch thành công."
    },
    {
      "id": "oop-trick2-011",
      "examSet": 2,
      "sectionId": "c3-sec",
      "subsectionId": "protected-access-cross-package",
      "question": "Giả sử hai lớp ở 2 package khác nhau, kết quả biên dịch ra sao?\n\n```java\n// File: p1/Parent.java\npackage p1;\npublic class Parent {\n    protected void msg() { System.out.print(\"Hi\"); }\n}\n\n// File: p2/Child.java\npackage p2;\nimport p1.Parent;\npublic class Child extends Parent {\n    public static void main(String[] args) {\n        Parent p = new Parent();\n        p.msg(); // Dòng X\n    }\n}\n```",
      "options": [
        "Màn hình in ra chữ Hi",
        "Báo lỗi biên dịch Dòng X",
        "Gây lỗi ngoại lệ runtime",
        "Báo lỗi import package"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ `Child` kế thừa `Parent` thì được gọi `protected` qua bất kỳ tham chiếu nào.",
        "trickWord": "Quy tắc truy cập `protected` khác Package qua tham chiếu Lớp Cha",
        "citation": "Giáo trình OOP C3: Quyền truy cập Protected trong Kế thừa",
        "tip": "Khác package: Lớp con chỉ gọi protected qua tham chiếu LỚP CON (chính nó), gọi qua tham chiếu Lớp Cha bị LỖI!"
      },
      "explanation": "Trong Java, ở khác package, lớp con `Child` chỉ có thể truy cập thành viên `protected` thông qua KẾ THỪA (tham chiếu của chính `Child` hoặc các lớp con của `Child`). Việc tạo tham chiếu `Parent p = new Parent()` rồi gọi `p.msg()` bị cấm và báo lỗi biên dịch tại Dòng X."
    },
    {
      "id": "oop-trick2-012",
      "examSet": 2,
      "sectionId": "c3-sec",
      "subsectionId": "final-method-override-attempt",
      "question": "Cho đoạn mã nguồn sau, trình biên dịch sẽ thông báo điều gì?\n\n```java\nclass Super {\n    final void process() {\n        System.out.print(\"Super\");\n    }\n}\nclass Sub extends Super {\n    void process() {\n        System.out.print(\"Sub\");\n    }\n}\n```",
      "options": [
        "Báo lỗi không thể ghi đè",
        "Biên dịch thành công 100%",
        "Báo lỗi thiếu từ khóa final",
        "Lỗi do trùng tên phương thức"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh quên ý nghĩa của từ khóa `final` đặt trước phương thức.",
        "trickWord": "Từ khóa `final` ngăn chặn Ghi đè phương thức (Override Prevention)",
        "citation": "Giáo trình OOP C3: Từ khóa final trong Kế thừa",
        "tip": "Phương thức final = Cấm ghi đè! Lớp con viết lại trùng tên là ăn lỗi biên dịch!"
      },
      "explanation": "Phương thức được đánh dấu từ khóa `final` ở lớp cha thì KHÔNG THỂ bị ghi đè (override) ở lớp con. Lớp `Sub` cố tình định nghĩa `void process()` sẽ gây lỗi biên dịch."
    },
    {
      "id": "oop-trick2-013",
      "examSet": 2,
      "sectionId": "c3-sec",
      "subsectionId": "equals-overloading-vs-overriding-trap",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nclass Point {\n    int x, y;\n    Point(int x, int y) { this.x = x; this.y = y; }\n    public boolean equals(Point p) {\n        return this.x == p.x && this.y == p.y;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Object p1 = new Point(1, 2);\n        Object p2 = new Point(1, 2);\n        System.out.print(p1.equals(p2));\n    }\n}\n```",
      "options": [
        "In ra kết quả: true",
        "In ra kết quả: false",
        "Báo lỗi biên dịch code",
        "Ném lỗi ClassCastException"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh tưởng phương thức `equals(Point p)` đã ghi đè `equals(Object obj)` của lớp `Object`.",
        "trickWord": "Bẫy nạp chồng `equals(Point)` thay vì ghi đè `equals(Object)`",
        "citation": "Giáo trình OOP C3: Lớp Object và Phương thức equals()",
        "tip": "equals(Point) là Overload! Biến kiểu Object gọi equals(Object) mặc định của Object (so sánh == -> false)!"
      },
      "explanation": "Phương thức chuẩn của `Object` là `equals(Object)`. Trong lớp `Point`, người viết ghi `equals(Point p)` - đây là NẠP CHỒNG chứ không phải ghi đè. Vì `p1` có kiểu khai báo `Object`, câu lệnh `p1.equals(p2)` sẽ gọi `equals(Object)` nguyên bản của `Object` (so sánh địa chỉ `==`), trả về `false`."
    },
    {
      "id": "oop-trick2-014",
      "examSet": 2,
      "sectionId": "c3-sec",
      "subsectionId": "super-constructor-execution-order",
      "question": "Cho đoạn mã nguồn sau, thứ tự in ra màn hình là gì?\n\n```java\nclass A {\n    A() { System.out.print(\"A\"); }\n}\nclass B extends A {\n    B() { System.out.print(\"B\"); }\n}\nclass C extends B {\n    C() { System.out.print(\"C\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new C();\n    }\n}\n```",
      "options": [
        "In ra kết quả: CBA",
        "In ra kết quả: ABC",
        "In ra kết quả: C",
        "Báo lỗi biên dịch code"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ constructor của lớp con `C` thực thi trước rồi mới tới lớp cha.",
        "trickWord": "Thứ tự thực thi Constructor trong cây kế thừa nhiều cấp",
        "citation": "Giáo trình OOP C3: Tiến trình khởi tạo trong Kế thừa",
        "tip": "Tạo đối tượng con: Constructor chạy từ LỚP CHA TỔ TIÊN cao nhất xuống lớp con!"
      },
      "explanation": "Khi gọi `new C()`, Java tự động gọi `super()` từ `C` lên `B`, từ `B` lên `A`. Do đó constructor của `A` chạy trước (in \"A\"), tới `B` (in \"B\"), và cuối cùng là `C` (in \"C\"). Kết quả: \"ABC\"."
    },

    /* ============================================================
       CHƯƠNG 4: TRỪU TƯỢNG (CÂU 015 - 021)
       ============================================================ */
    {
      "id": "oop-trick2-015",
      "examSet": 2,
      "sectionId": "c4-sec",
      "subsectionId": "abstract-class-constructor-call",
      "question": "Xác định kết quả khi biên dịch và thực thi đoạn mã sau:\n\n```java\nabstract class Shape {\n    Shape() {\n        System.out.print(\"Shape \");\n    }\n}\nclass Circle extends Shape {\n    Circle() {\n        System.out.print(\"Circle \");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Circle();\n    }\n}\n```",
      "options": [
        "In ra kết quả: Circle ",
        "In ra: Shape Circle ",
        "Báo lỗi do Abstract có Con",
        "Báo lỗi không new được"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ Abstract class không thể khởi tạo nên KHÔNG THỂ CÓ Constructor.",
        "trickWord": "Abstract class CÓ THỂ có Constructor và được gọi qua `super()`",
        "citation": "Giáo trình OOP C4: Lớp trừu tượng Abstract Class",
        "tip": "Abstract class KHÔNG new trực tiếp được, nhưng CÓ constructor để lớp con gọi qua super()!"
      },
      "explanation": "Lớp trừu tượng `Abstract class` vẫn được phép có Constructor. Khi khởi tạo lớp con `new Circle()`, constructor của lớp cha `Shape()` được tự động gọi trước qua `super()`. Kết quả in ra \"Shape Circle \"."
    },
    {
      "id": "oop-trick2-016",
      "examSet": 2,
      "sectionId": "c4-sec",
      "subsectionId": "abstract-static-illegal-combination",
      "question": "Cho đoạn mã nguồn sau, trình biên dịch báo lỗi ở dòng nào?\n\n```java\nabstract class Appliance {\n    abstract static void turnOn(); // Dòng 2\n    abstract void turnOff();        // Dòng 3\n}\n```",
      "options": [
        "Báo lỗi ở Dòng 2",
        "Báo lỗi ở Dòng 3",
        "Báo lỗi ở cả Dòng 2 và 3",
        "Biên dịch thành công 100%"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh không biết từ khóa `abstract` và `static` xung đột trực tiếp với nhau.",
        "trickWord": "Sự kết hợp bất hợp lệ giữa `abstract` và `static`",
        "citation": "Giáo trình OOP C4: Các ràng buộc đối với Phương thức trừu tượng",
        "tip": "Abstract (cần ghi đè đa hình) xung đột Static (liên kết tĩnh) -> CẤM đi chung!"
      },
      "explanation": "Phương thức `abstract` yêu cầu được ghi đè đa hình ở lớp con (Dynamic Binding), trong khi phương thức `static` thuộc về lớp và liên kết tĩnh (Static Binding). Hai từ khóa này mâu thuẫn nhau nên `abstract static` bị cấm và báo lỗi biên dịch ở Dòng 2."
    },
    {
      "id": "oop-trick2-017",
      "examSet": 2,
      "sectionId": "c4-sec",
      "subsectionId": "abstract-method-with-body",
      "question": "Điều gì xảy ra khi biên dịch đoạn mã dưới đây?\n\n```java\nabstract class Writer {\n    abstract void write() {\n        System.out.print(\"Writing\");\n    }\n}\n```",
      "options": [
        "Biên dịch thành công 100%",
        "Báo lỗi do có thân hàm",
        "Báo lỗi thiếu từ khóa public",
        "Ném ngoại lệ AbstractError"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ phương thức trong abstract class được quyền viết thân hàm `{}` bình thường.",
        "trickWord": "Phương thức `abstract` KHÔNG ĐƯỢC có thân hàm (Body)",
        "citation": "Giáo trình OOP C4: Cú pháp Phương thức trừu tượng",
        "tip": "Phương thức abstract chỉ có phần khai báo kết thúc bằng dấu `;`, có `{}` là ăn lỗi!"
      },
      "explanation": "Phương thức có từ khóa `abstract` bắt buộc phải là phương thức rỗng không có thân hàm (kết thúc bằng dấu `;`). Việc thêm khối mã `{ System.out.print... }` sẽ gây lỗi biên dịch 'abstract methods cannot have a body'."
    },
    {
      "id": "oop-trick2-018",
      "examSet": 2,
      "sectionId": "c4-sec",
      "subsectionId": "concrete-subclass-missing-abstract-impl",
      "question": "Cho đoạn mã nguồn sau, trình biên dịch sẽ báo lỗi ở đâu?\n\n```java\nabstract class Vehicle {\n    abstract void start();\n    abstract void stop();\n}\nclass Car extends Vehicle {\n    void start() { System.out.print(\"Vroom\"); }\n}\n```",
      "options": [
        "Báo lỗi ở khai báo lớp Car",
        "Báo lỗi ở phương thức start",
        "Biên dịch thành công 100%",
        "Báo lỗi ở lớp Vehicle"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh thấy lớp `Car` đã implement được 1 phương thức `start()` nên cho là đủ.",
        "trickWord": "Lớp con cụ thể (Concrete class) bắt buộc phải ghi đè TẤT CẢ phương thức trừu tượng",
        "citation": "Giáo trình OOP C4: Quy tắc kế thừa Lớp trừu tượng",
        "tip": "Lớp con cụ thể không abstract: Phải ghi đè BẮT BUỘC 100% phương thức abstract của cha!"
      },
      "explanation": "Lớp `Car` là một lớp cụ thể (không có từ khóa `abstract`), nhưng chỉ ghi đè `start()` mà bỏ quên `stop()`. Vì chưa ghi đè hết toàn bộ phương thức trừu tượng của `Vehicle`, lớp `Car` sẽ bị trình biên dịch báo lỗi."
    },
    {
      "id": "oop-trick2-019",
      "examSet": 2,
      "sectionId": "c4-sec",
      "subsectionId": "abstract-final-illegal-combination",
      "question": "Xác định hiện tượng xảy ra khi biên dịch đoạn mã sau:\n\n```java\nabstract final class Test {\n    abstract void run();\n}\n```",
      "options": [
        "Biên dịch thành công 100%",
        "Báo lỗi xung đột abstract final",
        "Báo lỗi phương thức run",
        "Báo lỗi thiếu từ khóa public"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh không biết `abstract` và `final` là hai từ khóa đối lập hoàn toàn.",
        "trickWord": "Sự xung đột trực tiếp giữa `abstract` và `final` ở cấp Lớp",
        "citation": "Giáo trình OOP C4: Từ khóa bổ trợ trong Khái niệm Trừu tượng",
        "tip": "Abstract (bắt buộc phải được kế thừa) VS Final (cấm kế thừa) -> Xung đột báo lỗi!"
      },
      "explanation": "Lớp `abstract` bắt buộc phải được kế thừa để sử dụng, trong khi từ khóa `final` cấm không cho lớp khác kế thừa. Việc kết hợp `abstract final class` tạo nên sự xung đột cú pháp và bị trình biên dịch báo lỗi ngay lập tức."
    },
    {
      "id": "oop-trick2-020",
      "examSet": 2,
      "sectionId": "c4-sec",
      "subsectionId": "abstract-class-instantiation-attempt",
      "question": "Cho đoạn mã nguồn sau, câu lệnh nào ở hàm `main` bị lỗi biên dịch?\n\n```java\nabstract class Animal {\n    abstract void makeSound();\n}\nclass Dog extends Animal {\n    void makeSound() { System.out.print(\"Woof\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Animal(); // Lệnh 1\n        Animal b = new Dog();    // Lệnh 2\n    }\n}\n```",
      "options": [
        "Báo lỗi ở Lệnh 1",
        "Báo lỗi ở Lệnh 2",
        "Báo lỗi cả Lệnh 1 và 2",
        "Biên dịch thành công 100%"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nhầm lẫn giữa việc dùng Abstract class làm KIỂU THAM CHIẾU với việc NEW trực tiếp.",
        "trickWord": "Không được khởi tạo trực tiếp Lớp trừu tượng bằng từ khóa `new`",
        "citation": "Giáo trình OOP C4: Bản chất của Lớp trừu tượng",
        "tip": "Abstract class: Được làm kiểu khai báo (Animal b), KHÔNG ĐƯỢC new trực tiếp (new Animal())!"
      },
      "explanation": "Lớp trừu tượng `Animal` không thể khởi tạo đối tượng trực tiếp bằng toán tử `new Animal()`. Lệnh 1 bị lỗi biên dịch. Lệnh 2 `Animal b = new Dog()` hoàn toàn hợp lệ nhờ tính đa hình."
    },
    {
      "id": "oop-trick2-021",
      "examSet": 2,
      "sectionId": "c4-sec",
      "subsectionId": "abstract-method-visibility-reduction",
      "question": "Cho đoạn mã nguồn sau, trình biên dịch sẽ báo lỗi vì lý do gì?\n\n```java\nabstract class Base {\n    public abstract void show();\n}\nclass Derived extends Base {\n    void show() {\n        System.out.print(\"Show\");\n    }\n}\n```",
      "options": [
        "Báo lỗi do giảm quyền truy cập",
        "Báo lỗi do thiếu từ khóa override",
        "Biên dịch thành công 100%",
        "Báo lỗi phương thức show rỗng"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh không chú ý quyền truy cập mặc định (`default`) nhỏ hơn `public` của lớp cha.",
        "trickWord": "Quy tắc không được thu hẹp quyền truy cập (Visibility Reduction) khi Ghi đè",
        "citation": "Giáo trình OOP C4: Quy tắc Ghi đè phương thức Trừu tượng",
        "tip": "Ghi đè phương thức: Quyền truy cập lớp con phải BẰNG hoặc RỘNG HƠN lớp cha!"
      },
      "explanation": "Ở `Base`, phương thức `show()` có quyền `public`. Ở `Derived`, phương thức `show()` không khai báo modifier nên mang quyền `default` (hẹp hơn `public`). Java cấm thu hẹp phạm vi truy cập khi ghi đè, do đó đoạn mã bị lỗi biên dịch."
    },

    /* ============================================================
       CHƯƠNG 5: ĐA HÌNH & INTERFACE (CÂU 022 - 028)
       ============================================================ */
    {
      "id": "oop-trick2-022",
      "examSet": 2,
      "sectionId": "c5-sec",
      "subsectionId": "interface-variable-implicit-modifiers",
      "question": "Cho đoạn mã nguồn sau, kết quả biên dịch như thế nào?\n\n```java\ninterface Printable {\n    int MAX = 100;\n}\npublic class Test {\n    public static void main(String[] args) {\n        Printable.MAX = 200;\n        System.out.print(Printable.MAX);\n    }\n}\n```",
      "options": [
        "Báo lỗi gán lại hằng số MAX",
        "Màn hình in ra số 200",
        "Màn hình in ra số 100",
        "Báo lỗi không gọi được MAX"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ biến trong Interface là biến thường có thể thay đổi giá trị.",
        "trickWord": "Biến trong Interface ngầm định là `public static final`",
        "citation": "Giáo trình OOP C5: Bản chất biến trong Interface",
        "tip": "Biến trong Interface: Mặc định 100% là hằng số final, cấm thay đổi giá trị!"
      },
      "explanation": "Mọi biến được khai báo trong Interface đều ngầm định có các từ khóa `public static final`. Vì là hằng số `final`, câu lệnh `Printable.MAX = 200` cố tình gán lại giá trị sẽ bị trình biên dịch báo lỗi 'cannot assign a value to final variable'."
    },
    {
      "id": "oop-trick2-023",
      "examSet": 2,
      "sectionId": "c5-sec",
      "subsectionId": "interface-default-method-diamond-conflict",
      "question": "Cho đoạn mã nguồn sau, điều gì xảy ra khi biên dịch?\n\n```java\ninterface A {\n    default void hello() { System.out.print(\"A\"); }\n}\ninterface B {\n    default void hello() { System.out.print(\"B\"); }\n}\nclass C implements A, B {}\n```",
      "options": [
        "Báo lỗi xung đột default method",
        "Biên dịch thành công in A",
        "Biên dịch thành công in B",
        "Lỗi do Interface có thân hàm"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh cho rằng Java tự động chọn phương thức của Interface đầu tiên (`A`).",
        "trickWord": "Xung đột phương thức mặc định (Default Method Diamond Problem)",
        "citation": "Giáo trình OOP C5: Default Method và Đa thừa kế Interface",
        "tip": "2 Interface có cùng default method: Lớp con implements cả 2 BẮT BUỘC phải ghi đè hello()!"
      },
      "explanation": "Khi lớp `C` implements cả `A` và `B` chứa phương thức `default void hello()` trùng tên và chữ ký, xảy ra hiện tượng xung đột đa thừa kế (Diamond Problem). Trình biên dịch bắt buộc `C` phải ghi đè lại `hello()`, nếu không sẽ báo lỗi biên dịch."
    },
    {
      "id": "oop-trick2-024",
      "examSet": 2,
      "sectionId": "c5-sec",
      "subsectionId": "polymorphism-dynamic-binding-execution",
      "question": "Cho đoạn mã nguồn sau, màn hình sẽ in ra kết quả gì?\n\n```java\nclass Parent {\n    void show() { System.out.print(\"P \"); }\n}\nclass Child extends Parent {\n    void show() { System.out.print(\"C \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Parent obj = new Child();\n        obj.show();\n    }\n}\n```",
      "options": [
        "In ra kết quả: P ",
        "In ra kết quả: C ",
        "Báo lỗi biên dịch code",
        "Gây ra ngoại lệ runtime"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nhìn kiểu tham chiếu `Parent obj` nên tưởng sẽ gọi `show()` của `Parent`.",
        "trickWord": "Liên kết động (Dynamic Binding / Late Binding) trong Đa hình",
        "citation": "Giáo trình OOP C5: Tính Đa hình trong Java",
        "tip": "Gọi phương thức bị ghi đè: Quyết định dựa trên ĐỐI TƯỢNG THỰC TẾ (new Child()) lúc runtime!"
      },
      "explanation": "Phương thức trong Java liên kết động lúc runtime (Dynamic Binding). Mặc dù `obj` khai báo kiểu `Parent`, nhưng đối tượng thực tế được tạo ra trong bộ nhớ là `new Child()`. Do đó phương thức `show()` của `Child` được thực thi, in ra \"C \"."
    },
    {
      "id": "oop-trick2-025",
      "examSet": 2,
      "sectionId": "c5-sec",
      "subsectionId": "downcasting-classcastexception",
      "question": "Cho đoạn mã nguồn sau, hiện tượng gì xảy ra khi thực thi?\n\n```java\nclass Animal {}\nclass Dog extends Animal {}\nclass Cat extends Animal {}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        Cat c = (Cat) a;\n    }\n}\n```",
      "options": [
        "Ném lỗi ClassCastException",
        "Biên dịch lỗi ở câu ép kiểu",
        "Chương trình chạy bình thường",
        "Ném lỗi NullPointerException"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh tưởng ép kiểu `(Cat) a` sẽ bị trình biên dịch bắt lỗi ngay lúc compile.",
        "trickWord": "Ép kiểu xuống (Downcasting) sai đối tượng thực tế",
        "citation": "Giáo trình OOP C5: Ép kiểu đối tượng và Ngoại lệ ClassCastException",
        "tip": "Downcasting ép kiểu: Compile cho qua (do cùng cây kế thừa), Runtime ném ClassCastException!"
      },
      "explanation": "Về mặt biên dịch, `Cat` và `Dog` cùng là con của `Animal` nên cú pháp ép kiểu `(Cat) a` qua mặt được trình biên dịch. Tuy nhiên tại runtime, đối tượng thực tế trong `a` là `Dog`, không thể ép về `Cat`, gây ra ngoại lệ `ClassCastException`."
    },
    {
      "id": "oop-trick2-026",
      "examSet": 2,
      "sectionId": "c5-sec",
      "subsectionId": "instanceof-null-check-behavior",
      "question": "Hãy cho biết kết quả in ra màn hình của đoạn mã sau:\n\n```java\nString s = null;\nif (s instanceof String) {\n    System.out.print(\"YES\");\n} else {\n    System.out.print(\"NO\");\n}\n```",
      "options": [
        "Màn hình in ra chữ YES",
        "Màn hình in ra chữ NO",
        "Ném lỗi NullPointerException",
        "Báo lỗi biên dịch code"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh cho rằng kiểm tra `null instanceof String` sẽ bị `NullPointerException`.",
        "trickWord": "Toán tử `instanceof` trên tham chiếu `null`",
        "citation": "Giáo trình OOP C5: Toán tử kiểm tra kiểu instanceof",
        "tip": "null instanceof BẤT_KỲ_KIỂU luôn luôn trả về FALSE, không bị Exception!"
      },
      "explanation": "Trong Java, toán tử `instanceof` được thiết kế an toàn với `null`. Nếu biến tham chiếu mang giá trị `null`, biểu thức `null instanceof AnyType` luôn trả về `false` chứ không ném `NullPointerException`. Do đó in ra \"NO\"."
    },
    {
      "id": "oop-trick2-027",
      "examSet": 2,
      "sectionId": "c5-sec",
      "subsectionId": "polymorphic-static-method-binding",
      "question": "Cho đoạn mã nguồn sau, màn hình sẽ in ra kết quả gì?\n\n```java\nclass Super {\n    static void print() { System.out.print(\"Super \"); }\n}\nclass Sub extends Super {\n    static void print() { System.out.print(\"Sub \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Super obj = new Sub();\n        obj.print();\n    }\n}\n```",
      "options": [
        "In ra kết quả: Sub ",
        "In ra kết quả: Super ",
        "Báo lỗi biên dịch code",
        "Ném ngoại lệ ClassCast"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nhầm phương thức static bị ghi đè (override) và hoạt động đa hình.",
        "trickWord": "Ẩn phương thức Static (Method Hiding) liên kết Tĩnh",
        "citation": "Giáo trình OOP C5: Phân biệt Ghi đè (Override) và Che ẩn Static (Hide)",
        "tip": "Phương thức Static KHÔNG có Đa hình! Gọi qua tham chiếu Super obj -> Chạy static của Super!"
      },
      "explanation": "Phương thức `static` không thể bị ghi đè (override) mà chỉ bị ẩn đi (method hiding). Việc gọi phương thức `static` được liên kết tĩnh (Static Binding) dựa trên kiểu khai báo của biến `obj` (kiểu `Super`), chứ không phụ thuộc vào `new Sub()`. Do đó in ra \"Super \"."
    },
    {
      "id": "oop-trick2-028",
      "examSet": 2,
      "sectionId": "c5-sec",
      "subsectionId": "interface-private-method-rules",
      "question": "Tính năng phương thức `private` trong Interface được chính thức hỗ trợ từ phiên bản Java nào?",
      "options": [
        "Từ phiên bản Java 7",
        "Từ phiên bản Java 8",
        "Từ phiên bản Java 9",
        "Không bao giờ hỗ trợ"
      ],
      "answer": 2,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh hay nhầm lẫn giữa `default method` (Java 8) và `private method` (Java 9).",
        "trickWord": "Lịch sử tiến hóa phương thức trong Interface (Java 8 default vs Java 9 private)",
        "citation": "Giáo trình OOP C5: Sự tiến hóa của Interface trong Java",
        "tip": "Java 8 thêm Default/Static method, Java 9 thêm Private method để tái sử dụng code nội bộ Interface!"
      },
      "explanation": "Java 8 giới thiệu `default` và `static` method trong Interface. Đến Java 9, Java bổ sung thêm phương thức `private` trong Interface nhằm giúp chia sẻ mã nguồn giữa các `default` method nội bộ mà không lộ ra ngoài."
    },

    /* ============================================================
       CHƯƠNG 6: JAVA COLLECTIONS & GENERICS (CÂU 029 - 035)
       ============================================================ */
    {
      "id": "oop-trick2-029",
      "examSet": 2,
      "sectionId": "c6-sec",
      "subsectionId": "autoboxing-unboxing-nullpointer",
      "question": "Cho đoạn mã nguồn sau, điều gì sẽ xảy ra khi chạy?\n\n```java\nInteger obj = null;\nint num = obj;\nSystem.out.print(num);\n```",
      "options": [
        "In ra màn hình số 0",
        "Ném lỗi NullPointer",
        "Báo lỗi biên dịch code",
        "In ra màn hình từ null"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ biến `int` sẽ tự nhận giá trị mặc định là 0 khi gán từ `null`.",
        "trickWord": "Giải bao gói (Unboxing) trên biến Wrapper mang giá trị null",
        "citation": "Giáo trình OOP C6: Autoboxing và Unboxing trong Java",
        "tip": "Unboxing Integer -> int ngầm gọi obj.intValue(). Khi obj = null -> Ném NullPointerException!"
      },
      "explanation": "Khi gán `int num = obj`, Java ngầm thực hiện Unboxing bằng cách gọi `obj.intValue()`. Do `obj` đang có giá trị `null`, việc gọi phương thức trên `null` gây ra ném ngoại lệ `NullPointerException` tại runtime."
    },
    {
      "id": "oop-trick2-030",
      "examSet": 2,
      "sectionId": "c6-sec",
      "subsectionId": "generics-primitive-type-restriction",
      "question": "Tại sao câu lệnh khai báo sau đây bị lỗi biên dịch?\n\n```java\nArrayList<int> list = new ArrayList<>();\n```",
      "options": [
        "Do Generics không dùng kiểu nguyên thủy",
        "Do thiếu kích thước trong ArrayList",
        "Do không từ khóa new ở vế phải",
        "Do thiếu khai báo thư viện java.io"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh thói quen dùng kiểu `int` cho mảng nên áp dụng thẳng vào Generics.",
        "trickWord": "Ràng buộc Xóa kiểu (Type Erasure) và Kiểu đối tượng trong Generics",
        "citation": "Giáo trình OOP C6: Khái niệm Generics và Type Erasure",
        "tip": "Generics CẤM dùng kiểu nguyên thủy (int, double...), bắt buộc dùng Wrapper Class (Integer, Double)!"
      },
      "explanation": "Generics trong Java hoạt động dựa trên cơ chế Xóa kiểu (Type Erasure), thay thế các tham số kiểu thành `Object`. Vì kiểu nguyên thủy (như `int`) không kế thừa từ `Object`, Generics chỉ chấp nhận kiểu đối tượng/Wrapper Class (`ArrayList<Integer>`)."
    },
    {
      "id": "oop-trick2-031",
      "examSet": 2,
      "sectionId": "c6-sec",
      "subsectionId": "arraylist-remove-int-vs-object",
      "question": "Cho đoạn mã nguồn sau, danh sách in ra màn hình là gì?\n\n```java\nArrayList<Integer> list = new ArrayList<>();\nlist.add(1);\nlist.add(2);\nlist.add(3);\nlist.remove(2);\nSystem.out.print(list);\n```",
      "options": [
        "In ra danh sách: [1, 2]",
        "In ra danh sách: [1, 3]",
        "In ra danh sách: [2, 3]",
        "Báo lỗi biên dịch code"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh tưởng `list.remove(2)` sẽ xóa số 2 ra khỏi danh sách.",
        "trickWord": "Bẫy nạp chồng `remove(int index)` vs `remove(Object o)` trong List",
        "citation": "Giáo trình OOP C6: Lớp ArrayList và các phương thức xóa",
        "tip": "list.remove(2) với tham số int: Xóa phần tử tại INDEX 2 (số 3), muốn xóa số 2 phải dùng list.remove(Integer.valueOf(2))!"
      },
      "explanation": "Phương thức `remove` có 2 bản nạp chồng: `remove(int index)` và `remove(Object o)`. Khi truyền số nguyên `2`, Java ưu tiên chọn `remove(int index)` (xóa phần tử ở vị trí index 2, tức là số 3). Danh sách còn lại `[1, 2]`."
    },
    {
      "id": "oop-trick2-032",
      "examSet": 2,
      "sectionId": "c6-sec",
      "subsectionId": "arrays-aslist-fixed-size",
      "question": "Cho đoạn mã nguồn sau, hiện tượng gì xảy ra khi thực thi?\n\n```java\nList<String> list = Arrays.asList(\"A\", \"B\");\nlist.add(\"C\");\nSystem.out.print(list.size());\n```",
      "options": [
        "In ra màn hình số 3",
        "Ném UnsupportedOperation",
        "Báo lỗi biên dịch code",
        "Ném lỗi NullPointer"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ `Arrays.asList()` trả về `java.util.ArrayList` thường có thể thêm xóa phần tử.",
        "trickWord": "Danh sách có kích thước cố định (Fixed-size List) từ `Arrays.asList()`",
        "citation": "Giáo trình OOP C6: Chuyển đổi Mảng và Collections",
        "tip": "Arrays.asList() tạo List cố định kích thước: Gọi add() hoặc remove() ném ngay UnsupportedOperationException!"
      },
      "explanation": "`Arrays.asList()` trả về một danh sách có kích thước cố định bọc quanh mảng ban đầu. Các thao tác làm thay đổi kích thước danh sách như `.add()` hay `.remove()` bị cấm và ném ngoại lệ `UnsupportedOperationException` tại runtime."
    },
    {
      "id": "oop-trick2-033",
      "examSet": 2,
      "sectionId": "c6-sec",
      "subsectionId": "concurrent-modification-exception-foreach",
      "question": "Xác định ngoại lệ phát sinh khi chạy đoạn mã dưới đây:\n\n```java\nArrayList<String> list = new ArrayList<>();\nlist.add(\"A\");\nlist.add(\"B\");\nfor (String s : list) {\n    if (s.equals(\"A\")) list.remove(s);\n}\n```",
      "options": [
        "Ném ConcurrentModification",
        "Chương trình chạy bình thường",
        "Ném IndexOutOfBounds",
        "Báo lỗi biên dịch code"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh tưởng xoá phần tử trong vòng lặp for-each là an toàn.",
        "trickWord": "Sửa đổi danh sách khi đang duyệt (Concurrent Modification)",
        "citation": "Giáo trình OOP C6: Con trỏ Iterator và Vòng lặp For-each",
        "tip": "Đang duyệt For-each mà tự ý add()/remove() trực tiếp trên List -> Ném ConcurrentModificationException!"
      },
      "explanation": "Vòng lặp for-each ngầm định sử dụng `Iterator` để duyệt. Việc sửa đổi cấu trúc của `ArrayList` (thông qua `list.remove()`) trực tiếp trong khi Iterator đang chạy phá vỡ trạng thái đồng bộ của cờ `modCount`, ném ngoại lệ `ConcurrentModificationException`."
    },
    {
      "id": "oop-trick2-034",
      "examSet": 2,
      "sectionId": "c6-sec",
      "subsectionId": "generics-wildcard-add-restriction",
      "question": "Cho đoạn mã nguồn sau, câu lệnh nào bị lỗi biên dịch?\n\n```java\nList<?> list = new ArrayList<String>();\nlist.add(\"Hello\"); // Câu lệnh X\n```",
      "options": [
        "Báo lỗi ở Câu lệnh X",
        "Biên dịch thành công 100%",
        "Báo lỗi ở câu khai báo",
        "Báo lỗi thiếu ép kiểu"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ Ký tự đại diện `List<?>` nhận mọi đối tượng nên thêm được String.",
        "trickWord": "Bất biến của Ký tự đại diện không giới hạn (Unbounded Wildcard Read-only)",
        "citation": "Giáo trình OOP C6: Generics Wildcards trong Java",
        "tip": "List<?> là danh sách CHỈ ĐỌC: Không thể add() bất kỳ giá trị nào (trừ null) vì compiler không biết kiểu thực sự!"
      },
      "explanation": "`List<?>` biểu diễn một danh sách có kiểu dữ liệu chưa xác định. Để đảm bảo an toàn kiểu (Type Safety), trình biên dịch CẤM thêm bất kỳ đối tượng nào vào `List<?>` (ngoại trừ giá trị `null`). Câu lệnh X gây lỗi biên dịch."
    },
    {
      "id": "oop-trick2-035",
      "examSet": 2,
      "sectionId": "c6-sec",
      "subsectionId": "vector-vs-arraylist-thread-safety",
      "question": "Điểm khác biệt căn bản nhất giữa `Vector` và `ArrayList` trong Java là gì?",
      "options": [
        "Vector được Đồng bộ hóa (Synchronized)",
        "ArrayList chỉ chứa số nguyên int",
        "Vector không cho phép lưu null",
        "ArrayList có kích thước cố định"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh hay nhầm các đặc tính về hiệu năng và đồng bộ giữa 2 lớp này.",
        "trickWord": "Đồng bộ hóa đa luồng (Thread-safety / Synchronization)",
        "citation": "Giáo trình OOP C6: Phân biệt Vector và ArrayList",
        "tip": "Vector: An toàn đa luồng (Synchronized, chậm). ArrayList: Không đồng bộ (Nhanh hơn)!"
      },
      "explanation": "`Vector` là lớp legacy ra đời từ Java 1.0, tất cả các phương thức của nó đều được `synchronized` (an toàn cho đa luồng nhưng hiệu năng thấp). `ArrayList` ra đời ở Java 1.2 không đồng bộ hóa nên chạy nhanh hơn trong ứng dụng đơn luồng."
    },

    /* ============================================================
       CHƯƠNG 7: NGOẠI LỆ - XỬ LÝ FILE (CÂU 036 - 042)
       ============================================================ */
    {
      "id": "oop-trick2-036",
      "examSet": 2,
      "sectionId": "c7-sec",
      "subsectionId": "finally-return-override-try-return",
      "question": "Cho đoạn mã nguồn sau, giá trị trả về của hàm `test()` là bao nhiêu?\n\n```java\nstatic int test() {\n    try {\n        return 10;\n    } finally {\n        return 20;\n    }\n}\n```",
      "options": [
        "Trả về giá trị là: 10",
        "Trả về giá trị là: 20",
        "Báo lỗi biên dịch code",
        "Gây ra ngoại lệ runtime"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ câu lệnh `return 10` trong khối `try` đã kết thúc hàm ngay lập tức.",
        "trickWord": "Khối `finally` ghi đè giá trị `return` của khối `try`",
        "citation": "Giáo trình OOP C7: Luồng thực thi của khối Try-Catch-Finally",
        "tip": "Khối finally LUÔN CHẠY trước khi hàm thực sự thoát! Return trong finally ghi đè mọi return trước đó!"
      },
      "explanation": "Khối `finally` luôn được thực thi trước khi phương thức kết thúc. Khi khối `finally` chứa câu lệnh `return 20`, nó sẽ ghi đè hoàn toàn giá trị trả về `10` của khối `try`. Kết quả hàm trả về 20."
    },
    {
      "id": "oop-trick2-037",
      "examSet": 2,
      "sectionId": "c7-sec",
      "subsectionId": "finally-system-exit-exception",
      "question": "Cho đoạn mã nguồn sau, khối `finally` có được thực thi không?\n\n```java\ntry {\n    System.out.print(\"Try \");\n    System.exit(0);\n} finally {\n    System.out.print(\"Finally \");\n}\n```",
      "options": [
        "In ra kết quả: Try ",
        "In ra: Try Finally ",
        "In ra kết quả: Finally ",
        "Báo lỗi biên dịch code"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh học thuộc lòng quy tắc 'Khối finally LUÔN LUÔN chạy trong mọi trường hợp'.",
        "trickWord": "Lệnh `System.exit()` dừng JVM lập tức làm khối `finally` KHÔNG CHẠY",
        "citation": "Giáo trình OOP C7: Các trường hợp ngoại lệ khối Finally không chạy",
        "tip": "System.exit() ngắt JVM lập tức -> Trường hợp hiếm hoi khối Finally BỊ BỎ QUA!"
      },
      "explanation": "`System.exit(0)` chấm dứt ngay lập tức tiến trình chạy của máy ảo Java (JVM). Do JVM đã dừng hẳn, khối `finally` không còn cơ hội thực thi. Màn hình chỉ in ra \"Try \"."
    },
    {
      "id": "oop-trick2-038",
      "examSet": 2,
      "sectionId": "c7-sec",
      "subsectionId": "catch-block-order-inheritance",
      "question": "Cho đoạn mã nguồn sau, trình biên dịch báo lỗi ở dòng nào?\n\n```java\ntry {\n    int x = 10 / 0;\n} catch (Exception e) {     // Dòng 3\n    System.out.print(\"E\");\n} catch (ArithmeticException e) { // Dòng 5\n    System.out.print(\"AE\");\n}\n```",
      "options": [
        "Báo lỗi ở Dòng 5",
        "Báo lỗi ở Dòng 3",
        "Biên dịch thành công 100%",
        "Gây lỗi ngoại lệ runtime"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ bắt `Exception` trước cho an toàn rồi mới bắt ngoại lệ cụ thể sau.",
        "trickWord": "Thứ tự bắt ngoại lệ unreachable code (Catch Block Hierarchy)",
        "citation": "Giáo trình OOP C7: Thứ tự các khối Catch trong xử lý ngoại lệ",
        "tip": "Bắt Catch: Phải bắt Ngoại lệ CON trước, Ngoại lệ CHA sau! Bắt cha trước làm con thành Unreachable!"
      },
      "explanation": "`ArithmeticException` là lớp con của `Exception`. Khối `catch (Exception e)` đứng trước đã bắt tất cả mọi ngoại lệ, khiến khối `catch (ArithmeticException e)` ở Dòng 5 không bao giờ được chạm tới (Unreachable code), gây lỗi biên dịch."
    },
    {
      "id": "oop-trick2-039",
      "examSet": 2,
      "sectionId": "c7-sec",
      "subsectionId": "overriding-checked-exception-rule",
      "question": "Cho đoạn mã nguồn sau, kết quả biên dịch ra sao?\n\n```java\nimport java.io.IOException;\nclass Parent {\n    void show() {}\n}\nclass Child extends Parent {\n    void show() throws IOException {} // Dòng X\n}\n```",
      "options": [
        "Báo lỗi biên dịch Dòng X",
        "Biên dịch thành công 100%",
        "Báo lỗi do thiếu import",
        "Lỗi do thiếu từ khóa try"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ phương thức con ghi đè thích ném Checked Exception gì cũng được.",
        "trickWord": "Ràng buộc ném Checked Exception khi Ghi đè phương thức",
        "citation": "Giáo trình OOP C7: Xử lý Ngoại lệ trong Ghi đè phương thức",
        "tip": "Phương thức con ghi đè: KHÔNG ĐƯỢC ném Checked Exception mới hoặc rộng hơn phương thức cha!"
      },
      "explanation": "Trong Java, phương thức ghi đè ở lớp con không được phép ném ra Checked Exception mới hoặc rộng hơn ngoại lệ mà phương thức ở lớp cha đã khai báo. Vì `Parent.show()` không ném Checked Exception nào, `Child.show()` ném `IOException` bị lỗi biên dịch."
    },
    {
      "id": "oop-trick2-040",
      "examSet": 2,
      "sectionId": "c7-sec",
      "subsectionId": "transient-serialization-restoration",
      "question": "Cho đoạn mã nguồn sau, giá trị của `pass` sau khi Deserialization là gì?\n\n```java\nimport java.io.Serializable;\nclass User implements Serializable {\n    String name = \"Alice\";\n    transient String pass = \"123456\";\n}\n```",
      "options": [
        "Giá trị thu được là: null",
        "Giá trị thu được: 123456",
        "Báo lỗi biên dịch code",
        "Gây ra ngoại lệ runtime"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ giá trị ban đầu \"123456\" vẫn được bảo toàn sau khi đọc lại file.",
        "trickWord": "Từ khóa `transient` bỏ qua thuộc tính khi Tuần tự hóa (Serialization)",
        "citation": "Giáo trình OOP C7: Khái niệm Serialization và Từ khóa Transient",
        "tip": "Transient field: Không bị ghi vào file khi Serialize, khi Deserialize đọc ra gán mặc định (null / 0)!"
      },
      "explanation": "Từ khóa `transient` báo cho Java bỏ qua thuộc tính đó không ghi vào luồng luân chuyển dữ liệu khi Serialization. Khi giải tuần tự hóa (Deserialization), thuộc tính `pass` được khôi phục về giá trị mặc định của kiểu String là `null`."
    },
    {
      "id": "oop-trick2-041",
      "examSet": 2,
      "sectionId": "c7-sec",
      "subsectionId": "try-with-resources-close-order",
      "question": "Cho đoạn mã nguồn sau, thứ tự đóng tài nguyên (Close) diễn ra như thế nào?\n\n```java\nclass Res implements AutoCloseable {\n    String name;\n    Res(String n) { name = n; }\n    public void close() { System.out.print(name); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        try (Res r1 = new Res(\"1\"); Res r2 = new Res(\"2\")) {\n            // Do work\n        }\n    }\n}\n```",
      "options": [
        "In ra kết quả đóng: 21",
        "In ra kết quả đóng: 12",
        "Báo lỗi biên dịch code",
        "Không in ra chữ nào hết"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ tài nguyên nào mở trước (`r1`) sẽ được đóng trước.",
        "trickWord": "Thứ tự đóng ngược (Reverse Order) trong Try-with-resources",
        "citation": "Giáo trình OOP C7: Cơ chế Try-with-resources trong Java 7+",
        "tip": "Try-with-resources: Tự động đóng tài nguyên theo THỨ TỰ NGƯỢC LẠI với lúc khai báo (r2 trước, r1 sau)!"
      },
      "explanation": "Trong tính năng Try-with-resources (từ Java 7), các tài nguyên mở trong ngoặc đơn `try (...)` sẽ tự động gọi `.close()` khi kết thúc khối try theo thứ tự NGƯỢC LẠI với lúc chúng được khai báo. `r2` đóng trước (in \"2\"), `r1` đóng sau (in \"1\"). Kết quả in \"21\"."
    },
    {
      "id": "oop-trick2-042",
      "examSet": 2,
      "sectionId": "c7-sec",
      "subsectionId": "byte-stream-vs-character-stream",
      "question": "Cặp lớp nào dưới đây đại diện cho luồng ký tự (Character Stream) trong `java.io`?",
      "options": [
        "FileReader & FileWriter",
        "FileInputStream & FileOutputStream",
        "BufferedInputStream & DataInputStream",
        "ObjectInputStream & ObjectOutputStream"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh hay nhầm lẫn giữa Stream byte (InputStream/OutputStream) và Stream ký tự (Reader/Writer).",
        "trickWord": "Phân biệt Byte Stream (8-bit) và Character Stream (16-bit Unicode)",
        "citation": "Giáo trình OOP C7: Tổng quan Gói java.io",
        "tip": "Đuôi Stream = Byte stream (8-bit). Đuôi Reader/Writer = Character stream (16-bit Unicode)!"
      },
      "explanation": "Trong `java.io`, các lớp có đuôi `Reader` và `Writer` (như `FileReader`, `FileWriter`) dùng cho luồng ký tự 16-bit Unicode. Các lớp có đuôi `InputStream` và `OutputStream` dùng cho luồng byte 8-bit."
    },

    /* ============================================================
       CHƯƠNG 8: MÔ HÌNH LẬP TRÌNH - UML (CÂU 043 - 049)
       ============================================================ */
    {
      "id": "oop-trick2-043",
      "examSet": 2,
      "sectionId": "c8-sec",
      "subsectionId": "is-a-vs-has-a-relationship",
      "question": "Mối quan hệ 'Xe hơi LÀ MỘT Phương tiện giao thông' trong lập trình Hướng đối tượng thể hiện mối quan hệ nào?",
      "options": [
        "Mối quan hệ IS-A (Kế thừa)",
        "Mối quan hệ HAS-A (Chứa)",
        "Mối quan hệ Phụ thuộc",
        "Mối quan hệ Đa hình"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh hay nhầm giữa quan hệ bao bọc (Has-a) và kế thừa (Is-a).",
        "trickWord": "Mối quan hệ IS-A (Inheritance) vs HAS-A (Association)",
        "citation": "Giáo trình OOP C8: Các mối quan hệ trong Sơ đồ lớp UML",
        "tip": "LÀ MỘT (Is-a) = Kế thừa (extends/implements). CÓ MỘT (Has-a) = Thuộc tính/Bao hàm!"
      },
      "explanation": "Mối quan hệ 'Is-a' (Là một) thể hiện mối quan hệ Kế thừa (Inheritance). Xe hơi 'là một' loại Phương tiện giao thông (`class Car extends Vehicle`)."
    },
    {
      "id": "oop-trick2-044",
      "examSet": 2,
      "sectionId": "c8-sec",
      "subsectionId": "composition-vs-aggregation-lifecycle",
      "question": "Điểm khác biệt lớn nhất giữa Thấu hợp (Composition) và Tập hợp (Aggregation) trong UML là gì?",
      "options": [
        "Composition ràng buộc vòng đời",
        "Aggregation là mối quan hệ IS-A",
        "Composition dùng hình thoi rỗng",
        "Aggregation cấm có đối tượng con"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh không phân biệt được mức độ gắn kết vòng đời giữa 2 dạng kết hợp này.",
        "trickWord": "Vòng đời đối tượng phụ thuộc (Composition vs Aggregation)",
        "citation": "Giáo trình OOP C8: Chi tiết Quan hệ Composition và Aggregation",
        "tip": "Composition (Thấu hợp - Hình thoi đặc): Chết cùng chết (Vòng đời phụ thuộc). Aggregation (Hình thoi rỗng): Sống độc lập!"
      },
      "explanation": "Trong Composition (Thấu hợp - hình thoi đặc), các thành phần con bị ràng buộc chặt chẽ vào vòng đời của đối tượng cha; khi đối tượng cha bị hủy, các thành phần con cũng bị hủy theo. Còn Aggregation (Tập hợp - hình thoi rỗng) thì đối tượng con có thể tồn tại độc lập."
    },
    {
      "id": "oop-trick2-045",
      "examSet": 2,
      "sectionId": "c8-sec",
      "subsectionId": "uml-access-modifier-symbols",
      "question": "Trong biểu diễn Sơ đồ lớp UML, ký hiệu hình `#` trước tên phương thức biểu thị quyền truy cập nào?",
      "options": [
        "Quyền truy cập Protected",
        "Quyền truy cập Private",
        "Quyền truy cập Public",
        "Quyền truy cập Default"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nhầm lẫn giữa ký hiệu `-` (private), `+` (public), `#` (protected), `~` (default).",
        "trickWord": "Ký hiệu Access Modifier trong chuẩn UML",
        "citation": "Giáo trình OOP C8: Ký hiệu UML Class Diagram",
        "tip": "+ là Public, - là Private, # là Protected, ~ là Package/Default!"
      },
      "explanation": "Theo chuẩn UML: Dấu `+` biểu thị `public`, dấu `-` biểu thị `private`, dấu `#` biểu thị `protected`, và dấu `~` biểu thị `package/default`."
    },
    {
      "id": "oop-trick2-046",
      "examSet": 2,
      "sectionId": "c8-sec",
      "subsectionId": "uml-interface-realization-arrow",
      "question": "Trong sơ đồ lớp UML, đường nét đứt có đầu mũi tên hình tam giác rỗng `---─►` biểu thị mối quan hệ nào?",
      "options": [
        "Hiện thực hóa (Realization)",
        "Kế thừa lớp (Generalization)",
        "Phụ thuộc (Dependency)",
        "Tập hợp (Aggregation)"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nhầm giữa đường nét liền (Generalization / Kế thừa lớp) và nét đứt (Realization / Implements Interface).",
        "trickWord": "Ký hiệu Mũi tên Kế thừa vs Cài đặt Interface trong UML",
        "citation": "Giáo trình OOP C8: Mũi tên mối quan hệ trong UML",
        "tip": "Nét liền tam giác rỗng = Extends class (Generalization). Nét đứt tam giác rỗng = Implements interface (Realization)!"
      },
      "explanation": "Đường nét đứt kèm mũi tên tam giác rỗng biểu thị mối quan hệ Hiện thực hóa (Realization / `implements` Interface). Đường nét liền kèm tam giác rỗng mới là Generalization (`extends` Class)."
    },
    {
      "id": "oop-trick2-047",
      "examSet": 2,
      "sectionId": "c8-sec",
      "subsectionId": "uml-abstract-class-font-style",
      "question": "Trong sơ đồ lớp UML, tên của một Lớp trừu tượng (Abstract Class) được thể hiện bằng kiểu chữ nào?",
      "options": [
        "Kiểu chữ In nghiêng (Italic)",
        "Kiểu chữ Gạch chân (Underline)",
        "Kiểu chữ In đậm (Bold)",
        "Kiểu chữ Nối gạch ngang"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nhầm giữa chữ in nghiêng (Abstract) và chữ gạch chân (Static member).",
        "trickWord": "Quy chuẩn trình bày Lớp trừu tượng trong UML",
        "citation": "Giáo trình OOP C8: Quy chuẩn hiển thị UML",
        "tip": "Chữ in nghiêng (Italic) = Abstract class / method. Chữ gạch chân (Underline) = Static member!"
      },
      "explanation": "Trong sơ đồ lớp UML chuẩn, tên của Abstract Class và các phương thức `abstract` bắt buộc phải được in nghiêng (Italic). Thành viên `static` thì được trình bày bằng kiểu gạch chân (Underline)."
    },
    {
      "id": "oop-trick2-048",
      "examSet": 2,
      "sectionId": "c8-sec",
      "subsectionId": "dependency-relationship-uml",
      "question": "Mối quan hệ Phụ thuộc (Dependency) giữa hai lớp trong UML (khi một lớp sử dụng lớp kia làm tham số cục bộ) được vẽ bằng ký hiệu nào?",
      "options": [
        "Đường nét đứt với mũi tên mở `─ ─ ─ ➢`",
        "Đường nét liền với hình thoi đặc `──◆`",
        "Đường nét liền với hình thoi rỗng `──◇`",
        "Đường nét liền với mũi tên mở `───➢`"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nhầm lẫn ký hiệu Phụ thuộc (Dependency) với Hiệp hội (Association) hay Thấu hợp (Composition).",
        "trickWord": "Ký hiệu quan hệ Phụ thuộc (Dependency Arrow) trong UML",
        "citation": "Giáo trình OOP C8: Mối quan hệ Phụ thuộc Dependency",
        "tip": "Dependency (Dùng tạm thời trong hàm) = Mũi tên nét đứt đơn! Association (Khai báo biến thuộc tính) = Mũi tên nét liền!"
      },
      "explanation": "Mối quan hệ Phụ thuộc (Dependency) thể hiện sự liên kết yếu nhất (một lớp dùng lớp kia làm tham số hàm ngắn hạn), trong UML được biểu diễn bằng đường nét đứt có mũi tên đơn (mở) chỉ về lớp bị phụ thuộc."
    },
    {
      "id": "oop-trick2-049",
      "examSet": 2,
      "sectionId": "c8-sec",
      "subsectionId": "multiplicity-zero-to-many",
      "question": "Ký hiệu bội số `0..*` cạnh đầu đường nối trong sơ đồ lớp UML có ý nghĩa là gì?",
      "options": [
        "Từ 0 đến nhiều đối tượng",
        "Bắt buộc có đúng 0 đối tượng",
        "Từ 1 đến nhiều đối tượng",
        "Bắt buộc đúng 1 đối tượng"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nhầm giữa `0..*` (có thể không có hoặc nhiều) với `1..*` (ít nhất 1).",
        "trickWord": "Bội số (Multiplicity) trong Sơ đồ lớp UML",
        "citation": "Giáo trình OOP C8: Ký hiệu Bội số quan hệ",
        "tip": "0..* = Tùy chọn (từ 0 đến nhiều). 1..* = Bắt buộc có ít nhất 1!"
      },
      "explanation": "Trong UML, bội số `0..*` (hoặc viết tắt là `*`) nghĩa là tùy chọn có từ 0 đến nhiều đối tượng tham gia vào mối quan hệ này."
    },

    /* ============================================================
       COMBO ĐA CHƯƠNG (CÂU 050 SUPER TRICK)
       ============================================================ */
    {
      "id": "oop-trick2-050",
      "examSet": 2,
      "sectionId": "combo-sec",
      "subsectionId": "super-combo-inheritance-polymorphism-exception",
      "question": "Cho đoạn mã nguồn tổng hợp nâng cao sau, kết quả in ra màn hình là gì?\n\n```java\nclass Base {\n    Base() {\n        test();\n    }\n    void test() {\n        System.out.print(\"Base \");\n    }\n}\nclass Derived extends Base {\n    int x = 99;\n    void test() {\n        System.out.print(\"Derived \" + x + \" \");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Derived();\n    }\n}\n```",
      "options": [
        "In ra: Derived 0 ",
        "In ra: Derived 99 ",
        "In ra kết quả: Base ",
        "Ném lỗi NullPointer"
      ],
      "answer": 0,
      "difficulty": "hard",
      "isOutside": false,
      "trickDetails": {
        "whyTrapped": "Học sinh nghĩ `x` đã được khởi tạo bằng 99 trước khi phương thức `test()` bị gọi trong constructor của lớp cha.",
        "trickWord": "Bẫy Siêu Đa hình: Gọi phương thức bị Ghi đè bên trong Constructor lớp cha!",
        "citation": "Giáo trình OOP C3 + C5: Thứ tự khởi tạo và Đa hình nâng cao",
        "tip": "Constructor cha gọi test() -> Đa hình chạy test() của Con! Lúc này thuộc tính con x CHƯA ĐƯỢC KHỞI TẠO (vẫn bằng 0)!"
      },
      "explanation": "1) Khi `new Derived()`, constructor `Base()` chạy trước. 2) In `Base()`, nó gọi `test()`. 3) Do tính ĐA HÌNH (Dynamic binding), phương thức `test()` của `Derived` được gọi! 4) Tuy nhiên, tại thời điểm này, thuộc tính `int x = 99` của `Derived` CHƯA ĐƯỢC THỰC THI KHỞI TẠO, nên `x` vẫn mang giá trị mặc định là `0`. 5) In ra \"Derived 0 \"."
    }
  ],
  outside: [],
  tricks: []
};
