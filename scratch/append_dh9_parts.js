import fs from "fs";
import { basicGeneralData } from "../data/basic-general.js";

const sec8 = {
  id: "dh-9-grp-8",
  roman: "VIII",
  title: "Điểm mới so với Đại hội trước ⭐️",
  subsections: [
    {
      id: "dh-9-sec-8",
      number: "1",
      title: "So sánh điểm mới giữa Đại hội VIII (1996) và Đại hội IX (2001)",
      parts: [
        {
          id: "dh-9-sec-8-content",
          label: "VIII",
          title: "Bảng so sánh 5 tiêu chí cốt lõi ĐH VIII vs ĐH IX",
          content: [
            {
              type: "paragraph",
              text: "Đại hội IX (4/2001) đánh dấu bước đột phá lý luận gọi tên chính thức Kinh tế thị trường định hướng XHCN so với Đại hội VIII (6-7/1996):"
            },
            {
              type: "bullets",
              items: [
                "1. Mô hình kinh tế: Đại hội VIII mô tả dài dòng 'Kinh tế hàng hóa nhiều thành phần...'; Đại hội IX CHÍNH THỨC GỌI TÊN: 'KINH TẾ THỊ TRƯỜNG ĐỊNH HƯỚNG XHCN', xác định là MÔ HÌNH KINH TẾ TỔNG QUÁT ⭐️.",
                "2. Tổng Bí thư: Đại hội VIII là Lê Khả Phiêu (từ 12/1997); Đại hội IX bầu NÔNG ĐỨC MẠNH làm Tổng Bí thư ⭐️.",
                "3. Trọng tâm CNH-HĐH: Đại hội VIII đẩy mạnh CNH-HĐH; Đại hội IX CNH-HĐH GẮN VỚI PHÁT TRIỂN KINH TẾ TRÍ THỨC ⭐️.",
                "4. Tầm nhìn chiến lược: Đại hội VIII thực hiện Chiến lược 1991-2000; Đại hội IX thông qua CHIẾN LƯỢC PHÁT TRIỂN KT-XH 2001-2010, tầm nhìn đến 2020.",
                "5. Tư tưởng Hồ Chí Minh: Đại hội VIII đã khẳng định là nền tảng tư tưởng; Đại hội IX XÁC ĐỊNH RÕ NỘI DUNG CƠ BẢN của tư tưởng Hồ Chí Minh."
              ]
            },
            {
              type: "trap-badge",
              title: "⚡ GHI NHỚ NHANH SO SÁNH",
              text: "⭐️ Điểm mới lớn nhất ĐH IX: Gọi tên chính thức 'KINH TẾ THỊ TRƯỜNG ĐỊNH HƯỚNG XHCN' làm mô hình kinh tế tổng quát + Đổi Tổng Bí thư sang đồng chí Nông Đức Mạnh."
            }
          ]
        }
      ]
    }
  ]
};

const sec9 = {
  id: "dh-9-grp-9",
  roman: "IX",
  title: "Kết quả thực hiện sau Đại hội",
  subsections: [
    {
      id: "dh-9-sec-9",
      number: "1",
      title: "Thành công, Hạn chế và Nguyên nhân",
      parts: [
        {
          id: "dh-9-sec-9-content",
          label: "IX",
          title: "Đánh giá kết quả triển khai sau Đại hội IX",
          content: [
            {
              type: "paragraph",
              text: "✅ Thành công:"
            },
            {
              type: "bullets",
              items: [
                "Triển khai nhanh Nghị quyết Đại hội qua các Hội nghị Trung ương (HNTW 2 khóa IX 6/2001, HNTW 3 khóa IX 8/2001).",
                "Thông qua Nghị quyết về đẩy mạnh CNH, HĐH nông nghiệp, nông thôn thời kỳ 2001-2010.",
                "Kinh tế tiếp tục tăng trưởng, đường lối kinh tế thị trường định hướng XHCN dần đi vào thực tiễn."
              ]
            },
            {
              type: "paragraph",
              text: "⚠️ Hạn chế:"
            },
            {
              type: "bullets",
              items: [
                "Kinh tế trí thức, khoa học công nghệ trong nước phát triển còn chậm so với yêu cầu.",
                "Nguy cơ tụt hậu về kinh tế so với khu vực và thế giới vẫn còn hiện hữu."
              ]
            },
            {
              type: "paragraph",
              text: "🔍 Nguyên nhân:"
            },
            {
              type: "bullets",
              items: [
                "Xuất phát điểm kinh tế đất nước còn thấp.",
                "Tác động của khủng hoảng, biến động kinh tế khu vực và thế giới đầu những năm 2000."
              ]
            },
            {
              type: "trap-badge",
              title: "⭐️ Ý NGHĨA KẾT QUẢ ĐẠI HỘI IX",
              text: "Đường lối Kinh tế thị trường định hướng XHCN từng bước đi vào cuộc sống, làm nền tảng cho các Đại hội sau."
            }
          ]
        }
      ]
    }
  ]
};

const sec10 = {
  id: "dh-9-grp-10",
  roman: "X",
  title: "Ý nghĩa lịch sử ⭐️",
  subsections: [
    {
      id: "dh-9-sec-10",
      number: "1",
      title: "Ý nghĩa đối với Đảng, Đất nước và Nhân dân",
      parts: [
        {
          id: "dh-9-sec-10-content",
          label: "X",
          title: "Tầm vóc đột phá của Đại hội IX",
          content: [
            {
              type: "bullets",
              items: [
                "Đối với Đảng: Đánh dấu bước phát triển mới về tư duy lý luận, đặc biệt là lý luận về kinh tế thị trường định hướng XHCN và tư tưởng Hồ Chí Minh.",
                "Đối với Đất nước: MỞ ĐƯỜNG CHO ĐẤT NƯỚC BƯỚC VÀO THẾ KỶ XXI, thiên niên kỷ mới, định hướng chiến lược phát triển 20 năm đầu thế kỷ.",
                "Đối với Nhân dân: Hướng tới mục tiêu 'DÂN GIÀU, NƯỚC MẠNH, XÃ HỘI CÔNG BẰNG, DÂN CHỦ, VĂN MINH'."
              ]
            },
            {
              type: "trap-badge",
              title: "⭐️ Ý NGHĨA BƯỚC NGOẶT ĐẠI HỘI IX",
              text: "Đại hội IX = Đại hội 'MỞ ĐƯỜNG VÀO THẾ KỶ XXI' + 'KHAI SINH' tên gọi Kinh tế thị trường định hướng XHCN ⭐️."
            }
          ]
        }
      ]
    }
  ]
};

const sec11 = {
  id: "dh-9-grp-11",
  roman: "XI",
  title: "Tóm tắt 10 dòng học thuộc",
  subsections: [
    {
      id: "dh-9-sec-11",
      number: "1",
      title: "Chìa khóa Vàng — 10 Dòng Cốt Lõi Học Thuộc Lòng",
      parts: [
        {
          id: "dh-9-sec-11-content",
          label: "XI",
          title: "🗝️ 10 DÒNG CỐT LÕI BẮT BUỘC HỌC THUỘC LÒNG ĐẠI HỘI IX",
          content: [
            {
              type: "bullets",
              items: [
                "1. Đại hội IX họp tại Hà Nội (19-22/4/2001), có 1.168 đại biểu, đại diện gần 2,48 triệu đảng viên.",
                "2. Bối cảnh: 15 năm đổi mới; thế giới có Cách mạng KH-CN, kinh tế trí thức, toàn cầu hóa.",
                "3. Chủ đề: 'Phát huy sức mạnh toàn dân tộc, tiếp tục đổi mới, đẩy mạnh CNH-HĐH, xây dựng và bảo vệ Tổ quốc VN XHCN'.",
                "4. Thông qua: Báo cáo chính trị, Chiến lược KT-XH 2001-2010, Kế hoạch 5 năm 2001-2005, Điều lệ Đảng (sửa đổi).",
                "5. Điểm nổi bật nhất: Lần đầu chính thức nêu tên 'Kinh tế thị trường định hướng XHCN' là mô hình kinh tế tổng quát.",
                "6. Xác định rõ nội dung cơ bản của tư tưởng Hồ Chí Minh.",
                "7. Đẩy mạnh CNH-HĐH gắn với phát triển kinh tế trí thức.",
                "8. Mục tiêu đến năm 2020: Nước ta cơ bản trở thành nước công nghiệp theo hướng hiện đại.",
                "9. Bầu NÔNG ĐỨC MẠNH làm Tổng Bí thư; BCH TW 150 ủy viên, Bộ Chính trị 15 ủy viên.",
                "10. Ý nghĩa: Mở đường đất nước bước vào thế kỷ XXI, hướng tới dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh."
              ]
            }
          ]
        }
      ]
    }
  ]
};

const sec12 = {
  id: "dh-9-grp-12",
  roman: "XII",
  title: "Câu hỏi thi thường gặp & Điểm bẫy thi ⚠️",
  subsections: [
    {
      id: "dh-9-sec-12-q",
      number: "1",
      title: "Thắc mắc Trắc nghiệm & Tự luận thường gặp",
      parts: [
        {
          id: "dh-9-sec-12-q-content",
          label: "XII.1",
          title: "Câu hỏi ôn tập Trắc nghiệm & Tự luận",
          content: [
            {
              type: "paragraph",
              text: "❓ Câu hỏi Trắc nghiệm trọng tâm:"
            },
            {
              type: "bullets",
              items: [
                "• Đại hội IX họp vào thời gian nào, ở đâu? ➔ (19-22/4/2001, Hà Nội).",
                "• Đại hội IX bầu ai làm Tổng Bí thư? ➔ (Nông Đức Mạnh).",
                "• Thuật ngữ 'kinh tế thị trường định hướng XHCN' được chính thức nêu ra tại Đại hội nào? ➔ (Đại hội IX ⭐️).",
                "• Đại hội IX xác định mô hình kinh tế tổng quát của thời kỳ quá độ là gì? ➔ (Kinh tế thị trường định hướng XHCN)."
              ]
            },
            {
              type: "paragraph",
              text: "📝 Câu hỏi Tự luận hay gặp:"
            },
            {
              type: "bullets",
              items: [
                "• Phân tích ý nghĩa việc Đại hội IX xác định kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng quát.",
                "• Trình bày bối cảnh trong nước và quốc tế dẫn đến các quyết sách của Đại hội IX.",
                "• So sánh nhận thức về kinh tế thị trường giữa Đại hội VIII và Đại hội IX."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-9-sec-12-trap",
      number: "2",
      title: "Phân tích các Mốc thời gian & Nhân vật dễ nhầm",
      parts: [
        {
          id: "dh-9-sec-12-trap-content",
          label: "XII.2",
          title: "⚠️ BẢNG TỔNG HỢP CÁC ĐIỂM BẪY THI CỰC KỲ NGUY HIỂM",
          content: [
            {
              type: "trap-badge",
              title: "⏰ CÁC MỐC THỜI GIAN DỄ NHẦM",
              text: "1. Thứ tự: ĐH VIII (1996) ➔ ĐH IX (2001) ➔ ĐH X (2006) (Dễ nhầm Đại hội IX với X).\n2. Chiến lược KT-XH 2001-2010 (Do ĐH IX đề ra) ⭐️ phân biệt với Chiến lược KT-XH 1991-2000 (Do ĐH VII đề ra)."
            },
            {
              type: "trap-badge",
              title: "👤 CÁC NHÂN VẬT DỄ NHẦM",
              text: "1. Nông Đức Mạnh: Tổng Bí thư từ ĐH IX (2001) ⭐️.\n2. Dễ nhầm với Lê Khả Phiêu (Tổng Bí thư từ 12/1997 đến ĐH IX 2001) và Đỗ Mười (Tổng Bí thư ĐH VII & VIII 1991-1997)."
            }
          ]
        }
      ]
    }
  ]
};

// Find dh-9 chapter in basicGeneralData
const dh9 = basicGeneralData.chapters.find(c => c.id === "dh-9");
if (dh9) {
  // Replace sections VIII to XII if exist, else append
  const keepSections = dh9.sections.filter(s => {
    const num = parseInt(s.id.split("-grp-")[1]);
    return num >= 1 && num <= 7;
  });
  dh9.sections = [...keepSections, sec8, sec9, sec10, sec11, sec12];
  console.log("Updated dh-9 with sections VIII to XII. Total sections:", dh9.sections.length);
}

// Save back to basic-general.js
const basicGeneralJsContent = `/* ============================================================
   DỮ LIỆU TÀI LIỆU: KIẾN THỨC CƠ BẢN MÔN ĐẠI CƯƠNG
   Bài đọc chi tiết: 10 Kỳ Đại hội Đại biểu Toàn quốc của Đảng (Đại hội I, II, III, IV, V, VI, VII, VIII, IX, X)
   ============================================================ */

export const basicGeneralData = ${JSON.stringify(basicGeneralData, null, 2)};
`;

fs.writeFileSync("./data/basic-general.js", basicGeneralJsContent, "utf8");
console.log("Updated data/basic-general.js with complete dh-9 sections VIII-XII.");

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
console.log("Updated data/index.js with complete dh-9 metadata.");
