import fs from 'fs';
import { questionsDbCh1Trick1 } from '../data/questions-db-ch1-trick1.js';
import { questionsDbCh1Trick2 } from '../data/questions-db-ch1-trick2.js';

// ========================================================================
// KỊCH BẢN XUẤT FILE MARKDOWN TỔNG HỢP 2 BỘ ĐỀ THI BẪY CHƯƠNG I
// MÔN: HỆ CƠ SỞ DỮ LIỆU — CHƯƠNG I: TỔNG QUAN VÀ GIỚI THIỆU HỆ CƠ SỞ DỮ LIỆU
// FILE: tong-hop-2-de-thi-bay-chuong-1-co-so-du-lieu.md
// ========================================================================

const optLetters = ['A', 'B', 'C', 'D'];

function generateQuickAnswerTable(questions, title) {
  let table = `### ${title}\n\n`;
  table += `| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |\n`;
  table += `| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |\n`;

  for (let r = 0; r < 10; r++) {
    let row = '';
    for (let c = 0; c < 5; c++) {
      let idx = c * 10 + r;
      if (idx < questions.length) {
        let qNum = idx + 1;
        let ans = optLetters[questions[idx].answer];
        row += `| **${qNum}** | \`${ans}\` `;
      } else {
        row += `| - | - `;
      }
    }
    row += `|\n`;
    table += row;
  }
  return table;
}

function generateQuestionsSection(questions, examName, examCode) {
  let md = `## ${examName} (${examCode})\n\n`;
  md += `> **Quy mô:** 50 câu hỏi bẫy vận dụng cao (100% Hard / Trick Questions)\n`;
  md += `> **Mã định danh:** \`${examCode}-001\` đến \`${examCode}-050\`\n\n`;

  questions.forEach((q, idx) => {
    const qNum = idx + 1;
    md += `### Câu ${qNum} [${q.id}]\n\n`;
    md += `${q.question}\n\n`;

    q.options.forEach((opt, oIdx) => {
      const letter = optLetters[oIdx];
      const isCorrect = oIdx === q.answer;
      md += `- **${letter}.** ${opt}${isCorrect ? '  *(Đáp án đúng)*' : ''}\n`;
    });

    md += `\n- **Đáp án chính xác:** \`${optLetters[q.answer]}\`\n`;
    md += `- **Giải thích học thuật:** ${q.explanation}\n`;

    if (q.trickDetails) {
      md += `- **Phân tích bẫy tư duy (\`trickDetails\`):**\n`;
      md += `  + ⚠️ *Vì sao dễ mắc bẫy (\`whyTrapped\`):* ${q.trickDetails.whyTrapped}\n`;
      md += `  + 🎯 *Từ khóa bẫy (\`trickWord\`):* \`${q.trickDetails.trickWord}\`\n`;
      md += `  + 📖 *Trích dẫn giáo trình (\`citation\`):* ${q.trickDetails.citation}\n`;
      md += `  + 💡 *Mẹo phản xạ nhanh (\`tip\`):* ${q.trickDetails.tip}\n`;
    }

    md += `\n---\n\n`;
  });

  return md;
}

let content = `# TÀI LIỆU TỔNG HỢP: 2 BỘ ĐỀ THI BẪY CHƯƠNG I — MÔN HỆ CƠ SỞ DỮ LIỆU

> **Môn học:** Hệ cơ sở dữ liệu (Database System)  
> **Chương:** Chương I — Tổng quan và giới thiệu Hệ cơ sở dữ liệu  
> **Dữ liệu giáo trình chuẩn:** \`data/database.js\`  
> **Loại tài liệu:** Ngân hàng đề thi BẪY học thuật chuyên sâu (Trick Exam Sets)  
> **Tổng quy mô:** 2 Bộ đề độc lập — Tổng cộng **100 câu hỏi bẫy vận dụng cao** (100% Hard, 100% có \`trickDetails\`)  
> **Độ lệch chiều dài:** $\\Delta L = L_{\\max} - L_{\\min} \\le 15$ ký tự trên 100% câu hỏi (Triệt tiêu hoàn toàn đoán bừa)  
> **Cân bằng đáp án:** Tổng 2 đề đúng 25 A - 25 B - 25 C - 25 D (Tỷ lệ 25% mỗi lựa chọn)

---

## MỤC LỤC & BẢNG TRA CỨU ĐÁP ÁN NHANH

${generateQuickAnswerTable(questionsDbCh1Trick1, 'BẢNG ĐÁP ÁN NHANH: BỘ ĐỀ BẪY 1 (db-c1-t1) — 13A, 13B, 12C, 12D')}

---

${generateQuickAnswerTable(questionsDbCh1Trick2, 'BẢNG ĐÁP ÁN NHANH: BỘ ĐỀ BẪY 2 (db-c1-t2) — 12A, 12B, 13C, 13D')}

---

## MA TRẬN 6 DẠNG CÂU HỎI BẪY TRONG 2 BỘ ĐỀ

1. **Bẫy "Chọn khẳng định SAI / KHÔNG ĐÚNG" (20% = 10 câu/đề):** Cài cắm từ khóa ngụy biện tuyệt đối hóa (*luôn luôn, duy nhất, bắt buộc*) hoặc đảo ngược nguyên nhân - kết quả.
2. **Bẫy đối sánh & phân biệt khái niệm song sinh (20% = 10 câu/đề):** So sánh trực diện CSDL vs HQTCSDL, File Processing vs DBMS, Thực thể mạnh vs Thực thể yếu, Lược đồ quan niệm vs Khung nhìn ngoài.
3. **Chùm mệnh đề logic phức hợp I - II - III (16% = 8 câu/đề):** Đánh giá 3 phát biểu kỹ thuật chuyên sâu về kiến trúc 3 mức ANSI-SPARC, tính độc lập dữ liệu và mô hình CSDL; chọn tổ hợp đúng.
4. **Bẫy điền khuyết thuật ngữ kỹ thuật \`(...)\` (16% = 8 câu/đề):** Trích xuất chuẩn xác các định nghĩa giáo trình; phương án nhiễu sử dụng thuật ngữ gần giống nhưng sai lệch bản chất kỹ thuật.
5. **Bẫy cấu trúc toán học của 5 Mô hình dữ liệu (14% = 7 câu/đề):** Khai thác sâu cấu trúc toán học của Network (Đồ thị có hướng/Set type), Hierarchical (Cây/1 cha), Relational (Tập k-bộ), ER (Số ngôi), OODM (Encapsulation/Kế thừa bội).
6. **Tình huống thực tế & Phân tích ca nghiệp vụ (14% = 7 câu/đề):** Tình huống ngắt điện khi giao dịch (Atomicity), xung đột đọc/ghi đồng thời (Concurrency), phân quyền DBA vs Dev vs End-user.

---

${generateQuestionsSection(questionsDbCh1Trick1, 'BỘ ĐỀ BẪY SỐ 1', 'db-c1-t1')}

---

${generateQuestionsSection(questionsDbCh1Trick2, 'BỘ ĐỀ BẪY SỐ 2', 'db-c1-t2')}
`;

fs.writeFileSync('tong-hop-2-de-thi-bay-chuong-1-co-so-du-lieu.md', content, 'utf-8');
console.log('✅ Đã xuất thành công: tong-hop-2-de-thi-bay-chuong-1-co-so-du-lieu.md');
