/* ============================================================
   DỮ LIỆU TỔNG HỢP CÂU HỎI TRẮC NGHIỆM ĐẠI HỘI V (3/1982)
   Bao gồm 4 Bộ đề (180 câu hỏi):
   - 2 Đề thi Cố định Chuẩn (Part 1 & Part 2): 80 câu (72 Inside + 8 Outside)
   - 2 Đề bẫy Tư duy Vận dụng cao (Trick 1 & Trick 2): 100 câu bẫy
   ============================================================ */

import { questionsLsdDh5Part1 } from "./questions-lsd-dh5-part1.js";
import { questionsLsdDh5Part2 } from "./questions-lsd-dh5-part2.js";
import { questionsLsdDh5Trick1 } from "./questions-lsd-dh5-trick1.js";
import { questionsLsdDh5Trick2 } from "./questions-lsd-dh5-trick2.js";

const allPart1Inside = questionsLsdDh5Part1.filter(q => !q.isOutside);
const allPart1Outside = questionsLsdDh5Part1.filter(q => q.isOutside);

const allPart2Inside = questionsLsdDh5Part2.filter(q => !q.isOutside);
const allPart2Outside = questionsLsdDh5Part2.filter(q => q.isOutside);

export const questionsDh5 = {
  chapterId: "dh-5",
  inside: [...allPart1Inside, ...allPart2Inside],
  outside: [...allPart1Outside, ...allPart2Outside],
  tricks: [...questionsLsdDh5Trick1, ...questionsLsdDh5Trick2]
};
