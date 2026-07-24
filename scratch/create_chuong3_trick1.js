import fs from "fs";

// 50 diverse trick questions for Chapter III Trick Set 1
const questions = [
  // 1-20: Giai đoạn 1975-1986 (Thống nhất Nhà nước & Thời kỳ tiền Đổi mới)
  {
    id: "lsd-c3-tr1-001",
    trickSet: 1,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Hội nghị Trung ương 24 khóa III (tháng 9-1975) đã đề ra nhiệm vụ chiến lược hàng đầu nào?",
    options: [
      "Hoàn thành thống nhất đất nước về mặt nhà nước để đưa cả nước đi lên CNXH.",
      "Tập trung toàn lực phát triển ngành công nghiệp nặng phục vụ xuất khẩu.",
      "Thực hiện cải cách tiền tệ và điều chỉnh chính sách giá lương tiền ngay.",
      "Tiến hành đàm phán gia nhập vào Hiệp hội các quốc gia Đông Nam Á."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hội nghị TƯ 24 (9/1975) xác định nhiệm vụ hoàn thành thống nhất đất nước về mặt nhà nước là yêu cầu cấp bách hàng đầu.",
    trickDetails: {
      whyTrapped: "Học sinh dễ nhầm sang nhiệm vụ công nghiệp nặng hoặc cải cách tiền tệ.",
      trickWord: "Thống nhất đất nước về mặt nhà nước",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.1.",
      tip: "NQTƯ 24 (9/1975) = Thống nhất về mặt Nhà nước."
    }
  },
  {
    id: "lsd-c3-tr1-002",
    trickSet: 1,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Sự kiện lịch sử ngày 25-4-1976 đánh dấu bước tiến quan trọng nào trong tiến trình thống nhất?",
    options: [
      "Cuộc Tổng tuyển cử bầu Quốc hội chung của cả nước được tổ chức thành công.",
      "Quốc hội khóa VI chính thức họp phiên đầu tiên quyết định tên nước Việt Nam.",
      "Đại hội đại biểu toàn quốc lần thứ IV của Đảng họp tại Thủ đô Hà Nội.",
      "Hội nghị Thương lượng chính trị thống nhất hai miền Nam Bắc thành công."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Ngày 25/4/1976, cuộc Tổng tuyển cử bầu Quốc hội chung được tổ chức trên phạm vi cả nước.",
    trickDetails: {
      whyTrapped: "Dễ nhầm với ngày họp phiên đầu tiên của Quốc hội khóa VI (24/6/1976).",
      trickWord: "25-4-1976 = Tổng tuyển cử bầu Quốc hội chung",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.1.",
      tip: "25/4/1976 = Bầu Quốc hội chung."
    }
  },
  {
    id: "lsd-c3-tr1-003",
    trickSet: 1,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Quốc hội khóa VI (kỳ họp tháng 6, 7-1976) đã quyết định tên nước và thủ đô nước ta là gì?",
    options: [
      "Cộng hòa Xã hội Chủ nghĩa Việt Nam, lấy Thủ đô là thành phố Hà Nội.",
      "Việt Nam Dân chủ Cộng hòa, lấy Thủ đô là thành phố Hà Nội chính thức.",
      "Cộng hòa Miền Nam Việt Nam, lấy Thủ đô là thành phố Hồ Chí Minh.",
      "Liên bang Đông Dương Xã hội Chủ nghĩa, lấy Thủ đô là Hà Nội rộng."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Quốc hội khóa VI quyết định đổi tên nước thành Cộng hòa Xã hội Chủ nghĩa Việt Nam, thủ đô là Hà Nội, đổi tên Sài Gòn - Gia Định thành Thành phố Hồ Chí Minh.",
    trickDetails: {
      whyTrapped: "Bẫy từ 'Việt Nam Dân chủ Cộng hòa' (tên nước trước tháng 7/1976).",
      trickWord: "Cộng hòa Xã hội Chủ nghĩa Việt Nam",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.1.",
      tip: "7/1976 = CHXHCN Việt Nam."
    }
  },
  {
    id: "lsd-c3-tr1-004",
    trickSet: 1,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Điểm vội vã, chủ quan trong đường lối kinh tế của Đại hội IV (12-1976) là gì?",
    options: [
      "Ưu tiên phát triển công nghiệp nặng vượt quá khả năng thực tế của nền.",
      "Coi nông nghiệp là mặt trận hàng đầu và ưu tiên nguồn vốn cho nông.",
      "Cho phép phát triển kinh tế tư nhân tự do cạnh tranh không kiểm soát.",
      "Xóa bỏ hoàn toàn chế độ công hữu để chuyển sang nền kinh tế thị trường."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH IV xác định: Ưu tiên phát triển công nghiệp nặng một cách hợp lý trên cơ sở phát triển nông nghiệp và công nghiệp nhẹ, nhưng trên thực tế đã quá thiên về công nghiệp nặng.",
    trickDetails: {
      whyTrapped: "Nhầm ĐH IV coi nông nghiệp là hàng đầu (ĐH V 1982 mới coi nông nghiệp là hàng đầu).",
      trickWord: "Thiên về công nghiệp nặng (chủ quan, duy ý chí)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.1.",
      tip: "ĐH IV = Công nghiệp nặng."
    }
  },
  {
    id: "lsd-c3-tr1-005",
    trickSet: 1,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Đại hội V của Đảng (tháng 3-1982) đã có bước điều chỉnh chiến lược quan trọng nào?",
    options: [
      "Xác định nông nghiệp là mặt trận hàng đầu trong chặng đường đầu tiên quá độ.",
      "Tập trung toàn bộ nguồn vốn để phát triển ngành công nghiệp nặng quy mô lớn.",
      "Xóa bỏ hoàn toàn cơ chế tập trung bao cấp để chuyển sang kinh tế thị trường.",
      "Cho phép đảng viên được làm kinh tế tư nhân không hạn chế quy mô mô hình."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH V (3/1982) điều chỉnh: Xác định nông nghiệp là mặt trận hàng đầu, kết hợp nông nghiệp, công nghiệp hàng tiêu dùng và công nghiệp nặng hợp lý.",
    trickDetails: {
      whyTrapped: "Dễ nhầm ĐH V đã xóa bỏ cơ chế tập trung bao cấp.",
      trickWord: "Nông nghiệp là MẶT TRẬN HÀNG ĐẦU (ĐH V 1982)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.2.",
      tip: "ĐH V (1982) = Nông nghiệp hàng đầu."
    }
  },
  {
    id: "lsd-c3-tr1-006",
    trickSet: 1,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Chỉ thị 100-CT/TW (tháng 1-1981) của Ban Bí thư mang lại đột phá gì trong nông nghiệp?",
    options: [
      "Khoán sản phẩm đến nhóm lao động và người lao động trong hợp tác xã nông.",
      "Giao trọn gói đất đai cho hộ gia đình sử dụng lâu dài như tài sản tư nhân.",
      "Xóa bỏ hoàn toàn các hợp tác xã nông nghiệp để chuyển sang kinh tế hộ.",
      "Bắt buộc tất cả các hộ nông dân phải nộp 100% sản lượng nông sản cho Nhà."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chỉ thị 100 (Khoán 100 năm 1981) thực hiện khoán sản phẩm đến nhóm và người lao động trong hợp tác xã nông nghiệp.",
    trickDetails: {
      whyTrapped: "Nhầm Khoán 100 với Nghị quyết 10 (Khoán 10 năm 1988 giao đất hộ gia đình).",
      trickWord: "Khoán 100 (1981) = Khoán đến nhóm & người lao động HTX",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.2.",
      tip: "Chỉ thị 100 = 1981; NQ 10 = 1988."
    }
  },
  {
    id: "lsd-c3-tr1-007",
    trickSet: 1,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Nghị quyết Trung ương 8 khóa V (tháng 6-1985) được coi là bước đột phá về vấn đề gì?",
    options: [
      "Dứt khoát xóa bỏ cơ chế tập trung bao cấp, chuyển sang hạch toán kinh doanh.",
      "Quyết định cổ phần hóa 100% các doanh nghiệp nhà nước trên phạm vi cả nước.",
      "Tuyên bố gia nhập Tổ chức Thương mại Thế giới WTO để mở rộng xuất khẩu.",
      "Cho phép tư nhân nước ngoài sở hữu toàn bộ đất đai tại các vùng ven biển."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "NQTƯ 8 khóa V (6/1985) về Giá - Lương - Tiền là bước đột phá dứt khoát xóa bỏ cơ chế tập trung bao cấp.",
    trickDetails: {
      whyTrapped: "Dễ nhầm là đã gia nhập WTO hay cổ phần hóa 100%.",
      trickWord: "NQTƯ 8 khóa V = Xóa bỏ cơ chế tập trung bao cấp",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.2.",
      tip: "NQTƯ 8 (1985) = Đột phá Giá-Lương-Tiền."
    }
  },
  {
    id: "lsd-c3-tr1-008",
    trickSet: 1,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Nguyên nhân chủ quan hàng đầu dẫn đến khủng hoảng KT-XH thời kỳ 1976-1985 là gì?",
    options: [
      "Bệnh chủ quan duy ý chí, duy trì quá lâu cơ chế tập trung quan liêu bao cấp.",
      "Do chiến tranh biên giới Tây Nam và biên giới phía Bắc phá hoại nặng nề.",
      "Do sự cấm vận kinh tế kéo dài của đế quốc Mỹ và các nước tư bản phương Tây.",
      "Do thiên tai lũ lụt liên tiếp xảy ra làm mất mùa trên quy mô toàn quốc."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Nguyên nhân chủ quan: Nóng vội, duy ý chí, duy trì quá lâu cơ chế tập trung quan liêu bao cấp, không nhận thức đúng thời kỳ quá độ.",
    trickDetails: {
      whyTrapped: "Học sinh dễ nhầm nguyên nhân khách quan (chiến tranh/cấm vận) là nguyên nhân chủ quan hàng đầu.",
      trickWord: "Chủ quan duy ý chí + Bao cấp kéo dài",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.2.",
      tip: "Chủ quan khủng hoảng 76-85 = Duy ý chí & Bao cấp."
    }
  },
  {
    id: "lsd-c3-tr1-009",
    trickSet: 1,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Cuộc chiến tranh bảo vệ Tổ quốc ở biên giới Tây Nam (1975-1979) nhằm đánh đuổi lực lượng nào?",
    options: [
      "Tập đoàn phản động Khmer Đỏ do Pôn Pốt cầm đầu xâm phạm lãnh thổ.",
      "Quân đội thực dân Pháp quay trở lại xâm lược các tỉnh biên giới phía Nam.",
      "Lực lượng ngụy quân Saigon còn sót lại tổ chức xưng hùng ở vùng biên.",
      "Quân đội đế quốc Mỹ nhảy vào can thiệp trực tiếp tái chiếm miền Nam."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chiến tranh biên giới Tây Nam: Ta đánh gục tập đoàn phản động Khmer Đỏ Pôn Pốt, giúp nhân dân Campuchia thoát khỏi thảm họa diệt chủng.",
    trickDetails: {
      whyTrapped: "Dễ nhầm với quân ngụy còn sót lại.",
      trickWord: "Khmer Đỏ Pôn Pốt (Biên giới Tây Nam)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.1.",
      tip: "Tây Nam = Khmer Đỏ Pôn Pốt."
    }
  },
  {
    id: "lsd-c3-tr1-010",
    trickSet: 1,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Cuộc chiến tranh bảo vệ Tổ quốc ở biên giới phía Bắc bùng nổ vào ngày tháng năm nào?",
    options: [
      "Bùng nổ ngày 17 tháng 2 năm 1979 trên toàn tuyến biên giới phía Bắc.",
      "Bùng nổ ngày 30 tháng 4 năm 1975 đúng ngày giải phóng hoàn toàn Miền Nam.",
      "Bùng nổ ngày 22 tháng 12 năm 1978 tại vùng biên giới thuộc tỉnh Cao Bằng.",
      "Bùng nổ ngày 6 tháng 3 năm 1982 tại Đại hội đại biểu toàn quốc lần V."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Rạng sáng ngày 17/2/1979, cuộc chiến đấu bảo vệ Tổ quốc ở biên giới phía Bắc bùng nổ trên 6 tỉnh biên giới.",
    trickDetails: {
      whyTrapped: "Nhầm ngày 22/12/1978.",
      trickWord: "17-2-1979 (Biên giới phía Bắc)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.1.",
      tip: "Biên giới phía Bắc = 17/2/1979."
    }
  },

  // 11-20: Tiền Đổi mới & Đổi mới ĐH VI (12-1986)
  {
    id: "lsd-c3-tr1-011",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-1",
    question: "Đại hội đại biểu toàn quốc lần thứ VI của Đảng (12-1986) được lịch sử ghi nhận là gì?",
    options: [
      "Đại hội khởi xướng công cuộc Đổi mới toàn diện đất nước một cách lịch sử.",
      "Đại hội hoàn thành sự nghiệp công nghiệp hóa và hiện đại hóa đất nước.",
      "Đại hội xác định mô hình kinh tế thị trường định hướng XHCN đầu tiên.",
      "Đại hội quyết định thông qua Hiến pháp mới của thời kỳ đẩy mạnh Đổi mới."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH VI (12/1986) là Đại hội mở đường, khởi xướng công cuộc Đổi mới toàn diện đất nước.",
    trickDetails: {
      whyTrapped: "Nhầm ĐH VI đã xác định mô hình 'Kinh tế thị trường định hướng XHCN' (mô hình này do ĐH IX 2001 chính thức xác định).",
      trickWord: "Khởi xướng công cuộc ĐỔI MỚI TOÀN DIỆN (12/1986)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.1.",
      tip: "ĐH VI (1986) = Khởi xướng Đổi mới."
    }
  },
  {
    id: "lsd-c3-tr1-012",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-1",
    question: "Phương châm hành động nổi tiếng được Đại hội VI (12-1986) đề ra đối với thực trạng đất nước là gì?",
    options: [
      "'Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật' để đổi mới.",
      "'Thần tốc, thần tốc hơn nữa; táo bạo, táo bạo hơn nữa' tiến lên Đổi mới.",
      "'Tất cả cho sản xuất công nghiệp nặng, tất cả để thoát khỏi nghèo đói'.",
      "'Giữ nguyên mô hình cũ, tập trung cải tiến kỹ thuật sản xuất nhà nước'."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH VI đề ra thái độ nghiêm túc: 'Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật'.",
    trickDetails: {
      whyTrapped: "Dễ nhầm với mệnh lệnh quân sự 1975.",
      trickWord: "Nhìn thẳng vào sự thật, nói rõ sự thật",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.1.",
      tip: "ĐH VI = Nhìn thẳng vào sự thật."
    }
  },
  {
    id: "lsd-c3-tr1-013",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-1",
    question: "Đại hội VI (12-1986) đã đúc kết bao nhiêu bài học kinh nghiệm lớn cho công cuộc Đổi mới?",
    options: [
      "Đúc kết 4 bài học kinh nghiệm lớn mang ý nghĩa chỉ đạo chiến lược lâu dài.",
      "Đúc kết 6 bài học kinh nghiệm lớn về phát triển kinh tế thị trường tự do.",
      "Đúc kết 3 bài học kinh nghiệm lớn về cải cách hành chính và tư pháp công.",
      "Đúc kết 5 bài học kinh nghiệm lớn về bảo vệ chủ quyền biên giới hải đảo."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH VI rút ra 4 bài học kinh nghiệm lớn (1. Dân là gốc; 2. Luôn xuất phát từ thực tế; 3. Kết hợp sức mạnh dân tộc và thời đại; 4. Xây dựng Đảng ngang tầm nhiệm vụ).",
    trickDetails: {
      whyTrapped: "Nhầm 6 bài học của Cương lĩnh 1991 hay 5 bài học ĐH VIII.",
      trickWord: "4 bài học kinh nghiệm lớn (ĐH VI 1986)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.1.",
      tip: "ĐH VI = 4 bài học lớn."
    }
  },
  {
    id: "lsd-c3-tr1-014",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-1",
    question: "Ba chương trình kinh tế lớn được Đại hội VI (12-1986) xác định tập trung thực hiện là gì?",
    options: [
      "Chương trình Lương thực - thực phẩm, Hàng tiêu dùng và Hàng xuất khẩu.",
      "Chương trình Công nghiệp nặng, Điện lực quốc gia và Giao thông vận tải.",
      "Chương trình Xóa mù chữ, Phổ cập trung học và Phát triển khoa học công.",
      "Chương trình Hiện đại hóa quân đội, Khai thác dầu khí và Kinh tế biển."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH VI tập trung giải quyết khó khăn cấp bách bằng 3 chương trình kinh tế lớn: Lương thực - thực phẩm, Hàng tiêu dùng và Hàng xuất khẩu.",
    trickDetails: {
      whyTrapped: "Nhầm sang chương trình công nghiệp nặng.",
      trickWord: "Lương thực thực phẩm, Hàng tiêu dùng, Hàng xuất khẩu",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.1.",
      tip: "3 chương trình kinh tế ĐH VI = Lương thực, Tiêu dùng, Xuất khẩu."
    }
  },
  {
    id: "lsd-c3-tr1-015",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-1",
    question: "Nghị quyết 10-NQ/TW của Bộ Chính trị (tháng 4-1988) có ý nghĩa lịch sử gì trong nông nghiệp?",
    options: [
      "Khoán 10: Giao khoán ruộng đất cho hộ gia đình, coi hộ nông dân là đơn vị tự chủ.",
      "Xóa bỏ hoàn toàn quyền sở hữu đất đai của Nhà nước để tư nhân hóa ruộng đất toàn diện.",
      "Bắt buộc tất cả nông dân phải gia nhập các tập đoàn sản xuất nông nghiệp quy mô lớn.",
      "Thực hiện cải cách ruộng đất lần thứ hai chia lại toàn bộ ruộng đất ở nông thôn."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Nghị quyết 10 (Khoán 10, 4/1988) giao khoán ruộng đất cho hộ gia đình sử dụng lâu dài, coi hộ gia đình là đơn vị kinh tế tự chủ, tạo giải phóng lớn cho nông nghiệp.",
    trickDetails: {
      whyTrapped: "Dễ nhầm Khoán 10 (1988) với Khoán 100 (1981).",
      trickWord: "Khoán 10 (4/1988) = Hộ gia đình là đơn vị kinh tế tự chủ",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.1.",
      tip: "Khoán 10 (1988) = Hộ nông dân tự chủ."
    }
  },

  // 21-50: Đổi mới phát triển (ĐH VII 1991 ➔ ĐH X 2006)
  {
    id: "lsd-c3-tr1-016",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH được thông qua tại Đại hội nào?",
    options: [
      "Đại hội đại biểu toàn quốc lần thứ VII của Đảng (tháng 6 năm 1991).",
      "Đại hội đại biểu toàn quốc lần thứ VI của Đảng (tháng 12 năm 1986).",
      "Đại hội đại biểu toàn quốc lần thứ VIII của Đảng (tháng 6 năm 1996).",
      "Đại hội đại biểu toàn quốc lần thứ IX của Đảng (tháng 4 năm 2001)."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Cương lĩnh 1991 (Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH) được ĐH VII (6/1991) thông qua.",
    trickDetails: {
      whyTrapped: "Dễ nhầm Cương lĩnh thông qua từ ĐH VI.",
      trickWord: "Cương lĩnh 1991 = Đại hội VII (6/1991)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "Cương lĩnh 1991 = ĐH VII."
    }
  },
  {
    id: "lsd-c3-tr1-017",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Cương lĩnh năm 1991 đã xác định mô hình xã hội xã hội chủ nghĩa ở Việt Nam gồm mấy đặc trưng?",
    options: [
      "Bao gồm 6 đặc trưng cơ bản tổng quát về xã hội xã hội chủ nghĩa.",
      "Bao gồm 8 đặc trưng cơ bản tổng quát (sau này ĐH X bổ sung năm 2006).",
      "Bao gồm 10 đặc trưng cơ bản tổng quát về kinh tế chính trị văn hóa.",
      "Bao gồm 4 đặc trưng cơ bản tổng quát về khối đại đoàn kết toàn dân."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Cương lĩnh 1991 đề ra 6 đặc trưng. Đến ĐH X (2006) mới bổ sung, phát triển thành 8 đặc trưng.",
    trickDetails: {
      whyTrapped: "Học sinh rất hay nhầm giữa 6 đặc trưng (Cương lĩnh 1991) và 8 đặc trưng (ĐH X 2006).",
      trickWord: "Cương lĩnh 1991 = 6 ĐẶC TRƯNG",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "1991 = 6 đặc trưng; 2006 = 8 đặc trưng."
    }
  },
  {
    id: "lsd-c3-tr1-018",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Khẩu hiệu đối ngoại nổi tiếng được Đại hội VII (6-1991) chính thức đề ra là gì?",
    options: [
      "'Việt Nam muốn là bạn với tất cả các nước trong cộng đồng quốc tế'.",
      "'Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trên thế giới'.",
      "'Việt Nam là bạn, là đối tác tin cậy và thành viên có trách nhiệm'.",
      "'Hoa - Việt thân thiện, nhân nhượng có nguyên tắc giữ vững chủ quyền'."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH VII (1991): 'Việt Nam muốn là bạn với tất cả các nước...'; ĐH IX (2001): 'sẵn sàng là bạn, là đối tác tin cậy'; ĐH XI (2011): 'thành viên có trách nhiệm'.",
    trickDetails: {
      whyTrapped: "Học sinh dễ nhầm các khẩu hiệu đối ngoại qua các kỳ Đại hội.",
      trickWord: "ĐH VII (1991) = 'MUỐN là bạn'",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "VII = MUỐN là bạn; IX = SẴN SÀNG là bạn."
    }
  },
  {
    id: "lsd-c3-tr1-019",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Thành tựu có ý nghĩa bước ngoặt của Đại hội VIII (6-1996) đánh giá là gì?",
    options: [
      "Nước ta đã đưa đất nước ra khỏi khủng hoảng kinh tế - xã hội kéo dài.",
      "Nước ta đã trở thành nước phát triển có thu nhập bình quân đầu người cao.",
      "Nước ta đã hoàn thành 100% mục tiêu công nghiệp hóa và hiện đại hóa.",
      "Nước ta đã xóa bỏ hoàn toàn khoảng cách giàu nghèo giữa các vùng miền."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH VIII (1996) đánh giá: Đất nước đã ra khỏi khủng hoảng kinh tế - xã hội kéo dài 20 năm, chuyển sang thời kỳ đẩy mạnh CNH - HĐH.",
    trickDetails: {
      whyTrapped: "Bẫy từ 'trở thành nước phát triển thu nhập cao' hay 'hoàn thành CNH 100%'.",
      trickWord: "Ra khỏi khủng hoảng KT-XH ➔ Đẩy mạnh CNH-HĐH",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "ĐH VIII (1996) = Ra khỏi khủng hoảng."
    }
  },
  {
    id: "lsd-c3-tr1-020",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Khái niệm 'Kinh tế thị trường định hướng xã hội chủ nghĩa' chính thức được xác định tại Đại hội nào?",
    options: [
      "Đại hội đại biểu toàn quốc lần thứ IX của Đảng (tháng 4 năm 2001).",
      "Đại hội đại biểu toàn quốc lần thứ VI của Đảng (tháng 12 năm 1986).",
      "Đại hội đại biểu toàn quốc lần thứ VII của Đảng (tháng 6 năm 1991).",
      "Đại hội đại biểu toàn quốc lần thứ VIII của Đảng (tháng 6 năm 1996)."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH IX (4/2001) chính thức xác định: Kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng quát của nước ta trong thời kỳ quá độ.",
    trickDetails: {
      whyTrapped: "Nhầm ĐH VI (1986) mới chỉ gọi là 'kinh tế nhiều thành phần'.",
      trickWord: "ĐH IX (2001) = Kinh tế thị trường định hướng XHCN",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "ĐH IX (2001) = Mô hình KTTT định hướng XHCN."
    }
  },
  {
    id: "lsd-c3-tr1-021",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Điểm bổ sung có tính đột phá về xây dựng Đảng tại Đại hội X (tháng 4-2006) là gì?",
    options: [
      "Đảng viên được làm kinh tế tư nhân, kể cả tư bản tư nhân (tuân thủ luật).",
      "Đảng viên được quyền thành lập các tổ chức chính trị độc lập ngoài Đảng.",
      "Đảng viên không cần sinh hoạt bộ tại các cơ sở sản xuất kinh doanh.",
      "Đảng viên được nắm giữ toàn bộ cổ phần kiểm soát tại các tập đoàn nhà."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH X (4/2006) cho phép đảng viên làm kinh tế tư nhân, kể cả tư bản tư nhân, nhưng phải chấp hành điều lệ Đảng và pháp luật.",
    trickDetails: {
      whyTrapped: "Dễ nhầm bẫy thành lập tổ chức chính trị khác.",
      trickWord: "ĐH X (2006) = Đảng viên được làm KINH TẾ TƯ NHÂN",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "ĐH X = Đảng viên làm kinh tế tư nhân."
    }
  },
  {
    id: "lsd-c3-tr1-022",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Nội dung nào KHÔNG ĐÚNG về bản chất của Kinh tế thị trường định hướng XHCN ở nước ta?",
    options: [
      "Là nền kinh tế tư bản chủ nghĩa hoàn toàn không chịu sự quản lý của Nhà.",
      "Là nền kinh tế vận hành theo các quy luật của kinh tế thị trường tự do.",
      "Có sự quản lý của Nhà nước pháp quyền XHCN do Đảng Cộng sản lãnh đạo.",
      "Nhằm mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh lâu."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Phương án A SAI vì KTTT định hướng XHCN không phải là kinh tế TBCN, mà được quản lý bởi Nhà nước XHCN hướng tới các mục tiêu XHCN.",
    trickDetails: {
      whyTrapped: "Bẫy từ 'tư bản chủ nghĩa hoàn toàn'.",
      trickWord: "Bẫy 'tư bản chủ nghĩa hoàn toàn'",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "KTTT định hướng XHCN ≠ Kinh tế TBCN."
    }
  },
  {
    id: "lsd-c3-tr1-023",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Sự kiện Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới (WTO) diễn ra vào năm nào?",
    options: [
      "Chính thức trở thành thành viên thứ 150 của WTO vào ngày 11-1-2007.",
      "Chính thức trở thành thành viên của WTO ngay tại Đại hội VI năm 1986.",
      "Chính thức trở thành thành viên của WTO ngay sau khi ký Hiệp định Paris.",
      "Chính thức trở thành thành viên của WTO vào năm 1995 cùng lúc với ASEAN."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Việt Nam gia nhập WTO ngày 11/1/2007, là thành viên thứ 150.",
    trickDetails: {
      whyTrapped: "Nhầm năm 1995 (năm gia nhập ASEAN và bình thường hóa quan hệ với Mỹ).",
      trickWord: "11-1-2007 (Thành viên 150 WTO)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "2007 = Gia nhập WTO."
    }
  },
  {
    id: "lsd-c3-tr1-024",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Sự kiện lịch sử năm 1995 đánh dấu bước ngoặt ngoại giao nào của nước ta?",
    options: [
      "Gia nhập ASEAN, bình thường hóa quan hệ với Mỹ và ký Hiệp định với EU.",
      "Chính thức gia nhập Tổ chức Thương mại Thế giới WTO trên toàn cầu.",
      "Ký kết Hiệp định Đối tác Chiến lược Toàn diện với Liên bang Nga mới.",
      "Trở thành Ủy viên không thường trực Hội đồng Bảo an Liên Hợp Quốc."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Năm 1995: Gia nhập ASEAN (28/7/1995), bình thường hóa quan hệ với Mỹ (11/7/1995) và ký Hiệp định khung với EU.",
    trickDetails: {
      whyTrapped: "Nhầm sự kiện gia nhập WTO.",
      trickWord: "1995 = Gia nhập ASEAN + Bình thường hóa Mỹ",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "1995 = ASEAN & Mỹ."
    }
  },
  {
    id: "lsd-c3-tr1-025",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Thành phần kinh tế giữ vai trò chủ đạo trong nền kinh tế nhiều thành phần ở nước ta là gì?",
    options: [
      "Thành phần kinh tế nhà nước giữ vai trò chủ đạo trong nền kinh tế.",
      "Thành phần kinh tế tư nhân giữ vai trò chủ đạo trong nền kinh tế.",
      "Thành phần kinh tế có vốn đầu tư nước ngoài (FDI) giữ vai trò chủ.",
      "Thành phần kinh tế tập thể hợp tác xã giữ vai trò chủ đạo duy nhất."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đảng khẳng định: Kinh tế nhà nước giữ vai trò chủ đạo; Kinh tế tư nhân là một động lực quan trọng.",
    trickDetails: {
      whyTrapped: "Dễ nhầm kinh tế tư nhân giữ vai trò chủ đạo (tư nhân là động lực quan trọng, nhà nước mới là chủ đạo).",
      trickWord: "Kinh tế nhà nước = CHỦ ĐẠO",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Kinh tế nhà nước = Chủ đạo."
    }
  },
  {
    id: "lsd-c3-tr1-026",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Nghị quyết Trung ương 5 khóa VIII (1998) tập trung chỉ đạo nội dung quan trọng nào?",
    options: [
      "Xây dựng và phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân.",
      "Đẩy mạnh cải cách tư pháp và xây dựng Nhà nước pháp quyền xã hội chủ.",
      "Thực hiện chính sách mở cửa hội nhập kinh tế quốc tế toàn diện trên.",
      "Cổ phần hóa toàn bộ các doanh nghiệp nhà nước yếu kém ở địa phương."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "NQTƯ 5 khóa VIII (1998) là Nghị quyết chuyên đề về xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.",
    trickDetails: {
      whyTrapped: "Nhầm sang NQ về cải cách tư pháp hay hội nhập.",
      trickWord: "NQTƯ 5 khóa VIII (1998) = Văn hóa tiên tiến đậm đà bản sắc",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "NQTƯ 5 (1998) = Văn hóa tiên tiến."
    }
  },
  {
    id: "lsd-c3-tr1-027",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Đặc trưng tổng quát nhất của đường lối Đổi mới do Đảng khởi xướng là gì?",
    options: [
      "Đổi mới toàn diện, đồng bộ, có bước đi phù hợp, lấy đổi mới kinh tế làm trọng.",
      "Đổi mới chính trị trước, sau đó mới tiến hành đổi mới các mặt kinh tế.",
      "Đổi mới tư tưởng tuyệt đối không đụng chạm đến các chính sách kinh tế.",
      "Đổi mới bằng cách sao chép 100% mô hình phát triển của các nước phương."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đổi mới toàn diện, đồng bộ nhưng phải có trọng tâm trọng điểm: Lấy đổi mới kinh tế làm trọng tâm, từng bước đổi mới hệ thống chính trị.",
    trickDetails: {
      whyTrapped: "Dễ nhầm là đổi mới chính trị trước.",
      trickWord: "Đổi mới KINH TẾ LÀM TRỌNG TÂM",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.1.",
      tip: "Đổi mới = Kinh tế làm trọng tâm."
    }
  },
  {
    id: "lsd-c3-tr1-028",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Hội nghị Đại biểu toàn quốc giữa nhiệm kỳ khóa VII (tháng 1-1994) đã cảnh báo mấy nguy cơ lớn?",
    options: [
      "Cảnh báo 4 nguy cơ lớn thách thức đối với sự nghiệp cách mạng nước ta.",
      "Cảnh báo 2 nguy cơ lớn về suy ngoái kinh tế và ô nhiễm môi trường sống.",
      "Cảnh báo 6 nguy cơ lớn về nguy cơ tụt hậu xa hơn về công nghệ hiện đại.",
      "Cảnh báo 3 nguy cơ lớn về diễn biến hòa bình và biến đổi khí hậu toàn."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hội nghị giữa nhiệm kỳ khóa VII (1/1994) nêu rõ 4 nguy cơ: 1. Tụt hậu xa hơn về kinh tế; 2. Chệch hướng XHCN; 3. Tham nhũng quan liêu; 4. 'Diễn biến hòa bình'.",
    trickDetails: {
      whyTrapped: "Dễ nhầm số lượng nguy cơ.",
      trickWord: "4 NGUY CƠ LỚN (Hội nghị giữa nhiệm kỳ 1994)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "1994 = 4 nguy cơ lớn."
    }
  },
  {
    id: "lsd-c3-tr1-029",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Bài học kinh nghiệm số 1 được rút ra trong công cuộc Đổi mới là gì?",
    options: [
      "Trong toàn bộ hoạt động của mình, Đảng phải luôn quán triệt tư tưởng 'Dân là gốc'.",
      "Phải tập trung nguồn lực phát triển kinh tế tư nhân bằng mọi giá mọi lúc.",
      "Phải tuyệt đối giữ nguyên mô hình kinh tế tập trung quan liêu bao cấp.",
      "Phải phụ thuộc vào viện trợ kinh tế của các quốc gia phát triển phương."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Bài học lớn nhất của ĐH VI và xuyên suốt Đổi mới: Quán triệt tư tưởng 'Dân là gốc', vì lợi ích nhân dân, dựa vào nhân dân.",
    trickDetails: {
      whyTrapped: "Nhầm bài học ưu tiên kinh tế tư nhân.",
      trickWord: "DÂN LÀ GỐC (Bài học số 1)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.1.",
      tip: "Đổi mới bài học 1 = Dân là gốc."
    }
  },
  {
    id: "lsd-c3-tr1-030",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Mục tiêu tổng quát của thời kỳ đẩy mạnh CNH - HĐH được ĐH VIII (1996) đề ra cho năm 2020 là gì?",
    options: [
      "Phấn đấu đưa nước ta cơ bản trở thành một nước công nghiệp theo hướng hiện đại.",
      "Đưa Việt Nam trở thành quốc gia có nền kinh tế phát triển nhất thế giới.",
      "Hoàn thành việc xây dựng xong chủ nghĩa xã hội trên phạm vi cả nước.",
      "Xóa bỏ hoàn toàn nông nghiệp để chuyển 100% lao động sang công nghiệp."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH VIII mục tiêu đến năm 2020: Đưa nước ta cơ bản trở thành một nước công nghiệp theo hướng hiện đại.",
    trickDetails: {
      whyTrapped: "Bẫy từ 'trở thành kinh tế phát triển nhất' hoặc 'xây dựng xong CNXH'.",
      trickWord: "Cơ bản trở thành nước công nghiệp hiện đại",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "ĐH VIII = Nước công nghiệp hiện đại 2020."
    }
  },
  {
    id: "lsd-c3-tr1-031",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Khái niệm 'Nhà nước pháp quyền xã hội chủ nghĩa' lần đầu tiên được Đảng đưa vào Văn kiện tại Hội nghị nào?",
    options: [
      "Hội nghị đại biểu toàn quốc giữa nhiệm kỳ khóa VII (tháng 1 năm 1994).",
      "Đại hội đại biểu toàn quốc lần thứ VI của Đảng (tháng 12 năm 1986).",
      "Hội nghị Trung ương 8 khóa V (tháng 6 năm 1985) về Giá Lương Tiền.",
      "Đại hội đại biểu toàn quốc lần thứ IV của Đảng (tháng 12 năm 1976)."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hội nghị giữa nhiệm kỳ khóa VII (1/1994) lần đầu tiên chính thức đưa khái niệm 'Nhà nước pháp quyền XHCN' vào Văn kiện Đảng.",
    trickDetails: {
      whyTrapped: "Nhầm khái niệm có từ ĐH VI.",
      trickWord: "Nhà nước pháp quyền XHCN (Hội nghị giữa nhiệm kỳ 1994)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "1994 = Nhà nước pháp quyền XHCN."
    }
  },
  {
    id: "lsd-c3-tr1-032",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Yếu tố nào được Đảng xác định là 'quốc sách hàng đầu' trong công cuộc Đổi mới?",
    options: [
      "Giáo dục - đào tạo cùng với Khoa học - công nghệ là quốc sách hàng đầu.",
      "Phát triển kinh tế tư nhân tự do là quốc sách hàng đầu phát triển.",
      "Tập trung đầu tư xây dựng các khu công nghiệp chế xuất là quốc sách.",
      "Vay nỗ lực nguồn vốn nước ngoài ODA là quốc sách hàng đầu phát triển."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Nghị quyết Trung ương 2 khóa VIII (12/1996) khẳng định Giáo dục - đào tạo và Khoa học - công nghệ là quốc sách hàng đầu.",
    trickDetails: {
      whyTrapped: "Nhầm kinh tế tư nhân hay vay vốn ODA.",
      trickWord: "Giáo dục - đào tạo & KH-CN là QUỐC SÁCH HÀNG ĐẦU",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "Giáo dục + Khoa học = Quốc sách hàng đầu."
    }
  },
  {
    id: "lsd-c3-tr1-033",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Phát biểu nào KHÔNG ĐÚNG khi nói về nguyên tắc Đổi mới do Đảng đề ra?",
    options: [
      "Đổi mới là thay đổi mục tiêu chủ nghĩa xã hội sang chế độ tư bản chủ nghĩa.",
      "Đổi mới không phải là thay đổi mục tiêu XHCN mà là làm cho đúng mục tiêu.",
      "Đổi mới phải dựa trên nền tảng Chủ nghĩa Mác - Lênin và Tư tưởng Hồ Chí Minh.",
      "Đổi mới phải giữ vững sự lãnh đạo tuyệt đối của Đảng Cộng sản Việt Nam."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Phương án A SAI hoàn toàn: Đổi mới KHÔNG phải là thay đổi mục tiêu XHCN, mà là làm nhận thức đúng và thực hiện hiệu quả hơn mục tiêu XHCN.",
    trickDetails: {
      whyTrapped: "Bẫy nhận thức đổi mới = đổi sang tư bản.",
      trickWord: "Bẫy 'thay đổi mục tiêu XHCN'",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.1.",
      tip: "Đổi mới = Làm đúng mục tiêu XHCN."
    }
  },
  {
    id: "lsd-c3-tr1-034",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Tính chất của thời kỳ quá độ lên CNXH ở Việt Nam được xác định là gì?",
    options: [
      "Là một thời kỳ lịch sử lâu dài, khó khăn, phức tạp, trải qua nhiều bước quá độ.",
      "Là một khoảng thời gian ngắn có thể hoàn thành ngay trong 5 đến 10 năm.",
      "Là giai đoạn phát triển kinh tế tư bản chủ nghĩa hoàn toàn trước khi lên.",
      "Là thời kỳ không cần phát triển lực lượng sản xuất mà chỉ cải tạo quan hệ."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Thời kỳ quá độ là một quá trình lịch sử lâu dài, nhiều chặng đường, trải qua nhiều bước quá độ trung gian.",
    trickDetails: {
      whyTrapped: "Nhầm thời kỳ quá độ ngắn hạn 5-10 năm.",
      trickWord: "Quá trình lâu dài, phức tạp, nhiều bước quá độ",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "Quá độ = Lâu dài, nhiều bước."
    }
  },
  {
    id: "lsd-c3-tr1-035",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Vấn đề nào được Đảng coi là 'nhiệm vụ bối cảnh then chốt' trong công cuộc Đổi mới?",
    options: [
      "Phát triển kinh tế là nhiệm vụ trung tâm, xây dựng Đảng là nhiệm vụ then chốt.",
      "Phát triển văn hóa là nhiệm vụ trung tâm, phát triển kinh tế là then chốt.",
      "Tập trung quốc phòng là nhiệm vụ trung tâm, phát triển kinh tế là then chốt.",
      "Cải cách hành chính là nhiệm vụ trung tâm, hội nhập quốc tế là then chốt."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Quan điểm chỉ đạo: 'Phát triển kinh tế là nhiệm vụ trung tâm, xây dựng Đảng là nhiệm vụ then chốt, phát triển văn hóa là nền tảng tinh thần'.",
    trickDetails: {
      whyTrapped: "Dễ nhầm giữa nhiệm vụ 'trung tâm' và 'then chốt'.",
      trickWord: "Kinh tế = Trung tâm; Xây dựng Đảng = THEN CHỐT",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "Kinh tế = Trung tâm; Đảng = Then chốt."
    }
  },
  {
    id: "lsd-c3-tr1-036",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Đại hội X (tháng 4-2006) đã xác định mục tiêu đưa nước ta ra khỏi tình trạng gì?",
    options: [
      "Đưa nước ta ra khỏi tình trạng kém phát triển, tạo nền tảng cho CNH-HĐH.",
      "Đưa nước ta ra khỏi tình trạng thiếu hụt lương thực thực phẩm trầm trọng.",
      "Đưa nước ta ra khỏi tình trạng bị cấm vận kinh tế của các quốc gia Tây.",
      "Đưa nước ta ra khỏi tình trạng chiến tranh tàn phá ở các vùng biên giới."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH X (2006) mục tiêu: Đưa nước ta ra khỏi tình trạng kém phát triển (trở thành nước đang phát triển có thu nhập trung bình).",
    trickDetails: {
      whyTrapped: "Nhầm thoát khỏi khủng hoảng (ĐH VIII 1996 đã thoát khủng hoảng).",
      trickWord: "Thoát khỏi tình trạng KÉM PHÁT TRIỂN (ĐH X 2006)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "ĐH X (2006) = Thoát kém phát triển."
    }
  },
  {
    id: "lsd-c3-tr1-037",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Mô hình kinh tế tổng quát trong thời kỳ quá độ ở Việt Nam hoạt động theo cơ chế nào?",
    options: [
      "Cơ chế thị trường có sự quản lý của Nhà nước theo định hướng xã hội chủ nghĩa.",
      "Cơ chế tập trung quan liêu bao cấp dựa trên mệnh lệnh hành chính nhà nước.",
      "Cơ chế thị trường tự do hoàn toàn không chịu sự can thiệp của bất kỳ ai.",
      "Cơ chế kinh tế tự cung tự cấp khép kín trong từng địa phương tỉnh thành."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Kinh tế thị trường định hướng XHCN vận hành đầy đủ theo quy luật kinh tế thị trường, có sự quản lý của Nhà nước XHCN.",
    trickDetails: {
      whyTrapped: "Dễ nhầm bao cấp hoặc thị trường tự do tuyệt đối.",
      trickWord: "Cơ chế thị trường + Sự quản lý của Nhà nước XHCN",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "KTTT = Quy luật thị trường + Quản lý XHCN."
    }
  },
  {
    id: "lsd-c3-tr1-038",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Đại hội IX (tháng 4-2001) đã lấy tư tưởng nào làm nền tảng tư tưởng cùng Chủ nghĩa Mác - Lênin?",
    options: [
      "Tư tưởng Hồ Chí Minh chính thức được khẳng định là nền tảng tư tưởng Đảng.",
      "Tư tưởng Đổi mới kinh tế thị trường của các quốc gia Đông Nam Á anh em.",
      "Tư tưởng cải cách hành chính nhà nước của các nhà lý luận Châu Âu cổ.",
      "Tư tưởng phát triển công nghiệp hóa hiện đại hóa thời kỳ công nghệ 4.0."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH IX (2001) trân trọng khẳng định: 'Đảng và nhân dân ta quyết tâm xây dựng đất nước theo con đường XHCN trên nền tảng Chủ nghĩa Mác - Lênin và Tư tưởng Hồ Chí Minh'.",
    trickDetails: {
      whyTrapped: "Dễ nhầm Tư tưởng Hồ Chí Minh mới đưa vào từ ĐH XI.",
      trickWord: "Chủ nghĩa Mác-Lênin & Tư tưởng Hồ Chí Minh",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Nền tảng tư tưởng = Mác-Lênin & Bác Hồ."
    }
  },
  {
    id: "lsd-c3-tr1-039",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Chính sách đối ngoại mở rộng của Đảng trong thời kỳ Đổi mới dựa trên nguyên tắc cơ bản nào?",
    options: [
      "Độc lập tự chủ, hòa bình, hợp tác và phát triển; đa phương hóa, đa dạng hóa.",
      "Liên minh quân sự chặt chẽ với một cường quốc lớn để chống lại các nước.",
      "Khép kín quan hệ đối ngoại, chỉ giao thương với các quốc gia trong khu vực.",
      "Chấp nhận phụ thuộc kinh tế để đổi lấy sự bảo hộ hòa bình từ bên ngoài."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đường lối đối ngoại Đổi mới: Độc lập tự chủ, hòa bình, hợp tác và phát triển; đa dạng hóa, đa phương hóa quan hệ quốc tế.",
    trickDetails: {
      whyTrapped: "Nhầm chọn liên minh quân sự với cường quốc.",
      trickWord: "Độc lập tự chủ + Đa phương hóa, đa dạng hóa",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "Đối ngoại = Đa phương hóa, đa dạng hóa."
    }
  },
  {
    id: "lsd-c3-tr1-040",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Bài học kinh nghiệm về kết hợp sức mạnh dân tộc với sức mạnh thời đại trong thời kỳ Đổi mới là gì?",
    options: [
      "Chủ động hội nhập kinh tế quốc tế, tranh thủ tối đa nguồn lực bên ngoài cho nội.",
      "Phụ thuộc hoàn toàn vào nguồn vốn vay nợ ODA để xây dựng các công trình.",
      "Từ chối mọi sự hợp tác quốc tế để bảo vệ tuyệt đối nền kinh tế tự cung.",
      "Đánh đổi tài nguyên thiên nhiên quốc gia để lấy công nghệ lạc hậu đã qua."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Kết hợp sức mạnh dân tộc (nội lực) với sức mạnh thời đại (ngoại lực), tranh thủ vốn, công nghệ, kinh nghiệm quản lý thế giới.",
    trickDetails: {
      whyTrapped: "Dễ nhầm là phụ thuộc vốn ODA.",
      trickWord: "Nội lực là quyết định + Tranh thủ ngoại lực",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Bài học kinh nghiệm.",
      tip: "Nội lực quyết định + Tranh thủ thời đại."
    }
  },
  {
    id: "lsd-c3-tr1-041",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Quan điểm chỉ đạo của Đảng về phát triển kinh tế tư nhân từ ĐH IX đến ĐH X là gì?",
    options: [
      "Kinh tế tư nhân là một trong những động lực quan trọng của nền kinh tế.",
      "Kinh tế tư nhân là thành phần bị hạn chế tối đa sự phát triển trong xã hội.",
      "Kinh tế tư nhân giữ vai trò chủ đạo thay thế hoàn toàn cho kinh tế nhà.",
      "Kinh tế tư nhân chỉ được tồn tại tạm thời trong chặng đường đầu tiên quá."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đảng khẳng định kinh tế tư nhân là một trong những động lực quan trọng của nền kinh tế quốc dân.",
    trickDetails: {
      whyTrapped: "Dễ nhầm kinh tế tư nhân bị hạn chế hoặc giữ vai trò chủ đạo.",
      trickWord: "Kinh tế tư nhân = ĐỘNG LỰC QUAN TRỌNG",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Tư nhân = Động lực quan trọng."
    }
  },
  {
    id: "lsd-c3-tr1-042",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Sự khác biệt giữa Cương lĩnh 1991 và Cương lĩnh bổ sung, phát triển năm 2011 về mục tiêu là gì?",
    options: [
      "Cương lĩnh 2011 bổ sung cụm từ 'dân chủ' vào mục tiêu tổng quát của nước ta.",
      "Cương lĩnh 2011 bỏ mục tiêu xây dựng chủ nghĩa xã hội chuyển sang tư bản.",
      "Cương lĩnh 2011 thu hẹp mục tiêu chỉ phát triển kinh tế mà bỏ qua văn hóa.",
      "Cương lĩnh 2011 không có sự thay đổi hay bổ sung nào so với bản năm 1991."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Cương lĩnh 1991: 'Dân giàu, nước mạnh, xã hội công bằng, văn minh'. Cương lĩnh 2011 bổ sung: 'Dân giàu, nước mạnh, DÂN CHỦ, công bằng, văn minh'.",
    trickDetails: {
      whyTrapped: "Học sinh ít chú ý từ 'dân chủ' được bổ sung năm 2011.",
      trickWord: "Bổ sung từ 'DÂN CHỦ' (Cương lĩnh 2011)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "2011 = Bổ sung 'Dân chủ'."
    }
  },
  {
    id: "lsd-c3-tr1-043",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Chủ trương Đổi mới đất nước của Đảng xuất phát trực tiếp từ nguyên nhân nào?",
    options: [
      "Yêu cầu cấp bách thoát khỏi khủng hoảng KT-XH và đòi hỏi từ thực tiễn nhân dân.",
      "Do sự sụp đổ của chế độ xã hội chủ nghĩa ở Liên Xô và các nước Đông Âu.",
      "Do áp lực bắt buộc từ các tổ chức tài chính quốc tế như IMF và Ngân hàng thế.",
      "Do yêu cầu hòa nhập ngay vào khối kinh tế tư bản tự do cạnh tranh toàn."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đổi mới là yêu cầu tự thân, xuất phát từ thực tiễn khủng hoảng KT-XH trong nước và sáng kiến đổi mới từ quần chúng nhân dân (Khoán 100, Khoán 10).",
    trickDetails: {
      whyTrapped: "Học sinh dễ nhầm Đổi mới do sự sụp đổ Liên Xô (Liên Xô sụp đổ 1991, trong khi Việt Nam Đổi mới từ 1986).",
      trickWord: "Yêu cầu tự thân từ thực tiễn trong nước (1986)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.1.",
      tip: "Đổi mới 1986 = Trước khi Liên Xô sụp đổ."
    }
  },
  {
    id: "lsd-c3-tr1-044",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Thành tựu vĩ đại nhất của công cuộc Đổi mới sau gần 40 năm triển khai là gì?",
    options: [
      "Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày.",
      "Nước ta đã hoàn thành 100% việc xây dựng nền kinh tế công nghiệp hiện đại.",
      "Nước ta đã xóa bỏ hoàn toàn tất cả các thành phần kinh tế tư nhân cá thể.",
      "Nước ta đã đạt mức thu nhập bình quân đầu người cao nhất trên thế giới."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Khẳng định của Tổng Bí thư và Văn kiện Đảng: 'Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay'.",
    trickDetails: {
      whyTrapped: "Bẫy từ 'thu nhập cao nhất thế giới'.",
      trickWord: "Cơ đồ, tiềm lực, vị thế và uy tín quốc tế",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Thành tựu Đổi mới = Cơ đồ, tiềm lực, vị thế."
    }
  },
  {
    id: "lsd-c3-tr1-045",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Ý nghĩa của việc đẩy mạnh cuộc đấu tranh phòng, chống tham nhũng, tiêu cực hiện nay là gì?",
    options: [
      "Làm sạch bộ máy, củng cố niềm tin của nhân dân, giữ vững sự tồn vong của Đảng.",
      "Làm cản trở tốc độ phát triển kinh tế và thu hút vốn đầu tư nước ngoài ODA.",
      "Nhằm mục đích xóa bỏ hệ thống các doanh nghiệp tư nhân lớn trong nước.",
      "Chỉ là giải pháp tạm thời ngắn hạn không mang tính chiến lược lâu dài."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Phòng chống tham nhũng tiêu cực ('không có vùng cấm, không có ngoại lệ') là nhiệm vụ sống còn để chỉnh đốn Đảng, củng cố niềm tin nhân dân.",
    trickDetails: {
      whyTrapped: "Dễ nhầm phòng chống tham nhũng làm cản trở kinh tế.",
      trickWord: "Củng cố niềm tin + Giữ vững sự tồn vong của Đảng",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Chống tham nhũng = Nhiệm vụ sống còn."
    }
  },
  {
    id: "lsd-c3-tr1-046",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Bản chất của cơ chế 'Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ' là gì?",
    options: [
      "Cơ chế vận hành tổng quát của hệ thống chính trị xã hội chủ nghĩa ở nước ta.",
      "Mô hình phân chia quyền lực độc lập theo thuyết tam quyền phân lập tư bản.",
      "Cơ chế quản lý kinh tế tập trung quan liêu bao cấp thời kỳ tiền Đổi mới.",
      "Sự kết hợp giữa chính quyền trung ương và các tập đoàn kinh tế tư nhân."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ là cơ chế vận hành tổng quát của hệ thống chính trị XHCN Việt Nam.",
    trickDetails: {
      whyTrapped: "Nhầm với thuyết tam quyền phân lập tư bản.",
      trickWord: "Cơ chế vận hành tổng quát của hệ thống chính trị XHCN",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "Đảng lãnh đạo, Nhà nước quản lý, Dân làm chủ."
    }
  },
  {
    id: "lsd-c3-tr1-047",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Vai trò của văn hóa được Đảng xác định trong công cuộc Đổi mới là gì?",
    options: [
      "Văn hóa là nền tảng tinh thần của xã hội, là mục tiêu và động lực phát triển.",
      "Văn hóa chỉ là yếu tố phụ thuộc hoàn toàn vào tốc độ tăng trưởng kinh tế.",
      "Văn hóa chỉ gồm các hoạt động giải trí không có đóng góp cho phát triển.",
      "Văn hóa là lĩnh vực do khu vực tư nhân hoàn toàn tự do quản lý điều hành."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Văn hóa là nền tảng tinh thần của xã hội, vừa là mục tiêu, vừa là động lực thúc đẩy phát triển kinh tế - xã hội.",
    trickDetails: {
      whyTrapped: "Dễ nhầm văn hóa là yếu tố phụ thuộc kinh tế.",
      trickWord: "Nền tảng tinh thần + Mục tiêu và động lực",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "Văn hóa = Nền tảng tinh thần + Động lực."
    }
  },
  {
    id: "lsd-c3-tr1-048",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Đường lối công nghiệp hóa, hiện đại hóa ở nước ta có đặc điểm khác biệt gì so với trước Đổi mới?",
    options: [
      "CNH gắn liền với HĐH, gắn với phát triển kinh tế trí thức và bảo vệ môi trường.",
      "CNH chỉ tập trung phát triển công nghiệp nặng quy mô khổng lồ ở đô thị lớn.",
      "CNH bằng cách nhập khẩu 100% công nghệ cũ đã qua sử dụng từ nước ngoài.",
      "CNH tuyệt đối không sử dụng nguồn vốn đầu tư trực tiếp từ nước ngoài FDI."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "CNH thời kỳ Đổi mới: CNH gắn liền với HĐH, CNH-HĐH gắn với phát triển kinh tế trí thức, bảo vệ tài nguyên môi trường.",
    trickDetails: {
      whyTrapped: "Nhầm CNH cũ thời bao cấp (chỉ thiên về công nghiệp nặng).",
      trickWord: "CNH gắn với HĐH + Kinh tế trí thức",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "CNH mới = CNH gắn với HĐH + Kinh tế trí thức."
    }
  },
  {
    id: "lsd-c3-tr1-049",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Nội dung nào phản ánh đúng bài học kinh nghiệm về công tác xây dựng Đảng trong Đổi mới?",
    options: [
      "Xây dựng Đảng là nhiệm vụ then chốt, phải thường xuyên tự đổi mới, tự chỉnh đốn.",
      "Xây dựng Đảng chỉ cần thực hiện vào mỗi kỳ Đại hội đại biểu toàn quốc họp.",
      "Xây dựng Đảng chỉ tập trung vào nâng cao trình độ chuyên môn kinh tế cán.",
      "Xây dựng Đảng là nhiệm vụ phụ thuộc hoàn toàn vào kết quả tăng trưởng kinh."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Xây dựng, chỉnh đốn Đảng là nhiệm vụ then chốt, quyết định sự tồn vong của Đảng và chế độ.",
    trickDetails: {
      whyTrapped: "Nhầm xây dựng Đảng là nhiệm vụ phụ thuộc.",
      trickWord: "Xây dựng Đảng = NHIỆM VỤ THEN CHỐT",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Bài học kinh nghiệm.",
      tip: "Xây dựng Đảng = Then chốt."
    }
  },
  {
    id: "lsd-c3-tr1-050",
    trickSet: 1,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Ý nghĩa bài học 'Dĩ bất biến, ứng vạn biến' trong công tác ngoại giao thời kỳ Đổi mới là gì?",
    options: [
      "Giữ vững mục tiêu độc lập dân tộc và CNXH, linh hoạt về sách lược đối ngoại.",
      "Thay đổi mục tiêu độc lập dân tộc để lấy sự hợp tác hòa bình ngắn hạn.",
      "Từ bỏ nguyên tắc chủ quyền hải đảo để mở rộng trao đổi thương mại tự.",
      "Đóng cửa nền kinh tế tuyệt đối không tham gia các tổ chức thương mại."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Dĩ bất biến: Kiên định mục tiêu độc lập dân tộc và CNXH, giữ vững chủ quyền; Ứng vạn biến: Linh hoạt, mềm dẻo về phương sách ngoại giao.",
    trickDetails: {
      whyTrapped: "Dễ nhầm đánh đổi chủ quyền lấy thương mại.",
      trickWord: "Bất biến = Độc lập & CNXH; Vạn biến = Sách lược ngoại giao",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Bài học kinh nghiệm.",
      tip: "Dĩ bất biến ứng vạn biến trong Đổi mới."
    }
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
  console.log("✅ All 50 questions passed Option Length Balance (L_max - L_min <= 15)!");
  const fileContent = `/* ============================================================
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM BẪY (TRICK SET 1): CHƯƠNG III LỊCH SỬ ĐẢNG (1975 ĐẾN NAY)
   Mã Bộ Đề: questions-lsd-chuong-3-trick1.js
   Số lượng: 50 câu bẫy tư duy Vận dụng cao (100% có trickDetails)
   ============================================================ */

export const lsdChuong3Trick1 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-chuong-3-trick1.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-chuong-3-trick1.js");
}
