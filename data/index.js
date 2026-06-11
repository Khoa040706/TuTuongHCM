import { chuongMoDau } from "./chuong-mo-dau";
import { chuong1 } from "./chuong-1";
import { questionsMoDau } from "./questions-mo-dau";
import { lichSuDang } from "./lich-su-dang";

export const subjects = {
  "tu-tuong-hcm": {
    id: "tu-tuong-hcm",
    title: "Tư tưởng Hồ Chí Minh",
    description: "Tổng hợp kiến thức cốt lõi và ngân hàng câu hỏi ôn tập có lời giải.",
    chapters: [chuongMoDau, chuong1],
    questionsMap: {
      "chuong-mo-dau": questionsMoDau
    }
  },
  "lich-su-dang": {
    id: "lich-su-dang",
    title: "Lịch sử Đảng Cộng sản VN",
    description: "Lịch sử ra đời, vai trò lãnh đạo và bài học kinh nghiệm cách mạng Việt Nam.",
    chapters: [lichSuDang],
    questionsMap: {}
  }
};

// Compatibility exports for Quiz component
export const chapters = subjects["tu-tuong-hcm"].chapters;
export const questionsMap = subjects["tu-tuong-hcm"].questionsMap;
