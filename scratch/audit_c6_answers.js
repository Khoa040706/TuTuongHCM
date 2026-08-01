const fs = require('fs');
const q6 = JSON.parse(fs.readFileSync('./scratch/q100_excluded_c6.json', 'utf8'));

console.log(`Auditing Chapter VI: ${q6.length} questions.`);

let missingAnswers = 0;
q6.forEach((q, idx) => {
  if (!q.answer) {
    console.log(`Question ${idx + 1} (${q.id}) missing answer!`);
    missingAnswers++;
  }
});

console.log(`Missing answers in C6: ${missingAnswers}`);
