/* ============================================================
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ ÔN TẬP OOP (29 Câu)
   ============================================================ */

export const questionsOopDeOnTap = {
  chapterId: "de-on-tap",
  inside: [
    {
      "id": "oop-on-tap-001",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Nêu hậu quả khi một lớp triển khai (implement) một interface nhưng không định nghĩa toàn bộ phương thức được khai báo trong interface đó?",
      "options": [
        "Lớp đó bắt buộc phải khai báo là final.",
        "Lớp đó bắt buộc phải khai báo là abstract.",
        "Chương trình tự động bỏ qua phương thức đó.",
        "Xảy ra lỗi khi chạy (Runtime Exception)."
      ],
      "answer": 1,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Trong Java, khi một lớp triển khai (implement) một interface mà không định nghĩa (override) toàn bộ các phương thức trừu tượng của interface đó, lớp đó bắt buộc phải được khai báo với từ khóa abstract, nếu không trình biên dịch sẽ báo lỗi."
    },
    {
      "id": "oop-on-tap-002",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Trong cơ chế xử lý ngoại lệ (Exception Handling), khối lệnh nào sẽ luôn luôn được thực thi dù ngoại lệ có phát sinh hay không?",
      "options": [
        "try",
        "catch",
        "finally",
        "throw"
      ],
      "answer": 2,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Khối finally nằm sau khối try hoặc catch sẽ luôn luôn được trình thực thi Java gọi chạy bất kể có ngoại lệ xảy ra hay không (ngoại trừ trường hợp dừng JVM bằng System.exit())."
    },
    {
      "id": "oop-on-tap-003",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Cho cấu trúc các lớp như sau:\n\n```java\nclass A {\n    private int x;\n    public A(int x) {\n        this.x = x;\n    }\n    \n    class B {\n        public void print() {\n            System.out.println(x);\n        }\n    }\n}\n```\nCú pháp nào dưới đây là đúng để khởi tạo một đối tượng thuộc lớp nội (inner class) B?",
      "options": [
        "A.B b = new A(10).new B();",
        "B b = new A(10).new B();",
        "A.B b = new A.B();",
        "B b = new A.B();"
      ],
      "answer": 0,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Vì B là một inner class phi static của A, để tạo đối tượng của B bắt buộc phải thông qua một instance của A với cú pháp: A.B b = new A(10).new B();."
    },
    {
      "id": "oop-on-tap-004",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Xem đoạn mã nguồn dưới đây:\n\n```java\nclass A {\n    protected int x = 1, y = 2;\n    public A() {}\n    public void print() {\n        System.out.print(x + \", \" + y);\n    }\n}\n\nclass B extends A {\n    public static void main(String[] args) {\n        B b = new B();\n        b.print();\n    }\n}\n```\nHãy cho biết kết quả biên dịch và thực thi đoạn mã trên:",
      "options": [
        "Lỗi biên dịch xảy ra",
        "Lỗi runtime xảy ra",
        "In ra màn hình: 1, 2",
        "In ra màn hình: 0, 0"
      ],
      "answer": 2,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Khi new B() được tạo, nó tự động gọi constructor mặc định của lớp cha A để khởi tạo x = 1 và y = 2. Do đó b.print() sẽ in ra 1, 2."
    },
    {
      "id": "oop-on-tap-005",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Cho đoạn mã nguồn sau:\n\n```java\nclass Main {\n    public static void main(String[] args) {\n        int x = 2, y = 5;\n        if ((1)) {\n            System.out.println(\"Done.\");\n        }\n    }\n}\n```\nDòng lệnh nào sau đây khi điền vào vị trí (1) sẽ gây lỗi biên dịch?",
      "options": [
        "x % 2 == 0",
        "x + y < 5",
        "x % 2 == 0 && x == y",
        "x + 3 || y"
      ],
      "answer": 3,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Trong Java, toán tử logic || chỉ làm việc với biểu thức có kiểu dữ liệu boolean. Biểu thức x + 3 (kết quả int 5) và y (int 5) không phải kiểu boolean nên gây lỗi biên dịch."
    },
    {
      "id": "oop-on-tap-006",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Phát biểu nào sau đây SAI khi nói về phương thức thuộc về lớp (class method / static method)?",
      "options": [
        "Có thể truy cập trực tiếp vào thuộc tính của đối tượng.",
        "Toàn bộ phương thức lớp Math là phương thức thuộc về lớp.",
        "Phương thức thuộc về lớp được khai báo bởi từ khóa static.",
        "Phương thức thuộc về lớp được gọi trực tiếp thông qua tên lớp."
      ],
      "answer": 0,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Phương thức static (thuộc về lớp) KHÔNG THỂ truy cập trực tiếp tới các thuộc tính hoặc phương thức thể hiện (instance variable/method) của đối tượng vì ngữ cảnh this không tồn tại trong static."
    },
    {
      "id": "oop-on-tap-007",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Cho đoạn mã nguồn:\n\n```java\nclass Main {\n    public static int func(Byte a, Byte b) {\n        return a.compareTo(b);\n    }\n    \n    public static void main(String[] args) {\n        byte var1 = 5;\n        byte var2 = 7;\n        int result = func(var1, var2);\n        System.out.println(result);\n    }\n}\n```\nCơ chế nào dưới đây được sử dụng trong đoạn mã trên?",
      "options": [
        "Autoboxing",
        "Overloading",
        "Overriding",
        "Implicit"
      ],
      "answer": 0,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Biến var1 và var2 mang kiểu nguyên thủy byte, khi truyền vào phương thức func(Byte a, Byte b) Java tự động chuyển đổi từ kiểu nguyên thủy sang đối tượng Wrapper Class Byte. Đây là cơ chế Autoboxing."
    },
    {
      "id": "oop-on-tap-008",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Xác định kết quả khi biên dịch và thực thi đoạn mã sau:\n\n```java\ninterface A {\n    int NUM = 7;\n    int calculate(int a);\n}\n\nclass B implements A {\n    public int calculate(int a) {\n        NUM = 3;\n        return NUM + a;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        A a = new B();\n        System.out.println(a.calculate(5));\n    }\n}\n```",
      "options": [
        "Giao diện in ra kết quả 8",
        "Giao diện in ra kết quả 12",
        "Xảy ra lỗi ngoại lệ runtime",
        "Xảy ra lỗi khi biên dịch"
      ],
      "answer": 3,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "Các thuộc tính khai báo trong interface ngầm định là public static final. Trong lớp B, phương thức calculate cố tình gán lại hằng số NUM = 3 dẫn đến lỗi biên dịch (cannot assign a value to final variable)."
    },
    {
      "id": "oop-on-tap-009",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Cho đoạn mã nguồn sau:\n\n```java\nabstract class A {\n    private int m = 5;\n    protected int n = 7;\n    \n    public double func(double a) {\n        return a + m - n;\n    }\n    \n    public abstract int func(int a);\n}\n\nclass B extends A {\n    public int func(int a) {\n        n = 3;\n        return a + (int)func(2.5);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        A a = new B();\n        System.out.println(a.func(5));\n    }\n}\n```\nHãy cho biết kết quả khi biên dịch và thực thi đoạn mã trên:",
      "options": [
        "Lỗi biên dịch",
        "Kết quả in 9",
        "Kết quả in 5",
        "Kết quả -5.5"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "1. a.func(5) gọi B.func(5).\n2. Lớp B gán n = 3 và gọi func(2.5) (khớp với phương thức func(double) ở lớp A).\n3. Lớp A tính 2.5 + 5 - 3 = 4.5.\n4. Ép kiểu (int)4.5 = 4.\n5. Trả về 5 + 4 = 9."
    },
    {
      "id": "oop-on-tap-010",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Hãy cho biết kết quả in ra màn hình sau khi biên dịch và thực thi đoạn mã sau là gì?\n\n```java\nclass IllegalNumberInputException extends Exception {\n    public IllegalNumberInputException(String msg) {\n        super(msg);\n    }\n}\n\nclass A {\n    public static int func(int a, int b) throws IllegalNumberInputException {\n        System.out.println(\"Checking\");\n        if (a > b || b > 1000) {\n            throw new IllegalNumberInputException(\"Failed\");\n        }\n        System.out.println(\"Successful\");\n        return a + b;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        try {\n            int result = A.func(3, 1001);\n            System.out.println(result);\n        } catch (IllegalNumberInputException e) {\n            System.out.println(e.getMessage());\n        } finally {\n            System.out.println(\"Done\");\n        }\n    }\n}\n```",
      "options": [
        "In Checking, Successful, 1004 và Done",
        "Chương trình in Checking, 1004 và Done",
        "Chương trình in Checking, Failed và Done",
        "Chương trình báo lỗi biên dịch mã"
      ],
      "answer": 2,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "1. A.func(3, 1001) in Checking.\n2. Điều kiện 1001 > 1000 đúng -> ném ra ngoại lệ IllegalNumberInputException(\"Failed\").\n3. Khối catch bắt ngoại lệ và in e.getMessage() -> Failed.\n4. Khối finally luôn thực thi -> in Done."
    },
    {
      "id": "oop-on-tap-011",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Hãy cho biết kết quả biên dịch và thực thi đoạn code sau là gì?\n\n```java\nclass A {\n    public A() {\n        System.out.print(\"A\");\n    }\n}\n\nclass B extends A {\n    public B() {\n        System.out.print(\"B\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        new B();\n    }\n}\n```",
      "options": [
        "Màn hình in ra chữ B",
        "Màn hình in ra chữ BA",
        "Màn hình in ra chữ AB",
        "Màn hình báo lỗi biên dịch"
      ],
      "answer": 2,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Khi khởi tạo đối tượng của lớp con B (new B()), constructor của B ngầm định gọi super() trước tiên để khởi tạo lớp cha A (in ra 'A'), sau đó mới thực hiện thân hàm của B (in ra 'B'). Kết quả thu được là 'AB'."
    },
    {
      "id": "oop-on-tap-012",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Hãy cho biết kết quả biên dịch và thực thi đoạn code sau là gì?\n\n```java\ninterface Character {\n    void attack();\n    void defend();\n}\n\nclass Warrior implements Character {\n    void attack() {\n        System.out.println(\"Attack\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Character a = new Warrior();\n        a.attack();\n    }\n}\n```",
      "options": [
        "Phát sinh lỗi runtime khi chạy",
        "Phát sinh lỗi biên dịch mã nguồn",
        "Màn hình hiển thị kết quả Attack",
        "Không biên dịch lỗi và không in gì"
      ],
      "answer": 1,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Đoạn code bị lỗi biên dịch vì 2 lý do: 1) Lớp Warrior chưa định nghĩa phương thức defend() của interface Character. 2) Phương thức attack() trong interface mặc định là public, nhưng trong Warrior lại để tầm truy cập package-private (bị giảm tầm truy cập)."
    },
    {
      "id": "oop-on-tap-013",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Dựa vào lớp Book và mảng bookList đã khai báo, câu lệnh nào sau đây là gây lỗi biên dịch khi gán một đối tượng vào phần tử của mảng?\n\n```java\nclass Book {\n    private int id;\n    private String name;\n    \n    public Book(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book[] bookList = new Book[12];\n    }\n}\n```",
      "options": [
        "bookList[1] = new Book(2, \"Python\");",
        "bookList[2] = null; (gán giá trị rỗng)",
        "bookList[3] = new Book(); (không tham số)",
        "Book b = new Book(4, \"C++\"); bookList[4] = b;"
      ],
      "answer": 2,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Lớp Book đã định nghĩa một constructor có tham số Book(int id, String name), do đó Java sẽ không tự động tạo constructor mặc định không tham số Book(). Việc gọi new Book() sẽ báo lỗi biên dịch."
    },
    {
      "id": "oop-on-tap-014",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Sự khác biệt chính giữa ArrayList và Vector trong Java là gì?",
      "options": [
        "ArrayList lưu mảng, Vector lưu danh sách liên kết.",
        "Vector được đồng bộ hóa, ArrayList thì không đồng bộ.",
        "ArrayList chỉ dùng lưu trữ kiểu dữ liệu nguyên thủy.",
        "Vector không thuộc hệ thống Java Collections Framework."
      ],
      "answer": 1,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Vector là một legacy class trong Java có tính chất đồng bộ hóa (synchronized), an toàn khi làm việc đa luồng (thread-safe). ArrayList không được đồng bộ hóa nên có hiệu năng nhanh hơn trong ứng dụng đơn luồng."
    },
    {
      "id": "oop-on-tap-015",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Trong xử lý ngoại lệ (Exception), lớp gốc (superclass) cao nhất xử lý các lỗi nghiêm trọng mà chương trình thường không thể khắc phục được là gì?",
      "options": [
        "Lớp Exception",
        "Lớp RuntimeException",
        "Lớp Error hệ thống",
        "Lớp Throwable gốc"
      ],
      "answer": 2,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Lớp Error đại diện cho các lỗi hệ thống nghiêm trọng của máy ảo Java (như OutOfMemoryError, StackOverflowError) mà chương trình thông thường không nên cố gắng catch hoặc khắc phục."
    },
    {
      "id": "oop-on-tap-016",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Checked Exception khác với Unchecked Exception ở điểm nào?",
      "options": [
        "Compiler bắt buộc try-catch/throws với Checked Exception.",
        "Checked Exception kế thừa trực tiếp từ RuntimeException.",
        "Checked Exception chỉ xuất hiện ở trong môi trường Web.",
        "Unchecked Exception bắt buộc khai báo try-catch ở code."
      ],
      "answer": 0,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Checked Exception được trình biên dịch (Compiler) kiểm tra ngay tại thời điểm biên dịch. Lập trình viên bắt buộc phải xử lý bằng khối try-catch hoặc khai báo throws ở chữ ký phương thức."
    },
    {
      "id": "oop-on-tap-017",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Từ khóa nào được dùng ở CUỐI tên khai báo phương thức để cảnh báo phương thức này có thể phát sinh ngoại lệ cho người gọi nó xử lý?",
      "options": [
        "Từ khóa throw",
        "Từ khóa try xử lý",
        "Từ khóa throws báo",
        "Từ khóa catch bắt"
      ],
      "answer": 2,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Từ khóa throws đặt ở phần khai báo (signature) của phương thức để chỉ định danh sách các ngoại lệ mà phương thức có thể ném ra (ví dụ: public void readFile() throws IOException)."
    },
    {
      "id": "oop-on-tap-018",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Trong gói java.io, nếu bạn muốn đọc nội dung của một file văn bản theo từng ký tự tiếng Việt (UTF-8) thay vì từng byte, bạn nên dùng lớp nào?",
      "options": [
        "Lớp FileInputStream",
        "Lớp đọc FileReader",
        "Lớp DataInputStream",
        "Lớp BufferedOutputStream"
      ],
      "answer": 1,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "FileReader (hoặc InputStreamReader) thuộc nhóm Character Stream, xử lý đọc dữ liệu văn bản theo từng ký tự (character-based) với bảng mã UTF-8/Unicode."
    },
    {
      "id": "oop-on-tap-019",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Serialization trong Java có ý nghĩa là gì?",
      "options": [
        "Mã hóa thông tin mật khẩu người dùng trước khi lưu file.",
        "Lọc các ký tự đặc biệt khi xử lý đọc một file văn bản.",
        "Chuyển đối tượng thành luồng byte để lưu trữ hoặc truyền đi.",
        "Tạo một bản sao hoàn toàn độc lập cho một đối tượng trong bộ nhớ."
      ],
      "answer": 2,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Serialization (Tuần tự hóa) là quá trình chuyển đổi trạng thái của một đối tượng Java (Object) thành một chuỗi/luồng byte (Byte Stream) để lưu xuống file hoặc truyền qua mạng."
    },
    {
      "id": "oop-on-tap-020",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Lớp nào thuộc java.io cung cấp các phương thức thao tác trực tiếp với hệ thống tập tin như kiểm tra tồn tại, xóa, tạo thư mục mới?",
      "options": [
        "Lớp Directory",
        "Lớp File thao tác",
        "Lớp FileManager",
        "Lớp Path đường dẫn"
      ],
      "answer": 1,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Lớp `java.io.File` trong Java cung cấp các phương thức như exists(), delete(), mkdir(), createNewFile() để thao tác với tập tin và thư mục trên đĩa."
    },
    {
      "id": "oop-on-tap-021",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Trong Class diagram (Sơ đồ lớp UML), mối quan hệ 'Composition' (Cấu thành) được biểu thị bằng ký hiệu nào?",
      "options": [
        "Đường kẻ với mũi tên hình tam giác rỗng.",
        "Đường kẻ với hình thoi rỗng ở phía đầu.",
        "Đường kẻ với hình thoi đặc màu đen ở đầu.",
        "Đường đứt nét với hình mũi tên đơn lẻ."
      ],
      "answer": 2,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Trong sơ đồ lớp UML, mối quan hệ Composition (Cấu thành - quan hệ sở hữu chặt chẽ) được biểu thị bằng đường nối có hình thoi tô đặc màu đen ở đầu phía lớp sở hữu."
    },
    {
      "id": "oop-on-tap-022",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Trong 4 loại Nested Class, đặc điểm nào sau đây KHÔNG đúng đối với Lớp lồng tĩnh (Static Nested Class)?",
      "options": [
        "Được khai báo bằng cách sử dụng từ khóa static.",
        "Truy cập trực tiếp thuộc tính non-static lớp ngoài.",
        "Khởi tạo không cần tạo đối tượng của lớp ngoài.",
        "Hoạt động như lớp thường nhưng được ẩn bên trong."
      ],
      "answer": 1,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Static Nested Class KHÔNG THỂ truy cập trực tiếp các thuộc tính hoặc phương thức non-static (instance) của Outer Class vì nó không nắm giữ tham chiếu tới instance của lớp ngoài."
    },
    {
      "id": "oop-on-tap-023",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Anonymous Class (Lớp vô danh) thường được ứng dụng phổ biến nhất trong trường hợp nào?",
      "options": [
        "Khi tạo một cấu trúc dữ liệu lớn trong bộ nhớ máy.",
        "Khi triển khai nhanh Interface hoặc override lớp cha.",
        "Khi cần tạo một biến toàn cục chia sẻ cho mọi lớp.",
        "Khi muốn chặn một lớp không cho phép khác kế thừa."
      ],
      "answer": 1,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Anonymous Class được sử dụng khi cần khởi tạo nhanh một đối tượng để thực thi một Interface hoặc override một class cha cho mục đích sử dụng 1 lần duy nhất mà không cần tạo file class riêng."
    },
    {
      "id": "oop-on-tap-024",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Yêu cầu bắt buộc đầu tiên để cài đặt thành công Design Pattern 'Singleton' là gì?",
      "options": [
        "Khai báo phương thức là public abstract.",
        "Khai báo tất cả biến trong lớp là public.",
        "Phương thức khởi tạo phải khai báo private.",
        "Kế thừa trực tiếp từ lớp java.util.Singleton."
      ],
      "answer": 2,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Để ngăn chặn việc tạo ra các đối tượng mới từ bên ngoài thông qua từ khóa `new`, Singleton Pattern bắt buộc phải khai báo Constructor là `private`."
    },
    {
      "id": "oop-on-tap-025",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Factory Design Pattern thuộc nhóm Design pattern nào trong 3 nhóm cơ bản?",
      "options": [
        "Creational Patterns (Nhóm khởi tạo)",
        "Structural Patterns (Nhóm cấu trúc)",
        "Behavioral Patterns (Nhóm hành vi)",
        "Architectural Patterns (Kiến trúc)"
      ],
      "answer": 0,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Factory Design Pattern nằm trong nhóm Creational Patterns (các mẫu khởi tạo đối tượng) giúp che giấu logic khởi tạo đối tượng phức tạp."
    },
    {
      "id": "oop-on-tap-026",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Tên định danh (identifier) nào sau đây tuân thủ đúng quy định đặt định danh của Java?",
      "options": [
        "Tên định danh int",
        "Tên định danh 2name",
        "Tên định danh $name",
        "Tên định danh @name"
      ],
      "answer": 2,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Quy tắc đặt tên định danh trong Java: 1) Không trùng từ khóa (như int). 2) Không bắt đầu bằng chữ số (như 2name). 3) Không chứa ký tự đặc biệt ngoài `_` và `$`. Vì vậy `$name` là tên hợp lệ."
    },
    {
      "id": "oop-on-tap-027",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Thành phần nào sau đây của lớp không thể kế thừa từ lớp cha sang lớp con?",
      "options": [
        "Thuộc tính dữ liệu (attribute)",
        "Phương thức khởi tạo (constructor)",
        "Phương thức bình thường (method)",
        "Phương thức tĩnh (static method)"
      ],
      "answer": 1,
      "difficulty": "easy",
      "isOutside": false,
      "explanation": "Trong Java, các Constructor (phương thức khởi tạo) KHÔNG được kế thừa từ lớp cha sang lớp con. Lớp con chỉ có thể gọi constructor của lớp cha thông qua từ khóa `super()`."
    },
    {
      "id": "oop-on-tap-028",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Hãy cho biết kết quả biên dịch và thực thi đoạn code sau là gì?\n\n```java\nclass A {\n    protected int x = 1;\n    protected int y = 2;\n    public int sum() {\n        return x + y;\n    }\n}\n\nclass B extends A {\n    public void print() {\n        System.out.print(sum());\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        A b = new B();\n        b.print();\n    }\n}\n```",
      "options": [
        "In ra kết quả 3",
        "Lỗi khi biên dịch",
        "Lỗi khi chạy runtime",
        "In ra màn hình 1 2"
      ],
      "answer": 1,
      "difficulty": "hard",
      "isOutside": false,
      "explanation": "Biến tham chiếu `b` có kiểu khai báo là lớp A (`A b = new B();`). Do phương thức `print()` chỉ được định nghĩa ở lớp con B mà không có ở lớp A, việc gọi `b.print()` sẽ gây lỗi biên dịch (cannot find symbol method print() in class A)."
    },
    {
      "id": "oop-on-tap-029",
      "examSet": 1,
      "sectionId": "de-on-tap-sec",
      "subsectionId": "de-on-tap-sub",
      "question": "Câu lệnh khởi tạo mảng nào sau đây KHÔNG hợp lệ?",
      "options": [
        "int[] arr = new int[4.5];",
        "int[] arr = new int['a'];",
        "int[] arr = {1, 2, 3};",
        "int[] arr = new int[]{1, 2, 3, 4, 5};"
      ],
      "answer": 0,
      "difficulty": "medium",
      "isOutside": false,
      "explanation": "Kích thước mảng trong Java bắt buộc phải là một số nguyên (integer expression). Giá trị `4.5` là kiểu số thực float/double nên không thể dùng làm kích thước mảng."
    }
  ],
  outside: [],
  tricks: []
};
