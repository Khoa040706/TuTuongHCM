/* ============================================================
   DỮ LIỆU HỌC TẬP CHUẨN MỰC: MÔN PHÂN TÍCH THIẾT KẾ YÊU CẦU
   CHAPTER 3: INITIATION PHASE: FROM BUSINESS EVENTS TO A SYSTEM USE CASE MODEL
   PHẦN 1: MỤC I (INITIATION PHASE) & MỤC II (SYSTEM USE CASES)
   ============================================================ */

export const adCh3Data = {
  id: "ad-ch3",
  title: "Chapter 3: Initiation Phase: From Business Events to a System Use Case Model",
  subtitle: "Khám phá quy trình giai đoạn Inception trong Unified Process, Kỹ thuật phân rã sự kiện nghiệp vụ (Event Decomposition), Xác định ranh giới phạm vi hệ thống (System Boundary), Xây dựng mô hình Use Case UML chuẩn mực và Soạn thảo đặc tả ca sử dụng (Brief & Fully Dressed Descriptions).",
  sections: [
    /* ============================================================
       SECTION 0: OVERVIEW HERO BANNER
       ============================================================ */
    {
      id: "ad3-section-0",
      roman: "★",
      title: "TỔNG QUAN CHAPTER 3: INITIATION PHASE TO SYSTEM USE CASE MODEL",
      subsections: [
        {
          id: "ad3-sub-0",
          number: "0",
          title: "Executive Overview & 6 Trụ Cột Tri Thức Chapter 3",
          parts: [
            {
              id: "ad3-part-0-banner",
              label: "a",
              title: "Interactive Architecture & Knowledge Radar Studio",
              content: [
                {
                  type: "component",
                  component: "AdChapter3HeroBanner"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION I: INITIATION (INCEPTION) PHASE
       ============================================================ */
    {
      id: "ad3-section-1",
      roman: "I",
      title: "Initiation (Inception) Phase",
      subsections: [
        /* --------------------------------------------------------
           1.1. Initiation Phase nằm ở đâu?
           -------------------------------------------------------- */
        {
          id: "ad3-sub-1-1",
          number: "1",
          title: "1.1 Initiation Phase nằm ở đâu trong Unified Process?",
          parts: [
            {
              id: "ad3-part-1-1-a",
              label: "a",
              title: "Vị trí của Initiation / Inception Phase trong 4 giai đoạn Unified Process",
              content: [
                {
                  type: "paragraph",
                  text: "Trong quy trình phát triển phần mềm chuẩn công nghiệp **Unified Process (UP)**, toàn bộ vòng đời của một dự án được phân chia thành **4 giai đoạn (Phases)** tuần tự có kiểm soát chất lượng qua từng mốc kiểm tra (Milestones):"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Inception / Initiation (Khởi tạo & Khám phá ban đầu)",
                      bullets: [
                        "Là giai đoạn khởi đầu sống còn của dự án phần mềm.",
                        "Trọng tâm của Business Analyst: Khám phá **Business Events** (sự kiện nghiệp vụ), nhận diện **Actors** (các vai trò tương tác) và định hình **System Use Cases** (chức năng hệ thống).",
                        "Xác lập nền móng vững chắc cho tất cả các giai đoạn kế tiếp."
                      ]
                    },
                    {
                      number: "2",
                      title: "Elaboration (Kiến trúc & Đặc tả chi tiết)",
                      bullets: [
                        "Xây dựng kiến trúc nền tảng thực thi (Executable Architecture Baseline).",
                        "Chi tiết hóa phần lớn các Use Case có độ rủi ro cao từ Inception."
                      ]
                    },
                    {
                      number: "3",
                      title: "Construction (Xây dựng & Lập trình mã nguồn)",
                      bullets: [
                        "Lập trình hoàn thiện hệ thống qua các vòng lặp (Iterations) tăng trưởng.",
                        "Tập trung viết code, cấu hình cơ sở dữ liệu và kiểm thử tích hợp."
                      ]
                    },
                    {
                      number: "4",
                      title: "Transition (Chuyển giao & Bàn giao vận hành)",
                      bullets: [
                        "Triển khai sản phẩm vào môi trường người dùng cuối (UAT, Beta test).",
                        "Đào tạo vận hành, chuyển đổi dữ liệu và nghiệm thu bàn giao."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "UpPhasesPipelineVisualizer"
                },
                {
                  type: "highlight",
                  text: "Vai trò then chốt: Initiation Phase KHÔNG PHẢI là giai đoạn thiết kế chi tiết hay viết code, mà là giai đoạn trả lời câu hỏi chiến lược: 'Dự án này có khả thi không, giải quyết bài toán gì và biên giới phạm vi (Scope) dừng ở đâu?'"
                }
              ]
            },
            {
              id: "ad3-part-1-1-b",
              label: "b",
              title: "Sản phẩm bàn giao cốt lõi (Key Output) của Initiation Phase",
              content: [
                {
                  type: "definition",
                  term: "Sản phẩm đầu ra cốt lõi: Validated System Use Case Model",
                  definition: "Mô hình Ca sử dụng hệ thống đã được thẩm định (Validated System Use Case Model) là tập hợp hoàn chỉnh gồm Sơ đồ ca sử dụng (Use Case Diagrams) và các bản đặc tả ca sử dụng (Use Case Descriptions) đã được Stakeholders phê duyệt chính thức."
                },
                {
                  type: "bullets",
                  items: [
                    "**Use Case Diagram:** Sơ đồ trực quan hóa ranh giới hệ thống, các tác nhân ngoài và danh sách chức năng hệ thống cung cấp.",
                    "**Use Case Descriptions:** Các bản mô tả kịch bản tương tác (chủ yếu ở mức Brief Description trong Inception).",
                    "**Mục đích cốt lõi:** Xác định ranh giới phạm vi (Scope) không thể chối cãi của hệ thống phần mềm.",
                    "**Bàn đạp chuyển giao:** Cung cấp cơ sở dữ liệu chuẩn xác để toàn đội dự án tự tin bước sang giai đoạn **Elaboration**."
                  ]
                },
                {
                  type: "key-point",
                  text: "Nếu không có Validated System Use Case Model từ Inception, giai đoạn Elaboration sẽ rơi vào hỗn loạn vì không ai biết chắc hệ thống cần làm những gì!"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           1.2. Learning Objectives (Mục tiêu học tập)
           -------------------------------------------------------- */
        {
          id: "ad3-sub-1-2",
          number: "2",
          title: "1.2 Mục tiêu học tập & Chuẩn đầu ra năng lực (Learning Objectives)",
          parts: [
            {
              id: "ad3-part-1-2-a",
              label: "a",
              title: "7 Chuẩn đầu ra năng lực của Kỹ sư Phân tích yêu cầu",
              content: [
                {
                  type: "paragraph",
                  text: "Sau khi hoàn thành chương học này, sinh viên và kỹ sư phân tích nghiệp vụ (BA) bắt buộc phải làm chủ **7 nhóm năng lực thực chiến** sau:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Thấu hiểu mục đích của Initiation / Inception Phase",
                      bullets: [
                        "Giải thích rõ ràng vì sao phải khám phá và xác định phạm vi **System Use Cases TRƯỚC KHI tiến hành thiết kế** kiến trúc và giao diện."
                      ]
                    },
                    {
                      number: "2",
                      title: "Làm chủ kỹ thuật Phân rã sự kiện (Event Decomposition)",
                      bullets: [
                        "Đi qua quy trình nghiệp vụ để bóc tách triệt để mọi sự kiện cần phản hồi."
                      ]
                    },
                    {
                      number: "3",
                      title: "Phân loại chuẩn xác 3 loại Business Event",
                      bullets: [
                        "**External Event:** Sự kiện kích hoạt từ tác nhân con người hoặc hệ thống bên ngoài.",
                        "**Temporal Event:** Sự kiện thời gian phát sinh tự động theo lịch định kỳ.",
                        "**State Event:** Sự kiện thay đổi trạng thái hoặc kích hoạt khi vượt ngưỡng nội bộ."
                      ]
                    },
                    {
                      number: "4",
                      title: "Nhận diện đúng 4 loại Actor trong hệ thống",
                      bullets: [
                        "**Primary Business Actor:** Người thụ hưởng giá trị nghiệp vụ thực tế.",
                        "**Primary System Actor:** Người trực tiếp thao tác bấm máy trên hệ thống phần mềm.",
                        "**External Server Actor:** Hệ thống bên ngoài cung cấp dịch vụ hạ tầng (Payment Gateway, SMS).",
                        "**External Receiver Actor:** Đối tượng/hệ thống chỉ nhận thụ động thông báo từ hệ thống."
                      ]
                    },
                    {
                      number: "5",
                      title: "Làm chủ quy tắc ánh xạ vàng One-Event-to-One-Use-Case (1:1)",
                      bullets: [
                        "Từ mỗi Business Event suy ra đúng một System Use Case đại diện cho phản hồi của hệ thống."
                      ]
                    },
                    {
                      number: "6",
                      title: "Tổ chức mô hình Use Case bằng các quan hệ UML chuẩn mực",
                      bullets: [
                        "Quan hệ bắt buộc dùng chung: `<<include>>`.",
                        "Quan hệ mở rộng có điều kiện tại Extension Point: `<<extend>>`.",
                        "Quan hệ chuyên biệt hóa và kế thừa: **Generalization**."
                      ]
                    },
                    {
                      number: "7",
                      title: "Soạn thảo tài liệu đặc tả Use Case theo 2 cấp độ chi tiết",
                      bullets: [
                        "Viết **Brief Description** ngắn gọn dùng trong Inception.",
                        "Viết **Fully Dressed Description** biểu mẫu đầy đủ (Happy path 5-7 bước + Alternate flows) dùng cho Design & Testing."
                      ]
                    }
                  ]
                },
                {
                  type: "conclusion",
                  title: "Thông điệp cốt lõi",
                  text: "Kỹ nghệ yêu cầu hiện đại không bắt đầu từ giao diện hay bảng cơ sở dữ liệu; nó bắt đầu từ Sự kiện nghiệp vụ (Business Events) để dẫn dắt Ca sử dụng (Use Cases)!"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           1.3. Các hoạt động chính của Initiation Phase
           -------------------------------------------------------- */
        {
          id: "ad3-sub-1-3",
          number: "3",
          title: "1.3 Sáu hoạt động chính của giai đoạn Initiation Phase",
          parts: [
            {
              id: "ad3-part-1-3-a",
              label: "a",
              title: "Tiến trình 6 bước từ Sự kiện nghiệp vụ đến Mô hình Use Case hoàn chỉnh",
              content: [
                {
                  type: "paragraph",
                  text: "Trong suốt giai đoạn Initiation, nhóm phân tích nghiệp vụ (BA Team) cùng các bên liên quan sẽ tiến hành tuần tự **6 hoạt động kỹ thuật cốt lõi** sau đây:"
                },
                {
                  type: "component",
                  component: "InitiationActivitiesStepper"
                },
                {
                  type: "highlight",
                  text: "Điểm chốt thi cử: Hoạt động thứ 6 (Validate with stakeholders) bắt buộc phải thực hiện cùng với cả người dùng (Users) và nhà tài trợ (Sponsors) để ký duyệt ranh giới Scope trước khi được phép chuyển sang Elaboration."
                }
              ]
            },
            {
              id: "ad3-part-1-3-b",
              label: "b",
              title: "Kiểm tra phản xạ trắc nghiệm Mục I: Initiation Phase",
              content: [
                {
                  type: "component",
                  component: "AdMicroQuizCard",
                  props: {
                    quizId: "ad3-q1",
                    badge: "Micro-Quiz #1: Initiation Phase",
                    question: "Trong quy trình Unified Process (UP), phát biểu nào sau đây mô tả CHÍNH XÁC NHẤT về mục đích và quy tắc cốt lõi của giai đoạn Initiation (Inception) Phase?",
                    options: [
                      "Analyst thiết kế chi tiết kiến trúc cơ sở dữ liệu và viết toàn bộ code giao diện mẫu.",
                      "Khám phá Business Events để suy ra System Use Cases theo quy tắc 1:1 nhằm xác định Scope.",
                      "Chỉ tập trung kiểm thử chấp nhận người dùng (UAT) và chuyển đổi dữ liệu từ hệ thống cũ.",
                      "Vẽ chi tiết tất cả các biểu đồ tuần tự (Sequence Diagram) và biểu đồ lớp (Class Diagram)."
                    ],
                    correctIndex: 1,
                    explanation: "Giai đoạn Inception tập trung khám phá các sự kiện nghiệp vụ (Business Events), nhận diện tác nhân (Actors) và ánh xạ 1:1 sang các System Use Cases để xây dựng Validated System Use Case Model, từ đó xác định phạm vi (Scope) của hệ thống trước khi sang Elaboration.",
                    citation: "Giáo trình Phân tích thiết kế yêu cầu — Chapter 3: Section 1.1 & 1.3"
                  }
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION II: SYSTEM USE CASES
       ============================================================ */
    {
      id: "ad3-section-2",
      roman: "II",
      title: "System Use Cases",
      subsections: [
        /* --------------------------------------------------------
           2.1. Use Case là gì?
           -------------------------------------------------------- */
        {
          id: "ad3-sub-2-1",
          number: "1",
          title: "2.1 Use Case là gì? Định nghĩa & Các đặc điểm cốt lõi",
          parts: [
            {
              id: "ad3-part-2-1-a",
              label: "a",
              title: "Khái niệm bản chất của Ca sử dụng (Use Case)",
              content: [
                {
                  type: "definition",
                  term: "Định nghĩa chuẩn về Use Case (Ca sử dụng)",
                  definition: "Use case là một chuỗi các bước (sequence of steps) xảy ra khi một tác nhân (Actor) tương tác với hệ thống (System) nhằm: (1) Hoàn thành một tác vụ nghiệp vụ hoàn chỉnh (Business Task); (2) Đạt được một mục tiêu đo lường và quan sát được (Measurable Goal)."
                },
                {
                  type: "paragraph",
                  text: "Để không bị nhầm lẫn với các bước thao tác kỹ thuật vụn vặt, một System Use Case chuẩn mực phải thỏa mãn **4 đặc điểm cốt lõi** sau:"
                },
                {
                  type: "bullets",
                  items: [
                    "**External / User-Goal Level:** Đại diện cho một nhiệm vụ ở cấp độ mục tiêu người dùng, mang lại giá trị thiết thực (ví dụ: 'Đăng ký môn học', chứ không phải 'Nhập mã sinh viên').",
                    "**Trigger = Event:** Luôn được khởi phát bởi một sự kiện kích hoạt cụ thể (tác nhân gửi yêu cầu hoặc thời gian đến hạn).",
                    "**Complete, Observable Result:** Phải tạo ra một kết quả hoàn chỉnh, quan sát được cho tác nhân (ví dụ: Sinh viên nhận được thông báo đã có tên trong danh sách lớp).",
                    "**Quy tắc đặt tên chuẩn quốc tế:** BẮT BUỘC bắt đầu bằng **Động từ + Cụm danh từ (Verb + Noun phrase)**."
                  ]
                },
                {
                  type: "table",
                  headers: ["Tên Use Case Đúng Chuẩn", "Lỗi Thường Gặp (Sai)", "Giải Thích Lý Do"],
                  rows: [
                    ["Register for Course", "Student", "Sai: Dùng danh từ đơn thuần, đây là tên Actor chứ không phải hành vi."],
                    ["Submit Grades", "Grade Submission Form", "Sai: Đặt tên theo màn hình UI thay vì mục tiêu hành động."],
                    ["Pay Invoice", "Click Pay Button", "Sai: Thao tác bấm nút quá vụn vặt, không tạo ra business goal hoàn chỉnh."],
                    ["Close Registration", "Database Update", "Sai: Thuật ngữ kỹ thuật nội bộ CSDL, không phải mục tiêu nghiệp vụ."]
                  ]
                },
                {
                  type: "key-point",
                  text: "Ví dụ giải phẫu mẫu: Actor = Student | Use Case = Register for Course | Goal = Student được ghi danh thành công vào một lớp học phần và cập nhật sĩ số."
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           2.2. Ký hiệu UML Use Case Diagram
           -------------------------------------------------------- */
        {
          id: "ad3-sub-2-2",
          number: "2",
          title: "2.2 Ký hiệu chuẩn UML Use Case Diagram (Notations & Semantics)",
          parts: [
            {
              id: "ad3-part-2-2-a",
              label: "a",
              title: "Năm ký hiệu đồ họa nền tảng trong sơ đồ Use Case UML",
              content: [
                {
                  type: "paragraph",
                  text: "Trong chuẩn ngôn ngữ mô hình hóa thống nhất **UML (Unified Modeling Language)**, sơ đồ Use Case Diagram được cấu thành từ **5 ký hiệu hình học cơ bản** sau:"
                },
                {
                  type: "table",
                  headers: ["Ký Hiệu Hình Học", "Tên Ký Hiệu", "Ý Nghĩa Ngữ Nghĩa Chuẩn"],
                  rows: [
                    ["Stick figure (Người que)", "Actor (Tác nhân)", "Vai trò do người dùng hoặc hệ thống bên ngoài đảm nhiệm khi tương tác với phần mềm."],
                    ["Oval (Hình Elip)", "Use Case (Ca sử dụng)", "Một đơn vị hành vi riêng biệt mang lại giá trị có thể đo lường cho tác nhân."],
                    ["Rectangle (Hộp chữ nhật)", "System Boundary", "Biên giới phân định phạm vi (Scope) của hệ thống phần mềm đang xây dựng."],
                    ["Solid Line (Nét liền)", "Association", "Đường liên kết tương tác giữa một Actor với một Use Case."],
                    ["Dashed Arrow (Mũi tên nét đứt)", "Dependency <<include>> / <<extend>>", "Mối quan hệ phụ thuộc hoặc mở rộng có điều kiện giữa hai Use Case."]
                  ]
                },
                {
                  type: "component",
                  component: "UmlNotationInteractiveGuide"
                },
                {
                  type: "highlight",
                  text: "Ý nghĩa kiến trúc: Use Case Diagram cho ta biết: (1) Hệ thống bao gồm những use case nào; (2) Actor nào tương tác với use case nào; (3) Phạm vi ranh giới hệ thống ở đâu; (4) Các use case có quan hệ phụ thuộc và tái sử dụng với nhau như thế nào."
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           2.3. Ví dụ: Course Registration System
           -------------------------------------------------------- */
        {
          id: "ad3-sub-2-3",
          number: "3",
          title: "2.3 Nghiên cứu tình huống: Course Registration System (Hệ thống đăng ký môn học)",
          parts: [
            {
              id: "ad3-part-2-3-a",
              label: "a",
              title: "Phân tích 7 Use Cases và 4 Actors tương tác trong Hệ thống đăng ký môn học",
              content: [
                {
                  type: "paragraph",
                  text: "Để hiểu sâu sắc cách áp dụng mô hình Use Case vào một bài toán thực tế, hãy xem xét hệ thống kinh điển **Course Registration System** với **7 Ca sử dụng** và **4 Tác nhân** sau:"
                },
                {
                  type: "bullets",
                  items: [
                    "**7 Use Cases xuất hiện trong hệ thống:** Register for Course, Add / Drop Course, Close Registration, Assign Instructor, Generate Class Roster, Submit Grades, Maintain Course Catalog.",
                    "**Student (Sinh viên):** Tác nhân chính thực hiện đăng ký môn học (Register for Course) và thêm/hủy môn (Add / Drop Course).",
                    "**Registrar (Phòng đào tạo):** Quản trị viên đóng cổng đăng ký (Close Registration), phân công giảng viên (Assign Instructor), xuất danh sách lớp (Generate Class Roster) và quản lý danh mục môn học (Maintain Course Catalog).",
                    "**Instructor (Giảng viên):** Nhận danh sách lớp (Generate Class Roster) và nộp bảng điểm cuối kỳ (Submit Grades).",
                    "**Registration Timer (Bộ định thời hệ thống):** Tác nhân thời gian (Temporal Actor) tự động kích hoạt đóng cổng đăng ký (Close Registration) ngay khi hết hạn định kỳ."
                  ]
                },
                {
                  type: "component",
                  component: "CourseRegistrationSystemStudio"
                },
                {
                  type: "key-point",
                  text: "Lưu ý quan trọng: Tác nhân 'Registration Timer' là một ví dụ mẫu mực cho Temporal Event — không cần có con người bấm máy, hệ thống tự động kích hoạt Use Case dựa trên sự kiện thời gian!"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           2.4. Use Case Description — 2 mức độ chi tiết
           -------------------------------------------------------- */
        {
          id: "ad3-sub-2-4",
          number: "4",
          title: "2.4 Hai mức độ chi tiết của Use Case Description (Brief vs Fully Dressed)",
          parts: [
            {
              id: "ad3-part-2-4-a",
              label: "a",
              title: "So sánh Bản đặc tả tóm lược (Brief) và Bản đặc tả có cấu trúc đầy đủ (Fully Dressed)",
              content: [
                {
                  type: "paragraph",
                  text: "Mô hình Use Case Diagram chỉ là 'mục lục'; phần linh hồn và trí tuệ của yêu cầu phần mềm nằm ở tài liệu **Đặc tả Ca sử dụng (Use Case Description)** được chia làm 2 cấp độ trưởng thành:"
                },
                {
                  type: "definition",
                  term: "A. Brief Description (Bản tóm lược luồng chính)",
                  definition: "Một đoạn văn ngắn súc tích (1-2 câu) mô tả luồng thành công chính (Main Flow). Thường được viết rất sớm trong giai đoạn Inception để nhanh chóng xác định Scope, review với Stakeholders mà không tốn nhiều chi phí thời gian."
                },
                {
                  type: "definition",
                  term: "B. Fully Dressed Description (Bản đặc tả có cấu trúc đầy đủ)",
                  definition: "Mẫu mô tả có cấu trúc biểu mẫu nghiêm ngặt, các bước luồng sự kiện được đánh số tuần tự. Dùng trực tiếp cho đội thiết kế kiến trúc (Design), đội kiểm thử (Testing) và chuyển giao lập trình (Developer Hand-off)."
                },
                {
                  type: "component",
                  component: "UseCaseDescriptionDualViewer"
                },
                {
                  type: "highlight",
                  text: "Trong một tài liệu Fully Dressed, bắt buộc phải bao gồm: Precondition (tiền điều kiện), Postcondition (hậu điều kiện), Alternate flow (luồng rẽ nhánh), Exception flow (luồng lỗi), Actor, Trigger, Business rules và Related use cases."
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           2.5. Fully Dressed Use Case Template
           -------------------------------------------------------- */
        {
          id: "ad3-sub-2-5",
          number: "5",
          title: "2.5 Biểu mẫu chuẩn Fully Dressed Use Case Template (10 Trường dữ liệu)",
          parts: [
            {
              id: "ad3-part-2-5-a",
              label: "a",
              title: "Mười trường thông tin chuẩn mực của một bản đặc tả Fully Dressed",
              content: [
                {
                  type: "paragraph",
                  text: "Dưới đây là cấu trúc bảng chuẩn quốc tế được áp dụng trong kỹ nghệ phần mềm để mô tả một Fully Dressed Use Case:"
                },
                {
                  type: "table",
                  headers: ["Trường Thông Tin (Field)", "Mục Đích & Nội Dung Chi Tiết (Purpose)"],
                  rows: [
                    ["Use Case Name", "Động từ + cụm danh từ mô tả mục tiêu của ca sử dụng (Verb + noun phrase)."],
                    ["Scope", "Hệ thống hoặc phân hệ phần mềm đang được thiết kế."],
                    ["Level", "Cấp độ mục tiêu: User goal (mục tiêu người dùng), subfunction hoặc summary."],
                    ["Primary Actor", "Tác nhân chính khởi tạo và trực tiếp tương tác với use case."],
                    ["Stakeholders & Interests", "Các bên liên quan quan tâm đến kết quả của ca sử dụng và kỳ vọng của họ."],
                    ["Precondition", "Các điều kiện bắt buộc phải đúng TRƯỚC KHI use case được phép bắt đầu."],
                    ["Trigger", "Sự kiện nghiệp vụ khởi động ca sử dụng (Event trigger)."],
                    ["Main Success Scenario", "Các bước đánh số tuần tự của luồng diễn biến thành công bình thường (Normal Flow)."],
                    ["Alternate / Exception Flows", "Các biến thể rẽ nhánh và luồng xử lý tình huống lỗi ngoại lệ."],
                    ["Postcondition", "Các điều kiện bắt buộc phải đúng và trạng thái CSDL SAU KHI use case hoàn thành thành công."]
                  ]
                },
                {
                  type: "key-point",
                  text: "Cặp bài trùng quan trọng nhất: Precondition đảm bảo hệ thống an toàn trước khi chạy; Postcondition cam kết trạng thái toàn vẹn của dữ liệu sau khi hoàn tất!"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           2.6. Ví dụ Fully Dressed — "Register for Course"
           -------------------------------------------------------- */
        {
          id: "ad3-sub-2-6",
          number: "6",
          title: "2.6 Nghiên cứu kịch bản chi tiết: Use Case 'Register for Course'",
          parts: [
            {
              id: "ad3-part-2-6-a",
              label: "a",
              title: "Phân tích kịch bản 5 bước Main Success Scenario và Alternate Flow 3a",
              content: [
                {
                  type: "paragraph",
                  text: "Áp dụng biểu mẫu Fully Dressed vào ca sử dụng điển hình **Register for Course** trong hệ thống đăng ký môn học:"
                },
                {
                  type: "bullets",
                  items: [
                    "**Primary Actor:** Student (Sinh viên).",
                    "**Trigger:** Student gửi yêu cầu thêm một course section vào thời khóa biểu học kỳ.",
                    "**Preconditions:** (1) Student đã được xác thực danh tính (authenticated); (2) Student chưa vượt quá giới hạn tín chỉ (credit limit)."
                  ]
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Bước 1: Student chọn một course section",
                      bullets: ["Sinh viên tra cứu và chọn mã lớp học phần mong muốn từ danh mục."]
                    },
                    {
                      number: "2",
                      title: "Bước 2: System kiểm tra seat availability (chỗ trống)",
                      bullets: ["Hệ thống truy vấn sĩ số lớp hiện tại để đảm bảo lớp chưa vượt quá số lượng tối đa."]
                    },
                    {
                      number: "3",
                      title: "Bước 3: System kiểm tra prerequisites (môn tiên quyết)",
                      bullets: ["Hệ thống kiểm tra học bạ để bảo đảm sinh viên đã đạt điểm qua môn học tiên quyết."]
                    },
                    {
                      number: "4",
                      title: "Bước 4: System enroll student vào lớp",
                      bullets: ["Hệ thống ghi nhận bản ghi đăng ký chính thức và tăng sĩ số lớp lên 1."]
                    },
                    {
                      number: "5",
                      title: "Bước 5: System xác nhận enrollment",
                      bullets: ["Hệ thống hiển thị màn hình thông báo thành công và gửi thông tin xác nhận."]
                    }
                  ]
                },
                {
                  type: "highlight",
                  text: "Alternate Flow 3a: Prerequisite not met — Nếu tại Bước 3, hệ thống phát hiện sinh viên chưa đạt môn tiên quyết: (1) System từ chối yêu cầu đăng ký; (2) System gửi thông báo lỗi cụ thể cho Student; (3) Luồng kết thúc mà không cập nhật sĩ số."
                },
                {
                  type: "conclusion",
                  title: "Postcondition (Hậu điều kiện khi thành công)",
                  text: "Sinh viên đã được ghi danh (enrolled) chính thức vào lớp học phần; Danh sách lớp (Class Roster) và cơ sở dữ liệu học kỳ được cập nhật đồng bộ."
                },
                {
                  type: "component",
                  component: "CourseRegistrationScenarioRunner"
                }
              ]
            },
            {
              id: "ad3-part-2-6-b",
              label: "b",
              title: "Kiểm tra phản xạ trắc nghiệm Mục II: System Use Cases",
              content: [
                {
                  type: "component",
                  component: "AdMicroQuizCard",
                  props: {
                    quizId: "ad3-q2",
                    badge: "Micro-Quiz #2: System Use Cases",
                    question: "Trong kịch bản Fully Dressed của Use Case 'Register for Course', nếu sinh viên chưa hoàn thành môn học tiên quyết (Prerequisite not met) tại Bước 3, điều gì sẽ diễn ra theo chuẩn thiết kế?",
                    options: [
                      "Hệ thống tự động ghi danh sinh viên và gửi cảnh báo nợ môn sau khi kỳ học kết thúc.",
                      "Hệ thống rẽ nhánh sang Alternate Flow 3a: từ chối request, thông báo lỗi và không cập nhật Class Roster.",
                      "Hệ thống chuyển sinh viên sang danh sách chờ (Waitlist) mà không cần kiểm tra sĩ số lớp.",
                      "Hệ thống hủy toàn bộ các môn học khác mà sinh viên đã đăng ký thành công trước đó."
                    ],
                    correctIndex: 1,
                    explanation: "Khi điều kiện tiên quyết không được thỏa mãn tại Bước 3, hệ thống sẽ kích hoạt Alternate Flow 3a: từ chối yêu cầu ghi danh, gửi thông báo lỗi đến sinh viên và dừng luồng xử lý, bảo đảm hậu điều kiện (cập nhật Class Roster) không bị vi phạm.",
                    citation: "Giáo trình Phân tích thiết kế yêu cầu — Chapter 3: Section 2.6"
                  }
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION III: EVENT DECOMPOSITION
       ============================================================ */
    {
      id: "ad3-section-3",
      roman: "III",
      title: "Event Decomposition",
      subsections: [
        /* --------------------------------------------------------
           3.1. Event Decomposition là gì?
           -------------------------------------------------------- */
        {
          id: "ad3-sub-3-1",
          number: "1",
          title: "3.1 Event Decomposition là gì?",
          parts: [
            {
              id: "ad3-part-3-1-a",
              label: "a",
              title: "Bản chất kỹ thuật Event Decomposition & Lăng kính Event-Driven Thinking",
              content: [
                {
                  type: "paragraph",
                  text: "**Event Decomposition** là kỹ thuật phân tích nghiệp vụ nhằm chia nhỏ một quy trình kinh doanh tổng thể (Business Process) thành các **discrete events** (sự kiện rời rạc, độc lập) mà hệ thống bắt buộc phải nhận biết và phản hồi."
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Là một kỹ thuật (Technique), không phải biểu đồ (Diagram)",
                      bullets: [
                        "Mục tiêu cốt lõi của Event Decomposition là phát hiện các sự kiện thực tế trong đời sống để sinh ra Use Cases.",
                        "Kỹ thuật này đi trước khi bắt tay vẽ bất kỳ diagram UML nào."
                      ]
                    },
                    {
                      number: "2",
                      title: "Event-Driven Thinking (Tư duy hướng sự kiện)",
                      bullets: [
                        "Thay vì đặt câu hỏi kỹ thuật bị động: “What does the system do?” (Hệ thống làm gì?),",
                        "Chuyên viên BA luôn đặt câu hỏi chủ động từ thế giới thực: **“What happens that the system must react to?”** (Điều gì xảy ra ngoài nghiệp vụ mà hệ thống bắt buộc phải phản ứng?)."
                      ]
                    },
                    {
                      number: "3",
                      title: "Độc lập với thứ tự xảy ra (Independent of sequence)",
                      bullets: [
                        "Việc xác định và liệt kê các sự kiện **hoàn toàn không phụ thuộc vào thứ tự thời gian xảy ra**.",
                        "Trình tự thực thi trước sau giữa các bước sẽ được mô tả chi tiết sau này trong kịch bản luồng sự kiện (Use Case Flows)."
                      ]
                    },
                    {
                      number: "4",
                      title: "Ánh xạ trực tiếp sang Use Case (Feeds directly into use cases)",
                      bullets: [
                        "Mỗi Business Event là một **nguồn kích hoạt (Trigger) hợp thức cho đúng một System Use Case** hoàn chỉnh tương ứng.",
                        "Mối quan hệ ánh xạ 1:1 bảo đảm không có Use Case nào thừa thãi hay vô căn cứ."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "EventDrivenThinkingArena"
                },
                {
                  type: "highlight",
                  title: "Lời khuyên thực chiến của Senior Business Analyst",
                  text: "Phần mềm không bao giờ tự nhiên vận hành trong chân không. Mọi transaction trong CSDL hay màn hình giao diện đều là câu trả lời có mục đích cho một sự kiện nghiệp vụ cụ thể vừa xảy ra bên ngoài thế giới thực!"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           3.2. Business Event là gì?
           -------------------------------------------------------- */
        {
          id: "ad3-sub-3-2",
          number: "2",
          title: "3.2 Business Event là gì?",
          parts: [
            {
              id: "ad3-part-3-2-a",
              label: "a",
              title: "Định nghĩa Business Event & 4 đặc tính nguyên tử",
              content: [
                {
                  type: "paragraph",
                  text: "**Business Event** (Sự kiện nghiệp vụ) là một điều xảy ra tại **một thời điểm và địa điểm cụ thể** trong thế giới thực mà hệ thống đang phát triển bắt buộc phải:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Recognize — Nhận biết dấu hiệu",
                      bullets: [
                        "Hệ thống phải có cơ chế tiếp nhận tín hiệu từ bên ngoài hoặc cảm biến nội bộ.",
                        "Dấu hiệu đó được chuẩn hóa thành khái niệm **Trigger**."
                      ]
                    },
                    {
                      number: "2",
                      title: "Respond — Thực hiện phản hồi",
                      bullets: [
                        "Hệ thống phải thực hiện hành động đáp ứng nghiệp vụ cụ thể và có thể kiểm chứng.",
                        "Kết quả phản hồi đó được chuyển giao đến đối tượng thụ hưởng (Destination)."
                      ]
                    }
                  ]
                },
                {
                  type: "paragraph",
                  text: "Một Business Event hợp thức bắt buộc phải thỏa mãn đầy đủ **4 đặc tính nguyên tử** sau:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Happens Once (Xảy ra một lần dứt khoát)",
                      bullets: [
                        "Một lần xảy ra cụ thể tại một thời điểm xác định (Discrete time).",
                        "Không phải là một tiến trình liên tục kéo dài vô tận (Not a continuous process)."
                      ]
                    },
                    {
                      number: "2",
                      title: "Has an Initiator (Có chủ thể kích hoạt)",
                      bullets: [
                        "Event được gây ra bởi: Con người/Hệ thống đối tác (Actor), Mốc thời gian (Clock / Time), hoặc Sự thay đổi trạng thái (State change).",
                        "Không có sự kiện nào tự nhiên sinh ra mà không có nguồn gốc kích phát."
                      ]
                    },
                    {
                      number: "3",
                      title: "Requires a Response (Đòi hỏi phản hồi quan sát được)",
                      bullets: [
                        "Hệ thống phải làm một điều gì đó **observable** (ghi nhận dữ liệu, tính toán, gửi thông báo, in chứng từ).",
                        "Nếu sự việc xảy ra mà hệ thống không cần làm gì cả thì đó không phải là sự kiện của hệ thống."
                      ]
                    },
                    {
                      number: "4",
                      title: "Independent of Other Events (Độc lập với các sự kiện khác)",
                      bullets: [
                        "Mỗi sự kiện đứng riêng lẻ như một đơn vị hành vi hoàn chỉnh của hệ thống.",
                        "Không gom nhiều hành vi vụn vặt thành một chuỗi phụ thuộc khi phân tích sự kiện."
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           3.3. Ba loại Business Events
           -------------------------------------------------------- */
        {
          id: "ad3-sub-3-3",
          number: "3",
          title: "3.3 Ba loại Business Events",
          parts: [
            {
              id: "ad3-part-3-3-a",
              label: "a",
              title: "Phân loại chuyên sâu: External Event, Temporal Event & State Event",
              content: [
                {
                  type: "paragraph",
                  text: "Toàn bộ các sự kiện nghiệp vụ trong mọi hệ thống phần mềm đều được phân vào một trong **3 nhóm Business Events kinh điển**:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "A",
                      title: "External Event (Sự kiện ngoại vi do Actor kích hoạt)",
                      bullets: [
                        "Được kích hoạt trực tiếp bởi một **Actor bên ngoài** thực hiện hành động tác động vào hệ thống.",
                        "Ví dụ: Khách hàng đặt hàng (Customer places an order), Khách hàng yêu cầu tra cứu (Customer requests order status), Nhân viên nộp bảng chấm công (Employee submits timesheet), Nhà cung cấp giao hàng (Supplier delivers goods).",
                        "Từ khóa nhớ: `external actor → action → system responds`."
                      ]
                    },
                    {
                      number: "B",
                      title: "Temporal Event (Sự kiện thời gian do đồng hồ kích hoạt)",
                      bullets: [
                        "Được kích hoạt khi chạm đến **một thời điểm cụ thể** (Point in time), hạn chót (Deadline), hoặc chu kỳ định kỳ (Periodic time).",
                        "Ví dụ: Ngày cuối tháng tự xuất hóa đơn (Generate monthly invoices), Gửi nhắc nợ trước 5 ngày (Send payment reminder), Tự động tính lương mỗi 2 tuần (Run payroll), Chuyển đơn hàng đóng vào kho lưu trữ cuối quý (Archive closed orders).",
                        "Từ khóa nhớ: `clock / date / deadline / periodic time`."
                      ]
                    },
                    {
                      number: "C",
                      title: "State Event (Sự kiện trạng thái do ngưỡng nội bộ kích hoạt)",
                      bullets: [
                        "Được kích hoạt khi hệ thống phát hiện một **điều kiện (Condition)** hoặc **trạng thái nội bộ (Internal state)** đạt ngưỡng quy định.",
                        "Ví dụ: Lượng tồn kho tụt dưới mức đặt hàng lại (Stock level reaches reorder point), Số dư tài khoản bị âm (Account balance goes negative), Lớp học phần đủ sĩ số tối đa (Seat capacity reached), Cảm biến nhiệt độ máy vượt ngưỡng (Machine temperature exceeds limit).",
                        "Từ khóa nhớ: `internal condition / threshold / state change`."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "ThreeEventTypesDuelArena"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           3.4. Event Table (Bảng phân tích sự kiện)
           -------------------------------------------------------- */
        {
          id: "ad3-sub-3-4",
          number: "4",
          title: "3.4 Event Table (Bảng phân tích sự kiện)",
          parts: [
            {
              id: "ad3-part-3-4-a",
              label: "a",
              title: "Cấu trúc 6 cột chuẩn mực & Mạch tư duy của BA",
              content: [
                {
                  type: "paragraph",
                  text: "**Event Table** là bảng ma trận 6 cột chuẩn mực được sử dụng rộng rãi trong phân tích thiết kế phần mềm để ghi nhận và chuyển hóa các sự kiện nghiệp vụ thành Use Case Model:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Cột 1: Event (Tên sự kiện)",
                      bullets: [
                        "Tên sự kiện nghiệp vụ xảy ra ngoài thế giới thực phản ánh nhu cầu hoặc biến cố cần xử lý."
                      ]
                    },
                    {
                      number: "2",
                      title: "Cột 2: Trigger (Dấu hiệu kích hoạt)",
                      bullets: [
                        "Tín hiệu vật lý hoặc điện tử cho biết sự kiện đã bắt đầu diễn ra (bấm nút, tin nhắn, chạm mốc giờ, cảm biến báo)."
                      ]
                    },
                    {
                      number: "3",
                      title: "Cột 3: Source (Nguồn khởi tạo)",
                      bullets: [
                        "Chủ thể Actor, mốc thời gian Clock, hoặc điều kiện trạng thái gây ra sự kiện."
                      ]
                    },
                    {
                      number: "4",
                      title: "Cột 4: Use Case (Tên ca sử dụng tương ứng)",
                      bullets: [
                        "Tên System Use Case của hệ thống được kích hoạt để phản hồi sự kiện (luôn đặt dạng Động từ + Danh từ)."
                      ]
                    },
                    {
                      number: "5",
                      title: "Cột 5: Response (Phản hồi của hệ thống)",
                      bullets: [
                        "Hệ thống tạo ra dữ liệu, chứng từ hoặc thực hiện hành động cụ thể gì để đáp ứng."
                      ]
                    },
                    {
                      number: "6",
                      title: "Cột 6: Destination (Đích đến nhận phản hồi)",
                      bullets: [
                        "Ai, bộ phận nào hoặc hệ thống đối tác ngoại vi nào tiếp nhận kết quả phản hồi của hệ thống."
                      ]
                    }
                  ]
                },
                {
                  type: "highlight",
                  title: "Mạch Tư Duy Bất Biến (Cognitive Pipeline)",
                  text: "**Event ➔ Trigger ➔ Source ➔ Use Case ➔ Response ➔ Destination**"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           3.5. Ví dụ Event Table — Course Registration
           -------------------------------------------------------- */
        {
          id: "ad3-sub-3-5",
          number: "5",
          title: "3.5 Ví dụ Event Table — Course Registration System",
          parts: [
            {
              id: "ad3-part-3-5-a",
              label: "a",
              title: "Bảng phân tích sự kiện mẫu chuẩn giáo trình",
              content: [
                {
                  type: "paragraph",
                  text: "Dưới đây là Bảng phân tích sự kiện hoàn chỉnh của hệ thống Đăng ký học phần (Course Registration System) minh họa sự phối hợp nhịp nhàng giữa cả 3 loại Business Event:"
                },
                {
                  type: "component",
                  component: "InteractiveEventTableStudio"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           3.6. Các bước của kỹ thuật Event Decomposition
           -------------------------------------------------------- */
        {
          id: "ad3-sub-3-6",
          number: "6",
          title: "3.6 Các bước của kỹ thuật Event Decomposition",
          parts: [
            {
              id: "ad3-part-3-6-a",
              label: "a",
              title: "Quy trình 6 bước thực thi bài bản của Business Analyst",
              content: [
                {
                  type: "paragraph",
                  text: "Để không bỏ sót bất kỳ Use Case ngầm nào, chuyên viên phân tích nghiệp vụ thực hiện kỹ thuật phân rã sự kiện theo tiến trình 6 bước chặt chẽ:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Study the business process and its scope",
                      bullets: [
                        "Nghiên cứu kỹ lưỡng quy trình nghiệp vụ hiện tại và biên phạm vi hệ thống (System Scope)."
                      ]
                    },
                    {
                      number: "2",
                      title: "Liệt kê mọi sự kiện (Brainstorm Events)",
                      bullets: [
                        "Quét sạch 100% các External events, Temporal events và State events tiềm năng."
                      ]
                    },
                    {
                      number: "3",
                      title: "Xác định triggering source với mỗi event",
                      bullets: [
                        "Làm rõ dấu hiệu kích hoạt (Trigger) và nguồn phát sinh (Source: Actor, Time hay State)."
                      ]
                    },
                    {
                      number: "4",
                      title: "Xác định required system response",
                      bullets: [
                        "Xác định hành động phản hồi bắt buộc của phần mềm và đối tượng tiếp nhận (Destination)."
                      ]
                    },
                    {
                      number: "5",
                      title: "Ghi toàn bộ vào Event Table",
                      bullets: [
                        "Tổng hợp đầy đủ vào 6 cột chuẩn và ánh xạ trực tiếp sang các System Use Cases."
                      ]
                    },
                    {
                      number: "6",
                      title: "Review Event Table với Stakeholders",
                      bullets: [
                        "Họp thẩm định cùng người dùng và chuyên gia nghiệp vụ để kiểm tra tính đầy đủ (Completeness)."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "EventDecompositionPipelineStepper"
                }
              ]
            },
            {
              id: "ad3-part-3-6-b",
              label: "b",
              title: "Kiểm tra phản xạ trắc nghiệm Mục III: Event Decomposition",
              content: [
                {
                  type: "component",
                  component: "AdMicroQuizCard",
                  props: {
                    quizId: "ad3-q3",
                    badge: "Micro-Quiz #3: Event Decomposition",
                    question: "Trong hệ thống Đăng ký học phần, sự kiện 'Đúng 24h00 ngày 15/09 hệ thống tự động khóa cổng đăng ký và chạy phân bổ lớp' thuộc loại Business Event nào?",
                    options: [
                      "External Event — do nhân viên quản trị kích hoạt qua giao diện.",
                      "Temporal Event — do đồng hồ hệ thống chạm mốc thời gian quy định.",
                      "State Event — do số lượng sinh viên nộp đơn đạt ngưỡng tối đa.",
                      "System Exception — do lỗi cơ sở dữ liệu ngưng trệ đường truyền."
                    ],
                    correctIndex: 1,
                    explanation: "Sự kiện này kích hoạt dựa trên mốc thời điểm cụ thể (Point in Time / Deadline: 24h00 ngày 15/09) được theo dõi bởi đồng hồ hệ thống (System Clock), không cần con người bấm nút trực tiếp, do đó chính xác là Temporal Event.",
                    citation: "Giáo trình Phân tích thiết kế yêu cầu — Chapter 3: Section 3.3 (Temporal Events)"
                  }
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION IV: IDENTIFY ACTORS
       ============================================================ */
    {
      id: "ad3-section-4",
      roman: "IV",
      title: "Identify Actors",
      subsections: [
        /* --------------------------------------------------------
           4.1. Actor là gì?
           -------------------------------------------------------- */
        {
          id: "ad3-sub-4-1",
          number: "1",
          title: "4.1 Actor là gì?",
          parts: [
            {
              id: "ad3-part-4-1-a",
              label: "a",
              title: "Định nghĩa Actor & 3 nguyên tắc vàng về bản chất Role",
              content: [
                {
                  type: "paragraph",
                  text: "**Actor** trong mô hình Use Case là một **vai trò (Role)** được đảm nhiệm bởi: Con người (**Person**), Tổ chức (**Organization**), Thiết bị phần cứng (**Device**), hoặc Hệ thống phần mềm ngoại vi (**External System**), có tương tác trực tiếp qua biên ranh giới (System Boundary) của hệ thống đang thiết kế."
                },
                {
                  type: "paragraph",
                  text: "Trong một kịch bản tương tác, một Actor có thể thực hiện hai vai trò năng động:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Initiate use case (Khởi tạo tương tác)",
                      bullets: [
                        "Actor đóng vai trò chủ động gửi tín hiệu kích hoạt yêu cầu hệ thống phục vụ."
                      ]
                    },
                    {
                      number: "2",
                      title: "Receive kết quả từ use case (Tiếp nhận kết quả)",
                      bullets: [
                        "Actor tiếp nhận các chứng từ, báo cáo, thông báo hoặc lợi ích nghiệp vụ trả về."
                      ]
                    }
                  ]
                },
                {
                  type: "paragraph",
                  text: "Bốn nguyên tắc sống còn khi định danh Actor:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Actor là Role, KHÔNG PHẢI người cụ thể",
                      bullets: [
                        "Đúng chuẩn: Đặt tên vai trò như `Customer`, `Student`, `Registrar`.",
                        "Sai chuẩn: Tuyệt đối không đặt tên theo danh tính cá nhân cụ thể như `John Smith`, `Nguyễn Văn A`."
                      ]
                    },
                    {
                      number: "2",
                      title: "Một người có thể đóng nhiều Actor Roles ở các thời điểm khác nhau",
                      bullets: [
                        "Một giảng viên có thể đóng vai trò `Instructor` khi nộp điểm, nhưng đóng vai trò `Student` khi tham gia lớp tập huấn chuyên môn."
                      ]
                    },
                    {
                      number: "3",
                      title: "Nhiều người có thể cùng chia sẻ một Actor Role",
                      bullets: [
                        "Hàng nghìn sinh viên độc lập ngoài đời thực đều chia sẻ chung một biểu tượng vai trò duy nhất là `Student`."
                      ]
                    },
                    {
                      number: "4",
                      title: "Actor đa dạng về thể chế",
                      bullets: [
                        "Actor có thể là: Human (Con người), Organization (Tổ chức đối tác), Device (Cảm biến phần cứng), hoặc Another System (Hệ thống phần mềm khác)."
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           4.2. Four Types of Actors
           -------------------------------------------------------- */
        {
          id: "ad3-sub-4-2",
          number: "2",
          title: "4.2 Bốn loại Actor cốt lõi (Four Types of Actors)",
          parts: [
            {
              id: "ad3-part-4-2-a",
              label: "a",
              title: "Phân loại 4 nhóm Actor chuẩn quốc tế",
              content: [
                {
                  type: "paragraph",
                  text: "Để xác định đúng quyền hạn và bản chất tương tác, các chuyên gia phân loại Actor thành **4 nhóm chuẩn mực**:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Primary Business Actor (Tác nhân nghiệp vụ chính)",
                      bullets: [
                        "Người hoặc vai trò **hưởng lợi trực tiếp từ kết quả** của Use Case.",
                        "Ví dụ: Sinh viên (Student) được ghi danh thành công vào lớp học phần."
                      ]
                    },
                    {
                      number: "2",
                      title: "Primary System Actor (Tác nhân hệ thống trực tiếp)",
                      bullets: [
                        "Vai trò **trực tiếp tương tác với hệ thống** để khởi tạo sự kiện (ngồi trước màn hình gõ phím/bấm chuột).",
                        "Ví dụ: Nhân viên phòng đào tạo (Registration Clerk) nhập dữ liệu vào phần mềm giúp sinh viên."
                      ]
                    },
                    {
                      number: "3",
                      title: "External Server Actor (Hệ thống máy chủ dịch vụ ngoại vi)",
                      bullets: [
                        "Hệ thống hoặc vai trò bên ngoài **phản hồi lại yêu cầu (Request)** từ hệ thống trong lúc Use Case đang chạy.",
                        "Ví dụ: Cổng thanh toán (Payment Gateway) xác thực giao dịch học phí trực tuyến."
                      ]
                    },
                    {
                      number: "4",
                      title: "External Receiver Actor (Hệ thống tiếp nhận thông tin ngoại vi)",
                      bullets: [
                        "Nhận kết quả đầu ra (Output) từ hệ thống nhưng **không trực tiếp gửi yêu cầu** đòi hỏi output đó.",
                        "Ví dụ: Hệ thống kế toán (Accounting System) tự động nhận biên lai ghi nợ học phí từ hệ thống đào tạo."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "FourActorTypesRadarStudio"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           4.3. Guidelines for Identifying Actors
           -------------------------------------------------------- */
        {
          id: "ad3-sub-4-3",
          number: "3",
          title: "4.3 Hướng dẫn nhận diện Actor (Guidelines for Identifying Actors)",
          parts: [
            {
              id: "ad3-part-4-3-a",
              label: "a",
              title: "6 câu hỏi định vị chiến lược & Quy tắc tránh chia nhỏ vai trò (Avoid Over-splitting)",
              content: [
                {
                  type: "paragraph",
                  text: "Nhận diện Actor không phải là sự phỏng đoán cảm tính. Business Analyst tuân thủ bộ chỉ dẫn gồm **6 câu hỏi chiến lược** sau:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Who triggers each event?",
                      bullets: [
                        "Xem từng dòng Event Table: Ai hoặc cái gì khởi tạo sự kiện?"
                      ]
                    },
                    {
                      number: "2",
                      title: "Who needs information from the system?",
                      bullets: [
                        "Tìm các vai trò nhận: Báo cáo (Reports), Biên nhận (Confirmations), Thông báo (Notifications)."
                      ]
                    },
                    {
                      number: "3",
                      title: "Who maintains system data?",
                      bullets: [
                        "Các vai trò quản trị (Admin/Clerk) phụ trách: Tạo mới (Create), Cập nhật (Update), Lưu trữ (Archive) dữ liệu cũng chính là Actors."
                      ]
                    },
                    {
                      number: "4",
                      title: "What external systems interact with us?",
                      bullets: [
                        "Cổng xử lý thanh toán (Payment processors), Hệ thống đối tác (Partner systems), Thiết bị phần cứng (Hardware devices)."
                      ]
                    },
                    {
                      number: "5",
                      title: "Does the clock trigger anything?",
                      bullets: [
                        "Nếu có Temporal Event, xem **Time / System Clock** như tác nhân kích hoạt theo lịch trình."
                      ]
                    },
                    {
                      number: "6",
                      title: "Avoid Over-Splitting (Tránh chia nhỏ vai trò quá mức)",
                      bullets: [
                        "Không chia Actor thành quá nhiều role gần giống nhau.",
                        "Chỉ tách khi cách họ tương tác với Use Case của hệ thống **thực sự khác biệt về nghiệp vụ**!"
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "ActorIdentificationWorkbench"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           4.4. Ví dụ suy diễn Actor từ Event Table
           -------------------------------------------------------- */
        {
          id: "ad3-sub-4-4",
          number: "4",
          title: "4.4 Ví dụ suy diễn Actor từ Event Table",
          parts: [
            {
              id: "ad3-part-4-4-a",
              label: "a",
              title: "Thực hành suy diễn 5 Actor trong Case Study Course Registration",
              content: [
                {
                  type: "paragraph",
                  text: "Dưới đây là bảng ma trận suy diễn tác nhân từ 5 sự kiện thực tế trong hệ thống Đăng ký học phần minh chứng cho kỹ thuật truy nguyên nguồn gốc Actor:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Sự kiện: Student wants to register",
                      bullets: [
                        "Nguồn phát sinh (Source): `Student`",
                        "Phân loại Actor: **Primary Business Actor** (người thụ hưởng kết quả được vào lớp)."
                      ]
                    },
                    {
                      number: "2",
                      title: "Sự kiện: Registration period opens",
                      bullets: [
                        "Nguồn phát sinh (Source): `System Clock` (Mốc thời gian máy chủ)",
                        "Phân loại Actor: **Temporal Trigger Actor** (đồng hồ tự châm ngòi sự kiện)."
                      ]
                    },
                    {
                      number: "3",
                      title: "Sự kiện: Payment is submitted",
                      bullets: [
                        "Nguồn phát sinh (Source): `Payment Gateway`",
                        "Phân loại Actor: **External Server Actor** (hệ thống cổng thanh toán phản hồi xác thực)."
                      ]
                    },
                    {
                      number: "4",
                      title: "Sự kiện: Instructor submits grades",
                      bullets: [
                        "Nguồn phát sinh (Source): `Instructor`",
                        "Phân loại Actor: **Primary Business Actor** (giảng viên chủ động nộp điểm hoàn tất giảng dạy)."
                      ]
                    },
                    {
                      number: "5",
                      title: "Sự kiện: Transcript sent to Registrar",
                      bullets: [
                        "Nguồn phát sinh (Source): `Registrar` (Phòng Đào Tạo)",
                        "Phân loại Actor: **External Receiver Actor** (thụ động nhận bảng điểm lưu hồ sơ)."
                      ]
                    }
                  ]
                },
                {
                  type: "highlight",
                  title: "Nhận Định Sâu Sắc Về Mô Hình Hóa Actor",
                  text: "Actor trong UML không chỉ bó hẹp ở con người ngồi trước màn hình mà bao gồm trọn vẹn cả đồng hồ hệ thống (System Clock) và các hệ thống dịch vụ đối tác ngoại vi (External Server & Receiver)."
                }
              ]
            },
            {
              id: "ad3-part-4-4-b",
              label: "b",
              title: "Kiểm tra phản xạ trắc nghiệm Mục IV: Identify Actors",
              content: [
                {
                  type: "component",
                  component: "AdMicroQuizCard",
                  props: {
                    quizId: "ad3-q4",
                    badge: "Micro-Quiz #4: Identify Actors",
                    question: "Một sinh viên đến quầy dịch vụ một cửa của trường, nhân viên phòng đào tạo (Registration Clerk) thao tác trên máy tính để đăng ký môn học giúp sinh viên. Theo chuẩn phân loại Actor, nhận định nào sau đây là ĐÚNG?",
                    options: [
                      "Registration Clerk là Primary Business Actor, Sinh viên là Secondary Actor.",
                      "Sinh viên là Primary Business Actor, Registration Clerk là Primary System Actor.",
                      "Cả Sinh viên và Registration Clerk đều là Primary Business Actor vì cùng có mặt tại quầy.",
                      "Hệ thống máy tính là Primary Actor, Clerk và Sinh viên chỉ là External Receivers."
                    ],
                    correctIndex: 1,
                    explanation: "Sinh viên là người hưởng lợi trực tiếp từ kết quả Use Case (được ghi danh vào môn học) nên là Primary Business Actor. Registration Clerk là người trực tiếp thao tác bấm chuột/gõ bàn phím trên giao diện phần mềm để khởi tạo sự kiện nên đóng vai trò Primary System Actor.",
                    citation: "Giáo trình Phân tích thiết kế yêu cầu — Chapter 3: Section 4.2 (Four Types of Actors)"
                  }
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION V: IDENTIFY SYSTEM USE CASES
       ============================================================ */
    {
      id: "ad3-section-5",
      roman: "V",
      title: "Identify System Use Cases",
      subsections: [
        /* --------------------------------------------------------
           5.1. Quy tắc 1 Event : 1 Use Case
           -------------------------------------------------------- */
        {
          id: "ad3-sub-5-1",
          number: "1",
          title: "5.1 Quy tắc 1 Event : 1 Use Case",
          parts: [
            {
              id: "ad3-part-5-1-a",
              label: "a",
              title: "Định luật bất biến 1 Business Event ⇔ 1 System Use Case",
              content: [
                {
                  type: "paragraph",
                  text: "Trong kỹ thuật phân tích nghiệp vụ chuẩn quốc tế, mối quan hệ giữa sự kiện nghiệp vụ và ca sử dụng hệ thống được quy định bởi một định luật cốt lõi:"
                },
                {
                  type: "highlight",
                  title: "Định Luật Vàng Của Use Case Modeling",
                  text: "**“Every business event corresponds to exactly one system use case – and every system use case is triggered by exactly one event.”**\n\nTức là: **1 Business Event ⟷ 1 System Use Case** (Quan hệ tương ứng 1:1)."
                },
                {
                  type: "paragraph",
                  text: "Mục tiêu tối thượng của định luật này là xây dựng danh sách System Use Cases thỏa mãn **3 chuẩn mực vàng**:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Đầy đủ (Complete)",
                      bullets: [
                        "Mọi Business Event đã khám phá trong Event Table đều phải có đúng 1 Use Case tương ứng để hệ thống đáp ứng.",
                        "Không bỏ sót bất kỳ nhu cầu vận hành nào của doanh nghiệp."
                      ]
                    },
                    {
                      number: "2",
                      title: "Không trùng lặp (No Duplicates)",
                      bullets: [
                        "Không tạo ra nhiều Use Case thừa thãi cùng phục vụ cho một sự kiện.",
                        "Tránh lãng phí nguồn lực lập trình và giảm thiểu độ phức tạp cho kiến trúc phần mềm."
                      ]
                    },
                    {
                      number: "3",
                      title: "Bám trực tiếp vào Business Events (Grounded)",
                      bullets: [
                        "Mọi Use Case xuất hiện trên sơ đồ đều có lý do tồn tại rõ ràng từ thực tiễn.",
                        "Không tự ý bịa thêm các Use Case mang tính kỹ thuật máy móc."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "OneEventOneUseCaseStudio"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           5.2. Use Case Naming Conventions
           -------------------------------------------------------- */
        {
          id: "ad3-sub-5-2",
          number: "2",
          title: "5.2 Use Case Naming Conventions (Quy tắc đặt tên)",
          parts: [
            {
              id: "ad3-part-5-2-a",
              label: "a",
              title: "4 quy tắc vàng đặt tên Use Case chuẩn mực công nghiệp",
              content: [
                {
                  type: "paragraph",
                  text: "Tên Use Case là ngôn ngữ giao tiếp chuẩn giữa khách hàng, chuyên viên BA và đội ngũ lập trình viên. Để đảm bảo tính chuyên nghiệp, mọi Use Case phải tuân thủ nghiêm ngặt **4 quy tắc vàng**:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Verb + noun phrase (Động từ hành động + Cụm danh từ)",
                      bullets: [
                        "Bắt đầu bằng **active verb + object** phản ánh hành động dứt khoát.",
                        "Ví dụ chuẩn: `Register for Course`, `Submit Grades`, `Generate Report`.",
                        "Tránh đặt danh từ trơ trọi như `Course Registration` hay `Grade Submission`."
                      ]
                    },
                    {
                      number: "2",
                      title: "Describe the goal, not the mechanism (Mô tả mục tiêu, không mô tả thao tác UI)",
                      bullets: [
                        "Tập trung vào mục tiêu nghiệp vụ (Business Goal) mà Actor muốn đạt được.",
                        "Nên đặt: `Pay Invoice` (Mục tiêu là thanh toán hóa đơn).",
                        "Không nên đặt: `Click Submit Button` (Chỉ là thao tác bấm nút trên giao diện).",
                        "➔ Giữ cho Use Case hoàn toàn **độc lập với công nghệ (technology-independent)**."
                      ]
                    },
                    {
                      number: "3",
                      title: "Keep it short and unique (Ngắn gọn 2–4 từ & Duy nhất)",
                      bullets: [
                        "Độ dài lý tưởng thường nằm trong khoảng **2 đến 4 từ tiếng Anh**.",
                        "Tuyệt đối không để hai Use Case trong cùng hệ thống bị trùng tên."
                      ]
                    },
                    {
                      number: "4",
                      title: "Match the response, not the request (Phản ánh điều hệ thống hoàn thành)",
                      bullets: [
                        "Tên Use Case phải phản ánh **kết quả mà hệ thống hoàn thành** để phản hồi sự kiện, không chỉ là lời xin/yêu cầu ban đầu."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "UseCaseNamingConventionsTester"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           5.3. Ví dụ Event Table ➔ Use Case List
           -------------------------------------------------------- */
        {
          id: "ad3-sub-5-3",
          number: "3",
          title: "5.3 Ví dụ Event Table ➔ Use Case List",
          parts: [
            {
              id: "ad3-part-5-3-a",
              label: "a",
              title: "Bảng chuyển đổi mẫu trong Hệ thống Đăng ký học phần",
              content: [
                {
                  type: "paragraph",
                  text: "Dưới đây là bảng minh chứng trực quan cho quá trình chuyển đổi từ Event Table sang Danh mục Use Case hoàn chỉnh trong Case Study Course Registration:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Event: Student requests enrollment (External Event)",
                      bullets: [
                        "System Use Case tương ứng: **Register for Course**"
                      ]
                    },
                    {
                      number: "2",
                      title: "Event: Registration period opens (Temporal Event)",
                      bullets: [
                        "System Use Case tương ứng: **Open Registration**"
                      ]
                    },
                    {
                      number: "3",
                      title: "Event: Section reaches capacity (State Event)",
                      bullets: [
                        "System Use Case tương ứng: **Close Section / Open Waitlist**"
                      ]
                    },
                    {
                      number: "4",
                      title: "Event: Instructor submits grades (External Event)",
                      bullets: [
                        "System Use Case tương ứng: **Submit Grades**"
                      ]
                    },
                    {
                      number: "5",
                      title: "Event: End of semester arrives (Temporal Event)",
                      bullets: [
                        "System Use Case tương ứng: **Archive Semester Records**"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           5.4. Linking Actors to Use Cases
           -------------------------------------------------------- */
        {
          id: "ad3-sub-5-4",
          number: "4",
          title: "5.4 Linking Actors to Use Cases & System Boundary",
          parts: [
            {
              id: "ad3-part-5-4-a",
              label: "a",
              title: "Ranh giới hệ thống (System Boundary) & Đường liên kết (Association)",
              content: [
                {
                  type: "paragraph",
                  text: "Khi chuyển từ bảng danh sách sang mô hình đồ họa Use Case Diagram, ba nguyên tắc không gian bất biến được xác lập:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Vị trí của Actor",
                      bullets: [
                        "Actor luôn luôn nằm **bên ngoài biên giới hệ thống (outside system boundary)**.",
                        "Thể hiện rằng Actor là thực thể ngoại vi tương tác vào, không phải là đoạn mã nguồn nằm bên trong phần mềm."
                      ]
                    },
                    {
                      number: "2",
                      title: "Vị trí của Use Case",
                      bullets: [
                        "Mọi hình oval Use Case bắt buộc phải nằm **bên trong biên giới hệ thống (inside system boundary)**.",
                        "Khung hình chữ nhật System Boundary là công cụ pháp lý để xác định phạm vi dự án (Project Scope)."
                      ]
                    },
                    {
                      number: "3",
                      title: "Ý nghĩa của Association Line",
                      bullets: [
                        "Đường liên kết nét liền (Solid line) thể hiện Actor nào tham gia/tương tác với Use Case nào.",
                        "Ví dụ: `Student` ➔ `Register for Course`; `Instructor` ➔ `Submit Grades`; `System Clock` ➔ `Open Registration`; `Payment Gateway` ➔ `Process Payment`."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "SystemBoundaryActorLinkerStudio"
                }
              ]
            },
            {
              id: "ad3-part-5-4-b",
              label: "b",
              title: "Kiểm tra phản xạ trắc nghiệm Mục V: Identify System Use Cases",
              content: [
                {
                  type: "component",
                  component: "AdMicroQuizCard",
                  props: {
                    quizId: "ad3-q5",
                    badge: "Micro-Quiz #5: Identify System Use Cases",
                    question: "Theo quy tắc chuẩn đặt tên Use Case Naming Conventions, tên gọi nào sau đây là CHUẨN MỰC nhất để mô tả hành vi người dùng thanh toán đơn hàng?",
                    options: [
                      "Click Submit Payment Button — vì mô tả chính xác nút bấm trên giao diện.",
                      "Payment Processing Module — vì bao quát được toàn bộ hệ thống xử lý thanh toán.",
                      "Pay Invoice — vì bắt đầu bằng active verb và mô tả mục tiêu nghiệp vụ (Goal-driven).",
                      "Customer Sends Request For Payment — vì phản ánh lời yêu cầu ban đầu của khách hàng."
                    ],
                    correctIndex: 2,
                    explanation: "Tên Use Case chuẩn phải thỏa mãn: Active Verb + Noun ('Pay Invoice'), mô tả mục tiêu của Actor (Goal) thay vì thao tác giao diện (Mechanism như Click button), ngắn gọn (2 từ) và độc lập với công nghệ (Technology-Independent).",
                    citation: "Giáo trình Phân tích thiết kế yêu cầu — Chapter 3: Section 5.2 (Use Case Naming Conventions)"
                  }
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION VI: ORGANIZING USE CASES
       ============================================================ */
    {
      id: "ad3-section-6",
      roman: "VI",
      title: "Organizing Use Cases",
      subsections: [
        /* --------------------------------------------------------
           6.1. Vì sao phải tổ chức Use Cases?
           -------------------------------------------------------- */
        {
          id: "ad3-sub-6-1",
          number: "1",
          title: "6.1 Vì sao phải tổ chức Use Cases?",
          parts: [
            {
              id: "ad3-part-6-1-a",
              label: "a",
              title: "4 lý do chiến lược khi cấu trúc và gom nhóm Use Case",
              content: [
                {
                  type: "paragraph",
                  text: "Khi một hệ thống phần mềm mở rộng quy mô lên đến hàng chục hoặc hàng trăm Use Cases, việc tổ chức và thiết lập mối quan hệ giữa chúng là bắt buộc vì **4 mục tiêu chiến lược**:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Manage complexity (Quản lý độ phức tạp)",
                      bullets: [
                        "Hệ thống lớn có thể có hàng chục Use Cases phức tạp.",
                        "Grouping và tổ chức quan hệ giúp diagram trở nên thông thoáng, dễ đọc và dễ bảo trì."
                      ]
                    },
                    {
                      number: "2",
                      title: "Eliminate duplication (Triệt tiêu sự trùng lặp)",
                      bullets: [
                        "Các bước xử lý dùng chung được tách riêng ra thành Use Case độc lập.",
                        "Ví dụ: Hành vi `Authenticate User` được nhiều Use Case cùng gọi thông qua quan hệ `<<include>>`."
                      ]
                    },
                    {
                      number: "3",
                      title: "Model optional behavior (Mô hình hóa hành vi tùy chọn)",
                      bullets: [
                        "Các hành vi chỉ xảy ra khi có điều kiện đặc biệt được tách riêng qua quan hệ `<<extend>>`.",
                        "Giúp luồng chính của Use Case không bị rườm rà."
                      ]
                    },
                    {
                      number: "4",
                      title: "Reflect hierarchies (Phản ánh cấu trúc phân cấp)",
                      bullets: [
                        "Quan hệ `Generalization` thể hiện các Actor hoặc Use Case chuyên biệt kế thừa các đặc tính chung."
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           6.2. Quan hệ <<include>>
           -------------------------------------------------------- */
        {
          id: "ad3-sub-6-2",
          number: "2",
          title: "6.2 Quan hệ <<include>> (Bao hàm bắt buộc)",
          parts: [
            {
              id: "ad3-part-6-2-a",
              label: "a",
              title: "Khi nào dùng, ví dụ và từ khóa cốt lõi của <<include>>",
              content: [
                {
                  type: "paragraph",
                  text: "Quan hệ **<<include>>** biểu diễn hành vi bắt buộc (Mandatory) được trích xuất để dùng chung:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Khi nào dùng?",
                      bullets: [
                        "Hành vi là **Required / mandatory** (Bắt buộc phải thực hiện).",
                        "Luôn luôn được thực thi trong quá trình chạy Base Use Case.",
                        "Có thể được **reuse (tái sử dụng)** bởi nhiều Use Cases khác nhau trong hệ thống."
                      ]
                    },
                    {
                      number: "2",
                      title: "Ví dụ kinh điển trong Registration System",
                      bullets: [
                        "`Register for Course` ──<<include>>──► `Authenticate User`",
                        "`Submit Grades` ──<<include>>──► `Authenticate User`"
                      ]
                    },
                    {
                      number: "3",
                      title: "Ý nghĩa kiến trúc",
                      bullets: [
                        "`Authenticate User` là hành vi chung bắt buộc, được tách riêng để tránh trùng lặp mã nguồn và kịch bản kiểm thử."
                      ]
                    }
                  ]
                },
                {
                  type: "highlight",
                  title: "Từ Khóa Thuộc Lòng Khi Đi Thi (Mnemonic)",
                  text: "**include = always / mandatory / reusable** (Bao hàm = Luôn luôn / Bắt buộc / Tái sử dụng)"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           6.3. Quan hệ <<extend>>
           -------------------------------------------------------- */
        {
          id: "ad3-sub-6-3",
          number: "3",
          title: "6.3 Quan hệ <<extend>> (Mở rộng có điều kiện)",
          parts: [
            {
              id: "ad3-part-6-3-a",
              label: "a",
              title: "Extension Point, tính tự hoàn chỉnh của Base Use Case & Quy chuẩn mũi tên",
              content: [
                {
                  type: "paragraph",
                  text: "Quan hệ **<<extend>>** biểu diễn hành vi tùy chọn (Optional) chêm thêm vào kịch bản khi thỏa mãn điều kiện:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Khi nào dùng?",
                      bullets: [
                        "Hành vi là **Optional** (Tùy chọn, không bắt buộc).",
                        "Chỉ xảy ra khi thỏa mãn một điều kiện cụ thể (**specific condition**).",
                        "Được chêm vào tại một điểm mở rộng xác định (**extension point**)."
                      ]
                    },
                    {
                      number: "2",
                      title: "Ví dụ kinh điển trong Registration System",
                      bullets: [
                        "Base Use Case: `Register for Course`",
                        "Extension Use Case: `Add to Waitlist`",
                        "Điều kiện / Extension Point: `section at capacity` (khi lớp học phần đã đầy sĩ số)."
                      ]
                    },
                    {
                      number: "3",
                      title: "Điểm sống còn cần nhớ",
                      bullets: [
                        "Base Use Case **tự thân hoàn chỉnh** ngay cả khi extension không bao giờ chạy.",
                        "Extension là không bắt buộc.",
                        "**Bẫy mũi tên**: Mũi tên nét đứt có nhãn `<<extend>>` trỏ **NGƯỢC VỀ Base Use Case** (Ngược chiều hoàn toàn so với `<<include>>`)!"
                      ]
                    }
                  ]
                },
                {
                  type: "highlight",
                  title: "Từ Khóa Thuộc Lòng Khi Đi Thi (Mnemonic)",
                  text: "**extend = optional / conditional / extension point** (Mở rộng = Tùy chọn / Có điều kiện / Điểm chêm vào)"
                },
                {
                  type: "component",
                  component: "UmlRelationshipTripleArena"
                },
                {
                  type: "component",
                  component: "IncludeExtendExecutionSimulator"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           6.4. Generalization
           -------------------------------------------------------- */
        {
          id: "ad3-sub-6-4",
          number: "4",
          title: "6.4 Quan hệ Generalization (Kế thừa 'is-a')",
          parts: [
            {
              id: "ad3-part-6-4-a",
              label: "a",
              title: "Bản chất kế thừa 'is-a' trong Actor và Use Case Generalization",
              content: [
                {
                  type: "paragraph",
                  text: "**Generalization** mô tả mối quan hệ phân cấp **'is-a'** (là-một-loại). Một Actor hoặc Use Case chuyên biệt sẽ kế thừa toàn bộ hành vi của loại tổng quát và có thể bổ sung các chi tiết riêng biệt:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Actor Generalization",
                      bullets: [
                        "`User` là vai trò tổng quát cha.",
                        "`Student` và `Instructor` là vai trò con chuyên biệt.",
                        "➔ `Student is a User`; `Instructor is a User`."
                      ]
                    },
                    {
                      number: "2",
                      title: "Use Case Generalization",
                      bullets: [
                        "`Submit Payment` là ca sử dụng tổng quát cha.",
                        "`Pay by Card` và `Pay by Wallet` là các ca sử dụng chuyên biệt con.",
                        "➔ Các Use Case con kế thừa toàn bộ luồng kiểm tra hóa đơn của `Submit Payment` và bổ sung phương thức trừ tiền riêng biệt."
                      ]
                    },
                    {
                      number: "3",
                      title: "Ký hiệu chuẩn UML",
                      bullets: [
                        "Được vẽ bằng **đường nét liền** kết thúc bằng **mũi tên tam giác rỗng (hollow triangle)** trỏ về phần tử cha tổng quát."
                      ]
                    }
                  ]
                },
                {
                  type: "highlight",
                  title: "Từ Khóa Thuộc Lòng Khi Đi Thi (Mnemonic)",
                  text: "**Generalization = is-a + inheritance** (Tổng quát hóa = Quan hệ Is-A + Kế thừa)"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           6.5. Organized Use Case Diagram — Course Registration
           -------------------------------------------------------- */
        {
          id: "ad3-sub-6-5",
          number: "5",
          title: "6.5 Organized Use Case Diagram — Course Registration System",
          parts: [
            {
              id: "ad3-part-6-5-a",
              label: "a",
              title: "Sơ đồ tổng hợp toàn cảnh & Ý nghĩa kiến trúc hệ thống",
              content: [
                {
                  type: "paragraph",
                  text: "Dưới đây là Sơ đồ Use Case Diagram tổng hợp hoàn chỉnh của hệ thống Đăng ký học phần minh họa trọn vẹn sự kết hợp giữa 4 Actors, 7 Use Cases và mạng lưới quan hệ UML chuẩn:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Danh mục 4 Actors",
                      bullets: [
                        "`Student`, `Instructor`, `System Clock`, `Payment Gateway`."
                      ]
                    },
                    {
                      number: "2",
                      title: "Danh mục 7 Use Cases bên trong System Boundary",
                      bullets: [
                        "`Register for Course`, `Add to Waitlist`, `Submit Grades`, `Process Payment`, `Authenticate User`, `Open Registration`, `Archive Records`."
                      ]
                    },
                    {
                      number: "3",
                      title: "Relationships nổi bật",
                      bullets: [
                        "`Add to Waitlist` ──<<extend>>──► `Register for Course`",
                        "`Register for Course` ──<<include>>──► `Authenticate User`",
                        "`Submit Grades` ──<<include>>──► `Authenticate User`"
                      ]
                    },
                    {
                      number: "4",
                      title: "Vai trò chiến lược của Diagram",
                      bullets: [
                        "Cung cấp cái nhìn toàn cảnh về Scope hệ thống, phân định trách nhiệm của từng Actor, làm rõ các hành vi tùy chọn và dùng chung, khóa chặt phạm vi dự án chống Scope Creep."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "OrganizedCourseRegistrationDiagramStudio"
                }
              ]
            },
            {
              id: "ad3-part-6-5-b",
              label: "b",
              title: "Kiểm tra phản xạ trắc nghiệm Mục VI: Organizing Use Cases",
              content: [
                {
                  type: "component",
                  component: "AdMicroQuizCard",
                  props: {
                    quizId: "ad3-q6",
                    badge: "Micro-Quiz #6: Organizing Use Cases",
                    question: "Trong mô hình Use Case UML, nhận định nào sau đây về quan hệ <<include>> và <<extend>> là CHÍNH XÁC nhất?",
                    options: [
                      "Cả <<include>> và <<extend>> đều là hành vi tùy chọn và có mũi tên trỏ về Base Use Case.",
                      "Mũi tên <<include>> trỏ sang hành vi dùng chung; mũi tên <<extend>> trỏ ngược về Base Use Case.",
                      "Base Use Case không thể tự hoàn thành nếu Extension Use Case không được kích hoạt.",
                      "Generalization và <<extend>> sử dụng chung một kiểu mũi tên nét đứt có nhãn stereotype."
                    ],
                    correctIndex: 1,
                    explanation: "Trong chuẩn UML: <<include>> thể hiện hành vi bắt buộc nên mũi tên trỏ từ Base sang Included Use Case. Ngược lại, <<extend>> thể hiện hành vi tùy chọn chêm thêm tại extension point nên mũi tên nét đứt trỏ NGƯỢC VỀ Base Use Case. Base Use Case tự thân vẫn hoàn chỉnh ngay cả khi extension không bao giờ chạy.",
                    citation: "Giáo trình Phân tích thiết kế yêu cầu — Chapter 3: Section 6.2 & 6.3 (Organizing Use Cases)"
                  }
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION VII: ÔN THI NHANH — KEY TAKEAWAYS & COMMON MISTAKES
       ============================================================ */
    {
      id: "ad3-section-7",
      roman: "VII",
      title: "Ôn Thi Nhanh — Key Takeaways & Common Mistakes",
      subsections: [
        /* --------------------------------------------------------
           7.1. 5 Sai lầm phổ biến khi lập mô hình Use Case
           -------------------------------------------------------- */
        {
          id: "ad3-sub-7-1",
          number: "1",
          title: "7.1 5 Sai lầm phổ biến khi lập mô hình Use Case (Common Mistakes)",
          parts: [
            {
              id: "ad3-part-7-1-a",
              label: "a",
              title: "Nhận diện & Khắc phục 5 sai lầm kinh điển trong thực tế và đề thi",
              content: [
                {
                  type: "paragraph",
                  text: "Trong các kỳ thi và quá trình triển khai dự án thực tế, các chuyên viên phân tích thường mắc phải **5 sai lầm kinh điển** khiến mô hình Use Case bị sai lệch nghiêm trọng về bản chất:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Chia nhỏ từng bước thao tác thành từng Use Case riêng rẽ (Functional Decomposition)",
                      bullets: [
                        "**Lỗi sai**: Tạo các Use Case vụn vặt như `Enter Username/Password`, `Click Search Button`, `Display Data`.",
                        "**Chuẩn mực**: Một Use Case phải đại diện cho một mục tiêu hoàn chỉnh mang lại giá trị trọn vẹn (`Authenticate User`, `Search Course Catalog`). Các thao tác lẻ chỉ là các bước con (Steps) trong luồng sự kiện (Flow of Events)."
                      ]
                    },
                    {
                      number: "2",
                      title: "Bỏ sót Sự kiện Thời gian (Temporal) và Sự kiện Trạng thái (State)",
                      bullets: [
                        "**Lỗi sai**: Chỉ chú trọng tìm kiếm External Events do con người bấm nút, bỏ quên hoàn toàn các sự kiện tự động kích hoạt.",
                        "**Chuẩn mực**: Hệ thống luôn có các tác vụ định kỳ (đóng cổng lúc 24h00, sao lưu tự động) và kích hoạt theo ngưỡng dữ liệu (hết chỗ, số dư âm). Cần kiểm tra chéo cả 3 nhóm sự kiện."
                      ]
                    },
                    {
                      number: "3",
                      title: "Đặt tên Use Case theo màn hình giao diện (Naming after UI Screens)",
                      bullets: [
                        "**Lỗi sai**: Đặt tên dạng `Login Screen`, `Course Registration Window`, `Payment Dialog`.",
                        "**Chuẩn mực**: Use Case mô tả hành vi nghiệp vụ, độc lập với công nghệ giao diện. Bắt buộc đặt tên theo quy tắc **Động từ hành động + Danh từ bổ nghĩa** (`Register for Courses`, `Process Payment`)."
                      ]
                    },
                    {
                      number: "4",
                      title: "Lạm dụng hoặc nhầm lẫn giữa <<extend>> và <<include>>",
                      bullets: [
                        "**Lỗi sai**: Dùng `<<extend>>` cho hành vi bắt buộc 100% phải chạy; hoặc vẽ ngược chiều mũi tên `<<extend>>`.",
                        "**Chuẩn mực**: Hành vi bắt buộc luôn chạy ➔ `<<include>>` (Base ➔ Included). Hành vi tùy chọn có điều kiện ➔ `<<extend>>` (Extension ➔ Base)."
                      ]
                    },
                    {
                      number: "5",
                      title: "Bỏ qua khâu thẩm định & xác nhận với Stakeholders (Skipping Validation)",
                      bullets: [
                        "**Lỗi sai**: Tự suy đoán yêu cầu trong phòng kín và chuyển giao thẳng sang lập trình mà không đối chiếu với người dùng doanh nghiệp.",
                        "**Chuẩn mực**: Kết thúc pha Initiation bắt buộc phải rà soát, đối chiếu và ký duyệt mô hình Use Case với các bên liên quan."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "CommonMistakesDiagnosticArena"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           7.2. Tóm tắt 5 trụ cột cốt lõi của Chapter 3
           -------------------------------------------------------- */
        {
          id: "ad3-sub-7-2",
          number: "2",
          title: "7.2 Tóm tắt 5 Trụ cột cốt lõi của Chapter 3 (Core Summary)",
          parts: [
            {
              id: "ad3-part-7-2-a",
              label: "a",
              title: "5 Điểm chốt chặn kiến thức không thể quên",
              content: [
                {
                  type: "paragraph",
                  text: "Để làm chủ toàn bộ nội dung Chapter 3, bạn cần khắc ghi **5 trụ cột cốt lõi** sau đây:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "System Use Cases & Ngữ cảnh Initiation",
                      bullets: [
                        "Pha Initiation (Inception) tập trung trả lời câu hỏi phạm vi và tính khả thi trước khi tiến hành kiến trúc chi tiết.",
                        "Mô hình Use Case là trung tâm kết nối nhu cầu người dùng với các bước thiết kế phần mềm tiếp theo."
                      ]
                    },
                    {
                      number: "2",
                      title: "Event Decomposition & Bảng phân tích sự kiện (Event Table)",
                      bullets: [
                        "Kỹ thuật phân rã sự kiện là phương pháp chuẩn mực nhất để phát hiện đầy đủ mọi Use Case.",
                        "Master Event Table 6 cột: `Event | Trigger | Source | Use Case | Response | Destination`."
                      ]
                    },
                    {
                      number: "3",
                      title: "Nhận diện Tác nhân & Vai trò (Actors & Roles)",
                      bullets: [
                        "Actor là VAI TRÒ bên ngoài tương tác trực tiếp với hệ thống.",
                        "Gồm 4 nhóm: Người dùng (Human Users), Hệ thống ngoài (External Systems), Thiết bị phần cứng (Hardware Devices), và Tiến trình thời gian ngầm."
                      ]
                    },
                    {
                      number: "4",
                      title: "Quy tắc Chuyển hóa 1:1 & Đặt tên Use Case",
                      bullets: [
                        "Mỗi Business Event chuyển hóa thành đúng 1 System Use Case.",
                        "Quy chuẩn đặt tên: Ngoại động từ hành động + Danh từ bổ ngữ có ý nghĩa nghiệp vụ (Verb + Noun)."
                      ]
                    },
                    {
                      number: "5",
                      title: "Tổ chức & Cấu trúc hóa mô hình Use Case UML",
                      bullets: [
                        "Sử dụng `<<include>>` để trích xuất hành vi dùng chung bắt buộc (Base ➔ Included).",
                        "Sử dụng `<<extend>>` để bổ sung hành vi tùy chọn chêm thêm theo điều kiện (Extension ➔ Base).",
                        "Sử dụng `Generalization` (Tam giác rỗng) để mô hình hóa quan hệ cha - con kế thừa."
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           7.3. Quy trình 11 chặng tư duy BA
           -------------------------------------------------------- */
        {
          id: "ad3-sub-7-3",
          number: "3",
          title: "7.3 Quy trình 11 Chặng tư duy của Chuyên viên BA (The Cognitive Pipeline)",
          parts: [
            {
              id: "ad3-part-7-3-a",
              label: "a",
              title: "Lộ trình tư duy tuần tự từ hiện trạng thực tế đến mô hình hoàn chỉnh",
              content: [
                {
                  type: "paragraph",
                  text: "Một chuyên viên BA/SA chuyên nghiệp không vẽ Use Case một cách tùy hứng, mà tuân thủ nghiêm ngặt **Quy trình 11 chặng tư duy (Cognitive Pipeline)** chuyển hóa nhận thức từ thế giới thực sang mô hình phần mềm chuẩn xác:"
                },
                {
                  type: "component",
                  component: "BaCognitivePipelineRunner"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           7.4 & 7.5. Terminology Matrix & UML Diagnostic Tool
           -------------------------------------------------------- */
        {
          id: "ad3-sub-7-4",
          number: "4",
          title: "7.4 & 7.5 Tra cứu 15 Thuật ngữ & Công cụ chẩn đoán quan hệ UML",
          parts: [
            {
              id: "ad3-part-7-4-a",
              label: "a",
              title: "Hệ thống hóa 15 thuật ngữ nền tảng và 3 câu hỏi chẩn đoán UML",
              content: [
                {
                  type: "paragraph",
                  text: "Dưới đây là Bảng tra cứu 15 thuật ngữ cốt lõi đi kèm công thức ghi nhớ ngắn gọn và bẫy thi thường gặp, kết hợp Công cụ 3 câu hỏi vàng phân định bản chất các mối liên kết trong biểu đồ Use Case:"
                },
                {
                  type: "component",
                  component: "Chapter3TerminologyMasterMatrix"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           7.6. Bảng kiểm nghiệm 16 tiêu chuẩn phân tích hệ thống
           -------------------------------------------------------- */
        {
          id: "ad3-sub-7-5",
          number: "5",
          title: "7.6 Bảng kiểm nghiệm 16 Tiêu chuẩn phân tích hệ thống (Audit Checklist)",
          parts: [
            {
              id: "ad3-part-7-5-a",
              label: "a",
              title: "16 Tiêu chuẩn vàng bảo đảm chất lượng chuyển giao sang pha Elaboration",
              content: [
                {
                  type: "paragraph",
                  text: "Trước khi đóng pha Initiation và bàn giao tài liệu đặc tả sang pha Elaboration, chuyên viên BA/SA cần thực hiện quy trình tự kiểm định (Self-Audit) thông qua bảng 16 tiêu chí phân chia theo 5 giai đoạn:"
                },
                {
                  type: "component",
                  component: "SystemAnalysisAuditChecklist"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           7.7 & 7.8. Scope Guard & One-Page Memory Map
           -------------------------------------------------------- */
        {
          id: "ad3-sub-7-6",
          number: "6",
          title: "7.7 Scope Guard & 7.8 One-Page Memory Map (Tổng lực tri thức)",
          parts: [
            {
              id: "ad3-part-7-6-a",
              label: "a",
              title: "Hàng rào bảo vệ phạm vi kiến thức và Cây sơ đồ trí nhớ toàn năng",
              content: [
                {
                  type: "paragraph",
                  text: "Tận dụng Cây tri thức tương tác để ôn tập nhanh trước giờ thi, đồng thời ghi nhớ bảng phân định **Scope Guard** để không bị các câu hỏi đánh lạc hướng sang các pha thiết kế sau:"
                },
                {
                  type: "component",
                  component: "OnePageMemoryMapVisualizer"
                }
              ]
            }
          ]
        },

        /* --------------------------------------------------------
           7.9. Micro-Quiz #7
           -------------------------------------------------------- */
        {
          id: "ad3-sub-7-7",
          number: "7",
          title: "7.7 Kiểm tra phản xạ trắc nghiệm tổng hợp: Micro-Quiz #7",
          parts: [
            {
              id: "ad3-part-7-7-a",
              label: "a",
              title: "Kiểm tra phản xạ trắc nghiệm Mục VII: Common Pitfalls & Systems Analysis Mastery",
              content: [
                {
                  type: "component",
                  component: "AdMicroQuizCard",
                  props: {
                    quizId: "ad3-q7",
                    badge: "Micro-Quiz #7: Systems Analysis & Exam Pitfalls",
                    question: "Khi rà soát mô hình Use Case của dự án Đăng ký môn học, lỗi thiết kế nào sau đây vi phạm nghiêm trọng nhất nguyên tắc xây dựng Use Case chuẩn của pha Initiation?",
                    options: [
                      "Tách 'Nhập mã môn học' và 'Bấm nút ghi danh' thành hai Use Case độc lập.",
                      "Đặt tên Use Case theo cấu trúc Động từ hành động kết hợp Danh từ bổ nghĩa.",
                      "Nhận diện Cổng thanh toán trực tuyến của bên thứ ba là một External Actor.",
                      "Tách riêng luồng xử lý ngoại lệ 'Lớp học phần hết chỗ' thành luồng rẽ nhánh."
                    ],
                    correctIndex: 0,
                    explanation: "Tách 'Nhập mã môn học' và 'Bấm nút ghi danh' thành hai Use Case độc lập là lỗi phân rã chức năng vụn vặt (Functional Decomposition) cực kỳ nghiêm trọng. Các thao tác trên chỉ là các bước (steps) trong luồng thực thi của Use Case trọn vẹn 'Đăng ký học phần' (Register for Courses), bản thân chúng không mang lại giá trị độc lập đo lường được cho người dùng.",
                    citation: "Giáo trình Phân tích thiết kế yêu cầu — Chapter 3: Section 7.1 (Common Mistakes in Use Case Modeling)"
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
