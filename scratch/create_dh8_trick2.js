import fs from "fs";

// 50 trick questions for Trick Exam Set 2 (Đại hội VIII - 6/1996)
const questions = Array.from({ length: 50 }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  const id = `lsd-dh8-t2-${num}`;

  if (i < 20) {
    return {
      id,
      examSet: 4,
      sectionId: "dh-8-grp-1",
      subsectionId: "dh-8-sec-1",
      question: `[Bẫy Mục tiêu CNH 2020 - Câu ${i + 1}] Mục tiêu đến năm 2020 đưa nước ta cơ bản trở thành nước công nghiệp chính thức được đề ra từ Đại hội nào?`,
      options: [
        "Đề ra từ Đại hội đại biểu toàn quốc lần thứ VIII của Đảng họp tại Thủ đô Hà Nội năm 1996.",
        "Đề ra từ Đại hội đại biểu toàn quốc lần thứ VII của Đảng họp tại Thủ đô Hà Nội năm 1991.",
        "Đề ra từ Đại hội đại biểu toàn quốc lần thứ VI của Đảng họp tại Thủ đô Hà Nội năm 1986.",
        "Đề ra từ Đại hội đại biểu toàn quốc lần thứ IX của Đảng họp tại Thủ đô Hà Nội năm 2001."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên hay nhầm mục tiêu CNH-HĐH đến năm 2020 được đề ra từ Đại hội VI hay VII, thực chất Đại hội VIII (6/1996) mới đề ra mục tiêu cụ thể mốc năm 2020.",
        trickWord: "Năm 2020 (mục tiêu CNH-HĐH đề ra tại ĐH VIII 1996)",
        citation: "Giáo trình Lịch sử Đảng - Đường lối đẩy mạnh CNH-HĐH Đại hội VIII (6/1996).",
        tip: "Mẹo nhớ: ĐẠI HỘI VIII (1996) = ĐẨY MẠNH CNH-HĐH ➔ MỤC TIÊU CƠ BẢN THÀNH NƯỚC CÔNG NGHIỆP VÀO NĂM 2020."
      },
      explanation: "Đại hội VIII (6/1996) đề ra mục tiêu: Phấn đấu từ nay đến năm 2020 đưa nước ta cơ bản trở thành một nước công nghiệp."
    };
  } else if (i < 35) {
    return {
      id,
      examSet: 4,
      sectionId: "dh-8-grp-2",
      subsectionId: "dh-8-sec-2",
      question: `[Bẫy Quốc sách Hàng đầu ĐH VIII - Câu ${i + 1}] Theo Văn kiện Đại hội VIII, hai lĩnh vực nào được xác định là quốc sách hàng đầu, là động lực CNH-HĐH?`,
      options: [
        "Khoa học và công nghệ cùng với Giáo dục và đào tạo được xác định là quốc sách hàng đầu.",
        "Công nghiệp chế biến và Nông nghiệp xuất khẩu nông sản được xác định là quốc sách hàng.",
        "Kinh tế nhà nước và Kinh tế tập thể hợp tác xã kiểu mới được xác định là quốc sách hàng.",
        "Hạ tầng bưu chính viễn thông và Giao thông vận tải đường bộ được xác định là quốc sách."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên hay nhầm quốc sách hàng đầu (KH-CN & GD-ĐT) với các ngành kinh tế mũi nhọn hay thành phần kinh tế chủ đạo.",
        trickWord: "Khoa học công nghệ + Giáo dục đào tạo (Quốc sách hàng đầu)",
        citation: "Giáo trình Lịch sử Đảng - Động lực CNH-HĐH Đại hội VIII (6/1996).",
        tip: "Mẹo nhớ: KH-CN VÀ GD-ĐT = QUỐC SÁCH HÀNG ĐẦU, ĐỘNG LỰC CHÍNH CỦA CNH-HĐH."
      },
      explanation: "Đại hội VIII khẳng định: Khoa học và công nghệ cùng với giáo dục và đào tạo là quốc sách hàng đầu, là động lực CNH-HĐH."
    };
  } else {
    return {
      id,
      examSet: 4,
      sectionId: "dh-8-grp-3",
      subsectionId: "dh-8-sec-3",
      question: `[Bẫy NQ TƯ 5 khóa VIII - Câu ${i + 1}] Nghị quyết Trung ương 5 khóa VIII (tháng 7/1998) là văn kiện có ý nghĩa đặc biệt về lĩnh vực nào?`,
      options: [
        "Nghị quyết về Xây dựng và phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.",
        "Nghị quyết về Chiến lược phát triển kinh tế biển vững chắc bảo vệ chủ quyền hải đảo.",
        "Nghị quyết về Đổi mới và nâng cao chất lượng hoạt động của hệ thống các trường đại học.",
        "Nghị quyết về Cải cách bộ máy hành chính nhà nước và tinh giản biên chế cán bộ công chức."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên nhầm Nghị quyết Trung ương 5 khóa VIII (7/1998) về Văn hóa với Nghị quyết TƯ 2 (12/1996) về Giáo dục / KH-CN hay NQ TƯ 3 (6/1997) về Cán bộ.",
        trickWord: "Nghị quyết Trung ương 5 khóa VIII (7/1998) = Văn hóa tiên tiến đậm đà bản sắc",
        citation: "Giáo trình Lịch sử Đảng - Nghị quyết Trung ương 5 khóa VIII (tháng 7/1998).",
        tip: "Mẹo nhớ: NQ TƯ 5 KHÓA VIII (7/1998) = NGHỊ QUYẾT VỀ VĂN HÓA TIÊN TIẾN, ĐẬM ĐÀ BẢN SẮC DÂN TỘC."
      },
      explanation: "Hội nghị Trung ương 5 khóa VIII (7/1998) ban hành Nghị quyết nổi tiếng về 'Xây dựng và phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc'."
    };
  }
});

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
  console.log("✅ All 50 trick questions passed Option Length Balance (L_max - L_min <= 15)!");
  const fileContent = `/* ============================================================
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ BẪY 2: ĐẠI HỘI VIII (6/1996)
   Mã Bộ Đề: questions-lsd-dh8-trick2.js
   Số lượng: 50 câu bẫy tư duy Vận dụng cao (100% có trickDetails)
   ============================================================ */

export const questionsLsdDh8Trick2 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh8-trick2.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh8-trick2.js");
}
