import { databaseCh2Data } from '../data/database-ch2.js';
import fs from 'fs';

const { formatMathText } = await import('./temp-fns.mjs');

// find line 538
let line538 = null;
for (const sec of databaseCh2Data.sections) {
  for (const sub of sec.subsections || []) {
    for (const part of sub.parts || []) {
      for (const item of part.content || []) {
        if (item.text && item.text.includes('\\sigma')) {
          console.log('\n--- Found \\sigma item: ---');
          console.log('Original:', item.text);
          console.log('Formatted:', formatMathText(item.text));
        }
      }
    }
  }
}
