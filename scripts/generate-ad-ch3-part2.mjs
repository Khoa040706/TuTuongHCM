import fs from "fs";

export const part2Questions = [
  // ==================== NHÓM 1: INITIATION PHASE & KHÁI NIỆM USE CASE (6 CÂU: 001 - 006) ====================
  {
    id: "ad-c3-d2-001",
    question: "Mục tiêu tối thượng của giai đoạn Khởi động dự án (Inception / Initiation Phase) là gì?",
    options: [
      "Xác định ranh giới phạm vi, tầm nhìn dự án và chứng minh được tính khả thi kinh doanh",
      "Lập trình hoàn chỉnh toàn bộ mã nguồn của hệ thống và xuất xưởng sản phẩm cho khách",
      "Thiết kế chi tiết toàn bộ các lược đồ cơ sở dữ liệu quan hệ và khóa ngoại của các bảng",
      "Ký kết hợp đồng bảo hành phần mềm kéo dài trong vòng mười năm với các khách hàng"
    ],
    answer: 0,
    explanation: "Mục tiêu then chốt của Initiation (Inception) là thiết lập phạm vi (Scope), tầm nhìn (Vision), trường hợp kinh doanh (Business Case) và chứng minh tính khả thi trước khi chi ngân sách lớn.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-002",
    question: "Khái niệm 'Observable Result of Value' (Kết quả giá trị có thể quan sát được) trong Use Case nghĩa là gì?",
    options: [
      "Use Case phải mang lại một kết quả trọn vẹn, có ý nghĩa thực tế đối với mục tiêu của Actor",
      "Use Case bắt buộc phải hiển thị được hình ảnh đồ họa 3D chuyển động trên màn hình máy tính",
      "Use Case phải in ra giấy một văn bản có đóng dấu đỏ của giám đốc điều hành doanh nghiệp",
      "Use Case chỉ cần trả về mã lỗi HTTP 200 trên thanh trạng thái của trình duyệt web là đủ"
    ],
    answer: 0,
    explanation: "Use Case không phải là thao tác nửa vời (như bấm nút, nhập form). Nó phải mang lại một kết quả trọn vẹn, có ý nghĩa và giá trị đối với Actor (như 'Đăng ký thành công', 'Nhận tiền mặt').",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-003",
    question: "Hai mức độ chi tiết tiêu chuẩn của tài liệu đặc tả Use Case (Use Case Description) trong RUP là:",
    options: [
      "Mức tóm tắt sơ bộ (Brief Description) và Mức đặc tả chi tiết (Fully Dressed Description)",
      "Mức mã nhị phân ngôn ngữ máy (Binary Code) và Mức mã nguồn ngôn ngữ bậc cao (High-Level)",
      "Mức thiết kế giao diện đồ họa (Graphic UI) và Mức thiết kế mạch vi xử lý phần cứng (Hardware)",
      "Mức kế hoạch chi phí ngân sách (Budget Cost) và Mức tiến độ biểu thời gian (Time Schedule)"
    ],
    answer: 0,
    explanation: "Hai mức mô tả Use Case chuẩn: Brief Description (đoạn văn tóm tắt 1-2 câu về mục tiêu) và Fully Dressed Description (bản đặc tả chi tiết với đầy đủ 10 trường dữ liệu và các luồng kịch bản).",
    difficulty: "easy",
    type: "inside",
    questionType: "fill-blank",
    examSet: 2
  },
  {
    id: "ad-c3-d2-004",
    question: "Khẳng định nào sau đây là SAI khi nói về các đặc trưng của giai đoạn Initiation trong Unified Process?",
    options: [
      "Giai đoạn Initiation hoàn thành việc lập trình và kiểm thử 100% tất cả các tính năng dự án",
      "Giai đoạn Initiation chỉ xây dựng khoảng 10% đến 20% các Use Case quan trọng nhất của hệ thống",
      "Giai đoạn Initiation tập trung nhận diện các rủi ro lớn nhất và ước tính sơ bộ về ngân sách",
      "Giai đoạn Initiation giúp ban lãnh đạo đưa ra quyết định Go hoặc No-Go tại cổng kiểm soát"
    ],
    answer: 0,
    explanation: "Khẳng định A SAI vì pha Initiation chỉ khảo sát, lập kế hoạch và định hình phạm vi (chỉ đặc tả sâu khoảng 10-20% Use Case cốt lõi), tuyệt đối không lập trình 100% tính năng.",
    difficulty: "medium",
    type: "inside",
    questionType: "choose-wrong",
    examSet: 2
  },
  {
    id: "ad-c3-d2-005",
    question: "Khung chữ nhật 'Ranh giới hệ thống' (System Boundary) trong Use Case Diagram có vai trò cốt lõi là gì?",
    options: [
      "Xác định phạm vi trách nhiệm: những gì thuộc về phần mềm ở bên trong và bên ngoài là Actor",
      "Trang trí khung viền mỹ thuật cho trang giấy vẽ biểu đồ để gây ấn tượng với khách hàng",
      "Ngăn cản các virus độc hại từ mạng Internet xâm nhập vào các hình elip Use Case bên trong",
      "Chỉ định vị trí đặt máy chủ vật lý bên trong tòa nhà trung tâm dữ liệu của doanh nghiệp"
    ],
    answer: 0,
    explanation: "System Boundary (Hộp ranh giới hệ thống) phân định rõ ranh giới phạm vi: những Use Case bên trong thuộc trách nhiệm xây dựng của hệ thống; các Actor bên ngoài là môi trường tương tác.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-006",
    question: "Tình huống: Khi ngân hàng số kết nối cổng Napas để chuyển tiền, Napas nằm ở vị trí nào so với System Boundary?",
    options: [
      "Napas là Actor bên ngoài, bắt buộc phải nằm ngoài khung chữ nhật System Boundary của app",
      "Napas là một Use Case nội bộ, bắt buộc phải nằm bên trong khung chữ nhật System Boundary",
      "Napas bắt buộc phải được vẽ đè lên trên đường viền nét liền của khung chữ nhật hệ thống",
      "Napas không được phép xuất hiện trong bất kỳ bản vẽ kỹ thuật nào của dự án ngân hàng số"
    ],
    answer: 0,
    explanation: "Cổng thanh toán liên ngân hàng Napas là một hệ thống bên ngoài (External System Actor), do đó bắt buộc phải nằm NGOÀI ranh giới System Boundary của ứng dụng ngân hàng số.",
    difficulty: "hard",
    type: "inside",
    questionType: "case-study",
    examSet: 2
  },

  // ==================== NHÓM 2: EVENT DECOMPOSITION & 3 LOẠI EVENTS (8 CÂU: 007 - 014) ====================
  {
    id: "ad-c3-d2-007",
    question: "Nguyên tắc vàng trong kỹ thuật phân rã sự kiện (Event Decomposition) quy định tỷ lệ ánh xạ là gì?",
    options: [
      "Mỗi sự kiện nghiệp vụ (Business Event) tương ứng với đúng một Ca sử dụng (System Use Case)",
      "Mỗi sự kiện nghiệp vụ bắt buộc phải sinh ra đúng mười Ca sử dụng khác nhau trong hệ thống",
      "Mọi sự kiện nghiệp vụ đều bị gộp chung vào một Ca sử dụng duy nhất có tên là Quản trị viên",
      "Không có bất kỳ mối quan hệ hay quy tắc ánh xạ nào giữa Business Event và System Use Case"
    ],
    answer: 0,
    explanation: "Quy tắc kinh điển của Event Decomposition là: '1 Business Event ➔ 1 System Use Case'. Mỗi khi một sự kiện xảy ra, hệ thống phản hồi bằng một Use Case tương ứng.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-008",
    question: "Trong bảng phân tích sự kiện (Event Table), cột 'Trigger' (Tác nhân kích hoạt) có ý nghĩa là gì?",
    options: [
      "Tín hiệu hoặc dữ liệu đầu vào cụ thể làm cho hệ thống nhận biết rằng sự kiện đã bắt đầu xảy ra",
      "Tên của người kỹ sư phân tích nghiệp vụ chịu trách nhiệm phê duyệt tài liệu thiết kế",
      "Thời gian tối đa mà máy chủ được phép trì hoãn trước khi phát tín hiệu báo động đỏ",
      "Địa chỉ thư điện tử của khách hàng nhận kết quả giao dịch thanh toán thành công của đơn hàng"
    ],
    answer: 0,
    explanation: "Trigger (Tác nhân kích hoạt) là tín hiệu hoặc luồng dữ liệu (Data/Signal) gửi vào hệ thống, báo hiệu rằng sự kiện nghiệp vụ đã xảy ra (ví dụ: 'Đơn đặt hàng được gửi', 'Tín hiệu đồng hồ báo giờ').",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-009",
    question: "Trong cấu trúc của Event Table, sự khác biệt giữa cột 'Source' và cột 'Destination' là gì?",
    options: [
      "Source là đối tượng khởi phát và gửi Trigger vào; Destination là đối tượng nhận Response ra",
      "Source là ngôn ngữ lập trình nguồn; Destination là tập tin nhị phân sau khi biên dịch xong",
      "Source luôn luôn là máy tính máy chủ; còn Destination luôn luôn là điện thoại thông minh",
      "Source và Destination là hai cột dữ liệu hoàn toàn giống nhau và có thể xóa bớt một cột"
    ],
    answer: 0,
    explanation: "Source (Nguồn) là nơi xuất phát tín hiệu Trigger (thường là Primary Actor). Destination (Đích đến) là nơi nhận kết quả phản hồi Response từ hệ thống (có thể là Actor đó hoặc bên thứ ba).",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-010",
    question: "Khẳng định nào sau đây là SAI khi nói về vai trò của Bảng phân tích sự kiện (Event Table)?",
    options: [
      "Event Table được dùng trực tiếp để thay thế cho cơ sở dữ liệu quan hệ SQL trong môi trường thật",
      "Event Table là cầu nối chuyển tiếp giúp BA xác định danh sách Use Case một cách có hệ thống",
      "Event Table giúp đảm bảo không bỏ sót bất kỳ sự kiện nghiệp vụ quan trọng nào của doanh nghiệp",
      "Event Table ghi nhận rõ ràng nguồn kích hoạt, phản hồi đầu ra và đích đến của từng sự kiện"
    ],
    answer: 0,
    explanation: "Khẳng định A SAI vì Event Table là công cụ tài liệu phân tích logic của BA trong giai đoạn thiết kế yêu cầu, hoàn toàn không phải cơ sở dữ liệu để lưu trữ bản ghi người dùng.",
    difficulty: "medium",
    type: "inside",
    questionType: "choose-wrong",
    examSet: 2
  },
  {
    id: "ad-c3-d2-011",
    question: "Các bước chuẩn mực trong quy trình áp dụng kỹ thuật Phân rã sự kiện (Event Decomposition) là:",
    options: [
      "Nhận diện sự kiện ➔ Xác định loại sự kiện ➔ Lập Event Table ➔ Suy diễn danh sách Use Case",
      "Viết mã nguồn Java ➔ Tạo bảng cơ sở dữ liệu ➔ Thiết kế giao diện ➔ Mới bắt đầu tìm sự kiện",
      "Vẽ sơ đồ mạng ➔ Mua sắm máy chủ ➔ Cài đặt hệ điều hành ➔ Phỏng vấn giám đốc điều hành",
      "Ký duyệt hợp đồng ➔ Sa thải lập trình viên ➔ Tự động bàn giao hệ thống cho khách hàng dùng"
    ],
    answer: 0,
    explanation: "Quy trình chuẩn: 1. Nhận diện các sự kiện nghiệp vụ ➔ 2. Phân loại sự kiện (External/Temporal/State) ➔ 3. Lập bảng Event Table chi tiết ➔ 4. Đặt tên và xác định danh sách System Use Cases.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-012",
    question: "Tiêu chí nào giúp BA phân biệt giữa một Business Event thực sự và một thao tác nội bộ trong Use Case?",
    options: [
      "Business Event diễn ra độc lập và đòi hỏi hệ thống phản hồi; thao tác nội bộ chỉ là một bước con",
      "Business Event luôn viết bằng chữ in hoa; còn thao tác nội bộ luôn viết bằng chữ in thường",
      "Business Event chỉ xảy ra vào ban đêm; còn thao tác nội bộ chỉ được thực hiện vào ban ngày",
      "Business Event do giám đốc công ty thực hiện; còn thao tác nội bộ do bảo vệ cơ quan làm"
    ],
    answer: 0,
    explanation: "Một Business Event là sự kiện kích hoạt cả một quy trình nghiệp vụ trọn vẹn. Các hành vi nhỏ như 'Nhập tên đăng nhập', 'Bấm nút Tiếp tục' chỉ là bước con (Internal Steps) bên trong Use Case.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-013",
    question: "Tình huống: Khi cảm biến nhiệt độ phòng máy chủ vượt quá 50 độ C, còi báo động tự động hú vang. Đây là sự kiện gì?",
    options: [
      "State Event (Sự kiện trạng thái do thông số nhiệt độ bên trong chạm ngưỡng giới hạn nguy hiểm)",
      "External Event (Sự kiện bên ngoài do một nhân viên cố tình châm lửa vào thanh cảm biến)",
      "Temporal Event (Sự kiện thời gian do đồng hồ báo thức trên điện thoại di động phát chuông)",
      "Software Bug (Lỗi lập trình phần mềm do kỹ sư kiểm thử cài đặt sai thư viện đồ họa máy tính)"
    ],
    answer: 0,
    explanation: "Sự kiện được kích hoạt tự động khi một trạng thái hoặc chỉ số nội tại (nhiệt độ phòng máy) vượt qua ngưỡng quy định là một State Event (Sự kiện trạng thái) điển hình.",
    difficulty: "hard",
    type: "inside",
    questionType: "case-study",
    examSet: 2
  },
  {
    id: "ad-c3-d2-014",
    question: "Hãy chọn phương án ghép cặp ĐÚNG NHẤT giữa các cột của Event Table và vai trò kỹ thuật của chúng:",
    options: [
      "Trigger - Dữ liệu kích hoạt; Source - Tác nhân khởi xướng; Response - Dữ liệu kết quả phản hồi",
      "Trigger - Nơi nhận kết quả; Source - Tên ca sử dụng; Response - Dữ liệu kích hoạt ban đầu",
      "Trigger - Tên lập trình viên; Source - Cổng mạng Internet; Response - Bảng cơ sở dữ liệu",
      "Trigger - Báo cáo tài chính; Source - Ký hiệu biểu đồ; Response - Địa chỉ phòng máy chủ"
    ],
    answer: 0,
    explanation: "Trong Event Table: Trigger là tín hiệu/dữ liệu kích hoạt; Source là nơi phát sinh tín hiệu; Response là dữ liệu/thông báo phản hồi mà hệ thống tạo ra sau khi xử lý.",
    difficulty: "hard",
    type: "inside",
    questionType: "matching",
    examSet: 2
  },

  // ==================== NHÓM 3: NHẬN DIỆN ACTOR & 4 LOẠI ACTOR (6 CÂU: 015 - 020) ====================
  {
    id: "ad-c3-d2-015",
    question: "Nguyên tắc cốt lõi quan trọng nhất khi nhận diện Actor trong mô hình Use Case là gì?",
    options: [
      "Actor đại diện cho một Vai trò (Role) trong mối quan hệ với hệ thống, chứ không phải một chức danh",
      "Actor bắt buộc phải là một nhân viên chính thức có tên trong bảng chấm công hàng tháng",
      "Mỗi con người cụ thể ngoài đời bắt buộc phải được vẽ thành một Actor riêng biệt độc lập",
      "Actor chỉ được phép tương tác với hệ thống thông qua các bàn phím máy tính để bàn có dây"
    ],
    answer: 0,
    explanation: "Actor mô hình hóa VAI TRÒ (Role) tương tác, không phải con người cụ thể hay chức danh hành chính. Ví dụ: 'Customer' (Khách hàng) là vai trò, có thể do nhiều người đảm nhận.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-016",
    question: "Trong mô hình hóa Use Case, một 'System Actor' (Tác nhân hệ thống) khác với Human Actor ở điểm nào?",
    options: [
      "Là một hệ thống phần mềm, cơ sở dữ liệu hoặc thiết bị phần cứng bên ngoài giao tiếp tự động",
      "Là một nhân sự cấp quản lý có quyền can thiệp vào máy chủ mà không cần nhập mật khẩu",
      "Là một con robot hình người có khả năng tự động bấm phím máy tính như nhân viên văn phòng",
      "Là một khái niệm hoàn toàn bị cấm sử dụng trong tất cả các bản vẽ biểu đồ chuẩn của UML"
    ],
    answer: 0,
    explanation: "System Actor là một hệ thống bên ngoài (External System), API hoặc thiết bị tự động tương tác với hệ thống đang xét (như Cổng thanh toán, Hệ thống Email, Cảm biến phần cứng).",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-017",
    question: "Nếu một giảng viên đại học vừa tham gia giảng dạy vừa đăng ký học thêm văn bằng hai, BA nên làm gì?",
    options: [
      "Mô hình hóa thành hai Actor độc lập: 'Giảng viên' (Instructor) và 'Sinh viên' (Student)",
      "Chỉ mô hình hóa một Actor duy nhất là Giảng viên và cấm người này đăng ký học môn học mới",
      "Tạo ra một Actor mới có tên là 'Siêu con người' có toàn quyền xem toàn bộ đề thi của trường",
      "Xóa bỏ hoàn toàn hồ sơ của người này trên hệ thống để tránh việc xảy ra lỗi trùng lặp dữ liệu"
    ],
    answer: 0,
    explanation: "Vì Actor đại diện cho vai trò tương tác: khi lên lớp họ đóng vai trò Instructor; khi đăng ký học họ đóng vai trò Student. Hai vai trò độc lập tương tác với các Use Case khác nhau.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-018",
    question: "Khẳng định nào sau đây là SAI khi bàn về các phương pháp nhận diện Actor cho hệ thống mới?",
    options: [
      "Mọi người dùng khi dùng phần mềm đều bắt buộc phải được gán vào vai trò Primary Actor",
      "BA có thể tìm kiếm Actor bằng cách trả lời câu hỏi: 'Ai là người cung cấp thông tin đầu vào?'",
      "BA có thể tìm kiếm Actor bằng cách trả lời câu hỏi: 'Hệ thống nào nhận dữ liệu xuất ra?'",
      "Các dịch vụ hạ tầng như đồng hồ thời gian của hệ điều hành có thể coi là tác nhân thời gian"
    ],
    answer: 0,
    explanation: "Khẳng định A SAI vì người dùng có thể là Supporting Actor (hỗ trợ xác thực) hoặc Offstage Actor (chỉ nhận báo cáo gián tiếp), không phải ai cũng là Primary Actor.",
    difficulty: "medium",
    type: "inside",
    questionType: "choose-wrong",
    examSet: 2
  },
  {
    id: "ad-c3-d2-019",
    question: "Khi đối chiếu từ bảng sự kiện (Event Table), thông tin ở cột nào thường giúp xác định trực tiếp các Actors?",
    options: [
      "Cột Source (Xác định Primary Actor) và cột Destination (Xác định Secondary/Supporting Actor)",
      "Cột Use Case (Xác định danh sách các bảng dữ liệu sẽ được tạo bên trong cơ sở dữ liệu)",
      "Cột Response (Xác định tên ngôn ngữ lập trình sẽ được sử dụng để viết mã cho chức năng)",
      "Cột Trigger (Xác định số lượng vi xử lý cần mua để lắp đặt cho hệ thống máy chủ mạng)"
    ],
    answer: 0,
    explanation: "Cột Source (Nguồn gửi tín hiệu) thường trực tiếp chỉ ra Primary Actor. Cột Destination (Nơi nhận kết quả phản hồi) giúp nhận diện các Supporting hoặc Offstage Actors.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-020",
    question: "Tình huống: Trong phần mềm bệnh viện, 'Bác sĩ' nhập đơn thuốc và 'Cơ quan Bảo hiểm Xã hội' nhận báo cáo chi phí:",
    options: [
      "Bác sĩ là Primary Actor trực tiếp; Cơ quan BHXH là Offstage/Supporting Actor nhận dữ liệu",
      "Bác sĩ là Supporting Actor; còn Cơ quan BHXH là Primary Actor trực tiếp khám cho bệnh nhân",
      "Cả Bác sĩ và Cơ quan BHXH đều bắt buộc phải là các Use Case hình elip bên trong phần mềm",
      "Cơ quan BHXH là ranh giới hệ thống; còn Bác sĩ là một thuộc tính riêng tư của cơ sở dữ liệu"
    ],
    answer: 0,
    explanation: "Bác sĩ trực tiếp tương tác hoàn thành mục tiêu kê đơn (Primary Actor). Cơ quan BHXH là bên liên quan nhận báo cáo chi phí để duyệt bảo hiểm (Offstage / External Actor).",
    difficulty: "hard",
    type: "inside",
    questionType: "case-study",
    examSet: 2
  },

  // ==================== NHÓM 4: QUAN HỆ NÂNG CAO GIỮA CÁC USE CASE (8 CÂU: 021 - 028) ====================
  {
    id: "ad-c3-d2-021",
    question: "Mục đích quan trọng nhất của việc tổ chức và liên kết các Use Case bằng các quan hệ nâng cao là gì?",
    options: [
      "Quản lý độ phức tạp, tránh lặp lại các luồng logic chung và làm sơ đồ sáng sủa, dễ hiểu",
      "Để làm cho bản vẽ trông phức tạp hơn nhằm chứng minh năng lực kỹ thuật với khách hàng",
      "Nhằm mục đích tự động biên dịch sơ đồ Use Case thành các tập tin mã nguồn ngôn ngữ Java",
      "Để loại bỏ hoàn toàn sự cần thiết phải viết tài liệu đặc tả kịch bản Use Case chi tiết"
    ],
    answer: 0,
    explanation: "Tổ chức Use Case bằng `<<include>>`, `<<extend>>` và Generalization giúp tái sử dụng luồng logic, loại bỏ dư thừa và quản lý độ phức tạp của các hệ thống quy mô lớn.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-022",
    question: "Quan hệ Kế thừa (Generalization) giữa các Actor trong Use Case Diagram có ý nghĩa như thế nào?",
    options: [
      "Actor con kế thừa toàn bộ các Use Case và quyền truy cập của Actor cha, đồng thời có thêm quyền riêng",
      "Actor con sẽ xóa bỏ toàn bộ quyền truy cập và chức năng của Actor cha trong hệ thống phần mềm",
      "Hai Actor này hoàn toàn độc lập và không thể giao tiếp với cùng một hệ thống thông tin chung",
      "Chỉ dùng để biểu thị mối quan hệ huyết thống gia đình ngoài đời thực của những người sử dụng"
    ],
    answer: 0,
    explanation: "Actor Generalization cho phép Actor con kế thừa toàn bộ mối liên kết tương tác với các Use Case của Actor cha (is-a relationship) và bổ sung các quyền/tính năng chuyên biệt.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-023",
    question: "Hướng mũi tên nét đứt của quan hệ <<extend>> trong biểu đồ Use Case Diagram được quy định là:",
    options: [
      "Mũi tên nét đứt có gắn nhãn <<extend>> trỏ từ Extension Use Case VỀ PHÍA Base Use Case",
      "Mũi tên nét đứt có gắn nhãn <<extend>> trỏ từ Base Use Case VỀ PHÍA Extension Use Case",
      "Mũi tên nét liền hai chiều có hình tam giác đặc màu đen ở cả hai đầu của đoạn liên kết",
      "Không bao giờ có mũi tên mà chỉ là một đường nét đứt khúc nằm ngang ở giữa hai hình elip"
    ],
    answer: 0,
    explanation: "Quy chuẩn UML: Mũi tên nét đứt `<<extend>>` trỏ từ Extension Use Case VỀ PHÍA Base Use Case (Extension ➔ Base), vì Extension Case biết rõ điểm mở rộng của Base Case.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-024",
    question: "Về tính độc lập, điểm khác biệt then chốt giữa Base Use Case trong <<include>> và trong <<extend>> là:",
    options: [
      "Trong <<include>>, Base Case phụ thuộc vào Use Case con; trong <<extend>>, Base Case hoàn toàn độc lập",
      "Trong <<include>>, Base Case không biết Use Case con; trong <<extend>>, Base Case bắt buộc phải biết",
      "Cả hai quan hệ trên đều đòi hỏi Base Use Case phải phụ thuộc chặt chẽ vào các Use Case bên cạnh",
      "Không có bất kỳ sự khác biệt nào về tính độc lập giữa hai loại quan hệ kỹ thuật kể trên"
    ],
    answer: 0,
    explanation: "Trong `<<include>>`, Base Case biết rõ và bắt buộc phải gọi Included Case để thành công. Trong `<<extend>>`, Base Case hoàn toàn độc lập, không hề biết có sự mở rộng nào hay không.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-025",
    question: "Khẳng định nào sau đây là SAI khi nói về quan hệ <<extend>> trong mô hình Use Case?",
    options: [
      "Mọi hành vi được định nghĩa trong Extension Use Case bắt buộc phải luôn luôn được thực thi",
      "Extension Use Case chỉ chèn thêm hành vi vào Base Use Case khi điều kiện mở rộng thỏa mãn",
      "Một Base Use Case có thể có nhiều Extension Use Case khác nhau gắn vào các Extension Point",
      "Extension Use Case giúp giữ cho Base Use Case đơn giản, không bị rối rắm bởi các ngoại lệ"
    ],
    answer: 0,
    explanation: "Khẳng định A SAI vì `<<extend>>` là quan hệ tùy chọn có điều kiện (Optional / Conditional), hành vi mở rộng chỉ thực thi khi điều kiện kích hoạt tại Extension Point được đáp ứng.",
    difficulty: "medium",
    type: "inside",
    questionType: "choose-wrong",
    examSet: 2
  },
  {
    id: "ad-c3-d2-026",
    question: "Khi nào một chuyên viên BA NÊN trích xuất một luồng logic thành một Use Case riêng với quan hệ <<include>>?",
    options: [
      "Khi luồng logic đó xuất hiện lặp đi lặp lại ở ít nhất từ hai Use Case độc lập trở lên",
      "Khi luồng logic đó chỉ gồm đúng một thao tác nhấp chuột duy nhất của người sử dụng",
      "Khi khách hàng yêu cầu muốn xem thật nhiều hình elip màu xanh trên trang tài liệu dự án",
      "Khi lập trình viên muốn chia nhỏ chương trình thành các hàm ngắn không quá năm dòng lệnh"
    ],
    answer: 0,
    explanation: "Ta trích xuất một Included Use Case khi có một đoạn kịch bản hoặc logic chung (như 'Xác thực sinh viên', 'Kiểm tra tín dụng') được dùng chung bởi hai hoặc nhiều Use Case khác nhau.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-027",
    question: "Tình huống: Khi 'Đăng ký môn học', hệ thống BẮT BUỘC phải thực hiện 'Kiểm tra môn tiên quyết'. Mối quan hệ là:",
    options: [
      "Quan hệ <<include>> trỏ từ 'Đăng ký môn học' sang 'Kiểm tra môn tiên quyết'",
      "Quan hệ <<extend>> trỏ từ 'Đăng ký môn học' sang 'Kiểm tra môn tiên quyết'",
      "Quan hệ Generalization trỏ từ 'Kiểm tra môn tiên quyết' sang 'Đăng ký môn học'",
      "Hai Use Case này không thể có bất kỳ mối liên hệ nào với nhau trong cùng biểu đồ"
    ],
    answer: 0,
    explanation: "Vì việc kiểm tra môn tiên quyết là bắt buộc 100% trong mọi lần đăng ký, nên 'Đăng ký môn học' bao hàm (`<<include>>`) Use Case 'Kiểm tra môn tiên quyết'.",
    difficulty: "hard",
    type: "inside",
    questionType: "case-study",
    examSet: 2
  },
  {
    id: "ad-c3-d2-028",
    question: "Hãy chọn phương án ghép cặp ĐÚNG NHẤT giữa loại quan hệ trong Use Case Diagram và đặc điểm ngữ nghĩa:",
    options: [
      "<<include>> - Bắt buộc dùng chung; <<extend>> - Mở rộng có điều kiện; Generalization - Kế thừa",
      "<<include>> - Tùy chọn rẽ nhánh; <<extend>> - Bắt buộc thực thi; Generalization - Xóa dữ liệu",
      "<<include>> - Kế thừa lớp cha; <<extend>> - Bắt buộc dùng chung; Generalization - Tùy chọn",
      "<<include>> - Gọi hàm đệ quy; <<extend>> - Quản trị hệ thống; Generalization - Báo cáo lỗi"
    ],
    answer: 0,
    explanation: "Ngữ nghĩa chuẩn: `<<include>>` (Bắt buộc / Tái sử dụng), `<<extend>>` (Tùy chọn / Mở rộng có điều kiện), Generalization (Kế thừa / Chuyên biệt hóa is-a).",
    difficulty: "hard",
    type: "inside",
    questionType: "matching",
    examSet: 2
  },

  // ==================== NHÓM 5: KỊCH BẢN FULLY DRESSED & 5 SAI LẦM PHỔ BIẾN (8 CÂU: 029 - 036) ====================
  {
    id: "ad-c3-d2-029",
    question: "Trong bản đặc tả Fully Dressed Use Case, trường 'Stakeholders and Interests' nhằm mục đích gì?",
    options: [
      "Liệt kê tất cả các bên liên quan và những kỳ vọng, lợi ích mà hệ thống phải đảm bảo cho họ",
      "Liệt kê số tài khoản ngân hàng của các nhà đầu tư tài chính đã rót vốn vào công ty công nghệ",
      "Liệt kê danh sách các món ăn yêu thích của khách hàng khi tham gia các buổi tiệc chiêu đãi",
      "Liệt kê thời gian biểu các ca trực đêm của nhân viên bảo vệ phụ trách an ninh tòa nhà"
    ],
    answer: 0,
    explanation: "Stakeholders and Interests (Các bên liên quan và quyền lợi) nêu rõ ai quan tâm đến kết quả của Use Case này và hệ thống cần thỏa mãn những yêu cầu/ràng buộc gì cho họ.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-030",
    question: "Trường 'Yêu cầu đặc biệt' (Special Requirements) trong kịch bản Fully Dressed Use Case dùng để ghi nhận:",
    options: [
      "Các yêu cầu phi chức năng (hiệu năng, bảo mật, tính sẵn sàng) gắn liền với Use Case cụ thể đó",
      "Các lời chúc mừng sinh nhật được gửi tự động tới hòm thư cá nhân của các lập trình viên",
      "Danh sách các phần thưởng hiện vật dành cho nhân viên bán hàng đạt doanh số cao nhất tháng",
      "Những điều khoản pháp lý quy định mức lương tối thiểu của người lao động trong doanh nghiệp"
    ],
    answer: 0,
    explanation: "Special Requirements (Yêu cầu đặc biệt) là nơi BA ghi lại các yêu cầu phi chức năng (Non-Functional Requirements / Quality Attributes) đặc thù của riêng Use Case đó.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-031",
    question: "Sai lầm phổ biến khi đặt tên cho Use Case bằng danh từ kỹ thuật (như 'Student Database') vi phạm nguyên tắc nào?",
    options: [
      "Vi phạm quy tắc Động từ + Cụm danh từ biểu thị mục tiêu hành động của người dùng (Verb + Noun)",
      "Vi phạm luật bản quyền sở hữu trí tuệ của tổ chức chuẩn hóa phần mềm quốc tế OMG",
      "Làm cho máy vi tính không thể nhận dạng được chữ cái tiếng Anh khi người dùng gõ lệnh",
      "Vi phạm các quy tắc đặt tên biến trong các ngôn ngữ lập trình hướng đối tượng C++ và Java"
    ],
    answer: 0,
    explanation: "Use Case phải phản ánh hành vi hướng mục tiêu của người dùng: bắt buộc dùng `Verb + Noun Phrase` (như 'Manage Student Information'), không được đặt tên là một danh từ tĩnh như 'Student Database'.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-032",
    question: "Sai lầm nào sau đây xảy ra khi BA nhầm lẫn giữa một bước trong luồng sự kiện với một Use Case?",
    options: [
      "Vẽ các hành động nhỏ như 'Nhập mật khẩu' hay 'Bấm nút Xác nhận' thành các Use Case hình elip riêng",
      "Sử dụng biểu tượng hình người (Stick figure) để biểu diễn các tác nhân con người tương tác",
      "Đánh số thứ tự các bước trong luồng kịch bản chính Main Success Scenario từ 1 đến 10",
      "Mô tả các tình huống rẽ nhánh lỗi ngoại lệ trong phần kịch bản mở rộng Extension Flows"
    ],
    answer: 0,
    explanation: "Biến các bước thao tác vi mô (như 'Enter Password', 'Click Submit') thành Use Case riêng là sai lầm phổ biến. Chúng chỉ là các bước con bên trong luồng kịch bản của một Use Case trọn vẹn.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-033",
    question: "Việc vẽ biểu tượng Actor bên trong khung hình chữ nhật System Boundary sẽ gây ra hậu quả nào?",
    options: [
      "Làm sai lệch ranh giới hệ thống, biến một thực thể bên ngoài thành một phần mềm nội bộ bên trong",
      "Làm cho tệp tin hình ảnh của biểu đồ bị hỏng định dạng và không thể mở được trên máy tính",
      "Làm tăng chi phí tiền điện tiêu thụ của các máy chủ đám mây lưu trữ tài liệu phân tích",
      "Tự động kích hoạt cơ chế xóa sạch toàn bộ mã nguồn của các kỹ sư lập trình trong dự án"
    ],
    answer: 0,
    explanation: "Actor đại diện cho thế giới bên ngoài. Đưa Actor vào bên trong System Boundary là sai nghiêm trọng về mặt ngữ nghĩa UML, khiến người đọc hiểu nhầm Actor là một thành phần phần mềm của hệ thống.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-034",
    question: "Quy trình tư duy 11 chặng (The Cognitive Pipeline) của một BA từ bài toán thực tế đến Use Case Model bắt đầu từ:",
    options: [
      "Khảo sát bối cảnh kinh doanh ➔ Nhận diện các Business Events ➔ Phân loại Actor và lập Event Table",
      "Viết mã nguồn các lớp đối tượng ➔ Tạo bảng dữ liệu ➔ Rồi mới tìm hiểu khách hàng cần làm gì",
      "Vẽ ngay các biểu đồ hình elip phức tạp với hàng trăm quan hệ <<extend>> đan xen chằng chịt",
      "Cài đặt phần mềm diệt virus cho máy tính rồi đợi khách hàng tự gửi biểu đồ hoàn chỉnh sang"
    ],
    answer: 0,
    explanation: "Tiến trình tư duy chuẩn: Đi từ bối cảnh kinh doanh ➔ Nhận diện các sự kiện nghiệp vụ (Events) ➔ Phân loại tác nhân (Actors) ➔ Lập Event Table ➔ Chuẩn hóa Use Case Model và viết đặc tả.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-035",
    question: "Tình huống: BA vẽ 'Cơ sở dữ liệu Oracle' là hình người Actor nằm BÊN TRONG hộp System Boundary. Lỗi sai là:",
    options: [
      "Sai cả hai yếu tố: CSDL nội bộ không phải Actor bên ngoài, và Actor tuyệt đối không nằm trong Boundary",
      "Vẽ đúng hoàn toàn 100% vì cơ sở dữ liệu đóng vai trò quan trọng nhất trong toàn bộ hệ thống",
      "Chỉ sai ở chỗ không tô màu đỏ cho biểu tượng hình người của cơ sở dữ liệu trên trang giấy",
      "Chỉ sai ở chỗ đặt tên chữ Oracle viết hoa thay vì phải viết bằng toàn bộ chữ cái in thường"
    ],
    answer: 0,
    explanation: "Sai nghiêm trọng: 1. CSDL nội bộ là thành phần bên trong, không phải Actor; 2. Quy tắc UML cấm vẽ Actor nằm bên trong khung chữ nhật System Boundary.",
    difficulty: "hard",
    type: "inside",
    questionType: "case-study",
    examSet: 2
  },
  {
    id: "ad-c3-d2-036",
    question: "Khẳng định nào sau đây là SAI khi tiến hành kiểm định chất lượng mô hình Use Case (Audit Checklist)?",
    options: [
      "Một Use Case chuẩn chỉ cần phục vụ cho lập trình viên đọc hiểu, không cần người dùng nghiệp vụ hiểu",
      "Mỗi Use Case phải có tên bắt đầu bằng một động từ thể chủ động gắn liền với cụm danh từ rõ nghĩa",
      "Mọi Actor trong biểu đồ bắt buộc phải có ít nhất một đường liên kết tương tác với một Use Case",
      "Không được xuất hiện các Use Case 'mồ côi' hoàn toàn không kết nối tới bất kỳ Actor hay Use Case nào"
    ],
    answer: 0,
    explanation: "Khẳng định A SAI vì Use Case là ngôn ngữ cầu nối giao tiếp: nó bắt buộc phải được viết bằng ngôn ngữ nghiệp vụ trong sáng để cả khách hàng/người dùng lẫn đội ngũ kỹ thuật cùng hiểu thống nhất.",
    difficulty: "hard",
    type: "inside",
    questionType: "choose-wrong",
    examSet: 2
  },

  // ==================== OUTSIDE: VẬN DỤNG THỰC TẾ DỰ ÁN (4 CÂU: 037 - 040) ====================
  {
    id: "ad-c3-d2-037",
    question: "[Outside] Trong kiến trúc phần mềm hướng dịch vụ (Microservices), ranh giới một Use Case nghiệp vụ có quan hệ thế nào?",
    options: [
      "Một Use Case nghiệp vụ có thể cần sự phối hợp xử lý của nhiều Microservices độc lập bên dưới",
      "Mỗi Use Case bắt buộc phải tương ứng đúng với một Microservice và cấm giao tiếp với service khác",
      "Kiến trúc Microservices hoàn toàn cấm đoán việc sử dụng mô hình Use Case trong phân tích nghiệp vụ",
      "Mọi Microservices đều bắt buộc phải được mô hình hóa thành các Actor hình người trên biểu đồ"
    ],
    answer: 0,
    explanation: "[Outside] Use Case ở mức nghiệp vụ (Business Capability). Khi triển khai kỹ thuật Microservices, một Use Case (như 'Place Order') có thể gọi đồng thời Order Service, Inventory Service và Payment Service.",
    difficulty: "hard",
    type: "outside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-038",
    question: "[Outside] Trong phân cấp quản trị sản phẩm số (Product Management), mối quan hệ thứ bậc chuẩn mực từ lớn đến nhỏ là:",
    options: [
      "Theme ➔ Epic (Tương đương Use Case lớn) ➔ Feature ➔ User Story ➔ Task (Nhiệm vụ kỹ thuật)",
      "Task ➔ User Story ➔ Feature ➔ Epic ➔ Theme (Xếp theo thứ tự từ chi tiết nhất đến tổng quan)",
      "User Story ➔ Task ➔ Theme ➔ Feature ➔ Epic (Xếp theo thứ tự bảng chữ cái tiếng Anh chuẩn)",
      "Feature ➔ Theme ➔ Task ➔ User Story ➔ Epic (Xếp theo thời gian thành lập công ty phần mềm)"
    ],
    answer: 0,
    explanation: "[Outside] Thứ bậc chuẩn trong Agile/Product: Theme (Chủ đề chiến lược) ➔ Epic (Mục tiêu lớn / Use Case) ➔ Feature (Tính năng) ➔ User Story (Câu chuyện người dùng nhỏ trong Sprint) ➔ Task (Tác vụ kỹ thuật).",
    difficulty: "hard",
    type: "outside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c3-d2-039",
    question: "[Outside] Tình huống: Ứng dụng giao hàng đồ ăn gọi Google Maps API để tính khoảng cách. Google Maps được mô hình hóa là:",
    options: [
      "Supporting Actor bên ngoài ranh giới hệ thống, cung cấp dịch vụ dữ liệu bản đồ cho Use Case",
      "Use Case con bên trong hệ thống và nối với Use Case tính phí vận chuyển bằng quan hệ <<extend>>",
      "Primary Actor vì Google Maps là người trực tiếp bỏ tiền ra trả phí đơn hàng đồ ăn cho khách hàng",
      "Internal Database Table chứa các bản ghi vị trí kinh độ vĩ độ lưu trữ trên ổ đĩa máy tính"
    ],
    answer: 0,
    explanation: "[Outside] Dịch vụ đám mây bên thứ ba (như Google Maps API) đóng vai trò Supporting / Secondary Actor nằm bên ngoài System Boundary, cung cấp dịch vụ tính toán tọa độ cho hệ thống.",
    difficulty: "hard",
    type: "outside",
    questionType: "case-study",
    examSet: 2
  },
  {
    id: "ad-c3-d2-040",
    question: "[Outside] Tình huống: Khi phân tích hệ thống thương mại điện tử, cách nào giúp BA tránh bẫy CRUD Functional Decomposition?",
    options: [
      "Thiết kế Use Case theo mục tiêu người dùng hoàn chỉnh (như 'Checkout Order' thay vì chia lẻ từng nút bấm)",
      "Vẽ riêng từng Use Case cho mỗi câu lệnh SQL (INSERT, SELECT, UPDATE, DELETE) của bảng cơ sở dữ liệu",
      "Không cho phép người dùng thực hiện bất kỳ thao tác chỉnh sửa thông tin nào trên giao diện web",
      "Xóa bỏ hoàn toàn chức năng giỏ hàng và ép khách hàng phải gọi điện thoại trực tiếp để đặt hàng"
    ],
    answer: 0,
    explanation: "[Outside] Để tránh bẫy Functional Decomposition, BA phải tập trung vào User Goal trọn vẹn: ví dụ Use Case 'Checkout Order' bao gồm cả việc xem lại, nhập địa chỉ, chọn thanh toán và xác nhận đơn hàng.",
    difficulty: "hard",
    type: "outside",
    questionType: "case-study",
    examSet: 2
  }
];

export function writePart2File() {
  const content = `/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
   CHAPTER 3: INITIATION PHASE — FROM BUSINESS EVENTS TO A SYSTEM USE CASE MODEL
   BỘ ĐỀ THI SỐ 2 (PART 2) — 40 CÂU HỎI CHUẨN CỐ ĐỊNH
   CƠ CẤU: 30% DỄ (12) - 40% TRUNG BÌNH (16) - 30% KHÓ (12)
   TỶ LỆ: 36 INSIDE + 4 OUTSIDE
   MÃ CÂU HỎI: ad-c3-d2-001 ĐẾN ad-c3-d2-040
   TIÊU CHUẨN: CHỐNG ĐOÁN BỪA (DELTA L <= 15 KÝ TỰ)
   ============================================================ */

export const questionsAdCh3Part2 = ${JSON.stringify(part2Questions, null, 2)};
`;
  fs.writeFileSync("data/questions-ad-ch3-part2.js", content, "utf8");
  console.log("Successfully written data/questions-ad-ch3-part2.js");
}
