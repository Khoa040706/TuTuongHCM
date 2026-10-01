import fs from 'fs';
import { getBalancedTrick1 } from './generate-db-ch1-trick1.mjs';
import { getBalancedTrick2 } from './generate-db-ch1-trick2.mjs';

// ========================================================================
// KỊCH BẢN ĐIỀU PHỐI VÀ XUẤT BẢN 2 BỘ ĐỀ THI BẪY: CHƯƠNG I CƠ SỞ DỮ LIỆU
// BỘ ĐỀ BẪY 1: 50 CÂU (db-c1-t1-001 -> 050) -> data/questions-db-ch1-trick1.js
// BỘ ĐỀ BẪY 2: 50 CÂU (db-c1-t2-001 -> 050) -> data/questions-db-ch1-trick2.js
// TỔNG CỘNG: 100 CÂU HỌC THUẬT 100% HARD, 100% TRICKDETAILS, DELTA L <= 15
// ========================================================================

const questionsDbCh1Trick1 = getBalancedTrick1();
const questionsDbCh1Trick2 = getBalancedTrick2();

console.log('=== THỐNG KÊ BỘ ĐỀ BẪY 1 ===');
console.log('Số lượng câu hỏi:', questionsDbCh1Trick1.length);
const ansCount1 = [0, 0, 0, 0];
questionsDbCh1Trick1.forEach(q => ansCount1[q.answer]++);
console.log('Phân bổ đáp án [A, B, C, D]:', ansCount1);

console.log('\n=== THỐNG KÊ BỘ ĐỀ BẪY 2 ===');
console.log('Số lượng câu hỏi:', questionsDbCh1Trick2.length);
const ansCount2 = [0, 0, 0, 0];
questionsDbCh1Trick2.forEach(q => ansCount2[q.answer]++);
console.log('Phân bổ đáp án [A, B, C, D]:', ansCount2);

console.log('\n=== TỔNG CỘNG 2 BỘ ĐỀ ===');
console.log('Tổng số câu:', questionsDbCh1Trick1.length + questionsDbCh1Trick2.length);
console.log('Tổng phân bổ đáp án [A, B, C, D]:', [
  ansCount1[0] + ansCount2[0],
  ansCount1[1] + ansCount2[1],
  ansCount1[2] + ansCount2[2],
  ansCount1[3] + ansCount2[3]
]);

// Xuất file data/questions-db-ch1-trick1.js
const headerTrick1 = `/* ============================================================
   NGÂN HÀNG CÂU HỎI BẪY: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG I: TỔNG QUAN VÀ GIỚI THIỆU HỆ CƠ SỞ DỮ LIỆU — BỘ ĐỀ BẪY 1
   SỐ LƯỢNG: 50 CÂU HỎI BẪY VẬN DỤNG CAO (100% HARD / BẪY TƯ DUY)
   MÃ BỘ ĐỀ: db-c1-t1-001 ĐẾN db-c1-t1-050
   CHUẨN KỸ THUẬT: DELTA L <= 15 CHARS, 100% TRICKDETAILS, CÂN BẰNG ĐÁP ÁN
   ============================================================ */

export const questionsDbCh1Trick1 = ${JSON.stringify(questionsDbCh1Trick1, null, 2)};
`;

fs.writeFileSync('data/questions-db-ch1-trick1.js', headerTrick1, 'utf-8');
console.log('\n✅ Đã ghi thành công: data/questions-db-ch1-trick1.js');

// Xuất file data/questions-db-ch1-trick2.js
const headerTrick2 = `/* ============================================================
   NGÂN HÀNG CÂU HỎI BẪY: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG I: TỔNG QUAN VÀ GIỚI THIỆU HỆ CƠ SỞ DỮ LIỆU — BỘ ĐỀ BẪY 2
   SỐ LƯỢNG: 50 CÂU HỎI BẪY VẬN DỤNG CAO (100% HARD / BẪY TƯ DUY)
   MÃ BỘ ĐỀ: db-c1-t2-001 ĐẾN db-c1-t2-050
   CHUẨN KỸ THUẬT: DELTA L <= 15 CHARS, 100% TRICKDETAILS, CÂN BẰNG ĐÁP ÁN
   ============================================================ */

export const questionsDbCh1Trick2 = ${JSON.stringify(questionsDbCh1Trick2, null, 2)};
`;

fs.writeFileSync('data/questions-db-ch1-trick2.js', headerTrick2, 'utf-8');
console.log('✅ Đã ghi thành công: data/questions-db-ch1-trick2.js');
