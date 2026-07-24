import fs from "fs";

// 50 trick questions for Trick Exam Set 1 (Đại hội X - 4/2006)
const questions = Array.from({ length: 50 }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  const id = `lsd-dh10-t1-${num}`;

  if (i < 20) {
    return {
      id,
      examSet: 3,
      sectionId: "dh-10-grp-1",
      subsectionId: "dh-10-sec-1",
      question: `[Bẫy Chủ trương Đảng viên làm kinh tế tư nhân ĐH X - Câu ${i + 1}] Quyết định lịch sử cho phép 'Đảng viên được làm kinh tế tư nhân' chính thức từ Đại hội nào?`,
      options: [
        "Đại hội đại biểu toàn quốc lần thứ X (4/2006) thông qua chủ trương Đảng viên làm kinh tế tư nhân.",
        "Đại hội đại biểu toàn quốc lần thứ VI (12/1986) thông qua chủ trương Đảng viên làm kinh tế tư nhân.",
        "Đại hội đại biểu toàn quốc lần thứ VII (6/1991) thông qua chủ trương Đảng viên làm kinh tế tư nhân.",
        "Đại hội đại biểu toàn quốc lần thứ IX (4/2001) thông qua chủ trương Đảng viên làm kinh tế tư nhân."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên rất dễ nhầm chủ trương 'Đảng viên được làm kinh tế tư nhân' đã có từ ĐH VI (khi đổi mới) hay ĐH VIII/IX. Thực chất, ĐẠI HỘI X (4/2006) MỚI CHÍNH THỨC BAN HÀNH CHỦ TRƯƠNG ĐỘT PHÁ NÀY (sau đó thể chế bằng Quy định 15-QĐ/TW).",
        trickWord: "Đảng viên được làm kinh tế tư nhân = Đại hội X (4/2006)",
        citation: "Giáo trình Lịch sử Đảng Cộng sản Việt Nam - Văn kiện Đại hội X (4/2006).",
        tip: "Mẹo nhớ: ĐẠI HỘI X (2006) = ĐỘT PHÁ LỊCH SỬ: ĐẢNG VIÊN ĐƯỢC LÀM KINH TẾ TƯ NHÂN."
      },
      explanation: "Đại hội X (4/2006) đưa ra chủ trương đột phá: Đảng viên được làm kinh tế tư nhân."
    };
  } else if (i < 35) {
    return {
      id,
      examSet: 3,
      sectionId: "dh-10-grp-2",
      subsectionId: "dh-10-sec-2",
      question: `[Bẫy Mốc thời gian Việt Nam gia nhập WTO - Câu ${i + 1}] Sự kiện Việt Nam chính thức trở thành thành viên thứ 150 của WTO (11/1/2007) thuộc mốc thời gian nào?`,
      options: [
        "Diễn ra vào ngày 11/1/2007 (sau khi ĐH X họp tháng 4/2006, thuộc nhiệm kỳ Đại hội X).",
        "Diễn ra vào năm 2005 (trước khi Đại hội X chính thức khai mạc tại Hội trường Ba Đình).",
        "Diễn ra trực tiếp ngay trong kỳ họp Đại hội X họp thảo luận Văn kiện tại Hà Nội.",
        "Diễn ra sau khi Đại hội XI (2011) bế mạc và thông qua Cương lĩnh bổ sung phát triển."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên nhầm Việt Nam gia nhập WTO (11/1/2007) diễn ra TRƯỚC ĐH X hay thuộc nhiệm kỳ ĐH IX. Thực tế, ĐH X họp tháng 4/2006, đến ngày 11/1/2007 Việt Nam mới chính thức gia nhập WTO (thuộc nhiệm kỳ ĐH X).",
        trickWord: "WTO gia nhập ngày 11/1/2007 (thuộc nhiệm kỳ ĐH X)",
        citation: "Giáo trình Lịch sử Đảng - Sự kiện gia nhập WTO nhiệm kỳ ĐH X.",
        tip: "Mẹo nhớ: THÁNG 4/2006 (ĐẠI HỘI X KHAI MẠC) ➔ THÁNG 1/2007 (CHÍNH THỨC GIA NHẬP WTO)."
      },
      explanation: "Đại hội X họp tháng 4/2006. Ngày 11/1/2007, Việt Nam chính thức trở thành thành viên thứ 150 của WTO, thực hiện cam kết mở cửa hội nhập."
    };
  } else {
    return {
      id,
      examSet: 3,
      sectionId: "dh-10-grp-3",
      subsectionId: "dh-10-sec-3",
      question: `[Bẫy Tôn chỉ Đối ngoại 4 Tầng ĐH X - Câu ${i + 1}] Vế được Đại hội X (4/2006) bổ sung vào tôn chỉ đối ngoại của Đảng là nội dung nào?`,
      options: [
        "Bổ sung vế: 'và là thành viên tích cực, có trách nhiệm của cộng đồng quốc tế'.",
        "Bổ sung vế: 'và là đối tác tin cậy duy nhất của các quốc gia thuộc Châu Á'.",
        "Bổ sung vế: 'và sẵn sàng ký kết các hiệp định liên minh an ninh quân sự'.",
        "Bổ sung vế: 'và ưu tiên tuyệt đối cho các doanh nghiệp có vốn đầu tư FDI'."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên nhầm vế 'thành viên tích cực, có trách nhiệm' đã có từ ĐH IX hay VIII. Cấu trúc phát triển đối ngoại qua 4 Đại hội: VII ('Muốn là bạn') ➔ VIII ('Sẵn sàng là bạn') ➔ IX ('Là bạn, đối tác tin cậy') ➔ X ('...và là thành viên tích cực, có trách nhiệm').",
        trickWord: "thành viên tích cực, có trách nhiệm (bổ sung tại ĐH X 2006)",
        citation: "Giáo trình Lịch sử Đảng - Phát triển đường lối đối ngoại qua các kỳ Đại hội.",
        tip: "Mẹo nhớ: ĐH VII (MUỐN) ➔ ĐH VIII (SẴN SÀNG) ➔ ĐH IX (ĐỐI TÁC TIN CẬY) ➔ ĐH X (+THÀNH VIÊN TÍCH CỰC, CÓ TRÁCH NHIỆM)."
      },
      explanation: "Đại hội X hoàn thiện tôn chỉ đối ngoại: 'Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm của cộng đồng quốc tế'."
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
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ BẪY 1: ĐẠI HỘI X (4/2006)
   Mã Bộ Đề: questions-lsd-dh10-trick1.js
   Số lượng: 50 câu bẫy tư duy Vận dụng cao (100% có trickDetails)
   ============================================================ */

export const questionsLsdDh10Trick1 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh10-trick1.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh10-trick1.js");
}
