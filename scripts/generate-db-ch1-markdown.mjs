import fs from 'fs';
import { questionsDbCh1Part1 } from '../data/questions-db-ch1-part1.js';
import { questionsDbCh1Part2 } from '../data/questions-db-ch1-part2.js';

const optLabels = ['A', 'B', 'C', 'D'];

const sections = [
  { title: '📌 CHUYÊN ĐỀ 1: HỆ THỐNG XỬ LÝ TẬP TIN & NHU CẦU CSDL (Câu 1 - 8)', start: 1, end: 8 },
  { title: '📌 CHUYÊN ĐỀ 2: CƠ SỞ DỮ LIỆU & HỆ QUẢN TRỊ CSDL (DBMS) (Câu 9 - 18)', start: 9, end: 18 },
  { title: '📌 CHUYÊN ĐỀ 3: KIẾN TRÚC 3 MỨC ANSI-SPARC & TÍNH ĐỘC LẬP DỮ LIỆU (Câu 19 - 26)', start: 19, end: 26 },
  { title: '📌 CHUYÊN ĐỀ 4: CÁC MÔ HÌNH DỮ LIỆU (DATA MODELS) (Câu 27 - 40)', start: 27, end: 40 }
];

function renderExam(title, desc, questions) {
  let text = `## ${title}\n\n`;
  text += `*${desc}*\n\n`;
  text += `---\n\n`;

  let currentSecIdx = 0;

  questions.forEach((q, idx) => {
    const num = idx + 1;
    if (currentSecIdx < sections.length && num === sections[currentSecIdx].start) {
      text += `### ${sections[currentSecIdx].title}\n\n`;
      currentSecIdx++;
    }

    const diffBadge = q.difficulty === 'easy' ? '🟢 DỄ (NHẬN BIẾT)' : q.difficulty === 'medium' ? '🟡 TRUNG BÌNH (THÔNG HIỂU)' : '🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)';

    text += `#### Câu ${num} (${q.id}) — [${diffBadge}]\n\n`;
    text += `**${q.question}**\n\n`;

    q.options.forEach((opt, oIdx) => {
      text += `- **${optLabels[oIdx]}.** ${opt}\n`;
    });

    const correctLetter = optLabels[q.answer];
    const correctText = q.options[q.answer];

    text += `\n> **Đáp án đúng:** **${correctLetter}** — *${correctText}*\n>\n`;
    text += `> **Giải thích chi tiết:** ${q.explanation}\n`;

    if (q.difficulty === 'hard' && q.trickDetails) {
      text += `>\n`;
      text += `> **Phân tích bẫy tư duy (Trick Details):**\n`;
      text += `> - ⚠️ **Vì sao dễ sập bẫy:** ${q.trickDetails.whyTrapped}\n`;
      text += `> - 🎯 **Từ khóa gài bẫy:** \`${q.trickDetails.trickWord}\`\n`;
      text += `> - 📖 **Dẫn chứng giáo trình:** *${q.trickDetails.citation}*\n`;
      text += `> - 💡 **Mẹo hóa giải:** ${q.trickDetails.tip}\n`;
    }

    text += `\n---\n\n`;
  });

  // Bảng tra cứu đáp án nhanh 4 cột x 10 hàng
  text += `### 📊 BẢNG ĐÁP ÁN NHANH — ${title.toUpperCase()}\n\n`;
  text += `| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |\n`;
  text += `|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n`;

  for (let r = 0; r < 10; r++) {
    const row = [];
    for (let c = 0; c < 4; c++) {
      const qNum = r + 1 + c * 10;
      const ansLetter = optLabels[questions[qNum - 1].answer];
      row.push(`**${qNum}**`, `**${ansLetter}**`);
    }
    text += `| ${row.join(' | ')} |\n`;
  }
  text += `\n\n`;

  return text;
}

let fullMd = `# TỔNG HỢP 2 BỘ ĐỀ THI TRẮC NGHIỆM CHƯƠNG I: HỆ CƠ SỞ DỮ LIỆU
*(Tổng cộng 80 câu hỏi học thuật chuẩn mực — Cơ cấu: 30% Dễ - 40% Trung bình - 30% Khó / Bẫy)*

- **Môn học:** Hệ cơ sở dữ liệu (Database System)
- **Chương:** Chương I — Tổng quan và giới thiệu hệ cơ sở dữ liệu
- **Quy mô:** 2 Bộ đề độc lập (Đề 1 & Đề 2), mỗi đề đúng 40 câu hỏi (Tổng = 80 câu)
- **Tỷ lệ độ khó:** 12 Dễ (30%) — 16 Trung bình (40%) — 12 Khó (30%) cho từng đề
- **Quy chuẩn kỹ thuật:** Đáp ứng độ lệch chiều dài phương án $\\Delta L = L_{\\max} - L_{\\min} \\le 15$ ký tự trên toàn bộ 80 câu
- **Bẫy tư duy:** 100% câu hỏi Khó đều có trường \`trickDetails\` ({ \`whyTrapped\`, \`trickWord\`, \`citation\`, \`tip\` })
- **Phân bổ đáp án:** Cân bằng tuyệt đối 10 A, 10 B, 10 C, 10 D trên từng bộ đề

---\n\n`;

fullMd += renderExam(
  'BỘ ĐỀ THI SỐ 1 (MÃ ĐỀ: db-c1-d1)',
  'Bộ đề số 1 tập trung khảo sát toàn diện kiến thức nền tảng, đối sánh hệ thống tập tin với CSDL, kiến trúc 3 mức ANSI-SPARC và giải phẫu 5 mô hình dữ liệu kinh điển.',
  questionsDbCh1Part1
);

fullMd += `\n\n=========================================================================================\n\n`;

fullMd += renderExam(
  'BỘ ĐỀ THI SỐ 2 (MÃ ĐỀ: db-c1-d2)',
  'Bộ đề số 2 tiếp cận từ các tình huống thực tiễn, phân tích kiến trúc chuyên sâu, cơ chế quản lý giao tác, 2 tầng ánh xạ dữ liệu và nguyên tắc chuẩn mực của RDBMS.',
  questionsDbCh1Part2
);

fs.writeFileSync('./tong-hop-2-de-thi-chuong-1-co-so-du-lieu.md', fullMd, 'utf8');
console.log('Successfully generated tong-hop-2-de-thi-chuong-1-co-so-du-lieu.md!');
