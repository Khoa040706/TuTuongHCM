import fs from "fs";

// 40 questions for Fixed Exam Set 2 (Đại hội X - 4/2006)
// 36 Inside (7 Easy, 18 Medium, 11 Hard) + 4 Outside
const questions = [
  // 1-7: Easy (7 questions)
  {
    id: "lsd-dh10-d2-001",
    examSet: 2,
    sectionId: "dh-10-grp-1",
    subsectionId: "dh-10-sec-1",
    question: "Số lượng đảng viên cả nước mà Đại hội X của Đảng (4/2006) đại diện là bao nhiêu?",
    options: [
      "Đại hội đại diện cho hơn 3,1 triệu đảng viên trong cả nước.",
      "Đại hội đại diện cho hơn 2,47 triệu đảng viên trong cả nước.",
      "Đại hội đại diện cho gần 2,13 triệu đảng viên trong cả nước.",
      "Đại hội đại diện cho hơn 1,90 triệu đảng viên trong cả nước."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội X đại diện cho hơn 3,1 triệu đảng viên cả nước."
  },
  {
    id: "lsd-dh10-d2-002",
    examSet: 2,
    sectionId: "dh-10-grp-1",
    subsectionId: "dh-10-sec-1",
    question: "Đại hội X của Đảng (4/2006) được họp tại địa điểm lịch sử nào?",
    options: [
      "Đại hội họp tại Thủ đô Hà Nội trong Hội trường Ba Đình.",
      "Đại hội họp tại xã Vinh Quang, huyện Chiêm Hóa, Tuyên Quang.",
      "Đại hội họp tại thành phố Hồ Chí Minh sau giải phóng.",
      "Đại hội họp tại Thủ đô Hà Nội trong Trung tâm Hội nghị Quốc gia."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội X họp tại Thủ đô Hà Nội trong Hội trường Ba Đình."
  },
  {
    id: "lsd-dh10-d2-003",
    examSet: 2,
    sectionId: "dh-10-grp-1",
    subsectionId: "dh-10-sec-1",
    question: "Tôn chỉ đối ngoại toàn diện được Đại hội X (4/2006) khẳng định đầy đủ là gì?",
    options: [
      "Việt Nam là bạn, đối tác tin cậy, thành viên tích cực có trách nhiệm.",
      "Việt Nam sẵn sàng là bạn, đối tác tin cậy của các nước trong cộng đồng.",
      "Việt Nam muốn là bạn với tất cả các quốc gia trên thế giới vì hòa bình.",
      "Việt Nam duy trì quan hệ thương mại độc quyền với khu vực ASEAN."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Tôn chỉ ĐH X: 'Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm của cộng đồng quốc tế'."
  },
  {
    id: "lsd-dh10-d2-004",
    examSet: 2,
    sectionId: "dh-10-grp-1",
    subsectionId: "dh-10-sec-1",
    question: "Về thành phần kinh tế, Đại hội X xác định kinh tế tư nhân có vai trò thế nào?",
    options: [
      "Kinh tế tư nhân có vai trò là một trong những động lực kinh tế.",
      "Kinh tế tư nhân giữ vai trò chủ đạo nắm quyền định hướng sản xuất.",
      "Kinh tế tư nhân là thành phần bóc lột cần phải hạn chế tiêu diệt.",
      "Kinh tế tư nhân phụ thuộc hoàn toàn vào các doanh nghiệp nhà nước."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "ĐH X khẳng định kinh tế tư nhân là một trong những động lực của nền kinh tế."
  },
  {
    id: "lsd-dh10-d2-005",
    examSet: 2,
    sectionId: "dh-10-grp-1",
    subsectionId: "dh-10-sec-1",
    question: "Việt Nam chính thức trở thành thành viên thứ 150 của WTO vào thời gian nào?",
    options: [
      "Việt Nam chính thức trở thành thành viên WTO ngày 11/1/2007.",
      "Việt Nam chính thức trở thành thành viên WTO ngày 18/4/2006.",
      "Việt Nam chính thức trở thành thành viên WTO ngày 28/7/1995.",
      "Việt Nam chính thức trở thành thành viên WTO ngày 15/11/1998."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Ngày 11/1/2007, Việt Nam chính thức là thành viên thứ 150 của WTO."
  },
  {
    id: "lsd-dh10-d2-006",
    examSet: 2,
    sectionId: "dh-10-grp-1",
    subsectionId: "dh-10-sec-1",
    question: "Ban Chấp hành Trung ương Đảng khóa X (4/2006) bầu ra bao nhiêu ủy viên chính thức?",
    options: [
      "Ban Chấp hành Trung ương Đảng khóa X gồm 160 ủy viên chính thức.",
      "Ban Chấp hành Trung ương Đảng khóa X gồm 150 ủy viên chính thức.",
      "Ban Chấp hành Trung ương Đảng khóa X gồm 170 ủy viên chính thức.",
      "Ban Chấp hành Trung ương Đảng khóa X gồm 180 ủy viên chính thức."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "BCH Trung ương khóa X gồm 160 ủy viên chính thức."
  },
  {
    id: "lsd-dh10-d2-007",
    examSet: 2,
    sectionId: "dh-10-grp-1",
    subsectionId: "dh-10-sec-1",
    question: "Số lượng bài học lớn được rút ra qua 20 năm Đổi mới (1986-2006) tại ĐH X là gì?",
    options: [
      "Đại hội X đúc kết trọn vẹn 5 bài học kinh nghiệm lớn qua 20 năm.",
      "Đại hội X đúc kết trọn vẹn 6 bài học kinh nghiệm lớn qua 20 năm.",
      "Đại hội X đúc kết trọn vẹn 4 bài học kinh nghiệm lớn qua 20 năm.",
      "Đại hội X đúc kết trọn vẹn 3 bài học kinh nghiệm lớn qua 20 năm."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "ĐH X tổng kết 20 năm Đổi mới và rút ra 5 bài học kinh nghiệm lớn."
  },

  // 8-25: Medium (18 questions)
  {
    id: "lsd-dh10-d2-008",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Quy định số 15-QĐ/TW của Ban Chấp hành Trung ương khóa X khẳng định điều gì?",
    options: [
      "Đảng viên làm kinh tế tư nhân phải tuân thủ Điều lệ Đảng và pháp luật.",
      "Đảng viên không được làm bất kỳ hoạt động kinh doanh tư nhân nào.",
      "Đảng viên được bóc lột lao động tùy ý không cần theo quy định pháp luật.",
      "Đảng viên làm kinh tế tư nhân phải nộp toàn bộ lợi nhuận cho Đảng."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Quy định 15-QĐ/TW cho phép Đảng viên làm kinh tế tư nhân nhưng phải nghiêm chỉnh chấp hành pháp luật và Điều lệ Đảng."
  },
  {
    id: "lsd-dh10-d2-009",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Yêu cầu hoàn thiện thể chế kinh tế thị trường định hướng XHCN tại NQTƯ 6 khóa X là gì?",
    options: [
      "Tạo môi trường cạnh tranh bình đẳng, phát triển đồng bộ các loại thị trường.",
      "Bãi bỏ sự quản lý vĩ mô của Nhà nước để thị trường tự do thao túng hoàn.",
      "Quốc hữu hóa toàn bộ các doanh nghiệp tư nhân đang hoạt động kinh doanh.",
      "Tập trung bao cấp kinh phí cho các doanh nghiệp nhà nước yếu kém kéo."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "NQTƯ 6 khóa X yêu cầu tạo môi trường cạnh tranh bình đẳng giữa các thành phần kinh tế, phát triển đồng bộ các yếu tố thị trường."
  },
  {
    id: "lsd-dh10-d2-010",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Tầm quan trọng của Nghị quyết Trung ương 7 khóa X về Nông nghiệp, Nông dân, Nông thôn là gì?",
    options: [
      "Giải quyết toàn diện vấn đề Tam nông, coi nông dân là chủ thể phát triển.",
      "Chuyển toàn bộ nông dân thành công nhân làm việc ở các siêu đô thị lớn.",
      "Giải tán toàn bộ các trang trại nông nghiệp tư nhân ở các vùng miền.",
      "Tập trung đầu tư cho đô thị bỏ mặc sự phát triển của khu vực nông thôn."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "NQTƯ 7 khóa X về Tam nông giải quyết toàn diện, coi nông dân là chủ thể, nông nghiệp là nền tảng, nông thôn là địa bàn chiến lược."
  },
  {
    id: "lsd-dh10-d2-011",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Đóng góp của việc tổ chức thành công Hội nghị APEC 14 (11/2006) tại Hà Nội là gì?",
    options: [
      "Quảng bá hình ảnh Việt Nam đổi mới, an toàn, thu hút làn sóng đầu tư mới.",
      "Làm cho Việt Nam phải gánh khoản nợ tài chính lớn không thể chi trả.",
      "Biến Việt Nam thành thị trường tiêu thụ hàng cũ của các nước thành viên.",
      "Tách rời Việt Nam khỏi các thỏa thuận hợp tác trong khu vực ASEAN."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "APEC 14 thành công rực rỡ, khẳng định thế và lực của Việt Nam, mở ra làn sóng đầu tư FDI bứt phá."
  },
  {
    id: "lsd-dh10-d2-012",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Nhiệm vụ phòng chống tham nhũng, lãng phí thời kỳ ĐH X được triển khai thế nào?",
    options: [
      "Thành lập Ban Chỉ đạo Trung ương về PCTN, kê khai tài sản cán bộ công khai.",
      "Tránh né không công khai danh tính các cán bộ tham nhũng có chức vụ cao.",
      "Coi tham nhũng là việc riêng của từng địa phương không cần Trung ương.",
      "Bãi bỏ việc kiểm tra giám sát tài sản đối với cán bộ quản lý Nhà nước."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "ĐH X quyết liệt đấu tranh chống tham nhũng, thành lập Ban Chỉ đạo Trung ương về PCTN do Thủ tướng Chính phủ làm Trưởng ban (giai đoạn đó)."
  },
  {
    id: "lsd-dh10-d2-013",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Mục tiêu phát triển nguồn nhân lực chất lượng cao tại ĐH X là gì?",
    options: [
      "Đổi mới giáo dục đào tạo, chú trọng nhân tài và kỹ năng cho hội nhập WTO.",
      "Phổ cập trình độ thạc sĩ cho toàn bộ lực lượng lao động nông nghiệp nông.",
      "Giảm kinh phí đầu tư giáo dục để dồn vốn phát triển công nghiệp nặng.",
      "Đưa toàn bộ lực lượng thanh niên ra nước ngoài làm lao động phổ thông."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Phát triển nguồn nhân lực chất lượng cao là khâu đột phá để nâng cao năng lực cạnh tranh quốc gia khi hội nhập WTO."
  },
  {
    id: "lsd-dh10-d2-014",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Ý nghĩa của việc Việt Nam ra khỏi nhóm nước kém phát triển năm 2008 là gì?",
    options: [
      "Đưa Việt Nam bước vào nhóm nước có thu nhập trung bình thấp trên thế giới.",
      "Giúp Việt Nam hoàn thành toàn bộ công cuộc CNH-HĐH trước mốc 2020.",
      "Biến Việt Nam thành nước phát triển có thu nhập bình quân đứng đầu Châu.",
      "Làm cho Việt Nam không còn cần thu hút vốn đầu tư nước ngoài FDI nữa."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Năm 2008, Việt Nam chính thức thoát khỏi nhóm nước kém phát triển, trở thành nước có thu nhập trung bình thấp."
  },
  {
    id: "lsd-dh10-d2-015",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Nội dung Chiến lược biển Việt Nam đến năm 2020 (NQTƯ 4 khóa X) là gì?",
    options: [
      "Phấn đấu trở thành quốc gia mạnh về biển, làm giàu từ biển, bảo vệ biển.",
      "Từ bỏ khai thác tài nguyên biển để tập trung hoàn toàn cho đất liền.",
      "Cho phép tư nhân nước ngoài sở hữu toàn bộ các đảo thuộc Việt Nam.",
      "Giải tán các lực lượng kiểm ngư và cảnh sát biển ở các địa phương."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Chiến lược biển đến năm 2020: Đưa Việt Nam trở thành quốc gia mạnh về biển, làm giàu từ biển, bảo vệ vững chắc chủ quyền biển đảo."
  },
  {
    id: "lsd-dh10-d2-016",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Tầm quan trọng của Cuộc vận động Học tập và làm theo tấm gương đạo đức Hồ Chí Minh là gì?",
    options: [
      "Nâng cao đạo đức cách mạng, chống suy thoái tư tưởng lối sống trong Đảng.",
      "Chỉ là hoạt động phong trào ngắn hạn không tác động đến công tác cán bộ.",
      "Thay thế cho toàn bộ các quy định pháp luật của Nhà nước đối với cán bộ.",
      "Nhằm mục đích cắt giảm biên chế cán bộ ở các cơ quan quản lý nhà nước."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Cuộc vận động tạo chuyển biến mạnh mẽ về nhận thức và hành động, rèn luyện đạo đức công vụ của cán bộ đảng viên."
  },
  {
    id: "lsd-dh10-d2-017",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Chủ trương giải quyết việc làm và giảm nghèo bền vững thời kỳ ĐH X ra sao?",
    options: [
      "Thực hiện các chương trình mục tiêu quốc gia, hỗ trợ các huyện nghèo nhất.",
      "Cắt giảm toàn bộ ngân sách hỗ trợ cho các vùng dân tộc thiểu số miền núi.",
      "Để người nghèo tự xoay xở mà không có chính sách bảo trợ xã hội nào.",
      "Chỉ tập trung giảm nghèo ở khu vực thành thị bỏ mặc các vùng nông thôn."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Chính phủ triển khai Chương trình 30a hỗ trợ giảm nghèo nhanh và bền vững đối với 61 huyện nghèo nhất cả nước."
  },
  {
    id: "lsd-dh10-d2-018",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Định hướng phát triển khoa học công nghệ thời kỳ ĐH X khi gia nhập WTO là gì?",
    options: [
      "Coi KH-CN là động lực then chốt nâng năng lực cạnh tranh sản phẩm Việt.",
      "Từ bỏ việc nghiên cứu KH-CN trong nước chỉ mua công nghệ cũ nước ngoài.",
      "Hạn chế việc ứng dụng công nghệ thông tin trong các doanh nghiệp tư nhân.",
      "Chỉ phát triển khoa học xã hội bỏ qua việc phát triển khoa học tự nhiên."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đổi mới công nghệ, nâng cao hàm lượng KH-CN trong sản phẩm xuất khẩu để nâng sức cạnh tranh khi gia nhập WTO."
  },
  {
    id: "lsd-dh10-d2-019",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Ý nghĩa của việc giữ vững ổn định kinh tế vĩ mô trong khủng hoảng 2008 là gì?",
    options: [
      "Kiểm soát lạm phát, suy giảm kinh tế, bảo đảm an sinh xã hội cho dân nghèo.",
      "Hy sinh sự ổn định vĩ mô để theo đuổi tốc độ tăng trưởng GDP quá cao.",
      "Mặc kệ lạm phát tăng cao không thực hiện bất kỳ công cụ tiền tệ nào.",
      "Ngừng toàn bộ hoạt động ngân hàng thương mại để chờ khủng hoảng qua."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Chuyển trọng tâm điều hành vĩ mô sang kiềm chế lạm phát, ổn định kinh tế vĩ mô, bảo đảm an sinh xã hội."
  },
  {
    id: "lsd-dh10-d2-020",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Nhiệm vụ kết hợp phát triển kinh tế với củng cố quốc phòng an ninh thời kỳ ĐH X là gì?",
    options: [
      "Tăng cường tiềm lực quốc phòng, bảo vệ môi trường hòa bình cho phát triển.",
      "Tách rời phát triển kinh tế và quốc phòng thành hai nhiệm vụ độc lập.",
      "Bỏ qua quốc phòng an ninh để dồn toàn bộ nguồn lực cho đầu tư hạ tầng.",
      "Dành toàn bộ ngân sách quốc gia để mua sắm trang thiết bị quân sự thô."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Phát triển kinh tế - xã hội gắn liền với tăng cường tiềm lực quốc phòng, an ninh, bảo vệ độc lập chủ quyền."
  },
  {
    id: "lsd-dh10-d2-021",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Mối quan hệ giữa đổi mới kinh tế và đổi mới hệ thống chính trị qua 20 năm ra sao?",
    options: [
      "Đổi mới kinh tế là trọng tâm, đồng thời từng bước đổi mới chính trị thận trọng.",
      "Tập trung đổi mới chính trị ồ ạt trước khi đổi mới cơ chế quản lý kinh tế.",
      "Tuyệt đối không thay đổi bất kỳ chính sách xã hội và thể chế pháp luật nào.",
      "Tách rời đổi mới kinh tế và chính trị thành hai quá trình không liên quan."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đổi mới kinh tế là trọng tâm, đồng thời từng bước đổi mới hệ thống chính trị vững chắc, không gây xáo trộn mất ổn định."
  },
  {
    id: "lsd-dh10-d2-022",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Vai trò của Mặt trận Tổ quốc và các đoàn thể nhân dân thời kỳ ĐH X là gì?",
    options: [
      "Đại diện cho quyền lợi của nhân dân, thực hiện giám sát và phản biện xã hội.",
      "Chỉ làm nhiệm vụ thi hành các mệnh lệnh hành chính của cơ quan nhà nước.",
      "Giải tán các tổ chức đoàn thể để giảm chi phí ngân sách hành chính công.",
      "Chỉ hoạt động mang tính hình thức không tham gia góp ý kiến xây dựng."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Phát huy vai trò của Mặt trận Tổ quốc và các đoàn thể nhân dân trong đại đoàn kết toàn dân và giám sát phản biện xã hội."
  },
  {
    id: "lsd-dh10-d2-023",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Chủ trương đổi mới doanh nghiệp nhà nước tại ĐH X tiếp tục đẩy mạnh khâu nào?",
    options: [
      "Đẩy mạnh cổ phần hóa, nâng cao năng lực quản trị và tính minh bạch công khai.",
      "Quốc hữu hóa toàn bộ các doanh nghiệp tư nhân đang hoạt động trên thị.",
      "Bao cấp thua lỗ cho tất cả các doanh nghiệp nhà nước yếu kém kéo dài.",
      "Bán toàn bộ các doanh nghiệp nhà nước cho các tập đoàn nước ngoài nắm."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Tiếp tục đẩy mạnh cổ phần hóa doanh nghiệp nhà nước, nâng cao hiệu quả và sức cạnh tranh."
  },
  {
    id: "lsd-dh10-d2-024",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Định hướng phát triển các ngành dịch vụ chất lượng cao thời kỳ ĐH X là gì?",
    options: [
      "Phát triển du lịch, tài chính ngân hàng, viễn thông và logistics hiện đại.",
      "Chỉ tập trung vào dịch vụ thương mại bán lẻ truyền thống ở nông thôn.",
      "Hạn chế các hoạt động dịch vụ tài chính ngân hàng có vốn đầu tư FDI.",
      "Cấm đoán các doanh nghiệp tư nhân tham gia vào ngành dịch vụ logistics."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Phát triển mạnh các ngành dịch vụ có giá trị gia tăng cao như tài chính, ngân hàng, viễn thông, du lịch, logistics."
  },
  {
    id: "lsd-dh10-d2-025",
    examSet: 2,
    sectionId: "dh-10-grp-2",
    subsectionId: "dh-10-sec-2",
    question: "Ý nghĩa của việc Việt Nam trúng cử HĐBA Liên Hợp Quốc (nhiệm kỳ 2008-2009) là gì?",
    options: [
      "Khẳng định chính sách đối ngoại đúng đắn, đóng góp tích cực vào hòa bình.",
      "Làm cho Việt Nam phải chịu sự chi phối quân sự của các cường quốc lớn.",
      "Tốn kém ngân sách quốc gia mà không đem lại vị thế ngoại giao nào.",
      "Chỉ là nhiệm vụ hình thức luân phiên giữa các quốc gia thành viên."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Việt Nam đóng góp tích cực vào công việc chung của Liên Hợp Quốc, nâng cao vị thế và uy tín trên trường quốc tế."
  },

  // 26-36: Hard (11 questions)
  {
    id: "lsd-dh10-d2-026",
    examSet: 2,
    sectionId: "dh-10-grp-3",
    subsectionId: "dh-10-sec-3",
    question: "Phân tích mối quan hệ giữa kiên định nguyên tắc và linh hoạt sách lược qua 20 năm Đổi mới?",
    options: [
      "Kiên định mục tiêu CNXH, độc lập dân tộc; linh hoạt chính sách thích ứng thị trường.",
      "Thay đổi mục tiêu tối cao của Đảng theo sự biến động ngẫu hứng của thị trường.",
      "Giữ nguyên các chính sách bao cấp cũ không chịu điều chỉnh thích ứng thực tế.",
      "Đánh đổi độc lập tự chủ để lấy sự hỗ trợ tài chính phát triển từ nước ngoài."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Kiên định mục tiêu độc lập dân tộc và CNXH, kiên định nền tảng Mác - Lênin; linh hoạt trong chính sách và bước đi thực tiễn."
  },
  {
    id: "lsd-dh10-d2-027",
    examSet: 2,
    sectionId: "dh-10-grp-3",
    subsectionId: "dh-10-sec-3",
    question: "Tại sao việc cho phép Đảng viên làm kinh tế tư nhân không làm chệch hướng XHCN?",
    options: [
      "Đảng viên làm kinh tế hợp pháp, đóng góp cho xã hội, tuân thủ pháp luật và Điều lệ.",
      "Vì Đảng viên sẽ chuyển toàn bộ tài sản doanh nghiệp tư nhân cho Nhà nước.",
      "Bởi vì kinh tế tư nhân đã trở thành thành viên giữ vai trò chủ đạo nền kinh tế.",
      "Vì Đảng sẽ xóa bỏ hoàn toàn thành phần kinh tế nhà nước trong nền kinh tế."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đảng viên làm kinh tế tư nhân gương mẫu chấp hành pháp luật, đóng thuế, tạo việc làm là đóng góp tích cực cho đất nước."
  },
  {
    id: "lsd-dh10-d2-028",
    examSet: 2,
    sectionId: "dh-10-grp-3",
    subsectionId: "dh-10-sec-3",
    question: "Phân tích giá trị của bài học 'Xây dựng Đảng là nhiệm vụ then chốt' tại ĐH X?",
    options: [
      "Đảng vững mạnh mới bảo đảm sự lãnh đạo đúng đắn cho công cuộc Đổi mới và hội nhập.",
      "Xây dựng Đảng chỉ là nhiệm vụ hình thức không ảnh hưởng tới phát triển kinh tế.",
      "Nhằm mục đích cắt giảm biên chế cán bộ ở các cơ quan chính quyền địa phương.",
      "Để chuyển giao quyền quản lý nhà nước cho các tập đoàn tư nhân lớn."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Phát triển kinh tế là trung tâm, xây dựng Đảng là then chốt — sự lãnh đạo đúng đắn của Đảng là nhân tố quyết định mọi thắng lợi."
  },
  {
    id: "lsd-dh10-d2-029",
    examSet: 2,
    sectionId: "dh-10-grp-3",
    subsectionId: "dh-10-sec-3",
    question: "Tại sao hội nhập WTO (2007) đòi hỏi Việt Nam phải chủ động phòng ngừa rủi ro kinh tế vĩ mô?",
    options: [
      "Độ mở kinh tế lớn khiến biến động thị trường thế giới dễ tác động nhanh vào trong.",
      "Vì nền kinh tế Việt Nam không giao thương với các thị trường bên ngoài.",
      "Bởi vì gia nhập WTO làm cho các doanh nghiệp trong nước tự động phát triển.",
      "Vì Nhà nước sẽ không còn quyền điều tiết giá cả vĩ mô đối với hàng hóa."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Độ mở nền kinh tế cao khiến các cú sốc tài chính toàn cầu (như khủng hoảng 2008) tác động trực tiếp, đòi hỏi năng lực quản trị vĩ mô vững vàng."
  },
  {
    id: "lsd-dh10-d2-030",
    examSet: 2,
    sectionId: "dh-10-grp-3",
    subsectionId: "dh-10-sec-3",
    question: "Phân tích bài học 'Phát huy sức mạnh đại đoàn kết toàn dân tộc' qua 20 năm Đổi mới?",
    options: [
      "Đoàn kết là nguồn sức mạnh nội lực to lớn nhất, quyết định thành công của Đổi mới.",
      "Chỉ đại đoàn kết đối với các tầng lớp nhân dân sinh sống ở vùng đô thị.",
      "Chia rẽ các tầng lớp nhân dân theo mức thu nhập và nguồn gốc thành phần.",
      "Bỏ qua vai trò của các đoàn thể quần chúng xã hội trong hệ thống chính trị."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đại đoàn kết toàn dân tộc trên cơ sở liên minh công - nông - trí thức là động lực chủ yếu phát triển đất nước."
  },
  {
    id: "lsd-dh10-d2-031",
    examSet: 2,
    sectionId: "dh-10-grp-3",
    subsectionId: "dh-10-sec-3",
    question: "Ý nghĩa của việc ban hành Nghị quyết TƯ 7 khóa X về Tam nông đối với sự nghiệp CNH-HĐH?",
    options: [
      "Ổn định nông thôn là cơ sở ổn định kinh tế - xã hội, đảm bảo an ninh lương thực.",
      "Chuyển toàn bộ ngân sách phát triển nông thôn sang xây dựng siêu đô thị.",
      "Giải tán các hợp tác xã nông nghiệp để đưa đất đai cho tư nhân quản lý.",
      "Xóa bỏ hoàn toàn sản xuất nông nghiệp để chuyển sang làm công nghiệp."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Nông nghiệp nông thôn là bệ đỡ cho kinh tế; ổn định Tam nông là điều kiện quyết định để CNH-HĐH thành công."
  },
  {
    id: "lsd-dh10-d2-032",
    examSet: 2,
    sectionId: "dh-10-grp-3",
    subsectionId: "dh-10-sec-3",
    question: "Tại sao công tác chỉnh đốn Đảng phải gắn liền với chống tham nhũng, lãng phí thời kỳ ĐH X?",
    options: [
      "Tham nhũng lãng phí làm suy giảm niềm tin của dân, đe dọa sự sống còn của chế độ.",
      "Vì tham nhũng là hiện tượng tự nhiên không thể ngăn chặn trong kinh tế.",
      "Để cắt giảm bớt kinh phí hoạt động của các cơ quan chính quyền nhà nước.",
      "Nhằm mục đích giải tán các ban ngành kiểm tra giám sát của các cấp ủy."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Tham nhũng là giặc nội xâm; đấu tranh chống tham nhũng lãng phí giúp làm sạch bộ máy, củng cố niềm tin nhân dân."
  },
  {
    id: "lsd-dh10-d2-033",
    examSet: 2,
    sectionId: "dh-10-grp-3",
    subsectionId: "dh-10-sec-3",
    question: "Phân tích bài học kết hợp nội lực và ngoại lực thời kỳ ĐH X khi hội nhập sâu rộng?",
    options: [
      "Nội lực là quyết định, ngoại lực là quan trọng; kết hợp tạo sức mạnh tổng hợp.",
      "Dựa hoàn toàn vào vốn vay ngoại lực mà không chú trọng phát huy nội lực.",
      "Đóng cửa kinh tế tuyệt đối chỉ dựa vào nội lực không giao thương quốc tế.",
      "Đánh đổi độc lập chủ quyền để lấy sự hỗ trợ tài chính từ các nước lớn."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Nội lực là nhân tố quyết định; tranh thủ ngoại lực từ WTO và FDI để nhân lên sức mạnh nội lực."
  },
  {
    id: "lsd-dh10-d2-034",
    examSet: 2,
    sectionId: "dh-10-grp-3",
    subsectionId: "dh-10-sec-3",
    question: "Ý nghĩa của việc kiên định nền tảng tư tưởng Mác-Lênin và tư tưởng Hồ Chí Minh?",
    options: [
      "Giữ vững ngọn cờ tư tưởng kim chỉ nam, không hoang mang trước các biến động.",
      "Rập khuôn máy móc lý luận không chịu đổi mới chính sách theo thực tiễn.",
      "Bãi bỏ toàn bộ các bài học kinh nghiệm đã đúc kết qua các kỳ Đại hội.",
      "Thay thế lý luận chính trị bằng các nguyên lý kinh doanh tư bản tư nhân."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Nền tảng tư tưởng Mác - Lênin và tư tưởng Hồ Chí Minh là kim chỉ nam soi đường cho mọi thắng lợi của cách mạng Việt Nam."
  },
  {
    id: "lsd-dh10-d2-035",
    examSet: 2,
    sectionId: "dh-10-grp-3",
    subsectionId: "dh-10-sec-3",
    question: "Tại sao bài học 'Nói đi đôi với làm, coi trọng hiệu quả thực tế' lại cấp thiết ở ĐH X?",
    options: [
      "Khắc phục bệnh nói nhiều làm ít, hình thức, đảm bảo Nghị quyết đi vào cuộc sống.",
      "Để cắt giảm bớt các kỳ họp thảo luận của Ban Chấp hành Trung ương Đảng.",
      "Nhằm mục đích thay thế cho các quy trình kiểm tra giám sát cán bộ.",
      "Để giải tán các cơ quan tham mưu tư vấn của Đảng ở các cấp quản lý."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Coi trọng hiệu quả thực tế, hành động quyết liệt giúp đưa đường lối của Đảng thành kết quả phát triển kinh tế - xã hội cụ thể."
  },
  {
    id: "lsd-dh10-d2-036",
    examSet: 2,
    sectionId: "dh-10-grp-3",
    subsectionId: "dh-10-sec-3",
    question: "Nguyên nhân cốt lõi giúp Việt Nam đứng vững và tăng trưởng trong khủng hoảng kinh tế 2008 là gì?",
    options: [
      "Sự điều hành vĩ mô linh hoạt, nội lực nông nghiệp vững và hỗ trợ an sinh kịp thời.",
      "Do Việt Nam không chịu tác động nào từ thị trường tài chính quốc tế.",
      "Do nền kinh tế tự động điều chỉnh mà không cần sự quản lý của Nhà nước.",
      "Do quay trở lại áp dụng cơ chế kinh tế tập trung bao cấp tem phiếu."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Sự chỉ đạo quyết liệt của Đảng, điều hành vĩ mô linh hoạt của Chính phủ, bệ đỡ nông nghiệp và sự đồng lòng của toàn dân."
  },

  // 37-40: Outside (4 questions - Practical Application)
  {
    id: "lsd-dh10-d2-037",
    examSet: 2,
    sectionId: "dh-10-grp-4",
    subsectionId: "dh-10-sec-4",
    question: "Bài học từ chủ trương Đảng viên làm kinh tế tư nhân tại ĐH X gợi mở gì cho cán bộ trẻ?",
    options: [
      "Năng động, sáng tạo, kinh doanh liêm chính, đóng góp lợi ích cho cộng đồng.",
      "Tránh né hoạt động làm giàu chính đáng vì sợ rủi ro trong quản lý.",
      "Lợi dụng chức vụ công để trục lợi cá nhân vi phạm quy định pháp luật.",
      "Chỉ làm việc thụ động theo mệnh lệnh mà không có tinh thần đổi mới."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Cán bộ trẻ cần tư duy năng động, sáng tạo, làm giàu chính đáng và phụng sự nhân dân."
  },
  {
    id: "lsd-dh10-d2-038",
    examSet: 2,
    sectionId: "dh-10-grp-4",
    subsectionId: "dh-10-sec-4",
    question: "Từ bài học hội nhập WTO (2007), thanh niên cần trang bị hành trang gì trong kỷ nguyên số?",
    options: [
      "Năng lực số, ngoại ngữ toàn cầu, tư duy đổi mới sáng tạo và kỹ năng hội nhập.",
      "Ỷ lại vào kiến thức cũ không cần cập nhật các xu hướng công nghệ mới.",
      "Thờ ơ với các sự kiện kinh tế quốc tế và không rèn luyện kỹ năng mềm.",
      "Bỏ học sớm để tham gia lao động phổ thông không cần đào tạo chuyên môn."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Hội nhập số đòi hỏi thanh niên phải không ngừng học tập, làm chủ công nghệ và rèn luyện bản lĩnh toàn cầu."
  },
  {
    id: "lsd-dh10-d2-039",
    examSet: 2,
    sectionId: "dh-10-grp-4",
    subsectionId: "dh-10-sec-4",
    question: "Ý nghĩa của Cuộc vận động Học tập đạo đức Hồ Chí Minh áp dụng trong đời sống cá nhân là gì?",
    options: [
      "Cần kiệm liêm chính, khiêm tốn, trung thực, có trách nhiệm với công việc.",
      "Sống lãng phí, phô trương và không trung thực trong học tập làm việc.",
      "Tránh né trách nhiệm khi mắc sai lầm và đổ lỗi cho người khác.",
      "Tự tin thái quá không lắng nghe sự góp ý chân thành từ bạn bè."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Học tập Bác Hồ từ những việc làm nhỏ nhất: Trung thực, khiêm tốn, trách nhiệm và sống có lý tưởng."
  },
  {
    id: "lsd-dh10-d2-040",
    examSet: 2,
    sectionId: "dh-10-grp-4",
    subsectionId: "dh-10-sec-4",
    question: "Bài học Chiến lược biển từ NQTƯ 4 khóa X (2007) nhắc nhở thế hệ trẻ điều gì?",
    options: [
      "Yêu nước, bảo vệ chủ quyền biển đảo, phát triển kinh tế biển bền vững.",
      "Thờ ơ với các vấn đề chủ quyền hải đảo và tài nguyên biển quốc gia.",
      "Xả rác thải nhựa tàn phá môi trường sinh thái biển và ven bờ.",
      "Vi phạm pháp luật trên biển và không chấp hành sự hướng dẫn hải quân."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Thế hệ trẻ có trách nhiệm bảo vệ chủ quyền thiêng liêng và tham gia phát triển kinh tế biển xanh bền vững."
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
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ CHUẨN 2: ĐẠI HỘI X (4/2006)
   Mã Bộ Đề: questions-lsd-dh10-part2.js
   Số lượng: 40 câu cố định (36 Inside + 4 Outside)
   ============================================================ */

export const questionsLsdDh10Part2 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh10-part2.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh10-part2.js");
}
