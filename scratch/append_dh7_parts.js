import fs from "fs";
import { basicGeneralData } from "../data/basic-general.js";

const sec8 = {
  id: "dh-7-grp-8",
  roman: "VIII",
  title: "Điểm mới so với Đại hội trước ⭐️",
  subsections: [
    {
      id: "dh-7-sec-8",
      number: "1",
      title: "So sánh điểm mới giữa Đại hội VI (1986) và Đại hội VII (1991)",
      parts: [
        {
          id: "dh-7-sec-8-content",
          label: "VIII",
          title: "Bảng so sánh 5 tiêu chí cốt lõi ĐH VI vs ĐH VII",
          content: [
            {
              type: "paragraph",
              text: "Đại hội VII (6/1991) đánh dấu bước phát triển vượt bậc về tư duy lý luận bằng Cương lĩnh 1991 so với giai đoạn khởi xướng mở đường ở Đại hội VI (12/1986):"
            },
            {
              type: "bullets",
              items: [
                "1. Vai trò lịch sử: Đại hội VI 'khởi xướng' đường lối Đổi mới toàn diện; Đại hội VII 'tổng kết' 5 năm đổi mới và tiếp tục cụ thể hóa ⭐️.",
                "2. Văn kiện nền tảng: Đại hội VI chưa có Cương lĩnh riêng; Đại hội VII LẦN ĐẦU THÔNG QUA CƯƠNG LĨNH xây dựng đất nước trong thời kỳ quá độ lên CNXH (Cương lĩnh 1991) ⭐️.",
                "3. Chiến lược dài hạn: Đại hội VI chưa có chiến lược 10 năm; Đại hội VII thông qua Chiến lược ổn định và phát triển KT-XH đến năm 2000.",
                "4. Tổng Bí thư: Đại hội VI là Nguyễn Văn Linh; Đại hội VII bầu ĐỖ MƯỜI làm Tổng Bí thư ⭐️.",
                "5. Bối cảnh quốc tế: Đại hội VI CNXH thế giới vẫn còn tồn tại; Đại hội VII LIÊN XÔ VÀ ĐÔNG ÂU SỤP ĐỔ ⭐️."
              ]
            },
            {
              type: "trap-badge",
              title: "⚡ GHI NHỚ NHANH SO SÁNH",
              text: "⭐️ ĐH VI = 'mở đường' Đổi mới; ĐH VII = 'định hình lý luận' bằng Cương lĩnh 1991."
            }
          ]
        }
      ]
    }
  ]
};

const sec9 = {
  id: "dh-7-grp-9",
  roman: "IX",
  title: "Kết quả thực hiện sau Đại hội",
  subsections: [
    {
      id: "dh-7-sec-9",
      number: "1",
      title: "Thành công, Hạn chế và Nguyên nhân",
      parts: [
        {
          id: "dh-7-sec-9-content",
          label: "IX",
          title: "Đánh giá kết quả triển khai sau Đại hội VII",
          content: [
            {
              type: "paragraph",
              text: "✅ Thành công:"
            },
            {
              type: "bullets",
              items: [
                "Từng bước ỔN ĐỊNH VÀ THOÁT KHỎI KHỦNG HOẢNG kinh tế - xã hội.",
                "Kiềm chế được lạm phát, đời sống nhân dân dần cải thiện.",
                "Quan hệ đối ngoại từng bước mở rộng, PHÁ THẾ BAO VÂY CẤM VẬN.",
                "Cương lĩnh 1991 trở thành nền tảng tư tưởng cho các kỳ Đại hội sau."
              ]
            },
            {
              type: "paragraph",
              text: "⚠️ Hạn chế:"
            },
            {
              type: "bullets",
              items: [
                "Kinh tế - xã hội vẫn còn nhiều khó khăn, chưa vững chắc.",
                "Một số vấn đề lý luận về CNXH và con đường đi lên CNXH còn tiếp tục phải bổ sung, hoàn thiện."
              ]
            },
            {
              type: "paragraph",
              text: "🔍 Nguyên nhân:"
            },
            {
              type: "bullets",
              items: [
                "Xuất phát điểm kinh tế thấp, hậu quả chiến tranh, bao vây cấm vận.",
                "Tác động tiêu cực từ cuộc khủng hoảng và sự sụp đổ của CNXH thế giới."
              ]
            },
            {
              type: "trap-badge",
              title: "⭐️ GHI NHỚ NHANH KẾT QUẢ ĐẠI HỘI VII",
              text: "Sau ĐH VII: Kinh tế dần ổn định, nhưng khó khăn chưa hết hẳn, cần tiếp tục đổi mới ở các Đại hội sau."
            }
          ]
        }
      ]
    }
  ]
};

const sec10 = {
  id: "dh-7-grp-10",
  roman: "X",
  title: "Ý nghĩa lịch sử ⭐️",
  subsections: [
    {
      id: "dh-7-sec-10",
      number: "1",
      title: "Ý nghĩa đối với Đảng, Đất nước và Nhân dân",
      parts: [
        {
          id: "dh-7-sec-10-content",
          label: "X",
          title: "Tầm vóc vĩ đại của Đại hội VII",
          content: [
            {
              type: "bullets",
              items: [
                "Đối với Đảng: Đánh dấu BƯỚC TRƯỞNG THÀNH VỀ LÝ LUẬN VÀ THỰC TIỄN, lần đầu có Cương lĩnh chính thức về con đường đi lên CNXH.",
                "Đối với Đất nước: Hoạch định con đường quá độ lên CNXH phù hợp đặc điểm Việt Nam; đặt cơ sở cho phát triển kinh tế - xã hội lâu dài.",
                "Đối với Nhân dân: Củng cố thêm NIỀM TIN của cán bộ, đảng viên, nhân dân vào công cuộc đổi mới trong bối cảnh CNXH thế giới khủng hoảng."
              ]
            },
            {
              type: "trap-badge",
              title: "⭐️ CỘT MỐC LỊCH SỬ ĐẠI HỘI VII",
              text: "Đại hội VII = Cột mốc mới trong tiến trình cách mạng Việt Nam, là 'Đại hội của trí tuệ - đổi mới, dân chủ - kỷ cương - đoàn kết'."
            }
          ]
        }
      ]
    }
  ]
};

const sec11 = {
  id: "dh-7-grp-11",
  roman: "XI",
  title: "Tóm tắt 10 dòng học thuộc",
  subsections: [
    {
      id: "dh-7-sec-11",
      number: "1",
      title: "Chìa khóa Vàng — 10 Dòng Cốt Lõi Học Thuộc Lòng",
      parts: [
        {
          id: "dh-7-sec-11-content",
          label: "XI",
          title: "🗝️ 10 DÒNG CỐT LÕI BẮT BUỘC HỌC THUỘC LÒNG ĐẠI HỘI VII",
          content: [
            {
              type: "bullets",
              items: [
                "1. Đại hội VII họp tại Hà Nội (24-27/6/1991), có 1.176 đại biểu, đại diện hơn 2 triệu đảng viên.",
                "2. Diễn ra trong bối cảnh Liên Xô, Đông Âu sụp đổ; trong nước chưa hết khủng hoảng KT-XH.",
                "3. Nhiệm vụ: Tổng kết 5 năm đổi mới (từ ĐH VI), xác định phương hướng 1991-1995.",
                "4. Thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (lần đầu tiên).",
                "5. Thông qua Chiến lược ổn định và phát triển kinh tế - xã hội đến năm 2000 (10 năm).",
                "6. Thông qua Báo cáo xây dựng Đảng và Điều lệ Đảng (sửa đổi).",
                "7. Bầu ĐỖ MƯỜI làm Tổng Bí thư (thay đồng chí Nguyễn Văn Linh).",
                "8. Khẩu hiệu trung tâm: 'Đại hội của trí tuệ - đổi mới, dân chủ - kỷ cương - đoàn kết'.",
                "9. Ý nghĩa: Bước trưởng thành lý luận của Đảng, củng cố niềm tin nhân dân vào công cuộc Đổi mới.",
                "10. Là cột mốc quan trọng, đặt nền tảng lâu dài cho con đường đi lên CNXH ở Việt Nam."
              ]
            }
          ]
        }
      ]
    }
  ]
};

const sec12 = {
  id: "dh-7-grp-12",
  roman: "XII",
  title: "Câu hỏi thi thường gặp & Điểm bẫy thi ⚠️",
  subsections: [
    {
      id: "dh-7-sec-12-q",
      number: "1",
      title: "Thắc mắc Trắc nghiệm & Tự luận thường gặp",
      parts: [
        {
          id: "dh-7-sec-12-q-content",
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
                "• Đại hội VII diễn ra vào thời gian nào, ở đâu? ➔ (24 - 27/6/1991, Hà Nội).",
                "• Ai được bầu làm Tổng Bí thư tại Đại hội VII? ➔ (Đỗ Mười).",
                "• Văn kiện nào lần đầu tiên được thông qua tại Đại hội VII? ➔ (Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH - Cương lĩnh 1991).",
                "• Số lượng đại biểu tham dự Đại hội VII? ➔ (1.176 đại biểu)."
              ]
            },
            {
              type: "paragraph",
              text: "📝 Câu hỏi Tự luận hay gặp:"
            },
            {
              type: "bullets",
              items: [
                "• Phân tích bối cảnh lịch sử và ý nghĩa của việc thông qua Cương lĩnh 1991.",
                "• So sánh nhiệm vụ, vai trò của Đại hội VI và Đại hội VII.",
                "• Trình bày nội dung cơ bản của Chiến lược ổn định và phát triển KT-XH đến năm 2000."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-7-sec-12-trap",
      number: "2",
      title: "Phân tích các Mốc thời gian & Nhân vật dễ nhầm",
      parts: [
        {
          id: "dh-7-sec-12-trap-content",
          label: "XII.2",
          title: "⚠️ BẢNG TỔNG HỢP CÁC ĐIỂM BẪY THI CỰC KỲ NGUY HIỂM",
          content: [
            {
              type: "trap-badge",
              title: "⏰ CÁC MỐC THỜI GIAN DỄ NHẦM",
              text: "1. Đại hội VI: 12/1986 (Khởi xướng Đổi mới).\n2. Đại hội VII: 6/1991 (Thông qua Cương lĩnh 1991).\n3. Đại hội VIII: 6/1996 (Dễ nhầm với ĐH VII vì cùng thập niên 1990)."
            },
            {
              type: "trap-badge",
              title: "👤 CÁC NHÂN VẬT DỄ NHẦM",
              text: "1. Nguyễn Văn Linh: Tổng Bí thư khóa VI (1986-1991), người đọc Báo cáo chính trị tại ĐH VII.\n2. Đỗ Mười: Tổng Bí thư khóa VII (Bầu tại ĐH VII, 1991).\n3. Võ Chí Công: Người đọc diễn văn khai mạc Đại hội VII."
            }
          ]
        }
      ]
    }
  ]
};

// Find dh-7 chapter in basicGeneralData
const dh7 = basicGeneralData.chapters.find(c => c.id === "dh-7");
if (dh7) {
  // Replace sections VIII to XII if exist, else append
  const keepSections = dh7.sections.filter(s => {
    const num = parseInt(s.id.split("-grp-")[1]);
    return num >= 1 && num <= 7;
  });
  dh7.sections = [...keepSections, sec8, sec9, sec10, sec11, sec12];
  console.log("Updated dh-7 with sections VIII to XII. Total sections:", dh7.sections.length);
}

// Save back to basic-general.js
const basicGeneralJsContent = `/* ============================================================
   DỮ LIỆU TÀI LIỆU: KIẾN THỨC CƠ BẢN MÔN ĐẠI CƯƠNG
   Bài đọc chi tiết: 10 Kỳ Đại hội Đại biểu Toàn quốc của Đảng (Đại hội I, II, III, IV, V, VI, VII, X)
   ============================================================ */

export const basicGeneralData = ${JSON.stringify(basicGeneralData, null, 2)};
`;

fs.writeFileSync("./data/basic-general.js", basicGeneralJsContent, "utf8");
console.log("Updated data/basic-general.js with complete dh-7 sections VIII-XII.");

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
console.log("Updated data/index.js with complete dh-7 metadata.");
