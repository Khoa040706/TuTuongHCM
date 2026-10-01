import fs from 'fs';
import { questionsCloudCh3Trick1 } from '../data/questions-cloud-ch3-trick1.js';

const optLabels = ['A', 'B', 'C', 'D'];

const sections = [
  { title: '📌 PHẦN 1: BẢN CHẤT SAAS & 4 ĐẶC TÍNH CỐT LÕI (Câu 1 - 7)', start: 1, end: 7 },
  { title: '📌 PHẦN 2: CÁN CÂN ƯU ĐIỂM & NHƯỢC ĐIỂM CỦA SAAS (Câu 8 - 14)', start: 8, end: 14 },
  { title: '📌 PHẦN 3: KIẾN TRÚC SINGLE-TENANT VS MULTI-TENANT (Câu 15 - 22)', start: 15, end: 22 },
  { title: '📌 PHẦN 4: GIẢI PHÁP OPNSAAS & MÃ NGUỒN MỞ (Câu 23 - 29)', start: 23, end: 29 },
  { title: '📌 PHẦN 5: VẤN ĐỀ TÍCH HỢP: CÔNG NGHỆ MASHUP (Câu 30 - 36)', start: 30, end: 36 },
  { title: '📌 PHẦN 6: KIẾN TRÚC HƯỚNG DỊCH VỤ - SOA (Câu 37 - 43)', start: 37, end: 43 },
  { title: '📌 PHẦN 7: SAAS THỰC TIỄN, BẢO MẬT & XU HƯỚNG MỚI (Câu 44 - 50)', start: 44, end: 50 }
];

let md = '# BỘ ĐỀ BẪY 1 — CHƯƠNG 3: SOFTWARE AS A SERVICE (SaaS)\n';
md += '*(50 Câu hỏi Bẫy Vận dụng cao — 100% Hard — Phân tích Cơ chế Bẫy Tư duy & Đáp án Giải thích Chi tiết)*\n\n';
md += '- **Môn học:** Điện toán đám mây (Cloud Computing)\n';
md += '- **Chương:** Chương 3 — Software as a Service (SaaS)\n';
md += '- **Số lượng:** Đúng 50 câu hỏi trắc nghiệm\n';
md += '- **Độ khó:** 100% Vận dụng cao (Hard / Trick)\n';
md += '- **Chuẩn kỹ thuật:** Đáp ứng độ lệch chiều dài phương án $\\Delta L = L_{\\max} - L_{\\min} \\le 15$ ký tự, 100% có `trickDetails`\n\n';
md += '---\n\n';

let currentSecIdx = 0;

questionsCloudCh3Trick1.forEach((q, idx) => {
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
    const ansLetter = optLabels[questionsCloudCh3Trick1[qNum - 1].answer];
    row.push('**' + qNum + '**', '**' + ansLetter + '**');
  }
  md += '| ' + row.join(' | ') + ' |\n';
}
md += '\n';

fs.writeFileSync('./de-bay-chuong-3-dien-toan-dam-may.md', md, 'utf8');
console.log('Successfully generated de-bay-chuong-3-dien-toan-dam-may.md!');
