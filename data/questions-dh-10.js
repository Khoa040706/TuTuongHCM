import { questionsLsdDh10Part1 } from "./questions-lsd-dh10-part1";
import { questionsLsdDh10Part2 } from "./questions-lsd-dh10-part2";
import { questionsLsdDh10Trick1 } from "./questions-lsd-dh10-trick1";
import { questionsLsdDh10Trick2 } from "./questions-lsd-dh10-trick2";

export const questionsDh10 = {
  chapterId: "dh-10",
  title: "Đại hội X (4/2006)",
  inside: [
    ...questionsLsdDh10Part1.filter(q => !q.isOutside),
    ...questionsLsdDh10Part2.filter(q => !q.isOutside)
  ],
  outside: [
    ...questionsLsdDh10Part1.filter(q => q.isOutside),
    ...questionsLsdDh10Part2.filter(q => q.isOutside)
  ],
  tricks: [
    ...questionsLsdDh10Trick1,
    ...questionsLsdDh10Trick2
  ]
};
