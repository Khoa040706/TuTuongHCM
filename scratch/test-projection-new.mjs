import { formatMathText, renderLatexFormula } from '../lib/mathRenderer.js';
import { databaseCh2Data } from '../data/database-ch2.js';

let text = null;
for (const sec of databaseCh2Data.sections) {
  for (const sub of sec.subsections || []) {
    for (const part of sub.parts || []) {
      for (const item of part.content || []) {
        if (item.type === 'definition' && item.text && item.text.includes('\\pi_X')) {
          text = item.text;
          break;
        }
      }
    }
  }
}

console.log('Original Text:\n', text);
console.log('\nRendered HTML:\n', formatMathText(text));
