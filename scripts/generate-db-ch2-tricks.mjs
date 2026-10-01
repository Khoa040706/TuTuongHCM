import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { questionsTrick1 } from './generate-db-ch2-trick1.mjs';
import { questionsTrick2 } from './generate-db-ch2-trick2.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const fileContentTrick1 = `/* ============================================================
   NGÂN HÀNG CÂU HỎI BẪY: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG II: MÔ HÌNH DỮ LIỆU QUAN HỆ (RELATIONAL DATA MODEL) — BỘ ĐỀ BẪY 1
   SỐ LƯỢNG: 50 CÂU HỎI BẪY VẬN DỤNG CAO (100% HARD / BẪY TƯ DUY)
   MÃ BỘ ĐỀ: db-c2-t1-001 ĐẾN db-c2-t1-050
   CHUẨN KỸ THUẬT: DELTA L <= 15 CHARS, 100% TRICKDETAILS, CÂN BẰNG ĐÁP ÁN (13A, 13B, 12C, 12D)
   ============================================================ */

export const questionsDbCh2Trick1 = ${JSON.stringify(questionsTrick1, null, 2)};
`;

const fileContentTrick2 = `/* ============================================================
   NGÂN HÀNG CÂU HỎI BẪY: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG II: MÔ HÌNH DỮ LIỆU QUAN HỆ (RELATIONAL DATA MODEL) — BỘ ĐỀ BẪY 2
   SỐ LƯỢNG: 50 CÂU HỎI BẪY VẬN DỤNG CAO (100% HARD / BẪY TƯ DUY)
   MÃ BỘ ĐỀ: db-c2-t2-001 ĐẾN db-c2-t2-050
   CHUẨN KỸ THUẬT: DELTA L <= 15 CHARS, 100% TRICKDETAILS, CÂN BẰNG ĐÁP ÁN (12A, 12B, 13C, 13D)
   ============================================================ */

export const questionsDbCh2Trick2 = ${JSON.stringify(questionsTrick2, null, 2)};
`;

const dest1 = path.join(rootDir, 'data', 'questions-db-ch2-trick1.js');
const dest2 = path.join(rootDir, 'data', 'questions-db-ch2-trick2.js');

fs.writeFileSync(dest1, fileContentTrick1, 'utf8');
console.log(`[SUCCESS] Đã ghi ${questionsTrick1.length} câu hỏi vào: ${dest1}`);

fs.writeFileSync(dest2, fileContentTrick2, 'utf8');
console.log(`[SUCCESS] Đã ghi ${questionsTrick2.length} câu hỏi vào: ${dest2}`);
