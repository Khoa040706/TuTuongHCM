import fs from "fs";
import { part1Questions } from "./generate-ad-ch2-part1.mjs";
import { part2Questions } from "./generate-ad-ch2-part2.mjs";

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

const header = `# TỔNG HỢP 2 BỘ ĐỀ THI TRẮC NGHIỆM CHƯƠNG II: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
*(Tổng cộng 80 câu hỏi học thuật chuẩn mực — Cơ cấu: 30% Dễ - 40% Trung bình - 30% Khó)*

- **Môn học:** Phân tích thiết kế và yêu cầu (Requirements Analysis and Design)
- **Chương:** Chapter 2: Systems Development Life Cycle (SDLC) & Business Modeling
- **Quy mô:** 2 Bộ đề độc lập (Đề 1 & Đề 2), mỗi đề đúng 40 câu hỏi cố định (Tổng = 80 câu biên soạn mới 100%, 0% trùng lặp)
- **Tỷ lệ độ khó:** 12 Dễ (30%) — 16 Trung bình (40%) — 12 Khó (30%) cho từng đề
- **Tỷ lệ nguồn:** 36 câu Inside (giáo trình ad-ch2.js) + 4 câu Outside (thực tế dự án SDLC & Chuyển đổi số)
- **Quy chuẩn kỹ thuật:** Đáp ứng độ lệch chiều dài phương án $\\Delta L = L_{\\max} - L_{\\min} \\le 15$ ký tự trên toàn bộ 80 câu
- **Đa dạng hình thức:** Trắc nghiệm chọn đúng, Chọn sai/ngoại lệ (**KHÔNG/SAI**), Tình huống thực tế (Case study), Ghép cặp phân loại (Matching), Điền khuyết/Trình tự logic (Fill-in)

---

`;

const part1Md = renderExam(
  part1Questions,
  "BỘ ĐỀ THI SỐ 1 (MÃ ĐỀ: ad-c2-d1)",
  "Bộ đề số 1 tập trung khảo sát trường phái Predictive Approach, 5 giai đoạn cốt lõi của SDLC (Planning, Analysis, Design, Implementation, Support), bản chất Business Modeling, đánh giá tính khả thi và cú pháp Activity Diagram."
);

const part2Md = renderExam(
  part2Questions,
  "BỘ ĐỀ THI SỐ 2 (MÃ ĐỀ: ad-c2-d2)",
  "Bộ đề số 2 chuyên sâu về trường phái Adaptive Approach (Agile/Scrum), đối chiếu vai trò Business Worker vs Business Actor, các kỹ thuật phân tích khả thi tài chính (ROI/Payback), luồng đối tượng và làn bơi Swimlanes trong Activity Diagram."
);

const fullContent = header + part1Md + part2Md;

fs.writeFileSync("tong-hop-2-de-thi-chuong-2-phan-tich-thiet-ke-yeu-cau.md", fullContent, "utf8");
console.log("✅ Đã xuất thành công tong-hop-2-de-thi-chuong-2-phan-tich-thiet-ke-yeu-cau.md!");
