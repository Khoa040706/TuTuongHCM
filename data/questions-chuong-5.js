/* ============================================================
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM: Chương V
   Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế
   ============================================================ */

import { insidePart1 } from "./questions-chuong-5-part1.js";
import { insidePart2 } from "./questions-chuong-5-part2.js";
import { outsidePart3 } from "./questions-chuong-5-part3.js";
import { trickSet1 } from "./questions-chuong-5-trick1.js";
import { trickSet2 } from "./questions-chuong-5-trick2.js";

// Phân bổ chuẩn: 216 câu Inside + 24 câu Outside = 240 câu tổng cộng cho 6 Đề Cố Định (36 in + 4 out / đề)
const allInside = [...insidePart1, ...insidePart2, ...outsidePart3.slice(0, 56)];
const allOutside = outsidePart3.slice(56, 80);

export const questionsChuong5 = {
  chapterId: "chuong-5",
  inside: allInside,   // 216 câu inside (6 x 36)
  outside: allOutside, // 24 câu outside (6 x 4)
  tricks: [...trickSet1, ...trickSet2] // 100 câu bẫy (50 câu Đề Bẫy 1 + 50 câu Đề Bẫy 2)
};
