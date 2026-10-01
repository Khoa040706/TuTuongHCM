import { databaseCh2Data } from '../data/database-ch2.js';

for (const sec of databaseCh2Data.sections) {
  for (const sub of sec.subsections || []) {
    for (const part of sub.parts || []) {
      for (const item of part.content || []) {
        if (item.type === 'definition' && item.text && item.text.includes('\\pi_X')) {
          console.log('JSON stringified item.text:');
          console.log(JSON.stringify(item.text));
        }
      }
    }
  }
}
