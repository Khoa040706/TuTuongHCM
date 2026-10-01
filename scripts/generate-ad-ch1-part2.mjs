import fs from "fs";

export const part2Questions = [
  // ==================== MỤC I: TỔNG QUAN HỆ THỐNG THÔNG TIN (10 CÂU) ====================
  {
    id: "ad-c1-d2-001",
    question: "Định nghĩa nào sau đây phản ánh ĐẦY ĐỦ NHẤT về bản chất của một Hệ thống thông tin (IS)?",
    options: [
      "Là tập hợp người, thiết bị, dữ liệu và quy trình phối hợp",
      "Là một chiếc máy tính cá nhân dùng soạn thảo văn bản đơn thuần",
      "Là đường dây mạng Internet kết nối các chi nhánh văn phòng",
      "Là tập hợp các tủ sắt chứa hồ sơ giấy của phòng hành chính"
    ],
    answer: 0,
    explanation: "Hệ thống thông tin là tập hợp có tổ chức gồm con người, phần cứng, phần mềm, mạng truyền thông, tài nguyên dữ liệu và quy trình nhằm thu thập, xử lý và phân phối thông tin.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-002",
    question: "Trong các yếu tố sau, yếu tố nào đóng vai trò là 'Input' điển hình trong hệ thống thông tin bệnh viện?",
    options: [
      "Thông tin triệu chứng và chỉ số sinh tồn của bệnh nhân",
      "Bản in hóa đơn thanh toán viện phí trao cho thân nhân",
      "Báo cáo thống kê số ca khỏi bệnh gửi về Bộ Y tế định kỳ",
      "Màn hình thông báo gọi số thứ tự khám bệnh tại sảnh chờ"
    ],
    answer: 0,
    explanation: "Dữ liệu triệu chứng, huyết áp, nhịp tim nhập vào hệ thống lúc tiếp nhận bệnh nhân là Đầu vào (Input); các hóa đơn, bảng báo cáo là Đầu ra (Output).",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-003",
    question: "Khái niệm 'Tri thức' (Knowledge) trong chuỗi giá trị thông tin được hiểu chuẩn xác là gì?",
    options: [
      "Thông tin được đúc kết cùng kinh nghiệm để chỉ dẫn hành động",
      "Dãy số nhị phân 0 và 1 lưu trên bề mặt từ tính của ổ cứng",
      "Toàn bộ tài liệu văn bản chưa được con người đọc và đối chiếu",
      "Một thông báo lỗi xuất hiện trên màn hình máy tính cá nhân"
    ],
    answer: 0,
    explanation: "Tri thức (Knowledge) là sự kết hợp giữa thông tin đã xử lý với kinh nghiệm, bối cảnh, hiểu biết chuyên môn để áp dụng giải quyết vấn đề thực tế.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-004",
    question: "Đặc trưng nào sau đây KHÔNG PHẢI là đặc tính của Hệ thống xử lý giao dịch TPS?",
    options: [
      "Chuyên phục vụ các quyết định chiến lược dài hạn của chủ tịch",
      "Xử lý khối lượng giao dịch cực kỳ lớn với độ chính xác cao",
      "Dữ liệu có tính lặp lại thường xuyên và cấu trúc rất rõ ràng",
      "Yêu cầu tốc độ phản hồi nhanh chóng và đảm bảo tính nhất quán"
    ],
    answer: 0,
    explanation: "TPS phục vụ nhân viên tác nghiệp hàng ngày (Operational level), không phải phục vụ quyết định dài hạn của Chủ tịch (đó là vai trò của ESS/EIS).",
    difficulty: "medium",
    type: "inside",
    questionType: "choose-wrong",
    examSet: 2
  },
  {
    id: "ad-c1-d2-005",
    question: "Hệ thống hỗ trợ ra quyết định DSS (Decision Support System) thường sử dụng nguồn dữ liệu nào?",
    options: [
      "Dữ liệu lịch sử từ TPS/MIS kết hợp mô hình phân tích tối ưu",
      "Chỉ sử dụng dữ liệu phát thanh radio từ các đài truyền hình",
      "Chỉ dùng văn bản viết tay của các nhân viên bảo vệ cơ quan",
      "Toàn bộ mã nguồn chương trình ứng dụng của đối thủ cạnh tranh"
    ],
    answer: 0,
    explanation: "DSS lấy dữ liệu từ TPS và MIS, sau đó tích hợp các mô hình thống kê, tài chính và tối ưu hóa để hỗ trợ phân tích các kịch bản What-if.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-006",
    question: "Hệ thống quản lý chuỗi cung ứng SCM (Supply Chain Management) mang lại giá trị nào sau đây?",
    options: [
      "Đồng bộ hóa dòng thông tin từ nhà cung cấp đến khách hàng",
      "Thay thế toàn bộ nhân viên giao hàng bằng hệ thống tự động",
      "Chỉ dùng để tính toán lương cho cán bộ công nhân viên xưởng",
      "Tự động gửi email chúc mừng sinh nhật cho người mua hàng lẻ"
    ],
    answer: 0,
    explanation: "SCM tối ưu hóa luồng nguyên vật liệu, thông tin và tài chính giữa các đối tác trong chuỗi cung ứng từ nhà cung cấp đến điểm tiêu thụ cuối cùng.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-007",
    question: "Khẳng định nào sau đây là SAI khi bàn về tính toàn vẹn của mô hình IPO trong thực tế?",
    options: [
      "Mọi hệ thống thông tin đều hoạt động tốt dù thiếu khối lưu trữ",
      "Khối xử lý (Process) chuyển đổi dữ liệu thô thành thông tin hữu ích",
      "Khối đầu ra (Output) truyền tải kết quả đến người dùng hoặc hệ thống",
      "Vòng phản hồi (Feedback) giúp hệ thống tự điều chỉnh khi có sai lệch"
    ],
    answer: 0,
    explanation: "Khẳng định thiếu khối lưu trữ (Storage) mà vẫn hoạt động tốt là SAI. Hệ thống thông tin bắt buộc phải lưu trữ dữ liệu để phục vụ tái sử dụng và kiểm toán.",
    difficulty: "hard",
    type: "inside",
    questionType: "choose-wrong",
    examSet: 2
  },
  {
    id: "ad-c1-d2-008",
    question: "Tình huống: Giám đốc ngân hàng cần dự báo tỷ lệ nợ xấu trong 3 năm tới khi lãi suất tăng 2%. Hệ thống nào hỗ trợ đắc lực nhất?",
    options: [
      "Hệ thống hỗ trợ ra quyết định phân tích kịch bản (DSS system)",
      "Hệ thống máy ATM rút tiền tự động tại các góc phố (TPS system)",
      "Phần mềm in sao kê tài khoản ngân hàng định kỳ tháng (MIS system)",
      "Ứng dụng quét mã QR chuyển tiền nhanh trên điện thoại di động"
    ],
    answer: 0,
    explanation: "Bài toán 'What-if' (nếu lãi suất tăng 2% thì nợ xấu biến động thế nào) là bài toán bán cấu trúc kinh điển, được giải quyết tối ưu bởi DSS.",
    difficulty: "hard",
    type: "inside",
    questionType: "case-study",
    examSet: 2
  },
  {
    id: "ad-c1-d2-009",
    question: "Hãy chọn phương án ghép cặp ĐÚNG NHẤT giữa giai đoạn trong Unified Process và cột mốc kết thúc tương ứng:",
    options: [
      "Inception - Lifecycle Objective; Elaboration - Lifecycle Architecture",
      "Inception - Product Release; Elaboration - Lifecycle Objective",
      "Inception - Lifecycle Architecture; Elaboration - Product Release",
      "Inception - Initial Operation; Elaboration - Final Maintenance"
    ],
    answer: 0,
    explanation: "Theo chuẩn Unified Process (UP): Pha Inception kết thúc bằng cột mốc Mục tiêu vòng đời (Lifecycle Objective); Pha Elaboration kết thúc bằng cột mốc Kiến trúc vòng đời (Lifecycle Architecture).",
    difficulty: "hard",
    type: "inside",
    questionType: "matching",
    examSet: 2
  },
  {
    id: "ad-c1-d2-010",
    question: "Thành phần quy định rõ 'ai được phép làm gì, vào thời điểm nào và theo trình tự nào' trong một hệ thống thông tin là:",
    options: [
      "Quy trình nghiệp vụ và chính sách vận hành (Procedures)",
      "Hệ thống dây cáp mạng truyền dẫn tín hiệu (Hardware components)",
      "Bộ vi xử lý trung tâm của các máy chủ mạng (Processing chips)",
      "Các con số số liệu thô thu thập từ biểu mẫu giấy (Raw datasets)"
    ],
    answer: 0,
    explanation: "Quy trình (Procedures) là tập hợp các chỉ dẫn, chính sách và quy tắc quy định cách thức con người tương tác và vận hành hệ thống thông tin.",
    difficulty: "easy",
    type: "inside",
    questionType: "fill-blank",
    examSet: 2
  },

  // ==================== MỤC II: VAI TRÒ CỦA BUSINESS ANALYST (10 CÂU) ====================
  {
    id: "ad-c1-d2-011",
    question: "Theo định nghĩa chuẩn mực từ tổ chức IIBA (BABOK Guide), bản chất của Phân tích nghiệp vụ là gì?",
    options: [
      "Kích hoạt sự thay đổi trong tổ chức bằng cách định nghĩa các nhu cầu",
      "Trực tiếp lập trình các module xử lý giao tiếp mạng cho máy chủ đám mây",
      "Sửa chữa các thiết bị viễn thông và bảo trì đường dây cáp quang nội bộ",
      "Quản lý dòng tiền doanh nghiệp và ký duyệt quyết toán thuế hàng quý"
    ],
    answer: 0,
    explanation: "Theo BABOK Guide (IIBA): Phân tích nghiệp vụ là thực hành tạo điều kiện thay đổi trong một doanh nghiệp bằng cách định nghĩa các nhu cầu và đề xuất giải pháp mang lại giá trị cho các bên liên quan.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-012",
    question: "Trong mối quan hệ hợp tác dự án, đối tượng nào được xem là khách hàng nội bộ quan trọng nhất của BA?",
    options: [
      "Người dùng nghiệp vụ trực tiếp và nhà tài trợ dự án (Sponsor)",
      "Công ty cung cấp dịch vụ viễn thông Internet cho tòa nhà chính",
      "Đội ngũ nhân viên vệ sinh dọn dẹp phòng máy chủ trung tâm dữ liệu",
      "Các đối thủ cạnh tranh đang cung cấp sản phẩm tương đương thị trường"
    ],
    answer: 0,
    explanation: "Business Stakeholders (bao gồm Project Sponsor và End-users) là những người hưởng lợi trực tiếp từ giải pháp và là đối tượng BA phục vụ.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-013",
    question: "Nhiệm vụ 'Elicitation' trong quy trình làm việc chuẩn của Business Analyst mang ý nghĩa chính xác là gì?",
    options: [
      "Khai phá, khơi gợi và thu thập yêu cầu từ các bên liên quan",
      "Tự động sinh mã nguồn chương trình từ bản vẽ sơ đồ lớp đối tượng",
      "Thực hiện sao lưu dự phòng toàn bộ cơ sở dữ liệu lên đám mây",
      "Viết tài liệu hướng dẫn kỹ thuật bảo trì phần cứng bo mạch chủ"
    ],
    answer: 0,
    explanation: "Elicitation không chỉ là 'thu thập' bị động mà là quá trình chủ động khám phá, gợi mở, phỏng vấn để làm sáng tỏ các nhu cầu tiềm ẩn của người dùng.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-014",
    question: "Để tìm ra nguyên nhân gốc rễ (Root Cause) của một sự cố tắc nghẽn quy trình, BA thường áp dụng công cụ nào?",
    options: [
      "Kỹ thuật đặt câu hỏi 5 Whys kết hợp biểu đồ xương cá (Fishbone Diagram)",
      "Tự động biên dịch lại toàn bộ mã nguồn của hệ thống sang ngôn ngữ mới",
      "Nâng cấp gấp đôi dung lượng bộ nhớ RAM cho tất cả các máy trạm cá nhân",
      "Gia hạn thêm 6 tháng bảo hành thiết bị phần cứng cho toàn bộ chi nhánh"
    ],
    answer: 0,
    explanation: "Kỹ thuật 5 Whys và Biểu đồ xương cá (Ishikawa / Fishbone Diagram) là phương pháp kinh điển giúp BA truy tìm nguyên nhân gốc rễ (Root Cause) thay vì chỉ khắc phục tạm thời triệu chứng bên ngoài.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-015",
    question: "Vì sao Business Analyst cần am hiểu sâu sắc về nghiệp vụ ngành (Domain Knowledge) của khách hàng?",
    options: [
      "Để hiểu được ngôn ngữ chuyên ngành và các quy định pháp lý",
      "Để có thể trực tiếp làm thay công việc của giám đốc tài chính",
      "Để tự ý sửa đổi quy trình kế toán mà không cần hội ý với sếp",
      "Để chứng minh với lập trình viên rằng mình biết nhiều thuật toán"
    ],
    answer: 0,
    explanation: "Domain Knowledge giúp BA nói cùng ngôn ngữ với chuyên gia nghiệp vụ, hiểu được các ràng buộc pháp lý và nhanh chóng nắm bắt bản chất vấn đề.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-016",
    question: "Kỹ năng nào giúp BA giải quyết các tình huống mâu thuẫn lợi ích giữa phòng Bán hàng và phòng Kế toán?",
    options: [
      "Kỹ năng đàm phán, thương lượng và quản lý xung đột nghiệp vụ",
      "Kỹ năng lập trình thuật toán tìm đường đi ngắn nhất trên đồ thị",
      "Kỹ năng cài đặt máy tính bảng và kết nối mạng nội bộ không dây",
      "Kỹ năng đọc mã nhị phân và kiểm tra bộ nhớ RAM của máy chủ mạng"
    ],
    answer: 0,
    explanation: "Conflict Resolution & Negotiation (Giải quyết xung đột và đàm phán) là kỹ năng mềm sống còn giúp BA hài hòa lợi ích và đạt được đồng thuận chung.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-017",
    question: "Khẳng định nào sau đây là SAI khi nói về vị thế và ranh giới trách nhiệm của Business Analyst?",
    options: [
      "BA có toàn quyền tự ý quyết định thay đổi ngân sách của dự án",
      "BA là người điều phối và làm mịn các yêu cầu chức năng hệ thống",
      "BA phải đảm bảo các giải pháp kỹ thuật đáp ứng đúng mục tiêu kinh doanh",
      "BA hỗ trợ người dùng xây dựng các tiêu chí nghiệm thu phần mềm (UAT)"
    ],
    answer: 0,
    explanation: "BA không có quyền tự ý thay đổi ngân sách dự án. Quyết định ngân sách thuộc thẩm quyền của Project Sponsor, Project Manager hoặc Ban điều hành.",
    difficulty: "hard",
    type: "inside",
    questionType: "choose-wrong",
    examSet: 2
  },
  {
    id: "ad-c1-d2-018",
    question: "Tình huống: Trưởng phòng kho muốn phần mềm đơn giản nhất có thể, nhưng Giám đốc kiểm toán yêu cầu nhập 20 trường bắt buộc. BA nên làm gì?",
    options: [
      "Tổ chức phiên làm việc chung để phân tích rủi ro và tìm điểm cân bằng",
      "Lập tức đứng về phía trưởng phòng kho và bỏ qua ý kiến giám đốc kiểm toán",
      "Lập tức đứng về phía giám đốc kiểm toán và phớt lờ khó khăn của nhân viên",
      "Bí mật yêu cầu lập trình viên làm hai phiên bản phần mềm chạy song song"
    ],
    answer: 0,
    explanation: "BA đóng vai trò trung gian điều phối, tổ chức phiên làm việc để đối chiếu giữa rủi ro tuân thủ (Compliance) và hiệu suất vận hành (Usability) để thống nhất giải pháp.",
    difficulty: "hard",
    type: "inside",
    questionType: "case-study",
    examSet: 2
  },
  {
    id: "ad-c1-d2-019",
    question: "Trong giai đoạn Thiết kế (Design Phase), mức độ tham gia chủ yếu của Business Analyst là gì?",
    options: [
      "Làm rõ các thắc mắc nghiệp vụ và rà soát tính đúng đắn của thiết kế",
      "Trực tiếp thiết kế bảng mạch in và hàn chip điện tử cho máy chủ mạng",
      "Viết toàn bộ mã nguồn của các stored procedures trong cơ sở dữ liệu",
      "Rút lui hoàn toàn khỏi dự án và chỉ quay lại khi phần mềm xuất xưởng"
    ],
    answer: 0,
    explanation: "Trong pha Design, Software Architects và Designers nắm vai trò chủ đạo, nhưng BA vẫn phải túc trực để giải đáp nghiệp vụ và review thiết kế màn hình/CSDL.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-020",
    question: "Hoạt động đối chiếu xem phần mềm hoàn thiện có đáp ứng đúng tài liệu yêu cầu ban đầu hay không được gọi là:",
    options: [
      "Xác minh và nghiệm thu phần mềm (Verification & Validation)",
      "Lập trình giao diện người dùng bằng ngôn ngữ phong cách CSS",
      "Phá dỡ hạ tầng mạng cũ để thanh lý phế liệu cho nhà tái chế",
      "Tuyển dụng thêm năm mươi kỹ sư kiểm thử tự động từ thị trường"
    ],
    answer: 0,
    explanation: "Verification (xây dựng sản phẩm có đúng quy trình/đặc tả không) và Validation (xây dựng có đúng cái người dùng thực sự cần không) là trách nhiệm nghiệm thu quan trọng.",
    difficulty: "easy",
    type: "inside",
    questionType: "fill-blank",
    examSet: 2
  },

  // ==================== MỤC III: BỘ CÔNG CỤ KỸ NGHỆ YÊU CẦU (10 CÂU) ====================
  {
    id: "ad-c1-d2-021",
    question: "Khái niệm nào mô tả một cách thức cụ thể, có các bước hướng dẫn rõ ràng để thực hiện một công việc kỹ nghệ?",
    options: [
      "Technique (Kỹ thuật hành động cụ thể)",
      "Methodology (Khung phương pháp luận lớn)",
      "Hardware (Thiết bị phần cứng máy tính)",
      "Strategy (Chiến lược phát triển thị trường)"
    ],
    answer: 0,
    explanation: "Technique là một kỹ thuật cụ thể (như kỹ thuật Phỏng vấn, Phân tích tài liệu, Viết Use Case) hướng dẫn từng bước con người thực hiện một nhiệm vụ.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-022",
    question: "Ba chuyên gia huyền thoại (được mệnh danh là 'Three Amigos') đồng sáng lập nên chuẩn UML bao gồm những ai?",
    options: [
      "Grady Booch, James Rumbaugh và tiến sĩ Ivar Jacobson",
      "Bill Gates, Steve Jobs và chuyên gia Linus Torvalds",
      "Dennis Ritchie, Ken Thompson và giáo sư Bjarne Stroustrup",
      "Tim Berners-Lee, Alan Turing và nhà toán học John von Neumann"
    ],
    answer: 0,
    explanation: "Bộ ba Three Amigos gồm Grady Booch (phương pháp Booch), James Rumbaugh (OMT) và Ivar Jacobson (OOSE) tại hãng Rational Software đã cùng nhau hợp nhất và khai sinh ra ngôn ngữ UML.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-023",
    question: "Biểu đồ nào trong UML thường được BA sử dụng đầu tiên để làm rõ ranh giới hệ thống và các chức năng chính?",
    options: [
      "Biểu đồ Ca sử dụng tổng quan (Use Case Diagram)",
      "Biểu đồ Lớp chi tiết cơ sở dữ liệu (Class Diagram)",
      "Biểu đồ Đóng gói triển khai hạ tầng (Deployment Diagram)",
      "Biểu đồ Thời gian phản hồi tín hiệu (Timing Diagram)"
    ],
    answer: 0,
    explanation: "Use Case Diagram là công cụ giao tiếp số 1 của BA, mô tả hệ thống làm được gì (chức năng) và ai tương tác với nó (actors) từ góc nhìn người dùng.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-024",
    question: "Nhóm biểu đồ cấu trúc (Structural Diagrams) trong UML được dùng để thể hiện khía cạnh nào của hệ thống?",
    options: [
      "Các thành phần tĩnh, quan hệ dữ liệu và kiến trúc phần mềm",
      "Trình tự trao đổi thông điệp theo thời gian giữa các đối tượng",
      "Luồng điều khiển rẽ nhánh của một quy trình kế toán phức tạp",
      "Sự thay đổi trạng thái của đơn hàng từ lúc đặt đến lúc giao"
    ],
    answer: 0,
    explanation: "Structural Diagrams (như Class Diagram, Object Diagram, Component Diagram) biểu diễn cấu trúc tĩnh không thay đổi theo thời gian của hệ thống.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-025",
    question: "Ưu điểm lớn nhất của kỹ thuật Phỏng vấn trực tiếp 1-1 (Personal Interview) trong thu thập yêu cầu là gì?",
    options: [
      "Tạo cơ hội đào sâu thông tin, quan sát thái độ và làm rõ nghi vấn",
      "Thu thập ý kiến của mười nghìn người cùng lúc với chi phí cực thấp",
      "Không đòi hỏi người đi phỏng vấn phải có bất kỳ kỹ năng giao tiếp nào",
      "Dữ liệu thu được luôn luôn chuẩn hóa và tự động đưa vào máy tính ngay"
    ],
    answer: 0,
    explanation: "Phỏng vấn 1-1 cho phép tương tác trực tiếp hai chiều, giúp BA đặt câu hỏi đào sâu (Follow-up questions), giải thích hiểu lầm và xây dựng mối quan hệ.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-026",
    question: "Trong một buổi hội thảo JAD (Joint Application Development), vai trò của Facilitator là gì?",
    options: [
      "Điều phối cuộc họp trung lập, giữ đúng tiến độ và dung hòa ý kiến",
      "Trực tiếp quyết định toàn bộ tính năng kỹ thuật mà không cần hỏi ai",
      "Lập tức ghi nhận mọi yêu cầu vô lý của người dùng vào biên bản chốt",
      "Chỉ ngồi yên lặng quan sát và không được phép can thiệp vào cuộc họp"
    ],
    answer: 0,
    explanation: "Facilitator (Người điều phối) là nhân sự trung lập, dẫn dắt phiên JAD theo đúng chương trình nghị sự, giải quyết tranh luận và đảm bảo mọi người đều được lên tiếng.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-027",
    question: "Khẳng định nào sau đây là SAI khi nói về kỹ thuật tạo Bản mẫu (Prototyping) trong phân tích thiết kế?",
    options: [
      "Bản mẫu luôn luôn là phần mềm chính thức hoàn chỉnh có thể bán ngay",
      "Bản mẫu giúp phát hiện sớm các hiểu lầm giữa người dùng và nhóm phát triển",
      "Bản mẫu có thể ở dạng phác thảo trên giấy hoặc mô hình tương tác trên web",
      "Người dùng có thể bị ngộ nhận rằng hệ thống đã hoàn thiện khi thấy bản mẫu"
    ],
    answer: 0,
    explanation: "Bản mẫu (Prototype) chỉ là mô hình thử nghiệm ban đầu nhằm làm rõ yêu cầu, không phải là sản phẩm chính thức có thể đưa vào vận hành thực tế ngay.",
    difficulty: "hard",
    type: "inside",
    questionType: "choose-wrong",
    examSet: 2
  },
  {
    id: "ad-c1-d2-028",
    question: "Tình huống: Ngân hàng có 500 chi nhánh trên cả nước và cần lấy ý kiến về tính năng mới của ứng dụng nội bộ. Kỹ thuật nào tối ưu nhất?",
    options: [
      "Khảo sát trực tuyến bằng Bảng câu hỏi chuẩn hóa (Online Survey)",
      "Cử đoàn BA bay đến trực tiếp phỏng vấn 1-1 từng nhân viên cả 500 nơi",
      "Tổ chức một phiên họp JAD tập trung toàn bộ năm ngàn nhân viên lại",
      "Quan sát trực tiếp tại một chi nhánh duy nhất rồi áp đặt cho cả nước"
    ],
    answer: 0,
    explanation: "Với phạm vi địa lý phân tán rộng và đối tượng người dùng đông đảo (500 chi nhánh), Bảng câu hỏi trực tuyến (Survey) là phương pháp tối ưu chi phí và thời gian.",
    difficulty: "hard",
    type: "inside",
    questionType: "case-study",
    examSet: 2
  },
  {
    id: "ad-c1-d2-029",
    question: "Trong kỹ nghệ phần mềm hiện đại, các công cụ như Jira, Confluence, Enterprise Architect thuộc nhóm nào?",
    options: [
      "Tool (Công cụ hỗ trợ phân tích, thiết kế và quản trị dự án)",
      "Methodology (Khung phương pháp luận phát triển phần mềm chuẩn)",
      "Technique (Kỹ thuật điều tra tâm lý người dùng khi phỏng vấn)",
      "Model (Mô hình toán học mô phỏng thuật toán xử lý dữ liệu lớn)"
    ],
    answer: 0,
    explanation: "Jira, Confluence, Enterprise Architect là các Tool (Công cụ phần mềm) giúp tự động hóa và hỗ trợ quản lý vòng đời yêu cầu.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-030",
    question: "Thuật ngữ biểu diễn mối quan hệ giữa 4 khái niệm kỹ nghệ yêu cầu theo đúng logic thứ bậc từ lớn đến nhỏ là:",
    options: [
      "Methodology hướng dẫn quy trình ➔ Sử dụng Technique ➔ Tạo ra Model",
      "Model quy định phương pháp luận ➔ Tạo ra Tool ➔ Hướng dẫn Methodology",
      "Tool quyết định bài toán kinh doanh ➔ Sinh ra Technique ➔ Định hình Model",
      "Technique thay thế Methodology ➔ Phá bỏ Model ➔ Không cần dùng Tool"
    ],
    answer: 0,
    explanation: "Methodology là khung bao trùm; bên trong khung đó, BA áp dụng các Technique cụ thể để xây dựng nên các Model, với sự trợ giúp của các Tool.",
    difficulty: "easy",
    type: "inside",
    questionType: "fill-blank",
    examSet: 2
  },

  // ==================== MỤC IV: SDLC & UNIFIED PROCESS + OUTSIDE (10 CÂU) ====================
  {
    id: "ad-c1-d2-031",
    question: "Giai đoạn đầu tiên 'Planning' (Lập kế hoạch) trong SDLC truyền thống tập trung trả lời câu hỏi cốt lõi nào?",
    options: [
      "Tại sao chúng ta phải xây dựng hệ thống này? (Why build it?)",
      "Hệ thống sẽ được viết bằng ngôn ngữ lập trình nào? (Which code?)",
      "Cơ sở dữ liệu sẽ được đặt ở phòng máy chủ tầng mấy? (Where host?)",
      "Ai sẽ là người trực tiếp cài đặt phần mềm cho khách hàng? (Who install?)"
    ],
    answer: 0,
    explanation: "Planning phase tập trung thẩm định bài toán kinh doanh và tính khả thi (Feasibility): Tại sao cần xây dựng hệ thống và nó có đáng đầu tư hay không.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-032",
    question: "Giai đoạn cuối cùng 'Transition' trong quy trình Unified Process (UP) tập trung vào hoạt động nào?",
    options: [
      "Chuyển giao hệ thống vào môi trường thực tế và đào tạo người dùng",
      "Khảo sát sơ bộ tính khả thi kinh tế của bài toán kinh doanh ban đầu",
      "Viết các dòng mã nguồn đầu tiên của các thuật toán xử lý dữ liệu",
      "Khử toàn bộ các rủi ro kiến trúc nền tảng tại phòng thí nghiệm"
    ],
    answer: 0,
    explanation: "Transition phase trong UP đưa sản phẩm từ môi trường phát triển sang môi trường vận hành thực tế (Production), kiểm thử Beta và bàn giao cho người dùng.",
    difficulty: "easy",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-033",
    question: "Sản phẩm bàn giao quan trọng nhất kết thúc giai đoạn Phân tích (Analysis Deliverables) thường là gì?",
    options: [
      "Tài liệu đặc tả yêu cầu hệ thống hoàn chỉnh (SRS / BRD)",
      "Đĩa CD chứa mã nguồn chương trình ứng dụng đã biên dịch",
      "Biên bản nghiệm thu bàn giao bản quyền phần mềm thương mại",
      "Hóa đơn thanh toán tiền điện của máy chủ trung tâm dữ liệu"
    ],
    answer: 0,
    explanation: "Kết quả then chốt của giai đoạn Analysis là Tài liệu đặc tả yêu cầu (System Requirements Document - SRS/BRD) mô tả đầy đủ những gì hệ thống phải làm.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-034",
    question: "Đặc trưng then chốt nhất của phương pháp tiếp cận 'Lặp và Tăng dần' (Iterative & Incremental) là gì?",
    options: [
      "Chia dự án thành nhiều chu kỳ nhỏ, mỗi chu kỳ tạo ra sản phẩm chạy được",
      "Chỉ kiểm thử phần mềm một lần duy nhất vào ngày cuối cùng của hợp đồng",
      "Bắt buộc toàn bộ yêu cầu phải đóng băng hoàn toàn ngay từ tháng đầu tiên",
      "Không cho phép người dùng nhìn thấy bất kỳ kết quả nào trước năm năm"
    ],
    answer: 0,
    explanation: "Iterative & Incremental chia nhỏ dự án thành các vòng lặp (Iterations); mỗi vòng lặp thực hiện đầy đủ phân tích, thiết kế, code, test và tạo ra bản tăng dần (Increment).",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-035",
    question: "Trong quy trình Unified Process (UP), các 'Workflows' (Luồng công việc) có mối quan hệ thế nào với các 'Phases'?",
    options: [
      "Các Workflows diễn ra song song xuyên suốt các Phases với mức độ khác nhau",
      "Mỗi Phase chỉ được phép thực hiện duy nhất một Workflow tương ứng duy nhất",
      "Workflows chỉ bắt đầu hoạt động sau khi tất cả các Phases đã hoàn tất xong",
      "Workflows và Phases là hai khái niệm hoàn toàn tách biệt và đối lập nhau"
    ],
    answer: 0,
    explanation: "Mô hình 2 chiều của UP: Trục hoành là Phases (thời gian), trục tung là Workflows (hoạt động kỹ thuật). Các workflows diễn ra đồng thời ở mọi phase với cường độ khác nhau.",
    difficulty: "medium",
    type: "inside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-036",
    question: "Khẳng định nào sau đây là SAI khi bàn về giai đoạn Khởi động dự án (Inception Phase) trong UP?",
    options: [
      "Inception là giai đoạn lập trình xong toàn bộ 100% các chức năng cốt lõi",
      "Inception nhằm thiết lập phạm vi dự án và ước tính sơ bộ bài toán kinh doanh",
      "Inception nhận diện các tác nhân chính và các ca sử dụng quan trọng nhất",
      "Nếu dự án không khả thi về mặt kinh tế, nó có thể bị hủy bỏ ngay tại Inception"
    ],
    answer: 0,
    explanation: "Inception chỉ là giai đoạn khởi động sơ khởi để xác định phạm vi và tính khả thi. Việc lập trình toàn bộ chức năng diễn ra chủ yếu ở Construction phase.",
    difficulty: "hard",
    type: "inside",
    questionType: "choose-wrong",
    examSet: 2
  },
  {
    id: "ad-c1-d2-037",
    question: "[Outside] Trong thực tế các dự án số hóa ngân hàng, kỹ thuật 'User Story' thường được BA sử dụng thay thế cho định dạng nào?",
    options: [
      "Thay thế cho các tài liệu đặc tả chức năng dài dòng truyền thống",
      "Thay thế cho toàn bộ kiến trúc cơ sở dữ liệu và bảng quan hệ",
      "Thay thế cho các hợp đồng lao động của nhân viên phòng tín dụng",
      "Thay thế cho biên bản kiểm toán tài chính hàng năm của cổ đông"
    ],
    answer: 0,
    explanation: "[Outside] Trong môi trường phát triển phần mềm hiện đại (Agile), User Story ngắn gọn ('Là ai... tôi muốn gì... để được gì...') thường được BA dùng để thay cho các tài liệu SRS cồng kềnh.",
    difficulty: "hard",
    type: "outside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-038",
    question: "[Outside] Khi người dùng phàn nàn 'Hệ thống chạy chậm vào lúc 9 giờ sáng', BA cần phân loại yêu cầu này vào nhóm nào?",
    options: [
      "Yêu cầu phi chức năng về hiệu năng hệ thống (Non-Functional / Performance)",
      "Yêu cầu chức năng về tính toán hóa đơn bán lẻ (Functional Requirement)",
      "Yêu cầu về mặt pháp lý và tuân thủ thuế nhà nước (Regulatory Compliance)",
      "Yêu cầu về mặt thẩm mỹ màu sắc biểu tượng ứng dụng (Cosmetic design)"
    ],
    answer: 0,
    explanation: "[Outside] Tốc độ phản hồi, thông lượng, độ ổn định của hệ thống là Yêu cầu phi chức năng (Non-Functional Requirement - NFR), cụ thể là Performance Requirement.",
    difficulty: "hard",
    type: "outside",
    questionType: "case-study",
    examSet: 2
  },
  {
    id: "ad-c1-d2-039",
    question: "[Outside] Khái niệm 'Scope Creep' (Phình phạm vi dự án) trong quản trị yêu cầu phần mềm ám chỉ hiện tượng gì?",
    options: [
      "Yêu cầu liên tục phát sinh và mở rộng ngoài tầm kiểm soát của kế hoạch",
      "Dự án bị cắt giảm nhân sự đột ngột dẫn đến thiếu người kiểm thử lỗi",
      "Hệ thống máy chủ bị quá tải do dung lượng bộ nhớ RAM bị phân mảnh lớn",
      "Khách hàng thanh toán tiền trước thời hạn quy định trong hợp đồng khung"
    ],
    answer: 0,
    explanation: "[Outside] Scope Creep là hiện tượng các yêu cầu mới liên tục được thêm vào một cách không chính thức mà không tăng thời gian hay chi phí, khiến dự án dễ đổ vỡ.",
    difficulty: "hard",
    type: "outside",
    questionType: "single-correct",
    examSet: 2
  },
  {
    id: "ad-c1-d2-040",
    question: "[Outside] Tình huống: Dự án làm app thương mại điện tử cần ra mắt trước dịp Tết. BA nên tư vấn giải pháp tối ưu nào cho doanh nghiệp?",
    options: [
      "Áp dụng phương pháp Timeboxing, ưu tiên các tính năng mua sắm cốt lõi",
      "Kéo dài thời hạn dự án thêm một năm để hoàn thiện toàn bộ mọi tính năng",
      "Bỏ qua hoàn toàn khâu kiểm thử thanh toán tiền để kịp ngày xuất xưởng",
      "Ép lập trình viên không ngủ trong ba tuần liên tục để chạy đua tiến độ"
    ],
    answer: 0,
    explanation: "[Outside] Chiến lược Timeboxing và MoSCoW (phân loại Must have / Should have) cho phép BA cùng doanh nghiệp đóng gói các tính năng cốt lõi nhất để bàn giao đúng thời hạn vàng Tết.",
    difficulty: "hard",
    type: "outside",
    questionType: "case-study",
    examSet: 2
  }
];

// Helper to write file
export function writePart2File() {
  const content = `/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
   CHAPTER 1: INTRODUCTION — REQUIREMENTS ANALYSIS AND DESIGN
   BỘ ĐỀ THI SỐ 2 (PART 2) — 40 CÂU HỎI CHUẨN CỐ ĐỊNH
   CƠ CẤU: 30% DỄ (12) - 40% TRUNG BÌNH (16) - 30% KHÓ (12)
   TỶ LỆ: 36 INSIDE + 4 OUTSIDE
   MÃ CÂU HỎI: ad-c1-d2-001 ĐẾN ad-c1-d2-040
   TIÊU CHUẨN: CHỐNG ĐOÁN BỪA (DELTA L <= 15 KÝ TỰ)
   ============================================================ */

export const questionsAdCh1Part2 = ${JSON.stringify(part2Questions, null, 2)};
`;
  fs.writeFileSync("data/questions-ad-ch1-part2.js", content, "utf8");
  console.log("Successfully written data/questions-ad-ch1-part2.js");
}
