import { questionsDbCh1Part1 } from '../data/questions-db-ch1-part1.js';
import { questionsDbCh1Part2 } from '../data/questions-db-ch1-part2.js';

function verifySet(setName, questions, prefix) {
  console.log(`\n==============================================`);
  console.log(`=== BẮT ĐẦU KIỂM TRA BỘ ĐỀ: ${setName} ===`);
  console.log(`==============================================`);
  console.log(`Tổng số câu hỏi: ${questions.length}`);

  let deltaLErrors = 0;
  let maxDelta = 0;
  let trickErrors = 0;
  let idErrors = 0;
  const answerDist = { '0': 0, '1': 0, '2': 0, '3': 0 };
  const diffDist = { easy: 0, medium: 0, hard: 0 };

  questions.forEach((q, idx) => {
    const num = idx + 1;
    const expectedId = `${prefix}-${String(num).padStart(3, '0')}`;
    if (q.id !== expectedId) {
      console.error(`[LỖI ID] Câu ${num}: ID là ${q.id}, kỳ vọng là ${expectedId}`);
      idErrors++;
    }

    // Độ khó
    if (diffDist[q.difficulty] !== undefined) {
      diffDist[q.difficulty]++;
    } else {
      console.error(`[LỖI ĐỘ KHÓ] Câu ${num} (${q.id}) có độ khó không hợp lệ: ${q.difficulty}`);
    }

    // Phân bổ đáp án
    answerDist[q.answer] = (answerDist[q.answer] || 0) + 1;

    // Kiểm tra Delta L
    const lengths = q.options.map(opt => opt.length);
    const minL = Math.min(...lengths);
    const maxL = Math.max(...lengths);
    const delta = maxL - minL;
    if (delta > maxDelta) maxDelta = delta;

    if (delta > 15) {
      console.error(`[LỖI DELTA L > 15] Câu ${num} (${q.id}): Min = ${minL}, Max = ${maxL}, Delta = ${delta}`);
      q.options.forEach((opt, oIdx) => {
        console.error(`  - Opt ${oIdx} (${opt.length} chars): "${opt}"`);
      });
      deltaLErrors++;
    }

    // Kiểm tra câu Khó / Bẫy
    if (q.difficulty === 'hard') {
      if (!q.isTrick) {
        console.error(`[LỖI IS_TRICK] Câu ${num} (${q.id}) là câu khó nhưng thiếu isTrick: true`);
        trickErrors++;
      }
      if (!q.trickDetails) {
        console.error(`[LỖI TRICK DETAILS] Câu ${num} (${q.id}) thiếu trickDetails`);
        trickErrors++;
      } else {
        const { whyTrapped, trickWord, citation, tip } = q.trickDetails;
        if (!whyTrapped || !trickWord || !citation || !tip) {
          console.error(`[LỖI THIẾU TRƯỜNG TRICK DETAILS] Câu ${num} (${q.id}) thiếu 1 trong 4 trường:`, q.trickDetails);
          trickErrors++;
        }
      }
    }
  });

  console.log(`\n--- KẾT QUẢ KIỂM ĐỊNH ${setName} ---`);
  console.log(`Lỗi ID: ${idErrors}`);
  console.log(`Phân bổ độ khó:`, diffDist);
  console.log(`Tỷ lệ độ khó: Dễ = ${(diffDist.easy/questions.length*100).toFixed(1)}%, Trung bình = ${(diffDist.medium/questions.length*100).toFixed(1)}%, Khó = ${(diffDist.hard/questions.length*100).toFixed(1)}%`);
  console.log(`Lỗi Delta L (> 15 ký tự): ${deltaLErrors}`);
  console.log(`Độ lệch ký tự lớn nhất ghi nhận (Max Delta): ${maxDelta} chars`);
  console.log(`Lỗi trickDetails: ${trickErrors}`);
  console.log(`Phân bổ đáp án: { A (0): ${answerDist['0']}, B (1): ${answerDist['1']}, C (2): ${answerDist['2']}, D (3): ${answerDist['3']} }`);

  const passed = deltaLErrors === 0 && trickErrors === 0 && idErrors === 0 && diffDist.easy === 12 && diffDist.medium === 16 && diffDist.hard === 12;
  if (passed) {
    console.log(`✅ ${setName} ĐẠT 100% TIÊU CHUẨN KỸ THUẬT!`);
  } else {
    console.error(`❌ ${setName} CÓ LỖI CẦN KHẮC PHỤC!`);
  }
  return passed;
}

const pass1 = verifySet('CHƯƠNG 1 DATABASE - ĐỀ 1', questionsDbCh1Part1, 'db-c1-d1');
const pass2 = verifySet('CHƯƠNG 1 DATABASE - ĐỀ 2', questionsDbCh1Part2, 'db-c1-d2');

if (pass1 && pass2) {
  console.log(`\n🎉 TOÀN BỘ 2 BỘ ĐỀ (80 CÂU) ĐÃ VƯỢT QUA 100% KIỂM ĐỊNH KỸ THUẬT!`);
  process.exit(0);
} else {
  console.error(`\n❌ CÓ LỖI PHÁT SINH, VUI LÒNG KIỂM TRA LẠI!`);
  process.exit(1);
}
