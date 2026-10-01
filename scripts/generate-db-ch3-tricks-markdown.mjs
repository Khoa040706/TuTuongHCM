import fs from 'fs';
import { questionsDbCh3Trick1 } from '../data/questions-db-ch3-trick1.js';
import { questionsDbCh3Trick2 } from '../data/questions-db-ch3-trick2.js';

// ========================================================================
// KỊCH BẢN XUẤT FILE MARKDOWN TỔNG HỢP 2 BỘ ĐỀ THI BẪY CHƯƠNG III
// MÔN: HỆ CƠ SỞ DỮ LIỆU — CHƯƠNG III: NGÔN NGỮ SQL (T-SQL)
// FILE: tong-hop-2-de-thi-bay-chuong-3-co-so-du-lieu.md
// ========================================================================

const optLetters = ['A', 'B', 'C', 'D'];

function generateQuickAnswerTable(questions, title) {
  let table = `### ${title}\n\n`;
  table += `| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |\n`;
  table += `| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |\n`;

  for (let r = 0; r < 10; r++) {
    let row = '';
    for (let c = 0; c < 5; c++) {
      let idx = c * 10 + r;
      if (idx < questions.length) {
        let qNum = idx + 1;
        let ans = optLetters[questions[idx].answer];
        row += `| **${qNum}** | \`${ans}\` `;
      } else {
        row += `| - | - `;
      }
    }
    row += `|\n`;
    table += row;
  }
  return table;
}

function generateQuestionsSection(questions, examName, examCode) {
  let md = `## ${examName} (${examCode})\n\n`;
  md += `> **Quy mô:** 50 câu hỏi bẫy vận dụng cao (100% Hard / Trick Questions)\n`;
  md += `> **Mã định danh:** \`${examCode}-001\` đến \`${examCode}-050\`\n\n`;

  questions.forEach((q, idx) => {
    const qNum = idx + 1;
    md += `### Câu ${qNum} [${q.id}]\n\n`;
    md += `${q.question}\n\n`;

    q.options.forEach((opt, oIdx) => {
      const letter = optLetters[oIdx];
      const isCorrect = oIdx === q.answer;
      md += `- **${letter}.** ${opt}${isCorrect ? '  *(Đáp án đúng)*' : ''}\n`;
    });

    md += `\n- **Đáp án chính xác:** \`${optLetters[q.answer]}\`\n`;
    md += `- **Giải thích học thuật:** ${q.explanation}\n`;

    if (q.trickDetails) {
      md += `- **Phân tích bẫy tư duy (\`trickDetails\`):**\n`;
      md += `  + ⚠️ *Vì sao dễ mắc bẫy (\`whyTrapped\`):* ${q.trickDetails.whyTrapped}\n`;
      md += `  + 🎯 *Từ khóa bẫy (\`trickWord\`):* \`${q.trickDetails.trickWord}\`\n`;
      md += `  + 📖 *Trích dẫn giáo trình (\`citation\`):* ${q.trickDetails.citation}\n`;
      md += `  + 💡 *Mẹo phản xạ nhanh (\`tip\`):* ${q.trickDetails.tip}\n`;
    }

    md += `\n---\n\n`;
  });

  return md;
}

let fullContent = `# TỔNG HỢP 2 BỘ ĐỀ THI BẪY CHUYÊN SÂU — CHƯƠNG III: NGÔN NGỮ SQL (STRUCTURED QUERY LANGUAGE / T-SQL)
## MÔN HỌC: HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)

---

### MỤC LỤC TỔNG QUAN

1. [BẢNG TRA CỨU ĐÁP ÁN NHANH ĐỀ BẪY 1 & 2](#bang-tra-cuu-dap-an-nhanh)
2. [NỘI DUNG CHI TIẾT ĐỀ BẪY 1 (db-c3-t1)](#de-thi-bay-so-1-db-c3-t1)
3. [NỘI DUNG CHI TIẾT ĐỀ BẪY 2 (db-c3-t2)](#de-thi-bay-so-2-db-c3-t2)

---

## <a name="bang-tra-cuu-dap-an-nhanh"></a> BẢNG TRA CỨU ĐÁP ÁN NHANH

${generateQuickAnswerTable(questionsDbCh3Trick1, 'BẢNG ĐÁP ÁN ĐỀ BẪY SỐ 1 (db-c3-t1-001 ĐẾN 050)')}

${generateQuickAnswerTable(questionsDbCh3Trick2, 'BẢNG ĐÁP ÁN ĐỀ BẪY SỐ 2 (db-c3-t2-001 ĐẾN 050)')}

---

${generateQuestionsSection(questionsDbCh3Trick1, '<a name="de-thi-bay-so-1-db-c3-t1"></a> ĐỀ THI BẪY SỐ 1', 'db-c3-t1')}

---

${generateQuestionsSection(questionsDbCh3Trick2, '<a name="de-thi-bay-so-2-db-c3-t2"></a> ĐỀ THI BẪY SỐ 2', 'db-c3-t2')}
`;

const outputFile = 'tong-hop-2-de-thi-bay-chuong-3-co-so-du-lieu.md';
fs.writeFileSync(outputFile, fullContent, 'utf-8');
console.log(`✅ Đã xuất thành công file tổng hợp Markdown: ${outputFile}`);
