/* ============================================================
   GIÁO TRÌNH ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)
   Chương 1: GIỚI THIỆU VỀ ĐIỆN TOÁN ĐÁM MÂY (Introduction to Cloud Computing)
   Phiên bản Chuẩn StudyMaster: Micro-content • Interactive Simulators • Phản Xạ Trắc Nghiệm
   Biên tập chuẩn học thuật từ trọn bộ bài giảng chính thức (Mục I đến IV)
   ============================================================ */

export const cloudComputingChapter1 = {
  id: "cloud-ch1",
  title: "Chương 1",
  subtitle: "Giới thiệu về Điện toán đám mây (Introduction to Cloud Computing)",
  sections: [
    /* ============================
       MỤC ★: OVERVIEW CHƯƠNG (Hero Banner sẽ làm sau cùng)
       ============================ */
    {
      id: "cloud-ch1-s0",
      roman: "★",
      title: "Tổng quan chương: Giới thiệu về Điện toán đám mây",
      subsections: [
        {
          id: "cloud-ch1-s0-overview",
          number: "0",
          title: "Bản đồ kiến thức cốt lõi Chương 1",
          parts: [
            {
              id: "cloud-ch1-s0-p1",
              label: "★",
              title: "Tổng quan tri thức toàn chương",
              content: [
                {
                  type: "cloud-chapter-hero",
                  chapterId: "cloud-ch1"
                },
                {
                  type: "highlight",
                  text: "Chương 1 cung cấp nền tảng nhập môn cốt lõi của toàn bộ chuyên ngành Điện toán đám mây: Bản chất điện toán đám mây, bối cảnh lịch sử qua 3 giai đoạn (Timesharing 1960s ➔ Internet 1990s ➔ Modern Cloud 2000s), kiến trúc luồng dữ liệu, 5 đặc tính vàng theo chuẩn NIST, 5 mô hình triển khai (Deployment Models), 3 mô hình dịch vụ (Service Models) cùng ma trận trách nhiệm chung (Shared Responsibility), và 3 lớp kiến trúc nền tảng tích hợp công cụ mã nguồn mở vs thương mại."
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Lưu ý lộ trình học tập",
                  text: "Học viên nên đi tuần tự từ Mục I (Tổng quan & Lịch sử) ➔ Mục II (Kiến trúc & 5 Đặc tính NIST) ➔ Mục III (Mô hình Triển khai & Dịch vụ) ➔ Mục IV (Công cụ quản lý & 3 Lớp nền tảng) để nắm chắc kiến thức trước khi thực hành các bài tập chuyên sâu."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC I: TỔNG QUAN & LỊCH SỬ CLOUD COMPUTING
       ============================ */
    {
      id: "cloud-ch1-s1",
      roman: "I",
      title: "Tổng quan & Lịch sử Cloud Computing",
      subsections: [
        {
          id: "cloud-ch1-s1-1-everywhere",
          number: "1.1",
          title: "Cloud Computing xuất hiện ở đâu? (Cloud Computing Everywhere)",
          parts: [
            {
              id: "cloud-ch1-s1-1-p1",
              label: "THỰC TIỄN",
              title: "6 Lĩnh vực ứng dụng tiêu biểu trong đời sống và doanh nghiệp",
              content: [
                {
                  type: "paragraph",
                  text: "Trong kỷ nguyên số, <strong>Điện toán đám mây (Cloud Computing)</strong> không còn là khái niệm xa lạ mà đã thâm nhập sâu rộng vào mọi mặt của hoạt động kinh tế, xã hội, giáo dục và y tế. Dù người dùng cuối có nhận thức được hay không, hầu hết các dịch vụ trực tuyến hiện nay đều vận hành trên nền tảng đám mây:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Startup & Công nghệ:</strong> Lưu trữ website và dịch vụ trực tuyến trên cloud, tự động co giãn (Auto-scale) máy chủ khi lưu lượng truy cập tăng vọt trong đợt ra mắt.",
                    "<strong>IoT & Nhà thông minh (Smart Home):</strong> Các thiết bị gia dụng (camera, đèn, khóa cửa) được giám sát và điều khiển từ xa qua smartphone, toàn bộ dữ liệu telemetry được truyền tải và lưu trữ qua đám mây.",
                    "<strong>Doanh nghiệp & Tài chính:</strong> Sử dụng phần mềm đám mây (SaaS) cho hệ thống kế toán, quản lý tiền lương, xuất hóa đơn điện tử tập trung an toàn.",
                    "<strong>Giáo dục & Đào tạo:</strong> Giảng viên và sinh viên cộng tác chỉnh sửa tài liệu trực tuyến (Google Docs, Office 365) cùng lúc ngay trên trình duyệt web.",
                    "<strong>Y tế & Chăm sóc sức khỏe:</strong> Thiết bị y tế đeo tay (Smartwatch) liên tục upload dữ liệu nhịp tim, nồng độ oxy lên cloud để bác sĩ theo dõi và phát cảnh báo sớm.",
                    "<strong>Bán lẻ & Thương mại điện tử:</strong> Doanh nghiệp thuê tài nguyên đám mây để chạy các thuật toán phân tích dữ liệu bán hàng (Big Data Analytics) theo chu kỳ khuyến mãi Black Friday hay Tết."
                  ]
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "📌 Cần nhớ trước khi thi",
                  text: "Cloud Computing hiện diện ở hầu hết mọi lĩnh vực cốt lõi: <strong>Web/Startup, IoT, Doanh nghiệp, Giáo dục, Y tế và Bán lẻ</strong>."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch1-s1-2-history",
          number: "1.2",
          title: "Lịch sử phát triển Cloud Computing (History of Cloud Computing)",
          parts: [
            {
              id: "cloud-ch1-s1-2-p1",
              label: "LỊCH SỬ",
              title: "3 Giai đoạn tiến hóa từ Timesharing đến Modern Cloud",
              content: [
                {
                  type: "paragraph",
                  text: "Điện toán đám mây là kết quả của một quá trình tiến hóa công nghệ kéo dài hơn 6 thập kỷ, trải qua <strong>3 giai đoạn phát triển lớn</strong>:"
                },
                {
                  type: "table",
                  headers: ["Giai đoạn", "Mốc thời gian", "Sự kiện & Cột mốc lịch sử chính"],
                  rows: [
                    ["1960s – 1970s", "1960s", "Early Concepts — Khái niệm khởi nguyên; IBM & DEC tiên phong cung cấp giải pháp Timesharing (chia sẻ thời gian máy tính lớn)."],
                    ["", "1972", "IBM phát triển công nghệ Máy ảo (Virtual Machine - VM) đầu tiên trên mainframe System/370."],
                    ["", "1977", "Biểu tượng hình đám mây (Cloud Symbol) lần đầu tiên được sử dụng trong sơ đồ mạng ARPANET."],
                    ["1990s", "1991", "The Rise of the Internet — Mạng toàn cầu World Wide Web (WWW) ra đời, tạo lập hạ tầng siêu liên kết."],
                    ["", "1997", "Thuật ngữ chính thức 'Cloud Computing' được Giáo sư Ramesh Chellappa lần đầu tiên đặt tên và định nghĩa trong bài giảng học thuật."],
                    ["", "1999", "Salesforce thành lập, tiên phong cung cấp phần mềm doanh nghiệp CRM hoàn toàn qua trình duyệt web (mở đầu kỷ nguyên SaaS)."],
                    ["2000s – Nay", "2002 – 2006", "The Birth of Modern Cloud Computing — 2002 AWS ra đời; 2006 ra mắt Amazon EC2, S3 và Apache Hadoop."],
                    ["", "2008 – 2010", "Google App Engine (PaaS) ra mắt năm 2008; Microsoft Azure chính thức phát hành năm 2010."],
                    ["", "2017 – 2019", "2017 AWS & GCP áp dụng tính phí theo giây (Pay per Second Billing); 2019 thị trường CDN bùng nổ mạnh mẽ."]
                  ]
                },
                {
                  type: "cloud-history-timeline"
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "📌 Cần nhớ trọng tâm thi cử",
                  text: "Lịch sử Cloud Computing phát triển qua 3 giai đoạn then chốt: <strong>Timesharing (thập niên 1960s) ➔ Internet (thập niên 1990s) ➔ Modern Cloud Computing (từ thập niên 2000s đến nay)</strong>. Thuật ngữ do <strong>Ramesh Chellappa</strong> đặt tên năm 1997."
                },
                {
                  type: "micro-quiz",
                  question: "Thuật ngữ 'Cloud Computing' lần đầu tiên được ai chính thức đặt tên và đưa vào bài giảng học thuật vào năm 1997?",
                  options: [
                    "Giáo sư Ramesh Chellappa",
                    "Giám đốc điều hành Jeff Bezos",
                    "Nhà khoa học Tim Berners-Lee",
                    "Chủ tịch tập đoàn Bill Gates"
                  ],
                  answerIndex: 0,
                  explanation: "Năm 1997, Giáo sư Ramesh Chellappa là người đầu tiên chính thức sử dụng thuật ngữ 'Cloud Computing' trong một bài thuyết trình học thuật tại Đại học Texas.",
                  hint: "Nhớ mốc năm 1997 gắn với nhà nghiên cứu học thuật gốc Ấn Độ."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC II: ĐỊNH NGHĨA, KIẾN TRÚC & ĐẶC ĐIỂM NIST
       ============================ */
    {
      id: "cloud-ch1-s2",
      roman: "II",
      title: "Định nghĩa, Kiến trúc & Đặc điểm Cloud Computing",
      subsections: [
        {
          id: "cloud-ch1-s2-1-definition-arch",
          number: "2.1",
          title: "Định nghĩa & Kiến trúc kết nối Cloud Computing (Definition & Architecture)",
          parts: [
            {
              id: "cloud-ch1-s2-1-p1",
              label: "BẢN CHẤT",
              title: "Định nghĩa chuẩn và sơ đồ luồng dữ liệu",
              content: [
                {
                  type: "definition",
                  term: "Cloud Computing (Điện toán đám mây)",
                  text: "Là mô hình cung cấp dịch vụ công nghệ thông tin (IT) thông qua mạng Internet, cho phép người dùng truy cập và sử dụng tài nguyên tính toán (máy chủ server, kho lưu trữ storage, mạng network, phần mềm software) theo nhu cầu (on-demand) mà KHÔNG CẦN ĐẦU TƯ HẠ TẦNG VẬT LÝ TẠI CHỖ."
                },
                {
                  type: "paragraph",
                  text: "<strong>Sơ đồ luồng kết nối kiến trúc Cloud (Cloud Architecture):</strong>"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Lớp Đám mây trung tâm (Cloud Computing):</strong> Chứa cụm máy chủ Servers, Máy tính ảo Virtual Desktop, Nền tảng phần mềm Software Platform, Ứng dụng Applications, Dữ liệu lưu trữ Storage Data.",
                    "<strong>Lớp Mạng truyền tải (Internet Network):</strong> Dữ liệu đi qua mạng Internet công cộng hoặc đường truyền thuê riêng.",
                    "<strong>Lớp Biên mạng cục bộ (Router ↔ Switch):</strong> Bộ định tuyến Router và bộ chuyển mạch Switch phân luồng dữ liệu tới các cổng kết nối.",
                    "<strong>Người dùng cuối (End User):</strong> Thiết bị di động Mobile, máy tính xách tay Laptop, máy tính bàn Desktop, máy in thông minh Printer..."
                  ]
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "📌 Cần nhớ bản chất cốt lõi",
                  text: "Bản chất của Cloud Computing là: <strong>Cung cấp dịch vụ IT qua Internet, sử dụng theo nhu cầu (on-demand), không cần sở hữu hay vận hành hạ tầng máy chủ vật lý</strong>."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch1-s2-2-nist-features",
          number: "2.2",
          title: "Đặc điểm & Lợi ích của Cloud Computing (5 Đặc tính cốt lõi NIST)",
          parts: [
            {
              id: "cloud-ch1-s2-2-p1",
              label: "CHUẨN NIST",
              title: "5 Đặc tính cốt lõi theo Viện Tiêu chuẩn và Công nghệ Quốc gia Hoa Kỳ",
              content: [
                {
                  type: "paragraph",
                  text: "Theo mô hình chuẩn hóa của Viện Tiêu chuẩn và Công nghệ Quốc gia Hoa Kỳ (NIST), một hệ thống được công nhận là Điện toán đám mây bắt buộc phải hội tụ đủ <strong>5 đặc tính cốt lõi (Essential Characteristics)</strong>:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>1. On-demand self-service (Tự phục vụ theo nhu cầu):</strong> Khách hàng có thể tự động cấp phát tài nguyên tính toán (CPU, RAM, ổ đĩa) khi cần mà không cần trao đổi thủ công với nhân viên kỹ thuật của nhà cung cấp.",
                    "<strong>2. Broad network access (Truy cập mạng diện rộng):</strong> Năng lực tính toán sẵn sàng trên mạng Internet và được truy cập thông qua các giao thức chuẩn mực, hỗ trợ đa dạng thiết bị đầu cuối (Mobile, Tablet, Laptop, Workstation).",
                    "<strong>3. Resource pooling (Chia sẻ tài nguyên dùng chung):</strong> Tài nguyên vật lý của nhà cung cấp được gom lại để phục vụ nhiều khách hàng cùng lúc (Multi-tenant model), tự động phân chia linh hoạt theo nhu cầu mà người dùng không cần biết vị trí vật lý chính xác.",
                    "<strong>4. Rapid elasticity (Khả năng co giãn nhanh chóng):</strong> Tài nguyên có thể được tăng lên (scale out/up) hoặc thu hồi về (scale in/down) cực kỳ mau lẹ, đem lại cảm giác tài nguyên dường như vô hạn đối với người dùng (liên quan trực tiếp tới khái niệm <strong>Scalability</strong> và <strong>Auto-scaling</strong>).",
                    "<strong>5. Measured service (Dịch vụ đo lường được):</strong> Hệ thống tự động giám sát, kiểm soát và đo lường chi tiết mức sử dụng tài nguyên (băng thông, thời gian CPU, dung lượng lưu trữ), làm căn cứ tính phí minh bạch (Pay-as-you-go / Trả tiền theo mức sử dụng)."
                  ]
                },
                {
                  type: "nist-features-radar"
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "📌 Cần nhớ 5 đặc tính NIST",
                  text: "5 đặc tính NIST = <strong>On-demand self-service • Broad network access • Resource pooling • Rapid elasticity • Measured service</strong>. Co giãn nhanh gắn liền với <em>Scalability</em>."
                },
                {
                  type: "micro-quiz",
                  question: "Đặc tính nào của Cloud theo mô hình NIST cho phép hệ thống tự động tăng hoặc giảm tài nguyên máy chủ tức thì khi lưu lượng truy cập thay đổi?",
                  options: [
                    "Rapid elasticity (Co giãn nhanh)",
                    "Resource pooling (Dùng chung)",
                    "Broad network (Truy cập rộng)",
                    "Measured service (Đo lường được)"
                  ],
                  answerIndex: 0,
                  explanation: "Rapid elasticity (Khả năng co giãn nhanh) cho phép hệ thống tự động cấp phát và thu hồi tài nguyên tức thì theo tải sử dụng thực tế (Auto-scaling / Scalability).",
                  hint: "Tìm đặc tính thể hiện tính linh hoạt, đàn hồi của tài nguyên tính toán."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC III: PHÂN BIỆT HỆ THỐNG CLOUD (DEPLOYMENT & SERVICE MODELS)
       ============================ */
    {
      id: "cloud-ch1-s3",
      roman: "III",
      title: "Phân biệt hệ thống Cloud (Differentiating Cloud Computing Systems)",
      subsections: [
        {
          id: "cloud-ch1-s3-1-deployment-models",
          number: "3.1",
          title: "Mô hình triển khai Cloud (Deployment Models)",
          parts: [
            {
              id: "cloud-ch1-s3-1-p1",
              label: "TRIỂN KHAI",
              title: "Ai sở hữu và chia sẻ tài nguyên như thế nào?",
              content: [
                {
                  type: "paragraph",
                  text: "Có 2 cách tiếp cận để phân loại các hệ thống Điện toán đám mây: <strong>Mô hình triển khai (Deployment Models)</strong> phân định ai sở hữu và tài nguyên được chia sẻ thế nào; còn <strong>Mô hình dịch vụ (Service Models)</strong> mô tả cách thức dịch vụ được cung cấp cho người dùng."
                },
                {
                  type: "table",
                  headers: ["Mô hình Triển khai", "Định nghĩa & Chủ sở hữu", "Ưu điểm cốt lõi", "Hạn chế & Thách thức"],
                  rows: [
                    ["Private Cloud (Đám mây riêng)", "Do 1 tổ chức duy nhất sở hữu & vận hành (tự quản nội bộ hoặc thuê bên ngoài vận hành).", "✔ Mức độ bảo mật cao nhất\n✔ Kiểm soát toàn diện phần cứng & dữ liệu", "✖ Chi phí đầu tư (CapEx) rất cao\n✖ Tự chịu mọi chi phí vận hành, bảo trì"],
                    ["Public Cloud (Đám mây công cộng)", "Do nhà cung cấp bên thứ ba (AWS, Azure, GCP) đầu tư, vận hành và phục vụ công chúng.", "✔ Chi phí thấp (trả tiền theo dùng - Pay-as-you-go)\n✔ Khả năng mở rộng cực cao (Scalability)", "✖ Bảo mật thấp hơn (dùng chung hạ tầng Multi-tenant)\n✖ Không kiểm soát sâu phần cứng vật lý"],
                    ["Community Cloud (Đám mây cộng đồng)", "Nhiều tổ chức có chung mục tiêu, nhiệm vụ hoặc chính sách tuân thủ cùng xây dựng và chia sẻ (VD: Khối trường ĐH, Viện nghiên cứu).", "✔ Chia sẻ gánh nặng chi phí & tài nguyên\n✔ Mức độ bảo mật tốt hơn Public Cloud", "✖ Thỏa thuận quản trị và phân bổ chi phí giữa các thành viên khá phức tạp"],
                    ["Hybrid Cloud (Đám mây lai)", "Kết hợp từ 2 mô hình khác nhau trở lên (Private + Public, Private + Community).", "✔ Tính linh hoạt tối đa (Dữ liệu bí mật để ở Private, Ứng dụng web co giãn để ở Public)", "✖ Quản trị rất phức tạp do phải tích hợp và đồng bộ nhiều môi trường khác biệt"],
                    ["Multi-Cloud (Đa đám mây)", "Doanh nghiệp sử dụng cùng lúc nhiều nhà cung cấp Cloud độc lập (AWS + Azure + Google Cloud).", "✔ Tránh rủi ro bị phụ thuộc 1 hãng (Vendor Lock-in)\n✔ Tăng tối đa độ bền vững và chịu lỗi", "✖ Môi trường quản lý phân tán, đòi hỏi nhân sự phải am hiểu nhiều nền tảng"]
                  ]
                },
                {
                  type: "cloud-deployment-decision-sandbox"
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "📌 Cần nhớ 5 mô hình triển khai",
                  text: "<strong>Private</strong> (riêng - bảo mật cao, tốn kém) • <strong>Public</strong> (chung - rẻ, dễ mở rộng) • <strong>Community</strong> (nhóm chung mục đích) • <strong>Hybrid</strong> (lai linh hoạt nhưng phức tạp) • <strong>Multi-Cloud</strong> (nhiều nhà cung cấp, tránh phụ thuộc vendor lock-in)."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch1-s3-2-service-models",
          number: "3.2",
          title: "Mô hình dịch vụ Cloud & Trách nhiệm quản lý (Service Models & Management)",
          parts: [
            {
              id: "cloud-ch1-s3-2-p1",
              label: "DỊCH VỤ",
              title: "3 Mô hình dịch vụ IaaS, PaaS, SaaS & Kim tự tháp trách nhiệm",
              content: [
                {
                  type: "paragraph",
                  text: "Mô hình dịch vụ (Service Models) xác định phạm vi dịch vụ mà nhà cung cấp đám mây bàn giao cho khách hàng, chia thành 3 nhóm chuẩn mực:"
                },
                {
                  type: "table",
                  headers: ["Mô hình", "Tên đầy đủ", "Định nghĩa & Phạm vi cung cấp", "Ví dụ tiêu biểu", "Khẩu quyết quản lý"],
                  rows: [
                    ["SaaS", "Software as a Service (Phần mềm như dịch vụ)", "Cung cấp phần mềm ứng dụng hoàn chỉnh qua Internet, người dùng sử dụng trực tiếp qua trình duyệt web mà không cần cài đặt hay quản lý hạ tầng.", "Gmail, Google Docs, Office 365, Salesforce", "CONSUME IT (Người dùng chỉ việc tiêu thụ/sử dụng)"],
                    ["PaaS", "Platform as a Service (Nền tảng như dịch vụ)", "Cung cấp nền tảng phát triển (runtime, framework, DB) cho lập trình viên để xây dựng, chạy và quản lý ứng dụng mà không cần xây hay bảo trì hạ tầng bên dưới.", "Google App Engine, AWS Elastic Beanstalk, Heroku", "BUILD ON IT (Người dùng xây dựng ứng dụng trên nền tảng)"],
                    ["IaaS", "Infrastructure as a Service (Hạ tầng như dịch vụ)", "Cung cấp tài nguyên tính toán cơ bản (máy chủ ảo hóa, không gian lưu trữ, mạng ảo) qua Internet theo nhu cầu (on-demand).", "Amazon Web Services EC2, Microsoft Azure VMs, GCE", "MIGRATE TO IT (Người dùng di chuyển hạ tầng máy chủ lên)"]
                  ]
                },
                {
                  type: "shared-responsibility-stack"
                },
                {
                  type: "paragraph",
                  text: "<strong>Các dịch vụ mở rộng theo mô hình 'X-as-a-Service' (Everything as a Service):</strong>"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Database-as-a-Service (DBaaS):</strong> Dịch vụ cơ sở dữ liệu được quản lý tự động (Cloud SQL, Firestore).",
                    "<strong>Communication-as-a-Service (CaaS):</strong> Dịch vụ truyền thông VoIP, tổng đài thoại ảo tích hợp.",
                    "<strong>Integration-Platform-as-a-Service (iPaaS):</strong> Nền tảng kết nối và tự động hóa luồng dữ liệu liên ứng dụng.",
                    "<strong>Testing-as-a-Service (TaaS):</strong> Dịch vụ kiểm thử phần mềm tự động trên môi trường đám mây.",
                    "<strong>Network as a Service (NaaS):</strong> Cung cấp kết nối mạng ảo hóa, VPN và băng thông theo nhu cầu.",
                    "<strong>Security as a Service (SECaaS):</strong> Dịch vụ an ninh mạng, tường lửa WAF và chống tấn công từ chối dịch vụ DDoS.",
                    "<strong>Disaster Recovery as a Service (DRaaS):</strong> Dịch vụ sao lưu và phục hồi thảm họa tự động.",
                    "<strong>Mobile Backend as a Service (MBaaS):</strong> Cung cấp hạ tầng backend trọn gói cho ứng dụng di động.",
                    "<strong>Desktop as a Service (DaaS):</strong> Cung cấp môi trường máy tính để bàn ảo truyền hình ảnh tới máy trạm."
                  ]
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "📌 Cần nhớ quy tắc vàng thi cử",
                  text: "Thứ tự phân cấp: <strong>IaaS (hạ tầng) ➔ PaaS (nền tảng) ➔ SaaS (phần mềm)</strong>. Càng lên cao, người dùng càng ít phải nhúng tay quản lý kỹ thuật, nhà cung cấp quản lý càng nhiều."
                },
                {
                  type: "micro-quiz",
                  question: "Trong 3 mô hình dịch vụ điện toán đám mây (IaaS, PaaS, SaaS), mô hình nào tương ứng với khẩu quyết 'CONSUME IT' (người dùng chỉ việc sử dụng phần mềm qua trình duyệt)?",
                  options: [
                    "SaaS (Software as a Service)",
                    "PaaS (Platform as a Service)",
                    "IaaS (Infrastructure as a Service)",
                    "DaaS (Desktop as a Service)"
                  ],
                  answerIndex: 0,
                  explanation: "SaaS (Software as a Service) tương ứng với khẩu quyết 'CONSUME IT', nơi nhà cung cấp quản lý toàn bộ hệ thống và người dùng chỉ việc tiêu thụ/sử dụng phần mềm qua trình duyệt (Gmail, Google Docs).",
                  hint: "Nhớ thứ tự: SaaS là 'Consume it', PaaS là 'Build on it', IaaS là 'Migrate to it'."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC IV: CÔNG CỤ QUẢN LÝ & THÀNH PHẦN NỀN TẢNG CLOUD
       ============================ */
    {
      id: "cloud-ch1-s4",
      roman: "IV",
      title: "Công cụ quản lý & Thành phần nền tảng Cloud",
      subsections: [
        {
          id: "cloud-ch1-s4-1-management-tools",
          number: "4.1",
          title: "Công cụ quản lý Cloud (Cloud Management Tools)",
          parts: [
            {
              id: "cloud-ch1-s4-1-p1",
              label: "CÔNG CỤ",
              title: "Phân loại giải pháp Mã nguồn mở vs Thương mại đóng gói",
              content: [
                {
                  type: "paragraph",
                  text: "Để quản trị và điều phối các cụm tài nguyên đám mây khổng lồ, các tổ chức sử dụng các bộ công cụ quản lý chuyên dụng chia thành 2 phân nhóm chính:"
                },
                {
                  type: "table",
                  headers: ["Phân loại", "Các công cụ tiêu biểu", "Đặc điểm nhận diện khi thi"],
                  rows: [
                    ["Open-Source (Mã nguồn mở)", "Apache CloudStack, Eucalyptus, OpenStack", "Miễn phí bản quyền, tự do tùy biến mã nguồn, cộng đồng hỗ trợ lớn nhưng đòi hỏi kỹ năng triển khai cao."],
                    ["Commercial (Thương mại)", "Microsoft Hyper-V & System Center (Cloud OS), VMware vCloud Director", "Phải trả phí bản quyền, được hãng hỗ trợ kỹ thuật 24/7, tích hợp sâu với các hệ sinh thái doanh nghiệp lớn."]
                  ]
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "📌 Cần nhớ phân loại công cụ",
                  text: "Mã nguồn mở = <strong>Apache CloudStack, Eucalyptus, OpenStack</strong>. Thương mại = <strong>Microsoft Hyper-V & System Center, VMware vCloud Director</strong>."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch1-s4-2-platform-components",
          number: "4.2",
          title: "Thành phần nền tảng Cloud (Platform Components)",
          parts: [
            {
              id: "cloud-ch1-s4-2-p1",
              label: "3 LỚP NỀN TẢNG",
              title: "Kiến trúc 3 lớp xếp tầng từ chân đế lên ứng dụng",
              content: [
                {
                  type: "paragraph",
                  text: "Kiến trúc nền tảng của một hệ thống Điện toán đám mây được xây dựng phân tầng chặt chẽ gồm <strong>3 lớp chính</strong> từ dưới lên trên:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>1. Foundation layer (Lớp nền tảng - dưới cùng):</strong> Chịu trách nhiệm quản lý phần cứng vật lý và đặc biệt là công nghệ <strong>Ảo hóa (Virtualization)</strong>. Đây là lớp chân đế cốt lõi tạo ra các máy ảo và không gian lưu trữ ảo.",
                    "<strong>2. Infrastructure services (Dịch vụ hạ tầng - ở giữa):</strong> Cung cấp 3 khối tài nguyên cơ bản thiết yếu gồm năng lực tính toán (<strong>Compute</strong>), kho lưu trữ khối/đối tượng (<strong>Storage</strong>) và kết nối mạng ảo hóa (<strong>Network</strong>).",
                    "<strong>3. Application services (Dịch vụ ứng dụng - trên cùng):</strong> Các phần mềm, dịch vụ logic và API chạy trực tiếp trên lớp hạ tầng để phục vụ yêu cầu nghiệp vụ của người dùng cuối."
                  ]
                },
                {
                  type: "cloud-platform-layers"
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "📌 Cần nhớ thứ tự 3 lớp nền tảng",
                  text: "Kiến trúc cloud xây theo lớp từ dưới lên: <strong>Foundation layer (gắn với Ảo hóa - Virtualization) ➔ Infrastructure services (Compute, Storage, Network) ➔ Application services (Phần mềm)</strong>."
                },
                {
                  type: "micro-quiz",
                  question: "Trong kiến trúc 3 lớp của nền tảng Cloud (Platform Components), lớp nào gắn liền trực tiếp với công nghệ Ảo hóa (Virtualization)?",
                  options: [
                    "Foundation layer (Lớp nền tảng)",
                    "Infrastructure layer (Lớp hạ tầng)",
                    "Application layer (Lớp ứng dụng)",
                    "Management layer (Lớp quản lý)"
                  ],
                  answerIndex: 0,
                  explanation: "Foundation layer (Lớp nền tảng) nằm ở dưới cùng, chịu trách nhiệm trực tiếp về phần cứng vật lý và công nghệ Ảo hóa (Virtualization) để tạo ra các máy ảo.",
                  hint: "Lớp chân đế thấp nhất của hệ thống chịu trách nhiệm ảo hóa phần cứng."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC V: NHỮNG THÁCH THỨC CỦA CLOUD COMPUTING
       ============================ */
    {
      id: "cloud-ch1-s5",
      roman: "V",
      title: "Những thách thức của Cloud Computing (Challenges of Cloud Computing)",
      subsections: [
        {
          id: "cloud-ch1-s5-1-challenges",
          number: "5.1",
          title: "5 Thách thức lớn khi chuyển dịch lên Điện toán đám mây",
          parts: [
            {
              id: "cloud-ch1-s5-1-p1",
              label: "THÁCH THỨC",
              title: "Phân tích 5 rào cản chiến lược và giải pháp vượt qua",
              content: [
                {
                  type: "paragraph",
                  text: "Dù sở hữu vô vàn ưu thế đột phá về chi phí và khả năng mở rộng, việc ứng dụng và di chuyển lên <strong>Điện toán đám mây (Cloud Computing)</strong> vẫn vấp phải <strong>5 thách thức lớn</strong> đòi hỏi các tổ chức phải có chiến lược quản trị bài bản:"
                },
                {
                  type: "cloud-challenges-radar"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>1. Bảo mật dữ liệu (Security):</strong> Mối bận tâm số 1 (Top Concern) của các nhà quản lý CNTT. Khi dữ liệu được lưu trữ trên hạ tầng máy chủ của bên thứ ba, rủi ro về rò rỉ dữ liệu (Data Breaches), vi phạm quyền riêng tư và tấn công từ chối dịch vụ (DDoS) gia tăng. Giải pháp cốt lõi là tuân thủ <strong>Mô hình Trách nhiệm chung (Shared Responsibility)</strong> kết hợp mã hóa dữ liệu 2 đầu (In-transit và At-rest).",
                    "<strong>2. Thiếu hụt tài nguyên & nhân lực chuyên môn (Lack of resources / expertise):</strong> Tốc độ chuyển dịch lên Cloud diễn ra quá nhanh dẫn tới tình trạng khan hiếm nghiêm trọng các kỹ sư kiến trúc đám mây (Cloud Architects), kỹ sư vận hành (DevOps/SRE) có chứng chỉ chuyên sâu. Chi phí đào tạo và săn đón nhân tài trở thành gánh nặng tài chính lớn.",
                    "<strong>3. Quản trị hệ thống & chi phí (Governance):</strong> Hiện tượng 'Cloud Sprawl' — tài nguyên máy ảo, ổ cứng được nhân viên cấp phát tràn lan nhưng quên tắt, dẫn đến hóa đơn thanh toán hàng tháng tăng vọt ngoài tầm kiểm soát. Doanh nghiệp cần thiết lập chính sách kiểm soát danh tính (IAM) và ứng dụng văn hóa quản trị chi phí FinOps.",
                    "<strong>4. Tuân thủ pháp lý & quy định (Compliance):</strong> Doanh nghiệp hoạt động đa quốc gia phải tuân thủ các quy chuẩn bảo mật ngặt nghèo như <strong>GDPR</strong> (Châu Âu về quyền riêng tư), <strong>HIPAA</strong> (Hoa Kỳ về hồ sơ y tế), <strong>PCI-DSS</strong> (Bảo mật thanh toán thẻ ngân hàng), và <strong>Luật An ninh mạng Việt Nam</strong> (yêu cầu lưu trữ dữ liệu người dùng cá nhân tại máy chủ trong nước).",
                    "<strong>5. Quản lý đa đám mây (Managing Multi-Cloud):</strong> Hơn 80% doanh nghiệp lớn áp dụng chiến lược Multi-Cloud để không bị phụ thuộc vào một nhà cung cấp duy nhất (chống Vendor Lock-in). Tuy nhiên, việc đồng bộ dữ liệu giữa AWS, Azure, Google Cloud gặp trở ngại lớn do khác biệt về kiến trúc API, công cụ giám sát và giao thức kết nối."
                  ]
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "📌 Cần nhớ trọng tâm thi cử",
                  text: "Trong 5 thách thức của Cloud Computing (<strong>Security, Lack of resources, Governance, Compliance, Multi-Cloud</strong>), <strong>Bảo mật (Security)</strong> luôn là rào cản và mối bận tâm hàng đầu (Top Concern) của doanh nghiệp."
                },
                {
                  type: "micro-quiz",
                  question: "Theo các khảo sát và giáo trình chuẩn, rào cản và thách thức lớn nhất đối với các doanh nghiệp khi quyết định chuyển đổi hạ tầng lên Điện toán đám mây là gì?",
                  options: [
                    "Chi phí mua sắm máy chủ vật lý ban đầu quá đắt đỏ",
                    "Vấn đề bảo mật và an toàn dữ liệu (Security & Data Privacy)",
                    "Thiếu hụt các ứng dụng phần mềm văn phòng hỗ trợ nền web",
                    "Hạ tầng mạng cáp quang Internet không đủ băng thông truyền dẫn"
                  ],
                  answerIndex: 1,
                  explanation: "Bảo mật (Security) luôn là mối quan tâm hàng đầu của các tổ chức khi dữ liệu nhạy cảm được chuyển sang lưu trữ và xử lý trên hạ tầng của nhà cung cấp bên thứ ba.",
                  hint: "Nỗi lo lớn nhất của mọi doanh nghiệp khi đặt dữ liệu bí mật kinh doanh ra ngoài trụ sở."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VI: WEB 2.0 - TIỀN ĐỀ CỦA CLOUD COMPUTING
       ============================ */
    {
      id: "cloud-ch1-s6",
      roman: "VI",
      title: "Web 2.0 - Tiền đề của Cloud Computing",
      subsections: [
        {
          id: "cloud-ch1-s6-1-web2-evolution",
          number: "6.1",
          title: "Bước chuyển dịch từ Web 1.0 sang Web 2.0 và vai trò đối với Cloud",
          parts: [
            {
              id: "cloud-ch1-s6-1-p1",
              label: "TIỀN ĐỀ CÔNG NGHỆ",
              title: "So sánh đối chiếu Web 1.0 vs Web 2.0 & Bệ phóng cho SaaS",
              content: [
                {
                  type: "paragraph",
                  text: "Sự bùng nổ của Điện toán đám mây, đặc biệt là mô hình Phần mềm Dịch vụ (SaaS), chịu ảnh hưởng trực tiếp từ cuộc cách mạng <strong>Web 2.0</strong> diễn ra vào đầu thập niên 2000s. Web 2.0 đã chuyển đổi căn bản cách thức con người tương tác với không gian mạng:"
                },
                {
                  type: "web1-vs-web2-viewer"
                },
                {
                  type: "table",
                  headers: ["Tiêu chí so sánh", "Web 1.0 (Thập niên 1990s)", "Web 2.0 (Từ đầu 2000s đến nay)"],
                  rows: [
                    ["Bản chất tương tác", "Web tĩnh, đọc một chiều (Read-Only Web)", "Web tương tác 2 chiều (Read-Write Web)"],
                    ["Vai trò người dùng", "Người tiêu thụ thụ động (Passive Consumer)", "Đồng sáng tạo nội dung (Prosumer / Creator)"],
                    ["Nguồn gốc nội dung", "Webmaster & Doanh nghiệp độc quyền biên soạn", "Nội dung do người dùng tạo (User-Generated Content - UGC)"],
                    ["Công nghệ nền tảng", "HTML tĩnh, bảng biểu, ảnh tĩnh, làm mới toàn trang", "AJAX, JavaScript, CSS3, DOM động, WebSockets"],
                    ["Ứng dụng tiêu biểu", "Personal homepage, Britannica Online, danh mục Yahoo!", "Facebook, Wikipedia, YouTube, Google Docs, Figma"]
                  ]
                },
                {
                  type: "highlight",
                  text: "<strong>4 Đặc điểm đột phá của Web 2.0:</strong> (1) <em>User interaction</em> — Tương tác tức thì giữa người dùng và ứng dụng; (2) <em>Social networking</em> — Mạng xã hội kết nối cộng đồng toàn cầu; (3) <em>Online collaboration</em> — Cộng tác làm việc trực tuyến đồng thời; (4) <em>User-Generated Content (UGC)</em> — Dữ liệu phong phú do chính người dùng sản xuất và chia sẻ."
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "📌 Cần nhớ trọng tâm thi cử",
                  text: "Web 2.0 chính là <strong>tiền đề công nghệ (Precursor)</strong> cho sự ra đời của Cloud Computing: Nhờ biến trình duyệt web thành một nền tảng thực thi ứng dụng phong phú (Rich Internet Application), Web 2.0 mở đường trực tiếp cho mô hình <strong>SaaS (Software as a Service)</strong> phát triển rực rỡ."
                },
                {
                  type: "micro-quiz",
                  question: "Đặc điểm nào sau đây KHÔNG PHẢI là đặc tính đột phá phân biệt Web 2.0 với thế hệ Web 1.0 trước đó?",
                  options: [
                    "Nội dung do chính người dùng tạo và đóng góp (User-Generated Content)",
                    "Trang web chỉ hiển thị văn bản tĩnh đọc một chiều do Webmaster quản trị",
                    "Khả năng tương tác đa chiều giữa người dùng và ứng dụng web",
                    "Mạng xã hội và khả năng cộng tác trực tuyến nhiều người đồng thời"
                  ],
                  answerIndex: 1,
                  explanation: "Trang web tĩnh đọc một chiều (Read-Only) do Webmaster quản trị là đặc trưng thuần túy của Web 1.0. Web 2.0 là kỷ nguyên của tương tác 2 chiều (Read-Write) và UGC.",
                  hint: "Tìm đặc điểm của thời kỳ Internet sơ khai thập niên 1990."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VII: VÍ DỤ THỰC TẾ & MA TRẬN THUẬT NGỮ CỐT LÕI
       ============================ */
    {
      id: "cloud-ch1-s7",
      roman: "VII",
      title: "Ví dụ thực tế & Ma trận thuật ngữ cốt lõi (Case Studies & Core Concepts)",
      subsections: [
        {
          id: "cloud-ch1-s7-1-case-studies",
          number: "7.1",
          title: "Hệ sinh thái Google Cloud & Amazon Web Services (AWS)",
          parts: [
            {
              id: "cloud-ch1-s7-1-p1",
              label: "CASE STUDY",
              title: "Google Cloud (Gmail, Google Docs) & AWS (High Reliability, Auto Scaling)",
              content: [
                {
                  type: "paragraph",
                  text: "Để hiểu rõ bản chất vận hành của điện toán đám mây trong thực tế, giáo trình phân tích sâu hai hệ sinh thái đám mây tiêu biểu nhất toàn cầu: <strong>Google Cloud</strong> (đại diện xuất sắc cho SaaS văn phòng) và <strong>Amazon Web Services (AWS)</strong> (người dẫn đầu thị trường IaaS/PaaS):"
                },
                {
                  type: "table",
                  headers: ["Nền tảng / Dịch vụ", "Loại hình đám mây", "Đặc tính vận hành & Ưu điểm cốt lõi"],
                  rows: [
                    ["Google Gmail", "SaaS (Ứng dụng)", "• Truy cập dễ dàng (Easy access) từ mọi thiết bị qua web/app.\n• Tự động đồng bộ (Realtime sync) thư từ, nhãn mác tức thì.\n• Tính năng đa dạng: Tìm kiếm siêu tốc, AI lọc spam, tích hợp Drive."],
                    ["Google Docs", "SaaS (Cộng tác)", "• Tiết kiệm chi phí (Cost savings) bản quyền phần mềm văn phòng.\n• Tự động lưu và đồng bộ tức thời từng ký tự gõ phím.\n• Dễ dàng chia sẻ (Easy sharing) và phân quyền chỉnh sửa linh hoạt."],
                    ["AWS Compute & Storage", "IaaS / PaaS (Hạ tầng)", "• Cung cấp máy chủ ảo hóa linh hoạt (Virtual servers - EC2).\n• Lưu trữ đối tượng dung lượng không giới hạn (Amazon S3).\n• Cơ chế co giãn tự động (Auto Scaling) & Chi phí theo sử dụng (Pay-per-use)."]
                  ]
                },
                {
                  type: "aws-reliability-auto-scaling"
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "📌 Cần nhớ trọng tâm thi cử: 3 Lợi ích của AWS & Độ tin cậy (High Reliability)",
                  text: "AWS mang lại 3 lợi ích vượt trội: (1) <strong>Khả năng mở rộng (Scalability)</strong>; (2) <strong>Tiết kiệm chi phí (Cost savings)</strong>; (3) <strong>Độ tin cậy cao (High reliability)</strong>. Độ tin cậy cao của AWS đạt được nhờ <strong>Cơ chế sao chép dữ liệu (Data Replication)</strong> và <strong>Dự phòng dư thừa (Redundancy)</strong> đa vùng AZ ➔ Mang lại <strong>Khả năng chịu lỗi (Fault Tolerance)</strong> và <strong>Tính sẵn sàng cao (High Availability)</strong>."
                },
                {
                  type: "micro-quiz",
                  question: "Trong kiến trúc hạ tầng của Amazon Web Services (AWS), cơ chế cốt lõi nào giúp hệ thống đạt được Khả năng chịu lỗi (Fault Tolerance) và Độ sẵn sàng cao (High Availability)?",
                  options: [
                    "Chỉ lưu trữ dữ liệu trên duy nhất 1 cụm ổ cứng thể rắn SSD cao cấp",
                    "Cơ chế sao chép dữ liệu (Data Replication) và Dự phòng dư thừa (Redundancy) đa vùng",
                    "Yêu cầu người dùng tự động sao lưu dữ liệu thủ công về máy trạm hàng tuần",
                    "Tắt toàn bộ hệ thống máy chủ vào ban đêm để bảo trì định kỳ tránh lỗi"
                  ],
                  answerIndex: 1,
                  explanation: "AWS đạt được Fault Tolerance và High Availability nhờ cơ chế Sao chép dữ liệu (Data Replication) đồng bộ và Dự phòng phần cứng dư thừa (Redundancy) trải rộng trên nhiều Vùng sẵn sàng (Availability Zones) độc lập.",
                  hint: "Tìm cơ chế nhân bản dữ liệu đa trung tâm dữ liệu độc lập."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch1-s7-2-key-terms-summary",
          number: "7.2",
          title: "Ma trận 10 Từ khóa cốt lõi & 7 Điểm chốt thi Chương 1",
          parts: [
            {
              id: "cloud-ch1-s7-2-p1",
              label: "TỔNG KẾT & ÔN THI",
              title: "Bảng tra cứu 10 thuật ngữ nền móng và 7 điểm vàng ghi nhớ",
              content: [
                {
                  type: "paragraph",
                  text: "Dưới đây là bảng ma trận tổng hợp <strong>10 thuật ngữ cốt lõi (Master Key Terms Matrix)</strong> có tần suất xuất hiện cao nhất trong các đề thi và phỏng vấn chuyên môn, tích hợp bộ lọc và chế độ tự kiểm tra kiến thức:"
                },
                {
                  type: "cloud-master-key-terms-matrix"
                },
                {
                  type: "callout",
                  variant: "success",
                  title: "⚡ 7 ĐIỂM VÀNG GHI NHỚ NHANH TRƯỚC KHI BƯỚC VÀO PHÒNG THI",
                  text: "1. <strong>Bản chất:</strong> Cloud Computing là mô hình chia sẻ tài nguyên IT qua mạng theo nhu cầu, thanh toán Pay-as-you-go.\n2. <strong>3 Mốc lịch sử:</strong> 1960s (Timesharing) ➔ 1990s (Internet bùng nổ, thuật ngữ do Ramesh Chellappa đặt năm 1997) ➔ 2000s (Modern Cloud với AWS & Salesforce).\n3. <strong>5 Đặc tính NIST:</strong> On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, Measured service.\n4. <strong>4 Mô hình triển khai:</strong> Public Cloud (rẻ, đại chúng), Private Cloud (riêng tư, bảo mật), Community Cloud (cộng đồng chung mục tiêu), Hybrid Cloud (lai linh hoạt).\n5. <strong>3 Mô hình dịch vụ SPI:</strong> IaaS ('Migrate to it'), PaaS ('Build on it'), SaaS ('Consume it') cùng ma trận trách nhiệm chung Shared Responsibility.\n6. <strong>Web 2.0:</strong> Nền web tương tác 2 chiều (UGC, Online collaboration), là tiền đề trực tiếp đưa mô hình SaaS lên đỉnh cao.\n7. <strong>AWS & Độ tin cậy:</strong> Đạt High Reliability nhờ Data Replication & Redundancy đa AZ ➔ Đảm bảo Fault Tolerance và High Availability; Thách thức lớn nhất là Security."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

/* ============================================================
   TỪ ĐIỂN THUẬT NGỮ SONG NGỮ (GLOSSARY) CHO CHƯƠNG 1
   ============================================================ */
export const cloudChapter1Glossary = [
  {
    id: "g-cloud-computing",
    termVi: "Điện toán đám mây",
    termEn: "Cloud Computing",
    abbreviation: "CC",
    definition: "Mô hình cung cấp dịch vụ IT qua Internet, cho phép truy cập tài nguyên tính toán theo nhu cầu mà không cần đầu tư hạ tầng vật lý tại chỗ.",
    subsectionId: "cloud-ch1-s2-1-definition-arch"
  },
  {
    id: "g-timesharing",
    termVi: "Chia sẻ thời gian",
    termEn: "Timesharing",
    abbreviation: "Timesharing",
    definition: "Kỹ thuật chia sẻ tài nguyên tính toán của máy tính lớn (Mainframe) cho nhiều người dùng cùng lúc xuất hiện từ thập niên 1960s.",
    subsectionId: "cloud-ch1-s1-2-history"
  },
  {
    id: "g-virtualization",
    termVi: "Ảo hóa",
    termEn: "Virtualization",
    abbreviation: "Hypervisor",
    definition: "Công nghệ phân tách tài nguyên phần cứng vật lý thành nhiều môi trường ảo độc lập qua tầng trừu tượng Hypervisor, nền móng của Cloud.",
    subsectionId: "cloud-ch1-s4-2-platform-components"
  },
  {
    id: "g-on-demand",
    termVi: "Tự phục vụ theo nhu cầu",
    termEn: "On-demand self-service",
    abbreviation: "On-Demand",
    definition: "Đặc tính NIST cho phép người dùng tự cấp phát tài nguyên tính toán tự động qua web/API mà không cần can thiệp thủ công từ nhân viên.",
    subsectionId: "cloud-ch1-s2-2-nist-features"
  },
  {
    id: "g-broad-network",
    termVi: "Truy cập mạng diện rộng",
    termEn: "Broad network access",
    abbreviation: "Anywhere Access",
    definition: "Đặc tính NIST cho phép truy cập tài nguyên từ mọi thiết bị (laptop, tablet, phone) qua các giao thức mạng tiêu chuẩn toàn cầu.",
    subsectionId: "cloud-ch1-s2-2-nist-features"
  },
  {
    id: "g-rapid-elasticity",
    termVi: "Khả năng co giãn nhanh",
    termEn: "Rapid elasticity",
    abbreviation: "Elasticity",
    definition: "Đặc tính NIST cho phép tự động mở rộng hoặc thu hồi tài nguyên tính toán tức thì theo tải sử dụng thực tế (liên quan tới Scalability).",
    subsectionId: "cloud-ch1-s2-2-nist-features"
  },
  {
    id: "g-resource-pooling",
    termVi: "Chia sẻ tài nguyên dùng chung",
    termEn: "Resource pooling",
    abbreviation: "Pooling",
    definition: "Mô hình gom tài nguyên vật lý để phục vụ đồng thời nhiều khách hàng (Multi-tenancy) với khả năng phân bổ động độc lập vị trí.",
    subsectionId: "cloud-ch1-s2-2-nist-features"
  },
  {
    id: "g-measured-service",
    termVi: "Dịch vụ đo lường được",
    termEn: "Measured service",
    abbreviation: "Pay-as-you-go",
    definition: "Hệ thống tự động giám sát, đo đếm mức sử dụng tài nguyên để tính cước minh bạch (trả tiền theo mức sử dụng thực tế).",
    subsectionId: "cloud-ch1-s2-2-nist-features"
  },
  {
    id: "g-private-cloud",
    termVi: "Đám mây riêng",
    termEn: "Private Cloud",
    abbreviation: "Private Cloud",
    definition: "Mô hình đám mây do duy nhất một tổ chức sở hữu và vận hành, bảo mật cao nhất, kiểm soát toàn diện nhưng chi phí đầu tư lớn.",
    subsectionId: "cloud-ch1-s3-1-deployment-models"
  },
  {
    id: "g-public-cloud",
    termVi: "Đám mây công cộng",
    termEn: "Public Cloud",
    abbreviation: "Public Cloud",
    definition: "Mô hình đám mây do nhà cung cấp bên thứ ba (AWS, Azure, GCP) vận hành, phục vụ đại chúng với chi phí thấp và độ co giãn vô hạn.",
    subsectionId: "cloud-ch1-s3-1-deployment-models"
  },
  {
    id: "g-community-cloud",
    termVi: "Đám mây cộng đồng",
    termEn: "Community Cloud",
    abbreviation: "Community Cloud",
    definition: "Mô hình đám mây do nhiều tổ chức có chung mục đích/sứ mệnh (trường ĐH, viện nghiên cứu) cùng xây dựng và chia sẻ tài nguyên.",
    subsectionId: "cloud-ch1-s3-1-deployment-models"
  },
  {
    id: "g-hybrid-cloud",
    termVi: "Đám mây lai",
    termEn: "Hybrid Cloud",
    abbreviation: "Hybrid Cloud",
    definition: "Mô hình đám mây kết hợp từ 2 mô hình khác nhau trở lên (Private + Public), mang lại tính linh hoạt cao nhưng quản lý phức tạp.",
    subsectionId: "cloud-ch1-s3-1-deployment-models"
  },
  {
    id: "g-multi-cloud",
    termVi: "Đa đám mây",
    termEn: "Multi-Cloud",
    abbreviation: "Multi-Cloud",
    definition: "Chiến lược sử dụng đồng thời nhiều nhà cung cấp Cloud độc lập (AWS, Azure, Google Cloud) nhằm tránh rủi ro Vendor Lock-in.",
    subsectionId: "cloud-ch1-s3-1-deployment-models"
  },
  {
    id: "g-iaas",
    termVi: "Hạ tầng như một dịch vụ",
    termEn: "Infrastructure as a Service",
    abbreviation: "IaaS",
    definition: "Cung cấp tài nguyên tính toán cơ bản (máy chủ ảo, lưu trữ, mạng) theo nhu cầu (on-demand), khẩu quyết: 'MIGRATE TO IT'.",
    subsectionId: "cloud-ch1-s3-2-service-models"
  },
  {
    id: "g-paas",
    termVi: "Nền tảng như một dịch vụ",
    termEn: "Platform as a Service",
    abbreviation: "PaaS",
    definition: "Cung cấp nền tảng phát triển để viết, chạy và quản lý ứng dụng mà không cần quản lý hạ tầng bên dưới, khẩu quyết: 'BUILD ON IT'.",
    subsectionId: "cloud-ch1-s3-2-service-models"
  },
  {
    id: "g-saas",
    termVi: "Phần mềm như một dịch vụ",
    termEn: "Software as a Service",
    abbreviation: "SaaS",
    definition: "Cung cấp phần mềm hoàn chỉnh chạy trên đám mây dùng qua trình duyệt, không cần cài đặt hay bảo trì, khẩu quyết: 'CONSUME IT'.",
    subsectionId: "cloud-ch1-s3-2-service-models"
  },
  {
    id: "g-openstack",
    termVi: "Nền tảng Cloud mã nguồn mở OpenStack",
    termEn: "OpenStack Cloud Platform",
    abbreviation: "OpenStack",
    definition: "Bộ công cụ mã nguồn mở phổ biến nhất để quản lý và xây dựng đám mây Private và Public Cloud cho compute, storage, networking.",
    subsectionId: "cloud-ch1-s4-1-management-tools"
  },
  {
    id: "g-foundation-layer",
    termVi: "Lớp nền tảng",
    termEn: "Foundation Layer",
    abbreviation: "Foundation",
    definition: "Lớp dưới cùng trong kiến trúc 3 lớp của Cloud, gắn liền trực tiếp với phần cứng máy chủ và công nghệ Ảo hóa (Virtualization).",
    subsectionId: "cloud-ch1-s4-2-platform-components"
  },
  {
    id: "g-web1",
    termVi: "Web 1.0 (Web tĩnh)",
    termEn: "Web 1.0 (Read-Only Web)",
    abbreviation: "Web 1.0",
    definition: "Thế hệ Web sơ khai thập niên 1990s chỉ cho phép đọc thông tin một chiều do Webmaster xuất bản, không có tương tác người dùng.",
    subsectionId: "cloud-ch1-s6-1-web2-evolution"
  },
  {
    id: "g-web2",
    termVi: "Web 2.0 (Web tương tác)",
    termEn: "Web 2.0 (Read-Write Web)",
    abbreviation: "Web 2.0",
    definition: "Thế hệ Web tương tác 2 chiều phát triển từ đầu 2000s, đặc trưng bởi mạng xã hội, cộng tác thời gian thực và nội dung người dùng tạo (UGC).",
    subsectionId: "cloud-ch1-s6-1-web2-evolution"
  },
  {
    id: "g-ugc",
    termVi: "Nội dung do người dùng tạo",
    termEn: "User-Generated Content",
    abbreviation: "UGC",
    definition: "Mọi dạng dữ liệu (văn bản, video, bình luận, đánh giá) được sáng tạo và chia sẻ công khai bởi người dùng cuối trên nền tảng Web 2.0.",
    subsectionId: "cloud-ch1-s6-1-web2-evolution"
  },
  {
    id: "g-fault-tolerance",
    termVi: "Khả năng chịu lỗi",
    termEn: "Fault Tolerance",
    abbreviation: "Zero Downtime",
    definition: "Khả năng hệ thống tiếp tục vận hành liên tục không gián đoạn ngay cả khi một hoặc nhiều thành phần phần cứng/mạng bị hỏng hóc hoàn toàn.",
    subsectionId: "cloud-ch1-s7-1-case-studies"
  },
  {
    id: "g-high-availability",
    termVi: "Tính sẵn sàng cao",
    termEn: "High Availability",
    abbreviation: "HA (99.9%+)",
    definition: "Cam kết hệ thống luôn hoạt động ổn định và đáp ứng yêu cầu người dùng đạt tỷ lệ phần trăm thời gian uptime theo thỏa thuận SLA.",
    subsectionId: "cloud-ch1-s7-1-case-studies"
  },
  {
    id: "g-data-replication",
    termVi: "Sao chép dữ liệu",
    termEn: "Data Replication",
    abbreviation: "Replication",
    definition: "Kỹ thuật nhân bản dữ liệu tự động sang nhiều ổ cứng, cụm máy chủ hoặc trung tâm dữ liệu độc lập (AZs) để chống mất mát dữ liệu.",
    subsectionId: "cloud-ch1-s7-1-case-studies"
  },
  {
    id: "g-auto-scaling",
    termVi: "Tự động co giãn",
    termEn: "Auto Scaling",
    abbreviation: "Auto Scaling",
    definition: "Cơ chế đám mây tự động tăng hoặc giảm số lượng máy chủ/tài nguyên theo ngưỡng tải thực tế (CPU, RAM, requests) nhằm tối ưu chi phí.",
    subsectionId: "cloud-ch1-s7-1-case-studies"
  }
];

/* ============================================================
   THẺ GHI NHỚ THUẬT NGỮ (FLASHCARDS SM-2) CHO CHƯƠNG 1
   ============================================================ */
export const cloudChapter1Flashcards = [
  {
    id: "fc-c1-01",
    front: "Ba giai đoạn phát triển lịch sử lớn của Cloud Computing là gì?",
    back: "1. Thập niên 1960s (Timesharing)\n2. Thập niên 1990s (The Rise of the Internet)\n3. Thập niên 2000s đến nay (Modern Cloud Computing)",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch1",
    subsectionId: "cloud-ch1-s1-2-history"
  },
  {
    id: "fc-c1-02",
    front: "Ai là người đầu tiên đặt tên và đưa thuật ngữ 'Cloud Computing' vào bài giảng học thuật năm 1997?",
    back: "Giáo sư Ramesh Chellappa (năm 1997 trong bài giảng tại Đại học Texas).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch1",
    subsectionId: "cloud-ch1-s1-2-history"
  },
  {
    id: "fc-c1-03",
    front: "Kể tên 5 đặc tính cốt lõi của Cloud Computing theo mô hình chuẩn NIST?",
    back: "1. On-demand self-service (Tự phục vụ theo nhu cầu)\n2. Broad network access (Truy cập mạng diện rộng)\n3. Resource pooling (Chia sẻ tài nguyên dùng chung)\n4. Rapid elasticity (Khả năng co giãn nhanh)\n5. Measured service (Dịch vụ đo lường được)",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch1",
    subsectionId: "cloud-ch1-s2-2-nist-features"
  },
  {
    id: "fc-c1-04",
    front: "Phân biệt 5 mô hình triển khai (Deployment Models) của Cloud Computing?",
    back: "• Private Cloud: Riêng 1 tổ chức (bảo mật cao, chi phí cao)\n• Public Cloud: Đại chúng dùng chung (rẻ, co giãn vô hạn)\n• Community Cloud: Nhóm tổ chức chung mục đích cùng chia sẻ\n• Hybrid Cloud: Lai kết hợp ≥ 2 mô hình\n• Multi-Cloud: Dùng nhiều nhà cung cấp độc lập (tránh vendor lock-in)",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch1",
    subsectionId: "cloud-ch1-s3-1-deployment-models"
  },
  {
    id: "fc-c1-05",
    front: "Khẩu quyết quản lý tương ứng với 3 mô hình dịch vụ IaaS, PaaS, SaaS là gì?",
    back: "• SaaS ➔ 'CONSUME IT' (Tiêu thụ/Dùng phần mềm)\n• PaaS ➔ 'BUILD ON IT' (Xây dựng trên nền tảng)\n• IaaS ➔ 'MIGRATE TO IT' (Di chuyển hạ tầng lên)",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch1",
    subsectionId: "cloud-ch1-s3-2-service-models"
  },
  {
    id: "fc-c1-06",
    front: "Kể tên các công cụ quản lý Cloud Mã nguồn mở (Open-Source) và Thương mại (Commercial) tiêu biểu?",
    back: "• Mã nguồn mở: Apache CloudStack, Eucalyptus, OpenStack\n• Thương mại: Microsoft Hyper-V & System Center, VMware vCloud Director",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch1",
    subsectionId: "cloud-ch1-s4-1-management-tools"
  },
  {
    id: "fc-c1-07",
    front: "Kiến trúc 3 lớp nền tảng của Cloud (Platform Components) gồm những lớp nào từ dưới lên?",
    back: "1. Foundation layer (dưới cùng, gắn với Ảo hóa - Virtualization)\n2. Infrastructure services (ở giữa: Compute, Storage, Network)\n3. Application services (trên cùng: Phần mềm ứng dụng)",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch1",
    subsectionId: "cloud-ch1-s4-2-platform-components"
  },
  {
    id: "fc-c1-08",
    front: "Kể tên 5 thách thức lớn của Cloud Computing và cho biết đâu là thách thức số 1?",
    back: "1. Bảo mật (Security) — Mối bận tâm số 1 (Top Concern)\n2. Thiếu tài nguyên & nhân lực chuyên môn (Lack of resources/expertise)\n3. Quản trị hệ thống & chi phí (Governance)\n4. Tuân thủ pháp lý & quy định (Compliance - GDPR, HIPAA, Luật ANM)\n5. Quản lý đa đám mây (Managing Multi-Cloud)",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch1",
    subsectionId: "cloud-ch1-s5-1-challenges"
  },
  {
    id: "fc-c1-09",
    front: "Web 2.0 có 4 đặc điểm đột phá nào và đóng vai trò gì đối với Cloud Computing?",
    back: "• 4 Đặc điểm: User interaction, Social networking, Online collaboration, User-Generated Content (UGC).\n• Vai trò: Biến trình duyệt thành nền tảng ứng dụng phong phú (RIA), là tiền đề mở đường trực tiếp cho mô hình SaaS.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch1",
    subsectionId: "cloud-ch1-s6-1-web2-evolution"
  },
  {
    id: "fc-c1-10",
    front: "Nêu 3 ưu điểm vượt trội của Gmail và Google Docs trong mô hình SaaS?",
    back: "• Gmail: Truy cập dễ dàng (Easy access), Đồng bộ thời gian thực (Sync), Tính năng đa dạng (Lọc spam, Search mạnh).\n• Google Docs: Tiết kiệm chi phí bản quyền (Cost savings), Đồng bộ tức thời từng ký tự gõ, Dễ dàng chia sẻ (Easy sharing).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch1",
    subsectionId: "cloud-ch1-s7-1-case-studies"
  },
  {
    id: "fc-c1-11",
    front: "Nêu 3 lợi ích vượt trội của AWS và giải thích cơ chế giúp AWS đạt Độ tin cậy cao (High Reliability)?",
    back: "• 3 Lợi ích: Khả năng mở rộng (Scalability), Tiết kiệm chi phí (Cost savings), Độ tin cậy cao (High reliability).\n• Cơ chế: Nhờ Sao chép dữ liệu (Data Replication) và Dự phòng dư thừa (Redundancy) qua nhiều Availability Zones (AZs) ➔ Đạt Fault Tolerance và High Availability.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch1",
    subsectionId: "cloud-ch1-s7-1-case-studies"
  },
  {
    id: "fc-c1-12",
    front: "Phân biệt giữa High Availability (Tính sẵn sàng cao) và Fault Tolerance (Khả năng chịu lỗi)?",
    back: "• High Availability: Đảm bảo dịch vụ duy trì hoạt động với thời gian gián đoạn tối thiểu (cho phép failover vài giây).\n• Fault Tolerance: Hệ thống tiếp tục vận hành liên tục 100% không hề bị gián đoạn (Zero Downtime) ngay cả khi phần cứng bị hỏng hoàn toàn.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch1",
    subsectionId: "cloud-ch1-s7-1-case-studies"
  }
];
