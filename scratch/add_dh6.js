import fs from "fs";
import { basicGeneralData } from "../data/basic-general.js";

const dh6Chapter = {
  id: "dh-6",
  title: "Đại hội VI (12/1986)",
  subtitle: "Đại hội Lịch sử — Khởi xướng Đường lối Đổi mới Toàn diện",
  sections: [
    {
      id: "dh-6-grp-1",
      roman: "I",
      title: "Thông tin chung",
      subsections: [
        {
          id: "dh-6-sec-1",
          number: "1",
          title: "Thời gian, Địa điểm & Quy mô đại biểu",
          parts: [
            {
              id: "dh-6-flashcards",
              label: "⚡",
              title: "TÓM TẮT SIÊU TỐC — BẢNG GHI NHỚ NHANH ĐẠI HỘI VI",
              content: [
                {
                  type: "flashcards-banner",
                  items: [
                    {
                      icon: "⏰",
                      label: "Thời gian & Địa điểm",
                      value: "Nội bộ: 5-14/12/1986; Công khai: 15-18/12/1986 tại Thủ đô Hà Nội."
                    },
                    {
                      icon: "👥",
                      label: "Số lượng Đại biểu",
                      value: "1.129 đại biểu chính thức, thay mặt gần 1,9 triệu đảng viên cả nước."
                    },
                    {
                      icon: "👤",
                      label: "Lãnh đạo chủ chốt",
                      value: "Nguyễn Văn Linh đọc Khai mạc; Trường Chinh đọc Báo cáo chính trị; Võ Văn Kiệt báo cáo Kinh tế-Xã hội."
                    },
                    {
                      icon: "🚀",
                      label: "Tầm vóc Lịch sử",
                      value: "Đại hội khởi xướng Đổi mới toàn diện; Tổng Bí thư Nguyễn Văn Linh; Khẩu hiệu 'Nhìn thẳng vào sự thật'."
                    }
                  ]
                }
              ]
            },
            {
              id: "dh-6-sec-1-content",
              label: "I",
              title: "Thông tin chung về Đại hội VI",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ VI của Đảng họp nội bộ từ 5 đến 14/12/1986 và họp công khai chính thức từ 15 đến 18/12/1986 tại Thủ đô Hà Nội."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 15 – 18/12/1986 | 📍 Địa điểm: Hà Nội | 👥 Quy mô: 1.129 đại biểu (~1,9 triệu đảng viên cả nước)"
                },
                {
                  type: "bullets",
                  items: [
                    "Thành phần đại biểu: 925 đại biểu địa phương; 172 đại biểu cơ quan TW; 153 đại biểu nữ; 115 đại biểu dân tộc thiểu số; 50 Anh hùng LLVT & Lao động; 72 công nhân trực tiếp sản xuất; 32 đoàn đại biểu quốc tế.",
                    "Lãnh đạo chủ chốt: Đồng chí Nguyễn Văn Linh đọc Diễn văn khai mạc; Đồng chí Trường Chinh (Tổng Bí thư) đọc Báo cáo chính trị; Đồng chí Võ Văn Kiệt báo cáo Kế hoạch 5 năm (1986-1990)."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐ GHI NHỚ NHANH BA BÁO CÁO CHÍNH",
                  text: "• Nguyễn Văn Linh — đọc Diễn văn khai mạc.\n• Trường Chinh — đọc Báo cáo chính trị (nêu tinh thần nhìn thẳng vào sự thật).\n• Võ Văn Kiệt — đọc Báo cáo kinh tế - xã hội (3 chương trình lớn)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-6-grp-2",
      roman: "II",
      title: "Bối cảnh lịch sử",
      subsections: [
        {
          id: "dh-6-sec-2",
          number: "1",
          title: "Bối cảnh trong nước và quốc tế",
          parts: [
            {
              id: "dh-6-sec-2-content",
              label: "II",
              title: "Khủng hoảng kinh tế - xã hội cực điểm & Lạm phát phi mã 774%",
              content: [
                {
                  type: "paragraph",
                  text: "🔹 Trong nước:"
                },
                {
                  type: "bullets",
                  items: [
                    "Sau 10 năm (1976-1986) xây dựng CNXH cả nước, đất nước vẫn ở trong tình trạng khủng hoảng kinh tế - xã hội trầm trọng.",
                    "LẠM PHÁT PHI MÃ: Tăng từ khoảng 300% năm 1985 lên hơn 774% năm 1986 ⭐️.",
                    "Cuộc cải cách Giá - Lương - Tiền năm 1985 không cải thiện được tình hình mà còn làm đời sống nhân dân khó khăn hơn.",
                    "Các đợt xé rào, đột phá nhỏ trước đó chưa thay đổi được căn bản tình hình ➔ Ép buộc Đảng phải ĐỔI MỚI TOÀN DIỆN."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 Quốc tế:"
                },
                {
                  type: "bullets",
                  items: [
                    "Xu thế cải tổ, cải cách diễn ra ở nhiều nước XHCN (Liên Xô và Đông Âu).",
                    "Đất nước tiếp tục bị các thế lực thù địch bao vây, cấm vận.",
                    "Xu thế toàn cầu hóa đòi hỏi phải đổi mới tư duy để hội nhập và tận dụng sức mạnh thời đại."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ GHI NHỚ NHANH BỐI CẢNH ĐẠI HỘI VI",
                  text: "Bối cảnh: Khủng hoảng KT-XH cực điểm, lạm phát phi mã từ 300% (1985) ➔ 774% (1986) ⭐️.\nĐây là nguyên nhân trực tiếp ép buộc Đảng phải Đổi mới toàn diện."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-6-grp-3",
      roman: "III",
      title: "Mục tiêu Đại hội",
      subsections: [
        {
          id: "dh-6-sec-3",
          number: "1",
          title: "Khởi xướng đường lối Đổi mới toàn diện",
          parts: [
            {
              id: "dh-6-sec-3-content",
              label: "III",
              title: "Mục tiêu và Tinh thần cốt lõi của Đại hội VI",
              content: [
                {
                  type: "bullets",
                  items: [
                    "'NHÌN THẲNG VÀO SỰ THẬT, ĐÁNH GIÁ ĐÚNG SỰ THẬT, NÓI RÕ SỰ THẬT' ⭐️ — Tổng kết nghiêm túc 10 năm (1976-1986).",
                    "Chỉ rõ những sai lầm nghiêm trọng, kéo dài về chủ trương, chính sách lớn, đặc biệt là bệnh chủ quan, duy ý chí, lạc hậu về nhận thức lý luận.",
                    "Khẳng định ĐỔI MỚI LÀ YÊU CẦU BỨC THIẾT, có ý nghĩa sống còn đối với đất nước.",
                    "Đề ra đường lối ĐỔI MỚI TOÀN DIỆN, trước hết là ĐỔI MỚI TƯ DUY KINH TẾ.",
                    "Xác định nhiệm vụ bao trùm: Ổn định mọi mặt tình hình kinh tế - xã hội, tạo tiền đề cho công nghiệp hóa XHCN ở chặng đường tiếp theo."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐ TINH THẦN CỐT LÕI ĐẠI HỘI VI",
                  text: "• Tinh thần: 'Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật' ⭐️.\n• Đại hội VI = Đại hội KHỞI XƯỚNG ĐƯỜNG LỐI ĐỔI MỚI TOÀN DIỆN."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-6-grp-4",
      roman: "IV",
      title: "Văn kiện được thông qua",
      subsections: [
        {
          id: "dh-6-sec-4",
          number: "1",
          title: "Các văn kiện trọng tâm của Đại hội",
          parts: [
            {
              id: "dh-6-sec-4-content",
              label: "IV",
              title: "Nội dung các báo cáo văn kiện",
              content: [
                {
                  type: "bullets",
                  items: [
                    "1. Báo cáo chính trị: Trình bày bởi Đồng chí Trường Chinh. Thừa nhận khuyết điểm, sai lầm 1976-1985; nêu tinh thần 'nhìn thẳng vào sự thật'; đề ra đường lối Đổi mới toàn diện.",
                    "2. Báo cáo phương hướng, mục tiêu kinh tế - xã hội (1986-1990): Trình bày bởi Đồng chí Võ Văn Kiệt. Đề ra BA CHƯƠNG TRÌNH KINH TẾ LỚN: Lương thực - thực phẩm, Hàng tiêu dùng, Hàng xuất khẩu ⭐️.",
                    "3. Báo cáo xây dựng Đảng: Yêu cầu đổi mới tư duy (trước hết tư duy kinh tế), đổi mới tổ chức, đội ngũ cán bộ, phong cách lãnh đạo.",
                    "4. Điều lệ Đảng (sửa đổi, bổ sung): Được Đại hội thông qua chính thức."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ GHI NHỚ NHANH VĂN KIỆN",
                  text: "Văn kiện trọng tâm: Báo cáo chính trị (Trường Chinh) + Báo cáo kinh tế - xã hội với 3 chương trình lớn (Võ Văn Kiệt).\nBa chương trình kinh tế lớn ⭐️: Lương thực - thực phẩm; Hàng tiêu dùng; Hàng xuất khẩu."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-6-grp-5",
      roman: "V",
      title: "Quyết định và chủ trương quan trọng ⭐️",
      subsections: [
        {
          id: "dh-6-sec-5",
          number: "1",
          title: "Ba nội dung cốt lõi của Đổi mới kinh tế",
          parts: [
            {
              id: "dh-6-sec-5-content",
              label: "V",
              title: "Các quyết định đường lối lớn tại Đại hội VI",
              content: [
                {
                  type: "paragraph",
                  text: "1. Khởi xướng đường lối Đổi mới toàn diện:"
                },
                {
                  type: "bullets",
                  items: [
                    "Đổi mới tư duy (trước hết tư duy kinh tế), đổi mới cơ cấu kinh tế, đổi mới cơ chế quản lý kinh tế, đổi mới tổ chức và cán bộ.",
                    "Tác động: Mở ra thời kỳ Đổi mới của đất nước, kéo dài đến ngày nay."
                  ]
                },
                {
                  type: "paragraph",
                  text: "2. Xóa bỏ cơ chế tập trung quan liêu, bao cấp:"
                },
                {
                  type: "bullets",
                  items: [
                    "Chuyển sang hạch toán kinh doanh XHCN, phát huy quyền tự chủ của cơ sở sản xuất.",
                    "Tác động: Tạo động lực giải phóng sức sản xuất."
                  ]
                },
                {
                  type: "paragraph",
                  text: "3. Thực hiện nhất quán chính sách phát triển kinh tế nhiều thành phần:"
                },
                {
                  type: "bullets",
                  items: [
                    "Thừa nhận sự tồn tại lâu dài của nhiều thành phần kinh tế: kinh tế XHCN (quốc doanh, tập thể), kinh tế tư nhân tư bản, kinh tế cá thể - tiểu chủ, kinh tế tư bản nhà nước...",
                    "Tác động: Là bước phát triển vượt bậc so với chủ trương 'thừa nhận bước đầu' ở Đại hội V."
                  ]
                },
                {
                  type: "paragraph",
                  text: "4. Ba chương trình kinh tế lớn ⭐️:"
                },
                {
                  type: "bullets",
                  items: [
                    "Tập trung vào Lương thực - thực phẩm, Hàng tiêu dùng, Hàng xuất khẩu.",
                    "Định hướng ưu tiên đầu tư xuyên suốt trong 5 năm 1986-1990."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐️ CHÌA KHÓA BẢN CHẤT ĐẠI HỘI VI",
                  text: "Đại hội VI = Mốc 'KHỞI XƯỚNG ĐỔI MỚI TOÀN DIỆN' ⭐️.\n3 nội dung cốt lõi cần nhớ: Xóa bỏ bao cấp - Kinh tế nhiều thành phần - Ba chương trình kinh tế lớn."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-6-grp-6",
      roman: "VI",
      title: "Nhân sự",
      subsections: [
        {
          id: "dh-6-sec-6",
          number: "1",
          title: "Bộ máy lãnh đạo Trung ương khóa VI & Ban Cố vấn TƯ",
          parts: [
            {
              id: "dh-6-sec-6-content",
              label: "VI",
              title: "Chuyển giao thế hệ lãnh đạo công cuộc Đổi mới",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Ban Chấp hành Trung ương: Bầu mới 124 Ủy viên chính thức.",
                    "Bộ Chính trị: Gồm 13 Ủy viên chính thức và 1 Ủy viên dự khuyết.",
                    "Tổng Bí thư: Đồng chí NGUYỄN VĂN LINH được bầu làm Tổng Bí thư ⭐️.",
                    "Thành lập Ban Cố vấn Trung ương: Các đồng chí Trường Chinh, Phạm Văn Đồng, Lê Đức Thọ được giao trách nhiệm làm 'Cố vấn Ban Chấp hành Trung ương Đảng' (lần đầu tiên hình thức Cố vấn TƯ được thiết lập).",
                    "Ý nghĩa: Đánh dấu sự chuyển giao thế hệ lãnh đạo từ thế hệ kháng chiến sang thế hệ lãnh đạo công cuộc Đổi mới."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐️ ĐIỂM NHẤN NHÂN SỰ ĐẠI HỘI VI",
                  text: "• Tổng Bí thư: NGUYỄN VĂN LINH ⭐️.\n• BCH TW: 124 chính thức | Bộ Chính trị: 13 chính thức + 1 dự khuyết.\n• Cố vấn BCH TW: TRƯỜNG CHINH — PHẠM VĂN ĐỒNG — LÊ ĐỨC THỌ."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-6-grp-7",
      roman: "VII",
      title: "Cầu nối, khẩu hiệu, nhận định nổi bật",
      subsections: [
        {
          id: "dh-6-sec-7",
          number: "1",
          title: "Phương châm hành động & Bài học kinh nghiệm",
          parts: [
            {
              id: "dh-6-sec-7-content",
              label: "VII",
              title: "Khẩu hiệu và Các bài học kinh nghiệm cốt lõi",
              content: [
                {
                  type: "bullets",
                  items: [
                    "1. Tinh thần 'Nhìn thẳng vào sự thật': 'Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật' ⭐️ — Khẩu hiệu nổi tiếng nhất nêu trong Báo cáo chính trị do Trường Chinh trình bày.",
                    "2. Nhận định nguyên nhân sai lầm: 'Những sai lầm nói trên là những sai lầm nghiêm trọng và kéo dài về chủ trương, chính sách lớn, sai lầm về chỉ đạo chiến lược và tổ chức thực hiện, đặc biệt là bệnh chủ quan, duy ý chí'.",
                    "3. Bài học 'Lấy dân làm gốc' ⭐️: 'Đảng phải quán triệt tư tưởng lấy dân làm gốc, xây dựng và phát huy quyền làm chủ của nhân dân lao động'."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ CÂU NÓI NỔI BẬT DỄ RA THI",
                  text: "Khẩu hiệu Đại hội VI ⭐️: 'Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật'."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Insert or replace dh-6 in basicGeneralData.chapters
const existingIdx = basicGeneralData.chapters.findIndex(c => c.id === "dh-6");
if (existingIdx !== -1) {
  basicGeneralData.chapters[existingIdx] = dh6Chapter;
} else {
  // Insert right after dh-5
  const dh5Idx = basicGeneralData.chapters.findIndex(c => c.id === "dh-5");
  if (dh5Idx !== -1) {
    basicGeneralData.chapters.splice(dh5Idx + 1, 0, dh6Chapter);
  } else {
    basicGeneralData.chapters.push(dh6Chapter);
  }
}

// Save back to basic-general.js
const basicGeneralJsContent = `/* ============================================================
   DỮ LIỆU TÀI LIỆU: KIẾN THỨC CƠ BẢN MÔN ĐẠI CƯƠNG
   Bài đọc chi tiết: 10 Kỳ Đại hội Đại biểu Toàn quốc của Đảng (Đại hội I, II, III, IV, V, VI, X)
   ============================================================ */

export const basicGeneralData = ${JSON.stringify(basicGeneralData, null, 2)};
`;

fs.writeFileSync("./data/basic-general.js", basicGeneralJsContent, "utf8");
console.log("Added dh-6 to data/basic-general.js");

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
console.log("Updated data/index.js with dh-6 metadata.");
