const fs = require('fs');

// Load blacklisted 27 questions
const blacklist = JSON.parse(fs.readFileSync('./scratch/q27_result.json', 'utf8'));
const blacklistedQuestions = blacklist.map(b => b.question.trim().toLowerCase());

console.log('Blacklisted questions count:', blacklistedQuestions.length);

// Helper to check length diff
function checkOptionLengths(questions) {
  let maxDiff = 0;
  const violations = [];
  questions.forEach((q, i) => {
    const lengths = q.options.map(opt => opt.length);
    const minL = Math.min(...lengths);
    const maxL = Math.max(...lengths);
    const diff = maxL - minL;
    if (diff > maxDiff) maxDiff = diff;
    if (diff > 15) {
      violations.push({ index: i + 1, id: q.id, diff, lengths });
    }
  });
  return { maxDiff, violations };
}

// Helper to check overlap with blacklist
function checkBlacklistOverlap(questions) {
  const overlaps = [];
  questions.forEach((q, i) => {
    const qText = q.question.trim().toLowerCase();
    blacklistedQuestions.forEach(bText => {
      if (qText === bText || (qText.length > 20 && bText.includes(qText))) {
        overlaps.push({ index: i + 1, id: q.id, question: q.question, match: bText });
      }
    });
  });
  return overlaps;
}

// Write helper test
console.log('Validation helpers ready.');
