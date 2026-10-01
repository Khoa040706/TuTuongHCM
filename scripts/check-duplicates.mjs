import { questionsAdCh1Part1 } from "../data/questions-ad-ch1-part1.js";
import { questionsAdCh1Part2 } from "../data/questions-ad-ch1-part2.js";

console.log("=== KIỂM TRA ĐỘ TRÙNG LẶP GIỮA ĐỀ 1 VÀ ĐỀ 2 ===");
console.log(`Đề 1: ${questionsAdCh1Part1.length} câu | Đề 2: ${questionsAdCh1Part2.length} câu`);

// 1. Kiểm tra ID trùng nhau
const ids1 = new Set(questionsAdCh1Part1.map(q => q.id));
const idDuplicates = questionsAdCh1Part2.filter(q => ids1.has(q.id));
console.log(`- Trùng ID: ${idDuplicates.length} câu`);

// 2. Kiểm tra câu hỏi trùng nguyên văn
const questions1Map = new Map();
questionsAdCh1Part1.forEach(q => questions1Map.set(q.question.trim().toLowerCase(), q.id));

let exactDupes = [];
questionsAdCh1Part2.forEach(q => {
  const norm = q.question.trim().toLowerCase();
  if (questions1Map.has(norm)) {
    exactDupes.push({ q2Id: q.id, q1Id: questions1Map.get(norm), text: q.question });
  }
});
console.log(`- Trùng 100% nội dung câu hỏi: ${exactDupes.length} câu`);

// 3. Kiểm tra độ tương đồng từ vựng & ý tưởng
function getWords(str) {
  return new Set(
    str
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .split(/\s+/)
      .filter(w => w.length > 2)
  );
}

let similarPairs = [];
for (const q1 of questionsAdCh1Part1) {
  const w1 = getWords(q1.question);
  for (const q2 of questionsAdCh1Part2) {
    const w2 = getWords(q2.question);
    const intersection = [...w1].filter(x => w2.has(x));
    const union = new Set([...w1, ...w2]);
    const jaccard = union.size > 0 ? intersection.length / union.size : 0;
    if (jaccard >= 0.35) {
      similarPairs.push({
        q1Id: q1.id,
        q2Id: q2.id,
        score: jaccard.toFixed(2),
        q1: q1.question,
        q2: q2.question,
        ans1: q1.options[q1.answer],
        ans2: q2.options[q2.answer]
      });
    }
  }
}

console.log(`- Cặp câu có độ tương đồng từ vựng >= 35%: ${similarPairs.length} cặp`);
similarPairs.sort((a, b) => b.score - a.score);
similarPairs.forEach((p, idx) => {
  console.log(`\n[Cặp ${idx + 1}] (Điểm trùng: ${p.score})`);
  console.log(`  Đề 1 (${p.q1Id}): "${p.q1}"`);
  console.log(`    -> Đáp án 1: "${p.ans1}"`);
  console.log(`  Đề 2 (${p.q2Id}): "${p.q2}"`);
  console.log(`    -> Đáp án 2: "${p.ans2}"`);
});
