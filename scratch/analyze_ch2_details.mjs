import fs from 'fs';

const files = [
  'Chapter2HeroBanner',
  'PredictiveVsAdaptiveStudio',
  'ApproachSelectorDecisionTree',
  'SdlcCoreQuestionsRadar',
  'SdlcPhasesDeepDiveExplorer',
  'WhyModelBusinessFirstStudio',
  'BusinessModelingConceptsStudio',
  'ProcessVsBusinessUseCaseArena',
  'ProjectInitiationGatekeeperStudio',
  'FeasibilityThreeDimensionsStudio',
  'BusinessUseCaseVisualizerStudio',
  'ActivityDiagramSwimlaneStudio',
  'Chapter2MasterSummaryDashboard',
  'Chapter2KeyTermsHub',
  'DiagramSimDashboard'
];

for (const name of files) {
  const filePath = `components/${name}.js`;
  const code = fs.readFileSync(filePath, 'utf8');
  console.log(`\n================== [ ${name} ] ==================`);

  // Find grids with 4+ columns
  const lines = code.split('\n');
  lines.forEach((line, idx) => {
    if (/grid-cols-[4-9]|grid-cols-1[0-9]|lg:grid-cols-[4-9]|sm:grid-cols-[4-9]|md:grid-cols-[4-9]/.test(line)) {
      console.log(`Line ${idx + 1}: GRID -> ${line.trim()}`);
    }
    if (/\bmin-w-\[\d+px\]|\bw-\[\d+px\]/.test(line)) {
      console.log(`Line ${idx + 1}: FIXED WIDTH -> ${line.trim()}`);
    }
    if (/\bh-(48|52|56|60|64|72|80)\b/.test(line) && /card|card|flex|relative|flip/i.test(line)) {
      console.log(`Line ${idx + 1}: FIXED HEIGHT CARD -> ${line.trim()}`);
    }
    if (/\btruncate\b/.test(line)) {
      console.log(`Line ${idx + 1}: TRUNCATE -> ${line.trim()}`);
    }
  });
}
