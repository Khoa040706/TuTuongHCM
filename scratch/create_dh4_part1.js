import fs from "fs";

// 40 questions for Fixed Exam Set 1 (Đại hội IV - 12/1976)
// 36 Inside (7 Easy, 18 Medium, 11 Hard) + 4 Outside
const questions = [
  // 1-7: Easy (7 questions)
  {
    id: "lsd-dh4-d1-001",
    examSet: 1,
    sectionId: "dh-4-grp-1",
    subsectionId: "dh-4-sec-1",
    question: "Đại hội đại biểu toàn quốc lần thứ IV của Đảng được tổ chức vào khoảng thời gian nào?",
    options: [
      "Đại hội được diễn ra trong thời gian từ ngày 14 đến ngày 20 tháng 12 năm 1976.",
      "Đại hội được diễn ra trong thời gian từ ngày 05 đến ngày 10 tháng 9 năm 1960.",
      "Đại hội được diễn ra trong thời gian từ ngày 11 đến ngày 19 tháng 2 năm 1951.",
      "Đại hội được diễn ra trong thời gian từ ngày 27 đến ngày 31 tháng 3 năm 1935."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội đại biểu toàn quốc lần thứ IV của Đảng họp từ ngày 14 đến ngày 20-12-1976."
  },
  {
    id: "lsd-dh4-d1-002",
    examSet: 1,
    sectionId: "dh-4-grp-1",
    subsectionId: "dh-4-sec-1",
    question: "Tên gọi chính thức của Đảng được Đại hội IV (12/1976) quyết định đổi thành tên gọi gì?",
    options: [
      "Đại hội đã quyết định đổi tên Đảng thành tên gọi Đảng Cộng sản Việt Nam.",
      "Đại hội đã quyết định đổi tên Đảng thành tên gọi Đảng Lao động Việt Nam.",
      "Đại hội đã quyết định đổi tên Đảng thành tên gọi Đảng Cộng sản Đông Dương.",
      "Đại hội đã quyết định đổi tên Đảng thành tên gọi Hội Nghiên cứu Mác-xít."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội IV quyết định đổi tên Đảng thành Đảng Cộng sản Việt Nam."
  },
  {
    id: "lsd-dh4-d1-003",
    examSet: 1,
    sectionId: "dh-4-grp-1",
    subsectionId: "dh-4-sec-1",
    question: "Đồng chí Lê Duẩn được Đại hội IV (12/1976) bầu giữ chức vụ lãnh đạo chốt nào sau đây?",
    options: [
      "Đồng chí Lê Duẩn được bầu giữ chức vụ Tổng Bí thư Ban Chấp hành Trung ương.",
      "Đồng chí Lê Duẩn được bầu giữ chức vụ Bí thư Thứ nhất Ban Chấp hành Trung.",
      "Đồng chí Lê Duẩn được bầu giữ chức vụ Chủ tịch Ban Chấp hành Trung ương.",
      "Đồng chí Lê Duẩn được bầu giữ chức vụ Trưởng ban Kiểm tra Trung ương."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội IV khôi phục chức danh Tổng Bí thư và bầu đồng chí Lê Duẩn làm Tổng Bí thư."
  },
  {
    id: "lsd-dh4-d1-004",
    examSet: 1,
    sectionId: "dh-4-grp-1",
    subsectionId: "dh-4-sec-1",
    question: "Đại hội IV (12/1976) đã thông qua Kế hoạch phát triển kinh tế xã hội 5 năm lần thứ mấy?",
    options: [
      "Đại hội đã thông qua Kế hoạch phát triển kinh tế 5 năm lần thứ hai (1976-1980).",
      "Đại hội đã thông qua Kế hoạch phát triển kinh tế 5 năm lần thứ nhất (1961-1965).",
      "Đại hội đã thông qua Kế hoạch phát triển kinh tế 5 năm lần thứ ba (1981-1985).",
      "Đại hội đã thông qua Kế hoạch phát triển kinh tế 3 năm cải tạo (1958-1960)."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội IV thông qua Phương hướng Kế hoạch 5 năm lần thứ hai (1976 - 1980)."
  },
  {
    id: "lsd-dh4-d1-005",
    examSet: 1,
    sectionId: "dh-4-grp-1",
    subsectionId: "dh-4-sec-1",
    question: "Đại hội đại biểu toàn quốc lần thứ IV (12/1976) được diễn ra tại địa điểm nào sau đây?",
    options: [
      "Đại hội được tổ chức tại Thủ đô Hà Nội trong Hội trường Ba Đình lịch sử.",
      "Đại hội được tổ chức tại xã Vinh Quang, huyện Chiêm Hóa, tỉnh Tuyên Quang.",
      "Đại hội được tổ chức tại thành phố Hồ Chí Minh sau ngày giải phóng Nam.",
      "Đại hội được tổ chức tại thành phố Ma Cao thuộc khu vực nước Trung Quốc."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội IV họp tại Thủ đô Hà Nội."
  },
  {
    id: "lsd-dh4-d1-006",
    examSet: 1,
    sectionId: "dh-4-grp-1",
    subsectionId: "dh-4-sec-1",
    question: "Đặc điểm nổi bật nhất của tình hình đất nước khi Đại hội IV (12/1976) diễn ra là gì?",
    options: [
      "Đất nước hoàn toàn giải phóng, Nam Bắc một nhà, cả nước tiến lên CNXH.",
      "Đất nước tạm thời bị chia cắt làm hai miền với hai chế độ chính trị.",
      "Đất nước bước vào thời kỳ thoái trào cách mạng do bị đàn áp dã man.",
      "Đất nước bắt đầu thực hiện công cuộc Đổi mới kinh tế thị trường định."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội IV diễn ra khi đất nước hoàn toàn giải phóng, hoàn thành thống nhất về mặt nhà nước, cả nước tiến lên CNXH."
  },
  {
    id: "lsd-dh4-d1-007",
    examSet: 1,
    sectionId: "dh-4-grp-1",
    subsectionId: "dh-4-sec-1",
    question: "Cuộc cách mạng nào được Đại hội IV (12/1976) xác định là THEN CHỐT trong 3 cuộc cách mạng?",
    options: [
      "Cách mạng kỹ thuật được xác định là then chốt trong 3 cuộc cách mạng.",
      "Cách mạng quan hệ sản xuất được xác định là then chốt trong 3 cuộc.",
      "Cách mạng tư tưởng văn hóa được xác định là then chốt trong 3 cuộc.",
      "Cách mạng thương mại dịch vụ được xác định là then chốt trong 3 cuộc."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội IV xác định Cách mạng kỹ thuật là then chốt trong 3 cuộc cách mạng XHCN."
  },

  // 8-25: Medium (18 questions)
  {
    id: "lsd-dh4-d1-008",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Số lượng đại biểu chính thức tham dự Đại hội đại biểu toàn quốc lần thứ IV (12/1976) là bao nhiêu?",
    options: [
      "Đại hội có 1.008 đại biểu đại diện cho hơn 1,5 triệu đảng viên cả nước.",
      "Đại hội có 525 đại biểu đại diện cho hơn 50 vạn đảng viên trong cả nước.",
      "Đại hội có 158 đại biểu đại diện cho hơn 76 vạn đảng viên trong cả nước.",
      "Đại hội có 300 đại biểu đại diện cho hơn 30 vạn đảng viên trong cả nước."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội IV có 1.008 đại biểu đại diện cho hơn 1,5 triệu đảng viên trong cả nước."
  },
  {
    id: "lsd-dh4-d1-009",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Đường lối chung của cách mạng xã hội chủ nghĩa được Đại hội IV (12/1976) vạch ra cho cả nước là gì?",
    options: [
      "Đưa cả nước tiến thẳng lên chủ nghĩa xã hội bỏ qua giai đoạn phát triển tư bản.",
      "Tiến hành công nghiệp hóa ở miền Bắc và duy trì kinh tế tư bản ở miền Nam.",
      "Thực hiện chính sách mở cửa ngoại giao tự do tuyệt đối với các nước tư bản.",
      "Tập trung toàn bộ ngân sách để trả các khoản nợ chiến tranh từ nước ngoài."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Nhiệm vụ: Đưa cả nước tiến thẳng lên chủ nghĩa xã hội, bỏ qua giai đoạn phát triển tư bản chủ nghĩa."
  },
  {
    id: "lsd-dh4-d1-010",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Vị trí của công nghiệp hóa xã hội chủ nghĩa được Đại hội IV (12/1976) xác định như thế nào?",
    options: [
      "Là nhiệm vụ trung tâm của suốt thời kỳ quá độ tiến lên chủ nghĩa xã hội.",
      "Là nhiệm vụ phụ bên cạnh nhiệm vụ mở rộng thị trường xuất khẩu nông sản.",
      "Là nhiệm vụ tạm thời áp dụng riêng cho các vùng đô thị lớn ở miền Nam.",
      "Là nhiệm vụ hoàn thành triệt để ngay trong Kế hoạch 5 năm II (1976-1980)."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Công nghiệp hóa XHCN được xác định là nhiệm vụ trung tâm của suốt thời kỳ quá độ lên CNXH."
  },
  {
    id: "lsd-dh4-d1-011",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Ba cuộc cách mạng được Đại hội IV (12/1976) khẳng định tiến hành đồng thời gồm những gì?",
    options: [
      "Cách mạng quan hệ sản xuất, Cách mạng tư tưởng văn hóa, Cách mạng kỹ thuật.",
      "Cách mạng nông nghiệp, Cách mạng thương mại, Cách mạng công nghiệp nặng.",
      "Cách mạng giải phóng dân tộc, Cách mạng dân chủ nhân dân, Cách mạng XHCN.",
      "Cách mạng văn hóa tư tưởng, Cách mạng giáo dục, Cách mạng y tế cộng đồng."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "3 cuộc cách mạng: Cách mạng về QHSX, Cách mạng TTVH, Cách mạng kỹ thuật (Cách mạng kỹ thuật là then chốt)."
  },
  {
    id: "lsd-dh4-d1-012",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Nhiệm vụ cấp bách của miền Nam sau ngày giải phóng được Đại hội IV (12/1976) đề ra là gì?",
    options: [
      "Tiến hành cải tạo xã hội chủ nghĩa, xóa bỏ thành phần kinh tế bóc thấu.",
      "Cho phép duy trì tự do tuyệt đối các hình thức sở hữu tư nhân tư bản.",
      "Tập trung giải tán toàn bộ các tổ chức đoàn thể nhân dân ở địa phương.",
      "Rút toàn bộ lực lượng cán bộ miền Bắc về lại khu vực phía Bắc ngay."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Ở miền Nam: Vừa cải tạo XHCN vừa xây dựng CNXH, xóa bỏ các thành phần bóc thấu tư bản bóc bóc."
  },
  {
    id: "lsd-dh4-d1-013",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Ý nghĩa của việc đổi tên Đảng thành Đảng Cộng sản Việt Nam tại Đại hội IV (12/1976) là gì?",
    options: [
      "Khẳng định bản chất giai cấp công nhân và mục tiêu cao nhất là chủ nghĩa cộng sản.",
      "Nhằm che giấu lý tưởng cách mạng của Đảng trước các quốc gia phương Tây.",
      "Vì Quốc tế Cộng sản bắt buộc tất cả các Đảng Lao động phải đổi tên chuẩn.",
      "Đánh dấu việc giải tán toàn bộ các chi bộ Đảng ở khu vực miền Nam cũ."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đổi tên thành Đảng Cộng sản Việt Nam khẳng định bản chất giai cấp công nhân, đường lối kiên định tiến lên CNXH và CNCS."
  },
  {
    id: "lsd-dh4-d1-014",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Chính sách đối ngoại được Đại hội IV (12/1976) xác định trong giai đoạn mới nhằm mục đích gì?",
    options: [
      "Tăng cường đoàn kết với Liên Xô, Lào, Campuchia và các lực lượng hòa bình.",
      "Đứng trung lập hoàn toàn không tham gia các tổ chức dân chủ quốc tế.",
      "Chỉ hợp tác ngoại giao với các quốc gia thuộc khu vực Đông Nam Á.",
      "Cắt đứt mối quan hệ đoàn kết hữu nghị với các nước xã hội chủ nghĩa."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Ưu tiên thắt chặt đoàn kết với Liên Xô, đoàn kết đặc biệt 3 nước Đông Dương và phong trào hòa bình thế giới."
  },
  {
    id: "lsd-dh4-d1-015",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Mục tiêu cơ bản của Kế hoạch 5 năm lần thứ hai (1976 - 1980) được Đại hội IV đề ra là gì?",
    options: [
      "Vừa khôi phục kinh tế vừa bước đầu xây dựng cơ sở vật chất kỹ thuật CNXH.",
      "Hoàn thành triệt để công nghiệp hóa hiện đại hóa đất nước trong 5 năm.",
      "Chuyển toàn bộ nền kinh tế cả nước sang kinh tế thị trường mở cửa tự do.",
      "Tập trung toàn bộ lực lượng quân sự để chuẩn bị chiến tranh mở rộng."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Mục tiêu 1976-1980: Khôi phục kinh tế hậu chiến, cải tạo XHCN ở miền Nam, xây dựng cơ sở vật chất - kỹ thuật CNXH."
  },
  {
    id: "lsd-dh4-d1-016",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Báo cáo Chính trị tại Đại hội IV (12/1976) đã tổng kết mấy bài học lịch sử lớn của chống Mỹ?",
    options: [
      "Đại hội đã tổng kết 4 bài học lịch sử lớn của cuộc kháng chiến chống Mỹ.",
      "Đại hội đã tổng kết 2 bài học lịch sử lớn của cuộc kháng chiến chống Mỹ.",
      "Đại hội đã tổng kết 6 bài học lịch sử lớn của cuộc kháng chiến chống Mỹ.",
      "Đại hội đã tổng kết 8 bài học lịch sử lớn của cuộc kháng chiến chống Mỹ."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Báo cáo Chính trị tổng kết 4 bài học lịch sử lớn của cuộc kháng chiến chống Mỹ cứu nước."
  },
  {
    id: "lsd-dh4-d1-017",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Ý nghĩa của việc khôi phục chức danh Tổng Bí thư đối với công tác tổ chức Đảng tại ĐH IV là gì?",
    options: [
      "Kiện toàn bộ máy lãnh đạo tập trung thống nhất theo chuẩn mực chung.",
      "Tạo ra sự cạnh tranh quyền lực trong Ban Chấp hành Trung ương Đảng.",
      "Nhằm mục đích thay thế hoàn toàn tư tưởng Hồ Chí Minh trong sinh hoạt.",
      "Quy định theo mô hình tổ chức bộ máy nhà nước của các nước tư bản."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Khôi phục chức danh Tổng Bí thư (thay cho Bí thư Thứ nhất) giúp thống nhất bộ máy lãnh đạo Đảng trong giai đoạn mới."
  },
  {
    id: "lsd-dh4-d1-018",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Nội dung đường lối xây dựng nền văn hóa mới được Đại hội IV (12/1976) xác định ra sao?",
    options: [
      "Xây dựng nền văn hóa có nội dung xã hội chủ nghĩa và tính dân tộc sâu sắc.",
      "Tiếp thu toàn bộ các sản phẩm văn hóa giải trí thương mại phương Tây.",
      "Bãi bỏ hoàn toàn các di sản văn hóa truyền thống của các dân tộc thiểu.",
      "Chỉ tập trung phát triển văn hóa nghệ thuật tại khu vực các đô thị."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Xây dựng nền văn hóa mới có nội dung XHCN và tính dân tộc sâu sắc, xây dựng con người mới XHCN."
  },
  {
    id: "lsd-dh4-d1-019",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Số lượng các đoàn đại biểu quốc tế tham dự Đại hội đại biểu toàn quốc lần thứ IV là bao nhiêu?",
    options: [
      "Có 29 đoàn đại biểu quốc tế của các Đảng anh em đến tham dự Đại hội.",
      "Có 20 đoàn đại biểu quốc tế của các Đảng anh em đến tham dự Đại hội.",
      "Có 50 đoàn đại biểu quốc tế của các Đảng anh em đến tham dự Đại hội.",
      "Có 10 đoàn đại biểu quốc tế của các Đảng anh em đến tham dự Đại hội."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội IV có 29 đoàn đại biểu quốc tế đại diện cho các Đảng Cộng sản và Công nhân các nước đến dự."
  },
  {
    id: "lsd-dh4-d1-020",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Đại hội IV (12/1976) đã xác định lực lượng nòng cốt của công cuộc xây dựng CNXH là gì?",
    options: [
      "Giai cấp công nhân, nông dân tập thể và tầng lớp trí thức XHCN.",
      "Giai cấp tư sản dân tộc cùng với tầng lớp địa chủ phong kiến cũ.",
      "Các tập đoàn kinh tế tư nhân lớn hợp tác với nước ngoài ở đô thị.",
      "Lực lượng thương gia tiểu thương tự do tại các chợ trung tâm."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Nền tảng xã hội là khối liên minh công nhân, nông dân tập thể và trí thức XHCN do Đảng lãnh đạo."
  },
  {
    id: "lsd-dh4-d1-021",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Nguyên tắc xây dựng Chế độ làm chủ tập thể xã hội chủ nghĩa được Đại hội IV xác định gồm những gì?",
    options: [
      "Làm chủ về chính trị, kinh tế, văn hóa xã hội trên phạm vi cả nước.",
      "Chỉ làm chủ về mặt kinh tế tư nhân không làm chủ về mặt chính trị.",
      "Làm chủ thuộc về riêng tầng lớp lãnh đạo bộ máy chính quyền nhà nước.",
      "Cho phép các tập đoàn nước ngoài nắm quyền kiểm soát nền kinh tế."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Chế độ làm chủ tập thể XHCN là làm chủ về chính trị, kinh tế, văn hóa - xã hội do nhân dân lao động làm chủ."
  },
  {
    id: "lsd-dh4-d1-022",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Đánh giá lịch sử nào đã được Đại hội IV (12/1976) khẳng định về thắng lợi kháng chiến chống Mỹ?",
    options: [
      "Mãi mãi đi vào lịch sử dân tộc như một trong những trang chói lọi nhất.",
      "Là một thắng lợi quân sự bình thường không có tầm vóc ảnh hưởng lớn.",
      "Là kết quả của sự may mắn hòa hoãn giữa các quốc gia cường quyền lớn.",
      "Là thắng lợi riêng của bộ phận nhân dân lao động ở khu vực miền Bắc."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội IV khẳng định thắng lợi chống Mỹ 'mãi mãi đi vào lịch sử dân tộc như một trong những trang chói lọi nhất, một biểu tượng sáng ngời về sự toàn thắng của chủ nghĩa anh hùng cách mạng'."
  },
  {
    id: "lsd-dh4-d1-023",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Quy mô kết nạp đảng viên mới sau khi đổi tên Đảng tại Đại hội IV (12/1976) chú trọng điều gì?",
    options: [
      "Nâng cao chất lượng đảng viên, đưa những người không đủ tiêu chuẩn ra khỏi.",
      "Kết nạp đại trà mọi tầng lớp không cần qua xem xét động cơ tư tưởng.",
      "Bãi bỏ quy định tự phê bình và phê bình trong các sinh hoạt chi bộ định.",
      "Chỉ kết nạp cán bộ làm việc trong các cơ quan nhà nước ở Thủ đô Hà Nội."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Nâng cao chất lượng đảng viên, kiên quyết đưa những người thoái hóa biến chất ra khỏi Đảng."
  },
  {
    id: "lsd-dh4-d1-024",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Đường lối phát triển nông nghiệp trong Kế hoạch 5 năm II (1976-1980) nhằm mục đích cấp bách gì?",
    options: [
      "Giải quyết vững chắc vấn đề lương thực thực phẩm cho toàn bộ nhân dân.",
      "Tập trung sản xuất các cây công nghiệp cao cấp để xuất khẩu sang Mỹ.",
      "Xóa bỏ các tập đoàn sản xuất nông nghiệp để chia ruộng cá thể.",
      "Nhập khẩu toàn bộ lương thực từ nước ngoài để tập trung công nghiệp."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Nhiệm vụ cấp bách: Đẩy mạnh sản xuất nông nghiệp, giải quyết vững chắc nhu cầu lương thực, thực phẩm cho nhân dân."
  },
  {
    id: "lsd-dh4-d1-025",
    examSet: 1,
    sectionId: "dh-4-grp-2",
    subsectionId: "dh-4-sec-2",
    question: "Danh hiệu cao quý nào được lịch sử Đảng ghi nhận riêng cho Đại hội IV (12/1976)?",
    options: [
      "Đại hội toàn thắng của sự nghiệp giải phóng dân tộc, thống nhất Tổ quốc.",
      "Đại hội Kháng chiến thắng lợi và xây dựng Đảng Lao động Việt Nam.",
      "Đại hội Đổi mới toàn diện đất nước mở đường bước vào thế kỷ XXI mới.",
      "Đại hội Khôi phục hệ thống tổ chức Đảng sau những năm thoái trào."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội IV được ghi nhận là 'Đại hội toàn thắng của sự nghiệp giải phóng dân tộc, thống nhất Tổ quốc'."
  },

  // 26-36: Hard (11 questions)
  {
    id: "lsd-dh4-d1-026",
    examSet: 1,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Phân tích điểm bước ngoặt của Đại hội IV (12/1976) so với các Đại hội trước đây?",
    options: [
      "Đầu tiên sau khi đất nước thống nhất, cả nước cùng thực hiện chiến lược XHCN.",
      "Đánh dấu việc chuyển từ chiến đấu bí mật sang hoạt động công khai lần đầu.",
      "Quyết định từ bỏ con đường xây dựng chủ nghĩa xã hội để làm kinh tế.",
      "Lần đầu tiên bầu Bác Hồ làm Chủ tịch Ban Chấp hành Trung ương Đảng."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "ĐH IV là Đại hội đầu tiên khi đất nước hòa bình thống nhất, cả nước chấm dứt phân chia chiến lược để cùng bước vào thời kỳ quá độ tiến lên CNXH."
  },
  {
    id: "lsd-dh4-d1-027",
    examSet: 1,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Tại sao việc xác định 'Cách mạng kỹ thuật là then chốt' tại ĐH IV lại mang tầm nhìn hiện đại?",
    options: [
      "Kỹ thuật là lực lượng sản xuất trực tiếp biến đổi năng suất lao động.",
      "Vì ta muốn thay thế hoàn toàn vai trò lao động của con người bằng máy.",
      "Bởi vì công nghiệp nhẹ miền Bắc đã đạt trình độ tự động hóa hoàn toàn.",
      "Vì các nước xã hội chủ nghĩa bắt buộc ta phải ứng dụng máy tính ngay."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Cách mạng kỹ thuật là động lực hiện đại hóa lực lượng sản xuất, tạo cơ sở vật chất - kỹ thuật quyết định sự thành bại của CNXH."
  },
  {
    id: "lsd-dh4-d1-028",
    examSet: 1,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Hạn chế trong nhận thức kinh tế của Đại hội IV (12/1976) được lịch sử rút ra là gì?",
    options: [
      "Chủ quan nôn nóng trong việc chỉ đạo xây dựng CNXH và cải tạo kinh tế.",
      "Xa rời mục tiêu xây dựng chủ nghĩa xã hội để chạy theo kinh tế tư bản.",
      "Không chú trọng phát triển công nghiệp nặng mà chỉ phát triển nông.",
      "Quá xem nhẹ công tác quốc phòng an ninh bảo vệ biên giới phía Nam."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Hạn chế: Tư tưởng chủ quan, nôn nóng, muốn tiến nhanh lên CNXH, đặt ra các chỉ tiêu Kế hoạch 5 năm II quá cao so với thực lực."
  },
  {
    id: "lsd-dh4-d1-029",
    examSet: 1,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Sự kết hợp giữa công nghiệp hóa XHCN và cải tạo XHCN ở miền Nam tại ĐH IV nhằm mục đích gì?",
    options: [
      "Xây dựng cơ cấu kinh tế quốc dân thống nhất trên phạm vi toàn quốc.",
      "Tách rời nền kinh tế miền Nam thành một khu vực đặc quyền tự do.",
      "Bãi bỏ hoàn toàn các ngành công nghiệp nhẹ ở khu vực miền Nam.",
      "Dồn toàn bộ máy móc nhà máy ở miền Nam ra khu vực phía Bắc."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Nhằm hợp nhất nền kinh tế hai miền thành một cơ cấu kinh tế thống nhất XHCN, kết hợp công nghiệp với nông nghiệp trên cả nước."
  },
  {
    id: "lsd-dh4-d1-030",
    examSet: 1,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Bản chất của Chế độ làm chủ tập thể XHCN được Đại hội IV (12/1976) đúc kết thành cơ chế nào?",
    options: [
      "Đảng lãnh đạo, Nhà nước quản lý, Nhân dân lao động làm chủ tập thể.",
      "Nhà nước tự quyết, Nhân dân tuân theo, Đảng làm nhiệm vụ cố vấn.",
      "Các tập đoàn tư bản điều hành, Nhà nước giám sát, Nhân dân làm thuê.",
      "Đảng làm chủ tuyệt đối mọi hoạt động sản xuất kinh doanh tư nhân."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Cơ chế: 'Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ' được hình thành và khẳng định từ Đại hội IV."
  },
  {
    id: "lsd-dh4-d1-031",
    examSet: 1,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Ý nghĩa của việc tổng kết 4 bài học chống Mỹ tại Đại hội IV đối với công tác quân sự là gì?",
    options: [
      "Đúc kết nghệ thuật chiến tranh nhân dân, xây dựng nền quốc phòng toàn dân.",
      "Tuyên bố giải tán toàn bộ các lực lượng vũ trang chính quy chuyển sang kinh.",
      "Chỉ áp dụng kinh nghiệm chiến tranh cho các trận đánh ở khu vực biên giới.",
      "Khẳng định vai trò quyết định duy nhất thuộc về nguồn viện trợ vũ khí."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đúc kết kho tàng lý luận quân sự Việt Nam: đường lối chiến tranh nhân dân, kết hợp sức mạnh dân tộc và thời đại để bảo vệ Tổ quốc."
  },
  {
    id: "lsd-dh4-d1-032",
    examSet: 1,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Tại sao việc ưu tiên phát triển công nghiệp nặng giai đoạn 1976-1980 chưa mang lại hiệu quả cao?",
    options: [
      "Cơ sở hạ tầng và nguồn vốn chưa đáp ứng, nông nghiệp chưa vững chắc.",
      "Vì nền công nghiệp nặng miền Bắc đã hoàn thành vượt mức kế hoạch.",
      "Do tư bản phương Tây đã thâu tóm toàn bộ các nhà máy công nghiệp.",
      "Vì Đảng quyết định hủy bỏ các dự án công nghiệp nặng giữa chừng."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Do nôn nóng đầu tư công nghiệp nặng khi lực lượng sản xuất còn yếu, nông nghiệp và công nghiệp nhẹ chưa làm nền tảng vững chắc."
  },
  {
    id: "lsd-dh4-d1-033",
    examSet: 1,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Nguyên nhân căn bản dẫn tới sự suy giảm kinh tế những năm sau Đại hội IV (1976-1980) là gì?",
    options: [
      "Hậu quả nặng nề của chiến tranh, bao cấm vận và cơ chế quản lý tập trung.",
      "Do nhân dân miền Nam không chịu tham gia công cuộc lao động sản xuất.",
      "Do toàn bộ nguồn viện trợ từ các nước XHCN bị cắt đứt hoàn toàn 1976.",
      "Do chính quyền mới bãi bỏ hoàn toàn các hình thức kinh tế tập thể."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Hậu quả tàn phá nặng nề của 30 năm chiến tranh, cuộc chiến tranh biên giới, cấm vận của Mỹ và cơ chế quan liêu bao cấp tập trung."
  },
  {
    id: "lsd-dh4-d1-034",
    examSet: 1,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Mối quan hệ giữa xây dựng CNXH và Bảo vệ Tổ quốc được Đại hội IV (12/1976) xác định ra sao?",
    options: [
      "Hai nhiệm vụ chiến lược song song khăng khít, xây dựng phải đi đôi bảo vệ.",
      "Chỉ tập trung xây dựng kinh tế mà bỏ qua nhiệm vụ bảo vệ an ninh quốc gia.",
      "Chỉ tập trung nhiệm vụ bảo vệ biên giới mà xem nhẹ phát triển kinh tế.",
      "Hai nhiệm vụ này loại trừ lẫn nhau không thể cùng thực hiện đồng thời."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Xây dựng chủ nghĩa xã hội và Bảo vệ vững chắc Tổ quốc Việt Nam XHCN là hai nhiệm vụ chiến lược khăng khít của cách mạng."
  },
  {
    id: "lsd-dh4-d1-035",
    examSet: 1,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Tầm quan trọng của công tác xây dựng con người mới XHCN được Đại hội IV đặt ra là gì?",
    options: [
      "Con người là chủ thể sáng tạo, vừa là mục tiêu vừa là động lực của CNXH.",
      "Con người chỉ là công cụ lao động thuần túy phục vụ cho máy móc công.",
      "Nhằm mục đích xóa bỏ hoàn toàn đời sống văn hóa tinh thần của nhân dân.",
      "Chỉ áp dụng đối với thế hệ thanh niên học sinh ở các khu vực đô thị."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Xây dựng con người mới XHCN có giác ngộ giai cấp, lòng yêu nước, có tri thức và tinh thần làm chủ tập thể là động lực phát triển."
  },
  {
    id: "lsd-dh4-d1-036",
    examSet: 1,
    sectionId: "dh-4-grp-3",
    subsectionId: "dh-4-sec-3",
    question: "Giá trị thực tiễn lớn nhất mà Đại hội IV (12/1976) để lại cho các Đại hội sau là gì?",
    options: [
      "Bài học kiên định mục tiêu CNXH và bài học nhìn thẳng vào sự thật để đổi mới.",
      "Bài học từ bỏ hoàn toàn con đường xây dựng chủ nghĩa xã hội tiến lên.",
      "Bài học phụ thuộc hoàn toàn vào mô hình phát triển của các nước tư bản.",
      "Bài học bãi bỏ hoàn toàn vai trò quản lý kinh tế của Nhà nước XHCN."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Để lại bài học kiên định mục tiêu CNXH, đồng thời giúp Đảng tích lũy thực tiễn nhìn thẳng vào hạn chế nôn nóng để khởi xướng Đổi mới sau này."
  },

  // 37-40: Outside (4 questions - Practical Application)
  {
    id: "lsd-dh4-d1-037",
    examSet: 1,
    sectionId: "dh-4-grp-4",
    subsectionId: "dh-4-sec-4",
    question: "Bài học về đại đoàn kết toàn dân tộc sau khi đất nước thống nhất (ĐH IV) vận dụng thế nào hiện nay?",
    options: [
      "Hòa hợp dân tộc, phát huy mọi nguồn lực nhân dân vì mục tiêu đất nước phồn vinh.",
      "Phân biệt đối xử giữa các thành phần dân tộc ở các vùng miền khác nhau.",
      "Chỉ tập trung phát triển quyền lợi cho cán bộ làm việc trong nhà nước.",
      "Tuyệt đối không thu hút nguồn lực trí thức từ kiều bào ở nước ngoài."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Tăng cường khối đại đoàn kết toàn dân tộc, hòa hợp dân tộc, huy động mọi nguồn lực trong và ngoài nước xây dựng đất nước."
  },
  {
    id: "lsd-dh4-d1-038",
    examSet: 1,
    sectionId: "dh-4-grp-4",
    subsectionId: "dh-4-sec-4",
    question: "Từ bài học đổi tên Đảng thành Đảng Cộng sản Việt Nam (12/1976), yêu cầu gì đặt ra cho cán bộ hiện nay?",
    options: [
      "Giữ vững bản chất cách mạng, kiên định lý tưởng và nâng cao bản lĩnh cầm quyền.",
      "Phai nhạt lý tưởng cách mạng, chạy theo lối sống thực dụng cá nhân tiêu cực.",
      "Tránh né trách nhiệm, không dũng cảm đấu tranh phòng chống tham nhũng.",
      "Xa rời quần chúng nhân dân, làm việc theo lối quan nhêu mệnh lệnh hành chính."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Kiên định bản chất giai cấp công nhân của Đảng, giữ vững lý tưởng cộng sản, nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng."
  },
  {
    id: "lsd-dh4-d1-039",
    examSet: 1,
    sectionId: "dh-4-grp-4",
    subsectionId: "dh-4-sec-4",
    question: "Bài học nhìn thẳng vào sự thật từ hạn chế nôn nóng giai đoạn 1976-1980 gợi mở bài học quản lý gì?",
    options: [
      "Tôn trọng quy luật khách quan, xuất phát từ thực tiễn và không chủ quan nôn nóng.",
      "Đưa ra các chỉ tiêu phát triển kinh tế vượt quá xa thực lực quốc gia.",
      "Tránh né những khuyết điểm sai lầm trong quá trình chỉ đạo thực hiện.",
      "Bảo thủ không chịu sửa đổi các chính sách đã không còn phù hợp thực tế."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Luôn tôn trọng quy luật khách quan, bám sát thực tiễn, tránh chủ quan duy ý chí nôn nóng trong hoạch định chính sách."
  },
  {
    id: "lsd-dh4-d1-040",
    examSet: 1,
    sectionId: "dh-4-grp-4",
    subsectionId: "dh-4-sec-4",
    question: "Ý nghĩa của việc đẩy mạnh Cách mạng Kỹ thuật từ Đại hội IV nhắc nhở thế hệ trẻ điều gì hiện nay?",
    options: [
      "Chủ động học tập tri thức khoa học công nghệ, chuyển đổi số và đổi mới sáng tạo.",
      "Thờ ơ trước các thành tựu của cuộc cách mạng công nghiệp lần thứ tư.",
      "Ỷ lại vào các công nghệ cũ mà không chịu tiếp thu tri thức hiện đại.",
      "Xem nhẹ công tác nghiên cứu khoa học trong các trường đại học cao đẳng."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Thế hệ trẻ phải làm chủ khoa học công nghệ tiên tiến, đi đầu trong chuyển đổi số, đổi mới sáng tạo đưa đất nước phát triển."
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
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ CHUẨN 1: ĐẠI HỘI IV (12/1976)
   Mã Bộ Đề: questions-lsd-dh4-part1.js
   Số lượng: 40 câu cố định (36 Inside + 4 Outside)
   ============================================================ */

export const questionsLsdDh4Part1 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh4-part1.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh4-part1.js");
}
