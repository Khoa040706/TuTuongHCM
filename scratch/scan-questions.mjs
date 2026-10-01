import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('data').filter(f => f.startsWith('questions-db'));

const latexRegex = /\\[a-zA-Z]+/g;

console.log('Scanning questions-db files:');
for (const file of files) {
  const content = fs.readFileSync(path.join('data', file), 'utf8');
  const matches = new Set();
  let m;
  while ((m = latexRegex.exec(content)) !== null) {
    if (!['\\n', '\\t', '\\r'].includes(m[0])) {
      matches.add(m[0]);
    }
  }
  if (matches.size > 0) {
    console.log(`\nFile: ${file}`);
    console.log('Found commands:', Array.from(matches).join(', '));
  }
}
