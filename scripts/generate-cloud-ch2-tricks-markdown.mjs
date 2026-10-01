import fs from "node:fs";
import path from "node:path";
import { questionsCloudCh2Trick1 } from "../data/questions-cloud-ch2-trick1.js";
import { questionsCloudCh2Trick2 } from "../data/questions-cloud-ch2-trick2.js";

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

let mdContent = `# TÀI LIỆU TỔNG HỢP: 2 BỘ ĐỀ THI BẪY CHƯƠNG II — MÔN ĐIỆN TOÁN ĐÁM MÂY

> **Môn học:** Điện toán đám mây (Cloud Computing)  
> **Chương:** Chương 2 — Điện toán đám mây – Hạ tầng và Công nghệ (Cloud Infrastructure & Technology)  
> **Dữ liệu giáo trình chuẩn:** \`data/cloud-computing-chapter-2.js\`  
> **Loại tài liệu:** Ngân hàng đề thi BẪY học thuật chuyên sâu (Trick Exam Sets)  
> **Tổng quy mô:** 2 Bộ đề độc lập — Tổng cộng **100 câu hỏi bẫy vận dụng cao** (100% Hard, 100% có \`trickDetails\`)  
> **Độ lệch chiều dài:** $\\Delta L = L_{\\max} - L_{\\min} \\le 15$ ký tự trên 100% câu hỏi (Triệt tiêu hoàn toàn trực giác đoán bừa)  
> **Bộ đề bẫy 1:** 50 câu (\`cloud-c2-d1-001\` ➔ \`cloud-c2-d1-050\`) — Phân bổ: ${countAnswers(questionsCloudCh2Trick1)}  
> **Bộ đề bẫy 2:** 50 câu (\`cloud-c2-d2-001\` ➔ \`cloud-c2-d2-050\`) — Phân bổ: ${countAnswers(questionsCloudCh2Trick2)}  

---

## 📑 MỤC LỤC & BẢNG TRA CỨU ĐÁP ÁN NHANH

### BẢNG ĐÁP ÁN NHANH: BỘ ĐỀ BẪY 1 (cloud-c2-d1)
*(Phân bổ đáp án: ${countAnswers(questionsCloudCh2Trick1)})*

${formatMarkdownTable(questionsCloudCh2Trick1)}

---

### BẢNG ĐÁP ÁN NHANH: BỘ ĐỀ BẪY 2 (cloud-c2-d2)
*(Phân bổ đáp án: ${countAnswers(questionsCloudCh2Trick2)})*

${formatMarkdownTable(questionsCloudCh2Trick2)}

---

## 🎯 MA TRẬN 5 DẠNG CÂU HỎI BẪY ĐA DẠNG TRONG BỘ ĐỀ 2

1. **Dạng 1: Bẫy "Chọn khẳng định SAI / KHÔNG CHÍNH XÁC" (24% = 12 câu - Câu 1 đến 12):**  
   Cài cắm các từ khóa ngụy biện về bản chất module hóa của PoD, nghịch đảo chỉ số PUE (>2.0 là tiết kiệm), đảo lộn khí động học sàn nâng (thổi gió lạnh vào mặt sau quạt xả máy chủ), hòa trộn khí nóng và lạnh, tỷ lệ lưu lượng East-West, nối vòng switch Spine, giao thức tệp NAS gán cho SAN, khả năng chịu lỗi của RAID 5, phân quyền Ring 0 cho ứng dụng người dùng, 17 chỉ lệnh nhạy cảm của x86, yêu cầu sửa mã nguồn Windows trong Paravirtualization, và ngắt kết nối Shared Storage trong vMotion.
2. **Dạng 2: Bẫy "Chọn khẳng định ĐÚNG / CHÍNH XÁC NHẤT" (20% = 10 câu - Câu 13 đến 22):**  
   Khai thác công thức chuẩn PUE = Tổng năng lượng / Điện IT, mô hình phòng máy tối Lights-Out Data Center, ưu điểm độ trễ cố định 2 chặng của Leaf-Spine, Link Aggregation (LACP), Thin Provisioning, chế độ phần cứng VMX Root/Non-root của Intel VT-x, Binary Translation trong RAM, SR-IOV Passthrough, cơ chế Dirty Pages Tracking trong vMotion, và bản chất khác biệt giữa Ảo hóa và Multiboot.
3. **Dạng 3: Chùm mệnh đề logic phức hợp (I, II, III) (20% = 10 câu - Câu 23 đến 32):**  
   Đánh giá tính chân trị của các phát biểu chuyên sâu về tản nhiệt buồng kín (Containment), luồng mạng North-South vs East-West, phân loại lưu trữ DAS vs NAS vs SAN, các cấp độ bảo vệ RAID (0, 1, 6), 3 mức đặc quyền Ring x86, phương pháp ảo hóa CPU, Hypervisor Type 1 vs Type 2, 3 cấp độ Virtual I/O, và điều kiện tiên quyết của Live Migration.
4. **Dạng 4: Tình huống & Kịch bản kiến trúc doanh nghiệp thực tế (18% = 9 câu - Câu 33 đến 41):**  
   Phân tích xử lý sự cố quá nhiệt cục bộ do quẩn khí nóng (Air Recirculation), giải quyết nghẽn mạng Hadoop/Spark bằng kiến trúc Leaf-Spine ECMP, lựa chọn SAN Fibre Channel cho CSDL giao dịch tốc độ cao, cơ chế dự phòng cháy card mạng NIC Teaming, quy trình Rebuild mảng đĩa RAID 5 khi hỏng 1 ổ cứng, bảo trì không gián đoạn dịch vụ bằng vMotion, khắc phục lỗi vMotion không hội tụ (CPU Throttling), chạy Windows bản quyền đóng mã nguồn trên Cloud, và tối ưu hóa năng lượng toàn diện bằng Lights-Out DC.
5. **Dạng 5: Phân biệt các cặp khái niệm song sinh dễ nhầm lẫn (18% = 9 câu - Câu 42 đến 50):**  
   So sánh đối đầu trực diện: North-South vs East-West Traffic, SAN vs NAS, Thin vs Thick Provisioning, Full Virtualization vs Paravirtualization, Hypervisor Type 1 vs Type 2, Cold vs Live Migration, Hot Aisle Containment vs Cold Aisle Containment, RAID 1 vs RAID 5, và Hardware-assisted Virtualization vs Binary Translation.

---

# 🚀 PHẦN I: NỘI DUNG CHI TIẾT BỘ ĐỀ BẪY 1 (50 CÂU)
*(Mã đề: \`cloud-c2-d1\` • Dải ID: \`cloud-c2-d1-001\` ➔ \`cloud-c2-d1-050\`)*

`;

questionsCloudCh2Trick1.forEach((q, idx) => {
  mdContent += renderQuestion(q, idx + 1);
});

mdContent += `\n# ⚡ PHẦN II: NỘI DUNG CHI TIẾT BỘ ĐỀ BẪY 2 (50 CÂU ĐA DẠNG MỚI)
*(Mã đề: \`cloud-c2-d2\` • Dải ID: \`cloud-c2-d2-001\` ➔ \`cloud-c2-d2-050\`)*

`;

questionsCloudCh2Trick2.forEach((q, idx) => {
  mdContent += renderQuestion(q, idx + 1);
});

const outputPath = path.join(rootDir, "tong-hop-2-de-thi-bay-chuong-2-dien-toan-dam-may.md");
fs.writeFileSync(outputPath, mdContent, "utf-8");
console.log("✅ Đã xuất thành công file tổng hợp:", outputPath);
console.log("Kích thước file:", (Buffer.byteLength(mdContent, "utf-8") / 1024).toFixed(2), "KB");
