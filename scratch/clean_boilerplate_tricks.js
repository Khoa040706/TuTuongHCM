import fs from "fs";

const filesToClean = [
  { path: "./data/questions-lsd-chuong-2-trick1.js", exportName: "lsdChuong2Trick1" },
  { path: "./data/questions-lsd-chuong-2-trick2.js", exportName: "lsdChuong2Trick2" },
  { path: "./data/questions-lsd-chuong-3-trick1.js", exportName: "lsdChuong3Trick1" },
  { path: "./data/questions-lsd-chuong-3-trick2.js", exportName: "lsdChuong3Trick2" },
  { path: "./data/questions-lsd-ket-luan-trick1.js", exportName: "lsdKetLuanTrick1" },
  { path: "./data/questions-lsd-ket-luan-trick2.js", exportName: "lsdKetLuanTrick2" }
];

filesToClean.forEach(({ path, exportName }) => {
  const content = fs.readFileSync(path, "utf8");
  // Extract JSON array
  const jsonStart = content.indexOf("[");
  const jsonEnd = content.lastIndexOf("]");
  if (jsonStart !== -1 && jsonEnd !== -1) {
    const jsonStr = content.substring(jsonStart, jsonEnd + 1);
    const questions = JSON.parse(jsonStr);
    
    // Filter out boilerplate template questions
    const cleanedQuestions = questions.filter(q => {
      const isBoilerplate = 
        q.question.includes("Khẳng định nào sau đây nêu ĐÚNG VÀ ĐẦY ĐỦ NHẤT về chỉ đạo") ||
        q.question.includes("Câu hỏi bẫy phân tích chuyên sâu") ||
        q.question.includes("Câu hỏi bẫy tư duy nâng cao #") ||
        q.question.includes("Câu hỏi bẫy tư duy mốc lịch sử") ||
        q.options.some(o => o.includes("Khẳng định chuẩn xác phân tích đúng bản chất"));
      return !isBoilerplate;
    });

    console.log(`[CLEANED] ${path}: Original ${questions.length} questions ➔ ${cleanedQuestions.length} genuine questions.`);
    
    const newContent = `/* ============================================================
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM BẪY CHUẨN ĐÃ LỌC BỎ RÁC TEMPLATE
   ============================================================ */

export const ${exportName} = ${JSON.stringify(cleanedQuestions, null, 2)};
`;
    fs.writeFileSync(path, newContent, "utf8");
  }
});

console.log("✅ Complete cleaning of all boilerplate trick questions!");
