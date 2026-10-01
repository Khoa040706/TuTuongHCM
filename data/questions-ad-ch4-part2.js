/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
   CHAPTER 4: DISCOVERY PHASE I — BASELINE, ELICITATION & USE CASE FOUNDATIONS
   BỘ ĐỀ THI SỐ 2 (PART 2) — 40 CÂU HỎI CHUẨN CỐ ĐỊNH
   CƠ CẤU: 30% DỄ (12) - 40% TRUNG BÌNH (16) - 30% KHÓ (12)
   TỶ LỆ: 36 INSIDE + 4 OUTSIDE
   MÃ CÂU HỎI: ad-c4-d2-001 ĐẾN ad-c4-d2-040
   TIÊU CHUẨN: CHỐNG ĐOÁN BỪA (DELTA L <= 15 KÝ TỰ)
   ============================================================ */

export const questionsAdCh4Part2 = [
  {
    "id": "ad-c4-d2-001",
    "question": "Về mặt pháp lý và quản trị, Baseline đóng vai trò là loại văn bản thỏa thuận nào giữa hai bên?",
    "options": [
      "Một cam kết chính thức giữa khách hàng và nhóm dự án về các tính năng sẽ được phát triển",
      "Một bản hóa đơn thu tiền trước hạn định bắt buộc đối tác phải chuyển khoản trong ngày",
      "Một tài liệu bảo hiểm tài sản đề phòng các sự cố chập cháy bo mạch máy tính văn phòng",
      "Một biên bản xử phạt hành chính đối với các lập trình viên không hoàn thành chỉ tiêu mã"
    ],
    "answer": 0,
    "explanation": "Baseline đóng vai trò như một thỏa thuận chính thức (Formal Agreement) giữa khách hàng và đội ngũ phát triển, xác định rõ những gì sẽ được làm trong phạm vi thống nhất.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-002",
    "question": "Lý do mang tính sống còn nhất để một dự án phần mềm bắt buộc phải thiết lập Baseline là gì?",
    "options": [
      "Ngăn ngừa nguy cơ phình to phạm vi (Scope Creep) làm dự án bị trễ hạn và cạn kiệt ngân sách",
      "Bắt buộc tất cả nhân viên lập trình phải làm việc tăng ca vào những ngày nghỉ cuối tuần",
      "Giảm bớt thời gian bảo hành và loại bỏ quyền yêu cầu sửa lỗi phần mềm của khách hàng",
      "Cho phép đội ngũ dự án tự do thay đổi công nghệ cơ sở dữ liệu mà không cần báo trước"
    ],
    "answer": 0,
    "explanation": "Thiết lập Baseline là yêu cầu sống còn nhằm kiểm soát sự thay đổi, ngăn chặn hiện tượng Scope Creep (Phình to phạm vi) khiến dự án vỡ tiến độ và đội chi phí nghiêm trọng.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-003",
    "question": "Một bộ hồ sơ Baseline hoàn chỉnh vào cuối giai đoạn Khởi động thường bao gồm các tài liệu nào?",
    "options": [
      "Vision Document, Business Case, Use Case Model cấp cao và Bảng thuật ngữ Glossary",
      "Source Code hoàn chỉnh, Database Schema chi tiết và Kịch bản kiểm thử hiệu năng cao",
      "Hợp đồng thuê địa điểm văn phòng, Bảng chấm công nhân viên và Hóa đơn mua sắm bàn ghế",
      "Sơ đồ đi dây mạng cáp quang, Bảng cấu hình tường lửa và Tài khoản quản trị máy chủ"
    ],
    "answer": 0,
    "explanation": "Hồ sơ Baseline chuẩn cuối Inception bao gồm: Vision Document (Tài liệu tầm nhìn), Business Case (Đề án kinh doanh), Sơ đồ Use Case cấp cao và Bảng thuật ngữ chuyên ngành (Glossary).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-004",
    "question": "Khi có một yêu cầu thay đổi (Change Request) phát sinh sau Baseline, bước xử lý đầu tiên của BA là gì?",
    "options": [
      "Phân tích tác động của sự thay đổi đối với phạm vi, tiến độ, chi phí và chất lượng dự án",
      "Lập tức viết mã nguồn bổ sung tính năng mới đó vào hệ thống ngay trong ngày làm việc",
      "Yêu cầu khách hàng thanh toán thêm tiền phạt vi phạm hợp đồng trước khi xem xét nội dung",
      "Từ chối thẳng thừng mọi đề xuất thay đổi của khách hàng mà không cần lắng nghe lý do"
    ],
    "answer": 0,
    "explanation": "Khi nhận Change Request sau Baseline, bước đầu tiên mang tính chuyên nghiệp của BA là thực hiện Phân tích tác động (Impact Analysis) về phạm vi, thời gian, chi phí và rủi ro để trình CCB phê duyệt.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-005",
    "question": "Tình huống: Giám đốc đối tác muốn bổ sung tính năng thanh toán quét mã QR vào hệ thống đã chốt Baseline. Cách giải quyết chuẩn của Quản lý dự án là:",
    "options": [
      "Lập Phiếu yêu cầu thay đổi (CR), đánh giá tác động chi phí và trình Hội đồng kiểm soát thay đổi (CCB) phê duyệt",
      "Âm thầm bảo lập trình viên làm thêm tính năng này ngoài giờ mà không ghi nhận vào bất kỳ tài liệu nào",
      "Từ chối thẳng thừng yêu cầu của Giám đốc đối tác và tuyên bố chấm dứt hợp đồng hợp tác ngay lập tức",
      "Chấp nhận ngay lập tức mọi chi phí phát sinh mà không cần báo cáo hay bàn bạc với ban giám đốc công ty"
    ],
    "answer": 0,
    "explanation": "Quy trình chuẩn mực là tạo Change Request (CR), phân tích tác động toàn diện về chi phí, nguồn lực và tiến độ, sau đó trình CCB và các bên liên quan đàm phán chính thức trước khi điều chỉnh Baseline.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-006",
    "question": "Nhiệm vụ cốt lõi của giai đoạn Khám phá yêu cầu (Discovery Phase) đối với miền bài toán là gì?",
    "options": [
      "Chuyển hóa các nhu cầu nghiệp vụ còn mơ hồ của khách hàng thành các yêu cầu phần mềm tường minh",
      "Thay thế toàn bộ dàn máy vi tính cũ của khách hàng bằng hệ thống máy chủ siêu phân luồng mới",
      "Tuyển dụng thêm hàng trăm nhân viên kỹ thuật phần mềm để phục vụ cho công tác kiểm thử tải",
      "Đăng ký bản quyền thương hiệu cho tên gọi của phần mềm tại cục sở hữu trí tuệ của nhà nước"
    ],
    "answer": 0,
    "explanation": "Nhiệm vụ trọng tâm của Discovery Phase là làm rõ miền bài toán (Problem Domain), chuyển hóa những ý tưởng, mong muốn mơ hồ thành các yêu cầu phần mềm rõ ràng, khả thi và có thể đo lường.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-007",
    "question": "Trong chu trình Discovery, hoạt động Xác thực yêu cầu (Requirements Validation) mang ý nghĩa gì?",
    "options": [
      "Kiểm chứng lại với các bên liên quan để bảo đảm hệ thống đang được xây dựng đúng nhu cầu thực tế",
      "Kiểm tra xem các đoạn mã nguồn lập trình có tuân thủ đúng quy tắc thụt đầu dòng của ngôn ngữ",
      "Đo lường thời gian đáp ứng của máy chủ cơ sở dữ liệu khi có nhiều người truy cập đồng thời",
      "Kiểm tra xem tên miền trang web của doanh nghiệp đã được gia hạn phí thường niên hay chưa"
    ],
    "answer": 0,
    "explanation": "Validation (Xác thực) nhằm bảo đảm 'Building the right system' — đối chiếu, rà soát lại các yêu cầu đã đặc tả với các Stakeholders để xác nhận hệ thống giải quyết đúng bài toán nghiệp vụ của họ.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-008",
    "question": "Hãy chọn tập hợp các Kỹ thuật Khơi gợi yêu cầu (Elicitation Techniques) phổ biến và chuẩn mực nhất của BA:",
    "options": [
      "Interview (Phỏng vấn), Workshop (Hội thảo), Survey (Khảo sát) và Observation (Quan sát thực địa)",
      "Unit Testing (Kiểm thử đơn vị), Code Review (Đọc mã), Refactoring (Tái cấu trúc) và Git Commit",
      "Defragmentation (Chống phân mảnh đĩa), Overclocking (Ép xung chip), Formatting (Định dạng ổ đĩa)",
      "Graphic Design (Thiết kế đồ họa), Video Editing (Dựng video clip), Sound Mixing (Phối âm thanh)"
    ],
    "answer": 0,
    "explanation": "Bộ công cụ Elicitation kinh điển của BA gồm: Phỏng vấn sâu (Interview), Hội thảo yêu cầu (JAD/Requirements Workshop), Bảng câu hỏi khảo sát (Survey/Questionnaire) và Quan sát thực địa (Observation).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "fill-blank",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-009",
    "question": "Phát biểu nào sau đây phân biệt CHÍNH XÁC giữa hoạt động Phân tích (Analyze) và Đặc tả (Specify)?",
    "options": [
      "Analyze là tìm hiểu bản chất và cấu trúc yêu cầu; Specify là ghi lại các yêu cầu đó bằng tài liệu chuẩn",
      "Analyze là trực tiếp viết mã nguồn phần mềm; còn Specify chỉ là việc thiết kế giao diện đồ họa bên ngoài",
      "Analyze là việc kiểm tra bảo mật máy chủ; còn Specify là việc ký kết hợp đồng thương mại với đối tác",
      "Analyze là hoạt động của khách hàng; còn Specify là nhiệm vụ hoàn toàn độc quyền của nhân viên kiểm thử"
    ],
    "answer": 0,
    "explanation": "Analyze là quá trình mổ xẻ, phát hiện mâu thuẫn, tinh lọc và mô hình hóa yêu cầu; trong khi Specify là hoạt động chính thức ghi nhận các yêu cầu đó thành văn bản đặc tả chuẩn mực (như Use Case Description).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-010",
    "question": "Khẳng định nào sau đây là SAI khi nói về tài liệu Đặc tả bổ sung (Supplementary Specification)?",
    "options": [
      "Tài liệu Supplementary Specification chỉ chứa đựng danh sách họ tên và số điện thoại của nhân viên",
      "Tài liệu này dùng để nắm bắt các yêu cầu phi chức năng (NFRs) như hiệu năng, bảo mật và tính khả dụng",
      "Tài liệu này ghi nhận các ràng buộc kỹ thuật về mặt pháp lý, tiêu chuẩn công nghệ và môi trường cài đặt",
      "Tài liệu này bổ trợ cho Use Case Model để mô tả những yêu cầu không gắn liền với một ca sử dụng đơn lẻ"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì Supplementary Specification là tài liệu kỹ thuật quan trọng lưu trữ các yêu cầu phi chức năng (URPS+: Usability, Reliability, Performance, Supportability) và các ràng buộc pháp lý/kỹ thuật toàn hệ thống.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-011",
    "question": "Tình huống: Trong buổi phỏng vấn Elicitation, người dùng cuối không thể diễn đạt được quy trình làm việc của họ. BA nên làm gì?",
    "options": [
      "Áp dụng phương pháp Quan sát thực địa (Observation / Job Shadowing) và dùng Mockup giao diện để gợi mở",
      "Lập tức chỉ trích người dùng thiếu năng lực chuyên môn và yêu cầu thay thế người dùng khác ngay lập tức",
      "Tự ý bịa ra một quy trình làm việc theo suy nghĩ cá nhân của mình mà không cần hỏi lại người dùng nữa",
      "Hủy bỏ toàn bộ các buổi khảo sát tiếp theo và yêu cầu khách hàng tự viết tài liệu kỹ thuật phần mềm"
    ],
    "answer": 0,
    "explanation": "Khi người dùng gặp khó khăn trong việc diễn đạt (Tacit knowledge), BA chuyên nghiệp sẽ dùng kỹ thuật Quan sát thực địa (Observation / Job Shadowing) hoặc dùng Prototypes/Mockups trực quan để người dùng phản hồi.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-012",
    "question": "Trong biểu đồ Use Case của UML, khung hình chữ nhật 'System Boundary' có ý nghĩa biểu diễn là gì?",
    "options": [
      "Xác định ranh giới phạm vi phần mềm: phân biệt những gì hệ thống thực hiện và những gì nằm bên ngoài",
      "Hiển thị kích thước vật lý của màn hình vi tính mà người dùng sẽ sử dụng để chạy phần mềm này",
      "Đại diện cho một bảng cơ sở dữ liệu quan hệ dùng để lưu trữ toàn bộ các tài khoản của người dùng",
      "Là một thanh vi xử lý điện tử điều khiển tốc độ nạp dữ liệu từ máy quét mã vạch vào bộ nhớ tạm"
    ],
    "answer": 0,
    "explanation": "System Boundary (Ranh giới hệ thống) là khung chữ nhật bao bọc các Use Case, định nghĩa tường minh phạm vi hệ thống: bên trong khung là chức năng hệ thống cung cấp, bên ngoài là các Actor tương tác.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-013",
    "question": "Phát biểu nào sau đây thể hiện CHÍNH XÁC bản chất của ký hiệu Tác nhân (Actor) trong biểu đồ Use Case?",
    "options": [
      "Actor đại diện cho một vai trò tương tác với hệ thống, có thể là con người hoặc hệ thống phần mềm ngoài",
      "Actor bắt buộc phải là một nhân viên chính thức đang hưởng lương trong biên chế của tổ chức doanh nghiệp",
      "Actor là một đoạn mã lập trình giao diện người dùng được viết bằng ngôn ngữ kịch bản trên trình duyệt",
      "Actor luôn luôn nằm bên trong ranh giới System Boundary để thực hiện các thao tác tính toán dữ liệu"
    ],
    "answer": 0,
    "explanation": "Actor đại diện cho một Vai trò (Role) tương tác với hệ thống từ bên ngoài: có thể là con người (khách hàng, nhân viên) hoặc một hệ thống bên ngoài (cổng thanh toán, dịch vụ email).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-014",
    "question": "Khẳng định nào sau đây là SAI khi ví von Biểu đồ Use Case Diagram như 'Mục lục' của cuốn tài liệu yêu cầu?",
    "options": [
      "Biểu đồ Use Case Diagram chứa đựng toàn bộ các câu lệnh mã nguồn và thuật toán xử lý dữ liệu chi tiết",
      "Nó cung cấp cái nhìn tổng quan toàn cảnh về phạm vi chức năng mà không làm quá tải thông tin người đọc",
      "Nó đóng vai trò định hướng giúp các bên liên quan dễ dàng tra cứu sang Use Case Description chi tiết",
      "Nó giúp phân định ranh giới hệ thống một cách trực quan giữa môi trường bên trong và các tác nhân ngoài"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì Use Case Diagram chỉ đóng vai trò như Mục lục (Table of Contents) cấp cao, KHÔNG BAO GIỜ chứa mã nguồn hay chi tiết thuật toán cài đặt bên trong.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-015",
    "question": "Khẳng định nào sau đây là SAI khi phân biệt giữa Primary Actor (Tác nhân chính) và Supporting Actor (Tác nhân hỗ trợ)?",
    "options": [
      "Supporting Actor là người trực tiếp khởi phát ca sử dụng để đạt được mục tiêu cá nhân của mình",
      "Primary Actor là tác nhân chủ động kích hoạt ca sử dụng nhằm đạt được một mục tiêu nghiệp vụ cụ thể",
      "Supporting Actor (Secondary Actor) cung cấp dịch vụ hoặc thông tin hỗ trợ cho hệ thống khi thực thi",
      "Supporting Actor thường là các hệ thống bên thứ ba như Cổng thanh toán ngân hàng hoặc Máy chủ SMS"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì người trực tiếp khởi phát Use Case để đạt được mục tiêu cá nhân là Primary Actor. Supporting Actor chỉ đóng vai trò hỗ trợ, bị hệ thống gọi tới để hoàn thành giao dịch.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-016",
    "question": "Hãy chọn phương án GHÉP CẶP CHÍNH XÁC giữa 4 loại quan hệ trong Use Case Diagram và đặc điểm ngữ nghĩa của chúng:",
    "options": [
      "1-Association: Giao tiếp hai chiều; 2-Include: Bắt buộc dùng chung; 3-Extend: Mở rộng tùy chọn có điều kiện",
      "1-Association: Kế thừa thuộc tính; 2-Include: Xóa bỏ dữ liệu; 3-Extend: Khởi động lại hệ điều hành máy chủ",
      "1-Association: Ghi đè phương thức; 2-Include: Khóa tài khoản; 3-Extend: Đổi mật khẩu định kỳ hàng tháng",
      "1-Association: Sao lưu đĩa mềm; 2-Include: Quét vi rút mạng; 3-Extend: Nâng cấp bộ nhớ trong của máy tính"
    ],
    "answer": 0,
    "explanation": "Ghép cặp chuẩn mực: 1-Association (Đường liên kết tương tác giữa Actor và Use Case); 2-Include (Quan hệ bắt buộc tái sử dụng luồng chung); 3-Extend (Quan hệ mở rộng hành vi tùy chọn có điều kiện).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "matching",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-017",
    "question": "Tình huống: Trong hệ thống Trạm thu phí tự động không dừng (ETC), xe ô tô đi qua trạm và được quét thẻ RFID. Mô hình Use Case nào chuẩn nhất?",
    "options": [
      "Primary Actor là Chủ phương tiện xe; Use Case là 'Pay Toll Fee'; Supporting Actor là Ngân hàng liên kết",
      "Primary Actor là Chiếc thẻ nhựa RFID; Use Case là 'Sạc pin thẻ'; Supporting Actor là Cột đèn giao thông",
      "Primary Actor là Khung sắt trạm thu phí; Use Case là 'Đóng rào chắn'; Supporting Actor là Mây trời trên cao",
      "Primary Actor là Đường cao tốc bê tông; Use Case là 'Đo độ lún'; Supporting Actor là Xe lu lăn mặt đường"
    ],
    "answer": 0,
    "explanation": "Trong hệ thống ETC: Chủ phương tiện xe (Vehicle Owner) đóng vai trò Primary Actor (mục tiêu trả phí đường bộ qua Use Case 'Pay Toll Fee'), Ngân hàng trừ tiền tự động là Supporting/Secondary Actor.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-018",
    "question": "Khác với Brief Description (ngắn gọn) và Fully-Dressed (khuôn mẫu chuẩn), cấp độ 'Casual Description' có đặc điểm là:",
    "options": [
      "Mô tả bằng văn xuôi không chính thức gồm vài đoạn văn bao quát các kịch bản bình thường và kịch bản lỗi",
      "Mô tả hoàn toàn bằng các câu lệnh SQL viết trực tiếp vào hệ quản trị cơ sở dữ liệu trên máy chủ đám mây",
      "Mô tả bằng các ký hiệu hình học trừu tượng mà chỉ có chuyên gia toán học mới có khả năng giải mã được",
      "Mô tả chi tiết tần số điện áp và công suất tiêu thụ điện năng của màn hình hiển thị trong phòng làm việc"
    ],
    "answer": 0,
    "explanation": "Casual Description là cấp độ mô tả dạng văn xuôi tự do (Informal paragraph format), dài vài đoạn văn, phác thảo luồng chính và một số luồng rẽ nhánh mà chưa cần khuôn mẫu bảng biểu phức tạp.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-019",
    "question": "Trường 'Trigger' (Sự kiện kích hoạt) trong tài liệu đặc tả ca sử dụng Fully-Dressed có vai trò gì?",
    "options": [
      "Xác định sự kiện khởi đầu hoặc hành động cụ thể khiến cho ca sử dụng bắt đầu thực thi",
      "Xác định thời điểm hệ thống sẽ tự động tắt nguồn máy tính sau khi người dùng ngừng làm việc",
      "Xác định số lượng dòng mã nguồn tối đa mà lập trình viên được phép viết cho tính năng này",
      "Xác định tổng số tiền bồi thường bảo hiểm nếu người dùng làm đổ nước trà lên bàn phím máy tính"
    ],
    "answer": 0,
    "explanation": "Trigger (Sự kiện kích hoạt) định nghĩa sự kiện cụ thể làm khởi phát việc thực thi của Use Case (ví dụ: Khách hàng bấm nút 'Thanh toán' trên giỏ hàng, hoặc Sự kiện thời gian đến 00:00 hàng ngày).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-020",
    "question": "Trong Use Case Description, Luồng thay thế (Alternative Flow) được thiết kế nhằm mục đích gì?",
    "options": [
      "Mô tả các con đường nghiệp vụ hợp lệ khác giúp Actor đạt được mục tiêu khi có điều kiện rẽ nhánh",
      "Mô tả cách thức sửa chữa phần cứng máy vi tính khi bị sét đánh làm hỏng bo mạch chủ của máy chủ",
      "Mô tả quy trình giải thể công ty và thanh lý toàn bộ tài sản doanh nghiệp khi dự án bị phá sản",
      "Mô tả các điều khoản xử phạt tiền đối với khách hàng nếu hủy bỏ đơn đặt hàng sau hai mươi bốn giờ"
    ],
    "answer": 0,
    "explanation": "Alternative Flows (Luồng thay thế) mô tả các nhánh nghiệp vụ hợp lệ khác (ví dụ: Khách chọn thanh toán qua Ví điện tử thay vì Thẻ tín dụng) để vẫn đi đến kết quả hoàn thành mục tiêu của ca sử dụng.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-021",
    "question": "Khẳng định nào sau đây là SAI khi viết 'Postconditions' (Điều kiện sau thành công) cho Use Case 'Transfer Money'?",
    "options": [
      "Postcondition là tài khoản người gửi đã bị trừ tiền thành công nhưng tài khoản người nhận chưa được ghi có",
      "Postcondition bảo đảm số dư của tài khoản người gửi đã bị trừ đúng số tiền và các khoản phí chuyển khoản",
      "Postcondition bảo đảm số dư của tài khoản người thụ hưởng đã được cộng đúng số tiền chuyển khoản của khách",
      "Postcondition bảo đảm một bản ghi nhật ký giao dịch tài chính đã được lưu trữ an toàn trong cơ sở dữ liệu"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì trong giao dịch tài chính (Tính chất ACID), không thể chấp nhận trạng thái tài khoản gửi đã trừ mà tài khoản nhận không được cộng. Postcondition phải bảo đảm tính toàn vẹn nhất quán dữ liệu.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-022",
    "question": "Kịch bản Luồng chính (Happy Path) trong Use Case Description nên được trình bày theo văn phong hội thoại chuẩn nào?",
    "options": [
      "Trình bày các bước theo kiểu hội thoại xen kẽ: Hành động của Tác nhân -> Phản hồi xử lý của Hệ thống",
      "Trình bày độc thoại toàn bộ bằng các câu lệnh truy vấn dữ liệu SQL lồng nhau phức tạp của máy chủ",
      "Trình bày danh sách toàn bộ các lỗi tiềm ẩn mà lập trình viên có thể gặp phải khi viết mã nguồn",
      "Trình bày bảng lương chi tiết của từng thành viên trong ban giám đốc điều hành của tập đoàn đối tác"
    ],
    "answer": 0,
    "explanation": "Văn phong chuẩn của Use Case Description là mô tả tương tác hội thoại hai chiều đối thoại (Two-column dialog hoặc Numbered steps): Bước 1: Actor hành động -> Bước 2: System kiểm tra và phản hồi.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-023",
    "question": "Khi tách các Quy tắc nghiệp vụ (như công thức tính thuế VAT) ra khỏi kịch bản Use Case, BA đạt được lợi ích gì?",
    "options": [
      "Kịch bản Use Case không bị xáo trộn khi nhà nước thay đổi biểu thuế, chỉ cần cập nhật tài liệu Business Rules",
      "Hệ điều hành máy tính sẽ tự động giảm giá bán của phần mềm xuống năm mươi phần trăm cho người sử dụng",
      "Khách hàng không bao giờ cần phải thanh toán thuế VAT cho nhà nước khi mua sắm các sản phẩm điện tử",
      "Lập trình viên không cần phải kiểm thử lại các tính năng phần mềm trước khi đưa vào vận hành thương mại"
    ],
    "answer": 0,
    "explanation": "Decoupling Business Rules giúp duy trì sự độc lập giữa luồng tương tác và chính sách nghiệp vụ. Khi thuế suất thay đổi (ví dụ 10% sang 8%), Use Case vẫn giữ nguyên, chỉ sửa tham chiếu quy tắc nghiệp vụ.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-024",
    "question": "Tình huống: Khách hàng thực hiện ca sử dụng 'Cancel Order', nhưng đơn hàng đã đóng gói và bàn giao cho bưu tá vận chuyển. BA nên đặc tả thế nào?",
    "options": [
      "Xây dựng Exception Flow: Hệ thống từ chối hủy trực tiếp, thông báo chuyển hướng sang quy trình 'Return / Refund'",
      "Tự động xóa sạch toàn bộ đơn hàng khỏi cơ sở dữ liệu và coi như đơn hàng chưa từng tồn tại trên đời này",
      "Gửi tin nhắn đe dọa người giao hàng phải lập tức quay đầu xe và nộp lại hàng hóa cho phòng bảo vệ công ty",
      "Bắt buộc khách hàng phải bồi thường gấp mười lần giá trị đơn hàng thì mới cho phép tắt ứng dụng trên điện thoại"
    ],
    "answer": 0,
    "explanation": "Khi đơn hàng đã chuyển sang trạng thái đang vận chuyển (In Transit), không thể hủy trực tiếp. Đây là một Exception Flow trong 'Cancel Order', hệ thống thông báo từ chối hủy và hướng dẫn quy trình Trả hàng/Hoàn tiền.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-025",
    "question": "Trong ca sử dụng 'Borrow Book' của Hệ thống Thư viện, điều kiện tiên quyết (Precondition) chuẩn mực là gì?",
    "options": [
      "Thẻ độc giả đang ở trạng thái hoạt động bình thường, không bị khóa và sách đang có sẵn trên giá thư viện",
      "Độc giả phải nộp trước một khoản tiền mặt bảo lãnh tương đương mười triệu đồng cho nhân viên thủ thư",
      "Độc giả phải là tác giả của chính cuốn sách đó và có chữ ký xác nhận của nhà xuất bản sách quốc gia",
      "Độc giả phải cam kết đọc xong toàn bộ cuốn sách dày một nghìn trang trong vòng hai mươi tư giờ đồng hồ"
    ],
    "answer": 0,
    "explanation": "Precondition của 'Borrow Book': Thẻ thư viện hợp lệ (không bị khóa do nợ sách hay phạt tiền) và cuốn sách mong muốn mượn đang có sẵn trên giá (Available on Shelf).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-026",
    "question": "Phát biểu nào sau đây phân biệt CHÍNH XÁC mục tiêu nghiệp vụ giữa 'Borrow Book' và 'Reserve Book'?",
    "options": [
      "Borrow Book là mượn trực tiếp sách có sẵn; Reserve Book là đặt chỗ trước cho cuốn sách đang bị mượn hết",
      "Borrow Book chỉ áp dụng cho sách giáo khoa; còn Reserve Book chỉ dành riêng cho truyện tranh thiếu nhi",
      "Borrow Book chỉ dành cho sinh viên năm nhất; còn Reserve Book chỉ dành cho giáo sư chuẩn bị về hưu",
      "Borrow Book là giao dịch trả tiền; còn Reserve Book là dịch vụ hoàn toàn miễn phí cho mọi công dân"
    ],
    "answer": 0,
    "explanation": "Phân biệt chuẩn xác: 'Borrow Book' áp dụng khi sách đang có sẵn trên kệ (Available) để mượn mang về; 'Reserve Book' áp dụng khi sách đã được người khác mượn hết (Checked Out) để vào danh sách chờ.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-027",
    "question": "Khẳng định nào sau đây là SAI khi nói về việc mô tả kịch bản ca sử dụng trong Hệ thống Thư viện?",
    "options": [
      "Kịch bản Use Case bắt buộc phải ghi rõ tên các nút bấm, màu sắc phông chữ và kích thước của các ô nhập liệu",
      "Kịch bản cần tập trung vào mục tiêu nghiệp vụ của độc giả và phản hồi logic của hệ thống quản lý thư viện",
      "Kịch bản nên tránh ràng buộc chặt chẽ vào một công nghệ giao diện cụ thể như ứng dụng web hay di động",
      "Các quy định về số lượng sách tối đa được mượn nên được tham chiếu đến quy tắc nghiệp vụ Business Rules"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì mô tả chi tiết nút bấm, màu sắc, font chữ là vi phạm lỗi 'UI Pollution' (Làm ô nhiễm giao diện). Use Case là phân tích yêu cầu hành vi mức công nghệ độc lập (Technology-independent).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-028",
    "question": "Tình huống: Khi độc giả thực hiện Use Case 'Return Book', hệ thống phát hiện cuốn sách bị rách nát trang bìa. Hệ thống nên xử lý thế nào?",
    "options": [
      "Kích hoạt Luồng ngoại lệ ghi nhận tình trạng hỏng sách, tính phí bồi thường và chuyển giao cho thủ thư xử lý",
      "Lập tức gọi điện báo cảnh sát hình sự đến bắt giữ độc giả vì hành vi cố ý phá hoại tài sản công dân",
      "Vẫn cho phép trả sách bình thường và âm thầm đổ toàn bộ trách nhiệm bồi thường lên người mượn kế tiếp",
      "Tự động xóa tên cuốn sách đó khỏi cơ sở dữ liệu và coi như thư viện chưa bao giờ sở hữu tài liệu này"
    ],
    "answer": 0,
    "explanation": "Sách bị hỏng khi trả là một kịch bản ngoại lệ (Exception Flow): hệ thống phát hiện sự cố, ghi nhận biên bản hư hỏng tài liệu, áp dụng quy tắc phạt bồi thường theo Business Rules và thông báo cho Thủ thư thụ lý.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-029",
    "question": "Tình huống: Trong sơ đồ Use Case Thư viện, một BA vẽ mũi tên có nhãn 'Mã sách ISBN' nối từ Độc giả sang Use Case. Sai lầm này là gì?",
    "options": [
      "Cạm bẫy luồng dữ liệu (Data Flow Trap): Nhầm lẫn biểu đồ Use Case với biểu đồ luồng dữ liệu (DFD)",
      "Lỗi không cài đặt chương trình phòng chống mã độc gián điệp trên máy vi tính của nhân viên phân tích",
      "Lỗi cấu hình sai địa chỉ máy chủ cơ sở dữ liệu khiến cho đường truyền internet bị ngắt quãng liên tục",
      "Lỗi vẽ sơ đồ mạng máy tính nội bộ của trường đại học không tuân thủ các quy định về an toàn điện lực"
    ],
    "answer": 0,
    "explanation": "Đường liên kết Association giữa Actor và Use Case trong UML chỉ là đường thẳng thể hiện kênh giao tiếp, KHÔNG BAO GIỜ mang nhãn dữ liệu như luồng dữ liệu của sơ đồ DFD. Đây là cạm bẫy Data Flow kinh điển.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-030",
    "question": "Trong sơ đồ Use Case, quan hệ Kế thừa (Generalization) giữa các Actor thể hiện điều gì?",
    "options": [
      "Actor con kế thừa toàn bộ các ca sử dụng của Actor cha và có thể có thêm các ca sử dụng chuyên biệt riêng",
      "Actor con sẽ bị xóa bỏ hoàn toàn quyền truy cập hệ thống và chuyển giao toàn bộ dữ liệu cho Actor cha",
      "Hai Actor này có cùng chung ngày tháng năm sinh và có quan hệ huyết thống gia đình ngoài đời thực",
      "Đường truyền mạng cáp quang kết nối giữa hai văn phòng làm việc của hai nhân viên trong cùng tòa nhà"
    ],
    "answer": 0,
    "explanation": "Generalization giữa các Actor (ví dụ: 'Manager' kế thừa 'Employee') có nghĩa là Actor con có toàn quyền thực hiện tất cả các Use Case mà Actor cha được làm, đồng thời có thêm quyền thực hiện các ca sử dụng cấp cao hơn.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-031",
    "question": "Khái niệm 'Extension Point' (Điểm mở rộng định danh) trong quan hệ `<<extend>>` có vai trò kỹ thuật gì?",
    "options": [
      "Xác định vị trí chính xác trong luồng kịch bản của Base Use Case mà hành vi mở rộng có thể được chèn vào",
      "Xác định cổng cắm dây mạng internet ở phía sau thùng máy tính của người dùng khi sử dụng phần mềm",
      "Xác định thời điểm hệ thống sẽ tự động đăng xuất tài khoản của người dùng khi họ không làm việc",
      "Xác định mức dung lượng bộ nhớ RAM tối đa mà hệ điều hành được phép cấp phát cho phần mềm này"
    ],
    "answer": 0,
    "explanation": "Extension Point là vị trí được định danh rõ ràng trong kịch bản của Base Use Case (ví dụ: `Point: [Before Payment]`) để Extension Use Case móc nối hành vi mở rộng vào khi điều kiện kích hoạt được thỏa mãn.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-032",
    "question": "Khẳng định nào sau đây là SAI khi nói về việc sử dụng quan hệ `<<include>>` trong mô hình Use Case?",
    "options": [
      "Quan hệ `<<include>>` chỉ là hành vi tùy chọn, người dùng có quyền chọn thực hiện hoặc bỏ qua tùy thích",
      "Quan hệ `<<include>>` giúp tái sử dụng các đoạn logic nghiệp vụ dùng chung giữa nhiều ca sử dụng khác nhau",
      "Mũi tên nét đứt của quan hệ `<<include>>` luôn luôn trỏ từ Base Use Case hướng về phía Included Use Case",
      "Base Use Case không thể hoàn thành mục tiêu trọn vẹn của mình nếu Included Use Case gặp lỗi thất bại"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì `<<include>>` là quan hệ BẮT BUỘC (Mandatory), không phải tùy chọn. Quan hệ tùy chọn có điều kiện là `<<extend>>`.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-033",
    "question": "Khi nào nhóm phân tích nên tổ chức phân chia mô hình Use Case thành các Package (Gói phân hệ)?",
    "options": [
      "Khi hệ thống có quy mô lớn với hàng chục Use Case cần phân chia theo các phân hệ nghiệp vụ mạch lạc",
      "Khi hệ thống chỉ có đúng một ca sử dụng duy nhất và chỉ có một người dùng sử dụng trong cả năm",
      "Khi người lập trình viên muốn nén toàn bộ mã nguồn vào đĩa CD để gửi bưu điện cho khách hàng xem",
      "Khi công ty muốn che giấu toàn bộ các chức năng của phần mềm để đối thủ cạnh tranh không sao chép"
    ],
    "answer": 0,
    "explanation": "Khi hệ thống mở rộng quy mô lớn (hàng chục đến hàng trăm Use Case), việc gom nhóm thành các Package theo Domain/Subsystem (như Bán hàng, Kho, Tài chính) giúp kiến trúc rõ ràng và dễ quản lý dự án.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-034",
    "question": "Tình huống: Bạn cần bổ sung tính năng 'Đăng ký nhận quà sinh nhật' vào ca sử dụng 'Checkout'. Bạn nên dùng giải pháp nào?",
    "options": [
      "Dùng quan hệ `<<extend>>` từ ca sử dụng 'Receive Birthday Gift' móc vào Extension Point trong 'Checkout'",
      "Viết lại toàn bộ hệ thống từ đầu và thay đổi ngôn ngữ lập trình từ Java sang ngôn ngữ máy tính khác",
      "Dùng quan hệ `<<include>>` bắt buộc một trăm phần trăm khách hàng đến mua sắm đều phải nhận quà sinh nhật",
      "Tạo một biểu đồ Use Case hoàn toàn mới và không cho phép khách hàng thực hiện thanh toán giỏ hàng nữa"
    ],
    "answer": 0,
    "explanation": "Nhận quà sinh nhật là tính năng mở rộng tùy chọn chỉ áp dụng cho khách hàng có ngày sinh nhật trong tháng. Giải pháp chuẩn UML là dùng quan hệ `<<extend>>` kèm Extension Point để giữ cho Base Case 'Checkout' trong sáng.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-035",
    "question": "Cạm bẫy 'CRUD Trap' trong thiết kế Use Case biểu hiện như thế nào và gây ra tác hại gì cho dự án?",
    "options": [
      "Xé nhỏ một thực thể thành 4 Use Case Create, Read, Update, Delete gây lạm phát và mất bức tranh nghiệp vụ",
      "Làm cho hệ thống cơ sở dữ liệu bị hỏng khóa ngoại và tự động xóa toàn bộ các bản ghi của khách hàng",
      "Khiến cho máy chủ bị nghẽn mạng do lượng truy cập từ các robot tìm kiếm trên mạng internet quá lớn",
      "Làm cho màn hình vi tính của người sử dụng bị đổi màu và không thể hiển thị được các ký tự văn bản"
    ],
    "answer": 0,
    "explanation": "CRUD Trap xảy ra khi BA tư duy theo cơ sở dữ liệu, phân mảnh một đối tượng thành 4 Use Case vụn vặt (Tạo, Xem, Sửa, Xóa). Cần gom lại thành 1 Use Case quản lý nghiệp vụ trọn vẹn (như 'Manage Customer Profiles').",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-036",
    "question": "Hãy chọn phương án GHÉP CẶP CHÍNH XÁC giữa các tiêu chí trong Checklist đánh giá chất lượng đặc tả Use Case:",
    "options": [
      "1-User Goal: Mang lại giá trị quan sát được; 2-Black-box: Không phụ thuộc UI; 3-Complete: Bao quát kịch bản lỗi",
      "1-User Goal: Đo cường độ dòng điện máy tính; 2-Black-box: Sơn màu đen thùng máy; 3-Complete: Xóa sạch mã nguồn",
      "1-User Goal: Thu tiền lệ phí sử dụng mạng; 2-Black-box: Đóng gói hộp đĩa mềm; 3-Complete: Khóa bàn phím máy tính",
      "1-User Goal: Tăng xung nhịp xử lý của chip; 2-Black-box: Mua thêm màn hình vi tính; 3-Complete: Tắt kết nối wifi"
    ],
    "answer": 0,
    "explanation": "Ghép cặp chuẩn mực trong Checklist kiểm định Use Case: 1-User Goal (Ca sử dụng đạt được mục tiêu mang lại giá trị quan sát được); 2-Black-box view (Mô tả hành vi độc lập với chi tiết giao diện UI/mã nguồn); 3-Completeness (Bao quát đầy đủ Luồng chính và các Luồng ngoại lệ).",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "matching",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-037",
    "question": "[Outside] Trong khung làm việc Scaled Agile Framework (SAFe), khái niệm Baseline được quản trị qua sự kiện nào?",
    "options": [
      "PI Planning (Program Increment Planning) nơi toàn bộ Release Train đồng thuận về cam kết mục tiêu và phạm vi",
      "Buổi họp Daily Standup mười lăm phút hàng ngày của một nhóm lập trình viên độc lập trong góc văn phòng",
      "Buổi tiệc liên hoan cuối năm của ban giám đốc tập đoàn đối tác khi hoàn thành việc chia cổ tức tài chính",
      "Quy trình nộp phạt tiền cho công ty viễn thông khi đường truyền internet của tòa nhà bị mất tín hiệu"
    ],
    "answer": 0,
    "explanation": "[Outside] Trong quy mô Agile doanh nghiệp lớn (SAFe), PI Planning là sự kiện cốt lõi xác lập Baseline cho một chu kỳ Program Increment (thường 8-12 tuần), nơi toàn bộ Agile Release Train đồng thuận mục tiêu (PI Objectives) và phạm vi cam kết.",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "case-study",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-038",
    "question": "[Outside] Khi ứng dụng công cụ NLP và Mô hình ngôn ngữ lớn (LLM) để trích xuất Use Case từ biên bản phỏng vấn, rủi ro lớn nhất là:",
    "options": [
      "Mô hình có thể sinh ra các bước kịch bản ảo giác (Hallucinations) không có thật trong nghiệp vụ của doanh nghiệp",
      "Mô hình làm tiêu tốn quá nhiều mực in của máy in văn phòng khi in tài liệu yêu cầu ra các trang giấy trắng",
      "Mô hình tự động gửi email mời các đối thủ cạnh tranh tham gia vào ban giám đốc điều hành của công ty mình",
      "Mô hình làm giảm tốc độ đường truyền internet của toàn bộ khu vực thành phố xuống mức thấp kỷ lục"
    ],
    "answer": 0,
    "explanation": "[Outside] Rủi ro lớn nhất khi dùng LLMs tự động hóa trích xuất yêu cầu là hiện tượng 'Hallucination' (Ảo giác thông tin): AI tự sáng tạo thêm các quy tắc hoặc bước xử lý không hề tồn tại trong nghiệp vụ thực tế của khách hàng.",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "case-study",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-039",
    "question": "[Outside] Trong kiến trúc Microservices, làm thế nào để tránh cạm bẫy 'Distributed Monolith' khi thiết kế các Use Case lớn?",
    "options": [
      "Thiết kế các dịch vụ có tính kết dính cao (High Cohesion) và giao tiếp phi đồng bộ thông qua Message Broker",
      "Bắt buộc tất cả các dịch vụ vi mô phải chia sẻ chung một cơ sở dữ liệu duy nhất và dùng chung một khóa chính",
      "Cấm tất cả các dịch vụ không được trao đổi bất kỳ dữ liệu nào với nhau trong toàn bộ vòng đời vận hành",
      "Chuyển toàn bộ mã nguồn của các dịch vụ vi mô về một tệp tin duy nhất dài hàng trăm nghìn dòng lệnh"
    ],
    "answer": 0,
    "explanation": "[Outside] Để tránh biến Microservices thành Distributed Monolith (Nguyên khối phân tán), các ca sử dụng lớn cần được phân rã theo ranh giới nghiệp vụ tự quản (Loose Coupling & High Cohesion), giao tiếp phi đồng bộ qua Event Broker (như Kafka, RabbitMQ).",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "case-study",
    "examSet": 2
  },
  {
    "id": "ad-c4-d2-040",
    "question": "[Outside] Khi ánh xạ mô hình Use Case sang Thiết kế hướng miền (DDD), khái niệm 'Aggregate Root' đảm nhận vai trò gì?",
    "options": [
      "Là thực thể cổng vào duy nhất chịu trách nhiệm bảo đảm toàn vẹn các quy tắc nghiệp vụ khi thực thi ca sử dụng",
      "Là một thanh bộ nhớ RAM máy tính lưu trữ tạm thời các biểu tượng đồ họa trước khi vẽ lên màn hình vi tính",
      "Là một sợi dây cáp mạng quang nối từ tổng đài bưu điện trung tâm vào phòng máy chủ của công ty bảo hiểm",
      "Là chức danh của người nhân viên bảo vệ chịu trách nhiệm bấm chuông báo giờ tan làm cho toàn bộ công ty"
    ],
    "answer": 0,
    "explanation": "[Outside] Trong DDD, Aggregate Root là thực thể đóng vai trò 'người gác cổng' duy nhất của một cụm thực thể, chịu trách nhiệm thực thi các bất biến nghiệp vụ (Business Invariants) khi Use Case tác động lên dữ liệu.",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "case-study",
    "examSet": 2
  }
];
