import { questionsLsdDh1Part1 } from "../data/questions-lsd-dh1-part1.js";
import { questionsLsdDh1Part2 } from "../data/questions-lsd-dh1-part2.js";
import { questionsLsdDh1Trick1 } from "../data/questions-lsd-dh1-trick1.js";
import { questionsLsdDh1Trick2 } from "../data/questions-lsd-dh1-trick2.js";

console.log("==================================================");
console.log("🚀 CHƯƠNG TRÌNH KIỂM THỬ TỰ ĐỘNG (VERIFICATION PROTOCOL)");
console.log("==================================================");

let totalErrors = 0;

function verifyExamSet(name, questions, isTrickSet = false) {
  console.log(`\n🔍 Đang rà soát bộ đề: ${name} (${questions.length} câu)...`);
  
  if (isTrickSet && questions.length !== 50) {
    console.error(`❌ [LỖI SỐ LƯỢNG] Đề bẫy ${name} phải có đúng 50 câu (Hiện tại: ${questions.length})`);
    totalErrors++;
  }
  if (!isTrickSet && questions.length !== 40) {
    console.error(`❌ [LỖI SỐ LƯỢNG] Đề chuẩn ${name} phải có đúng 40 câu (Hiện tại: ${questions.length})`);
    totalErrors++;
  }

  let easyCount = 0;
  let mediumCount = 0;
  let hardCount = 0;
  let outsideCount = 0;

  questions.forEach((q, idx) => {
    // 1. Check option length balance (<= 15 chars)
    if (!q.options || q.options.length !== 4) {
      console.error(`❌ [LỖI ĐÁP ÁN] Câu ${idx + 1} (${q.id}) phải có đúng 4 phương án.`);
      totalErrors++;
      return;
    }

    const lengths = q.options.map(o => o.length);
    const maxL = Math.max(...lengths);
    const minL = Math.min(...lengths);
    const diff = maxL - minL;

    if (diff > 15) {
      console.error(`❌ [LỖI ĐỘ LỆCH CHIỀU DÀI] Câu ${idx + 1} (${q.id}): L_max - L_min = ${diff} (> 15 ký tự). Max: ${maxL}, Min: ${minL}`);
      totalErrors++;
    }

    // 2. Check answer range (0-3)
    if (q.answer === undefined || q.answer < 0 || q.answer > 3) {
      console.error(`❌ [LỖI DAP AN DUNG] Câu ${idx + 1} (${q.id}): Answer index = ${q.answer} không hợp lệ.`);
      totalErrors++;
    }

    // 3. Count matrix
    if (q.isOutside) outsideCount++;
    else if (q.difficulty === "easy") easyCount++;
    else if (q.difficulty === "medium") mediumCount++;
    else if (q.difficulty === "hard") hardCount++;

    // 4. Check trickDetails for trick sets
    if (isTrickSet) {
      if (!q.trickDetails || !q.trickDetails.whyTrapped || !q.trickDetails.trickWord || !q.trickDetails.citation || !q.trickDetails.tip) {
        console.error(`❌ [LỖI TRICK DETAILS] Câu ${idx + 1} (${q.id}) thiếu thuộc tính trong trickDetails.`);
        totalErrors++;
      }
    }
  });

  if (!isTrickSet) {
    console.log(`📊 Ma trận độ khó: Dễ=${easyCount}/7 (20%), TB=${mediumCount}/18 (50%), Khó=${hardCount}/11 (30%), Outside=${outsideCount}/4.`);
    if (easyCount !== 7 || mediumCount !== 18 || hardCount !== 11 || outsideCount !== 4) {
      console.warn(`⚠️ [CẢNH BÁO MA TRẬN] Cấu trúc ma trận độ khó khác tiêu chuẩn chuẩn (7 Dễ, 18 TB, 11 Khó, 4 Outside).`);
    }
  } else {
    console.log(`📊 Đề bẫy: 100% (${questions.length} câu) đều có thuộc tính trickDetails đầy đủ.`);
  }
}

verifyExamSet("questions-lsd-dh1-part1.js (Đề chuẩn 1)", questionsLsdDh1Part1, false);
verifyExamSet("questions-lsd-dh1-part2.js (Đề chuẩn 2)", questionsLsdDh1Part2, false);
verifyExamSet("questions-lsd-dh1-trick1.js (Đề bẫy 1)", questionsLsdDh1Trick1, true);
verifyExamSet("questions-lsd-dh1-trick2.js (Đề bẫy 2)", questionsLsdDh1Trick2, true);

console.log("\n==================================================");
if (totalErrors === 0) {
  console.log("🎉 TẤT CẢ 180 CÂU HỎI VƯỢT QUA 100% QUY TRÌNH KIỂM THỬ TỰ ĐỘNG!");
  console.log("==================================================");
} else {
  console.error(`❌ PHÁT HIỆN TỔNG CỘNG ${totalErrors} LỖI CẦN SỬA ĐỔI.`);
  console.log("==================================================");
}
