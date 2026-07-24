import fs from "fs";
import { basicGeneralData } from "../data/basic-general.js";

function groupParts(parts, dhId, dhTitle, dhSubtitle) {
  // Find flashcard part if any
  const flashcardPart = parts.find(p => p.id && p.id.includes("flashcards"));
  const regularParts = parts.filter(p => p !== flashcardPart);

  const sectionTitles = [
    { roman: "I", title: "Tổng quan & Bối cảnh lịch sử" },
    { roman: "II", title: "Nội dung Văn kiện & Quyết định quan trọng" },
    { roman: "III", title: "Phân tích & Bài học lịch sử" },
    { roman: "IV", title: "Ý nghĩa lịch sử & Chìa khóa Ôn thi" }
  ];

  const sections = [];

  for (let sIdx = 0; sIdx < 4; sIdx++) {
    const startPartIdx = sIdx * 3;
    const chunkParts = regularParts.slice(startPartIdx, startPartIdx + 3);
    
    const subsections = chunkParts.map((p, pIdx) => {
      // Reset subNumber to start from 1 for each Roman section (1, 2, 3)
      const subNumber = (pIdx + 1).toString();
      const contentParts = [p];
      if (sIdx === 0 && pIdx === 0 && flashcardPart) {
        contentParts.unshift(flashcardPart);
      }
      return {
        id: p.id,
        number: subNumber,
        title: p.title || `Mục ${subNumber}`,
        parts: contentParts
      };
    });

    sections.push({
      id: `${dhId}-grp-${sIdx + 1}`,
      roman: sectionTitles[sIdx].roman,
      title: sectionTitles[sIdx].title,
      subsections
    });
  }

  return {
    id: dhId,
    title: dhTitle,
    subtitle: dhSubtitle,
    sections
  };
}

const dh1Raw = basicGeneralData.chapters.find(c => c.id === "dh-1");
const dh2Raw = basicGeneralData.chapters.find(c => c.id === "dh-2");
const dh10Raw = basicGeneralData.chapters.find(c => c.id === "dh-10");

// Collect all parts from sub-sections
const getParts = (raw) => {
  const allParts = [];
  raw.sections.forEach(sec => {
    sec.subsections.forEach(sub => {
      allParts.push(...sub.parts);
    });
  });
  return allParts;
};

const dh1Parts = getParts(dh1Raw);
const dh2Parts = getParts(dh2Raw);
const dh10Parts = getParts(dh10Raw);

const ch1 = groupParts(dh1Parts, "dh-1", "Đại hội I (3/1935)", "Khôi phục hệ thống tổ chức Đảng");
const ch2 = groupParts(dh2Parts, "dh-2", "Đại hội II (2/1951)", "Kháng chiến thắng lợi & Đổi tên Đảng Lao động Việt Nam");
const ch10 = groupParts(dh10Parts, "dh-10", "Đại hội X (4/2006)", "Nâng cao năng lực lãnh đạo & Hội nhập kinh tế quốc tế sâu rộng");

const transformedData = {
  id: basicGeneralData.id,
  title: basicGeneralData.title,
  subtitle: basicGeneralData.subtitle,
  chapters: [ch1, ch2, ch10]
};

function stripMetadata(chapters) {
  return chapters.map(ch => ({
    id: ch.id,
    title: ch.title,
    subtitle: ch.subtitle,
    sections: ch.sections.map(sec => ({
      id: sec.id,
      roman: sec.roman,
      title: sec.title,
      subsections: sec.subsections.map(sub => ({
        id: sub.id,
        number: sub.number,
        title: sub.title
      }))
    }))
  }));
}

const metaData = stripMetadata([ch1, ch2, ch10]);
fs.writeFileSync("./scratch/bg_transformed.json", JSON.stringify(transformedData, null, 2));
fs.writeFileSync("./scratch/bg_meta.json", JSON.stringify(metaData, null, 2));
console.log("Transformed & Metadata reset numbered from 1 per section.");
