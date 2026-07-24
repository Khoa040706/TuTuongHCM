import fs from "fs";

// 40 questions for Fixed Exam Set 2 (Đại hội VIII - 6/1996)
// 36 Inside (7 Easy, 18 Medium, 11 Hard) + 4 Outside
const questions = [
  // 1-7: Easy (7 questions)
  {
    id: "lsd-dh8-d2-001",
    examSet: 2,
    sectionId: "dh-8-grp-1",
    subsectionId: "dh-8-sec-1",
    question: "Số lượng đảng viên cả nước mà Đại hội VIII (6/1996) đại diện là bao nhiêu?",
    options: [
      "Đại hội đại diện cho gần 2,13 triệu đảng viên trong cả nước.",
      "Đại hội đại diện cho hơn 2,10 triệu đảng viên trong cả nước.",
      "Đại hội đại diện cho hơn 1,90 triệu đảng viên trong cả nước.",
      "Đại hội đại diện cho hơn 1,70 triệu đảng viên trong cả nước."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VIII đại diện cho gần 2,13 triệu đảng viên cả nước."
  },
  {
    id: "lsd-dh8-d2-002",
    examSet: 2,
    sectionId: "dh-8-grp-1",
    subsectionId: "dh-8-sec-1",
    question: "Địa điểm tổ chức Đại hội đại biểu toàn quốc lần thứ VIII của Đảng (6/1996) là ở đâu?",
    options: [
      "Đại hội được tổ chức tại Thủ đô Hà Nội trong Hội trường Ba Đình lịch sử.",
      "Đại hội được tổ chức tại xã Vinh Quang, huyện Chiêm Hóa, tỉnh Tuyên Quang.",
      "Đại hội được tổ chức tại thành phố Hồ Chí Minh sau ngày giải phóng Nam.",
      "Đại hội được tổ chức tại thành phố Ma Cao thuộc khu vực nước Trung Quốc."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VIII họp tại Thủ đô Hà Nội."
  },
  {
    id: "lsd-dh8-d2-003",
    examSet: 2,
    sectionId: "dh-8-grp-1",
    subsectionId: "dh-8-sec-1",
    question: "Hai yếu tố then chốt được ĐH VIII khẳng định là quốc sách hàng đầu phát triển đất nước là gì?",
    options: [
      "Khoa học - công nghệ và Giáo dục - đào tạo là quốc sách hàng đầu.",
      "Công nghiệp nặng và Nông nghiệp lúa nước là quốc sách hàng đầu.",
      "Thương mại dịch vụ và Du lịch quốc tế là quốc sách hàng đầu.",
      "Tài chính ngân hàng và Giao thông vận tải là quốc sách hàng đầu."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "ĐH VIII xác định Khoa học - công nghệ và Giáo dục - đào tạo là quốc sách hàng đầu."
  },
  {
    id: "lsd-dh8-d2-004",
    examSet: 2,
    sectionId: "dh-8-grp-1",
    subsectionId: "dh-8-sec-1",
    question: "Thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước chính thức được mở ra từ Đại hội nào?",
    options: [
      "Thời kỳ đẩy mạnh CNH-HĐH chính thức được mở ra tại Đại hội VIII.",
      "Thời kỳ đẩy mạnh CNH-HĐH chính thức được mở ra tại Đại hội VII.",
      "Thời kỳ đẩy mạnh CNH-HĐH chính thức được mở ra tại Đại hội VI.",
      "Thời kỳ đẩy mạnh CNH-HĐH chính thức được mở ra tại Đại hội V."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VIII (6/1996) mở ra thời kỳ đẩy mạnh CNH-HĐH đất nước."
  },
  {
    id: "lsd-dh8-d2-005",
    examSet: 2,
    sectionId: "dh-8-grp-1",
    subsectionId: "dh-8-sec-1",
    question: "Việt Nam chính thức trở thành thành viên của Hiệp hội các quốc gia Đông Nam Á (ASEAN) vào năm nào?",
    options: [
      "Việt Nam gia nhập ASEAN vào tháng 7 năm 1995.",
      "Việt Nam gia nhập ASEAN vào tháng 7 năm 1996.",
      "Việt Nam gia nhập ASEAN vào tháng 6 năm 1991.",
      "Việt Nam gia nhập ASEAN vào tháng 12 năm 1997."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Tháng 7/1995, Việt Nam chính thức gia nhập ASEAN."
  },
  {
    id: "lsd-dh8-d2-006",
    examSet: 2,
    sectionId: "dh-8-grp-1",
    subsectionId: "dh-8-sec-1",
    question: "Số lượng ủy viên Ban Chấp hành Trung ương Đảng do Đại hội VIII (6/1996) bầu ra là bao nhiêu?",
    options: [
      "Ban Chấp hành Trung ương Đảng khóa VIII gồm 170 ủy viên chính thức.",
      "Ban Chấp hành Trung ương Đảng khóa VIII gồm 146 ủy viên chính thức.",
      "Ban Chấp hành Trung ương Đảng khóa VIII gồm 150 ủy viên chính thức.",
      "Ban Chấp hành Trung ương Đảng khóa VIII gồm 180 ủy viên chính thức."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "BCH Trung ương khóa VIII gồm 170 ủy viên chính thức."
  },
  {
    id: "lsd-dh8-d2-007",
    examSet: 2,
    sectionId: "dh-8-grp-1",
    subsectionId: "dh-8-sec-1",
    question: "Mục tiêu tổng quát của thời kỳ CNH-HĐH do Đại hội VIII khẳng định là gì?",
    options: [
      "Xây dựng nước Việt Nam dân giàu, nước mạnh, xã hội công bằng, văn minh.",
      "Chuyển toàn bộ nền kinh tế cả nước sang mô hình tập trung bao cấp.",
      "Hoàn thành triệt để quá trình đô thị hóa tại tất cả các địa phương.",
      "Xóa bỏ hoàn toàn thành phần kinh tế nhà nước để tư nhân hóa."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Mục tiêu CNH-HĐH: Dân giàu, nước mạnh, xã hội công bằng, văn minh."
  },

  // 8-25: Medium (18 questions)
  {
    id: "lsd-dh8-d2-008",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Cơ cấu các thành phần kinh tế theo định hướng Đại hội VIII bao gồm những thành phần nào?",
    options: [
      "Kinh tế nhà nước, kinh tế tập thể, tư nhân, tư bản nhà nước và có vốn FDI.",
      "Kinh tế quốc doanh và kinh tế tập thể là hai thành phần duy nhất hoạt động.",
      "Kinh tế tư nhân và kinh tế có vốn đầu tư nước ngoài FDI nắm giữ toàn bộ.",
      "Kinh tế cá thể tiểu nông là thành phần kinh tế chính chiếm ưu thế tuyệt đối."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "ĐH VIII định hướng phát triển nền kinh tế nhiều thành phần: Nhà nước, Tập thể, Cá thể/tiểu chủ, Tư bản tư nhân, Tư bản nhà nước, Có vốn đầu tư nước ngoài."
  },
  {
    id: "lsd-dh8-d2-009",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Vai trò của thành phần kinh tế tư nhân trong thời kỳ ĐH VIII được đánh giá ra sao?",
    options: [
      "Là một bộ phận cấu thành quan trọng của nền kinh tế quốc dân nhiều thành phần.",
      "Là thành phần kinh tế phản động cần phải hạn chế và tiêu diệt triệt để.",
      "Là thành phần kinh tế duy nhất nắm quyền chi phối toàn bộ hạ tầng kỹ thuật.",
      "Là thành phần kinh tế phụ thuộc hoàn toàn vào chính sách của các nước ngoài."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Kinh tế tư nhân được khẳng định là một bộ phận cấu thành quan trọng của nền kinh tế nhiều thành phần."
  },
  {
    id: "lsd-dh8-d2-010",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Định hướng phát triển lực lượng sản xuất trong quá trình CNH-HĐH tại ĐH VIII là gì?",
    options: [
      "Ứng dụng nhanh những thành tựu KH-CN hiện đại, kết hợp công nghệ truyền thống.",
      "Từ bỏ hoàn toàn công nghệ truyền thống chỉ dùng trang thiết bị nhập khẩu.",
      "Chỉ sử dụng lao động thủ công giá rẻ để giảm chi phí đầu tư hạ tầng.",
      "Nhập khẩu công nghệ cũ lỗi thời từ các nước phát triển để tiết kiệm vốn."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Kết hợp công nghệ truyền thống với công nghệ hiện đại, tranh thủ ứng dụng KH-CN tiên tiến."
  },
  {
    id: "lsd-dh8-d2-011",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Trọng tâm của việc xây dựng nền văn hóa Việt Nam theo Nghị quyết Trung ương 5 khóa VIII là gì?",
    options: [
      "Bản sắc dân tộc gắn liền với tiên tiến, lấy con người làm trung tâm phát triển.",
      "Tiếp thu rập khuôn toàn bộ lối sống hiện đại từ các quốc gia phương Tây.",
      "Loại bỏ các di tích lịch sử truyền thống để xây dựng công trình giải trí.",
      "Chỉ chú trọng phát triển nghệ thuật biểu diễn phục vụ du lịch nước ngoài."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc, bồi dưỡng con người Việt Nam phát triển toàn diện."
  },
  {
    id: "lsd-dh8-d2-012",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Yêu cầu đổi mới công tác cán bộ được ĐH VIII và các Hội nghị Trung ương khóa VIII nhấn mạnh là gì?",
    options: [
      "Nâng cao phẩm chất đạo đức cách mạng, trình độ lý luận và năng lực thực tiễn.",
      "Tiêu chuẩn duy nhất là thâm niên công tác không cần qua đào tạo trình độ.",
      "Ưu tiên tuyệt đối cán bộ có nguồn gốc gia đình giàu có trong kinh doanh.",
      "Bãi bỏ hoàn toàn quy trình kiểm tra quy hoạch cán bộ ở các cấp quản lý."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Xây dựng đội ngũ cán bộ có phẩm chất chính trị, đạo đức lối sống trong sạch, có năng lực lãnh đạo và quản lý."
  },
  {
    id: "lsd-dh8-d2-013",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Nghị quyết Trung ương 3 khóa VIII (tháng 6/1997) mang nội dung chỉ đạo chiến lược gì?",
    options: [
      "Chiến lược cán bộ thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước.",
      "Đột phá phát triển hạ tầng giao thông vận tải đường bộ và đường sắt quốc gia.",
      "Chiến lược bảo vệ an ninh thông tin mạng và bưu chính viễn thông hiện đại.",
      "Chính sách ưu đãi thuế đặc biệt cho các doanh nghiệp đầu tư nước ngoài FDI."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Hội nghị Trung ương 3 khóa VIII (6/1997) thông qua 'Chiến lược cán bộ thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước'."
  },
  {
    id: "lsd-dh8-d2-014",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Nguyên tắc cơ bản trong việc mở rộng quan hệ kinh tế đối ngoại tại ĐH VIII là gì?",
    options: [
      "Bình đẳng, cùng có lợi, tôn trọng độc lập chủ quyền và không can thiệp nội bộ.",
      "Chấp nhận mọi điều kiện áp đặt của các nước lớn để thu hút vốn đầu tư.",
      "Chỉ quan hệ thương mại với các nước có cùng chế độ chính trị xã hội.",
      "Ưu tiên tuyệt đối cho hàng hóa nhập khẩu tiêu dùng từ thị trường Châu Âu."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Bình đẳng, cùng có lợi, giữ vững độc lập chủ quyền và định hướng XHCN trong hội nhập."
  },
  {
    id: "lsd-dh8-d2-015",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Tầm quan trọng của Chiến lược phát triển giáo dục - đào tạo theo Nghị quyết TƯ 2 khóa VIII là gì?",
    options: [
      "Nâng cao dân trí, đào tạo nhân lực, bồi dưỡng nhân tài phục vụ CNH-HĐH.",
      "Phổ cập đại học bằng mọi giá không chú trọng chất lượng đào tạo thực tế.",
      "Thương mại hóa toàn bộ hệ thống trường học công lập trên cả nước.",
      "Bãi bỏ việc dạy các môn lý luận chính trị trong nhà trường phổ thông."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Mục tiêu giáo dục: Nâng cao dân trí, đào tạo nhân lực, bồi dưỡng nhân tài cho đất nước."
  },
  {
    id: "lsd-dh8-d2-016",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Mục tiêu của việc phát triển kinh tế tập thể thời kỳ ĐH VIII được xác định ra sao?",
    options: [
      "Đổi mới mô hình hợp tác xã kiểu mới, tự nguyện, cùng có lợi và hiệu quả.",
      "Quay lại mô hình hợp tác xã bao cấp cào bằng trước thời kỳ đổi mới.",
      "Giải tán toàn bộ các hợp tác xã để chuyển sang kinh tế hộ tư nhân.",
      "Bắt buộc mọi người dân nông thôn phải gia nhập hợp tác xã tập trung."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đổi mới và phát triển kinh tế tập thể theo mô hình hợp tác xã kiểu mới dựa trên nguyên tắc tự nguyện, bình đẳng, cùng có lợi."
  },
  {
    id: "lsd-dh8-d2-017",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Ý nghĩa của việc đẩy mạnh CNH-HĐH nông nghiệp và phát triển nông thôn là gì?",
    options: [
      "Xây dựng nông thôn mới, nâng cao đời sống nông dân, bảo đảm an ninh lương thực.",
      "Biến toàn bộ đất nông nghiệp thành các khu đô thị và sân golf hiện đại.",
      "Giảm dần tỷ lệ xuất khẩu nông sản để tập trung cho hàng công nghiệp.",
      "Chuyển toàn bộ lực lượng lao động nông thôn ra các thành phố lớn."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "CNH-HĐH nông nghiệp, nông thôn nhằm tạo cơ sở ổn định cho nền kinh tế, nâng cao đời sống nông dân."
  },
  {
    id: "lsd-dh8-d2-018",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Đóng góp của việc ban hành Bộ luật Lao động năm 1994 đối với thời kỳ ĐH VIII là gì?",
    options: [
      "Bảo vệ quyền lợi hợp pháp của người lao động và người sử dụng lao động.",
      "Cấm đoán các doanh nghiệp tư nhân tuyển dụng lao động hợp đồng.",
      "Tự do sa thải người lao động mà không cần lý do hay bồi thường.",
      "Bãi bỏ vai trò của tổ chức Công đoàn trong các doanh nghiệp FDI."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Bộ luật Lao động 1994 (có hiệu lực 1995) tạo cơ sở pháp lý hài hòa quan hệ lao động trong nền kinh tế thị trường."
  },
  {
    id: "lsd-dh8-d2-019",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Chủ trương kết hợp phát triển các vùng kinh tế trọng điểm tại ĐH VIII mang ý nghĩa gì?",
    options: [
      "Tạo đầu tàu tăng trưởng thúc đẩy các vùng khác cùng phát triển hài hòa.",
      "Dồn toàn bộ ngân sách cho vùng trọng điểm bỏ mặc vùng sâu vùng xa.",
      "Ngăn cấm việc di chuyển lao động giữa các vùng kinh tế khác nhau.",
      "Chỉ tập trung phát triển hạ tầng kinh tế biển xem nhẹ vùng trung du."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Phát triển các vùng kinh tế trọng điểm làm đầu tàu bứt phá, đồng thời hỗ trợ các vùng khó khăn cùng phát triển."
  },
  {
    id: "lsd-dh8-d2-020",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Chính sách đối với lực lượng tiểu thương, hộ sản xuất cá thể thời kỳ ĐH VIII là gì?",
    options: [
      "Khuyến khích, hỗ trợ phát triển theo pháp luật, tạo việc làm cho xã hội.",
      "Hạn chế và ngăn cấm kinh doanh cá thể để tập trung cho nhà nước.",
      "Đánh thuế cực cao để buộc các hộ kinh doanh cá thể phải giải thể.",
      "Bắt buộc tất cả các hộ cá thể phải hợp nhất thành tập đoàn lớn."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Kinh tế cá thể, tiểu chủ được khuyến khích phát triển, được tạo điều kiện thuận lợi trong sản xuất kinh doanh."
  },
  {
    id: "lsd-dh8-d2-021",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Ý nghĩa của việc mở rộng thị trường xuất nhập khẩu thời kỳ ĐH VIII là gì?",
    options: [
      "Tăng nguồn thu ngoại tệ, nâng cao năng lực sản xuất và sức cạnh tranh.",
      "Làm tăng sự phụ thuộc tuyệt đối của nền kinh tế vào một thị trường.",
      "Gây thâm hụt cán cân thương mại trầm trọng không thể khắc phục.",
      "Biến Việt Nam thành thị trường tiêu thụ hàng cũ của các nước lớn."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đa dạng hóa thị trường xuất nhập khẩu giúp tranh thủ ngoại lực, nâng cao sức cạnh tranh kinh tế."
  },
  {
    id: "lsd-dh8-d2-022",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Chủ trương giải quyết việc làm cho người lao động tại ĐH VIII được xác định ra sao?",
    options: [
      "Là chính sách xã hội hàng đầu, khuyến khích mọi thành phần kinh tế tạo việc làm.",
      "Là trách nhiệm nhiệm vụ duy nhất thuộc về các cơ quan doanh nghiệp nhà nước.",
      "Để người lao động tự xoay xở và tuyệt đối không có chính sách hỗ trợ từ Nhà nước.",
      "Đẩy mạnh xuất khẩu toàn bộ lực lượng lao động trẻ ra các quốc gia nước ngoài."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Giải quyết việc làm là yếu tố quyết định để phát triển con người, giảm nghèo và ổn định xã hội."
  },
  {
    id: "lsd-dh8-d2-023",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Thành tựu xóa đói giảm nghèo nổi bật trong nhiệm kỳ ĐH VIII là gì?",
    options: [
      "Tỷ lệ hộ nghèo giảm nhanh đáng kể, được cộng đồng quốc tế đánh giá cao.",
      "Xóa bỏ hoàn toàn tình trạng chênh lệch giàu nghèo giữa các tầng lớp.",
      "Tăng gấp đôi số lượng hộ nghèo ở các tỉnh khu vực đồng bằng sông Hồng.",
      "Chỉ tập trung giảm nghèo cho thành thị xem nhẹ vùng dân tộc thiểu số."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Chương trình mục tiêu quốc gia Xóa đói giảm nghèo đạt kết quả ấn tượng, trở thành điểm sáng của Việt Nam."
  },
  {
    id: "lsd-dh8-d2-024",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Định hướng phát triển các ngành công nghiệp mũi nhọn thời kỳ ĐH VIII bao gồm những ngành nào?",
    options: [
      "Chế biến nông lâm thủy sản, năng lượng, hàng tiêu dùng và xuất khẩu.",
      "Chỉ tập trung duy nhất vào công nghiệp luyện kim và cơ khí nặng.",
      "Chỉ tập trung vào công nghiệp khai thác khoáng sản thô để bán.",
      "Công nghiệp sản xuất vũ khí đạn dược và trang thiết bị quân sự."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Ưu tiên phát triển các ngành công nghiệp chế biến, hàng tiêu dùng, hàng xuất khẩu, năng lượng và hạ tầng."
  },
  {
    id: "lsd-dh8-d2-025",
    examSet: 2,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Vai trò của Quần chúng nhân dân trong đường lối CNH-HĐH tại ĐH VIII được khẳng định ra sao?",
    options: [
      "Là chủ thể thực hiện, là mục tiêu và là động lực của sự nghiệp Đổi mới.",
      "Chỉ là lực lượng thi hành mệnh lệnh từ cơ quan quản lý cấp trên.",
      "Không có quyền tham gia góp ý kiến vào các quy hoạch phát triển.",
      "Chỉ đóng góp nghĩa vụ thuế mà không được hưởng thành quả kinh tế."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Dân biết, dân bàn, dân làm, dân kiểm tra, dân thụ hưởng — nhân dân là trung tâm của công cuộc Đổi mới."
  },

  // 26-36: Hard (11 questions)
  {
    id: "lsd-dh8-d2-026",
    examSet: 2,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Phân tích mối quan hệ giữa độc lập tự chủ và hội nhập kinh tế quốc tế từ ĐH VIII?",
    options: [
      "Độc lập tự chủ là tiền đề hội nhập, hội nhập để tăng cường sức mạnh độc lập.",
      "Hội nhập kinh tế bắt buộc phải đánh đổi độc lập tự chủ về chính trị.",
      "Độc lập tự chủ có nghĩa là đóng cửa tuyệt đối không giao thương ngoại.",
      "Hội nhập quốc tế sẽ làm tan biến hoàn toàn chủ quyền quốc gia."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Giữ vững độc lập tự chủ đi đôi với chủ động hội nhập kinh tế quốc tế; hội nhập nhằm nâng cao thế và lực quốc gia."
  },
  {
    id: "lsd-dh8-d2-027",
    examSet: 2,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Tại sao ĐH VIII xác định CNH-HĐH phải dựa trên cơ chế thị trường có sự quản lý của Nhà nước?",
    options: [
      "Để thị trường phân bổ nguồn lực hiệu quả, Nhà nước định hướng XHCN.",
      "Để Nhà nước quay lại can thiệp bằng mệnh lệnh hành chính như bao cấp.",
      "Để thị trường tự do hoàn toàn thao túng mà không cần sự quản lý vĩ mô.",
      "Để loại bỏ vai trò của các doanh nghiệp nhà nước trong kinh tế vĩ mô."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Cơ chế thị trường đảm bảo tính linh hoạt, hiệu quả; sự quản lý của Nhà nước định hướng XHCN, đảm bảo công bằng xã hội."
  },
  {
    id: "lsd-dh8-d2-028",
    examSet: 2,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Phân tích ý nghĩa của 6 bài học kinh nghiệm qua 10 năm Đổi mới (1986-1996) đối với sự nghiệp phát triển?",
    options: [
      "Là kim chỉ nam tư tưởng, củng cố niềm tin và định hướng bước đi vững chắc.",
      "Là những tuyên bố lý thuyết suông không có giá trị thực tiễn quản lý.",
      "Làm cho đường lối của Đảng trở nên cứng nhắc không thể điều chỉnh.",
      "Nhằm mục đích thay thế cho toàn bộ nội dung của Cương lĩnh 1991."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "6 bài học đúc kết từ thực tiễn 10 năm Đổi mới có giá trị phương pháp luận sâu sắc cho giai đoạn CNH-HĐH."
  },
  {
    id: "lsd-dh8-d2-029",
    examSet: 2,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Tại sao phát triển lực lượng sản xuất gắn với xây dựng quan hệ sản xuất phù hợp là quy luật tại ĐH VIII?",
    options: [
      "Đảm bảo giải phóng sức sản xuất, thúc đẩy kinh tế phát triển đúng định hướng.",
      "Để xóa bỏ hoàn toàn các thành phần kinh tế tư nhân trong xã hội.",
      "Để đưa quan hệ sản xuất đi trước vượt quá trình độ của lực lượng sản xuất.",
      "Để quay lại chế độ công hữu tuyệt đối như giai đoạn trước năm 1986."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Quan hệ sản xuất phải phù hợp với tính chất và trình độ của lực lượng sản xuất mới mở đường cho kinh tế phát triển."
  },
  {
    id: "lsd-dh8-d2-030",
    examSet: 2,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Ý nghĩa của việc kết hợp CNH với HĐH ngay từ đầu thời kỳ ĐH VIII là gì?",
    options: [
      "Rút ngắn khoảng cách phát triển, đi tắt đón đầu công nghệ tiên tiến.",
      "Bắt buộc phải đi tuần tự từ công nghiệp hóa cổ điển rồi mới hiện đại.",
      "Bỏ qua công nghiệp hóa để tiến thẳng lên kinh tế tri thức hiện đại.",
      "Chỉ tập trung hiện đại hóa ngành công nghệ thông tin bỏ qua các ngành."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "CNH gắn liền với HĐH cho phép Việt Nam kết hợp các bước đi tuần tự với phát triển nhảy vọt, rút ngắn thời gian."
  },
  {
    id: "lsd-dh8-d2-031",
    examSet: 2,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Tại sao công tác chỉnh đốn Đảng theo NQ TƯ 6 (lần 2) khóa VIII lại mang tính cấp bách?",
    options: [
      "Ngăn chặn suy thoái tư tưởng đạo đức, nâng cao năng lực lãnh đạo trước thách thức.",
      "Để chuẩn bị cho việc thay đổi chuyển giao toàn bộ hệ thống các cơ quan quản lý.",
      "Nhằm mục đích cắt giảm bớt số lượng đảng viên sinh hoạt ở các chi bộ địa phương.",
      "Để giải tán các tổ chức đoàn thể quần chúng xã hội trong hệ thống chính trị."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Chỉnh đốn Đảng để làm sạch bộ máy, chống tham nhũng, quan liêu, giữ vững niềm tin của nhân dân."
  },
  {
    id: "lsd-dh8-d2-032",
    examSet: 2,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Phân tích tầm quan trọng của việc giữ vững vai trò chủ đạo của kinh tế nhà nước?",
    options: [
      "Nắm giữ các ngành then chốt, làm công cụ điều tiết vĩ mô và định hướng XHCN.",
      "Độc quyền toàn bộ thị trường không cho các thành phần khác tham gia.",
      "Bao cấp thua lỗ cho tất cả các doanh nghiệp nhà nước yếu kém kéo dài.",
      "Thay thế hoàn toàn vai trò của các doanh nghiệp tư nhân trong nước."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Kinh tế nhà nước giữ vai trò chủ đạo để dẫn dắt, mở đường, định hướng nền kinh tế phát triển vì lợi ích quốc gia."
  },
  {
    id: "lsd-dh8-d2-033",
    examSet: 2,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Ý nghĩa của việc kết hợp sức mạnh kinh tế với quốc phòng an ninh thời kỳ ĐH VIII là gì?",
    options: [
      "Tạo tiềm lực kinh tế cho quốc phòng, dùng quốc phòng bảo vệ môi trường phát triển.",
      "Xem việc phát triển kinh tế và củng cố quốc phòng là hai mục tiêu triệt tiêu nhau.",
      "Dành toàn bộ các thành tựu phát triển kinh tế để mua sắm trang bị vũ khí quân sự.",
      "Bỏ qua hẳn quốc phòng an ninh để dồn toàn bộ nguồn lực cho tăng trưởng kinh tế."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Kinh tế mạnh tạo tiền đề cho quốc phòng vững chắc; quốc phòng an ninh giữ vững hòa bình để kinh tế tăng trưởng."
  },
  {
    id: "lsd-dh8-d2-034",
    examSet: 2,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Tại sao chính sách phát triển nguồn nhân lực chất lượng cao lại quyết định thành bại của CNH-HĐH?",
    options: [
      "Con người là chủ thể sáng tạo, làm chủ công nghệ và quyết định năng suất lao động.",
      "Vì nguồn tài nguyên thiên nhiên của Việt Nam hiện nay đã hoàn toàn bị cạn kiệt.",
      "Vì nguồn vốn đầu tư trực tiếp nước ngoài FDI không còn quan tâm tới Việt Nam.",
      "Vì các máy móc trang thiết bị công nghệ hiện đại có thể tự vận hành không cần."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Nguồn nhân lực chất lượng cao là lợi thế cạnh tranh cốt lõi trong thời đại kinh tế tri thức và CNH-HĐH."
  },
  {
    id: "lsd-dh8-d2-035",
    examSet: 2,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Phân tích giá trị của bài học 'Nhìn thẳng vào sự thật, đánh giá đúng sự thật' từ ĐH VI áp dụng tại ĐH VIII?",
    options: [
      "Thừa nhận yếu kém chưa vững chắc sau khi ra khỏi khủng hoảng để có giải pháp đúng.",
      "Tô hồng các thành tựu phát triển kinh tế để tạo niềm tin ảo trong dư luận xã hội.",
      "Đổ lỗi cho hoàn cảnh biến động quốc tế phức tạp mà tuyệt đối không nhận lỗi.",
      "Tránh né không chịu thảo luận các vấn đề bấp bách thực tế trong quản lý vĩ mô."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Nói rõ sự thật giúp Đảng tỉnh táo nhìn nhận khó khăn, thẳng thắn sửa chữa hạn chế để đưa đất nước tiến lên."
  },
  {
    id: "lsd-dh8-d2-036",
    examSet: 2,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Nguyên nhân giúp đường lối CNH-HĐH tại ĐH VIII đạt được nhiều thành tựu to lớn là gì?",
    options: [
      "Đường lối đúng đắn, hợp quy luật, phát huy sức mạnh đại đoàn kết toàn dân tộc.",
      "Do sự hỗ trợ tài chính không hoàn lại hoàn toàn từ các quỹ quốc tế.",
      "Do Việt Nam áp dụng rập khuôn mô hình CNH của các nước đi trước.",
      "Do nền kinh tế tự động tăng trưởng mà không cần sự quản lý vĩ mô."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đường lối đúng đắn xuất phát từ thực tiễn Việt Nam, được nhân dân đồng lòng ủng hộ và tổ chức thực hiện quyết liệt."
  },

  // 37-40: Outside (4 questions - Practical Application)
  {
    id: "lsd-dh8-d2-037",
    examSet: 2,
    sectionId: "dh-8-grp-4",
    subsectionId: "dh-7-sec-4",
    question: "Bài học về mở rộng quan hệ đối ngoại 'Sẵn sàng là bạn' tại ĐH VIII áp dụng thế nào trong ngoại giao cây tre?",
    options: [
      "Đa dạng hóa, đa phương hóa, giữ vững nguyên tắc kiên định, linh hoạt ứng xử.",
      "Chọn bên trong các cuộc xung đột quân sự giữa các cường quốc lớn hiện nay.",
      "Đóng cửa biên giới để bảo vệ an ninh nội địa không hợp tác với bên ngoài.",
      "Từ bỏ các cam kết quốc tế về biến đổi khí hậu để ưu tiên sản xuất."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Ngoại giao cây tre Việt Nam: Gốc vững (độc lập tự chủ), thân chắc (sức mạnh tổng hợp), cành uyển chuyển (linh hoạt đối ngoại)."
  },
  {
    id: "lsd-dh8-d2-038",
    examSet: 2,
    sectionId: "dh-8-grp-4",
    subsectionId: "dh-7-sec-4",
    question: "Từ bài học xác định KH-CN là quốc sách hàng đầu tại ĐH VIII, học sinh cần làm gì để chuẩn bị tương lai?",
    options: [
      "Đổi mới tư duy học tập, làm chủ khoa học dữ liệu và nâng cao ngoại ngữ.",
      "Chỉ tập trung học thuộc lòng lý thuyết không thực hành ứng dụng công nghệ.",
      "Thờ ơ với các thành tựu trí tuệ nhân tạo và chuyển đổi số toàn cầu.",
      "Rời bỏ nhà trường sớm để tham gia vào các hoạt động lao động chân tay."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Thế hệ trẻ phải tự trang bị tri thức công nghệ hiện đại, ngoại ngữ và kỹ năng toàn cầu để trở thành công dân số."
  },
  {
    id: "lsd-dh8-d2-039",
    examSet: 2,
    sectionId: "dh-8-grp-4",
    subsectionId: "dh-7-sec-4",
    question: "Ý nghĩa của việc kết hợp tăng trưởng kinh tế với công bằng xã hội gợi mở gì cho chính sách hiện nay?",
    options: [
      "Không để ai bị bỏ lại phía sau, phát triển kinh tế đi đôi với bảo sinh xã hội.",
      "Tập trung nguồn lực phát triển siêu đô thị bỏ mặc vùng nông thôn nghèo.",
      "Chỉ hỗ trợ cho người giàu kinh doanh mà cắt giảm chính sách trợ cấp xã hội.",
      "Hy sinh môi trường sống để lấy các dự án tăng trưởng GDP ngắn hạn."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Phát triển bao trùm: Tăng trưởng kinh tế phải đem lại lợi ích cho mọi người dân, đặc biệt là người yếu thế trong xã hội."
  },
  {
    id: "lsd-dh8-d2-040",
    examSet: 2,
    sectionId: "dh-8-grp-4",
    subsectionId: "dh-7-sec-4",
    question: "Bài học về tự phê bình và chỉnh đốn Đảng từ NQ TƯ 6 (lần 2) khóa VIII nhắc nhở người trẻ điều gì?",
    options: [
      "Thường xuyên tự soi, tự sửa, nghiêm túc nhận lỗi và nỗ lực hoàn thiện bản thân.",
      "Che giấu khuyết điểm cá nhân và đổ lỗi cho hoàn cảnh xung quanh.",
      "Tránh né không tham gia các hoạt động góp ý xây dựng tập thể lớp học.",
      "Tự tin thái quá không lắng nghe sự đóng góp xây dựng từ mọi người."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Mỗi cá nhân cần có tinh thần cầu thị, thường xuyên tự soi tự sửa khuyết điểm để trưởng thành và đóng góp cho xã hội."
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
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ CHUẨN 2: ĐẠI HỘI VIII (6/1996)
   Mã Bộ Đề: questions-lsd-dh8-part2.js
   Số lượng: 40 câu cố định (36 Inside + 4 Outside)
   ============================================================ */

export const questionsLsdDh8Part2 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh8-part2.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh8-part2.js");
}
