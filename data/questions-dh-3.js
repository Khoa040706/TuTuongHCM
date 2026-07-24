/* ============================================================
   DỮ LIỆU TỔNG HỢP CÂU HỎI TRẮC NGHIỆM ĐẠI HỘI III (9/1960)
   Bao gồm 4 Bộ đề (180 câu hỏi):
   - 2 Đề thi Cố định Chuẩn (Part 1 & Part 2): 80 câu (72 Inside + 8 Outside)
   - 2 Đề bẫy Tư duy Vận dụng cao (Trick 1 & Trick 2): 100 câu bẫy
   ============================================================ */

import { questionsLsdDh3Part1 } from "./questions-lsd-dh3-part1.js";
import { questionsLsdDh3Part2 } from "./questions-lsd-dh3-part2.js";
import { questionsLsdDh3Trick1 } from "./questions-lsd-dh3-trick1.js";
import { questionsLsdDh3Trick2 } from "./questions-lsd-dh3-trick2.js";

const allPart1Inside = questionsLsdDh3Part1.filter(q => !q.isOutside);
const allPart1Outside = questionsLsdDh3Part1.filter(q => q.isOutside);

const allPart2Inside = questionsLsdDh3Part2.filter(q => !q.isOutside);
const allPart2Outside = questionsLsdDh3Part2.filter(q => q.isOutside);

export const questionsDh3 = {
  chapterId: "dh-3",
  inside: [...allPart1Inside, ...allPart2Inside],
  outside: [...allPart1Outside, ...allPart2Outside],
  tricks: [...questionsLsdDh3Trick1, ...questionsLsdDh3Trick2]
};
