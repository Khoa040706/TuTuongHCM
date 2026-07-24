import fs from "fs";

// 40 questions for Fixed Exam Set 1 (Đại hội VIII - 6/1996)
// 36 Inside (7 Easy, 18 Medium, 11 Hard) + 4 Outside
const questions = [
  // 1-7: Easy (7 questions)
  {
    id: "lsd-dh8-d1-001",
    examSet: 1,
    sectionId: "dh-8-grp-1",
    subsectionId: "dh-8-sec-1",
    question: "Đại hội đại biểu toàn quốc lần thứ VIII của Đảng diễn ra trong khoảng thời gian nào?",
    options: [
      "Đại hội diễn ra trong thời gian từ ngày 28 tháng 6 đến ngày 1 tháng 7 năm 1996.",
      "Đại hội diễn ra trong thời gian từ ngày 24 đến ngày 27 tháng 6 năm 1991.",
      "Đại hội diễn ra trong thời gian từ ngày 15 đến ngày 18 tháng 12 năm 1986.",
      "Đại hội diễn ra trong thời gian từ ngày 22 đến ngày 26 tháng 4 năm 2001."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội đại biểu toàn quốc lần thứ VIII của Đảng họp từ ngày 28-6 đến ngày 1-7-1996 tại Hà Nội."
  },
  {
    id: "lsd-dh8-d1-002",
    examSet: 1,
    sectionId: "dh-8-grp-1",
    subsectionId: "dh-8-sec-1",
    question: "Chủ đề cốt lõi đánh dấu bước ngoặt phát triển mới của đất nước tại Đại hội VIII (6/1996) là gì?",
    options: [
      "Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước vì mục tiêu dân giàu nước mạnh.",
      "Tập trung cải cách triệt để bộ máy hành chính theo mô hình tư bản phương Tây.",
      "Quyết định đưa toàn bộ đất đai nông nghiệp trên cả nước vào sở hữu tư nhân.",
      "Khôi phục hoàn toàn cơ chế phân phối bao cấp tem phiếu như thời kỳ trước đổi mới."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VIII mở ra thời kỳ mới: Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước."
  },
  {
    id: "lsd-dh8-d1-003",
    examSet: 1,
    sectionId: "dh-8-grp-1",
    subsectionId: "dh-8-sec-1",
    question: "Tôn chỉ đối ngoại được Đại hội VIII (6/1996) bổ sung phát triển so với Đại hội VII là gì?",
    options: [
      "Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế.",
      "Việt Nam muốn là bạn với tất cả các nước không phân biệt chế độ chính trị xã hội.",
      "Việt Nam chỉ hợp tác chiến lược toàn diện với các nước xã hội chủ nghĩa anh em.",
      "Việt Nam tuyên bố rút khỏi tất cả các tổ chức kinh tế và tài chính khu vực ASEAN."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VIII phát triển phương châm đối ngoại: 'Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế'."
  },
  {
    id: "lsd-dh8-d1-004",
    examSet: 1,
    sectionId: "dh-8-grp-1",
    subsectionId: "dh-8-sec-1",
    question: "Mục tiêu cơ bản đến năm 2020 do Đại hội VIII (6/1996) đề ra cho nước ta là gì?",
    options: [
      "Phấn đấu đưa nước ta cơ bản trở thành một nước công nghiệp theo hướng hiện đại.",
      "Phấn đấu hoàn thành triệt để quá trình đô thị hóa trên toàn bộ vùng nông thôn.",
      "Phấn đấu đạt thu nhập bình quân đầu người cao nhất trong khu vực Đông Nam Á.",
      "Phấn đấu xóa bỏ hoàn toàn các ngành sản xuất nông nghiệp truyền thống lâu đời."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VIII đề ra mục tiêu phấn đấu đến năm 2020 nước ta cơ bản trở thành một nước công nghiệp."
  },
  {
    id: "lsd-dh8-d1-005",
    examSet: 1,
    sectionId: "dh-8-grp-1",
    subsectionId: "dh-8-sec-1",
    question: "Đồng chí nào tiếp tục được bầu giữ chức vụ Tổng Bí thư tại Đại hội đại biểu toàn quốc lần thứ VIII?",
    options: [
      "Đồng chí Đỗ Mười tiếp tục được bầu giữ chức vụ Tổng Bí thư.",
      "Đồng chí Lê Khả Phiêu tiếp tục được bầu giữ chức vụ Tổng Bí thư.",
      "Đồng chí Nguyễn Văn Linh tiếp tục được bầu giữ chức vụ Tổng Bí thư.",
      "Đồng chí Nông Đức Mạnh tiếp tục được bầu giữ chức vụ Tổng Bí thư."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VIII tiếp tục bầu đồng chí Đỗ Mười làm Tổng Bí thư Ban Chấp hành Trung ương."
  },
  {
    id: "lsd-dh8-d1-006",
    examSet: 1,
    sectionId: "dh-8-grp-1",
    subsectionId: "dh-8-sec-1",
    question: "Đại hội VIII của Đảng (6/1996) diễn ra sau khi tổng kết bao nhiêu năm thực hiện đường lối Đổi mới?",
    options: [
      "Tổng kết 10 năm thực hiện đường lối đổi mới của Đảng (1986-1996).",
      "Tổng kết 15 năm thực hiện đường lối đổi mới của Đảng (1986-2001).",
      "Tổng kết 20 năm thực hiện đường lối đổi mới của Đảng (1986-2006).",
      "Tổng kết 5 năm thực hiện đường lối đổi mới của Đảng (1986-1991)."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội VIII tổng kết 10 năm Đổi mới (1986-1996)."
  },
  {
    id: "lsd-dh8-d1-007",
    examSet: 1,
    sectionId: "dh-8-grp-1",
    subsectionId: "dh-8-sec-1",
    question: "Sự kiện ngoại giao đa phương nổi bật diễn ra ngay trước Đại hội VIII (vào tháng 7/1995) là gì?",
    options: [
      "Việt Nam chính thức trở thành thành viên thứ 7 của Hiệp hội các quốc gia Đông Nam Á.",
      "Việt Nam chính thức hoàn tất thủ tục gia nhập Tổ chức Thương mại Thế giới WTO.",
      "Việt Nam ký kết Hiệp định Thương mại Song phương toàn diện với Hợp chủng quốc Hoa Kỳ.",
      "Việt Nam trở thành Ủy viên không thường trực Hội đồng Bảo an Liên Hợp Quốc khóa mới."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Tháng 7/1995, Việt Nam chính thức gia nhập ASEAN và bình thường hóa quan hệ với Mỹ."
  },

  // 8-25: Medium (18 questions)
  {
    id: "lsd-dh8-d1-008",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Số lượng đại biểu chính thức tham dự Đại hội đại biểu toàn quốc lần thứ VIII (6/1996) là bao nhiêu?",
    options: [
      "Đại hội có 1.198 đại biểu đại diện cho gần 2,13 triệu đảng viên cả nước.",
      "Đại hội có 1.176 đại biểu đại diện cho hơn 2,10 triệu đảng viên cả nước.",
      "Đại hội có 1.129 đại biểu đại diện cho hơn 1,90 triệu đảng viên cả nước.",
      "Đại hội có 1.033 đại biểu đại diện cho hơn 1,70 triệu đảng viên cả nước."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội VIII có 1.198 đại biểu đại diện cho gần 2,13 triệu đảng viên trong cả nước."
  },
  {
    id: "lsd-dh8-d1-009",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Nhận định quan trọng của Đại hội VIII về tình hình khủng hoảng kinh tế xã hội đất nước là gì?",
    options: [
      "Nước ta đã ra khỏi khủng hoảng kinh tế xã hội nhưng một số mặt chưa vững chắc.",
      "Nước ta vẫn còn chìm sâu trong khủng hoảng lạm phát phi mã không thể kiểm soát.",
      "Nước ta đã trở thành một quốc gia phát triển giàu có hàng đầu khu vực Châu Á.",
      "Nước ta hoàn toàn kết thúc thời kỳ quá độ tiến lên chủ nghĩa xã hội thành công."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "ĐH VIII nhận định: Đất nước đã ra khỏi khủng hoảng kinh tế - xã hội, tuy một số mặt chưa vững chắc."
  },
  {
    id: "lsd-dh8-d1-010",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Yếu tố được Đại hội VIII xác định là động lực chính của công nghiệp hóa, hiện đại hóa là gì?",
    options: [
      "Khoa học và công nghệ cùng với giáo dục và đào tạo là quốc sách hàng đầu.",
      "Tập trung đầu tư vốn vay nợ nước ngoài để xây dựng các nhà máy công nghiệp.",
      "Khai thác tài nguyên thiên nhiên thô để xuất khẩu lấy ngoại tệ phát triển.",
      "Duy trì nguồn nhân lực lao động giá rẻ mà không cần nâng cao trình độ nghề."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "ĐH VIII xác định khoa học và công nghệ cùng với giáo dục và đào tạo là quốc sách hàng đầu, là động lực CNH-HĐH."
  },
  {
    id: "lsd-dh8-d1-011",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Hội nghị Trung ương nào của khóa VIII (tháng 12/1997) đã bầu đồng chí Lê Khả Phiêu làm Tổng Bí thư?",
    options: [
      "Hội nghị Trung ương 4 khóa VIII họp vào tháng 12 năm 1997 bầu Tổng Bí thư.",
      "Hội nghị Trung ương 2 khóa VIII họp vào tháng 12 năm 1996 bầu Tổng Bí thư.",
      "Hội nghị Trung ương 6 khóa VIII họp vào tháng 11 năm 1998 bầu Tổng Bí thư.",
      "Hội nghị Trung ương 8 khóa VIII họp vào tháng 10 năm 1999 bầu Tổng Bí thư."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Tháng 12/1997, Hội nghị Trung ương 4 khóa VIII bầu đồng chí Lê Khả Phiêu làm Tổng Bí thư (thay đồng chí Đỗ Mười)."
  },
  {
    id: "lsd-dh8-d1-012",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Số lượng ủy viên Ban Chấp hành Trung ương Đảng do Đại hội VIII (6/1996) bầu ra là bao nhiêu?",
    options: [
      "Ban Chấp hành Trung ương Đảng khóa VIII gồm 170 ủy viên chính thức.",
      "Ban Chấp hành Trung ương Đảng khóa VIII gồm 146 ủy viên chính thức.",
      "Ban Chấp hành Trung ương Đảng khóa VIII gồm 150 ủy viên chính thức.",
      "Ban Chấp hành Trung ương Đảng khóa VIII gồm 180 ủy viên chính thức."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Ban Chấp hành Trung ương khóa VIII gồm 170 ủy viên."
  },
  {
    id: "lsd-dh8-d1-013",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Khái niệm Công nghiệp hóa, Hiện đại hóa tại Đại hội VIII được hiểu như thế nào?",
    options: [
      "Quá trình chuyển đổi căn bản các hoạt động sản xuất sang dùng công nghệ tiên tiến.",
      "Quá trình dồn toàn bộ ngân sách nhà nước để xây dựng các tập đoàn công nghiệp nặng.",
      "Quá trình nhập khẩu máy móc cũ từ các nước tư bản để thay thế lao động thủ công.",
      "Quá trình mở rộng diện tích trồng trọt nông nghiệp để tăng năng suất cây trồng."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "CNH-HĐH là quá trình chuyển đổi căn bản, toàn diện các hoạt động sản xuất, kinh doanh, dịch vụ và quản lý từ sử dụng lao động thủ công sang sử dụng công nghệ tiên tiến."
  },
  {
    id: "lsd-dh8-d1-014",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Nghị quyết Hội nghị Trung ương 5 khóa VIII (tháng 7/1998) mang chủ đề trọng tâm gì?",
    options: [
      "Xây dựng và phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.",
      "Chiến lược phát triển kinh tế biển vững chắc bảo vệ chủ quyền hải đảo quốc gia.",
      "Cải cách triệt để hệ thống giáo dục quốc dân theo mô hình hiện đại chuẩn Châu Âu.",
      "Đổi mới hoạt động của các tổ chức công đoàn và hội nông dân trên cả nước."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Hội nghị Trung ương 5 khóa VIII (7/1998) ban hành Nghị quyết về 'Xây dựng và phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc'."
  },
  {
    id: "lsd-dh8-d1-015",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Bài học đầu tiên qua 10 năm Đổi mới (1986-1996) được Đại hội VIII đúc kết là gì?",
    options: [
      "Giữ vững mục tiêu độc lập dân tộc và chủ nghĩa xã hội trong quá trình đổi mới.",
      "Cho phép tư nhân hóa toàn bộ tài sản đất đai và tài nguyên thiên nhiên quốc gia.",
      "Chỉ tập trung đổi mới kinh tế mà xem nhẹ hoàn toàn đổi mới hệ thống chính trị.",
      "Phụ thuộc hoàn toàn vào nguồn vốn viện trợ và tư vấn của các tổ chức tài chính."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Bài học 1: Trong quá trình đổi mới phải giữ vững mục tiêu độc lập dân tộc và chủ nghĩa xã hội."
  },
  {
    id: "lsd-dh8-d1-016",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Bài học về kết hợp phát triển kinh tế tại Đại hội VIII được nhấn mạnh ra sao?",
    options: [
      "Kết hợp chặt chẽ ngay từ đầu phát triển kinh tế với củng cố quốc phòng an ninh.",
      "Tập trung mọi nguồn lực cho phát triển kinh tế bỏ qua nhiệm vụ an ninh quốc phòng.",
      "Dành toàn bộ ngân sách cho chi tiêu quân sự tạm dừng các dự án phát triển kinh tế.",
      "Tách rời phát triển kinh tế và quốc phòng an ninh thành hai lĩnh vực độc lập."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Bài học: Kết hợp chặt chẽ ngay từ đầu giữa phát triển kinh tế với củng cố quốc phòng, an ninh."
  },
  {
    id: "lsd-dh8-d1-017",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Nghị quyết Trung ương 2 khóa VIII (tháng 12/1996) đã nhấn mạnh hai lĩnh vực chiến lược nào?",
    options: [
      "Khoa học - công nghệ và Giáo dục - đào tạo là quốc sách hàng đầu phát triển.",
      "Giao thông vận tải và Bưu chính viễn thông là khâu đột phá phát triển kinh tế.",
      "Nông nghiệp nông thôn và Thu thủy sản là cơ sở phát triển ổn định xã hội.",
      "Công nghiệp chế biến và Khai thác khoáng sản là ngành kinh tế chủ lực quốc gia."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Nghị quyết Trung ương 2 khóa VIII (12/1996) về Khoa học - công nghệ và Giáo dục - đào tạo."
  },
  {
    id: "lsd-dh8-d1-018",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Thành phần kinh tế giữ vai trò chủ đạo trong nền kinh tế nhiều thành phần thời kỳ ĐH VIII là gì?",
    options: [
      "Kinh tế nhà nước giữ vai trò chủ đạo cùng kinh tế tập thể làm nền tảng.",
      "Kinh tế tư nhân giữ vai trò chủ đạo quyết định toàn bộ sự phát triển.",
      "Kinh tế có vốn đầu tư nước ngoài FDI giữ vai trò nòng cốt định hướng.",
      "Kinh tế cá thể tiểu chủ giữ vai trò quyết định chính trong sản xuất."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Kinh tế nhà nước giữ vai trò chủ đạo, cùng với kinh tế tập thể ngày càng trở thành nền tảng vững chắc."
  },
  {
    id: "lsd-dh8-d1-019",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Đặc điểm nổi bật của cuộc khủng hoảng tài chính tiền tệ Châu Á năm 1997 tác động tới Việt Nam là gì?",
    options: [
      "Gây sức ép lên tỷ giá và xuất khẩu, đòi hỏi Việt Nam nâng cao sức cạnh tranh.",
      "Khiến cho toàn bộ hệ thống ngân hàng thương mại Việt Nam phá sản hoàn toàn.",
      "Làm cho Việt Nam phải ngừng hoàn toàn mọi hoạt động thương mại với quốc tế.",
      "Bắt buộc Việt Nam phải quay trở lại nền kinh tế tập trung bao cấp tem phiếu."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Khủng hoảng tài chính Châu Á 1997 thử thách bản lĩnh quản lý kinh tế vĩ mô của Việt Nam, đòi hỏi nâng cao sức cạnh tranh."
  },
  {
    id: "lsd-dh8-d1-020",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Tầm quan trọng của Luật Doanh nghiệp năm 1999 được ban hành trong nhiệm kỳ ĐH VIII là gì?",
    options: [
      "Khơi thông nguồn lực tư nhân, tạo bước ngoặt thể chế giải phóng sức sản xuất.",
      "Quốc hữu hóa toàn bộ các doanh nghiệp tư nhân đang hoạt động trên thị trường.",
      "Hạn chế sự phát triển của các doanh nghiệp tư nhân để ưu tiên kinh tế nhà nước.",
      "Cấm đoán hoàn toàn các hoạt động đầu tư trực tiếp của doanh nghiệp nước ngoài."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Luật Doanh nghiệp 1999 ra đời tạo làn sóng khởi nghiệp, phát triển mạnh mẽ kinh tế tư nhân."
  },
  {
    id: "lsd-dh8-d1-021",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Nghị quyết Trung ương 6 (lần 2) khóa VIII (tháng 2/1999) tập trung vào công tác nào?",
    options: [
      "Một số vấn đề cơ bản và cấp bách trong công tác xây dựng Đảng hiện nay.",
      "Chiến lược phát triển kinh tế trang trại và hợp tác xã kiểu mới ở nông thôn.",
      "Cải cách chính sách tiền lương và bảo hiểm xã hội cho cán bộ công chức.",
      "Quy hoạch phát triển hệ thống đô thị và hạ tầng giao thông quốc gia."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Nghị quyết Trung ương 6 (lần 2) khóa VIII (2/1999) phát động cuộc vận động tự phê bình và phê bình, chỉnh đốn Đảng."
  },
  {
    id: "lsd-dh8-d1-022",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Mối quan hệ giữa tăng trưởng kinh tế và công bằng xã hội được ĐH VIII định hướng ra sao?",
    options: [
      "Tăng trưởng kinh tế phải đi đôi với thực hiện tiến bộ và công bằng xã hội.",
      "Hy sinh công bằng xã hội và môi trường để lấy tốc độ tăng trưởng kinh tế.",
      "Tập trung phân phối cào bằng xã hội trước khi phát triển lực lượng sản xuất.",
      "Để thị trường tự do tự điều tiết công bằng xã hội mà không có Nhà nước."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "ĐH VIII: Tăng trưởng kinh tế phải đi đôi với thực hiện tiến bộ và công bằng xã hội ngay trong từng bước và từng chính sách phát triển."
  },
  {
    id: "lsd-dh8-d1-023",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Thành tựu về nông nghiệp nổi bật trong giai đoạn 10 năm Đổi mới (1986-1996) là gì?",
    options: [
      "Từ chỗ thiếu ăn trở thành nước xuất khẩu gạo lớn hàng đầu trên thế giới.",
      "Hoàn thành triệt để công nghiệp hóa nông nghiệp bằng máy móc tự động hóa.",
      "Chuyển toàn bộ nông dân sang làm việc trong các khu công nghiệp tập trung.",
      "Xóa bỏ hoàn toàn mô hình kinh tế hộ gia đình ở tất cả các địa phương."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Từ chỗ thiếu ăn kinh niên, Việt Nam vươn lên bảo đảm an ninh lương thực và trở thành nước xuất khẩu gạo hàng đầu thế giới."
  },
  {
    id: "lsd-dh8-d1-024",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Vai trò của các đồng chí Cố vấn Ban Chấp hành Trung ương được Đại hội VIII trân trọng mời là ai?",
    options: [
      "Đồng chí Nguyễn Văn Linh, Đỗ Mười và Võ Văn Kiệt làm Cố vấn Trung ương.",
      "Đồng chí Trường Chinh, Phạm Văn Đồng và Lê Đức Thọ làm Cố vấn Trung ương.",
      "Đồng chí Lê Duẩn, Nguyễn Văn Linh và Lê Khả Phiêu làm Cố vấn Trung ương.",
      "Đồng chí Võ Nguyên Giáp, Nguyễn Cơ Thạch và Trần Xuân Bách làm Cố vấn."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "HNTƯ 4 khóa VIII (12/1997) trân trọng mời các đồng chí Nguyễn Văn Linh, Đỗ Mười, Võ Văn Kiệt làm Cố vấn BCH Trung ương."
  },
  {
    id: "lsd-dh8-d1-025",
    examSet: 1,
    sectionId: "dh-8-grp-2",
    subsectionId: "dh-8-sec-2",
    question: "Ý nghĩa của việc bình thường hóa quan hệ ngoại giao Việt Nam - Hoa Kỳ (7/1995) là gì?",
    options: [
      "Phá vỡ hoàn toàn thế bao vây cấm vận, mở ra thời kỳ hội nhập sâu rộng.",
      "Làm cho Việt Nam phụ thuộc hoàn toàn vào chính sách kinh tế Hoa Kỳ.",
      "Bắt buộc Việt Nam từ bỏ mối quan hệ hợp tác với các nước xã hội chủ nghĩa.",
      "Chỉ nhằm mục đích tiếp nhận vốn viện trợ quân sự từ chính phủ Hoa Kỳ."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Bình thường hóa quan hệ Việt - Mỹ (7/1995) khép lại quá khứ, mở ra thời kỳ hợp tác bình đẳng, phá vỡ hoàn toàn thế bị bao vây cấm vận."
  },

  // 26-36: Hard (11 questions)
  {
    id: "lsd-dh8-d1-026",
    examSet: 1,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Phân tích điểm mới trong tư duy CNH-HĐH tại ĐH VIII so với thời kỳ trước đổi mới?",
    options: [
      "CNH gắn với HĐH, phát triển kinh tế tri thức và hội nhập kinh tế quốc tế.",
      "Ưu tiên phát triển công nghiệp nặng bằng cơ chế mệnh lệnh quan liêu bao cấp.",
      "Chỉ thực hiện công nghiệp hóa ở đô thị xem nhẹ hiện đại hóa nông thôn.",
      "Dựa vào nguồn vốn viện trợ từ bên ngoài mà không phát huy nội lực trong."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Tư duy mới: CNH gắn liền với HĐH, CNH theo hướng mở, hướng về xuất khẩu đồng thời thay thế nhập khẩu hiệu quả, dựa trên KH-CN."
  },
  {
    id: "lsd-dh8-d1-027",
    examSet: 1,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Tại sao việc xác định 'Giáo dục - đào tạo và Khoa học - công nghệ là quốc sách hàng đầu' có tính chiến lược?",
    options: [
      "Vì là động lực quyết định tốc độ và chất lượng phát triển CNH-HĐH đất nước.",
      "Vì để giải quyết dứt điểm tình trạng thất nghiệp cho sinh viên tốt nghiệp.",
      "Bởi vì nó giúp Việt Nam tiếp nhận công nghệ cũ lãng phí từ nước ngoài.",
      "Vì nó nhằm thay thế hoàn toàn vai trò của các nguồn lực tài chính khác."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Con người là trung tâm, trình độ nguồn nhân lực và KH-CN quyết định sức cạnh tranh quốc gia trong thời đại công nghệ."
  },
  {
    id: "lsd-dh8-d1-028",
    examSet: 1,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Phân tích giá trị lý luận của việc tổng kết 10 năm Đổi mới (1986-1996) tại ĐH VIII?",
    options: [
      "Khẳng định đường lối Đổi mới đúng đắn, rút ra 6 bài học kinh nghiệm lớn.",
      "Tuyên bố Việt Nam đã hoàn thành xong thời kỳ quá độ tiến lên chủ nghĩa.",
      "Bãi bỏ Cương lĩnh 1991 để xây dựng một văn kiện lý luận hoàn toàn mới.",
      "Thừa nhận sự thất bại của mô hình kinh tế thị trường định hướng xã hội."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "ĐH VIII đúc kết 6 bài học kinh nghiệm quý báu qua 10 năm Đổi mới, khẳng định bước đi đúng đắn của Đảng."
  },
  {
    id: "lsd-dh8-d1-029",
    examSet: 1,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Ý nghĩa của bước phát triển tư duy đối ngoại từ 'Muốn là bạn' (ĐH VII) sang 'Sẵn sàng là bạn' (ĐH VIII)?",
    options: [
      "Thể thế chủ động, tự tin và sẵn sàng nhận trách nhiệm trong hợp tác quốc tế.",
      "Từ bỏ quan hệ hợp tác với các quốc gia láng giềng trong khu vực ASEAN.",
      "Chỉ hợp tác ngoại giao với các quốc gia phát triển có nguồn vốn lớn.",
      "Chuyển sang chính sách đối ngoại khép kín tự cung tự cấp về kinh tế."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Từ nguyện vọng 'Muốn là bạn' tiến sang tư thế chủ động, khẳng định năng lực và thế chủ động 'Sẵn sàng là bạn, đối tác tin cậy'."
  },
  {
    id: "lsd-dh8-d1-030",
    examSet: 1,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Tại sao ĐH VIII nhấn mạnh CNH-HĐH nông nghiệp và nông thôn là nhiệm vụ hàng đầu?",
    options: [
      "Vì nông dân chiếm đa số dân số, nông nghiệp là nền tảng ổn định KT-XH.",
      "Vì để xóa bỏ hoàn toàn sản xuất nông nghiệp chuyển sang làm công nghiệp.",
      "Bởi vì nông nghiệp không cần vốn đầu tư vẫn đạt hiệu quả kinh tế cao.",
      "Vì để giải thể các hợp tác xã nông nghiệp chuyển cho tư nhân quản lý."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Nông nghiệp, nông thôn là địa bàn sinh sống của phần lớn nhân dân; ổn định và phát triển nông thôn là nền tảng cho CNH-HĐH."
  },
  {
    id: "lsd-dh8-d1-031",
    examSet: 1,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Phân tích giá trị của Nghị quyết Trung ương 5 khóa VIII về Xây dựng nền văn hóa tiên tiến?",
    options: [
      "Xác định văn hóa là nền tảng tinh thần xã hội, là mục tiêu và động lực phát triển.",
      "Coi văn hóa chỉ là hoạt động giải trí thuần túy không ảnh hưởng kinh tế.",
      "Bãi bỏ các di sản văn hóa truyền thống để tiếp thu toàn bộ văn hóa ngoài.",
      "Chỉ phát triển văn hóa ở vùng đô thị lớn xem nhẹ khu vực miền núi xa."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Nghị quyết Trung ương 5 khóa VIII đặt văn hóa ngang hàng với kinh tế, chính trị, là nền tảng tinh thần của xã hội."
  },
  {
    id: "lsd-dh8-d1-032",
    examSet: 1,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Bài học về kết hợp sức mạnh dân tộc với sức mạnh thời đại tại ĐH VIII được thể hiện thế nào?",
    options: [
      "Phát huy nội lực là quyết định, đồng thời tranh thủ tối đa ngoại lực hội nhập.",
      "Dựa hoàn toàn vào vốn vay ngoại lực mà không chú trọng phát huy nội lực.",
      "Khép kín cửa hoàn toàn chỉ dựa vào nội lực không giao lưu với quốc tế.",
      "Từ bỏ các nguyên tắc độc lập chủ quyền để đổi lấy viện trợ nước ngoài."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Bài học: Kết hợp sức mạnh dân tộc với sức mạnh thời đại, phát huy nội lực là chính đồng thời tranh thủ tối đa nguồn lực bên ngoài."
  },
  {
    id: "lsd-dh8-d1-033",
    examSet: 1,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Ý nghĩa của việc kiện toàn bộ máy lãnh đạo tại HNTƯ 4 khóa VIII (12/1997) là gì?",
    options: [
      "Chuyển giao thế hệ lãnh đạo mượt mà, đảm bảo tính kế thừa và phát triển.",
      "Gây chia rẽ nội bộ và làm suy giảm sức chiến đấu của bộ máy chính quyền.",
      "Bãi bỏ hoàn toàn nguyên tắc tập trung dân chủ trong bầu cử của Đảng.",
      "Thay đổi toàn bộ đường lối Đổi mới bằng một Cương lĩnh chính trị mới."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đồng chí Lê Khả Phiêu được bầu làm Tổng Bí thư thể hiện sự chuyển giao thế hệ lãnh đạo vững vàng, giữ vững đoàn kết thống nhất."
  },
  {
    id: "lsd-dh8-d1-034",
    examSet: 1,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Tại sao việc ban hành Luật Doanh nghiệp 1999 được đánh giá là bước đột phá thể chế kinh tế?",
    options: [
      "Chuyển từ cơ chế 'chỉ được làm điều pháp luật cho phép' sang 'được làm điều pháp luật không cấm'.",
      "Thắt chặt hơn nữa quy trình quản lý hành chính khiến cho các doanh nghiệp tư nhân khó gia nhập.",
      "Bãi bỏ hoàn toàn vai trò chủ đạo của kinh tế nhà nước nhằm tư nhân hóa toàn bộ nền kinh tế quốc.",
      "Chuyển giao quyền đăng ký kinh doanh cho các tổ chức phi chính phủ độc lập ngoài nhà nước quản."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Tự do kinh doanh theo pháp luật: Doanh nghiệp được quyền kinh doanh tất cả các ngành nghề mà pháp luật không cấm, giải phóng sức sản xuất."
  },
  {
    id: "lsd-dh8-d1-035",
    examSet: 1,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Mối quan hệ giữa đổi mới kinh tế và đổi mới hệ thống chính trị qua 10 năm Đổi mới ra sao?",
    options: [
      "Đổi mới kinh tế là trọng tâm, từng bước đổi mới hệ thống chính trị thận trọng.",
      "Tiến hành đổi mới hệ thống chính trị ổ ạt trước khi đổi mới cơ chế kinh tế.",
      "Chỉ đổi mới kinh tế tuyệt đối không thay đổi bất kỳ chính sách xã hội nào.",
      "Tách rời đổi mới kinh tế và chính trị thành hai quá trình không liên quan."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Tập trung đổi mới kinh tế, đồng thời từng bước đổi mới hệ thống chính trị với bước đi vững chắc, không gây xáo trộn mất ổn định."
  },
  {
    id: "lsd-dh8-d1-036",
    examSet: 1,
    sectionId: "dh-8-grp-3",
    subsectionId: "dh-8-sec-3",
    question: "Nguyên nhân cốt lõi giúp Việt Nam vượt qua khủng hoảng tài chính Châu Á 1997 là gì?",
    options: [
      "Nền kinh tế có độ mở vừa phải, nội lực nông nghiệp vững chắc và điều hành linh hoạt.",
      "Do Việt Nam không có quan hệ thương mại với bất kỳ quốc gia nào trong khu vực.",
      "Do nhận được khoản viện trợ không hoàn lại khổng lồ từNgân hàng Thế giới WB.",
      "Do Nhà nước lập tức quay lại chính sách đóng cửa kinh tế tự cung tự cấp hoàn toàn."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Nền tảng kinh tế thực (nông nghiệp ổn định), điều hành vĩ mô thận trọng và bước đi hội nhập có lộ trình phù hợp."
  },

  // 37-40: Outside (4 questions - Practical Application)
  {
    id: "lsd-dh8-d1-037",
    examSet: 1,
    sectionId: "dh-8-grp-4",
    subsectionId: "dh-7-sec-4",
    question: "Bài học CNH-HĐH gắn với phát triển kinh tế tri thức tại ĐH VIII gợi mở gì cho thanh niên trong cách mạng 4.0?",
    options: [
      "Chủ động học tập công nghệ mới, nâng cao tri thức và kỹ năng số để hội nhập.",
      "Ỷ lại vào kiến thức cũ không cần cập nhật các xu hướng công nghệ hiện đại.",
      "E ngại ứng dụng trí tuệ nhân tạo và chuyển đổi số vào hoạt động nghề nghiệp.",
      "Bỏ học để đi làm lao động phổ thông giá rẻ không cần qua đào tạo chuyên môn."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Thế hệ trẻ phải là lực lượng nòng cốt trong học tập KH-CN, đổi mới sáng tạo, làm chủ kinh tế tri thức và công nghệ số."
  },
  {
    id: "lsd-dh8-d1-038",
    examSet: 1,
    sectionId: "dh-8-grp-4",
    subsectionId: "dh-7-sec-4",
    question: "Từ việc gia nhập ASEAN (7/1995) trước ĐH VIII, bài học hội nhập quốc tế cho doanh nghiệp Việt hiện nay là gì?",
    options: [
      "Nâng cao sức cạnh tranh, chủ động tham gia chuỗi giá trị toàn cầu.",
      "Co cụm phòng thủ chỉ sản xuất tiêu thụ trong thị trường nội địa khép.",
      "Ỷ lại vào sự bảo hộ của Nhà nước không chịu đổi mới công nghệ quản lý.",
      "Sử dụng hàng giả hàng nhái để cạnh tranh về giá trên thị trường quốc tế."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Doanh nghiệp phải nâng cao năng lực quản trị, đổi mới sáng tạo để cạnh tranh bình đẳng và chủ động hội nhập sâu."
  },
  {
    id: "lsd-dh8-d1-039",
    examSet: 1,
    sectionId: "dh-8-grp-4",
    subsectionId: "dh-7-sec-4",
    question: "Bài học về phát triển văn hóa từ NQ Trung ương 5 khóa VIII (1998) vận dụng trên không gian mạng thế nào?",
    options: [
      "Giữ gìn bản sắc văn hóa dân tộc, ứng xử văn minh và lan tỏa năng lượng tích cực.",
      "Thả nổi cho các hành vi lệch chuẩn văn hóa xuất hiện lan truyền trên mạng.",
      "Bài xích hoàn toàn các sản phẩm văn hóa giải trí văn minh từ nước ngoài.",
      "Sử dụng ngôn từ xúc phạm tổn hại danh dự người khác trên các diễn đàn."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Xây dựng văn hóa ứng xử chuẩn mực, văn minh trên không gian mạng, bảo tồn và phát huy giá trị văn hóa dân tộc."
  },
  {
    id: "lsd-dh8-d1-040",
    examSet: 1,
    sectionId: "dh-8-grp-4",
    subsectionId: "dh-7-sec-4",
    question: "Tinh thần khởi nghiệp từ Luật Doanh nghiệp 1999 truyền cảm hứng gì cho phong trào Startup hiện nay?",
    options: [
      "Dám nghĩ dũng cảm làm, sáng tạo mô hình kinh doanh mới đóng góp cho xã hội.",
      "Tránh né rủi ro không dám đầu tư vào các lĩnh vực công nghệ mới mạo hiểm.",
      "Kinh doanh chớp nát vi phạm pháp luật để kiếm lợi nhuận nhanh trước mắt.",
      "Dựa dẫm hoàn toàn vào nguồn vốn ngân sách nhà nước không tự chủ tài chính."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Khơi dậy tinh thần khởi nghiệp đổi mới sáng tạo, dũng cảm dấn thân vào các lĩnh vực kinh tế mới."
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
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ CHUẨN 1: ĐẠI HỘI VIII (6/1996)
   Mã Bộ Đề: questions-lsd-dh8-part1.js
   Số lượng: 40 câu cố định (36 Inside + 4 Outside)
   ============================================================ */

export const questionsLsdDh8Part1 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh8-part1.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh8-part1.js");
}
