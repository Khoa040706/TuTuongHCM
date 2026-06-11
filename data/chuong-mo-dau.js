/* ============================================================
   DỮ LIỆU: Chương mở đầu
   Đối tượng, phương pháp nghiên cứu
   và ý nghĩa học tập môn tư tưởng Hồ Chí Minh
   ============================================================ */

export const chuongMoDau = {
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
    },
    /* ============================
       II. PHƯƠNG PHÁP NGHIÊN CỨU
       ============================ */
    {
      id: "phuong-phap-nghien-cuu",
      roman: "II",
      title: "Phương pháp nghiên cứu",
      subsections: [
        /* ----------------------------
           1. Cơ sở phương pháp luận
           ---------------------------- */
        {
          id: "co-so-phuong-phap-luan",
          number: "1",
          title: "Cơ sở phương pháp luận",
          parts: [
            /* a/ Bảo đảm sự thống nhất nguyên tắc tính đảng và tính khoa học */
            {
              id: "co-so-pp-luan-a",
              label: "a",
              title: "Bảo đảm sự thống nhất nguyên tắc tính đảng và tính khoa học (khách quan)",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Nghiên cứu tư tưởng Hồ Chí Minh phải đứng trên lập trường, quan điểm, phương pháp chủ nghĩa Mác-Lênin và quan điểm, đường lối của ĐCSVN."
                  ]
                }
              ]
            },
            /* b/ Quan điểm thực tiễn và nguyên tắc lý luận gắn liền với thực tiễn */
            {
              id: "co-so-pp-luan-b",
              label: "b",
              title: "Quan điểm thực tiễn và nguyên tắc lý luận gắn liền với thực tiễn",
              content: [
                {
                  type: "label",
                  text: "Học đi đôi với hành:"
                },
                {
                  type: "bullets",
                  items: [
                    "CN Mác-Lênin cho rằng, thực tiễn là nguồn gốc, là động lực của nhận thức, là cơ sở và là tiêu chuẩn của chân lý",
                    "HCM coi trọng việc kết hợp lý luận với thực tiễn, lời nói đi đôi với việc làm."
                  ]
                },
                {
                  type: "quote",
                  text: "\"Thực tiễn không có lý luận hướng dẫn thì thành thực tiễn mù quáng, để mặc bệnh chủ quan; lý luận mà không liên hệ với thực tiễn là lý luận suông\"",
                  source: "Hồ Chí Minh"
                },
                {
                  type: "key-point",
                  text: "→ Phải biết vận dụng những kiến thức đã học vào cuộc sống, thực tiễn, phục vụ cho sự nghiệp cách mạng của đất nước."
                }
              ]
            },
            /* c/ Quan điểm lịch sử cụ thể */
            {
              id: "co-so-pp-luan-c",
              label: "c",
              title: "Quan điểm lịch sử cụ thể",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Phải vận dụng CNDV biện chứng và CNDV lịch sử vào việc nghiên cứu TT HCM."
                  ]
                },
                {
                  type: "label",
                  text: "Theo Lênin:"
                },
                {
                  type: "sub-bullets",
                  items: [
                    "Phải xem xét một hiện tượng nhất định đã xuất hiện trong lịch sử như thế nào",
                    "Đứng trên quan điểm của sự phát triển đó để xem xét hiện nay nó đã trở thành như thế nào?"
                  ]
                }
              ]
            },
            /* d/ Quan điểm toàn diện và hệ thống */
            {
              id: "co-so-pp-luan-d",
              label: "d",
              title: "Quan điểm toàn diện và hệ thống",
              content: [
                {
                  type: "quote",
                  text: "\"Muốn thực sự hiểu được sự vật thì cần phải nhìn bao quát và nghiên cứu tất cả các mặt, tất cả các mối liên hệ và 'quan hệ gián tiếp' của sự vật đó\"",
                  source: "V.I.Lênin"
                },
                {
                  type: "bullets",
                  items: [
                    "Cần nắm vững và đầy đủ hệ thống các quan điểm của Người trong nghiên cứu TT HCM",
                    "Tách rời 1 yếu tố → hiểu sai TT HCM",
                    "Ví dụ: tách rời độc lập dân tộc với CNXH → xa rời TT HCM",
                    "Quán triệt MQH qua lại giữa những yếu tố trong hệ thống tư tưởng."
                  ]
                }
              ]
            },
            /* e/ Quan điểm kế thừa và phát triển */
            {
              id: "co-so-pp-luan-e",
              label: "e",
              title: "Quan điểm kế thừa và phát triển",
              content: [
                {
                  type: "bullets",
                  items: [
                    "HCM là một mẫu mực về sự vận dụng và phát triển sáng tạo chủ nghĩa Mác-Lênin.",
                    "Nghiên cứu TT HCM không chỉ biết kế thừa, vận dụng mà còn phải biết phát triển sáng tạo tư tưởng của Người."
                  ]
                }
              ]
            },
            /* g/ Kết hợp nghiên cứu các tác phẩm với thực tiễn chỉ đạo cách mạng của HCM */
            {
              id: "co-so-pp-luan-g",
              label: "g",
              title: "Kết hợp nghiên cứu các tác phẩm với thực tiễn chỉ đạo cách mạng của HCM",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Từ thực tiễn, Người tổng kết, bổ sung để hoàn chỉnh và phát triển lý luận → TT HCM mang tính cách mạng, luôn sáng tạo không lạc hậu, giáo điều.",
                    "Không chỉ căn cứ vào các bài viết, bài nói, tác phẩm mà phải coi trọng hoạt động thực tiễn.",
                    "Sự sáng tạo cách mạng của HCM là sự sáng tạo về tư duy lý luận, về chiến lược, về đường lối cách mạng."
                  ]
                }
              ]
            }
          ]
        },
        /* ----------------------------
           2. Các phương pháp cụ thể
           ---------------------------- */
        {
          id: "cac-phuong-phap-cu-the",
          number: "2",
          title: "Các phương pháp cụ thể",
          parts: [
            /* a/ Khái niệm và nguyên tắc áp dụng */
            {
              id: "pp-cu-the-a",
              label: "a",
              title: "Khái niệm và nguyên tắc áp dụng",
              content: [
                {
                  type: "bullets",
                  items: [
                    "Là cách thức tiếp cận hiện thực, hệ thống các nguyên tắc điều chỉnh nhận thức và hoạt động thực tiễn dựa trên các quy luật khách quan.",
                    "Nội dung và phương pháp có mối quan hệ mật thiết, chi phối lẫn nhau (\"nội dung nào phương pháp đấy\"). Phương pháp phải dựa trên sự vận động của bản thân nội dung."
                  ]
                }
              ]
            },
            /* b/ Các phương pháp nghiên cứu cốt lõi */
            {
              id: "pp-cu-the-b",
              label: "b",
              title: "Các phương pháp nghiên cứu cốt lõi",
              content: [
                {
                  type: "definition",
                  text: "Phương pháp lịch sử: Nghiên cứu sự vật, hiện tượng theo đúng quá trình phát sinh, tồn tại và phát triển thực tế của nó."
                },
                {
                  type: "definition",
                  text: "Phương pháp lôgích: Nghiên cứu tổng quát nhằm tìm ra bản chất vốn có của sự vật, hiện tượng và khái quát thành lý luận."
                },
                {
                  type: "definition",
                  text: "Phương pháp liên ngành: Áp dụng tổng hợp các ngành khoa học xã hội - nhân văn và lý luận chính trị. Lý do là vì tư tưởng Hồ Chí Minh là một hệ thống toàn diện, bao quát nhiều lĩnh vực (triết học, kinh tế, chính trị, quân sự, văn hóa, giáo dục...)."
                }
              ]
            },
            /* c/ Các phương pháp cụ thể khác */
            {
              id: "pp-cu-the-c",
              label: "c",
              title: "Các phương pháp cụ thể khác",
              content: [
                {
                  type: "label",
                  text: "Các phương pháp hỗ trợ:"
                },
                {
                  type: "bullets",
                  items: [
                    "Phân tích, tổng hợp, so sánh, đối chiếu, thống kê trắc lượng, văn bản học, điều tra điền dã, phỏng vấn nhân chứng lịch sử..."
                  ]
                },
                {
                  type: "key-point",
                  text: "Yêu cầu khi vận dụng: Mỗi phương pháp có đặc điểm và yêu cầu riêng, việc kết hợp chúng phải hoàn toàn căn cứ vào nội dung nghiên cứu."
                }
              ]
            }
          ]
        }
      ]
    },
    /* ============================
       III. Ý NGHĨA CỦA VIỆC HỌC TẬP MÔN HỌC ĐỐI VỚI SINH VIÊN
       ============================ */
    {
      id: "y-nghia-hoc-tap",
      roman: "III",
      title: "Ý nghĩa của việc học tập môn học đối với sinh viên",
      subsections: [
        /* ----------------------------
           1. Nâng cao năng lực tư duy lý luận và phương pháp công tác
           ---------------------------- */
        {
          id: "nang-cao-tu-duy",
          number: "1",
          title: "Nâng cao năng lực tư duy lý luận và phương pháp công tác",
          parts: [
            {
              id: "nang-cao-tu-duy-details",
              label: "",
              title: "",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Định hướng mục tiêu cao cả:</strong> Tư tưởng Hồ Chí Minh soi đường cho Đảng và nhân dân Việt Nam đạt được mục tiêu chiến lược: dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
                    "<strong>Nâng cao nhận thức hệ thống:</strong> Việc làm rõ và truyền thụ hệ thống quan điểm lý luận của Người giúp sinh viên nhận thức sâu sắc vai trò, vị trí của tư tưởng này, biến nó thành kim chỉ nam chủ đạo trong đời sống tinh thần của thế hệ trẻ.",
                    "<strong>Kiên định lập trường cách mạng:</strong> Học tập môn học giúp củng cố lập trường, giữ vững mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội. Đồng thời, trang bị cho sinh viên khả năng chủ động đấu tranh, phê phán các quan điểm sai trái để bảo vệ đường lối, pháp luật của Đảng và Nhà nước.",
                    "<strong>Vận dụng vào thực tiễn cuộc sống:</strong> Không dừng lại ở lý thuyết, việc học tập giúp sinh viên rèn luyện phương pháp làm việc khoa học, biết cách đem lý luận áp dụng vào giải quyết các vấn đề thực tế nảy sinh trong cuộc sống hàng ngày."
                  ]
                }
              ]
            }
          ]
        },
        /* ----------------------------
           2. Bồi dưỡng phẩm chất đạo đức cách mạng và rèn luyện bản lĩnh chính trị
           ---------------------------- */
        {
          id: "boi-duong-pham-chat",
          number: "2",
          title: "Bồi dưỡng phẩm chất đạo đức cách mạng và rèn luyện bản lĩnh chính trị",
          parts: [
            {
              id: "boi-duong-pham-chat-details",
              label: "",
              title: "",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Giáo dục đạo đức và lối sống:</strong> Tư tưởng Hồ Chí Minh giáo dục đạo đức, tư cách, phẩm chất cách mạng cho cán bộ, đảng viên và toàn dân, hướng con người biết sống hợp đạo lý, yêu cái tốt, cái thiện, ghét cái ác, cái xấu.",
                    "<strong>Nâng cao lòng tự hào và tinh thần tự nguyện:</strong> Việc học tập giúp nâng cao lòng tự hào về Lãnh tụ, về Đảng Cộng sản, về Tổ quốc Việt Nam; từ đó thôi thúc thế hệ trẻ tự nguyện \"Sống, chiến đấu, lao động và học tập theo gương Bác Hồ vĩ đại\".",
                    "<strong>Vận dụng và tu dưỡng bản thân:</strong> Dựa trên kiến thức đã học, sinh viên biết vận dụng vào thực tế cuộc sống để tự tu dưỡng, rèn luyện bản thân và hoàn thành tốt chức trách, nhiệm vụ của mình.",
                    "<strong>Đóng góp thiết thực cho đất nước:</strong> Giúp sinh viên có những đóng góp thiết thực, hiệu quả cho sự nghiệp cách mạng theo con đường mà Chủ tịch Hồ Chí Minh và Đảng ta đã lựa chọn."
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
