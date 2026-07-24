import { lsdChuong2Trick1 } from "../data/questions-lsd-chuong-2-trick1.js";
import { lsdChuong2Trick2 } from "../data/questions-lsd-chuong-2-trick2.js";

console.log("=== QUY TRÌNH KIỂM THỬ TỰ ĐỘNG CÁC ĐỀ THI BẪY CHƯƠNG II LỊCH SỬ ĐẢNG ===");

const allSets = [
  { name: "Đề Bẫy 1 (Trick Set 1)", questions: lsdChuong2Trick1 },
  { name: "Đề Bẫy 2 (Trick Set 2)", questions: lsdChuong2Trick2 }
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

    // Rule 2: Check trickDetails
    if (!q.trickDetails || !q.trickDetails.whyTrapped || !q.trickDetails.trickWord || !q.trickDetails.citation || !q.trickDetails.tip) {
      console.error(`❌ [LỖI BẮT BUỘC BẪY] Câu ${idx + 1} (${q.id}): Thiếu thuộc tính trickDetails chuẩn!`);
      qPass = false;
    }

    if (qPass) {
      passCount++;
    } else {
      failCount++;
    }
  });
});

console.log("\n==================================================");
console.log(`TỔNG SỐ CÂU HỎI BẪY ĐÃ KIỂM TRA: ${totalQuestions}`);
console.log(`✅ SỐ CÂU ĐẠT CHUẨN (PASS): ${passCount}`);
console.log(`❌ SỐ CÂU LỖI (FAIL): ${failCount}`);

if (failCount === 0) {
  console.log("🎉 TẤT CẢ 100 CÂU HỎI BẪY CHƯƠNG II VƯỢT QUA 100% QUY TRÌNH KIỂM THỬ TỰ ĐỘNG!");
} else {
  process.exit(1);
}
