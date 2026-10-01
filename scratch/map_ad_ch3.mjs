import fs from 'fs';

const content = fs.readFileSync('data/ad-ch3.js', 'utf8');

const componentRegex = /(?:component|visualizer):\s*['"]([^'"]+)['"]/g;
const matches = [];
let match;
while ((match = componentRegex.exec(content)) !== null) {
  matches.push(match[1]);
}

const uniqueComponents = [...new Set(matches)];
console.log('Total component entries in ad-ch3.js:', matches.length);
console.log('Unique components count:', uniqueComponents.length);

const mapped = [];
for (const comp of uniqueComponents) {
  let file = `components/ad/${comp}.js`;
  if (!fs.existsSync(file)) {
    if (comp === 'AdChapter3HeroBanner') {
      file = `components/ad/Chapter3HeroBanner.js`;
    }
  }
  const exists = fs.existsSync(file);
  mapped.push({ name: comp, file, exists });
}

console.log(JSON.stringify(mapped, null, 2));
