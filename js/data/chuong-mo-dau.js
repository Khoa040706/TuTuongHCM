/* ============================================================
   DỮ LIỆU: Chương mở đầu
   Đối tượng, phương pháp nghiên cứu
   và ý nghĩa học tập môn tư tưởng Hồ Chí Minh
   ============================================================ */

const chuongMoDau = {
  id: "chuong-mo-dau",
  title: "Chương mở đầu",
  subtitle: "Đối tượng, phương pháp nghiên cứu và ý nghĩa học tập môn tư tưởng Hồ Chí Minh",
  sections: [
    /* ============================
       I. ĐỐI TƯỢNG NGHIÊN CỨU
       ============================ */
    {
      id: "doi-tuong-nghien-cuu",
      roman: "I",
      title: "Đối tượng nghiên cứu",
      subsections: [
        /* ----------------------------
           1. Khái niệm tư tưởng và tư tưởng HCM
           ---------------------------- */
        {
          id: "khai-niem-tu-tuong",
          number: "1",
          title: "Khái niệm tư tưởng và tư tưởng Hồ Chí Minh",
          parts: [
            /* a/ Khái niệm tư tưởng */
            {
              id: "khai-niem-tu-tuong-a",
              label: "a",
              title: "Khái niệm tư tưởng",
              content: [
                {
                  type: "label",
                  text: "Tư tưởng:"
                },
                {
                  type: "bullets",
                  items: [
                    "Không phải dùng với nghĩa tinh thần – tư tưởng, ý thức tư tưởng của một cá nhân",
                    "Là một hệ thống những quan điểm, quan niệm, luận điểm được xây dựng trên một nền tảng triết học (thế giới quan và phương pháp luận) nhất quán",
                    "Đại biểu cho ý chí, nguyện vọng của một giai cấp, 1 dân tộc"
                  ]
                },
                {
                  type: "paragraph",
                  text: "Khái niệm TT liên quan trực tiếp đến khái niệm \"Nhà tư tưởng\""
                },
                {
                  type: "label",
                  text: "NTT theo Lênin:"
                },
                {
                  type: "bullets",
                  items: [
                    "Khi người đó biết giải quyết trước người khác tất cả những vấn đề chính trị - sách lược, các vấn đề về tổ chức...."
                  ]
                }
              ]
            },
            /* b/ Khái niệm tư tưởng Hồ Chí Minh */
            {
              id: "khai-niem-tu-tuong-b",
              label: "b",
              title: "Khái niệm tư tưởng Hồ Chí Minh",
              content: [
                {
                  type: "paragraph",
                  text: "Quá trình nhận thức đi từ thấp đến cao, từ những vấn đề cụ thể đến hệ thống hoàn chỉnh."
                },
                {
                  type: "highlight",
                  text: "Đại hội VII (6/1991) đánh dấu quan trọng trong nhận thức của Đảng về TT HCM:"
                },
                {
                  type: "bullets",
                  items: [
                    "Đảng lấy CN Mác-Lênin và TT HCM làm nền tảng tư tưởng, kim chỉ nam cho hành động.",
                    "Văn kiện của Đại hội định nghĩa: \"TT HCM là kết quả sự vận dụng sáng tạo CN Mác-Lênin trong điều kiện cụ thể của nước ta, và trong thực tế TT HCM đã trở thành 1 tài sản tinh thần quý báu của Đảng và của dân tộc\""
                  ]
                },
                {
                  type: "paragraph",
                  text: "Đại hội IX (4/2001) đưa ra định nghĩa cơ bản, Đại hội XI (1/2011) phát triển và hoàn thiện hơn khái niệm tư tưởng Hồ Chí Minh:"
                },
                {
                  type: "quote",
                  text: "\"Tư Tưởng Hồ Chí Minh là một hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam, kết quả của sự vận dụng và phát triển sáng tạo chủ nghĩa Mác-Lênin vào điều kiện cụ thể của nước ta, kế thừa và phát triển các giá trị truyền thống tốt đẹp của dân tộc, tiếp thu tinh hoa văn hóa nhân loại, là tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc ta, mãi mãi soi đường cho sự nghiệp cách mạng của nhân dân ta giành thắng lợi\"",
                  source: "Đại hội XI (1/2011)"
                },
                {
                  type: "paragraph",
                  text: "Trong định nghĩa trên Đảng đã làm rõ được:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Bản chất cách mạng, khoa học và nội dung của TT HCM:",
                      bullets: [
                        "Là hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng VN.",
                        "Phản ánh những vấn đề có tính quy luật của cách mạng VN",
                        "TT HCM và CN MLN là nền tảng tư tưởng, kim chỉ nam hành động của Đảng và dân tộc VN"
                      ]
                    },
                    {
                      number: "2",
                      title: "Nguồn gốc tư tưởng, lý luận của TT HCM:",
                      bullets: [
                        "Chủ nghĩa Mác-Lênin",
                        "Giá trị văn hóa dân tộc",
                        "Tinh hoa văn hóa nhân loại"
                      ]
                    },
                    {
                      number: "3",
                      title: "Giá trị, ý nghĩa, sức hấp dẫn, sức sống lâu bền của TT HCM:",
                      bullets: [
                        "Là tài sản tinh thần to lớn của Đảng và dân tộc",
                        "Mãi mãi soi đường cho sự nghiệp cách mạng giành thắng lợi."
                      ]
                    }
                  ]
                },
                {
                  type: "definition",
                  text: "Tư tưởng Hồ Chí Minh là một hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam, từ cách mạng dân tộc dân chủ nhân dân đến cách mạng xã hội chủ nghĩa; là kết quả của sự vận dụng sáng tạo và phát triển chủ nghĩa Mác-Lênin vào điều kiện cụ thể nước ta, đồng thời là sự kết tinh tinh hoa dân tộc và trí tuệ thời đại nhằm giải phóng dân tộc, giải phóng giai cấp và giải phóng con người."
                },
                {
                  type: "paragraph",
                  text: "2 phương thức tiếp cận hệ thống TT HCM:"
                },
                {
                  type: "bullets",
                  items: [
                    "Được nhận diện như một hệ thống tri thức tổng hợp: tư tưởng triết học, tt kinh tế, tt chính trị, tt quân sự, tt văn hóa, đạo đức và nhân văn",
                    "Là hệ thống các quan điểm về những vấn đề cơ bản của cách mạng Việt Nam: tt về dân tộc và các mạng giải phóng dân tộc, về CNXH và con đường đi lên CNXH, về ĐCSVN, về đại đoàn kết dân tộc, về đoàn kết quốc tế, về dân chủ, Nhà nước của dân, do dân, vì dân, về văn hóa, đạo đức....."
                  ]
                }
              ]
            }
          ]
        },
        /* ----------------------------
           2. Đối tượng và nhiệm vụ của môn học
           ---------------------------- */
        {
          id: "doi-tuong-nhiem-vu",
          number: "2",
          title: "Đối tượng và nhiệm vụ của môn học Tư tưởng Hồ Chí Minh",
          parts: [
            /* a/ Đối tượng nghiên cứu */
            {
              id: "doi-tuong-nhiem-vu-a",
              label: "a",
              title: "Đối tượng nghiên cứu",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Bản thân hệ thống các quan điểm, lý luận được thể hiện trong toàn bộ di sản của Hồ Chí Minh",
                    "Là quá trình vận động, hiện thực hóa các quan điểm, lý luận đó trong thực tiễn cách mạng Việt Nam",
                    "Là quá trình mang tính quy luật, bao gồm 2 mặt thống nhất biện chứng:"
                  ]
                },
                {
                  type: "sub-bullets",
                  items: [
                    "Sản sinh tư tưởng",
                    "Hiện thực hóa TT theo các mục tiêu độc lập dân tộc, dân chủ, CNXH, giải phóng dân tộc, giải phóng giai cấp, giải phóng con người"
                  ]
                }
              ]
            },
            /* b/ Nhiệm vụ nghiên cứu */
            {
              id: "doi-tuong-nhiem-vu-b",
              label: "b",
              title: "Nhiệm vụ nghiên cứu",
              content: [
                {
                  type: "paragraph",
                  text: "6 nội dung nghiên cứu:"
                },
                {
                  type: "bullets",
                  items: [
                    "Cơ sở (khách quan và chủ quan) hình thành TT HCM, qua đó khẳng định sự ra đời của TT HCM và giải đáp các vấn đề lịch sử dân tộc đặt ra",
                    "Các giai đoạn hình thành, phát triển TT HCM",
                    "Nội dung, bản chất cách mạng, khoa học, đặc điểm các quan điểm trong hệ thống TT HCM",
                    "Vai trò nền tảng TT, kim chỉ nam hành động của TT HCM đối với CM VN",
                    "Quá trình nhận thức, vận dụng, phát triển TT HCM qua các giai đoạn CM của Đảng và Nhà nước ta.",
                    "Các giá trị tư tưởng, lý luận của Hồ Chí Minh đối với kho tàng TT, lý luận cách mạng thế giới của thời đại."
                  ]
                }
              ]
            }
          ]
        },
        /* ----------------------------
           3. Mối quan hệ với môn học khác
           ---------------------------- */
        {
          id: "moi-quan-he",
          number: "3",
          title: "Mối quan hệ với môn học những nguyên lý cơ bản của chủ nghĩa Mác-Lênin và môn học đường lối cách mạng của ĐCSVN",
          parts: [
            /* a/ MQH với CN MLN */
            {
              id: "moi-quan-he-a",
              label: "a",
              title: "MQH với môn học những nguyên lý cơ bản của CN MLN",
              content: [
                {
                  type: "key-point",
                  text: "Chủ nghĩa Mác-Lênin là cơ sở thế giới quan, phương pháp luận, nguồn gốc tư tưởng, lý luận trực tiếp quyết định bản chất cách mạng, khoa học của tư tưởng Hồ Chí Minh."
                },
                {
                  type: "paragraph",
                  text: "TT HCM thuộc hệ tư tưởng Mác-Lênin, là sự vận dụng và phát triển sáng tạo chủ nghĩa Mác-Lênin vào điều kiện thực tế Việt Nam."
                }
              ]
            },
            /* b/ MQH với đường lối CM ĐCSVN */
            {
              id: "moi-quan-he-b",
              label: "b",
              title: "Mối quan hệ với môn học Đường lối cách mạng của ĐCSVN",
              content: [
                {
                  type: "paragraph",
                  text: "TT HCM là một bộ phận tư tưởng của Đảng"
                },
                {
                  type: "bullets",
                  items: [
                    "Với tư cách là bộ phận nền tảng tư tưởng, kim chỉ nam hành động của Đảng",
                    "Là cơ sở khoa học cùng với chủ nghĩa Mác-Lênin để xây dựng đường lối, chiến lược, sách lược cách mạng đúng đắn."
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
    /* Phần II và III sẽ được bổ sung khi có nội dung */
  ]
};
