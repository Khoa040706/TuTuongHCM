import fs from 'fs';

const files = [
  'Chapter3HeroBanner',
  'InitiationActivitiesStepper',
  'UmlNotationInteractiveGuide',
  'InteractiveEventTableStudio',
  'EventDecompositionPipelineStepper',
  'ActorIdentificationWorkbench',
  'CommonMistakesDiagnosticArena',
  'UpPhasesPipelineVisualizer',
  'EventDrivenThinkingArena',
  'ThreeEventTypesDuelArena',
  'FourActorTypesRadarStudio',
  'UseCaseNamingConventionsTester'
];

for (const name of files) {
  const filePath = `components/ad/${name}.js`;
  const code = fs.readFileSync(filePath, 'utf8');
  console.log(`\n================== [ ${name} ] ==================`);

  const lines = code.split('\n');
  lines.forEach((line, idx) => {
    if (/(?:sm:|md:|lg:)?grid-cols-[5-9]|(?:sm:|md:|lg:)?grid-cols-1[0-1]/.test(line)) {
      console.log(`Line ${idx + 1}: GRID -> ${line.trim()}`);
    }
    if (/\btruncate\b|\bline-clamp-[1-2]\b/.test(line)) {
      console.log(`Line ${idx + 1}: CUT-OFF -> ${line.trim()}`);
    }
    if (/\bmin-w-\[\d+px\]|\bw-\[\d+px\]/.test(line)) {
      console.log(`Line ${idx + 1}: FIXED-WIDTH -> ${line.trim()}`);
    }
  });
}
