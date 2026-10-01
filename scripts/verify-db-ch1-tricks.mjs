import { questionsDbCh1Trick1 } from '../data/questions-db-ch1-trick1.js';
import { questionsDbCh1Trick2 } from '../data/questions-db-ch1-trick2.js';

// ========================================================================
// KỊCH BẢN KIỂM ĐỊNH TỰ ĐỘNG: 2 BỘ ĐỀ THI BẪY CHƯƠNG I CƠ SỞ DỮ LIỆU
// ========================================================================

function verifySet(questions, setName, expectedIdsPrefix, expectedAnswerDist) {
  console.log(`\n======================================================`);
  console.log(`KIỂM ĐỊNH: ${setName}`);
  console.log(`======================================================`);

  let errors = [];
  const idSet = new Set();
  const ansCounts = [0, 0, 0, 0];
  let maxDelta = 0;
  let hardCount = 0;
  let trickCount = 0;
  let fullTrickDetailsCount = 0;

  if (questions.length !== 50) {
    errors.push(`Số lượng câu hỏi không đúng 50 câu: hiện có ${questions.length}`);
  }

  questions.forEach((q, idx) => {
    const qNum = idx + 1;
    const expectedId = `${expectedIdsPrefix}-${String(qNum).padStart(3, '0')}`;

    // 1. Kiểm tra ID
    if (q.id !== expectedId) {
      errors.push(`[Câu ${qNum}] ID không đúng quy ước: '${q.id}' (kỳ vọng '${expectedId}')`);
    }
    if (idSet.has(q.id)) {
      errors.push(`[Câu ${qNum}] ID bị trùng lặp: '${q.id}'`);
    }
    idSet.add(q.id);

    // 2. Kiểm tra options
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      errors.push(`[Câu ${qNum}] Options không phải mảng 4 phần tử`);
    } else {
      const lengths = q.options.map(o => o.length);
      const minL = Math.min(...lengths);
      const maxL = Math.max(...lengths);
      const delta = maxL - minL;
      if (delta > maxDelta) maxDelta = delta;
      if (delta > 15) {
        errors.push(`[Câu ${qNum}] Delta L = ${delta} > 15 ký tự! Lengths: [${lengths.join(', ')}]`);
      }
    }

    // 3. Kiểm tra đáp án
    if (typeof q.answer !== 'number' || q.answer < 0 || q.answer > 3) {
      errors.push(`[Câu ${qNum}] Đáp án '${q.answer}' không hợp lệ (phải từ 0 đến 3)`);
    } else {
      ansCounts[q.answer]++;
    }

    // 4. Kiểm tra độ khó & isTrick
    if (q.difficulty === 'hard') hardCount++;
    else errors.push(`[Câu ${qNum}] Độ khó '${q.difficulty}' không phải 'hard'`);

    if (q.isTrick === true) trickCount++;
    else errors.push(`[Câu ${qNum}] isTrick không phải true`);

    // 5. Kiểm tra trickDetails
    if (!q.trickDetails || typeof q.trickDetails !== 'object') {
      errors.push(`[Câu ${qNum}] Thiếu thuộc tính trickDetails`);
    } else {
      const { whyTrapped, trickWord, citation, tip } = q.trickDetails;
      if (!whyTrapped || !trickWord || !citation || !tip) {
        errors.push(`[Câu ${qNum}] trickDetails thiếu 1 trong 4 trường bắt buộc`);
      } else {
        fullTrickDetailsCount++;
      }
    }

    // 6. Kiểm tra explanation
    if (!q.explanation || q.explanation.trim().length < 10) {
      errors.push(`[Câu ${qNum}] Giải thích quá ngắn hoặc rỗng`);
    }
  });

  // Kiểm tra phân bổ đáp án
  console.log(`- Tổng số câu hỏi: ${questions.length}/50`);
  console.log(`- Độ lệch chiều dài phương án tối đa (Max Delta L): ${maxDelta} ký tự (Chuẩn: <= 15)`);
  console.log(`- Số câu Hard (100%): ${hardCount}/50`);
  console.log(`- Số câu isTrick (100%): ${trickCount}/50`);
  console.log(`- Số câu có đủ 4 trường trickDetails (100%): ${fullTrickDetailsCount}/50`);
  console.log(`- Phân bổ đáp án [A, B, C, D]: [${ansCounts.join(', ')}] (Kỳ vọng: [${expectedAnswerDist.join(', ')}])`);

  let matchDist = ansCounts.every((c, i) => c === expectedAnswerDist[i]);
  if (!matchDist) {
    errors.push(`Phân bổ đáp án không khớp kỳ vọng: [${ansCounts.join(', ')}] vs [${expectedAnswerDist.join(', ')}]`);
  }

  if (errors.length === 0) {
    console.log(`=> KẾT QUẢ: ✅ ĐẠT 100% TIÊU CHUẨN CHẤT LƯỢNG!`);
    return true;
  } else {
    console.error(`=> KẾT QUẢ: ❌ CÓ ${errors.length} LỖI KỸ THUẬT:`);
    errors.forEach(e => console.error('   • ' + e));
    return false;
  }
}

const pass1 = verifySet(questionsDbCh1Trick1, 'BỘ ĐỀ BẪY 1 (db-c1-t1)', 'db-c1-t1', [13, 13, 12, 12]);
const pass2 = verifySet(questionsDbCh1Trick2, 'BỘ ĐỀ BẪY 2 (db-c1-t2)', 'db-c1-t2', [12, 12, 13, 13]);

console.log(`\n======================================================`);
console.log(`TỔNG KẾT TOÀN DIỆN 2 BỘ ĐỀ BẪY CHƯƠNG I:`);
console.log(`======================================================`);
console.log(`- Tổng số câu: ${questionsDbCh1Trick1.length + questionsDbCh1Trick2.length} câu`);
console.log(`- Đạt chuẩn Đề Bẫy 1: ${pass1 ? '✅ PASS' : '❌ FAIL'}`);
console.log(`- Đạt chuẩn Đề Bẫy 2: ${pass2 ? '✅ PASS' : '❌ FAIL'}`);
if (pass1 && pass2) {
  console.log(`\n🎉 CHÚC MỪNG: TOÀN BỘ 100 CÂU HỎI ĐỀU ĐẠT CHUẨN XUẤT SẮC!`);
} else {
  process.exit(1);
}
