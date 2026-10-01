import fs from "node:fs";
import path from "node:path";
import { questionsCloudCh1Trick1 } from "../data/questions-cloud-ch1-trick1.js";
import { questionsCloudCh1Trick2 } from "../data/questions-cloud-ch1-trick2.js";

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

let mdContent = `# TÀI LIỆU TỔNG HỢP: 2 BỘ ĐỀ THI BẪY CHƯƠNG I — MÔN ĐIỆN TOÁN ĐÁM MÂY

> **Môn học:** Điện toán đám mây (Cloud Computing)  
> **Chương:** Chương 1 — Giới thiệu về Điện toán đám mây (Introduction to Cloud Computing)  
> **Dữ liệu giáo trình chuẩn:** \`data/cloud-computing-chapter-1.js\`  
> **Loại tài liệu:** Ngân hàng đề thi BẪY học thuật chuyên sâu (Trick Exam Sets)  
> **Tổng quy mô:** 2 Bộ đề độc lập — Tổng cộng **100 câu hỏi bẫy vận dụng cao** (100% Hard, 100% có \`trickDetails\`)  
> **Độ lệch chiều dài:** $\\Delta L = L_{\\max} - L_{\\min} \\le 15$ ký tự trên 100% câu hỏi (Triệt tiêu hoàn toàn trực giác đoán bừa)  
> **Bộ đề bẫy 1:** 50 câu (\`cloud-c1-d1-001\` ➔ \`cloud-c1-d1-050\`) — Phân bổ: ${countAnswers(questionsCloudCh1Trick1)}  
> **Bộ đề bẫy 2:** 50 câu (\`cloud-c1-d2-001\` ➔ \`cloud-c1-d2-050\`) — Phân bổ: ${countAnswers(questionsCloudCh1Trick2)}  

---

## 📑 MỤC LỤC & BẢNG TRA CỨU ĐÁP ÁN NHANH

### BẢNG ĐÁP ÁN NHANH: BỘ ĐỀ BẪY 1 (cloud-c1-d1)
*(Phân bổ đáp án: ${countAnswers(questionsCloudCh1Trick1)})*

${formatMarkdownTable(questionsCloudCh1Trick1)}

---

### BẢNG ĐÁP ÁN NHANH: BỘ ĐỀ BẪY 2 (cloud-c1-d2)
*(Phân bổ đáp án: ${countAnswers(questionsCloudCh1Trick2)})*

${formatMarkdownTable(questionsCloudCh1Trick2)}

---

## 🎯 MA TRẬN 5 DẠNG CÂU HỎI BẪY ĐA DẠNG TRONG BỘ ĐỀ 2

1. **Dạng 1: Bẫy "Chọn khẳng định SAI / KHÔNG CHÍNH XÁC" (24% = 12 câu - Câu 1 đến 12):**  
   Cài cắm các từ khóa ngụy biện tuyệt đối hóa (*luôn luôn, duy nhất, bắt buộc, tự do tiêu dùng không giới hạn*) hoặc đánh tráo khái niệm kỹ thuật trong 5 đặc tính NIST và 4 mô hình triển khai.
2. **Dạng 2: Bẫy "Chọn khẳng định ĐÚNG / CHÍNH XÁC NHẤT" (20% = 10 câu - Câu 13 đến 22):**  
   Khai thác định nghĩa chuẩn NIST SP 800-145, Hypervisor Type 1 Bare-metal, kinh tế đám mây CapEx vs OpEx, SLA, Multi-tenancy, OpenStack và cơ chế Cloud Controller. Các phương án nhiễu sai lệch tinh vi về mặt học thuật.
3. **Dạng 3: Chùm mệnh đề logic phức hợp (I, II, III) (20% = 10 câu - Câu 23 đến 32):**  
   Đánh giá tính chân trị của 3 phát biểu kỹ thuật chuyên sâu về trách nhiệm bảo mật chung (Shared Responsibility), ảo hóa máy chủ, lưu trữ Block vs Object Storage, và chiến lược di chuyển Cloud Migration (Rehosting vs Refactoring).
4. **Dạng 4: Tình huống & Kịch bản kiến trúc doanh nghiệp thực tế (18% = 9 câu - Câu 33 đến 41):**  
   Phân tích tình huống thực tế của ngân hàng (Fintech), startup thương mại điện tử Black Friday/Flash Sale, bệnh viện lưu trữ hồ sơ X-quang/MRI 20 năm, tập đoàn dược phẩm hợp tác nghiên cứu, phòng chống Vendor Lock-in và tối ưu hóa chi phí FinOps.
5. **Dạng 5: Phân biệt khái niệm song sinh dễ nhầm lẫn (18% = 9 câu - Câu 42 đến 50):**  
   So sánh đối đầu trực diện giữa các cặp thuật ngữ kinh điển: Elasticity vs Scalability, Virtualization vs Cloud Computing, Utility Computing vs Cloud, Grid vs Cloud, Multi-tenant vs Multi-instance, Scale Up vs Scale Out, High Availability vs Fault Tolerance, RPO vs RTO, và Public Cloud vs VPC.

---

# 🚀 PHẦN I: NỘI DUNG CHI TIẾT BỘ ĐỀ BẪY 1 (50 CÂU)
*(Mã đề: \`cloud-c1-d1\` • Dải ID: \`cloud-c1-d1-001\` ➔ \`cloud-c1-d1-050\`)*

`;

questionsCloudCh1Trick1.forEach((q, idx) => {
  mdContent += renderQuestion(q, idx + 1);
});

mdContent += `\n# ⚡ PHẦN II: NỘI DUNG CHI TIẾT BỘ ĐỀ BẪY 2 (50 CÂU ĐA DẠNG MỚI)
*(Mã đề: \`cloud-c1-d2\` • Dải ID: \`cloud-c1-d2-001\` ➔ \`cloud-c1-d2-050\`)*

`;

questionsCloudCh1Trick2.forEach((q, idx) => {
  mdContent += renderQuestion(q, idx + 1);
});

const outputPath = path.join(rootDir, "tong-hop-2-de-thi-bay-chuong-1-dien-toan-dam-may.md");
fs.writeFileSync(outputPath, mdContent, "utf-8");
console.log("✅ Đã xuất thành công file tổng hợp:", outputPath);
console.log("Kích thước file:", (Buffer.byteLength(mdContent, "utf-8") / 1024).toFixed(2), "KB");
