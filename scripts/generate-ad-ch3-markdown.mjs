import fs from "fs";
import { questionsAdCh3Part1 } from "../data/questions-ad-ch3-part1.js";
import { questionsAdCh3Part2 } from "../data/questions-ad-ch3-part2.js";

function getDifficultyBadge(diff) {
  if (diff === "easy") return "[🟢 DỄ (NHẬN BIẾT)]";
  if (diff === "medium") return "[🟡 TRUNG BÌNH (THÔNG HIỂU)]";
  if (diff === "hard") return "[🔴 KHÓ (VẬN DỤNG CAO)]";
  return "[CHƯA RÕ]";
}

function getTypeBadge(type) {
  return `[${(type || "single-correct").toUpperCase()}]`;
}

function renderExamMarkdown(questions, examNum, titleDesc) {
  let md = `## BỘ ĐỀ THI SỐ ${examNum} (MÃ ĐỀ: ad-c3-d${examNum})\n\n`;
  md += `*${titleDesc}*\n\n---\n\n`;

  questions.forEach((q, idx) => {
    const qNum = idx + 1;
    const diffBadge = getDifficultyBadge(q.difficulty);
    const typeBadge = getTypeBadge(q.questionType);
    const letters = ["A", "B", "C", "D"];
    const correctLetter = letters[q.answer];
    const correctText = q.options[q.answer];

    md += `#### Câu ${qNum} (${q.id}) — ${diffBadge} ${typeBadge}\n\n`;
    md += `**${q.question}**\n\n`;
    q.options.forEach((opt, optIdx) => {
      md += `- **${letters[optIdx]}.** ${opt}\n`;
    });
    md += `\n> **Đáp án đúng:** **${correctLetter}** — *${correctText}*\n>\n`;
    md += `> **Giải thích chi tiết:** ${q.explanation}\n\n---\n\n`;
  });

  return md;
}

// 1. Generate tong-hop-2-de-thi-chuong-3-phan-tich-thiet-ke-yeu-cau.md
const headerMd = `# TỔNG HỢP 2 BỘ ĐỀ THI TRẮC NGHIỆM CHƯƠNG III: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
*(Tổng cộng 80 câu hỏi học thuật chuẩn mực — Cơ cấu: 30% Dễ - 40% Trung bình - 30% Khó)*

- **Môn học:** Phân tích thiết kế và yêu cầu (Requirements Analysis and Design)
- **Chương:** Chapter 3: Initiation Phase — From Business Events to a System Use Case Model
- **Quy mô:** 2 Bộ đề độc lập (Đề 1 & Đề 2), mỗi đề đúng 40 câu hỏi cố định (Tổng = 80 câu biên soạn mới 100%, 0% trùng lặp)
- **Tỷ lệ độ khó:** 12 Dễ (30%) — 16 Trung bình (40%) — 12 Khó (30%) cho từng đề
- **Tỷ lệ nguồn:** 36 câu Inside (giáo trình ad-ch3.js) + 4 câu Outside (thực tế dự án Use Case & Thiết kế hệ thống)
- **Quy chuẩn kỹ thuật:** Đáp ứng độ lệch chiều dài phương án $\\Delta L = L_{\\max} - L_{\\min} \\le 15$ ký tự trên toàn bộ 80 câu
- **Đa dạng hình thức:** Trắc nghiệm chọn đúng, Chọn sai/ngoại lệ (**KHÔNG/SAI**), Tình huống thực tế (Case study), Ghép cặp phân loại (Matching), Điền khuyết/Trình tự logic (Fill-in)

---

`;

const part1Desc = "Bộ đề số 1 tập trung khảo sát cột mốc LCO của Initiation Phase, định nghĩa Use Case theo Ivar Jacobson, kỹ thuật phân rã sự kiện (Event Decomposition: External, Temporal, State), bảng phân tích sự kiện (Event Table), nhận diện Actor/Use Case, quan hệ <<include>> vs <<extend>>, cấu trúc Use Case Description và các sai lầm kinh điển (Functional Decomposition, CRUD trap).";
const part2Desc = "Bộ đề số 2 đi sâu vào chi tiết các biến thể sự kiện thời gian/trạng thái, quy tắc đặt tên Use Case theo chuẩn Động từ - Danh từ, nguyên tắc Elementary Business Process (EBP), quan hệ kế thừa Use Case & Actor, quy tắc ranh giới hệ thống (System Boundary), điểm mở rộng Extension Point, kiểm chứng kịch bản ngoại lệ và bài học thực tiễn tránh bẫy thiết kế.";

const fullExamMd = headerMd +
  renderExamMarkdown(questionsAdCh3Part1, 1, part1Desc) +
  renderExamMarkdown(questionsAdCh3Part2, 2, part2Desc);

fs.writeFileSync("tong-hop-2-de-thi-chuong-3-phan-tich-thiet-ke-yeu-cau.md", fullExamMd, "utf8");
console.log("Successfully written tong-hop-2-de-thi-chuong-3-phan-tich-thiet-ke-yeu-cau.md");

// 2. Generate docs/analysis-design/ch3-ngan-hang-de-thi-40-cau.md
const docBankMd = `# TÀI LIỆU QUY HOẠCH & NGÂN HÀNG ĐỀ THI TRẮC NGHIỆM CHƯƠNG 3
## MÔN: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU (ANALYSIS & DESIGN)
### CHAPTER 3: INITIATION PHASE — FROM BUSINESS EVENTS TO A SYSTEM USE CASE MODEL

---

## 1. TỔNG QUAN HỆ THỐNG ĐỀ THI

Hệ thống đề thi trắc nghiệm Chương 3 môn **Phân tích thiết kế và yêu cầu** (\`analysis-design\`, mã chương \`ad-ch3\`) được thiết kế đồng bộ theo chuẩn học thuật cao cấp của nền tảng **StudyMaster**.

- **Số lượng bộ đề**: 02 Bộ đề thi tiêu chuẩn (Part 1 & Part 2).
- **Quy mô**: 40 câu hỏi / bộ đề $\\rightarrow$ Tổng cộng **80 câu hỏi trắc nghiệm biên soạn mới 100%, độc lập hoàn toàn (0% trùng lặp)**.
- **Mã định danh (ID)**:
  - Đề 1 (Part 1): \`ad-c3-d1-001\` $\\rightarrow$ \`ad-c3-d1-040\`
  - Đề 2 (Part 2): \`ad-c3-d2-001\` $\\rightarrow$ \`ad-c3-d2-040\`
- **File lưu trữ dữ liệu**:
  - \`data/questions-ad-ch3-part1.js\`
  - \`data/questions-ad-ch3-part2.js\`
- **Tích hợp hệ thống**: Đăng ký qua Curriculum Adapter tại \`lib/curriculum.js\`.

---

## 2. MA TRẬN PHÂN BỔ ĐỘ KHÓ & PHẠM VI KIẾN THỨC

Tuân thủ nghiêm ngặt yêu cầu thiết kế từ người dùng và quy chuẩn kiểm định:

### 2.1. Phân bổ Độ khó (Difficulty Balance)
| Mức độ | Số câu / Đề | Tỷ lệ (%) | Mục tiêu năng lực kiểm tra |
| :--- | :---: | :---: | :--- |
| **🟢 Dễ (Easy)** | 12 câu | **30.0%** | Nhận diện khái niệm, định nghĩa Use Case, Actor, LCO milestone, 3 loại sự kiện, 4 thành phần sơ đồ Use Case. |
| **🟡 Trung bình (Medium)** | 16 câu | **40.0%** | So sánh sâu <<include>> vs <<extend>>, phân tích bảng Event Table, quy tắc đặt tên EBP, cấu trúc Use Case Description. |
| **🔴 Khó (Hard)** | 12 câu | **30.0%** | Xử lý tình huống dự án thực tế (Case study), nhận diện và sửa lỗi bẫy Functional Decomposition, CRUD trap, kiến trúc ngoài. |
| **Tổng cộng** | **40 câu** | **100%** | Đạt chuẩn đề thi chính quy đại học. |

### 2.2. Phân bổ Phạm vi Giáo trình (Scope Balance)
- **Inside (36 câu - 90%)**: Bám sát 100% nội dung 7 phần chính trong bài học \`data/ad-ch3.js\`:
  - **Mục 1**: Initiation Phase & Khái niệm cốt lõi Use Case (Cột mốc LCO, Observable result of value, 4 thành phần UML).
  - **Mục 2**: System Use Cases & Mức độ trừu tượng (Black-box view, EBP standard, User Goal level).
  - **Mục 3**: Event Decomposition Technique (External Event, Temporal Event, State Event, Event Table).
  - **Mục 4**: Nhận diện Actors (Primary Actor, Supporting/Secondary Actor, Offstage/Stakeholder, System Boundary).
  - **Mục 5**: Nhận diện System Use Cases (Quy tắc Verb - Noun, EBP test, ranh giới ca sử dụng).
  - **Mục 6**: Tổ chức mô hình Use Case (<<include>>, <<extend>>, Generalization, Extension Point).
  - **Mục 7**: Sai lầm kinh điển & Cognitive Pipeline (Functional Decomposition, CRUD trap, Login use case, Data flow trap).
- **Outside (4 câu - 10%)**: Vận dụng kỹ nghệ phần mềm và kiến trúc dự án hiện đại:
  - Chuyển dịch Use Case sang User Stories trong Agile/Scrum.
  - Phân định ranh giới Actor/API Gateway trong kiến trúc Microservices.
  - Quản lý yêu cầu phi chức năng (NFRs / Non-functional) trong đặc tả Use Case.
  - Giải pháp thực tế triệt tiêu bẫy Functional Decomposition và CRUD trap.

---

## 3. TIÊU CHUẨN CHỐNG ĐOÁN BỪA (EQUAL OPTION LENGTH)

Hệ thống câu hỏi tuân thủ tuyệt đối quy tắc **Equal Option Length**:
$$\\Delta L = L_{\\max} - L_{\\min} \\le 15 \\text{ ký tự}$$

- Trong từng câu hỏi, độ dài của 4 phương án $A, B, C, D$ xấp xỉ nhau, loại bỏ hoàn toàn hiện tượng "câu dài nhất luôn là đáp án đúng".
- Phương án đúng được phân bổ ngẫu nhiên đều ở các vị trí (Index 0, 1, 2, 3) tại lúc thí sinh luyện tập/thi thử thông qua engine xáo trộn động của \`Quiz.js\`.

---

## 4. ĐA DẠNG CÁC LOẠI HÌNH CÂU HỎI

1. **Trắc nghiệm một lựa chọn đúng (Single Correct)**: Kiểm tra chuẩn kiến thức lý thuyết trọng tâm.
2. **Trắc nghiệm chọn câu SAI / Ngoại lệ (Choose Wrong)**: Từ khóa **SAI / KHÔNG** được viết hoa nổi bật, rèn luyện tư duy phản biện.
3. **Tình huống nghiệp vụ thực tế (Case Study)**: Đặt thí sinh vào vai Lead BA / Software Architect xử lý bài toán ranh giới hệ thống, tích hợp cổng thanh toán, GPS và tối ưu hóa Use Case.
4. **Ghép cặp logic (Matching)**: Kết nối các khái niệm sự kiện, ký hiệu quan hệ UML với định nghĩa tương ứng.
5. **Điền khuyết / Chuỗi quy trình (Fill-in-the-blank)**: Kiểm tra khả năng nắm vững thứ tự các bước trong quy trình phân tích và tài liệu hóa Use Case.

---

## 5. DANH SÁCH FILE LIÊN QUAN

- Mã nguồn đề thi Part 1: \`data/questions-ad-ch3-part1.js\`
- Mã nguồn đề thi Part 2: \`data/questions-ad-ch3-part2.js\`
- Tài liệu tổng hợp 80 câu hỏi và lời giải chi tiết: \`tong-hop-2-de-thi-chuong-3-phan-tich-thiet-ke-yeu-cau.md\`
- Tích hợp hệ thống: \`lib/curriculum.js\`
`;

fs.writeFileSync("docs/analysis-design/ch3-ngan-hang-de-thi-40-cau.md", docBankMd, "utf8");
console.log("Successfully written docs/analysis-design/ch3-ngan-hang-de-thi-40-cau.md");
