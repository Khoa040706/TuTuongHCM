import fs from "fs";
import { basicGeneralData } from "../data/basic-general.js";

const dh5Chapter = {
  id: "dh-5",
  title: "Đại hội V (3/1982)",
  subtitle: "Chặng đường đầu thời kỳ quá độ & Giai đoạn tìm tòi Đổi mới",
  sections: [
    {
      id: "dh-5-grp-1",
      roman: "I",
      title: "Thông tin chung",
      subsections: [
        {
          id: "dh-5-sec-1",
          number: "1",
          title: "Thời gian, Địa điểm & Quy mô đại biểu",
          parts: [
            {
              id: "dh-5-flashcards",
              label: "⚡",
              title: "TÓM TẮT SIÊU TỐC — BẢNG GHI NHỚ NHANH ĐẠI HỘI V",
              content: [
                {
                  type: "flashcards-banner",
                  items: [
                    {
                      icon: "⏰",
                      label: "Thời gian & Địa điểm",
                      value: "Nội bộ: 15-24/3/1982; Công khai: 27-31/3/1982 tại Thủ đô Hà Nội."
                    },
                    {
                      icon: "👥",
                      label: "Số lượng Đại biểu",
                      value: "1.033 đại biểu, thay mặt hơn 1,727 triệu đảng viên trong 35.146 đảng bộ cơ sở."
                    },
                    {
                      icon: "👤",
                      label: "Lãnh đạo chủ chốt",
                      value: "Trường Chinh đọc Khai mạc; Lê Duẩn đọc Báo cáo chính trị; Phạm Văn Đồng báo cáo Kế hoạch 5 năm (1981-1985)."
                    },
                    {
                      icon: "🌱",
                      label: "Chủ trương Đột phá",
                      value: "Nông nghiệp là mặt trận hàng đầu ⭐️; Xác định Hai nhiệm vụ chiến lược (Xây dựng CNXH & Bảo vệ Tổ quốc)."
                    }
                  ]
                }
              ]
            },
            {
              id: "dh-5-sec-1-content",
              label: "I",
              title: "Thông tin chung về Đại hội V",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ V của Đảng họp nội bộ từ 15 đến 24/3/1982 và họp công khai chính thức từ 27 đến 31/3/1982 tại Thủ đô Hà Nội."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 27 – 31/3/1982 | 📍 Địa điểm: Hà Nội | 👥 Quy mô: 1.033 đại biểu (>1,727 triệu đảng viên trong 35.146 đảng bộ cơ sở)"
                },
                {
                  type: "bullets",
                  items: [
                    "Thành phần tham dự: Đại biểu cả nước và 47 đoàn đại biểu quốc tế (các đảng anh em, tổ chức cách mạng).",
                    "Lãnh đạo chủ chốt: Đồng chí Trường Chinh đọc Diễn văn khai mạc; Đồng chí Lê Duẩn đọc Báo cáo chính trị (sau đó tiếp tục được bầu lại làm Tổng Bí thư); Đồng chí Phạm Văn Đồng trình bày Báo cáo Kế hoạch 5 năm (1981-1985)."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐ GHI NHỚ NHANH ĐẠI HỘI V",
                  text: "• Lê Duẩn — Tổng Bí thư (đọc Báo cáo chính trị).\n• Trường Chinh — đọc Diễn văn khai mạc."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-5-grp-2",
      roman: "II",
      title: "Bối cảnh lịch sử",
      subsections: [
        {
          id: "dh-5-sec-2",
          number: "1",
          title: "Bối cảnh trong nước và quốc tế",
          parts: [
            {
              id: "dh-5-sec-2-content",
              label: "II",
              title: "Khủng hoảng kinh tế - xã hội nghiêm trọng",
              content: [
                {
                  type: "paragraph",
                  text: "🔹 Trong nước:"
                },
                {
                  type: "bullets",
                  items: [
                    "Đất nước đã thống nhất, cả nước đi lên CNXH sau Đại hội IV (1976).",
                    "Kinh tế - xã hội LÂM VÀO KHỦNG HOẢNG: sản xuất trì trệ, mất cân đối nghiêm trọng, thiếu lương thực - vải mặc - hàng tiêu dùng thiết yếu; cung cấp năng lượng, vật tư, giao thông vận tải rất căng thẳng.",
                    "Nguyên nhân: Có khách quan (chiến tranh biên giới, bao vây cấm vận) nhưng CHỦ YẾU LÀ KHUYẾT ĐIỂM, SAI LẦM TRONG LÃNH ĐẠO, QUẢN LÝ kinh tế - xã hội của Đảng và Nhà nước từ Trung ương đến cơ sở.",
                    "Chiến tranh bảo vệ biên giới Tây Nam và phía Bắc vừa diễn ra, đòi hỏi vừa xây dựng vừa sẵn sàng chiến đấu bảo vệ Tổ quốc."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 Quốc tế:"
                },
                {
                  type: "bullets",
                  items: [
                    "Tình hình thế giới và khu vực diễn biến phức tạp, các thế lực thù địch bao vây, cấm vận, chống phá Việt Nam.",
                    "Quan hệ với các nước xã hội chủ nghĩa (Liên Xô...) tiếp tục được củng cố, tranh thủ viện trợ."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ GHI NHỚ NHANH BỐI CẢNH",
                  text: "Bối cảnh: Đất nước sau thống nhất nhưng KHỦNG HOẢNG KINH TẾ - XÃ HỘI ⭐️.\nNguyên nhân chính: Khuyết điểm chủ quan trong lãnh đạo, quản lý kinh tế."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-5-grp-3",
      roman: "III",
      title: "Mục tiêu Đại hội",
      subsections: [
        {
          id: "dh-5-sec-3",
          number: "1",
          title: "Hai nhiệm vụ chiến lược và phương hướng mới",
          parts: [
            {
              id: "dh-5-sec-3-content",
              label: "III",
              title: "Mục tiêu cốt lõi của Đại hội V",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Tổng kết chặng đường từ Đại hội IV đến Đại hội V: Đánh giá thắng lợi và khó khăn tồn tại.",
                    "Đề ra HAI NHIỆM VỤ CHIẾN LƯỢC của cách mạng Việt Nam trong giai đoạn mới ⭐️:\n  1. Xây dựng thành công Chủ nghĩa Xã hội.\n  2. Sẵn sàng chiến đấu, bảo vệ vững chắc Tổ quốc XHCN.",
                    "Xác định phương hướng, nhiệm vụ, mục tiêu kinh tế kế hoạch 5 năm (1981-1985) và những năm 80.",
                    "Đề ra chủ trương xây dựng, chỉnh đốn Đảng."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐ LẦN ĐẦU TIÊN NÊU CHÍNH THỨC",
                  text: "Đây là LẦN ĐẦU TIÊN 'Hai nhiệm vụ chiến lược' (Xây dựng CNXH + Bảo vệ Tổ quốc XHCN) được nêu chính thức trong văn kiện Đại hội Đảng ⭐️."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-5-grp-4",
      roman: "IV",
      title: "Văn kiện được thông qua",
      subsections: [
        {
          id: "dh-5-sec-4",
          number: "1",
          title: "Bốn văn kiện trung tâm của Đại hội",
          parts: [
            {
              id: "dh-5-sec-4-content",
              label: "IV",
              title: "Các văn kiện quan trọng tại Đại hội V",
              content: [
                {
                  type: "bullets",
                  items: [
                    "1. Báo cáo chính trị: Trình bày bởi Đồng chí Lê Duẩn. Đánh giá thành tựu, khuyết điểm từ ĐH IV đến ĐH V; nêu hai nhiệm vụ chiến lược; xác định chặng đường đầu thời kỳ quá độ.",
                    "2. Nghị quyết về phương hướng, nhiệm vụ Kế hoạch 5 năm (1981-1985): Trình bày bởi Đồng chí Phạm Văn Đồng. Đề ra các mục tiêu kinh tế - xã hội tổng quát; coi NÔNG NGHIỆP LÀ MẶT TRẬN HÀNG ĐẦU ⭐️.",
                    "3. Báo cáo xây dựng Đảng và Nghị quyết bổ sung Điều lệ Đảng: Chỉ rõ ưu điểm và khuyết điểm lớn của Đảng; yêu cầu đổi mới công tác tư tưởng, tổ chức.",
                    "4. Điều lệ Đảng Cộng sản Việt Nam (bổ sung, sửa đổi): Thông qua chính thức."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ GHI NHỚ NHANH VĂN KIỆN",
                  text: "• Báo cáo chính trị — LÊ DUẨN.\n• Kế hoạch 5 năm (1981-1985) — PHẠM VĂN ĐỒNG (Nông nghiệp là mặt trận hàng đầu)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-5-grp-5",
      roman: "V",
      title: "Quyết định và chủ trương quan trọng ⭐️",
      subsections: [
        {
          id: "dh-5-sec-5",
          number: "1",
          title: "Hai nhiệm vụ chiến lược & Nông nghiệp là mặt trận hàng đầu",
          parts: [
            {
              id: "dh-5-sec-5-content",
              label: "V",
              title: "Các quyết định đường lối bước ngoặt",
              content: [
                {
                  type: "paragraph",
                  text: "1. Xác định hai nhiệm vụ chiến lược:"
                },
                {
                  type: "bullets",
                  items: [
                    "Xây dựng thành công CNXH và bảo vệ vững chắc Tổ quốc XHCN.",
                    "Lý do: Đất nước vừa phát triển kinh tế vừa đối phó với chiến tranh biên giới, bao vây cấm vận.",
                    "Tác động: Trở thành kim chỉ nam xuyên suốt các Đại hội sau."
                  ]
                },
                {
                  type: "paragraph",
                  text: "2. Xác định chặng đường đầu của thời kỳ quá độ lên CNXH:"
                },
                {
                  type: "bullets",
                  items: [
                    "Tập trung phát triển nông nghiệp, coi NÔNG NGHIỆP LÀ MẶT TRẬN HÀNG ĐẦU ⭐️; đẩy mạnh sản xuất hàng tiêu dùng; kết hợp nông nghiệp - công nghiệp hàng tiêu dùng - công nghiệp nặng.",
                    "Lý do: Nền kinh tế mất cân đối nghiêm trọng, cần ưu tiên lương thực, hàng tiêu dùng trước khi đẩy mạnh công nghiệp nặng.",
                    "Tác động: Điều chỉnh nhận thức về công nghiệp hóa so với Đại hội IV (ĐH IV nhấn mạnh ưu tiên công nghiệp nặng)."
                  ]
                },
                {
                  type: "paragraph",
                  text: "3. Thừa nhận nền kinh tế nhiều thành phần ở miền Nam & Mầm mống Đổi mới:"
                },
                {
                  type: "bullets",
                  items: [
                    "Khẳng định trong một thời gian nhất định, ở miền Nam tồn tại nhiều thành phần kinh tế ➔ Là MẦM MỐNG TƯ DUY ĐỔI MỚI KINH TẾ.",
                    "Thực tiễn nổi bật: Động lực từ Khoán sản phẩm nông nghiệp (Chỉ thị 100); đặc biệt Hội nghị Trung ương 8 khóa V (6/1985) quyết định: 'Xóa bỏ tập trung quan liêu bao cấp, thực hiện hạch toán kinh doanh XHCN' ➔ Bước chuẩn bị trực tiếp cho Đổi mới tại Đại hội VI."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐️ CHÌA KHÓA BẢN CHẤT ĐẠI HỘI V",
                  text: "Đại hội V = Giai đoạn BẮT ĐẦU TÌM TÒI, MÒ MẪM ĐỔI MỚI, chưa phải Đổi mới toàn diện (Đổi mới toàn diện = Đại hội VI, 12/1986) ⭐️.\nHai nhiệm vụ chiến lược + Nông nghiệp là mặt trận hàng đầu là điểm cốt lõi để thi."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-5-grp-6",
      roman: "VI",
      title: "Nhân sự",
      subsections: [
        {
          id: "dh-5-sec-6",
          number: "1",
          title: "Bộ máy lãnh đạo Trung ương khóa V",
          parts: [
            {
              id: "dh-5-sec-6-content",
              label: "VI",
              title: "Nhân sự khóa V & Chuyển giao lịch sử năm 1986",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Ban Chấp hành Trung ương: Bầu 116 Ủy viên chính thức và 36 Ủy viên dự khuyết.",
                    "Bộ Chính trị: Gồm 13 Ủy viên chính thức và 2 Ủy viên dự khuyết; Ban Bí thư gồm 10 thành viên.",
                    "Tổng Bí thư: Đồng chí Lê Duẩn được bầu lại; giữ chức đến khi từ trần (10/7/1986).",
                    "Chuyển giao lịch sử ⭐️: Sau khi đồng chí Lê Duẩn từ trần (7/1986), đồng chí TRƯỜNG CHINH được bầu kế nhiệm làm Tổng Bí thư từ 14/7/1986 (người sau đó khởi xướng Đổi mới tại Đại hội VI)."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐️ ĐIỂM NHẤN NHÂN SỰ ĐẠI HỘI V",
                  text: "BCH TW: 116 chính thức + 36 dự khuyết | Bộ Chính trị: 13 chính thức + 2 dự khuyết | Ban Bí thư: 10 thành viên.\nLê Duẩn — Tổng Bí thư (đến khi mất 7/1986) ➔ TRƯỜNG CHINH thay thế (khởi xướng Đổi mới tại ĐH VI)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-5-grp-7",
      roman: "VII",
      title: "Cầu nối, khẩu hiệu, nhận định nổi bật",
      subsections: [
        {
          id: "dh-5-sec-7",
          number: "1",
          title: "Khẩu hiệu trung tâm & Tự phê bình nghiêm túc",
          parts: [
            {
              id: "dh-5-sec-7-content",
              label: "VII",
              title: "Khẩu hiệu và Nhận định lịch sử",
              content: [
                {
                  type: "bullets",
                  items: [
                    "1. Khẩu hiệu Đại hội: 'Tất cả vì Tổ quốc xã hội chủ nghĩa, vì hạnh phúc của Nhân dân' ⭐️ — Đặt mục tiêu lấy dân làm gốc trong bối cảnh vượt qua khủng hoảng.",
                    "2. Nhận định về khuyết điểm lãnh đạo: 'Trong quá trình thực hiện nhiệm vụ chính trị, Đảng ta đã có những ưu điểm rất cơ bản, đồng thời cũng bộc lộ những nhược điểm và khuyết điểm lớn cần ra sức khắc phục' ➔ Thể hiện tinh thần TỰ PHÊ BÌNH NGHIÊM TÚC, mở đường cho đổi mới tư duy."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ GHI NHỚ NHANH KHẨU HIỆU",
                  text: "Khẩu hiệu Đại hội V: 'Tất cả vì Tổ quốc xã hội chủ nghĩa, vì hạnh phúc của Nhân dân' ⭐️."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Insert or replace dh-5 in basicGeneralData.chapters
const existingIdx = basicGeneralData.chapters.findIndex(c => c.id === "dh-5");
if (existingIdx !== -1) {
  basicGeneralData.chapters[existingIdx] = dh5Chapter;
} else {
  // Insert right after dh-4
  const dh4Idx = basicGeneralData.chapters.findIndex(c => c.id === "dh-4");
  if (dh4Idx !== -1) {
    basicGeneralData.chapters.splice(dh4Idx + 1, 0, dh5Chapter);
  } else {
    basicGeneralData.chapters.push(dh5Chapter);
  }
}

// Save back to basic-general.js
const basicGeneralJsContent = `/* ============================================================
   DỮ LIỆU TÀI LIỆU: KIẾN THỨC CƠ BẢN MÔN ĐẠI CƯƠNG
   Bài đọc chi tiết: 10 Kỳ Đại hội Đại biểu Toàn quốc của Đảng (Đại hội I, II, III, IV, V, X)
   ============================================================ */

export const basicGeneralData = ${JSON.stringify(basicGeneralData, null, 2)};
`;

fs.writeFileSync("./data/basic-general.js", basicGeneralJsContent, "utf8");
console.log("Added dh-5 to data/basic-general.js");

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
console.log("Updated data/index.js with dh-5 metadata.");
