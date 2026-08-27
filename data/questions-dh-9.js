import { questionsLsdDh9Part1 } from "./questions-lsd-dh9-part1.js";
import { questionsLsdDh9Part2 } from "./questions-lsd-dh9-part2.js";
import { questionsLsdDh9Trick1 } from "./questions-lsd-dh9-trick1.js";
import { questionsLsdDh9Trick2 } from "./questions-lsd-dh9-trick2.js";

export const questionsDh9 = {
  chapterId: "dh-9",
  title: "Đại hội IX (4/2001)",
  inside: [
    ...questionsLsdDh9Part1.filter(q => !q.isOutside),
    ...questionsLsdDh9Part2.filter(q => !q.isOutside)
  ],
  outside: [
    ...questionsLsdDh9Part1.filter(q => q.isOutside),
    ...questionsLsdDh9Part2.filter(q => q.isOutside)
  ],
  tricks: [
    ...questionsLsdDh9Trick1,
    ...questionsLsdDh9Trick2
  ]
};
