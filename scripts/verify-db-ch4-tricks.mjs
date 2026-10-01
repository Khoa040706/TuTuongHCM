import { questionsDbCh4Trick1 } from '../data/questions-db-ch4-trick1.js';
import { questionsDbCh4Trick2 } from '../data/questions-db-ch4-trick2.js';

console.log('====================================================');
console.log('KIỂM ĐỊNH TỰ ĐỘNG BỘ ĐỀ BẪY CHƯƠNG IV: HỆ CSDL');
console.log('CHỦ ĐỀ: RÀNG BUỘC TOÀN VẸN (INTEGRITY CONSTRAINTS)');
console.log('====================================================\n');

let totalErrors = 0;

function verifySet(questions, setName, expectedPrefix, expectedDist) {
  console.log(`--- Đang kiểm định: ${setName} (${questions.length} câu) ---`);
  
  if (questions.length !== 50) {
    console.error(`[ERROR] ${setName} không đúng 50 câu (hiện có: ${questions.length})`);
    totalErrors++;
  }

  const seenIds = new Set();
  const dist = [0, 0, 0, 0];
  let maxDelta = 0;

  questions.forEach((q, idx) => {
    const num = String(idx + 1).padStart(3, '0');
    const expectedId = `${expectedPrefix}-${num}`;

    // 1. Kiểm tra ID
    if (q.id !== expectedId) {
      console.error(`[ERROR] Sai ID tại câu ${idx + 1}: kỳ vọng '${expectedId}', nhận '${q.id}'`);
      totalErrors++;
    }
    if (seenIds.has(q.id)) {
      console.error(`[ERROR] Trùng lặp ID: '${q.id}'`);
      totalErrors++;
    }
    seenIds.add(q.id);

    // 2. Kiểm tra options
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`[ERROR] ${q.id}: options phải có đúng 4 lựa chọn`);
      totalErrors++;
    } else {
      const lengths = q.options.map(o => o.length);
      const minL = Math.min(...lengths);
      const maxL = Math.max(...lengths);
      const delta = maxL - minL;
      if (delta > maxDelta) maxDelta = delta;
      if (delta > 15) {
        console.error(`[ERROR] ${q.id}: Độ lệch chiều dài Delta L = ${delta} > 15 ký tự! Options: [${lengths.join(', ')}]`);
        totalErrors++;
      }
    }

    // 3. Kiểm tra answer
    if (typeof q.answer !== 'number' || q.answer < 0 || q.answer > 3) {
      console.error(`[ERROR] ${q.id}: answer không hợp lệ (${q.answer})`);
      totalErrors++;
    } else {
      dist[q.answer]++;
    }

    // 4. Kiểm tra difficulty
    if (q.difficulty !== 'hard') {
      console.error(`[ERROR] ${q.id}: difficulty phải là 'hard' (hiện tại: '${q.difficulty}')`);
      totalErrors++;
    }

    // 5. Kiểm tra isTrick
    if (q.isTrick !== true) {
      console.error(`[ERROR] ${q.id}: isTrick phải là true`);
      totalErrors++;
    }

    // 6. Kiểm tra trickDetails
    if (!q.trickDetails || typeof q.trickDetails !== 'object') {
      console.error(`[ERROR] ${q.id}: thiếu đối tượng trickDetails`);
      totalErrors++;
    } else {
      const reqFields = ['whyTrapped', 'trickWord', 'citation', 'tip'];
      reqFields.forEach(f => {
        if (!q.trickDetails[f] || typeof q.trickDetails[f] !== 'string' || q.trickDetails[f].trim() === '') {
          console.error(`[ERROR] ${q.id}: thiếu hoặc rỗng trường trickDetails.${f}`);
          totalErrors++;
        }
      });
    }

    // 7. Kiểm tra explanation
    if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim() === '') {
      console.error(`[ERROR] ${q.id}: thiếu hoặc rỗng explanation`);
      totalErrors++;
    }
  });

  console.log(`[PASS] Số lượng: ${questions.length}/50 câu`);
  console.log(`[PASS] Max Delta L: ${maxDelta} ký tự (chuẩn <= 15)`);
  console.log(`[PASS] Phân bổ đáp án: [A: ${dist[0]}, B: ${dist[1]}, C: ${dist[2]}, D: ${dist[3]}]`);
  
  // So sánh với phân bổ kỳ vọng
  if (expectedDist) {
    const isMatch = dist.every((cnt, i) => cnt === expectedDist[i]);
    if (isMatch) {
      console.log(`[PASS] Phân bổ đáp án khớp 100% với mục tiêu [${expectedDist.join(', ')}]\n`);
    } else {
      console.error(`[ERROR] Phân bổ đáp án sai lệch! Kỳ vọng: [${expectedDist.join(', ')}], Thực tế: [${dist.join(', ')}]\n`);
      totalErrors++;
    }
  }

  return dist;
}

const dist1 = verifySet(questionsDbCh4Trick1, 'Đề Bẫy 1 (Trick 1)', 'db-c4-t1', [13, 13, 12, 12]);
const dist2 = verifySet(questionsDbCh4Trick2, 'Đề Bẫy 2 (Trick 2)', 'db-c4-t2', [12, 12, 13, 13]);

// Tổng kết 2 đề
const totalDist = [
  dist1[0] + dist2[0],
  dist1[1] + dist2[1],
  dist1[2] + dist2[2],
  dist1[3] + dist2[3]
];

console.log('--- TỔNG KẾT TOÀN BỘ 2 BỘ ĐỀ BẪY CHƯƠNG IV (100 CÂU) ---');
console.log(`Tổng số câu hỏi: ${questionsDbCh4Trick1.length + questionsDbCh4Trick2.length} câu`);
console.log(`Tổng phân bổ đáp án: [A: ${totalDist[0]}, B: ${totalDist[1]}, C: ${totalDist[2]}, D: ${totalDist[3]}]`);

if (totalDist[0] === 25 && totalDist[1] === 25 && totalDist[2] === 25 && totalDist[3] === 25) {
  console.log('🏆 [XUẤT SẮC] Cân bằng đáp án tuyệt đối: 25 A, 25 B, 25 C, 25 D (25% mỗi lựa chọn)!');
} else {
  console.error('[ERROR] Tổng 2 đề không cân bằng 25-25-25-25!');
  totalErrors++;
}

console.log('====================================================');
if (totalErrors === 0) {
  console.log('🎉 TẤT CẢ CÁC BÀI KIỂM ĐỊNH ĐÃ VƯỢT QUA 100% (0 LỖI)!');
  process.exit(0);
} else {
  console.error(`❌ PHÁT HIỆN ${totalErrors} LỖI CẦN KHẮC PHỤC!`);
  process.exit(1);
}
