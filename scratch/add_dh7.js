import fs from "fs";
import { basicGeneralData } from "../data/basic-general.js";

const dh7Chapter = {
  id: "dh-7",
  title: "Đại hội VII (6/1991)",
  subtitle: "Cương lĩnh 1991 & Ngọn cờ Kiên định Đổi mới",
  sections: [
    {
      id: "dh-7-grp-1",
      roman: "I",
      title: "Thông tin chung",
      subsections: [
        {
          id: "dh-7-sec-1",
          number: "1",
          title: "Thời gian, Địa điểm & Quy mô đại biểu",
          parts: [
            {
              id: "dh-7-flashcards",
              label: "⚡",
              title: "TÓM TẮT SIÊU TỐC — BẢNG GHI NHỚ NHANH ĐẠI HỘI VII",
              content: [
                {
                  type: "flashcards-banner",
                  items: [
                    {
                      icon: "⏰",
                      label: "Thời gian & Địa điểm",
                      value: "Nội bộ: 17-22/6/1991; Khai mạc: 24/6/1991, Bế mạc: 27/6/1991 tại Hà Nội."
                    },
                    {
                      icon: "👥",
                      label: "Số lượng Đại biểu",
                      value: "1.176 đại biểu, thay mặt hơn 2 triệu đảng viên trong cả nước."
                    },
                    {
                      icon: "👤",
                      label: "Lãnh đạo chủ chốt",
                      value: "Võ Chí Công đọc Khai mạc; Nguyễn Văn Linh đọc báo cáo văn kiện; Đỗ Mười làm Tổng Bí thư."
                    },
                    {
                      icon: "📜",
                      label: "Mốc Lịch sử Nền tảng",
                      value: "Lần đầu tiên thông qua Cương lĩnh 1991 — Cương lĩnh chính thức toàn diện đi lên CNXH ⭐️."
                    }
                  ]
                }
              ]
            },
            {
              id: "dh-7-sec-1-content",
              label: "I",
              title: "Thông tin chung về Đại hội VII",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ VII của Đảng họp nội bộ từ 17 đến 22/6/1991 và họp công khai từ 24 đến 27/6/1991 tại Thủ đô Hà Nội."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 24 – 27/6/1991 | 📍 Địa điểm: Hà Nội | 👥 Quy mô: 1.176 đại biểu (>2 triệu đảng viên cả nước)"
                },
                {
                  type: "bullets",
                  items: [
                    "Thành phần tham dự: Đại biểu các Đảng bộ trong nước và nhiều đoàn đại biểu quốc tế (Đảng CS Liên Xô, Đảng NDCM Lào, Đảng NDCM Campuchia, Đảng CS Cuba, đại biểu Đảng CS Nhật Bản...)",
                    "Lãnh đạo chủ chốt: Đồng chí Võ Chí Công đọc Diễn văn khai mạc; Đồng chí Nguyễn Văn Linh (TBT khóa VI) đọc Báo cáo của BCH TW về các văn kiện; Đồng chí Đỗ Mười được bầu làm Tổng Bí thư ⭐️."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐ GHI NHỚ NHANH TỔNG BÍ THƯ KHÓA VII",
                  text: "Tổng Bí thư khóa VII: ĐỒ MƯỜI ⭐️ (thay đồng chí Nguyễn Văn Linh - TBT khóa VI)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-7-grp-2",
      roman: "II",
      title: "Bối cảnh lịch sử",
      subsections: [
        {
          id: "dh-7-sec-2",
          number: "1",
          title: "Bối cảnh trong nước và quốc tế",
          parts: [
            {
              id: "dh-7-sec-2-content",
              label: "II",
              title: "Liên Xô, Đông Âu sụp đổ & Khủng hoảng trong nước",
              content: [
                {
                  type: "paragraph",
                  text: "🔹 Trong nước:"
                },
                {
                  type: "bullets",
                  items: [
                    "Đất nước đã trải qua 5 năm Đổi mới (từ Đại hội VI - 1986) nhưng khủng hoảng kinh tế - xã hội chưa chấm dứt hoàn toàn.",
                    "Các thế lực thù địch trong và ngoài nước tiếp tục gia tăng chống phá."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 Quốc tế ⭐️:"
                },
                {
                  type: "bullets",
                  items: [
                    "LIÊN XÔ VÀ CÁC NƯỚC ĐÔNG ÂU KHỦNG HOẢNG, SỤP ĐỔ (cuối thập niên 1980 - đầu 1990) ⭐️.",
                    "Chủ nghĩa xã hội hiện thực bị tấn công nhiều phía, chủ nghĩa Mác - Lênin và các Đảng Cộng sản bị công kích dữ dội.",
                    "Một bộ phận cán bộ, đảng viên hoang mang, dao động trước biến động lớn của phong trào cộng sản quốc tế."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ GHI NHỚ NHANH BỐI CẢNH ĐẠI HỘI VII",
                  text: "Bối cảnh đặc biệt: CNXH thế giới khủng hoảng cực điểm (Liên Xô & Đông Âu sụp đổ) ⭐️ + Trong nước chưa hết khủng hoảng KT-XH."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-7-grp-3",
      roman: "III",
      title: "Mục tiêu Đại hội",
      subsections: [
        {
          id: "dh-7-sec-3",
          number: "1",
          title: "Các mục tiêu và định hướng chiến lược",
          parts: [
            {
              id: "dh-7-sec-3-content",
              label: "III",
              title: "Mục tiêu cốt lõi của Đại hội VII",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Tổng kết 5 năm thực hiện đường lối Đổi mới theo Nghị quyết Đại hội VI.",
                    "Đánh giá ưu điểm, khuyết điểm, nguyên nhân, bài học kinh nghiệm đổi mới.",
                    "Xác định phương hướng, nhiệm vụ chủ yếu 1991 - 1995.",
                    "Hoạch định con đường quá độ lên CNXH phù hợp đặc điểm Việt Nam.",
                    "Thông qua các văn kiện chiến lược dài hạn (Cương lĩnh 1991, Chiến lược đến năm 2000)."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ GHI NHỚ NHANH MỤC TIÊU",
                  text: "Mục tiêu ĐH VII = Tổng kết 5 năm Đổi mới (khóa VI) + Định hướng dài hạn (Cương lĩnh 1991 & Chiến lược 2000)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-7-grp-4",
      roman: "IV",
      title: "Văn kiện được thông qua",
      subsections: [
        {
          id: "dh-7-sec-4",
          number: "1",
          title: "Ba văn kiện lớn của Đại hội",
          parts: [
            {
              id: "dh-7-sec-4-content",
              label: "IV",
              title: "Các văn kiện mang tính lịch sử",
              content: [
                {
                  type: "bullets",
                  items: [
                    "1. Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (Cương lĩnh 1991) ⭐️: LẦN ĐẦU TIÊN Đảng có một Cương lĩnh chính thức, toàn diện về con đường đi lên CNXH.",
                    "2. Chiến lược ổn định và phát triển kinh tế - xã hội đến năm 2000: Mục tiêu, phương hướng phát triển kinh tế - xã hội dài hạn (10 năm).",
                    "3. Báo cáo xây dựng Đảng và sửa đổi Điều lệ Đảng: Tăng cường vai trò lãnh đạo và sức chiến đấu của Đảng.",
                    "4. Báo cáo chính trị của BCH Trung ương: Trình bày bởi Nguyễn Văn Linh, tổng kết 5 năm đổi mới."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐️ BA VĂN KIỆN TRỌNG TÂM ĐẠI HỘI VII",
                  text: "1. Cương lĩnh 1991 ⭐️\n2. Chiến lược phát triển KT-XH đến năm 2000 (10 năm)\n3. Điều lệ Đảng (sửa đổi)"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-7-grp-5",
      roman: "V",
      title: "Quyết định và chủ trương quan trọng ⭐️",
      subsections: [
        {
          id: "dh-7-sec-5",
          number: "1",
          title: "Thông qua Cương lĩnh 1991 & Chiến lược 2000",
          parts: [
            {
              id: "dh-7-sec-5-content",
              label: "V",
              title: "Quyết định quan trọng nhất của Đại hội VII",
              content: [
                {
                  type: "paragraph",
                  text: "1. Thông qua Cương lĩnh 1991 ⭐️:"
                },
                {
                  type: "bullets",
                  items: [
                    "Nội dung: Xác định các đặc trưng cơ bản của xã hội XHCN ở Việt Nam và các phương hướng chỉ đạo.",
                    "Lý do: Cần có cơ sở lý luận - thực tiễn vững chắc trong bối cảnh CNXH thế giới khủng hoảng, khẳng định con đường đi lên CNXH của Việt Nam là đúng đắn.",
                    "Tác động: Trở thành VĂN KIỆN NỀN TẢNG, KIM CHỈ NAM cho các Đại hội sau (Đại hội XI - 2011 tiếp tục bổ sung, phát triển)."
                  ]
                },
                {
                  type: "paragraph",
                  text: "2. Chủ trương xây dựng Chiến lược phát triển KT-XH đến năm 2000:"
                },
                {
                  type: "bullets",
                  items: [
                    "Thực hiện ngay trong nhiệm kỳ, kéo dài đến năm 2000.",
                    "Các mục tiêu dài hạn tiếp tục được cụ thể hóa, phát triển tại Đại hội VIII (1996) và Đại hội IX (2001)."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐️ QUYẾT ĐỊNH LỊCH SỬ NỔI BẬT NÓNG",
                  text: "Quyết định quan trọng nhất: THÔNG QUA CƯƠNG LĨNH 1991 — Lần đầu tiên trong lịch sử Đảng có Cương lĩnh chính thức toàn diện ⭐️."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-7-grp-6",
      roman: "VI",
      title: "Nhân sự",
      subsections: [
        {
          id: "dh-7-sec-6",
          number: "1",
          title: "Bộ máy lãnh đạo Trung ương khóa VII",
          parts: [
            {
              id: "dh-7-sec-6-content",
              label: "VI",
              title: "Tổng Bí thư Đỗ Mười đảm nhiệm lãnh đạo",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Ban Chấp hành Trung ương: Bầu BCH TW khóa VII.",
                    "Bộ Chính trị: Bầu Bộ Chính trị khóa VII.",
                    "Tổng Bí thư: Đồng chí ĐỖ MƯỜI được bầu làm Tổng Bí thư ⭐️.",
                    "Điểm mới về nhân sự: Thay đổi vị trí Tổng Bí thư (Nguyễn Văn Linh ➔ Đỗ Mười), kiện toàn đội ngũ lãnh đạo trong bối cảnh khó khăn của phong trào cộng sản quốc tế."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐️ ĐIỂM NHẤN NHÂN SỰ ĐẠI HỘI VII",
                  text: "Tổng Bí thư khóa VII: ĐỖ MƯỜI ⭐️ (Không nhầm với TBT khóa VI là Nguyễn Văn Linh)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-7-grp-7",
      roman: "VII",
      title: "Cầu nối, khẩu hiệu, nhận định nổi bật",
      subsections: [
        {
          id: "dh-7-sec-7",
          number: "1",
          title: "Khẩu hiệu trung tâm của Đại hội VII",
          parts: [
            {
              id: "dh-7-sec-7-content",
              label: "VII",
              title: "Khẩu hiệu đánh giá bản lĩnh Đại hội VII",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Nội dung: 'Đại hội của Trí tuệ - đổi mới, dân chủ - kỷ cương - đoàn kết' ⭐️.",
                    "Hoàn cảnh: Đưa ra trong bối cảnh Đại hội hoàn thành nhiệm vụ lịch sử giữa lúc CNXH thế giới khủng hoảng, sụp đổ.",
                    "Ý nghĩa: Khẳng định bản lĩnh, trí tuệ của Đảng khi kiên định con đường đổi mới."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ GHI NHỚ NHANH KHẨU HIỆU",
                  text: "Khẩu hiệu Đại hội VII ⭐️: 'Trí tuệ - đổi mới, dân chủ - kỷ cương - đoàn kết'."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Insert or replace dh-7 in basicGeneralData.chapters
const existingIdx = basicGeneralData.chapters.findIndex(c => c.id === "dh-7");
if (existingIdx !== -1) {
  basicGeneralData.chapters[existingIdx] = dh7Chapter;
} else {
  // Insert right after dh-6
  const dh6Idx = basicGeneralData.chapters.findIndex(c => c.id === "dh-6");
  if (dh6Idx !== -1) {
    basicGeneralData.chapters.splice(dh6Idx + 1, 0, dh7Chapter);
  } else {
    basicGeneralData.chapters.push(dh7Chapter);
  }
}

// Save back to basic-general.js
const basicGeneralJsContent = `/* ============================================================
   DỮ LIỆU TÀI LIỆU: KIẾN THỨC CƠ BẢN MÔN ĐẠI CƯƠNG
   Bài đọc chi tiết: 10 Kỳ Đại hội Đại biểu Toàn quốc của Đảng (Đại hội I, II, III, IV, V, VI, VII, X)
   ============================================================ */

export const basicGeneralData = ${JSON.stringify(basicGeneralData, null, 2)};
`;

fs.writeFileSync("./data/basic-general.js", basicGeneralJsContent, "utf8");
console.log("Added dh-7 to data/basic-general.js");

// Update data/index.js
function stripMetadata(chapters) {
  return chapters.map(ch => ({
    id: ch.id,
    title: ch.title,
    subtitle: ch.subtitle,
    sections: ch.sections.map(sec => ({
      id: sec.id,
      roman: sec.roman,
      title: sec.title,
      subsections: sec.subsections.map(sub => ({
        id: sub.id,
        number: sub.number,
        title: sub.title
      }))
    }))
  }));
}

const metaData = stripMetadata(basicGeneralData.chapters);
let indexJsContent = fs.readFileSync("./data/index.js", "utf8");
const bgChaptersJson = JSON.stringify(metaData, null, 6);

const regex = /("basic-general":\s*\{[\s\S]*?chapters:\s*)\[[\s\S]*?\](\s*,\s*questionsMap)/;
indexJsContent = indexJsContent.replace(regex, `$1${bgChaptersJson}$2`);

fs.writeFileSync("./data/index.js", indexJsContent, "utf8");
console.log("Updated data/index.js with dh-7 metadata.");
