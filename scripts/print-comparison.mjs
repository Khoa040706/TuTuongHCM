import { questionsAdCh1Part1 } from "../data/questions-ad-ch1-part1.js";
import { questionsAdCh1Part2 } from "../data/questions-ad-ch1-part2.js";

console.log("=== SO SÁNH ĐỐI CHIẾU CHI TIẾT TỪNG CÂU GIỮA ĐỀ 1 VÀ ĐỀ 2 ===");

for (let i = 0; i < 40; i++) {
  const q1 = questionsAdCh1Part1[i];
  const q2 = questionsAdCh1Part2[i];
  console.log(`\n------------------------------------------------------------`);
  console.log(`[VỊ TRÍ ${i + 1}]`);
  console.log(`ĐỀ 1 (${q1.id}) [${q1.difficulty} | ${q1.type} | ${q1.questionType}]:`);
  console.log(`  ❓ ${q1.question}`);
  console.log(`  🎯 Đáp án đúng: ${q1.options[q1.answer]}`);
  console.log(`ĐỀ 2 (${q2.id}) [${q2.difficulty} | ${q2.type} | ${q2.questionType}]:`);
  console.log(`  ❓ ${q2.question}`);
  console.log(`  🎯 Đáp án đúng: ${q2.options[q2.answer]}`);
}
