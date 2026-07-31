const fs = require('fs');

const raw1 = fs.readFileSync('./data/questions-chuong-6-trick1.js', 'utf8');
const match1 = raw1.match(/export const trickSet1 = (\[[\s\S]*\]);/);
const trickSet1 = eval(match1[1]);

const raw2 = fs.readFileSync('./data/questions-chuong-6-trick2.js', 'utf8');
const match2 = raw2.match(/export const trickSet2 = (\[[\s\S]*\]);/);
const trickSet2 = eval(match2[1]);

const blacklist = JSON.parse(fs.readFileSync('./scratch/q100_excluded_c6.json', 'utf8'));
const blacklistedQuestions = blacklist.map(b => b.question.trim().toLowerCase());

console.log(`Loaded TrickSet1 C6: ${trickSet1.length} questions.`);
console.log(`Loaded TrickSet2 C6: ${trickSet2.length} questions.`);

let totalErrors = 0;

// 1. Length diff check (<= 15)
[...trickSet1, ...trickSet2].forEach((q, idx) => {
  const lengths = q.options.map(opt => opt.length);
  const minL = Math.min(...lengths);
  const maxL = Math.max(...lengths);
  const diff = maxL - minL;
  if (diff > 15) {
    console.error(`ERROR: Question ${q.id} has length diff ${diff} > 15 (lengths: ${lengths.join(', ')})`);
    totalErrors++;
  }

  // 2. Schema check (trickDetails)
  if (!q.trickDetails || !q.trickDetails.whyTrapped || !q.trickDetails.trickWord || !q.trickDetails.citation || !q.trickDetails.tip) {
    console.error(`ERROR: Question ${q.id} missing complete trickDetails!`);
    totalErrors++;
  }

  // 3. Blacklist overlap check
  const qText = q.question.trim().toLowerCase();
  blacklistedQuestions.forEach(bText => {
    if (qText === bText) {
      console.error(`ERROR: Question ${q.id} overlaps with blacklisted question!`);
      totalErrors++;
    }
  });
});

console.log(`Master Verification for Chapter VI completed. Total Errors Found: ${totalErrors}`);
