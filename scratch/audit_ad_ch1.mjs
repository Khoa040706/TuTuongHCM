import fs from "fs";
import path from "path";

const comps = [
  "RequirementsIntroHeroBanner",
  "InformationSystemArchitectureStudio",
  "IsHierarchyAndDikwPyramid",
  "BaBridgeSimulator",
  "BaSdlcLifecycleRadar",
  "MethodologyComparisonArena",
  "UmlDiagramMatrixStudio",
  "ElicitationTechniquesStudio",
  "BaToolboxNexusVisualizer",
  "SdlcFivePhasesInteractiveStudio",
  "UnifiedProcessPhasesStudio",
  "TraditionalVsUpBattleArena",
  "Chapter1MasterSummaryDashboard",
  "KeyTermsInteractiveHub",
  "Chapter1RoadmapBridgeCard"
];

const results = [];

for (const name of comps) {
  const file = path.join("components", name + ".js");
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split("\n");

  const issues = [];

  // 1. Check fixed min-widths that exceed laptop content width (>700px)
  const minWRegex = /min-w-\[(\d+)px\]/g;
  let mw;
  while ((mw = minWRegex.exec(content)) !== null) {
    const val = parseInt(mw[1], 10);
    if (val >= 650) {
      issues.push({ type: "EXCESSIVE_MIN_WIDTH", val: `${val}px`, detail: `min-w-[${val}px] exceeds laptop content container width` });
    }
  }

  // 2. Check fixed widths that exceed 650px
  const wFixedRegex = /w-\[(\d+)px\]/g;
  let wf;
  while ((wf = wFixedRegex.exec(content)) !== null) {
    const val = parseInt(wf[1], 10);
    if (val >= 650) {
      issues.push({ type: "EXCESSIVE_FIXED_WIDTH", val: `${val}px`, detail: `w-[${val}px] exceeds laptop container width` });
    }
  }

  // 3. Check for heavy grids on mobile/laptop:
  // e.g. sm:grid-cols-4, sm:grid-cols-5, sm:grid-cols-6, md:grid-cols-4, md:grid-cols-5, md:grid-cols-6, grid-cols-4 without breakpoint
  lines.forEach((line, idx) => {
    if (/grid-cols-[4-9]/.test(line) && !line.includes("lg:grid-cols-") && !line.includes("xl:grid-cols-") && !line.includes("2xl:grid-cols-")) {
      // Check if it's sm: or md: or unconditional
      const match = line.match(/(?:sm:|md:|)(?:grid-cols-[4-9])/);
      if (match) {
        issues.push({ type: "CRAMPED_OR_OVERFLOW_GRID", line: idx + 1, snippet: match[0], code: line.trim() });
      }
    }

    // 4. Check for long continuous strings without spaces (>80 chars)
    const tokens = line.split(/\s+/);
    tokens.forEach((tok) => {
      if (tok.length > 80 && !tok.startsWith("d=\"") && !tok.startsWith("data:") && !tok.includes("http") && !tok.includes("className")) {
        issues.push({ type: "LONG_UNBROKEN_STRING", line: idx + 1, len: tok.length, snippet: tok.slice(0, 45) + "..." });
      }
    });

    // 5. Check for table without overflow-x-auto parent
    if (line.includes("<table") && !content.slice(Math.max(0, content.indexOf(line) - 250), content.indexOf(line)).includes("overflow-x-auto")) {
      issues.push({ type: "TABLE_NO_OVERFLOW_SCROLL", line: idx + 1, detail: "<table> not wrapped in overflow-x-auto" });
    }

    // 6. Check for SVG with fixed large width
    if (line.includes("<svg") && /width=["'](\d+)["']/.test(line)) {
      const match = line.match(/width=["'](\d+)["']/);
      if (match && parseInt(match[1], 10) > 650) {
        issues.push({ type: "SVG_FIXED_LARGE_WIDTH", line: idx + 1, val: match[1], detail: `SVG width=${match[1]} exceeds laptop width` });
      }
    }
  });

  results.push({ name, issues, lineCount: lines.length });
}

console.log(JSON.stringify(results, null, 2));
