import { questionsLsdDh8Part1 } from "./questions-lsd-dh8-part1.js";
import { questionsLsdDh8Part2 } from "./questions-lsd-dh8-part2.js";
import { questionsLsdDh8Trick1 } from "./questions-lsd-dh8-trick1.js";
import { questionsLsdDh8Trick2 } from "./questions-lsd-dh8-trick2.js";

export const questionsDh8 = {
  chapterId: "dh-8",
  title: "Đại hội VIII (6/1996)",
  inside: [
    ...questionsLsdDh8Part1.filter(q => !q.isOutside),
    ...questionsLsdDh8Part2.filter(q => !q.isOutside)
  ],
  outside: [
    ...questionsLsdDh8Part1.filter(q => q.isOutside),
    ...questionsLsdDh8Part2.filter(q => q.isOutside)
  ],
  tricks: [
    ...questionsLsdDh8Trick1,
    ...questionsLsdDh8Trick2
  ]
};
