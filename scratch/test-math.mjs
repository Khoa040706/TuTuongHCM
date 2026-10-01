import { databaseCh2Data } from '../data/database-ch2.js';
import fs from 'fs';

// Read ContentRenderer to extract formatMathText
const contentRendererSrc = fs.readFileSync('components/ContentRenderer.js', 'utf8');

// Find renderLatexFormula and formatMathText
const startFn = contentRendererSrc.indexOf('function renderLatexFormula');
const endFn = contentRendererSrc.indexOf('function ChapterHeader');
const fnCode = contentRendererSrc.substring(startFn, endFn);

const fullModule = fnCode + '\nexport { renderLatexFormula, formatMathText };';
fs.writeFileSync('scratch/temp-fns.mjs', fullModule, 'utf8');

const { formatMathText, renderLatexFormula } = await import('./temp-fns.mjs');

// Test on databaseCh2 line 577:
const part22b = databaseCh2Data.sections[1].subsections[1].parts[1]; // let's find the definition
let targetText = null;
for (const sec of databaseCh2Data.sections) {
  for (const sub of sec.subsections || []) {
    for (const part of sub.parts || []) {
      for (const item of part.content || []) {
        if (item.type === 'definition' && item.text && item.text.includes('\\pi_X')) {
          targetText = item.text;
          break;
        }
      }
    }
  }
}

console.log('Target Text Found:', targetText);
const output = formatMathText(targetText);
console.log('\n--- OUTPUT ---:\n', output);
