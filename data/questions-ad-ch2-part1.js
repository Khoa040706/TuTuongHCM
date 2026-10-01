/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
   CHAPTER 2: SYSTEMS DEVELOPMENT LIFE CYCLE (SDLC) & BUSINESS MODELING
   BỘ ĐỀ THI SỐ 1 (PART 1) — 40 CÂU HỎI CHUẨN CỐ ĐỊNH
   CƠ CẤU: 30% DỄ (12) - 40% TRUNG BÌNH (16) - 30% KHÓ (12)
   TỶ LỆ: 36 INSIDE + 4 OUTSIDE
   MÃ CÂU HỎI: ad-c2-d1-001 ĐẾN ad-c2-d1-040
   TIÊU CHUẨN: CHỐNG ĐOÁN BỪA (DELTA L <= 15 KÝ TỰ)
   ============================================================ */

export const questionsAdCh2Part1 = [
  {
    "id": "ad-c2-d1-001",
    "question": "Phát biểu nào sau đây mô tả CHÍNH XÁC quan hệ giữa SDLC và Methodology trong phát triển phần mềm?",
    "options": [
      "SDLC là khái niệm khung bao trùm; Methodology là cách triển khai chi tiết cụ thể",
      "Methodology là khái niệm bao trùm; SDLC chỉ là một công cụ lập trình nhỏ bên trong",
      "SDLC và Methodology là hai khái niệm hoàn toàn đồng nghĩa và có thể thay thế nhau",
      "SDLC chỉ dùng cho mô hình Thác nước; còn Methodology chỉ áp dụng cho mô hình Agile"
    ],
    "answer": 0,
    "explanation": "SDLC là khái niệm bao trùm (Umbrella concept) định nghĩa các pha cần thiết. Methodology (như Waterfall, Scrum, UP) là cách triển khai cụ thể, quy định thứ tự và tần suất lặp của các pha đó.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-002",
    "question": "Triết lý cốt lõi của trường phái tiếp cận dự đoán (Predictive Approach) được đúc kết qua câu khẩu hiệu nào?",
    "options": [
      "'Plan the work, then work the plan' (Lập kế hoạch trước, rồi thực thi đúng kế hoạch)",
      "'Embrace change, deliver early and often' (Chào đón thay đổi và bàn giao liên tục)",
      "'Code first, think later and fix on production' (Cứ viết mã trước rồi sửa sau)",
      "'No documentation, just working software' (Không cần tài liệu chỉ cần có phần mềm)"
    ],
    "answer": 0,
    "explanation": "Predictive Approach tuân thủ triết lý 'Plan the work, then work the plan' — lập kế hoạch toàn diện ngay từ đầu và kiểm soát chặt chẽ việc thực thi đúng kế hoạch.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-003",
    "question": "Về phương diện bàn giao sản phẩm (Delivery), trường phái Predictive Approach có đặc trưng nổi bật nào?",
    "options": [
      "Bàn giao toàn bộ hệ thống hoàn chỉnh một lần duy nhất vào giai đoạn cuối (Big-bang)",
      "Bàn giao các phần mềm chạy được tăng dần đều đặn sau mỗi chu kỳ từ hai đến ba tuần",
      "Không bao giờ bàn giao sản phẩm chạy được cho khách hàng trước thời hạn mười năm",
      "Bàn giao mã nguồn thô hàng ngày để khách hàng tự biên dịch và tự chịu trách nhiệm"
    ],
    "answer": 0,
    "explanation": "Predictive Approach bàn giao theo kiểu Big-bang release — chuyển giao toàn bộ sản phẩm hoàn chỉnh một lần duy nhất ở cuối giai đoạn Implementation.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-004",
    "question": "Khẳng định nào sau đây là SAI khi so sánh giữa Predictive Approach và Adaptive Approach?",
    "options": [
      "Predictive Approach chào đón và khuyến khích thay đổi yêu cầu liên tục ở mọi thời điểm",
      "Adaptive Approach chia nhỏ dự án thành nhiều vòng lặp ngắn để bàn giao sản phẩm tăng dần",
      "Predictive Approach đòi hỏi tài liệu đặc tả trang trọng và phê duyệt ký duyệt chặt chẽ",
      "Adaptive Approach yêu cầu khách hàng tham gia đánh giá thường xuyên sau từng vòng lặp"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì Predictive Approach kiểm soát thay đổi rất khắt khe thông qua quy trình trang trọng (Formal change control), chứ không chào đón thay đổi tự do.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-005",
    "question": "Theo bảng tiêu chí 3 chiều, yếu tố nào sau đây là dấu hiệu rõ ràng nhất ủng hộ việc chọn Adaptive Approach?",
    "options": [
      "Yêu cầu nghiệp vụ ban đầu còn mơ hồ, công nghệ mới và khách hàng muốn phát hành sớm",
      "Hệ thống kiểm soát bay hàng không có yêu cầu kỹ thuật cố định và phải kiểm toán chặt",
      "Dự án có ngân sách đóng băng, phạm vi cố định 100% và hợp đồng phạt vi phạm tiến độ",
      "Khách hàng quá bận rộn và tuyên bố chỉ có thể gặp đội ngũ dự án đúng một lần duy nhất"
    ],
    "answer": 0,
    "explanation": "Adaptive Approach phù hợp nhất khi yêu cầu chưa rõ ràng, dễ biến động, áp dụng công nghệ mới và cần kiểm chứng thị trường nhanh (MVP).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-006",
    "question": "Tình huống: Một công ty làm phần mềm kế toán theo luật thuế mới ban hành cố định. Tiếp cận nào là tối ưu nhất?",
    "options": [
      "Predictive Approach vì quy định pháp lý đã hoàn toàn rõ ràng, chuẩn hóa và ít thay đổi",
      "Adaptive Approach vì phải liên tục thay đổi thuật toán tính thuế mỗi tuần một lần ngẫu nhiên",
      "Bỏ qua bước phân tích yêu cầu để tiến hành viết mã giao diện ngay trong ngày đầu tiên",
      "Thuê ngoài toàn bộ mà không cần lập kế hoạch hay phân tích bất kỳ tài liệu quy chuẩn nào"
    ],
    "answer": 0,
    "explanation": "Khi luật pháp và quy định nghiệp vụ đã rõ ràng, cố định và có tính chuẩn hóa cao (như luật thuế), Predictive Approach (như Waterfall) là lựa chọn an toàn và hiệu quả nhất.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-007",
    "question": "Hãy chọn phương án ghép cặp ĐÚNG NHẤT giữa chiều kích thước dự án và đặc trưng của Predictive Approach:",
    "options": [
      "Requirements - Đóng băng từ đầu; Change - Kiểm soát khắt khe; Delivery - Cuối kỳ",
      "Requirements - Thay đổi liên tục; Change - Tự do phát sinh; Delivery - Hàng tuần",
      "Requirements - Không cần ghi nhận; Change - Cấm tuyệt đối; Delivery - Ngẫu nhiên",
      "Requirements - Khách hàng tự viết; Change - Không kiểm soát; Delivery - Đầu kỳ"
    ],
    "answer": 0,
    "explanation": "Trong Predictive: Requirements được xác định chi tiết và đóng băng (freeze) sớm; Change được kiểm soát qua formal process; Delivery được chuyển giao ở cuối kỳ.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "matching",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-008",
    "question": "Giai đoạn đầu tiên 'Planning' (Lập kế hoạch) trong SDLC tập trung trả lời câu hỏi cốt lõi nào?",
    "options": [
      "Tại sao chúng ta lại xây dựng hệ thống thông tin này? (Why build the system?)",
      "Hệ thống thông tin cần phải làm được những chức năng gì? (What is needed?)",
      "Hệ thống sẽ được thiết kế kiến trúc hoạt động ra làm sao? (How will it work?)",
      "Ai sẽ là người trực tiếp vận hành máy chủ lưu trữ dữ liệu? (Who will run it?)"
    ],
    "answer": 0,
    "explanation": "Giai đoạn Planning trả lời câu hỏi 'Why build the system?' — xác định lý do kinh doanh, giá trị kỳ vọng và tính khả thi của dự án.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-009",
    "question": "Trong 5 giai đoạn của SDLC, sản phẩm bàn giao (Deliverable) quan trọng nhất của giai đoạn Analysis là gì?",
    "options": [
      "Tài liệu đặc tả yêu cầu hệ thống hoàn chỉnh (SRS / System Requirements Spec)",
      "Bản kế hoạch dự án tổng thể và phiếu đề xuất khả thi ban đầu (Project Charter)",
      "Bản thiết kế lược đồ cơ sở dữ liệu quan hệ và mô hình vật lý mạng máy tính",
      "Các gói mã nguồn đã được biên dịch hoàn tất kèm kịch bản kiểm thử hiệu năng"
    ],
    "answer": 0,
    "explanation": "Sản phẩm bàn giao trọng tâm của giai đoạn Analysis là Tài liệu đặc tả yêu cầu hệ thống (System Requirements Specification - SRS / BRD) và các mô hình phân tích logic.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-010",
    "question": "Khẳng định nào sau đây là SAI khi nói về giai đoạn 'Design' (Thiết kế) trong vòng đời SDLC?",
    "options": [
      "Giai đoạn Design tập trung đi tìm câu trả lời cho câu hỏi nghiệp vụ 'Hệ thống cần làm GÌ'",
      "Giai đoạn Design chuyển hóa các yêu cầu logic (WHAT) thành các thông số kỹ thuật (HOW)",
      "Thiết kế giao diện người dùng (UI/UX) và kiến trúc hệ thống là hoạt động then chốt của Design",
      "Thiết kế cơ sở dữ liệu vật lý và các giao thức mạng được hoàn tất trong giai đoạn Design"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì câu hỏi 'Hệ thống cần làm GÌ' (WHAT) thuộc về giai đoạn Analysis. Giai đoạn Design trả lời câu hỏi 'Hệ thống hoạt động NHƯ THẾ NÀO' (HOW).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-011",
    "question": "Hoạt động nào sau đây thuộc về giai đoạn 'Implementation' (Triển khai & Thi công) trong SDLC?",
    "options": [
      "Lập trình mã nguồn, kiểm thử tích hợp hệ thống, đào tạo người dùng và chuyển đổi dữ liệu",
      "Khảo sát phỏng vấn sơ bộ để tìm hiểu tính khả thi kinh tế và ước tính tổng ngân sách",
      "Vẽ các sơ đồ ca sử dụng nghiệp vụ tổng quan và mô hình hóa dòng dữ liệu mức trừu tượng",
      "Bảo trì định kỳ và hỗ trợ giải quyết sự cố kỹ thuật phát sinh sau khi đưa vào vận hành"
    ],
    "answer": 0,
    "explanation": "Giai đoạn Implementation bao gồm các hoạt động: viết mã (Programming), kiểm thử (Testing), cài đặt hệ thống (Installation/Deployment), đào tạo người dùng và chuyển đổi dữ liệu.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-012",
    "question": "Giai đoạn 'Support' (Hỗ trợ & Bảo trì) trong SDLC thường chiếm tỷ trọng chi phí như thế nào trong toàn vòng đời?",
    "options": [
      "Chiếm tỷ trọng chi phí lớn nhất, thường từ 60% đến 80% tổng chi phí sở hữu hệ thống (TCO)",
      "Chiếm tỷ trọng chi phí nhỏ nhất, hầu như không đáng kể so với chi phí mua máy chủ ban đầu",
      "Hoàn toàn không tốn chi phí vì phần mềm sau khi lập trình xong sẽ không bao giờ phát sinh lỗi",
      "Luôn luôn bằng đúng một phần mười chi phí của giai đoạn phân tích yêu cầu nghiệp vụ ban đầu"
    ],
    "answer": 0,
    "explanation": "Giai đoạn Support (Bảo trì) kéo dài trong suốt thời gian hệ thống vận hành và thường chiếm từ 60% đến 80% tổng chi phí sở hữu (Total Cost of Ownership - TCO).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-013",
    "question": "Tình huống: Sau khi hệ thống vận hành 3 tháng, người dùng phát hiện lỗi tính sai chiết khấu VIP. Hoạt động này thuộc pha nào?",
    "options": [
      "Pha Support (Bảo trì sửa lỗi - Corrective Maintenance nhằm khắc phục sự cố vận hành)",
      "Pha Planning (Lập kế hoạch lại toàn bộ dự án từ đầu và giải tán đội ngũ triển khai cũ)",
      "Pha Analysis (Phỏng vấn lại toàn bộ giám đốc công ty để xem xét giải thể hệ thống)",
      "Pha Design (Vẽ lại toàn bộ kiến trúc mạng máy tính và mua bổ sung máy chủ mới)"
    ],
    "answer": 0,
    "explanation": "Khắc phục lỗi phát sinh sau khi hệ thống đã Go-Live thuộc hoạt động Bảo trì sửa lỗi (Corrective Maintenance) trong giai đoạn Support của SDLC.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-014",
    "question": "Năm giai đoạn chuẩn mực của SDLC sắp xếp theo đúng tiến trình thời gian thực hiện tuần tự là:",
    "options": [
      "Planning ➔ Analysis ➔ Design ➔ Implementation ➔ Support",
      "Analysis ➔ Planning ➔ Design ➔ Implementation ➔ Support",
      "Planning ➔ Design ➔ Analysis ➔ Implementation ➔ Support",
      "Design ➔ Planning ➔ Analysis ➔ Support ➔ Implementation"
    ],
    "answer": 0,
    "explanation": "Trình tự chuẩn mực của 5 pha SDLC là: Planning (Lập kế hoạch) ➔ Analysis (Phân tích) ➔ Design (Thiết kế) ➔ Implementation (Thi công/Triển khai) ➔ Support (Hỗ trợ/Bảo trì).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "fill-blank",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-015",
    "question": "Mục đích quan trọng nhất của việc Mô hình hóa doanh nghiệp (Business Modeling) trước khi xây dựng phần mềm là gì?",
    "options": [
      "Hiểu rõ ngữ cảnh và quy trình thực tế nhằm tránh tự động hóa một quy trình đang bị lỗi",
      "Để kéo dài thời gian dự án nhằm mục đích thu thêm tiền phụ phí tư vấn từ phía khách hàng",
      "Để người lập trình không cần phải học các ngôn ngữ lập trình hiện đại như Java hay C#",
      "Nhằm mục đích thay thế hoàn toàn vai trò của ban giám đốc điều hành trong doanh nghiệp"
    ],
    "answer": 0,
    "explanation": "Mô hình hóa doanh nghiệp giúp BA hiểu rõ bối cảnh hoạt động, tối ưu hóa quy trình trước khi tin học hóa, tránh sai lầm kinh điển 'tự động hóa một quy trình tồi sẽ chỉ tạo ra kết quả tồi nhanh hơn'.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-016",
    "question": "Trong 4 khái niệm cốt lõi của Business Modeling, khái niệm nào đại diện cho một vai trò BÊN NGOÀI tương tác với doanh nghiệp?",
    "options": [
      "Business Actor (Tác nhân doanh nghiệp — ví dụ: Khách hàng, Nhà cung cấp đối tác)",
      "Business Worker (Nhân sự nội bộ — ví dụ: Nhân viên bán hàng, Giao dịch viên quầy)",
      "Business Use Case (Ca sử dụng nghiệp vụ — ví dụ: Quy trình thanh toán đơn hàng)",
      "Business Entity (Thực thể nghiệp vụ — ví dụ: Hóa đơn đỏ, Đơn đặt hàng, Hợp đồng)"
    ],
    "answer": 0,
    "explanation": "Business Actor là vai trò hoặc thực thể nằm BÊN NGOÀI ranh giới doanh nghiệp (như Khách hàng, Ngân hàng liên kết, Cơ quan thuế) tương tác và nhận giá trị từ doanh nghiệp.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-017",
    "question": "Điểm khác biệt cốt lõi nhất giữa Business Worker và Business Actor trong mô hình nghiệp vụ là gì?",
    "options": [
      "Business Worker nằm bên TRONG tổ chức; còn Business Actor là đối tượng nằm bên NGOÀI",
      "Business Worker là hệ thống máy tính tự động; còn Business Actor luôn luôn là con người",
      "Business Worker không bao giờ nhận lương; còn Business Actor là người trả lương nhân viên",
      "Business Worker chỉ xuất hiện trong phần mềm; còn Business Actor chỉ xuất hiện ở đời thực"
    ],
    "answer": 0,
    "explanation": "Ranh giới doanh nghiệp phân định: Business Actor là đối tượng bên NGOÀI (External) nhận giá trị; Business Worker là nhân sự hoặc vai trò bên TRONG (Internal) tham gia thực thi quy trình.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-018",
    "question": "Khái niệm nào sau đây trong Business Modeling đại diện cho các đối tượng thông tin thụ động được quy trình xử lý?",
    "options": [
      "Business Entity (Thực thể nghiệp vụ như: Hóa đơn, Hồ sơ bệnh án, Hợp đồng tín dụng)",
      "Business Actor (Tác nhân chủ động yêu cầu hệ thống cung cấp dịch vụ bên ngoài)",
      "Business Worker (Người lao động trực tiếp thao tác các công việc văn phòng nội bộ)",
      "Business Goal (Mục tiêu doanh thu hàng năm được ban tổng giám đốc phê chuẩn)"
    ],
    "answer": 0,
    "explanation": "Business Entity (Thực thể nghiệp vụ) là những thứ (things) hoặc tài liệu thông tin thụ động (Passive objects) được tạo ra, sử dụng hoặc cập nhật bởi các Business Use Case.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-019",
    "question": "Khẳng định nào sau đây là SAI khi bàn về khái niệm Business Use Case?",
    "options": [
      "Business Use Case chỉ mô tả các thao tác nhấp chuột và nhập liệu trên phần mềm máy tính",
      "Business Use Case mô tả một chuỗi hành động mang lại giá trị có thể quan sát được cho Actor",
      "Business Use Case biểu diễn quy trình kinh doanh tổng thể bất kể có phần mềm hỗ trợ hay không",
      "Business Use Case thường được kích hoạt bởi một Business Actor nằm ngoài tổ chức"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì mô tả nhấp chuột/nhập liệu là System Use Case chi tiết. Business Use Case ở mức vĩ mô, biểu diễn luồng giá trị nghiệp vụ từ đầu đến cuối (End-to-End business value).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-020",
    "question": "Tình huống: Khi phân tích quy trình đặt vé máy bay, 'Hành khách' và 'Nhân viên soát vé' lần lượt được mô hình hóa là:",
    "options": [
      "Hành khách là Business Actor; Nhân viên soát vé là Business Worker của hãng",
      "Hành khách là Business Worker; Nhân viên soát vé là Business Actor của hãng",
      "Cả hai đối tượng trên đều bắt buộc phải được mô hình hóa là Business Entity",
      "Cả hai đối tượng trên đều bắt buộc phải được mô hình hóa là System Actor"
    ],
    "answer": 0,
    "explanation": "Hành khách là khách hàng bên ngoài (Business Actor) nhận dịch vụ bay. Nhân viên soát vé là nhân sự nội bộ của hãng hàng không (Business Worker) thực thi quy trình phục vụ.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-021",
    "question": "Mối quan hệ giữa Quy trình nghiệp vụ (Business Process) và Ca sử dụng nghiệp vụ (Business Use Case) được hiểu là:",
    "options": [
      "Business Process là chuỗi hoạt động thực tế; Business Use Case là cách chuẩn hóa trong UML",
      "Business Process chỉ dùng cho sản xuất cơ khí; còn Business Use Case chỉ dùng viết code",
      "Business Process và Business Use Case là hai khái niệm đối lập hoàn toàn không liên quan",
      "Business Process bắt buộc phải có máy tính; còn Business Use Case làm bằng sổ tay giấy"
    ],
    "answer": 0,
    "explanation": "Business Process là dòng chảy công việc kinh doanh trong thực tế; Business Use Case là kỹ thuật mô hình hóa chuẩn mực của UML để nắm bắt và đặc tả dòng chảy công việc đó.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-022",
    "question": "Thuật ngữ biểu diễn 4 thành phần cốt lõi của Mô hình hóa nghiệp vụ theo mô hình RUP/UML chuẩn là:",
    "options": [
      "Business Actor, Business Worker, Business Use Case và Business Entity",
      "Input Block, Process Block, Storage System và Output Device",
      "Predictive Approach, Adaptive Approach, Waterfall Model và Scrum Framework",
      "Planning Phase, Analysis Phase, Design Phase và Implementation Phase"
    ],
    "answer": 0,
    "explanation": "Bốn khái niệm nền tảng trong Business Modeling theo Rational Unified Process (RUP) là: Business Actor, Business Worker, Business Use Case và Business Entity.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "fill-blank",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-023",
    "question": "Giai đoạn Khởi động dự án (Initiation Phase) đóng vai trò như thế nào trong quản trị vòng đời phát triển hệ thống?",
    "options": [
      "Là 'Cổng kiểm soát' (Project Gatekeeper) giúp ban lãnh đạo ra quyết định Go hoặc No-Go",
      "Là giai đoạn tập trung toàn bộ kỹ sư lập trình để hoàn thành 100% mã nguồn dự án",
      "Là giai đoạn triển khai lắp đặt hệ thống máy chủ mạng thực tế tại các chi nhánh",
      "Là giai đoạn giải tán ban quản lý dự án để bàn giao toàn bộ cho khách hàng tự quản"
    ],
    "answer": 0,
    "explanation": "Initiation Phase đóng vai trò cổng kiểm soát (Project Gate / Gatekeeper), thẩm định giá trị và tính khả thi để lãnh đạo quyết định có cấp ngân sách triển khai dự án hay dừng lại (Go/No-Go).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-024",
    "question": "Hoạt động nào sau đây KHÔNG THUỘC 4 hoạt động chính trong giai đoạn Khởi động dự án (Initiation Phase)?",
    "options": [
      "Viết mã nguồn các thuật toán phức tạp và triển khai thử nghiệm trên môi trường Production",
      "Xác định bài toán nghiệp vụ, cơ hội cải tiến và lập Phiếu yêu cầu hệ thống (System Request)",
      "Tiến hành nghiên cứu và đánh giá tính khả thi dự án trên 3 phương diện (Feasibility Study)",
      "Xây dựng kế hoạch sơ bộ ban đầu và hoàn thiện bản Tuyên ngôn dự án (Project Charter)"
    ],
    "answer": 0,
    "explanation": "Viết mã nguồn (Coding) và triển khai Production thuộc về giai đoạn Implementation, tuyệt đối không thuộc giai đoạn Initiation (Khởi động).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-025",
    "question": "Ba khía cạnh kinh điển cấu thành bản Đánh giá tính khả thi (Feasibility Analysis) toàn diện của một dự án là:",
    "options": [
      "Khả thi Kinh tế (Economic), Khả thi Kỹ thuật (Technical) và Khả thi Vận hành (Organizational)",
      "Khả thi Lập trình (Coding), Khả thi Kiểm thử (Testing) và Khả thi Mạng cáp quang (Hardware)",
      "Khả thi Đồ họa (Graphic), Khả thi Âm thanh (Audio) và Khả thi Giao diện người dùng (UI/UX)",
      "Khả thi Quốc gia (National), Khả thi Khu vực (Regional) và Khả thi Toàn cầu (Global)"
    ],
    "answer": 0,
    "explanation": "Nghiên cứu tính khả thi bao gồm 3 khía cạnh nền tảng: Khả thi Kinh tế (Economic Feasibility), Khả thi Kỹ thuật (Technical Feasibility) và Khả thi Tổ chức/Vận hành (Organizational/Operational Feasibility).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-026",
    "question": "Khía cạnh 'Khả thi Kỹ thuật' (Technical Feasibility) nhằm mục đích trả lời câu hỏi mấu chốt nào sau đây?",
    "options": [
      "Chúng ta có đủ năng lực công nghệ và chuyên môn kỹ thuật để xây dựng hệ thống hay không?",
      "Dự án này có mang lại lợi nhuận tài chính vượt trội hơn chi phí đầu tư ban đầu hay không?",
      "Người dùng cuối trong tổ chức có chấp nhận sử dụng và hòa nhập với phần mềm hay không?",
      "Ban giám đốc công ty có sẵn sàng chi tiền thưởng Tết cho đội ngũ lập trình hay không?"
    ],
    "answer": 0,
    "explanation": "Technical Feasibility đánh giá tính thực tế của giải pháp công nghệ: độ phức tạp, rủi ro kỹ thuật, tính tương thích và mức độ thành thạo công nghệ của đội ngũ kỹ sư.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-027",
    "question": "Trong phân tích khả thi kinh tế, các chỉ số tài chính định lượng quan trọng nào thường được BA sử dụng?",
    "options": [
      "Tỷ suất hoàn vốn đầu tư (ROI), Thời gian hoàn vốn (Payback Period) và Giá trị hiện tại ròng (NPV)",
      "Tần số xung nhịp vi xử lý CPU, Dung lượng bộ nhớ RAM và Tốc độ truyền dẫn đường truyền mạng",
      "Số lượng dòng mã lệnh viết ra mỗi ngày và số lượng hàm lập trình được tạo trong dự án",
      "Số lần nhấp chuột trung bình của người dùng trên giao diện ứng dụng web trong một tháng"
    ],
    "answer": 0,
    "explanation": "Phân tích khả thi kinh tế sử dụng phương pháp Phân tích Chi phí - Lợi ích (Cost-Benefit Analysis) với các chỉ số tài chính chuẩn tắc: ROI, Payback Period và NPV.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-028",
    "question": "Tài liệu chính thức do cấp lãnh đạo phê chuẩn để trao quyền cho Quản lý dự án sử dụng tài nguyên tổ chức là:",
    "options": [
      "Project Charter (Bản tuyên ngôn dự án / Quyết định thành lập dự án chính thức)",
      "Software Bug Report (Phiếu báo cáo sự cố phần mềm do bộ phận kiểm thử tạo ra)",
      "Daily Meeting Minutes (Biên bản cuộc họp giao ban hàng ngày của đội ngũ kỹ thuật)",
      "Employee Resignation Letter (Đơn xin thôi việc của nhân viên văn phòng dự án)"
    ],
    "answer": 0,
    "explanation": "Project Charter (Tuyên ngôn dự án) là văn bản chính thức phê duyệt dự án, xác định mục tiêu cấp cao, phạm vi sơ bộ và trao quyền hành chính thức cho Project Manager huy động nguồn lực.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-029",
    "question": "Tình huống: Phần mềm rất ưu việt nhưng các nhân viên lớn tuổi từ chối sử dụng vì sợ mất việc. Dự án đang gặp rủi ro gì?",
    "options": [
      "Thất bại về Khả thi Tổ chức và Vận hành (Organizational & Operational Feasibility)",
      "Thất bại về Khả thi Kỹ thuật phần cứng (Technical Feasibility do mạng quá chậm)",
      "Thất bại về Khả thi Bản quyền phần mềm (Legal Feasibility do vi phạm sở hữu trí tuệ)",
      "Thất bại về Khả thi Kiến trúc cơ sở dữ liệu (Database Feasibility do thiếu bộ nhớ)"
    ],
    "answer": 0,
    "explanation": "Sự phản kháng của người dùng, rào cản tâm lý, văn hóa tổ chức và mức độ chấp nhận giải pháp mới thuộc phạm trù Khả thi Tổ chức/Vận hành (Organizational/Operational Feasibility).",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-030",
    "question": "Ký hiệu chuẩn trong sơ đồ Business Use Case Diagram để phân biệt Business Actor/Worker với System Actor là gì?",
    "options": [
      "Sử dụng thêm một nét gạch chéo ('/') xuyên qua biểu tượng hình người (Stick figure)",
      "Tô màu đỏ rực rỡ toàn bộ biểu tượng hình người để gây sự chú ý đặc biệt",
      "Vẽ thêm hình tam giác bao quanh đầu của biểu tượng hình người trong sơ đồ",
      "Gạch chân hai lần dưới tên định danh của nhân sự trên bản vẽ kỹ thuật UML"
    ],
    "answer": 0,
    "explanation": "Trong chuẩn UML/RUP Business Modeling, để phân biệt Business Actor hoặc Business Worker với System Actor thông thường, người ta vẽ thêm một dấu gạch chéo ('/') xuyên qua hình người.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-031",
    "question": "Biểu đồ Hoạt động (Activity Diagram) trong UML được sử dụng với mục đích chính yếu nào sau đây?",
    "options": [
      "Mô hình hóa dòng chảy điều khiển, logic tuần tự và sự phân nhánh của quy trình nghiệp vụ",
      "Thiết kế cấu trúc các bảng dữ liệu quan hệ và khóa ngoại trong hệ quản trị cơ sở dữ liệu",
      "Biểu diễn cách sắp xếp dây cáp mạng và máy chủ vật lý bên trong phòng máy chủ trung tâm",
      "Hiển thị bảng mã màu và phông chữ đồ họa dùng cho thiết kế giao diện ứng dụng di động"
    ],
    "answer": 0,
    "explanation": "Activity Diagram là biểu đồ hành vi mô hình hóa khía cạnh động của hệ thống, thể hiện dòng chảy điều khiển (Control Flow) và tuần tự các bước trong quy trình nghiệp vụ.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-032",
    "question": "Ký hiệu hình quả trám (Diamond symbol) trong biểu đồ Activity Diagram của UML thể hiện nút nào sau đây?",
    "options": [
      "Nút Quyết định (Decision node) để rẽ nhánh điều kiện hoặc Nút Nhập dòng (Merge node)",
      "Nút Bắt đầu quy trình (Initial node) với một vòng tròn màu đen đặc hoàn toàn",
      "Nút Kết thúc quy trình (Activity Final node) với vòng tròn có tâm đen đặc bên trong",
      "Thanh phân nhánh đồng thời (Fork node) để kích hoạt nhiều luồng công việc song song"
    ],
    "answer": 0,
    "explanation": "Ký hiệu hình quả trám (Diamond) được dùng làm Nút Quyết định (Decision node) để phân nhánh theo điều kiện rẽ (Guard conditions) hoặc làm Nút Nhập dòng (Merge node).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-033",
    "question": "Khẳng định nào sau đây là SAI khi nói về thanh đồng bộ (Synchronization Bar) trong Activity Diagram?",
    "options": [
      "Thanh Fork nhận nhiều luồng đầu vào và chỉ phát ra duy nhất một luồng công việc đầu ra",
      "Thanh Fork nhận một luồng đầu vào duy nhất và tách thành hai hoặc nhiều luồng song song",
      "Thanh Join nhận nhiều luồng song song và chỉ tiếp tục khi tất cả luồng đã hoàn tất",
      "Cả Fork và Join đều được biểu diễn trực quan bằng một thanh ngang hoặc dọc đặc màu đen"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì mô tả đó là của thanh Join (Hội tụ), không phải thanh Fork (Phân nhánh). Thanh Fork nhận 1 luồng vào và phát ra nhiều luồng ra song song.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-034",
    "question": "Khái niệm 'Làn bơi' (Swimlanes / Partitions) trong sơ đồ Activity Diagram mang lại giá trị nào sau đây?",
    "options": [
      "Phân định rõ ràng trách nhiệm thực thi của từng phòng ban, cá nhân hoặc hệ thống cụ thể",
      "Giúp sơ đồ trông giống một hồ bơi thể thao chuyên nghiệp để tăng tính hấp dẫn mỹ thuật",
      "Cho phép lập trình viên tự động bỏ qua các hoạt động nằm trong làn bơi không mong muốn",
      "Dùng để tính toán lượng nước tiêu thụ của các máy tính hoạt động trong văn phòng công ty"
    ],
    "answer": 0,
    "explanation": "Swimlanes (Làn bơi trách nhiệm) chia sơ đồ thành các cột hoặc hàng tương ứng với các đối tượng/phòng ban khác nhau, làm rõ ai (Who) chịu trách nhiệm thực thi hành động nào.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-035",
    "question": "Tình huống: Sau khi khách đặt hàng, hệ thống đồng thời trừ kho VÀ gửi email xác nhận. Cần dùng ký hiệu nào?",
    "options": [
      "Thanh phân nhánh đồng thời (Fork node) để tách thành hai luồng hành động chạy song song",
      "Nút Quyết định (Decision node) để hệ thống chỉ được phép chọn duy nhất một trong hai hành động",
      "Nút Kết thúc hoạt động (Activity Final node) để dừng toàn bộ quy trình ngay lập tức",
      "Vòng lặp vô tận (Infinite Loop) để gửi email liên tục cho đến khi hòm thư khách hàng đầy"
    ],
    "answer": 0,
    "explanation": "Khi hai hoặc nhiều hành động diễn ra đồng thời (song song độc lập) sau một sự kiện, ký hiệu Fork (Thanh phân nhánh) bắt buộc phải được sử dụng.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-036",
    "question": "Hãy chọn phương án ghép cặp ĐÚNG NHẤT giữa ký hiệu trong Activity Diagram và ý nghĩa chuẩn mực của nó:",
    "options": [
      "Hình tròn đen: Bắt đầu; Quả trám: Rẽ nhánh; Thanh ngang: Đồng bộ; Hình chữ nhật bo góc: Hành động",
      "Hình tròn đen: Kết thúc; Quả trám: Bắt đầu; Thanh ngang: Rẽ nhánh; Hình chữ nhật bo góc: Luồng dữ liệu",
      "Hình tròn đen: Lỗi hệ thống; Quả trám: Cơ sở dữ liệu; Thanh ngang: Giao diện; Hình chữ nhật bo góc: Máy chủ",
      "Hình tròn đen: Hành động; Quả trám: Đồng bộ; Thanh ngang: Bắt đầu; Hình chữ nhật bo góc: Rẽ nhánh"
    ],
    "answer": 0,
    "explanation": "Ký hiệu UML chuẩn: Hình tròn đen (Initial node), Quả trám (Decision/Merge node), Thanh ngang đặc (Fork/Join node), Hình chữ nhật bo góc (Action state).",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "matching",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-037",
    "question": "[Outside] Hiện tượng khách hàng ký hợp đồng phạm vi cố định nhưng lại đòi làm việc kiểu 'Agile nửa vời' gây ra rủi ro gì?",
    "options": [
      "Đội ngũ rơi vào bẫy 'Scope Creep', liên tục thay đổi yêu cầu nhưng ngân sách và hạn chót không tăng",
      "Phần mềm sẽ tự động bị các tổ chức bảo mật quốc tế thu hồi chứng chỉ an toàn thông tin ngay lập tức",
      "Toàn bộ máy chủ đám mây của doanh nghiệp sẽ bị đình chỉ hoạt động vì vi phạm bản quyền phần mềm",
      "Lập trình viên sẽ bị cấm sử dụng các ngôn ngữ lập trình mã nguồn mở trong toàn bộ sự nghiệp sau này"
    ],
    "answer": 0,
    "explanation": "[Outside] 'Agile nửa vời' (Flaccid Agile) khi kết hợp với hợp đồng Fixed-price / Fixed-scope thường dẫn đến thảm họa: khách hàng liên tục thêm bớt yêu cầu mà không chịu ký phụ lục điều chỉnh chi phí.",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-038",
    "question": "[Outside] Khi phân tích chỉ số tài chính của dự án phần mềm, chỉ số NPV (Net Present Value) dương (> 0) có ý nghĩa gì?",
    "options": [
      "Dự án có hiệu quả tài chính sinh lời cao hơn mức chi phí cơ hội của vốn đầu tư bỏ ra",
      "Dự án chắc chắn sẽ hoàn thành sớm hơn kế hoạch ban đầu ít nhất là ba đến bốn tháng",
      "Dự án không có bất kỳ rủi ro kỹ thuật nào trong suốt toàn bộ quá trình viết mã nguồn",
      "Dự án không cần phải thuê chuyên viên phân tích nghiệp vụ BA hay chuyên gia kiểm thử"
    ],
    "answer": 0,
    "explanation": "[Outside] NPV (Giá trị hiện tại ròng) dương chứng tỏ tổng dòng tiền thu về trong tương lai (đã quy về hiện tại theo tỷ suất chiết khấu) lớn hơn tổng chi phí đầu tư ban đầu, dự án có khả thi kinh tế.",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-039",
    "question": "[Outside] Để kiểm soát hiện tượng 'Phình phạm vi' (Scope Creep) trong giai đoạn Implementation, BA bắt buộc phải áp dụng quy trình nào?",
    "options": [
      "Quy trình Quản lý Yêu cầu Thay đổi (Change Request - CR) có đánh giá tác động chi phí và tiến độ",
      "Quy trình tự động chấp nhận vô điều kiện mọi lời đề nghị của khách hàng qua tin nhắn điện thoại",
      "Quy trình từ chối tuyệt đối việc giao tiếp với khách hàng trong suốt thời gian đội ngũ thi công",
      "Quy trình bí mật sửa đổi mã nguồn vào ban đêm để ban quản lý dự án không hay biết sự thay đổi"
    ],
    "answer": 0,
    "explanation": "[Outside] Khi phát sinh yêu cầu mới ngoài phạm vi cơ sở (Baseline), quy trình Change Request (CR) bắt buộc phải được kích hoạt để phân tích tác động (Impact Analysis) đến tiến độ và ngân sách.",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c2-d1-040",
    "question": "[Outside] Trong 4 chiến lược chuyển đổi hệ thống, chiến lược 'Chuyển đổi Trực tiếp' (Direct/Cutover) có đặc trưng rủi ro gì?",
    "options": [
      "Cắt bỏ hệ thống cũ và bật hệ thống mới ngay lập tức; chi phí thấp nhất nhưng rủi ro gián đoạn cao nhất",
      "Cho hệ thống cũ và hệ thống mới chạy song song cùng lúc trong ba năm để so sánh số liệu kiểm toán",
      "Chỉ triển khai thử nghiệm trên duy nhất một chi nhánh nhỏ trước khi nhân rộng ra toàn bộ công ty",
      "Triển khai từng phân hệ nhỏ nối tiếp nhau cho đến khi thay thế hoàn toàn toàn bộ phần mềm cũ"
    ],
    "answer": 0,
    "explanation": "[Outside] Direct Conversion (Cutover / Big-bang) tắt hệ thống cũ và chuyển sang hệ thống mới ngay lập tức. Chi phí thấp nhất nhưng mức độ rủi ro cao nhất vì không có hệ thống dự phòng khi xảy ra sự cố lớn.",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "case-study",
    "examSet": 1
  }
];
