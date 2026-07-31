const fs = require('fs');

const raw1 = fs.readFileSync('./data/questions-chuong-6-trick1.js', 'utf8');
const match1 = raw1.match(/export const trickSet1 = (\[[\s\S]*\]);/);
const trickSet1 = eval(match1[1]);

const raw2 = fs.readFileSync('./data/questions-chuong-6-trick2.js', 'utf8');
const match2 = raw2.match(/export const trickSet2 = (\[[\s\S]*\]);/);
const trickSet2 = eval(match2[1]);

const blacklist = JSON.parse(fs.readFileSync('./scratch/q100_excluded_c6.json', 'utf8'));

console.log(`=== KIỂM TRA CHUYÊN SÂU LỌC 100 CÂU CẤM CHƯƠNG VI ===`);
console.log(`1. Số lượng câu cấm trong tệp loại trừ: ${blacklist.length} câu.`);
console.log(`2. Số lượng câu Bẫy Đề 1 (Văn hóa): ${trickSet1.length} câu.`);
console.log(`3. Số lượng câu Bẫy Đề 2 (Đạo đức & Con người): ${trickSet2.length} câu.`);

const allTrickQuestions = [...trickSet1, ...trickSet2];

let exactMatches = 0;
let partialMatches = 0;
const matchDetails = [];

blacklist.forEach((b, bIdx) => {
  const bText = b.question.trim().toLowerCase();
  // Extract core keywords (words > 3 chars)
  const bWords = bText.replace(/[.,?:;!()"]/g, '').split(/\s+/).filter(w => w.length > 3);

  allTrickQuestions.forEach((t, tIdx) => {
    const tText = t.question.trim().toLowerCase();

    // 1. Exact match
    if (bText === tText) {
      exactMatches++;
      matchDetails.push({ type: 'EXACT', blackIdx: bIdx + 1, trickId: t.id, text: t.question });
    } else {
      // 2. High partial match check (if more than 80% of unique core words overlap)
      const tWords = new Set(tText.replace(/[.,?:;!()"]/g, '').split(/\s+/));
      let matchCount = 0;
      bWords.forEach(w => {
        if (tWords.has(w)) matchCount++;
      });
      const ratio = matchCount / bWords.length;
      if (ratio > 0.85 && bWords.length > 5) {
        partialMatches++;
        matchDetails.push({ type: 'HIGH_PARTIAL', ratio: (ratio * 100).toFixed(1) + '%', blackIdx: bIdx + 1, trickId: t.id, bText: b.question, tText: t.question });
      }
    }
  });
});

console.log(`\n=== KẾT QUẢ ĐỐI CHIẾU MÀNG LỌC ===`);
console.log(`Trùng lặp chính xác (Exact Matches): ${exactMatches} câu.`);
console.log(`Trùng lặp cao (High Partial Overlaps >85%): ${partialMatches} câu.`);

if (matchDetails.length > 0) {
  console.log('Chi tiết trùng lặp:', JSON.stringify(matchDetails, null, 2));
} else {
  console.log('XÁC NHẬN: 100% 100 CÂU BẪY KHÔNG TRÙNG BẤT KỲ CÂU NÀO TRONG 100 CÂU CẤM!');
}
