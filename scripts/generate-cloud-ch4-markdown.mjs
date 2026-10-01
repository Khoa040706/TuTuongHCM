import fs from 'fs';
import { questionsCloudCh4Trick1 } from '../data/questions-cloud-ch4-trick1.js';

const optLabels = ['A', 'B', 'C', 'D'];

const sections = [
  { title: '📌 PHẦN 1: BẢN CHẤT PAAS & RANH GIỚI TRÁCH NHIỆM (Câu 1 - 7)', start: 1, end: 7 },
  { title: '📌 PHẦN 2: LỊCH SỬ 4 GIAI ĐOẠN & 4 ĐỘNG LỰC TIẾN HÓA (Câu 8 - 14)', start: 8, end: 14 },
  { title: '📌 PHẦN 3: 4 NHÓM LỢI ÍCH CỐT LÕI CỦA PAAS (Câu 15 - 21)', start: 15, end: 21 },
  { title: '📌 PHẦN 4: 3 NHƯỢC ĐIỂM & THÁCH THỨC SỐNG CÒN (Câu 22 - 28)', start: 22, end: 28 },
  { title: '📌 PHẦN 5: KHẢO SÁT 4 GÃ KHỔNG LỒ PAAS THỰC TẾ (Câu 29 - 35)', start: 29, end: 35 },
  { title: '📌 PHẦN 6: TƯƠNG LAI PAAS & SERVERLESS FAAS (Câu 36 - 43)', start: 36, end: 43 },
  { title: '📌 PHẦN 7: 6 CHIỀU GIÁ TRỊ DOANH NGHIỆP & 6 TIÊU CHÍ PAAS UX (Câu 44 - 50)', start: 44, end: 50 }
];

let md = '# BỘ ĐỀ BẪY 1 — CHƯƠNG 4: PLATFORM AS A SERVICE (PaaS)\n';
md += '*(50 Câu hỏi Bẫy Vận dụng cao — 100% Hard — Phân tích Cơ chế Bẫy Tư duy & Đáp án Giải thích Chi tiết)*\n\n';
md += '- **Môn học:** Điện toán đám mây (Cloud Computing)\n';
md += '- **Chương:** Chương 4 — Platform as a Service (PaaS)\n';
md += '- **Số lượng:** Đúng 50 câu hỏi trắc nghiệm\n';
md += '- **Độ khó:** 100% Vận dụng cao (Hard / Trick)\n';
md += '- **Chuẩn kỹ thuật:** Đáp ứng độ lệch chiều dài phương án $\\Delta L = L_{\\max} - L_{\\min} \\le 15$ ký tự, 100% có `trickDetails`\n\n';
md += '---\n\n';

let currentSecIdx = 0;

questionsCloudCh4Trick1.forEach((q, idx) => {
  const num = idx + 1;
  if (currentSecIdx < sections.length && num === sections[currentSecIdx].start) {
    md += '## ' + sections[currentSecIdx].title + '\n\n';
    currentSecIdx++;
  }

  md += '### Câu ' + num + ' (' + q.id + ')\n\n';
  md += '**' + q.question + '**\n\n';

  q.options.forEach((opt, oIdx) => {
    md += '- **' + optLabels[oIdx] + '.** ' + opt + '\n';
  });

  const correctLetter = optLabels[q.answer];
  const correctText = q.options[q.answer];

  md += '\n> **Đáp án đúng:** **' + correctLetter + '** — *' + correctText + '*\n>\n';
  md += '> **Giải thích chi tiết:** ' + q.explanation + '\n>\n';
  md += '> **Phân tích bẫy tư duy (Trick Details):**\n';
  md += '> - ⚠️ **Vì sao dễ sập bẫy:** ' + q.trickDetails.whyTrapped + '\n';
  md += '> - 🎯 **Từ khóa gài bẫy:** `' + q.trickDetails.trickWord + '`\n';
  md += '> - 📖 **Dẫn chứng giáo trình:** *' + q.trickDetails.citation + '*\n';
  md += '> - 💡 **Mẹo hóa giải:** ' + q.trickDetails.tip + '\n\n';
  md += '---\n\n';
});

// Bảng đáp án tổng hợp nhanh 5 cột x 10 hàng
md += '## 📊 BẢNG ĐÁP ÁN TỔNG HỢP NHANH (50 CÂU)\n\n';
md += '| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |\n';
md += '|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n';

for (let r = 0; r < 10; r++) {
  const row = [];
  for (let c = 0; c < 5; c++) {
    const qNum = r + 1 + c * 10;
    const ansLetter = optLabels[questionsCloudCh4Trick1[qNum - 1].answer];
    row.push('**' + qNum + '**', '**' + ansLetter + '**');
  }
  md += '| ' + row.join(' | ') + ' |\n';
}
md += '\n';

fs.writeFileSync('./de-bay-chuong-4-dien-toan-dam-may.md', md, 'utf8');
console.log('Successfully generated de-bay-chuong-4-dien-toan-dam-may.md!');
