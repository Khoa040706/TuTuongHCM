import fs from "fs";
import { basicGeneralData } from "../data/basic-general.js";

const sec8 = {
  id: "dh-5-grp-8",
  roman: "VIII",
  title: "Điểm mới so với Đại hội trước ⭐️",
  subsections: [
    {
      id: "dh-5-sec-8",
      number: "1",
      title: "So sánh điểm mới giữa Đại hội IV (1976) và Đại hội V (1982)",
      parts: [
        {
          id: "dh-5-sec-8-content",
          label: "VIII",
          title: "Bảng so sánh 5 tiêu chí cốt lõi ĐH IV vs ĐH V",
          content: [
            {
              type: "paragraph",
              text: "Đại hội V (1982) đánh dấu bước quá độ tư duy, điều chỉnh nhận thức kinh tế so với Đại hội IV (1976):"
            },
            {
              type: "bullets",
              items: [
                "1. Nhiệm vụ chiến lược: Đại hội IV chưa nêu rõ 'hai nhiệm vụ chiến lược' song song trong văn kiện; Đại hội V CHÍNH THỨC NÊU 'HAI NHIỆM VỤ CHIẾN LƯỢC': xây dựng CNXH & bảo vệ Tổ quốc XHCN.",
                "2. Công nghiệp hóa: Đại hội IV ưu tiên phát triển công nghiệp nặng một cách toàn diện; Đại hội V coi NÔNG NGHIỆP LÀ MẶT TRẬN HÀNG ĐẦU, kết hợp nông - công nghiệp hợp lý.",
                "3. Nhận thức kinh tế: Đại hội IV chủ trương cải tạo XHCN nhanh; Đại hội V THỪA NHẬN TỒN TẠI NHIỀU THÀNH PHẦN KINH TẾ ở miền Nam trong một thời gian nhất định.",
                "4. Bối cảnh: Đại hội IV mới thống nhất đất nước; Đại hội V đối diện trực tiếp với KHỦNG HOẢNG KINH TẾ - XÃ HỘI.",
                "5. Tổng Bí thư: Đại hội IV Lê Duẩn bầu lần đầu với tên Đảng CSVN; Đại hội V Lê Duẩn tiếp tục được bầu lại."
              ]
            },
            {
              type: "trap-badge",
              title: "⚡ GHI NHỚ NHANH SO SÁNH",
              text: "Đại hội V bắt đầu điều chỉnh tư duy so với Đại hội IV: từ ưu tiên công nghiệp nặng ➔ NÔNG NGHIỆP LÀ MẶT TRẬN HÀNG ĐẦU.\nĐây là bước quá độ tư duy, tiền đề trực tiếp cho Đổi mới ở Đại hội VI."
            }
          ]
        }
      ]
    }
  ]
};

const sec9 = {
  id: "dh-5-grp-9",
  roman: "IX",
  title: "Kết quả thực hiện sau Đại hội",
  subsections: [
    {
      id: "dh-5-sec-9",
      number: "1",
      title: "Thành công, Hạn chế và Nguyên nhân",
      parts: [
        {
          id: "dh-5-sec-9-content",
          label: "IX",
          title: "Đánh giá kết quả giai đoạn 1981-1985",
          content: [
            {
              type: "paragraph",
              text: "✅ Thành công:"
            },
            {
              type: "bullets",
              items: [
                "Kế hoạch 5 năm 1981-1985 đạt một số thành tựu, CHỦ YẾU TRONG NÔNG NGHIỆP.",
                "Bắt đầu áp dụng 'KHOÁN SẢN PHẨM' trong nông nghiệp (Chỉ thị 100-CT/TW, 1981), tạo động lực sản xuất lớn.",
                "Khoa học kỹ thuật được triển khai, bắt đầu khai thác dầu mỏ.",
                "Từng bước hình thành tư duy đổi mới trong nội bộ Đảng (qua các Hội nghị Trung ương khóa V)."
              ]
            },
            {
              type: "paragraph",
              text: "⚠️ Hạn chế:"
            },
            {
              type: "bullets",
              items: [
                "Khủng hoảng kinh tế - xã hội CHƯA ĐƯỢC KHẮC PHỤC CĂN BẢN, thậm chí có mặt trầm trọng hơn (lạm phát cao, giá - lương - tiền rối loạn cuối giai đoạn).",
                "Cơ chế TẬP TRUNG QUAN LIÊU, BAO CẤP vẫn tồn tại nặng nề.",
                "Đời sống nhân dân còn nhiều khó khăn."
              ]
            },
            {
              type: "paragraph",
              text: "🔍 Nguyên nhân:"
            },
            {
              type: "bullets",
              items: [
                "Tư duy đổi mới mới ở bước đầu, chưa đồng bộ, chưa dứt khoát xóa bỏ cơ chế cũ.",
                "Cải cách giá - lương - tiền (1985) tiến hành khi điều kiện chưa chín muồi, gây hậu quả lạm phát nghiêm trọng.",
                "Cần đến Đại hội VI (12/1986) mới có ĐƯỜNG LỐI ĐỔI MỚI TOÀN DIỆN."
              ]
            },
            {
              type: "trap-badge",
              title: "⭐️ THÀNH TỰU & HẠN CHẾ NỔI BẬT",
              text: "Thành tựu chính: Khoán sản phẩm nông nghiệp (Chỉ thị 100).\nHạn chế chính: Khủng hoảng KT-XH kéo dài, lạm phát rối loạn giá - lương - tiền (1985).\nĐây là cơ sở thực tiễn trực tiếp dẫn đến ĐỔI MỚI TOÀN DIỆN tại Đại hội VI."
            }
          ]
        }
      ]
    }
  ]
};

const sec10 = {
  id: "dh-5-grp-10",
  roman: "X",
  title: "Ý nghĩa lịch sử ⭐️",
  subsections: [
    {
      id: "dh-5-sec-10",
      number: "1",
      title: "Ý nghĩa đối với Đảng, Đất nước và Nhân dân",
      parts: [
        {
          id: "dh-5-sec-10-content",
          label: "X",
          title: "Ý nghĩa bước chuyển tiếp của Đại hội V",
          content: [
            {
              type: "bullets",
              items: [
                "Đối với Đảng: Thể hiện tinh thần tự phê bình nghiêm túc, bắt đầu quá trình tìm tòi, đổi mới tư duy lãnh đạo kinh tế.",
                "Đối với Đất nước: Xác định đúng hai nhiệm vụ chiến lược (xây dựng và bảo vệ Tổ quốc XHCN) trong hoàn cảnh vừa có hòa bình vừa phải đối phó chiến tranh biên giới.",
                "Đối với Nhân dân: Đặt mục tiêu ổn định và cải thiện đời sống nhân dân làm trọng tâm, dù kết quả thực tế còn hạn chế."
              ]
            },
            {
              type: "trap-badge",
              title: "⚡ GHI NHỚ NHANH Ý NGHĨA",
              text: "Đại hội V là BƯỚC CHUYỂN TIẾP, dấu mốc mở đầu quá trình trăn trở tìm đường đổi mới, chuẩn bị tiền đề cho Đại hội VI (1986) ⭐️."
            }
          ]
        }
      ]
    }
  ]
};

const sec11 = {
  id: "dh-5-grp-11",
  roman: "XI",
  title: "Tóm tắt 10 dòng học thuộc",
  subsections: [
    {
      id: "dh-5-sec-11",
      number: "1",
      title: "Chìa khóa Vàng — 10 Dòng Cốt Lõi Học Thuộc Lòng",
      parts: [
        {
          id: "dh-5-sec-11-content",
          label: "XI",
          title: "🗝️ 10 DÒNG CỐT LÕI BẮT BUỘC HỌC THUỘC LÒNG ĐẠI HỘI V",
          content: [
            {
              type: "bullets",
              items: [
                "1. Đại hội V họp tại Hà Nội (27-31/3/1982), có 1.033 đại biểu, đại diện hơn 1,7 triệu đảng viên.",
                "2. Diễn ra trong bối cảnh đất nước KHỦNG HOẢNG KINH TẾ - XÃ HỘI sau Đại hội IV.",
                "3. Nêu HAI NHIỆM VỤ CHIẾN LƯỢC: Xây dựng CNXH và Bảo vệ Tổ quốc Việt Nam XHCN.",
                "4. Xác định NÔNG NGHIỆP LÀ MẶT TRẬN HÀNG ĐẦU, điều chỉnh so với ưu tiên công nghiệp nặng của Đại hội IV.",
                "5. Thông qua Báo cáo chính trị (Lê Duẩn), Nghị quyết Kế hoạch 5 năm 1981-1985 (Phạm Văn Đồng), Báo cáo xây dựng Đảng & Điều lệ bổ sung.",
                "6. Bầu BCH TW (116 chính thức + 36 dự khuyết), Bộ Chính trị (13 + 2), Ban Bí thư (10 người).",
                "7. LÊ DUẨN tiếp tục làm Tổng Bí thư, mất 7/1986, TRƯỜNG CHINH kế nhiệm.",
                "8. Khẩu hiệu: 'Tất cả vì Tổ quốc xã hội chủ nghĩa, vì hạnh phúc của Nhân dân'.",
                "9. Thành tựu nổi bật: Khoán sản phẩm nông nghiệp; Hạn chế: Khủng hoảng KT-XH, lạm phát chưa giải quyết.",
                "10. Là bước tìm tòi, chuẩn bị tư duy cho công cuộc Đổi mới toàn diện tại Đại hội VI (12/1986)."
              ]
            }
          ]
        }
      ]
    }
  ]
};

const sec12 = {
  id: "dh-5-grp-12",
  roman: "XII",
  title: "Câu hỏi thi thường gặp & Điểm bẫy thi ⚠️",
  subsections: [
    {
      id: "dh-5-sec-12-q",
      number: "1",
      title: "Thắc mắc Trắc nghiệm & Tự luận thường gặp",
      parts: [
        {
          id: "dh-5-sec-12-q-content",
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
                "• Đại hội V diễn ra vào thời gian nào, tại đâu? ➔ (27-31/3/1982 tại Hà Nội).",
                "• Ai đọc Báo cáo chính trị tại Đại hội V? ➔ (Đồng chí Lê Duẩn).",
                "• Đại hội V nêu ra mấy nhiệm vụ chiến lược? ➔ (2: Xây dựng CNXH & Bảo vệ Tổ quốc XHCN).",
                "• Đại hội V xác định ngành nào là 'mặt trận hàng đầu'? ➔ (Nông nghiệp).",
                "• Ai được bầu làm Tổng Bí thư tại Đại hội V? ➔ (Đồng chí Lê Duẩn)."
              ]
            },
            {
              type: "paragraph",
              text: "📝 Câu hỏi Tự luận hay gặp:"
            },
            {
              type: "bullets",
              items: [
                "• Phân tích bối cảnh lịch sử và ý nghĩa của việc Đại hội V nêu ra hai nhiệm vụ chiến lược.",
                "• So sánh chủ trương công nghiệp hóa giữa Đại hội IV và Đại hội V, chỉ ra bước chuyển trong tư duy kinh tế.",
                "• Vai trò của Đại hội V trong việc chuẩn bị tiền đề cho đường lối Đổi mới tại Đại hội VI."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dh-5-sec-12-trap",
      number: "2",
      title: "Phân tích các Mốc thời gian & Nhân vật dễ nhầm",
      parts: [
        {
          id: "dh-5-sec-12-trap-content",
          label: "XII.2",
          title: "⚠️ BẢNG TỔNG HỢP CÁC ĐIỂM BẪY THI CỰC KỲ NGUY HIỂM",
          content: [
            {
              type: "trap-badge",
              title: "⏰ CÁC MỐC THỜI GIAN DỄ NHẦM",
              text: "1. Họp nội bộ ĐH V: 15-24/3/1982 ➔ Họp công khai: 27-31/3/1982.\n2. Thứ tự Đại hội: ĐH IV (12/1976) ➔ ĐH V (3/1982) ➔ ĐH VI (12/1986).\n3. Lê Duẩn mất: 10/7/1986; Trường Chinh làm Tổng Bí thư từ 14/7/1986 (Dễ nhầm với việc Trường Chinh làm TBT tạm thời trước ĐH VI, đến ĐH VI thì NGUYỄN VĂN LINH mới được bầu làm Tổng Bí thư)."
            },
            {
              type: "trap-badge",
              title: "👤 CÁC NHÂN VẬT DỄ NHẦM",
              text: "1. Trường Chinh: Đọc Diễn văn khai mạc Đại hội V (Không phải Báo cáo chính trị).\n2. Lê Duẩn: Đọc Báo cáo chính trị, làm Tổng Bí thư tại ĐH V (Không nhầm với ĐH VI — ĐH VI Tổng Bí thư là NGUYỄN VĂN LINH).\n3. Phạm Văn Đồng: Trình bày Báo cáo phương hướng, nhiệm vụ kinh tế - xã hội (Là Chủ tịch Hội đồng Bộ trưởng, không phải Tổng Bí thư)."
            }
          ]
        }
      ]
    }
  ]
};

// Find dh-5 chapter in basicGeneralData
const dh5 = basicGeneralData.chapters.find(c => c.id === "dh-5");
if (dh5) {
  // Replace sections VIII to XII if exist, else append
  const keepSections = dh5.sections.filter(s => {
    const num = parseInt(s.id.split("-grp-")[1]);
    return num >= 1 && num <= 7;
  });
  dh5.sections = [...keepSections, sec8, sec9, sec10, sec11, sec12];
  console.log("Updated dh-5 with sections VIII to XII. Total sections:", dh5.sections.length);
}

// Save back to basic-general.js
const basicGeneralJsContent = `/* ============================================================
   DỮ LIỆU TÀI LIỆU: KIẾN THỨC CƠ BẢN MÔN ĐẠI CƯƠNG
   Bài đọc chi tiết: 10 Kỳ Đại hội Đại biểu Toàn quốc của Đảng (Đại hội I, II, III, IV, V, X)
   ============================================================ */

export const basicGeneralData = ${JSON.stringify(basicGeneralData, null, 2)};
`;

fs.writeFileSync("./data/basic-general.js", basicGeneralJsContent, "utf8");
console.log("Updated data/basic-general.js with complete dh-5 sections VIII-XII.");

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
console.log("Updated data/index.js with complete dh-5 metadata.");
