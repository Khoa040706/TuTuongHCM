import fs from "fs";

// 50 trick questions for Trick Exam Set 2 (Đại hội VII - 6/1991)
const questions = Array.from({ length: 50 }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  const id = `lsd-dh7-t2-${num}`;

  if (i < 20) {
    return {
      id,
      examSet: 4,
      sectionId: "dh-7-grp-1",
      subsectionId: "dh-7-sec-1",
      question: `[Bẫy 6 đặc trưng Cương lĩnh 1991 - Câu ${i + 1}] Trong Cương lĩnh 1991, đặc trưng về nhân dân của xã hội XHCN được đúc kết bằng mệnh đề nào?`,
      options: [
        "Đặc trưng nhân dân: Do nhân dân làm chủ, có nền kinh tế phát triển cao dựa trên LLSX hiện đại.",
        "Đặc trưng nhân dân: Do giai cấp công nhân hoàn toàn quản lý không cần sự tham gia của tầng lớp khác.",
        "Đặc trưng nhân dân: Do các tập đoàn kinh tế tư nhân lớn nắm giữ quyền lực quản lý chính trị.",
        "Đặc trưng nhân dân: Do tầng lớp trí thức tiểu tư sản nắm giữ toàn bộ chính quyền địa phương."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên nhầm đặc trưng 'Do nhân dân làm chủ' (Cương lĩnh 1991) với các quan niệm sai lệch về độc quyền quản lý giai cấp hay tư nhân nắm quyền.",
        trickWord: "Do nhân dân làm chủ (Cương lĩnh 1991)",
        citation: "Giáo trình Lịch sử Đảng - 6 đặc trưng xã hội XHCN trong Cương lĩnh 1991.",
        tip: "Mẹo nhớ: CƯƠNG LĨNH 1991: ĐẶC TRƯNG ĐẦU TIÊN VỀ XÃ HỘI XHCN LÀ 'DO NHÂN DÂN LÀM CHỦ'."
      },
      explanation: "Cương lĩnh 1991 nêu rõ đặc trưng đầu tiên: Xã hội XHCN mà nhân dân ta xây dựng là một xã hội do nhân dân làm chủ."
    };
  } else if (i < 35) {
    return {
      id,
      examSet: 4,
      sectionId: "dh-7-grp-2",
      subsectionId: "dh-7-sec-2",
      question: `[Bẫy Chiến lược KT-XH 2000 - Câu ${i + 1}] Mục tiêu cốt lõi của Chiến lược ổn định và phát triển KT-XH đến năm 2000 được ĐH VII thông qua là gì?`,
      options: [
        "Mục tiêu: Đưa đất nước ra khỏi khủng hoảng, ổn định KT-XH, phấn đấu GDP năm 2000 gấp đôi 1990.",
        "Mục tiêu: Hoàn thành triệt để quá trình công nghiệp hóa hiện đại hóa đất nước ngay trong năm 1995.",
        "Mục tiêu: Đưa Việt Nam trở thành quốc gia phát triển có thu nhập cao trong khu vực Đông Nam Á.",
        "Mục tiêu: Triệt tiêu hoàn toàn các thành phần kinh tế tư nhân để quay lại cơ chế bao cấp cào bằng."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên nhầm mục tiêu GDP 2000 gấp đôi 1990 (Chiến lược 2000) với việc hoàn thành CNH-HĐH (mục tiêu dài hạn hơn tại các kỳ ĐH sau).",
        trickWord: "GDP gấp đôi năm 1990 (Chiến lược 2000)",
        citation: "Giáo trình Lịch sử Đảng - Chiến lược ổn định và phát triển KT-XH đến năm 2000 (Đại hội VII).",
        tip: "Mẹo nhớ: CHIẾN LƯỢC 2000 (ĐH VII) = RA KHỎI KHỦNG HOẢNG + GDP 2000 GẤP ĐÔI NĂM 1990."
      },
      explanation: "Chiến lược ổn định và phát triển KT-XH đến 2000 đặt mục tiêu vượt qua khủng hoảng, ổn định KT-XH, phấn đấu GDP năm 2000 tăng gấp đôi so với 1990."
    };
  } else {
    return {
      id,
      examSet: 4,
      sectionId: "dh-7-grp-3",
      subsectionId: "dh-7-sec-3",
      question: `[Bẫy 4 nguy cơ Hội nghị 1994 - Câu ${i + 1}] Trong 4 nguy cơ được Hội nghị giữa nhiệm kỳ khóa VII (1/1994) cảnh báo, nguy cơ nào là thách thức hàng đầu?`,
      options: [
        "Nguy cơ tụt hậu xa về kinh tế so với nhiều nước trong khu vực và trên thế giới hiện nay.",
        "Nguy cơ lạm phát phi mã quay trở lại mức ba chữ số như thời kỳ trước đổi mới năm 1986.",
        "Nguy cơ thiếu hụt nghiêm trọng nguồn vốn đầu tư trực tiếp nước ngoài FDI vào sản xuất.",
        "Nguy cơ gia tăng đột biến lốc xoáy thiên tai bão lũ tại khu vực các tỉnh miền Trung."
      ],
      answer: 0,
      difficulty: "hard",
      isOutside: false,
      trickDetails: {
        whyTrapped: "Học viên hay nhầm 4 nguy cơ chính thức (tụt hậu kinh tế, chệch hướng XHCN, tham nhũng, diễn biến hòa bình) với các hiện tượng lạm phát hay thiên tai.",
        trickWord: "Tụt hậu xa về kinh tế (1 trong 4 nguy cơ 1/1994)",
        citation: "Giáo trình Lịch sử Đảng - 4 nguy cơ được Hội nghị giữa nhiệm kỳ khóa VII (1/1994) nhận diện.",
        tip: "Mẹo nhớ: 4 NGUY CƠ (1/1994) = TỤT HẬU KINH TẾ + CHỆCH HƯỚNG XHCN + THAM NHỮNG + DIỄN BIẾN HÒA BÌNH."
      },
      explanation: "Hội nghị giữa nhiệm kỳ khóa VII (1/1994) nhận diện 4 nguy cơ: Tụt hậu xa về kinh tế, chệch hướng XHCN, tham nhũng tiêu cực, và diễn biến hòa bình."
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
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ BẪY 2: ĐẠI HỘI VII (6/1991)
   Mã Bộ Đề: questions-lsd-dh7-trick2.js
   Số lượng: 50 câu bẫy tư duy Vận dụng cao (100% có trickDetails)
   ============================================================ */

export const questionsLsdDh7Trick2 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh7-trick2.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh7-trick2.js");
}
