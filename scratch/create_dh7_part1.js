import fs from "fs";

// 40 questions for Fixed Exam Set 1 (Đại hội VII - 6/1991)
// 36 Inside (7 Easy, 18 Medium, 11 Hard) + 4 Outside
const questions = [
  // 1-7: Easy (7 questions)
  {
    id: "lsd-dh7-d1-001",
    examSet: 1,
    sectionId: "dh-7-grp-1",
    subsectionId: "dh-7-sec-1",
    question: "Đại hội đại biểu toàn quốc lần thứ VII của Đảng diễn ra trong khoảng thời gian nào?",
    options: [
      "Đại hội được diễn ra trong thời gian từ ngày 24 đến ngày 27 tháng 6 năm 1991.",
      "Đại hội được diễn ra trong thời gian từ ngày 15 đến ngày 18 tháng 12 năm 1986.",
      "Đại hội được diễn ra trong thời gian từ ngày 28 tháng 6 đến ngày 1 tháng 7 năm 1996.",
      "Đại hội được diễn ra trong thời gian từ ngày 27 đến ngày 31 tháng 3 năm 1982."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội đại biểu toàn quốc lần thứ VII của Đảng họp từ ngày 24 đến ngày 27-6-1991."
  },
  {
    id: "lsd-dh7-d1-002",
    examSet: 1,
    sectionId: "dh-7-grp-1",
    subsectionId: "dh-7-sec-1",
    question: "Văn kiện quan trọng mang tính căn bản lý luận lần đầu tiên được thông qua tại Đại hội VII là gì?",
    options: [
      "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ tiến lên CNXH (1991).",
      "Cương lĩnh chính trị đầu tiên của Đảng được thông qua năm 1930.",
      "Luận cương chính trị tháng 10 năm 1930 do Trần Phú soạn thảo.",
      "Báo cáo chính trị tổng kết 30 năm đổi mới đất nước tại Hà Nội."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VII thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ tiến lên CNXH (Cương lĩnh 1991)."
  },
  {
    id: "lsd-dh7-d1-003",
    examSet: 1,
    sectionId: "dh-7-grp-1",
    subsectionId: "dh-7-sec-1",
    question: "Đồng chí nào sau đây được Đại hội VII (6/1991) bầu giữ chức vụ Tổng Bí thư?",
    options: [
      "Đồng chí Đỗ Mười được Đại hội bầu giữ chức vụ Tổng Bí thư.",
      "Đồng chí Nguyễn Văn Linh được Đại hội bầu giữ chức vụ Tổng Bí thư.",
      "Đồng chí Lê Duẩn được Đại hội bầu giữ chức vụ Tổng Bí thư Trung.",
      "Đồng chí Nông Đức Mạnh được Đại hội bầu giữ chức vụ Tổng Bí thư."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VII bầu Ban Chấp hành Trung ương và bầu đồng chí Đỗ Mười làm Tổng Bí thư."
  },
  {
    id: "lsd-dh7-d1-004",
    examSet: 1,
    sectionId: "dh-7-grp-1",
    subsectionId: "dh-7-sec-1",
    question: "Lần đầu tiên tại Đại hội VII (6/1991), Đảng ta đã khẳng định tư tưởng nào là nền tảng tư tưởng?",
    options: [
      "Khẳng định Tư tưởng Hồ Chí Minh cùng Chủ nghĩa Mác-Lênin là nền tảng.",
      "Chỉ khẳng định duy nhất Chủ nghĩa Mác-Lênin không đề cập tư tưởng Hồ.",
      "Khẳng định Nho giáo và Phật giáo là nền tảng tư tưởng chủ đạo quốc.",
      "Khẳng định tư tưởng kinh tế tư bản là kim chỉ nam cho mọi hoạt động."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VII khẳng định: Đảng lấy chủ nghĩa Mác - Lênin và Tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động."
  },
  {
    id: "lsd-dh7-d1-005",
    examSet: 1,
    sectionId: "dh-7-grp-1",
    subsectionId: "dh-7-sec-1",
    question: "Tôn chỉ đối ngoại nổi tiếng được Đại hội VII (6/1991) đề ra cho Việt Nam là gì?",
    options: [
      "Việt Nam muốn là bạn với tất cả các nước trong cộng đồng quốc tế.",
      "Việt Nam sẵn sàng là bạn và đối tác tin cậy của các nước phương Tây.",
      "Việt Nam là bạn và là đối tác chiến lược toàn diện của các nước XHCN.",
      "Việt Nam đứng trung lập hoàn toàn không tham gia các tổ chức quốc tế."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VII đề ra tôn chỉ đối ngoại: 'Việt Nam muốn là bạn với tất cả các nước trong cộng đồng quốc tế'."
  },
  {
    id: "lsd-dh7-d1-006",
    examSet: 1,
    sectionId: "dh-7-grp-1",
    subsectionId: "dh-7-sec-1",
    question: "Đại hội đại biểu toàn quốc lần thứ VII của Đảng (6/1991) được tổ chức tại địa điểm nào?",
    options: [
      "Đại hội được tổ chức tại Thủ đô Hà Nội trong Hội trường Ba Đình lịch sử.",
      "Đại hội được tổ chức tại xã Vinh Quang, huyện Chiêm Hóa, tỉnh Tuyên Quang.",
      "Đại hội được tổ chức tại thành phố Hồ Chí Minh sau ngày giải phóng Nam.",
      "Đại hội được tổ chức tại thành phố Ma Cao thuộc khu vực nước Trung Quốc."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VII họp tại Thủ đô Hà Nội."
  },
  {
    id: "lsd-dh7-d1-007",
    examSet: 1,
    sectionId: "dh-7-grp-1",
    subsectionId: "dh-7-sec-1",
    question: "Chiến lược phát triển kinh tế xã hội được Đại hội VII (6/1991) thông qua áp dụng đến năm nào?",
    options: [
      "Thông qua Chiến lược ổn định và phát triển kinh tế đến năm 2000.",
      "Thông qua Chiến lược phát triển kinh tế 5 năm đến năm 1995.",
      "Thông qua Chiến lược công nghiệp hóa hiện đại hóa đến năm 2010.",
      "Thông qua Chiến lược phát triển kinh tế biển sâu đến năm 2020."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VII thông qua Chiến lược ổn định và phát triển kinh tế - xã hội đến năm 2000."
  },

  // 8-25: Medium (18 questions)
  {
    id: "lsd-dh7-d1-008",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Số lượng đại biểu chính thức tham dự Đại hội đại biểu toàn quốc lần thứ VII (6/1991) là bao nhiêu?",
    options: [
      "Đại hội có 1.176 đại biểu đại diện cho hơn 2,1 triệu đảng viên cả nước.",
      "Đại hội có 1.129 đại biểu đại diện cho hơn 1,9 triệu đảng viên cả nước.",
      "Đại hội có 1.033 đại biểu đại diện cho hơn 1,7 triệu đảng viên cả nước.",
      "Đại hội có 1.008 đại biểu đại diện cho hơn 1,5 triệu đảng viên cả nước."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội VII có 1.176 đại biểu đại diện cho hơn 2,1 triệu đảng viên trong cả nước."
  },
  {
    id: "lsd-dh7-d1-009",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Cương lĩnh 1991 đã xác định xã hội xã hội chủ nghĩa mà nhân dân ta xây dựng gồm mấy đặc trưng cơ bản?",
    options: [
      "Bao gồm 6 đặc trưng cơ bản của xã hội xã hội chủ nghĩa.",
      "Bao gồm 8 đặc trưng cơ bản của xã hội xã hội chủ nghĩa.",
      "Bao gồm 4 đặc trưng cơ bản của xã hội xã hội chủ nghĩa.",
      "Bao gồm 10 đặc trưng cơ bản của xã hội xã hội chủ nghĩa."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Cương lĩnh 1991 nêu ra 6 đặc trưng cơ bản của xã hội XHCN mà nhân dân ta xây dựng."
  },
  {
    id: "lsd-dh7-d1-010",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Cương lĩnh 1991 đã đề ra bao nhiêu phương hướng lớn để xây dựng chủ nghĩa xã hội ở nước ta?",
    options: [
      "Đề ra 7 phương hướng lớn chỉ đạo trong quá trình xây dựng CNXH.",
      "Đề ra 5 phương hướng lớn chỉ đạo trong quá trình xây dựng CNXH.",
      "Đề ra 9 phương hướng lớn chỉ đạo trong quá trình xây dựng CNXH.",
      "Đề ra 12 phương hướng lớn chỉ đạo trong quá trình xây dựng CNXH."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Cương lĩnh 1991 đề ra 7 phương hướng lớn xây dựng CNXH."
  },
  {
    id: "lsd-dh7-d1-011",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Bối cảnh quốc tế tác động phức tạp nhất đối với Việt Nam khi Đại hội VII (6/1991) diễn ra là gì?",
    options: [
      "Chế độ XHCN ở Đông Âu sụp đổ và Liên Xô lâm vào khủng hoảng gay gắt.",
      "Chiến tranh thế giới thứ hai bùng nổ trên diện rộng ở Châu Âu.",
      "Mỹ dỡ bỏ hoàn toàn lệnh bao vây cấm vận đối với nền kinh tế.",
      "Khối quân sự NATO tuyên bố giải tán hoàn toàn trên thế giới."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "ĐH VII diễn ra trong bối cảnh chế độ XHCN ở Đông Âu sụp đổ, Liên Xô chao đảo khủng hoảng nghiêm trọng."
  },
  {
    id: "lsd-dh7-d1-012",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Số lượng ủy viên Ban Chấp hành Trung ương Đảng do Đại hội VII (6/1991) bầu ra là bao nhiêu?",
    options: [
      "Ban Chấp hành Trung ương được bầu gồm 146 ủy viên chính thức.",
      "Ban Chấp hành Trung ương được bầu gồm 124 ủy viên chính thức.",
      "Ban Chấp hành Trung ương được bầu gồm 116 ủy viên chính thức.",
      "Ban Chấp hành Trung ương được bầu gồm 150 ủy viên chính thức."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "BCH Trung ương khóa VII gồm 146 ủy viên chính thức."
  },
  {
    id: "lsd-dh7-d1-013",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Vai trò của đồng chí Nguyễn Văn Linh tại Đại hội VII (6/1991) được phân công làm gì?",
    options: [
      "Được trân trọng trao giữ chức vụ Cố vấn Ban Chấp hành Trung ương.",
      "Tiếp tục tái cử giữ chức vụ Tổng Bí thư Ban Chấp hành Trung ương.",
      "Được bầu giữ chức vụ Chủ tịch Quốc hội khóa mới của Việt Nam.",
      "Được phân công làm Trưởng ban Kiểm tra Trung ương Đảng khóa VII."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội VII trân trọng mời đồng chí Nguyễn Văn Linh làm Cố vấn BCH Trung ương."
  },
  {
    id: "lsd-dh7-d1-014",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Mục tiêu tổng quát của Chiến lược ổn định và phát triển kinh tế xã hội đến năm 2000 là gì?",
    options: [
      "Thoát khỏi khủng hoảng, ổn định KT-XH, gấp đôi GDP so với năm 1990.",
      "Chuyển toàn bộ nền kinh tế cả nước sang sản xuất công nghiệp nặng.",
      "Hoàn thành triệt để công cuộc hiện đại hóa đất nước theo chuẩn tư.",
      "Xóa bỏ hoàn toàn thành phần kinh tế quốc doanh để tư nhân hóa."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Mục tiêu Chiến lược đến 2000: Ra khỏi khủng hoảng, ổn định KT-XH, phấn đấu GDP năm 2000 tăng gấp đôi so với 1990."
  },
  {
    id: "lsd-dh7-d1-015",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Khẩu hiệu nổi bật khẳng định tinh thần của Đại hội đại biểu toàn quốc lần thứ VII là gì?",
    options: [
      "Đại hội của Trí tuệ - Đổi mới - Dân chủ - Kỷ cương - Đoàn kết.",
      "Đại hội Toàn thắng của sự nghiệp Giải phóng Dân tộc thống nhất.",
      "Đại hội Kháng chiến thắng lợi và Xây dựng Đảng Lao động Việt.",
      "Đại hội Đổi mới toàn diện đưa đất nước sang thời kỳ công nghiệp."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội VII là 'Đại hội của Trí tuệ - Đổi mới - Dân chủ - Kỷ cương - Đoàn kết'."
  },
  {
    id: "lsd-dh7-d1-016",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Ý nghĩa của việc đưa Tư tưởng Hồ Chí Minh vào Cương lĩnh 1991 là gì?",
    options: [
      "Khẳng định giá trị tài sản tinh thần vô giá của Đảng và dân tộc ta.",
      "Thay thế hoàn toàn vai trò lý luận của Chủ nghĩa Mác - Lênin.",
      "Chỉ áp dụng tư tưởng Hồ Chí Minh trong lĩnh vực công tác ngoại.",
      "Nhằm mục đích đóng cửa nền kinh tế không giao thương với ngoài."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Tư tưởng Hồ Chí Minh là kết quả vận dụng sáng tạo chủ nghĩa Mác - Lênin vào điều kiện thực tiễn Việt Nam, là tài sản tinh thần vô giá."
  },
  {
    id: "lsd-dh7-d1-017",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Đặc trưng về kinh tế của xã hội XHCN trong Cương lĩnh 1991 được xác định ra sao?",
    options: [
      "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại.",
      "Duy trì cơ chế bao cấp tập trung cào bằng không phân phối theo lao.",
      "Chỉ phát triển thành phần kinh tế quốc doanh triệt tiêu tư nhân.",
      "Phụ thuộc hoàn toàn vào nguồn vốn vay nợ từ các tập đoàn tư bản."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Cương lĩnh 1991 xác định: Xã hội XHCN có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu."
  },
  {
    id: "lsd-dh7-d1-018",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Bản chất của chính sách ngoại giao 'Việt Nam muốn là bạn với tất cả các nước' là gì?",
    options: [
      "Đa dạng hóa, đa phương hóa, phấn đấu vì hòa bình, độc lập phát triển.",
      "Đứng trung lập hoàn toàn không tham gia các diễn đàn đa phương.",
      "Từ bỏ mối quan hệ hợp tác ngoại giao truyền thống với các nước bạn.",
      "Phụ thuộc ngoại giao hoàn toàn vào sự chỉ đạo của các nước lớn."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Chính sách đối ngoại mở rộng, đa dạng hóa, đa phương hóa quan hệ quốc tế."
  },
  {
    id: "lsd-dh7-d1-019",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Yêu cầu xây dựng Đảng trong bối cảnh Liên Xô sụp đổ được ĐH VII nhấn mạnh là gì?",
    options: [
      "Giữ vững bản chất giai cấp công nhân, kiên định mục tiêu XHCN.",
      "Cho phép cán bộ tư do thành lập các đảng phái đối lập chính trị.",
      "Bãi bỏ nguyên tắc tập trung dân chủ trong mọi sinh hoạt chi bộ.",
      "Giải tán hệ thống các chi bộ Đảng ở các cơ quan quản lý nhà nước."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Xây dựng Đảng vững mạnh về chính trị, tư tưởng và tổ chức, kiên định đường lối Đổi mới và mục tiêu CNXH."
  },
  {
    id: "lsd-dh7-d1-020",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Đặc trưng về văn hóa của xã hội XHCN trong Cương lĩnh 1991 được xác định ra sao?",
    options: [
      "Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc Việt Nam ta.",
      "Tiếp thu rập khuôn toàn bộ văn hóa tư bản mà không có lọc chọn.",
      "Xóa bỏ hoàn toàn các di sản văn hóa lịch sử quá khứ dân tộc.",
      "Chỉ phát triển văn hóa ở các thành thị xem nhẹ vùng nông thôn."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Cương lĩnh 1991 xác định: Xã hội XHCN có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc."
  },
  {
    id: "lsd-dh7-d1-021",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Ý nghĩa của Nghị quyết Hội nghị Trung ương 3 khóa VII (tháng 6/1992) về đối ngoại là gì?",
    options: [
      "Mở rộng quan hệ quốc tế, phá thế bao vây cấm vận, chủ động hội nhập.",
      "Quyết định đóng cửa nền kinh tế không giao thương với phương Tây.",
      "Cắt đứt mối quan hệ hợp tác truyền thống với các nước láng giềng.",
      "Nhờ nước ngoài quản lý hoàn toàn các chính sách tài chính quốc gia."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "NQ Trung ương 3 khóa VII (1992) cụ thể hóa đường lối đối ngoại mở rộng, đa dạng hóa, đa phương hóa."
  },
  {
    id: "lsd-dh7-d1-022",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Hội nghị đại biểu toàn quốc giữa nhiệm kỳ khóa VII (tháng 1/1994) có ý nghĩa gì?",
    options: [
      "Nhận diện 4 nguy cơ thách thức lớn đối với sự nghiệp cách mạng.",
      "Tuyên bố kết thúc hoàn toàn thời kỳ quá độ tiến lên chủ nghĩa.",
      "Cho phép tư nhân hóa toàn bộ đất đai nông nghiệp trên cả nước.",
      "Bãi bỏ hoàn toàn vai trò dẫn dắt của thành phần kinh tế quốc."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Hội nghị giữa nhiệm kỳ khóa VII (1/1994) nêu rõ 4 nguy cơ: Tụt hậu xa về kinh tế, chệch hướng XHCN, tham nhũng tiêu cực, diễn biến hòa bình."
  },
  {
    id: "lsd-dh7-d1-023",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Bản chất của nguyên tắc 'Nhà nước pháp quyền XHCN' được thúc đẩy từ ĐH VII là gì?",
    options: [
      "Nhà nước của dân, do dân, vì dân, quản lý xã hội bằng pháp luật.",
      "Nhà nước áp đặt mệnh lệnh quan liêu xa rời ý chí của nhân dân.",
      "Nhà nước không cần sử dụng pháp luật trong quản lý kinh tế xã.",
      "Nhà nước chia quyền lực cho các tập đoàn tư bản tư nhân nước."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Xây dựng Nhà nước pháp quyền XHCN của dân, do dân, vì dân, lấy pháp luật làm công cụ quản lý xã hội."
  },
  {
    id: "lsd-dh7-d1-024",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Đại hội VII (6/1991) đã đánh giá bài học về kiên định mục tiêu CNXH ra sao?",
    options: [
      "Giữ vững độc lập dân tộc gắn liền với CNXH là con đường duy nhất.",
      "Từ bỏ mục tiêu XHCN để chuyển sang mô hình tư bản hoàn toàn.",
      "Xem mục tiêu XHCN chỉ là khẩu hiệu không áp dụng vào thực tế.",
      "Chuyển sang nền kinh tế tư bản tự do không cần sự quản lý nhà."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Giữ vững độc lập dân tộc gắn liền với CNXH là bài học xuyên suốt của cách mạng Việt Nam."
  },
  {
    id: "lsd-dh7-d1-025",
    examSet: 1,
    sectionId: "dh-7-grp-2",
    subsectionId: "dh-7-sec-2",
    question: "Vì sao Cương lĩnh 1991 được đánh giá là ngọn cờ chiến lược của Đảng trong thời kỳ quá độ?",
    options: [
      "Định hướng con đường phát triển lâu dài, tổng kết sâu sắc thực tiễn.",
      "Vì Cương lĩnh đã hoàn thành triệt để công cuộc công nghiệp hóa.",
      "Vì Cương lĩnh tuyên bố kết thúc thời kỳ quá độ lên chủ nghĩa.",
      "Vì Cương lĩnh bãi bỏ hoàn toàn các hình thức kinh tế tập thể."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Cương lĩnh 1991 giải đáp những vấn đề cơ bản nhất của thời kỳ quá độ, định hướng con đường phát triển bền vững."
  },

  // 26-36: Hard (11 questions)
  {
    id: "lsd-dh7-d1-026",
    examSet: 1,
    sectionId: "dh-7-grp-3",
    subsectionId: "dh-7-sec-3",
    question: "Phân tích giá trị lý luận vượt thời gian của Cương lĩnh xây dựng đất nước năm 1991?",
    options: [
      "Tổng kết bài học cách mạng, đúc kết 6 đặc trưng và 7 phương hướng lớn.",
      "Quyết định đưa Việt Nam chuyển hoàn toàn sang nền kinh tế tư bản.",
      "Bãi bỏ toàn bộ vai trò quản lý vĩ mô của Nhà nước trong kinh tế.",
      "Tuyên bố giải tán hệ thống các hợp tác xã nông nghiệp địa phương."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Cương lĩnh 1991 là ngọn cờ tư tưởng đúc kết bài học lịch sử, chỉ rõ 6 đặc trưng và 7 phương hướng phát triển CNXH."
  },
  {
    id: "lsd-dh7-d1-027",
    examSet: 1,
    sectionId: "dh-7-grp-3",
    subsectionId: "dh-7-sec-3",
    question: "Tại sao việc khẳng định Tư tưởng Hồ Chí Minh tại ĐH VII là bước phát triển tư duy lý luận?",
    options: [
      "Khẳng định giá trị dân tộc gắn liền với thời đại, nâng tầm nền tảng.",
      "Vì Tư tưởng Hồ Chí Minh hoàn toàn thay thế cho Chủ nghĩa Mác.",
      "Bởi vì nó làm cho Đảng không cần tham khảo kinh nghiệm nước ngoài.",
      "Vì nó giúp giải quyết dứt điểm mọi khó khăn khủng hoảng tài chính."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Lần đầu tiên khẳng định Tư tưởng Hồ Chí Minh cùng Chủ nghĩa Mác - Lênin là nền tảng tư tưởng, thể hiện sự trưởng thành lý luận."
  },
  {
    id: "lsd-dh7-d1-028",
    examSet: 1,
    sectionId: "dh-7-grp-3",
    subsectionId: "dh-7-sec-3",
    question: "Phân tích ý nghĩa của bản lĩnh chính trị Đảng ta trước cuộc khủng hoảng Đông Âu 1991?",
    options: [
      "Giữ vững định hướng XHCN, không chao đảo nghiêng ngả trước biến động.",
      "Tự động giải tán các tổ chức Đảng để thành lập chính quyền tư bản.",
      "Áp đặt chính sách bao cấp quan liêu trở lại để kiểm soát xã hội.",
      "Cắt đứt toàn bộ quan hệ đối ngoại với các nước phát triển phương."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Bản lĩnh chính trị kiên cường: Giữ vững mục tiêu CNXH, dũng cảm Đổi mới có nguyên tắc, bảo vệ thành quả cách mạng."
  },
  {
    id: "lsd-dh7-d1-029",
    examSet: 1,
    sectionId: "dh-7-grp-3",
    subsectionId: "dh-7-sec-3",
    question: "Ý nghĩa của 4 nguy cơ được Hội nghị giữa nhiệm kỳ khóa VII (1/1994) cảnh báo là gì?",
    options: [
      "Cảnh báo toàn Đảng toàn dân nhận diện nguy cơ để chủ động phòng chống.",
      "Nhằm mục đích gây hoang mang lo sợ trong đội ngũ cán bộ công chức.",
      "Để tuyên bố ngừng công cuộc Đổi mới kinh tế mở cửa hội nhập quốc.",
      "Để đổ lỗi cho hoàn cảnh lịch sử khách quan mà không sửa chữa khuyết."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "4 nguy cơ (tụt hậu kinh tế, chệch hướng, tham nhũng, diễn biến hòa bình) giúp Đảng tỉnh táo, tăng cường sức chiến đấu."
  },
  {
    id: "lsd-dh7-d1-030",
    examSet: 1,
    sectionId: "dh-7-grp-3",
    subsectionId: "dh-7-sec-3",
    question: "Mối quan hệ giữa phát triển kinh tế và đảm bảo an ninh quốc phòng tại ĐH VII ra sao?",
    options: [
      "Phát triển kinh tế là trọng tâm, củng cố quốc phòng an ninh là nhiệm vụ thường xuyên.",
      "Chỉ tập trung dồn sức phát triển kinh tế mà xem nhẹ hoàn toàn quốc phòng an ninh.",
      "Chỉ tập trung thực hiện nhiệm vụ quân sự mà bỏ qua các mục tiêu phát triển kinh tế.",
      "Tách rời hai nhiệm vụ trọng yếu thành hai mảng hoạt động hoàn toàn độc lập nhau."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Phát triển kinh tế là trọng tâm, xây dựng Đảng là thấu suốt, củng cố quốc phòng an ninh là nhiệm vụ trọng yếu thường xuyên."
  },
  {
    id: "lsd-dh7-d1-031",
    examSet: 1,
    sectionId: "dh-7-grp-3",
    subsectionId: "dh-7-sec-3",
    question: "Tại sao tôn chỉ 'Việt Nam muốn là bạn' lại mở đường cho Việt Nam bình thường hóa quan hệ quốc tế?",
    options: [
      "Xóa bỏ định kiến khép kín, chủ động xây dựng lòng tin và hợp tác song phương.",
      "Vì các nước tư bản bắt buộc Việt Nam phải đưa ra tuyên bố ngoại giao.",
      "Bởi vì tôn chỉ này giúp Việt Nam nhận viện trợ tài chính không điều kiện.",
      "Vì nó giúp Việt Nam từ bỏ các nghĩa vụ quốc tế đối với các nước bạn."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Tôn chỉ 'Việt Nam muốn là bạn' phá vỡ thế bao vây cấm vận, là tiền đề bình thường hóa quan hệ với Trung Quốc (1991) và Mỹ (1995)."
  },
  {
    id: "lsd-dh7-d1-032",
    examSet: 1,
    sectionId: "dh-7-grp-3",
    subsectionId: "dh-7-sec-3",
    question: "Bài học lớn nhất về xây dựng nền kinh tế thị trường định hướng XHCN từ ĐH VII là gì?",
    options: [
      "Sử dụng cơ chế thị trường làm công cụ phát triển nhưng giữ vững vai trò quản vĩ.",
      "Để thị trường tự do hoàn toàn thao túng mà không có sự quản lý nhà nước.",
      "Quay lại cơ chế phân phối tem phiếu bao cấp như giai đoạn trước 1986.",
      "Giao toàn bộ quyền quản lý kinh tế cho các tập đoàn tư bản tư nhân."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Kinh tế thị trường là công cụ phân bổ nguồn lực; định hướng XHCN giữ vững mục tiêu vì con người và tiến bộ xã hội."
  },
  {
    id: "lsd-dh7-d1-033",
    examSet: 1,
    sectionId: "dh-7-grp-3",
    subsectionId: "dh-7-sec-3",
    question: "Phân tích giá trị của 6 đặc trưng xã hội XHCN trong Cương lĩnh 1991 đối với định hướng phát triển?",
    options: [
      "Mô hình hóa mục tiêu CNXH một cách khoa học, làm kim chỉ nam xây dựng đất.",
      "Làm cho toàn bộ các mục tiêu phát triển kinh tế bị gò bó không đổi mới.",
      "Chỉ là các tuyên bố lý thuyết không có giá trị thực tiễn quản lý xã hội.",
      "Bãi bỏ hoàn toàn các giá trị đạo đức văn hóa truyền thống của dân tộc."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "6 đặc trưng Cương lĩnh 1991 phác thảo chân dung tổng quát về xã hội XHCN Việt Nam, tạo sự thống nhất tư tưởng toàn Đảng."
  },
  {
    id: "lsd-dh7-d1-034",
    examSet: 1,
    sectionId: "dh-7-grp-3",
    subsectionId: "dh-7-sec-3",
    question: "Sự khác biệt căn bản giữa Cương lĩnh 1991 và các văn kiện thời kỳ bao cấp là gì?",
    options: [
      "Nhìn nhận đúng tính chất phức tạp lâu dài của thời kỳ quá độ, tôn trọng thực tế.",
      "Quay lại tư tưởng ưu tiên công nghiệp nặng duy ý chí bằng mọi giá tài chính.",
      "Từ bỏ hoàn toàn vai trò quản lý vĩ mô của Nhà nước pháp quyền xã hội.",
      "Không thừa nhận sự tồn tại của nền kinh tế nhiều thành phần trong xã hội."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Cương lĩnh 1991 nhìn thẳng sự thật, thừa nhận tính chất lâu dài của thời kỳ quá độ và sự tồn tại khách quan của kinh tế nhiều thành phần."
  },
  {
    id: "lsd-dh7-d1-035",
    examSet: 1,
    sectionId: "dh-7-grp-3",
    subsectionId: "dh-7-sec-3",
    question: "Tại sao công tác phòng chống tham nhũng được nâng lên thành 1 trong 4 nguy cơ tại Hội nghị 1994?",
    options: [
      "Tham nhũng làm suy giảm niềm tin nhân dân, xói mòn bản chất bộ máy Nhà nước.",
      "Vì tham nhũng giúp cho nền kinh tế phát triển nhanh hơn dự kiến ban đầu.",
      "Bởi vì tham nhũng là hiện tượng bắt buộc phải có trong kinh tế thị trường.",
      "Nhằm mục đích hạ thấp uy tín của cán bộ quản lý lâu năm trong hệ thống."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Tham nhũng là nguy cơ đe dọa sự tồn vong của chế độ, làm suy yếu sức chiến đấu của Đảng và niềm tin của nhân dân."
  },
  {
    id: "lsd-dh7-d1-036",
    examSet: 1,
    sectionId: "dh-7-grp-3",
    subsectionId: "dh-7-sec-3",
    question: "Nguyên nhân cốt lõi giúp Việt Nam vượt qua giai đoạn khó khăn nhất thập niên 90 là gì?",
    options: [
      "Đường lối Đổi mới đúng đắn của Cương lĩnh 1991 và sự đồng lòng của nhân dân.",
      "Do sự hỗ trợ tài chính khổng lồ từ các quốc gia tư bản thuộc khối NATO.",
      "Do nền kinh tế tự động thoát khỏi lạm phát mà không cần chính sách can.",
      "Do sự can thiệp trực tiếp của các tổ chức quốc tế vào quản lý vĩ mô."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đường lối Cương lĩnh 1991 đúng đắn, bản lĩnh kiên định của Đảng và sự đoàn kết nỗ lực của toàn thể nhân dân."
  },

  // 37-40: Outside (4 questions - Practical Application)
  {
    id: "lsd-dh7-d1-037",
    examSet: 1,
    sectionId: "dh-7-grp-4",
    subsectionId: "dh-7-sec-4",
    question: "Bài học về kiên định nền tảng tư tưởng từ ĐH VII nhắc nhở thế hệ trẻ điều gì trước thông tin xấu độc?",
    options: [
      "Giữ vững bản lĩnh chính trị, tỉnh táo nhận diện và đấu tranh phản bác quan điểm sai trái.",
      "Thụ động tin theo mọi thông tin sai lệch giả mạo không qua kiểm chứng trên mạng xã hội.",
      "Chia sẻ rộng rãi các nội dung giật gân gây tổn hại trực tiếp tới uy tín của Đảng ta.",
      "Thờ ơ hoàn toàn không quan tâm tới các vấn đề bảo vệ an ninh tư tưởng chính trị chung."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Giữ vững bản lĩnh tư tưởng, nâng cao sức đề kháng trước các quan điểm sai trái, bảo vệ nền tảng tư tưởng của Đảng."
  },
  {
    id: "lsd-dh7-d1-038",
    examSet: 1,
    sectionId: "dh-7-grp-4",
    subsectionId: "dh-7-sec-4",
    question: "Từ phương châm đối ngoại 'Việt Nam muốn là bạn' tại ĐH VII, ngoại giao hiện nay phát triển thế nào?",
    options: [
      "Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm.",
      "Đóng cửa ngoại giao chỉ hợp tác với các quốc gia láng giềng gần nhất.",
      "Chọn bên trong các tranh chấp xung đột quân sự giữa các cường quốc lớn.",
      "Từ bỏ các cam kết quốc tế về bảo vệ môi trường và ứng phó biến đổi."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Vận dụng nâng tầm: Từ 'muốn là bạn' (ĐH VII) đến 'là bạn, đối tác tin cậy, thành viên có trách nhiệm' trong cộng đồng quốc tế."
  },
  {
    id: "lsd-dh7-d1-039",
    examSet: 1,
    sectionId: "dh-7-grp-4",
    subsectionId: "dh-7-sec-4",
    question: "Bài học về cảnh báo nguy cơ tham nhũng từ Hội nghị 1994 vận dụng trong công tác cán bộ hiện nay ra sao?",
    options: [
      "Kiên quyết 'không có vùng cấm, không có ngoại lệ' trong đấu tranh chống tham nhũng.",
      "Né tránh không xử lý các vụ việc tiêu cực liên quan tới cán bộ giữ chức vụ.",
      "Bao che cho các hành vi sai phạm nếu cán bộ có nhiều đóng góp quá khứ.",
      "Cắt giảm vai trò giám sát của Mặt trận Tổ quốc và nhân dân đối với cán."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Đấu tranh chống tham nhũng, tiêu cực với tinh thần 'không có vùng cấm, không có ngoại lệ', giữ sạch bộ máy."
  },
  {
    id: "lsd-dh7-d1-040",
    examSet: 1,
    sectionId: "dh-7-grp-4",
    subsectionId: "dh-7-sec-4",
    question: "Ý nghĩa của Cương lĩnh 1991 truyền cảm hứng gì cho công cuộc đổi mới sáng tạo quốc gia hiện nay?",
    options: [
      "Kiên định mục tiêu độc lập dân tộc và CNXH, sáng tạo tìm con đường bứt phá.",
      "Bảo thủ giữ nguyên mọi mô hình quản lý cũ không chịu thay đổi theo thời đại.",
      "Chạy theo các xu hướng mạo hiểm không có cơ sở khoa học và thực tiễn.",
      "Xa rời các giá trị lịch sử truyền thống văn hóa tốt đẹp của dân tộc ta."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Kiên định mục tiêu chiến lược nhưng linh hoạt sáng tạo trong giải pháp, đưa đất nước phát triển nhanh và bền vững."
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
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ CHUẨN 1: ĐẠI HỘI VII (6/1991)
   Mã Bộ Đề: questions-lsd-dh7-part1.js
   Số lượng: 40 câu cố định (36 Inside + 4 Outside)
   ============================================================ */

export const questionsLsdDh7Part1 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh7-part1.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh7-part1.js");
}
