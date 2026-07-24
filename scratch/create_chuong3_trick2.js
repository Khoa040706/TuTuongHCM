import fs from "fs";

// 50 diverse trick questions for Chapter III Trick Set 2
const questions = [
  // 1-20: Giai đoạn 1975-1986 (Thống nhất Nhà nước, ĐH IV, V, khủng hoảng KT-XH)
  {
    id: "lsd-c3-tr2-001",
    trickSet: 2,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Tên gọi chính thức của tổ chức Mặt trận đại đoàn kết toàn dân từ năm 1977 đến nay là gì?",
    options: [
      "Mặt trận Tổ quốc Việt Nam (trên cơ sở hợp nhất Mặt trận Tổ quốc và Mặt trận Giải phóng).",
      "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam hoạt động độc lập ở vùng miền Nam.",
      "Mặt trận Liên Việt mở rộng hợp nhất lực lượng công nông và trí thức toàn quốc.",
      "Hội Liên hiệp Quốc dân Việt Nam do các đảng chính trị thành lập thời bao cấp."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Tháng 2/1977, Đại hội Mặt trận Dân tộc Thống nhất họp tại TP.HCM hợp nhất thành Mặt trận Tổ quốc Việt Nam.",
    trickDetails: {
      whyTrapped: "Học sinh dễ nhầm Mặt trận Liên Việt hay Mặt trận Giải phóng miền Nam.",
      trickWord: "Mặt trận Tổ quốc Việt Nam (từ 2/1977)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.1.",
      tip: "2/1977 = Mặt trận Tổ quốc Việt Nam."
    }
  },
  {
    id: "lsd-c3-tr2-002",
    trickSet: 2,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Bước đột phá đầu tiên về đổi mới quản lý kinh tế nông nghiệp của Đảng là gì?",
    options: [
      "Chỉ thị 100-CT/TW (tháng 1-1981) về khoán sản phẩm đến nhóm và người lao động.",
      "Nghị quyết 10-NQ/TW (tháng 4-1988) về giao khoán ruộng đất cho hộ gia đình.",
      "Nghị quyết Trung ương 6 khóa IV (tháng 8-1979) về làm cho sản xuất bung ra.",
      "Nghị quyết Trung ương 8 khóa V (tháng 6-1985) về cải cách Giá - Lương - Tiền."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chỉ thị 100 (1/1981) là bước đột phá ĐẦU TIÊN trong nông nghiệp, tiền đề cho Nghị quyết 10 (4/1988).",
    trickDetails: {
      whyTrapped: "Nhầm Nghị quyết 10 (1988) là đột phá đầu tiên.",
      trickWord: "Chỉ thị 100 (1981) = Đột phá ĐẦU TIÊN nông nghiệp",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.2.",
      tip: "Đột phá đầu tiên nông nghiệp = Chỉ thị 100."
    }
  },
  {
    id: "lsd-c3-tr2-003",
    trickSet: 2,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Nội dung nào KHÔNG ĐÚNG về mục tiêu của Kế hoạch 5 năm (1976-1980) do ĐH IV đề ra?",
    options: [
      "Xây dựng thành công kinh tế thị trường tự do cạnh tranh theo chuẩn quốc tế.",
      "Xây dựng một bước cơ sở vật chất kỹ thuật của chủ nghĩa xã hội trong nước.",
      "Cải tạo xã hội chủ nghĩa đối với các thành phần kinh tế tư bản ở miền Nam.",
      "Nâng cao đời sống vật chất và văn hóa tinh thần của nhân dân lao động."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Phương án A SAI vì thời kỳ 1976-1980 Đảng tập trung cải tạo XHCN và bao cấp, chưa thừa nhận kinh tế thị trường.",
    trickDetails: {
      whyTrapped: "Bẫy từ 'kinh tế thị trường tự do' (giai đoạn này chưa có).",
      trickWord: "Bẫy 'kinh tế thị trường tự do'",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.1.",
      tip: "1976-1980 = Chưa có kinh tế thị trường."
    }
  },
  {
    id: "lsd-c3-tr2-004",
    trickSet: 2,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Chủ trương 'Xóa bỏ bù hại, chuyển hạch toán kinh doanh' được quyết định tại Hội nghị nào?",
    options: [
      "Hội nghị Trung ương 8 khóa V (tháng 6-1985) dứt khoát xóa bỏ bao cấp.",
      "Hội nghị Trung ương 6 khóa IV (tháng 8-1979) về làm cho sản xuất bung ra.",
      "Hội nghị Trung ương 24 khóa III (tháng 9-1975) về thống nhất nhà nước.",
      "Hội nghị đại biểu toàn quốc giữa nhiệm kỳ khóa VII (tháng 1 năm 1994)."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "NQTƯ 8 khóa V (6/1985) về Giá - Lương - Tiền dứt khoát xóa bỏ cơ chế bao cấp bù hại, chuyển sang hạch toán kinh doanh XHCN.",
    trickDetails: {
      whyTrapped: "Nhầm NQTƯ 6 khóa IV (1979).",
      trickWord: "NQTƯ 8 khóa V (6/1985) = Xóa bù hại, chuyển hạch toán",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.2.",
      tip: "Xóa bù hại = NQTƯ 8 (1985)."
    }
  },
  {
    id: "lsd-c3-tr2-005",
    trickSet: 2,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Quyết định của Quốc hội khóa VI đổi tên thành phố Sài Gòn - Gia Định thành tên gì?",
    options: [
      "Thành phố Hồ Chí Minh (để ghi nhớ công lao vĩ đại của Chủ tịch Hồ Chí Minh).",
      "Thành phố Nam Bộ Xã hội Chủ nghĩa (lấy làm trung tâm kinh tế phía Nam).",
      "Đô thị Đặc quyền Sài Gòn (hưởng chính sách phát triển kinh tế thương mại).",
      "Thành phố Giải phóng Miền Nam (kỷ niệm chiến thắng vĩ đại Mùa Xuân 1975)."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Ngày 2/7/1976, Quốc hội khóa VI quyết định chính thức đổi tên TP. Sài Gòn - Gia Định thành Thành phố Hồ Chí Minh.",
    trickDetails: {
      whyTrapped: "Dễ nhầm tên gọi đô thị đặc quyền.",
      trickWord: "Thành phố Hồ Chí Minh (từ 2/7/1976)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.1.",
      tip: "2/7/1976 = TP. Hồ Chí Minh."
    }
  },
  {
    id: "lsd-c3-tr2-006",
    trickSet: 2,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Văn kiện nào lần đầu tiên phân tích khái niệm 'chặng đường đầu tiên' của thời kỳ quá độ?",
    options: [
      "Báo cáo chính trị tại Đại hội V của Đảng (tháng 3 năm 1982).",
      "Văn kiện Đại hội đại biểu toàn quốc lần thứ IV của Đảng (12-1976).",
      "Nghị quyết Hội nghị Trung ương 24 khóa III (tháng 9 năm 1975).",
      "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (1991)."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH V (3/1982) lần đầu tiên xác định thời kỳ quá độ gồm nhiều chặng đường và xác định nội dung chặng đường đầu tiên.",
    trickDetails: {
      whyTrapped: "Nhầm ĐH IV (ĐH IV chưa xác định các chặng đường quá độ).",
      trickWord: "ĐH V (1982) = Chặng đường đầu tiên của thời kỳ quá độ",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.2.",
      tip: "Chặng đường đầu tiên = ĐH V (1982)."
    }
  },
  {
    id: "lsd-c3-tr2-007",
    trickSet: 2,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Ý nghĩa bài học giúp quân dân ta bảo vệ vẹn toàn biên giới phía Bắc (1979) là gì?",
    options: [
      "Phát huy sức mạnh chiến tranh nhân dân, kiên cường giữ vững từng tấc đất.",
      "Ỷ lại hoàn toàn vào quân viện trợ nước ngoài để bảo vệ các tỉnh biên giới.",
      "Từ bỏ chủ quyền các vùng cao nguyên để lui về phòng ngự ở vùng đồng bằng.",
      "Chấp nhận thỏa hiệp nhượng địa giới để đổi lấy sự hòa hoãn kinh tế kéo."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chiến đấu bảo vệ biên giới phía Bắc thể hiện tinh thần yêu nước kiên cường, sức mạnh chiến tranh nhân dân bảo vệ chủ quyền.",
    trickDetails: {
      whyTrapped: "Dễ nhầm là nhượng địa giới.",
      trickWord: "Sức mạnh chiến tranh nhân dân + Giữ vững tấc đất",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.1.",
      tip: "Biên giới 1979 = Giữ vững từng tấc đất."
    }
  },
  {
    id: "lsd-c3-tr2-008",
    trickSet: 2,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Sự kiện ngoại giao quan trọng đưa Việt Nam gia nhập Liên Hợp Quốc diễn ra năm nào?",
    options: [
      "Chính thức trở thành thành viên thứ 149 của Liên Hợp Quốc vào ngày 20-9-1977.",
      "Chính thức trở thành thành viên của Liên Hợp Quốc ngay sau khi ký Paris 1973.",
      "Chính thức trở thành thành viên của Liên Hợp Quốc vào năm 1995 cùng ASEAN.",
      "Chính thức trở thành thành viên của Liên Hợp Quốc tại Đại hội VI năm 1986."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Ngày 20/9/1977, Việt Nam chính thức trở thành thành viên thứ 149 của Liên Hợp Quốc.",
    trickDetails: {
      whyTrapped: "Nhầm năm 1995 (gia nhập ASEAN).",
      trickWord: "20-9-1977 (Thành viên 149 Liên Hợp Quốc)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.1.",
      tip: "20/9/1977 = Gia nhập LHQ."
    }
  },
  {
    id: "lsd-c3-tr2-009",
    trickSet: 2,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Tình trạng lạm phát của nền kinh tế Việt Nam đạt đỉnh cao kỷ lục (3 con số) vào năm nào?",
    options: [
      "Đạt đỉnh cao lạm phát lên tới 774,7% vào năm 1986 (thời kỳ trước Đổi mới).",
      "Đạt đỉnh cao lạm phát vào năm 1976 ngay sau khi giải phóng Miền Nam xong.",
      "Đạt đỉnh cao lạm phát vào năm 1995 thời điểm gia nhập vào khối ASEAN.",
      "Đạt đỉnh cao lạm phát vào năm 2007 thời điểm gia nhập tổ chức WTO."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Năm 1986, lạm phát phi mã lên tới 774,7% do khủng hoảng KT-XH và hậu quả của tổng điều chỉnh Giá - Lương - Tiền năm 1985.",
    trickDetails: {
      whyTrapped: "Nhầm năm 1976 hay 1995.",
      trickWord: "Lạm phát 774,7% năm 1986",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.2.",
      tip: "1986 = Lạm phát đỉnh điểm 774,7%."
    }
  },
  {
    id: "lsd-c3-tr2-010",
    trickSet: 2,
    sectionId: "lsd3-sec-1",
    subsectionId: "lsd3-sub-1-1",
    question: "Nghị quyết Trung ương 6 khóa IV (tháng 8-1979) mang tinh thần chỉ đạo nổi tiếng nào?",
    options: [
      "Chủ trương 'Làm cho sản xuất bung ra', mở rộng quyền tự chủ cho cơ sở.",
      "Chủ trương 'Tập trung toàn lực cho công nghiệp nặng quy mô khổng lồ'.",
      "Chủ trương 'Quốc hữu hóa 100% các cơ sở sản xuất tư nhân nhỏ lẻ'.",
      "Chủ trương 'Tuyên bố đóng cửa biên giới không giao thương ngoại thương'."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "NQTƯ 6 khóa IV (8/1979) đề ra chủ trương 'Làm cho sản xuất bung ra', bước đột phá đầu tiên cởi trói sản xuất.",
    trickDetails: {
      whyTrapped: "Nhầm với NQTƯ 8 khóa V.",
      trickWord: "NQTƯ 6 khóa IV (1979) = Làm cho sản xuất bung ra",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục I.2.",
      tip: "1979 = Sản xuất bung ra."
    }
  },

  // 11-30: Đường lối Đổi mới ĐH VI, VII, VIII, IX, X
  {
    id: "lsd-c3-tr2-011",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-1",
    question: "Bài học kinh nghiệm số 2 được Đại hội VI (12-1986) đúc kết có nội dung là gì?",
    options: [
      "Đảng phải luôn xuất phát từ thực tế, tôn trọng và hành động theo quy luật khách quan.",
      "Đảng phải tập trung toàn bộ nguồn lực để xây dựng quân đội chính quy hiện đại.",
      "Đảng phải ưu tiên phát triển công nghiệp nặng làm nền tảng cho mọi ngành kinh.",
      "Đảng phải đóng cửa kinh tế để bảo vệ hàng sản xuất nội địa trong nước."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Bài học 2 của ĐH VI: Luôn xuất phát từ thực tế, tôn trọng và hành động theo quy luật khách quan (khắc phục bệnh duy ý chí).",
    trickDetails: {
      whyTrapped: "Nhầm bài học về công nghiệp nặng.",
      trickWord: "Xuất phát từ thực tế, hành động theo QUY LUẬT KHÁCH QUAN",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.1.",
      tip: "ĐH VI bài học 2 = Quy luật khách quan."
    }
  },
  {
    id: "lsd-c3-tr2-012",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-1",
    question: "Nền kinh tế nhiều thành phần được Đại hội VI (12-1986) thừa nhận bao gồm mấy thành phần?",
    options: [
      "Thừa nhận 5 thành phần kinh tế cùng tồn tại hợp pháp trong thời kỳ quá độ.",
      "Thừa nhận duy nhất 2 thành phần kinh tế (kinh tế nhà nước và tập thể).",
      "Thừa nhận 8 thành phần kinh tế bao gồm cả các hình thức tư nhân nước ngoài.",
      "Thừa nhận 3 thành phần kinh tế tập trung vào khu vực sản xuất công nghiệp."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH VI thừa nhận cấu trúc nền kinh tế 5 thành phần (Nhà nước, Tập thể, Cá thể tiểu chủ, Tư bản tư nhân, Tư bản nhà nước).",
    trickDetails: {
      whyTrapped: "Nhầm giai đoạn bao cấp (chỉ có 2 thành phần là Nhà nước và Tập thể).",
      trickWord: "ĐH VI (1986) = 5 thành phần kinh tế",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.1.",
      tip: "ĐH VI = 5 thành phần kinh tế."
    }
  },
  {
    id: "lsd-c3-tr2-013",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-1",
    question: "Nhiệm vụ bao trùm của chặng đường đầu tiên thời kỳ quá độ theo ĐH VI là gì?",
    options: [
      "Ổn định tình hình kinh tế - xã hội, tiếp tục xây dựng tiền đề cho CNH.",
      "Hoàn thành xuất sắc việc xây dựng xong cơ sở vật chất của chủ nghĩa xã hội.",
      "Đưa nước ta trở thành cường quốc công nghiệp hiện đại hàng đầu Châu Á.",
      "Xóa bỏ hoàn toàn chế độ tư hữu đất đai để tập trung hóa nông nghiệp."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Nhiệm vụ bao trùm ĐH VI: Ổn định mọi mặt tình hình KT-XH, tiếp tục xây dựng những tiền đề cần thiết cho việc đẩy mạnh CNH.",
    trickDetails: {
      whyTrapped: "Dễ nhầm là hoàn thành CNH ngay.",
      trickWord: "Ổn định tình hình KT-XH + Tạo tiền đề CNH",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.1.",
      tip: "ĐH VI = Ổn định KT-XH."
    }
  },
  {
    id: "lsd-c3-tr2-014",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Cương lĩnh 1991 xác định động lực chủ yếu để phát triển đất nước là gì?",
    options: [
      "Đại đoàn kết toàn dân mà nòng cốt là liên minh công nhân - nông dân - trí thức.",
      "Sự hỗ trợ viện trợ tài chính quân sự khổng lồ từ các quốc gia phát triển.",
      "Khai thác cạn kệt nguồn tài nguyên thiên nhiên khoáng sản phục vụ xuất.",
      "Tập trung nguồn lực mở rộng kinh tế tư nhân tự do cạnh tranh không kiểm."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Cương lĩnh 1991: Động lực chủ yếu là đại đoàn kết toàn dân tộc trên cơ sở liên minh công nhân với nông dân và trí thức.",
    trickDetails: {
      whyTrapped: "Dễ nhầm động lực là vốn ODA hay tài nguyên.",
      trickWord: "Đại đoàn kết toàn dân + Liên minh Công-Nông-Trí thức",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "Động lực Cương lĩnh 1991 = Đại đoàn kết."
    }
  },
  {
    id: "lsd-c3-tr2-015",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Đại hội VII của Đảng (6-1991) đã bầu ai làm Tổng Bí thư Ban Chấp hành Trung ương?",
    options: [
      "Đồng chí Đỗ Mười được bầu làm Tổng Bí thư Ban Chấp hành Trung ương Đảng.",
      "Đồng chí Nguyễn Văn Linh được bầu làm Tổng Bí thư Ban Chấp hành Trung ương.",
      "Đồng chí Lê Khả Phiêu được bầu làm Tổng Bí thư Ban Chấp hành Trung ương.",
      "Đồng chí Nông Đức Mạnh được bầu làm Tổng Bí thư Ban Chấp hành Trung ương."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH VII (6/1991) bầu đồng chí Đỗ Mười làm Tổng Bí thư (ĐH VI 1986 bầu đồng chí Nguyễn Văn Linh).",
    trickDetails: {
      whyTrapped: "Dễ nhầm đồng chí Nguyễn Văn Linh (TBT ĐH VI).",
      trickWord: "Đồng chí Đỗ Mười (Tổng Bí thư ĐH VII)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "ĐH VI = Nguyễn Văn Linh; ĐH VII = Đỗ Mười."
    }
  },
  {
    id: "lsd-c3-tr2-016",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Chiến lược ổn định và phát triển KT-XH đến năm 2000 được thông qua tại Đại hội nào?",
    options: [
      "Đại hội đại biểu toàn quốc lần thứ VII của Đảng (tháng 6 năm 1991).",
      "Đại hội đại biểu toàn quốc lần thứ VI của Đảng (tháng 12 năm 1986).",
      "Đại hội đại biểu toàn quốc lần thứ VIII của Đảng (tháng 6 năm 1996).",
      "Đại hội đại biểu toàn quốc lần thứ IX của Đảng (tháng 4 năm 2001)."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH VII (1991) thông qua Chiến lược ổn định và phát triển KT-XH đến năm 2000 cùng Cương lĩnh 1991.",
    trickDetails: {
      whyTrapped: "Nhầm ĐH VI 1986.",
      trickWord: "Chiến lược KT-XH 10 năm (1991-2000) tại ĐH VII",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "ĐH VII = Cương lĩnh 1991 + Chiến lược 2000."
    }
  },
  {
    id: "lsd-c3-tr2-017",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Đại hội VIII (6-1996) đề ra bao nhiêu quan điểm chỉ đạo công nghiệp hóa, hiện đại hóa?",
    options: [
      "Nêu ra 6 quan điểm chỉ đạo cơ bản về công nghiệp hóa, hiện đại hóa.",
      "Nêu ra 4 quan điểm chỉ đạo về ưu tiên phát triển công nghiệp nặng.",
      "Nêu ra 8 quan điểm chỉ đạo về thu hút vốn đầu tư nước ngoài FDI.",
      "Nêu ra 3 quan điểm chỉ đạo về phát triển kinh tế thị trường định hướng."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH VIII (1996) đề ra 6 quan điểm chỉ đạo CNH - HĐH thời kỳ mới.",
    trickDetails: {
      whyTrapped: "Dễ nhầm số lượng quan điểm chỉ đạo.",
      trickWord: "6 quan điểm chỉ đạo CNH-HĐH (ĐH VIII)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "ĐH VIII = 6 quan điểm CNH-HĐH."
    }
  },
  {
    id: "lsd-c3-tr2-018",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Chủ trương 'Chủ động và tích cực hội nhập kinh tế quốc tế' được khẳng định rõ tại ĐH nào?",
    options: [
      "Đại hội đại biểu toàn quốc lần thứ IX của Đảng (tháng 4 năm 2001).",
      "Đại hội đại biểu toàn quốc lần thứ VI của Đảng (tháng 12 năm 1986).",
      "Đại hội đại biểu toàn quốc lần thứ V của Đảng (tháng 3 năm 1982).",
      "Đại hội đại biểu toàn quốc lần thứ IV của Đảng (tháng 12 năm 1976)."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH IX (2001) chính thức nhấn mạnh chủ trương 'Chủ động và tích cực hội nhập kinh tế quốc tế'.",
    trickDetails: {
      whyTrapped: "Nhầm ĐH VI 1986 (ĐH VI mới là mở cửa kinh tế, đến ĐH IX mới dùng từ 'chủ động và tích cực hội nhập').",
      trickWord: "Chủ động và tích cực hội nhập kinh tế quốc tế (ĐH IX)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "ĐH IX (2001) = Chủ động & tích cực hội nhập."
    }
  },
  {
    id: "lsd-c3-tr2-019",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Số lượng đặc trưng xã hội XHCN được Đại hội X (4-2006) bổ sung, hoàn thiện là bao nhiêu?",
    options: [
      "Hoàn thiện gồm 8 đặc trưng (bổ sung đặc trưng về Nhà nước pháp quyền và Dân chủ).",
      "Hoàn thiện gồm 6 đặc trưng giữ nguyên toàn bộ như bản Cương lĩnh năm 1991.",
      "Hoàn thiện gồm 10 đặc trưng mở rộng ra các tiêu chí về kinh tế hiện đại.",
      "Hoàn thiện gồm 5 đặc trưng tập trung vào khối đại đoàn kết các dân tộc."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH X (2006) phát triển Cương lĩnh 1991 từ 6 đặc trưng thành 8 đặc trưng.",
    trickDetails: {
      whyTrapped: "Nhầm 6 đặc trưng Cương lĩnh 1991.",
      trickWord: "ĐH X (2006) = 8 ĐẶC TRƯNG XHCN",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "ĐH X = 8 đặc trưng."
    }
  },
  {
    id: "lsd-c3-tr2-020",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Khái niệm 'Kinh tế trí thức' lần đầu tiên được nhấn mạnh trong Văn kiện Đại hội nào?",
    options: [
      "Đại hội đại biểu toàn quốc lần thứ IX của Đảng (tháng 4 năm 2001).",
      "Đại hội đại biểu toàn quốc lần thứ VI của Đảng (tháng 12 năm 1986).",
      "Đại hội đại biểu toàn quốc lần thứ V của Đảng (tháng 3 năm 1982).",
      "Đại hội đại biểu toàn quốc lần thứ IV của Đảng (tháng 12 năm 1976)."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH IX (2001) lần đầu tiên nhấn mạnh phát triển kinh tế trí thức trong quá trình CNH - HĐH.",
    trickDetails: {
      whyTrapped: "Dễ nhầm ĐH VIII 1996.",
      trickWord: "Kinh tế trí thức (ĐH IX 2001)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "ĐH IX = Kinh tế trí thức."
    }
  },

  // 21-50: Các bài học & đường lối phát triển hiện đại
  {
    id: "lsd-c3-tr2-021",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Nghị quyết Trung ương 4 khóa XI và khóa XII tập trung chỉ đạo công tác then chốt nào?",
    options: [
      "Tăng cường xây dựng, chỉnh đốn Đảng; ngăn chặn sự suy thoái về tư tưởng chính trị.",
      "Đổi mới căn bản và toàn diện nền giáo dục đào tạo theo hướng chuẩn hóa.",
      "Tập trung đầu tư hạ tầng giao thông đường bộ cao tốc Bắc - Nam rộng lớn.",
      "Cổ phần hóa toàn bộ các ngân hàng thương mại nhà nước lớn trong nước."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "NQTƯ 4 khóa XI và khóa XII là các Nghị quyết chuyên đề vô cùng quan trọng về xây dựng, chỉnh đốn Đảng, chống suy thoái, 'tự diễn biến', 'tự chuyển hóa'.",
    trickDetails: {
      whyTrapped: "Nhầm NQ về giáo dục hay hạ tầng.",
      trickWord: "NQTƯ 4 XI & XII = Xây dựng chỉnh đốn Đảng, chống suy thoái",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "NQTƯ 4 XI & XII = Chỉnh đốn Đảng."
    }
  },
  {
    id: "lsd-c3-tr2-022",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Mối quan hệ lớn nào được Đảng xác định là trung tâm trong đổi mới hệ thống chính trị?",
    options: [
      "Mối quan hệ giữa đổi mới kinh tế và đổi mới chính trị phù hợp từng bước.",
      "Mối quan hệ giữa tăng trưởng kinh tế và ô nhiễm môi trường tự nhiên.",
      "Mối quan hệ giữa phát triển công nghiệp nặng và phát triển nông nghiệp.",
      "Mối quan hệ giữa kinh tế nhà nước và các doanh nghiệp tư nhân nước."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Kết hợp chặt chẽ giữa đổi mới kinh tế và đổi mới chính trị: Lấy đổi mới kinh tế làm trọng tâm, đồng thời từng bước đổi mới chính trị.",
    trickDetails: {
      whyTrapped: "Nhầm quan hệ kinh tế và môi trường.",
      trickWord: "Đổi mới KINH TẾ & Đổi mới CHÍNH TRỊ",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Bài học kinh nghiệm.",
      tip: "Kinh tế & Chính trị phù hợp."
    }
  },
  {
    id: "lsd-c3-tr2-023",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Quan điểm 'Phát triển nhanh và bền vững' được Đảng nhấn mạnh bắt đầu từ Đại hội nào?",
    options: [
      "Đại hội đại biểu toàn quốc lần thứ IX (2001) và phát triển mạnh ở ĐH X (2006).",
      "Đại hội đại biểu toàn quốc lần thứ IV của Đảng (tháng 12 năm 1976).",
      "Đại hội đại biểu toàn quốc lần thứ V của Đảng (tháng 3 năm 1982).",
      "Đại hội đại biểu toàn quốc lần thứ VI của Đảng (tháng 12 năm 1986)."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Phát triển nhanh gắn liền với bền vững, phát triển KT-XH gắn với bảo vệ môi trường sinh thái được nhấn mạnh từ ĐH IX và X.",
    trickDetails: {
      whyTrapped: "Nhầm từ ĐH IV hay ĐH VI.",
      trickWord: "Phát triển nhanh và bền vững (ĐH IX & X)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Phát triển nhanh & bền vững = ĐH IX-X."
    }
  },
  {
    id: "lsd-c3-tr2-024",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Ý nghĩa của chính sách phân phối trong nền kinh tế thị trường định hướng XHCN là gì?",
    options: [
      "Phân phối theo kết quả lao động, hiệu quả kinh tế, theo đóng góp vốn và an sinh.",
      "Phân phối cào bằng bình quân 100% không phân biệt trình độ và năng suất.",
      "Chỉ phân phối dựa trên số lượng vốn cổ phần đóng góp của các nhà tư bản.",
      "Phân phối toàn bộ sản phẩm thông qua hệ thống tem phiếu nhà nước cung."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Thực hiện phân phối chủ yếu theo kết quả lao động, hiệu quả kinh tế, đồng thời theo mức đóng góp vốn và thông qua hệ thống an sinh xã hội.",
    trickDetails: {
      whyTrapped: "Nhầm phân phối tem phiếu bao cấp bình quân.",
      trickWord: "Phân phối theo lao động, hiệu quả kinh tế & an sinh",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Phân phối KTTT = Lao động + Vốn + An sinh."
    }
  },
  {
    id: "lsd-c3-tr2-025",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Thành tựu nổi bật về xóa đói giảm nghèo của Việt Nam được Liên Hợp Quốc đánh giá ra sao?",
    options: [
      "Việt Nam là một điểm sáng hoàn thành sớm Mục tiêu Phát triển Thiên niên kỷ (MDGs).",
      "Việt Nam vẫn nằm trong nhóm các quốc gia nghèo đói nhất trên thế giới.",
      "Việt Nam đã xóa bỏ hoàn toàn 100% số hộ nghèo trên cả nước ngay năm 2000.",
      "Việt Nam chưa đạt được bất kỳ tiến bộ nào trong công tác giảm nghèo."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "LHQ đánh giá Việt Nam là điểm sáng thế giới về giảm nghèo, hoàn thành sớm Mục tiêu Thiên niên kỷ (MDGs).",
    trickDetails: {
      whyTrapped: "Bẫy từ 'xóa 100% hộ nghèo năm 2000'.",
      trickWord: "Điểm sáng hoàn thành sớm Mục tiêu Thiên niên kỷ",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Giảm nghèo = Điểm sáng Mục tiêu Thiên niên kỷ."
    }
  },
  {
    id: "lsd-c3-tr2-026",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Nội dung nào KHÔNG thuộc về bài học kinh nghiệm phát huy đại đoàn kết toàn dân tộc?",
    options: [
      "Phân biệt đối xử giữa các thành phần kinh tế và các tầng lớp nhân dân.",
      "Lấy mục tiêu giữ vững độc lập thống nhất làm điểm tương đồng tập hợp.",
      "Tôn trọng những điểm khác biệt không trái với lợi ích chung dân tộc.",
      "Phát huy quyền làm chủ của nhân dân theo phương châm Dân biết Dân làm."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Phương án A SAI vì đại đoàn kết dân tộc đòi hỏi không phân biệt đối xử, mạ lỵ hay định kiến với các tầng lớp nhân dân.",
    trickDetails: {
      whyTrapped: "Bẫy từ 'phân biệt đối xử'.",
      trickWord: "Bẫy 'phân biệt đối xử các thành phần'",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Bài học kinh nghiệm.",
      tip: "Đoàn kết = Không phân biệt đối xử."
    }
  },
  {
    id: "lsd-c3-tr2-027",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Ý nghĩa của phương châm 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng' là gì?",
    options: [
      "Bản chất của nền dân chủ xã hội chủ nghĩa, phát huy tối đa quyền làm chủ của dân.",
      "Hình thức quản lý hành chính tập trung quyền lực hoàn toàn vào tay cán bộ.",
      "Chính sách áp dụng riêng cho các hợp tác xã nông nghiệp thời kỳ bao cấp.",
      "Mô hình tham vấn ý kiến công chúng mang tính thủ tục hình thức xã giao."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Khẩu hiệu hoàn thiện hiện nay: 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng' thể hiện bản chất dân chủ XHCN.",
    trickDetails: {
      whyTrapped: "Nhầm là thủ tục hình thức.",
      trickWord: "Bản chất nền DÂN CHỦ XÃ HỘI CHỦ NGHĨA",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Dân biết dân bàn... dân thụ hưởng."
    }
  },
  {
    id: "lsd-c3-tr2-028",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Tầm quan trọng của việc giữ vững an ninh quốc phòng trong Đổi mới là gì?",
    options: [
      "Bảo vệ vững chắc độc lập, chủ quyền, toàn vẹn lãnh thổ, tạo môi trường hòa bình.",
      "Nhằm mục đích mở rộng địa giới lãnh thổ sang các quốc gia láng giềng.",
      "Để tiêu tốn nguồn ngân sách quốc gia mà không phục vụ phát triển kinh tế.",
      "Chỉ phục vụ nhiệm vụ giữ trật tự an ninh đô thị nội địa trong nước."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Quốc phòng an ninh bảo vệ vững chắc độc lập chủ quyền, giữ vững môi trường hòa bình ổn định để phát triển đất nước.",
    trickDetails: {
      whyTrapped: "Dễ nhầm là mở rộng địa giới.",
      trickWord: "Bảo vệ chủ quyền + Giữ môi trường HÒA BÌNH",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Quốc phòng = Bảo vệ chủ quyền + Hòa bình."
    }
  },
  {
    id: "lsd-c3-tr2-029",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Đường lối Đổi mới của Đảng thể hiện sự vận dụng sáng tạo chủ nghĩa Mác - Lênin ở điểm nào?",
    options: [
      "Không rập khuôn mô hình có sẵn, xuất phát từ thực tiễn hoàn cảnh Việt Nam.",
      "Bỏ qua quy luật phát triển lực lượng sản xuất để tiến nhanh lên CNXH.",
      "Chấp nhận từ bỏ vai trò lãnh đạo của Đảng Cộng sản để mở rộng dân chủ.",
      "Chỉ tập trung phát triển nông nghiệp sinh thái mà bỏ qua công nghiệp."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Vận dụng sáng tạo, phát triển Mác - Lênin và Tư tưởng Hồ Chí Minh: Xuất phát từ thực tiễn Việt Nam, không giáo điều rập khuôn.",
    trickDetails: {
      whyTrapped: "Bẫy từ 'từ bỏ vai trò lãnh đạo của Đảng'.",
      trickWord: "Xuất phát từ thực tiễn Việt Nam (không giáo điều)",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Bài học kinh nghiệm.",
      tip: "Sáng tạo = Xuất phát từ thực tiễn Việt Nam."
    }
  },
  {
    id: "lsd-c3-tr2-030",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Mục tiêu phấn đấu của nước ta đến năm 2030 (kỷ niệm 100 năm thành lập Đảng) là gì?",
    options: [
      "Là nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao.",
      "Là nước phát triển, có thu nhập cao hàng đầu trên thị trường toàn cầu.",
      "Là nước hoàn thành 100% việc xây dựng xong xã hội xã hội chủ nghĩa.",
      "Là nước công nghiệp nông nghiệp tự cung tự cấp không còn ngoại thương."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Mục tiêu ĐH XIII đề ra đến 2030 (100 năm thành lập Đảng): Là nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao.",
    trickDetails: {
      whyTrapped: "Học sinh dễ nhầm mục tiêu năm 2045 (đến 2045 mới là nước phát triển thu nhập cao, 2030 là thu nhập trung bình cao).",
      trickWord: "2030 = Nước đang phát triển, THU NHẬP TRUNG BÌNH CAO",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "2030 = Thu nhập trung bình cao; 2045 = Thu nhập cao."
    }
  },
  {
    id: "lsd-c3-tr2-031",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Mục tiêu phấn đấu của nước ta đến năm 2045 (kỷ niệm 100 năm thành lập Nước) là gì?",
    options: [
      "Trở thành nước phát triển, có thu nhập cao theo định hướng xã hội chủ nghĩa.",
      "Trở thành nước đang phát triển có thu nhập trung bình thấp trên thế giới.",
      "Trở thành quốc gia đứng đầu thế giới về sản xuất lương thực nông nghiệp.",
      "Trở thành trung tâm tài chính tư bản tự do lớn nhất khu vực Châu Á."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Mục tiêu 2045 (100 năm thành lập Nước): Trở thành nước phát triển, thu nhập cao.",
    trickDetails: {
      whyTrapped: "Phân biệt với mốc 2030 (thu nhập trung bình cao).",
      trickWord: "2045 = Nước phát triển, THU NHẬP CAO",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "2045 = Thu nhập cao."
    }
  },
  {
    id: "lsd-c3-tr2-032",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Yếu tố nào được coi là trung tâm của chiến lược phát triển trong thời kỳ Đổi mới?",
    options: [
      "Con người là trung tâm, chủ thể, nguồn lực quan trọng nhất và mục tiêu phát triển.",
      "Máy móc công nghệ hiện đại nhập khẩu là trung tâm của sự phát triển.",
      "Vốn đầu tư ODA nước ngoài là trung tâm quyết định mọi tốc độ tăng trưởng.",
      "Nguồn tài nguyên khoáng sản thiên nhiên là trung tâm đẩy mạnh xuất khẩu."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Con người là trung tâm, là chủ thể, là nguồn lực quan trọng nhất và là mục tiêu cao nhất của sự phát triển.",
    trickDetails: {
      whyTrapped: "Nhầm máy móc hay vốn ngoại.",
      trickWord: "CON NGƯỜI LÀ TRUNG TÂM",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Trung tâm phát triển = Con người."
    }
  },
  {
    id: "lsd-c3-tr2-033",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Đột phá chiến lược thứ nhất được Đảng xác định trong phát triển đất nước là gì?",
    options: [
      "Hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa đồng bộ.",
      "Tập trung khai thác 100% tài nguyên dầu khí và khoáng sản quốc gia.",
      "Phát triển quân đội chính quy hiện đại tiến thẳng lên công nghệ cao.",
      "Vay vốn nước ngoài đầu tư toàn bộ hệ thống đại học công lập lớn."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Ba đột phá chiến lược: 1. Hoàn thiện thể chế KTTT định hướng XHCN; 2. Phát triển nguồn nhân lực chất lượng cao; 3. Xây dựng hệ thống kết cấu hạ tầng đồng bộ.",
    trickDetails: {
      whyTrapped: "Nhầm hạ tầng hay nguồn nhân lực là đột phá thứ nhất.",
      trickWord: "Đột phá 1 = Hoàn thiện thể chế KTTT định hướng XHCN",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "3 đột phá = Thể chế ➔ Nhân lực ➔ Hạ tầng."
    }
  },
  {
    id: "lsd-c3-tr2-034",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Đột phá chiến lược thứ hai được Đảng xác định trong phát triển đất nước là gì?",
    options: [
      "Phát triển nguồn nhân lực, nhất là nguồn nhân lực chất lượng cao gắn với KH-CN.",
      "Cổ phần hóa toàn bộ hệ thống các tập đoàn kinh tế nhà nước lớn ở trong nước.",
      "Tăng cường mở rộng quan hệ đối ngoại song phương với các nước tư bản phát triển.",
      "Tập trung giải quyết ô nhiễm môi trường tại các khu công nghiệp chế xuất lớn."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đột phá chiến lược thứ hai: Phát triển nguồn nhân lực, nhất là nguồn nhân lực chất lượng cao.",
    trickDetails: {
      whyTrapped: "Nhầm đột phá thể chế hay hạ tầng.",
      trickWord: "Đột phá 2 = Nguồn nhân lực chất lượng cao",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Đột phá 2 = Nhân lực chất lượng cao."
    }
  },
  {
    id: "lsd-c3-tr2-035",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Đột phá chiến lược thứ ba được Đảng xác định trong phát triển đất nước là gì?",
    options: [
      "Xây dựng hệ thống kết cấu hạ tầng đồng bộ, hiện đại cả về kinh tế và xã hội.",
      "Phát triển hệ thống các siêu thị và trung tâm thương mại tư nhân lớn.",
      "Tăng cường hoạt động xuất khẩu nông sản thô sang các nước phát triển.",
      "Miễn thuế tuyệt đối cho toàn bộ các doanh nghiệp có vốn đầu tư FDI."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đột phá chiến lược thứ ba: Xây dựng hệ thống kết cấu hạ tầng đồng bộ, hiện đại.",
    trickDetails: {
      whyTrapped: "Nhầm đột phá thể chế.",
      trickWord: "Đột phá 3 = Kết cấu hạ tầng đồng bộ hiện đại",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Đột phá 3 = Hạ tầng đồng bộ."
    }
  },
  {
    id: "lsd-c3-tr2-036",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Vấn đề 'Chệch hướng xã hội chủ nghĩa' trong 4 nguy cơ cảnh báo thể hiện ở đâu?",
    options: [
      "Xa rời mục tiêu độc lập dân tộc và CNXH, buông lơi sự quản lý của Nhà nước.",
      "Phát triển ngành nông nghiệp sạch công nghệ cao xuất khẩu ra thế giới.",
      "Thu hút nguồn vốn đầu tư trực tiếp nước ngoài FDI vào phát triển hạ tầng.",
      "Đẩy mạnh hợp tác quốc tế giao lưu văn hóa với các quốc gia Châu Âu."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Nguy cơ chệch hướng XHCN xuất hiện nếu xa rời mục tiêu XHCN, hạ thấp vai trò chủ đạo kinh tế nhà nước hoặc tư nhân hóa tràn lan mất kiểm soát.",
    trickDetails: {
      whyTrapped: "Dễ nhầm thu hút FDI là chệch hướng.",
      trickWord: "Xa rời mục tiêu XHCN + Buông lơi quản lý",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "Chệch hướng = Xa rời mục tiêu XHCN."
    }
  },
  {
    id: "lsd-c3-tr2-037",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Âm mưu 'Diễn biến hòa bình' của các thế lực thù địch nhằm mục đích gì?",
    options: [
      "Xóa bỏ sự lãnh đạo của Đảng Cộng sản, chuyển hóa chế độ XHCN từ bên trong.",
      "Hỗ trợ Việt Nam phát triển kinh tế thị trường tự do cạnh tranh lành mạnh.",
      "Giúp đỡ Việt Nam nâng cao trình độ khoa học công nghệ hiện đại thế giới.",
      "Tài trợ vốn ODA không hoàn lại cho các tỉnh nghèo phát triển hạ tầng."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "'Diễn biến hòa bình' là chiến lược phi quân sự của các thế lực thù địch nhằm làm suy yếu, chuyển hóa tư tưởng và xóa bỏ chế độ XHCN từ bên trong.",
    trickDetails: {
      whyTrapped: "Dễ nhầm là hợp tác tài trợ.",
      trickWord: "Xóa bỏ sự lãnh đạo của Đảng + Chuyển hóa từ bên trong",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.2.",
      tip: "Diễn biến hòa bình = Chuyển hóa từ bên trong."
    }
  },
  {
    id: "lsd-c3-tr2-038",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Vấn đề tự đổi mới, tự chỉnh đốn Đảng được coi là công việc mang tính chất gì?",
    options: [
      "Công việc thường xuyên, liên tục, sống còn của Đảng trong suốt quá trình.",
      "Giải pháp tình thế ngắn hạn chỉ áp dụng khi có khủng hoảng kinh tế.",
      "Nhiệm vụ chỉ giao cho các cơ sở Đảng ở vùng nông thôn miền núi làm.",
      "Phong trào thi đua ngắn hạn kết thúc ngay sau mỗi kỳ Đại hội họp."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Tự đổi mới, tự chỉnh đốn Đảng là công việc thường xuyên, sống còn để Đảng luôn trong sạch, vững mạnh.",
    trickDetails: {
      whyTrapped: "Nhầm giải pháp tình thế ngắn hạn.",
      trickWord: "Công việc THƯỜNG XUYÊN, SỐNG CÒN",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Bài học kinh nghiệm.",
      tip: "Chỉnh đốn Đảng = Thường xuyên sống còn."
    }
  },
  {
    id: "lsd-c3-tr2-039",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Ý nghĩa của việc kết hợp phát triển kinh tế với bảo đảm quốc phòng, an ninh là gì?",
    options: [
      "Kinh tế phát triển tạo lực lượng quốc phòng, quốc phòng giữ môi trường cho kinh.",
      "Kinh tế phát triển tuyệt đối không chi ngân sách cho nhiệm vụ quốc phòng.",
      "Tập trung 100% ngân sách cho quốc phòng mà ngưng trệ các ngành kinh tế.",
      "Hai lĩnh vực hoàn toàn độc lập tách rời không có mối liên hệ tác động."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Kinh tế là cơ sở vật chất cho quốc phòng an ninh; quốc phòng an ninh bảo vệ môi trường hòa bình ổn định cho kinh tế phát triển.",
    trickDetails: {
      whyTrapped: "Nhầm 2 lĩnh vực độc lập không liên quan.",
      trickWord: "Kinh tế tạo lực lượng ↔ Quốc phòng giữ môi trường",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Kinh tế ↔ Quốc phòng an ninh khăng khít."
    }
  },
  {
    id: "lsd-c3-tr2-040",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Nguyên tắc cao nhất của chính sách xã hội trong nền kinh tế thị trường XHCN là gì?",
    options: [
      "Tăng trưởng kinh tế đi đôi với tiến bộ và công bằng xã hội ngay trong từng bước.",
      "Hi sinh tiến bộ và công bằng xã hội để tập trung tăng trưởng kinh tế bằng mọi.",
      "Chờ cho kinh tế phát triển cực giàu rồi mới giải quyết các chính sách xã hội.",
      "Áp dụng chính sách chia đều sản phẩm bình quân cào bằng cho toàn dân."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Quan điểm nhất quán: Tăng trưởng kinh tế phải đi đôi với thực hiện tiến bộ và công bằng xã hội ngay trong từng bước và từng chính sách phát triển.",
    trickDetails: {
      whyTrapped: "Bẫy 'chờ kinh tế giàu mới làm chính sách xã hội' hay 'hi sinh công bằng để tăng trưởng'.",
      trickWord: "Tăng trưởng kinh tế ĐI ĐÔI VỚI tiến bộ & công bằng xã hội",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Kinh tế đi đôi với tiến bộ công bằng xã hội."
    }
  },
  {
    id: "lsd-c3-tr2-041",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Mô hình phân phối theo an sinh xã hội ở nước ta nhằm mục đích gì?",
    options: [
      "Bảo đảm hỗ trợ người yếu thế, giảm bớt khoảng cách phân hóa giàu nghèo.",
      "Tạo sự cào bằng bình quân 100% thu nhập giữa tất cả các thành phần.",
      "Thu thuế cao để triệt hạ sự phát triển của các doanh nghiệp tư nhân.",
      "Chỉ dành riêng cho cán bộ công chức thuộc bộ máy nhà nước hưởng."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Phân phối thông qua phúc lợi và an sinh xã hội giúp hỗ trợ đối tượng yếu thế, đảm bảo công bằng và định hướng XHCN.",
    trickDetails: {
      whyTrapped: "Nhầm triệt hạ doanh nghiệp tư nhân.",
      trickWord: "Hỗ trợ người yếu thế + Giảm phân hóa giàu nghèo",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "An sinh xã hội = Hỗ trợ người yếu thế."
    }
  },
  {
    id: "lsd-c3-tr2-042",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Ý nghĩa của việc đẩy mạnh chuyển đổi số quốc gia hiện nay là gì?",
    options: [
      "Tạo động lực mới cho tăng trưởng kinh tế, hiện đại hóa quản trị quốc gia.",
      "Thay thế hoàn toàn lực lượng lao động con người bằng trí tuệ nhân tạo.",
      "Xóa bỏ hoàn toàn các ngành sản xuất truyền thống và nông nghiệp sạch.",
      "Chỉ phục vụ mục đích quản lý dữ liệu dân cư đô thị không có đóng góp."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chuyển đổi số quốc gia (Kinh tế số, Xã hội số, Chính phủ số) tạo động lực tăng trưởng mới, nâng cao năng suất và hiệu quả quản trị.",
    trickDetails: {
      whyTrapped: "Dễ nhầm xóa bỏ lao động con người.",
      trickWord: "Động lực mới cho tăng trưởng + Hiện đại hóa quản trị",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Chuyển đổi số = Động lực tăng trưởng mới."
    }
  },
  {
    id: "lsd-c3-tr2-043",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Nội dung nào phản ánh SAI quan điểm của Đảng về xây dựng Nhà nước pháp quyền XHCN?",
    options: [
      "Thực hiện nguyên tắc tam quyền phân lập tuyệt đối giữa ba nhánh quyền lực.",
      "Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp và kiểm soát.",
      "Nhà nước của nhân dân, do nhân dân, vì nhân dân dưới sự lãnh đạo của Đảng.",
      "Tăng cường pháp chế xã hội chủ nghĩa, tôn trọng và bảo vệ quyền con người."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Phương án A SAI: Nhà nước pháp quyền XHCN Việt Nam KHÔNG thực hiện tam quyền phân lập tư bản, mà quyền lực nhà nước là THỐNG NHẤT, có sự phân công, phối hợp, kiểm soát.",
    trickDetails: {
      whyTrapped: "Học sinh rất hay nhầm Nhà nước pháp quyền XHCN có 'tam quyền phân lập'.",
      trickWord: "Bẫy 'tam quyền phân lập tuyệt đối'",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Nhà nước XHCN = Thống nhất quyền lực (KHÔNG tam quyền phân lập)."
    }
  },
  {
    id: "lsd-c3-tr2-044",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Mục đích tối cao của công cuộc Đổi mới do Đảng khởi xướng và lãnh đạo là gì?",
    options: [
      "Vì độc lập của Tổ quốc, vì hạnh phúc và cuộc sống ấm no của nhân dân.",
      "Biến Việt Nam thành cường quốc quân sự nắm quyền chi phối khu vực.",
      "Tối đa hóa nguồn thu ngân sách nhà nước bằng mọi chính sách thuế.",
      "Tạo điều kiện cho một nhóm nhỏ nhà tư bản làm giàu nhanh chóng."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đổi mới vì độc lập Tổ quốc, vì tự do, hạnh phúc của nhân dân ('Dân giàu, nước mạnh, dân chủ, công bằng, văn minh').",
    trickDetails: {
      whyTrapped: "Dễ nhầm là phục vụ nhóm nhỏ tư bản.",
      trickWord: "Vì độc lập Tổ quốc + Hạnh phúc ấm no của nhân dân",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.1.",
      tip: "Mục đích Đổi mới = Vì hạnh phúc nhân dân."
    }
  },
  {
    id: "lsd-c3-tr2-045",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Nhiệm vụ hàng đầu của công tác ngoại giao Việt Nam thời kỳ mới là gì?",
    options: [
      "Giữ vững môi trường hòa bình, ổn định, huy động nguồn lực bên ngoài cho phát.",
      "Tạo dựng liên minh quân sự để sẵn sàng tham gia các cuộc xung đột quốc.",
      "Đóng cửa các cửa khẩu biên giới để ngăn chặn sự xâm nhập của văn hóa.",
      "Chỉ ưu tiên phát triển quan hệ với các quốc gia nằm trong khối khu vực."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Ngoại giao tiên phong giữ vững môi trường hòa bình, ổn định, bảo vệ Tổ quốc từ sớm từ xa, tranh thủ nguồn lực cho phát triển.",
    trickDetails: {
      whyTrapped: "Nhầm ngoại giao tạo liên minh quân sự.",
      trickWord: "Giữ vững môi trường HÒA BÌNH, ỔN ĐỊNH",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Ngoại giao = Giữ vững hòa bình ổn định."
    }
  },
  {
    id: "lsd-c3-tr2-046",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Yếu tố quyết định thắng lợi của công cuộc Đổi mới qua các thời kỳ là gì?",
    options: [
      "Sự lãnh đạo đúng đắn, bản lĩnh chính trị và sự gắn bó máu thịt của Đảng với Dân.",
      "Sự hỗ trợ tài chính không hoàn lại tuyệt đối từ các ngân hàng quốc tế.",
      "Sự phong phú tuyệt đối của tài nguyên khoáng sản thiên nhiên đất nước.",
      "Sự tự điều chỉnh tự phát của các quy luật kinh tế thị trường tự do."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Nhân tố quyết định mọi thắng lợi của Đổi mới là sự lãnh đạo đúng đắn của Đảng Cộng sản Việt Nam và lòng tin, sự đồng lòng của Nhân dân.",
    trickDetails: {
      whyTrapped: "Nhầm sự tự điều chỉnh thị trường tự do.",
      trickWord: "Sự lãnh đạo đúng đắn của ĐẢNG + Gắn bó với DÂN",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Bài học kinh nghiệm.",
      tip: "Quyết định Đổi mới = Sự lãnh đạo của Đảng."
    }
  },
  {
    id: "lsd-c3-tr2-047",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Chủ trương Đổi mới mô hình tăng trưởng kinh tế hiện nay của nước ta dựa trên điều gì?",
    options: [
      "Chuyển từ phát triển chiều rộng sang chiều sâu, dựa vào năng suất và KH-CN.",
      "Tiếp tục dựa vào khai thác tài nguyên thô và lao động giá rẻ như trước.",
      "Tăng cường vay nợ nước ngoài để đầu tư mở rộng các nhà máy sản xuất.",
      "Dừng hoàn toàn sản xuất công nghiệp để tập trung phát triển dịch vụ."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đổi mới mô hình tăng trưởng: Chuyển từ phát triển theo chiều rộng (tăng vốn, tài nguyên, lao động giá rẻ) sang phát triển theo chiều sâu (năng suất lao động, ứng dụng KH-CN, đổi mới sáng tạo).",
    trickDetails: {
      whyTrapped: "Nhầm tiếp tục dựa vào khai thác tài nguyên thô.",
      trickWord: "Chuyển từ chiều rộng sang CHIỀU SÂU + KH-CN",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Đổi mới tăng trưởng = Phát triển chiều sâu."
    }
  },
  {
    id: "lsd-c3-tr2-048",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Bản chất của nguyên tắc 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng' là gì?",
    options: [
      "Nhân dân vừa là trung tâm, vừa là chủ thể và là người hưởng thụ thành quả Đổi mới.",
      "Nhân dân chỉ có nghĩa vụ đóng góp tài chính mà không được thụ hưởng kết quả.",
      "Nhân dân chỉ được tham gia ý kiến ở cấp cơ sở xã phường không được bàn.",
      "Chính sách ưu đãi chỉ dành riêng cho các tầng lớp tư sản doanh nhân làm."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Mọi đường lối Đổi mới phải xuất phát từ nguyện vọng, quyền và lợi ích hợp pháp của Nhân dân, Nhân dân là người thụ hưởng thành quả.",
    trickDetails: {
      whyTrapped: "Nhầm dân chỉ có nghĩa vụ đóng góp.",
      trickWord: "Dân là trung tâm, chủ thể và NGƯỜI THỤ HƯỞNG",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Mục II.3.",
      tip: "Dân thụ hưởng = Nhân dân làm chủ thực chất."
    }
  },
  {
    id: "lsd-c3-tr2-049",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Ý nghĩa của việc kiên định nền tảng tư tưởng của Đảng trong thời kỳ Đổi mới là gì?",
    options: [
      "Giữ vững bản chất cách mạng của Đảng, không chệch hướng, không hoang mang nghi.",
      "Khép kín tư tưởng tuyệt đối không tiếp thu tri thức văn minh nhân loại.",
      "Duy trì cơ chế quan liêu bao cấp duy ý chí như thời kỳ trước năm 1986.",
      "Bắt buộc toàn bộ người dân phải nghiên cứu chuyên sâu các giáo trình."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Kiên định Chủ nghĩa Mác - Lênin, Tư tưởng Hồ Chí Minh giúp Đảng giữ vững định hướng XHCN, không bị chao đảo trước các biến động địa chính trị.",
    trickDetails: {
      whyTrapped: "Dễ nhầm là khép kín tư tưởng.",
      trickWord: "Giữ vững định hướng, không chao đảo nghi ngờ",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Bài học kinh nghiệm.",
      tip: "Kiên định nền tảng = Giữ vững bản chất cách mạng."
    }
  },
  {
    id: "lsd-c3-tr2-050",
    trickSet: 2,
    sectionId: "lsd3-sec-2",
    subsectionId: "lsd3-sub-2-2",
    question: "Thông điệp cốt lõi của Chương III Môn Lịch Sử Đảng đối với thế hệ trẻ hôm nay là gì?",
    options: [
      "Tin tưởng vào sự lãnh đạo của Đảng, nỗ lực học tập sáng tạo cống hiến cho đất.",
      "Ỷ lại vào những thành tựu Đổi mới của thế hệ trước mà không cần nỗ lực.",
      "Chỉ quan tâm đến lợi ích kinh tế cá nhân bỏ qua các trách nhiệm xã hội.",
      "Hoài nghi vào con đường đi lên chủ nghĩa xã hội mà Đảng và Bác Hồ đã chọn."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Thế hệ trẻ cần kế thừa truyền thống cách mạng, tự hào về thành tựu Đổi mới, phát huy khát vọng cống hiến xây dựng đất nước hùng cường.",
    trickDetails: {
      whyTrapped: "Bẫy từ 'ỷ lại' hay 'chỉ quan tâm lợi ích cá nhân'.",
      trickWord: "Tin tưởng lãnh đạo của Đảng + Nỗ lực sáng tạo cống hiến",
      citation: "Giáo trình Lịch sử Đảng — Chương III, Kết luận toàn văn.",
      tip: "Thông điệp thế hệ trẻ = Nỗ lực sáng tạo cống hiến."
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
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM BẪY (TRICK SET 2): CHƯƠNG III LỊCH SỬ ĐẢNG (1975 ĐẾN NAY)
   Mã Bộ Đề: questions-lsd-chuong-3-trick2.js
   Số lượng: 50 câu bẫy tư duy Vận dụng cao (100% có trickDetails)
   ============================================================ */

export const lsdChuong3Trick2 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-chuong-3-trick2.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-chuong-3-trick2.js");
}
