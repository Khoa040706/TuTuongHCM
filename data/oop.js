/* ============================================================
   DỮ LIỆU CƠ BẢN: Môn Lập trình hướng đối tượng (OOP)
   ============================================================ */

export const oopData = {
  chapters: [
    {
      id: "oop-intro-to-java",
      title: "Bài 1 & 2",
      subtitle: "Intro to Java",
      sections: [
        // ==========================================
        // I. LỊCH SỬ & BỐI CẢNH JAVA
        // ==========================================
        {
          id: "oop-intro-history",
          roman: "I",
          title: "Lịch sử & Bối cảnh Java",
          subsections: [
            {
              id: "oop-sub-history",
              number: "",
              title: "Lịch sử & Bối cảnh Java",
              parts: [
                {
                  id: "oop-part-history-info",
                  label: "a",
                  title: "Lịch sử & Bối cảnh",
                  content: [
                    {
                      type: "label",
                      text: "Người sáng lập và cột mốc lịch sử:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Người tạo ra Java:</strong> James Gosling.",
                        "<strong>Năm ra đời:</strong> 1995, tại tập đoàn <strong>Sun Microsystems</strong>."
                      ]
                    },
                    {
                      type: "label",
                      text: "Định hướng thiết kế ngôn ngữ:"
                    },
                    {
                      type: "paragraph",
                      text: "Java sử dụng nền tảng cú pháp và tư duy từ ngôn ngữ C/C++ nhưng có những cải tiến quan trọng:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Cú pháp \"sạch\" hơn (<strong>cleaner syntax</strong>): Loại bỏ các thành phần phức tạp dễ gây lỗi của C/C++ như con trỏ trực tiếp (pointers) hay việc giải phóng bộ nhớ thủ công.",
                        "Ít thao tác trực tiếp với phần cứng hơn (<strong>less low-level machine interaction</strong>): Nâng cao tính an toàn của hệ thống và bảo mật thông tin."
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• Java ra đời năm 1995 bởi James Gosling (Sun Microsystems).<br/>• <strong>Dễ nhầm lẫn:</strong> Java <strong>không phải</strong> là phiên bản nâng cấp của C/C++, mà chỉ lấy C/C++ làm nền tảng thiết kế."
                    }
                  ]
                }
              ]
            }
          ]
        },
        // ==========================================
        // II. CHU TRÌNH CHẠY CHƯƠNG TRÌNH
        // ==========================================
        {
          id: "oop-intro-runcycle",
          roman: "II",
          title: "Chu trình chạy chương trình",
          subsections: [
            {
              id: "oop-sub-runcycle-general",
              number: "1",
              title: "Quy trình chung & Các loại lỗi",
              parts: [
                {
                  id: "oop-part-runcycle-steps",
                  label: "a",
                  title: "Quy trình chung & Các loại lỗi",
                  content: [
                    {
                      type: "label",
                      text: "Quy trình chung (3 bước):"
                    },
                    {
                      type: "numbered-group",
                      items: [
                        { number: "1", title: "Viết/chỉnh sửa chương trình (Writing/Editing)" },
                        { number: "2", title: "Biên dịch chương trình (Compiling)" },
                        { number: "3", title: "Thực thi file nhị phân (Executing Binary)" }
                      ]
                    },
                    {
                      type: "label",
                      text: "Các loại lỗi cần nhớ trong lập trình:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Compilation Error</strong>: Lỗi biên dịch. Xảy ra khi viết sai cú pháp (như thiếu chấm phẩy, khai báo sai kiểu...). Trình biên dịch sẽ phát hiện và không cho dịch ra file chạy.",
                        "<strong>Runtime Error</strong>: Lỗi khi chương trình đang chạy. Mã nguồn biên dịch thành công nhưng bị dừng đột ngột (crash) khi đang thực thi (ví dụ: chia cho số 0, lỗi truy cập ngoài chỉ mục mảng).",
                        "<strong>Logic Error</strong>: Lỗi logic. Chương trình biên dịch và chạy bình thường không báo lỗi, nhưng trả về kết quả sai so với yêu cầu nghiệp vụ."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-runcycle-c",
              number: "2",
              title: "Chu trình với chương trình C (ôn lại)",
              parts: [
                {
                  id: "oop-part-c-cycle",
                  label: "a",
                  title: "Chu trình biên dịch truyền thống của ngôn ngữ C",
                  content: [
                    {
                      type: "paragraph",
                      text: "Trong ngôn ngữ C, chu trình thực thi diễn ra tuần tự và phụ thuộc trực tiếp vào nền tảng hệ thống:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Viết mã nguồn bằng trình soạn thảo (ví dụ: <code>vim welcome.c</code>) ➔ thu được file mã nguồn <code>.c</code>.",
                        "Biên dịch bằng trình biên dịch C (ví dụ: <code>gcc</code>) ➔ sinh ra file nhị phân thực thi <code>a.out</code> (chứa mã máy gốc)."
                      ]
                    },
                    {
                      type: "code",
                      language: "bash",
                      code: "gcc -Wall welcome.c"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Thực thi file nhị phân vừa tạo để ra kết quả đầu ra."
                      ]
                    },
                    {
                      type: "code",
                      language: "bash",
                      code: "./a.out"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-runcycle-anywhere",
              number: "3",
              title: "Java: \"Compile Once, Run Anywhere\"",
              parts: [
                {
                  id: "oop-part-java-run-anywhere",
                  label: "a",
                  title: "Java: \"Compile Once, Run Anywhere\"",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "File thực thi nhị phân thông thường (như <code>a.out</code> của C) <strong>phụ thuộc trực tiếp vào hệ điều hành/phần cứng (OS/Hardware)</strong>.",
                        "➔ Một file biên dịch trên nền tảng này sẽ <strong>thường không chạy được</strong> trên nền tảng khác (ví dụ: file biên dịch trên Sunfire Unix không thể chạy trực tiếp trên Windows).",
                        "Java giải quyết vấn đề này bằng cách chèn thêm một môi trường phần cứng giả lập thống nhất bằng phần mềm.",
                        "Môi trường này gọi là <strong>Java Virtual Machine (JVM - Máy ảo Java)</strong>.",
                        "➔ Chỉ cần cài đặt JVM tương thích với hệ điều hành đang dùng, ta có thể chạy <strong>mọi bytecode Java</strong> mà <strong>không cần biên dịch lại mã nguồn</strong>."
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>💡 Giải thích thêm:</strong> Đây chính là ý nghĩa khẩu hiệu nổi tiếng của Java: <em>\"Write Once, Run Anywhere\"</em> (Viết một lần, chạy mọi nơi)."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-runcycle-java",
              number: "4",
              title: "Chu trình chạy chương trình Java",
              parts: [
                {
                  id: "oop-part-java-cycle",
                  label: "a",
                  title: "Chu trình biên dịch và chạy của Java",
                  content: [
                    {
                      type: "paragraph",
                      text: "Quy trình thực tế khi phát triển ứng dụng Java:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Viết chương trình:</strong> dùng text editor soạn thảo mã nguồn ➔ file phải có đuôi <code>.java</code>.",
                        "<strong>Biên dịch:</strong> dùng trình biên dịch <code>javac</code> để dịch file nguồn ➔ sinh ra file bytecode trung gian có đuôi <code>.class</code> (gọi là <strong>Java Executable Bytecode</strong>).",
                        "<strong>Thực thi:</strong> nạp file <code>.class</code> chạy trên môi trường máy ảo <strong>JVM</strong> bằng lệnh <code>java</code>."
                      ]
                    },
                    {
                      type: "code",
                      language: "bash",
                      code: "java HelloWorld\n\n// Lưu ý: BẮT BUỘC bỏ đuôi .class khi khởi chạy chương trình"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• Thứ tự file: <code>.java</code> ➔ (javac) ➔ <code>.class</code> ➔ (java) ➔ chạy trên JVM.<br/>• Điểm dễ nhầm lẫn: khi chạy chương trình Java, gõ <code>java HelloWorld</code> <strong>KHÔNG</strong> kèm đuôi <code>.class</code>.<br/>• <strong>JVM</strong> là \"trái tim\" giúp Java chạy đa nền tảng."
                    },
                    {
                      type: "java-run-cycle-visualizer"
                    }
                  ]
                }
              ]
            }
          ]
        },
        // ==========================================
        // III. CẤU TRÚC CƠ BẢN CỦA CHƯƠNG TRÌNH JAVA
        // ==========================================
        {
          id: "oop-intro-structure",
          roman: "III",
          title: "Cấu trúc cơ bản",
          subsections: [
            {
              id: "oop-sub-structure-compare",
              number: "1",
              title: "So sánh Hello World: C vs Java",
              parts: [
                {
                  id: "oop-part-helloworld-compare",
                  label: "a",
                  title: "So sánh Hello World: C vs Java",
                  content: [
                    {
                      type: "paragraph",
                      text: "Quan sát cấu trúc mã nguồn đơn giản in chuỗi chữ giữa hai ngôn ngữ:"
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
import java.lang.*; // optional

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`
                    },
                    {
                      type: "highlight",
                      text: "<strong>💡 Giải thích từng thành phần quan trọng của Java:</strong><br/>• <code>import java.lang.*;</code> ➔ khai báo nhập thư viện. Dòng này <strong>tùy chọn (optional)</strong> vì gói <code>java.lang</code> luôn được tự động import mặc định.<br/>• <code>public</code> ➔ từ khóa truy cập (access modifier) cho phép lớp/phương thức được gọi từ bên ngoài.<br/>• <code>class HelloWorld</code> ➔ khai báo một lớp (class) tên là <code>HelloWorld</code>.<br/>• <code>static</code> ➔ phương thức tĩnh thuộc về lớp, có thể gọi trực tiếp mà không cần khởi tạo đối tượng.<br/>• <code>void</code> ➔ kiểu trả về rỗng (phương thức không trả về kết quả).<br/>• <code>main(String[] args)</code> ➔ điểm khởi đầu chạy chương trình, nhận mảng tham số chuỗi.<br/>• <code>System.out.println(...)</code> ➔ in nội dung ra màn hình và tự động xuống dòng."
                    },
                    {
                      type: "definition",
                      text: "<strong>⚠️ Lỗi thường gặp ở người mới học:</strong> Tên của lớp công khai (<code>public class</code>) bắt buộc phải <strong>trùng khớp hoàn toàn</strong> với tên <strong>file vật lý chứa mã nguồn</strong> (Ví dụ: class <code>HelloWorld</code> bắt buộc phải lưu trong file tên là <code>HelloWorld.java</code>)."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-structure-key",
              number: "2",
              title: "Nhận xét quan trọng (Key Observations)",
              parts: [
                {
                  id: "oop-part-key-observations",
                  label: "a",
                  title: "Nhận xét quan trọng (Key Observations)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Thư viện trong Java được gọi là <strong>package (gói)</strong>, tổ chức theo cấu trúc cây thư mục phân cấp (hierarchical) để tránh trùng lặp tên.",
                        "Ví dụ: <code>System.out.println()</code> nằm trong cấu trúc <code>java.lang.System</code>. Có nghĩa <code>lang</code> là package con nằm trong package chi <code>java</code>, và <code>System</code> là một lớp (class) thuộc package <code>lang</code>.",
                        "Muốn sử dụng các package có sẵn, ta sử dụng từ khóa <code>import XXXXXX;</code>. Sử dụng ký tự đại diện <code>*</code> (wildcard) để import toàn bộ các class trong một package.",
                        "Package <code>java.lang</code> được import mặc định nên không bắt buộc phải viết lệnh import ở đầu.",
                        "Phương thức <code>main()</code> bắt buộc phải nằm <strong>trong một class</strong>. Trong một chương trình chỉ có <strong>duy nhất một</strong> phương thức <code>main()</code> làm điểm xuất phát khởi chạy (execution starting point).",
                        "Một file mã nguồn có thể chứa nhiều class, nhưng tại thời điểm này ta nên tuân thủ quy tắc <strong>1 class / 1 file</strong>.",
                        "Mỗi class đơn lẻ khi biên dịch sẽ sinh ra <strong>một file .class riêng biệt</strong> mang tên của chính lớp đó."
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• <strong>Package (gói)</strong> là thư viện trong Java, tổ chức dạng cây phân cấp.<br/>• Phương thức <code>main()</code> là duy nhất và luôn nằm bên trong 1 <code>class</code>.<br/>• Tên lớp <code>public class</code> phải khớp hoàn toàn với tên file nguồn <code>.java</code>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        // ==========================================
        // IV. BIỂU THỨC SỐ HỌC
        // ==========================================
        {
          id: "oop-intro-expressions",
          roman: "IV",
          title: "Biểu thức số học",
          subsections: [
            {
              id: "oop-sub-expressions-defs",
              number: "1",
              title: "Định danh, Biến, Hằng số",
              parts: [
                {
                  id: "oop-part-definitions",
                  label: "a",
                  title: "Định danh, Biến, Hằng số (Identifier, Variable, Constant)",
                  content: [
                    {
                      type: "label",
                      text: "1. Định danh (Identifier):"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Identifier (định danh):</strong> tên được gắn với một thực thể trong chương trình (ví dụ: tên lớp, tên biến, tên phương thức, tên tham số...)."
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Quy tắc đặt định danh hợp lệ trong Java:</strong> Chỉ gồm các chữ cái (a-z, A-Z), chữ số (0-9), dấu gạch dưới (<code>_</code>) và ký hiệu đô-la (<code>$</code>).",
                        "<strong>Điều kiện bắt buộc:</strong> Định danh <strong>không được bắt đầu bằng chữ số</strong>."
                      ]
                    },
                    {
                      type: "label",
                      text: "2. Biến (Variable):"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Variable (biến):</strong> vùng nhớ dùng để lưu trữ dữ liệu trong quá trình chạy chương trình. Mọi biến trong Java bắt buộc phải được khai báo kèm theo một <strong>kiểu dữ liệu cụ thể</strong>."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "int countDays;\ndouble priceOfItem;"
                    },
                    {
                      type: "label",
                      text: "3. Hằng số (Constant):"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Constant (hằng số):</strong> đại diện cho một giá trị cố định, không thể thay đổi sau khi đã gán lần đầu tiên. Trong Java, ta sử dụng từ khóa <strong>final</strong> để chỉ định hằng số."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "public static final int PASSING_MARK = 65;"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-expressions-naming",
              number: "2",
              title: "Quy tắc đặt tên (Naming Convention)",
              parts: [
                {
                  id: "oop-part-naming",
                  label: "a",
                  title: "Quy tắc đặt tên (Naming Convention)",
                  content: [
                    {
                      type: "paragraph",
                      text: "Để mã nguồn sạch và dễ bảo trì, Java khuyến nghị tuân thủ nghiêm ngặt các quy tắc đặt tên sau:"
                    },
                    {
                      type: "table",
                      headers: ["Đối tượng", "Quy tắc đặt tên", "Ví dụ"],
                      rows: [
                        ["Tên Class", "UpperCamelCase (Viết hoa chữ cái đầu mỗi từ)", "<code>Math</code>, <code>HelloWorld</code>, <code>ConvexGeometricShape</code>"],
                        ["Tên Biến / Phương thức", "lowerCamelCase (Viết hoa chữ cái đầu từ thứ hai trở đi)", "<code>countDays</code>, <code>innerDiameter</code>, <code>numOfCoins</code>"],
                        ["Tên Hằng số (Constant)", "VIẾT HOA TOÀN BỘ + nối bằng dấu gạch dưới <code>_</code>", "<code>PI</code>, <code>CONVERSION_RATE</code>, <code>CM_PER_INCH</code>"]
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• Từ khóa <code>final</code> đánh dấu giá trị là hằng số, không thể sửa đổi.<br/>• <strong>Rất dễ ra thi:</strong> Phân biệt rõ UpperCamelCase cho Class, lowerCamelCase cho biến/hàm, và UPPER_CASE cho hằng số."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-expressions-datatypes",
              number: "3",
              title: "Các kiểu dữ liệu số (Numeric Data Types)",
              parts: [
                {
                  id: "oop-part-datatypes",
                  label: "a",
                  title: "Các kiểu dữ liệu số (Numeric Data Types)",
                  content: [
                    {
                      type: "label",
                      text: "1. Kiểu dữ liệu số nguyên (Integer Data Types):"
                    },
                    {
                      type: "table",
                      headers: ["Kiểu dữ liệu", "Kích thước (byte)", "Phạm vi giá trị"],
                      rows: [
                        ["<code>byte</code>", "1 byte", "$-2^7$ đến $2^7 - 1$ ($-128$ đến $127$)"],
                        ["<code>short</code>", "2 bytes", "$-2^{15}$ đến $2^{15} - 1$ ($-32,768$ đến $32,767$)"],
                        ["<code>int</code>", "4 bytes", "$-2^{31}$ đến $2^{31} - 1$ (khoảng $-2.14$ tỷ đến $2.14$ tỷ)"],
                        ["<code>long</code>", "8 bytes", "$-2^{63}$ đến $2^{63} - 1$"]
                      ]
                    },
                    {
                      type: "label",
                      text: "2. Kiểu dữ liệu số thực (Floating-Point Data Types):"
                    },
                    {
                      type: "table",
                      headers: ["Kiểu dữ liệu", "Kích thước (byte)", "Phạm vi giá trị"],
                      rows: [
                        ["<code>float</code>", "4 bytes", "Âm: $-3.4028235 \\times 10^{38}$ đến $-1.4 \\times 10^{-45}$<br/>Dương: $1.4 \\times 10^{-45}$ đến $3.4028235 \\times 10^{38}$"],
                        ["<code>double</code>", "8 bytes", "Âm: $-1.79 \\times 10^{308}$ đến $-4.9 \\times 10^{-324}$<br/>Dương: $4.9 \\times 10^{-324}$ đến $1.79 \\times 10^{308}$"]
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong> Nếu không có yêu cầu đặc biệt khác từ bài toán, theo mặc định trong Java:<br/>• Sử dụng kiểu <code>int</code> cho các số nguyên.<br/>• Sử dụng kiểu <code>double</code> cho các số thực."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-expressions-operators",
              number: "4",
              title: "Toán tử số học & Thứ tự ưu tiên",
              parts: [
                {
                  id: "oop-part-operators",
                  label: "a",
                  title: "Toán tử số học & Thứ tự ưu tiên",
                  content: [
                    {
                      type: "paragraph",
                      text: "Các toán tử số học cơ bản trong Java được liệt kê theo thứ tự ưu tiên giảm dần từ trên xuống dưới:"
                    },
                    {
                      type: "table",
                      headers: ["Toán tử", "Ý nghĩa", "Chiều kết hợp"],
                      rows: [
                        ["<code>()</code>", "Nhóm biểu thức trong ngoặc", "Trái ➔ Phải"],
                        ["<code>++</code>, <code>--</code> (hậu tố)", "Tăng / Giảm giá trị sau khi thực hiện lệnh", "Phải ➔ Trái"],
                        ["<code>++</code>, <code>--</code> (tiền tố)<br/><code>+</code>, <code>-</code> (dấu 1 ngôi)", "Tăng / Giảm giá trị trước khi thực hiện lệnh<br/>Biểu thị số âm hoặc số dương", "Phải ➔ Trái"],
                        ["<code>*</code>, <code>/</code>, <code>%</code>", "Phép nhân, Phép chia, Phép chia lấy phần dư", "Trái ➔ Phải"],
                        ["<code>+</code>, <code>-</code>", "Phép cộng, Phép trừ", "Trái ➔ Phải"],
                        ["<code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code>", "Toán tử gán và gán rút gọn", "Phải ➔ Trái"]
                      ]
                    },
                    {
                      type: "bullets",
                      items: [
                        "Khi tính toán biểu thức phức tạp, máy tính sẽ xác định độ ưu tiên dựa trên bảng trên (<strong>operator precedence</strong>).",
                        "Nếu các toán tử có cùng độ ưu tiên, thứ tự tính toán được quyết định bởi chiều kết hợp (<strong>associativity</strong>).",
                        "Nếu các toán hạng thuộc hai kiểu dữ liệu khác nhau, Java sẽ tự động chuyển đổi kiểu dữ liệu (<strong>data type conversion</strong>) về kiểu rộng hơn trước khi tính."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-expressions-conversion",
              number: "5",
              title: "Chuyển đổi kiểu dữ liệu (Data Type Conversion)",
              parts: [
                {
                  id: "oop-part-conversion",
                  label: "a",
                  title: "Chuyển đổi kiểu dữ liệu (Data Type Conversion)",
                  content: [
                    {
                      type: "label",
                      text: "1. Lỗi phép chia số nguyên (Integer Division Pitfall):"
                    },
                    {
                      type: "paragraph",
                      text: "Nếu thực hiện phép chia giữa hai số nguyên, Java sẽ thực hiện phép chia nguyên và cắt bỏ hoàn toàn phần thập phân của kết quả."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "double d;\nint i = 31415;\nd = i / 10000; // LỖI LOGIC: Kết quả thu được là 3.0 chứ không phải 3.1415"
                    },
                    {
                      type: "label",
                      text: "2. Ép kiểu dữ liệu chủ động (Type Casting):"
                    },
                    {
                      type: "paragraph",
                      text: "Để chuyển đổi kiểu dữ liệu theo ý muốn, ta sử dụng cú pháp: <code>(tên_kiểu) giá_trị;</code>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "double d = 3.14159;\nint i = (int) d; // i nhận giá trị là 3 (phần thập phân bị cắt bỏ hoàn toàn)"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• Ép kiểu từ số thực (<code>double</code>, <code>float</code>) sang số nguyên (<code>int</code>) sẽ <strong>cắt bỏ toàn bộ phần thập phân</strong>, hoàn toàn không làm tròn số.<br/>• Lỗi chia nguyên cực kỳ phổ biến: <code>i / 10000</code> khi cả hai biến đều là kiểu <code>int</code> ➔ mất phần thập phân trước khi gán cho biến thực."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-expressions-example",
              number: "6",
              title: "Bài tập ví dụ: Đổi Fahrenheit sang Celsius",
              parts: [
                {
                  id: "oop-part-example",
                  label: "a",
                  title: "Bài tập ví dụ: Đổi độ Fahrenheit sang Celsius",
                  content: [
                    {
                      type: "paragraph",
                      text: "Chương trình thực hiện tính nhiệt độ Celsius dựa trên nhiệt độ Fahrenheit cho trước:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: `public class Temperature {\n    public static void main(String[] args) {\n        double fahrenheit, celsius;\n        fahrenheit = 123.5;\n        \n        // Sử dụng 5.0/9 để ép kết quả phép chia sang kiểu số thực (double)\n        celsius = (5.0 / 9) * (fahrenheit - 32);\n        \n        System.out.println("Celsius: " + celsius);\n    }\n}`
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Kết quả hiển thị trên Console:</strong>"
                    },
                    {
                      type: "code",
                      language: "bash",
                      code: "Celsius: 50.833333333333336"
                    },
                    {
                      type: "highlight",
                      text: "<strong>💡 Giải thích chi tiết các điểm quan trọng:</strong><br/>• Phải viết là <code>5.0 / 9</code> (thay vì <code>5 / 9</code>) ➔ <code>5 / 9</code> sẽ trả về <code>0</code> vì đây là phép chia nguyên, dẫn đến biểu thức luôn bằng <code>0</code>. Việc viết <code>5.0</code> giúp ép phép chia thành phép chia thực.<br/>• Ký tự <code>+</code> trong <code>\"Celsius: \" + celsius</code> ➔ đây là <strong>toán tử nối chuỗi (concatenate operator)</strong>, nó tự động chuyển đổi biến thực <code>celsius</code> thành chuỗi rồi ghép lại.<br/>• Lệnh <code>System.out.print()</code> (không có chữ \"ln\") ➔ thực hiện in ra màn hình nhưng <strong>không tự động xuống dòng</strong> ở cuối dòng."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-intro-control",
          roman: "V",
          title: "Câu lệnh điều khiển",
          subsections: [
            {
              id: "oop-sub-control-boolean",
              number: "1",
              title: "Kiểu dữ liệu Boolean",
              parts: [
                {
                  id: "oop-part-boolean-type",
                  label: "a",
                  title: "Kiểu dữ liệu Boolean (mới trong Java so với C)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Java có <strong>kiểu dữ liệu boolean thực sự</strong>.",
                        "Lưu giá trị <code>true</code> hoặc <code>false</code> – đây là <strong>từ khóa (keyword)</strong> trong Java.",
                        "<strong>Biểu thức boolean (Boolean expression)</strong> luôn cho ra <code>true</code> hoặc <code>false</code>."
                      ]
                    },
                    {
                      type: "code",
                      language: "java",
                      code: `boolean isEven;\nint input;\nif (input % 2 == 0) {\n    isEven = true;\n} else {\n    isEven = false;\n}\n\nif (isEven) {\n    System.out.println("Input is even!");\n}\n\n// Tương đương:\nisEven = (input % 2 == 0);`
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-control-operators",
              number: "2",
              title: "Toán tử Boolean",
              parts: [
                {
                  id: "oop-part-boolean-operators",
                  label: "a",
                  title: "Toán tử Boolean",
                  content: [
                    {
                      type: "label",
                      text: "1. Toán tử quan hệ (Relational Operators):"
                    },
                    {
                      type: "table",
                      headers: ["Toán tử", "Ý nghĩa", "Ví dụ trong Java"],
                      rows: [
                        ["<code>&lt;</code>", "nhỏ hơn (less than)", "<code>a &lt; b</code>"],
                        ["<code>&gt;</code>", "lớn hơn (greater than)", "<code>a &gt; b</code>"],
                        ["<code>&lt;=</code>", "nhỏ hơn hoặc bằng", "<code>a &lt;= b</code>"],
                        ["<code>&gt;=</code>", "lớn hơn hoặc bằng", "<code>a &gt;= b</code>"],
                        ["<code>==</code>", "bằng (so sánh bằng)", "<code>a == b</code>"],
                        ["<code>!=</code>", "khác (so sánh không bằng)", "<code>a != b</code>"]
                      ]
                    },
                    {
                      type: "label",
                      text: "2. Toán tử luận lý (Logical Operators):"
                    },
                    {
                      type: "table",
                      headers: ["Toán tử", "Ý nghĩa", "Ví dụ trong Java"],
                      rows: [
                        ["<code>&&</code>", "và (phép hội - AND)", "<code>(a &lt; b) && (b &lt; c)</code>"],
                        ["<code>||</code>", "hoặc (phép tuyển - OR)", "<code>(a &lt; b) || (b &lt; c)</code>"],
                        ["<code>!</code>", "phủ định (phép phủ định - NOT)", "<code>!(a &lt; b)</code>"],
                        ["<code>^</code>", "hoặc loại trừ (exclusive-or - XOR)", "<code>(a &lt; b) ^ (c &lt; d)</code>"]
                      ]
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Toán tử quan hệ:</strong> Toán hạng là các <strong>biến/giá trị số</strong> so sánh trực tiếp với nhau (Ví dụ: <code>X < Y</code>).",
                        "<strong>Toán tử luận lý:</strong> Toán hạng bắt buộc phải là các <strong>biến hoặc biểu thức boolean</strong> (Ví dụ: <code>(X < Y) && (Y < Z)</code>)."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-control-compare-c",
              number: "3",
              title: "So sánh với C",
              parts: [
                {
                  id: "oop-part-compare-c",
                  label: "a",
                  title: "So sánh kiểu Boolean giữa Java và C",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Trong C, <strong>không có kiểu boolean thực sự</strong>: số 0 đại diện cho <code>false</code>, mọi giá trị khác 0 đại diện cho <code>true</code>."
                      ]
                    },
                    {
                      type: "code",
                      language: "c",
                      code: `if (x % 3) { // Hợp lệ trong C\n    ...\n}`
                    },
                    {
                      type: "bullets",
                      items: [
                        "Trong Java, cách viết trên là <strong>KHÔNG hợp lệ (invalid)</strong>. Ta phải viết rõ ràng biểu thức so sánh trả về kiểu boolean:"
                      ]
                    },
                    {
                      type: "code",
                      language: "java",
                      code: `if (x % 3 != 0) { // Bắt buộc trong Java\n    ...\n}`
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• <strong>Rất dễ ra thi:</strong> Java <strong>KHÔNG CHO PHÉP</strong> dùng số nguyên làm điều kiện trong câu lệnh <code>if</code> / <code>while</code> như C. Điều kiện bắt buộc phải là biểu thức trả về kiểu <strong>boolean</strong>."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-control-selection",
              number: "4",
              title: "Câu lệnh rẽ nhánh (Selection Statements)",
              parts: [
                {
                  id: "oop-part-selection",
                  label: "a",
                  title: "Câu lệnh rẽ nhánh (Selection Statements)",
                  content: [
                    {
                      type: "label",
                      text: "1. Cấu trúc if-else:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: `if (a > b) {\n    ...\n} else {\n    ...\n}`
                    },
                    {
                      type: "bullets",
                      items: [
                        "Phần <code>else</code> là <strong>tùy chọn (optional)</strong>.",
                        "Điều kiện bắt buộc là biểu thức boolean (khác với C cho phép số nguyên)."
                      ]
                    },
                    {
                      type: "label",
                      text: "2. Cấu trúc switch-case:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: `switch (a) {\n    case 1:\n        ...\n        break;\n    case 2:\n    case 3:\n        ...\n        break;\n    default:\n        ...\n}`
                    },
                    {
                      type: "bullets",
                      items: [
                        "Biểu thức trong <code>switch()</code> phải cho ra giá trị thuộc kiểu <code>char</code>, <code>byte</code>, <code>short</code> hoặc <code>int</code> (trong các phiên bản Java mới hơn hỗ trợ cả <code>String</code> và Enum).",
                        "Từ khóa <code>break</code> dùng để dừng thực thi, tránh bị rơi xuyên xuống các case bên dưới (fall-through).",
                        "Nhãn <code>default</code> dùng để bắt các trường hợp không khớp, đây là phần <strong>tùy chọn (optional)</strong>."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-control-repetition",
              number: "5",
              title: "Câu lệnh lặp (Repetition Statements)",
              parts: [
                {
                  id: "oop-part-repetition",
                  label: "a",
                  title: "Câu lệnh lặp (Repetition Statements)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Mọi điều kiện lặp trong Java đều <strong>bắt buộc là biểu thức boolean</strong>."
                      ]
                    },
                    {
                      type: "label",
                      text: "1. Vòng lặp while (Kiểm tra điều kiện trước khi thực thi):"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: `while (a > b) {\n    ... // body\n}`
                    },
                    {
                      type: "label",
                      text: "2. Vòng lặp do-while (Thực thi thân vòng lặp trước, kiểm tra điều kiện sau):"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: `do {\n    ... // body\n} while (a > b);`
                    },
                    {
                      type: "label",
                      text: "3. Vòng lặp for:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: `for (A; B; C) {\n    ... // body\n}`
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>A (Khởi tạo):</strong> Ví dụ <code>int i = 0</code>.",
                        "<strong>B (Điều kiện lặp):</strong> Ví dụ <code>i < 10</code> (phải là kiểu boolean).",
                        "<strong>C (Cập nhật bước nhảy):</strong> Ví dụ <code>i++</code>.",
                        "Bất kỳ phần nào trong ba phần A, B, C đều có thể để trống.",
                        "Thứ tự chạy tuần tự: <strong>A ➔ B ➔ body ➔ C ➔ B ➔ body ➔ C...</strong>"
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• Phân biệt rõ <code>while</code> (kiểm tra trước) và <code>do-while</code> (chạy trước, kiểm tra sau) – <code>do-while</code> luôn chạy <strong>ít nhất 1 lần</strong>.<br/>• Vòng lặp <code>for</code>: thứ tự thực hiện bước nhảy và kiểm tra điều kiện là A ➔ B ➔ body ➔ C."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-intro-io",
          roman: "VI",
          title: "Nhập/Xuất cơ bản",
          subsections: [
            {
              id: "oop-sub-io-scanner",
              number: "1",
              title: "Đọc dữ liệu nhập: Lớp Scanner",
              parts: [
                {
                  id: "oop-part-io-scanner-basic",
                  label: "a",
                  title: "Đọc dữ liệu nhập: Lớp Scanner",
                  content: [
                    {
                      type: "label",
                      text: "1. Khai báo import thư viện:"
                    },
                    {
                      type: "paragraph",
                      text: "Lớp <code>Scanner</code> thuộc package <code>java.util</code>, vì thế ta bắt buộc phải khai báo import ở đầu chương trình."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "import java.util.Scanner;"
                    },
                    {
                      type: "label",
                      text: "2. Cú pháp khởi tạo Scanner:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "// Khai báo và tạo mới đối tượng Scanner liên kết với bàn phím (System.in)\nScanner sc = new Scanner(System.in);"
                    },
                    {
                      type: "label",
                      text: "3. Các phương thức đọc dữ liệu thông dụng:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>sc.nextInt()</code>: Đọc token số nguyên tiếp theo và chuyển đổi thành kiểu <code>int</code>.",
                        "<code>sc.nextDouble()</code>: Đọc token số thực tiếp theo và chuyển đổi thành kiểu <code>double</code>.",
                        "<code>sc.next()</code>: Đọc và trả về một token dạng chuỗi ký tự (String) dừng trước khoảng trắng đầu tiên.",
                        "<code>sc.nextLine()</code>: Đọc toàn bộ chuỗi ký tự trên dòng hiện tại cho đến khi gặp ký tự xuống dòng <code>\\n</code>."
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>💡 Giải thích chi tiết câu lệnh khởi tạo:</strong><br/>• <code>Scanner sc</code>: Khai báo biến tham chiếu đối tượng đặt tên là <code>sc</code> kiểu dữ liệu là <code>Scanner</code>.<br/>• <code>new Scanner(System.in)</code>: Sử dụng từ khóa <code>new</code> để gọi phương thức khởi tạo (Constructor) tạo ra một <strong>đối tượng Scanner thực tế</strong> nằm trong bộ nhớ RAM, liên kết luồng đọc với nguồn nhập chuẩn <code>System.in</code> (bàn phím)."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-io-pitfalls",
              number: "2",
              title: "Điểm cần lưu ý khi đọc dữ liệu nhập",
              parts: [
                {
                  id: "oop-part-io-scanner-pitfalls",
                  label: "a",
                  title: "Điểm cần lưu ý khi đọc dữ liệu nhập",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Một đối tượng dùng chung:</strong> Thông thường ta chỉ cần <strong>duy nhất 1 đối tượng Scanner</strong> (ví dụ: <code>sc</code>) là đủ để đọc nhiều giá trị trong toàn bộ chương trình.",
                        "Tránh tạo nhiều Scanner trỏ cùng vào nguồn <code>System.in</code>.",
                        "<strong>⚠️ Cảnh báo CodeCrunch (Cực kỳ quan trọng khi làm bài tập tự động):</strong> Trên hệ thống chấm CodeCrunch, chương trình của bạn sẽ <strong>bị lỗi hệ thống (Crash/Tắt luồng)</strong> nếu khai báo nhiều hơn 1 đối tượng Scanner. Hãy tập thói quen chỉ sử dụng 1 Scanner duy nhất."
                      ]
                    },
                    {
                      type: "java-scanner-visualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-io-output",
              number: "3",
              title: "Xuất dữ liệu: Standard Output",
              parts: [
                {
                  id: "oop-part-io-output-basic",
                  label: "a",
                  title: "Xuất dữ liệu: Standard Output",
                  content: [
                    {
                      type: "paragraph",
                      text: "Trong Java, <code>System.out</code> đại diện cho luồng xuất dữ liệu chuẩn ra màn hình (Console/Monitor)."
                    },
                    {
                      type: "label",
                      text: "Các cú pháp in dữ liệu cơ bản:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>System.out.print( chuỗi_ký_tự );</code>: In chuỗi ra màn hình nhưng con trỏ dừng ngay sau ký tự cuối cùng, <strong>không tự động xuống dòng</strong>.",
                        "<code>System.out.println( chuỗi_ký_tự );</code>: In chuỗi ra màn hình và <strong>tự động xuống dòng</strong> ở cuối.",
                        "<code>System.out.printf( định_dạng, tham_số );</code>: In dữ liệu có định dạng theo chuẩn tương tự C."
                      ]
                    },
                    {
                      type: "label",
                      text: "Ví dụ so sánh cách in:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: `System.out.print("ABC");\nSystem.out.println("DEF");\nSystem.out.println("GHI");\nSystem.out.printf("Very C-like %.3f\\n", 3.14159);`
                    },
                    {
                      type: "label",
                      text: "Màn hình Console hiển thị:"
                    },
                    {
                      type: "code",
                      language: "bash",
                      code: "ABCDEF\nGHI\nVery C-like 3.142"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-io-printf",
              number: "4",
              title: "Xuất dữ liệu: printf()",
              parts: [
                {
                  id: "oop-part-io-printf-details",
                  label: "a",
                  title: "Xuất dữ liệu: printf()",
                  content: [
                    {
                      type: "paragraph",
                      text: "Phương thức <code>printf()</code> được giới thiệu từ <strong>Java 1.5</strong> giúp việc in các dữ liệu định vị độ rộng và số lẻ số thực giống như C."
                    },
                    {
                      type: "table",
                      headers: ["Bộ định dạng (Specifier)", "Ý nghĩa kiểu dữ liệu"],
                      rows: [
                        ["<code>%d</code>", "Số nguyên (integer)"],
                        ["<code>%f</code>", "Số thực (double, float)"],
                        ["<code>%s</code>", "Chuỗi ký tự (String)"],
                        ["<code>%b</code>", "Kiểu đúng/sai (boolean)"],
                        ["<code>%c</code>", "Ký tự (character)"]
                      ]
                    },
                    {
                      type: "label",
                      text: "Cấu trúc nâng cao của bộ định dạng:"
                    },
                    {
                      type: "paragraph",
                      text: "Cú pháp nâng cao: <code>%[cờ][độ_rộng].[số_lẻ]kiểu</code>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Dấu <code>-</code> (cờ): Căn lề trái (mặc định nếu không có là căn lề phải).",
                        "<code>[độ_rộng]</code>: Quy định tổng số ký tự tối thiểu in ra (ví dụ <code>%10d</code>).",
                        "<code>.[số_lẻ]</code>: Quy định số chữ số thập phân in ra đối với số thực (ví dụ <code>%.2f</code>)."
                      ]
                    },
                    {
                      type: "java-printf-formatter"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• Scanner bắt buộc phải <code>import java.util.Scanner;</code> và khởi tạo thông qua <code>new Scanner(System.in)</code>.<br/>• <strong>Quy chuẩn CodeCrunch:</strong> Chỉ khởi tạo duy nhất <strong>1 đối tượng Scanner</strong> trong toàn chương trình.<br/>• Phân biệt rõ: <code>print()</code> (không xuống dòng), <code>println()</code> (xuống dòng), <code>printf()</code> (in định dạng)."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-intro-api",
          roman: "VII",
          title: "API (Application Programming Interface)",
          subsections: [
            {
              id: "oop-sub-api-concept",
              number: "",
              title: "Khái niệm API & JavaDocs",
              parts: [
                {
                  id: "oop-part-api-concept",
                  label: "",
                  title: "Khái niệm API & JavaDocs",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>API (Application Programming Interface)</strong> là giao diện lập trình ứng dụng. Trong Java, API đại diện cho tập hợp hàng ngàn lớp và thư viện viết sẵn mà Java cung cấp cho lập trình viên sử dụng (như lớp <code>System</code>, <code>String</code>, <code>Scanner</code>, <code>Math</code>...)."
                    },
                    {
                      type: "paragraph",
                      text: "💡 <strong>Giải thích thêm:</strong> Do đây là bài học giới thiệu ban đầu, chi tiết về cách tra cứu tài liệu JavaDocs và sử dụng sâu hơn các thư viện API khác sẽ được giải thích kỹ hơn ở các bài học phía sau."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-intro-math",
          roman: "VIII",
          title: "Lớp Math & Thuộc tính lớp",
          subsections: [
            {
              id: "oop-sub-math-methods",
              number: "1",
              title: "Các phương thức hữu ích của lớp Math",
              parts: [
                {
                  id: "oop-part-math-methods",
                  label: "a",
                  title: "Các phương thức hữu ích của lớp Math",
                  content: [
                    {
                      type: "paragraph",
                      text: "Lớp <code>Math</code> thuộc package <code>java.lang</code> (đây là package mặc định của Java, do đó ta <strong>không cần viết lệnh import</strong> mà có thể gọi sử dụng trực tiếp)."
                    },
                    {
                      type: "table",
                      headers: ["Phương thức", "Ý nghĩa chức năng", "Ví dụ trong Java"],
                      rows: [
                        ["<code>Math.abs(x)</code>", "Trả về giá trị tuyệt đối của x (luôn là số dương).", "<code>Math.abs(-5)</code> ➔ <code>5</code>"],
                        ["<code>Math.ceil(x)</code>", "Làm tròn <strong>lên</strong> số nguyên gần nhất.", "<code>Math.ceil(-3.5)</code> ➔ <code>-3.0</code>"],
                        ["<code>Math.floor(x)</code>", "Làm tròn <strong>xuống</strong> số nguyên gần nhất.", "<code>Math.floor(-3.5)</code> ➔ <code>-4.0</code>"],
                        ["<code>Math.max(x, y)</code>", "Trả về số lớn nhất giữa x và y.", "<code>Math.max(10, 20)</code> ➔ <code>20</code>"],
                        ["<code>Math.min(x, y)</code>", "Trả về số nhỏ nhất giữa x và y.", "<code>Math.min(10, 20)</code> ➔ <code>10</code>"],
                        ["<code>Math.pow(x, y)</code>", "Tính lũy thừa $x^y$ (x mũ y).", "<code>Math.pow(2, 3)</code> ➔ <code>8.0</code>"],
                        ["<code>Math.sqrt(x)</code>", "Tính căn bậc hai của x.", "<code>Math.sqrt(9)</code> ➔ <code>3.0</code>"],
                        ["<code>Math.random()</code>", "Trả về số thực ngẫu nhiên từ <code>0.0</code> đến sát <code>1.0</code>.", "<code>Math.random()</code> ➔ <code>0.457...</code>"]
                      ]
                    },
                    {
                      type: "java-math-playground"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-math-attributes",
              number: "2",
              title: "Thuộc tính lớp (Class Attributes)",
              parts: [
                {
                  id: "oop-part-math-attributes",
                  label: "a",
                  title: "Thuộc tính lớp (Class Attributes)",
                  content: [
                    {
                      type: "paragraph",
                      text: "Lớp <code>Math</code> cung cấp sẵn 2 hằng số hữu dụng (thuộc tính lớp) tiêu biểu: <code>Math.PI</code> (số $π ≈ 3.14159$) và <code>Math.E</code> (hằng số Euler)."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Khái niệm Class Attribute (Thuộc tính lớp):</strong><br/>• Là thuộc tính gắn liền với bản thân lớp (class), chứ không thuộc về bất kỳ đối tượng (instance/object) riêng lẻ nào.<br/>• Tất cả các đối tượng được sinh ra từ lớp đều <strong>dùng chung</strong> thuộc tính lớp này."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "double area = Math.PI * Math.pow(radius, 2); // Sử dụng hằng số PI trong lớp Math"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-math-example",
              number: "3",
              title: "Ví dụ minh họa: TestMath.java",
              parts: [
                {
                  id: "oop-part-math-example",
                  label: "a",
                  title: "Ví dụ minh họa: TestMath.java",
                  content: [
                    {
                      type: "paragraph",
                      text: "Chương trình nhập diện tích hình vuông từ bàn phím và tính diện tích hình tròn nội tiếp hình vuông đó."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: `import java.util.Scanner;\n\npublic class TestMath {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n\n        System.out.print("Enter area of a square: ");\n        double areaSquare = sc.nextDouble();\n\n        // Tính cạnh hình vuông = căn bậc hai của diện tích\n        // Bán kính đường tròn nội tiếp (radius) = cạnh hình vuông chia 2\n        double radius = Math.sqrt(areaSquare) / 2;\n\n        // Tính diện tích hình tròn = PI * radius^2\n        double areaCircle = Math.PI * Math.pow(radius, 2);\n\n        System.out.printf("Area of circle = %.4f\\n", areaCircle);\n    }\n}`
                    },
                    {
                      type: "label",
                      text: "Giải thích câu lệnh toán học:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>Math.sqrt(areaSquare)</code>: tính căn bậc hai của diện tích hình vuông (➔ ra chiều dài cạnh hình vuông).",
                        "<code>Math.pow(radius, 2)</code>: tính lũy thừa bậc 2 của bán kính ($radius^2$).",
                        "<code>Math.PI</code>: Hằng số $π$ có sẵn trong lớp Math."
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• <strong>Class attribute (Thuộc tính lớp):</strong> Thuộc về lớp và được tất cả các thực thể (instances) <strong>dùng chung</strong>.<br/>• <strong>Cách gọi:</strong> Vì các thành phần trong lớp Math là <strong>static</strong>, ta có thể gọi trực tiếp thông qua tên lớp: <code>TenLop.tenThuocTinh</code> hoặc <code>TenLop.tenPhuongThuc()</code> (Ví dụ: <code>Math.PI</code>, <code>Math.sqrt()</code>) mà không cần tạo đối tượng bằng từ khóa <code>new</code>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-intro-methods",
          roman: "IX",
          title: "Hàm do người dùng định nghĩa",
          subsections: [
            {
              id: "oop-sub-methods-concept",
              number: "1",
              title: "Khái niệm & Ví dụ Factorial.java",
              parts: [
                {
                  id: "oop-part-methods-concept",
                  label: "a",
                  title: "Khái niệm & Ví dụ Factorial.java",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Hàm (phương thức) là các <strong>đơn vị code độc lập, có thể tái sử dụng</strong> (reusable and independent code units).",
                        "Trong Java, hàm kiểu C được gọi là <strong>static method (phương thức tĩnh)</strong> hoặc <strong>class method (phương thức lớp)</strong>.",
                        "Được đánh dấu bằng từ khóa <code>static</code> đặt trước kiểu dữ liệu trả về.",
                        "Còn có <strong>instance method (phương thức đối tượng)</strong> sẽ được giới thiệu trong các bài học sau."
                      ]
                    },
                    {
                      type: "label",
                      text: "Ví dụ: Factorial.java (Tính giai thừa n! bằng đệ quy)"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: `public class Factorial {\n    // Tính n!\n    public static int factorial(int n) {\n        if (n == 0) return 1; // Điểm dừng\n        else return n * factorial(n - 1); // Gọi đệ quy\n    }\n\n    public static void main(String[] args) {\n        int n = 5;\n        System.out.printf("Factorial(%d) = %d\\n", n, factorial(n));\n    }\n}`
                    },
                    {
                      type: "label",
                      text: "Giải thích dòng lệnh quan trọng:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>public static int factorial(int n)</code>: khai báo phương thức tĩnh, trả về kiểu <code>int</code>, nhận tham số <code>n</code> kiểu <code>int</code>.",
                        "Đây là ví dụ <strong>đệ quy (recursion)</strong>: hàm <code>factorial()</code> tự gọi lại chính nó với tham số nhỏ hơn <code>n - 1</code>.",
                        "Điều kiện dừng (Base case): <code>if (n == 0) return 1;</code> giúp đệ quy không bị lặp vô tận."
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>💡 Giải thích thêm:</strong> Nếu tham số <code>n</code> truyền vào quá lớn (ví dụ: 40), kết quả có thể bị <strong>tràn số (overflow)</strong> vì kiểu số nguyên <code>int</code> trong Java giới hạn phạm vi giá trị biểu diễn (xem lại bảng ở phần IV)."
                    },
                    {
                      type: "java-recursion-visualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-methods-passing",
              number: "2",
              title: "Cơ chế truyền tham trị (Pass-by-Value)",
              parts: [
                {
                  id: "oop-part-methods-passing",
                  label: "a",
                  title: "Cơ chế truyền tham trị (Pass-by-Value)",
                  content: [
                    {
                      type: "paragraph",
                      text: "Trong Java, <strong>tất cả tham số đều được truyền theo giá trị (pass by value)</strong> - giống như trong ngôn ngữ C."
                    },
                    {
                      type: "bullets",
                      items: [
                        "Một <strong>bản sao (copy)</strong> của đối số thực tế được tạo ra và truyền vào khi gọi phương thức.",
                        "Tham số của phương thức và đối số thực tế truyền vào là <strong>2 ô nhớ độc lập</strong> trong RAM.",
                        "Mọi thay đổi trên biến tham số bên trong hàm phụ sẽ không tác động đến biến gốc ngoài hàm chính."
                      ]
                    },
                    {
                      type: "java-pass-by-value-visualizer"
                    },
                    {
                      type: "paragraph",
                      text: "Muốn phương thức <strong>thay đổi được</strong> giá trị đối số gốc, ta cần truyền tham số kiểu dữ liệu tham chiếu đối tượng (object reference - giống như dùng con trỏ pointer trong C). Nội dung này sẽ được tìm hiểu chi tiết ở bài học sau."
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• Java <strong>luôn truyền tham số theo giá trị (pass by value)</strong>, kể cả đối với tham chiếu đối tượng (thực chất là truyền giá trị của địa chỉ tham chiếu).<br/>• <strong>Static method:</strong> có thể gọi trực tiếp thông qua tên lớp <code>TenLop.tenHam()</code> mà không cần khởi tạo đối tượng.<br/>• Đây là kiến thức lý thuyết nền tảng quan trọng, rất thường xuyên xuất hiện trong các đề thi trắc nghiệm phần đệ quy và truyền tham trị."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-intro-summary",
          roman: "X",
          title: "Tổng kết",
          subsections: [
            {
              id: "oop-sub-summary-all",
              number: "",
              title: "Tổng hợp kiến thức & Trọng tâm ôn thi",
              parts: [
                {
                  id: "oop-part-summary-all",
                  label: "",
                  title: "Tổng hợp kiến thức & Trọng tâm ôn thi",
                  content: [
                    {
                      type: "paragraph",
                      text: "Chúc mừng bạn đã hoàn thành Bài học đầu tiên: Giới thiệu ngôn ngữ Java! Dưới đây là sơ đồ tổng kết các mảnh ghép kiến thức nền tảng bạn đã tích lũy:"
                    },
                    {
                      type: "table",
                      headers: ["Thành phần Java", "Nội dung kiến thức cốt lõi đã học"],
                      rows: [
                        ["<strong>Kiểu dữ liệu (Data Types)</strong>", "• Số nguyên: <code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code><br/>• Số thực: <code>float</code>, <code>double</code><br/>• Đúng/Sai: <code>boolean</code><br/>• Ký tự: <code>char</code>"],
                        ["<strong>Biểu thức (Expressions)</strong>", "• Biểu thức số học (Arithmetic)<br/>• Biểu thức luận lý (Boolean)"],
                        ["<strong>Cấu trúc điều khiển (Control)</strong>", "• Rẽ nhánh: <code>if-else</code>, <code>switch-case</code><br/>• Vòng lặp: <code>while</code>, <code>do-while</code>, <code>for</code>"],
                        ["<strong>Lớp thư viện sẵn (Classes)</strong>", "• <code>Scanner</code>: Đọc luồng dữ liệu nhập từ bàn phím<br/>• <code>Math</code>: Cung cấp các hằng số và hàm toán học thông dụng"]
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ tổng quát toàn bài:</strong><br/>• Bài này cung cấp <strong>nền tảng cú pháp cơ bản của Java</strong> (biến, kiểu dữ liệu, vòng lặp, nhập/xuất, hàm) – chương trình vẫn chưa thực sự đi sâu vào lập trình hướng đối tượng (OOP) mà các lớp/đối tượng mới chỉ được dùng như lớp vỏ bọc chứa hàm <code>main()</code>.<br/>• Các khái niệm OOP cốt lõi (Class - Lớp, Object - Đối tượng, Encapsulation - Đóng gói, Inheritance - Kế thừa, Polymorphism - Đa hình, Abstraction - Trừu tượng) sẽ được trình bày chi tiết ở <strong>bài học tiếp theo</strong>.<br/>• <strong>Trọng tâm cần nhớ để đi thi:</strong> Quy trình biên dịch và chạy file Java (<code>.java ➔ .class ➔ JVM</code>), phạm vi biểu diễn của các kiểu dữ liệu số, thứ tự ưu tiên của toán tử, cách phân biệt các vòng lặp, cách sử dụng Scanner (tránh lỗi trôi dòng) và các hàm của lớp Math (đặc biệt là <code>ceil</code> và <code>floor</code>)."
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
      id: "oop-array-string",
      title: "Bài 3",
      subtitle: "Array & String",
      sections: [
        {
          id: "oop-array-sec",
          roman: "I",
          title: "Mảng (Array)",
          subsections: [
            {
              id: "oop-sub-array-overview",
              number: "1",
              title: "Khái quát nội dung phần Array",
              parts: [
                {
                  id: "oop-part-array-overview",
                  label: "a",
                  title: "Khái quát nội dung phần Array",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>a. Tạo mảng</strong> (Create array)",
                        "<strong>b. Xử lý mảng</strong> (Process array)",
                        "<strong>c. Vòng lặp Foreach</strong> (Foreach loops)",
                        "<strong>d. Truyền mảng vào phương thức</strong> (Passing Arrays to Methods)",
                        "<strong>e. Trả về mảng từ phương thức</strong> (Return Arrays from Methods)",
                        "<strong>f. Lớp Arrays</strong> (Class hỗ trợ xử lý mảng có sẵn trong Java)"
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>Array (Mảng) là cấu trúc dữ liệu chứa nhiều phần tử <strong>cùng kiểu dữ liệu</strong> và có <strong>kích thước cố định</strong> khi khai báo."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-array-create",
              number: "2",
              title: "Tạo mảng (Create Arrays)",
              parts: [
                {
                  id: "oop-part-array-create",
                  label: "a",
                  title: "Cú pháp & Khởi tạo",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>a. Cú pháp khai báo và tạo mảng:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "dataType[] arrayRefVar = new dataType[arraySize];"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>b. Ví dụ cụ thể:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "double[] myList = new double[10];"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>double[]</code> ➔ Kiểu dữ liệu của các phần tử trong mảng (mảng chứa các số thực).",
                        "<code>myList</code> ➔ Tên của biến tham chiếu mảng (array reference variable).",
                        "<code>new double[10]</code> ➔ Cấp phát bộ nhớ cho mảng gồm 10 phần tử kiểu <code>double</code>."
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>💡 Giải thích thêm:</strong> Khi khai báo bằng từ khóa <code>new dataType[arraySize]</code>, Java tự động cấp phát vùng nhớ liên tục trên <strong>Heap</strong>. Các phần tử sẽ tự động được gán các giá trị mặc định (<code>0</code> với số, <code>false</code> với kiểu boolean, và <code>null</code> với đối tượng/object)."
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ nhanh:</strong><br/>• <strong>Khái niệm:</strong> Array là tập hợp các phần tử cùng kiểu dữ liệu, được truy cập thông qua chỉ số (index).<br/>• <strong>Mục đích:</strong> Lưu trữ nhiều giá trị cùng loại trong một biến duy nhất để dễ quản lý.<br/>• <strong>Cú pháp:</strong> <code>dataType[] tenBien = new dataType[soPhanTu];</code><br/>• <strong>Chỉ số mảng:</strong> Bắt đầu từ <code>0</code>, phần tử cuối cùng có chỉ số là <code>length - 1</code>."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-array-process",
              number: "3",
              title: "Xử lý mảng (Process Arrays)",
              parts: [
                {
                  id: "oop-part-array-process",
                  label: "a",
                  title: "Xử lý mảng (Process Arrays)",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>a. Đặc điểm:</strong> Vì các phần tử trong mảng có cùng kiểu dữ liệu và kích thước đã được xác định trước, ta thường sử dụng <strong>vòng lặp for</strong> hoặc <strong>vòng lặp foreach</strong> để duyệt qua mảng."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>b. Ví dụ sử dụng vòng lặp for thường:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "double[] myList = {1.9, 2.9, 3.4, 3.5};\n\nfor (int i = 0; i < myList.length; i++) {\n    System.out.print(myList[i] + \" \");\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>myList.length</code> ➔ Thuộc tính (property) của mảng cho biết số lượng phần tử (Lưu ý: đây là thuộc tính, không phải là phương thức nên <strong>không có dấu ngoặc tròn ()</strong>).",
                        "<code>myList[i]</code> ➔ Truy cập trực tiếp vào phần tử tại vị trí chỉ số <code>i</code>.",
                        "Kết quả in ra màn hình: <code>1.9 2.9 3.4 3.5</code>"
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>Thuộc tính <code>length</code> (không có dấu ngoặc) dùng cho <strong>mảng (Array)</strong>, còn phương thức <code>length()</code> (có dấu ngoặc) dùng cho <strong>chuỗi (String)</strong>. Đây là bẫy lý thuyết cực kỳ phổ biến trong các kỳ thi trắc nghiệm."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-array-foreach",
              number: "4",
              title: "Vòng lặp Foreach (Foreach Loops)",
              parts: [
                {
                  id: "oop-part-array-foreach",
                  label: "a",
                  title: "Vòng lặp Foreach (Foreach Loops)",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>a. Định nghĩa:</strong> Từ phiên bản JDK 1.5, Java giới thiệu vòng lặp foreach (còn gọi là vòng lặp for nâng cao - enhanced for loop). Vòng lặp này cho phép duyệt toàn bộ mảng theo thứ tự tuần tự mà <strong>không cần sử dụng biến đếm chỉ số (index)</strong>."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>b. Ví dụ sử dụng foreach:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "double[] myList = {1.9, 2.9, 3.4, 3.5};\n\nfor (double e : myList) {\n    System.out.print(e + \" \");\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>double e</code> ➔ Khai báo biến tạm có kiểu trùng với kiểu mảng. Biến <code>e</code> sẽ lần lượt nhận bản sao giá trị của từng phần tử trong mảng qua mỗi vòng lặp.",
                        "Dấu hai chấm <code>:</code> ➔ Đọc là \"trong\" (For each element <code>e</code> in <code>myList</code>)."
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>⚠️ Hạn chế của Foreach:</strong><br/>Foreach giúp mã nguồn ngắn gọn và dễ đọc hơn, nhưng <strong>không thể</strong> dùng khi bạn cần:<br/>• Thay đổi/sửa đổi giá trị các phần tử trong mảng gốc.<br/>• Cần biết vị trí chỉ số (index) hiện tại của phần tử.<br/>• Duyệt mảng theo chiều ngược lại (phải dùng vòng lặp for thông thường)."
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ nhanh:</strong><br/>• <strong>Cú pháp:</strong> <code>for (dataType phanTu : tenMang) { ... }</code><br/>• <strong>Bản chất:</strong> Biến <code>e</code> chỉ nhận <strong>bản sao giá trị</strong> của phần tử trong mảng, nên việc gán đè giá trị cho <code>e</code> bên trong vòng lặp hoàn toàn không ảnh hưởng đến mảng gốc."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-array-passing",
              number: "5",
              title: "Truyền mảng vào phương thức",
              parts: [
                {
                  id: "oop-part-array-passing",
                  label: "a",
                  title: "Truyền mảng vào phương thức",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>a. Nguyên tắc:</strong> Tương tự như truyền các biến nguyên thủy, ta hoàn toàn có thể truyền cả một mảng làm đối số đầu vào cho một phương thức."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>b. Ví dụ minh họa:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "public class TestArray {\n    public static void printArray(int[] array) {\n        for (int i = 0; i < array.length; i++) {\n            System.out.print(array[i] + \" \");\n        }\n    }\n\n    public static void main(String[] args) {\n        printArray(new int[]{3, 1, 2, 6, 4, 2});\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>int[] array</code> ➔ Kiểu tham số đầu vào được khai báo là một mảng số nguyên.",
                        "<code>new int[]{...}</code> ➔ Tạo mảng ẩn danh (anonymous array) để truyền trực tiếp vào phương thức làm tham số."
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>💡 Giải thích thêm:</strong> Trong Java, mảng là <strong>đối tượng (object)</strong>. Do đó, khi truyền một mảng vào phương thức, thực chất ta đang truyền <strong>địa chỉ tham chiếu (reference)</strong> chứ không phải bản sao giá trị của mảng. Mọi chỉnh sửa trên các phần tử mảng bên trong phương thức <strong>sẽ làm thay đổi trực tiếp mảng gốc</strong>."
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• Truyền kiểu số nguyên thủy (int, double, boolean...) ➔ Truyền theo giá trị (Pass-by-value).<br/>• Truyền mảng (Array) hoặc đối tượng (Object) ➔ Truyền theo tham chiếu (Pass-by-reference) đối với địa chỉ vùng nhớ."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-array-return",
              number: "6",
              title: "Trả về mảng từ phương thức",
              parts: [
                {
                  id: "oop-part-array-return",
                  label: "a",
                  title: "Trả về mảng từ phương thức",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>a. Nguyên tắc:</strong> Một phương thức trong Java có thể trả về kiểu dữ liệu là một mảng."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>b. Ví dụ thuật toán đảo ngược mảng (Reverse Array):</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "public static int[] reverse(int[] list) {\n    int[] result = new int[list.length];\n    for (int i = 0; i < list.length; i++) {\n        result[list.length - 1 - i] = list[i];\n    }\n    return result;\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>public static int[] reverse(...)</code> ➔ Kiểu dữ liệu trả về của phương thức được khai báo rõ ràng là kiểu mảng số nguyên <code>int[]</code>.",
                        "<code>result</code> ➔ Mảng tạm được cấp phát mới có cùng kích thước để lưu trữ kết quả đảo ngược.",
                        "<code>i</code> tăng dần từ 0 ➔ Sao chép đối xứng phần tử từ <code>list[i]</code> sang <code>result[list.length - 1 - i]</code>."
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• Kiểu trả về của hàm phải khai báo đúng định dạng kiểu mảng (ví dụ: <code>int[]</code>, <code>double[]</code>, <code>String[]</code>...).<br/>• Thuật toán đảo mảng (Reverse array) bằng biểu thức tính chỉ số đối xứng (<code>list.length - 1 - i</code>) là dạng bài tập lập trình cơ bản vô cùng phổ biến."
                    },
                    {
                      type: "java-array-playground"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-string-sec",
          roman: "II",
          title: "Chuỗi (String)",
          subsections: [
            {
              id: "oop-sub-string-overview",
              number: "1",
              title: "Khái quát nội dung phần String",
              parts: [
                {
                  id: "oop-part-string-overview",
                  label: "a",
                  title: "Khái quát nội dung phần String",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>a. Interface CharSequence</strong>",
                        "<strong>b. Tạo chuỗi</strong> (Create string)",
                        "<strong>c. Các phương thức của String</strong> (String methods)"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-string-concept",
              number: "2",
              title: "Khái niệm Java String",
              parts: [
                {
                  id: "oop-part-string-concept",
                  label: "a",
                  title: "Khái niệm Java String",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Trong Java, <strong>String</strong> thực chất là một <strong>đối tượng (object)</strong> đại diện cho một dãy tuần tự các ký tự (sequence of char values).",
                        "Một mảng các ký tự <code>char[]</code> hoạt động tương tự như một đối tượng String."
                      ]
                    },
                    {
                      type: "label",
                      text: "Ví dụ: Chuyển đổi giữa mảng ký tự và chuỗi"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "char[] ch = {'a', 'b', 'c'};\nString s1 = new String(ch); // Tạo String từ mảng ký tự\nString s2 = \"abc\";          // Tạo String bằng literal"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ nhanh:</strong><br/>• <strong>Khái niệm:</strong> String là một đối tượng đại diện cho dãy ký tự.<br/>• <strong>Mục đích:</strong> Lưu trữ và xử lý thông tin dạng văn bản.<br/>• <strong>Cú pháp:</strong> <code>String s = \"gia_tri\";</code> hoặc <code>new String(...)</code>.<br/>• <strong>Điểm dễ thi:</strong> String <strong>không phải là kiểu nguyên thủy (primitive type)</strong> mà là một <strong>kiểu tham chiếu (reference type)</strong>, mặc dù nó thường được sử dụng và thao tác đơn giản giống như các kiểu dữ liệu cơ bản."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-string-charsequence",
              number: "3",
              title: "Interface CharSequence",
              parts: [
                {
                  id: "oop-part-string-charsequence",
                  label: "a",
                  title: "Đặc điểm & Tính bất biến (Immutable)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Đặc điểm cực kỳ quan trọng:</strong> Đối tượng String trong Java là <strong>bất biến (immutable)</strong> – nghĩa là nội dung chuỗi không thể thay đổi sau khi được khởi tạo trong bộ nhớ.",
                        "<strong>Quy tắc hoạt động:</strong> Mỗi khi ta thực hiện các phép toán làm thay đổi chuỗi, Java thực chất sẽ <strong>tạo ra một đối tượng String mới</strong> chứa kết quả mới trên Heap, thay vị sửa đổi nội dung trên đối tượng cũ."
                      ]
                    },
                    {
                      type: "label",
                      text: "Ví dụ về tính bất biến:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "String s = \"Hello\";\ns = s + \" World\"; // JVM tạo ra một đối tượng String mới chứa \"Hello World\", s trỏ tới đối tượng mới này. Đối tượng \"Hello\" cũ vẫn không đổi."
                    },
                    {
                      type: "paragraph",
                      text: "Nếu chương trình cần thao tác nối chuỗi hoặc sửa đổi nội dung chuỗi liên tục (tránh sinh ra quá nhiều đối tượng thừa gây tốn bộ nhớ), ta nên sử dụng lớp <strong>StringBuffer</strong> hoặc <strong>StringBuilder</strong> (các lớp chuỗi có khả năng thay đổi - mutable)."
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• <code>String</code> ➔ <strong>Immutable</strong> (bất biến).<br/>• <code>StringBuffer</code> / <code>StringBuilder</code> ➔ <strong>Mutable</strong> (có thể thay đổi giá trị).<br/>• Phân biệt String và StringBuilder/StringBuffer là câu hỏi thi lý thuyết rất phổ biến.<br/>• <strong>Khác biệt:</strong> <code>StringBuilder</code> chạy nhanh hơn nhưng không an toàn khi đa luồng (non-thread-safe); <code>StringBuffer</code> chạy chậm hơn nhưng an toàn khi đa luồng (thread-safe)."
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ nhanh về tính Bất Biến:</strong><br/>• <strong>Mục đích:</strong> Đảm bảo an toàn dữ liệu, cho phép chia sẻ hằng chuỗi giữa các tiến trình.<br/>• <strong>Điểm thi cần nhớ:</strong> Hạn chế tối đa việc sử dụng toán tử <code>+</code> để nối chuỗi trong vòng lặp lớn bằng <code>String</code> vì sẽ gây tràn/tốn bộ nhớ RAM để chứa các đối tượng trung gian. Thay vào đó hãy dùng <code>StringBuilder</code>."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-string-create",
              number: "4",
              title: "Tạo chuỗi (Create String)",
              parts: [
                {
                  id: "oop-part-string-create",
                  label: "a",
                  title: "Tạo bằng String literal vs new",
                  content: [
                    {
                      type: "paragraph",
                      text: "Có <strong>2 cách</strong> phổ biến để tạo một đối tượng String trong Java:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Cách 1: Tạo bằng String literal:</strong> Khai báo chuỗi trực tiếp bằng dấu ngoặc kép.",
                        "<strong>Cách 2: Tạo bằng từ khóa new:</strong> Sử dụng cú pháp khởi tạo đối tượng thông thường."
                      ]
                    },
                    {
                      type: "label",
                      text: "a. Tạo bằng String literal:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "String s = \"welcome\";"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Quy tắc:</strong> Mỗi lần tạo một string literal, JVM sẽ kiểm tra vùng nhớ đặc biệt gọi là <strong>String Constant Pool</strong> trước:<br/>• Nếu chuỗi đã tồn tại trong pool ➔ trả về tham chiếu đến đối tượng có sẵn (tiết kiệm bộ nhớ).<br/>• Nếu chưa tồn tại ➔ tạo mới đối tượng và đưa vào pool."
                    },
                    {
                      type: "label",
                      text: "b. Tạo bằng từ khóa new:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "String s = new String(\"Welcome\");"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Quy tắc:</strong> JVM sẽ luôn tạo ra một đối tượng String mới trên vùng nhớ <strong>Heap thông thường (non-pool)</strong> bất kể nội dung đã tồn tại hay chưa. Biến <code>s</code> sẽ trỏ tới đối tượng trên Heap này."
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• <strong>String literal:</strong> JVM tái sử dụng đối tượng có cùng nội dung ➔ Toán tử so sánh <code>==</code> sẽ trả về <code>true</code> khi so sánh hai chuỗi literal giống nhau.<br/>• <strong>new String(...):</strong> Luôn tạo đối tượng mới trên Heap ➔ Toán tử <code>==</code> sẽ trả về <code>false</code> khi so sánh hai chuỗi tạo bằng <code>new</code> mặc dù nội dung giống hệt nhau.<br/>• <strong>So sánh nội dung chuỗi:</strong> Luôn sử dụng phương thức <code>.equals()</code> thay vì toán tử <code>==</code>."
                    },
                    {
                      type: "java-string-pool-visualizer"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ nhanh:</strong><br/>• <strong>String Constant Pool:</strong> Là phân vùng nhớ đặc biệt trong Heap giúp tối ưu hóa bộ nhớ.<br/>• <strong>Quy tắc thi:</strong> Phân biệt rõ so sánh địa chỉ tham chiếu (<code>==</code>) và so sánh nội dung ký tự (<code>.equals()</code>)."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-string-methods",
              number: "5",
              title: "Các phương thức của String",
              parts: [
                {
                  id: "oop-part-string-methods",
                  label: "a",
                  title: "Bảng các phương thức String",
                  content: [
                    {
                      type: "java-string-methods-explorer"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• <strong>Bẫy độ dài:</strong> Thuộc tính <code>length</code> (không có ngoặc) dùng cho <strong>mảng (Array)</strong>, còn phương thức <code>length()</code> (có ngoặc) dùng cho <strong>chuỗi (String)</strong>.<br/>• <strong>Bẫy trích chuỗi:</strong> <code>substring(begin, end)</code> chỉ lấy từ vị trí <code>begin</code> đến <code>end - 1</code>.<br/>• Các phương thức biến đổi chuỗi như <code>toUpperCase()</code>, <code>trim()</code>, <code>replace()</code>... <strong>không sửa trực tiếp chuỗi gốc</strong> mà luôn <strong>trả về một chuỗi mới</strong> do đặc tính bất biến."
                    },
                    {
                      type: "paragraph",
                      text: "Dưới đây là công cụ giả lập chạy từng bước thuật toán tách họ tên Tiếng Việt (một dạng bài tập thực hành rất phổ biến trong thi kiểm tra lý thuyết và thực hành):"
                    },
                    {
                      type: "java-name-parser-playground"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ nhanh:</strong><br/>• Kết quả của các phương thức String luôn sinh ra một đối tượng chuỗi mới.<br/>• Hãy ghi nhớ cách phối hợp các phương thức như <code>split()</code> và <code>substring()</code> để xử lý dữ liệu đầu vào chuẩn xác."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-summary-sec",
          roman: "III",
          title: "Tổng kết chương 3",
          subsections: [
            {
              id: "oop-sub-summary-chapter3",
              number: "",
              title: "Trọng tâm ôn tập & Ghi nhớ toàn chương",
              parts: [
                {
                  id: "oop-part-summary-chapter3",
                  label: "",
                  title: "Trọng tâm ôn tập & Ghi nhớ toàn chương",
                  content: [
                    {
                      type: "java-chapter3-summary-dashboard"
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
      id: "oop-stringbuffer-stringbuilder",
      title: "Bài 3",
      subtitle: "StringBuffer & StringBuilder",
      sections: [
        {
          id: "oop-stringbuffer-stringbuilder-sec-i",
          roman: "I",
          title: "Nội dung chính (Outline)",
          subsections: [
            {
              id: "oop-sub-stringbuffer-stringbuilder-outline",
              number: "",
              title: "Mục tiêu & Đề cương bài học",
              parts: [
                {
                  id: "oop-part-stringbuffer-stringbuilder-outline",
                  label: "",
                  title: "Nội dung học tập chính",
                  content: [
                    {
                      type: "paragraph",
                      text: "Để làm chủ được lập trình chuỗi nâng cao và quản lý vùng nhớ đệm hiệu quả trong Java, chúng ta sẽ lần lượt nghiên cứu các phần cốt lõi sau:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>1. StringBuffer:</strong> Lớp chuỗi động có thể chỉnh sửa trực tiếp (mutable) và an toàn đa luồng (thread-safe).",
                        "<strong>2. StringBuilder:</strong> Lớp chuỗi động có thể chỉnh sửa trực tiếp (mutable), tốc độ nhanh hơn nhưng không an toàn đa luồng (non-thread-safe).",
                        "<strong>3. So sánh String và StringBuffer:</strong> Sự khác biệt giữa bất biến (Immutable) và khả biến (Mutable) trong bộ nhớ Heap.",
                        "<strong>4. So sánh StringBuffer và StringBuilder:</strong> Đánh giá hiệu năng và tính an toàn luồng (Thread-safety).",
                        "<strong>5. StringTokenizer:</strong> Công cụ tách nhỏ chuỗi ký tự theo các ký tự phân cách (delimiters)."
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-stringbuffer-stringbuilder-sec-ii",
          roman: "II",
          title: "StringBuffer",
          subsections: [
            {
              id: "oop-sub-stringbuffer-stringbuilder-concept",
              number: "1",
              title: "Khái niệm",
              parts: [
                {
                  id: "oop-part-stringbuffer-stringbuilder-concept",
                  label: "",
                  title: "Khái niệm StringBuffer",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>StringBuffer</strong> là lớp (<code>class</code>) trong Java dùng để tạo ra các chuỗi ký tự có khả năng thay đổi nội dung (<strong>mutable</strong>).",
                        "<strong>Khác biệt với String:</strong> Đối với String thông thường, mọi hành vi ghép hay chỉnh sửa chuỗi đều âm thầm tạo ra các đối tượng String mới trên Heap. Đối với StringBuffer, các sửa đổi được thực hiện <strong>trực tiếp tại chỗ (in-place)</strong> trên cùng vùng nhớ đệm, giúp tối ưu hóa dung lượng RAM và giảm công việc cho Garbage Collector.",
                        "<strong>Đặc điểm quan trọng:</strong> StringBuffer là lớp <strong>thread-safe</strong> (an toàn luồng). Nhiều tiến trình/luồng (thread) khác nhau không thể can thiệp dữ liệu cùng một lúc nhờ các phương thức cốt lõi được định nghĩa từ khóa <strong><code>synchronized</code></strong>."
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ cốt lõi:</strong><br/>• <code>String</code> ➔ <strong>Immutable</strong> (bất biến, không thể sửa đổi).<br/>• <code>StringBuffer</code> ➔ <strong>Mutable</strong> (khả biến, có thể sửa đổi) + <strong>Thread-safe</strong> (đồng bộ hóa bằng từ khóa <code>synchronized</code>)."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-stringbuffer-stringbuilder-constructor",
              number: "2",
              title: "Constructor (Hàm khởi tạo)",
              parts: [
                {
                  id: "oop-part-stringbuffer-stringbuilder-constructor",
                  label: "",
                  title: "Cách tạo đối tượng StringBuffer & Dung lượng đệm",
                  content: [
                    {
                      type: "paragraph",
                      text: "StringBuffer cung cấp 3 hàm khởi tạo chính giúp thiết lập vùng đệm lưu trữ ban đầu:"
                    },
                    {
                      type: "table",
                      headers: ["Hàm khởi tạo (Constructor)", "Mô tả ý nghĩa & Dung lượng đệm (Capacity)"],
                      rows: [
                        ["<code>StringBuffer()</code>", "Tạo một bộ đệm rỗng. Dung lượng chứa mặc định ban đầu là <strong>16</strong> ký tự."],
                        ["<code>StringBuffer(String str)</code>", "Tạo bộ đệm chứa chuỗi <code>str</code>. Dung lượng được đặt bằng <strong>độ dài chuỗi <code>str</code> + 16</strong> ký tự đệm trống."],
                        ["<code>StringBuffer(int capacity)</code>", "Tạo một bộ đệm rỗng với dung lượng tối đa tự định nghĩa bằng số nguyên truyền vào."]
                      ]
                    },
                    {
                      type: "key-point",
                      text: "<strong>Capacity (Dung lượng đệm):</strong> Là tổng số ký tự mà mảng nội bộ <code>char[]</code> của StringBuffer có thể chứa trước khi hệ thống bắt buộc phải tự động cấp phát lại một mảng mới có kích thước lớn hơn trong bộ nhớ RAM."
                    },
                    {
                      type: "java-stringbuffer-memory-visualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-stringbuffer-stringbuilder-methods",
              number: "3",
              title: "Các phương thức (methods) quan trọng",
              parts: [
                {
                  id: "oop-part-stringbuffer-stringbuilder-methods",
                  label: "",
                  title: "Bảng tổng hợp các thao tác đệm chuỗi",
                  content: [
                    {
                      type: "paragraph",
                      text: "Các phương thức chính của lớp StringBuffer giúp thực hiện việc chỉnh sửa, chèn, xóa và đọc vùng đệm ký tự một cách an toàn:"
                    },
                    {
                      type: "table",
                      headers: ["Tên phương thức", "Công dụng cụ thể"],
                      rows: [
                        ["<code>append(String s)</code>", "Ghép (nối thêm) chuỗi <code>s</code> vào cuối bộ đệm hiện tại."],
                        ["<code>insert(int offset, String s)</code>", "Chèn chuỗi <code>s</code> vào vị trí chỉ số <code>offset</code> đã chỉ định."],
                        ["<code>replace(int start, int end, String str)</code>", "Thay thế đoạn ký tự từ chỉ số <code>start</code> đến trước <code>end</code> bằng chuỗi <code>str</code> mới."],
                        ["<code>delete(int start, int end)</code>", "Xóa các ký tự từ chỉ số <code>start</code> đến trước <code>end</code> khỏi bộ đệm."],
                        ["<code>reverse()</code>", "Đảo ngược thứ tự toàn bộ các ký tự trong chuỗi đệm."],
                        ["<code>capacity()</code>", "Trả về dung lượng đệm tổng cộng hiện tại của đối tượng."],
                        ["<code>charAt(int index)</code>", "Trả về ký tự nằm tại vị trí chỉ số <code>index</code>."],
                        ["<code>length()</code>", "Trả về số lượng ký tự thực tế đang chứa bên trong bộ đệm."],
                        ["<code>substring(int beginIndex, int endIndex)</code>", "Trích xuất và trả về một chuỗi con mới."]
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>🔥 Điểm thi cực kỳ quan trọng:</strong><br/>Mọi phương thức biến đổi nội dung của StringBuffer đều được đánh dấu bằng từ khóa <strong><code>public synchronized</code></strong>. Từ khóa này đảm bảo chỉ có duy nhất một tiến trình được chạy phương thức tại một thời điểm, giúp StringBuffer đạt được tính chất <strong>Thread-safe</strong> (an toàn luồng) nhưng bù lại sẽ chịu hao phí tài nguyên xử lý lớn hơn."
                    },
                    {
                      type: "java-stringbuffer-thread-lock-visualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-stringbuffer-stringbuilder-examples",
              number: "4",
              title: "Ví dụ minh họa & Thực hành",
              parts: [
                {
                  id: "oop-part-stringbuffer-stringbuilder-examples",
                  label: "",
                  title: "Mẫu code hoạt động và Thực hành hộp cát",
                  content: [
                    {
                      type: "paragraph",
                      text: "Dưới đây là các ví dụ code Java chính thức minh họa cho các hàm xử lý đệm chuỗi. Hãy nhấp chọn từng tab để xem mã nguồn và cách dịch chuyển ký tự tương ứng:"
                    },
                    {
                      type: "java-stringbuffer-examples-tabs"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Không gian thử nghiệm (Sandbox workspace):</strong><br/>Hãy tự tay thực thi các câu lệnh thay đổi chuỗi đệm và xem trực tiếp sự thay đổi chỉ số của mảng đệm trong bộ nhớ RAM bên dưới:"
                    },
                    {
                      type: "java-stringbuffer-sandbox"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-stringbuffer-stringbuilder-sec-iii",
          roman: "III",
          title: "StringBuilder",
          subsections: [
            {
              id: "oop-sub-stringbuilder-concept",
              number: "1",
              title: "Khái niệm",
              parts: [
                {
                  id: "oop-part-stringbuilder-concept",
                  label: "",
                  title: "Khái niệm StringBuilder",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>StringBuilder</strong> là một lớp (<code>class</code>) trong Java cung cấp khả năng lưu trữ và chỉnh sửa chuỗi ký tự khả biến (<strong>mutable</strong>), tương tự như <code>StringBuffer</code>.",
                        "<strong>Thời điểm ra đời:</strong> Được giới thiệu từ phiên bản <strong>Java 5 (JDK 1.5)</strong> để thay thế cho <code>StringBuffer</code> trong các tác vụ đơn luồng nhằm nâng cao tốc độ xử lý.",
                        "<strong>Sự khác biệt cốt lõi:</strong> StringBuilder <strong>không an toàn đa luồng (non-thread-safe)</strong> do các phương thức của nó không sử dụng từ khóa <code>synchronized</code>. Điều này giúp loại bỏ hao phí kiểm tra khóa luồng, giúp nó chạy nhanh hơn StringBuffer."
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ cốt lõi:</strong><br/>• <code>StringBuilder</code> ➔ <strong>Mutable</strong> (khả biến, có thể sửa đổi) + <strong>Non-thread-safe</strong> (phi đồng bộ, không đồng bộ hóa).<br/>• <code>StringBuffer</code> ➔ <strong>Mutable</strong> (khả biến) + <strong>Thread-safe</strong> (đồng bộ hóa)."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-stringbuilder-constructor",
              number: "2",
              title: "Constructor (Hàm khởi tạo)",
              parts: [
                {
                  id: "oop-part-stringbuilder-constructor",
                  label: "",
                  title: "Cách tạo đối tượng StringBuilder & Dung lượng đệm",
                  content: [
                    {
                      type: "paragraph",
                      text: "StringBuilder cung cấp 3 hàm khởi tạo tương tự hoàn toàn với StringBuffer:"
                    },
                    {
                      type: "table",
                      headers: ["Hàm khởi tạo (Constructor)", "Mô tả ý nghĩa & Dung lượng đệm (Capacity)"],
                      rows: [
                        ["<code>StringBuilder()</code>", "Tạo một bộ đệm rỗng. Dung lượng chứa mặc định ban đầu là <strong>16</strong> ký tự."],
                        ["<code>StringBuilder(String str)</code>", "Tạo bộ đệm chứa chuỗi <code>str</code>. Dung lượng được đặt bằng <strong>độ dài chuỗi <code>str</code> + 16</strong> ký tự đệm trống."],
                        ["<code>StringBuilder(int capacity)</code>", "Tạo một bộ đệm rỗng với dung lượng tối đa tự định nghĩa bằng số nguyên truyền vào."]
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-stringbuilder-methods",
              number: "3",
              title: "Các phương thức quan trọng",
              parts: [
                {
                  id: "oop-part-stringbuilder-methods",
                  label: "",
                  title: "Các phương thức xử lý chuỗi đệm",
                  content: [
                    {
                      type: "paragraph",
                      text: "StringBuilder hỗ trợ đầy đủ các phương thức thay đổi chuỗi tương tự như StringBuffer:"
                    },
                    {
                      type: "table",
                      headers: ["Tên phương thức", "Công dụng cụ thể"],
                      rows: [
                        ["<code>append(String s)</code>", "Ghép (nối thêm) chuỗi <code>s</code> vào cuối bộ đệm hiện tại."],
                        ["<code>insert(int offset, String s)</code>", "Chèn chuỗi <code>s</code> vào vị trí chỉ số <code>offset</code> đã chỉ định."],
                        ["<code>replace(int start, int end, String str)</code>", "Thay thế đoạn ký tự từ chỉ số <code>start</code> đến trước <code>end</code> bằng chuỗi <code>str</code> mới."],
                        ["<code>delete(int start, int end)</code>", "Xóa các ký tự từ chỉ số <code>start</code> đến trước <code>end</code> khỏi bộ đệm."],
                        ["<code>reverse()</code>", "Đảo ngược thứ tự toàn bộ các ký tự trong chuỗi đệm."],
                        ["<code>capacity()</code>", "Trả về dung lượng đệm tổng cộng hiện tại của đối tượng."],
                        ["<code>charAt(int index)</code>", "Trả về ký tự nằm tại vị trí chỉ số <code>index</code>."],
                        ["<code>length()</code>", "Trả về số lượng ký tự thực tế đang chứa bên trong bộ đệm."],
                        ["<code>substring(int beginIndex, int endIndex)</code>", "Trích xuất và trả về một chuỗi con mới."]
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>💡 Chú ý thực hành:</strong> Tất cả các đoạn mã nguồn và logic hoạt động khi sử dụng append, insert, replace, reverse đối với StringBuilder đều giống hệt StringBuffer. Sự khác biệt duy nhất nằm ở tốc độ thực thi trong máy ảo JVM."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-stringbuffer-stringbuilder-sec-iv",
          roman: "IV",
          title: "So sánh String & StringBuffer",
          subsections: [
            {
              id: "oop-sub-compare-string-stringbuffer",
              number: "1",
              title: "Khác biệt cốt lõi",
              parts: [
                {
                  id: "oop-part-compare-string-stringbuffer-matrix",
                  label: "",
                  title: "So sánh toàn diện tính chất của String và StringBuffer",
                  content: [
                    {
                      type: "paragraph",
                      text: "Sự khác biệt lớn nhất giữa <code>String</code> và <code>StringBuffer</code> xoay quanh tính khả biến (Mutability) và cách hệ thống cấp phát vùng nhớ trong RAM Heap:"
                    },
                    {
                      type: "java-string-compare-matrix"
                    },
                    {
                      type: "key-point",
                      text: "<strong>Mẹo thi cử phòng máy:</strong> Khi đề thi yêu cầu so sánh nội dung hai StringBuffer bằng <code>equals()</code>, hãy cẩn thận chuyển đổi chúng về chuỗi String bằng <code>.toString()</code> trước. Nếu so sánh trực tiếp <code>sb1.equals(sb2)</code>, kết quả sẽ luôn trả về <code>false</code> dù nội dung giống hệt nhau (do lớp StringBuffer kế thừa <code>equals()</code> mặc định từ lớp <code>Object</code>, chỉ so sánh địa chỉ tham chiếu)."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-stringbuffer-stringbuilder-sec-v",
          roman: "V",
          title: "So sánh StringBuffer & StringBuilder",
          subsections: [
            {
              id: "oop-sub-compare-buffer-builder",
              number: "1",
              title: "Hiệu năng & Đồng bộ hóa",
              parts: [
                {
                  id: "oop-part-compare-buffer-builder-safety",
                  label: "",
                  title: "An toàn đa luồng vs Bứt tốc hiệu năng",
                  content: [
                    {
                      type: "paragraph",
                      text: "Bảng tổng hợp tiêu chí khác biệt cơ bản giữa hai lớp chuỗi khả biến:"
                    },
                    {
                      type: "table",
                      headers: ["Tiêu chí", "StringBuffer", "StringBuilder"],
                      rows: [
                        ["<strong>An toàn luồng</strong>", "Đồng bộ hóa (Synchronized) ➔ An toàn đa luồng (Thread-safe).", "Không đồng bộ (Non-synchronized) ➔ Không an toàn đa luồng."],
                        ["<strong>Tốc độ thực thi</strong>", "Chậm hơn do phải chịu hao phí kiểm soát khóa luồng (synchronized lock overhead).", "Nhanh nhất do không phải chịu hao phí quản lý khóa."],
                        ["<strong>Thời điểm giới thiệu</strong>", "Từ phiên bản đầu tiên của Java (JDK 1.0).", "Từ phiên bản Java 5 (JDK 1.5)."]
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>🔥 Mẹo nhớ nhanh trong phòng thi:</strong><br/>• <strong>B</strong>uffer = <strong>B</strong>ảo mật (Thread-safe, an toàn đa luồng).<br/>• <strong>B</strong>uilder = <strong>B</strong>ứt tốc (Fastest, hiệu năng cao nhất)."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Mô phỏng đa luồng (Thread-safety Simulation):</strong><br/>Hãy chạy thử nghiệm mô phỏng dưới đây để xem cách các luồng xử lý đồng thời ghi đè dữ liệu trong StringBuilder và xếp hàng chờ khóa trong StringBuffer:"
                    },
                    {
                      type: "java-stringbuilder-thread-safety-visualizer"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Đo lường hiệu năng thực tế (Performance Benchmark):</strong><br/>Chọn số vòng lặp và nhấn chạy thử nghiệm để chứng kiến sự khác biệt rõ rệt về thời gian thực thi và số lượng đối tượng rác sinh ra trên Heap:"
                    },
                    {
                      type: "java-string-performance-benchmark"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-stringbuffer-stringbuilder-sec-vi",
          roman: "VI",
          title: "StringTokenizer",
          subsections: [
            {
              id: "oop-sub-stringtokenizer-concept",
              number: "1",
              title: "Khái niệm",
              parts: [
                {
                  id: "oop-part-stringtokenizer-concept",
                  label: "",
                  title: "Khái niệm StringTokenizer",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Lớp <strong><code>java.util.StringTokenizer</code></strong> trong Java được dùng để <strong>tách một chuỗi thành các token (mảnh nhỏ)</strong> dựa trên các ký tự phân cách (delimiters).",
                        "Đây là công cụ đơn giản và gọn nhẹ để chia nhỏ các chuỗi văn bản phổ biến (ví dụ: tách từ theo khoảng trắng, dấu phẩy, dấu chấm phẩy, v.v.)."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-stringtokenizer-constructor",
              number: "2",
              title: "Constructor (Hàm khởi tạo)",
              parts: [
                {
                  id: "oop-part-stringtokenizer-constructor",
                  label: "",
                  title: "Các hàm khởi tạo của StringTokenizer",
                  content: [
                    {
                      type: "table",
                      headers: ["Hàm khởi tạo (Constructor)", "Mô tả ý nghĩa hoạt động"],
                      rows: [
                        ["<code>StringTokenizer(String str)</code>", "Tạo đối tượng tách chuỗi <code>str</code>. Ký tự phân cách mặc định ban đầu là các khoảng trắng (space, tab, xuống dòng <code>\\t\\n\\r\\f</code>)."],
                        ["<code>StringTokenizer(String str, String delim)</code>", "Tách chuỗi <code>str</code> theo danh sách ký tự phân cách <code>delim</code> do người dùng tự định nghĩa."],
                        ["<code>StringTokenizer(String str, String delim, boolean returnVal)</code>", "Nếu <code>returnVal = true</code>, các ký tự phân cách (delimiters) cũng được coi là các token hợp lệ và được trả về khi cắt chuỗi."]
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-stringtokenizer-methods",
              number: "3",
              title: "Phương thức quan trọng",
              parts: [
                {
                  id: "oop-part-stringtokenizer-methods",
                  label: "",
                  title: "Bảng tổng hợp phương thức điều hướng",
                  content: [
                    {
                      type: "table",
                      headers: ["Phương thức", "Công dụng cụ thể"],
                      rows: [
                        ["<code>hasMoreTokens()</code>", "Kiểm tra xem đối tượng có còn token nào tiếp theo để lấy hay không (trả về kiểu dữ liệu <code>boolean</code>)."],
                        ["<code>nextToken()</code>", "Trả về chuỗi token tiếp theo trong danh sách và dịch chuyển con trỏ lên phía trước."],
                        ["<code>countTokens()</code>", "Trả về tổng số lượng token còn lại chưa được đọc trong bộ đệm."],
                        ["<code>nextToken(String delim)</code>", "Đổi ký tự phân cách thành <code>delim</code> tức thời và trả về token tiếp theo."]
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-stringtokenizer-examples",
              number: "4",
              title: "Ví dụ minh họa",
              parts: [
                {
                  id: "oop-part-stringtokenizer-examples-tabs",
                  label: "",
                  title: "Mẫu mã nguồn Java và Hộp cát Trực quan",
                  content: [
                    {
                      type: "paragraph",
                      text: "Dưới đây là hai ví dụ mã nguồn minh họa cách hoạt động cơ bản và hoán đổi delimiter của StringTokenizer:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Ví dụ a (Tách theo khoảng trắng):</strong> Khởi tạo mặc định, dùng vòng lặp <code>while (st.hasMoreTokens())</code> để duyệt toàn bộ.",
                        "<strong>Ví dụ b (Tách theo dấu phẩy):</strong> Sử dụng <code>st.nextToken(\",\")</code> để chỉ định phân cách là dấu phẩy ngay khi gọi để lấy token đầu tiên."
                      ]
                    },
                    {
                      type: "java-string-tokenizer-sandbox"
                    },
                    {
                      type: "key-point",
                      text: "<strong>💡 Tổng kết phòng thi cần ghi nhớ:</strong><br/>• Phân cách mặc định của StringTokenizer là <strong>khoảng trắng, tab, xuống dòng</strong>.<br/>• Dễ nhầm lẫn: <code>nextToken()</code> không đối số sử dụng delim đã báo ở constructor; <code>nextToken(delim)</code> cho phép đổi phân cách <strong>ngay lúc gọi</strong>."
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ nhanh:</strong><br/>• <strong>Khái niệm:</strong> Tách 1 chuỗi thành nhiều phần nhỏ (token) dựa trên các ký tự ngăn cách.<br/>• <strong>Mục đích:</strong> Xử lý dữ liệu dạng liệt kê (CSV, danh sách...) mà không cần dùng hàm <code>split()</code>.<br/>• <strong>Điểm dễ thi:</strong> Phân biệt 3 phương thức: <code>hasMoreTokens()</code>, <code>nextToken()</code>, và <code>countTokens()</code>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-stringbuffer-stringbuilder-sec-vii",
          roman: "VII",
          title: "Bài tập (Exercises)",
          subsections: [
            {
              id: "oop-sub-stringbuffer-stringbuilder-exercises",
              number: "1",
              title: "Bài tập Xử lý & Chuẩn hóa họ tên tiếng Việt",
              parts: [
                {
                  id: "oop-part-stringbuffer-stringbuilder-exercises-desc",
                  label: "",
                  title: "Yêu cầu thực hành",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Đề bài:</strong> Cho một họ tên tiếng Việt viết thô (ví dụ: <code>\"Nguyen Van Teo\"</code>). Hãy sử dụng các lớp đã học bao gồm <code>StringBuffer</code>, <code>StringBuilder</code> hoặc <code>StringTokenizer</code> để thực hiện các phương thức xử lý sau:"
                    },
                    {
                      type: "numbered-list",
                      items: [
                        "Đếm số từ (words) trong tên.",
                        "Trả về <strong>tên (first name)</strong>.",
                        "Trả về <strong>họ (last name)</strong>.",
                        "Trả về <strong>tên đệm (middle name)</strong>.",
                        "Viết hoa ký tự đầu của mỗi từ trong tên.",
                        "<strong>Chuẩn hóa (formalize)</strong> tên: Xóa khoảng trắng thừa ở đầu và cuối chuỗi, chỉ để lại đúng 1 khoảng trắng giữa các từ."
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>⚡ Mẹo phòng máy:</strong> Dạng bài tập này <strong>rất hay xuất hiện trong các bài kiểm tra/thi thực hành</strong>. Hãy luyện tập kỹ cách kết hợp <code>StringTokenizer</code> (dùng để tách các từ thô ra) và <code>StringBuilder</code> / <code>StringBuffer</code> (để ghép lại chuỗi đã chuẩn hóa một cách tối ưu bộ nhớ Heap)."
                    },
                    {
                      type: "java-vietnamese-name-normalizer"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-stringbuffer-stringbuilder-sec-viii",
          roman: "VIII",
          title: "Tổng kết nhanh toàn bài",
          subsections: [
            {
              id: "oop-sub-stringbuffer-stringbuilder-summary",
              number: "1",
              title: "Tóm tắt & Đối chiếu kiến thức",
              parts: [
                {
                  id: "oop-part-stringbuffer-stringbuilder-summary-dash",
                  label: "",
                  title: "Bảng tổng hợp đặc tính các lớp xử lý chuỗi",
                  content: [
                    {
                      type: "paragraph",
                      text: "Để kết thúc bài học, hãy đối chiếu các đặc tính quan trọng nhất giữa 4 lớp xử lý chuỗi cơ bản trong Java để chuẩn bị tốt cho các câu hỏi trắc nghiệm lý thuyết:"
                    },
                    {
                      type: "java-string-summary-dashboard"
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
      id: "oop-object-class-constructor-overload",
      title: "Bài 4",
      subtitle: "Object, Class, Constructor & Overload",
      sections: [
        {
          id: "oop-object-class-constructor-overload-recap-sec",
          roman: "I",
          title: "Ôn tập (Recapitulation)",
          subsections: [
            {
              id: "oop-sub-object-class-constructor-overload-recap",
              number: "",
              title: "Ôn lại quy trình chạy Java",
              parts: [
                {
                  id: "oop-part-object-class-constructor-overload-recap",
                  label: "",
                  title: "Ôn tập kiến thức cũ",
                  content: [
                    {
                      type: "paragraph",
                      text: "Trước khi bắt đầu tìm hiểu về Lớp (Class), Đối tượng (Object) và các nguyên lý của hướng đối tượng, chúng ta hãy cùng ôn lại một số thành phần cơ bản của Java."
                    },
                    {
                      type: "bullets",
                      items: [
                        "Ôn lại: cách <strong>biên dịch và chạy chương trình Java</strong>, cấu trúc chương trình Java, các thành phần cơ bản, lớp <code>Scanner</code>, lớp <code>Math</code>."
                      ]
                    },
                    {
                      type: "label",
                      text: "Quy trình 3 bước thực thi 1 chương trình Java:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>vim HelloWorld.java</code> ➔ viết mã nguồn <code>HelloWorld.java</code>",
                        "<code>javac HelloWorld.java</code> ➔ biên dịch, tạo ra file <code>HelloWorld.class</code> (chứa mã Bytecode trung gian).",
                        "<code>java HelloWorld</code> ➔ nạp bytecode và thực thi chương trình bởi máy ảo JVM, in ra kết quả <strong>output</strong>."
                      ]
                    },
                    {
                      type: "java-compile-workflow"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• Quy trình 3 bước: <strong>Soạn code (.java) ➔ Biên dịch (javac) ➔ Chạy (java)</strong>.<br/>• Rất dễ ra thi dạng: \"Lệnh nào dùng để biên dịch/chạy chương trình Java?\" (Lưu ý: <code>javac</code> cần đuôi <code>.java</code>, còn <code>java</code> thì không ghi đuôi)."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-object-class-constructor-overload-api-sec",
          roman: "II",
          title: "API (Application Programming Interface)",
          subsections: [
            {
              id: "oop-sub-object-class-constructor-overload-api-concept",
              number: "2.0",
              title: "Khái niệm API",
              parts: [
                {
                  id: "oop-part-object-class-constructor-overload-api-concept-content",
                  label: "",
                  title: "Khái niệm cơ bản",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>API (Application Programming Interface):</strong> Nơi <strong>tìm các lớp dịch vụ (service classes)</strong> có sẵn trong bộ thư viện chuẩn của Java để sử dụng trực tiếp.",
                        "Tài liệu tham khảo API chính thức từ Oracle: <a href='https://docs.oracle.com/en/java/javase/11/docs/api/' target='_blank' class='text-amber-600 underline font-bold'>Java SE 11 API Docs</a>.",
                        "Các lớp dịch vụ cơ bản đã học tuần trước: <code>Scanner</code>, <code>String</code>, <code>Math</code> - và từ nay sẽ học thêm rất nhiều lớp dịch vụ nâng cao khác."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-object-class-constructor-overload-api-scanner",
              number: "2.1",
              title: "Lớp Scanner (Scanner class) - đọc dữ liệu nhập",
              parts: [
                {
                  id: "oop-part-object-class-constructor-overload-api-scanner-content",
                  label: "",
                  title: "Đọc dữ liệu từ người dùng",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Dùng để <strong>đọc dữ liệu nhập (reading input)</strong> từ bàn phím hoặc luồng nhập dữ liệu.",
                        "Cú pháp import thư viện: <code>import java.util.Scanner;</code>",
                        "<strong>Quy tắc đặt tên (naming convention)</strong> trong Java: Tên phương thức luôn được viết theo kiểu <strong>lowerCamelCase</strong> (chữ cái đầu tiên viết thường, các chữ cái đầu của từ tiếp theo viết hoa, ví dụ: <code>hasNextInt()</code>)."
                      ]
                    },
                    {
                      type: "label",
                      text: "Một số phương thức quan trọng trong Scanner:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>next()</code>, <code>nextDouble()</code>, <code>nextInt()</code>, <code>nextLine()</code> ➔ Đọc dữ liệu đầu vào tương ứng.",
                        "<code>hasNext()</code>, <code>hasNextDouble()</code>, <code>hasNextInt()</code>, <code>hasNextLine()</code> ➔ Kiểm tra xem trong bộ đệm còn dữ liệu phù hợp để đọc tiếp hay không."
                      ]
                    },
                    {
                      type: "label",
                      text: "Code minh họa - So sánh nextLine() và next():"
                    },
                    {
                      type: "code",
                      code: "import java.util.*;\n\npublic class TestScanner {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        \n        System.out.print(\"Enter name1: \");\n        String name1 = sc.nextLine(); // Đọc cả dòng\n        System.out.println(\"name1 entered is '\" + name1 + \"'.\");\n        \n        System.out.print(\"Enter name2: \");\n        String name2 = sc.next(); // Chỉ đọc 1 từ\n        System.out.println(\"name2 entered is '\" + name2 + \"'.\");\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>sc.nextLine()</code>: Đọc <strong>toàn bộ dòng</strong> người dùng nhập vào (kể cả khoảng trắng và dấu cách).",
                        "<code>sc.next()</code>: Chỉ đọc <strong>1 từ (token)</strong> đơn lẻ - dừng lại ngay lập tức khi gặp khoảng trắng đầu tiên.",
                        "➔ Ví dụ: Nếu người dùng nhập <code>\"Wilson Wee\"</code> thì <code>nextLine()</code> sẽ lấy trọn vẹn <code>\"Wilson Wee\"</code>, còn <code>next()</code> chỉ lấy được <code>\"Wilson\"</code>."
                      ]
                    },
                    {
                      type: "label",
                      text: "Code minh họa - Đọc số nguyên với hasNextInt():"
                    },
                    {
                      type: "code",
                      code: "import java.util.*;\n\npublic class TestScanner2 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int num, sum = 0;\n        \n        System.out.println(\"Enter integers, terminate with control-d:\");\n        while (sc.hasNextInt()) {\n            num = sc.nextInt();\n            System.out.println(\"Integer read: \" + num);\n            sum += num;\n        }\n        System.out.println(\"Sum = \" + sum);\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>hasNextInt()</code>: Kiểm tra token tiếp theo trong đệm có phải là số nguyên không. Thường dùng làm điều kiện vòng lặp <code>while</code>.",
                        "Vòng lặp sẽ tiếp tục đọc số cho đến khi luồng dữ liệu kết thúc (hoặc khi người dùng nhấn tổ hợp phím <strong>Ctrl-D</strong>).",
                        "⚠️ <strong>Lưu ý quan trọng khi nộp bài trên CodeCrunch:</strong> Trong chương trình <strong>chỉ được phép tạo tối đa 1 đối tượng Scanner duy nhất</strong>. Hãy tạo duy nhất 1 Scanner ở đầu hàm main và dùng chung để đọc toàn bộ dữ liệu."
                      ]
                    },
                    {
                      type: "java-scanner-playground"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• Phân biệt rõ <code>next()</code> (chỉ lấy 1 từ) và <code>nextLine()</code> (lấy cả dòng) - đây là bẫy thi rất thường gặp.<br/>• <strong>Bẫy trôi lệnh:</strong> Sau khi gọi các hàm đọc số <code>next()</code> / <code>nextInt()</code> / <code>nextDouble()</code> mà muốn gọi tiếp <code>nextLine()</code>, ta bắt buộc phải gọi thêm 1 lệnh <code>sc.nextLine()</code> \"thừa\" ở giữa để nuốt trôi ký tự xuống dòng <code>\\n</code> còn sót lại trong đệm."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-object-class-constructor-overload-api-string",
              number: "2.2",
              title: "Lớp String (String class) - biểu diễn văn bản",
              parts: [
                {
                  id: "oop-part-object-class-constructor-overload-api-string-content",
                  label: "",
                  title: "Thao tác trên lớp String",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Import thư viện: <code>import java.lang.String;</code> (được nạp tự động, không bắt buộc viết dòng này).",
                        "<strong>Đặc điểm:</strong> Là đối tượng cực kỳ phổ biến (ubiquitous) trong Java, hỗ trợ rất nhiều phương thức thao tác phong phú.",
                        "Các phương thức quan trọng: <code>charAt()</code>, <code>concat()</code>, <code>equals()</code>, <code>indexOf()</code>, <code>lastIndexOf()</code>, <code>length()</code>, <code>toLowerCase()</code>, <code>toUpperCase()</code>, <code>substring()</code>, <code>trim()</code>."
                      ]
                    },
                    {
                      type: "label",
                      text: "Code minh họa thao tác chuỗi:"
                    },
                    {
                      type: "code",
                      code: "public class TestString {\n    public static void main(String[] args) {\n        String text = new String(\"I'm studying 503005.\");\n        System.out.println(\"text: \" + text);\n        System.out.println(\"text.length() = \" + text.length());\n        System.out.println(\"text.charAt(5) = \" + text.charAt(5));\n        System.out.println(\"text.substring(5,8) = \" + text.substring(5,8));\n        System.out.println(\"text.indexOf(\\\"in\\\") = \" + text.indexOf(\"in\"));\n        \n        String newText = text + \" How about you?\";\n        newText = newText.toUpperCase();\n        System.out.println(\"newText: \" + newText);\n        \n        if (text.equals(newText)) {\n            System.out.println(\"text and newText are equal.\");\n        } else {\n            System.out.println(\"text and newText are not equal.\");\n        }\n    }\n}"
                    },
                    {
                      type: "label",
                      text: "Bảng tóm tắt các phương thức của ví dụ trên:"
                    },
                    {
                      type: "table",
                      headers: ["Phương thức", "Ý nghĩa", "Kết quả ví dụ"],
                      rows: [
                        ["<code>length()</code>", "Trả về độ dài (số ký tự) của chuỗi", "<code>20</code>"],
                        ["<code>charAt(5)</code>", "Trả về ký tự tại vị trí chỉ số 5", "<code>'t'</code>"],
                        ["<code>substring(5, 8)</code>", "Trích xuất chuỗi con từ vị trí 5 đến trước vị trí 8", "<code>\"tud\"</code>"],
                        ["<code>indexOf(\"in\")</code>", "Trả về chỉ số vị trí xuất hiện đầu tiên của chuỗi con", "<code>9</code>"],
                        ["<code>toUpperCase()</code>", "Chuyển đổi toàn bộ chuỗi thành chữ viết hoa", "<code>\"I'M STUDYING...\"</code>"],
                        ["Toán tử <code>+</code>", "Ghép nối chuỗi (concatenation) tạo đối tượng mới", "-"],
                        ["<code>equals()</code>", "So sánh nội dung ký tự của hai chuỗi", "<code>false</code> (khác nhau)"]
                      ]
                    },
                    {
                      type: "label",
                      text: "⚠️ So sánh chuỗi (Comparing strings):"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Vì String là kiểu <strong>đối tượng (object)</strong>, ta <strong>tuyệt đối KHÔNG</strong> sử dụng toán tử <code>==</code> để so sánh nội dung 2 chuỗi.",
                        "Phải luôn sử dụng phương thức <code>equals()</code> hoặc <code>equalsIgnoreCase()</code> để so sánh giá trị chuỗi."
                      ]
                    },
                    {
                      type: "code",
                      code: "String str1 = \"hello\";\nString str2 = new String(\"hello\");\n\nSystem.out.println(str1 == str2);      // Trả về false (so sánh địa chỉ vùng nhớ - Sai!)\nSystem.out.println(str1.equals(str2));  // Trả về true (so sánh nội dung ký tự - Đúng!)"
                    },
                    {
                      type: "java-string-comparison-mini"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• Không dùng toán tử <code>==</code> để so sánh giá trị String.<br/>• <code>substring(a, b)</code>: Lấy các ký tự từ vị trí <code>a</code> đến sát vị trí <code>b</code> (không lấy ký tự tại vị trí <code>b</code>).<br/>• <strong>Giải thích bản chất:</strong> Toán tử <code>==</code> so sánh xem 2 biến tham chiếu có cùng trỏ vào <strong>1 địa chỉ ô nhớ RAM</strong> hay không, còn <code>equals()</code> đi sâu so sánh nội dung ký tự bên trong đối tượng."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-object-class-constructor-overload-api-math",
              number: "2.3",
              title: "Lớp Math (Math class) - tính toán số học",
              parts: [
                {
                  id: "oop-part-object-class-constructor-overload-api-math-content",
                  label: "",
                  title: "Lớp Math và các hàm tĩnh",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Import thư viện: <code>import java.lang.Math;</code> (tự động có sẵn).",
                        "Các phương thức toán học quen thuộc: <code>abs()</code>, <code>ceil()</code>, <code>floor()</code>, <code>hypot()</code>, <code>max()</code>, <code>min()</code>, <code>pow()</code>, <code>random()</code>, <code>sqrt()</code>.",
                        "Lớp Math định nghĩa sẵn <strong>2 thuộc tính lớp (class attributes)</strong> là hằng số: <code>E</code> (số Euler) và <code>PI</code> (số Pi)."
                      ]
                    },
                    {
                      type: "label",
                      text: "Code minh họa sử dụng lớp Math:"
                    },
                    {
                      type: "code",
                      code: "import java.util.Scanner;\n\npublic class TestMath {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter 3 values: \");\n        double num1 = sc.nextDouble();\n        double num2 = sc.nextDouble();\n        double num3 = sc.nextDouble();\n        \n        System.out.printf(\"pow(%.2f, %.2f) = %.3f\\n\", num1, num2, Math.pow(num1, num2));\n        System.out.println(\"Largest = \" + Math.max(Math.max(num1, num2), num3));\n        \n        System.out.println(\"Generating 5 random values:\");\n        for (int i = 0; i < 5; i++) {\n            System.out.println(Math.random());\n        }\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>Math.pow(a, b)</code>: Tính a lũy thừa b.",
                        "<code>Math.max(a, b)</code>: Trả về số có giá trị lớn hơn giữa a và b.",
                        "<code>Math.random()</code>: Sinh ra một số thực ngẫu nhiên trong nửa khoảng [0.0, 1.0)."
                      ]
                    },
                    {
                      type: "java-math-sandbox"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• Khi gọi bất kỳ phương thức nào của lớp Math, ta luôn phải viết tiền tố <code>Math.tênPhươngThức(...)</code> vì đây đều là các <strong>phương thức tĩnh (class method / static method)</strong> của lớp Math (sẽ được giải thích chi tiết ở phần sau)."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-object-class-constructor-overload-concepts-sec",
          roman: "III",
          title: "Các khái niệm OOP cơ bản (OOP concepts)",
          subsections: [
            {
              id: "oop-sub-object-class-constructor-overload-concepts-modifiers",
              number: "3.1",
              title: "Từ khóa bổ nghĩa (Modifiers)",
              parts: [
                {
                  id: "oop-part-object-class-constructor-overload-concepts-modifiers-content",
                  label: "",
                  title: "Modifiers trong Java",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Câu hỏi trọng tâm:</strong> Điều gì thực sự làm cho Java trở thành ngôn ngữ lập trình hướng đối tượng?"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Định nghĩa:</strong> <code>Modifiers</code> là các <strong>từ khóa (keywords)</strong> được thêm vào khai báo để <strong>quy định cách hoạt động, phạm vi truy cập</strong> của một lớp (class), thuộc tính (attribute), hoặc phương thức (method).",
                        "Ví dụ thực tế: Từ khóa <code>public</code> trong <code>public class TestMath2</code> và cụm từ <code>public static</code> trong <code>public static void main(...)</code>."
                      ]
                    },
                    {
                      type: "label",
                      text: "Phân loại Modifiers chính trong Java:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Access-control modifiers (bổ nghĩa truy cập):</strong> Quy định phạm vi truy cập bên ngoài lớp (ví dụ: <code>public</code>, <code>private</code>, <code>protected</code>, và mặc định package-private).",
                        "<strong>Non-access modifiers (bổ nghĩa khác):</strong> Các từ khóa quy định tính chất đặc trưng khác không liên quan đến quyền truy cập (ví dụ: <code>static</code>, <code>final</code>, <code>abstract</code>)."
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• Chi tiết về quyền truy cập <code>public</code> và <code>private</code> sẽ được học sâu ở bài sau.<br/>• Ở bài này, bạn chỉ cần nắm được đây là hai từ khóa thuộc nhóm <strong>Access-control modifiers</strong> quy định tính đóng gói dữ liệu."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-object-class-constructor-overload-concepts-methods",
              number: "3.2",
              title: "Class method vs Instance method (Phương thức lớp và phương thức đối tượng)",
              parts: [
                {
                  id: "oop-part-object-class-constructor-overload-concepts-methods-content",
                  label: "",
                  title: "Phân loại phương thức",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Class method (phương thức lớp):</strong> Hay còn gọi là <strong>static method</strong>. Được đánh dấu bằng từ khóa <code>static</code>. Khi gọi phương thức này, ta <strong>không cần khởi tạo đối tượng (instance)</strong> của lớp.",
                        "<strong>Instance method (phương thức đối tượng):</strong> Hay còn gọi là <strong>non-static method</strong>. Không có từ khóa <code>static</code>. Bắt buộc <strong>phải gọi thông qua một đối tượng cụ thể</strong> đã được khởi tạo."
                      ]
                    },
                    {
                      type: "label",
                      text: "Quan sát thực tế trong thư viện Java:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Tất cả các phương thức trong lớp <code>Math</code> đều là <strong>class methods</strong> (gọi trực tiếp qua <code>Math.pow()</code>).",
                        "Tất cả các phương thức trong lớp <code>Scanner</code> đều là <strong>instance methods</strong> (gọi qua thực thể <code>sc.nextInt()</code>).",
                        "Lớp <code>String</code> chứa <strong>cả 2 loại</strong> phương thức (vừa có class method vừa có instance method)."
                      ]
                    },
                    {
                      type: "label",
                      text: "Cách gọi Class method (phương thức static):"
                    },
                    {
                      type: "code",
                      code: "double answer = Math.pow(3.5, 2.2); // Gọi qua tên lớp Math"
                    },
                    {
                      type: "code",
                      code: "public class Exercise {\n    // Khai báo class method\n    public static double volumeCone(double rad, double ht) {\n        return Math.PI * rad * rad * ht / 3.0;\n    }\n    \n    public static void main(String[] args) {\n        // Gọi trực tiếp vì nằm ngay trong cùng 1 lớp\n        double vol = volumeCone(2.0, 5.0);\n        // Tương đương:\n        double vol2 = Exercise.volumeCone(2.0, 5.0);\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Quy tắc:</strong> Khi đứng ở lớp khác gọi class method, bắt buộc phải viết tên lớp đứng trước (ví dụ: <code>Math.pow(...)</code>). Nếu gọi hàm tĩnh nằm ngay trong cùng một lớp định nghĩa, ta có thể lược bỏ tên lớp."
                      ]
                    },
                    {
                      type: "label",
                      text: "Cách gọi Instance method (phương thức non-static):"
                    },
                    {
                      type: "code",
                      code: "// ❌ SAI (Lỗi biên dịch - không thể gọi trực tiếp qua tên lớp)\nint value = Scanner.nextInt();\n\n// ✔️ ĐÚNG (Phải tạo đối tượng cụ thể trước)\nScanner sc = new Scanner(System.in);\nint value = sc.nextInt();"
                    },
                    {
                      type: "code",
                      code: "// ❌ SAI (Lỗi biên dịch - không thể gọi qua tên lớp String)\nString str = \"Some text\";\nstr = String.toUpperCase();\n\n// ✔️ ĐÚNG\nString str = \"Some text\";\nstr = str.toUpperCase();"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Quy tắc:</strong> Instance method bắt buộc phải gọi thông qua một đối tượng đã được khởi tạo.",
                        "Trong thuật ngữ hướng đối tượng, hành động gọi một instance method của đối tượng còn được mô tả là hành động <strong>\"gửi thông điệp (passing a message)\"</strong> đến đối tượng đó."
                      ]
                    },
                    {
                      type: "label",
                      text: "Một số class method (static) trong lớp String:"
                    },
                    {
                      type: "code",
                      code: "String str = String.valueOf(123); // Trả về chuỗi \"123\""
                    },
                    {
                      type: "java-method-invocation-simulator"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ cốt lõi:</strong><br/>• <strong>Class method:</strong> Gọi qua <strong>tên lớp</strong> (Ví dụ: <code>Math.pow()</code>).<br/>• <strong>Instance method:</strong> Gọi qua <strong>đối tượng đã tạo</strong> (Ví dụ: <code>sc.nextInt()</code>), tuyệt đối không gọi qua tên lớp.<br/>• <strong>Cách phân biệt nhanh:</strong> Kiểm tra chữ ký hàm có từ khóa <code>static</code> hay không. Hàm có <code>static</code> là class method."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-object-class-constructor-overload-concepts-constructors",
              number: "3.3",
              title: "Hàm khởi tạo (Constructors)",
              parts: [
                {
                  id: "oop-part-object-class-constructor-overload-concepts-constructors-content",
                  label: "",
                  title: "Phương thức khởi tạo đối tượng",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Khái niệm:</strong> Khi một lớp cung cấp các instance method, lớp đó kỳ vọng sẽ có các đối tượng được sinh ra từ nó. Để tạo mới đối tượng, Java cung cấp phương thức đặc biệt trùng tên lớp gọi là <strong>Constructor (Hàm khởi tạo)</strong>.",
                        "Từ khóa <strong><code>new</code></strong> trong Java được dùng để gọi hàm khởi tạo Constructor và cấp phát vùng nhớ cho đối tượng mới."
                      ]
                    },
                    {
                      type: "code",
                      code: "Scanner sc = new Scanner(System.in);\nString str1 = new String();\nString str2 = new String(\"To be or not to be?\");"
                    },
                    {
                      type: "bullets",
                      items: [
                        "⚠️ <strong>Trường hợp ngoại lệ đặc biệt của String:</strong> Lớp String hỗ trợ cú pháp khởi tạo thay thế cực kỳ nhanh gọn mà <strong>không cần dùng từ khóa <code>new</code></strong>:"
                      ]
                    },
                    {
                      type: "code",
                      code: "String str1 = \"\";\nString str2 = \"To be or not to be?\";"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Đặc điểm đặc biệt của lớp String:</strong> Đối tượng chuỗi String trong Java là <strong>bất biến (immutable)</strong>. Nội dung chuỗi sau khi đã cấp phát trong bộ nhớ RAM không bao giờ có thể bị thay đổi."
                      ]
                    },
                    {
                      type: "java-constructor-memory-visualizer"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong><br/>• Từ khóa <code>new</code> dùng để gọi Constructor tạo đối tượng mới.<br/>• <strong>String là ngoại lệ:</strong> Có thể tạo trực tiếp bằng dấu ngoặc kép mà không cần <code>new</code>. Đây là câu hỏi rất hay xuất hiện trong các bài kiểm tra lý thuyết.<br/>• Hai cách khởi tạo String (Literal vs new) chỉ gần tương đương nhau, cách lưu trữ trong RAM là khác nhau hoàn toàn."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-object-class-constructor-overload-concepts-overloading",
              number: "3.4",
              title: "Nạp chồng phương thức (Overloading)",
              parts: [
                {
                  id: "oop-part-object-class-constructor-overload-concepts-overloading-content",
                  label: "",
                  title: "Nạp chồng method và Constructor",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Định nghĩa:</strong> <code>Overloading (Nạp chồng)</code> là hiện tượng trong cùng một lớp có <strong>nhiều phương thức có cùng tên gọi</strong> nhưng khác nhau về danh sách tham số (khác số lượng hoặc khác kiểu dữ liệu của tham số).",
                        "Ví dụ thực tế trong lớp Math: Hàm <code>abs</code> được nạp chồng thành nhiều phiên bản: <code>abs(double a)</code>, <code>abs(float a)</code>, <code>abs(int a)</code>, <code>abs(long a)</code>."
                      ]
                    },
                    {
                      type: "bullets",
                      items: [
                        "Nếu ngôn ngữ <strong>không hỗ trợ nạp chồng</strong>, người lập trình buộc phải đặt các tên hàm khác nhau: <code>absDouble(double a)</code>, <code>absFloat(float a)</code>, <code>absInt(int a)</code>... gây rất khó nhớ khi lập trình.",
                        "<strong>Với nạp chồng (Overloading):</strong> Các hàm dùng chung một tên duy nhất. Java sẽ tự động phân tích kiểu dữ liệu truyền vào của tham số khi chạy để liên kết chính xác với phiên bản hàm tương ứng.",
                        "Nạp chồng cũng được áp dụng tương tự cho Constructor (gọi là <strong>overloaded constructors</strong>), ví dụ lớp String hỗ trợ: <code>String()</code>, <code>String(String original)</code>, <code>String(char[] value)</code>."
                      ]
                    },
                    {
                      type: "java-overloading-dispatch-sandbox"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ nhanh - Overloading:</strong><br/>• Nạp chồng: Cùng tên hàm, <strong>khác tham số đầu vào</strong>.<br/>• Giúp gom nhóm các thao tác tương tự dưới một tên gọi duy nhất, dễ học, dễ nhớ.<br/>• <strong>Bẫy lý thuyết:</strong> Hãy phân biệt rõ <code>Overloading</code> (nạp chồng) và <code>Overriding</code> (ghi đè phương thức - sẽ học ở bài kế thừa sau này). Overloading chỉ dựa vào tham số đầu vào chứ <strong>không dựa vào kiểu trả về của hàm</strong>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-object-class-constructor-overload-more-classes-sec",
          roman: "IV",
      title: "Các lớp khác trong API (More Classes)",
      subsections: [
        {
          id: "oop-sub-object-class-constructor-overload-more-classes-decimalformat",
          number: "4.1",
          title: "Lớp DecimalFormat (Định dạng số)",
          parts: [
            {
              id: "oop-part-object-class-constructor-overload-more-classes-decimalformat-content",
              label: "",
              title: "Lớp DecimalFormat trong Java",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Mục đích:</strong> Trước đây để định dạng hiển thị số thực với số chữ số thập phân chỉ định, ta thường dùng phương thức <code>System.out.printf()</code>. Tuy nhiên, cách này chỉ in trực tiếp ra màn hình chứ không trả về chuỗi.",
                    "<strong>Giải pháp thay thế:</strong> Sử dụng lớp <strong><code>DecimalFormat</code></strong> thuộc gói <code>java.text</code> để định dạng và trả về chuỗi định dạng mong muốn."
                  ]
                },
                {
                  type: "code",
                  code: "System.out.printf(\"Math.PI = %.3f\\n\", Math.PI); // Math.PI = 3.142"
                },
                {
                  type: "label",
                  text: "Cách dùng DecimalFormat:"
                },
                {
                  type: "code",
                  code: "import java.text.DecimalFormat;\n\npublic class TestDecimalFormat {\n    public static void main(String[] args) {\n        DecimalFormat df1 = new DecimalFormat(\"0.000\"); // Bắt buộc 3 chữ số thập phân\n        DecimalFormat df2 = new DecimalFormat(\"#.###\"); // Tối đa 3 chữ số thập phân\n        DecimalFormat df3 = new DecimalFormat(\"0.00%\"); // Định dạng phần trăm\n        \n        System.out.println(\"PI = \" + df1.format(Math.PI));\n        System.out.println(\"12.3 formatted with \\\"0.000\\\" = \" + df1.format(12.3));\n        System.out.println(\"12.3 formatted with \\\"#.###\\\" = \" + df2.format(12.3));\n        System.out.println(\"12.3 formatted with \\\"0.00%\\\" = \" + df3.format(12.3));\n    }\n}"
                },
                {
                  type: "bullets",
                  items: [
                    "Kết quả in ra màn hình:",
                    "• <code>PI = 3.142</code>",
                    "• <code>12.3 formatted with \"0.000\" = 12.300</code> (bù số 0 thừa)",
                    "• <code>12.3 formatted with \"#.###\" = 12.3</code> (không bù số 0)",
                    "• <code>12.3 formatted with \"0.00%\" = 1230.00%</code> (nhân 100 và thêm %)"
                  ]
                },
                {
                  type: "java-decimal-format-playground"
                },
                {
                  type: "highlight",
                  text: "<strong>📌 Lưu ý rất quan trọng:</strong><br/>• Phương thức <code>df.format(x)</code> chỉ trả về <strong>chuỗi hiển thị đã định dạng</strong> chứ hoàn toàn <strong>không làm thay đổi giá trị thực tế của biến x</strong> trong bộ nhớ RAM.<br/>• Tránh hiểu nhầm đây là lệnh gán lại giá trị cho biến gốc."
                }
              ]
            }
          ]
        },
        {
          id: "oop-sub-object-class-constructor-overload-more-classes-random",
          number: "4.2",
          title: "Lớp Random (Sinh số ngẫu nhiên)",
          parts: [
            {
              id: "oop-part-object-class-constructor-overload-more-classes-random-content",
              label: "",
              title: "Lớp Random trong Java",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Mục đích:</strong> Dùng khi ứng dụng cần sinh dữ liệu ngẫu nhiên (ví dụ giả lập game, tạo dữ liệu mảng ngẫu nhiên để test...).",
                    "Trước đây ta dùng <code>Math.random()</code>: Trả về số thực <code>double >= 0.0 và < 1.0</code>.",
                    "<strong>Giải pháp thay thế chuyên sâu:</strong> Sử dụng lớp <strong><code>Random</code></strong> thuộc gói <code>java.util</code>."
                  ]
                },
                {
                  type: "label",
                  text: "Constructors (hàm khởi tạo) của lớp Random:"
                },
                {
                  type: "bullets",
                  items: [
                    "<code>Random()</code>: Bộ sinh số ngẫu nhiên sử dụng thời gian hệ thống hiện tại làm seed. Các số sinh ra sẽ hoàn toàn khác nhau ở mỗi lần chạy chương trình.",
                    "<code>Random(long seed)</code>: Bộ sinh số ngẫu nhiên sử dụng một số <strong>seed cố định</strong>. Mỗi lần chạy chương trình, chuỗi số ngẫu nhiên sinh ra sẽ <strong>trùng khớp hoàn toàn 100%</strong> (hữu ích khi debug hoặc viết unit test cần kết quả ổn định để đối chứng)."
                  ]
                },
                {
                  type: "label",
                  text: "Một số phương thức phổ biến của lớp Random:"
                },
                {
                  type: "bullets",
                  items: [
                    "<code>double nextDouble()</code>: Trả về số thực ngẫu nhiên trong khoảng <code>[0.0, 1.0)</code>.",
                    "<code>float nextFloat()</code>: Trả về số float ngẫu nhiên trong khoảng <code>[0.0, 1.0)</code>.",
                    "<code>double nextGaussian()</code>: Trả về số thực ngẫu nhiên phân phối chuẩn Gauss (trung bình 0.0, độ lệch chuẩn 1.0).",
                    "<code>int nextInt()</code>: Trả về số nguyên ngẫu nhiên bất kỳ (phạm vi từ âm vô cùng đến dương vô cùng).",
                    "<code>int nextInt(int n)</code>: Trả về số nguyên ngẫu nhiên trong nửa khoảng <code>[0, n)</code> (tức là từ 0 đến n-1)."
                  ]
                },
                {
                  type: "label",
                  text: "Code minh họa so sánh Math.random() và Random class:"
                },
                {
                  type: "code",
                  code: "import java.util.Random;\n\npublic class TestRandom {\n    public static void main(String[] args) {\n        // Sinh số ngẫu nhiên trong đoạn [51, 70]\n        // Cách 1: Dùng Math.random()\n        int num1 = (int) (Math.random() * 20) + 51;\n        System.out.println(\"num1 = \" + num1);\n        \n        // Cách 2: Dùng lớp Random\n        Random rnd = new Random();\n        int num2 = rnd.nextInt(20) + 51;\n        System.out.println(\"num2 = \" + num2);\n    }\n}"
                },
                {
                  type: "java-random-range-visualizer"
                },
                {
                  type: "highlight",
                  text: "<strong>📌 Ghi nhớ công thức cốt lõi:</strong><br/>• Để sinh số nguyên ngẫu nhiên trong đoạn <strong><code>[min, max]</code></strong>, ta dùng công thức:<br/>&nbsp;&nbsp;&nbsp;&nbsp;<code>rnd.nextInt(max - min + 1) + min</code><br/>• Đây là kiến thức cực kỳ quan trọng và <strong>rất hay xuất hiện trong các câu hỏi thi cử</strong>."
                }
              ]
            }
          ]
        },
        {
          id: "oop-sub-object-class-constructor-overload-more-classes-wrapper",
          number: "4.3",
          title: "Lớp Wrapper (Lớp bọc)",
          parts: [
            {
              id: "oop-part-object-class-constructor-overload-more-classes-wrapper-content",
              label: "",
              title: "Lớp bọc kiểu dữ liệu nguyên thủy",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Khái niệm:</strong> Trong Java, các kiểu dữ liệu nguyên thủy (primitive) như <code>int</code>, <code>double</code>, <code>char</code>... hoạt động cực kỳ nhanh hiệu năng cao nhưng <strong>không phải là đối tượng (object)</strong>.",
                    "Để đưa các kiểu này vào thế giới hướng đối tượng (ví dụ đưa vào cấu trúc dữ liệu Collections, ArrayList...), Java cung cấp các <strong>Wrapper classes (Lớp bọc)</strong> tương ứng."
                  ]
                },
                {
                  type: "label",
                  text: "Bảng đối chiếu kiểu nguyên thủy và Wrapper class tương ứng:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "• Kiểu <code>int</code> bọc bởi lớp <code>Integer</code>",
                        "• Kiểu <code>long</code> bọc bởi lớp <code>Long</code>",
                        "• Kiểu <code>float</code> bọc bởi lớp <code>Float</code>",
                        "• Kiểu <code>double</code> bọc bởi lớp <code>Double</code>",
                        "• Kiểu <code>char</code> bọc bởi lớp <code>Character</code>",
                        "• Kiểu <code>boolean</code> bọc bởi lớp <code>Boolean</code>"
                      ]
                    },
                    {
                      type: "label",
                      text: "Chuyển đổi kiểu thủ công (Boxing và Unboxing):"
                    },
                    {
                      type: "code",
                      code: "int x = 9;\nInteger y = new Integer(x); // Đóng bọc x vào đối tượng y (Boxing)\nSystem.out.println(\"Value in y = \" + y.intValue()); // Mở bọc lấy lại int nguyên thủy (Unboxing)"
                    },
                    {
                      type: "label",
                      text: "Chuyển đổi giữa chuỗi String và số:"
                    },
                    {
                      type: "code",
                      code: "int num = Integer.valueOf(\"28\"); // Trả về đối tượng Integer chứa giá trị 28\n// Hoặc dùng:\nint num2 = Integer.parseInt(\"28\"); // Trả về số int nguyên thủy 28\n\nString str = Integer.toString(567); // Đổi số 567 sang chuỗi \"567\""
                    },
                    {
                      type: "java-wrapper-boxing-visualizer"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ cốt lõi:</strong><br/>• Lớp bọc giúp chuyển đổi kiểu nguyên thủy thành đối tượng để sử dụng các phương thức tiện ích.<br/>• <strong>Lưu ý viết hoa và viết đầy đủ:</strong> Lớp bọc của <code>int</code> là <code>Integer</code> (không viết tắt là Int) và của <code>char</code> là <code>Character</code> (không viết tắt là Char)."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-object-class-constructor-overload-more-classes-point",
              number: "4.4",
              title: "Lớp Point (Điểm tọa độ)",
              parts: [
                {
                  id: "oop-part-object-class-constructor-overload-more-classes-point-content",
                  label: "",
                  title: "Lớp Point trong thư viện Java",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Giới thiệu:</strong> Lớp <code>Point</code> thuộc gói <code>java.awt</code> biểu diễn một điểm tọa độ <code>(x, y)</code> trong không gian hai chiều. Đây là lớp ví dụ kinhдени để thực hành khởi tạo đối tượng và gọi phương thức."
                      ]
                    },
                    {
                      type: "label",
                      text: "Thuộc tính (Fields) của lớp Point:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Point chứa hai thuộc tính thực thể (instance attributes) có kiểu dữ liệu là <code>int</code>:",
                        "• <code>x</code>: Tọa độ hoành độ X.",
                        "• <code>y</code>: Tọa độ tung độ Y."
                      ]
                    },
                    {
                      type: "label",
                      text: "Các overloaded constructors (hàm khởi tạo nạp chồng):"
                    },
                    {
                      type: "bullets",
                      items: [
                        "• <code>Point()</code>: Tạo điểm ở gốc tọa độ <code>(0, 0)</code>.",
                        "• <code>Point(int x, int y)</code>: Tạo điểm ở vị trí <code>(x, y)</code> chỉ định.",
                        "• <code>Point(Point p)</code>: Sao chép tọa độ từ một đối tượng Point <code>p</code> khác."
                      ]
                    },
                    {
                      type: "code",
                      code: "Point pt1 = new Point(); // pt1 ở (0, 0)\nPoint pt2 = new Point(9, 6); // pt2 ở (9, 6)"
                    },
                    {
                      type: "label",
                      text: "Các phương thức (methods) tiêu biểu của Point:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "• <code>double getX()</code>: Trả về tọa độ X dưới dạng số thực <code>double</code>.",
                        "• <code>double getY()</code>: Trả về tọa độ Y dưới dạng số thực <code>double</code>.",
                        "• <code>void move(int x, int y)</code>: Di chuyển điểm đến vị trí tọa độ mới.",
                        "• <code>void translate(int dx, int dy)</code>: Tịnh tiến điểm cộng thêm khoảng cách dx, dy."
                      ]
                    },
                    {
                      type: "code",
                      code: "import java.util.Scanner;\nimport java.awt.Point;\n\npublic class TestPoint {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter x and y: \");\n        int x = sc.nextInt();\n        int y = sc.nextInt();\n        \n        Point pt = new Point(x, y);\n        System.out.println(\"x-coordinate is \" + pt.getX()); // Trả về double\n        System.out.println(\"y-coordinate is \" + pt.getY());\n        System.out.println(\"The point created is \" + pt); // Tự động gọi toString()\n    }\n}"
                    },
                    {
                      type: "java-point-grid-sandbox"
                    },
                    {
                      type: "highlight",
                      text: "<strong>⚠️ Lỗi NullPointerException (Cực kỳ hay ra thi):</strong><br/>• Bạn phải gọi từ khóa <code>new</code> để cấp phát bộ nhớ trước khi sử dụng bất kỳ phương thức nào của đối tượng.<br/>• Ví dụ sau sẽ crash lỗi khi chạy:<br/>&nbsp;&nbsp;&nbsp;&nbsp;<code>Point pt;</code> // Chỉ khai báo biến, giá trị mặc định là null<br/>&nbsp;&nbsp;&nbsp;&nbsp;<code>pt.setLocation(12, 10);</code> // ❌ Crash lỗi NullPointerException!"
                    },
                    {
                      type: "highlight",
                      text: "<strong>💡 Ghi nhớ nhanh về Point:</strong><br/>• Getter <code>getX()</code> và <code>getY()</code> trả về kiểu <strong>double</strong> dù thuộc tính tọa độ gốc x, y lưu dạng <code>int</code>.<br/>• Luôn khởi tạo đối tượng trước khi truy cập."
                    },
                    {
                      type: "highlight",
                      text: "<strong>🙋 FAQ (Hỏi đáp nhanh):</strong><br/>• <strong>Hỏi:</strong> Tôi có cần học thuộc lòng hết hàng trăm lớp trong bộ API của Java không?<br/>• <strong>Đáp:</strong> Hoàn toàn không! Bộ thư viện Java có hàng ngàn lớp, không ai có thể nhớ hết. Bạn chỉ cần nắm chắc các lớp cơ bản được giảng dạy trên lớp (Scanner, String, Math, Random, Point, DecimalFormat). Điều quan trọng nhất là <strong>sự quen thuộc (familiarity)</strong>, rèn luyện kỹ năng đọc hiểu tài liệu API (Javadoc) để tra cứu khi cần."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-object-class-constructor-overload-abstraction-sec",
          roman: "V",
          title: "Trừu tượng hóa & Che giấu thông tin",
          subsections: [
            {
              id: "oop-sub-object-class-constructor-overload-abstraction-concept",
              number: "5.1",
              title: "Khái niệm Abstraction & Information Hiding",
              parts: [
                {
                  id: "oop-part-object-class-constructor-overload-abstraction-concept-content",
                  label: "",
                  title: "Trừu tượng hóa và Che giấu thông tin",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Procedural abstraction (Trừu tượng hóa thủ tục):</strong> Chỉ định rõ <strong>CÁI GÌ cần làm</strong> (what), không cần biết <strong>LÀM NHƯ THẾ NÀO</strong> (how). Cách làm này giúp tách biệt hoàn toàn mục đích sử dụng (purpose) của phương thức khỏi chi tiết cài đặt (implementation) của nó.",
                        "<strong>Data abstraction (Trừu tượng hóa dữ liệu):</strong> Chỉ định rõ <strong>sẽ làm gì với dữ liệu</strong>, không cần biết cách dữ liệu được lưu trữ hay xử lý vật lý như thế nào. Ta tập trung vào các thao tác (operations) được cung cấp trên dữ liệu đó (khái niệm này sẽ học cực kỳ kỹ trong bài học về ADT - Abstract Data Type sau này).",
                        "Cả hai loại trừu tượng hóa trên đều áp dụng triệt để nguyên lý <strong>Information Hiding (Che giấu thông tin)</strong>."
                      ]
                    },
                    {
                      type: "label",
                      text: "Ví dụ thực tế về Procedural Abstraction với Math.random():"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Tài liệu API mô tả rõ ràng hàm <code>Math.random()</code> dùng để sinh số thực ngẫu nhiên trong khoảng <code>[0.0, 1.0)</code>. Đây chính là <strong>giao diện (interface)</strong> cung cấp cho người dùng.",
                        "Toàn bộ thuật toán sinh số ngẫu nhiên phức tạp bên trong phương thức được <strong>che giấu (hidden)</strong> hoàn toàn.",
                        "Khi lập trình viên tự viết hàm, quy tắc vàng là luôn viết mô tả (description/Javadoc) rõ ràng cho phương thức tương tự như cách thư viện Java làm."
                      ]
                    },
                    {
                      type: "java-api-black-box-simulator"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ cốt lõi:</strong><br/>• <strong>Abstraction (Trừu tượng):</strong> Tập trung vào cái nhìn tổng quan: biết CÁI GÌ cần làm, không bận tâm cách thức thực hiện.<br/>• <strong>Information Hiding (Che giấu thông tin):</strong> Người dùng chỉ tương tác qua giao diện (interface), không thể can thiệp hay nhìn thấy cách cài đặt (implementation) bên trong. Đây là nền tảng tối quan trọng cho khái niệm <strong>Đóng gói (Encapsulation)</strong> ở bài học tiếp theo."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-object-class-constructor-overload-summary-sec",
          roman: "VI",
          title: "Tổng kết & Bí kíp ôn thi",
          subsections: [
            {
              id: "oop-sub-object-class-constructor-overload-summary-recap",
              number: "6.1",
              title: "Tổng kết chương & Lộ trình tuần sau",
              parts: [
                {
                  id: "oop-part-object-class-constructor-overload-summary-recap-content",
                  label: "",
                  title: "Nhìn lại chặng đường bài học",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Thư viện JDK API đã học:</strong> <code>Scanner</code>, <code>String</code>, <code>Math</code>, <code>DecimalFormat</code>, <code>Random</code>, <code>Wrapper classes</code>, <code>Point</code>.",
                        "<strong>Các khái niệm lập trình OOP cơ bản đã làm quen:</strong> <code>Modifiers</code> (bổ nghĩa), <code>Class vs Instance methods</code>, <code>Constructors</code> (hàm khởi tạo), <code>Overloading</code> (nạp chồng phương thức và constructor).",
                        "<strong>Sự chuyển giao vai trò tư duy OOP:</strong>"
                      ]
                    },
                    {
                      type: "java-user-to-designer-timeline"
                    },
                    {
                      type: "highlight",
                      text: "<strong>💡 Bước đệm chuyển mình:</strong> Tuần này bạn đóng vai trò là <strong>Người dùng (User)</strong> gọi các lớp có sẵn. Tuần sau, chúng ta sẽ chuyển hoàn toàn sang vai trò là <strong>Người thiết kế (Designer)</strong>, tự tay viết các lớp, thuộc tính và phương thức tùy biến để xây dựng các ứng dụng thực tế."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-object-class-constructor-overload-summary-gotchas",
              number: "6.2",
              title: "10 Cạm bẫy thi cử cần phòng tránh",
              parts: [
                {
                  id: "oop-part-object-class-constructor-overload-summary-gotchas-content",
                  label: "",
                  title: "Bí kíp chống lỗi phòng thi",
                  content: [
                    {
                      type: "paragraph",
                      text: "Dưới đây là bộ thẻ ghi nhớ chống bẫy tổng hợp 10 điểm dễ mất điểm nhất trong các bài thi trắc nghiệm lý thuyết và thực hành."
                    },
                    {
                      type: "java-exam-gotchas-flashcards"
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
      id: "oop-encapsulation-modifier",
      title: "Bài 5",
      subtitle: "Encapsulation & Access Modifiers",
      sections: [
        {
          id: "oop-encapsulation-modifier-intro-sec",
          roman: "I",
          title: "Mở đầu",
          subsections: [
            {
              id: "oop-sub-encapsulation-modifier-intro",
              number: "1.0",
              title: "Chế độ người thiết kế & UML",
              parts: [
                {
                  id: "oop-part-encapsulation-modifier-intro-content",
                  label: "",
                  title: "Giới thiệu chủ đề & mục tiêu bài học",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Chủ đề học tập:</strong> Lập trình hướng đối tượng (OOP) - Phần 2: Chế độ người thiết kế (<strong>Designer Mode</strong>) - Tự tạo lớp (class) của riêng mình.",
                        "<strong>Mục tiêu chính:</strong>",
                        "1. Hiểu sâu sắc mô hình lập trình (programming model) và tư duy OOP.",
                        "2. Sử dụng mô hình hóa hướng đối tượng (object-oriented modeling) để xây dựng giải pháp.",
                        "3. Tự học thiết kế lớp (class).",
                        "4. Xác định rõ ràng các dịch vụ, chức năng (services) cần cung cấp cho một class.",
                        "5. Làm quen với ngôn ngữ mô hình hóa thống nhất <strong>UML (Unified Modeling Language)</strong> để biểu diễn đồ họa trực quan cho các thành phần OOP."
                      ]
                    },
                    {
                      type: "label",
                      text: "Quy tắc chuyển dịch Sơ đồ UML thành Code Java:"
                    },
                    {
                      type: "java-uml-to-code-sandbox"
                    },
                    {
                      type: "label",
                      text: "Thực hành nối ký hiệu UML:"
                    },
                    {
                      type: "java-uml-symbol-matcher"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ:</strong> Phần mở đầu mang tính giới thiệu, định hướng tư duy thiết kế hệ thống và giúp bạn ghi nhớ ký hiệu UML. Không chứa kiến thức thi trực tiếp nhưng là nền tảng tối quan trọng."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-encapsulation-modifier-recap-sec",
          roman: "II",
          title: "Ôn tập (Recapitulation)",
          subsections: [
            {
              id: "oop-sub-encapsulation-modifier-recap",
              number: "2.0",
              title: "Người dùng vs Người thiết kế",
              parts: [
                {
                  id: "oop-part-encapsulation-modifier-recap-content",
                  label: "",
                  title: "Ôn tập kiến thức tuần trước",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Kiến thức đã học:</strong> <code>Scanner</code>, <code>String</code>, <code>Math</code>, <code>DecimalFormat</code>, <code>Random</code>, <code>Wrapper classes</code>, <code>Point</code>.",
                        "<strong>Các khái niệm cơ bản:</strong> <code>Modifiers</code> (từ khóa bổ nghĩa), <code>Class method</code> vs <code>Instance method</code>, <code>Constructor</code> (hàm khởi tạo), <code>Overloading</code> (nạp chồng phương thức).",
                        "<strong>Sự thay đổi về vai trò tư duy lập trình:</strong>"
                      ]
                    },
                    {
                      type: "java-user-vs-designer-switcher"
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Trọng tâm ôn tập:</strong><br/>• Tuần trước: Đóng vai <strong>Người dùng (User)</strong> - gọi sử dụng các lớp JDK API có sẵn.<br/>• Tuần này: Đóng vai <strong>Người thiết kế (Designer)</strong> - tự thiết kế, khai báo thuộc tính và xây dựng các phương thức cho class của chính bạn."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-encapsulation-modifier-paradigm-sec",
          roman: "III",
          title: "Programming Model và OOP",
          subsections: [
            {
              id: "oop-sub-encapsulation-modifier-paradigm-model",
              number: "3.1",
              title: "Mô hình lập trình (Programming Model)",
              parts: [
                {
                  id: "oop-part-encapsulation-modifier-paradigm-model-content",
                  label: "",
                  title: "Khái niệm Programming Model",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Mỗi ngôn ngữ lập trình (C, C++, Java...) đều được phát triển dựa trên một <strong>programming model (mô hình lập trình)</strong> hay <strong>programming paradigm (hệ tư tưởng/mẫu hình lập trình)</strong> nhất định.",
                        "Programming model quyết định <strong>thế giới quan (worldview)</strong> của ngôn ngữ đó, định hình cách nhà lập trình tổ chức thông tin, tổ chức bộ nhớ RAM và thiết kế giải thuật xử lý bài toán.",
                        "Một số hệ tư tưởng (paradigm) phổ biến thế giới:",
                        "• <strong>Procedural/Imperative (Lập trình thủ tục/mệnh lệnh):</strong> C, Pascal - xem chương trình là chuỗi các câu lệnh tuần tự tác động lên dữ liệu.",
                        "• <strong>Object Oriented (Lập trình hướng đối tượng):</strong> Java, C++ - xem chương trình là tập hợp các đối tượng tương tác với nhau.",
                        "• <strong>Functional (Lập trình hàm):</strong> Scheme, LISP - giải quyết bài toán thông qua việc đánh giá các biểu thức toán học và hạn chế biến đổi trạng thái dữ liệu.",
                        "• <strong>Logic programming (Lập trình logic):</strong> PROLOG - khai báo các luật và sự kiện để máy tự suy diễn tìm kết quả."
                      ]
                    },
                    {
                      type: "label",
                      text: "Minh họa so sánh cú pháp Hello World đa mô hình:"
                    },
                    {
                      type: "java-multi-paradigm-syntax-viewer"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-encapsulation-modifier-paradigm-compare",
              number: "3.2",
              title: "So sánh Procedural vs OOP",
              parts: [
                {
                  id: "oop-part-encapsulation-modifier-paradigm-compare-content",
                  label: "",
                  title: "Đối chiếu đặc tính lập trình thủ tục và hướng đối tượng",
                  content: [
                    {
                      type: "paragraph",
                      text: "Lập trình thủ tục (Procedural) và Lập trình hướng đối tượng (OOP) đại diện cho hai trường phái tư duy lập trình đối lập. Dưới đây là bảng đối chiếu chi tiết theo từng khía cạnh kỹ thuật chính:"
                    },
                    {
                      type: "java-procedural-vs-oop-interactive-grid"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-encapsulation-modifier-paradigm-pillars",
              number: "3.3",
              title: "4 Khái niệm nền tảng",
              parts: [
                {
                  id: "oop-part-encapsulation-modifier-paradigm-pillars-content",
                  label: "",
                  title: "4 Trụ cột cốt lõi của OOP",
                  content: [
                    {
                      type: "paragraph",
                      text: "Để làm chủ lập trình hướng đối tượng, học sinh bắt buộc phải ghi nhớ nằm lòng 4 trụ cột cơ bản sau (thường xuất hiện trực tiếp trong đề thi lý thuyết dưới cả tên tiếng Anh và tiếng Việt):"
                    },
                    {
                      type: "java-oop-pillars-dashboard"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-encapsulation-modifier-paradigm-bankaccount",
              number: "3.4",
              title: "Minh họa: Lớp BankAccount",
              parts: [
                {
                  id: "oop-part-encapsulation-modifier-paradigm-bankaccount-content",
                  label: "",
                  title: "Ví dụ thực tế Bank Account (Tài khoản ngân hàng)",
                  content: [
                    {
                      type: "paragraph",
                      text: "Hãy cùng phân tích một ví dụ thực tế: Cài đặt hệ thống quản lý tài khoản ngân hàng (gồm số tài khoản <code>acctNum</code> và số dư <code>balance</code>) theo hai kiểu lập trình để thấy rõ lỗ hổng bảo mật của lập trình thủ tục và cách tính Đóng gói (Encapsulation) của OOP giải quyết triệt để vấn đề này."
                    },
                    {
                      type: "label",
                      text: "Mã nguồn C cài đặt theo kiểu Thủ tục (Procedural):"
                    },
                    {
                      type: "code",
                      lang: "c",
                      code: `typedef struct {\n    int acctNum;\n    double balance;\n} BankAcct;\n\nvoid initialize(BankAcct *baPtr, int anum) {\n    baPtr->acctNum = anum;\n    baPtr->balance = 0;\n}\n\nint withdraw(BankAcct *baPtr, double amount) {\n    if (baPtr->balance < amount) return 0; // Thất bại\n    baPtr->balance -= amount;\n    return 1; // Thành công\n}`
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Đặc trưng của Procedural C:</strong> Cấu trúc dữ liệu (struct) và hàm (function) tách rời hoàn toàn. Dữ liệu được truyền vào hàm dưới dạng con trỏ để xử lý.",
                        "<strong>Lỗ hổng:</strong> Dữ liệu trong struct là <strong>công khai (public)</strong>. Bất kỳ ai ở ngoài cũng có thể viết lệnh sửa đổi trực tiếp (ví dụ <code>ba1.balance = 999999;</code>) mà không đi qua kiểm duyệt của hàm rút/gửi tiền."
                      ]
                    },
                    {
                      type: "label",
                      text: "Mã nguồn Java cài đặt theo kiểu OOP (Encapsulation):"
                    },
                    {
                      type: "code",
                      lang: "java",
                      code: `public class BankAccount {\n    private int acctNum;   // ẩn dữ liệu\n    private double balance;\n\n    public BankAccount(int acctNum, double balance) {\n        this.acctNum = acctNum;\n        this.balance = balance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) {\n            balance += amount;\n        }\n    }\n\n    public boolean withdraw(double amount) {\n        if (balance >= amount) {\n            balance -= amount;\n            return true;\n        }\n        return false;\n    }\n}`
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Đặc trưng của OOP Java:</strong> Dữ liệu và phương thức bọc chung trong Class. Sử dụng access modifier <code>private</code> để khóa chặt thuộc tính, không cho truy cập từ bên ngoài.",
                        "<strong>Tính an toàn:</strong> Mọi thao tác sửa đổi số dư bắt buộc phải thông qua phương thức public (<code>deposit</code>/<code>withdraw</code>), ngăn chặn tuyệt đối hacker chỉnh sửa RAM tùy tiện."
                      ]
                    },
                    {
                      type: "label",
                      text: "Hộp thử nghiệm xâm nhập dữ liệu thực tế:"
                    },
                    {
                      type: "java-bank-account-exploit-simulator"
                    },
                    {
                      type: "highlight",
                      text: "<strong>💡 Trọng tâm ôn thi:</strong> Phân biệt cách tổ chức dữ liệu của C (struct công khai, tách biệt hàm) và Java (class bảo mật private, đóng gói gắn liền hàm) thông qua ví dụ BankAccount. Trắc nghiệm lý thuyết cực kỳ hay hỏi điểm này!"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-design-sec",
          roman: "IV",
          title: "OOP Design - Thiết kế Class của riêng mình",
          subsections: [
        {
          id: "oop-sub-design-concepts",
          number: "4.1",
          title: "Khái niệm & Cấu trúc cơ bản",
          parts: [
            {
              id: "oop-part-design-concepts-intro",
              label: "1",
              title: "Khái niệm cơ bản",
              content: [
                {
                  type: "paragraph",
                  text: "Trước đây: Bạn đã sử dụng các <strong>class có sẵn</strong> từ Java API (như <code>Scanner</code>, <code>String</code>, <code>Math</code>, <code>Point</code>...). Đây là các <strong>service class (lớp dịch vụ)</strong>, mỗi class cung cấp một số chức năng/tiện ích thông qua các phương thức."
                },
                {
                  type: "paragraph",
                  text: "Chương trình sử dụng các service class này được gọi là <strong>client class</strong> hoặc <strong>driver class</strong>. Một client class bắt buộc phải có phương thức khởi chạy <code>public static void main(String[] args)</code>."
                },
                {
                  type: "highlight",
                  text: "• <strong>Trước đây (User Mode):</strong> Chúng ta đóng vai người sử dụng các lớp có sẵn.<br/>• <strong>Hiện tại (Designer Mode):</strong> Chúng ta đóng vai người thiết kế (designer) để tự tạo ra các <strong>service class</strong> mới cho người khác sử dụng."
                }
              ]
            },
            {
              id: "oop-part-class-structure",
              label: "2",
              title: "Class gồm những gì?",
              content: [
                {
                  type: "paragraph",
                  text: "Mục đích của một <strong>service class</strong> là đóng vai trò như một <strong>template (khuôn mẫu)</strong> để từ đó hệ thống tạo ra các <strong>instance (đối tượng thực tế)</strong> trong bộ nhớ RAM."
                },
                {
                  type: "bullets",
                  items: [
                    "Một Class thường bao gồm:",
                    "• <strong>Attributes (Thuộc tính):</strong> Các biến lưu trữ dữ liệu của đối tượng (còn gọi là <em>Member Data</em> hoặc <em>Fields</em>).",
                    "• <strong>Behaviours (Hành vi):</strong> Các phương thức xử lý và hoạt động của đối tượng (còn gọi là <em>Member Behaviours</em> hoặc <em>Methods</em>)."
                  ]
                },
                {
                  type: "paragraph",
                  text: "Mỗi <strong>instance (object)</strong> của cùng một class là các thực thể độc lập trong bộ nhớ RAM, nhưng chúng chia sẻ cùng một tập hợp thuộc tính và hành vi do class định nghĩa."
                }
              ]
            }
          ]
        },
        {
          id: "oop-sub-design-constructor",
          number: "4.2",
          title: "Hàm khởi tạo (Constructor)",
          parts: [
            {
              id: "oop-part-design-constructor-rules",
              label: "3",
              title: "Constructor (Hàm khởi tạo)",
              content: [
                {
                  type: "paragraph",
                  text: "Mỗi class có một hoặc nhiều <strong>constructor</strong>. Constructor là hàm đặc biệt dùng để <strong>tạo instance</strong> của class."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Default Constructor (Constructor mặc định):</strong>",
                    "• Không có tham số truyền vào.",
                    "• Được trình biên dịch tự động sinh ra nếu người thiết kế class không viết bất kỳ constructor nào.",
                    "<strong>Non-default Constructor:</strong> Do người thiết kế tự viết thêm vào, thường nhận tham số đầu vào để gán giá trị khởi tạo cho thuộc tính.",
                    "<strong>Constructor Overloading (Nạp chồng hàm khởi tạo):</strong> Một lớp có thể có nhiều constructor khác nhau về danh sách tham số (số lượng, kiểu dữ liệu, thứ tự tham số)."
                  ]
                },
                {
                  type: "highlight",
                  text: "<strong>⚠️ Quy tắc Constructor quan trọng:</strong><br/>1. Tên của Constructor phải trùng khớp hoàn toàn 100% với tên class.<br/>2. Constructor <strong>KHÔNG có kiểu trả về</strong> (không dùng cả từ khóa <code>void</code>).<br/>3. Có thể nạp chồng (overload) nhiều constructor."
                }
              ]
            }
          ]
        },
        {
          id: "oop-sub-design-access-modifiers",
          number: "4.3",
          title: "Mức độ truy cập & Quy tắc thiết kế",
          parts: [
            {
              id: "oop-part-design-access-modifiers-table",
              label: "4",
              title: "Mức độ truy cập (Access Modifiers)",
              content: [
                {
                  type: "paragraph",
                  text: "Java cung cấp 4 mức độ truy cập để giới hạn phạm vi sử dụng của thuộc tính và phương thức từ bên ngoài:"
                },
                {
                  type: "quote",
                  text: "<table class='min-w-full border-collapse border border-stone-200 text-xs md:text-sm my-4'><thead class='bg-stone-100'><tr><th class='border border-stone-200 p-2 font-bold text-left'>Modifier</th><th class='border border-stone-200 p-2 font-bold text-left'>Phạm vi truy cập</th><th class='border border-stone-200 p-2 font-bold text-left'>Khuyến nghị dùng cho</th></tr></thead><tbody><tr><td class='border border-stone-200 p-2 font-mono font-bold text-emerald-600'>public</td><td class='border border-stone-200 p-2'>Bất kỳ lớp nào ở bất kỳ package nào cũng truy cập được.</td><td class='border border-stone-200 p-2'>Phương thức dịch vụ (method)</td></tr><tr><td class='border border-stone-200 p-2 font-mono font-bold text-rose-500'>private</td><td class='border border-stone-200 p-2'>Chỉ trong cùng class mới truy cập được. Lớp bên ngoài không thể xem hoặc sửa trực tiếp.</td><td class='border border-stone-200 p-2'>Tất cả thuộc tính (attribute)</td></tr><tr><td class='border border-stone-200 p-2 font-mono font-bold text-blue-600'>protected</td><td class='border border-stone-200 p-2'>Trong cùng class, cùng package, hoặc lớp con (child class) kế thừa từ nó.</td><td class='border border-stone-200 p-2'>Dữ liệu dùng chung trong gia đình kế thừa</td></tr><tr><td class='border border-stone-200 p-2 font-mono font-bold text-stone-500'>[None] (default)</td><td class='border border-stone-200 p-2'>Chỉ các class trong cùng package mới truy cập được (Package private).</td><td class='border border-stone-200 p-2'>-</td></tr></tbody></table>"
                },
                {
                  type: "highlight",
                  text: "<strong>📌 Ghi nhớ:</strong> Thứ tự công khai giảm dần của các mức truy cập: <code>public</code> &gt; <code>protected</code> &gt; <code>[default]</code> &gt; <code>private</code>. Đây là câu hỏi trắc nghiệm lý thuyết cực kỳ quen thuộc!"
                }
              ]
            },
            {
              id: "oop-part-design-guidelines",
              label: "5",
              title: "Quy tắc thiết kế chung (Guidelines)",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Thuộc tính (Attribute) thường là private:</strong> Để thực hiện nguyên lý <em>information hiding (ẩn thông tin)</em> - bảo vệ toàn vẹn dữ liệu bên trong đối tượng khỏi sự can thiệp trái phép từ bên ngoài.",
                    "• Muốn thay đổi hoặc đọc thuộc tính private, bên ngoài bắt buộc phải gọi thông qua các phương thức public gián tiếp.",
                    "• <em>Ngoại lệ duy nhất:</em> Lớp <code>Point</code> trong JDK có các thuộc tính <code>x</code>, <code>y</code> là public vì lý do lịch sử cũ (legacy code).",
                    "<strong>Phương thức (Method) thường là public:</strong> Để làm cổng giao tiếp (interface) cho phép client class gọi sử dụng dịch vụ.",
                    "• Nếu một method chỉ phục vụ nội bộ bên trong lớp (hàm trợ giúp), hãy khai báo nó là <code>private</code>."
                  ]
                },
                {
                  type: "quote",
                  text: "<strong>💡 Giải thích thêm:</strong> 'Information hiding' và 'Encapsulation' có mối liên hệ mật thiết. <em>Information hiding</em> là mục tiêu (cần ẩn dữ liệu đi), còn <em>Encapsulation (tính đóng gói)</em> là kỹ thuật thực hiện mục tiêu đó bằng cách gộp chung dữ liệu + phương thức vào class và giới hạn truy cập bằng modifier private.",
                  source: "Giáo trình OOP"
                }
              ]
            }
          ]
        },
        {
          id: "oop-sub-design-bankacct-case-study",
          number: "4.4",
          title: "Thực hành: Lớp BankAcct",
          parts: [
            {
              id: "oop-part-design-bankacct-code",
              label: "6",
              title: "Ví dụ: Lớp BankAcct",
              content: [
                {
                  type: "paragraph",
                  text: "Hãy quan sát mã nguồn Java của lớp <code>BankAcct</code> (Lớp dịch vụ tài khoản ngân hàng) dưới đây để thấy cách khai báo thuộc tính private, constructor nạp chồng và các phương thức rút/gửi tiền:"
                },
                {
                  type: "java-bankacct-compile-workflow"
                },
                {
                  type: "highlight",
                  text: "<strong>🔍 Giải thích từng phần:</strong><br/>• <code>private int acctNum; private double balance;</code>: Khóa dữ liệu bằng <code>private</code>.<br/>• <code>public BankAcct() {}</code>: Default constructor khởi tạo số dư mặc định là 0.0.<br/>• <code>public BankAcct(int aNum, double bal) {}</code>: Overloaded constructor nhận tham số đầu vào để gán giá trị ban đầu tùy chỉnh."
                }
              ]
            },
            {
              id: "oop-part-accessor-mutator",
              label: "7",
              title: "Accessor và Mutator (Getter & Setter)",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Vì thuộc tính bị khóa private, người thiết kế class sẽ cung cấp hai loại phương thức đặc biệt để đọc/ghi dữ liệu an toàn:",
                    "• <strong>Accessor (Getter):</strong> Hàm lấy giá trị thuộc tính. Thường bắt đầu bằng từ khóa <code>get</code>, kiểu trả về trùng khớp với kiểu dữ liệu của thuộc tính (Ví dụ: <code>public int getAcctNum() { return acctNum; }</code>).",
                    "• <strong>Mutator (Setter):</strong> Hàm sửa đổi giá trị thuộc tính. Thường bắt đầu bằng từ khóa <code>set</code>, kiểu trả về thường là <code>void</code> và nhận tham số đầu vào (Ví dụ: <code>public void setBalance(double b) { balance = b; }</code>)."
                  ]
                },
                {
                  type: "highlight",
                  text: "<strong>📌 Ghi nhớ nhanh:</strong><br/>• Accessor (Getter): lấy giá trị, kiểu trả về trùng thuộc tính, không tham số.<br/>• Mutator (Setter): sửa giá trị, thường trả về <code>void</code>, có tham số để cập nhật."
                }
              ]
            }
          ]
        },
        {
          id: "oop-sub-design-client-security",
          number: "4.5",
          title: "Khách hàng sử dụng & Bảo mật đóng gói",
          parts: [
            {
              id: "oop-part-design-decisions",
              label: "8",
              title: "Quyết định của người thiết kế class",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Người thiết kế lớp (Designer) có toàn quyền quyết định cấu trúc nội bộ của lớp:",
                    "• Quyết định thuộc tính nào cần có trong lớp.",
                    "• Quyết định phương thức nào cung cấp cho người dùng thấy có ích (ví dụ: cung cấp thêm phương thức <code>transfer()</code> để chuyển tiền giữa 2 tài khoản)."
                  ]
                },
                {
                  type: "highlight",
                  text: "Không có quy tắc cứng nhắc trong thiết kế lớp, bạn nên tham khảo cách thiết kế các lớp chuẩn trong <strong>API documentation</strong> của Java để tích lũy kinh nghiệm thiết kế tốt."
                }
              ]
            },
            {
              id: "oop-part-client-class-concept",
              label: "9",
              title: "Viết Client Class (User Mode)",
              content: [
                {
                  type: "paragraph",
                  text: "Lớp dịch vụ <code>BankAcct</code> không chứa phương thức <code>main()</code> nên không thể tự chạy được. Để sử dụng nó, chúng ta viết một <strong>Client Class</strong> chứa hàm <code>main()</code> để khởi tạo và điều khiển đối tượng tài khoản."
                },
                {
                  type: "highlight",
                  text: "<strong>⚠️ Khuyến nghị đóng gói:</strong> Có thể đặt cả hai lớp (service class và client class) trong cùng 1 file <code>.java</code> để test nhanh, nhưng chỉ được phép có tối đa <strong>1 lớp public</strong> (lớp trùng tên với file <code>.java</code>). Khuyến nghị tốt nhất là viết tách rời mỗi lớp thành 1 file <code>.java</code> riêng biệt để tránh nhầm lẫn."
                }
              ]
            },
            {
              id: "oop-part-encapsulation-violations",
              label: "11",
              title: "Lỗi vi phạm Encapsulation",
              content: [
                {
                  type: "paragraph",
                  text: "Nếu một Client class cố tình truy cập trực tiếp vào thuộc tính private của lớp dịch vụ (ví dụ: gán trực tiếp <code>ba1.balance += 1000;</code>), hệ thống biên dịch Java sẽ phát hiện và báo lỗi ngay lập tức:"
                },
                {
                  type: "java-encapsulation-solution-box"
                }
              ]
            },
            {
              id: "oop-part-compiling-classes",
              label: "12",
              title: "Biên dịch & Chạy chương trình",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Khi có nhiều tệp tin lớp liên quan, ta biên dịch độc lập từng lớp bằng lệnh:",
                    "• Biên dịch: <code>javac BankAcct.java TestBankAcct.java</code>",
                    "• Chạy lớp chứa hàm main: <code>java TestBankAcct</code> (Lưu ý: Không viết đuôi .class khi chạy).",
                    "Một <strong>service class</strong> có thể được dùng chung bởi <strong>nhiều client class</strong> khác nhau (ví dụ: nhiều chương trình cùng sử dụng chung lớp <code>BankAcct</code> hoặc <code>Scanner</code>)."
                  ]
                },
                {
                  type: "highlight",
                  text: "<strong>📌 Ghi nhớ phòng thi:</strong><br/>• Lớp chạy thử (client class) phải có hàm <code>main()</code> mới chạy được.<br/>• Biên dịch: <code>javac TênFile.java</code> (phải có .java).<br/>• Chạy chương trình: <code>java TênLớp</code> (không được có .class)."
                }
              ]
            }
          ]
        }
          ]
        },
        {
          id: "oop-more-concepts-sec",
          roman: "V",
          title: "More OOP Concepts - Các khái niệm OOP nâng cao hơn",
          subsections: [
            {
              id: "oop-sub-more-concepts-static",
              number: "5.1",
              title: "Class member vs Instance member (static)",
              parts: [
                {
                  id: "oop-part-static-concepts",
                  label: "1",
                  title: "Khái niệm Class member và Instance member",
                  content: [
                    {
                      type: "paragraph",
                      text: "Một class trong Java luôn gồm hai thành phần cơ bản: <strong>attribute (thuộc tính - phần dữ liệu)</strong> và <strong>method (phương thức - phần hành vi)</strong>."
                    },
                    {
                      type: "paragraph",
                      text: "Để phân loại phạm vi và hành vi sử dụng của chúng, Java sử dụng từ khóa <code>static</code> để chia thành <strong>class member (thành phần lớp)</strong> và <strong>instance member (thành phần thực thể)</strong>:"
                    },
                    {
                      type: "java-class-vs-instance-comparison"
                    },
                    {
                      type: "highlight",
                      text: "<strong>⭐ Điểm cốt lõi thi trắc nghiệm:</strong><br/>• Các thuộc tính hoặc phương thức khai báo với từ khóa <code>static</code> là thuộc tính lớp / phương thức lớp, dùng chung duy nhất một ô nhớ cho cả Class.<br/>• Các thuộc tính/phương thức KHÔNG khai báo <code>static</code> là thuộc tính thực thể / phương thức thực thể, mỗi đối tượng được tạo ra bằng từ khóa <code>new</code> sẽ sở hữu một bản sao dữ liệu riêng."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-more-concepts-myball",
              number: "5.2",
              title: "Thực hành thiết kế Lớp MyBall",
              parts: [
                {
                  id: "oop-part-design-myball-intro",
                  label: "2",
                  title: "Ý tưởng thiết kế lớp MyBall",
                  content: [
                    {
                      type: "paragraph",
                      text: "Giả sử chúng ta thiết kế lớp <code>MyBall</code> để tạo ra các đối tượng quả bóng cụ thể trong hệ thống. Lớp này cần quản lý:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Instance attributes (Thuộc tính thực thể):</strong> Mỗi quả bóng có màu sắc riêng (<code>colour</code> - kiểu <code>String</code>) và bán kính riêng (<code>radius</code> - kiểu <code>double</code>).",
                        "<strong>Class attribute (Thuộc tính lớp - static):</strong> Chúng ta cần đếm tổng số đối tượng bóng đã được khởi tạo trong suốt quá trình chạy. Ta khai báo thuộc tính <code>quantity</code> (kiểu <code>int</code>) mang từ khóa <code>static</code> để làm biến đếm dùng chung cho toàn bộ Class.",
                        "<strong> behaviours (Hành vi):</strong> Gồm các hàm khởi tạo (Constructor), hàm lấy giá trị (Accessor - Getter), và hàm thay đổi giá trị (Mutator - Setter)."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-myball-code",
                  label: "3",
                  title: "Mã nguồn lớp dịch vụ MyBall.java",
                  content: [
                    {
                      type: "paragraph",
                      text: "Dưới đây là mã nguồn hoàn chỉnh của lớp dịch vụ <code>MyBall.java</code>. Hãy lưu ý phương thức <code>getQuantity()</code> được khai báo là <code>static</code> để cho phép client class gọi trực tiếp thông qua tên lớp:"
                    },
                    {
                      type: "code",
                      lang: "java",
                      code: "public class MyBall {\n    // 1. Data members\n    private static int quantity = 0; // Class attribute (static)\n    private String colour;           // Instance attribute\n    private double radius;           // Instance attribute\n\n    // 2. Constructors\n    // Default Constructor\n    public MyBall() {\n        setColour(\"yellow\");\n        setRadius(10.0);\n        quantity++;\n    }\n\n    // Overloaded Constructor\n    public MyBall(String newColour, double newRadius) {\n        setColour(newColour);\n        setRadius(newRadius);\n        quantity++;\n    }\n\n    // 3. Accessors (Getters)\n    public static int getQuantity() {\n        return quantity;\n    }\n\n    public String getColour() {\n        return colour;\n    }\n\n    public double getRadius() {\n        return radius;\n    }\n\n    // 4. Mutators (Setters)\n    public void setColour(String newColour) {\n        colour = newColour;\n    }\n\n    public void setRadius(double newRadius) {\n        radius = newRadius;\n    }\n}"
                    },
                    {
                      type: "paragraph",
                      text: "Hãy dùng trình giả lập dưới đây để cấp phát các đối tượng bóng vào RAM. Hãy chú ý sự phân bổ khác biệt giữa biến static <code>quantity</code> và các thuộc tính thực thể:"
                    },
                    {
                      type: "java-static-memory-visualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-more-concepts-client",
              number: "5.3",
              title: "Chương trình chạy thử & Module hóa",
              parts: [
                {
                  id: "oop-part-testball-v1",
                  label: "4",
                  title: "Chương trình kiểm thử TestBallV1",
                  content: [
                    {
                      type: "paragraph",
                      text: "Để chạy thử lớp dịch vụ <code>MyBall</code>, ta xây dựng lớp client <code>TestBallV1.java</code> chứa hàm <code>main()</code> để đọc dữ liệu từ bàn phím bằng <code>Scanner</code>, tạo bóng, và in thông tin:"
                    },
                    {
                      type: "code",
                      lang: "java",
                      code: "import java.util.Scanner;\n\npublic class TestBallV1 {\n    public static void main(String[] args) {\n        String inputColour;\n        double inputRadius;\n        Scanner sc = new Scanner(System.in);\n\n        // Đọc dữ liệu quả bóng 1\n        System.out.print(\"Enter colour: \");\n        inputColour = sc.next();\n        System.out.print(\"Enter radius: \");\n        inputRadius = sc.nextDouble();\n        MyBall myBall1 = new MyBall(inputColour, inputRadius);\n        System.out.println();\n\n        // Đọc dữ liệu quả bóng 2\n        System.out.print(\"Enter colour: \");\n        inputColour = sc.next();\n        System.out.print(\"Enter radius: \");\n        inputRadius = sc.nextDouble();\n        MyBall myBall2 = new MyBall(inputColour, inputRadius);\n        System.out.println();\n\n        // Hiển thị tổng quan\n        System.out.println(MyBall.getQuantity() + \" balls are created.\");\n        System.out.println(\"1st ball's colour and radius: \" \n            + myBall1.getColour() + \", \" + myBall1.getRadius());\n        System.out.println(\"2nd ball's colour and radius: \" \n            + myBall2.getColour() + \", \" + myBall2.getRadius());\n    }\n}"
                    }
                  ]
                },
                {
                  id: "oop-part-testball-v2",
                  label: "5",
                  title: "Module hóa chương trình với TestBallV2",
                  content: [
                    {
                      type: "paragraph",
                      text: "Quan sát mã nguồn <code>TestBallV1.java</code> ta thấy đoạn code đọc dữ liệu và khởi tạo đối tượng <code>MyBall</code> bị lặp đi lặp lại (duplicated code)."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Giải pháp:</strong> Ta tiến hành <strong>module hóa (modularise)</strong> bằng cách viết một phương thức trợ giúp <code>readBall(Scanner sc)</code> dùng chung. Phương thức này tự động quét dữ liệu từ bàn phím, khởi tạo quả bóng mới và trả về đối tượng vừa tạo:"
                    },
                    {
                      type: "code",
                      lang: "java",
                      code: "import java.util.Scanner;\n\npublic class TestBallV2 {\n    // Helper method tự viết để module hóa code\n    public static MyBall readBall(Scanner sc) {\n        System.out.print(\"Enter colour: \");\n        String inputColour = sc.next();\n        System.out.print(\"Enter radius: \");\n        double inputRadius = sc.nextDouble();\n        return new MyBall(inputColour, inputRadius);\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n\n        // Gọi hàm dùng chung ngắn gọn\n        MyBall myBall1 = readBall(sc);\n        System.out.println();\n        MyBall myBall2 = readBall(sc);\n        System.out.println();\n\n        System.out.println(MyBall.getQuantity() + \" balls are created.\");\n        System.out.println(\"1st ball's colour and radius: \" \n            + myBall1.getColour() + \", \" + myBall1.getRadius());\n        System.out.println(\"2nd ball's colour and radius: \" \n            + myBall2.getColour() + \", \" + myBall2.getRadius());\n    }\n}"
                    },
                    {
                      type: "paragraph",
                      text: "Hãy dùng bảng giả lập chạy code dưới đây để theo dõi luồng thực thi và so sánh trực quan hiệu quả module hóa giữa phiên bản V1 và V2:"
                    },
                    {
                      type: "java-test-ball-workflow"
                    },
                    {
                      type: "highlight",
                      text: "<strong>💡 Bài học rút ra:</strong> Việc thay đổi cách viết bên trong Client Program (TestBallV2) hoàn toàn <strong>không ảnh hưởng</strong> gì đến dịch vụ đã được định nghĩa bên trong Service Class (MyBall.java). Đây là một ưu thế lớn của tính Đóng gói và Phân tách vai trò trong Lập trình hướng đối tượng."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-more-concepts-this",
              number: "5.4",
              title: "Từ khóa \"this\" và Shadowing",
              parts: [
                {
                  id: "oop-part-this-shadowing",
                  label: "6",
                  title: "Tham chiếu \"this\" & Giải quyết Trùng tên",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>a. Vấn đề trùng tên (Shadowing):</strong> Khi tham số truyền vào của phương thức (parameter) hoặc biến cục bộ trùng tên hoàn toàn với thuộc tính lớp (attribute), Java sẽ ưu tiên biến cục bộ có phạm vi gần hơn. Thuộc tính lớp lúc này bị che khuất (shadowed)."
                    },
                    {
                      type: "paragraph",
                      text: "Hãy quan sát ví dụ dưới đây để thấy tại sao phép gán trực tiếp không hoạt động, và cách từ khóa <code>this</code> được sử dụng làm tham chiếu giải quyết trùng tên:"
                    },
                    {
                      type: "java-this-reference-visualizer"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>b. Bản chất của \"this\":</strong> <code>this</code> là một biến tham chiếu ẩn (implicit reference) trỏ trực tiếp đến <strong>đối tượng hiện hành</strong> đang gọi phương thức."
                    },
                    {
                      type: "highlight",
                      text: "• Khi gọi <code>b1.setColour(\"purple\")</code> ➔ <code>this</code> trỏ tới <code>b1</code> (vùng nhớ <code>0x301</code>).<br/>• Khi gọi <code>b2.setColour(\"brown\")</code> ➔ <code>this</code> trỏ tới <code>b2</code> (vùng nhớ <code>0x302</code>)."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>c. Sử dụng \"this\" là tùy chọn:</strong> Nếu không có sự trùng tên giữa tham số và thuộc tính, việc sử dụng <code>this.</code> là tùy chọn (optional) và không bắt buộc. Ví dụ: <code>public String getColour() { return this.colour; }</code> hoạt động giống hệt <code>return colour;</code>."
                    },
                    {
                      type: "highlight",
                      text: "<strong>🚨 LỖI BIÊN DỊCH CỰC KỲ DỄ GẶP:</strong><br/>Không được phép sử dụng từ khóa <code>this</code> bên trong phương thức tĩnh (<code>static method</code>).<br/>Ví dụ: Lệnh <code>public static int getQuantity() { return this.quantity; }</code> sẽ gây ra lỗi biên dịch vì phương thức static thuộc về lớp, không có đối tượng cụ thể nào để trỏ <code>this</code>!"
                    }
                  ]
                },
                {
                  id: "oop-part-naming-conventions",
                  label: "7",
                  title: "Quy ước đặt tên thuộc tính (Naming Convention)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Một số nhà phát triển đề xuất đặt tên thuộc tính kèm tiền tố <code>_</code> hoặc <code>m_</code> (Ví dụ: <code>private String _colour; private double _radius;</code>). Cách này giúp tránh trùng tên với tham số mà không cần dùng <code>this</code>.",
                        "Một số khác đề xuất luôn viết <code>this.</code> kể cả khi không trùng tên để mã nguồn mạch lạc.",
                        "<strong>Quy tắc quan trọng:</strong> Java không bắt buộc theo phong cách nào, điều quan trọng nhất là bạn phải duy trì sự **nhất quán (consistent)** trong toàn bộ dự án."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-more-concepts-reuse",
              number: "5.5",
              title: "Nạp chồng & Tái sử dụng Constructor",
              parts: [
                {
                  id: "oop-part-code-reuse-setters",
                  label: "8",
                  title: "Tái sử dụng code qua Setter trong Constructor",
                  content: [
                    {
                      type: "paragraph",
                      text: "Khi viết constructor, chúng ta có hai cách thiết lập giá trị thuộc tính:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Cách 1 (Gán trực tiếp):</strong> <code>colour = newColour; radius = newRadius;</code>",
                        "<strong>Cách 2 (Gọi setter):</strong> <code>setColour(newColour); setRadius(newRadius);</code> ➔ Đây là cách khuyến nghị hơn (ưu việt hơn) vì nó tuân thủ quy tắc <strong>code reuse (tái sử dụng code)</strong>. Nếu sau này setter bổ sung thêm logic kiểm tra dữ liệu hợp lệ, constructor gọi setter cũng sẽ tự động được bảo vệ."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-constructor-chaining",
                  label: "9",
                  title: "Gọi chéo Constructor bằng this(...)",
                  content: [
                    {
                      type: "paragraph",
                      text: "Khi có nhiều constructor nạp chồng (overloaded) có logic tương đồng, ta có thể dùng cú pháp <code>this(...)</code> để gọi constructor này từ một constructor khác nhằm tái sử dụng mã nguồn và giảm lặp code."
                    },
                    {
                      type: "paragraph",
                      text: "Hãy chạy trình giả lập dưới đây để quan sát luồng điều khiển nhảy chéo giữa các constructor khi khởi tạo một đối tượng <code>MyBall</code>:"
                    },
                    {
                      type: "java-constructor-chaining-visualizer"
                    },
                    {
                      type: "highlight",
                      text: "<strong>⚠️ Quy tắc bắt buộc:</strong> Lệnh gọi <code>this(...)</code> phải là <strong>dòng lệnh đầu tiên</strong> trong thân hàm constructor. Nếu viết bất kỳ dòng lệnh nào khác lên trước, trình biên dịch Java sẽ báo lỗi ngay lập tức."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-more-concepts-overriding",
              number: "5.6",
              title: "Ghi đè phương thức: toString() và equals()",
              parts: [
                {
                  id: "oop-part-object-methods-override",
                  label: "10",
                  title: "Ghi đè phương thức (Method Overriding)",
                  content: [
                    {
                      type: "paragraph",
                      text: "Trong Java, mọi class đều ngầm định là lớp con (subclass) của lớp tối cao <strong><code>java.lang.Object</code></strong>. Lớp <code>Object</code> này cung cấp sẵn một số phương thức cơ bản mà mọi đối tượng đều thừa kế:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Phương thức toString():</strong> Dòng này dùng để chuyển đổi đối tượng thành dạng chuỗi văn bản. Nếu không ghi đè, lệnh <code>System.out.println(myBall)</code> sẽ in ra mã định danh đối tượng (OID) có dạng: <code>MyBall@10ef90c</code>.",
                        "• Bằng cách ghi đè (override) <code>toString()</code> trong lớp <code>MyBall</code>, ta có thể in ra kết quả thân thiện: <code>[red, 6.2]</code>.",
                        "<strong>Phương thức equals(Object obj):</strong> Dùng để so sánh nội dung dữ liệu giữa hai đối tượng xem có bằng nhau hay không.",
                        "• Toán tử <code>==</code> chỉ so sánh **địa chỉ tham chiếu (ô nhớ)** của hai biến.",
                        "• Phương thức <code>equals()</code> sau khi được ghi đè đúng cách sẽ so sánh **nội dung dữ liệu thuộc tính** bên trong."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "Hãy dùng bảng đối chiếu so sánh dưới đây để hiểu rõ cơ chế so sánh ô nhớ của <code>==</code> so với so sánh dữ liệu của <code>equals()</code>:"
                    },
                    {
                      type: "java-object-equality-inspector"
                    }
                  ]
                },
                {
                  id: "oop-part-improved-code-tabs",
                  label: "11",
                  title: "Mã nguồn hoàn chỉnh lớp MyBall & Client Class",
                  content: [
                    {
                      type: "paragraph",
                      text: "Dưới đây là mã nguồn tổng hợp đầy đủ của lớp dịch vụ <code>MyBall.java</code> (phiên bản cải tiến tích hợp đầy đủ <code>this</code>, nạp chồng constructor, ghi đè <code>toString()</code> và <code>equals()</code>) cùng lớp client chạy thử <code>TestBallV4.java</code>:"
                    },
                    {
                      type: "java-improved-myball-tabs"
                    },
                    {
                      type: "highlight",
                      text: "<strong>💡 Tổng kết phòng thi:</strong> Đây là dạng bài tập lớn kinh điển trong các đề thi OOP lý thuyết và thực hành. Hãy nắm chắc cách viết hàm <code>equals()</code> (phải dùng <code>instanceof</code> để kiểm tra kiểu đối tượng trước khi ép kiểu và so sánh các thuộc tính màu sắc, bán kính) để đạt điểm tối đa!"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-uml-sec",
      roman: "VI",
      title: "Unified Modeling Language (UML)",
      subsections: [
            {
              id: "oop-sub-uml-intro",
              number: "6.1",
              title: "Giới thiệu UML & Biểu tượng Class",
              parts: [
                {
                  id: "oop-part-uml-intro",
                  label: "1",
                  title: "Giới thiệu chung về UML",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>UML (Unified Modeling Language - Ngôn ngữ mô hình hóa thống nhất):</strong> là một ngôn ngữ đồ họa (graphical language) giúp trực quan hóa, đặc tả, xây dựng và làm tài liệu cho các thành phần của hệ thống phần mềm hướng đối tượng."
                    },
                    {
                      type: "bullets",
                      items: [
                        "Cung cấp một tập hợp các sơ đồ (diagrams) với cú pháp và quy ước biểu diễn riêng.",
                        "Trong đặc tả UML 2.2, có tổng cộng **14 loại sơ đồ** khác nhau được chia thành hai nhóm chính: Sơ đồ cấu trúc (Structural Diagrams) và Sơ đồ hành vi (Behavioral Diagrams).",
                        "Trong môn học này, chúng ta sẽ tập trung chủ yếu vào **Class Diagram (Sơ đồ lớp)** để mô tả cấu trúc tĩnh của hệ thống một cách linh hoạt."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-uml-class-icon",
                  label: "2",
                  title: "Biểu tượng Class trong UML (Class Icon)",
                  content: [
                    {
                      type: "paragraph",
                      text: "Một biểu tượng lớp (Class Icon) chuẩn UML được chia làm 3 phần chữ nhật xếp chồng: <strong>Tên Class</strong> ở trên cùng, tiếp theo là danh sách <strong>Thuộc tính (Attributes)</strong>, và dưới cùng là danh sách <strong>Phương thức (Methods)</strong>."
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Cú pháp biểu diễn thuộc tính:</strong> <code>[visibility] attributeName: data_type</code>",
                        "<strong>Cú pháp biểu diễn phương thức:</strong> <code>[visibility] methodName(paramName: paramType): return_type</code>"
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Ký hiệu mức truy cập (Visibility):</strong> Hãy sử dụng các thẻ ký hiệu tương tác dưới đây để nắm vững quy ước ký hiệu mức truy cập:"
                    },
                    {
                      type: "java-uml-visibility-cards"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Ký hiệu thuộc tính/phương thức tĩnh (static):</strong> Chuẩn UML quy định bất kỳ thành phần static (Class member) nào cũng đều phải được <strong>gạch chân (underlined)</strong>. Các thành phần không gạch chân đại diện cho thực thể (Instance member)."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-uml-diagrams",
              number: "6.2",
              title: "Sơ đồ lớp vs Sơ đồ đối tượng & Quan hệ phụ thuộc",
              parts: [
                {
                  id: "oop-part-uml-class-vs-object",
                  label: "3",
                  title: "Biểu diễn Class, Object & Mối quan hệ trong UML",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Class:</strong> Được biểu diễn bằng tên lớp thông thường (Ví dụ: <code>MyBall</code>).",
                        "<strong>Object:</strong> Được biểu diễn bằng tên đối tượng gạch chân kèm tên lớp theo cú pháp <code><u>objectName: ClassName</u></code> (Ví dụ: <code><u>myBall1: MyBall</u></code>). Sơ đồ đối tượng chỉ chứa giá trị thuộc tính cụ thể, không chứa phương thức.",
                        "<strong>Đường nối liền (Solid line):</strong> Thể hiện quan hệ thực thể hóa (<code>instance-of</code>) liên kết đối tượng về với Lớp định nghĩa nó.",
                        "<strong>Mũi tên nét đứt (Dotted arrow ---&gt;):</strong> Biểu diễn mối quan hệ phụ thuộc (Dependency Relationship) giữa các lớp. Class1 ---&gt; Class2 nghĩa là Class1 sử dụng dịch vụ của Class2 và phụ thuộc vào sự ổn định của Class2."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "Hãy tự mình trải nghiệm sơ đồ UML lớp và đối tượng tương tác dưới đây:"
                    },
                    {
                      type: "java-uml-interactive-diagram"
                    },
                    {
                      type: "paragraph",
                      text: "Hãy bấm các nút mô phỏng dưới đây để hiểu bản chất của mối quan hệ phụ thuộc dịch vụ:"
                    },
                    {
                      type: "java-dependency-visualizer"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-encapsulation-summary-sec",
          roman: "VII",
          title: "Tổng kết (Summary)",
          subsections: [
            {
              id: "oop-sub-summary",
              number: "7.1",
              title: "Điểm ôn tập phòng thi",
              parts: [
                {
                  id: "oop-part-summary-recap",
                  label: "★",
                  title: "Tóm tắt Kiến thức Cốt lõi & Mẹo thi cử",
                  content: [
                    {
                      type: "paragraph",
                      text: "Chúc mừng bạn đã hoàn thành bài học <strong>Bài 5: Encapsulation & Access Modifiers</strong>! Hãy sử dụng bảng tổng kết tương tác dưới đây để tổng ôn toàn bộ kiến thức và chuẩn bị tốt nhất cho các kỳ thi:"
                    },
                    {
                      type: "java-interactive-recap-panel"
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
      id: "oop-inheritance",
      title: "Bài 6 & 7",
      subtitle: "Inheritance",
      sections: [
        {
          id: "oop-inheritance-outline-sec",
          roman: "",
          title: "Mục tiêu bài học (Objectives)",
          subsections: [
            {
              id: "oop-sub-inheritance-goals",
              number: "",
              title: "Mục tiêu cần đạt",
              parts: [
                {
                  id: "oop-part-inheritance-goals-desc",
                  label: "",
                  title: "Định hướng & Ghi nhớ học tập",
                  content: [
                    {
                      type: "paragraph",
                      text: "Chào mừng bạn đến với <strong>Bài 6 & 7: Tính kế thừa (Inheritance)</strong>! Dưới đây là những mục tiêu cốt lõi mà bạn cần nắm vững sau khi kết thúc bài học này:"
                    },
                    {
                      type: "java-inheritance-goals-explorer"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-inheritance-overview-sec",
          roman: "I",
          title: "Tổng quan Object-Oriented Programming (OOP)",
          subsections: [
            {
              id: "oop-sub-inheritance-overview-pillars",
              number: "",
              title: "4 khái niệm nền tảng của OOP",
              parts: [
                {
                  id: "oop-part-inheritance-overview-pillars-visual",
                  label: "",
                  title: "Khái niệm cơ bản",
                  content: [
                    {
                      type: "paragraph",
                      text: "Lập trình hướng đối tượng (OOP) được xây dựng dựa trên <strong>4 khái niệm nền tảng</strong> (4 trụ cột cốt lõi). Hãy bấm chọn từng trụ cột bên dưới để khám phá định nghĩa tương ứng:"
                    },
                    {
                      type: "java-inheritance-oop-overview"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-inheritance-overriding-methods-sec",
          roman: "II",
          title: "Overriding Methods (Ôn lại)",
          subsections: [
            {
              id: "oop-sub-inheritance-overriding",
              number: "",
              title: "Khái niệm Ghi đè phương thức",
              parts: [
                {
                  id: "oop-part-inheritance-overriding-desc",
                  label: "",
                  title: "Bài tập thực hành tương tác",
                  content: [
                    {
                      type: "paragraph",
                      text: "Ghi đè phương thức (Method Overriding) xảy ra khi lớp con định nghĩa lại một phương thức đã có ở lớp cha với cùng tên, cùng kiểu dữ liệu trả về và danh sách tham số. Hãy cùng ôn tập qua cấu phần bên dưới."
                    },
                    {
                      type: "java-inheritance-overriding-review"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-inheritance-creating-subclass-sec",
          roman: "III",
          title: "Creating a Subclass (Tạo lớp con)",
          subsections: [
            {
              id: "oop-sub-inheritance-creating-subclass",
              number: "",
              title: "Cách xây dựng lớp con",
              parts: [
                {
                  id: "oop-part-inheritance-creating-subclass-desc",
                  label: "",
                  title: "Hướng dẫn & Thực hành tương tác",
                  content: [
                    {
                      type: "paragraph",
                      text: "Kế thừa cho phép ta tạo lập một lớp con (subclass) từ lớp cha (superclass) sẵn có bằng cách sử dụng từ khóa <code>extends</code>. Hãy chuyển qua các tab bên dưới để tìm hiểu về cách hoạt động của từ khóa <code>extends</code>, <code>protected</code>, cách biểu diễn sơ đồ lớp UML, cách hàm khởi tạo hoạt động thông qua <code>super()</code>, và tương tác giả lập console chạy chương trình thử nghiệm."
                    },
                    {
                      type: "java-inheritance-creating-subclass"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-inheritance-substitutability-sec",
          roman: "IV",
          title: "Subclass Substitutability (Tính thay thế của lớp con)",
          subsections: [
            {
              id: "oop-sub-inheritance-substitutability",
              number: "",
              title: "Tính thay thế trong kế thừa",
              parts: [
                {
                  id: "oop-part-inheritance-substitutability-desc",
                  label: "",
                  title: "Khái niệm & Thực hành",
                  content: [
                    {
                      type: "paragraph",
                      text: "Một trong những lợi ích lớn nhất của kế thừa là <strong>Subclass Substitutability (Tính thay thế của lớp con)</strong>: ở bất kỳ đâu cần một đối tượng lớp cha, đối tượng lớp con đều có thể thay thế được. Hãy tương tác với cấu phần bên dưới để khám phá tính chất này."
                    },
                    {
                      type: "java-inheritance-substitutability"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-inheritance-object-sec",
          roman: "V",
          title: "Lớp Object (Lớp gốc trong Java)",
          subsections: [
            {
              id: "oop-sub-inheritance-object",
              number: "",
              title: "Tổ tiên chung Object",
              parts: [
                {
                  id: "oop-part-inheritance-object-desc",
                  label: "",
                  title: "Tìm hiểu lớp Object",
                  content: [
                    {
                      type: "paragraph",
                      text: "Trong Java, lớp <code>Object</code> là tổ tiên chung của tất cả các lớp. Mọi lớp đều thừa hưởng các hành vi cơ bản như <code>toString()</code> và <code>equals()</code>. Hãy cùng tìm hiểu cấu trúc cây kế thừa và cách ghi đè các phương thức này qua cấu phần bên dưới."
                    },
                    {
                      type: "java-inheritance-object-class"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-inheritance-isa-hasa-sec",
          roman: "VI",
          title: "\"is-a\" và \"has-a\"",
          subsections: [
            {
              id: "oop-sub-inheritance-isa-hasa",
              number: "",
              title: "Phân biệt mối quan hệ",
              parts: [
                {
                  id: "oop-part-inheritance-isa-hasa-desc",
                  label: "",
                  title: "Quy tắc thiết kế hệ thống",
                  content: [
                    {
                      type: "paragraph",
                      text: "Việc lựa chọn thiết kế giữa kế thừa (is-a) và kết hợp (has-a) quyết định sự bền vững của kiến trúc phần mềm. Hãy xem bảng so sánh và các quy tắc để lựa chọn thiết kế phù hợp bên dưới."
                    },
                    {
                      type: "java-inheritance-isa-hasa"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-inheritance-final-sec",
          roman: "VII",
          title: "Ngăn chặn kế thừa bằng final",
          subsections: [
            {
              id: "oop-sub-inheritance-final",
              number: "",
              title: "Từ khóa final",
              parts: [
                {
                  id: "oop-part-inheritance-final-desc",
                  label: "",
                  title: "Khái niệm & Cách dùng",
                  content: [
                    {
                      type: "paragraph",
                      text: "Đôi khi ta muốn ngăn chặn kế thừa hoặc ghi đè để bảo vệ tính toàn vẹn của mã nguồn. Hãy tìm hiểu cách hoạt động của từ khóa <code>final</code> qua cấu phần tương tác dưới đây."
                    },
                    {
                      type: "java-inheritance-final-keyword"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-inheritance-limitations-sec",
          roman: "VIII",
          title: "Giới hạn của kế thừa trong Java",
          subsections: [
            {
              id: "oop-sub-inheritance-limitations",
              number: "",
              title: "Đơn kế thừa",
              parts: [
                {
                  id: "oop-part-inheritance-limitations-desc",
                  label: "",
                  title: "Giới hạn thiết kế",
                  content: [
                    {
                      type: "paragraph",
                      text: "Java chỉ hỗ trợ đơn kế thừa giữa các lớp để tránh xung đột mã nguồn. Hãy tìm hiểu lý do tại sao và cách Java giải quyết bài toán đa kế thừa bằng <code>interface</code> dưới đây."
                    },
                    {
                      type: "java-inheritance-limitations"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-inheritance-quiz-chaining-sec",
          roman: "IX",
          title: "Quick Quiz (Kế thừa 3 tầng & Đa hình)",
          subsections: [
            {
              id: "oop-sub-inheritance-quiz-chaining",
              number: "1",
              title: "Quiz 1 — Kế thừa 3 tầng (ClassA → B → C)",
              parts: [
                {
                  id: "oop-part-inheritance-quiz-chaining-desc",
                  label: "",
                  title: "Bài tập trace code",
                  content: [
                    {
                      type: "paragraph",
                      text: "Hãy cùng giải bài tập trace code chuỗi kế thừa 3 tầng (ClassA → ClassB → ClassC) để kiểm tra kiến thức về constructor chaining và shadowing dưới đây."
                    },
                    {
                      type: "java-inheritance-quiz-chaining"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-inheritance-quiz-compilerun",
              number: "2",
              title: "Quiz 2 — Ghi đè & Đa hình",
              parts: [
                {
                  id: "oop-part-inheritance-quiz-compilerun-desc",
                  label: "",
                  title: "Đoạn code & Kết quả",
                  content: [
                    {
                      type: "paragraph",
                      text: "Hãy tự trả lời xem các đoạn mã nguồn dưới đây có gặp lỗi biên dịch không, và nếu không thì kết quả chạy là gì. Sau đó bấm lật từng đáp án để đối chiếu và xem giải thích chi tiết."
                    },
                    {
                      type: "java-inheritance-quiz-compilerun"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-inheritance-summary-sec",
          roman: "X",
          title: "Tổng kết (Summary)",
          subsections: [
            {
              id: "oop-sub-inheritance-summary",
              number: "",
              title: "Ôn tập toàn bài",
              parts: [
                {
                  id: "oop-part-inheritance-summary-desc",
                  label: "",
                  title: "Cheat Sheet & Flash Card",
                  content: [
                    {
                      type: "paragraph",
                      text: "Ôn lại toàn bộ kiến thức bài Inheritance qua 4 trụ cột chính và 10 thẻ Cheat Sheet. Bấm vào từng thẻ để lật ra định nghĩa đầy đủ và kiểm tra bản thân!"
                    },
                    {
                      type: "java-inheritance-summary"
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
      id: "oop-abstract-class",
      title: "Bài 8",
      subtitle: "Abstract Class",
      sections: [
        {
          id: "oop-abstract-class-sec",
          roman: "I",
          title: "Abstraction (Trừu tượng hóa)",
          subsections: [
            {
              id: "oop-sub-abstraction-concept",
              number: "1",
              title: "Khái niệm Abstraction",
              parts: [
                {
                  id: "oop-part-abstraction-concept",
                  label: "a",
                  title: "Khái niệm Abstraction",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>a. Abstraction (Trừu tượng hóa):</strong> là quá trình <strong>ẩn đi chi tiết cài đặt (implementation)</strong>, chỉ hiển thị cho người dùng <strong>chức năng (functionality)</strong>.",
                        "<strong>b. Nói cách khác:</strong> chỉ cho người dùng thấy <strong>những gì thiết yếu</strong>, ẩn đi các chi tiết bên trong.",
                        "&nbsp;&nbsp;&nbsp;&nbsp;• <em>VD:</em> khi gửi tin nhắn SMS, bạn chỉ gõ nội dung và bấm gửi – bạn <strong>không biết</strong> quá trình xử lý gửi tin nhắn diễn ra bên trong như thế nào.",
                        "<strong>c. Abstraction giúp bạn tập trung vào:</strong> <strong>object làm được gì</strong>, thay vì <strong>nó làm như thế nào</strong>."
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>📦 Ghi nhớ nhanh</strong><br/>" +
                            "• <strong>Khái niệm:</strong> <strong>Abstraction (Trừu tượng hóa)</strong> = ẩn chi tiết cài đặt, chỉ lộ ra chức năng cần dùng.<br/>" +
                            "• <strong>Mục đích:</strong> cho phép người dùng sử dụng mà không cần hiểu cơ chế bên trong.<br/>" +
                            "• <strong>Ví dụ thực tế:</strong> gửi SMS – chỉ cần gõ và gửi, không cần biết cơ chế truyền tin.<br/>" +
                            "• <strong>Điểm dễ thi:</strong> Abstraction thuộc nhóm 4 tính chất OOP: <strong>Encapsulation (Đóng gói), Inheritance (Kế thừa), Polymorphism (Đa hình), Abstraction (Trừu tượng hóa)</strong>."
                    },
                    {
                      type: "java-abstraction-concept-visualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-abstraction-methods",
              number: "2",
              title: "Hai cách đạt được Abstraction trong Java",
              parts: [
                {
                  id: "oop-part-abstraction-methods",
                  label: "a",
                  title: "Hai cách đạt được Abstraction trong Java",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>a. Abstract class (Lớp trừu tượng):</strong> đạt trừu tượng hóa ở mức <strong>0% đến 100%</strong> (có thể lẫn cả method đã cài đặt và chưa cài đặt).",
                        "<strong>b. Interface (Giao diện):</strong> đạt trừu tượng hóa <strong>100%</strong> (toàn bộ method chưa có cài đặt – trước Java 8)."
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong>📌 Ghi nhớ</strong><br/>" +
                            "• <strong>Rất hay ra thi:</strong> phân biệt tỉ lệ trừu tượng hóa – <strong>Abstract class: 0-100%</strong>, <strong>Interface: 100%</strong>.<br/>" +
                            "• Đây là điểm khác biệt cốt lõi giữa 2 cách hiện thực Abstraction."
                    },
                    {
                      type: "java-abstraction-level-compare"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-abstract-class-java-sec",
          roman: "II",
          title: "Abstract Class (Lớp trừu tượng) trong Java",
          subsections: [
            {
              id: "oop-sub-abstract-class-definition",
              number: "1",
              title: "Định nghĩa & Đặc điểm",
              parts: [
                {
                  id: "oop-part-abstract-class-def",
                  label: "a",
                  title: "Định nghĩa Lớp trừu tượng",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Lớp trừu tượng (Abstract Class):</strong> Là một lớp được khai báo với từ khóa <code>abstract</code>.",
                        "<strong>Khả năng chứa phương thức:</strong> Lớp trừu tượng có thể chứa các phương thức trừu tượng (không có phần thân code) và cả các phương thức thông thường (có phần thân code đầy đủ).",
                        "<strong>Ràng buộc khởi tạo:</strong> Lớp trừu tượng <strong>không thể khởi tạo đối tượng trực tiếp</strong> bằng toán tử <code>new</code>. Nó được thiết kế để làm lớp cha cho các lớp khác kế thừa và hiện thực hóa hành vi."
                      ]
                    },
                    {
                      type: "highlight",
                      text: "<strong> Ghi nhớ nhanh:</strong><br/>" +
                            "• Định nghĩa: Abstract Class = Lớp khai báo bằng từ khóa <code>abstract</code>.<br/>" +
                            "• Đặc trưng: Có thể chứa <code>abstract method</code> (chỉ khai báo tên hàm, không có phần thân code).<br/>" +
                            "• Ràng buộc: Không thể viết <code>new AbstractClass()</code>."
                    }
                  ]
                },
                {
                  id: "oop-part-abstract-class-features",
                  label: "b",
                  title: "6 Đặc điểm của Abstract Class",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>1. Khai báo:</strong> Bắt buộc phải sử dụng từ khóa <code>abstract</code>.",
                        "<strong>2. Phương thức trừu tượng:</strong> Có thể có hoặc không có phương thức trừu tượng.",
                        "<strong>3. Khởi tạo:</strong> Không thể tạo thực thể (instantiated) trực tiếp.",
                        "<strong>4. Constructor:</strong> Có thể chứa các phương thức khởi tạo (constructor) để lớp con gọi thông qua <code>super()</code>.",
                        "<strong>5. Thành viên dữ liệu:</strong> Có thể chứa các thuộc tính (fields), biến tĩnh (static variables).",
                        "<strong>6. Phương thức final:</strong> Có thể chứa các phương thức <code>final</code> để ngăn chặn lớp con ghi đè (override) hành vi đó."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-abstract-class-syntax",
              number: "2",
              title: "Cú pháp (Syntax)",
              parts: [
                {
                  id: "oop-part-abstract-class-syntax-def",
                  label: "a",
                  title: "Khai báo lớp và phương thức trừu tượng",
                  content: [
                    {
                      type: "paragraph",
                      text: "Cú pháp khai báo một lớp trừu tượng (Abstract Class):"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "abstract class ClassName {\n  // Các biến thành viên (fields)\n  // Các phương thức khởi tạo (constructor)\n  // Các phương thức có phần thân\n  // Các phương thức trừu tượng (abstract methods)\n}"
                    },
                    {
                      type: "paragraph",
                      text: "Cú pháp khai báo một phương thức trừu tượng (Abstract Method):"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "abstract void methodName(); // Kết thúc bằng dấu chấm phẩy, không có cặp ngoặc nhọn {}"
                    },
                    {
                      type: "highlight",
                      text: "<strong>⚠️ Cảnh báo lỗi thi:</strong><br/>" +
                            "• Phương thức trừu tượng <strong>không được phép</strong> có phần thân code (không có cặp dấu ngoặc nhọn <code>{}</code>).<br/>" +
                            "• Nếu cố ý viết: <code>abstract void run() {}</code> -> Trình biên dịch sẽ báo lỗi cú pháp ngay lập tức."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-abstract-class-examples",
              number: "3",
              title: "Ví dụ minh họa",
              parts: [
                {
                  id: "oop-part-abstract-class-ex1",
                  label: "a",
                  title: "Ví dụ 1: Bike & Honda4",
                  content: [
                    {
                      type: "paragraph",
                      text: "Ví dụ cơ bản về một lớp trừu tượng <code>Bike</code> có phương thức trừu tượng <code>run()</code> và lớp con <code>Honda4</code> kế thừa hiện thực hóa nó:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "abstract class Bike {\n  abstract void run();\n}\n\nclass Honda4 extends Bike {\n  void run() {\n    System.out.println(\"running safely..\");\n  }\n\n  public static void main(String args[]) {\n    Bike obj = new Honda4();\n    obj.run();\n  }\n}"
                    },
                    {
                      type: "java-abstract-bike-visualizer"
                    }
                  ]
                },
                {
                  id: "oop-part-abstract-class-ex2",
                  label: "b",
                  title: "Ví dụ 2: Shape, Rectangle & Circle",
                  content: [
                    {
                      type: "paragraph",
                      text: "Một ví dụ khác thể hiện tính đa hình và trừu tượng hóa thông qua lớp cha <code>Shape</code>, lớp con <code>Rectangle</code> và <code>Circle1</code>:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "abstract class Shape {\n  abstract void draw();\n}\n\nclass Rectangle extends Shape {\n  void draw() { System.out.println(\"drawing rectangle\"); }\n}\n\nclass Circle1 extends Shape {\n  void draw() { System.out.println(\"drawing circle\"); }\n}\n\nclass TestAbstraction2 {\n  public static void main(String args[]) {\n    Shape s = new Rectangle();\n    s.draw();\n    s = new Circle1();\n    s.draw();\n  }\n}"
                    },
                    {
                      type: "java-abstract-shape-visualizer"
                    }
                  ]
                },
                {
                  id: "oop-part-abstract-class-ex3",
                  label: "c",
                  title: "Ví dụ 3: Bank, SBI & PNB",
                  content: [
                    {
                      type: "paragraph",
                      text: "Mô phỏng đa hình lớp trừu tượng <code>Bank</code> có phương thức <code>getRateOfInterest()</code> trả về lãi suất thay đổi tùy theo ngân hàng con <code>SBI</code> (7%) và <code>PNB</code> (8%):"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "abstract class Bank {\n  abstract int getRateOfInterest();\n}\n\nclass SBI extends Bank {\n  int getRateOfInterest() { return 7; }\n}\n\nclass PNB extends Bank {\n  int getRateOfInterest() { return 8; }\n}\n\nclass TestAbstraction3 {\n  public static void main(String args[]) {\n    Bank b = new SBI();\n    System.out.println(\"Rate of Interest is: \" + b.getRateOfInterest() + \" %\");\n    b = new PNB();\n    System.out.println(\"Rate of Interest is: \" + b.getRateOfInterest() + \" %\");\n  }\n}"
                    },
                    {
                      type: "java-abstract-bank-visualizer"
                    }
                  ]
                },
                {
                  id: "oop-part-abstract-class-ex4",
                  label: "d",
                  title: "Ví dụ 4: Bike có Constructor, Data Member & Method có thân",
                  content: [
                    {
                      type: "paragraph",
                      text: "Ví dụ nâng cao chứng minh lớp trừu tượng hoàn toàn có thể có phương thức khởi dựng (constructor), thuộc tính (field) và phương thức thông thường có phần thân hoàn chỉnh:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "abstract class Bike {\n  int gear;\n  Bike() { System.out.println(\"bike is created\"); }\n  abstract void run();\n  void changeGear() {\n    System.out.println(\"gear changed\");\n  }\n}\n\nclass Honda extends Bike {\n  void run() {\n    System.out.println(\"running safely..\");\n  }\n}\n\nclass TestAbstraction4 {\n  public static void main(String args[]) {\n    Bike obj = new Honda();\n    obj.run();\n    obj.changeGear();\n  }\n}"
                    },
                    {
                      type: "java-abstract-bike-constructor-visualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-abstract-class-notations",
              number: "4",
              title: "Lưu ý quan trọng",
              parts: [
                {
                  id: "oop-part-abstract-class-notations-content",
                  label: "a",
                  title: "Các quy tắc cốt lõi khi ôn thi",
                  content: [
                    {
                      type: "paragraph",
                      text: "Tìm hiểu 3 quy tắc bất thành văn cực kỳ hay xuất hiện trong các bài thi lý thuyết và trắc nghiệm thực hành về lớp trừu tượng:"
                    },
                    {
                      type: "java-abstract-notations-flashcards"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-abstract-class-combined",
              number: "5",
              title: "Ví dụ kết hợp tổng hợp",
              parts: [
                {
                  id: "oop-part-abstract-class-combined-content",
                  label: "a",
                  title: "Mối liên kết giữa Interface, Abstract Class và Class cụ thể",
                  content: [
                    {
                      type: "paragraph",
                      text: "Xem xét ví dụ thực tế khi một lớp cụ thể <code>M</code> kế thừa từ lớp trừu tượng <code>B</code>, lớp <code>B</code> lại đang triển khai (implements) từ một <code>Interface A</code>:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "interface A {\n  void a();\n  void b();\n  void c();\n}\n\nabstract class B implements A {\n  public void c() {\n    System.out.println(\"I am c\");\n  }\n}\n\nclass M extends B {\n  public void a() { System.out.println(\"I am a\"); }\n  public void b() { System.out.println(\"I am b\"); }\n}\n\nclass TestAbstraction5 {\n  public static void main(String args[]) {\n    A a = new M();\n    a.a();\n    a.b();\n    a.c();\n  }\n}"
                    },
                    {
                      type: "java-abstract-combined-hierarchy"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-abstract-class-summary-sec",
          roman: "III",
          title: "Tổng kết (Summary)",
          subsections: [
            {
              id: "oop-sub-abstract-class-summary",
              number: "",
              title: "Tổng kết & Ghi nhớ toàn bài",
              parts: [
                {
                  id: "oop-part-abstract-class-summary-info",
                  label: "a",
                  title: "Tóm tắt 4 nội dung cốt lõi của bài học",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>1. Abstraction (Trừu tượng hóa):</strong> Là quá trình ẩn chi tiết cài đặt, chỉ hiển thị chức năng cho người dùng. Đạt được qua Abstract Class (0-100%) hoặc Interface (100%).",
                        "<strong>2. Abstract Class:</strong> Khai báo bằng từ khóa <code>abstract</code>, có thể lẫn lộn phương thức trừu tượng và thông thường, chứa constructor/static/final method, nhưng <strong>không thể 'new' trực tiếp</strong>. Phải được kế thừa (extends) và override các abstract method.",
                        "<strong>3. Ràng buộc kế thừa:</strong> Nếu lớp con không override hết các phương thức abstract kế thừa được ➔ lớp con đó <strong>cũng phải khai báo là abstract</strong>.",
                        "<strong>4. Cài đặt một phần (Bridge):</strong> Abstract Class có thể cài đặt sẵn một phần của Interface giúp giảm tải công sức override cho các lớp con cụ thể phía sau."
                      ]
                    },
                    {
                      type: "java-abstract-summary-dashboard"
                    }
                  ]
                },
                {
                  id: "oop-part-abstract-class-spectrum",
                  label: "b",
                  title: "Trục phổ quang trừu tượng hóa (Abstraction Spectrum)",
                  content: [
                    {
                      type: "paragraph",
                      text: "Sự phân cấp trừu tượng hóa tăng dần từ Class thông thường (0%) ➔ Lớp trừu tượng (0% - 100%) ➔ Giao diện Interface (100%):"
                    },
                    {
                      type: "java-abstract-spectrum-visualizer"
                    }
                  ]
                },
                {
                  id: "oop-part-abstract-class-keywords",
                  label: "c",
                  title: "Ghi nhớ tổng thể & Các từ khóa Java quan trọng",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Từ khóa quan trọng cần nhớ:</strong> <code>abstract</code>, <code>extends</code>, <code>implements</code>, <code>final</code>, <code>static</code>, <code>super</code>, <code>new</code>.",
                        "<strong>Không thể khởi tạo:</strong> Tuyệt đối cấm sử dụng toán tử <code>new</code> trực tiếp với cả <code>abstract class</code> và <code>interface</code>.",
                        "<strong>Constructor ngầm:</strong> Lớp trừu tượng vẫn chứa constructor và sẽ được gọi ngầm khi lớp con cụ thể được khởi tạo.",
                        "<strong>Phân biệt rõ 3 loại phương thức:</strong> <code>abstract method</code> (bắt buộc override) vs <code>final method</code> (cấm override) vs <code>method thông thường</code> (có thể override tùy ý, không bắt buộc)."
                      ]
                    },
                    {
                      type: "java-abstract-keyword-cloud"
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
      id: "oop-interface",
      title: "Bài 9",
      subtitle: "Interface",
      sections: [
        {
          id: "oop-interface-software-engineering-sec",
          roman: "I",
          title: "Các vấn đề trong Kỹ thuật phần mềm (Động lực)",
          subsections: [
            {
              id: "oop-sub-design-principles",
              number: "1",
              title: "Nguyên tắc thiết kế chương trình",
              parts: [
                {
                  id: "oop-part-design-principles-intro",
                  label: "",
                  title: "4 Nguyên tắc thiết kế chương trình cốt lõi",
                  content: [
                    {
                      type: "paragraph",
                      text: "Để phát triển một hệ thống phần mềm lớn, dễ bảo trì và mở rộng, các kỹ sư phần mềm tuân thủ 4 nguyên tắc thiết kế nền tảng sau:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Abstraction (Trừu tượng hóa):</strong> Chỉ tập trung vào <em>chương trình làm được gì</em>, ẩn đi hoàn toàn chi tiết <em>làm như thế nào</em>. Ví dụ: Dùng <code>Java Interface</code>.",
                        "<strong>Coupling (Sự liên kết):</strong> Hạn chế tối đa các mối quan hệ phụ thuộc chéo lẫn nhau giữa các lớp. Hệ thống có Coupling càng thấp càng dễ cô lập để kiểm thử và nâng cấp.",
                        "<strong>Cohesion (Tính gắn kết):</strong> Một lớp chỉ nên chịu trách nhiệm cho duy nhất một thực thể/logic nghiệp vụ cụ thể. Cohesion càng cao thì mã nguồn càng mạch lạc và dễ tái sử dụng.",
                        "<strong>Information Hiding (Che giấu thông tin):</strong> Chỉ công khai những thông tin và giao tiếp tối thiểu cần thiết ra bên ngoài, che giấu các chi tiết biến động bên trong."
                      ]
                    },
                    {
                      type: "java-interface-design-principles"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ quan trọng</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• 4 nguyên tắc: <strong>Abstraction, Coupling, Cohesion, Information Hiding</strong>.<br/>• Mục tiêu vàng của thiết kế phần mềm: <strong>Coupling càng thấp (Loose), Cohesion càng cao (High)</strong> ➔ hệ thống thiết kế càng tốt.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-info-hiding",
              number: "2",
              title: "Information Hiding (Che giấu thông tin)",
              parts: [
                {
                  id: "oop-part-info-hiding-concept",
                  label: "",
                  title: "Ẩn dụ bức tường vững chãi",
                  content: [
                    {
                      type: "paragraph",
                      text: "Nguyên lý <strong>Information Hiding</strong> giống như việc xây dựng một <strong>bức tường (wall)</strong> kiên cố xung quanh mỗi lớp:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Bức tường ngăn cản các lớp khác dòm ngó và can thiệp vào chi tiết cách thức hoạt động bên trong của lớp.",
                        "Nếu lớp Q phụ thuộc và sử dụng lớp T thông qua giao thức công khai, khi ta thay đổi cấu trúc dữ liệu hoặc thuật toán bên trong của T, lớp Q hoàn toàn <strong>không bị ảnh hưởng hay lỗi biên dịch</strong>.",
                        "Tên cuốn giáo trình lập trình nổi tiếng <em>\"Walls & Mirrors\"</em> xuất phát từ ý tưởng bức tường bảo vệ này."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Lưu ý:</strong> Che giấu thông tin <strong>không đồng nghĩa</strong> với việc cô lập hoàn toàn các lớp. Các lớp vẫn tương tác với nhau theo nguyên tắc <strong>\"cần biết mới cho biết\" (need-to-know basis)</strong>:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Lớp Q chỉ cần biết <em>cách gọi</em> lớp T (method header) và T <em>sẽ trả về kết quả gì</em>, tuyệt đối không được biết T thực hiện nó ra sao.",
                        "<strong>Ví dụ:</strong> Các lớp tiện ích như <code>Math</code> hay <code>Scanner</code> giấu kín mã nguồn thuật toán phức tạp bên trong, chỉ cung cấp đặc tả (specification) để sử dụng.",
                        "Đầu vào và đầu ra của phương thức được quy định chặt chẽ bởi <strong>đặc tả (specification)</strong> của phương thức đó."
                      ]
                    },
                    {
                      type: "java-interface-information-hiding"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ phòng thi</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• <strong>Information Hiding</strong> không phải cô lập hoàn toàn các lớp.<br/>• Nguyên tắc: Chỉ tiết lộ đủ để <strong>sử dụng</strong>, che giấu hoàn toàn <strong>cách cài đặt</strong>.<br/>• <strong>Bẫy lý thuyết:</strong> Học sinh hay nghĩ che giấu thông tin là giấu đi toàn bộ mọi thứ. Thực chất, ta bắt buộc phải công khai phần <strong>giao diện sử dụng (public interface / method signatures)</strong> để các lớp khác tương tác.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-pre-post-conditions",
              number: "3",
              title: "Pre-conditions & Post-conditions",
              parts: [
                {
                  id: "oop-part-pre-post-intro",
                  label: "",
                  title: "Hợp đồng thiết kế mã nguồn",
                  content: [
                    {
                      type: "paragraph",
                      text: "Pre-conditions và Post-conditions được dùng làm tài liệu kỹ thuật (documentation) để quy định rõ ràng trách nhiệm giữa người gọi hàm và người viết hàm:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Pre-conditions (Điều kiện trước):</strong> Là điều kiện bắt buộc phải <strong>đúng trước khi</strong> gọi phương thức. Ý nghĩa: <em>\"Đây là điều tôi mong đợi ở bạn\"</em>. Trách nhiệm đảm bảo điều kiện này thuộc về <strong>người gọi hàm (Caller)</strong>.",
                        "<strong>Post-conditions (Điều kiện sau):</strong> Là điều kiện cam kết phải <strong>đúng sau khi</strong> phương thức hoàn tất xử lý thành công. Ý nghĩa: <em>\"Đây là điều tôi hứa sẽ làm cho bạn\"</em>. Trách nhiệm đảm bảo thuộc về <strong>người viết hàm (Method)</strong>."
                      ]
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "// Pre-cond: x >= 0\n// Post-cond: Return the square root of x\npublic static double squareRoot(double x) {\n    // Chi tiết xử lý...\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>public</code>: Từ khóa quy định quyền truy cập công khai từ bất kỳ đâu.",
                        "<code>static</code>: Phương thức tĩnh thuộc về lớp, gọi trực tiếp được mà không cần tạo đối tượng.",
                        "<code>double</code>: Kiểu dữ liệu trả về của kết quả.",
                        "Các dòng comment <code>// Pre-cond</code> và <code>// Post-cond</code> là chuẩn mực ghi chú kỹ thuật bắt buộc."
                      ]
                    },
                    {
                      type: "java-interface-pre-post-conditions"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ cực kỳ quan trọng</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• <strong>Pre-condition:</strong> Điều kiện đầu vào (trách nhiệm của <strong>người gọi hàm - Caller</strong>).<br/>• <strong>Post-condition:</strong> Điều kiện đầu ra (trách nhiệm của <strong>người viết hàm - Method</strong>).<br/>• <strong>Điểm thi trắc nghiệm:</strong> Phân biệt rõ ai chịu trách nhiệm đảm bảo pre-condition và post-condition. Nếu Caller truyền tham số sai (vi phạm pre-condition), hàm có quyền trả về kết quả sai hoặc văng lỗi mà không vi phạm hợp đồng.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-data-abstraction-adt",
              number: "4",
              title: "Data Abstraction & ADT",
              parts: [
                {
                  id: "oop-part-data-abstraction-intro",
                  label: "",
                  title: "Trừu tượng hóa dữ liệu & Kiểu dữ liệu trừu tượng",
                  content: [
                    {
                      type: "paragraph",
                      text: "Nguyên lý che giấu thông tin không chỉ áp dụng cho phương thức hành vi mà còn áp dụng sâu sắc cho cấu trúc dữ liệu:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Data Abstraction (Trừu tượng hóa dữ liệu):</strong> Suy nghĩ về <em>những gì có thể thực hiện</em> trên một tập hợp dữ liệu, độc lập với <em>cách lưu trữ và cài đặt chi tiết</em> của nó.",
                        "<strong>Data Structure (Cấu trúc dữ liệu):</strong> Là cách thức lưu trữ vật lý cụ thể được định nghĩa trong ngôn ngữ lập trình (như mảng tĩnh, danh sách liên kết) để chứa dữ liệu.",
                        "<strong>Abstract Data Type - ADT (Kiểu dữ liệu trừu tượng):</strong> Là một <strong>tập hợp dữ liệu</strong> đi kèm với <strong>đặc tả (specification)</strong> về tập các phép toán trên dữ liệu đó. Đặc tả chỉ nói ADT <em>làm cái gì</em>, không bao giờ nói <em>cài đặt cụ thể ra sao</em>."
                      ]
                    },
                    {
                      type: "java-interface-data-abstraction-adt"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ khái niệm</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• <strong>ADT (Abstract Data Type)</strong> = Dữ liệu + Các phép toán trên dữ liệu (không quan tâm cách cài đặt).<br/>• <strong>Data Structure</strong> chỉ chịu trách nhiệm phần <strong>lưu trữ vật lý</strong> dữ liệu trong bộ nhớ RAM.</p></details>"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-l-4 border-indigo-500 rounded-r-xl p-4 cursor-pointer select-none mt-3\"><summary class=\"text-xs font-bold text-indigo-400 font-mono uppercase tracking-wider\">🧠 Ghi nhớ nhanh & Ví dụ thực tế</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• <strong>Mục đích cốt lõi:</strong> Tách biệt phần sử dụng (\"dùng gì\") ra khỏi phần cài đặt (\"làm thế nào\"), giúp mã nguồn dễ dàng nâng cấp, thay đổi cấu trúc mà không phá vỡ ứng dụng khách.<br/>• <strong>Ví dụ thực tế:</strong> Kiểu số nguyên <code>int</code> trong Java là một ADT vì bạn sử dụng các phép toán <code>+</code>, <code>-</code>, <code>*</code> bình thường mà không cần biết CPU cấu tạo bảng ALU hay mạch cộng nhị phân bù 2 như thế nào.<br/>• <strong>Cú pháp Java:</strong> Ở phần này chưa học cú pháp riêng biệt cho ADT, cú pháp chuẩn để biểu diễn ADT trong Java chính là <code>interface</code> (sẽ học chi tiết ở phần sau).<br/>• <strong>Điểm thi:</strong> Phân biệt ranh giới giữa ADT (giao diện trừu tượng) và Data Structure (lưu trữ vật lý).</p></details>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-interface-adt-sec",
          roman: "II",
          title: "Kiểu dữ liệu trừu tượng (Abstract Data Type - ADT)",
          subsections: [
            {
              id: "oop-sub-adt-cohesion",
              number: "1",
              title: "Cohesion & Coupling trong Thiết kế Lớp",
              parts: [
                {
                  id: "oop-part-adt-cohesion-detail",
                  label: "",
                  title: "Data Structure và cách thiết kế lớp",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Data structure (Cấu trúc dữ liệu):</strong> Là cấu trúc được định nghĩa trong ngôn ngữ lập trình để lưu trữ vật lý một tập hợp dữ liệu (ví dụ: mảng <code>Arrays</code> trong Java)."
                    },
                    {
                      type: "paragraph",
                      text: "Khi cần quản lý danh sách thông tin như tên và lương nhân viên, ta có 2 cách thiết kế chính:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Cách 1 (Kém):</strong> Dùng các mảng song song độc lập như <code>String[] names</code> và <code>double[] salaries</code>. Cách này dễ gây sai lệch chỉ số index khi thêm/xóa/sắp xếp nhân viên.",
                        "<strong>Cách 2 (Khuyên dùng):</strong> Gộp các dữ liệu liên quan vào duy nhất 1 lớp <code>class Employee</code> và sử dụng mảng đối tượng <code>Employee[] workers</code>. Thiết kế này đảm bảo nguyên lý <strong>Cohesion</strong> cao."
                      ]
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "class Employee {\n    static final int MAX_NUMBER = 500;\n    private String names;\n    private double salaries;\n}\n\nEmployee[] workers = new Employee[Employee.MAX_NUMBER];"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>static final int MAX_NUMBER</code>: <code>static</code> cho biết hằng số thuộc về lớp; <code>final</code> ngăn chặn sửa đổi giá trị sau khi gán.",
                        "<code>private</code>: Từ khóa quy định chỉ truy cập được bên trong lớp để bảo vệ thuộc tính khỏi sự dòm ngó bên ngoài (Information Hiding)."
                      ]
                    },
                    {
                      type: "java-interface-employee-cohesion"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ Cohesion</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• Cách thiết kế dùng nhiều mảng song song (<code>names[]</code>, <code>salaries[]</code>) rất dễ sai sót vì lập trình viên phải tự đồng bộ chỉ số index thủ công.<br/>• Gom các thuộc tính liên quan vào <code>class Employee</code> tốt hơn nhiều vì đảm bảo gom dữ liệu liên quan về một mối (đảm bảo tính <strong>Cohesion</strong> cao).</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-adt-water-dispenser",
              number: "2",
              title: "Ví dụ thực tế: Máy lọc nước ADT",
              parts: [
                {
                  id: "oop-part-adt-water-dispenser-detail",
                  label: "",
                  title: "Ý nghĩa của đặc tả ADT",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Kiểu dữ liệu trừu tượng (ADT)</strong> được định nghĩa bởi tập hợp dữ liệu cùng với <strong>đặc tả (specification)</strong> của tập phép toán trên dữ liệu đó (chỉ nói <em>làm gì</em>, không nói <em>cài đặt ra sao</em>):"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Data structure (Cấu trúc dữ liệu):</strong> Chỉ đóng vai trò là một phần trong chi tiết cài đặt (implementation) của ADT đó.",
                        "Khi ngôn ngữ lập trình không hỗ trợ sẵn cấu trúc mong muốn, lập trình viên sẽ tự tạo ADT. Quy trình chuẩn là <strong>thiết kế đặc tả ADT trước</strong>, rồi mới cài đặt chi tiết sau."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Ẩn dụ Máy làm nước (Water Dispenser) như một ADT:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Dữ liệu:</strong> Nước sạch.",
                        "<strong>Phép toán công khai (Interface):</strong> <code>chill()</code> (làm lạnh), <code>crush()</code> (làm đá bào), <code>cube()</code> (làm đá viên), <code>isEmpty()</code> (kiểm tra rỗng).",
                        "<strong>Cấu trúc bên trong (Data Structure):</strong> Hệ thống van, ống lọc, bình làm nóng đun sôi chứa bên trong máy và được che chắn bởi lớp vỏ bảo vệ vững chãi.",
                        "Người dùng chỉ cần nhấn nút giao diện để lấy nước, hoàn toàn không cần biết máy làm đá bào hay nước lạnh bên trong bằng cách nào. Đây là tương tự như máy bán hàng tự động (vending machine)."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "Bức tường ngăn cách của ADT bảo vệ và cô lập cấu trúc dữ liệu khỏi chương trình khách sử dụng nó. Giao diện (Interface) là cánh cửa duy nhất cho phép chương trình tương tác với ADT. Nếu chương trình tìm cách truy cập trực tiếp vào các thuộc tính private bên trong mà bỏ qua giao diện ➔ vi phạm bức tường bảo vệ và phá vỡ nguyên lý Information Hiding."
                    },
                    {
                      type: "java-interface-water-dispenser-adt"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ cốt lõi</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• <strong>Interface (Giao diện):</strong> Là tập hợp tất cả những gì một lớp/chương trình cần hiểu để sử dụng ADT mà không cần biết cách thức triển khai bên trong.<br/>• <strong>Bẫy phòng thi:</strong> Interface không phải là cấu trúc lưu trữ dữ liệu, mà là <strong>tập hợp các thao tác, hành vi được phép gọi sử dụng</strong>.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-adt-spec-operations",
              number: "3",
              title: "Đặc tả ADT và Bảng phép toán",
              parts: [
                {
                  id: "oop-part-adt-spec-operations-detail",
                  label: "",
                  title: "Phân loại các phép toán trên ADT",
                  content: [
                    {
                      type: "paragraph",
                      text: "Các kiểu dữ liệu nguyên thủy trong Java (như <code>int</code>, <code>boolean</code>, <code>double</code>...) thực chất cũng chính là các ADT được định nghĩa sẵn bởi ngôn ngữ. Chi tiết lưu trữ bit nhị phân được ẩn giấu hoàn toàn để đảm bảo tính khả chuyển (portability) của code giữa các dòng máy khác nhau."
                    },
                    {
                      type: "paragraph",
                      text: "Về mặt học thuật, toàn bộ các phép toán tương tác trên ADT được phân loại thành 3 nhóm cơ bản:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Constructors (Bộ khởi tạo):</strong> Dùng để tạo mới hoặc thêm dữ liệu vào ADT. Ví dụ: Khởi tạo mảng mới <code>int[] z = new int[4];</code>.",
                        "<strong>Mutators (Bộ biến đổi):</strong> Dùng để thay đổi/sửa đổi nội dung dữ liệu bên trong ADT. Ví dụ: Gán giá trị mới <code>x[3] = 10;</code>.",
                        "<strong>Accessors (Bộ truy xuất):</strong> Dùng để truy vấn, đọc giá trị hoặc lấy thông tin trạng thái hiện tại của ADT mà không làm thay đổi dữ liệu gốc. Ví dụ: Đọc và tính toán <code>int y = x[3] + x[2];</code>."
                      ]
                    },
                    {
                      type: "java-interface-adt-operations-table"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ thi cử</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• 3 nhóm thao tác: <strong>Constructor (tạo mới) ➔ Mutator (thay đổi) ➔ Accessor (truy xuất/chỉ đọc)</strong>.<br/>• Đề thi trắc nghiệm cực kỳ hay đưa ra một đoạn code Java ngắn và yêu cầu học sinh phân loại đoạn mã đó thuộc nhóm thao tác nào trong 3 nhóm trên.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-adt-complex-number",
              number: "4",
              title: "Biểu diễn Số phức dưới dạng ADT",
              parts: [
                {
                  id: "oop-part-adt-complex-number-detail",
                  label: "",
                  title: "Thiết kế Số phức Complex ADT",
                  content: [
                    {
                      type: "paragraph",
                      text: "Một số phức (Complex Number) đại diện cho dạng toán học \( z = a + bi \), trong đó \( a \) là phần thực, \( b \) là phần ảo và \( i^2 = -1 \). Số phức được biểu diễn trực quan như một vector 2 chiều trên mặt phẳng phức."
                    },
                    {
                      type: "paragraph",
                      text: "Ta có thể tự thiết kế kiểu dữ liệu số phức (user-defined type) thành một ADT hoàn chỉnh như sau:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Constructor:</strong> Khởi tạo thực thể mới <code>Complex(r, i)</code>.",
                        "<strong>Mutators:</strong> Các phép toán cộng, trừ, nhân thay đổi trực tiếp đối tượng: <code>add(c)</code>, <code>minus(c)</code>, <code>times(c)</code>.",
                        "<strong>Accessors:</strong> Đọc giá trị phần thực và phần ảo: <code>realpart()</code>, <code>imagpart()</code>."
                      ]
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "class Complex {\n    private double real;\n    private double imag;\n    \n    public Complex(double r, double i) { real = r; imag = i; }\n    public double realpart() { return real; }\n    public double imagpart() { return imag; }\n    \n    public void add(Complex c) {\n        real += c.realpart();\n        imag += c.imagpart();\n    }\n    // Các phép toán khác...\n}"
                    },
                    {
                      type: "paragraph",
                      text: "Trong Java, từ khóa <code>private</code> giúp giấu dữ liệu phần thực/ảo bên trong lớp, chỉ cho phép truy cập nội bộ. Từ khóa <code>this</code> đại diện cho đối tượng hiện tại đang thực hiện phương thức gọi hàm."
                    },
                    {
                      type: "paragraph",
                      text: "Có hai cách phổ biến để cài đặt số phức trong bộ nhớ RAM:"
                    },
                    {
                      type: "numbered-list",
                      items: [
                        "<strong>Cài đặt 1 - Cartesian (Toạ độ Đề-các):</strong> Lưu trữ trực tiếp biến <code>real</code> và <code>imag</code> đại diện cho trục thực/ảo.",
                        "<strong>Cài đặt 2 - Polar (Toạ độ cực):</strong> Lưu trữ bằng góc xoay <code>ang (angle)</code> và độ lớn vector <code>mag (magnitude)</code>."
                      ]
                    },
                    {
                      type: "java-interface-complex-number-plane"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ triết lý ADT</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• Cùng một ADT <strong>Complex</strong> có thể có nhiều cách cài đặt khác nhau (Cartesian vs Polar) tùy theo mục đích tối ưu phần cứng, nhưng bên ngoài đều sử dụng chung một giao thức (interface).<br/>• Ý nghĩa cốt lõi của ADT: <strong>Người sử dụng hoàn toàn độc lập và không cần biết/không cần quan tâm bên dưới đang cài đặt theo cách nào</strong>.</p></details>"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-l-4 border-indigo-500 rounded-r-xl p-4 cursor-pointer select-none mt-3\"><summary class=\"text-xs font-bold text-indigo-400 font-mono uppercase tracking-wider\">💡 Định hướng bài học tiếp theo</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• Đây là lý thuyết nền tảng dẫn trực tiếp tới Phần III (Java Interface).<br/>• Java cung cấp từ khóa <code>interface</code> như một công cụ tối thượng để hiện thực hóa ý tưởng tách rời hoàn toàn phần Đặc tả (Specification) ra khỏi phần Cài đặt (Implementation) này.</p></details>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-interface-java-sec",
          roman: "III",
          title: "Java Interface",
          subsections: [
            {
              id: "oop-sub-interface-concept",
              number: "1",
              title: "Khái niệm Interface & Comparable",
              parts: [
                {
                  id: "oop-part-interface-concept-detail",
                  label: "",
                  title: "Định nghĩa Java Interface",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Java interface:</strong> Là cách đặc tả <strong>hành vi chung (common behaviour)</strong> cho một nhóm các lớp (có thể hoàn toàn không liên quan với nhau về mặt kế thừa)."
                    },
                    {
                      type: "bullets",
                      items: [
                        "Dùng từ khóa <code>interface</code> thay thế cho từ khóa <code>class</code> khi khai báo.",
                        "Interface chỉ chứa <strong>đặc tả các phương thức cần được cài đặt (method signatures)</strong> chứ không chứa thân hàm rỗng (empty bodies).",
                        "Interface có thể chứa các khai báo hằng số (constants), các hằng số này mặc định luôn là <code>public static final</code>.",
                        "Một lớp được gọi là <strong>implement</strong> interface nếu nó cam kết và cung cấp cài đặt đầy đủ cho <strong>TẤT CẢ</strong> các phương thức được khai báo trong interface đó."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Ví dụ về Comparable Interface:</strong> Interface <code>Comparable&lt;T&gt;</code> là một interface tích hợp sẵn trong gói <code>java.lang</code> của Java, sử dụng kiểu generic <code>&lt;T&gt;</code> để so sánh hai thực thể đối tượng bất kỳ."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "public interface Comparable<T> {\n    int compareTo(T other);\n}\n\nclass Shape implements Comparable<Shape> {\n    static final double PI = 3.14;\n    double area() { /* ... */ }\n    \n    @Override\n    public int compareTo(Shape x) {\n        if (this.area() == x.area()) return 0;\n        else if (this.area() > x.area()) return 1;\n        else return -1;\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>implements</code>: Từ khóa Java bắt buộc lớp cam kết hoàn thành hợp đồng cài đặt.",
                        "<code>compareTo(Shape x)</code>: Trả về quy ước: <code>0</code> nếu diện tích bằng nhau, <code>1</code> nếu lớn hơn, và <code>-1</code> nếu nhỏ hơn."
                      ]
                    },
                    {
                      type: "java-interface-shape-comparable"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ phòng thi</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• <strong>Quy tắc bắt buộc:</strong> Bất kỳ lớp nào đã khai báo <code>implements TenInterface</code> đều bắt buộc phải ghi đè và viết code cài đặt cho <strong>đủ toàn bộ</strong> phương thức của interface đó. Nếu thiếu dù chỉ một phương thức, Java sẽ báo lỗi biên dịch lập tức.<br/>• <code>Comparable&lt;T&gt;</code> là interface rất hay gặp trong bài tập lập trình phục vụ thuật toán sắp xếp (Sort).</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-interface-complex",
              number: "2",
              title: "Thiết kế Số phức Complex Interface",
              parts: [
                {
                  id: "oop-part-interface-complex-detail",
                  label: "",
                  title: "Đặc tả giao diện Số phức Complex",
                  content: [
                    {
                      type: "paragraph",
                      text: "Ta thiết kế một Interface <code>Complex</code> chung, dự tính trước rằng sẽ có ít nhất 2 lớp cài đặt nó theo các hệ tọa độ khác nhau là Đề-các (Cartesian) và Cực (Polar):"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "public interface Complex {\n    public double realpart();\n    public double imagpart();\n    public double angle();\n    public double mag();\n    public void add(Complex c);\n    public void minus(Complex c);\n    public void times(Complex c);\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Trong Java 7 trở về trước:</strong> Các phương thức trong interface chỉ được phép khai báo signature (chữ ký hàm), cấm tuyệt đối viết thân hàm.",
                        "<strong>Từ Java 8 trở đi:</strong> Hỗ trợ thêm tính năng <code>default methods</code> cho phép viết cài đặt mặc định bên trong interface bằng từ khóa <code>default</code>, giúp tăng tính linh hoạt khi cập nhật thư viện mà không làm hỏng code cũ."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "Dưới đây là so sánh thuật toán xử lý của <code>ComplexCart</code> (Cartesian) và <code>ComplexPolar</code> (Polar) cùng thực thi Interface <code>Complex</code>:"
                    },
                    {
                      type: "java-interface-complex-implementations"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ đặc biệt</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• <code>ComplexCart</code> và <code>ComplexPolar</code> đều thực hiện <code>implements Complex</code> ➔ Dùng chung một bộ giao tiếp bên ngoài, khác biệt hoàn toàn về cấu trúc biến lưu trữ bên trong.<br/>• **Lợi ích tối thượng:** Các lớp khách sử dụng kiểu dữ liệu <code>Complex</code> có thể gọi tính toán bình thường mà không cần quan tâm/không cần biết hệ thống đang chạy bản cài đặt Cartesian hay Polar.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-interface-polymorphism",
              number: "3",
              title: "Lớp kiểm thử & Tính đa hình (JVM Memory)",
              parts: [
                {
                  id: "oop-part-interface-polymorphism-detail",
                  label: "",
                  title: "Đa hình tham chiếu Interface",
                  content: [
                    {
                      type: "paragraph",
                      text: "Để kiểm thử hoạt động của hai phiên bản số phức, ta xây dựng lớp chạy chương trình <code>TestComplex</code>:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "public class TestComplex {\n    public static void main(String[] args) {\n        Complex a = new ComplexCart(10.0, 12.0);\n        Complex b = new ComplexCart(1.0, 2.0);\n        \n        a.add(b);\n        a.minus(b);\n        a.times(b);\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Dòng lệnh <code>Complex a = new ComplexCart(...)</code> khai báo một biến tham chiếu kiểu Interface <code>Complex</code>, gán giá trị bằng đối tượng cụ thể <code>ComplexCart</code>.",
                        "Đây là ví dụ điển hình của tính **Đa hình (Polymorphism)** thông qua cơ chế giao tiếp Interface."
                      ]
                    },
                    {
                      type: "java-interface-jvm-memory-polymorphism"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ kỹ thuật</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• Có thể khai báo biến bằng kiểu interface (<code>Complex a</code>) nhưng gán bằng đối tượng cụ thể (<code>new ComplexCart(...)</code>). Đây là kỹ thuật lập trình hướng đối tượng chuyên nghiệp, xuất hiện rất nhiều trong đề thi lý thuyết và thực hành Java.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-interface-precision",
              number: "4",
              title: "Ép kiểu & So sánh số thực (instanceof, equals)",
              parts: [
                {
                  id: "oop-part-interface-precision-detail",
                  label: "",
                  title: "Toán tử instanceof và Ép kiểu an toàn",
                  content: [
                    {
                      type: "paragraph",
                      text: "Mỗi interface khi biên dịch sẽ sinh ra duy nhất một file bytecode <code>.class</code> riêng biệt y như lớp thông thường. Ta **không thể tạo thực thể** trực tiếp từ interface (cấm <code>new Complex()</code>), nhưng được dùng làm kiểu dữ liệu hoặc đích đến của ép kiểu (casting)."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "public boolean equals(Object c1) {\n    if (c1 instanceof Complex) {\n        Complex temp = (Complex) c1; // Ép kiểu casting\n        return (Math.abs(realpart() - temp.realpart()) < EPSILON\n            && Math.abs(imagpart() - temp.imagpart()) < EPSILON);\n    }\n    return false;\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>instanceof</code>: Từ khóa kiểm tra xem đối tượng có tương thích với kiểu dữ liệu/giao diện chỉ định hay không.",
                        "<code>(Complex) c1</code>: Thực hiện ép kiểu đối tượng Object về kiểu giao tiếp Complex.",
                        "<code>equals()</code>: Ghi đè phương thức để so sánh hai đối tượng số phức có bằng nhau về mặt giá trị hay không."
                      ]
                    },
                    {
                      type: "java-interface-float-precision-playground"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ cốt lõi</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• Cú pháp <code>new Interface()</code> là hoàn toàn sai và bị cấm.<br/>• **So sánh số thực:** Vì kiểu số thực <code>double</code> luôn có sai số biểu diễn nhị phân, tuyệt đối **không sử dụng toán tử ==** để so sánh bằng. Hãy khai báo một hằng số sai số nhỏ <code>EPSILON</code> (ví dụ: 1E-9) và so sánh trị tuyệt đối khoảng cách.</p></details>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-interface-fraction-sec",
          roman: "IV",
          title: "Fraction là một ADT (Bài tập thực hành)",
          subsections: [
            {
              id: "oop-sub-fraction-adt",
              number: "1",
              title: "Thực hành ADT Fraction",
              parts: [
                {
                  id: "oop-part-fraction-adt-detail",
                  label: "",
                  title: "Phân tích đặc tả & Cài đặt Fraction",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Phân số (Fraction) dưới góc nhìn ADT:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Data members (Thuộc tính):</strong> Tử số (Numerator) và Mẫu số (Denominator).",
                        "<strong>Behaviors (Hành vi):</strong> Cộng (Add), Trừ (Minus), Nhân (Times), Rút gọn (Simplify). Tạm thời bỏ qua phép chia (Divide)."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Giao diện FractionI:</strong> Định nghĩa tập hợp các phương thức bắt buộc của Phân số:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "public interface FractionI {\n    public int getNumer();\n    public int getDenom();\n    public void setNumer(int numer);\n    public void setDenom(int denom);\n    public FractionI add(FractionI f);\n    public FractionI minus(FractionI f);\n    public FractionI times(FractionI f);\n    public FractionI simplify();\n}"
                    },
                    {
                      type: "paragraph",
                      text: "Khác với <code>Complex</code> ở Phần III, các phương thức của <code>FractionI</code> trả về một đối tượng <code>FractionI</code> **mới hoàn toàn** thay vị thay đổi trực tiếp thuộc tính của đối tượng hiện tại. Đây là biểu hiện của triết lý thiết kế **Bất biến (Immutable)**."
                    },
                    {
                      type: "paragraph",
                      text: "Chúng ta có 2 phương án cài đặt chính cho giao diện này:"
                    },
                    {
                      type: "numbered-list",
                      items: [
                        "<strong>Fraction:</strong> Sử dụng 2 biến số nguyên <code>numer</code> và <code>denom</code> độc lập.",
                        "<strong>FractionArr:</strong> Sử dụng mảng 1 chiều <code>int[] members = new int[2]</code> để lưu trữ."
                      ]
                    },
                    {
                      type: "java-interface-fraction-memory-ram"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Constructor Chaining & Sự khác biệt:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Trong <code>Fraction</code>, ta dùng cú pháp <code>this(1, 1);</code> để gọi constructor 2 tham số với giá trị mặc định (gọi là liên chuỗi constructor).",
                        "Phép toán cộng phân số <code>f1.add(f2)</code> tạo ra thực thể đối tượng mới để lưu kết quả."
                      ]
                    },
                    {
                      type: "java-interface-fraction-immutable-flow"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Chương trình Sandbox & Đáp án tự điền code:</strong>"
                    },
                    {
                      type: "java-interface-fraction-sandbox"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ lý thuyết</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• <code>Fraction</code> và <code>FractionArr</code> là 2 phiên bản cài đặt của <strong>cùng một interface FractionI</strong>.<br/>• Cú pháp <code>this(1,1)</code> gọi constructor khác cùng lớp. Hãy cẩn thận tránh nhầm lẫn với từ khóa <code>super(...)</code> dùng để gọi constructor lớp cha.</p></details>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-interface-summary-sec",
          roman: "V",
          title: "Tổng kết chương & Thử thách ôn thi",
          subsections: [
            {
              id: "oop-sub-interface-summary",
              number: "2",
              title: "Tổng kết & Thử thách Flashcard ôn thi",
              parts: [
                {
                  id: "oop-part-interface-summary-detail",
                  label: "",
                  title: "Tóm tắt toàn bộ bài học",
                  content: [
                    {
                      type: "paragraph",
                      text: "Bài học đã giúp chúng ta nắm vững các mảnh ghép quan trọng của thiết kế hướng đối tượng Java:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>ADT (Kiểu dữ liệu trừu tượng):</strong> Định nghĩa bởi dữ liệu + đặc tả các phép toán (không quan tâm cài đặt bên dưới).",
                        "<strong>Java Interface:</strong> Công cụ tối thượng để hiện thực hóa ADT, chỉ chứa chữ ký phương thức rỗng (trừ default method từ Java 8).",
                        "<strong>Đa hình (Polymorphism):</strong> Biến khai báo thuộc kiểu interface có thể trỏ tới bất kỳ đối tượng cụ thể nào thực thi interface đó.",
                        "<strong>Không thể khởi tạo:</strong> Cấm sử dụng toán tử <code>new</code> trực tiếp với interface.",
                        "<strong>So sánh số thực double:</strong> Bắt buộc dùng hiệu trị tuyệt đối nhỏ hơn hằng số sai số <code>EPSILON</code> để so sánh bằng."
                      ]
                    },
                    {
                      type: "java-interface-exam-trap-flashcards"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-l-4 border-indigo-500 rounded-r-xl p-4 cursor-pointer select-none mt-3\"><summary class=\"text-xs font-bold text-indigo-400 font-mono uppercase tracking-wider\">🎓 Lời kết từ giảng viên</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• Ôn tập kỹ các câu hỏi flashcard trên trước khi bước vào phòng thi để tránh các cạm bẫy lý thuyết phổ biến.<br/>• Đây là nền tảng cốt lõi chuẩn bị cho bài học tiếp theo về Collection of Data trong môn học Lập trình hướng đối tượng.</p></details>"
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
      id: "oop-collection-of-data",
      title: "Bài 10",
      subtitle: "Collection of Data",
      sections: [
        {
          id: "oop-collection-array-sec",
          roman: "I",
          title: "Mảng (Array)",
          subsections: [
            {
              id: "oop-sub-collection-intro-c",
              number: "1",
              title: "Giới thiệu & Mảng trong C",
              parts: [
                {
                  id: "oop-part-collection-intro-c-detail",
                  label: "",
                  title: "Khái niệm chung và mảng trong ngôn ngữ C",
                  content: [
                    {
                      type: "paragraph",
                      text: "<blockquote><strong>Khái niệm chung:</strong> Mảng (Array) là một tập hợp dữ liệu <strong>đồng nhất (homogeneous data)</strong>. Đây là cấu trúc dữ liệu cơ bản nhất dùng để chứa nhiều phần tử cùng kiểu dữ liệu.</blockquote>"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Đặc điểm chính của mảng:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Các phần tử được lưu trữ trong vùng nhớ **liên tiếp (contiguous memory)**.",
                        "**Chỉ số (index)** của mảng bắt đầu từ **0**."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Mảng trong ngôn ngữ C:</strong> Trong C, mảng không tự lưu trữ kích thước của nó. Do đó, khi truyền mảng vào hàm, ta bắt buộc phải truyền kèm biến độ dài <code>size</code> hoặc <code>max_size</code>."
                    },
                    {
                      type: "code",
                      language: "c",
                      code: "#include <stdio.h>\n#define MAX 6\n\nint scanArray(double [], int);\nvoid printArray(double [], int);\ndouble sumArray(double [], int);\n\nint main(void) {\n    double list[MAX];\n    int size;\n    size = scanArray(list, MAX);\n    printArray(list, size);\n    printf(\"Sum = %f\\n\", sumArray(list, size));\n    return 0;\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>double []</code>, <code>int</code> trong khai báo prototype chỉ ra mảng và kích thước luôn song hành cùng nhau.",
                        "<code>arr[i]</code> dùng để truy xuất trực tiếp phần tử thứ <code>i</code> của mảng thô trong RAM."
                      ]
                    },
                    {
                      type: "java-collection-array-c-vs-java"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ mảng C</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• Rất dễ nhầm: Chỉ số mảng bắt đầu từ **0**, không phải 1.<br/>• Trong C, mảng không có metadata chiều dài ➔ bắt buộc luôn phải truyền kèm thêm tham số <code>size</code> vào hàm.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-collection-java-loop",
              number: "2",
              title: "Mảng trong Java & Duyệt mảng",
              parts: [
                {
                  id: "oop-part-collection-java-loop-detail",
                  label: "",
                  title: "Mảng trong Java",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Mảng trong Java là đối tượng (Object):</strong> Khác biệt cốt lõi với C, mảng trong Java là một thực thể đối tượng thực thụ được khởi tạo bằng từ khóa <code>new</code> và được lưu trên vùng nhớ Heap, có thuộc tính công khai <code>length</code> để lưu trữ độ dài của mảng."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "public class TestArray1 {\n    public static void main(String[] args) {\n        int[] arr; // arr là một tham chiếu (reference)\n        arr = new int[3]; // tạo mới mảng số nguyên có 3 phần tử\n        System.out.println(\"Length = \" + arr.length);\n        \n        arr[0] = 100;\n        arr[1] = arr[0] - 37;\n        arr[2] = arr[1] / 2;\n        for (int i=0; i<arr.length; i++) {\n            System.out.println(\"arr[\" + i + \"] = \" + arr[i]);\n        }\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>int[] arr</code>: Khai báo biến tham chiếu mảng, chưa cấp phát vùng nhớ.",
                        "<code>new int[3]</code>: Từ khóa <code>new</code> tạo đối tượng mảng thực sự gồm 3 phần tử trong Heap.",
                        "<code>arr.length</code>: Thuộc tính độ dài mảng (không có dấu ngoặc <code>()</code>)."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Duyệt mảng bằng Vòng lặp mở rộng (Enhanced for-loop):</strong> Dùng để duyệt nhanh không sử dụng biến đếm <code>i</code>:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "for (datatype e : array_name) {\n    // Biến e tự động sao chép giá trị từng phần tử của mảng\n}\n\n// Hoặc dùng Arrays.toString(arr) để in mảng nhanh\ndouble[] arr = { 35.1, 21.0, 57.7, 18.3 };\nSystem.out.println(Arrays.toString(arr));"
                    },
                    {
                      type: "java-collection-array-for-loop-sim"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ cú pháp</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• <code>arr.length</code> là <strong>thuộc tính (attribute)</strong> của đối tượng mảng, không có ngoặc tròn <code>()</code>.<br/>• Khác biệt hoàn toàn với <code>String.length()</code> là một <strong>phương thức (method)</strong> bắt buộc có ngoặc. Đây là bẫy thi trắc nghiệm vô cùng phổ biến!</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-collection-reference-cli",
              number: "3",
              title: "Mảng làm tham số & Command-line Args",
              parts: [
                {
                  id: "oop-part-collection-reference-cli-detail",
                  label: "",
                  title: "Truyền tham chiếu mảng và Tham số dòng lệnh",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Mảng làm tham số (Array as a Parameter):</strong> Khi truyền mảng vào một phương thức, thực chất Java sẽ truyền **tham chiếu (reference)** tới mảng đó. Do đó, mọi thay đổi phần tử bên trong hàm sẽ **tác động trực tiếp lên mảng gốc** bên ngoài."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "public class TestArray3 {\n    public static void main(String[] args) {\n        int[] list = { 22, 55, 33 };\n        swap(list, 0, 2);\n        for (int element : list) System.out.print(element + \" \");\n    }\n    \n    public static void swap(int[] arr, int i, int j) {\n        int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;\n    }\n}"
                    },
                    {
                      type: "java-collection-array-reference-swap"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Tham số dòng lệnh String[] args:</strong> Phương thức khởi chạy <code>main()</code> mặc định luôn có tham số là mảng các đối tượng String <code>String[] args</code> để nhận các đối số truyền vào từ Command-line."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "public class TestCommandLineArgs {\n    public static void main(String[] args) {\n        for (int i=0; i<args.length; i++) {\n            System.out.println(\"args[\" + i + \"] = \" + args[i]);\n        }\n    }\n}"
                    },
                    {
                      type: "java-collection-array-cli-detour"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ thi cử</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• Mảng được truyền vào hàm dưới dạng <strong>tham chiếu</strong>, mọi thay đổi bên trong hàm sẽ tác động trực tiếp tới mảng gốc bên ngoài.<br/>• Các tham số CLI phân tách bởi dấu cách trống, nếu muốn truyền cả cụm từ có dấu cách cần bao quanh bằng cặp dấu ngoặc kép <code>\"\"</code>.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-collection-array-errors",
              number: "4",
              title: "Trả về mảng & Lỗi thường gặp (NullPointer)",
              parts: [
                {
                  id: "oop-part-collection-array-errors-detail",
                  label: "",
                  title: "Trả về mảng và Các lỗi thường gặp",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Trả về mảng (Returning an Array):</strong> Một phương thức hoàn toàn có thể trả về một mảng. Kiểu dữ liệu trả về của phương thức sẽ được khai báo ở dạng <code>datatype[]</code>."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "public static double[] makeArray(int size, double limit) {\n    double[] arr = new double[size];\n    for (int i=0; i < arr.length; i++)\n        arr[i] = limit/(i+1);\n    return arr;\n}"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Các lỗi thường gặp khi làm việc với Mảng:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>a. length vs length():</strong> Lấy độ dài chuỗi String dùng phương thức <code>str.length()</code> (có dấu ngoặc), còn mảng dùng thuộc tính <code>arr.length</code> (không có dấu ngoặc).",
                        "<strong>b. Truy cập ngoài phạm vi (ArrayIndexOutOfBoundsException):</strong> Chỉ số mảng hợp lệ chạy từ <code>0</code> đến <code>length - 1</code>. Chạy đến <code>i <= length</code> sẽ bị crash.",
                        "<strong>c. Quên khởi tạo phần tử là Object:</strong> Cú pháp <code>new Point[3]</code> mới chỉ tạo mảng chứa 3 tham chiếu <code>null</code>. Bắt buộc phải khởi tạo từng phần tử bằng <code>new Point()</code> trước khi gọi phương thức."
                      ]
                    },
                    {
                      type: "java-collection-array-errors-warning"
                    },
                    {
                      type: "java-collection-array-null-pointer-sim"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ lỗi mảng</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• Đây là lỗi **cực kỳ hay gặp** trong đề thi: Khai báo mảng đối tượng <code>new Type[size]</code> mới chỉ tạo ra mảng các tham chiếu <code>null</code>, chưa tạo đối tượng thực tế; bắt buộc phải dùng vòng lặp để <code>new</code> từng phần tử riêng biệt.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-collection-array-2d",
              number: "5",
              title: "Mảng 2 chiều & Mảng răng cưa",
              parts: [
                {
                  id: "oop-part-collection-array-2d-detail",
                  label: "",
                  title: "Mảng 2 chiều và Mảng răng cưa",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Mảng 2 chiều (2D Array):</strong> Được định nghĩa là **mảng của các mảng** (array of arrays). Trong Java, mảng 2 chiều cho phép các hàng có độ dài khác nhau, gọi là **mảng răng cưa (jagged array)**."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "int[][] products = new int[12][]; // mảng 12 hàng, mỗi hàng chưa xác định cột\nint[][] array2D = { {4, 5, 2}, {1, 3}, {7, 1, 5, 6} };"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Lớp kiểm thử duyệt mảng 2 chiều:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "public class Test2DArray {\n    public static void main(String[] args) {\n        int[][] array2D = { {4, 5, 2}, {1, 3}, {7, 1, 5, 6} };\n        System.out.println(\"array2D.length = \" + array2D.length); // số hàng = 3\n        for (int i = 0; i < array2D.length; i++)\n            System.out.println(\"array2D[\" + i + \"].length = \" + array2D[i].length);\n            \n        for (int row = 0; row < array2D.length; row++) {\n            for (int col = 0; col < array2D[row].length; col++)\n                System.out.print(array2D[row][col] + \" \");\n            System.out.println();\n        }\n    }\n}"
                    },
                    {
                      type: "java-collection-array-jagged-2d"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ mảng 2 chiều</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• <code>array2D.length</code>: Trả về **số hàng**.<br/>• <code>array2D[i].length</code>: Trả về **số cột của hàng thứ i** (số cột hoàn toàn có thể khác nhau giữa các hàng).</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-collection-array-drawbacks",
              number: "6",
              title: "Nhược điểm của mảng & Giới thiệu Vector/ArrayList",
              parts: [
                {
                  id: "oop-part-collection-array-drawbacks-detail",
                  label: "",
                  title: "Nhược điểm kích thước cố định và hướng phát triển",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Nhược điểm lớn nhất của Array:</strong> Sau khi khởi tạo đối tượng mảng, **kích thước của mảng là cố định (fixed size)** và không thể co giãn."
                    },
                    {
                      type: "bullets",
                      items: [
                        "Muốn thay đổi kích thước mảng ➔ Bắt buộc phải tạo lại mảng mới (reconstruction) có kích thước lớn hơn, sao chép dữ liệu cũ sang và chuyển hướng con trỏ tham chiếu.",
                        "Trong thực tế, để giải quyết nhược điểm này, Java cung cấp các lớp động như <code>Vector</code> hoặc <code>ArrayList</code> với khả năng tự động co giãn kích thước (dynamic size) linh hoạt.",
                        "Trước khi học về Vector/ArrayList, lập trình viên cần nắm vững khái niệm **Generics (Kiểu chung)** ở các bài học tiếp theo."
                      ]
                    },
                    {
                      type: "java-collection-array-reconstruction"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ tổng kết phần Mảng</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• 'Drawback' = nhược điểm, trở ngại lớn nhất của mảng là kích thước cố định.<br/>• Đây là nguyên nhân trực tiếp thúc đẩy sự ra đời của **Vector** và **ArrayList** trong gói <code>java.util</code>.</p></details>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-collection-generics-sec",
          roman: "II",
          title: "Generics (Kiểu tổng quát)",
          subsections: [
            {
              id: "oop-sub-collection-generics-intro",
              number: "1",
              title: "Động lực & Lớp Pair tổng quát",
              parts: [
                {
                  id: "oop-part-collection-generics-intro-detail",
                  label: "",
                  title: "Khái niệm chung, động lực và lớp Pair tổng quát",
                  content: [
                    {
                      type: "paragraph",
                      text: "<blockquote><strong>Khái niệm chung:</strong> Generics (Kiểu tổng quát/chung) cho phép lập trình viên định nghĩa các lớp, giao diện và phương thức có thể thao tác trên các đối tượng thuộc nhiều kiểu dữ liệu khác nhau mà không cần ràng buộc cứng vào một kiểu cụ thể nào.</blockquote>"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Động lực (Motivation):</strong> Trong thực tế, có rất nhiều bài toán lập trình có cùng thuật toán và cấu trúc code nhưng lại áp dụng cho nhiều kiểu dữ liệu khác nhau. Nếu không dùng Generics, ta phải viết thủ công nhiều lớp trùng lặp (ví dụ: lớp <code>IntPair</code> lưu 2 số nguyên, lớp <code>StringPair</code> lưu 2 chuỗi...) dẫn đến lãng phí và khó bảo trì code."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "class IntPair {\n    private int first, second;\n    public IntPair(int a, int b) {\n        first = a; second = b;\n    }\n    public int getFirst() { return first; }\n    public int getSecond() { return second; }\n}"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Giải pháp dùng Generics:</strong> Định nghĩa lớp <code>Pair&lt;T&gt;</code> dùng chung cho mọi kiểu dữ liệu đối tượng:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "class Pair<T> {\n    private T first, second;\n    public Pair(T a, T b) {\n        first = a; second = b;\n    }\n    public T getFirst() { return first; }\n    public T getSecond() { return second; }\n}"
                    },
                    {
                      type: "java-collection-generics-playground"
                    },
                    {
                      type: "java-collection-generics-wrapper-type"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ quy tắc tham chiếu</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• Tham số kiểu <code>&lt;T&gt;</code> đại diện cho một kiểu đối tượng bất kỳ.<br/>• **Quy tắc quan trọng:** Kiểu tổng quát chỉ được thay thế bằng kiểu dữ liệu tham chiếu (Reference Type), **cấm** dùng trực tiếp kiểu nguyên thủy (Primitive Type) như <code>int</code>, <code>double</code>. Phải dùng các wrapper class tương ứng như <code>Integer</code>, <code>Double</code>.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-collection-generics-autoboxing",
              number: "2",
              title: "Autoboxing & Unboxing",
              parts: [
                {
                  id: "oop-part-collection-generics-autoboxing-detail",
                  label: "",
                  title: "Tự động đóng và mở gói kiểu dữ liệu",
                  content: [
                    {
                      type: "paragraph",
                      text: "Để hỗ trợ chuyển đổi mượt mà giữa kiểu nguyên thủy và đối tượng bao bọc (wrapper class), Java cung cấp cơ chế tự động chuyển đổi:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "**Autoboxing:** Java compiler tự động chuyển đổi giá trị kiểu nguyên thủy (primitive) thành đối tượng wrapper tương ứng (ví dụ: chuyển <code>int</code> thành <code>Integer</code>).",
                        "**Unboxing:** Java compiler tự động chuyển đổi đối tượng wrapper về lại kiểu nguyên thủy tương ứng (ví dụ: chuyển <code>Integer</code> thành <code>int</code>)."
                      ]
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "Pair<Integer> twoInt = new Pair<Integer>(-5, 20); // autoboxing: -5, 20 (int) -> Integer\nint i = new Integer(5); // unboxing: Integer -> int\nInteger intObj = 7;     // autoboxing: int -> Integer"
                    },
                    {
                      type: "java-collection-generics-autoboxing"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ Autoboxing/Unboxing</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• **Autoboxing:** primitive ➔ wrapper object (tự động).<br/>• **Unboxing:** wrapper object ➔ primitive (tự động).<br/>• Khái niệm này rất hay xuất hiện trong bài kiểm tra trắc nghiệm lý thuyết Java.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-collection-generics-multi",
              number: "3",
              title: "Nhiều kiểu tổng quát & Tổng kết Generics",
              parts: [
                {
                  id: "oop-part-collection-generics-multi-detail",
                  label: "",
                  title: "Nhiều tham số kiểu và quy ước",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Nhiều tham số kiểu tổng quát:</strong> Một lớp generic hoàn toàn có thể hỗ trợ nhiều tham số kiểu khác nhau, ví dụ: <code>class NewPair&lt;S, T&gt;</code>."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "class NewPair<S, T> {\n    private S first;\n    private T second;\n    public NewPair(S a, T b) {\n        first = a; second = b;\n    }\n    public S getFirst() { return first; }\n    public T getSecond() { return second; }\n}"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Quy ước đặt tên tham số kiểu:</strong> Thường dùng các chữ cái in hoa đơn để tránh nhầm lẫn với các lớp thông thường:<br/>• <code>T</code>: Type (Kiểu dữ liệu chung)<br/>• <code>S</code>, <code>U</code>, <code>V</code>: Các kiểu dữ liệu kế tiếp<br/>• <code>E</code>: Element (Phần tử trong Collection)<br/>• <code>K</code>: Key (Khóa trong Map)<br/>• <code>V</code>: Value (Giá trị trong Map)"
                    },
                    {
                      type: "java-collection-generics-multi-pair"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ tổng kết Generics</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• Generics giúp giảm thiểu trùng lặp mã nguồn tối đa khi cùng giải pháp thuật toán nhưng khác kiểu dữ liệu.<br/>• Chỉ hoạt động với Reference Type (kiểu đối tượng).<br/>• Autoboxing/Unboxing diễn ra tự động tại thời điểm biên dịch.</p></details>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-collection-vector-sec",
          roman: "III",
          title: "Vector",
          subsections: [
            {
              id: "oop-sub-collection-vector-intro",
              number: "1",
              title: "Khái niệm & Bảng phương thức Vector",
              parts: [
                {
                  id: "oop-part-collection-vector-intro-detail",
                  label: "",
                  title: "Giới thiệu lớp Vector và bảng các phương thức thường dùng",
                  content: [
                    {
                      type: "paragraph",
                      text: "<blockquote><strong>Khái niệm chung:</strong> Vector là một lớp (class) trong gói <code>java.util</code> đại diện cho cấu trúc dữ liệu **mảng có kích thước động (dynamic-size array)**.</blockquote>"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Động lực sử dụng:</strong> Vector giải quyết triệt để nhược điểm kích thước cố định của mảng thông thường bằng cách tự động co giãn (mở rộng hoặc thu nhỏ) ô nhớ khi ta thêm/bớt phần tử. Ngoài ra, Vector hỗ trợ Generic cho phép chứa bất kỳ kiểu dữ liệu đối tượng nào."
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Package & Cú pháp khai báo:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "import java.util.Vector;\n\n// Khai báo biến tham chiếu\nVector<E> myVector;\n\n// Khởi tạo Vector rỗng\nmyVector = new Vector<E>();"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Các phương thức API thông dụng của Vector:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>isEmpty()</code>: Kiểm tra Vector có rỗng hay không.",
                        "<code>size()</code>: Lấy số phần tử hiện có trong Vector.",
                        "<code>add(E o)</code>: Thêm phần tử vào cuối Vector.",
                        "<code>add(int index, E element)</code>: Chèn phần tử vào vị trí chỉ định (yêu cầu dịch chuyển các phần tử phía sau sang phải).",
                        "<code>remove(int index)</code>: Xóa phần tử tại vị trí chỉ định (yêu cầu dịch chuyển dồn các phần tử phía sau sang trái).",
                        "<code>get(int index)</code>: Lấy phần tử tại vị trí chỉ định.",
                        "<code>contains(Object elem)</code>: Kiểm tra phần tử có tồn tại trong Vector không."
                      ]
                    },
                    {
                      type: "java-collection-vector-sandbox"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-collection-vector-example",
              number: "2",
              title: "Ví dụ thực tế & So sánh đồng bộ (Synchronized)",
              parts: [
                {
                  id: "oop-part-collection-vector-example-detail",
                  label: "",
                  title: "Ví dụ hoạt động và đặc tính đồng bộ",
                  content: [
                    {
                      type: "paragraph",
                      text: "Dưới đây là một lớp ví dụ đầy đủ sử dụng mảng động Vector để lưu trữ danh sách mã khóa môn học:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "import java.util.Vector;\n\npublic class TestVector {\n    public static void main(String[] args) {\n        Vector<String> courses = new Vector<String>();\n        courses.add(\"503005\");\n        courses.add(0, \"501042\");\n        courses.add(\"502043\");\n        \n        System.out.println(courses);\n        System.out.println(\"At index 0: \" + courses.get(0));\n        \n        if (courses.contains(\"503005\")) {\n            System.out.println(\"503005 is in courses\");\n        }\n        \n        courses.remove(\"503005\");\n        for (String c : courses) {\n            System.out.println(c);\n        }\n    }\n}"
                    },
                    {
                      type: "java-collection-vector-executer"
                    },
                    {
                      type: "java-collection-vector-synchronized"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Click để xem Ghi nhớ Vector</summary><p class=\"text-xs text-slate-300 mt-2 leading-relaxed font-normal\">• Vector có sẵn phương thức <code>toString()</code> giúp in nhanh danh sách đẹp dạng <code>[A, B, C]</code>.<br/>• Có thể dùng vòng lặp for mở rộng <code>enhanced for-loop</code> cho Vector tương tự như mảng thô.<br/>• **Điểm dễ thi:** Vector được đồng bộ hóa (synchronized) ➔ an toàn đa luồng nhưng chạy chậm hơn <code>ArrayList</code>.</p></details>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-collection-arraylist-sec",
          roman: "IV",
          title: "ArrayList",
          subsections: [
            {
              id: "oop-sub-collection-arraylist-intro",
              number: "1",
              title: "Giới thiệu (Introduction)",
              parts: [
                {
                  id: "oop-part-collection-arraylist-intro-detail",
                  label: "",
                  title: "Giới thiệu lớp ArrayList và điểm tương đồng/khác biệt với Vector",
                  content: [
                    {
                      type: "paragraph",
                      text: "<blockquote><strong>Khái niệm chung:</strong> <code>ArrayList</code> là một lớp khác trong Java cũng dùng để biểu diễn mảng kích thước động (dynamic-size array).</blockquote>"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Giới thiệu (Introduction):</strong> Java cung cấp lớp <code>ArrayList</code> với tính năng tương tự Vector: tự động mở rộng/thu nhỏ dung lượng (dynamic size), hỗ trợ Generic (cho phép kiểm soát kiểu tham chiếu), và cung cấp sẵn nhiều phương thức hữu ích."
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Điểm giống nhau (Similarities) giữa Vector và ArrayList:</strong> Cả hai đều dựa trên chỉ số (index-based) và dùng mảng nội bộ. Đồng thời cả hai đều giữ nguyên thứ tự chèn (insertion order) của các phần tử."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>So sánh Vector và ArrayList:</strong>"
                    },
                    {
                      type: "java-collection-arraylist-comparison"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Khuyến nghị:</strong> Nên dùng <code>ArrayList</code> nếu không cần đồng bộ hóa (synchronisation) đa luồng để đạt hiệu năng tốt hơn.",
                        "<strong>Đồng bộ hóa (Synchronisation):</strong> Cơ chế đảm bảo tại một thời điểm chỉ có thể có tối đa một luồng (thread) thực thi các phương thức của một đối tượng.",
                        "<strong>Lưu ý hiệu năng:</strong> Khi dùng Vector/ArrayList, nếu biết trước số phần tử tối đa, nên khởi tạo với dung lượng lớn nhất ngay từ đầu để tránh việc co giãn mảng tự động nhiều lần (vì thao tác này yêu cầu cấp phát mảng mới và copy toàn bộ dữ liệu cũ, rất tốn kém hiệu năng)."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Ghi nhớ nhanh</summary><p class=\"text-xs text-slate-350 mt-2 leading-relaxed font-normal\">• Đây là <strong>câu hỏi rất hay gặp</strong> trong phòng vấn tuyển dụng và đề thi trắc nghiệm Java: Phân biệt Vector (đồng bộ, an toàn đa luồng nhưng chạy chậm) và ArrayList (không đồng bộ, chạy nhanh hơn nhưng không an toàn đa luồng).</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-collection-arraylist-api",
              number: "2",
              title: "Tài liệu API (API Documentation)",
              parts: [
                {
                  id: "oop-part-collection-arraylist-api-detail",
                  label: "",
                  title: "Khai báo và các phương thức thông dụng của ArrayList",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "import java.util.ArrayList;\n\n// Khai báo tham chiếu ArrayList\nArrayList<E> myArrayList;\n\n// Khởi tạo ArrayList rỗng\nmyArrayList = new ArrayList<E>();"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Bảng phương thức thường dùng của ArrayList:</strong>"
                    },
                    {
                      type: "java-collection-arraylist-api-table"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-collection-arraylist-example",
              number: "3",
              title: "Ví dụ (Example)",
              parts: [
                {
                  id: "oop-part-collection-arraylist-example-detail",
                  label: "",
                  title: "Ví dụ thực tế sử dụng ArrayList",
                  content: [
                    {
                      type: "paragraph",
                      text: "Dưới đây là một chương trình ví dụ đầy đủ sử dụng <code>ArrayList</code> để lưu danh sách các số nguyên nhập từ bàn phím:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "import java.util.ArrayList;\nimport java.util.Scanner;\n\npublic class TestArrayList {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        ArrayList<Integer> list = new ArrayList<Integer>();\n        \n        System.out.println(\"Enter a list of integers, press ctrl-d to end.\");\n        while (sc.hasNextInt()) {\n            list.add(sc.nextInt());\n        }\n        \n        System.out.println(list); // toString() của ArrayList\n        \n        // Chuyển giá trị đầu tiên xuống cuối danh sách\n        list.add(list.remove(0));\n        \n        System.out.println(list);\n    }\n}"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Kết quả mẫu (input: 31, 17, -5, 26, 50):</strong>"
                    },
                    {
                      type: "code",
                      language: "plain",
                      code: "[31, 17, -5, 26, 50]\n[17, -5, 26, 50, 31]"
                    },
                    {
                      type: "java-collection-arraylist-executer"
                    },
                    {
                      type: "java-collection-arraylist-sandbox"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Ghi nhớ nhanh về ví dụ</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• <strong>Khởi tạo:</strong> ArrayList<E> list = new ArrayList<E>();\n<br/>• <strong>Mục đích:</strong> Thao tác linh hoạt với danh sách có số lượng phần tử thay đổi liên tục.\n<br/>• <strong>Ứng dụng thực tế:</strong> Danh sách điểm số sinh viên nhập từ bàn phím.\n<br/>• <strong>Dạng bài thi trắc nghiệm:</strong> So sánh Vector vs ArrayList (về tính đồng bộ hóa, tốc độ, tỉ lệ tự mở rộng dung lượng).</p></details>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-collection-summary-sec",
          roman: "V",
          title: "Tổng kết bài học (Summary)",
          subsections: [
            {
              id: "oop-sub-collection-summary",
              number: "",
              title: "Tổng kết & Ghi nhớ tổng quát",
              parts: [
                {
                  id: "oop-part-collection-summary-detail",
                  label: "",
                  title: "Tóm tắt lý thuyết trọng tâm chương 10",
                  content: [
                    {
                      type: "paragraph",
                      text: "Tổng kết lại các khái niệm cơ bản đã học trong Bài 10:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Array (Mảng):</strong> Cấu trúc dữ liệu cơ bản lưu trữ các phần tử cùng kiểu liên tiếp trong bộ nhớ RAM, kích thước cố định.",
                        "<strong>Generics (Kiểu chung):</strong> Khung an toàn giúp tham số hóa kiểu đối tượng cho cấu trúc dữ liệu lúc biên dịch.",
                        "<strong>Vector và ArrayList:</strong> Hai lớp cài đặt mảng kích thước động (dynamic-size array), cung cấp nhiều phương thức tiện lợi."
                      ]
                    },
                    {
                      type: "java-collection-summary-mindmap"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-collection-exercises",
              number: "",
              title: "Bài tập thực hành (Practice Exercises)",
              parts: [
                {
                  id: "oop-part-collection-exercises-detail",
                  label: "",
                  title: "Danh sách đề bài tập thực hành trên Slide bài giảng",
                  content: [
                    {
                      type: "paragraph",
                      text: "Dưới đây là danh sách các bài tập thực hành chương 10 (trích từ slide bài giảng chính thức của NUS 503005 Lecture 10):"
                    },
                    {
                      type: "java-collection-practice-exercises"
                    },
                    {
                      type: "paragraph",
                      text: "<span className=\"text-xs text-stone-500 italic\">*Ghi chú: Nội dung dựa theo slide bài giảng gốc của School of Computing, National University of Singapore (503005 Lecture 10: Collection of Data).*</span>"
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
      id: "oop-exceptions",
      title: "Bài 11",
      subtitle: "Exceptions",
      sections: [
        {
          id: "oop-exceptions-goals-sec",
          roman: "",
          title: "Mục tiêu bài học (Objectives)",
          subsections: [
            {
              id: "oop-sub-exceptions-goals",
              number: "",
              title: "Mục tiêu bài học",
              parts: [
                {
                  id: "oop-part-exceptions-goals-desc",
                  label: "",
                  title: "Mục tiêu bài học",
                  content: [
                    {
                      type: "paragraph",
                      text: "Chào mừng bạn đến với <strong>Bài 11: Ngoại lệ (Exceptions)</strong>! Dưới đây là các định hướng mục tiêu học tập cốt lõi của bài học này:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Hiểu cách dùng cơ chế <strong>Exception (Ngoại lệ)</strong> để xử lý lỗi hoặc sự kiện bất thường xảy ra khi chương trình đang chạy."
                      ]
                    },
                    {
                      type: "java-oop-exceptions-goals-explorer"
                    },
                    {
                      type: "paragraph",
                      text: "Nội dung bài giảng chi tiết của chương Exceptions đang được cập nhật..."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-exceptions-motivation-sec",
          roman: "I",
          title: "Motivation (Động lực)",
          subsections: [
            {
              id: "oop-sub-exceptions-error-types",
              number: "1",
              title: "Ba loại lỗi trong lập trình",
              parts: [
                {
                  id: "oop-part-exceptions-error-types-detail",
                  label: "",
                  title: "Phân loại các lỗi thường gặp",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Syntax errors (Lỗi cú pháp):</strong><br/>• Xảy ra khi vi phạm quy tắc ngôn ngữ.<br/>• Được trình biên dịch (compiler) phát hiện.<br/>• <strong>Dễ phát hiện và sửa nhất.</strong>",
                        "<strong>Run-time errors (Lỗi thời gian chạy):</strong><br/>• Xảy ra khi máy tính phát hiện một phép toán <strong>không thể thực hiện được</strong>.<br/>• Ví dụ: chia cho 0 (<code>x/y</code> đúng cú pháp nhưng nếu <code>y = 0</code> lúc chạy sẽ lỗi).",
                        "<strong>Logic errors (Lỗi logic):</strong><br/>• Xảy ra khi chương trình chạy nhưng <strong>không thực hiện đúng ý đồ</strong> người viết.<br/>• <strong>Khó phát hiện và sửa nhất.</strong>"
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Ghi nhớ phân loại lỗi</summary><p class=\"text-xs text-slate-350 mt-2 leading-relaxed font-normal\">• Thứ tự độ khó tăng dần: Syntax (dễ nhất) ➔ Run-time ➔ Logic (khó nhất).<br/>• Đây là điểm rất dễ ra thi dưới dạng câu hỏi trắc nghiệm lý thuyết phân loại lỗi.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-exceptions-runtime-example",
              number: "2",
              title: "Ví dụ minh họa lỗi run-time (Example.java)",
              parts: [
                {
                  id: "oop-part-exceptions-runtime-example-detail",
                  label: "",
                  title: "Mô tả lỗi InputMismatchException",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "import java.util.Scanner;\n\npublic class Example {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter an integer: \");\n        int num = sc.nextInt();\n        System.out.println(\"num = \" + num);\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Nếu người dùng nhập chữ (không phải số nguyên) ➔ lỗi xảy ra tại <code>sc.nextInt()</code>.",
                        "Kết quả: chương trình bị <strong>dừng đột ngột (terminate)</strong>, phần code còn lại <strong>bị bỏ qua</strong>.",
                        "Thông báo lỗi xuất hiện: <code>Exception in thread \"main\" java.util.InputMismatchException</code> kèm theo <strong>stack trace</strong>."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">💡 Giải thích thêm về Stack trace</summary><p class=\"text-xs text-slate-350 mt-2 leading-relaxed font-normal\">• <strong>Stack trace:</strong> danh sách các dòng lệnh (method call) dẫn tới lỗi, giúp lập trình viên định vị nhanh lỗi xảy ra ở dòng nào trong mã nguồn.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-exceptions-factorial-negative",
              number: "3",
              title: "Ví dụ: phương thức factorial() với tham số âm",
              parts: [
                {
                  id: "oop-part-exceptions-factorial-negative-detail",
                  label: "",
                  title: "Vấn đề factorial với số âm và giải pháp System.exit",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "public static int factorial(int n) {\n    int ans = 1;\n    for (int i = 2; i <= n; i++) ans *= i;\n    return ans;\n}"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Câu hỏi đặt ra:</strong> Nếu tham số truyền vào <code>n</code> mang giá trị âm thì sao? Chương trình có nên tiếp tục chạy không?"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Cách xử lý thô sơ (chưa dùng exception):</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "public static int factorial(int n) {\n    if (n < 0) {\n        System.out.println(\"n is negative\");\n        System.exit(1);\n    }\n    // Các dòng code khác giữ nguyên\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>System.exit(n)</code>: dừng toàn bộ chương trình ngay lập tức, trả về mã thoát <code>n</code>.",
                        "Trên hệ điều hành UNIX, ta có thể kiểm tra mã thoát này bằng lệnh: <code>echo $?</code>.",
                        "<strong>Vấn đề lớn:</strong> Phương thức <code>factorial()</code> có thể được gọi và sử dụng bởi rất nhiều chương trình khác nhau ➔ việc dừng đột ngột chương trình bằng exit làm cho ứng dụng gọi nó không có cơ hội xử lý lỗi phù hợp cho từng tình huống cụ thể."
                      ]
                    },
                    {
                      type: "java-exceptions-error-types-examples"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-exceptions-java-mechanism",
              number: "4",
              title: "Giải pháp: Cơ chế Exception của Java",
              parts: [
                {
                  id: "oop-part-exceptions-java-mechanism-detail",
                  label: "",
                  title: "Giới thiệu cơ chế Exception",
                  content: [
                    {
                      type: "paragraph",
                      text: "Thay vì tự quyết định cách xử lý lỗi ngay tại chỗ, Java cung cấp <strong>cơ chế Exception (Exception mechanism)</strong> gồm 2 bước:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Báo hiệu lỗi (exception event):</strong> được kích hoạt khi có sự cố xảy ra.",
                        "Cho phép <strong>người dùng phương thức</strong> tự quyết định cách xử lý lỗi ở một đoạn code riêng biệt.",
                        "Nếu ngoại lệ không được xử lý ở bất kỳ đâu ➔ chương trình sẽ bị <strong>crash (sập)</strong>."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "Cơ chế Exception gồm 2 thành phần chính cấu thành:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Exception Indication (Báo hiệu ngoại lệ):</strong> Tạo và ném đối tượng exception.",
                        "<strong>Exception Handling (Xử lý ngoại lệ):</strong> Bắt và xử lý đối tượng exception đó bằng khối code catch."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">💡 Giải thích thêm về ứng dụng của Exception</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• Ví dụ <code>n < 0</code> ở trên chỉ mang tính minh họa. Exception thật sự phù hợp hơn cho các trường hợp <strong>khó kiểm tra trước</strong>, ví dụ: giá trị <code>n</code> quá lớn gây ra hiện tượng <strong>tràn số (overflow)</strong>.</p></details>"
                    },
                    {
                      type: "java-exceptions-mechanism"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-exceptions-indication-sec",
          roman: "II",
          title: "Exception Indication (Báo hiệu ngoại lệ)",
          subsections: [
            {
              id: "oop-sub-exceptions-indication-syntax",
              number: "1",
              title: "Cú pháp (Syntax)",
              parts: [
                {
                  id: "oop-part-exceptions-indication-syntax-detail",
                  label: "",
                  title: "Cú pháp báo hiệu một lỗi bằng cách ném ngoại lệ",
                  content: [
                    {
                      type: "paragraph",
                      text: "Để báo hiệu một lỗi đã được phát hiện: gọi là <strong>\"throwing an exception\" (ném ngoại lệ)</strong>."
                    },
                    {
                      type: "paragraph",
                      text: "• Mục đích: cho phép người dùng phát hiện và xử lý lỗi."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "// Cú pháp ném ngoại lệ\nthrow ExceptionObject;"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Đối tượng ngoại lệ (<strong>Exception object</strong>) phải là đối tượng của lớp <strong>kế thừa (derived)</strong> từ lớp <code>Throwable</code>.",
                        "Chứa thông tin hữu ích về lỗi.",
                        "Một số lớp Exception dựng sẵn (predefined) thường dùng:<br/>• <code>ArithmeticException</code><br/>• <code>NullPointerException</code><br/>• <code>IndexOutOfBoundsException</code><br/>• <code>IllegalArgumentException</code>"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-exceptions-indication-constructor",
              number: "2",
              title: "Constructor và phương thức chung của lớp Exception",
              parts: [
                {
                  id: "oop-part-exceptions-indication-constructor-detail",
                  label: "",
                  title: "Các phương thức thông dụng của lớp Exception",
                  content: [
                    {
                      type: "paragraph",
                      text: "Lớp Exception cung cấp các constructor và phương thức cơ bản để quản lý thông tin ngoại lệ:"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-exceptions-indication-example",
              number: "3",
              title: "Ví dụ báo hiệu ngoại lệ (Exception Indication Example)",
              parts: [
                {
                  id: "oop-part-exceptions-indication-example-detail",
                  label: "",
                  title: "Ví dụ thực thi báo hiệu lỗi trong hàm factorial()",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "public static int factorial(int n)\n    throws IllegalArgumentException {\n    \n    if (n < 0) {\n        IllegalArgumentException exObj =\n            new IllegalArgumentException(n + \" is invalid!\");\n        throw exObj;\n    }\n    \n    int ans = 1;\n    for (int i = 2; i <= n; i++) ans *= i;\n    return ans;\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>throws IllegalArgumentException</code> (ở khai báo phương thức): khai báo rằng phương thức <code>factorial()</code> <strong>có thể</strong> ném ra <code>IllegalArgumentException</code>.",
                        "<code>throw exObj;</code> (bên trong hàm): hành động <strong>thực sự ném</strong> ngoại lệ ra."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-red-500/10 to-rose-500/10 border-l-4 border-rose-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-rose-500 font-mono uppercase tracking-wider\">⚠️ Điểm dễ nhầm lẫn</summary><p class=\"text-xs text-slate-350 mt-2 leading-relaxed font-normal\">• Cần phân biệt rõ <code>throw</code> (ném 1 đối tượng ngoại lệ) khác với <code>throws</code> (khai báo trong chữ ký hàm) ➔ rất dễ nhầm, hay ra đề thi lý thuyết.</p></details>"
                    },
                    {
                      type: "paragraph",
                      text: "Có thể viết gọn 2 dòng tạo đối tượng + throw thành 1 dòng duy nhất:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "throw new IllegalArgumentException(n + \" is invalid!\");"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Một phương thức có thể <code>throws</code> nhiều loại exception khác nhau phân tách bằng dấu phẩy.",
                        "<code>throw</code> = động từ, dùng để ném <strong>1 đối tượng exception</strong> cụ thể.",
                        "<code>throws</code> = khai báo trong signature của method, liệt kê <strong>các loại exception</strong> có thể xảy ra."
                      ]
                    },
                    {
                      type: "java-exceptions-indication-visualizer"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-exceptions-handling-sec",
          roman: "III",
          title: "Exception Handling (Xử lý ngoại lệ)",
          subsections: [
            {
              id: "oop-sub-exceptions-handling-example1",
              number: "1",
              title: "Ví dụ #1: Nhập số nguyên có xử lý lỗi (ExampleImproved.java)",
              parts: [
                {
                  id: "oop-part-exceptions-handling-example1-detail",
                  label: "",
                  title: "Chương trình nhập dữ liệu an toàn",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "import java.util.Scanner;\nimport java.util.InputMismatchException;\n\npublic class ExampleImproved {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        boolean isError = false;\n        do {\n            System.out.print(\"Enter an integer: \");\n            try {\n                int num = sc.nextInt();\n                System.out.println(\"num = \" + num);\n                isError = false;\n            }\n            catch (InputMismatchException e) {\n                System.out.print(\"Incorrect input: integer required. \");\n                sc.nextLine(); // skip newline\n                isError = true;\n            }\n        } while (isError);\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>try { ... }</code>: khối chứa các câu lệnh <strong>có khả năng</strong> phát sinh lỗi.",
                        "<code>catch (InputMismatchException e) { ... }</code>: khối \"bắt lỗi\" - chạy khi có exception loại <code>InputMismatchException</code> xảy ra trong khối try.",
                        "<code>e</code>: đối tượng exception được bắt, dùng để lấy thông tin lỗi.",
                        "<code>sc.nextLine();</code>: dùng để bỏ qua ký tự newline còn sót lại trong bộ đệm sau khi nhập sai.",
                        "Vòng lặp <code>do...while (isError)</code>: lặp lại việc nhập cho đến khi <strong>không còn lỗi</strong>."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Kết quả chạy chương trình giả lập:</strong>"
                    },
                    {
                      type: "code",
                      language: "plain",
                      code: "Enter an integer: abc\nIncorrect input: integer required. Enter an integer: def\nIncorrect input: integer required. Enter an integer: 1.23\nIncorrect input: integer required. Enter an integer: 92\nnum = 92"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Ghi nhớ handling</summary><p class=\"text-xs text-slate-350 mt-2 leading-relaxed font-normal\">• Nhờ khối try-catch, chương trình <strong>không bị dừng đột ngột</strong> khi nhập sai, mà tiếp tục yêu cầu nhập lại cho đến khi thành công.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-exceptions-handling-syntax",
              number: "2",
              title: "Cú pháp tổng quát Exception Handling",
              parts: [
                {
                  id: "oop-part-exceptions-handling-syntax-detail",
                  label: "",
                  title: "Cú pháp đầy đủ của try-catch-finally",
                  content: [
                    {
                      type: "paragraph",
                      text: "Người dùng của 1 phương thức có khả năng ném exception thì <strong>có trách nhiệm xử lý</strong> exception đó – còn gọi là <strong>\"exception catching\" (bắt ngoại lệ)</strong>."
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "try {\n    statement(s);\n} catch (ExpClass1 obj1) {\n    statement(s);\n} catch (ExpClass2 obj2) {\n    statement(s);\n} finally {\n    statement(s);\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>try</code>: khối lệnh có thể phát sinh lỗi.",
                        "<code>catch</code>: khối bắt và xử lý 1 loại exception cụ thể; có thể có <strong>nhiều catch</strong> cho nhiều loại lỗi khác nhau.",
                        "<code>finally</code>: khối <strong>luôn được thực thi</strong> (dù có lỗi hay không), thường dùng để <strong>giải phóng tài nguyên</strong> (đóng file, đóng kết nối...)."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Ghi nhớ khối finally</summary><p class=\"text-xs text-slate-350 mt-2 leading-relaxed font-normal\">• Có thể có nhiều <code>catch</code> nhưng chỉ <strong>một <code>finally</code></strong> (không bắt buộc).<br/>• <code>finally</code> luôn chạy – kể cả khi có <code>return</code> trong <code>try</code> hoặc <code>catch</code>. Đây là điểm <strong>rất hay bị hỏi trong thi</strong>.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-exceptions-handling-example-factorial",
              number: "3",
              title: "Ví dụ xử lý exception với factorial() (TestException.java)",
              parts: [
                {
                  id: "oop-part-exceptions-handling-example-factorial-detail",
                  label: "",
                  title: "Chương trình TestException gọi và bắt lỗi",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "public class TestException {\n    // Code factorial(n) throws IllegalArgumentException ở trước\n    \n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter n: \");\n        int input = sc.nextInt();\n        \n        try {\n            System.out.println(\"Ans = \" + factorial(input));\n        } catch (IllegalArgumentException expObj) {\n            System.out.println(expObj.getMessage());\n        }\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Trong ví dụ này, chọn cách <strong>in ra thông báo lỗi</strong> (<code>expObj.getMessage()</code>) khi bắt được exception.",
                        "Ngoài in thông báo lỗi, còn có nhiều cách xử lý khác (ví dụ: yêu cầu nhập lại, gán giá trị mặc định...)."
                      ]
                    },
                    {
                      type: "java-exceptions-handling-visualizer"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-exceptions-flow-sec",
          roman: "IV",
          title: "Execution Flow (Luồng thực thi khi có Exception)",
          subsections: [
            {
              id: "oop-sub-exceptions-flow-cases",
              number: "1",
              title: "Trường hợp KHÔNG có lỗi (n = 4) vs Có lỗi (n = -2)",
              parts: [
                {
                  id: "oop-part-exceptions-flow-cases-detail",
                  label: "",
                  title: "Khảo sát luồng chạy của khối try-catch-finally",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Không có exception:</strong><br/>• Khối <code>catch</code> bị bỏ qua hoàn toàn.<br/>• Chỉ có khối <code>try</code> chạy hết các lệnh rồi chuyển ngay đến <code>finally</code>.",
                        "<strong>Khi có exception xảy ra tại lệnh throw:</strong><br/>• Chương trình dừng ngay khối <code>try</code> hiện tại, <strong>bỏ qua phần code còn lại của try</strong> (ví dụ lệnh in 'After factorial()' không được chạy).<br/>• Nhảy thẳng sang khối <code>catch</code> phù hợp để xử lý.<br/>• Sau khi chạy xong catch ➔ luôn nhảy vào khối <code>finally</code>."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-red-500/10 to-rose-500/10 border-l-4 border-rose-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-rose-500 font-mono uppercase tracking-wider\">📌 Ghi nhớ luồng thực thi</summary><p class=\"text-xs text-slate-350 mt-2 leading-relaxed font-normal\">• Đây là sơ đồ luồng quan trọng nhất bài học.<br/>• Rất hay ra thi dưới dạng cho đoạn code mẫu và hỏi kết quả console output là gì khi truyền tham số có/không lỗi.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-exceptions-flow-retry",
              number: "2",
              title: "Phiên bản khác: Lặp lại cho đến khi nhập đúng (TestExceptionRetry.java)",
              parts: [
                {
                  id: "oop-part-exceptions-flow-retry-detail",
                  label: "",
                  title: "Retry Pattern nhập dữ liệu an toàn",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    int input;\n    boolean retry = true;\n    do {\n        try {\n            System.out.print(\"Enter n: \");\n            input = sc.nextInt();\n            System.out.println(\"Ans = \" + factorial(input));\n            retry = false; // không cần thử lại nữa\n        } catch (IllegalArgumentException expObj) {\n            System.out.println(expObj.getMessage());\n        }\n    } while (retry);\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Kỹ thuật: đặt khối <code>try-catch</code> <strong>bên trong vòng lặp do-while</strong> để tự động <strong>thử lại (retry)</strong> khi có lỗi xảy ra.",
                        "Vòng lặp tiếp tục cho đến khi người dùng nhập giá trị hợp lệ ➔ thực thi khối try thành công ➔ gán <code>retry = false</code> để thoát lặp."
                      ]
                    },
                    {
                      type: "java-exceptions-flow-retry"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-exceptions-checked-unchecked-sec",
          roman: "V",
          title: "Checked vs Unchecked Exceptions",
          subsections: [
            {
              id: "oop-sub-exceptions-checked-unchecked-concept",
              number: "1",
              title: "Khái niệm",
              parts: [
                {
                  id: "oop-part-exceptions-checked-unchecked-concept-detail",
                  label: "",
                  title: "Phân loại ngoại lệ",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Checked exceptions (Ngoại lệ được kiểm tra):</strong><br/>• Là loại <strong>bắt buộc phải xử lý</strong> (hoặc khai báo <code>throws</code> ở chữ ký hàm) ngay từ lúc <strong>biên dịch (compile time)</strong>.<br/>• Nếu không xử lý ➔ báo lỗi biên dịch.",
                        "<strong>Unchecked exceptions (Ngoại lệ không được kiểm tra):</strong><br/>• Là loại <strong>không bị kiểm tra bắt buộc</strong> lúc biên dịch.<br/>• Các lớp con của <code>RuntimeException</code>, <code>Error</code> đều là unchecked exceptions."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-exceptions-checked-unchecked-cause",
              number: "2",
              title: "Nguyên nhân và lý do",
              parts: [
                {
                  id: "oop-part-exceptions-checked-unchecked-cause-detail",
                  label: "",
                  title: "Tại sao Java chia thành 2 loại Exception?",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Unchecked exceptions thường biểu diễn các <strong>lỗi lập trình (programming errors)</strong> không thể phục hồi tại thời điểm runtime, ví dụ:<br/>• Gọi phương thức từ đối tượng null ➔ <code>NullPointerException</code>.<br/>• Truy cập mảng quá giới hạn ➔ <code>IndexOutOfBoundsException</code>.",
                        "Vì unchecked exception có thể xảy ra ở bất kỳ dòng lệnh nào, việc ép buộc try-catch sẽ làm mã nguồn cực kỳ rườm rà. Do đó Java <strong>không bắt buộc</strong> phải xử lý chúng."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">💡 Điểm giải thích thêm rất quan trọng</summary><p class=\"text-xs text-slate-350 mt-2 leading-relaxed font-normal\">• Đây là điểm <strong>rất hay gây nhầm lẫn:</strong> học sinh thường nghĩ mọi Exception đều bắt buộc dùng <code>try-catch</code>, nhưng thực tế chỉ <strong>checked exception</strong> mới bị compiler ép buộc xử lý.</p></details>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-exceptions-custom-sec",
          roman: "VI",
          title: "Định nghĩa lớp Exception mới (Defining New Exception Classes)",
          subsections: [
            {
              id: "oop-sub-exceptions-custom-create",
              number: "1",
              title: "Cách tạo lớp Exception tùy chỉnh",
              parts: [
                {
                  id: "oop-part-exceptions-custom-create-detail",
                  label: "",
                  title: "Khai báo Exception tự chế bằng extends",
                  content: [
                    {
                      type: "paragraph",
                      text: "Có thể tạo lớp exception mới bằng cách <strong>kế thừa (extends)</strong> từ lớp <code>Exception</code> có sẵn:"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "public class MyException extends Exception {\n    public MyException(String s) {\n        super(s);\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>extends Exception</code>: khai báo <code>MyException</code> là lớp con kế thừa từ lớp cha <code>Exception</code>.",
                        "<code>super(s)</code>: gọi constructor của lớp cha để lưu trữ thông điệp lỗi <code>s</code>."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-exceptions-custom-use",
              number: "2",
              title: "Cách sử dụng lớp Exception tự định nghĩa",
              parts: [
                {
                  id: "oop-part-exceptions-custom-use-detail",
                  label: "",
                  title: "Thực thi ném và bắt MyException",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "throw new MyException(\"MyException: Some reasons\");\n\ntry {\n    // code\n} catch (MyException e) {\n    // xử lý lỗi\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Dùng <code>throw new MyException(...)</code> để chủ động ném ngoại lệ tùy chỉnh ra ngoài.",
                        "Dùng khối <code>catch (MyException e)</code> để bắt và xử lý ngoại lệ đó.",
                        "<strong>Quy tắc tạo Exception riêng:</strong> Kế thừa từ <code>Exception</code> (nếu muốn tạo checked) hoặc kế thừa từ <code>RuntimeException</code> (nếu muốn tạo unchecked). Luôn gọi <code>super(s)</code> để lưu thông báo."
                      ]
                    },
                    {
                      type: "java-exceptions-checked-custom"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-exceptions-bank-sec",
          roman: "VII",
          title: "Ví dụ tổng hợp: Bank Account (Tài khoản ngân hàng)",
          subsections: [
            {
              id: "oop-sub-exceptions-bank-custom",
              number: "1",
              title: "Lớp Exception tùy chỉnh: NotEnoughFundException.java",
              parts: [
                {
                  id: "oop-part-exceptions-bank-custom-detail",
                  label: "",
                  title: "Định nghĩa lớp Exception tùy chỉnh của ứng dụng",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "public class NotEnoughFundException extends Exception {\n    private double amount;\n    \n    public NotEnoughFundException(String s, double amount) {\n        super(s);\n        this.amount = amount;\n    }\n    \n    public double getAmount() {\n        return amount;\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>extends Exception</code>: <code>NotEnoughFundException</code> là <strong>checked exception</strong>.",
                        "<code>private double amount</code>: lưu số tiền còn thiếu.",
                        "<code>this.amount = amount</code>: dùng <code>this</code> để phân biệt biến thành viên (<code>amount</code> của đối tượng) với tham số truyền vào (<code>amount</code> của constructor) có cùng tên.",
                        "<code>getAmount()</code>: phương thức getter, trả về số tiền còn thiếu."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-exceptions-bank-class",
              number: "2",
              title: "Lớp BankAcct.java (phần khai báo & getter)",
              parts: [
                {
                  id: "oop-part-exceptions-bank-class-detail",
                  label: "",
                  title: "Khai báo lớp tài khoản ngân hàng BankAcct",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "class BankAcct {\n    private int acctNum;\n    private double balance;\n    \n    public BankAcct() {\n        // By default, numeric attributes are initialised to 0\n    }\n    \n    public BankAcct(int aNum, double bal) {\n        acctNum = aNum;\n        balance = bal;\n    }\n    \n    public int getAcctNum() {\n        return acctNum;\n    }\n    \n    public double getBalance() {\n        return balance;\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>private int acctNum; private double balance;</code>: 2 thuộc tính private – thể hiện tính <strong>Encapsulation (Đóng gói)</strong>.",
                        "Constructor không tham số <code>BankAcct()</code>: các thuộc tính số sẽ tự động khởi tạo bằng <strong>0.0</strong>.",
                        "Constructor có tham số <code>BankAcct(int aNum, double bal)</code>: khởi tạo tài khoản với số tài khoản và số dư cụ thể.",
                        "<code>getAcctNum()</code>, <code>getBalance()</code>: các phương thức getter để lấy giá trị thuộc tính private."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-exceptions-bank-methods",
              number: "3",
              title: "Phương thức deposit() và withdraw()",
              parts: [
                {
                  id: "oop-part-exceptions-bank-methods-detail",
                  label: "",
                  title: "Nghiệp vụ gửi tiền và rút tiền",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "public void deposit(double amount) {\n    balance += amount;\n}\n\npublic void withdraw(double amount) throws NotEnoughFundException {\n    if (balance >= amount) {\n        balance -= amount;\n    } else {\n        double needs = amount - balance;\n        throw new NotEnoughFundException(\"withdrawal Unsuccessful\", needs);\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>deposit(double amount)</code>: gửi tiền, cộng vào <code>balance</code>.",
                        "<code>withdraw(double amount) throws NotEnoughFundException</code>: rút tiền.",
                        "Nếu <strong>đủ tiền</strong> (<code>balance >= amount</code>): trừ tiền bình thường.",
                        "Nếu <strong>không đủ tiền</strong>: tính số tiền thiếu (<code>needs</code>), rồi <code>throw</code> ra <code>NotEnoughFundException</code> kèm thông báo và số tiền thiếu."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-exceptions-bank-test",
              number: "4",
              title: "Chương trình kiểm thử: TestBankAcct.java và Xử lý với try-catch-finally",
              parts: [
                {
                  id: "oop-part-exceptions-bank-test-detail",
                  label: "",
                  title: "Kiểm thử chương trình gửi/rút tiền có try-catch-finally",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "public class TestBankAcct {\n    public static void main(String[] args) {\n        BankAcct acc = new BankAcct(1234, 0.0);\n        System.out.println(\"Current balance: $\" + acc.getBalance());\n        acc.deposit(200.0);\n        System.out.println(\"Current balance: $\" + acc.getBalance());\n        \n        try {\n            System.out.println(\"Withdrawing $150...\");\n            acc.withdraw(150.0);\n            System.out.println(\"Withdrawing $100...\");\n            acc.withdraw(100.0);\n        } catch (NotEnoughFundException e) {\n            System.out.println(e.getMessage());\n            System.out.println(\"Your account is short of $\" + e.getAmount());\n        } finally {\n            System.out.println(\"Current balance: $\" + acc.getBalance());\n        }\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>Giải thích luồng chạy của chương trình:</strong>",
                        "Rút $150 lần đầu: <strong>thành công</strong> (balance đủ 200 ➔ còn 50).",
                        "Rút $100 lần hai: <strong>thất bại</strong> vì chỉ còn $50 ➔ ném <code>NotEnoughFundException</code>.",
                        "Khối <code>catch</code> bắt lỗi, in ra <code>getMessage()</code> (\"withdrawal Unsuccessful\") và <code>getAmount()</code> (số tiền thiếu = 50.0).",
                        "Khối <code>finally</code> <strong>luôn chạy</strong>, in ra số dư hiện tại cuối cùng ($50.0)."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-amber-400 font-mono uppercase tracking-wider\">📌 Ghi nhớ bài thi</summary><p class=\"text-xs text-slate-350 mt-2 leading-relaxed font-normal\">• Ví dụ Bank Account là ví dụ kinh điển thể hiện <strong>toàn bộ quy trình:</strong> định nghĩa exception riêng ➔ throw khi có lỗi nghiệp vụ ➔ try-catch-finally để xử lý.<br/>• Rất dễ ra thi tự luận dạng: cho đoạn code và yêu cầu viết output chính xác từng dòng.</p></details>"
                    },
                    {
                      type: "java-exceptions-bank-simulation"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-exceptions-summary-sec",
          roman: "VIII",
          title: "Tổng kết (Summary)",
          subsections: [
            {
              id: "oop-sub-exceptions-summary-all",
              number: "1",
              title: "Tóm tắt chương học",
              parts: [
                {
                  id: "oop-part-exceptions-summary-all-detail",
                  label: "",
                  title: "Tóm tắt các kiến thức cốt lõi",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Đã học về <strong>Exception</strong>: cách <strong>báo hiệu (raise/throw)</strong> và <strong>xử lý (handle)</strong> ngoại lệ.",
                        "Đã học cách <strong>định nghĩa lớp Exception mới</strong> (custom exception)."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Ghi nhớ tổng thế toàn bài:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Phân biệt <code>throw</code> (ném 1 đối tượng) vs <code>throws</code> (khai báo trong signature của phương thức).",
                        "Cấu trúc <code>try-catch-finally</code>: khối <code>finally</code> luôn luôn được thực thi.",
                        "Phân biệt <strong>Checked exception</strong> (bắt buộc xử lý, kiểm tra lúc compile) vs <strong>Unchecked exception</strong> (RuntimeException, Error và lớp con – không bắt buộc xử lý cưỡng chế).",
                        "Muốn tạo Exception riêng: <code>extends Exception</code> (Checked) hoặc <code>extends RuntimeException</code> (Unchecked) + gọi <code>super(s)</code> trong constructor.",
                        "Luồng thực thi: khi exception xảy ra trong <code>try</code>, các dòng code <strong>sau đó trong try bị bỏ qua ngay lập tức</strong>, nhảy thẳng tới <code>catch</code> phù hợp."
                      ]
                    },
                    {
                      type: "java-exceptions-summary-mindmap"
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
      id: "oop-file",
      title: "Bài 12",
      subtitle: "File I/O",
            sections: [
        {
          id: "oop-file-goals-sec",
          roman: "",
          title: "Mục tiêu bài học (Objectives)",
          subsections: [
            {
              id: "oop-sub-file-goals",
              number: "",
              title: "Mục tiêu học tập chính",
              parts: [
                {
                  id: "oop-part-file-goals",
                  label: "",
                  title: "Mục tiêu bài học",
                  content: [
                    {
                      type: "java-oop-file-goals-explorer"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-stream-overview-sec",
          roman: "I",
          title: "Tổng quan về Stream Classes",
          subsections: [
            {
              id: "oop-sub-file-streams-concept",
              number: "1",
              title: "Khái niệm Stream (luồng)",
              parts: [
                {
                  id: "oop-part-file-streams-concept-detail",
                  label: "",
                  title: "Khái niệm và thuật ngữ",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Java làm việc với <strong>stream</strong> dữ liệu.",
                        "<strong>Stream:</strong> một chuỗi (sequence) dữ liệu — thực thể logic tạo ra (produce) hoặc tiêu thụ (consume) thông tin.",
                        "<strong>Data stream:</strong> kênh truyền dữ liệu từ nguồn (source) đến đích (destination).",
                        "Nguồn/đích có thể là: thiết bị nhập/xuất, thiết bị lưu trữ, hoặc máy tính trên mạng."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-file-streams-phys",
              number: "2",
              title: "Đọc tệp tin vật lý",
              parts: [
                {
                  id: "oop-part-file-streams-phys-detail",
                  label: "",
                  title: "Các loại luồng đọc tệp vật lý",
                  content: [
                    {
                      type: "paragraph",
                      text: "Có thể dùng nhiều loại stream khác nhau để đọc file vật lý, ví dụ: <code>FileInputStream</code> hoặc <code>FileReader</code>."
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-file-streams-std",
              number: "3",
              title: "Luồng nhập/xuất tiêu chuẩn",
              parts: [
                {
                  id: "oop-part-file-streams-std-detail",
                  label: "",
                  title: "Cổng I/O chuẩn trong lớp System",
                  content: [
                    {
                      type: "paragraph",
                      text: "Được đại diện bởi 3 field của lớp <code>System</code>:"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>in:</strong> Standard input stream — đọc dữ liệu ký tự nhập vào.",
                        "<strong>out:</strong> Standard output stream — hiển thị output ra màn hình/thiết bị khác.",
                        "<strong>err:</strong> Standard error stream — dùng cho thông báo lỗi."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">💡 Ghi nhớ cổng chuẩn</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• <code>System.in</code>, <code>System.out</code>, <code>System.err</code> là 3 stream chuẩn có sẵn, không cần khai báo.<br/>• Rất dễ nhầm: <code>in</code> dùng để đọc, <code>out</code>/<code>err</code> dùng để ghi.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-file-stream-need-all",
              number: "4",
              title: "Nhu cầu sử dụng Stream",
              parts: [
                {
                  id: "oop-part-file-stream-need-desc",
                  label: "",
                  title: "Tại sao cần dùng lớp luồng?",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Trong Java, <strong>stream là bắt buộc</strong> để thực hiện mọi thao tác I/O (Input/Output).",
                        "Giúp chuẩn hóa cách tương tác với hệ thống tệp và thiết bị mà không cần quan tâm sâu đến phần cứng bên dưới."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-file-stream-steps-all",
              number: "5",
              title: "Quy trình sử dụng",
              parts: [
                {
                  id: "oop-part-file-stream-steps-desc",
                  label: "",
                  title: "Các bước và cấu trúc kế thừa",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<code>InputStream</code> và <code>OutputStream</code> là các <strong>abstract class (lớp trừu tượng)</strong>, dùng để đọc/ghi chuỗi byte không có cấu trúc.",
                        "Các stream input/output khác là <strong>subclass (lớp con)</strong> của lớp Input/Output cơ bản, dùng để đọc/ghi file.",
                        "Các loại byte stream khác nhau có thể dùng thay thế lẫn nhau vì cùng kế thừa cấu trúc của lớp Input/Output Stream.",
                        "Để đọc hoặc ghi byte, phải dùng một <strong>subclass</strong> của <code>InputStream</code> hoặc <code>OutputStream</code> tương ứng."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ nhanh thi cử</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• <strong>Khái niệm:</strong> InputStream/OutputStream là lớp trừu tượng gốc cho việc đọc/ghi byte.<br/>• <strong>Mục đích:</strong> Chuẩn hóa cách đọc/ghi dữ liệu bất kể nguồn/đích.<br/>• <strong>Điểm dễ thi:</strong> InputStream/OutputStream là abstract class, không thể khởi tạo trực tiếp (ví dụ: <code>new InputStream()</code> là sai compile) ➔ phải dùng lớp con.</p></details>"
                    },
                    {
                      type: "java-oop-file-streams-io"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-package-java-io-concept",
              number: "6",
              title: "Package java.io",
              parts: [
                {
                  id: "oop-part-package-java-io-concept-detail",
                  label: "",
                  title: "Khái niệm luồng cốt lõi",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Stream</strong> đại diện cho nhiều nguồn/đích khác nhau: file đĩa, mảng bộ nhớ...",
                        "Là một <strong>chuỗi dữ liệu (sequence of data)</strong>.",
                        "<strong>I/O Stream:</strong> đại diện cho nguồn nhập (input source) hoặc đích xuất (output destination).",
                        "Stream hỗ trợ nhiều dạng dữ liệu: byte đơn giản, kiểu dữ liệu nguyên thủy, ký tự bản địa hóa (localized characters)...",
                        "Một số stream chỉ <strong>truyền (pass)</strong> dữ liệu, một số <strong>biến đổi (transform)</strong> dữ liệu.",
                        "Dù khác nhau, tất cả stream đều cung cấp <strong>mô hình đơn giản</strong> cho chương trình sử dụng.",
                        "Chương trình dùng <strong>input stream</strong> để đọc dữ liệu từ nguồn — đọc <strong>từng phần tử một lúc</strong> (one item at a time)."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-package-java-io-model-detail",
                  label: "",
                  title: "Mô hình luồng Input và Output",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Input Stream Model:</strong> Program (chương trình) ➔ đọc dữ liệu ➔ Input Stream ➔ lấy dữ liệu từ Source (nguồn). Dữ liệu đi theo chiều: Source ➔ Input Stream ➔ Program.",
                        "<strong>Output Stream Model:</strong> Program (chương trình) ➔ ghi dữ liệu ➔ Output Stream ➔ đưa dữ liệu tới Destination (đích). Dữ liệu đi theo chiều: Program ➔ Output Stream ➔ Destination.",
                        "💡 <em>Giải thích thêm:</em> Đây là mô hình trừu tượng nền tảng của mọi I/O trong Java — chương trình không thao tác trực tiếp với nguồn/đích mà luôn thông qua \"trung gian\" là stream."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-package-java-io-byte-stream-detail",
                  label: "",
                  title: "Lớp FileInputStream và FileOutputStream",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "import java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\n\npublic class ByteStreamApp {\n    public static void main(String[] args) throws IOException {\n        FileInputStream inObj = null;\n        FileOutputStream outObj = null;\n        try {\n            inObj = new FileInputStream(\"c:/java/hello.txt\");\n            outObj = new FileOutputStream(\"outagain.txt\");\n            int ch;\n            while ((ch = inObj.read()) != -1) {\n                outObj.write(ch);\n            }\n        } finally {\n            if (inObj != null) { inObj.close(); }\n            if (outObj != null) { outObj.close(); }\n        }\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>throws IOException</code>: phương thức <code>main</code> khai báo có thể ném ngoại lệ <code>IOException</code> — bắt buộc với các thao tác I/O.",
                        "<code>read()</code>: đọc một ký tự (byte), trả về giá trị <code>int</code>; khi hết stream trả về <code>-1</code> (đây là dấu hiệu kết thúc).",
                        "<code>while ((ch = inObj.read()) != -1)</code>: vòng lặp đọc từng byte cho đến khi hết file.",
                        "<code>finally { ... close(); }</code>: đảm bảo <strong>luôn đóng stream</strong> dù có lỗi hay không — tránh rò rỉ tài nguyên (resource leak)."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">💡 Cần lưu ý khi đi thi</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• <code>read()</code> trả về <code>int</code> chứ không phải <code>char</code> / <code>byte</code> — vì cần thêm giá trị <code>-1</code> để báo hết file (byte thường chỉ từ 0-255).<br/>• Luôn đóng stream trong khối <code>finally</code> — đây là điểm cực kỳ hay ra thi.</p></details>"
                    }
                  ]
                },
                {
                  id: "oop-part-package-java-io-char-stream-detail",
                  label: "",
                  title: "Lớp FileReader và FileWriter",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Chương trình dùng <strong>character stream</strong> thích ứng với bộ ký tự địa phương (local character set), sẵn sàng cho <strong>quốc tế hóa (internationalization)</strong>.",
                        "Tất cả lớp <strong>character stream</strong> đều kế thừa từ <strong>Reader</strong> và <strong>Writer</strong>.",
                        "Có các lớp chuyên cho I/O file: <strong>FileReader</strong> và <strong>FileWriter</strong>.",
                        "<strong>Character stream</strong> đóng vai trò như <strong>wrapper (lớp bọc)</strong> cho <strong>byte stream</strong>: quản lý việc chuyển đổi giữa ký tự và byte, đồng thời dùng byte stream để thực hiện I/O vật lý thực sự."
                      ]
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "import java.io.FileReader;\nimport java.io.FileWriter;\nimport java.io.IOException;\n\npublic class CharStreamApp {\n    public static void main(String[] args) throws IOException {\n        FileReader inObjStream = null;\n        FileWriter outObjStream = null;\n        try {\n            inObjStream = new FileReader(\"c:/java/hello.txt\");\n            outObjStream = new FileWriter(\"charoutputagain.txt\");\n            int ch;\n            while ((ch = inObjStream.read()) != -1) {\n                outObjStream.write(ch);\n            }\n        } finally {\n            if (inObjStream != null) { inObjStream.close(); }\n        }\n    }\n}"
                    }
                  ]
                },
                {
                  id: "oop-part-package-java-io-line-term-detail",
                  label: "",
                  title: "Ký tự kết thúc dòng trên các OS",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "I/O ký tự thường xử lý theo <strong>đơn vị lớn hơn 1 ký tự</strong>, ví dụ 1 dòng (line) — chuỗi ký tự kết thúc bằng dấu xuống dòng.",
                        "Các dạng <strong>line terminator</strong>:<br/>• Carriage-return/line-feed: <code>\"\\r\\n\"</code><br/>• Carriage-return đơn: <code>\"\\r\"</code><br/>• Line-feed đơn: <code>\"\\n\"</code>",
                        "<code>BufferedReader.readLine()</code> và <code>PrintWriter.println()</code> (hoặc <code>BufferedWriter</code>) dùng để đọc/ghi từng dòng.",
                        "<code>readLine()</code>: trả về một dòng văn bản (không gồm dấu xuống dòng).",
                        "<code>println()</code>: xuất mỗi dòng, tự thêm ký tự kết thúc dòng phù hợp với hệ điều hành đang chạy."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ nhanh thi cử</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• <strong>Khái niệm:</strong> Byte Stream đọc/ghi từng byte thô; Character Stream đọc/ghi ký tự (Unicode 2-byte), có chuyển đổi mã hóa.<br/>• <strong>Mục đích:</strong> Byte Stream cho dữ liệu nhị phân (ảnh, âm thanh...); Character Stream cho văn bản, hỗ trợ đa ngôn ngữ.<br/>• <strong>Cú pháp Java:</strong> <code>FileInputStream</code> / <code>FileOutputStream</code> (byte) vs <code>FileReader</code> / <code>FileWriter</code> (character).<br/>• <strong>Ví dụ thực tế:</strong> Đọc file <code>.txt</code> tiếng Việt nên dùng <code>FileReader</code> để không lỗi font.<br/>• <strong>Điểm dễ thi:</strong> Character stream wrap (bọc) byte stream bên dưới — không phải hai cơ chế tách biệt hoàn toàn.</p></details>"
                    },
                    {
                      type: "java-oop-file-package-explorer"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-file-class-group-sec",
          roman: "II",
          title: "Lớp File và FileDescriptor",
          subsections: [
            {
              id: "oop-sub-file-class-concept",
              number: "1",
              title: "Khái niệm & Pathname",
              parts: [
                {
                  id: "oop-part-file-class-concept-detail",
                  label: "",
                  title: "Làm việc với siêu dữ liệu tệp",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>File class:</strong> làm việc trực tiếp với file và hệ thống file (file system).",
                        "Tên file tuân theo quy ước đặt tên file của hệ điều hành, được đóng gói (encapsulate) trong các hằng số của lớp File.",
                        "<strong>Pathname (đường dẫn)</strong> có thể là:<br/>• <strong>Absolute pathname (đường dẫn tuyệt đối):</strong> đầy đủ, không cần thông tin nào khác để định vị file.<br/>• <strong>Relative pathname (đường dẫn tương đối):</strong> cần thông tin từ một pathname khác để xác định vị trí.",
                        "Package <code>java.io</code> phân giải (resolve) đường dẫn tương đối dựa vào thư mục người dùng hiện tại (<code>user.dir</code> — system property)."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-file-class-methods",
              number: "2",
              title: "Phương thức thư mục & constructor",
              parts: [
                {
                  id: "oop-part-file-class-methods-detail",
                  label: "",
                  title: "Các constructor và phương thức cơ bản",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Các <strong>method</strong> thao tác thư mục trong lớp File: tạo, xóa, đổi tên, liệt kê thư mục.",
                        "Package <code>java.nio.file</code> hỗ trợ JVM truy cập file, hệ thống file và thuộc tính file.",
                        "<code>toPath()</code>: lấy đối tượng Path dùng đường dẫn tương đối/tuyệt đối."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Các constructor của lớp File:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "File(String dirpath)\nFile(String parent, String child)\nFile(File fileobj, String filename)\nFile(URL urlobj)"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">💡 Ghi nhớ nhanh</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• Phân biệt absolute vs relative pathname ➔ rất dễ ra trong đề thi.<br/>• Lớp File **không đọc/ghi nội dung file**, chỉ thao tác với thông tin/metadata của file (tên, đường dẫn, kích thước, kiểm tra tồn tại...).</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-file-methods-table",
              number: "3",
              title: "Danh sách phương thức lớp File",
              parts: [
                {
                  id: "oop-part-file-methods-table-detail",
                  label: "",
                  title: "Các phương thức metadata của lớp File",
                  content: [
                    {
                      type: "paragraph",
                      text: "Lớp File cung cấp nhiều phương thức để thao tác và kiểm tra trạng thái tệp:"
                    }
                  ]
                },
                {
                  id: "oop-part-file-methods-example-detail",
                  label: "",
                  title: "Ví dụ Hello.txt và bộ lọc phần mở rộng FilenameFilter",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "File fileObj = new File(\"C:/Java/Hello.txt\");\nSystem.out.println(\"Path is: \" + fileObj.getPath());\nSystem.out.println(\"Name is: \" + fileObj.getName());\nSystem.out.println(\"File exists is: \" + fileObj.exists());\nSystem.out.println(\"File is: \" + fileObj.isFile());"
                    },
                    {
                      type: "bullets",
                      items: [
                        "Dòng 1: Tạo đối tượng File trỏ tới <code>C:/Java/Hello.txt</code> (Lưu ý: Chỉ tham chiếu đường dẫn ảo chứ <strong>chưa mở tệp tin vật lý</strong>).",
                        "<code>getPath()</code>: In ra đường dẫn đầy đủ kèm tên file.",
                        "<code>exists()</code>: Trả về <code>true</code> nếu tệp tồn tại trên máy tính thực tế, <code>false</code> nếu không.",
                        "<code>isFile()</code>: Trả về <code>true</code> nếu đó là tệp tin, <code>false</code> nếu là thư mục."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Lọc file theo phần mở rộng (FilenameFilter):</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "import java.io.*;\n\nclass FileFilter implements FilenameFilter {\n    String ext;\n    public FileFilter(String ext) {\n        this.ext = \".\" + ext;\n    }\n    public boolean accept(File dir, String fName) {\n        return fName.endsWith(ext);\n    }\n}\n\npublic class DirList {\n    public static void main(String[] args) {\n        File fileObj = new File(\"d:/resources\");\n        FilenameFilter filterObj = new FileFilter(\"java\");\n        String[] fileName = fileObj.list(filterObj);\n        for (int ctr = 0; ctr < fileName.length; ctr++) {\n            System.out.println(fileName[ctr]);\n        }\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>implements FilenameFilter</code>: Lớp <code>FileFilter</code> hiện thực interface <code>FilenameFilter</code> để lọc tên tệp.",
                        "<code>this.ext = \".\" + ext</code>: Sử dụng <code>this</code> để phân biệt biến thành viên và tham số truyền vào.",
                        "<code>accept(File dir, String fName)</code>: Phương thức bắt buộc phải <code>@Override</code> khi hiện thực interface ➔ trả về <code>true</code> nếu tên tệp kết thúc bằng đuôi mở rộng mong muốn.",
                        "<code>fileObj.list(filterObj)</code>: Liệt kê tên các tệp tin thỏa mãn điều kiện lọc của bộ lọc <code>filterObj</code>."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ lọc tệp</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• <code>FilenameFilter</code> là interface, bắt buộc phải cài đặt phương thức duy nhất là <code>accept()</code>.<br/>• Phương thức <code>list(FilenameFilter)</code> khác với <code>list()</code> không tham số ở chỗ nó chỉ trả về danh sách các tệp tin vượt qua bộ lọc <code>accept()</code>.</p></details>"
                    },
                    {
                      type: "java-oop-file-class-sandbox"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-file-descriptor-concept",
              number: "4",
              title: "Khái niệm FileDescriptor",
              parts: [
                {
                  id: "oop-part-file-descriptor-concept-detail",
                  label: "",
                  title: "Khái niệm cốt lõi",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>FileDescriptor:</strong> cung cấp quyền truy cập vào file descriptor mà hệ điều hành (OS) quản lý khi file/thư mục được truy cập.",
                        "Trong thực tế, file descriptor dùng để tạo <strong>FileInputStream</strong> hoặc <strong>FileOutputStream</strong> chứa nó.",
                        "<strong>Không nên</strong> tự tạo file descriptor trong ứng dụng vì chúng gắn liền với hệ điều hành."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-file-descriptor-syntax-detail",
                  label: "",
                  title: "Cú pháp khai báo trường tĩnh và phương thức",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Field public tĩnh đại diện các cổng luồng chuẩn:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "static final FileDescriptor err\nstatic final FileDescriptor in\nstatic final FileDescriptor out"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Constructor & method cốt lõi:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "FileDescriptor()\nsync()\nvalid()"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-byte-input-group-sec",
          roman: "III",
          title: "Lớp luồng nhập dạng Byte",
          subsections: [
            {
              id: "oop-sub-inputstream-methods-table",
              number: "1",
              title: "Các phương thức của InputStream",
              parts: [
                {
                  id: "oop-part-inputstream-methods-table-detail",
                  label: "",
                  title: "Các phương thức cụ thể",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>read():</strong> Đọc byte tiếp theo, trả về giá trị int (0–255); trả về -1 khi hết file.",
                        "<strong>available():</strong> Trả về số byte có thể đọc mà không bị block (chặn).",
                        "<strong>close():</strong> Đóng input stream, giải phóng tài nguyên hệ thống.",
                        "<strong>mark(int n):</strong> Đánh dấu vị trí hiện tại trong stream, hợp lệ cho đến khi đọc đủ n byte.",
                        "<strong>skip(long n):</strong> Bỏ qua n byte dữ liệu khi đọc.",
                        "<strong>reset():</strong> Đưa con trỏ đọc về vị trí mark đã đặt trước đó."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">💡 Ghi nhớ nhanh thi cử</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• <code>read()</code> là <strong>abstract method</strong> — mọi lớp con của InputStream phải cài đặt (implement) lại.<br/>• <code>mark()</code> phải đi kèm <code>reset()</code> để hoạt động — nếu không gọi <code>mark()</code> trước, <code>reset()</code> sẽ báo lỗi.</p></details>"
                    },
                    {
                      type: "java-oop-inputstream-methods-explorer"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-file-inputstream-concept",
              number: "2",
              title: "FileInputStream Class",
              parts: [
                {
                  id: "oop-part-file-inputstream-concept-detail",
                  label: "",
                  title: "Đặc điểm và cơ chế mở file",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Đối tượng file stream có thể tạo bằng cách truyền: tên file, đối tượng File, hoặc đối tượng <strong>FileDescriptor</strong>.",
                        "<strong>FileInputStream:</strong> dùng để đọc byte từ file.",
                        "Khi đối tượng <strong>FileInputStream</strong> được tạo, file đó cũng được <strong>mở để đọc (opened for reading)</strong> ngay lập tức.",
                        "<strong>FileInputStream</strong> ghi đè (override) tất cả method của <strong>InputStream</strong>, ngoại trừ <code>mark()</code> và <code>reset()</code>.",
                        "Gọi <code>reset()</code> trên FileInputStream sẽ sinh ra <strong>IOException</strong>."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-file-inputstream-constructors-detail",
                  label: "",
                  title: "Các dạng hàm khởi tạo",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "FileInputStream(String sObj)\nFileInputStream(File fObj)\nFileInputStream(FileDescriptor fdObj)"
                    }
                  ]
                },
                {
                  id: "oop-part-file-inputstream-example-detail",
                  label: "",
                  title: "Ví dụ tạo FileInputStream và đọc in nội dung",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Cú pháp khởi tạo đối tượng:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "FileInputStream fileName = new FileInputStream(\"Helloworld.txt\");\nFile fName = new File(\"/command.doc\");\nFileInputStream fileObj = new FileInputStream(fName);"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Đoạn code đọc file và in nội dung ra màn hình:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "import java.io.FileInputStream;\nimport java.io.IOException;\n\npublic class FISream {\n    public static void main(String argv[]) {\n        try {\n            FileInputStream intest;\n            intest = new FileInputStream(\"D:/resources/Client.java\");\n            int ch;\n            while ((ch = intest.read()) > -1) {\n                StringBuffer buf = new StringBuffer();\n                buf.append((char) ch);\n                System.out.print(buf.toString());\n            }\n        } catch (IOException e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>(char) ch</code>: ép kiểu (cast) giá trị <code>int</code> đọc được về <code>char</code> để hiển thị đúng ký tự.",
                        "<code>catch (IOException e)</code>: bắt lỗi nếu file không tồn tại hoặc lỗi khi đọc; <code>e.getMessage()</code> lấy nội dung thông báo lỗi."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">💡 Cần lưu ý khi đi thi</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• FileInputStream <strong>không hỗ trợ</strong> <code>mark()</code> / <code>reset()</code> — khác với InputStream cơ sở, đây là điểm rất hay gây nhầm lẫn.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-bytearray-inputstream-concept",
              number: "3",
              title: "ByteArrayInputStream Class",
              parts: [
                {
                  id: "oop-part-bytearray-inputstream-concept-detail",
                  label: "",
                  title: "Làm việc với bộ đệm bộ nhớ",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Chứa một <strong>buffer (bộ đệm)</strong> lưu các byte được đọc từ stream.",
                        "Dùng <strong>mảng byte (byte array)</strong> làm nguồn dữ liệu (source).",
                        "Có <strong>bộ đệm nội bộ (internal counter)</strong> theo dõi byte tiếp theo cần đọc.",
                        "<strong>Không hỗ trợ method mới</strong> — chỉ <strong>override</strong> lại các method của InputStream: <code>read()</code>, <code>skip()</code>, <code>available()</code>, <code>reset()</code>."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-bytearray-inputstream-fields-detail",
                  label: "",
                  title: "Các trường biến bảo vệ bên trong",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>protected byte[] buf:</strong> Mảng byte do người tạo stream cung cấp.",
                        "<strong>protected int count:</strong> Chỉ số lớn hơn ký tự hợp lệ cuối cùng trong buffer.",
                        "<strong>protected int mark:</strong> Vị trí đang được đánh dấu (mark) trong stream.",
                        "<strong>protected int pos:</strong> Chỉ số của ký tự tiếp theo cần đọc từ buffer."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-bytearray-inputstream-methods-detail",
                  label: "",
                  title: "Mã nguồn và giải thích hoạt động trên RAM",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Các constructor phổ biến:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "ByteArrayInputStream(byte[] b)\nByteArrayInputStream(byte[] b, int start, int num)"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Đoạn code minh họa:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "String content = \"Hello World\";\nbyte[] bObj = content.getBytes();\nByteArrayInputStream inputByte = new ByteArrayInputStream(bObj);"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>content.getBytes()</code>: chuyển String thành mảng byte[] (theo bảng mã mặc định).",
                        "<code>new ByteArrayInputStream(bObj)</code>: tạo stream đọc dữ liệu trực tiếp từ mảng byte trong bộ nhớ, không cần file vật lý."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ nhanh</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• <strong>Khái niệm:</strong> ByteArrayInputStream (Luồng nhập từ mảng byte) — đọc dữ liệu từ mảng byte trong RAM thay vì từ file đĩa.<br/>• <strong>Mục đích:</strong> Xử lý dữ liệu nhị phân trong bộ nhớ mà không cần thao tác file thật.<br/>• <strong>Ví dụ thực tế:</strong> Test code đọc dữ liệu mà không cần tạo file thật trên đĩa.<br/>• <strong>Điểm dễ thi:</strong> Không có method mới — chỉ override các method sẵn có của InputStream.</p></details>"
                    },
                    {
                      type: "java-oop-file-and-byte-stream-visualizer"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-byte-output-group-sec",
          roman: "IV",
          title: "Lớp luồng xuất dạng Byte",
          subsections: [
            {
              id: "oop-sub-outputstream-concept",
              number: "1",
              title: "Khái niệm OutputStream",
              parts: [
                {
                  id: "oop-part-outputstream-concept-detail",
                  label: "",
                  title: "Khái niệm luồng xuất (OutputStream)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>OutputStream</strong> là một <strong>abstract class (lớp trừu tượng)</strong>, định nghĩa cách ghi các byte hoặc mảng byte ra <strong>stream (luồng dữ liệu)</strong>.",
                        "<strong>Các lớp con (subclasses):</strong> Hai lớp con tiêu biểu kế thừa từ <code>OutputStream</code> là: <strong>ByteArrayOutputStream</strong> và <strong>FileOutputStream</strong>."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• <code>OutputStream</code> là lớp cha trừu tượng cho việc <strong>ghi dữ liệu dạng byte</strong>.<br/>• Không thể tạo đối tượng (instance) trực tiếp từ <code>OutputStream</code> vì đây là abstract class.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-file-outputstream-features",
              number: "2",
              title: "FileOutputStream Class",
              parts: [
                {
                  id: "oop-part-file-outputstream-features-detail",
                  label: "",
                  title: "Cơ chế hoạt động của FileOutputStream",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Dùng để tạo một đối tượng <strong>OutputStream</strong> để <strong>ghi byte vào file</strong>.",
                        "Việc file có được tạo trước khi mở để ghi hay không <strong>phụ thuộc vào nền tảng (platform)</strong> hệ điều hành bên dưới.",
                        "Một số nền tảng chỉ cho phép <strong>một đối tượng ghi file</strong> mở file đó tại một thời điểm ➔ nếu mở ghi tiếp, <strong>constructor sẽ báo lỗi (fail)</strong>.",
                        "Lỗi ngoại lệ <strong>IOException</strong> chỉ bị ném ra khi mở file ở chế độ <strong>chỉ đọc (read-only)</strong> để ghi."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-file-outputstream-constructors-detail",
                  label: "",
                  title: "Các dạng hàm khởi tạo",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "FileOutputStream(String filename)\nFileOutputStream(File name)\nFileOutputStream(String filename, boolean flag)\nFileOutputStream(File name, boolean flag)"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>filename/name:</strong> Đường dẫn hoặc đối tượng File của tệp tin cần ghi.",
                        "<strong>flag:</strong> nếu truyền <code>true</code> ➔ chế độ <strong>ghi nối tiếp (append)</strong> vào cuối file thay vì ghi đè (overwrite)."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-file-outputstream-example-detail",
                  label: "",
                  title: "Ghi dữ liệu văn bản xuống File",
                  content: [
                    {
                      type: "java-oop-code-explainer",
                      title: "FileOutputStream - Ghi chuỗi văn bản vào file",
                      code: "import java.io.FileOutputStream;\nimport java.io.OutputStream;\n\npublic class WriteFileExample {\n    public static void main(String[] args) {\n        try {\n            String temp = \"One way to get the most out of life is to look upon it as an adventure.\";\n            byte[] bufObj = temp.getBytes();\n            OutputStream fileObj = new FileOutputStream(\"Thought.txt\");\n            fileObj.write(bufObj);\n            fileObj.close();\n        } catch (Exception e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}",
                      language: "java",
                      explanations: {
                        6: "Chuỗi ký tự cần ghi xuống tệp tin.",
                        7: "<code>temp.getBytes()</code>: chuyển đổi đối tượng <strong>String</strong> thành <strong>mảng byte[]</strong> để ghi dưới dạng byte stream.",
                        8: "<code>new FileOutputStream(\"Thought.txt\")</code>: Khởi tạo luồng ghi, mở tệp tin <code>Thought.txt</code> trên đĩa. Nếu tệp tin chưa có, JVM tự tạo mới.",
                        9: "<code>fileObj.write(bufObj)</code>: Ghi toàn bộ mảng byte chứa dữ liệu văn bản vào tệp tin.",
                        10: "<code>fileObj.close()</code>: Đóng luồng ghi để giải phóng tài nguyên hệ thống (file descriptors)."
                      }
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• Luôn gọi <code>close()</code> stream sau khi sử dụng xong để tránh rò rỉ tài nguyên.<br/>• <code>getBytes()</code> là bước bắt buộc để chuyển đổi văn bản String về dạng <code>byte[]</code> thô trước khi ghi.<br/>• FileOutputStream <strong>không tự tạo thư mục cha</strong> nếu đường dẫn chứa thư mục không tồn tại.</p></details>"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">🧠 Ghi nhớ nhanh</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• <strong>Khái niệm:</strong> Lớp dùng để ghi dữ liệu nhị phân/byte vào file.<br/>• <strong>Mục đích:</strong> Xuất dữ liệu nhị phân hoặc văn bản ra file đĩa cứng.<br/>• <strong>Cú pháp Java:</strong> <code>new FileOutputStream(String filename)</code><br/>• <strong>Điểm dễ thi:</strong> Hàm dựng có tham số <code>flag = true</code> dùng để <strong>ghi tiếp (append)</strong> vào cuối tệp tin.</p></details>"
                    },
                    {
                      type: "java-oop-output-stream-visualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-bytearray-outputstream-features",
              number: "3",
              title: "ByteArrayOutputStream Class",
              parts: [
                {
                  id: "oop-part-bytearray-outputstream-features-detail",
                  label: "",
                  title: "Nguyên lý hoạt động trên bộ nhớ đệm",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Tạo một đối tượng <strong>output stream</strong> mà dữ liệu ghi vào sẽ được lưu vào một <strong>mảng byte trong bộ nhớ RAM</strong>.",
                        "Mảng chứa dữ liệu này có khả năng <strong>tự động tăng kích thước (grow)</strong> khi dung lượng ghi vượt quá kích thước hiện tại."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-bytearray-outputstream-constructors-detail",
                  label: "",
                  title: "Hàm khởi tạo ByteArrayOutputStream",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "ByteArrayOutputStream()\nByteArrayOutputStream(int size)"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>ByteArrayOutputStream()</code>: Khởi tạo bộ đệm mặc định (thường là 32 bytes).",
                        "<code>ByteArrayOutputStream(int size)</code>: Thiết lập kích thước ban đầu của bộ đệm là <code>size</code> bytes."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-bytearray-outputstream-example-detail",
                  label: "",
                  title: "Ghi dữ liệu nhị phân trong bộ đệm RAM",
                  content: [
                    {
                      type: "java-oop-code-explainer",
                      title: "ByteArrayOutputStream - Ghi vào bộ nhớ RAM",
                      code: "import java.io.ByteArrayOutputStream;\n\npublic class ByteArrayExample {\n    public static void main(String[] args) {\n        try {\n            String strObj = \"Hello World\";\n            byte[] buf = strObj.getBytes();\n            ByteArrayOutputStream byObj = new ByteArrayOutputStream();\n            byObj.write(buf);\n            System.out.println(\"The string is: \" + byObj.toString());\n        } catch (Exception e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}",
                      language: "java",
                      explanations: {
                        5: "Chuỗi ban đầu cần nạp.",
                        7: "Khởi tạo đối tượng luồng ghi đệm trong RAM với dung lượng mặc định.",
                        8: "<code>byObj.write(buf)</code>: Ghi mảng byte dữ liệu vào mảng đệm nội bộ của stream.",
                        9: "<code>byObj.toString()</code>: Chuyển dữ liệu byte stream trong bộ nhớ RAM thành chuỗi String để in ra."
                      }
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• Khác với <code>FileOutputStream</code>, dữ liệu ghi vào <code>ByteArrayOutputStream</code> được lưu hoàn toàn trên <strong>bộ nhớ (mảng byte trong RAM)</strong>, không tạo file trên đĩa cứng.<br/>• Phương thức <code>toString()</code> được sử dụng phổ biến để trích xuất nhanh dữ liệu dạng văn bản từ bộ đệm.</p></details>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-buffered-filter-group-sec",
          roman: "V",
          title: "Luồng bộ đệm và Luồng lọc",
          subsections: [
            {
              id: "oop-sub-filter-streams-concept",
              number: "1",
              title: "Khái niệm Luồng lọc (Filter)",
              parts: [
                {
                  id: "oop-part-filter-streams-concept-detail",
                  label: "",
                  title: "Mục đích của luồng lọc (Filter Streams)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>FilterInputStream:</strong> cung cấp thêm các chức năng hữu ích cho một input stream khác (được truyền vào qua constructor) để làm nguồn dữ liệu cơ bản.",
                        "<strong>FilterOutputStream:</strong> hoạt động tương tự trên một output stream cơ sở có sẵn.",
                        "Cả hai luồng này đều thực hiện <strong>biến đổi dữ liệu</strong> hoặc <strong>bổ dung thêm tính năng mới</strong> (như tạo bộ đệm đếm dòng, mã hóa) trong quá trình đọc/ghi."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-filter-input-stream-detail",
                  label: "",
                  title: "Phương thức & Cơ chế FilterInputStream",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Ghi đè (<code>override</code>) tất cả phương thức của <code>InputStream</code> và chuyển tiếp yêu cầu đến luồng dữ liệu bên trong.",
                        "Lớp con kế thừa từ FilterInputStream có thể định nghĩa thêm các phương thức và trường (field) bổ sung.",
                        "<strong>Field bảo vệ nội bộ:</strong> <code>protected InputStream in</code> - luồng dữ liệu gốc bị lọc.",
                        "<strong>Constructor:</strong> <code>protected FilterInputStream(InputStream in)</code>"
                      ]
                    },
                    {
                      type: "table",
                      headers: ["Phương thức của FilterInputStream", "Mô tả chức năng"],
                      rows: [
                        ["<code>mark(int readlimit)</code>", "Đánh dấu vị trí hiện tại của luồng đọc."],
                        ["<code>markSupported()</code>", "Kiểm tra xem luồng lọc này có hỗ trợ cơ chế mark/reset hay không."],
                        ["<code>read()</code>", "Đọc một byte dữ liệu tiếp theo từ luồng."],
                        ["<code>available()</code>", "Trả về số lượng byte ước tính có thể đọc mà không bị chặn (block)."],
                        ["<code>close()</code>", "Đóng luồng lọc và giải phóng luồng gốc đi kèm."],
                        ["<code>read(byte[] b)</code>", "Đọc các byte vào mảng byte cung cấp sẵn."],
                        ["<code>reset()</code>", "Đưa con trỏ đọc quay về vị trí được đánh dấu gần nhất."],
                        ["<code>skip(long n)</code>", "Bỏ qua n byte trong luồng đọc."],
                        ["<code>read(byte[] b, int off, int len)</code>", "Đọc tối đa len byte dữ liệu ghi vào mảng bắt đầu từ vị trí off."]
                      ]
                    },
                    {
                      type: "java-oop-code-explainer",
                      title: "FilterInputStream - Sử dụng BufferedInputStream bọc FileInputStream",
                      code: "import java.io.FileInputStream;\nimport java.io.BufferedInputStream;\nimport java.io.FilterInputStream;\nimport java.io.IOException;\n\npublic class FilterInputApplication {\n    public static void main(String[] args) throws Exception {\n        FileInputStream inputObj = null;\n        FilterInputStream filterInputObj = null;\n        try {\n            inputObj = new FileInputStream(\"C:/Java/Hello.txt\");\n            filterInputObj = new BufferedInputStream(inputObj);\n            System.out.println((char) filterInputObj.read());\n            System.out.println((char) filterInputObj.read());\n            filterInputObj.mark(0);\n            System.out.println(\"mark() invoked\");\n            System.out.println((char) filterInputObj.read());\n            System.out.println((char) filterInputObj.read());\n            filterInputObj.reset();\n            System.out.println((char) filterInputObj.read());\n            System.out.println((char) filterInputObj.read());\n        } catch (IOException e) {\n            e.printStackTrace();\n        } finally {\n            if (inputObj != null) inputObj.close();\n            if (filterInputObj != null) filterInputObj.close();\n        }\n    }\n}",
                      language: "java",
                      explanations: {
                        10: "Mở luồng đọc file vật lý tại đường dẫn C:/Java/Hello.txt.",
                        11: "Bọc FileInputStream bên trong luồng lọc BufferedInputStream để kích hoạt bộ đệm RAM và các tính năng như mark/reset.",
                        12: "Đọc ký tự đầu tiên thông qua luồng lọc.",
                        14: "<code>mark(0)</code>: Đánh dấu vị trí đọc hiện tại trong bộ đệm.",
                        18: "<code>reset()</code>: Đưa con trỏ đọc quay lại đúng vị trí đã gọi <code>mark()</code> trước đó.",
                        23: "Giải phóng toàn bộ tài nguyên luồng trong khối <code>finally</code> để đảm bảo an toàn kể cả khi có ngoại lệ xảy ra."
                      }
                    },
                    {
                      type: "definition",
                      term: "Giải thích từ khóa & khái niệm mới:",
                      definition: "• <strong>try/catch/finally:</strong> Khối xử lý ngoại lệ an toàn; khối <code>finally</code> luôn luôn được thực thi để đóng các luồng kết nối IO.<br/>• <strong>throws Exception:</strong> Khai báo phương thức có thể ném ra ngoại lệ, nhường quyền xử lý cho môi trường gọi nó (JVM).<br/>• <strong>mark(int readlimit):</strong> Đánh dấu vị trí hiện tại trong luồng để quay lại sau này bằng <code>reset()</code>."
                    }
                  ]
                },
                {
                  id: "oop-part-filter-output-stream-detail",
                  label: "",
                  title: "Phương thức & Cơ chế FilterOutputStream",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Ghi đè tất cả phương thức của <code>OutputStream</code> và chuyển tiếp các yêu cầu ghi dữ liệu đến luồng xuất bên dưới.",
                        "<strong>Trường bảo vệ nội bộ:</strong> <code>protected OutputStream out</code> - luồng xuất gốc được lọc.",
                        "<strong>Constructor:</strong> <code>FilterOutputStream(OutputStream out)</code>"
                      ]
                    },
                    {
                      type: "java-oop-code-explainer",
                      title: "FilterOutputStream - Sử dụng luồng lọc để xuất và xả dữ liệu",
                      code: "import java.io.FileOutputStream;\nimport java.io.FilterOutputStream;\nimport java.io.OutputStream;\nimport java.io.IOException;\n\npublic class FilterOutputApplication {\n    public static void main(String[] args) throws Exception {\n        OutputStream outputStreamObj = null;\n        FilterOutputStream filterOutputStreamObj = null;\n        try {\n            outputStreamObj = new FileOutputStream(\"C:/Java/test.txt\");\n            filterOutputStreamObj = new FilterOutputStream(outputStreamObj);\n            byte[] bufObj = {81, 82, 83, 84, 85};\n            filterOutputStreamObj.write(bufObj);\n            filterOutputStreamObj.flush();\n        } catch (IOException e) {\n            System.out.print(\"Close() is invoked prior to write()\");\n        } finally {\n            if (outputStreamObj != null) outputStreamObj.close();\n            if (filterOutputStreamObj != null) filterOutputStreamObj.close();\n        }\n    }\n}",
                      language: "java",
                      explanations: {
                        10: "Tạo luồng ghi file vật lý test.txt.",
                        11: "Khởi tạo FilterOutputStream bọc ngoài FileOutputStream.",
                        12: "Mảng byte gồm giá trị ASCII của các ký tự 'Q', 'R', 'S', 'T', 'U'.",
                        13: "Ghi mảng byte này vào luồng lọc.",
                        14: "<code>flush()</code>: Ép buộc toàn bộ dữ liệu đang xếp hàng trong bộ đệm RAM phải ghi ngay ra tệp tin vật lý."
                      }
                    },
                    {
                      type: "definition",
                      term: "Giải thích từ khóa mới:",
                      definition: "• <strong>flush():</strong> Phương thức xả đệm, yêu cầu dữ liệu tạm thời trong RAM được ghi tức thì ra thiết bị lưu trữ vật lý đích."
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• Cả <code>FilterInputStream</code> và <code>FilterOutputStream</code> đều không trực tiếp thao tác ghi/đọc thô — chúng chỉ đóng vai trò là một lớp bọc bổ trợ (wrapper) quanh một luồng khác để cung cấp tính năng mở rộng.<br/>• Cách nhớ đơn giản nhất tránh nhầm lẫn: <strong>Input</strong> là để đọc, <strong>Output</strong> là để ghi.</p></details>"
                    },
                    {
                      type: "java-oop-filter-stream-visualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-buffered-streams-concept",
              number: "2",
              title: "Khái niệm Luồng bộ đệm (Buffered)",
              parts: [
                {
                  id: "oop-part-buffered-streams-concept-detail",
                  label: "",
                  title: "Khái niệm Luồng có bộ đệm",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Buffer (bộ đệm)</strong> là vùng lưu trữ tạm thời cho dữ liệu trong bộ nhớ RAM.",
                        "Lưu trữ dữ liệu vào buffer giúp <strong>tiết kiệm thời gian</strong>, vì dữ liệu được lấy ngay từ buffer nhanh hơn nhiều so với việc phải truy cập lại nguồn/đích vật lý ngoại vi.",
                        "Java dùng <strong>buffered input/output</strong> để tạo một mảng byte làm cache lưu trữ dữ liệu đọc/ghi.",
                        "Giúp chương trình đọc/ghi lượng dữ liệu nhỏ mà <strong>không ảnh hưởng nhiều đến hiệu năng hệ thống</strong>.",
                        "Buffer hỗ trợ các cơ chế điều hướng luồng tiện lợi như: <strong>skip (bỏ qua)</strong>, <strong>mark (đánh dấu)</strong>, <strong>reset (đặt lại)</strong> trên stream.",
                        "Các lớp luồng lọc bộ đệm (buffered filter) hoạt động trên buffer và nằm trung gian giữa chương trình và stream gốc."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• Bộ đệm giúp <strong>tăng hiệu năng</strong> thao tác I/O bằng cách giảm thiểu tối đa số lần truy cập trực tiếp vào nguồn/đích dữ liệu vật lý (như ổ đĩa cứng hoặc kết nối mạng).</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-buffered-inputstream-detail",
              number: "3",
              title: "Lớp BufferedInputStream",
              parts: [
                {
                  id: "oop-part-buffered-inputstream-detail-part",
                  label: "",
                  title: "Nguyên lý BufferedInputStream",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Cho phép <strong>bọc (wrap)</strong> bất kỳ đối tượng <code>InputStream</code> nào thành một <strong>buffered stream</strong>.",
                        "Hoạt động như một <strong>cache cho input</strong> - tạo một mảng byte nội bộ để lưu đệm dữ liệu đọc được nhằm sử dụng cho lần đọc tiếp theo.",
                        "Cách đơn giản nhất để đọc dữ liệu từ luồng đệm là gọi phương thức <code>read()</code>.",
                        "Hỗ trợ các phương thức định vị luồng <code>mark()</code> và <code>reset()</code>; phương thức <code>markSupported()</code> sẽ trả về giá trị <code>true</code>."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Các Constructor của BufferedInputStream:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "BufferedInputStream(InputStream in)\nBufferedInputStream(InputStream in, int size)"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>in</code>: Đối tượng luồng nhập gốc cần bọc đệm.",
                        "<code>size</code>: Thiết lập kích thước tùy chọn cho mảng đệm nội bộ (bytes)."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• Công thức ghi nhớ nhanh: <strong>BufferedInputStream = InputStream + Bộ đệm</strong> giúp chương trình đọc dữ liệu nhanh hơn.</p></details>"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-buffered-outputstream-detail",
              number: "4",
              title: "Lớp BufferedOutputStream",
              parts: [
                {
                  id: "oop-part-buffered-outputstream-detail-part",
                  label: "",
                  title: "Nguyên lý BufferedOutputStream",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Tạo một <strong>buffer (bộ đệm)</strong> dùng cho việc ghi dữ liệu ra output stream.",
                        "Cung cấp hiệu suất hoạt động tương tự như lớp <code>BufferedInputStream</code> đối với thao tác ghi.",
                        "<strong>Ý tưởng cốt lõi:</strong> Thay vì ghi từng byte một trực tiếp ra thiết bị lưu trữ vật lý mỗi khi gọi lệnh ghi, dữ liệu sẽ được <strong>cache (lưu đệm) trong mảng đệm RAM</strong> trước.",
                        "Kế thừa hầu hết các phương thức ghi của <code>OutputStream</code>, ngoại trừ việc ghi đè phương thức <code>flush()</code> để ép buộc ghi dữ liệu từ bộ đệm ra đĩa vật lý."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Các Constructor của BufferedOutputStream:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "BufferedOutputStream(OutputStream os)\nBufferedOutputStream(OutputStream os, int size)"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>os</code>: Đối tượng luồng xuất gốc cần bọc đệm.",
                        "<code>size</code>: Thiết lập kích thước tùy chỉnh cho bộ đệm RAM."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• Đây là điểm thi cực kỳ phổ biến: Hãy luôn gọi phương thức <code>flush()</code> để đảm bảo toàn bộ dữ liệu đang lưu tạm trong buffer RAM được ghi xuống tệp tin đích thật sự.</p></details>"
                    },
                    {
                      type: "java-oop-buffered-stream-visualizer"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-char-streams-group-sec",
          roman: "VI",
          title: "Luồng xử lý ký tự",
          subsections: [
            {
              id: "oop-sub-char-streams-concept",
              number: "1",
              title: "Khái niệm Character Stream",
              parts: [
                {
                  id: "oop-part-char-streams-concept-detail",
                  label: "",
                  title: "Khác biệt Byte Stream vs Character Stream",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Byte Stream:</strong> Xử lý tốt mọi định dạng I/O thô nhưng <strong>ngoại trừ các ký tự Unicode</strong> đa ngôn ngữ.",
                        "<strong>Character Stream:</strong> Cung cấp chức năng chuyên biệt để xử lý I/O hướng ký tự Unicode (16-bit).",
                        "Hỗ trợ đầy đủ chuẩn mã hóa <strong>Unicode</strong> quốc tế giúp chương trình dễ dàng quốc tế hóa (internationalized).",
                        "<strong>Reader</strong> và <strong>Writer</strong> là hai <strong>abstract class</strong> đứng đầu hệ thống phân cấp của luồng ký tự.",
                        "Mọi lớp luồng ký tự con trong java.io đều được kế thừa (derived) từ <code>Reader</code> và <code>Writer</code>."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-reader-class",
              number: "2",
              title: "Reader Class & Writer Class",
              parts: [
                {
                  id: "oop-part-reader-class-detail",
                  label: "",
                  title: "Đặc điểm lớp trừu tượng Reader",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Là <strong>abstract class</strong> dùng để đọc luồng dữ liệu hướng ký tự.",
                        "Các lớp con kế thừa thường ghi đè một số phương thức cơ sở để cải tiến chức năng hoặc tối ưu hiệu năng.",
                        "Tất cả phương thức của lớp này đều có khả năng ném ra ngoại lệ bắt buộc <strong>IOException</strong>.",
                        "Phương thức đọc ký tự <code>read()</code> trả về giá trị số nguyên <code>-1</code> khi luồng đạt tới cuối file (end of file)."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Các Constructor của lớp Reader:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "Reader()\nReader(Object lock)"
                    }
                  ]
                },
                {
                  id: "oop-part-writer-class-detail",
                  label: "",
                  title: "Đặc điểm lớp trừu tượng Writer",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Là <strong>abstract class</strong> định nghĩa luồng ghi ký tự thô ra thiết bị ngoại vi.",
                        "Các phương thức của lớp <code>java.io.Writer</code> hoạt động tương đương với các phương thức ghi của lớp byte stream <code>java.io.OutputStream</code>.",
                        "Mọi phương thức ghi đều ném ra ngoại lệ bắt buộc <strong>IOException</strong> nếu xảy ra lỗi phần cứng hoặc tệp tin."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Các Constructor của lớp Writer:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "Writer()\nWriter(Object lock)"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-printwriter-class",
              number: "3",
              title: "PrintWriter Class & Ví dụ",
              parts: [
                {
                  id: "oop-part-printwriter-class-detail",
                  label: "",
                  title: "Đặc điểm lớp PrintWriter",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Là lớp chuyên biệt hướng ký tự (character-based), rất hữu dụng cho việc hiển thị định dạng đầu ra (console output).",
                        "Cài đặt (<code>implements</code>) toàn bộ các phương thức in định dạng giống như lớp byte stream <code>PrintStream</code>.",
                        "<strong>Điểm khác biệt:</strong> PrintWriter không chứa các phương thức ghi dữ liệu thô dạng byte.",
                        "Có khả năng xử lý đúng đắn các bảng mã ký tự Unicode phức tạp và đa ngôn ngữ.",
                        "Ghi đè phương thức <code>write()</code> của lớp Writer nhưng các phương thức này <strong>không ném ra IOException</strong> trực tiếp.",
                        "Kiểm tra lỗi in ấn bằng cách gọi phương thức chuyên biệt <code>checkError()</code>.",
                        "Hỗ trợ in tất cả các kiểu dữ liệu nguyên thủy (primitive), mảng ký tự, chuỗi ký tự, và đối tượng bằng các phương thức nạp chồng <code>print()</code> và <code>println()</code>.",
                        "Phương thức <code>toString()</code> trả về chuỗi biểu diễn giá trị của đối tượng đang in."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Các Constructor của PrintWriter:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "PrintWriter(OutputStream out)\nPrintWriter(OutputStream out, boolean autoFlush)\nPrintWriter(Writer out)\nPrintWriter(Writer out, boolean autoFlush)"
                    }
                  ]
                },
                {
                  id: "oop-part-printwriter-example-detail",
                  label: "",
                  title: "Lồng ghép các luồng chuyển đổi ký tự",
                  content: [
                    {
                      type: "java-oop-code-explainer",
                      title: "PrintWriter - Đọc ký tự bàn phím và in phản hồi",
                      code: "import java.io.InputStreamReader;\nimport java.io.OutputStreamWriter;\nimport java.io.PrintWriter;\nimport java.io.IOException;\n\npublic class PrintWriterExample {\n    public static void main(String[] args) {\n        InputStreamReader reader = new InputStreamReader(System.in);\n        OutputStreamWriter writer = new OutputStreamWriter(System.out);\n        PrintWriter pwObj = new PrintWriter(writer, true);\n        try {\n            int tmp = 0;\n            char ch;\n            while (tmp != -1) {\n                tmp = reader.read();\n                ch = (char) tmp;\n                pwObj.println(\"echo \" + ch);\n            }\n        } catch (IOException e) {\n            System.out.println(\"IO error: \" + e);\n        }\n    }\n}",
                      language: "java",
                      explanations: {
                        6: "<code>new InputStreamReader(System.in)</code>: chuyển đổi Byte Stream từ bàn phím (System.in) thành Character Stream để xử lý theo ký tự Unicode.",
                        7: "<code>new OutputStreamWriter(System.out)</code>: chuyển đổi luồng ký tự xuất thành Byte Stream tiêu chuẩn để in ra console.",
                        8: "<code>new PrintWriter(writer, true)</code>: Tạo luồng in PrintWriter bọc ngoài Writer, đặt cờ <code>autoFlush = true</code> để tự động đẩy buffer ra màn hình sau mỗi lệnh println().",
                        13: "Vòng lặp đọc từng ký tự từ bàn phím cho đến khi hết luồng (-1).",
                        14: "<code>reader.read()</code>: Đọc một ký tự Unicode tiếp theo.",
                        16: "<code>pwObj.println()</code>: Định dạng và xuất chuỗi phản hồi có xuống dòng."
                      }
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• Phân biệt rõ: Byte stream (InputStream/OutputStream) xử lý các khối <strong>byte</strong> thô; Character stream (Reader/Writer) chuyên xử lý <strong>ký tự Unicode 16-bit</strong>.<br/>• PrintWriter <strong>không ném ngoại lệ IOException trực tiếp</strong>, lập trình viên bắt buộc phải dùng hàm <code>checkError()</code> để kiểm tra trạng thái lỗi.</p></details>"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">🧠 Ghi nhớ nhanh</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• <strong>Khái niệm:</strong> Character Stream — xử lý dữ liệu theo ký tự (2-byte Unicode).<br/>• <strong>Mục đích:</strong> Đọc/ghi văn bản đa ngôn ngữ đạt chuẩn quốc tế.<br/>• <strong>Lớp chính:</strong> <code>Reader</code>, <code>Writer</code>, và <code>PrintWriter</code>.<br/>• <strong>Ví dụ thực tế:</strong> Đọc dữ liệu từ bàn phím tiếng Việt và xuất ra màn hình định dạng.<br/>• <strong>Điểm dễ thi:</strong> Phân biệt sự khác nhau giữa Byte Stream (InputStream/OutputStream) và Character Stream.</p></details>"
                    },
                    {
                      type: "java-oop-character-stream-visualizer"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-char-array-reader-detail",
              number: "4",
              title: "Lớp CharArrayReader",
              parts: [
                {
                  id: "oop-part-char-array-reader-detail-part",
                  label: "",
                  title: "Nguyên lý hoạt động CharArrayReader",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Là lớp con cụ thể (subclass) kế thừa từ lớp trừu tượng <code>Reader</code>.",
                        "Sử dụng một <strong>mảng ký tự (character array)</strong> làm nguồn cấp dữ liệu chính để đọc.",
                        "Cung cấp 2 dạng constructor thiết lập vùng đọc trong mảng ký tự."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Các Constructor của CharArrayReader:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "CharArrayReader(char arr[])\nCharArrayReader(char arr[], int start, int num)"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>arr[]</code>: Mảng ký tự nguồn dữ liệu.",
                        "<code>start</code>: Vị trí bắt đầu đọc trong mảng.",
                        "<code>num</code>: Số lượng ký tự tối đa sẽ đọc tính từ vị trí bắt đầu."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-char-array-reader-example-part",
                  label: "",
                  title: "Đọc dữ liệu từ mảng ký tự RAM",
                  content: [
                    {
                      type: "java-oop-code-explainer",
                      title: "CharArrayReader - Khởi tạo luồng đọc từ mảng char[]",
                      code: "import java.io.CharArrayReader;\n\npublic class CharArrayReaderExample {\n    public static void main(String[] args) {\n        try {\n            String temp = \"Hello World\";\n            int size = temp.length();\n            char[] ch = new char[size];\n            temp.getChars(0, size, ch, 0);\n            CharArrayReader readObj = new CharArrayReader(ch, 0, 5);\n            int i;\n            while ((i = readObj.read()) != -1) {\n                System.out.print((char) i);\n            }\n        } catch (Exception e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}",
                      language: "java",
                      explanations: {
                        8: "<code>temp.getChars(...)</code>: Sao chép toàn bộ ký tự từ đối tượng String vào mảng <code>char[]</code> thô.",
                        9: "<code>new CharArrayReader(ch, 0, 5)</code>: Tạo luồng đọc chỉ đọc 5 ký tự đầu tiên bắt đầu từ vị trí index 0 của mảng ký tự <code>ch</code>.",
                        11: "Vòng lặp đọc ký tự qua phương thức <code>read()</code> đến khi hết dữ liệu (-1) và in ra màn hình."
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-char-array-writer-features",
              number: "5",
              title: "Lớp CharArrayWriter",
              parts: [
                {
                  id: "oop-part-char-array-writer-features-part",
                  label: "",
                  title: "Nguyên lý hoạt động CharArrayWriter",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Là lớp con cụ thể (subclass) kế thừa từ lớp trừu tượng <code>Writer</code>.",
                        "Dùng để tạo một <strong>mảng ký tự trong RAM</strong> làm bộ đệm để ghi dữ liệu văn bản vào.",
                        "Kích thước của mảng ký tự bộ đệm này sẽ <strong>tự động mở rộng</strong> khi dung lượng dữ liệu ghi vào vượt giới hạn hiện tại.",
                        "Cung cấp các phương thức tiện ích để lấy lại dữ liệu như <code>toCharArray()</code>, <code>toString()</code>, và <code>writeTo()</code>.",
                        "Kế thừa toàn bộ các phương thức ghi cơ bản của lớp cha <code>Writer</code>."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-char-array-writer-constructors-part",
                  label: "",
                  title: "Các dạng hàm khởi tạo",
                  content: [
                    {
                      type: "code",
                      language: "java",
                      code: "CharArrayWriter()\nCharArrayWriter(int num)"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>CharArrayWriter()</code>: Khởi tạo bộ đệm ký tự mặc định trong RAM.",
                        "<code>CharArrayWriter(int num)</code>: Khởi tạo bộ đệm với dung lượng ban đầu là <code>num</code> ký tự."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-char-array-writer-example-part",
                  label: "",
                  title: "Ghi ký tự vào mảng RAM bằng CharArrayWriter",
                  content: [
                    {
                      type: "java-oop-code-explainer",
                      title: "CharArrayWriter - Ghi dữ liệu vào mảng đệm",
                      code: "import java.io.CharArrayWriter;\n\npublic class CharArrayWriterExample {\n    public static void main(String[] args) {\n        try {\n            CharArrayWriter fObj = new CharArrayWriter();\n            String temp = \"Hello World\";\n            char[] ch = new char[temp.length()];\n            temp.getChars(0, temp.length(), ch, 0);\n            fObj.write(ch);\n            char[] buffer = fObj.toCharArray();\n            System.out.println(buffer);\n            System.out.println(fObj.toString());\n        } catch (Exception e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}",
                      language: "java",
                      explanations: {
                        5: "Khởi tạo đối tượng luồng ghi bộ đệm ký tự trong RAM.",
                        9: "<code>fObj.write(ch)</code>: Ghi toàn bộ mảng ký tự <code>ch</code> vào bộ đệm của CharArrayWriter.",
                        10: "<code>fObj.toCharArray()</code>: Lấy toàn bộ nội dung ký tự đã ghi dưới dạng mảng <code>char[]</code> mới.",
                        12: "<code>fObj.toString()</code>: Chuyển đổi dữ liệu đã ghi thành chuỗi String tiêu chuẩn."
                      }
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• Cặp lớp <code>CharArrayReader</code> (đọc) và <code>CharArrayWriter</code> (ghi) đóng vai trò tương tự như cặp lớp <code>ByteArrayInputStream</code>/<code>ByteArrayOutputStream</code> nhưng hoạt động trên đơn vị <strong>ký tự (char 16-bit)</strong> thay vì đơn vị byte.</p></details>"
                    },
                    {
                      type: "java-oop-char-array-stream-visualizer"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-chaining-io-group-sec",
          roman: "VII",
          title: "Chuỗi hóa hệ thống I/O",
          subsections: [
            {
              id: "oop-sub-chaining-io-concept",
              number: "1",
              title: "Khái niệm Chaining I/O",
              parts: [
                {
                  id: "oop-part-chaining-io-concept-detail",
                  label: "",
                  title: "Khái niệm nối chuỗi luồng dữ liệu (Chaining)",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "Một chương trình Java thường dùng <strong>một chuỗi các stream nối tiếp nhau</strong> lồng ghép để xử lý dữ liệu phức tạp hiệu quả.",
                        "Kỹ thuật này được gọi là <strong>chaining (nối chuỗi)</strong> - bọc một luồng dữ liệu này bên trong một luồng dữ liệu khác (ví dụ: bọc luồng ghi file trong luồng bộ đệm và luồng mã hóa ký tự)."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<div class=\"bg-gradient-to-r from-indigo-500/10 to-sky-500/10 border-l-4 border-indigo-500 rounded-r-xl p-4 my-3\"><strong class=\"text-xs font-bold text-indigo-650 font-mono uppercase tracking-wider block mb-1\">💡 Giải thích thêm:</strong><p class=\"text-xs text-slate-355 leading-relaxed font-normal\">Đây là ứng dụng thực tế tối ưu của các lớp <strong>Filter Stream</strong> và <strong>Buffered Stream</strong> đã học. Lập trình viên có thể \"xếp chồng\" nhiều bộ lọc lên nhau để luồng vừa có khả năng đọc file, vừa tự tạo bộ đệm RAM để tăng tốc, vừa tự chuyển đổi bảng mã ký tự.</p></div>"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• Nối chuỗi (Chaining) giúp <strong>kết hợp nhiều tính năng độc lập</strong> (như thao tác file thô + đệm RAM + mã hóa Unicode) chỉ bằng cách lồng các constructor của các lớp bọc vào nhau.</p></details>"
                    },
                    {
                      type: "java-oop-chaining-pipeline-builder"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "oop-serialization-group-sec",
          roman: "VIII",
          title: "Tuần tự hóa đối tượng",
          subsections: [
            {
              id: "oop-sub-data-input-output-concept",
              number: "1",
              title: "Interface DataInput & DataOutput",
              parts: [
                {
                  id: "oop-part-data-input-output-concept-detail",
                  label: "",
                  title: "Kiểu dữ liệu nguyên thủy (primitive) và chuỗi",
                  content: [
                    {
                      type: "bullets",
                      items: [
                        "<strong>Data stream</strong> hỗ trợ input/output cho <strong>kiểu dữ liệu nguyên thủy (primitive)</strong> và <strong>chuỗi (string)</strong>.",
                        "Các data stream implement interface <strong>DataInput</strong> hoặc <strong>DataOutput</strong>."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Bảng so sánh chức năng chính của hai Interface:</strong>"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<strong>DataInput:</strong> Đọc byte từ binary stream và chuyển thành kiểu primitive của Java; chuyển dữ liệu từ UTF-8 (Java modified) thành chuỗi.",
                        "<strong>DataOutput:</strong> Chuyển dữ liệu kiểu primitive thành chuỗi byte để ghi vào binary stream; chuyển chuỗi thành UTF-8 để ghi vào stream."
                      ]
                    }
                  ]
                },
                {
                  id: "oop-part-data-input-output-methods-detail",
                  label: "",
                  title: "Các phương thức cụ thể và mã nguồn Java",
                  content: [
                    {
                      type: "paragraph",
                      text: "<strong>Các method chính của DataInput Interface:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "readBoolean()\nreadByte()\nreadInt()\nreadDouble()\nreadChar()\nreadLine()\nreadUTF()"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Đoạn code minh họa cách dùng DataInputStream:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "try {\n    DataInputStream dis = new DataInputStream(System.in);\n    double d = dis.readDouble();\n    int num = dis.readInt();\n} catch (IOException e) {}"
                    },
                    {
                      type: "bullets",
                      items: [
                        "<code>DataInputStream dis = new DataInputStream(System.in)</code>: bọc (wrap) stream chuẩn <code>System.in</code> bằng <code>DataInputStream</code> để đọc kiểu dữ liệu nguyên thủy.",
                        "<code>readDouble()</code>, <code>readInt()</code>: đọc trực tiếp giá trị kiểu <code>double</code>, <code>int</code> từ stream (không cần tự parse chuỗi)."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Các method chính của DataOutput Interface:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "writeBoolean(boolean b)\nwriteByte(int value)\nwriteInt(int value)\nwriteDouble(double value)\nwriteChar(int value)\nwriteChars(String value)\nwriteUTF(String value)"
                    },
                    {
                      type: "paragraph",
                      text: "<strong>Đoạn code minh họa cách dùng DataOutputStream:</strong>"
                    },
                    {
                      type: "code",
                      language: "java",
                      code: "try {\n    outStream.writeBoolean(true);\n    outStream.writeDouble(9.95);\n} catch (IOException e) {}"
                    },
                    {
                      type: "paragraph",
                      text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">💡 Cảnh báo bẫy thi trắc nghiệm</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• <strong>DataInput/DataOutput</strong> là <strong>interface</strong>, không phải class.<br/>• <strong>DataInputStream/DataOutputStream</strong> là <strong>class</strong> hiện thực các interface trên — hay bị nhầm giữa dạng \"Data...Stream\" (class) và \"Data...put\" (interface).</p></details>"
                    },
                    {
                      type: "java-oop-file-descriptor-data-io"
                    }
                  ]
                }
              ]
            },
            {
              id: "oop-sub-serialization-concept",
              number: "2",
              title: "Khái niệm & Quy tắc Serialization",
              parts: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Serialization (Tuần tự hóa)</strong> là quá trình đọc và ghi đối tượng (object) vào <strong>byte stream</strong>.",
                    "Một đối tượng implement <strong>interface Serializable</strong> sẽ được lưu và khôi phục trạng thái thông qua cơ chế serialization/deserialization."
                  ]
                },
                {
                  type: "paragraph",
                  text: "<strong>Các quy tắc chính của Serialization:</strong>"
                },
                {
                  type: "bullets",
                  items: [
                    "Nếu class hoặc superclass của một Java object implement <code>java.io.Serializable</code> (hoặc interface con của nó là <code>java.io.Externalizable</code>) ➔ object đó <strong>có thể serialize</strong>.",
                    "<code>java.io.Serializable</code> là một <strong>marker interface</strong> (không định nghĩa phương thức nào cả) — chỉ đánh dấu rằng class đó được xem xét để serialize.",
                    "Nếu <strong>superclass</strong> là serializable thì các <strong>subclass</strong> cũng tự động serializable.",
                    "<strong>Ngoại lệ:</strong> Các biến khai báo với từ khóa <code>transient</code> và <code>static</code> sẽ <strong>không được lưu</strong> bởi cơ chế serialization.",
                    "<strong>Deserialization:</strong> quá trình chuyển dữ liệu đã serialize trở lại thành bản sao của đối tượng ban đầu."
                  ]
                },
                {
                  type: "paragraph",
                  text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• <code>Serializable</code> là <strong>marker interface</strong>, không có method nào cả.<br/>• Từ khóa <code>transient</code> ➔ loại trừ field đó khỏi quá trình serialize.<br/>• Các trường <code>static</code> cũng không được serialize (vì thuộc về class, không thuộc về instance).</p></details>"
                },
                {
                  type: "paragraph",
                  text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">🧠 Ghi nhớ nhanh</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• <strong>Khái niệm:</strong> Serialization (Tuần tự hóa) — chuyển đổi đối tượng thành byte stream để lưu/truyền.<br/>• <strong>Mục đích:</strong> Lưu trạng thái đối tượng ra file hoặc truyền qua mạng.<br/>• <strong>Cú pháp Java:</strong> <code>class X implements Serializable {}</code><br/>• <strong>Ví dụ thực tế:</strong> Lưu thông tin một đối tượng <code>Employee</code> xuống file để dùng lại sau.<br/>• <strong>Điểm dễ thi:</strong> <code>transient</code> và <code>static</code> field <strong>không</strong> được serialize.</p></details>"
                }
              ]
            },
            {
              id: "oop-sub-object-outputstream-detail",
              number: "3",
              title: "Lớp ObjectOutputStream",
              parts: [
                {
                  type: "bullets",
                  items: [
                    "Kế thừa (extends) lớp <code>OutputStream</code> và implement interface <code>ObjectOutput</code>.",
                    "Chịu trách nhiệm ghi các kiểu dữ liệu nguyên thủy (primitive) và đối tượng (object) ra output stream."
                  ]
                },
                {
                  type: "paragraph",
                  text: "<strong>Các Constructor của ObjectOutputStream:</strong>"
                },
                {
                  type: "code",
                  language: "java",
                  code: "ObjectOutputStream()\nObjectOutputStream(OutputStream out)"
                },
                {
                  type: "paragraph",
                  text: "<strong>Các phương thức chính:</strong>"
                },
                {
                  type: "code",
                  language: "java",
                  code: "writeFloat(float f)\nwriteObject(Object obj)\ndefaultWriteObject()"
                },
                {
                  type: "paragraph",
                  text: "<strong>Ví dụ code ghi đối tượng:</strong>"
                },
                {
                  type: "java-oop-code-explainer",
                  title: "ObjectOutputStream - Ghi đối tượng xuống tệp tin",
                  code: "Point pointObj = new Point(50, 75);\nFileOutputStream fObj = new FileOutputStream(\"point.ser\");\nObjectOutputStream oos = new ObjectOutputStream(fObj);\noos.writeObject(pointObj);\noos.writeObject(new java.util.Date());\noos.close();",
                  language: "java",
                  explanations: {
                    1: "Khởi tạo đối tượng Point cần lưu trữ.",
                    2: "Tạo FileOutputStream trỏ đến tệp tin đích 'point.ser'.",
                    3: "Bọc FileOutputStream bằng ObjectOutputStream để ghi đối tượng.",
                    4: "<code>writeObject(pointObj)</code>: Tuần tự hóa và ghi đối tượng pointObj xuống file.",
                    5: "Ghi thêm một đối tượng Date hiện tại nối tiếp vào luồng."
                  }
                },
                {
                  type: "paragraph",
                  text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• <code>writeObject()</code> là phương thức quan trọng nhất cần nhớ khi làm bài về serialization để ghi đối tượng xuống file.</p></details>"
                }
              ]
            },
            {
              id: "oop-sub-object-inputstream-detail",
              number: "4",
              title: "Lớp ObjectInputStream",
              parts: [
                {
                  type: "bullets",
                  items: [
                    "Kế thừa lớp <code>InputStream</code> và implement interface <code>ObjectInput</code>.",
                    "<code>ObjectInput</code> kế thừa từ <code>DataInput</code>, có các phương thức hỗ trợ object serialization.",
                    "Chịu trách nhiệm đọc lại instance của đối tượng và các kiểu primitive từ input stream.",
                    "Phương thức <code>readObject()</code> khôi phục đối tượng gồm các trường non-static và non-transient."
                  ]
                },
                {
                  type: "paragraph",
                  text: "<strong>Các Constructor của ObjectInputStream:</strong>"
                },
                {
                  type: "code",
                  language: "java",
                  code: "ObjectInputStream()\nObjectInputStream(InputStream in)"
                },
                {
                  type: "paragraph",
                  text: "<strong>Các phương thức chính:</strong>"
                },
                {
                  type: "code",
                  language: "java",
                  code: "readFloat()    readBoolean()    readByte()\nreadChar()     readObject()"
                },
                {
                  type: "paragraph",
                  text: "<strong>Ví dụ code 1 - Đọc đối tượng Point:</strong>"
                },
                {
                  type: "java-oop-code-explainer",
                  title: "ObjectInputStream - Đọc và khôi phục đối tượng",
                  code: "FileInputStream fObj = new FileInputStream(\"point.ser\");\nObjectInputStream ois = new ObjectInputStream(fObj);\nPoint obj = (Point) ois.readObject();\nois.close();",
                  language: "java",
                  explanations: {
                    1: "Mở FileInputStream đọc từ tệp tin 'point.ser'.",
                    2: "Tạo ObjectInputStream bọc ngoài file input stream.",
                    3: "<code>readObject()</code>: Đọc dữ liệu, giải tuần tự hóa và ép kiểu (cast) về đúng lớp Point ban đầu."
                  }
                },
                {
                  type: "definition",
                  term: "Lưu ý quan trọng:",
                  definition: "• ObjectInputStream dùng để deserialize một đối tượng.<br/>• Đối tượng cần deserialize phải được tạo ra trước đó bằng ObjectOutputStream."
                },
                {
                  type: "paragraph",
                  text: "<strong>Ví dụ code 2 - Minh họa đầy đủ luồng đối tượng Employee:</strong>"
                },
                {
                  type: "java-oop-code-explainer",
                  title: "BranchEmpProcessor - Ghi/Đọc đối tượng Employee hoàn chỉnh",
                  code: "import java.io.*;\n\nclass Employee implements Serializable {\n    String lastName;\n    String firstName;\n    double sal;\n}\n\npublic class BranchEmpProcessor {\n    public static void main(String[] args) {\n        FileOutputStream fOut = null;\n        ObjectOutputStream oOut = null;\n        FileInputStream fIn = null;\n        ObjectInputStream oIn = null;\n        try {\n            fOut = new FileOutputStream(\"employee.ser\");\n            oOut = new ObjectOutputStream(fOut);\n            Employee e = new Employee();\n            e.lastName = \"Smith\";\n            e.firstName = \"John\";\n            e.sal = 5000.00;\n            oOut.writeObject(e);\n            oOut.close();\n            fOut.close();\n\n            fIn = new FileInputStream(\"employee.ser\");\n            oIn = new ObjectInputStream(fIn);\n            Employee emp = (Employee) oIn.readObject();\n            System.out.println(\"Deserialized - \" + emp.firstName + \" \" + emp.lastName);\n        } catch (IOException e1) {\n            e1.printStackTrace();\n        } catch (ClassNotFoundException e2) {\n            e2.printStackTrace();\n        } finally {\n            System.out.println(\"finally\");\n        }\n    }\n}",
                  language: "java",
                  explanations: {
                    3: "Khai báo lớp Employee implement interface Serializable để đánh dấu có thể tuần tự hóa.",
                    16: "Khởi tạo luồng ghi đối tượng ra tệp tin 'employee.ser'.",
                    20: "Ghi đối tượng Employee xuống file thông qua <code>oOut.writeObject(e)</code>.",
                    26: "Khởi tạo luồng đọc đối tượng từ tệp tin 'employee.ser'.",
                    28: "Đọc đối tượng và ép kiểu về Employee.",
                    30: "Bắt ngoại lệ IOException nếu gặp lỗi đọc ghi file.",
                    32: "Bắt ngoại lệ ClassNotFoundException nếu lớp đối tượng không tồn tại khi nạp lại.",
                    34: "Khối <code>finally</code> luôn chạy để in thông báo hoặc dọn dẹp tài nguyên."
                  }
                },
                {
                  type: "definition",
                  term: "Giải thích từ khóa mới:",
                  definition: "• <strong>implements Serializable:</strong> Đánh dấu class Employee có thể tuần tự hóa.<br/>• <strong>ClassNotFoundException:</strong> Ngoại lệ xảy ra khi JVM không tìm thấy định nghĩa class của đối tượng đang giải tuần tự hóa.<br/>• <strong>finally:</strong> Khối luôn thực thi, dùng để đóng luồng hoặc dọn tài nguyên."
                },
                {
                  type: "paragraph",
                  text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• Khi deserialize, cần bắt cả <code>IOException</code> lẫn <code>ClassNotFoundException</code>.<br/>• Phải ép kiểu (cast) kết quả của <code>readObject()</code> về đúng lớp mong muốn.<br/>• Các trường đối tượng nằm bên trong class cũng phải implement Serializable thì mới serialize đầy đủ được.</p></details>"
                },
                {
                  type: "paragraph",
                  text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">🧠 Ghi nhớ nhanh</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• <strong>Khái niệm:</strong> ObjectInputStream/ObjectOutputStream — đọc/ghi đối tượng dưới dạng byte stream.<br/>• <strong>Mục đích:</strong> Lưu và khôi phục toàn bộ trạng thái của đối tượng.<br/>• <strong>Cú pháp:</strong> <code>writeObject(obj)</code> và <code>(Type) ois.readObject()</code>.<br/>• <strong>Mẹo đi thi:</strong> Bắt buộc phải catch <code>ClassNotFoundException</code> khi deserialize, và cần ép kiểu đúng class mong muốn.</p></details>"
                },
                {
                  type: "java-oop-serialization-visualizer"
                }
              ]
            }
          ]
        },
        {
          id: "oop-file-summary-group-sec",
          roman: "IX",
          title: "Tổng kết (Summary)",
          subsections: [
            {
              id: "oop-sub-file-summary",
              number: "1",
              title: "Tổng kết chương",
              parts: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Stream</strong> là một thực thể logic dùng để sản xuất (produce) hoặc tiêu thụ (consume) thông tin.",
                    "<strong>Data stream</strong> hỗ trợ input/output cho các kiểu dữ liệu nguyên thủy (primitive) và giá trị String.",
                    "<strong>InputStream</strong> là abstract class định nghĩa cách nhận dữ liệu.",
                    "<strong>OutputStream</strong> là abstract class định nghĩa cách ghi dữ liệu ra stream.",
                    "<strong>File class</strong> làm việc trực tiếp với tệp tin trên hệ thống tập tin vật lý.",
                    "<strong>Buffer</strong> là vùng lưu trữ tạm thời trong RAM cho dữ liệu.",
                    "<strong>Serialization</strong> là quá trình đọc và ghi đối tượng vào byte stream."
                  ]
                },
                {
                  type: "paragraph",
                  text: "<details class=\"bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 cursor-pointer select-none\"><summary class=\"text-xs font-bold text-sky-600 font-mono uppercase tracking-wider\">📌 Ghi nhớ (Tổng kết)</summary><p class=\"text-xs text-slate-355 mt-2 leading-relaxed font-normal\">• Phân biệt rõ: Byte Stream (InputStream/OutputStream) vs Character Stream (Reader/Writer).<br/>• Buffered Stream giúp tăng hiệu năng nhờ cơ chế cache RAM.<br/>• Serialization gắn liền với <code>Serializable</code>, <code>transient</code>, <code>writeObject()</code>, <code>readObject()</code>.</p></details>"
                },
                {
                  type: "java-oop-file-io-summary-mindmap"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "oop-nested-class",
      title: "Bài 13",
      subtitle: "Nested Class",
      sections: [
        {
          id: "oop-nested-class-sec",
          roman: "",
          title: "Nội dung bài học",
          subsections: [
            {
              id: "oop-sub-nested-class",
              number: "",
              title: "Bài giảng chi tiết",
              parts: [
                {
                  id: "oop-part-nested-class",
                  label: "",
                  title: "Nội dung chi tiết",
                  content: [
                    {
                      type: "paragraph",
                      text: "Nội dung bài học đang được cập nhật..."
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
      id: "oop-design-pattern",
      title: "Bài 14 & 15",
      subtitle: "Design Patterns",
      sections: [
        {
          id: "oop-design-pattern-sec",
          roman: "",
          title: "Nội dung bài học",
          subsections: [
            {
              id: "oop-sub-design-pattern",
              number: "",
              title: "Bài giảng chi tiết",
              parts: [
                {
                  id: "oop-part-design-pattern",
                  label: "",
                  title: "Nội dung chi tiết",
                  content: [
                    {
                      type: "paragraph",
                      text: "Nội dung bài học đang được cập nhật..."
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
