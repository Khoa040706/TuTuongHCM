import fs from "fs";
import { basicGeneralData } from "../data/basic-general.js";

const dh8Chapter = {
  id: "dh-8",
  title: "Đại hội VIII (6-7/1996)",
  subtitle: "Đại hội Đẩy mạnh Công nghiệp hóa, Hiện đại hóa Đất nước",
  sections: [
    {
      id: "dh-8-grp-1",
      roman: "I",
      title: "Thông tin chung",
      subsections: [
        {
          id: "dh-8-sec-1",
          number: "1",
          title: "Thời gian, Địa điểm & Quy mô đại biểu",
          parts: [
            {
              id: "dh-8-flashcards",
              label: "⚡",
              title: "TÓM TẮT SIÊU TỐC — BẢNG GHI NHỚ NHANH ĐẠI HỘI VIII",
              content: [
                {
                  type: "flashcards-banner",
                  items: [
                    {
                      icon: "⏰",
                      label: "Thời gian & Địa điểm",
                      value: "Nội bộ: 22-26/6/1996; Công khai: 28/6 - 1/7/1996 tại Hội trường Ba Đình, Hà Nội."
                    },
                    {
                      icon: "👥",
                      label: "Số lượng Đại biểu",
                      value: "1.198 đại biểu, thay mặt cho gần 2 triệu 130 nghìn đảng viên cả nước."
                    },
                    {
                      icon: "👤",
                      label: "Lãnh đạo chủ chốt",
                      value: "Lê Đức Anh đọc Khai mạc; Đỗ Mười đọc Báo cáo chính trị & tái cử Tổng Bí thư."
                    },
                    {
                      icon: "🏗️",
                      label: "Bước Ngoặt CNH - HĐH",
                      value: "Đất nước ra khỏi khủng hoảng, mở đường bước sang thời kỳ đẩy mạnh CNH, HĐH."
                    }
                  ]
                }
              ]
            },
            {
              id: "dh-8-sec-1-content",
              label: "I",
              title: "Thông tin chung về Đại hội VIII",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ VIII của Đảng họp nội bộ từ 22 đến 26/6/1996 và họp công khai từ 28/6 đến 1/7/1996 tại Hội trường Ba Đình, Thủ đô Hà Nội."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 28/6 – 1/7/1996 | 📍 Địa điểm: Ba Đình, Hà Nội | 👥 Quy mô: 1.198 đại biểu (~2,13 triệu đảng viên)"
                },
                {
                  type: "bullets",
                  items: [
                    "Thành phần tham dự: Đại biểu các Đảng bộ; Cố vấn BCHTW, đại diện lão thành cách mạng, Mẹ VNAH, nhân sĩ trí thức; gần 40 đoàn đại biểu quốc tế.",
                    "Lãnh đạo chủ chốt: Đồng chí Lê Đức Anh đọc Diễn văn khai mạc; Đồng chí Đỗ Mười (TBT khóa VII) đọc Báo cáo chính trị và tiếp tục được bầu làm Tổng Bí thư khóa VIII ⭐️.",
                    "Cố vấn BCH Trung ương: Các đồng chí Nguyễn Văn Linh, Phạm Văn Đồng, Võ Chí Công."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐ GHI NHỚ NHANH TỔNG BÍ THƯ ĐẠI HỘI VIII",
                  text: "Tổng Bí thư Đại hội VIII bầu: ĐỖ MƯỜI ⭐️ (tái nhiệm từ khóa VII).\nCố vấn BCHTW: Nguyễn Văn Linh, Phạm Văn Đồng, Võ Chí Công."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-8-grp-2",
      roman: "II",
      title: "Bối cảnh lịch sử",
      subsections: [
        {
          id: "dh-8-sec-2",
          number: "1",
          title: "Bối cảnh trong nước và quốc tế",
          parts: [
            {
              id: "dh-8-sec-2-content",
              label: "II",
              title: "Thoát khỏi khủng hoảng KT-XH & Đột phá ngoại giao 7/1995",
              content: [
                {
                  type: "paragraph",
                  text: "🔹 Trong nước ⭐️:"
                },
                {
                  type: "bullets",
                  items: [
                    "Sau 10 năm Đổi mới (1986 - 1996), ĐẤT NƯỚC ĐÃ RA KHỎI KHỦNG HOẢNG KINH TẾ - XÃ HỘI ⭐️.",
                    "Nhiệm vụ chuẩn bị tiền đề cho công nghiệp hóa đã cơ bản hoàn thành.",
                    "Hội nghị đại biểu toàn quốc giữa nhiệm kỳ khóa VII (1/1994) đã tổng kết nửa nhiệm kỳ, chuẩn bị cho Đại hội VIII.",
                    "CỘT MỐC NGOẠI GIAO ĐỘT PHÁ (7/1995): Việt Nam gia nhập ASEAN và bình thường hóa quan hệ ngoại giao với Hoa Kỳ ⭐️."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 Quốc tế:"
                },
                {
                  type: "bullets",
                  items: [
                    "Tình hình thế giới biến đổi nhanh chóng, xu thế toàn cầu hóa và hội nhập kinh tế quốc tế ngày càng rõ nét.",
                    "Khủng hoảng sụp đổ CNXH ở Liên Xô và Đông Âu đã diễn ra trước đó, phong trào cộng sản và công nhân quốc tế còn nhiều khó khăn."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ KHÁC BIỆT LỚN NHẤT VỚI ĐẠI HỘI VII",
                  text: "Điểm khác biệt lớn nhất: Đất nước đã RA KHỎI KHỦNG HOẢNG KT-XH ⭐️, đủ điều kiện chuyển sang giai đoạn đẩy mạnh CNH, HĐH."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-8-grp-3",
      roman: "III",
      title: "Mục tiêu Đại hội",
      subsections: [
        {
          id: "dh-8-sec-3",
          number: "1",
          title: "Các mục tiêu và định hướng đẩy mạnh CNH, HĐH",
          parts: [
            {
              id: "dh-8-sec-3-content",
              label: "III",
              title: "Mục tiêu cốt lõi của Đại hội VIII",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Tổng kết 10 năm Đổi mới (1986 - 1996), khẳng định đường lối đổi mới của Đảng là hoàn toàn đúng đắn.",
                    "Đề ra chủ trương chuyển đất nước sang thời kỳ mới: ĐẨY MẠNH CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA (CNH, HĐH) đất nước ⭐️.",
                    "Xác định mục tiêu, nhiệm vụ phát triển kinh tế - xã hội 5 năm 1996 - 2000.",
                    "Xác định mục tiêu phấn đấu ĐẾN NĂM 2020: Đưa nước ta cơ bản trở thành nước công nghiệp ⭐️.",
                    "Bổ sung, sửa đổi Điều lệ Đảng cho phù hợp giai đoạn mới."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐️ MỤC TIÊU TRỌNG TÂM ĐẠI HỘI VIII",
                  text: "Mục tiêu trọng tâm: 'Tiếp tục đổi mới, đẩy mạnh CNH, HĐH đất nước' ⭐️, phấn đấu đến năm 2020 cơ bản thành nước công nghiệp."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-8-grp-4",
      roman: "IV",
      title: "Văn kiện được thông qua",
      subsections: [
        {
          id: "dh-8-sec-4",
          number: "1",
          title: "Các văn kiện chính thức của Đại hội",
          parts: [
            {
              id: "dh-8-sec-4-content",
              label: "IV",
              title: "Nội dung các báo cáo văn kiện",
              content: [
                {
                  type: "bullets",
                  items: [
                    "1. Báo cáo Chính trị của BCH Trung ương khóa VII: Đỗ Mười trình bày. Tổng kết 10 năm đổi mới, nêu chủ trương đẩy mạnh CNH, HĐH ⭐️.",
                    "2. Phương hướng, nhiệm vụ phát triển KT-XH 5 năm 1996-2000: Đặt mục tiêu GDP bình quân đầu người tăng gấp đôi so với năm 1990; tốc độ tăng trưởng GDP bình quân 9 - 10%/năm.",
                    "3. Điều lệ Đảng (bổ sung, sửa đổi): Hoàn thiện các quy định về tổ chức và hoạt động của Đảng.",
                    "4. Nghị quyết Đại hội đại biểu toàn quốc lần thứ VIII: Thông qua toàn bộ văn kiện, giao BCH TW khóa VIII triển khai."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ VĂN KIỆN QUAN TRỌNG NHẤT",
                  text: "Văn kiện quan trọng nhất: Báo cáo Chính trị (Đỗ Mười) — nêu chủ trương đẩy mạnh CNH, HĐH đất nước ⭐️."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-8-grp-5",
      roman: "V",
      title: "Quyết định và chủ trương quan trọng ⭐️",
      subsections: [
        {
          id: "dh-8-sec-5",
          number: "1",
          title: "Chủ trương Đẩy mạnh CNH, HĐH & Hai nhiệm vụ chiến lược",
          parts: [
            {
              id: "dh-8-sec-5-content",
              label: "V",
              title: "Các quyết định đường lối lớn tại Đại hội VIII",
              content: [
                {
                  type: "paragraph",
                  text: "1. Chủ trương chuyển đất nước sang thời kỳ đẩy mạnh CNH, HĐH ⭐️:"
                },
                {
                  type: "bullets",
                  items: [
                    "Nội dung: Từ nay tập trung sức đẩy mạnh CNH, HĐH, phấn đấu đến năm 2020 đưa nước ta cơ bản trở thành nước công nghiệp.",
                    "Lý do: Đất nước đã ra khỏi khủng hoảng KT-XH, đã chuẩn bị xong các tiền đề cần thiết cho công nghiệp hóa.",
                    "Tác động: Đánh dấu BƯỚC NGOẶT trong đường lối phát triển kinh tế của Đảng sau 10 năm đổi mới."
                  ]
                },
                {
                  type: "paragraph",
                  text: "2. Xác định hai nhiệm vụ chiến lược:"
                },
                {
                  type: "bullets",
                  items: [
                    "Nội dung: Tiếp tục nắm vững hai nhiệm vụ chiến lược: Xây dựng CNXH và Bảo vệ Tổ quốc.",
                    "Định hướng: Thực hiện ngay trong nhiệm kỳ 1996 - 2000, định hướng lâu dài đến năm 2020 (tiếp tục cụ thể hóa tại Đại hội IX, X, XI)."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐️ QUYẾT ĐỊNH CỐT LÕI ĐẠI HỘI VIII",
                  text: "Quyết định quan trọng nhất: Chủ trương 'ĐẨY MẠNH CNH, HĐH' ⭐️, mục tiêu đến năm 2020 cơ bản trở thành nước công nghiệp."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-8-grp-6",
      roman: "VI",
      title: "Nhân sự",
      subsections: [
        {
          id: "dh-8-sec-6",
          number: "1",
          title: "Bộ máy lãnh đạo Trung ương khóa VIII & Sự kiện bầu TBT giữa nhiệm kỳ",
          parts: [
            {
              id: "dh-8-sec-6-content",
              label: "VI",
              title: "Nhân sự Tổng Bí thư & Cố vấn BCH Trung ương",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Ban Chấp hành Trung ương & Bộ Chính trị: Bầu BCH TW khóa VIII và Bộ Chính trị khóa VIII.",
                    "Tổng Bí thư bầu tại Đại hội VIII: Đồng chí ĐỖ MƯỜI (tái đắc cử) ⭐️.",
                    "Cố vấn BCH Trung ương: Các đồng chí Nguyễn Văn Linh, Phạm Văn Đồng, Võ Chí Công.",
                    "⚠️ LƯU Ý QUAN TRỌNG GIỮA NHIỆM KỲ: Tháng 12/1997, tại Hội nghị Trung ương 4 khóa VIII, đồng chí LÊ KHẢ PHIÊU được bầu làm Tổng Bí thư thay đồng chí Đỗ Mười ⭐️."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚠️ BẪY THI NHÂN SỰ GIỮA NHIỆM KỲ",
                  text: "• Đại hội VIII bầu: ĐỖ MƯỜI làm Tổng Bí thư.\n• Tháng 12/1997 (HNTW 4 khóa VIII): LÊ KHẢ PHIÊU được bầu làm Tổng Bí thư thay thế (Rất dễ bị hỏi nhầm!)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-8-grp-7",
      roman: "VII",
      title: "Cầu nối, khẩu hiệu, nhận định nổi bật",
      subsections: [
        {
          id: "dh-8-sec-7",
          number: "1",
          title: "Nhận định mang tính bước ngoặt sang thế kỷ XXI",
          parts: [
            {
              id: "dh-8-sec-7-content",
              label: "VII",
              title: "Nhận định trung tâm đánh giá về Đại hội VIII",
              content: [
                {
                  type: "bullets",
                  items: [
                    "1. 'Đại hội có ý nghĩa đặc biệt quan trọng, đánh dấu cột mốc phát triển mới trong tiến trình phát triển của cách mạng nước ta' ⭐️.",
                    "2. 'Kết quả của đại hội có ý nghĩa quyết định đối với vận mệnh dân tộc và tương lai đất nước vào lúc chúng ta sắp bước vào thế kỷ XXI'."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ GHI NHỚ NHANH NHẬN ĐỊNH",
                  text: "Đại hội VIII ⭐️ = 'Cột mốc phát triển mới', mở đường bước vào thế kỷ XXI."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Insert or replace dh-8 in basicGeneralData.chapters
const existingIdx = basicGeneralData.chapters.findIndex(c => c.id === "dh-8");
if (existingIdx !== -1) {
  basicGeneralData.chapters[existingIdx] = dh8Chapter;
} else {
  // Insert right after dh-7
  const dh7Idx = basicGeneralData.chapters.findIndex(c => c.id === "dh-7");
  if (dh7Idx !== -1) {
    basicGeneralData.chapters.splice(dh7Idx + 1, 0, dh8Chapter);
  } else {
    basicGeneralData.chapters.push(dh8Chapter);
  }
}

// Save back to basic-general.js
const basicGeneralJsContent = `/* ============================================================
   DỮ LIỆU TÀI LIỆU: KIẾN THỨC CƠ BẢN MÔN ĐẠI CƯƠNG
   Bài đọc chi tiết: 10 Kỳ Đại hội Đại biểu Toàn quốc của Đảng (Đại hội I, II, III, IV, V, VI, VII, VIII, X)
   ============================================================ */

export const basicGeneralData = ${JSON.stringify(basicGeneralData, null, 2)};
`;

fs.writeFileSync("./data/basic-general.js", basicGeneralJsContent, "utf8");
console.log("Added dh-8 to data/basic-general.js");

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
console.log("Updated data/index.js with dh-8 metadata.");
