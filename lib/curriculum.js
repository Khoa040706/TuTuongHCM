/**
 * Curriculum Adapter
 * Ghép nối dữ liệu môn Cloud Computing mới với dữ liệu gốc một cách an toàn
 * Tuyệt đối không chỉnh sửa các tệp tin đã tồn tại trong data/
 */

import { subjects as originalSubjects } from "../data/index";
import { lessonsData as originalLessonsData, findSubsectionContent as originalFindSubsection } from "../data/lessons";

import { cloudComputingChapter1, cloudChapter1Flashcards, cloudChapter1Glossary } from "../data/cloud-computing-chapter-1";
import { cloudComputingChapter2, cloudChapter2Flashcards, cloudChapter2Glossary } from "../data/cloud-computing-chapter-2";
import { cloudComputingChapter3, cloudChapter3Flashcards, cloudChapter3Glossary } from "../data/cloud-computing-chapter-3";
import { cloudComputingChapter4, cloudChapter4Flashcards, cloudChapter4Glossary } from "../data/cloud-computing-chapter-4";
import { cloudComputingChapter5, cloudChapter5Flashcards, cloudChapter5Glossary } from "../data/cloud-computing-chapter-5";
import { cloudComputingChapter6, cloudChapter6Flashcards, cloudChapter6Glossary } from "../data/cloud-computing-chapter-6";
import { cloudComputingChapter7, cloudChapter7Flashcards, cloudChapter7Glossary } from "../data/cloud-computing-chapter-7";
import { cloudComputingChapter8, cloudChapter8Flashcards, cloudChapter8Glossary } from "../data/cloud-computing-chapter-8";
import { cloudComputingChapter9, cloudChapter9Flashcards, cloudChapter9Glossary } from "../data/cloud-computing-chapter-9";
import { cloudGlossary as originalCloudGlossary } from "../data/cloud-computing-glossary";
import { cloudFlashcards as originalCloudFlashcards } from "../data/cloud-computing-flashcards";
import { adCh3Data } from "../data/ad-ch3";
import { adCh4Data } from "../data/ad-ch4";

// 4 Chapters for Analysis and Design
export const adChapters = [
  ...(originalSubjects["analysis-design"]?.chapters || []),
  adCh3Data,
  adCh4Data
];

// 9 Chapters for Cloud Computing
export const cloudChapters = [
  cloudComputingChapter1,
  cloudComputingChapter2,
  cloudComputingChapter3,
  cloudComputingChapter4,
  cloudComputingChapter5,
  cloudComputingChapter6,
  cloudComputingChapter7,
  cloudComputingChapter8,
  cloudComputingChapter9
];

export const cloudGlossary = [
  ...originalCloudGlossary,
  ...cloudChapter1Glossary,
  ...cloudChapter2Glossary,
  ...cloudChapter3Glossary,
  ...cloudChapter4Glossary,
  ...cloudChapter5Glossary,
  ...cloudChapter6Glossary,
  ...cloudChapter7Glossary,
  ...cloudChapter8Glossary,
  ...cloudChapter9Glossary
];

export const cloudFlashcards = [
  ...originalCloudFlashcards,
  ...cloudChapter1Flashcards,
  ...cloudChapter2Flashcards,
  ...cloudChapter3Flashcards,
  ...cloudChapter4Flashcards,
  ...cloudChapter5Flashcards,
  ...cloudChapter6Flashcards,
  ...cloudChapter7Flashcards,
  ...cloudChapter8Flashcards,
  ...cloudChapter9Flashcards
];

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
  },
  "analysis-design": {
    ...(originalSubjects["analysis-design"] || {}),
    chapters: adChapters
  }
};

// Augment lessons data
export const lessonsData = {
  ...originalLessonsData,
  "cloud-computing": {
    chapters: cloudChapters
  },
  "analysis-design": {
    chapters: [
      ...(originalLessonsData["analysis-design"]?.chapters || []),
      adCh3Data,
      adCh4Data
    ]
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

  if (subjectId === "analysis-design") {
    const allAdChapters = [
      ...(originalLessonsData["analysis-design"]?.chapters || []),
      adCh3Data,
      adCh4Data
    ];
    for (const chapter of allAdChapters) {
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
  }

  return originalFindSubsection(subjectId, activeSubsectionId);
}
