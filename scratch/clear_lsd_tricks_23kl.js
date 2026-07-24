import fs from "fs";

const filesToReset = [
  { path: "./data/questions-lsd-chuong-2-trick1.js", exportName: "lsdChuong2Trick1" },
  { path: "./data/questions-lsd-chuong-2-trick2.js", exportName: "lsdChuong2Trick2" },
  { path: "./data/questions-lsd-chuong-3-trick1.js", exportName: "lsdChuong3Trick1" },
  { path: "./data/questions-lsd-chuong-3-trick2.js", exportName: "lsdChuong3Trick2" },
  { path: "./data/questions-lsd-ket-luan-trick1.js", exportName: "lsdKetLuanTrick1" },
  { path: "./data/questions-lsd-ket-luan-trick2.js", exportName: "lsdKetLuanTrick2" }
];

filesToReset.forEach(({ path, exportName }) => {
  const content = `/* ============================================================
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM BẪY (TRICK SET): ĐÃ XÓA TOÀN BỘ THEO YÊU CẦU
   ============================================================ */

export const ${exportName} = [];
`;
  fs.writeFileSync(path, content, "utf8");
  console.log(`[RESET] ${path}: ${exportName} set to [].`);
});

console.log("✅ Successfully cleared all trick questions for Chapter II, III, and Conclusion!");
