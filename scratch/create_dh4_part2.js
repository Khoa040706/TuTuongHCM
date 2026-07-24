import fs from "fs";

// 40 questions for Fixed Exam Set 2 (Đại hội IV - 12/1976)
// 36 Inside (7 Easy, 18 Medium, 11 Hard) + 4 Outside
const questions = [
  // 1-7: Easy (7 questions)
  {
    id: "lsd-dh4-d2-001",
    examSet: 2,
    sectionId: "dh-4-grp-1",
    subsectionId: "dh-4-sec-1",
    question: "Tên gọi nước Việt Nam thống nhất được Quốc hội quyết định năm 1976 trước Đại hội IV là gì?",
    options: [
      "Đó là tên gọi nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.",
      "Đó là tên gọi nước Việt Nam Dân chủ Cộng hòa trước đây.",
      "Đó là tên gọi nước Cộng hòa Miền Nam Việt Nam mới lập.",
      "Đó là tên gọi nước Việt Nam Độc lập Đồng minh Hội xưa."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Năm 1976, Quốc hội thống nhất quyết định đặt tên nước là Cộng hòa Xã hội Chủ nghĩa Việt Nam."
  },
  {
    id: "lsd-dh4-d2-002",
    examSet: 2,
    sectionId: "dh-4-grp-1",
    subsectionId: "dh-4-sec-1",
    question: "Số lượng đảng viên cả nước mà Đại hội IV (12/1976) đại diện là bao nhiêu?",
    options: [
      "Đại hội đại diện cho khoảng hơn 1,5 triệu đảng viên cả nước.",
      "Đại hội đại diện cho khoảng hơn 50 vạn đảng viên trong nước.",
      "Đại hội đại diện cho khoảng hơn 76 vạn đảng viên trong nước.",
      "Đại hội đại diện cho khoảng hơn 3 triệu đảng viên cả nước."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội IV đại diện cho hơn 1,5 triệu đảng viên trong cả nước."
  },
  {
    id: "lsd-dh4-d2-003",
    examSet: 2,
    sectionId: "dh-4-grp-1",
    subsectionId: "dh-4-sec-1",
    question: "Đại hội IV (12/1976) đã khẳng định cả nước cùng thực hiện nhiệm vụ chiến lược nào?",
    options: [
      "Cả nước cùng tiến thẳng lên xây dựng chủ nghĩa xã hội.",
      "Cả nước cùng tiến hành cuộc cách mạng dân tộc dân chủ.",
      "Cả nước cùng tập trung phát triển kinh tế tư bản tư nhân.",
      "Cả nước cùng đứng trung lập không tham gia phe nhóm nào."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội IV quyết định đưa cả nước tiến thẳng lên chủ nghĩa xã hội."
  },
  {
    id: "lsd-dh4-d2-004",
    examSet: 2,
    sectionId: "dh-4-grp-1",
    subsectionId: "dh-4-sec-1",
    question: "Đồng chí Lê Duẩn được bầu giữ chức vụ lãnh đạo tối cao nào tại Đại hội IV (12/1976)?",
    options: [
      "Đồng chí được bầu giữ chức vụ Tổng Bí thư Trung ương Đảng.",
      "Đồng chí được bầu giữ chức vụ Bí thư Thứ nhất Trung ương.",
      "Đồng chí được bầu giữ chức vụ Chủ tịch Trung ương Đảng ta.",
      "Đồng chí được bầu giữ chức vụ Trưởng ban Tổ chức Trung ương."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội IV bầu đồng chí Lê Duẩn làm Tổng Bí thư Ban Chấp hành Trung ương."
  },
  {
    id: "lsd-dh4-d2-005",
    examSet: 2,
    sectionId: "dh-4-grp-1",
    subsectionId: "dh-4-sec-1",
    question: "Phương hướng Kế hoạch 5 năm lần thứ hai (1976-1980) được Đại hội IV đề ra cho khu vực nào?",
    options: [
      "Được đề ra áp dụng nhất quán trên phạm vi toàn bộ cả nước.",
      "Được đề ra áp dụng riêng biệt duy nhất cho khu vực miền Bắc.",
      "Được đề ra áp dụng riêng biệt duy nhất cho khu vực miền Nam.",
      "Được đề ra áp dụng riêng cho các vùng căn cứ địa miền núi."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Kế hoạch 5 năm lần thứ hai (1976-1980) được thực hiện trên phạm vi cả nước."
  },
  {
    id: "lsd-dh4-d2-006",
    examSet: 2,
    sectionId: "dh-4-grp-1",
    subsectionId: "dh-4-sec-1",
    question: "Đại hội IV (12/1976) quyết định đổi tên Đảng Lao động Việt Nam trở lại tên gọi nào?",
    options: [
      "Trở lại tên gọi chính thức là Đảng Cộng sản Việt Nam.",
      "Trở lại tên gọi chính thức là Đảng Cộng sản Đông Dương.",
      "Trở lại tên gọi chính thức là Hội Nghiên cứu Mác-xít.",
      "Trở lại tên gọi chính thức là Mặt trận Việt Nam Độc lập."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội IV quyết định đổi tên Đảng Lao động Việt Nam trở lại tên gọi Đảng Cộng sản Việt Nam (tên thành lập 1930)."
  },
  {
    id: "lsd-dh4-d2-007",
    examSet: 2,
    sectionId: "dh-4-grp-1",
    subsectionId: "dh-4-sec-1",
    question: "Đại hội IV (12/1976) đã khẳng định yếu tố nào là then chốt trong 3 cuộc cách mạng?",
    options: [
      "Cách mạng kỹ thuật được khẳng định là yếu tố then chốt.",
      "Cách mạng quan hệ sản xuất được khẳng định là then chốt.",
      "Cách mạng tư tưởng văn hóa được khẳng định là then chốt.",
      "Cách mạng thương mại dịch vụ được khẳng định là then chốt."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Trong 3 cuộc cách mạng, Đại hội IV khẳng định Cách mạng kỹ thuật là then chốt."
  },

  // 8-25: Medium (18 questions)
  {
    id: "lsd-dh4-d2-008",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Đại hội IV (12/1976) xác định vai trò của công nghiệp nặng trong quá trình công nghiệp hóa ra sao?",
    options: [
      "Ưu tiên phát triển công nghiệp nặng một cách hợp lý trên cơ sở nông nghiệp.",
      "Tập trung toàn bộ vốn đầu tư cho công nghiệp nặng mà bỏ qua nông nghiệp.",
      "Bỏ qua hoàn toàn công nghiệp nặng để chỉ tập trung vào ngành du dịch.",
      "Thực hiện công nghiệp hóa theo mô hình thị trường tư bản phương Tây."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Ưu tiên phát triển công nghiệp nặng một cách hợp lý trên cơ sở phát triển nông nghiệp và công nghiệp nhẹ."
  },
  {
    id: "lsd-dh4-d2-009",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Nhiệm vụ cải tạo xã hội chủ nghĩa ở miền Nam giai đoạn 1976-1980 được tiến hành ra sao?",
    options: [
      "Cải tạo xã hội chủ nghĩa gắn liền với công cuộc xây dựng chủ nghĩa xã hội.",
      "Cho phép duy trì lâu dài các thành phần kinh tế tư bản tư nhân bóc thấu.",
      "Tịch thu toàn bộ tài sản tư nhân để chia đều cho nhân dân nghèo thành thị.",
      "Bãi bỏ hoàn toàn các cơ sở sản xuất kinh doanh thương mại ở thành phố."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Miền Nam tiến hành cải tạo XHCN gắn liền với xây dựng CNXH, xóa bỏ các thành phần bóc thấu tư bản bóc bóc."
  },
  {
    id: "lsd-dh4-d2-010",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Chế độ làm chủ tập thể xã hội chủ nghĩa được Đại hội IV (12/1976) xác định thuộc về ai?",
    options: [
      "Thuộc về nhân dân lao động mà nòng cốt là công nhân, nông dân, trí thức.",
      "Thuộc về riêng tầng lớp cán bộ lãnh đạo các cơ quan quản lý nhà nước.",
      "Thuộc về các tập đoàn tư nhân nước ngoài có vốn đầu tư lớn vào nước.",
      "Thuộc về riêng tầng lớp thương gia kinh doanh tự do ở các thành thị lớn."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Chế độ làm chủ tập thể XHCN thuộc về nhân dân lao động, trên nền tảng liên minh công nhân, nông dân và trí thức."
  },
  {
    id: "lsd-dh4-d2-011",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Mối quan hệ giữa ba cuộc cách mạng (QHSX, TTVH, Kỹ thuật) tại Đại hội IV được xác định thế nào?",
    options: [
      "Tiến hành đồng thời, tác động lẫn nhau, Cách mạng Kỹ thuật là then chốt.",
      "Ba cuộc cách mạng diễn ra tuần tự từng cái một không liên quan đến nhau.",
      "Cách mạng quan hệ sản xuất là khâu duy nhất không cần cách mạng kỹ thuật.",
      "Cách mạng tư tưởng văn hóa là khâu then chốt quyết định nền kinh tế."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Ba cuộc cách mạng tiến hành đồng thời, kết hợp chặt chẽ, trong đó Cách mạng Kỹ thuật là then chốt."
  },
  {
    id: "lsd-dh4-d2-012",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Mục tiêu xây dựng con người mới xã hội chủ nghĩa được Đại hội IV (12/1976) đặt ra là gì?",
    options: [
      "Có tư tưởng XHCN, có lòng yêu nước, có trình độ văn hóa kỹ thuật cao.",
      "Chỉ cần có sức khỏe lao động cơ bắp không cần học tập trình độ văn.",
      "Tập trung chạy theo các lối sống thực dụng cá nhân của các nước ngoài.",
      "Tự do hoạt động không tuân theo các quy định pháp luật của Nhà nước."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Con người mới XHCN có ý thức làm chủ tập thể, có tư tưởng XHCN, có lòng yêu nước và trình độ văn hóa, khoa học - kỹ thuật."
  },
  {
    id: "lsd-dh4-d2-013",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Số lượng ủy viên chính thức của Ban Chấp hành Trung ương Đảng được Đại hội IV (12/1976) bầu là bao nhiêu?",
    options: [
      "Ban Chấp hành Trung ương được bầu gồm 101 ủy viên chính thức và 32 dự khuyết.",
      "Ban Chấp hành Trung ương được bầu gồm 47 ủy viên chính thức và 31 dự khuyết.",
      "Ban Chấp hành Trung ương được bầu gồm 29 ủy viên chính thức và 10 dự khuyết.",
      "Ban Chấp hành Trung ương được bầu gồm 60 ủy viên chính thức và 20 dự khuyết."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "BCH Trung ương khóa IV gồm 101 ủy viên chính thức và 32 ủy viên dự khuyết."
  },
  {
    id: "lsd-dh4-d2-014",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Vai trò của Nhà nước xã hội chủ nghĩa được Đại hội IV (12/1976) đúc kết trong cơ chế lãnh đạo là gì?",
    options: [
      "Nhà nước là công cụ quản lý nền kinh tế xã hội dưới sự lãnh đạo của Đảng.",
      "Nhà nước là cơ quan quyền lực cao nhất độc lập không chịu sự lãnh đạo.",
      "Nhà nước là tổ chức từ thiện thuần túy phân phát hàng hóa cho nhân dân.",
      "Nhà nước chỉ làm nhiệm vụ quản lý các doanh nghiệp tư nhân ở thành thị."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Trong cơ chế 'Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ', Nhà nước là công cụ quản lý chuyên chính vô sản."
  },
  {
    id: "lsd-dh4-d2-015",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Tầm quan trọng của việc thống nhất đất nước về mặt nhà nước (1976) đối với Đại hội IV là gì?",
    options: [
      "Tạo cơ sở pháp lý và chính trị thống nhất để cả nước cùng tiến lên CNXH.",
      "Là điều kiện bắt buộc để nhận được các khoản viện trợ từ các nước Mỹ.",
      "Giúp cho bộ máy chính quyền cũ ở miền Nam tự động được khôi phục lại.",
      "Nhằm mục đích chia tách hệ thống quản lý kinh tế giữa hai miền Nam Bắc."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Hoàn thành thống nhất về mặt nhà nước tạo cơ sở chính trị - pháp lý đồng bộ để cả nước tiến lên CNXH."
  },
  {
    id: "lsd-dh4-d2-016",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Mối quan hệ giữa phát triển nông nghiệp và công nghiệp nhẹ tại Đại hội IV được xác định ra sao?",
    options: [
      "Nông nghiệp và công nghiệp nhẹ là nền tảng để phát triển công nghiệp nặng.",
      "Nông nghiệp và công nghiệp nhẹ hoàn toàn bị bỏ qua để dồn lực cho quân sự.",
      "Chỉ phát triển công nghiệp nhẹ ở miền Nam và phát triển nông nghiệp ở Bắc.",
      "Hai ngành này hoạt động độc lập không có mối quan hệ hỗ trợ lẫn nhau."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đẩy mạnh phát triển nông nghiệp và công nghiệp nhẹ làm nền tảng vững chắc cho công nghiệp nặng."
  },
  {
    id: "lsd-dh4-d2-017",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Nhiệm vụ quốc phòng an ninh được Đại hội IV (12/1976) xác định trong tình hình mới là gì?",
    options: [
      "Bảo vệ vững chắc độc lập, chủ quyền, toàn vẹn lãnh thổ và an ninh quốc gia.",
      "Giải tán bộ đội chủ lực để chuyển toàn bộ sang làm nhiệm vụ kinh tế.",
      "Ủy quyền bảo vệ biên giới cho các lực lượng quân đội tình nguyện quốc tế.",
      "Chỉ tập trung bảo vệ an ninh ở miền Bắc mà bỏ qua khu vực biên giới Nam."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Củng cố quốc phòng an ninh, bảo vệ vững chắc độc lập, chủ quyền, toàn vẹn lãnh thổ của Tổ quốc thống nhất."
  },
  {
    id: "lsd-dh4-d2-018",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Tại sao Đại hội IV (12/1976) nhấn mạnh việc kết hợp kinh tế với quốc phòng?",
    options: [
      "Đảm bảo vừa phát triển kinh tế vừa sẵn sàng chiến đấu bảo vệ Tổ quốc.",
      "Nhằm mục đích chuyển toàn bộ các nhà máy kinh tế thành xưởng vũ khí.",
      "Để giảm bớt ngân sách chi cho công tác phát triển giáo dục y tế.",
      "Vì các nước xã hội chủ nghĩa bắt buộc ta phải duy trì quân đội lớn."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Kết hợp kinh tế với quốc phòng, quốc phòng với kinh tế đảm bảo vừa xây dựng vừa bảo vệ Tổ quốc."
  },
  {
    id: "lsd-dh4-d2-019",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Ý nghĩa của mối quan hệ đoàn kết đặc biệt Việt Nam - Lào - Campuchia tại ĐH IV là gì?",
    options: [
      "Củng cố liên minh chiến đấu và hợp tác phát triển kinh tế 3 nước Đông Dương.",
      "Nhằm mục đích sáp nhập lãnh thổ 3 nước thành một quốc gia duy nhất.",
      "Đặt bộ máy chính quyền nước bạn dưới sự quản lý trực tiếp của ta.",
      "Thay thế hoàn toàn mối quan hệ ngoại giao giữa ta với các nước XHCN."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Thắt chặt mối quan hệ đoàn kết đặc biệt kề vai sát cánh giữa 3 dân tộc Việt Nam, Lào, Campuchia."
  },
  {
    id: "lsd-dh4-d2-020",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Điểm bổ sung quan trọng trong Điều lệ Đảng được thông qua tại Đại hội IV (12/1976) là gì?",
    options: [
      "Quy định nhiệm kỳ Đại hội Đảng toàn quốc là 5 năm một lần.",
      "Cho phép đảng viên được tư hữu tài sản không giới hạn số lượng.",
      "Bãi bỏ quy định kỷ luật đối với các hành vi tham nhũng tiêu cực.",
      "Xóa bỏ các chi bộ cơ sở ở địa phương để tập trung vào Bộ Chính trị."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Điều lệ sửa đổi quy định nhiệm kỳ Đại hội toàn quốc của Đảng là 5 năm một lần, khôi phục chức danh Tổng Bí thư."
  },
  {
    id: "lsd-dh4-d2-021",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Đại hội IV (12/1976) đúc kết nguyên nhân quyết định thắng lợi của cách mạng Việt Nam là gì?",
    options: [
      "Sự lãnh đạo đúng đắn của Đảng Cộng sản Việt Nam và tinh thần yêu nước.",
      "Do sự suy yếu tự động của các cường quốc thực dân đế quốc xâm lược.",
      "Do ta nhận được toàn bộ tài chính viện trợ vô điều kiện từ tư bản.",
      "Do chính quyền cũ tự nguyện trao lại toàn bộ quyền lực cho nhân dân."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Thắng lợi của cách mạng Việt Nam trước hết là nhờ sự lãnh đạo đúng đắn, sáng tạo của Đảng Cộng sản Việt Nam."
  },
  {
    id: "lsd-dh4-d2-022",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Nhiệm vụ khôi phục kinh tế hậu chiến giai đoạn 1976-1980 tập trung vào việc gì?",
    options: [
      "Hàn gắn vết thương chiến tranh, khôi phục các cơ sở hạ tầng bị tàn phá.",
      "Tập trung xây dựng các khu vui chơi giải trí lớn tại các đô thị lớn.",
      "Bỏ qua các cơ sở hạ tầng cũ để xây dựng mới hoàn toàn trên đất trống.",
      "Chỉ tập trung khôi phục kinh tế ở miền Bắc không hỗ trợ miền Nam."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Nhiệm vụ: Hàn gắn vết thương chiến tranh, khôi phục cầu đường, nhà máy, đồng ruộng bị tàn phá nặng nề."
  },
  {
    id: "lsd-dh4-d2-023",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Tầm quan trọng của công tác tư tưởng văn hóa tại Đại hội IV (12/1976) đối với miền Nam là gì?",
    options: [
      "Xóa bỏ tàn dư văn hóa độc hại nô dịch của chế độ cũ, xây dựng văn hóa mới.",
      "Bãi bỏ toàn bộ các trường học giáo dục ở miền Nam để xây dựng mới.",
      "Cho phép xuất bản tự do các ấn phẩm văn hóa đồi dọa từ nước ngoài.",
      "Cấm đoán tuyệt đối việc nghe nhạc truyền thống dân tộc ở miền Nam."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Ở miền Nam: Xóa bỏ tàn dư văn hóa nô dịch đồi dụy của đế quốc ngụy quyền, xây dựng đời sống văn hóa mới XHCN."
  },
  {
    id: "lsd-dh4-d2-024",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Kế hoạch 5 năm lần thứ hai (1976-1980) đặt ra mục tiêu phát triển văn hóa xã hội ra sao?",
    options: [
      "Xóa nạn mù chữ, phát triển hệ thống giáo dục, y tế cho toàn bộ nhân dân.",
      "Thu phí giáo dục và y tế giá cao đối với người dân nghèo nông thôn.",
      "Giảm bớt số lượng trường học để tập trung ngân sách cho công nghiệp.",
      "Chỉ phát triển giáo dục bậc đại học bỏ qua giáo dục phổ thông cơ sở."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Phát triển mạnh sự nghiệp giáo dục, xóa nạn mù chữ ở miền Nam, nâng cao đời sống văn hóa, y tế cho nhân dân."
  },
  {
    id: "lsd-dh4-d2-025",
    examSet: 2,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Vì sao Đại hội IV (12/1976) được coi là mốc mở ra kỷ nguyên mới của dân tộc?",
    options: [
      "Kỷ nguyên độc lập, thống nhất và cả nước tiến lên chủ nghĩa xã hội.",
      "Kỷ nguyên phát triển kinh tế tư bản chủ nghĩa hoàn toàn mở cửa tự do.",
      "Kỷ nguyên phân chia quyền lực giữa các tập đoàn kinh tế tư nhân lớn.",
      "Kỷ nguyên đứng trung lập hoàn toàn trong mọi vấn đề chính trị quốc tế."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội IV mở ra kỷ nguyên mới: Kỷ nguyên độc lập, thống nhất và cả nước tiến lên chủ nghĩa xã hội."
  },

  // 26-36: Hard (11 questions)
  {
    id: "lsd-dh4-d2-026",
    examSet: 2,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Phân tích sự khác biệt về đường lối giữa Đại hội III (1960) và Đại hội IV (1976)?",
    options: [
      "ĐH III thực hiện 2 chiến lược ở 2 miền, ĐH IV cả nước tiến lên CNXH.",
      "ĐH III tập trung cải cách ruộng đất, ĐH IV tập trung đổi tên Đảng ta.",
      "ĐH III lãnh đạo chống Pháp, ĐH IV lãnh đạo công cuộc Đổi mới năm 1986.",
      "ĐH III họp tại Tuyên Quang, ĐH IV họp tại Ma Cao thuộc Trung Quốc."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "ĐH III (1960): 2 chiến lược ở 2 miền; ĐH IV (1976): Đất nước thống nhất, cả nước cùng thực hiện 1 chiến lược là tiến lên CNXH."
  },
  {
    id: "lsd-dh4-d2-027",
    examSet: 2,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Tại sao việc đưa cả nước tiến thẳng lên CNXH bỏ qua giai đoạn TBCN lại là sự lựa chọn lịch sử?",
    options: [
      "Phù hợp với nguyện vọng nhân dân và quy luật phát triển thời đại.",
      "Vì giai cấp tư sản dân tộc Việt Nam đã tự nguyện nhượng lại quyền.",
      "Vì các nước tư bản phương Tây đã hoàn toàn sụp đổ về mặt kinh tế.",
      "Vì Quốc tế Cộng sản bắt buộc Việt Nam phải tiến thẳng lên CNXH."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Con đường tiến thẳng lên CNXH bỏ qua TBCN phù hợp với bản chất cách mạng Việt Nam, đáp ứng nguyện vọng hòa bình, ấm no của nhân dân."
  },
  {
    id: "lsd-dh4-d2-028",
    examSet: 2,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Nguyên nhân chủ quan dẫn tới những khó khăn kinh tế giai đoạn 1976-1980 sau ĐH IV là gì?",
    options: [
      "Nôn nóng duy ý chí trong việc duy trì cơ chế quan liêu bao cấp tập trung.",
      "Do không chú trọng công tác xây dựng Đảng và đào tạo đội ngũ cán bộ.",
      "Do bãi bỏ hoàn toàn các ngành công nghiệp nặng và công nghiệp nhẹ.",
      "Do từ bỏ mối quan hệ ngoại giao hữu nghị với các nước xã hội chủ nghĩa."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Nguyên nhân chủ quan: Nôn nóng duy ý chí, duy trì quá lâu cơ chế tập trung quan liêu bao cấp, chưa nhận thức hết độ phức tạp thời kỳ quá độ."
  },
  {
    id: "lsd-dh4-d2-029",
    examSet: 2,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Phân tích mối quan hệ giữa công nghiệp và nông nghiệp trong đường lối công nghiệp hóa ĐH IV?",
    options: [
      "Nông nghiệp là cơ sở nền tảng, công nghiệp nặng là nòng cốt định hướng.",
      "Công nghiệp nặng phát triển độc lập không cần dựa vào nông nghiệp.",
      "Nông nghiệp phát triển độc lập không cần tới sự hỗ trợ của kỹ thuật.",
      "Hai ngành này thay thế hoàn toàn lẫn nhau trong nền kinh tế quốc dân."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Công nghiệp nặng là nòng cốt nhưng phải phát triển trên cơ sở kết hợp chặt chẽ với phát triển nông nghiệp và công nghiệp nhẹ."
  },
  {
    id: "lsd-dh4-d2-030",
    examSet: 2,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Sự sáng tạo của Đảng trong việc xác định 3 cuộc cách mạng tại Đại hội IV là gì?",
    options: [
      "Xác định đúng mối quan hệ giữa quan hệ sản xuất, kỹ thuật và tư tưởng.",
      "Tách rời hoàn toàn các lĩnh vực kinh tế, kỹ thuật và tư tưởng văn hóa.",
      "Coi cách mạng quan hệ sản xuất là yếu tố duy nhất quyết định tất cả.",
      "Coi cách mạng tư tưởng văn hóa là yếu tố duy nhất quyết định kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Sự sáng tạo: Thấy rõ mối quan hệ biện chứng giữa biến đổi QHSX, hiện đại hóa kỹ thuật và nâng cao ý thức tư tưởng con người XHCN."
  },
  {
    id: "lsd-dh4-d2-031",
    examSet: 2,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Tại sao việc cải tạo XHCN ở miền Nam giai đoạn 1976-1980 gặp nhiều vướng mắc thực tiễn?",
    options: [
      "Do áp dụng rập khuôn mô hình miền Bắc chưa phù hợp đặc thù miền Nam.",
      "Do nhân dân miền Nam không ủng hộ chính quyền cách mạng mới lập.",
      "Do giai cấp tư sản miền Nam có quy mô quá lớn hơn cả các nước tư bản.",
      "Do Đảng quyết định hủy bỏ công tác cải tạo giữa chừng không làm."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Do nôn nóng xóa bỏ ngay các thành phần kinh tế tư nhân ở miền Nam, áp dụng rập khuôn mô hình miền Bắc khi chưa đủ điều kiện."
  },
  {
    id: "lsd-dh4-d2-032",
    examSet: 2,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Tầm quan trọng của việc tổng kết 4 bài học chống Mỹ tại Đại hội IV đối với công tác ngoại giao là gì?",
    options: [
      "Bài học giơ cao hai ngọn cờ Độc lập và CNXH để tập hợp lực lượng quốc tế.",
      "Bài học đứng trung lập tuyệt đối không tham gia các liên minh quốc tế.",
      "Bài học phụ thuộc hoàn toàn vào sự thương lượng giữa các nước lớn.",
      "Bài học cắt đứt ngoại giao với các quốc gia có chế độ chính trị khác."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Ngoại giao Việt Nam giơ cao ngọn cờ chính nghĩa, kết hợp sức mạnh dân tộc với sức mạnh thời đại để tranh thủ sự giúp đỡ quốc tế."
  },
  {
    id: "lsd-dh4-d2-033",
    examSet: 2,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Ý nghĩa của việc khôi phục tên Đảng Cộng sản Việt Nam đối với phong trào cộng sản quốc tế là gì?",
    options: [
      "Khẳng định vị thế uy tín tiên phong của Đảng trên trường quốc tế.",
      "Nhằm mục đích tách rời khỏi phong trào cộng sản và công nhân quốc tế.",
      "Cho thấy sự phụ thuộc hoàn toàn vào sự chỉ đạo của Quốc tế Cộng sản.",
      "Làm giảm bớt sự tin tưởng của các Đảng anh em đối với cách mạng ta."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Khôi phục tên Đảng Cộng sản Việt Nam khẳng định bản lĩnh độc lập tự chủ và uy tín cao của Đảng trong phong trào cộng sản quốc tế."
  },
  {
    id: "lsd-dh4-d2-034",
    examSet: 2,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Bài học lịch sử lớn nhất về công tác quản lý kinh tế mà Đại hội IV để lại là gì?",
    options: [
      "Phải tôn trọng các quy luật kinh tế khách quan, bám sát thực tiễn.",
      "Cần tăng cường cơ chế quan liêu bao cấp tập trung nhiều hơn nữa.",
      "Nên bãi bỏ hoàn toàn vai trò quản lý kinh tế của Nhà nước XHCN.",
      "Phụ thuộc hoàn toàn vào các mô hình kinh tế nhập khẩu từ nước ngoài."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Bài học lớn: Phải nắm vững quy luật khách quan, chống chủ quan duy ý chí, bám sát thực tiễn sản xuất của nhân dân."
  },
  {
    id: "lsd-dh4-d2-035",
    examSet: 2,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Tại sao nói Đại hội IV (12/1976) đã chuẩn bị tiền đề thực tiễn cho công cuộc Đổi mới 1986?",
    options: [
      "Những vướng mắc thực tiễn thúc đẩy Đảng tìm tòi con đường Đổi mới.",
      "Vì tại Đại hội IV Đảng đã tuyên bố khởi xướng công cuộc Đổi mới ngay.",
      "Vì Đại hội IV đã bãi bỏ hoàn toàn cơ chế tập trung quan liêu bao cấp.",
      "Vì Đại hội IV quyết định chuyển sang kinh tế thị trường tư bản ngay."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Thực tiễn giai đoạn 1976-1980 giúp Đảng nhìn rõ những hạn chế của cơ chế cũ, từ đó khởi xướng các bước tìm tòi Đổi mới (như Nghị quyết Trung ương 6 khóa IV năm 1979)."
  },
  {
    id: "lsd-dh4-d2-036",
    examSet: 2,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Nguyên nhân căn bản giúp Đảng ta vượt qua các thử thách kinh tế biên giới sau Đại hội IV là gì?",
    options: [
      "Bản lĩnh vững vàng, sự đoàn kết thống nhất của toàn Đảng toàn dân.",
      "Do kẻ thù tự động rút lui không còn tiến hành các cuộc chiến tranh.",
      "Do nhận được nguồn viện trợ tài chính khổng lồ từ các nước phương Tây.",
      "Do bộ máy chính quyền cũ tự nguyện quay lại giúp đỡ quản lý kinh tế."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Bản lĩnh chính trị kiên cường, sự đoàn kết nhất trí trong Đảng và tinh thần yêu nước, chịu thương chịu khó của nhân dân."
  },

  // 37-40: Outside (4 questions - Practical Application)
  {
    id: "lsd-dh4-d2-037",
    examSet: 2,
    sectionId: "dh-4-grp-4",
    subsectionId: "dh-4-sec-4",
    question: "Bài học về kiên định con đường XHCN từ Đại hội IV (12/1976) được vận dụng thế nào hiện nay?",
    options: [
      "Kiên định mục tiêu Độc lập dân tộc và CNXH trong mọi bối cảnh biến động.",
      "Xa rời mục tiêu xã hội chủ nghĩa để chạy theo các mô hình tư bản hoàn toàn.",
      "Chỉ chú trọng phát triển kinh tế tư nhân mà xem nhẹ thành phần nhà nước.",
      "Tùy tiện thay đổi nền tảng tư tưởng Mác - Lênin theo các trào lưu bên ngoài."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Kiên định mục tiêu Độc lập dân tộc và Chủ nghĩa xã hội, giữ vững bản chất XHCN trong phát triển kinh tế thị trường."
  },
  {
    id: "lsd-dh4-d2-038",
    examSet: 2,
    sectionId: "dh-4-grp-4",
    subsectionId: "dh-4-sec-4",
    question: "Từ bài học xây dựng Chế độ làm chủ tập thể tại ĐH IV, chính sách hiện nay cần chú trọng điều gì?",
    options: [
      "Phát huy quyền làm chủ của nhân dân theo đúng phương châm 'Dân biết, dân bàn, dân làm, dân kiểm tra'.",
      "Hạn chế bớt các quyền tham gia đóng góp ý kiến của nhân dân vào các chính sách phát triển xã hội.",
      "Tập trung toàn bộ các quyền quyết định quản lý vào các cơ quan hành chính nhà nước cấp Trung ương.",
      "Xem nhẹ công tác giám sát phản biện xã hội của Mặt trận Tổ quốc và các tổ chức đoàn thể nhân dân."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Phát huy dân chủ XHCN, thực hiện tốt phương châm 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng'."
  },
  {
    id: "lsd-dh4-d2-039",
    examSet: 2,
    sectionId: "dh-4-grp-4",
    subsectionId: "dh-4-sec-4",
    question: "Bài học về kết hợp phát triển kinh tế với củng cố quốc phòng từ ĐH IV nhắc nhở doanh nghiệp điều gì?",
    options: [
      "Gắn hoạt động sản xuất kinh doanh với nhiệm vụ bảo vệ an ninh quốc phòng.",
      "Chỉ quan tâm tới lợi nhuận kinh tế mà xem nhẹ các nguy cơ an ninh mạng.",
      "Sẵn sàng vi phạm các quy định an ninh quốc gia để đạt mục tiêu doanh thu.",
      "Tuyệt đối không tham gia vào các dự án kinh tế kết hợp quốc phòng biên giới."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Doanh nghiệp cần gắn kết kinh tế với quốc phòng an ninh, tham gia bảo vệ chủ quyền quốc gia và an ninh kinh tế."
  },
  {
    id: "lsd-dh4-d2-040",
    examSet: 2,
    sectionId: "dh-4-grp-4",
    subsectionId: "dh-4-sec-4",
    question: "Ý nghĩa của tinh thần toàn thắng giải phóng dân tộc tại ĐH IV truyền cảm hứng gì cho thế hệ trẻ?",
    options: [
      "Khơi dậy lòng tự hào dân tộc, khát vọng cống hiến xây dựng đất nước giàu mạnh.",
      "Phai nhạt truyền thống yêu nước và phô trương các lối sống ngoại lai tiêu cực.",
      "Thiếu trách nhiệm đối với các nhiệm vụ học tập và nghĩa vụ bảo vệ Tổ quốc.",
      "Phủ nhận các thành quả cách mạng và sự hy sinh vô bờ bến của cha anh đi trước."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Khơi dậy khát vọng phát triển đất nước phồn vinh hạnh phúc, tự hào về lịch sử dân tộc và nỗ lực cống hiến sức trẻ."
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
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ CHUẨN 2: ĐẠI HỘI IV (12/1976)
   Mã Bộ Đề: questions-lsd-dh4-part2.js
   Số lượng: 40 câu cố định (36 Inside + 4 Outside)
   ============================================================ */

export const questionsLsdDh4Part2 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh4-part2.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh4-part2.js");
}
