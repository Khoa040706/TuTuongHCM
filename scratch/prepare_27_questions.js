const fs = require('fs');

const questions27 = [
  // 1. ID 568177939
  {
    id: "c4-out-025",
    examSet: 7,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "tinh-tat-yeu-vai-tro-dang-sub",
    question: "Hồ Chí Minh thành lập Đảng Cộng sản Việt Nam trong bối cảnh quốc tế có biến động gì lớn nhất?",
    options: [
      "Cách mạng Tháng Mười Nga năm 1917 đã giành được thắng lợi.",
      "Chủ nghĩa tư bản chuyển sang giai đoạn đế quốc chủ nghĩa.",
      "Chiến tranh thế giới thứ nhất vừa kết thúc trên toàn cầu.",
      "Phong trào giải phóng dân tộc bùng nổ mạnh mẽ ở châu Á."
    ],
    answer: 1,
    difficulty: "medium",
    isOutside: true,
    explanation: "Về bối cảnh quốc tế, sự chuyển biến của chủ nghĩa tư bản từ tự do cạnh tranh sang giai đoạn đế quốc chủ nghĩa đã làm gia tăng sự áp bức đối với các dân tộc thuộc địa, tạo tiền đề bùng nổ các phong trào giải phóng dân tộc."
  },
  // 2. ID 568177955
  {
    id: "c4-out-026",
    examSet: 7,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "dang-trong-sach-vung-manh-sub",
    question: "Nguyên tắc nào được Hồ Chí Minh coi 'như mỗi ngày phải rửa mặt'?",
    options: [
      "Nguyên tắc tập trung dân chủ trong sinh hoạt.",
      "Nguyên tắc đoàn kết quốc tế rộng rãi vô sản.",
      "Nguyên tắc tự phê bình và phê bình thường xuyên.",
      "Nguyên tắc kỷ luật nghiêm minh và tự giác cao."
    ],
    answer: 2,
    difficulty: "easy",
    isOutside: true,
    explanation: "Hồ Chí Minh coi tự phê bình và phê bình là quy luật phát triển của Đảng, là việc làm thường xuyên 'như mỗi ngày phải rửa mặt' để làm cho Đảng luôn trong sạch, vững mạnh."
  },
  // 3. ID 568177946
  {
    id: "c4-out-027",
    examSet: 7,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "dang-trong-sach-vung-manh-sub",
    question: "Chủ tịch Hồ Chí Minh coi nguyên tắc tự phê bình và phê bình là việc làm thường xuyên, cần thực hiện như thế nào?",
    options: [
      "Cần thực hiện ví như con thuyền phải có người lái giỏi.",
      "Cần thực hiện ví như xây dựng ngôi nhà phải có móng vững.",
      "Cần thực hiện ví như cây cổ thụ lâu năm phải có gốc sâu.",
      "Cần thực hiện thường xuyên ví như mỗi ngày phải rửa mặt."
    ],
    answer: 3,
    difficulty: "easy",
    isOutside: true,
    explanation: "Hồ Chí Minh nhấn mạnh: Tự phê bình và phê bình phải được tiến hành thường xuyên, liên tục như hành động sinh hoạt hằng ngày 'như mỗi ngày phải rửa mặt'."
  },
  // 4. ID 568177960
  {
    id: "c4-out-028",
    examSet: 7,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "dang-trong-sach-vung-manh-sub",
    question: "Quan điểm: 'Phải thẳng thắn, chân thành, trung thực, không nể nang, không giấu giếm, không thêm bớt khuyết điểm' nói về nội dung của nguyên tắc nào trong các nguyên tắc xây dựng Đảng Cộng sản Việt Nam?",
    options: [
      "Nguyên tắc kỷ luật nghiêm minh và tự giác.",
      "Nguyên tắc đoàn kết thống nhất trong Đảng.",
      "Nguyên tắc tự phê bình và phê bình nội bộ.",
      "Nguyên tắc tập trung dân chủ trong lãnh đạo."
    ],
    answer: 2,
    difficulty: "medium",
    isOutside: true,
    explanation: "Trong tác phẩm Sửa đổi lối làm việc, Hồ Chí Minh yêu cầu khi tự phê bình và phê bình phải thật thà, thẳng thắn, không nể nang, không giấu giếm khuyết điểm."
  },
  // 5. ID 568177958
  {
    id: "c4-out-029",
    examSet: 8,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "dang-trong-sach-vung-manh-sub",
    question: "Trong các nguyên tắc sinh hoạt Đảng Cộng sản Việt Nam, theo Chủ tịch Hồ Chí Minh nguyên tắc nào được coi là quy luật phát triển (nguyên tắc sinh hoạt) của Đảng?",
    options: [
      "Nguyên tắc tự phê bình và phê bình.",
      "Nguyên tắc kỷ luật nghiêm minh tự giác.",
      "Nguyên tắc tập trung dân chủ chỉ đạo.",
      "Tập thể lãnh đạo, cá nhân phụ trách."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: true,
    explanation: "Theo Hồ Chí Minh, tự phê bình và phê bình là nguyên tắc sinh hoạt, là quy luật phát triển động lực thúc đẩy Đảng tự sửa chữa khuyết điểm để vươn lên."
  },
  // 6. ID 568177942
  {
    id: "c4-out-030",
    examSet: 8,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "dang-trong-sach-vung-manh-sub",
    question: "Công tác nào là công tác gốc của Đảng Cộng sản Việt Nam?",
    options: [
      "Công tác cán bộ của Đảng.",
      "Công tác tổ chức của Đảng.",
      "Công tác tư tưởng của Đảng.",
      "Công tác kiểm tra của Đảng."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: true,
    explanation: "Hồ Chí Minh khẳng định: 'Cán bộ là cái gốc của mọi công việc. Vì vậy, huấn luyện cán bộ là công việc gốc của Đảng'."
  },
  // 7. ID 568177936
  {
    id: "c4-out-031",
    examSet: 8,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "tinh-tat-yeu-vai-tro-dang-sub",
    question: "Cơ sở lý luận nào đã hình thành nên Đảng Cộng sản Việt Nam?",
    options: [
      "Học thuyết chủ nghĩa Mác - Lênin.",
      "Tư tưởng chủ nghĩa yêu nước Việt.",
      "Học thuyết chủ nghĩa Tam dân Á Đông.",
      "Học thuyết chủ nghĩa xã hội không tưởng."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: true,
    explanation: "Chủ nghĩa Mác - Lênin là nền tảng tư tưởng, cơ sở lý luận cách mạng và khoa học cốt lõi quyết định sự hình thành và bản chất của Đảng Cộng sản Việt Nam."
  },
  // 8. ID 568177945
  {
    id: "c4-out-032",
    examSet: 8,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "dang-trong-sach-vung-manh-sub",
    question: "“Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư”. Đoạn trích trên trong tác phẩm nào của Chủ tịch Hồ Chí Minh?",
    options: [
      "Tác phẩm Di chúc (năm 1969).",
      "Tác phẩm Đường cách mệnh (1927).",
      "Tác phẩm Sửa đổi lối làm việc.",
      "Tác phẩm Nâng cao đạo đức cách mạng."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: true,
    explanation: "Đây là đoạn văn nổi tiếng trích từ Di chúc của Chủ tịch Hồ Chí Minh (1969) dặn dò về công tác xây dựng Đảng cầm quyền trong sạch vững mạnh."
  },
  // 9. ID 568177943
  {
    id: "c4-out-033",
    examSet: 9,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "dang-trong-sach-vung-manh-sub",
    question: "\"Phê bình mình cũng như phê bình người phải ráo riết, triệt để, thật thà, không nể nang, không thêm bớt\" nói về?",
    options: [
      "Kỷ luật nghiêm minh và tự giác.",
      "Tự phê bình và phê bình nội bộ.",
      "Tập trung dân chủ trong sinh hoạt.",
      "Đoàn kết thống nhất nội bộ Đảng."
    ],
    answer: 1,
    difficulty: "medium",
    isOutside: true,
    explanation: "Phát biểu trên thể hiện thái độ tinh thần nghiêm túc, thẳng thắn của nguyên tắc tự phê bình và phê bình theo tư tưởng Hồ Chí Minh."
  },
  // 10. ID 568177953
  {
    id: "c4-out-034",
    examSet: 9,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "tinh-tat-yeu-vai-tro-dang-sub",
    question: "Đảng Cộng sản Việt Nam trở thành Đảng cầm quyền thông qua phương thức nào?",
    options: [
      "Lãnh đạo nhân dân đấu tranh giành chính quyền.",
      "Nhận sự nhường quyền từ các đảng phái khác.",
      "Được quốc tế công nhận quyền lãnh đạo hợp pháp.",
      "Thông qua kết quả bầu cử Quốc hội đa đảng."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: true,
    explanation: "Đảng Cộng sản Việt Nam trở thành Đảng cầm quyền thông qua việc lãnh đạo toàn thể nhân dân Việt Nam tiến hành cuộc cách mạng giải phóng dân tộc, lật đổ ách trị thô bổng và giành chính quyền về tay nhân dân."
  },
  // 11. ID 568177944
  {
    id: "c4-out-035",
    examSet: 9,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "tinh-tat-yeu-vai-tro-dang-sub",
    question: "Cách mạng trước hết phải có “đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp ở mọi nơi. Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy”. Đoạn trích trên trong tác phẩm nào của Hồ Chí Minh?",
    options: [
      "Tác phẩm Sửa đổi lối làm việc.",
      "Tác phẩm Đường cách mệnh (1927).",
      "Tác phẩm Tuyên ngôn Độc lập.",
      "Tác phẩm Di chúc của Chủ tịch."
    ],
    answer: 1,
    difficulty: "easy",
    isOutside: true,
    explanation: "Trích từ tác phẩm Đường cách mệnh (1927) của Nguyễn Ái Quốc, nhấn mạnh vai trò quyết định hàng đầu của Đảng cách mệnh đối với sự thành bại của cách mạng."
  },
  // 12. ID 568177956
  {
    id: "c4-out-036",
    examSet: 9,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "dang-trong-sach-vung-manh-sub",
    question: "Trong các nguyên tắc sinh hoạt Đảng Cộng sản Việt Nam, theo Chủ tịch Hồ Chí Minh nguyên tắc nào được coi là nguyên tắc tổ chức của Đảng?",
    options: [
      "Tập thể lãnh đạo, cá nhân phụ trách.",
      "Kỷ luật nghiêm minh và tự giác cao.",
      "Tự phê bình và phê bình thường xuyên.",
      "Tập trung dân chủ trong tổ chức Đảng."
    ],
    answer: 3,
    difficulty: "medium",
    isOutside: true,
    explanation: "Tập trung dân chủ là nguyên tắc tổ chức cơ bản cốt lõi nhất của Đảng Cộng sản Việt Nam, kết hợp chặt chẽ giữa dân chủ rộng rãi và tập trung thống nhất."
  },
  // 13. ID 568177937
  {
    id: "c4-out-037",
    examSet: 10,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "tinh-tat-yeu-vai-tro-dang-sub",
    question: "Đảng Cộng sản trên thế giới được thành lập từ các yếu tố nào?",
    options: [
      "Chủ nghĩa Mác - Lênin với phong trào yêu nước.",
      "Phong trào công nhân với phong trào nông dân.",
      "Chủ nghĩa xã hội khoa học và phong trào nông dân.",
      "Chủ nghĩa xã hội khoa học với phong trào công nhân."
    ],
    answer: 3,
    difficulty: "medium",
    isOutside: true,
    explanation: "Theo V.I. Lênin, ở các nước tư bản phát triển phương Tây, Đảng Cộng sản ra đời từ sự kết hợp giữa hai yếu tố: Chủ nghĩa xã hội khoa học (Chủ nghĩa Mác) và phong trào công nhân."
  },
  // 14. ID 568177962
  {
    id: "c4-out-038",
    examSet: 10,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "tinh-tat-yeu-vai-tro-dang-sub",
    question: "Trong tư tưởng Hồ Chí Minh, luận điểm: sự lãnh đạo của Đảng là nhân tố hàng đầu đưa cách mạng đến thắng lợi cuối cùng, là xác định?",
    options: [
      "Tính tất yếu lịch sử ra đời của Đảng.",
      "Vai trò lãnh đạo quyết định của Đảng.",
      "Nguyên tắc tổ chức hoạt động của Đảng.",
      "Bản chất giai cấp công nhân của Đảng."
    ],
    answer: 1,
    difficulty: "easy",
    isOutside: true,
    explanation: "Luận điểm trên khẳng định vai trò lãnh đạo tuyệt đối, trực tiếp của Đảng Cộng sản Việt Nam đối với mọi thắng lợi của cách mạng Việt Nam."
  },
  // 15. ID 568177952
  {
    id: "c4-out-039",
    examSet: 10,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "tinh-tat-yeu-vai-tro-dang-sub",
    question: "Trong các thuật ngữ chỉ vai trò “Đảng lãnh đạo xã hội”, thuật ngữ nào phản ánh rõ nhất, chính xác nhất vai trò lãnh đạo của Đảng?",
    options: [
      "Thuật ngữ Đảng cách mạng chân chính.",
      "Thuật ngữ Đảng tiên phong của giai cấp.",
      "Thuật ngữ Đảng lãnh đạo toàn diện.",
      "Thuật ngữ Đảng cầm quyền nhà nước."
    ],
    answer: 3,
    difficulty: "medium",
    isOutside: true,
    explanation: "Hồ Chí Minh dùng thuật ngữ 'Đảng cầm quyền' để phản ánh đúng đắn nhất vị thế, chức năng, vai trò lãnh đạo toàn xã hội thông qua bộ máy nhà nước."
  },
  // 16. ID 568177938
  {
    id: "c4-out-040",
    examSet: 10,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "tinh-tat-yeu-vai-tro-dang-sub",
    question: "Theo HCM, ĐCSVN được thành lập từ các yếu tố nào?",
    options: [
      "Chủ nghĩa Mác - Lênin kết hợp với phong trào công nhân và phong trào yêu nước.",
      "Chủ nghĩa Mác - Lênin kết hợp với phong trào nông dân và phong trào trí thức.",
      "Phong trào công nhân kết hợp với phong trào tư sản dân tộc và tiểu tư sản.",
      "Chủ nghĩa xã hội khoa học kết hợp thuần túy với phong trào công nhân Việt Nam."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: true,
    explanation: "Sáng tạo lớn của Hồ Chí Minh là bổ sung nhân tố thứ ba 'phong trào yêu nước' bên cạnh chủ nghĩa Mác-Lênin và phong trào công nhân để hình thành Đảng Cộng sản Việt Nam."
  },
  // 17. ID 568177950
  {
    id: "c4-out-041",
    examSet: 11,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "dang-trong-sach-vung-manh-sub",
    question: "Trong bối cảnh cách mạng mới, Đảng Cộng sản Việt Nam xác định nhiệm vụ nào là trọng tâm?",
    options: [
      "Nhiệm vụ phát triển và xây dựng kinh tế.",
      "Nhiệm vụ chỉnh đốn và xây dựng nội bộ Đảng.",
      "Nhiệm vụ củng cố và xây dựng quốc phòng.",
      "Nhiệm vụ phát triển và xây dựng văn hóa."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: true,
    explanation: "Đảng ta xác định trong thời kỳ Đổi mới: Phát triển kinh tế là nhiệm vụ trọng tâm, xây dựng Đảng là nhiệm vụ then chốt."
  },
  // 18. ID 568177954
  {
    id: "c4-out-042",
    examSet: 11,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "dang-trong-sach-vung-manh-sub",
    question: "Điều kiện tiên quyết để Đảng thực hiện nguyên tắc tập trung dân chủ:",
    options: [
      "Đảng phải tích lũy được nhiều kinh nghiệm thực tiễn.",
      "Đảng phải sở hữu số lượng đảng viên rất đông đảo.",
      "Đảng phải được quần chúng nhân dân bầu cử trực tiếp.",
      "Đảng phải thật sự giữ vững sự trong sạch, vững mạnh."
    ],
    answer: 3,
    difficulty: "hard",
    isOutside: true,
    explanation: "Chỉ khi Đảng giữ được sự trong sạch, vững mạnh và đoàn kết nhất trí thì việc thực hành dân chủ và tập trung lãnh đạo mới phát huy đầy đủ hiệu lực."
  },
  // 19. ID 568177948
  {
    id: "c4-out-043",
    examSet: 11,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "dang-trong-sach-vung-manh-sub",
    question: "Theo Hồ Chí Minh, xây dựng đội ngũ cán bộ, đảng viên cần phải thế nào?",
    options: [
      "Phải có trình độ học vấn và bằng cấp cao.",
      "Phải được đào tạo chuyên môn ở nước ngoài.",
      "Phải tuyệt đối trung thành với Đảng và dân.",
      "Phải có xuất thân từ giai cấp công nhân."
    ],
    answer: 2,
    difficulty: "easy",
    isOutside: true,
    explanation: "Hồ Chí Minh coi phẩm chất đạo đức chính trị hàng đầu của người cán bộ, đảng viên là trung thành vô hạn với lý tưởng cách mạng của Đảng và lợi ích nhân dân."
  },
  // 20. ID 568177949
  {
    id: "c4-out-044",
    examSet: 11,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "tinh-tat-yeu-vai-tro-dang-sub",
    question: "Khi chưa có chính quyền, nhiệm vụ chính trong các cuộc đấu tranh của dân tộc dưới sự lãnh đạo của Đảng là gì?",
    options: [
      "Tập trung phát triển văn hóa giáo dục và nâng cao dân trí xã hội.",
      "Đẩy mạnh xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa.",
      "Tăng cường củng cố nền quốc phòng an ninh và bảo vệ biên giới quốc gia.",
      "Lật đổ chính quyền thực dân phong kiến để thành lập chính quyền nhân dân."
    ],
    answer: 3,
    difficulty: "medium",
    isOutside: true,
    explanation: "Trước khi giành được chính quyền (trước năm 1945), nhiệm vụ trung tâm hàng đầu của Đảng và nhân dân là đánh đổ bè lũ thực dân xâm lược và tay sai phong kiến để giải phóng dân tộc."
  },
  // 21. ID 568177957
  {
    id: "c4-out-045",
    examSet: 12,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "dang-trong-sach-vung-manh-sub",
    question: "Trong các nguyên tắc sinh hoạt Đảng Cộng sản Việt Nam, theo Chủ tịch Hồ Chí Minh đâu là nguyên tắc lãnh đạo của Đảng?",
    options: [
      "Nguyên tắc tập trung dân chủ trong Đảng.",
      "Nguyên tắc tự phê bình và phê bình nghiêm.",
      "Nguyên tắc tập thể lãnh đạo cá nhân phụ trách.",
      "Nguyên tắc đoàn kết thống nhất trong nội bộ."
    ],
    answer: 2,
    difficulty: "medium",
    isOutside: true,
    explanation: "Hồ Chí Minh nhấn mạnh: 'Tập thể lãnh đạo là nguyên tắc lãnh đạo; cá nhân phụ trách là nguyên tắc làm việc'."
  },
  // 22. ID 568177947
  {
    id: "c4-out-046",
    examSet: 12,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "dang-trong-sach-vung-manh-sub",
    question: "Trong Di chúc, Chủ tịch Hồ Chí Minh yêu cầu mỗi cán bộ, đảng viên phải gìn giữ sự đoàn kết, thống nhất trong Đảng như giữ gìn cái gì?",
    options: [
      "Gìn giữ như giữ gìn xương máu của mình.",
      "Gìn giữ như giữ gìn con ngươi của mắt mình.",
      "Gìn giữ như giữ gìn danh dự uy tín của Đảng.",
      "Gìn giữ như giữ gìn tính mạng của chính mình."
    ],
    answer: 1,
    difficulty: "easy",
    isOutside: true,
    explanation: "Trong Di chúc, Bác viết: 'Các đồng chí từ Trung ương đến các chi bộ cần phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình'."
  },
  // 23. ID 568177951
  {
    id: "c4-out-047",
    examSet: 12,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "dang-trong-sach-vung-manh-sub",
    question: "Trong bối cảnh cách mạng mới, Đảng ta xác định nhiệm vụ nào là then chốt?",
    options: [
      "Xây dựng và chỉnh đốn Đảng.",
      "Xây dựng văn hóa tiên tiến.",
      "Xây dựng kinh tế thị trường.",
      "Xây dựng Nhà nước pháp quyền."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: true,
    explanation: "Văn kiện các kỳ Đại hội Đảng thời kỳ Đổi mới xác định rõ: Phát triển kinh tế là nhiệm vụ trọng tâm, xây dựng Đảng là nhiệm vụ then chốt."
  },
  // 24. ID 568177959
  {
    id: "c4-out-048",
    examSet: 12,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "tinh-tat-yeu-vai-tro-dang-sub",
    question: "Vai trò của thành tố nào được xem là số lượng không nhiều nhưng là nhân tố nào quan trọng thúc đẩy sự kết hợp các yếu tố cho sự ra đời của Đảng Cộng sản Việt Nam?",
    options: [
      "Phong trào yêu nước của tầng lớp trí thức Việt Nam.",
      "Phong trào cách mạng của giai cấp nông dân Việt Nam.",
      "Phong trào đấu tranh của giai cấp công nhân Việt Nam.",
      "Phong trào kinh tế của tầng lớp tiểu tư sản Việt Nam."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Phong trào yêu nước của trí thức, thanh niên học sinh tuy số lượng không nhiều nhưng là ngòi nổ, là nhân tố quan trọng ngấm ngầm thúc đẩy sự kết hợp giữa chủ nghĩa Mác-Lênin với phong trào công nhân."
  },
  // 25. ID 568177940
  {
    id: "c4-out-049",
    examSet: 13,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "tinh-tat-yeu-vai-tro-dang-sub",
    question: "Theo Hồ Chí Minh, nền tảng tư tưởng cốt lõi của Đảng Cộng sản Việt Nam là gì?",
    options: [
      "Nền tảng tư tưởng Hồ Chí Minh.",
      "Nền tảng chủ nghĩa yêu nước Việt.",
      "Nền tảng chủ nghĩa Tam dân Á Đông.",
      "Nền tảng học thuyết Mác - Lênin."
    ],
    answer: 3,
    difficulty: "easy",
    isOutside: true,
    explanation: "Điều lệ Đảng khẳng định: Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động."
  },
  // 26. ID 568177941
  {
    id: "c4-out-050",
    examSet: 13,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "tinh-tat-yeu-vai-tro-dang-sub",
    question: "Phong trào nào có vai trò quan trọng trong hàng ngàn năm dựng nước và giữ nước của dân tộc Việt Nam?",
    options: [
      "Phong trào Cần Vương cuối thế kỷ XIX.",
      "Phong trào đấu tranh của nông dân.",
      "Phong trào bãi công của công nhân.",
      "Phong trào yêu nước của nhân dân."
    ],
    answer: 3,
    difficulty: "easy",
    isOutside: true,
    explanation: "Phong trào yêu nước của toàn thể dân tộc là sợi chỉ đỏ xuyên suốt lịch sử hàng ngàn năm dựng nước và giữ nước của dân tộc Việt Nam."
  },
  // 27. ID 568177961
  {
    id: "c4-out-051",
    examSet: 13,
    sectionId: "hcm-ve-dang-csvn-sec",
    subsectionId: "dang-trong-sach-vung-manh-sub",
    question: "Luận điểm: “Nhiều người thì nhiều kinh nghiệm. Người thì thấy rõ mặt này, người thì trông thấy rõ mặt khác của vấn đề đó. Góp kinh nghiệm và sự xem xét của nhiều người, thì vấn đề đó được thấy rõ khắp mọi mặt”. Hồ Chí Minh nói về nguyên tắc nào trong các nguyên tắc xây dựng Đảng?",
    options: [
      "Nguyên tắc tập trung dân chủ trong Đảng.",
      "Tập thể lãnh đạo, cá nhân phụ trách.",
      "Nguyên tắc tự phê bình và phê bình.",
      "Đảng phải thường xuyên tự chỉnh đốn."
    ],
    answer: 1,
    difficulty: "medium",
    isOutside: true,
    explanation: "Đó là lý giải của Hồ Chí Minh về sự cần thiết của nguyên tắc 'tập thể lãnh đạo' — huy động trí tuệ của nhiều người để tránh góc nhìn phiến diện của cá nhân."
  }
];

// Check length differences for all 27 questions
let maxDiff = 0;
let violations = [];
questions27.forEach((q, idx) => {
  const lengths = q.options.map(opt => opt.length);
  const minL = Math.min(...lengths);
  const maxL = Math.max(...lengths);
  const diff = maxL - minL;
  if (diff > maxDiff) maxDiff = diff;
  if (diff > 15) {
    violations.push({ idx: idx + 1, id: q.id, diff, lengths, options: q.options });
  }
});

console.log('Max length diff across 27 questions:', maxDiff);
console.log('Violations count (diff > 15):', violations.length);
if (violations.length > 0) {
  console.log(JSON.stringify(violations, null, 2));
}

fs.writeFileSync('./scratch/q27_result.json', JSON.stringify(questions27, null, 2));
