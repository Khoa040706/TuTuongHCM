/* ============================================================
   DỮ LIỆU CƠ BẢN: Môn Cấu trúc dữ liệu và giải thuật (DSA)
   ============================================================ */

export const dsaData = {
  id: "dsa",
  title: "Cấu trúc dữ liệu và giải thuật",
  subtitle: "Các cấu trúc dữ liệu kinh điển và kỹ thuật thiết kế giải thuật: Sắp xếp, Tìm kiếm, Đồ thị.",
  sections: [
    {
      id: "dsa-section-adt",
      roman: "I",
      title: "Kiểu dữ liệu trừu tượng (Abstract Data Type - ADT)",
      subsections: [
        {
          id: "dsa-sub-adt-se-issues",
          number: "1",
          title: "Các vấn đề trong Kỹ nghệ Phần mềm (Software Engineering Issues)",
          parts: [
            {
              id: "dsa-part-adt-principles",
              label: "a",
              title: "Bốn nguyên lý thiết kế chương trình cốt lõi",
              content: [
                {
                  type: "paragraph",
                  text: "Trong phát triển phần mềm quy mô lớn, việc quản lý sự phức tạp của mã nguồn là thách thức hàng đầu. Để xây dựng hệ thống bền vững, dễ bảo trì và mở rộng, các kỹ sư phải tuân thủ bốn nguyên lý thiết kế chương trình (Program Design Principles) cốt lõi:"
                },
                {
                  type: "table",
                  headers: ["Nguyên lý (Principle)", "Định nghĩa và Ý nghĩa chuyên sâu"],
                  rows: [
                    [
                      "<b>Abstraction (Sự trừu tượng hóa)</b>",
                      "Tập trung hoàn toàn vào việc một thành phần phần mềm có thể <i>làm được gì (what it can do)</i> thay vì nó <i>làm điều đó như thế nào (how it does it)</i>. Việc tách biệt hành vi ra khỏi mã thực thi cụ thể giúp giảm tải áp lực tư duy cho lập trình viên khi gọi hàm. Ví dụ kinh điển là việc sử dụng <b>Java Interface</b> để định nghĩa tập hợp hành vi mà không cần quan tâm đến logic bên trong."
                    ],
                    [
                      "<b>Coupling (Sự liên kết / Phụ thuộc)</b>",
                      "Đo lường mức độ phụ thuộc lẫn nhau giữa các lớp (classes) hoặc module trong chương trình. Mục tiêu tối thượng của thiết kế là đạt được <b>Loose coupling (Liên kết lỏng lẻo)</b>, nghĩa là hạn chế mối quan hệ phụ thuộc giữa các lớp xuống mức tối thiểu. Khi các lớp ít phụ thuộc vào nhau, việc chỉnh sửa mã nguồn ở lớp này sẽ không gây ra lỗi dây chuyền (ripple effect) ở lớp khác."
                    ],
                    [
                      "<b>Cohesion (Sự kết dính)</b>",
                      "Đo lường mức độ tập trung vào một nhiệm vụ duy nhất của một lớp. Một lớp được coi là có độ kết dính cao (High cohesion) khi nó chỉ đại diện cho một thực thể duy nhất (a single entity) và tất cả cả các phương thức bên trong nó phải có sự gắn kết logic chặt chẽ nhằm phục vụ thực thể đó. Điều này giúp mã nguồn dễ hiểu, dễ kiểm thử và tái sử dụng."
                    ],
                    [
                      "<b>Information Hiding (Che giấu thông tin)</b>",
                      "Nguyên lý chỉ phơi bày (expose) những thông tin thực sự cần thiết ra môi trường bên ngoài và giữ bí mật toàn bộ chi tiết cài đặt bên trong. Bằng cách giới hạn quyền truy cập vào dữ liệu và logic nội bộ, thông tin được bảo vệ an toàn khỏi các tác động ngoài ý muốn."
                    ]
                  ]
                }
              ]
            },
            {
              id: "dsa-part-adt-information-hiding",
              label: "b",
              title: "Cơ chế Che giấu thông tin và Bức tường chắn (The Walls)",
              content: [
                {
                  type: "paragraph",
                  text: "Trong giáo trình nổi tiếng \"Walls & Mirrors\", khái niệm <b>Information Hiding</b> được ví như việc xây dựng những bức tường gạch kiên cố xung quanh các lớp của chương trình."
                },
                {
                  type: "paragraph",
                  text: "Bức tường bao quanh lớp T ngăn cản hoàn toàn các lớp khác (ví dụ lớp Q) nhìn thấy cách thức hoạt động bên trong của T. Do đó, nếu lớp Q sử dụng hoặc phụ thuộc vào lớp T, và sau này giải thuật hoặc cấu trúc dữ liệu bên trong lớp T thay thế bằng giải pháp tối ưu hơn, lớp Q hoàn toàn không bị ảnh hưởng và không cần phải thay đổi một dòng mã nào. Cơ chế này giúp việc thay thế, nâng cấp các phiên bản cải tiến (improved versions) của một tác vụ trở nên vô cùng dễ dàng và an toàn."
                },
                {
                  type: "paragraph",
                  text: "Tuy nhiên, che giấu thông tin không đồng nghĩa với sự cô lập hoàn toàn (complete isolation). Mối quan hệ giữa các lớp tuân theo nguyên tắc <i>\"cần mới biết\" (need-to-know basis)</i>. Lớp Q không cần biết T làm việc ra sao, nhưng nó cần biết cách thức kích hoạt T (phương thức gọi) và kết quả mà T sẽ trả về."
                },
                {
                  type: "paragraph",
                  text: `<div class="flex justify-center my-6">
  <svg width="400" height="150" class="overflow-visible select-none">
    <!-- Client Program Box -->
    <rect x="10" y="35" width="100" height="80" rx="8" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2" />
    <text x="60" y="70" fill="#4c1d95" font-size="11" font-weight="bold" text-anchor="middle">Client Program</text>
    <text x="60" y="88" fill="#6d28d9" font-size="10" text-anchor="middle">(Lớp sử dụng Q)</text>
    
    <!-- The Interface Wall -->
    <g>
      <!-- Brick pattern wall -->
      <rect x="160" y="15" width="24" height="120" rx="3" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5" />
      <line x1="160" y1="35" x2="184" y2="35" stroke="#b91c1c" stroke-width="1" />
      <line x1="160" y1="55" x2="184" y2="55" stroke="#b91c1c" stroke-width="1" />
      <line x1="160" y1="75" x2="184" y2="75" stroke="#b91c1c" stroke-width="1" />
      <line x1="160" y1="95" x2="184" y2="95" stroke="#b91c1c" stroke-width="1" />
      <line x1="160" y1="115" x2="184" y2="115" stroke="#b91c1c" stroke-width="1" />
      <text x="172" y="75" fill="#ffffff" font-size="10" font-weight="extrabold" text-anchor="middle" transform="rotate(90 172 75)">THE WALL</text>
    </g>

    <!-- Data Structure Box (Hidden) -->
    <rect x="230" y="35" width="160" height="80" rx="8" fill="#fafaf9" stroke="#78716c" stroke-width="2" stroke-dasharray="4,4" />
    <text x="310" y="65" fill="#44403c" font-size="11" font-weight="bold" text-anchor="middle">Data Structure & Logic</text>
    <text x="310" y="80" fill="#78716c" font-size="10" text-anchor="middle">(Cấu trúc dữ liệu ẩn T)</text>
    <text x="310" y="95" fill="#ef4444" font-size="9" font-weight="semibold" text-anchor="middle">Che giấu / Hidden 🔒</text>

    <!-- Communication arrows -->
    <!-- Request arrow -->
    <path d="M 115 55 L 150 55" fill="none" stroke="#7c3aed" stroke-width="2" marker-end="url(#arrow)" />
    <text x="132" y="48" fill="#7c3aed" font-size="8" font-weight="bold" text-anchor="middle">Request</text>
    
    <!-- Response arrow -->
    <path d="M 150 95 L 115 95" fill="none" stroke="#059669" stroke-width="2" marker-end="url(#arrow)" />
    <text x="132" y="110" fill="#059669" font-size="8" font-weight="bold" text-anchor="middle">Result</text>

    <!-- Internal access arrow from wall to implementation -->
    <path d="M 185 75 L 225 75" fill="none" stroke="#44403c" stroke-width="1.5" stroke-dasharray="2,2" />

    <!-- SVG Markers for arrow heads -->
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 6 5 L 0 8.5 z" fill="context-stroke" />
      </marker>
    </defs>
  </svg>
</div>`
                },
                {
                  type: "highlight",
                  text: "<b>Ví dụ thực tế trong Java:</b> Các lập trình viên thiết kế lớp Math (ví dụ hàm <code>Math.sqrt()</code>) hay lớp Scanner đã che giấu hoàn toàn chi tiết mã nguồn hiện thực giải thuật toán học hay xử lý luồng dữ liệu đầu vào. Tuy nhiên, họ cung cấp cho chúng ta các chữ ký hàm (method headers) và tài liệu giải thích rõ ràng để ta có thể ứng dụng chúng mà không cần phải viết lại giải thuật từ đầu."
                }
              ]
            },
            {
              id: "dsa-part-adt-contract",
              label: "c",
              title: "Hợp đồng lập trình: Pre-conditions và Post-conditions",
              content: [
                {
                  type: "paragraph",
                  text: "Mối quan hệ giao tiếp qua lại giữa các lớp được ràng buộc bởi một \"hợp đồng\" kỹ thuật thông qua tài liệu tài liệu hóa (documentation) gồm hai điều kiện:"
                },
                {
                  type: "bullets",
                  items: [
                    "<b>Pre-conditions (Điều kiện tiên quyết):</b> Là những điều kiện bắt buộc phải đúng <i>trước khi</i> một phương thức được gọi. Đây là thông điệp: \"Đây là những gì tôi kỳ vọng ở bạn\". Người lập trình gọi hàm có trách nhiệm đảm bảo các điều kiện này được thỏa mãn đầy đủ.",
                    "<b>Post-conditions (Điều kiện sau thực hiện):</b> Là những trạng thái chắc chắn phải đúng <i>sau khi</i> phương thức kết thúc xử lý thành công. Đây là lời hứa: \"Đây là những gì tôi cam kết sẽ hoàn thành cho bạn\"."
                  ]
                },
                {
                  type: "paragraph",
                  text: "<b>Ví dụ minh họa bằng mã nguồn:</b>"
                },
                {
                  type: "code",
                  language: "java",
                  code: `// Pre-cond: x >= 0 (Giá trị truyền vào không được âm)
// Post-cond: Trả về căn bậc hai hình học của x (Return the square root of x)
public static double squareRoot(double x) {
    // Chi tiết xử lý thuật toán phức tạp được ẩn đi tại đây
    return Math.sqrt(x);
}`
                }
              ]
            }
          ]
        },
        {
          id: "dsa-sub-adt-definition",
          number: "2",
          title: "Kiểu Dữ liệu Trừu tượng (Abstract Data Type - ADT)",
          parts: [
            {
              id: "dsa-part-adt-vs-ds",
              label: "a",
              title: "Phân biệt Data Structure và Abstract Data Type (ADT)",
              content: [
                {
                  type: "paragraph",
                  text: "Nguyên lý che giấu thông tin hoàn toàn có thể áp dụng trực tiếp lên dữ liệu. Từ đó, ngành khoa học máy tính phân tách rõ ràng hai khái niệm: Cấu trúc dữ liệu và Kiểu dữ liệu trừu tượng."
                },
                {
                  type: "definition",
                  text: "<b>Data Abstraction (Trừu tượng hóa dữ liệu)</b> yêu cầu lập trình viên suy nghĩ về những gì có thể thực hiện trên một tập hợp dữ liệu một cách độc lập hoàn toàn với cách thức lưu trữ hay hiện thực nó."
                },
                {
                  type: "bullets",
                  items: [
                    "<b>Data Structure (Cấu trúc dữ liệu):</b> Là một cấu trúc cụ thể được định nghĩa trong phạm vi một ngôn ngữ lập trình cụ thể nhằm lưu trữ vật lý một tập hợp dữ liệu. Ví dụ: Mảng (Arrays) là cấu trúc dữ liệu được tích hợp sẵn trong Java.",
                    "<b>Abstract Data Type - ADT (Kiểu dữ liệu trừu tượng):</b> Là một khái niệm toán học, bao gồm một tập hợp các dữ liệu kết hợp với một <i>bản đặc tả kỹ thuật (specification)</i> về tập hợp các thao tác/phương thức trên dữ liệu đó. Bản đặc tả này chỉ rõ thao tác đó làm gì nhưng tuyệt đối không chỉ ra cách thức lập trình chi tiết."
                  ]
                },
                {
                  type: "paragraph",
                  text: "Các thao tác điển hình trên một ADT thường xoay quanh quản lý dữ liệu toàn diện bao gồm: thêm dữ liệu (add), xóa dữ liệu (remove), và truy vấn dữ liệu (query)."
                },
                {
                  type: "paragraph",
                  text: "<b>Ví dụ về việc lựa chọn cấu trúc dữ liệu lưu trữ thông tin nhân viên (Tên và Lương):</b>"
                },
                {
                  type: "paragraph",
                  text: "<i>Cách tiếp cận 1 (Sử dụng mảng song song - Kỹ thuật sơ khai):</i>"
                },
                {
                  type: "code",
                  language: "java",
                  code: `static final int MAX_NUMBER = 500; // Định nghĩa hằng số dung lượng tối đa
String[] names = new String[MAX_NUMBER];
double[] salaries = new double[MAX_NUMBER];
// Tên nhân viên tại vị trí names[i] sẽ tương ứng với mức lương tại salaries[i]`
                },
                {
                  type: "paragraph",
                  text: "<i>Cách tiếp cận 2 (Sử dụng Hướng đối tượng - Lựa chọn tối ưu hơn về mặt cấu trúc):</i>"
                },
                {
                  type: "code",
                  language: "java",
                  code: `class Employee {
    static final int MAX_NUMBER = 500;
    private String name;
    private double salary;
}
// ...
Employee[] workers = new Employee[Employee.MAX_NUMBER];`
                }
              ]
            },
            {
              id: "dsa-part-adt-dispenser",
              label: "b",
              title: "Ẩn dụ thực tế: Cây nước tự động (Water Dispenser) và Quy trình hoạt động của ADT",
              content: [
                {
                  type: "paragraph",
                  text: "Sử dụng một ADT tương tự như việc vận hành một cây nước tự động hoặc máy bán hàng tự động:"
                },
                {
                  type: "bullets",
                  items: [
                    "<b>Data (Dữ liệu):</b> Nước bên trong máy.",
                    "<b>Operations (Các thao tác):</b> chill (làm lạnh), crush (làm đá bào), cube (làm đá viên), và isEmpty (kiểm tra hết nước).",
                    "<b>Data Structure (Cấu trúc dữ liệu nội bộ):</b> Hệ thống đường ống, máy nén khí, mạch điện phức tạp bên trong máy.",
                    "<b>The Walls (Bức tường bảo vệ):</b> Vỏ bọc bằng thép kiên cố bên ngoài của cây nước. Người dùng chỉ tương tác qua giao diện (nút bấm nhận đá bào, đầu vào cấp nước, đầu ra nhận nước). Chúng ta hoàn toàn không quan tâm viên đá được bào bằng cơ chế cơ học nào, chỉ cần biết nút bấm hoạt động chính xác."
                  ]
                },
                {
                  type: "paragraph",
                  text: "<b>Mô hình hoạt động chuẩn của ADT:</b> Chương trình (Program) gửi một yêu cầu thực hiện thao tác (Request to perform operation) đến Bức tường thao tác ADT (Wall of ADT operations - gồm các cổng hàm công khai như add, remove, find, display). Yêu cầu này đi qua một <b>Interface (Giao diện)</b> được định nghĩa rõ ràng. Giao diện này sẽ chuyển đối tác vụ xuống Cấu trúc dữ liệu (Data Structure) vật lý bên dưới, nhận về kết quả dữ liệu thô rồi trả ngược lại kết quả đã tinh chỉnh (Result of operation) cho chương trình."
                },
                {
                  type: "highlight",
                  text: "<b>Cảnh báo vi phạm nguyên tắc thiết kế:</b> Bất kỳ hành vi nào từ Chương trình cố tình vượt mặt (bypass) giao diện công khai để truy cập hoặc can thiệp trực tiếp vào cấu trúc dữ liệu lưu trữ vật lý bên trong đều bị coi là hành vi phá vỡ Bức tường bảo vệ của ADT, gây mất an toàn hệ thống trầm trọng."
                }
              ]
            },
            {
              id: "dsa-part-adt-operation-types",
              label: "c",
              title: "Phân loại các thao tác trong ADT và Kiểu nguyên thủy (Primitive Types)",
              content: [
                {
                  type: "paragraph",
                  text: "Bản thân các kiểu dữ liệu nguyên thủy tích hợp sẵn trong Java (như int, boolean, double) chính là các ADT được thiết kế hoàn hảo. Chi tiết biểu diễn nhị phân trên RAM bị ẩn đi, giúp mã nguồn có tính tương thích (portability) rất cao giữa các hệ điều hành. Ví dụ, kiểu int đi kèm các toán tử định sẵn (+, -, *, /), kiểu boolean đi kèm toán tử logic (&&, ||, !)."
                },
                {
                  type: "paragraph",
                  text: "Nói một cách tổng quát, các phương thức trong một ADT được phân chia thành ba nhóm chiến lược:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: 1,
                      title: "<b>Constructors (Hàm khởi tạo):</b> Dùng để cấp phát vùng nhớ và tạo lập, thêm mới dữ liệu ban đầu. Ví dụ: <code>int[] z = new int[4];</code> hoặc <code>int[] x = { 2, 4, 6, 8 };</code>."
                    },
                    {
                      number: 2,
                      title: "<b>Mutators (Hàm biến đổi / Setter):</b> Dùng để sửa đổi, cập nhật trạng thái dữ liệu bên trong cấu trúc. Ví dụ thao tác gán: <code>x[3] = 10;</code>."
                    },
                    {
                      number: 3,
                      title: "<b>Accessors (Hàm truy vấn / Getter):</b> Dùng để hỏi hoặc truy xuất thông tin về trạng thái hoặc giá trị của dữ liệu mà không làm thay đổi cấu trúc ban đầu. Ví dụ: <code>int y = x[3] + x[2];</code>."
                    }
                  ]
                }
              ]
            },
            {
              id: "dsa-part-adt-complex-number",
              label: "d",
              title: "Phân tích Case-Study: Số phức (Complex Number) như một ADT",
              content: [
                {
                  type: "paragraph",
                  text: "Một số phức gồm hai phần: phần thực (real part) $a$ và phần ảo (imaginary part) $b$, viết dưới dạng toán học: $a + bi$ (với $i^2 = -1$). Trên mặt phẳng phức hai chiều (Complex Plane), số phức được biểu diễn trực quan như một vectơ có tọa độ $(a, b)$, trong đó trục hoành đại diện cho phần thực (Real) và trục tung đại diện cho phần ảo (Imag)."
                },
                {
                  type: "paragraph",
                  text: "Khi tổ chức Số phức thành một ADT (Complex ADT), chúng ta định nghĩa giao diện bên ngoài gồm các phương thức chính:"
                },
                {
                  type: "bullets",
                  items: [
                    "<code>Complex(r, i)</code>: Khởi tạo số phức từ tọa độ thực ảo truyền vào.",
                    "<code>realpart()</code> và <code>imagpart()</code>: Truy xuất phần thực, phần ảo (Accessors).",
                    "<code>add(c)</code>, <code>minus(c)</code>, <code>times(c)</code>: Các phép toán cộng, trừ, nhân thực hiện biến đổi trực tiếp lên đối tượng hiện tại (<code>this = this [toán tử] c</code>)."
                  ]
                },
                {
                  type: "paragraph",
                  text: "Nhờ có tính trừu tượng của ADT, chúng ta có thể hiện thực hóa mô hình này bằng hai phương án cấu trúc dữ liệu vật lý hoàn toàn khác biệt nhau nhưng đem lại kết quả đầu ra tương đương đối với chương trình client:"
                },
                {
                  type: "paragraph",
                  text: "<b>Phương án 1: Hiện thực theo Hệ tọa độ Đề-các (Cartesian Implementation)</b><br/>Lưu trữ trực tiếp hai biến số thực độc lập: <code>private double real;</code> và <code>private double imag;</code>. Giải thuật đại số được áp dụng trực tiếp dựa trên công thức toán học:"
                },
                {
                  type: "bullets",
                  items: [
                    "Phép cộng: $(a + bi) + (c + di) = (a + c) + (b + d)i$",
                    "Phép trừ: $(a + bi) - (c + di) = (a - c) + (b - d)i$",
                    "Phép nhân phức tạp: $(a + bi) * (c + di) = (ac - bd) + (ad + bc)i$"
                  ]
                },
                {
                  type: "paragraph",
                  text: "<b>Phương án 2: Hiện thực theo Hệ tọa độ Cực (Polar Implementation)</b><br/>Thay vì lưu thực ảo, cấu trúc dữ liệu lưu trữ độ dài vectơ <code>private double mag;</code> (magnitude - mô-đun) và góc định hướng <code>private double ang;</code> (angle - độ dốc góc biên độ / Argand). Trong hệ tọa độ cực, phép nhân số phức trở nên đơn giản vô cùng: độ dài nhân với nhau và góc cộng lại với nhau (<code>mag *= c.mag(); ang += c.angle();</code>)."
                },
                {
                  type: "paragraph",
                  text: "<b>Mối quan hệ toán học chuyển đổi qua lại giữa hai hệ tọa độ:</b>"
                },
                {
                  type: "bullets",
                  items: [
                    "Từ Hệ Cực sang Đề-các: $real = mag * cos(ang); imag = mag * sin(ang);$",
                    "Từ Đề-các sang Hệ Cực: $ang = tan^{-1}(imag / real); mag = sqrt(real^2 + imag^2);$ hoặc $mag = real / cos(ang);$"
                  ]
                },
                {
                  type: "paragraph",
                  text: `<div class="flex justify-center my-6">
  <svg width="240" height="200" class="overflow-visible select-none">
    <!-- Grid & Axes -->
    <line x1="20" y1="180" x2="220" y2="180" stroke="#a8a29e" stroke-width="1.5" />
    <line x1="20" y1="180" x2="20" y2="20" stroke="#a8a29e" stroke-width="1.5" />
    <!-- Vector -->
    <line x1="20" y1="180" x2="160" y2="60" stroke="#7c3aed" stroke-width="2.5" />
    <circle cx="160" cy="60" r="4" fill="#ef4444" />
    <!-- Dashed lines -->
    <line x1="160" y1="60" x2="160" y2="180" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3,3" />
    <line x1="20" y1="60" x2="160" y2="60" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3,3" />
    <!-- Angle arc -->
    <path d="M 50 180 A 30 30 0 0 0 44 159" fill="none" stroke="#f59e0b" stroke-width="1.5" />
    <!-- Labels -->
    <text x="225" y="184" fill="#57534e" font-size="10" font-family="serif" font-style="italic">Re (real)</text>
    <text x="12" y="15" fill="#57534e" font-size="10" font-family="serif" font-style="italic">Im (imag)</text>
    <text x="165" y="55" fill="#1c1917" font-size="11" font-weight="bold">z = a + bi</text>
    <text x="165" y="70" fill="#78716c" font-size="10">z = r&ang;&theta;</text>
    <text x="160" y="194" fill="#57534e" font-size="10" text-anchor="middle">a</text>
    <text x="8" y="64" fill="#57534e" font-size="10">bi</text>
    <text x="80" y="110" fill="#7c3aed" font-size="11" font-weight="bold">r (mag)</text>
    <text x="54" y="174" fill="#d97706" font-size="11">&theta; (ang)</text>
  </svg>
</div>`
                },
                {
                  type: "dsa-complex-visualizer"
                }
              ]
            }
          ]
        },
        {
          id: "dsa-sub-adt-java-interface",
          number: "3",
          title: "Java Interface (Giao diện trong Java)",
          parts: [
            {
              id: "dsa-part-adt-interface-characteristics",
              label: "a",
              title: "Đặc trưng kỹ thuật của Java Interface",
              content: [
                {
                  type: "paragraph",
                  text: "Java Interface là một công cụ ngôn ngữ lập trình hoàn hảo để định nghĩa bản đặc tả kỹ thuật của một ADT. Nó cho phép nâng cao tính trừu tượng hóa và tổng quát hóa mã nguồn."
                },
                {
                  type: "bullets",
                  items: [
                    "Sử dụng từ khóa <code>interface</code> thay vì từ khóa <code>class</code>.",
                    "Là một tập hợp các phương thức liên quan nhưng có thân hàm rỗng (empty bodies) - áp dụng từ Java 7 trở về trước. Từ Java 8, interface cho phép khai báo thêm <b>\"default methods\"</b> có sẵn code mặc định, cho phép các lớp hiện thực ghi đè (override) tùy chọn.",
                    "Có thể chứa các định nghĩa hằng số (các thuộc tính này mặc nhiên được hiểu là <code>public static final</code>).",
                    "Một lớp cụ thể muốn sử dụng giao diện phải dùng từ khóa <code>implements</code> và bắt buộc phải lập trình mã xử lý chi tiết cho <b>TẤT CẢ</b> các phương thức đã khai báo trong giao diện đó.",
                    "Mỗi giao diện sau khi biên dịch sẽ tạo ra một file bytecode cụ thể độc lập (đuôi <code>.class</code>).",
                    "Không thể dùng từ khóa <code>new</code> để tạo thực thể trực tiếp từ interface, nhưng hoàn toàn có thể dùng tên interface làm kiểu dữ liệu cho biến, tạo điều kiện cho cơ chế Ép kiểu (Casting) và Đa hình (Polymorphism)."
                  ]
                }
              ]
            },
            {
              id: "dsa-part-adt-interface-complex-code",
              label: "b",
              title: "Mã nguồn toàn diện hiện thực Complex ADT qua Giao diện",
              content: [
                {
                  type: "paragraph",
                  text: "Dưới đây là mã nguồn phân tích chi tiết quy trình xây dựng hệ thống mã nguồn đa hình cho Số phức:"
                },
                {
                  type: "paragraph",
                  text: "<b>Mã nguồn 1: Khai báo Giao diện chung (Complex.java)</b>"
                },
                {
                  type: "code",
                  language: "java",
                  code: `public interface Complex {
    public double realpart(); // Lấy phần thực
    public double imagpart(); // Lấy phần ảo
    public double angle();    // Lấy góc độ (độ lệch pha)
    public double mag();      // Lấy độ dài (mô-đun)
    public void add(Complex c); // Biến đổi: this = this + c
    public void minus(Complex c); // Biến đổi: this = this - c
    public void times(Complex c); // Biến đổi: this = this * c
}`
                },
                {
                  type: "paragraph",
                  text: "<b>Mã nguồn 2: Hiện thực theo tọa độ Đề-các (ComplexCart.java)</b>"
                },
                {
                  type: "highlight",
                  text: "<b>Lưu ý giải thuật trong phương thức angle():</b> Khi tính toán góc dựa trên hàm vô hướng <code>Math.atan(imag/real)</code>, chúng ta phải xử lý các điều kiện biên của hệ trục tọa độ 2D. Nếu phần thực âm (nằm ở góc phần tư số II và III), ta phải cộng thêm hằng số $\\pi$ (<code>Math.PI</code>) để điều chỉnh hướng vectơ chính xác. Nếu phần thực bằng 0, tùy thuộc vào phần ảo dương hay âm mà góc trả về sẽ là $\\pi/2$ hoặc $-\\pi/2$."
                },
                {
                  type: "code",
                  language: "java",
                  code: `class ComplexCart implements Complex {
    private double real;
    private double imag;

    // Hàm khởi tạo (Constructor)
    public ComplexCart(double r, double i) {
        this.real = r;
        this.imag = i;
    }

    // Nhóm hàm truy vấn (Accessors)
    public double realpart() { return this.real; }
    public double imagpart() { return this.imag; }
    public double mag() { return Math.sqrt(real * real + imag * imag); }

    public double angle() {
        if (real != 0) {
            if (real < 0) return (Math.PI + Math.atan(imag / real));
            else return Math.atan(imag / real);
        }
        else if (imag == 0) return 0;
        else if (imag > 0) return Math.PI / 2;
        else return -Math.PI / 2;
    }

    // Nhóm hàm biến đổi trạng thái (Mutators)
    public void add(Complex c) {
        this.real += c.realpart();
        this.imag += c.imagpart();
    }

    public void minus(Complex c) {
        this.real -= c.realpart();
        this.imag -= c.imagpart();
    }

    public void times(Complex c) {
        // Phải dùng biến tạm để tránh việc sử dụng giá trị phần thực mới thay đổi để tính phần ảo
        double tempReal = real * c.realpart() - imag * c.imagpart();
        imag = real * c.imagpart() + imag * c.realpart();
        real = tempReal;
    }

    // Ghi đè phương thức hiển thị chuỗi ký tự
    public String toString() {
        if (imag == 0) return (real + "");
        else if (imag < 0) return (real + "" + imag + "i");
        else return (real + "+" + imag + "i");
    }
}`
                },
                {
                  type: "paragraph",
                  text: "<b>Giải đáp câu hỏi thảo luận trên slide:</b> Tại sao tại hàm <code>toString()</code> không thể viết trực tiếp câu lệnh <code>if (imag == 0) return (real);</code>? Bởi vì biến <code>real</code> được khai báo là kiểu dữ liệu số thực nguyên thủy <code>double</code>, trong khi kiểu trả về yêu cầu của hàm <code>toString()</code> bắt buộc phải là một chuỗi ký tự đối tượng <code>String</code>. Việc nối thêm chuỗi rỗng <code>+ \"\"</code> là thủ thuật ép kiểu tự động (string concatenation coercion) phổ biến trong Java."
                },
                {
                  type: "paragraph",
                  text: "<b>Mã nguồn 3: Hiện thực theo tọa độ Cực (ComplexPolar.java)</b>"
                },
                {
                  type: "code",
                  language: "java",
                  code: `class ComplexPolar implements Complex {
    private double mag; // Mô-đun (độ lớn)
    private double ang; // Góc định hướng (Argand)

    public ComplexPolar(double m, double a) {
        this.mag = m;
        this.ang = a;
    }

    public double realpart() { return mag * Math.cos(ang); }
    public double imagpart() { return mag * Math.sin(ang); }
    public double mag() { return this.mag; }
    public double angle() { return this.ang; }

    public void add(Complex c) {
        // Phải chuyển đổi tạm thời sang hệ tọa độ Đề các để thực hiện phép toán cộng đại số
        double real = this.realpart() + c.realpart();
        double imag = this.imagpart() + c.imagpart();
        mag = Math.sqrt(real * real + imag * imag);
        if (real != 0) {
            if (real < 0) ang = (Math.PI + Math.atan(imag / real));
            else ang = Math.atan(imag / real);
        }
        else if (imag == 0) ang = 0;
        else if (imag > 0) ang = Math.PI / 2;
        else ang = -Math.PI / 2;
    }

    public void minus(Complex c) {
        double real = this.realpart() - c.realpart();
        double imag = this.imagpart() - c.imagpart();
        mag = Math.sqrt(real * real + imag * imag);
        if (real != 0) {
            if (real < 0) ang = (Math.PI + Math.atan(imag / real));
            else ang = Math.atan(imag / real);
        }
        else if (imag == 0) ang = 0;
        else if (imag > 0) ang = Math.PI / 2;
        else ang = -Math.PI / 2;
    }

    public void times(Complex c) {
        // Trong hệ cực, phép nhân tối ưu hóa cực cao về mặt hiệu năng tính toán
        mag *= c.mag();
        ang += c.angle();
    }

    public String toString() {
        if (imagpart() == 0) return (realpart() + "");
        else if (imagpart() < 0) return (realpart() + "" + imagpart() + "i");
        else return (realpart() + "+" + imagpart() + "i");
    }
}`
                },
                {
                  type: "paragraph",
                  text: "<b>Mã nguồn 4: Chương trình kiểm thử đa hình kết hợp dữ liệu (TestComplex.java)</b>"
                },
                {
                  type: "code",
                  language: "java",
                  code: `public class TestComplex {
    public static void main(String[] args) {
        // Thử nghiệm các thao tác trên cấu trúc tọa độ Đề các
        Complex a = new ComplexCart(10.0, 12.0);
        Complex b = new ComplexCart(1.0, 2.0);
        System.out.println("Testing ComplexCart:");
        a.add(b);
        System.out.println("a=a+b is " + a); // Output mong đợi: 11.0+14.0i
        a.minus(b);
        System.out.println("a-b (gốc) is " + a); // Output mong đợi: 10.0+12.0i

        // Thử nghiệm trên cấu trúc tọa độ Cực
        Complex c = new ComplexPolar(10.0, Math.PI / 6.0);
        Complex d = new ComplexPolar(1.0, Math.PI / 3.0);
        System.out.println("\\nTesting ComplexPolar:");
        c.add(d);
        System.out.println("c=c+d is " + c);
    }
}`
                },
                {
                  type: "paragraph",
                  text: "<b>Phương thức Equals xử lý an toàn toán học đối với số thực dấu phẩy động:</b>"
                },
                {
                  type: "paragraph",
                  text: "Do máy tính lưu trữ số thực dấu phẩy động có thể phát sinh sai số làm tròn nhỏ, việc so sánh bằng toán tử <code>==</code> trực tiếp giữa hai số thực là vô cùng nguy hiểm. Giải pháp kỹ thuật chuẩn mực là sử dụng một độ lệch cực nhỏ gọi là hằng số hằng số <code>EPSILON</code>."
                },
                {
                  type: "code",
                  language: "java",
                  code: `public static final double EPSILON = 0.0000001;

public boolean equals(Object cl) {
    if (cl instanceof Complex) {
        Complex temp = (Complex) cl; // Thao tác Ép kiểu (Casting) an toàn sau khi kiểm tra loại thực thể
        return (Math.abs(realpart() - temp.realpart()) < EPSILON
            && Math.abs(imagpart() - temp.imagpart()) < EPSILON);
    }
    return false;
}`
                }
              ]
            }
          ]
        },
        {
          id: "dsa-sub-adt-fraction-practice",
          number: "4",
          title: "Bài tập thực hành: Phân số (Fraction) như một ADT",
          parts: [
            {
              id: "dsa-part-fraction-analysis",
              label: "a",
              title: "Bản phân tích thiết kế hành vi đối tượng",
              content: [
                {
                  type: "paragraph",
                  text: "Nhằm củng cố vững chắc kiến thức lý thuyết về ADT, bài tập thực hành yêu cầu chúng ta phân tích và xây dựng một kiểu dữ liệu trừu tượng hoàn toàn mới để quản lý cấu trúc dữ liệu của một Phân số (Fraction)."
                },
                {
                  type: "paragraph",
                  text: "Khi đứng ở góc độ thiết kế trừu tượng thuần túy, một thực thể phân số sẽ được cấu thành bởi hai thông tin dữ liệu cốt lõi độc lập với ngôn ngữ máy:"
                },
                {
                  type: "bullets",
                  items: [
                    "<b>Dữ liệu thành viên (Data members / Attributes):</b> Numerator (Tử số) và Denominator (Mẫu số).",
                    "<b>Hành vi nghiệp vụ mong đợi (Behaviors / Methods):</b> Phép cộng (Add), phép trừ (Minus), phép nhân (Times), và tối giản phân số (Simplify). Để tinh giản bài toán, phép chia tạm thời được lược bỏ ở giai đoạn này."
                  ]
                }
              ]
            },
            {
              id: "dsa-part-fraction-interface",
              label: "b",
              title: "Xây dựng Giao diện đặc tả kỹ thuật (FractionI.java)",
              content: [
                {
                  type: "paragraph",
                  text: "Trái ngược với thiết kế lớp Số phức (các hàm biến đổi làm thay đổi chính trạng thái vùng nhớ <code>this</code>), đối với thiết kế giao diện phân số dưới đây, các phép toán toán học được yêu cầu trả về một đối tượng phân số độc lập hoàn toàn mới chứa kết quả (Immutable-style design)."
                },
                {
                  type: "code",
                  language: "java",
                  code: `public interface FractionI {
    public int getNumer(); // Lấy giá trị tử số
    public int getDenom(); // Lấy giá trị mẫu số
    public void setNumer(int numer); // Thiết lập lại giá trị tử số
    public void setDenom(int denom); // Thiết lập lại giá trị mẫu số
    public FractionI add(FractionI f); // Trả về phân số mới bằng phép tính: this + f
    public FractionI minus(FractionI f); // Trả về phân số mới bằng phép tính: this - f
    public FractionI times(FractionI f); // Trả về phân số mới bằng phép tính: this * f
    public FractionI simplify(); // Trả về phân số mới sau khi đã được tối giản hóa
}`
                }
              ]
            },
            {
              id: "dsa-part-fraction-implementations",
              label: "c",
              title: "Hai phương án thiết kế cấu trúc dữ liệu vật lý",
              content: [
                {
                  type: "paragraph",
                  text: "Để chứng minh triết lý của ADT, sinh viên cần hiện thực hóa giao diện trên bằng hai lớp có mô hình lưu trữ khác biệt nhau:"
                },
                {
                  type: "paragraph",
                  text: "<b>Phương án A: Lớp Fraction truyền thống (Sử dụng hai thuộc tính số nguyên độc lập)</b>"
                },
                {
                  type: "code",
                  language: "java",
                  code: `class Fraction implements FractionI {
    private int numer; // Thuộc tính lưu tử số độc lập
    private int denom; // Thuộc tính lưu mẫu số độc lập

    public Fraction() { this(1, 1); }
    public Fraction(int numer, int denom) {
        setNumer(numer);
        setDenom(denom);
    }

    public int getNumer() { return this.numer; }
    public int getDenom() { return this.denom; }
    public void setNumer(int numer) { this.numer = numer; }
    public void setDenom(int denom) { this.denom = denom; }

    // Hàm nội bộ tìm Ước chung lớn nhất theo giải thuật Euclid phục vụ hàm rút gọn
    private static int gcd(int a, int b) {
        int rem;
        while (b > 0) {
            rem = a % b;
            a = b;
            b = rem;
        }
        return Math.abs(a);
    }

    public FractionI simplify() {
        int common = gcd(this.numer, this.denom);
        return new Fraction(this.numer / common, this.denom / common);
    }

    public FractionI add(FractionI f) {
        // Công thức quy đồng: (a/b) + (c/d) = (ad + bc) / (bd)
        int newNumer = this.numer * f.getDenom() + this.denom * f.getNumer();
        int newDenom = this.denom * f.getDenom();
        return new Fraction(newNumer, newDenom).simplify();
    }

    // Các hàm toán học khác hiện thực tương tự...
}`
                },
                {
                  type: "paragraph",
                  text: "<b>Phương án B: Lớp FractionArr tân tiến (Đóng gói dữ liệu vào trong một Mảng số nguyên)</b><br/>Thay vì dùng biến rời, giải pháp này lưu trữ toàn bộ dữ liệu trạng thái bên trong một mảng số nguyên gồm chính xác 2 phần tử: <code>private int[] members;</code>, trong đó quy ước chỉ số cấu trúc: <code>members[0]</code> đại diện cho Tử số, và <code>members[1]</code> đại diện cho Mẫu số."
                },
                {
                  type: "code",
                  language: "java",
                  code: `class FractionArr implements FractionI {
    private int[] members; // Đóng gói dữ liệu vật lý vào cấu trúc mảng

    public FractionArr() { this(1, 1); }
    public FractionArr(int numer, int denom) {
        members = new int[2]; // Cấp phát động không gian mảng cố định
        setNumer(numer);
        setDenom(denom);
    }

    public int getNumer() { return this.members[0]; }
    public int getDenom() { return this.members[1]; }
    public void setNumer(int numer) { this.members[0] = numer; }
    public void setDenom(int denom) { this.members[1] = denom; }

    // Tất cả các logic tính toán nghiệp vụ toán học bên dưới hoàn toàn kế thừa cấu trúc từ giao diện
}`
                },
                {
                  type: "dsa-fraction-visualizer"
                }
              ]
            }
          ]
        },
        {
          id: "dsa-sub-adt-summary",
          number: "5",
          title: "Tổng kết bài học và Định hướng kiến thức nâng cao",
          parts: [
            {
              id: "dsa-part-adt-summary-content",
              label: "a",
              title: "Tóm tắt tư duy kỹ thuật nền tảng",
              content: [
                {
                  type: "paragraph",
                  text: "Thông qua nội dung phân tích chi tiết toàn diện của bài giảng số 1, chúng ta đã nắm giữ vững chắc bản chất cốt lõi của việc quản lý cấu trúc phần mềm:"
                },
                {
                  type: "bullets",
                  items: [
                    "Hiểu rõ tầm quan trọng sống còn của <b>Data Abstraction</b> và nguyên lý <b>Information Hiding</b> để xây dựng hệ thống bền vững.",
                    "Làm chủ kỹ thuật sử dụng công cụ <b>Java Interface</b> như một vũ khí sắc bén để định nghĩa ranh giới kỹ thuật rõ ràng của một Kiểu dữ liệu trừu tượng (ADT).",
                    "Chứng minh thực nghiệm qua mã nguồn rằng một ADT duy nhất có thể được bảo vệ toàn vẹn trước chương trình Client bất kể chúng ta có thay thế hay thay đổi hoàn toàn Cấu trúc dữ liệu vật lý bên dưới (như cách chuyển đổi từ Cartesian sang Polar hay từ biến nguyên thủy sang Array).",
                    "Đây chính là nền móng tư duy kỹ thuật nền tảng vô cùng quan trọng trước khi chúng ta tiến hành nghiên cứu sâu rộng các kiểu dữ liệu trừu tượng kinh điển phức tạp hơn trong toàn bộ học phần như: Danh sách liên kết (Linked List), Ngăn xếp (Stack), Hàng đợi (Queue), Cây nhị phân (Binary Tree) và Đồ thị (Graph)."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dsa-section-linkedlist",
      roman: "II",
      title: "Danh sách liên kết (Linked List)",
      subsections: [
        {
          id: "dsa-sub-linkedlist",
          number: "1",
          title: "Cấu trúc danh sách liên kết đơn, kép và vòng",
          parts: [
            {
              id: "dsa-part-linkedlist",
              label: "a",
              title: "Bài học 2: Linked List",
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
      id: "dsa-section-stackqueue",
      roman: "III",
      title: "Ngăn xếp & Hàng đợi (Stack & Queue)",
      subsections: [
        {
          id: "dsa-sub-stackqueue",
          number: "1",
          title: "Nguyên lý hoạt động LIFO và FIFO",
          parts: [
            {
              id: "dsa-part-stackqueue",
              label: "a",
              title: "Bài học 3: Stack & Queue",
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
      id: "dsa-section-recursion",
      roman: "IV",
      title: "Thuật toán Đệ quy (Recursion)",
      subsections: [
        {
          id: "dsa-sub-recursion",
          number: "1",
          title: "Thiết lập hàm đệ quy và cơ chế Stack Frame",
          parts: [
            {
              id: "dsa-part-recursion",
              label: "a",
              title: "Bài học 4: Recursion",
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
      id: "dsa-section-analysis",
      roman: "V",
      title: "Phân tích thuật toán (Analysis of Algorithms)",
      subsections: [
        {
          id: "dsa-sub-analysis",
          number: "1",
          title: "Độ phức tạp thời gian Big-O và không gian",
          parts: [
            {
              id: "dsa-part-analysis",
              label: "a",
              title: "Bài học 5: Analysis of Algorithms",
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
      id: "dsa-section-sorting",
      roman: "VI",
      title: "Thuật toán Sắp xếp (Sorting)",
      subsections: [
        {
          id: "dsa-sub-sorting",
          number: "1",
          title: "Các phương pháp sắp xếp thông dụng và chia để trị",
          parts: [
            {
              id: "dsa-part-sorting",
              label: "a",
              title: "Bài học 6: Sorting",
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
      id: "dsa-section-hashing",
      roman: "VII",
      title: "Bảng băm (Hashing)",
      subsections: [
        {
          id: "dsa-sub-hashing",
          number: "1",
          title: "Hàm băm và cơ chế giải quyết đụng độ",
          parts: [
            {
              id: "dsa-part-hashing",
              label: "a",
              title: "Bài học 7: Hashing",
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
      id: "dsa-section-bst",
      roman: "VIII",
      title: "Cây tìm kiếm nhị phân (Binary Search Tree - BST)",
      subsections: [
        {
          id: "dsa-sub-bst",
          number: "1",
          title: "Cấu trúc cây nhị phân và các phép toán trên BST",
          parts: [
            {
              id: "dsa-part-bst",
              label: "a",
              title: "Bài học 8: BST",
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
      id: "dsa-section-avl",
      roman: "IX",
      title: "Cây AVL (AVL Tree)",
      subsections: [
        {
          id: "dsa-sub-avl",
          number: "1",
          title: "Kỹ thuật tự cân bằng qua các phép quay cây",
          parts: [
            {
              id: "dsa-part-avl",
              label: "a",
              title: "Bài học 9: AVL",
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
      id: "dsa-section-priorityheap",
      roman: "X",
      title: "Hàng đợi ưu tiên & Cấu trúc Heap (Priority Queue & Binary Max Heap)",
      subsections: [
        {
          id: "dsa-sub-priorityheap",
          number: "1",
          title: "Biểu diễn và các thao tác trên Binary Max Heap",
          parts: [
            {
              id: "dsa-part-priorityheap",
              label: "a",
              title: "Bài học 10: Priority Queue & Binary Max Heap",
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
      id: "dsa-section-graphbasic",
      roman: "XI",
      title: "Cấu trúc Đồ thị cơ bản (Graph Basics)",
      subsections: [
        {
          id: "dsa-sub-graphbasic",
          number: "1",
          title: "Ma trận kề, danh sách kề và biểu diễn đồ thị",
          parts: [
            {
              id: "dsa-part-graphbasic",
              label: "a",
              title: "Bài học 11: Graph Basics",
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
      id: "dsa-section-bfsdfs",
      roman: "XII",
      title: "Thuật toán Duyệt đồ thị (BFS & DFS)",
      subsections: [
        {
          id: "dsa-sub-bfsdfs",
          number: "1",
          title: "Duyệt đồ thị theo chiều rộng và chiều sâu",
          parts: [
            {
              id: "dsa-part-bfsdfs",
              label: "a",
              title: "Bài học 12: BFS & DFS",
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
      id: "dsa-section-mst",
      roman: "XIII",
      title: "Cây khung tối tiểu (Minimum Spanning Tree - MST)",
      subsections: [
        {
          id: "dsa-sub-mst",
          number: "1",
          title: "Các thuật toán tìm cây khung nhỏ nhất (Kruskal, Prim)",
          parts: [
            {
              id: "dsa-part-mst",
              label: "a",
              title: "Bài học 13: MST",
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
      id: "dsa-section-bellmanford",
      roman: "XIV",
      title: "Giải thuật Bellman-Ford (Bellman-Ford)",
      subsections: [
        {
          id: "dsa-sub-bellmanford",
          number: "1",
          title: "Đường đi ngắn nhất từ một nguồn có trọng số âm",
          parts: [
            {
              id: "dsa-part-bellmanford",
              label: "a",
              title: "Bài học 14: Bellman-Ford",
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
      id: "dsa-section-dijkstra",
      roman: "XV",
      title: "Giải thuật Dijkstra (Dijkstra)",
      subsections: [
        {
          id: "dsa-sub-dijkstra",
          number: "1",
          title: "Đường đi ngắn nhất có trọng số không âm",
          parts: [
            {
              id: "dsa-part-dijkstra",
              label: "a",
              title: "Bài học 15: Dijkstra",
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
