import fs from "fs";
import { basicGeneralData } from "../data/basic-general.js";

const sec8 = {
  id: "dh-6-grp-8",
  roman: "VIII",
  title: "Điểm mới so với Đại hội trước ⭐️",
  subsections: [
    {
      id: "dh-6-sec-8",
      number: "1",
      title: "So sánh điểm mới giữa Đại hội V (1982) và Đại hội VI (1986)",
      parts: [
        {
          id: "dh-6-sec-8-content",
          label: "VIII",
          title: "Bảng so sánh 6 tiêu chí cốt lõi ĐH V vs ĐH VI",
          content: [
            {
              type: "paragraph",
              text: "Đại hội VI (12/1986) tạo bước ngoặt lịch sử mở đầu công cuộc Đổi mới toàn diện so với giai đoạn tìm tòi mò mẫm ở Đại hội V (3/1982):"
            },
            {
              type: "bullets",
              items: [
                "1. Tính chất đổi mới: Đại hội V mới 'bắt đầu tìm tòi', mò mẫm điều chỉnh nhỏ; Đại hội VI CHÍNH THỨC KHỞI XƯỚNG ĐƯỜNG LỐI ĐỔI MỚI TOÀN DIỆN ⭐️.",
                "2. Kinh tế nhiều thành phần: Đại hội V thừa nhận 'tạm thời' ở miền Nam; Đại hội VI thực hiện NHẤT QUÁN, LÂU DÀI chính sách kinh tế nhiều thành phần trên cả nước.",
                "3. Cơ chế quản lý: Đại hội V vẫn duy trì cơ bản bao cấp; Đại hội VI chủ trương XÓA BỎ tập trung quan liêu bao cấp, chuyển sang hạch toán kinh doanh XHCN.",
                "4. Trọng tâm kinh tế: Đại hội V nêu Nông nghiệp là mặt trận hàng đầu nhưng chưa có chương trình cụ thể; Đại hội VI đề ra BA CHƯƠNG TRÌNH KINH TẾ LỚN (lương thực-thực phẩm, hàng tiêu dùng, hàng xuất khẩu).",
                "5. Tinh thần văn kiện: Đại hội V tự phê bình bước đầu; Đại hội VI quán triệt tinh thần 'NHÌN THẲNG VÀO SỰ THẬT' — tự phê bình triệt để, toàn diện.",
                "6. Tổng Bí thư & Chế định mới: Đại hội V là Lê Duẩn (đến 7/1986 là Trường Chinh); Đại hội VI là NGUYỄN VĂN LINH ⭐️ (đồng thời lần đầu lập chế định Cố vấn BCHTW: Trường Chinh, Phạm Văn Đồng, Lê Đức Thọ)."
              ]
            },
            {
              type: "trap-badge",
              title: "⚡ GHI NHỚ NHANH SO SÁNH",
              text: "Khác biệt cốt lõi: Đại hội V = Dò đường; Đại hội VI = Chính thức mở đường Đổi mới toàn diện ⭐️.\nĐại hội VI lần đầu tiên thành lập chế định 'Cố vấn Ban Chấp hành Trung ương'."
            }
          ]
        }
      ]
    }
  ]
};

const sec9 = {
  id: "dh-6-grp-9",
  roman: "IX",
  title: "Kết quả thực hiện sau Đại hội",
  subsections: [
    {
      id: "dh-6-sec-9",
      number: "1",
      title: "Thành công, Hạn chế và Nguyên nhân",
      parts: [
        {
          id: "dh-6-sec-9-content",
          label: "IX",
          title: "Đánh giá kết quả triển khai Đổi mới sau Đại hội VI",
          content: [
            {
              type: "paragraph",
              text: "✅ Thành công:"
            },
            {
              type: "bullets",
              items: [
                "BCH Trung ương khóa VI tổ chức 12 HỘI NGHỊ để cụ thể hóa và phát triển đường lối Đổi mới.",
                "Hội nghị Trung ương 3 (8/1987): Chuyển các đơn vị kinh tế quốc doanh sang kinh doanh XHCN, đổi mới quản lý nhà nước về kinh tế.",
                "Hội nghị Trung ương 4 (12/1987): Xác định phương hướng, nhiệm vụ phát triển kinh tế - xã hội 3 năm 1988-1990.",
                "Từng bước GIẢI PHÓNG NĂNG LỰC SẢN XUẤT, kinh tế hàng hóa nhiều thành phần bắt đầu vận hành.",
                "Đặt nền móng đưa đất nước dần thoát khỏi khủng hoảng kinh tế - xã hội trong những năm sau."
              ]
            },
            {
              type: "paragraph",
              text: "⚠️ Hạn chế:"
            },
            {
              type: "bullets",
              items: [
                "Lạm phát vẫn ở mức rất cao trong những năm đầu triển khai (cuối 1986 - 1988), đời sống nhân dân còn nhiều khó khăn.",
                "Việc đổi mới cơ chế quản lý, đổi mới tổ chức bộ máy, cán bộ diễn ra chưa đồng bộ, còn lúng túng bước đầu.",
                "Cải tạo XHCN một số lĩnh vực và đổi mới cơ chế quản lý kinh tế phải tiến hành song song, gây áp lực lớn."
              ]
            },
            {
              type: "paragraph",
              text: "🔍 Nguyên nhân:"
            },
            {
              type: "bullets",
              items: [
                "Đổi mới là vấn đề mới, chưa có tiền lệ, phải vừa làm vừa rút kinh nghiệm.",
                "Hậu quả nặng nề của khủng hoảng kinh tế - xã hội trước đó (đặc biệt lạm phát phi mã) không thể khắc phục trong thời gian ngắn.",
                "Cần tiếp tục bổ sung, hoàn thiện đường lối qua các Đại hội VII (1991) và các kỳ sau."
              ]
            },
            {
              type: "trap-badge",
              title: "⭐️ THÀNH TỰU LỚN NHẤT ĐẠI HỘI VI",
              text: "Thành tựu lớn nhất: Đặt nền móng lý luận và thực tiễn cho công cuộc Đổi mới, dần đưa đất nước thoát khỏi khủng hoảng.\nHạn chế: Đổi mới cơ chế quản lý và tổ chức chưa đồng bộ trong giai đoạn đầu."
            }
          ]
        }
      ]
    }
  ]
};

const sec10 = {
  id: "dh-6-grp-10",
  roman: "X",
  title: "Ý nghĩa lịch sử ⭐️",
  subsections: [
    {
      id: "dh-6-sec-10",
      number: "1",
      title: "Ý nghĩa đối với Đảng, Đất nước và Nhân dân",
      parts: [
        {
          id: "dh-6-sec-10-content",
          label: "X",
          title: "Tầm vóc vĩ đại của Đại hội VI",
          content: [
            {
              type: "bullets",
              items: [
                "Đối với Đảng: Thể hiện bản lĩnh chính trị, tinh thần tự phê bình và tự đổi mới, nâng tầm tư duy lý luận, khẳng định vai trò lãnh đạo trong hoàn cảnh khó khăn.",
                "Đối với Đất nước: MỞ ĐẦU CÔNG CUỘC ĐỔI MỚI TOÀN DIỆN, đánh dấu BƯỚC NGOẶT trong sự nghiệp xây dựng chủ nghĩa xã hội ở Việt Nam, đưa đất nước từng bước ra khỏi khủng hoảng kinh tế - xã hội.",
                "Đối với Nhân dân: Khẳng định tư tưởng 'LẤY DÂN LÀM GỐC', đường lối đổi mới xuất phát từ thực tiễn và sáng kiến của nhân dân, vì lợi ích của nhân dân."
              ]
            },
            {
              type: "trap-badge",
              title: "⭐️ CÂU TRẢ LỜI 'TỦ' THI ĐẠI HỘI VI",
              text: "Đại hội VI là 'Đại hội mở đầu công cuộc Đổi mới, đánh dấu bước ngoặt của cách mạng Việt Nam' ⭐️ — đây là câu trả lời tủ cho hầu hết các câu hỏi thi về Đại hội VI."
            }
          ]
        }
      ]
    }
  ]
};

const sec11 = {
  id: "dh-6-grp-11",
  roman: "XI",
  title: "Tóm tắt 10 dòng học thuộc",
  subsections: [
    {
      id: "dh-6-sec-11",
      number: "1",
      title: "Chìa khóa Vàng — 10 Dòng Cốt Lõi Học Thuộc Lòng",
      parts: [
        {
          id: "dh-6-sec-11-content",
          label: "XI",
          title: "🗝️ 10 DÒNG CỐT LÕI BẮT BUỘC HỌC THUỘC LÒNG ĐẠI HỘI VI",
          content: [
            {
              type: "bullets",
              items: [
                "1. Đại hội VI họp tại Hà Nội (15-18/12/1986), có 1.129 đại biểu, đại diện gần 1,9 triệu đảng viên.",
                "2. Diễn ra trong bối cảnh khủng hoảng kinh tế - xã hội trầm trọng, lạm phát lên tới 774% (1986).",
                "3. Tinh thần cốt lõi: 'Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật'.",
                "4. Chính thức KHỞI XƯỚNG ĐƯỜNG LỐI ĐỔI MỚI TOÀN DIỆN: đổi mới tư duy (trước hết tư duy kinh tế), tổ chức, cán bộ, phong cách lãnh đạo.",
                "5. Chủ trương: Xóa bỏ bao cấp, phát triển kinh tế nhiều thành phần, thực hiện BA CHƯƠNG TRÌNH KINH TẾ LỚN (lương thực-thực phẩm, hàng tiêu dùng, hàng xuất khẩu).",
                "6. Rút ra BỐN BÀI HỌC KINH NGHIỆM lớn, mở đầu bằng bài học 'LẤY DÂN LÀM GỐC'.",
                "7. Người trình bày: Nguyễn Văn Linh (khai mạc), Trường Chinh (Báo cáo chính trị), Võ Văn Kiệt (kinh tế - xã hội).",
                "8. Bầu BCHTW (124 chính thức), Bộ Chính trị (13 chính thức + 1 dự khuyết); NGUYỄN VĂN LINH làm Tổng Bí thư.",
                "9. Trường Chinh, Phạm Văn Đồng, Lê Đức Thọ làm CỐ VẤN Ban Chấp hành Trung ương.",
                "10. Ý nghĩa: Đại hội mở đầu công cuộc Đổi mới, đánh dấu bước ngoặt lịch sử của cách mạng Việt Nam."
              ]
            }
          ]
        }
      ]
    }
  ]
};

const sec12 = {
  id: "dh-6-grp-12",
  roman: "XII",
  title: "Câu hỏi thi thường gặp & Điểm bẫy thi ⚠️",
  subsections: [
    {
      id: "dh-6-sec-12-q",
      number: "1",
      title: "Thắc mắc Trắc nghiệm & Tự luận thường gặp",
      parts: [
        {
          id: "dh-6-sec-12-q-content",
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
                "• Đại hội VI diễn ra thời gian nào, tại đâu, ai làm Tổng Bí thư? ➔ (15-18/12/1986 tại Hà Nội, Nguyễn Văn Linh).",
                "• Đại hội VI đề ra bao nhiêu chương trình kinh tế lớn, gồm những chương trình nào? ➔ (3: Lương thực-thực phẩm, hàng tiêu dùng, hàng xuất khẩu).",
                "• Tinh thần cốt lõi của Báo cáo chính trị tại Đại hội VI là gì? ➔ ('Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật').",
                "• Ai đọc Báo cáo chính trị, ai đọc Báo cáo kinh tế - xã hội tại Đại hội VI? ➔ (Trường Chinh / Võ Văn Kiệt).",
                "• Đại hội VI rút ra mấy bài học kinh nghiệm lớn? ➔ (4 bài học lớn, mở đầu bằng 'Lấy dân làm gốc')."
              ]
            },
            {
              type: "paragraph",
              text: "📝 Câu hỏi Tự luận hay gặp:"
            },
            {
              type: "bullets",
              items: [
                "• Phân tích bối cảnh lịch sử dẫn đến việc Đảng phải khởi xướng đường lối Đổi mới tại Đại hội VI.",
                "• Trình bày nội dung cơ bản của đường lối Đổi mới toàn diện được đề ra tại Đại hội VI.",
                "• Phân tích ý nghĩa lịch sử của Đại hội VI đối với tiến trình cách mạng Việt Nam.",
                "• So sánh tư duy kinh tế giữa Đại hội V và Đại hội VI."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-6-sec-12-trap",
      number: "2",
      title: "Phân tích các Mốc thời gian & Nhân vật dễ nhầm",
      parts: [
        {
          id: "dh-6-sec-12-trap-content",
          label: "XII.2",
          title: "⚠️ BẢNG TỔNG HỢP CÁC ĐIỂM BẪY THI CỰC KỲ NGUY HIỂM",
          content: [
            {
              type: "trap-badge",
              title: "⏰ CÁC MỐC THỜI GIAN DỄ NHẦM",
              text: "1. Họp nội bộ: 5-14/12/1986 ➔ Họp công khai: 15-18/12/1986.\n2. Khoảng cách: ĐH V (3/1982) ➔ ĐH VI (12/1986) (Cách nhau gần 5 năm).\n3. HNTW 8 khóa V (6/1985): Tiền đề trực tiếp cho Đổi mới (Dễ nhầm với HNTW 3 & HNTW 4 khóa VI năm 1987).\n4. Chỉ số Lạm phát: 300% (1985) ➔ 774% (1986)."
            },
            {
              type: "trap-badge",
              title: "👤 CÁC NHÂN VẬT DỄ NHẦM",
              text: "1. Nguyễn Văn Linh: Đọc Diễn văn khai mạc và được bầu TỔNG BÍ THƯ (Không phải người đọc Báo cáo chính trị).\n2. Trường Chinh: Đọc Báo cáo chính trị tại ĐH VI (Là TBT trước ĐH VI, sau ĐH VI làm CỐ VẤN BCHTW, không tiếp tục làm TBT).\n3. Võ Văn Kiệt: Trình bày Báo cáo kinh tế - xã hội (Khi đó là Phó Chủ tịch Hội đồng Bộ trưởng).\n4. Ba Cố vấn BCHTW: TRƯỜNG CHINH — PHẠM VĂN ĐỒNG — LÊ ĐỨC THỌ."
            }
          ]
        }
      ]
    }
  ]
};

// Find dh-6 chapter in basicGeneralData
const dh6 = basicGeneralData.chapters.find(c => c.id === "dh-6");
if (dh6) {
  // Replace sections VIII to XII if exist, else append
  const keepSections = dh6.sections.filter(s => {
    const num = parseInt(s.id.split("-grp-")[1]);
    return num >= 1 && num <= 7;
  });
  dh6.sections = [...keepSections, sec8, sec9, sec10, sec11, sec12];
  console.log("Updated dh-6 with sections VIII to XII. Total sections:", dh6.sections.length);
}

// Save back to basic-general.js
const basicGeneralJsContent = `/* ============================================================
   DỮ LIỆU TÀI LIỆU: KIẾN THỨC CƠ BẢN MÔN ĐẠI CƯƠNG
   Bài đọc chi tiết: 10 Kỳ Đại hội Đại biểu Toàn quốc của Đảng (Đại hội I, II, III, IV, V, VI, X)
   ============================================================ */

export const basicGeneralData = ${JSON.stringify(basicGeneralData, null, 2)};
`;

fs.writeFileSync("./data/basic-general.js", basicGeneralJsContent, "utf8");
console.log("Updated data/basic-general.js with complete dh-6 sections VIII-XII.");

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
console.log("Updated data/index.js with complete dh-6 metadata.");
