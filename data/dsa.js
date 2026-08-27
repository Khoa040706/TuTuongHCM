/* ============================================================
   DỮ LIỆU MÔN HỌC: Cấu trúc dữ liệu và giải thuật (DSA)
   BÀI 1: ABSTRACT DATA TYPE (ADT) - PHẦN I, II, III, IV & V
   ============================================================ */

export const dsaData = {
  id: "dsa",
  title: "Cấu trúc dữ liệu và giải thuật",
  subtitle: "Bài 1: Abstract Data Type (ADT)",
  chapters: [
    {
      id: "dsa-b1",
      title: "Bài 1",
      subtitle: "Abstract Data Type (ADT)",
      sections: [
        /* PHẦN I LA MÃ */
        {
          id: "dsa-b1-sec1",
          roman: "I",
          title: "Software Engineering Issues (Motivation) & Abstract Data Type (ADT)",
          subsections: [
            {
              id: "dsa-b1-sub-1-1",
              number: "1.1",
              title: "Program Design Principles (Bốn nguyên lý thiết kế chương trình)",
              parts: [
                {
                  id: "dsa-b1-part-principles",
                  label: "NGUYÊN LÝ THIẾT KẾ",
                  title: "4 Nguyên lý thiết kế phần mềm cốt lõi",
                  content: [
                    {
                      type: "paragraph",
                      text: "Trong phát triển phần mềm quy mô lớn, việc quản lý sự phức tạp của mã nguồn là thách thức hàng đầu. Để xây dựng hệ thống bền vững, dễ bảo trì và mở rộng, các kỹ sư phần mềm phải tuân thủ 4 nguyên lý thiết kế (Program Design Principles) cốt lõi:"
                    },
                    {
                      type: "table",
                      headers: ["Nguyên lý (Principle)", "Định nghĩa & Bản chất cốt lõi"],
                      rows: [
                        [
                          "<b>Abstraction (Trừu tượng hóa)</b>",
                          "Chỉ tập trung vào <b>cái gì (what)</b> nó làm được, không quan tâm <b>làm như thế nào (how)</b>. <br/><i>Ví dụ:</i> Sử dụng <code>Java Interface</code>."
                        ],
                        [
                          "<b>Coupling (Tính kết dính giữa các lớp)</b>",
                          "Hạn chế tối thiểu mối quan hệ phụ thuộc lẫn nhau giữa các class (Liên kết lỏng lẻo - Loose Coupling)."
                        ],
                        [
                          "<b>Cohesion (Tính có kết nội bộ)</b>",
                          "Một class chỉ nên đại diện cho <b>một thực thể (entity)</b> duy nhất. Phải có sự phân nhóm chức năng (functionalities) rõ ràng, logic."
                        ],
                        [
                          "<b>Information Hiding (Che giấu thông tin)</b>",
                          "Chỉ để lộ ra bên ngoài những thông tin cần thiết."
                        ]
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-1-2",
              number: "1.2",
              title: "Information Hiding - Chi tiết & Bức tường (Walls & Mirrors)",
              parts: [
                {
                  id: "dsa-b1-part-infohiding",
                  label: "CHE GIẤU THÔNG TIN",
                  title: "Cơ chế Bức tường (Walls) & Nguyên tắc Need-to-Know",
                  content: [
                    {
                      type: "paragraph",
                      text: "<b>Information Hiding</b> giống như xây <b>\"bức tường\" (walls)</b> quanh mỗi class:"
                    },
                    {
                      type: "list",
                      items: [
                        "Tường quanh class T ngăn các class khác thấy được T hoạt động <b>như thế nào (how)</b>.",
                        "Nếu class Q sử dụng (phụ thuộc) T, và cách T thực hiện công việc thay đổi &rarr; Q <b>không bị ảnh hưởng</b>.",
                        "Giáo trình chính thức của môn học có tên là <b>\"Walls & Mirrors\"</b>."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "success",
                      title: "💡 Lợi ích cốt lõi",
                      text: "Dễ dàng thay thế bằng phiên bản mới, cải tiến hơn cho cách thực hiện một tác vụ, mà không ảnh hưởng đến những nơi khác trong chương trình."
                    },
                    {
                      type: "paragraph",
                      text: "Information Hiding <b>không phải</b> là cô lập hoàn toàn các class:"
                    },
                    {
                      type: "list",
                      items: [
                        "Thông tin được tiết lộ theo nguyên tắc <b>need-to-know</b> (cần mới biết).",
                        "Class Q không biết T làm việc như thế nào, nhưng cần biết <b>cách gọi T (invoke)</b> và <b>T trả về gì (produces)</b>.",
                        "<i>Ví dụ:</i> Các class <code>Math</code>, <code>Scanner</code> &mdash; người thiết kế giấu chi tiết cài đặt (implementation), chỉ cung cấp method header + mô tả đủ để dùng."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "Những gì đưa vào (input) và lấy ra (output) được quy định bởi <b>specification</b> của method: <i>\"Nếu bạn dùng method này theo cách này, đây chính xác là những gì nó sẽ làm cho bạn\"</i> &rarr; <b>pre-condition & post-condition</b>."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-1-3",
              number: "1.3",
              title: "Pre-conditions và Post-conditions (Hợp đồng cho tài liệu)",
              parts: [
                {
                  id: "dsa-b1-part-prepost",
                  label: "HỢP ĐỒNG PHƯƠNG THỨC",
                  title: "Pre-condition & Post-condition trong Documentation",
                  content: [
                    {
                      type: "paragraph",
                      text: "Trong lập trình phần mềm chuyên nghiệp, mối quan hệ giữa người gọi hàm và hàm được thiết lập thông qua hợp đồng Pre-condition và Post-condition:"
                    },
                    {
                      type: "table",
                      headers: ["Thuật ngữ", "Ý nghĩa & Trách nhiệm"],
                      rows: [
                        [
                          "<b>Pre-condition (Điều kiện tiên quyết)</b>",
                          "• Điều kiện phải đúng <b>trước khi</b> method được gọi.<br/>• Thông điệp: <i>\"Đây là những gì tôi mong đợi ở bạn\"</i>.<br/>• <b>Lập trình viên (người gọi method)</b> có trách nhiệm đảm bảo pre-condition được thỏa mãn."
                        ],
                        [
                          "<b>Post-condition (Điều kiện hậu quyết)</b>",
                          "• Điều kiện phải đúng <b>sau khi</b> method hoàn tất.<br/>• Thông điệp: <i>\"Đây là những gì tôi hứa sẽ làm cho bạn\"</i>.<br/>• <b>Tác giả (người cài đặt method)</b> có trách nhiệm đảm bảo post-condition được thực thi."
                        ]
                      ]
                    },
                    {
                      type: "code",
                      language: "java",
                      caption: "Ví dụ về Pre-condition và Post-condition trong Java documentation",
                      code: `// Pre-cond: x >= 0
// Post-cond: Return the square root of x
public static double squareRoot(double x) {
    // Chi tiết cài đặt ẩn bên trong bức tường
    return Math.sqrt(x);
}`
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-1-4",
              number: "1.4",
              title: "Data Abstraction & Abstract Data Type (ADT)",
              parts: [
                {
                  id: "dsa-b1-part-data-abstraction",
                  label: "TRỪU TƯỢNG HÓA DỮ LIỆU",
                  title: "Định nghĩa ADT & So sánh với Data Structure",
                  content: [
                    {
                      type: "list",
                      items: [
                        "Information Hiding <b>cũng áp dụng được cho dữ liệu (data)</b>.",
                        "<b>Data abstraction:</b> suy nghĩ về việc bạn có thể làm gì với một tập hợp dữ liệu, <b>độc lập</b> với cách làm nó như thế nào.",
                        "<b>Data structure:</b> một cấu trúc được định nghĩa trong ngôn ngữ lập trình để lưu trữ một tập hợp dữ liệu.",
                        "<b>Abstract Data Type (ADT):</b> tập hợp dữ liệu (data) <b>cùng với</b> một đặc tả (specification) về tập các phép toán/phương thức (operations/methods) trên dữ liệu đó."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "📌 Đặc điểm của ADT Operations",
                      text: "• Các phép toán điển hình: add, remove, query (nói chung là quản lý dữ liệu).<br/>• Specification chỉ ra ADT operations <b>làm gì (what)</b>, chứ không nói <b>làm như thế nào (how)</b> để cài đặt (implement)."
                    },
                    {
                      type: "component",
                      componentName: "InterfaceDataAbstractionAdt"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-summary-1",
              number: "📌",
              title: "📌 Cần nhớ Phần I",
              parts: [
                {
                  id: "dsa-b1-part-summary-1",
                  label: "TỔNG KẾT PHẦN I",
                  title: "Những điểm cốt lõi bắt buộc ghi nhớ",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 TÓM TẮT TRỌNG TÂM PHẦN I",
                      text: "1. <b>4 nguyên lý thiết kế:</b> Abstraction, Coupling, Cohesion, Information Hiding.<br/>2. <b>Information Hiding = nguyên tắc need-to-know</b>, không phải cô lập hoàn toàn.<br/>3. <b>Pre-condition</b> = điều kiện trước khi gọi (trách nhiệm người gọi); <b>Post-condition</b> = điều kiện sau khi hoàn tất (lời hứa của method).<br/>4. <b>Data structure ≠ ADT:</b> Data structure là cách lưu trữ dữ liệu; ADT = dữ liệu + specification của operations.<br/>5. <b>Specification chỉ nói what, không nói how.</b>"
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* PHẦN II LA MÃ */
        {
          id: "dsa-b1-sec2",
          roman: "II",
          title: "Abstract Data Type (ADT) - Chuyên sâu & Các Ví dụ Thực tế",
          subsections: [
            {
              id: "dsa-b1-sub-2-1",
              number: "2.1",
              title: "Data Structure & Ví dụ Lưu trữ Nhân viên (Employee)",
              parts: [
                {
                  id: "dsa-b1-part-ds-employee",
                  label: "DATA STRUCTURE",
                  title: "Khái niệm Data Structure & So sánh 2 cách lưu trữ Nhân viên",
                  content: [
                    {
                      type: "paragraph",
                      text: "<b>Data structure:</b> Cấu trúc định nghĩa trong ngôn ngữ lập trình để lưu một tập hợp dữ liệu. Mảng (Array) &mdash; có sẵn (built-in) trong Java &mdash; chính là một data structure."
                    },
                    {
                      type: "paragraph",
                      text: "<b>Ví dụ:</b> Cần lưu tên và lương của một tập nhân viên (employees):"
                    },
                    {
                      type: "table",
                      headers: ["Cách 1: Dùng 2 mảng song song (Hạn chế)", "Cách 2: Dùng Class Employee (Lựa chọn tốt hơn - Better choice)"],
                      rows: [
                        [
                          `<b>Mã nguồn Cách 1:</b>
<pre><code class="language-java">static final int MAX_NUMBER = 500;
String[] names = new String[MAX_NUMBER];
double[] salaries = new double[MAX_NUMBER];
// employee names[i] has salary salaries[i]</code></pre>
<i>Hạn chế:</i> Dễ lệch chỉ số i khi sắp xếp hoặc xóa dữ liệu.`,
                          `<b>Mã nguồn Cách 2:</b>
<pre><code class="language-java">class Employee {
    static final int MAX_NUMBER = 500;
    private String names;
    private double salaries;
}
Employee[] workers = new Employee[Employee.MAX_NUMBER];</code></pre>
<i>Ưu điểm:</i> Đóng gói thông tin nhân viên vào 1 đối tượng duy nhất.`
                        ]
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-2-2",
              number: "2.2",
              title: "Abstract Data Type (ADT) – Khái niệm Cốt lõi",
              parts: [
                {
                  id: "dsa-b1-part-adt-concept",
                  label: "KHÁI NIỆM ADT",
                  title: "Công thức ADT = Data + Specification of Operations",
                  content: [
                    {
                      type: "callout",
                      variant: "primary",
                      title: "🔑 Định nghĩa gộp cốt lõi",
                      text: "<b>ADT = Collection of data + set of operations on the data</b>"
                    },
                    {
                      type: "list",
                      items: [
                        "<b>ADT</b> là một tập hợp dữ liệu (data) <b>cùng với</b> một đặc tả (specification) của tập các phép toán trên dữ liệu đó.",
                        "Specification chỉ ra ADT operations <b>làm gì (what)</b>, không phải <b>cách cài đặt (how)</b>.",
                        "<b>Data structures</b> là một phần của việc <b>implementation</b> của ADT.",
                        "Khi chương trình cần các phép toán dữ liệu mà ngôn ngữ không hỗ trợ trực tiếp &rarr; cần tự tạo ADT riêng.",
                        "Nên <b>thiết kế ADT trước</b> (đặc tả cẩn thận các operations) rồi mới implement."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-2-3",
              number: "2.3",
              title: "Ví dụ trực quan – Máy lọc nước (Water Dispenser) như một ADT",
              parts: [
                {
                  id: "dsa-b1-part-water-dispenser",
                  label: "VÍ DỤ TRỰC QUAN",
                  title: "Mô hình Máy lọc nước & Máy bán hàng tự động (Vending Machine)",
                  content: [
                    {
                      type: "list",
                      items: [
                        "<b>Data:</b> nước (water).",
                        "<b>Operations:</b> <code>chill</code> (làm lạnh), <code>crush</code> (làm đá bào), <code>cube</code> (làm đá viên), <code>isEmpty</code>.",
                        "<b>Data structure:</b> cấu trúc bên trong máy lọc.",
                        "<b>Walls:</b> làm bằng thép (steel).",
                        "<b>Khe hở duy nhất trên tường:</b> Input (nước) & Output (nước lạnh, đá bào, hoặc đá viên).",
                        "Dùng ADT giống như dùng <b>máy bán hàng tự động (vending machine)</b>. Đá bào có thể được làm theo nhiều cách khác nhau &mdash; ta <b>không quan tâm</b> nó được làm như thế nào."
                      ]
                    },
                    {
                      type: "component",
                      componentName: "WaterDispenserAdt"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-2-4",
              number: "2.4",
              title: "Wall of ADT Operations & Interface",
              parts: [
                {
                  id: "dsa-b1-part-wall-interface",
                  label: "INTERFACE & WALL",
                  title: "Ranh giới cô lập giữa Program và Data Structure",
                  content: [
                    {
                      type: "list",
                      items: [
                        "Một <b>WALL</b> của các ADT operations <b>cô lập (isolates)</b> data structure khỏi chương trình sử dụng nó.",
                        "<b>Interface:</b> những gì một chương trình/module/class cần hiểu để sử dụng ADT.",
                        "Nếu chương trình <b>bỏ qua interface</b> để truy cập trực tiếp data structure &rarr; <b>vi phạm</b> bức tường (wall) của ADT operations."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-2-5",
              number: "2.5",
              title: "Ví dụ: Kiểu nguyên thủy (Primitive Types) như ADT & Phân loại Operations",
              parts: [
                {
                  id: "dsa-b1-part-primitive-operations",
                  label: "PHÂN LOẠI OPERATIONS",
                  title: "3 Loại Phép toán ADT (Constructors, Mutators, Accessors)",
                  content: [
                    {
                      type: "paragraph",
                      text: "Các kiểu dữ liệu định sẵn (predefined) của Java <b>cũng là ADT</b>. Chi tiết biểu diễn (representation) được ẩn đi &rarr; giúp tính <b>khả chuyển (portability)</b>. Ví dụ: <code>int</code>, <code>boolean</code>, <code>double</code>."
                    },
                    {
                      type: "list",
                      items: [
                        "<code>int</code> là một type với các operations: <code>--</code>, <code>++</code>, <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, ...",
                        "<code>boolean</code> là một type với các operations: <code>&&</code>, <code>||</code>, <code>!</code>"
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<b>Phân loại operations (ví dụ dùng Array ADT):</b>"
                    },
                    {
                      type: "table",
                      headers: ["Loại Phép toán (Operation Type)", "Chức năng & Ví dụ mã nguồn Java"],
                      rows: [
                        [
                          "<b>1. Constructors (Tạo dữ liệu)</b>",
                          "Tạo mới và khởi tạo dữ liệu:<br/><pre><code class=\"language-java\">int[] z = new int[4];\nint[] x = { 2, 4, 6, 8 };</code></pre>"
                        ],
                        [
                          "<b>2. Mutators (Thay đổi dữ liệu)</b>",
                          "Thay đổi giá trị hoặc trạng thái bên trong dữ liệu:<br/><pre><code class=\"language-java\">x[3] = 10;</code></pre>"
                        ],
                        [
                          "<b>3. Accessors (Truy vấn dữ liệu)</b>",
                          "Đọc/truy vấn trạng thái mà không làm thay đổi dữ liệu gốc:<br/><pre><code class=\"language-java\">int y = x[3] + x[2];</code></pre>"
                        ]
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-2-6",
              number: "2.6",
              title: "Ví dụ: Complex Number (Số phức) như ADT",
              parts: [
                {
                  id: "dsa-b1-part-complex-adt",
                  label: "BÀI TOÁN SỐ PHỨC",
                  title: "Khái niệm, Thiết kế Specification và 2 Bản Cài đặt (Cartesian & Polar)",
                  content: [
                    {
                      type: "paragraph",
                      text: "<b>a) Khái niệm:</b>"
                    },
                    {
                      type: "list",
                      items: [
                        "Số phức gồm phần thực <b>a</b> và phần ảo <b>b</b>, viết là <b>a + bi</b>.",
                        "<b>i</b> là giá trị sao cho <b>i² = -1</b>.",
                        "<i>Ví dụ:</i> 12 + 3i, 15 - 9i, -5 + 4i, -23, 18i.",
                        "Biểu diễn trực quan: cặp số (a, b) &mdash; một vector trên mặt phẳng số phức 2 chiều (Trục ngang Real, Trục dọc Imag)."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<b>b) Thiết kế ADT \"Complex\":</b> Kiểu dữ liệu do người dùng định nghĩa (user-defined) cũng có thể tổ chức thành ADT. Các operations: <code>Complex(r,i)</code> (constructor), <code>add(c)</code>, <code>minus(c)</code>, <code>times(c)</code>, <code>realpart()</code>, <code>imagpart()</code>."
                    },
                    {
                      type: "code",
                      language: "java",
                      caption: "c) Class Complex (bản khai báo – chỉ có specification)",
                      code: `class Complex {
    private ...                                 // data members (hidden)
    public Complex(double r, double i) { ... }  // create a new object
    public void add(Complex c) { ... }          // this = this + c
    public void minus(Complex c) { ... }        // this = this - c
    public void times(Complex c) { ... }        // this = this * c
    public double realpart() { ... }            // returns this.real
    public double imagpart() { ... }            // returns this.imag
}`
                    },
                    {
                      type: "code",
                      language: "java",
                      caption: "Cách dùng (Client Program):",
                      code: `Complex c = new Complex(1,2);      // c = (1,2)
Complex d = new Complex(3,5);      // d = (3,5)
c.add(d);                          // c = c + d
d.minus(new Complex(1,1));         // d = d - (1,1)
c.times(d);                        // c = c * d`
                    },
                    {
                      type: "paragraph",
                      text: "<b>d) Implementation #1 &mdash; Cartesian (Đề các):</b><br/>Công thức số phức:<br/>• (a + bi) + (c + di) = (a + c) + (b + d)i<br/>• (a + bi) - (c + di) = (a - c) + (b - d)i<br/>• (a + bi)(c + di) = (ac - bd) + (ad + bc)i"
                    },
                    {
                      type: "code",
                      language: "java",
                      caption: "Mã nguồn Implementation #1 (Cartesian):",
                      code: `class Complex {
    private double real;
    private double imag;

    // CONSTRUCTOR
    public Complex(double r, double i) { real = r; imag = i; }

    // ACCESSORS
    public double realpart() { return real; }
    public double imagpart() { return imag; }

    // MUTATORS
    public void add(Complex c) {    // this = this + c
        real += c.realpart();
        imag += c.imagpart();
    }
    public void minus(Complex c) {  // this = this - c
        real -= c.realpart();
        imag -= c.imagpart();
    }
    public void times(Complex c) {  // this = this * c
        double r = real * c.realpart() - imag * c.imagpart();
        double i = real * c.imagpart() + imag * c.realpart();
        real = r;
        imag = i;
    }
}`
                    },
                    {
                      type: "code",
                      language: "java",
                      caption: "e) Implementation #2 &mdash; Polar (Cực):",
                      code: `class Complex {
    private double ang; // the angle of the vector
    private double mag; // the magnitude of the vector

    public void times(Complex c) { // this = this * c (nhân cực rất nhanh!)
        ang += c.angle();
        mag *= c.mag();
    }
}`
                    },
                    {
                      type: "paragraph",
                      text: "<b>f) Quan hệ giữa Cartesian và Polar:</b><br/>• Từ Polar &rarr; Cartesian: <code>real = mag * cos(ang)</code>, <code>imag = mag * sin(ang)</code><br/>• Từ Cartesian &rarr; Polar: <code>ang = tan⁻¹(imag/real)</code>, <code>mag = real / cos(ang)</code> hoặc <code>mag = √(real² + imag²)</code><br/><br/><i>Ví dụ:</i> Số phức 2 + i &rarr; real = 2, imag = 1 &rarr; mag = √(2² + 1²) = 2.236, ang = tan⁻¹(1/2) = 0.464 rad."
                    },
                    {
                      type: "component",
                      componentName: "ComplexNumberPlane"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-summary-2",
              number: "📌",
              title: "📌 Cần nhớ Phần II",
              parts: [
                {
                  id: "dsa-b1-part-summary-2",
                  label: "TỔNG KẾT PHẦN II",
                  title: "Những điểm nòng nốt của Phần II",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 TÓM TẮT TRỌNG TÂM PHẦN II",
                      text: "1. <b>ADT = Data + Specification của operations trên data.</b><br/>2. <b>Data structure là 1 phần</b> trong việc implement ADT.<br/>3. <b>\"Wall\" của ADT operations cô lập</b> data structure khỏi chương trình dùng nó; <b>Interface</b> = những gì chương trình cần biết để dùng ADT.<br/>4. <b>Kiểu nguyên thủy Java</b> (<code>int</code>, <code>boolean</code>, <code>double</code>) cũng là ADT.<br/>5. <b>3 loại operations:</b> Constructors (tạo), Mutators (sửa), Accessors (truy vấn).<br/>6. <b>Một ADT (VD: Complex) có thể có nhiều implementation khác nhau</b> (Cartesian, Polar) nhưng cùng 1 tập operations.<br/>7. <b>Công thức đổi Cartesian ↔ Polar cần nhớ để làm bài tập.</b>"
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* PHẦN III LA MÃ */
        {
          id: "dsa-b1-sec3",
          roman: "III",
          title: "Java Interface",
          subsections: [
            {
              id: "dsa-b1-sub-3-1",
              number: "3.1",
              title: "Khái niệm Java Interface",
              parts: [
                {
                  id: "dsa-b1-part-interface-concept",
                  label: "KHÁI NIỆM INTERFACE",
                  title: "Đặc tả hành vi chung (Common Behaviour) & Quy tắc trong Java",
                  content: [
                    {
                      type: "list",
                      items: [
                        "Java interface cho phép đặc tả <b>hành vi chung (common behaviour)</b> cho một tập các class (có thể không liên quan nhau).",
                        "Java interface <b>có thể dùng để định nghĩa ADT</b>.",
                        "Cho phép trừu tượng hóa/khái quát hóa (abstraction/generalization) sâu hơn.",
                        "Dùng từ khóa <b><code>interface</code></b> thay vì <code>class</code>.",
                        "Đặc tả (specify) các method cần được implement.",
                        "Interface là nhóm các method <b>có phần thân rỗng (empty bodies)</b>.",
                        "Có thể có định nghĩa hằng số (constant) &mdash; mặc định là <code>public static final</code>.",
                        "Một class được gọi là <b>implement interface</b> nếu nó cung cấp implementation cho <b>TẤT CẢ</b> method trong interface."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-3-2",
              number: "3.2",
              title: "Ví dụ #1 – Interface Comparable<T> và Class Shape",
              parts: [
                {
                  id: "dsa-b1-part-comparable-shape",
                  label: "VÍ DỤ 1: COMPARABLE",
                  title: "Định nghĩa Interface Comparable<T> & Cài đặt trong Class Shape",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      caption: "Interface Comparable<T> chuẩn trong java.lang:",
                      code: `// package in java.lang;
public interface Comparable <T> {
    int compareTo(T other);
}`
                    },
                    {
                      type: "code",
                      language: "java",
                      caption: "Class Shape cài đặt interface Comparable<Shape>:",
                      code: `class Shape implements Comparable <Shape> {
    static final double PI = 3.14;
    double area() { ... };
    double circumference() { ... };
    
    int compareTo(Shape x) {
        if (this.area() == x.area())
            return 0;
        else if (this.area() > x.area())
            return 1;
        else
            return -1;
    }
}`
                    },
                    {
                      type: "component",
                      componentName: "ShapeComparableVisualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-3-3",
              number: "3.3",
              title: "Ví dụ #2 – Complex Interface (Java 7 vs Java 8+ Default Methods)",
              parts: [
                {
                  id: "dsa-b1-part-complex-interface",
                  label: "COMPLEX INTERFACE",
                  title: "Giao diện Complex.java & Tiến hóa Java 8 Default Methods",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      caption: "Complex.java (Dành cho cả Cartesian và Polar):",
                      code: `// Complex.java
public interface Complex {
    public double realpart();     // returns this.real
    public double imagpart();     // returns this.imag
    public double angle();        // returns this.ang
    public double mag();          // returns this.mag
    public void add(Complex c);   // this = this + c
    public void minus(Complex c); // this = this - c
    public void times(Complex c); // this = this * c
}`
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "💡 Sự tiến hóa của Java Interface",
                      text: "• <b>Java 7 trở về trước:</b> Method trong interface chỉ có <b>signature (header)</b>, tuyệt đối không có implementation.<br/>• <b>Java 8 trở đi:</b> Cho phép định nghĩa <b>default methods</b> &mdash; cung cấp implementation mặc định, có thể bị override bởi class implement."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-3-4",
              number: "3.4",
              title: "Implementation – ComplexCart (Cartesian) & Câu hỏi mở toString()",
              parts: [
                {
                  id: "dsa-b1-part-complex-cart",
                  label: "COMPLEX CARTESIAN",
                  title: "Lớp ComplexCart.java & Giải đáp Bẫy ép kiểu trong toString()",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      caption: "ComplexCart.java:",
                      code: `// ComplexCart.java
class ComplexCart implements Complex {
    private double real;
    private double imag;

    // CONSTRUCTOR
    public ComplexCart(double r, double i) { real = r; imag = i; }

    // ACCESSORS
    public double realpart() { return real; }
    public double imagpart() { return imag; }
    public double mag() { return Math.sqrt(real*real + imag*imag); }
    public double angle() {
        if (real != 0) {
            if (real < 0) return (Math.PI + Math.atan(imag/real));
            else return Math.atan(imag/real);
        }
        else if (imag == 0) return 0;
        else if (imag > 0) return Math.PI/2;
        else return -Math.PI/2;
    }

    // MUTATORS
    public void add(Complex c) {
        this.real += c.realpart();
        this.imag += c.imagpart();
    }
    public void minus(Complex c) {
        this.real -= c.realpart();
        this.imag -= c.imagpart();
    }
    public void times(Complex c) {
        double tempReal = real * c.realpart() - imag * c.imagpart();
        imag = real * c.imagpart() + imag * c.realpart();
        real = tempReal;
    }
    public String toString() {
        if (imag == 0) return (real + "");
        else if (imag < 0) return (real + "" + imag + "i");
        else return (real + "+" + imag + "i");
    }
}`
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "❓ GIẢI ĐÁP CÂU HỎI MỞ TRONG SLIDE",
                      text: "<b>Tại sao KHÔNG THỂ viết <code>if (imag == 0) return (real);</code> trong <code>toString()</code>?</b><br/><br/>👉 <b>Trả lời:</b> Phương thức <code>toString()</code> bắt buộc phải trả về kiểu <b>String</b>. Nhưng biến <code>real</code> được khai báo là kiểu <code>double</code>. Nếu viết <code>return (real);</code>, Java sẽ báo lỗi biên dịch mismatch type. Việc nối thêm chuỗi rỗng <code>real + \"\"</code> giúp tự động chuyển kiểu <code>double</code> sang <code>String</code> hợp lệ!"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-3-5",
              number: "3.5",
              title: "Implementation – ComplexPolar (Polar)",
              parts: [
                {
                  id: "dsa-b1-part-complex-polar",
                  label: "COMPLEX POLAR",
                  title: "Lớp ComplexPolar.java",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      caption: "ComplexPolar.java:",
                      code: `// ComplexPolar.java
class ComplexPolar implements Complex {
    private double mag; // magnitude
    private double ang; // angle

    // CONSTRUCTOR
    public ComplexPolar(double m, double a) { mag = m; ang = a; }

    // ACCESSORS
    public double realpart() { return mag * Math.cos(ang); }
    public double imagpart() { return mag * Math.sin(ang); }
    public double mag() { return mag; }
    public double angle() { return ang; }

    // MUTATORS
    public void add(Complex c) { // this = this + c
        double real = this.realpart() + c.realpart();
        double imag = this.imagpart() + c.imagpart();
        mag = Math.sqrt(real*real + imag*imag);
        if (real != 0) {
            if (real < 0) ang = (Math.PI + Math.atan(imag/real));
            else ang = Math.atan(imag/real);
        }
        else if (imag == 0) ang = 0;
        else if (imag > 0) ang = Math.PI/2;
        else ang = -Math.PI/2;
    }

    public void minus(Complex c) { // this = this - c
        double real = mag * Math.cos(ang) - c.realpart();
        double imag = mag * Math.sin(ang) - c.imagpart();
        mag = Math.sqrt(real*real + imag*imag);
        if (real != 0) {
            if (real < 0) ang = (Math.PI + Math.atan(imag/real));
            else ang = Math.atan(imag/real);
        }
        else if (imag == 0) ang = 0;
        else if (imag > 0) ang = Math.PI/2;
        else ang = -Math.PI/2;
    }

    public void times(Complex c) { // this = this * c
        mag *= c.mag();
        ang += c.angle();
    }

    public String toString() {
        if (imagpart() == 0) return (realpart() + "");
        else if (imagpart() < 0) return (realpart() + "" + imagpart() + "i");
        else return (realpart() + "+" + imagpart() + "i");
    }
}`
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-3-6",
              number: "3.6",
              title: "Test Complex & Kết quả thực thi Console Output",
              parts: [
                {
                  id: "dsa-b1-part-test-complex",
                  label: "WORKBENCH KHỞI THỰC THI",
                  title: "TestComplex.java & Kết quả Console Terminal",
                  content: [
                    {
                      type: "component",
                      componentName: "ComplexIdeWorkbench"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-3-7",
              number: "3.7",
              title: "Lưu ý thêm về Interface (Bytecode, Casting, instanceof & EPSILON)",
              parts: [
                {
                  id: "dsa-b1-part-interface-tips",
                  label: "LƯU Ý QUAN TRỌNG",
                  title: "Bản chất Bytecode, Ép kiểu Casting và So sánh số thực với EPSILON",
                  content: [
                    {
                      type: "list",
                      items: [
                        "Mỗi interface được biên dịch (compiled) thành một file bytecode <code>.class</code> riêng, giống như class thông thường.",
                        "<b>KHÔNG THỂ</b> tạo instance (đối tượng) trực tiếp từ interface (ví dụ: <code>new Complex()</code> sẽ bị lỗi).",
                        "<b>NHƯNG CÓ THỂ</b> dùng interface làm <b>kiểu dữ liệu (data type)</b> cho biến, hoặc làm kết quả của <b>casting (ép kiểu)</b>."
                      ]
                    },
                    {
                      type: "code",
                      language: "java",
                      caption: "Ví dụ cài đặt phương thức equals() an toàn:",
                      code: `public static final double EPSILON = 0.0000001;

public boolean equals(Object cl) {
    if (cl instanceof Complex) {
        Complex temp = (Complex) cl; // result of casting
        return (Math.abs(realpart() - temp.realpart()) < EPSILON
                && Math.abs(imagpart() - temp.imagpart()) < EPSILON);
    }
    return false;
}`
                    },
                    {
                      type: "component",
                      componentName: "FloatEpsilonPrecisionSandbox"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-summary-3",
              number: "📌",
              title: "📌 Cần nhớ Phần III",
              parts: [
                {
                  id: "dsa-b1-part-summary-3",
                  label: "TỔNG KẾT PHẦN III",
                  title: "Những điểm nòng nốt của Java Interface",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 TÓM TẮT TRỌNG TÂM PHẦN III",
                      text: "1. <b>Class implement interface phải cài đặt TẤT CẢ method</b> của interface.<br/>2. <b>Java 7-:</b> Interface chỉ có signature; <b>Java 8+:</b> Có <b>default methods</b>.<br/>3. <b>Không tạo được instance trực tiếp của interface</b>, nhưng dùng được làm <b>kiểu dữ liệu</b> hoặc kết quả <b>casting</b>.<br/>4. <b>So sánh 2 số thực (double) nên dùng EPSILON</b> thay vì so sánh <code>==</code> trực tiếp (do sai số dấu phẩy động).<br/>5. <b><code>instanceof</code></b> dùng để kiểm tra kiểu trước khi ép kiểu (casting)."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* PHẦN IV LA MÃ */
        {
          id: "dsa-b1-sec4",
          roman: "IV",
          title: "Fraction as ADT (Practice Exercises)",
          subsections: [
            {
              id: "dsa-b1-sub-4-1",
              number: "4.1",
              title: "Thiết kế ADT cho Fraction (Phân số)",
              parts: [
                {
                  id: "dsa-b1-part-fraction-design",
                  label: "THIẾT KẾ FRACTION ADT",
                  title: "Xác định Data members & Behaviors trước khi cài đặt",
                  content: [
                    {
                      type: "paragraph",
                      text: "Trước khi tiến hành viết mã nguồn (implement), quy trình chuẩn của kỹ sư phần mềm là xác định trước các thành phần của ADT:"
                    },
                    {
                      type: "table",
                      headers: ["Thành phần ADT", "Chi tiết thiết kế Phân số (Fraction)"],
                      rows: [
                        [
                          "<b>Data members (Thuộc tính)</b>",
                          "• <b>Numerator</b> (tử số)<br/>• <b>Denominator</b> (mẫu số)"
                        ],
                        [
                          "<b>Behaviors (Phương thức / Operations)</b>",
                          "• <b>Add</b> (phép cộng)<br/>• <b>Minus</b> (phép trừ)<br/>• <b>Times</b> (phép nhân)<br/>• <b>Simplify</b> (rút gọn tối giản)"
                        ]
                      ]
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "📌 Ghi chú thiết kế",
                      text: "Tạm thời <b>bỏ qua</b> phép toán <code>divide</code> (chia) trong phạm vi bài tập thực hành này."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-4-2",
              number: "4.2",
              title: "Interface FractionI",
              parts: [
                {
                  id: "dsa-b1-part-fraction-interface",
                  label: "FRACTION INTERFACE",
                  title: "Khai báo Interface FractionI.java & Quy tắc Immutable",
                  content: [
                    {
                      type: "callout",
                      variant: "success",
                      title: "💡 Quy tắc Immutable trả về đối tượng mới",
                      text: "Các phương thức <code>add()</code>, <code>minus()</code>, <code>times()</code>, <code>simplify()</code> phải <b>trả về một đối tượng FractionI mới</b> (khác hoàn toàn với Complex ADT chỉ thay đổi trực tiếp biến <code>this</code>)."
                    },
                    {
                      type: "code",
                      language: "java",
                      caption: "Mã nguồn FractionI.java:",
                      code: `// FractionI.java
public interface FractionI {
    public int getNumer();           // returns numerator part
    public int getDenom();           // returns denominator part
    public void setNumer(int numer); // sets new numerator
    public void setDenom(int denom); // sets new denominator

    public FractionI add(FractionI f);     // returns this + f
    public FractionI minus(FractionI f);   // returns this - f
    public FractionI times(FractionI f);   // returns this * f
    public FractionI simplify();          // returns this simplified
}`
                    },
                    {
                      type: "component",
                      componentName: "FractionAdtSandbox"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-4-3",
              number: "4.3",
              title: "Hai cách implement FractionI",
              parts: [
                {
                  id: "dsa-b1-part-fraction-implementations",
                  label: "2 CÁCH IMPLEMENTATION",
                  title: "Đối chiếu 2 phương pháp lưu trữ dữ liệu Phân số",
                  content: [
                    {
                      type: "table",
                      headers: ["Implementation Class", "Cách lưu dữ liệu bên trong (Data Structure)"],
                      rows: [
                        [
                          "<b>Fraction</b> (PracEx#26)",
                          "Dùng <b>2 biến <code>int</code> riêng</b> cho <code>numerator</code> và <code>denominator</code>."
                        ],
                        [
                          "<b>FractionArr</b> (PracEx#27)",
                          "Dùng <b>1 mảng <code>int[2]</code></b> chứa <code>numerator</code> và <code>denominator</code>."
                        ]
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "Cả 2 lớp cài đặt đều phải ghi đè (override) thêm 2 phương thức chuẩn: <code>toString()</code> và <code>equals()</code>."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-4-4",
              number: "4.4",
              title: "PracEx#26 – Fraction (dùng 2 biến int)",
              parts: [
                {
                  id: "dsa-b1-part-pracex26",
                  label: "BÀI TẬP PRACEX#26",
                  title: "Khung sườn Fraction.java & Chương trình Kiểm thử Client TestFraction.java",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      caption: "Skeleton sườn bài tập PracEx#26 (Fraction.java):",
                      code: `class Fraction implements FractionI {
    // Data members
    private int numer;
    private int denom;

    // Constructors
    public Fraction() { this(1,1); }

    public Fraction(int numer, int denom) {
        setNumer(numer);
        setDenom(denom);
    }

    // Mutators
    public void setNumer(int numer) { // fill in the code }
    public void setDenom(int denom) { // fill in the code }

    // Returns greatest common divisor of a and b
    // private method as this is not accessible to clients
    private static int gcd(int a, int b) {
        int rem;
        while (b > 0) {
            rem = a % b;
            a = b;
            b = rem;
        }
        return a;
    }

    // Fill in the code for all the methods below
    public FractionI simplify() { // fill in the code }
    public FractionI add(FractionI f) { // fill in the code }
    public FractionI minus(FractionI f) { // fill in the code }
    public FractionI times(FractionI f) { // fill in the code }

    // Overriding methods toString() and equals()
    public String toString() { // fill in the code }
    public boolean equals() { // fill in the code }
}`
                    },
                    {
                      type: "code",
                      language: "java",
                      caption: "Client test program – TestFraction.java:",
                      code: `// To test out Fraction class
import java.util.*;
public class TestFraction {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter 1st fraction: ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        FractionI f1 = new Fraction(a, b);

        System.out.print("Enter 2nd fraction: ");
        a = sc.nextInt();
        b = sc.nextInt();
        FractionI f2 = new Fraction(a, b);

        System.out.println("1st fraction is " + f1);
        System.out.println("2nd fraction is " + f2);

        if (f1.equals(f2))
            System.out.println("The fractions are the same.");
        else
            System.out.println("The fractions are not the same.");

        FractionI sum = f1.add(f2);
        System.out.println("Sum is " + sum);

        FractionI diff = f1.minus(f2);
        System.out.println("Difference is " + diff);

        FractionI prod = f1.times(f2);
        System.out.println("Product is " + prod);
    }
}`
                    },
                    {
                      type: "code",
                      language: "text",
                      caption: "Kết quả chạy mẫu (Console Terminal Output):",
                      code: `Enter 1st fraction: 2 4
Enter 2nd fraction: 2 3
1st fraction is 2/4
2nd fraction is 2/3
The fractions are not the same.
Sum is 7/6
Difference is -1/6
Product is 1/3`
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-4-5",
              number: "4.5",
              title: "PracEx#27 – FractionArr (dùng mảng int[2])",
              parts: [
                {
                  id: "dsa-b1-part-pracex27",
                  label: "BÀI TẬP PRACEX#27",
                  title: "Khung sườn FractionArr.java & Tính bất biến của Client Code",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      caption: "Skeleton sườn bài tập PracEx#27 (FractionArr.java):",
                      code: `class FractionArr implements FractionI {
    // Data members
    private int[] members;

    // Constructors
    public FractionArr() { this(1,1); }

    public FractionArr(int numer, int denom) {
        members = new int[2];
        setNumer(numer);
        setDenom(denom);
    }

    // Accessors
    public int getNumer() { // fill in the code }
    public int getDenom() { // fill in the code }

    // Mutators
    public void setNumer(int numer) { // fill in the code }
    public void setDenom(int denom) { // fill in the code }

    // The rest are omitted here
}`
                    },
                    {
                      type: "component",
                      componentName: "FractionPracticeWorkbench"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-summary-4",
              number: "📌",
              title: "📌 Cần nhớ Phần IV",
              parts: [
                {
                  id: "dsa-b1-part-summary-4",
                  label: "TỔNG KẾT PHẦN IV",
                  title: "Những điểm nòng nốt của Phần IV",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 TÓM TẮT TRỌNG TÂM PHẦN IV",
                      text: "1. <b>Thiết kế ADT trước khi implement:</b> Xác định data members + behaviors trước.<br/>2. <b><code>FractionI</code>:</b> Các operation <code>add/minus/times/simplify</code> phải <b>trả về FractionI mới</b>, không sửa trực tiếp <code>this</code> (khác Complex).<br/>3. <b><code>gcd()</code> là private method</b> &mdash; không cho client truy cập, dùng nội bộ để <code>simplify()</code>.<br/>4. <b>Cùng 1 interface <code>FractionI</code> có thể có nhiều cách implement khác nhau</b> (2 biến int vs mảng int[2]) &mdash; client dùng qua interface, không cần biết implementation nào.<br/>5. <b>Điểm mấu chốt:</b> Client code (<code>TestFraction</code> / <code>TestFractionArr</code>) <b>hầu như giống hệt nhau</b> dù dùng implementation nào &mdash; đây chính là lợi ích của ADT/interface."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* PHẦN V LA MÃ */
        {
          id: "dsa-b1-sec5",
          roman: "V",
          title: "Summary (Tổng kết bài học)",
          subsections: [
            {
              id: "dsa-b1-sub-5-1",
              number: "5.1",
              title: "Tổng quan bài học",
              parts: [
                {
                  id: "dsa-b1-part-lesson-summary",
                  label: "TỔNG KẾT BÀI HỌC",
                  title: "3 Trụ cột Kiến thức cốt lõi Bài 1",
                  content: [
                    {
                      type: "list",
                      items: [
                        "Hiểu được sự cần thiết của <b>data abstraction</b> trong kỹ thuật phần mềm.",
                        "Học cách dùng <b>Java Interface</b> để định nghĩa một <b>ADT</b> chuẩn mực.",
                        "Nền tảng này sẽ được dùng để học và định nghĩa các loại <b>ADT/data structure</b> nâng cao hơn trong các bài học tiếp theo (List, Stack, Queue, Tree, Graph)."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b1-sub-summary-5",
              number: "📌",
              title: "📌 Cần nhớ tổng quát cả bài",
              parts: [
                {
                  id: "dsa-b1-part-grand-summary",
                  label: "TỔNG KẾT TOÀN BỘ BÀI 1",
                  title: "5 Nguyên tắc vàng bắt buộc ghi nhớ",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ 5 NGUYÊN TẮC VÀNG BẮT BUỘC GHI NHỚ TOÀN BỘ BÀI 1 (ADT)",
                      text: "1. <b>ADT = Data + Specification of operations</b> (chỉ quan tâm WHAT, không quan tâm HOW/implementation).<br/>2. <b>Interface trong Java là công cụ để định nghĩa ADT:</b> Chỉ có method signature, class implement phải cài đặt đủ tất cả method.<br/>3. <b>Một ADT có thể có nhiều implementation:</b> (VD: Complex &rarr; Cartesian/Polar; Fraction &rarr; 2 int / mảng int[2]), nhưng client code dùng qua interface <b>không cần thay đổi</b>.<br/>4. <b>Ghi nhớ 3 loại operations:</b> Constructor (tạo), Mutator (thay đổi), Accessor (truy vấn).<br/>5. <b>Ghi nhớ pre-condition / post-condition</b> khi viết đặc tả tài liệu phương thức."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       BÀI 2: LINKED LIST - PHẦN I, II & III
       ============================================================ */
    {
      id: "dsa-b2",
      title: "Bài 2",
      subtitle: "Linked List",
      sections: [
        /* PHẦN I – III LA MÃ: LIST, LIST ADT & ARRAY IMPLEMENTATION */
        {
          id: "dsa-b2-sec1",
          roman: "I–III",
          title: "Use of a List, List ADT & Array Implementation",
          subsections: [
            /* SUBSECTION 1.1: PHẦN I - MOTIVATION */
            {
              id: "dsa-b2-sub-1-1",
              number: "1.1",
              title: "1. Use of a List (Motivation)",
              parts: [
                {
                  id: "dsa-b2-part-1-motivation",
                  label: "PHẦN I - MOTIVATION",
                  title: "Khái niệm List & 3 Thao tác Cốt lõi",
                  content: [
                    {
                      type: "paragraph",
                      text: "<b>List</b> là một trong những kiểu tập hợp dữ liệu (data collection) cơ bản nhất."
                    },
                    {
                      type: "list",
                      items: [
                        "<i>Ví dụ:</i> list nhóm bạn bè, list môn học, list đi chợ...",
                        "Thường ta lưu các phần tử <b>cùng loại (class)</b> trong 1 list."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "Các thao tác điển hình (Typical Operations) trên 1 data collection:"
                    },
                    {
                      type: "list",
                      items: [
                        "<b>Add</b> data (thêm)",
                        "<b>Remove</b> data (xoá)",
                        "<b>Query</b> data (truy vấn)"
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "Chi tiết thao tác khác nhau tuỳ ứng dụng, nhưng chủ đề chung là <b>quản lý dữ liệu</b>."
                    },
                    {
                      type: "callout",
                      variant: "tip",
                      title: "📌 CẦN NHỚ PHẦN I",
                      text: "• <b>List</b> = collection động tuyến tính (dynamic linear data structure).<br/>• <b>3 nhóm thao tác cốt lõi:</b> Add - Remove - Query."
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 2.1: PHẦN II - KHÁI NIỆM LIST ADT */
            {
              id: "dsa-b2-sub-2-1",
              number: "2.1",
              title: "2.1 Khái niệm List ADT (Abstract Data Type)",
              parts: [
                {
                  id: "dsa-b2-part-2-concept",
                  label: "PHẦN II - KHÁI NIỆM",
                  title: "Đặc tả Trừu tượng của List ADT",
                  content: [
                    {
                      type: "paragraph",
                      text: "<b>List ADT</b> là 1 cấu trúc dữ liệu tuyến tính, động (dynamic linear)."
                    },
                    {
                      type: "paragraph",
                      text: "Là tập hợp các phần tử, có thể truy cập lần lượt (accessible one after another) bắt đầu từ <b>đầu danh sách (head)</b>."
                    },
                    {
                      type: "paragraph",
                      text: "Các thao tác ví dụ của List ADT:"
                    },
                    {
                      type: "list",
                      items: [
                        "Tạo list rỗng (create empty list)",
                        "Kiểm tra list rỗng hay không (isEmpty)",
                        "Đếm số phần tử (size)",
                        "Thêm phần tử tại 1 vị trí (add tại vị trí)",
                        "Xoá phần tử tại 1 vị trí (remove tại vị trí)",
                        "Xoá toàn bộ (remove all)",
                        "Đọc phần tử tại 1 vị trí (read)"
                      ]
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 2.2: PHẦN II - LISTINTERFACE.JAVA */
            {
              id: "dsa-b2-sub-2-2",
              number: "2.2",
              title: "2.2 ListInterface.java",
              parts: [
                {
                  id: "dsa-b2-part-2-interface",
                  label: "PHẦN II - INTERFACE",
                  title: "Khai báo Interface chuẩn trong Java",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: `import java.util.*;

public interface ListInterface <E> {
    public boolean isEmpty();
    public int     size();
    public E       getFirst() throws NoSuchElementException;
    public boolean contains(E item);
    public void    addFirst(E item);
    public E       removeFirst() throws NoSuchElementException;
    public void    print();
}`
                    },
                    {
                      type: "paragraph",
                      text: "<code>ListInterface</code> chỉ là <b>1 mẫu nhỏ</b> các operations; List ADT thực tế thường có nhiều method hơn."
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 2.3: PHẦN II - IMPLEMENTATIONS & CẦN NHỚ */
            {
              id: "dsa-b2-sub-2-3",
              number: "2.3",
              title: "2.3 Hai cách hiện thực (Implementation) List ADT",
              parts: [
                {
                  id: "dsa-b2-part-2-implementations",
                  label: "PHẦN II - HỢP ĐỒNG & CÀI ĐẶT",
                  title: "Phân biệt ADT (Contract) & Implementations",
                  content: [
                    {
                      type: "paragraph",
                      text: "• <b>ADT (hợp đồng / contract):</b> List ADT – create empty list, xác định..., add item, ..."
                    },
                    {
                      type: "paragraph",
                      text: "• <b>Implementations (cách hiện thực cụ thể):</b>"
                    },
                    {
                      type: "list",
                      items: [
                        "<b>Java Arrays</b> &rarr; mục 3",
                        "<b>Linked Lists</b> &rarr; mục 4 (BasicLinkedList)"
                      ]
                    },
                    {
                      type: "callout",
                      variant: "tip",
                      title: "📌 CẦN NHỚ PHẦN II",
                      text: "• <b>List ADT</b> = \"hợp đồng\" (chỉ định operations); <b>Implementation</b> = cách hiện thực hợp đồng đó (Array hoặc Linked List).<br/>• Cả 2 cách hiện thực đều dùng chung <code>ListInterface</code>."
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 3.1: PHẦN III - KHÁI NIỆM ARRAY IMPLEMENTATION */
            {
              id: "dsa-b2-sub-3-1",
              number: "3.1",
              title: "3.1 Khái niệm List Implementation via Array (Fixed-size list)",
              parts: [
                {
                  id: "dsa-b2-part-3-concept",
                  label: "PHẦN III - KHÁI NIỆM",
                  title: "Hiện thực List ADT bằng Mảng cố định (Fixed-size)",
                  content: [
                    {
                      type: "paragraph",
                      text: "Dùng Java array chứa dãy n phần tử liên tiếp (contiguous)."
                    },
                    {
                      type: "paragraph",
                      text: "Biến <code>num_nodes</code> = n = số phần tử hiện có; mảng có kích thước m (m &ge; n), phần còn lại <code>unused</code>."
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 3.2: PHẦN III - CLASS LISTUSINGARRAY & WORKBENCH IDE */
            {
              id: "dsa-b2-sub-3-2",
              number: "3.2",
              title: "3.2 Class ListUsingArray & Full Source Code",
              parts: [
                {
                  id: "dsa-b2-part-3-code",
                  label: "PHẦN III - IDE WORKBENCH",
                  title: "Mã nguồn cài đặt Class ListUsingArray",
                  content: [
                    {
                      type: "paragraph",
                      text: "<code>ListUsingArray&lt;E&gt;</code> implements <code>ListInterface&lt;E&gt;</code>."
                    },
                    {
                      type: "component",
                      component: "ListArrayIdeWorkbench"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 3.3: PHẦN III - SHIFT MECHANICS & VISUALIZER */
            {
              id: "dsa-b2-sub-3-3",
              number: "3.3",
              title: "3.3 Cách hoạt động: addFirst() / removeFirst()",
              parts: [
                {
                  id: "dsa-b2-part-3-shift-visualizer",
                  label: "PHẦN III - MÔ PHỎNG THUẬT TOÁN",
                  title: "Cơ chế Dịch chuyển Phần tử (Shift Right / Shift Left)",
                  content: [
                    {
                      type: "paragraph",
                      text: "• <b>addFirst(item):</b> chèn vào vị trí đầu &rarr; phải <b>dịch phải (shift right)</b> tất cả phần tử (bắt đầu từ phần tử cuối) để tạo chỗ trống.<br/><i>Ví dụ <code>addFirst(\"it\")</code>:</i><br/>1. Shift right toàn bộ phần tử<br/>2. Ghi giá trị mới vào chỗ trống (vị trí 0)<br/>3. Cập nhật <code>num_nodes</code>"
                    },
                    {
                      type: "paragraph",
                      text: "• <b>removeFirst():</b> xoá phần tử đầu &rarr; phải <b>dịch trái (shift left)</b> (bắt đầu từ phần tử đầu) để đóng khoảng trống.<br/><i>Ví dụ <code>removeFirst()</code>:</i><br/>1. Close gap (dịch trái)<br/>2. Cập nhật <code>num_nodes</code>"
                    },
                    {
                      type: "paragraph",
                      text: "• Phải duy trì <code>num_nodes</code> để chương trình không truy cập vượt quá vùng dữ liệu hợp lệ."
                    },
                    {
                      type: "component",
                      component: "ArrayShiftVisualizer"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 3.4: PHẦN III - COMPLEXITY & ARRAY VS LINKED LIST */
            {
              id: "dsa-b2-sub-3-4",
              number: "3.4",
              title: "3.4 Time / Space Complexity & So sánh Array vs Linked List",
              parts: [
                {
                  id: "dsa-b2-part-3-complexity",
                  label: "PHẦN III - ĐÁNH GIÁ & SO SÁNH",
                  title: "Phân tích Hiệu năng & Khi nào dùng Array?",
                  content: [
                    {
                      type: "component",
                      component: "ArrayVsLinkedListCards"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION SUMMARY: TỔNG KẾT PHẦN I + II + III */
            {
              id: "dsa-b2-sub-summary-1",
              number: "📌",
              title: "Cần nhớ Tổng hợp Phần I, II & III",
              parts: [
                {
                  id: "dsa-b2-part-summary-all",
                  label: "TỔNG KẾT BÀI 2 (PHẦN I - III)",
                  title: "5 Điểm nóng bắt buộc ghi nhớ",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ 5 ĐIỂM NÓNG BẮT BUỘC GHI NHỚ (PHẦN I → III)",
                      text: "1. <b>List ADT:</b> Tập hợp phần tử tuyến tính động, truy cập bắt đầu từ <b>head</b>. 3 thao tác cốt lõi: Add - Remove - Query.<br/>2. <b>ListInterface:</b> Định nghĩa hợp đồng chung; class <code>ListUsingArray</code> phải cài đặt đầy đủ tất cả phương thức.<br/>3. <b>Array Implementation (ListUsingArray):</b> Lưu n phần tử liên tiếp (contiguous) trong mảng cố định <code>MAXSIZE</code>, phần dư là <code>unused</code>.<br/>4. <b>Hiệu năng Array:</b> <code>getFirst()</code> cực nhanh O(1), nhưng <code>addFirst()</code> / <code>removeFirst()</code> rất chậm <b>O(n)</b> do phải dịch chuyển (shift) toàn bộ phần tử.<br/>5. <b>Nhược điểm cố định:</b> Kích thước mảng bị giới hạn bởi <code>MAXSIZE</code>. Vì vậy đối với tập hợp biến đổi linh hoạt và chèn/xóa thường xuyên, ta nên dùng <b>Linked List</b> ở phần tiếp theo."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* PHẦN IV – VI LA MÃ: LINKED LIST IMPLEMENTATION, LISTNODE & FORMING */
        {
          id: "dsa-b2-sec2",
          roman: "IV–VI",
          title: "Linked List Implementation, ListNode & Forming",
          subsections: [
            /* SUBSECTION 4.1: PHẦN IV - SO SÁNH TRỰC QUAN */
            {
              id: "dsa-b2-sub-4-1",
              number: "4.1",
              title: "4.1 So sánh trực quan: Array vs Linked List",
              parts: [
                {
                  id: "dsa-b2-part-4-vis-compare",
                  label: "PHẦN IV - SO SÁNH TRỰC QUAN",
                  title: "Khác biệt bản chất giữa Array & Linked List",
                  content: [
                    {
                      type: "paragraph",
                      text: "• <b>Array:</b> thêm/xoá phần tử ở giữa cần dịch chuyển (shift) các phần tử khác."
                    },
                    {
                      type: "paragraph",
                      text: "• <b>Linked List:</b>"
                    },
                    {
                      type: "list",
                      items: [
                        "<b>Add:</b> chỉ cần tạo node mới và <b>nối con trỏ (pointer)</b>, không cần dịch chuyển.",
                        "<b>Remove:</b> chỉ cần <b>ngắt</b> node ra khỏi chuỗi liên kết &rarr; node đó trở thành <b>garbage</b>, sẽ được dọn bởi garbage collection."
                      ]
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 4.2: PHẦN IV - Ý TƯỞNG LINKED LIST & VISUALIZER */
            {
              id: "dsa-b2-sub-4-2",
              number: "4.2",
              title: "4.2 Ý tưởng (Idea) của Linked List",
              parts: [
                {
                  id: "dsa-b2-part-4-idea",
                  label: "PHẦN IV - MÔ PHỎNG NODE & NEXT",
                  title: "Cấu trúc Node & Vùng nhớ Không liền tiếp",
                  content: [
                    {
                      type: "paragraph",
                      text: "Mỗi phần tử được lưu trong 1 <b>node</b>, gồm:"
                    },
                    {
                      type: "list",
                      items: [
                        "<code>element</code>: dữ liệu",
                        "<code>next</code>: con trỏ tới node kế tiếp"
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "• Cho phép các phần tử nằm ở vùng nhớ <b>không liền tiếp</b> (non-contiguous memory)."
                    },
                    {
                      type: "paragraph",
                      text: "• Các node được sắp thứ tự bằng cách liên kết (associate) mỗi node với node lân cận."
                    },
                    {
                      type: "paragraph",
                      text: "• Node cuối cùng có <code>next = null</code> &rarr; không còn node kế tiếp."
                    },
                    {
                      type: "component",
                      component: "LinkedListVisualizer"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 4.3: PHẦN IV - OBJECT REFERENCES & MEMORY VISUALIZER */
            {
              id: "dsa-b2-sub-4-3",
              number: "4.3",
              title: "4.3 Ôn lại Object References (Reference data type)",
              parts: [
                {
                  id: "dsa-b2-part-4-references",
                  label: "PHẦN IV - CHỦ ĐỀ THAM CHIẾU",
                  title: "Biến Tham chiếu & Phép so sánh ==",
                  content: [
                    {
                      type: "paragraph",
                      text: "Phân biệt <b>kiểu dữ liệu nguyên thuỷ (primitive)</b> và <b>kiểu tham chiếu (reference)</b>:"
                    },
                    {
                      type: "list",
                      items: [
                        "<code>int x = 20;</code> &rarr; biến <code>x</code> chứa trực tiếp giá trị 20.",
                        "<code>Integer y = new Integer(20);</code> &rarr; biến <code>y</code> chỉ chứa <b>tham chiếu (reference/pointer)</b> tới object <code>Integer(20)</code>.",
                        "<code>String z = new String(\"hi th\");</code> &rarr; tương tự, <code>z</code> là tham chiếu tới object String."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "• <b>Một instance (object) của 1 class chỉ được tạo ra (constructed) khi toán tử <code>new</code> được áp dụng.</b>"
                    },
                    {
                      type: "paragraph",
                      text: "• <b>Biến tham chiếu (reference variable) chỉ chứa 1 reference/pointer tới object</b>, không chứa chính object đó."
                    },
                    {
                      type: "component",
                      component: "ReferenceMemoryVisualizer"
                    },
                    {
                      type: "callout",
                      variant: "tip",
                      title: "📌 CẦN NHỚ PHẦN IV.3",
                      text: "• <code>==</code> giữa 2 reference so sánh <b>địa chỉ (identity)</b>, không so sánh giá trị nội dung.<br/>• Đây là kiến thức nền quan trọng để hiểu con trỏ <code>next</code> trong linked list."
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 5.1 & 5.2: PHẦN V - LISTNODE & CODE WORKBENCH */
            {
              id: "dsa-b2-sub-5-1",
              number: "5.1",
              title: "5. ListNode – Đơn vị cơ bản của Linked List",
              parts: [
                {
                  id: "dsa-b2-part-5-listnode",
                  label: "PHẦN V - LISTNODE",
                  title: "Khái niệm & Mã nguồn Class ListNode",
                  content: [
                    {
                      type: "paragraph",
                      text: "<code>ListNode&lt;E&gt;</code> gồm 2 thuộc tính:"
                    },
                    {
                      type: "list",
                      items: [
                        "<code>element</code>: dữ liệu kiểu generic <code>E</code>",
                        "<code>next</code>: tham chiếu tới <code>ListNode&lt;E&gt;</code> kế tiếp"
                      ]
                    },
                    {
                      type: "component",
                      component: "ListIdeWorkbench"
                    },
                    {
                      type: "callout",
                      variant: "tip",
                      title: "📌 CẦN NHỚ PHẦN V",
                      text: "• <b>ListNode</b> là \"viên gạch\" xây nên mọi loại linked list ở các phần sau (BasicLinkedList, EnhancedLinkedList, TailedLinkedList...).<br/>• 3 method quan trọng: <code>getNext()</code>, <code>getElement()</code>, <code>setNext()</code>."
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 6.1: PHẦN VI - FORMING A LINKED LIST & COMPARISON */
            {
              id: "dsa-b2-sub-6-1",
              number: "6.1",
              title: "6. Forming a Linked List (Tạo 1 Linked List)",
              parts: [
                {
                  id: "dsa-b2-part-6-forming",
                  label: "PHẦN VI - KHỞI TẠO LINKED LIST",
                  title: "Biến head & 2 Cách khởi tạo Linked List",
                  content: [
                    {
                      type: "paragraph",
                      text: "<b>Cần 1 head:</b> Với dãy 4 phần tử <code>&lt;a0, a1, a2, a3&gt;</code>, cần biến <b><code>head</code></b> để biết node đầu tiên nằm ở đâu. Từ <code>head</code>, ta duyệt được tới các node còn lại."
                    },
                    {
                      type: "component",
                      component: "FormingLinkedListComparison"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION SUMMARY: TỔNG KẾT PHẦN IV + V + VI */
            {
              id: "dsa-b2-sub-summary-2",
              number: "📌",
              title: "Cần nhớ Tổng hợp Phần IV, V & VI",
              parts: [
                {
                  id: "dsa-b2-part-summary-456",
                  label: "TỔNG KẾT BÀI 2 (PHẦN IV - VI)",
                  title: "5 Điểm nóng bắt buộc ghi nhớ",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ 5 ĐIỂM NÓNG BẮT BUỘC GHI NHỚ (PHẦN IV → VI)",
                      text: "1. <b>Linked List Idea:</b> Lưu trữ các phần tử trong các Node nằm ở vùng nhớ <b>không liền tiếp (non-contiguous)</b>, liên kết nhau bằng con trỏ <code>next</code>.<br/>2. <b>Node cuối:</b> Luôn có <code>next = null</code> để báo hiệu kết thúc danh sách.<br/>3. <b>Reference == Identity:</b> Phép <code>==</code> so sánh địa chỉ bộ nhớ (identity), không so sánh nội dung. <code>w = y</code> sẽ khiến w trỏ cùng địa chỉ với y.<br/>4. <b>ListNode Class:</b> Gồm <code>element</code> + <code>next</code> với 3 getter/setter: <code>getElement()</code>, <code>getNext()</code>, <code>setNext()</code>.<br/>5. <b>Head Pointer:</b> Linked List bắt buộc cần biến <code>head</code> để quản lý Node đầu tiên. Cách dùng <code>addFirst()</code> là cách khởi tạo hướng đối tượng (đóng gói) gọn gàng và thực tế hơn tạo thủ công."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* PHẦN VII LA MÃ: BASIC LINKED LIST (BASICLINKEDLIST) */
        {
          id: "dsa-b2-sec3",
          roman: "VII",
          title: "Basic Linked List (BasicLinkedList)",
          subsections: [
            /* SUBSECTION 7.1: KHÁI NIỆM & CODE CƠ BẢN */
            {
              id: "dsa-b2-sub-7-1",
              number: "7.1",
              title: "7.1 - 7.2 Khái niệm & Code cơ bản BasicLinkedList",
              parts: [
                {
                  id: "dsa-b2-part-7-concept",
                  label: "PHẦN VII - KHÁI NIỆM & KHỞI TẠO",
                  title: "Class BasicLinkedList & Cấu trúc Thuộc tính",
                  content: [
                    {
                      type: "paragraph",
                      text: "• <code>BasicLinkedList&lt;E&gt;</code> implements <code>ListInterface&lt;E&gt;</code>."
                    },
                    {
                      type: "paragraph",
                      text: "• Thuộc tính: <code>head</code> (ListNode đầu), <code>num_nodes</code> (số phần tử)."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: `import java.util.*;

class BasicLinkedList <E> implements ListInterface <E> {
    private ListNode <E> head = null;
    private int num_nodes = 0;

    public boolean isEmpty() { return (num_nodes == 0); }
    public int size()       { return num_nodes; }

    public E getFirst() throws NoSuchElementException {
        if (head == null)
            throw new NoSuchElementException("can't get from an empty list");
        else return head.getElement();
    }

    public boolean contains(E item) {
        for (ListNode <E> n = head; n != null; n = n.getNext())
            if (n.getElement().equals(item)) return true;
        return false;
    }
}`
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 7.2: ADDFIRST() & BOUNDARY CASES */
            {
              id: "dsa-b2-sub-7-2",
              number: "7.2",
              title: "7.3 addFirst() – Cách hoạt động & Boundary Cases",
              parts: [
                {
                  id: "dsa-b2-part-7-addfirst",
                  label: "PHẦN VII - THAO TÁC ADDFIRST",
                  title: "Phân tích addFirst() & Các trường hợp biên",
                  content: [
                    {
                      type: "paragraph",
                      text: "<b>Cách hoạt động:</b> tạo node mới có <code>next</code> trỏ tới <code>head</code> cũ, sau đó cập nhật <code>head</code> = node mới."
                    },
                    {
                      type: "paragraph",
                      text: "<b>Các trường hợp (case) cần xét (boundary cases):</b>"
                    },
                    {
                      type: "list",
                      items: [
                        "<b>0 phần tử:</b> <code>head</code> từ <code>null</code> &rarr; trỏ tới node mới (<code>num_nodes: 0&rarr;1</code>)",
                        "<b>1 phần tử:</b> node mới trở thành <code>head</code>, <code>next</code> trỏ tới node cũ (<code>num_nodes: 1&rarr;2</code>)",
                        "<b>&ge;2 phần tử:</b> tương tự, node mới chèn vào đầu"
                      ]
                    },
                    {
                      type: "component",
                      component: "BasicLinkedListBoundaryVisualizer"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 7.3: REMOVEFIRST() & BOUNDARY CASES */
            {
              id: "dsa-b2-sub-7-3",
              number: "7.3",
              title: "7.4 removeFirst() – Cách hoạt động & Boundary Cases",
              parts: [
                {
                  id: "dsa-b2-part-7-removefirst",
                  label: "PHẦN VII - THAO TÁC REMOVEFIRST",
                  title: "Phân tích removeFirst() & Ném Exception",
                  content: [
                    {
                      type: "paragraph",
                      text: "<b>Cách hoạt động:</b> lưu tạm <code>head</code> hiện tại vào <code>ln</code>, cập nhật <code>head = head.getNext()</code>, giảm <code>num_nodes</code>, trả về phần tử đã xoá."
                    },
                    {
                      type: "paragraph",
                      text: "<b>Các trường hợp cần xét (boundary cases):</b>"
                    },
                    {
                      type: "list",
                      items: [
                        "<b>0 phần tử:</b> không remove được &rarr; ném <code>NoSuchElementException</code>",
                        "<b>1 phần tử:</b> <code>head</code> &rarr; <code>null</code>, <code>num_nodes</code> &rarr; 0",
                        "<b>&ge;2 phần tử:</b> <code>head</code> chuyển sang node kế tiếp"
                      ]
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 7.4: PRINT() & TEST CLIENT WORKBENCH */
            {
              id: "dsa-b2-sub-7-4",
              number: "7.4",
              title: "7.5 - 7.6 print() & Ví dụ sử dụng (Test Client)",
              parts: [
                {
                  id: "dsa-b2-part-7-print-test",
                  label: "PHẦN VII - IDE WORKBENCH & TEST",
                  title: "Mã nguồn print() & Chương trình Test Client",
                  content: [
                    {
                      type: "paragraph",
                      text: "Toàn bộ mã nguồn <code>BasicLinkedList.java</code> và chương trình test <code>BasicLinkedListTest.java</code> kèm màn hình console chạy thực tế:"
                    },
                    {
                      type: "component",
                      component: "ListIdeWorkbench"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 7.5: TIME COMPLEXITY & CẦN NHỚ */
            {
              id: "dsa-b2-sub-7-5",
              number: "7.5",
              title: "7.7 Time Complexity & 📌 Cần nhớ",
              parts: [
                {
                  id: "dsa-b2-part-7-complexity",
                  label: "PHẦN VII - ĐÁNH GIÁ & QUY TẮC",
                  title: "Độ phức tạp Thời gian & 3 Quy tắc Vàng Con trỏ",
                  content: [
                    {
                      type: "component",
                      component: "BasicLinkedListComplexityCards"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION SUMMARY: TỔNG KẾT PHẦN VII */
            {
              id: "dsa-b2-sub-summary-3",
              number: "📌",
              title: "Cần nhớ Tổng hợp Phần VII",
              parts: [
                {
                  id: "dsa-b2-part-summary-7",
                  label: "TỔNG KẾT BÀI 2 (PHẦN VII)",
                  title: "3 Quy tắc vàng bắt buộc ghi nhớ",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ 3 QUY TẮC VÀNG BẮT BUỘC GHI NHỚ (PHẦN VII - BASICLINKEDLIST)",
                      text: "1. <b>Ưu điểm lớn nhất so với Array:</b> <code>addFirst()</code> và <code>removeFirst()</code> đạt độ phức tạp <b>O(1)</b> tuyệt đối, không cần shift bất kỳ phần tử nào.<br/>2. <b>Luôn xét đủ Boundary Cases:</b> 0 phần tử (ném Exception khi remove), 1 phần tử, và &ge;2 phần tử khi cài đặt các thao tác cập nhật.<br/>3. <b>Thứ tự câu lệnh gán con trỏ RẤT QUAN TRỌNG:</b> Sai thứ tự sẽ làm mất địa chỉ node cũ hoặc gãy chuỗi liên kết (ví dụ: phải lưu <code>head</code> cũ trước khi gán <code>head</code> mới)."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* PHẦN VIII.1 - VIII.2: ENHANCED LINKED LIST (ELL) */
        {
          id: "dsa-b2-sec4",
          roman: "VIII.1–2",
          title: "Enhanced Linked List (ELL)",
          subsections: [
            /* SUBSECTION 8.1: SƠ ĐỒ TỔNG QUAN */
            {
              id: "dsa-b2-sub-8-1",
              number: "8.1",
              title: "8.1 Sơ đồ tổng quan các biến thể Linked List",
              parts: [
                {
                  id: "dsa-b2-part-8-overview",
                  label: "PHẦN VIII - TỔNG QUAN BIẾN THỂ",
                  title: "So sánh Cấu trúc BLL vs ELL vs TLL",
                  content: [
                    {
                      type: "paragraph",
                      text: "• <code>BasicLinkedList</code> (<code>head</code>, <code>num_nodes</code>) &rarr; implements <code>ListInterface</code>; <b>has-a</b> <code>ListNode</code>."
                    },
                    {
                      type: "paragraph",
                      text: "• <code>EnhancedLinkedList</code> (<code>head</code>, <code>num_nodes</code>) &rarr; implements <code>EnhancedListInterface</code>; <b>has-a</b> <code>ListNode</code>."
                    },
                    {
                      type: "paragraph",
                      text: "• <code>TailedLinkedList</code> (<code>head</code>, <code>tail</code>, <code>num_nodes</code>) &rarr; implements <code>EnhancedListInterface</code>; <b>has-a</b> <code>ListNode</code>."
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 KHÓ KHĂN CHUNG (DIFFICULTY)",
                      text: "Khi cài đặt các hàm cập nhật, người lập trình bắt buộc phải xử lý tất cả <b>boundary cases</b> (0, 1, 2, 3+ phần tử) để tránh đứt gãy chuỗi con trỏ hoặc NullPointerException."
                    },
                    {
                      type: "component",
                      component: "LinkedListArchitectureHierarchyStudio"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 8.2: KHÁI NIỆM ELL & INTERFACE */
            {
              id: "dsa-b2-sub-8-2",
              number: "8.2",
              title: "8.2 Khái niệm Enhanced Linked List & EnhancedListInterface",
              parts: [
                {
                  id: "dsa-b2-part-8-ell-concept",
                  label: "PHẦN VIII - KHÁI NIỆM ELL",
                  title: "Lý do ra đời & Interface mở rộng",
                  content: [
                    {
                      type: "paragraph",
                      text: "• <code>BasicLinkedList</code> (BLL) chỉ hỗ trợ chèn ở <b>đầu</b> danh sách &rarr; không đủ nếu cần chèn vào <b>giữa</b> (ví dụ: danh sách cần giữ thứ tự sắp xếp theo key)."
                    },
                    {
                      type: "paragraph",
                      text: "• <b>EnhancedLinkedList (ELL):</b> mở rộng BLL với các method mới, hiện thực từ đầu theo interface mới <code>EnhancedListInterface</code>."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: `import java.util.*;

public interface EnhancedListInterface <E> {
    public boolean isEmpty();
    public int     size();
    public E       getFirst() throws NoSuchElementException;
    public boolean contains(E item);
    public void    addFirst(E item);
    public E       removeFirst() throws NoSuchElementException;
    public void    print();

    public ListNode <E> getHead();
    public void addAfter(ListNode <E> current, E item);
    public E    removeAfter(ListNode <E> current) throws NoSuchElementException;
    public E    remove(E item) throws NoSuchElementException;
}`
                    },
                    {
                      type: "paragraph",
                      text: "• <b>Các method mới so với <code>ListInterface</code>:</b> <code>getHead()</code>, <code>addAfter()</code>, <code>removeAfter()</code>, <code>remove()</code>."
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 8.3: ADDAFTER & REMOVEAFTER VISUALIZER */
            {
              id: "dsa-b2-sub-8-3",
              number: "8.3",
              title: "8.2 addAfter() & removeAfter() – Cách hoạt động & Quy ước",
              parts: [
                {
                  id: "dsa-b2-part-8-ell-ops",
                  label: "PHẦN VIII - MÔ PHỎNG ADDAFTER & REMOVEAFTER",
                  title: "Chèn & Xóa ở giữa Danh sách với con trỏ current",
                  content: [
                    {
                      type: "paragraph",
                      text: "• <b>addAfter(current, item):</b><br/>- Nếu <code>current != null</code>: tạo node mới <code>p</code>, nối <code>p.next = current.next</code>, rồi <code>current.next = p</code> (chèn ngay sau <code>current</code>).<br/>- Nếu <code>current == null</code>: quy ước là chèn vào <b>đầu</b> danh sách (giống <code>addFirst</code>)."
                    },
                    {
                      type: "paragraph",
                      text: "• <b>removeAfter(current):</b><br/>- Nếu <code>current != null</code>: xoá node <b>ngay sau</b> <code>current</code> (nối <code>current.next</code> với <code>nextPtr.next</code>, bỏ qua <code>nextPtr</code>).<br/>- Nếu <code>current == null</code>: quy ước xoá <b>head</b> (giống <code>removeFirst</code>).<br/>- Nếu không còn node để xoá &rarr; ném <code>NoSuchElementException</code>."
                    },
                    {
                      type: "component",
                      component: "EnhancedLinkedListVisualizer"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 8.4: REMOVE(ITEM) & TEST CLIENT WORKBENCH */
            {
              id: "dsa-b2-sub-8-4",
              number: "8.4",
              title: "8.2 remove(item) & Chương trình Test ELL",
              parts: [
                {
                  id: "dsa-b2-part-8-ell-test",
                  label: "PHẦN VIII - TÁI SỬ DỤNG CODE & TEST",
                  title: "Ý tưởng remove(item) & Mã nguồn IDE Workbench",
                  content: [
                    {
                      type: "paragraph",
                      text: "<b>remove(item) – Bài tập tự viết:</b> Ý tưởng là tìm <code>item</code> trong list (giữ 2 con trỏ <code>prev</code> và <code>curr</code> để duyệt), sau đó gọi <code>removeAfter(prev)</code> để xoá."
                    },
                    {
                      type: "component",
                      component: "ListIdeWorkbench"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION SUMMARY 4: TỔNG KẾT ELL */
            {
              id: "dsa-b2-sub-summary-4",
              number: "📌",
              title: "Cần nhớ Tổng hợp Enhanced LinkedList (ELL)",
              parts: [
                {
                  id: "dsa-b2-part-summary-ell",
                  label: "TỔNG KẾT ENHANCED LINKED LIST",
                  title: "2 Điểm nốt bắt buộc ghi nhớ",
                  content: [
                    {
                      type: "callout",
                      variant: "tip",
                      title: "📌 CẦN NHỚ ENHANCED LINKED LIST (ELL)",
                      text: "• <code>current == null</code> là quy ước đặc biệt: <code>addAfter(null, item)</code> = chèn đầu, <code>removeAfter(null)</code> = xoá đầu.<br/>• <code>remove(item)</code> nên tận dụng lại <code>removeAfter()</code> (nguyên tắc re-use code)."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* PHẦN VIII.3 - VIII.4: TAILED LINKED LIST (TLL) & SO SÁNH */
        {
          id: "dsa-b2-sec5",
          roman: "VIII.3–4",
          title: "Tailed Linked List (TLL) & Complexity Comparison",
          subsections: [
            /* SUBSECTION 8.5: KHÁI NIỆM TLL & CON TRỎ TAIL */
            {
              id: "dsa-b2-sub-8-5",
              number: "8.5",
              title: "8.3 Khái niệm Tailed Linked List (TLL)",
              parts: [
                {
                  id: "dsa-b2-part-8-tll-concept",
                  label: "PHẦN VIII - KHÁI NIỆM TLL",
                  title: "Lý do thêm con trỏ tail & Nguyên tắc No Free Lunch",
                  content: [
                    {
                      type: "paragraph",
                      text: "• Cải tiến thêm từ ELL: thêm thuộc tính <b><code>tail</code></b> (con trỏ tới node cuối) để <b>thêm vào cuối (addLast)</b> nhanh hơn, không cần duyệt hết list."
                    },
                    {
                      type: "paragraph",
                      text: "• <b>\"No free lunch\":</b> có thêm <code>tail</code> thì phải <b>bảo trì (maintain) <code>tail</code></b> trong mọi thao tác cập nhật."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: `class TailedLinkedList <E> implements EnhancedListInterface <E> {
    private ListNode <E> head = null;
    private ListNode <E> tail = null;
    private int num_nodes = 0;

    public ListNode <E> getTail() { return tail; }

    public void addFirst(E item) {
        head = new ListNode <E> (item, head);
        num_nodes++;
        if (num_nodes == 1)
            tail = head; // nếu là phần tử đầu tiên, tail cũng trỏ vào đây
    }
}`
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 8.6: ADDLAST() O(1) & DUAL POINTER VISUALIZER */
            {
              id: "dsa-b2-sub-8-6",
              number: "8.6",
              title: "8.3 addLast(item) O(1) & Con trỏ Dual Pointer (head & tail)",
              parts: [
                {
                  id: "dsa-b2-part-8-addlast-vis",
                  label: "PHẦN VIII - MÔ PHỎNG DUAL POINTER",
                  title: "Thao tác addLast() O(1) nhờ con trỏ tail",
                  content: [
                    {
                      type: "paragraph",
                      text: "• <b>Case 1 (<code>head != null</code>):</b> nối node mới vào sau <code>tail</code>, cập nhật <code>tail</code> trỏ tới node mới."
                    },
                    {
                      type: "paragraph",
                      text: "• <b>Case 2 (<code>head == null</code>, list rỗng):</b> node mới vừa là <code>head</code> vừa là <code>tail</code>."
                    },
                    {
                      type: "component",
                      component: "TailedLinkedListVisualizer"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 8.7: MA TRẬN 4 TRƯỜNG HỢP BIÊN TLL */
            {
              id: "dsa-b2-sub-8-7",
              number: "8.7",
              title: "8.3 Ma trận 4 Trường hợp Biên của TLL (addAfter & removeAfter)",
              parts: [
                {
                  id: "dsa-b2-part-8-tll-matrix",
                  label: "PHẦN VIII - MA TRẬN BOUNDARY CASES",
                  title: "4 Cases bảo trì con trỏ tail trong addAfter()",
                  content: [
                    {
                      type: "paragraph",
                      text: "Khi cài đặt <code>addAfter()</code> và <code>removeAfter()</code> trong TailedLinkedList, ta bắt buộc phải xét đủ 4 trường hợp để cập nhật con trỏ <code>tail</code> chính xác:"
                    },
                    {
                      type: "component",
                      component: "TllBoundaryMatrixCard"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 8.8: TIME COMPLEXITY SO SÁNH BLL VS TLL */
            {
              id: "dsa-b2-sub-8-8",
              number: "8.8",
              title: "8.4 Time / Space Complexity so sánh (BasicLinkedList vs TailedLinkedList)",
              parts: [
                {
                  id: "dsa-b2-part-8-complexity-comp",
                  label: "PHẦN VIII - BẢNG SO SÁNH COMPLEXITY",
                  title: "Đánh giá Hiệu năng BLL vs TLL & Re-use Code",
                  content: [
                    {
                      type: "component",
                      component: "TailedVsBasicComplexityCards"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION SUMMARY 5: TỔNG KẾT TLL */
            {
              id: "dsa-b2-sub-summary-5",
              number: "📌",
              title: "Cần nhớ Tổng hợp Tailed LinkedList (TLL)",
              parts: [
                {
                  id: "dsa-b2-part-summary-tll",
                  label: "TỔNG KẾT TAILED LINKED LIST",
                  title: "3 Điểm nóng bắt buộc ghi nhớ",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ 3 ĐIỂM NÓNG BẮT BUỘC GHI NHỚ (PHẦN VIII - TAILED LINKED LIST)",
                      text: "1. <b>Lý do thêm <code>tail</code>:</b> giúp <code>addLast()</code> giảm từ <b>O(n)</b> (duyệt hết list) xuống <b>O(1)</b>.<br/>2. <b>Cái giá phải trả (\"No free lunch\"):</b> phải cập nhật <code>tail</code> cẩn thận trong <b>mọi</b> hàm cập nhật (addAfter, removeAfter...) – rất dễ sai ở các boundary case.<br/>3. <b>Tái sử dụng code:</b> <code>removeFirst() = removeAfter(null)</code> – ví dụ điển hình của việc tái sử dụng code trong lập trình."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* PHẦN IX: OTHER VARIANTS (CIRCULAR LINKED LIST & DOUBLY LINKED LIST) */
        {
          id: "dsa-b2-sec6",
          roman: "IX",
          title: "Other Variants (Circular & Doubly Linked List)",
          subsections: [
            /* SUBSECTION 9.1: CIRCULAR LINKED LIST */
            {
              id: "dsa-b2-sub-9-1",
              number: "9.1",
              title: "9.1 Circular Linked List (Danh sách Liên kết Vòng)",
              parts: [
                {
                  id: "dsa-b2-part-9-cll",
                  label: "PHẦN IX - CIRCULAR LINKED LIST",
                  title: "Khái niệm & Ứng dụng Lặp vòng",
                  content: [
                    {
                      type: "paragraph",
                      text: "• Cho phép <b>lặp vòng qua list liên tục</b> (cycle through repeatedly), ví dụ: hệ thống <b>round-robin</b> để chia sẻ tài nguyên CPU."
                    },
                    {
                      type: "paragraph",
                      text: "• <b>Cách làm:</b> Thêm liên kết từ node <b>tail</b> của TailedLinkedList trỏ ngược về <b>head</b> (tạo thành vòng tròn khép kín)."
                    },
                    {
                      type: "paragraph",
                      text: "• <b>Khó khăn:</b> Bắt buộc phải xử lý đầy đủ mọi trường hợp cập nhật (insert/delete đầu/cuối) trong danh sách vòng để không làm đứt vòng."
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "📝 Bài tập tự tìm hiểu",
                      text: "Tự viết class <code>CircularLinkedList</code> dựa trên <code>TailedLinkedList</code>."
                    },
                    {
                      type: "component",
                      component: "CircularLinkedListVisualizer"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 9.2: DOUBLY LINKED LIST */
            {
              id: "dsa-b2-sub-9-2",
              number: "9.2",
              title: "9.2 Doubly Linked List & DListNode.java",
              parts: [
                {
                  id: "dsa-b2-part-9-dll",
                  label: "PHẦN IX - DOUBLY LINKED LIST",
                  title: "Khái niệm con trỏ prev & Mã nguồn DListNode",
                  content: [
                    {
                      type: "list",
                      items: [
                        "Linked list thông thường chỉ có con trỏ <code>next</code> để di chuyển <b>tiến (forward)</b>.",
                        "Cần thêm con trỏ <b><code>prev</code></b> để di chuyển <b>lùi (backward)</b>.",
                        "<b>\"No free lunch\":</b> Phải bảo trì con trỏ <code>prev</code> trong <b>tất cả</b> các method cập nhật (add, remove).",
                        "Cần class mới <b><code>DListNode</code></b> (thay vì <code>ListNode</code>) có thêm thuộc tính <code>prev</code>."
                      ]
                    },
                    {
                      type: "code",
                      language: "java",
                      caption: "DListNode.java — Cấu trúc Node 2 chiều (prev & next)",
                      code: `class DListNode <E> {
    /* data attributes */
    private E element;
    private DListNode <E> prev;
    private DListNode <E> next;

    /* constructors */
    public DListNode(E item) { this(item, null, null); }

    public DListNode(E item, DListNode <E> p, DListNode <E> n) {
        element = item; prev = p; next = n;
    }

    /* get the prev DListNode */
    public DListNode <E> getPrev() { return this.prev; }
    /* get the next DListNode */
    public DListNode <E> getNext() { return this.next; }

    /* get the element of the ListNode */
    public E getElement() { return this.element; }

    /* set the prev reference */
    public void setPrev(DListNode <E> p) { prev = p; }
    /* set the next reference */
    public void setNext(DListNode <E> n) { next = n; }
}`
                    },
                    {
                      type: "paragraph",
                      text: "• Doubly Linked List đầy đủ sẽ có cả <code>head</code> và <code>tail</code>, mỗi node giữ cả <code>prev</code> và <code>next</code>.<br/>• <i>(Bài tập tự tìm hiểu: viết class <code>DoublyLinkedList</code> với đầy đủ các thao tác)</i>"
                    },
                    {
                      type: "component",
                      component: "DoublyLinkedListVisualizer"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION SUMMARY 6: 📌 CẦN NHỚ IX */
            {
              id: "dsa-b2-sub-summary-6",
              number: "📌",
              title: "Cần nhớ Các biến thể Linked List (CLL & DLL)",
              parts: [
                {
                  id: "dsa-b2-part-summary-variants",
                  label: "TỔNG KẾT PHẦN IX",
                  title: "Điểm cốt lõi về Circular & Doubly Linked List",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 CẦN NHỚ BÀI HỌC CẤU TRÚC BIẾN THỂ (PHẦN IX)",
                      text: "1. <b>Circular Linked List:</b> <code>tail.next</code> trỏ về <code>head</code> thay vì <code>null</code>.<br/>2. <b>Doubly Linked List:</b> mỗi node có thêm con trỏ <code>prev</code> &rarr; duyệt được 2 chiều, nhưng tốn thêm bộ nhớ và phải bảo trì thêm <code>prev</code> ở mọi thao tác.<br/>3. Cả hai đều là bài tập về nhà (Homework) trong slide."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* PHẦN X–XI: JAVA API LINKEDLIST & REINVENT THE WHEEL */
        {
          id: "dsa-b2-sec7",
          roman: "X–XI",
          title: "Java API LinkedList & Reinvent the Wheel",
          subsections: [
            /* SUBSECTION 10.1: KHÁI NIỆM JAVA API LINKEDLIST */
            {
              id: "dsa-b2-sub-10-1",
              number: "10.1",
              title: "10.1 Khái niệm class java.util.LinkedList",
              parts: [
                {
                  id: "dsa-b2-part-10-concept",
                  label: "PHẦN X - JAVA API LINKEDLIST",
                  title: "Giới thiệu Class LinkedList trong Thư viện Chuẩn",
                  content: [
                    {
                      type: "list",
                      items: [
                        "<code>LinkedList&lt;E&gt;</code> là class <b>có sẵn trong thư viện Java</b> (package <code>java.util</code>) — là 1 cách hiện thực của <code>List</code> interface (interface chuẩn của Java, khác với <code>ListInterface</code> tự định nghĩa trong bài).",
                        "Có <b>nhiều method hơn</b> các phiên bản linked list tự viết trong bài; ngược lại, bài học cũng có 1 số method mà thư viện Java không có."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "danger",
                      title: "⚠️ LƯU Ý BẮT BUỘC KHI THI / LÀM BÀI LAB",
                      text: "Không nhầm lẫn class thư viện này với các class tự viết (<code>BasicLinkedList</code>, <code>EnhancedLinkedList</code>, <code>TailedLinkedList</code>) trong bài học — với bài thi/lab, <b>dùng đúng loại được yêu cầu</b>."
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 10.2: VÍ DỤ SỬ DỤNG TESTLINKEDLISTAPI.JAVA */
            {
              id: "dsa-b2-sub-10-2",
              number: "10.2",
              title: "10.2 Ví dụ sử dụng (TestLinkedListAPI.java)",
              parts: [
                {
                  id: "dsa-b2-part-10-code",
                  label: "PHẦN X - VÍ DỤ SỬ DỤNG JAVA API",
                  title: "Mã nguồn TestLinkedListAPI.java & Workbench",
                  content: [
                    {
                      type: "paragraph",
                      text: "Các method minh họa cơ bản: <code>add()</code>, <code>size()</code>, <code>get(i)</code>, <code>getFirst()</code>, <code>getLast()</code>, <code>addFirst()</code>, <code>addLast()</code>, <code>element()</code>, <code>removeFirst()</code>."
                    },
                    {
                      type: "component",
                      component: "JavaLinkedListApiWorkbench"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 11.1: TẠI SAO PHẢI REINVENT THE WHEEL? */
            {
              id: "dsa-b2-sub-11-1",
              number: "11.1",
              title: "11. Tại sao phải \"reinvent the wheel\"? (Tự viết lại dù đã có API)",
              parts: [
                {
                  id: "dsa-b2-part-11-reinvent",
                  label: "PHẦN XI - TỰ VIẾT LẠI CTDL",
                  title: "Lý do học sinh phải tự viết code cài đặt Linked List",
                  content: [
                    {
                      type: "callout",
                      variant: "info",
                      title: "❓ Câu hỏi thường gặp",
                      text: "<i>\"Đã có API rồi, sao còn phải tự viết code cài đặt linked list?\"</i>"
                    },
                    {
                      type: "paragraph",
                      text: "<b>Lý do cốt lõi:</b> Viết code giúp hiểu <b>sâu (in-depth)</b> về cấu trúc dữ liệu và các thao tác của nó. Sự hiểu biết này giúp:"
                    },
                    {
                      type: "list",
                      items: [
                        "Đánh giá được <b>độ phức tạp (complexity analysis)</b> (sẽ học ở bài sau).",
                        "Sử dụng API <b>hiệu quả</b> hơn, chọn đúng cấu trúc phù hợp cho bài toán thực tế."
                      ]
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION SUMMARY 7: 📌 CẦN NHỚ X-XI */
            {
              id: "dsa-b2-sub-summary-7",
              number: "📌",
              title: "Cần nhớ Phần X & XI",
              parts: [
                {
                  id: "dsa-b2-part-summary-10-11",
                  label: "TỔNG KẾT PHẦN X & XI",
                  title: "Phân biệt Java API vs Class Tự Viết",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 CẦN NHỚ PHẦN X & XI",
                      text: "1. <code>LinkedList&lt;E&gt;</code> trong <code>java.util</code> là class <b>sẵn có</b>, không phải class tự viết trong bài.<br/>2. Cần phân biệt rõ khi làm bài tập/thi: <b>dùng đúng class nào theo đúng đề bài yêu cầu</b>."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* PHẦN XII–XIV: SUMMARY, HOMEWORK & VISUALIZING TOOLS */
        {
          id: "dsa-b2-sec8",
          roman: "XII–XIV",
          title: "Summary (Tổng kết), Homework & Công cụ trực quan",
          subsections: [
            /* SUBSECTION 12.1: SUMMARY TỔNG KẾT BÀI 2 */
            {
              id: "dsa-b2-sub-12-1",
              number: "12.1",
              title: "12. Summary (Tổng kết Bài 2: List ADT)",
              parts: [
                {
                  id: "dsa-b2-part-12-summary",
                  label: "PHẦN XII - TỔNG KẾT BÀI 2",
                  title: "3 Khó khăn khi tự tạo Cấu trúc Dữ liệu & Mind Map",
                  content: [
                    {
                      type: "paragraph",
                      text: "Trong bài học này, ta đã học cách tạo cấu trúc dữ liệu <b>của riêng mình (our own)</b>. Khi tự tạo cấu trúc dữ liệu, thường gặp <b>3 khó khăn lớn</b>:"
                    },
                    {
                      type: "table",
                      headers: ["STT", "Khó khăn cốt lõi", "Chi tiết & Giải pháp"],
                      rows: [
                        [
                          "<b>1</b>",
                          "<b>Tái sử dụng code (re-use)</b>",
                          "Dễ gây nhầm lẫn về kế thừa (inheritance confusion)."
                        ],
                        [
                          "<b>2</b>",
                          "<b>Thao tác con trỏ (pointers/references)</b>",
                          "<b>Thứ tự câu lệnh rất quan trọng!</b> Sai thứ tự &rarr; kết quả sai, mất con trỏ."
                        ],
                        [
                          "<b>3</b>",
                          "<b>Xử lý Boundary Cases</b>",
                          "Phải cẩn thận với <b>tất cả boundary cases</b> (list rỗng, 1 phần tử, chèn/xóa đầu/cuối)."
                        ]
                      ]
                    },
                    {
                      type: "callout",
                      variant: "success",
                      title: "💡 Lời khuyên vàng khi học CTDL",
                      text: "<b>Vẽ hình (drawings)</b> rất hữu ích để hiểu rõ các case (điểm 3), từ đó biết cái gì có thể dùng/thao tác (điểm 1, 2)."
                    },
                    {
                      type: "paragraph",
                      text: "• Sau bài này, các bài tiếp theo sẽ tương tự về bản chất — nên sẽ dễ hơn.<br/>• Nên tự thử thêm method mới vào các class linked list đã học, hoặc mở rộng <code>ListNode</code> thành loại node khác."
                    },
                    {
                      type: "component",
                      component: "DsaBai2SummaryMindMap"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 13.1: HOMEWORK (BÀI TẬP VỀ NHÀ) */
            {
              id: "dsa-b2-sub-13-1",
              number: "13.1",
              title: "13. Homework (Bài tập về nhà)",
              parts: [
                {
                  id: "dsa-b2-part-13-hw",
                  label: "PHẦN XIII - BÀI TẬP VỀ NHÀ",
                  title: "Yêu cầu Lập trình Tự luyện",
                  content: [
                    {
                      type: "list",
                      items: [
                        "<b>Bài tập 1:</b> Cài đặt hoàn chỉnh <b>Doubly Linked List</b>.",
                        "<b>Bài tập 2:</b> Cài đặt <b>Single Sorted Linked List</b> (danh sách liên kết đơn tự động sắp xếp theo thứ tự tăng dần)."
                      ]
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 14.1: CÔNG CỤ TRỰC QUAN HOÁ */
            {
              id: "dsa-b2-sub-14-1",
              number: "14.1",
              title: "14. Công cụ trực quan hoá (Visualising Data Structures)",
              parts: [
                {
                  id: "dsa-b2-part-14-tools",
                  label: "PHẦN XIV - CÔNG CỤ TRỰC QUAN",
                  title: "Trang web Mô phỏng Trực quan Khuyên dùng",
                  content: [
                    {
                      type: "paragraph",
                      text: "Sinh viên có thể sử dụng các website trực quan hoá nổi tiếng sau để thực hành và quan sát luồng hoạt động:"
                    },
                    {
                      type: "list",
                      items: [
                        "🔗 <a href='http://visualgo.net' target='_blank' rel='noreferrer' class='text-purple-600 font-bold underline'>VisuAlgo.net</a> — chọn mục <i>\"Linked List, Stack, Queue\"</i>.",
                        "🔗 <a href='http://www.cs.usfca.edu/~galles/visualization/Algorithms.html' target='_blank' rel='noreferrer' class='text-purple-600 font-bold underline'>USF Data Structure Visualisations</a> — trang mô phỏng của Đại học USFCA."
                      ]
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION SUMMARY 8: 📌 CẦN NHỚ TỔNG KẾT CẢ BÀI */
            {
              id: "dsa-b2-sub-summary-8",
              number: "📌",
              title: "Cần nhớ (Tổng kết cả bài - Trọng tâm ôn thi)",
              parts: [
                {
                  id: "dsa-b2-part-summary-all",
                  label: "TRỌNG TÂM ÔN THI BÀI 2",
                  title: "⭐ TỔNG KẾT TOÀN BỘ BÀI 2: LIST ADT",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ CẦN NHỚ (TỔNG KẾT CẢ BÀI — TRỌNG TÂM ÔN THI)",
                      text: "1. <b>3 khó khăn khi tự cài đặt cấu trúc dữ liệu:</b> re-use code, thao tác con trỏ đúng thứ tự, xử lý đủ boundary cases.<br/>2. <b>Nắm vững quan hệ giữa các class:</b> <code>ListNode</code> / <code>DListNode</code> &rarr; <code>BasicLinkedList</code> / <code>EnhancedLinkedList</code> / <code>TailedLinkedList</code> (implements <code>ListInterface</code> / <code>EnhancedListInterface</code>).<br/>3. <b>So sánh Array vs Linked List:</b> Array có <code>getFirst()</code> nhanh nhưng <code>add/removeFirst()</code> chậm (O(n)); Linked List thì ngược lại nhanh ở đầu list (O(1)) nhưng truy cập ngẫu nhiên chậm.<br/>4. <b><code>TailedLinkedList</code></b> tối ưu <code>addLast()</code> thành O(1) nhờ con trỏ <code>tail</code>, đổi lại phải bảo trì <code>tail</code> trong mọi update.<br/>5. <b>Circular Linked List & Doubly Linked List</b> là bài tập về nhà (Homework)."
                    },
                    {
                      type: "component",
                      component: "LinkedListArchitectureHierarchyStudio"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       BÀI 3: STACK & QUEUE ADT
       ============================================================ */
    {
      id: "dsa-b3",
      title: "Bài 3",
      subtitle: "Stack & Queue ADT",
      sections: [
        /* ============================================================
           PHẦN A: STACK — 1. STACK ADT (ABSTRACT DATA TYPE)
           ============================================================ */
        {
          id: "dsa-b3-sec1",
          roman: "I",
          title: "Stack ADT (Khái niệm, Operations, Ứng dụng & Interface)",
          subsections: [
            /* SUBSECTION 1.0: HERO BANNER */
            {
              id: "dsa-b3-sub-1-0",
              number: "1.0",
              title: "Giới thiệu Bài 3: Stack & Queue ADT",
              parts: [
                {
                  id: "dsa-b3-part-hero",
                  label: "TỰA ĐỀ & TỔNG QUAN BÀI 3",
                  title: "Stack & Queue — Cấu trúc dữ liệu chuyên biệt",
                  content: [
                    {
                      type: "component",
                      component: "DsaStackQueueHeroBanner"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 1.1: KHÁI NIỆM STACK */
            {
              id: "dsa-b3-sub-1-1",
              number: "1.1",
              title: "1.1 Khái niệm Stack",
              parts: [
                {
                  id: "dsa-b3-part-1-1-concept",
                  label: "PHẦN A - STACK ADT",
                  title: "Nguyên lý LIFO (Last-In-First-Out)",
                  content: [
                    {
                      type: "callout",
                      variant: "info",
                      title: "1.1 Khái niệm Stack (Ngăn xếp)",
                      text: "<b>Stack</b> là một cấu trúc dữ liệu tuyến tính được truy cập theo quy tắc <b>Last-In-First-Out (LIFO)</b> – phần tử được đưa vào <b>sau cùng</b> sẽ là phần tử được lấy ra <b>đầu tiên</b>.<br/><b>Ví dụ minh họa:</b> Chồng sách (stack of books) hay chồng đĩa ăn – quyển sách hoặc chiếc đĩa được đặt lên trên cùng sau cùng sẽ được nhấc ra đầu tiên."
                    },
                    {
                      type: "bullets",
                      title: "Các đặc trưng nguyên lý cốt lõi của Stack",
                      items: [
                        "<b>Quy tắc LIFO:</b> Phần tử mới nhất nạp vào Stack luôn nằm ở vị trí <b>Đỉnh Stack (Top)</b>.",
                        "<b>Điểm truy cập duy nhất:</b> Mọi thao tác thêm (<code>push</code>), xóa (<code>pop</code>) và xem (<code>peek</code>) chỉ được phép diễn ra tại duy nhất một đầu gọi là <b>Top of Stack</b>.",
                        "<b>Ví dụ thực tế kinh điển:</b> Chức năng <i>Undo (Ctrl+Z)</i> trong phần mềm soạn thảo, nút <i>Back</i> của trình duyệt web, Call Stack quản lý hàm gọi trong ngôn ngữ lập trình."
                      ]
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 1.2: CÁC THAO TÁC CHÍNH */
            {
              id: "dsa-b3-sub-1-2",
              number: "1.2",
              title: "1.2 Các thao tác chính (Operations)",
              parts: [
                {
                  id: "dsa-b3-part-1-2-ops",
                  label: "PHẦN A - CÁC PHƯƠNG THỨC NÒNG CỐT",
                  title: "3 Thao tác cơ bản: push, pop, peek",
                  content: [
                    {
                      type: "table",
                      headers: ["Thao tác (Method)", "Mô tả chức năng & Hành vi"],
                      rows: [
                        [
                          "<b><code>push(item)</code></b>",
                          "Đưa phần tử mới vào <b>đỉnh stack (top)</b>."
                        ],
                        [
                          "<b><code>pop()</code></b>",
                          "Lấy và <b>xóa phần tử ở đỉnh stack</b> (ném exception nếu rỗng)."
                        ],
                        [
                          "<b><code>peek()</code></b>",
                          "<b>Xem phần tử ở đỉnh stack</b> mà không xóa phần tử đó."
                        ]
                      ]
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 1.3: ỨNG DỤNG CỦA STACK */
            {
              id: "dsa-b3-sub-1-3",
              number: "1.3",
              title: "1.3 Ứng dụng của Stack (Uses)",
              parts: [
                {
                  id: "dsa-b3-part-1-3-uses",
                  label: "PHẦN A - ỨNG DỤNG THỰC TẾ",
                  title: "5 Ứng dụng kinh điển trong Khoa học Máy tính",
                  content: [
                    {
                      type: "list",
                      items: [
                        "<b>Gọi hàm (Calling a function):</b> Trước khi gọi hàm con, trạng thái tính toán & địa chỉ trả về được lưu vào stack để biết chỗ quay lại.",
                        "<b>Đệ quy (Recursion):</b> Lưu các stack frames trong bộ nhớ.",
                        "<b>Khớp dấu ngoặc (Matching parentheses):</b> Kiểm tra tính cân bằng của ngoặc mở/đóng trong trình biên dịch.",
                        "<b>Tính biểu thức số học (vd: <code>a + b - c</code>):</b> Postfix calculation (tính biểu thức hậu tố) & Infix to postfix conversion (chuyển trung tố &rarr; hậu tố).",
                        "<b>Duyệt mê cung (Traversing a maze):</b> Thuật toán quay lùi (backtracking)."
                      ]
                    },
                    {
                      type: "component",
                      component: "StackApplicationsGrid"
                    },
                    {
                      type: "component",
                      component: "StackParenthesesVisualizer"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 1.4 & 1.5: INTERFACE & USAGE */
            {
              id: "dsa-b3-sub-1-4",
              number: "1.4",
              title: "1.4 Interface StackADT & 1.5 Ví dụ minh họa (Usage)",
              parts: [
                {
                  id: "dsa-b3-part-1-4-interface",
                  label: "PHẦN A - HỢP ĐỒNG INTERFACE",
                  title: "StackADT.java & Chương trình mẫu TestUsage.java",
                  content: [
                    {
                      type: "paragraph",
                      text: "Về bản chất trong Java, các thao tác <code>push</code>/<code>pop</code> là thao tác trên các <b>tham chiếu (references)</b> tới các đối tượng (như <code>\"a\"</code>, <code>\"b\"</code>, <code>\"c\"</code>...), chứ không phải sao chép bản thân giá trị."
                    },
                    {
                      type: "component",
                      component: "StackInterfaceWorkbench"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION SUMMARY 1: 📌 CẦN NHỚ MỤC 1 */
            {
              id: "dsa-b3-sub-summary-1",
              number: "📌",
              title: "Cần nhớ Mục 1 (Stack ADT)",
              parts: [
                {
                  id: "dsa-b3-part-summary-1",
                  label: "TỔNG KẾT MỤC 1",
                  title: "Ghi nhớ cốt lõi về Stack ADT",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 CẦN NHỚ BÀI HỌC STACK ADT (MỤC 1)",
                      text: "1. <b>Stack = LIFO</b> (Last-In-First-Out), 3 thao tác chính: <code>push</code>, <code>pop</code>, <code>peek</code>.<br/>2. <b><code>pop()</code> / <code>peek()</code> trên stack rỗng</b> &rarr; ném <code>EmptyStackException</code>.<br/>3. <b>Ứng dụng kinh điển:</b> gọi hàm/đệ quy, khớp ngoặc, tính biểu thức hậu tố."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           PHẦN A: STACK — 2. CÀI ĐẶT STACK BẰNG ARRAY
           ============================================================ */
        {
          id: "dsa-b3-sec2",
          roman: "II",
          title: "Cài đặt Stack bằng Array (Stack Implementation: Array)",
          subsections: [
            /* SUBSECTION 2.1: CÁCH HOẠT ĐỘNG */
            {
              id: "dsa-b3-sub-2-1",
              number: "2.1",
              title: "2.1 Cách hoạt động",
              parts: [
                {
                  id: "dsa-b3-part-2-1-concept",
                  label: "PHẦN A - STACK BẰNG ARRAY",
                  title: "Mảng arr[] & Con trỏ top",
                  content: [
                    {
                      type: "list",
                      items: [
                        "Dùng một <b>mảng (array)</b> + con trỏ <b><code>top</code></b> (chỉ số phần tử ở đỉnh stack).",
                        "<b><code>push</code>:</b> tăng <code>top</code> rồi ghi phần tử vào <code>arr[top]</code>.",
                        "<b><code>pop</code>:</b> lấy <code>arr[top]</code> rồi giảm <code>top</code>.",
                        "Khi mảng đầy &rarr; cần <b>enlarge (mở rộng mảng)</b>."
                      ]
                    },
                    {
                      type: "component",
                      component: "StackArrayVisualizer"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 2.2 & 2.3: CODE KHỞI TẠO, PEEK & POP */
            {
              id: "dsa-b3-sub-2-2",
              number: "2.2",
              title: "2.2 Code: Khởi tạo, empty(), peek() & pop()",
              parts: [
                {
                  id: "dsa-b3-part-2-2-code",
                  label: "PHẦN A - MÃ NGUỒN STACKARR.JAVA",
                  title: "Khởi tạo top = -1 & Tái sử dụng peek() trong pop()",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      caption: "StackArr.java — Khởi tạo & Các method cơ bản",
                      code: `import java.util.*;

class StackArr <E> implements StackADT <E> {
    private E[] arr;
    private int top;
    private int maxSize;
    private final int INITSIZE = 1000;

    public StackArr() {
        arr = (E[]) new Object[INITSIZE]; // tạo mảng kiểu E
        top = -1; // stack rỗng -> top không trỏ vào phần tử hợp lệ
        maxSize = INITSIZE;
    }

    public boolean empty() {
        if (top < 0) return true;
        else return false;
    }

    public E peek() throws EmptyStackException {
        if (!empty()) return arr[top];
        else throw new EmptyStackException();
    }

    public E pop() throws EmptyStackException {
        E obj = peek(); // pop tái sử dụng peek()
        top--;
        return obj;
    }
}`
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 2.4: PUSH VÀ XỬ LÝ TRÀN */
            {
              id: "dsa-b3-sub-2-4",
              number: "2.4",
              title: "2.4 Code: push() và xử lý tràn (enlargeArr)",
              parts: [
                {
                  id: "dsa-b3-part-2-4-enlarge",
                  label: "PHẦN A - XỬ LÝ TRÀN MẢNG",
                  title: "Phương thức push() & enlargeArr()",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      caption: "push() và enlargeArr() trong StackArr.java",
                      code: `public void push(E obj) {
    if (top >= maxSize - 1) enlargeArr(); // mảng đầy -> mở rộng
    top++;
    arr[top] = obj;
}

private void enlargeArr() {
    // Khi mảng không còn đủ chỗ, nhân đôi kích thước mảng
    // để chứa thêm phần tử mới
    int newSize = 2 * maxSize;
    E[] x = (E[]) new Object[newSize];

    for (int j = 0; j < maxSize; j++) {
        x[j] = arr[j];
    }
    maxSize = newSize;
    arr = x;
}`
                    },
                    {
                      type: "component",
                      component: "ArrayEnlargeVisualizer"
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION 2.5: TIME / SPACE COMPLEXITY */
            {
              id: "dsa-b3-sub-2-5",
              number: "2.5",
              title: "2.5 Time / Space Complexity",
              parts: [
                {
                  id: "dsa-b3-part-2-5-complexity",
                  label: "PHẦN A - ĐÁNH GIÁ HIỆU NĂNG",
                  title: "Độ Phức Tạp Thời Gian & Không Gian của StackArr",
                  content: [
                    {
                      type: "table",
                      headers: ["Thao tác (Method)", "Time Complexity", "Ghi chú & Đánh giá"],
                      rows: [
                        [
                          "<b><code>push</code>, <code>pop</code>, <code>peek</code>, <code>empty</code></b>",
                          "<b>O(1)</b>",
                          "Trung bình (amortized), vì thỉnh thoảng mới phải gọi <code>enlargeArr()</code>."
                        ],
                        [
                          "<b><code>enlargeArr()</code></b>",
                          "<b>O(n)</b>",
                          "Khi xảy ra, phải sao chép toàn bộ $n$ phần tử từ mảng cũ sang mảng mới."
                        ],
                        [
                          "<b>Space Complexity</b>",
                          "<b>O(n)</b>",
                          "Với $n$ là số lượng phần tử lưu trong Stack."
                        ]
                      ]
                    }
                  ]
                }
              ]
            },

            /* SUBSECTION SUMMARY 2: 📌 CẦN NHỚ MỤC 2 */
            {
              id: "dsa-b3-sub-summary-2",
              number: "📌",
              title: "Cần nhớ Mục 2 (Stack Implementation: Array)",
              parts: [
                {
                  id: "dsa-b3-part-summary-2",
                  label: "TỔNG KẾT MỤC 2",
                  title: "Ghi nhớ cốt lõi cài đặt Stack bằng Array",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 CẦN NHỚ CÀI ĐẶT STACK BẰNG ARRAY (MỤC 2)",
                      text: "1. <b><code>top = -1</code></b> nghĩa là Stack rỗng.<br/>2. <b><code>push</code> cần kiểm tra tràn mảng</b> (<code>top >= maxSize - 1</code>) &rarr; gọi <code>enlargeArr()</code> nhân đôi kích thước.<br/>3. <b><code>enlargeArr()</code> là private method</b>."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* SECTION III: CÀI ĐẶT STACK BẰNG LINKED LIST */
        {
          id: "dsa-b3-sec3",
          roman: "III",
          title: "Cài đặt Stack bằng Linked List",
          subsections: [
            /* 3.1: HAI CÁCH ĐỊNH NGHĨA CLASS */
            {
              id: "dsa-b3-sub-3-1",
              number: "3.1",
              title: "3.1 Hai cách định nghĩa class (Composition vs Inheritance)",
              parts: [
                {
                  id: "dsa-b3-part-3-1-def",
                  label: "PHẦN A - LÝ THUYẾT OOP",
                  title: "Composition (Kết hợp) vs Inheritance (Kế thừa)",
                  content: [
                    {
                      type: "component",
                      component: "CompositionVsInheritanceUML"
                    }
                  ]
                }
              ]
            },

            /* 3.2 & 3.3: ÔN LẠI LISTNODE VÀ BASICLINKEDLIST */
            {
              id: "dsa-b3-sub-3-2-3-3",
              number: "3.2–3.3",
              title: "3.2 & 3.3 Ôn lại ListNode & BasicLinkedList (Bài trước)",
              parts: [
                {
                  id: "dsa-b3-part-3-2-3-3-review",
                  label: "PHẦN A - ÔN LẠI KIẾN THỨC",
                  title: "Mã nguồn ListNode.java & BasicLinkedList.java",
                  content: [
                    {
                      type: "component",
                      component: "StackLinkedListReviewAccordion"
                    }
                  ]
                }
              ]
            },

            /* 3.4 & 3.5: CÁCH 1 (COMPOSITION) VS CÁCH 2 (INHERITANCE) */
            {
              id: "dsa-b3-sub-3-4-3-5",
              number: "3.4–3.5",
              title: "3.4 & 3.5 Cài đặt StackLL (Composition) & StackLLE (Inheritance)",
              parts: [
                {
                  id: "dsa-b3-part-3-4-3-5-code",
                  label: "PHẦN A - CHI TIẾT CÀI ĐẶT",
                  title: "So sánh StackLL.java vs StackLLE.java",
                  content: [
                    {
                      type: "component",
                      component: "StackLLDualWorkbench"
                    },
                    {
                      type: "component",
                      component: "LinkedListStackVisualizer"
                    }
                  ]
                }
              ]
            },

            /* 3.6: VÍ DỤ DÙNG STACK */
            {
              id: "dsa-b3-sub-3-6",
              number: "3.6",
              title: "3.6 Ví dụ dùng Stack (chọn 1 trong 4 cách cài đặt)",
              parts: [
                {
                  id: "dsa-b3-part-3-6-test",
                  label: "PHẦN A - CHƯƠNG TRÌNH MẪU",
                  title: "TestStack.java Playground với 4 Implementations",
                  content: [
                    {
                      type: "component",
                      component: "TestStackSwitchWorkbench"
                    }
                  ]
                }
              ]
            },

            /* 3.7: TIME / SPACE COMPLEXITY (LINKED LIST) */
            {
              id: "dsa-b3-sub-3-7",
              number: "3.7",
              title: "3.7 Time / Space Complexity (Linked List)",
              parts: [
                {
                  id: "dsa-b3-part-3-7-complexity",
                  label: "PHẦN A - ĐÁNH GIÁ & TỔNG KẾT",
                  title: "Độ phức tạp và 📌 Cần nhớ Mục 3",
                  content: [
                    {
                      type: "component",
                      component: "StackLLComplexityCards"
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* SECTION IV: JAVA.UTIL.STACK<E> */
        {
          id: "dsa-b3-sec4",
          roman: "IV",
          title: "Lớp java.util.Stack<E>",
          subsections: [
            {
              id: "dsa-b3-sub-4-1",
              number: "4.1",
              title: "4.1 Constructor & Method Summary",
              parts: [
                {
                  id: "dsa-b3-part-4-1-api",
                  label: "PHẦN A - THƯ VIỆN CHUẨN JAVA",
                  title: "Phương thức sẵn có trong java.util.Stack",
                  content: [
                    {
                      type: "paragraph",
                      text: "<b><code>java.util.Stack&lt;E&gt;</code></b> là class Stack có sẵn trong thư viện chuẩn Java (kế thừa từ <code>Vector</code>)."
                    },
                    {
                      type: "component",
                      component: "JavaUtilStackApiCard"
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* SECTION V: ỨNG DỤNG 1 - KHỚP DẤU NGOẶC */
        {
          id: "dsa-b3-sec5",
          roman: "V",
          title: "Ứng dụng 1: Khớp dấu ngoặc (Bracket Matching)",
          subsections: [
            {
              id: "dsa-b3-sub-5-1",
              number: "5.1–5.3",
              title: "5. Khái niệm, Thuật toán & Trực quan hoá Khớp dấu ngoặc",
              parts: [
                {
                  id: "dsa-b3-part-5-1-algo",
                  label: "PHẦN A - THUẬT TOÁN & BỘ MÔ PHỎNG",
                  title: "Kiểm tra tính cân bằng của các cặp dấu ngoặc",
                  content: [
                    {
                      type: "callout",
                      variant: "info",
                      title: "5.1 Khái niệm Khớp dấu ngoặc",
                      text: "Đảm bảo các cặp dấu ngoặc được khớp đúng.<br/>• <b>Ví dụ hợp lệ:</b> <code>{a, (b+[4])*3, d+[5]}</code><br/>• <b>Ví dụ sai:</b><br/>&nbsp;&nbsp;- <code>'(..)..)'</code> &rarr; quá nhiều dấu đóng<br/>&nbsp;&nbsp;- <code>'(..(..)'</code> &rarr; quá nhiều dấu mở<br/>&nbsp;&nbsp;- <code>'[..(..]..)'</code> &rarr; khớp sai loại ngoặc (mismatched brackets)"
                    },
                    {
                      type: "component",
                      component: "StackParenthesesVisualizer"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "❓ Câu hỏi ôn tập & Thuật toán",
                      text: "<b>Thuật toán:</b> Tạo stack rỗng ➔ Với mỗi ký tự: Nếu là dấu mở &rarr; push vào stack; Nếu là dấu đóng &rarr; pop từ stack (nếu không khớp hoặc underflow &rarr; báo lỗi). Sau khi duyệt hết mà stack không rỗng &rarr; báo lỗi.<br/><br/><b>Câu hỏi:</b> Dòng cuối (<i>'stack không rỗng'</i> sau khi duyệt hết) kiểm tra loại lỗi nào?<br/>👉 <b>Đáp án:</b> Quá nhiều dấu mở (too many opening brackets)."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* SECTION VI: ỨNG DỤNG 2 - BIỂU THỨC SỐ HỌC */
        {
          id: "dsa-b3-sec6",
          roman: "VI",
          title: "Ứng dụng 2: Biểu thức số học (Arithmetic Expression)",
          subsections: [
            /* 6.1 & 6.2 */
            {
              id: "dsa-b3-sub-6-1-6-2",
              number: "6.1–6.2",
              title: "6.1 & 6.2 Thuật ngữ & Dạng Infix - Prefix - Postfix",
              parts: [
                {
                  id: "dsa-b3-part-6-1-terms",
                  label: "PHẦN A - LÝ THUYẾT & SO SÁNH",
                  title: "Các dạng biểu thức & Quy tắc ưu tiên toán tử",
                  content: [
                    {
                      type: "paragraph",
                      text: "Ví dụ biểu thức <code>a = b + c * d</code>:<br/>• <b>Operand (toán hạng):</b> <code>a, b, c, d</code><br/>• <b>Operator (toán tử):</b> <code>=, +, -, *, /, %</code><br/>• <b>Precedence rules (quy tắc ưu tiên):</b> <code>*</code> và <code>/</code> có độ ưu tiên cao hơn <code>+</code> và <code>-</code>. Với các toán tử cùng độ ưu tiên &rarr; xử lý từ trái sang phải."
                    },
                    {
                      type: "component",
                      component: "InfixPrefixPostfixConverter"
                    }
                  ]
                }
              ]
            },

            /* 6.3: TÍNH POSTFIX */
            {
              id: "dsa-b3-sub-6-3",
              number: "6.3",
              title: "6.3 Thuật toán tính giá trị biểu thức Postfix",
              parts: [
                {
                  id: "dsa-b3-part-6-3-eval",
                  label: "PHẦN A - BỘ MÔ PHỎNG TÍNH POSTFIX",
                  title: "Dùng Stack để tính trực tiếp giá trị hậu tố",
                  content: [
                    {
                      type: "component",
                      component: "PostfixEvaluatorVisualizer"
                    }
                  ]
                }
              ]
            },

            /* 6.4 - 6.6: CHUYỂN INFIX TO POSTFIX */
            {
              id: "dsa-b3-sub-6-4-6-6",
              number: "6.4–6.6",
              title: "6.4–6.6 Thuật toán & Mã nguồn chuyển Infix ➔ Postfix",
              parts: [
                {
                  id: "dsa-b3-part-6-4-6-6-animator",
                  label: "PHẦN A - BỘ MÔ PHỎNG CHUYỂN ĐỔI",
                  title: "Mô phỏng 12 bước ví dụ a - (b + c * d) / e & Code Java",
                  content: [
                    {
                      type: "component",
                      component: "InfixToPostfixAnimator"
                    }
                  ]
                }
              ]
            },

            /* 6.7: COMPLEXITY & CẦN NHỚ */
            {
              id: "dsa-b3-sub-6-7",
              number: "6.7",
              title: "6.7 Time / Space Complexity & 📌 Cần nhớ Tổng hợp",
              parts: [
                {
                  id: "dsa-b3-part-6-7-summary",
                  label: "PHẦN A - ĐÁNH GIÁ & TỔNG KẾT MỤC IV–VI",
                  title: "Độ phức tạp và Ghi nhớ các ứng dụng của Stack",
                  content: [
                    {
                      type: "component",
                      component: "StackApplicationsSummaryCards"
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           PHẦN B: QUEUE — SECTION VII: QUEUE ADT
           ============================================================ */
        {
          id: "dsa-b3-sec7",
          roman: "VII",
          title: "Queue ADT (Khái niệm FIFO, Thao tác, Ứng dụng & Interface)",
          subsections: [
            /* 6.1 - 6.3 */
            {
              id: "dsa-b3-sub-7-1",
              number: "6.1–6.3",
              title: "6.1–6.3 Khái niệm FIFO, Thao tác chính & Ứng dụng của Queue",
              parts: [
                {
                  id: "dsa-b3-part-7-1-concept",
                  label: "PHẦN B - QUEUE ADT",
                  title: "Nguyên lý First-In-First-Out (FIFO)",
                  content: [
                    {
                      type: "callout",
                      variant: "info",
                      title: "6.1 Khái niệm Queue",
                      text: "<b>Queue</b> là tập hợp dữ liệu được truy cập theo kiểu <b>First-In-First-Out (FIFO)</b> – vào trước ra trước (giống như hàng người xếp hàng mua vé)."
                    },
                    {
                      type: "bullets",
                      title: "6.2 Các thao tác chính (Operations)",
                      items: [
                        "<b>offer(item)</b> (hay <code>enqueue</code>): thêm phần tử vào <b>cuối (back)</b> hàng đợi.",
                        "<b>poll()</b> (hay <code>dequeue</code>): lấy và xóa phần tử ở <b>đầu (front)</b> hàng đợi.",
                        "<b>peek()</b>: xem phần tử ở <b>đầu (front)</b> hàng đợi (không xóa)."
                      ]
                    },
                    {
                      type: "bullets",
                      title: "6.3 Ứng dụng của Queue (Uses)",
                      items: [
                        "Hàng đợi in ấn (Print queue).",
                        "Mô phỏng (Simulations).",
                        "Duyệt cây theo chiều rộng (Breadth-first traversal of trees)."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⚠️ Cảnh báo bẫy thi trắc nghiệm",
                      text: "<b>Kiểm tra Palindrome</b> – chỉ mang tính minh họa trong một số ví dụ, <b>KHÔNG PHẢI ứng dụng thực tế</b> tiêu biểu của Queue!"
                    }
                  ]
                }
              ]
            },

            /* 6.4: INTERFACE QUEUE ADT */
            {
              id: "dsa-b3-sub-7-2",
              number: "6.4",
              title: "6.4 Interface QueueADT<E>",
              parts: [
                {
                  id: "dsa-b3-part-7-2-interface",
                  label: "PHẦN B - KHUÔN MẪU GIAO DIỆN",
                  title: "Khai báo Interface QueueADT trong Java",
                  content: [
                    {
                      type: "paragraph",
                      text: "Khai báo Giao diện chuẩn cho QueueADT:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: `// QueueADT.java
import java.util.*;

public interface QueueADT <E> {
    // true nếu queue không có phần tử nào
    public boolean isEmpty();
    
    // trả về phần tử ở đầu queue
    public E peek();
    
    // xóa và trả về phần tử ở đầu queue (còn gọi là dequeue)
    public E poll();
    
    // thêm phần tử vào cuối queue (còn gọi là enqueue)
    public boolean offer(E item);
}`
                    }
                  ]
                }
              ]
            },

            /* 6.5: VÍ DỤ MINH HỌA (USAGE) & STEPPER */
            {
              id: "dsa-b3-sub-7-3",
              number: "6.5",
              title: "6.5 Ví dụ minh họa Usage & Bộ mô phỏng Stepper",
              parts: [
                {
                  id: "dsa-b3-part-7-3-usage",
                  label: "PHẦN B - TRỰC QUAN HÓA THỰC THI",
                  title: "Duyệt từng bước chuỗi lệnh offer / poll / peek",
                  content: [
                    {
                      type: "component",
                      component: "QueueFifoVisualizer"
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           PHẦN B: QUEUE — SECTION VIII: CÀI ĐẶT QUEUE BẰNG ARRAY
           ============================================================ */
        {
          id: "dsa-b3-sec8",
          roman: "VIII",
          title: "Cài đặt Queue bằng Array (Circular Array, Full/Empty & Code Java)",
          subsections: [
            /* 7.1 & 7.2: CIRCULAR ARRAY */
            {
              id: "dsa-b3-sub-8-1",
              number: "7.1–7.2",
              title: "7.1 & 7.2 Cách hoạt động cơ bản & Circular Array (Mảng tuần hoàn)",
              parts: [
                {
                  id: "dsa-b3-part-8-1-circular",
                  label: "PHẦN B - CẤU TRÚC MẢNG TUẦN HOÀN",
                  title: "Giải quyết lãng phí bộ nhớ với 2 con trỏ front & back",
                  content: [
                    {
                      type: "bullets",
                      title: "7.1 Cách hoạt động cơ bản",
                      items: [
                        "Dùng mảng + 2 con trỏ <b>front</b> và <b>back</b>.",
                        "Nếu dùng mảng thường (không tuần hoàn), sau nhiều lần <code>poll</code>/<code>offer</code> sẽ <b>lãng phí không gian</b> ở đầu mảng.",
                        "➔ Cần <b>Circular Array (mảng tuần hoàn)</b> để tái sử dụng không gian đã bị xóa."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<b>7.2 Circular Array:</b> Để tăng chỉ số xoay vòng từ cuối mảng về đầu mảng, ta dùng công thức phép chia lấy dư (modulo):<br/><code>front = (front + 1) % maxSize;</code><br/><code>back = (back + 1) % maxSize;</code>"
                    },
                    {
                      type: "component",
                      component: "CircularArrayQueueVisualizer"
                    }
                  ]
                }
              ]
            },

            /* 7.3: VẤN ĐỀ MƠ HỒ FULL/EMPTY */
            {
              id: "dsa-b3-sub-8-2",
              number: "7.3",
              title: "7.3 Vấn đề mơ hồ Full/Empty (Ambiguous Full/Empty State)",
              parts: [
                {
                  id: "dsa-b3-part-8-2-ambiguous",
                  label: "PHẦN B - TRỌNG TÂM BẪY THI",
                  title: "So sánh Solution 1 (Biến count) vs Solution 2 (Chừa 1 ô trống)",
                  content: [
                    {
                      type: "component",
                      component: "QueueFullEmptyCompare"
                    }
                  ]
                }
              ]
            },

            /* 7.4 - 7.5: CODE KHỞI TẠO, PEEK, POLL, OFFER */
            {
              id: "dsa-b3-sub-8-3",
              number: "7.4–7.5",
              title: "7.4–7.5 Mã nguồn QueueArr.java (Constructor, peek, poll, offer)",
              parts: [
                {
                  id: "dsa-b3-part-8-3-code",
                  label: "PHẦN B - CÀI ĐẶT CHI TIẾT",
                  title: "Code Java cài đặt các phương thức chuẩn",
                  content: [
                    {
                      type: "component",
                      component: "QueueArrCodeExplorer"
                    }
                  ]
                }
              ]
            },

            /* 7.6: ENLARGE ARR VISUALIZER */
            {
              id: "dsa-b3-sub-8-4",
              number: "7.6",
              title: "7.6 Mã nguồn & Bộ mô phỏng enlargeArr()",
              parts: [
                {
                  id: "dsa-b3-part-8-4-enlarge",
                  label: "PHẦN B - MỞ RỘNG MẢNG TUẦN HOÀN",
                  title: "Thuật toán copy mảng cũ sang mảng mới gấp đôi dung lượng",
                  content: [
                    {
                      type: "component",
                      component: "QueueEnlargeArrVisualizer"
                    }
                  ]
                }
              ]
            },

            /* 7.7: COMPLEXITY & TÓM TẮT */
            {
              id: "dsa-b3-sub-8-5",
              number: "7.7",
              title: "7.7 Time / Space Complexity & 📌 Cần nhớ Tổng hợp",
              parts: [
                {
                  id: "dsa-b3-part-8-5-summary",
                  label: "PHẦN B - TỔNG KẾT MỤC VII & VIII",
                  title: "Đánh giá hiệu năng và các điểm chốt giáo trình",
                  content: [
                    {
                      type: "bullets",
                      title: "7.7 Time / Space Complexity",
                      items: [
                        "<code>offer</code>, <code>poll</code>, <code>peek</code>, <code>isEmpty</code>: <b>O(1)</b> (trung bình).",
                        "<code>enlargeArr()</code>: <b>O(n)</b>.",
                        "Space: <b>O(n)</b>."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ Trọng tâm Phần B (Queue)",
                      text: "• <code>front == back</code> <b>mơ hồ</b>: có thể là Full hoặc Empty.<br/>• Cách giải quyết ưu tiên trong môn học: <b>chừa 1 ô trống</b> – Full khi <code>((back + 1) % maxSize) == front</code>, Empty khi <code>front == back</code>.<br/>• Công thức tăng chỉ số tuần hoàn: <code>(index + 1) % maxSize</code>.<br/>• Khi <code>enlargeArr()</code>, phải copy lại phần tử bắt đầu từ <code>front</code> sang mảng mới tại chỉ số 0, và đặt lại <code>front = 0</code>, <code>back = maxSize - 1</code> (dựa theo mảng cũ)."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           PHẦN B: QUEUE — SECTION IX: CÀI ĐẶT QUEUE BẰNG LINKED LIST
           ============================================================ */
        {
          id: "dsa-b3-sec9",
          roman: "IX",
          title: "Cài đặt Queue bằng Linked List (Composition, Inheritance & Code Java)",
          subsections: [
            /* 8.1: GHI CHÚ TAILED LINKED LIST */
            {
              id: "dsa-b3-sub-9-1",
              number: "8.1",
              title: "8.1 Ghi chú quan trọng: TailedLinkedList & Trực quan hoá",
              parts: [
                {
                  id: "dsa-b3-part-9-1-tailed",
                  label: "PHẦN B - CẤU TRÚC TAILED LINKED LIST",
                  title: "Lý do bắt buộc dùng TailedLinkedList thay vì BasicLinkedList",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "💡 Ghi chú quan trọng",
                      text: "• <b>KHÔNG dùng BasicLinkedList</b> vì cần dùng <code>addLast()</code> để thêm vào cuối queue – phải dùng <b>TailedLinkedList</b> (linked list có con trỏ <code>tail</code>).<br/>• Cấu trúc <code>TailedLinkedList</code> gồm: <code>head</code>, <code>tail</code>, <code>num_nodes</code>."
                    },
                    {
                      type: "component",
                      component: "QueueLinkedListVisualizer"
                    }
                  ]
                }
              ]
            },

            /* 8.2 & 8.3: COMPOSITION VS INHERITANCE */
            {
              id: "dsa-b3-sub-9-2",
              number: "8.2–8.3",
              title: "8.2–8.3 Hai cách cài đặt: Composition (QueueLL) vs Inheritance (QueueLLE)",
              parts: [
                {
                  id: "dsa-b3-part-9-2-compare",
                  label: "PHẦN B - SO SÁNH THIẾT KẾ OOP",
                  title: "QueueLL (HAS-A) vs QueueLLE (IS-A)",
                  content: [
                    {
                      type: "component",
                      component: "QueueLLCompareVisualizer"
                    }
                  ]
                }
              ]
            },

            /* 8.4: VÍ DỤ TESTQUEUE */
            {
              id: "dsa-b3-sub-9-3",
              number: "8.4",
              title: "8.4 Ví dụ sử dụng TestQueue.java & Stepper",
              parts: [
                {
                  id: "dsa-b3-part-9-3-test",
                  label: "PHẦN B - THỰC THI CHƯƠNG TRÌNH MẪU",
                  title: "Mô phỏng từng dòng lệnh trong TestQueue.java",
                  content: [
                    {
                      type: "component",
                      component: "QueueTestStepper"
                    }
                  ]
                }
              ]
            },

            /* 8.5: TIME / SPACE COMPLEXITY & CẦN NHỚ */
            {
              id: "dsa-b3-sub-9-4",
              number: "8.5",
              title: "8.5 Time / Space Complexity & 📌 Cần nhớ",
              parts: [
                {
                  id: "dsa-b3-part-9-4-complexity",
                  label: "PHẦN B - ĐÁNH GIÁ VÀ GHI NHỚ LINKED LIST QUEUE",
                  title: "Độ phức tạp & điểm mấu chốt của Linked List Queue",
                  content: [
                    {
                      type: "bullets",
                      title: "8.5 Time / Space Complexity",
                      items: [
                        "<code>offer</code>, <code>poll</code>, <code>peek</code>, <code>isEmpty</code>: <b>O(1)</b> (nhờ có con trỏ <code>tail</code> nên thêm vào cuối cũng đạt O(1)).",
                        "Space: <b>O(n)</b>."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "📌 Cần nhớ",
                      text: "• Bắt buộc dùng <b>TailedLinkedList</b> (có <code>tail</code>) chứ không dùng <code>BasicLinkedList</code>, vì cần <code>addLast()</code> nhanh (O(1)).<br/>• Front của Queue = <b>head</b> của list; Back của Queue = <b>tail</b> của list.<br/>• 2 cách cài đặt OOP: Composition (QueueLL) và Inheritance (QueueLLE) – tương tự Stack."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           PHẦN B: QUEUE — SECTION X: JAVA.UTIL.INTERFACE QUEUE<E>
           ============================================================ */
        {
          id: "dsa-b3-sec10",
          roman: "X",
          title: "java.util.interface Queue<E> (Thư viện chuẩn Java)",
          subsections: [
            {
              id: "dsa-b3-sub-10-1",
              number: "9.1",
              title: "9.1 Method Summary & Bảng phân loại bẫy Exception",
              parts: [
                {
                  id: "dsa-b3-part-10-1-api",
                  label: "PHẦN B - THƯ VIỆN CHUẨN JAVA",
                  title: "Bảng tra cứu các phương thức trong interface java.util.Queue<E>",
                  content: [
                    {
                      type: "component",
                      component: "JavaQueueApiTable"
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           PHẦN B: QUEUE — SECTION XI: ỨNG DỤNG PALINDROME
           ============================================================ */
        {
          id: "dsa-b3-sec11",
          roman: "XI",
          title: "Ứng dụng Palindrome (kết hợp Stack và Queue)",
          subsections: [
            {
              id: "dsa-b3-sub-11-1",
              number: "10.1–10.5",
              title: "10.1–10.5 Khái niệm, Ý tưởng thuật toán, Mã nguồn & Trực quan hoá",
              parts: [
                {
                  id: "dsa-b3-part-11-1-palindrome",
                  label: "PHẦN B - KẾT HỢP STACK & QUEUE",
                  title: "Thuật toán kiểm tra chuỗi đọc xuôi đọc ngược",
                  content: [
                    {
                      type: "component",
                      component: "PalindromeCheckerVisualizer"
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           PHẦN B: QUEUE — SECTION XII: TỔNG KẾT BÀI 3 (SUMMARY)
           ============================================================ */
        {
          id: "dsa-b3-sec12",
          roman: "XII",
          title: "Tổng kết Toàn diện Bài 3 (Summary Dashboard)",
          subsections: [
            {
              id: "dsa-b3-sub-12-1",
              number: "11.0",
              title: "11. Tổng kết kiến thức Stack & Queue ADT",
              parts: [
                {
                  id: "dsa-b3-part-12-1-summary",
                  label: "TỔNG KẾT BÀI 3",
                  title: "Dashboard tổng kết toàn bộ nội dung Bài 3",
                  content: [
                    {
                      type: "component",
                      component: "Bai3SummaryDashboard"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       BÀI 4: RECURSION (ĐỆ QUY)
       ============================================================ */
    {
      id: "dsa-b4",
      title: "Bài 4",
      subtitle: "Recursion (Đệ quy)",
      sections: [
        /* OVERVIEW SECTION: HERO BANNER BÀI 4 */
        {
          id: "dsa-b4-sec0",
          roman: "OVERVIEW",
          title: "Giới thiệu Bài 4: Recursion (Đệ quy)",
          subsections: [
            {
              id: "dsa-b4-sub-0-1",
              number: "0.1",
              title: "Tựa đề & Tổng quan Bài 4",
              parts: [
                {
                  id: "dsa-b4-part-hero",
                  label: "TỰA ĐỀ & TỔNG QUAN BÀI 4",
                  title: "Recursion — Kỹ thuật giải thuật tự gọi chính mình",
                  content: [
                    {
                      type: "component",
                      component: "DsaRecursionHeroBanner"
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC I: BASIC IDEA (Ý TƯỞNG CƠ BẢN)
           ============================================================ */
        {
          id: "dsa-b4-sec1",
          roman: "I",
          title: "Basic Idea (Ý tưởng cơ bản)",
          subsections: [
            {
              id: "dsa-b4-sub-1-1",
              number: "1.1",
              title: "Khái niệm & Ví dụ minh họa hình ảnh (Pictorial examples)",
              parts: [
                {
                  id: "dsa-b4-part-1-1-concept",
                  label: "KHÁI NIỆM TRUNG TÂM",
                  title: "Recursion là ý tưởng trung tâm trong Computer Science",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Recursion (Đệ quy)</strong> là một <strong>ý tưởng trung tâm (central idea)</strong> trong Computer Science (Khoa học Máy tính)."
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "Định nghĩa cốt lõi của Recursion",
                      text: "<strong>Định nghĩa:</strong> Recursion là quá trình lặp lại các phần tử theo cách <strong>tự giống nhau (self-similar)</strong> nhưng với <strong>kích thước nhỏ hơn (smaller scale / size)</strong>."
                    },
                    {
                      type: "component",
                      component: "RecursionPictorialCarousel"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b4-sub-1-2",
              number: "1.2",
              title: "Ví dụ bằng văn bản (Textual examples)",
              parts: [
                {
                  id: "dsa-b4-part-1-2-textual",
                  label: "TEXTUAL EXAMPLES",
                  title: "Các ví dụ văn bản và định nghĩa tự quy chiếu",
                  content: [
                    {
                      type: "paragraph",
                      text: "Ngoài hình học, khái niệm đệ quy xuất hiện rất tự nhiên trong từ điển, ngôn ngữ và cấu trúc dữ liệu:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Định nghĩa từ điển kiểu đệ quy:</strong> <em>\"Recursion: See recursion.\"</em> (Muốn hiểu recursion thì hãy xem lại chính từ \"recursion\").",
                        "<strong>Định nghĩa đệ quy (Recursive definitions):</strong> Một người là <strong>hậu duệ (descendant)</strong> của người khác nếu:<br/>• Người đó là con của người kia, <strong>hoặc</strong><br/>• Người đó là hậu duệ của con của người kia.",
                        "<strong>Định nghĩa danh sách số (List of numbers):</strong> Một danh sách số là:<br/>• Một số đơn lẻ, <strong>hoặc</strong><br/>• Một số theo sau bởi một danh sách số.",
                        "<strong>Từ viết tắt đệ quy (Recursive Acronyms):</strong><br/>• <code>GNU</code> = <em>GNU's Not Unix</em><br/>• <code>PHP</code> = <em>PHP: Hypertext Preprocessor</em>"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b4-sub-1-3",
              number: "1.3",
              title: "Divide-and-Conquer (Chia để trị)",
              parts: [
                {
                  id: "dsa-b4-part-1-3-divide",
                  label: "DIVIDE AND CONQUER",
                  title: "Phương pháp thiết kế thuật toán Chia để trị",
                  content: [
                    {
                      type: "paragraph",
                      text: "Chiến lược <strong>Divide-and-Conquer (Chia để trị)</strong> là nền tảng cốt lõi của các giải thuật đệ quy:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Divide (Chia):</strong> Trong thiết kế top-down, chia vấn đề thành các <strong>sub-problem (bài toán con)</strong> cùng loại.",
                        "<strong>Conquer (Trị / Chinh phục):</strong> Giải bài toán bằng một hàm <strong>gọi lại chính nó (calls itself)</strong> để giải từng sub-problem.<br/>• Một hoặc nhiều sub-problem đơn giản đến mức có thể giải trực tiếp mà không cần gọi hàm nữa (Base Case).",
                        "<strong>Paradigm (Mô hình cốt lõi):</strong> Lời giải của một bài toán phụ thuộc vào lời giải của <em>các instance nhỏ hơn của cùng bài toán đó</em>."
                      ]
                    },
                    {
                      type: "component",
                      component: "DivideConquerFlowchart"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b4-sub-1-4",
              number: "1.4",
              title: "Tại sao dùng recursion?",
              parts: [
                {
                  id: "dsa-b4-part-1-4-why",
                  label: "TẠI SAO DÙNG RECURSION?",
                  title: "Lợi ích & Khung cấu trúc tổng quát",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Nhiều thuật toán có thể biểu diễn rất tự nhiên, ngắn gọn và trực quan dưới dạng đệ quy.",
                        "Các bài toán phức tạp / khó giải bằng kỹ thuật tuyến tính (linear techniques / vòng lặp lồng nhau phức tạp) có thể có lời giải đệ quy cực kỳ đơn giản và thanh lịch."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Dạng tổng quát của một hàm đệ quy:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: `SolveIt (problem) {
    if (problem is trivial) {
        return result; // Base case: giải trực tiếp
    } else {
        simplify problem; // Thu hẹp kích thước bài toán
        return SolveIt (simplified problem); // Tự gọi lại chính nó
    }
}`
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Đặc điểm nhận dạng:</strong> Hàm <strong>gọi lại chính nó (calls itself)</strong> với tham số bài toán đã được làm đơn giản hơn."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b4-sub-1-5",
              number: "1.5",
              title: "📌 Cần nhớ (Mục 1)",
              parts: [
                {
                  id: "dsa-b4-part-1-5-summary",
                  label: "CẦN NHỚ MỤC 1",
                  title: "Tóm tắt các điểm trọng tâm của Mục 1",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 1)",
                      text: "• <strong>Recursion</strong> = Lặp lại cấu trúc tự đồng dạng (self-similar) với quy mô (size) nhỏ dần.<br/>• <strong>Divide-and-Conquer</strong> = Divide (chia nhỏ bài toán) + Conquer (giải quyết bằng hàm tự gọi lại chính nó).<br/>• <strong>Recursive solution luôn cần:</strong> Đơn giản hóa bài toán dần qua từng bước và bắt buộc phải tiến tới trường hợp có thể giải trực tiếp (Base Case)."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC II: HOW RECURSION WORKS (RECURSION HOẠT ĐỘNG NHƯ THẾ NÀO)
           ============================================================ */
        {
          id: "dsa-b4-sec2",
          roman: "II",
          title: "How Recursion Works (Recursion hoạt động như thế nào)",
          subsections: [
            {
              id: "dsa-b4-sub-2-1",
              number: "2.1",
              title: "Ôn lại recursion cơ bản (Factorial, Fibonacci, GCD)",
              parts: [
                {
                  id: "dsa-b4-part-2-1-intro",
                  label: "RECURSION CƠ BẢN",
                  title: "Đặc điểm recursion cơ bản từ S01042",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Không có recursion trên cấu trúc dữ liệu phức tạp (không duyệt mảng/danh sách phức tạp).",
                        "Mã nguồn chỉ gồm câu lệnh điều kiện <code>if</code>, <strong>không có vòng lặp loop</strong>.",
                        "Các ví dụ kinh điển: <strong>Factorial</strong> (Giai thừa), <strong>Fibonacci</strong>, <strong>Greatest Common Divisor (GCD - ƯCLN)</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "RecursionClassicWorkbench"
                    },
                    {
                      type: "component",
                      component: "FibonacciCallTreeVisualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b4-sub-2-2",
              number: "2.2",
              title: "Visualizing Recursion (Trực quan hóa đệ quy)",
              parts: [
                {
                  id: "dsa-b4-part-2-2-vis",
                  label: "VISUALIZING RECURSION",
                  title: "Cơ chế quản lý bộ nhớ của hàm đệ quy bằng Stack",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Code không đệ quy:</strong> Rất dễ visualize bằng cách bước qua (step through) mã nguồn theo tuần tự tuyến tính.",
                        "<strong>Code đệ quy:</strong> <em>Khó hình dung hơn</em> vì phải tưởng tượng <strong>mỗi lần gọi hàm sẽ tạo ra một bản sao (copy / Stack Frame)</strong> của hàm đó (bao gồm các biến cục bộ local variables và tham số). Nếu gọi đệ quy nhiều lần, sẽ có nhiều bản sao tồn tại đồng thời trên Call Stack."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "Nguyên lý dùng Stack để Visualize",
                      text: "• <code>push()</code>: Đẩy một Frame mới vào Call Stack khi phát sinh một lời gọi đệ quy mới.<br/>• <code>pop()</code>: Thu hồi Frame khỏi Call Stack khi giá trị trả về được gửi ngược về nơi gọi (caller)."
                    },
                    {
                      type: "component",
                      component: "RecursionCallStackSimulator"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b4-sub-2-3",
              number: "2.3",
              title: "Công thức (Recipe) cho Recursion & Bad Recursion",
              parts: [
                {
                  id: "dsa-b4-part-2-3-recipe",
                  label: "RECIPE & BAD RECURSION",
                  title: "3 bước xây dựng lời giải đệ quy chuẩn & Phòng tránh lỗi sai",
                  content: [
                    {
                      type: "paragraph",
                      text: "Để xây dựng một lời giải đệ quy chính xác và an toàn, ta luôn tuân thủ công thức 3 bước (Recipe) sau:"
                    },
                    {
                      type: "component",
                      component: "RecursionRecipeComparator"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b4-sub-2-4",
              number: "2.4",
              title: "📌 Cần nhớ (Mục 2)",
              parts: [
                {
                  id: "dsa-b4-part-2-4-summary",
                  label: "CẦN NHỚ MỤC 2",
                  title: "Tóm tắt các điểm trọng tâm của Mục 2",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 2)",
                      text: "• <strong>Recipe đệ quy gồm 3 bước:</strong> General/recursive case (inductive step) → Base case → Đảm bảo luôn đạt base case.<br/>• <strong>Dùng Stack (push/pop)</strong> để visualize thứ tự gọi hàm (winding) và trả về kết quả (unwinding) của recursion.<br/>• <strong>Lỗi thường gặp:</strong> Thiếu base case, hoặc bước đơn giản hóa <em>không bao giờ chạm được</em> base case → Dẫn đến infinite recursion và StackOverflowError.<br/>• <strong>Fibonacci đệ quy:</strong> Dù code đơn giản nhưng cực kỳ kém hiệu quả do tính lặp lại nhiều lần cùng một giá trị."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC III: EXAMPLES (CÁC VÍ DỤ ỨNG DỤNG RECURSION)
           ============================================================ */
        {
          id: "dsa-b4-sec3",
          roman: "III",
          title: "Examples (Các ví dụ ứng dụng Recursion)",
          subsections: [
            {
              id: "dsa-b4-sub-3-1",
              number: "3.1",
              title: "Thư viện 10 ví dụ ứng dụng đệ quy kinh điển",
              parts: [
                {
                  id: "dsa-b4-part-3-1-gallery",
                  label: "GALLERY 10 VÍ DỤ",
                  title: "Khám phá 10 bài toán đệ quy từ cơ bản đến nâng cao",
                  content: [
                    {
                      type: "paragraph",
                      text: "Dưới đây là <strong>10 ví dụ ứng dụng kinh điển</strong> của kỹ thuật đệ quy được phân loại theo 3 chuyên đề: Cơ bản, Cấu trúc dữ liệu và Nâng cao:"
                    },
                    {
                      type: "component",
                      component: "RecursionExamplesGallery"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b4-sub-3-2",
              number: "3.2",
              title: "In Linked List: Thứ tự Xuôi vs Ngược (Ex 3 & 4)",
              parts: [
                {
                  id: "dsa-b4-part-3-2-llprint",
                  label: "LINKED LIST PRINT",
                  title: "Phân tích tác động của thứ tự lệnh print và đệ quy",
                  content: [
                    {
                      type: "component",
                      component: "LinkedListPrintComparator"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b4-sub-3-3",
              number: "3.3",
              title: "Tháp Hà Nội — Towers of Hanoi (Ex 6)",
              parts: [
                {
                  id: "dsa-b4-part-3-3-hanoi",
                  label: "TOWERS OF HANOI",
                  title: "Bài toán Tháp Hà Nội & Độ phức tạp O(2ⁿ)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Đề bài:</strong> Di chuyển chồng đĩa từ peg A sang peg B (mỗi lần 1 đĩa, dùng thêm peg C), <strong>đĩa lớn không được đặt lên đĩa nhỏ hơn</strong>.",
                        "<strong>Base case:</strong> <code>1 đĩa</code> ➔ Chuyển trực tiếp từ src sang dest.",
                        "<strong>Inductive step:</strong> Di chuyển <code>n - 1</code> đĩa TRÊN CÙNG sang peg trung gian ➔ Chuyển đĩa lớn nhất sang dest ➔ Di chuyển <code>n - 1</code> đĩa từ trung gian về dest.",
                        "<strong>Số lần gọi inductive step:</strong> <strong>2 lần (Twice)</strong> ➔ Số bước di chuyển là <code>f(n) = 2ⁿ - 1</code>."
                      ]
                    },
                    {
                      type: "component",
                      component: "TowersOfHanoiSimulator"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b4-sub-3-4",
              number: "3.4",
              title: "Tìm kiếm nhị phân — Binary Search (Ex 8)",
              parts: [
                {
                  id: "dsa-b4-part-3-4-bs",
                  label: "BINARY SEARCH",
                  title: "Thuật toán tìm kiếm O(log n) & Hàm phụ trợ Overloading",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Ý tưởng:</strong> Thu hẹp không gian tìm kiếm đi <strong>một nửa</strong> ở mỗi bước, cho tới khi còn 1 phần tử hoặc tìm thấy.",
                        "<strong>Độ phức tạp:</strong> <code>O(log n)</code>.",
                        "<strong>Auxiliary function (hàm phụ trợ):</strong> Hàm gốc yêu cầu người dùng tự chỉ định <code>low</code>, <code>high</code> ➔ khó dùng. Ta viết hàm phụ trợ (dùng <strong>overloading</strong>, cùng tên với hàm đệ quy) chỉ nhận mảng <code>a</code> và giá trị <code>x</code>."
                      ]
                    },
                    {
                      type: "component",
                      component: "BinarySearchVisualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b4-sub-3-5",
              number: "3.5",
              title: "Sinh tất cả hoán vị — Permutations (Ex 10)",
              parts: [
                {
                  id: "dsa-b4-part-3-5-perm",
                  label: "PERMUTATIONS",
                  title: "Thuật toán sinh n! hoán vị bằng đệ quy",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Đề bài:</strong> Với chuỗi <code>\"eat\"</code> hoặc <code>\"east\"</code> ➔ in ra tất cả <code>n!</code> hoán vị (permutations).",
                        "<strong>Ý tưởng:</strong> Đặt ký tự đầu tiên trước tất cả permutations của các ký tự còn lại ➔ Lặp lại cho ký tự thứ 2, thứ 3... bằng cách dùng <code>substring()</code> để loại bỏ ký tự đã chọn."
                      ]
                    },
                    {
                      type: "component",
                      component: "PermutationGenerator"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b4-sub-3-6",
              number: "3.6",
              title: "Bài tập thảo luận: Eight Queens Problem (8 Quân Hậu)",
              parts: [
                {
                  id: "dsa-b4-part-3-6-queens",
                  label: "EIGHT QUEENS",
                  title: "Bài toán 8 Quân Hậu & Kỹ thuật Backtracking",
                  content: [
                    {
                      type: "callout",
                      variant: "info",
                      title: "♛ Bài tập: Eight Queens Problem (8 Quân Hậu)",
                      text: "<strong>Đề bài:</strong> Đặt 8 quân Hậu (Queens) lên bàn cờ vua 8×8 sao cho <strong>không quân nào ăn được quân nào</strong> (không cùng hàng, cùng cột hay cùng đường chéo).<br/><br/><strong>Câu hỏi mở thảo luận:</strong> Làm thế nào để hình thành bài toán này như một <em>Recursion Problem</em> kết hợp với <em>Backtracking (Quay lui)</em>?"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b4-sub-3-7",
              number: "3.7",
              title: "📌 Cần nhớ (Mục 3 — Examples)",
              parts: [
                {
                  id: "dsa-b4-part-3-7-summary",
                  label: "CẦN NHỚ MỤC 3",
                  title: "Tóm tắt các điểm trọng tâm của Mục 3",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 3 — Examples)",
                      text: "• <strong>Vị trí lệnh <code>print</code> / thao tác:</strong> Đặt trước hay sau lời gọi đệ quy quyết định thứ tự in ra (xuôi hay ngược) — xem Example 3 vs 4.<br/>• <strong>Towers of Hanoi:</strong> Base case = 1 đĩa; mỗi bước đệ quy gọi <strong>2 lần</strong> <code>Towers(n-1)</code>; độ phức tạp <code>O(2ⁿ)</code>.<br/>• <strong>n choose k (Tổ hợp):</strong> Công thức đệ quy <code>choose(n-1, k-1) + choose(n-1, k)</code>, base case khi <code>k == n</code> hoặc <code>k == 0</code>.<br/>• <strong>Binary Search:</strong> Chia đôi mảng mỗi bước, độ phức tạp <code>O(log n)</code>; nên có auxiliary function để ẩn tham số low/high.<br/>• <strong>Permutations:</strong> Với chuỗi n ký tự cần n lời gọi đệ quy ở mỗi tầng; dùng <code>substring()</code> để loại bỏ ký tự đã chọn."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC IV: BACKTRACKING & RECURSION TRONG CHỦ ĐỀ NÂNG CAO
           ============================================================ */
        {
          id: "dsa-b4-sec4",
          roman: "IV",
          title: "Backtracking & Recursion trong các chủ đề nâng cao",
          subsections: [
            {
              id: "dsa-b4-sub-4-1",
              number: "4.1",
              title: "Backtracking (Quay lui & Tìm kiếm toàn bộ)",
              parts: [
                {
                  id: "dsa-b4-part-4-1-backtracking",
                  label: "BACKTRACKING",
                  title: "Khái niệm Tìm kiếm Quay lui (Exhaustive Search)",
                  content: [
                    {
                      type: "paragraph",
                      text: "Sự kết hợp giữa <strong>Recursion + Call Stack</strong> minh họa một khái niệm cực kỳ quan trọng trong tìm kiếm giải thuật: <strong>Backtracking (Quay lui)</strong>."
                    },
                    {
                      type: "bullets",
                      items: [
                        "Kỹ thuật recursion có khả năng <strong>tìm kiếm toàn bộ (exhaustively search)</strong> mọi trạng thái / kết quả có thể theo một cách có hệ thống.",
                        "Khi đi vào một nhánh cụt không thỏa mãn điều kiện, đệ quy tự động <strong>unwind (pop Stack)</strong> để quay lui lại ngã rẽ trước đó và thử nhánh tiếp theo.",
                        "Chủ đề này sẽ được đào sâu hơn trong không gian tìm kiếm (Search Spaces) và Trí tuệ Nhân tạo ở các môn CS chuyên sâu."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b4-sub-4-2",
              number: "4.2",
              title: "Recursion sẽ còn xuất hiện sau: Quick Sort & Merge Sort",
              parts: [
                {
                  id: "dsa-b4-part-4-2-comingnext",
                  label: "COMING NEXT",
                  title: "Các thuật toán sắp xếp nâng cao sử dụng Recursion",
                  content: [
                    {
                      type: "callout",
                      variant: "info",
                      title: "🚀 Đệ quy trong các bài học tiếp theo",
                      text: "Recursion không dừng lại ở các bài toán cơ bản! Trong các bài học sắp tới về <strong>Sorting (Sắp xếp)</strong> và <strong>Tree Structures (Cấu trúc Cây)</strong>, recursion là linh hồn của các giải thuật nâng cao hiệu năng vượt trội:<br/><br/>• <strong>Merge Sort:</strong> Thuật toán Chia để trị chia đôi mảng và trộn lại với độ phức tạp <code>O(n log n)</code>.<br/>• <strong>Quick Sort:</strong> Thuật toán phân hoạch dựa trên Pivot và đệ quy sắp xếp 2 nửa."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC V: SUMMARY — RECURSION, THE MIRRORS (TỔNG KẾT BÀI 4)
           ============================================================ */
        {
          id: "dsa-b4-sec5",
          roman: "V",
          title: "Summary — Recursion, The Mirrors (Tổng kết)",
          subsections: [
            {
              id: "dsa-b4-sub-5-1",
              number: "5.1",
              title: "Tổng kết: Recursion, The Mirrors",
              parts: [
                {
                  id: "dsa-b4-part-5-1-summary",
                  label: "TỔNG KẾT BÀI 4",
                  title: "Dashboard Tổng kết Toàn diện Bài 4 & Trắc nghiệm Nhanh",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Base Case:</strong> Phiên bản đơn giản nhất của bài toán, có thể giải trực tiếp dễ dàng.",
                        "<strong>Inductive Step:</strong> Phải <strong>đơn giản hóa (simplify)</strong> bài toán và phải <strong>đạt tới base case</strong> ở một thời điểm nào đó.",
                        "Dễ visualize bằng <strong>Stack</strong>.",
                        "Các thao tác <strong>trước</strong> và <strong>sau</strong> lời gọi đệ quy diễn ra theo thứ tự <strong>FIFO</strong> và <strong>LIFO</strong> tương ứng.",
                        "Recursion <strong>elegant (thanh thoát)</strong> nhưng <strong>không phải lúc nào cũng hiệu quả nhất</strong> để giải bài toán."
                      ]
                    },
                    {
                      type: "component",
                      component: "Bai4SummaryDashboard"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b4-sub-5-2",
              number: "5.2",
              title: "📌 Cần nhớ (Tổng kết toàn bài)",
              parts: [
                {
                  id: "dsa-b4-part-5-2-takeaway",
                  label: "CẦN NHỚ TỔNG KẾT",
                  title: "Bốn nguyên tắc vàng đúc kết từ Bài 4",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Tổng kết)",
                      text: "• <strong>Công thức chung của mọi bài recursion:</strong> <code>Base case + Inductive step (simplify + reach base case)</code>.<br/>• <strong>Luôn kiểm tra:</strong> Bài toán có <strong>chắc chắn đạt được base case</strong> không? (tránh infinite recursion).<br/>• <strong>Trực quan hóa Call Stack:</strong> Trực quan hóa tốt bằng <strong>Stack</strong> (push khi gọi, pop khi trả về).<br/>• <strong>Cân nhắc hiệu năng:</strong> Recursion dễ viết, dễ đọc nhưng có thể <strong>kém hiệu quả</strong> (ví dụ Fibonacci đệ quy có nhiều lời gọi trùng lặp) — cần cân nhắc dùng bản iterative hoặc quy hoạch động khi cần tối ưu."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       BÀI 5: ANALYSIS OF ALGORITHMS (PHÂN TÍCH THUẬT TOÁN)
       ============================================================ */
    {
      id: "dsa-b5",
      title: "Bài 5",
      subtitle: "Analysis of Algorithms (Phân tích thuật toán)",
      sections: [
        /* OVERVIEW SECTION: HERO BANNER BÀI 5 */
        {
          id: "dsa-b5-sec0",
          roman: "OVERVIEW",
          title: "Giới thiệu Bài 5: Analysis of Algorithms (Phân tích thuật toán)",
          subsections: [
            {
              id: "dsa-b5-sub-0-1",
              number: "0.1",
              title: "Tựa đề & Tổng quan Bài 5",
              parts: [
                {
                  id: "dsa-b5-part-hero",
                  label: "TỰA ĐỀ & TỔNG QUAN BÀI 5",
                  title: "Analysis of Algorithms — Đo lường hiệu năng & Ký pháp Big-O",
                  content: [
                    {
                      type: "component",
                      component: "DsaAnalysisHeroBanner"
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC I: THUẬT TOÁN (ALGORITHM) LÀ GÌ?
           ============================================================ */
        {
          id: "dsa-b5-sec1",
          roman: "I",
          title: "Thuật toán (Algorithm) là gì?",
          subsections: [
            {
              id: "dsa-b5-sub-1-1",
              number: "1.1",
              title: "Định nghĩa & 4 Tính chất của Algorithm",
              parts: [
                {
                  id: "dsa-b5-part-1-1-definition",
                  label: "ĐỊNH NGHĨA ALGORITHM",
                  title: "Thủ tục từng bước giải quyết bài toán & 4 tiêu chuẩn bắt buộc",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Định nghĩa:</strong> Thuật toán (Algorithm) là một <strong>thủ tục từng bước (step-by-step procedure)</strong> để giải quyết một vấn đề (problem) xác định."
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Mỗi bước phải chính xác (exact):</strong> Các chỉ dẫn không được mơ hồ, máy tính có thể thi hành chính xác tuyệt đối.",
                        "<strong>Phải kết thúc (terminate):</strong> Thuật toán không bao giờ được chạy vô hạn, phải dừng sau một số bước hữu hạn.",
                        "<strong>Phải hiệu quả / khả thi (effective):</strong> Từng thao tác cơ bản phải có thể thực hiện được trong thực tế với tài nguyên hữu hạn.",
                        "<strong>Phải mang tính tổng quát (general):</strong> Giải quyết đúng cho toàn bộ lớp bài toán và mọi bộ dữ liệu đầu vào hợp lệ."
                      ]
                    },
                    {
                      type: "component",
                      component: "AlgorithmPropertiesCards"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-1-2",
              number: "1.2",
              title: "📌 Cần nhớ (Mục 1)",
              parts: [
                {
                  id: "dsa-b5-part-1-2-summary",
                  label: "CẦN NHỚ MỤC 1",
                  title: "Tóm tắt các điểm cốt lõi của Mục 1",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 1)",
                      text: "• <strong>4 tính chất bắt buộc của algorithm:</strong> <code>exact - terminate - effective - general</code>.<br/>• Thiếu bất kỳ tính chất nào thì chuỗi lệnh đó không được công nhận là một thuật toán hoàn chỉnh."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC II: ANALYSIS OF ALGORITHMS (PHÂN TÍCH THUẬT TOÁN)
           ============================================================ */
        {
          id: "dsa-b5-sec2",
          roman: "II",
          title: "Analysis of Algorithms (Phân tích thuật toán)",
          subsections: [
            {
              id: "dsa-b5-sub-2-1",
              number: "2.1",
              title: "Khái niệm & Mục tiêu của Phân tích thuật toán",
              parts: [
                {
                  id: "dsa-b5-part-2-1-concept",
                  label: "KHÁI NIỆM",
                  title: "So sánh hiệu quả giữa các phương pháp giải quyết",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Analysis of algorithms:</strong> Cung cấp công cụ để <strong>so sánh hiệu quả (efficiency)</strong> giữa các <em>phương pháp giải quyết (methods of solution)</em>, chứ <strong>không phải so sánh chương trình (programs)</strong>. Còn gọi là <strong>Complexity of algorithms</strong> (Độ phức tạp của thuật toán)."
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "💡 Nguyên tắc so sánh Algorithm",
                      text: "• Chỉ nên tập trung vào <strong>khác biệt đáng kể (significant differences)</strong> về hiệu quả.<br/>• <strong>Không nên</strong> xét đến việc giảm chi phí tính toán nhờ <em>mẹo code (coding tricks)</em> — vì các mẹo này có thể làm giảm tính dễ đọc (readability) và tính bảo trì của thuật toán."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-2-2",
              number: "2.2",
              title: "Xác định hiệu quả của Algorithm (Time & Space)",
              parts: [
                {
                  id: "dsa-b5-part-2-2-resources",
                  label: "TIME & SPACE",
                  title: "Đo lường hai tài nguyên cốt lõi bằng công thức toán học",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Mục tiêu:</strong> Đánh giá nghiêm ngặt (rigorously) tài nguyên (resources) <strong>thời gian (time)</strong> và <strong>không gian (space)</strong> cần thiết, biểu diễn kết quả bằng <strong>công thức (formula)</strong>.",
                        "Trong môn này: Nhấn mạnh <strong>time requirement</strong> hơn <strong>space requirement</strong>.",
                        "<strong>Time requirement</strong> của một algorithm còn gọi là <strong>time complexity</strong> (độ phức tạp thời gian)."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-2-3",
              number: "2.3",
              title: "Đo bằng thời gian chạy thực tế (run time)?",
              parts: [
                {
                  id: "dsa-b5-part-2-3-timetest",
                  label: "TIMETEST.JAVA",
                  title: "Thử nghiệm đo run time và sự thiếu tin cậy",
                  content: [
                    {
                      type: "paragraph",
                      text: "Xét đoạn mã nguồn Java đo thời gian chạy 10 triệu vòng lặp:"
                    },
                    {
                      type: "component",
                      component: "RuntimeSimulatorDemo"
                    },
                    {
                      type: "callout",
                      variant: "error",
                      title: "⚠️ Lưu ý quan trọng",
                      text: "Run time phụ thuộc vào compiler, máy tính sử dụng, và tải công việc (work load) hiện tại của máy ➔ <strong>Không đáng tin cậy</strong> để so sánh giải thuật!"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-2-4",
              number: "2.4",
              title: "Exact run time không phải lúc nào cũng cần thiết",
              parts: [
                {
                  id: "dsa-b5-part-2-4-exacttime",
                  label: "EXACT RUN TIME",
                  title: "Các tình huống khiến exact run time trở nên vô nghĩa",
                  content: [
                    {
                      type: "paragraph",
                      text: "Dùng exact run time <strong>không có ý nghĩa</strong> khi so sánh 2 algorithm nếu:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Code bằng <strong>ngôn ngữ khác nhau</strong> (ví dụ C++ vs Python vs Java).",
                        "Dùng <strong>tập dữ liệu (data set) khác nhau</strong>.",
                        "Chạy trên <strong>máy tính khác nhau</strong> (khác CPU, RAM, Cache, OS)."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-2-5",
              number: "2.5",
              title: "Khó khăn khi so sánh Program & Tính Độc lập",
              parts: [
                {
                  id: "dsa-b5-part-2-5-independence",
                  label: "TÍNH ĐỘC LẬP",
                  title: "4 câu hỏi khó xác định & Yêu cầu tính độc lập của Algorithm Analysis",
                  content: [
                    {
                      type: "paragraph",
                      text: "Khi đánh giá một chương trình (program), có quá nhiều biến số khó kiểm soát: <em>Algorithm được code như thế nào? Dùng compiler nào? Dùng máy tính nào? Chương trình dùng dữ liệu gì?</em>"
                    },
                    {
                      type: "component",
                      component: "AnalysisReasoningFlowchart"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-2-6",
              number: "2.6",
              title: "Execution Time của Algorithm — Cách đo thực sự",
              parts: [
                {
                  id: "dsa-b5-part-2-6-operations",
                  label: "PRIMITIVE OPERATIONS",
                  title: "Đếm số lượng phép toán cơ bản",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Thay vì tính thời gian chính xác ➔ <strong>Đếm số lượng phép toán cơ bản (primitive operations)</strong> cần thiết (ví dụ: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, phép gán <code>=</code>, phép so sánh <code>&lt;</code>, <code>==</code>...).",
                        "Đếm số operations là cách để đánh giá hiệu quả (efficiency) một cách khoa học.",
                        "<strong>Execution time</strong> của algorithm liên quan trực tiếp đến <strong>số lượng operations</strong> nó cần.",
                        "<strong>Ví dụ minh họa:</strong> Traversal của Linked List, Towers of Hanoi, Nested Loops."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-2-7",
              number: "2.7",
              title: "📌 Cần nhớ (Mục 2)",
              parts: [
                {
                  id: "dsa-b5-part-2-7-summary",
                  label: "CẦN NHỚ MỤC 2",
                  title: "Tóm tắt các điểm cốt lõi của Mục 2",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 2)",
                      text: "• So sánh algorithm dựa trên <strong>method (phương pháp)</strong>, không dựa trên <strong>program (chương trình)</strong> cụ thể.<br/>• Analysis phải <strong>độc lập</strong> với ngôn ngữ, compiler, máy tính, và dữ liệu.<br/>• Đánh giá hiệu quả bằng cách <strong>đếm số operations</strong>, không đo run time thực tế."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC III: ALGORITHM GROWTH RATES (TỐC ĐỘ TĂNG TRƯỞNG)
           ============================================================ */
        {
          id: "dsa-b5-sec3",
          roman: "III",
          title: "Algorithm Growth Rates (Tốc độ tăng trưởng)",
          subsections: [
            {
              id: "dsa-b5-sub-3-1",
              number: "3.1",
              title: "Khái niệm Tốc độ Tăng trưởng (Growth Rate)",
              parts: [
                {
                  id: "dsa-b5-part-3-1-growthrate",
                  label: "GROWTH RATE",
                  title: "Hàm số theo kích thước bài toán n & Sự chênh lệch khi n lớn",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Time requirement của algorithm được đo như một <strong>hàm số theo kích thước bài toán n</strong> (function of the problem size n).",
                        "<strong>Growth rate (tốc độ tăng trưởng)</strong> giúp <strong>so sánh</strong> giữa các algorithm.",
                        "<strong>Ví dụ:</strong> Algorithm A cần thời gian tỉ lệ với <code>n²</code>; Algorithm B cần thời gian tỉ lệ với <code>n</code>.",
                        "Hiệu quả của algorithm chỉ thực sự quan trọng khi bài toán có <strong>kích thước lớn (large problems)</strong>."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-3-2",
              number: "3.2",
              title: "Tính chi phí tính toán (Computation Cost)",
              parts: [
                {
                  id: "dsa-b5-part-3-2-computationcost",
                  label: "COMPUTATION COST",
                  title: "Phân tích số phép toán trong vòng lặp lồng nhau",
                  content: [
                    {
                      type: "component",
                      component: "ComputationCostSimulator"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-3-3",
              number: "3.3",
              title: "Đếm số lượng câu lệnh (statements)",
              parts: [
                {
                  id: "dsa-b5-part-3-3-statements",
                  label: "ĐẾM STATEMENTS",
                  title: "Kỹ thuật đơn giản hóa việc đếm",
                  content: [
                    {
                      type: "paragraph",
                      text: "Để đơn giản hóa việc đếm, ta có thể <strong>bỏ qua</strong>:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Loại operation khác nhau (phép cộng coi như tương đương phép nhân).",
                        "Số lượng operation khác nhau trong 1 statement.",
                        "➔ Chỉ đơn giản <strong>đếm số statement được thực thi</strong>."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-3-4",
              number: "3.4",
              title: "Xấp xỉ kết quả phân tích (Approximation)",
              parts: [
                {
                  id: "dsa-b5-part-3-4-approx",
                  label: "XẤP XỈ & DOMINATING TERM",
                  title: "Chỉ cần một số hạng đơn giản để biểu thị độ hiệu quả",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Thường ta chỉ cần <strong>1 term đơn giản</strong> để biểu thị độ hiệu quả — không cần công thức chính xác tuyệt đối.",
                        "<strong>Ví dụ:</strong> Cho công thức <code>3n² + 2n + log n + 1/(4n)</code> ➔ <strong>Dominating term (số hạng chiếm ưu thế)</strong> là <code>3n²</code> ➔ cho biết gần đúng hiệu năng algorithm."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-3-5",
              number: "3.5",
              title: "Phân tích tiệm cận (Asymptotic Analysis)",
              parts: [
                {
                  id: "dsa-b5-part-3-5-asymptotic",
                  label: "ASYMPTOTIC ANALYSIS",
                  title: "Quy tắc giữ Leading Term và bỏ qua hệ số",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Asymptotic analysis</strong> là phân tích tập trung vào:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Vấn đề với <strong>input size lớn (n → ∞)</strong>.",
                        "Chỉ xét <strong>leading term (số hạng bậc cao nhất)</strong> của công thức.",
                        "<strong>Bỏ qua hệ số (coefficient)</strong> của leading term."
                      ]
                    },
                    {
                      type: "component",
                      component: "AsymptoticSimplifier"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-3-6",
              number: "3.6",
              title: "📌 Cần nhớ (Mục 3)",
              parts: [
                {
                  id: "dsa-b5-part-3-6-summary",
                  label: "CẦN NHỚ MỤC 3",
                  title: "Tóm tắt các điểm cốt lõi của Mục 3",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 3)",
                      text: "• <strong>Growth rate theo n:</strong> Dùng để so sánh algorithm khi n lớn.<br/>• <strong>Quy tắc tiệm cận:</strong> Chỉ giữ lại <strong>dominating / leading term</strong>, bỏ qua toàn bộ hệ số nhân."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC IV: BIG O NOTATION (KÝ HIỆU BIG O)
           ============================================================ */
        {
          id: "dsa-b5-sec4",
          roman: "IV",
          title: "Big O Notation (Ký hiệu Big O)",
          subsections: [
            {
              id: "dsa-b5-sub-4-1",
              number: "4.1",
              title: "Định nghĩa toán học & Chứng minh Big O",
              parts: [
                {
                  id: "dsa-b5-part-4-1-def",
                  label: "ĐỊNH NGHĨA BIG O",
                  title: "Khái niệm Cận trên tiệm cận (Asymptotic Upper Bound) & Hằng số c, n₀",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Định nghĩa:</strong> Cho hàm <code>f(n)</code>, ta nói <code>g(n)</code> là <strong>cận trên tiệm cận (asymptotic upper bound)</strong> của <code>f(n)</code>, ký hiệu <code>f(n) = O(g(n))</code>, nếu tồn tại hằng số <code>c &gt; 0</code> và số nguyên dương <code>n₀</code> sao cho:"
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "📐 Công thức Định nghĩa Big O",
                      text: "<code>f(n) ≤ c · g(n)</code> với mọi <code>n ≥ n₀</code>.<br/>• <code>f(n)</code> được gọi là <strong>bị chặn trên (bounded from above)</strong> bởi <code>g(n)</code>.<br/>• <code>O()</code> gọi là ký hiệu <strong>Big O</strong>."
                    },
                    {
                      type: "component",
                      component: "BigODefinitionVisualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-4-2",
              number: "4.2",
              title: "Bỏ qua hệ số (coefficient) của mọi term",
              parts: [
                {
                  id: "dsa-b5-part-4-2-coef",
                  label: "BỎ QUA HỆ SỐ",
                  title: "Hệ số nhân không làm thay đổi hàm chặn trên",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Theo định nghĩa: <code>2n²</code> và <code>30n²</code> có cùng upper bound là <code>n²</code> vì: <code>2n² = O(n²)</code> và <code>30n² = O(n²)</code>.",
                        "Chúng chỉ khác nhau ở việc chọn hằng số <code>c</code>.",
                        "➔ Trong Big O, có thể <strong>bỏ hệ số của mọi term</strong> trong công thức.",
                        "<strong>Ví dụ:</strong> <code>f(n) = 2n² + 100n = O(n²) + O(n)</code>."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-4-3",
              number: "4.3",
              title: "Tìm hằng số c và n₀ (Ví dụ minh họa)",
              parts: [
                {
                  id: "dsa-b5-part-4-3-find-c",
                  label: "CHỨNG MINH TÌM C VÀ N₀",
                  title: "Ví dụ bài toán tìm c và n₀ cho f(n) = 2n² + 100n",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Bài toán:</strong> Cho <code>f(n) = 2n² + 100n</code>, chứng minh <code>f(n) = O(n²)</code>."
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Nhận xét:</strong> <code>2n² + 100n ≤ 2n² + n² = 3n²</code> khi <code>n ≥ 100</code>.",
                        "<strong>Chọn hằng số:</strong> <code>c = 3</code> và <code>n₀ = 100</code>.",
                        "➔ Theo định nghĩa, <code>f(n) = O(n²)</code> (đã chứng minh xong)."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Ghi chú quan trọng",
                      text: "• <code>n² ≤ 2n² + 100n</code> với mọi <code>n</code>, tức <code>g(n) ≤ f(n)</code>, nhưng <code>g(n)</code> vẫn là asymptotic upper bound của <code>f(n)</code>.<br/>• <code>c</code> và <code>n₀</code> <strong>không duy nhất</strong> — Ví dụ có thể chọn <code>c = 102</code>, <code>n₀ = 1</code> (vì <code>f(n) ≤ 102n²</code> khi <code>n ≥ 1</code>).<br/>• <strong>Câu hỏi:</strong> Có thể viết <code>f(n) = O(n³)</code> không? ➔ <strong>CÓ</strong> (vì bound không cần chặt)."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-4-4",
              number: "4.4",
              title: "Bound có 'chặt' (tight) không?",
              parts: [
                {
                  id: "dsa-b5-part-4-4-tightness",
                  label: "TIGHTEST BOUND",
                  title: "Khái niệm chặn chặt và sự lựa chọn tối ưu",
                  content: [
                    {
                      type: "paragraph",
                      text: "Độ phức tạp của algorithm có thể bị chặn bởi <strong>nhiều hàm số</strong>:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Ví dụ: <code>f(n) = 2n² + 100n</code> bị chặn bởi <code>n²</code>, <code>n³</code>, <code>n⁴</code>,... ➔ Tất cả đều đúng: <code>f(n) = O(n²)</code>; <code>f(n) = O(n³)</code>; <code>f(n) = O(n⁴)</code>.",
                        "Nhưng ta quan tâm nhất đến <strong>tightest bound (cận chặt nhất)</strong> — ở đây là <strong>n²</strong>."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-4-5",
              number: "4.5",
              title: "Growth Terms: Order-of-Magnitude",
              parts: [
                {
                  id: "dsa-b5-part-4-5-order",
                  label: "ORDER OF MAGNITUDE",
                  title: "Thứ tự tăng trưởng chuẩn & Ma trận so sánh",
                  content: [
                    {
                      type: "paragraph",
                      text: "Trong asymptotic analysis, công thức có thể đơn giản hoá thành <strong>1 term với hệ số = 1</strong> ➔ gọi là <strong>growth term</strong> (rate of growth / order of growth / order-of-magnitude)."
                    },
                    {
                      type: "component",
                      component: "GrowthRateComparisonTable"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-4-6",
              number: "4.6",
              title: "Các Ví dụ Tiêu Biểu về Big O",
              parts: [
                {
                  id: "dsa-b5-part-4-6-examples",
                  label: "VÍ DỤ BIG O",
                  title: "Rút gọn các hàm số phức tạp về Big O tương ứng",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<code>f1(n) = ¾n + 4</code> ➔ <strong>O(n)</strong>",
                        "<code>f2(n) = 240n + 0.001n²</code> ➔ <strong>O(n²)</strong>",
                        "<code>f3(n) = n log n + log n + n log(log n)</code> ➔ <strong>O(n log n)</strong>"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-4-7",
              number: "4.7",
              title: "Exponential Time vs Quadratic Time (2ⁿ vs 300n²)",
              parts: [
                {
                  id: "dsa-b5-part-4-7-exp-quad",
                  label: "SO SÁNH 2ⁿ VS 300n²",
                  title: "Thử nghiệm so sánh siêu máy tính 200M cases/s vs máy 33MHz",
                  content: [
                    {
                      type: "component",
                      component: "ExponentialVsQuadraticCompare"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-4-8",
              number: "4.8",
              title: "Ví dụ Thực Tế: Định Luật Moore (Moore's Law)",
              parts: [
                {
                  id: "dsa-b5-part-4-8-moore",
                  label: "MOORE'S LAW",
                  title: "Tăng trưởng cấp số nhân trong công nghiệp bán dẫn",
                  content: [
                    {
                      type: "callout",
                      variant: "info",
                      title: "🚀 Định Luật Moore (Moore's Law)",
                      text: "<strong>Gordon Moore</strong> (đồng sáng lập Intel) dự đoán năm 1965: số transistor trên mỗi inch vuông chip sẽ <strong>tăng theo cấp số nhân (exponentially)</strong>, <strong>gấp đôi mỗi ~2 năm</strong>.<br/>Intel đã duy trì được tốc độ tăng trưởng kinh ngạc này trong gần <strong>40 năm</strong>."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-4-9",
              number: "4.9",
              title: "Tổng kết: Order-of-Magnitude & Big O",
              parts: [
                {
                  id: "dsa-b5-part-4-9-summary",
                  label: "TỔNG KẾT MỤC 4",
                  title: "Tính chất của growth-rate functions & Cần nhớ",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Thứ tự tăng trưởng phổ biến:</strong> <code>O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(n³) &lt; O(2ⁿ) &lt; ...</code>",
                        "<strong>Tính chất của growth-rate functions:</strong><br/>• Có thể <strong>bỏ qua low-order terms</strong> (số hạng bậc thấp).<br/>• Có thể <strong>bỏ qua hệ số nhân (multiplicative constant)</strong> trong high-order term.<br/>• <code>O(f(n)) + O(g(n)) = O(f(n) + g(n))</code>"
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 4)",
                      text: "• <strong>Định nghĩa Big O:</strong> <code>f(n) ≤ c·g(n)</code> với mọi <code>n ≥ n₀</code>, tồn tại <code>c &gt; 0</code>.<br/>• Bỏ hệ số, chỉ giữ leading term.<br/>• Thứ tự tăng trưởng: <code>O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(n³) &lt; O(2ⁿ)</code>.<br/>• Một <code>f(n)</code> có thể có <strong>nhiều upper bound</strong>, nhưng ta quan tâm <strong>tightest bound</strong>.<br/>• <code>O(f(n)) + O(g(n)) = O(f(n) + g(n))</code>."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC V: CÁCH TÌM ĐỘ PHỨC TẠP (COMPLEXITY) CỦA CHƯƠNG TRÌNH
           ============================================================ */
        {
          id: "dsa-b5-sec5",
          roman: "V",
          title: "Cách tìm độ phức tạp (complexity) của chương trình",
          subsections: [
            {
              id: "dsa-b5-sub-5-1",
              number: "5.1",
              title: "Một số quy tắc ước lượng nhanh (Rules of Thumb)",
              parts: [
                {
                  id: "dsa-b5-part-5-1-rules",
                  label: "RULES OF THUMB",
                  title: "Đoán nhanh độ phức tạp theo cấu trúc mã nguồn",
                  content: [
                    {
                      type: "paragraph",
                      text: "Về cơ bản: <strong>đếm số statement được thực thi</strong> trong thuật toán."
                    },
                    {
                      type: "component",
                      component: "ComplexityRulesOfThumb"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-5-2",
              number: "5.2",
              title: "Các Ví Dụ Điển Hình Tìm Complexity",
              parts: [
                {
                  id: "dsa-b5-part-5-2-examples",
                  label: "VÍ DỤ TÌM COMPLEXITY",
                  title: "Phân tích vòng lặp nhân đôi i*=2 và chuỗi hình học lồng nhau",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Ví dụ 1:</strong> Vòng lặp tăng theo cấp số nhân:"
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "🔍 Ví dụ 1: Vòng lặp i *= 2",
                      text: "<code>int sum = 0;<br/>for (int i = 1; i &lt; n; i *= 2) { sum++; }</code><br/><br/>• <code>sum</code> tăng khi <code>i = 1, 2, 4, 8, ..., 2ᵏ</code> với <code>k = log₂ n</code>.<br/>• Có <code>k + 1</code> lần lặp ➔ Độ phức tạp: <strong>O(k)</strong> hay <strong>O(log n)</strong>.<br/>• <em>Ghi chú:</em> Trong Computer Science, <code>log n</code> ngầm hiểu là <code>log₂ n</code>. Khi cơ số đổi từ 2 sang 10: <code>O(log₁₀ n) = O(log₂ n)</code> (vì <code>log₁₀ n = log₂ n / log₂ 10</code>, chỉ khác hằng số hệ số)."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Ví dụ 2 (giả sử n là luỹ thừa của 3):</strong>"
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "🔍 Ví dụ 2: Vòng lặp lồng i *= 3 và Chuỗi Hình Học",
                      text: "<code>int sum = 0;<br/>for (int i = 1; i &lt; n; i *= 3) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;for (j = 1; j &lt;= i; j++) { sum++; }<br/>}</code><br/><br/><strong>Tính tổng:</strong><br/><code>f(n) = 1 + 3 + 9 + 27 + ... + 3^(log₃ n)</code><br/><code>= n + n/3 + n/9 + ... + 3 + 1</code> (đảo ngược thứ tự term)<br/><code>= n * (1 + 1/3 + 1/9 + ...)</code><br/><code>≈ n * (3/2) = 3n/2 = O(n)</code>.<br/><br/><em>Công thức chuỗi hình học:</em> <code>a₁ = 1; c = 1/3 ➔ sum = 1 / (1 - 1/3) = 3/2</code>."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-5-3",
              number: "5.3",
              title: "Ví dụ: Phân tích Tháp Hà Nội (Tower of Hanoi)",
              parts: [
                {
                  id: "dsa-b5-part-5-3-hanoi",
                  label: "TOWER OF HANOI",
                  title: "Độ phức tạp thời gian mũ O(2ⁿ)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Số lần di chuyển (moves) của thuật toán là <strong>2ⁿ - 1</strong>.",
                        "<strong>Gợi ý chứng minh:</strong> <code>f(1) = 1</code>, <code>f(n) = f(n-1) + 1 + f(n-1)</code>, chứng minh bằng <strong>quy nạp (induction)</strong>.",
                        "Giả sử mỗi lần di chuyển tốn thời gian <code>t</code>, thì: <code>f(n) = t * (2ⁿ - 1) = O(2ⁿ)</code>.",
                        "➔ <strong>Tower of Hanoi là thuật toán thời gian mũ (exponential time algorithm).</strong>"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-5-4",
              number: "5.4",
              title: "So sánh Sequential Search vs Binary Search",
              parts: [
                {
                  id: "dsa-b5-part-5-4-searching",
                  label: "TÌM KIẾM TUẦN TỰ VS NHỊ PHÂN",
                  title: "Mã nguồn, phân tích toán học và suy luận worst case",
                  content: [
                    {
                      type: "component",
                      component: "SearchAlgorithmComparator"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-5-5",
              number: "5.5",
              title: "Phân tích theo các trường hợp (Worst, Best, Average Case)",
              parts: [
                {
                  id: "dsa-b5-part-5-5-cases",
                  label: "3 LOẠI PHÂN TÍCH",
                  title: "Worst-Case, Best-Case, Average-Case & Ma trận hiệu quả",
                  content: [
                    {
                      type: "component",
                      component: "CaseAnalysisCards"
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "❓ Câu hỏi về Best-Case của Binary Search",
                      text: "<strong>Câu hỏi:</strong> Best case complexity của Binary Search (dữ liệu đã sắp xếp) là gì?<br/>➔ <strong>Best-case = O(1)</strong> (khi phần tử cần tìm nằm ngay vị trí giữa <code>mid</code> ban đầu). Tuy nhiên Best-case <strong>không thú vị / không đáng quan tâm (not interesting)</strong> vì rất hiếm khi xảy ra và không phản ánh hiệu quả tổng thể."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-5-6",
              number: "5.6",
              title: "Giữ góc nhìn đúng đắn (Keeping Your Perspective)",
              parts: [
                {
                  id: "dsa-b5-part-5-6-perspective",
                  label: "GIỮ GÓC NHÌN ĐÚNG ĐẮN",
                  title: "Trade-offs thực tế, Style vs Efficiency và Ký hiệu mở rộng",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Nếu kích thước bài toán <strong>luôn nhỏ</strong>, có thể <strong>bỏ qua</strong> hiệu quả của algorithm.",
                        "Cân nhắc <strong>trade-off</strong> giữa yêu cầu về <strong>thời gian (time)</strong> và <strong>bộ nhớ (memory)</strong>.",
                        "So sánh algorithm cả về <strong>style</strong> lẫn <strong>efficiency</strong>.",
                        "Order-of-magnitude analysis tập trung vào <strong>bài toán lớn</strong>.",
                        "Còn có các ký hiệu khác: <strong>Big Omega (Ω)</strong>, <strong>Big Theta (Θ)</strong>, <strong>little oh (o)</strong>, <strong>little omega (ω)</strong> — sẽ học ở môn nâng cao."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 5)",
                      text: "• <strong>3 loại phân tích:</strong> <strong>Worst-case</strong> (thường dùng nhất), <strong>Best-case</strong> (ít hữu ích), <strong>Average-case</strong> (khó nhất, cần phân phối xác suất).<br/>• <strong>Sequential Search:</strong> Worst = Average = O(n), Best = O(1).<br/>• <strong>Binary Search:</strong> O(log n) (worst case), Best = O(1).<br/>• <strong>Rule of thumb:</strong> loop n lần ➔ O(n); giảm phạm vi theo tỉ lệ mỗi lần lặp ➔ O(log n)."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC VI: MỘT SỐ THỰC NGHIỆM (SOME EXPERIMENTS)
           ============================================================ */
        {
          id: "dsa-b5-sec6",
          roman: "VI",
          title: "Một số thực nghiệm (Some Experiments)",
          subsections: [
            {
              id: "dsa-b5-sub-6-1",
              number: "6.1",
              title: "So sánh Running Times & Doubling Test",
              parts: [
                {
                  id: "dsa-b5-part-6-1-experiments",
                  label: "SO SÁNH RUNNING TIMES",
                  title: "Thực nghiệm đo thời gian 3 loại vòng lặp (Single, Doubly, Triply)",
                  content: [
                    {
                      type: "paragraph",
                      text: "So sánh thời gian chạy thực tế của 3 loại vòng lặp: <strong>single loop</strong> (<code>O(n)</code>), <strong>doubly nested loop</strong> (<code>O(n²)</code>), và <strong>triply nested loop</strong> (<code>O(n³)</code>)."
                    },
                    {
                      type: "component",
                      component: "RunningTimeExperimentTable"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-6-2",
              number: "6.2",
              title: "📌 Cần nhớ (Mục 6)",
              parts: [
                {
                  id: "dsa-b5-part-6-2-summary",
                  label: "CẦN NHỚ MỤC 6",
                  title: "Tóm tắt quy luật thực nghiệm Doubling Test",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 6)",
                      text: "• Khi <code>n</code> tăng gấp đôi, thời gian chạy của <strong>O(n²) tăng khoảng 4 lần</strong> (≈ 2²); của <strong>O(n³) tăng khoảng 8 lần</strong> (≈ 2³) — <strong>khớp hoàn toàn với lý thuyết độ phức tạp</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC VII: CÔNG THỨC DÙNG TRONG PHÂN TÍCH THUẬT TOÁN (FORMULAS)
           ============================================================ */
        {
          id: "dsa-b5-sec7",
          roman: "VII",
          title: "Công thức dùng trong phân tích thuật toán (Formulas)",
          subsections: [
            {
              id: "dsa-b5-sub-7-1",
              number: "7.1",
              title: "Chuỗi Hình Học (Geometric Series)",
              parts: [
                {
                  id: "dsa-b5-part-7-1-geometric",
                  label: "CHUỖI HÌNH HỌC",
                  title: "Công thức tổng chuỗi vô hạn hội tụ dùng trong Ví dụ 5.2",
                  content: [
                    {
                      type: "paragraph",
                      text: "Chuỗi hình học (geometric series) dùng trong <strong>Ví dụ 5.2</strong>:"
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "📐 Chuỗi hình học Ví dụ 5.2",
                      text: "<code>a₁ = 1; c = 1/3</code><br/><code>sum = 1 / (1 - 1/3) = 3/2</code>."
                    },
                    {
                      type: "component",
                      component: "GeometricSeriesVisualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-7-2",
              number: "7.2",
              title: "📌 Cần nhớ (Mục 7)",
              parts: [
                {
                  id: "dsa-b5-part-7-2-summary",
                  label: "CẦN NHỚ MỤC 7",
                  title: "Công thức tổng quát chuỗi hình học vô hạn",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 7)",
                      text: "• Công thức tổng chuỗi hình học vô hạn: <code>1 + c + c² + c³ + ... = 1 / (1 - c)</code> (khi <code>|c| &lt; 1</code>).<br/>• Dùng để <strong>tính tổng các term giảm dần theo tỉ lệ cố định</strong> trong các thuật toán chia nhỏ phạm vi."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC VIII: TỔNG KẾT CHƯƠNG (KEY TAKEAWAYS)
           ============================================================ */
        {
          id: "dsa-b5-sec8",
          roman: "VIII",
          title: "Tổng kết chương (Key Takeaways)",
          subsections: [
            {
              id: "dsa-b5-sub-8-1",
              number: "8.1",
              title: "Luyện Phản Xạ Nhanh Big-O (Flashcards)",
              parts: [
                {
                  id: "dsa-b5-part-8-1-flashcards",
                  label: "FLASHCARDS BIG-O",
                  title: "Bộ thẻ lật kiểm tra nhanh nhận diện độ phức tạp các bài toán kinh điển",
                  content: [
                    {
                      type: "component",
                      component: "BigOFlashcards"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-8-2",
              number: "8.2",
              title: "Master Dashboard Tổng Kết Toàn Diện",
              parts: [
                {
                  id: "dsa-b5-part-8-2-dashboard",
                  label: "DASHBOARD TỔNG KẾT",
                  title: "Hệ thống hóa toàn bộ kiến thức Bài 5",
                  content: [
                    {
                      type: "component",
                      component: "Bai5SummaryDashboard"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b5-sub-8-3",
              number: "8.3",
              title: "📌 Tổng Kết Toàn Bài (Key Takeaways)",
              parts: [
                {
                  id: "dsa-b5-part-8-3-master-takeaways",
                  label: "KEY TAKEAWAYS",
                  title: "Toàn bộ điểm cốt lõi của Bài 5: Analysis of Algorithms",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Algorithm:</strong> Thủ tục từng bước, bắt buộc thỏa mãn 4 tính chất: <code>exact - terminate - effective - general</code>.",
                        "<strong>Analysis of Algorithms:</strong> So sánh <strong>method</strong>, không so sánh <strong>program</strong>; phải <strong>độc lập</strong> với ngôn ngữ, compiler, máy tính, và dữ liệu.",
                        "Đánh giá bằng cách <strong>đếm operations / statements</strong>, không đo run time thực tế.",
                        "<strong>Big O:</strong> <code>f(n) = O(g(n))</code> nếu tồn tại <code>c &gt; 0, n₀</code> sao cho <code>f(n) ≤ c·g(n)</code> với mọi <code>n ≥ n₀</code>. Bỏ hệ số, chỉ giữ leading term, luôn ưu tiên <strong>tightest bound</strong>.",
                        "<strong>Thứ tự tăng trưởng:</strong> <code>O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(n³) &lt; O(2ⁿ)</code>.",
                        "<strong>Rules of thumb:</strong> Loop chạy n lần ➔ <code>O(n)</code>; Loop lồng nhau (n × m) ➔ <code>O(n·m)</code>; Giảm phạm vi theo tỉ lệ cố định ➔ <code>O(log n)</code>; Đệ quy n lời gọi ➔ <code>O(n)</code>; n log n lời gọi ➔ <code>O(n log n)</code>.",
                        "<strong>Sequential Search:</strong> <code>O(n)</code> (worst / average), <code>O(1)</code> (best).",
                        "<strong>Binary Search:</strong> <code>O(log n)</code> (worst case, yêu cầu mảng đã sắp xếp), <code>O(1)</code> (best).",
                        "<strong>Tower of Hanoi:</strong> <code>O(2ⁿ)</code> — exponential time algorithm.",
                        "<strong>3 loại phân tích:</strong> <strong>Worst-case</strong> (phổ biến & hữu ích nhất), <strong>Best-case</strong> (ít dùng), <strong>Average-case</strong> (khó nhất, cần biết phân phối xác suất)."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "🏆 Hoàn thành Bài 5: Analysis of Algorithms",
                      text: "Chúc mừng bạn đã hoàn thành toàn bộ bài học <strong>Phân Tích Thuật Toán (Analysis of Algorithms)</strong> — nền tảng quan trọng nhất để đánh giá và thiết kế các cấu trúc dữ liệu và giải thuật nâng cao!"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       BÀI 6: SORTING (CÁC THUẬT TOÁN SẮP XẾP)
       ============================================================ */
    {
      id: "dsa-b6",
      title: "Bài 6",
      subtitle: "Sorting (Các thuật toán sắp xếp)",
      sections: [
        /* OVERVIEW SECTION: HERO BANNER BÀI 6 */
        {
          id: "dsa-b6-sec0",
          roman: "OVERVIEW",
          title: "Giới thiệu Bài 6: Sorting (Các thuật toán sắp xếp)",
          subsections: [
            {
              id: "dsa-b6-sub-0-1",
              number: "0.1",
              title: "Tựa đề & Tổng quan Bài 6",
              parts: [
                {
                  id: "dsa-b6-part-hero",
                  label: "TỰA ĐỀ & TỔNG QUAN BÀI 6",
                  title: "Sorting — Toàn cảnh các giải thuật sắp xếp kinh điển & tối ưu",
                  content: [
                    {
                      type: "component",
                      component: "DsaSortingHeroBanner"
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC 0: TẠI SAO PHẢI HỌC SORTING?
           ============================================================ */
        {
          id: "dsa-b6-sec-why",
          roman: "0",
          title: "Tại sao phải học Sorting?",
          subsections: [
            {
              id: "dsa-b6-sub-why-1",
              number: "0.1",
              title: "Tầm quan trọng & Các chiều hướng giải thuật",
              parts: [
                {
                  id: "dsa-b6-part-why-core",
                  label: "TẦM QUAN TRỌNG CỦA SORTING",
                  title: "Khái niệm Sort Key, 5 Hướng Giải Thuật & 5 Ứng Dụng Thực Tiễn",
                  content: [
                    {
                      type: "paragraph",
                      text: "Khi dữ liệu đầu vào (input) đã được sắp xếp theo một <strong>sort key</strong> nào đó, nhiều bài toán xử lý thông tin trở nên dễ giải quyết hơn rất nhiều (Ví dụ: tìm kiếm phần tử, tìm min/max, tìm phần tử nhỏ thứ $k$...). Sorting thể hiện nhiều ý tưởng thuật toán kinh điển:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Internal sort (sắp xếp trong bộ nhớ)</strong> vs <strong>external sort (sắp xếp ngoài, dùng file/đĩa)</strong>.",
                        "<strong>Iterative (lặp)</strong> vs <strong>recursive (đệ quy)</strong>.",
                        "<strong>Comparison-based (dựa trên so sánh)</strong> vs <strong>non-comparison-based (không dựa trên so sánh)</strong>.",
                        "<strong>Divide-and-conquer (chia để trị)</strong>.",
                        "<strong>Best / worst / average case bounds</strong> (độ phức tạp tốt nhất / xấu nhất / trung bình)."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Các ứng dụng thực tiễn then chốt của Sorting:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Kiểm tra tính duy nhất (uniqueness testing):</strong> Quét mảng đã sắp xếp trong $O(n)$ để tìm phần tử trùng.",
                        "<strong>Xóa phần tử trùng lặp (deleting duplicates):</strong> Loại bỏ các bản ghi trùng lặp nằm kề nhau.",
                        "<strong>Đếm tần suất (frequency counting):</strong> Thống kê số lần xuất hiện của từng giá trị.",
                        "<strong>Giao / hợp / hiệu tập hợp (set intersection / union / difference):</strong> Kỹ thuật 2 con trỏ trong $O(n + m)$.",
                        "<strong>Tìm kiếm hiệu quả (efficient searching):</strong> Từ điển, danh bạ điện thoại/địa chỉ, mục lục sách, chỉ mục tác giả/database."
                      ]
                    },
                    {
                      type: "component",
                      component: "SortingFundamentalsOverview"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b6-sub-why-2",
              number: "0.2",
              title: "📌 Cần nhớ (Mục 0)",
              parts: [
                {
                  id: "dsa-b6-part-why-summary",
                  label: "CẦN NHỚ MỤC 0",
                  title: "Quy tắc cốt lõi về Sort Key & Thứ tự sắp xếp",
                  content: [
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 0)",
                      text: "• <strong>Sort key</strong> là tiêu chí dùng để so sánh / sắp xếp các phần tử.<br/>• <strong>Quy ước:</strong> Cả bài chỉ xét <strong>sắp xếp tăng dần (Ascending order)</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC I: SELECTION SORT (SẮP XẾP CHỌN)
           ============================================================ */
        {
          id: "dsa-b6-sec1",
          roman: "I",
          title: "Selection Sort (Sắp xếp chọn)",
          subsections: [
            {
              id: "dsa-b6-sub-1-1",
              number: "1.1",
              title: "Khái niệm & Ví dụ minh họa",
              parts: [
                {
                  id: "dsa-b6-part-1-1-concept",
                  label: "KHÁI NIỆM & VÍ DỤ",
                  title: "Nguyên lý tìm Max đưa về cuối & Trace mảng 5 số nguyên",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Khái niệm:</strong> Cho mảng $n$ phần tử:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Bước 1:</strong> Tìm phần tử <strong>lớn nhất (Max)</strong>.",
                        "<strong>Bước 2:</strong> Hoán đổi (swap) nó với phần tử ở <strong>cuối mảng</strong>.",
                        "<strong>Bước 3:</strong> Lặp lại bước 1, loại phần tử lớn nhất vừa xếp ra khỏi phạm vi xét."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "🔍 Ví dụ (mảng 5 số nguyên): 29 10 14 37 13",
                      text: "• <code>29 10 14 37 13</code> ➔ <strong>37</strong> là lớn nhất, swap với <strong>13</strong> (phần tử cuối)<br/>• <code>29 10 14 13 37</code> ➔ <strong>29</strong> là lớn nhất trong phần còn lại, swap với <strong>13</strong><br/>• <code>13 10 14 29 37</code> ➔ <strong>14</strong> là lớn nhất, swap với <strong>14</strong><br/>• <code>13 10 14 29 37</code> ➔ <strong>13</strong> là lớn nhất, swap với <strong>10</strong><br/>• <code>10 13 14 29 37</code> ➔ <strong>Đã sắp xếp hoàn tất (Sorted)!</strong>"
                    },
                    {
                      type: "component",
                      component: "SelectionSortDeepDive"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b6-sub-1-2",
              number: "1.2",
              title: "Mã nguồn Java & Độ phức tạp Time / Space",
              parts: [
                {
                  id: "dsa-b6-part-1-2-analysis",
                  label: "MÃ NGUỒN & PHÂN TÍCH",
                  title: "Phân tích số phép so sánh, số lần swap cố định và tính chất Unstable",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Phân tích độ phức tạp thời gian & không gian (Time/Space Complexity):</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Vòng ngoài:</strong> Chạy đúng <code>n - 1</code> lần.",
                        "<strong>Vòng trong (tìm max):</strong> Tổng số lần chạy = <code>(n-1) + (n-2) + ... + 1 = n(n-1)/2</code>.",
                        "<strong>Số phép hoán đổi (Swap):</strong> Chạy đúng <code>n - 1</code> lần.",
                        "<strong>Tổng thời gian:</strong> <code>t1 × (n-1) + t2 × n(n-1)/2 = O(n²)</code> (với $t_1, t_2$ là chi phí các câu lệnh trong khối ngoài/trong)."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 1)",
                      text: "• <strong>Ý tưởng:</strong> Chọn phần tử lớn nhất, đưa về cuối, thu hẹp phạm vi.<br/>• <strong>Độ phức tạp:</strong> Luôn là <strong>O(n²)</strong> dù input đã sắp xếp hay chưa (không có best case tốt hơn).<br/>• <strong>Bộ nhớ &amp; Tính chất:</strong> Selection Sort là <strong>In-Place (O(1))</strong>, nhưng <strong>KHÔNG STABLE (Unstable)</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC II: BUBBLE SORT (SẮP XẾP NỔI BỌT)
           ============================================================ */
        {
          id: "dsa-b6-sec2",
          roman: "II",
          title: "Bubble Sort (Sắp xếp nổi bọt)",
          subsections: [
            {
              id: "dsa-b6-sub-2-1",
              number: "2.1",
              title: "Khái niệm, Ví dụ & Bản gốc O(n²)",
              parts: [
                {
                  id: "dsa-b6-part-2-1-concept",
                  label: "KHÁI NIỆM & BẢN GỐC",
                  title: "Nguyên lý so sánh cặp liền kề đẩy bong bóng về cuối",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Khái niệm:</strong> \"Bong bóng\" (bubble) đẩy dần phần tử lớn nhất về cuối mảng trong mỗi lượt (pass), bằng cách so sánh phần tử thứ $j$ và $j+1$. Nếu <code>a[j] &gt; a[j+1]</code> (sai thứ tự) thì hoán đổi (swap)."
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "🔍 Ví dụ (2 pass đầu, mảng 5 số nguyên): 29 10 14 37 13",
                      text: "• <strong>Pass 1:</strong> <code>29 10 14 37 13</code> ➔ <code>10 29 14 37 13</code> ➔ <code>10 14 29 37 13</code> ➔ <code>10 14 29 37 13</code> ➔ <code>10 14 29 13 37</code> (cuối pass 1: <strong>37 lớn nhất</strong> về vị trí cuối)<br/>• <strong>Pass 2:</strong> <code>10 14 29 13 37</code> ➔ ... ➔ <code>10 14 13 29 37</code> (cuối pass 2: <strong>29 lớn nhì</strong> về vị trí gần cuối)"
                    },
                    {
                      type: "bullets",
                      items: [
                        "1 lần lặp của vòng trong (so sánh + swap) tốn thời gian hằng số <code>c</code>.",
                        "<strong>Vòng ngoài:</strong> đúng <code>n - 1</code> lần.",
                        "<strong>Vòng trong:</strong> khi $i=1 \to (n-1)$ lần, $i=2 \to (n-2)$ lần, ..., $i=(n-1) \to 1$ lần.",
                        "<strong>Tổng số lần lặp:</strong> <code>(n-1) + (n-2) + ... + 1 = n(n-1)/2</code>.",
                        "<strong>Tổng thời gian bản gốc:</strong> <code>c × n(n-1)/2 = O(n²)</code>."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b6-sub-2-2",
              number: "2.2",
              title: "Bản cải tiến với cờ isSorted & Phân tích Best Case O(n)",
              parts: [
                {
                  id: "dsa-b6-part-2-2-improved",
                  label: "BẢN CẢI TIẾN ISSORTED",
                  title: "Kỹ thuật ngắt sớm (Early Exit) đạt Best Case O(n)",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Bubble Sort kém hiệu quả:</strong> Với input đã sorted sẵn, Bubble Sort bản gốc vẫn tốn <code>O(n²)</code> vì không kiểm tra xem mảng đã sắp xếp hay chưa. ➔ <strong>Cải tiến:</strong> dùng cờ <code>boolean isSorted</code>."
                    },
                    {
                      type: "component",
                      component: "BubbleSortOptimizationFlow"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Worst case (Bản cải tiến):</strong> Input giảm dần ngược ➔ cần đủ <code>n - 1</code> lượt ở vòng ngoài ➔ vẫn là <strong>O(n²)</strong>.",
                        "<strong>Best case (Bản cải tiến):</strong> Input đã tăng dần ➔ thuật toán return ngay sau đúng 1 lượt vòng ngoài ➔ đạt <strong>O(n)</strong>."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 2)",
                      text: "• <strong>Ý tưởng:</strong> So sánh cặp liền kề, đẩy phần tử lớn về cuối qua từng pass.<br/>• <strong>Bubble Sort gốc:</strong> Worst = Best = <strong>O(n²)</strong>.<br/>• <strong>Bubble Sort cải tiến (có flag isSorted):</strong> Worst = <strong>O(n²)</strong>, Best = <strong>O(n)</strong>.<br/>• <strong>Bộ nhớ &amp; Tính chất:</strong> Bubble Sort là <strong>In-Place</strong> và <strong>STABLE (Ổn định)</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC III: INSERTION SORT (SẮP XẾP CHÈN)
           ============================================================ */
        {
          id: "dsa-b6-sec3",
          roman: "III",
          title: "Insertion Sort (Sắp xếp chèn)",
          subsections: [
            {
              id: "dsa-b6-sub-3-1",
              number: "3.1",
              title: "Khái niệm, Ẩn dụ bài poker & Ví dụ",
              parts: [
                {
                  id: "dsa-b6-part-3-1-concept",
                  label: "KHÁI NIỆM & ẨN DỤ",
                  title: "Ẩn dụ xếp bài poker trên tay, phân vùng S1/S2 & Trace dãy 4 số",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Khái niệm:</strong> Giống cách sắp xếp bài poker trên tay:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Bước 1:</strong> Bắt đầu với 1 lá bài trong tay (phân vùng $S_1$).",
                        "<strong>Bước 2:</strong> Lấy lá tiếp theo từ $S_2$, chèn vào đúng vị trí đã sắp xếp trong $S_1$.",
                        "<strong>Bước 3:</strong> Lặp lại cho tất cả các lá bài còn lại."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "🔍 Ví dụ (n = 4): 40 13 20 8",
                      text: "• $S_1$ = phần đã sắp xếp, $S_2$ = phần chưa xử lý<br/>• Dãy ban đầu: <code>40 13 20 8</code><br/>• <strong>i = 1:</strong> <code>13 40 20 8</code><br/>• <strong>i = 2:</strong> <code>13 20 40 8</code><br/>• <strong>i = 3:</strong> <code>8 13 20 40</code> (Đã sắp xếp xong!)"
                    },
                    {
                      type: "component",
                      component: "InsertionSortPartitionShift"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b6-sub-3-2",
              number: "3.2",
              title: "Mã nguồn Java & Độ phức tạp Time / Space",
              parts: [
                {
                  id: "dsa-b6-part-3-2-analysis",
                  label: "MÃ NGUỒN & PHÂN TÍCH",
                  title: "Cơ chế dịch shift a[j+1] = a[j] & Phân tích Best/Worst Case",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Vòng ngoài:</strong> Chạy đúng <code>n - 1</code> lần.",
                        "<strong>Vòng trong (phụ thuộc input):</strong>",
                        "• <strong>Best case:</strong> Mảng đã sorted sẵn ➔ <code>a[j] &gt; next</code> luôn sai ➔ không shift dữ liệu, vòng trong không chạy ➔ <strong>O(n)</strong>.",
                        "• <strong>Worst case:</strong> Mảng sorted ngược (giảm dần) ➔ <code>a[j] &gt; next</code> luôn đúng ➔ cần $i$ lần shift với mỗi $i$ từ $1$ đến $n-1$ (phần tử luôn chèn ở đầu) ➔ <strong>O(n²)</strong>."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 3)",
                      text: "• <strong>Ý tưởng:</strong> Duy trì phần đã sắp xếp $S_1$, chèn từng phần tử mới vào đúng vị trí trong $S_1$.<br/>• <strong>Độ phức tạp:</strong> Best case = <strong>O(n)</strong> (mảng đã sorted), Worst case = <strong>O(n²)</strong> (mảng sorted ngược).<br/>• <strong>Bộ nhớ &amp; Tính chất:</strong> Insertion Sort là <strong>In-Place</strong> và <strong>STABLE (Ổn định)</strong>."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b6-sub-3-3",
              number: "3.3",
              title: "Tổng kết Nhóm O(n²) — Ma Trận Đối Chiếu Benchmark",
              parts: [
                {
                  id: "dsa-b6-part-3-3-benchmark",
                  label: "MA TRẬN BENCHMARK O(N²)",
                  title: "So sánh toàn diện Selection vs Bubble vs Insertion & Bẫy Thi Cử",
                  content: [
                    {
                      type: "component",
                      component: "QuadraticSortsBenchmark"
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC IV: MERGE SORT (SẮP XẾP TRỘN)
           ============================================================ */
        {
          id: "dsa-b6-sec4",
          roman: "IV",
          title: "Merge Sort (Sắp xếp trộn)",
          subsections: [
            {
              id: "dsa-b6-sub-4-1",
              number: "4.1",
              title: "Khái niệm Divide-and-Conquer & Cây Đệ Quy",
              parts: [
                {
                  id: "dsa-b6-part-4-1-concept",
                  label: "KHÁI NIỆM & CÂY ĐỆ QUY",
                  title: "Triết lý Chia Để Trị & 2 Pha Divide vs Conquer trên mảng 6 phần tử",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Khái niệm:</strong> Là thuật toán <strong>divide-and-conquer</strong> (chia để trị):"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Divide:</strong> Chia mảng thành 2 nửa (gần) bằng nhau.",
                        "<strong>Recursion:</strong> Đệ quy sắp xếp 2 nửa.",
                        "<strong>Conquer:</strong> Merge (trộn) 2 nửa đã sắp xếp thành mảng kết quả."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Ý tưởng chi tiết:</strong> Nếu chỉ biết cách merge 2 danh sách đã sorted thành 1, thì với $n$ phần tử (mỗi phần tử là 1 \"danh sách\" tự nó đã sorted), ta có thể:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Merge từng cặp danh sách 1 phần tử ➔ danh sách 2 phần tử đã sorted.",
                        "Merge từng cặp danh sách 2 phần tử ➔ danh sách 4 phần tử.",
                        "... Bước cuối cùng merge 2 danh sách $n/2$ phần tử ➔ danh sách $n$ phần tử."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "⭐ 3 bước của Divide-and-Conquer nói chung",
                      text: "1. <strong>Divide:</strong> Chia bài toán lớn thành bài toán nhỏ hơn.<br/>2. <strong>Đệ quy:</strong> Giải bài toán nhỏ.<br/>3. <strong>Conquer:</strong> Kết hợp kết quả các bài toán nhỏ để có kết quả bài toán lớn."
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "🔍 Ví dụ: 7 2 6 3 8 4 5",
                      text: "• <strong>Chia đôi:</strong> <code>[7 2 6 3]</code> và <code>[8 4 5]</code><br/>• <strong>Đệ quy sort từng nửa:</strong> <code>[2 3 6 7]</code> và <code>[4 5 8]</code><br/>• <strong>Merge:</strong> <code>2 3 4 5 6 7 8</code>"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Ví dụ mảng 6 phần tử:</strong> <code>38 16 27 39 12 27</code><br/>• <strong>Divide phase:</strong> các lời gọi đệ quy <code>mergeSort</code>.<br/>• <strong>Conquer phase:</strong> các bước <code>merge</code> – việc sắp xếp thực sự diễn ra ở đây."
                    },
                    {
                      type: "component",
                      component: "MergeSortRecursionTree"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b6-sub-4-2",
              number: "4.2",
              title: "Thuật toán Merge, Độ phức tạp Time / Space & Nhược điểm",
              parts: [
                {
                  id: "dsa-b6-part-4-2-analysis",
                  label: "THUẬT TOÁN MERGE & ĐỘ PHỨC TẠP",
                  title: "Phân tích 2 con trỏ Two-Pointers, Chi phí O(n log n) & Không In-Place",
                  content: [
                    {
                      type: "component",
                      component: "MergeAlgorithmVisualizer"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Phân tích bước Merge:</strong> Xét mảng con $k = j - i + 1$ phần tử:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Số phép so sánh $\\le k - 1$.",
                        "Số phép di chuyển từ mảng gốc sang temp: $k$.",
                        "Số phép di chuyển từ temp về mảng gốc: $k$.",
                        "➔ Tổng số thao tác $\\le 3k - 1 = O(k)$."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Phân tích toàn bộ Merge Sort (theo level đệ quy):</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Gọi $k$ là level lớn nhất (khi mergeSort chỉ còn 1 phần tử): $n/2^k - 1 \\implies k = \\log n$.",
                        "<strong>Level 0:</strong> gọi mergeSort($n$ phần tử) – 0 lần gọi merge.",
                        "<strong>Level 1:</strong> 2 lời gọi mergeSort($n/2$ phần tử) – 1 lần gọi merge với $n/2$ phần tử mỗi bên $\\to O(n)$ thời gian.",
                        "<strong>Level 2:</strong> 4 lời gọi mergeSort($n/4$ phần tử) – 2 lần gọi merge $\\to O(n)$ thời gian.",
                        "...",
                        "<strong>Level $(\\log n)$:</strong> $n$ lời gọi mergeSort(1 phần tử) – $2^{(\\log n - 1)} (= n/2)$ lần gọi merge $\\to O(n)$ thời gian.",
                        "Mỗi level đều tốn $O(n)$ thời gian, có tổng cộng $\\log n$ level ➔ <strong>Tổng thời gian = $(\\log n) \\times O(n) = O(n \\log n)$</strong>."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Nhược điểm của Merge Sort:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Cài đặt hàm <code>merge()</code> không đơn giản.",
                        "Cần thêm mảng tạm (<code>temp</code>) và copy dữ liệu ngược lại mảng gốc ➔ Space complexity phụ thêm = <strong>O(n) (không phải in-place)</strong>."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 4)",
                      text: "• <strong>Merge Sort</strong> = divide-and-conquer, chia đôi mảng, đệ quy sort, rồi merge.<br/>• Cần hàm <code>merge()</code> phụ để trộn 2 mảng con đã sorted.<br/>• <strong>Độ phức tạp:</strong> <strong>O(n log n)</strong> ở mọi trường hợp (best / worst / average).<br/>• Merge Sort <strong>không in-place</strong> (cần $O(n)$ bộ nhớ phụ) nhưng <strong>STABLE (Ổn định)</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC V: QUICK SORT (SẮP XẾP NHANH)
           ============================================================ */
        {
          id: "dsa-b6-sec5",
          roman: "V",
          title: "Quick Sort (Sắp xếp nhanh)",
          subsections: [
            {
              id: "dsa-b6-sub-5-1",
              number: "5.1",
              title: "Khái niệm, Ví dụ & Thuật toán Partition 3 Vùng",
              parts: [
                {
                  id: "dsa-b6-part-5-1-concept",
                  label: "KHÁI NIỆM & PHÂN HOẠCH",
                  title: "Triết lý Divide-Heavy & Thuật toán Phân hoạch 3 vùng S1, S2, Unknown",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Khái niệm:</strong> Cũng là thuật toán <strong>divide-and-conquer</strong>:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Divide:</strong> Chọn 1 phần tử làm <strong>pivot</strong> $p$, phân hoạch (partition) mảng $a[i..j]$ thành 2 phần:<br/>&nbsp;&nbsp;• <strong>Phần 1:</strong> các phần tử $< p$<br/>&nbsp;&nbsp;• <strong>Phần 2:</strong> các phần tử $\\ge p$",
                        "<strong>Đệ quy:</strong> Sắp xếp 2 phần.",
                        "<strong>Conquer:</strong> Không làm gì cả! Không cần merge."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "💡 Nhận xét then chốt giữa Merge Sort và Quick Sort",
                      text: "<strong>Merge Sort</strong> tốn hầu hết thời gian ở bước conquer, còn Divide rất nhanh.<br/><strong>Quick Sort</strong> thì ngược lại – tốn hầu hết thời gian ở bước divide (partition), Conquer không tốn gì."
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "🔍 Ví dụ: 27 38 12 39 27 16 (chọn phần tử đầu 27 làm pivot)",
                      text: "• <strong>Partition quanh pivot 27:</strong> <code>16 12 | 27 | 39 27 38</code><br/>• <strong>Đệ quy sort 2 phần:</strong> <code>12 16 | 27 | 27 38 39</code><br/>• Sau khi partition, pivot đã ở đúng vị trí cuối cùng của nó, <strong>không cần merge</strong>."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Thuật toán Partition:</strong> Chọn $a[i]$ làm pivot $p$. Các phần tử còn lại $a[i+1..j]$ chia thành 3 vùng:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>S1 = a[i+1..m]</code>: các phần tử $< p$",
                        "<code>S2 = a[m+1..k-1]</code>: các phần tử $\\ge p$",
                        "<code>Unknown = a[k..j]</code>: các phần tử chưa xét",
                        "Ban đầu $S_1, S_2$ rỗng ($m = i$), mọi phần tử (trừ pivot) đều ở vùng Unknown. Với mỗi $a[k]$ ($k$ từ $i+1$ đến $j$), so với $p$:<br/>&nbsp;&nbsp;• Nếu $a[k] \\ge p$ ➔ đưa vào $S_2$ (tăng $k$).<br/>&nbsp;&nbsp;• Ngược lại ($a[k] < p$) ➔ đưa vào $S_1$ (tăng $m$, swap $a[k]$ và $a[m]$, tăng $k$).",
                        "Sau khi xét hết, swap pivot với $a[m]$ để đưa pivot về đúng vị trí cuối cùng."
                      ]
                    },
                    {
                      type: "component",
                      component: "QuickSortPartitionVisualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b6-sub-5-2",
              number: "5.2",
              title: "Phân tích Độ phức tạp & Đối Chiếu Triết Lý",
              parts: [
                {
                  id: "dsa-b6-part-5-2-analysis",
                  label: "PHÂN TÍCH & ĐỐI CHIẾU TRIẾT LÝ",
                  title: "Trường hợp xấu nhất O(n²), Cây cân bằng O(n log n) & Đối chiếu triết lý với Merge Sort",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Phân tích Quick Sort:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Worst case:</strong> Khi $a[0..n-1]$ đã sorted tăng dần ➔ partition trả về $m = i$ ($S_1$ rỗng, $S_2$ chứa hết phần còn lại) ➔ mất cân bằng. Mỗi lần partition tốn thời gian tuyến tính, thuật toán có $n$ level ➔ <strong>tổng thời gian = $n + (n-1) + ... + 1 = O(n²)$</strong>.",
                        "<strong>Best case:</strong> Mỗi lần partition chia mảng thành 2 nửa bằng nhau ➔ độ sâu đệ quy = $\\log n$, mỗi level $\\le n$ phép so sánh ➔ <strong>O(n log n)</strong>.",
                        "<strong>Average case:</strong> Trong thực tế worst case hiếm gặp, trung bình có phân chia tốt lẫn xấu ➔ thời gian trung bình vẫn là <strong>O(n log n)</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "DivideConquerPhilosophyCompare"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 5)",
                      text: "• <strong>Quick Sort</strong> = chọn pivot, partition quanh pivot, đệ quy 2 phần, <strong>không cần merge</strong>.<br/>• <code>partition()</code> có độ phức tạp <strong>O(n)</strong> (chỉ có 1 vòng for).<br/>• <strong>Worst case:</strong> <strong>O(n²)</strong> (khi input đã sorted / gần sorted nếu chọn pivot ở đầu), <strong>Best / Average case:</strong> <strong>O(n log n)</strong>.<br/>• Quick Sort là <strong>In-Place</strong> (chỉ tốn $O(\\log n)$ stack đệ quy) nhưng <strong>KHÔNG STABLE (Unstable)</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC VI: RADIX SORT (SẮP XẾP THEO CƠ SỐ)
           ============================================================ */
        {
          id: "dsa-b6-sec6",
          roman: "VI",
          title: "Radix Sort (Sắp xếp theo cơ số)",
          subsections: [
            {
              id: "dsa-b6-sub-6-1",
              number: "6.1",
              title: "Khái niệm & Ví dụ minh họa",
              parts: [
                {
                  id: "dsa-b6-part-6-1-concept",
                  label: "KHÁI NIỆM & VÍ DỤ",
                  title: "Non-Comparison Sort & Trace 8 số nguyên qua 4 lượt chữ số",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Khái niệm:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Xem mỗi dữ liệu cần sort như 1 chuỗi ký tự (character string).",
                        "<strong>Không dùng so sánh</strong> giữa các phần tử ➔ là thuật toán <strong>non-comparison based sort</strong> (các thuật toán trước đó đều là comparison based sort).",
                        "Mỗi lượt (iteration), tổ chức dữ liệu thành các nhóm dựa theo ký tự (chữ số) tiếp theo của mỗi phần tử."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "🔍 Ví dụ (Radix Sort 8 số nguyên 4 chữ số)",
                      text: "• <strong>Ban đầu:</strong> <code>0123, 2154, 0222, 0004, 0283, 1560, 1061, 2150</code><br/>• <strong>Nhóm theo chữ số 4 (đơn vị):</strong> <code>(1560,2150) (1061) (0222) (0123,0283) (2154,0004)</code> ➔ Kết hợp: <code>1560, 2150, 1061, 0222, 0123, 0283, 2154, 0004</code><br/>• <strong>Nhóm theo chữ số 3 (hàng chục):</strong> <code>(0004) (0222,0123) (2150,2154) (1560,1061) (0283)</code> ➔ Kết hợp: <code>0004, 0222, 0123, 2150, 2154, 1560, 1061, 0283</code><br/>• <strong>Nhóm theo chữ số 2 (hàng trăm):</strong> <code>(0004,1061) (0123,2150,2154) (0222,0283) (1560)</code> ➔ Kết hợp: <code>0004, 1061, 0123, 2150, 2154, 0222, 0283, 1560</code><br/>• <strong>Nhóm theo chữ số 1 (hàng nghìn):</strong> <code>(0004,0123,0222,0283) (1061,1560) (2150,2154)</code> ➔ Kết hợp (đã sorted): <code>0004, 0123, 0222, 0283, 1061, 1560, 2150, 2154</code>"
                    },
                    {
                      type: "paragraph",
                      text: "➔ <strong>Quy tắc:</strong> Xử lý từ chữ số <strong>cuối (hàng đơn vị - LSD)</strong> về chữ số <strong>đầu (hàng cao nhất - MSD)</strong>."
                    },
                    {
                      type: "component",
                      component: "RadixSortBucketVisualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b6-sub-6-2",
              number: "6.2",
              title: "Pseudocode & Độ phức tạp Time / Space",
              parts: [
                {
                  id: "dsa-b6-part-6-2-analysis",
                  label: "PHÂN TÍCH ĐỘ PHỨC TẠP",
                  title: "Phá vỡ rào cản so sánh Ω(n log n) để đạt O(n)",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Phân tích độ phức tạp thời gian & không gian:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Độ phức tạp: <strong>O(d × n)</strong>, với $d$ là số chữ số tối đa của các số cần sort.",
                        "Vì $d$ cố định / bị chặn (bounded) ➔ độ phức tạp thực tế đạt <strong>O(n)</strong> (tuyến tính!)."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 6)",
                      text: "• Radix Sort <strong>không so sánh</strong> giữa các phần tử – sort theo từng chữ số, từ hàng thấp nhất lên cao nhất.<br/>• Dùng <strong>10 nhóm (queue)</strong> cho 10 chữ số 0-9 (cần mảng <code>temp</code> phụ).<br/>• <strong>Độ phức tạp:</strong> <strong>O(d × n) = O(n)</strong> (do $d$ cố định) – nhanh hơn các sort dựa trên so sánh."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC VII: SO SÁNH CÁC THUẬT TOÁN SORT (TỔNG KẾT CHƯƠNG)
           ============================================================ */
        {
          id: "dsa-b6-sec7",
          roman: "VII",
          title: "So sánh các thuật toán Sort",
          subsections: [
            {
              id: "dsa-b6-sub-7-1",
              number: "7.1",
              title: "In-Place Sort & Stable Sort",
              parts: [
                {
                  id: "dsa-b6-part-7-1-definitions",
                  label: "ĐỊNH NGHĨA & ỨNG DỤNG",
                  title: "In-Place O(1) RAM & Ứng dụng Sắp xếp Đa Khóa của Tính Ổn Định",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>In-place Sort:</strong> Là thuật toán chỉ cần thêm <code>O(1)</code> bộ nhớ phụ trong quá trình sort. Merge Sort không phải in-place (cần mảng <code>temp</code> phụ, $O(n)$ bộ nhớ)."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Stable Sort:</strong> Một thuật toán sort là <strong>stable</strong> nếu thứ tự tương đối giữa các phần tử có cùng giá trị khóa (key) được <strong>giữ nguyên</strong> sau khi sort."
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "💡 Ví dụ ứng dụng thực tế của Stable Sort",
                      text: "Giả sử danh sách tên đã được sort theo alphabet. Nếu sort lại danh sách này theo số nhóm tutorial, 1 thuật toán stable sẽ đảm bảo các sinh viên cùng nhóm vẫn giữ thứ tự alphabet theo tên.<br/>➔ <strong>Quick Sort và Selection Sort không stable.</strong>"
                    },
                    {
                      type: "component",
                      component: "SortingStabilityDemo"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b6-sub-7-2",
              number: "7.2",
              title: "Phản ví dụ Non-Stable của Quick Sort & Selection Sort",
              parts: [
                {
                  id: "dsa-b6-part-7-2-counterexamples",
                  label: "PHẢN VÍ DỤ NON-STABLE",
                  title: "Chứng minh sự đảo lộn thứ tự 2 số 5 trên dãy 7 phần tử",
                  content: [
                    {
                      type: "component",
                      component: "NonStableCounterexamples"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b6-sub-7-3",
              number: "7.3",
              title: "Bảng tổng kết 7 Thuật toán & Ghi chú ranh giới lý thuyết",
              parts: [
                {
                  id: "dsa-b6-part-7-3-matrix",
                  label: "MA TRẬN MASTER TỔNG KẾT",
                  title: "So sánh Worst Case, Best Case, In-Place, Stability & 2 Ghi chú cốt lõi",
                  content: [
                    {
                      type: "component",
                      component: "MasterSortingMatrixDashboard"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 7)",
                      text: "• <strong>In-place:</strong> chỉ cần $O(1)$ bộ nhớ phụ. Merge Sort và Radix Sort <strong>không in-place</strong>.<br/>• <strong>Stable:</strong> giữ nguyên thứ tự tương đối của các phần tử bằng key. Selection Sort và Quick Sort <strong>không stable</strong>.<br/>• <strong>O(n log n)</strong> là chặn dưới tốt nhất có thể cho <strong>comparison-based sort</strong> (Radix Sort đạt $O(n)$ vì không dựa vào so sánh)."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC VIII: SỬ DỤNG JAVA SORT METHODS
           ============================================================ */
        {
          id: "dsa-b6-sec8",
          roman: "VIII",
          title: "Sử dụng Java Sort Methods",
          subsections: [
            {
              id: "dsa-b6-sub-8-1",
              number: "8.1",
              title: "Các phương thức trong class Arrays & Collections",
              parts: [
                {
                  id: "dsa-b6-part-8-1-builtins",
                  label: "THƯ VIỆN CHUẨN JAVA",
                  title: "Overload Methods trong Arrays.sort() & Thứ tự mã ASCII",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Cách dùng sort() trong Arrays & Collections:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Các phần tử cần sort phải được lưu trong <strong>array</strong> trước khi gọi <code>Arrays.sort()</code>.",
                        "Nếu dữ liệu đang ở dạng <strong>List</strong>, dùng <code>Collections.sort()</code>.",
                        "Nếu dữ liệu không phải kiểu nguyên thủy (primitive), cần định nghĩa và dùng <code>Comparator</code>."
                      ]
                    },
                    {
                      type: "component",
                      component: "JavaSortBuiltinsSandbox"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b6-sub-8-2",
              number: "8.2",
              title: "Ví dụ đối tượng Person & Interface Comparator",
              parts: [
                {
                  id: "dsa-b6-part-8-2-comparator",
                  label: "CUSTOM COMPARATOR",
                  title: "Hiện thực compare() & equals() cho AgeComparator và NameComparator",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Lưu ý:</strong> <code>compare()</code> và <code>equals()</code> là 2 phương thức của interface <code>Comparator</code>, cần implement cả hai."
                    },
                    {
                      type: "component",
                      component: "JavaComparatorWorkbench"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 8)",
                      text: "• Array ➔ dùng <code>Arrays.sort()</code>; List ➔ dùng <code>Collections.sort()</code>.<br/>• Dữ liệu không phải kiểu nguyên thủy ➔ cần định nghĩa <code>Comparator</code> (implement <code>compare()</code> và <code>equals()</code>).<br/>• <code>Comparator</code> cho phép sort theo nhiều tiêu chí khác nhau (VD: theo tuổi, theo tên) trên cùng 1 class."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC IX: TỔNG KẾT BÀI HỌC (KẾT THÚC BÀI 6)
           ============================================================ */
        {
          id: "dsa-b6-sec9",
          roman: "IX",
          title: "Tổng kết bài học (Sorting)",
          subsections: [
            {
              id: "dsa-b6-sub-9-1",
              number: "9.1",
              title: "Hệ thống hóa toàn bộ kiến thức & Cây Quyết Định",
              parts: [
                {
                  id: "dsa-b6-part-9-1-master-summary",
                  label: "TỔNG KẾT TOÀN BÀI",
                  title: "5 Đúc kết cốt lõi, Cây quyết định chọn giải thuật & Flashcards ôn tập",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Tổng kết toàn bộ Bài 6: Sorting:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Đã học và phân tích các thuật toán sort kinh điển: <strong>Selection, Bubble, Insertion, Merge, Quick, Radix Sort</strong>.",
                        "<strong>Merge Sort và Quick Sort</strong> nói chung nhanh hơn Selection Sort, Bubble Sort, Insertion Sort.",
                        "Các thuật toán trong bài đều là <strong>comparison based sort</strong>, ngoại trừ <strong>Radix Sort</strong> (non-comparison based).",
                        "<strong>O(n log n)</strong> là độ phức tạp worst-case tốt nhất có thể đạt được đối với comparison based sort.",
                        "Java có sẵn các phương thức hỗ trợ sort (<code>Arrays.sort()</code>, <code>Collections.sort()</code>) và interface <code>Comparator</code>."
                      ]
                    },
                    {
                      type: "component",
                      component: "Bai6MasterSummaryDashboard"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       BÀI 7: HASHING (BẢNG BĂM)
       ============================================================ */
    {
      id: "dsa-b7",
      title: "Bài 7: Hashing (Bảng Băm)",
      description: "Cấu trúc dữ liệu bảng băm (Hash Table), hàm băm h(k), các kỹ thuật giải quyết va chạm (Separate Chaining, Linear/Quadratic Probing, Double Hashing), hệ số tải và Rehash.",
      sections: [
        {
          id: "dsa-b7-sec0-hero",
          roman: "OVERVIEW",
          title: "Tổng Quan & Bảng Băm Thời Gian Thực",
          subsections: [
            {
              id: "dsa-b7-sub-0-hero",
              number: "0.0",
              title: "Tựa Đề & Phòng Thí Nghiệm Hash Table",
              parts: [
                {
                  id: "dsa-b7-part-hero",
                  label: "LIVE HASH TABLE SANDBOX",
                  title: "Phòng Thí Nghiệm Bảng Băm & Cấu Trúc Dữ Liệu Tra Cứu O(1)",
                  content: [
                    {
                      type: "component",
                      component: "DsaHashingHeroBanner"
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC 0: HASHING LÀ GÌ?
           ============================================================ */
        {
          id: "dsa-b7-sec0",
          roman: "0",
          title: "Hashing là gì?",
          subsections: [
            {
              id: "dsa-b7-sub-0-1",
              number: "0.1",
              title: "Khái niệm Hashing & So sánh ADT Table",
              parts: [
                {
                  id: "dsa-b7-part-0-1-concept",
                  label: "KHÁI NIỆM & BẢNG SO SÁNH",
                  title: "Hashing, Hash Table & Đối chiếu hiệu năng với Sorted Array và Balanced BST",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Khái niệm nền tảng:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Hashing:</strong> Một giải thuật (thông qua <strong>hash function</strong>) ánh xạ tập dữ liệu lớn có độ dài thay đổi (gọi là <strong>key</strong>) thành tập dữ liệu nhỏ hơn có độ dài cố định.",
                        "<strong>Hash table (hay hash map):</strong> Cấu trúc dữ liệu dùng hash function để ánh xạ <code>key &rarr; value</code> một cách hiệu quả, phục vụ tìm kiếm (search) và truy xuất (retrieval).",
                        "<strong>Ứng dụng rộng rãi:</strong> Associative array, database indexing, cache, set, symbol table trong compiler..."
                      ]
                    },
                    {
                      type: "component",
                      component: "TableAdtComplexityMatrix"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 0)",
                      text: "Hash table hỗ trợ Table ADT với thời gian <strong>hằng số trung bình O(1)</strong> cho cả 3 thao tác Insertion / Deletion / Retrieval – nhanh hơn hẳn Sorted Array và Balanced BST."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC I: DIRECT ADDRESSING TABLE
           ============================================================ */
        {
          id: "dsa-b7-sec1",
          roman: "I",
          title: "Direct Addressing Table",
          subsections: [
            {
              id: "dsa-b7-sub-1-1",
              number: "1.1",
              title: "Bài toán SBS Transit & Các Thao Tác",
              parts: [
                {
                  id: "dsa-b7-part-1-1-sbs",
                  label: "BÀI TOÁN SBS TRANSIT",
                  title: "Quản lý tuyến xe buýt Singapore bằng mảng a[key] = data",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Direct Addressing Table:</strong> Đây là phiên bản đơn giản hóa của hash table."
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "🚌 Bài toán SBS Transit (Quản lý tuyến xe buýt)",
                      text: "• <strong>Retrieval:</strong> <code>find(num)</code> – tìm tuyến xe buýt của số hiệu <code>num</code>.<br/>• <strong>Insertion:</strong> <code>insert(num)</code> – thêm 1 số hiệu xe buýt mới <code>num</code>.<br/>• <strong>Deletion:</strong> <code>delete(num)</code> – xóa số hiệu xe buýt <code>num</code>.<br/><br/>• <strong>Ý tưởng đơn giản:</strong> Giả sử số hiệu xe buýt là số nguyên từ <code>0</code> đến <code>999</code> &rarr; tạo mảng 1000 giá trị Boolean. Nếu tuyến <code>num</code> tồn tại, set vị trí <code>num</code> = true.<br/>• <strong>Mở rộng lưu thêm dữ liệu:</strong><br/>&nbsp;&nbsp;+ <em>Cách 1:</em> Mảng 1000 slot, mỗi slot tham chiếu (reference) đến 1 object chứa chi tiết tuyến xe.<br/>&nbsp;&nbsp;+ <em>Cách 2:</em> Lưu dữ liệu trực tiếp ngay trong slot của bảng."
                    },
                    {
                      type: "component",
                      component: "DirectAddressingSimulator"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b7-sub-1-2",
              number: "1.2",
              title: "Hạn chế của Direct Addressing Table",
              parts: [
                {
                  id: "dsa-b7-part-1-2-limits",
                  label: "3 HẠN CHẾ CỐT TỬ",
                  title: "Lý do thúc đẩy sự ra đời của Hash Table",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Hạn chế của Direct Addressing Table:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Key phải là số nguyên không âm</strong> (non-negative integer). (Nếu giá trị key như <code>'151A'</code> hay <code>'NR10'</code> thì không thể dùng làm chỉ số mảng).",
                        "<strong>Phạm vi (range) của key phải nhỏ</strong>. (Nếu key có phạm vi lớn như số CCCD 9-12 chữ số, mảng sẽ đòi hỏi hàng nghìn GB RAM!).",
                        "<strong>Key phải dense (dày đặc)</strong>, tức không có nhiều khoảng trống (gap) giữa các giá trị key. Nếu thưa (sparse) sẽ lãng phí 99.9% ô nhớ trống."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 1)",
                      text: "• <strong>Direct Addressing Table:</strong> <code>a[key] = data</code>, truy cập trực tiếp bằng key làm chỉ số mảng.<br/>• <strong>3 hạn chế:</strong> key phải là số nguyên không âm, phạm vi key nhỏ, key phải dense.<br/>• Đây là nền tảng để mở rộng thành Hash Table."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC II: HASH TABLE
           ============================================================ */
        {
          id: "dsa-b7-sec2",
          roman: "II",
          title: "Hash Table (Bảng Băm)",
          subsections: [
            {
              id: "dsa-b7-sub-2-1",
              number: "2.1",
              title: "Nguồn gốc thuật ngữ & Ý tưởng Hashing",
              parts: [
                {
                  id: "dsa-b7-part-2-1-origin",
                  label: "NGUỒN GỐC & ÁNH XẠ",
                  title: "Chop and Mix, Lịch sử Hans Peter Luhn & Sơ đồ ánh xạ h(key)",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Khái quát:</strong> Hash Table là dạng tổng quát hóa (generalization) của Direct Addressing Table, nhằm loại bỏ các hạn chế trên."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Nguồn gốc thuật ngữ \"Hash\":</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "\"Hash\" theo nghĩa vật lý là <em>\"chop and mix\"</em> (băm và trộn).",
                        "Hash function điển hình (như phép mod) \"băm\" (chop) domain đầu vào thành nhiều sub-domain rồi \"trộn\" (mix) vào range đầu ra.",
                        "Donald Knuth ghi nhận Hans Peter Luhn (IBM) có thể là người đầu tiên dùng khái niệm này (memo tháng 1/1953); Robert Morris dùng thuật ngữ \"hash\" trong 1 bài báo khảo sát trên CACM, đưa nó từ thuật ngữ kỹ thuật thành thuật ngữ chính thức."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Ý tưởng của Hashing:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Ánh xạ số nguyên lớn &rarr; số nguyên nhỏ hơn.",
                        "Ánh xạ key không phải số nguyên (chuỗi, object) &rarr; số nguyên."
                      ]
                    },
                    {
                      type: "component",
                      component: "HashTableConceptMapping"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b7-sub-2-2",
              number: "2.2",
              title: "Hiện tượng Collision & 2 Vấn đề quan trọng",
              parts: [
                {
                  id: "dsa-b7-part-2-2-collision",
                  label: "COLLISION & 2 TRỤ CỘT",
                  title: "Bản chất Many-to-One và 2 câu hỏi sống còn của Hashing",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Collision (Đụng độ / Va chạm):</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Ví dụ:</strong> Key <code>67774987</code> hash ra cùng vị trí với <code>66752378</code> (cùng slot 17).",
                        "Đây gọi là <strong>collision</strong>: khi 2 key khác nhau có cùng giá trị hash $h(k_1) = h(k_2)$.",
                        "Hash function <strong>không đảm bảo</strong> 2 key khác nhau sẽ vào 2 slot khác nhau! Đây thường là ánh xạ <strong>many-to-one</strong> (nhiều-một), không phải one-to-one."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "❓ Hai vấn đề quan trọng của Hashing",
                      text: "1. <strong>\"How to hash?\"</strong> – Làm sao thiết kế hash function tốt?<br/>2. <strong>\"How to resolve collisions?\"</strong> – Làm sao giải quyết đụng độ?<br/>&rarr; Đây là 2 vấn đề ảnh hưởng trực tiếp đến hiệu quả của hashing."
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 2)",
                      text: "• Hash Table dùng <code>a[h(key)]</code> thay vì <code>a[key]</code> để khắc phục hạn chế của Direct Addressing Table.<br/>• <strong>Collision:</strong> 2 key khác nhau có cùng hash value – không thể tránh hoàn toàn vì hash function là ánh xạ many-to-one.<br/>• Phải lưu <strong>cả key</strong> trong slot để phân biệt khi có collision."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC III: HASH FUNCTIONS (CÁC HÀM BĂM)
           ============================================================ */
        {
          id: "dsa-b7-sec3",
          roman: "III",
          title: "Hash Functions (Các Hàm Băm)",
          subsections: [
            {
              id: "dsa-b7-sub-3-1",
              number: "3.1",
              title: "Tiêu chí Hàm Băm Tốt, Bad Hash & Perfect Hash",
              parts: [
                {
                  id: "dsa-b7-part-3-1-criteria",
                  label: "TIÊU CHÍ & PHÂN LOẠI",
                  title: "4 Tiêu chí, Cạm bẫy Select Digits & Ứng dụng GNU gperf",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Tiêu chí của Hash Function tốt:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Tính toán nhanh</strong> (fast to compute).",
                        "<strong>Phân tán</strong> (scatter) key đều khắp hash table (evenly).",
                        "<strong>Ít collision</strong> (low collision rate).",
                        "<strong>Cần ít slot</strong> (tiết kiệm không gian bộ nhớ)."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "⚠️ Ví dụ Hash Function tệ (Bad Hash Function)",
                      text: "• <strong>Select Digits:</strong> chọn chữ số thứ 4 và thứ 8 của số điện thoại.<br/>&nbsp;&nbsp;+ <code>hash(67754378) = 58</code><br/>&nbsp;&nbsp;+ <code>hash(63497820) = 90</code><br/>• <strong>Q:</strong> <em>Điều gì xảy ra nếu hash số điện thoại nhà ở Singapore bằng cách chọn 3 chữ số đầu?</em><br/>&nbsp;&nbsp;&rarr; Các số điện thoại nhà thường có chung tổng đài/vùng &rarr; nhiều số trùng nhau ở các chữ số đầu &rarr; <strong>dồn cục va chạm (massive collisions)</strong>."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Perfect Hash Function & Uniform Hash Function:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Perfect Hash Function:</strong> Là ánh xạ <strong>one-to-one</strong> giữa key và hash value &rarr; <strong>không xảy ra collision</strong>. Chỉ khả thi khi biết trước toàn bộ tập key tĩnh. Ứng dụng: compiler/interpreter tra từ khóa dành riêng (reserved words); shell interpreter tra lệnh built-in. Công cụ <strong>GNU gperf</strong> tự động sinh mã C++ perfect hash. <strong>Minimal perfect hash function:</strong> kích thước bảng bằng đúng số lượng từ khóa ($M = N$).",
                        "<strong>Uniform Hash Function:</strong> Phân bố key đều (evenly) trong hash table. Ví dụ: Nếu $k$ số nguyên phân bố đều trong khoảng $[0, X)$ (với $0 \\le k < X$), có thể ánh xạ vào hash table kích thước $m$ ($m < X$) bằng công thức: <code>hash(k) = &lfloor; k &times; m / X &rfloor;</code>."
                      ]
                    },
                    {
                      type: "component",
                      component: "HashFunctionCriteriaSandbox"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b7-sub-3-2",
              number: "3.2",
              title: "Division Method & Multiplication Method",
              parts: [
                {
                  id: "dsa-b7-part-3-2-math-methods",
                  label: "PHƯƠNG PHÁP BĂM SỐ NGUYÊN",
                  title: "Phép Modulo với Số Nguyên Tố & Tỉ Lệ Vàng Donald Knuth",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>1. Division Method (dùng phép mod):</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Ánh xạ vào hash table có $m$ slot.",
                        "Dùng phép <strong>modulo</strong> (<code>%</code> trong Java) để ánh xạ 1 số nguyên vào giá trị từ $0$ đến $m-1$: <code>hash(k) = k mod m</code>.",
                        "<code>k mod m</code> là phần dư của phép chia $k$ cho $m$, với $k, m$ là số nguyên dương. Đây là phương pháp <strong>phổ biến nhất</strong>.",
                        "<strong>Chọn m như thế nào?</strong><br/>+ Nếu $m$ là lũy thừa của 2 ($m = 2^n$) &rarr; <code>k mod m</code> tương đương lấy $n$ bit cuối của key.<br/>+ Nếu $m = 10^n$ &rarr; hash value chính là $n$ chữ số cuối của key.<br/>+ <em>Cả 2 cách trên đều không tốt</em>.<br/>+ <strong>Rule of thumb (quy tắc kinh nghiệm):</strong> Chọn <strong>số nguyên tố</strong> gần với 1 lũy thừa của 2 để làm $m$."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>2. Multiplication Method:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Bước 1: Nhân với 1 hằng số thực $A$ trong khoảng $(0, 1)$.",
                        "Bước 2: Lấy phần thập phân (fractional part): $k \\cdot A - \\lfloor k \\cdot A \\rfloor$.",
                        "Bước 3: Nhân với $m$ (kích thước hash table): <code>hash(k) = &lfloor; m &times; (k&middot;A - &lfloor;k&middot;A&rfloor;) &rfloor;</code>.",
                        "Số nghịch đảo của tỉ lệ vàng (Golden ratio): $A = (\\sqrt{5} - 1) / 2 \\approx 0.618033$ được xem là lựa chọn tốt (theo đề xuất của Donald Knuth)."
                      ]
                    },
                    {
                      type: "component",
                      component: "IntegerHashingMethodsExplorer"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b7-sub-3-3",
              number: "3.3",
              title: "Hashing của Chuỗi (String Hashing)",
              parts: [
                {
                  id: "dsa-b7-part-3-3-string-hash",
                  label: "BĂM CHUỖI & JAVA HASHCODE",
                  title: "Khắc phục đụng độ Anagrams bằng Đa thức nhân 31 trong Java",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Hashing của chuỗi (String):</strong>"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Cách 1 – Cộng dồn mã ASCII (Bad Hash):</strong>"
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "🔍 Ví dụ trace giáo trình: hash(\"Tan Ah Teck\")",
                      text: "• <code>(\"T\"+\"a\"+\"n\"+\" \"+\"A\"+\"h\"+\" \"+\"T\"+\"e\"+\"c\"+\"k\") % 11</code><br/>• <code>(84+97+110+32+65+104+32+84+101+99+107) % 11 = 825 % 11 = 0</code><br/><br/>⚠️ <strong>Vấn đề của cách này:</strong> Các chuỗi đảo từ (Anagrams) sau đều cho cùng hash value:<br/>&nbsp;&nbsp;+ <code>Lee Chin Tan</code><br/>&nbsp;&nbsp;+ <code>Chen Le Tian</code><br/>&nbsp;&nbsp;+ <code>Chan Tin Lee</code><br/>&rarr; Vì hash value <strong>không phụ thuộc vào vị trí (position)</strong> của ký tự trong chuỗi &rarr; đây là hash function <strong>tệ (Bad)</strong>."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Cách 2 – Cải tiến, dịch chuyển (shift) tổng sau mỗi ký tự để vị trí ký tự ảnh hưởng đến hash value:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Dùng công thức nhân tích lũy: <code>sum = sum * 31 + c</code>.",
                        "Phương thức <code>String.hashCode()</code> của Java cũng sử dụng hằng số nhân <strong>31</strong> (số nguyên tố lẻ, tối ưu phép nhân thành dịch bit <code>31 * i == (i << 5) - i</code>)."
                      ]
                    },
                    {
                      type: "component",
                      component: "StringHashingWorkbench"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 3)",
                      text: "• <strong>Tiêu chí hash function tốt:</strong> nhanh, phân tán đều, ít collision, ít tốn không gian.<br/>• <strong>Perfect hash function:</strong> one-to-one, không collision – chỉ khả thi khi biết trước hết các key.<br/>• <strong>Division method:</strong> (<code>k mod m</code>) là phổ biến nhất; nên chọn <code>m</code> là <strong>số nguyên tố</strong>.<br/>• <strong>Multiplication method:</strong> <code>hash(k) = &lfloor;m &times; (kA - &lfloor;kA&rfloor;)&rfloor;</code>, $A \\approx 0.618033$ (nghịch đảo tỉ lệ vàng).<br/>• <strong>Hash chuỗi:</strong> Tổng ASCII đơn thuần là <strong>bad</strong> (không phụ thuộc vị trí ký tự) &rarr; nên dùng công thức có nhân hệ số (VD: <code>sum = sum * 31 + c</code>) như Java <code>String.hashCode()</code>."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC IV: COLLISION RESOLUTION (GIẢI QUYẾT ĐỤNG ĐỘ)
           ============================================================ */
        {
          id: "dsa-b7-sec4",
          roman: "IV",
          title: "Collision Resolution (Giải Quyết Đụng Độ)",
          subsections: [
            {
              id: "dsa-b7-sub-4-0",
              number: "4.0",
              title: "Xác suất xảy ra Collision – Birthday Paradox",
              parts: [
                {
                  id: "dsa-b7-part-4-0-paradox",
                  label: "NGHỊCH LÝ NGÀY SINH",
                  title: "Von Mises Paradox: P(23) = 50.7% & 4 Kỹ Thuật Giải Quyết",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Xác suất xảy ra Collision – Birthday Paradox:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Von Mises Paradox (Birthday Paradox):</strong> <em>\"Cần bao nhiêu người trong 1 phòng để xác suất có ít nhất 2 người trùng ngày sinh (bỏ qua năm và ngày nhuận) đạt tối thiểu 50%?\"</em>",
                        "Xác suất ngày sinh không trùng nhau cho $n$ người: $Q(n) = \\frac{365}{365} \\times \\frac{364}{365} \\times \\dots \\times \\frac{365-n+1}{365}$.",
                        "Xác suất có trùng ngày sinh (collision) cho $n$ người: $P(n) = 1 - Q(n)$.",
                        "Tại $n = 23$: <strong>P(23) = 0.507 &gt; 50%</strong>! &rarr; Chỉ cần <strong>23 người</strong> trong phòng là xác suất trùng ngày sinh đã vượt 50%!",
                        "<strong>Ứng dụng vào Hashing:</strong> Nếu chèn 23 key vào 1 bảng có 365 slot, hơn nửa số lần ta sẽ gặp collision! Kết quả này phản trực giác &rarr; <strong>Collision rất dễ xảy ra!</strong>"
                      ]
                    },
                    {
                      type: "component",
                      component: "BirthdayParadoxVisualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b7-sub-4-1",
              number: "4.1",
              title: "Separate Chaining & Hệ Số Tải (Load Factor)",
              parts: [
                {
                  id: "dsa-b7-part-4-1-chaining",
                  label: "SEPARATE CHAINING",
                  title: "Linked List tại mỗi slot, Hệ số tải α = n/m & Cơ chế Rehashing",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Khái niệm Separate Chaining:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Phương pháp đơn giản, trực tiếp nhất (most straightforward).",
                        "Dùng 1 <strong>linked-list</strong> để lưu các key bị đụng độ tại cùng 1 slot.",
                        "<strong>insert(key, data):</strong> Chèn data vào list <code>a[h(key)]</code> &rarr; <strong>Tốn O(1)</strong> thời gian.",
                        "<strong>find(key):</strong> Tìm key trong list <code>a[h(key)]</code> &rarr; <strong>Tốn O(n)</strong> thời gian ($n$ là độ dài của chain).",
                        "<strong>delete(key):</strong> Xóa data khỏi list <code>a[h(key)]</code> &rarr; <strong>Tốn O(n)</strong> thời gian ($n$ là độ dài của chain)."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "📊 Phân tích Load Factor α & Rehashing",
                      text: "• $n$: số lượng key trong hash table &bull; $m$: kích thước hash table (số slot).<br/>• <strong>Load factor:</strong> <code>&alpha; = n / m</code> &rarr; đại lượng đo độ \"đầy\" của hash table. Nếu table size là số linked list, thì <code>&alpha;</code> chính là độ dài trung bình của các linked list.<br/>• <strong>Reconstructing Hash Table (Rehashing):</strong> Để giữ <code>&alpha;</code> bị chặn (bounded), cần xây dựng lại toàn bộ bảng khi load factor vượt ngưỡng &rarr; <strong>rehash</strong> tất cả key vào 1 bảng lớn hơn (thường là <strong>tăng gấp đôi kích thước bảng m</strong>)."
                    },
                    {
                      type: "component",
                      component: "SeparateChainingRehashWorkbench"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 4.1)",
                      text: "• Separate Chaining: dùng linked list tại mỗi slot để chứa các key bị collision.<br/>• <code>insert</code> = O(1), nhưng <code>find / delete</code> = O(n) với n là độ dài chain.<br/>• Load factor <code>&alpha; = n/m</code>; khi &alpha; vượt ngưỡng cần rehash (thường tăng gấp đôi m)."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b7-sub-4-2",
              number: "4.2",
              title: "Linear Probing & Xóa Lười (Lazy Deletion)",
              parts: [
                {
                  id: "dsa-b7-part-4-2-linear-probing",
                  label: "LINEAR PROBING",
                  title: "Dò tuần tự (h(k)+i) mod m, Trace [18,14,21,1,35] & Lazy Deletion",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Khái niệm Linear Probing:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Khi xảy ra collision, quét (scan) qua bảng để tìm <strong>slot trống tiếp theo</strong> (wrap around khi đến slot cuối).",
                        "Ví dụ dùng: <code>hash(k) = k mod 7</code>, kích thước bảng $m = 7$."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "🔍 Ví dụ minh họa chèn lần lượt: 18, 14, 21, 1, 35",
                      text: "• <code>hash(18) = 18 mod 7 = 4</code> &rarr; slot 4 = 18<br/>• <code>hash(14) = 14 mod 7 = 0</code> &rarr; slot 0 = 14<br/>• <code>hash(21) = 21 mod 7 = 0</code> &rarr; Collision với 14! Tìm slot trống tiếp theo &rarr; slot 1 = 21<br/>• <code>hash(1) = 1 mod 7 = 1</code> &rarr; Collision với 21! &rarr; slot 2 = 1<br/>• <code>hash(35) = 35 mod 7 = 0</code> &rarr; Collision, kiểm tra 3 slot tiếp theo (0, 1, 2 đều bận) &rarr; slot 3 = 35<br/><br/>➔ <strong>Kết quả bảng:</strong> <code>slot0=14, slot1=21, slot2=1, slot3=35, slot4=18, slot5=null, slot6=null</code>.<br/>• <strong>Find 35:</strong> <code>hash(35)=0</code> &rarr; slot 0 (14) &rarr; slot 1 (21) &rarr; slot 2 (1) &rarr; slot 3 (35) &rarr; <strong>Tìm thấy sau 4 lần probe</strong>.<br/>• <strong>Find 8:</strong> <code>hash(8)=1</code> &rarr; slot 1 (21) &rarr; slot 2 (1) &rarr; slot 3 (35) &rarr; slot 4 (18) &rarr; slot 5 (trống) &rarr; <strong>NOT found, cần 5 lần probe</strong>."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Xóa (Delete) trong Linear Probing & Lazy Deletion:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Delete 21 (tại slot 1, hash(21)=0):</strong> Không thể chỉ đơn giản xóa trắng giá trị, vì việc này sẽ ảnh hưởng đến <code>find()</code>! Nếu xóa trắng slot 0 rồi <code>find(35)</code>: <code>hash(35)=0</code> &rarr; slot 0 rỗng &rarr; dừng tìm ngay &rarr; kết luận \"35 NOT found\" &rarr; <strong>SAI (Incorrect)</strong>! Vì 35 thực ra nằm ở slot 3.",
                        "<strong>Cách xóa đúng — Lazy Deletion (3 trạng thái khác nhau cho 1 slot):</strong><br/>1. <code>Occupied</code> (đang chiếm giữ)<br/>2. <code>Occupied but marked as deleted</code> (đã chiếm giữ nhưng đánh dấu đã xóa, ký hiệu X)<br/>3. <code>Empty</code> (trống thật sự)",
                        "Khi xóa 1 giá trị khỏi bảng linear probing, ta chỉ <strong>đánh dấu trạng thái slot là \"deleted\"</strong>, thay vì làm trống slot đó.",
                        "<strong>insert(15) (hash(15)=1):</strong> quét từ slot 1(21) &rarr; slot 2(1) &rarr; slot 3(35) &rarr; slot 4(18) &rarr; slot 5(trống), xác nhận 15 chưa tồn tại &rarr; nhưng ta <strong>chèn 15 vào slot đã đánh dấu deleted đầu tiên gặp được</strong> (slot 1) để tái sử dụng ô nhớ."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Vấn đề Primary Clustering & Modified Linear Probing:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Linear Probing có thể tạo ra <strong>nhiều slot liên tiếp (consecutive) bị chiếm giữ</strong>, làm tăng thời gian chạy của find/insert/delete &rarr; Hiện tượng này gọi là <strong>Primary Clustering</strong>.",
                        "<strong>Modified Linear Probing:</strong> Dùng chuỗi <code>(hash(key) + i &times; d) mod m</code> với $d &gt; 1$ là hằng số nguyên tố cùng nhau (co-prime) với $m$ để quét qua toàn bộ các slot."
                      ]
                    },
                    {
                      type: "component",
                      component: "LinearProbingTraceVisualizer"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 4.2)",
                      text: "• Linear probing: khi collision, quét tuần tự tìm slot trống kế tiếp (có wrap around).<br/>• <strong>Không được xóa trắng slot khi delete</strong> &rarr; phải dùng <strong>Lazy Deletion</strong> (đánh dấu deleted) để không phá vỡ <code>find()</code>.<br/>• Nhược điểm lớn nhất: <strong>Primary clustering</strong> &rarr; nhiều slot liền tiếp bị chiếm, làm probe chậm.<br/>• Khắc phục: <strong>Modified linear probing</strong>, nhảy bước $d$ (co-prime với $m$) thay vì bước 1."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b7-sub-4-3",
              number: "4.3",
              title: "Quadratic Probing & Định Lý α < 0.5",
              parts: [
                {
                  id: "dsa-b7-part-4-3-quadratic",
                  label: "QUADRATIC PROBING",
                  title: "Bước nhảy bậc hai (h(k)+i²) mod m & Định lý bảo đảm tìm slot trống",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Khái niệm & Ví dụ:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Probe sequence:</strong> <code>(hash(key) + 1&sup2;) mod m, (hash(key) + 2&sup2;) mod m, (hash(key) + 3&sup2;) mod m, &hellip;, (hash(key) + i&sup2;) mod m</code>.",
                        "<strong>Ví dụ (hash(k) = k mod 7):</strong><br/>+ Insert 3: <code>hash(3) = 3</code> &rarr; slot 3 = 3.<br/>+ Insert 38: <code>hash(38) = 3</code> &rarr; collision với 3. Probe 1: <code>(3 + 1&sup2;) mod 7 = 4</code> (đã có 18). Probe 2: <code>(3 + 2&sup2;) mod 7 = 0</code> (trống) &rarr; đặt 38 vào slot 0."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "📜 Định lý (Theorem) của Quadratic Probing & Secondary Clustering",
                      text: "• <strong>Định lý:</strong> Nếu <strong>load factor &alpha; &lt; 0.5</strong> và <strong>m là số nguyên tố</strong>, thì <strong>luôn luôn có thể tìm được 1 slot trống</strong>.<br/>• <strong>Secondary Clustering:</strong> Nếu 2 key có cùng vị trí ban đầu (initial position), thì probe sequence của chúng <strong>giống hệt nhau</strong> (gọi là Secondary Clustering). Nhưng vấn đề này <em>không nghiêm trọng bằng</em> Primary Clustering của Linear Probing."
                    },
                    {
                      type: "component",
                      component: "QuadraticProbingStepVisualizer"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 4.3)",
                      text: "• Quadratic probing: bước nhảy là $1^2, 2^2, 3^2, \\dots$ thay vì tuyến tính.<br/>• <strong>Định lý:</strong> nếu <code>&alpha; &lt; 0.5</code> và <code>m</code> là số nguyên tố &rarr; luôn tìm được slot trống.<br/>• Nhược điểm: <strong>Secondary Clustering</strong> (2 key cùng slot ban đầu &rarr; probe sequence giống nhau), nhưng nhẹ hơn Primary Clustering."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b7-sub-4-4",
              number: "4.4",
              title: "Double Hashing & Cảnh Báo hash₂(k) = 0",
              parts: [
                {
                  id: "dsa-b7-part-4-4-double-hash",
                  label: "DOUBLE HASHING",
                  title: "Dùng 2 hàm băm độc lập, Cảnh báo lặp vô hạn & Công thức đảo R-(k mod R)",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Khái niệm:</strong> Dùng 2 hash function:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Probe sequence:</strong> <code>(hash₁(key) + 1&times;hash₂(key)) mod m, (hash₁(key) + 2&times;hash₂(key)) mod m, &hellip;, (hash₁(key) + i&times;hash₂(key)) mod m</code>.",
                        "<code>hash₂</code> gọi là <strong>secondary hash function</strong> – xác định số slot cần nhảy (jump) mỗi khi xảy ra collision."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "🔍 Ví dụ (hash₁(k) = k mod 7, hash₂(k) = k mod 5)",
                      text: "• Insert 21: <code>hash₁(21)=0, hash₂(21)=1</code> &rarr; slot 0 = 21.<br/>• Insert 4: <code>hash₁(4)=4, hash₂(4)=4</code> &rarr; slot 4 = 4.<br/>• Insert 35: <code>hash₁(35)=0, hash₂(35)=0</code> &rarr; collision tại slot 0. Nhưng probe sequence lúc này là $0, 0, 0, \\dots$ (vì $hash_2(35)=0$) &rarr; <strong>Không chấp nhận được (Not acceptable)! Thuật toán sẽ lặp vô hạn tại slot 0</strong>."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Cảnh báo (Warning) & Cách khắc phục:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Secondary hash function <strong>KHÔNG ĐƯỢC CHO GIÁ TRỊ 0!</strong>",
                        "<strong>Cách khắc phục:</strong> Đổi sang công thức <code>hash₂(key) = R - (key mod R)</code> với $R &lt; m$ là số nguyên tố (ví dụ: <code>hash₂(key) = 5 - (key % 5)</code> &rarr; luôn nằm trong khoảng $[1, 5] \\ne 0$)."
                      ]
                    },
                    {
                      type: "component",
                      component: "DoubleHashingWorkbench"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 4.4)",
                      text: "• Double Hashing: bước nhảy = <code>hash₂(key)</code> (không cố định như linear/quadratic probing).<br/>• <strong>Bắt buộc:</strong> <code>hash₂(key)</code> không bao giờ được bằng 0, nếu không probe sequence sẽ lặp vô hạn tại 1 slot.<br/>• Double hashing tổng quát hóa cả linear probing (<code>hash₂=1</code>) và modified linear probing (<code>hash₂=d</code>)."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b7-sub-4-5",
              number: "4.5",
              title: "Tiêu chí của phương pháp giải quyết Collision tốt",
              parts: [
                {
                  id: "dsa-b7-part-4-5-criteria",
                  label: "TIÊU CHÍ COLLISION TỐT",
                  title: "4 Tiêu chuẩn vàng đánh giá thuật toán xử lý đụng độ",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>4 Tiêu chí của phương pháp giải quyết Collision tốt:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Minimize clustering:</strong> Giảm thiểu tối đa hiện tượng dồn cục các ô nhớ.",
                        "<strong>Luôn tìm được 1 slot trống</strong> nếu bảng băm còn ô trống.",
                        "<strong>Cho ra probe sequence khác nhau</strong> khi 2 vị trí probe ban đầu trùng nhau (tức là <strong>không có secondary clustering</strong>).",
                        "<strong>Nhanh (Fast)</strong> trong quá trình tính toán và kiểm tra."
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC V: TỔNG KẾT BÀI HỌC (KẾT THÚC BÀI 7: HASHING)
           ============================================================ */
        {
          id: "dsa-b7-sec5",
          roman: "V",
          title: "Tổng kết bài học (Hashing)",
          subsections: [
            {
              id: "dsa-b7-sub-5-1",
              number: "5.1",
              title: "Hệ thống hóa toàn bộ kiến thức & Ma Trận Master",
              parts: [
                {
                  id: "dsa-b7-part-5-1-summary",
                  label: "TỔNG KẾT TOÀN BÀI",
                  title: "5 Đúc kết cốt lõi, Ma trận 4 kỹ thuật & Flashcards ôn tập bẫy đề thi",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Tổng kết toàn bộ Bài 7: Hashing:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>\"How to hash?\":</strong> Tiêu chí của hash function tốt là gì? (Nhanh, phân tán đều, ít va chạm, tiết kiệm ô nhớ).",
                        "<strong>\"How to resolve collision?\":</strong> 4 kỹ thuật giải quyết đụng độ gồm <strong>Separate Chaining, Linear Probing, Quadratic Probing, Double Hashing</strong>.",
                        "<strong>Vấn đề khi xóa (deletion):</strong> Không thể xóa trắng đơn giản trong Open Addressing, bắt buộc cần <strong>Lazy Deletion (3 trạng thái)</strong>.",
                        "<strong>Phân biệt dồn cục:</strong> <strong>Primary clustering</strong> (trong Linear Probing) nghiêm trọng hơn <strong>Secondary clustering</strong> (trong Quadratic Probing). Double Hashing triệt tiêu cả hai dạng dồn cục.",
                        "<strong>So sánh ADT Table:</strong> Hashing hỗ trợ Table ADT với thời gian <strong>hằng số trung bình O(1)</strong> cho cả Insertion, Deletion, và Retrieval."
                      ]
                    },
                    {
                      type: "component",
                      component: "Bai7MasterSummaryDashboard"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 5 Tổng kết)",
                      text: "• 4 kỹ thuật giải quyết collision: Separate Chaining, Linear Probing, Quadratic Probing, Double Hashing.<br/>• Primary Clustering (Linear Probing) nghiêm trọng hơn Secondary Clustering (Quadratic Probing).<br/>• Double Hashing tổng quát nhất, nhưng cần đảm bảo <code>hash₂(key) &ne; 0</code>.<br/>• Bắt buộc dùng <strong>Lazy Deletion</strong> để bảo toàn chuỗi dò tìm của <code>find()</code> trong Open Addressing."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* ============================================================
           MỤC VI: JAVA HASHMAP CLASS & BÀI TẬP (EXERCISE)
           ============================================================ */
        {
          id: "dsa-b7-sec6",
          roman: "VI",
          title: "Java HashMap Class & Bài Tập (Exercise)",
          subsections: [
            {
              id: "dsa-b7-sub-6-1",
              number: "6.1",
              title: "Khái niệm Class HashMap<K, V> & Constructors",
              parts: [
                {
                  id: "dsa-b7-part-6-1-concept",
                  label: "JAVA HASHMAP",
                  title: "Cấu trúc kế thừa, 4 Constructors & Thông số 16 / 0.75",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Khái niệm Class <code>HashMap&lt;K, V&gt;</code>:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Implements 1 hash map, ánh xạ <code>key &rarr; value</code>.",
                        "Bất kỳ object non-null nào cũng có thể dùng làm key hoặc value.",
                        "<strong>Ví dụ:</strong> Tạo hash map ánh xạ tên người &rarr; tuổi, dùng tên làm key, tuổi làm value.",
                        "<code>AbstractMap</code> là abstract class cung cấp cài đặt \"khung\" (skeletal implementation) cho interface <code>Map</code>.",
                        "<strong>Load factor mặc định</strong> = <strong>0.75</strong> – thường mang lại sự cân bằng tốt giữa chi phí thời gian và không gian.",
                        "<strong>Capacity mặc định</strong> của HashMap = <strong>16</strong>."
                      ]
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "public class HashMap<K,V>\n    extends AbstractMap<K,V>\n    implements Map<K,V>, Cloneable, Serializable\n\n// Package: java.util.HashMap"
                    },
                    {
                      type: "component",
                      component: "JavaHashMapArchitectureViewer"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b7-sub-6-2",
              number: "6.2",
              title: "Các phương thức cơ bản & Ví dụ thực hành",
              parts: [
                {
                  id: "dsa-b7-part-6-2-methods",
                  label: "PHƯƠNG THỨC HASHMAP",
                  title: "Thao tác put, get, containsKey, containsValue, clear & Code Runner",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Một số method chính của HashMap:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>void clear()</code>: Xóa toàn bộ mapping khỏi map này.",
                        "<code>boolean containsKey(Object key)</code>: Trả về true nếu map này chứa mapping cho key chỉ định.",
                        "<code>boolean containsValue(Object value)</code>: Trả về true nếu map này có 1 hoặc nhiều key ánh xạ đến value chỉ định.",
                        "<code>V get(Object key)</code>: Trả về value mà key chỉ định ánh xạ tới, hoặc null nếu map không chứa mapping cho key đó.",
                        "<code>V put(K key, V value)</code>: Gán (associate) value chỉ định với key chỉ định trong map này."
                      ]
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "HashMap<String, Integer> hm = new HashMap<String, Integer>();\n// placing items into the hashmap\nhm.put(\"Mike\", 52);\nhm.put(\"Janet\", 46);\nhm.put(\"Jack\", 46);\n// retrieving item from the hashmap\nSystem.out.println(\"Janet => \" + hm.get(\"Janet\"));\n\n// Output:\n// Janet => 46"
                    },
                    {
                      type: "component",
                      component: "JavaHashMapApiWorkbench"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 6)",
                      text: "• <code>HashMap&lt;K,V&gt;</code> implements <code>Map&lt;K,V&gt;</code>, extends <code>AbstractMap&lt;K,V&gt;</code>, key/value có thể là bất kỳ object non-null nào.<br/>• Mặc định: <strong>capacity = 16</strong>, <strong>load factor = 0.75</strong>.<br/>• Các method chính: <code>put(key, value)</code>, <code>get(key)</code>, <code>containsKey()</code>, <code>containsValue()</code>, <code>clear()</code>."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b7-sub-6-3",
              number: "6.3",
              title: "Bài tập thực hành (Exercise) — Dãy 7 Khóa",
              parts: [
                {
                  id: "dsa-b7-part-6-3-exercise",
                  label: "BÀI TẬP ÁP DỤNG",
                  title: "Chèn dãy [9, 1, 20, 5, 101, 66, 15] với 4 kỹ thuật Collision",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Đề bài tập (Exercise):</strong> Cho dãy số sau, thực hành chèn vào hash table với các kỹ thuật giải quyết collision đã học: <code>9   1   20   5   101   66   15</code>."
                    },
                    {
                      type: "component",
                      component: "HashingExerciseMultiSolver"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       BÀI 8: BINARY SEARCH TREE (BST)
       ============================================================ */
    {
      id: "dsa-b8",
      title: "Bài 8: Binary Search Tree (BST)",
      subtitle: "Cây Nhị Phân Tìm Kiếm & Động Lực Học Thuật",
      description: "Cấu trúc dữ liệu cây phi tuyến tính phân cấp, bài toán khảo sát dân số (Census Problem), ADT Table 8 thao tác cốt lõi, so sánh Unsorted vs Sorted Array và động lực ra đời của BST.",
      sections: [
        /* SECTION 0: HERO OVERVIEW */
        {
          id: "dsa-b8-sec0-hero",
          roman: "OVERVIEW",
          title: "Tổng Quan & Bảng Cây BST Thời Gian Thực",
          subsections: [
            {
              id: "dsa-b8-sub-0-hero",
              number: "0.0",
              title: "Tựa Đề & Phòng Thí Nghiệm Cây BST Trực Quan",
              parts: [
                {
                  id: "dsa-b8-part-hero",
                  label: "LIVE BST WORKBENCH",
                  title: "Phòng Thí Nghiệm Cây Nhị Phân Tìm Kiếm & Mô Phỏng Phép Duyệt",
                  content: [
                    {
                      type: "component",
                      component: "DsaBstHeroBanner"
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* SECTION I: MOTIVATION & CENSUS PROBLEM */
        {
          id: "dsa-b8-sec1",
          roman: "I",
          title: "Motivation: Census Problem (Bài toán khảo sát dân số) & ADT Table",
          subsections: [
            {
              id: "dsa-b8-sub-1-1",
              number: "1.1",
              title: "Bài toán Khảo sát Dân số & Giả định Đơn giản hóa",
              parts: [
                {
                  id: "dsa-b8-part-1-1-census",
                  label: "ĐỘNG LỰC BÀI TOÁN",
                  title: "Census Problem & Giả định Tuổi Sinh Viên",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Census (khảo sát dân số)</strong> là hoạt động quan trọng trong quản lý và phân tích hệ thống dữ liệu — dùng để thống kê tuổi, ngành học, quốc tịch, CAP (điểm tích lũy)... của sinh viên. Sau khi census xong, dữ liệu được dùng cho <strong>Data Mining</strong> và <strong>Statistical Analysis</strong>."
                    },
                    {
                      type: "paragraph",
                      text: "Để tập trung vào bản chất cấu trúc dữ liệu, bài toán được rút gọn lại: <strong>quản lý tập dữ liệu Age (tuổi) của sinh viên</strong>."
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "📋 Ba giả định quan trọng để đơn giản hóa bài toán:",
                      text: "• Tuổi sinh viên nằm trong khoảng <strong>(0 – 100)</strong>.<br/>• Tất cả đều là <strong>số nguyên (integer)</strong>.<br/>• Tất cả đều <strong>phân biệt (distinct)</strong> — không có hai sinh viên trùng tuổi.<br/><em>(Giả định này giúp đơn giản hóa tính chất của BST sau này: quy tắc phân nhánh đổi từ '≥' thành '>')</em>."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b8-sub-1-2",
              number: "1.2",
              title: "Khái niệm ADT Table & 8 Thao tác Cốt lõi",
              parts: [
                {
                  id: "dsa-b8-part-1-2-operations",
                  label: "ADT TABLE",
                  title: "Tám thao tác (Operations) cốt lõi cần hỗ trợ trên tập tuổi",
                  content: [
                    {
                      type: "paragraph",
                      text: "Tập hợp các thao tác quản lý tuổi sinh viên chính là <strong>Abstract Data Type (ADT) Table</strong>: một ADT mô tả <em>\"cần làm được gì\"</em> trên tập dữ liệu, <strong>chưa quan tâm</strong> sẽ cài đặt bằng cấu trúc dữ liệu cụ thể nào (Array, Linked List, Tree...)."
                    },
                    {
                      type: "table",
                      headers: ["STT", "Thao tác (Operation)", "Mô tả ý nghĩa nghiệp vụ"],
                      rows: [
                        ["1", "<code>Search(age)</code>", "Tìm xem có sinh viên nào mang tuổi này trong hệ thống không?"],
                        ["2", "<code>Insert(age)</code>", "Thêm một sinh viên mới vào hệ thống (chèn tuổi của họ)."],
                        ["3", "<code>FindOldest() / FindYoungest()</code>", "Xác định sinh viên lớn tuổi nhất / nhỏ tuổi nhất hiện tại."],
                        ["4", "<code>ListSortedAges()</code>", "Liệt kê danh sách tuổi các sinh viên theo thứ tự đã sắp xếp (sorted order)."],
                        ["5", "<code>NextOlder(age)</code>", "Tìm sinh viên có tuổi lớn hơn \"sát\" một tuổi cho trước (tức là Inorder Successor)."],
                        ["6", "<code>Remove(age)</code>", "Xóa một sinh viên đã tồn tại ra khỏi hệ thống (xóa tuổi của họ)."],
                        ["7", "<code>GetMedian()</code>", "Xác định tuổi trung vị (median) của toàn bộ sinh viên."],
                        ["8", "<code>NumYounger(age)</code>", "Đếm xem có bao nhiêu sinh viên trẻ hơn một độ tuổi cho trước?"]
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⭐ Cần nhớ (Mục 1)",
                      text: "• <strong>ADT (Abstract Data Type) ≠ cấu trúc dữ liệu cụ thể.</strong> ADT Table chỉ liệt kê <strong>hành vi (behavior)</strong> cần có.<br/>• <strong>8 thao tác trên là \"khung tham chiếu\" xuyên suốt cả bài học:</strong> Mọi cấu trúc dữ liệu (Unsorted Array, Sorted Array, BST) đều được đánh giá và so sánh dựa theo đúng 8 thao tác này."
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* SECTION II: ARRAY IMPLEMENTATION */
        {
          id: "dsa-b8-sec2",
          roman: "II",
          title: "Giải Census Problem bằng kiến thức CS1020 (Array Implementation)",
          subsections: [
            {
              id: "dsa-b8-sub-2-1",
              number: "2.1",
              title: "Unsorted Array (Mảng chưa sắp xếp)",
              parts: [
                {
                  id: "dsa-b8-part-2-1-unsorted",
                  label: "MẢNG CHƯA SẮP XẾP",
                  title: "Phân tích 8 thao tác trên Unsorted Array A = [5, 7, 71, 50, 23, 4, 6, 15]",
                  content: [
                    {
                      type: "paragraph",
                      text: "Giả sử ta lưu trữ dữ liệu khảo sát dân số vào một <strong>mảng chưa sắp xếp (Unsorted Array)</strong> với $n = 8$ phần tử ban đầu:"
                    },
                    {
                      type: "table",
                      headers: ["Index", "0", "1", "2", "3", "4", "5", "6", "7"],
                      rows: [
                        ["<strong>Giá trị A</strong>", "5", "7", "71", "50", "23", "4", "6", "15"]
                      ]
                    },
                    {
                      type: "table",
                      headers: ["No", "Operation", "Time Complexity", "Giải thích vì sao?"],
                      rows: [
                        ["1", "<code>Search(age)</code>", "<span class='px-2 py-0.5 rounded font-mono font-bold bg-rose-100 text-rose-800'>O(n)</span>", "Phải duyệt tuần tự (linear scan) toàn mảng vì các phần tử nằm không có thứ tự."],
                        ["2", "<code>Insert(age)</code>", "<span class='px-2 py-0.5 rounded font-mono font-bold bg-emerald-100 text-emerald-800'>O(1)</span>", "Chỉ cần thêm phần tử mới vào vị trí cuối cùng của mảng (<code>A[n++] = age</code>)."],
                        ["3", "<code>FindOldest()</code>", "<span class='px-2 py-0.5 rounded font-mono font-bold bg-rose-100 text-rose-800'>O(n)</span>", "Phải duyệt qua hết toàn bộ mảng để tìm phần tử mang giá trị lớn nhất (Max)."],
                        ["4", "<code>ListSortedAges()</code>", "<span class='px-2 py-0.5 rounded font-mono font-bold bg-rose-100 text-rose-800'>O(n log n)</span>", "Bắt buộc phải chạy giải thuật sắp xếp (Sort) lại toàn bộ mảng trước khi liệt kê."],
                        ["5", "<code>NextOlder(age)</code>", "<span class='px-2 py-0.5 rounded font-mono font-bold bg-rose-100 text-rose-800'>O(n)</span>", "Phải duyệt hết mảng để tìm phần tử nhỏ nhất trong số các phần tử lớn hơn age."],
                        ["6", "<code>Remove(age)</code>", "<span class='px-2 py-0.5 rounded font-mono font-bold bg-rose-100 text-rose-800'>O(n)</span>", "Phải tìm trước mất O(n), sau đó xóa rồi dồn mảng lại (hoặc đổi chỗ với phần tử cuối)."],
                        ["7", "<code>GetMedian()</code>", "<span class='px-2 py-0.5 rounded font-mono font-bold bg-amber-100 text-amber-800'>O(n log n) / O(n)</span>", "Cách 1: Sort mảng mất O(n log n) rồi lấy A[n/2]; Cách 2: Dùng Quickselect trung bình mất O(n)."],
                        ["8", "<code>NumYounger(age)</code>", "<span class='px-2 py-0.5 rounded font-mono font-bold bg-rose-100 text-rose-800'>O(n) / O(n log n)</span>", "Thường phải duyệt đếm từng phần tử O(n) hoặc sort mảng trước rồi đếm."]
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b8-sub-2-2",
              number: "2.2",
              title: "Sorted Array (Mảng đã sắp xếp) & Chi phí Dời mảng (Shift)",
              parts: [
                {
                  id: "dsa-b8-part-2-2-sorted",
                  label: "MẢNG ĐÃ SẮP XẾP",
                  title: "Phân tích 8 thao tác trên Sorted Array A = [4, 5, 6, 7, 15, 23, 50, 71]",
                  content: [
                    {
                      type: "paragraph",
                      text: "Nếu ta sắp xếp mảng theo thứ tự tăng dần ngay từ đầu:"
                    },
                    {
                      type: "table",
                      headers: ["Index", "0", "1", "2", "3", "4", "5", "6", "7"],
                      rows: [
                        ["<strong>Giá trị A</strong>", "4", "5", "6", "7", "15", "23", "50", "71"]
                      ]
                    },
                    {
                      type: "table",
                      headers: ["No", "Operation", "Time Complexity", "Giải thích vì sao?"],
                      rows: [
                        ["1", "<code>Search(age)</code>", "<span class='px-2 py-0.5 rounded font-mono font-bold bg-emerald-100 text-emerald-800'>O(log n)</span>", "Sử dụng <strong>Binary Search</strong> vì mảng đã được sắp xếp."],
                        ["2", "<code>Insert(age)</code>", "<span class='px-2 py-0.5 rounded font-mono font-bold bg-rose-100 text-rose-800'>O(n)</span>", "Tìm vị trí chèn mất O(log n), nhưng phải <strong>dời (shift)</strong> các phần tử lớn hơn sang phải."],
                        ["3", "<code>FindOldest()</code>", "<span class='px-2 py-0.5 rounded font-mono font-bold bg-emerald-100 text-emerald-800'>O(1)</span>", "Chính là phần tử nằm ở cuối mảng (<code>A[n-1]</code>)."],
                        ["4", "<code>ListSortedAges()</code>", "<span class='px-2 py-0.5 rounded font-mono font-bold bg-emerald-100 text-emerald-800'>O(n)</span>", "Chỉ cần duyệt mảng theo thứ tự có sẵn, không cần sort lại."],
                        ["5", "<code>NextOlder(age)</code>", "<span class='px-2 py-0.5 rounded font-mono font-bold bg-emerald-100 text-emerald-800'>O(log n)</span>", "Binary Search ra vị trí, phần tử liền kề kế tiếp (<code>A[index + 1]</code>) chính là NextOlder."],
                        ["6", "<code>Remove(age)</code>", "<span class='px-2 py-0.5 rounded font-mono font-bold bg-rose-100 text-rose-800'>O(n)</span>", "Tìm vị trí mất O(log n), nhưng xóa phải dời (shift) mảng sang trái &rarr; Tổng O(n)."],
                        ["7", "<code>GetMedian()</code>", "<span class='px-2 py-0.5 rounded font-mono font-bold bg-emerald-100 text-emerald-800'>O(1)</span>", "Truy cập trực tiếp phần tử ở giữa mảng (<code>A[n/2]</code>)."],
                        ["8", "<code>NumYounger(age)</code>", "<span class='px-2 py-0.5 rounded font-mono font-bold bg-emerald-100 text-emerald-800'>O(log n)</span>", "Binary Search ra vị trí chèn, index đó chính là số lượng phần tử nhỏ hơn."]
                      ]
                    },
                    {
                      type: "component",
                      component: "CensusArrayShiftSimulator"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b8-sub-2-3",
              number: "2.3",
              title: "So sánh tổng hợp Unsorted vs Sorted Array (Benchmark)",
              parts: [
                {
                  id: "dsa-b8-part-2-3-compare",
                  label: "SO SÁNH ĐỐI ĐẦU",
                  title: "Bảng đối đầu trực quan 8 thao tác & Nhận xét then chốt",
                  content: [
                    {
                      type: "component",
                      component: "CensusTableBenchmark"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "👉 Nhận xét then chốt:",
                      text: "Sorted Array có vẻ tốt hơn ở nhiều thao tác tìm kiếm và truy xuất (O(log n) hoặc O(1)), <strong>NHƯNG thao tác Insert lại rất chậm O(n)</strong>.<br/>Điều này <strong>rất tệ</strong> nếu hệ thống census liên tục thêm sinh viên mới vào cơ sở dữ liệu (thao tác Insert diễn ra thường xuyên)."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b8-sub-2-4",
              number: "2.4",
              title: "Vấn đề Hiệu năng (Performance Issue) & Động lực Học Cây BST",
              parts: [
                {
                  id: "dsa-b8-part-2-4-bridge",
                  label: "ĐỘNG LỰC HỌC BST",
                  title: "Tại sao không cấu trúc mảng nào thắng tuyệt đối & Cầu nối sang BST",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Tổng kết bài toán hiệu năng:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Không cấu trúc nào</strong> (Unsorted hay Sorted Array) <strong>thắng tuyệt đối</strong> ở mọi thao tác.",
                        "Nếu $n$ lớn, các truy vấn (query) trở nên chậm ở ít nhất một vài thao tác quan trọng.",
                        "&rArr; Chúng ta cần một <strong>cấu trúc dữ liệu động (dynamic data structure)</strong> &mdash; vừa <strong>Insert/Remove nhanh</strong>, vừa <strong>Search/Order nhanh</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "BstMotivationBridge"
                    },
                    {
                      type: "callout",
                      variant: "success",
                      title: "⭐ Ghi nhớ cốt lõi (Motivation)",
                      text: "• <strong>Unsorted Array:</strong> Insert nhanh (O(1)), nhưng mọi thứ liên quan tìm kiếm / thứ tự đều chậm (O(n) / O(n log n)).<br/>• <strong>Sorted Array:</strong> Search / Order-related nhanh (O(log n) hoặc O(1)), nhưng Insert / Remove chậm (O(n)) do phải shift phần tử.<br/>• <strong>ĐÂY CHÍNH LÀ ĐỘNG LỰC ĐỂ HỌC BST:</strong> Kết hợp ưu điểm <em>\"tìm nhanh kiểu sorted\"</em> với <em>\"chèn/xóa nhanh kiểu linked\"</em> bằng một cấu trúc <strong>cây (Tree)</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b8-sec3",
          roman: "III",
          title: "So sánh trực quan O(n) và O(log n)",
          subsections: [
            {
              id: "dsa-b8-sub-3-1",
              number: "3.1",
              title: "So sánh trực quan O(n) vs O(log n) — Lời hứa hẹn của BST",
              parts: [
                {
                  id: "dsa-b8-part-3-1-compare",
                  label: "SO SÁNH TRỰC QUAN",
                  title: "Tốc độ tăng trưởng của O(n) và O(log n)",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Minh họa sự chênh lệch qua các quy mô dữ liệu:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "• $n = 8 \\implies \\log_2 n = 3$",
                        "• $n = 16 \\implies \\log_2 n = 4$",
                        "• $n = 32 \\implies \\log_2 n = 5$",
                        "• Thử với $n$ lớn hơn nhiều, ví dụ <strong>$n = 1.000.000$ (1 triệu)</strong> $\\implies \\log_2 n$ chỉ khoảng <strong>$20$</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "BigOComparisonVisualizer"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Core Takeaway)",
                      text: "• $O(\\log n)$ tăng <strong>rất chậm</strong> so với $O(n)$ khi $n$ lớn.<br/>• Đây là lý do vì sao các thao tác chạy $O(\\log n)$ (hay $O(h)$ nếu cây cân bằng) trên dữ liệu lớn vẫn nhanh, trong khi $O(n)$ trở nên rất chậm.<br/>• Đây chính là <strong>\"lời hứa hẹn\" của BST</strong> &mdash; <strong>nếu</strong> cây có chiều cao thấp (cân bằng)."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b8-sec4",
          roman: "IV",
          title: "Binary Search Tree (BST) — Cấu trúc & Định nghĩa",
          subsections: [
            {
              id: "dsa-b8-sub-4-1",
              number: "4.1",
              title: "Định nghĩa Vertex & Tính chất BST Property",
              parts: [
                {
                  id: "dsa-b8-part-4-1-vertex-def",
                  label: "CẤU TRÚC ĐỈNH & TÍNH CHẤT",
                  title: "Định nghĩa Vertex và bất đẳng thức BST Property",
                  content: [
                    {
                      type: "paragraph",
                      text: "<em>\"A Versatile, Non-Linear Data Structure\"</em> &mdash; Cấu trúc dữ liệu phi tuyến tính (non-linear), đa năng (versatile)."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Với mỗi đỉnh <code>x</code>, định nghĩa các thuộc tính liên kết:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>x.left</code> &mdash; con trái (left child) của <code>x</code>",
                        "<code>x.right</code> &mdash; con phải (right child) của <code>x</code>",
                        "<code>x.parent</code> &mdash; cha (parent) của <code>x</code>",
                        "<code>x.key</code> (hay <code>x.value</code>, <code>x.data</code>) &mdash; giá trị lưu tại <code>x</code>"
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>BST Property (Tính chất cốt lõi của cây tìm kiếm nhị phân):</strong>"
                    },
                    {
                      type: "code",
                      language: "text",
                      code: "x.left.key < x.key <= x.right.key"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Mọi khóa trong cây con trái của <code>x</code> phải <strong>nhỏ hơn</strong> <code>x.key</code>.",
                        "Mọi khóa trong cây con phải của <code>x</code> phải <strong>lớn hơn hoặc bằng</strong> <code>x.key</code>.",
                        "<strong>Giả định đơn giản hóa:</strong> vì các khóa là <strong>duy nhất (unique)</strong>, ta có thể đổi <code>&le;</code> thành <code>&gt;</code>:"
                      ]
                    },
                    {
                      type: "code",
                      language: "text",
                      code: "x.left.key < x.key < x.right.key"
                    },
                    {
                      type: "paragraph",
                      text: "<em>Tính chất này phải đúng cho <strong>MỌI đỉnh x</strong> trong cây, không chỉ riêng đỉnh root.</em>"
                    },
                    {
                      type: "component",
                      component: "BstNodeAnatomyValidator"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b8-sub-4-2",
              number: "4.2",
              title: "Cây mẫu BST (Ages) — Dùng xuyên suốt bài",
              parts: [
                {
                  id: "dsa-b8-part-4-2-sample-tree",
                  label: "CÂY MẪU CHUẨN",
                  title: "Cây BST chuẩn mẫu (Root = 15)",
                  content: [
                    {
                      type: "paragraph",
                      text: "Dưới đây là cây BST mẫu lưu trữ các khóa tuổi (Ages) được sử dụng thống nhất xuyên suốt các phần bài học:"
                    },
                    {
                      type: "component",
                      component: "BstSampleTreeExplorer"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Đây là cây mẫu sẽ được dùng lại ở <strong>mọi ví dụ minh họa</strong> trong các phần sau (Search, Successor, Insert, Delete, Analysis...).",
                        "Đây là một <strong>định nghĩa đệ quy (recursive definition)</strong>: cây con trái (gồm 6, 4, 7, 5) và cây con phải (gồm 23, 71, 50) của root cũng đều là các BST hợp lệ.",
                        "<strong>Internal vertices (đỉnh trong):</strong> đỉnh có ít nhất 1 con &rarr; gồm <code>15, 6, 23, 4, 71</code>.",
                        "<strong>Leaves (đỉnh lá):</strong> đỉnh không có con nào &rarr; gồm <code>5, 7, 50</code>."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Core Rules)",
                      text: "• <strong>BST Property</strong> là điều kiện <strong>bắt buộc</strong> phải giữ đúng sau <strong>mọi</strong> thao tác Insert/Delete.<br/>• Vì key duy nhất &rarr; luôn đúng dấu <code>&lt;</code> chặt (strict) khi so sánh (<code>x.left.key &lt; x.key &lt; x.right.key</code>).<br/>• BST là cấu trúc <strong>đệ quy</strong>: cây con trái/phải của một BST cũng là một BST.<br/>• Ghi nhớ hình cây mẫu (root 15, trái 6-4-7-5, phải 23-71-50) &mdash; các phần sau đều dùng lại cây này."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b8-sec5",
          roman: "V",
          title: "Các thao tác (Operations) trên BST",
          subsections: [
            {
              id: "dsa-b8-sub-5-1",
              number: "5.1",
              title: "Search / FindMin / FindMax",
              parts: [
                {
                  id: "dsa-b8-part-5-1-search",
                  label: "TÌM KIẾM CƠ BẢN",
                  title: "Thuật toán Search(v), FindMin() và FindMax()",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Khái niệm:</strong> Tìm một giá trị <code>v</code> trong cây, hoặc tìm giá trị nhỏ nhất / lớn nhất."
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Cách hoạt động (Search(v)):</strong> Bắt đầu từ root, so sánh <code>v</code> với <code>x.key</code> tại đỉnh hiện tại:",
                        "&nbsp;&nbsp;• Nếu bằng &rarr; tìm thấy, dừng lại.",
                        "&nbsp;&nbsp;• Nếu <code>v</code> nhỏ hơn <code>x.key</code> &rarr; đi sang trái (<code>x = x.left</code>).",
                        "&nbsp;&nbsp;• Nếu <code>v</code> lớn hơn <code>x.key</code> &rarr; đi sang phải (<code>x = x.right</code>).",
                        "&nbsp;&nbsp;• Lặp lại cho đến khi tìm thấy, hoặc <code>x</code> trở thành <code>NULL</code> (không tồn tại trong cây).",
                        "<strong>Ví dụ minh họa &mdash; <code>search(5)</code> trên cây mẫu:</strong>",
                        "&nbsp;&nbsp;• Tại 15: <code>5 < 15</code> &rarr; đi trái đến 6.",
                        "&nbsp;&nbsp;• Tại 6: <code>5 < 6</code> &rarr; đi trái đến 4.",
                        "&nbsp;&nbsp;• Tại 4: <code>5 > 4</code> &rarr; đi phải đến 5.",
                        "&nbsp;&nbsp;• Tại 5: <code>5 == 5</code> &rarr; **tìm thấy!**",
                        "<strong>FindMin:</strong> từ root, liên tục đi sang trái (<code>x = x.left</code>) đến khi không còn con trái &rarr; đỉnh cuối cùng chính là min. (Trên cây mẫu: 15 &rarr; 6 &rarr; 4 &rarr; <strong>min = 4</strong>).",
                        "<strong>FindMax:</strong> từ root, liên tục đi sang phải (<code>x = x.right</code>) đến khi không còn con phải &rarr; đỉnh cuối cùng chính là max. (Trên cây mẫu: 15 &rarr; 23 &rarr; 71 &rarr; <strong>max = 71</strong>)."
                      ]
                    },
                    {
                      type: "component",
                      component: "BstSearchMinMaxTracer"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b8-sub-5-2",
              number: "5.2",
              title: "Successor, Predecessor & Inorder Traversal",
              parts: [
                {
                  id: "dsa-b8-part-5-2-traversal",
                  label: "ĐIỀU HƯỚNG & DUYỆT CÂY",
                  title: "Tìm phần tử kế tiếp và Duyệt trung thứ tự",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Khái niệm Successor & Predecessor:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Successor(x):</strong> phần tử <strong>kế tiếp lớn hơn</strong> <code>x</code> theo thứ tự sắp xếp (số nhỏ nhất trong các số lớn hơn <code>x</code>).",
                        "<strong>Predecessor(x):</strong> phần tử <strong>kế tiếp nhỏ hơn</strong> <code>x</code> theo thứ tự sắp xếp (số lớn nhất trong các số nhỏ hơn <code>x</code>).",
                        "<strong>Cách hoạt động:</strong>",
                        "&nbsp;&nbsp;• Nếu <code>x</code> có cây con phải &rarr; <code>Successor(x) = FindMin(cây con phải đó)</code>.",
                        "&nbsp;&nbsp;• Nếu <code>x</code> <strong>không</strong> có cây con phải &rarr; đi lên (theo <code>x.parent</code>) cho đến khi gặp một <strong>\"rẽ phải\"</strong> (tức là gặp một tổ tiên mà ta đi lên từ nhánh con trái của nó) &rarr; tổ tiên đó chính là successor. Nếu không tìm được &rarr; không có successor (<code>x</code> đã là max).",
                        "&nbsp;&nbsp;• <em>Predecessor làm ngược lại (đối xứng)</em>: dùng max của cây con trái, hoặc đi lên tìm \"rẽ trái\"."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Inorder Traversal (Duyệt trung thứ tự):</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Khái niệm:</strong> Duyệt toàn bộ cây theo thứ tự: <strong>trái &rarr; gốc &rarr; phải (left &rarr; root &rarr; right)</strong>, đệ quy cho mỗi cây con.",
                        "<strong>Kết quả:</strong> một danh sách các khóa theo <strong>thứ tự tăng dần</strong>: <code>4, 5, 6, 7, 15, 23, 50, 71</code>."
                      ]
                    },
                    {
                      type: "component",
                      component: "BstTraversalPlayground"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b8-sub-5-3",
              number: "5.3",
              title: "Select / Rank (Kiến thức mở rộng)",
              parts: [
                {
                  id: "dsa-b8-part-5-3-select-rank",
                  label: "MỞ RỘNG",
                  title: "Thao tác Select(k) và Rank(v)",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Khái niệm:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Select(k):</strong> trả về giá trị <code>v</code> của phần tử <strong>nhỏ thứ k</strong> (k-th smallest), đánh số bắt đầu từ 1 (1-based index).",
                        "<strong>Rank(v):</strong> trả về <strong>thứ hạng (ranking)</strong> <code>k</code> của phần tử <code>v</code> &mdash; tức <code>v</code> là phần tử nhỏ thứ mấy trong cây.",
                        "<strong>Ví dụ (dựa trên danh sách inorder đã sắp xếp: 4, 5, 6, 7, 15, 23, 50, 71 tương ứng thứ hạng 1-8):</strong>",
                        "&nbsp;&nbsp;• <code>Select(1) = 4</code>, <code>Select(3) = 6</code>, <code>Select(8) = 71</code>",
                        "&nbsp;&nbsp;• <code>Rank(4) = 1</code>, <code>Rank(6) = 3</code>, <code>Rank(71) = 8</code>"
                      ]
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "ℹ️ Ghi chú từ bài giảng",
                      text: "2 thao tác này <strong>chưa</strong> có trong VisuAlgo tại thời điểm ra slide (sẽ được thêm sau); cách cài đặt chi tiết (cần lưu thêm thông tin kích thước cây con &mdash; subtree size &mdash; tại mỗi đỉnh) sẽ học ở <strong>bài kế tiếp</strong>, không nằm trong nội dung bài này."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b8-sub-5-4",
              number: "5.4",
              title: "Insert & Delete/Remove (3 Trường Hợp Cốt Lõi)",
              parts: [
                {
                  id: "dsa-b8-part-5-4-insert-delete",
                  label: "CẬP NHẬT CÂY",
                  title: "Chèn đỉnh mới và Xóa đỉnh với 3 trường hợp",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Insert (Chèn đỉnh mới):</strong> Chèn thêm một giá trị mới vào cây mà vẫn giữ đúng BST Property."
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Cách hoạt động:</strong> Giống như Search: so sánh giá trị cần chèn với <code>x.key</code> tại từng đỉnh, đi trái/phải tương ứng.",
                        "Khi gặp một vị trí <code>NULL</code> (không còn đỉnh nào để so sánh tiếp) &rarr; chèn đỉnh mới (chứa giá trị cần thêm) vào đúng vị trí đó (làm con trái hoặc con phải của đỉnh cuối cùng đã đi qua).",
                        "<strong>Đỉnh mới luôn được chèn làm lá (leaf).</strong>",
                        "<strong>Ví dụ minh họa &mdash; <code>insert(20)</code> trên cây mẫu:</strong>",
                        "&nbsp;&nbsp;• Tại 15: <code>20 > 15</code> &rarr; đi phải đến 23.",
                        "&nbsp;&nbsp;• Tại 23: <code>20 < 23</code> &rarr; đi trái; 23 chưa có con trái &rarr; <strong>chèn 20 làm con trái của 23</strong>."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Delete / Remove &mdash; 3 trường hợp (cases):</strong> Xóa một đỉnh khỏi cây mà vẫn giữ đúng BST Property. Có đúng <strong>3 trường hợp</strong> cần xử lý khác nhau tùy số con của đỉnh cần xóa:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>1. Case 1 &mdash; Xóa lá (leaf), 0 con: <code>remove(5)</code></strong>: 5 là lá (không có con nào) &rarr; chỉ việc gỡ bỏ đỉnh 5 khỏi cây (4 không còn con phải nữa).",
                        "<strong>2. Case 2 &mdash; Xóa đỉnh có đúng 1 con (one child): <code>remove(23)</code></strong>: 23 chỉ có 1 con (con phải là 71, không có con trái) &rarr; nối 71 trực tiếp vào vị trí của 23 (71 trở thành con phải mới của 15).",
                        "<strong>3. Case 3 &mdash; Xóa đỉnh có 2 con (two children): <code>remove(6)</code></strong>: 6 có 2 con (4 và 7) &rarr; không thể xóa trực tiếp vì sẽ \"đứt\" 2 nhánh con. Giải pháp: dùng <strong>successor</strong> của 6.",
                        "&nbsp;&nbsp;• <code>Successor(6) = min của cây con phải của 6 = 7</code> (7 không có con trái).",
                        "&nbsp;&nbsp;• Thay khóa của 6 bằng 7, rồi xóa đỉnh 7 cũ (lúc này 7 cũ là lá nên xóa dễ dàng &mdash; quy về Case 1)."
                      ]
                    },
                    {
                      type: "component",
                      component: "BstInsertDeletePlayground"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Summary & Complexity)",
                      text: "• <strong>Search / Insert / FindMin / FindMax / Successor / Predecessor</strong> đều đi theo <strong>một đường duy nhất từ root xuống (hoặc lên)</strong> &rarr; độ phức tạp phụ thuộc <strong>chiều cao cây (height, h)</strong>, không phụ thuộc trực tiếp vào $n$.<br/>• <strong>Inorder traversal</strong> cho ra dãy khóa <strong>tăng dần</strong> &rarr; đây là cách <code>ListSortedAges()</code> từ BST.<br/>• <strong>Insert</strong> luôn chèn đỉnh mới làm <strong>lá</strong>.<br/>• <strong>Delete</strong> có <strong>3 case</strong> rõ ràng: 0 con (xóa thẳng), 1 con (nối con lên thay chỗ), 2 con (thay bằng successor rồi xóa successor cũ).<br/>• <strong>Select/Rank</strong> là kiến thức mở rộng, chi tiết cài đặt dành bài sau."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b8-sec6",
          roman: "VI",
          title: "Phân tích độ phức tạp (Analysis of BST Operations)",
          subsections: [
            {
              id: "dsa-b8-sub-6-1",
              number: "6.1",
              title: "Phân tích độ phức tạp theo chiều cao h: Search, Min, Max, Insert",
              parts: [
                {
                  id: "dsa-b8-part-6-1-height-analysis",
                  label: "PHÂN TÍCH CHIỀU CAO O(h)",
                  title: "Tại sao các thao tác cơ bản đều chạy trong O(h)",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Quy ước:</strong> <code>h == height (chiều cao)</code> của BST = số cạnh trên đường đi dài nhất từ root xuống 1 lá."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>6.1. Search Analysis &mdash; Ví dụ <code>search(51)</code> trên cây mẫu:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Tại 15: <code>51 > 15</code> &rarr; đi phải đến 23.",
                        "Tại 23: <code>51 > 23</code> &rarr; đi phải đến 71.",
                        "Tại 71: <code>51 < 71</code> &rarr; đi trái đến 50.",
                        "Tại 50: <code>51 > 50</code> &rarr; đi phải; 50 không có con phải &rarr; <strong>51 is not found</strong> (không tồn tại trong cây).",
                        "<strong>Phân tích nhanh:</strong> Search chạy trong <strong>O(h)</strong> &mdash; vì tại mỗi bước ta chỉ đi xuống đúng 1 tầng (level), và số tầng tối đa có thể đi qua là <code>h</code>."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>6.2. FindMin / FindMax Analysis:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>findMin</code> đi từ root theo nhánh trái liên tục &mdash; số bước tối đa = <code>h</code>.",
                        "<code>findMax</code> đi từ root theo nhánh phải liên tục &mdash; số bước tối đa = <code>h</code>.",
                        "<strong>Phân tích nhanh:</strong> cả 2 đều chạy trong <strong>O(h)</strong>."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>6.3. Successor / Predecessor Analysis:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Giả sử đã có sẵn kết quả <code>search(71)</code> chạy O(h) trước đó (tức là ta đã đứng tại đỉnh 71).",
                        "<code>successor(71)</code>: 71 không có con phải &rarr; đi lên (go up) tìm \"rẽ phải\" đầu tiên; nhưng đi lên hoài (71 &rarr; 23 &rarr; 15) đều là <strong>đi lên từ nhánh con phải</strong> của tổ tiên (không phải \"rẽ phải\" &mdash; tức không có tổ tiên nào mà ta đi lên từ nhánh trái của nó) &rarr; <strong>không tìm được successor cho 71</strong> (71 chính là max của cây).",
                        "<strong>Phân tích nhanh:</strong> việc đi lên tối đa cũng chỉ dài <code>h</code> bước &rarr; <strong>O(h)</strong>, tương tự cho predecessor."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>6.5. Insertion Analysis &mdash; Ví dụ <code>insert(50)</code>:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Slide minh họa trên một snapshot <strong>trước khi 50 được chèn vào</strong> (cây lúc này chỉ gồm 15, 6, 23, 4, 7, 71).",
                        "Tại 15: <code>50 > 15</code> &rarr; đi phải đến 23.",
                        "Tại 23: <code>50 > 23</code> &rarr; đi phải đến 71.",
                        "Tại 71: <code>50 < 71</code> &rarr; đi trái; 71 chưa có con trái &rarr; <strong>chèn 50 vào đây, làm con trái của 71</strong>.",
                        "<strong>Phân tích nhanh:</strong> insert cũng chỉ đi theo 1 đường từ root xuống &rarr; chạy trong <strong>O(h)</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "BstHeightComplexityTracer"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b8-sub-6-2",
              number: "6.2",
              title: "Phân tích Inorder Traversal — Kỹ thuật 3 lần chạm (O(n))",
              parts: [
                {
                  id: "dsa-b8-part-6-2-inorder-analysis",
                  label: "KỸ THUẬT 3 LẦN CHẠM",
                  title: "Tại sao Inorder Traversal tốn O(n) thay vì O(h)",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>6.4. Inorder Traversal Analysis:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Đây là kỹ thuật phân tích <strong>mới</strong> (khác với đếm số bước đi xuống): đặt câu hỏi &mdash; <em>mỗi đỉnh bị \"chạm\" (touched) bao nhiêu lần trong suốt quá trình duyệt?</em>",
                        "<strong>Trả lời:</strong> đúng <strong>3 lần</strong> cho mỗi đỉnh: 1 lần từ cha (parent) đi xuống vào đỉnh đó, và 2 lần từ chính đỉnh đó \"hỏi thăm\" 2 con trái & phải (dù con đó có thể rỗng/NULL, vẫn tính là 1 lần \"chạm\" theo lời gọi đệ quy).",
                        "Với <code>n</code> đỉnh, tổng số lần chạm ~ <code>3n</code> &rarr; <strong>O(3n) = O(n)</strong> (hằng số 3 bị lược bỏ trong ký hiệu Big O).",
                        "<strong>Lưu ý quan trọng:</strong> Inorder Traversal là <strong>O(n)</strong>, KHÔNG phải O(h) &mdash; vì bắt buộc phải ghé thăm <strong>toàn bộ n đỉnh</strong>, không chỉ 1 đường đi."
                      ]
                    },
                    {
                      type: "component",
                      component: "BstInorder3TouchAnimator"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b8-sub-6-3",
              number: "6.3",
              title: "Chứng minh: Successor của x luôn có tối đa 1 con",
              parts: [
                {
                  id: "dsa-b8-part-6-3-successor-proof",
                  label: "CHỨNG MINH TỰ LUẬN",
                  title: "4 bước chứng minh Successor của x có tối đa 1 con",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>6.6. Vì sao dùng Successor để xóa đỉnh có 2 con?</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Claim (Khẳng định):</strong> Successor của <code>x</code> luôn có <strong>nhiều nhất 1 con</strong>.",
                        "Vì vậy thay <code>x</code> bằng successor rồi xóa successor cũ sẽ <strong>dễ xóa hơn</strong> và <strong>không vi phạm</strong> BST Property."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Chứng minh (Proof) &mdash; từng bước chặt chẽ:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "1. Đỉnh <code>x</code> có 2 con &rarr; do đó <code>x</code> chắc chắn có <strong>con phải (right child)</strong> (vì có 2 con nghĩa là có cả trái lẫn phải).",
                        "2. Vì <code>x</code> có con phải, nên Successor của <code>x</code> (phần tử kế tiếp lớn hơn x) chính là <strong>phần tử nhỏ nhất (minimum)</strong> của cây con phải đó &mdash; theo cách hoạt động của Successor đã nêu ở mục 5.2.",
                        "3. Một phần tử nhỏ nhất (minimum) của bất kỳ BST nào <strong>luôn không có con trái</strong> &rarr; vì nếu có con trái, con trái đó còn nhỏ hơn nữa, mâu thuẫn với giả thiết đây là phần tử nhỏ nhất.",
                        "4. &rarr; Vậy successor của <code>x</code> <strong>không có con trái</strong>, chỉ có thể có (hoặc không có) con phải &rarr; <strong>successor của x có tối đa 1 con</strong>. ∎"
                      ]
                    },
                    {
                      type: "callout",
                      variant: "info",
                      title: "ℹ️ Vì sao điều này quan trọng?",
                      text: "• Đỉnh có tối đa 1 con thì việc xóa nó chỉ rơi vào <strong>Case 1 (0 con)</strong> hoặc <strong>Case 2 (1 con)</strong> &mdash; đều là các trường hợp đơn giản, đã biết cách xử lý O(1).<br/>• Việc thay <code>x.key</code> bằng <code>successor.key</code> rồi xóa successor cũ <strong>không làm vi phạm BST Property</strong>, vì successor vẫn nằm đúng vị trí \"ngay sau x\" trong thứ tự sắp xếp."
                    },
                    {
                      type: "component",
                      component: "BstSuccessorProofVisualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b8-sub-6-4",
              number: "6.4",
              title: "Phân tích Deletion — Chi tiết 3 Case & Bảng tổng hợp",
              parts: [
                {
                  id: "dsa-b8-part-6-4-deletion-analysis",
                  label: "PHÂN TÍCH DELETION",
                  title: "Chi tiết chi phí 3 trường hợp xóa và Bảng tổng hợp",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>6.7. Deletion Analysis &mdash; chi tiết 3 case:</strong> Xóa đỉnh <code>v</code>: Đầu tiên <strong>tìm <code>v</code></strong> trong cây &rarr; <strong>O(h)</strong>, sau đó xét 3 trường hợp:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>1. <code>v</code> không có con nào (Case 1):</strong> Xóa trực tiếp đỉnh <code>v</code> khỏi cây (chỉ cần cập nhật <code>v.parent</code> để không còn trỏ tới <code>v</code> nữa) &rarr; <strong>O(1)</strong>.",
                        "<strong>2. <code>v</code> có 1 con, trái hoặc phải (Case 2):</strong> Nối <code>v.left</code> (hoặc <code>v.right</code>, tùy con nào tồn tại) trực tiếp với <code>v.parent</code>, và cập nhật ngược lại <code>v.parent</code> cho con đó &rarr; <strong>O(1)</strong>. Sau đó gỡ bỏ <code>v</code> &rarr; <strong>O(1)</strong>.",
                        "<strong>3. <code>v</code> có 2 con (Case 3):</strong>",
                        "&nbsp;&nbsp;• Tìm <code>x = successor(v)</code> &rarr; <strong>O(h)</strong> (theo phân tích mục 6.3).",
                        "&nbsp;&nbsp;• Thay <code>v.key</code> bằng <code>x.key</code> &rarr; <strong>O(1)</strong>.",
                        "&nbsp;&nbsp;• Xóa <code>x</code> trong cây con phải của <code>v</code> &rarr; <strong>O(h)</strong> (nhưng thực chất <code>x</code> chỉ có tối đa 1 con theo mục 6.6, nên bước xóa <code>x</code> này lại quay về Case 1 hoặc Case 2, tốn O(1); phần O(h) chủ yếu nằm ở bước \"tìm\" <code>x</code>).",
                        "&nbsp;&nbsp;• <em>(Lý do phải xóa <code>x</code> chứ không xóa <code>v</code> gốc: nếu không xóa <code>x</code> mà chỉ đổi key thì sẽ có 2 đỉnh cùng giá trị x.key &rarr; trùng lặp (duplicate), vi phạm giả định key duy nhất.)</em>"
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "&rArr; <strong>Tổng thời gian chạy (running time) của Delete, tính cả 3 case: O(h).</strong>"
                    },
                    {
                      type: "component",
                      component: "BstDeletionComplexityAnalyzer"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Bảng tổng hợp phân tích)",
                      text: "• Hầu hết thao tác trên BST đều là <strong>O(h)</strong>, ngoại lệ duy nhất là <strong>Inorder traversal O(n)</strong> (vì bản chất phải duyệt hết mọi đỉnh, không thể \"đi tắt\").<br/>• Chứng minh \"successor có tối đa 1 con\" là <strong>điểm hay bị hỏi thi tự luận</strong> &rarr; cần nhớ đủ 4 bước chứng minh ở mục 6.6.<br/>• 3 case của Delete (0 con / 1 con / 2 con) là kiến thức trọng tâm, cần vẽ được minh họa cho từng case."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b8-sec7",
          roman: "VII",
          title: "Tổng kết: BST so với Array & Giới hạn Plain BST",
          subsections: [
            {
              id: "dsa-b8-sub-7-1",
              number: "7.1",
              title: "Bảng đối đầu 3 cấu trúc (Unsorted vs Sorted vs BST)",
              parts: [
                {
                  id: "dsa-b8-part-7-1-arena",
                  label: "ĐỐI ĐẦU 3 CHIỀU",
                  title: "So sánh toàn diện 8 thao tác ADT Table",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Bảng so sánh 3 cấu trúc dữ liệu cho 8 thao tác ADT Table:</strong>"
                    },
                    {
                      type: "component",
                      component: "BstArrayVsBstArena"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Ô <code>Rank(age)</code> của cột BST được đánh dấu <strong>\"?\"</strong> trong slide &mdash; vì cách cài đặt Rank/Select cụ thể (và độ phức tạp chính xác) sẽ học ở <strong>bài kế tiếp</strong>.",
                        "So với Sorted Array, <strong>BST đã giải quyết được điểm yếu lớn nhất: Insert từ O(n) xuống O(h)</strong>.",
                        "<strong>Kết luận của slide:</strong> <strong>mọi thứ bây giờ phụ thuộc vào <code>h</code></strong> (chiều cao cây) &mdash; độ phức tạp thật sự của BST sẽ được phân tích kỹ ở bài kế tiếp (next lecture), vì <code>h</code> có thể khác nhau tùy hình dạng cây."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b8-sub-7-2",
              number: "7.2",
              title: "Hiện tượng suy biến Worst-Case Height (h = O(n))",
              parts: [
                {
                  id: "dsa-b8-part-7-2-worst-case",
                  label: "HIỆN TƯỢNG SUY BIẾN",
                  title: "Cây lệch (Skewed Tree) và Giới hạn của Plain BST",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>7.1. Worst case height của BST:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Nếu chèn dữ liệu theo thứ tự <strong>đã sắp xếp sẵn</strong> (ví dụ chèn lần lượt: 4, 5, 6, 7, 15, 23, 50, 71), mỗi giá trị mới luôn lớn hơn giá trị trước &rarr; luôn bị chèn làm <strong>con phải</strong> của đỉnh cuối cùng. BST khi đó suy biến thành một <strong>đường thẳng (giống linked list)</strong>.",
                        "Khi đó: <strong><code>h = O(n)</code></strong> (chiều cao bằng đúng số đỉnh trừ 1) &rarr; BST <strong>mất hết lợi thế</strong>, mọi thao tác O(h) trở thành O(n), không còn hơn gì Unsorted Array!",
                        "<strong>Câu hỏi mở của slide:</strong> Hãy thử tìm thêm <strong>một kịch bản worst case khác</strong> cùng với tập số này.",
                        "&nbsp;&nbsp;• <em>Gợi ý logic:</em> chèn theo thứ tự <strong>giảm dần</strong> (71, 50, 23, 15, 7, 6, 5, 4) cũng cho ra cây suy biến tương tự nhưng lệch về bên trái (mỗi giá trị mới luôn nhỏ hơn, bị chèn làm con trái liên tiếp)."
                      ]
                    },
                    {
                      type: "component",
                      component: "BstWorstCaseSkewedSimulator"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Giới hạn của Plain BST)",
                      text: "• BST (thường/plain BST) <strong>không tự cân bằng (not self-balancing)</strong> &rarr; nếu dữ liệu vào theo thứ tự xấu (đã sắp xếp tăng hoặc giảm dần), cây suy biến thành danh sách liên kết, <code>h = O(n)</code>.<br/>• Đây chính là động lực (motivation) để học các cấu trúc <strong>cây cân bằng (balanced BST)</strong> ở các bài sau.<br/>• Do <code>h</code> có thể là O(n) trong trường hợp xấu nhất, nên <strong>plain BST không đảm bảo O(log n)</strong> cho các thao tác &mdash; chỉ đảm bảo <strong>O(h)</strong>, và h chỉ thực sự là O(log n) khi cây \"cân đối\"."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b8-sec8",
          roman: "VIII",
          title: "Tóm tắt toàn bài & Dashboard Ôn thi",
          subsections: [
            {
              id: "dsa-b8-sub-8-1",
              number: "8.1",
              title: "Master Cheat Sheet & Flashcards Ôn tập",
              parts: [
                {
                  id: "dsa-b8-part-8-1-summary-cheat-sheet",
                  label: "TỔNG KẾT TOÀN BÀI",
                  title: "Tóm tắt nhanh toàn bài (Ôn thi)",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Tổng hợp nhanh 12 điểm cốt lõi của Bài 8: Binary Search Tree (BST) phục vụ ôn tập và thi cử:</strong>"
                    },
                    {
                      type: "component",
                      component: "Bai8MasterSummaryDashboard"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>1. ADT Table:</strong> cần 8 thao tác cơ bản: Search, Insert, FindOldest/Youngest, ListSortedAges, NextOlder, Remove, GetMedian, NumYounger.",
                        "<strong>2. Unsorted Array:</strong> Insert nhanh (O(1)), còn lại chậm (đa số O(n) hoặc O(n log n)).",
                        "<strong>3. Sorted Array:</strong> Search/Order-related nhanh (O(log n) hoặc O(1)), nhưng Insert/Remove chậm (O(n)) vì phải shift.",
                        "<strong>4. BST Property:</strong> <code>x.left.key < x.key < x.right.key</code> (dùng dấu <code>&lt;</code> chặt vì key unique).",
                        "<strong>5. Cấu trúc BST:</strong> đệ quy, gồm <strong>internal vertices</strong> (có con) và <strong>leaves</strong> (không con).",
                        "<strong>6. Cây mẫu chuẩn cần nhớ:</strong> root 15; trái 6 (con 4, 7; 4 có con phải 5); phải 23 (con phải 71; 71 có con trái 50).",
                        "<strong>7. Các thao tác và cách hoạt động căn bản:</strong> Search, FindMin/Max, Successor/Predecessor, Inorder Traversal, Select/Rank (khái niệm), Insert, Delete (3 case).",
                        "<strong>8. Hầu hết thao tác BST chạy O(h)</strong>; riêng <strong>Inorder Traversal = O(n)</strong> (mỗi đỉnh bị chạm đúng 3 lần).",
                        "<strong>9. Xóa đỉnh có 2 con:</strong> thay bằng <strong>successor</strong> (chứng minh: successor luôn có tối đa 1 con, gồm 4 bước chứng minh) rồi xóa successor cũ.",
                        "<strong>10. 3 case xóa:</strong> không con (O(1), gỡ thẳng), 1 con (O(1), nối con lên thay chỗ), 2 con (O(h) do phải tìm successor, phần xóa thực tế chỉ O(1)).",
                        "<strong>11. Worst case:</strong> BST suy biến thành danh sách liên kết khi dữ liệu chèn vào đã có thứ tự (tăng hoặc giảm dần) &rarr; <code>h = O(n)</code>.",
                        "<strong>12. Bài học rút ra cuối bài:</strong> hiệu năng BST phụ thuộc hoàn toàn vào chiều cao <code>h</code> &rarr; cần cấu trúc cân bằng (balanced) để đảm bảo <code>h = O(log n)</code>, nội dung này sẽ học ở bài kế tiếp."
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dsa-b9",
      title: "Bài 9: AVL Tree — Balancing Act",
      sections: [
        {
          id: "dsa-b9-sec0-hero",
          roman: "OVERVIEW",
          title: "Tổng Quan & Phòng Thí Nghiệm Cây AVL Tự Cân Bằng",
          subsections: [
            {
              id: "dsa-b9-sub-0-hero",
              number: "0.0",
              title: "Tựa Đề & Live AVL Balancing Workbench",
              parts: [
                {
                  id: "dsa-b9-part-hero",
                  label: "LIVE AVL WORKBENCH",
                  title: "Tựa đề & Phòng thí nghiệm cây AVL trực quan",
                  content: [
                    {
                      type: "component",
                      component: "DsaAvlHeroBanner"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b9-sec1",
          roman: "I",
          title: "Binary Search Tree (BST): Ôn nhanh",
          subsections: [
            {
              id: "dsa-b9-sub-1-1",
              number: "1.1",
              title: "Khái niệm cơ bản & BST Property",
              parts: [
                {
                  id: "dsa-b9-part-1-1-bst-basics",
                  label: "CƠ BẢN VỀ BST",
                  title: "Khái niệm đỉnh & Tính chất BST Property",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Mỗi đỉnh (vertex) <code>x</code> trong cây BST có:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Hai con: <code>x.left</code>, <code>x.right</code>.",
                        "Một cha: <code>x.parent</code>.",
                        "<code>x.left / x.right / x.parent</code> có thể là <code>null</code> với một số đỉnh.",
                        "Một khóa: <code>x.key</code>."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>BST Property (Tính chất BST):</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>all keys in left sub-tree < x.key < all keys in right sub-tree</code>",
                        "(Mọi khóa trong cây con trái &lt; khóa của x &lt; mọi khóa trong cây con phải)."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b9-sub-1-2",
              number: "1.2",
              title: "Hai thuộc tính bổ sung: Height và Size",
              parts: [
                {
                  id: "dsa-b9-part-1-2-height-size",
                  label: "HEIGHT & SIZE",
                  title: "Hai thuộc tính bổ sung & Công thức đệ quy",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Height (chiều cao):</strong> số cạnh (edges) trên đường đi từ đỉnh này đến lá sâu nhất.",
                        "<strong>Size (kích thước):</strong> số đỉnh của cây con gốc tại đỉnh này."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Công thức đệ quy:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>x.height = -1</code> (nếu x là cây rỗng / null).",
                        "<code>x.height = max(x.left.height, x.right.height) + 1</code> (các trường hợp còn lại).",
                        "<code>x.size = 0</code> (nếu x là cây rỗng / null).",
                        "<code>x.size = x.left.size + x.right.size + 1</code> (các trường hợp còn lại).",
                        "<strong>Height của cả BST</strong> = <code>root.height</code>.",
                        "<strong>Size của cả BST</strong> = <code>root.size</code>."
                      ]
                    },
                    {
                      type: "component",
                      component: "BstHeightSizeInspector"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b9-sub-1-3",
              number: "1.3",
              title: "Tóm tắt độ phức tạp các thao tác BST",
              parts: [
                {
                  id: "dsa-b9-part-1-3-complexity-matrix",
                  label: "TỔNG KẾT BIG-O",
                  title: "Phân loại thao tác Modify vs Query & Độ phức tạp",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Phân loại thao tác theo 2 nhóm: Modify (Thay đổi cấu trúc) vs Query (Không đổi cấu trúc):</strong>"
                    },
                    {
                      type: "component",
                      component: "BstModifyVsQueryMatrix"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "• BST Property: <code>trái < x.key < phải</code>.<br/>• Height tính bằng <strong>số cạnh</strong> (không phải số đỉnh); cây rỗng có height = -1.<br/>• Hầu hết thao tác BST chạy <strong>O(h)</strong>, chỉ có <strong>inorder traversal là O(n)</strong>.<br/>• &rArr; Nếu h lớn (cây lệch) thì các thao tác sẽ chậm &rarr; cần cây <strong>cân bằng (Being Balanced)</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b9-sec2",
          roman: "II",
          title: "Tầm quan trọng của việc 'Being Balanced' (Cân bằng)",
          subsections: [
            {
              id: "dsa-b9-sub-2-1",
              number: "2.1",
              title: "Vì sao cần quan tâm đến h?",
              parts: [
                {
                  id: "dsa-b9-part-2-1-why-h",
                  label: "TẦM QUAN TRỌNG",
                  title: "Vì sao cần quan tâm đến chiều cao h",
                  content: [
                    {
                      type: "paragraph",
                      text: "Hầu hết thao tác trên BST chạy trong <strong>O(h)</strong> &rArr; <strong><code>h</code> càng nhỏ thì hiệu năng càng tốt</strong>."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b9-sub-2-2",
              number: "2.2",
              title: "Cận dưới (Lower bound) của h",
              parts: [
                {
                  id: "dsa-b9-part-2-2-lower-bound",
                  label: "CẬN DƯỚI",
                  title: "Chứng minh Cận dưới: h > log₂(n)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Với cây có <code>n</code> đỉnh: $n \\le 1 + 2 + 4 + \\dots + 2^h$",
                        "Đây là tổng cấp số nhân: $n < 2^{h+1}$",
                        "Suy ra:",
                        "&nbsp;&nbsp;• $\\log_2(n) < \\log_2(2^{h+1})$",
                        "&nbsp;&nbsp;• $\\log_2(n) < (h + 1) \\cdot \\log_2(2)$",
                        "&nbsp;&nbsp;• $h > \\log_2(n) - 1 \\implies \\mathbf{h > \\log_2(n)}$ (xấp xỉ)."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b9-sub-2-3",
              number: "2.3",
              title: "Cận trên (Upper bound) của h",
              parts: [
                {
                  id: "dsa-b9-part-2-3-upper-bound",
                  label: "CẬN TRÊN",
                  title: "Trường hợp xấu nhất: Cây suy biến đường thẳng",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Trường hợp xấu nhất: cây bị lệch hoàn toàn (như danh sách liên kết / linked list).",
                        "$h \\le n - 1 \\implies \\mathbf{h < n}$."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b9-sub-2-4",
              number: "2.4",
              title: "Kết hợp hai cận: log₂(n) < h < n",
              parts: [
                {
                  id: "dsa-b9-part-2-4-combined-bounds",
                  label: "KHOẢNG KẸP",
                  title: "Kết hợp hai cận & Định nghĩa Balanced BST",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Khoảng kẹp chiều cao của cây BST:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "$\\mathbf{\\log_2(n) < h < n}$",
                        "Ví dụ: $n = 500 \\implies \\log_2(n) \\approx 9$; $n = 1000 \\implies \\log_2(n) \\approx 10$ (so với $n$ rất lớn).",
                        "<strong>Định nghĩa BST cân bằng (balanced):</strong> $\\mathbf{h = O(\\log n)}$, tức $O(c \\cdot \\log n)$.",
                        "Trên một BST cân bằng, <strong>mọi thao tác chạy trong $O(\\log n)$</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "AvlHeightBoundGauge"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b9-sub-2-5",
              number: "2.5",
              title: "Ví dụ cây cân bằng hoàn hảo & Chiến lược cân bằng",
              parts: [
                {
                  id: "dsa-b9-part-2-5-balancing-strategy",
                  label: "CHIẾN LƯỢC CÂN BẰNG",
                  title: "Cây cân bằng hoàn hảo & 4 bước chiến lược",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>2.5. Ví dụ cây cân bằng hoàn hảo (perfectly balanced):</strong> Có tồn tại nhưng <strong>khó đạt được</strong> trong thực tế khi insert/delete liên tục."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>2.6. Chiến lược để có cây cân bằng (4 bước cốt lõi):</strong>"
                    },
                    {
                      type: "component",
                      component: "AvlBalancingStrategyRoadmap"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "• Balanced BST &hArr; $h = O(\\log n)$ &hArr; mọi thao tác chạy trong $O(\\log n)$.<br/>• Cận: $\\log_2(n) < h < n$.<br/>• Ý tưởng cốt lõi của AVL: định nghĩa invariant \"height-balanced\", sau mỗi insert/delete kiểm tra và fix nếu vi phạm."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b9-sec3",
          roman: "III",
          title: "Cây AVL [Adelson-Velskii & Landis, 1962]",
          subsections: [
            {
              id: "dsa-b9-sub-3-1",
              number: "3.1",
              title: "Step 1 — Augment (Bổ sung thông tin x.height)",
              parts: [
                {
                  id: "dsa-b9-part-3-1-augment",
                  label: "AUGMENTATION",
                  title: "Bổ sung thuộc tính x.height & Cập nhật dọc Ancestor Path",
                  content: [
                    {
                      type: "paragraph",
                      text: "Ra đời năm 1962 (~61 năm trước so với slide). Cây AVL bổ sung thêm thông tin chiều cao vào từng đỉnh:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Mỗi đỉnh <code>x</code> lưu thêm: <code>x.height</code> (ngoài <code>x.left, x.right, x.parent, x.key</code> đã có).",
                        "Trong lúc <strong>insert</strong> và <strong>delete</strong>, phải cập nhật lại height:",
                        "<code>x.height = max(x.left.height, x.right.height) + 1</code>.",
                        "<strong>Lưu ý:</strong> chỉ những đỉnh nằm <strong>trên đường đi insertion/deletion (Ancestor path)</strong> mới có thể bị thay đổi height (không phải cả cây) &rarr; tốn tối đa <strong>O(h)</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "AvlAugmentationPathAnimator"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b9-sub-3-2",
              number: "3.2",
              title: "Step 2 — Định nghĩa Invariant (Bất biến)",
              parts: [
                {
                  id: "dsa-b9-part-3-2-invariant",
                  label: "ĐỊNH NGHĨA INVARIANT",
                  title: "Điều kiện Height-balanced tại mọi đỉnh",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Height-balanced tại đỉnh x:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "$\\mathbf{|x.left.height - x.right.height| \\le 1}$",
                        "<strong>BST height-balanced:</strong> mọi đỉnh trong cây đều height-balanced."
                      ]
                    },
                    {
                      type: "component",
                      component: "AvlInvariantValidator"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b9-sub-3-3",
              number: "3.3",
              title: "Step 3 — Chứng minh: Height-balanced tree thì cân bằng",
              parts: [
                {
                  id: "dsa-b9-part-3-3-fibonacci-proof",
                  label: "CHỨNG MINH TOÁN HỌC",
                  title: "Proof: h < 2·log₂(n) = O(log n) (Không cần sợ!)",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Claim (Khẳng định):</strong> Cây height-balanced với $n$ đỉnh có $h < 2 \\cdot \\log_2(n)$."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Proof (không cần sợ):</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Gọi <code>n_h</code> = số đỉnh <strong>tối thiểu</strong> trong một cây height-balanced có chiều cao <code>h</code>.",
                        "Công thức truy hồi: $n_h = 1 + n_{h-1} + n_{h-2}$",
                        "Vì $n_{h-1} > n_{h-2}$:",
                        "&nbsp;&nbsp;• $n_h > 1 + 2 \\cdot n_{h-2}$",
                        "&nbsp;&nbsp;• $n_h > 2 \\cdot n_{h-2}$ (hiển nhiên)",
                        "Mỗi bước giảm $h$ đi 2, cần lặp $h/2$ lần để giảm $h$ (giả sử $h$ chẵn) về 0:",
                        "&nbsp;&nbsp;• $n_h > 2^{h/2} \\cdot n_0$, với $n_0 = 1$ (base case)",
                        "&nbsp;&nbsp;• $\\implies n_h > 2^{h/2}$",
                        "Ta có $n \\ge n_h$ (vì $n_h$ là số đỉnh tối thiểu), suy ra:",
                        "&nbsp;&nbsp;• $n \\ge n_h > 2^{h/2}$",
                        "&nbsp;&nbsp;• $n > 2^{h/2}$",
                        "&nbsp;&nbsp;• $\\log_2(n) > \\log_2(2^{h/2})$ (lấy $\\log_2$ hai vế)",
                        "&nbsp;&nbsp;• $\\log_2(n) > h/2$ (rút gọn)",
                        "&nbsp;&nbsp;• $2 \\cdot \\log_2(n) > h$ hay $\\mathbf{h < 2 \\cdot \\log_2(n)}$",
                        "&nbsp;&nbsp;• $\\implies \\mathbf{h = O(\\log n)}$."
                      ]
                    },
                    {
                      type: "component",
                      component: "AvlFibonacciProofVisualizer"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "• Invariant AVL: <code>|x.left.height - x.right.height| &le; 1</code> tại <strong>mọi</strong> đỉnh.<br/>• Chứng minh dùng công thức truy hồi $n_h = 1 + n_{h-1} + n_{h-2}$.<br/>• Kết luận: height-balanced &rArr; $h < 2\\log_2(n) \\implies h = O(\\log n)$.<br/>• <code>x.height</code> tính theo <strong>height con</strong>, chỉ cập nhật dọc đường insertion/deletion."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b9-sec4",
          roman: "IV",
          title: "Step 3 — Duy trì Height-Balance bằng Rotations",
          subsections: [
            {
              id: "dsa-b9-sub-4-1",
              number: "4.1",
              title: "Vấn đề: insert có thể làm mất cân bằng",
              parts: [
                {
                  id: "dsa-b9-part-4-1-problem",
                  label: "VẤN ĐỀ MẤT CÂN BẰNG",
                  title: "Tại sao cần Rebalance sau khi Insert",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Ví dụ:</strong> Cây đang balanced, sau khi <code>insert(37)</code> thì một số đỉnh bị mất cân bằng &rarr; Cần <strong>rebalance</strong>! Nhưng làm sao? &rarr; Dùng <strong>Tree Rotations (Phép xoay cây)</strong>."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b9-sub-4-2",
              number: "4.2",
              title: "Tree Rotations (Phép xoay cây)",
              parts: [
                {
                  id: "dsa-b9-part-4-2-mechanism",
                  label: "CƠ CHẾ XOAY CÂY",
                  title: "Xoay quanh 2 đỉnh liền kề P & Q và Bảo toàn BST Property",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Ý tưởng cốt lõi:</strong> Xoay cây quanh 2 đỉnh liền kề (P và Q) để đổi vai trò cha-con, nhưng <strong>vẫn giữ đúng thứ tự BST</strong>."
                    },
                    {
                      type: "component",
                      component: "AvlRotationMechanismSandbox"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Rotations giữ nguyên thứ tự khóa (ordering of keys):</strong> vẫn duy trì đúng BST Property (ví dụ đỉnh B: $P \\le B \\le Q$).",
                        "<code>rotateRight</code> yêu cầu phải có <strong>left child</strong>.",
                        "<code>rotateLeft</code> yêu cầu phải có <strong>right child</strong>."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b9-sub-4-3",
              number: "4.3",
              title: "Pseudo code — O(1) Time Complexity",
              parts: [
                {
                  id: "dsa-b9-part-4-3-pseudocode",
                  label: "MÃ NGUỒN O(1)",
                  title: "Java Pseudocode rotateLeft và Phiên bản đối xứng",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Mã cài đặt Java chuẩn của phép xoay trái <code>rotateLeft(BSTVertex T)</code>:</strong>"
                    },
                    {
                      type: "component",
                      component: "AvlRotationCodeWorkbench"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>rotateRight</code> là <strong>phiên bản đối xứng (mirrored)</strong> của <code>rotateLeft</code>.",
                        "Minh họa: T (gốc cũ) và w = T.right (gốc mới sau xoay); cây con A, B, C được sắp xếp lại đúng vị trí.",
                        "<strong>Time complexity:</strong> <strong>O(1)</strong> cho mỗi lần rotate (chỉ đổi vài con trỏ + cập nhật height)."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b9-sub-4-4",
              number: "4.4",
              title: "Balance Factor & Bốn trường hợp cần Rebalance",
              parts: [
                {
                  id: "dsa-b9-part-4-4-four-cases",
                  label: "4 TRƯỜNG HỢP",
                  title: "Phân loại 4 Case: LL, RR, LR, RL & Quy tắc xoay",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Hệ số cân bằng Balance Factor:</strong> <code>bf(x) = x.left.height - x.right.height</code>."
                    },
                    {
                      type: "bullets",
                      items: [
                        "Từ điểm vừa insert, đi ngược lên <strong>kiểm tra balance factor của từng đỉnh cho đến root</strong>.",
                        "Nếu gặp đỉnh có <code>bf(x) = +2</code> hoặc <code>bf(x) = -2</code> &rarr; <strong>phải rebalance đỉnh đó</strong>."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Bốn trường hợp (Four Possible Cases) cần rebalance:</strong>"
                    },
                    {
                      type: "component",
                      component: "AvlFourCasesMasterMatrix"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (RẤT hay ra thi)",
                      text: "• $bf(x) = x.left.height - x.right.height$.<br/>• $bf(x) = +2$ hoặc $-2 \\implies$ mất cân bằng, cần rotate.<br/>• 4 case: <strong>LL</strong> &rarr; <code>rightRotate(x)</code>, <strong>LR</strong> &rarr; <code>leftRotate(x.left)</code> rồi <code>rightRotate(x)</code>, <strong>RR</strong> &rarr; <code>leftRotate(x)</code>, <strong>RL</strong> &rarr; <code>rightRotate(x.right)</code> rồi <code>leftRotate(x)</code>.<br/>• <strong>Case \"lệch cùng phía\" (LL, RR) chỉ cần 1 rotation; case \"lệch khác phía\" (LR, RL) cần 2 rotations.</strong>"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b9-sub-4-5",
              number: "4.5",
              title: "Ví dụ minh họa Rebalancing (insert(37))",
              parts: [
                {
                  id: "dsa-b9-part-4-5-walkthrough",
                  label: "VÍ DỤ MINH HỌA",
                  title: "Quy trình Rebalance sau khi insert(37) (Case RR)",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>4.6. Ví dụ minh họa Rebalancing từ slide:</strong>"
                    },
                    {
                      type: "component",
                      component: "AvlInsert37RebalanceWalkthrough"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Rebalancing (1):</strong> Sau khi <code>insert(37)</code>, phát hiện đỉnh 29 có <code>bf = -2</code>, và con phải của nó có <code>bf = -1</code> &rarr; đây là case <strong>-2, -1 (Right Right Case)</strong> &rarr; làm <code>leftRotate(29)</code>.",
                        "<strong>Rebalancing (2):</strong> Sau khi rotate, tất cả các đỉnh đều cân bằng trở lại."
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b9-sec5",
          roman: "V",
          title: "Insertion vào AVL Tree — Tóm tắt quy trình",
          subsections: [
            {
              id: "dsa-b9-sub-5-1",
              number: "5.1",
              title: "3 Bước Insertion & Nguyên lý Trigger tối đa 1 lần",
              parts: [
                {
                  id: "dsa-b9-part-5-1-pipeline",
                  label: "INSERTION AVL",
                  title: "Quy trình 3 bước Insertion & Giới hạn tối đa 1 lần xoay",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Tóm tắt quy trình 3 bước Insertion vào AVL Tree:</strong>"
                    },
                    {
                      type: "component",
                      component: "AvlInsertionPipelineVisualizer"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>1. Insert key giống hệt BST bình thường.</strong>",
                        "<strong>2. Đi ngược lên (walk up) từ điểm vừa insert đến root:</strong>",
                        "&nbsp;&nbsp;• Ở mỗi bước: cập nhật height & kiểm tra balance factor.",
                        "&nbsp;&nbsp;• Nếu một đỉnh mất cân bằng (<code>bf = +2</code> hoặc <code>-2</code>) &rarr; dùng rotation để rebalance.",
                        "<strong>3. Trong 1 lần insert vào AVL tree, chỉ có thể kích hoạt (trigger) đúng 1 trong 4 case rebalancing ở trên (không hơn).</strong>"
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "Insertion AVL = Insertion BST bình thường + cập nhật height + kiểm tra & fix balance factor trên đường đi lên root. <strong>Chỉ trigger tối đa 1 lần rebalance.</strong>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b9-sec6",
          roman: "VI",
          title: "Deletion khỏi AVL Tree — Tóm tắt quy trình & Cascade Effect",
          subsections: [
            {
              id: "dsa-b9-sub-6-1",
              number: "6.1",
              title: "Quy trình Deletion & So sánh đối đầu với Insertion",
              parts: [
                {
                  id: "dsa-b9-part-6-1-insert-vs-delete",
                  label: "ĐỐI ĐẦU TRỌNG TÂM",
                  title: "Khác biệt cốt lõi: Insertion vs Deletion",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Tương tự Insertion:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "1. Xóa key giống như BST bình thường.",
                        "2. Đi ngược lên (walk up) từ điểm vừa xóa đến root: cập nhật height & kiểm tra balance factor; nếu mất cân bằng &rarr; rotate để rebalance."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Khác biệt chính so với Insertion (Đối đầu trọng tâm):</strong>"
                    },
                    {
                      type: "component",
                      component: "AvlInsertVsDeleteArena"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b9-sub-6-2",
              number: "6.2",
              title: "Mô phỏng chuỗi xoay liên hoàn (Cascade Rebalancing) khi xóa đỉnh 7",
              parts: [
                {
                  id: "dsa-b9-part-6-2-cascade-demo",
                  label: "CASCADE EFFECT",
                  title: "Chuỗi xoay lan truyền lên tới O(log n) lần (VisuAlgo Demo)",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Hiện tượng chuỗi xoay liên hoàn (Cascade Effect) từ VisuAlgo:</strong>"
                    },
                    {
                      type: "component",
                      component: "AvlCascadeDeletionSimulator"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Deletion <strong>có thể trigger nhiều lần</strong> (một trong 4 case) rebalancing, <strong>lên tới $h = O(\\log n)$ lần</strong> (trong khi insertion chỉ trigger tối đa 1 lần).",
                        "Demo tham khảo: <code>visualgo.net/bst.html?mode=AVL</code> &mdash; thử Remove vertex 7 sẽ trigger 2 lần rebalancing liên tiếp; thử Insert thì chỉ trigger tối đa 1 lần."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "• Deletion AVL = Deletion BST + cập nhật height + kiểm tra & fix balance factor.<br/>• <strong>Insertion:</strong> tối đa <strong>1 lần</strong> rebalance.<br/>• <strong>Deletion:</strong> có thể <strong>nhiều lần</strong> rebalance, tối đa <strong>O(log n) lần</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b9-sec7",
          roman: "VII",
          title: "Các loại Balanced Search Tree khác (mở rộng, không đi sâu)",
          subsections: [
            {
              id: "dsa-b9-sub-7-1",
              number: "7.1",
              title: "Bảng tổng hợp 7 họ Balanced BST",
              parts: [
                {
                  id: "dsa-b9-part-7-1-family",
                  label: "HỌ CÂY CÂN BẰNG",
                  title: "7 Cấu trúc Balanced Search Tree nổi tiếng",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Tổng quan các loại Balanced Search Tree khác trong Khoa học máy tính:</strong>"
                    },
                    {
                      type: "component",
                      component: "AvlBalancedTreesFamilyGallery"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "Chỉ cần nhớ <strong>tên + tác giả/năm + ý tưởng cốt lõi 1 câu</strong> của mỗi loại &mdash; bài này tập trung chính vào AVL Tree."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b9-sec8",
          roman: "VIII",
          title: "Bảng tổng kết độ phức tạp — Sau khi học Balanced BST (bBST)",
          subsections: [
            {
              id: "dsa-b9-sub-8-1",
              number: "8.1",
              title: "Bảng đối đầu 8 thao tác: Unsorted Array vs Sorted Array vs bBST (AVL)",
              parts: [
                {
                  id: "dsa-b9-part-8-1-benchmark",
                  label: "ĐỐI ĐẦU 8 THAO TÁC",
                  title: "So sánh toàn diện độ phức tạp 8 thao tác ADT Table",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>So sánh toàn diện độ phức tạp 8 thao tác ADT Table:</strong>"
                    },
                    {
                      type: "component",
                      component: "AvlFinalMasterBenchmarkArena"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "bBST (AVL) cho hầu hết thao tác đều <strong>O(log n)</strong> &mdash; cân bằng tốt giữa Search/Insert/Remove so với mảng (array). Câu 8 (NumYounger) chưa có đáp án &rArr; cần cấu trúc/khái niệm khác (order-statistics / rank)."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b9-sub-8-2",
              number: "8.2",
              title: "Giải mã ô dấu '?' của NumYounger(age) — Cầu nối Order-Statistics Tree",
              parts: [
                {
                  id: "dsa-b9-part-8-2-order-statistics",
                  label: "ORDER-STATISTICS",
                  title: "Tại sao NumYounger(age) cần cấu trúc Order-Statistics Tree",
                  content: [
                    {
                      type: "component",
                      component: "AvlOrderStatisticsBridgeCard"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b9-sec9",
          roman: "IX",
          title: "Tổng kết chương & Các điểm dễ ra thi (Summary)",
          subsections: [
            {
              id: "dsa-b9-sub-9-1",
              number: "9.1",
              title: "Tổng kết chương (Summary)",
              parts: [
                {
                  id: "dsa-b9-part-9-1-summary",
                  label: "TỔNG KẾT BÀI 9",
                  title: "4 Trụ cột kiến thức cốt lõi của Chương 9",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>4 Trụ cột kiến thức cốt lõi của Chương 9:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Tầm quan trọng của việc 'Being Balanced'</strong> (cân bằng cây).",
                        "<strong>Height-Balanced Trees</strong> (định nghĩa + chứng minh $h = O(\\log n)$).",
                        "<strong>Tree Rotations</strong> (<code>rotateLeft</code>, <code>rotateRight</code>, $O(1)$).",
                        "<strong>AVL Trees:</strong> augment height, invariant balance factor, 4 case rebalancing."
                      ]
                    },
                    {
                      type: "component",
                      component: "AvlSummaryDashboard"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b9-sub-9-2",
              number: "9.2",
              title: "Tổng hợp nhanh — Các điểm dễ ra thi (Top 10 Points)",
              parts: [
                {
                  id: "dsa-b9-part-9-2-exam-points",
                  label: "ĐIỂM DỄ RA THI",
                  title: "Top 10 Điểm Cốt Lõi Cực Kỳ Dễ Ra Thi Cần Ghi Nhớ Nằm Lòng",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>10 Điểm cốt lõi cực kỳ hay ra thi cần ghi nhớ nằm lòng:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "1. <code>height</code> tính bằng <strong>số cạnh</strong>; cây rỗng có height = <strong>-1</strong>.",
                        "2. <strong>AVL invariant:</strong> <code>|x.left.height - x.right.height| &le; 1</code> tại <strong>mọi</strong> đỉnh.",
                        "3. <code>bf(x) = x.left.height - x.right.height</code>; mất cân bằng khi <code>bf(x) = +2</code> hoặc <code>-2</code>.",
                        "4. <strong>4 case rebalancing:</strong>",
                        "&nbsp;&nbsp;• LL (+2, +1) &rarr; <code>rightRotate(x)</code>",
                        "&nbsp;&nbsp;• LR (+2, -1) &rarr; <code>leftRotate(x.left)</code> rồi <code>rightRotate(x)</code>",
                        "&nbsp;&nbsp;• RR (-2, -1) &rarr; <code>leftRotate(x)</code>",
                        "&nbsp;&nbsp;• RL (-2, +1) &rarr; <code>rightRotate(x.right)</code> rồi <code>leftRotate(x)</code>",
                        "5. <code>rotateLeft</code> cần <code>T.right != null</code>; <code>rotateRight</code> cần <code>T.left != null</code>. Mỗi rotation là <strong>O(1)</strong>.",
                        "6. Rotation <strong>giữ nguyên BST property</strong> (thứ tự khóa không đổi).",
                        "7. <strong>Insertion:</strong> trigger <strong>tối đa 1 lần</strong> rebalancing.",
                        "8. <strong>Deletion:</strong> có thể trigger <strong>nhiều lần</strong> rebalancing, tối đa <strong>O(log n)</strong> lần.",
                        "9. Cây height-balanced &rArr; $h < 2\\log_2(n) \\implies h = O(\\log n) \\implies$ mọi thao tác $O(\\log n)$.",
                        "10. Tất cả thao tác BST/AVL cơ bản (insert, delete, search, findMin/Max, predecessor/successor) đều <strong>O(h)</strong>; chỉ <strong>inorder traversal là O(n)</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "AvlTop10ExamFlashcardsHub"
                    },
                    {
                      type: "component",
                      component: "AvlMasterExamQuizMiniGame"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b9-sub-9-3",
              number: "9.3",
              title: "Bài học kế tiếp — ADT Priority Queues & Binary Heaps",
              parts: [
                {
                  id: "dsa-b9-part-9-3-next-lesson",
                  label: "BÀI KẾ TIẾP",
                  title: "Dẫn nhập sang ADT Priority Queues và Binary Heaps",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Bài học kế tiếp:</strong> ADT Priority Queues, Binary Heaps."
                    },
                    {
                      type: "component",
                      component: "AvlNextLessonHeapBridge"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dsa-b10",
      title: "Bài 10: Priority Queue & Binary Max Heap",
      sections: [
        {
          id: "dsa-b10-sec0-hero",
          roman: "OVERVIEW",
          title: "Tổng Quan & Phòng Thí Nghiệm Binary Max Heap",
          subsections: [
            {
              id: "dsa-b10-sub-0-hero",
              number: "0.0",
              title: "Tựa Đề & Live Max Heap Workbench",
              parts: [
                {
                  id: "dsa-b10-part-0-banner",
                  label: "TỔNG QUAN",
                  title: "Khám phá Hàng Đợi Ưu Tiên & Binary Max Heap",
                  content: [
                    {
                      type: "component",
                      component: "DsaHeapHeroBanner"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b10-sec1",
          roman: "I",
          title: "ADT PriorityQueue (PQ)",
          subsections: [
            {
              id: "dsa-b10-sub-1-1",
              number: "1.1",
              title: "Ví dụ minh họa (Tình huống Air Traffic Controller)",
              parts: [
                {
                  id: "dsa-b10-part-1-1-atc",
                  label: "TÌNH HUỐNG THỰC TẾ",
                  title: "Ví dụ kiểm soát không lưu Air Traffic Controller",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Tình huống Air Traffic Controller (kiểm soát viên không lưu):</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Máy bay X hạ cánh sau 3 phút, máy bay Y hạ cánh sau 6 phút.",
                        "Cả hai còn đủ nhiên liệu cho ít nhất 15 phút và đều cách sân bay 2 phút.",
                        "&rarr; Cần một cấu trúc luôn biết <strong>item nào có priority (độ ưu tiên) cao nhất</strong> để xử lý trước."
                      ]
                    },
                    {
                      type: "component",
                      component: "PqAirTrafficControllerSim"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-1-2",
              number: "1.2",
              title: "Các phép toán cơ bản (Important Basic Operations)",
              parts: [
                {
                  id: "dsa-b10-part-1-2-basic-ops",
                  label: "PHÉP TOÁN CƠ BẢN",
                  title: "Enqueue, Dequeue và Cơ chế Tie-Breaking (FIFO)",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Hai phép toán cơ bản của ADT PriorityQueue:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>Enqueue(x)</code>: đưa item mới x vào PQ (theo thứ tự nào đó).",
                        "<code>y &larr; Dequeue()</code>: trả về item y có priority (key) <strong>cao nhất</strong> trong PQ.",
                        "Nếu có nhiều item cùng priority cao nhất &rarr; trả về item được insert <strong>đầu tiên</strong> (FIFO tie-breaking).",
                        "<strong>Lưu ý:</strong> có thể định nghĩa \"priority cao nhất\" = số lớn hơn (Max-PQ), hoặc ngược lại = số nhỏ hơn (Min-PQ)."
                      ]
                    },
                    {
                      type: "component",
                      component: "PqBasicOpsTieBreakingStudio"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-1-3",
              number: "1.3",
              title: "Một vài điều cần nhớ về Data Structure (DS)",
              parts: [
                {
                  id: "dsa-b10-part-1-3-ds-notes",
                  label: "BẢN CHẤT CẤU TRÚC DỮ LIỆU",
                  title: "Định nghĩa Data Structure & Duy trì tính chất (Maintain Property)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Data Structure là gì?</strong> Cách lưu trữ và tổ chức dữ liệu để hỗ trợ hiệu quả cho: insertions, searches, deletions, queries, và/hoặc updates.",
                        "Hầu hết DS có (các) <strong>tính chất (property)</strong> riêng.",
                        "Mỗi phép toán trên DS đó <strong>phải duy trì (maintain)</strong> tính chất đó."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "• PQ có 2 thao tác chính: <code>Enqueue(x)</code> và <code>Dequeue()</code> &rarr; trả về phần tử ưu tiên cao nhất.<br/>• Nếu trùng priority &rarr; theo <strong>FIFO (First-In-First-Out)</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b10-sec2",
          roman: "II",
          title: "Cài đặt PriorityQueue bằng Array (Array-Based Implementation)",
          subsections: [
            {
              id: "dsa-b10-sub-2-1",
              number: "2.1",
              title: "Strategy 1 — (Circular) Array-Based PQ, giữ mảng luôn có thứ tự",
              parts: [
                {
                  id: "dsa-b10-part-2-1-strategy1",
                  label: "CHIẾN LƯỢC 1",
                  title: "Circular Sorted Array (Enqueue O(n), Dequeue O(1))",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Property:</strong> nội dung mảng luôn ở đúng thứ tự (sorted).",
                        "<code>Enqueue(x)</code>: tìm đúng vị trí chèn (insertion point) &rarr; <strong>O(n)</strong> (giống insertion sort).",
                        "<code>Dequeue()</code>: trả về phần tử ở đầu (front-most) &mdash; có priority cao nhất &rarr; <strong>O(1)</strong>.",
                        "Không cần đóng khoảng trống (close the gap), chỉ cần dịch con trỏ front &rarr; <strong>O(1)</strong>.",
                        "Mảng là <strong>circular</strong>: chỉ thao tác con trỏ <code>front</code> + <code>back</code> để xác định phần đang dùng của mảng."
                      ]
                    },
                    {
                      type: "component",
                      component: "PqSortedCircularArraySim"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-2-2",
              number: "2.2",
              title: "Strategy 2 — Array-Based PQ, không cần sắp xếp khi enqueue",
              parts: [
                {
                  id: "dsa-b10-part-2-2-strategy2",
                  label: "CHIẾN LƯỢC 2",
                  title: "Unsorted Array (Enqueue O(1), Dequeue O(n))",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Property:</strong> chỉ phép Dequeue() trả về đúng item.",
                        "<code>Enqueue(x)</code>: đưa item mới vào cuối queue &rarr; <strong>O(1)</strong>.",
                        "<code>Dequeue()</code>: quét (scan) toàn bộ queue, trả về item đầu tiên có priority cao nhất &rarr; <strong>O(n)</strong>.",
                        "Có thể cần đóng khoảng trống (close the gap) nếu phép toán này gây ra &rarr; cũng <strong>O(n)</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "PqUnsortedArraySim"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-2-3",
              number: "2.3",
              title: "So sánh 2 chiến lược (nếu chỉ dừng ở kiến thức CS1020)",
              parts: [
                {
                  id: "dsa-b10-part-2-3-duel",
                  label: "ĐỐI ĐẦU 2 CHIẾN LƯỢC",
                  title: "Thế bế tắc của Mảng & Cầu nối cần cấu trúc Binary Heap",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Bảng đối đầu 2 chiến lược cài đặt PriorityQueue bằng Array:</strong>"
                    },
                    {
                      type: "component",
                      component: "PqStrategyDuelArena"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Nếu n lớn &rarr; truy vấn (query) chậm..."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "• Strategy 1: Enqueue O(n), Dequeue O(1) (mảng luôn sorted).<br/>• Strategy 2: Enqueue O(1), Dequeue O(n) (mảng không sorted, phải scan).<br/>• Cả 2 cách đều có 1 thao tác O(n) &rarr; <strong>cần cấu trúc tốt hơn: Binary Heap</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b10-sec3",
          roman: "III",
          title: "Complete Binary Tree (Cây Nhị Phân Hoàn Chỉnh)",
          subsections: [
            {
              id: "dsa-b10-sub-3-1",
              number: "3.1",
              title: "Khái niệm Complete Binary Tree",
              parts: [
                {
                  id: "dsa-b10-part-3-1-concept",
                  label: "KHÁI NIỆM",
                  title: "Định nghĩa Cây Nhị Phân Hoàn Chỉnh (Complete Binary Tree)",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Complete Binary Tree:</strong> cây nhị phân mà <strong>mọi level đều được lấp đầy hoàn toàn</strong>, trừ level cuối cùng (có thể chưa đầy), và tất cả các node ở level cuối được đặt <strong>càng xa bên trái càng tốt (as far left as possible)</strong>."
                    },
                    {
                      type: "component",
                      component: "CompleteBinaryTreeValidatorLab"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-3-2",
              number: "3.2",
              title: "Chiều cao (Height) của Complete Binary Tree có N items",
              parts: [
                {
                  id: "dsa-b10-part-3-2-height",
                  label: "CHIỀU CAO O(LOG N)",
                  title: "Chứng minh chiều cao Complete Binary Tree là O(log N)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Height = số levels - 1 = số <strong>max edges</strong> từ root đến leaf sâu nhất.",
                        "<strong>Đáp án cần ghi nhớ:</strong> <strong>Height = O(log N)</strong>.",
                        "Lý do: mỗi level của complete binary tree chứa <strong>gấp đôi</strong> số node so với level trước (level 0 có 1 node, level 1 có 2 node, level 2 có 4 node,...). Vậy với N node thì số level cần thiết chỉ tăng theo <strong>logarit</strong> của N, chứ không tăng tuyến tính.",
                        "⚠️ Phải <strong>ghi nhớ</strong> đáp án này vì sẽ dùng cho gần như <strong>mọi phân tích độ phức tạp thời gian (time complexity)</strong> của các phép toán trên binary heap."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "Height của complete binary tree N items = <strong>O(log N)</strong> &mdash; kiến thức nền tảng, dùng lại liên tục."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b10-sec4",
          roman: "IV",
          title: "Lưu trữ Complete Binary Tree bằng Array",
          subsections: [
            {
              id: "dsa-b10-sub-4-1",
              number: "4.1",
              title: "Cách lưu (1-based array)",
              parts: [
                {
                  id: "dsa-b10-part-4-1-1based",
                  label: "1-BASED ARRAY",
                  title: "Lưu trữ dạng mảng 1-based compact array",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Lưu dưới dạng <strong>1-based compact array</strong>: <code>A[1..size(A)]</code> (không dùng 0-based).",
                        "Ví dụ mảng: <code>A = [NIL, 90, 19, 36, 17, 3, 25, 1, 2, 7, -, -]</code> (chỉ số 0 &rarr; 11).",
                        "<code>heapsize &le; size(A)</code>: <code>heapsize</code> là số phần tử <strong>đang thực sự dùng</strong> trong heap."
                      ]
                    },
                    {
                      type: "component",
                      component: "HeapArrayTreeMapperSandbox"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-4-2",
              number: "4.2",
              title: "Các phép toán điều hướng (Navigation operations)",
              parts: [
                {
                  id: "dsa-b10-part-4-2-nav",
                  label: "ĐIỀU HƯỚNG",
                  title: "Công thức parent(i), left(i), right(i) & Kiểm tra biên",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<code>parent(i) = floor(i/2)</code>, trừ khi <code>i = 1</code> (root, không có parent).",
                        "<code>left(i) = 2*i</code> (Không có left child khi: <code>left(i) &gt; heapsize</code>).",
                        "<code>right(i) = 2*i + 1</code> (Không có right child khi: <code>right(i) &gt; heapsize</code>)."
                      ]
                    },
                    {
                      type: "component",
                      component: "HeapNavigationMathWorkbench"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "• Dùng 1-based array để công thức 'parent/left/right' đơn giản, gọn.<br/>• <code>parent(i) = i / 2</code>, <code>left(i) = 2*i</code>, <code>right(i) = 2*i + 1</code>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b10-sec5",
          roman: "V",
          title: "Binary Heap Property",
          subsections: [
            {
              id: "dsa-b10-sub-5-1",
              number: "5.1",
              title: "Định nghĩa tính chất Heap (trừ root)",
              parts: [
                {
                  id: "dsa-b10-part-5-1-prop",
                  label: "TÍNH CHẤT HEAP",
                  title: "Max-Heap Property vs Min-Heap Property",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Max Heap:</strong> <code>A[parent(i)] &ge; A[i]</code>.",
                        "<strong>Min Heap:</strong> <code>A[parent(i)] &le; A[i]</code>.",
                        "Trong bài này, mặc định dùng <strong>(Binary Max) Heap</strong> cho mọi ví dụ, và giả sử các số là <strong>phân biệt (distinct)</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "HeapPropertyRootProofStudio"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-5-2",
              number: "5.2",
              title: "Vị trí phần tử lớn nhất",
              parts: [
                {
                  id: "dsa-b10-part-5-2-max-root",
                  label: "VỊ TRÍ MAX",
                  title: "Chứng minh phần tử lớn nhất luôn ở Root",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Lý do:</strong> vì heap property yêu cầu <code>A[parent(i)] &ge; A[i]</code> với mọi <code>i &ne; root</code>, nghĩa là đi từ root xuống bất kỳ hướng nào, giá trị <strong>không bao giờ tăng</strong>. Do đó root luôn là giá trị lớn nhất (&ge; mọi node khác) trong toàn bộ heap."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "• Max Heap: cha &ge; con (ở mọi node trừ root vì root không có cha).<br/>• Phần tử lớn nhất luôn ở <strong>root</strong>, vì giá trị giảm dần (không tăng) khi đi từ root xuống leaf."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b10-sec6",
          roman: "VI",
          title: "Insert(v) vào Binary Max Heap",
          subsections: [
            {
              id: "dsa-b10-sub-6-1",
              number: "6.1",
              title: "Ý tưởng",
              parts: [
                {
                  id: "dsa-b10-part-6-1-idea",
                  label: "Ý TƯỞNG CHÈN",
                  title: "Vị trí chèn A[heapsize+1] & Bảo toàn Complete Tree",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Vị trí chèn (insertion point) phù hợp nhất vào Binary Max Heap đang có là <code>A[heapsize]</code> (ngay sau phần tử cuối, giữ đúng tính chất complete binary tree).",
                        "<strong>Câu hỏi trong slide:</strong> Tại sao lại chọn <code>A[heapsize]</code>?",
                        "&rarr; <strong>Trả lời:</strong> đây là vị trí <strong>duy nhất</strong> giúp thêm 1 phần tử mà cây vẫn giữ được tính chất <strong>complete binary tree</strong> (không tạo lỗ hổng, không phá vỡ quy tắc 'lấp đầy từ trái sang phải'). Chèn ở vị trí khác sẽ làm cây không còn complete.",
                        "Nhưng sau khi chèn, <strong>Binary Max Heap property có thể bị vi phạm</strong> &rarr; dùng <code>ShiftUp(i)</code> để sửa lại."
                      ]
                    },
                    {
                      type: "component",
                      component: "HeapInsertionPointWhyCard"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-6-2",
              number: "6.2",
              title: "Code — Insert(v)",
              parts: [
                {
                  id: "dsa-b10-part-6-2-insert-code",
                  label: "CODE INSERT",
                  title: "Mã nguồn Insert(v)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<code>Insert(v)</code> phụ thuộc vào <code>ShiftUp(i)</code>."
                      ]
                    },
                    {
                      type: "component",
                      component: "HeapShiftUpCodeWorkbench"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-6-3",
              number: "6.3",
              title: "Code — ShiftUp(i)",
              parts: [
                {
                  id: "dsa-b10-part-6-3-shiftup-code",
                  label: "CODE SHIFTUP",
                  title: "Mã nguồn ShiftUp(i) & Điều kiện dừng vòng lặp",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Tên khác: ShiftUp / BubbleUp / IncreaseKey / ...",
                        "Điều kiện dừng vòng lặp: <code>i = 1</code> (đến root) <strong>hoặc</strong> <code>A[parent(i)] &ge; A[i]</code> (không còn vi phạm) &rarr; không swap nữa."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-6-4",
              number: "6.4",
              title: "Time Complexity",
              parts: [
                {
                  id: "dsa-b10-part-6-4-complexity",
                  label: "ĐỘ PHỨC TẠP",
                  title: "Phân tích độ phức tạp thời gian Insert(v) = O(log N)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<code>ShiftUp(i)</code>: <strong>O(log n)</strong> (do height của complete binary tree là O(log n), tối đa đi từ leaf lên root).",
                        "&rarr; <code>Insert(v)</code>: <strong>O(log n)</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "HeapShiftUpComplexityGauge"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-6-5",
              number: "6.5",
              title: "Ví dụ minh họa: Insert(26) (VisuAlgo demo)",
              parts: [
                {
                  id: "dsa-b10-part-6-5-demo",
                  label: "VÍ DỤ VISUALGO",
                  title: "Từng bước thực hiện Insert(26) vào Heap Mẫu",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Heap mẫu (1-based array, từ mục 4.1): <code>A = [_, 90, 19, 36, 17, 3, 25, 1, 2, 7]</code>, <code>heapsize = 9</code>.",
                        "<strong>Bước 1:</strong> <code>heapsize = 10</code>, <code>A[10] = 26</code> &rarr; 26 trở thành <strong>right child của node 5</strong> (tức con của giá trị 3).",
                        "<strong>Bước 2 (ShiftUp(10)):</strong>",
                        "• So sánh <code>A[10]=26</code> với <code>A[parent(10)=5]=3</code> &rarr; <code>26 &gt; 3</code> &rarr; <strong>swap</strong> &rarr; 26 lên vị trí 5, i = 5.",
                        "• So sánh <code>A[5]=26</code> với <code>A[parent(5)=2]=19</code> &rarr; <code>26 &gt; 19</code> &rarr; <strong>swap</strong> &rarr; 26 lên vị trí 2, i = 2.",
                        "• So sánh <code>A[2]=26</code> với <code>A[parent(2)=1]=90</code> &rarr; <code>26 &lt; 90</code> &rarr; <strong>dừng</strong> (không vi phạm nữa).",
                        "<strong>Kết quả:</strong> 26 dừng lại ở vị trí node 2 (ngay dưới root)."
                      ]
                    },
                    {
                      type: "component",
                      component: "HeapInsert26Walkthrough"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "• Insert = chèn vào cuối mảng (<code>A[heapsize]</code>) rồi <strong>ShiftUp</strong> để phục hồi tính chất heap.<br/>• ShiftUp: so sánh với parent, nếu con &gt; cha thì swap, đi lên tiếp cho đến root hoặc không còn vi phạm.<br/>• <code>Insert(v)</code> = <strong>O(log n)</strong> &mdash; số bước swap tối đa = height của heap = O(log n)."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b10-sec7",
          roman: "VII",
          title: "ExtractMax() — Xóa phần tử lớn nhất",
          subsections: [
            {
              id: "dsa-b10-sub-7-1",
              number: "7.1",
              title: "Ý tưởng",
              parts: [
                {
                  id: "dsa-b10-part-7-1-idea",
                  label: "Ý TƯỞNG EXTRACTMAX",
                  title: "Lựa chọn lá cuối A[heapsize] thay thế Root",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Max element luôn ở <strong>root</strong>.",
                        "Nhưng nếu chỉ đơn giản lấy root ra &rarr; làm <strong>đứt (disconnect)</strong> complete binary tree &rarr; không được.",
                        "<strong>Câu hỏi:</strong> node nào là ứng viên tốt nhất để thay thế root mà vẫn giữ tính chất complete binary tree?",
                        "&rarr; <strong>Trả lời:</strong> <strong>leaf cuối cùng</strong> trong compact array (tức <code>A[heapsize]</code>) &mdash; vì đây là phần tử duy nhất có thể <strong>loại bỏ khỏi cây</strong> mà không phá vỡ tính chất complete binary tree (giống lý do ngược lại của phép Insert).",
                        "Sau khi thay, heap property vẫn có thể bị vi phạm &rarr; dùng <code>ShiftDown(1)</code> để sửa."
                      ]
                    },
                    {
                      type: "component",
                      component: "HeapExtractMaxCandidateVisualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-7-2",
              number: "7.2",
              title: "Code — ExtractMax()",
              parts: [
                {
                  id: "dsa-b10-part-7-2-extract-code",
                  label: "CODE EXTRACTMAX",
                  title: "Mã nguồn ExtractMax()",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<code>ExtractMax()</code> phụ thuộc vào <code>ShiftDown()</code>."
                      ]
                    },
                    {
                      type: "component",
                      component: "HeapShiftDownCodeWorkbench"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-7-3",
              number: "7.3",
              title: "Code — ShiftDown(i)",
              parts: [
                {
                  id: "dsa-b10-part-7-3-shiftdown-code",
                  label: "CODE SHIFTDOWN",
                  title: "Mã nguồn ShiftDown(i) & Điều kiện dừng",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Tên khác: ShiftDown / BubbleDown / Heapify / ...",
                        "<strong>Ý tưởng:</strong> so sánh node <code>i</code> với <strong>cả 2 con</strong>, tìm phần tử lớn nhất trong 3 (node, left, right); nếu node không phải lớn nhất thì swap với con lớn hơn rồi tiếp tục đi xuống; nếu đã là lớn nhất thì dừng (break)."
                      ]
                    },
                    {
                      type: "component",
                      component: "HeapShiftDownTerminationCard"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-7-4",
              number: "7.4",
              title: "Time Complexity",
              parts: [
                {
                  id: "dsa-b10-part-7-4-complexity",
                  label: "ĐỘ PHỨC TẠP",
                  title: "Phân tích độ phức tạp thời gian ExtractMax() = O(log N)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<code>ShiftDown(i)</code>: <strong>O(log n)</strong>.",
                        "&rarr; <code>ExtractMax()</code>: <strong>O(log n)</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "HeapExtractMaxComplexityGauge"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-7-5",
              number: "7.5",
              title: "Ví dụ minh họa: ExtractMax() (VisuAlgo demo)",
              parts: [
                {
                  id: "dsa-b10-part-7-5-demo",
                  label: "VÍ DỤ VISUALGO",
                  title: "Từng bước thực hiện ExtractMax() rút gốc 90",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Dùng lại heap mẫu gốc (mục 4.1): <code>A = [_, 90, 19, 36, 17, 3, 25, 1, 2, 7]</code>, <code>heapsize = 9</code>.",
                        "<strong>Bước 1:</strong> <code>maxV = A[1] = 90</code> (giá trị sẽ trả về).",
                        "<strong>Bước 2:</strong> <code>A[1] = A[heapsize=9] = 7</code> &rarr; đưa phần tử cuối lên root; <code>heapsize = 8</code>.",
                        "<strong>Bước 3 (ShiftDown(1)):</strong>",
                        "• <code>i=1</code>: <code>A[1]=7</code>. So <code>left(1)=2 &rarr; A[2]=19</code> (lớn hơn) và <code>right(1)=3 &rarr; A[3]=36</code> (lớn hơn nữa) &rarr; <code>max_id = 3</code>. Vì <code>max_id != 1</code> &rarr; <strong>swap</strong> <code>A[1]</code> và <code>A[3]</code> &rarr; 36 lên root, 7 xuống vị trí 3. <code>i = 3</code>.",
                        "• <code>i=3</code>: <code>A[3]=7</code>. So <code>left(3)=6 &rarr; A[6]=25</code> (lớn hơn) và <code>right(3)=7 &rarr; A[7]=1</code> (nhỏ hơn 25) &rarr; <code>max_id = 6</code>. Vì <code>max_id != 3</code> &rarr; <strong>swap</strong> <code>A[3]</code> và <code>A[6]</code> &rarr; 25 lên vị trí 3, 7 xuống vị trí 6. <code>i = 6</code>.",
                        "• <code>i=6</code>: <code>left(6)=12 &gt; heapsize(8)</code> &rarr; không còn con &rarr; <strong>break</strong>.",
                        "<strong>Kết quả:</strong> <code>maxV = 90</code> được trả về; heap còn lại (<code>heapsize = 8</code>): <code>[_, 36, 19, 25, 17, 3, 7, 1, 2]</code>."
                      ]
                    },
                    {
                      type: "component",
                      component: "HeapExtractMax90Walkthrough"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "• ExtractMax = lấy root ra, đưa phần tử cuối (<code>A[heapsize]</code>) lên root, giảm heapsize, rồi <strong>ShiftDown(1)</strong> để phục hồi heap.<br/>• ShiftDown: so sánh node với 2 con, swap với con lớn hơn, đi xuống tiếp; dừng khi node đã lớn nhất trong 3 hoặc hết heap (hết con để so sánh).<br/>• <code>ExtractMax()</code> = <strong>O(log n)</strong> &mdash; số bước swap tối đa = height của heap = O(log n)."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b10-sec8",
          roman: "VIII",
          title: "So sánh lại các cách cài đặt PriorityQueue",
          subsections: [
            {
              id: "dsa-b10-sub-8-1",
              number: "8.1",
              title: "Bảng so sánh tổng kết các chiến lược cài đặt",
              parts: [
                {
                  id: "dsa-b10-part-8-1-summary-table",
                  label: "TỔNG KẾT CHIẾN LƯỢC",
                  title: "So sánh hiệu năng 3 cách cài đặt PriorityQueue",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>So sánh tổng kết hiệu năng các phương pháp cài đặt PriorityQueue:</strong>"
                    },
                    {
                      type: "component",
                      component: "HeapPqUltimateShowdownArena"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Tóm tắt:</strong> Heap là DS hiệu quả &mdash; cả enqueue lẫn dequeue đều <strong>O(log n)</strong> &mdash; để cài đặt ADT PriorityQueue, trong đó 'key' biểu diễn 'priority' của mỗi item."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "Binary Heap cân bằng tốt hơn 2 cách array thuần: cả 2 thao tác đều <strong>O(log n)</strong>, thay vì một thao tác O(n)."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-8-2",
              number: "8.2",
              title: "Tổng kết bài học & Flashcards cốt lõi ôn thi",
              parts: [
                {
                  id: "dsa-b10-part-8-2-flashcards",
                  label: "ÔN THI CỐT LÕI",
                  title: "Dashboard 4 Trụ Cột & 10 Flashcards Ôn Thi",
                  content: [
                    {
                      type: "component",
                      component: "HeapMasterSummaryFlashcards"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b10-sec9",
          roman: "IX",
          title: "Xây dựng Heap từ mảng (BuildHeap & HeapSort)",
          subsections: [
            {
              id: "dsa-b10-sub-9-0",
              number: "9.0",
              title: "Ôn lại: MergeSort (câu hỏi khởi động trước khi học HeapSort)",
              parts: [
                {
                  id: "dsa-b10-part-9-0-warmup",
                  label: "KHỞI ĐỘNG MERGESORT",
                  title: "Ôn lại mốc chuẩn O(n log n) trước khi học HeapSort",
                  content: [
                    {
                      type: "component",
                      component: "HeapSortWarmupQuizCard"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Mục đích: ôn lại mốc <strong>O(n log n)</strong> để so sánh với <strong>HeapSort</strong> &mdash; cả hai đều đạt độ phức tạp O(n log n) khi sắp xếp."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-9-1",
              number: "9.1",
              title: "HeapSort — ý tưởng chung",
              parts: [
                {
                  id: "dsa-b10-part-9-1-heapsort-idea",
                  label: "Ý TƯỞNG HEAPSORT",
                  title: "Quy trình sắp xếp HeapSort 2 giai đoạn",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Có max heap rồi thì sort được: chỉ cần gọi <code>ExtractMax()</code> n lần.",
                        "Nếu chưa có max heap &rarr; <strong>build một cái!</strong>"
                      ]
                    },
                    {
                      type: "component",
                      component: "BuildHeapSlowVsPipelineArena"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-9-2",
              number: "9.2",
              title: "BuildHeap phiên bản chậm — O(n log n)",
              parts: [
                {
                  id: "dsa-b10-part-9-2-buildheap-slow",
                  label: "BUILDHEAP CHẬM",
                  title: "Dựng Heap ngây thơ bằng n lần chèn Insert(v)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Ý tưởng: chèn (Insert) từng phần tử một, y hệt insert bình thường vào heap.",
                        "Rõ ràng chạy trong <strong>O(n log n)</strong>.",
                        "&rarr; Câu hỏi đặt ra: <strong>Có thể làm nhanh hơn không?</strong>"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-9-3",
              number: "9.3",
              title: "BuildHeap phiên bản nhanh — O(n)",
              parts: [
                {
                  id: "dsa-b10-part-9-3-buildheap-fast",
                  label: "BUILDHEAP NHANH",
                  title: "Chiến lược Bottom-Up duyệt từ ⌊n/2⌋ về 1",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Ý tưởng: copy toàn bộ mảng vào A trước (chưa cần đúng heap property), sau đó chỉ gọi <strong>ShiftDown</strong> một cách chiến lược, bắt đầu từ node <strong>không phải leaf cuối cùng</strong> đi ngược lên root.",
                        "Chỉ cần ShiftDown các <strong>internal node</strong> (từ <code>parent(heapsize)</code> xuống 1), vì các leaf tự động thỏa heap property (không có con để so sánh)."
                      ]
                    },
                    {
                      type: "component",
                      component: "BuildHeapFastO1NStudio"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-9-4",
              number: "9.4",
              title: "Phân tích tại sao BuildHeap nhanh (Faster) là O(n)",
              parts: [
                {
                  id: "dsa-b10-part-9-4-math-proof",
                  label: "CHỨNG MINH TOÁN HỌC",
                  title: "Phân tích chuỗi vô hạn chứng minh tổng chi phí O(n)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Nhắc lại: height của complete binary tree kích thước n là O(log n).",
                        "Nhắc lại: chi phí chạy ShiftDown(i) tại 1 node là O(height của node đó).",
                        "Số node ở height h trong cây nhị phân đầy (full binary tree): khoảng n / 2^(h+1).",
                        "Tổng chi phí BuildHeap: &Sigma; (h=0 &rarr; floor(lg n)) [n / 2^(h+1)] * O(h) = O(n * &Sigma; h / 2^h) = <strong>O(2n) = O(n)</strong>.",
                        "Áp dụng công thức chuỗi: &Sigma; (k=0 &rarr; &infin;) k * x^k = x / (1-x)^2, với x = 1/2 &rarr; kết quả = 2.",
                        "Minh họa bằng số: 0 + 0.5 + 0.5 + 0.375 + 0.25 + 0.15625 + 0.09375 + ... &lt; 2.",
                        "<strong>Kết luận:</strong> Cost của BuildHeap() (phiên bản nhanh) = <strong>O(2n) = O(n)</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "BuildHeapMathProofVisualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b10-sub-9-5",
              number: "9.5",
              title: "Phân tích lại HeapSort với BuildHeap O(n)",
              parts: [
                {
                  id: "dsa-b10-part-9-5-heapsort-analysis",
                  label: "PHÂN TÍCH HEAPSORT",
                  title: "Đối đầu HeapSort vs MergeSort: In-place & Cache Locality",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "HeapSort <strong>không cần thêm mảng phụ</strong> như Merge Sort &rarr; gọi là <strong>'in-place sorting'</strong> &rarr; tiết kiệm bộ nhớ hơn (memory friendly).",
                        "Nhưng HeapSort <strong>không 'cache friendly'</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "HeapSortVsMergeSortArena"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "• BuildHeap kiểu chèn từng phần tử (Insert n lần) = <strong>O(n log n)</strong>.<br/>• BuildHeap kiểu ShiftDown từ giữa mảng lên = <strong>O(n)</strong> (nhanh hơn hẳn) &mdash; đây là điểm hay bị hỏi thi.<br/>• HeapSort = BuildHeap (O(n)) + n lần ExtractMax (O(log n) mỗi lần) = <strong>O(n log n)</strong> tổng thể.<br/>• HeapSort: in-place (không cần mảng phụ) nhưng không cache-friendly."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b10-sec10",
          roman: "X",
          title: "Cài đặt Java (Java Implementation)",
          subsections: [
            {
              id: "dsa-b10-sub-10-1",
              number: "10.1",
              title: "Cấu trúc lớp Heap Java (OOP Heap Class)",
              parts: [
                {
                  id: "dsa-b10-part-10-1-java-oop",
                  label: "KIẾN TRÚC JAVA OOP",
                  title: "Thiết kế lớp Heap.java cho bài tập thực hành PS1",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Theo slide, cài đặt PriorityQueue ADT bằng <strong>Heap Class</strong> (file Java được cung cấp sẵn, dùng cho PS1), theo phong cách <strong>OOP</strong>, gồm các hàm: <code>ShiftUp(i)</code>, <code>Insert(v)</code>, <code>ShiftDown(i)</code>, <code>ExtractMax()</code>, <code>BuildHeapSlow(array)</code>, <code>BuildHeap(array)</code>, <code>HeapSort()</code>."
                      ]
                    },
                    {
                      type: "component",
                      component: "HeapJavaOopArchitectureCard"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "Slide chỉ liệt kê danh sách các hàm cần cài đặt theo OOP, không có code Java chi tiết trong bài này (file Java được cấp riêng)."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b10-sec11",
          roman: "SUMMARY",
          title: "Tổng kết chương & Bảng vàng Time Complexity",
          subsections: [
            {
              id: "dsa-b10-sub-11-1",
              number: "11.1",
              title: "Tổng kết chương (Summary) & Mini-Quiz Tốt Nghiệp",
              parts: [
                {
                  id: "dsa-b10-part-11-1-summary",
                  label: "TỔNG KẾT BÀI HỌC",
                  title: "Bảng Vàng Độ Phức Tạp & Mini-Quiz Tốt Nghiệp Bài 10",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Heap DS và ứng dụng của nó làm <strong>PriorityQueue</strong> hiệu quả.",
                        "Lưu heap dưới dạng <strong>compact array</strong> và các phép toán trên đó.",
                        "Luôn phải duy trì <strong>complete binary tree</strong> và <strong>heap property</strong> trong mọi phép toán!",
                        "Xây dựng heap từ tập số cho trước trong <strong>O(n)</strong>.",
                        "Ứng dụng đơn giản của Heap DS: <strong>O(n log n) HeapSort</strong>.",
                        "PriorityQueue sẽ được dùng tiếp trong phần 2 của CS2010."
                      ]
                    },
                    {
                      type: "component",
                      component: "HeapChapterFinalMasterMatrix"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dsa-b11",
      title: "Bài 11: The Foundations — Union-Find, Bitmask & Graph Basic",
      description: "Bộ ba kiến trúc nền tảng CS2010: Quản lý tập hợp rời rạc Union-Find Disjoint Sets (DSU) gần như O(1), Thao tác Bitmasking nén trạng thái siêu tốc, và Các cấu trúc biểu diễn đồ thị chuẩn mực (Adjacency Matrix, List, Edge List).",
      sections: [
        {
          id: "dsa-b11-sec0-hero",
          roman: "OVERVIEW",
          title: "Tổng Quan & Bộ Ba Vũ Khí Nền Tảng",
          subsections: [
            {
              id: "dsa-b11-sub-0-hero",
              number: "0.0",
              title: "Tựa Đề & Live Foundations Workbench",
              parts: [
                {
                  id: "dsa-b11-part-0-banner",
                  label: "TỔNG QUAN NỀN TẢNG",
                  title: "Phòng Thí Nghiệm Union-Find, Bitmask & Graph Basics",
                  content: [
                    {
                      type: "component",
                      component: "DsaUnionFindHeroBanner"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b11-sec1",
          roman: "I",
          title: "Union-Find Disjoint Sets (UFDS)",
          subsections: [
            {
              id: "dsa-b11-sub-1-1",
              number: "1.1",
              title: "Khái niệm",
              parts: [
                {
                  id: "dsa-b11-part-1-1-concept",
                  label: "KHÁI NIỆM UFDS",
                  title: "Tập Hợp Rời Nhau & Mô Hình Rừng Cây",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Cho trước nhiều <strong>tập rời nhau (disjoint sets)</strong> ban đầu.",
                        "2 thao tác chính:",
                        "• <strong>Union:</strong> hợp nhất (union) hai tập rời khi cần.",
                        "• <strong>Find:</strong> tìm xem một phần tử (item) thuộc tập nào.",
                        "Cách dùng phổ biến nhất: kiểm tra xem <strong>2 item có thuộc cùng một tập hay không</strong>.",
                        "<strong>Ý tưởng chính:</strong>",
                        "• Mỗi tập (set) được mô hình hóa như một <strong>cây (tree)</strong>.",
                        "• Vậy một tập hợp các disjoint sets tạo thành một <strong>rừng cây (forest of trees)</strong>.",
                        "• Mỗi tập được đại diện bởi <strong>representative item</strong> &mdash; <strong>gốc (root)</strong> của cây tương ứng của tập đó."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-1-2",
              number: "1.2",
              title: "Ví dụ với 3 tập rời nhau",
              parts: [
                {
                  id: "dsa-b11-part-1-2-example",
                  label: "VÍ DỤ 3 TẬP",
                  title: "Mô hình 3 cây tập hợp rời nhau",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "3 disjoint sets (cây) trong ví dụ:",
                        "1. Tập chứa <code>{0, 1, 2, 3, 4}</code> &mdash; representative item = <strong>vertex 3</strong> (in đậm + gạch dưới), là gốc của cây con này.",
                        "2. Tập chứa <code>{5, 6, 7}</code>.",
                        "3. Tập chứa <code>{8}</code>."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-1-3",
              number: "1.3",
              title: "Cách biểu diễn (Representation) UFDS",
              parts: [
                {
                  id: "dsa-b11-part-1-3-repr",
                  label: "BIỂU DIỄN UFDS",
                  title: "Mảng parent p[i] & Điều kiện Root",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Dùng mảng <code>p</code> để ghi lại rừng cây này:",
                        "• <code>p[i]</code> lưu <strong>parent</strong> của item <code>i</code>.",
                        "• Nếu <code>p[i] == i</code> &rarr; <code>i</code> là <strong>root</strong>, đồng thời là <strong>representative item</strong> của tập đó.",
                        "• Ví dụ: <code>p = [2, 3, 3, 3, 3, 6, 6, 6, 8]</code> cho các item <code>0, 1, 2, 3, 4, 5, 6, 7, 8</code>."
                      ]
                    },
                    {
                      type: "component",
                      component: "UfdsForestRepresentationSandbox"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-1-4",
              number: "1.4",
              title: "Thao tác FindSet",
              parts: [
                {
                  id: "dsa-b11-part-1-4-findset",
                  label: "THAO TÁC FINDSET",
                  title: "Đệ quy tìm Root & Nén đường đi (Path Compression)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>a) Cách hoạt động:</strong> Với mỗi item <code>i</code>, tìm representative item của tập chứa <code>i</code> bằng cách <strong>đệ quy</strong> thăm <code>p[i]</code> cho đến khi <code>p[i] == i</code>. Sau đó thực hiện <strong>path compression (nén đường đi)</strong> để các lần find sau này (rất) nhanh, tức <strong>O(1)</strong>.",
                        "<strong>b) Ví dụ:</strong> <code>findSet(0)</code>."
                      ]
                    },
                    {
                      type: "component",
                      component: "UfdsFindSetCompressionStudio"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>c) Code Java:</strong>"
                      ]
                    },
                    {
                      type: "component",
                      component: "UfdsJavaVectorPitfallCard"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Lưu ý quan trọng",
                      text: "Phải <strong>set giá trị mới của p[i] trước</strong> rồi mới return, vì method <code>set()</code> của Java <code>Vector</code> trả về <strong>phần tử cũ</strong> tại vị trí đó &rarr; Vì vậy <strong>không thể</strong> viết: <code>return p.set(i, findSet(p.get(i)));</code>"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-1-5",
              number: "1.5",
              title: "Thao tác UnionSet",
              parts: [
                {
                  id: "dsa-b11-part-1-5-unionset",
                  label: "THAO TÁC UNIONSET",
                  title: "Heuristic Union-by-Rank & Hoạt Họa Chuỗi Slide",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>a) Cách hoạt động:</strong> Nếu 2 item A và B hiện đang thuộc 2 tập khác nhau, hợp nhất (union) chúng bằng cách: Đặt representative item của cây <strong>cao hơn (higher)</strong> làm representative item mới của tập hợp nhất.",
                        "<strong>b) Ví dụ:</strong> <code>unionSet(5, 8)</code>.",
                        "<strong>c) Heuristic 'Union-by-Rank':</strong>",
                        "• Giúp cây kết quả sau khi hợp nhất <strong>ngắn hơn (shorter)</strong> (nếu làm ngược lại &rarr; cây kết quả sẽ cao hơn &mdash; không mong muốn).",
                        "• Nếu 2 cây <strong>cao bằng nhau</strong> &rarr; không dùng heuristic này (tùy chọn gắn vào cây nào cũng được, và rank tăng thêm 1).",
                        "• Dùng thêm mảng <code>rank[i]</code> để lưu <strong>cận trên (upper bound)</strong> của chiều cao (sub)tree gốc tại <code>i</code>. Đây chỉ là <strong>cận trên</strong>, vì path compression có thể làm (sub)tree thấp hơn upper bound này, và ta <strong>không muốn tốn công</strong> để duy trì tính chính xác tuyệt đối của <code>rank[i]</code>."
                      ]
                    },
                    {
                      type: "component",
                      component: "UfdsUnionByRankWorkbench"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>d) Code — Constructor & unionSet()</strong>",
                        "• <code>unionSet(0, 1)</code> rồi <code>unionSet(2, 3)</code> &rarr; <code>unionSet(4, 3)</code> &rarr; <code>unionSet(0, 3)</code>.",
                        "<strong>e) Code — isSameSet():</strong> <code>public Boolean isSameSet(int i, int j) { return findSet(i) == findSet(j); }</code>",
                        "• Ví dụ: <code>isSameSet(0, 4)</code> &mdash; nếu representative item của tập chứa 0 và của tập chứa 4 khác nhau &rarr; 0 và 4 <strong>không</strong> cùng tập."
                      ]
                    },
                    {
                      type: "component",
                      component: "UfdsSlideSequenceAnimator"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-1-6",
              number: "1.6",
              title: "Độ phức tạp (Time Complexity)",
              parts: [
                {
                  id: "dsa-b11-part-1-6-complexity",
                  label: "ĐỘ PHỨC TẠP",
                  title: "Hàm Ngược Ackermann O(α(V)) & Điểm Cốt Lõi Cần Nhớ",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Nếu UFDS được cài đặt với <strong>cả 2</strong> heuristic 'union-by-rank' <strong>và</strong> 'path-compression':",
                        "• Các thao tác UFDS chạy trong <strong>O(&alpha;(V))</strong>.",
                        "• <code>&alpha;(V)</code> gọi là <strong>inverse Ackermann function</strong>.",
                        "• Hàm này tăng <strong>rất chậm</strong> &mdash; có thể xem là <strong>'hằng số'</strong>, tức <strong>O(1)</strong> với các giá trị V thực tế (&lt; 1M). (Phần chứng minh khá khó, không thuộc phạm vi môn học ở mức này)."
                      ]
                    },
                    {
                      type: "component",
                      component: "UfdsInverseAckermannGauge"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "• UFDS mô hình mỗi tập như 1 <strong>cây</strong>; <strong>representative item = root</strong>.<br/>• Mảng <code>p[i]</code>: parent của <code>i</code>; <code>p[i] == i</code> &rarr; <code>i</code> là root/representative.<br/>• <strong>FindSet:</strong> đệ quy theo <code>p[i]</code> đến root + <strong>path compression</strong>.<br/>• <strong>UnionSet:</strong> gắn root của cây thấp hơn vào root của cây cao hơn (<strong>union-by-rank</strong>), nếu bằng nhau thì rank tăng thêm 1.<br/>• Time complexity: <strong>O(&alpha;(V)) &approx; O(1)</strong> thực tế, khi có cả union-by-rank + path compression.<br/>• Trong code Java, <strong>không</strong> viết <code>return p.set(i, findSet(p.get(i)))</code> vì <code>Vector.set()</code> trả về giá trị <strong>cũ</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b11-sec2",
          roman: "II",
          title: "Bitmask Data Structure",
          subsections: [
            {
              id: "dsa-b11-sub-2-1",
              number: "2.1",
              title: "Khái niệm",
              parts: [
                {
                  id: "dsa-b11-part-2-1-concept",
                  label: "KHÁI NIỆM BITMASK",
                  title: "Biểu Diễn Tập Boolean Nhẹ Bằng Số Nguyên Nhị Phân",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Một số nguyên (integer) được lưu ở dạng <strong>nhị phân (binary)</strong> trong bộ nhớ máy tính:",
                        "• <code>int x = 7₁₀</code> thực chất là <code>111₂</code>",
                        "• <code>int y = 12₁₀</code> là <code>1100₂</code>",
                        "• <code>int z = 83₁₀</code> là <code>1010011₂</code>",
                        "Có thể dùng dãy các bit 0/1 này để biểu diễn một <strong>tập Boolean nhỏ, nhẹ (lightweight/small set of Booleans)</strong> rất hiệu quả.",
                        "• Số nguyên <strong>N-bit</strong> có thể biểu diễn <strong>N đối tượng Boolean</strong>.",
                        "• Về lý thuyết, tối đa <strong>32 đối tượng Boolean</strong> cho 1 số nguyên 32-bit.",
                        "• Nếu bit thứ <strong>i = 1</strong> &rarr; object <code>i</code> <strong>có trong tập / active / used</strong>.",
                        "• Ngược lại (bit = 0) &rarr; object <code>i</code> <strong>không có trong tập / not active / not used</strong>."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-2-2",
              number: "2.2",
              title: "Các phép toán bit (Bit Operations)",
              parts: [
                {
                  id: "dsa-b11-part-2-2-operations",
                  label: "CÁC PHÉP TOÁN BIT",
                  title: "Kiểm Tra Bit, Bật Bit & Bật Tất Cả n Bits",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>a) Kiểm tra bit i bật hay tắt:</strong> <code>x & (1 << i)</code>",
                        "• Ví dụ 1: <code>x = 25₁₀ (11001₂)</code>, kiểm tra bit <code>i = 2</code> (tính từ phải, đánh số từ 0):<br/><code>x & (1 << 2) = 25₁₀ & 4₁₀ = 11001₂ & 00100₂ = 00000₂ = 0</code> &rarr; Kết quả = 0 &rarr; bit <code>i = 2</code> (từ phải) <strong>tắt (off)</strong>.",
                        "• Ví dụ 2: <code>x = 25₁₀ (11001₂)</code>, kiểm tra bit <code>i = 3</code>:<br/><code>x & (1 << 3) = 25₁₀ & 8₁₀ = 11001₂ & 01000₂ = 01000₂ = 8₁₀</code> &rarr; Kết quả = 8₁₀ &rarr; bit <code>i = 3</code> (từ phải) <strong>bật (on)</strong>.",
                        "<strong>b) Bật (turn on) bit i của x:</strong> <code>x = x | (1 << i)</code>",
                        "• Ví dụ 1: <code>x = 25₁₀ (11001₂)</code>, bật bit <code>i = 2</code>:<br/><code>x = x | (1 << 2) = 25₁₀ | 4₁₀ = 11001₂ | 00100₂ = 11101₂ = 29₁₀</code> &rarr; bit 2 (từ phải) giờ đã <strong>bật</strong>.",
                        "• Ví dụ 2: <code>x = 25₁₀ (11001₂)</code>, bật bit <code>i = 3</code>:<br/><code>x = x | (1 << 3) = 25₁₀ | 8₁₀ = 11001₂ | 01000₂ = 11001₂ = 25₁₀</code> &rarr; <strong>không đổi</strong> vì bit 3 (từ phải) <strong>đã bật sẵn</strong>.",
                        "<strong>c) Bật tất cả bit của tập Boolean kích thước n:</strong> <code>x = (1 << n) - 1</code>",
                        "• Ví dụ: <code>n = 4</code> &rarr; <code>1 << 4 = 16₁₀ (10000₂)</code> &rarr; <code>x = (1 << 4) - 1 = 15₁₀ (1111₂)</code> &rarr; Cả 4 bit (n=4) đều được bật."
                      ]
                    },
                    {
                      type: "component",
                      component: "BitmaskOperationsLiveSandbox"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Bitmask)",
                      text: "• N-bit integer biểu diễn được N Boolean; 32-bit &rarr; tối đa 32 phần tử.<br/>• <strong>Check bit i:</strong> <code>x & (1 << i)</code> (khác 0 &rarr; bật; = 0 &rarr; tắt).<br/>• <strong>Turn on bit i:</strong> <code>x = x | (1 << i)</code>.<br/>• <strong>Turn on tất cả n bit:</strong> <code>x = (1 << n) - 1</code>.<br/>• Slide còn nhắc tới (không đi sâu, tự khám phá qua VisuAlgo): <strong>Toggle / Clear / Least Significant bit</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b11-sec3",
          roman: "III",
          title: "Giới thiệu về Graph (Đồ thị)",
          subsections: [
            {
              id: "dsa-b11-sub-3-1",
              number: "3.1",
              title: "Thuật ngữ Graph (1) — mở rộng từ (Binary) Tree",
              parts: [
                {
                  id: "dsa-b11-part-3-1-terminology1",
                  label: "MỞ RỘNG TỪ CÂY",
                  title: "Kế Thừa Từ Tree & Các Khái Niệm Mất Đi",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Các khái niệm kế thừa từ Tree: <strong>Vertex (đỉnh), Edge (cạnh), Direction of Edge (hướng cạnh), Weight of Edge (trọng số cạnh)</strong>.",
                        "Nhưng trong graph tổng quát, <strong>không có</strong> khái niệm: Root (gốc), Parent/Child (cha/con), Ancestor/Descendant (tổ tiên/hậu duệ)."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-3-2",
              number: "3.2",
              title: "Graph là gì?",
              parts: [
                {
                  id: "dsa-b11-part-3-2-whatisgraph",
                  label: "ĐỊNH NGHĨA GRAPH",
                  title: "Simple Graph, Cạnh Có Hướng & Đỉnh Kề Nhau",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "(Simple) Graph = tập hợp các <strong>vertices (đỉnh)</strong>, trong đó một số cặp đỉnh trong <code>[0 .. NC2]</code> cặp được nối bởi <strong>edges (cạnh)</strong>.",
                        "Slide <strong>bỏ qua 'multi graph'</strong> (trường hợp có nhiều hơn 1 cạnh giữa cùng một cặp đỉnh).",
                        "Một vertex thường được đánh nhãn (labeled) từ <strong>0 đến V-1</strong>.",
                        "Có 2 loại cạnh:",
                        "• <strong>Directed Edge (cạnh có hướng)</strong>.",
                        "• <strong>Undirected Edge (cạnh vô hướng)</strong> &mdash; nếu có cạnh vô hướng nối đỉnh 0 và đỉnh 3 &rarr; gọi đỉnh 0 và đỉnh 3 là <strong>'adjacent' (kề nhau)</strong>.",
                        "• <strong>Weighted Undirected Edge</strong> = cạnh vô hướng có trọng số."
                      ]
                    },
                    {
                      type: "component",
                      component: "GraphTreeInheritanceBridgeStudio"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-3-3",
              number: "3.3",
              title: "Thuật ngữ Graph (2)",
              parts: [
                {
                  id: "dsa-b11-part-3-3-terminology2",
                  label: "MẬT ĐỘ & BẬC",
                  title: "Sparse vs Dense, Complete Graph & In/Out Degree",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Sparse / Dense (thưa/dày):</strong>",
                        "• Sparse = <strong>không có nhiều</strong> cạnh.",
                        "• Dense = <strong>nhiều</strong> cạnh.",
                        "• Không có quy định chính xác 'bao nhiêu là nhiều'.",
                        "<strong>Complete Graph (đồ thị đầy đủ):</strong>",
                        "• Simple graph với <strong>N vertices</strong> và <strong>NC2 edges</strong> (tức mọi cặp đỉnh đều có cạnh nối).",
                        "• Ví dụ: Complete Graph 7 vertices &rarr; 7C2 = <strong>21 edges</strong>.",
                        "<strong>In/Out Degree của một vertex:</strong>",
                        "• Số cạnh đi vào/đi ra (in/out edges) từ một vertex.",
                        "• Ví dụ: in/out degree của vertex 5 = 3."
                      ]
                    },
                    {
                      type: "component",
                      component: "GraphSparseDenseDegreeWorkbench"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-3-4",
              number: "3.4",
              title: "Thuật ngữ Graph (3)",
              parts: [
                {
                  id: "dsa-b11-part-3-4-terminology3",
                  label: "ĐƯỜNG ĐI & CHU TRÌNH",
                  title: "Simple Path, Simple Cycle & Mạng Giao Thông MRT/LRT",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>(Simple) Path (đường đi đơn):</strong> Dãy các vertex kề nhau liên tiếp. 'Simple' nghĩa là <strong>không lặp lại vertex</strong> nào.",
                        "<strong>Path Length/Cost (độ dài/chi phí đường đi):</strong>",
                        "• Đồ thị không trọng số (unweighted): thường tính bằng <strong>số cạnh</strong> trong đường đi.",
                        "• Đồ thị có trọng số (weighted): thường tính bằng <strong>tổng trọng số</strong> các cạnh trong đường đi.",
                        "<strong>(Simple) Cycle (chu trình đơn):</strong> Path bắt đầu và kết thúc tại <strong>cùng một vertex</strong>. Không lặp lại vertex nào, <strong>ngoại trừ</strong> đỉnh đầu/cuối.",
                        "<strong>Ví dụ minh họa (Transportation Network):</strong>",
                        "• Simple cycle: Sengkang LRT, west loop.",
                        "• Simple path: từ Clementi đến Outram Park MRT với length = 7 (tính theo số 'hops')."
                      ]
                    },
                    {
                      type: "component",
                      component: "GraphTransitPathCycleStudio"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-3-5",
              number: "3.5",
              title: "Ứng dụng thực tế của Graph (theo slide)",
              parts: [
                {
                  id: "dsa-b11-part-3-5-applications",
                  label: "ỨNG DỤNG THỰC TẾ",
                  title: "5 Trụ Cột Ứng Dụng Trong Xã Hội & Công Nghệ",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>Social Network</strong> (mạng xã hội).",
                        "• <strong>Transportation Network</strong> (mạng giao thông).",
                        "• <strong>Internet / Computer Networks</strong> (mạng máy tính).",
                        "• <strong>Communication Network</strong> (mạng truyền thông).",
                        "• <strong>Optimization</strong> (tối ưu hóa): Euler Path, PageRank, Movie Rating."
                      ]
                    },
                    {
                      type: "component",
                      component: "GraphRealWorldApplicationsHub"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-3-6",
              number: "3.6",
              title: "Thuật ngữ Graph (4)",
              parts: [
                {
                  id: "dsa-b11-part-3-6-terminology4",
                  label: "LIÊN THÔNG & REACHABILITY",
                  title: "Connected Components, Tính Đến Được & Sub Graph",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Component (thành phần liên thông):</strong> Một nhóm các vertex trong đồ thị vô hướng có thể <strong>thăm lẫn nhau</strong> thông qua một đường đi (path) nào đó.",
                        "<strong>Connected graph (đồ thị liên thông):</strong> Graph chỉ có <strong>đúng 1 component</strong>.",
                        "<strong>Disconnected graph:</strong> Graph có <strong>> 1 component</strong>.",
                        "<strong>Reachable / Unreachable Vertex (đỉnh có thể/không thể đến được):</strong> Ví dụ: vertices 1-2-3-4 <strong>reachable</strong> từ vertex 0; vertices 5, 6-7-8 <strong>unreachable</strong> từ vertex 0.",
                        "<strong>Sub Graph (đồ thị con):</strong> Tập con các vertex (và các edge tương ứng) của đồ thị gốc. Ví dụ: <code>{7-6-8}</code> là một sub graph của đồ thị.",
                        "<strong>Ví dụ theo slide:</strong> đồ thị có <strong>3 components</strong> &rarr; là đồ thị <strong>disconnected</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "GraphComponentsReachabilityLab"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-3-7",
              number: "3.7",
              title: "Thuật ngữ Graph (5)",
              parts: [
                {
                  id: "dsa-b11-part-3-7-terminology5",
                  label: "ĐỒ THỊ ĐẶC BIỆT & TỔNG KẾT",
                  title: "DAG, Tree, Bipartite Graph & Flashcards Cốt Lõi",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Directed Acyclic Graph (DAG):</strong> Đồ thị có hướng <strong>không có chu trình (no cycle)</strong>.",
                        "<strong>Tree (cây):</strong> Đồ thị liên thông (connected graph), số cạnh <strong>E = V - 1</strong>, có <strong>duy nhất một đường đi</strong> giữa bất kỳ cặp đỉnh nào.",
                        "<strong>Bipartite Graph (đồ thị hai phía):</strong> Nếu có thể chia (partition) các vertex thành <strong>2 tập</strong> sao cho <strong>không có cạnh</strong> nào nối 2 đỉnh cùng nằm trong 1 tập.",
                        "<strong>Ví dụ trong slide:</strong> Out degree của vertex 0 = 2; In degree của vertex 2 = 2."
                      ]
                    },
                    {
                      type: "component",
                      component: "GraphSpecialTopologiesMasterCard"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "• Graph <strong>kế thừa</strong> Vertex/Edge/Direction/Weight từ Tree, nhưng <strong>không</strong> có Root/Parent-Child/Ancestor-Descendant.<br/>• <strong>Complete Graph:</strong> N vertices, NC2 edges.<br/>• <strong>Simple Path:</strong> không lặp vertex; <strong>Simple Cycle:</strong> path khép kín, không lặp vertex trừ đầu-cuối.<br/>• <strong>Connected:</strong> 1 component; <strong>Disconnected:</strong> >1 component.<br/>• <strong>DAG:</strong> directed + no cycle; <strong>Tree:</strong> connected + E = V - 1 + đường đi duy nhất giữa mọi cặp đỉnh; <strong>Bipartite:</strong> chia được 2 tập không có cạnh nội bộ."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b11-sec4",
          roman: "IV",
          title: "Ba loại Graph Data Structures",
          subsections: [
            {
              id: "dsa-b11-sub-4-1",
              number: "4.1",
              title: "Adjacency Matrix (Ma trận kề)",
              parts: [
                {
                  id: "dsa-b11-part-4-1-adjmatrix",
                  label: "MA TRẬN KỀ",
                  title: "Mảng 2 Chiều AdjMatrix[V][V] & Độ Phức Tạp O(V²)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Khái niệm:</strong>",
                        "• Định dạng: mảng 2 chiều <code>AdjMatrix</code>.",
                        "• Ô <code>AdjMatrix[i][j]</code> chứa giá trị <strong>1</strong> nếu tồn tại cạnh $ij$ trong $G$, ngược lại chứa <strong>0</strong>.",
                        "• Với đồ thị có trọng số (weighted graph): <code>AdjMatrix[i][j]</code> chứa <strong>trọng số (weight)</strong> của cạnh $ij$, không chỉ là giá trị nhị phân {1, 0}."
                      ]
                    },
                    {
                      type: "component",
                      component: "GraphAdjMatrixVisualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-4-2",
              number: "4.2",
              title: "Adjacency List (Danh sách kề)",
              parts: [
                {
                  id: "dsa-b11-part-4-2-adjlist",
                  label: "DANH SÁCH KỀ",
                  title: "Mảng Vector<Vector<IntegerPair>> & Không Gian O(V + E)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Khái niệm:</strong>",
                        "• Định dạng: mảng <code>AdjList</code> gồm $V$ danh sách (list), mỗi danh sách cho 1 vertex.",
                        "• Với mỗi vertex $i$, <code>AdjList[i]</code> lưu danh sách các <strong>hàng xóm (neighbors)</strong> của $i$.",
                        "• Với weighted graph: lưu các cặp <strong>(neighbor, weight)</strong>.",
                        "• Với unweighted graph: có thể dùng cùng chiến lược (neighbor, weight), nhưng weight đặt là <strong>0 (unused)</strong> hoặc <strong>1 (unit weight)</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "GraphAdjListStudio"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-4-3",
              number: "4.3",
              title: "Edge List (Danh sách cạnh)",
              parts: [
                {
                  id: "dsa-b11-part-4-3-edgelist",
                  label: "DANH SÁCH CẠNH",
                  title: "Mảng E Cạnh & Bộ Ba Số Nguyên {w, u, v}",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Khái niệm:</strong>",
                        "• Định dạng: mảng <code>EdgeList</code> gồm $E$ cạnh (edges).",
                        "• Với mỗi cạnh $i$, <code>EdgeList[i]</code> lưu một <strong>bộ ba số nguyên (integer triple)</strong>: <code>{w(u, v), u, v}</code>.",
                        "• Với unweighted graph: weight có thể lưu là 0 (hoặc 1), hoặc đơn giản chỉ lưu một <strong>cặp (pair)</strong> số nguyên."
                      ]
                    },
                    {
                      type: "component",
                      component: "GraphEdgeListWorkbench"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-4-4",
              number: "4.4",
              title: "So sánh nhanh 3 Graph Data Structures",
              parts: [
                {
                  id: "dsa-b11-part-4-4-comparison",
                  label: "SO SÁNH 3 CẤU TRÚC",
                  title: "Bảng Đối Chiếu Không Gian Bộ Nhớ & Thời Gian Thao Tác",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Bảng so sánh Không gian bộ nhớ (Space Complexity):</strong>",
                        "• Adjacency Matrix: <strong>O(V²)</strong>",
                        "• Adjacency List: <strong>O(V+E)</strong>",
                        "• Edge List: <strong>O(E)</strong>",
                        "<em>Ghi chú của giảng viên (PS trong slide):</em> đây là cách implement của tác giả, <strong>có thể có cách khác</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "GraphRepresentationsTriDuelArena"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-4-5",
              number: "4.5",
              title: "Java Implementation chi tiết — class IntegerPair",
              parts: [
                {
                  id: "dsa-b11-part-4-5-integerpair",
                  label: "JAVA INTEGERPAIR",
                  title: "Kiến Trúc Lớp Đối Tượng & Cạm Bẫy So Sánh Tham Chiếu",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Lớp IntegerPair:</strong> cài đặt interface <code>Comparable<IntegerPair></code> để phục vụ sắp xếp.",
                        "<strong>📌 Lưu ý quan trọng:</strong> so sánh <code>Integer</code> phải dùng <code>.equals()</code>, <strong>không</strong> dùng <code>!=</code> (vì <code>!=</code> so sánh reference/địa chỉ bộ nhớ, không so sánh giá trị)."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-4-6",
              number: "4.6",
              title: "Vì sao chọn Vector<Vector<IntegerPair>> cho AdjList?",
              parts: [
                {
                  id: "dsa-b11-part-4-6-whyvector",
                  label: "TẠI SAO CHỌN ADJLIST",
                  title: "Bộ 3 Lý Do Cốt Lõi Chọn Vector Lồng Nhau",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Trong CS2010, <strong>AdjList được dùng cho hầu hết các graph problem</strong>.",
                        "• <strong>Vì sao dùng IntegerPair?:</strong> Cần lưu cặp thông tin cho mỗi cạnh: <strong>(neighbor number, weight)</strong>; weight = 0/unused với unweighted graph.",
                        "• <strong>Vì sao dùng Vector của IntegerPair?:</strong> Nhờ tính năng <strong>tự resize (auto-resize)</strong> của Vector: nếu vertex có $k$ neighbor, chỉ cần <code>add</code> $k$ lần vào Vector rỗng ban đầu. Có thể thay bằng <code>List</code> hoặc <code>ArrayList</code> của Java nếu muốn.",
                        "• <strong>Vì sao dùng Vector của Vector của IntegerPair?:</strong> Nhờ tính năng <strong>đánh chỉ số (indexing)</strong> của Vector: muốn liệt kê (enumerate) các neighbor của vertex $u$ &rarr; dùng <code>AdjList.get(u)</code> để truy cập đúng Vector IntegerPair tương ứng."
                      ]
                    },
                    {
                      type: "component",
                      component: "GraphJavaIntegerPairCard"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ",
                      text: "• 3 cấu trúc lưu đồ thị: <strong>Adjacency Matrix O(V²)</strong>, <strong>Adjacency List O(V+E)</strong>, <strong>Edge List O(E)</strong>.<br/>• <strong>AdjList là lựa chọn chính dùng trong môn học cho hầu hết bài toán graph</strong>.<br/>• So sánh <code>Integer</code> (kiểu Object) phải dùng <code>.equals()</code>, không dùng <code>!=</code>/<code>==</code> (so sánh reference).<br/>• Cấu trúc <code>Vector<Vector<IntegerPair>></code>: tầng ngoài để <strong>index theo vertex</strong>, tầng trong để <strong>auto-resize danh sách neighbor</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b11-sec5",
          roman: "V",
          title: "Summary (Tổng kết bài học)",
          subsections: [
            {
              id: "dsa-b11-sub-5-1",
              number: "5.1",
              title: "Roadmap Liên Kết Các Học Phần CS2010",
              parts: [
                {
                  id: "dsa-b11-part-5-1-roadmap",
                  label: "ROADMAP CS2010",
                  title: "Bản Đồ Ứng Dụng UFDS, Bitmask & Graph",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>Union-Find Disjoint Sets (UFDS):</strong> sẽ dùng lại ở <strong>Week 07</strong> (bài MST).",
                        "• <strong>Bitmask Data Structure:</strong> sẽ dùng lại ở <strong>Week 11</strong> (bài TSP).",
                        "• <strong>Graph terminologies + lý do phải học Graph:</strong> dùng cho <strong>Week 06–13</strong>.",
                        "• <strong>Cách lưu trữ thông tin đồ thị trong bộ nhớ máy tính:</strong> 3 cấu trúc: Adjacency Matrix, Adjacency List, Edge List."
                      ]
                    },
                    {
                      type: "component",
                      component: "GraphCs2010CurriculumRoadmap"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b11-sub-5-2",
              number: "5.2",
              title: "Tổng Kết Toàn Bộ Bài 11 & Mini-Quiz Tốt Nghiệp",
              parts: [
                {
                  id: "dsa-b11-part-5-2-finalquiz",
                  label: "TỔNG KẾT & QUIZ",
                  title: "4 Trụ Cột Nền Tảng & Bài Trắc Nghiệm Tốt Nghiệp",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>📌 Cần nhớ tổng quát cả bài:</strong>",
                        "• <strong>UFDS:</strong> cây đại diện tập hợp, root = representative; FindSet dùng path compression; UnionSet dùng union-by-rank; độ phức tạp <strong>O(&alpha;(V)) &approx; O(1)</strong>.",
                        "• <strong>Bitmask:</strong> dùng số nguyên nhị phân biểu diễn tập Boolean; check bit <code>x & (1<<i)</code>; turn on bit <code>x = x | (1<<i)</code>; turn on n bit đầu <code>x = (1<<n) - 1</code>.",
                        "• <strong>Graph:</strong> không có Root/Parent-Child như Tree; các thuật ngữ quan trọng: Sparse/Dense, Complete Graph, Degree, Path/Cycle, Component, Connected/Disconnected, DAG, Tree, Bipartite.",
                        "• <strong>3 cách lưu đồ thị:</strong> Adjacency Matrix O(V²), Adjacency List O(V+E) (dùng chính trong môn học), Edge List O(E)."
                      ]
                    },
                    {
                      type: "component",
                      component: "Chapter11FinalMasterMatrix"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "🏆 Tốt Nghiệp Bài 11",
                      text: "Bạn đã nắm vững trọn vẹn bộ ba kiến trúc nền tảng CS2010 (DSU, Bitmask, Graph Basics). Đây là bệ phóng vững chắc để chinh phục toàn bộ các thuật toán đồ thị nâng cao (DFS, BFS, Kruskal, Dijkstra, Bellman-Ford, Max Flow)!"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dsa-b12",
      title: "Bài 12: Duyệt đồ thị (Graph Traversal) – BFS & DFS",
      description: "Hai thuật toán duyệt đồ thị kinh điển CS2010: BFS khám phá không gian trạng thái theo tầng sóng (Queue FIFO) tìm đường đi ngắn nhất unweighted O(V+E); DFS đâm sâu tận cùng (Call Stack LIFO) phát hiện chu trình, phân loại cạnh và Topological Sort O(V+E).",
      sections: [
        {
          id: "dsa-b12-sec0-hero",
          roman: "OVERVIEW",
          title: "Tổng Quan & Bộ Đôi Thuật Toán Duyệt Đồ Thị",
          subsections: [
            {
              id: "dsa-b12-sub-0-hero",
              number: "0.0",
              title: "Tựa Đề & Live Traversal Dual-Workbench",
              parts: [
                {
                  id: "dsa-b12-part-0-banner",
                  label: "TỔNG QUAN DUYỆT ĐỒ THỊ",
                  title: "Phòng Thí Nghiệm Breadth-First Search (BFS) & Depth-First Search (DFS)",
                  content: [
                    {
                      type: "component",
                      component: "DsaGraphTraversalHeroBanner"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b12-sec1",
          roman: "I",
          title: "Một số ứng dụng của cấu trúc dữ liệu đồ thị (Graph DS Applications)",
          subsections: [
            {
              id: "dsa-b12-sub-1-1",
              number: "1.1",
              title: "Đếm số đỉnh V (Counting V)",
              parts: [
                {
                  id: "dsa-b12-part-1-1-countv",
                  label: "ĐẾM SỐ ĐỈNH",
                  title: "Thao Tác Đếm Số Đỉnh V",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Rất đơn giản với cả <strong>Adjacency Matrix</strong> và <strong>Adjacency List</strong>: $V = \\text{số dòng (rows) của cấu trúc}$.",
                        "• Đôi khi giá trị này được lưu sẵn trong 1 biến riêng để <strong>không phải tính lại mỗi lần</strong> &rarr; độ phức tạp <strong>O(1)</strong>, đặc biệt hữu ích khi đồ thị không thay đổi."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b12-sub-1-2",
              number: "1.2",
              title: "Liệt kê các đỉnh kề của đỉnh v (Enumerating neighbors)",
              parts: [
                {
                  id: "dsa-b12-part-1-2-neighbors",
                  label: "LIỆT KÊ ĐỈNH KỀ",
                  title: "Thao Tác Quét Láng Giềng Kề Trực Tiếp",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>Adjacency Matrix:</strong> <strong>O(V)</strong> &mdash; quét <code>AdjMatrix[v][j]</code> với $j \\in [0..V-1]$.",
                        "• <strong>Adjacency List:</strong> <strong>O(k)</strong> &mdash; quét <code>AdjList[v]</code>, với $k$ là số đỉnh kề (neighbor) của $v$ (thuật toán <strong>output-sensitive</strong>).",
                        "• Đây là <strong>khác biệt quan trọng</strong> giữa AdjMatrix và AdjList, ảnh hưởng lớn đến hiệu năng của nhiều thuật toán đồ thị &rarr; <strong>cần nhớ</strong>!"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b12-sub-1-3",
              number: "1.3",
              title: "Đếm số cạnh E (Counting E)",
              parts: [
                {
                  id: "dsa-b12-part-1-3-counte",
                  label: "ĐẾM SỐ CẠNH",
                  title: "Thao Tác Đếm Tổng Số Cạnh E",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>Adjacency Matrix:</strong> <strong>O(V²)</strong> &mdash; đếm số phần tử khác 0 trong ma trận.",
                        "• <strong>Adjacency List:</strong> <strong>O(V+E)</strong> &mdash; cộng dồn độ dài của tất cả $V$ danh sách.",
                        "• Cũng có thể lưu sẵn trong 1 biến riêng &rarr; <strong>O(1)</strong>, nếu đồ thị không đổi."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b12-sub-1-4",
              number: "1.4",
              title: "Kiểm tra sự tồn tại của cạnh (u, v)",
              parts: [
                {
                  id: "dsa-b12-part-1-4-checkedge",
                  label: "KIỂM TRA CẠNH",
                  title: "Thao Tác Kiểm Tra Cạnh (u, v)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>Adjacency Matrix:</strong> <strong>O(1)</strong> &mdash; kiểm tra <code>AdjMatrix[u][v]</code> khác 0 hay không.",
                        "• <strong>Adjacency List:</strong> <strong>O(k)</strong> &mdash; kiểm tra xem <code>AdjList[u]</code> có chứa $v$ hay không."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b12-sub-1-5",
              number: "1.5",
              title: "Trade-off giữa Adjacency Matrix và Adjacency List",
              parts: [
                {
                  id: "dsa-b12-part-1-5-tradeoff",
                  label: "TRADE-OFF MA TRẬN VS DANH SÁCH",
                  title: "Bảng So Sánh Toàn Diện Ưu & Nhược Điểm",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Trade-off giữa Adjacency Matrix và Adjacency List:</strong>",
                        "• <strong>Adjacency Matrix:</strong>",
                        "&nbsp;&nbsp;+ <em>Ưu điểm (Pros):</em> Kiểm tra tồn tại cạnh $i-j$: <strong>O(1)</strong>; phù hợp với đồ thị dày (dense graph) / thuật toán Floyd-Warshall.",
                        "&nbsp;&nbsp;+ <em>Nhược điểm (Cons):</em> Liệt kê đỉnh kề: <strong>O(V)</strong>; không gian lưu trữ <strong>O(V²)</strong>.",
                        "• <strong>Adjacency List:</strong>",
                        "&nbsp;&nbsp;+ <em>Ưu điểm (Pros):</em> Liệt kê $k$ đỉnh kề: <strong>O(k)</strong>; phù hợp đồ thị thưa (sparse graph) / Dijkstra / DFS / BFS; không gian lưu trữ <strong>O(V+E)</strong>.",
                        "&nbsp;&nbsp;+ <em>Nhược điểm (Cons):</em> Kiểm tra tồn tại cạnh $i-j$: <strong>O(k)</strong>; có overhead nhỏ khi bảo trì danh sách (với đồ thị thưa)."
                      ]
                    },
                    {
                      type: "component",
                      component: "GraphOperationsBenchmarkStudio"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 1)",
                      text: "• <strong>AdjMatrix</strong> mạnh về <strong>kiểm tra cạnh O(1)</strong>, yếu về <strong>liệt kê đỉnh kề O(V)</strong> và <strong>tốn bộ nhớ O(V²)</strong>.<br/>• <strong>AdjList</strong> mạnh về <strong>liệt kê đỉnh kề O(k)</strong> và <strong>tiết kiệm bộ nhớ O(V+E)</strong>, yếu về <strong>kiểm tra cạnh O(k)</strong>.<br/>• <strong>AdjList phù hợp hơn cho DFS/BFS/Dijkstra</strong> vì các thuật toán này cần duyệt liên tục các đỉnh kề."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b12-sec2",
          roman: "II",
          title: "Thuật toán duyệt đồ thị (Graph Traversal Algorithms)",
          subsections: [
            {
              id: "dsa-b12-sub-2-1",
              number: "2.1",
              title: "Ôn lại: Duyệt cây nhị phân (Binary Tree Traversal)",
              parts: [
                {
                  id: "dsa-b12-part-2-1-tree",
                  label: "ÔN TẬP CÂY NHỊ PHÂN",
                  title: "3 Cách Duyệt Cây Nhị Phân & Level-Order Traversal",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Trong cây nhị phân, có 3 cách duyệt, xuất phát từ <strong>root</strong>:",
                        "• <strong>Preorder:</strong> <code>visit(u); pre(u->left); pre(u->right);</code>",
                        "• <strong>Inorder:</strong> <code>in(u->left); visit(u); in(u->right);</code>",
                        "• <strong>Postorder:</strong> <code>post(u->left); post(u->right); visit(u);</code>",
                        "• <strong>Lưu ý:</strong> \"level order\" (duyệt theo tầng) chính là <strong>BFS</strong> sẽ học ngay sau đây.",
                        "• <strong>Ví dụ:</strong> cây có root = 0, con trái = 1, con phải = 2, con của 2 là 3 và 4:",
                        "&nbsp;&nbsp;+ <code>pre</code> = 0, 1, 2, 3, 4",
                        "&nbsp;&nbsp;+ <code>in</code> = 1, 0, 3, 2, 4",
                        "&nbsp;&nbsp;+ <code>post</code> = 1, 3, 4, 2, 0"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b12-sub-2-2",
              number: "2.2",
              title: "Duyệt một đồ thị tổng quát (Traversing a Graph)",
              parts: [
                {
                  id: "dsa-b12-part-2-2-graph",
                  label: "DUYỆT ĐỒ THỊ TỔNG QUÁT",
                  title: "2 Thành Phần Của Phép Duyệt & Cơ Chế Cờ Đánh Dấu",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Một phép duyệt (traversal) cần 2 thành phần:",
                        "<strong>1. Điểm bắt đầu (The start):</strong>",
                        "• Trong cây: ta thường bắt đầu từ root. Lưu ý: không phải cây nào cũng có root (rooted tree)! Khi đó phải tự chọn 1 đỉnh làm \"source\".",
                        "• Trong đồ thị tổng quát: <strong>không có khái niệm root</strong>. Thay vào đó ta chọn 1 đỉnh đặc biệt gọi là <strong>\"source s\"</strong>.",
                        "<strong>2. Cách di chuyển (The movement):</strong>",
                        "• Trong cây nhị phân: chỉ có tối đa 2 lựa chọn &mdash; đi sang cây con trái hoặc cây con phải. Cây nhị phân <strong>không có chu trình (cycle)</strong>.",
                        "• Trong đồ thị tổng quát: có nhiều lựa chọn hơn &mdash; nếu đỉnh $u$ và $v$ kề nhau qua cạnh $(u, v)$, và đang ở $u$ thì có thể di chuyển sang $v$. Đồ thị tổng quát <strong>có thể có chu trình</strong> (trivial/non-trivial) &rarr; cần có cách tránh việc duyệt lặp vô hạn $u \\to v \\to u \\to v \\to \\dots$",
                        "• <strong>Giải pháp:</strong> BFS và DFS dùng cờ đánh dấu (visited flag)."
                      ]
                    },
                    {
                      type: "component",
                      component: "TreeToGraphTraversalBridgeStudio"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 2.1-2.2)",
                      text: "• Duyệt đồ thị = chọn <strong>điểm bắt đầu (source s)</strong> + <strong>cách di chuyển</strong>.<br/>• Đồ thị không có root, không giống cây; có thể có chu trình &rarr; <strong>phải đánh dấu đỉnh đã thăm</strong> để tránh lặp vô hạn."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b12-sub-2-3",
              number: "2.3",
              title: "Breadth First Search (BFS) – Ý tưởng",
              parts: [
                {
                  id: "dsa-b12-part-2-3-bfs-idea",
                  label: "Ý TƯỞNG BFS",
                  title: "Duyệt Chiều Rộng & 3 Câu Hỏi Quan Trọng",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Bắt đầu từ $s$.",
                        "• Nếu đỉnh $v$ có thể đến được từ $s$, thì tất cả các đỉnh kề của $v$ cũng đến được từ $s$ (định nghĩa đệ quy).",
                        "• BFS duyệt các đỉnh của đồ thị $G$ theo kiểu <strong>breadth-first</strong> (theo chiều rộng), tính từ đỉnh nguồn $s$.",
                        "<strong>3 câu hỏi quan trọng và lời giải:</strong>",
                        "• <em>Duy trì thứ tự duyệt bằng cách nào?</em> &rarr; Dùng <strong>hàng đợi (queue) Q</strong>, ban đầu chỉ chứa $s$.",
                        "• <em>Phân biệt đỉnh đã thăm / chưa thăm (tránh chu trình)?</em> &rarr; Mảng/vector 1 chiều <strong>visited</strong> kích thước $V$: <code>visited[v] = 0</code> ban đầu, <code>visited[v] = 1</code> khi $v$ đã được thăm.",
                        "• <em>Ghi nhớ đường đi (path) bằng cách nào?</em> &rarr; Mảng/vector 1 chiều <strong>p</strong> kích thước $V$: <code>p[v]</code> là đỉnh cha (predecessor/parent) của $v$."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b12-sub-2-4",
              number: "2.4",
              title: "BFS – Pseudo Code & Code Java",
              parts: [
                {
                  id: "dsa-b12-part-2-4-bfs-code",
                  label: "MÃ NGUỒN BFS",
                  title: "Thuật Toán BFS Hoàn Chỉnh Bằng Java",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Pseudo Code BFS:</strong>",
                        "• Khởi tạo: <code>for all v in V: visited[v] = 0, p[v] = -1; Q = {s}, visited[s] = 1</code>",
                        "• Vòng lặp: <code>while Q is not empty: u = Q.dequeue(); for all v adjacent to u: if visited[v] == 0 { visited[v] = 1; p[v] = u; Q.enqueue(v); }</code>"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b12-sub-2-5",
              number: "2.5",
              title: "Phân tích độ phức tạp BFS (BFS Analysis)",
              parts: [
                {
                  id: "dsa-b12-part-2-5-bfs-analysis",
                  label: "PHÂN TÍCH BFS",
                  title: "Chứng Minh Độ Phức Tạp Thời Gian O(V + E)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Mỗi đỉnh chỉ được đưa vào queue <strong>đúng 1 lần</strong> &rarr; $O(V)$.",
                        "• Mỗi lần dequeue 1 đỉnh, tất cả $k$ đỉnh kề của nó được quét; sau khi tất cả các đỉnh đã được dequeue, tổng cộng tất cả $E$ cạnh đã được xét &rarr; $O(E)$ (giả sử dùng <strong>Adjacency List</strong>).",
                        "• <strong>Tổng: O(V + E)</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "BfsMechanismQuestionsStudio"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (BFS)",
                      text: "• BFS dùng <strong>queue (FIFO)</strong>.<br/>• Cần 2 mảng phụ: <strong>visited</strong> (đánh dấu đã thăm) và <strong>p</strong> (lưu đỉnh cha để truy vết đường đi).<br/>• Độ phức tạp: <strong>O(V + E)</strong> &mdash; chỉ đúng khi dùng Adjacency List.<br/>• BFS duyệt theo từng <strong>\"tầng\"</strong> tính từ $s$ (giống level-order của cây)."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b12-sub-2-6",
              number: "2.6",
              title: "Depth First Search (DFS) – Ý tưởng",
              parts: [
                {
                  id: "dsa-b12-part-2-6-dfs-idea",
                  label: "Ý TƯỞNG DFS",
                  title: "Duyệt Chiều Sâu & 3 Câu Hỏi Quan Trọng",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Bắt đầu từ $s$.",
                        "• Nếu đỉnh $v$ có thể đến được từ $s$, thì tất cả các đỉnh kề của $v$ cũng đến được từ $s$ (định nghĩa đệ quy) &mdash; <strong>giống BFS</strong>.",
                        "• DFS duyệt các đỉnh của $G$ theo kiểu <strong>depth-first</strong> (theo chiều sâu), tính từ đỉnh nguồn $s$.",
                        "<strong>3 câu hỏi quan trọng và lời giải:</strong>",
                        "• <em>Duy trì thứ tự duyệt bằng cách nào?</em> &rarr; Dùng <strong>stack S</strong>, nhưng thường dùng <strong>đệ quy (recursion)</strong> &mdash; một dạng stack ngầm (implicit stack).",
                        "• <em>Phân biệt đỉnh đã thăm / chưa thăm (tránh chu trình)?</em> &rarr; Mảng/vector 1 chiều <strong>visited</strong> kích thước $V$: <code>visited[v] = 0</code> ban đầu, <code>visited[v] = 1</code> khi $v$ đã được thăm.",
                        "• <em>Ghi nhớ đường đi (path) bằng cách nào?</em> &rarr; Mảng/vector 1 chiều <strong>p</strong> kích thước $V$: <code>p[v]</code> là đỉnh cha (predecessor/parent) của $v$."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b12-sub-2-7",
              number: "2.7",
              title: "DFS – Pseudo Code & Code Java (đệ quy)",
              parts: [
                {
                  id: "dsa-b12-part-2-7-dfs-code",
                  label: "MÃ NGUỒN DFS",
                  title: "Thuật Toán DFS Đệ Quy Bằng Java",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Pseudo Code DFS:</strong>",
                        "• Hàm đệ quy: <code>DFSrec(u): visited[u] = 1; for all v adjacent to u: if visited[v] == 0 { p[v] = u; DFSrec(v); }</code>",
                        "• Trong hàm main: <code>for all v in V: visited[v] = 0, p[v] = -1; DFSrec(s);</code>"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b12-sub-2-8",
              number: "2.8",
              title: "Phân tích độ phức tạp DFS (DFS Analysis)",
              parts: [
                {
                  id: "dsa-b12-part-2-8-dfs-analysis",
                  label: "PHÂN TÍCH DFS",
                  title: "Chứng Minh Độ Phức Tạp O(V + E) & Cây Khung (Spanning Tree)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Mỗi đỉnh chỉ được thăm <strong>đúng 1 lần</strong> &rarr; $O(V)$, sau đó được đánh dấu (flag) để tránh chu trình.",
                        "• Mỗi lần một đỉnh được thăm, tất cả $k$ đỉnh kề của nó được quét; sau khi tất cả các đỉnh đã được thăm, tổng cộng đã xét hết $E$ cạnh &rarr; $O(E)$ (giả sử dùng <strong>Adjacency List</strong>).",
                        "• <strong>Tổng: O(V + E)</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "DfsMechanismQuestionsStudio"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (DFS)",
                      text: "• DFS dùng <strong>stack</strong> (thường triển khai bằng <strong>đệ quy</strong> &mdash; implicit stack).<br/>• Cũng cần <strong>visited</strong> và <strong>p</strong> giống BFS.<br/>• Độ phức tạp: <strong>O(V + E)</strong> &mdash; với Adjacency List.<br/>• BFS và DFS đều dùng kỹ thuật \"cờ đánh dấu\" (<strong>flag</strong>) để tránh lặp vô hạn do chu trình.<br/>• Cả BFS và DFS đều sinh ra một <strong>cây khung (Spanning Tree)</strong> của đồ thị."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b12-sub-2-9",
              number: "2.9",
              title: "Thuật toán truy vết đường đi (Path Reconstruction Algorithm)",
              parts: [
                {
                  id: "dsa-b12-part-2-9-path",
                  label: "TRUY VẾT ĐƯỜNG ĐI",
                  title: "Đối Chiếu Phiên Bản Lặp Ngược & Phiên Bản Đệ Quy Xuôi",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Sau khi chạy BFS/DFS từ $s$, mảng <strong>p</strong> cho phép truy vết đường đi từ $s$ đến 1 đỉnh đích $t$.",
                        "• <strong>Cách 1 &mdash; Phiên bản lặp (Iterative):</strong> output bị <strong>đảo ngược (reversed)</strong>:",
                        "&nbsp;&nbsp;+ Bắt đầu từ $t$, lùi dần về đỉnh cha <code>i = p[i]</code> cho đến khi gặp $s$.",
                        "• <strong>Cách 2 &mdash; Phiên bản đệ quy (Recursive):</strong> cho ra đường đi <strong>đúng thứ tự (normal path)</strong>:",
                        "&nbsp;&nbsp;+ Gọi đệ quy <code>backtrack(p[u], p)</code> trước rồi mới in <code>u</code> (nhờ cơ chế LIFO của Call Stack giống postorder).",
                        "• <strong>Điều kiện dừng:</strong> <code>p[s] = -1</code> (đỉnh cha của $s$ là -1)."
                      ]
                    },
                    {
                      type: "component",
                      component: "PathReconstructionStudio"
                    },
                    {
                      type: "component",
                      component: "GraphTraversalMasterFlashcards"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Path Reconstruction)",
                      text: "• Truy vết đường đi dựa vào mảng <strong>p</strong> đã lưu trong lúc chạy BFS/DFS.<br/>• <strong>Phiên bản lặp:</strong> đi từ $t$ ngược về $s$ &rarr; kết quả bị <strong>đảo ngược</strong>.<br/>• <strong>Phiên bản đệ quy:</strong> gọi đệ quy trước rồi mới in ra &rarr; kết quả <strong>đúng thứ tự</strong> từ $s$ đến $t$ (nhờ tính chất của đệ quy tương tự postorder).<br/>• Điều kiện dừng: <code>p[s] = -1</code>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b12-sec3",
          roman: "III",
          title: "Một số ứng dụng của duyệt đồ thị (BFS/DFS Applications)",
          subsections: [
            {
              id: "dsa-b12-sub-3-1",
              number: "3.1",
              title: "Kiểm tra tính liên thông (Reachability Test)",
              parts: [
                {
                  id: "dsa-b12-part-3-1-reachability",
                  label: "KIỂM TRA LIÊN THÔNG",
                  title: "Bài Toán Reachability Test Giữa 2 Đỉnh",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>Bài toán:</strong> Kiểm tra đỉnh $v$ có đến được từ đỉnh $u$ hay không?",
                        "• <strong>Cách làm:</strong> chạy BFS/DFS bắt đầu từ $s = u$.",
                        "• Nếu sau khi BFS/DFS kết thúc, <code>visited[v] == 1</code> &rarr; $v$ đến được từ $u$; ngược lại &rarr; không đến được."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b12-sub-3-2",
              number: "3.2",
              title: "Xác định thành phần liên thông (Identifying Component(s))",
              parts: [
                {
                  id: "dsa-b12-part-3-2-components",
                  label: "THÀNH PHẦN LIÊN THÔNG",
                  title: "Xác Định, Đánh Nhãn & Đếm Số Thành Phần Liên Thông (CC)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>Component (Thành phần liên thông):</strong> đồ thị con mà bất kỳ 2 đỉnh nào cũng nối được với nhau bằng ít nhất 1 đường đi, và không nối thông được với đỉnh nào khác bên ngoài.",
                        "• Dùng BFS/DFS để <strong>xác định / đánh nhãn / đếm</strong> số thành phần liên thông trong đồ thị $G$.",
                        "• <strong>Độ phức tạp của bài toán đếm thành phần liên thông:</strong> mặc dù mỗi lần gọi DFS/BFS tốn $O(V+E)$, và có thể gọi tới $V$ lần, nhưng <strong>tổng thể vẫn chỉ là O(V+E)</strong>, chứ <strong>không phải O(V·(V+E))</strong> &mdash; vì mỗi đỉnh và mỗi cạnh chỉ được xét đúng 1 lần trên toàn bộ vòng lặp <code>for all v in V</code>, do các đỉnh đã <code>visited</code> sẽ không bị chạy DFS/BFS lại."
                      ]
                    },
                    {
                      type: "component",
                      component: "GraphReachabilityLab"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Reachability & CC)",
                      text: "• Reachability test: chạy BFS/DFS từ $u$, kiểm tra <code>visited[v]</code>.<br/>• Connected Component: đếm số lần phải \"khởi động\" DFS/BFS từ 1 đỉnh chưa <code>visited</code>.<br/>• Độ phức tạp đếm CC là <strong>O(V+E)</strong>, KHÔNG PHẢI $O(V \\cdot (V+E))$ &mdash; đây là điểm dễ nhầm khi thi!"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b12-sub-3-3",
              number: "3.3",
              title: "Sắp xếp Topo (Topological Sort)",
              parts: [
                {
                  id: "dsa-b12-part-3-3-toposort",
                  label: "SẮP XẾP TÔ-PÔ",
                  title: "Topological Sort Trên DAG (Post-Order + Reverse)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Khái niệm:</strong>",
                        "• Topological sort của một <strong>DAG</strong> (Directed Acyclic Graph &mdash; đồ thị có hướng không chu trình) là một thứ tự tuyến tính (linear ordering) các đỉnh sao cho <strong>mỗi đỉnh xuất hiện trước tất cả các đỉnh mà nó có cạnh đi ra (outbound edges)</strong>.",
                        "• Mỗi DAG có thể có <strong>một hoặc nhiều</strong> topological sort hợp lệ.",
                        "• Một trong những mục đích chính của topological sort: dùng cho <strong>Dynamic Programming (DP) trên DAG</strong> (sẽ học ở bài sau).",
                        "<strong>Cách hoạt động:</strong>",
                        "• Nếu đồ thị là DAG, chỉ cần chạy DFS trên đồ thị và <strong>\"ghi lại đỉnh theo kiểu post-order\"</strong> sẽ cho ra một topological order hợp lệ.",
                        "• <strong>Post-order:</strong> xử lý (ghi nhận) đỉnh $u$ <strong>sau khi</strong> tất cả con của $u$ đã được thăm xong.",
                        "• <strong>Ví dụ minh họa:</strong>",
                        "&nbsp;&nbsp;+ Giả sử duyệt hết các đỉnh kề của 0 bằng DFS trước &rarr; toposort list = [danh sách đỉnh đến được từ 0] - đỉnh 0",
                        "&nbsp;&nbsp;+ Rồi duyệt hết đỉnh kề của 1 &rarr; toposort list = [[danh sách đỉnh đến được từ 1] - đỉnh 1] - đỉnh 0",
                        "&nbsp;&nbsp;+ Tiếp tục như vậy, cuối cùng có: <code>toposort = [4, 3, 5, 2, 1, 0, 6, 7]</code>",
                        "&nbsp;&nbsp;+ Sau khi <strong>đảo ngược (reverse)</strong>: <code>[7, 6, 0, 1, 2, 5, 3, 4]</code>"
                      ]
                    },
                    {
                      type: "component",
                      component: "GraphTopologicalSortStudio"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Topological Sort)",
                      text: "• Chỉ áp dụng cho <strong>DAG</strong> (đồ thị có hướng, không chu trình).<br/>• Cách làm: chạy DFS, ghi nhận đỉnh theo <strong>post-order</strong> (sau khi xử lý xong toàn bộ con), rồi <strong>đảo ngược (reverse)</strong> danh sách kết quả.<br/>• Một DAG có thể có nhiều topo sort hợp lệ khác nhau.<br/>• Ứng dụng chính: làm nền cho DP trên DAG."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b12-sec4",
          roman: "IV",
          title: "Phần 4: So sánh và Tổng kết",
          subsections: [
            {
              id: "dsa-b12-sub-4-1",
              number: "4.1",
              title: "Trade-off giữa DFS và BFS (O(V+E) mỗi thuật toán)",
              parts: [
                {
                  id: "dsa-b12-part-4-1-tradeoff",
                  label: "TRADE-OFF DFS VS BFS",
                  title: "Bảng Đối Chiếu Ưu & Nhược Điểm DFS vs BFS",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Bảng so sánh Trade-off giữa DFS và BFS:</strong>",
                        "• <strong>DFS:</strong>",
                        "&nbsp;&nbsp;+ <em>Ưu điểm (Pros):</em> Có thể dễ code hơn (tùy trường hợp); dùng ít bộ nhớ hơn; có thêm 1 số tính năng mở rộng hữu ích (ngoài phạm vi môn nhưng hữu ích cho bài tập lớn: Topological Sort, Cycle Detection, SCC).",
                        "&nbsp;&nbsp;+ <em>Nhược điểm (Cons):</em> Không giải được SSSP trên đồ thị không trọng số.",
                        "• <strong>BFS:</strong>",
                        "&nbsp;&nbsp;+ <em>Ưu điểm (Pros):</em> Có thể giải bài toán <strong>SSSP (Single-Source Shortest Path)</strong> trên đồ thị không trọng số (unweighted graph) &mdash; sẽ học ở bài sau.",
                        "&nbsp;&nbsp;+ <em>Nhược điểm (Cons):</em> Có thể dài code hơn (tùy trường hợp); dùng nhiều bộ nhớ hơn (đặc biệt do phải duy trì queue)."
                      ]
                    },
                    {
                      type: "component",
                      component: "GraphBfsDfsTradeoffDuelArena"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b12-sub-4-2",
              number: "4.2",
              title: "Tổng kết bài học & Cạm bẫy thi cử",
              parts: [
                {
                  id: "dsa-b12-part-4-2-summary",
                  label: "TỔNG KẾT & BẪY THI CỬ",
                  title: "Bảng Vàng 7 Trụ Cột, 5 Cạm Bẫy Đề Thi & Mini-Quiz Tốt Nghiệp",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Trong bài này, ta đã học:</strong>",
                        "• Một số <strong>ứng dụng của cấu trúc dữ liệu đồ thị</strong> (tiếp nối từ Bài 05).",
                        "• <strong>Thuật toán duyệt đồ thị:</strong> cần 2 thành phần &mdash; điểm bắt đầu (Start) + cách di chuyển (Movement).",
                        "• <strong>Breadth-First Search (BFS):</strong> dùng queue, duyệt theo chiều rộng.",
                        "• <strong>Depth-First Search (DFS):</strong> dùng stack/đệ quy, duyệt theo chiều sâu.",
                        "• Cả BFS và DFS đều dùng kỹ thuật <strong>cờ (flag)</strong> để tránh lặp do chu trình.",
                        "• Cả BFS và DFS đều sinh ra <strong>Spanning Tree</strong> (cây khung) của đồ thị.",
                        "• Một số ứng dụng: <strong>Reachability</strong> (kiểm tra liên thông), <strong>CC</strong> (đếm thành phần liên thông), <strong>Toposort</strong> (sắp xếp topo)."
                      ]
                    },
                    {
                      type: "component",
                      component: "GraphTraversalExamPitfallsCard"
                    },
                    {
                      type: "component",
                      component: "Chapter12FinalMasterMatrix"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Tổng kết — dễ ra thi)",
                      text: "• BFS = queue, duyệt theo tầng; DFS = stack/đệ quy, duyệt theo nhánh sâu nhất trước.<br/>• Cả hai đều <strong>O(V+E)</strong> với Adjacency List.<br/>• BFS dùng cho SSSP trên đồ thị không trọng số; DFS thì không.<br/>• Toposort chỉ dùng DFS (không dùng BFS), theo nguyên tắc <strong>post-order + reverse</strong>, chỉ áp dụng cho DAG.<br/>• Đếm connected component bằng DFS/BFS có độ phức tạp tổng <strong>O(V+E)</strong>, không nhân thêm V."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dsa-b13",
      title: "Bài 13: Cây khung nhỏ nhất (Minimum Spanning Tree - MST)",
      description: "Hai thuật toán tham lam kinh điển CS2010 kết nối toàn bộ V đỉnh với đúng E = V - 1 cạnh và tổng trọng số nhỏ nhất: Kruskal hướng cạnh (Edge List + UFDS) O(E log E), đối đầu trực diện với Prim hướng đỉnh (Adjacency List + Min-Heap) O(E log V).",
      sections: [
        {
          id: "dsa-b13-sec0-hero",
          roman: "OVERVIEW",
          title: "Tổng Quan & Bộ Đôi Thuật Toán Cây Khung Nhỏ Nhất",
          subsections: [
            {
              id: "dsa-b13-sub-0-hero",
              number: "0.0",
              title: "Tựa Đề & Live MST Dual-Workbench",
              parts: [
                {
                  id: "dsa-b13-part-0-banner",
                  label: "TỔNG QUAN CÂY KHUNG NHỎ NHẤT",
                  title: "Phòng Thí Nghiệm Minimum Spanning Tree (Kruskal & Prim)",
                  content: [
                    {
                      type: "component",
                      component: "DsaMstHeroBanner"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b13-sec1",
          roman: "I",
          title: "Phần 1: Ôn tập các khái niệm nền tảng (Review)",
          subsections: [
            {
              id: "dsa-b13-sub-1-1",
              number: "1.1",
              title: "Cây (Tree) T",
              parts: [
                {
                  id: "dsa-b13-part-1-1-tree",
                  label: "KHÁI NIỆM CÂY",
                  title: "Định Nghĩa & Tính Chất Cốt Tử Của Cây Tự Do (Free Tree)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• $T$ là một <strong>đồ thị liên thông (connected graph)</strong> có <strong>$V$ đỉnh</strong> và <strong>$V - 1$ cạnh</strong>.",
                        "• <strong>Quan trọng:</strong> giữa bất kỳ 2 đỉnh nào trong $T$ luôn có <strong>duy nhất một đường đi (one unique path)</strong>."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b13-sub-1-2",
              number: "1.2",
              title: "Cây khung (Spanning Tree) ST của đồ thị liên thông G",
              parts: [
                {
                  id: "dsa-b13-part-1-2-spanning",
                  label: "CÂY KHUNG",
                  title: "Cây Khung Bao Phủ & Liên Hệ Duyệt Đồ Thị (Bài 12)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• $ST$ là một cây \"bao phủ\" (spans/covers) <strong>tất cả các đỉnh</strong> của $G$.",
                        "• Nhắc lại: <strong>BFS Spanning Tree</strong> và <strong>DFS Spanning Tree</strong> (đã học ở Bài 12) chính là các cây khung sinh ra từ BFS/DFS."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b13-sub-1-3",
              number: "1.3",
              title: "Bài toán sắp xếp (Sorting problem)",
              parts: [
                {
                  id: "dsa-b13-part-1-3-sorting",
                  label: "SẮP XẾP & UFDS",
                  title: "Bộ Đôi Vũ Khí Tiên Quyết: Sorting + UFDS",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Sắp xếp lại 1 tập hợp đối tượng sao cho với mọi cặp đối tượng $(a, b)$ mà $a < b$, thì trong kết quả cuối cùng $a$ luôn đứng trước $b$."
                      ]
                    },
                    {
                      type: "component",
                      component: "TreeAndSpanningTreeBridgeStudio"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 1)",
                      text: "• Cây: $V$ đỉnh, $V-1$ cạnh, liên thông, đường đi giữa 2 đỉnh bất kỳ là duy nhất.<br/>• Spanning Tree: cây bao phủ hết mọi đỉnh của đồ thị gốc.<br/>• MST sẽ cần dùng lại kiến thức <strong>Sorting</strong> (bài 06) và <strong>Union-Find Disjoint Sets - UFDS</strong> (bài 11)."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b13-sec2",
          roman: "II",
          title: "Phần 2: Ví dụ khởi động và định nghĩa MST",
          subsections: [
            {
              id: "dsa-b13-sub-2-1",
              number: "2.1",
              title: "Ví dụ khởi động (Motivating Example)",
              parts: [
                {
                  id: "dsa-b13-part-2-1-motivate",
                  label: "VÍ DỤ KHỞI ĐỘNG",
                  title: "Dự Án Hạ Tầng Nối Các Làng Ở Nông Thôn (Rural Road Network)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>Bài toán:</strong> một dự án chính phủ (Government Project) muốn <strong>nối các làng ở nông thôn (rural villages)</strong> bằng đường (roads).",
                        "• Chi phí xây một con đường phụ thuộc vào địa hình (terrain), v.v.",
                        "• Ngân sách (budget) có giới hạn.",
                        "• <strong>Câu hỏi:</strong> nên xây đường như thế nào?"
                      ]
                    },
                    {
                      type: "component",
                      component: "RuralRoadNetworkMotivator"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b13-sub-2-2",
              number: "2.2",
              title: "Các định nghĩa (More Definitions)",
              parts: [
                {
                  id: "dsa-b13-part-2-2-defs",
                  label: "GIẢI PHẪU TOÁN HỌC",
                  title: "Đồ Thị Có Trọng Số & Trọng Số Của Cây Khung",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Đồ thị có trọng số (Weighted Graph):</strong>",
                        "• Tập đỉnh $V$ (vertex set) &mdash; ví dụ: giao lộ (street intersections), nhà (houses), v.v.",
                        "• Tập cạnh $E$ (edge set) &mdash; ví dụ: đường phố (streets), con đường (roads), đại lộ (avenues), v.v.",
                        "• Thường là <strong>vô hướng (undirected)</strong> &mdash; ví dụ: đường 2 chiều.",
                        "• Có <strong>trọng số (weighted)</strong> &mdash; ví dụ: khoảng cách (distance), thời gian (time), phí (toll), v.v.",
                        "• Hàm trọng số $w(a, b): E \\to \\mathbb{R}$ &mdash; gán trọng số cho cạnh từ $a$ đến $b$.",
                        "• Ký hiệu: Weighted Graph $G(V, E), w(a,b): E \\to \\mathbb{R}$.",
                        "<strong>Đồ thị vô hướng liên thông (Connected undirected graph) G:</strong>",
                        "• Tồn tại đường đi từ đỉnh $a$ bất kỳ đến đỉnh $b$ bất kỳ trong $G$.",
                        "<strong>Trọng số của cây khung:</strong>",
                        "• Cho $ST$ là 1 spanning tree của $G$. Gọi $w(ST)$ là tổng trọng số các cạnh trong $ST$:",
                        "• $$w(ST) = \\sum_{(a, b) \\in ST} w(a, b)$$",
                        "<strong>Minimum Spanning Tree (MST) của đồ thị vô hướng liên thông có trọng số G:</strong>",
                        "• MST của $G$ là 1 Spanning Tree của $G$ có $w(ST)$ <strong>nhỏ nhất có thể</strong>."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b13-sub-2-3",
              number: "2.3",
              title: "Bài toán MST chuẩn (The Standard MST Problem)",
              parts: [
                {
                  id: "dsa-b13-part-2-3-standard",
                  label: "BÀI TOÁN CHUẨN",
                  title: "Chuẩn Hóa Bài Toán Minimum Spanning Tree",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>Input:</strong> một đồ thị vô hướng liên thông có trọng số $G(V, E)$.",
                        "• <strong>Yêu cầu:</strong> chọn ra một số cạnh của $G$ sao cho đồ thị vẫn liên thông, nhưng có <strong>tổng trọng số nhỏ nhất (minimum total weight)</strong>.",
                        "• <strong>Output:</strong> Minimum Spanning Tree (MST) của $G$."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b13-sub-2-4",
              number: "2.4",
              title: "Ví dụ minh họa",
              parts: [
                {
                  id: "dsa-b13-part-2-4-example",
                  label: "VÍ DỤ MINH HỌA",
                  title: "So Sánh Cây Khung Thường (20) vs MST Tối Ưu (18)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Với cùng 1 đồ thị gốc:",
                        "• Một <strong>Spanning Tree</strong> (không tối ưu): chi phí = $4 + 4 + 6 + 6 = \\mathbf{20}$",
                        "• <strong>MST</strong> (tối ưu): chi phí = $4 + 6 + 6 + 2 = \\mathbf{18}$",
                        "&rarr; Cả 2 đều là spanning tree hợp lệ (bao phủ hết đỉnh, không chu trình), nhưng MST có tổng trọng số nhỏ nhất."
                      ]
                    },
                    {
                      type: "component",
                      component: "SpanningTreeVsMstDuelStudio"
                    },
                    {
                      type: "component",
                      component: "MstBasicsFlashcards"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 2)",
                      text: "• MST chỉ định nghĩa trên đồ thị <strong>vô hướng, liên thông, có trọng số</strong>.<br/>• MST là 1 loại Spanning Tree đặc biệt: trong tất cả các spanning tree có thể có của $G$, MST là cây có <strong>tổng trọng số nhỏ nhất</strong>.<br/>• Một đồ thị có thể có <strong>nhiều spanning tree</strong> nhưng MST (về mặt trọng số) là <strong>nhỏ nhất</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b13-sec3",
          roman: "III",
          title: "Phần 3: Các thuật toán giải MST (MST Algorithms)",
          subsections: [
            {
              id: "dsa-b13-sub-3-1",
              number: "3.1",
              title: "Tổng quan các thuật toán giải MST",
              parts: [
                {
                  id: "dsa-b13-part-3-1-overview",
                  label: "PHẢ HỆ THUẬT TOÁN",
                  title: "Toàn Cảnh Các Thuật Toán Giải MST Đa Thức (Polynomial)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• MST là bài toán nổi tiếng trong Computer Science, có nhiều thuật toán hiệu quả (đa thức &mdash; polynomial):",
                        "&nbsp;&nbsp;+ <strong>Jarník's / Prim's greedy algorithm</strong> &mdash; dùng cấu trúc dữ liệu <strong>PriorityQueue</strong> (đã học ở bài 02-04).",
                        "&nbsp;&nbsp;+ <strong>Kruskal's greedy algorithm</strong> &mdash; dùng cấu trúc dữ liệu <strong>Union Find Disjoint Sets (UFDS)</strong> (đã học ở bài 05 / 11).",
                        "&nbsp;&nbsp;+ <strong>Borůvka's greedy algorithm</strong> (không thảo luận trong bài này).",
                        "&nbsp;&nbsp;+ Và một vài biến thể nâng cao khác...",
                        "• <strong>Cả Prim's và Kruskal's đều là thuật toán tham lam (greedy)</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "MstAlgorithmsFamilyTreeStudio"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b13-sec4",
          roman: "IV",
          title: "Phần 4: Thuật toán Prim's (Prim's Algorithm)",
          subsections: [
            {
              id: "dsa-b13-sub-4-1",
              number: "4.1",
              title: "Khái niệm & Cách hoạt động",
              parts: [
                {
                  id: "dsa-b13-part-4-1-mechanism",
                  label: "MÃ GIẢ & HOẠT HỌA",
                  title: "Cơ Chế Cây Mọc Dần Từ Đỉnh Nguồn (Growing Tree)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Pseudo code (rất đơn giản):</strong>",
                        "<code>T &larr; {s}</code>, một đỉnh bắt đầu $s$ (thường là đỉnh 0)",
                        "enqueue các cạnh nối với $s$ (chỉ lưu đỉnh đầu kia và trọng số cạnh, không lưu đầu còn lại) vào priority queue $PQ$",
                        "&nbsp;&nbsp;-- $PQ$ sắp xếp phần tử theo trọng số tăng dần",
                        "<code>while</code> còn cạnh chưa xử lý trong $PQ$:",
                        "&nbsp;&nbsp;lấy ra cạnh $e$ nhỏ nhất ở đầu $PQ$ (front most edge $e$)",
                        "&nbsp;&nbsp;<code>if</code> đỉnh $v$ nối với cạnh $e$ này chưa được lấy (chưa taken):",
                        "&nbsp;&nbsp;&nbsp;&nbsp;<code>T &larr; T &cup; {v}</code> (bao gồm cả cạnh $e$ này)",
                        "&nbsp;&nbsp;&nbsp;&nbsp;enqueue các cạnh nối với $v$ (như trên)",
                        "$T$ là một MST.",
                        "<strong>Cách hoạt động:</strong> Prim's phát triển cây $T$ từ 1 đỉnh nguồn $s$ duy nhất, mỗi bước \"mọc\" thêm 1 cạnh có trọng số nhỏ nhất nối từ cây hiện tại $T$ ra 1 đỉnh mới chưa thuộc $T$, cho tới khi $T$ bao phủ hết mọi đỉnh."
                      ]
                    },
                    {
                      type: "component",
                      component: "PrimAlgorithmExecutionStudio"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b13-sub-4-2",
              number: "4.2",
              title: "Cài đặt bằng Java (Easy Java Implementation)",
              parts: [
                {
                  id: "dsa-b13-part-4-2-java",
                  label: "CODE JAVA & ĐỘ PHỨC TẠP",
                  title: "Cài Đặt Java & Phân Tích Độ Phức Tạp O(E log V)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Chỉ cần dùng <strong>2 cấu trúc dữ liệu quen thuộc</strong> để cài đặt Prim's:",
                        "1. <strong>Priority Queue</strong> (có thể dùng <code>PriorityQueue</code> của Java).",
                        "2. <strong>Mảng boolean</strong> (<code>taken[]</code> để xác định 1 đỉnh đã được lấy (taken) hay chưa).",
                        "<strong>Với 2 cấu trúc dữ liệu này, ta chạy được Prim's trong O(E log V):</strong>",
                        "• Mỗi cạnh được xử lý đúng 1 lần &rarr; $O(E)$.",
                        "• Mỗi lần, thao tác Insert / ExtractMax (Extract-Min ở đây) trên PQ tốn $O(\\log E)$.",
                        "• Vì $E = O(V^2)$, nên $O(\\log E) = O(\\log V^2) = O(2 \\log V) = \\mathbf{O(\\log V)}$."
                      ]
                    },
                    {
                      type: "component",
                      component: "PrimJavaCodeComplexityWorkbench"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b13-sub-4-3",
              number: "4.3",
              title: "Tại sao Prim's đúng? (Why Prim's Works?)",
              parts: [
                {
                  id: "dsa-b13-part-4-3-proof",
                  label: "CHỨNG MINH TÍNH ĐÚNG ĐẮN",
                  title: "Chứng Minh Toán Học Bằng Kỹ Thuật Thay Thế Cạnh (Exchange Argument)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Trước hết, cần nhận ra Prim's là một <strong>thuật toán tham lam (greedy algorithm)</strong>: ở mỗi bước, luôn cố chọn cạnh hợp lệ tiếp theo $e$ có <strong>trọng số nhỏ nhất</strong>.",
                        "• Thuật toán tham lam thường dễ cài đặt, nhưng thường cần <strong>\"chứng minh tính đúng đắn\" (proof of correctness)</strong>.",
                        "<strong>Ý tưởng chứng minh (Exchange Argument):</strong>",
                        "• Gọi $T$ là spanning tree do Prim's sinh ra, $T^*$ là spanning tree có chi phí tối thiểu (đã biết là tối ưu).",
                        "• Nếu $T == T^*$: xong (đã chứng minh).",
                        "• Nếu $T \\neq T^*$:",
                        "&nbsp;&nbsp;+ Gọi $e_k = (u, v)$ là cạnh đầu tiên được Prim's chọn ở vòng lặp thứ $k$ mà <strong>không thuộc $T^*$</strong>.",
                        "&nbsp;&nbsp;+ Gọi $P$ là đường đi từ $u$ đến $v$ trong $T^*$, và gọi $e^*$ là 1 cạnh trong $P$ sao cho 1 đầu mút thuộc cây đã tạo ở vòng lặp thứ $(k-1)$ của Prim's, đầu còn lại thì không &mdash; tức là 1 đầu của $e^*$ là $u$ hoặc $v$, nhưng 2 đầu mút của $e^*$ <strong>không phải chính xác là $u$ và $v$</strong>.",
                        "&nbsp;&nbsp;+ Nếu trọng số của $e^*$ nhỏ hơn trọng số của $e_k$, thì Prim's đã phải chọn $e^*$ ở vòng lặp thứ $k$ rồi (theo tính greedy) &rarr; mâu thuẫn.",
                        "&nbsp;&nbsp;+ Vậy <strong>chắc chắn $w(e^*) \\ge w(e_k)$</strong>.",
                        "&nbsp;&nbsp;+ Khi $w(e^*) == w(e_k)$, việc chọn $e^*$ hay $e_k$ là tùy ý (arbitrary).",
                        "&nbsp;&nbsp;+ Dù $w(e^*)$ lớn hơn hay bằng $w(e_k)$, ta có thể <strong>thay thế $e^*$ bằng $e_k$</strong> trong $T^*$ mà vẫn giữ nguyên (hoặc không tăng) tổng trọng số tối thiểu của $T^*$.",
                        "&nbsp;&nbsp;+ Lặp lại quá trình này cho đến khi $T^*$ trở thành $T$.",
                        "&nbsp;&nbsp;+ &rarr; Vậy cây khung do Prim's sinh ra chính là một Minimum Spanning Tree.",
                        "<strong>Minh họa trực quan (Visual Explanation):</strong>",
                        "• Cây $T$ do Prim's tạo ra, so với cây tối ưu giả định $T^*$.",
                        "• Ví dụ: $e_1 = (0, 1)$ được chọn ở vòng lặp 1, nhưng đường đi $P$ từ 0 đến 1 trong $T^*$ là `0-2-1`, và $e^* = (0, 2)$.",
                        "• Nếu thay $e_1$ bằng $e^*$, ta biến đổi $T^*$ thành $T$ &rarr; chứng minh $T$ cũng là 1 MST."
                      ]
                    },
                    {
                      type: "component",
                      component: "PrimExchangeArgumentProofStudio"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Prim's Algorithm)",
                      text: "• Prim's là thuật toán <strong>tham lam (greedy)</strong>, phát triển cây MST từ <strong>1 đỉnh nguồn $s$</strong> duy nhất.<br/>• Dùng <strong>Priority Queue</strong> để luôn lấy ra cạnh có trọng số nhỏ nhất nối từ cây hiện tại ra ngoài.<br/>• Cần mảng <strong>Boolean taken[]</strong> để biết đỉnh nào đã thuộc cây.<br/>• Độ phức tạp: <strong>O(E log V)</strong>.<br/>• Tính đúng đắn được chứng minh bằng <strong>exchange argument</strong> (kỹ thuật \"thay thế cạnh\")."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b13-sec5",
          roman: "V",
          title: "Phần 5: Thuật toán Kruskal's (Kruskal's Algorithm)",
          subsections: [
            {
              id: "dsa-b13-sub-5-1",
              number: "5.1",
              title: "Khái niệm & Cách hoạt động",
              parts: [
                {
                  id: "dsa-b13-part-5-1-mechanism",
                  label: "MÃ GIẢ & MÔ PHỎNG",
                  title: "Cơ Chế Duyệt Cạnh Sắp Xếp & Kiểm Tra Chu Trình",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Pseudo code (rất đơn giản):</strong>",
                        "<code>sort</code> tập $E$ cạnh theo trọng số tăng dần",
                        "<code>T &larr; {}</code>",
                        "<code>while</code> còn cạnh chưa xử lý:",
                        "&nbsp;&nbsp;chọn 1 cạnh $e$ chưa xử lý có chi phí nhỏ nhất (min cost)",
                        "&nbsp;&nbsp;<code>if</code> thêm $e$ vào $T$ không tạo thành chu trình (cycle):",
                        "&nbsp;&nbsp;&nbsp;&nbsp;thêm $e$ vào $T$",
                        "$T$ là một MST.",
                        "<strong>Cách hoạt động:</strong> Kruskal's không xuất phát từ 1 đỉnh cụ thể như Prim's, mà xét <strong>toàn bộ tập cạnh</strong> theo thứ tự trọng số tăng dần, và <strong>thêm cạnh vào $T$ nếu không tạo chu trình</strong>, cho đến khi đủ cạnh tạo thành cây khung."
                      ]
                    },
                    {
                      type: "component",
                      component: "KruskalAlgorithmExecutionStudio"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b13-sub-5-2",
              number: "5.2",
              title: "Tại sao Kruskal's đúng? (Why Kruskal's Works?)",
              parts: [
                {
                  id: "dsa-b13-part-5-2-proof",
                  label: "CHỨNG MINH TOÁN HỌC",
                  title: "Chứng Minh Bằng Bất Biến Vòng Lặp (Loop Invariant)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Kruskal's cũng là một <strong>thuật toán tham lam (greedy algorithm)</strong>: ở mỗi bước luôn cố chọn cạnh chưa xử lý $e$ có trọng số nhỏ nhất.",
                        "• Chứng minh dựa trên <strong>bất biến vòng lặp (loop invariant)</strong>: <em>\"Mọi cạnh $e$ được thêm vào $T$ bởi thuật toán Kruskal's đều là 1 phần của MST.\"</em>",
                        "<strong>Giải thích bất biến:</strong>",
                        "• Kruskal's có bước <strong>kiểm tra chu trình đặc biệt</strong> trước khi thêm cạnh $e$ vào $T$ &rarr; cạnh $e$ không bao giờ tạo ra chu trình trong $T$ (Ví dụ: không thể nối đỉnh 0 và 2 vì sẽ tạo thành chu trình).",
                        "• Ở đầu mỗi vòng lặp, $T$ luôn là 1 phần của MST.",
                        "• Ở cuối vòng lặp, ta đã chọn được <strong>$V - 1$ cạnh</strong> từ 1 đồ thị liên thông có trọng số $G$ mà không tạo chu trình &rarr; điều này đồng nghĩa ta có 1 <strong>Spanning Tree</strong>.",
                        "• Bằng cách luôn thêm cạnh chưa xử lý $e$ có chi phí nhỏ nhất tiếp theo, ta có: <code>w(T &cup; e) &le; w(T &cup; bất kỳ cạnh chưa xử lý nào khác mà không tạo chu trình)</code> (Ví dụ: nối đỉnh 0 và 3 bằng cạnh nhỏ nhất tiếp theo).",
                        "• Ở cuối vòng lặp, Spanning Tree $T$ phải có trọng số <strong>$w(T)$ nhỏ nhất</strong>, vậy $T$ chính là MST cuối cùng."
                      ]
                    },
                    {
                      type: "component",
                      component: "KruskalLoopInvariantProofStudio"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b13-sub-5-3",
              number: "5.3",
              title: "Cài đặt thuật toán (Kruskal's Implementation)",
              parts: [
                {
                  id: "dsa-b13-part-5-3-java",
                  label: "EDGELIST & CODE JAVA",
                  title: "Cài Đặt Bằng Java & Phân Tích Độ Phức Tạp O(E log V)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Để sắp xếp các cạnh (sort edges):</strong>",
                        "• Ta dùng <strong>EdgeList</strong> để lưu thông tin đồ thị (Adjacency Matrix/List đã học trước đây <strong>không phù hợp</strong> cho việc sắp xếp cạnh!).",
                        "• Sau đó dùng <strong>bất kỳ</strong> thuật toán sắp xếp nào đã học trước đây.",
                        "• Trong Java, chỉ cần dùng 1 dòng: <code>Collections.sort(...)</code> &mdash; không cần tự code merge/quick sort.",
                        "<strong>Để kiểm tra chu trình (test for cycles):</strong>",
                        "• Dùng <strong>Union-Find Disjoint Sets (UFDS)</strong>.",
                        "<strong>Pseudo code kèm độ phức tạp:</strong>",
                        "• Để sắp xếp cạnh: cần $O(E \\log E)$.",
                        "• Để kiểm tra chu trình: cần $O(\\alpha(V))$ &mdash; rất nhỏ, coi như hằng số $O(1)$ ($\\alpha$ là hàm ngược Ackermann, đặc trưng của UFDS).",
                        "• <strong>Tổng thể:</strong> Kruskal's chạy trong $O(E \\log E + E \\cdot \\alpha(V))$, mà <code>E log E</code> chiếm ưu thế (dominates)!",
                        "• Vì $E = O(V^2)$, nên Kruskal's chạy trong $O(E \\log V^2) = \\mathbf{O(E \\log V)}$."
                      ]
                    },
                    {
                      type: "component",
                      component: "KruskalJavaWorkbench"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Kruskal's Algorithm)",
                      text: "• Kruskal's là thuật toán <strong>tham lam</strong>, xét cạnh theo thứ tự <strong>trọng số tăng dần</strong>, thêm vào $T$ nếu <strong>không tạo chu trình</strong>.<br/>• Cần <strong>sort cạnh</strong> (dùng EdgeList, không dùng AdjMatrix/AdjList) và <strong>UFDS</strong> để kiểm tra chu trình.<br/>• Độ phức tạp: <strong>O(E log E) = O(E log V)</strong> (vì $E = O(V^2)$), với <code>E log E</code> là thành phần chiếm ưu thế.<br/>• Bất biến vòng lặp: mọi cạnh được thêm vào $T$ luôn là 1 phần của MST."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b13-sec6",
          roman: "VI",
          title: "Phần 6: So sánh và Tổng kết (Comparison & Summary)",
          subsections: [
            {
              id: "dsa-b13-sub-6-1",
              number: "6.1",
              title: "Nên chọn thuật toán nào?",
              parts: [
                {
                  id: "dsa-b13-part-6-1-duel",
                  label: "ĐỐI ĐẦU THỰC CHIẾN",
                  title: "So Sánh & Ma Trận Ra Quyết Định Lựa Chọn Thuật Toán",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Cả 2 thuật toán đều đúng và đều chạy trong thời gian đa thức gần tương đương: <strong>Prim's: $O(E \\log V)$</strong>, <strong>Kruskal's: $O(E \\log V)$</strong>.",
                        "• Việc chọn Prim's hay Kruskal's tùy vào sở thích / tình huống cụ thể (slide đặt câu hỏi mở, không đưa ra khuyến nghị cố định)."
                      ]
                    },
                    {
                      type: "component",
                      component: "PrimVsKruskalDecisionMatrixDuel"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b13-sub-6-2",
              number: "6.2",
              title: "Tổng kết bài học",
              parts: [
                {
                  id: "dsa-b13-part-6-2-summary",
                  label: "TỔNG KẾT & QUIZ",
                  title: "Bảng Vàng 7 Trụ Cột & Mini-Quiz Tốt Nghiệp Bài 13",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Trong bài này, ta đã học:",
                        "• Giới thiệu lại <strong>bài toán MST</strong> (đã có nền tảng từ CS1231).",
                        "• Cài đặt thuật toán <strong>Prim's</strong> &mdash; ôn lại <strong>PriorityQueue ADT</strong>.",
                        "• Cài đặt thuật toán <strong>Kruskal's</strong> &mdash; ôn lại <strong>EdgeList</strong> và kỹ thuật sắp xếp cạnh, ôn lại <strong>Union-Find Disjoint Sets (UFDS)</strong>.",
                        "<em>MST / Prim's / Kruskal's có thể sẽ được học sâu hơn ở môn CS3230.</em>"
                      ]
                    },
                    {
                      type: "component",
                      component: "Chapter13FinalMasterMatrix"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Tổng kết — dễ ra thi)",
                      text: "• <strong>MST:</strong> cây khung có tổng trọng số nhỏ nhất của đồ thị vô hướng, liên thông, có trọng số.<br/>• <strong>Prim's:</strong> greedy, dùng <strong>Priority Queue</strong>, phát triển cây từ 1 đỉnh nguồn, độ phức tạp <strong>O(E log V)</strong>.<br/>• <strong>Kruskal's:</strong> greedy, <strong>sort cạnh</strong> + dùng <strong>UFDS</strong> kiểm tra chu trình, độ phức tạp <strong>O(E log V)</strong> (chủ yếu do bước sort $O(E \\log E)$).<br/>• Cả 2 thuật toán đều dựa trên tính chất tham lam (greedy) và đều cho ra kết quả <strong>đúng là MST</strong> (đã có chứng minh riêng cho từng thuật toán).<br/>• Kruskal's dùng <strong>EdgeList</strong> (không dùng AdjMatrix/AdjList) vì cần sort toàn bộ cạnh."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dsa-b14",
      title: "Bài 14: Thuật toán Bellman-Ford (SSSP & Negative Cycles)",
      sections: [
        {
          id: "dsa-b14-sec0-hero",
          roman: "OVERVIEW",
          title: "Tổng Quan: Đường Đi Ngắn Nhất Trọng Số Âm & Chu Trình Âm",
          subsections: [
            {
              id: "dsa-b14-sub-0-1",
              number: "0.0",
              title: "Tựa Đề & Live Bellman-Ford Workbench",
              parts: [
                {
                  id: "dsa-b14-part-0-hero",
                  label: "TỔNG QUAN TƯƠNG TÁC",
                  title: "Vũ Khí Trọng Số Âm & Dò Tìm Chu Trình Âm",
                  content: [
                    {
                      type: "component",
                      component: "DsaBellmanFordHeroBanner"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b14-sec1",
          roman: "I",
          title: "Phần 1: Bài toán Single-Source Shortest Paths (SSSP)",
          subsections: [
            {
              id: "dsa-b14-sub-1-1",
              number: "1.1",
              title: "Ôn lại định nghĩa cơ bản (Definitions)",
              parts: [
                {
                  id: "dsa-b14-part-1-1-defs",
                  label: "ĐỒ THỊ CÓ HƯỚNG & TRỌNG SỐ",
                  title: "Nền Tảng Đồ Thị Có Hướng & So Sánh MST vs SSSP",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>Vertex set $V$</strong>: tập đỉnh (VD: giao lộ, nhà...).",
                        "• <strong>Edge set $E$</strong>: tập cạnh (VD: đường phố...).",
                        "• <strong>Directed (có hướng)</strong>: đường 1 chiều. Có thể dùng 2 cạnh (bi-directional) để mô hình 1 cạnh vô hướng (undirected). <em>Bài toán MST (đã học trước) làm việc trên đồ thị connected, undirected, weighted.</em>",
                        "• <strong>Weighted (có trọng số)</strong>: khoảng cách, thời gian, phí cầu đường... Hàm trọng số: $w(a, b): E \\to \\mathbb{R}$ &mdash; gán trọng số cho cạnh từ $a$ đến $b$.",
                        "• <strong>Weighted Graph:</strong> $G(V, E), w(a, b): E \\to \\mathbb{R}$."
                      ]
                    },
                    {
                      type: "component",
                      component: "SsspFoundationsStudio"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b14-sub-1-2",
              number: "1.2",
              title: "(Simple) Path",
              parts: [
                {
                  id: "dsa-b14-part-1-2-path",
                  label: "ĐƯỜNG ĐI ĐƠN GIẢN",
                  title: "Đường Đi Đơn Giản & Công Thức Tính Trọng Số PW(p)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Path: $p = (v_0, v_1, v_2, ..., v_k)$ với $(v_i, v_{i+1}) \\in E, 0 \\le i \\le (k-1)$.",
                        "• <strong>Simple:</strong> không có đỉnh lặp lại!",
                        "• Ký hiệu tắt: $v_0 \\xrightarrow{p} v_k$ nghĩa là $p$ là 1 đường đi (path) từ $v_0$ đến $v_k$.",
                        "• <strong>Path weight:</strong> $PW(p) = \\sum_{i=0}^{k-1} w(v_i, v_{i+1})$."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b14-sub-1-3",
              number: "1.3",
              title: "Shortest Path weight",
              parts: [
                {
                  id: "dsa-b14-part-1-3-delta",
                  label: "TRỌNG SỐ ĐƯỜNG ĐI NGẮN NHẤT",
                  title: "Khái Niệm Delta δ(a, b) & Unreachable",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• $\\delta(a, b)$ &mdash; đọc là <em>\"delta\"</em> &mdash; là trọng số đường đi ngắn nhất từ $a$ đến $b$.",
                        "• Nếu tồn tại path: $\\delta(a, b) = \\min(PW(p))$ với mọi $p: a \\to b$.",
                        "• Nếu $b$ không thể đến được từ $a$ (unreachable): $\\delta(a, b) = \\infty$."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b14-sub-1-4",
              number: "1.4",
              title: "Định nghĩa bài toán SSSP",
              parts: [
                {
                  id: "dsa-b14-part-1-4-sssp",
                  label: "BÀI TOÁN SSSP",
                  title: "Chuẩn Hóa Bài Toán Single-Source Shortest Paths",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>Single-Source Shortest Paths (SSSP) Problem:</strong>",
                        "&nbsp;&nbsp;+ Cho: $G(V, E), w(a, b): E \\to \\mathbb{R}$, và 1 đỉnh nguồn $s$ (source vertex).",
                        "&nbsp;&nbsp;+ Tìm: $\\delta(s, b)$ (và đường đi tốt nhất) từ đỉnh $s$ đến <strong>mỗi</strong> đỉnh $b \\in V$.",
                        "&nbsp;&nbsp;+ Tức là: từ <strong>1 nguồn</strong> đến <strong>tất cả các đỉnh còn lại</strong>."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b14-sub-1-5",
              number: "1.5",
              title: "Cấu trúc dữ liệu phụ trợ để giải SSSP",
              parts: [
                {
                  id: "dsa-b14-part-1-5-datastruct",
                  label: "MẢNG D[] & P[]",
                  title: "Mảng Khoảng Cách D[v] & Mảng Đỉnh Cha p[v]",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>Mảng/Vector $D$</strong> kích thước $|V|$ ($D = \\text{\"distance\"}$):",
                        "&nbsp;&nbsp;+ Ban đầu: $D[v] = 0$ nếu $v = s$; ngược lại $D[v] = \\infty$ (số rất lớn).",
                        "&nbsp;&nbsp;+ $D[v]$ giảm dần khi tìm được đường đi tốt hơn.",
                        "&nbsp;&nbsp;+ $D[v] \\ge \\delta(s, v)$ trong suốt quá trình chạy thuật toán.",
                        "&nbsp;&nbsp;+ $D[v] = \\delta(s, v)$ khi thuật toán kết thúc.",
                        "• <strong>Mảng/Vector $p$</strong> kích thước $|V|$ ($p = \\text{predecessor}$ &mdash; đỉnh cha):",
                        "&nbsp;&nbsp;+ $p[v]$ = đỉnh liền trước trên đường đi tốt nhất từ $s$ đến $v$.",
                        "&nbsp;&nbsp;+ $p[s] = \\text{NULL}$ (thường dùng giá trị -1).",
                        "&nbsp;&nbsp;+ Giống cách dùng mảng $p$ trong BFS/DFS Spanning Tree, MST."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b14-sub-1-6",
              number: "1.6",
              title: "Ví dụ minh họa (Example)",
              parts: [
                {
                  id: "dsa-b14-part-1-6-example",
                  label: "VÍ DỤ TRỰC QUAN",
                  title: "Khởi Tạo vs Kết Thúc & Truy Vết Backtrack",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Cho $s = 0$. <strong>Khởi tạo:</strong>",
                        "• $D[s] = D[0] = 0; D[v] = \\infty$ cho các đỉnh còn lại (màu đỏ).",
                        "• $p[s] = -1$ (\"không có predecessor\"); $p[v] = -1$ cho các đỉnh còn lại.",
                        "• Chưa có cạnh cam (orange edges) nào.",
                        "<strong>Sau khi thuật toán kết thúc:</strong>",
                        "• $D[s] = D[0] = 0$ (không đổi).",
                        "• $D[v] = \\delta(s, v)$ cho các đỉnh còn lại &mdash; VD: $D[2] = 6, D[4] = 7$.",
                        "• $p[s] = -1$.",
                        "• $p[v]$ = đỉnh gốc của cạnh cam &mdash; VD: $p[2] = 0, p[4] = 2$."
                      ]
                    },
                    {
                      type: "component",
                      component: "SsspDistancePredecessorWorkbench"
                    },
                    {
                      type: "component",
                      component: "SsspBasicsFlashcards"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 1)",
                      text: "• $\\delta(a,b)$ là trọng số đường đi ngắn nhất, $D[v]$ là giá trị \"đang có\", hội tụ về $\\delta$ khi thuật toán xong.<br/>• $D[v]$ luôn $\\ge \\delta(s,v)$ trong lúc chạy &mdash; chỉ giảm, không tăng.<br/>• $p[v]$ dùng để truy vết lại đường đi ngắn nhất (backtrack path)."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b14-sec2",
          roman: "II",
          title: "Phần 2: Cạnh trọng số âm và chu trình âm (Negative Weight Edges and Cycles)",
          subsections: [
            {
              id: "dsa-b14-sub-2-1",
              number: "2.1",
              title: "Bản chất trọng số âm & Chu trình âm",
              parts: [
                {
                  id: "dsa-b14-part-2-1-negative",
                  label: "HỐ ĐEN CHU TRÌNH ÂM",
                  title: "Chu Trình Âm: Undefined vs Well-defined Shortest Paths",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Cạnh trọng số âm <strong>tồn tại trong thực tế</strong> ở một số ứng dụng (Ví dụ minh họa giả tưởng: có thể \"du hành thời gian\" qua \"time tunnel\" = cạnh có trọng số âm).",
                        "• <strong>Nếu tồn tại negative cycle (chu trình có tổng trọng số âm):</strong>",
                        "&nbsp;&nbsp;+ VD: chu trình $1 \\to 2 \\to 1$ có tổng trọng số âm &rarr; là 1 <strong>negative cycle</strong>.",
                        "&nbsp;&nbsp;+ Có thể đi lặp vô hạn $0 \\to 1 \\to 2 \\to 1 \\to 2 \\to 1 \\to ...$ để đạt tổng trọng số $\\to -\\infty$.",
                        "&nbsp;&nbsp;+ &rArr; Shortest path từ 0 đến $\{1, 2, 3\}$ là <strong>undefined</strong> (không xác định).",
                        "&nbsp;&nbsp;+ Nhưng shortest path từ 0 đến 4 vẫn <strong>ổn (well-defined)</strong>: $\\delta(0, 4) = -99$ (không đi qua negative cycle)."
                      ]
                    },
                    {
                      type: "component",
                      component: "NegativeWeightCycleSimulator"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 2)",
                      text: "• Nếu đường đi ngắn nhất phải đi qua 1 negative cycle &rarr; shortest path <strong>không xác định</strong> (có thể giảm vô hạn).<br/>• Chỉ cần <strong>không đi qua</strong> negative cycle thì shortest path vẫn tính được bình thường."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b14-sec3",
          roman: "III",
          title: "Phần 3: Các thuật toán giải SSSP & 2 Khối Xây Dựng Cốt Tử",
          subsections: [
            {
              id: "dsa-b14-sub-3-1",
              number: "3.1",
              title: "Tổng quan thuật toán & Bước khởi tạo initSSSP(s)",
              parts: [
                {
                  id: "dsa-b14-part-3-1-init",
                  label: "KHỞI TẠO INITSSSP",
                  title: "Khối Xây Dựng 1: Khởi Tạo Toàn Cục initSSSP(s)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Có 3 thuật toán được đề cập trong bài:</strong>",
                        "1. <strong>O(V+E) BFS</strong> &rarr; thất bại (fail) với trường hợp tổng quát của SSSP.",
                        "2. <strong>O(V · E) Bellman-Ford's SSSP algorithm:</strong>",
                        "&nbsp;&nbsp;+ Ý tưởng tổng quát của thuật toán SSSP.",
                        "&nbsp;&nbsp;+ Trick để đảm bảo thuật toán dừng (termination).",
                        "&nbsp;&nbsp;+ Bonus: phát hiện negative weight cycle.",
                        "3. <em>(Phần III của loạt bài &mdash; chưa nằm trong slide này / Dijkstra).</em>",
                        "<strong>Bước khởi tạo &mdash; initSSSP(s) (Dùng chung cho mọi thuật toán SSSP):</strong>",
                        "<code>initSSSP(s)</code>",
                        "&nbsp;&nbsp;<code>for each v in V:</code>",
                        "&nbsp;&nbsp;&nbsp;&nbsp;<code>D[v] &larr; 1000000000</code> // dùng 1B để đại diện cho INF",
                        "&nbsp;&nbsp;&nbsp;&nbsp;<code>p[v] &larr; -1</code> // dùng -1 để đại diện cho NULL",
                        "&nbsp;&nbsp;<code>D[s] &larr; 0</code> // đây là điều ta biết chắc từ đầu"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b14-sub-3-2",
              number: "3.2",
              title: "Phép toán \"Relax\" (Nới lỏng cạnh)",
              parts: [
                {
                  id: "dsa-b14-part-3-2-relax",
                  label: "PHÉP TOÁN RELAX",
                  title: "Khối Xây Dựng 2: Phép Toán Nới Lỏng Relax(u, v, w)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Là tên viết tắt cho hành động: <strong>\"nếu đường đi ngắn hơn tồn tại thì cập nhật lại\"</strong>.",
                        "<code>relax(u, v, w_u_v)</code>",
                        "&nbsp;&nbsp;<code>if D[v] > D[u] + w_u_v:</code> // nếu SP có thể được rút ngắn qua cạnh này",
                        "&nbsp;&nbsp;&nbsp;&nbsp;<code>D[v] &larr; D[u] + w_u_v</code> // relax cạnh này",
                        "&nbsp;&nbsp;&nbsp;&nbsp;<code>p[v] &larr; u</code> // ghi nhớ/cập nhật predecessor",
                        "<strong>Minh họa:</strong> đỉnh $u$ có $D[u]=4$, đỉnh $v$ có $D[v]=9$, cạnh $(u, v)$ có trọng số 4.",
                        "• Vì $D[u] + w = 4 + 4 = 8 < D[v] = 9 \\implies$ relax: $D[v] = 8, p[v] = u$."
                      ]
                    },
                    {
                      type: "component",
                      component: "SsspBuildingBlocksStudio"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 3)",
                      text: "• <code>initSSSP(s)</code> và <code>relax(u, v, w)</code> là 2 khối xây dựng (building blocks) dùng chung cho mọi thuật toán SSSP.<br/>• <strong>Relax</strong> = so sánh \"đi thẳng $D[v]$\" với \"đi qua $u$ rồi tới $v$ ($D[u]+w$)\", chọn đường ngắn hơn."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b14-sec4",
          roman: "IV",
          title: "Phần 4: Ôn lại BFS – vì sao không dùng được cho SSSP tổng quát",
          subsections: [
            {
              id: "dsa-b14-sub-4-1",
              number: "4.1",
              title: "BFS trên đồ thị không trọng số",
              parts: [
                {
                  id: "dsa-b14-part-4-1-unweighted",
                  label: "ĐỒ THỊ KHÔNG TRỌNG SỐ",
                  title: "BFS Đếm Số Cạnh & BFS Spanning Tree = Shortest Paths Tree",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Khi đồ thị <strong>unweighted</strong> (không trọng số), SSSP có thể xem là bài toán tìm <strong>số cạnh ít nhất</strong> đi từ $s$ đến các đỉnh khác.",
                        "• $(*)$ có thể xem mỗi cạnh có trọng số 1 hoặc trọng số hằng số như nhau.",
                        "• Thuật toán <strong>O(V+E) BFS</strong> đo chính xác điều này.",
                        "• <strong>BFS Spanning Tree = Shortest Paths Spanning Tree</strong> (khi đồ thị không trọng số)."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b14-sub-4-2",
              number: "4.2",
              title: "Modified BFS – chỉnh sửa BFS để tính SSSP",
              parts: [
                {
                  id: "dsa-b14-part-4-2-mods",
                  label: "3 ĐIỂM CẢI TIẾN",
                  title: "Chuyển Đổi BFS Truyền Thống Sang Modified BFS",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>3 sửa đổi đơn giản:</strong>",
                        "1. Đổi tên <code>visited</code> thành <code>D</code>.",
                        "2. Ở đầu BFS: đặt $D[v] = \\text{INF}$ (VD: 1B) cho tất cả $v \\in G$, trừ <strong>$D[s] = 0$</strong>.",
                        "3. Đổi đoạn trong vòng lặp BFS từ <code>visited[v] = 1</code> thành <code>D[v] = D[u] + 1</code> (v cách u đúng 1 bước)."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b14-sub-4-3",
              number: "4.3",
              title: "Modified BFS Pseudo Code (bản đầy đủ)",
              parts: [
                {
                  id: "dsa-b14-part-4-3-fullcode",
                  label: "MÃ GIẢ ĐẦY ĐỦ",
                  title: "Mã Giả Chi Tiết Modified BFS Với Hàng Đợi Queue",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<code>for all v in V: D[v] &larr; INF; p[v] &larr; -1</code>",
                        "<code>Q &larr; {s}; D[s] &larr; 0</code>",
                        "<code>while Q is not empty:</code>",
                        "&nbsp;&nbsp;<code>u &larr; Q.dequeue()</code>",
                        "&nbsp;&nbsp;<code>for all v adjacent to u:</code>",
                        "&nbsp;&nbsp;&nbsp;&nbsp;<code>if D[v] == INF:</code>",
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>D[v] &larr; D[u] + 1; p[v] &larr; u; Q.enqueue(v)</code>"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b14-sub-4-4",
              number: "4.4",
              title: "Modified BFS Pseudo Code – dạng đơn giản (dùng relax)",
              parts: [
                {
                  id: "dsa-b14-part-4-4-relaxcode",
                  label: "MÃ GIẢ DÙNG RELAX",
                  title: "Dạng Đơn Giản Tối Ưu Với Khối Xây Dựng relax(u, v, 1)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<code>initSSSP(s); Q &larr; {s}</code>",
                        "<code>while Q is not empty:</code>",
                        "&nbsp;&nbsp;<code>u &larr; Q.dequeue()</code>",
                        "&nbsp;&nbsp;<code>for all v adjacent to u: relax(u, v, 1)</code> // trọng số luôn là 1"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b14-sub-4-5",
              number: "4.5",
              title: "BFS thất bại trên trường hợp tổng quát",
              parts: [
                {
                  id: "dsa-b14-part-4-5-counterexample",
                  label: "VÍ DỤ PHẢN CHỨNG",
                  title: "Cạm Bẫy Đường Vòng (Detour): BFS Báo Sai Đường Đi Ngắn Nhất",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Ví dụ: shortest path từ 0 đến 2 <strong>không phải</strong> là path $0 \\to 2$ (trọng số 9), mà là \"đường vòng\" (detour) $0 \\to 1 \\to 3 \\to 4 \\to 2$ với trọng số $2+3+2+1 = \\mathbf{8}$.",
                        "• BFS <strong>không phát hiện</strong> được điều này, chỉ báo path $0 \\to 2$ (kết quả <strong>sai</strong>).",
                        "• <strong>Rule of Thumb:</strong> Nếu chắc chắn đồ thị là <strong>unweighted</strong> (mọi cạnh trọng số 1 hoặc hằng số như nhau), thì giải SSSP bằng thuật toán <strong>O(V+E) BFS</strong> hiệu quả hơn."
                      ]
                    },
                    {
                      type: "component",
                      component: "ModifiedBfsVsGeneralSsspDuel"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 4)",
                      text: "• BFS chỉ đúng cho SSSP khi đồ thị <strong>không trọng số</strong> (hoặc trọng số bằng nhau).<br/>• Với đồ thị có trọng số khác nhau, BFS có thể cho kết quả <strong>sai</strong> vì nó chỉ đếm số cạnh, không quan tâm tổng trọng số.<br/>• Cần thuật toán khác cho trường hợp tổng quát &rarr; <strong>Bellman-Ford</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b14-sec5",
          roman: "V",
          title: "Phần 5: Thuật toán Bellman-Ford (Bellman-Ford's SSSP Algorithm)",
          subsections: [
            {
              id: "dsa-b14-sub-5-1",
              number: "5.1",
              title: "Khái niệm",
              parts: [
                {
                  id: "dsa-b14-part-5-1-concept",
                  label: "Ý TƯỞNG CỐT LÕI",
                  title: "Nới Lỏng Toàn Bộ Cạnh E Lặp Lại |V| - 1 Lần",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Bellman-Ford giải SSSP cho đồ thị trọng số <strong>tổng quát</strong> (kể cả có cạnh âm), chạy trong <strong>O(V · E)</strong>.",
                        "• <strong>Ý tưởng:</strong> <strong>relax tất cả các cạnh $E$, lặp lại $|V| - 1$ lần</strong>."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b14-sub-5-2",
              number: "5.2",
              title: "Pseudo code & Độ phức tạp",
              parts: [
                {
                  id: "dsa-b14-part-5-2-code",
                  label: "MÃ GIẢ & ĐỘ PHỨC TẠP",
                  title: "Cấu Trúc 2 Vòng Lặp Lồng Nhau O(V · E)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<code>BellmanFord-SSSP(s)</code>",
                        "&nbsp;&nbsp;<code>initSSSP(s)</code> // O(V) ở đây",
                        "&nbsp;&nbsp;<code>for i = 1 to |V| - 1</code> // O(V) ở đây",
                        "&nbsp;&nbsp;&nbsp;&nbsp;<code>for each edge (u, v) in E</code> // O(E) ở đây",
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>relax(u, v, w_u_v)</code> // O(1) ở đây",
                        "• Ở cuối thuật toán Bellman-Ford, $D[v] = \\delta(s, v)$ nếu không tồn tại negative weight cycle.",
                        "• <strong>Độ phức tạp:</strong> $O(V) \\times O(E) = \\mathbf{O(V \\cdot E)}$."
                      ]
                    },
                    {
                      type: "component",
                      component: "BellmanFordAlgorithmExecutionStudio"
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b14-sub-5-3",
              number: "5.3",
              title: "Ví dụ chạy trên VisuAlgo (CP3 4.17)",
              parts: [
                {
                  id: "dsa-b14-part-5-3-visualgo",
                  label: "MÔ PHỎNG VISUALGO",
                  title: "Mô Phỏng Trực Quan Từng Pass Nới Lỏng Danh Sách Cạnh E",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Chạy Bellman-Ford từ nhiều nguồn khác nhau trên đồ thị mẫu (CP3 4.17).",
                        "• Pass đầu tiên: relax <strong>toàn bộ $E$ cạnh</strong> của `BellmanFord(0)`."
                      ]
                    },
                    {
                      type: "component",
                      component: "BellmanFordVisuAlgoPassTraceSandbox"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 5)",
                      text: "• Bellman-Ford &mdash; lặp <strong>|V| - 1 vòng</strong>, mỗi vòng relax <strong>tất cả cạnh E</strong>.<br/>• Độ phức tạp: <strong>O(V · E)</strong>.<br/>• Hoạt động đúng cả khi có cạnh trọng số âm (miễn không có negative cycle ảnh hưởng đến path cần tính)."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b14-sec6",
          roman: "VI",
          title: "Phần 6: Chứng minh tính đúng đắn (Theorem & Proof)",
          subsections: [
            {
              id: "dsa-b14-sub-6-1",
              number: "6.1",
              title: "Theorem 1: Shortest path là simple path (khi không có negative cycle)",
              parts: [
                {
                  id: "dsa-b14-part-6-1-thm1",
                  label: "ĐỊNH LÝ 1",
                  title: "Chứng Minh Phản Chứng: Đường Đi Ngắn Nhất Luôn Là Simple Path",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>Theorem 1:</strong> Nếu $G = (V, E)$ không chứa negative weight cycle, thì đường đi ngắn nhất $p$ từ $s$ đến $v$ là <strong>simple path</strong> (không lặp đỉnh).",
                        "<strong>Proof by Contradiction (7 bước):</strong>",
                        "1. Giả sử shortest path $p$ <strong>không phải</strong> simple path.",
                        "2. Khi đó $p$ chứa 1 (hoặc nhiều) chu trình (cycle).",
                        "3. Giả sử có chu trình $c$ trong $p$ với <strong>trọng số dương</strong> ($w(c) > 0$).",
                        "4. Nếu loại bỏ $c$ khỏi $p$ &rarr; ta có 1 \"shortest path\" <strong>ngắn hơn</strong> $p$.",
                        "5. &rarr; Mâu thuẫn với việc $p$ là shortest path.",
                        "6. Kể cả nếu $c$ là chu trình có <strong>tổng trọng số bằng 0</strong> (vẫn có thể xảy ra), ta vẫn có thể loại bỏ $c$ khỏi $p$ mà <strong>không làm tăng</strong> trọng số của $p$.",
                        "7. Vậy: $p$ là simple path (từ điểm 5), hoặc luôn có thể biến thành simple path (từ điểm 6).",
                        "• <strong>Hệ quả:</strong> đường đi $p$ có <strong>tối đa $|V| - 1$ cạnh</strong> từ nguồn $s$ đến đỉnh \"xa nhất có thể\" $v$ trong $G$."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-b14-sub-6-2",
              number: "6.2",
              title: "Theorem 2: Sau khi Bellman-Ford kết thúc, D[v] = delta(s, v), ∀v ∈ V",
              parts: [
                {
                  id: "dsa-b14-part-6-2-thm2",
                  label: "ĐỊNH LÝ 2",
                  title: "Chứng Minh Quy Nạp & Thứ Tự Duyệt Cạnh Tệ Nhất (Worst-Case)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Proof by Induction:</strong>",
                        "1. Xét shortest path $p$ từ $s$ đến $v_k$ ($p$ có số cạnh ít nhất). Trong đó $v_i$ là đỉnh mà shortest path từ $s$ cần $i$ hops (số cạnh) để đến.",
                        "2. Ban đầu: $D[v_0] = \\delta(s, v_0) = 0$, vì $v_0$ chính là $s$.",
                        "3. Sau <strong>1 pass</strong> qua $E$: $D[v_1] = \\delta(s, v_1)$.",
                        "4. Sau <strong>2 passes</strong> qua $E$: $D[v_2] = \\delta(s, v_2), ...$",
                        "5. Sau <strong>$k$ passes</strong> qua $E$: $D[v_k] = \\delta(s, v_k)$.",
                        "6. Khi không có negative weight cycle, shortest path $p$ sẽ là <strong>simple path</strong> (theo Theorem 1).",
                        "7. Vậy sau <strong>$|V| - 1$ iterations</strong>, đỉnh \"xa nhất\" $v_{|V|-1}$ từ $s$ có: <strong>$D[v_{|V|-1}] = \\delta(s, v_{|V|-1})$</strong> (Đúng ngay cả khi các cạnh trong $E$ được duyệt theo <strong>thứ tự tệ nhất có thể</strong>)."
                      ]
                    },
                    {
                      type: "component",
                      component: "BellmanFordTheoremsProofStudio"
                    },
                    {
                      type: "component",
                      component: "BellmanFordMasterFlashcards"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 6)",
                      text: "• Vì shortest path (không có negative cycle) tối đa có $|V| - 1$ cạnh &rarr; cần đúng <strong>|V| - 1 lần relax toàn bộ E</strong> là đủ để hội tụ, bất kể thứ tự duyệt cạnh.<br/>• Đây chính là lý do vòng lặp ngoài của Bellman-Ford chạy từ 1 đến $|V| - 1$."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b14-sec7",
          roman: "VII",
          title: "Phần 7: \"Side Effect\": Phát hiện Negative Weight Cycle",
          subsections: [
            {
              id: "dsa-b14-sub-7-1",
              number: "7.1",
              title: "Kỹ thuật kiểm tra thêm ở Pass thứ |V| & Hệ quả Corollary",
              parts: [
                {
                  id: "dsa-b14-part-7-1-sideeffect",
                  label: "SIDE EFFECT CỐT TỬ",
                  title: "Dò Tìm Chu Trình Âm Bằng Lượt Quét Thứ |V|",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>Corollary:</strong> Nếu giá trị $D[v]$ <strong>không hội tụ</strong> (fails to converge) sau $|V|-1$ pass, thì tồn tại 1 <strong>negative-weight cycle</strong> có thể đến được (reachable) từ nguồn $s$.",
                        "• <strong>Cách kiểm tra thêm sau khi chạy xong Bellman-Ford (pass thứ $|V|$):</strong>",
                        "<code>for each edge(u, v) in E:</code>",
                        "&nbsp;&nbsp;<code>if D[v] > D[u] + w(u, v):</code>",
                        "&nbsp;&nbsp;&nbsp;&nbsp;<code>report negative weight cycle exists in G</code>",
                        "• Nếu sau $|V|-1$ vòng mà <strong>vẫn còn cạnh có thể relax được</strong> &rarr; nghĩa là có negative cycle."
                      ]
                    },
                    {
                      type: "component",
                      component: "NegativeCycleDetectionStudio"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 7)",
                      text: "• Đây là <strong>bonus/side-effect</strong> quan trọng của Bellman-Ford: vừa tính SSSP, vừa <strong>phát hiện được negative cycle</strong>.<br/>• <strong>Cách làm:</strong> chạy thêm 1 lượt kiểm tra relax (lần thứ $|V|$) &mdash; nếu vẫn còn relax được thì có negative cycle."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b14-sec8",
          roman: "VIII",
          title: "Phần 8: Cài đặt Java (Java Implementation)",
          subsections: [
            {
              id: "dsa-b14-sub-8-1",
              number: "8.1",
              title: "Mã nguồn Java & 3 Trường hợp Demo hiệu năng",
              parts: [
                {
                  id: "dsa-b14-part-8-1-java",
                  label: "CÀI ĐẶT JAVA",
                  title: "Mã Nguồn BellmanFordDemo.java & Đảm Bảo Tính Dừng",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Xem file <strong>BellmanFordDemo.java</strong>.",
                        "• Cài đặt bằng <strong>AdjacencyList</strong> (hoặc <strong>EdgeList</strong>) để đạt $O(VE)$ Bellman-Ford.",
                        "<strong>Các trường hợp demo hiệu năng:</strong>",
                        "1. Đồ thị nhỏ, <strong>không</strong> có negative weight cycle &rarr; OK, chạy trong $O(VE)$.",
                        "2. Đồ thị nhỏ, <strong>có</strong> negative weight cycle &rarr; Vẫn dừng (terminate) trong $O(VE)$, đồng thời báo cáo negative weight cycle tồn tại.",
                        "3. Đồ thị nhỏ, có <strong>một số cạnh âm</strong> nhưng <strong>không có</strong> negative cycle &rarr; OK."
                      ]
                    },
                    {
                      type: "component",
                      component: "BellmanFordJavaImplementationWorkbench"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 8)",
                      text: "• Bellman-Ford có thể cài bằng <strong>AdjacencyList</strong> hoặc <strong>EdgeList</strong>, độ phức tạp không đổi $O(VE)$.<br/>• Kể cả khi có negative cycle, thuật toán vẫn <strong>dừng đúng lúc</strong> (sau $|V|$ pass) và báo được lỗi, không chạy vô hạn."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b14-sec9",
          roman: "IX",
          title: "Phần 9: Tổng kết (Summary)",
          subsections: [
            {
              id: "dsa-b14-sub-9-1",
              number: "9.1",
              title: "Tổng kết bức tranh SSSP & 8 Quy tắc vàng",
              parts: [
                {
                  id: "dsa-b14-part-9-1-summary",
                  label: "TỔNG KẾT TOÀN BỘ BÀI 14",
                  title: "Bức Tranh Toàn Cảnh SSSP & 8 Quy Tắc Cốt Tử",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Giới thiệu bài toán <strong>SSSP</strong> (Single-Source Shortest Paths).",
                        "• Ôn lại thuật toán <strong>BFS</strong> cho SSSP không trọng số (unweighted) &mdash; nhưng <strong>thất bại</strong> ở trường hợp tổng quát.",
                        "• Giới thiệu thuật toán <strong>Bellman-Ford</strong>:",
                        "&nbsp;&nbsp;+ Giải SSSP cho đồ thị trọng số tổng quát (<strong>weighted graph</strong>) trong <strong>O(VE)</strong>.",
                        "&nbsp;&nbsp;+ Cũng có thể dùng để <strong>phát hiện sự tồn tại của negative weight cycle</strong>.",
                        "<strong>📌 Cần nhớ (tổng hợp toàn bài):</strong>",
                        "• <strong>SSSP</strong>: tìm $\\delta(s, v)$ từ 1 nguồn $s$ đến mọi đỉnh $v$.",
                        "• <strong>D[v]</strong>: giá trị khoảng cách hiện tại ($\\ge \\delta$, hội tụ về $\\delta$ khi xong); <strong>p[v]</strong>: predecessor để truy vết path.",
                        "• <strong>relax(u, v, w)</strong>: nếu $D[u] + w < D[v]$ thì cập nhật $D[v]$ và $p[v]$.",
                        "• <strong>BFS</strong> chỉ đúng cho đồ thị <strong>không trọng số</strong>.",
                        "• <strong>Bellman-Ford</strong>: relax <strong>toàn bộ $E$</strong>, lặp <strong>|V|-1 lần</strong> &rarr; <strong>O(VE)</strong>.",
                        "• Đúng với cả cạnh trọng số <strong>âm</strong>, miễn shortest path không đi qua <strong>negative cycle</strong>.",
                        "• Chạy thêm 1 vòng relax thứ <strong>|V|</strong> để <strong>phát hiện negative cycle</strong> (nếu vẫn relax được thì có cycle âm).",
                        "• Nếu có negative cycle trên đường đi &rarr; shortest path đó <strong>undefined (-∞)</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "BellmanFordMasterSummaryMatrix"
                    },
                    {
                      type: "component",
                      component: "BellmanFordChapter14FinalExamFlashcards"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Tổng kết toàn bài 14)",
                      text: "• SSSP unweighted &rarr; BFS $O(V+E)$.<br/>• SSSP weighted & có cạnh âm &rarr; Bellman-Ford $O(VE)$ ($V-1$ vòng relax + pass thứ $|V|$ dò chu trình âm).<br/>• Shortest path đi qua chu trình âm &rarr; Undefined ($-\\infty$)."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dsa-b15",
      title: "Bài 15: Thuật toán Dijkstra",
      sections: [
        {
          id: "dsa-b15-sec0-hero",
          roman: "OVERVIEW",
          title: "Tổng Quan: Thuật Toán Dijkstra & Chiến Lược Tham Lam O((V+E)logV)",
          subsections: [
            {
              id: "dsa-b15-sub-0-1",
              number: "0.0",
              title: "Tựa Đề & Live Dijkstra Pathfinder Workbench",
              parts: [
                {
                  id: "dsa-b15-part-0-hero",
                  label: "TỔNG QUAN TƯƠNG TÁC",
                  title: "Chiến Thần Tìm Đường Siêu Tốc & Min-Heap Priority Queue",
                  content: [
                    {
                      type: "component",
                      component: "DsaDijkstraHeroBanner"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b15-sec1",
          roman: "I",
          title: "Phần 1: Dàn bài (Outline)",
          subsections: [
            {
              id: "dsa-b15-sub-1-1",
              number: "1.1",
              title: "4 Trường hợp đặc biệt (Special Cases) của SSSP",
              parts: [
                {
                  id: "dsa-b15-part-1-1-outline",
                  label: "DÀN BÀI",
                  title: "4 Biến Thể Đặc Biệt Của Bài Toán SSSP Cổ Điển",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>4 trường hợp đặc biệt (special cases) của bài toán SSSP cổ điển:</strong>",
                        "&nbsp;&nbsp;+ <strong>Special Case 1:</strong> Đồ thị là <strong>tree</strong> (cây) &rarr; $O(V)$.",
                        "&nbsp;&nbsp;+ <strong>Special Case 2:</strong> Đồ thị <strong>unweighted</strong> (không trọng số) &rarr; $O(V+E)$.",
                        "&nbsp;&nbsp;+ <strong>Special Case 3:</strong> Đồ thị <strong>directed và acyclic (DAG)</strong> &rarr; $O(V+E)$.",
                        "&nbsp;&nbsp;+ <strong>Special Case 4ab:</strong> Đồ thị <strong>không có negative weight/cycle</strong> &rarr; Dijkstra $O((V+E)\\log V)$.",
                        "• Ôn lại bài toán SSSP, với chế độ test của VisuAlgo."
                      ]
                    },
                    {
                      type: "component",
                      component: "SsspSpecialCasesRoadmapStudio"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b15-sec2",
          roman: "II",
          title: "Phần 2: Dạng cơ bản & Các biến thể (Basic Form & Variants)",
          subsections: [
            {
              id: "dsa-b15-sub-2-1",
              number: "2.1",
              title: "Triết lý thêm giả định để đơn giản hóa bài toán",
              parts: [
                {
                  id: "dsa-b15-part-2-1-variants",
                  label: "TRIẾT LÝ TỐI ƯU",
                  title: "Thêm Giả Định Về Đồ Thị Để Đạt Thuật Toán Nhanh Hơn",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Bài này ôn lại chủ đề đã học ở bài trước: bài toán <strong>Single-Source Shortest Paths (SSSP)</strong>.",
                        "• <strong>Ý tưởng:</strong> 1 bài toán có thể trở nên \"đơn giản hơn\" nếu ta thêm 1 số <strong>giả định (assumptions)</strong>.",
                        "• Các biến thể (special cases) này <strong>có thể có thuật toán tốt hơn</strong>.",
                        "• <em>PS:</em> Một số biến thể có thể phức tạp hơn dạng cơ bản, nhưng thường thì ta thêm giả định để <strong>đơn giản hóa</strong> bài toán."
                      ]
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 2)",
                      text: "• <strong>Ý tưởng chủ đạo của bài:</strong> thêm giả định về đồ thị &rarr; có thuật toán SSSP <strong>nhanh hơn</strong> Bellman-Ford ($O(VE)$)."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b15-sec3",
          roman: "III",
          title: "Phần 3: Special Case 1: Đồ thị trọng số là 1 Tree (Cây)",
          subsections: [
            {
              id: "dsa-b15-sub-3-1",
              number: "3.1",
              title: "Tính chất đường đi duy nhất & Độ phức tạp O(V)",
              parts: [
                {
                  id: "dsa-b15-part-3-1-tree",
                  label: "SPECIAL CASE 1",
                  title: "Giải SSSP Trên Cây Dễ Hơn Vì Mọi Path Đều Là Shortest Path",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Khi đồ thị trọng số là <strong>tree (cây)</strong>, giải SSSP dễ hơn nhiều vì <strong>mọi path trong cây đều là shortest path</strong>.",
                        "&nbsp;&nbsp;+ <strong>Q1: Vì sao?</strong> &rarr; Vì Tree có $E = V - 1$, giữa 2 đỉnh chỉ có duy nhất 1 (simple) path, không có đường đi khác để so sánh.",
                        "&nbsp;&nbsp;+ Sẽ <strong>không có negative weight cycle</strong> nào. <strong>Q2: Vì sao?</strong> &rarr; Vì cây không có chu trình (acyclic).",
                        "&nbsp;&nbsp;+ Do đó, bất kỳ thuật toán duyệt đồ thị <strong>O(V)</strong> nào &mdash; <strong>DFS hoặc BFS</strong> &mdash; đều có thể dùng để giải SSSP này.",
                        "&nbsp;&nbsp;+ <strong>Q3: Vì sao là O(V) mà không phải O(V+E) tiêu chuẩn?</strong> &rarr; Vì tree có $E = V - 1$, nên $O(V+E) = O(V + V - 1) = \\mathbf{O(V)}$.",
                        "• <em>Lưu ý quan trọng:</em> có thể thử ở PS5 Subtask A.",
                        "• <strong>3.1. Thử trên VisuAlgo:</strong>",
                        "&nbsp;&nbsp;+ (Tạm thời dùng Bellman-Ford's hoặc Dijkstra's trong VisuAlgo).",
                        "&nbsp;&nbsp;+ Thử tìm shortest path từ đỉnh nguồn 0 đến các đỉnh khác trong cây trọng số (undirected).",
                        "&nbsp;&nbsp;+ Sẽ luôn gặp <strong>duy nhất 1 (simple) path</strong> giữa 2 đỉnh bất kỳ.",
                        "&nbsp;&nbsp;+ Thử thêm cạnh trọng số âm &mdash; <strong>không ảnh hưởng</strong> gì nếu đồ thị là tree."
                      ]
                    },
                    {
                      type: "component",
                      component: "TreeSsspUniquePathWorkbench"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 3)",
                      text: "• <strong>Tree:</strong> $E = V - 1$ &rarr; mọi path là unique và cũng chính là shortest path.<br/>• Tree không thể có cycle &rarr; không thể có negative weight cycle.<br/>• Dùng <strong>DFS/BFS</strong>, độ phức tạp <strong>O(V)</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b15-sec4",
          roman: "IV",
          title: "Phần 4: Special Case 2: Đồ thị Unweighted (Không trọng số)",
          subsections: [
            {
              id: "dsa-b15-sub-4-1",
              number: "4.1",
              title: "Giải pháp O(V+E) BFS & So sánh với Tree",
              parts: [
                {
                  id: "dsa-b15-part-4-1-unweighted",
                  label: "SPECIAL CASE 2",
                  title: "Đồ Thị Không Trọng Số: Chỉ Dùng BFS",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Đã thảo luận ở tuần trước (bài Bellman-Ford).",
                        "• <strong>Giải pháp: $O(V+E)$ BFS</strong>.",
                        "• <strong>Lưu ý quan trọng:</strong>",
                        "&nbsp;&nbsp;+ Với SSSP trên đồ thị <strong>unweighted</strong>, ta <strong>chỉ có thể dùng BFS</strong>.",
                        "&nbsp;&nbsp;+ Với SSSP trên <strong>tree</strong>, ta có thể dùng <strong>cả DFS/BFS</strong>.",
                        "&nbsp;&nbsp;+ Có thể thử ở PS5 Subtask A+B.",
                        "• <strong>4.1. Thử trên VisuAlgo:</strong>",
                        "&nbsp;&nbsp;+ Đồ thị này unweighted (tức mọi cạnh trọng số = 1).",
                        "&nbsp;&nbsp;+ Thử tìm shortest path từ đỉnh nguồn 0 đến các đỉnh khác bằng <strong>BFS</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "UnweightedBfsOnlyShowdown"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 4)",
                      text: "• <strong>Unweighted graph</strong> &rarr; chỉ dùng được <strong>BFS</strong> (không dùng DFS được, khác với trường hợp tree).<br/>• Độ phức tạp: <strong>O(V + E)</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b15-sec5",
          roman: "V",
          title: "Phần 5: Special Case 3: Đồ thị có trọng số, Directed & Acyclic (DAG)",
          subsections: [
            {
              id: "dsa-b15-sub-5-1",
              number: "5.1",
              title: "1 Pass Relax theo Topological Order & Tiền đề DP",
              parts: [
                {
                  id: "dsa-b15-part-5-1-dag",
                  label: "SPECIAL CASE 3",
                  title: "Đồ Thị DAG: Đúng 1 Pass Relax Theo Thứ Tự Topological Sort",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>Cycle</strong> là vấn đề lớn (major issue) trong SSSP.",
                        "• Khi đồ thị là <strong>acyclic</strong> (không có chu trình), ta có thể <strong>chỉnh sửa (modify)</strong> thuật toán Bellman-Ford:",
                        "&nbsp;&nbsp;+ Thay vòng lặp ngoài cùng <strong>V-1 lần</strong> bằng <strong>chỉ 1 pass (1 lượt)</strong>.",
                        "&nbsp;&nbsp;+ Tức là chỉ chạy relaxation qua tất cả các cạnh <strong>1 lần duy nhất</strong>.",
                        "&nbsp;&nbsp;+ Nhưng phải theo <strong>thứ tự topological (topological order)</strong> &mdash; nhắc lại toposort ở Lecture 06.",
                        "• <strong>Vì sao cách này hoạt động?</strong>",
                        "&nbsp;&nbsp;+ Chi tiết hơn sẽ học ở bài giới thiệu <strong>Dynamic Programming (Week 10)</strong>.",
                        "• <strong>5.1. Thử trên VisuAlgo:</strong>",
                        "&nbsp;&nbsp;+ Topological Sort của DAG này là <strong>{0, 2, 1, 3, 4, 5}</strong>.",
                        "&nbsp;&nbsp;+ Thử relax các cạnh đi ra (outgoing edges) của các đỉnh theo đúng <strong>thứ tự topological</strong> ở trên.",
                        "&nbsp;&nbsp;+ Chỉ với <strong>1 pass</strong>, tất cả các đỉnh sẽ có <code>dist[v]</code> đúng.",
                        "&nbsp;&nbsp;+ <em>(Nội dung này sẽ được ôn lại ở Lecture 10).</em>"
                      ]
                    },
                    {
                      type: "component",
                      component: "DagTopologicalOnePassStudio"
                    },
                    {
                      type: "component",
                      component: "SsspSpecialCasesFlashcards"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 5)",
                      text: "• <strong>DAG</strong> &rarr; chỉ cần <strong>1 pass relax</strong> theo đúng <strong>topological order</strong>, không cần lặp V-1 lần như Bellman-Ford.<br/>• Đây là <strong>tiền đề (precursor) cho Dynamic Programming</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b15-sec6",
          roman: "VI",
          title: "Phần 6: Special Case 4a: Đồ thị không có trọng số âm (no negative weight)",
          subsections: [
            {
              id: "dsa-b15-sub-6-1",
              number: "6.1",
              title: "Bối cảnh thế giới thực & Lý do cần thuật toán Dijkstra",
              parts: [
                {
                  id: "dsa-b15-part-6-1-noneg",
                  label: "SPECIAL CASE 4A",
                  title: "Trọng Số Không Âm: Cánh Cửa Dẫn Tới Tốc Độ Vượt Trội",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Thuật toán <strong>Bellman-Ford</strong> hoạt động tốt cho <strong>mọi trường hợp</strong> SSSP trên đồ thị có trọng số, nhưng chạy trong <strong>O(VE)</strong>.",
                        "• Với đồ thị \"kích thước hợp lý\" ($V \\sim 1000, E \\sim 100000$ &mdash; nhớ lại $E = O(V^2)$ trong đồ thị đơn dày đặc), Bellman-Ford <strong>thực sự \"chậm\"</strong>.",
                        "• Trong nhiều trường hợp thực tế, bài toán SSSP được thực hiện trên đồ thị mà <strong>mọi cạnh đều có trọng số không âm (non-negative)</strong>.",
                        "• <em>Ví dụ:</em> Di chuyển giữa 2 thành phố trên bản đồ (graph) thường tốn 1 lượng thời gian \"dương\".",
                        "• May mắn thay, có 1 thuật toán SSSP <strong>nhanh hơn</strong> khai thác tính chất này: <strong>thuật toán Dijkstra's</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "DijkstraMotivationBridgeStudio"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 6)",
                      text: "• <strong>Bellman-Ford:</strong> Dùng cho mọi trường hợp nhưng $O(VE)$, chậm với đồ thị lớn.<br/>• Khi biết chắc đồ thị <strong>không có cạnh âm</strong> &rarr; dùng <strong>Dijkstra's</strong> để nhanh hơn."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b15-sec7",
          roman: "VII",
          title: "Phần 7: DIJKSTRA'S ALGORITHM – Phiên bản gốc (The 'original version')",
          subsections: [
            {
              id: "dsa-b15-sub-7-1",
              number: "7.1",
              title: "Ý tưởng chính (Key Ideas) & Ví dụ VisuAlgo CP3 4.17",
              parts: [
                {
                  id: "dsa-b15-part-7-1-original",
                  label: "DIJKSTRA BẢN GỐC",
                  title: "Cơ Chế Tập Solved & Chiến Lược Tham Lam Min-Heap",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>Giả định hình thức (Formal assumption):</strong> Với mỗi edge $(u, v) \\in E$, ta giả định $w(u, v) \\ge 0$ (non-negative).",
                        "• <strong>Ý tưởng chính (bản gốc) thuật toán Dijkstra's:</strong>",
                        "&nbsp;&nbsp;+ Duy trì 1 tập $S(olved)$ gồm các đỉnh mà trọng số shortest path cuối cùng đã được xác định, ban đầu $Solved = \\{s(ource)\\}$ &mdash; chỉ chứa đỉnh nguồn $s$.",
                        "&nbsp;&nbsp;+ Lặp lại: chọn đỉnh $u$ trong $\\{V - Solved\\}$ có <strong>min shortest path estimate</strong> (ước lượng đường đi ngắn nhất nhỏ nhất), thêm $u$ vào $Solved$, và <strong>relax tất cả các cạnh đi ra từ $u$</strong>.",
                        "&nbsp;&nbsp;+ Điều này đòi hỏi dùng 1 loại <strong>Priority Queue</strong>. (<strong>Q: Vì sao?</strong> Để luôn lấy ra đỉnh có dist nhỏ nhất hiệu quả).",
                        "&nbsp;&nbsp;+ Cách chọn thứ tự relax này là <strong>\"tham lam\" (greedy)</strong>: chọn \"cái tốt nhất tính đến thời điểm hiện tại\" (best so far).",
                        "&nbsp;&nbsp;+ Nhưng cuối cùng vẫn cho ra kết quả <strong>tối ưu (optimal)</strong> (xem chứng minh phía sau).",
                        "• <strong>7.2. Ví dụ trên VisuAlgo:</strong>",
                        "&nbsp;&nbsp;+ Chạy Dijkstra's (Original) từ nhiều nguồn khác nhau trên đồ thị mẫu (CP3 4.17).",
                        "&nbsp;&nbsp;+ Trạng thái ban đầu của Dijkstra(0) (bản gốc)."
                      ]
                    },
                    {
                      type: "component",
                      component: "DijkstraOriginalExecutionStudio"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 7)",
                      text: "• Giả định bắt buộc của Dijkstra gốc: <strong>mọi $w(u, v) \\ge 0$</strong>.<br/>• Cấu trúc dữ liệu chính: <strong>Priority Queue</strong>.<br/>• Chiến lược: <strong>Greedy</strong> &mdash; luôn chọn đỉnh có dist nhỏ nhất chưa Solved."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b15-sec8",
          roman: "VIII",
          title: "Phần 8: Vì sao chiến lược Greedy này hoạt động? (Why This Greedy Strategy Works?)",
          subsections: [
            {
              id: "dsa-b15-sub-8-1",
              number: "8.1",
              title: "Loop Invariant, Định lý Subpath & Chứng minh dist[u] = Delta(s,u)",
              parts: [
                {
                  id: "dsa-b15-part-8-1-proof",
                  label: "CHỨNG MINH TOÁN HỌC",
                  title: "Loop Invariant & Định Lý Subpath Của Shortest Path",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>8.1. Phần 1 – Loop Invariant:</strong>",
                        "&nbsp;&nbsp;+ Tức là: vì sao chỉ cần xử lý (process) mỗi đỉnh <strong>đúng 1 lần</strong> là đủ?",
                        "&nbsp;&nbsp;+ <strong>Loop Invariant:</strong> Mọi đỉnh trong tập <strong>Solved</strong> đều có <strong>khoảng cách shortest path đúng</strong> từ nguồn.",
                        "&nbsp;&nbsp;+ Điều này đúng ban đầu: $Solved = \\{s\\}$ và $dist[s] = \\delta(s, s) = 0$.",
                        "• <strong>8.2. Theorem: Subpaths của shortest path cũng là shortest path:</strong>",
                        "&nbsp;&nbsp;+ <strong>Theorem:</strong> Cho $p$ là shortest path: $p = (v_0, v_1, v_2, \\dots, v_k)$. Cho $p_{ij}$ là subpath của $p$: $(v_i, v_{i+1}, \\dots, v_j), 0 \\le i \\le j \\le k$. Khi đó $p_{ij}$ cũng là shortest path (từ $i$ đến $j$).",
                        "&nbsp;&nbsp;+ <strong>Proof by contradiction:</strong> Cho shortest path $p = v_0 \\to p_{0i} v_i \\to p_{ij} v_j \\to p_{jk} v_k$. Nếu $p_{ij}$ không phải shortest path, tồn tại $p'_{ij}$ khác ngắn hơn $p_{ij}$. Ta cắt bỏ $p_{ij}$ và thay bằng $p'_{ij}$, kết quả là 1 đường đi ngắn hơn từ $v_0$ đến $v_k$ &rarr; mâu thuẫn!",
                        "• <strong>8.3. Phần 2 – Chứng minh $dist[u] = \\delta(s, u)$:</strong>",
                        "&nbsp;&nbsp;+ Thuật toán Dijkstra's lặp lại việc thêm đỉnh tiếp theo $u$ có $dist[u]$ nhỏ nhất vào Solved.",
                        "&nbsp;&nbsp;+ Tồn tại đỉnh $x$ đã có trong Solved ($dist[x] = \\delta(s, x)$) nối tới $u$ qua $edge(x, u)$ sao cho cách này ngắn nhất.",
                        "&nbsp;&nbsp;+ Khi đó: $dist[u] = dist[x] + weight(x, u) = \\delta(s, x) + \\delta(x, u) = \\delta(s, u)$.",
                        "&nbsp;&nbsp;+ Vậy: khi Dijkstra's kết thúc, ta có $dist[v] = \\delta(s, v)$ cho mọi $v \\in V$."
                      ]
                    },
                    {
                      type: "component",
                      component: "DijkstraProofCorrectnessStudio"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 8)",
                      text: "• <strong>Loop invariant:</strong> mọi đỉnh trong Solved đều đã có dist đúng bằng $\\delta$.<br/>• Chứng minh dựa trên: <strong>subpath của shortest path cũng là shortest path</strong>.<br/>• Kết luận: Dijkstra gốc kết thúc &rarr; $dist[v] = \\delta(s, v)$ với mọi $v$ (nếu mọi $w(u, v) \\ge 0$)."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b15-sec9",
          roman: "IX",
          title: "Phần 9: Phân tích độ phức tạp – Original Dijkstra's Analysis",
          subsections: [
            {
              id: "dsa-b15-sub-9-1",
              number: "9.1",
              title: "Bóc tách O(V log V) ExtractMin & O(E log V) DecreaseKey",
              parts: [
                {
                  id: "dsa-b15-part-9-1-complexity",
                  label: "PHÂN TÍCH BIG-O",
                  title: "Tổng Thời Gian Chạy: O((V + E) log V)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>9.1. Phần 1 – Extract Min:</strong>",
                        "&nbsp;&nbsp;+ Trong bản Dijkstra gốc, mỗi đỉnh chỉ được <strong>extract (lấy ra)</strong> khỏi priority queue <strong>đúng 1 lần</strong>.",
                        "&nbsp;&nbsp;+ Vì có $V$ đỉnh, ta làm việc này tối đa <strong>O(V) lần</strong>.",
                        "&nbsp;&nbsp;+ Mỗi lần <strong>extract min</strong> chạy <strong>O(log V)</strong> (dùng binary min heap hoặc balanced BST <code>findMin()</code>).",
                        "&nbsp;&nbsp;+ Do đó phần này là <strong>O(V log V)</strong>.",
                        "• <strong>9.2. Phần 2 – Relax + Decrease Key:</strong>",
                        "&nbsp;&nbsp;+ Mỗi lần 1 đỉnh được xử lý, ta <strong>relax các neighbor (đỉnh kề)</strong> của nó. Tổng cộng, tất cả <strong>O(E)</strong> cạnh được xử lý.",
                        "&nbsp;&nbsp;+ Nếu relax $edge(u, v)$ làm ta phải <strong>giảm $dist[v]$</strong>, ta gọi <code>DecreaseKey()</code> trong binary heap ($O(\\log V)$), hoặc xóa entry cũ rồi chèn entry mới trong balanced BST (Java <code>TreeSet</code>).",
                        "&nbsp;&nbsp;+ Phần này là <strong>O(E log V)</strong>.",
                        "• <strong>9.3. Tổng kết độ phức tạp:</strong>",
                        "&nbsp;&nbsp;+ Tổng thể, Dijkstra's chạy trong <strong>O(V log V + E log V)</strong>, hay còn gọi là <strong>O((V + E) log V)</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "DijkstraComplexityBreakdownStudio"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 9)",
                      text: "• <strong>Extract min:</strong> $O(V \\log V)$ (mỗi đỉnh 1 lần, mỗi lần $O(\\log V)$).<br/>• <strong>Relax + Decrease Key:</strong> $O(E \\log V)$ (mỗi cạnh 1 lần, mỗi lần $O(\\log V)$).<br/>• <strong>Tổng:</strong> $O((V + E) \\log V)$."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b15-sec10",
          roman: "X",
          title: "Phần 10: Vấn đề: Dijkstra gốc thất bại khi có cạnh âm",
          subsections: [
            {
              id: "dsa-b15-sub-10-1",
              number: "10.1",
              title: "Thử nghiệm CP3 4.18 & Vì sao chiến lược Greedy sụp đổ",
              parts: [
                {
                  id: "dsa-b15-part-10-1-failure",
                  label: "PHẢN CHỨNG CẠNH ÂM",
                  title: "Dijkstra Bị Đánh Lừa Bởi Cạnh Âm & Báo Sai Kết Quả",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>10.1. Wait.. Let's try this!</strong>",
                        "&nbsp;&nbsp;+ Chạy Dijkstra's (Original) từ $source = 0$ trên đồ thị mẫu (CP3 4.18).",
                        "&nbsp;&nbsp;+ <strong>Câu hỏi:</strong> Có nhận được kết quả đúng tại đỉnh 4 không? &rarr; <strong>Không!</strong>",
                        "• <strong>10.2. Vì sao chiến lược Greedy này không hoạt động lần này?</strong>",
                        "&nbsp;&nbsp;+ Sự xuất hiện của cạnh <strong>trọng số âm</strong> có thể khiến đỉnh được chọn \"tham lam\" đầu tiên <strong>cuối cùng không phải</strong> là đỉnh \"gần nhất\" thực sự (true \"closest\") so với nguồn!",
                        "&nbsp;&nbsp;+ Điều này xảy ra tại <strong>đỉnh 3</strong> trong ví dụ này.",
                        "&nbsp;&nbsp;+ &rarr; \"Vấn đề nằm ở đây...\" (The issue is here...)"
                      ]
                    },
                    {
                      type: "component",
                      component: "DijkstraNegativeEdgeTrapSandbox"
                    },
                    {
                      type: "component",
                      component: "DijkstraCoreMechanismsFlashcards"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 10)",
                      text: "• Dijkstra's <strong>bản gốc chỉ đúng khi mọi cạnh $w(u, v) \\ge 0$</strong>.<br/>• Nếu có cạnh âm: đỉnh được chọn \"tham lam\" trước có thể <strong>không phải</strong> là đỉnh gần nhất thật sự &rarr; sai kết quả."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b15-sec11",
          roman: "XI",
          title: "Phần 11: DIJKSTRA'S ALGORITHM – Phiên bản chỉnh sửa (The 'modified' implementation)",
          subsections: [
            {
              id: "dsa-b15-sub-11-1",
              number: "11.1",
              title: "Special Case 4b, Lazy Data Structure & Mã giả Modified Dijkstra",
              parts: [
                {
                  id: "dsa-b15-part-11-1-modified",
                  label: "MODIFIED DIJKSTRA",
                  title: "Xử Lý Cạnh Âm Bằng Kỹ Thuật Lazy Data Structure",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>11.1. Special Case 4b: Đồ thị không có negative weight cycle:</strong>",
                        "&nbsp;&nbsp;+ Trong nhiều trường hợp thực tế, bài toán SSSP thực hiện trên đồ thị mà cạnh <strong>có thể có trọng số âm nhưng không có negative cycle</strong>.",
                        "&nbsp;&nbsp;+ <em>Ví dụ:</em> Di chuyển giữa 2 thành phố bằng <strong>xe điện (electric car)</strong> dùng pin: leo dốc (+) năng lượng, xuống dốc sạc lại (-) năng lượng, nhưng không thể sạc mãi mãi do mất năng lượng động học &rarr; <strong>thuật toán Modified Dijkstra's</strong>.",
                        "• <strong>11.2 & 11.3. Modified Implementation & Lazy Data Structure (CP3 4.4.3):</strong>",
                        "&nbsp;&nbsp;+ <strong>Giả định hình thức:</strong> Đồ thị <strong>không có negative weight cycle</strong> (nhưng <strong>có thể có cạnh trọng số âm</strong>).",
                        "&nbsp;&nbsp;+ Dùng <strong>Priority Queue</strong> lưu cặp <code>(dist[u], u)</code>.",
                        "&nbsp;&nbsp;+ <strong>Lazy Data Structure:</strong> Khi lấy cặp $(d, u)$ ra khỏi PQ: nếu $d == dist[u]$ &rarr; relax các cạnh đi ra; nếu $d > dist[u]$ &rarr; bỏ qua (coi như đã \"xóa\").",
                        "&nbsp;&nbsp;+ <strong>Q: Vì sao dùng Lazy?</strong> Vì C++/Java PriorityQueue không hỗ trợ tìm kiếm và sửa đổi nhanh các entry bên trong!",
                        "• <strong>11.4. Modified Dijkstra's Algorithm – Pseudo code:</strong>",
                        "<code>initSSSP(s); PQ.enqueue((0, s));</code>",
                        "<code>while (!PQ.isEmpty()) &#123;</code>",
                        "&nbsp;&nbsp;<code>(d, u) = PQ.dequeue();</code>",
                        "&nbsp;&nbsp;<code>if (d == dist[u]) &#123; // lazy check</code>",
                        "&nbsp;&nbsp;&nbsp;&nbsp;<code>for each (u, v, w) in Adj[u]:</code>",
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>if (dist[v] > dist[u] + w) &#123; dist[v] = dist[u] + w; PQ.enqueue((dist[v], v)); &#125;</code>",
                        "&nbsp;&nbsp;<code>&#125;</code>",
                        "<code>&#125;</code>"
                      ]
                    },
                    {
                      type: "component",
                      component: "ModifiedDijkstraExecutionStudio"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 11)",
                      text: "• Modified Dijkstra chấp nhận <strong>cạnh âm</strong> (nhưng không được có negative cycle).<br/>• Dùng <strong>Lazy Data Structure</strong>: không xóa entry cũ ngay, mà kiểm tra $d == dist[u]$ mỗi khi dequeue &mdash; nếu không khớp thì bỏ qua.<br/>• Khi $dist[v]$ giảm &rarr; <strong>enqueue lại</strong> $(dist[v], v)$, có thể có duplicate trong PQ."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b15-sec12",
          roman: "XII",
          title: "Phần 12: Phân tích độ phức tạp – Modified Dijkstra's Analysis",
          subsections: [
            {
              id: "dsa-b15-sub-12-1",
              number: "12.1",
              title: "Chứng minh O((V + E) log V) khi có duplicate",
              parts: [
                {
                  id: "dsa-b15-part-12-1-complexity",
                  label: "PHÂN TÍCH ĐỘ PHỨC TẠP",
                  title: "Tại Sao Có Duplicate Mà Vẫn Đạt O((V + E) log V)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>12.1. Phần 1 – Extract Min:</strong>",
                        "&nbsp;&nbsp;+ Ta ngăn đỉnh đã xử lý bị xử lý lại nếu $d > dist[u]$.",
                        "&nbsp;&nbsp;+ Nếu không có cạnh âm, mỗi đỉnh được xử lý từ PQ <strong>đúng 1 lần</strong> ($O(V)$ lần).",
                        "&nbsp;&nbsp;+ Mỗi lần extract min chạy <strong>O(log V)</strong>.",
                        "• <strong>12.2. Phần 2 – Relax & Duplicate:</strong>",
                        "&nbsp;&nbsp;+ Mỗi lần 1 đỉnh được xử lý, ta relax tất cả neighbor của nó ($O(E)$ cạnh).",
                        "&nbsp;&nbsp;+ Có tối đa <strong>O(E) bản sao</strong> trong PQ. Vì $E = O(V^2)$ nên $O(\\log E) = O(\\log V^2) = 2 O(\\log V) = \\mathbf{O(\\log V)}$.",
                        "&nbsp;&nbsp;+ Mỗi lần insert vẫn chạy <strong>O(log V)</strong>.",
                        "• <strong>Tổng thể:</strong> Modified Dijkstra's chạy trong <strong>O((V + E) log V)</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "ModifiedDijkstraComplexityStudio"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 12)",
                      text: "• Modified Dijkstra vẫn đạt <strong>O((V + E) log V)</strong> dù có duplicate trong PQ, vì $O(\\log E) = O(\\log V)$ khi $E = O(V^2)$.<br/>• Độ phức tạp giống hệt bản gốc, nhưng modified có thể xử lý được cạnh âm."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b15-sec13",
          roman: "XIII",
          title: "Phần 13: Kiểm tra và giới hạn của Modified Dijkstra's",
          subsections: [
            {
              id: "dsa-b15-sub-13-1",
              number: "13.1",
              title: "Thử nghiệm CP3 4.18, Trường hợp hàm mũ & Kẹt vô hạn",
              parts: [
                {
                  id: "dsa-b15-part-13-1-limits",
                  label: "GIỚI HẠN THUẬT TOÁN",
                  title: "Rủi Ro Hàm Mũ O(2^k) & Bẫy Kẹt Vô Hạn Khi Có Negative Cycle",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>13.1. Try! (CP3 4.18):</strong>",
                        "&nbsp;&nbsp;+ Chạy Dijkstra's (Modified) từ $source = 0$ trên đồ thị mẫu CP3 4.18.",
                        "&nbsp;&nbsp;+ <strong>Kết quả:</strong> Có nhận được kết quả đúng tại đỉnh 4 không? &rarr; <strong>CÓ! (đúng $\\delta(0,4) = 1$)</strong>.",
                        "• <strong>13.2 & 13.3. Không phải thuật toán \"toàn năng\":</strong>",
                        "&nbsp;&nbsp;+ Nếu có cạnh âm không có negative cycle, tồn tại 1 số trường hợp cực đoan (extreme) mà modified Dijkstra's <strong>xử lý lại (re-process)</strong> cùng 1 đỉnh rất nhiều lần &rarr; <strong>Exponential time ($2^k$)</strong> (dù hiếm gặp).",
                        "&nbsp;&nbsp;+ <strong>Rủi ro khi có Negative Cycle:</strong> Modified Dijkstra sẽ bị <strong>kẹt trong vòng lặp vô hạn (infinite loop)</strong>!",
                        "&nbsp;&nbsp;+ &rarr; Khi đồ thị có nguy cơ chứa cycle âm &rarr; <strong>Bắt buộc dùng Bellman-Ford O(VE)</strong>!",
                        "• <strong>13.4. Try Sample Graph, CP3 4.19!</strong>"
                      ]
                    },
                    {
                      type: "component",
                      component: "ModifiedDijkstraLimitsSandbox"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 13)",
                      text: "• Modified Dijkstra's <strong>không phải toàn năng</strong>: có thể gặp trường hợp cực đoan chạy exponential time (dù hiếm).<br/>• Nếu đồ thị có khả năng cao chứa <strong>negative cycle</strong> &rarr; nên dùng <strong>Bellman-Ford</strong> (đơn giản, chặt hơn); modified Dijkstra có thể bị <strong>kẹt vô hạn</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b15-sec14",
          roman: "XIV",
          title: "Phần 14: Cài đặt Java (Java Implementation)",
          subsections: [
            {
              id: "dsa-b15-sub-14-1",
              number: "14.1",
              title: "PS5 Subtask B & 3 Kịch bản hiệu năng",
              parts: [
                {
                  id: "dsa-b15-part-14-1-java",
                  label: "CÀI ĐẶT JAVA",
                  title: "Mã Nguồn ModifiedDijkstraDemo.java & 3 Kịch Bản Hiệu Năng",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Xem mã nguồn cài đặt <strong>ModifiedDijkstraDemo.java</strong> (chuẩn bị cho PS5 Subtask B).",
                        "• <strong>Sơ trình diễn hiệu năng thuật toán trên 3 trường hợp:</strong>",
                        "&nbsp;&nbsp;1. Đồ thị nhỏ, <strong>không</strong> có negative weight cycle &rarr; <strong>OK</strong>.",
                        "&nbsp;&nbsp;2. Đồ thị nhỏ, có <strong>1 số cạnh âm</strong>; không có negative cycle &rarr; <strong>Vẫn OK</strong>.",
                        "&nbsp;&nbsp;3. Đồ thị nhỏ, <strong>có</strong> negative weight cycle &rarr; Bài toán SSSP <strong>ill undefined</strong> (không xác định); modified Dijkstra có thể bị <strong>kẹt trong vòng lặp vô hạn</strong>."
                      ]
                    },
                    {
                      type: "component",
                      component: "DijkstraJavaImplementationWorkbench"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 14)",
                      text: "• Không có cạnh âm hoặc có cạnh âm nhưng không có negative cycle &rarr; modified Dijkstra's <strong>OK</strong>.<br/>• Có negative cycle &rarr; SSSP vô nghĩa, và modified Dijkstra's có thể <strong>loop vô hạn</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b15-sec15",
          roman: "XV",
          title: "Phần 15: Tổng kết các thuật toán SSSP (Summary of Various SSSP Algorithms)",
          subsections: [
            {
              id: "dsa-b15-sub-15-1",
              number: "15.1",
              title: "Ma trận toàn cảnh SSSP & 8 Quy tắc cốt tử",
              parts: [
                {
                  id: "dsa-b15-part-15-1-summary",
                  label: "TỔNG KẾT MASTER SSSP",
                  title: "Bức Tranh Toàn Cảnh & Ma Trận 6 Kịch Bản SSSP",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• <strong>Trường hợp tổng quát (weighted graph):</strong> $O(VE)$ Bellman-Ford's algorithm.",
                        "• <strong>Special case 1 (Tree):</strong> $O(V)$ BFS hoặc DFS.",
                        "• <strong>Special case 2 (Unweighted):</strong> $O(V+E)$ BFS.",
                        "• <strong>Special case 3 (DAG):</strong> $O(V+E)$ DFS để lấy topological sort rồi relax các đỉnh (tiền đề DP).",
                        "• <strong>Special case 4ab (Không có cạnh âm / Không có cycle âm):</strong> $O((V+E)\\log V)$ original / modified Dijkstra's."
                      ]
                    },
                    {
                      type: "component",
                      component: "SsspMasterSummaryMatrix"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Tổng hợp toàn bài 15)",
                      text: "• <strong>Tree</strong> &rarr; $O(V)$ DFS/BFS.<br/>• <strong>Unweighted</strong> &rarr; $O(V+E)$ BFS.<br/>• <strong>DAG</strong> &rarr; 1 pass relax theo topological order.<br/>• <strong>Không có cạnh âm</strong> &rarr; Dijkstra gốc $O((V+E)\\log V)$.<br/>• <strong>Có cạnh âm an toàn</strong> &rarr; Modified Dijkstra $O((V+E)\\log V)$.<br/>• <strong>Có nguy cơ chu trình âm</strong> &rarr; Bellman-Ford $O(VE)$ cho an toàn.<br/>• <strong>Nền tảng chứng minh:</strong> Loop invariant + Theorem subpath của shortest path."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "dsa-b15-sec16",
          roman: "XVI",
          title: "Phần 16: Chuẩn bị cho Online Quiz 2 (OQ2 Preparation)",
          subsections: [
            {
              id: "dsa-b15-sub-16-1",
              number: "16.1",
              title: "Lộ trình ôn tập OQ2 & 10 Flashcards 3D Master",
              parts: [
                {
                  id: "dsa-b15-part-16-1-oq2",
                  label: "ÔN THI OQ2",
                  title: "Chuẩn Bị Sẵn Sàng Cho Online Quiz 2 (OQ2)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "• Sau Lecture 09, sẽ có 1 chế độ test ngẫu nhiên (<strong>random test mode</strong>) @ VisuAlgo để kiểm tra đã sẵn sàng cho OQ2 chưa.",
                        "• <strong>Nội dung OQ2 bao trùm 4 chủ đề cốt lõi:</strong>",
                        "&nbsp;&nbsp;+ <strong>Graph DS</strong>",
                        "&nbsp;&nbsp;+ <strong>Graph Traversal (DFS/BFS)</strong>",
                        "&nbsp;&nbsp;+ <strong>MST (Prim's/Kruskal's)</strong>",
                        "&nbsp;&nbsp;+ <strong>SSSP (Bellman-Ford's / Dijkstra's &mdash; cả bản gốc lẫn modified)</strong>",
                        "• Luyện tập trước tại: <code>http://visualgo.net/training.html?diff=Hard&amp;n=20&amp;tl=40&amp;module=graphds,graphtraversal,mst,sssp</code>"
                      ]
                    },
                    {
                      type: "component",
                      component: "DijkstraChapter15FinalExamFlashcards"
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "📌 Cần nhớ (Phần 16)",
                      text: "• OQ2 bao trùm: Graph DS, Graph Traversal, MST, SSSP (cả Bellman-Ford lẫn Dijkstra's &mdash; cả 2 phiên bản gốc và modified)."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};



