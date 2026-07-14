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
          id: "oop-stringbuffer-stringbuilder-sec",
          roman: "",
          title: "Nội dung bài học",
          subsections: [
            {
              id: "oop-sub-stringbuffer-stringbuilder",
              number: "",
              title: "Bài giảng chi tiết",
              parts: [
                {
                  id: "oop-part-stringbuffer-stringbuilder",
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
          id: "oop-encapsulation-modifier-sec",
          roman: "",
          title: "Nội dung bài học",
          subsections: [
            {
              id: "oop-sub-encapsulation-modifier",
              number: "",
              title: "Bài giảng chi tiết",
              parts: [
                {
                  id: "oop-part-encapsulation-modifier",
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
      id: "oop-inheritance",
      title: "Bài 6 & 7",
      subtitle: "Inheritance",
      sections: [
        {
          id: "oop-inheritance-sec",
          roman: "",
          title: "Nội dung bài học",
          subsections: [
            {
              id: "oop-sub-inheritance",
              number: "",
              title: "Bài giảng chi tiết",
              parts: [
                {
                  id: "oop-part-inheritance",
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
      id: "oop-abstract-class",
      title: "Bài 8",
      subtitle: "Abstract Class",
      sections: [
        {
          id: "oop-abstract-class-sec",
          roman: "",
          title: "Nội dung bài học",
          subsections: [
            {
              id: "oop-sub-abstract-class",
              number: "",
              title: "Bài giảng chi tiết",
              parts: [
                {
                  id: "oop-part-abstract-class",
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
      id: "oop-interface",
      title: "Bài 9",
      subtitle: "Interface",
      sections: [
        {
          id: "oop-interface-sec",
          roman: "",
          title: "Nội dung bài học",
          subsections: [
            {
              id: "oop-sub-interface",
              number: "",
              title: "Bài giảng chi tiết",
              parts: [
                {
                  id: "oop-part-interface",
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
      id: "oop-collection-of-data",
      title: "Bài 10",
      subtitle: "Collection of Data",
      sections: [
        {
          id: "oop-collection-of-data-sec",
          roman: "",
          title: "Nội dung bài học",
          subsections: [
            {
              id: "oop-sub-collection-of-data",
              number: "",
              title: "Bài giảng chi tiết",
              parts: [
                {
                  id: "oop-part-collection-of-data",
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
      id: "oop-exceptions",
      title: "Bài 11",
      subtitle: "Exceptions",
      sections: [
        {
          id: "oop-exceptions-sec",
          roman: "",
          title: "Nội dung bài học",
          subsections: [
            {
              id: "oop-sub-exceptions",
              number: "",
              title: "Bài giảng chi tiết",
              parts: [
                {
                  id: "oop-part-exceptions",
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
      id: "oop-file",
      title: "Bài 12",
      subtitle: "File I/O",
      sections: [
        {
          id: "oop-file-sec",
          roman: "",
          title: "Nội dung bài học",
          subsections: [
            {
              id: "oop-sub-file",
              number: "",
              title: "Bài giảng chi tiết",
              parts: [
                {
                  id: "oop-part-file",
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
