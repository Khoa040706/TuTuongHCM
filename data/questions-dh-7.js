import { questionsLsdDh7Part1 } from "./questions-lsd-dh7-part1";
import { questionsLsdDh7Part2 } from "./questions-lsd-dh7-part2";
import { questionsLsdDh7Trick1 } from "./questions-lsd-dh7-trick1";
import { questionsLsdDh7Trick2 } from "./questions-lsd-dh7-trick2";

export const questionsDh7 = {
  chapterId: "dh-7",
  title: "Đại hội VII (6/1991)",
  inside: [
    ...questionsLsdDh7Part1.filter(q => !q.isOutside),
    ...questionsLsdDh7Part2.filter(q => !q.isOutside)
  ],
  outside: [
    ...questionsLsdDh7Part1.filter(q => q.isOutside),
    ...questionsLsdDh7Part2.filter(q => q.isOutside)
  ],
  tricks: [
    ...questionsLsdDh7Trick1,
    ...questionsLsdDh7Trick2
  ]
};
