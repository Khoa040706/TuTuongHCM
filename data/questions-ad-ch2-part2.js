/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
   CHAPTER 2: SYSTEMS DEVELOPMENT LIFE CYCLE (SDLC) & BUSINESS MODELING
   BỘ ĐỀ THI SỐ 2 (PART 2) — 40 CÂU HỎI CHUẨN CỐ ĐỊNH
   CƠ CẤU: 30% DỄ (12) - 40% TRUNG BÌNH (16) - 30% KHÓ (12)
   TỶ LỆ: 36 INSIDE + 4 OUTSIDE
   MÃ CÂU HỎI: ad-c2-d2-001 ĐẾN ad-c2-d2-040
   TIÊU CHUẨN: CHỐNG ĐOÁN BỪA (DELTA L <= 15 KÝ TỰ)
   ============================================================ */

export const questionsAdCh2Part2 = [
  {
    "id": "ad-c2-d2-001",
    "question": "Triết lý cốt lõi của trường phái tiếp cận thích ứng (Adaptive Approach) được đúc kết qua phát biểu nào?",
    "options": [
      "'Embrace change, deliver early and often' (Chào đón thay đổi và bàn giao thường xuyên)",
      "'Freeze all requirements at day one' (Đóng băng mọi yêu cầu ngay từ ngày khởi đầu)",
      "'Avoid customer feedback at all costs' (Tránh né phản hồi của người dùng bằng mọi giá)",
      "'Complete all documentation before coding' (Viết xong toàn bộ tài liệu rồi mới viết mã)"
    ],
    "answer": 0,
    "explanation": "Adaptive Approach (như Agile/Scrum) tuân theo triết lý 'Embrace change, deliver early and often' — chào đón sự biến động của yêu cầu và bàn giao phần mềm chạy được liên tục.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-002",
    "question": "Khái niệm chu kỳ làm việc ngắn từ 1 đến 4 tuần để tạo ra bản tăng dần chạy được trong Adaptive gọi là:",
    "options": [
      "Vòng lặp phát triển tăng dần (Iteration hoặc Sprint trong các phương pháp luận Agile)",
      "Giai đoạn bảo trì dứt điểm sản phẩm phần mềm sau khi đã hoàn thành toàn bộ hợp đồng",
      "Giai đoạn khảo sát tính khả thi ban đầu để trình ban lãnh đạo phê duyệt ngân sách",
      "Quy trình đóng băng yêu cầu tuyệt đối nhằm ngăn chặn mọi sự thay đổi của khách hàng"
    ],
    "answer": 0,
    "explanation": "Trong Adaptive Approach, Iteration (hoặc Sprint) là chu kỳ thời gian cố định (Timebox từ 1-4 tuần), trong đó nhóm hoàn thành một phần tính năng và có thể chạy được.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "fill-blank",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-003",
    "question": "Về mức độ tham gia của khách hàng (Customer Involvement), trường phái Adaptive Approach có đặc trưng gì?",
    "options": [
      "Khách hàng tham gia liên tục, đồng hành và phản hồi trong từng buổi đánh giá vòng lặp",
      "Khách hàng chỉ xuất hiện ở ngày đầu tiên để ký hợp đồng và ngày cuối cùng để nghiệm thu",
      "Khách hàng hoàn toàn bị cấm xem sản phẩm đang làm cho đến khi hết hạn bảo hành năm năm",
      "Khách hàng chỉ được phép giao tiếp với đội ngũ kỹ thuật thông qua văn bản luật sư gửi"
    ],
    "answer": 0,
    "explanation": "Trong Adaptive, khách hàng là đối tác đồng hành xuyên suốt, tham gia vào các buổi lập kế hoạch và nghiệm thu sau mỗi vòng lặp để định hướng sản phẩm kịp thời.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-004",
    "question": "Khẳng định nào sau đây là SAI khi nói về khía cạnh Tài liệu (Documentation) trong Adaptive Approach?",
    "options": [
      "Adaptive Approach hoàn toàn cấm đoán việc viết bất kỳ tài liệu kỹ thuật nào trong dự án",
      "Adaptive Approach hướng tới tài liệu 'vừa đủ dùng' (Just enough) và mang tính thực tế cao",
      "Adaptive Approach coi phần mềm hoạt động tốt có giá trị cao hơn tài liệu quá dài dòng",
      "Adaptive Approach vẫn lưu trữ các quyết định kiến trúc và hướng dẫn cài đặt then chốt"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì Tuyên ngôn Agile nêu rõ 'phần mềm chạy tốt quan trọng hơn tài liệu đồ sộ', chứ không hề cấm đoán tài liệu. Nhóm vẫn viết tài liệu vừa đủ dùng (Just enough).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-005",
    "question": "Trong quản trị sự thay đổi (Change Management), Adaptive Approach xem các thay đổi yêu cầu phát sinh là:",
    "options": [
      "Cơ hội để cải tiến giải pháp và tối đa hóa giá trị kinh doanh đem lại cho khách hàng",
      "Một hành vi vi phạm hợp đồng kinh tế nghiêm trọng cần phải xử phạt hành chính nặng",
      "Sự thiếu sót tai hại của đội ngũ lập trình viên khi không thể đoán trước được tương lai",
      "Rào cản nguy hiểm cần phải được loại trừ bằng cách cắt đứt liên lạc với người dùng"
    ],
    "answer": 0,
    "explanation": "Adaptive Approach coi sự thay đổi là tất yếu và là cơ hội để hệ thống thích ứng tốt hơn với nhu cầu thực tế của thị trường, đem lại giá trị tối đa cho người dùng.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-006",
    "question": "Tình huống: Một startup công nghệ phát triển ứng dụng Web3 mới lạ, thị trường biến động từng ngày. Nên chọn gì?",
    "options": [
      "Adaptive Approach vì giúp phát hành bản MVP sớm, đo lường phản hồi và điều chỉnh linh hoạt",
      "Predictive Approach vì bắt buộc phải khóa chết toàn bộ yêu cầu kỹ thuật trong vòng 3 năm",
      "Không áp dụng bất kỳ mô hình nào, để lập trình viên tự do viết mã theo sở thích cá nhân",
      "Dành 2 năm đầu tiên chỉ để vẽ sơ đồ chi tiết và tuyệt đối không viết một dòng mã nào"
    ],
    "answer": 0,
    "explanation": "Khi yêu cầu không chắc chắn, công nghệ mới và thị trường biến động nhanh, Adaptive Approach là con đường duy nhất giúp thử nghiệm, học hỏi và thích ứng kịp thời.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-007",
    "question": "Hãy chọn phương án ghép cặp ĐÚNG NHẤT giữa tiêu chí đánh giá và phương pháp tiếp cận SDLC phù hợp:",
    "options": [
      "Yêu cầu ổn định ➔ Predictive; Yêu cầu biến động ➔ Adaptive; Cần MVP nhanh ➔ Adaptive",
      "Yêu cầu ổn định ➔ Adaptive; Yêu cầu biến động ➔ Predictive; Cần MVP nhanh ➔ Predictive",
      "Yêu cầu ổn định ➔ Bỏ qua SDLC; Yêu cầu biến động ➔ Thác nước; Cần MVP nhanh ➔ Đóng băng",
      "Yêu cầu ổn định ➔ Không làm; Yêu cầu biến động ➔ Cấm đổi; Cần MVP nhanh ➔ Viết tài liệu"
    ],
    "answer": 0,
    "explanation": "Tiêu chí chuẩn: Yêu cầu rõ ràng, ổn định ➔ Predictive; Yêu cầu không chắc chắn, biến động liên tục hoặc cần phát hành bản mẫu nhanh (MVP) ➔ Adaptive.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "matching",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-008",
    "question": "Giai đoạn thứ hai 'Analysis' (Phân tích yêu cầu) trong SDLC tập trung trả lời câu hỏi cốt lõi nào?",
    "options": [
      "Hệ thống thông tin cần phải làm được những gì cho người dùng? (What is needed?)",
      "Tại sao chúng ta phải đầu tư ngân sách để làm hệ thống này? (Why build it?)",
      "Hệ thống sẽ được thiết kế cơ sở dữ liệu và hạ tầng ra sao? (How will it work?)",
      "Ai sẽ là người chi trả tiền bản quyền phần mềm cho dự án? (Who pays for it?)"
    ],
    "answer": 0,
    "explanation": "Giai đoạn Analysis tìm hiểu sâu sắc nghiệp vụ của người dùng để trả lời câu hỏi: 'Hệ thống cần phải làm được những gì?' (What is needed / What must the system do?).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-009",
    "question": "Trong giai đoạn đầu tiên (Planning Phase), hai sản phẩm bàn giao sơ bộ quan trọng nhất thường là gì?",
    "options": [
      "Phiếu yêu cầu hệ thống (System Request) và Báo cáo nghiên cứu khả thi (Feasibility Study)",
      "Mã nguồn hoàn chỉnh của hệ thống kèm theo các bản thiết kế mạch vi xử lý máy chủ",
      "Bản hợp đồng thuê ngoài nhân sự văn phòng và danh sách số điện thoại của khách hàng",
      "Biên bản bàn giao quyền sở hữu trí tuệ phần mềm cho các đối tác liên kết thương mại"
    ],
    "answer": 0,
    "explanation": "Giai đoạn Planning kết thúc với 2 tài liệu nền tảng: Phiếu yêu cầu hệ thống (System Request) và Báo cáo nghiên cứu tính khả thi (Feasibility Study) cùng Kế hoạch dự án sơ bộ.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-010",
    "question": "Khẳng định nào sau đây là SAI khi bàn về giai đoạn Hỗ trợ & Bảo trì (Support Phase) trong SDLC?",
    "options": [
      "Giai đoạn Support đồng nghĩa với việc xóa bỏ toàn bộ hệ thống cũ để lập trình lại từ đầu",
      "Giai đoạn Support bao gồm việc sửa lỗi phần mềm phát sinh trong quá trình người dùng sử dụng",
      "Giai đoạn Support bao gồm việc tối ưu hóa hiệu năng và cập nhật theo các quy định mới",
      "Giai đoạn Support đòi hỏi đội ngũ hỗ trợ kỹ thuật (Helpdesk) trợ giúp người dùng hàng ngày"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì giai đoạn Support nhằm giữ cho hệ thống vận hành liên tục và ổn định (Keep it running), sửa chữa lỗi và nâng cấp nhỏ, chứ không phải phá bỏ viết lại từ đầu.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-011",
    "question": "Hoạt động nào sau đây là trọng tâm bản chất của giai đoạn 'Design' (Thiết kế hệ thống)?",
    "options": [
      "Chuyển đổi các mô hình logic thành lược đồ cơ sở dữ liệu vật lý và kiến trúc phần mềm",
      "Phỏng vấn người sử dụng để ghi nhận các mong muốn nghiệp vụ sơ bộ ban đầu của họ",
      "Đóng gói hệ thống vào đĩa quang và bán đại trà trên thị trường cho người tiêu dùng",
      "Cài đặt phần mềm diệt virus trên tất cả các máy vi tính xách tay của ban giám đốc"
    ],
    "answer": 0,
    "explanation": "Giai đoạn Design chuyển hóa các yêu cầu logic (WHAT) thành mô hình vật lý cụ thể (HOW): kiến trúc mạng, thiết kế cơ sở dữ liệu vật lý, giao diện người dùng và thông số kỹ thuật.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-012",
    "question": "Trong quản trị bảo trì phần mềm, hoạt động bổ sung tính năng mới để nâng cao năng lực cạnh tranh được gọi là:",
    "options": [
      "Bảo trì hoàn thiện nâng cao (Perfective Maintenance nhằm gia tăng giá trị sử dụng)",
      "Bảo trì sửa lỗi khẩn cấp (Corrective Maintenance nhằm khắc phục các sự cố sập mạng)",
      "Bảo trì thích ứng môi trường (Adaptive Maintenance nhằm theo kịp các bản cập nhật HĐH)",
      "Bảo trì phòng ngừa rủi ro (Preventive Maintenance nhằm tránh các lỗi có thể xảy ra)"
    ],
    "answer": 0,
    "explanation": "Bảo trì hoàn thiện (Perfective Maintenance) là hoạt động nâng cấp, bổ sung thêm các tính năng mới theo yêu cầu kinh doanh để hệ thống phục vụ người dùng tốt hơn.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-013",
    "question": "Tình huống: Khi ngân hàng chuyển đổi từ Windows Server 2012 sang Windows Server 2022, ứng dụng cần sửa đổi để chạy được. Đây là dạng bảo trì gì?",
    "options": [
      "Bảo trì thích ứng (Adaptive Maintenance để thích nghi với môi trường công nghệ mới)",
      "Bảo trì sửa lỗi (Corrective Maintenance vì phần mềm bị lỗi logic ngay từ đầu dự án)",
      "Bảo trì hoàn thiện (Perfective Maintenance vì giao diện người dùng trông đẹp mắt hơn)",
      "Bảo trì phòng ngừa (Preventive Maintenance vì không liên quan đến hệ điều hành máy)"
    ],
    "answer": 0,
    "explanation": "Bảo trì thích ứng (Adaptive Maintenance) là việc điều chỉnh hệ thống phần mềm để thích nghi với những thay đổi trong môi trường phần cứng, hệ điều hành hoặc quy định pháp lý.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-014",
    "question": "Năm câu hỏi cốt lõi tương ứng với 5 giai đoạn SDLC (Planning, Analysis, Design, Implementation, Support) lần lượt là:",
    "options": [
      "Why build it? ➔ What is needed? ➔ How will it work? ➔ Build & Deploy? ➔ Keep it running?",
      "How will it work? ➔ Why build it? ➔ What is needed? ➔ Keep it running? ➔ Build & Deploy?",
      "What is needed? ➔ Why build it? ➔ How will it work? ➔ Build & Deploy? ➔ Keep it running?",
      "Why build it? ➔ How will it work? ➔ What is needed? ➔ Keep it running? ➔ Build & Deploy?"
    ],
    "answer": 0,
    "explanation": "Chuỗi 5 câu hỏi cốt lõi: Planning (Why?), Analysis (What?), Design (How?), Implementation (Build & Deploy), Support (Keep it running).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "fill-blank",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-015",
    "question": "Khái niệm 'Ranh giới doanh nghiệp' (Enterprise Boundary) trong Business Modeling có ý nghĩa là gì?",
    "options": [
      "Đường phân định rõ những đối tượng thuộc tổ chức và các thực thể nằm bên ngoài tổ chức",
      "Hàng rào bảo vệ vật lý và hệ thống camera giám sát lắp đặt xung quanh tòa nhà văn phòng",
      "Tổng số vốn điều lệ tối thiểu mà công ty phải đăng ký với các cơ quan quản lý nhà nước",
      "Ranh giới địa lý giữa các quận huyện trên bản đồ hành chính nơi công ty đặt chi nhánh"
    ],
    "answer": 0,
    "explanation": "Enterprise Boundary (Ranh giới doanh nghiệp) phân định phạm vi tổ chức: những ai/thực thể nào thuộc nội bộ doanh nghiệp (Internal) và những ai là đối tác/khách hàng bên ngoài (External).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-016",
    "question": "Một nhân sự nội bộ trực tiếp tham gia vận hành và thực thi các hoạt động trong quy trình nghiệp vụ được gọi là:",
    "options": [
      "Business Worker (Người thực thi nghiệp vụ — ví dụ: Thủ kho, Kế toán viên, Thu ngân)",
      "Business Actor (Khách hàng vãng lai bước vào cửa hàng để mua sắm hàng hóa bán lẻ)",
      "Business Entity (Tờ séc ngân hàng và phiếu thu chi tiền mặt lưu trữ trong két sắt)",
      "Business Goal (Mục tiêu tăng trưởng lợi nhuận quý được đề ra tại cuộc họp cổ đông)"
    ],
    "answer": 0,
    "explanation": "Business Worker là cá nhân hoặc vai trò thuộc nội bộ doanh nghiệp (Internal), trực tiếp tham gia xử lý các hoạt động trong một hoặc nhiều Business Use Case.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-017",
    "question": "Phát biểu nào sau đây phân biệt CHÍNH XÁC giữa Business Actor và System Actor?",
    "options": [
      "Business Actor tương tác với doanh nghiệp; System Actor tương tác với phần mềm cụ thể",
      "Business Actor luôn là máy tính; còn System Actor luôn luôn là con người bằng xương thịt",
      "Business Actor chỉ tồn tại trên giấy tờ; còn System Actor chỉ tồn tại ở các nước phát triển",
      "Business Actor và System Actor là hai khái niệm hoàn toàn trùng lặp không có gì phân biệt"
    ],
    "answer": 0,
    "explanation": "Business Actor tương tác với toàn bộ tổ chức/doanh nghiệp ở mức vĩ mô; còn System Actor là người dùng hoặc hệ thống bên ngoài tương tác trực tiếp với ứng dụng phần mềm cụ thể.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-018",
    "question": "Khẳng định nào sau đây là SAI khi nói về Thực thể nghiệp vụ (Business Entity)?",
    "options": [
      "Business Entity là một người lao động có hợp đồng lao động chính thức với doanh nghiệp",
      "Business Entity là tài liệu hoặc thông tin thụ động được tạo ra hoặc sử dụng bởi quy trình",
      "Hóa đơn bán hàng, Đơn đặt hàng, Hồ sơ bảo hành là những ví dụ điển hình của Business Entity",
      "Business Entity thường có vòng đời trạng thái (ví dụ: Tạo mới ➔ Đã duyệt ➔ Đã thanh toán)"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì người lao động là Business Worker. Business Entity là đối tượng thông tin hoặc tài liệu thụ động (như Đơn hàng, Hợp đồng, Hóa đơn) được quy trình xử lý.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-019",
    "question": "Tại sao trong quy trình chuẩn, công việc Business Modeling cần được thực hiện trước khi thiết kế hệ thống phần mềm?",
    "options": [
      "Để tối ưu hóa quy trình trước, tránh việc biến một quy trình thủ công tồi tệ thành phần mềm tồi",
      "Vì các ngôn ngữ lập trình hiện đại như C# hay Python bắt buộc phải đọc sơ đồ Business Modeling",
      "Để người quản lý dự án có cớ từ chối thanh toán lương cho các lập trình viên mới tuyển dụng",
      "Vì nếu không có Business Modeling thì các máy chủ mạng sẽ không thể kết nối Internet được"
    ],
    "answer": 0,
    "explanation": "Nếu tin học hóa một quy trình đang rối rắm và lỗi thời, ta chỉ thu được một phần mềm tồi tệ hoạt động nhanh hơn. Business Modeling giúp xem xét, tái cấu trúc quy trình tối ưu trước.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-020",
    "question": "Tình huống: Trong quy trình khám bệnh tại bệnh viện, 'Bệnh nhân', 'Bác sĩ' và 'Bệnh án' lần lượt là:",
    "options": [
      "Bệnh nhân: Business Actor; Bác sĩ: Business Worker; Bệnh án: Business Entity",
      "Bệnh nhân: Business Worker; Bác sĩ: Business Actor; Bệnh án: Business Entity",
      "Bệnh nhân: Business Entity; Bác sĩ: Business Worker; Bệnh án: Business Actor",
      "Bệnh nhân: Business Actor; Bác sĩ: Business Entity; Bệnh án: Business Worker"
    ],
    "answer": 0,
    "explanation": "Bệnh nhân là khách hàng bên ngoài (Business Actor) nhận dịch vụ khám; Bác sĩ là nhân sự nội bộ (Business Worker) thực hiện khám; Bệnh án là tài liệu thông tin thụ động (Business Entity).",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-021",
    "question": "Trong sơ đồ Business Use Case mức doanh nghiệp, ký hiệu nào được dùng để biểu diễn một Ca sử dụng nghiệp vụ?",
    "options": [
      "Hình elip có một đường gạch chéo ('/') xuyên qua kèm tên quy trình nghiệp vụ bên trong",
      "Hình tam giác cân tô màu đỏ với các đường nét đứt khúc xung quanh khung viền ngoài",
      "Hình chữ nhật vuông vức có chứa đoạn mã lập trình chi tiết của hàm xử lý hóa đơn",
      "Hình lục giác đều có chứa chữ ký xác nhận của tổng giám đốc công ty ở chính giữa"
    ],
    "answer": 0,
    "explanation": "Trong ký hiệu RUP/UML Business Modeling, Business Use Case được biểu diễn bằng hình elip có một đường gạch chéo ('/') xuyên qua ở mép trên bên trái.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-022",
    "question": "Hãy chọn phương án ghép cặp ĐÚNG NHẤT giữa khái niệm Business Modeling và ví dụ thực tế trong chuỗi bán lẻ:",
    "options": [
      "Actor - Khách mua hàng; Worker - Nhân viên thu ngân; Entity - Phiếu xuất kho hàng",
      "Actor - Nhân viên thu ngân; Worker - Khách mua hàng; Entity - Phiếu xuất kho hàng",
      "Actor - Phiếu xuất kho hàng; Worker - Nhân viên thu ngân; Entity - Khách mua hàng",
      "Actor - Khách mua hàng; Worker - Phiếu xuất kho hàng; Entity - Nhân viên thu ngân"
    ],
    "answer": 0,
    "explanation": "Trong cửa hàng bán lẻ: Khách mua hàng là Business Actor; Nhân viên thu ngân là Business Worker; Phiếu xuất kho là Business Entity.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "matching",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-023",
    "question": "Tài liệu khởi phát ban đầu mô tả lý do kinh doanh và giá trị kỳ vọng của hệ thống thông tin mới là:",
    "options": [
      "Phiếu yêu cầu hệ thống (System Request / Project Proposal Document)",
      "Bản thiết kế lược đồ cơ sở dữ liệu vật lý hoàn chỉnh ở mức chi tiết",
      "Bản hợp đồng lao động chính thức giữa kỹ sư lập trình và ban giám đốc",
      "Bản vẽ thiết kế bố trí phòng làm việc và điều hòa nhiệt độ văn phòng"
    ],
    "answer": 0,
    "explanation": "System Request (Phiếu yêu cầu hệ thống) là tài liệu khởi phát dự án, nêu rõ nhà tài trợ (Sponsor), nhu cầu kinh doanh (Business Need), tính năng mong muốn và giá trị kỳ vọng.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-024",
    "question": "Khẳng định nào sau đây là SAI khi nói về Nghiên cứu tính khả thi (Feasibility Study) trong giai đoạn Initiation?",
    "options": [
      "Mọi dự án công nghệ khi lập phiếu yêu cầu đều bắt buộc phải được chấp thuận triển khai 100%",
      "Feasibility Study giúp tổ chức đánh giá toàn diện xem có nên tiếp tục đầu tư hay dừng lại",
      "Feasibility Study cần được cập nhật và đánh giá lại liên tục qua từng giai đoạn then chốt",
      "Nếu dự án bị đánh giá là không khả thi (No-Go), tổ chức sẽ tiết kiệm được rất nhiều nguồn lực"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì mục đích của Feasibility Study là sàng lọc; rất nhiều ý tưởng đề xuất sẽ bị bác bỏ (No-Go) nếu không đạt yêu cầu về tài chính, công nghệ hoặc khả năng vận hành.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-025",
    "question": "Trong phân tích khả thi kinh tế, khái niệm 'Thời gian hoàn vốn' (Payback Period) được định nghĩa là gì?",
    "options": [
      "Khoảng thời gian cần thiết để tổng lợi ích tích lũy bù đắp hoàn toàn tổng chi phí đầu tư ban đầu",
      "Tổng số ngày làm việc chính thức của một kỹ sư lập trình trong suốt toàn bộ năm tài chính",
      "Thời hạn tối đa mà ngân hàng cho phép doanh nghiệp chậm thanh toán lãi suất vay ngắn hạn",
      "Thời gian cần thiết để sao lưu toàn bộ dữ liệu máy chủ sang một trung tâm dữ liệu dự phòng"
    ],
    "answer": 0,
    "explanation": "Payback Period (Thời gian hoàn vốn) là khoảng thời gian (thường tính bằng năm hoặc tháng) để dòng thu nhập tích lũy từ dự án cân bằng với tổng chi phí đầu tư bỏ ra ban đầu.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-026",
    "question": "Yếu tố nào sau đây là tiêu chuẩn quan trọng nhất để đánh giá 'Khả thi Tổ chức/Vận hành' (Organizational Feasibility)?",
    "options": [
      "Sự ủng hộ mạnh mẽ của ban lãnh đạo cấp cao (Management Sponsorship) và sự sẵn sàng của người dùng",
      "Khả năng mua được các máy chủ máy tính có cấu hình vi xử lý tốc độ cao nhất trên thế giới",
      "Dung lượng lưu trữ của các ổ cứng mạng có đáp ứng được hàng tỷ bức ảnh cá nhân hay không",
      "Số lượng kỹ sư lập trình biết sử dụng đồng thời cả năm ngôn ngữ lập trình khác nhau"
    ],
    "answer": 0,
    "explanation": "Organizational Feasibility xem xét liệu dự án có nhận được sự hậu thuẫn từ lãnh đạo (Executive Sponsor) và liệu người dùng cuối có đón nhận hệ thống mới vào quy trình làm việc hay không.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-027",
    "question": "Khi đánh giá 'Khả thi Kỹ thuật' (Technical Feasibility), rủi ro của dự án sẽ tăng vọt trong trường hợp nào?",
    "options": [
      "Dự án có quy mô rất lớn, sử dụng công nghệ hoàn toàn mới lạ mà đội ngũ chưa từng có kinh nghiệm",
      "Dự án áp dụng công nghệ quen thuộc đã được kiểm chứng ổn định trên thị trường suốt mười năm",
      "Quy mô dự án nhỏ gọn, phạm vi công việc gói gọn trong một phòng ban chức năng duy nhất",
      "Đội ngũ kỹ sư dự án đã từng làm thành công ba hệ thống có tính chất tương tự trước đó"
    ],
    "answer": 0,
    "explanation": "Rủi ro kỹ thuật tỷ lệ thuận với: Quy mô dự án lớn, Công nghệ mới mẻ chưa trưởng thành, và Sự thiếu hụt kinh nghiệm chuyên môn của đội ngũ phát triển.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-028",
    "question": "Tình huống: Dự án đầu tư 200 triệu đồng. Sau 3 năm, tổng lợi nhuận ròng thu về là 100 triệu đồng. Tỷ suất hoàn vốn ROI là:",
    "options": [
      "50% (Được tính bằng công thức chuẩn: Tổng lợi ích ròng chia cho Tổng chi phí đầu tư ban đầu)",
      "100% (Được tính bằng cách lấy tổng lợi nhuận thu về nhân đôi do thời gian kéo dài ba năm)",
      "20% (Được tính bằng cách chia đều chi phí đầu tư cho từng quý hoạt động của doanh nghiệp)",
      "10% (Được tính theo mức lãi suất gửi tiết kiệm không kỳ hạn của ngân hàng thương mại)"
    ],
    "answer": 0,
    "explanation": "ROI = (Tổng lợi ích ròng / Tổng chi phí đầu tư) = 100 triệu / 200 triệu = 0.5 = 50%. Đây là chỉ số chuẩn trong đánh giá hiệu quả tài chính của dự án.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-029",
    "question": "Cổng kiểm soát dự án (Stage Gate / Project Gate) ở cuối giai đoạn Initiation có thể đưa ra các quyết định nào?",
    "options": [
      "Go (Cho phép triển khai), No-Go (Hủy bỏ dự án) hoặc Hold/Rework (Yêu cầu rà soát bổ sung)",
      "Bắt buộc phải sa thải toàn bộ nhân viên tham gia nghiên cứu tính khả thi của dự án đó",
      "Tự động chuyển toàn bộ mã nguồn của phần mềm lên các kho lưu trữ trực tuyến công cộng",
      "Chỉ được phép chọn quyết định Go và cấm tuyệt đối việc dừng hay trì hoãn dự án lại"
    ],
    "answer": 0,
    "explanation": "Project Gatekeeper đưa ra một trong 3 quyết định: Go (tiến hành pha kế tiếp), No-Go (chấm dứt dự án để bảo toàn vốn), hoặc Hold/Rework (tạm hoãn để làm rõ thêm thông tin).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-030",
    "question": "Ký hiệu trực quan biểu diễn Nút Kết thúc hoạt động (Activity Final Node) trong sơ đồ Activity Diagram của UML là:",
    "options": [
      "Vòng tròn viền ngoài bao quanh một điểm đen đặc ở giữa (Bull's eye)",
      "Hình quả trám màu xanh lá cây có chứa dấu cộng màu trắng ở bên trong",
      "Hình vuông góc cạnh có viền đứt đoạn kèm dấu gạch chéo màu đỏ thắm",
      "Mũi tên hai chiều hướng thẳng đứng về phía góc trái trên cùng trang"
    ],
    "answer": 0,
    "explanation": "Activity Final Node (Nút kết thúc hoạt động) được biểu diễn bằng biểu tượng mắt bò (Bull's eye) — một vòng tròn bên ngoài bao quanh một điểm tròn đen đặc bên trong.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-031",
    "question": "Thanh đồng bộ kết hợp (Join Node) trong Activity Diagram hoạt động theo nguyên tắc logic nào sau đây?",
    "options": [
      "Chỉ cho phép luồng công việc tiếp tục khi TẤT CẢ các luồng đầu vào đồng thời đã hoàn thành",
      "Chỉ cần duy nhất một luồng đầu vào bất kỳ hoàn thành là cho phép luồng tiếp theo chạy ngay",
      "Tự động hủy bỏ toàn bộ các luồng công việc nếu có một luồng thực hiện quá ba mươi giây",
      "Chuyển tiếp ngẫu nhiên một trong các luồng vào và xóa vĩnh viễn các luồng công việc còn lại"
    ],
    "answer": 0,
    "explanation": "Join Node (Hội tụ đồng bộ) nhận nhiều luồng chạy song song và đóng vai trò điểm đồng bộ: nó bắt buộc phải đợi tất cả các luồng vào hoàn thành xong mới kích hoạt luồng ra.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-032",
    "question": "Điều kiện rẽ nhánh (Guard Condition) gắn trên các nhánh thoát của Nút Quyết định trong Activity Diagram được viết trong cặp dấu nào?",
    "options": [
      "Cặp dấu ngoặc vuông '[ ]' (Ví dụ: [Số dư tài khoản >= Số tiền rút] hoặc [Không đủ tiền])",
      "Cặp dấu ngoặc nhọn '{ }' kèm theo các dòng lệnh lập trình chi tiết của ngôn ngữ Java",
      "Cặp dấu ngoặc đơn '( )' kèm theo dấu hỏi chấm lớn để biểu thị sự nghi ngờ của hệ thống",
      "Cặp dấu gạch chéo '/ /' kèm theo tên của người kỹ sư phân tích vẽ ra biểu đồ đó"
    ],
    "answer": 0,
    "explanation": "Trong UML, Guard Condition (Điều kiện canh gác) luôn luôn được đặt bên trong cặp dấu ngoặc vuông `[ ]`. Nhánh tương ứng chỉ được kích hoạt nếu điều kiện bên trong đúng (True).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-033",
    "question": "Khẳng định nào sau đây là SAI khi nói về Biểu đồ Hoạt động (Activity Diagram) trong kỹ nghệ yêu cầu?",
    "options": [
      "Activity Diagram là công cụ chính yếu dùng để thiết kế lược đồ quan hệ và khóa ngoại cơ sở dữ liệu",
      "Activity Diagram rất hữu hiệu trong việc mô hình hóa các quy trình nghiệp vụ phức tạp đa luồng",
      "Activity Diagram cho phép thể hiện rõ ràng các điều kiện rẽ nhánh và các luồng thực thi song song",
      "Activity Diagram kết hợp làn bơi (Swimlanes) giúp làm rõ trách nhiệm của từng phòng ban liên quan"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì thiết kế lược đồ quan hệ và khóa ngoại là vai trò của Biểu đồ Lớp (Class Diagram) hoặc Mô hình ERD, tuyệt đối không phải của Activity Diagram.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-034",
    "question": "Điểm phân biệt bản chất nhất giữa Business Use Case Diagram và System Use Case Diagram là gì?",
    "options": [
      "Business Use Case mô tả quy trình kinh doanh tổng thể; System Use Case mô tả ranh giới phần mềm",
      "Business Use Case chỉ dùng cho ngân hàng; còn System Use Case chỉ dùng cho bệnh viện tư nhân",
      "Business Use Case không bao giờ có Actor; còn System Use Case bắt buộc phải có mười Actor",
      "Business Use Case do lập trình viên vẽ; còn System Use Case do giám đốc kinh doanh trực tiếp vẽ"
    ],
    "answer": 0,
    "explanation": "Business Use Case Diagram mô hình hóa hoạt động kinh doanh của toàn bộ doanh nghiệp (bất kể có IT hay không); còn System Use Case Diagram chỉ mô hình hóa ranh giới và chức năng của phần mềm cụ thể.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-035",
    "question": "Tình huống: Khi mô hình hóa quy trình duyệt hồ sơ vay tín dụng qua 3 phòng ban (Kinh doanh, Thẩm định, Ban giám đốc), kỹ thuật nào tối ưu nhất?",
    "options": [
      "Sử dụng Activity Diagram có chia 3 làn bơi (Swimlanes) tương ứng với từng phòng ban",
      "Vẽ 3 biểu đồ hình tròn độc lập và không có bất kỳ đường dây kết nối luồng nào giữa chúng",
      "Chỉ mô tả quy trình của phòng Kinh doanh và bỏ qua hoàn toàn hai phòng ban chức năng còn lại",
      "Viết mã nguồn Java trực tiếp vào biên bản cuộc họp mà không cần vẽ bất kỳ biểu đồ nào"
    ],
    "answer": 0,
    "explanation": "Khi quy trình trải dài qua nhiều bộ phận, Swimlanes (Làn bơi) trong Activity Diagram là kỹ thuật trực quan hoàn hảo nhất để thể hiện sự bàn giao công việc và trách nhiệm qua từng khâu.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-036",
    "question": "Trong Activity Diagram, khi muốn biểu diễn một thực thể thông tin được truyền giữa hai hành động, người ta dùng:",
    "options": [
      "Luồng đối tượng (Object Flow) kết nối tới Nút đối tượng (Object Node hình chữ nhật)",
      "Một vòng lặp vô tận (Infinite loop) với hai mũi tên đâm ngược chiều nhau liên tục",
      "Biểu tượng chiếc chìa khóa vàng để biểu thị dữ liệu đó đã được mã hóa an toàn tuyệt đối",
      "Một đám mây hình elip màu xanh da trời có chứa địa chỉ email của người gửi thông tin"
    ],
    "answer": 0,
    "explanation": "Trong UML Activity Diagram, Object Node (hình chữ nhật) và Object Flow (mũi tên nét đứt hoặc liền có mang đối tượng) được sử dụng để thể hiện dữ liệu/tài liệu được tạo ra và tiêu thụ giữa các hành động.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-037",
    "question": "[Outside] Trong các chiến lược chuyển đổi hệ thống, chiến lược 'Chuyển đổi Song song' (Parallel Conversion) có ưu điểm vượt trội là gì?",
    "options": [
      "Độ an toàn cao nhất vì luôn có hệ thống cũ hoạt động làm chỗ dựa dự phòng nếu hệ thống mới lỗi",
      "Chi phí triển khai rẻ nhất vì nhân viên chỉ cần làm việc một nửa thời gian so với ngày thường",
      "Thời gian triển khai ngắn nhất và không bao giờ đòi hỏi phải nhập dữ liệu kiểm toán đối chiếu",
      "Loại bỏ hoàn toàn sự cần thiết phải kiểm thử phần mềm trước khi đưa vào môi trường thực tế"
    ],
    "answer": 0,
    "explanation": "[Outside] Parallel Conversion chạy song song cả 2 hệ thống trong một thời gian. Ưu điểm là an toàn nhất (Safe fallback), nhưng nhược điểm là chi phí đắt đỏ và nhân viên phải nhập liệu gấp đôi.",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-038",
    "question": "[Outside] Doanh nghiệp có 200 cửa hàng tiện lợi toàn quốc. Chiến lược chuyển đổi hệ thống nào giúp thăm dò rủi ro an toàn nhất?",
    "options": [
      "Chiến lược Chuyển đổi Thí điểm (Pilot Conversion — thử nghiệm hoàn chỉnh tại 2-3 cửa hàng trước)",
      "Chiến lược Chuyển đổi Trực tiếp (Direct Conversion — đồng loạt bật hệ thống mới trên cả 200 cửa hàng)",
      "Cắt bỏ toàn bộ hệ thống bán hàng cũ và cho phép nhân viên bán hàng ghi sổ tay trong một năm",
      "Đóng cửa toàn bộ 200 cửa hàng trong ba tháng để lập trình viên cài đặt phần mềm từng máy một"
    ],
    "answer": 0,
    "explanation": "[Outside] Pilot Conversion chọn một địa điểm đại diện (Pilot site) để vận hành thử toàn bộ hệ thống, xử lý triệt để các phát sinh thực tế trước khi nhân rộng trên toàn quốc.",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "case-study",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-039",
    "question": "[Outside] Một đề án phần mềm có chi phí đầu tư 500 triệu đồng và dự kiến mang lại lợi ích tài chính 800 triệu đồng. Tỷ suất hoàn vốn ROI là:",
    "options": [
      "60% (Được tính bằng công thức: Lợi nhuận ròng 300 triệu chia cho Tổng chi phí đầu tư 500 triệu)",
      "160% (Được tính bằng cách lấy tổng lợi ích chia đôi rồi nhân với số lượng kỹ sư của dự án)",
      "30% (Được tính bằng cách lấy tổng chi phí chia cho thời gian khấu hao máy chủ năm năm)",
      "25% (Được tính theo tỷ lệ lạm phát bình quân của nền kinh tế trong chu kỳ ba năm gần nhất)"
    ],
    "answer": 0,
    "explanation": "[Outside] Lợi nhuận ròng = 800 triệu - 500 triệu = 300 triệu. ROI = 300 triệu / 500 triệu = 60%. Đây là bài toán tài chính cơ bản trong phân tích khả thi kinh tế dự án phần mềm.",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "single-correct",
    "examSet": 2
  },
  {
    "id": "ad-c2-d2-040",
    "question": "[Outside] Tình huống: Khi hai công ty bảo hiểm sáp nhập, hệ thống phần mềm mới bị nhân viên phản đối dữ dội vì làm thay đổi thói quen. BA nên làm gì?",
    "options": [
      "Lập kế hoạch Quản trị Thay đổi (Change Management), đào tạo đồng hành và giải thích lợi ích rõ ràng",
      "Gửi thông báo đe dọa sa thải toàn bộ các nhân viên có ý kiến thắc mắc về phần mềm mới",
      "Lập tức gỡ bỏ hệ thống mới và quay lại hoàn toàn quy trình xử lý giấy tờ thủ công như trước",
      "Khuyên ban giám đốc không cần quan tâm đến nhân viên vì phần mềm đã mua rồi thì phải dùng"
    ],
    "answer": 0,
    "explanation": "[Outside] Thất bại do rào cản văn hóa và tâm lý người dùng thuộc về Khả thi Vận hành (Organizational Feasibility). Giải pháp chuẩn của BA là triển khai Quản trị Thay đổi (Change Management), lắng nghe, đào tạo và truyền thông rõ giá trị.",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "case-study",
    "examSet": 2
  }
];
