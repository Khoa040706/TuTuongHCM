import { questionsDbCh3Part1 } from '../data/questions-db-ch3-part1.js';
import { questionsDbCh3Part2 } from '../data/questions-db-ch3-part2.js';

function verifyExamSet(questions, setName, prefix) {
  console.log(`\n=================== KIỂM ĐỊNH ${setName} ===================`);
  let errors = [];

  // 1. Số lượng
  if (questions.length !== 40) {
    errors.push(`Số lượng câu hỏi không đúng 40: hiện có ${questions.length}`);
  }

  // 2. Phân bổ độ khó
  let countEasy = 0;
  let countMedium = 0;
  let countHard = 0;

  // 3. Phân bổ đáp án
  const answerDist = { 0: 0, 1: 0, 2: 0, 3: 0 };

  // 4. Kiểm tra từng câu
  questions.forEach((q, idx) => {
    const qNum = idx + 1;
    const expectedId = `${prefix}-${String(qNum).padStart(3, '0')}`;
    if (q.id !== expectedId) {
      errors.push(`Câu ${qNum}: ID sai (${q.id} !== ${expectedId})`);
    }

    if (!q.question || q.question.trim().length === 0) {
      errors.push(`Câu ${qNum}: Thiếu nội dung câu hỏi`);
    }

    if (!Array.isArray(q.options) || q.options.length !== 4) {
      errors.push(`Câu ${qNum}: Số lượng phương án không đúng 4`);
    } else {
      // Độ lệch chiều dài
      const lengths = q.options.map(o => (o || '').trim().length);
      const minL = Math.min(...lengths);
      const maxL = Math.max(...lengths);
      const delta = maxL - minL;
      if (delta > 15) {
        errors.push(`Câu ${qNum} (${q.id}): Delta L vượt ngưỡng 15 chars: min=${minL}, max=${maxL}, delta=${delta}\n  Options:\n    ` + q.options.map((o, i) => `[${i}] (${o.length}) "${o}"`).join('\n    '));
      }
    }

    if (q.answer < 0 || q.answer > 3) {
      errors.push(`Câu ${qNum}: Đáp án không hợp lệ (${q.answer})`);
    } else {
      answerDist[q.answer]++;
    }

    if (q.difficulty === 'easy') countEasy++;
    else if (q.difficulty === 'medium') countMedium++;
    else if (q.difficulty === 'hard') {
      countHard++;
      if (!q.isTrick) {
        errors.push(`Câu ${qNum} (${q.id}): Câu Khó nhưng thiếu isTrick: true`);
      }
      if (!q.trickDetails) {
        errors.push(`Câu ${qNum} (${q.id}): Câu Khó nhưng thiếu trickDetails`);
      } else {
        const { whyTrapped, trickWord, citation, tip } = q.trickDetails;
        if (!whyTrapped || !trickWord || !citation || !tip) {
          errors.push(`Câu ${qNum} (${q.id}): trickDetails thiếu các trường con cần thiết`);
        }
      }
    } else {
      errors.push(`Câu ${qNum}: Độ khó không hợp lệ (${q.difficulty})`);
    }
  });

  console.log(`- Tổng số câu: ${questions.length}/40`);
  console.log(`- Phân bổ độ khó: Dễ=${countEasy}/12 (30%), Trung bình=${countMedium}/16 (40%), Khó=${countHard}/12 (30%)`);
  if (countEasy !== 12 || countMedium !== 16 || countHard !== 12) {
    errors.push(`Phân bổ độ khó sai lệch: Dễ=${countEasy} (cần 12), TB=${countMedium} (cần 16), Khó=${countHard} (cần 12)`);
  }

  const ansLetters = ['A', 'B', 'C', 'D'];
  console.log(`- Phân bổ đáp án: ` + Object.entries(answerDist).map(([k, v]) => `${ansLetters[k]}=${v}/10`).join(', '));
  Object.entries(answerDist).forEach(([k, v]) => {
    if (v !== 10) {
      errors.push(`Phân bổ đáp án ${ansLetters[k]} là ${v} (cần đúng 10 câu - 25%)`);
    }
  });

  if (errors.length > 0) {
    console.error(`\n❌ CÓ ${errors.length} LỖI ĐƯỢC PHÁT HIỆN Ở ${setName}:`);
    errors.forEach(err => console.error(`  - ${err}`));
    return false;
  } else {
    console.log(`\n✅ ${setName}: 100% ĐẠT CHUẨN KIỂM ĐỊNH!`);
    return true;
  }
}

const p1Ok = verifyExamSet(questionsDbCh3Part1, "ĐỀ SỐ 1 (questionsDbCh3Part1)", "db-c3-d1");
const p2Ok = verifyExamSet(questionsDbCh3Part2, "ĐỀ SỐ 2 (questionsDbCh3Part2)", "db-c3-d2");

if (!p1Ok || !p2Ok) {
  console.error("\n❌ KIỂM ĐỊNH THẤT BẠI!");
  process.exit(1);
} else {
  console.log("\n🎉 TẤT CẢ 80 CÂU HỎI CHƯƠNG III ĐẠT TIÊU CHUẨN 100%!");
  process.exit(0);
}
