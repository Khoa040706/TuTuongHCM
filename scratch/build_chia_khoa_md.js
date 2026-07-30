import fs from "fs";
import { basicGeneralData } from "../data/basic-general.js";

let mdContent = `# 🗝️ CHÌA KHÓA VÀNG & CÂU HỎI THƯỜNG GẶP 10 ĐẠI HỘI ĐẢNG

> **Tài liệu tổng hợp học thuật**: Trích xuất chính thức từ Môn Khái niệm cơ bản của Môn đại cương.
> **Bao gồm**:
> 1. **Chìa khóa Vàng**: 10 dòng cốt lõi bắt buộc học thuộc lòng của từng Đại hội.
> 2. **Câu hỏi thi thường gặp & Ma trận điểm bẫy thi**: Phân tích mốc thời gian, nhân vật dễ nhầm lẫn và thắc mắc tự luận / trắc nghiệm phổ biến.

---

`;

const chapters = basicGeneralData.chapters;

chapters.forEach((chapter, index) => {
  mdContent += `## 🏛️ ${chapter.title.toUpperCase()}: ${chapter.subtitle}\n\n`;

  chapter.sections.forEach(section => {
    section.subsections.forEach(sub => {
      const isGoldenKey = sub.title.includes("Chìa khóa Vàng");
      const isFAQ = sub.title.includes("Câu hỏi thi thường gặp") || sub.title.includes("Thắc mắc");

      if (isGoldenKey || isFAQ) {
        mdContent += `### 📌 ${sub.title}\n\n`;

        sub.parts.forEach(part => {
          part.content.forEach(item => {
            if (item.type === "golden-summary-box") {
              mdContent += `> **${item.title}**\n>\n`;
              item.lines.forEach(line => {
                mdContent += `> - ${line}\n`;
              });
              mdContent += `\n`;
            } else if (item.type === "trap-matrix-two-col") {
              mdContent += `#### ${item.title}\n\n`;
              if (item.col1Title && item.col1Items) {
                mdContent += `**${item.col1Title}**\n\n`;
                item.col1Items.forEach(line => {
                  mdContent += `${line}\n`;
                });
                mdContent += `\n`;
              }
              if (item.col2Title && item.col2Items) {
                mdContent += `**${item.col2Title}**\n\n`;
                item.col2Items.forEach(line => {
                  mdContent += `${line}\n`;
                });
                mdContent += `\n`;
              }
            } else if (item.type === "paragraph") {
              mdContent += `${item.text}\n\n`;
            } else if (item.type === "bullets") {
              item.items.forEach(line => {
                mdContent += `- ${line}\n`;
              });
              mdContent += `\n`;
            }
          });
        });
      }
    });
  });

  mdContent += `---\n\n`;
});

fs.writeFileSync("chia_khoa_vang_va_cau_hoi_thuong_gap_10_dai_hoi.md", mdContent, "utf-8");
console.log("Đã xuất file chia_khoa_vang_va_cau_hoi_thuong_gap_10_dai_hoi.md thành công!");
