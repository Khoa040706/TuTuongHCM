import fs from 'fs';

const content = fs.readFileSync('data/ad-ch4.js', 'utf8');

// Match sections and components in order
const lines = content.split('\n');
const structure = [];

let currentSection = '';
let currentSub = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const secMatch = line.match(/sectionId\s*:\s*["']([^"']+)["']/);
  const titleMatch = line.match(/title\s*:\s*["']([^"']+)["']/);
  const compMatch = line.match(/component(?:Name)?\s*:\s*["']([^"']+)["']/);
  
  if (secMatch) {
    currentSection = secMatch[1];
  }
  if (line.includes('title:') && !compMatch) {
    if (titleMatch) currentSub = titleMatch[1];
  }
  if (compMatch) {
    structure.push({
      line: i + 1,
      section: currentSection,
      subTitle: currentSub,
      component: compMatch[1]
    });
  }
}

console.log('Total component usages:', structure.length);
console.log(JSON.stringify(structure, null, 2));
