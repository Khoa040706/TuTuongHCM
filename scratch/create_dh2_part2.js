import fs from "fs";

// 40 questions for Fixed Exam Set 2 (Đại hội II - 2/1951)
// 36 Inside (7 Easy, 18 Medium, 11 Hard) + 4 Outside
const questions = [
  // 1-7: Easy (7 questions)
  {
    id: "lsd-dh2-d2-001",
    examSet: 2,
    sectionId: "dh-2-grp-1",
    subsectionId: "dh-2-sec-1",
    question: "Số lượng đại biểu chính thức và dự khuyết tham dự Đại hội đại biểu toàn quốc lần thứ II (2/1951) là bao nhiêu?",
    options: [
      "Đại hội có 158 đại biểu chính thức và 53 đại biểu dự khuyết tham dự.",
      "Đại hội có 120 đại biểu chính thức và 30 đại biểu dự khuyết tham dự.",
      "Đại hội có 200 đại biểu chính thức và 60 đại biểu dự khuyết tham dự.",
      "Đại hội có 300 đại biểu chính thức và 80 đại biểu dự khuyết tham dự."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội II có 158 đại biểu chính thức và 53 đại biểu dự khuyết đại diện cho hơn 766.000 đảng viên ở 3 nước Đông Dương."
  },
  {
    id: "lsd-dh2-d2-002",
    examSet: 2,
    sectionId: "dh-2-grp-1",
    subsectionId: "dh-2-sec-1",
    question: "Tên gọi của xã và huyện nơi diễn ra Đại hội đại biểu toàn quốc lần thứ II (2/1951) là gì?",
    options: [
      "Đại hội diễn ra tại xã Vinh Quang thuộc huyện Chiêm Hóa, tỉnh Tuyên Quang.",
      "Đại hội diễn ra tại xã Tân Trào thuộc huyện Sơn Dương, tỉnh Tuyên Quang.",
      "Đại hội diễn ra tại xã Điềm Mặc thuộc huyện Định Hóa, tỉnh Thái Nguyên.",
      "Đại hội diễn ra tại xã Kim Truy thuộc huyện Kỳ Sơn, tỉnh Hòa Bình."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội II họp tại xã Vinh Quang (nay là Kim Bình), huyện Chiêm Hóa, tỉnh Tuyên Quang."
  },
  {
    id: "lsd-dh2-d2-003",
    examSet: 2,
    sectionId: "dh-2-grp-1",
    subsectionId: "dh-2-sec-1",
    question: "Việc đổi tên Đảng tại Đại hội II (2/1951) đánh dấu giai đoạn Đảng ra hoạt động ra sao?",
    options: [
      "Đánh dấu giai đoạn Đảng ra hoạt động công khai với tên Đảng Lao động.",
      "Đánh dấu giai đoạn Đảng chuyển sang hoạt động bí mật hoàn toàn mới.",
      "Đánh dấu giai đoạn Đảng giải tán hoàn toàn các chi bộ ở địa phương.",
      "Đánh dấu giai đoạn Đảng sáp nhập hoàn toàn vào bộ máy nhà nước Pháp."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội II đổi tên Đảng thành Đảng Lao động Việt Nam và ra hoạt động công khai."
  },
  {
    id: "lsd-dh2-d2-004",
    examSet: 2,
    sectionId: "dh-2-grp-1",
    subsectionId: "dh-2-sec-1",
    question: "Đại hội II (2/1951) đã quyết định thành lập tổ chức Đảng riêng ở 3 nước Đông Dương nhằm mục đích gì?",
    options: [
      "Nhằm phù hợp với điều kiện hoàn cảnh thực tiễn cách mạng của từng nước.",
      "Nhằm mục đích chia rẽ mối quan hệ đoàn kết hữu nghị giữa các dân tộc.",
      "Nhằm đáp ứng yêu cầu bắt buộc giải tán liên minh của Quốc tế Cộng sản.",
      "Nhằm tập trung toàn bộ nguồn lực tài chính cho giai cấp tư sản thành thị."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Quyết định lập Đảng riêng ở mỗi nước giúp phù hợp với hoàn cảnh thực tiễn riêng của Việt Nam, Lào, Campuchia."
  },
  {
    id: "lsd-dh2-d2-005",
    examSet: 2,
    sectionId: "dh-2-grp-1",
    subsectionId: "dh-2-sec-1",
    question: "Tờ báo nào ra đời sau Đại hội II (2/1951) làm cơ quan ngôn luận chính thức của Trung ương Đảng?",
    options: [
      "Tờ Báo Nhân Dân ra đời làm cơ quan ngôn luận chính thức của Trung ương.",
      "Tờ Báo Quân Đội Nhân Dân làm cơ quan ngôn luận chính thức Trung ương.",
      "Tờ Báo Cờ Giải Phóng làm cơ quan ngôn luận chính thức của Trung ương.",
      "Tờ Báo Tiền Phong ra đời làm cơ quan ngôn luận chính thức Trung ương."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội II quyết định xuất bản Báo Nhân Dân làm cơ quan ngôn luận chính thức của Trung ương Đảng (ra số đầu 11-3-1951)."
  },
  {
    id: "lsd-dh2-d2-006",
    examSet: 2,
    sectionId: "dh-2-grp-1",
    subsectionId: "dh-2-sec-1",
    question: "Đồng chí Hồ Chí Minh được Đại hội II (2/1951) bầu giữ chức vụ lãnh đạo tối cao nào trong Đảng?",
    options: [
      "Đồng chí được bầu giữ chức vụ Chủ tịch Ban Chấp hành Trung ương Đảng.",
      "Đồng chí được bầu giữ chức vụ Tổng Bí thư Ban Chấp hành Trung ương Đảng.",
      "Đồng chí được bầu giữ chức vụ Trưởng ban Kiểm tra Trung ương Đảng.",
      "Đồng chí được bầu giữ chức vụ Chủ tịch Mặt trận Liên Việt Toàn quốc."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội II đã bầu đồng chí Hồ Chí Minh làm Chủ tịch Ban Chấp hành Trung ương Đảng Lao động Việt Nam."
  },
  {
    id: "lsd-dh2-d2-007",
    examSet: 2,
    sectionId: "dh-2-grp-1",
    subsectionId: "dh-2-sec-1",
    question: "Đồng chí Trường Chinh được Đại hội II (2/1951) bầu giữ chức vụ lãnh đạo chốt nào trong Đảng?",
    options: [
      "Đồng chí được bầu giữ chức vụ Tổng Bí thư Ban Chấp hành Trung ương Đảng.",
      "Đồng chí được bầu giữ chức vụ Chủ tịch Ban Chấp hành Trung ương Đảng.",
      "Đồng chí được bầu giữ chức vụ Trưởng ban Tổ chức Trung ương Đảng.",
      "Đồng chí được bầu giữ chức vụ Chủ tịch Quốc hội Nước Dân chủ Cụ hòa."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội II bầu đồng chí Trường Chinh làm Tổng Bí thư Ban Chấp hành Trung ương."
  },

  // 8-25: Medium (18 questions)
  {
    id: "lsd-dh2-d2-008",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Chính cương Đảng Lao động Việt Nam (2/1951) xác định xã hội Việt Nam có mấy tính chất cơ bản?",
    options: [
      "Chính cương xác định xã hội có 3 tính chất: dân chủ nhân dân, thuộc địa, nửa phong kiến.",
      "Chính cương xác định xã hội có 2 tính chất: phong kiến độc lập và tư bản tư nhân.",
      "Chính cương xác định xã hội có 4 tính chất: xã hội chủ nghĩa, thuộc địa, tư bản, phong kiến.",
      "Chính cương xác định xã hội có 1 tính chất: hoàn toàn là xã hội xã hội chủ nghĩa."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Chính cương 1951 xác định 3 tính chất: dân chủ nhân dân, một phần thuộc địa và nửa phong kiến."
  },
  {
    id: "lsd-dh2-d2-009",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Theo Chính cương 1951, cách mạng Việt Nam phải giải quyết mấy nhiệm vụ cơ bản sau đây?",
    options: [
      "Giải quyết 3 nhiệm vụ: đánh đuổi đế quốc, xóa bỏ phong kiến, phát triển dân chủ nhân dân.",
      "Giải quyết 2 nhiệm vụ: tiến hành công nghiệp hóa và hoàn thành cải cách ruộng đất.",
      "Giải quyết 4 nhiệm vụ: phát triển kinh tế thị trường, mở rộng ngoại giao, xóa đói, giảm nghèo.",
      "Giải quyết 1 nhiệm vụ duy nhất: xây dựng thành công chủ nghĩa xã hội ở miền Bắc."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "3 nhiệm vụ: đánh đuổi đế quốc xâm lược giành độc lập; xóa bỏ di tích phong kiến giành ruộng đất cho nông dân; phát triển chế độ dân chủ nhân dân."
  },
  {
    id: "lsd-dh2-d2-010",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Lực lượng nào được Chính cương Đảng Lao động Việt Nam (2/1951) xác định là nền tảng của động lực cách mạng?",
    options: [
      "Giai cấp công nhân và giai cấp nông dân là nền tảng của động lực cách mạng.",
      "Giai cấp tư sản dân tộc và tầng lớp tiểu tư sản là nền tảng động lực cách mạng.",
      "Tầng lớp địa chủ tiến bộ và trí thức yêu nước là nền tảng động lực cách mạng.",
      "Các lực lượng vũ trang nhân dân và thanh niên học sinh là nền tảng động lực."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Động lực cách mạng gồm công nhân, nông dân, tiểu tư sản, tư sản dân tộc... trong đó công nông là nền tảng."
  },
  {
    id: "lsd-dh2-d2-011",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Báo cáo Chính trị tại Đại hội II (2/1951) đã tổng kết bài học kinh nghiệm kháng chiến nào sau đây?",
    options: [
      "Toàn dân, toàn diện, trường kỳ, tự lực cánh sinh dựa vào sức mình là chính.",
      "Tập trung đánh nhanh thắng nhanh để nhanh chóng kết thúc cuộc chiến tranh.",
      "Dựa hoàn toàn vào viện trợ của các nước lớn không cần phát triển nội lực.",
      "Chỉ sử dụng hình thức đấu tranh ngoại giao bỏ qua đấu tranh quân sự bí mật."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Báo cáo tổng kết đường lối kháng chiến toàn dân, toàn diện, trường kỳ, tự lực cánh sinh."
  },
  {
    id: "lsd-dh2-d2-012",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Mối quan hệ giữa hai nhiệm vụ chống đế quốc và chống phong kiến được Đại hội II (2/1951) giải quyết ra sao?",
    options: [
      "Chống đế quốc là nhiệm vụ hàng đầu, chống phong kiến phải làm từng bước có trọng tâm.",
      "Đặt nhiệm vụ chống phong kiến lên hàng đầu để chia ruộng đất cho nông dân ngay.",
      "Bỏ qua hoàn toàn nhiệm vụ chống phong kiến để tập trung toàn lực đánh tư bản.",
      "Tiến hành chống phong kiến triệt để trước rồi mới phát động đánh đế quốc."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Nhiệm vụ tập trung hàng đầu là chống đế quốc giành độc lập; nhiệm vụ chống phong kiến thực hiện từng bước có trọng tâm."
  },
  {
    id: "lsd-dh2-d2-013",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Tầm quan trọng của việc thông qua Điều lệ mới của Đảng Lao động Việt Nam tại Đại hội II (2/1951) là gì?",
    options: [
      "Xây dựng Đảng thành một Đảng công khai có bản lĩnh kỷ luật và sức chiến đấu cao.",
      "Cho phép kết nạp đại trà mọi tầng lớp không cần qua xem xét động cơ tư tưởng.",
      "Chuyển toàn bộ bộ máy Đảng sang hoạt động theo mô hình doanh nghiệp kinh tế.",
      "Xóa bỏ các chi bộ cơ sở để tập trung toàn bộ quyền lực vào Bộ Chính trị."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Điều lệ mới giúp củng cố Đảng công khai vững mạnh về chính trị, tư tưởng và tổ chức."
  },
  {
    id: "lsd-dh2-d2-014",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Số lượng ủy viên dự khuyết Ban Chấp hành Trung ương Đảng được Đại hội II (2/1951) bầu ra là bao nhiêu?",
    options: [
      "Ban Chấp hành Trung ương được bầu gồm 10 ủy viên dự khuyết.",
      "Ban Chấp hành Trung ương được bầu gồm 05 ủy viên dự khuyết.",
      "Ban Chấp hành Trung ương được bầu gồm 15 ủy viên dự khuyết.",
      "Ban Chấp hành Trung ương được bầu gồm 20 ủy viên dự khuyết."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "BCH Trung ương khóa II gồm 29 ủy viên (19 chính thức và 10 dự khuyết)."
  },
  {
    id: "lsd-dh2-d2-015",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Mục tiêu chiến lược của cách mạng Việt Nam nêu trong Chính cương Đảng Lao động Việt Nam (2/1951) là gì?",
    options: [
      "Độc lập dân tộc, dân chủ nhân dân, tiến lên chủ nghĩa xã hội.",
      "Xây dựng ngay nền kinh tế thị trường định hướng xã hội chủ nghĩa.",
      "Hoàn thành công nghiệp hóa hiện đại hóa theo mô hình các nước tư bản.",
      "Thực hiện chính sách mở cửa ngoại giao tự do tuyệt đối với thế giới."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Mục tiêu: Độc lập dân tộc, phát triển chế độ dân chủ nhân dân, tạo tiền đề tiến lên chủ nghĩa xã hội."
  },
  {
    id: "lsd-dh2-d2-016",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Vì sao Đại hội II (2/1951) lại quyết định đổi tên Đảng thành Đảng Lao động Việt Nam?",
    options: [
      "Để khẳng định Đảng là của giai cấp công nhân và nhân dân lao động Việt Nam.",
      "Vì Quốc tế Cộng sản bắt buộc tất cả các Đảng phải đổi tên theo chuẩn chung.",
      "Nhằm che giấu bản chất giai cấp công nhân của Đảng trước kẻ thù thực dân.",
      "Vì thực dân Pháp yêu cầu phải bỏ từ 'Cộng sản' mới cho phép công khai."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Tên gọi Đảng Lao động Việt Nam thể hiện rõ bản chất giai cấp công nhân và tính đại chúng nhân dân rộng rãi."
  },
  {
    id: "lsd-dh2-d2-017",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Sự kiện ra hoạt động công khai tại Đại hội II (2/1951) có tác động gì đến mối quan hệ giữa Đảng và nhân dân?",
    options: [
      "Thắt chặt mối quan hệ máu thịt, tăng cường sự tin tưởng tuyệt đối của nhân dân.",
      "Tạo ra khoảng cách lớn giữa Đảng với các tầng lớp nhân dân lao động nghèo.",
      "Khiến nhân dân hoang mang vì sợ bị thực dân Pháp đàn áp sau khi công khai.",
      "Làm giảm uy tín của Đảng trên trường quốc tế và với các nước xã hội chủ nghĩa."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đảng ra hoạt động công khai giúp nhân dân hiểu rõ đường lối quang minh chính đại, thắt chặt mối quan hệ máu thịt."
  },
  {
    id: "lsd-dh2-d2-018",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Đại hội II (2/1951) đã xác định lực lượng nòng cốt của khối đại đoàn kết toàn dân tộc là gì?",
    options: [
      "Liên minh giữa giai cấp công nhân với giai cấp nông dân và lao động trí óc.",
      "Liên minh giữa giai cấp tư sản dân tộc với các tầng lớp địa chủ phong kiến.",
      "Khối liên kết kinh tế giữa thương gia thành thị với các tập đoàn tư bản.",
      "Các lực lượng quân đội tình nguyện quốc tế đang tham chiến tại Đông Dương."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Khối đại đoàn kết toàn dân tộc dựa trên nền tảng liên minh công nhân, nông dân và trí thức do Đảng lãnh đạo."
  },
  {
    id: "lsd-dh2-d2-019",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Báo cáo Bàn về Cách mạng Việt Nam của đồng chí Trường Chinh trình bày tại Đại hội II (2/1951) có giá trị gì?",
    options: [
      "Làm rõ lý luận về cuộc cách mạng dân chủ nhân dân tiến lên chủ nghĩa xã hội.",
      "Là văn kiện duy nhất vạch ra con đường công nghiệp hóa hiện đại hóa đất.",
      "Lần đầu tiên đặt ra vấn đề đổi tên Đảng từ Đảng Lao động sang Đảng Cộng.",
      "Thay thế hoàn toàn cho Báo cáo Chính trị do Chủ tịch Hồ Chí Minh trình."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Báo cáo của Trường Chinh là công trình lý luận quan trọng bổ sung hoàn thiện đường lối cách mạng dân chủ nhân dân."
  },
  {
    id: "lsd-dh2-d2-020",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Đại hội II (2/1951) đã chỉ ra con đường phát triển của cách mạng Việt Nam trải qua mấy giai đoạn?",
    options: [
      "Cách mạng trải qua 3 giai đoạn: hoàn thành giải phóng, dân chủ, xây dựng CNXH.",
      "Cách mạng trải qua 2 giai đoạn: đấu tranh vũ trang và cải cách kinh tế tư nhân.",
      "Cách mạng trải qua 4 giai đoạn: hòa hoãn, tiến công, khởi nghĩa và hòa bình.",
      "Cách mạng chỉ có 1 giai đoạn duy nhất: tiến thẳng lên chủ nghĩa xã hội ngay."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "3 giai đoạn: hoàn thành giải phóng dân tộc; xóa bỏ di tích phong kiến phát triển dân chủ nhân dân; tiến lên xây dựng CNXH."
  },
  {
    id: "lsd-dh2-d2-021",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Chính sách đối ngoại được Đại hội II (2/1951) xác định nhằm mục đích chiến lược nào?",
    options: [
      "Tăng cường đoàn kết với Liên Xô, Trung Quốc và các lực lượng hòa bình thế giới.",
      "Đứng trung lập hoàn toàn không tham gia các tổ chức dân chủ quốc tế.",
      "Chỉ hợp tác ngoại giao với các nước tư bản phương Tây để tranh thủ vốn.",
      "Cắt đứt mọi mối quan hệ liên lạc với phong trào giải phóng dân tộc thế giới."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Chính sách đối ngoại thắt chặt đoàn kết với các nước xã hội chủ nghĩa (Liên Xô, Trung Quốc) và phong trào hòa bình thế giới."
  },
  {
    id: "lsd-dh2-d2-022",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Điểm mới căn bản của Điều lệ Đảng Lao động Việt Nam (2/1951) về tiêu chuẩn đảng viên là gì?",
    options: [
      "Yêu cầu đảng viên phải trung thành với lý tưởng cách mạng, gương mẫu trong chiến đấu.",
      "Cho phép người có hành vi tham nhũng tiêu cực vẫn được giữ nguyên tư cách.",
      "Bãi bỏ quy định tự phê bình và phê bình trong các sinh hoạt chi bộ định kỳ.",
      "Không yêu cầu đảng viên phải chấp hành các nghị quyết của cấp ủy cấp trên."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Điều lệ mới nâng cao tiêu chuẩn đảng viên về tính tiên phong gương mẫu, lòng trung thành tuyệt đối với lý tưởng."
  },
  {
    id: "lsd-dh2-d2-023",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Thành công của Đại hội II (2/1951) đã tạo cơ sở chính trị tư tưởng trực tiếp cho thắng lợi nào?",
    options: [
      "Thắng lợi của Chiến dịch Điện Biên Phủ năm 1954 và Hiệp định Giơ-ne-vơ.",
      "Thắng lợi của cuộc Tổng tiến công và nổi dậy Mậu Thân năm 1968 ở miền Nam.",
      "Thắng lợi của Chiến dịch Hồ Chí Minh lịch sử giải phóng hoàn toàn miền Nam.",
      "Thắng lợi của công cuộc Đổi mới kinh tế thị trường định hướng XHCN năm 1986."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đường lối Đại hội II vạch ra là kim chỉ nam đưa cuộc kháng chiến chống Pháp tới đỉnh cao Chiến thắng Điện Biên Phủ 1954."
  },
  {
    id: "lsd-dh2-d2-024",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Vì sao Đại hội II (2/1951) được coi là mốc đánh dấu sự trưởng thành vượt bậc về lý luận của Đảng?",
    options: [
      "Vì Đảng đã hoàn thiện đường lối cách mạng dân chủ nhân dân tiến lên CNXH.",
      "Vì Đảng đã quyết định từ bỏ con đường đấu tranh giai cấp để hòa hoãn.",
      "Vì Đảng đã thay thế toàn bộ lý luận Mác - Lênin bằng lý luận tư bản.",
      "Vì Đảng đã tuyên bố hoàn thành triệt để công nghiệp hóa đất nước."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội II đúc kết lý luận cách mạng dân chủ nhân dân, khẳng định bước trưởng thành lý luận sắc bén của Đảng."
  },
  {
    id: "lsd-dh2-d2-025",
    examSet: 2,
    sectionId: "dh-2-grp-2",
    subsectionId: "dh-2-sec-2",
    question: "Ý nghĩa của việc xuất bản Báo Nhân Dân ngay sau Đại hội II (2/1951) đối với công tác tư tưởng là gì?",
    options: [
      "Trở thành vũ khí tư tưởng sắc bén tuyên truyền đường lối Đảng tới nhân dân.",
      "Là kênh giải trí thuần túy cho cán bộ chiến sĩ tại khu vực căn cứ địa.",
      "Dùng để trao đổi thông tin thương mại tự do giữa các vùng miền đất nước.",
      "Chỉ phục vụ riêng cho các cuộc họp nội bộ của Ban Chấp hành Trung ương."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Báo Nhân Dân là tiếng nói của Đảng, Nhà nước và Nhân dân, tuyên truyền sâu rộng đường lối kháng chiến kiến quốc."
  },

  // 26-36: Hard (11 questions)
  {
    id: "lsd-dh2-d2-026",
    examSet: 2,
    sectionId: "dh-2-grp-3",
    subsectionId: "dh-2-sec-3",
    question: "Phân tích sự khác biệt về vai trò lịch sử giữa Đại hội I (1935) và Đại hội II (1951)?",
    options: [
      "ĐH I khôi phục tổ chức Đảng sau thoái trào, ĐH II đưa kháng chiến tới thắng lợi.",
      "ĐH I lãnh đạo Tổng khởi nghĩa 1945, ĐH II lãnh đạo công cuộc Đổi mới 1986.",
      "ĐH I tuyên bố Đảng hoạt động công khai, ĐH II chuyển Đảng sang bí mật hoàn.",
      "ĐH I họp tại Hà Nội, ĐH II họp tại Ma Cao thuộc khu vực nước Trung Quốc."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "ĐH I (1935) khôi phục tổ chức Đảng sau đàn áp; ĐH II (1951) là Đại hội kháng chiến thắng lợi, đưa Đảng ra công khai."
  },
  {
    id: "lsd-dh2-d2-027",
    examSet: 2,
    sectionId: "dh-2-grp-3",
    subsectionId: "dh-2-sec-3",
    question: "Tại sao nói Chính cương Đảng Lao động Việt Nam (2/1951) là một bản Cương lĩnh dân tộc dân chủ hoàn chỉnh?",
    options: [
      "Vì đã vạch rõ tính chất xã hội, kẻ thù, động lực và nhiệm vụ cách mạng cụ thể.",
      "Vì đã giải quyết xong triệt để toàn bộ yêu cầu cải cách ruộng đất nông dân.",
      "Vì đã tuyên bố đưa nước ta tiến thẳng lên công nghiệp hóa hiện đại hóa ngay.",
      "Vì đã xóa bỏ hoàn toàn ranh giới giữa giai cấp bóc thấu và bị bóc thấu."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Chính cương 1951 phân tích sâu sắc các mâu thuẫn xã hội, xác định đúng kẻ thù, động lực và tiến trình cách mạng dân chủ nhân dân."
  },
  {
    id: "lsd-dh2-d2-028",
    examSet: 2,
    sectionId: "dh-2-grp-3",
    subsectionId: "dh-2-sec-3",
    question: "Việc Đại hội II (2/1951) họp tại Tuyên Quang (Chiêm Hóa) phản ánh tầm quan trọng gì của căn cứ địa?",
    options: [
      "Việt Bắc là Thủ đô gió ngàn, căn cứ địa an toàn vững chắc của cách mạng.",
      "Vì tại đô thị lớn kẻ thù đã xây dựng phòng tuyến quân sự không thể vào.",
      "Vì Tuyên Quang là nơi duy nhất có thể tiếp nhận viện trợ từ nước ngoài.",
      "Vì thực dân Pháp đã rút hoàn toàn khỏi khu vực miền Bắc Việt Nam."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Việt Bắc là căn cứ địa cách mạng 'Thủ đô kháng chiến', nơi bảo vệ an toàn cho cơ quan đầu não Đảng và Đại hội II."
  },
  {
    id: "lsd-dh2-d2-029",
    examSet: 2,
    sectionId: "dh-2-grp-3",
    subsectionId: "dh-2-sec-3",
    question: "Phân tích ý nghĩa của mối liên minh chiến lược giữa 3 Đảng ở 3 nước Đông Dương sau Đại hội II (2/1951)?",
    options: [
      "Tăng cường đoàn kết trên tinh thần tự nguyện, hỗ trợ nhau đánh kẻ thù chung.",
      "Bắt buộc các Đảng nước bạn phải tuân theo sự chỉ đạo tuyệt đối của ta.",
      "Chia rẽ sức mạnh kháng chiến khiến cho phong trào ở Lào bị suy yếu.",
      "Nhằm mục đích sáp nhập lãnh thổ 3 nước thành một quốc gia duy nhất."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Mỗi nước có Đảng riêng độc lập tự chủ nhưng gắn bó khăng khít trong Liên minh nhân dân Việt - Miên - Lào đánh Pháp."
  },
  {
    id: "lsd-dh2-d2-030",
    examSet: 2,
    sectionId: "dh-2-grp-3",
    subsectionId: "dh-2-sec-3",
    question: "Tại sao việc xác định đế quốc Mỹ là kẻ thù can thiệp tại Đại hội II (2/1951) thể hiện tầm nhìn nhạy bén?",
    options: [
      "Dự báo chính xác dã tâm của Mỹ chuẩn bị hất cẳng Pháp ở Đông Dương.",
      "Vì quân đội Mỹ đã trực tiếp đưa lực lượng tham chiến tại Việt Nam 1951.",
      "Vì Mỹ và Pháp đã ký hiệp định hợp nhất thành một lực lượng quân sự.",
      "Vì Quốc tế Cộng sản bắt buộc tất cả các nước phải tuyên chiến với Mỹ."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đảng sớm nhận rõ dã tâm can thiệp của đế quốc Mỹ (qua viện trợ quân sự cho Pháp), dự báo đúng kẻ thù nguy hiểm tương lai."
  },
  {
    id: "lsd-dh2-d2-031",
    examSet: 2,
    sectionId: "dh-2-grp-3",
    subsectionId: "dh-2-sec-3",
    question: "Tính chất 'nửa phong kiến' của xã hội nêu trong Chính cương 1951 phản ánh thực trạng gì ở vùng tự do?",
    options: [
      "Quan hệ sản xuất phong kiến vẫn còn tồn tại nhưng từng bước bị bãi bỏ.",
      "Giai cấp địa chủ vẫn nắm toàn bộ chính quyền tại các vùng giải phóng.",
      "Nông dân không hề được hưởng bất kỳ quyền lợi nào về giảm giở giảm tức.",
      "Kinh tế địa chủ phong kiến phát triển mạnh hơn cả thời kỳ trước 1945."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Dù ở vùng tự do ta đã thực hiện giảm giở giảm tức, nhưng quan hệ sản xuất phong kiến chưa bị xóa bỏ triệt để (nửa phong kiến)."
  },
  {
    id: "lsd-dh2-d2-032",
    examSet: 2,
    sectionId: "dh-2-grp-3",
    subsectionId: "dh-2-sec-3",
    question: "Sự phân công giữa Chủ tịch Đảng (Hồ Chí Minh) và Tổng Bí thư (Trường Chinh) tại Đại hội II mang ý nghĩa gì?",
    options: [
      "Kết hợp giữa vị lãnh tụ quy tụ tinh thần với nhà chiến lược chỉ đạo trực.",
      "Tạo ra sự cạnh tranh quyền lực trong Ban Chấp hành Trung ương Đảng.",
      "Chia đôi bộ máy lãnh đạo Đảng thành hai trung tâm điều hành độc lập.",
      "Quy định theo mô hình tổ chức bộ máy nhà nước của các nước tư bản."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Bác Hồ là linh hồn tụ hội sức mạnh đại đoàn kết; đồng chí Trường Chinh là nhà lý luận chiến lược xuất sắc trực tiếp điều hành công việc Đảng."
  },
  {
    id: "lsd-dh2-d2-033",
    examSet: 2,
    sectionId: "dh-2-grp-3",
    subsectionId: "dh-2-sec-3",
    question: "Tại sao Đại hội II (2/1951) quyết định đẩy mạnh công tác xây dựng lực lượng vũ trang nhân dân?",
    options: [
      "Vì lực lượng vũ trang là công cụ đắc lực quyết định thắng lợi chiến tranh.",
      "Vì ta muốn dùng lực lượng vũ trang để thay thế cho công tác dân vận.",
      "Vì quân đội Pháp đã hoàn toàn suy sụp không còn khả năng phòng thủ.",
      "Vì các nước xã hội chủ nghĩa bắt buộc ta phải xây dựng quân đội lớn."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Chiến tranh kháng chiến muốn đến thắng lợi hoàn toàn bắt buộc phải có lực lượng vũ trang 3 thứ quân chính quy tinh nhuệ."
  },
  {
    id: "lsd-dh2-d2-034",
    examSet: 2,
    sectionId: "dh-2-grp-3",
    subsectionId: "dh-2-sec-3",
    question: "Mối liên hệ giữa việc ra hoạt động công khai với việc mở rộng Mặt trận Liên Việt năm 1951 là gì?",
    options: [
      "Đảng công khai giúp Mặt trận quy tụ rộng rãi mọi tầng lớp nhân dân yêu.",
      "Đảng công khai làm cho Mặt trận bị phân hóa và giải tán hoàn toàn.",
      "Đặt Mặt trận Liên Việt dưới sự quản lý trực tiếp của bộ máy nhà nước.",
      "Thay thế toàn bộ các tổ chức đoàn thể thành các hội từ thiện tự do."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đảng ra hoạt động công khai làm hạt nhân lãnh đạo củng cố Mặt trận Liên Việt (thống nhất Việt Minh và Hội Liên Việt tháng 3/1951)."
  },
  {
    id: "lsd-dh2-d2-035",
    examSet: 2,
    sectionId: "dh-2-grp-3",
    subsectionId: "dh-2-sec-3",
    question: "Tại sao việc thông qua Chính cương 1951 được coi là mốc định hình lý luận về đường lối quá độ tiến lên CNXH?",
    options: [
      "Vạch rõ con đường từ dân chủ nhân dân tiến dần lên chủ nghĩa xã hội.",
      "Tuyên bố bỏ qua hoàn toàn giai đoạn dân chủ nhân dân để lên CNXH ngay.",
      "Xác định mô hình kinh tế thị trường định hướng XHCN từ năm 1951.",
      "Bãi bỏ hoàn toàn các hình thức sở hữu tư nhân về tư liệu sản xuất."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Chính cương 1951 vạch rõ bước đi quá độ: hoàn thành giải phóng ➔ phát triển dân chủ nhân dân ➔ tiến lên chủ nghĩa xã hội."
  },
  {
    id: "lsd-dh2-d2-036",
    examSet: 2,
    sectionId: "dh-2-grp-3",
    subsectionId: "dh-2-sec-3",
    question: "Nguyên nhân căn bản giúp Nghị quyết Đại hội II (2/1951) nhanh chóng đi vào thực tiễn kháng chiến là gì?",
    options: [
      "Nghị quyết đáp ứng đúng nguyện vọng độc lập tự do của nhân dân ta.",
      "Do chính quyền thực dân Pháp không còn lùng bắt các cơ sở Đảng.",
      "Do ta nhận được toàn bộ tài chính viện trợ vô điều kiện từ tư bản.",
      "Do bộ máy chính quyền cũ tự nguyện trao lại quyền lực cho nhân dân."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Nghị quyết Đại hội II phản ánh đúng quy luật khách quan, hợp lòng dân, được toàn Đảng toàn dân toàn quân đồng lòng thực hiện."
  },

  // 37-40: Outside (4 questions - Practical Application)
  {
    id: "lsd-dh2-d2-037",
    examSet: 2,
    sectionId: "dh-2-grp-4",
    subsectionId: "dh-2-sec-4",
    question: "Bài học về công tác tư tưởng chính trị từ Đại hội II (2/1951) được vận dụng thế nào trong đấu tranh hiện nay?",
    options: [
      "Chủ động bảo vệ nền tảng tư tưởng của Đảng, đấu tranh phản bác các quan điểm sai trái.",
      "Xa rời nền tảng tư tưởng Mác - Lênin để chạy theo các trào lưu tư tưởng tự do.",
      "Cấm đoán tuyệt đối việc tiếp thu các tri thức khoa học hiện đại từ bên ngoài.",
      "Xem nhẹ công tác tuyên truyền tư tưởng chính trị trong thế hệ học sinh sinh viên."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Tăng cường công tác tư tưởng, bảo vệ vững chắc nền tảng tư tưởng Mác - Lênin, tư tưởng Hồ Chí Minh trong tình hình mới."
  },
  {
    id: "lsd-dh2-d2-038",
    examSet: 2,
    sectionId: "dh-2-grp-4",
    subsectionId: "dh-2-sec-4",
    question: "Từ bài học xây dựng khối đại đoàn kết toàn dân tại Đại hội II (2/1951), chính sách phát triển hiện nay cần chú trọng điều gì?",
    options: [
      "Khơi dậy khát vọng phát triển đất nước và phát huy sức mạnh đại đoàn kết toàn dân.",
      "Chỉ tập trung phát triển quyền lợi cho giai cấp công nhân bỏ qua các tầng lớp khác.",
      "Chia rẽ các cộng đồng dân tộc thiểu số với cộng đồng người Kinh trong nước.",
      "Tuyệt đối không thu hút nguồn lực từ cộng đồng người Việt Nam ở nước ngoài."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Phát huy sức mạnh đại đoàn kết toàn dân tộc, kết hợp mọi tầng lớp nhân dân vì mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh."
  },
  {
    id: "lsd-dh2-d2-039",
    examSet: 2,
    sectionId: "dh-2-grp-4",
    subsectionId: "dh-2-sec-4",
    question: "Bài học về đổi mới phương thức lãnh đạo tại Đại hội II (2/1951) gợi mở yêu cầu gì đối với cán bộ hiện nay?",
    options: [
      "Sâu sát thực tiễn, nói đi đôi với làm và luôn lấy hiệu quả phục vụ nhân dân làm thước đo.",
      "Xa rời quần chúng nhân dân, mang tính quan nhêu mệnh lệnh theo lối hành chính quan.",
      "Tránh né trách nhiệm, không dũng cảm đột phá đổi mới khi gặp các vấn đề phức tạp.",
      "Chỉ quan tâm tới lợi ích cá nhân riêng mà xem nhẹ các nhiệm vụ chung của tập thể."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Rèn luyện phong cách lãnh đạo trọng dân, gần dân, hiểu dân, học dân và có trách nhiệm với dân."
  },
  {
    id: "lsd-dh2-d2-040",
    examSet: 2,
    sectionId: "dh-2-grp-4",
    subsectionId: "dh-2-sec-4",
    question: "Ý nghĩa của việc kiên định mục tiêu độc lập dân tộc tại Đại hội II (2/1951) nhắc nhở thế hệ trẻ điều gì?",
    options: [
      "Luôn trân trọng giá trị độc lập tự do và cống hiến sức trẻ cho sự nghiệp bảo vệ Tổ quốc.",
      "Phai nhạt lý tưởng cách mạng và chạy theo các lối sống thực dụng cá nhân.",
      "Phủ nhận các thành quả cách mạng của thế hệ cha anh đi trước trong lịch sử.",
      "Thiếu trách nhiệm đối với nghĩa vụ quân sự và công tác an ninh quốc phòng."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Thế hệ trẻ cần khắc ghi giá trị của độc lập tự do đánh đổi bằng xương máu cha anh, sống có lý tưởng và cống hiến cho Tổ quốc."
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
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ CHUẨN 2: ĐẠI HỘI II (2/1951)
   Mã Bộ Đề: questions-lsd-dh2-part2.js
   Số lượng: 40 câu cố định (36 Inside + 4 Outside)
   ============================================================ */

export const questionsLsdDh2Part2 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh2-part2.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh2-part2.js");
}
