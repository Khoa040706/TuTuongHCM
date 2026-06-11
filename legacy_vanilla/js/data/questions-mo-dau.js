/* ============================================================
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM: Chương mở đầu (Đã có Giải thích)
   Đối tượng, phương pháp nghiên cứu và ý nghĩa học tập môn TTHCM
   ============================================================ */

const questionsMoDau = {
  chapterId: "chuong-mo-dau",
  
  /* ============================
     90 CÂU TRONG GIÁO TRÌNH
     ============================ */
  inside: [
    /* ----- PHẦN I: ĐỐI TƯỢNG NGHIÊN CỨU (40 câu) ----- */
    /* Mục 1: Khái niệm tư tưởng và TTHCM (20 câu: 5 dễ, 10 trung bình, 5 khó) */
    {
      id: "cmd-in-01",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Theo nghĩa triết học nhất quán, khái niệm \"tư tưởng\" đại biểu cho ý chí, nguyện vọng của đối tượng nào?",
      options: [
        "Một cá nhân cụ thể bất kỳ trong xã hội",
        "Một nhóm lợi ích nhỏ mang tính địa phương",
        "Một giai cấp, một dân tộc nhất định",
        "Tất cả các tổ chức phi chính phủ đang hoạt động"
      ],
      answer: 2,
      difficulty: "easy",
      isOutside: false,
      explanation: "Theo giáo trình, tư tưởng theo nghĩa khoa học đại biểu cho ý chí, nguyện vọng của một giai cấp, một dân tộc, được xây dựng trên một nền tảng triết học nhất quán chứ không phải ý thức cá nhân đơn lẻ."
    },
    {
      id: "cmd-in-02",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Đảng Cộng sản Việt Nam lần đầu tiên chính thức khẳng định lấy \"Chủ nghĩa Mác - Lênin và Tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động\" tại Đại hội đại biểu toàn quốc lần thứ mấy?",
      options: [
        "Đại hội V (1982)",
        "Đại hội VI (1986)",
        "Đại hội VII (tháng 6-1991)",
        "Đại hội VIII (1996)"
      ],
      answer: 2,
      difficulty: "easy",
      isOutside: false,
      explanation: "Đại hội VII (1991) đánh dấu mốc lịch sử quan trọng khi Đảng ta lần đầu tiên đưa vào Cương lĩnh và Văn kiện quyết định lấy chủ nghĩa Mác - Lênin và Tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động."
    },
    {
      id: "cmd-in-03",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Định nghĩa cơ bản, phát triển và hoàn thiện nhất về khái niệm Tư tưởng Hồ Chí Minh hiện nay được đưa ra và thông qua tại Đại hội đại biểu toàn quốc lần thứ mấy của Đảng?",
      options: [
        "Đại hội VII (1991)",
        "Đại hội IX (2001)",
        "Đại hội XI (tháng 1-2011)",
        "Đại hội XII (2016)"
      ],
      answer: 2,
      difficulty: "easy",
      isOutside: false,
      explanation: "Đại hội XI (2011) đã kế thừa các nhận thức trước đó, bổ sung và đưa ra định nghĩa cơ bản, hoàn thiện nhất về khái niệm Tư tưởng Hồ Chí Minh đang được Đảng và nhân dân ta áp dụng."
    },
    {
      id: "cmd-in-04",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Trong định nghĩa Tư tưởng Hồ Chí Minh của Đại hội XI (2011), nguồn gốc tư tưởng, lý luận trực tiếp và quan trọng nhất đóng vai trò cơ sở thế giới quan và phương pháp luận là gì?",
      options: [
        "Giá trị truyền thống tốt đẹp của dân tộc",
        "Tinh hoa văn hóa nhân loại của cả Đông và Tây",
        "Chủ nghĩa Mác - Lênin",
        "Tuyên ngôn độc lập năm 1776 của nước Mỹ"
      ],
      answer: 2,
      difficulty: "easy",
      isOutside: false,
      explanation: "Chủ nghĩa Mác - Lênin đóng vai trò là cơ sở thế giới quan và phương pháp luận khoa học, là nguồn gốc trực tiếp và quan trọng nhất quyết định bản chất cách mạng của Tư tưởng Hồ Chí Minh."
    },
    {
      id: "cmd-in-05",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Khái niệm \"tư tưởng\" khoa học được dùng trong môn học Tư tưởng Hồ Chí Minh đề cập đến nội dung nào?",
      options: [
        "Suy nghĩ, ý thức tư tưởng tạm thời của một cá nhân trong cuộc sống",
        "Một hệ thống những quan điểm, quan niệm được xây dựng trên một nền tảng triết học nhất quán",
        "Những bài nói và bài viết mang tính cổ động quần chúng nhân dân",
        "Những chỉ thị mang tính hành chính của chính quyền nhà nước"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: false,
      explanation: "Trong môn học, khái niệm 'tư tưởng' không chỉ là suy nghĩ hay ý thức cá nhân đơn lẻ, mà phải là một hệ thống các quan điểm được xây dựng trên một nền tảng triết học nhất quán."
    },
    {
      id: "cmd-in-06",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Theo luận điểm của V.I. Lênin, một người chỉ được thừa nhận là \"nhà tư tưởng\" khi nào?",
      options: [
        "Khi họ viết được nhiều tác phẩm lý luận nổi tiếng được xuất bản rộng rãi",
        "Khi họ biết giải quyết trước người khác tất cả những vấn đề chính trị - sách lược, các vấn đề về tổ chức...",
        "Khi họ giữ chức vụ lãnh đạo tối cao trong bộ máy chính trị của quốc gia",
        "Khi họ xây dựng thành công một học thuyết triết học mới hoàn toàn độc lập"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Lênin định nghĩa nhà tư tưởng là người biết giải quyết trước người khác tất cả những vấn đề chính trị - sách lược, các vấn đề về tổ chức, về những tiền đề vật chất của phong trào lịch sử."
    },
    {
      id: "cmd-in-07",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Văn kiện Đại hội đại biểu toàn quốc lần thứ VII (1991) xác định Tư tưởng Hồ Chí Minh là kết quả của sự vận dụng sáng tạo chủ nghĩa Mác - Lênin trong điều kiện cụ thể của nước ta và đã trở thành:",
      options: [
        "Định hướng riêng áp dụng cho phong trào đấu tranh quốc tế",
        "Một tài sản tinh thần quý báu của Đảng và của dân tộc",
        "Một học thuyết đóng vai trò thay thế hoàn toàn chủ nghĩa Mác-Lênin",
        "Cơ sở pháp lý duy nhất để ban hành Hiến pháp nước Việt Nam"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Văn kiện Đại hội VII nêu rõ Tư tưởng Hồ Chí Minh là sự vận dụng sáng tạo chủ nghĩa Mác-Lênin trong hoàn cảnh cụ thể của Việt Nam và đã trở thành một tài sản tinh thần vô giá của Đảng và dân tộc."
    },
    {
      id: "cmd-in-08",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Định nghĩa Tư tưởng Hồ Chí Minh tại Đại hội XI (2011) đã xác định hệ thống tư tưởng của Người có giá trị định hướng như thế nào đối với cách mạng nước ta?",
      options: [
        "Chỉ định hướng cho giai đoạn đấu tranh giải phóng dân tộc",
        "Định hướng cho giai đoạn xây dựng chủ nghĩa xã hội đến năm 2020",
        "Mãi mãi soi đường cho sự nghiệp cách mạng của nhân dân ta giành thắng lợi",
        "Được sử dụng như một phương án dự phòng khi cách mạng gặp khó khăn"
      ],
      answer: 2,
      difficulty: "medium",
      isOutside: false,
      explanation: "Định nghĩa của Đại hội XI nêu rõ Tư tưởng Hồ Chí Minh là tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc ta, mãi mãi soi đường cho sự nghiệp cách mạng của nhân dân ta giành thắng lợi."
    },
    {
      id: "cmd-in-09",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Nội dung nào sau đây phản ánh bản chất cách mạng, khoa học của Tư tưởng Hồ Chí Minh được xác định trong định nghĩa của Đại hội XI?",
      options: [
        "Là sự kết hợp các tôn giáo lớn để tìm ra lối thoát cho dân tộc",
        "Là hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam",
        "Là những ghi chép tản mạn phản ánh cảm xúc cá nhân của Người trước thời cuộc",
        "Là hệ thống các học thuyết kinh tế kỹ trị nhằm công nghiệp hóa đất nước"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Bản chất khoa học và cách mạng của Tư tưởng Hồ Chí Minh nằm ở việc nó tạo thành một hệ thống quan điểm toàn diện, sâu sắc giải quyết các vấn đề cơ bản, cốt lõi của cách mạng Việt Nam."
    },
    {
      id: "cmd-in-10",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Hai phương thức tiếp cận hệ thống Tư tưởng Hồ Chí Minh được nêu trong giáo trình bao gồm những gì?",
      options: [
        "Nghiên cứu theo thứ tự thời gian sinh sống và theo các bài báo ngắn của Người",
        "Nhận diện như một hệ thống tri thức tổng hợp và là hệ thống các quan điểm về những vấn đề cơ bản của cách mạng Việt Nam",
        "Nghiên cứu thông qua các hiệp định ký kết và các bài phát biểu ngoại giao",
        "Tiếp cận từ góc độ giáo dục đạo đức đơn thuần và từ góc độ nghệ thuật quân sự"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Phương thức tiếp cận thứ nhất xem xét hệ thống tri thức tổng hợp (triết học, kinh tế, chính trị...); phương thức thứ hai xem xét hệ thống quan điểm về những vấn đề cơ bản của cách mạng (dân tộc, chủ nghĩa xã hội, đại đoàn kết...)."
    },
    {
      id: "cmd-in-11",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Nhận diện Tư tưởng Hồ Chí Minh là một hệ thống tri thức tổng hợp có nghĩa là hệ thống này bao gồm các lĩnh vực nào?",
      options: [
        "Tư tưởng triết học, tư tưởng kinh tế, chính trị, quân sự, văn hóa, đạo đức và nhân văn",
        "Tập hợp các sắc lệnh và chỉ thị hành chính do Chủ tịch nước ban hành từ 1945",
        "Các văn bản báo cáo kinh tế của Chính phủ qua các kỳ Đại hội Đảng",
        "Những giáo lý tôn giáo truyền thống phương Đông được Người biên soạn lại"
      ],
      answer: 0,
      difficulty: "medium",
      isOutside: false,
      explanation: "Khi tiếp cận như một hệ thống tri thức tổng hợp, ta thấy rõ di sản của Người bao phủ rộng khắp các lĩnh vực: triết học, kinh tế, chính trị, quân sự, văn hóa, đạo đức và nhân văn."
    },
    {
      id: "cmd-in-12",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Nhận diện Tư tưởng Hồ Chí Minh là hệ thống các quan điểm về những vấn đề cơ bản của cách mạng Việt Nam bao gồm những nội dung cốt lõi nào?",
      options: [
        "Tư tưởng về văn học nghệ thuật, thể thao và các phương thức giải trí",
        "Tư tưởng về dân tộc và cách mạng giải phóng dân tộc, về CNXH, về Đảng Cộng sản, về đại đoàn kết, về dân chủ, Nhà nước...",
        "Chi tiết các bản vẽ kỹ thuật quân sự trong kháng chiến chống Pháp",
        "Các điều khoản chi tiết của các hiệp định ký kết với chính phủ Pháp"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Đây là phương tiếp cận hệ thống quan điểm chỉ đạo cách mạng: từ cách mạng giải phóng dân tộc đến xây dựng chủ nghĩa xã hội, xây dựng Đảng, chính quyền của dân, do dân, vì dân và khối đại đoàn kết."
    },
    {
      id: "cmd-in-13",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Sự phát triển nhận thức của Đảng về nguồn gốc lý luận của Tư tưởng Hồ Chí Minh tại Đại hội XI thể hiện ở việc làm rõ ba yếu tố nào?",
      options: [
        "Triết học Hy Lạp, Nho giáo phương Đông và Cách mạng công nghiệp phương Tây",
        "Chủ nghĩa Mác - Lênin, giá trị truyền thống tốt đẹp của dân tộc và tinh hoa văn hóa nhân loại",
        "Tư tưởng Khai sáng, chủ nghĩa yêu nước tự phát và các tôn giáo bản địa",
        "Học thuyết Tam dân, Tư tưởng dân chủ tư sản và phong trào Cần Vương"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Văn kiện Đại hội XI làm rõ nguồn gốc lý luận của tư tưởng Hồ Chí Minh bao gồm: Chủ nghĩa Mác-Lênin (nguồn gốc trực tiếp), giá trị truyền thống tốt đẹp của dân tộc và tinh hoa văn hóa nhân loại."
    },
    {
      id: "cmd-in-14",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Đại hội XI (2011) khẳng định điều gì về giá trị tinh thần của Tư tưởng Hồ Chí Minh đối với Đảng và dân tộc?",
      options: [
        "Là một di sản lịch sử đã hoàn thành xong nhiệm vụ chỉ đạo cách mạng",
        "Là tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc ta",
        "Là một mô hình lý thuyết cần được sửa đổi toàn bộ cho hợp thời đại",
        "Là hệ thống tri thức hành chính dùng riêng cho cán bộ cấp cao"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Định nghĩa tại Đại hội XI nhấn mạnh Tư tưởng Hồ Chí Minh là tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc ta, tiếp tục dẫn đường cho cách mạng Việt Nam."
    },
    {
      id: "cmd-in-15",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Mô tả nào sau đây đúng nhất về tiến trình nhận thức của Đảng Cộng sản Việt Nam đối với Tư tưởng Hồ Chí Minh?",
      options: [
        "Nhận thức ngay lập tức một hệ thống lý luận hoàn chỉnh từ khi thành lập Đảng năm 1930",
        "Quá trình nhận thức đi từ thấp đến cao, từ những vấn đề cụ thể đến hệ thống hoàn chỉnh",
        "Nhận thức không hề có sự thay đổi hay bổ sung nào qua các thời kỳ Đại hội",
        "Nhận thức hoàn toàn phụ thuộc vào các học thuyết chính trị ngoại lai từ bên ngoài"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Đảng ta đã nhận thức Tư tưởng Hồ Chí Minh thông qua một tiến trình dài lâu, đúc kết thực tiễn cách mạng qua từng giai đoạn để hoàn thiện hệ thống quan điểm lý luận."
    },
    {
      id: "cmd-in-16",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Điểm phân biệt cốt lõi giữa khái niệm \"tư tưởng\" của cá nhân thông thường và khái niệm \"tư tưởng\" trong môn học Tư tưởng Hồ Chí Minh là gì?",
      options: [
        "Tư tưởng cá nhân có tính linh hoạt cao, còn Tư tưởng Hồ Chí Minh mang tính áp đặt",
        "Tư tưởng trong môn học phải là một hệ thống những quan điểm được xây dựng trên một nền tảng triết học nhất quán, đại biểu cho ý chí, nguyện vọng của một giai cấp, một dân tộc",
        "Tư tưởng cá nhân mang tính chủ quan, còn Tư tưởng Hồ Chí Minh hoàn toàn do ngoại cảnh quyết định",
        "Tư tưởng cá nhân không có mục tiêu, còn Tư tưởng Hồ Chí Minh chỉ nghiên cứu về lịch sử"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Một hệ tư tưởng khoa học bắt buộc phải có tính hệ thống, xây dựng trên một nền tảng triết học (thế giới quan và phương pháp luận) nhất quán và đại diện cho quyền lợi của một giai cấp hoặc dân tộc."
    },
    {
      id: "cmd-in-17",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Tại sao định nghĩa Tư tưởng Hồ Chí Minh khẳng định tư tưởng của Người phản ánh \"những vấn đề có tính quy luật của cách mạng Việt Nam\"?",
      options: [
        "Ví hệ thống tư tưởng của Người kế thừa toàn bộ các quy luật tự nhiên vật lý học",
        "Vì tư tưởng đó đã giải quyết đúng đắn và khoa học các yêu cầu khách quan, xu thế phát triển tất yếu của lịch sử cách mạng dân tộc",
        "Vì Hồ Chí Minh đã tự đặt ra các quy luật chủ quan bắt buộc thực tiễn cách mạng phải vận động theo",
        "Vì hệ thống lý luận của Người không chịu ảnh hưởng bởi quy luật vận động lịch sử thế giới"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Tư tưởng Hồ Chí Minh không phải các khẩu hiệu chủ quan, mà phản ánh đúng quy luật vận động khách quan của lịch sử cách mạng giải phóng dân tộc thuộc địa và xu thế phát triển lên chủ nghĩa xã hội của Việt Nam."
    },
    {
      id: "cmd-in-18",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Việc khẳng định Tư tưởng Hồ Chí Minh là \"kết quả của sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta\" nhằm bác bỏ quan điểm sai trái nào?",
      options: [
        "Cho rằng cách mạng Việt Nam không cần liên hệ với phong trào cộng sản quốc tế",
        "Cho rằng Hồ Chí Minh chỉ rập khuôn giáo điều theo chủ nghĩa Mác-Lênin, hoặc cho rằng Người xa rời chủ nghĩa Mác-Lênin",
        "Cho rằng chủ nghĩa Mác-Lênin đã lỗi thời và hoàn toàn không có giá trị đối với Việt Nam",
        "Cho rằng phong trào giải phóng dân tộc có thể thành công mà không cần Đảng lãnh đạo"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Mệnh đề này khẳng định tư duy độc lập tự chủ của Người: không sao chép máy móc giáo điều mà vận dụng đúng tinh thần biện chứng để giải quyết thực tiễn cách mạng Việt Nam, đồng thời giữ vững bản chất cách mạng của chủ nghĩa Mác-Lênin."
    },
    {
      id: "cmd-in-19",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Trong định nghĩa khoa học về Tư tưởng Hồ Chí Minh, các mục tiêu \"giải phóng dân tộc, giải phóng giai cấp và giải phóng con người\" có mối quan hệ biện chứng như thế nào?",
      options: [
        "Độc lập hoàn toàn, giải phóng dân tộc xong là kết thúc mà không cần giải phóng giai cấp, con người",
        "Thống nhất biện chứng, trong đó giải phóng dân tộc là nhiệm vụ hàng đầu, tạo tiền đề để giải phóng giai cấp và cuối cùng hướng tới giải phóng con người toàn diện",
        "Giải phóng giai cấp phải được đặt lên hàng đầu và thực hiện trước để giải phóng dân tộc",
        "Các mục tiêu này mâu thuẫn lẫn nhau và cản trở tiến trình xây dựng chủ nghĩa xã hội"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Hồ Chí Minh kết hợp nhuần nhuyễn vấn đề dân tộc với vấn đề giai cấp. Giải phóng dân tộc là điều kiện tiên quyết, giải phóng giai cấp củng cố nền độc lập và đích đến cuối cùng là giải phóng con người thoát khỏi áp bức, nghèo đói."
    },
    {
      id: "cmd-in-20",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "khai-niem-tu-tuong",
      question: "Phân tích định nghĩa khoa học của Đại hội XI, yếu tố nào chứng minh tính kết hợp bền vững giữa giá trị lịch sử dân tộc và thế giới quan thời đại mới?",
      options: [
        "Việc duy trì chế độ phong kiến kết hợp với áp dụng kinh tế thị trường phương Tây",
        "Sự kết tinh tinh hoa văn hóa, giá trị truyền thống dân tộc Việt Nam với việc tiếp thu tinh hoa văn hóa nhân loại trên nền tảng thế giới quan khoa học Mác-Lênin",
        "Việc bài trừ triệt để văn hóa truyền thống để tiếp thu trọn vẹn văn minh công nghiệp phương Tây",
        "Sự tập trung phát triển khoa học kỹ thuật độc lập hoàn toàn, tách rời các yếu tố lịch sử văn hóa dân tộc"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Tư tưởng Hồ Chí Minh là sản phẩm tổng hòa của chủ nghĩa yêu nước, văn hóa truyền thống tốt đẹp của dân tộc kết hợp với tinh hoa nhân loại và hệ tư tưởng tiên tiến nhất của thời đại là chủ nghĩa Mác-Lênin."
    },

    /* Mục 2: Đối tượng và nhiệm vụ của môn học (12 câu: 3 dễ, 6 trung bình, 3 khó) */
    {
      id: "cmd-in-21",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "doi-tuong-nhiem-vu",
      question: "Đối tượng nghiên cứu chính yếu của môn học Tư tưởng Hồ Chí Minh được xác định là gì?",
      options: [
        "Toàn bộ tiểu sử cuộc đời và các mối quan hệ gia đình của Hồ Chí Minh",
        "Hệ thống quan điểm, lý luận trong di sản của Hồ Chí Minh và quá trình hiện thực hóa lý luận đó trong thực tiễn cách mạng Việt Nam",
        "Các chính sách phát triển kinh tế vĩ mô của Việt Nam trong thời kỳ Đổi mới",
        "Lịch sử chi tiết các chiến dịch quân sự lớn từ năm 1945 đến năm 1975"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: false,
      explanation: "Môn học không chỉ nghiên cứu hệ thống lý luận (tác phẩm, bài nói) mà còn nghiên cứu quá trình vận động, hiện thực hóa các lý luận đó trong thực tiễn đấu tranh của cách mạng Việt Nam."
    },
    {
      id: "cmd-in-22",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "doi-tuong-nhiem-vu",
      question: "Quá trình nghiên cứu đối tượng của môn học Tư tưởng Hồ Chí Minh gồm hai mặt thống nhất biện chứng nào?",
      options: [
        "Việc soạn thảo văn kiện chính trị và việc tổ chức các cuộc họp báo quốc tế",
        "Quá trình sản sinh tư tưởng và quá trình hiện thực hóa tư tưởng đó trong thực tiễn cách mạng",
        "Việc viết các bài thơ cách mạng và việc giảng dạy học tập tại trường học",
        "Công tác xây dựng hệ thống tổ chức Đảng và công tác tài chính của Đảng"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: false,
      explanation: "Đối tượng nghiên cứu là quá trình mang tính quy luật gồm hai mặt biện chứng: sản sinh tư tưởng (lý luận hình thành từ thực tiễn) và hiện thực hóa tư tưởng (lý luận đi vào chỉ đạo thực tiễn)."
    },
    {
      id: "cmd-in-23",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "doi-tuong-nhiem-vu",
      question: "Bên cạnh việc nghiên cứu bản thân hệ thống lý luận của Người, môn học Tư tưởng Hồ Chí Minh còn có đối tượng nghiên cứu là:",
      options: [
        "Các chính sách hành chính của các quốc gia tư bản chủ nghĩa",
        "Quá trình vận động, hiện thực hóa các quan điểm lý luận đó trong thực tiễn cách mạng Việt Nam",
        "Các cuộc khởi nghĩa nông dân thời kỳ phong kiến thế kỷ XVII",
        "Các sáng tác văn học nghệ thuật của các nhà thơ chiến sĩ kháng chiến"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: false,
      explanation: "Di sản của Hồ Chí Minh có sức sống ở thực tiễn. Nghiên cứu môn học buộc phải nghiên cứu quá trình hiện thực hóa tư tưởng cách mạng đó trong đường lối của Đảng và thắng lợi thực tế của nhân dân."
    },
    {
      id: "cmd-in-24",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "doi-tuong-nhiem-vu",
      question: "Nội dung nào sau đây không thuộc 6 nhiệm vụ nghiên cứu cốt lõi của môn học Tư tưởng Hồ Chí Minh?",
      options: [
        "Nghiên cứu cơ sở hình thành và các giai đoạn phát triển của Tư tưởng Hồ Chí Minh",
        "Nghiên cứu các tác phẩm văn học cổ điển phương Đông mà Hồ Chí Minh từng dịch ra thơ lục bát",
        "Nghiên cứu vai trò nền tảng tư tưởng, kim chỉ nam hành động của Tư tưởng Hồ Chí Minh đối với cách mạng Việt Nam",
        "Nghiên cứu quá trình nhận thức, vận dụng, phát triển Tư tưởng Hồ Chí Minh của Đảng Cộng sản Việt Nam"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Việc dịch các tác phẩm văn học cổ điển không nằm trong các nhiệm vụ khoa học cốt lõi của môn học lý luận chính trị này. Môn học tập trung nghiên cứu cơ sở, tiến trình, nội dung bản chất và giá trị cách mạng của tư tưởng Bác."
    },
    {
      id: "cmd-in-25",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "doi-tuong-nhiem-vu",
      question: "Việc nghiên cứu cơ sở khách quan và nhân tố chủ quan hình thành Tư tưởng Hồ Chí Minh hướng tới nhiệm vụ gì của môn học?",
      options: [
        "Chứng minh cuộc đời của Người chịu sự chi phối hoàn toàn của số phận ngẫu nhiên",
        "Khẳng định tính tất yếu khách quan sự ra đời của Tư tưởng Hồ Chí Minh nhằm giải đáp các yêu cầu thực tiễn dân tộc đặt ra",
        "Lập danh sách tất cả các tổ chức chính trị quốc tế mà Người từng tham gia",
        "Phân tích ảnh hưởng của điều kiện địa lý tự nhiên quê hương Nghệ An đến tư duy Người"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Nhiệm vụ này nhằm giải thích tại sao lịch sử Việt Nam cuối thế kỷ XIX - đầu thế kỷ XX lại đòi hỏi một con đường cứu nước mới và chứng minh sự xuất hiện Tư tưởng Hồ Chí Minh là câu trả lời tất yếu cho lịch sử."
    },
    {
      id: "cmd-in-26",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "doi-tuong-nhiem-vu",
      question: "Nhiệm vụ nghiên cứu \"các giai đoạn hình thành và phát triển của Tư tưởng Hồ Chí Minh\" có vai trò gì?",
      options: [
        "Ghi nhận chính xác các chức vụ hành chính mà Người nắm giữ qua từng thời kỳ",
        "Làm rõ quy luật phát triển logic và sự trưởng thành vượt bậc trong tư duy lý luận của Người gắn với thực tiễn cách mạng",
        "Liệt kê tất cả các bí danh và bút danh Người đã sử dụng trong đời hoạt động",
        "Xác định sự thay đổi địa điểm văn phòng làm việc của Người qua các thời kỳ kháng chiến"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Tư tưởng của Người không đứng yên mà phát triển liên tục. Việc nghiên cứu các giai đoạn giúp người học thấy được logic tư duy và quá trình Người hoàn thiện lý luận cách mạng thuộc địa qua thực tiễn hoạt động."
    },
    {
      id: "cmd-in-27",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "doi-tuong-nhiem-vu",
      question: "Khi nghiên cứu nhiệm vụ \"quá trình nhận thức, vận dụng, phát triển Tư tưởng Hồ Chí Minh của Đảng\", môn học làm sáng tỏ:",
      options: [
        "Sự tranh luận lý luận giữa các xu hướng chính trị tại Việt Nam đầu thế kỷ XX",
        "Sự kế thừa, bổ sung và phát triển lý luận của Đảng trên nền tảng tư tưởng Hồ Chí Minh để giải quyết nhiệm vụ cách mạng thời kỳ đổi mới",
        "Chi tiết lịch sử các kỳ họp Quốc hội Việt Nam từ năm 1946 đến nay",
        "Cơ cấu tổ chức bộ máy và chức năng của các bộ ngành trong Chính phủ"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Tư tưởng Hồ Chí Minh luôn được Đảng vận dụng sáng tạo và làm phong phú thêm nhằm đáp ứng yêu cầu của từng giai đoạn cách mạng mới, đặc biệt là trong sự nghiệp đổi mới đất nước."
    },
    {
      id: "cmd-in-28",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "doi-tuong-nhiem-vu",
      question: "Làm rõ giá trị tư tưởng, lý luận của Hồ Chí Minh đối với kho tàng tư tưởng, lý luận cách mạng thế giới của thời đại là:",
      options: [
        "Nhiệm vụ nghiên cứu của môn học Đường lối ngoại giao",
        "Một trong những nhiệm vụ nghiên cứu cốt lõi của môn học Tư tưởng Hồ Chí Minh",
        "Nhiệm vụ chỉ áp dụng riêng cho các nhà nghiên cứu lịch sử quốc tế",
        "Nội dung phụ không được đề cập đến trong chương trình đào tạo đại học"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Đây là một trong 6 nhiệm vụ cơ bản của môn học, giúp khẳng định đóng góp to lớn của Hồ Chí Minh đối với phong trào giải phóng dân tộc và lý luận của cách mạng thuộc địa trên toàn thế giới."
    },
    {
      id: "cmd-in-29",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "doi-tuong-nhiem-vu",
      question: "Tại sao đối tượng nghiên cứu của môn học lại đặc biệt nhấn mạnh khía cạnh \"quá trình hiện thực hóa các quan điểm, lý luận Hồ Chí Minh\"?",
      options: [
        "Vì Tư tưởng Hồ Chí Minh không phải lý thuyết suông mà là lý luận hành động gắn liền mật thiết với thực tiễn cách mạng sinh động",
        "Vì số lượng tác phẩm viết của Người quá ít không đủ tạo thành một hệ thống lý luận lý thuyết độc lập",
        "Nhằm mục đích hạn chế tối đa việc sinh viên phải đọc các tác phẩm gốc của Người",
        "Để chứng minh thực tiễn cách mạng luôn quan trọng hơn sự phát triển tư duy lý luận"
      ],
      answer: 0,
      difficulty: "medium",
      isOutside: false,
      explanation: "Hồ Chí Minh là nhà hoạt động thực tiễn vĩ đại. Lý luận của Người đúc kết từ thực tiễn và sinh ra để phục vụ thực tiễn, do đó nghiên cứu tư tưởng của Người không thể tách rời quá trình hiện thực hóa nó."
    },
    {
      id: "cmd-in-30",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "doi-tuong-nhiem-vu",
      question: "Tại sao nói đối tượng nghiên cứu của môn học Tư tưởng Hồ Chí Minh có sự khác biệt nhưng lại thống nhất chặt chẽ với môn Lịch sử Đảng Cộng sản Việt Nam?",
      options: [
        "Vì Lịch sử Đảng chỉ nghiên cứu tiểu sử Hồ Chí Minh, còn môn này nghiên cứu về các lãnh tụ khác",
        "Vì Lịch sử Đảng tập trung vào tiến trình sự kiện hoạt động thực tiễn của Đảng; còn môn này đi sâu vào hệ thống quan điểm lý luận, quy luật hình thành và hiện thực hóa lý luận đó",
        "Vì hai môn học này hoàn toàn trùng khớp nhau về mặt nội dung nghiên cứu và phương pháp phân tích",
        "Vì môn Tư tưởng Hồ Chí Minh chỉ nghiên cứu giai đoạn trước năm 1945, còn môn Lịch sử Đảng nghiên cứu giai đoạn sau năm 1945"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Lịch sử Đảng nghiên cứu tiến trình hoạt động thực tiễn của Đảng (sự kiện, mốc lịch sử). Môn Tư tưởng Hồ Chí Minh tập trung làm rõ hệ thống lý luận khoa học dẫn đường và quy luật phát sinh, phát triển của lý luận đó."
    },
    {
      id: "cmd-in-31",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "doi-tuong-nhiem-vu",
      question: "Nhiệm vụ nghiên cứu \"Nội dung, bản chất cách mạng, khoa học, đặc điểm các quan điểm trong hệ thống Tư tưởng Hồ Chí Minh\" đòi hỏi phải làm nổi bật đặc trưng nào?",
      options: [
        "Tính chất khép kín, không chịu ảnh hưởng và không kế thừa từ bất kỳ học thuyết chính trị nào",
        "Tính hệ thống nhất quán, tính thực tiễn phong phú và tính nhân văn sâu sắc hướng tới giải phóng con người của tư tưởng Người",
        "Sự thay đổi liên tục, mâu thuẫn các mục tiêu chiến lược cách mạng của Người qua từng năm hoạt động",
        "Việc rập khuôn máy móc tất cả các nguyên lý của chủ nghĩa Mác vô sản vào hoàn cảnh Việt Nam thuộc địa"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Mục tiêu tối thượng của tư tưởng Hồ Chí Minh là giải phóng dân tộc, giải phóng giai cấp và giải phóng con người. Phân tích bản chất cách mạng đòi hỏi phải làm bật lên tính nhất quán nhân văn và tính thực tiễn này."
    },
    {
      id: "cmd-in-32",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "doi-tuong-nhiem-vu",
      question: "Mối quan hệ biện chứng giữa hai mặt đối tượng nghiên cứu (Sản sinh tư tưởng và Hiện thực hóa tư tưởng) được thể hiện thế nào trong cuộc đời hoạt động của Người?",
      options: [
        "Hai mặt này hoàn toàn độc lập, sản sinh tư tưởng diễn ra ở nước ngoài, còn hiện thực hóa chỉ diễn ra khi Người về nước",
        "Lý luận được sản sinh thông qua tổng kết thực tiễn cách mạng, sau đó lý luận định hướng thực tiễn và được kiểm nghiệm, bổ sung hoàn thiện ngay trong quá trình chỉ đạo thực tiễn cách mạng",
        "Hiện thực hóa thực tiễn đi trước, sản sinh tư tưởng đi sau để hợp thức hóa những gì đã thực hiện",
        "Sản sinh tư tưởng hoàn toàn mang tính suy tưởng triết học cá nhân thuần túy, độc lập với kết quả hiện thực hóa thực tế"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Thực tiễn sản sinh ra nhu cầu lý luận và kiểm nghiệm lý luận. Lý luận soi đường cho thực tiễn. Vòng tròn khép kín này thể hiện sự thống nhất biện chứng giữa lý luận và thực tiễn trong cuộc đời hoạt động của Người."
    },

    /* Mục 3: Mối quan hệ với các môn khác (8 câu: 2 dễ, 4 trung bình, 2 khó) */
    {
      id: "cmd-in-33",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "moi-quan-he",
      question: "Nguồn gốc tư tưởng - lý luận trực tiếp quyết định bản chất cách mạng, khoa học của Tư tưởng Hồ Chí Minh là gì?",
      options: [
        "Nho giáo phương Đông cổ đại",
        "Chủ nghĩa Mác - Lênin",
        "Chủ nghĩa Tam dân của Tôn Trung Sơn",
        "Tư tưởng Khai sáng Pháp thế kỷ XVIII"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: false,
      explanation: "Trong các tiền đề tư tưởng - lý luận, chủ nghĩa Mác-Lênin là nguồn gốc trực tiếp và quan trọng nhất quyết định bản chất cách mạng, khoa học của Tư tưởng Hồ Chí Minh."
    },
    {
      id: "cmd-in-34",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "moi-quan-he",
      question: "Mối quan hệ giữa Tư tưởng Hồ Chí Minh với Đường lối cách mạng của Đảng Cộng sản Việt Nam được xác định là:",
      options: [
        "Hai bộ phận độc lập, không liên quan đến việc hoạch định chính sách của Đảng",
        "Tư tưởng Hồ Chí Minh là bộ phận nền tảng tư tưởng, kim chỉ nam hành động và là cơ sở khoa học để xây dựng đường lối cách mạng đúng đắn",
        "Tư tưởng Hồ Chí Minh chỉ đóng vai trò tài liệu tham khảo phụ khi Đảng gặp bế tắc về lý luận",
        "Tư tưởng Hồ Chí Minh thay thế hoàn toàn đường lối chính sách thực tế của Nhà nước"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: false,
      explanation: "Tư tưởng Hồ Chí Minh thuộc hệ tư tưởng của Đảng, là kim chỉ nam và nền tảng khoa học vững chắc giúp Đảng hoạch định đường lối, chiến lược chính xác."
    },
    {
      id: "cmd-in-35",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "moi-quan-he",
      question: "Mối quan hệ trực tiếp giữa chủ nghĩa Mác - Lênin và Tư tưởng Hồ Chí Minh được mô tả như thế nào?",
      options: [
        "Chủ nghĩa Mác-Lênin chỉ là một nguồn tham khảo tương đương với triết học phương Đông",
        "Chủ nghĩa Mác-Lênin là cơ sở thế giới quan, phương pháp luận và nguồn gốc tư tưởng lý luận trực tiếp quyết định bản chất cách mạng, khoa học của Tư tưởng Hồ Chí Minh",
        "Tư tưởng Hồ Chí Minh sao chép nguyên bản chủ nghĩa Mác-Lênin không hề có sự thay đổi hay sáng tạo nào",
        "Hồ Chí Minh đã bác bỏ chủ nghĩa Mác-Lênin để thay thế hoàn toàn bằng một chủ nghĩa dân tộc mới"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Chủ nghĩa Mác-Lênin cung cấp thế giới quan và phương pháp luận duy vật biện chứng giúp Hồ Chí Minh phân tích bối cảnh lịch sử thuộc địa và tìm ra con đường cứu nước đúng đắn."
    },
    {
      id: "cmd-in-36",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "moi-quan-he",
      question: "Ý nào sau đây thể hiện đúng mối liên hệ giữa môn học Tư tưởng Hồ Chí Minh và môn Đường lối cách mạng của Đảng Cộng sản Việt Nam?",
      options: [
        "Tư tưởng Hồ Chí Minh là bộ phận nền tảng tư tưởng của Đảng, là kim chỉ nam cho sự ra đời và phát triển của đường lối cách mạng của Đảng",
        "Hai môn học này mâu thuẫn trực tiếp với nhau về phương pháp đấu tranh giải phóng dân tộc",
        "Đường lối cách mạng của Đảng ra đời trước làm cơ sở sinh ra Tư tưởng Hồ Chí Minh sau",
        "Môn Tư tưởng Hồ Chí Minh chỉ nghiên cứu lý thuyết, môn Đường lối chỉ nghiên cứu thực tiễn kinh tế"
      ],
      answer: 0,
      difficulty: "medium",
      isOutside: false,
      explanation: "Đường lối cách mạng của Đảng cụ thể hóa và phát triển Tư tưởng Hồ Chí Minh trong thực tiễn lãnh đạo đất nước. Do đó, tư tưởng của Người là gốc rễ, nền tảng cho sự hình thành đường lối."
    },
    {
      id: "cmd-in-37",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "moi-quan-he",
      question: "Phát biểu nào sau đây là SAI khi nói về mối quan hệ giữa chủ nghĩa Mác - Lênin và Tư tưởng Hồ Chí Minh?",
      options: [
        "Tư tưởng Hồ Chí Minh thuộc hệ tư tưởng Mác - Lênin",
        "Tư tưởng Hồ Chí Minh là sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện thực tế Việt Nam",
        "Tư tưởng Hồ Chí Minh là sự sao chép rập khuôn chủ nghĩa Mác - Lênin áp dụng tại Việt Nam",
        "Chủ nghĩa Mác - Lênin là cơ sở thế giới quan khoa học của Tư tưởng Hồ Chí Minh"
      ],
      answer: 2,
      difficulty: "medium",
      isOutside: false,
      explanation: "Tư tưởng Hồ Chí Minh là sự vận dụng và phát triển sáng tạo một cách chủ động, tránh việc rập khuôn hay giáo điều máy móc các nguyên lý kinh điển Mác-xít."
    },
    {
      id: "cmd-in-38",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "moi-quan-he",
      question: "Liên kết logic giữa ba môn học lý luận chính trị: \"Những nguyên lý cơ bản của chủ nghĩa Mác-Lênin\", \"Tư tưởng Hồ Chí Minh\" và \"Đường lối cách mạng của Đảng\" là gì?",
      options: [
        "Mác-Lênin cung cấp lý thuyết chung; Đường lối cung cấp lý thuyết riêng; Tư tưởng Hồ Chí Minh là cầu nối trung gian không có vai trò thực tế",
        "Mác-Lênin cung cấp thế giới quan, phương pháp luận; Tư tưởng Hồ Chí Minh vận dụng phát triển sáng tạo các nguyên lý đó vào Việt Nam; Đường lối cách mạng cụ thể hóa nền tảng tư tưởng đó vào thực tiễn chỉ đạo cách mạng qua các thời kỳ",
        "Ba môn học độc lập hoàn toàn, đại diện cho ba xu hướng tư tưởng chính trị khác nhau",
        "Đường lối Đảng quyết định chủ nghĩa Mác-Lênin, còn Tư tưởng Hồ Chí Minh kế thừa từ cả hai"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Ba môn học tạo nên tính thống nhất: thế giới quan lý luận chung (Mác-Lênin) -> thế giới quan lý luận cụ thể hóa ở Việt Nam (TTHCM) -> sự chỉ đạo thực tiễn cách mạng cụ thể của Đảng qua từng thời kỳ (Đường lối)."
    },
    {
      id: "cmd-in-39",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "moi-quan-he",
      question: "Tại sao việc học tập và nghiên cứu môn học Tư tưởng Hồ Chí Minh phải đặt trong mối quan hệ hữu cơ với môn Những nguyên lý cơ bản của chủ nghĩa Mác - Lênin?",
      options: [
        "Vì Hồ Chí Minh là một nhà triết học lý luận thuộc trường phái Mác-xít cổ điển",
        "Vì không hiểu thế giới quan, phương pháp luận Mác-xít thì không thể hiểu được bản chất cách mạng, khoa học và sự sáng tạo của Hồ Chí Minh trong việc giải quyết các vấn đề cách mạng thuộc địa",
        "Vì hai hệ thống tư tưởng này là một, chỉ khác nhau về tên gọi ở phương Đông và phương Tây",
        "Để chứng minh các bài viết của Bác hoàn toàn trùng khớp từng từ ngữ với tác phẩm của C. Mác"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Hồ Chí Minh tiếp thu lý luận theo phương pháp duy vật biện chứng. Không nắm vững Mác-Lênin thì không thể hiểu được tại sao Bác lại có các quyết sách độc lập, sáng tạo về cách mạng giải phóng dân tộc tại các nước thuộc địa."
    },
    {
      id: "cmd-in-40",
      sectionId: "doi-tuong-nghien-cuu",
      subsectionId: "moi-quan-he",
      question: "Điểm cốt lõi thể hiện tính kế thừa và phát triển khoa học trong mối quan hệ giữa Tư tưởng Hồ Chí Minh và Đường lối cách mạng của Đảng Cộng sản Việt Nam là gì?",
      options: [
        "Đảng luôn giữ nguyên các biện pháp cụ thể của Hồ Chí Minh từ năm 1945 mà không thay đổi nhằm bảo vệ tính truyền thống",
        "Tư tưởng Hồ Chí Minh là cơ sở khoa học giúp Đảng tránh rơi vào bệnh giáo điều, chủ quan duy ý chí khi xây dựng và điều chỉnh đường lối, chính sách trong thực tiễn đổi mới đất nước",
        "Đường lối của Đảng luôn đi trước lý luận của Người để kiểm nghiệm xem lý luận đó có đúng đắn hay không",
        "Tư tưởng Hồ Chí Minh chỉ đóng vai trò thứ yếu so với chủ nghĩa Mác - Lênin trong việc hoạch định đường lối"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Tư tưởng Hồ Chí Minh cung cấp phương pháp tư duy độc lập và thực tiễn sâu sắc, giúp Đảng luôn bám sát thực tế đất nước khi đề ra đường lối và tránh bệnh giáo điều rập khuôn mô hình nước ngoài."
    },

    /* ----- PHẦN II: PHƯƠNG PHÁP NGHIÊN CỨU (30 câu) ----- */
    /* Mục 1: Cơ sở phương pháp luận (18 câu: 5 dễ, 8 trung bình, 5 khó) */
    {
      id: "cmd-in-41",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Nguyên tắc phương pháp luận nào đòi hỏi khi nghiên cứu Tư tưởng Hồ Chí Minh phải đứng trên lập trường, quan điểm, phương pháp của chủ nghĩa Mác - Lênin và đường lối của Đảng?",
      options: [
        "Nguyên tắc quan điểm lịch sử cụ thể",
        "Nguyên tắc bảo đảm sự thống nhất giữa tính đảng và tính khoa học",
        "Nguyên tắc quan điểm toàn diện và hệ thống",
        "Nguyên tắc lý luận gắn liền với thực tiễn"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: false,
      explanation: "Đứng trên lập trường của chủ nghĩa Mác-Lênin và đường lối Đảng để nghiên cứu trung thực, khoa học chính là nội dung của sự thống nhất giữa tính đảng và tính khoa học."
    },
    {
      id: "cmd-in-42",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Câu nói: \"Thực tiễn không có lý luận hướng dẫn thì thành thực tiễn mù quáng; lý luận mà không liên hệ với thực tiễn là lý luận suông\" là của ai?",
      options: [
        "C. Mác",
        "V.I. Lênin",
        "Hồ Chí Minh",
        "Ph. Ăng-ghen"
      ],
      answer: 2,
      difficulty: "easy",
      isOutside: false,
      explanation: "Hồ Chí Minh luôn nhấn mạnh mối liên hệ khăng khít giữa lý luận và thực tiễn, phê phán lý luận suông cũng như phê phán thực tiễn mò mẫm không có lý luận dẫn đường."
    },
    {
      id: "cmd-in-43",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Theo phương pháp luận nghiên cứu môn học, chủ nghĩa Mác - Lênin khẳng định thực tiễn đóng vai trò gì đối với lý luận?",
      options: [
        "Là yếu tố phụ trợ xuất hiện sau khi lý luận khoa học đã được hoàn thành",
        "Là nguồn gốc, động lực của nhận thức, là cơ sở và tiêu chuẩn của chân lý",
        "Là rào cản cản trở sự phát triển của tư duy lý luận thuần túy",
        "Là đối tượng nghiên cứu độc lập không liên hệ gì với lý luận chính trị"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: false,
      explanation: "Theo thế giới quan biện chứng, thực tiễn sinh ra nhu cầu nhận thức (nguồn gốc), thúc đẩy nhận thức phát triển (động lực) và là thước đo cuối cùng kiểm chứng nhận thức (tiêu chuẩn chân lý)."
    },
    {
      id: "cmd-in-44",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Yêu cầu cốt lõi của nguyên tắc \"học đi đôi với hành\" trong nghiên cứu môn học là gì?",
      options: [
        "Phải ghi nhớ toàn bộ sách lý luận trước khi tiến hành lao động thực tế",
        "Phải biết vận dụng những kiến thức đã học vào cuộc sống, thực tiễn, phục vụ cho sự nghiệp cách mạng của đất nước",
        "Phải tham gia các hoạt động thực tế mà không cần học lý thuyết chính trị",
        "Phải viết báo cáo lý luận chi tiết sau mỗi hành động thực tế cách mạng"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: false,
      explanation: "Học lý thuyết phải đi đôi với thực hành. Mục đích tối cao của việc tiếp thu tri thức lý luận là để giải quyết các vấn đề thực tiễn của cuộc sống và đóng góp xã hội."
    },
    {
      id: "cmd-in-45",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Quan điểm phương pháp luận nào nhấn mạnh việc \"tách rời một yếu tố sẽ dẫn đến hiểu sai lệch hệ thống tư tưởng của Hồ Chí Minh\"?",
      options: [
        "Quan điểm lịch sử cụ thể",
        "Quan điểm toàn diện và hệ thống",
        "Quan điểm kế thừa và phát triển",
        "Nguyên tắc tính đảng và tính khoa học"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: false,
      explanation: "Tư tưởng Hồ Chí Minh là hệ thống quan điểm toàn diện, nhất quán. Tách rời một yếu tố khỏi hệ thống (ví dụ tách độc lập dân tộc khỏi CNXH) sẽ dẫn đến hiểu sai lệch bản chất tư tưởng của Người."
    },
    {
      id: "cmd-in-46",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Luận điểm của Lênin: \"Muốn thực sự hiểu được sự vật thì cần phải nhìn bao quát và nghiên cứu tất cả các mặt, tất cả các mối liên hệ...\" làm nền tảng cho quan điểm nào?",
      options: [
        "Quan điểm thực tiễn",
        "Quan điểm toàn diện và hệ thống",
        "Quan điểm lịch sử cụ thể",
        "Quan điểm kế thừa và phát triển"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Lời khuyên của Lênin chỉ ra rằng phải xem xét sự vật trong mối quan hệ đa chiều và tổng thể của các yếu tố cấu thành, làm nền tảng cho phương pháp luận hệ thống và toàn diện."
    },
    {
      id: "cmd-in-47",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Khi nghiên cứu Tư tưởng Hồ Chí Minh, nếu tách rời mối quan hệ giữa \"độc lập dân tộc\" và \"chủ nghĩa xã hội\" thì sẽ vi phạm nguyên tắc phương pháp luận nào?",
      options: [
        "Quan điểm lịch sử cụ thể",
        "Quan điểm toàn diện và hệ thống",
        "Quan điểm lý luận thực tiễn",
        "Quan điểm kế thừa và phát triển"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Độc lập dân tộc gắn liền với chủ nghĩa xã hội là sợi chỉ đỏ xuyên suốt hệ thống tư tưởng Hồ Chí Minh. Việc chia cắt hai yếu tố này vi phạm phương pháp luận hệ thống."
    },
    {
      id: "cmd-in-48",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Yêu cầu của \"Quan điểm lịch sử cụ thể\" trong nghiên cứu Tư tưởng Hồ Chí Minh đòi hỏi người học phải làm gì?",
      options: [
        "Nghiên cứu tư tưởng Người tách biệt hoàn toàn khỏi bối cảnh lịch sử xã hội đương thời",
        "Xem xét một hiện tượng nhất định đã xuất hiện trong lịch sử như thế nào và hiện nay nó đã trở thành như thế nào trong hoàn cảnh cụ thể",
        "So sánh tư tưởng của Người với các cuộc cách mạng thời cổ đại phương Đông",
        "Tập trung phân tích các mốc thời gian sinh hoạt đời thường của Người"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Mỗi luận điểm của Hồ Chí Minh đều ra đời để giải quyết một tình huống lịch sử cụ thể. Nghiên cứu tư tưởng Bác phải đặt vào đúng hoàn cảnh đó để hiểu rõ bản chất và sự phát triển của nó."
    },
    {
      id: "cmd-in-49",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Sự mẫu mực của Hồ Chí Minh trong việc vận dụng phương pháp luận \"Kế thừa và phát triển\" thể hiện ở điểm nào?",
      options: [
        "Giữ nguyên toàn bộ câu chữ lý luận của chủ nghĩa Mác để bảo vệ sự thuần khiết",
        "Vận dụng sáng tạo và bổ sung các lý luận mới phù hợp với thực tiễn cách mạng Việt Nam và thời đại mới",
        "Phủ nhận mọi giá trị Nho giáo và Phật giáo để xây dựng lý luận mới từ đầu",
        "Tiếp thu hoàn toàn mô hình quản lý kinh tế tư bản chủ nghĩa không chọn lọc"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Hồ Chí Minh kế thừa di sản Nho giáo, Phật giáo, tư tưởng Khai sáng và đặc biệt là chủ nghĩa Mác-Lênin, nhưng luôn bổ sung, phát triển sáng tạo để giải quyết sinh động thực tiễn cách mạng nước nhà."
    },
    {
      id: "cmd-in-50",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Tại sao nghiên cứu Tư tưởng Hồ Chí Minh phải \"kết hợp nghiên cứu các tác phẩm với thực tiễn chỉ đạo cách mạng của Người\"?",
      options: [
        "Vì Người không để lại bất kỳ tác phẩm viết tay nào trong sự nghiệp của mình",
        "Vì tư tưởng của Người không chỉ thể hiện qua tác phẩm mà còn nằm sâu trong các quyết sách và hành động cách mạng thực tiễn sinh động",
        "Để chứng minh các tác phẩm viết có nội dung mâu thuẫn với hoạt động thực tế",
        "Vì hoạt động thực tiễn chỉ đạo cách mạng quan trọng hơn nhiều so với lý luận"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Tư tưởng Hồ Chí Minh thấm nhuần trong từng hành động, cử chỉ, lối sống giản dị và các quyết định cách mạng thực tế. Chỉ nghiên cứu tác phẩm viết là chưa đủ để thấy toàn bộ chiều sâu tư tưởng của Người."
    },
    {
      id: "cmd-in-51",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Việc vi phạm nguyên tắc phương pháp luận \"lý luận gắn liền với thực tiễn\" sẽ dẫn đến hậu quả gì theo Hồ Chí Minh?",
      options: [
        "Rơi vào căn bệnh chủ quan duy ý chí, lý luận suông hoặc thực tiễn mù quáng",
        "Làm phong trào cách mạng phát triển quá nhanh so với kế hoạch đề ra",
        "Làm mất đi sự ủng hộ hoàn toàn từ phong trào công nhân quốc tế",
        "Cản trở việc tiếp thu các công nghệ kỹ thuật tiên tiến từ bên ngoài"
      ],
      answer: 0,
      difficulty: "medium",
      isOutside: false,
      explanation: "Không có thực tiễn, lý luận sẽ trở thành lý luận suông (giáo điều); không có lý luận soi đường, thực tiễn dễ đi sai hướng, mù quáng và rơi vào chủ quan kinh nghiệm."
    },
    {
      id: "cmd-in-52",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Sự thống nhất giữa \"tính đảng\" và \"tính khoa học\" trong nghiên cứu đòi hỏi người nghiên cứu phải làm gì?",
      options: [
        "Chỉ tập trung tuyên truyền đường lối của Đảng mà bỏ qua tính trung thực của lịch sử",
        "Đứng trên lập trường của Đảng để nghiên cứu, đồng thời phản ánh khách quan, khoa học, trung thực hệ thống tư tưởng lý luận trên cơ sở khoa học biện chứng",
        "Độc lập hoàn toàn khỏi định hướng chính trị của Đảng để đưa ra nhận định cá nhân thiếu căn cứ",
        "Sử dụng các phương pháp nghiên cứu toán học thuần túy để phân tích các văn bản chính trị"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Tính khoa học đòi hỏi sự trung thực, chính xác và khách quan. Tính đảng yêu cầu giữ vững lập trường cách mạng. Hai yếu tố này bổ trợ lẫn nhau để đưa ra kết luận nghiên cứu lý luận chính xác."
    },
    {
      id: "cmd-in-53",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Khi vận dụng \"Quan điểm toàn diện và hệ thống\" trong nghiên cứu lý luận Hồ Chí Minh, chúng ta cần:",
      options: [
        "Chỉ lựa chọn nghiên cứu một số bài viết ngắn của Người rồi áp dụng cho tất cả",
        "Quán triệt mối quan hệ qua lại giữa các yếu tố trong toàn bộ hệ thống tư tưởng của Người để thấy được tính nhất quán biện chứng",
        "Coi trọng các quan điểm về đạo đức hơn các quan điểm về kinh tế và chính trị cách mạng",
        "Tách rời hoàn toàn các nội dung tư tưởng của Người thành những khối lý thuyết độc lập"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Từng quan điểm nhỏ của Hồ Chí Minh đều có liên hệ mật thiết với các quan điểm khác. Nghiên cứu hệ thống yêu cầu người học nhìn nhận mối liên hệ biện chứng giữa chúng."
    },
    {
      id: "cmd-in-54",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Mối liên hệ biện chứng giữa \"tính đảng\" và \"tính khoa học\" trong phương pháp luận nghiên cứu môn học được giải thích như thế nào?",
      options: [
        "Đây là mối quan hệ mâu thuẫn loại trừ lẫn nhau, có tính đảng thì không có tính khoa học",
        "Tính đảng định hướng chính trị đúng đắn để tiếp cận khoa học; tính khoa học bảo đảm tính đảng được luận giải một cách trung thực, sâu sắc, thuyết phục và không rơi vào bệnh giáo điều áp đặt",
        "Tính khoa học quyết định sự ra đời của tính đảng, còn tính đảng chỉ là phương tiện tuyên truyền",
        "Tính đảng yêu cầu người nghiên cứu có quyền bóp méo lịch sử để phục vụ tuyên truyền trước mắt"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Tính đảng định hướng giai cấp để tiếp cận chân lý; tính khoa học đảm bảo tính đảng được bảo vệ bằng các luận cứ thực tế, vững chắc, tránh sự sùng bái hay áp đặt chủ quan."
    },
    {
      id: "cmd-in-55",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Phân tích quan điểm của Hồ Chí Minh: \"Thực tiễn không có lý luận hướng dẫn thì thành thực tiễn mù quáng\". Trong bối cảnh thành lập Đảng năm 1930, luận điểm này soi sáng thực tiễn cách mạng nước ta thế nào?",
      options: [
        "Thúc đẩy các cuộc khởi nghĩa vũ trang tự phát nổ ra liên tục không cần cương lĩnh",
        "Khẳng định tầm quan trọng quyết định của việc truyền bá chủ nghĩa Mác-Lênin để xây dựng đường lối cách mạng đúng đắn trước khi tiến hành đấu tranh giành chính quyền",
        "Chứng minh phong trào yêu nước tự phát của nông dân đã đủ khả năng thắng lợi cuối cùng",
        "Yêu cầu Đảng phải chờ cách mạng vô sản ở các nước phương Tây nổ ra trước rồi mới hoạt động"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Trước năm 1930, các phong trào yêu nước thất bại vì thiếu một lý luận khoa học dẫn đường. Việc xây dựng lý luận cách mạng (Đường Kách mệnh, Cương lĩnh chính trị) chính là bước chuẩn bị lý luận tất yếu để đưa cách mạng Việt Nam đi tới thắng lợi."
    },
    {
      id: "cmd-in-56",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Tại sao Lênin yêu cầu khi xem xét một hiện tượng lịch sử phải \"xem hiện nay nó đã trở thành như thế nào\"? Điều này giúp ích gì cho sinh viên nghiên cứu môn học hiện nay?",
      options: [
        "Giúp sinh viên hiểu rằng Tư tưởng Hồ Chí Minh là khép kín và không cần bổ sung tri thức mới",
        "Giúp sinh viên đặt các quan điểm của Người vào bối cảnh ra đời, đồng thời vận dụng và phát triển sáng tạo chúng để giải quyết các vấn đề mới của thời đại ngày nay",
        "Yêu cầu sinh viên chỉ được phép sử dụng lại nguyên văn câu từ lịch sử không cần phân tích liên hệ",
        "Khuyên sinh viên nên từ bỏ nghiên cứu lịch sử để tập trung vào kinh tế thị trường hiện tại"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Quan điểm lịch sử - cụ thể yêu cầu nhìn nhận tư tưởng trong sự phát triển. Hiểu bối cảnh lịch sử giúp ta nắm được cái tinh thần của lý luận Bác, từ đó biết cách phát triển, áp dụng linh hoạt vào thực tế hôm nay."
    },
    {
      id: "cmd-in-57",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Sự sáng tạo lý luận cách mạng thuộc địa của Hồ Chí Minh được hình thành trên cơ sở phương pháp luận \"Kế thừa và phát triển\" như thế nào?",
      options: [
        "Người kế thừa chủ nghĩa Mác-Lênin nhưng loại bỏ hoàn toàn giá trị văn hóa truyền thống dân tộc",
        "Người kế thừa chọn lọc truyền thống dân tộc và nhân loại, lấy thế giới quan Mác-Lênin làm cốt lõi để phát triển lên những luận điểm mới giải quyết bài toán giải phóng dân tộc thuộc địa",
        "Người phát triển lý luận dựa trên việc kế thừa hoàn toàn mô hình cách mạng tư sản Anh, Pháp, Mỹ",
        "Người phủ nhận mọi lý thuyết chính trị cũ để xây dựng hệ thống tư tưởng dựa trên cảm tính cá nhân"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Mác và Ăng-ghen chủ yếu nghiên cứu cách mạng vô sản ở các nước tư bản phát triển. Hồ Chí Minh đã kế thừa bản chất khoa học của chủ nghĩa Mác, kết hợp lòng yêu nước để sáng tạo ra lý luận cách mạng giải phóng dân tộc ở các nước thuộc địa."
    },
    {
      id: "cmd-in-58",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "co-so-phuong-phap-luan",
      question: "Tại sao nói việc \"tách rời độc lập dân tộc với chủ nghĩa xã hội\" trong nghiên cứu Tư tưởng Hồ Chí Minh là xa rời phương pháp luận khoa học hệ thống?",
      options: [
        "Vì hai mục tiêu này đại diện cho hai thời kỳ cách mạng độc lập hoàn toàn, không liên hệ nhau",
        "Vì trong hệ thống tư tưởng của Người, độc lập dân tộc là tiền đề trước hết để đi tới chủ nghĩa xã hội, và chủ nghĩa xã hội là điều kiện bảo đảm vững chắc cho nền độc lập dân tộc thực sự",
        "Vì chủ nghĩa xã hội thực chất đã bao hàm độc lập dân tộc nên không nhắc đến độc lập dân tộc",
        "Vì độc lập dân tộc chỉ dành cho nước thuộc địa, chủ nghĩa xã hội chỉ dành cho nước phát triển phương Tây"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Giải phóng dân tộc mà không đi lên CNXH thì độc lập dân tộc không thể vững chắc (dễ rơi vào tay thế lực bóc lột khác). CNXH chính là mục tiêu bảo đảm quyền tự do, ấm no thực sự cho nhân dân."
    },

    /* Mục 2: Các phương pháp cụ thể (12 câu: 3 dễ, 6 trung bình, 3 khó) */
    {
      id: "cmd-in-59",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "cac-phuong-phap-cu-the",
      question: "Phương pháp nghiên cứu nào đi sâu xem xét sự vật, hiện tượng theo đúng quá trình phát sinh, tồn tại và phát triển thực tế của nó trong lịch sử?",
      options: [
        "Phương pháp lôgích",
        "Phương pháp lịch sử",
        "Phương pháp liên ngành",
        "Phương pháp thống kê"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: false,
      explanation: "Phương pháp lịch sử tôn trọng tiến trình khách quan của sự kiện theo trình tự thời gian thực tế để tái hiện lịch sử một cách trung thực nhất."
    },
    {
      id: "cmd-in-60",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "cac-phuong-phap-cu-the",
      question: "Phương pháp nghiên cứu nào hướng tới việc khái quát các hiện tượng lịch sử để tìm ra bản chất vốn có, mối liên hệ tất yếu của sự vật và rút ra các kết luận lý luận?",
      options: [
        "Phương pháp lịch sử",
        "Phương pháp lôgích",
        "Phương pháp điều tra điền dã",
        "Phương pháp phỏng vấn nhân chứng"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: false,
      explanation: "Phương pháp lôgích đi sâu vào bản chất bên trong, loại bỏ các chi tiết lịch sử ngẫu nhiên bên ngoài để khái quát thành các luận điểm lý luận khoa học."
    },
    {
      id: "cmd-in-61",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "cac-phuong-phap-cu-the",
      question: "Tại sao trong nghiên cứu Tư tưởng Hồ Chí Minh cần áp dụng \"Phương pháp liên ngành\"?",
      options: [
        "Vì Tư tưởng Hồ Chí Minh là một hệ thống lý luận toàn diện, bao quát nhiều lĩnh vực (triết học, kinh tế, quân sự, văn hóa, giáo dục...)",
        "Vì phương pháp liên ngành dễ thực hiện và ít tốn thời gian hơn các phương pháp khác",
        "Nhằm thay thế hoàn toàn cho phương pháp luận biện chứng của chủ nghĩa Mác - Lênin",
        "Để chứng minh môn học này không cần sử dụng các phương pháp nghiên cứu lịch sử cách mạng"
      ],
      answer: 0,
      difficulty: "easy",
      isOutside: false,
      explanation: "Tư tưởng Hồ Chí Minh không nằm riêng ở một lĩnh vực. Người là lãnh tụ quân sự, nhà văn hóa, nhà kinh tế và triết học, nên việc nghiên cứu đòi hỏi kết hợp phương pháp của nhiều ngành khoa học xã hội khác nhau."
    },
    {
      id: "cmd-in-62",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "cac-phuong-phap-cu-the",
      question: "Phát biểu nào sau đây đúng khi nói về mối quan hệ giữa \"nội dung nghiên cứu\" và \"phương pháp nghiên cứu\"?",
      options: [
        "Phương pháp nghiên cứu hoàn toàn quyết định nội dung nghiên cứu",
        "Nội dung nào phương pháp đấy, phương pháp phải dựa trên sự vận động của bản thân nội dung",
        "Nội dung và phương pháp hoàn toàn độc lập, không có sự ảnh hưởng qua lại nào",
        "Người nghiên cứu có thể áp dụng bất kỳ phương pháp nào mà không cần quan tâm đến tính chất nội dung"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Phương pháp nghiên cứu luôn phục tùng nội dung nghiên cứu. Đặc điểm và quy luật vận động của nội dung sẽ quyết định việc người nghiên cứu phải sử dụng phương pháp nào cho phù hợp."
    },
    {
      id: "cmd-in-63",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "cac-phuong-phap-cu-the",
      question: "Các phương pháp hỗ trợ cụ thể như: so sánh, đối chiếu, văn bản học, thống kê trắc lượng... đóng vai trò gì trong nghiên cứu môn học?",
      options: [
        "Thay thế hoàn toàn cho hai phương pháp nghiên cứu chính là lịch sử và lôgích",
        "Giúp thu thập, xác minh dữ liệu, làm sáng tỏ tính chân thực của tư liệu lịch sử và hệ thống hóa quan điểm",
        "Giúp đơn giản hóa môn học để người học không cần phân tích lý luận sâu sắc",
        "Là các công cụ nghiên cứu chỉ áp dụng cho học sinh trung học phổ thông"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Các phương pháp cụ thể bổ trợ đắc lực cho nghiên cứu: giúp kiểm chứng văn bản thật/giả, hoàn cảnh viết tác phẩm và cung cấp các dữ liệu lịch sử chuẩn xác."
    },
    {
      id: "cmd-in-64",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "cac-phuong-phap-cu-the",
      question: "Sự khác biệt cơ bản giữa \"Phương pháp lịch sử\" và \"Phương pháp lôgích\" là gì?",
      options: [
        "Phương pháp lịch sử nghiên cứu tiến trình sự kiện theo thời gian thực; phương pháp lôgích nghiên cứu bản chất sâu bên trong và mối liên hệ mang tính quy luật được khái quát thành lý luận",
        "Phương pháp lịch sử chỉ nghiên cứu quá khứ; phương pháp lôgích chỉ nghiên cứu hiện tại và tương lai",
        "Phương pháp lôgích sử dụng toán học; phương pháp lịch sử sử dụng văn học nghệ thuật",
        "Phương pháp lịch sử có tính chủ quan cao; phương pháp lôgích mang tính khách quan tuyệt đối"
      ],
      answer: 0,
      difficulty: "medium",
      isOutside: false,
      explanation: "Phương pháp lịch sử tái hiện tiến trình cụ thể theo dòng thời gian. Phương pháp lôgích loại bỏ tính ngẫu nhiên để rút ra quy luật và bản chất dưới dạng lý luận khái quát."
    },
    {
      id: "cmd-in-65",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "cac-phuong-phap-cu-the",
      question: "Phương pháp \"văn bản học\" trong nghiên cứu Tư tưởng Hồ Chí Minh nhằm mục đích gì?",
      options: [
        "Dịch các tác phẩm của Người sang các ngôn ngữ phổ biến trên thế giới",
        "Xác định tính chân thực, hoàn cảnh ra đời, nội dung gốc và sự phát triển ngôn từ trong tác phẩm của Người",
        "Viết lại các tác phẩm của Người dưới dạng thơ ca dễ nhớ cho quần chúng nhân dân",
        "Tìm hiểu các chất liệu giấy và mực được Người sử dụng để viết văn bản lịch sử"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Bác viết nhiều tác phẩm với các bút danh khác nhau ở nhiều nước. Phương pháp văn bản học giúp xác minh văn bản gốc, tránh việc hiểu sai lệch do dị bản hoặc văn bản không chính thống."
    },
    {
      id: "cmd-in-66",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "cac-phuong-phap-cu-the",
      question: "Khi áp dụng phương pháp \"so sánh, đối chiếu\" trong nghiên cứu môn học, người nghiên cứu hướng tới điều gì?",
      options: [
        "Chứng minh các nhà tư tưởng trên thế giới đều có quan điểm hoàn toàn giống với Hồ Chí Minh",
        "Làm rõ những điểm kế thừa, phát triển sáng tạo và nét đặc sắc độc đáo của Tư tưởng Hồ Chí Minh so với tiền bối",
        "Phê phán tất cả lý thuyết triết học phương Tây cổ đại để nâng cao vị thế tư tưởng phương Đông",
        "So sánh độ dài các tác phẩm viết của Người với các nhà tư tưởng Mác-xít khác"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "So sánh giúp làm rõ điểm khác biệt mang tính sáng tạo của Hồ Chí Minh so với các bậc tiền bối đi trước và chỉ ra sự phát triển độc đáo trong lý luận cách mạng thuộc địa của Người."
    },
    {
      id: "cmd-in-67",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "cac-phuong-phap-cu-the",
      question: "Tại sao nói việc kết hợp giữa phương pháp lịch sử và phương pháp lôgích là yêu cầu bắt buộc khi nghiên cứu di sản Hồ Chí Minh?",
      options: [
        "Vì chỉ sử dụng phương pháp lịch sử sẽ biến nghiên cứu thành liệt kê sự kiện khô khan, còn chỉ dùng phương pháp lôgích dẫn đến những khái quát trừu tượng xa rời thực tiễn",
        "Vì hai phương pháp này tự động thay thế hoàn toàn vai trò thế giới quan của chủ nghĩa Mác-Lênin",
        "Nhằm giảm bớt công sức tìm kiếm tư liệu lịch sử thực tế của người nghiên cứu",
        "Để chứng minh các tác phẩm viết của Người hoàn toàn tuân theo quy luật toán học biện chứng"
      ],
      answer: 0,
      difficulty: "medium",
      isOutside: false,
      explanation: "Lịch sử cung cấp dữ liệu thực tế khách quan, lôgích cung cấp sự khái quát lý luận khoa học. Hai phương pháp phải thống nhất biện chứng thì nghiên cứu lý luận chính trị mới có giá trị khoa học."
    },
    {
      id: "cmd-in-68",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "cac-phuong-phap-cu-the",
      question: "Thế nào là sự thống nhất biện chứng giữa \"nội dung nào phương pháp đấy\" trong nghiên cứu lý luận Hồ Chí Minh?",
      options: [
        "Nội dung nghiên cứu luôn thay đổi nên phải sử dụng các phương pháp mâu thuẫn để đối phó",
        "Phương pháp nghiên cứu không thiết lập chủ quan tùy tiện mà phải xuất phát từ chính tính chất, quy luật vận động nội tại của đối tượng nghiên cứu để phản ánh trung thực đối tượng đó",
        "Người nghiên cứu chỉ cần xác định phương pháp trước, còn nội dung nghiên cứu sẽ được điều chỉnh sau",
        "Nội dung nghiên cứu chính là phương pháp nghiên cứu, giữa chúng không có sự phân biệt nào"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Phương pháp là hình thức vận động của nội dung. Nội dung nghiên cứu (di sản lý luận và hành động cách mạng Hồ Chí Minh) quy định việc người nghiên cứu phải sử dụng các phương pháp kết hợp lịch sử, lôgích và liên ngành."
    },
    {
      id: "cmd-in-69",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "cac-phuong-phap-cu-the",
      question: "Tại sao trong nghiên cứu khoa học về Tư tưởng Hồ Chí Minh, phương pháp \"điều tra điền dã và phỏng vấn nhân chứng lịch sử\" lại có vai trò đặc biệt quan trọng?",
      options: [
        "Vì đây là phương pháp giúp thay thế hoàn toàn các tài liệu lưu trữ viết chính thức của Đảng và Nhà nước",
        "Vì rất nhiều quan điểm chỉ đạo tinh tế, lối sống giản dị và phương pháp làm việc của Người được lưu giữ trực tiếp trong ký ức của nhân chứng lịch sử chứ chưa được ghi chép hết trong văn bản",
        "Để tìm kiếm các hiện vật vật lý có giá trị thương mại lớn liên quan đến cuộc đời của Người",
        "Nhằm chứng minh các tài liệu viết hiện tại về Người là hoàn toàn thiếu chính xác"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Nhiều câu chuyện thực tế về nhân cách, đạo đức, và các chỉ đạo thực tế của Bác nằm ở ký ức của những người đã trực tiếp làm việc, gặp gỡ Bác. Phương pháp phỏng vấn, khảo sát điền dã giúp bổ sung những khoảng trống lý luận này."
    },
    {
      id: "cmd-in-70",
      sectionId: "phuong-phap-nghien-cuu",
      subsectionId: "cac-phuong-phap-cu-the",
      question: "Việc áp dụng phương pháp liên ngành (ví dụ sự kết hợp giữa văn hóa học và chính trị học) giúp giải quyết vấn đề gì trong tìm hiểu đạo đức Hồ Chí Minh?",
      options: [
        "Chứng minh đạo đức của Người hoàn toàn mang tính tôn giáo thần bí tách biệt với hoạt động thực tiễn",
        "Làm sáng tỏ sự chuyển hóa mềm mại từ các giá trị đạo đức truyền thống phương Đông (Nho giáo, Phật giáo) thành các phẩm chất đạo đức cách mạng mới phục vụ mục tiêu giải phóng dân tộc",
        "Thay thế các phương pháp nghiên cứu văn bản học trong việc xác minh các bài viết về chủ đề đạo đức",
        "Khẳng định đạo đức Hồ Chí Minh chỉ áp dụng riêng cho tầng lớp nghệ sĩ hoạt động văn hóa cách mạng"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Đạo đức Hồ Chí Minh kế thừa sâu sắc Nho giáo (chính tâm, tu thân) và Phật giáo (từ bi, cứu khổ) nhưng chuyển hóa thành lý luận đạo đức cách mạng (cần, kiệm, liêm, chính, chí công vô tư) để giải quyết các vấn đề cách mạng thuộc địa."
    },

    /* ----- PHẦN III: Ý NGHĨA CỦA VIỆC HỌC TẬP ĐỐI VỚI SINH VIÊN (20 câu) ----- */
    /* Mục 1: Nâng cao năng lực tư duy lý luận và phương pháp công tác (10 câu: 3 dễ, 4 trung bình, 3 khó) */
    {
      id: "cmd-in-71",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "nang-cao-tu-duy",
      question: "Học tập môn học Tư tưởng Hồ Chí Minh giúp sinh viên nâng cao nhận thức hệ thống nhằm mục đích gì?",
      options: [
        "Để học thuộc lòng lịch sử phát triển kinh tế của tất cả quốc gia trên thế giới",
        "Nhận thức sâu sắc vai trò, vị trí của tư tưởng này và biến nó thành kim chỉ nam chủ đạo trong đời sống tinh thần của thế hệ trẻ",
        "Nhằm phục vụ riêng cho việc nghiên cứu các ngành khoa học công nghệ thuần túy",
        "Để trở thành một nhà phê bình văn học nghệ thuật cổ điển"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: false,
      explanation: "Việc học tập giúp thế hệ trẻ hiểu rõ giá trị dẫn đường của Tư tưởng Hồ Chí Minh, đưa hệ lý luận này thành kim chỉ nam cho tư duy và lối sống của bản thân."
    },
    {
      id: "cmd-in-72",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "nang-cao-tu-duy",
      question: "Mục tiêu chiến lược cách mạng cao cả của Đảng và nhân dân Việt Nam được Tư tưởng Hồ Chí Minh soi đường là gì?",
      options: [
        "Xây dựng một xã hội công nghiệp cơ khí hóa hoàn toàn độc lập",
        "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
        "Duy trì mô hình kinh tế tự cung tự cấp truyền thống",
        "Trở thành một cường quốc quân sự hàng đầu thế giới"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: false,
      explanation: "Mục tiêu tối thượng xuyên suốt cách mạng Việt Nam dưới sự chỉ đường của Đảng và Bác Hồ là xây dựng đất nước Việt Nam dân giàu, nước mạnh, dân chủ, công bằng, văn minh."
    },
    {
      id: "cmd-in-73",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "nang-cao-tu-duy",
      question: "Học tập môn học Tư tưởng Hồ Chí Minh trang bị cho sinh viên năng lực nào để bảo vệ nền tảng tư tưởng của Đảng?",
      options: [
        "Khả năng thiết kế các hệ thống phòng thủ quân sự hiện đại",
        "Khả năng chủ động đấu tranh, phê phán các quan điểm sai trái, thù địch để bảo vệ đường lối, pháp luật của Đảng và Nhà nước",
        "Khả năng dịch thuật các văn bản quy phạm pháp luật quốc tế",
        "Năng lực quản lý kinh tế vĩ mô tại các tập đoàn đa quốc gia"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: false,
      explanation: "Môn học trang bị tri thức lý luận hệ thống giúp sinh viên có lập trường vững vàng, chủ động nhận diện và bác bỏ các quan điểm sai trái, bảo vệ nền tảng tư tưởng Đảng."
    },
    {
      id: "cmd-in-74",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "nang-cao-tu-duy",
      question: "Việc nâng cao \"năng lực tư duy lý luận\" thông qua môn học giúp sinh viên tránh được sai lầm nào trong cuộc sống và công tác?",
      options: [
        "Tránh được việc tiêu dùng tài chính lãng phí",
        "Tránh được căn bệnh giáo điều, kinh nghiệm chủ nghĩa, biết cách vận dụng kiến thức lý luận vào giải quyết thực tiễn cuộc sống",
        "Tránh được việc tham gia vào các hoạt động thể thao ngoài trời",
        "Tránh được việc tiếp xúc với các nền văn hóa phương Tây hiện đại"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Tư duy lý luận giúp sinh viên nâng tầm nhận thức, không bị sa lầy vào kinh nghiệm chủ nghĩa cá nhân và biết cách áp dụng kiến thức một cách khoa học, hiệu quả."
    },
    {
      id: "cmd-in-75",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "nang-cao-tu-duy",
      question: "Tư tưởng Hồ Chí Minh giúp sinh viên củng cố lập trường cách mạng vững chắc ở điểm nào sau đây?",
      options: [
        "Luôn nghi ngờ tất cả học thuyết chính trị xã hội trên thế giới",
        "Kiên định lập trường, giữ vững mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội",
        "Tập trung tối đa vào việc phát triển lợi ích cá nhân trước mục tiêu tập thể",
        "Ủng hộ việc rập khuôn các chính sách kinh tế từ các nước Đông Âu cũ"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Học tập tư tưởng Bác giúp sinh viên hiểu rõ tính tất yếu của con đường đi lên CNXH của nước nhà, củng cố lòng tin và giữ vững mục tiêu cách mạng."
    },
    {
      id: "cmd-in-76",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "nang-cao-tu-duy",
      question: "Nội dung nào phản ánh đúng nhất ý nghĩa học tập đối với việc \"rèn luyện phương pháp công tác\" của sinh viên?",
      options: [
        "Giúp sinh viên biết cách tổ chức các sự kiện văn nghệ quy mô lớn",
        "Giúp sinh viên rèn luyện phương pháp làm việc khoa học, biết cách đem lý luận áp dụng vào giải quyết vấn đề thực tế cuộc sống",
        "Hướng dẫn sinh viên cách soạn thảo các văn bản hành chính theo mẫu của Chính phủ",
        "Rèn luyện kỹ năng sử dụng máy tính và các phần mềm văn phòng chuyên dụng"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Phương pháp làm việc của Bác là tấm gương sáng: dân chủ, quần chúng, sâu sát thực tế, lời nói đi đôi với việc làm, giúp sinh viên cải thiện đáng kể kỹ năng và phương pháp làm việc."
    },
    {
      id: "cmd-in-77",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "nang-cao-tu-duy",
      question: "Học tập lý luận Hồ Chí Minh giúp thế hệ trẻ nhận thức được rằng \"lý luận cách mạng\" chỉ thực sự có giá trị khi nào?",
      options: [
        "Khi được in ấn đẹp mắt và phân phối rộng rãi trên thị trường sách",
        "Khi được đem ra vận dụng vào thực tiễn cuộc sống và phục vụ thiết thực cho sự nghiệp cách mạng của đất nước",
        "Khi được trích dẫn nguyên văn trong tất cả bài diễn văn chính trị",
        "Khi được các học giả quốc tế đánh giá cao và trao các giải thưởng khoa học"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Hồ Chí Minh dạy rằng lý luận mà không liên hệ với thực tiễn chỉ là lý luận suông. Giá trị đích thực của tri thức lý luận là được chuyển hóa thành kết quả thực tiễn phục vụ nhân dân."
    },
    {
      id: "cmd-in-78",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "nang-cao-tu-duy",
      question: "Tại sao nói học tập Tư tưởng Hồ Chí Minh là cơ sở để sinh viên xây dựng \"phương pháp làm việc biện chứng\"?",
      options: [
        "Vì phương pháp của Người dạy chúng ta chỉ nhìn vào mặt tích cực của đời sống để lạc quan",
        "Vì thông qua việc nghiên cứu cách Người giải quyết các mâu thuẫn lịch sử, sinh viên học được cách nhìn nhận sự vật trong sự vận động toàn diện, lịch sử cụ thể, lý luận gắn liền thực tiễn",
        "Vì Người đã để lại một cuốn sách chuyên luận hướng dẫn các quy tắc toán học biện chứng",
        "Nhằm giúp sinh viên tự xây dựng một hệ tư tưởng triết học hoàn toàn độc lập với chủ nghĩa Mác-Lênin"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Cách giải quyết vấn đề của Bác luôn thấm nhuần phép biện chứng duy vật: xem xét đa chiều, gắn với hoàn cảnh cụ thể, không phiến diện, học tập điều này giúp sinh viên có tư duy linh hoạt và chính xác."
    },
    {
      id: "cmd-in-79",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "nang-cao-tu-duy",
      question: "Mối quan hệ giữa \"nâng cao tư duy lý luận\" và \"phương pháp công tác\" của sinh viên được thể hiện thế nào qua việc học tập di sản Hồ Chí Minh?",
      options: [
        "Tư duy lý luận giúp sinh viên lập luận tốt, phương pháp công tác hoàn toàn tự phát",
        "Tư duy lý luận khoa học chính là nền tảng soi đường, giúp sinh viên định hình phương pháp công tác đúng đắn, khoa học, tránh hoạt động thực tiễn mò mẫm, kém hiệu quả",
        "Phương pháp công tác thực tế có vai trò quyết định, loại bỏ hoàn toàn sự cần thiết của tư duy lý luận",
        "Việc học tập lý luận chỉ nhằm vượt qua kỳ thi đại học, không có liên hệ thực tế nào với công việc sau này"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Tư duy lý luận khoa học giúp định hình phương pháp làm việc có mục tiêu, có kế hoạch, tránh việc làm bộc phát, mò mẫm và mắc các lỗi kinh nghiệm chủ quan."
    },
    {
      id: "cmd-in-80",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "nang-cao-tu-duy",
      question: "Ý nghĩa môn học trong việc giúp sinh viên chủ động đấu tranh chống lại các luận điệu xuyên tạc lịch sử được xây dựng trên cơ sở khoa học nào?",
      options: [
        "Dựa trên cảm xúc yêu nước tự phát mà không cần đến các tri thức lịch sử xác thực",
        "Dựa trên thế giới quan biện chứng và hệ thống lý luận khoa học vững chắc giúp nhận diện rõ bản chất phản khoa học, xuyên tạc thực tiễn lịch sử để lập luận bác bỏ thuyết phục",
        "Dựa trên việc yêu cầu Nhà nước áp dụng các biện pháp hành chính để cấm đoán các thông tin trên không gian mạng",
        "Dựa trên việc công kích cá nhân người đưa ra quan điểm sai trái thay vị phản bác nội dung luận điệu"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Đấu tranh tư tưởng không thể chỉ dựa vào cảm xúc. Sự am hiểu lý luận sâu sắc và các luận cứ lịch sử vững chắc là vũ khí khoa học sắc bén nhất để đập tan các luận điệu xuyên tạc."
    },

    /* Mục 2: Bồi dưỡng phẩm chất đạo đức cách mạng và rèn luyện bản lĩnh chính trị (10 câu: 3 dễ, 5 trung bình, 2 khó) */
    {
      id: "cmd-in-81",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "boi-duong-pham-chat",
      question: "Một trong những ý nghĩa quan trọng của môn học đối với sinh viên về mặt đạo đức là gì?",
      options: [
        "Hướng dẫn sinh viên cách thực hiện các tập tục tôn giáo truyền thống",
        "Giáo dục đạo đức, tư cách, phẩm chất cách mạng, hướng con người biết sống hợp đạo lý, yêu cái tốt, cái thiện, ghét cái ác, cái xấu",
        "Dạy sinh viên các quy tắc ứng xử ngoại giao quốc tế trên bàn tiệc",
        "Cung cấp các kiến thức pháp luật về phòng chống tội phạm hình sự đại cương"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: false,
      explanation: "Môn học giáo dục các giá trị đạo đức cách mạng cốt lõi theo gương Bác, hướng thế hệ trẻ tự hoàn thiện nhân cách, sống lành mạnh và nhân văn."
    },
    {
      id: "cmd-in-82",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "boi-duong-pham-chat",
      question: "Môn học Tư tưởng Hồ Chí Minh thôi thúc thế hệ trẻ tự nguyện thực hiện khẩu hiệu hành động nào sau đây?",
      options: [
        "Sống, chiến đấu, lao động và học tập theo gương Bác Hồ vĩ đại",
        "Học tập tốt, lao động tốt để nhanh chóng làm giàu cho cá nhân",
        "Đi bất cứ nơi đâu có cơ hội thu nhập cao và điều kiện sống hiện đại nhất",
        "Nghiên cứu khoa học độc lập tách rời các hoạt động chính trị - xã hội của đất nước"
      ],
      answer: 0,
      difficulty: "easy",
      isOutside: false,
      explanation: "Phong trào 'Sống, chiến đấu, lao động và học tập theo gương Bác Hồ vĩ đại' là định hướng xuyên suốt giúp bồi dưỡng phẩm chất và lối sống cho sinh viên."
    },
    {
      id: "cmd-in-83",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "boi-duong-pham-chat",
      question: "Việc học tập môn học giúp sinh viên nâng cao lòng tự hào về đối tượng nào?",
      options: [
        "Hệ thống công nghệ thông tin hiện đại đang áp dụng tại trường học",
        "Lãnh tụ, về Đảng Cộng sản, về Tổ quốc Việt Nam",
        "Lịch sử phát triển kinh tế của các quốc gia Đông Nam Á láng giềng",
        "Các học thuyết triết học cổ điển của Hy Lạp và La Mã cổ đại"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: false,
      explanation: "Am hiểu lịch sử tư tưởng cách mạng dân tộc củng cố lòng tự hào dân tộc, niềm tin vào Đảng và lòng tôn kính sâu sắc đối với lãnh tụ Hồ Chí Minh."
    },
    {
      id: "cmd-in-84",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "boi-duong-pham-chat",
      question: "Yêu cầu về bồi dưỡng phẩm chất đạo đức cách mạng theo tấm gương Hồ Chí Minh hướng sinh viên tới lối sống nào?",
      options: [
        "Lối sống thực dụng, đề cao vai trò cá nhân trên lợi ích tập thể",
        "Biết sống hợp đạo lý, yêu cái tốt, cái thiện, ghét cái ác, cái xấu, tự tu dưỡng rèn luyện bản thân",
        "Sự tôn sùng các thế lực siêu nhiên để mong cầu bình an cá nhân",
        "Xa lánh các hoạt động xã hội để giữ phẩm hạnh cá nhân trong sạch"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Đạo đức cách mạng không phải điều xa vời, mà thể hiện ở lối sống lành mạnh, thương người, kính nghiệp, tôn trọng kỷ luật và không ngừng tự rèn luyện bản thân."
    },
    {
      id: "cmd-in-85",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "boi-duong-pham-chat",
      question: "Biểu hiện của việc rèn luyện \"bản lĩnh chính trị\" của sinh viên thông qua học tập môn học này là gì?",
      options: [
        "Kiên định mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội, không dao động trước các thử thách khó khăn",
        "Tích cực tham gia các cuộc tranh luận chính trị tự phát trên mạng xã hội",
        "Thay đổi quan điểm chính trị cá nhân theo các xu hướng trào lưu nước ngoài",
        "Chỉ quan tâm học chuyên môn và từ chối tham gia các hoạt động chính trị - xã hội"
      ],
      answer: 0,
      difficulty: "medium",
      isOutside: false,
      explanation: "Bản lĩnh chính trị của người trẻ thể hiện ở sự kiên định lập trường mục tiêu lý tưởng độc lập dân tộc và CNXH, không bị dao động bởi các luồng thông tin xấu độc."
    },
    {
      id: "cmd-in-86",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "boi-duong-pham-chat",
      question: "Tư tưởng Hồ Chí Minh giáo dục thế hệ trẻ biết sống hợp đạo lý qua việc:",
      options: [
        "Đánh giá con người hoàn toàn dựa trên mức độ giàu có về mặt vật chất",
        "Yêu cái tốt, cái thiện, ghét cái ác, cái xấu, hướng con người tới lối sống trong sạch, giản dị, thương yêu đồng bào",
        "Tuân thủ tuyệt đối các hủ tục phong kiến cổ xưa đã lỗi thời",
        "Luôn đồng ý với ý kiến của đa số mà không cần suy nghĩ độc lập"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Học Bác giúp hình thành nhân sinh quan tốt đẹp: sống giản dị, cần kiệm, yêu thương con người và dũng cảm bảo vệ lẽ phải, chống cái ác."
    },
    {
      id: "cmd-in-87",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "boi-duong-pham-chat",
      question: "Sự chuyển hóa từ \"nhận thức lý luận\" sang \"hành động tự nguyện\" của sinh viên sau khi học môn học này thể hiện qua:",
      options: [
        "Việc viết các bài luận thật dài để đạt điểm số cao trong kỳ thi",
        "Biết vận dụng kiến thức vào thực tế để tự tu dưỡng, rèn luyện bản thân và hoàn thành tốt nhiệm vụ, chức trách của mình",
        "Việc tích cực khuyên bảo người khác làm việc tốt trong khi bản thân nói không đi đôi với làm",
        "Việc sưu tầm hình ảnh tư liệu lịch sử làm bộ sưu tập riêng của bản thân"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Đích đến cuối cùng của bồi dưỡng đạo đức là sự chuyển hóa tự nguyện trong hành vi: biết tự rèn luyện, hoàn thành tốt nhiệm vụ và sống tử tế mỗi ngày."
    },
    {
      id: "cmd-in-88",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "boi-duong-pham-chat",
      question: "Để đóng góp thiết thực cho sự nghiệp cách mạng theo con đường Đảng và Bác Hồ lựa chọn, sinh viên cần thực hiện điều gì trước hết?",
      options: [
        "Rời bỏ giảng đường đại học để trực tiếp tham gia đấu tranh quân sự thực tế",
        "Nỗ lực học tập học vấn, rèn luyện phẩm chất đạo đức, tích cực tham gia các hoạt động cộng đồng và hoàn thành tốt vai trò học sinh/sinh viên",
        "Yêu cầu nhà trường thay thế toàn bộ chương trình đào tạo hiện tại",
        "Tìm mọi cách để đi định cư và làm việc lâu dài tại các quốc gia tư bản phát triển"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: false,
      explanation: "Nhiệm vụ hàng đầu của sinh viên là học tập tốt, rèn luyện tốt phẩm chất đạo đức để sau này cống hiến tri thức xây dựng đất nước."
    },
    {
      id: "cmd-in-89",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "boi-duong-pham-chat",
      question: "Phân tích mối quan hệ giữa \"đạo đức cách mạng\" và \"bản lĩnh chính trị\" của thế hệ trẻ thông qua học tập môn học.",
      options: [
        "Đạo đức cách mạng là yếu tố tự phát, còn bản lĩnh chính trị do pháp luật ép buộc",
        "Đạo đức cách mạng là cái gốc nhân văn giúp bản lĩnh chính trị đi đúng hướng (vì dân, vì nước); ngược lại, bản lĩnh vững vàng giúp giữ gìn phẩm chất đạo đức trước cám dỗ",
        "Hai yếu tố mâu thuẫn, người có đạo đức cao thượng không nên tham gia hoạt động chính trị",
        "Bản lĩnh chính trị là quan trọng nhất và có thể thay thế hoàn toàn cho đạo đức cá nhân"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Đạo đức cách mạng cung cấp mục tiêu nhân văn hướng thiện cho bản lĩnh chính trị; bản lĩnh chính trị giữ vững niềm tin giúp đạo đức không bị lung lay trước khó khăn và cám dỗ."
    },
    {
      id: "cmd-in-90",
      sectionId: "y-nghia-hoc-tap",
      subsectionId: "boi-duong-pham-chat",
      question: "Tại sao việc bồi dưỡng đạo đức cách mạng theo gương Hồ Chí Minh yêu cầu sinh viên thực hiện nguyên tắc \"nói đi đôi với làm, nêu gương đạo đức\"?",
      options: [
        "Vì đây là phương pháp giúp sinh viên nhanh đạt danh hiệu thi đua trong trường học",
        "Vì đạo đức cách mạng không phải lý thuyết suông để trang trí mà phải thể hiện bằng hành động thực tế; sự nêu gương có sức lan tỏa to lớn trong việc xây dựng xã hội tốt đẹp",
        "Để chứng minh các yêu cầu đạo đức cách mạng là dễ thực hiện không cần rèn luyện",
        "Nhằm giúp sinh viên kiểm soát hành vi đạo đức của những người xung quanh bằng quy chuẩn"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: false,
      explanation: "Bác dạy nói đi đôi với làm. Đạo đức cách mạng được đo bằng hành động thực tế. Sự tự giác nêu gương của thế hệ trẻ có sức mạnh cảm hóa và xây dựng xã hội rất lớn."
    }
  ],

  /* ============================
     10 CÂU NGOÀI GIÁO TRÌNH (MỞ RỘNG)
     ============================ */
  outside: [
    {
      id: "cmd-out-01",
      question: "Tên gọi đầu tiên của Chủ tịch Hồ Chí Minh khi sinh ra là gì?",
      options: [
        "Nguyễn Tất Thành",
        "Nguyễn Sinh Cung",
        "Nguyễn Ái Quốc",
        "Hồ Quang"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: true,
      explanation: "Chủ tịch Hồ Chí Minh sinh ngày 19-5-1890, tên lúc nhỏ (tên khai sinh) là Nguyễn Sinh Cung, sau này khi đi học mới đổi tên là Nguyễn Tất Thành."
    },
    {
      id: "cmd-out-02",
      question: "Địa danh lịch sử nào là nơi Nguyễn Tất Thành đã xuống tàu ra đi tìm đường cứu nước vào ngày 5 tháng 6 năm 1911?",
      options: [
        "Bến cảng Hải Phòng",
        "Bến cảng Nhà Rồng (Sài Gòn)",
        "Cửa biển Đà Nẵng",
        "Ga Hàng Cỏ (Hà Nội)"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: true,
      explanation: "Nguyễn Tất Thành đã xuống tàu Amiral Latouche-Tréville lấy tên Văn Ba ra đi tìm đường cứu nước vào ngày 5-6-1911 tại bến Nhà Rồng, Sài Gòn."
    },
    {
      id: "cmd-out-03",
      question: "Tác phẩm thơ nổi tiếng nào được Hồ Chí Minh viết trong thời gian bị chính quyền Tưởng Giới Thạch giam giữ tại Trung Quốc (1942-1943)?",
      options: [
        "Bản án chế độ thực dân Pháp",
        "Nhật ký trong tù",
        "Đường Kách mệnh",
        "Sửa đổi lối làm việc"
      ],
      answer: 1,
      difficulty: "easy",
      isOutside: true,
      explanation: "Tác phẩm 'Nhật ký trong tù' (Ngục trung nhật ký) là tập thơ chữ Hán gồm 133 bài thơ được Bác sáng tác trong nhà lao của chính quyền Tưởng Giới Thạch."
    },
    {
      id: "cmd-out-04",
      question: "Bản yêu sách 8 điểm của nhân An Nam do Nguyễn Ái Quốc gửi tới Hội nghị nào năm 1919 đòi quyền tự do, dân chủ cho dân tộc Việt Nam?",
      options: [
        "Hội nghị Giơ-ne-vơ",
        "Hội nghị Véc-xây (Versailles)",
        "Hội nghị Y-an-ta (Yalta)",
        "Hội nghị Pốt-đam (Potsdam)"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: true,
      explanation: "Tháng 6-1919, Nguyễn Ái Quốc thay mặt những người yêu nước Việt Nam gửi Bản yêu sách của nhân dân An Nam tới Hội nghị Hòa bình Véc-xây đòi quyền bình đẳng cho dân tộc."
    },
    {
      id: "cmd-out-05",
      question: "Tờ báo \"Người cùng khổ\" (Le Paria) do Nguyễn Ái Quốc làm đồng sáng lập và viết bài chính được xuất bản lần đầu tiên tại quốc gia nào?",
      options: [
        "Nước Anh",
        "Nước Pháp (Paris)",
        "Nước Nga (Mát-xcơ-va)",
        "Trung Quốc (Quảng Châu)"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: true,
      explanation: "Tờ báo Le Paria (Người cùng khổ) xuất bản số đầu tiên ngày 1-4-1922 tại thủ đô Pa-ri của nước Pháp, do Nguyễn Ái Quốc sáng lập để vạch trần tội ác thực dân."
    },
    {
      id: "cmd-out-06",
      question: "Cuốn sách tập hợp bài giảng của Nguyễn Ái Quốc tại Quảng Châu dùng huấn luyện cán bộ cách mạng, xuất bản năm 1927, có tên là gì?",
      options: [
        "Bản án chế độ thực dân Pháp",
        "Đường Kách mệnh",
        "Tuyên ngôn Độc lập",
        "Sửa đổi lối làm việc"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: true,
      explanation: "Cuốn sách 'Đường Kách mệnh' in năm 1927 tập hợp các bài giảng huấn luyện cán bộ cách mạng của Nguyễn Ái Quốc tại Quảng Châu dưới sự bảo trợ của Hội VN Cách mạng Thanh niên."
    },
    {
      id: "cmd-out-07",
      question: "Nguyễn Ái Quốc đã tham gia sáng lập Đảng Cộng sản Pháp tại Đại hội Tua (Tours) vào thời gian nào?",
      options: [
        "Tháng 10 năm 1917",
        "Tháng 12 năm 1920",
        "Tháng 3 năm 1919",
        "Tháng 2 năm 1930"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: true,
      explanation: "Tháng 12-1920, tại Đại hội Tua của Đảng Xã hội Pháp, Nguyễn Ái Quốc bỏ phiếu gia nhập Quốc tế thứ ba và đồng sáng lập Đảng Cộng sản Pháp."
    },
    {
      id: "cmd-out-08",
      question: "Khi trở về nước trực tiếp chỉ đạo cách mạng Việt Nam vào đầu năm 1941, địa điểm đầu tiên Nguyễn Ái Quốc đặt chân tới Tổ quốc là nơi nào?",
      options: [
        "Chiến khu Tân Trào (Tuyên Quang)",
        "Cột mốc 108, hang Pác Bó (Cao Bằng)",
        "Chiến khu Bắc Sơn (Lạng Sơn)",
        "Đền Hùng (Phú Thọ)"
      ],
      answer: 1,
      difficulty: "medium",
      isOutside: true,
      explanation: "Ngày 28-1-1941, sau 30 năm bôn ba hải ngoại, Nguyễn Ái Quốc vượt qua cột mốc 108 biên giới Việt - Trung trở về Cao Bằng, lấy hang Pác Bó làm căn cứ chỉ đạo cách mạng."
    },
    {
      id: "cmd-out-09",
      question: "Sự kiện lịch sử nào đánh dấu bước ngoặt quyết định chuyển đổi từ lập trường yêu nước truyền thống sang lập trường cộng sản của Nguyễn Ái Quốc năm 1920?",
      options: [
        "Gửi bản Yêu sách của nhân dân An Nam tới Hội nghị Hòa bình Véc-xây (1919)",
        "Đọc Sơ thảo Luận cương về vấn đề dân tộc và thuộc địa của Lênin (tháng 7-1920) và biểu quyết gia nhập Quốc tế thứ ba tại Đại hội Tua (tháng 12-1920)",
        "Sáng lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu (1925)",
        "Chủ trì Hội nghị hợp nhất thành lập Đảng Cộng sản Việt Nam tại Hương Cảng (1930)"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: true,
      explanation: "Đọc Luận cương của Lênin giúp Người tìm thấy con đường giải phóng; việc bỏ phiếu lập Đảng Cộng sản Pháp đánh dấu Người chính thức trở thành chiến sĩ cộng sản đầu tiên của Việt Nam."
    },
    {
      id: "cmd-out-10",
      question: "Trong tác phẩm Đường Kách mệnh (1927), Nguyễn Ái Quốc chỉ ra cuộc cách mạng nào trên thế giới là \"cách mệnh đến nơi\" và giải thích lý do tại sao?",
      options: [
        "Cách mạng Pháp 1789, vì nó lật đổ chế độ quân chủ chuyên chế phong kiến",
        "Cách mạng Tháng Mười Nga 1917, vì nó giải phóng hoàn toàn dân lao động, giao chính quyền cho đa số dân chúng thay vì thay thế một ách bóc lột này bằng ách bóc lột khác",
        "Cách mạng giành độc lập của nước Mỹ 1776, vì nó giải phóng các thuộc địa khỏi thực dân Anh",
        "Cách mạng Tân Hợi 1911 ở Trung Quốc, vì nó thiết lập nhà nước cộng hòa đầu tiên ở châu Á"
      ],
      answer: 1,
      difficulty: "hard",
      isOutside: true,
      explanation: "Nguyễn Ái Quốc đánh giá cao Cách mạng Tháng Mười Nga vì đây là cuộc cách mạng vô sản triệt để giải phóng công nông, lập nên chính quyền Xô-viết cho người dân tự làm chủ."
    }
  ]
};
