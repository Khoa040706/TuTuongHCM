import fs from 'fs';
import path from 'path';

function searchDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next' && entry.name !== '.git') {
        searchDir(fullPath);
      }
    } else if (/\.(js|jsx|ts|tsx)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // Match True not followed by or preceded by alphanumeric or underscore or quote
        // e.g., ": True", "= True", " True,", " True ", "(True)", "[True]"
        if (/(?<![\w'"])\bTrue\b(?![\w'"])/.test(line)) {
          // Check if it's in a string or comment
          console.log(`${fullPath}:${i + 1}: ${line.trim()}`);
        }
      }
    }
  }
}

searchDir('components');
searchDir('app');
searchDir('data');
