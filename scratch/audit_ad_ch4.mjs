import fs from 'fs';
import path from 'path';

const components = [
  { name: 'AdChapter4HeroBanner', file: 'Chapter4HeroBanner.js' },
  { name: 'ProjectBaselineControlCockpit', file: 'ProjectBaselineControlCockpit.js' },
  { name: 'AdMicroQuizCard', file: 'AdMicroQuizCard.js' },
  { name: 'DiscoveryIterativeEngineRunner', file: 'DiscoveryIterativeEngineRunner.js' },
  { name: 'UpRequirementsEffortCurveStudio', file: 'UpRequirementsEffortCurveStudio.js' },
  { name: 'BehavioralVsStructuralDuelArena', file: 'BehavioralVsStructuralDuelArena.js' },
  { name: 'CourseRegistrationTocDiagramStudio', file: 'CourseRegistrationTocDiagramStudio.js' },
  { name: 'ThreeLevelsDescriptionTrioStudio', file: 'ThreeLevelsDescriptionTrioStudio.js' },
  { name: 'FullyDressedTemplateInteractiveStudio', file: 'FullyDressedTemplateInteractiveStudio.js' },
  { name: 'BusinessRulesTraceabilityWorkbench', file: 'BusinessRulesTraceabilityWorkbench.js' },
  { name: 'LibrarySystemDiagramStudio', file: 'LibrarySystemDiagramStudio.js' },
  { name: 'ReserveBookAuthoringLab', file: 'ReserveBookAuthoringLab.js' },
  { name: 'UseCaseAuthoringPitfallsArena', file: 'UseCaseAuthoringPitfallsArena.js' },
  { name: 'UmlRelationshipTripleArena', file: 'UmlRelationshipTripleArena.js' },
  { name: 'ExtensionPointExecutionSimulator', file: 'ExtensionPointExecutionSimulator.js' },
  { name: 'UseCasePackageArchitectureStudio', file: 'UseCasePackageArchitectureStudio.js' },
  { name: 'ExamTrapBusterRadar', file: 'ExamTrapBusterRadar.js' },
  { name: 'RequirementsDesignInteractiveChecklist', file: 'RequirementsDesignInteractiveChecklist.js' },
  { name: 'OneMinuteChapterSprintCards', file: 'OneMinuteChapterSprintCards.js' }
];

const results = [];

for (const comp of components) {
  const filePath = path.join('components', 'ad', comp.file);
  if (!fs.existsSync(filePath)) {
    results.push({ name: comp.name, file: comp.file, exists: false });
    continue;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  const issues = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;
    
    // Check 1: Cramped grids on mobile/tablet/laptop:
    // Look for grid-cols-[4-9] that don't have xl:/2xl: prefix
    const gridMatch = line.match(/(?<!(?:xl|2xl):)(?:(?:sm|md|lg):)?grid-cols-([4-9])/g);
    if (gridMatch) {
      issues.push({
        type: 'cramped-grid',
        line: lineNum,
        match: gridMatch.join(', '),
        text: line.trim()
      });
    }
    
    // Check 2: Fixed large widths (min-w-[>=640px], w-[>=640px])
    const widthMatch = line.match(/(?:min-)?w-\[(\d+)px\]/g);
    if (widthMatch) {
      for (const m of widthMatch) {
        const num = parseInt(m.match(/\d+/)[0], 10);
        if (num >= 640) {
          issues.push({
            type: 'fixed-wide-width',
            line: lineNum,
            match: m,
            text: line.trim()
          });
        }
      }
    }
    
    // Check 3: Truncate / line-clamp-1
    if (line.includes('line-clamp-1') || line.includes('truncate')) {
      issues.push({
        type: 'text-clipping',
        line: lineNum,
        match: line.includes('line-clamp-1') ? 'line-clamp-1' : 'truncate',
        text: line.trim()
      });
    }
  }
  
  results.push({
    name: comp.name,
    file: comp.file,
    exists: true,
    totalLines: lines.length,
    issues
  });
}

console.log(JSON.stringify(results, null, 2));
