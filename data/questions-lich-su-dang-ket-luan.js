/* ============================================================
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM: PHẦN KẾT LUẬN MÔN LỊCH SỬ ĐẢNG
   Kết Luận: Khái Quát Thời Kỳ Lịch Sử, 3 Thắng Lợi Vĩ Đại, 5 Bài Học Lớn Và Truyền Thống Vẻ Vang
   ============================================================ */

import { lsdKetLuanPart1 } from "./questions-lsd-ket-luan-part1.js";
import { lsdKetLuanTrick1 } from "./questions-lsd-ket-luan-trick1.js";
import { lsdKetLuanTrick2 } from "./questions-lsd-ket-luan-trick2.js";

// Phân tách 3 bộ đề thi chính thức (Đề 1 đến Đề 3)
export const lsdKetLuanExamSet1 = lsdKetLuanPart1.filter(q => q.examSet === 1);
export const lsdKetLuanExamSet2 = lsdKetLuanPart1.filter(q => q.examSet === 2);
export const lsdKetLuanExamSet3 = lsdKetLuanPart1.filter(q => q.examSet === 3);

// Tập hợp trọn bộ 220 câu hỏi trắc nghiệm của 5 bộ đề (3 Đề chuẩn + 2 Đề Bẫy)
export const questionsLsdKetLuan = {
  chapterId: "lich-su-dang-ket-luan",
  inside: lsdKetLuanPart1.filter(q => !q.isOutside),
  outside: lsdKetLuanPart1.filter(q => q.isOutside),
  tricks: [...lsdKetLuanTrick1, ...lsdKetLuanTrick2],
  sets: {
    1: lsdKetLuanExamSet1,
    2: lsdKetLuanExamSet2,
    3: lsdKetLuanExamSet3,
    trick1: lsdKetLuanTrick1,
    trick2: lsdKetLuanTrick2
  }
};
