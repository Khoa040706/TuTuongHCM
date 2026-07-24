/* ============================================================
   DỮ LIỆU TỔNG HỢP CÂU HỎI TRẮC NGHIỆM ĐẠI HỘI I (3/1935)
   Bao gồm 4 Bộ đề (180 câu hỏi):
   - 2 Đề thi Cố định Chuẩn (Part 1 & Part 2): 80 câu (72 Inside + 8 Outside)
   - 2 Đề bẫy Tư duy Vận dụng cao (Trick 1 & Trick 2): 100 câu bẫy
   ============================================================ */

import { questionsLsdDh1Part1 } from "./questions-lsd-dh1-part1.js";
import { questionsLsdDh1Part2 } from "./questions-lsd-dh1-part2.js";
import { questionsLsdDh1Trick1 } from "./questions-lsd-dh1-trick1.js";
import { questionsLsdDh1Trick2 } from "./questions-lsd-dh1-trick2.js";

const allPart1Inside = questionsLsdDh1Part1.filter(q => !q.isOutside);
const allPart1Outside = questionsLsdDh1Part1.filter(q => q.isOutside);

const allPart2Inside = questionsLsdDh1Part2.filter(q => !q.isOutside);
const allPart2Outside = questionsLsdDh1Part2.filter(q => q.isOutside);

export const questionsDh1 = {
  chapterId: "dh-1",
  inside: [...allPart1Inside, ...allPart2Inside],
  outside: [...allPart1Outside, ...allPart2Outside],
  tricks: [...questionsLsdDh1Trick1, ...questionsLsdDh1Trick2]
};
