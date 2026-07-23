/* ============================================================
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM: CHƯƠNG III MÔN LỊCH SỬ ĐẢNG
   Chương III: Đảng Lãnh Đạo Cả Nước Quá Độ Lên CNXH Và Tiến Hành Công Cuộc Đổi Mới (Từ 1975 đến nay)
   ============================================================ */

import { lsdChuong3Part1 } from "./questions-lsd-chuong-3-part1.js";
import { lsdChuong3Part2 } from "./questions-lsd-chuong-3-part2.js";
import { lsdChuong3Trick1 } from "./questions-lsd-chuong-3-trick1.js";
import { lsdChuong3Trick2 } from "./questions-lsd-chuong-3-trick2.js";

// Phân tách 6 bộ đề thi chính thức (Đề 1 đến Đề 6)
export const lsdChuong3ExamSet1 = lsdChuong3Part1.filter(q => q.examSet === 1);
export const lsdChuong3ExamSet2 = lsdChuong3Part1.filter(q => q.examSet === 2);
export const lsdChuong3ExamSet3 = lsdChuong3Part2.filter(q => q.examSet === 3);
export const lsdChuong3ExamSet4 = lsdChuong3Part2.filter(q => q.examSet === 4);
export const lsdChuong3ExamSet5 = lsdChuong3Part2.filter(q => q.examSet === 5);
export const lsdChuong3ExamSet6 = lsdChuong3Part2.filter(q => q.examSet === 6);

// Tập hợp trọn bộ 340 câu hỏi trắc nghiệm của 8 bộ đề (6 Đề chuẩn + 2 Đề Bẫy)
export const questionsLsdChuong3 = {
  chapterId: "lsd-chuong-3",
  inside: [...lsdChuong3Part1, ...lsdChuong3Part2].filter(q => !q.isOutside),
  outside: [...lsdChuong3Part1, ...lsdChuong3Part2].filter(q => q.isOutside),
  tricks: [...lsdChuong3Trick1, ...lsdChuong3Trick2],
  sets: {
    1: lsdChuong3ExamSet1,
    2: lsdChuong3ExamSet2,
    3: lsdChuong3ExamSet3,
    4: lsdChuong3ExamSet4,
    5: lsdChuong3ExamSet5,
    6: lsdChuong3ExamSet6,
    trick1: lsdChuong3Trick1,
    trick2: lsdChuong3Trick2
  }
};
