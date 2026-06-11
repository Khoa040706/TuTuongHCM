const fs = require('fs');
const path = require('path');

// Read questions-mo-dau.js file
const filePath = path.join(__dirname, '../js/data/questions-mo-dau.js');
const content = fs.readFileSync(filePath, 'utf8');

// Simple evaluation to load questionsMoDau
let questionsMoDau;
const evaluatedContent = content.replace("const questionsMoDau =", "global.questionsMoDau =");
eval(evaluatedContent);
questionsMoDau = global.questionsMoDau;

console.log("=== BẮT ĐẦU KIỂM TRA DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ===");

let hasError = false;
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ [LỖI] ${message}`);
    hasError = true;
  } else {
    console.log(`✅ [OK] ${message}`);
  }
}

// 1. Kiểm tra cấu trúc cấp cao
assert(questionsMoDau !== undefined, "Tải biến questionsMoDau thành công");
assert(questionsMoDau.chapterId === "chuong-mo-dau", "chapterId phải là 'chuong-mo-dau'");
assert(Array.isArray(questionsMoDau.inside), "questionsMoDau.inside là mảng");
assert(Array.isArray(questionsMoDau.outside), "questionsMoDau.outside là mảng");

// 2. Kiểm tra tổng số lượng
assert(questionsMoDau.inside.length === 90, `Tổng số câu hỏi trong giáo trình (inside) phải là 90. Hiện tại: ${questionsMoDau.inside.length}`);
assert(questionsMoDau.outside.length === 10, `Tổng số câu hỏi ngoài giáo trình (outside) phải là 10. Hiện tại: ${questionsMoDau.outside.length}`);

// 3. Kiểm tra tính hợp lệ của từng câu hỏi
const allIds = new Set();
const checkQuestion = (q, index, group) => {
  const prefix = `[${group}][Câu ${index + 1} - ${q.id}]`;
  
  assert(q.id && q.id.trim() !== "", `${prefix} Có ID hợp lệ`);
  assert(!allIds.has(q.id), `${prefix} ID '${q.id}' là duy nhất`);
  allIds.add(q.id);

  assert(q.question && q.question.trim() !== "", `${prefix} Nội dung câu hỏi không được trống`);
  assert(Array.isArray(q.options) && q.options.length === 4, `${prefix} Có đúng 4 lựa chọn`);
  q.options.forEach((opt, oIdx) => {
    assert(opt && opt.trim() !== "", `${prefix} Lựa chọn ${oIdx + 1} không được trống`);
  });

  assert(typeof q.answer === 'number' && q.answer >= 0 && q.answer <= 3, `${prefix} Đáp án hợp lệ (0-3)`);
  assert(["easy", "medium", "hard"].includes(q.difficulty), `${prefix} Độ khó hợp lệ ('easy', 'medium', 'hard')`);
};

questionsMoDau.inside.forEach((q, idx) => checkQuestion(q, idx, "Trong"));
questionsMoDau.outside.forEach((q, idx) => checkQuestion(q, idx, "Ngoài"));

// 4. Kiểm tra phân bổ chi tiết các mục và độ khó (Trong giáo trình)
const stats = {
  sections: {},
  subsections: {},
  difficulties: { easy: 0, medium: 0, hard: 0 },
  subDifficulties: {} // subsectionId -> { easy, medium, hard }
};

questionsMoDau.inside.forEach(q => {
  stats.sections[q.sectionId] = (stats.sections[q.sectionId] || 0) + 1;
  stats.subsections[q.subsectionId] = (stats.subsections[q.subsectionId] || 0) + 1;
  stats.difficulties[q.difficulty] = (stats.difficulties[q.difficulty] || 0) + 1;

  if (!stats.subDifficulties[q.subsectionId]) {
    stats.subDifficulties[q.subsectionId] = { easy: 0, medium: 0, hard: 0 };
  }
  stats.subDifficulties[q.subsectionId][q.difficulty]++;
});

// Kiểm tra số lượng từng Phần
assert(stats.sections["doi-tuong-nghien-cuu"] === 40, `Phần I (Đối tượng nghiên cứu) có đúng 40 câu. Hiện có: ${stats.sections["doi-tuong-nghien-cuu"]}`);
assert(stats.sections["phuong-phap-nghien-cuu"] === 30, `Phần II (Phương pháp nghiên cứu) có đúng 30 câu. Hiện có: ${stats.sections["phuong-phap-nghien-cuu"]}`);
assert(stats.sections["y-nghia-hoc-tap"] === 20, `Phần III (Ý nghĩa học tập) có đúng 20 câu. Hiện có: ${stats.sections["y-nghia-hoc-tap"]}`);

// Kiểm tra chi tiết từng Mục & Độ khó
const checkSub = (subId, expectedTotal, expectedEasy, expectedMedium, expectedHard) => {
  const currentTotal = stats.subsections[subId] || 0;
  const currentDiff = stats.subDifficulties[subId] || { easy: 0, medium: 0, hard: 0 };
  
  assert(currentTotal === expectedTotal, `Mục ${subId} có đúng ${expectedTotal} câu. Hiện có: ${currentTotal}`);
  assert(currentDiff.easy === expectedEasy, `Mục ${subId} có đúng ${expectedEasy} câu Dễ. Hiện có: ${currentDiff.easy}`);
  assert(currentDiff.medium === expectedMedium, `Mục ${subId} có đúng ${expectedMedium} câu Trung bình. Hiện có: ${currentDiff.medium}`);
  assert(currentDiff.hard === expectedHard, `Mục ${subId} có đúng ${expectedHard} câu Khó. Hiện có: ${currentDiff.hard}`);
};

console.log("\n--- KIỂM TRA PHÂN BỔ MỤC & ĐỘ KHÓ (TRONG GIÁO TRÌNH) ---");
// Phần I
checkSub("khai-niem-tu-tuong", 20, 5, 10, 5);
checkSub("doi-tuong-nhiem-vu", 12, 3, 6, 3);
checkSub("moi-quan-he", 8, 2, 4, 2);
// Phần II
checkSub("co-so-phuong-phap-luan", 18, 5, 8, 5);
checkSub("cac-phuong-phap-cu-the", 12, 3, 6, 3);
// Phần III
checkSub("nang-cao-tu-duy", 10, 3, 4, 3);
checkSub("boi-duong-pham-chat", 10, 3, 5, 2);

// Kiểm tra phân bổ độ khó (Ngoài giáo trình)
console.log("\n--- KIỂM TRA PHÂN BỔ ĐỘ KHÓ (NGOÀI GIÁO TRÌNH) ---");
const outDiff = { easy: 0, medium: 0, hard: 0 };
questionsMoDau.outside.forEach(q => {
  outDiff[q.difficulty]++;
});
assert(outDiff.easy === 3, `Ngoài giáo trình có đúng 3 câu Dễ. Hiện có: ${outDiff.easy}`);
assert(outDiff.medium === 5, `Ngoài giáo trình có đúng 5 câu Trung bình. Hiện có: ${outDiff.medium}`);
assert(outDiff.hard === 2, `Ngoài giáo trình có đúng 2 câu Khó. Hiện có: ${outDiff.hard}`);

console.log("\n=== KẾT QUẢ KIỂM TRA ===");
if (hasError) {
  console.error("❌ Phát hiện lỗi trong dữ liệu câu hỏi! Vui lòng sửa lại.");
  process.exit(1);
} else {
  console.log("🎉 TẤT CẢ CÁC BÀI KIỂM TRA ĐÃ THÀNH CÔNG! Dữ liệu câu hỏi hoàn hảo.");
  process.exit(0);
}
