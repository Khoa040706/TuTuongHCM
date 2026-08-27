const fs = require('fs');
const path = require('path');

const components = [
  'DsaDijkstraHeroBanner.js',
  'SsspSpecialCasesRoadmapStudio.js',
  'TreeSsspUniquePathWorkbench.js',
  'UnweightedBfsOnlyShowdown.js',
  'DagTopologicalOnePassStudio.js',
  'SsspSpecialCasesFlashcards.js',
  'DijkstraMotivationBridgeStudio.js',
  'DijkstraOriginalExecutionStudio.js',
  'DijkstraProofCorrectnessStudio.js',
  'DijkstraComplexityBreakdownStudio.js',
  'DijkstraNegativeEdgeTrapSandbox.js',
  'DijkstraCoreMechanismsFlashcards.js',
  'ModifiedDijkstraExecutionStudio.js',
  'ModifiedDijkstraComplexityStudio.js',
  'ModifiedDijkstraLimitsSandbox.js',
  'DijkstraJavaImplementationWorkbench.js',
  'SsspMasterSummaryMatrix.js',
  'DijkstraChapter15FinalExamFlashcards.js'
];

console.log('=== AUDIT B15 LIGHT THEME REPORT ===\n');

let allPassed = true;

components.forEach((compName, index) => {
  const filePath = path.join(__dirname, '..', 'components', compName);
  if (!fs.existsSync(filePath)) {
    console.log(`❌ #${index + 1} ${compName}: FILE NOT FOUND`);
    allPassed = false;
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Check 1: Root container has light background pattern (bg-white or bg-gradient...via-white)
  const hasLightRoot = content.includes('via-white') || content.includes('bg-white');
  
  // Check 2: Check if outer container has old dark gradient
  const hasOldDarkGradient = content.includes('from-slate-900 via-slate-950');

  if (!hasLightRoot || hasOldDarkGradient) {
    console.log(`❌ #${index + 1} ${compName}: FAILED (Light root: ${hasLightRoot}, Old dark gradient: ${hasOldDarkGradient})`);
    allPassed = false;
  } else {
    console.log(`✅ #${index + 1} ${compName}: PASSED (Royal Light Theme Verified)`);
  }
});

console.log('\n====================================');
if (allPassed) {
  console.log('🎉 100% 18/18 COMPONENTS ARE FULLY CONVERTED TO ROYAL LIGHT THEME!');
} else {
  console.log('⚠️ SOME COMPONENTS STILL REQUIRE ATTENTION.');
}
