import fs from "fs";

// 40 questions for Fixed Exam Set 2 (Đại hội I - 3/1935)
// 36 Inside (7 Easy, 18 Medium, 11 Hard) + 4 Outside
const questions = [
  // 1-7: Easy (7 questions)
  {
    id: "lsd-dh1-d2-001",
    examSet: 2,
    sectionId: "dh-1-grp-1",
    subsectionId: "dh-1-sec-1",
    question: "Đại hội đại biểu toàn quốc lần thứ I của Đảng diễn ra trong bối cảnh lịch sử nổi bật nào sau đây?",
    options: [
      "Đại hội diễn ra khi hệ thống tổ chức Đảng trong nước dần phục hồi sau đàn áp.",
      "Đại hội diễn ra ngay sau khi cuộc Cách mạng Tháng Tám năm 1945 thành công.",
      "Đại hội diễn ra trong thời kỳ toàn dân kháng chiến chống thực dân Pháp.",
      "Đại hội diễn ra khi đất nước đã hoàn toàn thống nhất hai miền Nam Bắc."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội I họp năm 1935 khi các cơ sở Đảng trong nước vừa được khôi phục sau thời kỳ đàn áp 1931-1935."
  },
  {
    id: "lsd-dh1-d2-002",
    examSet: 2,
    sectionId: "dh-1-grp-1",
    subsectionId: "dh-1-sec-1",
    question: "Số lượng ủy viên chính thức được Đại hội I (3/1935) bầu vào Ban Chấp hành Trung ương Đảng là bao nhiêu?",
    options: [
      "Đại hội I đã bầu ra 09 ủy viên chính thức vào Ban Chấp hành Trung ương.",
      "Đại hội I đã bầu ra 12 ủy viên chính thức vào Ban Chấp hành Trung ương.",
      "Đại hội I đã bầu ra 15 ủy viên chính thức vào Ban Chấp hành Trung ương.",
      "Đại hội I đã bầu ra 20 ủy viên chính thức vào Ban Chấp hành Trung ương."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "BCH Trung ương bầu tại Đại hội I gồm 9 ủy viên chính thức và 4 ủy viên dự khuyết."
  },
  {
    id: "lsd-dh1-d2-003",
    examSet: 2,
    sectionId: "dh-1-grp-1",
    subsectionId: "dh-1-sec-1",
    question: "Cơ quan báo chí nào của Ban Chỉ đạo Trung ương Đảng được xuất bản trước Đại hội I để tuyên truyền?",
    options: [
      "Tờ báo Lao Động được xuất bản để làm cơ quan ngôn luận tuyên truyền cách mạng.",
      "Tờ báo Thanh Niên được xuất bản để làm cơ quan ngôn luận tuyên truyền cách mạng.",
      "Tờ báo Nhân Dân được xuất bản để làm cơ quan ngôn luận tuyên truyền cách mạng.",
      "Tờ báo Cờ Giải Phóng được xuất bản làm cơ quan ngôn luận tuyên truyền cách mạng."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Tờ báo Lao Động và các tạp chí của Ban Chỉ đạo Trung ương xuất bản để chỉ đạo phong trào khôi phục."
  },
  {
    id: "lsd-dh1-d2-004",
    examSet: 2,
    sectionId: "dh-1-grp-1",
    subsectionId: "dh-1-sec-1",
    question: "Nội dung nào sau đây KHÔNG PHẢI là một trong 3 nhiệm vụ chủ yếu được Đại hội I (3/1935) đề ra?",
    options: [
      "Tiến hành ngay cuộc cải cách ruộng đất triệt để cho toàn bộ nông dân.",
      "Củng cố và phát triển hệ thống tổ chức Đảng trên toàn bộ các địa phương.",
      "Thâu phục rộng rãi các tầng lớp quần chúng lao khổ vào các đoàn thể.",
      "Đẩy mạnh công tác tuyên truyền và đấu tranh chống chiến tranh đế quốc."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội I đề ra 3 nhiệm vụ chủ yếu: củng cố Đảng, thâu phục quần chúng, chống chiến tranh đế quốc (không có cải cách ruộng đất ngay)."
  },
  {
    id: "lsd-dh1-d2-005",
    examSet: 2,
    sectionId: "dh-1-grp-1",
    subsectionId: "dh-1-sec-1",
    question: "Đại hội I (3/1935) họp tại Ma Cao (Trung Quốc) là Đại hội đại biểu toàn quốc lần thứ mấy của Đảng?",
    options: [
      "Đây là Đại hội đại biểu toàn quốc lần thứ I kể từ khi Đảng thành lập.",
      "Đây là Đại hội đại biểu toàn quốc lần thứ II kể từ khi Đảng thành lập.",
      "Đây là Đại hội đại biểu toàn quốc lần thứ III kể từ khi Đảng thành lập.",
      "Đây là Đại hội đại biểu toàn quốc lần thứ IV kể từ khi Đảng thành lập."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội tổ chức tháng 3/1935 tại Ma Cao là Đại hội đại biểu toàn quốc lần thứ I của Đảng."
  },
  {
    id: "lsd-dh1-d2-006",
    examSet: 2,
    sectionId: "dh-1-grp-1",
    subsectionId: "dh-1-sec-1",
    question: "Tổ chức cách mạng nào ở nước ngoài đã tích cực giúp đỡ Ban Chỉ đạo Trung ương chuẩn bị Đại hội I?",
    options: [
      "Quốc tế Cộng sản đã trực tiếp hướng dẫn và giúp đỡ phong trào cách mạng.",
      "Đảng Cộng sản Mỹ đã trực tiếp hướng dẫn và giúp đỡ phong trào cách mạng.",
      "Đảng Cộng sản Anh đã trực tiếp hướng dẫn và giúp đỡ phong trào cách mạng.",
      "Đảng Xã hội Pháp đã trực tiếp hướng dẫn và giúp đỡ phong trào cách mạng."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Quốc tế Cộng sản trực tiếp chỉ đạo, hỗ trợ Ban Chỉ đạo Trung ương Đảng Cộng sản Đông Dương chuẩn bị Đại hội I."
  },
  {
    id: "lsd-dh1-d2-007",
    examSet: 2,
    sectionId: "dh-1-grp-1",
    subsectionId: "dh-1-sec-1",
    question: "Ý nghĩa chiến lược quan trọng nhất của việc thông qua Điều lệ Đảng sửa đổi tại Đại hội I (3/1935) là gì?",
    options: [
      "Thống nhất nguyên tắc xây dựng Đảng theo chuẩn mực của Quốc tế Cộng sản.",
      "Mở rộng tối đa quyền tự quyết tuyệt đối cho từng chi bộ ở địa phương.",
      "Cho phép kết nạp đảng viên mới mà không cần trải qua thời gian thử thách.",
      "Chuyển toàn bộ các chi bộ bí mật sang hoạt động công khai hoàn toàn."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Điều lệ Đảng sửa đổi tại Đại hội I giúp chuẩn hóa và thống nhất nguyên tắc tổ chức Đảng theo định hướng Quốc tế Cộng sản."
  },

  // 8-25: Medium (18 questions)
  {
    id: "lsd-dh1-d2-008",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Để thâu phục quần chúng lao khổ, Đại hội I (3/1935) đã đưa ra chủ trương quan trọng nào về các đoàn thể?",
    options: [
      "Khôi phục và mở rộng tổ chức Nông hội, Công hội, Thanh niên, Phụ nữ.",
      "Giải tán toàn bộ các tổ chức quần chúng để tập trung vào xây dựng Đảng.",
      "Chỉ cho phép thành lập tổ chức của riêng giai cấp tư sản dân tộc.",
      "Sáp nhập tất cả các tổ chức quần chúng thành một quân đội chính quy."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I chủ trương khôi phục, củng cố các tổ chức Công hội đỏ, Nông hội đỏ, Thanh niên cộng sản, Phụ nữ..."
  },
  {
    id: "lsd-dh1-d2-009",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Một trong những đóng góp nổi bật của đồng chí Lê Hồng Phong trong giai đoạn 1934-1935 là gì?",
    options: [
      "Thành lập Ban Chỉ đạo Trung ương và chuẩn bị nội dung Đại hội I của Đảng.",
      "Trực tiếp viết tác phẩm Kế thừa di sản cách mạng của Bác Hồ tại Hà Nội.",
      "Chủ trì Hội nghị thành lập Mặt trận Việt Nam Độc lập Đồng minh khóa VIII.",
      "Lãnh đạo cuộc khởi nghĩa Nam Kỳ chống thực dân Pháp vào năm 1940."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Lê Hồng Phong thành lập Ban Chỉ đạo Trung ương (3/1934), khôi phục liên lạc tổ chức và chủ trì Đại hội I."
  },
  {
    id: "lsd-dh1-d2-010",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Văn kiện nào của Đại hội I (3/1935) đã tổng kết sâu sắc thực tiễn đấu tranh cách mạng giai đoạn 1930-1935?",
    options: [
      "Nghị quyết chính trị của Đại hội đại biểu toàn quốc lần thứ I.",
      "Báo cáo chính trị của Ban Chấp hành Trung ương khóa II của Đảng.",
      "Luận cương chính trị do đồng chí Trần Phú biên soạn tháng 10/1930.",
      "Chánh cương tóm tắt do đồng chí Nguyễn Ái Quốc soạn thảo năm 1930."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Nghị quyết chính trị của Đại hội I đã đánh giá tổng kết chặng đường đấu tranh 1930-1935 và đề ra đường lối."
  },
  {
    id: "lsd-dh1-d2-011",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Đại hội I (3/1935) đã đề ra yêu cầu gì đối với công tác kỷ luật trong nội bộ Đảng?",
    options: [
      "Thực hiện kỷ luật nghiêm minh bí mật và chống nguy cơ khiêu khích.",
      "Cho phép công khai danh sách đảng viên trên báo chí của kẻ thù.",
      "Bỏ qua công tác kiểm tra tư cách đảng viên ở các chi bộ địa phương.",
      "Nâng cao tinh thần tự do tuyệt đối không cần báo cáo cấp trên."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I đòi hỏi thắt chặt kỷ luật nghiêm mật, đề phòng mật thám Pháp chui vào nội bộ phá hoại."
  },
  {
    id: "lsd-dh1-d2-012",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Nhiệm vụ chống chiến tranh đế quốc do Đại hội I (3/1935) đề ra phản ánh tư duy chiến lược nào của Đảng?",
    options: [
      "Gắn liền sự nghiệp cách mạng Đông Dương với phong trào hòa bình thế giới.",
      "Tập trung toàn lực chuẩn bị tham gia chiến tranh với các nước láng giềng.",
      "Từ bỏ con đường đấu tranh giải phóng dân tộc để giữ trật tự chung.",
      "Chờ đợi các nước lớn hòa giải mâu thuẫn rồi mới tiến hành khởi nghĩa."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I khẳng định chống chiến tranh đế quốc là nghĩa vụ quốc tế, gắn cách mạng Đông Dương với phong trào hòa bình."
  },
  {
    id: "lsd-dh1-d2-013",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Ban Chấp hành Trung ương do Đại hội I (3/1935) bầu ra đã chỉ định đồng chí nào làm Tổng Bí thư?",
    options: [
      "Chỉ định đồng chí Lê Hồng Phong đảm nhiệm chức vụ Tổng Bí thư.",
      "Chỉ định đồng chí Nguyễn Ái Quốc đảm nhiệm chức vụ Tổng Bí thư.",
      "Chỉ định đồng chí Trần Phú đảm nhiệm chức vụ Tổng Bí thư.",
      "Chỉ định đồng chí Hà Huy Tập đảm nhiệm chức vụ Tổng Bí thư."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I đã bầu Lê Hồng Phong làm Tổng Bí thư Ban Chấp hành Trung ương."
  },
  {
    id: "lsd-dh1-d2-014",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Đối với công tác binh vận, Đại hội I (3/1935) đã đưa ra chủ trương quan trọng nào?",
    options: [
      "Đẩy mạnh tuyên truyền giác ngộ binh lính người Việt trong quân Pháp.",
      "Bắt buộc tất cả binh lính Pháp phải gia nhập Đảng Cộng sản Đông Dương.",
      "Không tiến hành bất kỳ hoạt động tuyên truyền nào trong lực lượng quân đội.",
      "Tập trung mua sắm vũ khí hiện đại từ nước ngoài để trang bị quân binh."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Nghị quyết về binh vận của Đại hội I nhấn mạnh tuyên truyền giác ngộ binh lính người Việt trong quân đội Pháp."
  },
  {
    id: "lsd-dh1-d2-015",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Thành công lớn nhất của Đại hội I (3/1935) về mặt tổ chức được biểu hiện ở điều gì?",
    options: [
      "Quy tụ và nối lại hệ thống liên lạc của Đảng từ Trung ương tới cơ sở.",
      "Lập ra được chính quyền Xô viết trên toàn bộ vùng nông thôn rộng lớn.",
      "Giải phóng hoàn toàn các tỉnh miền núi phía Bắc khỏi tay kẻ thù.",
      "Thành lập được Mặt trận Dân tộc Thống nhất chống xâm lược Pháp."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Thành công lớn nhất là nối lại hệ thống tổ chức Đảng bị đứt gãy, bầu ra BCH TW chính thức."
  },
  {
    id: "lsd-dh1-d2-016",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Tài liệu nào sau đây được Ban Chỉ đạo Trung ương xuất bản để chuẩn bị tư tưởng cho Đại hội I?",
    options: [
      "Các số Tạp chí Cộng sản và Tạp chí Bôn-sê-vích của Ban Chỉ đạo.",
      "Tác phẩm Đường Kách mệnh do Nguyễn Ái Quốc biên soạn năm 1927.",
      "Tác phẩm Kháng chiến nhất định thắng lợi do Trường Chinh viết.",
      "Tuyên ngôn của Đảng Cộng sản do Mác và Ăng-ghen soạn thảo."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Tạp chí Bôn-sê-vích (cơ quan lý luận của Ban Chỉ đạo Trung ương) xuất bản tuyên truyền cho Đại hội I."
  },
  {
    id: "lsd-dh1-d2-017",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Lý do trực tiếp dẫn đến sự phục hồi nhanh chóng của hệ thống tổ chức Đảng giai đoạn 1934-1935 là gì?",
    options: [
      "Sự nỗ lực hy sinh kiên cường của các đảng viên và sự nuôi giấu của dân.",
      "Sự suy yếu hoàn toàn của bộ máy mật thám thực dân Pháp trong nước.",
      "Sự hỗ trợ trực tiếp của quân đội các nước đồng minh ở Đông Dương.",
      "Chính quyền thực dân Pháp bãi bỏ chính sách đàn áp cách mạng hoàn."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Nhờ tinh thần kiên cường của các chiến sĩ cộng sản và sự đùm bọc nuôi giấu của nhân dân mà hệ thống Đảng được khôi phục."
  },
  {
    id: "lsd-dh1-d2-018",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Đại hội I (3/1935) đã đánh giá như thế nào về cao trào cách mạng 1930-1931?",
    options: [
      "Là bước tập dượt đầu tiên có ý nghĩa lịch sử vô cùng to lớn.",
      "Là một sai lầm hoàn toàn làm tổn hại lực lượng của cách mạng.",
      "Là cuộc tổng khởi nghĩa giành chính quyền thắng lợi trọn vẹn.",
      "Là cuộc vận động ngoại giao thành công nhất trên trường quốc tế."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I khẳng định cao trào 1930-1931 với đỉnh cao Xô viết Nghệ - Tĩnh là cuộc tập dượt đầu tiên có ý nghĩa lịch sử."
  },
  {
    id: "lsd-dh1-d2-019",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Nghị quyết về Phụ nữ vận động tại Đại hội I (3/1935) nhấn mạnh nội dung trọng tâm nào?",
    options: [
      "Giải phóng phụ nữ gắn liền với sự nghiệp giải phóng giai cấp và dân tộc.",
      "Chỉ tập trung vận động phụ nữ thượng lưu tham gia hoạt động từ thiện.",
      "Bắt buộc phụ nữ phải rời bỏ gia đình để tham gia quân đội chính quy.",
      "Thành lập các hội phụ nữ riêng rẽ không liên quan đến tổ chức Đảng."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Nghị quyết Phụ nữ vận động khẳng định giải phóng phụ nữ là một bộ phận khăng khít của sự nghiệp giải phóng dân tộc và giai cấp."
  },
  {
    id: "lsd-dh1-d2-020",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Tại sao công tác tuyên truyền chống chiến tranh đế quốc lại trở thành 1 trong 3 nhiệm vụ chủ yếu của Đại hội I?",
    options: [
      "Vì nguy cơ chiến tranh thế giới bùng nổ đang đe dọa hòa bình và Liên Xô.",
      "Vì các nước đế quốc đang chuẩn bị tấn công trực tiếp vào Đại hội I.",
      "Vì thực dân Pháp chuẩn bị trao trả độc lập cho các nước Đông Dương.",
      "Vì Quốc tế Cộng sản bắt buộc các Đảng phải tiến hành chiến tranh ngay."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Nguy cơ chiến tranh thế giới do chủ nghĩa phát xít gây ra đe dọa Liên Xô và hòa bình, đòi hỏi Đảng phải đẩy mạnh chống chiến tranh."
  },
  {
    id: "lsd-dh1-d2-021",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Việc Đại hội I (3/1935) bầu Ban Chấp hành Trung ương chính thức có ý nghĩa gì đối với vai trò của Quốc tế Cộng sản?",
    options: [
      "Khẳng định Đảng Cộng sản Đông Dương là một phân bộ chính thức độc lập.",
      "Chính thức chấm dứt mọi mối quan hệ liên lạc với Quốc tế Cộng sản.",
      "Đặt Đảng Cộng sản Đông Dương dưới sự quản lý trực tiếp của Pháp.",
      "Tuyên bố giải tán Ban Chỉ đạo Trung ương cũ để lập Quốc tế mới."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Bầu BCH Trung ương chính thức giúp Đảng tiếp tục khẳng định vị thế là một phân bộ chính thức của Quốc tế Cộng sản."
  },
  {
    id: "lsd-dh1-d2-022",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Nguyên nhân căn bản khiến Đại hội I (3/1935) chưa đặt nhiệm vụ giải phóng dân tộc lên hàng đầu là gì?",
    options: [
      "Do vẫn tiếp tục duy trì quan điểm nhận thức của Luận cương 10/1930.",
      "Do thực dân Pháp đã nới lỏng chính sách cai trị tại các thuộc địa.",
      "Do giai cấp công nhân không còn mong muốn đấu tranh giải phóng.",
      "Do Nguyễn Ái Quốc trực tiếp chỉ đạo hoãn nhiệm vụ giải phóng dân."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I duy trì quan điểm của Luận cương 10/1930, đặt nặng đấu tranh giai cấp và thổ địa cách mạng."
  },
  {
    id: "lsd-dh1-d2-023",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Ý nghĩa bước ngoặt của Đại hội I (3/1935) đối với tiến trình cách mạng Việt Nam là gì?",
    options: [
      "Tạo tiền đề vững chắc cho cuộc vận động dân chủ 1936-1939 phát triển.",
      "Giúp cách mạng Việt Nam hoàn thành mục tiêu xây dựng chủ nghĩa xã hội.",
      "Đánh đuổi hoàn toàn quân phát xít Nhật khỏi lãnh thổ Việt Nam.",
      "Giúp Việt Nam thiết lập quan hệ ngoại giao với toàn bộ các nước tư bản."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Hệ thống Đảng được khôi phục tại Đại hội I là điều kiện tiên quyết để Đảng lãnh đạo Cao trào Dân chủ 1936-1939."
  },
  {
    id: "lsd-dh1-d2-024",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Số lượng ủy viên dự khuyết Ban Chấp hành Trung ương được Đại hội I (3/1935) bầu ra là bao nhiêu?",
    options: [
      "Đại hội I đã bầu ra 04 ủy viên dự khuyết vào Ban Chấp hành Trung ương.",
      "Đại hội I đã bầu ra 06 ủy viên dự khuyết vào Ban Chấp hành Trung ương.",
      "Đại hội I đã bầu ra 08 ủy viên dự khuyết vào Ban Chấp hành Trung ương.",
      "Đại hội I đã bầu ra 10 ủy viên dự khuyết vào Ban Chấp hành Trung ương."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I bầu 13 ủy viên Trung ương, trong đó có 9 ủy viên chính thức và 4 ủy viên dự khuyết."
  },
  {
    id: "lsd-dh1-d2-025",
    examSet: 2,
    sectionId: "dh-1-grp-2",
    subsectionId: "dh-1-sec-2",
    question: "Đại hội I (3/1935) đã đưa ra chỉ thị gì về công tác tự phê bình và phê bình trong Đảng?",
    options: [
      "Coi tự phê bình và phê bình là quy luật phát triển nâng cao sức chiến đấu.",
      "Nghiêm cấm đảng viên phê bình cấp trên để đảm bảo tuyệt đối kỷ luật.",
      "Chỉ cho phép phê bình trong các cuộc họp công khai trước nhân dân.",
      "Xóa bỏ hoàn toàn hình thức tự phê bình để tránh gây mất đoàn kết."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Đại hội I khẳng định tự phê bình và phê bình là vũ khí sắc bén để nâng cao năng lực và sức chiến đấu của Đảng."
  },

  // 26-36: Hard (11 questions)
  {
    id: "lsd-dh1-d2-026",
    examSet: 2,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Hoàn cảnh lịch sử khốc liệt giai đoạn 1931-1935 đã đặt ra bài học gì về phương thức hoạt động của Đảng?",
    options: [
      "Phải biết kết hợp nhuần nhuyễn giữa bí mật bất hợp pháp và công khai.",
      "Chỉ được phép hoạt động hoàn toàn công khai để thu hút đông quần chúng.",
      "Tuyệt đối không được thành lập các chi bộ bí mật ở vùng nông thôn.",
      "Chỉ tập trung vào công tác ngoại giao bỏ qua việc xây dựng cơ sở."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Thoái trào 1931-1935 dạy bài học phải kết hợp bí mật bất hợp pháp để bảo vệ lực lượng với tận dụng mọi khả năng công khai hợp pháp."
  },
  {
    id: "lsd-dh1-d2-027",
    examSet: 2,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Sự khác biệt căn bản giữa Ban Chỉ đạo Trung ương (3/1934) và Ban Chấp hành Trung ương chính thức (3/1935) là gì?",
    options: [
      "Ban Chỉ đạo mang tính chất tạm thời, BCH Trung ương do Đại hội bầu.",
      "Ban Chỉ đạo do Pháp lập ra, BCH Trung ương do Quốc tế Cộng sản lập.",
      "Ban Chỉ đạo hoạt động công khai, BCH Trung ương hoạt động bí mật.",
      "Ban Chỉ đạo chỉ gồm người nước ngoài, BCH Trung ương gồm người Việt."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Ban Chỉ đạo Trung ương (3/1934) là cơ quan tạm thời lập ra để khôi phục liên lạc, còn BCH Trung ương (3/1935) do Đại hội I bầu ra chính thức."
  },
  {
    id: "lsd-dh1-d2-028",
    examSet: 2,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Tại sao công tác khôi phục các tổ chức quần chúng lại được Đại hội I (3/1935) xếp vào 3 nhiệm vụ chiến lược?",
    options: [
      "Vì không có nền tảng quần chúng thì Đảng không thể phát triển cơ sở.",
      "Vì các tổ chức quần chúng có thể cung cấp tài chính lớn từ nước ngoài.",
      "Vì Quốc tế Cộng sản bắt buộc phải có tổ chức quần chúng mới công nhận.",
      "Vì chính quyền thực dân Pháp yêu cầu phải lập các tổ chức quần chúng."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Quần chúng là nguồn lực của cách mạng. Không có quần chúng đùm bọc thì Đảng không thể khôi phục và phát triển."
  },
  {
    id: "lsd-dh1-d2-029",
    examSet: 2,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Phân tích mối quan hệ giữa Đại hội I (3/1935) và Đại hội VII Quốc tế Cộng sản (7/1935), khẳng định nào đúng?",
    options: [
      "Đại hội I chuẩn bị tiền đề để đoàn đại biểu Đảng dự Đại hội VII QTCS.",
      "Đại hội VII QTCS diễn ra trước và trực tiếp ra nghị quyết thành lập Đại hội I.",
      "Đại hội I bác bỏ toàn bộ các nghị quyết chỉ đạo của Đại hội VII QTCS.",
      "Hai Đại hội hoàn toàn không có bất kỳ mối liên hệ nào về tư tưởng."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đại hội I (3/1935) củng cố tổ chức và cử đoàn đại biểu (do Lê Hồng Phong dẫn đầu) tham dự Đại hội VII Quốc tế Cộng sản (7/1935)."
  },
  {
    id: "lsd-dh1-d2-030",
    examSet: 2,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Tại sao công tác chống chiến tranh đế quốc trong Nghị quyết Đại hội I (3/1935) lại mang tính dự báo chiến lược?",
    options: [
      "Dự báo chính xác nguy cơ bùng nổ Chiến tranh thế giới thứ hai 1939.",
      "Dự báo sự sụp đổ ngay lập tức của chính quyền thực dân Pháp 1936.",
      "Dự báo việc Mỹ sẽ can thiệp quân sự trực tiếp vào chiến tranh Việt Nam.",
      "Dự báo sự thành lập của Liên Hợp Quốc sau khi chiến tranh kết thúc."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Nhiệm vụ chống chiến tranh đế quốc thể hiện tầm nhìn dự báo nguy cơ phát xít gây ra Chiến tranh thế giới thứ hai (bùng nổ 1939)."
  },
  {
    id: "lsd-dh1-d2-031",
    examSet: 2,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Đánh giá vai trò của đồng chí Nguyễn Ái Quốc tại thời điểm Đại hội I (3/1935), luận điểm nào chuẩn xác?",
    options: [
      "Dù ở nước ngoài, uy tín và tư tưởng của Người vẫn là ngọn cờ hướng tới.",
      "Người đã trực tiếp chủ trì và điều hành toàn bộ diễn biến Đại hội I.",
      "Người đã phủ nhận hoàn toàn các nghị quyết được Đại hội I thông qua.",
      "Người đã từ bỏ hoạt động cách mạng để chuyển sang nghiên cứu thuần túy."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Dù ở Mát-scơ-va, Nguyễn Ái Quốc vẫn là lãnh tụ tinh thần kiệt xuất, được Đại hội I cử làm Đại diện của Đảng tại Quốc tế Cộng sản."
  },
  {
    id: "lsd-dh1-d2-032",
    examSet: 2,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Yếu tố quyết định nhất giúp cơ sở Đảng được khôi phục nhanh chóng trước Đại hội I (3/1935) là gì?",
    options: [
      "Niềm tin tuyệt đối của quần chúng nhân dân vào đường lối của Đảng.",
      "Sự giúp đỡ về quân sự của chính quyền cách mạng các nước láng giềng.",
      "Sự thiếu hụt lực lượng mật thám và cảnh sát của thực dân Pháp.",
      "Sự thỏa hiệp chính trị giữa các lãnh tụ cách mạng với chính quyền Pháp."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Yếu tố quyết định là lòng tin yêu sắt đá của quần chúng nhân dân đối với Đảng, chấp nhận nguy hiểm để chở che cán bộ."
  },
  {
    id: "lsd-dh1-d2-033",
    examSet: 1,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Nhược điểm về chủ trương tập hợp lực lượng của Đại hội I (3/1935) thể hiện ở điểm nào?",
    options: [
      "Chưa chú trọng đoàn kết rộng rãi các tầng lớp yêu nước ngoài công nông.",
      "Chỉ tập trung vận động giai cấp địa chủ phong kiến tham gia cách mạng.",
      "Tuyệt đối không hợp tác với giai cấp công nhân và nông dân nghèo.",
      "Bỏ qua hoàn toàn công tác vận động thanh niên và phụ nữ cách mạng."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đại hội I chưa thấy hết khả năng cách mạng của tiểu tư sản, tư sản dân tộc và địa chủ yêu nước do ảnh hưởng của quan điểm hẹp hòi."
  },
  {
    id: "lsd-dh1-d2-034",
    examSet: 2,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Tại sao việc Đại hội I (3/1935) diễn ra tại Ma Cao lại chứng minh sự linh hoạt trong chỉ đạo chiến lược?",
    options: [
      "Biết chọn địa bàn an toàn để bảo vệ lực lượng đầu não khi trong nước gay.",
      "Muốn mở rộng tầm ảnh hưởng của Đảng ra toàn bộ khu vực Đông Nam Á.",
      "Muốn tránh sự kiểm soát của Quốc tế Cộng sản đối với nội bộ Đảng.",
      "Muốn thương lượng trực tiếp với các chính quyền tư bản tại Ma Cao."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Chọn Ma Cao (nằm ngoài tầm truy bắt trực tiếp của mật thám Pháp ở Đông Dương) thể hiện sự chủ động bí mật bảo vệ an toàn cho Đại hội."
  },
  {
    id: "lsd-dh1-d2-035",
    examSet: 2,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Cơ cấu Ban Chấp hành Trung ương bầu tại Đại hội I (3/1935) có đặc điểm nổi bật gì?",
    options: [
      "Gồm các đồng chí kiên trung từ các vùng miền và bộ phận ở nước ngoài.",
      "Chỉ tập trung các đồng chí đang hoạt động bí mật tại địa bàn Hà Nội.",
      "Toàn bộ là các đồng chí vừa được giải thoát khỏi nhà tù thực dân.",
      "Gồm đại biểu đại diện cho tất cả các đảng phái chính trị ở Đông Dương."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "BCH Trung ương khóa I tập hợp các cán bộ kiên trung đại diện cho các miền Bắc, Trung, Nam và bộ phận công tác ở nước ngoài."
  },
  {
    id: "lsd-dh1-d2-036",
    examSet: 2,
    sectionId: "dh-1-grp-3",
    subsectionId: "dh-1-sec-3",
    question: "Tính chất tập trung dân chủ trong bầu cử tại Đại hội I (3/1935) thể hiện qua việc gì?",
    options: [
      "Đại biểu thảo luận dân chủ và bầu ra Ban Chấp hành Trung ương chính thức.",
      "Quốc tế Cộng sản trực tiếp chỉ định toàn bộ danh sách Trung ương.",
      "Trưởng ban Ban Chỉ đạo Trung ương tự quyết định danh sách nhân sự.",
      "Bốc thăm ngẫu nhiên để chọn ra các ủy viên Ban Chấp hành Trung ương."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Đại biểu dự Đại hội đã thảo luận dân chủ, bỏ phiếu bầu ra BCH Trung ương và Tổng Bí thư theo đúng nguyên tắc tập trung dân chủ."
  },

  // 37-40: Outside (4 questions - Practical Application)
  {
    id: "lsd-dh1-d2-037",
    examSet: 2,
    sectionId: "dh-1-grp-4",
    subsectionId: "dh-1-sec-4",
    question: "Bài học về công tác bảo vệ nội bộ từ Đại hội I (3/1935) được vận dụng thế nào trong kỷ nguyên số hiện nay?",
    options: [
      "Nâng cao cảnh giác bảo vệ an ninh mạng và bảo mật thông tin nội bộ.",
      "Tự cách ly hoàn toàn không sử dụng các phương tiện công nghệ hiện đại.",
      "Chia sẻ rộng rãi mọi thông tin nội bộ lên các trang mạng xã hội.",
      "Bỏ qua công tác kiểm tra tư cách cán bộ khi tuyển dụng vào cơ quan."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Vận dụng bài học bảo vệ tổ chức bí mật nghiêm mật vào công tác an toàn thông tin, an ninh mạng và bảo vệ chính trị nội bộ hiện nay."
  },
  {
    id: "lsd-dh1-d2-038",
    examSet: 2,
    sectionId: "dh-1-grp-4",
    subsectionId: "dh-1-sec-4",
    question: "Ý nghĩa của việc khôi phục niềm tin cách mạng sau thoái trào 1931-1935 mang lại bài học gì cho cán bộ hiện nay?",
    options: [
      "Giữ vững bản lĩnh lý tưởng cách mạng trước mọi biến động và khó khăn.",
      "Dao động tinh thần và sẵn sàng từ bỏ mục tiêu khi gặp trở lực lớn.",
      "Chỉ hoạt động tích cực khi có điều kiện đãi ngộ vật chất thuận lợi.",
      "Đổ lỗi hoàn toàn cho hoàn cảnh khách quan khi không hoàn thành việc."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Bài học về lòng kiên trung, giữ vững niềm tin vào lý tưởng cách mạng, không hoang mang dao động trước khó khăn thử thách."
  },
  {
    id: "lsd-dh1-d2-039",
    examSet: 2,
    sectionId: "dh-1-grp-4",
    subsectionId: "dh-1-sec-4",
    question: "Từ công tác phát triển Đảng của Đại hội I (3/1935), công tác xây dựng Đảng hiện nay cần chú trọng yếu tố nào?",
    options: [
      "Coi trọng chất lượng đảng viên, kết hợp tăng cường kỷ luật và tự phê bình.",
      "Chạy theo số lượng kết nạp mà xem nhẹ chất lượng và động cơ vào Đảng.",
      "Bỏ qua công tác giáo dục chính trị tư tưởng cho đảng viên mới kết nạp.",
      "Chỉ phát triển Đảng trong cơ quan nhà nước không phát triển ở doanh nghiệp."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Coi trọng chất lượng đảng viên, lấy tiêu chuẩn chính trị, đạo đức và tính kỷ luật làm thước đo hàng đầu."
  },
  {
    id: "lsd-dh1-d2-040",
    examSet: 2,
    sectionId: "dh-1-grp-4",
    subsectionId: "dh-1-sec-4",
    question: "Bài học về kết hợp sức mạnh dân tộc với sức mạnh thời đại từ Đại hội I (3/1935) có giá trị gì trong hội nhập?",
    options: [
      "Chủ động hội nhập quốc tế rộng mở trên cơ sở giữ vững độc lập tự chủ.",
      "Kế thừa hoàn toàn ý kiến nước ngoài mà không tính đến thực tiễn trong.",
      "Khép kín cửa hoàn toàn tuyệt đối không giao lưu hợp tác với bên ngoài.",
      "Phụ thuộc hoàn toàn vào các nguồn vốn đầu tư và viện trợ nước ngoài."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Bài học kết hợp nội lực dân tộc với tranh thủ sự ủng hộ quốc tế trên nguyên tắc giữ vững độc lập, tự chủ."
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
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ CHUẨN 2: ĐẠI HỘI I (3/1935)
   Mã Bộ Đề: questions-lsd-dh1-part2.js
   Số lượng: 40 câu cố định (36 Inside + 4 Outside)
   ============================================================ */

export const questionsLsdDh1Part2 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh1-part2.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh1-part2.js");
}
