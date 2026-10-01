import fs from 'fs';
import path from 'path';

// Let's gather all text properties from all database files
const dataFiles = fs.readdirSync('data').filter(f => f.startsWith('database') || f.startsWith('questions-db'));

const allMathExpressions = [];

function extractMath(obj, file, pathStr = '') {
  if (!obj) return;
  if (typeof obj === 'string') {
    // Check if string contains $, $$, or backslash commands
    if (obj.includes('$') || /\\\w+/.test(obj)) {
      allMathExpressions.push({ file, path: pathStr, text: obj });
    }
    return;
  }
  if (Array.isArray(obj)) {
    obj.forEach((item, idx) => extractMath(item, file, `${pathStr}[${idx}]`));
    return;
  }
  if (typeof obj === 'object') {
    for (const [key, val] of Object.entries(obj)) {
      extractMath(val, file, `${pathStr}.${key}`);
    }
  }
}

for (const f of dataFiles) {
  const content = fs.readFileSync(path.join('data', f), 'utf8');
  // quick parse or import
  try {
    const mod = await import(path.resolve('data', f));
    extractMath(mod, f);
  } catch (err) {
    // If import fails, scan string regex
    const matches = content.match(/\$[^$]+\$|\$\$[\s\S]+?\$\$/g) || [];
    for (const m of matches) {
      allMathExpressions.push({ file: f, path: 'regex', text: m });
    }
  }
}

console.log(`Found ${allMathExpressions.length} math/LaTeX strings across ${dataFiles.length} files.`);

// Now let's list unique LaTeX commands found inside these strings
const commands = new Set();
for (const item of allMathExpressions) {
  const matches = item.text.match(/\\[a-zA-Z]+/g) || [];
  for (const m of matches) {
    if (!['\\n', '\\t', '\\r', '\\nGO', '\\nUSE', '\\nCREATE', '\\nDROP', '\\nSELECT', '\\nFROM', '\\nWHERE'].includes(m)) {
      commands.add(m);
    }
  }
}

console.log('\nAll unique LaTeX commands across the entire database curriculum & questions:');
console.log(Array.from(commands).sort().join(', '));
