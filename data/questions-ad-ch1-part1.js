/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
   CHAPTER 1: INTRODUCTION — REQUIREMENTS ANALYSIS AND DESIGN
   BỘ ĐỀ THI SỐ 1 (PART 1) — 40 CÂU HỎI CHUẨN CỐ ĐỊNH
   CƠ CẤU: 30% DỄ (12) - 40% TRUNG BÌNH (16) - 30% KHÓ (12)
   TỶ LỆ: 36 INSIDE + 4 OUTSIDE
   MÃ CÂU HỎI: ad-c1-d1-001 ĐẾN ad-c1-d1-040
   TIÊU CHUẨN: CHỐNG ĐOÁN BỪA (DELTA L <= 15 KÝ TỰ)
   ============================================================ */

export const questionsAdCh1Part1 = [
  {
    "id": "ad-c1-d1-001",
    "question": "Mô hình xử lý cơ bản nhất của một hệ thống thông tin (IPO model) bao gồm các khối nào?",
    "options": [
      "Khối Input, Process và Output",
      "Khối Storage, Network và Host",
      "Khối Hardware, Code và People",
      "Khối Strategy, Task và Output"
    ],
    "answer": 0,
    "explanation": "Mô hình IPO cơ bản bao gồm 3 khối cốt lõi: Input (Đầu vào), Process (Xử lý) và Output (Đầu ra), ngoài ra có Storage và Feedback loop.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-002",
    "question": "Trong 5 thành phần cốt lõi của hệ thống thông tin, thành phần nào giữ vai trò quan trọng nhất?",
    "options": [
      "Con người (People - người dùng và chuyên gia)",
      "Phần cứng (Hardware - máy chủ và trạm làm việc)",
      "Quy trình (Procedures - văn bản hướng dẫn nghiệp vụ)",
      "Mạng lưới (Networks - hạ tầng cáp quang truyền dẫn)"
    ],
    "answer": 0,
    "explanation": "Con người (People) là yếu tố quyết định giá trị của hệ thống thông tin vì họ là chủ thể vận hành, nhập liệu và ra quyết định.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-003",
    "question": "Phát biểu nào sau đây mô tả CHÍNH XÁC quan hệ giữa Dữ liệu (Data) và Thông tin (Information)?",
    "options": [
      "Thông tin là dữ liệu đã được gán ngữ cảnh có ý nghĩa",
      "Dữ liệu là thông tin đã được phân tích và tổng hợp lại",
      "Dữ liệu và thông tin là hai khái niệm đồng nghĩa hoàn toàn",
      "Thông tin luôn luôn là các con số thô chưa qua biến đổi"
    ],
    "answer": 0,
    "explanation": "Dữ liệu (Data) là các sự kiện thô chưa qua xử lý. Khi dữ liệu được xử lý và đặt vào ngữ cảnh cụ thể, nó trở thành Thông tin (Information).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-004",
    "question": "Hệ thống xử lý giao dịch TPS (Transaction Processing System) phục vụ chủ yếu cho cấp quản lý nào?",
    "options": [
      "Cấp tác nghiệp vận hành hàng ngày (Operational level)",
      "Cấp chiến thuật điều phối phòng ban (Tactical level)",
      "Cấp chiến lược định hướng toàn cầu (Strategic level)",
      "Cấp hội đồng quản trị ra quyết định (Executive board)"
    ],
    "answer": 0,
    "explanation": "TPS là hệ thống thông tin phục vụ cấp tác nghiệp (Operational level), ghi nhận và xử lý các giao dịch phát sinh thường nhật.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-005",
    "question": "Điểm khác biệt cốt lõi nhất giữa hệ thống MIS và hệ thống DSS trong tổ chức doanh nghiệp là gì?",
    "options": [
      "MIS cung cấp báo cáo định kỳ; DSS hỗ trợ phân tích What-if",
      "MIS chỉ xử lý phi cấu trúc; DSS chỉ ghi nhận giao dịch thô",
      "MIS phục vụ tổng giám đốc; DSS phục vụ nhân viên thu ngân",
      "MIS không có cơ sở dữ liệu; DSS bắt buộc phải có máy chủ lớn"
    ],
    "answer": 0,
    "explanation": "MIS tập trung tạo ra các báo cáo định kỳ tóm tắt từ TPS; DSS cung cấp các mô hình toán học và phân tích What-if cho các quyết định bán cấu trúc.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-006",
    "question": "Hệ thống hỗ trợ điều hành chiến lược ESS (Executive Support System) có đặc điểm nổi bật nào?",
    "options": [
      "Tổng hợp thông tin nội bộ và dữ liệu vĩ mô bên ngoài",
      "Thực hiện quét mã vạch và thanh toán hóa đơn siêu thị",
      "Chỉ phục vụ trưởng phòng kinh doanh lập kế hoạch tuần",
      "Tự động gửi email nhắc việc cho nhân viên mới thử việc"
    ],
    "answer": 0,
    "explanation": "ESS hỗ trợ lãnh đạo cấp cao (C-level) với bảng điều khiển trực quan (Dashboard), kết hợp thông tin nội bộ với dữ liệu thị trường bên ngoài.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-007",
    "question": "Khẳng định nào sau đây là SAI khi nói về các phân hệ phần mềm tích hợp trong doanh nghiệp?",
    "options": [
      "ERP chỉ quản lý kế toán và tuyệt đối không chia sẻ dữ liệu",
      "CRM tối ưu hóa các quy trình chăm sóc và tương tác khách hàng",
      "SCM quản lý dòng chảy hàng hóa từ nhà cung ứng đến người mua",
      "Hệ thống BI hỗ trợ phân tích dữ liệu lịch sử để dự báo tương lai"
    ],
    "answer": 0,
    "explanation": "Khẳng định ERP chỉ quản lý kế toán và không chia sẻ dữ liệu là SAI. ERP là giải pháp hoạch định nguồn lực tổng thể chia sẻ CSDL tập trung cho toàn doanh nghiệp.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-008",
    "question": "Tình huống: Chuỗi siêu thị ghi nhận 10.000 dòng hóa đơn bán lẻ mỗi ngày. Việc tổng hợp số lượng sữa bán ra theo từng quận thuộc bước chuyển đổi nào?",
    "options": [
      "Chuyển từ Dữ liệu thô (Data) sang Thông tin (Information)",
      "Chuyển từ Trí tuệ (Wisdom) ngược về Dữ liệu thô (Data)",
      "Chuyển từ Quy trình (Procedure) sang Phần cứng (Hardware)",
      "Chuyển từ Đầu ra (Output) sang khối Nhập liệu (Input)"
    ],
    "answer": 0,
    "explanation": "Từng dòng hóa đơn là Dữ liệu thô. Khi được gom nhóm, tính toán theo khu vực và mặt hàng để thấy được xu hướng thì đã trở thành Thông tin.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-009",
    "question": "Hãy ghép cặp tương ứng giữa hệ thống thông tin và cấp bậc quản lý phù hợp nhất trong doanh nghiệp:",
    "options": [
      "TPS - Tác nghiệp; MIS/DSS - Quản lý; ESS - Chiến lược",
      "TPS - Chiến lược; MIS/DSS - Tác nghiệp; ESS - Quản lý",
      "TPS - Quản lý; MIS/DSS - Chiến lược; ESS - Tác nghiệp",
      "TPS - Tác nghiệp; MIS/DSS - Chiến lược; ESS - Quản lý"
    ],
    "answer": 0,
    "explanation": "Thứ tự phân tầng chuẩn từ dưới lên: TPS phục vụ cấp tác nghiệp, MIS/DSS phục vụ cấp quản lý chiến thuật, ESS phục vụ cấp chiến lược cao nhất.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "matching",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-010",
    "question": "Trong chu trình IPO mở rộng, thành phần đóng vai trò so sánh đầu ra với tiêu chuẩn để điều chỉnh đầu vào là:",
    "options": [
      "Cơ chế phản hồi và kiểm soát (Feedback & Control loop)",
      "Khối thiết bị ngoại vi trích xuất dữ liệu (Output block)",
      "Bộ xử lý trung tâm điều phối tác vụ (Processing unit)",
      "Cơ sở dữ liệu lưu trữ hồ sơ nghiệp vụ (Storage system)"
    ],
    "answer": 0,
    "explanation": "Feedback loop (Vòng phản hồi) ghi nhận kết quả đầu ra, đối chiếu với mục tiêu đặt ra để gửi thông tin điều chỉnh ngược lại cho pha Input và Process.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "fill-blank",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-011",
    "question": "Vai trò trọng tâm bản chất nhất của một chuyên viên Business Analyst (BA) trong dự án phần mềm là gì?",
    "options": [
      "Hiểu bài toán nghiệp vụ và đề xuất giải pháp tạo giá trị",
      "Trực tiếp viết toàn bộ mã nguồn của các chức năng backend",
      "Cài đặt hệ điều hành và bảo trì máy chủ cho phòng máy tính",
      "Đảm nhận việc quyết định bảng lương cho các lập trình viên"
    ],
    "answer": 0,
    "explanation": "BA là người phân tích vấn đề kinh doanh của tổ chức, xác định nhu cầu của các bên liên quan và đề xuất giải pháp khả thi mang lại giá trị.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-012",
    "question": "Hình ảnh ẩn dụ kinh điển 'Cầu nối' (The Bridge) của BA thể hiện sự kết nối giữa hai đối tượng chính nào?",
    "options": [
      "Các bên liên quan nghiệp vụ và đội ngũ kỹ thuật công nghệ",
      "Bộ phận tuyển dụng nhân sự và bộ phận tài chính kế toán",
      "Nhà cung cấp máy tính phần cứng và nhân viên trực bảo vệ",
      "Nhà mạng viễn thông bên ngoài và khách hàng mua hàng lẻ"
    ],
    "answer": 0,
    "explanation": "BA là cầu nối phiên dịch giữa ngôn ngữ nghiệp vụ của Business Stakeholders và ngôn ngữ kỹ thuật của IT Development Team.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-013",
    "question": "Nhiệm vụ nào sau đây KHÔNG THUỘC trách nhiệm cốt lõi của một chuyên viên Business Analyst?",
    "options": [
      "Trực tiếp cấu hình cơ sở dữ liệu trên máy chủ production",
      "Thu thập và làm rõ các yêu cầu từ phía người dùng cuối",
      "Mô hình hóa quy trình nghiệp vụ bằng biểu đồ tiêu chuẩn",
      "Hỗ trợ người dùng kiểm thử nghiệm thu giải pháp phần mềm"
    ],
    "answer": 0,
    "explanation": "Việc cấu hình hệ quản trị CSDL trên máy chủ production là công việc của Database Administrator (DBA) hoặc DevOps, không phải của BA.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-014",
    "question": "Trong bộ kỹ năng của BA, kỹ năng nào giúp phân rã vấn đề phức tạp thành các thành phần logic nhỏ hơn?",
    "options": [
      "Kỹ năng tư duy phân tích và giải quyết vấn đề logic",
      "Kỹ năng đàm phán hợp đồng thương mại với đối tác lớn",
      "Kỹ năng thiết kế đồ họa banner và logo nhận diện web",
      "Kỹ năng vận hành máy in công nghiệp và bảo trì đường dây"
    ],
    "answer": 0,
    "explanation": "Analytical Thinking & Problem Solving giúp BA nhìn thấu cấu trúc vấn đề, phân rã quy trình lớn thành các use case nhỏ để đặc tả chính xác.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-015",
    "question": "Tại sao Business Analyst cần phải có kiến thức nền tảng nhất định về mặt kỹ thuật phần mềm (Technical skills)?",
    "options": [
      "Để đánh giá tính khả thi và trao đổi hiệu quả với dev",
      "Để có thể thay thế lập trình viên viết code khi thiếu người",
      "Để tự cài đặt toàn bộ hệ thống cáp mạng cho văn phòng mới",
      "Để trực tiếp sửa lỗi bảo mật nhân hệ điều hành máy chủ Linux"
    ],
    "answer": 0,
    "explanation": "Kiến thức kỹ thuật giúp BA biết giải pháp nào là khả thi, hiểu được hạn chế công nghệ và truyền đạt yêu cầu rõ ràng cho lập trình viên.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-016",
    "question": "Trong vòng đời dự án SDLC, khối lượng công việc và mức độ tham gia của BA tập trung cao độ nhất ở giai đoạn nào?",
    "options": [
      "Giai đoạn Khởi động dự án và Phân tích yêu cầu hệ thống",
      "Giai đoạn Viết mã nguồn chức năng và Đóng gói phát hành",
      "Giai đoạn Cài đặt phần mềm vào máy khách và Vệ sinh thiết bị",
      "Giai đoạn Bàn giao bản quyền thương mại và Thanh lý hợp đồng"
    ],
    "answer": 0,
    "explanation": "BA hoạt động tích cực nhất ở giai đoạn Planning và Analysis, làm rõ bài toán và viết tài liệu đặc tả trước khi đội ngũ bước vào thiết kế chi tiết.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-017",
    "question": "Phát biểu nào sau đây là SAI khi nói về trách nhiệm của Business Analyst trong kiểm thử phần mềm?",
    "options": [
      "BA là người trực tiếp viết mã tự động kiểm thử hiệu năng",
      "BA hỗ trợ xây dựng kịch bản kiểm thử chấp nhận người dùng",
      "BA xác minh xem chức năng xây dựng có đúng đặc tả hay không",
      "BA đồng hành cùng người dùng trong các buổi đánh giá nghiệm thu"
    ],
    "answer": 0,
    "explanation": "Viết mã kiểm thử hiệu năng (Automation Performance Testing) là nhiệm vụ của QA/Tester chuyên nghiệp. BA tham gia vào kiểm thử UAT xác nhận nghiệp vụ.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-018",
    "question": "Tình huống: Khách hàng yêu cầu thêm một chức năng báo cáo rất phức tạp nhưng thời hạn dự án còn 2 tuần. BA nên làm gì ĐÚNG NHẤT?",
    "options": [
      "Phân tích tác động, tư vấn ưu tiên scope hoặc dời sang pha sau",
      "Lập tức từ chối thẳng thừng và không tiếp tục lắng nghe khách",
      "Âm thầm ép lập trình viên tăng ca thâu đêm mà không báo cáo",
      "Hủy bỏ toàn bộ các chức năng cốt lõi trước đó để làm báo cáo"
    ],
    "answer": 0,
    "explanation": "BA chuyên nghiệp phải tiến hành Impact Analysis (Phân tích tác động về thời gian, chi phí, tài nguyên) và thương lượng với Product Owner/Khách hàng.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-019",
    "question": "Khả năng lắng nghe thấu cảm, điều phối xung đột ý kiến giữa các phòng ban thuộc nhóm kỹ năng nào của BA?",
    "options": [
      "Kỹ năng giao tiếp và quan hệ liên cá nhân (Soft skills)",
      "Kỹ năng kiểm thử hiệu năng cơ sở dữ liệu (Database skills)",
      "Kỹ năng bảo mật an toàn thông tin mạng (Security skills)",
      "Kỹ năng thiết kế mạch vi xử lý nhúng (Hardware skills)"
    ],
    "answer": 0,
    "explanation": "Kỹ năng lắng nghe, thương lượng, thuyết phục và xử lý xung đột thuộc nhóm Interpersonal & Communication Skills (Kỹ năng mềm) cực kỳ quan trọng của BA.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-020",
    "question": "Tài liệu đặc tả yêu cầu phần mềm do BA chủ trì biên soạn làm căn cứ kỹ thuật cho toàn dự án thường được gọi là:",
    "options": [
      "Tài liệu đặc tả yêu cầu phần mềm chuẩn (BRD hoặc SRS)",
      "Bản hợp đồng lao động thời vụ cho nhân sự dự án gia công",
      "Báo cáo kết quả kiểm toán tài chính nội bộ định kỳ năm",
      "Sổ tay hướng dẫn lắp đặt phần cứng máy chủ trung tâm dữ liệu"
    ],
    "answer": 0,
    "explanation": "BRD (Business Requirements Document) và SRS (Software Requirements Specification) là các tài liệu chuẩn mực do BA biên soạn để chuyển giao cho dev team.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "fill-blank",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-021",
    "question": "Khái niệm nào đại diện cho một khung quy trình toàn diện hướng dẫn toàn bộ các bước phát triển phần mềm?",
    "options": [
      "Methodology (Phương pháp luận phát triển hệ thống)",
      "Technique (Kỹ thuật thực hiện một hành động cụ thể)",
      "Tool (Công cụ phần mềm hỗ trợ tự động hóa thao tác)",
      "Model (Mô hình biểu diễn trừu tượng hóa một khía cạnh)"
    ],
    "answer": 0,
    "explanation": "Methodology là phương pháp luận — khung quy trình tổng thể có cấu trúc hướng dẫn toàn bộ vòng đời phát triển phần mềm (như Waterfall, Agile, UP).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-022",
    "question": "Tổ chức quốc tế nào chịu trách nhiệm quản lý và chuẩn hóa Ngôn ngữ Mô hình hóa Thống nhất (UML)?",
    "options": [
      "Tổ chức chuẩn hóa Object Management Group (OMG)",
      "Tổ chức Tiêu chuẩn Đo lường Quốc tế Viễn thông (ITU)",
      "Viện Tiêu chuẩn và Công nghệ Quốc gia Mỹ (NIST)",
      "Hiệp hội Phần mềm Nguồn mở Apache Quốc tế (ASF)"
    ],
    "answer": 0,
    "explanation": "UML được tiêu chuẩn hóa và duy trì bởi tổ chức Object Management Group (OMG) từ năm 1997 cho đến nay.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-023",
    "question": "Mục đích quan trọng nhất của việc xây dựng Mô hình (Model) trong kỹ nghệ phần mềm là gì?",
    "options": [
      "Trừu tượng hóa để quản lý độ phức tạp của hệ thống",
      "Trang trí tài liệu dự án thêm nhiều màu sắc bắt mắt",
      "Thay thế hoàn toàn mã nguồn chương trình ứng dụng thực",
      "Loại bỏ hoàn toàn vai trò của các lập trình viên phần mềm"
    ],
    "answer": 0,
    "explanation": "Mô hình giúp đơn giản hóa và trừu tượng hóa hiện thực, cho phép con người nắm bắt và quản lý độ phức tạp của hệ thống trước khi bắt tay lập trình.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-024",
    "question": "Nhóm biểu đồ nào trong UML tập trung thể hiện khía cạnh tương tác động và hành vi theo thời gian của hệ thống?",
    "options": [
      "Nhóm biểu đồ hành vi (Behavioral & Interaction diagrams)",
      "Nhóm biểu đồ cấu trúc tĩnh dữ liệu (Structural diagrams)",
      "Nhóm biểu đồ hạ tầng vật lý máy chủ (Deployment diagrams)",
      "Nhóm biểu đồ kiến trúc thành phần nhúng (Component models)"
    ],
    "answer": 0,
    "explanation": "Behavioral Diagrams (như Sequence Diagram, Activity Diagram, State Machine) mô tả hành vi động và sự tương tác giữa các đối tượng theo thời gian.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-025",
    "question": "Kỹ thuật thu thập yêu cầu nào sau đây đặc biệt hiệu quả để tìm hiểu quy trình thực tế mà người dùng khó diễn đạt bằng lời?",
    "options": [
      "Quan sát trực tiếp tại nơi làm việc (Observation technique)",
      "Phát phiếu điều tra trắc nghiệm qua email (Questionnaire)",
      "Đọc lướt các bài báo công nghệ trên mạng (Web searching)",
      "Gửi tin nhắn hỏi nhanh qua ứng dụng trò chuyện nội bộ"
    ],
    "answer": 0,
    "explanation": "Observation (Quan sát trực tiếp) giúp BA nhìn thấy thao tác thực tế của người dùng, phát hiện các bước ngầm định mà người dùng quên hoặc không diễn đạt được.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-026",
    "question": "Đặc điểm nổi bật nhất của kỹ thuật Hội thảo thiết kế ứng dụng chung JAD (Joint Application Development) là gì?",
    "options": [
      "Tập hợp chuyên gia nghiệp vụ và kỹ thuật trong cùng phiên làm việc",
      "Chỉ phỏng vấn riêng lẻ từng nhân viên để tránh tranh luận công khai",
      "Gửi bảng câu hỏi ẩn danh qua hòm thư góp ý của cơ quan doanh nghiệp",
      "Chờ đợi người dùng tự gửi yêu cầu bằng văn bản khi có nhu cầu mới"
    ],
    "answer": 0,
    "explanation": "JAD là kỹ thuật hội thảo tập trung nhiều bên liên quan (Users, Managers, BAs, Devs) có người điều phối (Facilitator) để đạt được đồng thuận nhanh chóng.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-027",
    "question": "Khẳng định nào sau đây là SAI khi nói về kỹ thuật khảo sát bằng Bảng câu hỏi (Questionnaire / Survey)?",
    "options": [
      "Cho phép đào sâu và giải thích linh hoạt mọi tình huống phức tạp",
      "Tiết kiệm chi phí khi thu thập ý kiến của hàng ngàn người dùng",
      "Dữ liệu thu về dễ dàng thống kê và phân tích bằng công cụ định lượng",
      "Tỷ lệ phản hồi thường thấp và câu hỏi có thể bị người trả lời hiểu sai"
    ],
    "answer": 0,
    "explanation": "Bảng câu hỏi không linh hoạt và không đào sâu được chi tiết; kỹ thuật cho phép linh hoạt đào sâu là Phỏng vấn trực tiếp (Interview).",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-028",
    "question": "Tình huống: Khách hàng chưa hình dung rõ giao diện và luồng nghiệp vụ mới. Kỹ thuật kỹ nghệ nào phù hợp nhất để kích hoạt yêu cầu?",
    "options": [
      "Xây dựng bản mẫu thử nghiệm tương tác (Prototyping technique)",
      "Gửi tài liệu phân tích CSDL dài 500 trang cho khách tự đọc",
      "Bắt buộc khách hàng ký biên bản chốt yêu cầu ngay trong ngày đầu",
      "Yêu cầu khách hàng tự học ngôn ngữ lập trình để hiểu hệ thống"
    ],
    "answer": 0,
    "explanation": "Prototyping (Tạo bản mẫu mô phỏng giao diện/luồng hoạt động) giúp người dùng 'nhìn thấy và chạm vào' hệ thống tương lai, từ đó làm rõ yêu cầu dễ dàng.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-029",
    "question": "Phát biểu nào sau đây phân biệt CHÍNH XÁC quan hệ giữa Tool (Công cụ) và Technique (Kỹ thuật)?",
    "options": [
      "Technique là phương pháp thực hiện; Tool là phần mềm hỗ trợ",
      "Technique là thiết bị phần cứng; Tool là văn bản tài liệu hướng dẫn",
      "Technique là ngôn ngữ lập trình; Tool là bộ nhớ máy tính để bàn",
      "Technique và Tool là hai từ đồng nghĩa hoàn toàn trong kỹ nghệ phần mềm"
    ],
    "answer": 0,
    "explanation": "Technique (như Phỏng vấn, JAD) là cách thức con người hành động; Tool (như Jira, Enterprise Architect) là công cụ phần mềm hỗ trợ thực hiện kỹ thuật đó.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-030",
    "question": "Công cụ phần mềm hỗ trợ tự động hóa các hoạt động phân tích, thiết kế và sinh tài liệu trong kỹ nghệ phần mềm gọi là:",
    "options": [
      "Công cụ CASE (Computer-Aided Software Engineering tools)",
      "Phần mềm chỉnh sửa hiệu ứng video và biên tập âm thanh số",
      "Hệ điều hành mạng thời gian thực dùng trong thiết bị bay",
      "Trình duyệt web dùng để tra cứu tin tức thời tiết buổi sáng"
    ],
    "answer": 0,
    "explanation": "CASE tools (Computer-Aided Software Engineering) là các công cụ hỗ trợ tự động hóa quy trình phân tích, thiết kế, vẽ sơ đồ và sinh mã nguồn.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "fill-blank",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-031",
    "question": "Năm giai đoạn chuẩn theo trình tự thời gian của vòng đời phát triển hệ thống truyền thống (SDLC) là:",
    "options": [
      "Planning ➔ Analysis ➔ Design ➔ Implementation ➔ Maintenance",
      "Analysis ➔ Planning ➔ Implementation ➔ Design ➔ Maintenance",
      "Design ➔ Analysis ➔ Planning ➔ Maintenance ➔ Implementation",
      "Implementation ➔ Planning ➔ Analysis ➔ Design ➔ Maintenance"
    ],
    "answer": 0,
    "explanation": "Thứ tự chuẩn của 5 giai đoạn SDLC truyền thống: Lập kế hoạch (Planning) ➔ Phân tích (Analysis) ➔ Thiết kế (Design) ➔ Cài đặt (Implementation) ➔ Bảo trì (Maintenance).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-032",
    "question": "Quy trình thống nhất Unified Process (UP) được chia thành 4 giai đoạn (Phases) theo thứ tự nào?",
    "options": [
      "Inception ➔ Elaboration ➔ Construction ➔ Transition",
      "Elaboration ➔ Inception ➔ Transition ➔ Construction",
      "Inception ➔ Construction ➔ Elaboration ➔ Transition",
      "Construction ➔ Inception ➔ Elaboration ➔ Transition"
    ],
    "answer": 0,
    "explanation": "4 giai đoạn của Unified Process: Khởi đầu (Inception) ➔ Lập mô hình kiến trúc (Elaboration) ➔ Xây dựng (Construction) ➔ Chuyển giao (Transition).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-033",
    "question": "Sự phân định trọng tâm giữa giai đoạn Phân tích (Analysis) và Thiết kế (Design) được hiểu là:",
    "options": [
      "Analysis trả lời câu hỏi 'WHAT'; Design trả lời câu hỏi 'HOW'",
      "Analysis trả lời câu hỏi 'HOW'; Design trả lời câu hỏi 'WHAT'",
      "Analysis trả lời câu hỏi 'WHEN'; Design trả lời câu hỏi 'WHY'",
      "Analysis trả lời câu hỏi 'WHO'; Design trả lời câu hỏi 'WHERE'"
    ],
    "answer": 0,
    "explanation": "Analysis tập trung vào việc hệ thống CẦN LÀM GÌ (WHAT), còn Design tập trung vào việc hệ thống SẼ LÀM NHƯ THẾ NÀO bằng công nghệ cụ thể (HOW).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-034",
    "question": "Mục tiêu trọng yếu nhất của giai đoạn Elaboration trong quy trình Unified Process (UP) là gì?",
    "options": [
      "Xây dựng đường cơ sở kiến trúc và triệt tiêu các rủi ro lớn",
      "Viết xong 100% dòng mã nguồn của toàn bộ các chức năng phụ",
      "Đóng gói đĩa cài đặt và chuyển giao cho khách hàng nghiệm thu",
      "Bảo trì hệ thống sau khi đã vận hành trên thị trường 2 năm"
    ],
    "answer": 0,
    "explanation": "Giai đoạn Elaboration trong UP tập trung giải quyết các rủi ro kiến trúc cao nhất, thiết lập Architectural Baseline và hoàn thiện mô hình phân tích.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-035",
    "question": "Nhược điểm lớn nhất của mô hình Thác nước (Waterfall / Sequential SDLC) khi triển khai thực tế là gì?",
    "options": [
      "Rất khó thích ứng khi yêu cầu người dùng thay đổi giữa chừng",
      "Không thể lập tài liệu đặc tả ở giai đoạn đầu của dự án phần mềm",
      "Không cho phép phân công công việc cụ thể cho từng thành viên",
      "Bắt buộc người dùng phải trực tiếp tham gia lập trình cùng với dev"
    ],
    "answer": 0,
    "explanation": "Mô hình Thác nước mang tính tuần tự cứng nhắc; nếu có thay đổi hoặc sai sót ở giai đoạn đầu, chi phí sửa chữa ở giai đoạn cuối là cực kỳ đắt đỏ.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-036",
    "question": "Khẳng định nào sau đây là SAI khi so sánh giữa Traditional SDLC và Unified Process (UP)?",
    "options": [
      "UP chỉ chạy duy nhất 1 chu kỳ tuần tự và cấm lặp lại các bước",
      "Traditional SDLC tuyến tính có thể gây rủi ro trễ tiến độ dự án",
      "UP kết hợp 4 phases theo thời gian và 9 workflows kỹ thuật",
      "UP coi việc khử rủi ro kiến trúc sớm ở Elaboration là sống còn"
    ],
    "answer": 0,
    "explanation": "Khẳng định UP chỉ chạy duy nhất 1 chu kỳ tuần tự là SAI. UP là quy trình Lặp và Tăng dần (Iterative & Incremental), mỗi giai đoạn có thể có nhiều iterations.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-037",
    "question": "[Outside] Trong mô hình Agile/Scrum thực tế, vai trò của Business Analyst thường tương thích chặt chẽ nhất với vai trò nào?",
    "options": [
      "Cố vấn nghiệp vụ đắc lực cho Product Owner (PO proxy / BA)",
      "Chuyên gia quản trị máy chủ mạng và tường lửa an ninh (DevOps)",
      "Trưởng nhóm lập trình chịu trách nhiệm review code hàng ngày",
      "Nhân sự kế toán phụ trách thanh toán thù lao cho các lập trình viên"
    ],
    "answer": 0,
    "explanation": "[Outside] Trong thực tế Agile/Scrum, BA thường đóng vai trò là cánh tay đắc lực của Product Owner (hoặc Proxy PO), chịu trách nhiệm làm mịn User Stories và chuẩn bị Product Backlog.",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-038",
    "question": "[Outside] Doanh nghiệp có hệ thống kế toán 15 năm tuổi chạy ổn định nhưng giao diện cũ. Chiến lược phân tích nào an toàn nhất cho BA?",
    "options": [
      "Nghiên cứu tài liệu cũ kết hợp phỏng vấn sâu người vận hành (As-Is)",
      "Ngay lập tức xóa bỏ hệ thống cũ và yêu cầu mua ngay phần mềm mới",
      "Tự ý suy đoán toàn bộ quy trình kế toán mà không cần hỏi người dùng",
      "Bỏ qua quy tắc kế toán cũ và ép nhân viên làm theo chuẩn tự chế"
    ],
    "answer": 0,
    "explanation": "[Outside] Khi phân tích hệ thống kế thừa (Legacy System), BA cần khảo sát kỹ quy trình hiện tại (As-Is), đối chiếu luật kế toán hiện hành và tài liệu cũ trước khi đề xuất mô hình tương lai (To-Be).",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-039",
    "question": "[Outside] Khái niệm MVP (Minimum Viable Product) trong phát triển sản phẩm công nghệ hiện đại có ý nghĩa là gì?",
    "options": [
      "Sản phẩm có đủ tính năng cốt lõi tối thiểu để kiểm chứng thị trường",
      "Bản mẫu hoàn chỉnh 100% tính năng sau 5 năm nghiên cứu kỹ lưỡng",
      "Tài liệu bản vẽ thiết kế không chứa bất kỳ đoạn mã lập trình nào",
      "Sản phẩm phần mềm miễn phí không có mục đích thương mại lâu dài"
    ],
    "answer": 0,
    "explanation": "[Outside] MVP (Sản phẩm khả thi tối thiểu) là phiên bản có đủ chức năng cốt lõi giúp đội ngũ thu thập phản hồi thực tế từ khách hàng với chi phí và công sức tối thiểu.",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c1-d1-040",
    "question": "[Outside] Khi dự án đang trong pha thi công (Construction) mà khách hàng muốn đổi logic cốt lõi, quy trình chuẩn nhất là gì?",
    "options": [
      "Lập Phiếu yêu cầu thay đổi (CR) và đánh giá lại chi phí, tiến độ",
      "Lập tức đáp ứng ngay mà không cần thông báo cho ban quản lý dự án",
      "Gửi email khiển trách khách hàng vì đã làm gián đoạn việc viết code",
      "Tự động xóa toàn bộ mã nguồn cũ để bắt đầu dự án lại từ con số không"
    ],
    "answer": 0,
    "explanation": "[Outside] Khi có yêu cầu thay đổi phạm vi (Scope change), quy trình quản lý thay đổi (Change Request - CR) bắt buộc kích hoạt để phân tích tác động và điều chỉnh phụ lục hợp đồng.",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "case-study",
    "examSet": 1
  }
];
