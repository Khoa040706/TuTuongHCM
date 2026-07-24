import fs from "fs";

// 40 questions for Fixed Exam Set 2 (Đại hội VI - 12/1986)
// 36 Inside (7 Easy, 18 Medium, 11 Hard) + 4 Outside
const questions = [
  // 1-7: Easy (7 questions)
  {
    id: "lsd-dh6-d2-001",
    examSet: 2,
    sectionId: "dh-6-grp-1",
    subsectionId: "dh-6-sec-1",
    question: "Số lượng đảng viên cả nước mà Đại hội VI (12/1986) đại diện là bao nhiêu?",
    options: [
      "Đại hội đại diện cho khoảng hơn 1,9 triệu đảng viên cả nước.",
      "Đại hội đại diện cho khoảng hơn 1,7 triệu đảng viên cả nước.",
      "Đại hội đại diện cho khoảng hơn 1,5 triệu đảng viên cả nước.",
      "Đại hội đại diện cho khoảng hơn 50 vạn đảng viên trong nước."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VI đại diện cho hơn 1,9 triệu đảng viên trong cả nước."
  },
  {
    id: "lsd-dh6-d2-002",
    examSet: 2,
    sectionId: "dh-6-grp-1",
    subsectionId: "dh-6-sec-1",
    question: "Chức danh lãnh đạo cao nhất của Đảng được bầu cho đồng chí Nguyễn Văn Linh tại ĐH VI là gì?",
    options: [
      "Đồng chí được bầu giữ chức vụ Tổng Bí thư Ban Chấp hành Trung.",
      "Đồng chí được bầu giữ chức vụ Bí thư Thứ nhất Ban Chấp hành.",
      "Đồng chí được bầu giữ chức vụ Chủ tịch Ban Chấp hành Trung.",
      "Đồng chí được bầu giữ chức vụ Trưởng ban Kiểm tra Trung ương."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VI bầu đồng chí Nguyễn Văn Linh làm Tổng Bí thư."
  },
  {
    id: "lsd-dh6-d2-003",
    examSet: 2,
    sectionId: "dh-6-grp-1",
    subsectionId: "dh-6-sec-1",
    question: "Một trong ba Chương trình kinh tế lớn được Đại hội VI (12/1986) đề ra là gì?",
    options: [
      "Chương trình sản xuất lương thực và thực phẩm cho xã hội.",
      "Chương trình tập trung sản xuất hàng hóa công nghiệp nặng.",
      "Chương trình mở rộng khai thác các khoáng sản thô kim loại.",
      "Chương trình phát triển ngành du lịch và kinh tế nghỉ dưỡng."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "3 Chương trình kinh tế lớn: Lương thực - thực phẩm, Hàng tiêu dùng và Hàng xuất khẩu."
  },
  {
    id: "lsd-dh6-d2-004",
    examSet: 2,
    sectionId: "dh-6-grp-1",
    subsectionId: "dh-6-sec-1",
    question: "Tên thành phần kinh tế được Đại hội VI thừa nhận vai trò chủ đạo là gì?",
    options: [
      "Thành phần kinh tế quốc doanh do Nhà nước trực tiếp quản lý.",
      "Thành phần kinh tế tư bản tư nhân của các tập đoàn trong.",
      "Thành phần kinh tế cá thể tiểu chủ ở các khu vực nông thôn.",
      "Thành phần kinh tế tư bản nước ngoài đầu tư trực tiếp vào."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VI xác định kinh tế quốc doanh giữ vai trò chủ đạo."
  },
  {
    id: "lsd-dh6-d2-005",
    examSet: 2,
    sectionId: "dh-6-grp-1",
    subsectionId: "dh-6-sec-1",
    question: "Đại hội VI (12/1986) họp tại Thủ đô Hà Nội đại diện cho bao nhiêu đại biểu chính thức?",
    options: [
      "Đại hội có 1.129 đại biểu chính thức tham dự cuộc họp.",
      "Đại hội có 1.033 đại biểu chính thức tham dự cuộc họp.",
      "Đại hội có 1.008 đại biểu chính thức tham dự cuộc họp.",
      "Đại hội có 525 đại biểu chính thức tham dự cuộc họp."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VI có 1.129 đại biểu chính thức."
  },
  {
    id: "lsd-dh6-d2-006",
    examSet: 2,
    sectionId: "dh-6-grp-1",
    subsectionId: "dh-6-sec-1",
    question: "Tên chương trình thứ hai trong 3 Chương trình kinh tế lớn được Đại hội VI đề ra là gì?",
    options: [
      "Chương trình sản xuất hàng tiêu dùng đáp ứng đời sống.",
      "Chương trình phát triển ngành khai thác dầu khí hàng hải.",
      "Chương trình đầu tư phát triển hệ thống năng lượng điện.",
      "Chương trình xây dựng các công trình giao thông trọng điểm."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Chương trình thứ hai là Chương trình hàng tiêu dùng."
  },
  {
    id: "lsd-dh6-d2-007",
    examSet: 2,
    sectionId: "dh-6-grp-1",
    subsectionId: "dh-6-sec-1",
    question: "Tên chương trình thứ ba trong 3 Chương trình kinh tế lớn được Đại hội VI đề ra là gì?",
    options: [
      "Chương trình sản xuất hàng xuất khẩu tạo nguồn ngoại tệ.",
      "Chương trình phát triển ngành luyện kim công nghiệp nặng.",
      "Chương trình xây dựng các khu đô thị mới ở khu vực Nam.",
      "Chương trình nhập khẩu công nghệ kỹ thuật cao từ Mỹ về."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Chương trình thứ ba là Chương trình hàng xuất khẩu."
  },

  // 8-25: Medium (18 questions)
  {
    id: "lsd-dh6-d2-008",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Đổi mới cơ chế quản lý kinh tế tại Đại hội VI (12/1986) được thể hiện cốt lõi qua việc gì?",
    options: [
      "Chuyển từ cơ chế bao cấp sang hạch toán kinh doanh XHCN.",
      "Tăng cường áp đặt cơ chế tem phiếu cào bằng rộng rãi hơn.",
      "Cấm đoán hoàn toàn các hình thức buôn bán trao đổi tư nhân.",
      "Giao toàn bộ quyền quản lý kinh tế cho các tổ chức tư nhân."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đổi mới cơ chế quản lý: Xóa bỏ cơ chế tập trung quan liêu bao cấp, chuyển sang cơ chế hạch toán kinh doanh XHCN."
  },
  {
    id: "lsd-dh6-d2-009",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Bài học lịch sử về quán triệt tư tưởng 'Lấy dân làm gốc' tại ĐH VI nhấn mạnh điều gì?",
    options: [
      "Mọi chủ trương chính sách phải vì lợi ích và xuất phát từ dân.",
      "Nhân dân phải tuyệt đối nghe theo sự sắp đặt hành chính quan.",
      "Xem nhẹ vai trò đóng góp ý kiến của nhân dân vào dự thảo văn.",
      "Chỉ tập trung giải quyết nguyện vọng của nhóm thiểu số cán bộ."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Tư tưởng lấy dân làm gốc: Mọi chủ trương của Đảng phải xuất phát từ lợi ích, nguyện vọng và khả năng của nhân dân."
  },
  {
    id: "lsd-dh6-d2-010",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Số lượng ủy viên dự khuyết Ban Chấp hành Trung ương Đảng do Đại hội VI (12/1986) bầu là bao nhiêu?",
    options: [
      "Ban Chấp hành Trung ương được bầu gồm 49 ủy viên dự khuyết.",
      "Ban Chấp hành Trung ương được bầu gồm 36 ủy viên dự khuyết.",
      "Ban Chấp hành Trung ương được bầu gồm 32 ủy viên dự khuyết.",
      "Ban Chấp hành Trung ương được bầu gồm 40 ủy viên dự khuyết."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "BCH Trung ương khóa VI gồm 124 ủy viên chính thức và 49 ủy viên dự khuyết."
  },
  {
    id: "lsd-dh6-d2-011",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Tầm quan trọng của việc dứt khoát xóa bỏ cơ chế tập trung quan liêu bao cấp tại ĐH VI là gì?",
    options: [
      "Cởi trói cho sức sản xuất, khơi dậy tiềm năng lao động của xã hội.",
      "Giúp cho bộ máy quản lý nhà nước duy trì lối làm việc quan liêu.",
      "Khiến cho nền kinh tế phụ thuộc hoàn toàn vào viện trợ nước ngoài.",
      "Làm cho nguồn thu ngân sách nhà nước bị giảm sút nghiêm trọng."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Xóa bỏ bao cấp là khâu đột phá cởi trói cho lực lượng sản xuất, giải phóng sức sáng tạo của nhân dân."
  },
  {
    id: "lsd-dh6-d2-012",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Ý nghĩa của việc thừa nhận kinh tế tư nhân và kinh tế cá thể tại Đại hội VI là gì?",
    options: [
      "Huy động nguồn vốn, sức lao động và năng lực sản xuất trong dân.",
      "Nhằm mục đích biến nước ta thành một quốc gia tư bản chủ nghĩa.",
      "Để giải tán toàn bộ các cơ sở kinh tế quốc doanh của Nhà nước.",
      "Khiến cho các hợp tác xã nông nghiệp hoàn toàn bị sụp đổ ngay."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Thừa nhận kinh tế tư nhân, cá thể giúp giải phóng các nguồn lực tài chính, sức lao động nhàn rỗi trong dân."
  },
  {
    id: "lsd-dh6-d2-013",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Số lượng các đoàn đại biểu quốc tế tham dự Đại hội VI khẳng định vị thế ngoại giao ra sao?",
    options: [
      "Có 32 đoàn đại biểu quốc tế tham dự thể hiện sự đoàn kết ủng hộ.",
      "Cho thấy sự cô lập ngoại giao hoàn toàn của Việt Nam trên thế giới.",
      "Bắt buộc nước ta phải nghe theo chỉ đạo tuyệt đối từ nước ngoài.",
      "Nhằm mục đích đàm phán hòa hoãn nhượng bộ đối với đế quốc Mỹ."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "32 đoàn đại biểu quốc tế thể hiện sự ủng hộ mạnh mẽ của bạn bè quốc tế đối với sự nghiệp Đổi mới của Việt Nam."
  },
  {
    id: "lsd-dh6-d2-014",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Tầm quan trọng của việc kết hợp sức mạnh dân tộc với sức mạnh thời đại tại ĐH VI là gì?",
    options: [
      "Tranh thủ xu thế hòa bình hợp tác quốc tế để phát triển đất nước.",
      "Đóng cửa kinh tế tuyệt đối không giao thương với bên ngoài.",
      "Phụ thuộc hoàn toàn vào nguồn vốn đầu tư vay nợ nước ngoài.",
      "Từ bỏ các mục tiêu độc lập dân tộc để đổi lấy hỗ trợ tài chính."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Tranh thủ xu thế toàn cầu hóa, mở rộng giao lưu quốc tế để đưa đất nước thoát khỏi bao vây cấm vận."
  },
  {
    id: "lsd-dh6-d2-015",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Đổi mới chính sách văn hóa xã hội tại ĐH VI hướng tới mục tiêu gì?",
    options: [
      "Phát triển con người toàn diện, nâng cao dân trí và công bằng xã hội.",
      "Xóa bỏ hoàn toàn các giá trị văn hóa truyền thống của dân tộc.",
      "Chỉ đầu tư văn hóa cho khu vực thành thị xem nhẹ vùng nông thôn.",
      "Thương mại hóa toàn bộ các hoạt động giáo dục y tế trong nước."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Chính sách xã hội đúng đắn vì con người, hướng tới sự phát triển toàn diện và công bằng xã hội."
  },
  {
    id: "lsd-dh6-d2-016",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Yêu cầu chống tiêu cực, quan liêu trong bộ máy được Tổng Bí thư Nguyễn Văn Linh phát động là gì?",
    options: [
      "Chuỗi bài viết 'Những việc cần làm ngay' đăng trên báo Nhân Dân.",
      "Phong trào cải cách ruộng đất triệt để ở các vùng nông thôn.",
      "Chính sách thu hồi toàn bộ sản phẩm phụ của nông dân nghèo.",
      "Quy định bắt buộc cán bộ phải nghỉ hưu sớm không lý do."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Tổng Bí thư Nguyễn Văn Linh khởi xướng chuyên mục 'Những việc cần làm ngay' chống tiêu cực, quan liêu."
  },
  {
    id: "lsd-dh6-d2-017",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Phương châm 'Nhìn thẳng vào sự thật, đánh giá đúng sự thật' thể hiện bản lĩnh gì của Đảng?",
    options: [
      "Bản lĩnh dũng cảm, khoa học, dám nhận sai lầm để quyết tâm đổi mới.",
      "Sự suy yếu phân hóa trầm trọng trong nội bộ tổ chức lãnh đạo Đảng.",
      "Nhằm mục đích hạ thấp thành quả cách mạng của giai đoạn trước.",
      "Đổ lỗi toàn bộ khó khăn khủng hoảng cho bối cảnh tình hình quốc."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Thể hiện bản lĩnh trung thực, thái độ nghiêm túc, khoa học của Đảng trước nhân dân và lịch sử."
  },
  {
    id: "lsd-dh6-d2-018",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Vai trò của Nghị quyết Trung ương 6 khóa VI (3/1989) đối với công cuộc Đổi mới là gì?",
    options: [
      "Đưa ra 6 nguyên tắc chỉ đạo công cuộc Đổi mới giữ vững định hướng XHCN.",
      "Tuyên bố kết thúc hoàn toàn thời kỳ quá độ tiến lên chủ nghĩa xã hội.",
      "Cho phép tư nhân hóa toàn bộ đất đai nông nghiệp trên phạm vi cả nước.",
      "Quyết định bãi bỏ hoàn toàn thành phần kinh tế quốc doanh nhà nước."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Nghị quyết Trung ương 6 khóa VI (3/1989) đề ra 6 nguyên tắc chỉ đạo Đổi mới, đảm bảo đi đúng định hướng XHCN."
  },
  {
    id: "lsd-dh6-d2-019",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Luật Đầu tư nước ngoài tại Việt Nam được Quốc hội thông qua năm 1987 có ý nghĩa gì?",
    options: [
      "Mở đường thu hút nguồn vốn, công nghệ và quản lý tiên tiến từ ngoài.",
      "Bán toàn bộ tài nguyên quốc gia cho các tập đoàn tư bản nước ngoài.",
      "Cấm đoán các doanh nghiệp Việt Nam hợp tác liên doanh với tư bản.",
      "Chỉ cho phép các nước XHCN đầu tư không cho các nước tư bản vào."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Luật Đầu tư nước ngoài (1987) là khung pháp lý đầu tiên cụ thể hóa đường lối Đổi mới đối ngoại."
  },
  {
    id: "lsd-dh6-d2-020",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Thành tựu giải quyết nạn đói, tự túc lương thực xuất khẩu đạt được vào năm nào sau ĐH VI?",
    options: [
      "Năm 1989, Việt Nam từ nước thiếu lương thực trở thành nước xuất khẩu gạo.",
      "Năm 1986, ngay khi Đại hội đại biểu toàn quốc lần thứ VI vừa bế mạc.",
      "Năm 1995, khi Việt Nam bắt đầu gia nhập chính thức vào khối ASEAN.",
      "Năm 2000, khi Việt Nam bước vào giai đoạn thế kỷ XXI hiện đại hóa."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Năm 1989, nhờ Nghị quyết 10 (Khoán 10) và đường lối ĐH VI, Việt Nam chấm dứt nạn đói và bắt đầu xuất khẩu gạo."
  },
  {
    id: "lsd-dh6-d2-021",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Bản chất của việc 'xuất phát từ thực tiễn' trong đường lối Đổi mới ĐH VI là gì?",
    options: [
      "Lấy thực tiễn làm thước đo kiểm nghiệm chính sách, chống duy ý chí.",
      "Tùy tiện thay đổi đường lối chạy theo lợi ích trước mắt của tư bản.",
      "Từ bỏ lý luận Mác - Lênin để áp dụng hoàn toàn lý luận phương Tây.",
      "Bỏ qua các đánh giá tác động thực tế khi ban hành các quy định pháp."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Xuất phát từ thực tiễn: Căn cứ vào trình độ thực tế của lực lượng sản xuất, lấy hiệu quả thực tế làm thước đo."
  },
  {
    id: "lsd-dh6-d2-022",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Ý nghĩa của việc đổi mới hệ thống chính trị tại Đại hội VI là gì?",
    options: [
      "Xây dựng Nhà nước pháp quyền XHCN, nâng cao hiệu lực quản lý vĩ mô.",
      "Xóa bỏ hoàn toàn vai trò lãnh đạo duy nhất của Đảng Cộng sản Việt.",
      "Chuyển sang mô hình tam quyền phân lập theo kiểu các nước tư bản.",
      "Giải tán hệ thống Quốc hội và Hội đồng nhân dân các cấp địa phương."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đổi mới hệ thống chính trị nhằm phân định rõ chức năng lãnh đạo của Đảng và quản lý của Nhà nước."
  },
  {
    id: "lsd-dh6-d2-023",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Tầm quan trọng của Nghị quyết 10-NQ/TW (Khoán 10 - tháng 4/1988) trong nông nghiệp là gì?",
    options: [
      "Giao khoán đất cho hộ gia đình, coi hộ gia đình là đơn vị kinh tế tự chủ.",
      "Bắt buộc thu hồi toàn bộ đất đai về cho các hợp tác xã nông nghiệp.",
      "Quốc hữu hóa toàn bộ ruộng đất nông nghiệp không đền bù cho nông dân.",
      "Cấm đoán nông dân bán sản phẩm dư thừa ra ngoài thị trường tự do."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Nghị quyết 10 (4/1988) coi hộ gia đình là đơn vị kinh tế tự chủ, tạo cú hích lịch sử giải phóng nông nghiệp."
  },
  {
    id: "lsd-dh6-d2-024",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Bản lĩnh giữ vững định hướng XHCN trong Đổi mới tại ĐH VI giúp đất nước tránh rủi ro gì?",
    options: [
      "Tránh nguy cơ chệch hướng, khủng hoảng chính trị và chao đảo chế độ.",
      "Khiến cho nền kinh tế bị cô lập hoàn toàn với các thị trường bên ngoài.",
      "Làm cho nguồn vốn đầu tư tư bản nước ngoài rút hoàn toàn khỏi nước.",
      "Khiến cho đất nước rơi vào tình trạng lạm phát phi mã kéo dài mãi."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đổi mới có nguyên tắc, giữ vững định hướng XHCN giúp Việt Nam đứng vững trước cơn địa chấn sụp đổ ở Đông Âu."
  },
  {
    id: "lsd-dh6-d2-025",
    examSet: 2,
    sectionId: "dh-6-grp-2",
    subsectionId: "dh-6-sec-2",
    question: "Vì sao Đại hội VI (12/1986) được nhân dân cả nước đồng lòng ủng hộ nhiệt liệt?",
    options: [
      "Vì đường lối Đổi mới đúng đắn, đáp ứng đúng nguyện vọng và lợi ích thiết thân.",
      "Vì Đại hội đã tuyên bố phát miễn phí toàn bộ tiền mặt cho nhân dân.",
      "Vì Đại hội đã quyết định xóa bỏ toàn bộ các nghĩa vụ thuế đối với dân.",
      "Vì Đại hội đã cho phép người dân tự do vi phạm các quy định pháp luật."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đường lối Đổi mới hợp lòng dân, giải phóng sức sản xuất, mang lại lợi ích thiết thân cho người dân."
  },

  // 26-36: Hard (11 questions)
  {
    id: "lsd-dh6-d2-026",
    examSet: 2,
    sectionId: "dh-6-grp-3",
    subsectionId: "dh-6-sec-3",
    question: "Phân tích nguyên nhân giúp Việt Nam đứng vững qua cơn địa chấn Đông Âu sụp đổ năm 1989-1991?",
    options: [
      "Nhờ đường lối Đổi mới đúng đắn, giữ vững định hướng XHCN và lòng dân.",
      "Do Việt Nam không có bất kỳ mối quan hệ ngoại giao nào với Liên Xô.",
      "Bởi vì Việt Nam nhận được nguồn tài chính cứu trợ vô điều kiện từ Mỹ.",
      "Do đất nước ta đã hoàn thành triệt để công nghiệp hóa hiện đại hóa."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đường lối Đổi mới đúng đắn bắt đầu từ 1986 cùng với bản lĩnh kiên định CNXH giúp Việt Nam đứng vững qua khủng hoảng toàn cầu."
  },
  {
    id: "lsd-dh6-d2-027",
    examSet: 2,
    sectionId: "dh-6-grp-3",
    subsectionId: "dh-6-sec-3",
    question: "Tại sao việc Đổi mới tư duy kinh tế tại ĐH VI lại là chìa khóa giải quyết khủng hoảng?",
    options: [
      "Tháo gỡ rào cản bao cấp, giải phóng toàn bộ sức sản xuất trong xã hội.",
      "Vì tư duy kinh tế mới giúp Nhà nước nắm trọn quyền phân phối hàng hóa.",
      "Bởi vì nó loại bỏ hoàn toàn vai trò quản lý vĩ mô của cơ quan chính quyền.",
      "Vì nó giúp đất nước vay nợ nước ngoài một cách không giới hạn."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đổi mới tư duy kinh tế tháo gỡ xiềng xóm bao cấp, khơi dậy mọi tiềm năng sản xuất của các thành phần kinh tế."
  },
  {
    id: "lsd-dh6-d2-028",
    examSet: 2,
    sectionId: "dh-6-grp-3",
    subsectionId: "dh-6-sec-3",
    question: "Phân tích vai trò chỉ đạo của phương châm 'Nhìn thẳng vào sự thật' trong việc hoạch định chính sách?",
    options: [
      "Loại bỏ tư tưởng tô hồng thành tích, tập trung sửa chữa các yếu kém cốt lõi.",
      "Giúp cho bộ máy nhà nước né tránh các trách nhiệm quản lý khó khăn.",
      "Tạo cơ sở để đổ lỗi cho hoàn cảnh lịch sử mà không cần sửa đổi tư duy.",
      "Bãi bỏ hoàn toàn các quy định pháp luật quản lý trong nền kinh tế."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Nhìn thẳng sự thật giúp nhận diện đúng nguyên nhân khủng hoảng để từ đó ban hành các chính sách đột phá thực chất."
  },
  {
    id: "lsd-dh6-d2-029",
    examSet: 2,
    sectionId: "dh-6-grp-3",
    subsectionId: "dh-6-sec-3",
    question: "Giá trị vượt thời gian của 3 Chương trình kinh tế lớn ĐH VI đối với bài học quản lý là gì?",
    options: [
      "Tập trung dồn nguồn lực vào các mục tiêu trọng tâm sinh tồn cấp bách nhất.",
      "Cho thấy cần phải dàn trải nguồn vốn đầu tư vào tất cả các ngành nghề.",
      "Bỏ qua sản xuất nông nghiệp để tập trung dồn vốn cho các ngành dịch vụ.",
      "Chỉ tập trung sản xuất phục vụ cho tầng lớp thượng lưu trong xã hội."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Bài học quản lý: Không dàn trải nguồn lực; phải xác định được khâu then chốt (lương thực, tiêu dùng, xuất khẩu) để tập trung giải quyết."
  },
  {
    id: "lsd-dh6-d2-030",
    examSet: 2,
    sectionId: "dh-6-grp-3",
    subsectionId: "dh-6-sec-3",
    question: "Bản chất của tư tưởng 'Đổi mới có nguyên tắc' được khẳng định từ sau ĐH VI là gì?",
    options: [
      "Đổi mới nhưng không chệch hướng XHCN, giữ vững vai trò lãnh đạo của Đảng.",
      "Đổi mới bằng mọi giá kể cả việc thay đổi toàn bộ bản chất của chế độ.",
      "Tùy tiện thay đổi đường lối chính trị theo sự can thiệp của bên ngoài.",
      "Bãi bỏ hoàn toàn các nguyên tắc tập trung dân chủ trong tổ chức Đảng."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đổi mới có nguyên tắc: Giữ vững mục tiêu độc lập dân tộc và CNXH, giữ vững vai trò lãnh đạo của Đảng Cộng sản."
  },
  {
    id: "lsd-dh6-d2-031",
    examSet: 2,
    sectionId: "dh-6-grp-3",
    subsectionId: "dh-6-sec-3",
    question: "Tại sao việc kết hợp Đổi mới kinh tế với Đổi mới chính trị tại ĐH VI là sự lựa chọn sáng suốt?",
    options: [
      "Giữ vững ổn định chính trị xã hội để tạo môi trường thuận lợi phát triển kinh.",
      "Làm cho bộ máy chính trị xáo trộn liên tục để kinh tế tự do phát triển.",
      "Xem nhẹ phát triển kinh tế để tập trung toàn bộ cho các cuộc cải cách.",
      "Tách rời hai lĩnh vực khiến cho chính sách không có sự phối hợp đồng bộ."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Ổn định chính trị là tiền đề cho phát triển kinh tế; phát triển kinh tế củng cố ổn định chính trị."
  },
  {
    id: "lsd-dh6-d2-032",
    examSet: 2,
    sectionId: "dh-6-grp-3",
    subsectionId: "dh-6-sec-3",
    question: "Sự đóng góp của bài học 'Lấy dân làm gốc' trong việc đẩy lùi lạm phát những năm 80 là gì?",
    options: [
      "Khơi dậy sức mạnh và lòng tin của dân, giải phóng nguồn vốn và sản phẩm trong dân.",
      "Nhà nước áp đặt mức giá cố định bắt buộc dân phải bán sản phẩm giá rẻ.",
      "Cấm đoán nhân dân không được tự do lưu thông hàng hóa trên thị trường.",
      "Tập trung thu thuế cao đối với mọi hoạt động sản xuất nông nghiệp của dân."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Khi hợp lòng dân, nhân dân hăng hái sản xuất mang hàng hóa ra thị trường, làm tăng nguồn cung dập tắt lạm phát."
  },
  {
    id: "lsd-dh6-d2-033",
    examSet: 2,
    sectionId: "dh-6-grp-3",
    subsectionId: "dh-6-sec-3",
    question: "Phân tích ý nghĩa của việc mở cửa kinh tế đối ngoại tại Đại hội VI đối với hội nhập quốc tế?",
    options: [
      "Đặt nền móng cho quá trình hội nhập kinh tế quốc tế sâu rộng sau này.",
      "Khiến cho nền kinh tế trong nước hoàn toàn bị các tập đoàn ngoại chi phối.",
      "Làm mất đi tính độc lập tự chủ của nền kinh tế dân tộc Việt Nam.",
      "Chỉ cho phép giao thương với một số ít quốc gia truyền thống xưa."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Mở cửa đối ngoại ĐH VI mở đường cho Việt Nam gia nhập ASEAN (1995), WTO (2007) và các Hiệp định thương mại tự do thế hệ mới."
  },
  {
    id: "lsd-dh6-d2-034",
    examSet: 2,
    sectionId: "dh-6-grp-3",
    subsectionId: "dh-6-sec-3",
    question: "Tầm quan trọng của việc xây dựng con người mới trong đường lối Đổi mới ĐH VI là gì?",
    options: [
      "Phát huy nhân tố con người vừa là mục tiêu vừa là động lực của Đổi mới.",
      "Coi con người chỉ là công cụ lao động đơn thuần phục vụ sản xuất.",
      "Bỏ qua công tác giáo dục đào tạo để dồn ngân sách cho kinh tế.",
      "Khuyến khích tư tưởng cá nhân thực dụng xa rời lợi ích của cộng đồng."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Con người là trung tâm của chiến lược phát triển; phát huy tiềm năng sáng tạo của con người là động lực quyết định Đổi mới thành công."
  },
  {
    id: "lsd-dh6-d2-035",
    examSet: 2,
    sectionId: "dh-6-grp-3",
    subsectionId: "dh-6-sec-3",
    question: "Bài học lịch sử lớn nhất về năng lực lãnh đạo của Đảng rút ra từ ĐH VI là gì?",
    options: [
      "Đảng phải liên tục tự đổi mới, tự chỉnh đốn, gắn bó mật thiết với nhân dân.",
      "Đảng không cần thay đổi tư duy quản lý khi tình hình thực tiễn biến động.",
      "Đảng chỉ cần quan tâm tới công tác lý luận mà xem nhẹ kiểm tra thực tế.",
      "Đảng ủy quyền hoàn toàn công tác quản lý cho các cơ quan nước ngoài."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đảng lãnh đạo phải luôn tự đổi mới, tự chỉnh đốn, dũng cảm thừa nhận sai lầm và luôn bám sát đời sống nhân dân."
  },
  {
    id: "lsd-dh6-d2-036",
    examSet: 2,
    sectionId: "dh-6-grp-3",
    subsectionId: "dh-6-sec-3",
    question: "Nguyên nhân cốt lõi đưa Việt Nam từ một nước nghèo đói vươn lên thành quốc gia phát triển là gì?",
    options: [
      "Sự khởi xướng và kiên trì thực hiện đường lối Đổi mới toàn diện từ ĐH VI.",
      "Nhờ nguồn viện trợ tài chính vô điều kiện từ các tổ chức tư bản lớn.",
      "Do vị trí địa lý tự nhiên thuận lợi không gặp phải thiên tai khủng hoảng.",
      "Do sự tự động thay đổi mô hình quản lý kinh tế của các quốc gia khác."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đường lối Đổi mới đúng đắn khởi xướng từ ĐH VI là quyết định lịch sử mang tính bước ngoặt đưa đất nước cất cánh."
  },

  // 37-40: Outside (4 questions - Practical Application)
  {
    id: "lsd-dh6-d2-037",
    examSet: 2,
    sectionId: "dh-6-grp-4",
    subsectionId: "dh-6-sec-4",
    question: "Bài học về tự đổi mới tư duy từ ĐH VI được vận dụng trong chuyển đổi số hiện nay thế nào?",
    options: [
      "Dũng cảm thay đổi phương thức quản lý cũ, chủ động ứng dụng công nghệ mới.",
      "Duy trì các phương thức quản lý thủ công lạc hậu gây phiền hà cho dân.",
      "E ngại chuyển đổi số vì sợ phát sinh các rủi ro kỹ thuật trong công việc.",
      "Áp dụng chuyển đổi số một cách hình thức không mang lại hiệu quả thực."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Đổi mới tư duy thời 4.0: Dũng cảm xóa bỏ tư duy lối cũ, tiên phong chuyển đổi số và đổi mới sáng tạo."
  },
  {
    id: "lsd-dh6-d2-038",
    examSet: 2,
    sectionId: "dh-6-grp-4",
    subsectionId: "dh-6-sec-3",
    question: "Từ bài học phát triển kinh tế mở cửa ĐH VI, doanh nghiệp Việt Nam hiện nay cần chuẩn bị gì?",
    options: [
      "Nâng cao năng lực cạnh tranh, chủ động tham gia chuỗi giá trị toàn cầu.",
      "Ỷ lại vào sự bảo hộ của Nhà nước mà không chịu cải tiến chất lượng.",
      "Tránh né sự cạnh tranh bằng cách thu hẹp quy mô sản xuất kinh doanh.",
      "Vi phạm các quy chuẩn môi trường để tối đa hóa lợi nhuận trước mắt."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Doanh nghiệp phải nâng cao năng lực quản trị, đổi mới công nghệ, chủ động hội nhập và cạnh tranh bình đẳng quốc tế."
  },
  {
    id: "lsd-dh6-d2-039",
    examSet: 2,
    sectionId: "dh-6-grp-4",
    subsectionId: "dh-6-sec-4",
    question: "Bài học 'Những việc cần làm ngay' của Tổng Bí thư Nguyễn Văn Linh nhắc nhở cán bộ điều gì?",
    options: [
      "Hành động quyết liệt, nói đi đôi với làm, xử lý dứt điểm các vướng mắc tiêu cực.",
      "Hứa hẹn nhiều nhưng không thực hiện các cam kết trước quần chúng nhân dân.",
      "Đẩy trách nhiệm xử lý các vụ việc tiêu cực cho các cấp quản lý khác.",
      "Thờ ơ trước các hành vi vi phạm pháp luật và nhũng nhiễu ở địa phương."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Nói đi đôi với làm, hành động quyết liệt, chống quan liêu nhũng nhiễu, giải quyết ngay các bức xúc của dân."
  },
  {
    id: "lsd-dh6-d2-040",
    examSet: 2,
    sectionId: "dh-6-grp-4",
    subsectionId: "dh-6-sec-4",
    question: "Ý nghĩa của bước ngoặt Đổi mới 1986 truyền thông điệp gì cho thế hệ trẻ về khát vọng phát triển?",
    options: [
      "Nêu cao tinh thần tự lực tự cường, nuôi khát vọng cống hiến xây dựng đất nước.",
      "Thỏa mãn với những thành tựu đã đạt được mà không cần nỗ lực vươn lên.",
      "Tìm kiếm cơ hội định cư ở nước ngoài thay vì cống hiến cho quê hương.",
      "Sống thực dụng cá nhân không quan tâm tới sự phát triển chung của cộng đồng."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Truyền khát vọng cho thế hệ trẻ: Phát huy tinh thần Đổi mới, tự lực tự cường, đưa Việt Nam hùng cường và thịnh vượng."
  }
];

// Check length difference (L_max - L_min <= 15)
let hasError = false;
questions.forEach((q, idx) => {
  const lengths = q.options.map(o => o.length);
  const maxL = Math.max(...lengths);
  const minL = Math.min(...lengths);
  const diff = maxL - minL;
  if (diff > 15) {
    console.error(`[ERROR] Question ${idx + 1} (${q.id}): diff = ${diff} (>15). Max: ${maxL}, Min: ${minL}`);
    hasError = true;
  }
});

if (!hasError) {
  console.log("✅ All 40 questions passed Option Length Balance (L_max - L_min <= 15)!");
  const fileContent = `/* ============================================================
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ CHUẨN 2: ĐẠI HỘI VI (12/1986)
   Mã Bộ Đề: questions-lsd-dh6-part2.js
   Số lượng: 40 câu cố định (36 Inside + 4 Outside)
   ============================================================ */

export const questionsLsdDh6Part2 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh6-part2.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh6-part2.js");
}
