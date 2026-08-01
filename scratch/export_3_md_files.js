const fs = require('fs');
const path = require('path');

// Ensure docs directory exists
if (!fs.existsSync('./docs')) {
  fs.mkdirSync('./docs');
}

// -------------------------------------------------------------
// 1. CHƯƠNG IV (27 CÂU)
// -------------------------------------------------------------
const q4 = JSON.parse(fs.readFileSync('./scratch/q27_result.json', 'utf8'));

let md4 = `# TÀI LIỆU CÂU HỎI KHÔNG RA THI — CHƯƠNG IV
## Môn: Tư tưởng Hồ Chí Minh
### Chuyên đề: Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước Việt Nam
*Tổng số: 27 câu hỏi*

---

`;

q4.forEach((q, idx) => {
  md4 += `### Câu ${idx + 1}: ${q.question}\n`;
  if (q.options && q.options.length > 0) {
    q.options.forEach((opt, optIdx) => {
      const char = String.fromCharCode(65 + optIdx);
      const isCorrect = (optIdx === q.answer) ? ' **(Đáp án đúng)**' : '';
      md4 += `- **${char}.** ${opt}${isCorrect}\n`;
    });
  } else if (q.answerText) {
    md4 += `- **Đáp án:** ${q.answerText}\n`;
  }
  if (q.explanation) {
    md4 += `> **Giải thích:** ${q.explanation}\n`;
  }
  md4 += `\n---\n\n`;
});

fs.writeFileSync('./docs/tai-lieu-khong-ra-thi-chuong-4.md', md4, 'utf8');
console.log('Successfully created docs/tai-lieu-khong-ra-thi-chuong-4.md');


// -------------------------------------------------------------
// 2. CHƯƠNG V (40 CÂU)
// -------------------------------------------------------------
const q5 = JSON.parse(fs.readFileSync('./scratch/q40_excluded_c5.json', 'utf8'));

let md5 = `# TÀI LIỆU CÂU HỎI KHÔNG RA THI — CHƯƠNG V
## Môn: Tư tưởng Hồ Chí Minh
### Chuyên đề: Tư tưởng Hồ Chí Minh về Đại đoàn kết toàn dân tộc và Đoàn kết quốc tế
*Tổng số: 40 câu hỏi*

---

`;

q5.forEach((q, idx) => {
  md5 += `### Câu ${idx + 1}: ${q.question}\n`;
  if (q.options && q.options.length > 0) {
    q.options.forEach((opt, optIdx) => {
      const char = String.fromCharCode(65 + optIdx);
      const isCorrect = (optIdx === q.answer) ? ' **(Đáp án đúng)**' : '';
      md5 += `- **${char}.** ${opt}${isCorrect}\n`;
    });
  } else if (q.answerText) {
    md5 += `- **Đáp án:** ${q.answerText}\n`;
  }
  if (q.explanation) {
    md5 += `> **Giải thích:** ${q.explanation}\n`;
  }
  md5 += `\n---\n\n`;
});

fs.writeFileSync('./docs/tai-lieu-khong-ra-thi-chuong-5.md', md5, 'utf8');
console.log('Successfully created docs/tai-lieu-khong-ra-thi-chuong-5.md');


// -------------------------------------------------------------
// 3. CHƯƠNG VI (100 CÂU)
// -------------------------------------------------------------
const q6 = JSON.parse(fs.readFileSync('./scratch/q100_excluded_c6.json', 'utf8'));

let md6 = `# TÀI LIỆU CÂU HỎI KHÔNG RA THI — CHƯƠNG VI
## Môn: Tư tưởng Hồ Chí Minh
### Chuyên đề: Tư tưởng Hồ Chí Minh về Văn hóa, Đạo đức và Con người
*Tổng số: 100 câu hỏi*

---

`;

q6.forEach((q, idx) => {
  md6 += `### Câu ${idx + 1}: ${q.question}\n`;
  if (q.options && q.options.length > 0) {
    q.options.forEach((opt, optIdx) => {
      const char = String.fromCharCode(65 + optIdx);
      const isCorrect = (optIdx === q.answer) ? ' **(Đáp án đúng)**' : '';
      md6 += `- **${char}.** ${opt}${isCorrect}\n`;
    });
  } else if (q.answer) {
    md6 += `- **Đáp án chuẩn:** ${q.answer}\n`;
  }
  md6 += `\n---\n\n`;
});

fs.writeFileSync('./docs/tai-lieu-khong-ra-thi-chuong-6.md', md6, 'utf8');
console.log('Successfully created docs/tai-lieu-khong-ra-thi-chuong-6.md');
