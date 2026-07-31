const fs = require('fs');

const questions21 = [
  // 1. Câu 44 ID: 568176948
  {
    id: "c5-out-001",
    originalId: "568176948",
    question: "Theo Hồ Chí Minh đối với những đồng bào lầm đường, lạc lối, ta phải làm gì?",
    options: [
      "Giáo dục bắt buộc cải tạo",
      "Xử lý nghiêm theo pháp luật",
      "Cô lập khỏi cộng đồng",
      "Lấy tình thân ái mà cảm hóa"
    ],
    answer: 3,
    explanation: "Hồ Chí Minh chủ trương đối với đồng bào lầm đường lạc lối phải khoan hồng, dùng tình thân ái mà cảm hóa, lôi kéo họ về với dân tộc."
  },
  // 2. Câu 45 ID: 568176942
  {
    id: "c5-out-002",
    originalId: "568176942",
    question: "Nền tảng của khối đại đoàn kết toàn dân tộc trong tư tưởng Hồ Chí Minh là gì?",
    options: [
      "Đảng và Nhà nước",
      "Công nhân, nông dân và trí thức",
      "Toàn thể nhân dân Việt Nam",
      "Công nhân và nông dân"
    ],
    answer: 1,
    explanation: "Nền tảng của khối đại đoàn kết toàn dân tộc theo Hồ Chí Minh là liên minh công nhân, nông dân và đội ngũ trí thức do giai cấp công nhân lãnh đạo."
  },
  // 3. Câu 46 ID: 568176958
  {
    id: "c5-out-003",
    originalId: "568176958",
    question: "Thực hiện tư tưởng Hồ Chí Minh, Đảng Cộng sản Việt Nam luôn đề phòng, đấu tranh chống một biểu hiện gì để đoàn kết nội bộ?",
    options: [
      "Khuynh hướng cô độc, hẹp hòi, đoàn kết một chiều, vô nguyên tắc",
      "Khuynh hướng mở rộng hợp tác quốc tế",
      "Khuynh hướng đổi mới tổ chức",
      "Khuynh hướng dân chủ hóa"
    ],
    answer: 0,
    explanation: "Đảng ta luôn kiên quyết đấu tranh chống khuynh hướng cô độc, hẹp hòi, đoàn kết một chiều, vô nguyên tắc để bảo vệ sự thống nhất trong sạch của khối đoàn kết."
  },
  // 4. Câu 47 ID: 568176963
  {
    id: "c5-out-004",
    originalId: "568176963",
    question: "Theo Hồ Chí Minh, trong sự nghiệp cách mạng của Việt Nam “muốn người ta giúp cho” thì phải làm gì?",
    options: [
      "Trước hết phải tự lực cánh sinh, dựa vào sức mình",
      "Kêu gọi sự ủng hộ của các nước xã hội chủ nghĩa anh em",
      "Tham gia các tổ chức quốc tế",
      "Xây dựng quan hệ ngoại giao rộng rãi"
    ],
    answer: 0,
    explanation: "Hồ Chí Minh nhấn mạnh nguyên tắc tự lực cánh sinh: 'Muốn người ta giúp cho thì trước hết mình phải tự giúp lấy mình đã'."
  },
  // 5. Câu 48 ID: 568176933
  {
    id: "c5-out-005",
    originalId: "568176933",
    question: "Theo Hồ Chí Minh, khối đại đoàn kết toàn dân tộc chỉ trở thành lực lượng to lớn, có sức mạnh vật chất khi được tập hợp, tổ chức lại thành khối vững chắc, đó là?",
    options: [
      "Chính phủ liên hiệp",
      "Hội đồng nhân dân",
      "Mặt trận dân tộc thống nhất",
      "Quốc hội"
    ],
    answer: 2,
    explanation: "Khối đại đoàn kết toàn dân tộc được tổ chức và thể hiện tập trung nhất thành sức mạnh vật chất thông qua Mặt trận dân tộc thống nhất."
  },
  // 6. Câu 49 ID: 568176953
  {
    id: "c5-out-006",
    originalId: "568176953",
    question: "Theo tư tưởng Hồ Chí Minh, một trong những nguyên tắc đoàn kết quốc tế đó là gì?",
    options: [
      "Đoàn kết vô điều kiện",
      "Đoàn kết trên cơ sở độc lập tự chủ",
      "Đoàn kết theo chỉ thị Quốc tế Cộng sản",
      "Đoàn kết một chiều"
    ],
    answer: 1,
    explanation: "Đoàn kết quốc tế phải dựa trên cơ sở độc lập, tự chủ, tự lực cánh sinh và bình đẳng giữa các dân tộc."
  },
  // 7. Câu 50 ID: 568176943
  {
    id: "c5-out-007",
    originalId: "568176943",
    question: "Hình thức đại đoàn kết dân tộc theo quan điểm Hồ Chí Minh là gì?",
    options: [
      "Mặt trận dân tộc thống nhất",
      "Liên minh công nông trí",
      "Chính phủ liên hiệp",
      "Hội đồng nhân dân"
    ],
    answer: 0,
    explanation: "Mặt trận dân tộc thống nhất là tổ chức thể hiện hình thức tập hợp khối đại đoàn kết toàn dân tộc."
  },
  // 8. Câu 51 ID: 568176930
  {
    id: "c5-out-008",
    originalId: "568176930",
    question: "Theo tư tưởng Hồ Chí Minh, nguyên tắc hoạt động của Mặt trận dân tộc thống nhất là gì?",
    options: [
      "Tập trung dân chủ",
      "Hiệp thương dân chủ",
      "Tự phê bình và phê bình",
      "Đoàn kết một chiều"
    ],
    answer: 1,
    explanation: "Mặt trận dân tộc thống nhất hoạt động theo nguyên tắc hiệp thương dân chủ, tôn trọng lợi ích chung và riêng của các thành viên."
  },
  // 9. Câu 52 ID: 568176961
  {
    id: "c5-out-009",
    originalId: "568176961",
    question: "“Đại đoàn kết tức là trước hết phải đoàn kết với đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao động khác. Đó là nền, gốc của đại đoàn kết. Nó cũng như cái nền của nhà, gốc của cây. Nhưng đã có nền vững, gốc tốt, còn phải đoàn kết với các tầng lớp nhân dân khác”. Trong đoạn trích trên, Hồ Chí Minh đã khẳng định lực lượng nào là nền tảng của khối đại đoàn kết toàn dân?",
    options: [
      "Liên minh công – nông – tầng lớp trí thức",
      "Toàn thể dân tộc Việt Nam",
      "Liên minh công nhân - nông dân",
      "Giai cấp công nhân lãnh đạo"
    ],
    answer: 0,
    explanation: "Đoạn trích khẳng định khối liên minh công nhân - nông dân và tầng lớp trí thức làm nền tảng cốt lõi cho khối đại đoàn kết."
  },
  // 10. Câu 53 ID: 568176935
  {
    id: "c5-out-010",
    originalId: "568176935",
    question: "Theo tư tưởng Hồ Chí Minh, sự tổng hợp các yếu tố vật chất và tinh thần, song trước hết là sức mạnh của chủ nghĩa yêu nước và ý thức tự lực, tự cường dân tộc, sức mạnh của tinh thần đoàn kết..., đó chính là sức mạnh của cái gì?",
    options: [
      "Giai cấp công nhân",
      "Thời đại",
      "Dân tộc",
      "Chủ nghĩa Mác-Lênin"
    ],
    answer: 2,
    explanation: "Hồ Chí Minh định nghĩa sức mạnh dân tộc là sự tổng hợp của truyền thống yêu nước, tinh thần đoàn kết và ý thức tự lực tự cường."
  },
  // 11. Câu 54 ID: 568176952
  {
    id: "c5-out-011",
    originalId: "568176952",
    question: "Chọn cụm từ ĐÚNG để điền vào chỗ trống. Tháng 09 năm 1947, khi trả lời nhà báo Mỹ S. Éli Mâysi, Hồ Chí Minh tuyên bố, chính sách đối ngoại của nước Việt Nam là “làm bạn với tất cả mọi nước [...] và không gây thù hằn với một ai”?",
    options: [
      "Xã hội chủ nghĩa",
      "Dân chủ",
      "Tiến bộ",
      "Yêu chuộng hòa bình"
    ],
    answer: 3,
    explanation: "Chính sách đối ngoại nhất quán của Việt Nam: 'Làm bạn với tất cả mọi nước dân chủ/yêu chuộng hòa bình và không gây thù hằn với một ai'."
  },
  // 12. Câu 55 ID: 568176950
  {
    id: "c5-out-012",
    originalId: "568176950",
    question: "Theo Hồ Chí Minh, lực lượng nào là nền tảng của Mặt trận dân tộc thống nhất?",
    options: [
      "Liên minh công - nông - trí",
      "Liên minh công nhân - nông dân",
      "Giai cấp công nhân",
      "Toàn thể nhân dân"
    ],
    answer: 1,
    explanation: "Mặt trận dân tộc thống nhất đứng trên nền tảng khối liên minh công nhân - nông dân dưới sự lãnh đạo của Đảng."
  },
  // 13. Câu 56 ID: 568176929
  {
    id: "c5-out-013",
    originalId: "568176929",
    question: "Theo tư tưởng Hồ Chí Minh, cách mạng Việt Nam chỉ có thể thành công khi thực hiện đoàn kết chặt chẽ với phong trào nào?",
    options: [
      "Cách mạng thế giới",
      "Phong trào công nhân trong nước",
      "Phong trào nông dân quốc tế",
      "Phong trào giải phóng dân tộc Đông Dương"
    ],
    answer: 0,
    explanation: "Cách mạng Việt Nam là một bộ phận khăng khít của cách mạng thế giới, thắng lợi của cách mạng Việt Nam gắn liền với sự đoàn kết quốc tế."
  },
  // 14. Câu 57 ID: 568176934
  {
    id: "c5-out-014",
    originalId: "568176934",
    question: "Theo tư tưởng Hồ Chí Minh, để làm tốt công tác vận động quần chúng thì mọi phương pháp tiếp cận và vận động quần chúng đều phải phù hợp với gì?",
    options: [
      "Tâm tư và nguyện vọng của quần chúng",
      "Chủ trương của Đảng",
      "Chính sách của Nhà nước",
      "Trình độ lý luận cách mạng"
    ],
    answer: 0,
    explanation: "Công tác dân vận muốn thành công thì đường lối, phương pháp tiếp cận phải xuất phát từ và phù hợp với tâm tư, nguyện vọng chính đáng của nhân dân."
  },
  // 15. Câu 58 ID: 568176931
  {
    id: "c5-out-015",
    originalId: "568176931",
    question: "Khi nói về lực lượng của khối đại đoàn kết toàn dân tộc, Hồ Chí Minh từng khẳng định “Ai có tài, có đức, có sức, có lòng phụng sự Tổ quốc và phục vụ nhân dân thì ta đoàn kết với họ”. Theo anh/chị từ “ta” ở đây là nói đến ai?",
    options: [
      "Mặt trận Việt Minh",
      "Đảng Cộng sản Việt Nam",
      "Chính phủ Việt Nam",
      "Nhân dân Việt Nam"
    ],
    answer: 3,
    explanation: "Từ 'ta' ở đây chỉ chung khối đại đoàn kết toàn thể Nhân dân Việt Nam và các lực lượng cách mạng Việt Nam."
  },
  // 16. Câu 59 ID: 568176939
  {
    id: "c5-out-016",
    originalId: "568176939",
    question: "Trong bài báo Bác viết năm 1942 “Sử dạy cho ta bài học này: Lúc nào dân ta đoàn kết muôn người như một thì nước ta độc lập, tự do. Trái lại, lúc nào dân ta không đoàn kết thì bị nước ngoài xâm lấn”. Người muốn nhấn mạnh tới?",
    options: [
      "Nguyên tắc tổ chức Mặt trận",
      "Vai trò lãnh đạo của Đảng",
      "Sức mạnh thời đại",
      "Vị trí, vai trò của đại đoàn kết toàn dân"
    ],
    answer: 3,
    explanation: "Bài báo 'Nên học sử ta' (1942) nhấn mạnh bài học lịch sử vô giá về vị trí, vai trò quyết định hàng đầu của đại đoàn kết toàn dân đối với độc lập dân tộc."
  },
  // 17. Câu 60 ID: 568176955
  {
    id: "c5-out-017",
    originalId: "568176955",
    question: "Thực hiện tư tưởng Hồ Chí Minh, Đảng ta phải coi công tác vận động quần chúng là làm tốt điều gì trong phương thức xây dựng khối đại đoàn kết toàn dân tộc?",
    options: [
      "Địch vận",
      "Dân vận",
      "Quân vận",
      "Binh vận"
    ],
    answer: 1,
    explanation: "Công tác Dân vận là làm tốt việc vận động nhân dân, phát huy quyền làm chủ của nhân dân để xây dựng khối đại đoàn kết."
  },
  // 18. Câu 61 ID: 568176964
  {
    id: "c5-out-018",
    originalId: "568176964",
    question: "Đâu là câu nói về đại đoàn kết toàn dân tộc của Hồ Chí Minh tại Đại hội đại biểu Mặt trận Tổ quốc Việt Nam lần thứ 2 ngày 25/4/1961?",
    options: [
      "Đoàn kết là sức mạnh, là then chốt của thành công",
      "Không có gì quý hơn độc lập tự do",
      "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công",
      "Dân ta có một lòng nồng nàn yêu nước"
    ],
    answer: 2,
    explanation: "Câu nói chân lý nổi tiếng 'Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công' được Bác đọc tại Đại hội Mặt trận Tổ quốc Việt Nam (25/4/1961)."
  },
  // 19. Câu 62 ID: 568176938
  {
    id: "c5-out-019",
    originalId: "568176938",
    question: "Theo tư tưởng Hồ Chí Minh, thực hiện đại đoàn kết toàn dân tộc có vai trò thế nào đối với việc thực hiện đoàn kết quốc tế?",
    options: [
      "Cơ sở",
      "Điều kiện đi",
      "Hệ quả",
      "Không liên quan"
    ],
    answer: 0,
    explanation: "Đại đoàn kết toàn dân tộc (sức mạnh dân tộc) là nội lực, là cơ sở nền tảng để tranh thủ và thực hiện đại đoàn kết quốc tế (sức mạnh thời đại)."
  },
  // 20. Câu 63 ID: 568176962
  {
    id: "c5-out-020",
    originalId: "568176962",
    question: "Với lực lượng đối lập, Chủ tịch Hồ Chí Minh có nghệ thuật xử lý khéo léo, tài tình. Nhờ đó cách mạng Việt Nam giai đoạn 1945-1946?",
    options: [
      "Đánh bại hoàn toàn thực dân Pháp",
      "Giành được sự công nhận của Liên Hợp Quốc",
      "Thống nhất đất nước hoàn toàn",
      "Tranh thủ khai thác tối đa mâu thuẫn trong hàng ngũ kẻ thù"
    ],
    answer: 3,
    explanation: "Nghệ thuật chớp thời cơ và phân hóa kẻ thù giúp Đảng và Bác tranh thủ khai thác mâu thuẫn giữa Tưởng và Pháp để bảo vệ chính quyền non trẻ năm 1945-1946."
  },
  // 21. Câu 64 ID: 568176941
  {
    id: "c5-out-021",
    originalId: "568176941",
    question: "Khi nói về nguyên tắc đoàn kết quốc tế, đối với các dân tộc trên thế giới, Hồ Chí Minh đã giương cao ngọn cờ nào?",
    options: [
      "Hòa bình, chống chiến tranh xâm lược",
      "Chủ nghĩa quốc tế vô sản",
      "Độc lập, tự do và quyền bình đẳng giữa các dân tộc",
      "Độc lập dân tộc gắn liền CNXH"
    ],
    answer: 2,
    explanation: "Hồ Chí Minh giương cao ngọn cờ 'Độc lập, tự do và quyền bình đẳng giữa các dân tộc' làm cơ sở đoàn kết rộng rãi với nhân dân các nước trên thế giới."
  }
];

fs.writeFileSync('./scratch/q40_excluded_c5.json', JSON.stringify(questions21, null, 2));
console.log('Saved 21 excluded questions for Chapter V to scratch/q40_excluded_c5.json');
