import fs from 'fs';

const content = fs.readFileSync('data/ad-ch3.js', 'utf8');

// Match component: "..." or visualizer: "..."
const componentRegex = /(?:component|visualizer):\s*['"]([^'"]+)['"]/g;
const matches = [];
let match;
while ((match = componentRegex.exec(content)) !== null) {
  matches.push(match[1]);
}

const uniqueComponents = [...new Set(matches)];
console.log('Total component entries in ad-ch3.js:', matches.length);
console.log('Unique components in ad-ch3.js:', uniqueComponents);

for (const comp of uniqueComponents) {
  const compPath = `components/${comp}.js`;
  const exists = fs.existsSync(compPath);
  console.log(`- ${comp} -> ${compPath} (exists: ${exists})`);
}
