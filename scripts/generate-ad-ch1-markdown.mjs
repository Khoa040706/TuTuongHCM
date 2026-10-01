import fs from "fs";
import { part1Questions } from "./generate-ad-ch1-part1.mjs";
import { part2Questions } from "./generate-ad-ch1-part2.mjs";

function renderExam(questions, examTitle, examDesc) {
  let md = `## ${examTitle}\n\n*${examDesc}*\n\n---\n\n`;

  questions.forEach((q, idx) => {
    const letters = ["A", "B", "C", "D"];
    const diffBadge =
      q.difficulty === "easy"
        ? "🟢 DỄ (NHẬN BIẾT)"
        : q.difficulty === "medium"
        ? "🟡 TRUNG BÌNH (THÔNG HIỂU)"
        : "🔴 KHÓ (VẬN DỤNG CAO)";

    const typeBadge = q.type === "outside" ? " [OUTSIDE]" : "";
    const qTypeBadge = ` [${q.questionType.toUpperCase()}]`;

    md += `#### Câu ${idx + 1} (${q.id}) — [${diffBadge}]${typeBadge}${qTypeBadge}\n\n`;
    md += `**${q.question}**\n\n`;

    q.options.forEach((opt, optIdx) => {
      md += `- **${letters[optIdx]}.** ${opt}\n`;
    });

    const correctLetter = letters[q.answer];
    const correctText = q.options[q.answer];

    md += `\n> **Đáp án đúng:** **${correctLetter}** — *${correctText}*\n`;
    md += `>\n`;
    md += `> **Giải thích chi tiết:** ${q.explanation}\n\n`;
    md += `---\n\n`;
  });

  return md;
}

const header = `# TỔNG HỢP 2 BỘ ĐỀ THI TRẮC NGHIỆM CHƯƠNG I: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
*(Tổng cộng 80 câu hỏi học thuật chuẩn mực — Cơ cấu: 30% Dễ - 40% Trung bình - 30% Khó)*

- **Môn học:** Phân tích thiết kế và yêu cầu (Requirements Analysis and Design)
- **Chương:** Chapter 1: Introduction — Requirements Analysis and Design
- **Quy mô:** 2 Bộ đề độc lập (Đề 1 & Đề 2), mỗi đề đúng 40 câu hỏi cố định (Tổng = 80 câu biên soạn mới 100%)
- **Tỷ lệ độ khó:** 12 Dễ (30%) — 16 Trung bình (40%) — 12 Khó (30%) cho từng đề
- **Tỷ lệ nguồn:** 36 câu Inside (giáo trình ad-ch1.js) + 4 câu Outside (thực tế dự án BA)
- **Quy chuẩn kỹ thuật:** Đáp ứng độ lệch chiều dài phương án $\\Delta L = L_{\\max} - L_{\\min} \\le 15$ ký tự trên toàn bộ 80 câu
- **Đa dạng hình thức:** Trắc nghiệm chọn đúng, Chọn sai/ngoại lệ (**KHÔNG/SAI**), Tình huống thực tế (Case study), Ghép cặp phân loại (Matching), Điền khuyết/Trình tự logic (Fill-in)

---

`;

const part1Md = renderExam(
  part1Questions,
  "BỘ ĐỀ THI SỐ 1 (MÃ ĐỀ: ad-c1-d1)",
  "Bộ đề số 1 tập trung khảo sát tổng quan hệ thống thông tin (IPO, TPS/MIS/DSS/ESS), vai trò cốt lõi của Business Analyst, các kỹ thuật khơi mở yêu cầu, mô hình hóa UML và vòng đời SDLC/UP."
);

const part2Md = renderExam(
  part2Questions,
  "BỘ ĐỀ THI SỐ 2 (MÃ ĐỀ: ad-c1-d2)",
  "Bộ đề số 2 chuyên sâu đối sánh chuyên gia, các cạm bẫy thực tiễn, phân loại biểu đồ UML cấu trúc vs hành vi, 4 pha Unified Process và giải quyết xung đột yêu cầu nghiệp vụ."
);

const fullContent = header + part1Md + part2Md;

fs.writeFileSync("tong-hop-2-de-thi-chuong-1-phan-tich-thiet-ke-yeu-cau.md", fullContent, "utf8");
console.log("✅ Đã xuất thành công tong-hop-2-de-thi-chuong-1-phan-tich-thiet-ke-yeu-cau.md!");
