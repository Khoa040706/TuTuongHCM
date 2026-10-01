import { databaseCh2Data } from '../data/database-ch2.js';

// Let's find line 229:
for (const sec of databaseCh2Data.sections) {
  for (const sub of sec.subsections || []) {
    for (const part of sub.parts || []) {
      for (const item of part.content || []) {
        if (item.text && item.text.includes('HOCBONG')) {
          console.log('In-memory string from databaseCh2Data:');
          console.log(JSON.stringify(item.text));
          for (let i = 0; i < item.text.length; i++) {
            if (item.text[i] === '\\') {
              console.log(`Backslash at index ${i}, followed by: "${item.text.slice(i, i + 8)}"`);
            }
          }
        }
      }
    }
  }
}
