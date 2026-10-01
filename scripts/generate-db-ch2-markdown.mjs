import fs from 'fs';
import { questionsDbCh2Part1 } from '../data/questions-db-ch2-part1.js';
import { questionsDbCh2Part2 } from '../data/questions-db-ch2-part2.js';

const optLabels = ['A', 'B', 'C', 'D'];

const sections = [
  { title: '📌 CHUYÊN ĐỀ 1: ĐỊNH NGHĨA CƠ BẢN & HỌ NHÀ KHÓA (Câu 1 - 10)', start: 1, end: 10 },
  { title: '📌 CHUYÊN ĐỀ 2: ĐẠI SỐ QUAN HỆ CƠ BẢN & TẬP HỢP TƯƠNG THÍCH (Câu 11 - 20)', start: 11, end: 20 },
  { title: '📌 CHUYÊN ĐỀ 3: PHÉP JOIN, PHÉP CHIA & TRUY VẤN BÀI TẬP CSDL (Câu 21 - 30)', start: 21, end: 30 },
  { title: '📌 CHUYÊN ĐỀ 4: QUY TRÌNH 7 BƯỚC CHUYỂN ĐỔI ERD SANG MÔ HÌNH QUAN HỆ (Câu 31 - 40)', start: 31, end: 40 }
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
## CHƯƠNG II: MÔ HÌNH DỮ LIỆU QUAN HỆ (RELATIONAL DATA MODEL)

> **Thông tin giáo trình:** Giáo trình Hệ Cơ Sở Dữ Liệu — Chương II: Mô hình quan hệ.
> **Quy mô:** 2 Bộ đề thi độc lập (Đề 1 & Đề 2), 40 câu hỏi trắc nghiệm chuẩn / đề.
> **Tổng số câu hỏi:** 80 câu hỏi học thuật chất lượng cao (db-c2-d1-001 đến db-c2-d2-040).
> **Phân bổ độ khó chuẩn mực (30% - 40% - 30%):**
> - 🟢 **Dễ (Nhận biết):** 12 câu / đề (30%)
> - 🟡 **Trung bình (Thông hiểu):** 16 câu / đề (40%)
> - 🔴 **Khó / Bẫy (Vận dụng cao):** 12 câu / đề (30%) — 100% có bẫy tư duy, trickDetails ({ whyTrapped, trickWord, citation, tip }).
> **Cân bằng đáp án:** Chính xác 10 A, 10 B, 10 C, 10 D (25% mỗi đáp án) trên từng đề.
> **Kiểm định kỹ thuật:** Độ lệch chiều dài phương án $\\Delta L = L_{max} - L_{min} \\le 15$ ký tự trên toàn bộ 80 câu.
> **Đa dạng dạng câu hỏi:** Chọn câu SAI, Điền khuyết (...), Chùm mệnh đề I-II-III, Biểu thức tương đương, Tình huống CSDL thực tế, Khái niệm chuẩn.

\n\n`;

doc += renderExam(
  'BỘ ĐỀ SỐ 1 (MÃ ĐỀ: db-c2-d1)',
  'Bộ đề kiểm tra toàn diện kiến thức Chương II: Lý thuyết tập hợp & Họ nhà Khóa, Đại số quan hệ cơ bản, Phép Join & Chia, Quy trình 7 bước chuyển đổi ERD.',
  questionsDbCh2Part1
);

doc += renderExam(
  'BỘ ĐỀ SỐ 2 (MÃ ĐỀ: db-c2-d2)',
  'Bộ đề kiểm tra nâng cao với tính tương đương đại số quan hệ, bài toán kinh điển mua tất cả mặt hàng, phân rã điều kiện AND/OR và bẫy khóa thực tế.',
  questionsDbCh2Part2
);

fs.writeFileSync('tong-hop-2-de-thi-chuong-2-co-so-du-lieu.md', doc, 'utf-8');
console.log('✅ Đã xuất thành công file tong-hop-2-de-thi-chuong-2-co-so-du-lieu.md!');
