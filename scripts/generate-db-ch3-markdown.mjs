import fs from 'fs';
import { questionsDbCh3Part1 } from '../data/questions-db-ch3-part1.js';
import { questionsDbCh3Part2 } from '../data/questions-db-ch3-part2.js';

const optLabels = ['A', 'B', 'C', 'D'];

const sections = [
  { title: '📌 CHUYÊN ĐỀ 1: SƠ LƯỢC RDBMS, CHUẨN T-SQL & HỆ THỐNG KIỂU DỮ LIỆU (Câu 1 - 10)', start: 1, end: 10 },
  { title: '📌 CHUYÊN ĐỀ 2: ĐỊNH NGHĨA DDL, CẬP NHẬT DML & RÀNG BUỘC TOÀN VẸN (Câu 11 - 20)', start: 11, end: 20 },
  { title: '📌 CHUYÊN ĐỀ 3: TRUY VẤN DQL: SELECT, LỌC, GOM NHÓM & PHÉP JOIN (Câu 21 - 30)', start: 21, end: 30 },
  { title: '📌 CHUYÊN ĐỀ 4: TRUY VẤN LỒNG, KHUNG NHÌN (VIEW) & BÀI TẬP CSDL QLBANHANG (Câu 31 - 40)', start: 31, end: 40 }
];

function renderExam(title, desc, questions) {
  let text = `## ${title}\n\n`;
  text += `*${desc}*\n\n`;
  text += `---\n\n`;

  let currentSecIdx = 0;

  questions.forEach((q, idx) => {
    const num = idx + 1;
    if (currentSecIdx < sections.length && num === sections[currentSecIdx].start) {
      text += `### ${sections[currentSecIdx].title}\n\n`;
      currentSecIdx++;
    }

    const diffBadge = q.difficulty === 'easy' ? '🟢 DỄ (NHẬN BIẾT)' : q.difficulty === 'medium' ? '🟡 TRUNG BÌNH (THÔNG HIỂU)' : '🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)';

    text += `#### Câu ${num} (${q.id}) — [${diffBadge}]\n\n`;
    text += `**${q.question}**\n\n`;

    q.options.forEach((opt, oIdx) => {
      text += `- **${optLabels[oIdx]}.** ${opt}\n`;
    });

    const correctLetter = optLabels[q.answer];
    const correctText = q.options[q.answer];

    text += `\n> **Đáp án đúng:** **${correctLetter}** — *${correctText}*\n>\n`;
    text += `> **Giải thích chi tiết:** ${q.explanation}\n`;

    if (q.difficulty === 'hard' && q.trickDetails) {
      text += `>\n`;
      text += `> **Phân tích bẫy tư duy (Trick Details):**\n`;
      text += `> - ⚠️ **Vì sao dễ sập bẫy:** ${q.trickDetails.whyTrapped}\n`;
      text += `> - 🎯 **Từ khóa gài bẫy:** \`${q.trickDetails.trickWord}\`\n`;
      text += `> - 📖 **Dẫn chứng giáo trình:** *${q.trickDetails.citation}*\n`;
      text += `> - 💡 **Mẹo hóa giải:** ${q.trickDetails.tip}\n`;
    }

    text += `\n---\n\n`;
  });

  // Bảng tra cứu đáp án nhanh 4 cột x 10 hàng
  text += `### 📊 BẢNG ĐÁP ÁN NHANH — ${title.toUpperCase()}\n\n`;
  text += `| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |\n`;
  text += `|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n`;

  for (let r = 0; r < 10; r++) {
    const c1 = r + 1;
    const c2 = r + 11;
    const c3 = r + 21;
    const c4 = r + 31;
    text += `| **${c1}** | \`${optLabels[questions[c1 - 1].answer]}\` | **${c2}** | \`${optLabels[questions[c2 - 1].answer]}\` | **${c3}** | \`${optLabels[questions[c3 - 1].answer]}\` | **${c4}** | \`${optLabels[questions[c4 - 1].answer]}\` |\n`;
  }

  text += `\n\n`;
  return text;
}

let doc = `# TỔNG HỢP 2 BỘ ĐỀ THI TRẮC NGHIỆM CHUẨN MỰC
# MÔN HỌC: HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
## CHƯƠNG III: NGÔN NGỮ SQL (STRUCTURED QUERY LANGUAGE) - TRANSACT-SQL

> **Thông tin giáo trình:** Giáo trình Hệ Cơ Sở Dữ Liệu — Chương III: Ngôn ngữ SQL (T-SQL).
> **Quy mô:** 2 Bộ đề thi độc lập (Đề 1 & Đề 2), 40 câu hỏi trắc nghiệm chuẩn / đề.
> **Tổng số câu hỏi:** 80 câu hỏi học thuật chất lượng cao (db-c3-d1-001 đến db-c3-d2-040).
> **Phân bổ độ khó chuẩn mực (30% - 40% - 30%):**
> - 🟢 **Dễ (Nhận biết):** 12 câu / đề (30%)
> - 🟡 **Trung bình (Thông hiểu):** 16 câu / đề (40%)
> - 🔴 **Khó / Bẫy (Vận dụng cao):** 12 câu / đề (30%) — 100% có bẫy tư duy, trickDetails ({ whyTrapped, trickWord, citation, tip }).
> **Cân bằng đáp án:** Chính xác 10 A, 10 B, 10 C, 10 D (25% mỗi đáp án) trên từng đề.
> **Kiểm định kỹ thuật:** Độ lệch chiều dài phương án $\\Delta L = L_{max} - L_{min} \\le 15$ ký tự trên toàn bộ 80 câu.
> **Đa dạng dạng câu hỏi:** Chọn câu SAI, Điền khuyết (...), Chùm mệnh đề I-II-III, Truy vấn tương đương, Tình huống CSDL thực tế (8 bài tập QLBanHang), Khái niệm & Cú pháp chuẩn.

\n\n`;

doc += renderExam(
  'BỘ ĐỀ SỐ 1 (MÃ ĐỀ: db-c3-d1)',
  'Bộ đề kiểm tra toàn diện kiến thức Chương III: Sơ lược T-SQL & Kiểu dữ liệu, Cú pháp DDL & Ràng buộc toàn vẹn, DQL SELECT lọc và gom nhóm, Khung nhìn View & Bài tập QLBanHang.',
  questionsDbCh3Part1
);

doc += renderExam(
  'BỘ ĐỀ SỐ 2 (MÃ ĐỀ: db-c3-d2)',
  'Bộ đề kiểm tra chuyên sâu và nâng cao: Bẫy giá trị NULL trong hàm kết hợp & NOT IN, cơ chế bảo vệ WITH CHECK OPTION, so sánh DELETE vs TRUNCATE, thứ tự khóa ngoại và phân tích lỗi T-SQL.',
  questionsDbCh3Part2
);

fs.writeFileSync('tong-hop-2-de-thi-chuong-3-co-so-du-lieu.md', doc, 'utf-8');
console.log('✅ Đã xuất thành công file tong-hop-2-de-thi-chuong-3-co-so-du-lieu.md!');
