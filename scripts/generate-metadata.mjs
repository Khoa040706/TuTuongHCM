import fs from "fs";
import path from "path";

// We import the files from legacy_data
import { chuong1 } from "../legacy_data/chuong-1.js";
import { chuong2 } from "../legacy_data/chuong-2.js";
import { chuong3 } from "../legacy_data/chuong-3.js";
import { lichSuDangMoDau } from "../legacy_data/lich-su-dang-mo-dau.js";
import { lichSuDangChuong1 } from "../legacy_data/lich-su-dang.js";
import { oopData } from "../legacy_data/oop.js";
import { analysisDesignData } from "../legacy_data/analysis-design.js";
import { dsaData } from "../legacy_data/dsa.js";
import { databaseData } from "../legacy_data/database.js";
import { basicAlgorithmsData } from "../legacy_data/basic-algorithms.js";
import { basicConceptsData } from "../legacy_data/basic-concepts.js";
import { basicGeneralData } from "../legacy_data/basic-general.js";

// Helper to strip content and parts recursively, keeping only layout tree
function stripMetadata(chapter) {
  const chCopy = JSON.parse(JSON.stringify(chapter));
  if (chCopy.sections) {
    chCopy.sections.forEach(sec => {
      if (sec.subsections) {
        sec.subsections.forEach(sub => {
          // Remove parts and content
          delete sub.parts;
          delete sub.content;
        });
      }
    });
  }
  return chCopy;
}

const chuong1Meta = stripMetadata(chuong1);
const chuong2Meta = stripMetadata(chuong2);
const chuong3Meta = stripMetadata(chuong3);
const lsdMoDauMeta = stripMetadata(lichSuDangMoDau);
const lsdCh1Meta = stripMetadata(lichSuDangChuong1);
const oopMeta = stripMetadata(oopData);
const adMeta = stripMetadata(analysisDesignData);
const dsaMeta = stripMetadata(dsaData);
const dbMeta = stripMetadata(databaseData);
const basicAlgorithmsMeta = stripMetadata(basicAlgorithmsData);
const basicConceptsMeta = stripMetadata(basicConceptsData);
const basicGeneralMeta = stripMetadata(basicGeneralData);

const outputContent = `// TẬP TIN METADATA GIÁO TRÌNH (Tự động tạo từ scripts/generate-metadata.mjs)
// Chứa cấu trúc cây thư mục môn học phục vụ Sidebar, không chứa nội dung bài học.

import { questionsChuong1 } from "./questions-chuong-1";
import { questionsChuong2 } from "./questions-chuong-2";
import { questionsChuong3 } from "./questions-chuong-3";
import { questionsLsdChuong1 } from "./questions-lich-su-dang-chuong-1";
import { questionsLsdMoDau } from "./questions-lich-su-dang-mo-dau";

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
    chapters: ${JSON.stringify([chuong1Meta, chuong2Meta, chuong3Meta], null, 2)},
    questionsMap: {
      "chuong-1": questionsChuong1,
      "chuong-2": questionsChuong2,
      "chuong-3": questionsChuong3
    }
  },
  "lich-su-dang": {
    id: "lich-su-dang",
    title: "Lịch sử Đảng Cộng sản VN",
    description: "Lịch sử ra đời, vai trò lãnh đạo và bài học kinh nghiệm cách mạng Việt Nam dưới sự dẫn dắt của Đảng.",
    category: "Môn đại cương",
    quote: "“Đảng ta là đạo đức, là văn minh.”",
    themeColors: {
      accent: "#b91c1c",
      secondary: "#7f1d1d",
      accentRgb: "185, 28, 28"
    },
    icon: "☭",
    chapters: ${JSON.stringify([lsdMoDauMeta, lsdCh1Meta], null, 2)},
    questionsMap: {
      "lich-su-dang-mo-dau": questionsLsdMoDau,
      "lich-su-dang-chuong-1": questionsLsdChuong1
    },
    isActive: true
  },
  "basic-general": {
    id: "basic-general",
    title: "Kiến thức cơ bản môn Đại cương",
    description: "Tìm hiểu lịch sử các kỳ Đại hội Đảng Cộng sản Việt Nam và các kiến thức đại cương nền tảng.",
    category: "Môn đại cương",
    quote: "“Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.”",
    themeColors: {
      accent: "#db2777",
      secondary: "#be185d",
      accentRgb: "219, 39, 119"
    },
    icon: "📚",
    chapters: ${JSON.stringify([basicGeneralMeta], null, 2)},
    questionsMap: {},
    isActive: true
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
    chapters: ${JSON.stringify([oopMeta], null, 2)},
    questionsMap: {},
    isActive: true
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
    chapters: ${JSON.stringify([adMeta], null, 2)},
    questionsMap: {},
    isActive: false
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
    chapters: ${JSON.stringify([dsaMeta], null, 2)},
    questionsMap: {},
    isActive: true
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
    chapters: ${JSON.stringify([dbMeta], null, 2)},
    questionsMap: {},
    isActive: false
  },
  "basic-concepts": {
    id: "basic-concepts",
    title: "Định Nghĩa & Khái Niệm Cơ Bản CNTT",
    description: "Các định nghĩa nền tảng về phần cứng, hệ điều hành, mạng máy tính và cơ sở dữ liệu.",
    category: "Kiến thức cơ bản",
    quote: "“Mọi hệ thống phức tạp đều được xây dựng từ những nguyên lý cơ bản nhất.”",
    themeColors: {
      accent: "#0d9488",
      secondary: "#0f766e",
      accentRgb: "13, 148, 136"
    },
    icon: "💡",
    chapters: ${JSON.stringify([basicConceptsMeta], null, 2)},
    questionsMap: {},
    isActive: true
  },
  "basic-algorithms": {
    id: "basic-algorithms",
    title: "Thuật Toán & Giải Thuật Kinh Điển",
    description: "Các giải thuật sắp xếp, tìm kiếm và đường đi kinh điển kèm mã giả và code Java minh họa.",
    category: "Môn chuyên ngành",
    quote: "“Thuật toán là nền tảng, tư duy là chìa khóa của khoa học máy tính.”",
    themeColors: {
      accent: "#4f46e5",
      secondary: "#4338ca",
      accentRgb: "79, 70, 229"
    },
    icon: "🧮",
    chapters: ${JSON.stringify([basicAlgorithmsMeta], null, 2)},
    questionsMap: {}
  }
};

// Compatibility exports for Quiz component
export const chapters = subjects["tu-tuong-hcm"].chapters;
export const questionsMap = subjects["tu-tuong-hcm"].questionsMap;
`;

fs.writeFileSync(path.join(process.cwd(), "data", "index.js"), outputContent, "utf8");
console.log("Metadata index.js successfully generated!");
