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

for (const name of comps) {
  const file = path.join("components", name + ".js");
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split("\n");

  console.log(`\n========================================`);
  console.log(`COMPONENT: ${name} (${lines.length} lines)`);
  console.log(`========================================`);

  // Find all grid usages
  const grids = [];
  lines.forEach((l, idx) => {
    if (l.includes("grid-cols-")) {
      grids.push(`L${idx + 1}: ${l.trim()}`);
    }
  });
  if (grids.length > 0) {
    console.log(`Grids (${grids.length}):`);
    grids.forEach(g => console.log(`  ${g}`));
  }

  // Find all min-w / w-[...]
  const widths = [];
  lines.forEach((l, idx) => {
    if (/min-w-|w-\[/.test(l)) {
      widths.push(`L${idx + 1}: ${l.trim()}`);
    }
  });
  if (widths.length > 0) {
    console.log(`Widths (${widths.length}):`);
    widths.forEach(w => console.log(`  ${w}`));
  }

  // Find SVG usages
  const svgs = [];
  lines.forEach((l, idx) => {
    if (l.includes("<svg")) {
      svgs.push(`L${idx + 1}: ${l.trim()}`);
    }
  });
  if (svgs.length > 0) {
    console.log(`SVGs (${svgs.length}):`);
    svgs.forEach(s => console.log(`  ${s}`));
  }

  // Find Canvas / Three.js
  const canvas = [];
  lines.forEach((l, idx) => {
    if (l.includes("<canvas") || l.includes("Canvas") || l.includes("three")) {
      canvas.push(`L${idx + 1}: ${l.trim()}`);
    }
  });
  if (canvas.length > 0) {
    console.log(`Canvas/Three (${canvas.length}):`);
    canvas.forEach(c => console.log(`  ${c}`));
  }

  // Find flex without flex-wrap in headers / toolbars
  const flexNoWrap = [];
  lines.forEach((l, idx) => {
    if (l.includes("flex ") && !l.includes("flex-wrap") && !l.includes("flex-col") && !l.includes("items-center justify-between")) {
      // check if it has buttons or tabs inside
      if (l.includes("gap-") && (l.includes("rounded-") || l.includes("border"))) {
        flexNoWrap.push(`L${idx + 1}: ${l.trim()}`);
      }
    }
  });
  if (flexNoWrap.length > 0) {
    console.log(`Flex without flex-wrap candidates (${flexNoWrap.length}):`);
    flexNoWrap.slice(0, 5).forEach(f => console.log(`  ${f}`));
  }
}
