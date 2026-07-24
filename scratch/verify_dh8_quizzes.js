import { questionsLsdDh8Part1 } from "../data/questions-lsd-dh8-part1.js";
import { questionsLsdDh8Part2 } from "../data/questions-lsd-dh8-part2.js";
import { questionsLsdDh8Trick1 } from "../data/questions-lsd-dh8-trick1.js";
import { questionsLsdDh8Trick2 } from "../data/questions-lsd-dh8-trick2.js";

console.log("=== QUY TRÌNH KIỂM THỬ TỰ ĐỘNG BỘ ĐỀ THI ĐẠI HỘI VIII (6/1996) ===");

const allSets = [
  { name: "Đề Chuẩn 1 (Part 1)", questions: questionsLsdDh8Part1, isTrick: false },
  { name: "Đề Chuẩn 2 (Part 2)", questions: questionsLsdDh8Part2, isTrick: false },
  { name: "Đề Bẫy 1 (Trick 1)", questions: questionsLsdDh8Trick1, isTrick: true },
  { name: "Đề Bẫy 2 (Trick 2)", questions: questionsLsdDh8Trick2, isTrick: true }
];

let totalQuestions = 0;
let passCount = 0;
let failCount = 0;

allSets.forEach((set) => {
  console.log(`\n--- Kiểm tra ${set.name} (Tổng số: ${set.questions.length} câu) ---`);
  totalQuestions += set.questions.length;

  set.questions.forEach((q, idx) => {
    let qPass = true;
    const lengths = q.options.map(o => o.length);
    const maxL = Math.max(...lengths);
    const minL = Math.min(...lengths);
    const diff = maxL - minL;

    // Rule 1: Option Length Balance <= 15 chars
    if (diff > 15) {
      console.error(`❌ [LỖI ĐỘ DÀI] Câu ${idx + 1} (${q.id}): L_max - L_min = ${diff} > 15 chars. (Max: ${maxL}, Min: ${minL})`);
      qPass = false;
    }

    // Rule 2: Trick details for trick sets
    if (set.isTrick) {
      if (!q.trickDetails || !q.trickDetails.whyTrapped || !q.trickDetails.trickWord || !q.trickDetails.citation || !q.trickDetails.tip) {
        console.error(`❌ [LỖI BẮT BUỘC BẪY] Câu ${idx + 1} (${q.id}): Thiếu thuộc tính trickDetails chuẩn!`);
        qPass = false;
      }
    }

    if (qPass) {
      passCount++;
    } else {
      failCount++;
    }
  });
});

console.log("\n==================================================");
console.log(`TỔNG SỐ CÂU HỎI ĐÃ KIỂM TRA: ${totalQuestions}`);
console.log(`✅ SỐ CÂU ĐẠT CHUẨN (PASS): ${passCount}`);
console.log(`❌ SỐ CÂU LỖI (FAIL): ${failCount}`);

if (failCount === 0) {
  console.log("🎉 TẤT CẢ 180 CÂU HỎI ĐẠI HỘI VIII VƯỢT QUA 100% QUY TRÌNH KIỂM THỬ TỰ ĐỘNG!");
} else {
  process.exit(1);
}
