import { part1Questions, writePart1File } from "./generate-ad-ch3-part1.mjs";
import { part2Questions, writePart2File } from "./generate-ad-ch3-part2.mjs";

console.log("=== KIỂM TRA TOÀN DIỆN 2 BỘ ĐỀ CHƯƠNG 3 PHÂN TÍCH THIẾT KẾ YÊU CẦU ===");

function verifyExamSet(questions, setName) {
  console.log(`\n--- Kiểm tra ${setName} (${questions.length} câu) ---`);
  let errors = 0;

  if (questions.length !== 40) {
    console.error(`[LỖI] Số lượng câu hỏi không đúng: ${questions.length} (kỳ vọng 40)`);
    errors++;
  }

  // Difficulty
  const diffCount = { easy: 0, medium: 0, hard: 0 };
  // Scope
  const scopeCount = { inside: 0, outside: 0 };
  // Question types
  const typeCount = {};

  questions.forEach((q, idx) => {
    diffCount[q.difficulty] = (diffCount[q.difficulty] || 0) + 1;
    scopeCount[q.type] = (scopeCount[q.type] || 0) + 1;
    typeCount[q.questionType] = (typeCount[q.questionType] || 0) + 1;

    // Check options count
    if (!q.options || q.options.length !== 4) {
      console.error(`[LỖI] Câu ${q.id} không có đúng 4 options!`);
      errors++;
    }

    // Check answer index
    if (typeof q.answer !== "number" || q.answer < 0 || q.answer > 3) {
      console.error(`[LỖI] Câu ${q.id} answer index không hợp lệ: ${q.answer}`);
      errors++;
    }

    // Check length delta
    const lengths = q.options.map(opt => opt.length);
    const maxL = Math.max(...lengths);
    const minL = Math.min(...lengths);
    const delta = maxL - minL;

    if (delta > 15) {
      console.error(`[LỖI DELTA L > 15] Câu ${q.id}: Delta = ${delta} (Min: ${minL}, Max: ${maxL})`);
      console.log(`  Question: ${q.question}`);
      q.options.forEach((opt, oIdx) => {
        console.log(`    [${oIdx}] (${opt.length} ký tự): "${opt}"`);
      });
      errors++;
    }
  });

  console.log(`Phân bố độ khó: Dễ=${diffCount.easy} (30%), TB=${diffCount.medium} (40%), Khó=${diffCount.hard} (30%)`);
  if (diffCount.easy !== 12 || diffCount.medium !== 16 || diffCount.hard !== 12) {
    console.error(`[LỖI TỶ LỆ ĐỘ KHÓ] Kỳ vọng 12 Dễ, 16 TB, 12 Khó!`);
    errors++;
  }

  console.log(`Phân bố phạm vi: Inside=${scopeCount.inside}, Outside=${scopeCount.outside}`);
  if (scopeCount.inside !== 36 || scopeCount.outside !== 4) {
    console.error(`[LỖI PHẠM VI] Kỳ vọng 36 Inside, 4 Outside!`);
    errors++;
  }

  console.log(`Phân bố dạng câu:`, typeCount);

  return errors;
}

const err1 = verifyExamSet(part1Questions, "Đề 1 (Part 1)");
const err2 = verifyExamSet(part2Questions, "Đề 2 (Part 2)");

// Check cross-duplication
console.log("\n--- Kiểm tra trùng lặp giữa 2 đề ---");
let dupCount = 0;
const qTexts1 = new Map();
part1Questions.forEach(q => {
  qTexts1.set(q.question.trim().toLowerCase(), q.id);
});

part2Questions.forEach(q => {
  const normalized = q.question.trim().toLowerCase();
  if (qTexts1.has(normalized)) {
    console.error(`[LỖI TRÙNG LẶP] Câu ${q.id} ở Đề 2 trùng với ${qTexts1.get(normalized)} ở Đề 1!`);
    console.error(`  Nội dung: ${q.question}`);
    dupCount++;
  }
});

if (dupCount === 0) {
  console.log("Tuyệt đối 0 câu hỏi trùng lặp giữa 2 đề (100% distinct)!");
} else {
  console.error(`Tìm thấy ${dupCount} câu trùng lặp!`);
}

if (err1 === 0 && err2 === 0 && dupCount === 0) {
  console.log("\n>>> TẤT CẢ 80 CÂU HỎI ĐỀU ĐẠT TIÊU CHUẨN 100%! BẮT ĐẦU GHI FILE...");
  writePart1File();
  writePart2File();
  console.log(">>> GHI FILE THÀNH CÔNG!");
} else {
  console.error(`\n>>> CÓ LỖI CẦN SỬA: Đề 1 (${err1} lỗi), Đề 2 (${err2} lỗi), Trùng lặp (${dupCount} lỗi)`);
  process.exit(1);
}
