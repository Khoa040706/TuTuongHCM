/* ============================================================
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM: CHƯƠNG II MÔN LỊCH SỬ ĐẢNG
   Chương II: Đảng lãnh đạo hai cuộc kháng chiến chống xâm lược,
   hoàn thành giải phóng dân tộc, thống nhất đất nước (1945 - 1975)
   ============================================================ */

import { lsdChuong2Part1 } from "./questions-lsd-chuong-2-part1.js";
import { lsdChuong2Part2 } from "./questions-lsd-chuong-2-part2.js";
import { lsdChuong2Trick1 } from "./questions-lsd-chuong-2-trick1.js";
import { lsdChuong2Trick2 } from "./questions-lsd-chuong-2-trick2.js";

// Phân tách 6 bộ đề thi chính thức (Đề 1 đến Đề 6)
export const lsdChuong2ExamSet1 = lsdChuong2Part1.filter(q => q.examSet === 1);
export const lsdChuong2ExamSet2 = lsdChuong2Part1.filter(q => q.examSet === 2);
export const lsdChuong2ExamSet3 = lsdChuong2Part2.filter(q => q.examSet === 3);
export const lsdChuong2ExamSet4 = lsdChuong2Part2.filter(q => q.examSet === 4);
export const lsdChuong2ExamSet5 = lsdChuong2Part2.filter(q => q.examSet === 5);
export const lsdChuong2ExamSet6 = lsdChuong2Part2.filter(q => q.examSet === 6);

// Tập hợp trọn bộ 340 câu hỏi trắc nghiệm của 8 bộ đề (6 Đề chuẩn + 2 Đề Bẫy)
export const questionsLsdChuong2 = {
  chapterId: "lsd-chuong-2",
  inside: [...lsdChuong2Part1, ...lsdChuong2Part2].filter(q => !q.isOutside),
  outside: [...lsdChuong2Part1, ...lsdChuong2Part2].filter(q => q.isOutside),
  tricks: [...lsdChuong2Trick1, ...lsdChuong2Trick2],
  sets: {
    1: lsdChuong2ExamSet1,
    2: lsdChuong2ExamSet2,
    3: lsdChuong2ExamSet3,
    4: lsdChuong2ExamSet4,
    5: lsdChuong2ExamSet5,
    6: lsdChuong2ExamSet6,
    trick1: lsdChuong2Trick1,
    trick2: lsdChuong2Trick2
  }
};
