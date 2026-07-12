/* ============================================================
   DỮ LIỆU: Kiến thức cơ bản về môn Đại cương
   Tổng hợp 14 kỳ Đại hội Đại biểu Toàn quốc của Đảng CSVN
   (Đại hội I → XIV)
   ============================================================ */

export const basicGeneralData = {
  id: "basic-general",
  title: "Kiến thức cơ bản môn Đại cương",
  subtitle:
    "Tìm hiểu các kiến thức nền tảng đại cương, trọng tâm là lịch sử 14 kỳ Đại hội Đại biểu Toàn quốc của Đảng Cộng sản Việt Nam (1935 – 2026).",
  sections: [
    /* ============================
       I. ĐẤU TRANH GIẢI PHÓNG DÂN TỘC VÀ XÂY DỰNG ĐẦU TIÊN (1930 - 1982)
       ============================ */
    {
      id: "dh-section-1",
      roman: "I",
      title:
        "Đại hội Đảng giai đoạn Đấu tranh giải phóng dân tộc và xây dựng đầu tiên (1930 - 1982)",
      subsections: [
        /* ----------------------------
           1. ĐH I & ĐH II
           ---------------------------- */
        {
          id: "dh-sub-1",
          number: "1",
          title:
            "Đại hội I (1935) và Đại hội II (1951) — Khôi phục tổ chức và Kháng chiến",
          parts: [
            /* a/ Đại hội I */
            {
              id: "dh-part-1-1",
              label: "a",
              title: "Đại hội I (3/1935) — Khôi phục hệ thống tổ chức Đảng",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ I của Đảng Cộng sản Đông Dương diễn ra từ ngày 27 đến 31-3-1935 tại Ma Cao (Trung Quốc), với sự tham dự của 13 đại biểu đại diện cho khoảng 600 đảng viên trong cả nước."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 27-31/3/1935 | 📍 Địa điểm: Ma Cao, Trung Quốc | 👥 Đại biểu: 13 đại biểu (~600 đảng viên)"
                },
                {
                  type: "paragraph",
                  text: "🔹 BỐI CẢNH LỊCH SỬ:"
                },
                {
                  type: "bullets",
                  items: [
                    "Trong nước: Sau phong trào Xô Viết Nghệ Tĩnh (1930-1931), thực dân Pháp khủng bố trắng cực kỳ tàn bạo, hầu hết cán bộ lãnh đạo của Đảng bị bắt hoặc hy sinh, hệ thống tổ chức Đảng tan rã gần như hoàn toàn.",
                    "Quốc tế: Phong trào cộng sản quốc tế đang phát triển mạnh dưới sự lãnh đạo của Quốc tế Cộng sản (Đệ tam Quốc tế). Đại hội VII Quốc tế Cộng sản (1935) chuẩn bị họp đặt ra yêu cầu các Đảng thành viên phải tổ chức Đại hội."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 NỘI DUNG & NGHỊ QUYẾT CHÍNH:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Khôi phục hệ thống tổ chức:",
                      bullets: [
                        "Khôi phục và củng cố hệ thống tổ chức Đảng từ Trung ương đến cơ sở.",
                        "Đẩy mạnh công tác phát triển đảng viên, chú trọng thành phần công nhân."
                      ]
                    },
                    {
                      number: "2",
                      title: "Đẩy mạnh phong trào quần chúng:",
                      bullets: [
                        "Thúc đẩy phong trào đấu tranh cách mạng trong nhân dân.",
                        "Tăng cường hoạt động của các tổ chức quần chúng (công hội, nông hội, hội phụ nữ...)"
                      ]
                    },
                    {
                      number: "3",
                      title: "Công tác quốc tế:",
                      bullets: [
                        "Mở rộng tuyên truyền chống chiến tranh đế quốc.",
                        "Ủng hộ Liên Xô và phong trào cách mạng thế giới."
                      ]
                    }
                  ]
                },
                {
                  type: "key-point",
                  text: "👤 NHÂN SỰ: Đại hội bầu đồng chí Lê Hồng Phong làm Tổng Bí thư, đồng chí Hà Huy Tập là Thư ký Ban Chỉ huy ở ngoài."
                },
                {
                  type: "definition",
                  text: "✨ Ý NGHĨA LỊCH SỬ: Đại hội lần thứ I đánh dấu sự khôi phục hoàn toàn hệ thống tổ chức của Đảng từ Trung ương đến cơ sở sau thời kỳ bị khủng bố trắng. Đại hội khẳng định vai trò lãnh đạo cách mạng của Đảng và chuẩn bị tiền đề cho cao trào đấu tranh mới."
                },
                {
                  type: "conclusion",
                  text: "📖 BÀI HỌC KINH NGHIỆM: Trong bất kỳ hoàn cảnh khó khăn nào, việc bảo vệ và khôi phục tổ chức Đảng luôn là nhiệm vụ then chốt hàng đầu. Tổ chức vững mạnh là nền tảng để lãnh đạo phong trào cách mạng."
                },
                {
                  type: "quote",
                  text: "Đại hội của Đảng Cộng sản Đông Dương có ý nghĩa vô cùng trọng đại... Đại hội đã khôi phục được hệ thống tổ chức của Đảng và chuẩn bị cho một cao trào mới.",
                  source: "Nghị quyết Đại hội lần thứ I (1935)"
                },
                {
                  type: "highlight",
                  text: "🧠 MẸO NHỚ: ĐH I = 1935 = MA CAO = KHÔI PHỤC tổ chức + Lê Hồng Phong = TBT"
                },
                {
                  type: "key-point",
                  text: "📌 TÓM TẮT: (1) Khôi phục hệ thống tổ chức Đảng sau khủng bố trắng; (2) 13 đại biểu họp tại Ma Cao; (3) Lê Hồng Phong làm Tổng Bí thư; (4) Chuẩn bị cho cao trào đấu tranh mới."
                }
              ]
            },
            /* b/ Đại hội II */
            {
              id: "dh-part-1-2",
              label: "b",
              title: "Đại hội II (2/1951) — Đảng ra hoạt động công khai",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ II của Đảng diễn ra từ ngày 11 đến 19-2-1951 tại xã Vinh Quang (nay là Kim Bình), huyện Chiêm Hóa, tỉnh Tuyên Quang, với sự tham dự của 158 đại biểu chính thức và 53 đại biểu dự khuyết đại diện cho 766.349 đảng viên."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 11-19/2/1951 | 📍 Địa điểm: Tuyên Quang | 👥 Đại biểu: 211 đại biểu (766.349 đảng viên)"
                },
                {
                  type: "paragraph",
                  text: "🔹 BỐI CẢNH LỊCH SỬ:"
                },
                {
                  type: "bullets",
                  items: [
                    "Trong nước: Cuộc kháng chiến chống thực dân Pháp bước vào giai đoạn quyết liệt. Chiến thắng Biên giới Thu - Đông 1950 đã giải phóng một vùng biên giới rộng lớn, mở thông tuyến liên lạc quốc tế, tạo thế và lực mới cho cách mạng.",
                    "Quốc tế: Nước Cộng hòa Nhân dân Trung Hoa ra đời (1949), Liên Xô và các nước XHCN công nhận và đặt quan hệ ngoại giao với Việt Nam, tạo điều kiện thuận lợi cho kháng chiến."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 NỘI DUNG & NGHỊ QUYẾT CHÍNH:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Đảng ra hoạt động công khai:",
                      bullets: [
                        "Quyết định đưa Đảng ra hoạt động công khai, lấy tên là Đảng Lao động Việt Nam.",
                        "Đây là bước ngoặt quan trọng, khẳng định vị thế lãnh đạo công khai của Đảng trong kháng chiến."
                      ]
                    },
                    {
                      number: "2",
                      title: "Thông qua các văn kiện quan trọng:",
                      bullets: [
                        "Thông qua Báo cáo chính trị của Chủ tịch Hồ Chí Minh — vạch rõ phương châm đưa kháng chiến chống Pháp đến thắng lợi hoàn toàn.",
                        "Thông qua Chính cương Đảng Lao động Việt Nam — chỉ rõ tính chất xã hội Việt Nam là dân chủ nhân dân, một phần thuộc địa và nửa phong kiến.",
                        "Thông qua Điều lệ mới của Đảng."
                      ]
                    },
                    {
                      number: "3",
                      title: "Tách Đảng:",
                      bullets: [
                        "Tách Đảng Cộng sản Đông Dương thành lập các tổ chức cách mạng riêng ở mỗi nước Việt Nam, Lào, Campuchia phù hợp với đặc điểm của từng dân tộc."
                      ]
                    }
                  ]
                },
                {
                  type: "key-point",
                  text: "👤 NHÂN SỰ: Đại hội bầu đồng chí Trường Chinh làm Tổng Bí thư. Chủ tịch Hồ Chí Minh được bầu làm Chủ tịch Đảng."
                },
                {
                  type: "definition",
                  text: "✨ Ý NGHĨA LỊCH SỬ: Đại hội lần thứ II là Đại hội đầu tiên được tổ chức ở trong nước, là 'Đại hội kháng chiến'. Đại hội đánh dấu bước trưởng thành vượt bậc của Đảng, khẳng định đường lối cách mạng dân tộc dân chủ nhân dân đúng đắn, đưa Đảng ra hoạt động công khai để trực tiếp lãnh đạo kháng chiến."
                },
                {
                  type: "conclusion",
                  text: "📖 BÀI HỌC KINH NGHIỆM: Đảng phải gắn bó mật thiết với nhân dân, công khai vai trò lãnh đạo để tập hợp sức mạnh toàn dân tộc. Đường lối phải phù hợp với thực tiễn và đặc điểm riêng của từng dân tộc."
                },
                {
                  type: "quote",
                  text: "Đại hội này là Đại hội kháng chiến. Nhiệm vụ chính của Đại hội là đẩy mạnh kháng chiến đến thắng lợi hoàn toàn và xây dựng Đảng Lao động Việt Nam.",
                  source:
                    "Chủ tịch Hồ Chí Minh — Diễn văn khai mạc Đại hội II (1951)"
                },
                {
                  type: "highlight",
                  text: "🧠 MẸO NHỚ: ĐH II = 1951 = TUYÊN QUANG = CÔNG KHAI + Đảng Lao động VN + Trường Chinh = TBT"
                },
                {
                  type: "key-point",
                  text: "📌 TÓM TẮT: (1) Đảng ra hoạt động công khai với tên Đảng Lao động VN; (2) Đại hội đầu tiên trong nước; (3) Trường Chinh làm TBT, Bác Hồ là Chủ tịch Đảng; (4) Tách Đảng CS Đông Dương thành 3 tổ chức riêng biệt."
                }
              ]
            }
          ]
        },
        /* ----------------------------
           2. ĐH III, IV, V
           ---------------------------- */
        {
          id: "dh-sub-2",
          number: "2",
          title:
            "Đại hội III (1960), IV (1976) và V (1982) — Hai nhiệm vụ chiến lược, thống nhất đất nước và xây dựng CNXH",
          parts: [
            /* a/ Đại hội III */
            {
              id: "dh-part-2-1",
              label: "a",
              title:
                "Đại hội III (9/1960) — Hai nhiệm vụ chiến lược cách mạng",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ III của Đảng Lao động Việt Nam diễn ra từ ngày 5 đến 10-9-1960 tại Thủ đô Hà Nội, với sự tham dự của 525 đại biểu chính thức và 51 đại biểu dự khuyết đại diện cho hơn 500.000 đảng viên."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 5-10/9/1960 | 📍 Địa điểm: Hà Nội | 👥 Đại biểu: 576 đại biểu (hơn 500.000 đảng viên)"
                },
                {
                  type: "paragraph",
                  text: "🔹 BỐI CẢNH LỊCH SỬ:"
                },
                {
                  type: "bullets",
                  items: [
                    "Trong nước: Miền Bắc hoàn thành cải cách ruộng đất và khôi phục kinh tế, bước vào xây dựng CNXH. Miền Nam dấy lên phong trào Đồng Khởi (1959-1960), nhân dân đứng lên chống chế độ Mỹ - Diệm.",
                    "Quốc tế: Hệ thống XHCN thế giới đang lớn mạnh. Mâu thuẫn Xô - Trung bắt đầu bộc lộ, đặt ra thách thức cho các Đảng Cộng sản."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 NỘI DUNG & NGHỊ QUYẾT CHÍNH:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Xác định hai nhiệm vụ chiến lược:",
                      bullets: [
                        "Miền Bắc: Tiến hành cách mạng XHCN, xây dựng CNXH.",
                        "Miền Nam: Tiến hành cách mạng dân tộc dân chủ nhân dân, giải phóng miền Nam, thống nhất Tổ quốc.",
                        "Hai nhiệm vụ có quan hệ mật thiết, hỗ trợ lẫn nhau."
                      ]
                    },
                    {
                      number: "2",
                      title: "Đề ra kế hoạch 5 năm lần thứ nhất (1961-1965):",
                      bullets: [
                        "Xây dựng bước đầu cơ sở vật chất - kỹ thuật của CNXH ở miền Bắc.",
                        "Phát triển nông nghiệp, công nghiệp, cải thiện đời sống nhân dân."
                      ]
                    }
                  ]
                },
                {
                  type: "key-point",
                  text: "👤 NHÂN SỰ: Đại hội bầu đồng chí Lê Duẩn làm Bí thư thứ nhất Ban Chấp hành Trung ương Đảng (tương đương Tổng Bí thư). Chủ tịch Hồ Chí Minh tiếp tục được bầu làm Chủ tịch Đảng."
                },
                {
                  type: "definition",
                  text: "✨ Ý NGHĨA LỊCH SỬ: Đại hội III vạch rõ đường lối tiến hành đồng thời hai chiến lược cách mạng trên hai miền đất nước, phản ánh sáng tạo lý luận mácxít vào thực tiễn Việt Nam — một quốc gia tạm thời chia cắt hai miền với hai chế độ chính trị khác nhau."
                },
                {
                  type: "conclusion",
                  text: "📖 BÀI HỌC KINH NGHIỆM: Cần biết xác định chính xác nhiệm vụ cách mạng phù hợp với đặc điểm từng vùng, từng miền nhưng vẫn đảm bảo tính thống nhất của đường lối chung."
                },
                {
                  type: "quote",
                  text: "Miền Bắc là cơ sở, là gốc của cách mạng cả nước. Cách mạng miền Bắc và cách mạng miền Nam có quan hệ mật thiết với nhau.",
                  source: "Nghị quyết Đại hội III (1960)"
                },
                {
                  type: "highlight",
                  text: "🧠 MẸO NHỚ: ĐH III = 1960 = HAI nhiệm vụ (Bắc XÂY + Nam GIẢI PHÓNG) + Lê Duẩn = Bí thư thứ nhất"
                },
                {
                  type: "key-point",
                  text: "📌 TÓM TẮT: (1) Xác định hai nhiệm vụ chiến lược trên hai miền; (2) Kế hoạch 5 năm lần 1; (3) Lê Duẩn làm Bí thư thứ nhất; (4) Phong trào Đồng Khởi miền Nam."
                }
              ]
            },
            /* b/ Đại hội IV */
            {
              id: "dh-part-2-2",
              label: "b",
              title:
                "Đại hội IV (12/1976) — Đại hội thống nhất Tổ quốc, cả nước đi lên CNXH",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ IV của Đảng diễn ra từ ngày 14 đến 20-12-1976 tại Thủ đô Hà Nội, với sự tham dự của 1.008 đại biểu đại diện cho hơn 1.553.500 đảng viên trong cả nước."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 14-20/12/1976 | 📍 Địa điểm: Hà Nội | 👥 Đại biểu: 1.008 (hơn 1.553.500 đảng viên)"
                },
                {
                  type: "paragraph",
                  text: "🔹 BỐI CẢNH LỊCH SỬ:"
                },
                {
                  type: "bullets",
                  items: [
                    "Trong nước: Đại thắng mùa Xuân 1975 giải phóng hoàn toàn miền Nam, thống nhất đất nước. Ngày 25-4-1976, Tổng tuyển cử bầu Quốc hội chung thống nhất. Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam chính thức ra đời (2-7-1976).",
                    "Quốc tế: Phong trào giải phóng dân tộc thắng lợi ở nhiều nơi. Tuy nhiên, Việt Nam đối mặt với hậu quả nặng nề của chiến tranh và lệnh cấm vận kinh tế của Mỹ."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 NỘI DUNG & NGHỊ QUYẾT CHÍNH:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Đổi tên Đảng:",
                      bullets: [
                        "Quyết định đổi tên Đảng Lao động Việt Nam thành Đảng Cộng sản Việt Nam — thể hiện bản chất giai cấp công nhân và sứ mệnh lịch sử trong giai đoạn mới."
                      ]
                    },
                    {
                      number: "2",
                      title: "Đường lối xây dựng CNXH:",
                      bullets: [
                        "Hoàn thành thống nhất đất nước về mọi mặt.",
                        "Đưa cả nước đi lên CNXH với đường lối chung: Nắm vững chuyên chính vô sản, phát huy quyền làm chủ tập thể của nhân dân lao động.",
                        "Thực hiện công nghiệp hóa XHCN, xây dựng chế độ mới, con người mới."
                      ]
                    },
                    {
                      number: "3",
                      title: "Kế hoạch 5 năm (1976-1980):",
                      bullets: [
                        "Mục tiêu: Vừa xây dựng, vừa cải tạo XHCN, khôi phục và phát triển kinh tế sau chiến tranh."
                      ]
                    }
                  ]
                },
                {
                  type: "key-point",
                  text: "👤 NHÂN SỰ: Đại hội bầu lại đồng chí Lê Duẩn làm Tổng Bí thư Ban Chấp hành Trung ương Đảng."
                },
                {
                  type: "definition",
                  text: "✨ Ý NGHĨA LỊCH SỬ: Đại hội IV là Đại hội toàn thắng của sự nghiệp giải phóng dân tộc, là Đại hội đầu tiên của cả nước thống nhất đi lên CNXH. Đại hội mở ra kỷ nguyên mới — kỷ nguyên cả nước cùng xây dựng CNXH."
                },
                {
                  type: "conclusion",
                  text: "📖 BÀI HỌC KINH NGHIỆM: Thống nhất đất nước phải đi đôi với thống nhất về tư tưởng, tổ chức và đường lối. Cần đánh giá đúng thực trạng kinh tế - xã hội sau chiến tranh để đề ra kế hoạch phù hợp, tránh nóng vội, chủ quan."
                },
                {
                  type: "quote",
                  text: "Đảng ta, nhân dân ta, non sông đất nước ta đã sinh ra Chủ tịch Hồ Chí Minh và chính Người đã làm rạng rỡ Đảng ta, nhân dân ta, non sông đất nước ta.",
                  source: "Tổng Bí thư Lê Duẩn — Diễn văn Đại hội IV (1976)"
                },
                {
                  type: "highlight",
                  text: "🧠 MẸO NHỚ: ĐH IV = 1976 = THỐNG NHẤT + Đảng Lao động → ĐCSVN (đổi tên) + Cả nước lên CNXH"
                },
                {
                  type: "key-point",
                  text: "📌 TÓM TẮT: (1) Đổi tên thành Đảng Cộng sản Việt Nam; (2) Đại hội đầu tiên cả nước thống nhất; (3) Lê Duẩn tiếp tục TBT; (4) Đường lối đưa cả nước lên CNXH."
                }
              ]
            },
            /* c/ Đại hội V */
            {
              id: "dh-part-2-3",
              label: "c",
              title:
                "Đại hội V (3/1982) — Chặng đường đầu tiên của thời kỳ quá độ",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ V của Đảng diễn ra từ ngày 27 đến 31-3-1982 tại Thủ đô Hà Nội, với sự tham dự của 1.033 đại biểu đại diện cho hơn 1.727.000 đảng viên."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 27-31/3/1982 | 📍 Địa điểm: Hà Nội | 👥 Đại biểu: 1.033 (hơn 1.727.000 đảng viên)"
                },
                {
                  type: "paragraph",
                  text: "🔹 BỐI CẢNH LỊCH SỬ:"
                },
                {
                  type: "bullets",
                  items: [
                    "Trong nước: Kinh tế gặp nhiều khó khăn nghiêm trọng sau chiến tranh. Sản xuất đình trệ, lương thực thiếu hụt, đời sống nhân dân rất khó khăn. Chiến tranh biên giới Tây Nam (1978) và phía Bắc (1979) gây thêm gánh nặng.",
                    "Quốc tế: Việt Nam bị Mỹ cấm vận, quan hệ với Trung Quốc căng thẳng, phụ thuộc nhiều vào viện trợ từ Liên Xô và các nước XHCN Đông Âu."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 NỘI DUNG & NGHỊ QUYẾT CHÍNH:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title:
                        "Xác định chặng đường đầu tiên quá độ lên CNXH:",
                      bullets: [
                        "Nhấn mạnh tính lâu dài, phức tạp của thời kỳ quá độ — không thể nóng vội, đốt cháy giai đoạn.",
                        "Chặng đầu: Tập trung ổn định và cải thiện đời sống nhân dân, tạo tiền đề cho CNH-XHCN."
                      ]
                    },
                    {
                      number: "2",
                      title: "Chiến lược phát triển kinh tế:",
                      bullets: [
                        "Ưu tiên phát triển nông nghiệp, coi nông nghiệp là mặt trận hàng đầu.",
                        "Phát triển công nghiệp nhẹ và tiểu thủ công nghiệp phục vụ đời sống.",
                        "Ra sức giải quyết vấn đề lương thực - thực phẩm và hàng tiêu dùng."
                      ]
                    }
                  ]
                },
                {
                  type: "key-point",
                  text: "👤 NHÂN SỰ: Đại hội bầu lại đồng chí Lê Duẩn làm Tổng Bí thư Ban Chấp hành Trung ương Đảng."
                },
                {
                  type: "definition",
                  text: "✨ Ý NGHĨA LỊCH SỬ: Đại hội V đã nhận diện rõ hơn bước đi ban đầu của thời kỳ quá độ, khắc phục phần nào tư duy nóng vội, chủ quan duy ý chí trong xây dựng CNXH. Đặc biệt, Đại hội khẳng định nông nghiệp là mặt trận hàng đầu — một nhận thức quan trọng."
                },
                {
                  type: "conclusion",
                  text: "📖 BÀI HỌC KINH NGHIỆM: Phải tôn trọng quy luật khách quan, không được nóng vội, đốt cháy giai đoạn. Cần xác định đúng bước đi phù hợp với khả năng và điều kiện thực tế của đất nước."
                },
                {
                  type: "quote",
                  text: "Thái độ của Đảng ta trong công cuộc cải tạo XHCN và xây dựng CNXH là tích cực nhưng phải vững chắc, không nóng vội, chủ quan.",
                  source: "Văn kiện Đại hội V (1982)"
                },
                {
                  type: "highlight",
                  text: "🧠 MẸO NHỚ: ĐH V = 1982 = CHẶNG ĐẦU quá độ + Nông nghiệp là HÀNG ĐẦU + Lê Duẩn = TBT"
                },
                {
                  type: "key-point",
                  text: "📌 TÓM TẮT: (1) Xác định chặng đường đầu tiên quá độ lên CNXH; (2) Nông nghiệp là mặt trận hàng đầu; (3) Lê Duẩn tiếp tục TBT; (4) Khắc phục tư duy nóng vội chủ quan."
                }
              ]
            }
          ]
        },
        /* ----------------------------
           3. Bảng so sánh Chương I
           ---------------------------- */
        {
          id: "dh-sub-1-compare",
          number: "3",
          title: "Bảng so sánh tổng hợp các kỳ Đại hội Chương I",
          parts: [
            {
              id: "dh-part-1-compare",
              label: "a",
              title: "So sánh tổng quát Đại hội I → V",
              content: [
                {
                  type: "paragraph",
                  text: "Dưới đây là bảng tổng hợp so sánh các thông số và nhiệm vụ cốt lõi của 5 kỳ Đại hội Đảng đầu tiên (giai đoạn 1935 - 1982) giúp ôn tập nhanh học thuật và trắc nghiệm:"
                },
                {
                  type: "table",
                  headers: ["Đại hội", "Thời gian & Địa điểm", "Tổng Bí thư", "Quyết sách & Từ khóa cốt lõi", "Ý nghĩa chiến lược"],
                  rows: [
                    ["**Đại hội I**", "3/1935<br>Ma Cao, Trung Quốc", "Lê Hồng Phong", "Khôi phục hệ thống tổ chức Đảng sau thời kỳ khủng bố trắng.", "Khôi phục phong trào cách mạng, củng cố niềm tin quần chúng."],
                    ["**Đại hội II**", "2/1951<br>Tuyên Quang", "Trường Chinh", "Đưa Đảng ra hoạt động công khai lấy tên **Đảng Lao động Việt Nam**; tách Đảng 3 nước Đông Dương.", "Đại hội kháng chiến đưa cuộc chiến chống thực dân Pháp đến thắng lợi."],
                    ["**Đại hội III**", "9/1960<br>Hà Nội", "Lê Duẩn", "Đề ra **Hai nhiệm vụ chiến lược**: Xây dựng miền Bắc + Giải phóng miền Nam.", "Hoàn thiện đường lối cách mạng đồng thời trên cả hai miền đất nước."],
                    ["**Đại hội IV**", "12/1976<br>Hà Nội", "Lê Duẩn", "Đổi tên lại thành **Đảng Cộng sản Việt Nam**; đưa cả nước đi lên CNXH.", "Đại hội thống nhất đất nước, mở ra kỷ nguyên cả nước đi lên CNXH."],
                    ["**Đại hội V**", "3/1982<br>Hà Nội", "Lê Duẩn", "Xác định **Chặng đường đầu tiên** của thời kỳ quá độ; coi **nông nghiệp** là mặt trận hàng đầu.", "Khắc phục một phần bệnh chủ quan nóng vội, điều chỉnh bước đi kinh tế phù hợp."]
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       II. ĐỔI MỚI ĐẤT NƯỚC (1986 - 2006)
       ============================ */
    {
      id: "dh-section-2",
      roman: "II",
      title: "Đại hội Đảng thời kỳ Đổi mới đất nước (1986 - 2006)",
      subsections: [
        /* ----------------------------
           1. ĐH VI & VII
           ---------------------------- */
        {
          id: "dh-sub-3",
          number: "1",
          title:
            "Đại hội VI (1986) và VII (1991) — Khởi xướng Đổi mới và xây dựng Cương lĩnh",
          parts: [
            /* a/ Đại hội VI */
            {
              id: "dh-part-3-1",
              label: "a",
              title: "Đại hội VI (12/1986) — Mốc son Đổi mới lịch sử",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ VI của Đảng diễn ra từ ngày 15 đến 18-12-1986 tại Thủ đô Hà Nội, với sự tham dự của 1.129 đại biểu đại diện cho gần 1.900.000 đảng viên."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 15-18/12/1986 | 📍 Địa điểm: Hà Nội | 👥 Đại biểu: 1.129 (gần 1.900.000 đảng viên)"
                },
                {
                  type: "paragraph",
                  text: "🔹 BỐI CẢNH LỊCH SỬ:"
                },
                {
                  type: "bullets",
                  items: [
                    "Trong nước: Đất nước lâm vào khủng hoảng kinh tế - xã hội trầm trọng kéo dài. Lạm phát phi mã (năm 1986 lên tới 774,7%), sản xuất đình đốn, đời sống nhân dân cực kỳ khó khăn. Cơ chế quản lý tập trung quan liêu bao cấp bộc lộ nhiều bất cập nghiêm trọng.",
                    "Quốc tế: Liên Xô tiến hành cải tổ (Perestroika) dưới thời Gorbachev. Phong trào đổi mới lan rộng trong các nước XHCN."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 NỘI DUNG & NGHỊ QUYẾT CHÍNH:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Đổi mới tư duy — Nhìn thẳng vào sự thật:",
                      bullets: [
                        "Đại hội với phương châm 'Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật'.",
                        "Thẳng thắn thừa nhận những sai lầm trong lãnh đạo kinh tế, đặc biệt là bệnh chủ quan, duy ý chí, nóng vội."
                      ]
                    },
                    {
                      number: "2",
                      title: "Đổi mới kinh tế toàn diện:",
                      bullets: [
                        "Xóa bỏ cơ chế tập trung quan liêu bao cấp, chuyển sang nền kinh tế hàng hóa nhiều thành phần vận hành theo cơ chế thị trường có sự quản lý của Nhà nước.",
                        "Thực hiện 3 chương trình kinh tế lớn: Lương thực - Thực phẩm, Hàng tiêu dùng, Hàng xuất khẩu.",
                        "Coi nông nghiệp là mặt trận hàng đầu."
                      ]
                    },
                    {
                      number: "3",
                      title: "Đổi mới hệ thống chính trị:",
                      bullets: [
                        "Phát huy quyền làm chủ của nhân dân lao động.",
                        "Đổi mới công tác cán bộ và phong cách lãnh đạo của Đảng."
                      ]
                    }
                  ]
                },
                {
                  type: "key-point",
                  text: "👤 NHÂN SỰ: Đại hội bầu đồng chí Nguyễn Văn Linh làm Tổng Bí thư Ban Chấp hành Trung ương Đảng."
                },
                {
                  type: "definition",
                  text: "✨ Ý NGHĨA LỊCH SỬ: Đại hội VI đi vào lịch sử như một dấu mốc quyết định vận mệnh đất nước, khai sinh công cuộc Đổi mới toàn diện. Đại hội thể hiện bản lĩnh chính trị và sự trung thực của Đảng khi dám nhìn thẳng vào sai lầm, tự đổi mới chính mình để đổi mới đất nước."
                },
                {
                  type: "conclusion",
                  text: "📖 BÀI HỌC KINH NGHIỆM: Phải luôn xuất phát từ thực tiễn, lấy thực tiễn làm tiêu chuẩn kiểm nghiệm chân lý. Dám nhìn thẳng vào sai lầm, tự phê bình nghiêm túc là điều kiện tiên quyết để đổi mới."
                },
                {
                  type: "quote",
                  text: "Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật.",
                  source: "Phương châm hành động Đại hội VI (1986)"
                },
                {
                  type: "highlight",
                  text: "🧠 MẸO NHỚ: ĐH VI = 12/1986 = ĐỔI MỚI = 3CT (Lương thực + Tiêu dùng + Xuất khẩu) + Nguyễn Văn Linh = TBT"
                },
                {
                  type: "key-point",
                  text: "📌 TÓM TẮT: (1) Khai sinh công cuộc Đổi mới; (2) Xóa bỏ bao cấp → kinh tế hàng hóa nhiều thành phần; (3) 3 chương trình kinh tế lớn; (4) Nguyễn Văn Linh làm TBT."
                }
              ]
            },
            /* b/ Đại hội VII */
            {
              id: "dh-part-3-2",
              label: "b",
              title:
                "Đại hội VII (6/1991) — Cương lĩnh 1991 và khẳng định TT HCM",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ VII diễn ra từ ngày 24 đến 27-6-1991 tại Thủ đô Hà Nội, với sự tham dự của 1.176 đại biểu đại diện cho hơn 2.155.000 đảng viên."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 24-27/6/1991 | 📍 Địa điểm: Hà Nội | 👥 Đại biểu: 1.176 (hơn 2.155.000 đảng viên)"
                },
                {
                  type: "paragraph",
                  text: "🔹 BỐI CẢNH LỊCH SỬ:"
                },
                {
                  type: "bullets",
                  items: [
                    "Quốc tế: Cuối năm 1989 - 1991, Liên Xô tan rã, hệ thống XHCN ở Đông Âu sụp đổ. Chủ nghĩa xã hội trên thế giới lâm vào thoái trào nghiêm trọng, nhiều đảng cộng sản mất quyền lãnh đạo.",
                    "Trong nước: Việt Nam đứng trước ngã ba đường — tiếp tục con đường CNXH hay chuyển hướng? Bước đầu đạt một số thành tựu Đổi mới (lạm phát giảm từ 774% xuống 67%, lương thực từ thiếu ăn chuyển sang xuất khẩu gạo)."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 NỘI DUNG & NGHỊ QUYẾT CHÍNH:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title:
                        "Thông qua Cương lĩnh xây dựng đất nước 1991:",
                      bullets: [
                        "Xác định mô hình CNXH và con đường đi lên CNXH ở Việt Nam.",
                        "Đây là cương lĩnh chính trị nền tảng đầu tiên của Đảng trong thời kỳ Đổi mới."
                      ]
                    },
                    {
                      number: "2",
                      title: "Khẳng định nền tảng tư tưởng:",
                      bullets: [
                        "Lần đầu tiên chính thức khẳng định lấy chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng.",
                        "Đưa tư tưởng Hồ Chí Minh vào vị trí ngang hàng với chủ nghĩa Mác-Lênin."
                      ]
                    },
                    {
                      number: "3",
                      title: "Chiến lược ổn định và phát triển:",
                      bullets: [
                        "Thông qua Chiến lược ổn định và phát triển kinh tế - xã hội đến năm 2000.",
                        "Tiếp tục đường lối Đổi mới với phương châm: Kiên định mục tiêu CNXH, đổi mới phương pháp."
                      ]
                    }
                  ]
                },
                {
                  type: "key-point",
                  text: "👤 NHÂN SỰ: Đại hội bầu đồng chí Đỗ Mười làm Tổng Bí thư Ban Chấp hành Trung ương Đảng."
                },
                {
                  type: "definition",
                  text: "✨ Ý NGHĨA LỊCH SỬ: Đại hội VII có ý nghĩa đặc biệt quan trọng khi kiên định con đường CNXH giữa lúc CNXH thế giới lâm vào thoái trào. Việc thông qua Cương lĩnh 1991 và khẳng định TT HCM là nền tảng tư tưởng đã tạo ra bước ngoặt lý luận của Đảng."
                },
                {
                  type: "conclusion",
                  text: "📖 BÀI HỌC KINH NGHIỆM: Trong bất kỳ tình huống nào, phải kiên định mục tiêu lý tưởng CNXH, đồng thời linh hoạt đổi mới phương pháp và cách thức thực hiện. Nền tảng tư tưởng vững chắc là 'kim chỉ nam' giữa sóng gió thời đại."
                },
                {
                  type: "quote",
                  text: "Đảng lấy chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động.",
                  source: "Cương lĩnh xây dựng đất nước (1991)"
                },
                {
                  type: "highlight",
                  text: "🧠 MẸO NHỚ: ĐH VII = 6/1991 = CƯƠNG LĨNH 1991 + TT HCM = NỀN TẢNG + Đỗ Mười = TBT"
                },
                {
                  type: "key-point",
                  text: "📌 TÓM TẮT: (1) Thông qua Cương lĩnh 1991 — cương lĩnh đầu tiên thời Đổi mới; (2) Lần đầu khẳng định TT HCM là nền tảng tư tưởng; (3) Đỗ Mười làm TBT; (4) Kiên định CNXH giữa thoái trào."
                }
              ]
            }
          ]
        },
        /* ----------------------------
           2. ĐH VIII, IX, X
           ---------------------------- */
        {
          id: "dh-sub-4",
          number: "2",
          title:
            "Đại hội VIII (1996), IX (2001) và X (2006) — Công nghiệp hóa, hiện đại hóa và hội nhập quốc tế",
          parts: [
            /* a/ Đại hội VIII */
            {
              id: "dh-part-4-1",
              label: "a",
              title: "Đại hội VIII (6/1996) — Đẩy mạnh CNH-HĐH đất nước",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ VIII diễn ra từ ngày 28-6 đến 1-7-1996 tại Thủ đô Hà Nội, với sự tham dự của 1.198 đại biểu đại diện cho hơn 2.130.000 đảng viên."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 28/6 - 1/7/1996 | 📍 Địa điểm: Hà Nội | 👥 Đại biểu: 1.198 (hơn 2.130.000 đảng viên)"
                },
                {
                  type: "paragraph",
                  text: "🔹 BỐI CẢNH LỊCH SỬ:"
                },
                {
                  type: "bullets",
                  items: [
                    "Trong nước: Sau 10 năm Đổi mới (1986-1996), Việt Nam đạt nhiều thành tựu quan trọng: GDP tăng trưởng liên tục 7-8%/năm, lạm phát được kiểm soát, an ninh lương thực đảm bảo, xuất khẩu gạo. Bình thường hóa quan hệ Việt - Mỹ (7/1995), gia nhập ASEAN (7/1995).",
                    "Quốc tế: Xu thế toàn cầu hóa tăng nhanh, cách mạng khoa học - công nghệ phát triển mạnh mẽ, mở ra cơ hội CNH cho các nước đang phát triển."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 NỘI DUNG & NGHỊ QUYẾT CHÍNH:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Tổng kết 10 năm Đổi mới:",
                      bullets: [
                        "Khẳng định đường lối Đổi mới của Đại hội VI là hoàn toàn đúng đắn.",
                        "Nêu 6 bài học chủ yếu của 10 năm Đổi mới."
                      ]
                    },
                    {
                      number: "2",
                      title: "Đẩy mạnh CNH-HĐH:",
                      bullets: [
                        "Đại hội nhận định đất nước đã thoát khỏi khủng hoảng, có điều kiện chuyển sang thời kỳ mới: đẩy mạnh công nghiệp hóa, hiện đại hóa.",
                        "Mục tiêu: Đến năm 2020, cơ bản trở thành nước công nghiệp theo hướng hiện đại."
                      ]
                    },
                    {
                      number: "3",
                      title: "Chiến lược phát triển 2001-2010:",
                      bullets: [
                        "Phát triển kinh tế nhiều thành phần, xây dựng Nhà nước pháp quyền XHCN.",
                        "Mở rộng quan hệ đối ngoại theo phương châm đa phương hóa, đa dạng hóa."
                      ]
                    }
                  ]
                },
                {
                  type: "key-point",
                  text: "👤 NHÂN SỰ: Đại hội bầu lại đồng chí Đỗ Mười làm Tổng Bí thư (tại Hội nghị TW 4 khóa VIII, 12/1997, đồng chí Lê Khả Phiêu được bầu thay)."
                },
                {
                  type: "definition",
                  text: "✨ Ý NGHĨA LỊCH SỬ: Đại hội VIII là Đại hội tổng kết 10 năm Đổi mới, khẳng định thành tựu và chuyển đất nước sang giai đoạn phát triển mới — đẩy mạnh CNH-HĐH. Đây là bước chuyển chiến lược quan trọng từ thoát khỏi khủng hoảng sang phát triển."
                },
                {
                  type: "conclusion",
                  text: "📖 BÀI HỌC KINH NGHIỆM: Đổi mới phải toàn diện, đồng bộ, có bước đi thích hợp. CNH-HĐH phải gắn liền với phát triển kinh tế tri thức và hội nhập quốc tế."
                },
                {
                  type: "quote",
                  text: "Nước ta đã ra khỏi khủng hoảng kinh tế - xã hội, nhưng một số mặt còn chưa vững chắc.",
                  source: "Văn kiện Đại hội VIII (1996)"
                },
                {
                  type: "highlight",
                  text: "🧠 MẸO NHỚ: ĐH VIII = 1996 = 10 NĂM Đổi Mới + CNH-HĐH bắt đầu + ASEAN + Mỹ bình thường hóa"
                },
                {
                  type: "key-point",
                  text: "📌 TÓM TẮT: (1) Tổng kết 10 năm Đổi mới thành công; (2) Chuyển sang đẩy mạnh CNH-HĐH; (3) Đỗ Mười → Lê Khả Phiêu làm TBT; (4) Gia nhập ASEAN, bình thường hóa quan hệ Mỹ."
                }
              ]
            },
            /* b/ Đại hội IX */
            {
              id: "dh-part-4-2",
              label: "b",
              title:
                "Đại hội IX (4/2001) — Kinh tế thị trường định hướng XHCN",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ IX diễn ra từ ngày 19 đến 22-4-2001 tại Thủ đô Hà Nội, với sự tham dự của 1.168 đại biểu đại diện cho khoảng 2.479.000 đảng viên."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 19-22/4/2001 | 📍 Địa điểm: Hà Nội | 👥 Đại biểu: 1.168 (khoảng 2.479.000 đảng viên)"
                },
                {
                  type: "paragraph",
                  text: "🔹 BỐI CẢNH LỊCH SỬ:"
                },
                {
                  type: "bullets",
                  items: [
                    "Trong nước: Việt Nam vượt qua tác động của cuộc khủng hoảng tài chính châu Á (1997) tương đối ổn định. 15 năm Đổi mới đạt nhiều thành tựu quan trọng nhưng cũng bộc lộ yếu kém: tham nhũng, lãng phí, khoảng cách giàu nghèo gia tăng.",
                    "Quốc tế: Thế giới bước vào thế kỷ XXI với xu hướng toàn cầu hóa mạnh mẽ, cách mạng công nghệ thông tin bùng nổ."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 NỘI DUNG & NGHỊ QUYẾT CHÍNH:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Xác định mô hình kinh tế tổng quát:",
                      bullets: [
                        "Lần đầu tiên nêu rõ khái niệm 'kinh tế thị trường định hướng xã hội chủ nghĩa'.",
                        "Kinh tế thị trường XHCN = kinh tế thị trường + định hướng XHCN (do Nhà nước quản lý, theo định hướng XHCN)."
                      ]
                    },
                    {
                      number: "2",
                      title: "Hoàn thiện nhận thức về TT HCM:",
                      bullets: [
                        "Bổ sung, phát triển định nghĩa TT HCM so với Đại hội VII.",
                        "Khẳng định TT HCM soi đường cho cuộc đấu tranh giành thắng lợi của nhân dân ta."
                      ]
                    },
                    {
                      number: "3",
                      title: "Chiến lược phát triển:",
                      bullets: [
                        "Chiến lược phát triển kinh tế - xã hội 2001-2010: CNH-HĐH gắn với phát triển kinh tế tri thức.",
                        "Mở rộng quan hệ đối ngoại, chủ động hội nhập kinh tế quốc tế."
                      ]
                    }
                  ]
                },
                {
                  type: "key-point",
                  text: "👤 NHÂN SỰ: Đại hội bầu đồng chí Nông Đức Mạnh làm Tổng Bí thư Ban Chấp hành Trung ương Đảng."
                },
                {
                  type: "definition",
                  text: "✨ Ý NGHĨA LỊCH SỬ: Đại hội IX đánh dấu bước phát triển mới trong nhận thức lý luận của Đảng khi lần đầu tiên xác lập khái niệm 'kinh tế thị trường định hướng XHCN' — mô hình kinh tế tổng quát của Việt Nam trong suốt thời kỳ quá độ."
                },
                {
                  type: "conclusion",
                  text: "📖 BÀI HỌC KINH NGHIỆM: Phải không ngừng tổng kết thực tiễn, phát triển lý luận để tìm ra mô hình phát triển phù hợp. Kinh tế thị trường không đối lập với CNXH mà là phương tiện để đạt mục tiêu XHCN."
                },
                {
                  type: "quote",
                  text: "Đảng và Nhà nước ta chủ trương phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa.",
                  source: "Văn kiện Đại hội IX (2001)"
                },
                {
                  type: "highlight",
                  text: "🧠 MẸO NHỚ: ĐH IX = 4/2001 = KINH TẾ THỊ TRƯỜNG XHCN (lần đầu) + Nông Đức Mạnh = TBT"
                },
                {
                  type: "key-point",
                  text: "📌 TÓM TẮT: (1) Lần đầu nêu rõ 'kinh tế thị trường định hướng XHCN'; (2) Hoàn thiện định nghĩa TT HCM; (3) Nông Đức Mạnh làm TBT; (4) CNH-HĐH gắn kinh tế tri thức."
                }
              ]
            },
            /* c/ Đại hội X */
            {
              id: "dh-part-4-3",
              label: "c",
              title:
                "Đại hội X (4/2006) — Hội nhập kinh tế quốc tế toàn diện",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ X diễn ra từ ngày 18 đến 25-4-2006 tại Thủ đô Hà Nội, với sự tham dự của 1.176 đại biểu đại diện cho hơn 3.100.000 đảng viên."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 18-25/4/2006 | 📍 Địa điểm: Hà Nội | 👥 Đại biểu: 1.176 (hơn 3.100.000 đảng viên)"
                },
                {
                  type: "paragraph",
                  text: "🔹 BỐI CẢNH LỊCH SỬ:"
                },
                {
                  type: "bullets",
                  items: [
                    "Trong nước: 20 năm Đổi mới (1986-2006) đạt thành tựu to lớn và có ý nghĩa lịch sử. GDP tăng gấp nhiều lần, xuất khẩu tăng mạnh, đời sống nhân dân cải thiện rõ rệt. Việt Nam đang đàm phán gia nhập WTO (chính thức vào 11/2006).",
                    "Quốc tế: Toàn cầu hóa sâu rộng, cạnh tranh kinh tế quốc tế gay gắt, đòi hỏi nâng cao năng lực cạnh tranh quốc gia."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 NỘI DUNG & NGHỊ QUYẾT CHÍNH:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Tổng kết 20 năm Đổi mới:",
                      bullets: [
                        "Khẳng định 20 năm Đổi mới là sự nghiệp cách mạng sáng tạo của Đảng và nhân dân ta, đạt thành tựu to lớn và có ý nghĩa lịch sử.",
                        "Rút ra 5 bài học lớn của 20 năm Đổi mới."
                      ]
                    },
                    {
                      number: "2",
                      title: "Hội nhập kinh tế quốc tế toàn diện:",
                      bullets: [
                        "Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng.",
                        "Chủ động và tích cực hội nhập kinh tế quốc tế toàn diện.",
                        "Cho phép đảng viên làm kinh tế tư nhân — bước đột phá về tư duy."
                      ]
                    },
                    {
                      number: "3",
                      title: "Phát triển kinh tế - xã hội:",
                      bullets: [
                        "Hoàn thiện thể chế kinh tế thị trường định hướng XHCN.",
                        "Đẩy mạnh CNH-HĐH gắn với phát triển kinh tế tri thức."
                      ]
                    }
                  ]
                },
                {
                  type: "key-point",
                  text: "👤 NHÂN SỰ: Đại hội bầu lại đồng chí Nông Đức Mạnh làm Tổng Bí thư Ban Chấp hành Trung ương Đảng."
                },
                {
                  type: "definition",
                  text: "✨ Ý NGHĨA LỊCH SỬ: Đại hội X là Đại hội tổng kết 20 năm Đổi mới, đánh dấu bước đột phá tư duy khi cho phép đảng viên làm kinh tế tư nhân, mở rộng quyền tham gia kinh tế. Việc chủ động hội nhập WTO thể hiện quyết tâm đưa Việt Nam bước vào sân chơi kinh tế toàn cầu."
                },
                {
                  type: "conclusion",
                  text: "📖 BÀI HỌC KINH NGHIỆM: Hội nhập quốc tế là xu thế tất yếu, phải chủ động, tích cực nhưng vẫn giữ vững độc lập, tự chủ và bản sắc dân tộc. Đổi mới tư duy phải dũng cảm phá bỏ rào cản lỗi thời."
                },
                {
                  type: "quote",
                  text: "Toàn Đảng, toàn dân ta đoàn kết một lòng, nắm bắt thời cơ, vượt qua thách thức, tiếp tục đổi mới mạnh mẽ, toàn diện và đồng bộ hơn.",
                  source: "Văn kiện Đại hội X (2006)"
                },
                {
                  type: "highlight",
                  text: "🧠 MẸO NHỚ: ĐH X = 4/2006 = 20 NĂM Đổi mới + WTO + Đảng viên làm kinh tế TƯ NHÂN + Nông Đức Mạnh = TBT"
                },
                {
                  type: "key-point",
                  text: "📌 TÓM TẮT: (1) Tổng kết 20 năm Đổi mới thành công; (2) Gia nhập WTO (11/2006); (3) Cho phép đảng viên làm kinh tế tư nhân; (4) Nông Đức Mạnh tiếp tục TBT."
                }
              ]
            }
          ]
        },
        /* ----------------------------
           3. Bảng so sánh Chương II
           ---------------------------- */
        {
          id: "dh-sub-2-compare",
          number: "3",
          title: "Bảng so sánh tổng hợp các kỳ Đại hội Chương II",
          parts: [
            {
              id: "dh-part-2-compare",
              label: "a",
              title: "So sánh tổng quát Đại hội VI → X",
              content: [
                {
                  type: "paragraph",
                  text: "Dưới đây là bảng tổng hợp so sánh các thông số và quyết sách then chốt của 5 kỳ Đại hội Đảng thời kỳ đầu Đổi mới (giai đoạn 1986 - 2006):"
                },
                {
                  type: "table",
                  headers: ["Đại hội", "Thời gian & Địa điểm", "Tổng Bí thư", "Quyết sách & Từ khóa cốt lõi", "Ý nghĩa chiến lược"],
                  rows: [
                    ["**Đại hội VI**", "12/1986<br>Hà Nội", "Nguyễn Văn Linh", "Khởi xướng **Đổi mới toàn diện**; thực hiện **3 chương trình kinh tế lớn** (Lương thực - Thực phẩm, Hàng tiêu dùng, Hàng xuất khẩu); xóa bao cấp.", "Mốc son lịch sử cứu đất nước khỏi khủng hoảng kinh tế - xã hội trầm trọng."],
                    ["**Đại hội VII**", "6/1991<br>Hà Nội", "Đỗ Mười", "Thông qua **Cương lĩnh xây dựng đất nước 1991**; khẳng định lấy chủ nghĩa Mác-Lênin và **Tư tưởng Hồ Chí Minh** làm nền tảng tư tưởng.", "Kiên định con đường đi lên CNXH giữa bối cảnh Liên Xô sụp đổ, tạo nền tảng lý luận vững chắc."],
                    ["**Đại hội VIII**", "6/1996<br>Hà Nội", "Đỗ Mười<br>(sau là Lê Khả Phiêu)", "Chuyển sang giai đoạn đẩy mạnh **Công nghiệp hóa, Hiện đại hóa (CNH-HĐH)**; đặt mục tiêu cơ bản trở thành nước công nghiệp vào năm 2020.", "Đất nước chính thức thoát khỏi khủng hoảng kinh tế - xã hội, mở ra thời kỳ hội nhập mới."],
                    ["**Đại hội IX**", "4/2001<br>Hà Nội", "Nông Đức Mạnh", "Xác định mô hình kinh tế tổng quát là **Kinh tế thị trường định hướng XHCN**; hoàn thiện lý luận về Tư tưởng Hồ Chí Minh.", "Đột phá lý luận về việc sử dụng cơ chế thị trường làm phương tiện xây dựng CNXH."],
                    ["**Đại hội X**", "4/2006<br>Hà Nội", "Nông Đức Mạnh", "Cho phép **đảng viên làm kinh tế tư nhân**; chủ động hội nhập kinh tế quốc tế toàn diện (gia nhập WTO).", "Bước chuyển tư duy cởi mở mạnh mẽ về thành phần kinh tế và mở cửa sâu rộng ra thế giới."]
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       III. HỘI NHẬP VÀ PHÁT TRIỂN BỀN VỮNG (2011 - NAY)
       ============================ */
    {
      id: "dh-section-3",
      roman: "III",
      title:
        "Đại hội Đảng thời kỳ Hội nhập quốc tế sâu rộng và Phát triển bền vững (2011 - nay)",
      subsections: [
        /* ----------------------------
           1. ĐH XI & XII
           ---------------------------- */
        {
          id: "dh-sub-5",
          number: "1",
          title:
            "Đại hội XI (2011) và XII (2016) — Cương lĩnh bổ sung và phòng chống tham nhũng",
          parts: [
            /* a/ Đại hội XI */
            {
              id: "dh-part-5-1",
              label: "a",
              title:
                "Đại hội XI (1/2011) — Cương lĩnh bổ sung, phát triển 2011",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ XI diễn ra từ ngày 12 đến 19-1-2011 tại Thủ đô Hà Nội, với sự tham dự của 1.377 đại biểu đại diện cho hơn 3.600.000 đảng viên."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 12-19/1/2011 | 📍 Địa điểm: Hà Nội | 👥 Đại biểu: 1.377 (hơn 3.600.000 đảng viên)"
                },
                {
                  type: "paragraph",
                  text: "🔹 BỐI CẢNH LỊCH SỬ:"
                },
                {
                  type: "bullets",
                  items: [
                    "Trong nước: Kinh tế vĩ mô bất ổn sau ảnh hưởng khủng hoảng tài chính toàn cầu 2008. Lạm phát tăng cao, bội chi ngân sách, nợ công có xu hướng tăng. Bên cạnh đó, các thành tựu của 25 năm Đổi mới là to lớn.",
                    "Quốc tế: Thế giới chịu tác động sâu sắc của khủng hoảng tài chính toàn cầu 2008-2009. Cạnh tranh chiến lược giữa các nước lớn gia tăng, biến đổi khí hậu trở thành thách thức toàn cầu."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 NỘI DUNG & NGHỊ QUYẾT CHÍNH:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title:
                        "Thông qua Cương lĩnh bổ sung, phát triển năm 2011:",
                      bullets: [
                        "Bổ sung, phát triển Cương lĩnh 1991 với những nhận thức mới về CNXH và con đường đi lên CNXH ở Việt Nam.",
                        "Xác định 8 đặc trưng của xã hội XHCN mà Việt Nam xây dựng (nổi bật: 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh').",
                        "Nêu 8 phương hướng cơ bản và các mối quan hệ lớn cần nắm vững giải quyết."
                      ]
                    },
                    {
                      number: "2",
                      title: "Chiến lược phát triển 2011-2020:",
                      bullets: [
                        "Thông qua Chiến lược phát triển kinh tế - xã hội 2011-2020.",
                        "Xác định 3 đột phá chiến lược: Thể chế, Nguồn nhân lực, Hạ tầng."
                      ]
                    }
                  ]
                },
                {
                  type: "key-point",
                  text: "👤 NHÂN SỰ: Đại hội bầu đồng chí Nguyễn Phú Trọng làm Tổng Bí thư Ban Chấp hành Trung ương Đảng."
                },
                {
                  type: "definition",
                  text: "✨ Ý NGHĨA LỊCH SỬ: Đại hội XI hoàn thiện hệ thống lý luận về CNXH và con đường đi lên CNXH ở Việt Nam thông qua Cương lĩnh bổ sung 2011. Đại hội đánh dấu sự trưởng thành vượt bậc trong nhận thức lý luận của Đảng sau 25 năm Đổi mới."
                },
                {
                  type: "conclusion",
                  text: "📖 BÀI HỌC KINH NGHIỆM: Cương lĩnh phải được bổ sung, phát triển theo thời gian để phù hợp với thực tiễn mới. 3 đột phá chiến lược (Thể chế, Nhân lực, Hạ tầng) là chìa khóa then chốt cho phát triển."
                },
                {
                  type: "quote",
                  text: "Xã hội xã hội chủ nghĩa mà nhân dân ta xây dựng là xã hội: Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
                  source: "Cương lĩnh bổ sung, phát triển năm 2011"
                },
                {
                  type: "highlight",
                  text: "🧠 MẸO NHỚ: ĐH XI = 1/2011 = CƯƠNG LĨNH BỔ SUNG + 8 đặc trưng + 3 đột phá + Nguyễn Phú Trọng = TBT"
                },
                {
                  type: "key-point",
                  text: "📌 TÓM TẮT: (1) Cương lĩnh bổ sung, phát triển 2011; (2) 8 đặc trưng XHCN + 8 phương hướng; (3) 3 đột phá chiến lược; (4) Nguyễn Phú Trọng làm TBT."
                }
              ]
            },
            /* b/ Đại hội XII */
            {
              id: "dh-part-5-2",
              label: "b",
              title:
                "Đại hội XII (1/2016) — Phòng chống tham nhũng và 6 nhiệm vụ trọng tâm",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ XII diễn ra từ ngày 20 đến 28-1-2016 tại Thủ đô Hà Nội, với sự tham dự của 1.510 đại biểu đại diện cho hơn 4.600.000 đảng viên."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 20-28/1/2016 | 📍 Địa điểm: Hà Nội | 👥 Đại biểu: 1.510 (hơn 4.600.000 đảng viên)"
                },
                {
                  type: "paragraph",
                  text: "🔹 BỐI CẢNH LỊCH SỬ:"
                },
                {
                  type: "bullets",
                  items: [
                    "Trong nước: Kinh tế phục hồi tương đối sau khủng hoảng, GDP tăng trưởng ổn định. Việt Nam ký kết nhiều FTA quan trọng (TPP, EVFTA), hội nhập quốc tế sâu rộng chưa từng có. Tuy nhiên, tham nhũng vẫn là vấn đề nghiêm trọng.",
                    "Quốc tế: Tình hình thế giới và khu vực có nhiều diễn biến phức tạp, tranh chấp Biển Đông gia tăng, cạnh tranh nước lớn gay gắt."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 NỘI DUNG & NGHỊ QUYẾT CHÍNH:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "6 nhiệm vụ trọng tâm:",
                      bullets: [
                        "Tăng cường xây dựng, chỉnh đốn Đảng; ngăn chặn, đẩy lùi sự suy thoái tư tưởng chính trị, đạo đức.",
                        "Xây dựng tổ chức bộ máy tinh gọn, hoạt động hiệu lực hiệu quả.",
                        "Phòng chống tham nhũng, lãng phí với quyết tâm chính trị cao nhất.",
                        "Tập trung phát triển kinh tế, bảo đảm an sinh xã hội.",
                        "Bảo vệ vững chắc chủ quyền quốc gia.",
                        "Thu hút, trọng dụng nhân tài."
                      ]
                    },
                    {
                      number: "2",
                      title: "Đẩy mạnh phòng chống tham nhũng:",
                      bullets: [
                        "Xác định phòng chống tham nhũng là nhiệm vụ trọng tâm, thường xuyên của công tác xây dựng Đảng.",
                        "Nguyên tắc: 'Không có vùng cấm, không có ngoại lệ'."
                      ]
                    }
                  ]
                },
                {
                  type: "key-point",
                  text: "👤 NHÂN SỰ: Đại hội bầu lại đồng chí Nguyễn Phú Trọng làm Tổng Bí thư Ban Chấp hành Trung ương Đảng (nhiệm kỳ thứ 2)."
                },
                {
                  type: "definition",
                  text: "✨ Ý NGHĨA LỊCH SỬ: Đại hội XII đánh dấu quyết tâm chính trị cao nhất trong phòng chống tham nhũng với phương châm 'không có vùng cấm'. Đại hội đề ra 6 nhiệm vụ trọng tâm mang tính chiến lược cho nhiệm kỳ 2016-2021."
                },
                {
                  type: "conclusion",
                  text: "📖 BÀI HỌC KINH NGHIỆM: Xây dựng Đảng trong sạch, vững mạnh là nhiệm vụ then chốt. Phòng chống tham nhũng phải kiên quyết, kiên trì, không có vùng cấm, kết hợp giữa 'xây' và 'chống'."
                },
                {
                  type: "quote",
                  text: "Phải có quyết tâm chính trị rất cao, lò đã nóng lên rồi thì củi tươi vào cũng phải cháy.",
                  source: "Tổng Bí thư Nguyễn Phú Trọng"
                },
                {
                  type: "highlight",
                  text: "🧠 MẸO NHỚ: ĐH XII = 1/2016 = 6 NHIỆM VỤ + CHỐNG THAM NHŨNG 'không vùng cấm' + Nguyễn Phú Trọng = TBT (nhiệm kỳ 2)"
                },
                {
                  type: "key-point",
                  text: "📌 TÓM TẮT: (1) 6 nhiệm vụ trọng tâm; (2) Phòng chống tham nhũng 'không vùng cấm'; (3) Nguyễn Phú Trọng tiếp tục TBT; (4) Ký nhiều FTA lớn (TPP, EVFTA)."
                }
              ]
            }
          ]
        },
        /* ----------------------------
           2. ĐH XIII & XIV
           ---------------------------- */
        {
          id: "dh-sub-6",
          number: "2",
          title:
            "Đại hội XIII (2021) và XIV (2026) — Khát vọng phồn vinh và Kỷ nguyên vươn mình",
          parts: [
            /* a/ Đại hội XIII */
            {
              id: "dh-part-6-1",
              label: "a",
              title:
                "Đại hội XIII (1/2021) — Khát vọng phát triển đất nước phồn vinh, hạnh phúc",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ XIII diễn ra từ ngày 25-1 đến 1-2-2021 tại Thủ đô Hà Nội, với sự tham dự của 1.587 đại biểu đại diện cho hơn 5.100.000 đảng viên."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 25/1 - 1/2/2021 | 📍 Địa điểm: Hà Nội | 👥 Đại biểu: 1.587 (hơn 5.100.000 đảng viên)"
                },
                {
                  type: "paragraph",
                  text: "🔹 BỐI CẢNH LỊCH SỬ:"
                },
                {
                  type: "bullets",
                  items: [
                    "Trong nước: 35 năm Đổi mới (1986-2021) đạt thành tựu to lớn, có ý nghĩa lịch sử. GDP bình quân đầu người đạt khoảng 2.779 USD. Việt Nam được đánh giá cao trong phòng chống dịch COVID-19 (giai đoạn đầu).",
                    "Quốc tế: Đại dịch COVID-19 gây khủng hoảng toàn cầu. Cạnh tranh chiến lược Mỹ - Trung leo thang. Cách mạng công nghiệp 4.0 tạo cơ hội và thách thức mới."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 NỘI DUNG & NGHỊ QUYẾT CHÍNH:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Tầm nhìn dài hạn:",
                      bullets: [
                        "Đến năm 2025 (45 năm Đổi mới): Nước đang phát triển, vượt qua mức thu nhập trung bình thấp.",
                        "Đến năm 2030 (100 năm thành lập Đảng): Nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao.",
                        "Đến năm 2045 (100 năm thành lập nước): Nước phát triển, thu nhập cao."
                      ]
                    },
                    {
                      number: "2",
                      title: "Khơi dậy khát vọng phát triển:",
                      bullets: [
                        "Khơi dậy mạnh mẽ tinh thần yêu nước, ý chí tự cường dân tộc, sức mạnh đại đoàn kết.",
                        "Khát vọng phát triển đất nước phồn vinh, hạnh phúc.",
                        "Phát huy ý chí, nghị lực, sức sáng tạo của con người Việt Nam."
                      ]
                    },
                    {
                      number: "3",
                      title:
                        "6 nhiệm vụ trọng tâm và 3 đột phá chiến lược:",
                      bullets: [
                        "Tiếp tục 3 đột phá: Thể chế, Nhân lực, Hạ tầng.",
                        "Đẩy mạnh chuyển đổi số quốc gia, phát triển kinh tế số, xã hội số."
                      ]
                    }
                  ]
                },
                {
                  type: "key-point",
                  text: "👤 NHÂN SỰ: Đại hội bầu lại đồng chí Nguyễn Phú Trọng làm Tổng Bí thư Ban Chấp hành Trung ương Đảng (nhiệm kỳ thứ 3 — trường hợp đặc biệt)."
                },
                {
                  type: "definition",
                  text: "✨ Ý NGHĨA LỊCH SỬ: Đại hội XIII lần đầu tiên đề ra tầm nhìn dài hạn đến 2045 với 3 mốc phát triển cụ thể, khơi dậy khát vọng phát triển đất nước phồn vinh, hạnh phúc. Đại hội thể hiện tầm nhìn chiến lược và sự trưởng thành trong tư duy lãnh đạo."
                },
                {
                  type: "conclusion",
                  text: "📖 BÀI HỌC KINH NGHIỆM: Phải có tầm nhìn dài hạn, chiến lược nhưng kế hoạch hành động phải cụ thể, có lộ trình rõ ràng. Khát vọng phát triển phải được chuyển hóa thành hành động thực tiễn ở mọi cấp, mọi ngành."
                },
                {
                  type: "quote",
                  text: "Khơi dậy mạnh mẽ tinh thần yêu nước, ý chí tự cường dân tộc, sức mạnh đại đoàn kết toàn dân tộc và khát vọng phát triển đất nước phồn vinh, hạnh phúc.",
                  source: "Văn kiện Đại hội XIII (2021)"
                },
                {
                  type: "highlight",
                  text: "🧠 MẸO NHỚ: ĐH XIII = 1/2021 = KHÁT VỌNG + 2030 (TN trung bình cao) + 2045 (phát triển) + Nguyễn Phú Trọng = TBT (NK3 đặc biệt)"
                },
                {
                  type: "key-point",
                  text: "📌 TÓM TẮT: (1) Tầm nhìn 2025-2030-2045; (2) Khơi dậy khát vọng phồn vinh, hạnh phúc; (3) Nguyễn Phú Trọng TBT nhiệm kỳ 3; (4) Chuyển đổi số quốc gia."
                }
              ]
            },
            /* b/ Đại hội XIV */
            {
              id: "dh-part-6-2",
              label: "b",
              title:
                "Đại hội XIV (1/2026) — Kỷ nguyên vươn mình của dân tộc",
              content: [
                {
                  type: "paragraph",
                  text: "Đại hội đại biểu toàn quốc lần thứ XIV của Đảng diễn ra từ ngày 13 đến 17-1-2026 tại Thủ đô Hà Nội, với sự tham dự của 1.018 đại biểu đại diện cho hơn 5.500.000 đảng viên trong toàn Đảng."
                },
                {
                  type: "highlight",
                  text: "⏰ Thời gian: 13-17/1/2026 | 📍 Địa điểm: Hà Nội | 👥 Đại biểu: 1.018 (hơn 5.500.000 đảng viên)"
                },
                {
                  type: "paragraph",
                  text: "🔹 BỐI CẢNH LỊCH SỬ:"
                },
                {
                  type: "bullets",
                  items: [
                    "Trong nước: Giai đoạn 2021-2025, Việt Nam vượt qua đại dịch COVID-19, phục hồi kinh tế mạnh mẽ. GDP đạt tốc độ tăng trưởng cao, quy mô kinh tế thuộc Top 35 thế giới. Công cuộc phòng chống tham nhũng đạt kết quả chưa từng có, củng cố niềm tin của nhân dân. Tổng Bí thư Nguyễn Phú Trọng từ trần (7/2024), để lại di sản lớn.",
                    "Quốc tế: Kỷ nguyên chuyển đổi số toàn cầu, cách mạng trí tuệ nhân tạo (AI) bùng nổ, cạnh tranh công nghệ giữa các cường quốc. Việt Nam nâng cấp quan hệ Đối tác Chiến lược toàn diện với nhiều nước lớn (Mỹ, Nhật Bản, Úc...)."
                  ]
                },
                {
                  type: "paragraph",
                  text: "🔹 NỘI DUNG & NGHỊ QUYẾT CHÍNH:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title:
                        "Kỷ nguyên mới — Kỷ nguyên vươn mình của dân tộc:",
                      bullets: [
                        "Xác định Việt Nam bước vào kỷ nguyên mới — Kỷ nguyên vươn mình của dân tộc Việt Nam.",
                        "Phát huy mạnh mẽ tinh thần tự lực, tự cường, đổi mới sáng tạo để phát triển nhanh, bền vững.",
                        "Hiện thực hóa mục tiêu đến năm 2030 trở thành nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao."
                      ]
                    },
                    {
                      number: "2",
                      title: "Hoàn thiện thể chế và chuyển đổi số:",
                      bullets: [
                        "Đẩy mạnh hoàn thiện thể chế phát triển, coi thể chế là 'đột phá của đột phá'.",
                        "Chuyển đổi số toàn diện quốc gia, phát triển kinh tế số, chính phủ số, xã hội số.",
                        "Tinh gọn bộ máy tổ chức hệ thống chính trị theo tinh thần cách mạng."
                      ]
                    },
                    {
                      number: "3",
                      title: "Phát triển nguồn nhân lực và khoa học công nghệ:",
                      bullets: [
                        "Xây dựng nguồn nhân lực chất lượng cao, đặc biệt trong lĩnh vực công nghệ cao, AI, bán dẫn.",
                        "Đẩy mạnh phát triển khoa học - công nghệ và đổi mới sáng tạo làm động lực phát triển.",
                        "Thu hút và trọng dụng nhân tài trong nước và quốc tế."
                      ]
                    }
                  ]
                },
                {
                  type: "key-point",
                  text: "👤 NHÂN SỰ: Đại hội bầu đồng chí Tô Lâm làm Tổng Bí thư Ban Chấp hành Trung ương Đảng khóa XIV."
                },
                {
                  type: "definition",
                  text: "✨ Ý NGHĨA LỊCH SỬ: Đại hội XIV mở ra Kỷ nguyên vươn mình của dân tộc Việt Nam, đánh dấu bước chuyển chiến lược từ 'đổi mới' sang 'vươn mình'. Đại hội kế thừa di sản của Tổng Bí thư Nguyễn Phú Trọng, tiếp tục kiên định con đường CNXH với quyết tâm đưa Việt Nam phát triển nhanh, bền vững trong kỷ nguyên mới."
                },
                {
                  type: "conclusion",
                  text: "📖 BÀI HỌC KINH NGHIỆM: Kỷ nguyên mới đòi hỏi tư duy mới, cách làm mới, dám nghĩ dám làm. Thể chế phải đi trước mở đường, nguồn nhân lực chất lượng cao và khoa học công nghệ là động lực then chốt. Tinh gọn bộ máy, nâng cao hiệu lực hiệu quả là yêu cầu cấp bách."
                },
                {
                  type: "quote",
                  text: "Kỷ nguyên vươn mình của dân tộc Việt Nam — kỷ nguyên phát triển, kỷ nguyên giàu mạnh dưới sự lãnh đạo, cầm quyền của Đảng Cộng sản Việt Nam.",
                  source: "Văn kiện Đại hội XIV (2026)"
                },
                {
                  type: "highlight",
                  text: "🧠 MẸO NHỚ: ĐH XIV = 1/2026 = KỶ NGUYÊN VƯƠN MÌNH + Thể chế đột phá + Chuyển đổi số + Tô Lâm = TBT"
                },
                {
                  type: "key-point",
                  text: "📌 TÓM TẮT: (1) Mở ra Kỷ nguyên vươn mình của dân tộc; (2) Thể chế là 'đột phá của đột phá'; (3) Tô Lâm làm Tổng Bí thư; (4) Chuyển đổi số toàn diện, tinh gọn bộ máy."
                }
              ]
            }
          ]
        },
        /* ----------------------------
           3. Bảng so sánh Chương III
           ---------------------------- */
        {
          id: "dh-sub-3-compare",
          number: "3",
          title: "Bảng so sánh tổng hợp các kỳ Đại hội Chương III",
          parts: [
            {
              id: "dh-part-3-compare",
              label: "a",
              title: "So sánh tổng quát Đại hội XI → XIV",
              content: [
                {
                  type: "paragraph",
                  text: "Dưới đây là bảng tổng hợp so sánh các thông số và quyết sách then chốt của 4 kỳ Đại hội Đảng giai đoạn hội nhập sâu rộng và phát triển bền vững (2011 - nay):"
                },
                {
                  type: "table",
                  headers: ["Đại hội", "Thời gian & Địa điểm", "Tổng Bí thư", "Quyết sách & Từ khóa cốt lõi", "Ý nghĩa chiến lược"],
                  rows: [
                    ["**Đại hội XI**", "1/2011<br>Hà Nội", "Nguyễn Phú Trọng", "Thông qua **Cương lĩnh bổ sung, phát triển 2011** (xác định 8 đặc trưng XHCN); đề ra **3 đột phá chiến lược** (Thể chế, Nhân lực, Hạ tầng).", "Hoàn thiện hệ thống lý luận và con đường đi lên CNXH trong thời kỳ đổi mới."],
                    ["**Đại hội XII**", "1/2016<br>Hà Nội", "Nguyễn Phú Trọng", "Đề ra **6 nhiệm vụ trọng tâm**; đẩy mạnh phòng chống tham nhũng quyết liệt với nguyên tắc **'không có vùng cấm, không có ngoại lệ'**.", "Tạo bước đột phá lớn trong xây dựng, chỉnh đốn Đảng, nâng cao niềm tin của nhân dân."],
                    ["**Đại hội XIII**", "1/2021<br>Hà Nội", "Nguyễn Phú Trọng", "Đặt mục tiêu phát triển đến **2025 - 2030 - 2045**; khơi dậy **khát vọng phát triển đất nước phồn vinh, hạnh phúc**; thúc đẩy chuyển đổi số quốc gia.", "Đặt tầm nhìn dài hạn 100 năm thành lập Đảng và 100 năm thành lập nước, đưa đất nước phát triển bứt phá."],
                    ["**Đại hội XIV**", "1/2026<br>Hà Nội", "Tô Lâm", "Xác định đất nước bước vào **Kỷ nguyên vươn mình của dân tộc Việt Nam**; coi hoàn thiện thể chế phát triển là **'đột phá của đột phá'**; tinh gọn bộ máy hệ thống chính trị.", "Mở ra thời kỳ lịch sử mới vươn mình phát triển nhanh và bền vững, cụ thể hóa các mục tiêu chiến lược 2030."]
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
