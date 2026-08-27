/* ============================================================
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM: Chương III
   Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội
   ============================================================ */

import { insidePart1 } from "./questions-chuong-3-part1.js";
import { insidePart2 } from "./questions-chuong-3-part2.js";
import { outsidePart3, tricksPart3 } from "./questions-chuong-3-part3.js";

export const questionsChuong3 = {
  chapterId: "chuong-3",
  inside: [...insidePart1, ...insidePart2],
  outside: outsidePart3,
  tricks: tricksPart3
};
