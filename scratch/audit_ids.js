import { oopData } from "../data/oop.js";
import { lessonsData } from "../data/lessons.js";

function auditData(data, label) {
  console.log(`=== Auditing ${label} ===`);
  const seenIds = new Set();
  
  if (!data.chapters) {
    console.log("No chapters");
    return;
  }
  
  data.chapters.forEach((ch, chIdx) => {
    if (!ch.id) console.error(`Chapter ${chIdx} missing ID`);
    else if (seenIds.has(ch.id)) console.error(`Duplicate ID: ${ch.id}`);
    else seenIds.add(ch.id);
    
    if (ch.sections) {
      ch.sections.forEach((sec, secIdx) => {
        if (!sec.id) console.error(`  Section ${secIdx} in chapter ${ch.id} missing ID`);
        else if (seenIds.has(sec.id)) console.error(`  Duplicate ID: ${sec.id}`);
        else seenIds.add(sec.id);
        
        if (sec.subsections) {
          sec.subsections.forEach((sub, subIdx) => {
            if (!sub.id) console.error(`    Subsection ${subIdx} in section ${sec.id} missing ID`);
            else if (seenIds.has(sub.id)) console.error(`    Duplicate ID: ${sub.id}`);
            else seenIds.add(sub.id);
            
            if (sub.parts) {
              sub.parts.forEach((part, partIdx) => {
                if (!part.id) console.error(`      Part ${partIdx} in subsection ${sub.id} missing ID`);
                else if (seenIds.has(part.id)) console.error(`      Duplicate ID: ${part.id}`);
                else seenIds.add(part.id);
              });
            }
          });
        }
      });
    }
  });
}

auditData(oopData, "OOP Data");
for (const subjectId in lessonsData) {
  auditData(lessonsData[subjectId], `Lessons Data [${subjectId}]`);
}
console.log("Audit complete.");
