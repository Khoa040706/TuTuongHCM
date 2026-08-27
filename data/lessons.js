import { chuong1 } from "./chuong-1";
import { chuong2 } from "./chuong-2";
import { chuong3 } from "./chuong-3";
import { chuong4 } from "./chuong-4";
import { chuong5 } from "./chuong-5";
import { chuong6 } from "./chuong-6";
import { analysisDesignData } from "./analysis-design";
import { adCh1Data } from "./ad-ch1";
import { adCh2Data } from "./ad-ch2";
import { basicAlgorithmsData } from "./basic-algorithms";
import { basicConceptsData } from "./basic-concepts";
import { basicGeneralData } from "./basic-general";
import { databaseData } from "./database";
import { databaseCh2Data } from "./database-ch2";
import { databaseCh3Data } from "./database-ch3";
import { databaseCh4Data } from "./database-ch4";
import { databaseCh5Data } from "./database-ch5";
import { databaseCh6Data } from "./database-ch6";
import { databaseCh7Data } from "./database-ch7";
import { databaseCh8Data } from "./database-ch8";
import { dsaData } from "./dsa";
import { lichSuDangMoDau } from "./lich-su-dang-mo-dau";
import { lichSuDangChuong1 } from "./lich-su-dang";
import { lichSuDangChuong2 } from "./lich-su-dang-chuong-2";
import { lichSuDangChuong3Data } from "./lich-su-dang-chuong-3";
import { lichSuDangKetLuanData } from "./lich-su-dang-ket-luan";
import { oopData } from "./oop";

export const lessonsData = {
  "tu-tuong-hcm": {
    chapters: [chuong1, chuong2, chuong3, chuong4, chuong5, chuong6]
  },
  "lich-su-dang": {
    chapters: [lichSuDangMoDau, lichSuDangChuong1, lichSuDangChuong2, lichSuDangChuong3Data, lichSuDangKetLuanData]
  },
  "basic-general": basicGeneralData,
  "basic-concepts": basicConceptsData,
  "basic-algorithms": basicAlgorithmsData,
  "oop": oopData,
  "dsa": dsaData,
  "database": {
    chapters: [databaseData, databaseCh2Data, databaseCh3Data, databaseCh4Data, databaseCh5Data, databaseCh6Data, databaseCh7Data, databaseCh8Data]
  },
  "analysis-design": {
    chapters: [adCh1Data, adCh2Data]
  }
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
