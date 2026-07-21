/* ============================================================
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM: Chương VI
   Tư tưởng Hồ Chí Minh về Văn hóa, Đạo đức và Con người
   ============================================================ */

import { insidePart1 } from "./questions-chuong-6-part1.js";
import { insidePart2 } from "./questions-chuong-6-part2.js";
import { outsidePart3 } from "./questions-chuong-6-part3.js";
import { trickSet1 } from "./questions-chuong-6-trick1.js";
import { trickSet2 } from "./questions-chuong-6-trick2.js";

// Phân bổ chuẩn: 216 câu Inside + 24 câu Outside = 240 câu tổng cộng cho 6 Đề Cố Định (36 in + 4 out / đề)
export const questionsChuong6 = {
  chapterId: "chuong-6",
  inside: [...insidePart1, ...insidePart2], // 216 câu inside (6 x 36)
  outside: outsidePart3,                     // 24 câu outside (6 x 4)
  tricks: [...trickSet1, ...trickSet2]       // 100 câu bẫy chuyên sâu (50 câu Đề Bẫy 1 + 50 câu Đề Bẫy 2)
};
