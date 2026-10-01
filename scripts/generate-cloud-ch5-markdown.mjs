import fs from 'fs';
import { questionsCloudCh5Trick1 } from '../data/questions-cloud-ch5-trick1.js';

const optLabels = ['A', 'B', 'C', 'D'];

const sections = [
  { title: '📌 PHẦN 1: KHÁI NIỆM CỐT LÕI & SHARED RESPONSIBILITY TRONG IAAS (Câu 1 - 7)', start: 1, end: 7 },
  { title: '📌 PHẦN 2: BA TRỤ CỘT HẠ TẦNG IAAS: COMPUTE, STORAGE, NETWORK (Câu 8 - 15)', start: 8, end: 15 },
  { title: '📌 PHẦN 3: LỢI ÍCH KINH TẾ & KỸ THUẬT CỦA IAAS (Câu 16 - 22)', start: 16, end: 22 },
  { title: '📌 PHẦN 4: THÁCH THỨC, RỦI RO BẢO MẬT & QUẢN TRỊ IAAS (Câu 23 - 29)', start: 23, end: 29 },
  { title: '📌 PHẦN 5: TÍNH SẴN SÀNG CAO (HA), KHẮC PHỤC THẢM HỌA (DR) & DI CHUYỂN ĐÁM MÂY (Câu 30 - 36)', start: 30, end: 36 },
  { title: '📌 PHẦN 6: IAAS VS PAAS VS SAAS & TIÊU CHÍ LỰA CHỌN NHÀ CUNG CẤP (Câu 37 - 43)', start: 37, end: 43 },
  { title: '📌 PHẦN 7: CÁC NHÀ CUNG CẤP IAAS HÀNG ĐẦU & TRƯỜNG HỢP SỬ DỤNG THỰC TIỄN (Câu 44 - 50)', start: 44, end: 50 }
];

let md = '# BỘ ĐỀ BẪY 1 — CHƯƠNG 5: INFRASTRUCTURE AS A SERVICE (IaaS)\n';
md += '*(50 Câu hỏi Bẫy Vận dụng cao — 100% Hard — Phân tích Cơ chế Bẫy Tư duy & Đáp án Giải thích Chi tiết)*\n\n';
md += '- **Môn học:** Điện toán đám mây (Cloud Computing)\n';
md += '- **Chương:** Chương 5 — Infrastructure as a Service (IaaS)\n';
md += '- **Số lượng:** Đúng 50 câu hỏi trắc nghiệm\n';
md += '- **Độ khó:** 100% Vận dụng cao (Hard / Trick)\n';
md += '- **Chuẩn kỹ thuật:** Đáp ứng độ lệch chiều dài phương án $\\Delta L = L_{\\max} - L_{\\min} \\le 15$ ký tự, 100% có `trickDetails`\n\n';
md += '---\n\n';

let currentSecIdx = 0;

questionsCloudCh5Trick1.forEach((q, idx) => {
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
    const ansLetter = optLabels[questionsCloudCh5Trick1[qNum - 1].answer];
    row.push('**' + qNum + '**', '**' + ansLetter + '**');
  }
  md += '| ' + row.join(' | ') + ' |\n';
}
md += '\n';

fs.writeFileSync('./de-bay-chuong-5-dien-toan-dam-may.md', md, 'utf8');
console.log('Successfully generated de-bay-chuong-5-dien-toan-dam-may.md!');
