/* ============================================================
   DỮ LIỆU TỔNG HỢP CÂU HỎI TRẮC NGHIỆM ĐẠI HỘI VI (12/1986)
   Bao gồm 4 Bộ đề (180 câu hỏi):
   - 2 Đề thi Cố định Chuẩn (Part 1 & Part 2): 80 câu (72 Inside + 8 Outside)
   - 2 Đề bẫy Tư duy Vận dụng cao (Trick 1 & Trick 2): 100 câu bẫy
   ============================================================ */

import { questionsLsdDh6Part1 } from "./questions-lsd-dh6-part1.js";
import { questionsLsdDh6Part2 } from "./questions-lsd-dh6-part2.js";
import { questionsLsdDh6Trick1 } from "./questions-lsd-dh6-trick1.js";
import { questionsLsdDh6Trick2 } from "./questions-lsd-dh6-trick2.js";

const allPart1Inside = questionsLsdDh6Part1.filter(q => !q.isOutside);
const allPart1Outside = questionsLsdDh6Part1.filter(q => q.isOutside);

const allPart2Inside = questionsLsdDh6Part2.filter(q => !q.isOutside);
const allPart2Outside = questionsLsdDh6Part2.filter(q => q.isOutside);

export const questionsDh6 = {
  chapterId: "dh-6",
  inside: [...allPart1Inside, ...allPart2Inside],
  outside: [...allPart1Outside, ...allPart2Outside],
  tricks: [...questionsLsdDh6Trick1, ...questionsLsdDh6Trick2]
};
