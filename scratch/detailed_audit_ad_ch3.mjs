import fs from 'fs';

const files = [
  'Chapter3HeroBanner',
  'UpPhasesPipelineVisualizer',
  'InitiationActivitiesStepper',
  'AdMicroQuizCard',
  'UmlNotationInteractiveGuide',
  'CourseRegistrationSystemStudio',
  'UseCaseDescriptionDualViewer',
  'CourseRegistrationScenarioRunner',
  'EventDrivenThinkingArena',
  'ThreeEventTypesDuelArena',
  'InteractiveEventTableStudio',
  'EventDecompositionPipelineStepper',
  'FourActorTypesRadarStudio',
  'ActorIdentificationWorkbench',
  'OneEventOneUseCaseStudio',
  'UseCaseNamingConventionsTester',
  'SystemBoundaryActorLinkerStudio',
  'UmlRelationshipTripleArena',
  'IncludeExtendExecutionSimulator',
  'OrganizedCourseRegistrationDiagramStudio',
  'CommonMistakesDiagnosticArena',
  'BaCognitivePipelineRunner',
  'Chapter3TerminologyMasterMatrix',
  'SystemAnalysisAuditChecklist',
  'OnePageMemoryMapVisualizer'
];

const results = [];

for (const name of files) {
  const filePath = `components/ad/${name}.js`;
  if (!fs.existsSync(filePath)) {
    results.push({ name, exists: false });
    continue;
  }

  const code = fs.readFileSync(filePath, 'utf8');
  const lines = code.split('\n');

  // Strip comments for clean check
  const cleanCode = code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

  const issues = [];

  // Check 1: Fixed wide widths or min-w >= 650px (excluding max-w)
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

  // Check 2: 5+ columns grid at mobile / sm / md / lg (laptop viewports)
  const laptopCrampedGridRegex = /(?<!(?:xl|2xl):)(?:(?:sm|md|lg):)?grid-cols-([5-9]|1[0-1])\b/g;
  while ((match = laptopCrampedGridRegex.exec(cleanCode)) !== null) {
    issues.push({
      type: 'LAPTOP_CRAMPED_GRID',
      detail: match[0]
    });
  }

  // Check 3: Fixed height cards
  const fixedHeightCardRegex = /\bh-(44|48|52|56|60|64|72)\b/g;
  const fixedHeights = [];
  while ((match = fixedHeightCardRegex.exec(cleanCode)) !== null) {
    fixedHeights.push(match[0]);
  }
  if (fixedHeights.length > 0 && /card|flashcard|matrix|flip|term/i.test(code)) {
    issues.push({
      type: 'FIXED_HEIGHT_CONTAINER',
      detail: [...new Set(fixedHeights)].join(', ')
    });
  }

  // Check 4: Truncate in cleanCode
  const truncateMatches = cleanCode.match(/\btruncate\b/g);
  if (truncateMatches) {
    issues.push({
      type: 'TRUNCATE_USAGE',
      detail: `${truncateMatches.length} occurrences of truncate`
    });
  }

  // Check 5: line-clamp in cleanCode
  const lineClampMatches = cleanCode.match(/\bline-clamp-(1|2)\b/g);
  if (lineClampMatches) {
    issues.push({
      type: 'LINE_CLAMP_USAGE',
      detail: [...new Set(lineClampMatches)].join(', ')
    });
  }

  // Check 6: SVG width > 700
  const svgWidthRegex = /<svg[^>]*width=["'](\d+)["']/g;
  while ((match = svgWidthRegex.exec(cleanCode)) !== null) {
    const w = parseInt(match[1], 10);
    if (w >= 700) {
      issues.push({
        type: 'WIDE_SVG',
        detail: `SVG width="${w}" >= 700px`
      });
    }
  }

  // Check 7: 4 columns at sm: or mobile without xl: (4 columns at sm=640 is ~140px/col)
  const sm4ColRegex = /\b(?:sm:)?grid-cols-4\b(?!\s+[^\n]*xl:grid-cols)/g;
  // We can check if lines have grid-cols-4 without responsive breakpoint
  lines.forEach((line, idx) => {
    if (/(?:sm:|md:|lg:)grid-cols-[4-9]/.test(line) || /grid-cols-[4-9]/.test(line)) {
      // log for deeper inspection
    }
  });

  results.push({
    name,
    exists: true,
    totalLines: lines.length,
    issues
  });
}

console.log(JSON.stringify(results, null, 2));
