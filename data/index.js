// TẬP TIN METADATA GIÁO TRÌNH (Tự động tạo từ scripts/generate-metadata.mjs)
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
    chapters: [
  {
    "id": "chuong-1",
    "title": "Chương I",
    "subtitle": "Đối tượng, phương pháp nghiên cứu và ý nghĩa học tập môn tư tưởng Hồ Chí Minh",
    "sections": [
      {
        "id": "doi-tuong-nghien-cuu",
        "roman": "I",
        "title": "Đối tượng nghiên cứu",
        "subsections": [
          {
            "id": "khai-niem-tu-tuong",
            "number": "1",
            "title": "Khái niệm tư tưởng và tư tưởng Hồ Chí Minh"
          },
          {
            "id": "doi-tuong-nhiem-vu",
            "number": "2",
            "title": "Đối tượng và nhiệm vụ của môn học Tư tưởng Hồ Chí Minh"
          },
          {
            "id": "moi-quan-he",
            "number": "3",
            "title": "Mối quan hệ với môn học những nguyên lý cơ bản của chủ nghĩa Mác-Lênin và môn học đường lối cách mạng của ĐCSVN"
          }
        ]
      },
      {
        "id": "phuong-phap-nghien-cuu",
        "roman": "II",
        "title": "Phương pháp nghiên cứu",
        "subsections": [
          {
            "id": "co-so-phuong-phap-luan",
            "number": "1",
            "title": "Cơ sở phương pháp luận"
          },
          {
            "id": "cac-phuong-phap-cu-the",
            "number": "2",
            "title": "Các phương pháp cụ thể"
          }
        ]
      },
      {
        "id": "y-nghia-hoc-tap",
        "roman": "III",
        "title": "Ý nghĩa của việc học tập môn học đối với sinh viên",
        "subsections": [
          {
            "id": "nang-cao-tu-duy",
            "number": "1",
            "title": "Nâng cao năng lực tư duy lý luận và phương pháp công tác"
          },
          {
            "id": "boi-duong-pham-chat",
            "number": "2",
            "title": "Bồi dưỡng phẩm chất đạo đức cách mạng và rèn luyện bản lĩnh chính trị"
          }
        ]
      }
    ]
  },
  {
    "id": "chuong-2",
    "title": "Chương II",
    "subtitle": "Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    "sections": [
      {
        "id": "co-so-hinh-thanh",
        "roman": "I",
        "title": "Cơ sở hình thành tư tưởng Hồ Chí Minh",
        "subsections": [
          {
            "id": "co-so-khach-quan",
            "number": "1",
            "title": "Cơ sở khách quan"
          },
          {
            "id": "nhan-to-chu-quan",
            "number": "2",
            "title": "Nhân tố chủ quan"
          }
        ]
      },
      {
        "id": "qua-trinh-hinh-thanh-phat-trien",
        "roman": "II",
        "title": "Quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
        "subsections": [
          {
            "id": "truoc-nam-1911",
            "number": "1",
            "title": "Thời kỳ trước năm 1911: Hình thành tư tưởng yêu nước và chí hướng cứu nước"
          },
          {
            "id": "thoi-ky-1911-1920",
            "number": "2",
            "title": "Thời kỳ 1911 - 1920: Tìm thấy con đường cứu nước, giải phóng dân tộc"
          },
          {
            "id": "thoi-ky-1921-1930",
            "number": "3",
            "title": "Thời kỳ 1921 - 1930: Hình thành cơ bản tư tưởng về cách mạng Việt Nam"
          },
          {
            "id": "thoi-ky-1930-1945",
            "number": "4",
            "title": "Thời kỳ 1930 - 1945: Vượt qua thử thách, giữ vững đường lối, phương pháp cách mạng Việt Nam đúng đắn, sáng tạo"
          },
          {
            "id": "thoi-ky-1945-1969",
            "number": "5",
            "title": "Thời kỳ 1945 - 1969: Tư tưởng Hồ Chí Minh tiếp tục phát triển, hoàn thiện"
          }
        ]
      },
      {
        "id": "gia-tri-tu-tuong-hcm",
        "roman": "III",
        "title": "Giá trị Tư tưởng Hồ Chí Minh",
        "subsections": [
          {
            "id": "soi-sang-con-duong-giai-phong",
            "number": "1",
            "title": "Tư tưởng Hồ Chí Minh soi sáng con đường giải phóng và phát triển dân tộc"
          },
          {
            "id": "doi-voi-su-phat-trien-the-gioi",
            "number": "2",
            "title": "Tư tưởng Hồ Chí Minh đối với sự phát triển thế giới"
          }
        ]
      }
    ]
  },
  {
    "id": "chuong-3",
    "title": "Chương III",
    "subtitle": "Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội",
    "sections": [
      {
        "id": "hcm-c3-goals",
        "roman": "",
        "title": "Mục tiêu chương III",
        "subsections": [
          {
            "id": "hcm-c3-sub-goals",
            "number": "",
            "title": ""
          }
        ]
      },
      {
        "id": "van-de-doc-lap-dan-toc-sec",
        "roman": "I",
        "title": "Vấn đề độc lập dân tộc",
        "subsections": [
          {
            "id": "doc-lap-tu-do-la-quyen-sub",
            "number": "1",
            "title": "Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc"
          },
          {
            "id": "ve-cach-mang-giai-phong-dan-toc-sub",
            "number": "2",
            "title": "Về cách mạng giải phóng dân tộc"
          }
        ]
      },
      {
        "id": "hcm-c3-socialism-sec",
        "roman": "II",
        "title": "Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội và xây dựng chủ nghĩa xã hội ở Việt Nam",
        "subsections": [
          {
            "id": "hcm-c3-socialism-sub",
            "number": "1",
            "title": "Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội"
          },
          {
            "id": "hcm-c3-socialism-construction-sub",
            "number": "2",
            "title": "Tư tưởng Hồ Chí Minh về xây dựng chủ nghĩa xã hội ở Việt Nam"
          },
          {
            "id": "hcm-c3-transition-sub",
            "number": "3",
            "title": "Tư tưởng Hồ Chí Minh về thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam"
          }
        ]
      },
      {
        "id": "hcm-c3-relation-sec",
        "roman": "III",
        "title": "Tư tưởng Hồ Chí Minh về mối quan hệ giữa độc lập dân tộc và chủ nghĩa xã hội",
        "subsections": [
          {
            "id": "hcm-c3-relation-precondition-sub",
            "number": "1",
            "title": "Độc lập dân tộc là cơ sở, tiền đề để tiến lên chủ nghĩa xã hội"
          },
          {
            "id": "hcm-c3-relation-guarantee-sub",
            "number": "2",
            "title": "Chủ nghĩa xã hội là điều kiện để bảo đảm nền độc lập dân tộc vững chắc"
          },
          {
            "id": "hcm-c3-relation-conditions-sub",
            "number": "3",
            "title": "Điều kiện để bảo đảm độc lập dân tộc gắn liền với chủ nghĩa xã hội"
          }
        ]
      },
      {
        "id": "hcm-c3-application-sec",
        "roman": "IV",
        "title": "Vận dụng tư tưởng Hồ Chí Minh về độc lập dân tộc gắn liền với chủ nghĩa xã hội trong sự nghiệp cách mạng Việt Nam giai đoạn hiện nay",
        "subsections": [
          {
            "id": "hcm-c3-app-steadfast-sub",
            "number": "1",
            "title": "Kiên định mục tiêu và con đường cách mạng mà Hồ Chí Minh đã xác định"
          },
          {
            "id": "hcm-c3-app-democracy-sub",
            "number": "2",
            "title": "Phát huy sức mạnh dân chủ xã hội chủ nghĩa"
          },
          {
            "id": "hcm-c3-app-system-sub",
            "number": "3",
            "title": "Củng cố, kiện toàn, phát huy sức mạnh và hiệu quả hoạt động của toàn bộ hệ thống chính trị"
          },
          {
            "id": "hcm-c3-app-combating-sub",
            "number": "4",
            "title": "Đấu tranh chống những biểu hiện suy thoái về tư tưởng chính trị, đạo đức, lối sống và \"tự diễn biến\", \"tự chuyển hóa\" trong nội bộ"
          }
        ]
      }
    ]
  }
],
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
    chapters: [
  {
    "id": "lich-su-dang-mo-dau",
    "title": "Chương nhập môn",
    "subtitle": "Đối tượng, chức năng, nhiệm vụ, nội dung và phương pháp nghiên cứu, học tập Lịch sử Đảng Cộng sản Việt Nam",
    "sections": [
      {
        "id": "lsd-mo-dau-sec-intro",
        "roman": "",
        "title": "Phần mở đầu",
        "subsections": [
          {
            "id": "lsd-mo-dau-sub-1",
            "number": "1",
            "title": "Giới thiệu chung về Đảng Cộng sản Việt Nam"
          },
          {
            "id": "lsd-mo-dau-sub-2",
            "number": "2",
            "title": "Quá trình hình thành và phát triển của khoa học Lịch sử Đảng"
          },
          {
            "id": "lsd-mo-dau-sub-3",
            "number": "3",
            "title": "Đặc điểm của giáo trình hiện nay"
          }
        ]
      },
      {
        "id": "lsd-mo-dau-sec-1",
        "roman": "I",
        "title": "Đối tượng nghiên cứu của môn học Lịch sử Đảng Cộng sản Việt Nam",
        "subsections": [
          {
            "id": "lsd-mo-dau-sub-1-1",
            "number": "",
            "title": ""
          }
        ]
      },
      {
        "id": "lsd-mo-dau-sec-2",
        "roman": "II",
        "title": "Chức năng, nhiệm vụ của môn học Lịch sử Đảng Cộng sản Việt Nam",
        "subsections": [
          {
            "id": "lsd-mo-dau-sub-2-1",
            "number": "1",
            "title": "Chức năng của khoa học Lịch sử Đảng"
          },
          {
            "id": "lsd-mo-dau-sub-2-2",
            "number": "2",
            "title": "Nhiệm vụ của khoa học Lịch sử Đảng"
          }
        ]
      },
      {
        "id": "lsd-mo-dau-sec-3",
        "roman": "III",
        "title": "Phương pháp nghiên cứu, học tập môn học Lịch sử Đảng Cộng sản Việt Nam",
        "subsections": [
          {
            "id": "lsd-mo-dau-sub-3-1",
            "number": "1",
            "title": "Phương pháp luận nghiên cứu và học tập Lịch sử Đảng"
          },
          {
            "id": "lsd-mo-dau-sub-3-2",
            "number": "2",
            "title": "Các phương pháp cụ thể trong học tập Lịch sử Đảng"
          }
        ]
      }
    ]
  },
  {
    "id": "lich-su-dang-chuong-1",
    "title": "Chương I",
    "subtitle": "Đảng Cộng sản Việt Nam ra đời và lãnh đạo đấu tranh giành chính quyền (1930 - 1945)",
    "sections": [
      {
        "id": "lsd-section-goals",
        "roman": "",
        "title": "Mục tiêu chương I",
        "subsections": [
          {
            "id": "lsd-sub-goals",
            "number": "",
            "title": ""
          }
        ]
      },
      {
        "id": "lsd-section-1",
        "roman": "I",
        "title": "Bối cảnh lịch sử thành lập Đảng",
        "subsections": [
          {
            "id": "lsd-sub-1",
            "number": "1",
            "title": "Bối cảnh quốc tế cuối thế kỷ XIX - đầu thế kỷ XX"
          },
          {
            "id": "lsd-sub-2",
            "number": "2",
            "title": "Nguyễn Ái Quốc chuẩn bị các điều kiện để thành lập Đảng"
          },
          {
            "id": "lsd-sub-3",
            "number": "3",
            "title": "Thành lập Đảng Cộng sản Việt Nam và Cương lĩnh chính trị đầu tiên của Đảng"
          },
          {
            "id": "lsd-sub-4",
            "number": "4",
            "title": "Ý nghĩa lịch sử của việc thành lập Đảng Cộng sản Việt Nam"
          }
        ]
      },
      {
        "id": "lsd-section-2",
        "roman": "II",
        "title": "Lãnh đạo quá trình đấu tranh giành chính quyền 1930-1945",
        "subsections": [
          {
            "id": "lsd-sub-2-1",
            "number": "1",
            "title": "Phong trào cách mạng 1930-1931 và khôi phục phong trào 1932- 1935"
          },
          {
            "id": "lsd-sub-2-2",
            "number": "2",
            "title": "Phong trào dân chủ 1936-1939"
          },
          {
            "id": "lsd-sub-2-3",
            "number": "3",
            "title": "Phong trào giải phóng dân tộc 1939-1945"
          },
          {
            "id": "lsd-sub-2-4",
            "number": "4",
            "title": "Tính chất, ý nghĩa và kinh nghiệm của Cách mạng Tháng Tám năm 1945"
          }
        ]
      }
    ]
  }
],
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
    chapters: [
  {
    "id": "basic-general",
    "title": "Kiến thức cơ bản môn Đại cương",
    "subtitle": "Tìm hiểu các kiến thức nền tảng đại cương, trọng tâm là lịch sử 14 kỳ Đại hội Đại biểu Toàn quốc của Đảng Cộng sản Việt Nam (1935 – 2026).",
    "sections": [
      {
        "id": "dh-section-1",
        "roman": "I",
        "title": "Đại hội Đảng giai đoạn Đấu tranh giải phóng dân tộc và xây dựng đầu tiên (1930 - 1982)",
        "subsections": [
          {
            "id": "dh-sub-1",
            "number": "1",
            "title": "Đại hội I (1935) và Đại hội II (1951) — Khôi phục tổ chức và Kháng chiến"
          },
          {
            "id": "dh-sub-2",
            "number": "2",
            "title": "Đại hội III (1960), IV (1976) và V (1982) — Hai nhiệm vụ chiến lược, thống nhất đất nước và xây dựng CNXH"
          },
          {
            "id": "dh-sub-1-compare",
            "number": "3",
            "title": "Bảng so sánh tổng hợp các kỳ Đại hội Chương I"
          }
        ]
      },
      {
        "id": "dh-section-2",
        "roman": "II",
        "title": "Đại hội Đảng thời kỳ Đổi mới đất nước (1986 - 2006)",
        "subsections": [
          {
            "id": "dh-sub-3",
            "number": "1",
            "title": "Đại hội VI (1986) và VII (1991) — Khởi xướng Đổi mới và xây dựng Cương lĩnh"
          },
          {
            "id": "dh-sub-4",
            "number": "2",
            "title": "Đại hội VIII (1996), IX (2001) và X (2006) — Công nghiệp hóa, hiện đại hóa và hội nhập quốc tế"
          },
          {
            "id": "dh-sub-2-compare",
            "number": "3",
            "title": "Bảng so sánh tổng hợp các kỳ Đại hội Chương II"
          }
        ]
      },
      {
        "id": "dh-section-3",
        "roman": "III",
        "title": "Đại hội Đảng thời kỳ Hội nhập quốc tế sâu rộng và Phát triển bền vững (2011 - nay)",
        "subsections": [
          {
            "id": "dh-sub-5",
            "number": "1",
            "title": "Đại hội XI (2011) và XII (2016) — Cương lĩnh bổ sung và phòng chống tham nhũng"
          },
          {
            "id": "dh-sub-6",
            "number": "2",
            "title": "Đại hội XIII (2021) và XIV (2026) — Khát vọng phồn vinh và Kỷ nguyên vươn mình"
          },
          {
            "id": "dh-sub-3-compare",
            "number": "3",
            "title": "Bảng so sánh tổng hợp các kỳ Đại hội Chương III"
          }
        ]
      }
    ]
  }
],
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
    chapters: [
  {
    "id": "oop",
    "title": "Lập trình hướng đối tượng (OOP)",
    "subtitle": "Khóa học cốt lõi về 13 nguyên lý và kỹ thuật hướng đối tượng trong Java.",
    "sections": [
      {
        "id": "oop-section-intro",
        "roman": "I",
        "title": "Giới thiệu về Java (Intro to Java)",
        "subsections": [
          {
            "id": "oop-sub-intro-history",
            "number": "1",
            "title": "Lịch sử và Bối cảnh Lịch sử (Java: Brief History & Background)"
          },
          {
            "id": "oop-sub-intro-runcycle",
            "number": "2",
            "title": "Chu trình Chạy Chương trình (Run Cycle)"
          },
          {
            "id": "oop-sub-intro-structure",
            "number": "3",
            "title": "Cấu trúc Chương trình Cơ bản (Basic Structure)"
          },
          {
            "id": "oop-sub-intro-variables",
            "number": "4",
            "title": "Định danh, Biến và Hằng số (Identifier, Variable, Constant)"
          },
          {
            "id": "oop-sub-intro-types-operators",
            "number": "5",
            "title": "Kiểu Dữ liệu Số và Toán tử (Numeric Data Types & Operators)"
          },
          {
            "id": "oop-sub-intro-control",
            "number": "6",
            "title": "Câu lệnh Điều khiển và Kiểu dữ liệu Boolean (Control Statements & Boolean)"
          },
          {
            "id": "oop-sub-intro-io",
            "number": "7",
            "title": "Nhập/Xuất Dữ liệu Cơ bản (Basic Input/Output)"
          },
          {
            "id": "oop-sub-intro-functions",
            "number": "8",
            "title": "API Lớp Math và Hàm tự định nghĩa (API & User-defined Functions)"
          },
          {
            "id": "oop-sub-intro-summary",
            "number": "9",
            "title": "Tổng kết (Summary)"
          }
        ]
      },
      {
        "id": "oop-section-array-string",
        "roman": "II",
        "title": "Mảng và Chuỗi (Array & String)",
        "subsections": [
          {
            "id": "oop-sub-array-string",
            "number": "1",
            "title": "Xử lý cấu trúc mảng và chuỗi ký tự"
          }
        ]
      },
      {
        "id": "oop-section-string-buffers",
        "roman": "III",
        "title": "StringBuffer & StringBuilder",
        "subsections": [
          {
            "id": "oop-sub-string-buffers",
            "number": "1",
            "title": "Tối ưu hóa chuỗi khả biến trong Java"
          }
        ]
      },
      {
        "id": "oop-section-class-objects",
        "roman": "IV",
        "title": "Đối tượng, Lớp, Constructor & Overload",
        "subsections": [
          {
            "id": "oop-sub-class-objects",
            "number": "1",
            "title": "Thiết lập lớp, hàm khởi tạo và nạp chồng phương thức"
          }
        ]
      },
      {
        "id": "oop-section-encapsulation",
        "roman": "V",
        "title": "Tính đóng gói & Phạm vi truy cập (Encapsulation)",
        "subsections": [
          {
            "id": "oop-sub-encapsulation",
            "number": "1",
            "title": "Che giấu thông tin chi tiết và phạm vi hoạt động của biến"
          }
        ]
      },
      {
        "id": "oop-section-inheritance",
        "roman": "VI",
        "title": "Tính kế thừa (Inheritance)",
        "subsections": [
          {
            "id": "oop-sub-inheritance",
            "number": "1",
            "title": "Tái sử dụng mã nguồn và thiết lập mối quan hệ giữa các lớp"
          }
        ]
      },
      {
        "id": "oop-section-abstract",
        "roman": "VII",
        "title": "Lớp trừu tượng (Abstract Class)",
        "subsections": [
          {
            "id": "oop-sub-abstract",
            "number": "1",
            "title": "Định nghĩa lớp trừu tượng và phương thức trừu tượng"
          }
        ]
      },
      {
        "id": "oop-section-interface",
        "roman": "VIII",
        "title": "Giao diện (Interface)",
        "subsections": [
          {
            "id": "oop-sub-interface",
            "number": "1",
            "title": "Thiết lập bộ khung giao tiếp đa kế thừa trong Java"
          }
        ]
      },
      {
        "id": "oop-section-collections",
        "roman": "IX",
        "title": "Cấu trúc lưu trữ dữ liệu (Collections Framework)",
        "subsections": [
          {
            "id": "oop-sub-collections",
            "number": "1",
            "title": "Lưu trữ dữ liệu động với List, Set, Map trong Java"
          }
        ]
      },
      {
        "id": "oop-section-exceptions",
        "roman": "X",
        "title": "Xử lý ngoại lệ (Exceptions)",
        "subsections": [
          {
            "id": "oop-sub-exceptions",
            "number": "1",
            "title": "Kiểm soát và xử lý các lỗi runtime bằng try-catch-finally"
          }
        ]
      },
      {
        "id": "oop-section-files",
        "roman": "XI",
        "title": "Thao tác tệp tin (File I/O)",
        "subsections": [
          {
            "id": "oop-sub-files",
            "number": "1",
            "title": "Đọc và ghi dữ liệu ra tệp tin trong Java"
          }
        ]
      },
      {
        "id": "oop-section-nested",
        "roman": "XII",
        "title": "Lớp lồng nhau (Nested Class)",
        "subsections": [
          {
            "id": "oop-sub-nested",
            "number": "1",
            "title": "Khai báo Inner Class, Static Nested Class và Anonymous Class"
          }
        ]
      },
      {
        "id": "oop-section-patterns",
        "roman": "XIII",
        "title": "Mẫu thiết kế hướng đối tượng (Design Patterns)",
        "subsections": [
          {
            "id": "oop-sub-patterns",
            "number": "1",
            "title": "Các mẫu thiết kế kinh điển: Creational, Structural, Behavioral"
          }
        ]
      }
    ]
  }
],
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
    chapters: [
  {
    "id": "analysis-design",
    "title": "Phân tích thiết kế và yêu cầu",
    "subtitle": "Quy trình thu thập yêu cầu, định nghĩa sơ đồ UML và thiết kế kiến trúc hệ thống phần mềm.",
    "sections": [
      {
        "id": "ad-section-1",
        "roman": "I",
        "title": "Quy trình phân tích yêu cầu phần mềm",
        "subsections": [
          {
            "id": "ad-sub-1",
            "number": "1",
            "title": "Xác định và phân loại yêu cầu"
          }
        ]
      },
      {
        "id": "ad-section-2",
        "roman": "II",
        "title": "Mô hình hóa hệ thống bằng UML",
        "subsections": [
          {
            "id": "ad-sub-2",
            "number": "1",
            "title": "Thiết kế các biểu đồ UML chính"
          }
        ]
      }
    ]
  }
],
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
    chapters: [
  {
    "id": "dsa",
    "title": "Cấu trúc dữ liệu và giải thuật",
    "subtitle": "Các cấu trúc dữ liệu kinh điển và kỹ thuật thiết kế giải thuật: Sắp xếp, Tìm kiếm, Đồ thị.",
    "sections": [
      {
        "id": "dsa-section-adt",
        "roman": "I",
        "title": "Kiểu dữ liệu trừu tượng (Abstract Data Type - ADT)",
        "subsections": [
          {
            "id": "dsa-sub-adt-se-issues",
            "number": "1",
            "title": "Các vấn đề trong Kỹ nghệ Phần mềm (Software Engineering Issues)"
          },
          {
            "id": "dsa-sub-adt-definition",
            "number": "2",
            "title": "Kiểu Dữ liệu Trừu tượng (Abstract Data Type - ADT)"
          },
          {
            "id": "dsa-sub-adt-java-interface",
            "number": "3",
            "title": "Java Interface (Giao diện trong Java)"
          },
          {
            "id": "dsa-sub-adt-fraction-practice",
            "number": "4",
            "title": "Bài tập thực hành: Phân số (Fraction) như một ADT"
          },
          {
            "id": "dsa-sub-adt-summary",
            "number": "5",
            "title": "Tổng kết bài học và Định hướng kiến thức nâng cao"
          }
        ]
      },
      {
        "id": "dsa-section-linkedlist",
        "roman": "II",
        "title": "Danh sách liên kết (Linked List)",
        "subsections": [
          {
            "id": "dsa-sub-linkedlist",
            "number": "1",
            "title": "Cấu trúc danh sách liên kết đơn, kép và vòng"
          }
        ]
      },
      {
        "id": "dsa-section-stackqueue",
        "roman": "III",
        "title": "Ngăn xếp & Hàng đợi (Stack & Queue)",
        "subsections": [
          {
            "id": "dsa-sub-stackqueue",
            "number": "1",
            "title": "Nguyên lý hoạt động LIFO và FIFO"
          }
        ]
      },
      {
        "id": "dsa-section-recursion",
        "roman": "IV",
        "title": "Thuật toán Đệ quy (Recursion)",
        "subsections": [
          {
            "id": "dsa-sub-recursion",
            "number": "1",
            "title": "Thiết lập hàm đệ quy và cơ chế Stack Frame"
          }
        ]
      },
      {
        "id": "dsa-section-analysis",
        "roman": "V",
        "title": "Phân tích thuật toán (Analysis of Algorithms)",
        "subsections": [
          {
            "id": "dsa-sub-analysis",
            "number": "1",
            "title": "Độ phức tạp thời gian Big-O và không gian"
          }
        ]
      },
      {
        "id": "dsa-section-sorting",
        "roman": "VI",
        "title": "Thuật toán Sắp xếp (Sorting)",
        "subsections": [
          {
            "id": "dsa-sub-sorting",
            "number": "1",
            "title": "Các phương pháp sắp xếp thông dụng và chia để trị"
          }
        ]
      },
      {
        "id": "dsa-section-hashing",
        "roman": "VII",
        "title": "Bảng băm (Hashing)",
        "subsections": [
          {
            "id": "dsa-sub-hashing",
            "number": "1",
            "title": "Hàm băm và cơ chế giải quyết đụng độ"
          }
        ]
      },
      {
        "id": "dsa-section-bst",
        "roman": "VIII",
        "title": "Cây tìm kiếm nhị phân (Binary Search Tree - BST)",
        "subsections": [
          {
            "id": "dsa-sub-bst",
            "number": "1",
            "title": "Cấu trúc cây nhị phân và các phép toán trên BST"
          }
        ]
      },
      {
        "id": "dsa-section-avl",
        "roman": "IX",
        "title": "Cây AVL (AVL Tree)",
        "subsections": [
          {
            "id": "dsa-sub-avl",
            "number": "1",
            "title": "Kỹ thuật tự cân bằng qua các phép quay cây"
          }
        ]
      },
      {
        "id": "dsa-section-priorityheap",
        "roman": "X",
        "title": "Hàng đợi ưu tiên & Cấu trúc Heap (Priority Queue & Binary Max Heap)",
        "subsections": [
          {
            "id": "dsa-sub-priorityheap",
            "number": "1",
            "title": "Biểu diễn và các thao tác trên Binary Max Heap"
          }
        ]
      },
      {
        "id": "dsa-section-graphbasic",
        "roman": "XI",
        "title": "Cấu trúc Đồ thị cơ bản (Graph Basics)",
        "subsections": [
          {
            "id": "dsa-sub-graphbasic",
            "number": "1",
            "title": "Ma trận kề, danh sách kề và biểu diễn đồ thị"
          }
        ]
      },
      {
        "id": "dsa-section-bfsdfs",
        "roman": "XII",
        "title": "Thuật toán Duyệt đồ thị (BFS & DFS)",
        "subsections": [
          {
            "id": "dsa-sub-bfsdfs",
            "number": "1",
            "title": "Duyệt đồ thị theo chiều rộng và chiều sâu"
          }
        ]
      },
      {
        "id": "dsa-section-mst",
        "roman": "XIII",
        "title": "Cây khung tối tiểu (Minimum Spanning Tree - MST)",
        "subsections": [
          {
            "id": "dsa-sub-mst",
            "number": "1",
            "title": "Các thuật toán tìm cây khung nhỏ nhất (Kruskal, Prim)"
          }
        ]
      },
      {
        "id": "dsa-section-bellmanford",
        "roman": "XIV",
        "title": "Giải thuật Bellman-Ford (Bellman-Ford)",
        "subsections": [
          {
            "id": "dsa-sub-bellmanford",
            "number": "1",
            "title": "Đường đi ngắn nhất từ một nguồn có trọng số âm"
          }
        ]
      },
      {
        "id": "dsa-section-dijkstra",
        "roman": "XV",
        "title": "Giải thuật Dijkstra (Dijkstra)",
        "subsections": [
          {
            "id": "dsa-sub-dijkstra",
            "number": "1",
            "title": "Đường đi ngắn nhất có trọng số không âm"
          }
        ]
      }
    ]
  }
],
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
    chapters: [
  {
    "id": "database",
    "title": "Hệ cơ sở dữ liệu",
    "subtitle": "Cơ sở dữ liệu quan hệ, thiết kế thực thể liên kết (ERD), chuẩn hóa dữ liệu và truy vấn SQL.",
    "sections": [
      {
        "id": "db-section-1",
        "roman": "I",
        "title": "Mô hình cơ sở dữ liệu quan hệ",
        "subsections": [
          {
            "id": "db-sub-1",
            "number": "1",
            "title": "Thiết kế lược đồ quan hệ và chuẩn hóa"
          }
        ]
      },
      {
        "id": "db-section-2",
        "roman": "II",
        "title": "Ngôn ngữ truy vấn có cấu trúc (SQL)",
        "subsections": [
          {
            "id": "db-sub-2",
            "number": "1",
            "title": "Thao tác dữ liệu cơ bản"
          }
        ]
      }
    ]
  }
],
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
    chapters: [
  {
    "id": "basic-concepts",
    "title": "Định Nghĩa & Khái Niệm Cơ Bản",
    "subtitle": "Tổng hợp các định nghĩa nền tảng về phần cứng, hệ điều hành, mạng và cơ sở dữ liệu.",
    "sections": [
      {
        "id": "concepts-section-co-ban",
        "roman": "I",
        "title": "Khái niệm Cơ bản",
        "subsections": [
          {
            "id": "concepts-sub-phan-cung",
            "number": "1",
            "title": "Phần cứng & Bộ nhớ"
          }
        ]
      },
      {
        "id": "concepts-section-big-o",
        "roman": "II",
        "title": "Độ phức tạp thuật toán (Big O Notation)",
        "subsections": [
          {
            "id": "concepts-sub-dinh-nghia-big-o",
            "number": "1",
            "title": "Khái niệm & Định nghĩa Big O"
          },
          {
            "id": "concepts-sub-bieu-do-tra-cuu",
            "number": "2",
            "title": "Biểu đồ & Bảng tra cứu"
          },
          {
            "id": "concepts-sub-cach-tinh-step-by-step",
            "number": "3",
            "title": "Cách tính Big O - Từng bước"
          },
          {
            "id": "concepts-sub-vi-du-code-ngon-ngu",
            "number": "4",
            "title": "Ví dụ Code minh họa"
          },
          {
            "id": "concepts-sub-cac-hieu-lam",
            "number": "5",
            "title": "Các lỗi hiểu sai thường gặp"
          },
          {
            "id": "concepts-sub-space-complexity",
            "number": "6",
            "title": "Space Complexity - Big O cho bộ nhớ"
          }
        ]
      },
      {
        "id": "concepts-section-pass-by-ref",
        "roman": "III",
        "title": "Tham trị vs Tham chiếu (Pass by Value & Pass by Reference)",
        "subsections": [
          {
            "id": "concepts-sub-dinh-nghia-pass-by-val-ref",
            "number": "1",
            "title": "Định nghĩa lý thuyết chuẩn"
          },
          {
            "id": "concepts-sub-misconceptions-pass-by-val-ref",
            "number": "2",
            "title": "Đính chính — 3 Lỗi học thuật thường gặp"
          },
          {
            "id": "concepts-sub-memory-stack-visualizer",
            "number": "3",
            "title": "Hoạt họa bộ nhớ: Stack Frame & Memory Diagram"
          },
          {
            "id": "concepts-sub-languages-comparison",
            "number": "4",
            "title": "Mã nguồn minh họa: So sánh C | C++ | Java | Python"
          },
          {
            "id": "concepts-sub-large-struct",
            "number": "5",
            "title": "Tầm quan trọng: Tại sao Pass by Reference quan trọng?"
          },
          {
            "id": "concepts-sub-java-traps-quiz",
            "number": "6",
            "title": "Câu hỏi phỏng vấn & Trắc nghiệm bẫy Java"
          },
          {
            "id": "concepts-sub-summary-points",
            "number": "7",
            "title": "Tóm tắt chuẩn — Nhớ 5 điều này"
          }
        ]
      }
    ]
  }
],
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
    chapters: [
  {
    "id": "basic-algorithms",
    "title": "Thuật toán",
    "subtitle": "Nền tảng về các thuật toán kinh điển trong khoa học máy tính: Sắp xếp và Tìm đường đi.",
    "sections": [
      {
        "id": "algo-section-thuat-toan-sap-xep",
        "roman": "I",
        "title": "Thuật toán Sắp xếp",
        "subsections": [
          {
            "id": "algo-sub-bubble-sort",
            "number": "A",
            "title": "Sắp xếp nổi bọt (Bubble Sort)"
          },
          {
            "id": "algo-sub-quick-sort",
            "number": "B",
            "title": "Sắp xếp nhanh (Quick Sort)"
          }
        ]
      },
      {
        "id": "algo-section-thuat-toan-tim-duong-di",
        "roman": "II",
        "title": "Thuật toán Tìm đường đi",
        "subsections": [
          {
            "id": "algo-sub-dijkstra",
            "number": "A",
            "title": "Thuật toán Dijkstra"
          },
          {
            "id": "algo-sub-bfs-dfs",
            "number": "B",
            "title": "Tìm kiếm BFS và DFS"
          }
        ]
      }
    ]
  }
],
    questionsMap: {}
  }
};

// Compatibility exports for Quiz component
export const chapters = subjects["tu-tuong-hcm"].chapters;
export const questionsMap = subjects["tu-tuong-hcm"].questionsMap;
