import { subjects } from "../lib/curriculum.js";
import { chapterRequiresQuiz } from "../lib/server/content-catalog.js";
import { selectQuestionPool } from "../lib/server/quiz-service.js";

console.log("=== KIỂM THỬ TÍCH HỢP BỘ ĐỀ AD CHAPTER 1 ===");

const adSubject = subjects["analysis-design"];
if (!adSubject) {
  console.error("❌ Không tìm thấy môn analysis-design trong curriculum!");
  process.exit(1);
}

const ch1Questions = adSubject.questionsMap?.["ad-ch1"];
if (!ch1Questions) {
  console.error("❌ Không tìm thấy questionsMap cho ad-ch1!");
  process.exit(1);
}

console.log("✅ questionsMap['ad-ch1'] tồn tại:");
console.log(`  - Inside questions: ${ch1Questions.inside?.length}`);
console.log(`  - Outside questions: ${ch1Questions.outside?.length}`);
console.log(`  - Set 1 questions: ${ch1Questions.sets?.[1]?.length}`);
console.log(`  - Set 2 questions: ${ch1Questions.sets?.[2]?.length}`);

// Test chapterRequiresQuiz
const requiresQuiz = chapterRequiresQuiz("analysis-design", "ad-ch1");
console.log(`✅ chapterRequiresQuiz('analysis-design', 'ad-ch1') = ${requiresQuiz}`);
if (!requiresQuiz) {
  console.error("❌ chapterRequiresQuiz trả về false!");
  process.exit(1);
}

// Test selectQuestionPool for de-1
const pool1 = selectQuestionPool({
  subjectId: "analysis-design",
  chapterId: "ad-ch1",
  examSetId: "de-1",
  isTrickMode: false
});
console.log(`✅ selectQuestionPool for 'de-1': ${pool1.length} câu hỏi (Dự kiến: 40)`);
if (pool1.length !== 40) {
  console.error("❌ Đề 1 không đủ 40 câu!");
  process.exit(1);
}

// Test selectQuestionPool for de-2
const pool2 = selectQuestionPool({
  subjectId: "analysis-design",
  chapterId: "ad-ch1",
  examSetId: "de-2",
  isTrickMode: false
});
console.log(`✅ selectQuestionPool for 'de-2': ${pool2.length} câu hỏi (Dự kiến: 40)`);
if (pool2.length !== 40) {
  console.error("❌ Đề 2 không đủ 40 câu!");
  process.exit(1);
}

// Test selectQuestionPool for auto
const poolAuto = selectQuestionPool({
  subjectId: "analysis-design",
  chapterId: "ad-ch1",
  examSetId: "auto",
  isTrickMode: false
});
console.log(`✅ selectQuestionPool for 'auto': ${poolAuto.length} câu hỏi (Dự kiến: 80)`);
if (poolAuto.length !== 80) {
  console.error("❌ Auto pool không đủ 80 câu!");
  process.exit(1);
}

console.log("\n🎉 TẤT CẢ CÁC BÀI KIỂM THỬ TÍCH HỢP ĐỀU THÀNH CÔNG RỰC RỠ!");
