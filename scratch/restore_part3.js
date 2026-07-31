const fs = require('fs');

const currentPart3Path = './data/questions-chuong-4-part3.js';
const rawText = fs.readFileSync(currentPart3Path, 'utf8');

const match = rawText.match(/export const outsidePart3 = (\[[\s\S]*\]);/);
if (match) {
  let allItems = eval(match[1]);
  // Filter only c4-out-001 to c4-out-024 (original 24 questions)
  let original24 = allItems.filter(q => {
    const num = parseInt(q.id.replace('c4-out-', ''), 10);
    return num <= 24;
  });
  console.log('Restored original count:', original24.length);

  const restoredContent = `/* ============================================================
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM CHƯƠNG IV - PHẦN 3 (CÂU HỎI MỞ RỘNG - OUTSIDE)
   ============================================================ */

export const outsidePart3 = ${JSON.stringify(original24, null, 2)};
`;
  fs.writeFileSync(currentPart3Path, restoredContent, 'utf8');
}
