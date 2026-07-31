const fs = require('fs');

const q27 = JSON.parse(fs.readFileSync('./scratch/q27_result.json', 'utf8'));

const currentPart3Path = './data/questions-chuong-4-part3.js';
const rawText = fs.readFileSync(currentPart3Path, 'utf8');

// Extract JSON array using regex
const match = rawText.match(/export const outsidePart3 = (\[[\s\S]*\]);/);
let existingPart3 = [];
if (match) {
  existingPart3 = eval(match[1]);
}

console.log('Existing outsidePart3 count:', existingPart3.length);

const combined = [...existingPart3, ...q27];
console.log('Combined outsidePart3 count:', combined.length);

const newFileContent = `/* ============================================================
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM CHƯƠNG IV - PHẦN 3 (CÂU HỎI MỞ RỘNG - OUTSIDE)
   ============================================================ */

export const outsidePart3 = ${JSON.stringify(combined, null, 2)};
`;

fs.writeFileSync(currentPart3Path, newFileContent, 'utf8');
console.log('Successfully updated questions-chuong-4-part3.js!');
