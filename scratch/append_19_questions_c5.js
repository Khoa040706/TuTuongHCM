const fs = require('fs');

const current21 = JSON.parse(fs.readFileSync('./scratch/q40_excluded_c5.json', 'utf8'));

const batch2 = [
  // 22. Câu 65 ID: 568176940
  {
    id: "c5-out-022",
    originalId: "568176940",
    question: "Khi nói về nguyên tắc đoàn kết quốc tế, đối với phong trào cộng sản và công nhân quốc tế, Hồ Chí Minh đã giương cao ngọn cờ nào?",
    options: [
      "Chủ nghĩa quốc tế vô sản thuần túy",
      "Hòa bình, chống chiến tranh xâm lược",
      "Độc lập dân tộc gắn liền với chủ nghĩa xã hội",
      "Độc lập, tự do, bình đẳng dân tộc"
    ],
    answer: 2,
    explanation: "Đối với phong trào cộng sản và công nhân quốc tế, Hồ Chí Minh giương cao ngọn cờ Độc lập dân tộc gắn liền với Chủ nghĩa xã hội."
  },
  // 23. Câu 66 ID: 568176946
  {
    id: "c5-out-023",
    originalId: "568176946",
    question: "Theo Hồ Chí Minh, lực lượng của khối đại đoàn kết toàn dân là?",
    options: [
      "Trí thức yêu nước",
      "Giai cấp công nhân và nông dân",
      "Toàn thể Nhân dân Việt Nam",
      "Đảng viên và cán bộ"
    ],
    answer: 2,
    explanation: "Khối đại đoàn kết toàn dân tộc bao gồm toàn thể Nhân dân Việt Nam yêu nước, không phân biệt giai cấp, tôn giáo, dân tộc."
  },
  // 24. Câu 67 ID: 568176945
  {
    id: "c5-out-024",
    originalId: "568176945",
    question: "Hồ Chí Minh tuyên bố tại buổi lễ ra mắt Đảng Lao động Việt Nam (3/3/1951) về mục đích của Đảng Lao động Việt Nam là “Đoàn kết toàn dân” để làm gì?",
    options: [
      "Phụng sự Tổ quốc",
      "Xây dựng chủ nghĩa xã hội",
      "Thống nhất đất nước",
      "Chống thực dân Pháp"
    ],
    answer: 0,
    explanation: "Bác tuyên bố mục đích gói gọn trong 8 chữ: 'Đoàn kết toàn dân, phụng sự Tổ quốc'."
  },
  // 25. Câu 68 ID: 568176932
  {
    id: "c5-out-025",
    originalId: "568176932",
    question: "Theo tư tưởng Hồ Chí Minh, nhân tố chung để quy tụ các tầng lớp, giai cấp, đảng phái, dân tộc và tôn giáo vào trong Mặt trận là gì?",
    options: [
      "Truyền thống văn hóa dân tộc",
      "Chủ nghĩa Mác-Lênin",
      "Sự lãnh đạo của Đảng",
      "Lợi ích tối cao của dân tộc và lợi ích cơ bản của nhân dân"
    ],
    answer: 3,
    explanation: "Lợi ích tối cao của dân tộc (Độc lập, tự do) và lợi ích cơ bản của nhân dân là điểm tương đồng quy tụ mọi lực lượng vào Mặt trận."
  },
  // 26. Câu 69 ID: 568176944
  {
    id: "c5-out-026",
    originalId: "568176944",
    question: "Nguyên tắc xây dựng và hoạt động của Mặt trận dân tộc thống nhất trong tư tưởng Hồ Chí Minh là gì?",
    options: [
      "Phải đoàn kết lâu dài, chặt chẽ, đoàn kết thật sự, chân thành, thân ái giúp đỡ nhau cùng tiến bộ",
      "Phải đặt dưới sự lãnh đạo tuyệt đối của Nhà nước",
      "Phải giải tán khi hoàn thành nhiệm vụ",
      "Phải chỉ gồm giai cấp công nhân và nông dân"
    ],
    answer: 0,
    explanation: "Nguyên tắc xây dựng Mặt trận: Đoàn kết lâu dài, chặt chẽ, chân thành, thân ái giúp đỡ nhau cùng tiến bộ."
  },
  // 27. Câu 70 ID: 568176931
  {
    id: "c5-out-027",
    originalId: "568176931",
    question: "Theo tư tưởng Hồ Chí Minh, trong quá trình xây dựng khối đại đoàn kết toàn dân tộc phải đứng vững trên lập trường của giai cấp nào?",
    options: [
      "Nông dân",
      "Công nhân",
      "Trí thức",
      "Tư sản dân tộc"
    ],
    answer: 1,
    explanation: "Đại đoàn kết toàn dân tộc rộng rãi nhưng phải đứng vững trên lập trường của giai cấp công nhân do Đảng lãnh đạo."
  },
  // 28. Câu 71 ID: 568176949
  {
    id: "c5-out-028",
    originalId: "568176949",
    question: "Hồ Chí Minh đã kế thừa giá trị văn hóa của Việt Nam hình thành và phát triển tư tưởng về đại đoàn kết toàn dân?",
    options: [
      "Trung - hiếu - tiết - nghĩa",
      "Yêu nước - đoàn kết - nhân nghĩa",
      "Nhân - lễ - nghĩa - trí - tín",
      "Cần - kiệm - liêm - chính"
    ],
    answer: 1,
    explanation: "Hồ Chí Minh kế thừa truyền thống Yêu nước - Đoàn kết - Nhân nghĩa của dân tộc Việt Nam để xây dựng lý luận đại đoàn kết."
  },
  // 29. Câu 72 ID: 568176936
  {
    id: "c5-out-029",
    originalId: "568176936",
    question: "Theo tư tưởng Hồ Chí Minh, động lực chủ yếu của sự phát triển nước ta hiện nay là gì?",
    options: [
      "Mở rộng quan hệ đối ngoại",
      "Phát huy sức mạnh đại đoàn kết toàn dân tộc",
      "Thu hút đầu tư nước ngoài",
      "Phát triển khoa học công nghệ"
    ],
    answer: 1,
    explanation: "Hồ Chí Minh khẳng định đại đoàn kết toàn dân tộc là động lực chủ yếu quyết định mọi thắng lợi và sự phát triển của đất nước."
  },
  // 30. Câu 73 ID: 568176957
  {
    id: "c5-out-030",
    originalId: "568176957",
    question: "Khi bàn về đại đoàn kết toàn dân tộc, theo Hồ Chí Minh, nhân tố quyết định sự thành bại của cách mạng là gì?",
    options: [
      "Sức mạnh quân sự",
      "Sự ủng hộ quốc tế",
      "Trình độ kinh tế đất nước",
      "Chính sách, phương pháp và chủ trương tập hợp đại đoàn kết toàn dân tộc"
    ],
    answer: 3,
    explanation: "Chính sách, phương pháp tập hợp lực lượng đại đoàn kết toàn dân đúng đắn là nhân tố quyết định thành bại của cách mạng."
  },
  // 31. Câu 74 ID: 568176947
  {
    id: "c5-out-031",
    originalId: "568176947",
    question: "Trong mối quan hệ đoàn kết trong Đảng - Đoàn kết trong nhân dân - Đoàn kết quốc tế, theo Hồ Chí Minh thì đâu là nhân tố quyết định sức mạnh của khối đại đoàn kết?",
    options: [
      "Đoàn kết Đông Dương",
      "Đoàn kết quốc tế",
      "Đoàn kết trong nhân dân",
      "Đoàn kết trong Đảng"
    ],
    answer: 3,
    explanation: "Đoàn kết trong Đảng là hạt nhân, là nhân tố quyết định sức mạnh của khối đại đoàn kết toàn dân và đoàn kết quốc tế."
  },
  // 32. Câu 75 ID: 568176960
  {
    id: "c5-out-032",
    originalId: "568176960",
    question: "“Đại đoàn kết tức là trước hết phải đoàn kết với đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao động khác. Đó là nền, gốc của đại đoàn kết...”. Trong đoạn trích trên, Hồ Chí Minh đã đề cập tới?",
    options: [
      "Hình thức tổ chức Mặt trận",
      "Nguyên tắc xây dựng Mặt trận",
      "Lực lượng của khối đại đoàn kết toàn dân",
      "Điều kiện xây dựng đại đoàn kết"
    ],
    answer: 2,
    explanation: "Đoạn trích nêu rõ lực lượng nòng cốt làm nền gốc của khối đại đoàn kết toàn dân."
  },
  // 33. Câu 76 ID: 568176927
  {
    id: "c5-out-033",
    originalId: "568176927",
    question: "Theo tư tưởng Hồ Chí Minh, đoàn kết phải lấy lợi ích tối cao của dân tộc, lợi ích cơ bản của nhân dân lao động làm?",
    options: [
      "Tiêu chí đánh giá",
      "Mục tiêu phấn đấu",
      "Phương thức hoạt động",
      "Nguyên tắc tổ chức"
    ],
    answer: 1,
    explanation: "Lợi ích tối cao của dân tộc và lợi ích cơ bản của nhân dân lao động là mục tiêu phấn đấu chung của khối đại đoàn kết."
  },
  // 34. Câu 77 ID: 568176928
  {
    id: "c5-out-034",
    originalId: "568176928",
    question: "Theo tư tưởng Hồ Chí Minh, cách mạng Việt Nam là một bộ phận của cách mạng nào?",
    options: [
      "Châu Á",
      "Đông Nam Á",
      "Các nước xã hội chủ nghĩa",
      "Thế giới"
    ],
    answer: 3,
    explanation: "Hồ Chí Minh khẳng định cách mạng Việt Nam là một bộ phận khăng khít của cách mạng thế giới."
  },
  // 35. Câu 78 ID: 568176937
  {
    id: "c5-out-035",
    originalId: "568176937",
    question: "Trong lời kết thúc buổi ra mắt Đảng Lao động Việt Nam, Hồ Chí Minh có tuyên bố: “Mục đích của Đảng Lao động Việt Nam có thể gói gọn trong tám chữ...”. Tám chữ đó là gì?",
    options: [
      "Đoàn kết quốc tế, chống đế quốc",
      "Độc lập, tự do, hạnh phúc cho dân",
      "Dân giàu, nước mạnh, công bằng",
      "Đoàn kết toàn dân, phụng sự Tổ quốc"
    ],
    answer: 3,
    explanation: "Tám chữ vàng Bác tuyên bố ngày 3/3/1951: 'Đoàn kết toàn dân, phụng sự Tổ quốc'."
  },
  // 36. Câu 79 ID: 568176925
  {
    id: "c5-out-036",
    originalId: "568176925",
    question: "Trong tư tưởng Hồ Chí Minh, đại đoàn kết toàn dân tộc có ý nghĩa như thế nào tới thành công của cách mạng?",
    options: [
      "Bổ trợ",
      "Quyết định",
      "Thứ yếu",
      "Quan trọng"
    ],
    answer: 1,
    explanation: "Hồ Chí Minh khẳng định đại đoàn kết toàn dân tộc có ý nghĩa quyết định hàng đầu đối với thành công của cách mạng."
  },
  // 37. Câu 80 ID: 568176954
  {
    id: "c5-out-037",
    originalId: "568176954",
    question: "Thực hiện tư tưởng Hồ Chí Minh, với phương châm “cầu đồng tồn dị”, Đảng Cộng sản Việt Nam phải dựa trên cơ sở nào để xây dựng nguyên tắc đoàn kết dân tộc?",
    options: [
      "Lấy cái chung để hạn chế cái riêng, cái khác biệt",
      "Ưu tiên lợi ích cá nhân",
      "Xóa bỏ hoàn toàn khác biệt",
      "Duy trì nguyên trạng khác biệt"
    ],
    answer: 0,
    explanation: "Phương châm 'cầu đồng tồn dị': Tìm cái chung (lợi ích dân tộc) để hợp tác, tôn trọng và hạn chế cái riêng, cái khác biệt."
  },
  // 38. Câu 81 ID: 568176953
  {
    id: "c5-out-038",
    originalId: "568176953",
    question: "Yếu tố nào được xem là “hạt nhân” của khối đại đoàn kết toàn dân tộc trong tư tưởng Hồ Chí Minh?",
    options: [
      "Mặt trận Tổ quốc Việt Nam",
      "Sự lãnh đạo của Nhà nước",
      "Sự đoàn kết và thống nhất trong Đảng Cộng sản Việt Nam",
      "Liên minh công nông trí"
    ],
    answer: 2,
    explanation: "Sự đoàn kết thống nhất trong Đảng là hạt nhân lãnh đạo và quy tụ sức mạnh khối đại đoàn kết toàn dân."
  },
  // 39. Câu 82 ID: 568176926
  {
    id: "c5-out-039",
    originalId: "568176926",
    question: "Trong tư tưởng Hồ Chí Minh, đối với cách mạng Việt Nam đại đoàn kết toàn dân tộc được xem là gì?",
    options: [
      "Biện pháp tính thế",
      "Sách lược nhất thời",
      "Khẩu hiệu tuyên truyền",
      "Chiến lược lâu dài"
    ],
    answer: 3,
    explanation: "Đại đoàn kết toàn dân tộc không phải là thủ đoạn chính trị nhất thời hay biện pháp tạm thời, mà là đường lối chiến lược lâu dài xuyên suốt cách mạng."
  },
  // 40. Câu 83 ID: 568176956
  {
    id: "c5-out-040",
    originalId: "568176956",
    question: "Thực hiện tư tưởng Hồ Chí Minh, Đảng Cộng sản Việt Nam phải coi sức mạnh thời đại là?",
    options: [
      "Sức mạnh của phong trào cách mạng thế giới, đó là chủ nghĩa Mác-Lênin",
      "Sức mạnh của các nước tư bản phát triển",
      "Sức mạnh của toàn cầu hóa kinh tế",
      "Sức mạnh của khoa học kỹ thuật hiện đại"
    ],
    answer: 0,
    explanation: "Sức mạnh thời đại là sức mạnh của các lực lượng cách mạng thế giới, phong trào công nhân và phong trào giải phóng dân tộc trên nền tảng chủ nghĩa Mác-Lênin."
  }
];

const total40 = [...current21, ...batch2];
console.log('Total Chapter V excluded questions combined:', total40.length);

fs.writeFileSync('./scratch/q40_excluded_c5.json', JSON.stringify(total40, null, 2));
console.log('Successfully saved all 40 excluded questions to scratch/q40_excluded_c5.json!');
