const fs = require('fs');

const q6 = JSON.parse(fs.readFileSync('./scratch/q100_excluded_c6.json', 'utf8'));

console.log(`=== AUDIT CHUYÊN SÂU 100 CÂU CẤM CHƯƠNG VI ===\n`);

q6.forEach((q, idx) => {
  console.log(`STT ${idx + 1} (${q.id}): ${q.question}`);
  if (q.options && q.options.length > 0) {
    q.options.forEach((opt, optIdx) => {
      const char = String.fromCharCode(65 + optIdx);
      const isAns = (optIdx === q.answer) ? ' <--- [ĐÁP ÁN ĐANG CHỌN]' : '';
      console.log(`   ${char}. ${opt}${isAns}`);
    });
  } else {
    console.log(`   Đáp án chuẩn: ${q.answer}`);
  }
  console.log('');
});
