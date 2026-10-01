import fs from "fs";
import path from "path";

const comps = [
  { name: "RequirementsIntroHeroBanner", file: "components/RequirementsIntroHeroBanner.js" },
  { name: "InformationSystemArchitectureStudio", file: "components/InformationSystemArchitectureStudio.js" },
  { name: "IsHierarchyAndDikwPyramid", file: "components/IsHierarchyAndDikwPyramid.js" },
  { name: "BaBridgeSimulator", file: "components/BaBridgeSimulator.js" },
  { name: "BaSdlcLifecycleRadar", file: "components/BaSdlcLifecycleRadar.js" },
  { name: "MethodologyComparisonArena", file: "components/MethodologyComparisonArena.js" },
  { name: "UmlDiagramMatrixStudio", file: "components/UmlDiagramMatrixStudio.js" },
  { name: "ElicitationTechniquesStudio", file: "components/ElicitationTechniquesStudio.js" },
  { name: "BaToolboxNexusVisualizer", file: "components/BaToolboxNexusVisualizer.js" },
  { name: "SdlcFivePhasesInteractiveStudio", file: "components/SdlcFivePhasesInteractiveStudio.js" },
  { name: "UnifiedProcessPhasesStudio", file: "components/UnifiedProcessPhasesStudio.js" },
  { name: "TraditionalVsUpBattleArena", file: "components/TraditionalVsUpBattleArena.js" },
  { name: "Chapter1MasterSummaryDashboard", file: "components/Chapter1MasterSummaryDashboard.js" },
  { name: "KeyTermsInteractiveHub", file: "components/KeyTermsInteractiveHub.js" },
  { name: "Chapter1RoadmapBridgeCard", file: "components/Chapter1RoadmapBridgeCard.js" }
];

// Content width on laptop screen (1280px-1440px viewport with sidebar navigation)
// Typically between 760px and 860px. Let's take 800px as benchmark.
const BENCHMARK_WIDTH = 800;

const auditReport = [];

for (const c of comps) {
  const content = fs.readFileSync(c.file, "utf8");
  const lines = content.split("\n");

  const report = {
    name: c.name,
    file: c.file,
    lineCount: lines.length,
    criticalBugs: [],
    highCrampingIssues: [],
    mediumIssues: [],
    status: "PASS"
  };

  lines.forEach((line, idx) => {
    const lineNum = idx + 1;

    // Check 1: grid-cols with 5 or 6 or 4 on small/medium/laptop breakpoints
    // sm:grid-cols-5 -> 800px / 5 = 160px (at 640px it's 128px)
    if (/sm:grid-cols-[4-6]/.test(line)) {
      const match = line.match(/sm:grid-cols-([4-6])/);
      report.highCrampingIssues.push({
        lineNum,
        type: "CRAMPED_SM_GRID",
        cols: match[1],
        detail: `Lưới ${match[1]} cột tại breakpoint 'sm:' (640px) khiến mỗi cột chỉ rộng ~${Math.round(640 / match[1])}px - gây co cụm, tràn chữ trên laptop/tablet.`,
        code: line.trim()
      });
    }

    if (/lg:grid-cols-[5-8]/.test(line)) {
      const match = line.match(/lg:grid-cols-([5-8])/);
      const estColWidth = Math.round(BENCHMARK_WIDTH / match[1]);
      report.highCrampingIssues.push({
        lineNum,
        type: "CRAMPED_LG_GRID",
        cols: match[1],
        detail: `Lưới ${match[1]} cột tại breakpoint 'lg:' (1024px) nhưng trong content container laptop (~800px) mỗi cột chỉ rộng ~${estColWidth}px - gây cắt chữ 'truncate' hoặc chèn ép các khối thẻ.`,
        code: line.trim()
      });
    }

    if (/lg:grid-cols-4/.test(line) && !line.includes("xl:grid-cols-4")) {
      const estColWidth = Math.round(BENCHMARK_WIDTH / 4);
      report.mediumIssues.push({
        lineNum,
        type: "TIGHT_4_COLS",
        detail: `Lưới 4 cột trên 'lg:' (~200px/cột trên laptop), các thẻ chứa nhiều thông tin có nguy cơ bị co hẹp.`,
        code: line.trim()
      });
    }

    // Check 2: Fixed heights with variable text that can overflow
    if (/\bh-56\b|\bh-48\b|\bh-64\b/.test(line) && line.includes("perspective")) {
      report.criticalBugs.push({
        lineNum,
        type: "FIXED_HEIGHT_TEXT_OVERFLOW",
        detail: `Thẻ flashcard có chiều cao cố định '${line.match(/h-\d+/)[0]}' nhưng chứa định nghĩa dài, khi cột bị co hẹp chữ sẽ tràn ra ngoài đáy thẻ.`,
        code: line.trim()
      });
    }

    // Check 3: Truncate on critical terminology/titles
    if (line.includes("truncate") && (line.includes("title") || line.includes("name") || line.includes("h3") || line.includes("h4"))) {
      report.mediumIssues.push({
        lineNum,
        type: "TITLE_TRUNCATION",
        detail: `Thuộc tính 'truncate' cắt cụt tiêu đề/thuật ngữ quan trọng của bài học khi chiều rộng cột hẹp.`,
        code: line.trim()
      });
    }

    // Check 4: Unbroken strings
    const tokens = line.split(/\s+/);
    tokens.forEach((tok) => {
      if (tok.length > 85 && !tok.startsWith("d=\"") && !tok.startsWith("data:") && !tok.includes("http") && !tok.includes("className") && !tok.includes("style")) {
        report.criticalBugs.push({
          lineNum,
          type: "UNBROKEN_LONG_STRING",
          detail: `Chuỗi dài ${tok.length} ký tự không có khoảng trắng có thể ép vỡ chiều ngang container.`,
          snippet: tok.slice(0, 50) + "..."
        });
      }
    });
  });

  if (report.criticalBugs.length > 0) {
    report.status = "CRITICAL_OVERFLOW";
  } else if (report.highCrampingIssues.length > 0) {
    report.status = "HIGH_CRAMPING";
  } else if (report.mediumIssues.length > 0) {
    report.status = "MODERATE_WARNING";
  }

  auditReport.push(report);
}

console.log("=== CHAPTER 1 AUDIT REPORT (ANALYSIS & DESIGN) ===");
console.log(`Total components audited: ${auditReport.length}`);

const criticalComps = auditReport.filter(r => r.status === "CRITICAL_OVERFLOW");
const highComps = auditReport.filter(r => r.status === "HIGH_CRAMPING");
const modComps = auditReport.filter(r => r.status === "MODERATE_WARNING");
const passComps = auditReport.filter(r => r.status === "PASS");

console.log(`\nCritical Overflow count: ${criticalComps.length}`);
console.log(`High Cramping count: ${highComps.length}`);
console.log(`Moderate Warning count: ${modComps.length}`);
console.log(`Clean / Pass count: ${passComps.length}`);

console.log("\n--- DETAILED SUMMARY ---");
auditReport.forEach(r => {
  console.log(`\n[${r.status}] ${r.name}`);
  if (r.criticalBugs.length > 0) {
    console.log("  CRITICAL:", r.criticalBugs);
  }
  if (r.highCrampingIssues.length > 0) {
    console.log("  HIGH CRAMPING:", r.highCrampingIssues);
  }
  if (r.mediumIssues.length > 0) {
    console.log("  MODERATE:", r.mediumIssues);
  }
});
