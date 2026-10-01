import fs from "fs";
import { part1Questions } from "./generate-ad-ch1-part1.mjs";
import { part2Questions } from "./generate-ad-ch1-part2.mjs";

function verifySet(questions, setName, prefix) {
  console.log(`\n========================================`);
  console.log(`Kiểm tra bộ đề: ${setName} (${questions.length} câu)`);
  console.log(`========================================`);

  let errors = [];

  if (questions.length !== 40) {
    errors.push(`Số lượng câu hỏi không đủ 40 câu: hiện có ${questions.length} câu.`);
  }

  const difficulties = { easy: 0, medium: 0, hard: 0 };
  const types = { inside: 0, outside: 0 };
  const questionTypes = {};

  questions.forEach((q, idx) => {
    const expectedId = `${prefix}-${String(idx + 1).padStart(3, "0")}`;
    if (q.id !== expectedId) {
      errors.push(`Câu số ${idx + 1}: ID không khớp. Dự kiến ${expectedId}, thực tế ${q.id}`);
    }

    if (!q.question || typeof q.question !== "string" || q.question.trim().length === 0) {
      errors.push(`Câu ${q.id}: Nội dung câu hỏi rỗng.`);
    }

    if (!Array.isArray(q.options) || q.options.length !== 4) {
      errors.push(`Câu ${q.id}: Phải có đúng 4 phương án lựa chọn.`);
    } else {
      // Check length balance: max - min <= 15 chars
      const lengths = q.options.map((opt) => opt.trim().length);
      const minL = Math.min(...lengths);
      const maxL = Math.max(...lengths);
      const delta = maxL - minL;
      if (delta > 15) {
        errors.push(
          `Câu ${q.id}: Vi phạm độ lệch chiều dài phương án! Delta=${delta} (min=${minL}, max=${maxL}). Chi tiết:\n` +
            q.options.map((opt, i) => `  [${i}] (${opt.length} ký tự): "${opt}"`).join("\n")
        );
      }
    }

    if (typeof q.answer !== "number" || q.answer < 0 || q.answer > 3) {
      errors.push(`Câu ${q.id}: Đáp án answer (${q.answer}) không hợp lệ (phải từ 0 đến 3).`);
    }

    if (!q.explanation || typeof q.explanation !== "string" || q.explanation.trim().length === 0) {
      errors.push(`Câu ${q.id}: Giải thích rỗng.`);
    }

    difficulties[q.difficulty] = (difficulties[q.difficulty] || 0) + 1;
    types[q.type] = (types[q.type] || 0) + 1;
    questionTypes[q.questionType] = (questionTypes[q.questionType] || 0) + 1;
  });

  console.log(`Phân bố độ khó:`, difficulties);
  console.log(`  Dễ: ${difficulties.easy}/12 (${((difficulties.easy / 40) * 100).toFixed(1)}%) [Yêu cầu: 12]`);
  console.log(`  Trung bình: ${difficulties.medium}/16 (${((difficulties.medium / 40) * 100).toFixed(1)}%) [Yêu cầu: 16]`);
  console.log(`  Khó: ${difficulties.hard}/12 (${((difficulties.hard / 40) * 100).toFixed(1)}%) [Yêu cầu: 12]`);

  if (difficulties.easy !== 12 || difficulties.medium !== 16 || difficulties.hard !== 12) {
    errors.push(
      `Phân bố độ khó không đúng chuẩn (12 dễ - 16 tb - 12 khó): Thực tế là ${difficulties.easy} dễ, ${difficulties.medium} tb, ${difficulties.hard} khó.`
    );
  }

  console.log(`Phân bố phạm vi:`, types);
  console.log(`  Inside: ${types.inside}/36 [Yêu cầu: 36]`);
  console.log(`  Outside: ${types.outside}/4 [Yêu cầu: 4]`);

  if (types.inside !== 36 || types.outside !== 4) {
    errors.push(`Phân bố phạm vi không đúng chuẩn (36 inside, 4 outside): Thực tế ${types.inside} inside, ${types.outside} outside.`);
  }

  console.log(`Phân bố dạng câu hỏi:`, questionTypes);

  if (errors.length > 0) {
    console.error(`\n❌ CÓ ${errors.length} LỖI ĐƯỢC PHÁT HIỆN:`);
    errors.forEach((err) => console.error(`- ${err}`));
    return false;
  }

  console.log(`\n✅ ${setName} ĐẠT 100% TIÊU CHUẨN!`);
  return true;
}

const p1Valid = verifySet(part1Questions, "BỘ ĐỀ SỐ 1 (PART 1)", "ad-c1-d1");
const p2Valid = verifySet(part2Questions, "BỘ ĐỀ SỐ 2 (PART 2)", "ad-c1-d2");

if (p1Valid && p2Valid) {
  console.log("\n>>> Tất cả bộ đề đều đạt chuẩn! Tiến hành ghi file vào thư mục data/...");

  const content1 = `/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
   CHAPTER 1: INTRODUCTION — REQUIREMENTS ANALYSIS AND DESIGN
   BỘ ĐỀ THI SỐ 1 (PART 1) — 40 CÂU HỎI CHUẨN CỐ ĐỊNH
   CƠ CẤU: 30% DỄ (12) - 40% TRUNG BÌNH (16) - 30% KHÓ (12)
   TỶ LỆ: 36 INSIDE + 4 OUTSIDE
   MÃ CÂU HỎI: ad-c1-d1-001 ĐẾN ad-c1-d1-040
   TIÊU CHUẨN: CHỐNG ĐOÁN BỪA (DELTA L <= 15 KÝ TỰ)
   ============================================================ */

export const questionsAdCh1Part1 = ${JSON.stringify(part1Questions, null, 2)};
`;

  const content2 = `/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
   CHAPTER 1: INTRODUCTION — REQUIREMENTS ANALYSIS AND DESIGN
   BỘ ĐỀ THI SỐ 2 (PART 2) — 40 CÂU HỎI CHUẨN CỐ ĐỊNH
   CƠ CẤU: 30% DỄ (12) - 40% TRUNG BÌNH (16) - 30% KHÓ (12)
   TỶ LỆ: 36 INSIDE + 4 OUTSIDE
   MÃ CÂU HỎI: ad-c1-d2-001 ĐẾN ad-c1-d2-040
   TIÊU CHUẨN: CHỐNG ĐOÁN BỪA (DELTA L <= 15 KÝ TỰ)
   ============================================================ */

export const questionsAdCh1Part2 = ${JSON.stringify(part2Questions, null, 2)};
`;

  fs.writeFileSync("data/questions-ad-ch1-part1.js", content1, "utf8");
  fs.writeFileSync("data/questions-ad-ch1-part2.js", content2, "utf8");
  console.log("✅ Đã ghi thành công data/questions-ad-ch1-part1.js");
  console.log("✅ Đã ghi thành công data/questions-ad-ch1-part2.js");
} else {
  console.error("\n❌ Cần sửa các lỗi chiều dài phương án trước khi xuất file!");
  process.exit(1);
}
