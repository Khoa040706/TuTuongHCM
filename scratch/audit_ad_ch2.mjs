import fs from 'fs';

const content = fs.readFileSync('data/ad-ch2.js', 'utf8');

const regex = /component:\s*['"]([^'"]+)['"]/g;
const matches = [];
let match;
while ((match = regex.exec(content)) !== null) {
  matches.push(match[1]);
}

const uniqueComponents = [...new Set(matches)];
console.log('Total component entries in ad-ch2.js:', matches.length);
console.log('Unique components in ad-ch2.js:', uniqueComponents);

for (const comp of uniqueComponents) {
  const compPath = `components/${comp}.js`;
  const exists = fs.existsSync(compPath);
  console.log(`- ${comp} -> ${compPath} (exists: ${exists})`);
}
