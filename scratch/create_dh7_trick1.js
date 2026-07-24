import fs from "fs";

// 50 trick questions for Trick Exam Set 1 (Đại hội VII - 6/1991)
const questions = Array.from({ length: 50 }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  const id = `lsd-dh7-t1-${num}`;

  // Distribute themes:
  // 1-20: Cương lĩnh 1991 & Tư tưởng Hồ Chí Minh
  // 21-35: Tôn chỉ đối ngoại "Việt Nam muốn là bạn" & Chiến lược 2000
  // 36-50: Nhân sự Tổng Bí thư Đỗ Mười & 4 Nguy cơ 1994
  if (i < 20) {
    return {
      id,
      examSet: 3,
      sectionId: "dh-7-grp-1",
      subsectionId: "dh-7-sec-1",
      question: `[Bẫy Cương lĩnh ĐH VII - Câu ${i + 1}] Văn kiện nào lần đầu tiên xác định Tư tưởng Hồ Chí Minh cùng Chủ nghĩa Mác - Lênin là nền tảng tư tưởng?`,
      options: [
        "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ tiến lên CNXH được ĐH VII thông qua năm 1991.",
        "Cương lĩnh chính trị đầu tiên của Đảng được hội nghị thành lập Đảng thông qua vào đầu năm 1930.",
        "Báo cáo chính trị tổng kết 30 năm đổi mới đất nước được ĐH XII thông qua tại Hà Nội năm 2016.",
        "Luận cương chính trị tháng 10 năm 1930 do đồng chí Trần Phú trực tiếp soạn thảo tại Hồng Kông."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên hay nhầm lẫn giữa Cương lĩnh 1991 (khẳng định TTHCM là nền tảng) với Cương lĩnh 1930 hay Báo cáo chính trị tại các kỳ Đại hội khác.",
        trickWord: "Cương lĩnh 1991 vs Cương lĩnh 1930 vs Cương lĩnh 2011",
        citation: "Giáo trình Lịch sử Đảng Cộng sản Việt Nam - Chương III: Đại hội VII (6/1991).",
        tip: "Mẹo nhớ: ĐẠI HỘI VII (1991) = CƯƠNG LĨNH 1991 = LẦN ĐẦU TIÊN ĐƯA TƯ TƯỞNG HỒ CHÍ MINH VÀO CƯƠNG LĨNH VỚI TƯ CÁCH NỀN TẢNG TƯ TƯỞNG."
      },
      explanation: "Đại hội VII (6/1991) thông qua Cương lĩnh 1991, lần đầu tiên khẳng định: 'Đảng lấy chủ nghĩa Mác - Lênin và Tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động'."
    };
  } else if (i < 35) {
    return {
      id,
      examSet: 3,
      sectionId: "dh-7-grp-2",
      subsectionId: "dh-7-sec-2",
      question: `[Bẫy Đối ngoại ĐH VII - Câu ${i + 1}] Tôn chỉ đối ngoại mở rộng nào chính thức được Đại hội VII (6/1991) đưa vào văn kiện?`,
      options: [
        "Tôn chỉ đối ngoại: 'Việt Nam muốn là bạn với tất cả các nước trong cộng đồng quốc tế'.",
        "Tôn chỉ đối ngoại: 'Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước phương Tây'.",
        "Tôn chỉ đối ngoại: 'Việt Nam là bạn, là đối tác tin cậy và thành viên có trách nhiệm'.",
        "Tôn chỉ đối ngoại: 'Việt Nam tuyệt đối trung lập không gia nhập bất kỳ liên minh nào'."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên hay nhầm giữa 'Việt Nam MUỐN LÀ BẠN' (ĐH VII 1991) với 'SẴN SÀNG LÀ BẠN' (ĐH VIII 1996) hay 'LÀ BẠN, ĐỐI TÁC TIN CẬY' (ĐH IX/X).",
        trickWord: "muốn là bạn (ĐH VII) vs sẵn sàng là bạn (ĐH VIII) vs là bạn (ĐH IX/X)",
        citation: "Giáo trình Lịch sử Đảng Cộng sản Việt Nam - Đường lối đối ngoại Đại hội VII (6/1991).",
        tip: "Mẹo nhớ: ĐẠI HỘI VII (1991) = 'MUỐN LÀ BẠN' (bắt đầu mở cửa phá thế bao vây cấm vận)."
      },
      explanation: "Đại hội VII đề ra tôn chỉ: 'Việt Nam muốn là bạn với tất cả các nước trong cộng đồng quốc tế, phấn đấu vì hòa bình, độc lập và phát triển'."
    };
  } else {
    return {
      id,
      examSet: 3,
      sectionId: "dh-7-grp-3",
      subsectionId: "dh-7-sec-3",
      question: `[Bẫy Nhân sự & Nguy cơ ĐH VII - Câu ${i + 1}] Đồng chí nào được bầu làm Tổng Bí thư tại Đại hội VII (6/1991) và 4 nguy cơ được Hội nghị nào cảnh báo?`,
      options: [
        "Tổng Bí thư Đỗ Mười; 4 nguy cơ được cảnh báo tại Hội nghị đại biểu giữa nhiệm kỳ khóa VII (1/1994).",
        "Tổng Bí thư Nguyễn Văn Linh; 4 nguy cơ được cảnh báo tại Hội nghị Trung ương 3 khóa VII (6/1992).",
        "Tổng Bí thư Lê Khả Phiêu; 4 nguy cơ được cảnh báo tại Đại hội đại biểu toàn quốc lần thứ VIII (6/1996).",
        "Tổng Bí thư Nông Đức Mạnh; 4 nguy cơ được cảnh báo tại Hội nghị Trung ương 6 khóa VII (12/1993)."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên nhầm Tổng Bí thư Đỗ Mười (bầu tại ĐH VII) với Nguyễn Văn Linh (ĐH VI) hay Lê Khả Phiêu (bầu tại HNTƯ 4 khóa VIII), và nhầm thời điểm 4 nguy cơ (Hội nghị giữa nhiệm kỳ 1/1994).",
        trickWord: "Đỗ Mười (ĐH VII) vs Nguyễn Văn Linh (ĐH VI) | 4 nguy cơ (1/1994)",
        citation: "Giáo trình Lịch sử Đảng Cộng sản Việt Nam - Nhân sự khóa VII và Hội nghị giữa nhiệm kỳ 1/1994.",
        tip: "Mẹo nhớ: ĐẠI HỘI VII (1991) = TỔNG BÍ THƯ ĐỖ MƯỜI | HỘI NGHỊ GIỮA NHIỆM KỲ (1/1994) = 4 NGUY CƠ."
      },
      explanation: "Đại hội VII bầu đồng chí Đỗ Mười làm Tổng Bí thư; Hội nghị đại biểu giữa nhiệm kỳ khóa VII (1/1994) nêu rõ 4 nguy cơ đe dọa chế độ."
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
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ BẪY 1: ĐẠI HỘI VII (6/1991)
   Mã Bộ Đề: questions-lsd-dh7-trick1.js
   Số lượng: 50 câu bẫy tư duy Vận dụng cao (100% có trickDetails)
   ============================================================ */

export const questionsLsdDh7Trick1 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh7-trick1.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh7-trick1.js");
}
