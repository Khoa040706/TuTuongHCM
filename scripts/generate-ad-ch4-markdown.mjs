import fs from "fs";
import { questionsAdCh4Part1 } from "../data/questions-ad-ch4-part1.js";
import { questionsAdCh4Part2 } from "../data/questions-ad-ch4-part2.js";

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
  let md = `## BỘ ĐỀ THI SỐ ${examNum} (MÃ ĐỀ: ad-c4-d${examNum})\n\n`;
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

// 1. Generate tong-hop-2-de-thi-chuong-4-phan-tich-thiet-ke-yeu-cau.md
const headerMd = `# TỔNG HỢP 2 BỘ ĐỀ THI TRẮC NGHIỆM CHƯƠNG IV: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
*(Tổng cộng 80 câu hỏi học thuật chuẩn mực — Cơ cấu: 30% Dễ - 40% Trung bình - 30% Khó)*

- **Môn học:** Phân tích thiết kế và yêu cầu (Requirements Analysis and Design)
- **Chương:** Chapter 4: Discovery Phase I — Baseline, Elicitation & Use Case Foundations
- **Quy mô:** 2 Bộ đề độc lập (Đề 1 & Đề 2), mỗi đề đúng 40 câu hỏi cố định (Tổng = 80 câu biên soạn mới 100%, 0% trùng lặp)
- **Tỷ lệ độ khó:** 12 Dễ (30%) — 16 Trung bình (40%) — 12 Khó (30%) cho từng đề
- **Tỷ lệ nguồn:** 36 câu Inside (giáo trình ad-ch4.js) + 4 câu Outside (thực tế dự án Baseline, Elicitation & Use Case)
- **Quy chuẩn kỹ thuật:** Đáp ứng độ lệch chiều dài phương án $\\Delta L = L_{\\max} - L_{\\min} \\le 15$ ký tự trên toàn bộ 80 câu
- **Đa dạng hình thức:** Trắc nghiệm chọn đúng, Chọn sai/ngoại lệ (**KHÔNG/SAI**), Tình huống thực tế (Case study), Ghép cặp phân loại (Matching), Điền khuyết/Trình tự logic (Fill-in)

---

`;

const part1Desc = "Bộ đề số 1 tập trung khảo sát bản chất Baseline là Snapshot & Stable Reference, chu trình 5 hoạt động Discovery (Elicit -> Analyze -> Specify -> Validate -> Manage), phân tích hành vi Behavioral Analysis (WHAT) vs Structural Analysis (HOW), 4 thành phần chuẩn mực của Use Case Diagram, 3 cấp độ mô tả và 9 trường Fully-Dressed, bài tập Thư viện (Reserve Book) và kỹ nghệ phân gói Packages.";
const part2Desc = "Bộ đề số 2 đi sâu vào tính chất cam kết hợp đồng của Baseline, xử lý phiếu yêu cầu thay đổi (CR & CCB), kỹ thuật khơi gợi phỏng vấn và quan sát thực địa, tài liệu đặc tả bổ sung Supplementary Specification (NFRs), vai trò Mục lục của Use Case Diagram, trường Trigger, luồng hội thoại hai chiều, phân biệt mượn sách Borrow Book vs Reserve Book và xử lý ngoại lệ.";

const fullExamMd = headerMd +
  renderExamMarkdown(questionsAdCh4Part1, 1, part1Desc) +
  renderExamMarkdown(questionsAdCh4Part2, 2, part2Desc);

fs.writeFileSync("tong-hop-2-de-thi-chuong-4-phan-tich-thiet-ke-yeu-cau.md", fullExamMd, "utf8");
console.log("Successfully written tong-hop-2-de-thi-chuong-4-phan-tich-thiet-ke-yeu-cau.md");

// 2. Generate docs/analysis-design/ch4-ngan-hang-de-thi-40-cau.md
const docBankMd = `# TÀI LIỆU QUY HOẠCH & NGÂN HÀNG ĐỀ THI TRẮC NGHIỆM CHƯƠNG 4
## MÔN: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU (ANALYSIS & DESIGN)
### CHAPTER 4: DISCOVERY PHASE I — BASELINE, ELICITATION & USE CASE FOUNDATIONS

---

## 1. TỔNG QUAN HỆ THỐNG ĐỀ THI

Hệ thống đề thi trắc nghiệm Chương 4 môn **Phân tích thiết kế và yêu cầu** (\`analysis-design\`, mã chương \`ad-ch4\`) được thiết kế đồng bộ theo chuẩn học thuật cao cấp của nền tảng **StudyMaster**.

- **Số lượng bộ đề**: 02 Bộ đề thi tiêu chuẩn (Part 1 & Part 2).
- **Quy mô**: 40 câu hỏi / bộ đề $\\rightarrow$ Tổng cộng **80 câu hỏi trắc nghiệm biên soạn mới 100%, độc lập hoàn toàn (0% trùng lặp)**.
- **Mã định danh (ID)**:
  - Đề 1 (Part 1): \`ad-c4-d1-001\` $\\rightarrow$ \`ad-c4-d1-040\`
  - Đề 2 (Part 2): \`ad-c4-d2-001\` $\\rightarrow$ \`ad-c4-d2-040\`
- **File lưu trữ dữ liệu**:
  - \`data/questions-ad-ch4-part1.js\`
  - \`data/questions-ad-ch4-part2.js\`
- **Tích hợp hệ thống**: Đăng ký qua Curriculum Adapter tại \`lib/curriculum.js\`.

---

## 2. MA TRẬN PHÂN BỔ ĐỘ KHÓ & PHẠM VI KIẾN THỨC

Tuân thủ nghiêm ngặt yêu cầu thiết kế từ người dùng và quy chuẩn kiểm định:

### 2.1. Phân bổ Độ khó (Difficulty Balance)
| Mức độ | Số câu / Đề | Tỷ lệ (%) | Mục tiêu năng lực kiểm tra |
| :--- | :---: | :---: | :--- |
| **🟢 Dễ (Easy)** | 12 câu | **30.0%** | Nhận diện khái niệm Baseline, 5 hoạt động Discovery, 4 thành phần Use Case Diagram, 3 cấp độ mô tả (Brief, Casual, Fully-Dressed). |
| **🟡 Trung bình (Medium)** | 16 câu | **40.0%** | Phân biệt Behavioral vs Structural, hiểu 9 trường Fully-Dressed, phân tích quan hệ <<include>>/<<extend>>, ranh giới System Boundary. |
| **🔴 Khó (Hard)** | 12 câu | **30.0%** | Xử lý tình huống dự án thực tế (Case study), nhận diện và sửa lỗi cạm bẫy thiết kế (CRUD trap, UI pollution), phân gói Packages, kỹ nghệ hiện đại. |
| **Tổng cộng** | **40 câu** | **100%** | Đạt chuẩn đề thi chính quy đại học. |

### 2.2. Phân bổ Phạm vi Giáo trình (Scope Balance)
- **Inside (36 câu - 90%)**: Bám sát 100% nội dung 7 phần chính trong bài học \`data/ad-ch4.js\`:
  - **Mục I (Set Baseline)**: Định nghĩa Snapshot & Stable Reference, 3 yếu tố nền tảng (Scope, Vision, Initial Requirements), 4 lý do Set Baseline, Quản lý Scope Creep.
  - **Mục II (Discovery Phase)**: Bản chất chu trình khám phá, 5 mục tiêu cốt lõi, Chu trình 5 hoạt động (Elicit $\\to$ Analyze $\\to$ Specify $\\to$ Validate $\\to$ Manage), Vị trí Discovery trong Unified Process.
  - **Mục III (Behavioral Analysis & Use-Case Diagram)**: Behavioral (Hành vi - WHAT) vs Structural (Cấu trúc - HOW/Entities), 4 thành phần UML (Actor, Use Case, Association, System Boundary), Vai trò Use Case Diagram như Mục lục.
  - **Mục IV (Use-Case Descriptions)**: 3 cấp độ (Brief, Casual, Fully-Dressed), Khuôn mẫu 9 trường Fully-Dressed, Nguyên lý tách rời Quy tắc nghiệp vụ (Business Rules Decoupling).
  - **Mục V (Library System Exercise)**: Bài toán Thư viện (Patron, Librarian), Ca sử dụng Reserve Book và Borrow Book, Phân tích 4 sai lầm kinh điển.
  - **Mục VI (Advanced Use-Case Features)**: 3 quan hệ tái sử dụng (\`<<include>>\`, \`<<extend>>\`, Generalization), Điểm mở rộng định danh (Named Extension Points), Đóng gói ca sử dụng (Packaging Use Cases).
  - **Mục VII (Review & Traps)**: 7 cạm bẫy phòng thi, Checklist đánh giá năng lực Requirements Analysis & Design.
- **Outside (4 câu - 10%)**: Vận dụng kỹ nghệ phần mềm và kiến trúc dự án thực tế:
  - Quản trị Baseline trong CI/CD & Agile backlog grooming (SAFe / PI Planning).
  - Kỹ thuật khơi gợi yêu cầu (Elicitation) trong thời đại AI & Low-code/No-code.
  - Phân rã Use Case trong kiến trúc vi dịch vụ (Microservices) & Event-Driven Architecture.
  - Thiết lập ranh giới nghiệp vụ (Bounded Contexts) theo tư duy Domain-Driven Design (DDD).

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
3. **Tình huống nghiệp vụ thực tế (Case Study)**: Đặt thí sinh vào vai Lead BA / Software Architect xử lý bài toán ranh giới hệ thống, tích hợp cổng thanh toán, RFID, và tối ưu hóa Use Case.
4. **Ghép cặp logic (Matching)**: Kết nối các khái niệm Baseline, chu trình Discovery, thành phần Use Case Diagram và Checklist kiểm định.
5. **Điền khuyết / Chuỗi quy trình (Fill-in-the-blank)**: Kiểm tra khả năng nắm vững thứ tự 5 hoạt động Discovery và các kỹ thuật Elicitation chuẩn mực.

---

## 5. DANH SÁCH FILE LIÊN QUAN

- Mã nguồn đề thi Part 1: \`data/questions-ad-ch4-part1.js\`
- Mã nguồn đề thi Part 2: \`data/questions-ad-ch4-part2.js\`
- Tài liệu tổng hợp 80 câu hỏi và lời giải chi tiết: \`tong-hop-2-de-thi-chuong-4-phan-tich-thiet-ke-yeu-cau.md\`
- Tích hợp hệ thống: \`lib/curriculum.js\`
`;

fs.writeFileSync("docs/analysis-design/ch4-ngan-hang-de-thi-40-cau.md", docBankMd, "utf8");
console.log("Successfully written docs/analysis-design/ch4-ngan-hang-de-thi-40-cau.md");
