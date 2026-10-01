import fs from "fs";

export const part1Questions = [
  // ==================== NHÓM 1: INITIATION PHASE & KHÁI NIỆM USE CASE (6 CÂU: 001 - 006) ====================
  {
    id: "ad-c3-d1-001",
    question: "Giai đoạn Khởi động dự án (Initiation / Inception Phase) trong Unified Process kết thúc bằng cột mốc nào?",
    options: [
      "Cột mốc Mục tiêu vòng đời dự án (Lifecycle Objective Milestone - LCO)",
      "Cột mốc Kiến trúc vòng đời hoàn chỉnh (Lifecycle Architecture Milestone)",
      "Cột mốc Khả năng vận hành ban đầu (Initial Operational Capability Milestone)",
      "Cột mốc Phát hành sản phẩm thương mại chính thức (Product Release Milestone)"
    ],
    answer: 0,
    explanation: "Trong Unified Process (UP), pha Initiation (Inception) kết thúc bằng cột mốc LCO (Lifecycle Objective Milestone), xác nhận phạm vi sơ bộ và tính khả thi kinh doanh của dự án.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-002",
    question: "Theo định nghĩa chuẩn mực của Ivar Jacobson, bản chất cốt lõi của một Use Case (Ca sử dụng) là gì?",
    options: [
      "Một chuỗi các hành động mang lại một kết quả giá trị có thể quan sát được cho Actor",
      "Một bảng cơ sở dữ liệu quan hệ dùng để lưu trữ các bản ghi thông tin của người dùng",
      "Một đoạn mã lập trình hàm xử lý thuật toán phức tạp trên máy chủ đám mây nội bộ",
      "Một biểu đồ mạng máy tính hiển thị cách thức kết nối dây cáp và trạm phát sóng wifi"
    ],
    answer: 0,
    explanation: "Ivar Jacobson định nghĩa Use Case là một tập hợp các chuỗi hành động mà hệ thống thực hiện nhằm mang lại một kết quả có giá trị quan sát được (Observable result of value) cho một Actor cụ thể.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-003",
    question: "Bốn thành phần ký hiệu trực quan cơ bản cấu thành một Biểu đồ Use Case Diagram trong UML bao gồm:",
    options: [
      "Actor (Hình người), Use Case (Hình elip), Association (Đường nối) và System Boundary",
      "Class (Hình chữ nhật 3 ngăn), Interface (Hình tròn), Package (Thư mục) và Dependency",
      "Initial Node (Hình tròn đen), Final Node (Mắt bò), Decision (Quả trám) và Swimlane",
      "Database Table (Bảng), Primary Key (Khóa chính), Foreign Key (Khóa ngoại) và Trigger"
    ],
    answer: 0,
    explanation: "Use Case Diagram gồm 4 thành phần nền tảng: Actor (Tác nhân), Use Case (Ca sử dụng), Association (Đường liên kết tương tác) và System Boundary (Ranh giới hệ thống dạng khung chữ nhật).",
    difficulty: "easy",
    type: "inside",
    questionType: "fill-blank",
    examSet: 1
  },
  {
    id: "ad-c3-d1-004",
    question: "Khẳng định nào sau đây là SAI khi nói về bản chất và mục đích của mô hình Use Case?",
    options: [
      "Mô hình Use Case tập trung thiết kế cấu trúc lưu trữ vật lý của các bảng cơ sở dữ liệu",
      "Mô hình Use Case mô tả chức năng của hệ thống dưới góc nhìn hướng người dùng bên ngoài",
      "Mô hình Use Case giúp phân định rõ ràng phạm vi bên trong và bên ngoài ranh giới hệ thống",
      "Mô hình Use Case đóng vai trò nền tảng để lập kế hoạch kiểm thử và viết tài liệu hướng dẫn"
    ],
    answer: 0,
    explanation: "Khẳng định A SAI vì mô hình Use Case là mô hình chức năng hành vi mức logic hướng người dùng, không bao giờ dùng để thiết kế cấu trúc vật lý của cơ sở dữ liệu.",
    difficulty: "medium",
    type: "inside",
    questionType: "choose-wrong",
    examSet: 1
  },
  {
    id: "ad-c3-d1-005",
    question: "Trong 6 hoạt động chính của giai đoạn Initiation, hoạt động nào đóng vai trò xác định tính khả thi dự án?",
    options: [
      "Tiến hành nghiên cứu và đánh giá tính khả thi dự án trên 3 phương diện (Feasibility Study)",
      "Lập trình hoàn tất 100% các chức năng cốt lõi và kiểm thử tải trọng máy chủ ở mức cực hạn",
      "Cài đặt hệ điều hành và phân chia ổ đĩa cứng cho tất cả các máy trạm tại các chi nhánh",
      "Thiết kế chi tiết giao diện đồ họa cho từng nút bấm của ứng dụng trên điện thoại di động"
    ],
    answer: 0,
    explanation: "Nghiên cứu tính khả thi (Feasibility Study) đánh giá 3 phương diện: Kinh tế (Economic), Kỹ thuật (Technical) và Vận hành (Organizational) là hoạt động then chốt của Initiation.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-006",
    question: "Tình huống: Khi phân tích 'Hệ thống Đăng ký môn học', đối tượng nào nằm BÊN NGOÀI ranh giới System Boundary?",
    options: [
      "Sinh viên đăng ký môn học và Giảng viên nhập điểm (Được mô hình hóa là các Actor bên ngoài)",
      "Ca sử dụng Đăng ký môn học và Ca sử dụng Xem điểm thi (Được vẽ bên trong ranh giới hộp)",
      "Ca sử dụng Thanh toán học phí trực tuyến (Được vẽ bên trong khung ranh giới của hệ thống)",
      "Cơ sở dữ liệu nội bộ chứa danh sách lớp học mở trong học kỳ đang diễn ra của nhà trường"
    ],
    answer: 0,
    explanation: "Sinh viên và Giảng viên là các Actor (người dùng bên ngoài), bắt buộc phải nằm ngoài khung chữ nhật System Boundary. Các Use Case nằm bên trong ranh giới hệ thống.",
    difficulty: "hard",
    type: "inside",
    questionType: "case-study",
    examSet: 1
  },

  // ==================== NHÓM 2: EVENT DECOMPOSITION & 3 LOẠI EVENTS (8 CÂU: 007 - 014) ====================
  {
    id: "ad-c3-d1-007",
    question: "Kỹ thuật 'Phân rã sự kiện' (Event Decomposition Technique) trong kỹ nghệ yêu cầu là gì?",
    options: [
      "Phương pháp tiếp cận dựa vào các sự kiện nghiệp vụ để xác định các Use Case của hệ thống",
      "Kỹ thuật kiểm tra dung lượng RAM của máy chủ khi có hàng triệu người dùng truy cập web",
      "Quy trình xóa sạch các bản ghi nhật ký sự cố phần mềm sau khi đã hoàn tất bảo trì định kỳ",
      "Phương pháp chia nhỏ mã nguồn chương trình thành các hàm ngôn ngữ máy vi xử lý nhị phân"
    ],
    answer: 0,
    explanation: "Event Decomposition là kỹ thuật tiêu chuẩn giúp BA phân tích các sự kiện nghiệp vụ diễn ra trong môi trường thực tế, từ đó suy diễn ra danh sách các Use Case tương ứng của hệ thống.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-008",
    question: "Sự kiện bên ngoài (External Event) trong phân loại sự kiện nghiệp vụ có đặc điểm nào sau đây?",
    options: [
      "Xảy ra trong môi trường bên ngoài và do một tác nhân (Actor) bên ngoài trực tiếp kích hoạt",
      "Tự động kích hoạt khi đồng hồ hệ thống điểm đúng 0 giờ đêm ngày cuối cùng của quý tài chính",
      "Kích hoạt khi dung lượng ổ đĩa cứng của máy chủ lưu trữ dữ liệu bị đầy vượt mức cho phép",
      "Chỉ xảy ra khi toàn bộ hệ thống mạng Internet của doanh nghiệp bị ngắt kết nối vật lý"
    ],
    answer: 0,
    explanation: "External Event (Sự kiện bên ngoài) là sự kiện xảy ra ngoài môi trường hệ thống và do Actor bên ngoài (như Khách hàng đặt mua, Sinh viên nộp đơn) kích hoạt và gửi tín hiệu vào hệ thống.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-009",
    question: "Sự kiện thời gian (Temporal Event) trong hệ thống thông tin được nhận diện bằng dấu hiệu nào?",
    options: [
      "Xảy ra tự động theo các mốc thời gian định kỳ hoặc thời hạn xác định trước mà không cần Actor",
      "Do người dùng nhấp chuột trực tiếp vào biểu tượng chiếc đồng hồ trên màn hình điện thoại",
      "Do lập trình viên cài đặt lại ngày giờ của máy tính cá nhân khi đi công tác qua nước ngoài",
      "Chỉ kích hoạt khi pin của máy tính xách tay bị cạn kiệt và chuyển sang chế độ ngủ đông"
    ],
    answer: 0,
    explanation: "Temporal Event (Sự kiện thời gian) kích hoạt dựa trên thời gian trôi qua hoặc một mốc lịch trình định trước (như hàng tuần, cuối tháng, hết hạn hợp đồng) mà không do Actor khởi phát trực tiếp.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-010",
    question: "Sự kiện trạng thái (State Event) diễn ra khi hệ thống ghi nhận điều kiện nào sau đây?",
    options: [
      "Một điều kiện hoặc trạng thái bên trong hệ thống thay đổi vượt qua một ngưỡng quy định trước",
      "Một khách hàng mới bước vào quầy giao dịch để mở sổ tiết kiệm không kỳ hạn bằng tiền mặt",
      "Thời điểm nửa đêm ngày chủ nhật hàng tuần khi các máy chủ bắt đầu tiến hành sao lưu dữ liệu",
      "Khi toàn bộ nhân viên trong công ty kết thúc giờ làm việc buổi chiều và tắt máy tính ra về"
    ],
    answer: 0,
    explanation: "State Event (Sự kiện trạng thái / Internal Event) xảy ra khi trạng thái nội bộ của dữ liệu trong hệ thống thay đổi đạt tới một ngưỡng hoặc điều kiện logic (như số dư < 0, tồn kho < min).",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-011",
    question: "Khẳng định nào sau đây là SAI khi nói về 3 loại Business Events trong kỹ nghệ phân tích?",
    options: [
      "Mọi Business Event bắt buộc phải do người dùng con người trực tiếp ngồi trước máy tính gõ lệnh",
      "External Event luôn có nguồn gốc phát sinh từ các Actor nằm bên ngoài ranh giới hệ thống",
      "Temporal Event không có Actor chủ động kích hoạt mà dựa trên sự trôi qua của thời gian",
      "State Event được kích hoạt dựa trên sự thay đổi trạng thái dữ liệu nội tại của hệ thống"
    ],
    answer: 0,
    explanation: "Khẳng định A SAI vì chỉ có External Event do Actor khởi phát; Temporal Event do thời gian kích hoạt, còn State Event do điều kiện trạng thái nội bộ kích hoạt tự động.",
    difficulty: "medium",
    type: "inside",
    questionType: "choose-wrong",
    examSet: 1
  },
  {
    id: "ad-c3-d1-012",
    question: "Bảng phân tích sự kiện (Event Table) tiêu chuẩn thường bao gồm 6 cột thông tin cốt lõi nào sau đây?",
    options: [
      "Event, Trigger, Source, Use Case, Response và Destination (Bảng 6 cột chuẩn của Satzinger)",
      "Class Name, Attributes, Operations, Visibility, Stereotype và Multiplicity (Chuẩn hướng đối tượng)",
      "Database Name, Table Name, Column Name, Data Type, Nullable và Default Value (Chuẩn CSDL)",
      "Project Name, Budget, Schedule, Team Members, Milestones và Deliverables (Chuẩn quản trị)"
    ],
    answer: 0,
    explanation: "Event Table chuẩn gồm 6 cột: Event (Sự kiện), Trigger (Tác nhân kích hoạt), Source (Nguồn), Use Case (Ca sử dụng), Response (Phản hồi đầu ra) và Destination (Nơi nhận phản hồi).",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-013",
    question: "Tình huống: 'Vào ngày 1 hàng tháng, hệ thống tự động gửi hóa đơn tiền điện tới email khách hàng'. Đây là loại sự kiện gì?",
    options: [
      "Temporal Event (Sự kiện thời gian kích hoạt theo lịch biểu chu kỳ ngày đầu tiên của tháng)",
      "External Event (Sự kiện bên ngoài do nhân viên ngành điện lực nhấp chuột gửi từng email)",
      "State Event (Sự kiện trạng thái do hòm thư email của khách hàng đã bị quá tải dung lượng)",
      "System Error (Lỗi hệ thống do đồng hồ máy tính chạy nhanh hơn thời gian thực tế hai ngày)"
    ],
    answer: 0,
    explanation: "Hành động gửi hóa đơn tự động lặp lại theo mốc thời gian cố định (ngày 1 hàng tháng) là một Temporal Event (Sự kiện thời gian) kinh điển.",
    difficulty: "hard",
    type: "inside",
    questionType: "case-study",
    examSet: 1
  },
  {
    id: "ad-c3-d1-014",
    question: "Hãy chọn phương án ghép cặp ĐÚNG NHẤT giữa sự kiện nghiệp vụ và phân loại kỹ thuật của nó:",
    options: [
      "Khách gửi đơn hàng ➔ External; Đến hạn trả nợ ➔ Temporal; Lượng hàng chạm đáy ➔ State",
      "Khách gửi đơn hàng ➔ Temporal; Đến hạn trả nợ ➔ External; Lượng hàng chạm đáy ➔ State",
      "Khách gửi đơn hàng ➔ State; Đến hạn trả nợ ➔ Temporal; Lượng hàng chạm đáy ➔ External",
      "Khách gửi đơn hàng ➔ External; Đến hạn trả nợ ➔ State; Lượng hàng chạm đáy ➔ Temporal"
    ],
    answer: 0,
    explanation: "Khách gửi đơn: External (Actor kích hoạt); Đến hạn thanh toán: Temporal (Thời gian kích hoạt); Lượng hàng dưới mức an toàn: State (Trạng thái dữ liệu nội bộ chạm ngưỡng kích hoạt).",
    difficulty: "hard",
    type: "inside",
    questionType: "matching",
    examSet: 1
  },

  // ==================== NHÓM 3: NHẬN DIỆN ACTOR & 4 LOẠI ACTOR (6 CÂU: 015 - 020) ====================
  {
    id: "ad-c3-d1-015",
    question: "Trong chuẩn UML, một 'Actor' (Tác nhân) được định nghĩa chuẩn xác là đối tượng nào?",
    options: [
      "Một vai trò (Role) bên ngoài hệ thống trực tiếp tương tác và trao đổi thông tin với hệ thống",
      "Một lập trình viên trực tiếp viết mã nguồn các chức năng của phần mềm trong phòng dự án",
      "Một máy chủ mạng đặt trong phòng máy trung tâm làm nhiệm vụ lưu trữ các tệp cơ sở dữ liệu",
      "Một bảng dữ liệu quan hệ chứa danh sách tài khoản và mật khẩu đã được mã hóa an toàn"
    ],
    answer: 0,
    explanation: "Actor trong UML là một thực thể hoặc vai trò (Role) nằm ngoài ranh giới hệ thống, tương tác với hệ thống bằng cách gửi dữ liệu vào hoặc nhận thông tin từ hệ thống.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-016",
    question: "Loại Actor nào sau đây trực tiếp kích hoạt Use Case nhằm hoàn thành mục tiêu công việc của chính mình?",
    options: [
      "Primary Actor (Tác nhân chính / Tác nhân khởi xướng trực tiếp nhận giá trị từ Use Case)",
      "Supporting Actor (Tác nhân hỗ trợ cung cấp dịch vụ xác thực thông tin cho hệ thống)",
      "Offstage Actor (Tác nhân hậu trường quan tâm đến kết quả báo cáo nhưng không thao tác)",
      "Internal Actor (Tác nhân nội bộ là một con chip vi xử lý gắn trên bo mạch chủ của máy chủ)"
    ],
    answer: 0,
    explanation: "Primary Actor (Tác nhân chính) là đối tượng chủ động khởi xướng và tương tác với hệ thống nhằm đạt được một mục tiêu cụ thể mang lại giá trị cho bản thân họ.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-017",
    question: "Một hệ thống thanh toán trực tuyến bên ngoài (như Cổng VNPay) hỗ trợ kiểm tra thẻ tín dụng được xếp vào loại Actor nào?",
    options: [
      "Supporting Actor (Tác nhân hỗ trợ / Secondary Actor cung cấp dịch vụ hạ tầng cho Use Case)",
      "Primary Actor (Tác nhân chính khởi xướng toàn bộ phiên giao dịch mua sắm hàng hóa)",
      "Offstage Actor (Tác nhân hậu trường hoàn toàn không có bất kỳ kết nối mạng nào tới hệ thống)",
      "Internal Actor (Tác nhân nội bộ được lập trình bằng ngôn ngữ Assembly bên trong hệ thống)"
    ],
    answer: 0,
    explanation: "Hệ thống bên ngoài (External System) cung cấp dịch vụ hỗ trợ (như Cổng thanh toán, Dịch vụ gửi SMS OTP) để Use Case hoàn thành được gọi là Supporting / Secondary Actor.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-018",
    question: "Cơ quan Thuế hoặc Ban Kiểm toán công ty không trực tiếp dùng phần mềm nhưng yêu cầu ghi vết dữ liệu được gọi là:",
    options: [
      "Offstage Actor (Tác nhân hậu trường / Stakeholder có quyền lợi nhưng không trực tiếp thao tác)",
      "Primary Actor (Tác nhân chính trực tiếp nhấp chuột tạo từng đơn hàng bán lẻ tại cửa hàng)",
      "Secondary Actor (Tác nhân thứ cấp cung cấp dịch vụ máy chủ sao lưu đám mây cho dự án)",
      "Hardware Actor (Tác nhân phần cứng là dây cáp mạng quang nối giữa các tòa nhà làm việc)"
    ],
    answer: 0,
    explanation: "Offstage Actor (hay Stakeholder) là đối tượng có quyền lợi gắn liền với kết quả của Use Case (ví dụ: Cơ quan thuế cần hóa đơn chuẩn) nhưng không trực tiếp thao tác với hệ thống.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-019",
    question: "Khẳng định nào sau đây là SAI khi áp dụng các nguyên tắc nhận diện Actor trong dự án phần mềm?",
    options: [
      "Một Actor bắt buộc phải được vẽ nằm BÊN TRONG khung chữ nhật System Boundary của biểu đồ",
      "Actor đại diện cho vai trò (Role) mà người dùng đảm nhận, chứ không phải chức danh cụ thể",
      "Một cá nhân ngoài đời thực có thể đồng thời đóng nhiều vai trò Actor khác nhau trong hệ thống",
      "Một Actor có thể là một người dùng con người hoặc một hệ thống phần mềm/phần cứng bên ngoài"
    ],
    answer: 0,
    explanation: "Khẳng định A SAI nghiêm trọng vì theo quy tắc UML, Actor luôn luôn nằm BÊN NGOÀI ranh giới hệ thống (System Boundary), đại diện cho môi trường bên ngoài tương tác vào.",
    difficulty: "medium",
    type: "inside",
    questionType: "choose-wrong",
    examSet: 1
  },
  {
    id: "ad-c3-d1-020",
    question: "Tình huống: Trong hệ thống máy ATM, 'Khách hàng rút tiền' và 'Ngân hàng phát hành thẻ' lần lượt đóng vai trò là:",
    options: [
      "Khách hàng là Primary Actor; Ngân hàng phát hành thẻ là Supporting Actor hỗ trợ xác thực",
      "Khách hàng là Supporting Actor; Ngân hàng phát hành thẻ là Primary Actor khởi xướng giao dịch",
      "Cả hai đối tượng trên bắt buộc phải được mô hình hóa là Offstage Actor nằm ngoài biểu đồ",
      "Khách hàng là Actor bên ngoài; còn Ngân hàng phát hành thẻ là Use Case bên trong hệ thống"
    ],
    answer: 0,
    explanation: "Khách hàng là Primary Actor (người có mục tiêu rút tiền mặt). Ngân hàng phát hành thẻ là Supporting Actor (hệ thống bên ngoài cung cấp dịch vụ xác thực số dư và mật khẩu thẻ).",
    difficulty: "hard",
    type: "inside",
    questionType: "case-study",
    examSet: 1
  },

  // ==================== NHÓM 4: QUAN HỆ NÂNG CAO GIỮA CÁC USE CASE (8 CÂU: 021 - 028) ====================
  {
    id: "ad-c3-d1-021",
    question: "Quy ước đặt tên chuẩn mực quốc tế cho một System Use Case trong kỹ nghệ yêu cầu là:",
    options: [
      "Bắt đầu bằng một Động từ hành động kết hợp với một Cụm danh từ (Ví dụ: Register for Course)",
      "Bắt đầu bằng một Danh từ số nhiều chỉ định danh các bảng cơ sở dữ liệu quan hệ (Ví dụ: Courses)",
      "Bắt đầu bằng một Tính từ mô tả cảm xúc và trải nghiệm người dùng (Ví dụ: Beautiful Interface)",
      "Sử dụng tên chức danh nghề nghiệp của người lập trình viên chính của dự án (Ví dụ: John Developer)"
    ],
    answer: 0,
    explanation: "Use Case Naming Convention chuẩn là: `Verb + Noun Phrase` ở thể chủ động (Active voice), ví dụ: 'Register for Course', 'Withdraw Cash', 'Generate Monthly Report'.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-022",
    question: "Bản chất của quan hệ <<include>> (Bao hàm) giữa hai Use Case trong UML được hiểu là:",
    options: [
      "Một quan hệ bắt buộc (Mandatory) dùng để tách và tái sử dụng một luồng chức năng dùng chung",
      "Một quan hệ tùy chọn (Optional) chỉ được kích hoạt khi có sự cố kỹ thuật hoặc lỗi ngoại lệ",
      "Một quan hệ kế thừa hướng đối tượng cho phép lớp con ghi đè các hàm lập trình của lớp cha",
      "Một quan hệ vật lý kết nối trực tiếp cổng mạng giữa máy chủ web và máy chủ cơ sở dữ liệu"
    ],
    answer: 0,
    explanation: "Quan hệ `<<include>>` là quan hệ bắt buộc (Mandatory): Use Case gốc luôn luôn gọi và thực thi Use Case được bao hàm để hoàn thành nhiệm vụ, giúp tái sử dụng các bước chung.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-023",
    question: "Hướng mũi tên nét đứt của quan hệ <<include>> trong biểu đồ Use Case Diagram được quy định như thế nào?",
    options: [
      "Mũi tên nét đứt có gắn nhãn <<include>> trỏ từ Base Use Case VỀ PHÍA Included Use Case",
      "Mũi tên nét đứt có gắn nhãn <<include>> trỏ từ Included Use Case NGƯỢC LẠI Base Use Case",
      "Mũi tên nét liền có hình tam giác rỗng trỏ từ Included Use Case sang Base Use Case",
      "Đường thẳng nằm ngang không có bất kỳ mũi tên định hướng nào ở hai đầu mút đoạn thẳng"
    ],
    answer: 0,
    explanation: "Quy chuẩn UML: Mũi tên nét đứt `<<include>>` trỏ từ Base Use Case VỀ PHÍA Included Use Case (Base ➔ Included), thể hiện rằng Base phụ thuộc và gọi Use Case con.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-024",
    question: "Bản chất của quan hệ <<extend>> (Mở rộng) giữa hai Use Case trong biểu đồ UML là gì?",
    options: [
      "Quan hệ mở rộng có điều kiện (Optional / Conditional) chỉ kích hoạt tại một điểm mở rộng cụ thể",
      "Quan hệ bắt buộc phải thực hiện 100% trong mọi tình huống giao dịch của người sử dụng",
      "Quan hệ xóa bỏ hoàn toàn Use Case gốc để thay thế bằng một Use Case khác tiên tiến hơn",
      "Quan hệ bảo mật ngăn cấm người dùng truy cập trái phép vào các bảng cơ sở dữ liệu nội bộ"
    ],
    answer: 0,
    explanation: "Quan hệ `<<extend>>` là quan hệ có điều kiện (Conditional / Optional): Extension Use Case chỉ chèn hành vi bổ sung vào Base Use Case khi một điều kiện cụ thể (Extension Point) được thỏa mãn.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-025",
    question: "Khái niệm 'Điểm mở rộng' (Extension Point) trong quan hệ <<extend>> có vai trò như thế nào?",
    options: [
      "Xác định vị trí chính xác bên trong luồng kịch bản của Base Use Case mà hành vi mở rộng sẽ chèn vào",
      "Xác định địa chỉ IP của máy chủ phụ trợ sẽ tiếp nhận lưu lượng mạng bị quá tải của hệ thống",
      "Xác định thời điểm hệ thống sẽ tự động đăng xuất tài khoản người dùng sau năm phút không dùng",
      "Xác định vị trí cắm thêm bộ nhớ RAM vật lý trên thanh vi mạch của máy chủ cơ sở dữ liệu"
    ],
    answer: 0,
    explanation: "Extension Point (Điểm mở rộng) là một vị trí được định danh rõ ràng trong luồng thực thi của Base Use Case, nơi mà hành vi mở rộng của Extension Use Case có thể được chèn vào.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-026",
    question: "Khẳng định nào sau đây là SAI khi so sánh giữa quan hệ <<include>> và quan hệ <<extend>>?",
    options: [
      "Trong quan hệ <<extend>>, Base Use Case bắt buộc phải biết rõ và phụ thuộc vào Extension Case",
      "Trong quan hệ <<include>>, Base Use Case bắt buộc phải thực thi luồng của Included Use Case",
      "Mũi tên của quan hệ <<extend>> trỏ từ Extension Use Case VỀ PHÍA Base Use Case của hệ thống",
      "Mũi tên của quan hệ <<include>> trỏ từ Base Use Case VỀ PHÍA Included Use Case của hệ thống"
    ],
    answer: 0,
    explanation: "Khẳng định A SAI vì trong `<<extend>>`, Base Use Case hoàn toàn ĐỘC LẬP và KHÔNG biết về sự tồn tại của Extension Case. Chính Extension Case mới biết và trỏ về Base Case.",
    difficulty: "hard",
    type: "inside",
    questionType: "choose-wrong",
    examSet: 1
  },
  {
    id: "ad-c3-d1-027",
    question: "Quan hệ Kế thừa (Generalization) giữa các Use Case trong UML được biểu diễn trực quan bằng ký hiệu nào?",
    options: [
      "Đường nét liền có một đầu mũi tên hình tam giác rỗng trỏ từ Use Case con về Use Case cha",
      "Đường nét đứt có gắn nhãn chữ <<generalization>> trỏ từ Use Case cha sang Use Case con",
      "Đường cong hình sin uốn lượn có màu sắc sặc sỡ nối hai hình elip Use Case lại với nhau",
      "Một hình quả trám màu đen đặc nằm ở chính giữa đoạn thẳng kết nối hai hình elip lại"
    ],
    answer: 0,
    explanation: "Quan hệ Generalization (Kế thừa / Chuyên biệt hóa) được biểu diễn bằng đường nét liền có mũi tên hình tam giác rỗng (Hollow triangle) trỏ từ con về cha (Child ➔ Parent).",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-028",
    question: "Tình huống: Khi đặt hàng, khách có thể chọn 'Áp dụng mã giảm giá voucher'. Mối quan hệ giữa 2 Use Case là:",
    options: [
      "Quan hệ <<extend>> vì việc áp dụng voucher là hành vi tùy chọn chỉ diễn ra khi khách có mã",
      "Quan hệ <<include>> vì mọi đơn đặt hàng bắt buộc 100% phải luôn có mã voucher giảm giá",
      "Quan hệ Generalization vì việc áp dụng voucher là một dạng đặc biệt của ngôn ngữ lập trình",
      "Hai Use Case này hoàn toàn không thể xuất hiện cùng nhau trong cùng một bản vẽ hệ thống"
    ],
    answer: 0,
    explanation: "Áp dụng voucher là hành vi bổ sung mang tính điều kiện (chỉ thực hiện khi khách có mã và chọn dùng), do đó được mô hình hóa bằng quan hệ `<<extend>>` trỏ về Use Case 'Đặt hàng'.",
    difficulty: "hard",
    type: "inside",
    questionType: "case-study",
    examSet: 1
  },

  // ==================== NHÓM 5: KỊCH BẢN FULLY DRESSED & 5 SAI LẦM PHỔ BIẾN (8 CÂU: 029 - 036) ====================
  {
    id: "ad-c3-d1-029",
    question: "Biểu mẫu đặc tả Use Case chi tiết chuẩn mực (Fully Dressed Use Case Template) thường có bao nhiêu trường chính?",
    options: [
      "Gồm 10 trường thông tin chuẩn mực (Name, ID, Actor, Stakeholders, Pre, Post, Trigger, Flows)",
      "Chỉ bao gồm duy nhất 2 trường thông tin là Tên ca sử dụng và Đoạn mã lập trình của hàm xử lý",
      "Gồm 50 trường thông tin chi tiết quy định thông số phần cứng của máy chủ mạng đám mây",
      "Bắt buộc phải có đúng 100 trường tương ứng với 100 câu hỏi trắc nghiệm của bài kiểm tra"
    ],
    answer: 0,
    explanation: "Biểu mẫu Fully Dressed tiêu chuẩn (theo Alistair Cockburn / Craig Larman) gồm 10 trường: Tên, ID, Actor, Stakeholders & Interests, Preconditions, Postconditions, Trigger, Main Flow, Extensions, Special Requirements.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-030",
    question: "Trường 'Điều kiện tiên quyết' (Preconditions) trong bản đặc tả Fully Dressed Use Case có ý nghĩa là gì?",
    options: [
      "Các điều kiện bắt buộc phải đúng (True) trước khi Use Case được phép bắt đầu thực thi",
      "Trạng thái của hệ thống sau khi Use Case đã hoàn thành thành công toàn bộ các bước",
      "Danh sách các lỗi phần cứng máy chủ có thể xảy ra trong khi người dùng thao tác nhập liệu",
      "Thời gian tối đa mà lập trình viên được phép sử dụng để hoàn thành việc viết mã chức năng"
    ],
    answer: 0,
    explanation: "Preconditions (Điều kiện tiên quyết) nêu rõ trạng thái hệ thống bắt buộc phải thỏa mãn trước khi Use Case có thể bắt đầu (ví dụ: 'Người dùng đã đăng nhập thành công vào hệ thống').",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-031",
    question: "Trường 'Điều kiện sau thành công' (Postconditions / Success Guarantee) trong đặc tả Use Case đảm bảo điều gì?",
    options: [
      "Trạng thái của hệ thống sau khi Use Case kết thúc thành công mục tiêu của Primary Actor",
      "Tổng số tiền thưởng mà chuyên viên phân tích nghiệp vụ BA sẽ nhận được sau khi dự án xong",
      "Mức độ hài lòng tính bằng điểm số của ban giám đốc công ty đối với đội ngũ lập trình viên",
      "Các điều kiện mạng viễn thông bắt buộc phải có để bắt đầu khởi chạy máy tính văn phòng"
    ],
    answer: 0,
    explanation: "Postconditions (Đảm bảo thành công) xác định trạng thái của hệ thống sau khi Use Case hoàn thành (ví dụ: 'Đơn hàng được lưu vào CSDL, số lượng tồn kho được cập nhật giảm, email xác nhận đã gửi').",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-032",
    question: "Phát biểu nào sau đây phân biệt CHÍNH XÁC giữa Luồng chính (Main Flow) và Luồng nhánh rẽ (Extensions)?",
    options: [
      "Main Flow là kịch bản lý tưởng 'Happy Path'; Extensions mô tả các nhánh ngoại lệ và lỗi xử lý",
      "Main Flow chỉ viết bằng tiếng Anh; còn Extensions bắt buộc phải được dịch sang tiếng Pháp",
      "Main Flow do khách hàng viết; còn Extensions do chuyên viên bảo vệ cơ quan trực tiếp viết",
      "Main Flow và Extensions là hai thuật ngữ hoàn toàn đồng nghĩa và có thể dùng thay thế nhau"
    ],
    answer: 0,
    explanation: "Main Success Scenario (Happy Path) là kịch bản thuận lợi khi không có lỗi xảy ra. Extensions (Alternative Flows) mô tả các tình huống rẽ nhánh, lỗi nhập liệu hoặc sự cố cần xử lý thay thế.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-033",
    question: "Sai lầm phổ biến nhất có tên 'Functional Decomposition' (Phân rã chức năng) trong mô hình Use Case là gì?",
    options: [
      "Xé nhỏ Use Case thành các thao tác đơn lẻ như 'Tạo', 'Đọc', 'Sửa', 'Xóa' thay vì mục tiêu trọn vẹn",
      "Quên không tô màu sắc rực rỡ cho các biểu tượng hình người Actor trên trang giấy biểu đồ",
      "Vẽ sơ đồ ranh giới hệ thống bằng hình tròn thay vì vẽ bằng khung hình chữ nhật đứng chuẩn",
      "Sử dụng quá nhiều ngôn ngữ lập trình khác nhau để viết phần mềm cho hệ thống thông tin đó"
    ],
    answer: 0,
    explanation: "Functional Decomposition là sai lầm kinh điển khi BA chia nhỏ Use Case theo tư duy lập trình hàm (CRUD: Create, Read, Update, Delete) thay vì tập trung vào mục tiêu hoàn chỉnh mang lại giá trị cho người dùng.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-034",
    question: "Sai lầm phổ biến nào sau đây thường xảy ra khi vẽ quan hệ <<extend>> trong biểu đồ Use Case?",
    options: [
      "Vẽ mũi tên ngược từ Base Use Case trỏ sang Extension Case thay vì trỏ ngược lại về Base",
      "Đặt tên cho Extension Use Case bằng một động từ kết hợp với một cụm danh từ ở thể chủ động",
      "Gắn nhãn chữ <<extend>> trên đường nét đứt kết nối giữa hai hình elip trong biểu đồ UML",
      "Xác định rõ ràng điểm mở rộng Extension Point bên trong văn bản đặc tả kịch bản Use Case"
    ],
    answer: 0,
    explanation: "Rất nhiều người nhầm lẫn vẽ mũi tên `<<extend>>` từ Base ➔ Extension (như luồng logic suy nghĩ). Quy chuẩn UML bắt buộc mũi tên phải trỏ ngược từ Extension ➔ Base.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-035",
    question: "Tình huống: Một BA mới vào nghề vẽ 4 Use Case: 'Thêm SV', 'Sửa SV', 'Xóa SV', 'Xem SV'. Cách chuẩn hóa tối ưu nhất là:",
    options: [
      "Gom cả 4 thao tác trên thành một Use Case duy nhất có tên là 'Quản lý thông tin sinh viên'",
      "Giữ nguyên 4 Use Case độc lập và nối thêm quan hệ <<include>> giữa từng cặp Use Case với nhau",
      "Xóa bỏ hoàn toàn 4 Use Case trên và thay thế bằng một Use Case duy nhất có tên là 'Đăng nhập'",
      "Đổi tên 4 Use Case trên sang tiếng La-tinh để tăng tính học thuật và bảo mật cho tài liệu dự án"
    ],
    answer: 0,
    explanation: "Bốn thao tác CRUD đối với một thực thể dữ liệu nên được gom thành một Use Case mục tiêu trọn vẹn cấp người dùng: 'Manage Student Information' (Quản lý thông tin sinh viên).",
    difficulty: "hard",
    type: "inside",
    questionType: "case-study",
    examSet: 1
  },
  {
    id: "ad-c3-d1-036",
    question: "Khẳng định nào sau đây là SAI khi biên soạn kịch bản luồng sự kiện trong Fully Dressed Use Case?",
    options: [
      "Luồng kịch bản bắt buộc phải nhúng trực tiếp các câu lệnh truy vấn SQL SELECT và tên bảng vật lý",
      "Luồng kịch bản cần được đánh số thứ tự tuần tự rõ ràng (1, 2, 3...) theo cặp tương tác Actor - Hệ thống",
      "Luồng kịch bản phải mô tả hệ thống phản hồi cái GÌ (WHAT) chứ không đi sâu vào chi tiết công nghệ (HOW)",
      "Các luồng nhánh rẽ (Extensions) nên được đánh mã định danh liên kết tương ứng với bước xảy ra lỗi"
    ],
    answer: 0,
    explanation: "Khẳng định A SAI vì đặc tả Use Case mô tả ở mức nghiệp vụ/người dùng (User-goal level), tuyệt đối tránh đưa các chi tiết cài đặt kỹ thuật như mã lệnh SQL, tên hàm code hay cấu trúc phần cứng vào luồng kịch bản.",
    difficulty: "hard",
    type: "inside",
    questionType: "choose-wrong",
    examSet: 1
  },

  // ==================== OUTSIDE: VẬN DỤNG THỰC TẾ DỰ ÁN (4 CÂU: 037 - 040) ====================
  {
    id: "ad-c3-d1-037",
    question: "[Outside] Trong quá trình chuyển đổi từ RUP sang Agile/Scrum, một Use Case mức User-Goal thường tương ứng với:",
    options: [
      "Một Epic lớn và thường được phân rã thành nhiều User Stories nhỏ để phát triển trong từng Sprint",
      "Một dòng chú thích mã nguồn đơn lẻ (Code comment) được viết bên trong hàm khởi tạo của lớp Java",
      "Một biên bản cuộc họp giao ban hàng ngày (Daily Standup) kéo dài không quá mười lăm phút",
      "Một lệnh kiểm thử đơn vị tự động (Unit Test) chạy trên môi trường máy chủ tích hợp liên tục"
    ],
    answer: 0,
    explanation: "[Outside] Trong thực tế Agile, một Use Case hoàn chỉnh mức User-Goal thường tương đương với một Epic hoặc Feature lớn, sau đó được BA phân rã thành nhiều User Stories nhỏ để đưa vào các Sprint.",
    difficulty: "hard",
    type: "outside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-038",
    question: "[Outside] Khi phân tích yêu cầu phi chức năng (NFRs như tốc độ < 2 giây), BA nên bố trí vào trường nào của Use Case?",
    options: [
      "Trường Yêu cầu đặc biệt (Special Requirements / Non-Functional Requirements của Use Case đó)",
      "Trường Tên ca sử dụng (Use Case Name) bằng cách ghép thêm số giây yêu cầu vào đằng sau tên",
      "Trường Tác nhân chính (Primary Actor) bằng cách đặt tên tác nhân là 'Người dùng mong muốn 2 giây'",
      "Bỏ qua không cần ghi nhận vì yêu cầu phi chức năng không có giá trị đối với hệ thống phần mềm"
    ],
    answer: 0,
    explanation: "[Outside] Các yêu cầu phi chức năng mang tính cục bộ gắn liền với một Use Case (như thời gian phản hồi, bảo mật) được ghi nhận chuẩn xác vào trường 'Special Requirements' của Use Case đó.",
    difficulty: "hard",
    type: "outside",
    questionType: "single-correct",
    examSet: 1
  },
  {
    id: "ad-c3-d1-039",
    question: "[Outside] Tình huống: Website gọi API sang Cổng thanh toán VNPay để xử lý thẻ. Trong sơ đồ Use Case, VNPay được mô hình hóa là:",
    options: [
      "Một Supporting Actor bên ngoài ranh giới hệ thống, kết nối tới Use Case thanh toán bằng đường liên kết",
      "Một Use Case con hình elip nằm bên trong ranh giới hệ thống và nối với Use Case chính bằng <<include>>",
      "Một cơ sở dữ liệu nội bộ được vẽ bằng hình trụ đứng đặt ở trung tâm biểu đồ Use Case Diagram",
      "Một lớp lập trình hướng đối tượng có đầy đủ các thuộc tính mã nguồn và các phương thức riêng tư"
    ],
    answer: 0,
    explanation: "[Outside] Dịch vụ bên ngoài (External Service/API như VNPay, MoMo) đóng vai trò là Secondary/Supporting Actor, nằm NGOÀI ranh giới hệ thống và tương tác với Use Case qua Association.",
    difficulty: "hard",
    type: "outside",
    questionType: "case-study",
    examSet: 1
  },
  {
    id: "ad-c3-d1-040",
    question: "[Outside] Tình huống: Khách hàng yêu cầu vẽ Use Case cho chức năng 'Đăng nhập' (Login). Lời khuyên chuẩn mực của BA là gì?",
    options: [
      "Tránh biến Login thành Use Case độc lập; nên đưa việc đăng nhập vào Điều kiện tiên quyết (Precondition)",
      "Lập tức vẽ 10 Use Case Login khác nhau tương ứng với 10 loại trình duyệt web có trên thị trường",
      "Vẽ Use Case Login nối quan hệ <<include>> tới tất cả 100 Use Case khác có trong toàn bộ hệ thống",
      "Xóa bỏ hoàn toàn tính năng xác thực đăng nhập để người dùng có thể tự do xem toàn bộ dữ liệu bí mật"
    ],
    answer: 0,
    explanation: "[Outside] 'Login' không mang lại giá trị nghiệp vụ độc lập (Observable result of value). Kinh nghiệm thực tế chuẩn: coi 'User is logged in' là Precondition của các Use Case chính, tránh bẫy vẽ Use Case Login nối `<<include>>` tràn lan.",
    difficulty: "hard",
    type: "outside",
    questionType: "case-study",
    examSet: 1
  }
];

export function writePart1File() {
  const content = `/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
   CHAPTER 3: INITIATION PHASE — FROM BUSINESS EVENTS TO A SYSTEM USE CASE MODEL
   BỘ ĐỀ THI SỐ 1 (PART 1) — 40 CÂU HỎI CHUẨN CỐ ĐỊNH
   CƠ CẤU: 30% DỄ (12) - 40% TRUNG BÌNH (16) - 30% KHÓ (12)
   TỶ LỆ: 36 INSIDE + 4 OUTSIDE
   MÃ CÂU HỎI: ad-c3-d1-001 ĐẾN ad-c3-d1-040
   TIÊU CHUẨN: CHỐNG ĐOÁN BỪA (DELTA L <= 15 KÝ TỰ)
   ============================================================ */

export const questionsAdCh3Part1 = ${JSON.stringify(part1Questions, null, 2)};
`;
  fs.writeFileSync("data/questions-ad-ch3-part1.js", content, "utf8");
  console.log("Successfully written data/questions-ad-ch3-part1.js");
}
