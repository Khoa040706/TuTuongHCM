import fs from 'fs';
import path from 'path';

const dataFiles = fs.readdirSync('data').filter(f => f.startsWith('database') || f.startsWith('questions-db'));

console.log('Checking for LaTeX commands outside $...$ or $$...$$');

for (const f of dataFiles) {
  const content = fs.readFileSync(path.join('data', f), 'utf8');
  
  // Remove all $$...$$ and $...$
  const stripped = content
    .replace(/\$\$[\s\S]*?\$\$/g, '')
    .replace(/\$[^\$\n]*?\$/g, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`\n]*?`/g, '');
    
  // Check if any LaTeX command remains (excluding \n, \t, \r, \", \', \`, \\)
  const matches = stripped.match(/\\[a-zA-Z]+/g) || [];
  const realCommands = matches.filter(m => !['\\n', '\\t', '\\r', '\\nGO', '\\nUSE', '\\nCREATE', '\\nDROP', '\\nSELECT', '\\nFROM', '\\nWHERE'].includes(m));
  
  if (realCommands.length > 0) {
    console.log(`\nFile: ${f}`);
    console.log('Commands outside $ blocks:', realCommands);
  }
}
