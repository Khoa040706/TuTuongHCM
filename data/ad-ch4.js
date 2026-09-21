/* ============================================================
   DỮ LIỆU HỌC TẬP CHUẨN MỰC: MÔN PHÂN TÍCH THIẾT KẾ YÊU CẦU
   CHAPTER 4: DISCOVERY PHASE I
   MỤC I: SET BASELINE
   MỤC II: DISCOVERY PHASE
   MỤC III: BEHAVIORAL ANALYSIS & USE-CASE DIAGRAM
   ============================================================ */

export const adCh4Data = {
  id: "ad-ch4",
  title: "Chapter 4: Discovery Phase I — Baseline, Elicitation & Use Case Foundations",
  subtitle: "Thiết lập mốc cơ sở (Baseline), Vận hành chu trình khám phá yêu cầu (Discovery Phase) trong Unified Process, Phân định Phân tích hành vi vs Cấu trúc và Nắm vững Biểu đồ Use Case chuẩn mực.",
  sections: [
    /* ============================================================
       SECTION 0: OVERVIEW HERO BANNER
       ============================================================ */
    {
      id: "ad4-section-0",
      roman: "★",
      title: "TỔNG QUAN CHAPTER 4: DISCOVERY PHASE I",
      subsections: [
        {
          id: "ad4-sub-0",
          number: "0",
          title: "Executive Overview & Toàn Cảnh 6 Trụ Cột Tri Thức Chapter 4",
          parts: [
            {
              id: "ad4-part-0-banner",
              label: "a",
              title: "Interactive Architecture & Knowledge Radar Studio",
              content: [
                {
                  type: "component",
                  component: "AdChapter4HeroBanner"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION I: SET BASELINE - THIẾT LẬP MỐC CƠ SỞ
       ============================================================ */
    {
      id: "ad4-section-1",
      roman: "I",
      title: "Set Baseline — Thiết Lập Mốc Cơ Sở",
      subsections: [
        /* --------------------------------------------------------
           1.1. Baseline là gì?
           -------------------------------------------------------- */
        {
          id: "ad4-sub-1-1",
          number: "1",
          title: "1.1 Baseline là gì? (Snapshot & Stable Reference)",
          parts: [
            {
              id: "ad4-part-1-1-a",
              label: "a",
              title: "Khái niệm và thời điểm thiết lập Baseline trong dự án phần mềm",
              content: [
                {
                  type: "paragraph",
                  text: "**Baseline (Mốc cơ sở)** là một **snapshot (ảnh chụp trạng thái)** đã được các bên liên quan chính thức thống nhất và ghi nhận lại, bao gồm 3 yếu tố nền tảng:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Project Scope (Phạm vi dự án)",
                      bullets: [
                        "Xác định ranh giới những gì hệ thống **sẽ làm (In Scope)** và những gì **không làm (Out of Scope)**."
                      ]
                    },
                    {
                      number: "2",
                      title: "Vision (Tầm nhìn nghiệp vụ)",
                      bullets: [
                        "Mục tiêu kinh doanh dài hạn và giá trị cốt lõi mà sản phẩm phần mềm mang lại cho tổ chức."
                      ]
                    },
                    {
                      number: "3",
                      title: "Initial Requirements (Tập yêu cầu ban đầu)",
                      bullets: [
                        "Các tính năng ứng viên cấp cao (High-level candidate features) được phác thảo trong giai đoạn khởi động."
                      ]
                    }
                  ]
                },
                {
                  type: "paragraph",
                  text: "Baseline được cố định tại một thời điểm then chốt để làm **mốc tham chiếu ổn định (Stable Reference)** phục vụ cho việc: So sánh về sau, Theo dõi sự biến động của yêu cầu, và đặc biệt là **Kiểm soát thay đổi (Change Control)**."
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "Lưu ý sống còn trong đề thi & thực tế:",
                  text: "Baseline **KHÔNG PHẢI là bộ requirements cuối cùng** bất biến. Nó chỉ là mốc giao ước ban đầu giữa Sponsor và Project Team: *'Đây là những gì chúng ta đã thống nhất lúc bắt đầu, trước khi bước vào detailed analysis'*."
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           1.2. Tại sao phải Set Baseline?
           -------------------------------------------------------- */
        {
          id: "ad4-sub-1-2",
          number: "2",
          title: "1.2 Tại sao phải Set Baseline? (4 Giá trị Mục đích)",
          parts: [
            {
              id: "ad4-part-1-2-a",
              label: "a",
              title: "4 Lý do bắt buộc phải thiết lập mốc cơ sở",
              content: [
                {
                  type: "paragraph",
                  text: "Nếu không có Baseline, dự án sẽ nhanh chóng rơi vào thảm họa phình to phạm vi (Scope Creep) và bất đồng triền miên. Bốn giá trị sống còn của Baseline gồm:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Common Reference (Mốc tham chiếu chung)",
                      bullets: [
                        "Bảo đảm mọi **Stakeholder** (Khách hàng, Sponsor, PM, BA, Developers, QA) đều có cùng một hình dung ban đầu về scope và vision, xóa bỏ tình trạng hiểu lầm."
                      ]
                    },
                    {
                      number: "2",
                      title: "Scope Control (Kiểm soát phạm vi)",
                      bullets: [
                        "Là cơ sở pháp lý và kỹ thuật duy nhất để đánh giá, đàm phán các **Change Request (Yêu cầu thay đổi)** phát sinh trong suốt vòng đời dự án."
                      ]
                    },
                    {
                      number: "3",
                      title: "Progress Measurement (Đo lường tiến độ)",
                      bullets: [
                        "Giúp PM và các bên tài trợ so sánh trạng thái hiện tại với cam kết ban đầu để biết dự án có đang đi đúng hướng hay bị lệch quỹ đạo."
                      ]
                    },
                    {
                      number: "4",
                      title: "Reduced Ambiguity (Giảm thiểu mơ hồ)",
                      bullets: [
                        "Buộc nhóm dự án và khách hàng phải ngồi lại làm rõ các vấn đề còn mông lung từ sớm, trước khi bước vào phân tích chi tiết rất tốn kém."
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           1.3 & 1.4. Nội dung của Baseline & Liên hệ với Requirements
           -------------------------------------------------------- */
        {
          id: "ad4-sub-1-3",
          number: "3",
          title: "1.3 & 1.4 Nội dung của Baseline & Mối liên hệ với Requirements",
          parts: [
            {
              id: "ad4-part-1-3-a",
              label: "a",
              title: "Cấu trúc 2 phần của hồ sơ Baseline và vị trí của Functional vs Non-functional Requirements",
              content: [
                {
                  type: "paragraph",
                  text: "Một hồ sơ Baseline chuẩn mực gồm 2 nhóm nội dung chính:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "A",
                      title: "Business Content (Nội dung Nghiệp vụ)",
                      bullets: [
                        "**Business vision and goals**: Mục tiêu kinh doanh chiến lược.",
                        "**Project scope statement**: Phân định rõ ràng **In Scope** (Làm) và **Out of Scope** (Không làm trong giai đoạn này).",
                        "**Key stakeholders**: Danh sách các bên liên quan chủ chốt và mối quan tâm/lợi ích của họ.",
                        "**Success criteria**: Các tiêu chí đo lường sự thành công của dự án ở mức tổng thể."
                      ]
                    },
                    {
                      number: "B",
                      title: "Technical / Process Content (Nội dung Kỹ thuật & Quy trình)",
                      bullets: [
                        "Danh sách ban đầu các **Actors**: Các vai trò tương tác trực tiếp với hệ thống.",
                        "**High-level use cases / candidate system features**: Các tính năng ứng viên sơ bộ.",
                        "Các **Assumptions (Giả định)** và **Constraints (Ràng buộc kỹ thuật/nghiệp vụ)** đã biết.",
                        "**Preliminary non-functional requirements (NFRs)**: Yêu cầu phi chức năng sơ bộ (Hiệu năng, Bảo mật, Tải)."
                      ]
                    }
                  ]
                },
                {
                  type: "paragraph",
                  text: "**Mối liên hệ với Requirements:** Functional Requirements (Yêu cầu chức năng) trong chương này chủ yếu được làm rõ qua **Use Cases / System Behavior**. Trong khi đó, Non-functional Requirements (Phi chức năng) xuất hiện sơ bộ ở Baseline, được đào sâu ở Discovery và ghi nhận chính thức vào mục *'Business Rules & Non-Functional Notes'* của bản đặc tả Fully-Dressed Use Case."
                },
                {
                  type: "component",
                  component: "ProjectBaselineControlCockpit"
                }
              ]
            },
            {
              id: "ad4-part-1-3-b",
              label: "b",
              title: "Kiểm tra phản xạ trắc nghiệm Mục I: Set Baseline",
              content: [
                {
                  type: "component",
                  component: "AdMicroQuizCard",
                  props: {
                    quizId: "ad4-q1",
                    badge: "Micro-Quiz #1: Set Baseline Mastery",
                    question: "Nhận định nào sau đây phản ánh ĐÚNG NHẤT về bản chất và mục đích của việc thiết lập Baseline trong dự án phần mềm?",
                    options: [
                      "Là ảnh chụp trạng thái đã thống nhất dùng làm mốc kiểm soát mọi thay đổi phát sinh.",
                      "Là bộ tài liệu yêu cầu bất biến cuối cùng nghiêm cấm sửa đổi trong suốt dự án.",
                      "Là bản thiết kế cơ sở dữ liệu chi tiết bắt buộc lập trình viên phải tuân theo.",
                      "Là hợp đồng nghiệm thu thanh toán cố định được ký kết sau khi hoàn tất kiểm thử."
                    ],
                    correctIndex: 0,
                    explanation: "Baseline là một snapshot (ảnh chụp trạng thái) về scope, vision và initial requirements đã được sponsor cùng nhóm dự án thống nhất trước khi detailed analysis bắt đầu. Nó đóng vai trò stable reference để so sánh, theo dõi và làm căn cứ đàm phán change requests, chứ không phải là bộ yêu cầu bất biến không được sửa đổi.",
                    citation: "Giáo trình Phân tích thiết kế yêu cầu — Chapter 4: Section 1.1 & 1.2 (Set Baseline)"
                  }
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION II: DISCOVERY PHASE - GIAI ĐOẠN KHÁM PHÁ YÊU CẦU
       ============================================================ */
    {
      id: "ad4-section-2",
      roman: "II",
      title: "Discovery Phase — Giai Đoạn Khám Phá Yêu Cầu",
      subsections: [
        /* --------------------------------------------------------
           2.1 & 2.2. Discovery Phase là gì & 5 Goals cốt lõi
           -------------------------------------------------------- */
        {
          id: "ad4-sub-2-1",
          number: "1",
          title: "2.1 & 2.2 Discovery Phase là gì? & 5 Mục tiêu cốt lõi",
          parts: [
            {
              id: "ad4-part-2-1-a",
              label: "a",
              title: "Bản chất của Discovery Phase và 5 Mục tiêu chiến lược",
              content: [
                {
                  type: "paragraph",
                  text: "**Discovery Phase** là giai đoạn nhóm dự án thực hiện 3 hành động trụ cột: **Elicits (Khai thác/thu thập)**, **Explores (Khám phá/làm rõ)** và **Structures (Cấu trúc hóa)** các yêu cầu phần mềm."
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Câu hỏi trọng tâm định hướng tư duy:",
                  text: "Mục tiêu tối thượng của Discovery Phase là trả lời câu hỏi: **'What should the system do?' (Hệ thống phải làm gì?)** TRƯỚC KHI quyết định **'How will it do it?' (Nó sẽ làm bằng cách nào/công nghệ gì?)**."
                },
                {
                  type: "paragraph",
                  text: "Discovery được xây dựng trực tiếp trên **Project Baseline**, đóng vai trò cầu nối vững chắc giữa **Business Vision** và **Detailed Functional Model**. Năm mục tiêu cốt lõi (Goals) của giai đoạn này gồm:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Xác định Actors và Goals của họ",
                      bullets: ["Tìm ra tất cả các vai trò tương tác với hệ thống và mục tiêu nghiệp vụ họ cần đạt được."]
                    },
                    {
                      number: "2",
                      title: "Xác định Use Cases (Functions) của hệ thống",
                      bullets: ["Định hình các đơn vị chức năng độc lập đáp ứng đúng và đủ mục tiêu của từng tác nhân."]
                    },
                    {
                      number: "3",
                      title: "Mô tả chi tiết System Behavior",
                      bullets: ["Văn bản hóa hành vi tương tác nhịp nhàng giữa người dùng và phần mềm qua Use-Case Descriptions."]
                    },
                    {
                      number: "4",
                      title: "Ghi nhận Business Rules và NFRs",
                      bullets: ["Lập danh mục quy tắc nghiệp vụ và các tiêu chuẩn phi chức năng (bảo mật, hiệu năng, tải cao điểm)."]
                    },
                    {
                      number: "5",
                      title: "Kiểm tra / Đối chiếu Scope với Baseline",
                      bullets: ["Liên tục rà soát các yêu cầu đang hình thành để không bị lệch khỏi phạm vi mốc ban đầu."]
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           2.3. Discovery Phase Activities (Iterative Cycle)
           -------------------------------------------------------- */
        {
          id: "ad4-sub-2-2",
          number: "2",
          title: "2.3 Chu trình 5 hoạt động Discovery (The Iterative Cycle)",
          parts: [
            {
              id: "ad4-part-2-2-a",
              label: "a",
              title: "Quy trình lặp xoắn ốc 5 bước và cơ chế Feedback Loop",
              content: [
                {
                  type: "paragraph",
                  text: "Quá trình khám phá yêu cầu không phải là đường thẳng một chiều mà là một **chu trình lặp (Iterative Cycle)** gồm 5 hoạt động liên hoàn:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Elicit Requirements (Khai thác yêu cầu)",
                      bullets: ["Sử dụng phỏng vấn, khảo sát, bảng câu hỏi và quan sát để thu thập thông tin thô."]
                    },
                    {
                      number: "2",
                      title: "Identify Actors & Use Cases (Nhận diện Tác nhân & Ca sử dụng)",
                      bullets: ["Bóc tách thông tin thành các vai trò bên ngoài và chức năng có giá trị."]
                    },
                    {
                      number: "3",
                      title: "Model the Use-Case Diagram (Xây dựng Biểu đồ Use Case)",
                      bullets: ["Mô hình hóa ranh giới hệ thống, tác nhân và liên kết chức năng chuẩn UML."]
                    },
                    {
                      number: "4",
                      title: "Write Use-Case Descriptions (Viết Đặc tả Ca sử dụng)",
                      bullets: ["Mô tả luồng tương tác chi tiết từng bước (Happy Path và Alternate/Exception Flows)."]
                    },
                    {
                      number: "5",
                      title: "Review with Stakeholders (Thẩm định với các bên liên quan)",
                      bullets: [
                        "Rà soát mô hình cùng khách hàng. **Cơ chế lặp (Feedback Loop):** Nếu khâu Review phát hiện câu hỏi hoặc lỗ hổng mới ➔ Lập tức quay lại bước 1 (Elicitation) để làm rõ!"
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "DiscoveryIterativeEngineRunner"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           2.4 & 2.5. Deliverables & Discovery trong Unified Process
           -------------------------------------------------------- */
        {
          id: "ad4-sub-2-3",
          number: "3",
          title: "2.4 & 2.5 Sản phẩm Bàn giao & Vị trí Discovery trong Unified Process",
          parts: [
            {
              id: "ad4-part-2-3-a",
              label: "a",
              title: "5 Deliverables cốt lõi và Đường cong nỗ lực (Whale Curve) trong Unified Process",
              content: [
                {
                  type: "paragraph",
                  text: "Kết thúc Discovery Phase, nhóm BA/SA phải bàn giao được **5 sản phẩm (Deliverables)** tối quan trọng:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Use-Case Diagram(s)",
                      bullets: ["Bản đồ trực quan của actors và system functions trong ranh giới hệ thống."]
                    },
                    {
                      number: "2",
                      title: "Use-Case Descriptions",
                      bullets: ["Bản đặc tả mô tả hành vi ở các mức Brief, Casual hoặc Fully-Dressed."]
                    },
                    {
                      number: "3",
                      title: "Actor Catalog",
                      bullets: ["Danh mục phân loại các vai trò (Roles), mục tiêu (Goals) và quyền hạn của chúng."]
                    },
                    {
                      number: "4",
                      title: "Business Rules Glossary",
                      bullets: ["Danh mục quy tắc nghiệp vụ có mã định danh, có thể truy vết ngược từ các bước trong Use Case."]
                    },
                    {
                      number: "5",
                      title: "Validated Baseline Scope",
                      bullets: ["Phạm vi ban đầu đã được cập nhật, thẩm định và ký duyệt lại sau khi khám phá sâu."]
                    }
                  ]
                },
                {
                  type: "paragraph",
                  text: "**Vị trí trong Unified Process (UP):** Vòng đời UP gồm 4 pha: *Inception ➔ Elaboration ➔ Construction ➔ Transition*. Discovery Phase chính là thời điểm nỗ lực (Effort) cho luồng công việc **Requirements đạt đỉnh cao nhất**, tập trung chủ yếu ở **Inception và Early Elaboration**. Tại thời điểm này, các công việc khác như Analysis & Design, Implementation, Test vẫn còn tương đối nhẹ."
                },
                {
                  type: "component",
                  component: "UpRequirementsEffortCurveStudio"
                }
              ]
            },
            {
              id: "ad4-part-2-3-b",
              label: "b",
              title: "Kiểm tra phản xạ trắc nghiệm Mục II: Discovery Phase",
              content: [
                {
                  type: "component",
                  component: "AdMicroQuizCard",
                  props: {
                    quizId: "ad4-q2",
                    badge: "Micro-Quiz #2: Discovery in Unified Process",
                    question: "Trong quy trình chuẩn Unified Process, nỗ lực cho luồng công việc Requirements (Discovery) diễn ra như thế nào?",
                    options: [
                      "Đạt đỉnh cao trào trong pha Inception và Early Elaboration trước khi giảm dần.",
                      "Phân bổ đồng đều với cường độ 25% xuyên suốt qua cả bốn giai đoạn của dự án.",
                      "Tập trung chủ yếu ở pha Construction khi các lập trình viên tiến hành viết mã.",
                      "Chỉ xuất hiện duy nhất ở pha Transition khi bàn giao sản phẩm cho người dùng."
                    ],
                    correctIndex: 0,
                    explanation: "Trong Unified Process, luồng công việc Requirements (giai đoạn Discovery) đạt đỉnh cao nhất ở pha Inception và giai đoạn đầu pha Elaboration nhằm xác lập kiến trúc và làm rõ phạm vi chức năng, sau đó giảm mạnh ở Construction và Transition khi trọng tâm chuyển sang viết mã và kiểm thử.",
                    citation: "Giáo trình Phân tích thiết kế yêu cầu — Chapter 4: Section 2.5 (Discovery trong Unified Process)"
                  }
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION III: BEHAVIORAL ANALYSIS & USE-CASE DIAGRAM
       ============================================================ */
    {
      id: "ad4-section-3",
      roman: "III",
      title: "Behavioral Analysis & Use-Case Diagram",
      subsections: [
        /* --------------------------------------------------------
           3.1. Behavioral Analysis là gì?
           -------------------------------------------------------- */
        {
          id: "ad4-sub-3-1",
          number: "1",
          title: "3.1 Behavioral Analysis là gì? & Phân biệt với Structural Analysis",
          parts: [
            {
              id: "ad4-part-3-1-a",
              label: "a",
              title: "Bản chất của Phân tích hành vi và điểm khác biệt cốt tử với Phân tích cấu trúc",
              content: [
                {
                  type: "paragraph",
                  text: "**Behavioral (Functional) Analysis** là phương pháp phân tích tập trung vào việc **hệ thống nên phản hồi và tương tác với các External Actors như thế nào**. Trọng tâm khảo sát là: Quy trình (Processes), Chức năng (Functions) và Hành vi tổng thể (System Behavior), **hoàn toàn không phụ thuộc vào cấu trúc dữ liệu nội bộ**."
                },
                {
                  type: "paragraph",
                  text: "Ngược lại, **Structural Analysis** phân tích xem hệ thống cần ghi nhớ dữ liệu gì, các phần tử dữ liệu (Data elements) liên hệ với nhau ra sao, và sau này được thể hiện bằng *Domain Model / Class Diagram / ERD*."
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "Công thức phân biệt thần tốc trong phòng thi:",
                  text: "• **Behavioral** = Hệ thống LÀM GÌ / PHẢN HỒI THẾ NÀO?\n• **Structural** = Hệ thống LƯU DỮ LIỆU GÌ / DỮ LIỆU LIÊN HỆ THẾ NÀO?"
                },
                {
                  type: "component",
                  component: "BehavioralVsStructuralDuelArena"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           3.2. Thành phần của Use-Case Diagram
           -------------------------------------------------------- */
        {
          id: "ad4-sub-3-2",
          number: "2",
          title: "3.2 Bốn Thành phần chuẩn mực của Use-Case Diagram (UML Notation)",
          parts: [
            {
              id: "ad4-part-3-2-a",
              label: "a",
              title: "4 Yếu tố ký hiệu không thể thiếu trong biểu đồ Use Case",
              content: [
                {
                  type: "paragraph",
                  text: "Một biểu đồ Use Case chuẩn mực trong UML được cấu thành từ đúng 4 phần tử:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Actor (Tác nhân)",
                      bullets: [
                        "Ký hiệu hình người que (Stick figure).",
                        "Đại diện cho một **vai trò (Role)** tương tác trực tiếp với hệ thống.",
                        "Có thể là con người, tổ chức hoặc hệ thống bên ngoài (External System). Bắt buộc nằm **NGOÀI System Boundary**."
                      ]
                    },
                    {
                      number: "2",
                      title: "Use Case (Ca sử dụng)",
                      bullets: [
                        "Ký hiệu **hình oval (elip)**.",
                        "Đại diện cho một **đơn vị chức năng / hành vi hoàn chỉnh** mang lại giá trị đo lường được cho Actor.",
                        "Bắt buộc nằm **BÊN TRONG System Boundary**."
                      ]
                    },
                    {
                      number: "3",
                      title: "System Boundary (Ranh giới hệ thống)",
                      bullets: [
                        "Ký hiệu **hình chữ nhật bao quanh**.",
                        "Phân biệt rõ ràng ranh giới cái gì thuộc phạm vi bên trong phần mềm (Inside) và cái gì thuộc thế giới bên ngoài (Outside)."
                      ]
                    },
                    {
                      number: "4",
                      title: "Association (Liên kết giao tiếp)",
                      bullets: [
                        "Đường thẳng nối giữa Actor và Use Case.",
                        "Thể hiện rằng Actor đó có tham gia tương tác, trao đổi tín hiệu hoặc kích hoạt Use Case đó."
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           3.3, 3.4 & 3.5. Ý nghĩa "Mục lục" & Ví dụ Đăng ký môn học
           -------------------------------------------------------- */
        {
          id: "ad4-sub-3-3",
          number: "3",
          title: "3.3, 3.4 & 3.5 Ý nghĩa 'Mục lục (WHAT)', Ví dụ Thực chiến & Cầu nối sang Description",
          parts: [
            {
              id: "ad4-part-3-3-a",
              label: "a",
              title: "Phép ẩn dụ Table of Contents và Hệ thống Đăng ký môn học trực tuyến (Slide 16 & 17)",
              content: [
                {
                  type: "paragraph",
                  text: "Biểu đồ Use Case Diagram trả lời 2 câu hỏi lớn: *'Có những Use Case nào?'* và *'Actor nào tham gia Use Case nào?'*. Slide bài giảng đưa ra phép ví von vô cùng sâu sắc: **Use-Case Diagram giống như 'Mục lục cuốn sách (Table of Contents)'** — nó cho ta cái nhìn tổng quan toàn diện, nhưng **chưa mô tả chi tiết từng bước xử lý**."
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ minh họa — Online Course Registration System (Slide 17):**"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Actors bên ngoài ranh giới",
                      bullets: [
                        "`Student` (Sinh viên — Primary Actor).",
                        "`Registrar` (Cán bộ Đào tạo — Admin Actor).",
                        "`Payment Gateway` (Cổng thanh toán — External System Actor)."
                      ]
                    },
                    {
                      number: "2",
                      title: "Candidate Use Cases bên trong ranh giới",
                      bullets: [
                        "`View Course Catalog` (Tra cứu môn học).",
                        "`Register for Course` (Đăng ký môn học).",
                        "`Drop Course` (Hủy môn học).",
                        "`Process Payment` (Xử lý thanh toán học phí).",
                        "`Generate Transcript` (Kết xuất bảng điểm).",
                        "`Approve Waitlist` (Duyệt danh sách chờ)."
                      ]
                    }
                  ]
                },
                {
                  type: "paragraph",
                  text: "**Cầu nối từ Diagram sang Description:** Để triển khai phần mềm, ta bắt buộc phải đi từ Diagram sang Use-Case Description theo cặp quan hệ đối ứng:"
                },
                {
                  type: "comparison-table",
                  headers: ["Đặc tính so sánh", "Use-Case Diagram", "Use-Case Description"],
                  rows: [
                    ["Câu hỏi trả lời", "Cho biết 'WHAT' (Cái gì tồn tại, ai tham gia)", "Giải thích 'HOW' (Diễn ra từng bước ra sao)"],
                    ["Phép ẩn dụ", "Tương tự 'Mục lục cuốn sách'", "Tương tự 'Nội dung từng chương chi tiết'"],
                    ["Mức độ chi tiết", "Mức tổng quan (Bird's-eye view)", "Đi từng bước có cả luồng rẽ nhánh & ngoại lệ"]
                  ]
                },
                {
                  type: "component",
                  component: "CourseRegistrationTocDiagramStudio"
                }
              ]
            },
            {
              id: "ad4-part-3-3-b",
              label: "b",
              title: "Kiểm tra phản xạ trắc nghiệm Mục III: Behavioral Analysis & Use-Case Diagram",
              content: [
                {
                  type: "component",
                  component: "AdMicroQuizCard",
                  props: {
                    quizId: "ad4-q3",
                    badge: "Micro-Quiz #3: Diagram vs Description Mastery",
                    question: "Khi so sánh giữa Use-Case Diagram và Use-Case Description, kết luận nào sau đây là CHÍNH XÁC nhất?",
                    options: [
                      "Diagram đóng vai trò Mục lục (chỉ ra WHAT), Description là Nội dung chương (giải thích HOW).",
                      "Diagram mô tả chi tiết từng bước thuật toán, Description chỉ tóm tắt tên các chức năng chính.",
                      "Cả hai tài liệu đều giải thích chi tiết các luồng rẽ nhánh ngoại lệ và quy tắc kiểm thử code.",
                      "Description phải được vẽ trước khi xác định ranh giới và các tác nhân ngoài trong Diagram."
                    ],
                    correctIndex: 0,
                    explanation: "Use-Case Diagram đóng vai trò như Mục lục cuốn sách (Table of Contents) chỉ ra WHAT (có chức năng gì, ai tham gia). Trong khi đó, Use-Case Description đóng vai trò như Nội dung chương chi tiết giải thích HOW (hệ thống và người dùng tương tác từng bước như thế nào trong luồng chính và luồng ngoại lệ).",
                    citation: "Giáo trình Phân tích thiết kế yêu cầu — Chapter 4: Section 3.3 & 3.5 (Từ Diagram sang Description)"
                  }
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION IV: USE-CASE DESCRIPTIONS
       ============================================================ */
    {
      id: "ad4-section-4",
      roman: "IV",
      title: "Use-Case Descriptions — Mô Tả Chi Tiết Ca Sử Dụng",
      badge: "Use-Case Specifications",
      desc: "Khám phá 3 cấp độ mô tả Use Case (Brief, Casual, Fully Dressed), cấu trúc 9 trường dữ liệu chuẩn mực, ví dụ thực tế Place Order và nguyên lý kiến trúc tách rời Business Rules.",
      subsections: [
        /* 4.1 & 4.2. Ba cấp độ mô tả Use Case & So sánh Brief vs Casual */
        {
          id: "ad4-sub-4-1",
          label: "4.1",
          title: "3 Cấp Độ Mô Tả Use Case & So Sánh Brief vs Casual",
          parts: [
            {
              id: "ad4-part-4-1-a",
              label: "a",
              title: "Khái niệm 3 Cấp Độ Mô Tả & Ví Dụ Ca Sử Dụng Register for Course",
              content: [
                {
                  type: "paragraph",
                  text: "Trong khi **Use-Case Diagram** chỉ cung cấp cái nhìn tổng thể mức kiến trúc (như bảng mục lục của cuốn sách), thì **Use-Case Description** là tài liệu văn bản đi sâu vào chi tiết hành vi tương tác. Theo chuẩn mực của Alistair Cockburn và RUP, Use-Case Description được phân cấp thành **3 mức độ chi tiết (Levels of Detail)** tùy thuộc vào giai đoạn và mục tiêu phát triển phần mềm:"
                },
                {
                  type: "cards",
                  columns: 3,
                  items: [
                    {
                      title: "1. Brief (Tóm tắt sơ khởi)",
                      tag: "Scope Confirmation",
                      bullets: [
                        "Độ dài từ 1 đến 2 câu ngắn gọn hoặc 1 đoạn văn súc tích.",
                        "Chỉ tập trung vào **luồng thành công chính (Happy path)**, bỏ qua các nhánh phụ và lỗi.",
                        "**Thời điểm dùng:** Dùng rất sớm (giai đoạn Inception hoặc đầu Elaboration) để chốt nhanh phạm vi nghiệp vụ và thống nhất kỳ vọng với khách hàng."
                      ]
                    },
                    {
                      title: "2. Casual (Mô tả thường thức)",
                      tag: "Team Discussion",
                      bullets: [
                        "Gồm vài đoạn văn không có cấu trúc khuôn mẫu quá cứng nhắc.",
                        "Bắt đầu đề cập đến **nhiều kịch bản khác nhau (Multiple scenarios)** và luồng thay thế cơ bản.",
                        "**Thời điểm dùng:** Dùng trong các buổi họp phân tích nhanh, giúp đội ngũ nắm bắt hành vi nghiệp vụ đa chiều trước khi viết đặc tả kỹ thuật."
                      ]
                    },
                    {
                      title: "3. Fully Dressed (Khuôn mẫu toàn diện)",
                      tag: "Design & Test Foundation",
                      bullets: [
                        "Áp dụng biểu mẫu chuẩn tắc (Template) gồm đầy đủ 9 trường dữ liệu chuyên sâu.",
                        "Bao phủ toàn diện Actors, Pre/Postconditions, Normal Flow luân phiên từng bước, Alternate & Exception Flows, Business Rules.",
                        "**Thời điểm dùng:** Dùng làm kim chỉ nam để lập trình viên hiện thực hóa mã nguồn và QA viết kịch bản kiểm thử (Test Cases)."
                      ]
                    }
                  ]
                },
                {
                  type: "paragraph",
                  text: "**Đối chiếu thực tế qua Ca sử dụng Đăng ký môn học (Register for Course):**"
                },
                {
                  type: "comparison-table",
                  headers: ["Đặc tính đối chiếu", "Bản Brief Description", "Bản Casual Description"],
                  rows: [
                    ["Độ dài văn bản", "1 đoạn văn súc tích (1-2 câu)", "Vài đoạn văn tường thuật liên hoàn"],
                    ["Nội dung chính", "Sinh viên chọn môn học từ danh mục, hệ thống kiểm tra điều kiện tiên quyết và trùng lịch rồi ghi nhận đăng ký. Hệ thống gửi xác nhận.", "Sinh viên đăng nhập cổng thông tin và tìm kiếm môn học. Nếu lớp đã đầy sĩ số, sinh viên có thể chọn vào hàng chờ (Waitlist). Hệ thống kiểm tra điều kiện tiên quyết trước khi thêm sinh viên vào danh sách lớp. Nếu chưa thỏa mãn tiên quyết, hệ thống cảnh báo từ chối. Sinh viên cũng có thể hủy môn trong thời hạn cho phép."],
                    ["Kịch bản rẽ nhánh", "Không đề cập (chỉ có luồng thành công)", "Đã đề cập lớp đầy (Waitlist), thiếu tiên quyết, hủy môn"],
                    ["Mục đích áp dụng", "Xác nhận phạm vi chức năng (Scope Confirmation)", "Thảo luận logic nghiệp vụ giữa BA và Product Owner"]
                  ]
                },
                {
                  type: "component",
                  component: "ThreeLevelsDescriptionTrioStudio"
                }
              ]
            }
          ]
        },

        /* 4.2. Khuôn mẫu Fully-Dressed 9 trường & Worked Example Place Order */
        {
          id: "ad4-sub-4-2",
          label: "4.2",
          title: "Khuôn Mẫu 9 Trường Fully-Dressed & Nghiên Cứu Ca Mẫu Place Order",
          parts: [
            {
              id: "ad4-part-4-2-a",
              label: "a",
              title: "Cấu Trúc 9 Trường Tiêu Chuẩn Của Fully-Dressed Use-Case Description",
              content: [
                {
                  type: "paragraph",
                  text: "Biểu mẫu **Fully Dressed Use-Case Description** là tài liệu kỹ thuật chuẩn xác nhất, được chia thành **9 trường dữ liệu cốt tử** mà mọi Kỹ sư phân tích yêu cầu (BA/Requirements Engineer) đều phải nắm vững:"
                },
                {
                  type: "cards",
                  columns: 3,
                  items: [
                    {
                      number: "1",
                      title: "Use-Case ID & Name",
                      bullets: [
                        "Mã định danh duy nhất (VD: `UC-12`) phục vụ quản lý truy vết (Traceability).",
                        "Tên đặt theo cụm **Động từ + Danh từ (Verb-Noun phrase)** thể hiện rõ mục tiêu (VD: `Place Order`)."
                      ]
                    },
                    {
                      number: "2",
                      title: "Primary & Secondary Actors",
                      bullets: [
                        "**Primary Actor:** Người trực tiếp kích hoạt và nhận giá trị chính từ ca sử dụng (VD: `Customer`).",
                        "**Secondary Actors:** Các hệ thống hoặc tác nhân ngoài hỗ trợ thực hiện (VD: `Payment Gateway`, `Inventory System`)."
                      ]
                    },
                    {
                      number: "3",
                      title: "Brief Description",
                      bullets: [
                        "Đoạn tóm tắt từ 1 đến 2 câu ngắn gọn giải thích bản chất mục tiêu nghiệp vụ của ca sử dụng."
                      ]
                    },
                    {
                      number: "4",
                      title: "Trigger (Sự kiện kích hoạt)",
                      bullets: [
                        "Sự kiện khởi đầu làm xuất hiện yêu cầu thực thi ca sử dụng (VD: Khách hàng nhấn nút 'Tiến hành thanh toán' từ giỏ hàng)."
                      ]
                    },
                    {
                      number: "5",
                      title: "Preconditions (Tiền điều kiện)",
                      bullets: [
                        "Các điều kiện **bắt buộc phải thỏa mãn TRƯỚC KHI** ca sử dụng có thể bắt đầu (VD: Người dùng đã đăng nhập, giỏ hàng có ít nhất 1 sản phẩm)."
                      ]
                    },
                    {
                      number: "6",
                      title: "Postconditions (Hậu điều kiện)",
                      bullets: [
                        "Trạng thái của hệ thống **được bảo đảm đạt được SAU KHI** ca sử dụng hoàn thành thành công (VD: Đơn hàng tạo ở trạng thái Chờ xử lý, tiền đã trừ, email xác nhận đã gửi)."
                      ]
                    },
                    {
                      number: "7",
                      title: "Normal Flow (Luồng chính)",
                      bullets: [
                        "Kịch bản thành công lý tưởng (Happy Path / Main Success Scenario).",
                        "Được đánh số thứ tự từ 1 đến N, bắt buộc **luân phiên tương tác (Alternating steps)**: Bước lẻ là hành vi Actor, bước chẵn là phản hồi Hệ thống."
                      ]
                    },
                    {
                      number: "8",
                      title: "Alternate & Exception Flows",
                      bullets: [
                        "**Alternate Flow (3a):** Nhánh rẽ thành công khác (VD: Áp mã giảm giá hợp lệ).",
                        "**Exception Flow (3b):** Nhánh lỗi hoặc ngoại lệ khiến ca sử dụng không thể hoàn tất (VD: Thẻ tín dụng bị từ chối)."
                      ]
                    },
                    {
                      number: "9",
                      title: "Business Rules & NFRs",
                      bullets: [
                        "Dẫn chiếu đến các quy tắc nghiệp vụ theo mã định danh (Rule ID như `BR-12`).",
                        "Ghi chú các ràng buộc phi chức năng đặc thù (thời gian phản hồi dưới 2 giây, mã hóa SSL 256-bit)."
                      ]
                    }
                  ]
                },
                {
                  type: "paragraph",
                  text: "**Nghiên cứu ca sử dụng điển hình (Worked Example) — `UC-12: Place Order`:**"
                },
                {
                  type: "component",
                  component: "FullyDressedTemplateInteractiveStudio"
                }
              ]
            }
          ]
        },

        /* 4.3. Kiến trúc Tách rời Quy tắc Nghiệp vụ (Business Rules Decoupling) */
        {
          id: "ad4-sub-4-3",
          label: "4.3",
          title: "Kiến Trúc Tách Rời Quy Tắc Nghiệp Vụ (Business Rules Decoupling)",
          parts: [
            {
              id: "ad4-part-4-3-a",
              label: "a",
              title: "Nguyên Tắc Decoupling, Lợi Ích Truy Vết & 4 Nhóm Quy Tắc Nghiệp Vụ",
              content: [
                {
                  type: "paragraph",
                  text: "**Nguyên lý tách rời Quy tắc nghiệp vụ (Business Rules Decoupling):** Một trong những sai lầm tai hại nhất của người phân tích là sao chép toàn bộ văn bản chính sách nghiệp vụ dài dằng dặc vào bên trong các bước của Use Case Description. Quy chuẩn phần mềm hiện đại yêu cầu **lưu trữ Business Rules trong một bảng thuật ngữ / tài liệu riêng biệt (Separate Glossary)** và chỉ **dẫn chiếu qua mã định danh (Rule ID)** như `BR-01`, `BR-12`, `BR-15`..."
                },
                {
                  type: "cards",
                  columns: 2,
                  items: [
                    {
                      title: "Giá trị 1: Traceability (Khả năng truy vết)",
                      tag: "Maintainability",
                      bullets: [
                        "Khi chính sách công ty hoặc quy định pháp luật thay đổi, ta chỉ cần cập nhật tại **một vị trí duy nhất** trong từ điển Business Rules.",
                        "Dễ dàng quét ngược lại toàn bộ hệ thống để biết những ca sử dụng nào bị ảnh hưởng bởi thay đổi đó."
                      ]
                    },
                    {
                      title: "Giá trị 2: Reusability (Khả năng tái sử dụng)",
                      tag: "Clean Architecture",
                      bullets: [
                        "Một quy tắc nghiệp vụ (ví dụ: công thức tính tiền phạt trễ hạn `BR-15` hoặc quy chuẩn độ mạnh mật khẩu `BR-05`) có thể được áp dụng chung cho nhiều Use Case khác nhau.",
                        "Tránh trùng lặp tài liệu và triệt tiêu nguy cơ mâu thuẫn giữa các Use Case."
                      ]
                    }
                  ]
                },
                {
                  type: "paragraph",
                  text: "**4 Nhóm Business Rules kinh điển trong Phân tích Thiết kế:**"
                },
                {
                  type: "cards",
                  columns: 4,
                  items: [
                    {
                      number: "1",
                      title: "Validation Limits",
                      bullets: [
                        "Ràng buộc định dạng và biên độ dữ liệu đầu vào.",
                        "VD: Tối đa 5 cuốn sách mượn cùng lúc, số tín chỉ từ 12 đến 24."
                      ]
                    },
                    {
                      number: "2",
                      title: "Eligibility",
                      bullets: [
                        "Quy định điều kiện về tư cách hoặc trạng thái đối tượng.",
                        "VD: Sinh viên phải đóng đủ học phí kỳ trước mới được đăng ký môn."
                      ]
                    },
                    {
                      number: "3",
                      title: "Calculations",
                      bullets: [
                        "Công thức tính toán số học hoặc thuật toán kinh tế.",
                        "VD: Phí trễ hạn = 5.000 VNĐ × số ngày quá hạn × hệ số sách quý."
                      ]
                    },
                    {
                      number: "4",
                      title: "Authorization",
                      bullets: [
                        "Quyền hạn và cấp bậc phê duyệt nghiệp vụ đặc biệt.",
                        "VD: Chỉ Trưởng khoa mới có thẩm quyền ký duyệt nâng sĩ số lớp vượt trần."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "BusinessRulesTraceabilityWorkbench"
                }
              ]
            },
            {
              id: "ad4-part-4-3-b",
              label: "b",
              title: "Kiểm tra phản xạ trắc nghiệm Mục IV: Use-Case Descriptions Mastery",
              content: [
                {
                  type: "component",
                  component: "AdMicroQuizCard",
                  props: {
                    quizId: "ad4-q4",
                    badge: "Micro-Quiz #4: Use-Case Descriptions & Business Rules",
                    question: "Khi thiết kế Use-Case Description theo chuẩn Fully-Dressed, nguyên tắc nào sau đây là BẮT BUỘC để bảo đảm chất lượng học thuật?",
                    options: [
                      "Quy tắc nghiệp vụ tách thành danh mục riêng và chỉ dẫn chiếu qua mã định danh Rule ID.",
                      "Mọi thao tác giao diện như nút bấm hay màu sắc màn hình đều phải ghi rõ trong từng bước.",
                      "Bỏ qua hoàn toàn các kịch bản ngoại lệ để tập trung tối đa cho luồng thành công chính.",
                      "Viết tất cả các bước hành động dồn về phía hệ thống mà không cần thể hiện vai trò Actor."
                    ],
                    correctIndex: 0,
                    explanation: "Theo chuẩn công nghệ phần mềm, Business Rules phải được tách riêng vào Business Rules Glossary và dẫn chiếu qua mã định danh (Rule ID) để tối ưu khả năng tái sử dụng (Reusability) và truy vết (Traceability). Không được đưa chi tiết UI vào logical use case, không được bỏ qua Exception flows, và các bước phải luân phiên giữa Actor và System.",
                    citation: "Giáo trình Phân tích thiết kế yêu cầu — Chapter 4: Section 4.3 & 4.6 (Business Rules in Use Cases)"
                  }
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION V: USE-CASE DESCRIPTION EXERCISE (LIBRARY SYSTEM)
       ============================================================ */
    {
      id: "ad4-section-5",
      roman: "V",
      title: "Use-Case Description Exercise — Bài Tập Hệ Thống Thư Viện",
      badge: "Hands-on Case Study",
      desc: "Thực hành toàn diện bài toán Đặt sách thư viện (Library Book Reservation System): Dựng biểu đồ Use-Case Diagram, soạn thảo Brief Description, hoàn thiện Fully-Dressed Description và mổ xẻ 4 sai lầm kinh điển cần tránh.",
      subsections: [
        /* 5.1, 5.2, 5.3 & 5.4. Dựng Diagram & 2 Quy tắc vàng */
        {
          id: "ad4-sub-5-1",
          label: "5.1",
          title: "Step 1: Xác Định Tác Nhân, Ca Sử Dụng & Dựng Biểu Đồ Thư Viện",
          parts: [
            {
              id: "ad4-part-5-1-a",
              label: "a",
              title: "Phân Tích Nghiệp Vụ Hệ Thống Thư Viện & 2 Quy Tắc Vàng Kiểm Tra UML",
              content: [
                {
                  type: "paragraph",
                  text: "**Mô tả bài toán tình huống (Problem Statement):** Hệ thống quản lý mượn và đặt trước sách thư viện (Library Book Reservation System) phục vụ độc giả tra cứu danh mục và đặt giữ chỗ sách khi sách đang bị mượn hết. Thủ thư quản lý việc bàn giao sách giữ chỗ và tiếp nhận sách trả lại. Hệ thống tự động phát thông báo khi sách được trả về kho để mời độc giả tiếp theo đến nhận sách."
                },
                {
                  type: "cards",
                  columns: 2,
                  items: [
                    {
                      title: "3 Tác Nhân Ngoài (Actors)",
                      tag: "Outside Boundary",
                      bullets: [
                        "**Member (Độc giả / Thành viên):** Tác nhân chính (Primary Actor) tra cứu sách và thực hiện đặt trước chỗ.",
                        "**Librarian (Thủ thư):** Tác nhân quản trị xử lý thủ công việc quản lý sách đặt và nhận sách hoàn trả.",
                        "**Notification Service (Dịch vụ gửi thông báo):** Tác nhân hệ thống ngoài (Secondary / Background Daemon) tự động gửi email/SMS."
                      ]
                    },
                    {
                      title: "5 Ca Sử Dụng (Use Cases)",
                      tag: "Inside Boundary",
                      bullets: [
                        "**Search Catalog:** Tra cứu tài liệu và tình trạng sách trong kho.",
                        "**Reserve Book:** Đặt giữ chỗ một cuốn sách hiện đang bị người khác mượn.",
                        "**Manage Hold:** Thủ thư kiểm tra và quản lý danh sách sách chờ nhận.",
                        "**Process Return:** Thủ thư nhập hệ thống khi sách được trả về.",
                        "**Notify Member:** Hệ thống tự động gửi tin báo sách đã có sẵn."
                      ]
                    }
                  ]
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "2 Quy Tắc Vàng Kiểm Tra Tính Toàn Vẹn Biểu Đồ UML (Golden Validation Rules)",
                  text: "1. **Mọi Use Case phải kết nối tới ít nhất 1 Actor:** Một Use Case không thể tự nhiên tồn tại độc lập mà không phục vụ hoặc tương tác với bất kỳ tác nhân nào trong thế giới thực.\n2. **Mọi Actor phải kết nối tới ít nhất 1 Use Case:** Không bao giờ vẽ một hình người que cô đơn ngoài ranh giới nếu nhân vật đó không kích hoạt hay tham gia vào bất kỳ chức năng nào của hệ thống."
                },
                {
                  type: "component",
                  component: "LibrarySystemDiagramStudio"
                }
              ]
            }
          ]
        },

        /* 5.2. Soạn thảo Brief & Fully-Dressed Description */
        {
          id: "ad4-sub-5-2",
          label: "5.2",
          title: "Step 2 & 3: Soạn Thảo Brief & Fully-Dressed Description Cho Reserve Book",
          parts: [
            {
              id: "ad4-part-5-2-a",
              label: "a",
              title: "Thực Hành Soạn Thảo Ca Sử Dụng Đặt Sách (Reserve Book)",
              content: [
                {
                  type: "paragraph",
                  text: "**Step 2: Viết Brief Description qua 3 câu hỏi cốt tử:**"
                },
                {
                  type: "cards",
                  columns: 3,
                  items: [
                    {
                      number: "1",
                      title: "Ai bắt đầu ca sử dụng?",
                      bullets: [
                        "**Who initiates?**",
                        "Độc giả (Member) của thư viện có tài khoản hợp lệ."
                      ]
                    },
                    {
                      number: "2",
                      title: "Mục tiêu hướng tới là gì?",
                      bullets: [
                        "**What is the goal?**",
                        "Đặt giữ chỗ trước một cuốn sách hiện đang được người khác mượn."
                      ]
                    },
                    {
                      number: "3",
                      title: "Hệ thống mang lại kết quả gì?",
                      bullets: [
                        "**What does system deliver?**",
                        "Xác nhận ghi nhận hàng chờ và cam kết giữ sách khi có người trả."
                      ]
                    }
                  ]
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "Bản thảo Brief Description chuẩn mực cho Reserve Book",
                  text: "«Một Thành viên thư viện (Member) tra cứu một cuốn sách hiện không có sẵn trên giá và gửi yêu cầu đặt chỗ trước. Hệ thống kiểm tra tính hợp lệ của tài khoản, thêm Thành viên vào danh sách chờ của cuốn sách và cấp số thứ tự giữ chỗ. Khi cuốn sách được trả về thư viện, hệ thống sẽ tự động gửi thông báo cho Thành viên.»"
                },
                {
                  type: "paragraph",
                  text: "**Step 3: Nâng cấp lên Fully-Dressed Description hoàn chỉnh:** Áp dụng toàn bộ 9 trường chuẩn mực, xác định rõ Normal Flow 4 bước luân phiên, Alternate Flow 2a (sách còn trên giá) và Exception Flow 2b (thẻ thư viện bị khóa do nợ phạt)."
                },
                {
                  type: "component",
                  component: "ReserveBookAuthoringLab"
                }
              ]
            }
          ]
        },

        /* 5.3. Bốn sai lầm kinh điển cần tránh & Đấu trường chẩn đoán */
        {
          id: "ad4-sub-5-3",
          label: "5.3",
          title: "4 Sai Lầm Kinh Điển Cần Tránh & Đấu Trường Chẩn Đoán",
          parts: [
            {
              id: "ad4-part-5-3-a",
              label: "a",
              title: "Mổ Xẻ 4 Cạm Bẫy Phổ Biến Khi Viết Use Case Description",
              content: [
                {
                  type: "paragraph",
                  text: "Trong thực tế dự án phần mềm, các kỹ sư thường mắc phải **4 lỗi sai phổ biến (Common Pitfalls)** làm giảm giá trị và tính linh hoạt của tài liệu đặc tả ca sử dụng:"
                },
                {
                  type: "cards",
                  columns: 2,
                  items: [
                    {
                      number: "1",
                      title: "Trộn chi tiết giao diện (Mixing UI Details)",
                      tag: "Lỗi thiết kế sớm",
                      bullets: [
                        "**Sai lầm:** Ghi rõ 'Người dùng nhấn nút màu xanh ở góc dưới bên phải', 'Chọn từ dropdown menu mã màu hex...'.",
                        "**Chuẩn mực:** Chỉ mô tả bản chất logic nghiệp vụ ('Khách hàng xác nhận đơn hàng'). UI có thể thay đổi trên Mobile, Web, Voice mà logic nghiệp vụ vẫn giữ nguyên."
                      ]
                    },
                    {
                      number: "2",
                      title: "Không luân phiên tương tác (Non-Alternating Steps)",
                      tag: "Lỗi dòng chảy",
                      bullets: [
                        "**Sai lầm:** Viết một danh sách 5 bước liên tiếp chỉ do hệ thống tự làm, hoặc chỉ do người dùng làm mà không thấy phản hồi.",
                        "**Chuẩn mực:** Use Case là cuộc đối thoại hai chiều: Hành động của Tác nhân kích hoạt phản hồi của Hệ thống (Actor action ➔ System response)."
                      ]
                    },
                    {
                      number: "3",
                      title: "Bỏ qua kịch bản ngoại lệ (Skipping Exception Flows)",
                      tag: "Lỗi Happy Path",
                      bullets: [
                        "**Sai lầm:** Chỉ viết trường hợp người dùng thao tác hoàn hảo, mạng ổn định, tài khoản đầy tiền.",
                        "**Chuẩn mực:** Trong thực tế, hơn 70% lỗi phát sinh từ các nhánh ngoại lệ (thẻ hết hạn, sách hỏng, mất kết nối cổng thanh toán) — bắt buộc phải được đặc tả rõ."
                      ]
                    },
                    {
                      number: "4",
                      title: "Viết Brief quá chi tiết (Overly Detailed Brief)",
                      tag: "Lỗi phân cấp",
                      bullets: [
                        "**Sai lầm:** Nhồi nhét toàn bộ điều kiện rẽ nhánh, mã lỗi và thuật toán vào bản Brief Description.",
                        "**Chuẩn mực:** Bản Brief phải giữ đúng vai trò 'Executive Summary' (1-2 câu tóm tắt mục tiêu), nhường toàn bộ chi tiết cho bản Fully-Dressed."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "UseCaseAuthoringPitfallsArena"
                }
              ]
            },
            {
              id: "ad4-part-5-3-b",
              label: "b",
              title: "Kiểm tra phản xạ trắc nghiệm Mục V: Library System & Best Practices",
              content: [
                {
                  type: "component",
                  component: "AdMicroQuizCard",
                  props: {
                    quizId: "ad4-q5",
                    badge: "Micro-Quiz #5: Authoring Best Practices Mastery",
                    question: "Khi thực hiện bài tập xây dựng Use-Case Description cho ca sử dụng Reserve Book, sai lầm phổ biến nào cần phải TRÁNH?",
                    options: [
                      "Đưa trực tiếp chi tiết giao diện như tên nút bấm vào luồng nghiệp vụ thay vì mô tả bản chất logic.",
                      "Tách biệt rõ ràng hành vi tương tác luân phiên giữa Tác nhân bên ngoài và phản hồi của Hệ thống.",
                      "Thiết kế kịch bản ngoại lệ chi tiết khi tài khoản thành viên vi phạm quy định mượn sách thư viện.",
                      "Đặt tiền điều kiện xác định trạng thái tài khoản và hậu điều kiện bảo đảm ghi nhận hàng chờ sách."
                    ],
                    correctIndex: 0,
                    explanation: "Sai lầm hàng đầu khi viết Use-Case Description là đưa chi tiết giao diện đồ họa (UI specifics như nút bấm, dropdown, màu sắc, vị trí màn hình) vào luồng mô tả thay vì tập trung vào ý định và hành vi logic nghiệp vụ của Tác nhân. Ba phương án còn lại đều là thực hành chuẩn mực cần tuân thủ.",
                    citation: "Giáo trình Phân tích thiết kế yêu cầu — Chapter 4: Section 5.7 (Common Mistakes to Avoid)"
                  }
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION VI: ADVANCED USE-CASE FEATURES
       ============================================================ */
    {
      id: "ad4-section-6",
      roman: "VI",
      title: "Advanced Use-Case Features — Quan Hệ Nâng Cao & Phân Gói",
      badge: "Advanced Modeling",
      desc: "Làm chủ 3 mối quan hệ tái sử dụng hành vi không trùng lặp (<<include>>, <<extend>>, Generalization), kỹ thuật định nghĩa Named Extension Points và chiến lược đóng gói hệ thống lớn (Packages).",
      subsections: [
        /* 6.1, 6.2, 6.3 & 6.4. Ba mối quan hệ tái sử dụng nâng cao */
        {
          id: "ad4-sub-6-1",
          label: "6.1",
          title: "Ba Mối Quan Hệ Tái Sử Dụng Nâng Cao (<<include>>, <<extend>>, Generalization)",
          parts: [
            {
              id: "ad4-part-6-1-a",
              label: "a",
              title: "Khái Niệm, Hướng Mũi Tên & Bảng So Sánh Phải Thuộc Khi Đi Thi",
              content: [
                {
                  type: "paragraph",
                  text: "Khi xây dựng hệ thống phần mềm thực tế, các ca sử dụng không tồn tại biệt lập mà thường chia sẻ hành vi chung hoặc có những biến thể mở rộng. UML cung cấp **3 mối quan hệ nâng cao** giúp tái sử dụng và tùy biến hành vi ca sử dụng mà **không gây trùng lặp mã nguồn hay đặc tả (DRY - Don't Repeat Yourself)**:"
                },
                {
                  type: "cards",
                  columns: 3,
                  items: [
                    {
                      title: "1. <<include>> Relationship",
                      tag: "Bắt buộc — Mandatory",
                      bullets: [
                        "**Ý nghĩa:** Base use case **luôn luôn gọi** included use case. Đây là hành vi bắt buộc (Mandatory), không thể bỏ qua.",
                        "**Đặc tính:** Dùng để trích xuất hành vi dùng chung giữa nhiều use cases nhằm triệt tiêu trùng lặp. Base use case **không hoàn chỉnh nếu thiếu included part**.",
                        "**Hướng mũi tên:** Mũi tên nét đứt từ **Base Use Case ──► Included Use Case**."
                      ]
                    },
                    {
                      title: "2. <<extend>> Relationship",
                      tag: "Tùy chọn — Conditional",
                      bullets: [
                        "**Ý nghĩa:** Extending use case bổ sung hành vi **tùy chọn hoặc có điều kiện** vào một điểm cụ thể của luồng cơ sở.",
                        "**Đặc tính:** Base use case **đã tự hoàn chỉnh một mình**. Luồng mở rộng chỉ chạy khi thỏa mãn điều kiện quy định.",
                        "**Hướng mũi tên:** Mũi tên nét đứt từ **Extension Use Case ──► Base Use Case** (Ngược chiều với include!)."
                      ]
                    },
                    {
                      title: "3. Generalization",
                      tag: "Kế thừa — Specialization",
                      bullets: [
                        "**Ý nghĩa:** Mô hình hóa quan hệ cha-con (Parent-Child). Ca sử dụng cha chứa hành vi trừu tượng chung, các ca con là các hiện thực cụ thể.",
                        "**Đặc tính:** Ca sử dụng con kế thừa các bước của cha, có thể bổ sung hoặc ghi đè (override) các bước cụ thể.",
                        "**Ký hiệu:** Đường nét liền với mũi tên **tam giác rỗng (Hollow triangle)** từ **Child ──▷ Parent**."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "UmlRelationshipTripleArena"
                }
              ]
            }
          ]
        },

        /* 6.5. Extension Points */
        {
          id: "ad4-sub-6-2",
          label: "6.2",
          title: "Điểm Mở Rộng Định Danh (Named Extension Points)",
          parts: [
            {
              id: "ad4-part-6-2-a",
              label: "a",
              title: "Cơ Chế Neo Vị Trí Chèn Luồng Mở Rộng & 2 Lợi Ích Kiến Trúc",
              content: [
                {
                  type: "paragraph",
                  text: "**Điểm mở rộng định danh (Named Extension Point)** là vị trí được đánh dấu chính xác nơi mà quan hệ `<<extend>>` có quyền chèn hành vi bổ sung vào luồng thực thi của Base Use Case. Thay vì ghi mơ hồ 'chèn vào đâu đó trong luồng', Kỹ sư phân tích bắt buộc phải khai báo tường minh Extension Point ngay bên trong tài liệu đặc tả Base Use Case Description:"
                },
                {
                  type: "cards",
                  columns: 2,
                  items: [
                    {
                      title: "Thành phần khai báo Extension Point",
                      tag: "Specification Standard",
                      bullets: [
                        "**Tên điểm mở rộng (Name):** Tên định danh mang ý nghĩa nghiệp vụ (Ví dụ: `financing`, `coupon_discount`).",
                        "**Vị trí bước (Step location):** Vị trí cụ thể trong Normal Flow mà tại đó hệ thống kiểm tra điều kiện chèn luồng (Ví dụ: Bước 3 trong quy trình Đăng ký môn học)."
                      ]
                    },
                    {
                      title: "2 Lợi ích kiến trúc cốt tử (Slide 6.5)",
                      tag: "Maintainability & Scalability",
                      bullets: [
                        "**Giữ Base Use Case ổn định:** Luồng chính không bị rác hoặc phình to bởi hàng chục điều kiện rẽ nhánh phức tạp.",
                        "**Dễ dàng mở rộng trong tương lai:** Sau này có thêm kịch bản mở rộng mới (như tài trợ học bổng doanh nghiệp), ta chỉ cần trỏ vào cùng Extension Point mà không cần chỉnh sửa Base Use Case."
                      ]
                    }
                  ]
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Ví dụ kinh điển trong Giáo trình: Ca sử dụng Register for Course",
                  text: "1. Sinh viên chọn các môn học mong muốn từ danh mục.\n2. Hệ thống kiểm tra điều kiện tiên quyết và lịch biểu.\n3. **Extension point: financing** (Tại đây, ca sử dụng Apply Financial Aid sẽ chèn vào nếu sinh viên có nộp đơn xin hỗ trợ).\n4. Hệ thống xác nhận và hoàn tất đăng ký học phần."
                },
                {
                  type: "component",
                  component: "ExtensionPointExecutionSimulator"
                }
              ]
            }
          ]
        },

        /* 6.6. Đóng gói Ca sử dụng (Organizing Use Cases with Packages) */
        {
          id: "ad4-sub-6-3",
          label: "6.3",
          title: "Đóng Gói Ca Sử Dụng (Organizing Use Cases with Packages)",
          parts: [
            {
              id: "ad4-part-6-3-a",
              label: "a",
              title: "3 Chiến Lược Phân Nhóm & Quy Tắc Liên Kết Xuyên Biên Giới Gói",
              content: [
                {
                  type: "paragraph",
                  text: "Trong các dự án phần mềm doanh nghiệp quy mô lớn (Enterprise Systems), số lượng ca sử dụng có thể lên tới hàng chục thậm chí hàng trăm ca. Để kiểm soát độ phức tạp, ta phải gom nhóm các ca sử dụng liên quan thành các **Gói (Packages)**:"
                },
                {
                  type: "cards",
                  columns: 3,
                  items: [
                    {
                      number: "1",
                      title: "Gom theo Tác nhân (By Actor)",
                      bullets: [
                        "Phân chia theo đối tượng người dùng thụ hưởng hoặc quản trị.",
                        "VD: Gói *Student Services* (dành cho Sinh viên) và gói *Registrar Services* (dành cho Phòng Đào tạo)."
                      ]
                    },
                    {
                      number: "2",
                      title: "Gom theo Phân hệ (By Subsystem)",
                      bullets: [
                        "Phân chia theo ranh giới mô-đun hoặc Microservices.",
                        "VD: Phân hệ *Enrollment Subsystem* (Xử lý đăng ký) và phân hệ *Billing Subsystem* (Xử lý tài chính/học phí)."
                      ]
                    },
                    {
                      number: "3",
                      title: "Gom theo Quy trình (By Process)",
                      bullets: [
                        "Phân chia theo chuỗi giá trị nghiệp vụ từ đầu đến cuối.",
                        "VD: Quy trình *Semester Course Planning* và quy trình *Student Enrollment & Payment*."
                      ]
                    }
                  ]
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "Quy tắc kiến trúc vàng: Quan hệ có quyền xuyên thủng ranh giới gói (Cross Package Boundaries)",
                  text: "Các mối quan hệ `<<include>>`, `<<extend>>` và `Generalization` hoàn toàn có thể kết nối giữa các ca sử dụng thuộc hai gói khác nhau (Ví dụ: `Register for Course` trong gói Sinh viên có thể include `Validate Prerequisite` trong gói Phòng Đào tạo hoặc liên kết tới gói Thanh toán)."
                },
                {
                  type: "component",
                  component: "UseCasePackageArchitectureStudio"
                }
              ]
            },
            {
              id: "ad4-part-6-3-b",
              label: "b",
              title: "Kiểm tra phản xạ trắc nghiệm Mục VI: Advanced Relationships Mastery",
              content: [
                {
                  type: "component",
                  component: "AdMicroQuizCard",
                  props: {
                    quizId: "ad4-q6",
                    badge: "Micro-Quiz #6: Advanced Relationships & Packages",
                    question: "Khi áp dụng các mối quan hệ nâng cao trong Use-Case Diagram, nhận định nào sau đây là CHÍNH XÁC nhất?",
                    options: [
                      "Quan hệ extend có hướng mũi tên từ Extension trỏ ngược về Base tại Extension Point.",
                      "Quan hệ include chỉ thực thi khi thỏa mãn một điều kiện nghiệp vụ cụ thể phát sinh.",
                      "Quan hệ generalization sử dụng đường nét đứt với ký hiệu stereotype là generalize.",
                      "Các quan hệ include và extend tuyệt đối không được phép kết nối xuyên qua Packages."
                    ],
                    correctIndex: 0,
                    explanation: "Trong UML, quan hệ <<extend>> có hướng mũi tên nét đứt trỏ ngược từ ca sử dụng mở rộng (Extension) về ca sử dụng cơ sở (Base) tại điểm mở rộng (Extension Point). Ngược lại, <<include>> là bắt buộc và trỏ từ Base -> Included, Generalization dùng nét liền mũi tên tam giác rỗng, và các quan hệ hoàn toàn có thể kết nối xuyên biên giới Packages.",
                    citation: "Giáo trình Phân tích thiết kế yêu cầu — Chapter 4: Section 6.2 & 6.4 (include vs extend comparison)"
                  }
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION VII: ÔN THI NHANH - KEY TAKEAWAYS & CHECKLIST
       ============================================================ */
    {
      id: "ad4-section-7",
      roman: "VII",
      title: "Ôn Thi Nhanh — Key Takeaways, Bẫy Thi & Checklist Phân Tích Thiết Kế",
      badge: "Exam Mastery",
      desc: "Tổng hợp toàn bộ kiến thức trọng tâm của Chapter 4, radar hóa giải 7 cạm bẫy phòng thi kinh điển, bảng kiểm định checklist chuẩn slide và bộ thẻ flashcard ôn tập siêu tốc 60 giây.",
      subsections: [
        /* 7.1 & 7.2. Key Takeaways & Radar giải bẫy */
        {
          id: "ad4-sub-7-1",
          label: "7.1",
          title: "Key Takeaways Toàn Chương & Radar Hóa Giải 7 Cạm Bẫy Phòng Thi",
          parts: [
            {
              id: "ad4-part-7-1-a",
              label: "a",
              title: "Tóm Tắt Tinh Hoa Toàn Chương & Nhận Diện 7 Cạm Bẫy Đề Thi",
              content: [
                {
                  type: "paragraph",
                  text: "**Tổng kết 5 trụ cột kiến thức then chốt của Chapter 4 (Key Takeaways):**"
                },
                {
                  type: "cards",
                  columns: 2,
                  items: [
                    {
                      number: "1",
                      title: "Baseline & Discovery Phase",
                      bullets: [
                        "**Baseline:** Đóng băng scope và vision ban đầu để làm căn cứ kiểm soát thay đổi (Change Control).",
                        "**Discovery Phase:** Khám phá và cấu trúc hóa requirements theo chu trình lặp: trả lời câu hỏi 'Hệ thống phải làm gì?' (WHAT trước HOW)."
                      ]
                    },
                    {
                      number: "2",
                      title: "Diagram (Mục lục) vs Description (Nội dung)",
                      bullets: [
                        "**Use-Case Diagram:** Đóng vai trò như Mục lục sách (chỉ ra chức năng tồn tại và ai tương tác).",
                        "**Use-Case Description:** Đóng vai trò Nội dung chương (3 mức Brief, Casual, Fully Dressed 9 trường, luồng luân phiên hai chiều Actor/System)."
                      ]
                    },
                    {
                      number: "3",
                      title: "Decoupled Business Rules",
                      bullets: [
                        "Không nhét văn bản chính sách dài vào luồng use case mà lưu trong Glossary riêng và chỉ dẫn chiếu qua `Rule ID`.",
                        "Bảo đảm tính tái sử dụng (Reusability) và khả năng truy vết (Traceability) khi chính sách thay đổi."
                      ]
                    },
                    {
                      number: "4",
                      title: "Advanced Relationships & Packages",
                      bullets: [
                        "`<<include>>`: Bắt buộc, mũi tên Base ──► Included.",
                        "`<<extend>>`: Tùy chọn, mũi tên Extension ──► Base tại Named Extension Point.",
                        "`Generalization`: Mũi tên tam giác rỗng Child ──▷ Parent.",
                        "Gom nhóm ca sử dụng thành Packages và liên kết xuyên biên giới gói."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "ExamTrapBusterRadar"
                }
              ]
            }
          ]
        },

        /* 7.3. Checklist phân tích thiết kế theo đúng slide */
        {
          id: "ad4-sub-7-2",
          label: "7.2",
          title: "Checklist Đánh Giá Năng Lực Requirements Analysis & Design (Theo Đúng Slide)",
          parts: [
            {
              id: "ad4-part-7-2-a",
              label: "a",
              title: "Bảng Kiểm Định 5 Phân Hệ Kiến Thức & Ranh Giới Phạm Vi Giáo Trình",
              content: [
                {
                  type: "paragraph",
                  text: "Để chuẩn bị chuyển giao sang giai đoạn Thiết kế hệ thống (System Design), hãy sử dụng bảng kiểm định dưới đây để rà soát toàn bộ các tiêu chuẩn phân tích yêu cầu đã học:"
                },
                {
                  type: "component",
                  component: "RequirementsDesignInteractiveChecklist"
                }
              ]
            }
          ]
        },

        /* Tóm tắt 1 phút & Micro-Quiz #7 */
        {
          id: "ad4-sub-7-3",
          label: "7.3",
          title: "Tóm Tắt 1 Phút & Trắc Nghiệm Tổng Hợp Toàn Bộ Chapter 4",
          parts: [
            {
              id: "ad4-part-7-3-a",
              label: "a",
              title: "9 Thuật Ngữ Cốt Tử Cuối Chương Cần Nhớ Trước Giờ Thi",
              content: [
                {
                  type: "paragraph",
                  text: "Dưới đây là bộ thẻ tóm tắt siêu tốc 60 giây đúc kết toàn bộ 9 khái niệm then chốt nhất của Chapter 4:"
                },
                {
                  type: "component",
                  component: "OneMinuteChapterSprintCards"
                }
              ]
            },
            {
              id: "ad4-part-7-3-b",
              label: "b",
              title: "Kiểm tra phản xạ trắc nghiệm Mục VII: Toàn Diện Chapter 4 Mastery",
              content: [
                {
                  type: "component",
                  component: "AdMicroQuizCard",
                  props: {
                    quizId: "ad4-q7",
                    badge: "Micro-Quiz #7: Chapter 4 Comprehensive Mastery",
                    question: "Khi tổng kết toàn bộ kiến thức của Chapter 4, kết luận nào sau đây phản ánh ĐÚNG nguyên lý cốt lõi?",
                    options: [
                      "Giai đoạn Discovery tập trung cấu trúc yêu cầu và làm rõ WHAT trước khi quyết định HOW.",
                      "Tài liệu Baseline là bản yêu cầu cuối cùng hoàn chỉnh và đóng băng bất biến của dự án.",
                      "Mô hình Use-Case Diagram đóng vai trò nội dung chương chi tiết giải thích luồng xử lý.",
                      "Nhánh ngoại lệ Exception Flow là biến thể thành công hợp lệ tương đương với luồng chính."
                    ],
                    correctIndex: 0,
                    explanation: "Nguyên lý cốt tử của Discovery Phase (Chapter 4) là khám phá, làm rõ và cấu trúc hóa các yêu cầu của người dùng để trả lời 'Hệ thống phải làm gì?' (WHAT before HOW) trước khi chuyển giao sang giai đoạn thiết kế kiến trúc và công nghệ. Baseline là mốc thay đổi chứ không bất biến, Diagram chỉ là mục lục (chỉ ra WHAT), và Exception Flow là luồng lỗi cản trở việc hoàn tất use case.",
                    citation: "Giáo trình Phân tích thiết kế yêu cầu — Chapter 4: Section 7.1, 7.2 & Tóm tắt 1 phút"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
