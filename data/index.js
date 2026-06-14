import { chuongMoDau } from "./chuong-mo-dau";
import { chuong1 } from "./chuong-1";
import { questionsMoDau } from "./questions-mo-dau";
import { lichSuDangData } from "./lich-su-dang";
import { oopData } from "./oop";
import { analysisDesignData } from "./analysis-design";
import { dsaData } from "./dsa";
import { databaseData } from "./database";
import { basicItData } from "./basic-it";

export const subjects = {
  "tu-tuong-hcm": {
    id: "tu-tuong-hcm",
    title: "Tư tưởng Hồ Chí Minh",
    description: "Tổng hợp kiến thức cốt lõi và ngân hàng câu hỏi ôn tập có lời giải.",
    category: "Môn đại cương",
    quote: "“Không có gì quý hơn độc lập, tự do.”",
    themeColors: {
      accent: "#d97706",
      secondary: "#c2410c",
      accentRgb: "217, 119, 6"
    },
    icon: "📖",
    chapters: [chuongMoDau, chuong1],
    questionsMap: {
      "chuong-mo-dau": questionsMoDau
    }
  },
  "lich-su-dang": {
    id: "lich-su-dang",
    title: "Lịch sử Đảng Cộng sản VN",
    description: "Lịch sử ra đời, vai trò lãnh đạo và bài học kinh nghiệm cách mạng Việt Nam dưới sự dẫn dắt của Đảng.",
    category: "Môn đại cương",
    quote: "“Đăng ta là đạo đức, là văn minh.”",
    themeColors: {
      accent: "#b91c1c",
      secondary: "#7f1d1d",
      accentRgb: "185, 28, 28"
    },
    icon: "☭",
    chapters: [lichSuDangData],
    questionsMap: {}
  },
  "oop": {
    id: "oop",
    title: "Lập trình hướng đối tượng (OOP)",
    description: "Khái niệm đối tượng, lớp, tính kế thừa, tính đa hình, tính đóng gói và trừu tượng hóa.",
    category: "Môn chuyên ngành",
    quote: "“Viết mã nguồn rõ ràng, dễ bảo trì là nghệ thuật của lập trình viên.”",
    themeColors: {
      accent: "#2563eb",
      secondary: "#1d4ed8",
      accentRgb: "37, 99, 235"
    },
    icon: "💻",
    chapters: [oopData],
    questionsMap: {}
  },
  "analysis-design": {
    id: "analysis-design",
    title: "Phân tích thiết kế và yêu cầu",
    description: "Phương pháp thu thập yêu cầu khách hàng, sơ đồ UML (Use Case, Class, Sequence) và quy trình thiết kế hệ thống.",
    category: "Môn chuyên ngành",
    quote: "“Hiểu rõ yêu cầu là 50% chặng đường giải quyết vấn đề.”",
    themeColors: {
      accent: "#059669",
      secondary: "#047857",
      accentRgb: "5, 150, 105"
    },
    icon: "📐",
    chapters: [analysisDesignData],
    questionsMap: {}
  },
  "dsa": {
    id: "dsa",
    title: "Cấu trúc dữ liệu và giải thuật",
    description: "Mảng, Danh sách liên kết, Ngăn xếp, Hàng đợi, Cây, Đồ thị và các thuật toán tìm kiếm, sắp xếp kinh điển.",
    category: "Môn chuyên ngành",
    quote: "“Cấu trúc dữ liệu tốt giúp thuật toán chạy nhanh và hiệu quả hơn.”",
    themeColors: {
      accent: "#7c3aed",
      secondary: "#6d28d9",
      accentRgb: "124, 92, 237"
    },
    icon: "📊",
    chapters: [dsaData],
    questionsMap: {}
  },
  "database": {
    id: "database",
    title: "Hệ cơ sở dữ liệu",
    description: "Mô hình dữ liệu quan hệ, SQL (Select, Join, Group by), chuẩn hóa cơ sở dữ liệu (1NF, 2NF, 3NF) và tối ưu hóa truy vấn.",
    category: "Môn chuyên ngành",
    quote: "“Dữ liệu là tài sản quý giá nhất của mọi hệ thống thông tin.”",
    themeColors: {
      accent: "#ea580c",
      secondary: "#c2410c",
      accentRgb: "234, 88, 12"
    },
    icon: "🗄️",
    chapters: [databaseData],
    questionsMap: {}
  },
  "basic-it": {
    id: "basic-it",
    title: "Kiến thức cơ bản CNTT",
    description: "Tổng quan về hệ nhị phân, bit/byte, logic Boolean, mạng máy tính cơ bản, hệ điều hành và các khái niệm cốt lõi của CS.",
    category: "Kiến thức cơ bản",
    quote: "“Mọi hệ thống phức tạp đều được xây dựng từ những nguyên lý cơ bản nhất.”",
    themeColors: {
      accent: "#4f46e5",
      secondary: "#4338ca",
      accentRgb: "79, 70, 229"
    },
    icon: "💡",
    chapters: [basicItData],
    questionsMap: {}
  }
};

// Compatibility exports for Quiz component
export const chapters = subjects["tu-tuong-hcm"].chapters;
export const questionsMap = subjects["tu-tuong-hcm"].questionsMap;
