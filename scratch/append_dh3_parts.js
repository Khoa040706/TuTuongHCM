import fs from "fs";
import { basicGeneralData } from "../data/basic-general.js";

const sec8 = {
  id: "dh-3-grp-8",
  roman: "VIII",
  title: "Điểm mới so với Đại hội trước ⭐️",
  subsections: [
    {
      id: "dh-3-sec-8",
      number: "1",
      title: "So sánh điểm mới giữa Đại hội II (1951) và Đại hội III (1960)",
      parts: [
        {
          id: "dh-3-sec-8-content",
          label: "VIII",
          title: "Bảng so sánh 6 tiêu chí cốt lõi ĐH II vs ĐH III",
          content: [
            {
              type: "paragraph",
              text: "Đại hội III (1960) đánh dấu bước phát triển vượt bậc về tư duy lý luận và quy mô tổ chức so với Đại hội II (1951):"
            },
            {
              type: "bullets",
              items: [
                "1. Địa điểm: Đại hội II họp bí mật tại Chiêm Hóa (Tuyên Quang) trong rừng chiến khu; Đại hội III họp CÔNG KHAI tại Thủ đô Hà Nội.",
                "2. Bối cảnh: Đại hội II trong thời kỳ kháng chiến chống Pháp; Đại hội III diễn ra khi đất nước tạm thời bị chia cắt 2 miền sau Hiệp định Giơ-ne-vơ 1954.",
                "3. Đường lối chiến lược: Đại hội II có 1 nhiệm vụ chiến lược (kháng chiến chống Pháp); Đại hội III đề ra 2 NHIỆM VỤ CHIẾN LƯỢC đồng thời (CNXH ở miền Bắc & CM DTDCND ở miền Nam).",
                "4. Tên Đảng: Đại hội II đổi tên thành 'Đảng Lao động Việt Nam'; Đại hội III giữ nguyên tên 'Đảng Lao động Việt Nam'.",
                "5. Chức danh đứng đầu: Đại hội II là Tổng Bí thư (Trường Chinh); Đại hội III lần đầu tiên danh xưng là BÍ THƯ THỨ NHẤT (Lê Duẩn).",
                "6. Kế hoạch kinh tế: Đại hội II chưa có kế hoạch dài hạn; Đại hội III thông qua KẾ HOẠCH 5 NĂM LẦN THỨ NHẤT (1961 - 1965)."
              ]
            },
            {
              type: "trap-badge",
              title: "⚡ GHI NHỚ NHANH SO SÁNH",
              text: "ĐH II: Bí mật ở Tuyên Quang, 1 nhiệm vụ chống Pháp, Tổng Bí thư Trường Chinh.\nĐH III: CÔNG KHAI tại Hà Nội, 2 nhiệm vụ chiến lược song song, Bí thư thứ nhất Lê Duẩn, Kế hoạch 5 năm lần 1."
            }
          ]
        }
      ]
    }
  ]
};

const sec9 = {
  id: "dh-3-grp-9",
  roman: "IX",
  title: "Kết quả thực hiện sau Đại hội",
  subsections: [
    {
      id: "dh-3-sec-9",
      number: "1",
      title: "Thành công, Hạn chế và Nguyên nhân",
      parts: [
        {
          id: "dh-3-sec-9-content",
          label: "IX",
          title: "Đánh giá kết quả thực hiện đường lối Đại hội III",
          content: [
            {
              type: "paragraph",
              text: "✅ Thành công:"
            },
            {
              type: "bullets",
              items: [
                "Miền Bắc thực hiện Kế hoạch 5 năm lần thứ nhất (1961-1965), xây dựng bước đầu cơ sở vật chất - kỹ thuật của CNXH.",
                "Miền Bắc trở thành 'HẬU PHƯƠNG LỚN' vững chắc chi viện sức người, sức của cho miền Nam.",
                "Cách mạng miền Nam phát triển mạnh mẽ, tiến tới đánh bại các chiến lược chiến tranh của Mỹ ('Chiến tranh đặc biệt', 'Chiến tranh cục bộ')."
              ]
            },
            {
              type: "paragraph",
              text: "⚠️ Hạn chế:"
            },
            {
              type: "bullets",
              items: [
                "Việc thực hiện Kế hoạch 5 năm lần thứ nhất bị GIÁN ĐOẠN do đế quốc Mỹ mở rộng chiến tranh phá hoại miền Bắc bằng không quân và hải quân (từ năm 1965).",
                "Một số chỉ tiêu kinh tế CHƯA ĐẠT do miền Bắc phải chuyển hướng sang kinh tế thời chiến (vừa sản xuất vừa chiến đấu)."
              ]
            },
            {
              type: "paragraph",
              text: "🔍 Nguyên nhân:"
            },
            {
              type: "bullets",
              items: [
                "Đế quốc Mỹ leo thang chiến tranh, ném bom phá hoại miền Bắc.",
                "Điều kiện đất nước có chiến tranh nên toàn bộ nguồn lực phải ưu tiên cao nhất cho quốc phòng và chi viện tiền tuyến."
              ]
            },
            {
              type: "trap-badge",
              title: "⚡ GHI NHỚ NHANH KẾT QUẢ",
              text: "Thành công: Xây dựng hậu phương miền Bắc vững mạnh.\nHạn chế: Kế hoạch 5 năm lần 1 bị GIÁN ĐOẠN từ năm 1965 do Mỹ ném bom phá hoại miền Bắc."
            }
          ]
        }
      ]
    }
  ]
};

const sec10 = {
  id: "dh-3-grp-10",
  roman: "X",
  title: "Ý nghĩa lịch sử ⭐️",
  subsections: [
    {
      id: "dh-3-sec-10",
      number: "1",
      title: "Ý nghĩa đối với Đảng, Đất nước và Nhân dân",
      parts: [
        {
          id: "dh-3-sec-10-content",
          label: "X",
          title: "Tầm vóc và giá trị lịch sử của Đại hội III",
          content: [
            {
              type: "bullets",
              items: [
                "Đối với Đảng: Đánh dấu bước phát triển mới trong tư duy lý luận của Đảng - lần đầu tiên đề ra đường lối 'tiến hành đồng thời hai chiến lược cách mạng' ở một nước bị chia cắt tạm thời. Thể hiện sự SÁNG TẠO ĐỘC ĐÁO, chưa có tiền lệ trong phong trào cộng sản quốc tế.",
                "Đối với Đất nước: Là 'NGỌN CỜ' đoàn kết, động viên toàn Đảng, toàn dân, toàn quân hai miền vào cuộc kháng chiến chống Mỹ, cứu nước và xây dựng CNXH.",
                "Đối với Nhân dân: Củng cố niềm tin, ý chí quyết tâm của nhân dân cả nước vào thắng lợi cuối cùng của sự nghiệp giải phóng miền Nam, thống nhất Tổ quốc."
              ]
            },
            {
              type: "trap-badge",
              title: "⭐️ TỎA SÁNG LÝ LUẬN ĐẠI HỘI III",
              text: "Sáng tạo lý luận độc đáo: Đường lối tiến hành ĐỒNG THỜI 2 chiến lược cách mạng ở một quốc gia bị chia cắt — CHƯA TỪNG CÓ TIỀN LỆ trong lịch sử phong trào cộng sản quốc tế."
            }
          ]
        }
      ]
    }
  ]
};

const sec11 = {
  id: "dh-3-grp-11",
  roman: "XI",
  title: "Tóm tắt 10 dòng học thuộc",
  subsections: [
    {
      id: "dh-3-sec-11",
      number: "1",
      title: "Chìa khóa Vàng — 10 Dòng Cốt Lõi Học Thuộc Lòng",
      parts: [
        {
          id: "dh-3-sec-11-content",
          label: "XI",
          title: "🗝️ 10 DÒNG CỐT LÕI BẮT BUỘC HỌC THUỘC LÒNG ĐẠI HỘI III",
          content: [
            {
              type: "bullets",
              items: [
                "1. Đại hội III họp tại Hà Nội (5 - 10/9/1960), có 525 đại biểu chính thức + 51 đại biểu dự khuyết.",
                "2. Diễn ra khi miền Bắc đã khôi phục kinh tế & cải tạo XHCN xong; miền Nam vừa thắng lợi phong trào 'Đồng khởi'.",
                "3. Lê Duẩn đọc 'Báo cáo Chính trị'; Lê Đức Thọ báo cáo 'Sửa Điều lệ Đảng'; Nguyễn Duy Trinh báo cáo 'Kế hoạch 5 năm lần 1'.",
                "4. Xác định đường lối 'hai chiến lược cách mạng đồng thời': CNXH ở miền Bắc và CM dân tộc dân chủ nhân dân ở miền Nam.",
                "5. Miền Bắc giữ vai trò 'QUYẾT ĐỊNH NHẤT', miền Nam giữ vai trò 'QUYẾT ĐỊNH TRỰC TIẾP'.",
                "6. Khẩu hiệu: 'Xây dựng CNXH ở miền Bắc, đấu tranh hòa bình thống nhất nước nhà'.",
                "7. Thông qua Kế hoạch 5 năm lần thứ nhất (1961 - 1965).",
                "8. Sửa đổi Điều lệ Đảng (12 chương, 62 điều).",
                "9. Bầu BCH TW (47 chính thức + 31 dự khuyết), Bộ Chính trị (11 + 2); Hồ Chí Minh - Chủ tịch Đảng; Lê Duẩn - Bí thư thứ nhất.",
                "10. Ý nghĩa: Sáng tạo lý luận độc đáo, là ngọn cờ đoàn kết dân tộc trong kháng chiến chống Mỹ."
              ]
            }
          ]
        }
      ]
    }
  ]
};

const sec12 = {
  id: "dh-3-grp-12",
  roman: "XII",
  title: "Câu hỏi thi thường gặp & Điểm bẫy thi ⚠️",
  subsections: [
    {
      id: "dh-3-sec-12-q",
      number: "1",
      title: "Thắc mắc Trắc nghiệm & Tự luận thường gặp",
      parts: [
        {
          id: "dh-3-sec-12-q-content",
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
                "• Đại hội III diễn ra vào thời gian nào, ở đâu? ➔ (5-10/9/1960 tại Hà Nội - lần đầu công khai tại Thủ đô).",
                "• Ai đọc Báo cáo Chính trị tại Đại hội III? ➔ (Đồng chí Lê Duẩn).",
                "• Vai trò của cách mạng miền Bắc là gì? ➔ (Quyết định nhất đối với sự phát triển cách mạng cả nước).",
                "• Vai trò của cách mạng miền Nam là gì? ➔ (Quyết định trực tiếp đối với sự nghiệp giải phóng miền Nam).",
                "• Ai được bầu làm Bí thư thứ nhất tại Đại hội III? ➔ (Đồng chí Lê Duẩn)."
              ]
            },
            {
              type: "paragraph",
              text: "📝 Câu hỏi Tự luận hay gặp:"
            },
            {
              type: "bullets",
              items: [
                "• Phân tích nội dung và ý nghĩa đường lối 'Tiến hành đồng thời hai chiến lược cách mạng' của Đại hội III.",
                "• Trình bày mối quan hệ giữa cách mạng hai miền Nam - Bắc theo tinh thần Đại hội III.",
                "• So sánh điểm mới của Đại hội III so với Đại hội II."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-3-sec-12-trap",
      number: "2",
      title: "Phân tích các Mốc thời gian & Nhân vật dễ nhầm",
      parts: [
        {
          id: "dh-3-sec-12-trap-content",
          label: "XII.2",
          title: "⚠️ BẢNG TỔNG HỢP CÁC ĐIỂM BẪY THI CỰC KỲ NGUY HIỂM",
          content: [
            {
              type: "trap-badge",
              title: "⏰ CÁC MỐC THỜI GIAN DỄ NHẦM",
              text: "1. Đại hội II: 2/1951 (Chiêm Hóa, Tuyên Quang) - Đổi tên thành Đảng Lao động Việt Nam.\n2. Đại hội III: 5-10/9/1960 (Hà Nội) - Xác định 2 chiến lược cách mạng.\n3. Phong trào Đồng khởi: Cuối 1959 - đầu 1960 (Diễn ra TRƯỚC Đại hội III, không phải sau).\n4. Kế hoạch 5 năm lần 1: 1961 - 1965 (Không nhầm với Kế hoạch 5 năm lần 2: 1976-1980)."
            },
            {
              type: "trap-badge",
              title: "👤 CÁC NHÂN VẬT DỄ NHẦM",
              text: "1. Lê Duẩn: Đọc Báo cáo Chính trị, được bầu làm BÍ THƯ THỨ NHẤT (Không phải Tổng Bí thư).\n2. Lê Đức Thọ: Báo cáo sửa đổi Điều lệ Đảng (Dễ nhầm với Trường Chinh - người gắn với Đại hội II).\n3. Nguyễn Duy Trinh: Báo cáo Kế hoạch 5 năm lần 1 (1961-1965).\n4. Hồ Chí Minh: Vẫn giữ chức Chủ tịch Đảng (Không phải Bí thư thứ nhất)."
            }
          ]
        }
      ]
    }
  ]
};

// Find dh-3 chapter in basicGeneralData
const dh3 = basicGeneralData.chapters.find(c => c.id === "dh-3");
if (dh3) {
  // Replace sections VIII to XII if exist, else append
  const keepSections = dh3.sections.filter(s => {
    const num = parseInt(s.id.split("-grp-")[1]);
    return num >= 1 && num <= 7;
  });
  dh3.sections = [...keepSections, sec8, sec9, sec10, sec11, sec12];
  console.log("Updated dh-3 with sections VIII to XII. Total sections:", dh3.sections.length);
}

// Save back to basic-general.js
const basicGeneralJsContent = `/* ============================================================
   DỮ LIỆU TÀI LIỆU: KIẾN THỨC CƠ BẢN MÔN ĐẠI CƯƠNG
   Bài đọc chi tiết: 10 Kỳ Đại hội Đại biểu Toàn quốc của Đảng (Đại hội I, II, III, X)
   ============================================================ */

export const basicGeneralData = ${JSON.stringify(basicGeneralData, null, 2)};
`;

fs.writeFileSync("./data/basic-general.js", basicGeneralJsContent, "utf8");
console.log("Updated data/basic-general.js with complete dh-3 sections VIII-XII.");

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
console.log("Updated data/index.js with complete dh-3 metadata.");
