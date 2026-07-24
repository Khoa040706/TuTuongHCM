/* ============================================================
   DỮ LIỆU TỔNG HỢP CÂU HỎI TRẮC NGHIỆM ĐẠI HỘI II (2/1951)
   Bao gồm 4 Bộ đề (180 câu hỏi):
   - 2 Đề thi Cố định Chuẩn (Part 1 & Part 2): 80 câu (72 Inside + 8 Outside)
   - 2 Đề bẫy Tư duy Vận dụng cao (Trick 1 & Trick 2): 100 câu bẫy
   ============================================================ */

import { questionsLsdDh2Part1 } from "./questions-lsd-dh2-part1.js";
import { questionsLsdDh2Part2 } from "./questions-lsd-dh2-part2.js";
import { questionsLsdDh2Trick1 } from "./questions-lsd-dh2-trick1.js";
import { questionsLsdDh2Trick2 } from "./questions-lsd-dh2-trick2.js";

const allPart1Inside = questionsLsdDh2Part1.filter(q => !q.isOutside);
const allPart1Outside = questionsLsdDh2Part1.filter(q => q.isOutside);

const allPart2Inside = questionsLsdDh2Part2.filter(q => !q.isOutside);
const allPart2Outside = questionsLsdDh2Part2.filter(q => q.isOutside);

export const questionsDh2 = {
  chapterId: "dh-2",
  inside: [...allPart1Inside, ...allPart2Inside],
  outside: [...allPart1Outside, ...allPart2Outside],
  tricks: [...questionsLsdDh2Trick1, ...questionsLsdDh2Trick2]
};
