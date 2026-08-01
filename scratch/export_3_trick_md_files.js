const fs = require('fs');

function loadTrickSet(filePath, varName) {
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = new RegExp(`export const ${varName} = (\\[[\\s\\S]*\\]);`);
  const match = content.match(regex);
  if (!match) throw new Error(`Could not parse ${varName} from ${filePath}`);
  return eval(match[1]);
}

function formatTrickSetMD(chapterNum, chapterTitle, set1, set2, topic1, topic2) {
  let md = `# BỘ ĐỀ BẪY VẬN DỤNG CAO — CHƯƠNG ${chapterNum}
## Môn: Tư tưởng Hồ Chí Minh
### Chuyên đề: ${chapterTitle}
*Tổng số: 100 câu hỏi bẫy tư duy Vận dụng cao (100% Hard)*

---

## 🛑 ĐỀ BẪY 1: ${topic1.toUpperCase()} (50 CÂU)

`;

  set1.forEach((q, idx) => {
    md += `### Câu ${idx + 1} [${q.id}]: ${q.question}\n`;
    q.options.forEach((opt, optIdx) => {
      const char = String.fromCharCode(65 + optIdx);
      const isCorrect = (optIdx === q.answer) ? ' **(Đáp án đúng)**' : '';
      md += `- **${char}.** ${opt}${isCorrect}\n`;
    });
    md += `\n> **Lời giải chi tiết:** ${q.explanation}\n`;
    if (q.trickDetails) {
      md += `> \n`;
      md += `> 🎯 **Vì sao dễ sập bẫy:** ${q.trickDetails.whyTrapped}\n`;
      md += `> ⚠️ **Từ khóa bẫy nhiễu:** ${q.trickDetails.trickWord}\n`;
      md += `> 📖 **Trích dẫn giáo trình:** ${q.trickDetails.citation}\n`;
      md += `> 💡 **Mẹo nhớ nhanh:** ${q.trickDetails.tip}\n`;
    }
    md += `\n---\n\n`;
  });

  md += `\n## 🛑 ĐỀ BẪY 2: ${topic2.toUpperCase()} (50 CÂU)\n\n`;

  set2.forEach((q, idx) => {
    md += `### Câu ${idx + 1} [${q.id}]: ${q.question}\n`;
    q.options.forEach((opt, optIdx) => {
      const char = String.fromCharCode(65 + optIdx);
      const isCorrect = (optIdx === q.answer) ? ' **(Đáp án đúng)**' : '';
      md += `- **${char}.** ${opt}${isCorrect}\n`;
    });
    md += `\n> **Lời giải chi tiết:** ${q.explanation}\n`;
    if (q.trickDetails) {
      md += `> \n`;
      md += `> 🎯 **Vì sao dễ sập bẫy:** ${q.trickDetails.whyTrapped}\n`;
      md += `> ⚠️ **Từ khóa bẫy nhiễu:** ${q.trickDetails.trickWord}\n`;
      md += `> 📖 **Trích dẫn giáo trình:** ${q.trickDetails.citation}\n`;
      md += `> 💡 **Mẹo nhớ nhanh:** ${q.trickDetails.tip}\n`;
    }
    md += `\n---\n\n`;
  });

  return md;
}

// --- CHƯƠNG IV ---
const c4_s1 = loadTrickSet('./data/questions-chuong-4-trick1.js', 'trickSet1');
const c4_s2 = loadTrickSet('./data/questions-chuong-4-trick2.js', 'trickSet2');
const md4 = formatTrickSetMD(
  'IV',
  'Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước Việt Nam',
  c4_s1, c4_s2,
  'Tư tưởng về Đảng Cộng sản Việt Nam (Xây dựng, Chỉnh đốn & Bản chất Đảng)',
  'Tư tưởng về Nhà nước của nhân dân, do nhân dân, vì nhân dân'
);
fs.writeFileSync('./BO_DE_BAY_CHUONG_4.md', md4, 'utf8');
fs.writeFileSync('./docs/bo-de-bay-chuong-4.md', md4, 'utf8');
console.log('Created BO_DE_BAY_CHUONG_4.md');

// --- CHƯƠNG V ---
const c5_s1 = loadTrickSet('./data/questions-chuong-5-trick1.js', 'trickSet1');
const c5_s2 = loadTrickSet('./data/questions-chuong-5-trick2.js', 'trickSet2');
const md5 = formatTrickSetMD(
  'V',
  'Tư tưởng Hồ Chí Minh về Đại đoàn kết toàn dân tộc và Đoàn kết quốc tế',
  c5_s1, c5_s2,
  'Tư tưởng về Đại đoàn kết toàn dân tộc',
  'Tư tưởng về Đoàn kết quốc tế'
);
fs.writeFileSync('./BO_DE_BAY_CHUONG_5.md', md5, 'utf8');
fs.writeFileSync('./docs/bo-de-bay-chuong-5.md', md5, 'utf8');
console.log('Created BO_DE_BAY_CHUONG_5.md');

// --- CHƯƠNG VI ---
const c6_s1 = loadTrickSet('./data/questions-chuong-6-trick1.js', 'trickSet1');
const c6_s2 = loadTrickSet('./data/questions-chuong-6-trick2.js', 'trickSet2');
const md6 = formatTrickSetMD(
  'VI',
  'Tư tưởng Hồ Chí Minh về Văn hóa, Đạo đức và Con người',
  c6_s1, c6_s2,
  'Tư tưởng Hồ Chí Minh về Văn hóa',
  'Tư tưởng Hồ Chí Minh về Đạo đức cách mạng & Xây dựng Con người'
);
fs.writeFileSync('./BO_DE_BAY_CHUONG_6.md', md6, 'utf8');
fs.writeFileSync('./docs/bo-de-bay-chuong-6.md', md6, 'utf8');
console.log('Created BO_DE_BAY_CHUONG_6.md');
