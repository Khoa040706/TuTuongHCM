export const adCh2Data = {
  id: "ad-ch2",
  title: "Chapter 2: Systems Development Life Cycle (SDLC) & Business Modeling",
  subtitle: "Chuyên sâu về Vòng đời phát triển hệ thống (SDLC), Đối chiếu 2 trường phái Predictive vs Adaptive, Chi tiết 5 giai đoạn cốt lõi và Mô hình hóa quy trình nghiệp vụ doanh nghiệp.",
  sections: [
    /* ============================================================
       SECTION 0: OVERVIEW HERO BANNER
       ============================================================ */
    {
      id: "ad2-section-0",
      roman: "★",
      title: "TỔNG QUAN SDLC & MÔ HÌNH HÓA QUY TRÌNH KINH DOANH",
      subsections: [
        {
          id: "ad2-sub-0",
          number: "0",
          title: "Chapter 2 SDLC & Business Process Blueprint",
          parts: [
            {
              id: "ad2-part-0-banner",
              label: "a",
              title: "Interactive SDLC & Business Modeling Cyber Studio",
              content: [
                {
                  type: "component",
                  component: "Chapter2HeroBanner"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION I: PREDICTIVE VS ADAPTIVE SDLC
       ============================================================ */
    {
      id: "ad2-section-1",
      roman: "I",
      title: "Predictive vs Adaptive SDLC",
      subsections: [
        {
          id: "ad2-sub-1-1",
          number: "1",
          title: "1.1 SDLC là gì? & Phân biệt 'Umbrella Concept' SDLC vs Methodology",
          parts: [
            {
              id: "ad2-part-1-1",
              label: "a",
              title: "Bản chất của SDLC và mối quan hệ với Methodology",
              content: [
                {
                  type: "paragraph",
                  text: "**SDLC (Systems Development Life Cycle)** là tập hợp có cấu trúc các giai đoạn (**phases**) và hoạt động cần thiết để lập kế hoạch (**plan**), xây dựng (**build**) và hỗ trợ bảo trì (**support**) một hệ thống thông tin hoàn chỉnh."
                },
                {
                  type: "bullet-list",
                  items: [
                    "**Mục tiêu tối thượng:** Mọi SDLC đều đưa dự án đi từ **nhu cầu kinh doanh ban đầu (Business need)** $\\to$ trở thành một **hệ thống hoạt động ổn định và được hỗ trợ đầy đủ (Working, supported system)**.",
                    "**Kiểm soát chuyển tiếp:** Mỗi phase trong SDLC tạo ra các sản phẩm chuyển giao (**Deliverables** bao gồm tài liệu đặc tả, mô hình UML, bản mẫu phần mềm) nhằm định hướng và kiểm soát chặt chẽ công việc ở phase kế tiếp.",
                    "**Quan hệ SDLC & Methodology:** Mọi phương pháp luận cụ thể (*Waterfall, Scrum, Unified Process, Kanban...*) đều là **một cách triển khai cụ thể của SDLC**. Chúng chỉ khác nhau ở cách sắp xếp trình tự (**sequence**) và tần suất lặp lại (**repeat**) các phase."
                  ]
                },
                {
                  type: "highlight",
                  text: "💡 **Key Idea:** **'SDLC'** là **khái niệm bao trùm (Umbrella concept)**. **'Methodology'** là **cách triển khai chi tiết, cụ thể** của SDLC đó trong thực tế dự án."
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-1-2",
          number: "2",
          title: "1.2 Hai cách tổ chức SDLC (Predictive Approach vs Adaptive Approach)",
          parts: [
            {
              id: "ad2-part-1-2-text",
              label: "a",
              title: "Triết lý và cách tiếp cận của 2 trường phái lớn",
              content: [
                {
                  type: "table",
                  headers: ["Đặc trưng", "Predictive Approach (Tiếp cận Dự đoán)", "Adaptive Approach (Tiếp cận Thích ứng)"],
                  rows: [
                    ["**Triết lý cốt lõi**", "*'Plan the work, then work the plan'* (Lập kế hoạch trước, rồi thực thi đúng kế hoạch).", "*'Embrace change, deliver early and often'* (Chào đón thay đổi, bàn giao sớm và thường xuyên)."],
                    ["**Cách triển khai**", "Requirements được xác định và lên kế hoạch toàn diện cho cả dự án ngay từ đầu; các phase chạy tuần tự (**sequence**).", "Requirements được kỳ vọng sẽ thay đổi liên tục; hệ thống được xây dựng và tinh chỉnh dần qua các vòng lặp ngắn (**iterations**)."],
                    ["**Dòng chảy (Flow)**", "`Plan ➔ Analyze ➔ Design ➔ Build ➔ Test ➔ Deploy` (Mỗi phase hoàn thành dứt điểm mới sang phase kế tiếp).", "`Plan ➔ Analyze/Design ➔ Build ➔ Review` (Iteration) $\\to$ lặp lại chu kỳ mới."],
                    ["**Phù hợp nhất**", "Requirements rõ ràng, ổn định, phạm vi cố định + Công nghệ đã quen thuộc, trưởng thành.", "Requirements chưa rõ ràng, dễ biến động, sản phẩm đổi mới sáng tạo, công nghệ mới."],
                    ["**Trọng tâm chú ý**", "Lập kế hoạch từ trước (up-front planning), phê duyệt trang trọng (formal sign-off), kiểm soát chặt phạm vi, chi phí và tiến độ.", "Vòng lặp ngắn (1-4 tuần), tăng dần (increment) phần mềm chạy được, thu nhận phản hồi từ khách hàng liên tục."],
                    ["**Ví dụ điển hình**", "Mô hình thác nước truyền thống (**Waterfall model**).", "**Agile/Scrum**, **Unified Process** (dạng lặp - iterative)."
                    ]
                  ]
                }
              ]
            },
            {
              id: "ad2-part-1-2-studio",
              label: "b",
              title: "Studio Đấu Trường: Đối Chiếu 6 Chiều Kích Thước Predictive vs Adaptive",
              content: [
                {
                  type: "component",
                  component: "PredictiveVsAdaptiveStudio"
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-1-3",
          number: "3",
          title: "1.3 Bảng so sánh chi tiết 6 khía cạnh giữa Predictive & Adaptive",
          parts: [
            {
              id: "ad2-part-1-3",
              label: "a",
              title: "So sánh chuyên sâu 6 Dimension quản trị dự án",
              content: [
                {
                  type: "table",
                  headers: ["Chiều kích thước (Dimension)", "Predictive Approach", "Adaptive Approach"],
                  rows: [
                    ["**1. Requirements (Yêu cầu)**", "Được xác định chi tiết, cố định và ký duyệt (freeze) ngay từ đầu dự án.", "Được kỳ vọng và chủ động chào đón thay đổi theo thời gian và phản hồi thị trường."],
                    ["**2. Planning (Lập kế hoạch)**", "Lập kế hoạch tổng thể cho toàn bộ vòng đời dự án ngay từ giai đoạn khởi động.", "Lập kế hoạch chi tiết theo từng vòng lặp (Sprint Planning / Iteration Planning)."],
                    ["**3. Delivery (Bàn giao)**", "Bàn giao toàn bộ hệ thống hoàn chỉnh một lần duy nhất ở giai đoạn cuối (Big-bang release).", "Bàn giao thường xuyên, xuất bản các bản tăng dần hoạt động được (Working increments)."],
                    ["**4. Change (Quản trị thay đổi)**", "Kiểm soát nghiêm ngặt qua quy trình thay đổi trang trọng (Formal change control process).", "Thay đổi được coi là cơ hội tạo giá trị gia tăng, được chào đón và tích hợp vào Backlog."],
                    ["**5. Customer involvement (Khách hàng)**", "Tập trung nhiều ở giai đoạn đầu (lấy yêu cầu) và giai đoạn cuối (nghiệm thu UAT).", "Khách hàng tham gia liên tục, xuyên suốt trong mọi buổi demo sau mỗi vòng lặp."],
                    ["**6. Documentation (Tài liệu)**", "Đầy đủ, trang trọng, chi tiết và có chữ ký xác nhận chuẩn mực (Formal documentation).", "Vừa đủ (Just enough), tập trung ưu tiên cao nhất cho phần mềm chạy tốt (Working software)."]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-1-4",
          number: "4",
          title: "1.4 Chọn Approach nào? (3 Tiêu chí quyết định & Checkpoint Quiz)",
          parts: [
            {
              id: "ad2-part-1-4-text",
              label: "a",
              title: "Ba yếu tố quyết định lựa chọn phương pháp tiếp cận phù hợp",
              content: [
                {
                  type: "paragraph",
                  text: "Việc quyết định áp dụng **Predictive** hay **Adaptive** phụ thuộc vào 3 yếu tố cốt lõi của bài toán thực tế:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Requirement Clarity (Độ rõ ràng và ổn định của yêu cầu)",
                      bullets: [
                        "Nếu nhu cầu nghiệp vụ đã rõ ràng, cố định, ít có nguy cơ thay đổi $\\to$ Chọn **Predictive**.",
                        "Nếu nhu cầu nghiệp vụ mơ hồ, khách hàng chưa hình dung rõ sản phẩm hoặc thị trường biến động $\\to$ Chọn **Adaptive**."
                      ]
                    },
                    {
                      number: "2",
                      title: "Project Size & Risk (Quy mô, Rủi ro và Quy chuẩn ngành)",
                      bullets: [
                        "Dự án quy mô khổng lồ, rủi ro an toàn cao, chịu sự kiểm toán pháp lý nghiêm ngặt (ngân hàng, hàng không, y tế) $\\to$ Cần lập kế hoạch và tài liệu chặt chẽ (**Predictive**).",
                        "Dự án đổi mới sáng tạo, thăm dò thị trường, cần phát hành sản phẩm nhanh (MVP) $\\to$ Chọn **Adaptive**."
                      ]
                    },
                    {
                      number: "3",
                      title: "Team & Culture (Kinh nghiệm đội ngũ và Văn hóa tổ chức)",
                      bullets: [
                        "Đội ngũ quen làm việc theo hợp đồng cố định, khách hàng bận rộn không thể họp hàng ngày $\\to$ Chọn **Predictive**.",
                        "Đội ngũ kỹ sư tự chủ cao, khách hàng sẵn sàng đồng hành phản hồi liên tục $\\to$ Chọn **Adaptive**."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "ad2-part-1-4-tree",
              label: "b",
              title: "Interactive Tool: Trình Mô Phỏng Đánh Giá Lựa Chọn Approach",
              content: [
                {
                  type: "component",
                  component: "ApproachSelectorDecisionTree"
                }
              ]
            },
            {
              id: "ad2-part-1-4-quiz",
              label: "c",
              title: "Checkpoint Quiz: Kiểm tra củng cố kiến thức Mục I",
              content: [
                {
                  type: "quiz",
                  quizId: "ad-ch2-sec1-quiz",
                  title: "Mini Checkpoint Quiz: Predictive vs Adaptive SDLC",
                  description: "Kiểm tra 4 câu hỏi trắc nghiệm củng cố toàn diện kiến thức Mục I.",
                  questions: [
                    {
                      id: "ad2-c1-q1",
                      question: "Trong phát triển phần mềm, mối quan hệ bản chất giữa SDLC và Methodology là gì?",
                      options: [
                        "SDLC là khung bao trùm tổng thể.",
                        "Methodology thay thế hoàn toàn SDLC.",
                        "SDLC chỉ dùng cho mô hình Waterfall.",
                        "Methodology không chứa các giai đoạn."
                      ],
                      answer: 0,
                      explanation: "SDLC là khái niệm bao trùm (Umbrella concept), còn Methodology (như Waterfall, Scrum) là cách triển khai chi tiết cụ thể của SDLC."
                    },
                    {
                      id: "ad2-c1-q2",
                      question: "Đặc trưng nổi bật nhất của trường phái Predictive Approach (tiếp cận dự đoán) là:",
                      options: [
                        "Lên kế hoạch toàn bộ từ đầu.",
                        "Thay đổi liên tục qua các vòng lặp.",
                        "Bỏ qua tài liệu đặc tả ban đầu.",
                        "Bàn giao sản phẩm tăng dần hàng tuần."
                      ],
                      answer: 0,
                      explanation: "Predictive Approach tuân theo triết lý 'Plan the work, then work the plan' — xác định toàn bộ yêu cầu, phạm vi và lên kế hoạch dứt điểm ngay từ đầu."
                    },
                    {
                      id: "ad2-c1-q3",
                      question: "Về phương diện quản trị sự thay đổi (Change), Adaptive Approach có quan điểm như thế nào?",
                      options: [
                        "Chào đón và kỳ vọng sự thay đổi.",
                        "Ngăn chặn triệt để mọi sự thay đổi.",
                        "Chỉ cho phép đổi sau khi kết thúc.",
                        "Phạt hợp đồng nếu có yêu cầu mới."
                      ],
                      answer: 0,
                      explanation: "Adaptive Approach (như Agile/Scrum) luôn chủ động chào đón và kỳ vọng yêu cầu sẽ thay đổi nhằm mang lại giá trị cao nhất cho khách hàng."
                    },
                    {
                      id: "ad2-c1-q4",
                      question: "Khi nào một dự án phần mềm NÊN ƯU TIÊN lựa chọn phương pháp tiếp cận Predictive Approach?",
                      options: [
                        "Yêu cầu đã rất rõ ràng và ổn định.",
                        "Yêu cầu chưa rõ, biến động liên tục.",
                        "Công nghệ mới mẻ chưa từng thử nghiệm.",
                        "Khách hàng muốn xem demo mỗi 2 tuần."
                      ],
                      answer: 0,
                      explanation: "Predictive Approach phù hợp tối ưu nhất khi yêu cầu nghiệp vụ đã rõ ràng, ổn định và sử dụng công nghệ quen thuộc đã trưởng thành."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION II: SDLC PHASES (5 GIAI ĐOẠN)
       ============================================================ */
    {
      id: "ad2-section-2",
      roman: "II",
      title: "SDLC Phases (Chi tiết 5 giai đoạn phát triển)",
      subsections: [
        {
          id: "ad2-sub-2-0",
          number: "0",
          title: "2.0 Tổng quan 5 Phases, 5 Câu hỏi cốt lõi & So sánh Tuần tự vs Lặp lại",
          parts: [
            {
              id: "ad2-part-2-0-table",
              label: "a",
              title: "Bảng 5 Giai đoạn & 5 Câu hỏi định hướng của SDLC",
              content: [
                {
                  type: "paragraph",
                  text: "5 giai đoạn của SDLC xuất hiện ở hầu hết mọi phương pháp phát triển hệ thống hiện đại, mỗi giai đoạn giải quyết một câu hỏi trọng tâm:"
                },
                {
                  type: "table",
                  headers: ["#", "Phase (Giai đoạn)", "Câu hỏi chính (Key Question)", "Mục đích cốt lõi (Purpose)"],
                  rows: [
                    ["1", "**Planning** (Lập kế hoạch)", "**Why build it?** (Tại sao cần xây dựng?)", "Xác định giá trị kinh doanh và đánh giá tính khả thi."],
                    ["2", "**Analysis** (Phân tích)", "**What is needed?** (Hệ thống cần có gì?)", "Tìm hiểu, phân tích và tài liệu hóa những gì nghiệp vụ cần."],
                    ["3", "**Design** (Thiết kế)", "**How will it work?** (Hệ thống chạy thế nào?)", "Quyết định cách thức xây dựng hệ thống để thỏa mãn yêu cầu."],
                    ["4", "**Implementation** (Xây dựng & Triển khai)", "**Build & deploy** (Xây dựng & Triển khai)", "Lập trình, kiểm thử và bàn giao hệ thống hoạt động thực tế."],
                    ["5", "**Support** (Hỗ trợ & Bảo trì)", "**Keep it running** (Duy trì hoạt động)", "Duy trì hệ thống ổn định và phát triển thêm khi có nhu cầu mới."]
                  ]
                },
                {
                  type: "note",
                  text: "💡 **Lưu ý cốt lõi:**\n- Trong dự án **Predictive**: Các phase chạy **1 lần duy nhất, tuần tự** nối tiếp nhau.\n- Trong dự án **Adaptive**: Cùng bộ 5 phase này được **lặp đi lặp lại trong mỗi iteration ngắn (1-4 tuần)**, mỗi lần lặp xuất bản một phần tăng dần hoạt động được (**working increment**)."
                }
              ]
            },
            {
              id: "ad2-part-2-0-radar",
              label: "b",
              title: "Studio Radar: 5 Câu Hỏi Cốt Lõi Của Vòng Đời SDLC",
              content: [
                {
                  type: "component",
                  component: "SdlcCoreQuestionsRadar"
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-2-1",
          number: "1",
          title: "2.1 Phase 1: Planning (Why build it? — Activities & Deliverables)",
          parts: [
            {
              id: "ad2-part-2-1",
              label: "a",
              title: "Chi tiết mục tiêu, hoạt động và sản phẩm bàn giao của Phase 1",
              content: [
                {
                  type: "bullet-list",
                  items: [
                    "**Mục đích (Purpose):** Xác định giá trị kinh doanh của hệ thống & đánh giá toàn diện tính khả thi để ra quyết định đầu tư.",
                    "**Hoạt động chính (Key Activities):**\n  - *Investigate business need/opportunity:* Điều tra bài toán hoặc cơ hội kinh doanh mới.\n  - *Define initial scope:* Xác định ranh giới phạm vi ban đầu của hệ thống.\n  - *Develop schedule & staffing plan:* Lập tiến độ sơ bộ và kế hoạch phân bổ nhân sự.\n  - *Perform feasibility study:* Nghiên cứu tính khả thi (Kỹ thuật, Kinh tế, Vận hành).",
                    "**Sản phẩm chuyển giao (Key Deliverables):**\n  - **System request** (Phiếu yêu cầu hệ thống).\n  - **Feasibility study report** (Báo cáo nghiên cứu tính khả thi).\n  - **Project schedule / Project charter** (Kế hoạch tiến độ & Điều lệ dự án)."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-2-2",
          number: "2",
          title: "2.2 Phase 2: Analysis (What is needed? — Activities & Deliverables)",
          parts: [
            {
              id: "ad2-part-2-2",
              label: "a",
              title: "Chi tiết mục tiêu, hoạt động và sản phẩm bàn giao của Phase 2",
              content: [
                {
                  type: "bullet-list",
                  items: [
                    "**Mục đích (Purpose):** Hiểu sâu sắc và tài liệu hóa chuẩn xác những gì nghiệp vụ kinh doanh cần ở hệ thống mới.",
                    "**Hoạt động chính (Key Activities):**\n  - *Gather & analyze business requirements:* Thu thập và phân tích yêu cầu từ người dùng.\n  - *Model current/required business processes:* Mô hình hóa quy trình nghiệp vụ hiện tại (AS-IS) và tương lai (TO-BE).\n  - *Build use case model & domain model:* Xây dựng mô hình Use Case và mô hình miền dữ liệu.\n  - *Verify requirements with users:* Xác thực và nghiệm thu đặc tả yêu cầu với các bên liên quan.",
                    "**Sản phẩm chuyển giao (Key Deliverables):**\n  - **Business requirements document (BRD / SRS)**.\n  - **Use case model** (Sơ đồ và kịch bản ca sử dụng).\n  - **Business process / Activity models** (Mô hình quy trình nghiệp vụ)."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-2-3",
          number: "3",
          title: "2.3 Phase 3: Design (How will it work? — Activities & Deliverables)",
          parts: [
            {
              id: "ad2-part-2-3",
              label: "a",
              title: "Chi tiết mục tiêu, hoạt động và sản phẩm bàn giao của Phase 3",
              content: [
                {
                  type: "bullet-list",
                  items: [
                    "**Mục đích (Purpose):** Quyết định chi tiết **cách thức** hệ thống sẽ được xây dựng để thỏa mãn đầy đủ các yêu cầu đã phân tích.",
                    "**Hoạt động chính (Key Activities):**\n  - *Design system architecture:* Thiết kế kiến trúc kỹ thuật tổng thể phần mềm.\n  - *Design database & user interface:* Thiết kế lược đồ CSDL và giao diện màn hình UI/UX.\n  - *Design classes & program logic:* Thiết kế các lớp đối tượng và giải thuật xử lý logic.\n  - *Refine models with technology details:* Bổ sung các chi tiết công nghệ cụ thể vào mô hình.",
                    "**Sản phẩm chuyển giao (Key Deliverables):**\n  - **System design specification** (Hồ sơ đặc tả thiết kế kỹ thuật).\n  - **Architecture & database design** (Bản vẽ kiến trúc & Thiết kế CSDL ERD).\n  - **Interface & class design documents** (Tài liệu thiết kế giao diện và lớp)."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-2-4",
          number: "4",
          title: "2.4 Phase 4: Implementation (Build & Deploy — Activities & Deliverables)",
          parts: [
            {
              id: "ad2-part-2-4",
              label: "a",
              title: "Chi tiết mục tiêu, hoạt động và sản phẩm bàn giao của Phase 4",
              content: [
                {
                  type: "bullet-list",
                  items: [
                    "**Mục đích (Purpose):** Lập trình xây dựng, kiểm thử toàn diện và bàn giao hệ thống hoạt động thực tế cho doanh nghiệp.",
                    "**Hoạt động chính (Key Activities):**\n  - *Program/configure hệ thống:* Viết mã nguồn, cấu hình hệ thống và tích hợp module.\n  - *Unit, integration, system testing:* Kiểm thử đơn vị, kiểm thử tích hợp và kiểm thử hệ thống.\n  - *Convert data & train users:* Chuyển đổi dữ liệu cũ và đào tạo người dùng cuối.\n  - *Deploy hệ thống into production:* Triển khai bàn giao và chính thức Go-Live.",
                    "**Sản phẩm chuyển giao (Key Deliverables):**\n  - **Working, tested system** (Phần mềm đã được kiểm thử và chạy ổn định).\n  - **Test plans and results** (Kế hoạch và biên bản kết quả kiểm thử).\n  - **User documentation and training materials** (Sổ tay hướng dẫn & Tài liệu đào tạo)."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-2-5",
          number: "5",
          title: "2.5 Phase 5: Support (Keep it running — Activities & Deliverables & Checkpoint Quiz)",
          parts: [
            {
              id: "ad2-part-2-5-text",
              label: "a",
              title: "Chi tiết mục tiêu, hoạt động và sản phẩm bàn giao của Phase 5",
              content: [
                {
                  type: "bullet-list",
                  items: [
                    "**Mục đích (Purpose):** Duy trì hệ thống hoạt động hiệu quả, ổn định và phát triển cải tiến thêm khi nhu cầu nghiệp vụ thay đổi.",
                    "**Hoạt động chính (Key Activities):**\n  - *Provide user support & help-desk:* Cung cấp dịch vụ hỗ trợ người dùng và giải đáp sự cố.\n  - *Monitor performance, fix defects:* Giám sát hiệu năng và khắc phục lỗi phát sinh.\n  - *Implement enhancement requests:* Bổ sung các tính năng nâng cấp theo yêu cầu mới.\n  - *Plan for eventual replacement:* Lên kế hoạch cho việc thay thế hoặc đại tu hệ thống sau này.",
                    "**Sản phẩm chuyển giao (Key Deliverables):**\n  - **Change requests / Maintenance logs** (Yêu cầu thay đổi & Nhật ký bảo trì).\n  - **Updated documentation** (Tài liệu hệ thống đã cập nhật).\n  - **System enhancements and patches** (Các bản vá lỗi và bản cập nhật tính năng)."
                  ]
                }
              ]
            },
            {
              id: "ad2-part-2-5-studio",
              label: "b",
              title: "Studio Khám Phá: Bảng Tra Cứu Toàn Diện 5 Pha SDLC (Activities & Deliverables)",
              content: [
                {
                  type: "component",
                  component: "SdlcPhasesDeepDiveExplorer"
                }
              ]
            },
            {
              id: "ad2-part-2-5-quiz",
              label: "c",
              title: "Checkpoint Quiz: Kiểm tra củng cố kiến thức Mục II",
              content: [
                {
                  type: "quiz",
                  quizId: "ad-ch2-sec2-quiz",
                  title: "Mini Checkpoint Quiz: 5 Giai Đoạn Vòng Đời SDLC",
                  description: "Kiểm tra 4 câu hỏi trắc nghiệm nhanh củng cố toàn diện kiến thức Mục II.",
                  questions: [
                    {
                      id: "ad2-c2-q1",
                      question: "Trong 5 giai đoạn của SDLC, giai đoạn Planning tập trung giải quyết câu hỏi cốt lõi nào?",
                      options: [
                        "Why build it? (Tại sao cần xây dựng?).",
                        "What is needed? (Cần những gì?).",
                        "How will it work? (Chạy ra sao?).",
                        "Build & deploy (Xây dựng ở đâu?)."
                      ],
                      answer: 0,
                      explanation: "Planning tập trung trả lời câu hỏi 'Why build it?' nhằm xác định giá trị kinh doanh và đánh giá tính khả thi của hệ thống."
                    },
                    {
                      id: "ad2-c2-q2",
                      question: "Sản phẩm chuyển giao (Key Deliverable) quan trọng bậc nhất của giai đoạn Analysis là:",
                      options: [
                        "Tài liệu đặc tả yêu cầu và Use Case.",
                        "Lược đồ cơ sở dữ liệu vật lý hoàn chỉnh.",
                        "Bản cài đặt phần mềm chạy trên Server.",
                        "Báo cáo kết quả kiểm thử tải hệ thống."
                      ],
                      answer: 0,
                      explanation: "Giai đoạn Analysis tạo ra tài liệu đặc tả yêu cầu (BRD / SRS), mô hình Use Case và mô hình quy trình nghiệp vụ."
                    },
                    {
                      id: "ad2-c2-q3",
                      question: "Hoạt động thiết kế kiến trúc kỹ thuật và giao diện UI/UX thuộc về giai đoạn nào của SDLC?",
                      options: [
                        "Giai đoạn Design (Thiết kế hệ thống).",
                        "Giai đoạn Planning (Lập kế hoạch).",
                        "Giai đoạn Analysis (Phân tích).",
                        "Giai đoạn Support (Hỗ trợ vận hành)."
                      ],
                      answer: 0,
                      explanation: "Giai đoạn Design (Thiết kế) trả lời câu hỏi 'How will it work?', bao gồm thiết kế kiến trúc, CSDL và giao diện người dùng UI/UX."
                    },
                    {
                      id: "ad2-c2-q4",
                      question: "Trong một dự án Adaptive (Linh hoạt), 5 giai đoạn SDLC được triển khai theo cách nào?",
                      options: [
                        "Lặp lại trọn vẹn trong mỗi iteration.",
                        "Chạy đúng 1 lần duy nhất toàn dự án.",
                        "Bỏ qua giai đoạn Design và Testing.",
                        "Chỉ thực hiện duy nhất khâu lập trình."
                      ],
                      answer: 0,
                      explanation: "Trong dự án Adaptive (Agile/Scrum), cùng bộ 5 phase SDLC được lặp lại ở quy mô nhỏ trong mỗi vòng lặp (Iteration), mỗi lần sinh ra 1 working increment."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION III: BUSINESS MODELING
       ============================================================ */
    {
      id: "ad2-section-3",
      roman: "III",
      title: "Business Modeling (Mô hình hóa doanh nghiệp)",
      subsections: [
        {
          id: "ad2-sub-3-1",
          number: "1",
          title: "3.1 Business Modeling là gì? & Ranh giới Enterprise",
          parts: [
            {
              id: "ad2-part-3-1",
              label: "a",
              title: "Khái niệm và phạm vi của Business Modeling",
              content: [
                {
                  type: "paragraph",
                  text: "**Business Modeling (Mô hình hóa doanh nghiệp)** là quá trình mô tả **cách một tổ chức đang hoạt động (hoặc nên hoạt động)**, hoàn toàn **độc lập với bất kỳ hệ thống thông tin (Information System) nào**."
                },
                {
                  type: "bullet-list",
                  items: [
                    "**Đối tượng ghi nhận:** Ghi lại các tác nhân nghiệp vụ (**business actors**), quy trình nghiệp vụ (**business processes**), luồng công việc (**workflows**) và các sự kiện kích hoạt chúng (**events**).",
                    "**Ngôn ngữ sử dụng:** Business model sử dụng **ngôn ngữ nghiệp vụ (business language)** dễ hiểu với người dùng, không phải ngôn ngữ kỹ thuật lập trình — mô tả **doanh nghiệp (enterprise)** chứ không phải phần mềm (software).",
                    "**Cung cấp ngữ cảnh:** Cung cấp bức tranh toàn cảnh (**context**) và ranh giới (**boundary**) để từ đó suy ra (**derive**) các yêu cầu phần mềm (system requirements) sau này."
                  ]
                },
                {
                  type: "highlight",
                  text: "💡 **Lưu ý cốt lõi:**\n- **Business Modeling** trả lời câu hỏi: *'Doanh nghiệp hoạt động như thế nào?'*\n- **Systems Analysis** (sau đó) trả lời câu hỏi: *'Hệ thống phần mềm sẽ hỗ trợ công việc đó như thế nào?'*"
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-3-2",
          number: "2",
          title: "3.2 Vì sao model business trước khi model hệ thống?",
          parts: [
            {
              id: "ad2-part-3-2-text",
              label: "a",
              title: "Bốn lý do sống còn cần mô hình hóa nghiệp vụ trước khi viết phần mềm",
              content: [
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Understand context before automating (Hiểu ngữ cảnh trước khi tự động hóa)",
                      bullets: [
                        "Đảm bảo dự án giải quyết đúng nhu cầu kinh doanh thực tế, tránh tạo ra một phần mềm chỉ là 'danh sách mong muốn kỹ thuật' (technical wish list) xa rời thực tế."
                      ]
                    },
                    {
                      number: "2",
                      title: "Reveal improvement opportunities (Phát hiện cơ hội cải tiến)",
                      bullets: [
                        "Vẽ rõ luồng công việc giúp phát hiện các điểm nghẽn (bottlenecks), sự chồng chéo hoặc kém hiệu quả trong quy trình hiện tại mà hệ thống mới cần tái cấu trúc và khắc phục."
                      ]
                    },
                    {
                      number: "3",
                      title: "Communicate with stakeholders (Giao tiếp hiệu quả với các bên liên quan)",
                      bullets: [
                        "Mô hình nghiệp vụ dùng ngôn ngữ phi kỹ thuật giúp người dùng kinh doanh (business users) dễ dàng đọc hiểu, phản biện và xác nhận (validate) trực tiếp."
                      ]
                    },
                    {
                      number: "4",
                      title: "Establish scope boundaries (Xác lập ranh giới phạm vi hệ thống)",
                      bullets: [
                        "Làm rõ cái gì nằm **bên trong (inside)** và cái gì nằm **bên ngoài (outside)** phạm vi mà phần mềm sẽ xây dựng, ngăn ngừa hiện tượng phình phạm vi (Scope creep)."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "ad2-part-3-2-studio",
              label: "b",
              title: "Studio Mô Phỏng: 4 Giá Trị Sống Còn Của Business Modeling",
              content: [
                {
                  type: "component",
                  component: "WhyModelBusinessFirstStudio"
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-3-3",
          number: "3",
          title: "3.3 Key Business Modeling Concepts (4 Khái niệm cốt lõi)",
          parts: [
            {
              id: "ad2-part-3-3-text",
              label: "a",
              title: "Bốn khái niệm nền tảng: Actor, Worker, Event, Process",
              content: [
                {
                  type: "table",
                  headers: ["Ký hiệu", "Khái niệm (Concept)", "Định nghĩa chuẩn", "Ví dụ minh họa"],
                  rows: [
                    ["**[A]**", "**Business Actor**", "Người, tổ chức hoặc thực thể **bên ngoài** doanh nghiệp tương tác với doanh nghiệp.", "Khách hàng (Customer), Nhà cung ứng (Supplier), Đối tác ngân hàng."],
                    ["**[W]**", "**Business Worker**", "Người hoặc vai trò **bên trong** doanh nghiệp trực tiếp tham gia thực hiện công việc.", "Nhân viên bán hàng (Sales Clerk), Kế toán viên, Nhân viên kho bãi."],
                    ["**[E]**", "**Business Event**", "Sự kiện xảy ra làm **kích hoạt** một hoặc nhiều hoạt động kinh doanh tiếp theo.", "Khách đặt đơn hàng mới (An order arrives), Hàng cập cảng."],
                    ["**[P]**", "**Business Process**", "Chuỗi hoạt động liên kết từ đầu đến cuối (**end-to-end**) nhằm tạo ra kết quả có giá trị cho Actor.", "Quy trình xử lý đơn hàng, Quy trình thẩm định khoản vay."]
                  ]
                }
              ]
            },
            {
              id: "ad2-part-3-3-studio",
              label: "b",
              title: "Studio Khám Phá: 4 Khái Niệm Vàng Business Modeling",
              content: [
                {
                  type: "component",
                  component: "BusinessModelingConceptsStudio"
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-3-4",
          number: "4",
          title: "3.4 Business Process vs Business Use Case",
          parts: [
            {
              id: "ad2-part-3-4-text",
              label: "a",
              title: "Đối chiếu chuyên sâu giữa Quy trình nghiệp vụ & Ca sử dụng nghiệp vụ",
              content: [
                {
                  type: "table",
                  headers: ["Khía cạnh (Aspect)", "Business Process (Quy trình)", "Business Use Case (Ca sử dụng nghiệp vụ)"],
                  rows: [
                    ["**Trọng tâm (Focus)**", "Luồng hoạt động kinh doanh từ đầu đến cuối (**end-to-end flow**).", "Cách một tác nhân bên ngoài (**1 actor**) nhận được giá trị cụ thể từ doanh nghiệp."],
                    ["**Phạm vi (Scope)**", "Có thể trải rộng qua nhiều tác nhân, phòng ban và vai trò khác nhau.", "Bị giới hạn bởi mục tiêu kinh doanh cụ thể của **một tác nhân bên ngoài**."],
                    ["**Góc nhìn (Perspective)**", "**Góc nhìn nội bộ, vận hành** (*Internal, operational view*).", "**Góc nhìn từ bên ngoài** (*External, actor's-eye view*)."],
                    ["**Mô hình điển hình**", "**Activity Diagram** / Sơ đồ luồng công việc (Workflow diagram).", "**Business Use Case Diagram**."]
                  ]
                }
              ]
            },
            {
              id: "ad2-part-3-4-studio",
              label: "b",
              title: "Studio Đấu Trường: Business Process vs Business Use Case",
              content: [
                {
                  type: "component",
                  component: "ProcessVsBusinessUseCaseArena"
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-3-5",
          number: "5",
          title: "3.5 Business Modeling Techniques & Vị trí trong SDLC & Checkpoint Quiz",
          parts: [
            {
              id: "ad2-part-3-5-text",
              label: "a",
              title: "Các kỹ thuật mô hình hóa và vị trí trong vòng đời phát triển",
              content: [
                {
                  type: "bullet-list",
                  items: [
                    "**Các kỹ thuật phổ biến (Common Techniques):**\n  - *Business Use Case Diagrams* (Sơ đồ ca sử dụng nghiệp vụ).\n  - *Business Use Case Descriptions* (Bản mô tả chi tiết ca sử dụng nghiệp vụ).\n  - *Activity Diagrams* (Sơ đồ hoạt động / quy trình luồng công việc).\n  - *Business Process / Domain Models* (Mô hình quy trình và mô hình miền dữ liệu).",
                    "**Vị trí trong SDLC (Placement in SDLC):**\n  - Được thực hiện chủ yếu trong giai đoạn **Planning** và **đầu giai đoạn Analysis (Early Analysis)**.\n  - Cung cấp đầu vào trực tiếp (**feed**) cho việc xác định yêu cầu chức năng phần mềm (*System functional requirements*).\n  - Cung cấp hệ thống thuật ngữ nghiệp vụ (**vocabulary**) được tái sử dụng xuyên suốt trong các *System Use Cases* sau này."
                  ]
                }
              ]
            },
            {
              id: "ad2-part-3-5-quiz",
              label: "b",
              title: "Checkpoint Quiz: Kiểm tra củng cố kiến thức Mục III",
              content: [
                {
                  type: "quiz",
                  quizId: "ad-ch2-sec3-quiz",
                  title: "Mini Checkpoint Quiz: Business Modeling",
                  description: "Kiểm tra 4 câu hỏi trắc nghiệm nhanh củng cố toàn diện kiến thức Mục III.",
                  questions: [
                    {
                      id: "ad2-c3-q1",
                      question: "Mục đích chính của việc thực hiện Business Modeling trước khi xây dựng phần mềm là gì?",
                      options: [
                        "Hiểu rõ ngữ cảnh và nhu cầu thực.",
                        "Viết mã nguồn chương trình nhanh hơn.",
                        "Lựa chọn ngôn ngữ lập trình Backend.",
                        "Cài đặt cấu hình máy chủ cơ sở dữ liệu."
                      ],
                      answer: 0,
                      explanation: "Business Modeling giúp BA và đội ngũ hiểu sâu sắc ngữ cảnh và bài toán kinh doanh thực tế trước khi tiến hành tự động hóa bằng phần mềm."
                    },
                    {
                      id: "ad2-c3-q2",
                      question: "Trong mô hình hóa doanh nghiệp, Business Worker [W] được định nghĩa là đối tượng nào?",
                      options: [
                        "Người hoặc vai trò bên trong doanh nghiệp.",
                        "Khách hàng hoặc đối tác bên ngoài công ty.",
                        "Hệ thống máy chủ tự động xử lý hóa đơn.",
                        "Sự kiện phát sinh kích hoạt hoạt động mới."
                      ],
                      answer: 0,
                      explanation: "Business Worker [W] là nhân sự hoặc vai trò bên trong doanh nghiệp (như nhân viên bán hàng, thủ kho) tham gia trực tiếp vào việc thực thi quy trình."
                    },
                    {
                      id: "ad2-c3-q3",
                      question: "Điểm khác biệt lớn nhất về góc nhìn (Perspective) giữa Business Process và Business Use Case là:",
                      options: [
                        "Process nhìn nội bộ, Use Case nhìn ngoài.",
                        "Process nhìn từ khách, Use Case nhìn nội.",
                        "Cả hai đều chỉ tập trung vào mã nguồn.",
                        "Process chỉ vẽ bằng sơ đồ Use Case UML."
                      ],
                      answer: 0,
                      explanation: "Business Process mang góc nhìn vận hành nội bộ (Internal view), trong khi Business Use Case mang góc nhìn từ phía tác nhân bên ngoài (External actor's-eye view)."
                    },
                    {
                      id: "ad2-c3-q4",
                      question: "Trong vòng đời SDLC, hoạt động Business Modeling chủ yếu diễn ra ở những giai đoạn nào?",
                      options: [
                        "Planning và Early Analysis ban đầu.",
                        "Design và Construction lập trình.",
                        "Testing và Triển khai hệ thống.",
                        "Support và Bảo trì định kỳ phần mềm."
                      ],
                      answer: 0,
                      explanation: "Business Modeling được triển khai chủ yếu trong giai đoạn Planning và Early Analysis nhằm định hình phạm vi và làm cơ sở suy ra yêu cầu hệ thống."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION IV: INITIATION PHASE (INTRO)
       ============================================================ */
    {
      id: "ad2-section-4",
      roman: "IV",
      title: "Initiation Phase (Giai đoạn khởi động dự án)",
      subsections: [
        {
          id: "ad2-sub-4-1",
          number: "1",
          title: "4.1 Initiation Phase là gì? & Cổng kiểm soát dự án",
          parts: [
            {
              id: "ad2-part-4-1-text",
              label: "a",
              title: "Khái niệm và vị trí của giai đoạn khởi động dự án",
              content: [
                {
                  type: "paragraph",
                  text: "**Initiation Phase (hay Project Initiation)** là giai đoạn mở đầu nằm ở **phần đầu của Planning phase**, nơi một nhu cầu hoặc cơ hội kinh doanh (**business need/opportunity**) lần đầu tiên được nhận diện và thẩm định chính thức."
                },
                {
                  type: "bullet-list",
                  items: [
                    "**Cầu nối chuyển đổi:** Là chiếc cầu nối then chốt giữa **mô hình hóa doanh nghiệp (Business modeling)** và **dự án chính thức (Formal project)** — biến một ý tưởng sơ khai thành một dự án có phạm vi xác định, được cấp ngân sách và phân bổ nguồn lực.",
                    "**Câu hỏi cốt lõi:** Trả lời câu hỏi sống còn trước hội đồng phê duyệt: *'Có nên làm dự án này không, và nếu có thì phạm vi (scope) và chi phí (cost) dự kiến như thế nào?'*",
                    "**Cổng ra quyết định (Gatekeeper):** Đầu ra của giai đoạn này quyết định **cho phép (approve)** hoặc **từ chối (reject)** việc dự án tiến vào giai đoạn phân tích chi tiết (Detailed Analysis)."
                  ]
                }
              ]
            },
            {
              id: "ad2-part-4-1-studio",
              label: "b",
              title: "Studio Mô Phỏng: Project Initiation Gatekeeper (Cổng Thẩm Định Dự Án)",
              content: [
                {
                  type: "component",
                  component: "ProjectInitiationGatekeeperStudio"
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-4-2",
          number: "2",
          title: "4.2 Key Activities của Initiation Phase (4 Hoạt động chính)",
          parts: [
            {
              id: "ad2-part-4-2",
              label: "a",
              title: "Bốn hoạt động trọng tâm trong giai đoạn khởi động",
              content: [
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Identify the business need/opportunity (Nhận diện nhu cầu/cơ hội)",
                      bullets: [
                        "Làm rõ vấn đề nhức nhối cần giải quyết hoặc cơ hội kinh doanh chiến lược mà doanh nghiệp muốn nắm bắt."
                      ]
                    },
                    {
                      number: "2",
                      title: "Define the system request (Xác lập phiếu yêu cầu hệ thống)",
                      bullets: [
                        "Tài liệu hóa nhu cầu kinh doanh, đơn vị đề xuất/bảo trợ (Sponsor), phạm vi chức năng mong muốn và lợi ích dự kiến."
                      ]
                    },
                    {
                      number: "3",
                      title: "Assess feasibility (Đánh giá tính khả thi toàn diện)",
                      bullets: [
                        "Tiến hành khảo sát và đánh giá 3 trụ cột khả thi: Kỹ thuật (Technical), Kinh tế (Economic / ROI) và Tổ chức (Organizational)."
                      ]
                    },
                    {
                      number: "4",
                      title: "Form the project team and obtain approval (Thành lập đội ngũ & Phê duyệt)",
                      bullets: [
                        "Phân bổ nguồn lực nhân sự ban đầu, bảo đảm sự bảo trợ tài chính (Sponsorship) và trình duyệt ban lãnh đạo."
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-4-3",
          number: "3",
          title: "4.3 Feasibility Analysis – 3 khía cạnh (Three Dimensions)",
          parts: [
            {
              id: "ad2-part-4-3-text",
              label: "a",
              title: "Ba trụ cột thẩm định tính khả thi của dự án",
              content: [
                {
                  type: "table",
                  headers: ["Khía cạnh (Dimension)", "Câu hỏi trọng tâm", "Nội dung thẩm định chi tiết"],
                  rows: [
                    ["**1. Technical Feasibility**\n(Khả thi Kỹ thuật)", "**Hệ thống có thể xây được không?**", "Đánh giá công nghệ hiện tại, sự quen thuộc của đội ngũ với ngôn ngữ/công cụ, rủi ro tích hợp phần cứng và quy mô dự án."],
                    ["**2. Economic Feasibility**\n(Khả thi Kinh tế)", "**Lợi ích có vượt chi phí không?**", "Phân tích Chi phí vs Lợi ích (Cost-Benefit Analysis), tính toán tỷ suất hoàn vốn **ROI (Return on Investment)**, giá trị hiện tại ròng NPV và thời gian hoàn vốn."],
                    ["**3. Organizational Feasibility**\n(Khả thi Tổ chức)", "**Hệ thống có được chấp nhận sử dụng không?**", "Đánh giá mức độ phù hợp với chiến lược công ty, sự ủng hộ của ban lãnh đạo, văn hóa tổ chức và mức độ sẵn sàng thay đổi của người dùng."]
                  ]
                }
              ]
            },
            {
              id: "ad2-part-4-3-studio",
              label: "b",
              title: "Studio Thẩm Định: Bảng Điều Khiển Khả Thi 3 Chiều (Feasibility Matrix)",
              content: [
                {
                  type: "component",
                  component: "FeasibilityThreeDimensionsStudio"
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-4-4",
          number: "4",
          title: "4.4 Deliverables của Initiation Phase & Checkpoint Quiz",
          parts: [
            {
              id: "ad2-part-4-4-text",
              label: "a",
              title: "Bốn sản phẩm chuyển giao chính thức của giai đoạn Initiation",
              content: [
                {
                  type: "bullet-list",
                  items: [
                    "📄 **System Request:** Tài liệu chính thức đầu tiên ghi lại nhu cầu kinh doanh, người bảo trợ (sponsor) và các chức năng mong muốn cốt lõi.",
                    "📊 **Feasibility Study Report:** Báo cáo tổng hợp kết quả đánh giá khả thi trên cả 3 phương diện: Kỹ thuật, Kinh tế và Tổ chức.",
                    "📜 **Project Charter / Plan:** Bản điều lệ dự án chính thức cho phép dự án hoạt động, định nghĩa phạm vi, tiến độ sơ bộ, ngân sách và nhân sự.",
                    "💼 **Initial Business Case:** Hồ sơ biện minh cho khoản đầu tư tài chính, liên kết mục tiêu dự án với chiến lược dài hạn của doanh nghiệp."
                  ]
                }
              ]
            },
            {
              id: "ad2-part-4-4-quiz",
              label: "b",
              title: "Checkpoint Quiz: Kiểm tra củng cố kiến thức Mục IV",
              content: [
                {
                  type: "quiz",
                  quizId: "ad-ch2-sec4-quiz",
                  title: "Mini Checkpoint Quiz: Giai đoạn Khởi động dự án (Initiation Phase)",
                  description: "Kiểm tra 4 câu hỏi trắc nghiệm nhanh củng cố toàn diện kiến thức Mục IV.",
                  questions: [
                    {
                      id: "ad2-c4-q1",
                      question: "Giai đoạn Project Initiation nằm ở vị trí nào trong vòng đời phát triển hệ thống SDLC?",
                      options: [
                        "Nằm ở phần đầu của Planning phase.",
                        "Nằm ở giữa giai đoạn Implementation.",
                        "Nằm ở cuối giai đoạn Support bảo trì.",
                        "Nằm sau khi đã hoàn thành Testing."
                      ],
                      answer: 0,
                      explanation: "Project Initiation nằm ở phần đầu tiên của giai đoạn Planning, ngay sau khi nhu cầu kinh doanh được nhận diện."
                    },
                    {
                      id: "ad2-c4-q2",
                      question: "Câu hỏi cốt lõi mà giai đoạn Project Initiation phải trả lời trước ban lãnh đạo là gì?",
                      options: [
                        "Có nên làm dự án này hay không?",
                        "Sử dụng ngôn ngữ lập trình nào?",
                        "Giao diện màn hình có màu gì đẹp?",
                        "Viết bao nhiêu dòng mã nguồn code?"
                      ],
                      answer: 0,
                      explanation: "Project Initiation trả lời câu hỏi chiến lược: 'Có nên làm dự án này không, và nếu có thì phạm vi và chi phí dự kiến như thế nào?'"
                    },
                    {
                      id: "ad2-c4-q3",
                      question: "Đánh giá khả thi về mặt Kinh tế (Economic Feasibility) tập trung vào yếu tố nào sau đây?",
                      options: [
                        "Lợi ích kỳ vọng và tỷ suất hoàn vốn ROI.",
                        "Năng lực công nghệ của đội ngũ kỹ sư.",
                        "Mức độ chấp nhận của văn hóa tổ chức.",
                        "Tốc độ đường truyền mạng nội bộ LAN."
                      ],
                      answer: 0,
                      explanation: "Khả thi kinh tế thẩm định phân tích Chi phí vs Lợi ích (Cost-Benefit Analysis) và tính toán tỷ suất hoàn vốn ROI / NPV."
                    },
                    {
                      id: "ad2-c4-q4",
                      question: "Tài liệu chính thức nào được lập ra để ghi nhận nhu cầu ban đầu và người bảo trợ dự án?",
                      options: [
                        "Phiếu yêu cầu hệ thống System Request.",
                        "Hồ sơ đặc tả thiết kế kỹ thuật SDS.",
                        "Báo cáo kết quả kiểm thử phần mềm UAT.",
                        "Sổ tay hướng dẫn người dùng cuối sử dụng."
                      ],
                      answer: 0,
                      explanation: "System Request là tài liệu khởi đầu chính thức ghi lại nhu cầu kinh doanh, sponsor bảo trợ và các tính năng mong muốn."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION V: BUSINESS USE CASES VÀ ACTIVITY DIAGRAMS & TỔNG KẾT
       ============================================================ */
    {
      id: "ad2-section-5",
      roman: "V",
      title: "Business Use Cases, Activity Diagrams & Tổng Kết Chương",
      subsections: [
        {
          id: "ad2-sub-5-1",
          number: "1",
          title: "5.1 Business Use Case là gì? & Phân loại Business Actors",
          parts: [
            {
              id: "ad2-part-5-1-text",
              label: "a",
              title: "Khái niệm Business Use Case và mô hình Black-Box",
              content: [
                {
                  type: "paragraph",
                  text: "**Business Use Case** là một chuỗi các hoạt động nghiệp vụ mà doanh nghiệp thực hiện nhằm tạo ra một **kết quả quan sát được, có giá trị cụ thể cho một Business Actor bên ngoài**."
                },
                {
                  type: "bullet-list",
                  items: [
                    "**Góc nhìn Hộp đen (Black-box view):** Mô tả doanh nghiệp (thủ công hay tự động) như một 'hộp đen' dưới góc nhìn của Actor — họ chỉ cần biết gửi yêu cầu và nhận giá trị, không cần quan tâm nội bộ làm ra sao.",
                    "**Mô tả Enterprise, không phải Software:** Business use case mô hình hóa **chính bản thân tổ chức doanh nghiệp (Business itself)**, KHÔNG PHẢI một hệ thống thông tin (Information System) cụ thể hỗ trợ nó.",
                    "**Ví dụ tiêu biểu:** *'Process Customer Order'* (Xử lý đơn hàng của khách), *'Handle Product Return'* (Xử lý đổi trả hàng), *'Onboard New Supplier'* (Tiếp nhận nhà cung cấp mới)."
                  ]
                },
                {
                  type: "highlight",
                  text: "💡 **So sánh nhanh:**\n- **Business Use Case:** Khách tương tác với toàn bộ Doanh nghiệp (ở mức tổng quan Black-box).\n- **System Use Case (Học ở các chương sau):** Người dùng tương tác trực tiếp với một Phần mềm cụ thể (phiên bản hẹp hơn, hướng công nghệ)."
                }
              ]
            },
            {
              id: "ad2-part-5-1-table",
              label: "b",
              title: "Phân loại 3 nhóm Tác nhân trong Business Modeling",
              content: [
                {
                  type: "table",
                  headers: ["Loại tác nhân (Type)", "Vai trò cốt lõi (Role)", "Ví dụ thực tế"],
                  rows: [
                    ["**Primary Business Actor**\n(Tác nhân chính)", "**Khởi tạo** use case và trực tiếp **nhận giá trị** từ use case đó.", "Khách hàng cá nhân (Customer đặt đơn hàng)."],
                    ["**External Business Actor**\n(Tác nhân hỗ trợ ngoài)", "Tham gia hỗ trợ nhưng **không khởi tạo** và **không nhận giá trị** cốt lõi.", "Đối tác Ngân hàng xác thực thanh toán (Payment Gateway)."],
                    ["**Business Worker**\n(Người thực thi trong)", "Thực hiện công việc **bên trong** doanh nghiệp (**KHÔNG phải là Business Actor**).", "Nhân viên bán hàng (Sales clerk), Nhân viên kho (Warehouse staff)."]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-5-2",
          number: "2",
          title: "5.2 Business Use Case Diagram: Ký hiệu gạch chéo & Ví dụ Order Fulfillment",
          parts: [
            {
              id: "ad2-part-5-2-text",
              label: "a",
              title: "Ký hiệu chuẩn và ví dụ sơ đồ Business Use Case",
              content: [
                {
                  type: "table",
                  headers: ["Ký hiệu (Notation)", "Ý nghĩa và Đặc điểm nhận diện"],
                  rows: [
                    ["**Business Actor**", "Biểu tượng Người que (Stick figure) có **đầu hình oval gạch chéo (`/`)** để đánh dấu cấp độ 'Business'."],
                    ["**Business Use Case**", "Hình Oval có **đường gạch chéo (`/`)** bên trong, đặt tên cho 1 hoạt động kinh doanh tạo giá trị."],
                    ["**Business System Boundary**", "Khung chữ nhật bao quanh các Business Use Case thuộc về phạm vi doanh nghiệp."],
                    ["**Association**", "Đường thẳng nối giữa Actor và Use Case mà Actor đó tham gia tương tác."]
                  ]
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ minh họa hệ thống *'Order Fulfillment Business'***:\n- **Actor Customer** kết nối với 2 use cases: `Place Order`, `Fulfill Order`.\n- **Actor Supplier** kết nối với 2 use cases: `Handle Returns`, `Replenish Stock`.\n- Cả 4 use case nằm gọn trong khung Business System Boundary đại diện cho Doanh nghiệp."
                }
              ]
            },
            {
              id: "ad2-part-5-2-studio",
              label: "b",
              title: "Studio Trực Quan: Sơ Đồ Business Use Case (Black-Box System Boundary)",
              content: [
                {
                  type: "component",
                  component: "BusinessUseCaseVisualizerStudio"
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-5-3",
          number: "3",
          title: "5.3 Activity Diagram: Mục đích & Bảng tra cứu ký hiệu chuẩn UML",
          parts: [
            {
              id: "ad2-part-5-3-text",
              label: "a",
              title: "Mục đích của Activity Diagram trong mô hình hóa nghiệp vụ",
              content: [
                {
                  type: "bullet-list",
                  items: [
                    "**Mô hình hóa luồng công việc (Workflow):** Thể hiện trình tự logic của các hành động (activities), các điểm rẽ nhánh điều kiện (decisions) và các công việc xử lý song song (parallel work).",
                    "**Phân công trách nhiệm (Swimlanes):** Dùng các làn bơi để phân định rõ ràng **Ai làm gì** (Who does what) và chuyển giao công việc giữa các phòng ban như thế nào.",
                    "**Bổ sung cho Business Use Case:** Nếu Business Use Case chỉ nêu **Mục tiêu (Goal / What)**, thì Activity Diagram chỉ ra chi tiết **Cách đạt được mục tiêu đó (How)**.",
                    "**Tài liệu hóa AS-IS & TO-BE:** Dùng để mô tả quy trình hiện trạng (*AS-IS*) nhằm phát hiện điểm nghẽn (inefficiencies), sự chậm trễ bàn giao (*hand-offs*) và đề xuất quy trình cải tiến (*TO-BE*) trước khi tự động hóa."
                  ]
                },
                {
                  type: "table",
                  headers: ["Ký hiệu (Symbol)", "Hình dạng biểu diễn", "Ý nghĩa và Quy tắc"],
                  rows: [
                    ["**Initial Node**", "Vòng tròn đen đặc (●)", "Đánh dấu điểm khởi đầu bắt đầu của luồng quy trình."],
                    ["**Activity**", "Hình chữ nhật bo góc tròn (Rounded rect)", "Đặt tên cho 1 bước hành động cụ thể trong quy trình."],
                    ["**Decision**", "Hình thoi (Diamond ◆)", "Điểm rẽ nhánh điều kiện với các nhãn canh (VD: Yes / No, In Stock? / Out of Stock)."],
                    ["**Fork / Join**", "Thanh ngang đặc (Thick bar ▬)", "**Fork:** Tách 1 luồng thành nhiều luồng song song; **Join:** Gom các luồng song song lại trước khi tiếp tục."],
                    ["**Final Node**", "Vòng tròn có tâm đen đặc (Bullseye ◉)", "Đánh dấu điểm kết thúc hoàn toàn của luồng quy trình."],
                    ["**Swimlanes**", "Các dải phân làn dọc hoặc ngang", "Phân chia sơ đồ theo từng Tác nhân / Phòng ban chịu trách nhiệm thực thi."]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-5-4",
          number: "4",
          title: "5.4 Trình mô phỏng quy trình đa làn bơi & Checkpoint Quiz Mục V",
          parts: [
            {
              id: "ad2-part-5-4-studio",
              label: "a",
              title: "Studio Mô Phỏng: Luồng Xử Lý Đơn Hàng 3 Làn Bơi (Activity Diagram Swimlanes)",
              content: [
                {
                  type: "component",
                  component: "ActivityDiagramSwimlaneStudio"
                }
              ]
            },
            {
              id: "ad2-part-5-4-quiz",
              label: "b",
              title: "Checkpoint Quiz: Kiểm tra củng cố kiến thức Mục V",
              content: [
                {
                  type: "quiz",
                  quizId: "ad-ch2-sec5-quiz",
                  title: "Mini Checkpoint Quiz: Business Use Cases & Activity Diagrams",
                  description: "Kiểm tra 4 câu hỏi trắc nghiệm nhanh củng cố toàn diện kiến thức Mục V.",
                  questions: [
                    {
                      id: "ad2-c5-q1",
                      question: "Business Use Case mô tả hoạt động của đối tượng nào theo góc nhìn 'hộp đen' (black-box)?",
                      options: [
                        "Mô tả chính bản thân tổ chức doanh nghiệp.",
                        "Mô tả mã nguồn phần mềm cơ sở dữ liệu.",
                        "Mô tả thuật toán sắp xếp bên trong máy chủ.",
                        "Mô tả cấu hình phần cứng hạ tầng mạng LAN."
                      ],
                      answer: 0,
                      explanation: "Business Use Case mô hình hóa chính bản thân doanh nghiệp (Business itself) chứ không phải một phần mềm công nghệ cụ thể."
                    },
                    {
                      id: "ad2-c5-q2",
                      question: "Tác nhân bên ngoài nào tham gia vào Business Use Case nhưng không trực tiếp nhận giá trị cuối?",
                      options: [
                        "External Business Actor hỗ trợ.",
                        "Primary Business Actor khởi tạo.",
                        "Business Worker bên trong công ty.",
                        "Project Manager quản lý dự án."
                      ],
                      answer: 0,
                      explanation: "External Business Actor (như Cổng thanh toán ngân hàng) tham gia hỗ trợ tương tác nhưng không phải người khởi tạo hay nhận giá trị cốt lõi."
                    },
                    {
                      id: "ad2-c5-q3",
                      question: "Trong sơ đồ Business Use Case Diagram chuẩn UML, ký hiệu nào dùng để phân biệt cấp độ Business?",
                      options: [
                        "Đường gạch chéo trên đầu Actor và Oval.",
                        "Tô màu đỏ rực cho toàn bộ khung viền.",
                        "Sử dụng hình tam giác thay cho hình oval.",
                        "Viết hoa toàn bộ tên các biến lập trình."
                      ],
                      answer: 0,
                      explanation: "Chuẩn UML quy định nét gạch chéo (`/`) trên đầu Actor và trên hình Oval Use Case để phân biệt rành mạch cấp độ Business với cấp độ System."
                    },
                    {
                      id: "ad2-c5-q4",
                      question: "Trong Activity Diagram, ký hiệu Swimlanes (Làn bơi) đóng vai trò chính là gì?",
                      options: [
                        "Phân chia công việc theo vai trò thực hiện.",
                        "Đo lường thời gian chạy thuật toán mã nguồn.",
                        "Thống kê dung lượng bộ nhớ RAM của hệ thống.",
                        "Hiển thị giao diện người dùng trên điện thoại."
                      ],
                      answer: 0,
                      explanation: "Swimlanes phân chia sơ đồ thành các cột/hàng tương ứng với từng phòng ban, tác nhân hoặc vai trò chịu trách nhiệm thực thi các bước."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "ad2-sub-5-5",
          number: "5",
          title: "5.5 Tổng kết toàn diện 5 trụ cột, Flashcards 8 thuật ngữ & Grand Master Exam 10 Câu",
          parts: [
            {
              id: "ad2-part-5-5-summary",
              label: "a",
              title: "Tổng kết 5 trụ cột tri thức cốt lõi của Chapter 2",
              content: [
                {
                  type: "component",
                  component: "Chapter2MasterSummaryDashboard"
                }
              ]
            },
            {
              id: "ad2-part-5-5-terms",
              label: "b",
              title: "Thẻ ghi nhớ Flashcards 8 thuật ngữ vàng Chapter 2",
              content: [
                {
                  type: "component",
                  component: "Chapter2KeyTermsHub"
                }
              ]
            },
            {
              id: "ad2-part-5-5-diagram-suite",
              label: "c",
              title: "Studio Mô Phỏng: Dashboard Bộ Mô Phỏng 4 Diagram Cơ Bản (UML Suite)",
              content: [
                {
                  type: "component",
                  component: "DiagramSimDashboard"
                }
              ]
            },
            {
              id: "ad2-part-5-5-exam",
              label: "d",
              title: "Grand Master Exam 10 Câu: Khảo thí toàn diện Chapter 2",
              content: [
                {
                  type: "quiz",
                  quizId: "ad-ch2-grand-master-exam",
                  title: "Grand Master Exam: Vòng Đời SDLC & Business Modeling",
                  description: "Bộ 10 câu hỏi trắc nghiệm kiểm tra tổng hợp toàn diện kiến thức từ Mục I đến Mục V của Chapter 2.",
                  questions: [
                    {
                      id: "ad2-gm-q1",
                      question: "Khái niệm nào đóng vai trò là 'Umbrella Concept' bao quát toàn bộ quy trình phát triển?",
                      options: [
                        "Systems Development Life Cycle (SDLC).",
                        "Agile Scrum Development Framework.",
                        "Unified Process Iteration Matrix.",
                        "Extreme Programming Methodology."
                      ],
                      answer: 0,
                      explanation: "SDLC là khái niệm bao trùm (Umbrella Concept) định nghĩa tất cả các giai đoạn và hoạt động cần thiết để xây dựng một hệ thống thông tin."
                    },
                    {
                      id: "ad2-gm-q2",
                      question: "Đặc điểm nổi bật nhất của phương pháp tiếp cận Predictive Approach (Thác nước) là:",
                      options: [
                        "Lập kế hoạch chi tiết ngay từ ban đầu.",
                        "Chào đón thay đổi liên tục mọi thời điểm.",
                        "Bàn giao sản phẩm theo từng tuần làm việc.",
                        "Không cần viết tài liệu đặc tả kỹ thuật."
                      ],
                      answer: 0,
                      explanation: "Predictive Approach lập kế hoạch toàn diện up-front và yêu cầu đóng băng phạm vi yêu cầu cố định ngay từ đầu."
                    },
                    {
                      id: "ad2-gm-q3",
                      question: "Trong 5 giai đoạn của SDLC, giai đoạn nào tập trung giải quyết câu hỏi 'How will it work?'",
                      options: [
                        "Phase 3: Giai đoạn Thiết kế (Design).",
                        "Phase 1: Giai đoạn Lập kế hoạch.",
                        "Phase 2: Giai đoạn Phân tích yêu cầu.",
                        "Phase 4: Giai đoạn Xây dựng phần mềm."
                      ],
                      answer: 0,
                      explanation: "Giai đoạn Design (Thiết kế) quyết định chi tiết kiến trúc, cơ sở dữ liệu và giao diện để hệ thống hoạt động thỏa mãn yêu cầu."
                    },
                    {
                      id: "ad2-gm-q4",
                      question: "Điểm khác biệt cơ bản giữa cách thực thi 5 phase trong Predictive và Adaptive là:",
                      options: [
                        "Predictive chạy 1 lần, Adaptive chạy lặp.",
                        "Predictive chạy lặp, Adaptive chạy 1 lần.",
                        "Cả hai đều bỏ qua giai đoạn phân tích.",
                        "Cả hai đều không cần kiểm thử hệ thống."
                      ],
                      answer: 0,
                      explanation: "Predictive chạy tuần tự 5 phase đúng 1 lần duy nhất; Adaptive lặp lại trọn vẹn cả 5 phase trong mỗi vòng lặp (Iteration) ngắn."
                    },
                    {
                      id: "ad2-gm-q5",
                      question: "Hoạt động Business Modeling được thực hiện nhằm mục đích quan trọng nhất nào?",
                      options: [
                        "Hiểu rõ quy trình doanh nghiệp trước khi làm IT.",
                        "Lựa chọn hệ quản trị cơ sở dữ liệu quan hệ tốt.",
                        "Viết mã nguồn chương trình hướng đối tượng nhanh.",
                        "Cấu hình tường lửa bảo mật cho hệ thống mạng."
                      ],
                      answer: 0,
                      explanation: "Business Modeling giúp hiểu rõ ngữ cảnh, phát hiện điểm nghẽn và xác lập ranh giới phạm vi trước khi tiến hành viết phần mềm."
                    },
                    {
                      id: "ad2-gm-q6",
                      question: "Đối tượng nào sau đây được phân loại là một Business Worker [W] trong doanh nghiệp?",
                      options: [
                        "Nhân viên tư vấn bán hàng tại cửa hàng.",
                        "Khách hàng cá nhân đến đặt mua sản phẩm.",
                        "Đối tác ngân hàng trung gian thanh toán.",
                        "Cơ quan quản lý thuế kiểm tra định kỳ."
                      ],
                      answer: 0,
                      explanation: "Business Worker [W] là nhân sự hoặc vai trò bên trong nội bộ doanh nghiệp trực tiếp thực thi các bước của quy trình."
                    },
                    {
                      id: "ad2-gm-q7",
                      question: "Giai đoạn Project Initiation đóng vai trò như một 'Cổng kiểm soát' (Gatekeeper) để:",
                      options: [
                        "Phê duyệt hoặc từ chối thực hiện dự án.",
                        "Cài đặt hệ điều hành máy chủ ứng dụng.",
                        "Lập trình toàn bộ các giao diện người dùng.",
                        "Sửa các lỗi phát sinh trong mã nguồn code."
                      ],
                      answer: 0,
                      explanation: "Initiation Phase đánh giá tính khả thi để ra quyết định cho phép (Approve) hoặc từ chối (Reject) dự án trước khi tốn kém chi phí phân tích."
                    },
                    {
                      id: "ad2-gm-q8",
                      question: "Ba khía cạnh cốt lõi của Feasibility Analysis được thẩm định trong Initiation Phase gồm:",
                      options: [
                        "Kỹ thuật (Technical), Kinh tế, Tổ chức.",
                        "Giao diện (UI/UX), Backend và Database.",
                        "Tốc độ mạng, Bộ nhớ RAM và Ổ cứng SSD.",
                        "Pháp lý, Phong thủy và Thời tiết khí hậu."
                      ],
                      answer: 0,
                      explanation: "Ba trụ cột thẩm định khả thi gồm: Kỹ thuật (Technical Feasibility), Kinh tế (Economic Feasibility / ROI) và Tổ chức (Organizational Feasibility)."
                    },
                    {
                      id: "ad2-gm-q9",
                      question: "Điểm khác biệt lớn nhất giữa Business Process và Business Use Case là:",
                      options: [
                        "Process nhìn nội bộ, Use Case nhìn ngoài.",
                        "Process nhìn từ khách, Use Case nhìn nội.",
                        "Process viết code, Use Case thiết kế CSDL.",
                        "Cả hai đều chỉ dùng cho hệ thống phần mềm."
                      ],
                      answer: 0,
                      explanation: "Business Process mang góc nhìn vận hành nội bộ (Internal view), trong khi Business Use Case mang góc nhìn từ phía tác nhân bên ngoài (External view)."
                    },
                    {
                      id: "ad2-gm-q10",
                      question: "Trong Activity Diagram, ký hiệu hình thoi (Decision Node) thể hiện điều gì?",
                      options: [
                        "Điểm rẽ nhánh luồng xử lý theo điều kiện.",
                        "Điểm bắt đầu luồng hoạt động của quy trình.",
                        "Điểm kết thúc toàn bộ luồng xử lý công việc.",
                        "Tách luồng thành hai công việc song song."
                      ],
                      answer: 0,
                      explanation: "Hình thoi Decision Node trong Activity Diagram đại diện cho điểm rẽ nhánh luồng quy trình dựa trên các điều kiện kiểm tra (Guards)."
                    }
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
