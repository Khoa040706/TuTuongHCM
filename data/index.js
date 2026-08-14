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
    "id": "oop-intro-to-java",
    "title": "Bài 1 & 2",
    "subtitle": "Intro to Java",
    "sections": [
      {
        "id": "oop-intro-history",
        "roman": "I",
        "title": "Lịch sử & Bối cảnh Java",
        "subsections": [
          {
            "id": "oop-sub-history",
            "number": "",
            "title": "Lịch sử & Bối cảnh Java"
          }
        ]
      },
      {
        "id": "oop-intro-runcycle",
        "roman": "II",
        "title": "Chu trình chạy chương trình",
        "subsections": [
          {
            "id": "oop-sub-runcycle-general",
            "number": "1",
            "title": "Quy trình chung & Các loại lỗi"
          },
          {
            "id": "oop-sub-runcycle-c",
            "number": "2",
            "title": "Chu trình với chương trình C (ôn lại)"
          },
          {
            "id": "oop-sub-runcycle-anywhere",
            "number": "3",
            "title": "Java: \"Compile Once, Run Anywhere\""
          },
          {
            "id": "oop-sub-runcycle-java",
            "number": "4",
            "title": "Chu trình chạy chương trình Java"
          }
        ]
      },
      {
        "id": "oop-intro-structure",
        "roman": "III",
        "title": "Cấu trúc cơ bản",
        "subsections": [
          {
            "id": "oop-sub-structure-compare",
            "number": "1",
            "title": "So sánh Hello World: C vs Java"
          },
          {
            "id": "oop-sub-structure-key",
            "number": "2",
            "title": "Nhận xét quan trọng (Key Observations)"
          }
        ]
      },
      {
        "id": "oop-intro-expressions",
        "roman": "IV",
        "title": "Biểu thức số học",
        "subsections": [
          {
            "id": "oop-sub-expressions-defs",
            "number": "1",
            "title": "Định danh, Biến, Hằng số"
          },
          {
            "id": "oop-sub-expressions-naming",
            "number": "2",
            "title": "Quy tắc đặt tên (Naming Convention)"
          },
          {
            "id": "oop-sub-expressions-datatypes",
            "number": "3",
            "title": "Các kiểu dữ liệu số (Numeric Data Types)"
          },
          {
            "id": "oop-sub-expressions-operators",
            "number": "4",
            "title": "Toán tử số học & Thứ tự ưu tiên"
          },
          {
            "id": "oop-sub-expressions-conversion",
            "number": "5",
            "title": "Chuyển đổi kiểu dữ liệu (Data Type Conversion)"
          },
          {
            "id": "oop-sub-expressions-example",
            "number": "6",
            "title": "Bài tập ví dụ: Đổi Fahrenheit sang Celsius"
          }
        ]
      },
      {
        "id": "oop-intro-control",
        "roman": "V",
        "title": "Câu lệnh điều khiển",
        "subsections": [
          {
            "id": "oop-sub-control-boolean",
            "number": "1",
            "title": "Kiểu dữ liệu Boolean"
          },
          {
            "id": "oop-sub-control-operators",
            "number": "2",
            "title": "Toán tử Boolean"
          },
          {
            "id": "oop-sub-control-compare-c",
            "number": "3",
            "title": "So sánh với C"
          },
          {
            "id": "oop-sub-control-selection",
            "number": "4",
            "title": "Câu lệnh rẽ nhánh (Selection Statements)"
          },
          {
            "id": "oop-sub-control-repetition",
            "number": "5",
            "title": "Câu lệnh lặp (Repetition Statements)"
          }
        ]
      },
      {
        "id": "oop-intro-io",
        "roman": "VI",
        "title": "Nhập/Xuất cơ bản",
        "subsections": [
          {
            "id": "oop-sub-io-scanner",
            "number": "1",
            "title": "Đọc dữ liệu nhập: Lớp Scanner"
          },
          {
            "id": "oop-sub-io-pitfalls",
            "number": "2",
            "title": "Điểm cần lưu ý khi đọc dữ liệu nhập"
          },
          {
            "id": "oop-sub-io-output",
            "number": "3",
            "title": "Xuất dữ liệu: Standard Output"
          },
          {
            "id": "oop-sub-io-printf",
            "number": "4",
            "title": "Xuất dữ liệu: printf()"
          }
        ]
      },
      {
        "id": "oop-intro-api",
        "roman": "VII",
        "title": "API (Application Programming Interface)",
        "subsections": [
          {
            "id": "oop-sub-api-concept",
            "number": "",
            "title": "Khái niệm API & JavaDocs"
          }
        ]
      },
      {
        "id": "oop-intro-math",
        "roman": "VIII",
        "title": "Lớp Math & Thuộc tính lớp",
        "subsections": [
          {
            "id": "oop-sub-math-methods",
            "number": "1",
            "title": "Các phương thức hữu ích của lớp Math"
          },
          {
            "id": "oop-sub-math-attributes",
            "number": "2",
            "title": "Thuộc tính lớp (Class Attributes)"
          },
          {
            "id": "oop-sub-math-example",
            "number": "3",
            "title": "Ví dụ minh họa: TestMath.java"
          }
        ]
      },
      {
        "id": "oop-intro-methods",
        "roman": "IX",
        "title": "Hàm do người dùng định nghĩa",
        "subsections": [
          {
            "id": "oop-sub-methods-concept",
            "number": "1",
            "title": "Khái niệm & Ví dụ Factorial.java"
          },
          {
            "id": "oop-sub-methods-passing",
            "number": "2",
            "title": "Cơ chế truyền tham trị (Pass-by-Value)"
          }
        ]
      },
      {
        "id": "oop-intro-summary",
        "roman": "X",
        "title": "Tổng kết",
        "subsections": [
          {
            "id": "oop-sub-summary-all",
            "number": "",
            "title": "Tổng hợp kiến thức & Trọng tâm ôn thi"
          }
        ]
      }
    ]
  },
  {
    "id": "oop-array-string",
    "title": "Bài 3",
    "subtitle": "Array & String",
    "sections": [
      {
        "id": "oop-array-sec",
        "roman": "I",
        "title": "Mảng (Array)",
        "subsections": [
          {
            "id": "oop-sub-array-overview",
            "number": "1",
            "title": "Khái quát nội dung phần Array"
          },
          {
            "id": "oop-sub-array-create",
            "number": "2",
            "title": "Tạo mảng (Create Arrays)"
          },
          {
            "id": "oop-sub-array-process",
            "number": "3",
            "title": "Xử lý mảng (Process Arrays)"
          },
          {
            "id": "oop-sub-array-foreach",
            "number": "4",
            "title": "Vòng lặp Foreach (Foreach Loops)"
          },
          {
            "id": "oop-sub-array-passing",
            "number": "5",
            "title": "Truyền mảng vào phương thức"
          },
          {
            "id": "oop-sub-array-return",
            "number": "6",
            "title": "Trả về mảng từ phương thức"
          }
        ]
      },
      {
        "id": "oop-string-sec",
        "roman": "II",
        "title": "Chuỗi (String)",
        "subsections": [
          {
            "id": "oop-sub-string-overview",
            "number": "1",
            "title": "Khái quát nội dung phần String"
          },
          {
            "id": "oop-sub-string-concept",
            "number": "2",
            "title": "Khái niệm Java String"
          },
          {
            "id": "oop-sub-string-charsequence",
            "number": "3",
            "title": "Interface CharSequence"
          },
          {
            "id": "oop-sub-string-create",
            "number": "4",
            "title": "Tạo chuỗi (Create String)"
          },
          {
            "id": "oop-sub-string-methods",
            "number": "5",
            "title": "Các phương thức của String"
          }
        ]
      },
      {
        "id": "oop-summary-sec",
        "roman": "III",
        "title": "Tổng kết chương 3",
        "subsections": [
          {
            "id": "oop-sub-summary-chapter3",
            "number": "",
            "title": "Trọng tâm ôn tập & Ghi nhớ toàn chương"
          }
        ]
      }
    ]
  },
  {
    "id": "oop-stringbuffer-stringbuilder",
    "title": "Bài 3",
    "subtitle": "StringBuffer & StringBuilder",
    "sections": [
      {
        "id": "oop-stringbuffer-stringbuilder-sec-i",
        "roman": "I",
        "title": "Nội dung chính (Outline)",
        "subsections": [
          {
            "id": "oop-sub-stringbuffer-stringbuilder-outline",
            "number": "",
            "title": "Mục tiêu & Đề cương bài học"
          }
        ]
      },
      {
        "id": "oop-stringbuffer-stringbuilder-sec-ii",
        "roman": "II",
        "title": "StringBuffer",
        "subsections": [
          {
            "id": "oop-sub-stringbuffer-stringbuilder-concept",
            "number": "1",
            "title": "Khái niệm"
          },
          {
            "id": "oop-sub-stringbuffer-stringbuilder-constructor",
            "number": "2",
            "title": "Constructor (Hàm khởi tạo)"
          },
          {
            "id": "oop-sub-stringbuffer-stringbuilder-methods",
            "number": "3",
            "title": "Các phương thức (methods) quan trọng"
          },
          {
            "id": "oop-sub-stringbuffer-stringbuilder-examples",
            "number": "4",
            "title": "Ví dụ minh họa & Thực hành"
          }
        ]
      },
      {
        "id": "oop-stringbuffer-stringbuilder-sec-iii",
        "roman": "III",
        "title": "StringBuilder",
        "subsections": [
          {
            "id": "oop-sub-stringbuilder-concept",
            "number": "1",
            "title": "Khái niệm"
          },
          {
            "id": "oop-sub-stringbuilder-constructor",
            "number": "2",
            "title": "Constructor (Hàm khởi tạo)"
          },
          {
            "id": "oop-sub-stringbuilder-methods",
            "number": "3",
            "title": "Các phương thức quan trọng"
          }
        ]
      },
      {
        "id": "oop-stringbuffer-stringbuilder-sec-iv",
        "roman": "IV",
        "title": "So sánh String & StringBuffer",
        "subsections": [
          {
            "id": "oop-sub-compare-string-stringbuffer",
            "number": "1",
            "title": "Khác biệt cốt lõi"
          }
        ]
      },
      {
        "id": "oop-stringbuffer-stringbuilder-sec-v",
        "roman": "V",
        "title": "So sánh StringBuffer & StringBuilder",
        "subsections": [
          {
            "id": "oop-sub-compare-buffer-builder",
            "number": "1",
            "title": "Hiệu năng & Đồng bộ hóa"
          }
        ]
      },
      {
        "id": "oop-stringbuffer-stringbuilder-sec-vi",
        "roman": "VI",
        "title": "StringTokenizer",
        "subsections": [
          {
            "id": "oop-sub-stringtokenizer-concept",
            "number": "1",
            "title": "Khái niệm"
          },
          {
            "id": "oop-sub-stringtokenizer-constructor",
            "number": "2",
            "title": "Constructor (Hàm khởi tạo)"
          },
          {
            "id": "oop-sub-stringtokenizer-methods",
            "number": "3",
            "title": "Phương thức quan trọng"
          },
          {
            "id": "oop-sub-stringtokenizer-examples",
            "number": "4",
            "title": "Ví dụ minh họa"
          }
        ]
      },
      {
        "id": "oop-stringbuffer-stringbuilder-sec-vii",
        "roman": "VII",
        "title": "Bài tập (Exercises)",
        "subsections": [
          {
            "id": "oop-sub-stringbuffer-stringbuilder-exercises",
            "number": "1",
            "title": "Bài tập Xử lý & Chuẩn hóa họ tên tiếng Việt"
          }
        ]
      },
      {
        "id": "oop-stringbuffer-stringbuilder-sec-viii",
        "roman": "VIII",
        "title": "Tổng kết nhanh toàn bài",
        "subsections": [
          {
            "id": "oop-sub-stringbuffer-stringbuilder-summary",
            "number": "1",
            "title": "Tóm tắt & Đối chiếu kiến thức"
          }
        ]
      }
    ]
  },
  {
    "id": "oop-object-class-constructor-overload",
    "title": "Bài 4",
    "subtitle": "Object, Class, Constructor & Overload",
    "sections": [
      {
        "id": "oop-object-class-constructor-overload-recap-sec",
        "roman": "I",
        "title": "Ôn tập (Recapitulation)",
        "subsections": [
          {
            "id": "oop-sub-object-class-constructor-overload-recap",
            "number": "",
            "title": "Ôn lại quy trình chạy Java"
          }
        ]
      },
      {
        "id": "oop-object-class-constructor-overload-api-sec",
        "roman": "II",
        "title": "API (Application Programming Interface)",
        "subsections": [
          {
            "id": "oop-sub-object-class-constructor-overload-api-concept",
            "number": "2.0",
            "title": "Khái niệm API"
          },
          {
            "id": "oop-sub-object-class-constructor-overload-api-scanner",
            "number": "2.1",
            "title": "Lớp Scanner (Scanner class) - đọc dữ liệu nhập"
          },
          {
            "id": "oop-sub-object-class-constructor-overload-api-string",
            "number": "2.2",
            "title": "Lớp String (String class) - biểu diễn văn bản"
          },
          {
            "id": "oop-sub-object-class-constructor-overload-api-math",
            "number": "2.3",
            "title": "Lớp Math (Math class) - tính toán số học"
          }
        ]
      },
      {
        "id": "oop-object-class-constructor-overload-concepts-sec",
        "roman": "III",
        "title": "Các khái niệm OOP cơ bản (OOP concepts)",
        "subsections": [
          {
            "id": "oop-sub-object-class-constructor-overload-concepts-modifiers",
            "number": "3.1",
            "title": "Từ khóa bổ nghĩa (Modifiers)"
          },
          {
            "id": "oop-sub-object-class-constructor-overload-concepts-methods",
            "number": "3.2",
            "title": "Class method vs Instance method (Phương thức lớp và phương thức đối tượng)"
          },
          {
            "id": "oop-sub-object-class-constructor-overload-concepts-constructors",
            "number": "3.3",
            "title": "Hàm khởi tạo (Constructors)"
          },
          {
            "id": "oop-sub-object-class-constructor-overload-concepts-overloading",
            "number": "3.4",
            "title": "Nạp chồng phương thức (Overloading)"
          }
        ]
      },
      {
        "id": "oop-object-class-constructor-overload-more-classes-sec",
        "roman": "IV",
        "title": "Các lớp khác trong API (More Classes)",
        "subsections": [
          {
            "id": "oop-sub-object-class-constructor-overload-more-classes-decimalformat",
            "number": "4.1",
            "title": "Lớp DecimalFormat (Định dạng số)"
          },
          {
            "id": "oop-sub-object-class-constructor-overload-more-classes-random",
            "number": "4.2",
            "title": "Lớp Random (Sinh số ngẫu nhiên)"
          },
          {
            "id": "oop-sub-object-class-constructor-overload-more-classes-wrapper",
            "number": "4.3",
            "title": "Lớp Wrapper (Lớp bọc)"
          },
          {
            "id": "oop-sub-object-class-constructor-overload-more-classes-point",
            "number": "4.4",
            "title": "Lớp Point (Điểm tọa độ)"
          }
        ]
      },
      {
        "id": "oop-object-class-constructor-overload-abstraction-sec",
        "roman": "V",
        "title": "Trừu tượng hóa & Che giấu thông tin",
        "subsections": [
          {
            "id": "oop-sub-object-class-constructor-overload-abstraction-concept",
            "number": "5.1",
            "title": "Khái niệm Abstraction & Information Hiding"
          }
        ]
      },
      {
        "id": "oop-object-class-constructor-overload-summary-sec",
        "roman": "VI",
        "title": "Tổng kết & Bí kíp ôn thi",
        "subsections": [
          {
            "id": "oop-sub-object-class-constructor-overload-summary-recap",
            "number": "6.1",
            "title": "Tổng kết chương & Lộ trình tuần sau"
          },
          {
            "id": "oop-sub-object-class-constructor-overload-summary-gotchas",
            "number": "6.2",
            "title": "10 Cạm bẫy thi cử cần phòng tránh"
          }
        ]
      }
    ]
  },
  {
    "id": "oop-encapsulation-modifier",
    "title": "Bài 5",
    "subtitle": "Encapsulation & Access Modifiers",
    "sections": [
      {
        "id": "oop-encapsulation-modifier-intro-sec",
        "roman": "I",
        "title": "Mở đầu",
        "subsections": [
          {
            "id": "oop-sub-encapsulation-modifier-intro",
            "number": "1.0",
            "title": "Chế độ người thiết kế & UML"
          }
        ]
      },
      {
        "id": "oop-encapsulation-modifier-recap-sec",
        "roman": "II",
        "title": "Ôn tập (Recapitulation)",
        "subsections": [
          {
            "id": "oop-sub-encapsulation-modifier-recap",
            "number": "2.0",
            "title": "Người dùng vs Người thiết kế"
          }
        ]
      },
      {
        "id": "oop-encapsulation-modifier-paradigm-sec",
        "roman": "III",
        "title": "Programming Model và OOP",
        "subsections": [
          {
            "id": "oop-sub-encapsulation-modifier-paradigm-model",
            "number": "3.1",
            "title": "Mô hình lập trình (Programming Model)"
          },
          {
            "id": "oop-sub-encapsulation-modifier-paradigm-compare",
            "number": "3.2",
            "title": "So sánh Procedural vs OOP"
          },
          {
            "id": "oop-sub-encapsulation-modifier-paradigm-pillars",
            "number": "3.3",
            "title": "4 Khái niệm nền tảng"
          },
          {
            "id": "oop-sub-encapsulation-modifier-paradigm-bankaccount",
            "number": "3.4",
            "title": "Minh họa: Lớp BankAccount"
          }
        ]
      },
      {
        "id": "oop-design-sec",
        "roman": "IV",
        "title": "OOP Design - Thiết kế Class của riêng mình",
        "subsections": [
          {
            "id": "oop-sub-design-concepts",
            "number": "4.1",
            "title": "Khái niệm & Cấu trúc cơ bản"
          },
          {
            "id": "oop-sub-design-constructor",
            "number": "4.2",
            "title": "Hàm khởi tạo (Constructor)"
          },
          {
            "id": "oop-sub-design-access-modifiers",
            "number": "4.3",
            "title": "Mức độ truy cập & Quy tắc thiết kế"
          },
          {
            "id": "oop-sub-design-bankacct-case-study",
            "number": "4.4",
            "title": "Thực hành: Lớp BankAcct"
          },
          {
            "id": "oop-sub-design-client-security",
            "number": "4.5",
            "title": "Khách hàng sử dụng & Bảo mật đóng gói"
          }
        ]
      },
      {
        "id": "oop-more-concepts-sec",
        "roman": "V",
        "title": "More OOP Concepts - Các khái niệm OOP nâng cao hơn",
        "subsections": [
          {
            "id": "oop-sub-more-concepts-static",
            "number": "5.1",
            "title": "Class member vs Instance member (static)"
          },
          {
            "id": "oop-sub-more-concepts-myball",
            "number": "5.2",
            "title": "Thực hành thiết kế Lớp MyBall"
          },
          {
            "id": "oop-sub-more-concepts-client",
            "number": "5.3",
            "title": "Chương trình chạy thử & Module hóa"
          },
          {
            "id": "oop-sub-more-concepts-this",
            "number": "5.4",
            "title": "Từ khóa \"this\" và Shadowing"
          },
          {
            "id": "oop-sub-more-concepts-reuse",
            "number": "5.5",
            "title": "Nạp chồng & Tái sử dụng Constructor"
          },
          {
            "id": "oop-sub-more-concepts-overriding",
            "number": "5.6",
            "title": "Ghi đè phương thức: toString() và equals()"
          }
        ]
      },
      {
        "id": "oop-uml-sec",
        "roman": "VI",
        "title": "Unified Modeling Language (UML)",
        "subsections": [
          {
            "id": "oop-sub-uml-intro",
            "number": "6.1",
            "title": "Giới thiệu UML & Biểu tượng Class"
          },
          {
            "id": "oop-sub-uml-diagrams",
            "number": "6.2",
            "title": "Sơ đồ lớp vs Sơ đồ đối tượng & Quan hệ phụ thuộc"
          }
        ]
      },
      {
        "id": "oop-encapsulation-summary-sec",
        "roman": "VII",
        "title": "Tổng kết (Summary)",
        "subsections": [
          {
            "id": "oop-sub-summary",
            "number": "7.1",
            "title": "Điểm ôn tập phòng thi"
          }
        ]
      }
    ]
  },
  {
    "id": "oop-inheritance",
    "title": "Bài 6 & 7",
    "subtitle": "Inheritance",
    "sections": [
      {
        "id": "oop-inheritance-outline-sec",
        "roman": "",
        "title": "Mục tiêu bài học (Objectives)",
        "subsections": [
          {
            "id": "oop-sub-inheritance-goals",
            "number": "",
            "title": "Mục tiêu cần đạt"
          }
        ]
      },
      {
        "id": "oop-inheritance-overview-sec",
        "roman": "I",
        "title": "Tổng quan Object-Oriented Programming (OOP)",
        "subsections": [
          {
            "id": "oop-sub-inheritance-overview-pillars",
            "number": "",
            "title": "4 khái niệm nền tảng của OOP"
          }
        ]
      },
      {
        "id": "oop-inheritance-overriding-methods-sec",
        "roman": "II",
        "title": "Overriding Methods (Ôn lại)",
        "subsections": [
          {
            "id": "oop-sub-inheritance-overriding",
            "number": "",
            "title": "Khái niệm Ghi đè phương thức"
          }
        ]
      },
      {
        "id": "oop-inheritance-creating-subclass-sec",
        "roman": "III",
        "title": "Creating a Subclass (Tạo lớp con)",
        "subsections": [
          {
            "id": "oop-sub-inheritance-creating-subclass",
            "number": "",
            "title": "Cách xây dựng lớp con"
          }
        ]
      },
      {
        "id": "oop-inheritance-substitutability-sec",
        "roman": "IV",
        "title": "Subclass Substitutability (Tính thay thế của lớp con)",
        "subsections": [
          {
            "id": "oop-sub-inheritance-substitutability",
            "number": "",
            "title": "Tính thay thế trong kế thừa"
          }
        ]
      },
      {
        "id": "oop-inheritance-object-sec",
        "roman": "V",
        "title": "Lớp Object (Lớp gốc trong Java)",
        "subsections": [
          {
            "id": "oop-sub-inheritance-object",
            "number": "",
            "title": "Tổ tiên chung Object"
          }
        ]
      },
      {
        "id": "oop-inheritance-isa-hasa-sec",
        "roman": "VI",
        "title": "\"is-a\" và \"has-a\"",
        "subsections": [
          {
            "id": "oop-sub-inheritance-isa-hasa",
            "number": "",
            "title": "Phân biệt mối quan hệ"
          }
        ]
      },
      {
        "id": "oop-inheritance-final-sec",
        "roman": "VII",
        "title": "Ngăn chặn kế thừa bằng final",
        "subsections": [
          {
            "id": "oop-sub-inheritance-final",
            "number": "",
            "title": "Từ khóa final"
          }
        ]
      },
      {
        "id": "oop-inheritance-limitations-sec",
        "roman": "VIII",
        "title": "Giới hạn của kế thừa trong Java",
        "subsections": [
          {
            "id": "oop-sub-inheritance-limitations",
            "number": "",
            "title": "Đơn kế thừa"
          }
        ]
      },
      {
        "id": "oop-inheritance-quiz-chaining-sec",
        "roman": "IX",
        "title": "Quick Quiz (Kế thừa 3 tầng & Đa hình)",
        "subsections": [
          {
            "id": "oop-sub-inheritance-quiz-chaining",
            "number": "1",
            "title": "Quiz 1 — Kế thừa 3 tầng (ClassA → B → C)"
          },
          {
            "id": "oop-sub-inheritance-quiz-compilerun",
            "number": "2",
            "title": "Quiz 2 — Ghi đè & Đa hình"
          }
        ]
      },
      {
        "id": "oop-inheritance-summary-sec",
        "roman": "X",
        "title": "Tổng kết (Summary)",
        "subsections": [
          {
            "id": "oop-sub-inheritance-summary",
            "number": "",
            "title": "Ôn tập toàn bài"
          }
        ]
      }
    ]
  },
  {
    "id": "oop-abstract-class",
    "title": "Bài 8",
    "subtitle": "Abstract Class",
    "sections": [
      {
        "id": "oop-abstract-class-sec",
        "roman": "I",
        "title": "Abstraction (Trừu tượng hóa)",
        "subsections": [
          {
            "id": "oop-sub-abstraction-concept",
            "number": "1",
            "title": "Khái niệm Abstraction"
          },
          {
            "id": "oop-sub-abstraction-methods",
            "number": "2",
            "title": "Hai cách đạt được Abstraction trong Java"
          }
        ]
      },
      {
        "id": "oop-abstract-class-java-sec",
        "roman": "II",
        "title": "Abstract Class (Lớp trừu tượng) trong Java",
        "subsections": [
          {
            "id": "oop-sub-abstract-class-definition",
            "number": "1",
            "title": "Định nghĩa & Đặc điểm"
          },
          {
            "id": "oop-sub-abstract-class-syntax",
            "number": "2",
            "title": "Cú pháp (Syntax)"
          },
          {
            "id": "oop-sub-abstract-class-examples",
            "number": "3",
            "title": "Ví dụ minh họa"
          },
          {
            "id": "oop-sub-abstract-class-notations",
            "number": "4",
            "title": "Lưu ý quan trọng"
          },
          {
            "id": "oop-sub-abstract-class-combined",
            "number": "5",
            "title": "Ví dụ kết hợp tổng hợp"
          }
        ]
      },
      {
        "id": "oop-abstract-class-summary-sec",
        "roman": "III",
        "title": "Tổng kết (Summary)",
        "subsections": [
          {
            "id": "oop-sub-abstract-class-summary",
            "number": "",
            "title": "Tổng kết & Ghi nhớ toàn bài"
          }
        ]
      }
    ]
  },
  {
    "id": "oop-interface",
    "title": "Bài 9",
    "subtitle": "Interface",
    "sections": [
      {
        "id": "oop-interface-software-engineering-sec",
        "roman": "I",
        "title": "Các vấn đề trong Kỹ thuật phần mềm (Động lực)",
        "subsections": [
          {
            "id": "oop-sub-design-principles",
            "number": "1",
            "title": "Nguyên tắc thiết kế chương trình"
          },
          {
            "id": "oop-sub-info-hiding",
            "number": "2",
            "title": "Information Hiding (Che giấu thông tin)"
          },
          {
            "id": "oop-sub-pre-post-conditions",
            "number": "3",
            "title": "Pre-conditions & Post-conditions"
          },
          {
            "id": "oop-sub-data-abstraction-adt",
            "number": "4",
            "title": "Data Abstraction & ADT"
          }
        ]
      },
      {
        "id": "oop-interface-adt-sec",
        "roman": "II",
        "title": "Kiểu dữ liệu trừu tượng (Abstract Data Type - ADT)",
        "subsections": [
          {
            "id": "oop-sub-adt-cohesion",
            "number": "1",
            "title": "Cohesion & Coupling trong Thiết kế Lớp"
          },
          {
            "id": "oop-sub-adt-water-dispenser",
            "number": "2",
            "title": "Ví dụ thực tế: Máy lọc nước ADT"
          },
          {
            "id": "oop-sub-adt-spec-operations",
            "number": "3",
            "title": "Đặc tả ADT và Bảng phép toán"
          },
          {
            "id": "oop-sub-adt-complex-number",
            "number": "4",
            "title": "Biểu diễn Số phức dưới dạng ADT"
          }
        ]
      },
      {
        "id": "oop-interface-java-sec",
        "roman": "III",
        "title": "Java Interface",
        "subsections": [
          {
            "id": "oop-sub-interface-concept",
            "number": "1",
            "title": "Khái niệm Interface & Comparable"
          },
          {
            "id": "oop-sub-interface-complex",
            "number": "2",
            "title": "Thiết kế Số phức Complex Interface"
          },
          {
            "id": "oop-sub-interface-polymorphism",
            "number": "3",
            "title": "Lớp kiểm thử & Tính đa hình (JVM Memory)"
          },
          {
            "id": "oop-sub-interface-precision",
            "number": "4",
            "title": "Ép kiểu & So sánh số thực (instanceof, equals)"
          }
        ]
      },
      {
        "id": "oop-interface-fraction-sec",
        "roman": "IV",
        "title": "Fraction là một ADT (Bài tập thực hành)",
        "subsections": [
          {
            "id": "oop-sub-fraction-adt",
            "number": "1",
            "title": "Thực hành ADT Fraction"
          }
        ]
      },
      {
        "id": "oop-interface-summary-sec",
        "roman": "V",
        "title": "Tổng kết chương & Thử thách ôn thi",
        "subsections": [
          {
            "id": "oop-sub-interface-summary",
            "number": "2",
            "title": "Tổng kết & Thử thách Flashcard ôn thi"
          }
        ]
      }
    ]
  },
  {
    "id": "oop-collection-of-data",
    "title": "Bài 10",
    "subtitle": "Collection of Data",
    "sections": [
      {
        "id": "oop-collection-array-sec",
        "roman": "I",
        "title": "Mảng (Array)",
        "subsections": [
          {
            "id": "oop-sub-collection-intro-c",
            "number": "1",
            "title": "Giới thiệu & Mảng trong C"
          },
          {
            "id": "oop-sub-collection-java-loop",
            "number": "2",
            "title": "Mảng trong Java & Duyệt mảng"
          },
          {
            "id": "oop-sub-collection-reference-cli",
            "number": "3",
            "title": "Mảng làm tham số & Command-line Args"
          },
          {
            "id": "oop-sub-collection-array-errors",
            "number": "4",
            "title": "Trả về mảng & Lỗi thường gặp (NullPointer)"
          },
          {
            "id": "oop-sub-collection-array-2d",
            "number": "5",
            "title": "Mảng 2 chiều & Mảng răng cưa"
          },
          {
            "id": "oop-sub-collection-array-drawbacks",
            "number": "6",
            "title": "Nhược điểm của mảng & Giới thiệu Vector/ArrayList"
          }
        ]
      },
      {
        "id": "oop-collection-generics-sec",
        "roman": "II",
        "title": "Generics (Kiểu tổng quát)",
        "subsections": [
          {
            "id": "oop-sub-collection-generics-intro",
            "number": "1",
            "title": "Động lực & Lớp Pair tổng quát"
          },
          {
            "id": "oop-sub-collection-generics-autoboxing",
            "number": "2",
            "title": "Autoboxing & Unboxing"
          },
          {
            "id": "oop-sub-collection-generics-multi",
            "number": "3",
            "title": "Nhiều kiểu tổng quát & Tổng kết Generics"
          }
        ]
      },
      {
        "id": "oop-collection-vector-sec",
        "roman": "III",
        "title": "Vector",
        "subsections": [
          {
            "id": "oop-sub-collection-vector-intro",
            "number": "1",
            "title": "Khái niệm & Bảng phương thức Vector"
          },
          {
            "id": "oop-sub-collection-vector-example",
            "number": "2",
            "title": "Ví dụ thực tế & So sánh đồng bộ (Synchronized)"
          }
        ]
      },
      {
        "id": "oop-collection-arraylist-sec",
        "roman": "IV",
        "title": "ArrayList",
        "subsections": [
          {
            "id": "oop-sub-collection-arraylist-intro",
            "number": "1",
            "title": "Giới thiệu (Introduction)"
          },
          {
            "id": "oop-sub-collection-arraylist-api",
            "number": "2",
            "title": "Tài liệu API (API Documentation)"
          },
          {
            "id": "oop-sub-collection-arraylist-example",
            "number": "3",
            "title": "Ví dụ (Example)"
          }
        ]
      },
      {
        "id": "oop-collection-summary-sec",
        "roman": "V",
        "title": "Tổng kết bài học (Summary)",
        "subsections": [
          {
            "id": "oop-sub-collection-summary",
            "number": "",
            "title": "Tổng kết & Ghi nhớ tổng quát"
          },
          {
            "id": "oop-sub-collection-exercises",
            "number": "",
            "title": "Bài tập thực hành (Practice Exercises)"
          }
        ]
      }
    ]
  },
  {
    "id": "oop-exceptions",
    "title": "Bài 11",
    "subtitle": "Exceptions",
    "sections": [
      {
        "id": "oop-exceptions-goals-sec",
        "roman": "",
        "title": "Mục tiêu bài học (Objectives)",
        "subsections": [
          {
            "id": "oop-sub-exceptions-goals",
            "number": "",
            "title": "Mục tiêu bài học"
          }
        ]
      },
      {
        "id": "oop-exceptions-motivation-sec",
        "roman": "I",
        "title": "Motivation (Động lực)",
        "subsections": [
          {
            "id": "oop-sub-exceptions-error-types",
            "number": "1",
            "title": "Ba loại lỗi trong lập trình"
          },
          {
            "id": "oop-sub-exceptions-runtime-example",
            "number": "2",
            "title": "Ví dụ minh họa lỗi run-time (Example.java)"
          },
          {
            "id": "oop-sub-exceptions-factorial-negative",
            "number": "3",
            "title": "Ví dụ: phương thức factorial() với tham số âm"
          },
          {
            "id": "oop-sub-exceptions-java-mechanism",
            "number": "4",
            "title": "Giải pháp: Cơ chế Exception của Java"
          }
        ]
      },
      {
        "id": "oop-exceptions-indication-sec",
        "roman": "II",
        "title": "Exception Indication (Báo hiệu ngoại lệ)",
        "subsections": [
          {
            "id": "oop-sub-exceptions-indication-syntax",
            "number": "1",
            "title": "Cú pháp (Syntax)"
          },
          {
            "id": "oop-sub-exceptions-indication-constructor",
            "number": "2",
            "title": "Constructor và phương thức chung của lớp Exception"
          },
          {
            "id": "oop-sub-exceptions-indication-example",
            "number": "3",
            "title": "Ví dụ báo hiệu ngoại lệ (Exception Indication Example)"
          }
        ]
      },
      {
        "id": "oop-exceptions-handling-sec",
        "roman": "III",
        "title": "Exception Handling (Xử lý ngoại lệ)",
        "subsections": [
          {
            "id": "oop-sub-exceptions-handling-example1",
            "number": "1",
            "title": "Ví dụ #1: Nhập số nguyên có xử lý lỗi (ExampleImproved.java)"
          },
          {
            "id": "oop-sub-exceptions-handling-syntax",
            "number": "2",
            "title": "Cú pháp tổng quát Exception Handling"
          },
          {
            "id": "oop-sub-exceptions-handling-example-factorial",
            "number": "3",
            "title": "Ví dụ xử lý exception với factorial() (TestException.java)"
          }
        ]
      },
      {
        "id": "oop-exceptions-flow-sec",
        "roman": "IV",
        "title": "Execution Flow (Luồng thực thi khi có Exception)",
        "subsections": [
          {
            "id": "oop-sub-exceptions-flow-cases",
            "number": "1",
            "title": "Trường hợp KHÔNG có lỗi (n = 4) vs Có lỗi (n = -2)"
          },
          {
            "id": "oop-sub-exceptions-flow-retry",
            "number": "2",
            "title": "Phiên bản khác: Lặp lại cho đến khi nhập đúng (TestExceptionRetry.java)"
          }
        ]
      },
      {
        "id": "oop-exceptions-checked-unchecked-sec",
        "roman": "V",
        "title": "Checked vs Unchecked Exceptions",
        "subsections": [
          {
            "id": "oop-sub-exceptions-checked-unchecked-concept",
            "number": "1",
            "title": "Khái niệm"
          },
          {
            "id": "oop-sub-exceptions-checked-unchecked-cause",
            "number": "2",
            "title": "Nguyên nhân và lý do"
          }
        ]
      },
      {
        "id": "oop-exceptions-custom-sec",
        "roman": "VI",
        "title": "Định nghĩa lớp Exception mới (Defining New Exception Classes)",
        "subsections": [
          {
            "id": "oop-sub-exceptions-custom-create",
            "number": "1",
            "title": "Cách tạo lớp Exception tùy chỉnh"
          },
          {
            "id": "oop-sub-exceptions-custom-use",
            "number": "2",
            "title": "Cách sử dụng lớp Exception tự định nghĩa"
          }
        ]
      },
      {
        "id": "oop-exceptions-bank-sec",
        "roman": "VII",
        "title": "Ví dụ tổng hợp: Bank Account (Tài khoản ngân hàng)",
        "subsections": [
          {
            "id": "oop-sub-exceptions-bank-custom",
            "number": "1",
            "title": "Lớp Exception tùy chỉnh: NotEnoughFundException.java"
          },
          {
            "id": "oop-sub-exceptions-bank-class",
            "number": "2",
            "title": "Lớp BankAcct.java (phần khai báo & getter)"
          },
          {
            "id": "oop-sub-exceptions-bank-methods",
            "number": "3",
            "title": "Phương thức deposit() và withdraw()"
          },
          {
            "id": "oop-sub-exceptions-bank-test",
            "number": "4",
            "title": "Chương trình kiểm thử: TestBankAcct.java và Xử lý với try-catch-finally"
          }
        ]
      },
      {
        "id": "oop-exceptions-summary-sec",
        "roman": "VIII",
        "title": "Tổng kết (Summary)",
        "subsections": [
          {
            "id": "oop-sub-exceptions-summary-all",
            "number": "1",
            "title": "Tóm tắt chương học"
          }
        ]
      }
    ]
  },
  {
    "id": "oop-file",
    "title": "Bài 12",
    "subtitle": "File I/O",
    "sections": [
      {
        "id": "oop-file-goals-sec",
        "roman": "",
        "title": "Mục tiêu bài học (Objectives)",
        "subsections": [
          {
            "id": "oop-sub-file-goals",
            "number": "",
            "title": "Mục tiêu học tập chính"
          }
        ]
      },
      {
        "id": "oop-stream-overview-sec",
        "roman": "I",
        "title": "Tổng quan về Stream Classes",
        "subsections": [
          {
            "id": "oop-sub-file-streams-concept",
            "number": "1",
            "title": "Khái niệm Stream (luồng)"
          },
          {
            "id": "oop-sub-file-streams-phys",
            "number": "2",
            "title": "Đọc tệp tin vật lý"
          },
          {
            "id": "oop-sub-file-streams-std",
            "number": "3",
            "title": "Luồng nhập/xuất tiêu chuẩn"
          },
          {
            "id": "oop-sub-file-stream-need-all",
            "number": "4",
            "title": "Nhu cầu sử dụng Stream"
          },
          {
            "id": "oop-sub-file-stream-steps-all",
            "number": "5",
            "title": "Quy trình sử dụng"
          },
          {
            "id": "oop-sub-package-java-io-concept",
            "number": "6",
            "title": "Package java.io"
          }
        ]
      },
      {
        "id": "oop-file-class-group-sec",
        "roman": "II",
        "title": "Lớp File và FileDescriptor",
        "subsections": [
          {
            "id": "oop-sub-file-class-concept",
            "number": "1",
            "title": "Khái niệm & Pathname"
          },
          {
            "id": "oop-sub-file-class-methods",
            "number": "2",
            "title": "Phương thức thư mục & constructor"
          },
          {
            "id": "oop-sub-file-methods-table",
            "number": "3",
            "title": "Danh sách phương thức lớp File"
          },
          {
            "id": "oop-sub-file-descriptor-concept",
            "number": "4",
            "title": "Khái niệm FileDescriptor"
          }
        ]
      },
      {
        "id": "oop-byte-input-group-sec",
        "roman": "III",
        "title": "Lớp luồng nhập dạng Byte",
        "subsections": [
          {
            "id": "oop-sub-inputstream-methods-table",
            "number": "1",
            "title": "Các phương thức của InputStream"
          },
          {
            "id": "oop-sub-file-inputstream-concept",
            "number": "2",
            "title": "FileInputStream Class"
          },
          {
            "id": "oop-sub-bytearray-inputstream-concept",
            "number": "3",
            "title": "ByteArrayInputStream Class"
          }
        ]
      },
      {
        "id": "oop-byte-output-group-sec",
        "roman": "IV",
        "title": "Lớp luồng xuất dạng Byte",
        "subsections": [
          {
            "id": "oop-sub-outputstream-concept",
            "number": "1",
            "title": "Khái niệm OutputStream"
          },
          {
            "id": "oop-sub-file-outputstream-features",
            "number": "2",
            "title": "FileOutputStream Class"
          },
          {
            "id": "oop-sub-bytearray-outputstream-features",
            "number": "3",
            "title": "ByteArrayOutputStream Class"
          }
        ]
      },
      {
        "id": "oop-buffered-filter-group-sec",
        "roman": "V",
        "title": "Luồng bộ đệm và Luồng lọc",
        "subsections": [
          {
            "id": "oop-sub-filter-streams-concept",
            "number": "1",
            "title": "Khái niệm Luồng lọc (Filter)"
          },
          {
            "id": "oop-sub-buffered-streams-concept",
            "number": "2",
            "title": "Khái niệm Luồng bộ đệm (Buffered)"
          },
          {
            "id": "oop-sub-buffered-inputstream-detail",
            "number": "3",
            "title": "Lớp BufferedInputStream"
          },
          {
            "id": "oop-sub-buffered-outputstream-detail",
            "number": "4",
            "title": "Lớp BufferedOutputStream"
          }
        ]
      },
      {
        "id": "oop-char-streams-group-sec",
        "roman": "VI",
        "title": "Luồng xử lý ký tự",
        "subsections": [
          {
            "id": "oop-sub-char-streams-concept",
            "number": "1",
            "title": "Khái niệm Character Stream"
          },
          {
            "id": "oop-sub-reader-class",
            "number": "2",
            "title": "Reader Class & Writer Class"
          },
          {
            "id": "oop-sub-printwriter-class",
            "number": "3",
            "title": "PrintWriter Class & Ví dụ"
          },
          {
            "id": "oop-sub-char-array-reader-detail",
            "number": "4",
            "title": "Lớp CharArrayReader"
          },
          {
            "id": "oop-sub-char-array-writer-features",
            "number": "5",
            "title": "Lớp CharArrayWriter"
          }
        ]
      },
      {
        "id": "oop-chaining-io-group-sec",
        "roman": "VII",
        "title": "Chuỗi hóa hệ thống I/O",
        "subsections": [
          {
            "id": "oop-sub-chaining-io-concept",
            "number": "1",
            "title": "Khái niệm Chaining I/O"
          }
        ]
      },
      {
        "id": "oop-serialization-group-sec",
        "roman": "VIII",
        "title": "Tuần tự hóa đối tượng",
        "subsections": [
          {
            "id": "oop-sub-data-input-output-concept",
            "number": "1",
            "title": "Interface DataInput & DataOutput"
          },
          {
            "id": "oop-sub-serialization-concept",
            "number": "2",
            "title": "Khái niệm & Quy tắc Serialization"
          },
          {
            "id": "oop-sub-object-outputstream-detail",
            "number": "3",
            "title": "Lớp ObjectOutputStream"
          },
          {
            "id": "oop-sub-object-inputstream-detail",
            "number": "4",
            "title": "Lớp ObjectInputStream"
          }
        ]
      },
      {
        "id": "oop-file-summary-group-sec",
        "roman": "IX",
        "title": "Tổng kết (Summary)",
        "subsections": [
          {
            "id": "oop-sub-file-summary",
            "number": "1",
            "title": "Tổng kết chương"
          }
        ]
      }
    ]
  },
  {
    "id": "oop-nested-class",
    "title": "Bài 13",
    "subtitle": "Nested Class",
    "sections": [
      {
        "id": "oop-nested-class-sec",
        "roman": "",
        "title": "Nội dung bài học",
        "subsections": [
          {
            "id": "oop-sub-nested-class",
            "number": "",
            "title": "Bài giảng chi tiết"
          }
        ]
      }
    ]
  },
  {
    "id": "oop-design-pattern",
    "title": "Bài 14 & 15",
    "subtitle": "Design Patterns",
    "sections": [
      {
        "id": "oop-design-pattern-sec",
        "roman": "",
        "title": "Nội dung bài học",
        "subsections": [
          {
            "id": "oop-sub-design-pattern",
            "number": "",
            "title": "Bài giảng chi tiết"
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
    "id": "dsa-b1",
    "title": "Bài 1",
    "subtitle": "Abstract Data Type (ADT)",
    "sections": [
      {
        "id": "dsa-b1-sec1",
        "roman": "I",
        "title": "Software Engineering Issues (Motivation) & Abstract Data Type (ADT)",
        "subsections": [
          {
            "id": "dsa-b1-sub-1-1",
            "number": "1.1",
            "title": "Program Design Principles (Bốn nguyên lý thiết kế chương trình)"
          },
          {
            "id": "dsa-b1-sub-1-2",
            "number": "1.2",
            "title": "Information Hiding - Chi tiết & Bức tường (Walls & Mirrors)"
          },
          {
            "id": "dsa-b1-sub-1-3",
            "number": "1.3",
            "title": "Pre-conditions và Post-conditions (Hợp đồng cho tài liệu)"
          },
          {
            "id": "dsa-b1-sub-1-4",
            "number": "1.4",
            "title": "Data Abstraction & Abstract Data Type (ADT)"
          },
          {
            "id": "dsa-b1-sub-summary-1",
            "number": "📌",
            "title": "📌 Cần nhớ Phần I"
          }
        ]
      },
      {
        "id": "dsa-b1-sec2",
        "roman": "II",
        "title": "Abstract Data Type (ADT) - Chuyên sâu & Các Ví dụ Thực tế",
        "subsections": [
          {
            "id": "dsa-b1-sub-2-1",
            "number": "2.1",
            "title": "Data Structure & Ví dụ Lưu trữ Nhân viên (Employee)"
          },
          {
            "id": "dsa-b1-sub-2-2",
            "number": "2.2",
            "title": "Abstract Data Type (ADT) – Khái niệm Cốt lõi"
          },
          {
            "id": "dsa-b1-sub-2-3",
            "number": "2.3",
            "title": "Ví dụ trực quan – Máy lọc nước (Water Dispenser) như một ADT"
          },
          {
            "id": "dsa-b1-sub-2-4",
            "number": "2.4",
            "title": "Wall of ADT Operations & Interface"
          },
          {
            "id": "dsa-b1-sub-2-5",
            "number": "2.5",
            "title": "Ví dụ: Kiểu nguyên thủy (Primitive Types) như ADT & Phân loại Operations"
          },
          {
            "id": "dsa-b1-sub-2-6",
            "number": "2.6",
            "title": "Ví dụ: Complex Number (Số phức) như ADT"
          },
          {
            "id": "dsa-b1-sub-summary-2",
            "number": "📌",
            "title": "📌 Cần nhớ Phần II"
          }
        ]
      },
      {
        "id": "dsa-b1-sec3",
        "roman": "III",
        "title": "Java Interface",
        "subsections": [
          {
            "id": "dsa-b1-sub-3-1",
            "number": "3.1",
            "title": "Khái niệm Java Interface"
          },
          {
            "id": "dsa-b1-sub-3-2",
            "number": "3.2",
            "title": "Ví dụ #1 – Interface Comparable<T> và Class Shape"
          },
          {
            "id": "dsa-b1-sub-3-3",
            "number": "3.3",
            "title": "Ví dụ #2 – Complex Interface (Java 7 vs Java 8+ Default Methods)"
          },
          {
            "id": "dsa-b1-sub-3-4",
            "number": "3.4",
            "title": "Implementation – ComplexCart (Cartesian) & Câu hỏi mở toString()"
          },
          {
            "id": "dsa-b1-sub-3-5",
            "number": "3.5",
            "title": "Implementation – ComplexPolar (Polar)"
          },
          {
            "id": "dsa-b1-sub-3-6",
            "number": "3.6",
            "title": "Test Complex & Kết quả thực thi Console Output"
          },
          {
            "id": "dsa-b1-sub-3-7",
            "number": "3.7",
            "title": "Lưu ý thêm về Interface (Bytecode, Casting, instanceof & EPSILON)"
          },
          {
            "id": "dsa-b1-sub-summary-3",
            "number": "📌",
            "title": "📌 Cần nhớ Phần III"
          }
        ]
      },
      {
        "id": "dsa-b1-sec4",
        "roman": "IV",
        "title": "Fraction as ADT (Practice Exercises)",
        "subsections": [
          {
            "id": "dsa-b1-sub-4-1",
            "number": "4.1",
            "title": "Thiết kế ADT cho Fraction (Phân số)"
          },
          {
            "id": "dsa-b1-sub-4-2",
            "number": "4.2",
            "title": "Interface FractionI"
          },
          {
            "id": "dsa-b1-sub-4-3",
            "number": "4.3",
            "title": "Hai cách implement FractionI"
          },
          {
            "id": "dsa-b1-sub-4-4",
            "number": "4.4",
            "title": "PracEx#26 – Fraction (dùng 2 biến int)"
          },
          {
            "id": "dsa-b1-sub-4-5",
            "number": "4.5",
            "title": "PracEx#27 – FractionArr (dùng mảng int[2])"
          },
          {
            "id": "dsa-b1-sub-summary-4",
            "number": "📌",
            "title": "📌 Cần nhớ Phần IV"
          }
        ]
      },
      {
        "id": "dsa-b1-sec5",
        "roman": "V",
        "title": "Summary (Tổng kết bài học)",
        "subsections": [
          {
            "id": "dsa-b1-sub-5-1",
            "number": "5.1",
            "title": "Tổng quan bài học"
          },
          {
            "id": "dsa-b1-sub-summary-5",
            "number": "📌",
            "title": "📌 Cần nhớ tổng quát cả bài"
          }
        ]
      }
    ]
  },
  {
    "id": "dsa-b2",
    "title": "Bài 2",
    "subtitle": "Linked List",
    "sections": [
      {
        "id": "dsa-b2-sec1",
        "roman": "I–III",
        "title": "Use of a List, List ADT & Array Implementation",
        "subsections": [
          {
            "id": "dsa-b2-sub-1-1",
            "number": "1.1",
            "title": "1. Use of a List (Motivation)"
          },
          {
            "id": "dsa-b2-sub-2-1",
            "number": "2.1",
            "title": "2.1 Khái niệm List ADT (Abstract Data Type)"
          },
          {
            "id": "dsa-b2-sub-2-2",
            "number": "2.2",
            "title": "2.2 ListInterface.java"
          },
          {
            "id": "dsa-b2-sub-2-3",
            "number": "2.3",
            "title": "2.3 Hai cách hiện thực (Implementation) List ADT"
          },
          {
            "id": "dsa-b2-sub-3-1",
            "number": "3.1",
            "title": "3.1 Khái niệm List Implementation via Array (Fixed-size list)"
          },
          {
            "id": "dsa-b2-sub-3-2",
            "number": "3.2",
            "title": "3.2 Class ListUsingArray & Full Source Code"
          },
          {
            "id": "dsa-b2-sub-3-3",
            "number": "3.3",
            "title": "3.3 Cách hoạt động: addFirst() / removeFirst()"
          },
          {
            "id": "dsa-b2-sub-3-4",
            "number": "3.4",
            "title": "3.4 Time / Space Complexity & So sánh Array vs Linked List"
          },
          {
            "id": "dsa-b2-sub-summary-1",
            "number": "📌",
            "title": "Cần nhớ Tổng hợp Phần I, II & III"
          }
        ]
      },
      {
        "id": "dsa-b2-sec2",
        "roman": "IV–VI",
        "title": "Linked List Implementation, ListNode & Forming",
        "subsections": [
          {
            "id": "dsa-b2-sub-4-1",
            "number": "4.1",
            "title": "4.1 So sánh trực quan: Array vs Linked List"
          },
          {
            "id": "dsa-b2-sub-4-2",
            "number": "4.2",
            "title": "4.2 Ý tưởng (Idea) của Linked List"
          },
          {
            "id": "dsa-b2-sub-4-3",
            "number": "4.3",
            "title": "4.3 Ôn lại Object References (Reference data type)"
          },
          {
            "id": "dsa-b2-sub-5-1",
            "number": "5.1",
            "title": "5. ListNode – Đơn vị cơ bản của Linked List"
          },
          {
            "id": "dsa-b2-sub-6-1",
            "number": "6.1",
            "title": "6. Forming a Linked List (Tạo 1 Linked List)"
          },
          {
            "id": "dsa-b2-sub-summary-2",
            "number": "📌",
            "title": "Cần nhớ Tổng hợp Phần IV, V & VI"
          }
        ]
      },
      {
        "id": "dsa-b2-sec3",
        "roman": "VII",
        "title": "Basic Linked List (BasicLinkedList)",
        "subsections": [
          {
            "id": "dsa-b2-sub-7-1",
            "number": "7.1",
            "title": "7.1 - 7.2 Khái niệm & Code cơ bản BasicLinkedList"
          },
          {
            "id": "dsa-b2-sub-7-2",
            "number": "7.2",
            "title": "7.3 addFirst() – Cách hoạt động & Boundary Cases"
          },
          {
            "id": "dsa-b2-sub-7-3",
            "number": "7.3",
            "title": "7.4 removeFirst() – Cách hoạt động & Boundary Cases"
          },
          {
            "id": "dsa-b2-sub-7-4",
            "number": "7.4",
            "title": "7.5 - 7.6 print() & Ví dụ sử dụng (Test Client)"
          },
          {
            "id": "dsa-b2-sub-7-5",
            "number": "7.5",
            "title": "7.7 Time Complexity & 📌 Cần nhớ"
          },
          {
            "id": "dsa-b2-sub-summary-3",
            "number": "📌",
            "title": "Cần nhớ Tổng hợp Phần VII"
          }
        ]
      },
      {
        "id": "dsa-b2-sec4",
        "roman": "VIII.1–2",
        "title": "Enhanced Linked List (ELL)",
        "subsections": [
          {
            "id": "dsa-b2-sub-8-1",
            "number": "8.1",
            "title": "8.1 Sơ đồ tổng quan các biến thể Linked List"
          },
          {
            "id": "dsa-b2-sub-8-2",
            "number": "8.2",
            "title": "8.2 Khái niệm Enhanced Linked List & EnhancedListInterface"
          },
          {
            "id": "dsa-b2-sub-8-3",
            "number": "8.3",
            "title": "8.2 addAfter() & removeAfter() – Cách hoạt động & Quy ước"
          },
          {
            "id": "dsa-b2-sub-8-4",
            "number": "8.4",
            "title": "8.2 remove(item) & Chương trình Test ELL"
          },
          {
            "id": "dsa-b2-sub-summary-4",
            "number": "📌",
            "title": "Cần nhớ Tổng hợp Enhanced LinkedList (ELL)"
          }
        ]
      },
      {
        "id": "dsa-b2-sec5",
        "roman": "VIII.3–4",
        "title": "Tailed Linked List (TLL) & Complexity Comparison",
        "subsections": [
          {
            "id": "dsa-b2-sub-8-5",
            "number": "8.5",
            "title": "8.3 Khái niệm Tailed Linked List (TLL)"
          },
          {
            "id": "dsa-b2-sub-8-6",
            "number": "8.6",
            "title": "8.3 addLast(item) O(1) & Con trỏ Dual Pointer (head & tail)"
          },
          {
            "id": "dsa-b2-sub-8-7",
            "number": "8.7",
            "title": "8.3 Ma trận 4 Trường hợp Biên của TLL (addAfter & removeAfter)"
          },
          {
            "id": "dsa-b2-sub-8-8",
            "number": "8.8",
            "title": "8.4 Time / Space Complexity so sánh (BasicLinkedList vs TailedLinkedList)"
          },
          {
            "id": "dsa-b2-sub-summary-5",
            "number": "📌",
            "title": "Cần nhớ Tổng hợp Tailed LinkedList (TLL)"
          }
        ]
      },
      {
        "id": "dsa-b2-sec6",
        "roman": "IX",
        "title": "Other Variants (Circular & Doubly Linked List)",
        "subsections": [
          {
            "id": "dsa-b2-sub-9-1",
            "number": "9.1",
            "title": "9.1 Circular Linked List (Danh sách Liên kết Vòng)"
          },
          {
            "id": "dsa-b2-sub-9-2",
            "number": "9.2",
            "title": "9.2 Doubly Linked List & DListNode.java"
          },
          {
            "id": "dsa-b2-sub-summary-6",
            "number": "📌",
            "title": "Cần nhớ Các biến thể Linked List (CLL & DLL)"
          }
        ]
      },
      {
        "id": "dsa-b2-sec7",
        "roman": "X–XI",
        "title": "Java API LinkedList & Reinvent the Wheel",
        "subsections": [
          {
            "id": "dsa-b2-sub-10-1",
            "number": "10.1",
            "title": "10.1 Khái niệm class java.util.LinkedList"
          },
          {
            "id": "dsa-b2-sub-10-2",
            "number": "10.2",
            "title": "10.2 Ví dụ sử dụng (TestLinkedListAPI.java)"
          },
          {
            "id": "dsa-b2-sub-11-1",
            "number": "11.1",
            "title": "11. Tại sao phải \"reinvent the wheel\"? (Tự viết lại dù đã có API)"
          },
          {
            "id": "dsa-b2-sub-summary-7",
            "number": "📌",
            "title": "Cần nhớ Phần X & XI"
          }
        ]
      },
      {
        "id": "dsa-b2-sec8",
        "roman": "XII–XIV",
        "title": "Summary (Tổng kết), Homework & Công cụ trực quan",
        "subsections": [
          {
            "id": "dsa-b2-sub-12-1",
            "number": "12.1",
            "title": "12. Summary (Tổng kết Bài 2: List ADT)"
          },
          {
            "id": "dsa-b2-sub-13-1",
            "number": "13.1",
            "title": "13. Homework (Bài tập về nhà)"
          },
          {
            "id": "dsa-b2-sub-14-1",
            "number": "14.1",
            "title": "14. Công cụ trực quan hoá (Visualising Data Structures)"
          },
          {
            "id": "dsa-b2-sub-summary-8",
            "number": "📌",
            "title": "Cần nhớ (Tổng kết cả bài - Trọng tâm ôn thi)"
          }
        ]
      }
    ]
  },
  {
    "id": "dsa-b3",
    "title": "Bài 3",
    "subtitle": "Stack & Queue ADT",
    "sections": [
      {
        "id": "dsa-b3-sec1",
        "roman": "I",
        "title": "Stack ADT (Khái niệm, Operations, Ứng dụng & Interface)",
        "subsections": [
          {
            "id": "dsa-b3-sub-1-0",
            "number": "1.0",
            "title": "Giới thiệu Bài 3: Stack & Queue ADT"
          },
          {
            "id": "dsa-b3-sub-1-1",
            "number": "1.1",
            "title": "1.1 Khái niệm Stack"
          },
          {
            "id": "dsa-b3-sub-1-2",
            "number": "1.2",
            "title": "1.2 Các thao tác chính (Operations)"
          },
          {
            "id": "dsa-b3-sub-1-3",
            "number": "1.3",
            "title": "1.3 Ứng dụng của Stack (Uses)"
          },
          {
            "id": "dsa-b3-sub-1-4",
            "number": "1.4",
            "title": "1.4 Interface StackADT & 1.5 Ví dụ minh họa (Usage)"
          },
          {
            "id": "dsa-b3-sub-summary-1",
            "number": "📌",
            "title": "Cần nhớ Mục 1 (Stack ADT)"
          }
        ]
      },
      {
        "id": "dsa-b3-sec2",
        "roman": "II",
        "title": "Cài đặt Stack bằng Array (Stack Implementation: Array)",
        "subsections": [
          {
            "id": "dsa-b3-sub-2-1",
            "number": "2.1",
            "title": "2.1 Cách hoạt động"
          },
          {
            "id": "dsa-b3-sub-2-2",
            "number": "2.2",
            "title": "2.2 Code: Khởi tạo, empty(), peek() & pop()"
          },
          {
            "id": "dsa-b3-sub-2-4",
            "number": "2.4",
            "title": "2.4 Code: push() và xử lý tràn (enlargeArr)"
          },
          {
            "id": "dsa-b3-sub-2-5",
            "number": "2.5",
            "title": "2.5 Time / Space Complexity"
          },
          {
            "id": "dsa-b3-sub-summary-2",
            "number": "📌",
            "title": "Cần nhớ Mục 2 (Stack Implementation: Array)"
          }
        ]
      },
      {
        "id": "dsa-b3-sec3",
        "roman": "III",
        "title": "Cài đặt Stack bằng Linked List",
        "subsections": [
          {
            "id": "dsa-b3-sub-3-1",
            "number": "3.1",
            "title": "3.1 Hai cách định nghĩa class (Composition vs Inheritance)"
          },
          {
            "id": "dsa-b3-sub-3-2-3-3",
            "number": "3.2–3.3",
            "title": "3.2 & 3.3 Ôn lại ListNode & BasicLinkedList (Bài trước)"
          },
          {
            "id": "dsa-b3-sub-3-4-3-5",
            "number": "3.4–3.5",
            "title": "3.4 & 3.5 Cài đặt StackLL (Composition) & StackLLE (Inheritance)"
          },
          {
            "id": "dsa-b3-sub-3-6",
            "number": "3.6",
            "title": "3.6 Ví dụ dùng Stack (chọn 1 trong 4 cách cài đặt)"
          },
          {
            "id": "dsa-b3-sub-3-7",
            "number": "3.7",
            "title": "3.7 Time / Space Complexity (Linked List)"
          }
        ]
      },
      {
        "id": "dsa-b3-sec4",
        "roman": "IV",
        "title": "Lớp java.util.Stack<E>",
        "subsections": [
          {
            "id": "dsa-b3-sub-4-1",
            "number": "4.1",
            "title": "4.1 Constructor & Method Summary"
          }
        ]
      },
      {
        "id": "dsa-b3-sec5",
        "roman": "V",
        "title": "Ứng dụng 1: Khớp dấu ngoặc (Bracket Matching)",
        "subsections": [
          {
            "id": "dsa-b3-sub-5-1",
            "number": "5.1–5.3",
            "title": "5. Khái niệm, Thuật toán & Trực quan hoá Khớp dấu ngoặc"
          }
        ]
      },
      {
        "id": "dsa-b3-sec6",
        "roman": "VI",
        "title": "Ứng dụng 2: Biểu thức số học (Arithmetic Expression)",
        "subsections": [
          {
            "id": "dsa-b3-sub-6-1-6-2",
            "number": "6.1–6.2",
            "title": "6.1 & 6.2 Thuật ngữ & Dạng Infix - Prefix - Postfix"
          },
          {
            "id": "dsa-b3-sub-6-3",
            "number": "6.3",
            "title": "6.3 Thuật toán tính giá trị biểu thức Postfix"
          },
          {
            "id": "dsa-b3-sub-6-4-6-6",
            "number": "6.4–6.6",
            "title": "6.4–6.6 Thuật toán & Mã nguồn chuyển Infix ➔ Postfix"
          },
          {
            "id": "dsa-b3-sub-6-7",
            "number": "6.7",
            "title": "6.7 Time / Space Complexity & 📌 Cần nhớ Tổng hợp"
          }
        ]
      },
      {
        "id": "dsa-b3-sec7",
        "roman": "VII",
        "title": "Queue ADT (Khái niệm FIFO, Thao tác, Ứng dụng & Interface)",
        "subsections": [
          {
            "id": "dsa-b3-sub-7-1",
            "number": "6.1–6.3",
            "title": "6.1–6.3 Khái niệm FIFO, Thao tác chính & Ứng dụng của Queue"
          },
          {
            "id": "dsa-b3-sub-7-2",
            "number": "6.4",
            "title": "6.4 Interface QueueADT<E>"
          },
          {
            "id": "dsa-b3-sub-7-3",
            "number": "6.5",
            "title": "6.5 Ví dụ minh họa Usage & Bộ mô phỏng Stepper"
          }
        ]
      },
      {
        "id": "dsa-b3-sec8",
        "roman": "VIII",
        "title": "Cài đặt Queue bằng Array (Circular Array, Full/Empty & Code Java)",
        "subsections": [
          {
            "id": "dsa-b3-sub-8-1",
            "number": "7.1–7.2",
            "title": "7.1 & 7.2 Cách hoạt động cơ bản & Circular Array (Mảng tuần hoàn)"
          },
          {
            "id": "dsa-b3-sub-8-2",
            "number": "7.3",
            "title": "7.3 Vấn đề mơ hồ Full/Empty (Ambiguous Full/Empty State)"
          },
          {
            "id": "dsa-b3-sub-8-3",
            "number": "7.4–7.5",
            "title": "7.4–7.5 Mã nguồn QueueArr.java (Constructor, peek, poll, offer)"
          },
          {
            "id": "dsa-b3-sub-8-4",
            "number": "7.6",
            "title": "7.6 Mã nguồn & Bộ mô phỏng enlargeArr()"
          },
          {
            "id": "dsa-b3-sub-8-5",
            "number": "7.7",
            "title": "7.7 Time / Space Complexity & 📌 Cần nhớ Tổng hợp"
          }
        ]
      },
      {
        "id": "dsa-b3-sec9",
        "roman": "IX",
        "title": "Cài đặt Queue bằng Linked List (Composition, Inheritance & Code Java)",
        "subsections": [
          {
            "id": "dsa-b3-sub-9-1",
            "number": "8.1",
            "title": "8.1 Ghi chú quan trọng: TailedLinkedList & Trực quan hoá"
          },
          {
            "id": "dsa-b3-sub-9-2",
            "number": "8.2–8.3",
            "title": "8.2–8.3 Hai cách cài đặt: Composition (QueueLL) vs Inheritance (QueueLLE)"
          },
          {
            "id": "dsa-b3-sub-9-3",
            "number": "8.4",
            "title": "8.4 Ví dụ sử dụng TestQueue.java & Stepper"
          },
          {
            "id": "dsa-b3-sub-9-4",
            "number": "8.5",
            "title": "8.5 Time / Space Complexity & 📌 Cần nhớ"
          }
        ]
      },
      {
        "id": "dsa-b3-sec10",
        "roman": "X",
        "title": "java.util.interface Queue<E> (Thư viện chuẩn Java)",
        "subsections": [
          {
            "id": "dsa-b3-sub-10-1",
            "number": "9.1",
            "title": "9.1 Method Summary & Bảng phân loại bẫy Exception"
          }
        ]
      },
      {
        "id": "dsa-b3-sec11",
        "roman": "XI",
        "title": "Ứng dụng Palindrome (kết hợp Stack và Queue)",
        "subsections": [
          {
            "id": "dsa-b3-sub-11-1",
            "number": "10.1–10.5",
            "title": "10.1–10.5 Khái niệm, Ý tưởng thuật toán, Mã nguồn & Trực quan hoá"
          }
        ]
      },
      {
        "id": "dsa-b3-sec12",
        "roman": "XII",
        "title": "Tổng kết Toàn diện Bài 3 (Summary Dashboard)",
        "subsections": [
          {
            "id": "dsa-b3-sub-12-1",
            "number": "11.0",
            "title": "11. Tổng kết kiến thức Stack & Queue ADT"
          }
        ]
      }
    ]
  },
  {
    "id": "dsa-b4",
    "title": "Bài 4",
    "subtitle": "Recursion (Đệ quy)",
    "sections": [
      {
        "id": "dsa-b4-sec0",
        "roman": "OVERVIEW",
        "title": "Giới thiệu Bài 4: Recursion (Đệ quy)",
        "subsections": [
          {
            "id": "dsa-b4-sub-0-1",
            "number": "0.1",
            "title": "Tựa đề & Tổng quan Bài 4"
          }
        ]
      },
      {
        "id": "dsa-b4-sec1",
        "roman": "I",
        "title": "Basic Idea (Ý tưởng cơ bản)",
        "subsections": [
          {
            "id": "dsa-b4-sub-1-1",
            "number": "1.1",
            "title": "Khái niệm & Ví dụ minh họa hình ảnh (Pictorial examples)"
          },
          {
            "id": "dsa-b4-sub-1-2",
            "number": "1.2",
            "title": "Ví dụ bằng văn bản (Textual examples)"
          },
          {
            "id": "dsa-b4-sub-1-3",
            "number": "1.3",
            "title": "Divide-and-Conquer (Chia để trị)"
          },
          {
            "id": "dsa-b4-sub-1-4",
            "number": "1.4",
            "title": "Tại sao dùng recursion?"
          },
          {
            "id": "dsa-b4-sub-1-5",
            "number": "1.5",
            "title": "📌 Cần nhớ (Mục 1)"
          }
        ]
      },
      {
        "id": "dsa-b4-sec2",
        "roman": "II",
        "title": "How Recursion Works (Recursion hoạt động như thế nào)",
        "subsections": [
          {
            "id": "dsa-b4-sub-2-1",
            "number": "2.1",
            "title": "Ôn lại recursion cơ bản (Factorial, Fibonacci, GCD)"
          },
          {
            "id": "dsa-b4-sub-2-2",
            "number": "2.2",
            "title": "Visualizing Recursion (Trực quan hóa đệ quy)"
          },
          {
            "id": "dsa-b4-sub-2-3",
            "number": "2.3",
            "title": "Công thức (Recipe) cho Recursion & Bad Recursion"
          },
          {
            "id": "dsa-b4-sub-2-4",
            "number": "2.4",
            "title": "📌 Cần nhớ (Mục 2)"
          }
        ]
      },
      {
        "id": "dsa-b4-sec3",
        "roman": "III",
        "title": "Examples (Các ví dụ ứng dụng Recursion)",
        "subsections": [
          {
            "id": "dsa-b4-sub-3-1",
            "number": "3.1",
            "title": "Thư viện 10 ví dụ ứng dụng đệ quy kinh điển"
          },
          {
            "id": "dsa-b4-sub-3-2",
            "number": "3.2",
            "title": "In Linked List: Thứ tự Xuôi vs Ngược (Ex 3 & 4)"
          },
          {
            "id": "dsa-b4-sub-3-3",
            "number": "3.3",
            "title": "Tháp Hà Nội — Towers of Hanoi (Ex 6)"
          },
          {
            "id": "dsa-b4-sub-3-4",
            "number": "3.4",
            "title": "Tìm kiếm nhị phân — Binary Search (Ex 8)"
          },
          {
            "id": "dsa-b4-sub-3-5",
            "number": "3.5",
            "title": "Sinh tất cả hoán vị — Permutations (Ex 10)"
          },
          {
            "id": "dsa-b4-sub-3-6",
            "number": "3.6",
            "title": "Bài tập thảo luận: Eight Queens Problem (8 Quân Hậu)"
          },
          {
            "id": "dsa-b4-sub-3-7",
            "number": "3.7",
            "title": "📌 Cần nhớ (Mục 3 — Examples)"
          }
        ]
      },
      {
        "id": "dsa-b4-sec4",
        "roman": "IV",
        "title": "Backtracking & Recursion trong các chủ đề nâng cao",
        "subsections": [
          {
            "id": "dsa-b4-sub-4-1",
            "number": "4.1",
            "title": "Backtracking (Quay lui & Tìm kiếm toàn bộ)"
          },
          {
            "id": "dsa-b4-sub-4-2",
            "number": "4.2",
            "title": "Recursion sẽ còn xuất hiện sau: Quick Sort & Merge Sort"
          }
        ]
      },
      {
        "id": "dsa-b4-sec5",
        "roman": "V",
        "title": "Summary — Recursion, The Mirrors (Tổng kết)",
        "subsections": [
          {
            "id": "dsa-b4-sub-5-1",
            "number": "5.1",
            "title": "Tổng kết: Recursion, The Mirrors"
          },
          {
            "id": "dsa-b4-sub-5-2",
            "number": "5.2",
            "title": "📌 Cần nhớ (Tổng kết toàn bài)"
          }
        ]
      }
    ]
  },
  {
    "id": "dsa-b5",
    "title": "Bài 5",
    "subtitle": "Analysis of Algorithms (Phân tích thuật toán)",
    "sections": [
      {
        "id": "dsa-b5-sec0",
        "roman": "OVERVIEW",
        "title": "Giới thiệu Bài 5: Analysis of Algorithms (Phân tích thuật toán)",
        "subsections": [
          {
            "id": "dsa-b5-sub-0-1",
            "number": "0.1",
            "title": "Tựa đề & Tổng quan Bài 5"
          }
        ]
      },
      {
        "id": "dsa-b5-sec1",
        "roman": "I",
        "title": "Thuật toán (Algorithm) là gì?",
        "subsections": [
          {
            "id": "dsa-b5-sub-1-1",
            "number": "1.1",
            "title": "Định nghĩa & 4 Tính chất của Algorithm"
          },
          {
            "id": "dsa-b5-sub-1-2",
            "number": "1.2",
            "title": "📌 Cần nhớ (Mục 1)"
          }
        ]
      },
      {
        "id": "dsa-b5-sec2",
        "roman": "II",
        "title": "Analysis of Algorithms (Phân tích thuật toán)",
        "subsections": [
          {
            "id": "dsa-b5-sub-2-1",
            "number": "2.1",
            "title": "Khái niệm & Mục tiêu của Phân tích thuật toán"
          },
          {
            "id": "dsa-b5-sub-2-2",
            "number": "2.2",
            "title": "Xác định hiệu quả của Algorithm (Time & Space)"
          },
          {
            "id": "dsa-b5-sub-2-3",
            "number": "2.3",
            "title": "Đo bằng thời gian chạy thực tế (run time)?"
          },
          {
            "id": "dsa-b5-sub-2-4",
            "number": "2.4",
            "title": "Exact run time không phải lúc nào cũng cần thiết"
          },
          {
            "id": "dsa-b5-sub-2-5",
            "number": "2.5",
            "title": "Khó khăn khi so sánh Program & Tính Độc lập"
          },
          {
            "id": "dsa-b5-sub-2-6",
            "number": "2.6",
            "title": "Execution Time của Algorithm — Cách đo thực sự"
          },
          {
            "id": "dsa-b5-sub-2-7",
            "number": "2.7",
            "title": "📌 Cần nhớ (Mục 2)"
          }
        ]
      },
      {
        "id": "dsa-b5-sec3",
        "roman": "III",
        "title": "Algorithm Growth Rates (Tốc độ tăng trưởng)",
        "subsections": [
          {
            "id": "dsa-b5-sub-3-1",
            "number": "3.1",
            "title": "Khái niệm Tốc độ Tăng trưởng (Growth Rate)"
          },
          {
            "id": "dsa-b5-sub-3-2",
            "number": "3.2",
            "title": "Tính chi phí tính toán (Computation Cost)"
          },
          {
            "id": "dsa-b5-sub-3-3",
            "number": "3.3",
            "title": "Đếm số lượng câu lệnh (statements)"
          },
          {
            "id": "dsa-b5-sub-3-4",
            "number": "3.4",
            "title": "Xấp xỉ kết quả phân tích (Approximation)"
          },
          {
            "id": "dsa-b5-sub-3-5",
            "number": "3.5",
            "title": "Phân tích tiệm cận (Asymptotic Analysis)"
          },
          {
            "id": "dsa-b5-sub-3-6",
            "number": "3.6",
            "title": "📌 Cần nhớ (Mục 3)"
          }
        ]
      },
      {
        "id": "dsa-b5-sec4",
        "roman": "IV",
        "title": "Big O Notation (Ký hiệu Big O)",
        "subsections": [
          {
            "id": "dsa-b5-sub-4-1",
            "number": "4.1",
            "title": "Định nghĩa toán học & Chứng minh Big O"
          },
          {
            "id": "dsa-b5-sub-4-2",
            "number": "4.2",
            "title": "Bỏ qua hệ số (coefficient) của mọi term"
          },
          {
            "id": "dsa-b5-sub-4-3",
            "number": "4.3",
            "title": "Tìm hằng số c và n₀ (Ví dụ minh họa)"
          },
          {
            "id": "dsa-b5-sub-4-4",
            "number": "4.4",
            "title": "Bound có 'chặt' (tight) không?"
          },
          {
            "id": "dsa-b5-sub-4-5",
            "number": "4.5",
            "title": "Growth Terms: Order-of-Magnitude"
          },
          {
            "id": "dsa-b5-sub-4-6",
            "number": "4.6",
            "title": "Các Ví dụ Tiêu Biểu về Big O"
          },
          {
            "id": "dsa-b5-sub-4-7",
            "number": "4.7",
            "title": "Exponential Time vs Quadratic Time (2ⁿ vs 300n²)"
          },
          {
            "id": "dsa-b5-sub-4-8",
            "number": "4.8",
            "title": "Ví dụ Thực Tế: Định Luật Moore (Moore's Law)"
          },
          {
            "id": "dsa-b5-sub-4-9",
            "number": "4.9",
            "title": "Tổng kết: Order-of-Magnitude & Big O"
          }
        ]
      },
      {
        "id": "dsa-b5-sec5",
        "roman": "V",
        "title": "Cách tìm độ phức tạp (complexity) của chương trình",
        "subsections": [
          {
            "id": "dsa-b5-sub-5-1",
            "number": "5.1",
            "title": "Một số quy tắc ước lượng nhanh (Rules of Thumb)"
          },
          {
            "id": "dsa-b5-sub-5-2",
            "number": "5.2",
            "title": "Các Ví Dụ Điển Hình Tìm Complexity"
          },
          {
            "id": "dsa-b5-sub-5-3",
            "number": "5.3",
            "title": "Ví dụ: Phân tích Tháp Hà Nội (Tower of Hanoi)"
          },
          {
            "id": "dsa-b5-sub-5-4",
            "number": "5.4",
            "title": "So sánh Sequential Search vs Binary Search"
          },
          {
            "id": "dsa-b5-sub-5-5",
            "number": "5.5",
            "title": "Phân tích theo các trường hợp (Worst, Best, Average Case)"
          },
          {
            "id": "dsa-b5-sub-5-6",
            "number": "5.6",
            "title": "Giữ góc nhìn đúng đắn (Keeping Your Perspective)"
          }
        ]
      },
      {
        "id": "dsa-b5-sec6",
        "roman": "VI",
        "title": "Một số thực nghiệm (Some Experiments)",
        "subsections": [
          {
            "id": "dsa-b5-sub-6-1",
            "number": "6.1",
            "title": "So sánh Running Times & Doubling Test"
          },
          {
            "id": "dsa-b5-sub-6-2",
            "number": "6.2",
            "title": "📌 Cần nhớ (Mục 6)"
          }
        ]
      },
      {
        "id": "dsa-b5-sec7",
        "roman": "VII",
        "title": "Công thức dùng trong phân tích thuật toán (Formulas)",
        "subsections": [
          {
            "id": "dsa-b5-sub-7-1",
            "number": "7.1",
            "title": "Chuỗi Hình Học (Geometric Series)"
          },
          {
            "id": "dsa-b5-sub-7-2",
            "number": "7.2",
            "title": "📌 Cần nhớ (Mục 7)"
          }
        ]
      },
      {
        "id": "dsa-b5-sec8",
        "roman": "VIII",
        "title": "Tổng kết chương (Key Takeaways)",
        "subsections": [
          {
            "id": "dsa-b5-sub-8-1",
            "number": "8.1",
            "title": "Luyện Phản Xạ Nhanh Big-O (Flashcards)"
          },
          {
            "id": "dsa-b5-sub-8-2",
            "number": "8.2",
            "title": "Master Dashboard Tổng Kết Toàn Diện"
          },
          {
            "id": "dsa-b5-sub-8-3",
            "number": "8.3",
            "title": "📌 Tổng Kết Toàn Bài (Key Takeaways)"
          }
        ]
      }
    ]
  },
  {
    "id": "dsa-b6",
    "title": "Bài 6",
    "subtitle": "Sorting (Các thuật toán sắp xếp)",
    "sections": [
      {
        "id": "dsa-b6-sec0",
        "roman": "OVERVIEW",
        "title": "Giới thiệu Bài 6: Sorting (Các thuật toán sắp xếp)",
        "subsections": [
          {
            "id": "dsa-b6-sub-0-1",
            "number": "0.1",
            "title": "Tựa đề & Tổng quan Bài 6"
          }
        ]
      },
      {
        "id": "dsa-b6-sec-why",
        "roman": "0",
        "title": "Tại sao phải học Sorting?",
        "subsections": [
          {
            "id": "dsa-b6-sub-why-1",
            "number": "0.1",
            "title": "Tầm quan trọng & Các chiều hướng giải thuật"
          },
          {
            "id": "dsa-b6-sub-why-2",
            "number": "0.2",
            "title": "📌 Cần nhớ (Mục 0)"
          }
        ]
      },
      {
        "id": "dsa-b6-sec1",
        "roman": "I",
        "title": "Selection Sort (Sắp xếp chọn)",
        "subsections": [
          {
            "id": "dsa-b6-sub-1-1",
            "number": "1.1",
            "title": "Khái niệm & Ví dụ minh họa"
          },
          {
            "id": "dsa-b6-sub-1-2",
            "number": "1.2",
            "title": "Mã nguồn Java & Độ phức tạp Time / Space"
          }
        ]
      },
      {
        "id": "dsa-b6-sec2",
        "roman": "II",
        "title": "Bubble Sort (Sắp xếp nổi bọt)",
        "subsections": [
          {
            "id": "dsa-b6-sub-2-1",
            "number": "2.1",
            "title": "Khái niệm, Ví dụ & Bản gốc O(n²)"
          },
          {
            "id": "dsa-b6-sub-2-2",
            "number": "2.2",
            "title": "Bản cải tiến với cờ isSorted & Phân tích Best Case O(n)"
          }
        ]
      },
      {
        "id": "dsa-b6-sec3",
        "roman": "III",
        "title": "Insertion Sort (Sắp xếp chèn)",
        "subsections": [
          {
            "id": "dsa-b6-sub-3-1",
            "number": "3.1",
            "title": "Khái niệm, Ẩn dụ bài poker & Ví dụ"
          },
          {
            "id": "dsa-b6-sub-3-2",
            "number": "3.2",
            "title": "Mã nguồn Java & Độ phức tạp Time / Space"
          },
          {
            "id": "dsa-b6-sub-3-3",
            "number": "3.3",
            "title": "Tổng kết Nhóm O(n²) — Ma Trận Đối Chiếu Benchmark"
          }
        ]
      },
      {
        "id": "dsa-b6-sec4",
        "roman": "IV",
        "title": "Merge Sort (Sắp xếp trộn)",
        "subsections": [
          {
            "id": "dsa-b6-sub-4-1",
            "number": "4.1",
            "title": "Khái niệm Divide-and-Conquer & Cây Đệ Quy"
          },
          {
            "id": "dsa-b6-sub-4-2",
            "number": "4.2",
            "title": "Thuật toán Merge, Độ phức tạp Time / Space & Nhược điểm"
          }
        ]
      },
      {
        "id": "dsa-b6-sec5",
        "roman": "V",
        "title": "Quick Sort (Sắp xếp nhanh)",
        "subsections": [
          {
            "id": "dsa-b6-sub-5-1",
            "number": "5.1",
            "title": "Khái niệm, Ví dụ & Thuật toán Partition 3 Vùng"
          },
          {
            "id": "dsa-b6-sub-5-2",
            "number": "5.2",
            "title": "Phân tích Độ phức tạp & Đối Chiếu Triết Lý"
          }
        ]
      },
      {
        "id": "dsa-b6-sec6",
        "roman": "VI",
        "title": "Radix Sort (Sắp xếp theo cơ số)",
        "subsections": [
          {
            "id": "dsa-b6-sub-6-1",
            "number": "6.1",
            "title": "Khái niệm & Ví dụ minh họa"
          },
          {
            "id": "dsa-b6-sub-6-2",
            "number": "6.2",
            "title": "Pseudocode & Độ phức tạp Time / Space"
          }
        ]
      },
      {
        "id": "dsa-b6-sec7",
        "roman": "VII",
        "title": "So sánh các thuật toán Sort",
        "subsections": [
          {
            "id": "dsa-b6-sub-7-1",
            "number": "7.1",
            "title": "In-Place Sort & Stable Sort"
          },
          {
            "id": "dsa-b6-sub-7-2",
            "number": "7.2",
            "title": "Phản ví dụ Non-Stable của Quick Sort & Selection Sort"
          },
          {
            "id": "dsa-b6-sub-7-3",
            "number": "7.3",
            "title": "Bảng tổng kết 7 Thuật toán & Ghi chú ranh giới lý thuyết"
          }
        ]
      },
      {
        "id": "dsa-b6-sec8",
        "roman": "VIII",
        "title": "Sử dụng Java Sort Methods",
        "subsections": [
          {
            "id": "dsa-b6-sub-8-1",
            "number": "8.1",
            "title": "Các phương thức trong class Arrays & Collections"
          },
          {
            "id": "dsa-b6-sub-8-2",
            "number": "8.2",
            "title": "Ví dụ đối tượng Person & Interface Comparator"
          }
        ]
      },
      {
        "id": "dsa-b6-sec9",
        "roman": "IX",
        "title": "Tổng kết bài học (Sorting)",
        "subsections": [
          {
            "id": "dsa-b6-sub-9-1",
            "number": "9.1",
            "title": "Hệ thống hóa toàn bộ kiến thức & Cây Quyết Định"
          }
        ]
      }
    ]
  },
  {
    "id": "dsa-b7",
    "title": "Bài 7: Hashing (Bảng Băm)",
    "description": "Cấu trúc dữ liệu bảng băm (Hash Table), hàm băm h(k), các kỹ thuật giải quyết va chạm (Separate Chaining, Linear/Quadratic Probing, Double Hashing), hệ số tải và Rehash.",
    "sections": [
      {
        "id": "dsa-b7-sec0-hero",
        "roman": "OVERVIEW",
        "title": "Tổng Quan & Bảng Băm Thời Gian Thực",
        "subsections": [
          {
            "id": "dsa-b7-sub-0-hero",
            "number": "0.0",
            "title": "Tựa Đề & Phòng Thí Nghiệm Hash Table"
          }
        ]
      },
      {
        "id": "dsa-b7-sec0",
        "roman": "0",
        "title": "Hashing là gì?",
        "subsections": [
          {
            "id": "dsa-b7-sub-0-1",
            "number": "0.1",
            "title": "Khái niệm Hashing & So sánh ADT Table"
          }
        ]
      },
      {
        "id": "dsa-b7-sec1",
        "roman": "I",
        "title": "Direct Addressing Table",
        "subsections": [
          {
            "id": "dsa-b7-sub-1-1",
            "number": "1.1",
            "title": "Bài toán SBS Transit & Các Thao Tác"
          },
          {
            "id": "dsa-b7-sub-1-2",
            "number": "1.2",
            "title": "Hạn chế của Direct Addressing Table"
          }
        ]
      },
      {
        "id": "dsa-b7-sec2",
        "roman": "II",
        "title": "Hash Table (Bảng Băm)",
        "subsections": [
          {
            "id": "dsa-b7-sub-2-1",
            "number": "2.1",
            "title": "Nguồn gốc thuật ngữ & Ý tưởng Hashing"
          },
          {
            "id": "dsa-b7-sub-2-2",
            "number": "2.2",
            "title": "Hiện tượng Collision & 2 Vấn đề quan trọng"
          }
        ]
      },
      {
        "id": "dsa-b7-sec3",
        "roman": "III",
        "title": "Hash Functions (Các Hàm Băm)",
        "subsections": [
          {
            "id": "dsa-b7-sub-3-1",
            "number": "3.1",
            "title": "Tiêu chí Hàm Băm Tốt, Bad Hash & Perfect Hash"
          },
          {
            "id": "dsa-b7-sub-3-2",
            "number": "3.2",
            "title": "Division Method & Multiplication Method"
          },
          {
            "id": "dsa-b7-sub-3-3",
            "number": "3.3",
            "title": "Hashing của Chuỗi (String Hashing)"
          }
        ]
      },
      {
        "id": "dsa-b7-sec4",
        "roman": "IV",
        "title": "Collision Resolution (Giải Quyết Đụng Độ)",
        "subsections": [
          {
            "id": "dsa-b7-sub-4-0",
            "number": "4.0",
            "title": "Xác suất xảy ra Collision – Birthday Paradox"
          },
          {
            "id": "dsa-b7-sub-4-1",
            "number": "4.1",
            "title": "Separate Chaining & Hệ Số Tải (Load Factor)"
          },
          {
            "id": "dsa-b7-sub-4-2",
            "number": "4.2",
            "title": "Linear Probing & Xóa Lười (Lazy Deletion)"
          },
          {
            "id": "dsa-b7-sub-4-3",
            "number": "4.3",
            "title": "Quadratic Probing & Định Lý α < 0.5"
          },
          {
            "id": "dsa-b7-sub-4-4",
            "number": "4.4",
            "title": "Double Hashing & Cảnh Báo hash₂(k) = 0"
          },
          {
            "id": "dsa-b7-sub-4-5",
            "number": "4.5",
            "title": "Tiêu chí của phương pháp giải quyết Collision tốt"
          }
        ]
      },
      {
        "id": "dsa-b7-sec5",
        "roman": "V",
        "title": "Tổng kết bài học (Hashing)",
        "subsections": [
          {
            "id": "dsa-b7-sub-5-1",
            "number": "5.1",
            "title": "Hệ thống hóa toàn bộ kiến thức & Ma Trận Master"
          }
        ]
      },
      {
        "id": "dsa-b7-sec6",
        "roman": "VI",
        "title": "Java HashMap Class & Bài Tập (Exercise)",
        "subsections": [
          {
            "id": "dsa-b7-sub-6-1",
            "number": "6.1",
            "title": "Khái niệm Class HashMap<K, V> & Constructors"
          },
          {
            "id": "dsa-b7-sub-6-2",
            "number": "6.2",
            "title": "Các phương thức cơ bản & Ví dụ thực hành"
          },
          {
            "id": "dsa-b7-sub-6-3",
            "number": "6.3",
            "title": "Bài tập thực hành (Exercise) — Dãy 7 Khóa"
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
