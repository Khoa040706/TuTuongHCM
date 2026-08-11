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
        }
      ]
    }
  ]
};
