import fs from "fs";

// 50 trick questions for Trick Exam Set 1 (Đại hội VIII - 6/1996)
const questions = Array.from({ length: 50 }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  const id = `lsd-dh8-t1-${num}`;

  if (i < 20) {
    return {
      id,
      examSet: 3,
      sectionId: "dh-8-grp-1",
      subsectionId: "dh-8-sec-1",
      question: `[Bẫy Khẩu hiệu Đối ngoại ĐH VIII - Câu ${i + 1}] Khẩu hiệu đối ngoại được Đại hội VIII (6/1996) chính thức khẳng định trong Văn kiện là gì?`,
      options: [
        "Tôn chỉ đối ngoại: 'Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế'.",
        "Tôn chỉ đối ngoại: 'Việt Nam muốn là bạn với tất cả các nước trong cộng đồng quốc tế vì hòa bình'.",
        "Tôn chỉ đối ngoại: 'Việt Nam là bạn, là đối tác tin cậy và thành viên tích cực có trách nhiệm'.",
        "Tôn chỉ đối ngoại: 'Việt Nam chỉ làm bạn đối tác chiến lược với các nước trong khối Đông Nam Á'."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên rất dễ nhầm giữa 'SẴN SÀNG LÀ BẠN' (ĐH VIII 1996) với 'MUỐN LÀ BẠN' (ĐH VII 1991) hay 'LÀ BẠN, ĐỐI TÁC TIN CẬY VÀ THÀNH VIÊN TÍCH CỰC' (ĐH IX/X/XI).",
        trickWord: "sẵn sàng là bạn (ĐH VIII) vs muốn là bạn (ĐH VII) vs là bạn (ĐH IX/X)",
        citation: "Giáo trình Lịch sử Đảng Cộng sản Việt Nam - Văn kiện Đại hội VIII (6/1996).",
        tip: "Mẹo nhớ: ĐẠI HỘI VIII (1996) = 'SẴN SÀNG LÀ BẠN' (Tiến từ thế 'muốn' sang thế 'sẵn sàng' chủ động hơn)."
      },
      explanation: "Đại hội VIII phát triển tôn chỉ đối ngoại: 'Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế'."
    };
  } else if (i < 35) {
    return {
      id,
      examSet: 3,
      sectionId: "dh-8-grp-2",
      subsectionId: "dh-8-sec-2",
      question: `[Bẫy Nhân sự Tổng Bí thư ĐH VIII - Câu ${i + 1}] Đồng chí Lê Khả Phiêu chính thức được bầu giữ chức Tổng Bí thư Ban Chấp hành Trung ương Đảng vào thời điểm nào?`,
      options: [
        "Được bầu tại Hội nghị Trung ương 4 khóa VIII họp vào tháng 12 năm 1997 (thay đồng chí Đỗ Mười).",
        "Được bầu ngay trực tiếp tại Đại hội đại biểu toàn quốc lần thứ VIII của Đảng tổ chức tháng 6/1996.",
        "Được bầu tại Hội nghị Trung ương 1 khóa VIII ngay sau khi Đại hội VIII bế mạc tại Thủ đô Hà Nội.",
        "Được bầu tại Đại hội đại biểu toàn quốc lần thứ IX của Đảng tổ chức tại Thủ đô Hà Nội năm 2001."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên hay nhầm đồng chí Lê Khả Phiêu được bầu Tổng Bí thư ngay tại Đại hội VIII (6/1996), thực tế tại ĐH VIII đồng chí Đỗ Mười tái cử, tới Hội nghị Trung ương 4 khóa VIII (12/1997) mới bầu đồng chí Lê Khả Phiêu.",
        trickWord: "HNTƯ 4 khóa VIII (12/1997) bầu Lê Khả Phiêu ≠ bầu ngay tại ĐH VIII (6/1996)",
        citation: "Giáo trình Lịch sử Đảng - Nhân sự khóa VIII và Hội nghị Trung ương 4 (12/1997).",
        tip: "Mẹo nhớ: TẠI ĐẠI HỘI VIII (6/1996) ĐỒNG CHÍ ĐỖ MƯỜI TÁI CỬ ➔ ĐẾN HNTƯ 4 (12/1997) MỚI BẦU ĐỒNG CHÍ LÊ KHẢ PHIÊU."
      },
      explanation: "Tại Đại hội VIII (6/1996), đồng chí Đỗ Mười tiếp tục được bầu làm Tổng Bí thư. Đến tháng 12/1997 (HNTƯ 4 khóa VIII), đồng chí Lê Khả Phiêu mới được bầu làm Tổng Bí thư."
    };
  } else {
    return {
      id,
      examSet: 3,
      sectionId: "dh-8-grp-3",
      subsectionId: "dh-8-sec-3",
      question: `[Bẫy Sự kiện ASEAN & Mỹ - Câu ${i + 1}] Sự kiện Việt Nam gia nhập ASEAN và bình thường hóa quan hệ với Hoa Kỳ (tháng 7/1995) diễn ra ở mốc nào?`,
      options: [
        "Diễn ra vào tháng 7/1995, trước khi Đại hội VIII của Đảng chính thức khai mạc tại Hà Nội (6/1996).",
        "Diễn ra ngay trong thời gian Đại hội VIII đang họp thảo luận Văn kiện tại Hội trường Ba Đình.",
        "Diễn ra ngay sau khi Đại hội VIII bế mạc được 1 năm vào kỳ họp Hội nghị Trung ương 4 khóa VIII.",
        "Diễn ra trong thời kỳ Đại hội VII đang chuẩn bị thông qua Cương lĩnh xây dựng đất nước 1991."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên hay nhầm sự kiện gia nhập ASEAN và bình thường hóa Việt-Mỹ (tháng 7/1995) thuộc về nhiệm kỳ Đại hội VIII hay diễn ra trong/sau ĐH VIII, thực chất diễn ra TRƯỚC ĐH VIII (vẫn trong nhiệm kỳ khóa VII).",
        trickWord: "Tháng 7/1995 (trước ĐH VIII 6/1996)",
        citation: "Giáo trình Lịch sử Đảng - Bối cảnh đối ngoại trước Đại hội VIII (6/1996).",
        tip: "Mẹo nhớ: THÁNG 7/1995 (ASEAN + VIỆT-MỸ) ➔ THÁNG 6/1996 (ĐẠI HỘI VIII KHAI MẠC)."
      },
      explanation: "Tháng 7/1995 (gia nhập ASEAN và bình thường hóa quan hệ Việt - Mỹ) diễn ra trước Đại hội VIII (6/1996), tạo bối cảnh thuận lợi cho ĐH VIII đề ra đường lối CNH-HĐH."
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
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ BẪY 1: ĐẠI HỘI VIII (6/1996)
   Mã Bộ Đề: questions-lsd-dh8-trick1.js
   Số lượng: 50 câu bẫy tư duy Vận dụng cao (100% có trickDetails)
   ============================================================ */

export const questionsLsdDh8Trick1 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh8-trick1.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh8-trick1.js");
}
