import { chuong1 } from "./chuong-1";
import { chuong2 } from "./chuong-2";
import { chuong3 } from "./chuong-3";
import { analysisDesignData } from "./analysis-design";
import { basicAlgorithmsData } from "./basic-algorithms";
import { basicConceptsData } from "./basic-concepts";
import { basicGeneralData } from "./basic-general";
import { databaseData } from "./database";
import { dsaData } from "./dsa";
import { lichSuDangMoDau } from "./lich-su-dang-mo-dau";
import { lichSuDangChuong1 } from "./lich-su-dang";
import { oopData } from "./oop";

export const lessonsData = {
  "tu-tuong-hcm": {
    chapters: [chuong1, chuong2, chuong3]
  },
  "lich-su-dang": {
    chapters: [lichSuDangMoDau, lichSuDangChuong1]
  },
  "basic-general": basicGeneralData,
  "basic-concepts": basicConceptsData,
  "basic-algorithms": basicAlgorithmsData,
  "oop": oopData,
  "dsa": dsaData,
  "database": databaseData,
  "analysis-design": analysisDesignData
};

export function findSubsectionContent(subjectId, activeSubsectionId) {
  const subjectData = lessonsData[subjectId];
  if (!subjectData) return null;

  if (subjectData.chapters) {
    for (const chapter of subjectData.chapters) {
      for (const section of chapter.sections) {
        for (const sub of section.subsections) {
          if (sub.id === activeSubsectionId) {
            return sub;
          }
        }
      }
    }
  } else if (subjectData.sections) {
    for (const section of subjectData.sections) {
      for (const sub of section.subsections) {
        if (sub.id === activeSubsectionId) {
          return sub;
        }
      }
    }
  }
  return null;
}
