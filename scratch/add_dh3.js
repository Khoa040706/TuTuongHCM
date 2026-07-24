import fs from "fs";
import { basicGeneralData } from "../data/basic-general.js";

const dh3Chapter = {
  id: "dh-3",
  title: "Đại hội III (9/1960)",
  subtitle: "Xây dựng CNXH ở miền Bắc & Đấu tranh giải phóng miền Nam",
  sections: [
    {
      id: "dh-3-grp-1",
      roman: "I",
      title: "Thông tin chung",
      subsections: [
        {
          id: "dh-3-sec-1",
          number: "1",
          title: "Thời gian, Địa điểm & Quy mô đại biểu",
          parts: [
            {
              id: "dh-3-flashcards",
              label: "⚡",
              title: "TÓM TẮT SIÊU TỐC — BẢNG GHI NHỚ NHANH ĐẠI HỘI III",
              content: [
                {
                  type: "flashcards-banner",
                  items: [
                    {
                      icon: "⏰",
                      label: "Thời gian & Địa điểm",
                      value: "5/9/1960 – 10/9/1960 tại Thủ đô Hà Nội (Lần đầu tiên họp công khai ở Thủ đô)."
                    },
                    {
                      icon: "👥",
                      label: "Số lượng Đại biểu",
                      value: "525 đại biểu chính thức + 51 đại biểu dự khuyết, đại diện hơn 50 vạn đảng viên cả nước."
                    },
                    {
                      icon: "👤",
                      label: "Lãnh đạo chủ chốt",
                      value: "Chủ tịch Hồ Chí Minh chủ trì; Đồng chí Lê Duẩn đọc Báo cáo Chính trị."
                    },
                    {
                      icon: "🎯",
                      label: "Nhiệm vụ trung tâm",
                      value: "Xác định đường lối 2 chiến lược cách mạng song song (Bắc: Quyết định nhất - Nam: Quyết định trực tiếp)."
                    }
                  ]
                }
              ]
            },
            {
              id: "dh-3-sec-1-content",
              label: "I",
              title: "Thông tin chung về Đại hội III",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ III của Đảng diễn ra từ ngày 5/9/1960 đến ngày 10/9/1960 tại Thủ đô Hà Nội."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 5 – 10/9/1960 | 📍 Địa điểm: Hà Nội | 👥 Quy mô: 525 chính thức + 51 dự khuyết (Đại diện >50 vạn đảng viên)"
                },
                {
                  type: "bullets",
                  items: [
                    "Thành phần tham dự: Gần 20 đoàn đại biểu quốc tế; đại biểu Đảng Xã hội, Đảng Dân chủ, các đoàn thể trong Mặt trận Tổ quốc Việt Nam.",
                    "Lãnh đạo chủ chốt: Chủ tịch Hồ Chí Minh chủ trì Đại hội; đồng chí Lê Duẩn đọc Báo cáo Chính trị."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⭐️ ĐIỂM NHẤN LỊCH SỬ ĐẠI HỘI III",
                  text: "Đây là Đại hội ĐẦU TIÊN được tổ chức CÔNG KHAI tại Thủ đô Hà Nội (30 năm trước đó Đảng hoạt động bí mật hoặc trong chiến tranh)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-3-grp-2",
      roman: "II",
      title: "Bối cảnh lịch sử",
      subsections: [
        {
          id: "dh-3-sec-2",
          number: "1",
          title: "Bối cảnh trong nước và quốc tế",
          parts: [
            {
              id: "dh-3-sec-2-content",
              label: "II",
              title: "Bối cảnh lịch sử trước Đại hội III",
              content: [
                {
                  type: "paragraph",
                  text: "🔹 Trong nước:"
                },
                {
                  type: "bullets",
                  items: [
                    "Miền Bắc: Đã hoàn thành khôi phục kinh tế, cải cách ruộng đất, bước đầu cải tạo XHCN đối với nông nghiệp, công thương nghiệp và đạt nhiều thành tựu lớn.",
                    "Miền Nam: Phong trào chống Mỹ - Diệm phát triển mạnh mẽ, đỉnh cao là phong trào 'Đồng khởi' (cuối 1959 - đầu 1960) làm lung lay chính quyền Sài Gòn, đưa cách mạng miền Nam từ thế giữ gìn lực lượng sang thế tiến công."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 Quốc tế:"
                },
                {
                  type: "bullets",
                  items: [
                    "Hệ thống các nước Xã hội chủ nghĩa lớn mạnh, trở thành chỗ dựa vững chắc cho phong trào cách mạng thế giới.",
                    "Phong trào giải phóng dân tộc phát triển mạnh mẽ ở châu Á, châu Phi và Mỹ Latinh.",
                    "Phong trào cộng sản và công nhân quốc tế xuất hiện một số bất đồng nội bộ (mâu thuẫn Xô - Trung)."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚡ GHI NHỚ NHANH BỐI CẢNH",
                  text: "Bắc: Khôi phục kinh tế + cải tạo XHCN xong.\nNam: Đồng khởi (1959-1960) thắng lợi ➔ Đưa cách mạng Nam từ thế giữ gìn lực lượng sang THẾ TIẾN CÔNG.\nQuốc tế: Phe XHCN mạnh nhưng có bất đồng nội bộ."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-3-grp-3",
      roman: "III",
      title: "Mục tiêu Đại hội",
      subsections: [
        {
          id: "dh-3-sec-3",
          number: "1",
          title: "Các mục tiêu và nhiệm vụ chiến lược",
          parts: [
            {
              id: "dh-3-sec-3-content",
              label: "III",
              title: "Mục tiêu cốt lõi của Đại hội III",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Tổng kết 9 năm thực hiện đường lối của Đại hội II (1951).",
                    "Xác định nhiệm vụ chiến lược của cách mạng cả nước và nhiệm vụ riêng của từng miền.",
                    "Vạch rõ vị trí, vai trò và mối quan hệ giữa cách mạng hai miền Nam - Bắc.",
                    "Đề ra đường lối xây dựng XHCN ở miền Bắc.",
                    "Đề ra đường lối đấu tranh giải phóng miền Nam, thống nhất nước nhà.",
                    "Thông qua Kế hoạch 5 năm lần thứ nhất (1961 - 1965).",
                    "Sửa đổi Điều lệ Đảng và bầu Ban Chấp hành Trung ương mới."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-3-grp-4",
      roman: "IV",
      title: "Văn kiện được thông qua",
      subsections: [
        {
          id: "dh-3-sec-4",
          number: "1",
          title: "Ba văn kiện trung tâm của Đại hội",
          parts: [
            {
              id: "dh-3-sec-4-content",
              label: "IV",
              title: "Các báo cáo văn kiện chính",
              content: [
                {
                  type: "bullets",
                  items: [
                    "1. Báo cáo Chính trị: Trình bày bởi Đồng chí Lê Duẩn (Ủy viên Bộ Chính trị). Đánh giá tình hình cách mạng 2 miền; xác định đường lối chung của cách mạng Việt Nam. Là văn kiện trung tâm đặt nền tảng lý luận cho toàn bộ đường lối cách mạng 2 chiến lược.",
                    "2. Báo cáo về sửa đổi Điều lệ Đảng: Trình bày bởi Đồng chí Lê Đức Thọ. Sửa đổi Điều lệ Đảng gồm 12 chương, 62 điều (phần Cương lĩnh chung + các chương cụ thể). Củng cố tổ chức và nguyên tắc sinh hoạt Đảng.",
                    "3. Báo cáo bổ sung về Nhiệm vụ và phương hướng Kế hoạch 5 năm lần thứ nhất (1961-1965): Trình bày bởi Đồng chí Nguyễn Duy Trinh. Phương hướng xây dựng CNXH ở miền Bắc, trọng tâm là công nghiệp hóa XHCN."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚠️ CẢNH BÁO BẪY THI — NGƯỜI TRÌNH BÀY VĂN KIỆN",
                  text: "1. Báo cáo Chính trị: LÊ DUẨN (không phải Hồ Chí Minh).\n2. Sửa Điều lệ Đảng (12 chương, 62 điều): LÊ ĐỨC THỌ.\n3. Kế hoạch 5 năm lần thứ nhất (1961-1965): NGUYỄN DUY TRINH."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-3-grp-5",
      roman: "V",
      title: "Quyết định và chủ trương quan trọng ⭐️",
      subsections: [
        {
          id: "dh-3-sec-5",
          number: "1",
          title: "Đường lối hai chiến lược cách mạng song song",
          parts: [
            {
              id: "dh-3-sec-5-content",
              label: "V",
              title: "Các quyết định chiến lược lịch sử",
              content: [
                {
                  type: "paragraph",
                  text: "1. Đường lối 'hai chiến lược cách mạng':"
                },
                {
                  type: "bullets",
                  items: [
                    "Miền Bắc: Tiến hành cách mạng xã hội chủ nghĩa.",
                    "Miền Nam: Tiến hành cách mạng dân tộc dân chủ nhân dân.",
                    "Lý do: Đất nước tạm thời bị chia cắt 2 miền với 2 chế độ chính trị khác nhau sau Hiệp định Giơ-ne-vơ 1954.",
                    "Tác động: Là sáng tạo lý luận độc đáo của Đảng, phù hợp thực tiễn Việt Nam, chưa nước nào có tiền lệ."
                  ]
                },
                {
                  type: "paragraph",
                  text: "2. Vai trò và mối quan hệ giữa cách mạng hai miền:"
                },
                {
                  type: "bullets",
                  items: [
                    "Cách mạng XHCN ở miền Bắc: Giữ vai trò QUYẾT ĐỊNH NHẤT đối với sự phát triển của cách mạng cả nước.",
                    "Cách mạng dân tộc dân chủ nhân dân ở miền Nam: Giữ vai trò QUYẾT ĐỊNH TRỰC TIẾP đối với sự nghiệp giải phóng miền Nam.",
                    "Mối quan hệ: Miền Bắc là 'HẬU PHƯƠNG LỚN', miền Nam là 'TIỀN TUYẾN LỚN'."
                  ]
                },
                {
                  type: "paragraph",
                  text: "3. Kế hoạch 5 năm lần thứ nhất (1961-1965):"
                },
                {
                  type: "bullets",
                  items: [
                    "Đẩy mạnh công nghiệp hóa XHCN, ưu tiên phát triển công nghiệp nặng một cách hợp lý, đồng thời phát triển nông nghiệp và công nghiệp nhẹ.",
                    "Tác động: Xây dựng cơ sở vật chất - kỹ thuật, đưa miền Bắc trở thành hậu phương vững mạnh chi viện cho miền Nam."
                  ]
                },
                {
                  type: "paragraph",
                  text: "4. Khẩu hiệu chiến lược của Đại hội:"
                },
                {
                  type: "bullets",
                  items: [
                    "Nội dung: 'Đại hội xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh hòa bình thống nhất nước nhà' ⭐️",
                    "Do Ban Chấp hành Trung ương đề xuất, thông qua và thực hiện ngay từ sau Đại hội, xuyên suốt giai đoạn 1960-1975."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-3-grp-6",
      roman: "VI",
      title: "Nhân sự",
      subsections: [
        {
          id: "dh-3-sec-6",
          number: "1",
          title: "Bộ máy lãnh đạo Trung ương khóa III",
          parts: [
            {
              id: "dh-3-sec-6-content",
              label: "VI",
              title: "Bầu Ban Chấp hành Trung ương & Bộ Chính trị",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Ban Chấp hành Trung ương: Bầu mới gồm 47 ủy viên chính thức và 31 ủy viên dự khuyết.",
                    "Bộ Chính trị: Gồm 11 ủy viên chính thức và 2 ủy viên dự khuyết.",
                    "Chủ tịch Đảng: Đồng chí Hồ Chí Minh tiếp tục được bầu làm Chủ tịch Đảng.",
                    "Bí thư thứ nhất: Đồng chí Lê Duẩn được bầu làm Bí thư thứ nhất Ban Chấp hành Trung ương Đảng ⭐️."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "⚠️ ĐIỂM MỚI DANH XƯNG NHÂN SỰ ĐẠI HỘI III",
                  text: "Lần đầu tiên danh xưng người đứng đầu Đảng gọi là 'BÍ THƯ THỨ NHẤT' (thay vì Tổng Bí thư) - do đồng chí LÊ DUẨN đảm nhiệm."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-3-grp-7",
      roman: "VII",
      title: "Cầu nối, khẩu hiệu, nhận định nổi bật",
      subsections: [
        {
          id: "dh-3-sec-7",
          number: "1",
          title: "Khẩu hiệu trung tâm & Lời khai mạc của Bác Hồ",
          parts: [
            {
              id: "dh-3-sec-7-content",
              label: "VII",
              title: "Khẩu hiệu và Phát biểu lịch sử",
              content: [
                {
                  type: "bullets",
                  items: [
                    "1. Khẩu hiệu Đại hội: 'Đại hội xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh hòa bình thống nhất nước nhà' — Thể hiện cô đọng nhất đường lối 2 nhiệm vụ chiến lược.",
                    "2. Lời khai mạc của Chủ tịch Hồ Chí Minh (5/9/1960): Đại hội khai mạc đúng dịp kỷ niệm 15 năm Quốc khánh, có hơn 500 đại biểu thay mặt 50 vạn đảng viên, tiêu biểu cho 30 năm truyền thống đấu tranh cách mạng vẻ vang của Đảng."
                  ]
                },
                {
                  type: "trap-badge",
                  title: "🗝️ CHÌA KHÓA VÀNG HỌC THUỘC LÒNG ĐẠI HỘI III",
                  text: "1. 5-10/9/1960 tại Hà Nội (Đầu tiên họp CÔNG KHAI tại Thủ đô).\n2. Hai chiến lược cách mạng song song: Bắc (XHCN - Quyết định nhất) & Nam (DTDCND - Quyết định trực tiếp).\n3. Bắc là Hậu phương lớn - Nam là Tiền tuyến lớn.\n4. Hồ Chí Minh - Chủ tịch Đảng; Lê Duẩn - Bí thư thứ nhất.\n5. Khẩu hiệu: 'Xây dựng CNXH ở miền Bắc và đấu tranh hòa bình thống nhất nước nhà'."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Check if dh-3 exists in chapters, if so replace, else append
const existingIdx = basicGeneralData.chapters.findIndex(c => c.id === "dh-3");
if (existingIdx !== -1) {
  basicGeneralData.chapters[existingIdx] = dh3Chapter;
} else {
  // Insert dh-3 right after dh-2
  const dh2Idx = basicGeneralData.chapters.findIndex(c => c.id === "dh-2");
  if (dh2Idx !== -1) {
    basicGeneralData.chapters.splice(dh2Idx + 1, 0, dh3Chapter);
  } else {
    basicGeneralData.chapters.push(dh3Chapter);
  }
}

// Save back to basic-general.js
const basicGeneralJsContent = `/* ============================================================
   DỮ LIỆU TÀI LIỆU: KIẾN THỨC CƠ BẢN MÔN ĐẠI CƯƠNG
   Bài đọc chi tiết: 10 Kỳ Đại hội Đại biểu Toàn quốc của Đảng (Đại hội I, II, III, X)
   ============================================================ */

export const basicGeneralData = ${JSON.stringify(basicGeneralData, null, 2)};
`;

fs.writeFileSync("./data/basic-general.js", basicGeneralJsContent, "utf8");
console.log("Added dh-3 to data/basic-general.js");

// Now update data/index.js
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
console.log("Updated data/index.js with dh-3 metadata.");
