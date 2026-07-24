import fs from "fs";
import { basicGeneralData } from "../data/basic-general.js";

const dh9Chapter = {
  id: "dh-9",
  title: "Đại hội IX (4/2001)",
  subtitle: "Đại hội Khai sinh Khái niệm Kinh tế Thị trường Định hướng XHCN",
  sections: [
    {
      id: "dh-9-grp-1",
      roman: "I",
      title: "Thông tin chung",
      subsections: [
        {
          id: "dh-9-sec-1",
          number: "1",
          title: "Thời gian, Địa điểm & Quy mô đại biểu",
          parts: [
            {
              id: "dh-9-flashcards",
              label: "⚡",
              title: "TÓM TẮT SIÊU TỐC — BẢNG GHI NHỚ NHANH ĐẠI HỘI IX",
              content: [
                {
                  type: "flashcards-banner",
                  items: [
                    {
                      icon: "⏰",
                      label: "Thời gian & Địa điểm",
                      value: "19 - 22/4/2001 tại Thủ đô Hà Nội."
                    },
                    {
                      icon: "👥",
                      label: "Số lượng Đại biểu",
                      value: "1.168 đại biểu, đại diện cho 2.479.719 đảng viên trong cả nước."
                    },
                    {
                      icon: "👤",
                      label: "Lãnh đạo chủ chốt",
                      value: "Bầu Tổng Bí thư mới: NÔNG ĐỨC MẠNH (thay đồng chí Lê Khả Phiêu)."
                    },
                    {
                      icon: "📊",
                      label: "Bước Ngoặt Lý Luận",
                      value: "Lần đầu chính thức dùng thuật ngữ 'Kinh tế thị trường định hướng XHCN' làm Mô hình kinh tế tổng quát ⭐️."
                    }
                  ]
                }
              ]
            },
            {
              id: "dh-9-sec-1-content",
              label: "I",
              title: "Thông tin chung về Đại hội IX",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ IX của Đảng họp từ 19 đến 22/4/2001 tại Thủ đô Hà Nội."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 19 – 22/4/2001 | 📍 Địa điểm: Hà Nội | 👥 Quy mô: 1.168 đại biểu (~2,48 triệu đảng viên cả nước)"
                },
                {
                  type: "bullets",
                  items: [
                    "Thành phần tham dự: Đại biểu các Đảng bộ trong nước và 34 đoàn đại biểu quốc tế tham dự.",
                    "Lãnh đạo chủ chốt: Đại hội bầu Tổng Bí thư mới là đồng chí NÔNG ĐỨC MẠNH ⭐️ (thay thế đồng chí Lê Khả Phiêu)."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐ GHI NHỚ NHANH TỔNG BÍ THƯ KHÓA IX",
                  text: "Tổng Bí thư khóa IX: NÔNG ĐỨC MẠNH ⭐️ (thay đồng chí Lê Khả Phiêu)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-9-grp-2",
      roman: "II",
      title: "Bối cảnh lịch sử",
      subsections: [
        {
          id: "dh-9-sec-2",
          number: "1",
          title: "Bối cảnh trong nước và quốc tế đầu thế kỷ XXI",
          parts: [
            {
              id: "dh-9-sec-2-content",
              label: "II",
              title: "15 năm Đổi mới & Cuộc cách mạng KH-CN toàn cầu",
              content: [
                {
                  type: "paragraph",
                  text: "🔹 Trong nước:"
                },
                {
                  type: "bullets",
                  items: [
                    "Đã trải qua 15 năm Đổi mới (1986-2000), 10 năm thực hiện Cương lĩnh 1991 và Chiến lược KT-XH 1991-2000.",
                    "Tổng kết 5 năm thực hiện Nghị quyết Đại hội VIII.",
                    "Đạt nhiều thành tựu to lớn nhưng đất nước vẫn còn nghèo, kém phát triển, nguy cơ tụt hậu xa hơn về kinh tế.",
                    "Thế và lực của đất nước đã mạnh hơn nhiều so với trước."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 Quốc tế:"
                },
                {
                  type: "bullets",
                  items: [
                    "Cuối thế kỷ XX - đầu thế kỷ XXI: Cách mạng khoa học - công nghệ phát triển mạnh, đặc biệt là công nghệ thông tin.",
                    "KINH TẾ TRÍ THỨC có vai trò ngày càng nổi bật ⭐️.",
                    "TOÀN CẦU HÓA KINH TẾ diễn ra mạnh mẽ, vừa tạo cơ hội hợp tác vừa gia tăng cạnh tranh gay gắt."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ GHI NHỚ NHANH BỐI CẢNH",
                  text: "Trong nước: 15 năm đổi mới, đất nước còn nghèo — nguy cơ tụt hậu.\nQuốc tế: Cách mạng KHCN + Kinh tế trí thức + Toàn cầu hóa."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-9-grp-3",
      roman: "III",
      title: "Mục tiêu Đại hội",
      subsections: [
        {
          id: "dh-9-sec-3",
          number: "1",
          title: "Các mục tiêu và định hướng chiến lược 2001-2010",
          parts: [
            {
              id: "dh-9-sec-3-content",
              label: "III",
              title: "Mục tiêu cốt lõi của Đại hội IX",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Nhìn lại quá trình cách mạng Việt Nam trong thế kỷ XX, rút ra bài học kinh nghiệm lớn.",
                    "Hoạch định con đường phát triển đất nước trong 2 thập kỷ đầu thế kỷ XXI.",
                    "Thông qua Chiến lược phát triển kinh tế - xã hội 2001-2010 và Kế hoạch 5 năm 2001-2005.",
                    "Xác định MỤC TIÊU TỔNG QUÁT ⭐️: Đưa nước ta ra khỏi tình trạng kém phát triển, nâng cao đời sống nhân dân, tạo nền tảng để đến NĂM 2020 CƠ BẢN TRỞ THÀNH MỘT NƯỚC CÔNG NGHIỆP THEO HƯỚNG HIỆN ĐẠI."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐️ MỤC TIÊU CHIẾN LƯỢC ĐẠI HỘI IX",
                  text: "Mục tiêu đến NĂM 2020: Cơ bản là nước công nghiệp THEO HƯỚNG HIỆN ĐẠI ⭐️."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-9-grp-4",
      roman: "IV",
      title: "Văn kiện được thông qua",
      subsections: [
        {
          id: "dh-9-sec-4",
          number: "1",
          title: "Bốn văn kiện lớn của Đại hội IX",
          parts: [
            {
              id: "dh-9-sec-4-content",
              label: "IV",
              title: "Nội dung các báo cáo văn kiện",
              content: [
                {
                  type: "bullets",
                  items: [
                    "1. Báo cáo Chính trị của BCH Trung ương khóa VIII: Trình bày chủ đề 'Phát huy sức mạnh toàn dân tộc, tiếp tục đổi mới, đẩy mạnh công nghiệp hoá, hiện đại hoá, xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa' ⭐️.",
                    "2. Chiến lược phát triển kinh tế - xã hội 2001-2010: Định hướng 10 năm, đẩy mạnh CNH-HĐH gắn với phát triển kinh tế trí thức.",
                    "3. Phương hướng, nhiệm vụ kế hoạch 5 năm 2001-2005: Các chỉ tiêu phát triển KT-XH cụ thể.",
                    "4. Điều lệ Đảng (bổ sung, sửa đổi): Sửa đổi, bổ sung cho phù hợp tình hình mới."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ GHI NHỚ NHANH BỐN VĂN KIỆN",
                  text: "4 văn kiện lớn: Báo cáo chính trị — Chiến lược KT-XH 2001-2010 — Kế hoạch 5 năm 2001-2005 — Điều lệ Đảng (sửa đổi)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-9-grp-5",
      roman: "V",
      title: "Quyết định và chủ trương quan trọng ⭐️",
      subsections: [
        {
          id: "dh-9-sec-5",
          number: "1",
          title: "Mô hình Kinh tế thị trường Định hướng XHCN & Kinh tế trí thức",
          parts: [
            {
              id: "dh-9-sec-5-content",
              label: "V",
              title: "Các quyết định đường lối lớn tại Đại hội IX",
              content: [
                {
                  type: "paragraph",
                  text: "1. Xác định Kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng quát ⭐️:"
                },
                {
                  type: "bullets",
                  items: [
                    "Nội dung: Lần đầu tiên Đảng CHÍNH THỨC DÙNG THUẬT NGỮ 'Kinh tế thị trường định hướng xã hội chủ nghĩa' và khẳng định đây là MÔ HÌNH KINH TẾ TỔNG QUÁT của nước ta trong suốt thời kỳ quá độ lên CNXH ⭐️.",
                    "Lý do: Tổng kết thực tiễn 15 năm đổi mới, khái quát hóa lý luận về mô hình kinh tế.",
                    "Tác động: Là bước phát triển quan trọng về tư duy lý luận kinh tế của Đảng, làm nền tảng cho đường lối kinh tế các Đại hội X, XI, XII, XIII."
                  ]
                },
                {
                  type: "paragraph",
                  text: "2. Xác định rõ nội dung cơ bản của Tư tưởng Hồ Chí Minh:"
                },
                {
                  type: "bullets",
                  items: [
                    "Xác định rõ hệ thống quan điểm toàn diện của Tư tưởng Hồ Chí Minh về cách mạng Việt Nam, cùng với chủ nghĩa Mác - Lênin là nền tảng tư tưởng, kim chỉ nam hành động."
                  ]
                },
                {
                  type: "paragraph",
                  text: "3. Đẩy mạnh CNH, HĐH gắn với phát triển Kinh tế trí thức ⭐️:"
                },
                {
                  type: "bullets",
                  items: [
                    "Con đường CNH-HĐH đất nước phải gắn liền với phát triển kinh tế trí thức, tranh thủ thành tựu cách mạng khoa học - công nghệ."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐️ QUYẾT ĐỊNH ĐỘT PHÁ NỔI BẬT NÓNG",
                  text: "Đại hội IX = Đại hội 'KHAI SINH' thuật ngữ KINH TẾ THỊ TRƯỜNG ĐỊNH HƯỚNG XHCN ⭐️.\nXác định đây là MÔ HÌNH KINH TẾ TỔNG QUÁT của thời kỳ quá độ."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-9-grp-6",
      roman: "VI",
      title: "Nhân sự",
      subsections: [
        {
          id: "dh-9-sec-6",
          number: "1",
          title: "Bộ máy lãnh đạo Trung ương khóa IX",
          parts: [
            {
              id: "dh-9-sec-6-content",
              label: "VI",
              title: "Tổng Bí thư Nông Đức Mạnh đảm nhiệm lãnh đạo",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Ban Chấp hành Trung ương khóa IX: Bầu 150 ủy viên chính thức.",
                    "Bộ Chính trị khóa IX: Bầu 15 ủy viên chính thức.",
                    "Tổng Bí thư: Đồng chí NÔNG ĐỨC MẠNH được bầu làm Tổng Bí thư ⭐️.",
                    "Điểm mới về nhân sự: Thay đổi thế hệ lãnh đạo cao nhất của Đảng, chuyển giao từ đồng chí Lê Khả Phiêu sang đồng chí Nông Đức Mạnh."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐️ ĐIỂM NHẤN NHÂN SỰ ĐẠI HỘI IX",
                  text: "BCH TW: 150 | Bộ Chính trị: 15 | Tổng Bí thư: NÔNG ĐỨC MẠNH ⭐️."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-9-grp-7",
      roman: "VII",
      title: "Cầu nối, khẩu hiệu, nhận định nổi bật",
      subsections: [
        {
          id: "dh-9-sec-7",
          number: "1",
          title: "Khẩu hiệu & Nhận định về mô hình kinh tế tổng quát",
          parts: [
            {
              id: "dh-9-sec-7-content",
              label: "VII",
              title: "Chủ đề khẩu hiệu & Cụm từ thi trắc nghiệm hay hỏi",
              content: [
                {
                  type: "bullets",
                  items: [
                    "1. Chủ đề khẩu hiệu Đại hội IX: 'Phát huy sức mạnh toàn dân tộc, tiếp tục đổi mới, đẩy mạnh công nghiệp hoá, hiện đại hoá, xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa' ⭐️.",
                    "2. Nhận định cốt lõi về mô hình kinh tế: 'Kinh tế thị trường định hướng xã hội chủ nghĩa là MÔ HÌNH KINH TẾ TỔNG QUÁT của nước ta trong thời kỳ quá độ lên CNXH' ⭐️."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ CỤM TỪ THI TRẮC NGHIỆM HAY HỎI",
                  text: "Nhớ đúng cụm từ ⭐️: 'MÔ HÌNH KINH TẾ TỔNG QUÁT' = Kinh tế thị trường định hướng XHCN."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Insert or replace dh-9 in basicGeneralData.chapters
const existingIdx = basicGeneralData.chapters.findIndex(c => c.id === "dh-9");
if (existingIdx !== -1) {
  basicGeneralData.chapters[existingIdx] = dh9Chapter;
} else {
  // Insert right after dh-8
  const dh8Idx = basicGeneralData.chapters.findIndex(c => c.id === "dh-8");
  if (dh8Idx !== -1) {
    basicGeneralData.chapters.splice(dh8Idx + 1, 0, dh9Chapter);
  } else {
    basicGeneralData.chapters.push(dh9Chapter);
  }
}

// Save back to basic-general.js
const basicGeneralJsContent = `/* ============================================================
   DỮ LIỆU TÀI LIỆU: KIẾN THỨC CƠ BẢN MÔN ĐẠI CƯƠNG
   Bài đọc chi tiết: 10 Kỳ Đại hội Đại biểu Toàn quốc của Đảng (Đại hội I, II, III, IV, V, VI, VII, VIII, IX, X)
   ============================================================ */

export const basicGeneralData = ${JSON.stringify(basicGeneralData, null, 2)};
`;

fs.writeFileSync("./data/basic-general.js", basicGeneralJsContent, "utf8");
console.log("Added dh-9 to data/basic-general.js");

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
console.log("Updated data/index.js with dh-9 metadata.");
