/* ============================================================
   DỮ LIỆU CƠ BẢN: Môn Lập trình hướng đối tượng (OOP)
   ============================================================ */

export const oopData = {
  id: "oop",
  title: "Lập trình hướng đối tượng (OOP)",
  subtitle: "Khóa học cốt lõi về 13 nguyên lý và kỹ thuật hướng đối tượng trong Java.",
  sections: [
    {
      id: "oop-section-intro",
      roman: "I",
      title: "Giới thiệu về Java (Intro to Java)",
      subsections: [
        {
          id: "oop-sub-intro-history",
          number: "1",
          title: "Lịch sử và Bối cảnh Lịch sử (Java: Brief History & Background)",
          parts: [
            {
              id: "oop-part-history-detail",
              label: "a",
              title: "Lịch sử phát triển ngôn ngữ Java",
              content: [
                {
                  type: "paragraph",
                  text: "Java được khởi đầu và phát triển bởi <b>James Gosling</b> vào năm 1995 dưới sự quản lý của tập đoàn <b>Sun Microsystems</b>. Ngôn ngữ này lấy nền tảng vững chắc từ cú pháp của C/C++ nhưng sở hữu định hướng thiết kế tối ưu hơn:"
                },
                {
                  type: "bullets",
                  items: [
                    "<b>\"Cleaner\" in syntax:</b> Loại bỏ các thành phần phức tạp dễ gây lỗi trong C/C++ như con trỏ trực tiếp (pointers) hay quản lý bộ nhớ thủ công, giúp mã nguồn tường minh và sạch sẽ hơn.",
                    "<b>Less low-level machine interaction:</b> Hạn chế sự tương tác trực tiếp ở mức độ phần cứng thấp nhằm nâng cao tính an toàn hệ thống và bảo mật dữ liệu."
                  ]
                }
              ]
            },
            {
              id: "oop-part-errors-detail",
              label: "b",
              title: "Hệ thống hóa các loại lỗi lập trình",
              content: [
                {
                  type: "paragraph",
                  text: "Trong chu trình phát triển phần mềm, lập trình viên thường đối mặt với ba loại lỗi cơ bản:"
                },
                {
                  type: "definition",
                  text: "<b>Lỗi biên dịch (Compilation Error):</b> Xảy ra khi mã nguồn vi phạm các quy tắc cú pháp của ngôn ngữ. Trình biên dịch sẽ phát hiện và từ chối tạo ra file thực thi."
                },
                {
                  type: "definition",
                  text: "<b>Lỗi thực thi (Runtime Error):</b> Chương trình vượt qua giai đoạn biên dịch thành công nhưng bị dừng đột ngột hoặc sập (crash) trong quá trình chạy thực tế (ví dụ: chia cho số 0, truy cập chỉ mục mảng vượt quá giới hạn)."
                },
                {
                  type: "definition",
                  text: "<b>Lỗi logic/ngữ nghĩa (Logic Error):</b> Chương trình biên dịch và chạy bình thường không hề có thông báo lỗi, nhưng kết quả đầu ra (output) lại sai lệch so với yêu cầu logic mong muốn của bài toán."
                }
              ]
            }
          ]
        },
        {
          id: "oop-sub-intro-runcycle",
          number: "2",
          title: "Chu trình Chạy Chương trình (Run Cycle)",
          parts: [
            {
              id: "oop-part-c-runcycle",
              label: "a",
              title: "Chu trình biên dịch và thực thi truyền thống của ngôn ngữ C",
              content: [
                {
                  type: "paragraph",
                  text: "Trong ngôn ngữ C, mã nguồn phụu thuộc trực tiếp vào nền tảng hệ thống hạ tầng:"
                },
                {
                  type: "numbered-list",
                  items: [
                    "Lập trình viên viết mã nguồn bằng trình soạn thảo (ví dụ: vim), lưu thành file có phần mở rộng <code>.c</code> (ví dụ: <code>welcome.c</code>).",
                    "Sử dụng trình biên dịch C (ví dụ: <code>gcc</code>) để dịch mã nguồn thành file thực thi nhị phân gốc (mặc định là <code>a.out</code>).",
                    "File nhị phân này chứa mã máy được tối ưu riêng cho cấu trúc CPU và hệ điều hành (OS) hiện tại nên có thể chạy trực tiếp để xuất ra kết quả."
                  ]
                },
                {
                  type: "highlight",
                  text: "<b>Nhược điểm:</b> Do file nhị phân phụ thuộc chặt chẽ vào OS/Hardware nên file <code>a.out</code> được dịch trên hệ thống máy chủ UNIX (như Sunfire) hoàn toàn không thể khởi chạy được trên hệ điều hành Windows."
                }
              ]
            },
            {
              id: "oop-part-java-runcycle",
              label: "b",
              title: "Cơ chế độc lập nền tảng của Java: \"Compile Once, Run Anywhere\"",
              content: [
                {
                  type: "paragraph",
                  text: "Java giải quyết triệt để sự phụ thuộc phần cứng bằng cách chèn thêm một tầng giả lập phần mềm đồng nhất, được gọi là <b>Java Virtual Machine (JVM) - Máy ảo Java</b>. Quy trình chạy của Java diễn ra như sau:"
                },
                {
                  type: "numbered-list",
                  items: [
                    "<b>Writing/Editing Program:</b> Viết mã nguồn trên trình soạn thảo và bắt buộc lưu với phần mở rộng <code>.java</code> (ví dụ: <code>HelloWorld.java</code>).",
                    "<b>Compiling Program:</b> Sử dụng trình biên dịch Java (<code>javac</code>) thông qua câu lệnh: <code>javac HelloWorld.java</code>. Kết quả thu được không phải mã máy gốc mà là một file trung gian mang đuôi <code>.class</code>, được gọi là <b>Java Executable Bytecode</b>.",
                    "<b>Executing Binary:</b> Chạy mã bytecode trên môi trường máy ảo JVM bằng câu lệnh: <code>java HelloWorld</code> (lưu ý không viết đuôi <code>.class</code>). Mọi nền tảng (Windows, macOS, Linux) chỉ cần cài đặt một phiên bản JVM phù hợp là có thể đọc hiểu và thực thi cùng một file mã bytecode đó mà không cần phải biên dịch lại mã nguồn từ đầu."
                  ]
                },
                {
                  type: "java-run-cycle-visualizer"
                }
              ]
            }
          ]
        },
        {
          id: "oop-sub-intro-structure",
          number: "3",
          title: "Cấu trúc Chương trình Cơ bản (Basic Structure)",
          parts: [
            {
              id: "oop-part-c-vs-java",
              label: "a",
              title: "So sánh cấu trúc mã nguồn in chuỗi chữ giữa C và Java",
              content: [
                {
                  type: "paragraph",
                  text: "Hãy quan sát sự khác biệt về cú pháp khai báo chương trình đơn giản nhất giữa hai ngôn ngữ:"
                },
                {
                  type: "code",
                  language: "c",
                  code: `// Cấu trúc của ngôn ngữ C (HelloWorld.c)
#include <stdio.h>
int main(void) {
    printf("Hello World!\\n");
    return 0;
}`
                },
                {
                  type: "code",
                  language: "java",
                  code: `// Cấu trúc của ngôn ngữ Java (HelloWorld.java)
import java.lang.*; // Dòng này có thể lược bỏ
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`
                },
                {
                  type: "highlight",
                  text: "<b>Sai lầm kinh điển của người mới học (Beginners' common mistake):</b> Tên của lớp công khai (<code>public class</code>) bắt buộc phải trùng khớp hoàn toàn (kể cả chữ hoa chữ thường) với tên file chứa mã nguồn (ví dụ file phải đặt tên chính xác là <code>HelloWorld.java</code>)."
                }
              ]
            },
            {
              id: "oop-part-package-class",
              label: "b",
              title: "Các quan sát kỹ thuật quan trọng về Package và Class",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<b>Package (Gói thư viện):</b> Thư viện trong Java được gọi là package, tổ chức theo mô hình phân cấp thư mục hình cây để tránh xung đột tên gọi. Câu lệnh <code>System.out.println()</code> nằm trong cấu trúc <code>java.lang.System</code>, nghĩa là <code>lang</code> (language) là một package con nằm trong package cha <code>java</code>, và <code>System</code> là một class nằm trong package <code>lang</code>.",
                    "<b>Cú pháp Import:</b> Sử dụng từ khóa <code>import XXXXXX;</code> để nhúng thư viện bên ngoài. Ký tự đại diện dấu sao <code>*</code> (wildcard) được dùng để import toàn bộ các class thuộc cùng một gói. Riêng gói <code>java.lang</code> được hệ thống tự động import mặc định nên dòng lệnh đầu tiên ví dụ trên là tùy chọn (optional).",
                    "<b>Phương thức main():</b> Hàm <code>main()</code> đóng vai trò là điểm xuất phát khởi đầu (execution starting point) duy nhất của chương trình. Trong Java, hàm này bắt buộc phải được bao bọc hoàn toàn bên trong một khối lớp (class).",
                    "<b>Biên dịch Class:</b> Mỗi lớp đơn lẻ bên trong file mã nguồn sau khi biên dịch sẽ tự động tách thành một file <code>.class</code> độc lập mang tên của chính lớp đó."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-sub-intro-variables",
          number: "4",
          title: "Định danh, Biến và Hằng số (Identifier, Variable, Constant)",
          parts: [
            {
              id: "oop-part-vars-constants",
              label: "a",
              title: "Khai báo định danh, biến và hằng số trong Java",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<b>Định danh (Identifier):</b> Tên do lập trình viên đặt cho các thực thể trong chương trình như tên lớp, tên biến, tên phương thức. Quy tắc đặt định danh của Java quy định: Chỉ gồm ký tự chữ cái (<code>'a'-'z'</code>, <code>'A'-'Z'</code>), ký tự số (<code>'0'-'9'</code>), dấu gạch dưới (<code>_</code>) và dấu đô-la (<code>$</code>). <b>Định danh không được phép bắt đầu bằng ký tự số.</b>",
                    "<b>Biến (Variable):</b> Vùng nhớ dùng để lưu trữ dữ liệu thay đổi trong chương trình. Mọi biến bắt buộc phải được khai báo tường minh cùng một kiểu dữ liệu cụ thể trước khi dùng (ví dụ: <code>int countDays;</code>).",
                    "<b>Hằng số (Constant):</b> Thực thể lưu trữ giá trị cố định, không thể sửa đổi sau khi đã gán lần đầu. Java sử dụng từ khóa <code>final</code> để định nghĩa hằng số (ví dụ: <code>public static final int PASSING_MARK = 65;</code>)."
                  ]
                }
              ]
            },
            {
              id: "oop-part-naming-conventions",
              label: "b",
              title: "Quy ước đặt tên chuẩn mực (Naming Conventions)",
              content: [
                {
                  type: "paragraph",
                  text: "Việc tuân thủ quy ước đặt tên giúp mã nguồn nhất quán, dễ đọc và chuyên nghiệp hơn:"
                },
                {
                  type: "bullets",
                  items: [
                    "<b>Tên Lớp (Class name):</b> Áp dụng quy tắc <b>UpperCamelCase</b> (Viết hoa chữ cái đầu tiên của mọi từ cấu thành). Ví dụ: <code>Math</code>, <code>HelloWorld</code>, <code>ConvexGeometricShape</code>.",
                    "<b>Tên Biến và Phương thức (Variable & Method name):</b> Áp dụng quy tắc <b>LowerCamelCase</b> (Từ đầu tiên viết thường toàn bộ, từ thứ hai trở đi viết hoa chữ cái đầu). Ví dụ: <code>countDays</code>, <code>innerDiameter</code>, <code>numOfCoins</code>.",
                    "<b>Tên Hằng số (Constant):</b> Viết hoa toàn bộ tất cả chữ cái, liên kết các từ bằng dấu gạch dưới <code>_</code>. Ví dụ: <code>PI</code>, <code>CONVERSION_RATE</code>, <code>CM_PER_INCH</code>."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-sub-intro-types-operators",
          number: "5",
          title: "Kiểu Dữ liệu Số và Toán tử (Numeric Data Types & Operators)",
          parts: [
            {
              id: "oop-part-data-types-table",
              label: "a",
              title: "Bảng tổng hợp các kiểu dữ liệu số nguyên và số thực trong Java",
              content: [
                {
                  type: "paragraph",
                  text: "Java cung cấp 8 kiểu dữ liệu nguyên bản, dưới đây là các kiểu dữ liệu dùng để xử lý số học:"
                },
                {
                  type: "table",
                  headers: ["Kiểu dữ liệu (Type Name)", "Kích thước (Bytes)", "Phạm vi giá trị (Range)"],
                  rows: [
                    ["byte", "1", "-128 đến 127 ($-2^7$ đến $2^7 - 1$)"],
                    ["short", "2", "-32,768 đến 32,767 ($-2^{15}$ đến $2^{15} - 1$)"],
                    ["int", "4", "$-2^{31}$ đến $2^{31} - 1$ (Kiểu số nguyên mặc định)"],
                    ["long", "8", "$-2^{63}$ đến $2^{63} - 1$"],
                    ["float", "4", "Âm: -3.4028235E+38 đến -1.4E-45 | Dương: 1.4E-45 đến 3.4028235E+38"],
                    ["double", "8", "Âm: -1.7976931E+308 đến -4.9E-324 | Dương: 4.9E-324 đến 1.7976931E+308 (Mặc định)"]
                  ]
                },
                {
                  type: "highlight",
                  text: "<b>Quy ước thực hành:</b> Trừ khi có ràng buộc bài toán cụ thể về tối ưu bộ nhớ hoặc dải giá trị rất lớn, lập trình viên luôn chọn <code>int</code> cho số nguyên và <code>double</code> cho số thực."
                }
              ]
            },
            {
              id: "oop-part-operators-precedence",
              label: "b",
              title: "Độ ưu tiên và tính kết hợp của toán tử số học",
              content: [
                {
                  type: "paragraph",
                  text: "Quá trình đánh giá biểu thức số học phức tạp dựa trên quy tắc ưu tiên (Precedence) từ cao đến thấp và hướng kết hợp (Associativity):"
                },
                {
                  type: "numbered-list",
                  items: [
                    "Dấu ngoặc <code>()</code> - Hướng kết hợp: Trái sang Phải.",
                    "Toán tử tăng/giảm hậu tố <code>++</code>, <code>--</code> - Hướng kết hợp: Phải sang Trái.",
                    "Toán tử tăng/giảm tiền tố <code>++</code>, <code>--</code> và toán tử đơn tử <code>+</code>, <code>-</code> - Hướng kết hợp: Phải sang Trái.",
                    "Phép toán nhân, chia, lấy số dư <code>*</code>, <code>/</code>, <code>%</code> - Hướng kết hợp: Trái sang Phải.",
                    "Phép toán cộng, trừ <code>+</code>, <code>-</code> - Hướng kết hợp: Trái sang Phải.",
                    "Toán tử gán và toán tử thu gọn <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code> - Hướng kết hợp: Phải sang Trái."
                  ]
                }
              ]
            },
            {
              id: "oop-part-casting-playground",
              label: "c",
              title: "Cơ chế chuyển đổi kiểu dữ liệu (Data Type Conversion)",
              content: [
                {
                  type: "paragraph",
                  text: "Lập trình viên Java thường gặp lỗi logic kinh điển khi thực hiện phép chia giữa hai số nguyên. Hãy xem xét đoạn mã lỗi sau:"
                },
                {
                  type: "code",
                  language: "java",
                  code: `double d;
int i = 31415;
d = i / 10000; // Sai lầm: i / 10000 thực chất là phép chia 2 số nguyên, trả về kết quả nguyên là 3. Sau đó số 3 mới được chuyển thành 3.0 gán cho d.`
                },
                {
                  type: "paragraph",
                  text: "<b>Giải pháp sửa lỗi:</b> Thực hiện ép kiểu tường minh hoặc thay đổi toán hạng thành số thực literal: <code>d = (double)i / 10000;</code> hoặc <code>d = i / 10000.0;</code>."
                },
                {
                  type: "definition",
                  text: "<b>Ép kiểu tường minh (Type casting):</b> Cú pháp: <code>(datatype) value;</code>. Ví dụ: Nếu <code>d = 3.987;</code>, câu lệnh <code>i = (int) d;</code> sẽ cắt bỏ hoàn toàn phần thập phân và gán giá trị nguyên là 3 cho biến i."
                },
                {
                  type: "java-casting-playground"
                }
              ]
            },
            {
              id: "oop-part-temp-conversion",
              label: "d",
              title: "Phân tích Bài toán: Chuyển đổi nhiệt độ từ Fahrenheit sang Celsius",
              content: [
                {
                  type: "paragraph",
                  text: "Chương trình thực hiện chuyển đổi giá trị nhiệt độ và in kết quả ra màn hình:"
                },
                {
                  type: "code",
                  language: "java",
                  code: `public class Temperature {
    public static void main(String[] args) {
        double fahrenheit, celsius;
        fahrenheit = 123.5;
        celsius = (5.0 / 9) * (fahrenheit - 32);
        System.out.println("Celsius: " + celsius);
    }
}`
                },
                {
                  type: "highlight",
                  text: "<b>Ghi chú kỹ thuật quan trọng:</b> Biểu thức <code>5.0/9</code> là bắt buộc để kích hoạt cơ chế tính toán số thực. Nếu viết <code>5/9</code>, Java hiểu là chia hai số nguyên và trả về kết quả bằng 0, khiến toàn bộ công thức bị sai. Ký tự <code>+</code> trong câu lệnh in đóng vai trò là toán tử nối chuỗi (Concatenate operator), tự động ép kiểu các giá trị số sang chuỗi văn bản."
                }
              ]
            }
          ]
        },
        {
          id: "oop-sub-intro-control",
          number: "6",
          title: "Câu lệnh Điều khiển và Kiểu dữ liệu Boolean (Control Statements & Boolean)",
          parts: [
            {
              id: "oop-part-boolean-logic",
              label: "a",
              title: "Kiểu dữ liệu boolean và toán tử logic",
              content: [
                {
                  type: "paragraph",
                  text: "Khác biệt cốt lõi với ngôn ngữ ANSI C (quy ước số 0 là false, số khác 0 là true), Java tích hợp sẵn kiểu dữ liệu <b>boolean</b> nguyên bản. Kiểu dữ liệu này chỉ nhận hai từ khóa giá trị duy nhất là <code>true</code> hoặc <code>false</code>."
                },
                {
                  type: "bullets",
                  items: [
                    "<b>Toán tử quan hệ (Relational Operators):</b> Dùng để so sánh trực tiếp các biểu thức số, bao gồm: <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>, <code>==</code>, <code>!=</code>.",
                    "<b>Toán tử logic (Logical Operators):</b> Dùng để liên kết nhiều biểu thức điều kiện, toán hạng bắt buộc là giá trị boolean: <code>&&</code> (Phép VÀ logic), <code>||</code> (Phép HOẶC logic), <code>!</code> (Phép PHỦ ĐỊNH), <code>^</code> (Phép XOR tuyển loại - trả về true nếu hai toán hạng có giá trị trái ngược nhau)."
                  ]
                }
              ]
            },
            {
              id: "oop-part-selection-statements",
              label: "b",
              title: "Cấu trúc rẽ nhánh (Selection Statements)",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<b>if-else:</b> Điều kiện nằm trong khối <code>if()</code> bắt buộc phải trả về kiểu dữ liệu boolean. Ví dụ biểu thức viết kiểu C như <code>if(x % 3)</code> là hoàn toàn bất hợp lệ trong Java; bắt buộc phải viết tường minh: <code>if(x % 3 != 0)</code>.",
                    "<b>switch-case:</b> Biểu thức truyền vào khối lệnh lựa chọn <code>switch()</code> chỉ được phép trả về các kiểu dữ liệu cụ thể: <code>char</code>, <code>byte</code>, <code>short</code>, <code>int</code> (hoặc <code>String</code>, <code>enum</code> ở các phiên bản Java mới). Sử dụng từ khóa <code>break</code> để ngăn chặn hiện tượng lọt rẽ nhánh (fall-through execution) sang các case phía dưới và dùng <code>default</code> để xử lý các trường hợp ngoại lệ không khớp."
                  ]
                }
              ]
            },
            {
              id: "oop-part-repetition-statements",
              label: "c",
              title: "Cấu trúc vòng lặp (Repetition Statements)",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<b>Vòng lặp while:</b> Đánh giá điều kiện boolean trước khi thực thi thân vòng lặp.",
                    "<b>Vòng lặp do-while:</b> Luôn thực thi thân vòng lặp ít nhất một lần trước khi đánh giá điều kiện kiểm tra ở cuối.",
                    "<b>Vòng lặp for(A; B; C):</b> Tuân theo trật tự: Khởi tạo giá trị (A) -&gt; Kiểm tra điều kiện lặp dạng boolean (B) -&gt; Thực thi thân vòng lặp -&gt; Cập nhật chỉ số (C) -&gt; Kiểm tra lại điều kiện (B). Các thành phần A, B, C đều có thể để trống."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-sub-intro-io",
          number: "7",
          title: "Nhập/Xuất Dữ liệu Cơ bản (Basic Input/Output)",
          parts: [
            {
              id: "oop-part-scanner-class",
              label: "a",
              title: "Khai thác dữ liệu nhập bằng lớp Scanner",
              content: [
                {
                  type: "paragraph",
                  text: "Để tiếp nhận dữ liệu từ luồng nhập chuẩn của bàn phím (<code>System.in</code>), chương trình cần tiến hành import gói thư viện <code>import java.util.Scanner;</code> và tiến hành khởi tạo đối tượng:"
                },
                {
                  type: "code",
                  language: "java",
                  code: `Scanner sc = new Scanner(System.in);
int integerInput = sc.nextInt(); // Hàm đọc vào một số nguyên
double doubleInput = sc.nextDouble(); // Hàm đọc vào một số thực`
                },
                {
                  type: "definition",
                  text: "<b>Cảnh báo quan trọng cho hệ thống chấm bài tự động CodeCrunch:</b> Lập trình viên thông thường chỉ nên khởi tạo một đối tượng Scanner duy nhất cho toàn bộ chương trình. Việc tạo lập nhiều đối tượng Scanner cùng tương tác trên luồng <code>System.in</code> sẽ gây xung đột luồng đọc dữ liệu, dẫn tới chương trình lỗi khi vận hành trên hệ thống chấm bài tự động CodeCrunch."
                }
              ]
            },
            {
              id: "oop-part-system-out",
              label: "b",
              title: "Hệ thống các phương thức xuất dữ liệu của System.out",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<b>System.out.print(chuỗi):</b> In thông tin ra màn hình nhưng giữ nguyên con trỏ chuột tại vị trí kết thúc, không tự động xuống dòng.",
                    "<b>System.out.println(chuỗi):</b> In thông tin ra màn hình đồng thời tự động chèn thêm ký tự xuống dòng ở cuối chuỗi.",
                    "<b>System.out.printf(định_dạng, danh_sách_biến):</b> Xuất dữ liệu có định dạng cấu trúc tương tự như C (tích hợp từ phiên bản Java 1.5). Định dạng tuân theo cú pháp: <code>%-W.Ptype</code>. Trong đó: Dấu trừ <code>-</code> thể hiện căn lề trái (mặc định căn phải), <code>W</code> thiết lập độ rộng hiển thị tối thiểu, <code>P</code> chỉ định số lượng chữ số thập phân độ chính xác (dành cho số thực). Các specifiers thông dụng gồm: <code>%d</code> (số nguyên), <code>%f</code> (số thực), <code>%s</code> (chuỗi), <code>%b</code> (boolean), <code>%c</code> (ký tự)."
                  ]
                },
                {
                  type: "java-printf-formatter"
                }
              ]
            }
          ]
        },
        {
          id: "oop-sub-intro-functions",
          number: "8",
          title: "API Lớp Math và Hàm tự định nghĩa (API & User-defined Functions)",
          parts: [
            {
              id: "oop-part-math-api",
              label: "a",
              title: "Sử dụng lớp Math (java.lang.Math)",
              content: [
                {
                  type: "paragraph",
                  text: "Lớp Math cung cấp một loạt các phương thức toán học static cực kỳ tiện lợi bao gồm:"
                },
                {
                  type: "bullets",
                  items: [
                    "<code>abs()</code>: Lấy giá trị tuyệt đối.",
                    "<code>ceil()</code>: Làm tròn lên số nguyên gần nhất.",
                    "<code>floor()</code>: Làm tròn xuống số nguyên gần nhất.",
                    "<code>max() / min()</code>: Tìm giá trị lớn nhất / nhỏ nhất giữa hai số.",
                    "<code>pow(cơ_số, số_mũ)</code>: Tính lũy thừa.",
                    "<code>sqrt()</code>: Tính căn bậc hai.",
                    "<code>random()</code>: Sinh số ngẫu nhiên dạng double lớn hơn hoặc bằng 0.0 và nhỏ hơn 1.0 ($[0.0, 1.0)$)."
                  ]
                },
                {
                  type: "paragraph",
                  text: "Ngoài ra, lớp Math quản lý hai hằng số tĩnh rất quan trọng là <code>Math.E</code> và <code>Math.PI</code>."
                }
              ]
            },
            {
              id: "oop-part-user-defined-functions",
              label: "b",
              title: "Hàm do người dùng tự định nghĩa (User-defined Functions)",
              content: [
                {
                  type: "paragraph",
                  text: "Trong Java, khái niệm hàm độc lập của mô hình lập trình thủ tục (như trong C) được chuyển đổi thành <b>static/class method (phương thức tĩnh/phương thức lớp)</b>. Các phương thức này luôn được khai báo kèm từ khóa <code>static</code> đặt trước kiểu dữ liệu trả về của hàm."
                },
                {
                  type: "definition",
                  text: "<b>Cơ chế truyền tham số vào hàm (Method Parameter Passing):</b> Java áp dụng cơ chế <b>truyền theo giá trị (pass by value)</b> cho toàn bộ các tham số. Khi phương thức được kích hoạt, một bản sao dữ liệu của đối số thực tế sẽ được nhân bản và gán vào tham số của hàm. Vì hai vùng nhớ của biến gốc và tham số hàm là hoàn toàn độc lập với nhau, nên mọi sự thay đổi giá trị của tham số bên trong hàm không gây bất kỳ tác động nào tới giá trị của biến gốc bên ngoài. Để cho phép hàm chỉnh sửa trực tiếp giá trị biến gốc, lập trình viên bắt buộc phải sử dụng kiểu dữ liệu tham chiếu đối tượng (object reference data type)."
                },
                {
                  type: "highlight",
                  text: "<b>Xem thêm:</b> Để hiểu sâu hơn về sự khác biệt giữa truyền tham trị và truyền tham chiếu trong bộ nhớ RAM, hãy tham khảo lại bài học chi tiết tại mục <a href='#content-pass-by-value-ref-visualizer' class='font-bold text-accent hover:underline'>Truyền Tham Trị & Truyền Tham Chiếu (Pass by Value vs Reference)</a> trong chương Cơ bản."
                }
              ]
            }
          ]
        },
        {
          id: "oop-sub-intro-summary",
          number: "9",
          title: "Tổng kết (Summary)",
          parts: [
            {
              id: "oop-part-intro-summary",
              label: "a",
              title: "Tóm tắt các kiến thức cốt lõi",
              content: [
                {
                  type: "paragraph",
                  text: "Bài học nhập môn đã khái quát toàn bộ các nền tảng cấu trúc ngữ pháp ban đầu của Java bao gồm các kiểu dữ liệu số nguyên (byte, short, int, long), số thực (float, double), kiểu logic boolean, cấu trúc rẽ nhánh điều kiện và vòng lặp lặp lại, cùng cách thức nhập xuất thông tin qua hai lớp tiện ích cơ bản là Scanner và Math. Đây là bước chuẩn bị quan trọng trước khi đi sâu vào các đặc tính lập trình hướng đối tượng nâng cao ở các chương tiếp theo."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "oop-section-array-string",
      roman: "II",
      title: "Mảng và Chuỗi (Array & String)",
      subsections: [
        {
          id: "oop-sub-array-string",
          number: "1",
          title: "Xử lý cấu trúc mảng và chuỗi ký tự",
          parts: [
            {
              id: "oop-part-array-string",
              label: "a",
              title: "Bài học 2: Mảng & Chuỗi",
              content: [
                {
                  type: "paragraph",
                  text: "Nội dung chi tiết của bài học đang được cập nhật. Tài liệu lý thuyết và ví dụ minh họa của bài học này sẽ được bổ sung sau."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "oop-section-string-buffers",
      roman: "III",
      title: "StringBuffer & StringBuilder",
      subsections: [
        {
          id: "oop-sub-string-buffers",
          number: "1",
          title: "Tối ưu hóa chuỗi khả biến trong Java",
          parts: [
            {
              id: "oop-part-string-buffers",
              label: "a",
              title: "Bài học 3: StringBuffer & StringBuilder",
              content: [
                {
                  type: "paragraph",
                  text: "Nội dung chi tiết của bài học đang được cập nhật. Tài liệu lý thuyết và ví dụ minh họa của bài học này sẽ được bổ sung sau."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "oop-section-class-objects",
      roman: "IV",
      title: "Đối tượng, Lớp, Constructor & Overload",
      subsections: [
        {
          id: "oop-sub-class-objects",
          number: "1",
          title: "Thiết lập lớp, hàm khởi tạo và nạp chồng phương thức",
          parts: [
            {
              id: "oop-part-class-objects",
              label: "a",
              title: "Bài học 4: Lớp & Đối tượng",
              content: [
                {
                  type: "paragraph",
                  text: "Nội dung chi tiết của bài học đang được cập nhật. Tài liệu lý thuyết và ví dụ minh họa của bài học này sẽ được bổ sung sau."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "oop-section-encapsulation",
      roman: "V",
      title: "Tính đóng gói & Phạm vi truy cập (Encapsulation)",
      subsections: [
        {
          id: "oop-sub-encapsulation",
          number: "1",
          title: "Che giấu thông tin chi tiết và phạm vi hoạt động của biến",
          parts: [
            {
              id: "oop-part-encapsulation",
              label: "a",
              title: "Bài học 5: Tính đóng gói & Modifier",
              content: [
                {
                  type: "paragraph",
                  text: "Nội dung chi tiết của bài học đang được cập nhật. Tài liệu lý thuyết và ví dụ minh họa của bài học này sẽ được bổ sung sau."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "oop-section-inheritance",
      roman: "VI",
      title: "Tính kế thừa (Inheritance)",
      subsections: [
        {
          id: "oop-sub-inheritance",
          number: "1",
          title: "Tái sử dụng mã nguồn và thiết lập mối quan hệ giữa các lớp",
          parts: [
            {
              id: "oop-part-inheritance",
              label: "a",
              title: "Bài học 6: Tính kế thừa",
              content: [
                {
                  type: "paragraph",
                  text: "Nội dung chi tiết của bài học đang được cập nhật. Tài liệu lý thuyết và ví dụ minh họa của bài học này sẽ được bổ sung sau."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "oop-section-abstract",
      roman: "VII",
      title: "Lớp trừu tượng (Abstract Class)",
      subsections: [
        {
          id: "oop-sub-abstract",
          number: "1",
          title: "Định nghĩa lớp trừu tượng và phương thức trừu tượng",
          parts: [
            {
              id: "oop-part-abstract",
              label: "a",
              title: "Bài học 7: Abstract Class",
              content: [
                {
                  type: "paragraph",
                  text: "Nội dung chi tiết của bài học đang được cập nhật. Tài liệu lý thuyết và ví dụ minh họa của bài học này sẽ được bổ sung sau."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "oop-section-interface",
      roman: "VIII",
      title: "Giao diện (Interface)",
      subsections: [
        {
          id: "oop-sub-interface",
          number: "1",
          title: "Thiết lập bộ khung giao tiếp đa kế thừa trong Java",
          parts: [
            {
              id: "oop-part-interface",
              label: "a",
              title: "Bài học 8: Interface",
              content: [
                {
                  type: "paragraph",
                  text: "Nội dung chi tiết của bài học đang được cập nhật. Tài liệu lý thuyết và ví dụ minh họa của bài học này sẽ được bổ sung sau."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "oop-section-collections",
      roman: "IX",
      title: "Cấu trúc lưu trữ dữ liệu (Collections Framework)",
      subsections: [
        {
          id: "oop-sub-collections",
          number: "1",
          title: "Lưu trữ dữ liệu động với List, Set, Map trong Java",
          parts: [
            {
              id: "oop-part-collections",
              label: "a",
              title: "Bài học 9: Collection of Data",
              content: [
                {
                  type: "paragraph",
                  text: "Nội dung chi tiết của bài học đang được cập nhật. Tài liệu lý thuyết và ví dụ minh họa của bài học này sẽ được bổ sung sau."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "oop-section-exceptions",
      roman: "X",
      title: "Xử lý ngoại lệ (Exceptions)",
      subsections: [
        {
          id: "oop-sub-exceptions",
          number: "1",
          title: "Kiểm soát và xử lý các lỗi runtime bằng try-catch-finally",
          parts: [
            {
              id: "oop-part-exceptions",
              label: "a",
              title: "Bài học 10: Exceptions",
              content: [
                {
                  type: "paragraph",
                  text: "Nội dung chi tiết của bài học đang được cập nhật. Tài liệu lý thuyết và ví dụ minh họa của bài học này sẽ được bổ sung sau."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "oop-section-files",
      roman: "XI",
      title: "Thao tác tệp tin (File I/O)",
      subsections: [
        {
          id: "oop-sub-files",
          number: "1",
          title: "Đọc và ghi dữ liệu ra tệp tin trong Java",
          parts: [
            {
              id: "oop-part-files",
              label: "a",
              title: "Bài học 11: File I/O",
              content: [
                {
                  type: "paragraph",
                  text: "Nội dung chi tiết của bài học đang được cập nhật. Tài liệu lý thuyết và ví dụ minh họa của bài học này sẽ được bổ sung sau."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "oop-section-nested",
      roman: "XII",
      title: "Lớp lồng nhau (Nested Class)",
      subsections: [
        {
          id: "oop-sub-nested",
          number: "1",
          title: "Khai báo Inner Class, Static Nested Class và Anonymous Class",
          parts: [
            {
              id: "oop-part-nested",
              label: "a",
              title: "Bài học 12: Nested Class",
              content: [
                {
                  type: "paragraph",
                  text: "Nội dung chi tiết của bài học đang được cập nhật. Tài liệu lý thuyết và ví dụ minh họa của bài học này sẽ được bổ sung sau."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "oop-section-patterns",
      roman: "XIII",
      title: "Mẫu thiết kế hướng đối tượng (Design Patterns)",
      subsections: [
        {
          id: "oop-sub-patterns",
          number: "1",
          title: "Các mẫu thiết kế kinh điển: Creational, Structural, Behavioral",
          parts: [
            {
              id: "oop-part-patterns",
              label: "a",
              title: "Bài học 13: Design Pattern",
              content: [
                {
                  type: "paragraph",
                  text: "Nội dung chi tiết của bài học đang được cập nhật. Tài liệu lý thuyết và ví dụ minh họa của bài học này sẽ được bổ sung sau."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
