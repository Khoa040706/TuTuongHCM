/* ============================================================
   GIÁO TRÌNH ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)
   Chương 4: Platform as a Service (PaaS)
   Biên soạn chuẩn học thuật theo tài liệu bài giảng chính thức
   Tích hợp chuẩn Micro-content & 8 Visualizers tương tác độc quyền
   ============================================================ */

export const cloudComputingChapter4 = {
  id: "cloud-ch4",
  title: "Chương 4",
  subtitle: "Platform as a Service (PaaS)",
  sections: [
    /* ============================
       MỤC ★: TỔNG QUAN CHƯƠNG (Hero Banner sẽ làm sau cùng)
       ============================ */
    {
      id: "cloud-ch4-s0",
      roman: "★",
      title: "Tổng quan chương: Platform as a Service (PaaS)",
      subsections: [
        {
          id: "cloud-ch4-s0-overview",
          number: "0",
          title: "Bản đồ kiến thức cốt lõi Chương 4",
          parts: [
            {
              id: "cloud-ch4-s0-p1",
              label: "★",
              title: "Tổng quan tri thức toàn chương",
              content: [
                {
                  type: "chapter4-hero-banner"
                },
                {
                  type: "highlight",
                  text: "Chương 4 nghiên cứu toàn diện mô hình Nền tảng như một Dịch vụ (Platform as a Service - PaaS): Định nghĩa cốt lõi nền tảng trung gian giữa IaaS và SaaS, 4 thành phần bắt buộc (Hệ điều hành, Môi trường phát triển, Cơ sở dữ liệu, Máy chủ web), ranh giới trách nhiệm chia sẻ (Developer chỉ quản lý 2 tầng: Applications & Data), tiến trình lịch sử 4 giai đoạn từ Heroku/GAE đến Kubernetes & Multi-cloud, 4 nhóm lợi ích vượt bậc (Chi phí, Linh hoạt, Tiết kiệm thời gian, Zero-Infra), 3 thách thức sống còn (Bảo mật, Khóa nhà cung cấp - Vendor Lock-in, Tương thích hệ thống cũ), khảo sát 4 gã khổng lồ thực tế (Google App Engine, Microsoft Azure, Red Hat OpenShift trên Kubernetes, IBM Cloud Foundry tích hợp Watson AI), 6 chiều giá trị doanh nghiệp ('Nhanh hơn – Rẻ hơn – Linh hoạt hơn – Hợp tác hơn – An toàn hơn – Đổi mới hơn'), tương lai Serverless FaaS (Scale-to-Zero, Millisecond Billing) và 6 tiêu chí trải nghiệm người dùng (PaaS UX)."
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Lộ trình học tập & Trung tâm chỉ huy Hero Banner",
                  text: "Bạn có thể sử dụng các tab chuyển đổi góc nhìn trên Hero Banner phía trên để quan sát Mặt cắt 4 tầng kiến trúc (X-Ray Stack), Lộ trình 4 chặng tiến trình, Ma trận trọng số đề thi (Bento Grid) hoặc nhấp vào 8 card Lab Hub để tự động cuộn trang mượt mà đến bài thực hành tương tác mong muốn."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC I: ĐỊNH NGHĨA & LỊCH SỬ PHÁT TRIỂN PAAS
       ============================ */
    {
      id: "cloud-ch4-s1",
      roman: "I",
      title: "Định nghĩa & Lịch sử phát triển PaaS",
      subsections: [
        {
          id: "cloud-ch4-s1-1-definition",
          number: "1.1",
          title: "Khái niệm cốt lõi & 4 Thành phần chính của PaaS",
          parts: [
            {
              id: "cloud-ch4-s1-1-p1",
              label: "1.1.1",
              title: "Bản chất học thuật của Platform as a Service",
              content: [
                {
                  type: "paragraph",
                  text: "Platform as a Service (PaaS) là mô hình dịch vụ điện toán đám mây trong đó nhà cung cấp dịch vụ cung cấp một nền tảng hoàn chỉnh bao gồm phần cứng, phần mềm và môi trường phát triển cho người dùng. Người dùng có thể phát triển, chạy và quản lý các ứng dụng mà không cần phải lo lắng về việc xây dựng, bảo trì hạ tầng vật lý hay cài đặt hệ điều hành bên dưới."
                },
                {
                  type: "highlight",
                  text: "Khẩu quyết cốt lõi: 'PaaS = Thuê nền tảng phát triển và vận hành'. Lập trình viên chỉ cần tập trung 100% vào Mã nguồn ứng dụng (Applications) và Dữ liệu (Data), toàn bộ các tầng kỹ thuật còn lại do nhà cung cấp đám mây tự động vận hành."
                },
                {
                  type: "paragraph",
                  text: "Theo tài liệu bài giảng chuẩn, một nền tảng PaaS hoàn chỉnh bắt buộc phải tích hợp đầy đủ 4 thành phần kỹ thuật cơ bản sau:"
                },
                {
                  type: "bullets",
                  items: [
                    "Hệ điều hành (Operating System): Cung cấp môi trường nền tảng để chạy các dịch vụ máy chủ, ứng dụng và công cụ quản trị (thường là Linux Alpine, Debian, RHEL hoặc Windows Server). Được nhà cung cấp vá lỗi hạt nhân tự động.",
                    "Môi trường phát triển (Development Environment): Bộ SDK, trình biên dịch, công cụ gỡ lỗi (debugger) và môi trường thực thi hỗ trợ đa dạng ngôn ngữ lập trình (Node.js, Python, Java, Go, .NET, Ruby, PHP) và tự động nhận diện buildpack.",
                    "Cơ sở dữ liệu (Database Management System): Hệ thống quản trị CSDL được cấu hình sẵn, kết nối trực tiếp với ứng dụng (PostgreSQL, MySQL, MongoDB, Redis). Tự động sao lưu dự phòng, nhân bản và phục hồi sau sự cố.",
                    "Máy chủ web (Web Server): Xử lý các yêu cầu HTTP/HTTPS từ người dùng, tích hợp cơ chế cân bằng tải thông minh (Load Balancer), tự động cấp phát và gia hạn chứng chỉ bảo mật SSL/TLS và định tuyến ngược (Reverse Proxy)."
                  ]
                },
                {
                  type: "table",
                  headers: ["Mô Hình Đám Mây", "Người Dùng Quản Lý", "Nhà Cung Cấp Quản Lý", "Ví Dụ Điển Hình"],
                  rows: [
                    ["On-Premise", "Quản lý toàn bộ 9 tầng (Phần cứng, Mạng, OS, DB, App...)", "Không có bên thứ ba can thiệp", "Phòng máy chủ riêng của công ty"],
                    ["IaaS", "OS, Middleware, Runtime, Data, Applications (5 tầng)", "Ảo hóa, Máy chủ vật lý, Lưu trữ, Mạng (4 tầng)", "AWS EC2, Google Compute Engine"],
                    ["PaaS", "CHỈ QUẢN LÝ 2 TẦNG: Applications & Data", "7 tầng: Hạ tầng + OS + Middleware + Runtime + Web Server + DB", "Google App Engine, Azure App Service, Heroku"],
                    ["SaaS", "Chỉ sử dụng phần mềm qua Web, không quản lý tầng nào", "Quản lý toàn bộ 100% hệ thống và ứng dụng", "Google Workspace, Salesforce, Microsoft 365"]
                  ]
                },
                {
                  type: "paas-architecture-stack-visualizer"
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "Trọng tâm trắc nghiệm: Ranh giới trách nhiệm chia sẻ",
                  text: "Câu hỏi kinh điển: 'Trong mô hình PaaS, trách nhiệm của nhà phát triển (Developer) là gì?' ➔ Đáp án đúng: Quản lý Ứng dụng (Applications) và Dữ liệu (Data). Không bao gồm việc cài đặt hay vá lỗi Hệ điều hành (OS)."
                },
                {
                  type: "micro-quiz",
                  question: "Theo chuẩn kiến trúc điện toán đám mây, trong mô hình PaaS nhà phát triển (Developer) chịu trách nhiệm quản lý những tầng công nghệ nào sau đây?",
                  options: [
                    "Chỉ chịu trách nhiệm quản lý Applications (Ứng dụng) và Data (Dữ liệu)",
                    "Chịu trách nhiệm quản lý toàn bộ Hệ điều hành (OS) và Mạng vật lý",
                    "Chịu trách nhiệm bảo trì máy chủ vật lý và hệ thống tản nhiệt phòng máy",
                    "Hoàn toàn không quản lý bất kỳ tầng nào tương tự như người dùng SaaS"
                  ],
                  answerIndex: 0,
                  explanation: "Trong mô hình PaaS, nhà cung cấp lo toàn bộ hạ tầng phần cứng, ảo hóa, hệ điều hành, runtime và máy chủ web. Nhà phát triển chỉ chịu trách nhiệm quản lý đúng 2 tầng trên cùng: Applications (Mã nguồn ứng dụng) và Data (Dữ liệu).",
                  hint: "Nhớ công thức: Dev = Apps + Data; Provider = 7 tầng còn lại."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch4-s1-2-history",
          number: "1.2",
          title: "Lịch sử tiến hóa 4 giai đoạn & 4 Động lực thúc đẩy",
          parts: [
            {
              id: "cloud-ch4-s1-2-p1",
              label: "1.2.1",
              title: "4 Giai đoạn phát triển của PaaS qua các thời kỳ",
              content: [
                {
                  type: "paragraph",
                  text: "Mô hình PaaS không xuất hiện ngẫu nhiên mà đã trải qua 4 giai đoạn tiến hóa mang tính bước ngoặt, từ những giải pháp thử nghiệm khái niệm ban đầu cho đến khi trở thành nền tảng điện toán đám mây cấp doanh nghiệp:"
                },
                {
                  type: "bullets",
                  items: [
                    "Giai đoạn 1 (Đầu những năm 2000): Xuất hiện các nền tảng PaaS đầu tiên trên thế giới như Heroku (2007) và Google App Engine - GAE (2008). Tính năng ban đầu rất đơn giản, chỉ hỗ trợ một ngôn ngữ duy nhất (Heroku chỉ hỗ trợ Ruby, GAE chỉ hỗ trợ Python), đóng vai trò chứng minh khái niệm 'Zero Server'.",
                    "Giai đoạn 2 (Cuối những năm 2000 - đầu 2010s): Sự tham gia của các ông lớn công nghệ toàn cầu (Microsoft Azure ra mắt 2010, AWS Elastic Beanstalk ra mắt 2011). Mở rộng hỗ trợ mạnh mẽ đa ngôn ngữ (Java, PHP, .NET, Node.js) và tích hợp các dịch vụ đám mây vệ tinh.",
                    "Giai đoạn 3 (Đầu những năm 2010): Tích hợp sâu rộng văn hóa DevOps và quy trình CI/CD (Tích hợp liên tục & Triển khai liên tục). Sự trỗi dậy của công nghệ container hóa sơ khai với Red Hat OpenShift và Cloud Foundry, cho phép tự động hóa hoàn toàn từ lệnh git push đến production.",
                    "Giai đoạn 4 (Giữa những năm 2010 đến nay): Mở rộng nền tảng đám mây đa dạng (Multi-cloud) và đám mây lai (Hybrid Cloud). Dịch vụ PaaS hiện đại tiến hóa lên kiến trúc điều phối container tiêu chuẩn công nghiệp dựa trên Kubernetes, tích hợp Microservices, Serverless và AI."
                  ]
                },
                {
                  type: "paragraph",
                  text: "Đồng thời, sự phát triển bùng nổ của PaaS được thúc đẩy bởi 4 yếu tố then chốt sau đây:"
                },
                {
                  type: "bullets",
                  items: [
                    "1. Nhu cầu phát triển ứng dụng tăng nhanh chóng: Cuộc cách mạng chuyển đổi số đòi hỏi doanh nghiệp phải rút ngắn thời gian đưa sản phẩm ra thị trường (Time-to-Market) tính bằng ngày thay vì hàng tháng.",
                    "2. Sự phát triển của tự động hóa và container hóa: Docker và Kubernetes giúp chuẩn hóa môi trường đóng gói, biến ứng dụng thành các khối độc lập có thể chạy nhất quán trên mọi hạ tầng.",
                    "3. Khả năng tích hợp công cụ và dịch vụ phong phú: Hệ sinh thái API, CSDL đám mây có sẵn và các tiện ích Add-on giúp lập trình viên mở rộng tính năng chỉ bằng 1 thao tác cấu hình.",
                    "4. Nhu cầu bảo mật, tuân thủ và độ tin cậy cấp doanh nghiệp: Các quy định khắt khe về an toàn thông tin (GDPR, ISO 27001) và yêu cầu cam kết SLA cao thúc đẩy doanh nghiệp chuyển sang các nhà cung cấp PaaS uy tín."
                  ]
                },
                {
                  type: "paas-evolution-timeline"
                },
                {
                  type: "micro-quiz",
                  question: "Hai nền tảng PaaS tiên phong ra đời trong Giai đoạn 1 (đầu những năm 2000) đóng vai trò chứng minh khái niệm (Proof of Concept) là những nền tảng nào?",
                  options: [
                    "Heroku (2007) và Google App Engine - GAE (2008)",
                    "Microsoft Azure (2010) và AWS Elastic Beanstalk (2011)",
                    "Red Hat OpenShift (2011) và Cloud Foundry (2011)",
                    "Docker Swarm (2014) và Google Kubernetes Engine (2015)"
                  ],
                  answerIndex: 0,
                  explanation: "Heroku (ra mắt 2007 hỗ trợ Ruby) và Google App Engine (ra mắt 2008 hỗ trợ Python) là hai đại diện tiên phong tiêu biểu nhất của Giai đoạn 1, mở đầu cho kỷ nguyên phát triển ứng dụng không cần quản trị máy chủ.",
                  hint: "Nhớ 2 cái tên khai sinh ra thị trường PaaS: Heroku và GAE."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC II: LỢI ÍCH CỦA PAAS
       ============================ */
    {
      id: "cloud-ch4-s2",
      roman: "II",
      title: "Lợi ích cốt lõi của PaaS",
      subsections: [
        {
          id: "cloud-ch4-s2-1-core-benefits",
          number: "2.1",
          title: "4 Nhóm lợi ích: Chi phí, Linh hoạt, Thời gian & Quản lý hạ tầng",
          parts: [
            {
              id: "cloud-ch4-s2-1-p1",
              label: "2.1.1",
              title: "Phân tích 4 nhóm lợi ích mang tính cách mạng của PaaS",
              content: [
                {
                  type: "paragraph",
                  text: "Theo tài liệu bài giảng, mô hình PaaS mang lại 4 nhóm lợi ích vượt bậc, giải quyết triệt để các rào cản truyền thống trong chu trình phát triển phần mềm (SDLC):"
                },
                {
                  type: "bullets",
                  items: [
                    "1. Tiết kiệm chi phí (Cost Savings): Giảm thiểu tối đa chi phí đầu tư ban đầu (CAPEX) cho phần cứng, thiết bị mạng và bản quyền phần mềm máy chủ. Áp dụng mô hình định giá linh hoạt trả theo mức sử dụng thực tế (Pay-as-you-go). Giảm thiểu chi phí nhân sự quản trị hệ thống và vận hành CNTT chuyên trách.",
                    "2. Tăng tính linh hoạt (Flexibility & Scalability): Cung cấp khả năng tự động co giãn tài nguyên (Auto-scaling) theo nhu cầu sử dụng thực tế mà không cần can thiệp thủ công. Hỗ trợ đa dạng ngôn ngữ lập trình (Java, Python, Ruby, .NET, Node.js, PHP, Go) và nhiều nền tảng công nghệ khác nhau trên cùng một hạ tầng. Thích ứng hoàn hảo với phương pháp phát triển Agile/Scrum linh hoạt.",
                    "3. Tiết kiệm thời gian (Save Time & Fast Time-to-Market): Tích hợp sẵn bộ công cụ phát triển, kiểm thử, gỡ lỗi (debugger) và dịch vụ quản trị. Tối ưu hóa chu trình phát triển phần mềm nhờ quy trình triển khai tự động chỉ bằng một cú nhấp chuột (One-Click Deployment) hoặc lệnh git push. Rút ngắn thời gian đưa sản phẩm ra thị trường từ nhiều tuần xuống còn vài phút.",
                    "4. Không cần quản lý hạ tầng (Zero Infrastructure Management): Nhà cung cấp dịch vụ đám mây chịu trách nhiệm bảo trì, cập nhật hệ điều hành và vá các lỗ hổng bảo mật định kỳ. Đảm bảo tính sẵn sàng cao, dự phòng phần cứng và sao lưu dữ liệu tự động. Nhà phát triển có thể tập trung 100% nguồn lực và thời gian vào việc viết mã và hoàn thiện nghiệp vụ ứng dụng."
                  ]
                },
                {
                  type: "paas-benefits-speedometer"
                },
                {
                  type: "callout",
                  variant: "accent",
                  title: "Điểm nhấn thi cử: Tính năng One-Click Deployment",
                  text: "Quy trình CI/CD tích hợp trong PaaS cho phép mã nguồn sau khi kiểm thử tự động (Unit test, Integration test) sẽ được đóng gói container và đưa thẳng lên môi trường live mà không gây gián đoạn dịch vụ (Zero-Downtime Rolling Update)."
                },
                {
                  type: "micro-quiz",
                  question: "Lợi ích lớn nhất của việc 'Không cần quản lý hạ tầng' (Zero Infra Management) trong mô hình PaaS đối với các kỹ sư phần mềm là gì?",
                  options: [
                    "Lập trình viên có thể tập trung 100% vào nghiệp vụ và mã nguồn mà không bận tâm vá lỗi OS hay bảo trì phần cứng",
                    "Doanh nghiệp không còn phải trả bất kỳ khoản chi phí thuê bao nào cho các dịch vụ đám mây",
                    "Lập trình viên được toàn quyền can thiệp vào mã nguồn hạt nhân (Kernel) của hệ điều hành máy chủ",
                    "Hệ thống sẽ hoàn toàn miễn nhiễm với mọi loại tấn công từ chối dịch vụ (DDoS) mà không cần cấu hình"
                  ],
                  answerIndex: 0,
                  explanation: "Bản chất của Zero Infra Management là giải phóng đội ngũ kỹ sư khỏi các gánh nặng bảo trì máy chủ, vá lỗi hệ điều hành và quản lý mạng vật lý, giúp họ dành trọn vẹn thời gian sáng tạo giá trị nghiệp vụ cho sản phẩm.",
                  hint: "Tập trung vào giá trị cốt lõi của lập trình viên: Viết Code & Nghiệp vụ."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC III: NHƯỢC ĐIỂM CỦA PAAS
       ============================ */
    {
      id: "cloud-ch4-s3",
      roman: "III",
      title: "Nhược điểm & Thách thức của PaaS",
      subsections: [
        {
          id: "cloud-ch4-s3-1-challenges",
          number: "3.1",
          title: "Bảo mật, Khóa nhà cung cấp (Vendor Lock-in) & Tính tương thích",
          parts: [
            {
              id: "cloud-ch4-s3-1-p1",
              label: "3.1.1",
              title: "3 Nhóm nhược điểm sống còn cần đánh đổi khi dùng PaaS",
              content: [
                {
                  type: "paragraph",
                  text: "Mặc dù mang lại sự tiện lợi vượt bậc, việc sử dụng PaaS cũng đồng nghĩa với việc doanh nghiệp phải chấp nhận từ bỏ một phần quyền kiểm soát sâu và đối mặt với 3 nhóm rủi ro kỹ thuật lớn sau đây:"
                },
                {
                  type: "bullets",
                  items: [
                    "1. Vấn đề bảo mật & kiểm soát (Security & Control Risks): Rủi ro liên quan đến việc dữ liệu và mã nguồn ứng dụng được lưu trữ trên môi trường đám mây công cộng (Public Cloud) dùng chung hạ tầng. Nhà phát triển bị hạn chế quyền kiểm soát đối với hạ tầng cơ sở và cấu hình an ninh tầng sâu (không có quyền root OS). Thách thức lớn trong việc tuân thủ các quy định bảo mật khắt khe của ngành tài chính, y tế hoặc chủ quyền dữ liệu quốc gia (GDPR, HIPAA).",
                    "2. Phụ thuộc nhà cung cấp (Vendor Lock-in): Khó khăn lớn khi muốn chuyển đổi ứng dụng sang nhà cung cấp dịch vụ PaaS khác do ứng dụng bị phụ thuộc vào các API, dịch vụ hoặc công nghệ độc quyền của nhà cung cấp ban đầu. Chi phí tiềm ẩn rất cao khi phải viết lại mã nguồn (Code Refactoring), chuyển đổi dữ liệu và trả phí xuất dữ liệu (Data Egress Fee).",
                    "3. Vấn đề tương thích (Compatibility Issues): Gặp nhiều trở ngại khi muốn di chuyển hoặc tích hợp các ứng dụng cũ (Legacy Applications) được thiết kế theo kiến trúc nguyên khối truyền thống lên PaaS. Sự thiếu nhất quán giữa các giao thức và tiêu chuẩn kỹ thuật giữa các nhà cung cấp khác nhau. Nguy cơ không tương thích ngược khi nhà cung cấp tự động nâng cấp phiên bản runtime."
                  ]
                },
                {
                  type: "vendor-lock-in-simulator"
                },
                {
                  type: "callout",
                  variant: "danger",
                  title: "Khái niệm sống còn: Hiện tượng Vendor Lock-in",
                  text: "Vendor Lock-in là tình huống mà khách hàng trở nên phụ thuộc hoàn toàn vào một nhà cung cấp duy nhất cho sản phẩm/dịch vụ, đến mức việc chuyển sang nhà cung cấp khác trở nên bất khả thi hoặc tốn kém chi phí và thời gian vượt quá khả năng chịu đựng của doanh nghiệp."
                },
                {
                  type: "micro-quiz",
                  question: "Đâu là nguyên nhân chính dẫn đến hiện tượng 'Khóa nhà cung cấp' (Vendor Lock-in) khi phát triển ứng dụng trên nền tảng PaaS?",
                  options: [
                    "Do ứng dụng sử dụng quá nhiều các API, SDK và dịch vụ CSDL độc quyền của nhà cung cấp đó",
                    "Do nhà cung cấp PaaS áp đặt mức phí thuê bao hàng tháng quá rẻ so với thị trường",
                    "Do tất cả các nhà cung cấp PaaS trên thế giới đều bắt buộc sử dụng chung một chuẩn Docker mở",
                    "Do người dùng không được phép truy cập Internet khi sử dụng các dịch vụ đám mây PaaS"
                  ],
                  answerIndex: 0,
                  explanation: "Khi mã nguồn ứng dụng gắn chặt với các thư viện SDK hoặc dịch vụ cơ sở dữ liệu độc quyền của một hãng (ví dụ Google Datastore API hoặc Azure Cosmos SDK), việc di dời sang hãng khác đòi hỏi viết lại hàng ngàn dòng code, gây ra Vendor Lock-in.",
                  hint: "Gắn liền với từ khóa 'API, SDK và công nghệ độc quyền'."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC IV: CÁC MÔ HÌNH PAAS THỰC TẾ
       ============================ */
    {
      id: "cloud-ch4-s4",
      roman: "IV",
      title: "Các mô hình PaaS tiêu biểu trong thực tế",
      subsections: [
        {
          id: "cloud-ch4-s4-1-real-world-titans",
          number: "4.1",
          title: "Khảo sát 4 gã khổng lồ: GAE, Azure, OpenShift & IBM Cloud Foundry",
          parts: [
            {
              id: "cloud-ch4-s4-1-p1",
              label: "4.1.1",
              title: "Chi tiết kỹ thuật 4 nền tảng PaaS hàng đầu thế giới",
              content: [
                {
                  type: "paragraph",
                  text: "Theo tài liệu giảng dạy, 4 nền tảng PaaS thực tế đại diện cho 4 trường phái công nghệ tiêu biểu nhất trên thế giới hiện nay bao gồm:"
                },
                {
                  type: "bullets",
                  items: [
                    "1. Google App Engine (GAE): Nền tảng PaaS tiên phong của Google Cloud. Cung cấp môi trường phát triển và lưu trữ web serverless hoàn chỉnh. Hỗ trợ nhiều ngôn ngữ (Java, Python, PHP, Go, Node.js, Ruby, .NET). Điểm nổi bật nhất là khả năng tự động co giãn cực nhanh (Instant Auto-scaling), quản lý phiên bản linh hoạt (Version Management) và phân tách lưu lượng (Traffic Splitting) phục vụ A/B Testing hiệu quả.",
                    "2. Microsoft Azure (Azure App Service): Nền tảng đám mây toàn diện kết hợp cả IaaS, PaaS và SaaS của Microsoft. Cung cấp các dịch vụ phát triển, triển khai và quản lý ứng dụng hiện đại. Tích hợp sâu sắc với hệ sinh thái công nghệ của Microsoft (.NET, C#, Visual Studio, GitHub Actions, Azure DevOps) và các CSDL mạnh mẽ (Azure SQL, Cosmos DB).",
                    "3. Red Hat OpenShift: Nền tảng PaaS mã nguồn mở cấp doanh nghiệp hàng đầu được xây dựng trực tiếp trên nền tảng KUBERNETES và Docker. Tập trung vào việc quản lý và điều phối các ứng dụng dựa trên container. Cung cấp công cụ CI/CD tích hợp, hỗ trợ triển khai trên môi trường đa đám mây (Multi-cloud) và đám mây lai (Hybrid Cloud), mang lại tính linh hoạt cao nhất và chống Vendor Lock-in.",
                    "4. IBM Cloud Foundry (IBM Cloud): Nền tảng PaaS mã nguồn mở của IBM dựa trên chuẩn công nghiệp Cloud Foundry. Cung cấp môi trường để xây dựng, triển khai và quản lý toàn bộ vòng đời của ứng dụng đám mây. Tích hợp độc quyền các công nghệ trí tuệ nhân tạo IBM Watson AI và dịch vụ phân tích dữ liệu lớn chuyên sâu cho khối tài chính, ngân hàng."
                  ]
                },
                {
                  type: "paas-titan-battlefield"
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Dấu hiệu nhận biết câu hỏi thi cử về 4 nền tảng PaaS",
                  text: "Nếu đề thi hỏi: 'PaaS xây dựng trên nền tảng KUBERNETES' ➔ Chọn ngay: Red Hat OpenShift. Nếu đề thi hỏi: 'PaaS tích hợp trí tuệ nhân tạo WATSON AI' ➔ Chọn ngay: IBM Cloud Foundry. Nếu đề thi hỏi: 'PaaS có tính năng Traffic Splitting & Version Management mạnh mẽ' ➔ Chọn ngay: Google App Engine."
                },
                {
                  type: "micro-quiz",
                  question: "Nền tảng PaaS cấp doanh nghiệp mã nguồn mở nào được xây dựng trực tiếp trên nền tảng điều phối container KUBERNETES?",
                  options: [
                    "Red Hat OpenShift",
                    "Google App Engine (GAE)",
                    "Microsoft Azure App Service",
                    "IBM Cloud Foundry"
                  ],
                  answerIndex: 0,
                  explanation: "Red Hat OpenShift là nền tảng PaaS nổi tiếng được xây dựng trực tiếp trên nền tảng Kubernetes và Docker, cung cấp giải pháp điều phối container và quản trị microservices cấp doanh nghiệp hàng đầu.",
                  hint: "Từ khóa định danh cốt lõi: Kubernetes & Red Hat."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC V: LỢI ÍCH ĐỐI VỚI DOANH NGHIỆP
       ============================ */
    {
      id: "cloud-ch4-s5",
      roman: "V",
      title: "Lợi ích chiến lược đối với Doanh nghiệp",
      subsections: [
        {
          id: "cloud-ch4-s5-1-business-values",
          number: "5.1",
          title: "6 Chiều giá trị: Nhanh hơn, Rẻ hơn, Linh hoạt hơn, Hợp tác hơn, An toàn hơn, Đổi mới hơn",
          parts: [
            {
              id: "cloud-ch4-s5-1-p1",
              label: "5.1.1",
              title: "Khẩu quyết 6 giá trị chiến lược nâng tầm doanh nghiệp",
              content: [
                {
                  type: "paragraph",
                  text: "Dưới góc độ quản trị chiến lược và tài chính doanh nghiệp, việc áp dụng PaaS mang lại 6 chiều giá trị cốt lõi, được tóm tắt bằng khẩu quyết thi cử kinh điển: 'Nhanh hơn – Rẻ hơn – Linh hoạt hơn – Hợp tác hơn – An toàn hơn – Đổi mới hơn':"
                },
                {
                  type: "bullets",
                  items: [
                    "1. Nhanh hơn (Tăng tốc độ phát triển ứng dụng): Rút ngắn đáng kể thời gian từ khi hình thành ý tưởng đến khi ra mắt sản phẩm (Time-to-Market). Các template có sẵn và môi trường dựng sẵn giúp xây dựng bản thử nghiệm (MVP) trong tích tắc.",
                    "2. Rẻ hơn (Tiết kiệm chi phí đầu tư): Loại bỏ các khoản đầu tư ban đầu khổng lồ cho hạ tầng máy chủ vật lý (chuyển đổi hoàn toàn từ CAPEX sang OPEX). Chỉ trả tiền cho tài nguyên thực dùng theo lưu lượng kinh doanh.",
                    "3. Linh hoạt hơn (Tăng tính linh hoạt và mở rộng): Hệ thống tự động co giãn tức thì để đáp ứng các đợt tăng vọt người dùng đột biến (Flash sale, chiến dịch quảng cáo) mà không bị nghẽn mạng.",
                    "4. Hợp tác hơn (Tăng cường cộng tác nhóm): Cung cấp môi trường phát triển chuẩn hóa, phân tán trên nền tảng đám mây. Giúp các lập trình viên làm việc từ xa (Remote) kết nối nhịp nhàng qua quy trình DevOps chung.",
                    "5. An toàn hơn (Cải thiện bảo mật và tuân thủ): Kế thừa hạ tầng an ninh mạng chuẩn quốc tế (ISO 27001, SOC 2, GDPR) từ các nhà cung cấp đám mây hàng đầu, giảm thiểu rủi ro bị tấn công bảo mật nội bộ.",
                    "6. Đổi mới hơn (Thúc đẩy đổi mới sáng tạo): Tạo điều kiện dễ dàng cho doanh nghiệp thử nghiệm các công nghệ tiên tiến nhất như Trí tuệ nhân tạo (AI/ML), Dữ liệu lớn (Big Data) và IoT mà không phải tự xây dựng từ con số không."
                  ]
                },
                {
                  type: "paas-enterprise-value-cockpit"
                },
                {
                  type: "micro-quiz",
                  question: "Theo tài liệu bài giảng, câu khẩu quyết nào sau đây tóm tắt đầy đủ 6 chiều giá trị chiến lược của PaaS đối với doanh nghiệp?",
                  options: [
                    "Nhanh hơn – Rẻ hơn – Linh hoạt hơn – Hợp tác hơn – An toàn hơn – Đổi mới hơn",
                    "Đắt hơn – Chậm hơn – Bảo mật tuyệt đối – Dễ dùng – Cục bộ – Độc quyền",
                    "Tự quản lý – Miễn phí – Không cần Internet – Đơn giản – Riêng tư – Cố định",
                    "Ảo hóa – Đa luồng – Phân tán – Mã hóa – Toàn cầu – Đồng bộ hóa"
                  ],
                  answerIndex: 0,
                  explanation: "Giáo trình chính thức đúc kết 6 lợi ích doanh nghiệp của PaaS thành 6 tính từ so sánh: Nhanh hơn, Rẻ hơn, Linh hoạt hơn, Hợp tác hơn, An toàn hơn, Đổi mới hơn.",
                  hint: "Khẩu quyết 6 chữ 'Hơn' kinh điển."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VI: TƯƠNG LAI CỦA PAAS
       ============================ */
    {
      id: "cloud-ch4-s6",
      roman: "VI",
      title: "Tương lai của PaaS & Kiến trúc Serverless FaaS",
      subsections: [
        {
          id: "cloud-ch4-s6-1-future-trends",
          number: "6.1",
          title: "7 Làn sóng công nghệ & Kiến trúc FaaS hướng sự kiện",
          parts: [
            {
              id: "cloud-ch4-s6-1-p1",
              label: "6.1.1",
              title: "Sự chuyển dịch lên Serverless FaaS và 7 xu hướng công nghệ tương lai",
              content: [
                {
                  type: "paragraph",
                  text: "Trong thập kỷ tới, ranh giới giữa PaaS truyền thống và các công nghệ điện toán thế hệ mới đang dần xóa nhòa. Theo bài giảng, tương lai của PaaS đang hội tụ vào 7 làn sóng công nghệ đột phá sau đây:"
                },
                {
                  type: "bullets",
                  items: [
                    "1. Tích hợp Trí tuệ Nhân tạo (AI) và Học máy (Machine Learning): Cung cấp các công cụ và dịch vụ AI/ML dựng sẵn (AI as a Service, LLM APIs, Computer Vision) để lập trình viên tích hợp trí thông minh vào app chỉ bằng vài dòng lệnh.",
                    "2. Kiến trúc Serverless và FaaS (Function as a Service): Lập trình viên không cần quan tâm đến cả vòng đời server lẫn process dài hạn. Ứng dụng được chia nhỏ thành các hàm độc lập thực thi hướng sự kiện (Event-driven), tự động co giãn về 0 bản sao (Scale-to-Zero) và tính phí theo mili-giây.",
                    "3. Đa nền tảng và Đám mây lai (Multi-cloud & Hybrid Cloud): Hỗ trợ triển khai và quản lý ứng dụng liền mạch trên nhiều nền tảng đám mây khác nhau để tránh Vendor Lock-in và tối ưu chi phí.",
                    "4. Tăng cường bảo mật và tuân thủ (DevSecOps): Tích hợp các giải pháp an ninh mạng tiên tiến, kiểm tra tự động mã nguồn, thực thi kiến trúc Không tin cậy (Zero Trust) và bảo vệ dữ liệu xuyên suốt.",
                    "5. Tối ưu hóa trải nghiệm nhà phát triển (DevEx): Cải tiến các công cụ dòng lệnh (CLI), môi trường phát triển đám mây (Cloud IDE) và tích hợp AI Copilot hỗ trợ viết mã trực tiếp.",
                    "6. Mở rộng quy mô toàn cầu (Global Edge Scaling): Tối ưu hóa hiệu năng bằng cách tự động phân phối ứng dụng ra hàng trăm điểm biên (Edge PoPs) trên toàn thế giới với độ trễ siêu thấp dưới 20ms.",
                    "7. Tích hợp IoT và Điện toán biên (Edge Computing): Kết nối và xử lý dữ liệu từ hàng triệu thiết bị thông minh ngay tại rìa mạng trước khi truyền về đám mây trung tâm."
                  ]
                },
                {
                  type: "serverless-faas-sandbox"
                },
                {
                  type: "callout",
                  variant: "accent",
                  title: "Phân biệt PaaS truyền thống vs Serverless FaaS",
                  text: "Trong PaaS truyền thống, bạn thuê container chạy liên tục 24/7 (vẫn tốn tiền khi không có ai truy cập). Trong Serverless FaaS, hàm chỉ được kích hoạt khi có sự kiện (HTTP request, queue message); khi không có yêu cầu, hệ thống tự co về 0 máy chủ (Scale-to-Zero) và bạn trả 0 đồng!"
                },
                {
                  type: "micro-quiz",
                  question: "Đặc tính kinh tế - kỹ thuật quan trọng nhất giúp kiến trúc Serverless FaaS tiết kiệm chi phí vượt trội so với PaaS truyền thống là gì?",
                  options: [
                    "Cơ chế tự động co giãn về 0 (Scale to Zero) khi không có yêu cầu và tính phí theo từng mili-giây thực thi",
                    "Doanh nghiệp được cung cấp máy chủ vật lý riêng biệt hoàn toàn miễn phí từ nhà cung cấp",
                    "Serverless FaaS chỉ cho phép chạy các phần mềm mã nguồn mở không có bản quyền thương mại",
                    "Toàn bộ dữ liệu của ứng dụng được lưu trữ vĩnh viễn trên bộ nhớ RAM mà không cần CSDL"
                  ],
                  answerIndex: 0,
                  explanation: "Bản chất vượt trội của Serverless FaaS là khả năng Scale to Zero: Khi không có khách truy cập, tài nguyên được giải phóng hoàn toàn và hóa đơn tiền điện toán là 0 đồng; khi có request, hệ thống tính phí chính xác theo mili-giây thực thi.",
                  hint: "Scale to Zero + Tính tiền theo mili-giây."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VII: TRẢI NGHIỆM NGƯỜI DÙNG & TỔNG KẾT TOÀN BÀI
       ============================ */
    {
      id: "cloud-ch4-s7",
      roman: "VII",
      title: "Trải nghiệm người dùng (UX) & Tổng kết toàn bài",
      subsections: [
        {
          id: "cloud-ch4-s7-1-ux-and-summary",
          number: "7.1",
          title: "6 Tiêu chí PaaS UX & Ma trận 8 trụ cột tri thức",
          parts: [
            {
              id: "cloud-ch4-s7-1-p1",
              label: "7.1.1",
              title: "6 Tiêu chí đánh giá trải nghiệm người dùng trên nền tảng PaaS",
              content: [
                {
                  type: "paragraph",
                  text: "Theo tài liệu bài giảng, một nền tảng PaaS chất lượng cao phải đáp ứng trọn vẹn 6 tiêu chí trải nghiệm người dùng (PaaS User Experience - UX) sau đây:"
                },
                {
                  type: "bullets",
                  items: [
                    "1. Hiệu năng ứng dụng (Performance): Tốc độ xử lý cao, độ trễ mạng thấp, tài nguyên tính toán phản hồi tức thời.",
                    "2. Tính khả dụng và độ tin cậy (High Availability & SLA): Đảm bảo uptime tối thiểu 99.9% đến 99.99%, tự động sao lưu và phục hồi khi xảy ra sự cố.",
                    "3. Khả năng tích hợp công cụ (Tool Integration): Tương thích mượt mà với các công cụ phát triển, kho mã nguồn Git, container Docker và giám sát APM.",
                    "4. Giao diện trực quan, dễ sử dụng (Intuitive UI/UX): Bảng điều khiển Web hiện đại, dễ thao tác quản trị, kèm bộ công cụ CLI mạnh mẽ.",
                    "5. Dịch vụ hỗ trợ kỹ thuật 24/7 (24/7 Technical Support): Hệ thống tài liệu hướng dẫn phong phú, cộng đồng đông đảo và đội ngũ kỹ thuật viên túc trực hỗ trợ giải quyết sự cố.",
                    "6. Bảo mật và quyền riêng tư (Security & Privacy Compliance): Bảo vệ dữ liệu người dùng nghiêm ngặt, tuân thủ các quy định pháp lý an toàn thông tin quốc tế."
                  ]
                },
                {
                  type: "paragraph",
                  text: "Dưới đây là bảng ma trận tổng kết 8 trụ cột kiến thức của toàn bộ Chương 4, kèm các từ khóa thi cử 'buộc phải thuộc':"
                },
                {
                  type: "chapter4-master-keyterms-matrix"
                },
                {
                  type: "micro-quiz",
                  question: "Trong 6 tiêu chí trải nghiệm người dùng của dịch vụ PaaS, tiêu chí nào bảo đảm hệ thống hoạt động liên tục với cam kết thời gian hoạt động (Uptime) từ 99.9% trở lên?",
                  options: [
                    "Tính khả dụng và độ tin cậy (High Availability & Reliability)",
                    "Khả năng tương thích với phần mềm kế thừa (Legacy Compatibility)",
                    "Mức độ độc quyền của bộ công cụ phát triển phần mềm (SDK Exclusivity)",
                    "Thời gian đưa sản phẩm ra thị trường của nhà cung cấp (Time-to-Market)"
                  ],
                  answerIndex: 0,
                  explanation: "Tính khả dụng và độ tin cậy (High Availability) là tiêu chí cam kết hệ thống luôn sẵn sàng phục vụ với tỷ lệ uptime đạt từ 99.9% đến 99.99%, kèm cơ chế tự động chuyển đổi dự phòng khi máy chủ vật lý gặp sự cố.",
                  hint: "Gắn liền với từ khóa 'Uptime 99.9% và độ tin cậy'."
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
   TỪ ĐIỂN THUẬT NGỮ CHUYÊN SÂU CHƯƠNG 4 (24 TERMS)
   Song ngữ Anh - Việt chuẩn mực điện toán đám mây
   ============================================================ */
export const cloudChapter4Glossary = [
  {
    id: "g4-paas",
    termVi: "Nền tảng như một Dịch vụ",
    termEn: "Platform as a Service",
    abbreviation: "PaaS",
    definition: "Mô hình dịch vụ điện toán đám mây cung cấp một nền tảng hoàn chỉnh bao gồm phần cứng, phần mềm, môi trường thực thi để lập trình viên phát triển, chạy và quản lý ứng dụng mà không cần lo lắng về hạ tầng vật lý bên dưới.",
    subsectionId: "cloud-ch4-s1-1-definition"
  },
  {
    id: "g4-os",
    termVi: "Hệ Điều Hành",
    termEn: "Operating System",
    abbreviation: "OS",
    definition: "Thành phần phần mềm nền tảng của PaaS (thường là Linux hoặc Windows Server) được cấu hình hóa và tự động vá lỗi bảo mật hạt nhân bởi nhà cung cấp đám mây.",
    subsectionId: "cloud-ch4-s1-1-definition"
  },
  {
    id: "g4-dev-env",
    termVi: "Môi Trường Phát Triển",
    termEn: "Development Environment",
    abbreviation: "Dev Env",
    definition: "Tập hợp các SDK, trình biên dịch, công cụ gỡ lỗi (debugger) và môi trường thực thi (runtimes như Node.js, Python, Java) được cài đặt và quản lý sẵn trong PaaS.",
    subsectionId: "cloud-ch4-s1-1-definition"
  },
  {
    id: "g4-dbms",
    termVi: "Hệ Quản Trị Cơ Sở Dữ Liệu",
    termEn: "Database Management System",
    abbreviation: "DBMS",
    definition: "Hệ thống CSDL (quan hệ hoặc NoSQL) được cấu hình sẵn trong PaaS với các tính năng tự động sao lưu, nhân bản dữ liệu và khôi phục sau thảm họa.",
    subsectionId: "cloud-ch4-s1-1-definition"
  },
  {
    id: "g4-web-server",
    termVi: "Máy Chủ Web & Cổng Ingress",
    termEn: "Web Server & Ingress Routing",
    abbreviation: "Web Server",
    definition: "Thành phần xử lý các yêu cầu HTTP/HTTPS (Nginx, Apache), tích hợp cân bằng tải thông minh và tự động cấp phát chứng chỉ bảo mật SSL/TLS.",
    subsectionId: "cloud-ch4-s1-1-definition"
  },
  {
    id: "g4-shared-resp",
    termVi: "Mô Hình Ranh Giới Trách Nhiệm Chung",
    termEn: "Shared Responsibility Model",
    abbreviation: "SRM",
    definition: "Quy ước phân chia trách nhiệm an ninh và quản trị giữa khách hàng và nhà cung cấp. Trong PaaS, khách hàng chỉ quản lý Applications và Data, nhà cung cấp quản lý 7 tầng còn lại.",
    subsectionId: "cloud-ch4-s1-1-definition"
  },
  {
    id: "g4-auto-scaling",
    termVi: "Tự Động Co Giãn Tài Nguyên",
    termEn: "Auto-scaling",
    abbreviation: "Auto-scale",
    definition: "Khả năng của nền tảng PaaS tự động tăng hoặc giảm số lượng máy chủ ảo / container dựa trên lưu lượng truy cập thực tế mà không cần can thiệp thủ công.",
    subsectionId: "cloud-ch4-s2-1-core-benefits"
  },
  {
    id: "g4-pay-as-you-go",
    termVi: "Thanh Toán Theo Mức Sử Dụng Thực Tế",
    termEn: "Pay-as-you-go",
    abbreviation: "PAYG",
    definition: "Mô hình định giá trong đó doanh nghiệp chỉ thanh toán tiền cho tài nguyên điện toán (CPU, RAM, băng thông) thực tế tiêu thụ, chuyển dịch hoàn toàn từ CAPEX sang OPEX.",
    subsectionId: "cloud-ch4-s2-1-core-benefits"
  },
  {
    id: "g4-time-to-market",
    termVi: "Thời Gian Đưa Sản Phẩm Ra Thị Trường",
    termEn: "Time-to-Market",
    abbreviation: "TTM",
    definition: "Khoảng thời gian từ khi lên ý tưởng sản phẩm phần mềm cho đến khi sản phẩm chính thức vận hành phục vụ người dùng cuối. PaaS giúp rút ngắn chỉ số này tới 70%.",
    subsectionId: "cloud-ch4-s2-1-core-benefits"
  },
  {
    id: "g4-one-click-deploy",
    termVi: "Triển Khai Một Chạm",
    termEn: "One-Click Deployment",
    abbreviation: "1-Click Deploy",
    definition: "Quy trình tự động hóa toàn bộ việc đóng gói mã nguồn, kiểm thử và đẩy lên môi trường máy chủ đám mây chỉ bằng một nút bấm hoặc lệnh git push duy nhất.",
    subsectionId: "cloud-ch4-s2-1-core-benefits"
  },
  {
    id: "g4-zero-infra",
    termVi: "Vận Hành Không Cần Quản Lý Hạ Tầng",
    termEn: "Zero Infrastructure Management",
    abbreviation: "Zero-Infra",
    definition: "Đặc tính giải phóng lập trình viên khỏi gánh nặng thiết lập, bảo trì, vá lỗi bảo mật phần cứng máy chủ và mạng vật lý bên dưới.",
    subsectionId: "cloud-ch4-s2-1-core-benefits"
  },
  {
    id: "g4-vendor-lockin",
    termVi: "Khóa Nhà Cung Cấp",
    termEn: "Vendor Lock-in",
    abbreviation: "Lock-in",
    definition: "Trạng thái ứng dụng bị phụ thuộc chặt chẽ vào API, SDK hoặc công nghệ độc quyền của một hãng đám mây, khiến việc chuyển đổi sang đối thủ cạnh tranh tốn kém chi phí khổng lồ.",
    subsectionId: "cloud-ch4-s3-1-challenges"
  },
  {
    id: "g4-legacy-app",
    termVi: "Ứng Dụng Kế Thừa / Ứng Dụng Cũ",
    termEn: "Legacy Application",
    abbreviation: "Legacy App",
    definition: "Các hệ thống phần mềm nguyên khối (Monolith) cổ điển được thiết kế từ trước kỷ nguyên đám mây, rất khó khăn hoặc bất khả thi khi di dời lên môi trường PaaS.",
    subsectionId: "cloud-ch4-s3-1-challenges"
  },
  {
    id: "g4-gae",
    termVi: "Google App Engine",
    termEn: "Google App Engine",
    abbreviation: "GAE",
    definition: "Dịch vụ PaaS tiên phong của Google Cloud ra đời năm 2008, nổi tiếng với khả năng co giãn tức thì và tính năng phân chia lưu lượng phiên bản (Traffic Splitting).",
    subsectionId: "cloud-ch4-s4-1-real-world-titans"
  },
  {
    id: "g4-azure-appservice",
    termVi: "Dịch Vụ Ứng Dụng Azure",
    termEn: "Azure App Service",
    abbreviation: "Azure AppService",
    definition: "Nền tảng PaaS cấp doanh nghiệp của Microsoft hỗ trợ sâu sắc môi trường .NET, tích hợp mượt mà với GitHub Actions và hệ thống quản trị danh tính Active Directory.",
    subsectionId: "cloud-ch4-s4-1-real-world-titans"
  },
  {
    id: "g4-openshift",
    termVi: "Nền Tảng Red Hat OpenShift",
    termEn: "Red Hat OpenShift",
    abbreviation: "OpenShift",
    definition: "Nền tảng PaaS mã nguồn mở hàng đầu được xây dựng trực tiếp trên nền tảng điều phối container Kubernetes, tối ưu hóa cho môi trường Đa đám mây và Đám mây lai.",
    subsectionId: "cloud-ch4-s4-1-real-world-titans"
  },
  {
    id: "g4-cloud-foundry",
    termVi: "Nền Tảng Cloud Foundry",
    termEn: "Cloud Foundry",
    abbreviation: "CF",
    definition: "Nền tảng PaaS mã nguồn mở công nghiệp quản lý toàn bộ vòng đời ứng dụng đám mây thông qua công nghệ buildpacks, được IBM tích hợp trong IBM Cloud.",
    subsectionId: "cloud-ch4-s4-1-real-world-titans"
  },
  {
    id: "g4-watson-ai",
    termVi: "Trí Tuệ Nhân Tạo Watson",
    termEn: "IBM Watson AI",
    abbreviation: "Watson AI",
    definition: "Hệ thống AI tiên tiến của IBM được tích hợp sẵn trong nền tảng PaaS IBM Cloud, chuyên xử lý ngôn ngữ tự nhiên và phân tích dữ liệu cho khối tài chính ngân hàng.",
    subsectionId: "cloud-ch4-s4-1-real-world-titans"
  },
  {
    id: "g4-serverless",
    termVi: "Điện Toán Không Máy Chủ",
    termEn: "Serverless Computing",
    abbreviation: "Serverless",
    definition: "Mô hình thực thi đám mây nơi nhà cung cấp tự động cấp phát và quản lý toàn bộ tài nguyên máy chủ; lập trình viên chỉ quan tâm đến đoạn mã thực thi.",
    subsectionId: "cloud-ch4-s6-1-future-trends"
  },
  {
    id: "g4-faas",
    termVi: "Chức Năng Như Một Dịch Vụ",
    termEn: "Function as a Service",
    abbreviation: "FaaS",
    definition: "Dạng triển khai cụ thể của Serverless trong đó các hàm độc lập được thực thi dựa trên sự kiện (Event-driven), tự động co giãn về 0 và tính phí theo mili-giây.",
    subsectionId: "cloud-ch4-s6-1-future-trends"
  },
  {
    id: "g4-scale-to-zero",
    termVi: "Co Giãn Hoàn Toàn Về Không",
    termEn: "Scale to Zero",
    abbreviation: "Scale-0",
    definition: "Khả năng của kiến trúc Serverless giải phóng toàn bộ máy chủ ảo khi không có lưu lượng truy cập, đưa hóa đơn tiền thuê điện toán về mức 0 đồng.",
    subsectionId: "cloud-ch4-s6-1-future-trends"
  },
  {
    id: "g4-multi-cloud",
    termVi: "Đa Đám Mây & Đám Mây Lai",
    termEn: "Multi-cloud & Hybrid Cloud",
    abbreviation: "Multi/Hybrid",
    definition: "Chiến lược phân bổ và vận hành ứng dụng đồng thời trên nhiều nhà cung cấp đám mây công cộng và trung tâm dữ liệu nội bộ (On-premise) nhằm tối ưu chi phí và chống Lock-in.",
    subsectionId: "cloud-ch4-s6-1-future-trends"
  },
  {
    id: "g4-devsecops",
    termVi: "Phát Triển, Bảo Mật & Vận Hành",
    termEn: "DevSecOps",
    abbreviation: "DevSecOps",
    definition: "Phương pháp luận tích hợp kiểm tra an ninh và tuân thủ tự động vào mọi giai đoạn của chu trình DevOps ngay từ bước lập trình mã nguồn.",
    subsectionId: "cloud-ch4-s6-1-future-trends"
  },
  {
    id: "g4-paas-ux",
    termVi: "Trải Nghiệm Người Dùng Trên PaaS",
    termEn: "PaaS User Experience",
    abbreviation: "PaaS UX",
    definition: "Bộ 6 tiêu chuẩn đo lường mức độ thỏa mãn của lập trình viên và doanh nghiệp khi dùng PaaS: Hiệu năng, Độ sẵn sàng, Tích hợp, Giao diện, Hỗ trợ và Bảo mật.",
    subsectionId: "cloud-ch4-s7-1-ux-and-summary"
  }
];

/* ============================================================
   BỘ FLASHCARDS CHUẨN THUẬT TOÁN SM-2 CHƯƠNG 4 (16 THẺ)
   Hỗ trợ ôn luyện ghi nhớ ngắt quãng tối ưu cho kỳ thi
   ============================================================ */
export const cloudChapter4Flashcards = [
  {
    id: "fc-c4-01",
    front: "Định nghĩa chuẩn học thuật và khẩu quyết cốt lõi của Platform as a Service (PaaS) là gì?",
    back: "• PaaS là mô hình dịch vụ đám mây cung cấp nền tảng hoàn chỉnh để lập trình, chạy và quản lý ứng dụng mà không cần lo về hạ tầng vật lý hay cài đặt OS.\n• Khẩu quyết: 'PaaS = Thuê nền tảng phát triển và vận hành'.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s1-1-definition"
  },
  {
    id: "fc-c4-02",
    front: "Bốn thành phần kỹ thuật cơ bản bắt buộc phải có của một nền tảng PaaS là gì?",
    back: "1. Hệ điều hành (Operating System)\n2. Môi trường phát triển (Development Environment)\n3. Cơ sở dữ liệu (Database)\n4. Máy chủ web (Web Server)",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s1-1-definition"
  },
  {
    id: "fc-c4-03",
    front: "Trong mô hình ranh giới trách nhiệm chia sẻ (Shared Responsibility), lập trình viên sử dụng PaaS chịu trách nhiệm cho những tầng nào?",
    back: "• Lập trình viên CHỈ chịu trách nhiệm cho đúng 2 tầng: Applications (Ứng dụng) và Data (Dữ liệu).\n• Toàn bộ 7 tầng còn lại (Hạ tầng, OS, Middleware, Runtime, Web Server, DB) do Cloud Provider đảm nhiệm.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s1-1-definition"
  },
  {
    id: "fc-c4-04",
    front: "Kể tên hai nền tảng PaaS tiên phong ra đời trong Giai đoạn 1 (đầu những năm 2000)?",
    back: "• Heroku (ra mắt năm 2007, ban đầu hỗ trợ ngôn ngữ Ruby).\n• Google App Engine - GAE (ra mắt năm 2008, ban đầu hỗ trợ ngôn ngữ Python).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s1-2-history"
  },
  {
    id: "fc-c4-05",
    front: "Bốn yếu tố động lực thúc đẩy sự phát triển bùng nổ của PaaS là gì?",
    back: "1. Nhu cầu phát triển ứng dụng tăng nhanh chóng (rút ngắn Time-to-Market).\n2. Sự phát triển của tự động hóa và container hóa (Docker, Kubernetes).\n3. Khả năng tích hợp công cụ và dịch vụ phong phú.\n4. Nhu cầu bảo mật, tuân thủ và độ tin cậy cấp doanh nghiệp.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s1-2-history"
  },
  {
    id: "fc-c4-06",
    front: "Bốn nhóm lợi ích cốt lõi lớn nhất của PaaS đối với việc phát triển phần mềm là gì?",
    back: "1. Tiết kiệm chi phí (Cost savings - Pay-as-you-go, chuyển CAPEX sang OPEX).\n2. Tăng tính linh hoạt (Flexibility & Scalability - Auto-scaling, đa ngôn ngữ).\n3. Tiết kiệm thời gian (Save time - One-click deployment, CI/CD).\n4. Không cần quản lý hạ tầng (Zero infrastructure management).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s2-1-core-benefits"
  },
  {
    id: "fc-c4-07",
    front: "Tính năng One-Click Deployment trong PaaS mang lại lợi thế kỹ thuật gì?",
    back: "• Tự động hóa hoàn toàn quy trình đóng gói mã nguồn (Buildpack), chạy kiểm thử (Unit tests) và triển khai ra môi trường live mà không gây gián đoạn dịch vụ (Zero-downtime).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s2-1-core-benefits"
  },
  {
    id: "fc-c4-08",
    front: "Ba nhóm nhược điểm và thách thức lớn nhất khi doanh nghiệp sử dụng PaaS là gì?",
    back: "1. Vấn đề bảo mật & kiểm soát (Security & Control - mất quyền root tầng sâu, dữ liệu trên cloud công cộng).\n2. Phụ thuộc nhà cung cấp (Vendor Lock-in - kẹt API độc quyền).\n3. Vấn đề tương thích (Compatibility issues - khó chuyển ứng dụng cũ Legacy).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s3-1-challenges"
  },
  {
    id: "fc-c4-09",
    front: "Thế nào là hiện tượng Khóa nhà cung cấp (Vendor Lock-in) và biện pháp phòng ngừa?",
    back: "• Khái niệm: Tình trạng ứng dụng bị phụ thuộc chặt vào công nghệ độc quyền của một nhà cung cấp, khiến chi phí và thời gian chuyển đổi sang hãng khác trở nên đắt đỏ.\n• Phòng ngừa: Sử dụng Docker container chuẩn OCI, CSDL mã nguồn mở (Postgres) và áp dụng mẫu thiết kế Adapter Pattern.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s3-1-challenges"
  },
  {
    id: "fc-c4-10",
    front: "Đặc điểm nổi bật nhất của nền tảng Google App Engine (GAE) là gì?",
    back: "• Nền tảng PaaS của Google Cloud với cơ chế tự động co giãn siêu tốc (Instant Auto-scaling).\n• Quản lý phiên bản linh hoạt và tính năng phân chia lưu lượng (Traffic Splitting) phục vụ A/B Testing hiệu quả.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s4-1-real-world-titans"
  },
  {
    id: "fc-c4-11",
    front: "Nền tảng Red Hat OpenShift có kiến trúc đặc biệt như thế nào so với các PaaS khác?",
    back: "• OpenShift là PaaS mã nguồn mở cấp doanh nghiệp được xây dựng trực tiếp trên nền tảng điều phối container KUBERNETES và Docker, hỗ trợ hoàn hảo kiến trúc Đa đám mây và Đám mây lai.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s4-1-real-world-titans"
  },
  {
    id: "fc-c4-12",
    front: "Nền tảng IBM Cloud Foundry sở hữu ưu thế độc quyền nào trong các ứng dụng doanh nghiệp?",
    back: "• Quản lý toàn diện vòng đời ứng dụng đám mây (Cloud Foundry buildpacks) và tích hợp độc quyền sức mạnh trí tuệ nhân tạo IBM Watson AI cho phân tích dữ liệu chuyên sâu.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s4-1-real-world-titans"
  },
  {
    id: "fc-c4-13",
    front: "Khẩu quyết 6 chiều giá trị chiến lược của PaaS đối với Doanh nghiệp là gì?",
    back: "• 'Nhanh hơn – Rẻ hơn – Linh hoạt hơn – Hợp tác hơn – An toàn hơn – Đổi mới hơn'.\n• Giúp rút ngắn Time-to-Market, tối ưu chi phí OPEX và dễ dàng tiếp cận AI/Big Data.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s5-1-business-values"
  },
  {
    id: "fc-c4-14",
    front: "Khái niệm Function as a Service (FaaS) và đặc tính Scale-to-Zero là gì?",
    back: "• FaaS là kiến trúc Serverless thực thi mã nguồn theo sự kiện (Event-driven).\n• Scale-to-Zero: Khi không có request, số lượng máy chủ co giãn hoàn toàn về 0, giúp doanh nghiệp không tốn tiền thuê khi hệ thống nhàn rỗi (tính phí theo mili-giây).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s6-1-future-trends"
  },
  {
    id: "fc-c4-15",
    front: "Kể tên 7 xu hướng tương lai của công nghệ PaaS theo bài giảng?",
    back: "1. Tích hợp AI & Machine Learning (AI as a Service)\n2. Kiến trúc Serverless & FaaS\n3. Đa nền tảng & Đám mây lai (Multi-cloud / Hybrid)\n4. Tăng cường bảo mật DevSecOps & Zero Trust\n5. Tối ưu trải nghiệm nhà phát triển (DevEx)\n6. Mở rộng quy mô toàn cầu (Global Edge)\n7. Tích hợp IoT & Điện toán biên (Edge Computing)",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s6-1-future-trends"
  },
  {
    id: "fc-c4-16",
    front: "Sáu tiêu chí đánh giá trải nghiệm người dùng (PaaS UX) là gì?",
    back: "1. Hiệu năng ứng dụng (Performance)\n2. Tính khả dụng và độ tin cậy (High Availability SLA 99.9% - 99.99%)\n3. Tích hợp công cụ phong phú (Tool Integration)\n4. Giao diện trực quan, dễ dùng (Dashboard & CLI)\n5. Hỗ trợ kỹ thuật 24/7 (Support & Docs)\n6. Bảo mật và quyền riêng tư (Security & Compliance)",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s7-1-ux-and-summary"
  }
];
