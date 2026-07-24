import fs from "fs";
import { basicGeneralData } from "../data/basic-general.js";

const sec8 = {
  id: "dh-8-grp-8",
  roman: "VIII",
  title: "Điểm mới so với Đại hội trước ⭐️",
  subsections: [
    {
      id: "dh-8-sec-8",
      number: "1",
      title: "So sánh điểm mới giữa Đại hội VII (1991) và Đại hội VIII (1996)",
      parts: [
        {
          id: "dh-8-sec-8-content",
          label: "VIII",
          title: "Bảng so sánh 6 tiêu chí cốt lõi ĐH VII vs ĐH VIII",
          content: [
            {
              type: "paragraph",
              text: "Đại hội VIII (6-7/1996) đánh dấu việc đất nước chuyển từ thời kỳ khắc phục khủng hoảng sang đẩy mạnh công nghiệp hóa, hiện đại hóa so với Đại hội VII (6/1991):"
            },
            {
              type: "bullets",
              items: [
                "1. Bối cảnh KT-XH: Đại hội VII đất nước còn trong khủng hoảng; Đại hội VIII ĐẤT NƯỚC ĐÃ RA KHỎI KHỦNG HOẢNG KINH TẾ - XÃ HỘI ⭐️.",
                "2. Nhiệm vụ trọng tâm: Đại hội VII thông qua Cương lĩnh 1991, ổn định KT-XH; Đại hội VIII chuyển sang ĐẨY MẠNH CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA (CNH, HĐH) ĐẤT NƯỚC ⭐️.",
                "3. Văn kiện nền tảng: Đại hội VII lần đầu có Cương lĩnh 1991; Đại hội VIII không ra Cương lĩnh mới, tập trung Báo cáo Chính trị + Kế hoạch 5 năm (1996-2000).",
                "4. Mục tiêu dài hạn: Đại hội VII là Chiến lược KT-XH đến năm 2000; Đại hội VIII đề ra mục tiêu ĐẾN NĂM 2020 CƠ BẢN TRỞ THÀNH NƯỚC CÔNG NGHIỆP.",
                "5. Tổng Bí thư: Đại hội VII bầu Đỗ Mười; Đại hội VIII ĐỖ MƯỜI TÁI ĐẮC CỬ ⭐️ (đến 12/1997 tại HNTW 4 đồng chí Lê Khả Phiêu kế nhiệm).",
                "6. Cột mốc đối ngoại: Đại hội VII đang từng bước phá thế bao vây cấm vận; Đại hội VIII ĐÃ GIA NHẬP ASEAN & BÌNH THƯỜNG HÓA QUAN HỆ VỚI HOA KỲ (7/1995) ⭐️."
              ]
            },
            {
              type: "trap-badge",
              title: "⚡ GHI NHỚ NHANH SO SÁNH",
              text: "⭐️ ĐH VII = 'Thoát khủng hoảng, định hình lý luận' | ĐH VIII = 'Đẩy mạnh CNH, HĐH', bước sang giai đoạn phát triển mới."
            }
          ]
        }
      ]
    }
  ]
};

const sec9 = {
  id: "dh-8-grp-9",
  roman: "IX",
  title: "Kết quả thực hiện sau Đại hội",
  subsections: [
    {
      id: "dh-8-sec-9",
      number: "1",
      title: "Thành công, Hạn chế và Nguyên nhân",
      parts: [
        {
          id: "dh-8-sec-9-content",
          label: "IX",
          title: "Đánh giá kết quả triển khai sau Đại hội VIII",
          content: [
            {
              type: "paragraph",
              text: "✅ Thành công:"
            },
            {
              type: "bullets",
              items: [
                "Kinh tế tiếp tục tăng trưởng, cơ cấu kinh tế chuyển dịch theo hướng CNH, HĐH.",
                "Quan hệ đối ngoại tiếp tục mở rộng, hội nhập kinh tế quốc tế được đẩy mạnh.",
                "Đời sống nhân dân từng bước được cải thiện; vị thế đất nước trên trường quốc tế được nâng cao."
              ]
            },
            {
              type: "paragraph",
              text: "⚠️ Hạn chế:"
            },
            {
              type: "bullets",
              items: [
                "Cuộc KHỦNG HOẢNG TÀI CHÍNH - TIỀN TỆ KHU VỰC CHÂU Á (1997) tác động tiêu cực đến kinh tế trong nước ⭐️.",
                "Nước ta vẫn là nước nghèo, kém phát triển; còn nhiều khuyết điểm hạn chế.",
                "Tốc độ CNH, HĐH chưa đạt như kỳ vọng."
              ]
            },
            {
              type: "paragraph",
              text: "🔍 Nguyên nhân:"
            },
            {
              type: "bullets",
              items: [
                "Ảnh hưởng trực tiếp từ cuộc khủng hoảng tài chính khu vực (1997).",
                "Xuất phát điểm kinh tế còn thấp; cơ chế quản lý còn nhiều bất cập cần tiếp tục đổi mới."
              ]
            },
            {
              type: "trap-badge",
              title: "⭐️ TÁC ĐỘNG NGOẠI CẢNH SAU ĐẠI HỘI VIII",
              text: "Sau ĐH VIII: Kinh tế tiếp tục phát triển nhưng chịu tác động tiêu cực từ Cuộc khủng hoảng tài chính châu Á 1997 ⭐️."
            }
          ]
        }
      ]
    }
  ]
};

const sec10 = {
  id: "dh-8-grp-10",
  roman: "X",
  title: "Ý nghĩa lịch sử ⭐️",
  subsections: [
    {
      id: "dh-8-sec-10",
      number: "1",
      title: "Ý nghĩa đối với Đảng, Đất nước và Nhân dân",
      parts: [
        {
          id: "dh-8-sec-10-content",
          label: "X",
          title: "Tầm vóc bước ngoặt của Đại hội VIII",
          content: [
            {
              type: "bullets",
              items: [
                "Đối với Đảng: Khẳng định bản lĩnh, năng lực lãnh đạo của Đảng sau 10 năm đổi mới; đề ra được chủ trương chiến lược đúng đắn cho giai đoạn mới.",
                "Đối với Đất nước: Đánh dấu việc nước ta chính thức chuyển sang thời kỳ ĐẨY MẠNH CNH, HĐH, chuẩn bị hành trang bước vào thế kỷ XXI.",
                "Đối với Nhân dân: Củng cố niềm tin của nhân dân vào con đường đổi mới, mở ra triển vọng phát triển, nâng cao đời sống."
              ]
            },
            {
              type: "trap-badge",
              title: "⭐️ Ý NGHĨA BƯỚC NGOẶT LỊCH SỬ",
              text: "Đại hội VIII = 'Cột mốc đánh dấu bước ngoặt: Chuyển từ thời kỳ khắc phục khủng hoảng sang thời kỳ đẩy mạnh CNH, HĐH' ⭐️."
            }
          ]
        }
      ]
    }
  ]
};

const sec11 = {
  id: "dh-8-grp-11",
  roman: "XI",
  title: "Tóm tắt 10 dòng học thuộc",
  subsections: [
    {
      id: "dh-8-sec-11",
      number: "1",
      title: "Chìa khóa Vàng — 10 Dòng Cốt Lõi Học Thuộc Lòng",
      parts: [
        {
          id: "dh-8-sec-11-content",
          label: "XI",
          title: "🗝️ 10 DÒNG CỐT LÕI BẮT BUỘC HỌC THUỘC LÒNG ĐẠI HỘI VIII",
          content: [
            {
              type: "bullets",
              items: [
                "1. Đại hội VIII họp tại Hội trường Ba Đình, Hà Nội (28/6 - 1/7/1996), có 1.198 đại biểu, đại diện gần 2,13 triệu đảng viên.",
                "2. Diễn ra sau 10 năm đổi mới (1986-1996), đất nước đã ra khỏi khủng hoảng kinh tế - xã hội.",
                "3. Trước đó có Hội nghị đại biểu toàn quốc giữa nhiệm kỳ khóa VII (1/1994).",
                "4. Nhiệm vụ: Tổng kết 10 năm đổi mới, đề ra chủ trương đẩy mạnh CNH, HĐH đất nước.",
                "5. Thông qua Báo cáo Chính trị của BCH TW khóa VII và Phương hướng, nhiệm vụ 1996-2000.",
                "6. Thông qua Điều lệ Đảng (bổ sung, sửa đổi).",
                "7. Mục tiêu đến năm 2020: Đưa nước ta cơ bản trở thành nước công nghiệp.",
                "8. Bầu lại ĐỖ MƯỜI làm Tổng Bí thư; có các Cố vấn BCHTW (Nguyễn Văn Linh, Phạm Văn Đồng, Võ Chí Công).",
                "9. Cuối năm 1997, LÊ KHẢ PHIÊU thay Đỗ Mười làm Tổng Bí thư (giữa nhiệm kỳ khóa VIII).",
                "10. Ý nghĩa: Cột mốc phát triển mới, mở đường bước vào thế kỷ XXI bằng con đường CNH, HĐH."
              ]
            }
          ]
        }
      ]
    }
  ]
};

const sec12 = {
  id: "dh-8-grp-12",
  roman: "XII",
  title: "Câu hỏi thi thường gặp & Điểm bẫy thi ⚠️",
  subsections: [
    {
      id: "dh-8-sec-12-q",
      number: "1",
      title: "Thắc mắc Trắc nghiệm & Tự luận thường gặp",
      parts: [
        {
          id: "dh-8-sec-12-q-content",
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
                "• Đại hội VIII diễn ra vào thời gian nào, ở đâu? ➔ (28/6 - 1/7/1996, Hội trường Ba Đình, Hà Nội).",
                "• Chủ trương lớn nhất được Đại hội VIII đề ra là gì? ➔ (Đẩy mạnh CNH, HĐH đất nước).",
                "• Đại hội VIII bầu ai làm Tổng Bí thư? ➔ (Đỗ Mười).",
                "• Mục tiêu đến năm 2020 mà Đại hội VIII đề ra? ➔ (Đưa nước ta cơ bản trở thành nước công nghiệp).",
                "• Số lượng đại biểu tham dự Đại hội VIII? ➔ (1.198 đại biểu)."
              ]
            },
            {
              type: "paragraph",
              text: "📝 Câu hỏi Tự luận hay gặp:"
            },
            {
              type: "bullets",
              items: [
                "• Phân tích bối cảnh và ý nghĩa của chủ trương đẩy mạnh CNH, HĐH tại Đại hội VIII.",
                "• So sánh nhiệm vụ trọng tâm của Đại hội VII và Đại hội VIII.",
                "• Trình bày các văn kiện được thông qua tại Đại hội VIII và ý nghĩa của mỗi văn kiện."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-8-sec-12-trap",
      number: "2",
      title: "Phân tích các Mốc thời gian & Nhân vật dễ nhầm",
      parts: [
        {
          id: "dh-8-sec-12-trap-content",
          label: "XII.2",
          title: "⚠️ BẢNG TỔNG HỢP CÁC ĐIỂM BẪY THI CỰC KỲ NGUY HIỂM",
          content: [
            {
              type: "trap-badge",
              title: "⏰ CÁC MỐC THỜI GIAN DỄ NHẦM",
              text: "1. Hội nghị giữa nhiệm kỳ khóa VII: 1/1994.\n2. Đại hội VII: 6/1991.\n3. Đại hội VIII: 6/1996 - 7/1996 (Họp nội bộ 22-26/6, họp công khai 28/6-1/7).\n4. Lê Khả Phiêu trở thành Tổng Bí thư: 12/1997 (Giữa nhiệm kỳ khóa VIII, KHÔNG PHẢI do Đại hội VIII trực tiếp bầu ra ngay từ đầu)."
            },
            {
              type: "trap-badge",
              title: "👤 CÁC NHÂN VẬT DỄ NHẦM",
              text: "1. Đỗ Mười: Tổng Bí thư khóa VII (1991) và tiếp tục là Tổng Bí thư khi Đại hội VIII khai mạc (1996), đọc Báo cáo Chính trị tại Đại hội VIII.\n2. Lê Đức Anh: Đọc diễn văn khai mạc Đại hội VIII (Lúc đó là Ủy viên Bộ Chính trị, đồng thời là Chủ tịch nước).\n3. Lê Khả Phiêu: Tổng Bí thư từ cuối năm 1997 (Giữa nhiệm kỳ khóa VIII) — Dễ nhầm là được Đại hội VIII bầu ngay.\n4. Nguyễn Văn Linh, Phạm Văn Đồng, Võ Chí Công: Giữ vai trò Cố vấn Ban Chấp hành Trung ương tại Đại hội VIII."
            }
          ]
        }
      ]
    }
  ]
};

// Find dh-8 chapter in basicGeneralData
const dh8 = basicGeneralData.chapters.find(c => c.id === "dh-8");
if (dh8) {
  // Replace sections VIII to XII if exist, else append
  const keepSections = dh8.sections.filter(s => {
    const num = parseInt(s.id.split("-grp-")[1]);
    return num >= 1 && num <= 7;
  });
  dh8.sections = [...keepSections, sec8, sec9, sec10, sec11, sec12];
  console.log("Updated dh-8 with sections VIII to XII. Total sections:", dh8.sections.length);
}

// Save back to basic-general.js
const basicGeneralJsContent = `/* ============================================================
   DỮ LIỆU TÀI LIỆU: KIẾN THỨC CƠ BẢN MÔN ĐẠI CƯƠNG
   Bài đọc chi tiết: 10 Kỳ Đại hội Đại biểu Toàn quốc của Đảng (Đại hội I, II, III, IV, V, VI, VII, VIII, X)
   ============================================================ */

export const basicGeneralData = ${JSON.stringify(basicGeneralData, null, 2)};
`;

fs.writeFileSync("./data/basic-general.js", basicGeneralJsContent, "utf8");
console.log("Updated data/basic-general.js with complete dh-8 sections VIII-XII.");

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
console.log("Updated data/index.js with complete dh-8 metadata.");
