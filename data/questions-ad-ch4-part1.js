/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
   CHAPTER 4: DISCOVERY PHASE I — BASELINE, ELICITATION & USE CASE FOUNDATIONS
   BỘ ĐỀ THI SỐ 1 (PART 1) — 40 CÂU HỎI CHUẨN CỐ ĐỊNH
   CƠ CẤU: 30% DỄ (12) - 40% TRUNG BÌNH (16) - 30% KHÓ (12)
   TỶ LỆ: 36 INSIDE + 4 OUTSIDE
   MÃ CÂU HỎI: ad-c4-d1-001 ĐẾN ad-c4-d1-040
   TIÊU CHUẨN: CHỐNG ĐOÁN BỪA (DELTA L <= 15 KÝ TỰ)
   ============================================================ */

export const questionsAdCh4Part1 = [
  {
    "id": "ad-c4-d1-001",
    "question": "Trong quản trị yêu cầu phần mềm, khái niệm 'Baseline' (Mốc cơ sở) được định nghĩa chuẩn xác nhất là gì?",
    "options": [
      "Một ảnh chụp trạng thái (Snapshot) đã thống nhất dùng làm mốc tham chiếu ổn định để theo dõi",
      "Một bản hợp đồng pháp lý bắt buộc khách hàng phải thanh toán toàn bộ chi phí dự án ngay từ đầu",
      "Một tập hợp các đoạn mã nguồn lập trình đã được tối ưu hóa hiệu năng và đóng gói thành tệp exe",
      "Một sơ đồ mạng máy tính nội bộ thể hiện cách thức kết nối các máy chủ dữ liệu của doanh nghiệp"
    ],
    "answer": 0,
    "explanation": "Baseline là một ảnh chụp trạng thái (Snapshot) đã được các bên liên quan chính thức thống nhất, dùng làm mốc tham chiếu ổn định (Stable Reference) để so sánh tiến độ và kiểm soát thay đổi.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-002",
    "question": "Ba yếu tố nền tảng cốt lõi cấu thành nên hồ sơ Baseline ban đầu của một dự án phần mềm bao gồm:",
    "options": [
      "Project Scope (Phạm vi dự án), Vision (Tầm nhìn nghiệp vụ) và Initial Requirements (Tập yêu cầu)",
      "Source Code (Mã nguồn phần mềm), Test Script (Kịch bản kiểm thử) và Deployment Server (Máy chủ)",
      "Database Schema (Lược đồ dữ liệu), Network Topology (Tô-pô mạng) và Firewall Rule (Tường lửa)",
      "User Interface Design (Giao diện đồ họa), CSS Style Guide (Bảng kiểu) và HTML Template (Khuôn mẫu)"
    ],
    "answer": 0,
    "explanation": "Hồ sơ Baseline ban đầu bao gồm 3 thành tố: Project Scope (Phạm vi làm và không làm), Vision (Tầm nhìn và giá trị nghiệp vụ), và Initial Requirements (Tập yêu cầu tính năng ứng viên ban đầu).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-003",
    "question": "Khẳng định nào sau đây là SAI khi nói về mục đích và nguyên tắc quản trị Baseline trong dự án?",
    "options": [
      "Baseline là tài liệu cố định bất di bất dịch và tuyệt đối không bao giờ được phép thay đổi",
      "Baseline là công cụ then chốt giúp quản trị và ngăn chặn hiện tượng phình to phạm vi vô hạn",
      "Baseline cung cấp thước đo tiến độ đáng tin cậy để đo lường mức độ hoàn thành của phần mềm",
      "Baseline là cơ sở căn chỉnh kỳ vọng giữa khách hàng và đội ngũ phát triển trước khi thực thi"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì Baseline KHÔNG phải là đóng băng bất di bất dịch. Khi có yêu cầu thay đổi hợp lý, dự án vẫn cập nhật Baseline thông qua quy trình kiểm soát thay đổi (Change Control) chính thức.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-004",
    "question": "Khi dự án đã chính thức Set Baseline, bất kỳ sự thay đổi yêu cầu nào phát sinh bắt buộc phải thông qua cơ chế nào?",
    "options": [
      "Quy trình kiểm soát thay đổi (Change Control) và được phê duyệt bởi Change Control Board",
      "Thỏa thuận miệng riêng lẻ giữa lập trình viên chính và người đại diện của phía khách hàng",
      "Quyết định tự ý chỉnh sửa mã nguồn trực tiếp trên máy chủ sản phẩm của chuyên viên kiểm thử",
      "Tự động chấp nhận toàn bộ mà không cần phân tích chi phí, thời gian và rủi ro ảnh hưởng"
    ],
    "answer": 0,
    "explanation": "Sau khi đã chốt Baseline, mọi yêu cầu thay đổi (Change Request) đều phải trải qua quy trình Change Control chính thức, được phân tích tác động và phê duyệt bởi Hội đồng kiểm soát thay đổi (CCB).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-005",
    "question": "Tình huống: Sau khi chốt Baseline, khách hàng liên tục yêu cầu thêm tính năng mới mà không tăng ngân sách. Hiện tượng này gọi là gì?",
    "options": [
      "Scope Creep (Hiện tượng phình to phạm vi dự án một cách mất kiểm soát do thiếu Change Control)",
      "Refactoring (Quá trình tái cấu trúc mã nguồn bên trong nhằm nâng cao tính mở rộng của hệ thống)",
      "Regression Testing (Quy trình kiểm thử hồi quy tự động nhằm xác minh mã nguồn không phát sinh lỗi)",
      "Continuous Integration (Hoạt động tích hợp mã nguồn tự động diễn ra liên tục trên môi trường mây)"
    ],
    "answer": 0,
    "explanation": "Hiện tượng khách hàng liên tục đưa thêm tính năng mới vào dự án mà không điều chỉnh thời gian, ngân sách và nguồn lực được gọi là Scope Creep (Phình to phạm vi dự án).",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-006",
    "question": "Trong tiến trình phát triển Unified Process (UP), giai đoạn Discovery Phase nằm ở vị trí nào?",
    "options": [
      "Nằm ở giai đoạn chuyển tiếp then chốt từ cuối pha Inception sang đầu pha Elaboration",
      "Nằm ở giai đoạn cuối cùng của pha Transition khi sản phẩm chuẩn bị bàn giao cho khách",
      "Nằm hoàn toàn ở giữa pha Construction khi các lập trình viên đang tiến hành viết mã",
      "Nằm tách biệt bên ngoài và chỉ bắt đầu sau khi toàn bộ phần mềm đã được triển khai xong"
    ],
    "answer": 0,
    "explanation": "Discovery Phase là giai đoạn bản lề chuyển tiếp giữa cuối pha Khởi động (Inception) và đầu pha Tinh chế (Elaboration) trong Unified Process để đào sâu khám phá yêu cầu.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-007",
    "question": "Mục tiêu quan trọng hàng đầu của giai đoạn khám phá yêu cầu (Discovery Phase) là gì?",
    "options": [
      "Thấu hiểu sâu sắc miền bài toán nghiệp vụ và làm rõ chi tiết các nhu cầu tiềm ẩn của người dùng",
      "Cài đặt hoàn chỉnh hệ điều hành máy chủ và phân bổ địa chỉ IP tĩnh cho toàn bộ mạng nội bộ",
      "Viết toàn bộ mã nguồn lập trình phần mềm để chạy thử nghiệm các tính năng trên máy tính cá nhân",
      "Thiết kế chi tiết cấu trúc phần cứng của bảng vi mạch điện tử sẽ dùng cho thiết bị đầu cuối"
    ],
    "answer": 0,
    "explanation": "Mục tiêu cốt lõi của Discovery Phase là thấu hiểu sâu sắc miền bài toán (Understand the Problem Domain) và làm rõ các nhu cầu nghiệp vụ thực sự của các bên liên quan.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-008",
    "question": "Chu trình lặp 5 hoạt động cốt lõi của Discovery Phase diễn ra theo trình tự chuẩn mực nào sau đây?",
    "options": [
      "Elicit (Khơi gợi) -> Analyze (Phân tích) -> Specify (Đặc tả) -> Validate (Xác thực) -> Manage",
      "Design (Thiết kế) -> Code (Lập trình) -> Test (Kiểm thử) -> Deploy (Triển khai) -> Maintenance",
      "Planning (Lập kế hoạch) -> Modeling (Mô hình hóa) -> Estimating (Ước lượng) -> Billing -> Sign",
      "Interview (Phỏng vấn) -> Coding (Viết mã) -> Shipping (Giao hàng) -> Training (Đào tạo) -> End"
    ],
    "answer": 0,
    "explanation": "Chu trình lặp 5 hoạt động chuẩn của Discovery Phase: 1. Elicit (Khơi gợi), 2. Analyze (Phân tích), 3. Specify (Đặc tả), 4. Validate (Xác thực), 5. Manage (Quản lý).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "fill-blank",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-009",
    "question": "Trong chu trình Discovery, hoạt động 'Requirements Elicitation' (Khơi gợi yêu cầu) có bản chất là:",
    "options": [
      "Quá trình tích cực tìm kiếm, phát hiện và thu thập các nhu cầu nghiệp vụ từ nhiều nguồn khác nhau",
      "Quá trình biên dịch mã nguồn từ ngôn ngữ bậc cao sang ngôn ngữ máy để thực thi trên hệ điều hành",
      "Quá trình kiểm thử tải nhằm đánh giá khả năng chịu đựng của máy chủ khi có triệu người truy cập",
      "Quá trình sao lưu toàn bộ dữ liệu cơ sở dữ liệu lên đám mây nhằm đề phòng sự cố hỏng hóc vật lý"
    ],
    "answer": 0,
    "explanation": "Requirements Elicitation là quá trình chủ động tìm kiếm, khám phá và khơi gợi các nhu cầu tiềm ẩn của Stakeholders thông qua phỏng vấn, workshop, quan sát, khảo sát.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-010",
    "question": "Khẳng định nào sau đây là SAI khi nói về các sản phẩm bàn giao (Deliverables) của Discovery Phase?",
    "options": [
      "Sản phẩm bàn giao chính của Discovery Phase là bộ mã nguồn hoàn chỉnh đã qua biên dịch xong",
      "Sản phẩm bàn giao bao gồm Mô hình ca sử dụng (Use Case Model) đã được cập nhật hoàn chỉnh",
      "Sản phẩm bàn giao bao gồm Tập tài liệu đặc tả ca sử dụng chi tiết (Use Case Descriptions)",
      "Sản phẩm bàn giao bao gồm Tài liệu đặc tả bổ sung về yêu cầu phi chức năng (Supplementary Spec)"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì Discovery Phase tập trung vào khám phá và phân tích yêu cầu (Use Case Model, Use Case Descriptions, Supplementary Specs), chưa phải giai đoạn tạo ra mã nguồn hoàn chỉnh.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-011",
    "question": "Tình huống: Khi phân tích yêu cầu, Phòng Bán hàng muốn quy trình duyệt đơn nhanh, còn Phòng Kế toán đòi hỏi kiểm soát chặt chẽ. BA nên làm gì?",
    "options": [
      "Tổ chức buổi hội thảo hòa giải (Conflict Resolution Workshop) để phân tích tác động và tìm điểm cân bằng",
      "Lập tức chọn làm theo ý của Phòng Bán hàng và bỏ qua toàn bộ các ý kiến phản ánh từ Phòng Kế toán",
      "Lập tức chọn làm theo ý của Phòng Kế toán và từ chối hỗ trợ tiếp nhận mọi yêu cầu từ Phòng Bán hàng",
      "Hủy bỏ toàn bộ dự án phần mềm vì cho rằng hai phòng ban này có quan điểm mâu thuẫn không thể hàn gắn"
    ],
    "answer": 0,
    "explanation": "Khi có xung đột yêu cầu giữa các bên liên quan, vai trò của BA là tổ chức hội thảo giải quyết xung đột (Conflict Resolution Workshop), phân tích trade-off và tìm giải pháp hài hòa đáp ứng mục tiêu chung của tổ chức.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-012",
    "question": "Bản chất cốt lõi của phân tích hành vi (Behavioral Analysis) trong kỹ nghệ yêu cầu là gì?",
    "options": [
      "Mô tả hệ thống làm CÁI GÌ (WHAT the system does) từ góc nhìn quan sát bên ngoài của người sử dụng",
      "Mô tả hệ thống được lập trình NHƯ THẾ NÀO (HOW it is built) ở mức cấu trúc mã nguồn bên trong",
      "Mô tả chi tiết cấu trúc các bảng dữ liệu quan hệ và các khóa ngoại liên kết trong hệ quản trị",
      "Mô tả cách thức tối ưu hóa bộ nhớ đệm RAM và tần số xung nhịp của bộ vi xử lý trên bo mạch chủ"
    ],
    "answer": 0,
    "explanation": "Behavioral Analysis tập trung vào góc nhìn Black-box: mô tả hệ thống làm CÁI GÌ (WHAT) để phục vụ người dùng, hoàn toàn độc lập với chi tiết cài đặt kỹ thuật bên trong (HOW).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-013",
    "question": "Điểm khác biệt căn bản nhất giữa Phân tích hành vi (Behavioral) và Phân tích cấu trúc (Structural) là:",
    "options": [
      "Behavioral xem hệ thống là Hộp đen (Black-box); Structural phân tích các thực thể bên trong (White-box)",
      "Behavioral dùng cho lập trình hướng đối tượng; còn Structural chỉ áp dụng cho lập trình thủ tục cũ",
      "Behavioral chỉ tạo ra mã nguồn phần cứng; còn Structural chỉ tập trung xây dựng cơ sở dữ liệu đám mây",
      "Behavioral không cần sự tham gia của con người; còn Structural yêu cầu toàn bộ khách hàng phải viết mã"
    ],
    "answer": 0,
    "explanation": "Behavioral Analysis nhìn hệ thống dưới dạng Black-box (hành vi bên ngoài, tương tác với Actor). Structural Analysis nhìn dưới dạng White-box (cấu trúc bên trong, Classes, Objects, Relationships).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-014",
    "question": "Bốn thành phần ký hiệu trực quan chuẩn mực cấu thành nên một Biểu đồ Ca sử dụng (Use Case Diagram) là:",
    "options": [
      "Actor (Tác nhân), Use Case (Ca sử dụng), Association (Đường liên kết) và System Boundary (Ranh giới)",
      "Entity (Thực thể), Attribute (Thuộc tính), Relationship (Mối quan hệ) và Primary Key (Khóa chính)",
      "Class (Lớp), Method (Phương thức), Property (Thuộc tính) và Constructor (Hàm khởi tạo đối tượng)",
      "State (Trạng thái), Transition (Chuyển trạng thái), Event (Sự kiện) và Guard Condition (Điều kiện)"
    ],
    "answer": 0,
    "explanation": "Bốn thành phần chuẩn UML của Use Case Diagram gồm: Actor (người/hệ thống ngoài), Use Case (hình elip), Association (đường nối) và System Boundary (khung chữ nhật xác định phạm vi hệ thống).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-015",
    "question": "Khẳng định nào sau đây là SAI khi nói về các quy tắc biểu diễn ký hiệu trong Use Case Diagram?",
    "options": [
      "Actor đại diện cho một con người cụ thể bằng xương bằng thịt có họ và tên đầy đủ trong công ty",
      "Tên của Use Case bắt buộc phải bắt đầu bằng một Động từ hành động kết hợp với một Cụm danh từ",
      "System Boundary phân định rõ ràng những gì nằm trong hệ thống và những tác nhân nằm bên ngoài",
      "Đường liên kết Association thể hiện mối quan hệ giao tiếp hai chiều giữa Actor và Use Case tương ứng"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì Actor trong UML đại diện cho VAI TRÒ (Role) mà người hoặc hệ thống ngoài đảm nhận khi tương tác với hệ thống, KHÔNG đại diện cho một cá nhân cụ thể.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-016",
    "question": "Tại sao Biểu đồ Ca sử dụng (Use Case Diagram) lại được ví như 'Mục lục' (Table of Contents) của tài liệu yêu cầu?",
    "options": [
      "Vì nó cung cấp cái nhìn tổng quan toàn cảnh về phạm vi chức năng mà không đi sâu vào chi tiết bước thực hiện",
      "Vì nó liệt kê số trang giấy chính xác của từng chương tài liệu để người đọc dễ tra cứu mục lục",
      "Vì nó chứa đựng toàn bộ các câu lệnh mã nguồn lập trình và các hàm thuật toán xử lý dữ liệu phức tạp",
      "Vì nó tự động tạo ra một cuốn sách giáo khoa hoàn chỉnh giúp sinh viên vượt qua kỳ thi tốt nghiệp đại học"
    ],
    "answer": 0,
    "explanation": "Use Case Diagram đóng vai trò như Mục lục (Table of Contents): cung cấp bức tranh toàn cảnh cấp cao (WHAT) về mọi dịch vụ mà hệ thống cung cấp mà không làm rối mắt người đọc bằng chi tiết kịch bản.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-017",
    "question": "Hãy chọn phương án GHÉP CẶP CHÍNH XÁC giữa thành phần Use Case Diagram và ý nghĩa ngữ nghĩa chuẩn mực của nó:",
    "options": [
      "1-Actor: Vai trò bên ngoài; 2-Use Case: Mục tiêu nghiệp vụ; 3-System Boundary: Ranh giới phạm vi phần mềm",
      "1-Actor: Cơ sở dữ liệu; 2-Use Case: Bảng tính toán; 3-System Boundary: Tường lửa bảo vệ máy chủ đám mây",
      "1-Actor: Dòng lệnh mã nguồn; 2-Use Case: Biến số cục bộ; 3-System Boundary: Thư mục chứa tệp tin dự án",
      "1-Actor: Màn hình cảm ứng; 2-Use Case: Bàn phím máy tính; 3-System Boundary: Dây cáp kết nối mạng diện rộng"
    ],
    "answer": 0,
    "explanation": "Ghép cặp chuẩn xác: 1-Actor: Vai trò tương tác bên ngoài; 2-Use Case: Mục tiêu nghiệp vụ mang lại giá trị quan sát được; 3-System Boundary: Khung ranh giới phân định phạm vi phần mềm.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "matching",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-018",
    "question": "Theo chuẩn Alistair Cockburn và Unified Process, có 3 cấp độ mô tả Use Case Description lần lượt là:",
    "options": [
      "Brief (Tóm tắt ngắn gọn), Casual (Không chính thức dạng văn xuôi) và Fully-Dressed (Hoàn chỉnh chi tiết)",
      "Simple (Đơn giản mức 1), Complex (Phức tạp mức 2) và Overloaded (Quá tải mức 3 không thể biên dịch)",
      "Draft (Bản nháp ban đầu), Final (Bản cuối hoàn tất) và Archived (Bản lưu trữ hồ sơ đã bị tiêu hủy)",
      "Internal (Nội bộ nhóm code), External (Cho đối tác xem) và Public (Công khai cho toàn bộ xã hội đọc)"
    ],
    "answer": 0,
    "explanation": "Ba cấp độ mô tả Use Case chuẩn mực gồm: Brief (Tóm tắt 1 đoạn văn ngắn), Casual (Vài đoạn văn tự do bao quát các kịch bản), Fully-Dressed (Cấu trúc khuôn mẫu 9-10 trường chi tiết nhất).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-019",
    "question": "Đặc điểm nổi bật nhất của cấp độ mô tả ca sử dụng dạng 'Brief Description' là gì?",
    "options": [
      "Một đoạn văn ngắn từ hai đến ba câu tóm tắt tác nhân chính, mục tiêu nghiệp vụ và luồng sự kiện chủ đạo",
      "Một cuốn sách hướng dẫn dày hàng trăm trang chứa đầy đủ chi tiết mã nguồn và hình ảnh chụp màn hình",
      "Một bảng mã nhị phân chứa các số không và một được nạp trực tiếp vào thanh ghi của bộ xử lý máy tính",
      "Một hợp đồng pháp lý có công chứng xác nhận quyền sở hữu trí tuệ của nhóm lập trình viên phần mềm"
    ],
    "answer": 0,
    "explanation": "Brief Description là bản tóm tắt súc tích (1 đoạn văn ngắn 2-3 câu), phác thảo rõ Actor chính, mục tiêu của ca sử dụng và luồng tương tác cốt lõi trong giai đoạn đầu dự án.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-020",
    "question": "Trong khuôn mẫu mô tả Fully-Dressed, trường 'Preconditions' (Điều kiện tiên quyết) có ý nghĩa như thế nào?",
    "options": [
      "Xác định các điều kiện trạng thái bắt buộc hệ thống phải bảo đảm luôn ĐÚNG trước khi Use Case bắt đầu",
      "Xác định các điều kiện trạng thái hệ thống phải cam kết hoàn thành sau khi Use Case kết thúc thành công",
      "Xác định tên họ đầy đủ của người lập trình viên chịu trách nhiệm viết mã nguồn cho ca sử dụng này",
      "Xác định tổng số tiền kinh phí mà khách hàng phải chi trả thêm nếu ca sử dụng phát sinh lỗi kỹ thuật"
    ],
    "answer": 0,
    "explanation": "Preconditions (Điều kiện tiên quyết) nêu rõ những điều kiện bắt buộc phải thỏa mãn trước khi Use Case có thể được kích hoạt (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-021",
    "question": "Trường 'Postconditions' (hay Success Guarantees) trong tài liệu đặc tả ca sử dụng cam kết điều gì?",
    "options": [
      "Trạng thái dữ liệu và thế giới thực mà hệ thống bảo đảm đạt được sau khi ca sử dụng kết thúc thành công",
      "Thời gian bảo hành miễn phí của nhà phát triển phần mềm trong vòng mười hai tháng sau khi triển khai",
      "Số lượng bản ghi dữ liệu tối đa mà người dùng được phép xóa bỏ khỏi cơ sở dữ liệu mà không bị phạt",
      "Mức độ bồi thường thiệt hại tài chính nếu hệ thống máy chủ bị sét đánh gây mất kết nối mạng Internet"
    ],
    "answer": 0,
    "explanation": "Postconditions (Điều kiện sau thành công) xác định trạng thái ổn định của hệ thống sau khi Use Case hoàn thành (ví dụ: Đơn hàng đã tạo, tiền đã trừ, email xác nhận đã gửi).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-022",
    "question": "Khẳng định nào sau đây là SAI khi nói về cấu trúc Luồng sự kiện chính (Main Flow) và Luồng thay thế (Alternative Flow)?",
    "options": [
      "Luồng sự kiện chính (Main Flow) luôn luôn bao gồm cả các kịch bản người dùng nhập sai mật khẩu và hủy đơn",
      "Luồng sự kiện chính (Main Flow hay Happy Path) mô tả kịch bản lý tưởng nhất khi mọi việc diễn ra suôn sẻ",
      "Luồng thay thế (Alternative Flow) mô tả các nhánh rẽ nghiệp vụ hợp lệ khác để đi đến mục tiêu hoàn thành",
      "Luồng ngoại lệ (Exception Flow) xử lý các tình huống lỗi phát sinh khiến ca sử dụng không thể về đích"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì Main Flow (Happy Path) chỉ mô tả kịch bản lý tưởng nhất khi không có bất kỳ sai sót nào. Các tình huống người dùng nhập sai thông tin hay hủy giao dịch thuộc về Alternative/Exception Flows.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-023",
    "question": "Tại sao trong kỹ nghệ yêu cầu, BA nên áp dụng nguyên tắc tách rời Quy tắc nghiệp vụ (Business Rules Decoupling)?",
    "options": [
      "Giúp kịch bản Use Case gọn gàng, độc lập với các quy tắc nghiệp vụ thường xuyên thay đổi theo chính sách",
      "Giúp hệ thống tự động tăng tốc độ xử lý của chip nhớ máy chủ lên gấp mười lần mà không cần nâng cấp",
      "Giúp loại bỏ hoàn toàn trách nhiệm giải trình của giám đốc dự án khi phần mềm bị trễ hạn bàn giao",
      "Giúp khách hàng không cần phải kiểm thử lại các chức năng trước khi đưa phần mềm vào vận hành thực tế"
    ],
    "answer": 0,
    "explanation": "Tách rời Quy tắc nghiệp vụ (Business Rules Decoupling) giúp Use Case tập trung vào luồng tương tác thuần túy, tránh bị phình to và dễ bảo trì khi chính sách công ty (như biểu phí, công thức giảm giá) thay đổi.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-024",
    "question": "Tình huống: Khi viết đặc tả ca sử dụng 'Place Order', ngân hàng từ chối thanh toán thẻ tín dụng do hết hạn mức. Tình huống này nên xử lý ở đâu?",
    "options": [
      "Xây dựng thành một Luồng ngoại lệ (Exception Flow) thông báo lỗi cụ thể và cho phép người dùng đổi thẻ khác",
      "Lập tức ghi đè vào bước số một của Luồng chính (Main Flow) và ép buộc người dùng khởi động lại máy tính",
      "Bỏ qua lỗi này và coi như giao dịch đã thanh toán thành công để tiếp tục xuất kho gửi hàng cho người mua",
      "Tự động xóa vĩnh viễn tài khoản của khách hàng khỏi hệ thống và đưa vào danh sách đen của cảnh sát mạng"
    ],
    "answer": 0,
    "explanation": "Thẻ tín dụng bị từ chối là tình huống lỗi không thể hoàn tất mục tiêu chính theo Happy Path, do đó phải được ghi nhận và xử lý trong Exception Flow (Luồng ngoại lệ).",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-025",
    "question": "Trong bài toán Hệ thống Quản lý Thư viện (Library System), hai Tác nhân (Actors) chính thường tương tác với hệ thống là:",
    "options": [
      "Patron (Độc giả mượn sách) và Librarian (Thủ thư quản lý kho sách và cấp phát tài liệu cho người dùng)",
      "Database Administrator (Quản trị viên dữ liệu) và Network Engineer (Kỹ sư quản lý đường truyền mạng)",
      "Author (Tác giả viết sách) và Publisher (Nhà xuất bản in ấn sách giấy thương mại trên thị trường)",
      "Security Guard (Bảo vệ trông xe) và Janitor (Nhân viên tạp vụ chịu trách nhiệm dọn dẹp vệ sinh phòng)"
    ],
    "answer": 0,
    "explanation": "Trong bài tập phân tích Thư viện chuẩn mực, hai tác nhân người dùng chính là Patron (Độc giả sử dụng dịch vụ) và Librarian (Thủ thư quản lý nghiệp vụ và tài liệu).",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-026",
    "question": "Điều kiện tiên quyết (Precondition) mang tính cốt lõi của Ca sử dụng 'Reserve Book' (Đặt giữ sách trước) là gì?",
    "options": [
      "Độc giả đã đăng nhập thành công và cuốn sách mong muốn hiện tại ĐÃ ĐƯỢC MƯỢN HẾT bởi người khác",
      "Độc giả phải đến tận quầy thủ thư và nộp khoản tiền mặt tương đương giá trị bán lẻ của cuốn sách đó",
      "Cuốn sách phải đang còn sẵn ít nhất một trăm bản in trên giá sách để độc giả tùy ý lựa chọn mang về",
      "Độc giả phải là giảng viên đại học có học hàm tiến sĩ trở lên và có thẻ công tác tại cơ quan bộ ngành"
    ],
    "answer": 0,
    "explanation": "Ca sử dụng 'Reserve Book' (Đặt trước) chỉ có ý nghĩa khi sách không còn sẵn trên kệ (tất cả các bản sao đều đã bị mượn hết bởi độc giả khác).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-027",
    "question": "Khẳng định nào sau đây là SAI khi phân tích ca sử dụng 'Reserve Book' trong Hệ thống Quản lý Thư viện?",
    "options": [
      "Độc giả có thể thực hiện đặt giữ trước (Reserve Book) ngay cả khi cuốn sách đang có sẵn trên giá thư viện",
      "Hệ thống sẽ thêm độc giả vào danh sách chờ (Waitlist) theo nguyên tắc thứ tự ưu tiên ai đến trước được trước",
      "Khi cuốn sách được độc giả khác mang trả, hệ thống sẽ tự động gửi thông báo nhận sách tới độc giả đặt trước",
      "Nếu độc giả không đến nhận sách trong thời hạn quy định, quyền ưu tiên mượn sách sẽ chuyển cho người kế tiếp"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì sách có sẵn trên kệ thì độc giả mượn trực tiếp (Borrow Book), không ai cho phép Reserve Book khi sách đang rảnh rỗi trên giá.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-028",
    "question": "Tình huống: Khi độc giả thực hiện 'Reserve Book', hệ thống phát hiện độc giả này đã có 3 yêu cầu đặt trước đang chờ (đạt giới hạn tối đa). Hệ thống nên xử lý thế nào?",
    "options": [
      "Kích hoạt Luồng ngoại lệ thông báo từ chối đặt trước do đã đạt hạn mức tối đa theo quy định của thư viện",
      "Tự động xóa bỏ ngẫu nhiên một cuốn sách độc giả đã mượn tuần trước để dành chỗ cho yêu cầu đặt trước mới",
      "Lập tức khóa vĩnh viễn thẻ thư viện của độc giả và phát còi báo động khẩn cấp tại phòng đọc thư viện",
      "Bỏ qua quy định giới hạn và cho phép độc giả đặt trước vô hạn số lượng sách để nâng cao trải nghiệm vui vẻ"
    ],
    "answer": 0,
    "explanation": "Vi phạm quy tắc nghiệp vụ về giới hạn số lượng đặt trước là một kịch bản ngoại lệ (Exception Flow): hệ thống từ chối yêu cầu, giải thích lý do rõ ràng và giữ nguyên trạng thái dữ liệu an toàn.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-029",
    "question": "Tình huống: Một BA mới vào nghề vẽ các Use Case trong hệ thống Thư viện gồm: 'Click nút Search', 'Nhập từ khóa', 'Hiện kết quả'. Lỗi thiết kế này là gì?",
    "options": [
      "Lỗi phân rã chức năng quá chi tiết theo giao diện đồ họa (UI Pollution & Functional Decomposition)",
      "Lỗi thiết kế hệ thống theo mô hình lập trình hướng khía cạnh (Aspect-Oriented Programming Bug)",
      "Lỗi cấu hình sai xung nhịp vi xử lý máy chủ khi biên dịch mã nguồn trên môi trường thực tế",
      "Lỗi không cài đặt chứng chỉ bảo mật số SSL cho tên miền của cổng thông tin thư viện điện tử"
    ],
    "answer": 0,
    "explanation": "Việc biến từng thao tác bấm nút, nhập liệu giao diện thành Use Case là sai lầm kinh điển UI Pollution và Functional Decomposition. Cần gom lại thành 1 Use Case trọn vẹn mang lại giá trị: 'Search Catalog'.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-030",
    "question": "Trong sơ đồ Use Case, quan hệ `<<include>>` thể hiện bản chất ngữ nghĩa nào sau đây?",
    "options": [
      "Hành vi của Use Case được bao gồm là BẮT BUỘC thực thi trong mọi lần chạy của Base Use Case",
      "Hành vi của Use Case được bao gồm chỉ là tùy chọn và chỉ chạy khi có sự kiện bất thường xảy ra",
      "Quan hệ kế thừa tính đa hình giữa hai lớp đối tượng lập trình có cùng phương thức khởi tạo",
      "Đường truyền dữ liệu vật lý nối giữa hai máy chủ dịch vụ đặt tại hai quốc gia khác nhau trên thế giới"
    ],
    "answer": 0,
    "explanation": "Quan hệ `<<include>>` biểu thị hành vi dùng chung BẮT BUỘC: Base Use Case bắt buộc phải gọi và thực thi Included Use Case để hoàn thành mục tiêu của mình.",
    "difficulty": "easy",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-031",
    "question": "Điểm khác biệt cốt lõi nhất của quan hệ `<<extend>>` so với quan hệ `<<include>>` là gì?",
    "options": [
      "`<<extend>>` là hành vi TÙY CHỌN có điều kiện; Base Use Case hoàn toàn KHÔNG biết về Extension Case",
      "`<<extend>>` là hành vi bắt buộc thực hiện trong một trăm phần trăm các lần giao dịch của người dùng",
      "`<<extend>>` yêu cầu mũi tên nét đứt phải trỏ từ Base Use Case hướng sang phía Extension Use Case",
      "`<<extend>>` chỉ áp dụng được cho các hệ thống phần mềm nhúng điều khiển thiết bị phần cứng điện tử"
    ],
    "answer": 0,
    "explanation": "Trong `<<extend>>`, hành vi mở rộng là TÙY CHỌN (Optional/Conditional) tại Extension Point, và Base Use Case hoàn toàn độc lập, không hề biết về sự tồn tại của Extension Case.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-032",
    "question": "Khẳng định nào sau đây là SAI khi nói về quy tắc vẽ hướng mũi tên trong biểu đồ Use Case UML?",
    "options": [
      "Trong quan hệ `<<extend>>`, mũi tên nét đứt có nhãn trỏ từ Base Use Case sang Extension Use Case",
      "Trong quan hệ `<<include>>`, mũi tên nét đứt có nhãn trỏ từ Base Use Case sang Included Use Case",
      "Trong quan hệ Generalization giữa hai Actor, mũi tên hình tam giác rỗng trỏ về phía Actor cha tổng quát",
      "Đường liên kết Association giữa Actor và Use Case thông thường là đường thẳng liền nét không có mũi tên"
    ],
    "answer": 0,
    "explanation": "Khẳng định A SAI vì trong `<<extend>>`, mũi tên nét đứt bắt buộc phải trỏ từ Extension Use Case VỀ PHÍA Base Use Case (vì chính Extension Case mới biết điểm mở rộng của Base Case).",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "choose-wrong",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-033",
    "question": "Tình huống: Tính năng 'Apply Discount Coupon' chỉ kích hoạt khi khách hàng có mã giảm giá hợp lệ trong quá trình 'Checkout'. Nên thiết kế quan hệ nào?",
    "options": [
      "Quan hệ `<<extend>>` từ 'Apply Discount Coupon' trỏ về 'Checkout' kèm theo một Extension Point được định danh",
      "Quan hệ `<<include>>` bắt buộc toàn bộ mọi khách hàng vào mua sắm đều phải nhập mã giảm giá thì mới cho mua",
      "Quan hệ Kế thừa đa mức giữa lớp khách hàng VIP và lớp khách hàng vãng lai trong sơ đồ cơ sở dữ liệu",
      "Vẽ hai Use Case này nằm hoàn toàn tách rời nhau và không có bất kỳ mối liên hệ nào trong toàn bộ hệ thống"
    ],
    "answer": 0,
    "explanation": "Áp dụng mã giảm giá là hành vi tùy chọn, có điều kiện (chỉ chạy khi khách có mã và nhập hợp lệ), do đó chuẩn xác nhất là dùng quan hệ `<<extend>>` trỏ về Base Case 'Checkout' tại Extension Point tương ứng.",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-034",
    "question": "Trong các dự án phần mềm doanh nghiệp quy mô lớn, kỹ thuật đóng gói Use Case bằng Packages mang lại lợi ích gì?",
    "options": [
      "Gom nhóm các ca sử dụng có liên quan theo phân hệ nghiệp vụ, giúp quản lý kiến trúc và phân chia đội ngũ",
      "Tự động nén toàn bộ mã nguồn của dự án thành định dạng zip giúp tiết kiệm dung lượng đĩa cứng máy chủ",
      "Ngăn cản hoàn toàn việc kiểm thử phần mềm của bên thứ ba nhằm giữ bí mật tuyệt đối công nghệ dự án",
      "Tăng gấp đôi tốc độ tải trang web của người dùng cuối mà không cần tối ưu hóa các câu truy vấn cơ sở dữ liệu"
    ],
    "answer": 0,
    "explanation": "Packages trong Use Case Model giúp cấu trúc hóa hệ thống lớn thành các phân hệ nghiệp vụ mạch lạc (Subsystems), hỗ trợ quản lý phạm vi và phân bổ công việc cho nhiều nhóm phát triển độc lập.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-035",
    "question": "Dấu hiệu rõ ràng nhất để nhận diện một mô hình Use Case đã bị rơi vào cạm bẫy 'Functional Decomposition' là gì?",
    "options": [
      "Sơ đồ xuất hiện hàng chục Use Case nhỏ li ti mô tả từng thao tác nhập liệu hoặc các bước trong một hàm",
      "Sơ đồ chỉ có đúng một Actor duy nhất và không có bất kỳ đường liên kết nào nối với các ca sử dụng",
      "Sơ đồ sử dụng màu sắc quá rực rỡ khiến người xem bị chói mắt và không thể đọc được nội dung chữ bên trong",
      "Sơ đồ được vẽ trên giấy A4 trắng thay vì được xuất bản từ các phần mềm vẽ biểu đồ chuyên nghiệp của hãng"
    ],
    "answer": 0,
    "explanation": "Functional Decomposition (Phân rã chức năng con) biểu hiện qua việc xé nhỏ quy trình thành hàng loạt Use Case vụn vặt (như 'Nhập tên', 'Check tuổi', 'Bấm Save'), biến Use Case thành lưu đồ thuật toán.",
    "difficulty": "medium",
    "type": "inside",
    "questionType": "single-correct",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-036",
    "question": "Hãy chọn phương án GHÉP CẶP CHÍNH XÁC giữa 4 sai lầm kinh điển và biểu hiện thực tế tương ứng trong phân tích Use Case:",
    "options": [
      "1-UI Pollution: Ghi chi tiết nút bấm; 2-Data Flow: Vẽ đường truyền dữ liệu; 3-Wrong Arrow: Lộn chiều mũi tên",
      "1-UI Pollution: Vẽ sai màu sắc; 2-Data Flow: Quên mật khẩu; 3-Wrong Arrow: Dùng chuột hỏng khi vẽ sơ đồ",
      "1-UI Pollution: Mất kết nối wifi; 2-Data Flow: Hỏng ổ cứng; 3-Wrong Arrow: Không cài đặt trình duyệt web",
      "1-UI Pollution: Hết bộ nhớ đệm; 2-Data Flow: Sai địa chỉ email; 3-Wrong Arrow: Quên lưu tệp tin ra đĩa mềm"
    ],
    "answer": 0,
    "explanation": "Ghép cặp chuẩn mực: 1-UI Pollution (Ghi rõ chi tiết nút bấm, textbox trên giao diện); 2-Data Flow trap (Nhầm Use Case với luồng truyền dữ liệu DFD); 3-Wrong Arrow (Lộn ngược chiều mũi tên `<<include>>`/`<<extend>>`).",
    "difficulty": "hard",
    "type": "inside",
    "questionType": "matching",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-037",
    "question": "[Outside] Trong quy trình Agile / Scrum hiện đại, hồ sơ Baseline ban đầu đóng vai trò kết nối như thế nào với Product Backlog?",
    "options": [
      "Baseline đóng vai trò làm khung tầm nhìn và phạm vi cấp cao, từ đó tinh chế thành các Epics và User Stories",
      "Baseline thay thế hoàn toàn Product Backlog và cấm Product Owner không được thay đổi thứ tự ưu tiên các thẻ",
      "Baseline là danh sách các lỗi bảo mật phát hiện được sau mỗi chu kỳ Sprint bàn giao phần mềm cho khách hàng",
      "Baseline chỉ dùng để lưu trữ hồ sơ bảng lương của các lập trình viên tham gia vào dự án phát triển phần mềm"
    ],
    "answer": 0,
    "explanation": "[Outside] Trong môi trường Agile/Scrum hiện đại, Baseline của Inception định hình phạm vi cấp cao và tầm nhìn sản phẩm, làm nền tảng để Product Owner phân rã thành Epics và User Stories có thể ước lượng được.",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-038",
    "question": "[Outside] Khi ứng dụng công cụ Generative AI hỗ trợ hoạt động Elicitation, vai trò quan trọng nhất mà BA cần kiểm soát là:",
    "options": [
      "Thẩm định tính xác thực của yêu cầu, đối chiếu với bối cảnh nghiệp vụ thực tế và ngăn ngừa bẫy ảo giác của AI",
      "Để cho công cụ AI tự động ký duyệt biên bản nghiệm thu hợp đồng với khách hàng mà không cần đọc lại nội dung",
      "Ủy quyền cho AI trực tiếp gọi điện thoại thương thảo chi phí và hạn chót bàn giao dự án với ban giám đốc",
      "Tắt hoàn toàn các công cụ tường lửa của doanh nghiệp để phần mềm AI có thể tự do quét toàn bộ dữ liệu nội bộ"
    ],
    "answer": 0,
    "explanation": "[Outside] Khi dùng AI khơi gợi yêu cầu, BA giữ vai trò 'Human-in-the-loop' cốt lõi: kiểm tra chéo độ chính xác, tính khả thi nghiệp vụ và loại bỏ ảo giác (Hallucinations) mà mô hình ngôn ngữ lớn có thể sinh ra.",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-039",
    "question": "[Outside] Trong kiến trúc Vi dịch vụ (Microservices), khi phân rã một Use Case lớn xuyên suốt nhiều dịch vụ độc lập, kiến trúc sư nên:",
    "options": [
      "Áp dụng mẫu Saga Pattern hoặc Event-Driven Architecture để điều phối các giao dịch phân tán giữa các dịch vụ",
      "Gom tất cả các bảng dữ liệu của mọi dịch vụ vào chung một cơ sở dữ liệu quan hệ duy nhất đặt trên máy chủ cũ",
      "Buộc tất cả các dịch vụ phải gọi đồng bộ lẫn nhau qua giao thức HTTP liên tục cho đến khi máy chủ bị treo",
      "Xóa bỏ hoàn toàn khái niệm Use Case và yêu cầu lập trình viên tự viết mã theo ý thích cá nhân mà không cần tài liệu"
    ],
    "answer": 0,
    "explanation": "[Outside] Khi một Use Case nghiệp vụ (như Place Order) tương tác qua nhiều Microservices (Inventory, Payment, Shipping), kiến trúc sư cần dùng Saga Pattern hoặc Event-Driven Architecture để bảo đảm tính nhất quán sau cùng (Eventual Consistency).",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "case-study",
    "examSet": 1
  },
  {
    "id": "ad-c4-d1-040",
    "question": "[Outside] Khái niệm 'Bounded Context' trong Thiết kế hướng miền (Domain-Driven Design - DDD) tương đồng với khái niệm nào trong Use Case Model?",
    "options": [
      "Ranh giới hệ thống phân hệ (Subsystem / System Boundary) định nghĩa ngữ nghĩa nghiệp vụ nhất quán của các thực thể",
      "Một dòng lệnh điều kiện IF ELSE đơn giản dùng để kiểm tra tính hợp lệ của mật khẩu người dùng khi đăng nhập",
      "Một thanh vi mạch bán dẫn lưu trữ tạm thời các khối dữ liệu hình ảnh trước khi hiển thị lên màn hình máy tính",
      "Một quy trình kiểm toán tài chính hàng năm của các chuyên viên kiểm toán độc lập đối với các công ty cổ phần"
    ],
    "answer": 0,
    "explanation": "[Outside] Bounded Context trong DDD đóng vai trò thiết lập ranh giới tường minh mà bên trong đó mô hình nghiệp vụ có ý nghĩa nhất quán, tương đương với việc thiết lập System / Subsystem Boundary trong phân tích Use Case.",
    "difficulty": "hard",
    "type": "outside",
    "questionType": "case-study",
    "examSet": 1
  }
];
