import fs from "fs";

// 40 questions for Fixed Exam Set 1 (Đại hội I - 3/1935)
// 36 Inside (7 Easy, 18 Medium, 11 Hard) + 4 Outside
const questions = [
  // 1-7: Easy (7 questions)
  {
    id: "lsd-dh1-d1-001",
    examSet: 1,
    sectionId: "dh-1-grp-1",
    subsectionId: "dh-1-sec-1",
    question: "Đại hội đại biểu toàn quốc lần thứ I của Đảng Cộng sản Đông Dương được tổ chức vào thời gian nào?",
    options: [
      "Đại hội được họp vào thời gian từ ngày 27 đến ngày 31 tháng 3 năm 1935.",
      "Đại hội được họp vào thời gian từ ngày 03 đến ngày 07 tháng 2 năm 1930.",
      "Đại hội được họp vào thời gian từ ngày 15 đến ngày 20 tháng 10 năm 1930.",
      "Đại hội được họp vào thời gian từ ngày 01 đến ngày 06 tháng 5 năm 1931."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội đại biểu toàn quốc lần thứ I của Đảng họp từ ngày 27 đến ngày 31-3-1935 tại Ma Cao (Trung Quốc)."
  },
  {
    id: "lsd-dh1-d1-002",
    examSet: 1,
    sectionId: "dh-1-grp-1",
    subsectionId: "dh-1-sec-1",
    question: "Đại hội đại biểu toàn quốc lần thứ I của Đảng (3/1935) được diễn ra tại địa điểm nào sau đây?",
    options: [
      "Đại hội được diễn ra tại địa điểm Ma Cao thuộc quốc gia Trung Quốc.",
      "Đại hội được diễn ra tại địa điểm Hương Cảng thuộc quốc gia Trung Quốc.",
      "Đại hội được diễn ra tại địa điểm Quảng Châu thuộc quốc gia Trung Quốc.",
      "Đại hội được diễn ra tại địa điểm Thượng Hải thuộc quốc gia Trung Quốc."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội I họp tại Ma Cao (Trung Quốc) do tình hình đàn áp khốc liệt trong nước của thực dân Pháp."
  },
  {
    id: "lsd-dh1-d1-003",
    examSet: 1,
    sectionId: "dh-1-grp-1",
    subsectionId: "dh-1-sec-1",
    question: "Đồng chí nào sau đây đã được Đại hội đại biểu toàn quốc lần thứ I (3/1935) bầu làm Tổng Bí thư?",
    options: [
      "Đồng chí Lê Hồng Phong đã được bầu giữ chức vụ Tổng Bí thư của Đảng.",
      "Đồng chí Nguyễn Văn Cừ đã được bầu giữ chức vụ Tổng Bí thư của Đảng.",
      "Đồng chí Hà Huy Tập đã được bầu giữ chức vụ Tổng Bí thư của Đảng.",
      "Đồng chí Trường Chinh đã được bầu giữ chức vụ Tổng Bí thư của Đảng."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội I (3/1935) đã bầu đồng chí Lê Hồng Phong làm Tổng Bí thư Ban Chấp hành Trung ương Đảng."
  },
  {
    id: "lsd-dh1-d1-004",
    examSet: 1,
    sectionId: "dh-1-grp-1",
    subsectionId: "dh-1-sec-1",
    question: "Nhiệm vụ hàng đầu và bao trùm nhất được Đại hội đại biểu toàn quốc lần thứ I (3/1935) đề ra là gì?",
    options: [
      "Nhiệm vụ tập trung củng cố và phát triển hệ thống tổ chức của Đảng.",
      "Nhiệm vụ tập trung chuẩn bị lực lượng vũ trang khởi nghĩa giành chính quyền.",
      "Nhiệm vụ tập trung xây dựng căn cứ địa cách mạng tại miền núi phía Bắc.",
      "Nhiệm vụ tập trung mở rộng mặt trận ngoại giao với các nước xã hội chủ nghĩa."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội I xác định nhiệm vụ quan trọng số 1 là củng cố và phát triển hệ thống tổ chức Đảng sau thoái trào."
  },
  {
    id: "lsd-dh1-d1-005",
    examSet: 1,
    sectionId: "dh-1-grp-1",
    subsectionId: "dh-1-sec-1",
    question: "Trước khi Đại hội I (3/1935) diễn ra, cơ quan nào đã được thành lập tháng 3/1934 để chỉ đạo khôi phục tổ chức?",
    options: [
      "Cơ quan lãnh đạo tạm thời mang tên gọi Ban Chỉ đạo Trung ương Đảng.",
      "Cơ quan lãnh đạo tạm thời mang tên gọi Ban Chấp hành Trung ương Lâm thời.",
      "Cơ quan lãnh đạo tạm thời mang tên gọi Ban Cán sự Trung ương Đảng.",
      "Cơ quan lãnh đạo tạm thời mang tên gọi Ủy toán Ban Chấp hành Lâm thời."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Tháng 3/1934, Ban Chỉ đạo Trung ương Đảng được thành lập do Lê Hồng Phong đứng đầu để chuẩn bị Đại hội I."
  },
  {
    id: "lsd-dh1-d1-006",
    examSet: 1,
    sectionId: "dh-1-grp-1",
    subsectionId: "dh-1-sec-1",
    question: "Chủ đề cốt lõi xuyên suốt toàn bộ các nội dung làm việc của Đại hội I (3/1935) là nội dung nào?",
    options: [
      "Chủ đề khôi phục hệ thống tổ chức Đảng và phong trào cách mạng quần chúng.",
      "Chủ đề phát động tổng khởi nghĩa giành lại độc lập hoàn toàn cho dân tộc.",
      "Chủ đề xây dựng chính quyền công nông sau khi lật đổ chính quyền thực dân.",
      "Chủ đề chuẩn bị điều kiện tiến hành chiến tranh giải phóng dân tộc lâu dài."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Chủ đề cốt lõi của Đại hội I là khôi phục hệ thống tổ chức Đảng và phong trào quần chúng sau thoái trào."
  },
  {
    id: "lsd-dh1-d1-007",
    examSet: 1,
    sectionId: "dh-1-grp-1",
    subsectionId: "dh-1-sec-1",
    question: "Số lượng đại biểu chính thức dự Đại hội đại biểu toàn quốc lần thứ I (3/1935) đại diện cho bao nhiêu đảng viên?",
    options: [
      "Các đại biểu dự Đại hội đại diện cho khoảng hơn 600 đảng viên cả nước.",
      "Các đại biểu dự Đại hội đại diện cho khoảng hơn 1.200 đảng viên cả nước.",
      "Các đại biểu dự Đại hội đại diện cho khoảng hơn 2.400 đảng viên cả nước.",
      "Các đại biểu dự Đại hội đại diện cho khoảng hơn 5.000 đảng viên cả nước."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "13 đại biểu tham dự Đại hội I đại diện cho hơn 600 đảng viên trong và ngoài nước thời bấy giờ."
  },

  // 8-25: Medium (18 questions)
  {
    id: "lsd-dh1-d1-008",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Đại hội I (3/1935) đã đề ra 3 nhiệm vụ chủ yếu của Đảng trong thời kỳ khôi phục phong trào, bao gồm nhiệm vụ nào?",
    options: [
      "Củng cố phát triển Đảng, thâu phục quần chúng, chống chiến tranh đế quốc.",
      "Xây dựng quân đội vũ trang, thành lập mặt trận dân tộc, tranh thủ quốc tế.",
      "Phát động khởi nghĩa từng phần, xây dựng căn cứ địa, chuẩn bị lực lượng.",
      "Tiến hành cải cách ruộng đất, phát triển kinh tế tự túc, chống giặc đói."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "3 nhiệm vụ chủ yếu do Đại hội I đề ra: Củng cố phát triển Đảng, Thâu phục quần chúng, Chống chiến tranh đế quốc."
  },
  {
    id: "lsd-dh1-d1-009",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Nguyên nhân chủ yếu dẫn đến việc Đại hội I (3/1935) phải tổ chức ở nước ngoài (Ma Cao - Trung Quốc) là gì?",
    options: [
      "Do thực dân Pháp tiến hành khủng bố khốc liệt cơ sở cách mạng trong nước.",
      "Do các tổ chức Đảng trong nước chưa nhất trí bầu chọn địa điểm hội họp.",
      "Do Quốc tế Cộng sản yêu cầu bắt buộc tổ chức đại hội tại nước ngoài.",
      "Do lực lượng cách mạng trong nước phát triển chưa đủ quy mô để tổ chức."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội phải họp bí mật ở Ma Cao do khủng bố trắng khốc liệt của Pháp khiến các cơ sở trong nước bị tổn thất nặng."
  },
  {
    id: "lsd-dh1-d1-010",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Vai trò lịch sử quan trọng nhất của Ban Chỉ đạo Trung ương Đảng do đồng chí Lê Hồng Phong đứng đầu (3/1934) là gì?",
    options: [
      "Khôi phục cơ sở tổ chức Đảng trong nước và chuẩn bị tổ chức Đại hội I.",
      "Trực tiếp chỉ đạo cuộc tổng khởi nghĩa giành chính quyền trên phạm vi cả nước.",
      "Soạn thảo Luận cương Chính trị thay thế cho Chánh cương tóm tắt của Nguyễn Ái Quốc.",
      "Lãnh đạo cuộc chiến tranh bảo vệ biên giới phía Bắc chống quân đội ngoại xâm."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Ban Chỉ đạo Trung ương (3/1934) đóng vai trò nòng cốt liên lạc, khôi phục cơ sở tổ chức và chuẩn bị cho Đại hội I."
  },
  {
    id: "lsd-dh1-d1-011",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Đại hội I (3/1935) đã thông qua văn kiện nền tảng quan trọng nào sau đây để định hướng công tác tổ chức của Đảng?",
    options: [
      "Đại hội đã thông qua Nghị quyết chính trị cùng Điều lệ Đảng sửa đổi mới.",
      "Đại hội đã thông qua Cương lĩnh chính trị đầu tiên do Nguyễn Ái Quốc soạn.",
      "Đại hội đã thông qua Báo cáo chính trị về xây dựng chủ nghĩa xã hội.",
      "Đại hội đã thông qua Tuyên ngôn độc lập lập ra nước Việt Nam Dân chủ Cụ hòa."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I đã thông qua Nghị quyết chính trị, Điều lệ Đảng và nhiều nghị quyết vận động quần chúng quan trọng."
  },
  {
    id: "lsd-dh1-d1-012",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Đối với công tác quần chúng, Đại hội I (3/1935) đặc biệt nhấn mạnh nhiệm vụ chiến lược nào sau đây?",
    options: [
      "Thâu phục rộng rãi quần chúng lao khổ và khôi phục các đoàn thể cách mạng.",
      "Tập hợp giai cấp tư sản dân tộc để thành lập các công ty kinh doanh tự do.",
      "Vận động các tầng lớp địa chủ phong kiến tham gia chính quyền cách mạng.",
      "Tổ chức tuyển chọn quân đội chính quy để thực hiện cuộc chiến tranh quy mô."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I nhấn mạnh việc thâu phục quần chúng lao khổ, xây dựng lại các tổ chức Nông hội, Công hội, Thanh niên..."
  },
  {
    id: "lsd-dh1-d1-013",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Trong bối cảnh nguy cơ chiến tranh thế giới bùng nổ, Đại hội I (3/1935) đã đề ra nhiệm vụ đối ngoại trọng tâm nào?",
    options: [
      "Đẩy mạnh công tác tuyên truyền và đấu tranh chống chiến tranh đế quốc.",
      "Ủng hộ chính sách quân sự của các cường quốc đế quốc để giữ hòa bình.",
      "Ký kết các hiệp định hợp tác kinh tế song phương với các nước tư bản.",
      "Đứng trung lập hoàn toàn trước mâu thuẫn giữa các khối quân sự lớn."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I đề ra nhiệm vụ đẩy mạnh tuyên truyền chống chiến tranh đế quốc, bảo vệ Liên Xô và hòa bình thế giới."
  },
  {
    id: "lsd-dh1-d1-014",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Về mặt tổ chức, Ban Chấp hành Trung ương Đảng do Đại hội I (3/1935) bầu ra gồm bao nhiêu ủy viên?",
    options: [
      "Ban Chấp hành Trung ương gồm 13 ủy viên (9 chính thức và 4 dự khuyết).",
      "Ban Chấp hành Trung ương gồm 15 ủy viên (11 chính thức và 4 dự khuyết).",
      "Ban Chấp hành Trung ương gồm 19 ủy viên (15 chính thức và 4 dự khuyết).",
      "Ban Chấp hành Trung ương gồm 25 ủy viên (20 chính thức và 5 dự khuyết)."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Ban Chấp hành Trung ương khóa I được bầu tại Đại hội gồm 13 ủy viên (9 ủy viên chính thức và 4 dự khuyết)."
  },
  {
    id: "lsd-dh1-d1-015",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Nguyễn Ái Quốc không trực tiếp tham dự Đại hội I (3/1935) vì lý do nào sau đây?",
    options: [
      "Người đang công tác tại Mát-scơ-va và học tại Viện Nghiên cứu Dân tộc.",
      "Người đang trực tiếp chỉ đạo phong trào cách mạng tại căn cứ Bắc Sơn.",
      "Người đang bị chính quyền thực dân Pháp giam giữ tại nhà tù Côn Đảo.",
      "Người đang chủ trì Hội nghị hợp nhất các tổ chức cộng sản ở Hương Cảng."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Thời điểm 1935, Nguyễn Ái Quốc đang ở Mát-scơ-va (Liên Xô) nghiên cứu tại Viện Nghiên cứu các vấn đề dân tộc và thuộc địa."
  },
  {
    id: "lsd-dh1-d1-016",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Đại hội I (3/1935) đã cử Nguyễn Ái Quốc đảm nhiệm chức vụ phân công quốc tế nào sau đây?",
    options: [
      "Đại diện của Đảng Cộng sản Đông Dương bên cạnh Quốc tế Cộng sản.",
      "Trưởng ban Phản đế liên minh Châu Á của Quốc tế Cộng sản ở Mát-scơ-va.",
      "Phụ trách Văn phòng Phương Đông của Ban Chấp hành Quốc tế Cộng sản.",
      "Tổng Thư ký Hội Liên hiệp các dân tộc bị áp bức tại Đông Dương."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I đã bầu Nguyễn Ái Quốc làm Đại diện của Đảng bên cạnh Quốc tế Cộng sản."
  },
  {
    id: "lsd-dh1-d1-017",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Đánh giá nào sau đây phản ánh đúng nhất hạn chế lịch sử của Đại hội I (3/1935) về nhận thức chiến lược?",
    options: [
      "Chưa đặt nhiệm vụ giải phóng dân tộc lên hàng đầu theo tinh thần 1930.",
      "Chưa khẳng định vai trò lãnh đạo duy nhất của giai cấp công nhân Việt Nam.",
      "Bỏ qua công tác vận động quần chúng nông dân và công nhân trong nước.",
      "Phủ nhận hoàn toàn sự cần thiết phải thành lập mặt trận dân tộc thống nhất."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I chưa khắc phục được hạn chế của Luận cương 10/1930, chưa đặt nhiệm vụ giải phóng dân tộc lên hàng đầu."
  },
  {
    id: "lsd-dh1-d1-018",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Sự kiện Đại hội I (3/1935) được tổ chức thành công chứng tỏ điều gì về phong trào cách mạng Việt Nam?",
    options: [
      "Đảng đã phục hồi hệ thống tổ chức từ Trung ương đến cơ sở sau thoái trào.",
      "Cách mạng Việt Nam đã hoàn thành trọn vẹn mục tiêu giải phóng dân tộc.",
      "Chính quyền thực dân Pháp đã hoàn toàn thất bại và rút khỏi Đông Dương.",
      "Lực lượng vũ trang cách mạng đã phát triển thành quân đội chính quy lớn."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I đánh dấu sự phục hồi hoàn toàn hệ thống tổ chức của Đảng từ Trung ương đến địa phương."
  },
  {
    id: "lsd-dh1-d1-019",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Một trong những nghị quyết chuyên đề quan trọng được Đại hội I (3/1935) thông qua là nghị quyết nào?",
    options: [
      "Nghị quyết về công nhân vận động, nông dân vận động và phụ nữ vận động.",
      "Nghị quyết về xây dựng khu giải phóng Việt Bắc làm căn cứ địa cách mạng.",
      "Nghị quyết về việc tiến hành kháng chiến chống thực dân Pháp xâm lược.",
      "Nghị quyết về phát động cuộc vận động đại đoàn kết dân tộc toàn diện."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I thông qua nhiều nghị quyết chuyên đề: Công nhân vận động, Nông dân vận động, Thanh niên, Phụ nữ, Binh vận..."
  },
  {
    id: "lsd-dh1-d1-020",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Tổ chức nào sau đây giữ vai trò chuẩn bị trực tiếp về mọi mặt cho sự thành công của Đại hội I (3/1935)?",
    options: [
      "Ban Chỉ đạo Trung ương Đảng Cộng sản Đông Dương được lập tháng 3/1934.",
      "Ban Chấp hành Trung ương Lâm thời thành lập tại Hội nghị tháng 10/1930.",
      "Tổng bộ Việt Minh thành lập tại Hội nghị Trung ương 8 tháng 5/1941.",
      "Hội Liên hiệp Thuộc địa thành lập tại Pa-ri dưới sự lãnh đạo của Nguyễn Ái Quốc."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Ban Chỉ đạo Trung ương thành lập tháng 3/1934 tại Ma Cao là cơ quan trực tiếp chuẩn bị Đại hội I."
  },
  {
    id: "lsd-dh1-d1-021",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Trong công tác phát triển Đảng, Đại hội I (3/1935) nhấn mạnh nguyên tắc tổ chức cơ bản nào?",
    options: [
      "Giữ vững nguyên tắc tập trung dân chủ và tăng cường tính kỷ luật của Đảng.",
      "Kết nạp rộng rãi mọi tầng lớp không phân biệt thành phần và động cơ.",
      "Phân tán cơ sở Đảng thành các nhóm hoạt động tự do không cần liên lạc.",
      "Chỉ kết nạp những người thuộc thành phần địa chủ và trí thức thượng lưu."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I nhấn mạnh củng cố tổ chức theo nguyên tắc tập trung dân chủ, bí mật và kỷ luật nghiêm minh."
  },
  {
    id: "lsd-dh1-d1-022",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Hình thức đấu tranh chủ yếu được Đại hội I (3/1935) đề ra cho phong trào quần chúng lúc này là gì?",
    options: [
      "Kết hợp đấu tranh bí mật, bất hợp pháp với đấu tranh công khai, hợp pháp.",
      "Tập trung toàn bộ lực lượng tiến hành khởi nghĩa vũ trang ngay lập tức.",
      "Chỉ sử dụng hình thức đấu tranh hòa bình thông qua thương lượng ngoại giao.",
      "Bắt buộc dùng hình thức đấu tranh vũ trang du kích tại khắp các địa phương."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I đề ra kết hợp đấu tranh bí mật bất hợp pháp với công khai hợp pháp tùy theo tình hình thực tế."
  },
  {
    id: "lsd-dh1-d1-023",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Sự khôi phục hệ thống tổ chức Đảng sau Đại hội I (3/1935) đã tạo tiền đề trực tiếp cho sự kiện nào?",
    options: [
      "Đón đầu và lãnh đạo cuộc vận động dân chủ giai đoạn 1936-1939 thắng lợi.",
      "Phát động ngay cuộc Tổng khởi nghĩa tháng Tám năm 1945 giành chính quyền.",
      "Tiến hành cuộc kháng chiến chống thực dân Pháp quay lại xâm lược năm 1945.",
      "Thành lập Mặt trận Việt Minh thống nhất lực lượng giải phóng dân tộc."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Nhờ hệ thống Đảng được khôi phục tại Đại hội I, Đảng đã kịp thời lãnh đạo Cao trào Dân chủ 1936-1939."
  },
  {
    id: "lsd-dh1-d1-024",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Nghị quyết Đại hội I (3/1935) xác định mối quan hệ giữa cách mạng Đông Dương với cách mạng thế giới ra sao?",
    options: [
      "Cách mạng Đông Dương là một bộ phận khăng khít của cách mạng thế giới.",
      "Cách mạng Đông Dương hoàn toàn độc lập độc lập không liên quan thế giới.",
      "Cách mạng Đông Dương chỉ phụ thuộc vào sự hỗ trợ trực tiếp của tư bản.",
      "Cách mạng Đông Dương là trung tâm duy nhất lãnh đạo phong trào toàn cầu."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I khẳng định cách mạng Đông Dương là một bộ phận của cách mạng vô sản thế giới dưới sự dẫn dắt của Quốc tế Cộng sản."
  },
  {
    id: "lsd-dh1-d1-025",
    examSet: 1,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Ý nghĩa nổi bật nhất của Đại hội I (3/1935) đối với lịch sử Đảng Cộng sản Việt Nam là gì?",
    options: [
      "Đánh dấu sự phục hồi hoàn toàn tổ chức Đảng sau thời kỳ đàn áp khốc liệt.",
      "Lần đầu tiên thông qua Cương lĩnh chính trị xây dựng chủ nghĩa xã hội.",
      "Đánh dấu sự thống nhất ba tổ chức cộng sản thành một Đảng duy nhất.",
      "Quyết định chuyển hướng chiến lược sang giải phóng dân tộc hoàn toàn."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Ý nghĩa lớn nhất của Đại hội I là phục hồi hệ thống tổ chức của Đảng từ Trung ương đến địa phương."
  },

  // 26-36: Hard (11 questions)
  {
    id: "lsd-dh1-d1-026",
    examSet: 1,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Tại sao Đại hội I (3/1935) được coi là một mốc lịch sử quan trọng đánh dấu bước nhảy vọt về tổ chức của Đảng?",
    options: [
      "Vì Đại hội đã nối lại liên lạc và quy tụ được hệ thống các cấp ủy Đảng.",
      "Vì Đại hội đã hoàn thành triệt để việc cải cách ruộng đất cho nông dân.",
      "Vì Đại hội đã xóa bỏ hoàn toàn nguy cơ bị đàn áp khủng bố từ kẻ thù.",
      "Vì Đại hội đã thông qua Cương lĩnh giải phóng dân tộc hoàn toàn mới."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đại hội I nối lại liên lạc, thống nhất chỉ đạo và khôi phục hệ thống cơ sở Đảng bị đứt gãy sau thoái trào 1931-1935."
  },
  {
    id: "lsd-dh1-d1-027",
    examSet: 1,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "So với Hội nghị thành lập Đảng (1/1930), Đại hội I (3/1935) có điểm gì khác biệt căn bản về tính chất đại biểu?",
    options: [
      "Đại hội I có sự tham gia của các đại biểu đại diện cho cấp ủy chính thức.",
      "Đại hội I chỉ có các đại biểu thuộc lực lượng vũ trang cách mạng dự.",
      "Đại hội I hoàn toàn không có sự tham gia của bất kỳ đảng viên nào.",
      "Đại hội I do đại biểu của Quốc tế Cộng sản đứng ra chủ trì toàn bộ."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đại hội I là Đại hội đại biểu toàn quốc đầu tiên có đại biểu đại diện cho các tổ chức Đảng được bầu ra chính thức."
  },
  {
    id: "lsd-dh1-d1-028",
    examSet: 1,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Hạn chế lớn nhất về mặt nhận thức lý luận tại Đại hội I (3/1935) phản ánh điều gì trong tư duy lãnh đạo lúc đó?",
    options: [
      "Nhận thức chưa đầy đủ về tinh thần dân tộc trong Chánh cương của Bác.",
      "Phủ nhận vai trò của giai cấp công nhân đối với sự nghiệp cách mạng.",
      "Đánh giá quá thấp sức mạnh của phong trào đấu tranh của nông dân.",
      "Không nhận thức được tầm quan trọng của việc xây dựng tổ chức Đảng."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đại hội I vẫn chịu ảnh hưởng của Luận cương 10/1930, chưa thấy hết tầm quan trọng của nhiệm vụ giải phóng dân tộc."
  },
  {
    id: "lsd-dh1-d1-029",
    examSet: 1,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Phân tích vai trò của đồng chí Lê Hồng Phong tại Đại hội I (3/1935), khẳng định nào sau đây là chuẩn xác nhất?",
    options: [
      "Là người đứng đầu Ban Chỉ đạo Trung ương chuẩn bị và chủ trì Đại hội I.",
      "Là người đại diện duy nhất của Quốc tế Cộng sản đến kiểm tra Đại hội.",
      "Là người sáng lập ra tổ chức Việt Nam Thanh niên Cách mạng Đồng chí Hội.",
      "Là người trực tiếp soạn thảo bản Tuyên ngôn Độc lập đọc tại Ba Đình."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Lê Hồng Phong là Trưởng ban Ban Chỉ đạo Trung ương, giữ vai trò chủ chốt chuẩn bị, chủ trì Đại hội I và được bầu làm Tổng Bí thư."
  },
  {
    id: "lsd-dh1-d1-030",
    examSet: 1,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Việc Đại hội I (3/1935) thông qua Điều lệ Đảng sửa đổi nhằm đáp ứng yêu cầu cấp bách nào của thời kỳ đó?",
    options: [
      "Củng cố nguyên tắc tổ chức bí mật và tăng cường tính kỷ luật nghiêm.",
      "Mở rộng tối đa việc kết nạp đảng viên công khai không cần bí mật.",
      "Xóa bỏ sự quản lý tập trung dân chủ để các chi bộ tự do hoạt động.",
      "Thay đổi toàn bộ tên gọi của Đảng thành Đảng Lao động Việt Nam."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Điều lệ Đảng sửa đổi tại Đại hội I nhằm củng cố kỷ luật nghiêm mật, bảo vệ tổ chức trước sự lùng bắt của thực dân Pháp."
  },
  {
    id: "lsd-dh1-d1-031",
    examSet: 1,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Bối cảnh quốc tế đầu những năm 1930 có tác động gì trực tiếp đến việc Đại hội I (3/1935) đề ra nhiệm vụ chống chiến tranh?",
    options: [
      "Chủ nghĩa phát xít xuất hiện nguy cơ đe dọa hòa bình và Liên Xô.",
      "Các nước đế quốc đã hoàn toàn chấm dứt việc chiếm đóng thuộc địa.",
      "Quốc tế Cộng sản ra lệnh giải tán toàn bộ các Đảng Cộng sản ở Châu Á.",
      "Chiến tranh thế giới thứ hai đã hoàn toàn kết thúc thắng lợi rực rỡ."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Chủ nghĩa phát xít cầm quyền ở Đức, Nhật đe dọa chiến tranh thế giới, đòi hỏi Đại hội I đề ra nhiệm vụ chống chiến tranh đế quốc."
  },
  {
    id: "lsd-dh1-d1-032",
    examSet: 1,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Mối liên hệ giữa việc thành lập Ban Chỉ đạo Trung ương (3/1934) và sự thành công của Đại hội I (3/1935) thể hiện ở điều gì?",
    options: [
      "Ban Chỉ đạo là chiếc cầu nối khôi phục liên lạc và chuẩn bị đại hội.",
      "Ban Chỉ đạo là cơ quan thay thế hoàn toàn cho Quốc tế Cộng sản.",
      "Ban Chỉ đạo đã giải tán tất cả các chi bộ cũ để thành lập chi bộ mới.",
      "Ban Chỉ đạo trực tiếp ký hiệp định hòa bình với chính quyền thực dân."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Ban Chỉ đạo Trung ương thành lập tháng 3/1934 đóng vai trò cầu nối lịch sử liên lạc các cơ sở và chuẩn bị nội dung Đại hội I."
  },
  {
    id: "lsd-dh1-d1-033",
    examSet: 1,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Tại sao Đại hội I (3/1935) chưa thể đề ra đường lối chuyển hướng chiến lược đặt giải phóng dân tộc lên hàng đầu?",
    options: [
      "Do nhận thức lý luận vẫn chịu ảnh hưởng nặng của Luận cương 10/1930.",
      "Do đại biểu tham dự Đại hội không hiểu rõ tình hình thực tiễn trong nước.",
      "Do Nguyễn Ái Quốc trực tiếp bác bỏ chủ trương giải phóng dân tộc tại họp.",
      "Do Quốc tế Cộng sản cấm đoán không cho phép bàn về giải phóng dân tộc."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đại hội I chưa chuyển hướng chiến lược vì nhận thức lý luận lúc đó vẫn bám sát quan điểm của Luận cương tháng 10/1930."
  },
  {
    id: "lsd-dh1-d1-034",
    examSet: 1,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Tính chất bí mật của Đại hội I (3/1935) được thể hiện rõ nhất qua yếu tố nào sau đây?",
    options: [
      "Tổ chức tại nước ngoài với số lượng đại biểu hạn chế được bảo vệ chặt.",
      "Công khai đăng tải toàn bộ thông tin đại hội trên báo chí chính thống.",
      "Mời chính quyền thực dân Pháp đến tham dự để chứng kiến việc bầu cử.",
      "Tổ chức công khai tại trung tâm thủ đô Hà Nội dưới sự gác của quân đội."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đại hội họp bí mật tại Ma Cao (Trung Quốc) với số đại biểu nòng cốt 13 người để tránh sự truy lùng của mật thám Pháp."
  },
  {
    id: "lsd-dh1-d1-035",
    examSet: 1,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Ý nghĩa của việc bầu ra Ban Chấp hành Trung ương chính thức tại Đại hội I (3/1935) là gì?",
    options: [
      "Khôi phục cơ quan lãnh đạo đầu não tập trung thống nhất của Đảng.",
      "Chính thức thành lập Quân đội nhân dân Việt Nam làm lực lượng nòng.",
      "Kết thúc hoàn toàn giai đoạn đấu tranh bí mật chuyển sang công khai.",
      "Đưa Đảng Cộng sản Đông Dương trở thành Đảng cầm quyền chính thức."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Bầu BCH Trung ương chính thức khôi phục cơ quan đầu não chỉ đạo tập trung thống nhất trên toàn quốc."
  },
  {
    id: "lsd-dh1-d1-036",
    examSet: 1,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Tại sao việc khôi phục tổ chức Đảng được Đại hội I (3/1935) coi là tiền đề quyết định sự sống còn của cách mạng?",
    options: [
      "Không có tổ chức Đảng vững mạnh thì không thể lãnh đạo quần chúng đấu.",
      "Có tổ chức Đảng mới nhận được viện trợ tài chính lớn từ các nước tư bản.",
      "Tổ chức Đảng giúp thay thế hoàn toàn cho các phong trào tự phát quần.",
      "Tổ chức Đảng là điều kiện bắt buộc để thực thực dân Pháp công nhận."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đảng là bộ tham mưu cách mạng. Tổ chức Đảng bị tan rã thì phong trào quần chúng mất phương hướng, không thể đấu tranh."
  },

  // 37-40: Outside (4 questions - Practical Application)
  {
    id: "lsd-dh1-d1-037",
    examSet: 1,
    sectionId: "dh-1-grp-4",
    subsectionId: "dh-1-sec-4",
    question: "Bài học kinh nghiệm lớn nhất về công tác xây dựng Đảng từ Đại hội I (3/1935) có giá trị vận dụng hiện nay là gì?",
    options: [
      "Giữ vững bản lĩnh chính trị và chủ động khôi phục tổ chức trong khó khăn.",
      "Chỉ tập trung xây dựng cơ sở Đảng tại các đô thị lớn bỏ qua nông thôn.",
      "Dựa vào sự hỗ trợ bên ngoài thay vì tự lực tự cường khôi phục nội lực.",
      "Tuyệt đối hóa đấu tranh bí mật bỏ qua các hình thức công khai hợp pháp."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Bài học lớn nhất là giữ vững bản lĩnh kiên cường, chủ động khôi phục củng cố tổ chức Đảng trong mọi tình huống hiểm nghèo."
  },
  {
    id: "lsd-dh1-d1-038",
    examSet: 1,
    sectionId: "dh-1-grp-4",
    subsectionId: "dh-1-sec-4",
    question: "Từ quyết sách thâu phục quần chúng của Đại hội I (3/1935), bài học nào được Đảng vận dụng trong công tác dân vận hiện nay?",
    options: [
      "Gắn bó mật thiết với nhân dân và dựa vào nhân dân để xây dựng Đảng.",
      "Chỉ vận động nhân dân khi đất nước lâm vào tình trạng chiến tranh khẩn.",
      "Tập trung công tác vận động quần chúng vào tầng lớp tư sản thành thị.",
      "Thay thế công tác tuyên truyền bằng các biện pháp mệnh lệnh hành chính."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Bài học 'lấy dân làm gốc', bám rễ trong nhân dân, dựa vào nhân dân để bảo vệ và phát triển tổ chức Đảng."
  },
  {
    id: "lsd-dh1-d1-039",
    examSet: 1,
    sectionId: "dh-1-grp-4",
    subsectionId: "dh-1-sec-4",
    question: "Ý nghĩa của nguyên tắc tập trung dân chủ được khẳng định tại Đại hội I (3/1935) đối với công tác chỉnh đốn Đảng hiện nay là gì?",
    options: [
      "Tăng cường sức mạnh đoàn kết và kỷ luật nghiêm minh trong toàn Đảng.",
      "Cho phép cấp dưới không tuân thủ nghị quyết của cấp trên khi khác biệt.",
      "Tập trung toàn bộ quyền lực vào một cá nhân không cần thảo luận dân.",
      "Xóa bỏ hoàn toàn chế độ tự phê bình và phê bình trong sinh hoạt Đảng."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Tập trung dân chủ là nguyên tắc sống còn, đảm bảo Đảng thống nhất ý chí và hành động, tăng cường sức chiến đấu."
  },
  {
    id: "lsd-dh1-d1-040",
    examSet: 1,
    sectionId: "dh-1-grp-4",
    subsectionId: "dh-1-sec-4",
    question: "Tinh thần chủ động vượt khó của Đại hội I (3/1935) gợi mở bài học gì cho thế hệ trẻ trong công cuộc đổi mới hội nhập?",
    options: [
      "Dũng cảm đối mặt thách thức, kiên trì mục tiêu và không ngừng sáng tạo.",
      "Tránh né khó khăn thách thức và chờ đợi điều kiện thuận lợi sẵn có.",
      "Rời bỏ lý tưởng cách mạng để chạy theo các giá trị vật chất đơn thuần.",
      "Ỷ 赖 vào sự giúp đỡ của bạn bè quốc tế mà không tự lực phấn đấu nâng."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Bài học về tinh thần dũng cảm, bản lĩnh vượt qua thử thách khốc liệt để vươn lên hoàn thành nhiệm vụ lịch sử."
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
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ CHUẨN 1: ĐẠI HỘI I (3/1935)
   Mã Bộ Đề: questions-lsd-dh1-part1.js
   Số lượng: 40 câu cố định (36 Inside + 4 Outside)
   ============================================================ */

export const questionsLsdDh1Part1 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh1-part1.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh1-part1.js");
}
