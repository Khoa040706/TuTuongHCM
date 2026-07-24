import fs from "fs";

// 50 diverse trick questions for Chapter II Trick Set 1
const questions = [
  // 1-15: Giai đoạn 1945-1946 (Bảo vệ chính quyền cách mạng)
  {
    id: "lsd2-tr1-001",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-1",
    question: "Nhận định nào sau đây KHÔNG ĐÚNG khi nói về tình thế của nước ta sau Cách mạng Tháng Tám 1945?",
    options: [
      "Nguy cơ xâm lược từ các đế quốc đã hoàn toàn bị triệt tiêu triệt để.",
      "Chính quyền cách mạng còn non trẻ phải đối mặt với nạn đói khủng hếp.",
      "Hơn 90% dân số Việt Nam rơi vào tình trạng thất học và mù chữ.",
      "Nền tài chính quốc gia kiệt quệ với kho sản rỗng không có tiền."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Nhận định A SAI vì sau Cách mạng Tháng Tám, nước ta đứng trước nguy cơ xâm lược trở lại của thực dân Pháp và sự đe dọa của 20 vạn quân Tưởng.",
    trickDetails: {
      whyTrapped: "Học sinh dễ nhầm tưởng thành công của Cách mạng Tháng Tám đã loại bỏ hoàn toàn nguy cơ xâm lược.",
      trickWord: "Bẫy phủ định 'hoàn toàn bị triệt tiêu triệt để'",
      citation: "Giáo trình Lịch sử Đảng Cộng sản Việt Nam — Chương II, Mục I.1.",
      tip: "Ghi nhớ: Tình thế sau 1945 là 'Ngàn cân treo sợi tóc'."
    }
  },
  {
    id: "lsd2-tr1-002",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-1",
    question: "Điền cụm từ còn thiếu vào Chỉ thị Kháng chiến kiến quốc (25-11-1945): 'Cuộc cách mạng Đông Dương lúc này vẫn là cuộc [...]'.",
    options: [
      "cuộc cách mạng dân tộc giải phóng hướng tới độc lập hoàn toàn.",
      "cuộc cách mạng xã hội chủ nghĩa tiến thẳng lên nền kinh tế.",
      "cuộc cách mạng thổ địa cải cách ruộng đất cho nông dân nghèo.",
      "cuộc cách mạng dân chủ tư sản kiểu mới do giai cấp công nhân."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chỉ thị xác định: Cuộc cách mạng Đông Dương lúc này vẫn là cuộc cách mạng dân tộc giải phóng, khẩu hiệu vẫn là 'Dân tộc trên hết, Tổ quốc trên hết'.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm sang cách mạng XHCN hoặc cách mạng thổ địa.",
      trickWord: "Cách mạng dân tộc giải phóng",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Chỉ thị Kháng chiến kiến quốc.",
      tip: "Mẹo: 25-11-1945 vẫn ưu tiên giải phóng dân tộc."
    }
  },
  {
    id: "lsd2-tr1-003",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-1",
    question: "Bản chất của chủ trương 'Hoa - Việt thân thiện' đối với 20 vạn quân Tưởng Giới Thạch là gì?",
    options: [
      "Nhân nhượng có nguyên tắc về kinh tế và ghế chính trị hạn chế quấy phá.",
      "Thỏa hiệp vô điều kiện toàn bộ các yêu sách của quân Tưởng Giới Thạch.",
      "Liên minh quân sự chiến lược chống lại quân Pháp ở phía Nam đất nước.",
      "Dựa vào quân Tưởng để xóa bỏ các tổ chức phản động Việt Quốc Việt Cách."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Ta nhân nhượng quân Tưởng một số quyền lợi kinh tế và ghế Quốc hội nhưng giữ vững nguyên tắc độc lập và chủ quyền.",
    trickDetails: {
      whyTrapped: "Dễ nhầm sang thỏa hiệp vô điều kiện.",
      trickWord: "Nhân nhượng CÓ NGUYÊN TẮC",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.1.",
      tip: "Nhớ: Nhân nhượng Tưởng là CÓ NGUYÊN TẮC."
    }
  },
  {
    id: "lsd2-tr1-004",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-1",
    question: "Điểm khác biệt căn bản giữa Hiệp định Sơ bộ (6-3-1946) và Tạm ước (14-9-1946) là gì?",
    options: [
      "Hiệp định Sơ bộ thỏa thuận chính trị, Tạm ước nhượng bộ thêm kinh tế văn hóa.",
      "Hiệp định Sơ bộ hòa với quân Tưởng, Tạm ước hòa với thực dân Pháp xâm lược.",
      "Hiệp định Sơ bộ công nhận độc lập, Tạm ước công nhận Việt Nam tự do hoàn toàn.",
      "Hiệp định Sơ bộ do Pháp chủ động ký, Tạm ước do phía Việt Nam đề xuất trước."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hiệp định Sơ bộ giải quyết khung chính trị và quân sự; Tạm ước 14/9 nhân nhượng thêm quyền lợi kinh tế, văn hóa cho Pháp để kéo dài thời gian hòa hoãn.",
    trickDetails: {
      whyTrapped: "Học sinh dễ nhầm lẫn nội dung nhân nhượng của 2 văn bản.",
      trickWord: "Tạm ước 14/9 = Nhân nhượng thêm kinh tế, văn hóa",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.1.",
      tip: "Sơ bộ = Chính trị/quân sự; Tạm ước = Kinh tế/văn hóa."
    }
  },
  {
    id: "lsd2-tr1-005",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-1",
    question: "Mục đích quan trọng nhất của Đảng khi quyết định hòa hoãn với thực dân Pháp thời kỳ 6-3-1946 là gì?",
    options: [
      "Đuổi nhanh 20 vạn quân Tưởng về nước và tranh thủ thời gian chuẩn bị lực lượng.",
      "Nhờ quân Pháp tiêu diệt hoàn toàn các lực lượng phản động tay sai trong nước.",
      "Từ bỏ mục tiêu đấu tranh giải phóng dân tộc để chuyển sang hợp tác kinh tế.",
      "Gia nhập vào Khối Liên hiệp Pháp để nhận tài trợ tài chính không hoàn lại."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hòa với Pháp giúp ta đẩy 20 vạn quân Tưởng về nước, tránh cùng lúc đối phó với nhiều kẻ thù và có thêm thời gian củng cố lực lượng.",
    trickDetails: {
      whyTrapped: "Dễ nhầm B hoặc D.",
      trickWord: "Đuổi quân Tưởng + Tranh thủ thời gian",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.1.",
      tip: "Hòa Pháp ➔ Đuổi Tưởng ➔ Chuẩn bị kháng chiến."
    }
  },
  {
    id: "lsd2-tr1-006",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-1",
    question: "Phát biểu nào SAI khi đánh giá về ý nghĩa của Tổng tuyển cử bầu Quốc hội ngày 6-1-1946?",
    options: [
      "Quốc hội khóa I đã thông qua Cương lĩnh chính trị đầu tiên của Đảng ta.",
      "Khẳng định quyền làm chủ thực sự của nhân dân Việt Nam sau độc lập.",
      "Tạo cơ sở pháp lý chính thống hợp pháp cho Nhà nước Dân chủ Cộng hòa.",
      "Bầu ra Ban Thường trực Quốc hội và Chính phủ liên hiệp chính thức."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Phát biểu A SAI vì Cương lĩnh chính trị đầu tiên do Hội nghị thành lập Đảng (2/1930) thông qua, không phải Quốc hội.",
    trickDetails: {
      whyTrapped: "Dễ nhầm Cương lĩnh 1930 với Hiến pháp 1946 do Quốc hội thông qua.",
      trickWord: "Bẫy 'Cương lĩnh chính trị đầu tiên'",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.1.",
      tip: "Cương lĩnh = 1930; Hiến pháp = 11/1946."
    }
  },
  {
    id: "lsd2-tr1-007",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-1",
    question: "Điền từ thích hợp: 'Trong Hiệp định Sơ bộ (6-3-1946), Chính phủ Pháp công nhận Việt Nam là một quốc gia [...]'.",
    options: [
      "tự do nằm trong Khối Liên hiệp Pháp, có chính phủ và tài chính riêng.",
      "hoàn toàn độc lập tự chủ và không thuộc Khối Liên hiệp Pháp nữa.",
      "tự trị hưởng quy chế đặc biệt dưới sự bảo hộ của quân đội Pháp.",
      "thuộc địa kiểu mới được tự do trao đổi thương mại với thế giới."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Pháp chỉ công nhận Việt Nam là 'quốc gia tự do' (chưa phải 'độc lập hoàn toàn'), có chính phủ, nghị viện, quân đội và tài chính riêng.",
    trickDetails: {
      whyTrapped: "Học sinh rất hay nhầm từ 'độc lập' với 'tự do'.",
      trickWord: "Quốc gia TỰ DO (chưa phải ĐỘC LẬP)",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.1.",
      tip: "Sơ bộ 6-3-1946 = TỰ DO."
    }
  },
  {
    id: "lsd2-tr1-008",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-1",
    question: "Sách lược ngoại giao của Đảng đối với các kẻ thù giai đoạn 1945-1946 thể hiện bài học gì?",
    options: [
      "Cứng rắn về nguyên tắc độc lập, mềm dẻo linh hoạt về sách lược đối ngoại.",
      "Cứng rắn về sách lược ngoại giao, thỏa hiệp về nguyên tắc độc lập dân tộc.",
      "Đóng cửa kinh tế tuyệt đối không đối thoại với các nước tư bản xâm lược.",
      "Dựa hoàn toàn vào sự giúp đỡ của Liên Xô để giải quyết khủng hoảng ngoại."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đó là bài học 'Dĩ bất biến, ứng vạn biến': Cứng rắn về nguyên tắc độc lập, mềm dẻo về sách lược.",
    trickDetails: {
      whyTrapped: "Dễ nhầm đảo ngược nguyên tắc và sách lược.",
      trickWord: "Cứng rắn nguyên tắc, mềm dẻo sách lược",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.1.",
      tip: "Dĩ bất biến ứng vạn biến."
    }
  },
  {
    id: "lsd2-tr1-009",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-1",
    question: "Biện pháp cấp bách hàng đầu được Chính phủ đề ra để giải quyết nạn đói sau năm 1945 là gì?",
    options: [
      "Phát động phong trào 'Hũ gạo cứu đói', 'Ngày đồng tâm' và tăng gia sản xuất.",
      "Tịch thu toàn bộ tài sản của các đại địa chủ chi cho nông dân nghèo.",
      "Nhập khẩu gạo từ các nước Châu Âu bằng nguồn vốn vay không hoàn lại.",
      "Bắt buộc tất cả các gia đình phải nộp 50% sản lượng lúa thu hoạch."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chính phủ phát động nhường cơm xẻ áo, 'Hũ gạo cứu đói', 'Ngày đồng tâm' và tăng gia sản xuất ngay lập tức.",
    trickDetails: {
      whyTrapped: "Dễ nhầm B hoặc C.",
      trickWord: "Hũ gạo cứu đói + Tăng gia sản xuất",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.1.",
      tip: "Cứu đói = Hũ gạo cứu đói + Tăng gia sản xuất."
    }
  },
  {
    id: "lsd2-tr1-010",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-1",
    question: "Nhận định nào KHÔNG ĐÚNG về Tuần lễ vàng và Quỹ độc lập được phát động năm 1945?",
    options: [
      "Nhà nước bắt buộc người dân phải nộp toàn bộ vàng bạc cá nhân sở hữu.",
      "Thể hiện tinh thần yêu nước và sự tin tưởng tuyệt đối của dân với Đảng.",
      "Góp phần giải quyết khó khăn tài chính cấp bách của chính quyền non trẻ.",
      "Thu hút sự ủng hộ tự nguyện đóng góp hàng triệu đồng và hàng trăm cân vàng."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Nhận định A SAI vì Tuần lễ vàng là cuộc vận động tự nguyện hoàn toàn của nhân dân, không phải cưỡng chế.",
    trickDetails: {
      whyTrapped: "Bẫy từ 'bắt buộc nộp toàn bộ'.",
      trickWord: "TỰ NGUYỆN đóng góp (không bắt buộc)",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.1.",
      tip: "Tuần lễ vàng = Tự nguyện nhân dân."
    }
  },
  {
    id: "lsd2-tr1-011",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-1",
    question: "Khẩu hiệu đối ngoại được Đảng đề ra trong Chỉ thị Kháng chiến kiến quốc là gì?",
    options: [
      "Khẩu hiệu: 'Hoa - Việt thân thiện' và 'Độc lập về chính trị, hòa hoãn về kinh tế'.",
      "Khẩu hiệu: 'Đánh đuổi phát xít Nhật' và 'Thành lập chính quyền cách mạng'.",
      "Khẩu hiệu: 'Việt Nam muốn là bạn với tất cả các nước không phân biệt chế độ'.",
      "Khẩu hiệu: 'Đánh đổ địa chủ phong kiến chia ruộng đất cho toàn bộ nông dân'."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chỉ thị nêu rõ khẩu hiệu đối ngoại với quân Tưởng là 'Hoa - Việt thân thiện'.",
    trickDetails: {
      whyTrapped: "Dễ nhầm khẩu hiệu ĐH VII hoặc khẩu hiệu chống Nhật.",
      trickWord: "Hoa - Việt thân thiện",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Chỉ thị Kháng chiến kiến quốc.",
      tip: "Đối ngoại với Tưởng = Hoa-Việt thân thiện."
    }
  },
  {
    id: "lsd2-tr1-012",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-1",
    question: "Tài liệu nào lần đầu tiên khẳng định kẻ thù chính nguy hiểm nhất của ta là Pháp ở phía Nam?",
    options: [
      "Chỉ thị Kháng chiến kiến quốc ban hành ngày 25 tháng 11 năm 1945.",
      "Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh năm 1946.",
      "Tác phẩm 'Kháng chiến nhất định thắng lợi' của đồng chí Trường Chinh.",
      "Nghị quyết Hội nghị Trung ương 8 khóa I họp tại Pắc Bó năm 1941."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chỉ thị Kháng chiến kiến quốc (25/11/1945) là văn kiện đầu tiên xác định thực dân Pháp ở phía Nam là kẻ thù chính.",
    trickDetails: {
      whyTrapped: "Nhầm sang Lời kêu gọi toàn quốc kháng chiến 1946.",
      trickWord: "Chỉ thị Kháng chiến kiến quốc (25/11/1945)",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.1.",
      tip: "25/11/1945 = Kháng chiến kiến quốc."
    }
  },
  {
    id: "lsd2-tr1-013",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-1",
    question: "Nội dung nào SAI khi nói về kết quả giải quyết nạn dốt sau Cách mạng Tháng Tám?",
    options: [
      "Đến cuối năm 1946 toàn bộ 100% dân số Việt Nam đã biết đọc biết viết.",
      "Thành lập Nha Bình dân học vụ để diệt giặc dốt trên quy mô toàn quốc.",
      "Hàng triệu người dân lao động đã thoát khỏi nạn mù chữ chỉ sau 1 năm.",
      "Phong trào học tập diễn ra sôi nổi khắp các làng xã nông thôn urban."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Phương án A SAI vì sau 1 năm ta chỉ mới giúp hơn 2,5 triệu người biết đọc biết viết, chưa thể 100% dân số.",
    trickDetails: {
      whyTrapped: "Bẫy con số tuyệt đối '100% dân số'.",
      trickWord: "Bẫy 'tuyệt đối 100%'",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.1.",
      tip: "Sau 1 năm = 2,5 triệu người thoát mù chữ."
    }
  },
  {
    id: "lsd2-tr1-014",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-1",
    question: "Sự kiện nào đánh dấu bước lùi tạm thời về mặt pháp lý nhưng thắng lợi về mặt sách lược năm 1946?",
    options: [
      "Ký kết Hiệp định Sơ bộ (6-3-1946) và bản Tạm ước (14-9-1946) với Pháp.",
      "Nhượng 70 ghế Quốc hội không qua bầu cử cho lực lượng Việt Quốc Việt Cách.",
      "Chấp nhận tiền Quan kim Quốc phiếu của quân Tưởng Giới Thạch lưu hành.",
      "Tuyên bố tự giải tán Đảng Cộng sản Đông Dương để rút vào hoạt động bí mật."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hiệp định Sơ bộ và Tạm ước là bước lùi sách lược hòa hoãn với Pháp để bảo toàn lực lượng và đuổi Tưởng.",
    trickDetails: {
      whyTrapped: "Dễ nhầm D (giải tán Đảng là lùi về tổ chức).",
      trickWord: "Hiệp định Sơ bộ & Tạm ước 14/9",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.1.",
      tip: "Lùi pháp lý = Sơ bộ & Tạm ước."
    }
  },
  {
    id: "lsd2-tr1-015",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-1",
    question: "Chủ trương tự giải tán Đảng Cộng sản Đông Dương (11-11-1945) mang bản chất gì?",
    options: [
      "Rút vào hoạt động bí mật dưới tên Hội nghiên cứu Chủ nghĩa Mác ở Đông Dương.",
      "Giải tán hoàn toàn tổ chức Đảng và ngừng sự lãnh đạo cách mạng Việt Nam.",
      "Chuyển toàn bộ đảng viên sang sinh hoạt trong các tổ chức chính trị tư sản.",
      "Sáp nhập Đảng Cộng sản vào Quốc dân Đảng của quân Tưởng Giới Thạch."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đảng tuyên bố 'tự giải tán' nhưng thực chất là rút vào hoạt động bí mật, thành lập 'Hội nghiên cứu chủ nghĩa Mác ở Đông Dương' để tiếp tục lãnh đạo.",
    trickDetails: {
      whyTrapped: "Bẫy từ 'tự giải tán' ➔ tưởng là giải tán thật.",
      trickWord: "Rút vào hoạt động BÍ MẬT",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.1.",
      tip: "Tự giải tán = Rút vào bí mật."
    }
  },

  // 16-33: Giai đoạn 1946-1954 (Kháng chiến chống Pháp)
  {
    id: "lsd2-tr1-016",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Nguyên nhân trực tiếp dẫn đến bùng nổ Cuộc kháng chiến toàn quốc chống Pháp (19-12-1946) là gì?",
    options: [
      "Pháp gửi tối hậu thư đòi giải tán lực lượng tự vệ và giao quyền kiểm soát Hà Nội.",
      "Pháp khiêu khích đánh chiếm Hải Phòng và Lạng Sơn vào tháng 11 năm 1946.",
      "Pháp tuyên bố hủy bỏ toàn bộ Hiệp định Sơ bộ và Tạm ước đã ký kết trước đó.",
      "Quân Pháp bất ngờ xả súng vào nhân dân miền Nam tham gia mít tinh hòa bình."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Ngày 18/12/1946, Pháp gửi tối hậu thư đòi giải tán tự vệ Hà Nội, giao kiểm soát thủ đô trước ngày 20/12. Đây là nguyên nhân trực tiếp thúc đẩy Đảng quyết định bùng nổ kháng chiến.",
    trickDetails: {
      whyTrapped: "Học sinh dễ nhầm vụ Hải Phòng (tháng 11) là nguyên nhân trực tiếp.",
      trickWord: "Tối hậu thư ngày 18/12/1946",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.2.",
      tip: "Trực tiếp 19/12/1946 = Tối hậu thư của Pháp."
    }
  },
  {
    id: "lsd2-tr1-017",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Nội dung nào KHÔNG ĐÚNG về đường lối kháng chiến chống Pháp (1946-1954)?",
    options: [
      "Ưu tiên công nghiệp hóa nặng để tự sản xuất vũ khí hiện đại ngay từ đầu.",
      "Kháng chiến toàn dân, lấy lực lượng vũ trang nhân dân làm nòng cốt.",
      "Kháng chiến toàn diện trên tất cả các mặt trận quân sự, chính trị, kinh tế.",
      "Kháng chiến lâu dài và dựa vào sức mình là chính để chuyển hóa lực lượng."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đường lối kháng chiến: Toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính. Không có ưu tiên công nghiệp nặng ngay từ đầu.",
    trickDetails: {
      whyTrapped: "Bẫy từ 'ưu tiên công nghiệp nặng'.",
      trickWord: "Toàn dân, toàn diện, lâu dài, tự lực cánh sinh",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.2.",
      tip: "Đường lối kháng chiến chống Pháp = 4 trụ cột."
    }
  },
  {
    id: "lsd2-tr1-018",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Điền cụm từ còn thiếu trong tác phẩm 'Kháng chiến nhất định thắng lợi': 'Độc lập dân tộc gắn liền với [...]'.",
    options: [
      "tự lực cánh sinh và sự ủng hộ của nhân dân yêu chuộng hòa bình.",
      "cuộc cách mạng thổ địa chia ruộng đất tuyệt đối cho nông dân nghèo.",
      "việc xây dựng xong nền công nghiệp nặng hiện đại ở vùng căn cứ.",
      "việc gia nhập ngay vào khối các quốc gia xã hội chủ nghĩa Châu Âu."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Tác phẩm của Trường Chinh nhấn mạnh kháng chiến dựa vào sức mình là chính, phát huy nội lực.",
    trickDetails: {
      whyTrapped: "Nhầm sang cách mạng thổ địa.",
      trickWord: "Tự lực cánh sinh",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.2.",
      tip: "Kháng chiến nhất định thắng lợi = Trường Chinh."
    }
  },
  {
    id: "lsd2-tr1-019",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Chiến dịch nào đánh dấu lần đầu tiên ta chủ động tiến công quân Pháp trên chiến trường chính?",
    options: [
      "Chiến dịch Biên giới Thu - Đông năm 1950 tại khu vực đường số 4.",
      "Chiến dịch Việt Bắc Thu - Đông năm 1947 bảo vệ cơ quan đầu não.",
      "Chiến dịch Điện Biên Phủ lịch sử năm 1954 tiêu diệt tập đoàn điểm.",
      "Chiến dịch Thượng Lào năm 1953 mở rộng vùng giải phóng liên hoàn."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chiến dịch Việt Bắc 1947 là chiến dịch phản công bảo vệ; Chiến dịch Biên giới 1950 là chiến dịch tiến công lớn đầu tiên ta chủ động mở.",
    trickDetails: {
      whyTrapped: "Dễ nhầm Việt Bắc 1947 (là chiến dịch phản công) với Biên giới 1950 (tiến công).",
      trickWord: "Biên giới 1950 = Lần đầu CHỦ ĐỘNG TIẾN CÔNG",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.2.",
      tip: "1947 = Phản công; 1950 = Chủ động tiến công."
    }
  },
  {
    id: "lsd2-tr1-020",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Sự kiện lịch sử quan trọng đánh dấu Đảng ra hoạt động công khai với tên mới năm 1951 là gì?",
    options: [
      "Đại hội đại biểu toàn quốc lần thứ II của Đảng họp tại Tuyên Quang.",
      "Đại hội đại biểu toàn quốc lần thứ I của Đảng họp tại Ma Cao Trung Quốc.",
      "Đại hội đại biểu toàn quốc lần thứ III của Đảng họp tại Thủ đô Hà Nội.",
      "Hội nghị thành lập Đảng họp tại Cửu Long Hương Cảng Trung Quốc."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đại hội II (tháng 2/1951) quyết định Đảng ra hoạt động công khai với tên gọi Đảng Lao động Việt Nam.",
    trickDetails: {
      whyTrapped: "Nhầm tên gọi Đảng Lao động Việt Nam đổi từ ĐH I hay III.",
      trickWord: "Đại hội II (2/1951) = Đảng Lao động Việt Nam",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.2.",
      tip: "ĐH II (1951) = Đổi tên Đảng Lao động Việt Nam."
    }
  },
  {
    id: "lsd2-tr1-021",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Tên gọi tờ báo chính thức là cơ quan ngôn luận của Trung ương Đảng từ Đại hội II (1951) là gì?",
    options: [
      "Báo Nhân Dân thay thế cho tờ báo Sự Thật phát hành trước đó.",
      "Báo Thanh Niên do Nguyễn Ái Quốc sáng lập tại Quảng Châu.",
      "Báo Cờ Giải Phóng cơ quan ngôn luận của Tổng bộ Việt Minh.",
      "Báo Lao Động cơ quan ngôn luận của Tổng Liên đoàn Lao động."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đại hội II (1951) quyết định xuất bản báo Nhân Dân làm cơ quan ngôn luận của Trung ương Đảng.",
    trickDetails: {
      whyTrapped: "Dễ nhầm báo Sự Thật hay Cờ Giải Phóng.",
      trickWord: "Báo Nhân Dân (từ 1951)",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.2.",
      tip: "1951 = Báo Nhân Dân."
    }
  },
  {
    id: "lsd2-tr1-022",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Điểm điều chỉnh phương châm tác chiến quyết định thắng lợi trong Chiến dịch Điện Biên Phủ là gì?",
    options: [
      "Chuyển từ phương châm 'Đánh nhanh thắng nhanh' sang 'Đánh chắc tiến chắc'.",
      "Chuyển từ phương châm 'Đánh chắc tiến chắc' sang 'Đánh nhanh thắng nhanh'.",
      "Chuyển từ phương châm 'Vòng thúng thắt chặt' sang 'Tiến công bóc vỏ'.",
      "Chuyển từ phương châm 'Đánh du kích càn quét' sang 'Đánh tập đoàn điểm'."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đại tướng Võ Nguyên Giáp quyết định thay đổi phương châm từ 'Đánh nhanh thắng nhanh' sang 'Đánh chắc tiến chắc'.",
    trickDetails: {
      whyTrapped: "Dễ nhầm đảo ngược giữa hai phương châm tác chiến.",
      trickWord: "Đánh nhanh thắng nhanh ➔ Đánh chắc tiến chắc",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.3.",
      tip: "Điện Biên Phủ = ĐÁNH CHẮC TIẾN CHẮC."
    }
  },
  {
    id: "lsd2-tr1-023",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Ý nghĩa lịch sử trực tiếp của Hiệp định Giơ-ne-vơ năm 1954 đối với miền Bắc là gì?",
    options: [
      "Miền Bắc hoàn toàn được giải phóng, tiến lên xây dựng chủ nghĩa xã hội.",
      "Giải phóng hoàn toàn cả hai miền Nam - Bắc thống nhất đất nước ngay.",
      "Chính phủ Pháp phải bồi thường toàn bộ chiến phí cho nhân dân Việt Nam.",
      "Mỹ công nhận chủ quyền độc lập của ba nước Đông Dương ngay năm 1954."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hiệp định Giơ-ne-vơ 1954 giải phóng hoàn toàn miền Bắc, làm căn cứ hậu phương cho cách mạng cả nước.",
    trickDetails: {
      whyTrapped: "Bẫy từ 'giải phóng cả 2 miền' (thực tế miền Nam vẫn bị chia cắt).",
      trickWord: "Giải phóng hoàn toàn MIỀN BẮC",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.3.",
      tip: "Giơ-ne-vơ 1954 = Giải phóng Miền Bắc."
    }
  },
  {
    id: "lsd2-tr1-024",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Phát biểu nào SAI khi nói về Cương lĩnh Lao động Việt Nam được thông qua tại ĐH II (1951)?",
    options: [
      "Xác định xã hội Việt Nam lúc này là xã hội hoàn toàn tư bản chủ nghĩa.",
      "Xác định đối tượng của cách mạng là thực dân Pháp và phong kiến phản động.",
      "Xác định nhiệm vụ cách mạng là đánh đuổi xâm lược và xóa bỏ phong kiến.",
      "Xác định con đường tiến lên CNXH qua nhiều bước quá độ trung gian."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Phương án A SAI vì Cương lĩnh ĐH II xác định xã hội Việt Nam gồm 3 tính chất: 'dân chủ nhân dân, một phần thực dân và nửa phong kiến'.",
    trickDetails: {
      whyTrapped: "Bẫy từ 'hoàn toàn tư bản chủ nghĩa'.",
      trickWord: "Bẫy tính chất xã hội Việt Nam 1951",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.2.",
      tip: "1951 = Xã hội Dân chủ nhân dân, một phần thực dân nửa phong kiến."
    }
  },
  {
    id: "lsd2-tr1-025",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Kế hoạch quân sự nào của Pháp bị phá phá sản hoàn toàn sau Chiến dịch Biên giới 1950?",
    options: [
      "Kế hoạch Rơ-ve khóa chặt biên giới Việt - Trung của thực dân Pháp.",
      "Kế hoạch Na-va nhằm lấy lại thế chủ động chiến lược trong 18 tháng.",
      "Kế hoạch Bô-nơ đánh chiếm toàn bộ vùng đồng bằng Bắc Bộ Việt Nam.",
      "Kế hoạch Đờ Lát đơ Tát-si-nhi xây dựng tuyến công sự xi măng sắt."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chiến dịch Biên giới 1950 khai thông biên giới Việt - Trung, làm phá sản hoàn toàn Kế hoạch Rơ-ve.",
    trickDetails: {
      whyTrapped: "Nhầm giữa Kế hoạch Rơ-ve (1950) và Na-va (1953).",
      trickWord: "Biên giới 1950 = Phá sản Kế hoạch RƠ-VE",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.2.",
      tip: "1950 = Rơ-ve; 1954 = Na-va."
    }
  },
  {
    id: "lsd2-tr1-026",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Khẩu hiệu tác chiến xuyên suốt trong Lời kêu gọi toàn quốc kháng chiến 1946 là gì?",
    options: [
      "Thà thà hy sinh tất cả, chứ nhất định không chịu mất nước, không làm nô lệ.",
      "Đánh cho Mỹ cút, đánh cho ngụy nhào, giải phóng hoàn toàn miền Nam.",
      "Nhất tề đứng lên tiêu diệt phát xít Nhật giành chính quyền về tay dân.",
      "Tất cả cho tiền tuyến, tất cả để chiến thắng tập đoàn điểm Điện Biên."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Lời kêu gọi của Bác Hồ: 'Thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ'.",
    trickDetails: {
      whyTrapped: "Dễ nhầm khẩu hiệu chống Mỹ hoặc chống Nhật.",
      trickWord: "Thà hy sinh tất cả... không chịu làm nô lệ",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Lời kêu gọi toàn quốc kháng chiến.",
      tip: "19/12/1946 = Thà hy sinh tất cả."
    }
  },
  {
    id: "lsd2-tr1-027",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Văn kiện nào được coi là bản phác thảo hoàn chỉnh nhất về đường lối kháng chiến chống Pháp?",
    options: [
      "Tác phẩm 'Kháng chiến nhất định thắng lợi' của đồng chí Trường Chinh.",
      "Chỉ thị Kháng chiến kiến quốc ban hành ngày 25 tháng 11 năm 1945.",
      "Bản Tạm ước ngày 14 tháng 9 năm 1946 do Chủ tịch Hồ Chí Minh ký.",
      "Nghị quyết Đại hội đại biểu toàn quốc lần thứ II họp tháng 2 năm 1951."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Tác phẩm 'Kháng chiến nhất định thắng lợi' giải thích và hệ thống hóa toàn bộ đường lối kháng chiến chống Pháp.",
    trickDetails: {
      whyTrapped: "Dễ nhầm sang Chỉ thị Kháng chiến kiến quốc.",
      trickWord: "Tác phẩm Kháng chiến nhất định thắng lợi",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.2.",
      tip: "Đường lối chống Pháp = Trường Chinh."
    }
  },
  {
    id: "lsd2-tr1-028",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Chiến dịch quân sự nào đã đập tan Kế hoạch Na-va và buộc Pháp ký Hiệp định Giơ-ne-vơ?",
    options: [
      "Chiến dịch Điện Biên Phủ Đông - Xuân năm 1953 - 1954 lịch sử.",
      "Chiến dịch Biên giới Thu - Đông năm 1950 mở rộng vùng căn cứ.",
      "Chiến dịch Việt Bắc Thu - Đông năm 1947 bẻ gãy gọng kìm Pháp.",
      "Chiến dịch Đường 9 - Nam Lào năm 1971 đánh bại quân ngụy Saigon."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chiến thắng Điện Biên Phủ (5/1954) đập tan hoàn toàn Kế hoạch Na-va, giáng đòn quyết định buộc Pháp ký Giơ-ne-vơ.",
    trickDetails: {
      whyTrapped: "Dễ nhầm giữa các chiến dịch lớn.",
      trickWord: "Đập tan Kế hoạch NA-VA = Điện Biên Phủ",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.3.",
      tip: "1954 Điện Biên Phủ = Phá Na-va."
    }
  },
  {
    id: "lsd2-tr1-029",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Sự kiện nào đánh dấu hậu phương miền Bắc bắt đầu chi viện lớn cho tiền tuyến chống Pháp?",
    options: [
      "Sau chiến thắng Biên giới 1950 khai thông con đường quốc tế.",
      "Ngay sau khi ký kết Hiệp định Sơ bộ ngày 6 tháng 3 năm 1946.",
      "Sau khi Pháp gửi tối hậu thư đòi giải tán lực lượng tự vệ Hà Nội.",
      "Ngay sau Chiến dịch Việt Bắc Thu - Đông kết thúc năm 1947."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chiến thắng Biên giới 1950 khai thông biên giới Việt - Trung, nối liền với các nước XHCN, nhận viện trợ quốc tế lớn.",
    trickDetails: {
      whyTrapped: "Nhầm sang mốc Việt Bắc 1947.",
      trickWord: "Biên giới 1950 = Khai thông viện trợ quốc tế",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.2.",
      tip: "1950 = Khai thông quốc tế."
    }
  },
  {
    id: "lsd2-tr1-030",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Địa điểm diễn ra Đại hội II của Đảng (2-1951) thuộc vùng căn cứ địa nào?",
    options: [
      "Xã Vinh Quang, huyện Chiêm Hóa, tỉnh Tuyên Quang (Căn cứ Việt Bắc).",
      "Xã Tân Trào, huyện Sơn Dương, tỉnh Tuyên Quang (Thủ đô khu giải phóng).",
      "Pắc Bó, huyện Hà Quảng, tỉnh Cao Bằng (Nơi Bác Hồ về nước 1941).",
      "Hội trường Ba Đình, Thủ đô Hà Nội (Nơi họp các kỳ Đại hội sau này)."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đại hội II họp tại xã Vinh Quang, huyện Chiêm Hóa, tỉnh Tuyên Quang.",
    trickDetails: {
      whyTrapped: "Dễ nhầm giữa Vinh Quang (Chiêm Hóa) và Tân Trào (Sơn Dương).",
      trickWord: "Vinh Quang, Chiêm Hóa, Tuyên Quang",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.2.",
      tip: "ĐH II = Chiêm Hóa, Tuyên Quang."
    }
  },
  {
    id: "lsd2-tr1-031",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Chủ tịch Hồ Chí Minh gọi chiến thắng nào là 'Cái mốc bằng vàng trong lịch sử'?",
    options: [
      "Chiến thắng Điện Biên Phủ ngày 7 tháng 5 năm 1954 lịch sử.",
      "Chiến thắng lịch sử Cách mạng Tháng Tám năm 1945 vĩ đại.",
      "Chiến thắng Biên giới Thu - Đông năm 1950 khai thông biên giới.",
      "Đại thắng Mùa Xuân năm 1975 giải phóng hoàn toàn Miền Nam."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Bác Hồ đánh giá: 'Điện Biên Phủ như là một cái mốc bằng vàng trong lịch sử. Nó ghi nhận sự sụp đổ của chủ nghĩa thực dân'.",
    trickDetails: {
      whyTrapped: "Dễ nhầm sang Cách mạng Tháng Tám hay 1975.",
      trickWord: "Mốc bằng vàng = Điện Biên Phủ 1954",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.3.",
      tip: "Mốc bằng vàng = Điện Biên Phủ."
    }
  },
  {
    id: "lsd2-tr1-032",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Nhiệm vụ hàng đầu của cách mạng Việt Nam được Cương lĩnh ĐH II (1951) đề ra là gì?",
    options: [
      "Hoàn thành giải phóng dân tộc, đánh đuổi thực dân Pháp xâm lược.",
      "Thực hiện ngay việc cải cách ruộng đất triệt để cho toàn bộ nông dân.",
      "Tiến thẳng lên xây dựng CNXH bỏ qua các bước quá độ trung gian.",
      "Xóa bỏ hoàn toàn các thành phần kinh tế tư sản dân tộc trong nước."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Nhiệm vụ hàng đầu vẫn là hoàn thành giải phóng dân tộc (đánh đuổi thực dân Pháp xâm lược và can thiệp Mỹ).",
    trickDetails: {
      whyTrapped: "Dễ nhầm sang nhiệm vụ cải cách ruộng đất.",
      trickWord: "Giải phóng dân tộc là HÀNG ĐẦU",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.2.",
      tip: "1951 = Giải phóng dân tộc số 1."
    }
  },
  {
    id: "lsd2-tr1-033",
    trickSet: 1,
    sectionId: "lsd2-sec-1",
    subsectionId: "lsd2-sub-1-2",
    question: "Hiệp định Giơ-ne-vơ 1954 lấy vĩ tuyến nào làm ranh giới quân sự tạm thời?",
    options: [
      "Vĩ tuyến 17 (thuộc sông Bến Hải, tỉnh Quảng Trị) phân chia hai miền.",
      "Vĩ tuyến 16 (thuộc khu vực Đà Nẵng) phân chia hai miền quân sự.",
      "Vĩ tuyến 38 (thuộc bán đảo Triều Tiên) làm ranh giới quân sự tạm thời.",
      "Vĩ tuyến 13 (thuộc tỉnh Bình Định) phân chia hai vùng tập kết quân."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hiệp định Giơ-ne-vơ lấy vĩ tuyến 17 làm ranh giới quân sự tạm thời để tái bố trí lực lượng.",
    trickDetails: {
      whyTrapped: "Dễ nhầm vĩ tuyến 16 (ranh giới giải giáp quân Nhật năm 1945).",
      trickWord: "Vĩ tuyến 17 (Sông Bến Hải)",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục I.3.",
      tip: "Giơ-ne-vơ 1954 = Vĩ tuyến 17."
    }
  },

  // 34-50: Giai đoạn 1954-1975 (Kháng chiến chống Mỹ)
  {
    id: "lsd2-tr1-034",
    trickSet: 1,
    sectionId: "lsd2-sec-2",
    subsectionId: "lsd2-sub-2-1",
    question: "Điểm đảo ngược nguy hiểm học sinh hay nhầm về vị trí chiến lược hai miền tại ĐH III (1960) là gì?",
    options: [
      "Miền Bắc quyết định nhất; Miền Nam quyết định trực tiếp đến cách mạng.",
      "Miền Bắc quyết định trực tiếp; Miền Nam quyết định nhất đến cách mạng.",
      "Cả hai miền đều giữ vai trò quyết định trực tiếp như nhau trong chiến.",
      "Cả hai miền đều giữ vai trò quyết định nhất như nhau trong cuộc chiến."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "ĐH III (9/1960) xác định: Miền Bắc giữ vai trò 'quyết định nhất'; Miền Nam giữ vai trò 'quyết định trực tiếp'.",
    trickDetails: {
      whyTrapped: "Học sinh rất hay nhầm lẫn đảo ngược hai cụm từ vai trò.",
      trickWord: "Bắc = QUYẾT ĐỊNH NHẤT; Nam = QUYẾT ĐỊNH TRỰC TIẾP",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục II.1.",
      tip: "Mẹo: Bắc = Nhất; Nam = Trực tiếp."
    }
  },
  {
    id: "lsd2-tr1-035",
    trickSet: 1,
    sectionId: "lsd2-sec-2",
    subsectionId: "lsd2-sub-2-1",
    question: "Điểm khác biệt cốt lõi về lực lượng nòng cốt giữa 'Chiến tranh đặc biệt' và 'Chiến tranh cục bộ' là gì?",
    options: [
      "Chiến tranh đặc biệt dùng quân ngụy; Chiến tranh cục bộ dùng quân Mỹ nòng cốt.",
      "Chiến tranh đặc biệt dùng quân Mỹ; Chiến tranh cục bộ dùng quân ngụy nòng cốt.",
      "Chiến tranh đặc biệt dùng hải quân; Chiến tranh cục bộ dùng không quân Mỹ.",
      "Chiến tranh đặc biệt dùng chốt điểm; Chiến tranh cục bộ dùng rào chiến lược."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chiến tranh đặc biệt: Lực lượng nòng cốt là Quân đội ngụy Saigon + Cố vấn Mỹ. Chiến tranh cục bộ: Lực lượng nòng cốt là Quân viễn chinh Mỹ trực tiếp tham chiến.",
    trickDetails: {
      whyTrapped: "Dễ nhầm lực lượng chiến đấu nòng cốt giữa 2 chiến lược.",
      trickWord: "Đặc biệt = Quân Ngụy; Cục bộ = Quân MỸ",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục II.1 & II.2.",
      tip: "Đặc biệt = Ngụy; Cục bộ = Mỹ."
    }
  },
  {
    id: "lsd2-tr1-036",
    trickSet: 1,
    sectionId: "lsd2-sec-2",
    subsectionId: "lsd2-sub-2-1",
    question: "Nghị quyết Trung ương 15 khóa II (tháng 1-1959) có ý nghĩa bước ngoặt nào đối với miền Nam?",
    options: [
      "Cho phép nhân dân miền Nam sử dụng bạo lực cách mạng để tự giải phóng.",
      "Bắt buộc nhân dân miền Nam chỉ đấu tranh hòa bình đòi thi hành Hiệp định.",
      "Yêu cầu rút toàn bộ lực lượng vũ trang ở miền Nam ra hậu phương miền Bắc.",
      "Tuyên bố thành lập ngay Chính phủ Lâm thời Cộng hòa miền Nam Việt Nam."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "NQTƯ 15 (1/1959) mở đường cho cách mạng miền Nam sử dụng bạo lực cách mạng, kết hợp đấu tranh chính trị với vũ trang, dẫn tới Phong trào Đồng khởi.",
    trickDetails: {
      whyTrapped: "Dễ nhầm NQTƯ 15 vẫn bắt buộc đấu tranh hòa bình.",
      trickWord: "NQTƯ 15 (1/1959) = Chuyển sang BẠO LỰC CÁCH MẠNG",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục II.1.",
      tip: "15 (1959) = Bạo lực cách mạng ➔ Đồng khởi."
    }
  },
  {
    id: "lsd2-tr1-037",
    trickSet: 1,
    sectionId: "lsd2-sec-2",
    subsectionId: "lsd2-sub-2-1",
    question: "Phong trào đấu tranh nào mở đầu cho bước phát triển nhảy vọt của cách mạng miền Nam (1959-1960)?",
    options: [
      "Phong trào 'Đồng khởi' bắt đầu bùng nổ mạnh mẽ tại tỉnh Bến Tre.",
      "Cuộc Tổng tiến công và nổi dậy Mậu Thân năm 1968 trên toàn miền Nam.",
      "Phong trào 'Thi đua Ấp Bắc giết giặc lập công' của quân dân Tiền Giang.",
      "Cuộc Tiến công chiến lược năm 1972 chọc thủng ba tuyến phòng thủ Mỹ."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Phong trào Đồng khởi (1959-1960) mà đỉnh cao ở Bến Tre chuyển cách mạng miền Nam từ giữ giữ lực lượng sang thế tiến công.",
    trickDetails: {
      whyTrapped: "Dễ nhầm Ấp Bắc hay Mậu Thân 68.",
      trickWord: "Phong trào ĐỒNG KHỞI (1959-1960)",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục II.1.",
      tip: "Đồng khởi Bến Tre."
    }
  },
  {
    id: "lsd2-tr1-038",
    trickSet: 1,
    sectionId: "lsd2-sec-2",
    subsectionId: "lsd2-sub-2-1",
    question: "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được thành lập vào ngày tháng năm nào?",
    options: [
      "Thành lập ngày 20 tháng 12 năm 1960 tại vùng giải phóng Tây Ninh.",
      "Thành lập ngày 10 tháng 9 năm 1955 tại Thủ đô Hà Nội miền Bắc.",
      "Thành lập ngày 6 tháng 6 năm 1969 tại căn cứ cách mạng miền Nam.",
      "Thành lập ngày 15 tháng 2 năm 1961 hợp nhất các lực lượng vũ trang."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam thành lập ngày 20/12/1960.",
    trickDetails: {
      whyTrapped: "Nhầm ngày thành lập Chính phủ lâm thời (6/6/1969).",
      trickWord: "20/12/1960 = Mặt trận Giải phóng miền Nam",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục II.1.",
      tip: "20/12/1960 = Mặt trận Giải phóng."
    }
  },
  {
    id: "lsd2-tr1-039",
    trickSet: 1,
    sectionId: "lsd2-sec-2",
    subsectionId: "lsd2-sub-2-2",
    question: "Xương sống của chiến lược 'Chiến tranh đặc biệt' mà Mỹ và chính quyền Ngụy triển khai là gì?",
    options: [
      "Chương trình dồn dân lập 'Ấp chiến lược' để tách dân khỏi cách mạng.",
      "Chiến thuật 'Tìm và diệt' kết hợp 'Bình định' bằng quân viễn chinh Mỹ.",
      "Chiến dịch ném bom phá hoại miền Bắc bằng không quân và hải quân.",
      "Chính sách 'Dùng người Việt đánh người Việt, người Đông Dương đánh'."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Ấp chiến lược được Mỹ - Ngụy coi là 'xương sống' và quốc sách của 'Chiến tranh đặc biệt'.",
    trickDetails: {
      whyTrapped: "Nhầm sang chiến thuật Tìm và diệt (thuộc Chiến tranh cục bộ).",
      trickWord: "Ấp chiến lược = Xương sống Chiến tranh đặc biệt",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục II.1.",
      tip: "Ấp chiến lược = Đặc biệt."
    }
  },
  {
    id: "lsd2-tr1-040",
    trickSet: 1,
    sectionId: "lsd2-sec-2",
    subsectionId: "lsd2-sub-2-2",
    question: "Chiến thắng quân sự nào mở đầu cho khả năng đánh bại chiến lược 'Chiến tranh đặc biệt' của Mỹ?",
    options: [
      "Chiến thắng Ấp Bắc (Tiền Giang) tháng 1 năm 1963 chứng minh khả năng thắng.",
      "Chiến thắng Bình Giã (Bà Rịa) tháng 12 năm 1964 làm phá sản hoàn toàn.",
      "Chiến thắng Vạn Tường (Quảng Ngãi) tháng 8 năm 1965 mở đầu chống Cục bộ.",
      "Chiến thắng Ba Gia (Quảng Ngãi) tháng 5 năm 1965 tiêu diệt các trung đoàn."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Ấp Bắc (1/1963) là trận mở đầu chứng minh ta có khả năng đánh bại Chiến tranh đặc biệt; Bình Giã (12/1964) làm phá sản cơ bản.",
    trickDetails: {
      whyTrapped: "Dễ nhầm Ấp Bắc (Mở đầu) với Bình Giã (Phá sản cơ bản).",
      trickWord: "Ấp Bắc (1/1963) = MỞ ĐẦU khả năng thắng",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục II.1.",
      tip: "Ấp Bắc = Mở đầu; Bình Giã = Phá sản."
    }
  },
  {
    id: "lsd2-tr1-041",
    trickSet: 1,
    sectionId: "lsd2-sec-2",
    subsectionId: "lsd2-sub-2-2",
    question: "Chiến thắng quân sự nào được coi là 'Ấp Bắc đối với quân Mỹ', chứng minh ta đánh được quân viễn chinh Mỹ?",
    options: [
      "Chiến thắng Vạn Tường (Quảng Ngãi) tháng 8 năm 1965 đánh bại quân Mỹ.",
      "Chiến thắng Bình Giã (Bà Rịa) tháng 12 năm 1964 đánh tiêu diệt quân ngụy.",
      "Chiến thắng Núi Thành (Quảng Nam) tháng 5 năm 1965 tiến công đại đội Mỹ.",
      "Chiến thắng Khe Sanh (Quảng Trị) năm 1968 giam chân hàng vạn lính Mỹ."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Vạn Tường (8/1965) là trận đầu tiên ta đánh thẳng quân viễn chinh Mỹ, khẳng định khả năng đánh thắng Mỹ trong Chiến tranh cục bộ.",
    trickDetails: {
      whyTrapped: "Dễ nhầm Núi Thành hay Ấp Bắc.",
      trickWord: "Vạn Tường (8/1965) = Trận đầu đánh thắng QUÂN MỸ",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục II.2.",
      tip: "Vạn Tường = Đánh thắng Mỹ."
    }
  },
  {
    id: "lsd2-tr1-042",
    trickSet: 1,
    sectionId: "lsd2-sec-2",
    subsectionId: "lsd2-sub-2-2",
    question: "Tầm vóc bước ngoặt chiến lược của Cuộc Tổng tiến công và nổi dậy Mậu Thân 1968 là gì?",
    options: [
      "Buộc Mỹ xuống thang chiến tranh, chấp nhận đàm phán Pa-ri và ngừng ném bom Bắc.",
      "Giải phóng hoàn toàn miền Nam và kết thúc kháng chiến chống Mỹ cứu nước.",
      "Đánh bại hoàn toàn chiến lược 'Việt Nam hóa chiến tranh' của Tổng thống Ních-xơn.",
      "Buộc Mỹ phải rút toàn bộ quân viễn chinh về nước ngay trong năm 1968."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Mậu Thân 1968 giáng đòn quyết định vào ý chí xâm lược của Mỹ, buộc Mỹ xuống thang, ngừng ném bom miền Bắc và ngồi vào bàn đàm phán Paris.",
    trickDetails: {
      whyTrapped: "Bẫy 'giải phóng hoàn toàn miền Nam' (tưởng 1968 giải phóng xong).",
      trickWord: "Mậu Thân 1968 = BUỘC MỸ ĐÀM PHÁN PA-RI",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục II.2.",
      tip: "1968 = Xuống thang đàm phán Paris."
    }
  },
  {
    id: "lsd2-tr1-043",
    trickSet: 1,
    sectionId: "lsd2-sec-2",
    subsectionId: "lsd2-sub-2-2",
    question: "Chiến lược 'Việt Nam hóa chiến tranh' (1969-1973) của Mỹ được thực hiện theo công thức nào?",
    options: [
      "Quân đội ngụy Saigon + Hỏa lực và không quân Mỹ + Cố vấn chỉ huy Mỹ.",
      "Quân viễn chinh Mỹ nòng cốt + Hỏa lực ngụy + Cố vấn các nước đồng minh.",
      "Quân đội đồng minh Chư hầu + Vũ khí kỹ thuật Mỹ + Cố vấn ngụy Saigon.",
      "Quân ngụy Saigon tự lực 100% không cần hỏa lực hay cố vấn quân sự Mỹ."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Việt Nam hóa chiến tranh: Công thức = Quân đội ngụy Saigon là lực lượng chủ yếu + Hỏa lực, phương tiện chiến tranh và cố vấn Mỹ.",
    trickDetails: {
      whyTrapped: "Dễ nhầm công thức với Chiến tranh cục bộ.",
      trickWord: "Quân Ngụy chủ yếu + Hỏa lực & Cố vấn Mỹ",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục II.2.",
      tip: "Việt Nam hóa = Thay màu da xác chết."
    }
  },
  {
    id: "lsd2-tr1-044",
    trickSet: 1,
    sectionId: "lsd2-sec-2",
    subsectionId: "lsd2-sub-2-2",
    question: "Chiến thắng 'Điện Biên Phủ trên không' trên bầu trời Hà Nội diễn ra trong bao nhiêu ngày đêm?",
    options: [
      "Diễn ra liên tục trong 12 ngày đêm cuối tháng 12 năm 1972.",
      "Diễn ra liên tục trong 55 ngày đêm từ tháng 3 đến tháng 5 năm 1954.",
      "Diễn ra liên tục trong 21 ngày đêm đầu tháng 4 năm 1975.",
      "Diễn ra liên tục trong 30 ngày đêm tháng 1 năm 1973."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "'Điện Biên Phủ trên không' diễn ra từ ngày 18 đến 29/12/1972 (12 ngày đêm), đánh bại tập kích B-52 của Mỹ.",
    trickDetails: {
      whyTrapped: "Nhầm 55 ngày đêm của Điện Biên Phủ 1954.",
      trickWord: "12 ngày đêm (18-29/12/1972)",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục II.2.",
      tip: "Trên không = 12 ngày đêm."
    }
  },
  {
    id: "lsd2-tr1-045",
    trickSet: 1,
    sectionId: "lsd2-sec-2",
    subsectionId: "lsd2-sub-2-2",
    question: "Điều khoản quan trọng nhất của Hiệp định Pa-ri (27-1-1973) đối với Mỹ là gì?",
    options: [
      "Mỹ cam kết tôn trọng độc lập, chủ quyền và rút hết quân viễn chinh về nước.",
      "Mỹ cam kết viện trợ kinh tế không hoàn lại 10 tỷ đôla cho hai miền Nam Bắc.",
      "Chính quyền ngụy Saigon phải giải tán ngay để thành lập Chính phủ liên hiệp.",
      "Việt Nam đồng ý chia cắt lâu dài đất nước thành hai quốc gia độc lập."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hiệp định Paris: Mỹ và các nước cam kết tôn trọng độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ của Việt Nam và rút hết quân Mỹ về nước.",
    trickDetails: {
      whyTrapped: "Bẫy từ 'chia cắt lâu dài' hoặc 'giải tán ngụy ngay'.",
      trickWord: "Rút hết quân Mỹ về nước ('Đánh cho Mỹ cút')",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục II.2.",
      tip: "Paris 1973 = Đánh cho Mỹ cút."
    }
  },
  {
    id: "lsd2-tr1-046",
    trickSet: 1,
    sectionId: "lsd2-sec-2",
    subsectionId: "lsd2-sub-2-2",
    question: "Chiến dịch mở màn cho Cuộc Tổng tiến công và nổi dậy Mùa Xuân 1975 là chiến dịch nào?",
    options: [
      "Chiến dịch Tây Nguyên (bắt đầu bằng trận đột phá thị xã Buôn Ma Thuột).",
      "Chiến dịch Huế - Đà Nẵng tiêu diệt các quân đoàn chủ lực ngụy ở miền Trung.",
      "Chiến dịch Hồ Chí Minh lịch sử tiến công thẳng vào sào huyệt Saigon.",
      "Chiến dịch Phước Long khẳng định sự suy yếu không thể phục hồi của ngụy."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chiến dịch Tây Nguyên (4/3 - 24/3/1975), mở màn bằng trận đột phá Buôn Ma Thuột (10/3), là chiến dịch mở màn Mùa Xuân 1975.",
    trickDetails: {
      whyTrapped: "Dễ nhầm Phước Long (là trận trinh sát chiến lược 1/1975) hay Chiến dịch Hồ Chí Minh.",
      trickWord: "Chiến dịch Tây Nguyên = MỞ MÀN Mùa Xuân 1975",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục II.3.",
      tip: "Mùa Xuân 75 = Tây Nguyên ➔ Huế Đà Nẵng ➔ Hồ Chí Minh."
    }
  },
  {
    id: "lsd2-tr1-047",
    trickSet: 1,
    sectionId: "lsd2-sec-2",
    subsectionId: "lsd2-sub-2-2",
    question: "Trận đánh được coi là 'trận trinh sát chiến lược' khẳng định khả năng giải phóng miền Nam năm 1975 là gì?",
    options: [
      "Chiến thắng Phước Long (tháng 1 năm 1975) giải phóng hoàn toàn một tỉnh.",
      "Trận đột phá Buôn Ma Thuột (tháng 3 năm 1975) mở màn Chiến dịch Tây Nguyên.",
      "Trận đánh chiếm Căn cứ Nước Trong (tháng 4 năm 1975) của Quân đoàn 2.",
      "Trận tiến công Dinh Độc Lập (ngày 30 tháng 4 năm 1975) của xe tăng ta."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chiến thắng Phước Long (1/1975) là trận 'trinh sát chiến lược', cho thấy phản ứng yếu ớt của Mỹ và sự suy yếu của quân Ngụy.",
    trickDetails: {
      whyTrapped: "Nhầm Buôn Ma Thuột (là trận mở màn chiến dịch).",
      trickWord: "Phước Long (1/1975) = Trận TRINH SÁT CHIẾN LƯỢC",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục II.3.",
      tip: "Phước Long = Trinh sát chiến lược."
    }
  },
  {
    id: "lsd2-tr1-048",
    trickSet: 1,
    sectionId: "lsd2-sec-2",
    subsectionId: "lsd2-sub-2-2",
    question: "Thời khắc lịch sử đánh dấu Chiến dịch Hồ Chí Minh hoàn toàn thắng lợi là lúc mấy giờ ngày 30-4-1975?",
    options: [
      "Lúc 11 giờ 30 phút ngày 30-4-1975 lá cờ cách mạng tung bay trên Dinh Độc Lập.",
      "Lúc 12 giờ 00 phút ngày 30-4-1975 Tổng thống Dương Văn Minh phát biểu.",
      "Lúc 5 giờ 30 phút sáng ngày 30-4-1975 năm mũi tiến công đồng loạt đánh.",
      "Lúc 17 giờ 00 phút chiều ngày 30-4-1975 toàn bộ quân ngụy buông súng."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Lúc 11h30 ngày 30/4/1975, lá cờ cách mạng tung bay trên nóc Dinh Độc Lập, Chiến dịch Hồ Chí Minh toàn thắng.",
    trickDetails: {
      whyTrapped: "Dễ nhầm giờ 12h00.",
      trickWord: "11 giờ 30 phút ngày 30-4-1975",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Mục II.3.",
      tip: "11h30 ngày 30/4/1975."
    }
  },
  {
    id: "lsd2-tr1-049",
    trickSet: 1,
    sectionId: "lsd2-sec-2",
    subsectionId: "lsd2-sub-2-2",
    question: "Nguyên nhân quyết định nhất dẫn đến thắng lợi vĩ đại của cuộc kháng chiến chống Mỹ cứu nước là gì?",
    options: [
      "Sự lãnh đạo đúng đắn, sáng tạo của Đảng Cộng sản Việt Nam và Chủ tịch Hồ Chí Minh.",
      "Sự hỗ trợ viện trợ vũ khí khí tài quân sự khổng lồ từ Liên Xô và Trung Quốc.",
      "Hệ thống địa hình rừng núi hiểm trở và lòng sông ngòi dày đặc ở miền Nam.",
      "Sự phong trào phản chiến rầm rộ của nhân dân tiến bộ ngay trên đất Mỹ."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Nguyên nhân quyết định nhất (nội lực) luôn là sự lãnh đạo đúng đắn, tài tình của Đảng. Các nguyên nhân khác là quan trọng.",
    trickDetails: {
      whyTrapped: "Dễ nhầm viện trợ quốc tế (ngoại lực) là nguyên nhân quyết định nhất.",
      trickWord: "Sự lãnh đạo của ĐẢNG = Quyết định nhất",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Bài học kinh nghiệm.",
      tip: "Quyết định nhất = Lãnh đạo của Đảng."
    }
  },
  {
    id: "lsd2-tr1-050",
    trickSet: 1,
    sectionId: "lsd2-sec-2",
    subsectionId: "lsd2-sub-2-2",
    question: "Ý nghĩa vĩ đại tầm vóc quốc tế của thắng lợi chống Mỹ cứu nước năm 1975 là gì?",
    options: [
      "Tác động mạnh mẽ đến tình hình thế giới, cổ vũ phong trào giải phóng dân tộc.",
      "Biến Việt Nam thành cường quốc quân sự nắm quyền chi phối toàn Đông Nam Á.",
      "Buộc các nước tư bản chủ nghĩa phải chuyển sang chế độ xã hội chủ nghĩa.",
      "Xóa bỏ hoàn toàn tình trạng nghèo đói và nâng thu nhập bình quân lên hàng đầu."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Thắng lợi năm 1975 giáng đòn mạnh vào chủ nghĩa đế quốc, cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên thế giới.",
    trickDetails: {
      whyTrapped: "Bẫy từ 'cường quốc chi phối Đông Nam Á'.",
      trickWord: "Cổ vũ phong trào GIẢI PHÓNG DÂN TỘC thế giới",
      citation: "Giáo trình Lịch sử Đảng — Chương II, Ý nghĩa lịch sử.",
      tip: "Ý nghĩa quốc tế = Cổ vũ giải phóng dân tộc."
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
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM BẪY (TRICK SET 1): CHƯƠNG II LỊCH SỬ ĐẢNG (1945-1975)
   Mã Bộ Đề: questions-lsd-chuong-2-trick1.js
   Số lượng: 50 câu bẫy tư duy Vận dụng cao (100% có trickDetails)
   ============================================================ */

export const lsdChuong2Trick1 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-chuong-2-trick1.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-chuong-2-trick1.js");
}
