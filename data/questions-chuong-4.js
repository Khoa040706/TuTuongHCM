/* ============================================================
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM: Chương IV
   Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của nhân dân, do nhân dân, vì nhân dân
   ============================================================ */

import { insidePart1 } from "./questions-chuong-4-part1.js";
import { insidePart2 } from "./questions-chuong-4-part2.js";
import { outsidePart3 } from "./questions-chuong-4-part3.js";
import { trickSet1 } from "./questions-chuong-4-trick1.js";
import { trickSet2 } from "./questions-chuong-4-trick2.js";

export const questionsChuong4 = {
  chapterId: "chuong-4",
  inside: [...insidePart1, ...insidePart2],
  outside: outsidePart3,
  tricks: [...trickSet1, ...trickSet2]
};
