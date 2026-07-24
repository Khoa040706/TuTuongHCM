import fs from "fs";

const bgTransformed = JSON.parse(fs.readFileSync("./scratch/bg_transformed.json", "utf8"));
const bgMeta = JSON.parse(fs.readFileSync("./scratch/bg_meta.json", "utf8"));

// 1. Rewrite data/basic-general.js
const basicGeneralJsContent = `/* ============================================================
   DỮ LIỆU TÀI LIỆU: KIẾN THỨC CƠ BẢN MÔN ĐẠI CƯƠNG
   Bài đọc chi tiết: 3 Kỳ Đại hội Đại biểu Toàn quốc của Đảng (Đại hội I, II, X)
   ============================================================ */

export const basicGeneralData = ${JSON.stringify(bgTransformed, null, 2)};
`;

fs.writeFileSync("./data/basic-general.js", basicGeneralJsContent, "utf8");
console.log("Updated data/basic-general.js");

// 2. Update data/index.js for basic-general
let indexJsContent = fs.readFileSync("./data/index.js", "utf8");

// Locate basic-general chapters in index.js and replace
const bgChaptersJson = JSON.stringify(bgMeta, null, 6);

// Replace chapters array of basic-general in data/index.js
const regex = /("basic-general":\s*\{[\s\S]*?chapters:\s*)\[[\s\S]*?\](\s*,\s*questionsMap)/;
indexJsContent = indexJsContent.replace(regex, `$1${bgChaptersJson}$2`);

fs.writeFileSync("./data/index.js", indexJsContent, "utf8");
console.log("Updated data/index.js");
