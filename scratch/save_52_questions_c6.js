const fs = require('fs');

const questions52 = [
  {
    id: "c6-out-001",
    question: "Theo Hồ Chí Minh, văn hoá theo nghĩa rộng là gì?",
    answer: "Sự tổng hợp mọi phương thức sinh hoạt của con người."
  },
  {
    id: "c6-out-002",
    question: "Theo Hồ Chí Minh, các lĩnh vực văn hoá, chính trị, kinh tế, xã hội trong đời sống xã hội lĩnh vực nào là quan trọng nhất?",
    answer: "Các lĩnh vực quan trọng ngang nhau."
  },
  {
    id: "c6-out-003",
    question: "Theo Hồ Chí Minh, văn hoá phải được đặt ngang hàng với lĩnh vực nào?",
    answer: "Kinh tế, chính trị, xã hội."
  },
  {
    id: "c6-out-004",
    question: "Theo Hồ Chí Minh, phẩm chất đạo đức “Cần” của người cách mạng là gì?",
    answer: "Siêng năng, chăm chỉ, cố gắng dẻo dai."
  },
  {
    id: "c6-out-005",
    question: "Theo Hồ Chí Minh, phẩm chất đạo đức “Kiệm” của người cách mạng là gì?",
    answer: "Không xa xỉ, không hoang phí, không bừa bãi."
  },
  {
    id: "c6-out-006",
    question: "Theo Hồ Chí Minh, phẩm chất đạo đức “Liêm” của người cách mạng là gì?",
    answer: "Trong sạch, không tham lam."
  },
  {
    id: "c6-out-007",
    question: "Theo Hồ Chí Minh, phẩm chất đạo đức “Chính” của người cách mạng là gì?",
    answer: "Thẳng thắn, đúng đắn."
  },
  {
    id: "c6-out-008",
    question: "Theo Hồ Chí Minh, phẩm chất đạo đức “Chí công vô tư” của người cách mạng là gì?",
    answer: "Vì lợi ích chung, không vì lợi ích riêng."
  },
  {
    id: "c6-out-009",
    question: "Theo Hồ Chí Minh, đạo đức là gốc, là nền tảng, là sức mạnh, là tiêu chuẩn hàng đầu của?",
    answer: "Người cách mạng."
  },
  {
    id: "c6-out-010",
    question: "Chọn cụm từ ĐÚNG để điền vào chỗ trống trong câu nói sau: Hồ Chí Minh khẳng định: “Nay ở trong thơ nên có thép. ... Cũng phải biết xung phong”.",
    answer: "Nhà thơ."
  },
  {
    id: "c6-out-011",
    question: "Khi nói về vai trò của đạo đức Hồ Chí Minh cho rằng, đối với phương Đông một tấm gương sống còn có giá trị hơn?",
    answer: "100 bài diễn văn tuyên truyền."
  },
  {
    id: "c6-out-012",
    question: "Trung thành với sự nghiệp dựng nước và giữ nước. Suốt đời phấn đấu cho Đảng, cho cách mạng, phải làm cho dân giàu, nước mạnh. Anh/chị cho biết đó là nội dung của chuẩn mực đạo đức nào theo Hồ Chí Minh?",
    answer: "Trung với nước."
  },
  {
    id: "c6-out-013",
    question: "Theo Hồ Chí Minh, đức tính Cần phải đi liền với đức tính nào như hai chân của con người?",
    answer: "Kiệm."
  },
  {
    id: "c6-out-014",
    question: "Theo Hồ Chí Minh, đức tính Liêm phải đi liền với đức tính nào?",
    answer: "Chính."
  },
  {
    id: "c6-out-015",
    question: "Chọn cụm từ ĐÚNG để điền vào chỗ trống. Hồ Chí Minh viết: “Trời có bốn mùa: Xuân, Hạ, Thu, Đông. Đất có bốn phương: Đông, Tây, Nam, Bắc. Người có bốn đức: ...”",
    answer: "Cần, kiệm, liêm, chính."
  },
  {
    id: "c6-out-016",
    question: "Chọn phương án SAI: Biểu hiện của văn hoá được đề cập tới trong định nghĩa văn hoá của Hồ Chí Minh (tháng 08 năm 1943) là:",
    answer: "Chính trị."
  },
  {
    id: "c6-out-017",
    question: "Đâu KHÔNG phải là nguồn gốc hình thành tư tưởng đạo đức Hồ Chí Minh?",
    answer: "Tư tưởng đạo đức tư sản."
  },
  {
    id: "c6-out-018",
    question: "Trong tư tưởng Hồ Chí Minh, chữ NGƯỜI theo nghĩa hẹp là gì?",
    answer: "Gia đình, anh em, họ hàng, bầu bạn."
  },
  {
    id: "c6-out-019",
    question: "Khái niệm con người trong tư tưởng Hồ Chí Minh để chỉ?",
    answer: "Con người cụ thể gắn với hoàn cảnh lịch sử cụ thể."
  },
  {
    id: "c6-out-020",
    question: "Theo tư tưởng Hồ Chí Minh, con người trong giải phóng dân tộc là?",
    answer: "Cả cộng đồng dân tộc Việt Nam."
  },
  {
    id: "c6-out-021",
    question: "Theo tư tưởng Hồ Chí Minh, con người trong giải phóng con người ở phạm vi thế giới là?",
    answer: "Loài người."
  },
  {
    id: "c6-out-022",
    question: "Sau Cách mạng Tháng Tám, văn hoá được Hồ Chí Minh xác định là?",
    answer: "Toàn bộ đời sống tinh thần của xã hội, thuộc về kiến trúc thượng tầng."
  },
  {
    id: "c6-out-023",
    question: "Theo Hồ Chí Minh, văn hoá là thuộc về?",
    answer: "Kiến trúc thượng tầng."
  },
  {
    id: "c6-out-024",
    question: "Quan hệ giữa văn hoá với chính trị, theo Hồ Chí Minh văn hoá phải ở vị trí nào so với chính trị?",
    answer: "Trong."
  },
  {
    id: "c6-out-025",
    question: "“Giải phóng chính trị đồng nghĩa với giải phóng xã hội, từ đó văn hóa mới có điều kiện phát triển. Xã hội thế nào văn hóa thế ấy”. Đó là nội dung của mối quan hệ giữa văn hoá với lĩnh vực nào?",
    answer: "Xã hội."
  },
  {
    id: "c6-out-026",
    question: "Theo Hồ Chí Minh, muốn tiến lên chủ nghĩa xã hội thì phải phát triển?",
    answer: "Kinh tế và văn hoá."
  },
  {
    id: "c6-out-027",
    question: "Tính chất của nền văn hoá Việt Nam thời kỳ cách mạng dân tộc dân chủ nhân dân được nêu trong Đề cương văn hoá năm 1943 của Đảng là gì?",
    answer: "Dân tộc, khoa học, đại chúng."
  },
  {
    id: "c6-out-028",
    question: "Nội dung nào sau đây nói đến vai trò của văn hoá đạo đức, lối sống?",
    answer: "Nâng cao phẩm giá, phong cách lành mạnh cho con người, hướng con người tới các giá trị chân, thiện, mỹ."
  },
  {
    id: "c6-out-029",
    question: "Văn hoá là một mặt trận, tức là nói đến cuộc đấu tranh cách mạng trên lĩnh vực nào?",
    answer: "Văn hoá, tư tưởng."
  },
  {
    id: "c6-out-030",
    question: "Hồ Chí Minh khẳng định: “Văn hoá nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy”. Anh chị em ở đây là nói đến ai?",
    answer: "Văn nghệ sĩ."
  },
  {
    id: "c6-out-031",
    question: "Theo Hồ Chí Minh, để làm tròn nhiệm vụ phụng sự Tổ quốc, phục vụ nhân dân, chiến sĩ nghệ thuật phải?",
    answer: "Có lập trường, tư tưởng vững vàng."
  },
  {
    id: "c6-out-032",
    question: "Theo Hồ Chí Minh, mọi hoạt động văn hóa phải trở về với cuộc sống thực tại của quần chúng, phản ánh được tư tưởng và khát vọng của?",
    answer: "Quần chúng."
  },
  {
    id: "c6-out-033",
    question: "Chọn cụm từ ĐÚNG để điền vào chỗ trống trong câu nói sau: Hồ Chí Minh cho rằng: “Văn hóa ... cho quốc dân đi”.",
    answer: "Soi đường."
  },
  {
    id: "c6-out-034",
    question: "Chọn cụm từ ĐÚNG để điền vào chỗ trống trong câu nói sau: Hồ Chí Minh khẳng định: “Một dân tộc dốt là một dân tộc ...”",
    answer: "Yếu."
  },
  {
    id: "c6-out-035",
    question: "Vai trò của người nghệ sĩ trong lĩnh vực văn hoá văn nghệ theo tư tưởng Hồ Chí Minh là?",
    answer: "Người chiến sĩ."
  },
  {
    id: "c6-out-036",
    question: "Theo tư tưởng Hồ Chí Minh, đời sống văn hoá mới không bao gồm những mặt nào?",
    answer: "Cách sống mới."
  },
  {
    id: "c6-out-037",
    question: "Chọn cụm từ ĐÚNG để điền vào chỗ trống. Trong tác phẩm Sửa đổi lối làm việc, Hồ Chí Minh viết: “Người cách mạng phải có ..., không có ... thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân”.",
    answer: "Đạo đức."
  },
  {
    id: "c6-out-038",
    question: "Theo Hồ Chí Minh, việc nước lấy Đoàn thể làm cốt cán, việc Đoàn thể lấy cán bộ làm cốt cán. Còn cán bộ lấy tiêu chuẩn nào làm cốt cán?",
    answer: "Đạo đức."
  },
  {
    id: "c6-out-039",
    question: "Theo Hồ Chí Minh, đức là đạo đức cách mạng, đó là cái gốc, rất quan trọng. Nếu không có đạo đức cách mạng thì có tài cũng?",
    answer: "Vô dụng."
  },
  {
    id: "c6-out-040",
    question: "Chọn cụm từ ĐÚNG để điền vào chỗ trống. Hồ Chí Minh viết: “Đạo đức cũ như người đầu ngược xuống đất chân chổng lên trời. Đạo đức mới như người hai chân đứng vững được dưới đất, đầu ...”.",
    answer: "Ngẩng lên trời."
  },
  {
    id: "c6-out-041",
    question: "Thương dân, tin dân, lắng nghe dân, phục vụ nhân dân hết lòng. Gần dân, kính trọng dân, học tập nhân dân, lấy dân làm gốc. Nắm vững dân tình, hiểu rõ dân tâm, thường xuyên quan tâm cải thiện dân sinh, nâng cao dân trí. Anh/chị cho biết đó là nội dung của chuẩn mực đạo đức nào theo Hồ Chí Minh?",
    answer: "Hiếu với dân."
  },
  {
    id: "c6-out-042",
    question: "Trong tư tưởng đạo đức Hồ Chí Minh, đâu là phẩm chất đạo đức gắn liền với hoạt động hàng ngày của mỗi người, là nội dung cốt lõi của đạo đức cách mạng?",
    answer: "Cần, kiệm, liêm, chính, chí công vô tư."
  },
  {
    id: "c6-out-043",
    question: "Theo Hồ Chí Minh, chủ nghĩa quốc tế vô sản phải gắn liền với?",
    answer: "Chủ nghĩa yêu nước chân chính."
  },
  {
    id: "c6-out-044",
    question: "Đâu KHÔNG phải là nguyên tắc xây dựng đạo đức mới theo Hồ Chí Minh?",
    answer: "Trung với nước, hiếu với dân."
  },
  {
    id: "c6-out-045",
    question: "Đó là sự tôn trọng, hiểu biết, thương yêu và đoàn kết với giai cấp vô sản toàn thế giới. Đó là tinh thần đoàn kết với các dân tộc bị áp bức, với nhân dân lao động các nước. Đó là nội dung của phẩm chất đạo đức nào theo Hồ Chí Minh?",
    answer: "Tinh thần quốc tế trong sáng."
  },
  {
    id: "c6-out-046",
    question: "Theo tư tưởng đạo đức Hồ Chí Minh, nguyên nhân nào đẻ ra mọi thói hư, tật xấu như lười biếng, suy bì, kiêu căng, kèn cựa, nhút nhát, lãng phí, tham ô?",
    answer: "Chủ nghĩa cá nhân."
  },
  {
    id: "c6-out-047",
    question: "Đâu KHÔNG phải là phẩm chất cơ bản của con người Việt Nam trong thời đại mới theo tư tưởng Hồ Chí Minh?",
    answer: "Nhân, lễ, nghĩa, trí, dũng."
  },
  {
    id: "c6-out-048",
    question: "Theo tư tưởng Hồ Chí Minh, xoá bỏ tình trạng áp bức, bóc lột, nô dịch con người, xoá bỏ các điều kiện xã hội làm tha hoá con người làm cho mọi người được hưởng tự do, hạnh phúc, đó là nội dung giải phóng?",
    answer: "Con người."
  },
  {
    id: "c6-out-049",
    question: "Theo Hồ Chí Minh, nhân tố nào được xem là vốn quý nhất, là động lực, là nhân tố quyết định thành công của sự nghiệp cách mạng?",
    answer: "Con người."
  },
  {
    id: "c6-out-050",
    question: "Chọn cụm từ ĐÚNG để điền vào chỗ trống. Hồ Chí Minh khẳng định: “trong bầu trời không gì quý bằng ..., trong thế giới không gì mạnh bằng sức mạnh đoàn kết của ...”.",
    answer: "Nhân dân."
  },
  {
    id: "c6-out-051",
    question: "Con người theo quan niệm của Hồ Chí Minh là?",
    answer: "Động lực của cách mạng."
  },
  {
    id: "c6-out-052",
    question: "Theo Hồ Chí Minh, muốn xây dựng chủ nghĩa xã hội, trước hết cần phải có con người?",
    answer: "Xã hội chủ nghĩa."
  }
];

fs.writeFileSync('./scratch/q100_excluded_c6.json', JSON.stringify(questions52, null, 2));
console.log('Saved 52 excluded questions for Chapter VI to scratch/q100_excluded_c6.json!');
