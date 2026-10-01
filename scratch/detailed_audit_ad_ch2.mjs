import fs from 'fs';

const components = [
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

const results = [];

for (const name of components) {
  const file = `components/${name}.js`;
  if (!fs.existsSync(file)) {
    results.push({ name, exists: false });
    continue;
  }

  const code = fs.readFileSync(file, 'utf8');
  const lines = code.split('\n');

  const issues = [];
  const cleanCode = code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

  // Check 1: Fixed wide widths or min-w > 700px (excluding max-w)
  const wideWidthRegex = /(?:^|[^\w-])(?:min-w|w)-\[(\d+)px\]/g;
  let match;
  while ((match = wideWidthRegex.exec(cleanCode)) !== null) {
    const px = parseInt(match[1], 10);
    if (px >= 650) {
      issues.push({
        type: 'WIDE_FIXED_WIDTH',
        detail: `width ${px}px >= 650px`
      });
    }
  }

  // Check 2: 5+ columns grids at mobile / sm / md / lg (EXCLUDING xl: and 2xl: and excluding grid-cols-12)
  const laptopCrampedGridRegex = /(?<!(?:xl|2xl):)(?:(?:sm|md|lg):)?grid-cols-([5-9]|1[0-1])\b/g;
  while ((match = laptopCrampedGridRegex.exec(cleanCode)) !== null) {
    issues.push({
      type: 'LAPTOP_CRAMPED_GRID',
      detail: match[0]
    });
  }

  // Check 3: Fixed height cards on definitions
  const fixedHeightCardRegex = /\bh-(48|52|56|60|64|72)\b/g;
  const fixedHeights = [];
  while ((match = fixedHeightCardRegex.exec(cleanCode)) !== null) {
    fixedHeights.push(match[0]);
  }
  if (fixedHeights.length > 0 && name.includes('KeyTerms')) {
    issues.push({
      type: 'FIXED_HEIGHT_CARD',
      detail: [...new Set(fixedHeights)].join(', ')
    });
  }

  // Check 4: Truncate in code
  const truncateMatches = cleanCode.match(/\btruncate\b/g);
  if (truncateMatches && !name.includes('DiagramSimDashboard')) {
    issues.push({
      type: 'TRUNCATE_USAGE',
      detail: `${truncateMatches.length} occurrences of truncate`
    });
  }

  results.push({
    name,
    exists: true,
    totalLines: lines.length,
    issues
  });
}

console.log(JSON.stringify(results, null, 2));
