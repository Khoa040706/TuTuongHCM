import { questionsCloudCh3Trick1 } from "../data/questions-cloud-ch3-trick1.js";
import { questionsCloudCh3Trick2 } from "../data/questions-cloud-ch3-trick2.js";

console.log("=== KIỂM ĐỊNH BỘ ĐỀ BẪY 2 CHƯƠNG 3 ĐIỆN TOÁN ĐÁM MÂY ===");

let passed = true;

// 1. Kiểm tra số lượng
if (questionsCloudCh3Trick2.length !== 50) {
  console.error(`❌ Số lượng câu hỏi không đúng: ${questionsCloudCh3Trick2.length} (kỳ vọng 50)`);
  passed = false;
} else {
  console.log(`✅ Số lượng câu hỏi: 50/50`);
}

// 2. Kiểm tra ID format & tính liên tục
const idRegex = /^cloud-c3-d2-(00[1-9]|0[1-4][0-9]|050)$/;
const ids = new Set();
questionsCloudCh3Trick2.forEach((q, idx) => {
  const expectedNum = String(idx + 1).padStart(3, "0");
  const expectedId = `cloud-c3-d2-${expectedNum}`;
  if (!idRegex.test(q.id)) {
    console.error(`❌ Câu ${idx + 1}: ID không hợp lệ "${q.id}"`);
    passed = false;
  }
  if (q.id !== expectedId) {
    console.error(`❌ Câu ${idx + 1}: ID không liên tục (nhận được ${q.id}, kỳ vọng ${expectedId})`);
    passed = false;
  }
  if (ids.has(q.id)) {
    console.error(`❌ Trùng lặp ID: ${q.id}`);
    passed = false;
  }
  ids.add(q.id);
});
console.log(`✅ Định danh ID: 50 câu chuẩn quy chuẩn cloud-c3-d2-001 -> cloud-c3-d2-050`);

// 3. Kiểm tra độ lệch Delta L <= 15
let maxDeltaL = 0;
let deltaFailures = 0;
questionsCloudCh3Trick2.forEach((q, idx) => {
  const lens = q.options.map(o => o.length);
  const minL = Math.min(...lens);
  const maxL = Math.max(...lens);
  const delta = maxL - minL;
  if (delta > maxDeltaL) maxDeltaL = delta;
  if (delta > 15) {
    console.error(`❌ Câu ${idx + 1} (${q.id}): Delta L = ${delta} > 15 (min: ${minL}, max: ${maxL})`);
    deltaFailures++;
    passed = false;
  }
});
if (deltaFailures === 0) {
  console.log(`✅ Cân bằng chiều dài phương án: 100% câu đạt Delta L <= 15 (Max Delta L: ${maxDeltaL})`);
} else {
  console.error(`❌ Có ${deltaFailures} câu vi phạm Delta L > 15`);
}

// 4. Kiểm tra trickDetails
let trickFailures = 0;
questionsCloudCh3Trick2.forEach((q, idx) => {
  const td = q.trickDetails;
  if (!td || !td.whyTrapped || !td.trickWord || !td.citation || !td.tip) {
    console.error(`❌ Câu ${idx + 1} (${q.id}): Thiếu thuộc tính trickDetails bắt buộc!`);
    trickFailures++;
    passed = false;
  }
});
if (trickFailures === 0) {
  console.log(`✅ Thuộc tính trickDetails: 100% câu có đủ 4 trường whyTrapped, trickWord, citation, tip`);
} else {
  console.error(`❌ Có ${trickFailures} câu thiếu trickDetails`);
}

// 5. Kiểm tra trùng lặp với Đề bẫy 1
const d1Texts = new Set(questionsCloudCh3Trick1.map(q => q.question.trim().toLowerCase()));
let overlapCount = 0;
questionsCloudCh3Trick2.forEach((q, idx) => {
  const t = q.question.trim().toLowerCase();
  if (d1Texts.has(t)) {
    console.error(`❌ Câu ${idx + 1} (${q.id}) trùng nội dung câu hỏi với Đề bẫy 1: "${q.question}"`);
    overlapCount++;
    passed = false;
  }
});
if (overlapCount === 0) {
  console.log(`✅ Độ độc lập: 0 câu hỏi trùng lặp với Đề bẫy 1`);
} else {
  console.error(`❌ Có ${overlapCount} câu trùng lặp với Đề bẫy 1`);
}

// 6. Kiểm tra phân bổ đáp án
const dist = { A: 0, B: 0, C: 0, D: 0 };
questionsCloudCh3Trick2.forEach(q => {
  if (q.answer === 0) dist.A++;
  else if (q.answer === 1) dist.B++;
  else if (q.answer === 2) dist.C++;
  else if (q.answer === 3) dist.D++;
  else {
    console.error(`❌ answer không hợp lệ: ${q.answer} ở ${q.id}`);
    passed = false;
  }
});
console.log(`✅ Phân bổ đáp án: A=${dist.A}, B=${dist.B}, C=${dist.C}, D=${dist.D}`);

if (passed) {
  console.log("🎉 TẤT CẢ TIÊU CHÍ KIỂM ĐỊNH ĐÃ ĐẠT 100%!");
} else {
  process.exit(1);
}
