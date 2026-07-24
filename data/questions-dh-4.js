/* ============================================================
   DỮ LIỆU TỔNG HỢP CÂU HỎI TRẮC NGHIỆM ĐẠI HỘI IV (12/1976)
   Bao gồm 4 Bộ đề (180 câu hỏi):
   - 2 Đề thi Cố định Chuẩn (Part 1 & Part 2): 80 câu (72 Inside + 8 Outside)
   - 2 Đề bẫy Tư duy Vận dụng cao (Trick 1 & Trick 2): 100 câu bẫy
   ============================================================ */

import { questionsLsdDh4Part1 } from "./questions-lsd-dh4-part1.js";
import { questionsLsdDh4Part2 } from "./questions-lsd-dh4-part2.js";
import { questionsLsdDh4Trick1 } from "./questions-lsd-dh4-trick1.js";
import { questionsLsdDh4Trick2 } from "./questions-lsd-dh4-trick2.js";

const allPart1Inside = questionsLsdDh4Part1.filter(q => !q.isOutside);
const allPart1Outside = questionsLsdDh4Part1.filter(q => q.isOutside);

const allPart2Inside = questionsLsdDh4Part2.filter(q => !q.isOutside);
const allPart2Outside = questionsLsdDh4Part2.filter(q => q.isOutside);

export const questionsDh4 = {
  chapterId: "dh-4",
  inside: [...allPart1Inside, ...allPart2Inside],
  outside: [...allPart1Outside, ...allPart2Outside],
  tricks: [...questionsLsdDh4Trick1, ...questionsLsdDh4Trick2]
};
