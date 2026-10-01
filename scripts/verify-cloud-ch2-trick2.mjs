import { questionsCloudCh2Trick1 } from "../data/questions-cloud-ch2-trick1.js";
import { questionsCloudCh2Trick2 } from "../data/questions-cloud-ch2-trick2.js";

console.log("=== BẮT ĐẦU KIỂM THỬ XÁC MINH BỘ ĐỀ BẪY 2 CHƯƠNG 2 ===");

// 1. Kiểm tra số lượng
if (questionsCloudCh2Trick2.length !== 50) {
  throw new Error(`Số lượng câu hỏi không đúng: ${questionsCloudCh2Trick2.length} (kỳ vọng 50)`);
}
console.log("✅ 1. Số lượng câu hỏi: Đúng 50/50 câu.");

// 2. Kiểm tra định dạng ID
const idRegex = /^cloud-c2-d2-(00[1-9]|0[1-4][0-9]|050)$/;
const ids = new Set();
questionsCloudCh2Trick2.forEach((q, i) => {
  if (!idRegex.test(q.id)) {
    throw new Error(`ID câu hỏi không hợp lệ tại vị trí ${i}: ${q.id}`);
  }
  if (ids.has(q.id)) {
    throw new Error(`Trùng lặp ID câu hỏi: ${q.id}`);
  }
  ids.add(q.id);
});
console.log("✅ 2. Định dạng mã ID: Đúng 100% cloud-c2-d2-001 đến cloud-c2-d2-050.");

// 3. Kiểm tra độ lệch chiều dài phương án Delta L <= 15
let maxDeltaFound = 0;
questionsCloudCh2Trick2.forEach((q) => {
  const lengths = q.options.map(opt => opt.length);
  const minL = Math.min(...lengths);
  const maxL = Math.max(...lengths);
  const delta = maxL - minL;
  if (delta > maxDeltaFound) maxDeltaFound = delta;
  if (delta > 15) {
    throw new Error(`Câu ${q.id} vi phạm luật Delta L <= 15: delta = ${delta} (min=${minL}, max=${maxL})`);
  }
});
console.log(`✅ 3. Cơ chế chống đoán bừa: 100% câu hỏi đạt Delta L <= 15 ký tự (Độ lệch lớn nhất ghi nhận: ${maxDeltaFound} ký tự).`);

// 4. Kiểm tra trickDetails đầy đủ 4 trường
const requiredTrickFields = ["whyTrapped", "trickWord", "citation", "tip"];
questionsCloudCh2Trick2.forEach((q) => {
  if (!q.trickDetails) {
    throw new Error(`Câu ${q.id} thiếu đối tượng trickDetails`);
  }
  for (const field of requiredTrickFields) {
    if (!q.trickDetails[field] || typeof q.trickDetails[field] !== "string" || !q.trickDetails[field].trim()) {
      throw new Error(`Câu ${q.id} thiếu hoặc rỗng trường trickDetails.${field}`);
    }
  }
});
console.log("✅ 4. Thuộc tính trickDetails: 100% câu hỏi có đủ 4 trường (whyTrapped, trickWord, citation, tip).");

// 5. Kiểm tra trùng lặp với Đề bẫy 1
const set1Ids = new Set(questionsCloudCh2Trick1.map(q => q.id));
const set1Questions = new Set(questionsCloudCh2Trick1.map(q => q.question.trim().toLowerCase()));

questionsCloudCh2Trick2.forEach(q => {
  if (set1Ids.has(q.id)) {
    throw new Error(`Trùng lặp ID với Đề 1: ${q.id}`);
  }
  if (set1Questions.has(q.question.trim().toLowerCase())) {
    throw new Error(`Trùng lặp câu hỏi với Đề 1: ${q.question}`);
  }
});
console.log("✅ 5. Tính độc lập: 100% câu hỏi khác biệt hoàn toàn với Đề bẫy 1 (0 câu trùng).");

// 6. Kiểm tra phân bổ đáp án
const dist = { A: 0, B: 0, C: 0, D: 0 };
questionsCloudCh2Trick2.forEach(q => {
  if (typeof q.answer !== "number" || q.answer < 0 || q.answer > 3) {
    throw new Error(`Đáp án không hợp lệ tại câu ${q.id}: ${q.answer}`);
  }
  const letter = ["A", "B", "C", "D"][q.answer];
  dist[letter]++;
});
console.log(`✅ 6. Cân bằng đáp án phân bổ: ${dist.A}A - ${dist.B}B - ${dist.C}C - ${dist.D}D.`);

console.log("=== TẤT CẢ 6 HẠNG MỤC KIỂM THỬ XÁC MINH ĐỀ BẪY 2 CHƯƠNG 2 ĐỀU PASS 100%! ===");
