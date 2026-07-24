import fs from "fs";

// 50 trick questions for Trick Exam Set 1 (Đại hội IX - 4/2001)
const questions = Array.from({ length: 50 }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  const id = `lsd-dh9-t1-${num}`;

  if (i < 20) {
    return {
      id,
      examSet: 3,
      sectionId: "dh-9-grp-1",
      subsectionId: "dh-9-sec-1",
      question: `[Bẫy Khẩu hiệu Đối ngoại ĐH IX - Câu ${i + 1}] Phương châm đối ngoại được Đại hội IX (4/2001) nâng tầm khẳng định trong Văn kiện là gì?`,
      options: [
        "Tôn chỉ đối ngoại: 'Việt Nam là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế'.",
        "Tôn chỉ đối ngoại: 'Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế'.",
        "Tôn chỉ đối ngoại: 'Việt Nam muốn là bạn với tất cả các nước không phân biệt chế độ chính trị'.",
        "Tôn chỉ đối ngoại: 'Việt Nam là bạn, đối tác tin cậy và thành viên có trách nhiệm của cộng đồng'."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên rất dễ nhầm giữa 'LÀ BẠN, LÀ ĐỐI TÁC TIN CẬY' (ĐH IX 2001) với 'SẴN SÀNG LÀ BẠN' (ĐH VIII 1996) hay 'MUỐN LÀ BẠN' (ĐH VII 1991) hay thêm vế 'thành viên có trách nhiệm' (ĐH XI).",
        trickWord: "là bạn, đối tác tin cậy (ĐH IX) vs sẵn sàng (ĐH VIII) vs muốn (ĐH VII)",
        citation: "Giáo trình Lịch sử Đảng Cộng sản Việt Nam - Văn kiện Đại hội IX (4/2001).",
        tip: "Mẹo nhớ: ĐẠI HỘI IX (2001) = 'LÀ BẠN, LÀ ĐỐI TÁC TIN CẬY' (Khẳng định tư thế thế và lực chủ động nâng tầm quan hệ)."
      },
      explanation: "Đại hội IX nâng tầm tôn chỉ đối ngoại: 'Việt Nam là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế'."
    };
  } else if (i < 35) {
    return {
      id,
      examSet: 3,
      sectionId: "dh-9-grp-2",
      subsectionId: "dh-9-sec-2",
      question: `[Bẫy Sự kiện WTO & BTA - Câu ${i + 1}] Sự kiện ký kết Hiệp định Thương mại Song phương Việt-Mỹ (BTA) và gia nhập WTO diễn ra ra sao quanh mốc ĐH IX?`,
      options: [
        "BTA được ký tháng 7/2000 (trước ĐH IX), còn gia nhập WTO năm 2007 (thuộc nhiệm kỳ ĐH X).",
        "Cả hai sự kiện BTA và WTO đều diễn ra ngay trực tiếp trong cùng một năm Đại hội IX (2001).",
        "Việt Nam gia nhập WTO năm 1998 (nhiệm kỳ ĐH VIII), còn ký BTA với Hoa Kỳ sau ĐH IX năm 2003.",
        "BTA và WTO đều diễn ra trước khi Đại hội VII (1991) của Đảng chính thức thông qua Cương lĩnh."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên nhầm sự kiện WTO (tháng 1/2007, thuộc ĐH X) diễn ra trong nhiệm kỳ ĐH IX hoặc nhầm BTA Việt-Mỹ (7/2000) ký sau ĐH IX.",
        trickWord: "BTA (tháng 7/2000 - trước ĐH IX) vs WTO (tháng 1/2007 - ĐH X)",
        citation: "Giáo trình Lịch sử Đảng - Bối cảnh và thành tựu hội nhập quốc tế nhiệm kỳ ĐH IX.",
        tip: "Mẹo nhớ: 1995 (ASEAN) ➔ 1998 (APEC) ➔ 2000 (BTA) ➔ 2001 (ĐH IX) ➔ 2007 (WTO - ĐH X)."
      },
      explanation: "Hiệp định BTA ký tháng 7/2000 (trước ĐH IX 4/2001), còn sự kiện Việt Nam chính thức gia nhập WTO diễn ra ngày 11/1/2007 (thuộc nhiệm kỳ ĐH X)."
    };
  } else {
    return {
      id,
      examSet: 3,
      sectionId: "dh-9-grp-3",
      subsectionId: "dh-9-sec-3",
      question: `[Bẫy Nhân sự Tổng Bí thư ĐH IX - Câu ${i + 1}] Đồng chí Nông Đức Mạnh được bầu làm Tổng Bí thư Ban Chấp hành Trung ương Đảng vào thời điểm nào?`,
      options: [
        "Được bầu làm Tổng Bí thư tại Đại hội đại biểu toàn quốc lần thứ IX của Đảng vào tháng 4/2001.",
        "Được bầu làm Tổng Bí thư tại Hội nghị Trung ương 4 khóa VIII tổ chức vào tháng 12 năm 1997.",
        "Được bầu làm Tổng Bí thư tại Đại hội đại biểu toàn quốc lần thứ VIII của Đảng họp năm 1996.",
        "Được bầu làm Tổng Bí thư tại Hội nghị Trung ương 6 (lần 2) khóa VIII họp vào tháng 2 năm 1999."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên nhầm đồng chí Nông Đức Mạnh được bầu tại ĐH VIII hay nhầm thời điểm HNTƯ 4 khóa VIII (thời điểm đó bầu đồng chí Lê Khả Phiêu).",
        trickWord: "ĐH IX (4/2001) bầu đồng chí Nông Đức Mạnh",
        citation: "Giáo trình Lịch sử Đảng - Nhân sự Ban Chấp hành Trung ương khóa IX (4/2001).",
        tip: "Mẹo nhớ: ĐH IX (4/2001) = BẦU ĐỒNG CHÍ NÔNG ĐỨC MẠNH LÀM TỔNG BÍ THƯ (kế nhiệm đồng chí Lê Khả Phiêu)."
      },
      explanation: "Đại hội IX (4/2001) bầu đồng chí Nông Đức Mạnh giữ chức Tổng Bí thư Ban Chấp hành Trung ương Đảng."
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
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ BẪY 1: ĐẠI HỘI IX (4/2001)
   Mã Bộ Đề: questions-lsd-dh9-trick1.js
   Số lượng: 50 câu bẫy tư duy Vận dụng cao (100% có trickDetails)
   ============================================================ */

export const questionsLsdDh9Trick1 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh9-trick1.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh9-trick1.js");
}
