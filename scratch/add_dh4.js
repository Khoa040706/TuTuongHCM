import fs from "fs";
import { basicGeneralData } from "../data/basic-general.js";

const dh4Chapter = {
  id: "dh-4",
  title: "Đại hội IV (12/1976)",
  subtitle: "Đại hội Thống nhất đất nước & Đổi tên Đảng Cộng sản Việt Nam",
  sections: [
    {
      id: "dh-4-grp-1",
      roman: "I",
      title: "Thông tin chung",
      subsections: [
        {
          id: "dh-4-sec-1",
          number: "1",
          title: "Thời gian, Địa điểm & Quy mô đại biểu",
          parts: [
            {
              id: "dh-4-flashcards",
              label: "⚡",
              title: "TÓM TẮT SIÊU TỐC — BẢNG GHI NHỚ NHANH ĐẠI HỘI IV",
              content: [
                {
                  type: "flashcards-banner",
                  items: [
                    {
                      icon: "⏰",
                      label: "Thời gian & Địa điểm",
                      value: "Trù bị: 29/11-10/12/1976; Công khai: 14/12-20/12/1976 tại Thủ đô Hà Nội."
                    },
                    {
                      icon: "👥",
                      label: "Số lượng Đại biểu",
                      value: "1.008 đại biểu chính thức, đại diện hơn 1,55 triệu đảng viên của 38 đảng bộ tỉnh/thành."
                    },
                    {
                      icon: "👤",
                      label: "Lãnh đạo chủ chốt",
                      value: "Tôn Đức Thắng khai mạc; Lê Duẩn đọc Báo cáo Chính trị; Phạm Văn Đồng báo cáo Kế hoạch 5 năm 2; Lê Đức Thọ báo cáo Xây dựng Đảng."
                    },
                    {
                      icon: "🇻🇳",
                      label: "Tầm vóc Lịch sử",
                      value: "Đại hội đầu tiên sau ngày thống nhất đất nước, Đại hội đầu tiên của Đảng trên phạm vi CẢ NƯỚC."
                    }
                  ]
                }
              ]
            },
            {
              id: "dh-4-sec-1-content",
              label: "I",
              title: "Thông tin chung về Đại hội IV",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ IV của Đảng họp trù bị từ 29/11 đến 10/12/1976 và họp công khai chính thức từ 14/12 đến 20/12/1976 tại Thủ đô Hà Nội."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 14 – 20/12/1976 | 📍 Địa điểm: Hà Nội | 👥 Quy mô: 1.008 đại biểu chính thức (>1,55 triệu đảng viên của 38 tỉnh/thành)"
                },
                {
                  type: "bullets",
                  items: [
                    "Thành phần tham dự: 29 đoàn đại biểu quốc tế tới dự và chào mừng.",
                    "Lãnh đạo chủ chốt: Tôn Đức Thắng đọc Diễn văn khai mạc; Lê Duẩn đọc Báo cáo Chính trị; Phạm Văn Đồng báo cáo Kế hoạch 5 năm 2; Lê Đức Thọ báo cáo Xây dựng Đảng & Sửa Điều lệ Đảng."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐ ĐIỂM NHẤN ĐẠI HỘI IV",
                  text: "Đây là Đại hội ĐẦU TIÊN sau khi đất nước thống nhất, Đại hội đầu tiên của Đảng trên phạm vi CẢ NƯỚC."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-4-grp-2",
      roman: "II",
      title: "Bối cảnh lịch sử",
      subsections: [
        {
          id: "dh-4-sec-2",
          number: "1",
          title: "Bối cảnh trong nước và quốc tế",
          parts: [
            {
              id: "dh-4-sec-2-content",
              label: "II",
              title: "Bối cảnh đất nước sau ngày 30/4/1975",
              content: [
                {
                  type: "paragraph",
                  text: "🔹 Trong nước:"
                },
                {
                  type: "bullets",
                  items: [
                    "Đại thắng mùa Xuân 1975 kết thúc thắng lợi cuộc kháng chiến chống Mỹ, cứu nước ➔ Đất nước hòa bình, độc lập, thống nhất.",
                    "Ngày 25/4/1976: Tổng tuyển cử bầu Quốc hội chung cả nước đầu tiên.",
                    "Cả nước bước vào kỷ nguyên mới: Kỷ nguyên độc lập, thống nhất và cả nước đi lên Chủ nghĩa Xã hội.",
                    "Quá trình thống nhất đất nước diễn ra khẩn trương, toàn diện trên các lĩnh vực chính trị, kinh tế, văn hóa, xã hội.",
                    "Đồng thời cũng còn nhiều khó khăn: Hậu quả chiến tranh nặng nề, kinh tế nghèo nàn, cơ sở vật chất lạc hậu."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 Quốc tế:"
                },
                {
                  type: "bullets",
                  items: [
                    "Hệ thống các nước XHCN tiếp tục phát triển; Phong trào cách mạng thế giới có những thuận lợi mới sau thắng lợi của Việt Nam.",
                    "Đồng thời tình hình thế giới, khu vực diễn biến phức tạp (quan hệ với một số nước láng giềng bắt đầu có căng thẳng)."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ GHI NHỚ NHANH BỐI CẢNH",
                  text: "Sau Đại thắng 30/4/1975 ➔ Đất nước thống nhất, cả nước đi lên CNXH.\nCó thuận lợi lớn nhưng cũng nhiều khó khăn do hậu quả chiến tranh."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-4-grp-3",
      roman: "III",
      title: "Mục tiêu Đại hội",
      subsections: [
        {
          id: "dh-4-sec-3",
          number: "1",
          title: "Các mục tiêu và nhiệm vụ chiến lược",
          parts: [
            {
              id: "dh-4-sec-3-content",
              label: "III",
              title: "Nhiệm vụ cốt lõi của Đại hội IV",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Tổng kết cuộc kháng chiến chống Mỹ, cứu nước và cách mạng dân tộc dân chủ nhân dân trên cả nước; rút ra bài học kinh nghiệm.",
                    "Xác định đường lối cách mạng xã hội chủ nghĩa trong giai đoạn mới (cả nước đi lên CNXH).",
                    "Xác định phương hướng, nhiệm vụ, mục tiêu của Kế hoạch 5 năm lần thứ hai (1976-1980).",
                    "Xác định đường lối xây dựng Đảng nhằm nâng cao năng lực lãnh đạo, sức chiến đấu của Đảng.",
                    "Quyết định ĐỔI TÊN ĐẢNG."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-4-grp-4",
      roman: "IV",
      title: "Văn kiện được thông qua",
      subsections: [
        {
          id: "dh-4-sec-4",
          number: "1",
          title: "Các báo cáo văn kiện chính",
          parts: [
            {
              id: "dh-4-sec-4-content",
              label: "IV",
              title: "Các báo cáo trung tâm tại Đại hội IV",
              content: [
                {
                  type: "bullets",
                  items: [
                    "1. Báo cáo Chính trị: Trình bày bởi Đồng chí Lê Duẩn (Bí thư thứ nhất). Tổng kết quá trình đấu tranh chống Mỹ giải phóng miền Nam, bảo vệ miền Bắc; xác định đường lối chung của cách mạng XHCN cả nước.",
                    "2. Báo cáo về Kế hoạch 5 năm lần thứ hai (1976-1980): Trình bày bởi Đồng chí Phạm Văn Đồng. Đề ra 2 mục tiêu cơ bản: bảo đảm đời sống nhân dân & tích lũy xây dựng cơ sở vật chất - kỹ thuật CNXH.",
                    "3. Báo cáo tổng kết công tác xây dựng Đảng và sửa Điều lệ Đảng: Trình bày bởi Đồng chí Lê Đức Thọ. Củng cố, chấn chỉnh tổ chức Đảng đáp ứng yêu cầu cả nước lên CNXH."
                  ]
                },
                {
                  type: "paragraph",
                  text: "💡 Lưu ý: Ngoài 3 báo cáo trên, Đại hội còn nghe tham luận của các đồng chí Trường Chinh, Phạm Hùng, Võ Nguyên Giáp, Nguyễn Duy Trinh, Văn Tiến Dũng, Trần Quốc Hoàn..."
                },
                {
                  type: "trap-badge",
                  title: "⚡ GHI NHỚ NHANH VĂN KIỆN",
                  text: "• Báo cáo Chính trị — LÊ DUẨN.\n• Kế hoạch 5 năm lần 2 (1976-1980) — PHẠM VĂN ĐỒNG.\n• Sửa Điều lệ Đảng & Xây dựng Đảng — LÊ ĐỨC THỌ."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-4-grp-5",
      roman: "V",
      title: "Quyết định và chủ trương quan trọng ⭐️",
      subsections: [
        {
          id: "dh-4-sec-5",
          number: "1",
          title: "Đổi tên Đảng & Đường lối 3 cuộc cách mạng",
          parts: [
            {
              id: "dh-4-sec-5-content",
              label: "V",
              title: "Các quyết định đường lối lớn",
              content: [
                {
                  type: "paragraph",
                  text: "1. Đổi tên Đảng ⭐️:"
                },
                {
                  type: "bullets",
                  items: [
                    "Nội dung: Đổi tên 'Đảng Lao động Việt Nam' thành 'Đảng Cộng sản Việt Nam'.",
                    "Lý do: Phản ánh đúng bản chất, sứ mệnh của Đảng trong giai đoạn cả nước thống nhất đi lên CNXH; thống nhất tên gọi cho cả nước.",
                    "Tác động: Tên gọi 'Đảng Cộng sản Việt Nam' được giữ nguyên và sử dụng từ đó đến nay."
                  ]
                },
                {
                  type: "paragraph",
                  text: "2. Đường lối chung của cách mạng XHCN trong giai đoạn mới:"
                },
                {
                  type: "bullets",
                  items: [
                    "Nắm vững 'chuyên chính vô sản', phát huy 'quyền làm chủ tập thể' của nhân dân lao động.",
                    "Tiến hành đồng thời BA CUỘC CÁCH MẠNG: cách mạng quan hệ sản xuất, cách mạng khoa học - kỹ thuật, cách mạng tư tưởng và văn hóa (trong đó cách mạng Khoa học - Kỹ thuật là THEN CHỐT).",
                    "Đẩy mạnh CÔNG NGHIỆP HÓA XHCN là nhiệm vụ trung tâm của cả thời kỳ quá độ."
                  ]
                },
                {
                  type: "paragraph",
                  text: "3. Đường lối công nghiệp hóa XHCN & Kế hoạch 5 năm lần thứ hai (1976-1980):"
                },
                {
                  type: "bullets",
                  items: [
                    "Ưu tiên phát triển công nghiệp nặng một cách hợp lý trên cơ sở phát triển nông nghiệp và công nghiệp nhẹ.",
                    "Tuy nhiên, do nóng vội, chủ quan, chưa phù hợp thực tiễn ➔ Kế hoạch KHÔNG ĐẠT CÁC MỤC TIÊU đề ra, dẫn đến khủng hoảng kinh tế - xã hội cuối thập niên 1970 - đầu 1980 (đến Đại hội VI 1986 mới Đổi mới)."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-4-grp-6",
      roman: "VI",
      title: "Nhân sự",
      subsections: [
        {
          id: "dh-4-sec-6",
          number: "1",
          title: "Bộ máy lãnh đạo Trung ương khóa IV",
          parts: [
            {
              id: "dh-4-sec-6-content",
              label: "VI",
              title: "Khôi phục chức danh Tổng Bí thư",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Ban Chấp hành Trung ương: Bầu mới gồm 101 ủy viên chính thức và 32 ủy viên dự khuyết.",
                    "Bộ Chính trị: Gồm 14 ủy viên chính thức và 3 ủy viên dự khuyết.",
                    "Tổng Bí thư: Đồng chí Lê Duẩn được bầu làm TỔNG BÍ THƯ ⭐️.",
                    "Điểm mới: Khôi phục lại chức danh 'TỔNG BÍ THƯ' (thay cho chức danh 'Bí thư thứ nhất' dùng từ Đại hội III).",
                    "Đây là Đại hội đầu tiên bầu BCH Trung ương thống nhất cho CẢ NƯỚC (bao gồm cả đại biểu miền Nam)."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐️ ĐIỂM NHẤN NHÂN SỰ ĐẠI HỘI IV",
                  text: "BCH TW: 101 chính thức + 32 dự khuyết | Bộ Chính trị: 14 chính thức + 3 dự khuyết | Lê Duẩn - TỔNG BÍ THƯ (khôi phục lại chức danh này)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-4-grp-7",
      roman: "VII",
      title: "Cầu nối, khẩu hiệu, nhận định nổi bật",
      subsections: [
        {
          id: "dh-4-sec-7",
          number: "1",
          title: "Nhận định tính chất Đại hội & Đường lối 3 cuộc cách mạng",
          parts: [
            {
              id: "dh-4-sec-7-content",
              label: "VII",
              title: "Nhận định lịch sử của Đại hội IV",
              content: [
                {
                  type: "bullets",
                  items: [
                    "1. Nhận định về tính chất Đại hội: 'Đại hội IV là đại hội toàn thắng của sự nghiệp giải phóng dân tộc, đại hội tổng kết những bài học lớn của cuộc kháng chiến chống Mỹ, cứu nước, đại hội thống nhất Tổ quốc, đưa cả nước tiến lên con đường xã hội chủ nghĩa' ⭐️.",
                    "2. Đường lối 3 cuộc cách mạng: Tiến hành đồng thời CM QHSX, CM KH-KT, CM Tư tưởng văn hóa ➔ Trong đó 'KHOA HỌC - KỸ THUẬT LÀ THEN CHỐT'."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ GHI NHỚ NHANH NHẬN ĐỊNH",
                  text: "Đại hội IV = Đại hội toàn thắng + Tổng kết chống Mỹ + Thống nhất Tổ quốc, cả nước đi lên CNXH.\nĐường lối 'Ba cuộc cách mạng' — KH-KT LÀ THEN CHỐT."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Insert or replace dh-4 in basicGeneralData.chapters
const existingIdx = basicGeneralData.chapters.findIndex(c => c.id === "dh-4");
if (existingIdx !== -1) {
  basicGeneralData.chapters[existingIdx] = dh4Chapter;
} else {
  // Insert right after dh-3
  const dh3Idx = basicGeneralData.chapters.findIndex(c => c.id === "dh-3");
  if (dh3Idx !== -1) {
    basicGeneralData.chapters.splice(dh3Idx + 1, 0, dh4Chapter);
  } else {
    basicGeneralData.chapters.push(dh4Chapter);
  }
}

// Save back to basic-general.js
const basicGeneralJsContent = `/* ============================================================
   DỮ LIỆU TÀI LIỆU: KIẾN THỨC CƠ BẢN MÔN ĐẠI CƯƠNG
   Bài đọc chi tiết: 10 Kỳ Đại hội Đại biểu Toàn quốc của Đảng (Đại hội I, II, III, IV, X)
   ============================================================ */

export const basicGeneralData = ${JSON.stringify(basicGeneralData, null, 2)};
`;

fs.writeFileSync("./data/basic-general.js", basicGeneralJsContent, "utf8");
console.log("Added dh-4 to data/basic-general.js");

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
console.log("Updated data/index.js with dh-4 metadata.");
