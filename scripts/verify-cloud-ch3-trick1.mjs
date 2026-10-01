import { questionsCloudCh3Trick1 } from "../data/questions-cloud-ch3-trick1.js";

console.log("=== BẮT ĐẦU KIỂM TRA ĐỀ BẪY CHƯƠNG 3 CLOUD COMPUTING (SaaS) ===");
console.log(`Tổng số câu hỏi: ${questionsCloudCh3Trick1.length}`);

if (questionsCloudCh3Trick1.length !== 50) {
  console.error(`❌ LỖI: Số lượng câu hỏi không phải 50 (hiện có: ${questionsCloudCh3Trick1.length})`);
  process.exit(1);
}

let deltaLErrors = 0;
let maxDeltaObserved = 0;
let trickDetailsErrors = 0;
let answerDistribution = { 0: 0, 1: 0, 2: 0, 3: 0 };

questionsCloudCh3Trick1.forEach((q, idx) => {
  const num = idx + 1;
  const idExpected = `cloud-c3-d1-${String(num).padStart(3, "0")}`;
  if (q.id !== idExpected) {
    console.error(`❌ [Câu ${num}] Sai ID: mong đợi ${idExpected}, nhận được ${q.id}`);
  }

  // Check options count
  if (!q.options || q.options.length !== 4) {
    console.error(`❌ [Câu ${num}] Không đủ 4 options!`);
  }

  // Check Delta L
  const lengths = q.options.map(opt => opt.length);
  const minL = Math.min(...lengths);
  const maxL = Math.max(...lengths);
  const diff = maxL - minL;
  if (diff > maxDeltaObserved) maxDeltaObserved = diff;

  if (diff > 15) {
    deltaLErrors++;
    console.error(`❌ [Câu ${num} - ${q.id}] Vi phạm Delta L <= 15: diff = ${diff} (min: ${minL}, max: ${maxL})`);
    q.options.forEach((opt, oIdx) => console.log(`   Opt ${oIdx} (${opt.length} chars): "${opt}"`));
  }

  // Check trickDetails
  const td = q.trickDetails;
  if (!td || !td.whyTrapped || !td.trickWord || !td.citation || !td.tip) {
    trickDetailsErrors++;
    console.error(`❌ [Câu ${num} - ${q.id}] Thiếu trường trong trickDetails!`);
  }

  // Answer distribution
  if (typeof q.answer === "number" && q.answer >= 0 && q.answer <= 3) {
    answerDistribution[q.answer]++;
  } else {
    console.error(`❌ [Câu ${num} - ${q.id}] Đáp án không hợp lệ: ${q.answer}`);
  }
});

console.log("\n--- KẾT QUẢ KIỂM ĐỊNH CHƯƠNG 3 ---");
console.log(`Lỗi Delta L: ${deltaLErrors}`);
console.log(`Độ lệch ký tự lớn nhất ghi nhận (Max Delta): ${maxDeltaObserved} chars`);
console.log(`Lỗi trickDetails: ${trickDetailsErrors}`);
console.log(`Phân bổ đáp án:`, answerDistribution);

if (deltaLErrors === 0 && trickDetailsErrors === 0 && questionsCloudCh3Trick1.length === 50) {
  console.log("✅ TẤT CẢ TIÊU CHÍ KỸ THUẬT ĐẠT 100%!");
} else {
  console.log("⚠️ CẦN TINH CHỈNH ĐỂ ĐẠT CHUẨN!");
  process.exit(1);
}
