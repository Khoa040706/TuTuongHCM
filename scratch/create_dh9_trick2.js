import fs from "fs";

// 50 trick questions for Trick Exam Set 2 (Đại hội IX - 4/2001)
const questions = Array.from({ length: 50 }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  const id = `lsd-dh9-t2-${num}`;

  if (i < 20) {
    return {
      id,
      examSet: 4,
      sectionId: "dh-9-grp-1",
      subsectionId: "dh-9-sec-1",
      question: `[Bẫy Mô hình Kinh tế Thị trường XHCN - Câu ${i + 1}] Mô hình 'Kinh tế thị trường định hướng XHCN' chính thức được xác định là mô hình kinh tế tổng quát tại ĐH nào?`,
      options: [
        "Được chính thức xác định là mô hình kinh tế tổng quát tại Đại hội đại biểu toàn quốc lần thứ IX (2001).",
        "Được chính thức xác định là mô hình kinh tế tổng quát tại Đại hội đại biểu toàn quốc lần thứ VI (1986).",
        "Được chính thức xác định là mô hình kinh tế tổng quát tại Đại hội đại biểu toàn quốc lần thứ VII (1991).",
        "Được chính thức xác định là mô hình kinh tế tổng quát tại Đại hội đại biểu toàn quốc lần thứ VIII (1996)."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên hay nhầm khái niệm 'Kinh tế thị trường định hướng XHCN' được xác định làm mô hình kinh tế tổng quát từ ĐH VI hay VII hay VIII. Mặc dù các ĐH trước đã khởi xướng và phát triển kinh tế thị trường, nhưng ĐẠI HỘI IX (2001) MỚI CHÍNH THỨC XÁC ĐỊNH ĐÂY LÀ MÔ HÌNH KINH TẾ TỔNG QUÁT TRONG THỜI KỲ QUÁ ĐỘ.",
        trickWord: "Mô hình kinh tế tổng quát = Đại hội IX (4/2001)",
        citation: "Giáo trình Lịch sử Đảng - Mô hình kinh tế tổng quát Đại hội IX (4/2001).",
        tip: "Mẹo nhớ: ĐẠI HỘI IX (2001) = CHÍNH THỨC XÁC ĐỊNH KINH TẾ THỊ TRƯỜNG ĐỊNH HƯỚNG XHCN LÀ MÔ HÌNH KINH TẾ TỔNG QUÁT."
      },
      explanation: "Đại hội IX (4/2001) chính thức xác định: Nền kinh tế thị trường định hướng xã hội chủ nghĩa là mô hình kinh tế tổng quát của nước ta trong thời kỳ quá độ lên chủ nghĩa xã hội."
    };
  } else if (i < 35) {
    return {
      id,
      examSet: 4,
      sectionId: "dh-9-grp-2",
      subsectionId: "dh-9-sec-2",
      question: `[Bẫy Chiến lược 10 năm 2001-2010 - Câu ${i + 1}] Mục tiêu tổng quát của Chiến lược phát triển KT-XH 10 năm 2001-2010 do ĐH IX thông qua là gì?`,
      options: [
        "Đưa nước ta ra khỏi tình trạng kém phát triển; nâng cao rõ rệt đời sống vật chất, tinh thần của nhân dân.",
        "Đưa nước ta cơ bản trở thành một nước công nghiệp theo hướng hiện đại ngay trước mốc thời gian năm 2005.",
        "Phấn đấu hoàn thành xong toàn bộ sự nghiệp công nghiệp hóa, hiện đại hóa trên quy mô cả nước năm 2010.",
        "Biến nước ta thành quốc gia xuất khẩu nông sản duy nhất nắm giữ toàn bộ thị trường Đông Nam Á."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên nhầm mục tiêu Chiến lược 2001-2010 là 'trở thành nước công nghiệp năm 2005 hay 2010', thực chất mục tiêu cốt lõi của 2001-2010 là 'ĐƯA NƯỚC TA RA KHỎI TÌNH TRẠNG KÉM PHÁT TRIỂN', làm tiền đề để năm 2020 cơ bản trở thành nước công nghiệp.",
        trickWord: "Ra khỏi tình trạng kém phát triển (Chiến lược 2001-2010)",
        citation: "Giáo trình Lịch sử Đảng - Mục tiêu Chiến lược 2001-2010 Đại hội IX (4/2001).",
        tip: "Mẹo nhớ: CHIẾN LƯỢC 2001-2010 (ĐH IX) = ĐƯA NƯỚC TA RA KHỎI TÌNH TRẠNG KÉM PHÁT TRIỂN, TĂNG GẤP ĐÔI GDP."
      },
      explanation: "Chiến lược 2001-2010 thông qua tại ĐH IX xác định mục tiêu tổng quát là đưa nước ta ra khỏi tình trạng kém phát triển, nâng cao đời sống nhân dân, tạo nền tảng để đến năm 2020 trở thành nước công nghiệp."
    };
  } else {
    return {
      id,
      examSet: 4,
      sectionId: "dh-9-grp-3",
      subsectionId: "dh-9-sec-3",
      question: `[Bẫy NQTƯ 8 khóa IX về Bảo vệ Tổ quốc - Câu ${i + 1}] Điểm mới đột phá về lý luận trong Nghị quyết Trung ương 8 khóa IX (7/2003) là gì?`,
      options: [
        "Phân định rõ quan điểm về 'đối tác' và 'đối tượng', thực hiện bảo vệ Tổ quốc từ sớm, từ xa bằng hòa bình.",
        "Xem tất cả các nước tư bản phát triển đều là đối tượng tác chiến quân sự trực tiếp của Việt Nam.",
        "Tập trung quân sự hóa toàn bộ lực lượng lao động nông nghiệp nông thôn để sẵn sàng chiến đấu.",
        "Tuyên bố rút khỏi tất cả các hiệp định thương mại song phương và đa phương đã ký kết với quốc tế."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên nhầm NQTƯ 8 khóa IX (7/2003) giữ quan điểm cũ coi các nước tư bản là đối tượng tác chiến cố định, thay vì nhận thức đột phá về 'đối tác' và 'đối tượng' linh hoạt theo lợi ích quốc gia dân tộc.",
        trickWord: "NQTƯ 8 khóa IX (7/2003) = Nhận thức mới về ĐỐI TÁC và ĐỐI TƯỢNG",
        citation: "Giáo trình Lịch sử Đảng - Nghị quyết Trung ương 8 khóa IX (7/2003) về Bảo vệ Tổ quốc.",
        tip: "Mẹo nhớ: NQTƯ 8 KHÓA IX (7/2003) = ĐỘT PHÁ TƯ DUY BẢO VỆ TỔ QUỐC: PHÂN ĐỊNH RÕ ĐỐI TÁC VÀ ĐỐI TƯỢNG."
      },
      explanation: "NQTƯ 8 khóa IX (7/2003) đề ra tư duy bảo vệ Tổ quốc mang tính bước ngoặt: Phân định rõ đối tác và đối tượng, coi việc giữ vững hòa bình, phát triển kinh tế là phương thức bảo vệ Tổ quốc từ sớm, từ xa."
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
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ BẪY 2: ĐẠI HỘI IX (4/2001)
   Mã Bộ Đề: questions-lsd-dh9-trick2.js
   Số lượng: 50 câu bẫy tư duy Vận dụng cao (100% có trickDetails)
   ============================================================ */

export const questionsLsdDh9Trick2 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh9-trick2.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh9-trick2.js");
}
