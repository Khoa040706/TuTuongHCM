/**
 * Curriculum Adapter
 * Ghép nối dữ liệu môn Cloud Computing mới với dữ liệu gốc một cách an toàn
 * Tuyệt đối không chỉnh sửa các tệp tin đã tồn tại trong data/
 */

import { subjects as originalSubjects } from "../data/index.js";
import { lessonsData as originalLessonsData, findSubsectionContent as originalFindSubsection } from "../data/lessons.js";

import { cloudComputingChapter1, cloudChapter1Flashcards, cloudChapter1Glossary } from "../data/cloud-computing-chapter-1.js";
import { cloudComputingChapter2, cloudChapter2Flashcards, cloudChapter2Glossary } from "../data/cloud-computing-chapter-2.js";
import { cloudComputingChapter3, cloudChapter3Flashcards, cloudChapter3Glossary } from "../data/cloud-computing-chapter-3.js";
import { cloudComputingChapter4, cloudChapter4Flashcards, cloudChapter4Glossary } from "../data/cloud-computing-chapter-4.js";
import { cloudComputingChapter5, cloudChapter5Flashcards, cloudChapter5Glossary } from "../data/cloud-computing-chapter-5.js";
import { cloudComputingChapter6, cloudChapter6Flashcards, cloudChapter6Glossary } from "../data/cloud-computing-chapter-6.js";
import { cloudComputingChapter7, cloudChapter7Flashcards, cloudChapter7Glossary } from "../data/cloud-computing-chapter-7.js";
import { cloudComputingChapter8, cloudChapter8Flashcards, cloudChapter8Glossary } from "../data/cloud-computing-chapter-8.js";
import { cloudComputingChapter9, cloudChapter9Flashcards, cloudChapter9Glossary } from "../data/cloud-computing-chapter-9.js";
import { cloudGlossary as originalCloudGlossary } from "../data/cloud-computing-glossary.js";
import { cloudFlashcards as originalCloudFlashcards } from "../data/cloud-computing-flashcards.js";
import { adCh3Data } from "../data/ad-ch3.js";
import { adCh4Data } from "../data/ad-ch4.js";
import { questionsAdCh1Part1 } from "../data/questions-ad-ch1-part1.js";
import { questionsAdCh1Part2 } from "../data/questions-ad-ch1-part2.js";
import { questionsAdCh2Part1 } from "../data/questions-ad-ch2-part1.js";
import { questionsAdCh2Part2 } from "../data/questions-ad-ch2-part2.js";
import { questionsAdCh3Part1 } from "../data/questions-ad-ch3-part1.js";
import { questionsAdCh3Part2 } from "../data/questions-ad-ch3-part2.js";
import { questionsAdCh4Part1 } from "../data/questions-ad-ch4-part1.js";
import { questionsAdCh4Part2 } from "../data/questions-ad-ch4-part2.js";
import { questionsCloudCh1Trick1 } from "../data/questions-cloud-ch1-trick1.js";
import { questionsCloudCh1Trick2 } from "../data/questions-cloud-ch1-trick2.js";
import { questionsCloudCh2Trick1 } from "../data/questions-cloud-ch2-trick1.js";
import { questionsCloudCh2Trick2 } from "../data/questions-cloud-ch2-trick2.js";
import { questionsCloudCh3Trick1 } from "../data/questions-cloud-ch3-trick1.js";
import { questionsCloudCh3Trick2 } from "../data/questions-cloud-ch3-trick2.js";
import { questionsCloudCh4Trick1 } from "../data/questions-cloud-ch4-trick1.js";
import { questionsCloudCh4Trick2 } from "../data/questions-cloud-ch4-trick2.js";
import { questionsCloudCh5Trick1 } from "../data/questions-cloud-ch5-trick1.js";
import { questionsCloudCh5Trick2 } from "../data/questions-cloud-ch5-trick2.js";
import { questionsDbCh1Part1 } from "../data/questions-db-ch1-part1.js";
import { questionsDbCh1Part2 } from "../data/questions-db-ch1-part2.js";
import { questionsDbCh1Trick1 } from "../data/questions-db-ch1-trick1.js";
import { questionsDbCh1Trick2 } from "../data/questions-db-ch1-trick2.js";
import { questionsDbCh2Part1 } from "../data/questions-db-ch2-part1.js";
import { questionsDbCh2Part2 } from "../data/questions-db-ch2-part2.js";
import { questionsDbCh2Trick1 } from "../data/questions-db-ch2-trick1.js";
import { questionsDbCh2Trick2 } from "../data/questions-db-ch2-trick2.js";
import { questionsDbCh3Part1 } from "../data/questions-db-ch3-part1.js";
import { questionsDbCh3Part2 } from "../data/questions-db-ch3-part2.js";
import { questionsDbCh3Trick1 } from "../data/questions-db-ch3-trick1.js";
import { questionsDbCh3Trick2 } from "../data/questions-db-ch3-trick2.js";
import { questionsDbCh4Part1 } from "../data/questions-db-ch4-part1.js";
import { questionsDbCh4Part2 } from "../data/questions-db-ch4-part2.js";
import { questionsDbCh4Trick1 } from "../data/questions-db-ch4-trick1.js";
import { questionsDbCh4Trick2 } from "../data/questions-db-ch4-trick2.js";
import { databaseData } from "../data/database.js";
import { databaseCh2Data } from "../data/database-ch2.js";
import { databaseCh3Data } from "../data/database-ch3.js";
import { databaseCh4Data } from "../data/database-ch4.js";
import { databaseCh5Data } from "../data/database-ch5.js";
import { databaseCh6Data } from "../data/database-ch6.js";
import { databaseCh7Data } from "../data/database-ch7.js";
import { databaseCh8Data } from "../data/database-ch8.js";

// 8 Chapters for Database
export const databaseChapters = [
  databaseData,
  databaseCh2Data,
  databaseCh3Data,
  databaseCh4Data,
  databaseCh5Data,
  databaseCh6Data,
  databaseCh7Data,
  databaseCh8Data
];

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
    questionsMap: {
      "cloud-ch1": {
        chapterId: "cloud-ch1",
        inside: [],
        outside: [],
        tricks: [...questionsCloudCh1Trick1, ...questionsCloudCh1Trick2],
        sets: {
          "trick-1": questionsCloudCh1Trick1,
          "trick-2": questionsCloudCh1Trick2
        }
      },
      "cloud-ch2": {
        chapterId: "cloud-ch2",
        inside: [],
        outside: [],
        tricks: [...questionsCloudCh2Trick1, ...questionsCloudCh2Trick2],
        sets: {
          "trick-1": questionsCloudCh2Trick1,
          "trick-2": questionsCloudCh2Trick2
        }
      },
      "cloud-ch3": {
        chapterId: "cloud-ch3",
        inside: [],
        outside: [],
        tricks: [...questionsCloudCh3Trick1, ...questionsCloudCh3Trick2],
        sets: {
          "trick-1": questionsCloudCh3Trick1,
          "trick-2": questionsCloudCh3Trick2
        }
      },
      "cloud-ch4": {
        chapterId: "cloud-ch4",
        inside: [],
        outside: [],
        tricks: [...questionsCloudCh4Trick1, ...questionsCloudCh4Trick2],
        sets: {
          "trick-1": questionsCloudCh4Trick1,
          "trick-2": questionsCloudCh4Trick2
        }
      },
      "cloud-ch5": {
        chapterId: "cloud-ch5",
        inside: [],
        outside: [],
        tricks: [...questionsCloudCh5Trick1, ...questionsCloudCh5Trick2],
        sets: {
          "trick-1": questionsCloudCh5Trick1,
          "trick-2": questionsCloudCh5Trick2
        }
      }
    },
    isActive: true
  },
  "analysis-design": {
    ...(originalSubjects["analysis-design"] || {}),
    chapters: adChapters,
    questionsMap: {
      "ad-ch1": {
        chapterId: "ad-ch1",
        inside: [
          ...questionsAdCh1Part1.filter((q) => q.type === "inside"),
          ...questionsAdCh1Part2.filter((q) => q.type === "inside")
        ],
        outside: [
          ...questionsAdCh1Part1.filter((q) => q.type === "outside"),
          ...questionsAdCh1Part2.filter((q) => q.type === "outside")
        ],
        tricks: [],
        sets: {
          1: questionsAdCh1Part1,
          2: questionsAdCh1Part2,
          "part-1": questionsAdCh1Part1,
          "part-2": questionsAdCh1Part2
        }
      },
      "ad-ch2": {
        chapterId: "ad-ch2",
        inside: [
          ...questionsAdCh2Part1.filter((q) => q.type === "inside"),
          ...questionsAdCh2Part2.filter((q) => q.type === "inside")
        ],
        outside: [
          ...questionsAdCh2Part1.filter((q) => q.type === "outside"),
          ...questionsAdCh2Part2.filter((q) => q.type === "outside")
        ],
        tricks: [],
        sets: {
          1: questionsAdCh2Part1,
          2: questionsAdCh2Part2,
          "part-1": questionsAdCh2Part1,
          "part-2": questionsAdCh2Part2
        }
      },
      "ad-ch3": {
        chapterId: "ad-ch3",
        inside: [
          ...questionsAdCh3Part1.filter((q) => q.type === "inside"),
          ...questionsAdCh3Part2.filter((q) => q.type === "inside")
        ],
        outside: [
          ...questionsAdCh3Part1.filter((q) => q.type === "outside"),
          ...questionsAdCh3Part2.filter((q) => q.type === "outside")
        ],
        tricks: [],
        sets: {
          1: questionsAdCh3Part1,
          2: questionsAdCh3Part2,
          "part-1": questionsAdCh3Part1,
          "part-2": questionsAdCh3Part2
        }
      },
      "ad-ch4": {
        chapterId: "ad-ch4",
        inside: [
          ...questionsAdCh4Part1.filter((q) => q.type === "inside"),
          ...questionsAdCh4Part2.filter((q) => q.type === "inside")
        ],
        outside: [
          ...questionsAdCh4Part1.filter((q) => q.type === "outside"),
          ...questionsAdCh4Part2.filter((q) => q.type === "outside")
        ],
        tricks: [],
        sets: {
          1: questionsAdCh4Part1,
          2: questionsAdCh4Part2,
          "part-1": questionsAdCh4Part1,
          "part-2": questionsAdCh4Part2
        }
      }
    }
  },
  "database": {
    id: "database",
    title: "Hệ cơ sở dữ liệu",
    description: "Cơ sở dữ liệu quan hệ, thiết kế thực thể liên kết (ERD), kiến trúc 3 mức ANSI-SPARC, chuẩn hóa dữ liệu và truy vấn SQL.",
    category: "Môn chuyên ngành",
    quote: "“Dữ liệu là tài sản quý giá nhất của mọi hệ thống thông tin.”",
    themeColors: {
      accent: "#ea580c",
      secondary: "#c2410c",
      accentRgb: "234, 88, 12"
    },
    icon: "🗄️",
    chapters: databaseChapters,
    questionsMap: {
      "database": {
        chapterId: "database",
        inside: questionsDbCh1Part1,
        outside: [],
        tricks: [...questionsDbCh1Trick1, ...questionsDbCh1Trick2],
        sets: {
          "part-1": questionsDbCh1Part1,
          "part-2": questionsDbCh1Part2,
          "trick-1": questionsDbCh1Trick1,
          "trick-2": questionsDbCh1Trick2
        }
      },
      "database-ch1": {
        chapterId: "database-ch1",
        inside: questionsDbCh1Part1,
        outside: [],
        tricks: [...questionsDbCh1Trick1, ...questionsDbCh1Trick2],
        sets: {
          "part-1": questionsDbCh1Part1,
          "part-2": questionsDbCh1Part2,
          "trick-1": questionsDbCh1Trick1,
          "trick-2": questionsDbCh1Trick2
        }
      },
      "database-ch2": {
        chapterId: "database-ch2",
        inside: questionsDbCh2Part1,
        outside: [],
        tricks: [...questionsDbCh2Trick1, ...questionsDbCh2Trick2],
        sets: {
          "part-1": questionsDbCh2Part1,
          "part-2": questionsDbCh2Part2,
          "trick-1": questionsDbCh2Trick1,
          "trick-2": questionsDbCh2Trick2
        }
      },
      "database-ch3": {
        chapterId: "database-ch3",
        inside: questionsDbCh3Part1,
        outside: [],
        tricks: [...questionsDbCh3Trick1, ...questionsDbCh3Trick2],
        sets: {
          "part-1": questionsDbCh3Part1,
          "part-2": questionsDbCh3Part2,
          "trick-1": questionsDbCh3Trick1,
          "trick-2": questionsDbCh3Trick2
        }
      },
      "database-ch4": {
        chapterId: "database-ch4",
        inside: questionsDbCh4Part1,
        outside: [],
        tricks: [...questionsDbCh4Trick1, ...questionsDbCh4Trick2],
        sets: {
          "part-1": questionsDbCh4Part1,
          "part-2": questionsDbCh4Part2,
          "trick-1": questionsDbCh4Trick1,
          "trick-2": questionsDbCh4Trick2
        }
      }
    },
    isActive: true
  }
};

// Augment lessons data
export const lessonsData = {
  ...originalLessonsData,
  "cloud-computing": {
    chapters: cloudChapters
  },
  "database": {
    chapters: databaseChapters
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

  if (subjectId === "database") {
    for (const chapter of databaseChapters) {
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
    const firstCh = databaseChapters[0];
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
