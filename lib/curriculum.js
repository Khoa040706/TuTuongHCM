/**
 * Curriculum Adapter
 * Ghép nối dữ liệu môn Cloud Computing mới với dữ liệu gốc một cách an toàn
 * Tuyệt đối không chỉnh sửa các tệp tin đã tồn tại trong data/
 */

import { subjects as originalSubjects } from "../data/index";
import { lessonsData as originalLessonsData, findSubsectionContent as originalFindSubsection } from "../data/lessons";

import { cloudComputingChapter1 } from "../data/cloud-computing-chapter-1";
import { cloudComputingChapter2 } from "../data/cloud-computing-chapter-2";
import { cloudComputingChapter3 } from "../data/cloud-computing-chapter-3";
import { cloudComputingChapter4 } from "../data/cloud-computing-chapter-4";
import { cloudComputingChapter5 } from "../data/cloud-computing-chapter-5";
import { cloudComputingChapter6 } from "../data/cloud-computing-chapter-6";
import { cloudComputingChapter7 } from "../data/cloud-computing-chapter-7";
import { cloudGlossary } from "../data/cloud-computing-glossary";
import { cloudFlashcards } from "../data/cloud-computing-flashcards";

// 7 Chapters for Cloud Computing
export const cloudChapters = [
  cloudComputingChapter1,
  cloudComputingChapter2,
  cloudComputingChapter3,
  cloudComputingChapter4,
  cloudComputingChapter5,
  cloudComputingChapter6,
  cloudComputingChapter7
];

export { cloudGlossary, cloudFlashcards };

// Augment subjects catalog
export const subjects = {
  ...originalSubjects,
  "cloud-computing": {
    ...(originalSubjects["cloud-computing"] || {}),
    id: "cloud-computing",
    title: "Điện toán đám mây",
    description: "Tổng quan mô hình dịch vụ IaaS/PaaS/SaaS/IDaaS, kiến trúc ảo hóa, 5 đặc tính NIST và hạ tầng đám mây hiện đại.",
    category: "Môn chuyên ngành",
    quote: "“Điện toán đám mây biến hạ tầng IT thành tiện ích như điện nước — truy cập mọi lúc, co giãn linh hoạt và tính phí theo nhu cầu.”",
    themeColors: {
      accent: "#0ea5e9",
      secondary: "#0284c7",
      accentRgb: "14, 165, 233"
    },
    icon: "☁️",
    chapters: cloudChapters,
    questionsMap: {},
    isActive: true
  }
};

// Augment lessons data
export const lessonsData = {
  ...originalLessonsData,
  "cloud-computing": {
    chapters: cloudChapters
  }
};

// Augmented findSubsectionContent
export function findSubsectionContent(subjectId, activeSubsectionId) {
  if (subjectId === "cloud-computing") {
    for (const chapter of cloudChapters) {
      if (!chapter.sections) continue;
      for (const section of chapter.sections) {
        if (!section.subsections) continue;
        for (const subsection of section.subsections) {
          if (subsection.id === activeSubsectionId) {
            return {
              chapterTitle: `${chapter.title}: ${chapter.subtitle}`,
              sectionTitle: `${section.roman}. ${section.title}`,
              subsectionTitle: subsection.number ? `${subsection.number}. ${subsection.title}` : subsection.title,
              parts: subsection.parts || []
            };
          }
        }
      }
    }
    // Fallback: return first subsection of first chapter
    const firstCh = cloudChapters[0];
    const firstSec = firstCh?.sections?.[0];
    const firstSub = firstSec?.subsections?.[0];
    if (firstSub) {
      return {
        chapterTitle: `${firstCh.title}: ${firstCh.subtitle}`,
        sectionTitle: `${firstSec.roman}. ${firstSec.title}`,
        subsectionTitle: firstSub.number ? `${firstSub.number}. ${firstSub.title}` : firstSub.title,
        parts: firstSub.parts || []
      };
    }
  }

  return originalFindSubsection(subjectId, activeSubsectionId);
}
