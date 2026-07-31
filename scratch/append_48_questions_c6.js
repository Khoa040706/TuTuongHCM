const fs = require('fs');

const current52 = JSON.parse(fs.readFileSync('./scratch/q100_excluded_c6.json', 'utf8'));

const batch2 = [
  {
    id: "c6-out-053",
    question: "Xây dựng con người toàn diện vừa “hồng” vừa “chuyên”, đó là những con người có mục đích sống cao đẹp, có bản lĩnh chính trị vững vàng. Bạn cho biết đây là tư tưởng nào của Hồ Chí Minh về con người?",
    answer: "Nội dung xây dựng con người."
  },
  {
    id: "c6-out-054",
    question: "Đâu KHÔNG phải là khía cạnh chủ yếu để xây dựng con người toàn diện theo tư tưởng Hồ Chí Minh?",
    answer: "Có ý thức làm chủ, tư tưởng cá nhân trên hết."
  },
  {
    id: "c6-out-055",
    question: "Hồ Chí Minh viết: “Trong bầu trời không gì quý bằng nhân dân. Trong thế giới không gì mạnh bằng lực lượng đoàn kết của nhân dân”. Đó chính là?",
    answer: "Coi nhân dân là nguồn gốc của mọi sức mạnh."
  },
  {
    id: "c6-out-056",
    question: "Nội dung cốt lõi của bản sắc văn hóa dân tộc Việt Nam là gì?",
    answer: "Lòng yêu nước, tinh thần độc lập, tự cường, tự tôn dân tộc."
  },
  {
    id: "c6-out-057",
    question: "Bản sắc văn hóa dân tộc Việt Nam có hình thức gì?",
    answer: "Cốt cách, đặc tính, ngôn ngữ, phong tục, tập quán."
  },
  {
    id: "c6-out-058",
    question: "Theo Hồ Chí Minh, mối quan hệ giữa văn hóa với chính trị là gì?",
    answer: "Sự giải phóng chính trị mở đường cho văn hóa phát triển."
  },
  {
    id: "c6-out-059",
    question: "Vai trò của văn hóa pháp luật?",
    answer: "Đảm bảo dân chủ, trật tự, kỷ cương, phép nước."
  },
  {
    id: "c6-out-060",
    question: "Động lực của văn hóa đạo đức là?",
    answer: "Hướng con người đến các giá trị chân, thiện, mỹ."
  },
  {
    id: "c6-out-061",
    question: "Trong tác phẩm Sửa đổi lối làm việc (1947), Chủ tịch Hồ Chí Minh đã chỉ ra hậu quả của việc người cách mạng không có đạo đức sẽ?",
    answer: "Không lãnh đạo được nhân dân."
  },
  {
    id: "c6-out-062",
    question: "Trong tác phẩm “Người cán bộ cách mạng” (1955), Chủ tịch Hồ Chí Minh ví “mọi việc thành công hay thất bại” là do?",
    answer: "Cán bộ có thấm nhuần đạo đức cách mạng hay là không."
  },
  {
    id: "c6-out-063",
    question: "Hồ Chí Minh quan tâm tới giáo dục toàn diện cho các em học sinh, sinh viên về:",
    answer: "“Đức, trí, thể, mỹ”."
  },
  {
    id: "c6-out-064",
    question: "Theo Hồ Chí Minh, hiểu chủ nghĩa Mác – Lênin để?",
    answer: "Sống với nhau có tình có nghĩa."
  },
  {
    id: "c6-out-065",
    question: "Chọn cụm từ ĐÚNG để điền vào chỗ trống. Theo Hồ Chí Minh, “Bốn phương vô sản đều là...”?",
    answer: "Anh em."
  },
  {
    id: "c6-out-066",
    question: "Chọn phương án SAI. Theo Hồ Chí Minh, những nguyên tắc xây dựng đạo đức mới đó là:",
    answer: "Tập trung nhiệm vụ xây, xem nhẹ nhiệm vụ chống."
  },
  {
    id: "c6-out-067",
    question: "Theo Hồ Chí Minh, dân chỉ biết rõ giá trị của “độc lập, tự do” khi nào?",
    answer: "Được ăn no, mặc ấm."
  },
  {
    id: "c6-out-068",
    question: "Theo Hồ Chí Minh, con người có vai trò với cách mạng như thế nào?",
    answer: "Vừa là mục tiêu vừa là động lực."
  },
  {
    id: "c6-out-069",
    question: "Theo Hồ Chí Minh, nội dung cốt lõi của đạo đức cách mạng là:",
    answer: "Cần, kiệm, liêm, chính, chí công vô tư."
  },
  {
    id: "c6-out-070",
    question: "Theo Hồ Chí Minh, những phẩm chất thống nhất của con người là:",
    answer: "Đức và Tài."
  },
  {
    id: "c6-out-071",
    question: "Theo Hồ Chí Minh, những phẩm chất thống nhất của con người là?",
    answer: "“Hồng” và “Chuyên”."
  },
  {
    id: "c6-out-072",
    question: "Theo Hồ Chí Minh, những yếu tố thống nhất của con người là gì?",
    answer: "Phẩm chất và năng lực."
  },
  {
    id: "c6-out-073",
    question: "Chọn phương án ĐÚNG khi bàn về vai trò đạo đức trong tư tưởng Hồ Chí Minh.",
    answer: "Đạo đức là nhân tố tạo nên sức hấp dẫn của chủ nghĩa xã hội."
  },
  {
    id: "c6-out-074",
    question: "Chọn cụm từ ĐÚNG để điền vào chỗ trống trong câu nói sau của Hồ Chí Minh: “Làm cách mạng để cải tạo xã hội cũ thành xã hội mới là một sự nghiệp rất vẻ vang, nhưng nó cũng là một nhiệm vụ rất nặng nề, một cuộc đấu tranh rất phức tạp, lâu dài, gian khổ. Sức có mạnh mới gánh được nặng và đi được xa. Người cách mạng phải có ... làm nền tảng, mới hoàn thành được nhiệm vụ cách mạng vẻ vang”.",
    answer: "Đạo đức cách mạng."
  },
  {
    id: "c6-out-075",
    question: "Quan điểm Hồ Chí Minh về mối quan hệ giữa văn hóa với kinh tế trong cách mạng là gì?",
    answer: "Mối quan hệ biện chứng."
  },
  {
    id: "c6-out-076",
    question: "Vai trò của văn hóa chính trị?",
    answer: "Soi đường cho quốc dân đi, lãnh đạo quốc dân để thực hiện độc lập, tự cường, tự chủ."
  },
  {
    id: "c6-out-077",
    question: "Nâng cao lòng yêu nước, lý tưởng tình cảm cách mạng, sự lạc quan, quyết tâm, tin vào thắng lợi cuối cùng của cách mạng là nội dung quan điểm nào của Hồ Chí Minh?",
    answer: "Văn hóa văn nghệ."
  },
  {
    id: "c6-out-078",
    question: "Câu thơ “Hiền, dữ đâu phải là tính sẵn. Phần nhiều do giáo dục mà nên” của Hồ Chí Minh nhấn mạnh đến yếu tố nào của giáo dục?",
    answer: "Vai trò."
  },
  {
    id: "c6-out-079",
    question: "Theo Hồ Chí Minh, đạo đức cách mạng có vai trò gì với người cách mạng?",
    answer: "Giúp vững vàng trong mọi khó khăn thử thách."
  },
  {
    id: "c6-out-080",
    question: "Theo quan niệm Hồ Chí Minh, để đánh giá đạo đức phải dựa vào yếu tố nào?",
    answer: "Hiệu quả trong thực tế."
  },
  {
    id: "c6-out-081",
    question: "Vận dụng tư tưởng Hồ Chí Minh về đạo đức, kiên quyết chống chủ nghĩa cá nhân, lối sống thực dụng, chạy theo danh vọng, địa vị, giành giật lợi ích cho mình theo anh/chị phải học tốt yếu tố nào đầu tiên?",
    answer: "Cần, kiệm, liêm, chính, chí công vô tư."
  },
  {
    id: "c6-out-082",
    question: "Vận dụng tư tưởng Hồ Chí Minh về đạo đức, yếu tố nào giúp chúng ta thực hiện tốt nhiệm vụ thiêng liêng là xây dựng và bảo vệ Tổ quốc?",
    answer: "Trung với nước, hiếu với dân."
  },
  {
    id: "c6-out-083",
    question: "Chọn cụm từ ĐÚNG để điền vào chỗ trống: Theo Hồ Chí Minh, sinh viên “học để làm việc, làm người, làm cán bộ, muốn đạt được mục đích ấy phải...”?",
    answer: "Cần, kiệm, liêm, chính, chí công vô tư."
  },
  {
    id: "c6-out-084",
    question: "Yếu tố nào sau đây KHÔNG phải là hình thức của bản sắc văn hóa dân tộc?",
    answer: "Lòng yêu nước thương nòi; tinh thần độc lập, tự cường, tự tôn dân tộc."
  },
  {
    id: "c6-out-085",
    question: "Văn hóa là mục tiêu, động lực của sự nghiệp cách mạng, nói đến nội dung nào của văn hóa?",
    answer: "Vai trò."
  },
  {
    id: "c6-out-086",
    question: "Động lực có ý nghĩa soi đường cho quốc dân đi, lãnh đạo quốc dân để thực hiện độc lập, tự cường, tự chủ, đó là vai trò của lĩnh vực văn hóa nào?",
    answer: "Văn hóa chính trị."
  },
  {
    id: "c6-out-087",
    question: "Góp phần nâng cao lòng yêu nước, lý tưởng, tình cảm cách mạng, sự lạc quan, ý chí quyết tâm và niềm tin vào thắng lợi cuối cùng của cách mạng, đó là vai trò của lĩnh vực văn hóa nào?",
    answer: "Văn hóa văn nghệ."
  },
  {
    id: "c6-out-088",
    question: "Hồ Chí Minh khẳng định: “Họ cung cấp cho những nhà hoạt động văn hóa những tư liệu quý. Và chính họ là những người thẩm định khách quan, trung thực, chính xác các sản phẩm văn nghệ”. Họ ở đây là ai?",
    answer: "Quần chúng nhân dân."
  },
  {
    id: "c6-out-089",
    question: "Thời kỳ nhân dân miền Bắc quá độ lên chủ nghĩa xã hội, Hồ Chí Minh chủ trương xây dựng nền văn hóa?",
    answer: "Có nội dung xã hội chủ nghĩa và tính dân tộc."
  },
  {
    id: "c6-out-090",
    question: "Cho biết vai trò của tác phẩm văn nghệ trong lĩnh vực văn hóa văn nghệ theo tư tưởng Hồ Chí Minh?",
    answer: "Là vũ khí sắc bén trong đấu tranh cách mạng, xây dựng xã hội mới, con người mới."
  },
  {
    id: "c6-out-091",
    question: "Vấn đề xây dựng đời sống mới được Hồ Chí Minh đặt ra từ khi nào?",
    answer: "Sau Cách mạng Tháng Tám năm 1945."
  },
  {
    id: "c6-out-092",
    question: "Những căn bệnh trong bộ máy nhà nước mà Hồ Chí Minh gọi là “giặc nội xâm”?",
    answer: "Tham ô, lãng phí, quan liêu."
  },
  {
    id: "c6-out-093",
    question: "Theo Hồ Chí Minh, việc tu dưỡng đạo đức ở mỗi người phải được thực hiện trong?",
    answer: "Mọi hoạt động thực tiễn, mọi mối quan hệ xã hội."
  },
  {
    id: "c6-out-094",
    question: "Cuộc vận động “Đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh” được thực hiện theo Chỉ thị nào?",
    answer: "Chỉ thị 05-CT/TW của Bộ Chính trị khóa XII."
  },
  {
    id: "c6-out-095",
    question: "Trong tư tưởng đạo đức Hồ Chí Minh, đâu là phẩm chất đạo đức bao trùm quan trọng nhất và chi phối các phẩm chất khác?",
    answer: "Trung với nước, hiếu với dân."
  },
  {
    id: "c6-out-096",
    question: "Luôn luôn tôn trọng giữ gìn của công và của dân; không xâm phạm một đồng xu, hạt thóc của nhà nước, của nhân dân. Phải trong sạch, không tham lam địa vị, tiền của, danh tiếng, sung sướng”. Anh/chị cho biết đó là nội dung của đức tính nào theo Hồ Chí Minh?",
    answer: "Liêm."
  },
  {
    id: "c6-out-097",
    question: "Đối với mình, không tự cao, tự đại, luôn chịu khó học tập cầu tiến bộ. Đối với người, không nịnh hót người trên, xem khinh người dưới, luôn giữ thái độ chân thành, khiêm tốn, đoàn kết, không dối trá, lừa lọc. Đối với việc, để việc công lên trên việc tư, làm việc gì cho đến nơi, đến chốn. Anh/chị cho biết đó là nội dung của đức tính nào theo Hồ Chí Minh?",
    answer: "Chính."
  },
  {
    id: "c6-out-098",
    question: "Không xa xỉ, không hoang phí, không bừa bãi. Bạn cho biết đó là nội dung của đức tính nào theo Hồ Chí Minh?",
    answer: "Kiệm."
  },
  {
    id: "c6-out-099",
    question: "Lao động siêng năng, lao động có kế hoạch, sáng tạo, có năng suất cao. Lao động với tinh thần tự lực cánh sinh. Bạn cho biết đó là nội dung của đức tính nào theo Hồ Chí Minh?",
    answer: "Cần."
  },
  {
    id: "c6-out-100",
    question: "Làm việc gì cũng vì lợi ích chung, không vì cá nhân. Là hết sức công bằng, không chút thiên tư, thiên vị, công tâm luôn đặt lợi ích của Đảng, của nhân dân, của dân tộc lên trên hết, trước hết. Anh/chị cho biết đó là nội dung của phẩm chất đạo đức nào theo Hồ Chí Minh?",
    answer: "Chí công vô tư."
  }
];

const total100 = [...current52, ...batch2];
console.log('Total Chapter VI excluded questions combined:', total100.length);

fs.writeFileSync('./scratch/q100_excluded_c6.json', JSON.stringify(total100, null, 2));
console.log('Successfully saved all 100 excluded questions for Chapter VI to scratch/q100_excluded_c6.json!');
