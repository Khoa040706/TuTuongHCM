import fs from "node:fs";
import path from "node:path";
import { questionsCloudCh5Trick1 } from "../data/questions-cloud-ch5-trick1.js";
import { questionsCloudCh5Trick2 } from "../data/questions-cloud-ch5-trick2.js";

const rootDir = process.cwd();

function formatMarkdownTable(questions) {
  let md = "| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |\n";
  md += "| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |\n";
  
  for (let r = 0; r < 10; r++) {
    const c1 = r + 1;
    const c2 = r + 11;
    const c3 = r + 21;
    const c4 = r + 31;
    const c5 = r + 41;
    
    const a1 = ["A", "B", "C", "D"][questions[c1 - 1].answer];
    const a2 = ["A", "B", "C", "D"][questions[c2 - 1].answer];
    const a3 = ["A", "B", "C", "D"][questions[c3 - 1].answer];
    const a4 = ["A", "B", "C", "D"][questions[c4 - 1].answer];
    const a5 = ["A", "B", "C", "D"][questions[c5 - 1].answer];
    
    md += `| **${c1}** | \`${a1}\` | **${c2}** | \`${a2}\` | **${c3}** | \`${a3}\` | **${c4}** | \`${a4}\` | **${c5}** | \`${a5}\` |\n`;
  }
  return md;
}

function countAnswers(questions) {
  const dist = { A: 0, B: 0, C: 0, D: 0 };
  questions.forEach(q => {
    const letter = ["A", "B", "C", "D"][q.answer];
    dist[letter]++;
  });
  return `${dist.A}A, ${dist.B}B, ${dist.C}C, ${dist.D}D`;
}

function renderQuestion(q, number) {
  const letters = ["A", "B", "C", "D"];
  const correctLetter = letters[q.answer];
  const correctText = q.options[q.answer];
  
  let md = `### Câu ${number} (${q.id})\n\n`;
  md += `**${q.question}**\n\n`;
  q.options.forEach((opt, idx) => {
    md += `- **${letters[idx]}.** ${opt}\n`;
  });
  md += `\n> **Đáp án đúng:** **${correctLetter}** — *${correctText}*\n`;
  md += `>\n`;
  md += `> **Giải thích chi tiết:** ${q.explanation}\n`;
  md += `>\n`;
  md += `> **Phân tích bẫy tư duy (Trick Details):**\n`;
  md += `> - ⚠️ **Vì sao dễ sập bẫy:** ${q.trickDetails?.whyTrapped || ""}\n`;
  md += `> - 🎯 **Từ khóa gài bẫy:** \`${q.trickDetails?.trickWord || ""}\`\n`;
  md += `> - 📖 **Dẫn chứng giáo trình:** *${q.trickDetails?.citation || ""}*\n`;
  md += `> - 💡 **Mẹo hóa giải:** ${q.trickDetails?.tip || ""}\n\n`;
  md += `---\n\n`;
  return md;
}

let mdContent = `# TÀI LIỆU TỔNG HỢP: 2 BỘ ĐỀ THI BẪY CHƯƠNG V — MÔN ĐIỆN TOÁN ĐÁM MÂY

> **Môn học:** Điện toán đám mây (Cloud Computing)  
> **Chương:** Chương 5 — Infrastructure as a Service (IaaS)  
> **Dữ liệu giáo trình chuẩn:** \`data/cloud-computing-chapter-5.js\`  
> **Loại tài liệu:** Ngân hàng đề thi BẪY học thuật chuyên sâu (Trick Exam Sets)  
> **Tổng quy mô:** 2 Bộ đề độc lập — Tổng cộng **100 câu hỏi bẫy vận dụng cao** (100% Hard, 100% có \`trickDetails\`)  
> **Độ lệch chiều dài:** $\\Delta L = L_{\\max} - L_{\\min} \\le 15$ ký tự trên 100% câu hỏi (Triệt tiêu hoàn toàn trực giác đoán bừa)  
> **Bộ đề bẫy 1:** 50 câu (\`cloud-c5-d1-001\` ➔ \`cloud-c5-d1-050\`) — Phân bổ: ${countAnswers(questionsCloudCh5Trick1)}  
> **Bộ đề bẫy 2:** 50 câu (\`cloud-c5-d2-001\` ➔ \`cloud-c5-d2-050\`) — Phân bổ: ${countAnswers(questionsCloudCh5Trick2)}  

---

## 📑 MỤC LỤC & BẢNG TRA CỨU ĐÁP ÁN NHANH

### BẢNG ĐÁP ÁN NHANH: BỘ ĐỀ BẪY 1 (cloud-c5-d1)
*(Phân bổ đáp án: ${countAnswers(questionsCloudCh5Trick1)})*

${formatMarkdownTable(questionsCloudCh5Trick1)}

---

### BẢNG ĐÁP ÁN NHANH: BỘ ĐỀ BẪY 2 (cloud-c5-d2)
*(Phân bổ đáp án: ${countAnswers(questionsCloudCh5Trick2)})*

${formatMarkdownTable(questionsCloudCh5Trick2)}

---

## 🏛️ MA TRẬN PHÂN LOẠI DẠNG BẪY HỌC THUẬT (BỘ ĐỀ 2)

| STT | Phân nhóm bẫy | Số câu | Đặc điểm tư duy phân hóa |
| :---: | :--- | :---: | :--- |
| **1** | **Bẫy Khẳng định / Phủ định (Chọn câu SAI)** | **12** | Cài cắm mệnh đề ngụy biện có vẻ hợp lý nhưng vi phạm nguyên lý cơ bản của IaaS (vá lỗi OS, Noisy Neighbor, boot Object Storage, Round Robin). |
| **2** | **Bẫy Nhận định Chuẩn xác (Chọn câu ĐÚNG)** | **10** | Cài cắm từ ngữ tuyệt đối hóa sai lệch trong 3 phương án nhiễu, kiểm tra chuẩn xác ranh giới trách nhiệm chia sẻ từ OS trở lên. |
| **3** | **Bẫy Tổ hợp Logic & Mệnh đề (I, II, III)** | **10** | Đánh giá đồng thời 3 hoặc 4 khía cạnh kỹ thuật IaaS (3 loại server, 3 chiến lược sao lưu, 3 thuật toán Load Balancing, 4 loại Redundancy). |
| **4** | **Bẫy Kịch bản Thực tế & Tình huống Ứng dụng** | **9** | Đặt thí sinh vào vai trò Kiến trúc sư giải quyết bài toán: Bare-metal cho Big Data, Noisy Neighbor trong ngân hàng, Sticky Session qua IP Hash, RTO/RPO. |
| **5** | **Bẫy Khái niệm Song sinh & Dễ nhầm lẫn** | **9** | Phân biệt Block Storage vs Object Storage, RTO vs RPO, Incremental vs Differential, Dedicated vs Shared Server, Type 1 vs Type 2 Hypervisor. |

---

# PHẦN 1: BỘ ĐỀ BẪY 1 (MÃ ĐỀ: cloud-c5-d1)

> **Mô tả:** 50 câu hỏi bẫy tư duy bao quát toàn bộ nội dung giáo trình Chương 5 (Bản chất IaaS, 3 loại Server, Bộ tam lưu trữ, Load Balancing, Redundancy, Cloud NAS, Tam hùng AWS-Azure-GCP).  
> **Quy cách:** 100% câu hỏi có \`trickDetails\` và độ lệch phương án $\\Delta L \\le 15$ ký tự.

`;

questionsCloudCh5Trick1.forEach((q, idx) => {
  mdContent += renderQuestion(q, idx + 1);
});

mdContent += `\n# PHẦN 2: BỘ ĐỀ BẪY 2 (MÃ ĐỀ: cloud-c5-d2)

> **Mô tả:** 50 câu hỏi bẫy tư duy Vận dụng cao chuyên sâu được biên soạn mới hoàn toàn, độc lập 100% với Đề 1, đa dạng hóa 5 dạng câu hỏi, bảo đảm cân bằng đáp án và triệt tiêu đoán mò.  
> **Quy cách:** 100% câu hỏi có \`trickDetails\` và độ lệch phương án $\\Delta L \\le 15$ ký tự.

`;

questionsCloudCh5Trick2.forEach((q, idx) => {
  mdContent += renderQuestion(q, idx + 1);
});

const outputPath = path.join(rootDir, "tong-hop-2-de-thi-bay-chuong-5-dien-toan-dam-may.md");
fs.writeFileSync(outputPath, mdContent, "utf-8");
console.log(`✅ Đã xuất thành công file Markdown: ${outputPath}`);
