import fs from "fs";
import { basicGeneralData } from "../data/basic-general.js";

const sec8 = {
  id: "dh-4-grp-8",
  roman: "VIII",
  title: "Điểm mới so với Đại hội trước ⭐️",
  subsections: [
    {
      id: "dh-4-sec-8",
      number: "1",
      title: "So sánh điểm mới giữa Đại hội III (1960) và Đại hội IV (1976)",
      parts: [
        {
          id: "dh-4-sec-8-content",
          label: "VIII",
          title: "Bảng so sánh 7 tiêu chí cốt lõi ĐH III vs ĐH IV",
          content: [
            {
              type: "paragraph",
              text: "Đại hội IV (1976) đánh dấu bước ngoặt chuyển hướng từ thời kỳ đất nước chia cắt sang giai đoạn hòa bình, thống nhất cả nước đi lên CNXH:"
            },
            {
              type: "bullets",
              items: [
                "1. Bối cảnh đất nước: Đại hội III diễn ra khi đất nước tạm chia 2 miền; Đại hội IV diễn ra khi đất nước đã THỐNG NHẤT hoàn toàn.",
                "2. Phạm vi đại biểu: Đại hội III chủ yếu là đại biểu miền Bắc; Đại hội IV có đại biểu đại diện cho CẢ NƯỚC (Bắc - Nam).",
                "3. Đường lối chiến lược: Đại hội III đề ra 2 nhiệm vụ chiến lược song song; Đại hội IV chuyển sang 1 NHIỆM VỤ CHIẾN LƯỢC CHUNG: cả nước đi lên CNXH.",
                "4. Tên Đảng: Đại hội III mang tên Đảng Lao động Việt Nam; Đại hội IV quyết định ĐỔI TÊN thành ĐẢNG CỘNG SẢN VIỆT NAM.",
                "5. Chức danh đứng đầu: Đại hội III là Bí thư thứ nhất (Lê Duẩn); Đại hội IV KHÔI PHỤC chức danh TỔNG BÍ THƯ (Lê Duẩn).",
                "6. Quy mô đại biểu/đảng viên: Đại hội III có 525 đại biểu / ~50 vạn đảng viên; Đại hội IV có 1.008 đại biểu / ~1,55 triệu đảng viên.",
                "7. Kế hoạch kinh tế: Đại hội III thông qua Kế hoạch 5 năm lần 1 (1961-1965); Đại hội IV thông qua KẾ HOẠCH 5 NĂM LẦN 2 (1976-1980)."
              ]
            },
            {
              type: "trap-badge",
              title: "⚡ GHI NHỚ NHANH SO SÁNH",
              text: "ĐH III: Đất nước chia 2 miền, 2 nhiệm vụ chiến lược song song, Bí thư thứ nhất.\nĐH IV: Đất nước THỐNG NHẤT, 1 nhiệm vụ chiến lược chung (cả nước lên CNXH), ĐỔI TÊN ĐẢNG CỘNG SẢN VIỆT NAM, KHÔI PHỤC TỔNG BÍ THƯ."
            }
          ]
        }
      ]
    }
  ]
};

const sec9 = {
  id: "dh-4-grp-9",
  roman: "IX",
  title: "Kết quả thực hiện sau Đại hội",
  subsections: [
    {
      id: "dh-4-sec-9",
      number: "1",
      title: "Thành công, Hạn chế và Nguyên nhân",
      parts: [
        {
          id: "dh-4-sec-9-content",
          label: "IX",
          title: "Đánh giá thực tiễn sau Đại hội IV",
          content: [
            {
              type: "paragraph",
              text: "✅ Thành công:"
            },
            {
              type: "bullets",
              items: [
                "Bước đầu khôi phục kinh tế sau chiến tranh, hàn gắn vết thương chiến tranh, ổn định đời sống nhân dân.",
                "Hoàn thành thống nhất đất nước về mặt nhà nước (Quốc hội chung, tên nước 'Cộng hòa xã hội chủ nghĩa Việt Nam' từ năm 1976).",
                "Xây dựng được một số cơ sở công nghiệp, nông nghiệp bước đầu."
              ]
            },
            {
              type: "paragraph",
              text: "⚠️ Hạn chế:"
            },
            {
              type: "bullets",
              items: [
                "Kế hoạch 5 năm (1976-1980) KHÔNG ĐẠT CÁC MỤC TIÊU đề ra.",
                "Đường lối NÓNG VỘI, CHỦ QUAN, duy ý chí trong xây dựng CNXH (đẩy mạnh công nghiệp hóa khi chưa có tiền đề; cải tạo XHCN nóng vội ở miền Nam).",
                "Kinh tế - xã hội lâm vào KHỦNG HOẢNG (thiếu lương thực, hàng hóa khan hiếm, lạm phát cao)."
              ]
            },
            {
              type: "paragraph",
              text: "🔍 Nguyên nhân:"
            },
            {
              type: "bullets",
              items: [
                "Hậu quả nặng nề của 30 năm chiến tranh để lại.",
                "Cơ chế quản lý KẾ HOẠCH HÓA TẬP TRUNG, QUAN LIÊU, BAO CẤP không còn phù hợp.",
                "Tư tưởng chủ quan, nóng vội, giản đơn trong nhận thức và tổ chức thực hiện.",
                "Bị bao vây, cấm vận; chiến tranh biên giới Tây Nam và biên giới phía Bắc (1978-1979) gây thêm khó khăn."
              ]
            },
            {
              type: "trap-badge",
              title: "⭐️ TIỀN ĐỀ TRỰC TIẾP CHO ĐỔI MỚI (1986)",
              text: "Những hạn chế và bài học kinh nghiệm sâu sắc từ giai đoạn 1976-1980 là TIỀN ĐỀ TRỰC TIẾP để Đảng tiến hành ĐỔI MỚI tại Đại hội VI (1986)."
            }
          ]
        }
      ]
    }
  ]
};

const sec10 = {
  id: "dh-4-grp-10",
  roman: "X",
  title: "Ý nghĩa lịch sử ⭐️",
  subsections: [
    {
      id: "dh-4-sec-10",
      number: "1",
      title: "Ý nghĩa đối với Đảng, Đất nước và Nhân dân",
      parts: [
        {
          id: "dh-4-sec-10-content",
          label: "X",
          title: "Ý nghĩa bước ngoặt của Đại hội IV",
          content: [
            {
              type: "bullets",
              items: [
                "Đối với Đảng: Là Đại hội đầu tiên của Đảng trên phạm vi CẢ NƯỚC sau khi thống nhất; đánh dấu bước chuyển đường lối lãnh đạo từ 2 nhiệm vụ chiến lược sang 1 nhiệm vụ chiến lược chung — cả nước xây dựng CNXH.",
                "Đối với Đất nước: Tổng kết thắng lợi vĩ đại của cuộc kháng chiến chống Mỹ, cứu nước; mở ra thời kỳ đất nước ĐỘC LẬP, THỐNG NHẤT, CÙNG ĐI LÊN CNXH.",
                "Đối với Nhân dân: Khẳng định thành quả cách mạng của toàn dân tộc sau 30 năm đấu tranh (1945-1975); cổ vũ nhân dân cả nước bước vào công cuộc xây dựng và bảo vệ Tổ quốc XHCN."
              ]
            },
            {
              type: "trap-badge",
              title: "⚡ GHI NHỚ NHANH Ý NGHĨA",
              text: "• Đại hội đầu tiên của Đảng trên CẢ NƯỚC sau ngày thống nhất đất nước.\n• Chuyển từ 2 chiến lược (thời chia cắt) sang 1 chiến lược chung: Cả nước đi lên CNXH."
            }
          ]
        }
      ]
    }
  ]
};

const sec11 = {
  id: "dh-4-grp-11",
  roman: "XI",
  title: "Tóm tắt 10 dòng học thuộc",
  subsections: [
    {
      id: "dh-4-sec-11",
      number: "1",
      title: "Chìa khóa Vàng — 10 Dòng Cốt Lõi Học Thuộc Lòng",
      parts: [
        {
          id: "dh-4-sec-11-content",
          label: "XI",
          title: "🗝️ 10 DÒNG CỐT LÕI BẮT BUỘC HỌC THUỘC LÒNG ĐẠI HỘI IV",
          content: [
            {
              type: "bullets",
              items: [
                "1. Đại hội IV họp tại Hà Nội (trù bị 29/11-10/12/1976; chính thức 14-20/12/1976).",
                "2. Có 1.008 đại biểu chính thức, thay mặt 1,55 triệu đảng viên, 29 đoàn quốc tế dự.",
                "3. Tôn Đức Thắng khai mạc; Lê Duẩn đọc Báo cáo Chính trị; Phạm Văn Đồng báo cáo Kế hoạch 5 năm 2; Lê Đức Thọ báo cáo Xây dựng Đảng.",
                "4. Diễn ra sau Đại thắng mùa Xuân 1975, đất nước hòa bình, thống nhất.",
                "5. Quyết định ĐỔI TÊN ĐẢNG Lao động Việt Nam thành ĐẢNG CỘNG SẢN VIỆT NAM.",
                "6. Xác định đường lối: Chuyên chính vô sản + 3 cuộc cách mạng (KH-KT là then chốt) + Công nghiệp hóa XHCN là nhiệm vụ trung tâm.",
                "7. Thông qua Kế hoạch 5 năm lần thứ hai (1976 - 1980).",
                "8. Bầu BCH TW (101 chính thức + 32 dự khuyết), Bộ Chính trị (14 + 3); Khôi phục chức danh TỔNG BÍ THƯ — LÊ DUẨN.",
                "9. Kết quả: Kế hoạch 5 năm không đạt mục tiêu, kinh tế khủng hoảng do chủ quan, nóng vội, cơ chế bao cấp.",
                "10. Ý nghĩa: Đại hội đầu tiên của cả nước thống nhất, đặt tiền đề để Đảng tiến hành ĐỔI MỚI tại Đại hội VI (1986)."
              ]
            }
          ]
        }
      ]
    }
  ]
};

const sec12 = {
  id: "dh-4-grp-12",
  roman: "XII",
  title: "Câu hỏi thi thường gặp & Điểm bẫy thi ⚠️",
  subsections: [
    {
      id: "dh-4-sec-12-q",
      number: "1",
      title: "Thắc mắc Trắc nghiệm & Tự luận thường gặp",
      parts: [
        {
          id: "dh-4-sec-12-q-content",
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
                "• Đại hội IV họp vào thời gian nào, tại đâu? ➔ (14-20/12/1976 tại Hà Nội).",
                "• Đại hội IV quyết định đổi tên Đảng thành gì? ➔ (Đảng Cộng sản Việt Nam).",
                "• Ai được bầu làm Tổng Bí thư tại Đại hội IV? ➔ (Đồng chí Lê Duẩn).",
                "• Đại hội IV xác định nhiệm vụ trung tâm của thời kỳ quá độ là gì? ➔ (Công nghiệp hóa xã hội chủ nghĩa).",
                "• Trong 'ba cuộc cách mạng', cuộc cách mạng nào được xác định là THEN CHỐT? ➔ (Cách mạng khoa học - kỹ thuật).",
                "• Kế hoạch 5 năm được thông qua tại Đại hội IV là kế hoạch lần thứ mấy? ➔ (Lần thứ hai, 1976-1980)."
              ]
            },
            {
              type: "paragraph",
              text: "📝 Câu hỏi Tự luận hay gặp:"
            },
            {
              type: "bullets",
              items: [
                "• Phân tích ý nghĩa việc đổi tên Đảng tại Đại hội IV.",
                "• Trình bày nội dung đường lối 'ba cuộc cách mạng' và đường lối công nghiệp hóa XHCN của Đại hội IV.",
                "• Phân tích nguyên nhân dẫn đến khủng hoảng kinh tế - xã hội sau Đại hội IV, làm tiền đề cho Đổi mới."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-4-sec-12-trap",
      number: "2",
      title: "Phân tích các Mốc thời gian & Nhân vật dễ nhầm",
      parts: [
        {
          id: "dh-4-sec-12-trap-content",
          label: "XII.2",
          title: "⚠️ BẢNG TỔNG HỢP CÁC ĐIỂM BẪY THI CỰC KỲ NGUY HIỂM",
          content: [
            {
              type: "trap-badge",
              title: "⏰ CÁC MỐC THỜI GIAN DỄ NHẦM",
              text: "1. 30/4/1975: Đại thắng mùa Xuân, giải phóng miền Nam (Diễn ra TRƯỚC Đại hội IV).\n2. 25/4/1976: Tổng tuyển cử bầu Quốc hội chung cả nước (TRƯỚC Đại hội IV).\n3. Đại hội IV: Trù bị 29/11-10/12/1976; chính thức 14-20/12/1976.\n4. Kế hoạch 5 năm lần thứ nhất: 1961-1965 (ĐH III) - Dễ nhầm với LẦN THỨ HAI: 1976-1980 (ĐH IV).\n5. Đại hội V: 1982 (Không nhầm với Đại hội IV 1976)."
            },
            {
              type: "trap-badge",
              title: "👤 CÁC NHÂN VẬT DỄ NHẦM",
              text: "1. Tôn Đức Thắng: Đọc Diễn văn khai mạc (Không phải Hồ Chí Minh, vì Bác đã mất năm 1969).\n2. Lê Duẩn: Đọc Báo cáo Chính trị, được bầu TỔNG BÍ THƯ (Chức danh mới khôi phục, không còn là Bí thư thứ nhất như ĐH III).\n3. Phạm Văn Đồng: Báo cáo Kế hoạch 5 năm lần 2 (Dễ nhầm với Nguyễn Duy Trinh - người báo cáo Kế hoạch 5 năm lần 1 tại ĐH III).\n4. Lê Đức Thọ: Báo cáo xây dựng Đảng và sửa đổi Điều lệ (Giữ vai trò này liên tục từ Đại hội III)."
            }
          ]
        }
      ]
    }
  ]
};

// Find dh-4 chapter in basicGeneralData
const dh4 = basicGeneralData.chapters.find(c => c.id === "dh-4");
if (dh4) {
  // Replace sections VIII to XII if exist, else append
  const keepSections = dh4.sections.filter(s => {
    const num = parseInt(s.id.split("-grp-")[1]);
    return num >= 1 && num <= 7;
  });
  dh4.sections = [...keepSections, sec8, sec9, sec10, sec11, sec12];
  console.log("Updated dh-4 with sections VIII to XII. Total sections:", dh4.sections.length);
}

// Save back to basic-general.js
const basicGeneralJsContent = `/* ============================================================
   DỮ LIỆU TÀI LIỆU: KIẾN THỨC CƠ BẢN MÔN ĐẠI CƯƠNG
   Bài đọc chi tiết: 10 Kỳ Đại hội Đại biểu Toàn quốc của Đảng (Đại hội I, II, III, IV, X)
   ============================================================ */

export const basicGeneralData = ${JSON.stringify(basicGeneralData, null, 2)};
`;

fs.writeFileSync("./data/basic-general.js", basicGeneralJsContent, "utf8");
console.log("Updated data/basic-general.js with complete dh-4 sections VIII-XII.");

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
console.log("Updated data/index.js with complete dh-4 metadata.");
