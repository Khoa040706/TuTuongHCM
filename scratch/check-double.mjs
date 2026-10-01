import { databaseCh2Data } from '../data/database-ch2.js';

let foundDouble = 0;
function checkDouble(obj, path = '') {
  if (!obj) return;
  if (typeof obj === 'string') {
    if (obj.includes('\\\\')) {
      console.log(`Found double backslash at ${path}:`, JSON.stringify(obj));
      foundDouble++;
    }
    return;
  }
  if (Array.isArray(obj)) {
    obj.forEach((item, idx) => checkDouble(item, `${path}[${idx}]`));
    return;
  }
  if (typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      checkDouble(v, `${path}.${k}`);
    }
  }
}

checkDouble(databaseCh2Data, 'databaseCh2Data');
console.log('Total strings with double backslash in memory:', foundDouble);
