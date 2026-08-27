/* ============================================================
   DỮ LIỆU HỌC TẬP CHUẨN MỰC: MÔN PHÂN TÍCH THIẾT KẾ YÊU CẦU
   CHAPTER 1: INTRODUCTION — REQUIREMENTS ANALYSIS AND DESIGN
   PHẦN 1: MỤC I (INFORMATION SYSTEM) & MỤC II (ROLE OF THE BA)
   ============================================================ */

export const adCh1Data = {
  id: "ad-ch1",
  title: "Chapter 1: Introduction — Requirements Analysis and Design",
  subtitle: "Tổng quan về Hệ thống thông tin (Information Systems), Cấu trúc IPO, Phân loại ESS/MIS/TPS và Vai trò cầu nối chiến lược của (IT) Business Analyst trong toàn bộ vòng đời phát triển phần mềm (SDLC).",
  sections: [
    /* ============================================================
       SECTION 0: INTERACTIVE REQUIREMENTS HERO BANNER OVERVIEW
       ============================================================ */
    {
      id: "ad1-section-0",
      roman: "★",
      title: "TỔNG QUAN HỆ THỐNG THÔNG TIN & CẦU NỐI KỸ NGHỆ YÊU CẦU",
      subsections: [
        {
          id: "ad1-sub-0",
          number: "0",
          title: "Interactive Requirements Cyber-Blueprint",
          parts: [
            {
              id: "ad1-part-hero",
              label: "INTERACTIVE HERO BANNER",
              title: "Trực Quan Hóa Hệ Thống Thông Tin & Cầu Nối Kỹ Nghệ Yêu Cầu Của Business Analyst",
              content: [
                {
                  type: "component",
                  component: "RequirementsIntroHeroBanner"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION I: INFORMATION SYSTEM (HỆ THỐNG THÔNG TIN)
       ============================================================ */
    {
      id: "ad1-section-1",
      roman: "I",
      title: "Information System (Hệ thống thông tin)",
      subsections: [
        {
          id: "ad1-sub-1-1",
          number: "1",
          title: "1.1 Định nghĩa Hệ thống thông tin (Information System)",
          parts: [
            {
              id: "ad1-part-1-1",
              label: "a",
              title: "Khái niệm & Mục tiêu cốt lõi của Information System",
              content: [
                {
                  type: "definition",
                  term: "Information System (Hệ thống thông tin)",
                  text: "**Information System** = tập hợp các thành phần liên kết với nhau (**people, procedures, hardware, software, data**) cùng làm việc để **thu thập – xử lý – lưu trữ – cung cấp thông tin**, hỗ trợ **decision making (ra quyết định)**, **coordination (phối hợp)**, và **control (kiểm soát)** trong tổ chức."
                },
                {
                  type: "key-point",
                  text: "Hệ thống thông tin không đơn thuần là máy tính hay phần mềm, mà là sự tích hợp đồng bộ giữa **yếu tố con người, quy trình vận hành và nền tảng công nghệ** nhằm tạo ra giá trị nghiệp vụ cho tổ chức."
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-1-2",
          number: "2",
          title: "1.2 Mô hình xử lý cơ bản (Input – Process – Output)",
          parts: [
            {
              id: "ad1-part-1-2",
              label: "a",
              title: "Bốn giai đoạn trong chu trình xử lý thông tin",
              content: [
                {
                  type: "paragraph",
                  text: "Mọi hệ thống thông tin dù quy mô nhỏ hay cấp độ tập đoàn đa quốc gia đều vận hành dựa trên chu trình chuyển hóa thông tin nền tảng gồm 3 pha chính kèm vòng phản hồi:"
                },
                {
                  type: "list",
                  items: [
                    "**Input (Đầu vào):** Dữ liệu thô được thu thập từ các sự kiện, giao dịch phát sinh trong và ngoài tổ chức (raw data từ events / transactions).",
                    "**Process (Xử lý):** Dữ liệu thô được tổ chức, phân loại, tính toán, chuyển đổi và kiểm tra tính hợp lệ theo các quy tắc nghiệp vụ.",
                    "**Output (Đầu ra):** Thông tin có cấu trúc, có ý nghĩa và giá trị được cung cấp cho người dùng dưới dạng báo cáo, biểu đồ hoặc giao diện trực quan.",
                    "**Feedback loop (Vòng phản hồi):** Luồng thông tin phản hồi từ người dùng và môi trường giúp đánh giá chất lượng đầu ra, từ đó điều chỉnh và cải thiện khâu input/process trong tương lai."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-1-3",
          number: "3",
          title: "1.3 Năm thành phần cốt lõi (Five Core Components)",
          parts: [
            {
              id: "ad1-part-1-3-table",
              label: "a",
              title: "Bảng cấu trúc 5 thành phần của một Hệ thống thông tin",
              content: [
                {
                  type: "paragraph",
                  text: "Để biến dữ liệu thô thành thông tin hữu ích hỗ trợ ra quyết định, 5 thành phần sau bắt buộc phải tương tác chặt chẽ với nhau:"
                },
                {
                  type: "table",
                  headers: ["#", "Thành phần (Component)", "Nội dung & Vai trò cụ thể"],
                  rows: [
                    ["1", "**Hardware** (Phần cứng)", "Thiết bị vật lý: máy tính để bàn, server máy chủ, thiết bị di động, hệ thống mạng và lưu trữ."],
                    ["2", "**Software** (Phần mềm)", "Chương trình hệ thống, ứng dụng điều khiển phần cứng xử lý dữ liệu và thực thi logic nghiệp vụ."],
                    ["3", "**Data** (Dữ liệu)", "Dữ kiện thô, sự kiện giao dịch được tổ chức và lưu trữ trong CSDL để xử lý thành thông tin."],
                    ["4", "**People** (Con người)", "Người dùng cuối (End-users), nhân viên IT, Business Analyst sử dụng, phân tích và hỗ trợ hệ thống."],
                    ["5", "**Procedures** (Quy trình)", "Chính sách, tài liệu hướng dẫn, quy tắc vận hành, bảo mật và chuẩn mực sử dụng hệ thống."]
                  ]
                },
                {
                  type: "highlight",
                  text: "👉 **Nguyên lý tương tác:** Năm thành phần này không hoạt động độc lập mà tương tác nhịp nhàng với nhau để biến nguồn dữ liệu thô thành tri thức hành động hữu ích."
                }
              ]
            },
            {
              id: "ad1-part-1-3-studio",
              label: "b",
              title: "Studio Trực Quan Hóa Luồng IPO & 5 Thành Phần Cốt Lõi",
              content: [
                {
                  type: "component",
                  component: "InformationSystemArchitectureStudio"
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-1-4",
          number: "4",
          title: "1.4 Chuỗi giá trị: Từ Data ➔ Information ➔ Knowledge",
          parts: [
            {
              id: "ad1-part-1-4",
              label: "a",
              title: "Bản chất chuyển hóa tri thức và vai trò của Phân tích (Analysis)",
              content: [
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Data (Dữ liệu thô)",
                      bullets: [
                        "Là các dữ kiện thô, rời rạc, chưa được tổ chức hoặc gán ngữ cảnh.",
                        "Biểu diễn dưới dạng con số, ký tự văn bản, hình ảnh, âm thanh, bản ghi giao dịch thô."
                      ]
                    },
                    {
                      number: "2",
                      title: "Information (Thông tin)",
                      bullets: [
                        "Là dữ liệu đã được xử lý, sắp xếp, lọc và gán vào một ngữ cảnh cụ thể.",
                        "Mang lại ý nghĩa rõ ràng, giúp người đọc nắm bắt được sự việc đang diễn ra."
                      ]
                    },
                    {
                      number: "3",
                      title: "Knowledge (Tri thức)",
                      bullets: [
                        "Là sự thấu hiểu sâu sắc (insight) có được khi tổng hợp và áp dụng thông tin vào thực tiễn.",
                        "Cung cấp cơ sở lý luận vững chắc để đưa ra các quyết định hành động chính xác."
                      ]
                    }
                  ]
                },
                {
                  type: "quote",
                  text: "🔑 **Chân lý cốt lõi:** Nhiệm vụ trọng tâm của khâu **phân tích (analysis)** là biến đổi có hệ thống từ **Raw Data ➔ Information ➔ Knowledge** nhằm tối ưu hóa năng lực ra quyết định của tổ chức."
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-1-5",
          number: "5",
          title: "1.5 Phân loại hệ thống thông tin theo cấp độ (Types of IS by Level)",
          parts: [
            {
              id: "ad1-part-1-5-hierarchy",
              label: "a",
              title: "Tháp 3 tầng phân cấp hệ thống thông tin trong tổ chức",
              content: [
                {
                  type: "paragraph",
                  text: "Trong một tổ chức doanh nghiệp, hệ thống thông tin được phân cấp tương ứng với các cấp bậc quản trị từ chiến lược đến tác nghiệp:"
                },
                {
                  type: "list",
                  items: [
                    "**Executive Support Systems (ESS):** Phục vụ **lãnh đạo cấp cao (Executives)** — Cung cấp bức tranh toàn cảnh, dự báo xu hướng thị trường và hỗ trợ ra các quyết định chiến lược dài hạn.",
                    "**Management Information Systems (MIS) / Decision Support Systems (DSS):** Phục vụ **quản lý cấp trung (Middle Managers)** — Cung cấp báo cáo định kỳ, phân tích dữ liệu chiến thuật và mô phỏng kịch bản ra quyết định trung hạn.",
                    "**Transaction Processing Systems (TPS):** Phục vụ **cấp tác nghiệp (Operational Level)** — Tự động hóa việc ghi nhận, xử lý giao dịch thường nhật và thu thập dữ liệu vận hành hàng ngày (ví dụ: quét mã vạch, quẹt thẻ ATM, bán hàng tại quầy)."
                  ]
                },
                {
                  type: "note",
                  text: "📌 **Thứ tự phân tầng từ trên xuống dưới:** $\\text{ESS (Chiến lược)} \\longrightarrow \\text{MIS/DSS (Chiến thuật)} \\longrightarrow \\text{TPS (Tác nghiệp)}$."
                }
              ]
            },
            {
              id: "ad1-part-1-5-studio",
              label: "b",
              title: "Studio Tương Tác: Tháp Phân Cấp IS & Kim Tự Tháp DIKW",
              content: [
                {
                  type: "component",
                  component: "IsHierarchyAndDikwPyramid"
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-1-6",
          number: "6",
          title: "1.6 Các hệ thống thông tin phổ biến trong thực tế",
          parts: [
            {
              id: "ad1-part-1-6",
              label: "a",
              title: "Bảng 4 hệ sinh thái phần mềm doanh nghiệp kinh điển",
              content: [
                {
                  type: "table",
                  headers: ["Viết tắt", "Tên đầy đủ (Full Name)", "Chức năng nghiệp vụ chính"],
                  rows: [
                    ["**ERP**", "Enterprise Resource Planning", "Hoạch định nguồn lực doanh nghiệp — Tích hợp toàn diện các quy trình nghiệp vụ cốt lõi: tài chính, kế toán, sản xuất, mua hàng, tồn kho và chuỗi cung ứng."],
                    ["**CRM**", "Customer Relationship Management", "Quản lý quan hệ khách hàng — Quản lý tương tác, chăm sóc khách hàng hiện tại, phát triển khách hàng tiềm năng và tối ưu quy trình bán hàng."],
                    ["**SCM**", "Supply Chain Management", "Quản lý chuỗi cung ứng — Điều phối luồng hàng hóa, dịch vụ, dòng tiền và thông tin xuyên suốt từ nhà cung cấp nguyên liệu đến tay người tiêu dùng cuối cùng."],
                    ["**HR**", "Human Resource Systems (HRMS)", "Quản lý nguồn nhân lực — Hỗ trợ tuyển dụng, chấm công, tính lương, quản lý hồ sơ nhân viên, chế độ phúc lợi và đánh giá hiệu suất làm việc."]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-1-7",
          number: "7",
          title: "1.7 Vì sao Information Systems quan trọng (Why IS Matter)",
          parts: [
            {
              id: "ad1-part-1-7-text",
              label: "a",
              title: "5 Lợi ích chiến lược sống còn của Hệ thống thông tin",
              content: [
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Efficiency & Automation (Hiệu quả & Tự động hóa)",
                      bullets: [
                        "Cắt giảm tối đa các thao tác thủ công lặp đi lặp lại.",
                        "Tăng tốc độ vận hành và giảm thiểu sai sót do con người gây ra."
                      ]
                    },
                    {
                      number: "2",
                      title: "Better Decision-Making (Ra quyết định chuẩn xác hơn)",
                      bullets: [
                        "Cung cấp thông tin kịp thời, chuẩn xác dựa trên dữ liệu thực (Data-driven).",
                        "Hỗ trợ báo cáo chuyên sâu đa chiều cho mọi cấp quản trị."
                      ]
                    },
                    {
                      number: "3",
                      title: "Competitive Advantage (Lợi thế cạnh tranh vượt trội)",
                      bullets: [
                        "Giúp doanh nghiệp đổi mới sản phẩm, dịch vụ và mô hình kinh doanh số.",
                        "Phản ứng linh hoạt trước sự thay đổi nhanh chóng của thị trường."
                      ]
                    },
                    {
                      number: "4",
                      title: "Customer Service (Nâng cao trải nghiệm khách hàng)",
                      bullets: [
                        "Cung cấp dịch vụ chăm sóc nhanh chóng, nhất quán 24/7.",
                        "Cá nhân hóa trải nghiệm người dùng dựa trên lịch sử tương tác."
                      ]
                    },
                    {
                      number: "5",
                      title: "Compliance & Control (Kiểm soát & Tuân thủ quy định)",
                      bullets: [
                        "Giúp tổ chức tuân thủ nghiêm ngặt các quy định pháp luật và chuẩn mực ngành.",
                        "Tăng cường khả năng kiểm toán, bảo mật thông tin và quản trị rủi ro."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "ad1-part-1-7-quiz",
              label: "b",
              title: "Checkpoint Quiz: Kiểm tra củng cố kiến thức Mục I",
              content: [
                {
                  type: "quiz",
                  quizId: "ad-ch1-sec1-quiz",
                  title: "Mini Checkpoint Quiz: Hệ thống thông tin (Information Systems)",
                  description: "Kiểm tra 4 câu hỏi trắc nghiệm nhanh củng cố toàn diện kiến thức Mục I.",
                  questions: [
                    {
                      id: "ad-c1-q1",
                      question: "Thành phần nào sau đây KHÔNG thuộc 5 thành phần cốt lõi của một Information System?",
                      options: [
                        "Hardware và Software.",
                        "People và Procedures.",
                        "Data và Cơ sở dữ liệu.",
                        "Capital và Investment."
                      ],
                      answer: 3,
                      explanation: "Năm thành phần cốt lõi của Information System gồm: Hardware, Software, Data, People và Procedures. 'Capital and Investment' (Vốn đầu tư) là nguồn lực tài chính, không nằm trong 5 thành phần kiến trúc cốt lõi."
                    },
                    {
                      id: "ad-c1-q2",
                      question: "Trong chu trình IPO của hệ thống thông tin, thành phần Feedback loop đóng vai trò gì?",
                      options: [
                        "Ghi nhận trực tiếp dữ liệu thô.",
                        "Thực hiện tính toán chuyển đổi.",
                        "Trình diễn giao diện biểu đồ.",
                        "Cải thiện input và process."
                      ],
                      answer: 3,
                      explanation: "Feedback loop (Vòng phản hồi) cung cấp thông tin đánh giá về kết quả đầu ra, từ đó giúp hiệu chỉnh và cải tiến khâu thu thập đầu vào (input) và xử lý (process) trong các chu trình tiếp theo."
                    },
                    {
                      id: "ad-c1-q3",
                      question: "Hệ thống thông tin hỗ trợ cho việc ra quyết định chiến lược của lãnh đạo cấp cao là:",
                      options: [
                        "Executive Support System.",
                        "Transaction Process System.",
                        "Management Info System.",
                        "Human Resources System."
                      ],
                      answer: 0,
                      explanation: "Executive Support Systems (ESS) được thiết kế đặc thù phục vụ lãnh đạo cấp cao đưa ra các quyết định chiến lược dài hạn cho toàn bộ tổ chức."
                    },
                    {
                      id: "ad-c1-q4",
                      question: "Hệ thống tích hợp toàn diện các quy trình tài chính, sản xuất, mua hàng và tồn kho là:",
                      options: [
                        "Customer Relationship (CRM).",
                        "Enterprise Resource (ERP).",
                        "Supply Chain Manage (SCM).",
                        "Human Resource Mgmt (HRM)."
                      ],
                      answer: 1,
                      explanation: "ERP (Enterprise Resource Planning) là hệ thống hoạch định nguồn lực doanh nghiệp, tích hợp tất cả các quy trình nghiệp vụ cốt lõi như tài chính, sản xuất, kho bãi và bán hàng."
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
       SECTION II: ROLE OF THE (IT) BUSINESS ANALYST
       ============================================================ */
    {
      id: "ad1-section-2",
      roman: "II",
      title: "Role of the (IT) Business Analyst (Vai trò của BA)",
      subsections: [
        {
          id: "ad1-sub-2-1",
          number: "1",
          title: "2.1 Business Analyst (BA) là ai? & 5 Chức năng chính",
          parts: [
            {
              id: "ad1-part-2-1",
              label: "a",
              title: "Định nghĩa chuẩn mực & 5 Chức năng then chốt của BA",
              content: [
                {
                  type: "definition",
                  term: "Business Analyst (BA)",
                  text: "**Business Analyst (BA)** là người **điều tra tình huống nghiệp vụ (investigates business situations)**, **xác định cơ hội cải tiến**, và **định nghĩa các yêu cầu (requirements)** mà hệ thống thông tin mới hoặc thay đổi phải đáp ứng — đóng vai trò **cầu nối (bridge)** giữa **business stakeholders** và **technical development team**."
                },
                {
                  type: "paragraph",
                  text: "Năm chức năng hành động chính của một Business Analyst:"
                },
                {
                  type: "list",
                  items: [
                    "**Investigates business needs:** Khảo sát, điều tra và làm rõ nhu cầu cùng nỗi đau nghiệp vụ của khách hàng.",
                    "**Defines requirements:** Phân tích, tổng hợp và định nghĩa hệ thống các yêu cầu rõ ràng, khả thi.",
                    "**Models processes & data:** Mô hình hóa luồng quy trình nghiệp vụ và cấu trúc dữ liệu bằng các sơ đồ trực quan (UML, BPMN, DFD).",
                    "**Communicates across teams:** Làm việc đa chức năng, giữ vai trò truyền tải thông suốt giữa các bộ phận kinh doanh và kỹ thuật.",
                    "**Validates the solution:** Thẩm định, kiểm tra và xác nhận giải pháp phần mềm hoàn thiện đáp ứng đúng mục tiêu ban đầu."
                  ]
                },
                {
                  type: "note",
                  text: "💡 **Lưu ý thực tế:** Tùy theo từng doanh nghiệp, chức danh có thể linh hoạt thay đổi thành **Business Analyst**, **Systems Analyst**, hay **Requirements Analyst**, nhưng mục đích cốt lõi vẫn là tối ưu hóa giá trị nghiệp vụ thông qua giải pháp phần mềm."
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-2-2",
          number: "2",
          title: "2.2 BA là cầu nối (The BA as a Bridge)",
          parts: [
            {
              id: "ad1-part-2-2-diagram",
              label: "a",
              title: "Sơ đồ luồng cầu nối: Business Stakeholders ➔ BA ➔ Technical Team",
              content: [
                {
                  type: "paragraph",
                  text: "Trong một dự án công nghệ thông tin, BA đứng ở vị trí trung tâm để chuyển ngữ giữa hai thế giới có ngôn ngữ và tư duy hoàn toàn khác nhau:"
                },
                {
                  type: "table",
                  headers: ["Business Stakeholders", "Business Analyst (The Bridge)", "Development / IT Team"],
                  rows: [
                    [
                      "**Đối tượng:** Giám đốc (Executives), Trưởng phòng (Managers), Người dùng cuối (End-users).\n\n**Góc nhìn:** Hiểu sâu về bài toán, nhu cầu nghiệp vụ và mục tiêu kinh doanh.",
                      "**Vai trò trung tâm:**\n• Lắng nghe và điều tra nhu cầu nghiệp vụ.\n• 'Dịch' yêu cầu nghiệp vụ thành đặc tả kỹ thuật rõ ràng.\n• Làm rõ và xác nhận kết quả hai chiều.",
                      "**Đối tượng:** Kiến trúc sư hệ thống (Designers), Lập trình viên (Developers), Kiểm thử viên (Testers).\n\n**Góc nhìn:** Xây dựng giải pháp kỹ thuật, viết code và triển khai hệ thống."
                    ]
                  ]
                }
              ]
            },
            {
              id: "ad1-part-2-2-studio",
              label: "b",
              title: "Studio Mô Phỏng Tương Tác: BA as a Bridge Simulator",
              content: [
                {
                  type: "component",
                  component: "BaBridgeSimulator"
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-2-3",
          number: "3",
          title: "2.3 Năm trách nhiệm cốt lõi của BA (Core Responsibilities)",
          parts: [
            {
              id: "ad1-part-2-3",
              label: "a",
              title: "Chi tiết 5 trụ cột trách nhiệm của một Business Analyst",
              content: [
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Elicit Requirements (Khơi mở & Thu thập yêu cầu)",
                      bullets: [
                        "Chủ động khai thác nhu cầu tiềm ẩn của khách hàng thông qua phỏng vấn (interviews), hội thảo (workshops), quan sát thực địa (job shadowing) và khảo sát câu hỏi.",
                        "Giúp các bên liên quan bộc lộ rõ những mong muốn và ràng buộc thực tế."
                      ]
                    },
                    {
                      number: "2",
                      title: "Analyze & Model (Phân tích & Mô hình hóa)",
                      bullets: [
                        "Tổ chức và biểu diễn các quy trình nghiệp vụ, luồng dữ liệu và quy tắc logic bằng mô hình có cấu trúc (Use Case, Activity Diagram, Class Diagram).",
                        "Phát hiện sớm các điểm mâu thuẫn, khoảng trống hoặc bất khả thi trong yêu cầu."
                      ]
                    },
                    {
                      number: "3",
                      title: "Document Requirements (Tài liệu hóa đặc tả)",
                      bullets: [
                        "Soạn thảo tài liệu đặc tả yêu cầu phần mềm (SRS / User Stories / Acceptance Criteria) rõ ràng, súc tích và mạch lạc.",
                        "Đảm bảo các yêu cầu có thể kiểm thử được (testable) và đội phát triển dễ dàng lập trình."
                      ]
                    },
                    {
                      number: "4",
                      title: "Communicate & Facilitate (Giao tiếp & Điều phối)",
                      bullets: [
                        "Duy trì sự đồng thuận cao (consensus) giữa các bên liên quan về phạm vi dự án.",
                        "Chủ trì các phiên đàm phán, giải quyết bất đồng và quản lý kỳ vọng của các bên liên quan."
                      ]
                    },
                    {
                      number: "5",
                      title: "Validate the Solution (Xác nhận & Thẩm định giải pháp)",
                      bullets: [
                        "Đồng hành trong giai đoạn kiểm thử chấp nhận người dùng (User Acceptance Testing - UAT).",
                        "Đảm bảo hệ thống phần mềm bàn giao thực tế giải quyết đúng vấn đề và mang lại giá trị kinh doanh cam kết."
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-2-4",
          number: "4",
          title: "2.4 Kỹ năng cần thiết (Essential BA Skills)",
          parts: [
            {
              id: "ad1-part-2-4",
              label: "a",
              title: "Bộ kỹ năng kép: Technical/Analytical vs Interpersonal/Soft Skills",
              content: [
                {
                  type: "paragraph",
                  text: "Một BA chuyên nghiệp cần có sự cân bằng hoàn hảo giữa tư duy kỹ thuật logic sắc bén và kỹ năng mềm xử lý mối quan hệ con người:"
                },
                {
                  type: "table",
                  headers: ["Kỹ năng Kỹ thuật & Phân tích (Technical / Analytical)", "Kỹ năng Mềm & Tương tác (Interpersonal / Soft Skills)"],
                  rows: [
                    [
                      "• **Requirements modeling:** Thành thạo UML (Use Case, Activity, Sequence, Class) và sơ đồ quy trình.\n• **Domain & industry knowledge:** Am hiểu sâu sắc kiến thức chuyên ngành (Ngân hàng, Y tế, E-commerce, Logistic).\n• **Data analysis:** Phân tích dữ liệu và giải quyết vấn đề có cấu trúc (SQL, Excel, Data Flow).\n• **Methodologies:** Nắm vững các phương pháp phát triển phần mềm (Agile/Scrum, Waterfall).",
                      "• **Communication & active listening:** Kỹ năng giao tiếp xuất sắc và lắng nghe thấu cảm.\n• **Facilitation & workshop leadership:** Kỹ năng điều phối cuộc họp và dẫn dắt hội thảo thu thập yêu cầu.\n• **Critical thinking & negotiation:** Tư duy phản biện, đàm phán giải quyết xung đột lợi ích.\n• **Stakeholder relationship:** Kỹ năng xây dựng và quản trị mối quan hệ tin cậy với các bên."
                    ]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-2-5",
          number: "5",
          title: "2.5 Mức độ tham gia theo giai đoạn dự án SDLC",
          parts: [
            {
              id: "ad1-part-2-5-text",
              label: "a",
              title: "Vòng đời tham gia xuyên suốt từ Planning đến Implementation",
              content: [
                {
                  type: "paragraph",
                  text: "Quy trình phát triển phần mềm gồm 6 chặng liên hoàn: `Planning ➔ Analysis ➔ Design ➔ Construction ➔ Testing ➔ Implementation`."
                },
                {
                  type: "highlight",
                  text: "🎯 **Nguyên tắc tham gia của BA:** BA tham gia **nhiều nhất ở giai đoạn Planning và Analysis** (định nghĩa, phân tích và tài liệu hóa requirements), nhưng **vẫn duy trì sự hiện diện liên tục xuyên suốt Design, Construction, Testing và Implementation** để đảm bảo giải pháp kỹ thuật xây dựng ra luôn bám sát nhu cầu nghiệp vụ ban đầu."
                }
              ]
            },
            {
              id: "ad1-part-2-5-studio",
              label: "b",
              title: "Studio Radar: Vòng Đời SDLC & Heatmap Mức Độ Tham Gia Của BA",
              content: [
                {
                  type: "component",
                  component: "BaSdlcLifecycleRadar"
                }
              ]
            },
            {
              id: "ad1-part-2-5-quiz",
              label: "c",
              title: "Checkpoint Quiz: Kiểm tra củng cố kiến thức Mục II",
              content: [
                {
                  type: "quiz",
                  quizId: "ad-ch1-sec2-quiz",
                  title: "Mini Checkpoint Quiz: Vai trò của Business Analyst",
                  description: "Kiểm tra 4 câu hỏi trắc nghiệm nhanh củng cố toàn diện kiến thức Mục II.",
                  questions: [
                    {
                      id: "ad-c2-q1",
                      question: "Vai trò cốt lõi nhất của một (IT) Business Analyst trong dự án phần mềm là:",
                      options: [
                        "Trực tiếp lập trình cơ sở dữ liệu.",
                        "Cầu nối nghiệp vụ và đội kỹ thuật.",
                        "Quản lý phần cứng của hệ thống IT.",
                        "Thực hiện kiểm thử tải toàn diện."
                      ],
                      answer: 1,
                      explanation: "BA đóng vai trò cầu nối (bridge) chuyển đổi nhu cầu nghiệp vụ của stakeholders thành các yêu cầu kỹ thuật mà đội ngũ phát triển (developers/designers) có thể hiện thực hóa."
                    },
                    {
                      id: "ad-c2-q2",
                      question: "Hoạt động 'Elicit Requirements' của một Business Analyst tập trung vào việc gì?",
                      options: [
                        "Viết mã nguồn chức năng cho app.",
                        "Khơi mở và thu thập nhu cầu ẩn.",
                        "Cài đặt hệ điều hành trên server.",
                        "Sửa lỗi phát sinh trong database."
                      ],
                      answer: 1,
                      explanation: "Elicit Requirements là quá trình khơi mở, tìm hiểu và thu thập các yêu cầu nghiệp vụ từ khách hàng thông qua phỏng vấn, workshop, bảng câu hỏi và quan sát thực tế."
                    },
                    {
                      id: "ad-c2-q3",
                      question: "Trong vòng đời dự án SDLC, Business Analyst tham gia với cường độ CAO NHẤT ở:",
                      options: [
                        "Planning và Analysis dự án.",
                        "Testing và Triển khai hệ thống.",
                        "Viết code và Lập trình cơ sở.",
                        "Bảo trì và Cập nhật định kỳ."
                      ],
                      answer: 0,
                      explanation: "BA tập trung nguồn lực và thời gian nhiều nhất vào giai đoạn Planning (Lập kế hoạch) và Analysis (Phân tích, tài liệu hóa requirements)."
                    },
                    {
                      id: "ad-c2-q4",
                      question: "Kỹ năng nào sau đây thuộc nhóm Kỹ năng Kỹ thuật/Phân tích (Technical/Analytical) của BA?",
                      options: [
                        "Lắng nghe thấu cảm đa chiều.",
                        "Mô hình hóa yêu cầu với UML.",
                        "Thuyết phục và đàm phán tốt.",
                        "Điều phối hội thảo chuyên sâu."
                      ],
                      answer: 1,
                      explanation: "Mô hình hóa yêu cầu (Requirements modeling) bằng các sơ đồ chuẩn UML, DFD, Process maps thuộc nhóm kỹ năng kỹ thuật & phân tích của BA."
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
       SECTION III: BỘ CÔNG CỤ CỦA BA (METHODOLOGY – MODEL – TOOL – TECHNIQUE)
       ============================================================ */
    {
      id: "ad1-section-3",
      roman: "III",
      title: "Bộ công cụ của BA: Methodology – Model – Tool – Technique",
      subsections: [
        {
          id: "ad1-sub-3-1",
          number: "1",
          title: "3.1 Methodology (Phương pháp luận phát triển hệ thống)",
          parts: [
            {
              id: "ad1-part-3-1-text",
              label: "a",
              title: "Khái niệm & 3 Phương pháp luận phát triển kinh điển",
              content: [
                {
                  type: "definition",
                  term: "Methodology (Phương pháp luận)",
                  text: "**Methodology** là cách tiếp cận **có cấu trúc, từng bước (formalized, step-by-step)** để thực hiện một dự án phát triển hệ thống — cung cấp lộ trình tổng thể gồm các giai đoạn (**phases**), hoạt động (**activities**) và sản phẩm chuyển giao (**deliverables**)."
                },
                {
                  type: "table",
                  headers: ["Methodology", "Đặc điểm quy trình cốt lõi", "Phù hợp nhất với"],
                  rows: [
                    [
                      "**Structured / Waterfall** (Thác nước)",
                      "Các giai đoạn triển khai tuần tự, hoàn thành dứt điểm lần lượt từng pha (sequential, one pass).",
                      "Dự án có **Requirements ổn định**, rõ ràng, phạm vi cố định, ít có sự biến động."
                    ],
                    [
                      "**Object-Oriented (Unified Process – UP)**",
                      "Quy trình lặp (iterative) và xây dựng tăng dần (incremental), tổ chức xoay quanh **objects & use cases**, mô hình hóa bằng **UML**.",
                      "Hệ thống quy mô vừa và lớn, có độ phức tạp kỹ thuật cao, hướng đối tượng."
                    ],
                    [
                      "**Agile (Linh hoạt / Scrum)**",
                      "Chu kỳ lặp ngắn (short iterations / sprints từ 1-4 tuần), nhấn mạnh khả năng thích ứng linh hoạt và nhận phản hồi liên tục từ khách hàng.",
                      "Dự án có **Requirements thay đổi liên tục**, cần đưa sản phẩm ra thị trường nhanh (Time-to-market)."
                    ]
                  ]
                }
              ]
            },
            {
              id: "ad1-part-3-1-studio",
              label: "b",
              title: "Studio Đấu Trường So Sánh: Methodology Comparison Arena",
              content: [
                {
                  type: "component",
                  component: "MethodologyComparisonArena"
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-3-2",
          number: "2",
          title: "3.2 Model (Mô hình hóa hệ thống)",
          parts: [
            {
              id: "ad1-part-3-2",
              label: "a",
              title: "Khái niệm Model, 4 Vai trò và Phân loại Structural vs Behavioral",
              content: [
                {
                  type: "definition",
                  term: "Model (Mô hình)",
                  text: "**Model** là bản biểu diễn **đơn giản hóa (simplified representation)** của một đối tượng, quy trình hoặc hệ thống thực tế — làm nổi bật các khía cạnh quan trọng cho phân tích & thiết kế, đồng thời lược bỏ các chi tiết phức tạp không cần thiết."
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Giao tiếp ý tưởng rõ ràng với stakeholders",
                      bullets: ["Dùng hình ảnh trực quan thay cho hàng chục trang văn bản mô tả dài dòng, tránh hiểu nhầm."]
                    },
                    {
                      number: "2",
                      title: "Xác minh sự hiểu đúng trước khi xây dựng",
                      bullets: ["Giúp khách hàng và đội kỹ thuật cùng nhìn vào một bức tranh chung để xác nhận đúng ý trước khi viết code."]
                    },
                    {
                      number: "3",
                      title: "Quản lý độ phức tạp hệ thống",
                      bullets: ["Chia nhỏ bài toán lớn thành các góc nhìn thành phần độc lập (dữ liệu, quy trình, kiến trúc)."]
                    },
                    {
                      number: "4",
                      title: "Là Blueprint (Bản thiết kế kỹ thuật) cho Developer",
                      bullets: ["Lập trình viên và kiến trúc sư dựa vào sơ đồ để xây dựng cấu trúc cơ sở dữ liệu và viết logic xử lý chuẩn xác."]
                    }
                  ]
                },
                {
                  type: "table",
                  headers: ["Phân loại Model", "Bản chất & Trả lời câu hỏi gì?", "Các ví dụ Diagram điển hình"],
                  rows: [
                    [
                      "**Structural Models**\n(Mô hình cấu trúc tĩnh)",
                      "Thể hiện các **thành phần tĩnh (static things)** và mối quan hệ tồn tại trong hệ thống.\n\n👉 *Trả lời câu hỏi:* **Có dữ liệu / đối tượng gì tồn tại?**",
                      "• **Class Diagram** (Sơ đồ lớp)\n• **Entity-Relationship Diagram** (ERD)\n• **Component Diagram**"
                    ],
                    [
                      "**Behavioral Models**\n(Mô hình hành vi động)",
                      "Thể hiện cách hệ thống **hoạt động, tương tác và phản ứng theo thời gian**.\n\n👉 *Trả lời câu hỏi:* **Hệ thống hành động & phản ứng như thế nào?**",
                      "• **Use Case Diagram** (Ca sử dụng)\n• **Activity Diagram** (Luồng quy trình)\n• **Sequence Diagram** (Tuần tự thời gian)\n• **State Machine Diagram** (Trạng thái)"
                    ]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-3-3",
          number: "3",
          title: "3.3 UML – Unified Modeling Language (Ngôn ngữ mô hình hóa chuẩn)",
          parts: [
            {
              id: "ad1-part-3-3-text",
              label: "a",
              title: "Khái niệm UML & 6 Loại biểu đồ chuẩn mực trong phân tích thiết kế",
              content: [
                {
                  type: "definition",
                  term: "UML (Unified Modeling Language)",
                  text: "**UML** là **ngôn ngữ mô hình hóa chuẩn quốc tế**, cung cấp hệ thống ký hiệu trực quan thống nhất cho các mô hình hướng đối tượng (**Object-Oriented – OO**)."
                },
                {
                  type: "table",
                  headers: ["Ký hiệu", "Tên biểu đồ (UML Diagram)", "Ý nghĩa & Vai trò trong phân tích"],
                  rows: [
                    ["**UC**", "**Use Case Diagram** (Biểu đồ ca sử dụng)", "Thể hiện **Actor** (tác nhân bên ngoài) & chức năng hệ thống — mô tả hệ thống làm gì từ góc nhìn của người dùng."],
                    ["**CL**", "**Class Diagram** (Biểu đồ lớp)", "Thể hiện **objects, attributes, methods & relationships** — cấu trúc dữ liệu tĩnh và quan hệ giữa các thực thể."],
                    ["**SQ**", "**Sequence Diagram** (Biểu đồ tuần tự)", "Thể hiện **sự tương tác theo trình tự thời gian (interaction over time)** truyền thông điệp giữa các đối tượng."],
                    ["**AC**", "**Activity Diagram** (Biểu đồ hoạt động)", "Thể hiện **workflow & process logic** — luồng xử lý các bước nghiệp vụ, rẽ nhánh điều kiện và song song."],
                    ["**ST**", "**State Machine Diagram** (Biểu đồ trạng thái)", "Thể hiện **vòng đời trạng thái đối tượng & chuyển trạng thái (states & transitions)** khi có sự kiện kích hoạt."],
                    ["**CM**", "**Component / Deployment Diagram**", "Thể hiện **kiến trúc phần mềm vật lý & triển khai hạ tầng phần cứng (system architecture)**."]
                  ]
                },
                {
                  type: "note",
                  text: "📌 *Ghi chú học tập:* Ở Chapter 1 này, chúng ta nắm vững tên gọi, phân loại và vai trò tổng quát của 6 loại biểu đồ. Ký hiệu chi tiết (actor, include, extend, composition, inheritance...) sẽ được học chuyên sâu ở các chương kế tiếp."
                }
              ]
            },
            {
              id: "ad1-part-3-3-studio",
              label: "b",
              title: "Studio Thư Viện 6 Biểu Đồ UML & Trục Đối Chiếu Tĩnh - Động",
              content: [
                {
                  type: "component",
                  component: "UmlDiagramMatrixStudio"
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-3-4",
          number: "4",
          title: "3.4 Tool (Công cụ hỗ trợ phần mềm)",
          parts: [
            {
              id: "ad1-part-3-4",
              label: "a",
              title: "Khái niệm CASE Tools & Nguyên tắc cốt tử của nghề BA",
              content: [
                {
                  type: "definition",
                  term: "CASE Tools (Computer-Aided Software Engineering)",
                  text: "**Tools** là phần mềm hỗ trợ thực thi methodology — giúp Business Analyst và đội dự án dễ dàng **xây dựng, lưu trữ, kiểm tra tính nhất quán và chia sẻ models**. Thường được gọi là **CASE tools**."
                },
                {
                  type: "list",
                  items: [
                    "**UML modeling tools:** Visual Paradigm, Enterprise Architect, StarUML, PlantUML.",
                    "**Diagramming & Flowchart software:** Draw.io, Lucidchart, Microsoft Visio, Miro.",
                    "**Requirements management systems:** Jira, Confluence, Azure DevOps, IBM DOORS.",
                    "**Prototyping & UI/UX tools:** Figma, Adobe XD, Axure RP, Balsamiq Mockups.",
                    "**Collaborative whiteboards:** Miro, Mural, FigJam cho các buổi workshop JAD online."
                  ]
                },
                {
                  type: "highlight",
                  text: "⚠️ **Cảnh báo cốt tử:** **Tools KHÔNG THỂ thay thế được tư duy phân tích (Thinking & Analysis)!** Công cụ phần mềm chỉ là phương tiện hỗ trợ vẽ ra các model theo yêu cầu của methodology; giá trị của một BA nằm ở khả năng tư duy phản biện, thấu cảm người dùng và giải quyết bài toán nghiệp vụ."
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-3-5",
          number: "5",
          title: "3.5 Technique (Kỹ thuật thu thập & xác nhận yêu cầu)",
          parts: [
            {
              id: "ad1-part-3-5-text",
              label: "a",
              title: "5 Kỹ thuật khơi mở yêu cầu (Requirements Elicitation Techniques)",
              content: [
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Interviews (Phỏng vấn)",
                      bullets: [
                        "Phỏng vấn trực tiếp 1-1 với stakeholder để đào sâu chi tiết yêu cầu, mong muốn và nỗi đau riêng biệt của từng vai trò.",
                        "Phù hợp để tìm hiểu thông tin nhạy cảm hoặc từ các chuyên gia nghiệp vụ chủ chốt."
                      ]
                    },
                    {
                      number: "2",
                      title: "JAD Sessions (Joint Application Design - Hội thảo đồng thiết kế)",
                      bullets: [
                        "Buổi workshop tập hợp nhiều stakeholders đa chức năng (Users, BA, Dev, Managers) cùng làm việc tập trung trong một phòng.",
                        "Giúp giải quyết xung đột ý kiến nhanh chóng và đạt được sự đồng thuận cao về phạm vi dự án trong thời gian ngắn."
                      ]
                    },
                    {
                      number: "3",
                      title: "Observation (Quan sát thực địa / Job Shadowing)",
                      bullets: [
                        "BA trực tiếp đến nơi làm việc quan sát người dùng thao tác thực tế trong quy trình hàng ngày.",
                        "Vô cùng hiệu quả để **phát hiện các yêu cầu chưa được nói ra (unstated requirements)** hoặc những thói quen ngầm mà người dùng quên kể khi phỏng vấn."
                      ]
                    },
                    {
                      number: "4",
                      title: "Document Analysis (Phân tích tài liệu)",
                      bullets: [
                        "Nghiên cứu các biểu mẫu, hóa đơn, báo cáo Excel, tài liệu quy trình và sổ tay hướng dẫn của hệ thống hiện có.",
                        "Giúp BA nhanh chóng nắm bắt các trường dữ liệu và quy tắc nghiệp vụ nền tảng trước khi đi phỏng vấn."
                      ]
                    },
                    {
                      number: "5",
                      title: "Prototyping (Tạo mẫu thử nghiệm giao diện)",
                      bullets: [
                        "Xây dựng các bản mock-up, wireframe hoặc prototype tương tác để người dùng trực tiếp trải nghiệm và bấm thử.",
                        "Giúp xác nhận trực quan yêu cầu, nhận phản hồi sớm và tránh xây dựng sai giao diện mong đợi."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "ad1-part-3-5-studio",
              label: "b",
              title: "Studio Hộp Công Cụ 5 Kỹ Thuật Khơi Mở Yêu Cầu",
              content: [
                {
                  type: "component",
                  component: "ElicitationTechniquesStudio"
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-3-6",
          number: "6",
          title: "3.6 Mối quan hệ giữa 4 khái niệm & Checkpoint Quiz",
          parts: [
            {
              id: "ad1-part-3-6-nexus",
              label: "a",
              title: "Sơ đồ kiến trúc tổng thể: Mối liên kết giữa Methodology – Model – Tool – Technique",
              content: [
                {
                  type: "paragraph",
                  text: "Bốn khái niệm trong bộ công cụ của BA có mối quan hệ phụ thuộc chặt chẽ tạo thành một hệ sinh thái hoàn chỉnh:"
                },
                {
                  type: "table",
                  headers: ["Khái niệm (Concept)", "Vai trò trong hệ sinh thái", "Trả lời câu hỏi cốt lõi"],
                  rows: [
                    ["**METHODOLOGY**\n(Phương pháp luận)", "**Khung bao quát tổng thể** (Overall Framework)\nĐịnh hình lộ trình, các giai đoạn và chuẩn mực toàn dự án.", "👉 **QUY TRÌNH THỰC HIỆN DỰ ÁN RA SAO?**\n(Phases, Roadmap & Deliverables)"],
                    ["**MODELS**\n(Mô hình)", "**Sản phẩm chuyển giao trừu tượng**\nBản vẽ thiết kế trực quan biểu diễn dữ liệu và quy trình.", "👉 **SẢN XUẤT CÁI GÌ?**\n(What to produce: Use Case, Class, DFD)"],
                    ["**TECHNIQUES**\n(Kỹ thuật)", "**Phương thức hành động thực thi**\nCác kỹ năng cụ thể để thu thập thông tin và thẩm định.", "👉 **THU THẬP THÔNG TIN NHƯ THẾ NÀO?**\n(How to gather info: Interviews, JAD, Prototype)"],
                    ["**TOOLS**\n(Công cụ CASE)", "**Phương tiện phần mềm hỗ trợ**\nGiúp vẽ, lưu trữ, kiểm tra và chia sẻ các model nhanh chóng.", "👉 **DÙNG PHẦN MỀM GÌ HỖ TRỢ?**\n(Software support: Jira, Enterprise Architect, Figma)"]
                  ]
                },
                {
                  type: "quote",
                  text: "💡 **Quy tắc đúc kết:** **Methodology là cái khung lớn bao bọc bên ngoài**, định nghĩa khi nào cần dùng **Techniques** nào để thu thập dữ liệu, cần tạo ra **Models** nào và dùng **Tools** nào hỗ trợ."
                }
              ]
            },
            {
              id: "ad1-part-3-6-studio",
              label: "b",
              title: "Studio Sơ Đồ 3D Mối Liên Kết 4 Trụ Cột BA Toolbox",
              content: [
                {
                  type: "component",
                  component: "BaToolboxNexusVisualizer"
                }
              ]
            },
            {
              id: "ad1-part-3-6-quiz",
              label: "c",
              title: "Checkpoint Quiz: Kiểm tra củng cố kiến thức Mục III",
              content: [
                {
                  type: "quiz",
                  quizId: "ad-ch1-sec3-quiz",
                  title: "Mini Checkpoint Quiz: Bộ công cụ của BA",
                  description: "Kiểm tra 4 câu hỏi trắc nghiệm nhanh củng cố toàn diện kiến thức Mục III.",
                  questions: [
                    {
                      id: "ad-c3-q1",
                      question: "Phương pháp luận nào sau đây thực hiện các giai đoạn tuần tự và phù hợp khi requirements đã ổn định?",
                      options: [
                        "Structured và Waterfall.",
                        "Unified Process lặp OO.",
                        "Agile Sprints ngắn hạn.",
                        "Extreme Programming XP."
                      ],
                      answer: 0,
                      explanation: "Structured / Waterfall tiếp cận tuần tự, hoàn thành dứt điểm từng giai đoạn, rất phù hợp khi yêu cầu nghiệp vụ đã rõ ràng và ít có sự thay đổi."
                    },
                    {
                      id: "ad-c3-q2",
                      question: "Biểu đồ nào sau đây thuộc nhóm Mô hình Cấu trúc Tĩnh (Structural Models) trong UML?",
                      options: [
                        "Activity Process Diagram.",
                        "Sequence Timing Diagram.",
                        "Class Diagram quan hệ.",
                        "State Machine Diagram."
                      ],
                      answer: 2,
                      explanation: "Class Diagram thuộc nhóm Structural Models, thể hiện các thành phần tĩnh, thuộc tính và mối quan hệ giữa các lớp trong hệ thống."
                    },
                    {
                      id: "ad-c3-q3",
                      question: "Kỹ thuật khơi mở nào giúp phát hiện các yêu cầu tiềm ẩn chưa được nói ra (unstated requirements)?",
                      options: [
                        "Phỏng vấn trực tiếp 1-1.",
                        "Quan sát thực địa người.",
                        "Soạn thảo bản mẫu UI.",
                        "Phân tích tài liệu cũ."
                      ],
                      answer: 1,
                      explanation: "Observation (Quan sát thực địa) cho phép BA trực tiếp nhìn thấy thao tác làm việc thực tế, từ đó phát hiện các yêu cầu ngầm định mà người dùng quên nói khi phỏng vấn."
                    },
                    {
                      id: "ad-c3-q4",
                      question: "Trong bộ 4 công cụ của BA, thành phần nào đóng vai trò là 'Khung tổng thể' định hướng dự án?",
                      options: [
                        "Khung tổng thể Methodology.",
                        "Công cụ phần mềm CASE tool.",
                        "Kỹ thuật khảo sát Technique.",
                        "Bản vẽ thiết kế UML Model."
                      ],
                      answer: 0,
                      explanation: "Methodology (Phương pháp luận) là khung tổng thể định hướng toàn bộ quy trình phát triển, xác định các giai đoạn, hoạt động, sản phẩm cần tạo và kỹ thuật cần dùng."
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
       SECTION IV: STAGES IN BUILDING INFORMATION SYSTEMS
       ============================================================ */
    {
      id: "ad1-section-4",
      roman: "IV",
      title: "Stages in Building Information Systems (Các giai đoạn xây dựng hệ thống)",
      subsections: [
        {
          id: "ad1-sub-4-1",
          number: "1",
          title: "4.1 Systems Development Life Cycle (SDLC) – 5 giai đoạn",
          parts: [
            {
              id: "ad1-part-4-1-text",
              label: "a",
              title: "Chi tiết 5 giai đoạn của vòng đời phát triển hệ thống SDLC",
              content: [
                {
                  type: "paragraph",
                  text: "Vòng đời phát triển hệ thống (**SDLC - Systems Development Life Cycle**) là tiến trình có cấu trúc gồm 5 giai đoạn khép kín theo chu kỳ:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Planning (Lập kế hoạch dự án)",
                      bullets: [
                        "**Identify Need or Opportunity:** Nhận diện vấn đề nhức nhối, cơ hội kinh doanh mới hoặc yêu cầu nghiệp vụ cần xây dựng hệ thống.",
                        "**Feasibility Study (Nghiên cứu tính khả thi):** Đánh giá toàn diện 3 trụ cột: **Kỹ thuật (Technical)** (công nghệ có làm được không?), **Kinh tế (Economic)** (chi phí vs lợi ích ROI), **Vận hành (Operational)** (người dùng có chịu dùng không?).",
                        "**Define Scope & Schedule:** Xác định ranh giới phạm vi dự án, ngân sách ban đầu, timeline các mốc và phân bổ nguồn lực."
                      ]
                    },
                    {
                      number: "2",
                      title: "Analysis (Phân tích yêu cầu)",
                      bullets: [
                        "**Gather Requirements:** Thu thập nhu cầu nghiệp vụ qua phỏng vấn (interviews), workshop JAD, quan sát thực địa (observation).",
                        "**Model the Business:** Biểu diễn trực quan quy trình, luồng dữ liệu và quy tắc bằng mô hình Use Case, Activity, Class diagram.",
                        "**Define System Requirements:** Soạn thảo tài liệu đặc tả yêu cầu hệ thống rõ ràng, đã được các bên xác nhận để chuẩn bị cho khâu thiết kế."
                      ]
                    },
                    {
                      number: "3",
                      title: "Design (Thiết kế hệ thống & Giao diện)",
                      bullets: [
                        "**Design Architecture:** Xác định cấu trúc kỹ thuật tổng thể, nền tảng hạ tầng, bảo mật và kết nối API.",
                        "**Design User Interface & Database:** Chuyển đổi yêu cầu thành giao diện màn hình (UI Wireframes/Mockups), báo cáo và cấu trúc CSDL quan hệ.",
                        "**Produce Technical Specifications:** Soạn thảo bộ thiết kế kỹ thuật chi tiết để đội lập trình triển khai xây dựng."
                      ]
                    },
                    {
                      number: "4",
                      title: "Implementation (Xây dựng & Triển khai)",
                      bullets: [
                        "**Construct the System:** Lập trình, sinh mã nguồn, tích hợp các module và cấu hình hệ thống.",
                        "**Test:** Thực hiện kiểm thử nhiều cấp độ (Unit test, Integration test, UAT) đảm bảo hệ thống chạy đúng và chuẩn xác theo yêu cầu.",
                        "**Convert & Deploy:** Đào tạo người dùng cuối, di chuyển dữ liệu cũ (data migration) và chính thức đưa hệ thống vào môi trường Production."
                      ]
                    },
                    {
                      number: "5",
                      title: "Support / Maintenance (Hỗ trợ & Bảo trì)",
                      bullets: [
                        "**Monitor Performance:** Theo dõi liên tục mức độ đáp ứng của hệ thống trước tải lượng người dùng thực tế.",
                        "**Correct & Enhance:** Khắc phục lỗi phát sinh (Bug fixes) và bổ sung các cải tiến khi nghiệp vụ thay đổi.",
                        "**Plan for Renewal:** Nhận diện thời điểm hệ thống trở nên già cỗi cần đại tu nâng cấp lớn hoặc thay thế hoàn toàn."
                      ]
                    }
                  ]
                },
                {
                  type: "highlight",
                  text: "🔄 **Nguyên lý Chu kỳ:** Giai đoạn **Support sẽ quay ngược trở lại Planning** khi phát sinh các nhu cầu nghiệp vụ mới $\\to$ SDLC mang bản chất là một **vòng đời lặp kín (cycle)** chứ không bao giờ dừng lại."
                }
              ]
            },
            {
              id: "ad1-part-4-1-studio",
              label: "b",
              title: "Studio Mô Phỏng: 5 Giai Đoạn SDLC & Khảo Sát Tính Khả Thi",
              content: [
                {
                  type: "component",
                  component: "SdlcFivePhasesInteractiveStudio"
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-4-2",
          number: "2",
          title: "4.2 Unified Process (UP) – 4 giai đoạn (Phases)",
          parts: [
            {
              id: "ad1-part-4-2-text",
              label: "a",
              title: "Khái niệm 4 Phases & Nguyên lý Iterative & Incremental",
              content: [
                {
                  type: "paragraph",
                  text: "Unified Process (**UP**) là phương pháp luận phát triển hướng đối tượng kinh điển, chia dự án thành 4 giai đoạn liên tiếp:"
                },
                {
                  type: "table",
                  headers: ["Phase (Giai đoạn)", "Nội dung & Mục tiêu trọng tâm", "Sản phẩm chuyển giao"],
                  rows: [
                    ["**Inception**\n(Khởi tạo)", "Xác định phạm vi tổng thể, mục tiêu kinh doanh, tính khả thi và Business Case ban đầu của dự án.", "Project Scope, Business Case, Use Case ban đầu."],
                    ["**Elaboration**\n(Chi tiết hóa)", "Khảo sát sâu requirements, thiết kế và **ổn định kiến trúc cốt lõi (Architecture Baseline)** nhằm triệt tiêu rủi ro kỹ thuật sớm.", "Tài liệu SRS chi tiết, Kiến trúc Baseline, Use Case Model."],
                    ["**Construction**\n(Xây dựng)", "Lập trình và kiểm thử toàn bộ các tính năng còn lại của hệ thống theo từng vòng lặp tăng dần (**incremental**).", "Các bản phát hành tính năng (Working Increments)."],
                    ["**Transition**\n(Chuyển giao)", "Triển khai hệ thống vào môi trường thực tế, đào tạo người dùng, tinh chỉnh hiệu năng và nghiệm thu bàn giao.", "Phần mềm hoàn chỉnh, Sổ tay người dùng, Go-Live."]
                  ]
                },
                {
                  type: "note",
                  text: "💡 **Nguyên lý Iteration & Increment:** Mỗi phase trong UP có thể trải qua **nhiều vòng lặp (iterations)**, mỗi iteration lặp lại quy trình nhỏ (Plan $\\to$ Analyze $\\to$ Design $\\to$ Build/Test) và cho ra một **phần tăng dần hoạt động được (working increment)** đã được kiểm thử kỹ càng."
                }
              ]
            },
            {
              id: "ad1-part-4-2-studio",
              label: "b",
              title: "Studio Trực Quan Hóa: 4 Giai Đoạn UP & Working Increments",
              content: [
                {
                  type: "component",
                  component: "UnifiedProcessPhasesStudio"
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-4-3",
          number: "3",
          title: "4.3 So sánh Sequential (Waterfall) vs. Iterative & Incremental (UP)",
          parts: [
            {
              id: "ad1-part-4-3",
              label: "a",
              title: "Đối chiếu cơ chế triển khai: Tuyến tính một lần vs Vòng lặp tăng dần",
              content: [
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Waterfall (Traditional Sequential - Tuyến tính)",
                      bullets: [
                        "Tiến hành theo chuỗi: `Plan ➔ Analyze ➔ Design ➔ Build ➔ Test`.",
                        "Chỉ thực hiện **một lần duy nhất (one pass)** theo trình tự nghiêm ngặt; mỗi phase phải hoàn thành xong 100% mới chuyển sang phase kế tiếp."
                      ]
                    },
                    {
                      number: "2",
                      title: "Unified Process (Iterative & Incremental - Lặp & Tăng dần)",
                      bullets: [
                        "Tiến hành theo chuỗi các vòng lặp: `Iteration 1 (Plan->Analyze->Design->Build/Test) ➔ Iteration 2 (...) ➔ Iteration 3 (...)`.",
                        "Mỗi iteration lặp lại toàn bộ các phase ở quy mô nhỏ hơn, tạo ra **phần tăng dần hoạt động được (working increment)**, hoàn thiện dần qua từng vòng lặp."
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-4-4",
          number: "4",
          title: "4.4 Bảng so sánh Traditional SDLC vs. Unified Process & Checkpoint Quiz",
          parts: [
            {
              id: "ad1-part-4-4-table",
              label: "a",
              title: "Bảng đối chiếu 4 khía cạnh: Cấu trúc, Rủi ro, Deliverables và Độ phù hợp",
              content: [
                {
                  type: "table",
                  headers: ["Khía cạnh (Aspect)", "Traditional SDLC (Waterfall)", "Unified Process (UP)"],
                  rows: [
                    ["**Cấu trúc (Structure)**", "Các phase tuyến tính (Linear), hoàn thành dứt điểm 1 lần duy nhất.", "Các phase lặp lại (Iterative) theo chu kỳ nhiều vòng."],
                    ["**Xử lý rủi ro (Risk handling)**", "Rủi ro xuất hiện muộn ở giai đoạn cuối (Testing), khó khắc phục.", "Rủi ro kỹ thuật được xử lý sớm ngay từ các Iteration đầu (Elaboration)."],
                    ["**Sản phẩm bàn giao (Deliverables)**", "Chỉ nhận được toàn bộ hệ thống hoàn chỉnh ở cuối dự án.", "Nhận được phần mềm tăng dần (Working Increment) sau mỗi vòng lặp."],
                    ["**Phù hợp nhất với (Best fit)**", "Requirements ổn định, phạm vi cố định, đã hiểu rất rõ từ đầu.", "Requirements phức tạp, quy mô lớn hoặc có sự biến động liên tục."]
                  ]
                }
              ]
            },
            {
              id: "ad1-part-4-4-studio",
              label: "b",
              title: "Studio Đấu Trường: Traditional SDLC vs Unified Process",
              content: [
                {
                  type: "component",
                  component: "TraditionalVsUpBattleArena"
                }
              ]
            },
            {
              id: "ad1-part-4-4-quiz",
              label: "c",
              title: "Checkpoint Quiz: Kiểm tra củng cố kiến thức Mục IV",
              content: [
                {
                  type: "quiz",
                  quizId: "ad-ch1-sec4-quiz",
                  title: "Mini Checkpoint Quiz: Các giai đoạn xây dựng hệ thống",
                  description: "Kiểm tra 4 câu hỏi trắc nghiệm nhanh củng cố toàn diện kiến thức Mục IV.",
                  questions: [
                    {
                      id: "ad-c4-q1",
                      question: "Trong giai đoạn Planning của SDLC, nghiên cứu tính khả thi (Feasibility Study) đánh giá 3 khía cạnh nào?",
                      options: [
                        "Kỹ thuật, kinh tế, vận hành.",
                        "Giao diện, màu sắc, phông chữ.",
                        "Phần cứng, bảo hành, giá bán.",
                        "Nhân sự, tuyển dụng, mức lương."
                      ],
                      answer: 0,
                      explanation: "Feasibility Study trong Planning đánh giá 3 khía cạnh sống còn: Technical (Khả thi kỹ thuật), Economic (Khả thi kinh tế / ROI) và Operational (Khả thi vận hành)."
                    },
                    {
                      id: "ad-c4-q2",
                      question: "Trong Unified Process (UP), giai đoạn nào tập trung tinh chỉnh requirements và ổn định kiến trúc?",
                      options: [
                        "Giai đoạn Inception khởi tạo.",
                        "Giai đoạn Elaboration chi tiết.",
                        "Giai đoạn Construction xây dựng.",
                        "Giai đoạn Transition bàn giao."
                      ],
                      answer: 1,
                      explanation: "Elaboration là giai đoạn then chốt của UP, tập trung chi tiết hóa requirements và xây dựng kiến trúc nền tảng (Architecture Baseline) để loại bỏ rủi ro kỹ thuật."
                    },
                    {
                      id: "ad-c4-q3",
                      question: "Điểm khác biệt mấu chốt về quản trị rủi ro giữa Traditional SDLC (Waterfall) và Unified Process là:",
                      options: [
                        "Waterfall xử lý rủi ro từ sớm.",
                        "UP xử lý rủi ro sớm qua các lặp.",
                        "Cả hai đều bỏ qua khâu rủi ro.",
                        "Waterfall không có giai đoạn test."
                      ],
                      answer: 1,
                      explanation: "Trong Unified Process, rủi ro kiến trúc được bóc tách và giải quyết sớm ngay từ các Iteration đầu tiên của Elaboration, trong khi Waterfall rủi ro thường chỉ bộc lộ ở giai đoạn Testing cuối cùng."
                    },
                    {
                      id: "ad-c4-q4",
                      question: "Trong mô hình Unified Process, kết quả đầu ra của mỗi vòng lặp (Iteration) là:",
                      options: [
                        "Toàn bộ phần mềm đã đóng gói.",
                        "Bản working increment hoạt động.",
                        "Tài liệu văn bản mô tả sơ bộ.",
                        "Sơ đồ kiến trúc chưa có code."
                      ],
                      answer: 1,
                      explanation: "Mỗi vòng lặp (Iteration) trong UP đều cho ra một bản tăng dần hoạt động được (Working Increment) đã được lập trình và kiểm thử hoàn chỉnh."
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
       SECTION V: TỔNG KẾT TOÀN DIỆN CHƯƠNG 1 & GRAND MASTER EXAM
       ============================================================ */
    {
      id: "ad1-section-5",
      roman: "V",
      title: "Tổng kết toàn diện Chương 1 & Grand Master Exam",
      subsections: [
        {
          id: "ad1-sub-5-1",
          number: "1",
          title: "5.1 Tổng kết 3 trụ cột tri thức cốt lõi (Summary: Key Takeaways)",
          parts: [
            {
              id: "ad1-part-5-1-dashboard",
              label: "a",
              title: "Grand Summary Dashboard: 3 Trụ Cột Tri Thức Chapter 1",
              content: [
                {
                  type: "paragraph",
                  text: "Toàn bộ kiến thức của **Chapter 1: Introduction — Requirements Analysis and Design** được đúc kết thành 3 trụ cột vững chắc:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Information Systems (Hệ thống thông tin)",
                      bullets: [
                        "Là sự liên kết chặt chẽ giữa 5 thành phần: **People, Procedures, Hardware, Software, Data**.",
                        "Mục tiêu tối thượng: Biến đổi dữ liệu thô (**Data**) thành thông tin có ý nghĩa (**Information**) và tri thức hành động (**Knowledge**) phục vụ ra quyết định."
                      ]
                    },
                    {
                      number: "2",
                      title: "Business Analyst Role (Vai trò của BA)",
                      bullets: [
                        "Đóng vai trò cầu nối chiến lược (**The Bridge**) giữa **Business Stakeholders** và **Technical Development Team**.",
                        "Sử dụng thành thạo bộ công cụ 4 thành phần: **Methodology (Khung quy trình)** $\\to$ **Models (Sản phẩm UML)** $\\to$ **Techniques (Kỹ thuật thu thập)** $\\to$ **Tools (CASE tools hỗ trợ)** để định nghĩa yêu cầu chuẩn xác."
                      ]
                    },
                    {
                      number: "3",
                      title: "Building Systems (Xây dựng hệ thống)",
                      bullets: [
                        "Hệ thống vận hành qua vòng đời 5 giai đoạn: `Planning ➔ Analysis ➔ Design ➔ Implementation ➔ Support`.",
                        "Được triển khai hiện đại theo phương thức lặp và tăng dần (**Iterative & Incremental**) dưới mô hình **Unified Process (UP)** nhằm giảm thiểu tối đa rủi ro dự án."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "Chapter1MasterSummaryDashboard"
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-5-2",
          number: "2",
          title: "5.2 Bảng tra cứu & Thẻ ghi nhớ 8 thuật ngữ quan trọng (Key Terms)",
          parts: [
            {
              id: "ad1-part-5-2-terms",
              label: "a",
              title: "Thư viện 8 Thuật ngữ Vàng (Key Terminology Flashcards Hub)",
              content: [
                {
                  type: "paragraph",
                  text: "Bảng đối soát nhanh 8 khái niệm học thuật kinh điển của Chapter 1 phục vụ ôn thi:"
                },
                {
                  type: "table",
                  headers: ["Thuật ngữ (Key Term)", "Định nghĩa cốt lõi chuẩn học thuật"],
                  rows: [
                    ["**Information System**", "Tập hợp con người, quy trình, phần cứng, phần mềm và dữ liệu cùng phối hợp để thu thập, xử lý, lưu trữ và cung cấp thông tin."],
                    ["**Business Analyst (BA)**", "Người điều tra nhu cầu kinh doanh, xác định cơ hội cải tiến và làm cầu nối chuyển đổi yêu cầu giữa Business và Technical."],
                    ["**Methodology**", "Cách tiếp cận có cấu trúc từng bước (phases, activities, deliverables) hướng dẫn lộ trình triển khai dự án."],
                    ["**Model**", "Bản biểu diễn đơn giản hóa (simplified representation) của một đối tượng, quy trình hoặc hệ thống thực tế."],
                    ["**UML**", "Unified Modeling Language — Ngôn ngữ mô hình hóa và ký hiệu chuẩn quốc tế cho các hệ thống hướng đối tượng."],
                    ["**SDLC**", "Systems Development Life Cycle — Vòng đời phát triển hệ thống 5 giai đoạn: Planning, Analysis, Design, Implementation, Support."],
                    ["**Unified Process (UP)**", "Phương pháp luận phát triển lặp tăng dần, hướng Use Case và kiến trúc, gồm 4 phase: Inception, Elaboration, Construction, Transition."],
                    ["**Iteration**", "Một chu kỳ phát triển lặp lại hoàn chỉnh ở quy mô nhỏ, tạo ra một bản tăng dần hoạt động được (Working Increment)."]
                  ]
                },
                {
                  type: "component",
                  component: "KeyTermsInteractiveHub"
                }
              ]
            }
          ]
        },
        {
          id: "ad1-sub-5-3",
          number: "3",
          title: "5.3 Lưu ý trọng tâm khi ôn thi & Grand Master Exam 10 Câu",
          parts: [
            {
              id: "ad1-part-5-3-notes",
              label: "a",
              title: "Lưu ý chiến lược khi làm bài thi & Bản đồ cầu nối các chương sau",
              content: [
                {
                  type: "component",
                  component: "Chapter1RoadmapBridgeCard"
                }
              ]
            },
            {
              id: "ad1-part-5-3-exam",
              label: "b",
              title: "Grand Master Exam: Đề Kiểm Tra Tổng Hợp Toàn Diện Chương 1 (10 Câu)",
              content: [
                {
                  type: "quiz",
                  quizId: "ad-ch1-grand-master-exam",
                  title: "Grand Master Exam: Tổng kết Chapter 1 (Requirements Analysis & Design)",
                  description: "Đề thi tổng lực 10 câu hỏi bao quát toàn diện từ Mục I đến Mục IV, có tính thời gian và giải thích chi tiết cặn kẽ.",
                  questions: [
                    {
                      id: "ad-c1-gm-01",
                      question: "Tập hợp các thành phần con người, quy trình, phần cứng, phần mềm và dữ liệu cùng phối hợp là:",
                      options: [
                        "Information System hoàn chỉnh.",
                        "Hệ điều hành máy chủ mạng LAN.",
                        "Khung lập trình giao diện Web.",
                        "Trình quản trị cơ sở dữ liệu."
                      ],
                      answer: 0,
                      explanation: "Information System (Hệ thống thông tin) được định nghĩa là tập hợp 5 thành phần liên kết: People, Procedures, Hardware, Software và Data cùng làm việc để tạo ra thông tin hữu ích."
                    },
                    {
                      id: "ad-c1-gm-02",
                      question: "Chuỗi chuyển hóa giá trị dữ liệu trong hệ thống thông tin theo đúng thứ tự logic là:",
                      options: [
                        "Data sang Information sang Knowledge.",
                        "Knowledge sang Data sang Information.",
                        "Information sang Data sang Knowledge.",
                        "Data sang Knowledge sang Information."
                      ],
                      answer: 0,
                      explanation: "Chuỗi giá trị chuyển hóa chuẩn mực: Data (Dữ liệu thô) -> Information (Thông tin có ngữ cảnh) -> Knowledge (Tri thức thấu hiểu để ra quyết định)."
                    },
                    {
                      id: "ad-c1-gm-03",
                      question: "Hệ thống thông tin hỗ trợ cho việc ra quyết định chiến thuật của quản lý cấp trung là:",
                      options: [
                        "Management Information Systems (MIS).",
                        "Executive Support Systems cấp cao ESS.",
                        "Transaction Processing Systems TPS.",
                        "Human Resource Management System HR."
                      ],
                      answer: 0,
                      explanation: "MIS (Management Information Systems) và DSS (Decision Support Systems) phục vụ cấp quản lý cấp trung đưa ra các quyết định chiến thuật trung hạn."
                    },
                    {
                      id: "ad-c1-gm-04",
                      question: "Vai trò 'The BA as a Bridge' thể hiện vị trí cầu nối chuyển giao giữa hai đối tượng nào?",
                      options: [
                        "Business Stakeholders và Tech Team.",
                        "Giám đốc điều hành và Cổ đông ngoài.",
                        "Nhân viên bán hàng và Khách hàng mua.",
                        "Lập trình viên Backend và Frontend."
                      ],
                      answer: 0,
                      explanation: "BA đóng vai trò cầu nối phiên dịch giữa Business Stakeholders (người hiểu bài toán nghiệp vụ) và Technical Development Team (đội ngũ xây dựng giải pháp kỹ thuật)."
                    },
                    {
                      id: "ad-c1-gm-05",
                      question: "Trong vòng đời dự án SDLC, Business Analyst tham gia với cường độ cao nhất ở những pha nào?",
                      options: [
                        "Planning và Analysis yêu cầu.",
                        "Design và Construction viết code.",
                        "Testing và Triển khai hệ thống.",
                        "Bảo trì và Nâng cấp định kỳ."
                      ],
                      answer: 0,
                      explanation: "BA đóng góp mật độ cao nhất (100%) tại giai đoạn Planning và Analysis để thu thập, phân tích và tài liệu hóa đặc tả yêu cầu SRS."
                    },
                    {
                      id: "ad-c1-gm-06",
                      question: "Phương pháp luận nào phù hợp nhất khi dự án có yêu cầu biến động liên tục và cần ra mắt nhanh?",
                      options: [
                        "Phương pháp luận Agile và Scrum.",
                        "Structured Waterfall tuyến tính.",
                        "Unified Process lặp quy mô lớn.",
                        "Mô hình thác nước truyền thống."
                      ],
                      answer: 0,
                      explanation: "Agile/Scrum được thiết kế tối ưu cho các dự án có yêu cầu thay đổi liên tục, làm việc theo các chu kỳ ngắn (Sprints) để đưa sản phẩm ra thị trường nhanh."
                    },
                    {
                      id: "ad-c1-gm-07",
                      question: "Biểu đồ nào sau đây thuộc nhóm Mô hình Hành vi động (Behavioral Models) trong UML?",
                      options: [
                        "Sequence Diagram tương tác thời gian.",
                        "Class Diagram sơ đồ lớp cấu trúc.",
                        "Component Diagram kiến trúc vật lý.",
                        "Deployment Diagram triển khai server."
                      ],
                      answer: 0,
                      explanation: "Sequence Diagram là Behavioral Model, thể hiện các đối tượng tương tác và truyền thông điệp theo trình tự thời gian."
                    },
                    {
                      id: "ad-c1-gm-08",
                      question: "Kỹ thuật nào giúp thu thập yêu cầu nhanh chóng và giải quyết xung đột giữa nhiều phòng ban?",
                      options: [
                        "Joint Application Design (JAD).",
                        "Phỏng vấn riêng lẻ từng người.",
                        "Quan sát thực địa không lời nói.",
                        "Đọc tài liệu hóa đơn biểu mẫu."
                      ],
                      answer: 0,
                      explanation: "JAD Sessions (Joint Application Design) là buổi hội thảo đồng thiết kế quy tụ nhiều bên liên quan để cùng thảo luận và đạt sự đồng thuận nhanh chóng."
                    },
                    {
                      id: "ad-c1-gm-09",
                      question: "Trong 4 giai đoạn của Unified Process (UP), giai đoạn nào tập trung xây dựng phần mềm tăng dần?",
                      options: [
                        "Giai đoạn Construction xây dựng.",
                        "Giai đoạn Inception khởi tạo đầu.",
                        "Giai đoạn Elaboration kiến trúc.",
                        "Giai đoạn Transition bàn giao sp."
                      ],
                      answer: 0,
                      explanation: "Giai đoạn Construction trong Unified Process tập trung lập trình, kiểm thử và xây dựng các tính năng phần mềm theo cách tăng dần (incremental)."
                    },
                    {
                      id: "ad-c1-gm-10",
                      question: "Nhận định nào sau đây là ĐÚNG về vai trò của công cụ phần mềm (CASE Tools) đối với BA?",
                      options: [
                        "Tools hỗ trợ vẽ và quản lý models.",
                        "Tools thay thế được tư duy phân tích.",
                        "Tools tự động làm việc không cần BA.",
                        "Tools quyết định toàn bộ nghiệp vụ."
                      ],
                      answer: 0,
                      explanation: "CASE Tools chỉ là công cụ phần mềm hỗ trợ vẽ, lưu trữ và quản lý các mô hình; công cụ tuyệt đối không thể thay thế được tư duy phân tích và giải quyết vấn đề của con người."
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
