import fs from "fs";
import path from "path";

const components = [
  "SchemaCycleGraphVisualizer.js",
  "IntegrityTaxonomyMasterMap.js",
  "ExistenceDependencyInspector.js",
  "IntegrityConstraintsCyberHeroBanner.js",
  "ImpactMatrixInteractiveSimulator.js",
  "BusinessRuleToConstraintLab.js",
  "DatabaseChapter4SummaryDashboard.js"
];

console.log("=== AUDITING CHAPTER 4 REDESIGNED COMPONENTS ===");
let hasIssues = false;

for (const comp of components) {
  const filePath = path.join(process.cwd(), "components", comp);
  if (!fs.existsSync(filePath)) {
    console.error(`[ERROR] File not found: ${comp}`);
    hasIssues = true;
    continue;
  }
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  // Check for ultra long continuous strings without spaces (>100 chars)
  const longTokens = [];
  lines.forEach((line, idx) => {
    // ignore data urls or base64 or long comments if any
    const tokens = line.split(/\s+/);
    tokens.forEach((tok) => {
      if (tok.length > 90 && !tok.startsWith("d=\"") && !tok.startsWith("data:") && !tok.includes("http")) {
        longTokens.push({ line: idx + 1, len: tok.length, snippet: tok.slice(0, 50) + "..." });
      }
    });
  });

  // Check for problematic grid cols
  const smGridCols4 = lines.filter((l) => l.includes("sm:grid-cols-4"));
  const mdGridCols3 = lines.filter((l) => l.includes("md:grid-cols-3"));

  console.log(`\nChecked: ${comp}`);
  console.log(`- Total lines: ${lines.length}`);
  if (longTokens.length > 0) {
    console.warn(`  [WARN] Long non-breaking token (>90 chars):`, longTokens);
    hasIssues = true;
  } else {
    console.log(`  [OK] No overflow strings found.`);
  }

  if (smGridCols4.length > 0) {
    console.warn(`  [WARN] sm:grid-cols-4 still present:`, smGridCols4.length);
  }
}

if (!hasIssues) {
  console.log("\n>>> ALL CHAPTER 4 COMPONENTS AUDITED: 100% CLEAN OF OVERFLOW STRINGS! <<<");
} else {
  console.log("\n>>> ISSUES DETECTED! <<<");
}
