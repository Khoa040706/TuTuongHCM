/* ============================================================
   GIÁO TRÌNH ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)
   Chương 3: SOFTWARE AS A SERVICE (SaaS)
   Phiên bản Chuẩn StudyMaster: Micro-content • Interactive Simulators • Phản Xạ Trắc Nghiệm
   Biên tập chuẩn học thuật từ bài giảng chính thức (Mục I đến VIII)
   Lưu ý: Hero Banner Mục ★ sẽ được hoàn thiện ở bước rà soát tổng duyệt cuối cùng.
   ============================================================ */

export const cloudComputingChapter3 = {
  id: "cloud-ch3",
  title: "Chương 3",
  subtitle: "Software as a Service (SaaS)",
  sections: [
    /* ============================
       MỤC ★: TỔNG QUAN CHƯƠNG (Hero Banner sẽ làm sau cùng)
       ============================ */
    {
      id: "cloud-ch3-s0",
      roman: "★",
      title: "Tổng quan chương: Software as a Service (SaaS)",
      subsections: [
        {
          id: "cloud-ch3-s0-overview",
          number: "0",
          title: "Bản đồ kiến thức cốt lõi Chương 3",
          parts: [
            {
              id: "cloud-ch3-s0-p1",
              label: "★",
              title: "Tổng quan tri thức toàn chương",
              content: [
                {
                  type: "cloud-chapter-hero",
                  chapterId: "cloud-ch3"
                },
                {
                  type: "highlight",
                  text: "Chương 3 nghiên cứu toàn diện mô hình Phần mềm như một Dịch vụ (Software as a Service - SaaS): Định nghĩa cốt lõi 'Thuê phần mềm qua mạng', 4 đặc tính vận hành kỹ thuật, phân tích cán cân đánh đổi giữa 4 ưu điểm vượt trội và 3 thách thức sống còn, so sánh đối đầu hai kiến trúc Single-tenant ('Biệt thự riêng') và Multi-tenant ('Chung cư'), giải pháp OpenSaaS, công nghệ tích hợp Mashup (Web-based vs Server-based), kiến trúc hướng dịch vụ SOA (Tam giác Provider - Broker - Consumer), phân tích 2 gã khổng lồ thực tế Google Workspace & Salesforce, 4 lớp phòng thủ an ninh và xu hướng hội tụ tương lai cùng AI, IoT, Blockchain và Big Data."
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Lộ trình học tập & Trung tâm chỉ huy Hero Banner",
                  text: "Bạn có thể sử dụng các tab chuyển đổi góc nhìn trên Hero Banner phía trên để quan sát Mặt cắt 4 tầng kiến trúc (X-Ray Stack), Lộ trình 4 chặng tiến trình, Ma trận trọng số đề thi (Bento Grid) hoặc nhấp vào 10 card Lab Hub để tự động cuộn trang đến bài thực hành mong muốn."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC I: ĐỊNH NGHĨA & ĐẶC ĐIỂM CỦA SAAS
       ============================ */
    {
      id: "cloud-ch3-s1",
      roman: "I",
      title: "Định nghĩa & Đặc điểm của SaaS (SaaS Definition & Core Characteristics)",
      subsections: [
        {
          id: "cloud-ch3-s1-1-definition",
          number: "1.1",
          title: "Khái niệm & Bản chất phân phối phần mềm",
          parts: [
            {
              id: "cloud-ch3-s1-1-p1",
              label: "1.1.1",
              title: "Định nghĩa chuẩn học thuật của SaaS",
              content: [
                {
                  type: "paragraph",
                  text: "Software as a Service (SaaS - Phần mềm như một Dịch vụ) là một mô hình phân phối phần mềm mang tính cách mạng trong điện toán đám mây. Thay vì bán đĩa phần mềm đóng gói để người dùng tự cài đặt và bảo trì, một bên thứ ba (Third-party provider) sẽ chịu trách nhiệm lưu trữ toàn bộ ứng dụng trên hạ tầng máy chủ của họ và cung cấp quyền truy cập cho khách hàng thông qua mạng Internet."
                },
                {
                  type: "highlight",
                  text: "Khẩu quyết cốt lõi: 'SaaS = Thuê phần mềm qua mạng'. Người dùng hoàn toàn không cần mua bản quyền trọn đời, không cần mua máy chủ, và không cần cài đặt bất kỳ tệp tin thực thi (.exe, .msi) nào lên máy tính cục bộ."
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "Sự dịch chuyển từ On-Premise sang SaaS",
                  text: "Trong mô hình On-Premise truyền thống, doanh nghiệp phải gánh vác 100% trách nhiệm từ phần cứng, hệ điều hành đến vá lỗi ứng dụng (CAPEX rất lớn). Với SaaS, nhà cung cấp lo toàn bộ các tầng kỹ thuật bên dưới, doanh nghiệp chỉ tập trung sử dụng dữ liệu và nghiệp vụ (OPEX linh hoạt)."
                },
                {
                  type: "saas-lifecycle-duel"
                },
                {
                  type: "micro-quiz",
                  question: "Theo định nghĩa chuẩn học thuật, bản chất cốt lõi của mô hình Software as a Service (SaaS) là gì?",
                  options: [
                    "Phần mềm được bên thứ ba lưu trữ và cung cấp qua Internet không cần cài đặt cục bộ",
                    "Khách hàng mua đĩa nén vật lý để tự cài đặt trực tiếp lên hệ điều hành máy tính",
                    "Mô hình cho thuê máy chủ vật lý riêng biệt để tự cấu hình mã nguồn hệ điều hành",
                    "Nền tảng cung cấp bộ công cụ API cho các kỹ sư lập trình tự biên dịch mã nguồn"
                  ],
                  answerIndex: 0,
                  explanation: "SaaS là mô hình phân phối phần mềm mà ở đó nhà cung cấp bên thứ ba lưu trữ ứng dụng và cung cấp cho khách hàng qua Internet, loại bỏ hoàn toàn yêu cầu cài đặt và duy trì cục bộ trên máy trạm.",
                  hint: "Nhớ khẩu quyết: 'Thuê phần mềm qua mạng' do bên thứ ba lưu trữ và vận hành."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch3-s1-2-characteristics",
          number: "1.2",
          title: "4 Đặc tính kỹ thuật cốt lõi của SaaS",
          parts: [
            {
              id: "cloud-ch3-s1-2-p1",
              label: "1.2.1",
              title: "Chi tiết 4 đặc tính cơ bản của dịch vụ SaaS",
              content: [
                {
                  type: "paragraph",
                  text: "Theo tài liệu bài giảng chính thức, một dịch vụ phần mềm chuẩn SaaS luôn sở hữu 4 đặc tính vận hành không thể tách rời sau đây:"
                },
                {
                  type: "bullets",
                  items: [
                    "Truy cập qua Internet (Accessible via the Internet): Người dùng có thể truy cập phần mềm từ bất kỳ đâu, bất kỳ lúc nào, chỉ cần thiết bị có kết nối mạng Internet qua giao thức chuẩn HTTP/HTTPS thông qua trình duyệt Web hoặc ứng dụng di động nhẹ.",
                    "Không cần cài đặt cục bộ (No Local Installation required): Ứng dụng không yêu cầu cài đặt tệp phần mềm phức tạp trên máy tính cá nhân. Máy trạm chỉ đóng vai trò hiển thị giao diện người dùng (Presentation Layer), toàn bộ xử lý tính toán và lưu trữ dữ liệu diễn ra trên đám mây.",
                    "Nhà cung cấp tự quản lý và bảo trì (Managed & Maintained by Provider): Nhà cung cấp dịch vụ chịu trách nhiệm toàn diện trong việc cập nhật tính năng mới, vá lỗi bảo mật (Security Patches), sao lưu dữ liệu tự động và đảm bảo hệ thống hoạt động liên tục với cam kết chất lượng dịch vụ (SLA).",
                    "Chi trả theo nhu cầu sử dụng (Pay-as-you-go / Subscription Pricing): Người dùng hoặc doanh nghiệp thanh toán tiền bản quyền dưới dạng thuê bao định kỳ (hàng tháng hoặc hàng năm) theo số lượng người dùng thực tế hoặc dung lượng tiêu thụ, tránh việc lãng phí tài nguyên."
                  ]
                },
                {
                  type: "table",
                  headers: ["Đặc tính kỹ thuật", "Ý nghĩa chuyên sâu", "Lợi thế mang lại cho người dùng"],
                  rows: [
                    ["Truy cập qua Internet", "Kết nối qua URL trên nền tảng Web tiêu chuẩn.", "Làm việc linh hoạt từ xa, trên mọi thiết bị (PC, tablet, smartphone)."],
                    ["Không cài đặt cục bộ", "Client chỉ cần Browser; zero dependency trên máy trạm.", "Không lo xung đột thư viện, virus máy trạm, không tốn dung lượng ổ đĩa."],
                    ["Provider tự bảo trì", "Cập nhật tập trung tại Cloud Datacenter của nhà cung cấp.", "Luôn dùng phiên bản mới nhất, không tốn nhân sự IT bảo trì."],
                    ["Pay-as-you-go", "Chuyển đổi hoàn toàn chi phí từ CAPEX sang OPEX.", "Khởi đầu chi phí thấp, linh hoạt tăng/giảm gói theo tình hình kinh doanh."]
                  ]
                },
                {
                  type: "callout",
                  variant: "accent",
                  title: "Điểm cốt lõi cần nhớ",
                  text: "Bốn đặc tính này tạo nên sức mạnh tuyệt đối giúp SaaS chiếm lĩnh thị trường phần mềm doanh nghiệp: Nhanh chóng triển khai (Time-to-market), không rào cản phần cứng máy trạm, và loại bỏ hoàn toàn gánh nặng IT nội bộ."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC II: ƯU ĐIỂM & NHƯỢC ĐIỂM CỦA SAAS
       ============================ */
    {
      id: "cloud-ch3-s2",
      roman: "II",
      title: "Ưu điểm & Nhược điểm của SaaS (SaaS Trade-offs)",
      subsections: [
        {
          id: "cloud-ch3-s2-1-advantages",
          number: "2.1",
          title: "4 Ưu điểm nổi bật của mô hình SaaS",
          parts: [
            {
              id: "cloud-ch3-s2-1-p1",
              label: "2.1.1",
              title: "Khảo sát chi tiết 4 lợi ích kinh tế & kỹ thuật",
              content: [
                {
                  type: "paragraph",
                  text: "Mô hình SaaS mang đến những bước đột phá vượt trội so với các phần mềm truyền thống cài đặt tại chỗ (On-Premise), được tóm tắt qua 4 ưu điểm chiến lược trong giáo trình:"
                },
                {
                  type: "bullets",
                  items: [
                    "Tiết kiệm chi phí (Cost savings): Doanh nghiệp không cần đầu tư mua sắm phần cứng máy chủ đắt đỏ, không tốn chi phí điện năng tản nhiệt, không cần phòng máy lạnh riêng và cắt giảm đáng kể chi phí duy trì đội ngũ kỹ sư vận hành hạ tầng IT.",
                    "Khả năng mở rộng quy mô linh hoạt (Ability of extension): Dễ dàng nâng cấp hoặc thu hẹp gói dịch vụ tức thì. Khi quy mô công ty tăng từ 10 lên 1,000 nhân viên, bạn chỉ cần mua thêm tài khoản người dùng trực tuyến mà không phải thiết lập thêm bất kỳ máy chủ vật lý nào.",
                    "Tự động cập nhật phiên bản mới (Update automatically): Nhà cung cấp liên tục triển khai các bản vá lỗi và tính năng mới nhất trên cụm máy chủ trung tâm. Mọi người dùng đều được hưởng lợi đồng thời mà không gặp tình trạng phân mảnh phiên bản phần mềm giữa các máy tính trong công ty.",
                    "Tính linh hoạt và tiện lợi tối đa (Flexibility and convenience): Cho phép người dùng làm việc mọi lúc, mọi nơi, chuyển đổi mượt mà giữa máy tính văn phòng, laptop cá nhân và điện thoại thông minh, hỗ trợ tối đa xu hướng làm việc từ xa (Remote Work/Hybrid)."
                  ]
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "Phân tích kinh tế: CAPEX vs OPEX",
                  text: "Ưu điểm 'Cost savings' của SaaS chính là phép biến đổi tài chính: Thay vì chi trả CAPEX (Capital Expenditure - Chi phí vốn đầu tư tài sản cố định mua máy chủ hàng tỷ đồng), doanh nghiệp chuyển sang OPEX (Operational Expenditure - Chi phí vận hành thuê bao nhỏ hàng tháng), giúp tối ưu dòng tiền kinh doanh."
                },
                {
                  type: "saas-tradeoff-balance-scale"
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch3-s2-2-disadvantages",
          number: "2.2",
          title: "3 Thách thức & Nhược điểm sống còn của SaaS",
          parts: [
            {
              id: "cloud-ch3-s2-2-p1",
              label: "2.2.1",
              title: "Những hạn chế và đánh đổi kỹ thuật khi áp dụng SaaS",
              content: [
                {
                  type: "paragraph",
                  text: "Bên cạnh các ưu thế vượt trội, mô hình SaaS cũng tồn tại 3 nhược điểm lớn mang tính bản chất mà bất kỳ nhà quản lý CNTT nào cũng phải cân nhắc kỹ lưỡng:"
                },
                {
                  type: "bullets",
                  items: [
                    "Phụ thuộc hoàn toàn vào kết nối Internet (Depends on Internet connection): Đây là điểm yếu chí tử (Single Point of Failure). Nếu đường truyền mạng Internet bị gián đoạn, cáp quang biển bị đứt hoặc băng thông chập chờn, người dùng sẽ hoàn toàn mất quyền truy cập vào phần mềm và dữ liệu làm việc.",
                    "Mối lo ngại về An ninh và Quyền riêng tư (Security and privacy): Dữ liệu mật và thông tin kinh doanh cốt lõi của doanh nghiệp được lưu trữ trên hạ tầng máy chủ của một công ty bên thứ ba. Nếu nhà cung cấp bị tấn công rò rỉ dữ liệu hoặc phá sản, doanh nghiệp sẽ phải đối mặt với nguy cơ thiệt hại vô cùng nghiêm trọng.",
                    "Hạn chế về khả năng tùy biến chuyên sâu (Customization restrictions): Do ứng dụng SaaS được thiết kế để phục vụ hàng loạt khách hàng với một bộ mã nguồn chung (Off-the-shelf), người dùng không thể tự ý chỉnh sửa mã nguồn, không thể thêm các hàm logic đặc thù riêng biệt hoặc can thiệp sâu vào cấu trúc cơ sở dữ liệu ngầm."
                  ]
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "Quy luật đánh đổi trong Kiến trúc Phần mềm",
                  text: "Không có giải pháp nào là hoàn hảo. Đổi lấy sự tiện lợi, chi phí thấp và tự động cập nhật của SaaS chính là việc chấp nhận sự phụ thuộc đường truyền mạng, rủi ro giao quyền kiểm soát dữ liệu cho bên thứ ba và khả năng tùy biến bị giới hạn trong khuôn khổ nhà cung cấp cho phép."
                },
                {
                  type: "micro-quiz",
                  question: "Đâu là nhược điểm và sự đánh đổi (Trade-off) sống còn lớn nhất khi một doanh nghiệp quyết định chuyển toàn bộ hoạt động sang ứng dụng SaaS?",
                  options: [
                    "Phụ thuộc hoàn toàn vào đường truyền Internet và lo ngại an toàn dữ liệu bên thứ ba",
                    "Bắt buộc phải tự bỏ vốn mua sắm thêm nhiều tủ rack máy chủ vật lý chuyên dụng",
                    "Phải tự tay biên dịch lại toàn bộ mã nguồn của hệ điều hành trên từng máy tính",
                    "Chi phí đầu tư ban đầu (CAPEX) cao gấp nhiều lần so với mua phần mềm đóng gói"
                  ],
                  answerIndex: 0,
                  explanation: "Nhược điểm lớn nhất của SaaS là sự phụ thuộc tuyệt đối vào mạng Internet (mất mạng = ngừng hoạt động) cùng rủi ro rò rỉ dữ liệu khi giao quyền lưu trữ cho bên thứ ba và khó tùy biến sâu quy trình.",
                  hint: "Hãy quan sát 3 nhược điểm chính: Depends on Internet, Security & Privacy, Customization restrictions."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC III: SINGLE-TENANT VS MULTI-TENANT SAAS ARCHITECTURE
       ============================ */
    {
      id: "cloud-ch3-s3",
      roman: "III",
      title: "Kiến trúc Single-tenant vs Multi-tenant SaaS",
      subsections: [
        {
          id: "cloud-ch3-s3-1-architectures",
          number: "3.1",
          title: "Phân tích chuyên sâu 2 mô hình kiến trúc SaaS",
          parts: [
            {
              id: "cloud-ch3-s3-1-p1",
              label: "3.1.1",
              title: "Bản chất kiến trúc Single-tenant và Multi-tenant",
              content: [
                {
                  type: "paragraph",
                  text: "Trong thế giới SaaS, 'Tenant' (Người thuê) đại diện cho một tổ chức khách hàng hoặc một doanh nghiệp sử dụng dịch vụ. Cách thức nhà cung cấp thiết kế hạ tầng phần mềm cho các Tenant chia thành hai trường phái kiến trúc kinh điển:"
                },
                {
                  type: "bullets",
                  items: [
                    "Kiến trúc Single-tenant (Đơn người thuê - Biệt thự riêng): Mỗi khách hàng được cấp riêng một phiên bản ứng dụng (App instance) và một hệ thống cơ sở dữ liệu (Database) hoàn toàn độc lập, tách rời về mặt vật lý hoặc máy ảo. Dữ liệu của khách hàng này tuyệt đối không chia sẻ chung với bất kỳ ai khác.",
                    "Kiến trúc Multi-tenant (Đa người thuê - Chung cư cao tầng): Hàng trăm hoặc hàng nghìn khách hàng khác nhau cùng dùng chung một phiên bản ứng dụng duy nhất và chia sẻ chung một hệ cơ sở dữ liệu. Mỗi khách hàng được cấp một phần tài nguyên logic và phân tách dữ liệu an toàn thông qua trường khóa định danh người thuê (Tenant_ID)."
                  ]
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Ẩn dụ kiến trúc: Biệt thự riêng vs Tòa chung cư",
                  text: "Single-tenant giống như bạn mua một căn biệt thự riêng: Tự do sơn sửa thiết kế nội thất, an ninh cô lập tuyệt đối nhưng giá xây dựng và bảo dưỡng rất đắt. Multi-tenant giống như bạn sống trong một căn hộ chung cư cao cấp: Dùng chung móng nhà, thang máy và hệ thống cấp thoát nước, chi phí dịch vụ cực rẻ nhưng phải tuân thủ nội quy chung và không thể đập phá kết cấu tòa nhà."
                },
                {
                  type: "single-vs-multi-tenant-sandbox"
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch3-s3-2-comparison-matrix",
          number: "3.2",
          title: "Ma trận 4 tiêu chí so sánh đối đầu Single-tenant vs Multi-tenant",
          parts: [
            {
              id: "cloud-ch3-s3-2-p1",
              label: "3.2.1",
              title: "Bảng đối chiếu 4 tiêu chí chuẩn học thuật",
              content: [
                {
                  type: "paragraph",
                  text: "Bài giảng chuẩn hóa việc so sánh hai kiến trúc này dựa trên đúng 4 tiêu chí cốt lõi:"
                },
                {
                  type: "table",
                  headers: ["Tiêu chí so sánh", "Single-tenant SaaS (Đơn người thuê)", "Multi-tenant SaaS (Đa người thuê)"],
                  rows: [
                    ["1. Cơ sở dữ liệu & Ứng dụng", "Database và Ứng dụng riêng biệt, độc lập cho từng khách hàng (Mô hình 1-1).", "Dùng chung một Database và một phiên bản Ứng dụng duy nhất (Mô hình 1-Nhiều)."],
                    ["2. Mức độ bảo mật", "Bảo mật và cô lập dữ liệu tuyệt đối (Physical/Instance Isolation), rủi ro rò rỉ chéo bằng 0.", "Bảo mật ở tầng logic bằng Tenant_ID. Tiềm ẩn rủi ro nếu có lỗi phân quyền mã nguồn."],
                    ["3. Chi phí & Quản lý", "Chi phí rất cao; quản lý, sao lưu và nâng cấp phần mềm phức tạp cho từng cá thể.", "Chi phí cực rẻ (nhờ chia sẻ tài nguyên); nâng cấp và bảo trì tập trung 1 lần cho tất cả."],
                    ["4. Khách hàng phù hợp", "Doanh nghiệp lớn, ngân hàng, tài chính, quân đội, cơ quan chính phủ cần bảo mật cao.", "Doanh nghiệp vừa và nhỏ (SMEs), công ty khởi nghiệp, người dùng đại chúng cần chi phí thấp."]
                  ]
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "Cơ chế phân tách Tenant_ID trong Multi-tenant",
                  text: "Trong cơ sở dữ liệu Multi-tenant, tất cả dữ liệu đơn hàng, người dùng của các công ty khác nhau đều lưu trong cùng một bảng SQL. Khi thực hiện truy vấn, hệ thống luôn tự động chèn thêm điều kiện: WHERE Tenant_ID = 'your_company_id' để ngăn chặn người dùng công ty A xem trộm dữ liệu của công ty B."
                },
                {
                  type: "micro-quiz",
                  question: "Trong kiến trúc Multi-tenant SaaS, cơ chế kỹ thuật nào thường được sử dụng để phân tách an toàn dữ liệu giữa các khách hàng khi dùng chung cơ sở dữ liệu?",
                  options: [
                    "Sử dụng cột định danh Tenant_ID để lọc và phân quyền truy cập logic",
                    "Cung cấp cho mỗi khách hàng một tủ máy chủ vật lý và ổ cứng riêng biệt",
                    "Yêu cầu người dùng tự mã hóa ổ cứng máy trạm bằng khóa vật lý rời",
                    "Tạo ra một hệ điều hành máy ảo Guest OS hoàn toàn mới cho từng người"
                  ],
                  answerIndex: 0,
                  explanation: "Multi-tenant dùng chung một Database và sử dụng trường dữ liệu Tenant_ID (Khóa định danh người thuê) trong các câu lệnh truy vấn SQL để bảo đảm chỉ người dùng thuộc đúng Tenant mới đọc/ghi được dữ liệu của mình.",
                  hint: "Hãy quan sát bảng CSDL SQL trong Simulator: Khóa Tenant_ID phân định ranh giới logic giữa các khách hàng."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC IV: GIẢI PHÁP OPNSAAS (Open Source Software as a Service)
       ============================ */
    {
      id: "cloud-ch3-s4",
      roman: "IV",
      title: "Giải pháp OpenSaaS (Open Source Software as a Service)",
      subsections: [
        {
          id: "cloud-ch3-s4-1-concept-stack",
          number: "4.1",
          title: "Khái niệm & 3 Tầng công nghệ mở của OpenSaaS",
          parts: [
            {
              id: "cloud-ch3-s4-1-p1",
              label: "4.1.1",
              title: "Sự kết hợp giữa Điện toán Đám mây và Mã nguồn mở",
              content: [
                {
                  type: "paragraph",
                  text: "OpenSaaS là mô hình kết hợp hài hòa giữa ưu điểm tiện dụng của SaaS và sự tự do, minh bạch của Phần mềm mã nguồn mở (Open Source Software). Theo bài giảng, OpenSaaS là dịch vụ SaaS được phát triển trên nền tảng ngôn ngữ mở, vận hành trên hệ điều hành mã nguồn mở, và lưu trữ trên hệ quản trị cơ sở dữ liệu mở."
                },
                {
                  type: "highlight",
                  text: "3 Tầng công nghệ mở cấu thành nên OpenSaaS Stack: (1) Ngôn ngữ lập trình mở (Open Language) ➔ (2) Hệ điều hành mở (Open OS - Linux) ➔ (3) Cơ sở dữ liệu mở (Open Database)."
                },
                {
                  type: "bullets",
                  items: [
                    "Tầng Ngôn ngữ mở (Open Language): Được xây dựng bằng các ngôn ngữ lập trình mã nguồn mở phổ biến như PHP, Python, JavaScript (Node.js), Ruby... giúp cộng đồng dễ dàng đọc hiểu, kiểm tra lỗi và viết thêm tính năng mở rộng.",
                    "Tầng Hệ điều hành mở (Open OS): Triển khai trên các bản phân phối Linux danh tiếng như Ubuntu, Debian, RedHat/CentOS, Alpine... mang lại tính ổn định cao, tiết kiệm hàng chục nghìn USD phí bản quyền hệ điều hành máy chủ.",
                    "Tầng Cơ sở dữ liệu mở (Open Database): Sử dụng các hệ quản trị CSDL quan hệ hoặc NoSQL mở như MySQL, PostgreSQL, MariaDB, MongoDB... bảo đảm tính tương thích cao và không bị khóa chặt cấu trúc dữ liệu."
                  ]
                },
                {
                  type: "open-saas-stack-explorer"
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch3-s4-2-pros-cons-cases",
          number: "4.2",
          title: "Lợi thế, Thách thức & 3 Điển hình OpenSaaS tiêu biểu",
          parts: [
            {
              id: "cloud-ch3-s4-2-p1",
              label: "4.2.1",
              title: "Phân tích 2 thách thức lớn và 3 ví dụ thực tiễn",
              content: [
                {
                  type: "paragraph",
                  text: "Mặc dù OpenSaaS giúp doanh nghiệp tránh hoàn toàn việc bị 'Khóa chặt nhà cung cấp' (No Vendor Lock-in) và có quyền kiểm soát mã nguồn, bài giảng nhấn mạnh rõ 2 nhược điểm / thách thức chính mà tổ chức phải đối mặt:"
                },
                {
                  type: "bullets",
                  items: [
                    "Hỗ trợ kỹ thuật bị hạn chế (Limited technical support): Khác với phần mềm thương mại có đường dây nóng hỗ trợ 24/7 và cam kết hợp đồng dịch vụ SLA chặt chẽ, các giải pháp OpenSaaS chủ yếu dựa vào diễn đàn cộng đồng mã nguồn mở. Khi xảy ra sự cố nghiêm trọng, doanh nghiệp có thể phải tự tìm cách khắc phục.",
                    "Rủi ro về An ninh và Quyền riêng tư (Security and privacy risks): Vì mã nguồn mở hoàn toàn công khai, hacker có thể nghiên cứu tìm ra các lỗ hổng Zero-day. Nếu đội ngũ quản trị viên không chủ động theo dõi và cập nhật kịp thời các bản vá lỗi bảo mật (Security Patches), hệ thống rất dễ bị tấn công khai thác."
                  ]
                },
                {
                  type: "paragraph",
                  text: "3 Điển hình OpenSaaS tiêu biểu được nêu rõ trong bài giảng học thuật:"
                },
                {
                  type: "table",
                  headers: ["Nền tảng OpenSaaS", "Lĩnh vực chuyên môn", "Đặc điểm công nghệ & Vai trò"],
                  rows: [
                    ["1. WordPress.com", "Hệ quản trị nội dung (Blog & Web CMS)", "Nền tảng CMS mã nguồn mở chiếm thị phần số 1 thế giới (PHP + MySQL + Linux), cho phép xây dựng blog và trang tin tức mạnh mẽ với hàng nghìn plugin."],
                    ["2. Magento", "Thương mại điện tử (E-commerce Platform)", "Giải pháp giỏ hàng và bán lẻ trực tuyến chuyên nghiệp mã nguồn mở, hỗ trợ quản lý kho hàng phức tạp, thanh toán đa tiền tệ và khuyến mãi linh hoạt."],
                    ["3. Moodle", "Hệ thống quản lý học tập (LMS)", "Nền tảng giáo dục trực tuyến mã nguồn mở hàng đầu cho trường đại học và viện đào tạo, hỗ trợ tạo lớp học, giao bài tập, diễn đàn thảo luận và thi trắc nghiệm."]
                  ]
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "Lời khuyên triển khai OpenSaaS",
                  text: "Để ứng dụng OpenSaaS thành công, doanh nghiệp cần sở hữu đội ngũ kỹ thuật có chuyên môn tốt để tự chủ trong việc vá lỗi bảo mật định kỳ và cấu hình hệ thống, bù đắp cho điểm yếu 'Hỗ trợ kỹ thuật hạn chế' từ phía cộng đồng."
                },
                {
                  type: "micro-quiz",
                  question: "Theo tài liệu bài giảng, hai thách thức / hạn chế đáng chú ý nhất của các giải pháp OpenSaaS là gì?",
                  options: [
                    "Hỗ trợ kỹ thuật bị hạn chế và tiềm ẩn các rủi ro về an ninh, bảo mật",
                    "Chi phí thuê bao hàng tháng luôn đắt hơn nhiều so với phần mềm đóng gói",
                    "Bắt buộc phải sử dụng hệ điều hành Windows Server độc quyền có trả phí",
                    "Hoàn toàn không cho phép người dùng tùy biến giao diện và tính năng"
                  ],
                  answerIndex: 0,
                  explanation: "Giáo trình chỉ rõ hai nhược điểm chính của OpenSaaS là: 'Hỗ trợ kỹ thuật hạn chế' (Limited technical support) do dựa vào cộng đồng và 'Rủi ro an ninh & riêng tư' nếu doanh nghiệp không tự kiểm tra và cập nhật các bản vá bảo mật định kỳ.",
                  hint: "Nhớ 2 rủi ro kỹ thuật: Limited technical support & Security/privacy risks."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC V: INTEGRATION ISSUES (MASHUPS)
       ============================ */
    {
      id: "cloud-ch3-s5",
      roman: "V",
      title: "Vấn đề Tích hợp: Công nghệ Mashup (Integration Issues - Mashups)",
      subsections: [
        {
          id: "cloud-ch3-s5-1-definition-methods",
          number: "5.1",
          title: "Định nghĩa & 2 Phương pháp Mashup kinh điển",
          parts: [
            {
              id: "cloud-ch3-s5-1-p1",
              label: "5.1.1",
              title: "Khái niệm Mashup và Ứng dụng GoRide",
              content: [
                {
                  type: "paragraph",
                  text: "Trong kỷ nguyên điện toán đám mây, một doanh nghiệp không cần phải tự mình xây dựng lại tất cả tính năng từ con số không. Thay vào đó, họ ứng dụng công nghệ Mashup để kết hợp các dịch vụ có sẵn từ nhiều nhà cung cấp SaaS khác nhau nhằm tạo ra một giải pháp toàn diện hoàn toàn mới."
                },
                {
                  type: "highlight",
                  text: "Định nghĩa chuẩn: Mashup là quá trình tích hợp nhiều dịch vụ / dữ liệu từ nhiều nguồn khác nhau để tạo ra ứng dụng hoặc dịch vụ mới. Ví dụ tiêu biểu: Ứng dụng gọi xe GoRide kết hợp dịch vụ Bản đồ số (Google Maps) + Điều phối vị trí tài xế (Ride-hailing API) + Cổng thanh toán trực tuyến."
                },
                {
                  type: "paragraph",
                  text: "Theo tài liệu bài giảng, có đúng 2 phương pháp Mashup chính phân chia theo nơi thực thi mã nguồn:"
                },
                {
                  type: "table",
                  headers: ["Phương pháp Mashup", "Cách hoạt động", "Ưu điểm", "Nhược điểm"],
                  rows: [
                    ["Web-based (Client-Side)", "Trình duyệt của người dùng (qua JavaScript) trực tiếp gửi request đến các API và kết hợp nội dung để hiển thị kết quả.", "Không cần cài đặt thêm phần mềm máy chủ, cực kỳ dễ triển khai.", "Hiệu năng phụ thuộc vào cấu hình trình duyệt và tốc độ đường truyền mạng của người dùng."],
                    ["Server Based (Server-Side)", "Một chương trình chuyên trách chạy trên máy chủ (Backend Server) thực hiện kết hợp dữ liệu từ các API rồi mới trả về kết quả.", "Quản lý và kiểm soát dữ liệu tốt hơn, hiệu năng xử lý cao hơn, bảo vệ API key tuyệt đối.", "Cần đầu tư hạ tầng máy chủ và phần mềm tích hợp chuyên dụng."]
                  ]
                },
                {
                  type: "mashup-integration-mixer"
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch3-s5-2-benefits-tools",
          number: "5.2",
          title: "Lợi ích, Thách thức & Công cụ hỗ trợ Mashup",
          parts: [
            {
              id: "cloud-ch3-s5-2-p1",
              label: "5.2.1",
              title: "Cán cân Lợi ích, Rủi ro và Ngôn ngữ đặc tả EMML, OpenMashup",
              content: [
                {
                  type: "paragraph",
                  text: "Mô hình tích hợp Mashup mang lại những lợi ích kinh tế vượt trội nhưng cũng đặt ra các thách thức kỹ thuật không nhỏ:"
                },
                {
                  type: "bullets",
                  items: [
                    "3 Lợi ích (Benefits): Tích hợp linh hoạt (Flexible integration); Nâng cao và làm phong phú tính năng (Enhanced features); Tiết kiệm tối đa chi phí phát triển (Cost savings).",
                    "3 Thách thức (Challenges): Mối lo ngại về an ninh và quyền riêng tư khi trao đổi dữ liệu qua API (Security and privacy); Vấn đề tương thích dữ liệu giữa các bên (Compatibility); Hiệu năng và độ trễ mạng tích tụ (Efficiency & Latency)."
                  ]
                },
                {
                  type: "paragraph",
                  text: "2 Công cụ hỗ trợ công nghệ Mashup chuẩn hóa trong giáo trình:"
                },
                {
                  type: "bullets",
                  items: [
                    "EMML (Enterprise Mashup Markup Language): Ngôn ngữ đánh dấu mở dựa trên XML dùng để định nghĩa luồng tích hợp dữ liệu, lọc, gộp và chuyển đổi các luồng thông tin trong môi trường doanh nghiệp.",
                    "OpenMashup (Open Markup Language): Tiêu chuẩn mở cho phép liên kết các thành phần giao diện mở và dịch vụ Web 2.0 đa nền tảng."
                  ]
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "Khẩu quyết ghi nhớ nhanh Mục V",
                  text: "Mashup = 'Trộn nhiều API / dịch vụ thành 1 ứng dụng mới'; 2 kiểu chính = Web-based (trình duyệt xử lý) vs Server-based (máy chủ xử lý); 2 công cụ = EMML & OpenMashup."
                },
                {
                  type: "micro-quiz",
                  question: "Trong công nghệ Mashup, phương pháp 'Web-based' có đặc điểm vận hành nào sau đây?",
                  options: [
                    "Trình duyệt (qua JavaScript) kết hợp nội dung để hiển thị, không cần cài thêm phần mềm",
                    "Mã nguồn được biên dịch nhị phân chạy trực tiếp trên thanh ghi vật lý của CPU máy chủ",
                    "Bắt buộc doanh nghiệp phải tự xây dựng một hệ thống máy chủ cơ sở dữ liệu chuyên biệt",
                    "Chỉ hoạt động được khi toàn bộ các máy trạm ngắt hoàn toàn kết nối mạng Internet"
                  ],
                  answerIndex: 0,
                  explanation: "Phương pháp Web-based Mashup sử dụng trình duyệt người dùng (thông qua JavaScript) để gọi và kết hợp nội dung từ các API, ưu điểm là không cần cài thêm phần mềm nhưng hiệu năng phụ thuộc vào trình duyệt và tốc độ mạng.",
                  hint: "Quan sát bảng so sánh 2 phương pháp: Web-based (trên trình duyệt qua JavaScript) vs Server-based (trên máy chủ)."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VI: SERVICE-ORIENTED ARCHITECTURE (SOA)
       ============================ */
    {
      id: "cloud-ch3-s6",
      roman: "VI",
      title: "Kiến trúc Hướng Dịch vụ (Service-Oriented Architecture - SOA)",
      subsections: [
        {
          id: "cloud-ch3-s6-1-definition-characteristics",
          number: "6.1",
          title: "Định nghĩa, 3 Đặc điểm & Cán cân Ưu/Nhược điểm SOA",
          parts: [
            {
              id: "cloud-ch3-s6-1-p1",
              label: "6.1.1",
              title: "Khái niệm SOA và Các đặc tính kiến trúc",
              content: [
                {
                  type: "paragraph",
                  text: "Service-Oriented Architecture (SOA - Kiến trúc hướng dịch vụ) là phương pháp phát triển ứng dụng mang tính nền tảng của điện toán đám mây. Thay vì viết phần mềm dưới dạng một khối nguyên khối (Monolithic) cồng kềnh, các chức năng được thiết kế thành các dịch vụ độc lập, có thể tái sử dụng (Reusable services) và tương tác với nhau thông qua mạng."
                },
                {
                  type: "highlight",
                  text: "3 Đặc điểm cốt lõi của SOA (Characteristics): (1) Tính module hóa (Modularity) ➔ (2) Giao tiếp qua mạng (Network communication) ➔ (3) Khả năng tích hợp mạnh mẽ (Integration capabilities)."
                },
                {
                  type: "bullets",
                  items: [
                    "Ưu điểm của SOA: Tái sử dụng dịch vụ tối đa (Service reuse), Linh hoạt và dễ dàng mở rộng quy mô (Flexible and scalable), Dễ dàng tích hợp với các hệ thống phần mềm cũ (Easy integration).",
                    "Nhược điểm của SOA: Độ phức tạp kỹ thuật rất cao (Complexity - khó quản lý lỗi phân tán), Chi phí đầu tư ban đầu lớn (High cost - đòi hỏi đội ngũ kỹ sư chuyên môn cao)."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch3-s6-2-components-examples",
          number: "6.2",
          title: "3 Thành phần Tam giác SOA & Ví dụ Thực tiễn (AWS, Azure)",
          parts: [
            {
              id: "cloud-ch3-s6-2-p1",
              label: "6.2.1",
              title: "Tam giác tương tác kinh điển: Provider - Broker - Consumer",
              content: [
                {
                  type: "paragraph",
                  text: "Mô hình kiến trúc SOA hoạt động dựa trên mối quan hệ tam giác kinh điển giữa 3 thành phần chính thông qua 3 thao tác: Publish, Find và Bind:"
                },
                {
                  type: "bullets",
                  items: [
                    "Service Provider (Nhà cung cấp dịch vụ): Xây dựng và triển khai dịch vụ, đồng thời thực hiện thao tác Phát hành (Publish) bản mô tả dịch vụ lên Service Broker.",
                    "Service Broker (Bên môi giới / Thanh ghi dịch vụ): Đóng vai trò danh mục trung gian (Service Registry / Repository) lưu trữ định nghĩa dịch vụ để các bên có thể tìm kiếm (Find).",
                    "Service Consumer (Bên sử dụng dịch vụ): Tra cứu dịch vụ qua Broker, sau đó tiến hành Ràng buộc (Bind) và gọi trực tiếp dịch vụ từ Service Provider qua đường truyền mạng."
                  ]
                },
                {
                  type: "soa-architecture-triangle-sandbox"
                },
                {
                  type: "callout",
                  variant: "accent",
                  title: "2 Ví dụ minh họa thực tiễn chuẩn giáo trình",
                  text: "Amazon Web Services (AWS) và Microsoft Azure là hai điển hình quy mô lớn nhất về việc áp dụng kiến trúc SOA trong thực tế, cung cấp hàng trăm dịch vụ độc lập kết nối với nhau qua mạng để phục vụ hàng triệu ứng dụng doanh nghiệp."
                },
                {
                  type: "micro-quiz",
                  question: "Trong tam giác kiến trúc hướng dịch vụ (SOA), thành phần nào đóng vai trò lưu trữ danh mục và cho phép Consumer tra cứu dịch vụ?",
                  options: [
                    "Service Broker (Bên môi giới / Thanh ghi dịch vụ)",
                    "Service Consumer (Bên tiêu thụ / Khách hàng gọi hàm)",
                    "Service Provider (Nhà cung cấp trực tiếp triển khai code)",
                    "Hardware Controller (Bộ điều khiển vi mạch phần cứng)"
                  ],
                  answerIndex: 0,
                  explanation: "Trong mô hình SOA, Service Broker là bên trung gian lưu trữ danh mục các dịch vụ đã xuất bản, giúp Service Consumer thực hiện thao tác tìm kiếm (Find) trước khi thực hiện liên kết (Bind).",
                  hint: "3 Thành phần gồm: Provider (cung cấp), Consumer (sử dụng), Broker (môi giới/danh mục)."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VII: SAAS TRONG THỰC TẾ - BẢO MẬT - XU HƯỚNG TƯƠNG LAI
       ============================ */
    {
      id: "cloud-ch3-s7",
      roman: "VII",
      title: "SaaS trong Thực tế – Bảo mật – Xu hướng Tương lai",
      subsections: [
        {
          id: "cloud-ch3-s7-1-reality-titans",
          number: "7.1",
          title: "SaaS trong thực tế: Google Workspace & Salesforce CRM",
          parts: [
            {
              id: "cloud-ch3-s7-1-p1",
              label: "7.1.1",
              title: "Khảo sát 2 gã khổng lồ biểu tượng của ngành công nghiệp SaaS",
              content: [
                {
                  type: "paragraph",
                  text: "Thực tế triển khai SaaS trên toàn cầu được dẫn dắt bởi hai trường phái tiêu biểu nhất: Google Apps / Google Workspace (Hợp tác văn phòng) và Salesforce (Quản trị quan hệ khách hàng CRM)."
                },
                {
                  type: "bullets",
                  items: [
                    "Google Apps / Google Workspace: Bao gồm Gmail, Drive, Docs, Sheets, Slides, Calendar, Meet. Mang lại lợi ích: Cost savings, Easy to manage, Strengthen cooperation, High security. Ứng dụng rộng rãi trong Doanh nghiệp (Businesses), Giáo dục (Education) và Cá nhân (Personal).",
                    "Salesforce: Nền tảng CRM trên đám mây; là SaaS Pioneer (Kẻ tiên phong khai sinh ngành công nghiệp SaaS thế giới). Cung cấp: Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Salesforce Chatter. Lợi ích: Tăng hiệu quả bán hàng, Nâng cao dịch vụ khách hàng, Tối ưu tiếp thị, Thúc đẩy hợp tác nội bộ."
                  ]
                },
                {
                  type: "dual-saas-titan-explorer"
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch3-s7-2-security-measures",
          number: "7.2",
          title: "Bảo mật trong SaaS (Security in SaaS)",
          parts: [
            {
              id: "cloud-ch3-s7-2-p1",
              label: "7.2.1",
              title: "4 Biện pháp kỹ thuật cốt lõi và 2 thách thức an ninh",
              content: [
                {
                  type: "paragraph",
                  text: "Bảo mật là yếu tố sống còn vì toàn bộ dữ liệu quan trọng của doanh nghiệp được lưu trữ và xử lý trên hạ tầng máy chủ đám mây của bên thứ ba. Nếu không đảm bảo an ninh, dữ liệu sẽ bị truy cập trái phép, rò rỉ hoặc bị tin tặc phá hủy."
                },
                {
                  type: "bullets",
                  items: [
                    "Data encrypt (Mã hóa dữ liệu): Mã hóa khi truyền trên đường truyền mạng (TLS/HTTPS) và mã hóa khi lưu trữ trên đĩa cứng đám mây (AES-256).",
                    "Multi-factor authentication - MFA (Xác thực đa yếu tố): Bắt buộc người dùng cung cấp thêm mã xác thực thứ hai qua điện thoại/ứng dụng sau khi nhập mật khẩu.",
                    "Access management and authorization (Quản lý & phân quyền truy cập): Thiết lập chính sách phân quyền theo vai trò (RBAC), kiểm soát chặt chẽ ai có quyền đọc/sửa dữ liệu.",
                    "Backup and restore data (Sao lưu & phục hồi dữ liệu): Tự động sao lưu định kỳ đa vùng, bảo đảm khôi phục dữ liệu nguyên vẹn khi xảy ra thảm họa."
                  ]
                },
                {
                  type: "saas-security-shield-sandbox"
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "2 Thách thức bảo mật lớn trong giáo trình",
                  text: "Doanh nghiệp áp dụng SaaS phải đối mặt với 2 thách thức bảo mật lớn: (1) Cloud data management (Quản lý và giám sát dữ liệu đám mây phân tán) và (2) Access control (Kiểm soát quyền truy cập nhất quán trên quy mô hàng nghìn nhân sự)."
                },
                {
                  type: "micro-quiz",
                  question: "Theo tài liệu bài giảng, 4 biện pháp bảo mật cốt lõi (Security measures) trong mô hình SaaS bao gồm những gì?",
                  options: [
                    "Data encrypt, Multi-factor authentication (MFA), Access management, Backup & restore",
                    "Tắt màn hình máy chủ, thay ổ cứng vật lý mỗi tháng, cài đặt lại Windows hàng ngày",
                    "Mua thêm nhiều đĩa CD trắng, ngắt hoàn toàn kết nối Internet, chỉ dùng mạng nội bộ",
                    "Cấp quyền Administrator tối cao cho toàn bộ nhân viên thử việc trong công ty"
                  ],
                  answerIndex: 0,
                  explanation: "Giáo trình nêu rõ 4 biện pháp bảo mật cốt lõi: (1) Data encrypt (mã hóa dữ liệu); (2) Multi-factor authentication - MFA (xác thực đa yếu tố); (3) Access management and authorization (quản lý phân quyền truy cập); (4) Backup and restore data (sao lưu & phục hồi).",
                  hint: "Hãy nhớ 4 trụ cột: Mã hóa + MFA + Phân quyền + Sao lưu."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch3-s7-3-future-tech",
          number: "7.3",
          title: "Tương lai của SaaS: AI, IoT, Blockchain & Big Data",
          parts: [
            {
              id: "cloud-ch3-s7-3-p1",
              label: "7.3.1",
              title: "Xu hướng phát triển và Sự hội tụ của 4 công nghệ đột phá",
              content: [
                {
                  type: "paragraph",
                  text: "SaaS tương lai tiếp tục tăng trưởng liên tục (Continuous growth) và thâm nhập vào các thị trường tài chính (Finance), giáo dục (Education) và y tế (Healthcare). Hai yếu tố cần tiếp tục hoàn thiện là Bảo mật riêng tư (Security and privacy) và Khả năng tùy biến linh hoạt (Customization capabilities)."
                },
                {
                  type: "bullets",
                  items: [
                    "Tích hợp AI & IoT: Ứng dụng trí tuệ nhân tạo để tự động hóa xử lý và thu thập dữ liệu viễn trắc từ các thiết bị cảm biến thông minh.",
                    "SaaS kết hợp Blockchain: Ứng dụng sổ cái phân tán (Distributed Ledger) đảm bảo tính minh bạch (Transparency), an toàn (Security) và chống làm giả (Tamper resistance). Tích hợp Hợp đồng thông minh (Smart Contract), ứng dụng trong Quản lý chuỗi cung ứng, Hệ thống quản lý tài liệu và Y tế.",
                    "SaaS kết hợp Big Data: Xử lý tập dữ liệu khổng lồ phức tạp; mang lại khả năng phân tích chuyên sâu (In-depth data analysis) và ra quyết định dựa trên dữ liệu (Data-driven business decisions); ứng dụng trong Bán lẻ (Retail), Tài chính (Financial sector) và Y tế (Health industry)."
                  ]
                },
                {
                  type: "saas-future-tech-nexus"
                },
                {
                  type: "micro-quiz",
                  question: "Khi kết hợp SaaS với công nghệ Blockchain, lợi ích cốt lõi nào được mang lại cho các hệ thống như Chuỗi cung ứng (Supply Chain) và Quản lý tài liệu?",
                  options: [
                    "Tăng cường tính minh bạch, độ bảo mật cao và khả năng chống làm giả (Tamper resistance)",
                    "Giúp người dùng không cần trả tiền điện năng tiêu thụ cho màn hình máy tính cá nhân",
                    "Cho phép máy chủ tự động khởi động lại sau mỗi 5 phút để giải phóng bộ nhớ đệm",
                    "Xóa bỏ hoàn toàn nhu cầu sử dụng mạng Internet khi truy cập các ứng dụng đám mây"
                  ],
                  answerIndex: 0,
                  explanation: "Blockchain là công nghệ sổ cái phân tán, khi kết hợp với SaaS sẽ mang lại tính minh bạch tuyệt đối, tăng cường bảo mật dữ liệu, chống chỉnh sửa làm giả (Tamper resistance) và tự động hóa qua Smart Contract.",
                  hint: "Nhớ 3 từ khóa của Blockchain: Transparency, Security, Tamper resistance."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VIII: TỔNG KẾT NHANH TOÀN CHƯƠNG (KEY TAKEAWAYS)
       ============================ */
    {
      id: "cloud-ch3-s8",
      roman: "VIII",
      title: "Tổng kết Nhanh Toàn Chương (Key Takeaways)",
      subsections: [
        {
          id: "cloud-ch3-s8-1-summary-matrix",
          number: "8.1",
          title: "8 Cột mốc tri thức cốt lõi của Chương 3 SaaS",
          parts: [
            {
              id: "cloud-ch3-s8-1-p1",
              label: "8.1.1",
              title: "Hệ thống hóa toàn bộ tri thức & Cẩm nang thi cử",
              content: [
                {
                  type: "paragraph",
                  text: "Dưới đây là bảng tổng kết nhanh cô đọng toàn bộ 8 nội dung trọng tâm của Chương 3 theo đúng cấu trúc đề thi chính thức:"
                },
                {
                  type: "bullets",
                  items: [
                    "1. SaaS: Phần mềm dùng qua Internet, provider lưu trữ và quản lý toàn bộ, không cần cài đặt cục bộ.",
                    "2. 4 Đặc tính: Truy cập qua Internet, Không cài cục bộ, Provider tự bảo trì/update, Pay-as-you-go.",
                    "3. Đánh đổi (Trade-offs): 4 Lợi ích (Cost savings, Extension, Auto-update, Convenience) vs 3 Nhược điểm (Depends on Internet, Security/privacy, Customization restrictions).",
                    "4. Single-tenant vs Multi-tenant: 'Biệt thự' (riêng, bảo mật cao, đắt) vs 'Chung cư' (chung, rẻ, dễ mở rộng, phân tách bằng Tenant_ID).",
                    "5. OpenSaaS: SaaS + Công nghệ mở (Ngôn ngữ mở, Linux OS mở, CSDL mở). Ví dụ: WordPress.com, Magento, Moodle LMS.",
                    "6. Mashup: Tích hợp nhiều dịch vụ/API thành ứng dụng mới (GoRide); 2 kiểu: Web-based (trên trình duyệt) vs Server-based (trên server); công cụ EMML và OpenMashup.",
                    "7. SOA: Kiến trúc service tái sử dụng, nền tảng tích hợp SaaS; 3 thành phần: Provider (Publish) - Broker (Find) - Consumer (Bind); ví dụ: AWS, Azure.",
                    "8. Thực tế, Bảo mật & Tương lai: Google Workspace, Salesforce CRM; Bảo mật xoay quanh: encrypt, MFA, access control, backup; Tương lai: AI, IoT, Blockchain, Big Data."
                  ]
                },
                {
                  type: "chapter3-master-keyterms-matrix"
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
   TỪ ĐIỂN THUẬT NGỮ CHUYÊN NGÀNH (GLOSSARY) CHO CHƯƠNG 3
   ============================================================ */
export const cloudChapter3Glossary = [
  {
    id: "g3-saas",
    termVi: "Phần mềm như một Dịch vụ",
    termEn: "Software as a Service",
    abbreviation: "SaaS",
    definition: "Mô hình phân phối phần mềm trong đó ứng dụng được bên thứ ba lưu trữ trên đám mây và cung cấp cho người dùng qua mạng Internet mà không cần cài đặt cục bộ.",
    subsectionId: "cloud-ch3-s1-1-definition"
  },
  {
    id: "g3-on-premise",
    termVi: "Phần mềm cài đặt tại chỗ",
    termEn: "On-Premise Software",
    abbreviation: "On-Prem",
    definition: "Mô hình phần mềm truyền thống được cài đặt và vận hành trực tiếp trên các máy chủ và máy trạm nội bộ của doanh nghiệp, đòi hỏi chi phí đầu tư phần cứng và bảo trì cao.",
    subsectionId: "cloud-ch3-s1-1-definition"
  },
  {
    id: "g3-multi-tenancy",
    termVi: "Kiến trúc Đa người thuê",
    termEn: "Multi-Tenancy",
    abbreviation: "Multi-Tenant",
    definition: "Kiến trúc phần mềm trong đó một phiên bản ứng dụng và cơ sở dữ liệu duy nhất phục vụ đồng thời nhiều khách hàng (tenants), phân tách logic bằng Tenant_ID.",
    subsectionId: "cloud-ch3-s3-1-architectures"
  },
  {
    id: "g3-single-tenancy",
    termVi: "Kiến trúc Đơn người thuê",
    termEn: "Single-Tenancy",
    abbreviation: "Single-Tenant",
    definition: "Kiến trúc phần mềm trong đó mỗi khách hàng sở hữu một bản sao ứng dụng và cơ sở dữ liệu độc lập, mang lại sự cô lập bảo mật tuyệt đối nhưng chi phí rất cao.",
    subsectionId: "cloud-ch3-s3-1-architectures"
  },
  {
    id: "g3-tenant-id",
    termVi: "Khóa định danh người thuê",
    termEn: "Tenant Identifier",
    abbreviation: "Tenant_ID",
    definition: "Mã định danh duy nhất được gán cho mỗi tổ chức khách hàng trong cơ sở dữ liệu Multi-tenant để lọc dữ liệu và kiểm soát quyền truy cập logic an toàn.",
    subsectionId: "cloud-ch3-s3-2-comparison-matrix"
  },
  {
    id: "g3-data-isolation",
    termVi: "Sự cô lập dữ liệu",
    termEn: "Data Isolation",
    abbreviation: "Data Isolation",
    definition: "Cơ chế kỹ thuật đảm bảo dữ liệu của khách hàng này hoàn toàn tách rời và không thể bị truy cập hay nhìn thấy bởi khách hàng khác trong môi trường đám mây.",
    subsectionId: "cloud-ch3-s3-1-architectures"
  },
  {
    id: "g3-open-saas",
    termVi: "SaaS Mã Nguồn Mở",
    termEn: "Open Source Software as a Service",
    abbreviation: "OpenSaaS",
    definition: "Mô hình SaaS được xây dựng hoàn toàn trên nền tảng các công nghệ mở: ngôn ngữ lập trình mở, hệ điều hành mở (Linux) và cơ sở dữ liệu mở.",
    subsectionId: "cloud-ch3-s4-1-concept-stack"
  },
  {
    id: "g3-wordpress",
    termVi: "Hệ quản trị nội dung WordPress",
    termEn: "WordPress Platform",
    abbreviation: "WordPress",
    definition: "Nền tảng mã nguồn mở quản trị nội dung và viết blog phổ biến nhất thế giới, được cung cấp dưới dạng SaaS thông qua WordPress.com.",
    subsectionId: "cloud-ch3-s4-2-pros-cons-cases"
  },
  {
    id: "g3-magento",
    termVi: "Nền tảng Thương mại Điện tử Magento",
    termEn: "Magento E-Commerce Platform",
    abbreviation: "Magento",
    definition: "Giải pháp thương mại điện tử mã nguồn mở mạnh mẽ dành cho doanh nghiệp bán lẻ trực tuyến, hỗ trợ quản lý giỏ hàng, đa tiền tệ và kho vận.",
    subsectionId: "cloud-ch3-s4-2-pros-cons-cases"
  },
  {
    id: "g3-moodle",
    termVi: "Hệ thống Quản lý Học tập Moodle",
    termEn: "Modular Object-Oriented Dynamic Learning Environment",
    abbreviation: "Moodle LMS",
    definition: "Nền tảng quản lý học tập và khóa học trực tuyến mã nguồn mở hàng đầu thế giới được sử dụng rộng rãi trong các trường đại học và cơ sở giáo dục.",
    subsectionId: "cloud-ch3-s4-2-pros-cons-cases"
  },
  {
    id: "g3-capex",
    termVi: "Chi phí vốn đầu tư tài sản cố định",
    termEn: "Capital Expenditure",
    abbreviation: "CAPEX",
    definition: "Khoản chi phí lớn ban đầu để mua sắm tài sản cố định như máy chủ, bản quyền phần mềm trọn đời, hệ thống tủ rack và thiết bị làm mát.",
    subsectionId: "cloud-ch3-s2-1-advantages"
  },
  {
    id: "g3-opex",
    termVi: "Chi phí vận hành định kỳ",
    termEn: "Operational Expenditure",
    abbreviation: "OPEX",
    definition: "Khoản chi phí phát sinh hàng tháng/hàng năm để duy trì hoạt động kinh doanh, điển hình là phí thuê bao phần mềm SaaS định kỳ.",
    subsectionId: "cloud-ch3-s2-1-advantages"
  },
  {
    id: "g3-mashup",
    termVi: "Công nghệ Tích hợp Mashup",
    termEn: "Mashup Integration",
    abbreviation: "Mashup",
    definition: "Quá trình tích hợp nhiều dịch vụ hoặc nguồn dữ liệu khác nhau từ nhiều nhà cung cấp API độc lập để tạo ra một ứng dụng hoặc dịch vụ hoàn chỉnh mới.",
    subsectionId: "cloud-ch3-s5-1-definition-methods"
  },
  {
    id: "g3-web-mashup",
    termVi: "Mashup phía Trình duyệt",
    termEn: "Web-based Mashup",
    abbreviation: "Web Mashup",
    definition: "Phương pháp mashup trong đó trình duyệt phía client sử dụng JavaScript để kết hợp nội dung từ các API và hiển thị kết quả, không cần cài thêm phần mềm server.",
    subsectionId: "cloud-ch3-s5-1-definition-methods"
  },
  {
    id: "g3-server-mashup",
    termVi: "Mashup phía Máy chủ",
    termEn: "Server-based Mashup",
    abbreviation: "Server Mashup",
    definition: "Phương pháp mashup trong đó một chương trình trên máy chủ backend thực hiện tích hợp dữ liệu, giúp quản lý dữ liệu an toàn và hiệu năng cao hơn.",
    subsectionId: "cloud-ch3-s5-1-definition-methods"
  },
  {
    id: "g3-emml",
    termVi: "Ngôn ngữ Đánh dấu Mashup Doanh nghiệp",
    termEn: "Enterprise Mashup Markup Language",
    abbreviation: "EMML",
    definition: "Ngôn ngữ kịch bản dựa trên XML chuyên dụng để định nghĩa các luồng tích hợp, chuyển đổi và gộp dữ liệu từ nhiều nguồn dịch vụ Web cho doanh nghiệp.",
    subsectionId: "cloud-ch3-s5-2-benefits-tools"
  },
  {
    id: "g3-open-mashup",
    termVi: "Chuẩn Đánh dấu Mở Mashup",
    termEn: "Open Markup Language",
    abbreviation: "OpenMashup",
    definition: "Tiêu chuẩn cộng đồng mở hỗ trợ kết nối các tiện ích Web 2.0, nguồn cấp dữ liệu động và dịch vụ đám mây từ nhiều bên mà không bị trói buộc bản quyền.",
    subsectionId: "cloud-ch3-s5-2-benefits-tools"
  },
  {
    id: "g3-soa",
    termVi: "Kiến trúc Hướng Dịch vụ",
    termEn: "Service-Oriented Architecture",
    abbreviation: "SOA",
    definition: "Phương pháp kiến trúc phần mềm trong đó các chức năng được đóng gói thành các dịch vụ độc lập có khả năng tái sử dụng cao, tương tác qua mạng máy tính.",
    subsectionId: "cloud-ch3-s6-1-definition-characteristics"
  },
  {
    id: "g3-service-broker",
    termVi: "Bên Môi giới Dịch vụ",
    termEn: "Service Broker / Registry",
    abbreviation: "Service Broker",
    definition: "Thành phần đóng vai trò kho lưu trữ danh mục trung gian trong mô hình SOA, cho phép Provider xuất bản (Publish) và Consumer tra cứu (Find) dịch vụ.",
    subsectionId: "cloud-ch3-s6-2-components-examples"
  },
  {
    id: "g3-service-provider",
    termVi: "Nhà Cung cấp Dịch vụ",
    termEn: "Service Provider",
    abbreviation: "Provider",
    definition: "Thành phần trong kiến trúc SOA chịu trách nhiệm phát triển, lưu trữ và thực thi các chức năng dịch vụ, đồng thời xuất bản định nghĩa dịch vụ lên Broker.",
    subsectionId: "cloud-ch3-s6-2-components-examples"
  },
  {
    id: "g3-service-consumer",
    termVi: "Bên Sử dụng Dịch vụ",
    termEn: "Service Consumer",
    abbreviation: "Consumer",
    definition: "Ứng dụng hoặc hệ thống tìm kiếm dịch vụ trong danh mục Broker và thực hiện liên kết (Bind) để gửi yêu cầu xử lý đến Service Provider qua mạng.",
    subsectionId: "cloud-ch3-s6-2-components-examples"
  },
  {
    id: "g3-mfa",
    termVi: "Xác thực Đa yếu tố",
    termEn: "Multi-Factor Authentication",
    abbreviation: "MFA",
    definition: "Phương thức bảo mật yêu cầu người dùng cung cấp từ hai yếu tố xác minh trở lên (Mật khẩu + Mã OTP/Sinh trắc học) trước khi được cấp quyền truy cập hệ thống.",
    subsectionId: "cloud-ch3-s7-2-security-measures"
  },
  {
    id: "g3-smart-contract",
    termVi: "Hợp đồng Thông minh",
    termEn: "Smart Contract",
    abbreviation: "Smart Contract",
    definition: "Các đoạn mã tự động thực thi các điều khoản thỏa thuận trên mạng lưới Blockchain khi các điều kiện định trước được thỏa mãn mà không cần bên trung gian.",
    subsectionId: "cloud-ch3-s7-3-future-tech"
  },
  {
    id: "g3-data-driven",
    termVi: "Ra Quyết định Dựa trên Dữ liệu",
    termEn: "Data-Driven Business Decisions",
    abbreviation: "Data-Driven",
    definition: "Phương pháp quản trị doanh nghiệp hiện đại dựa trên kết quả phân tích số liệu thực tế từ hệ thống Big Data thay vì dựa vào cảm tính chủ quan.",
    subsectionId: "cloud-ch3-s7-3-future-tech"
  }
];

/* ============================================================
   THẺ GHI NHỚ THUẬT NGỮ (FLASHCARDS SM-2) CHO CHƯƠNG 3
   ============================================================ */
export const cloudChapter3Flashcards = [
  {
    id: "fc-c3-01",
    front: "Định nghĩa chuẩn và khẩu quyết cốt lõi của Software as a Service (SaaS) là gì?",
    back: "• SaaS là mô hình mà bên thứ ba lưu trữ ứng dụng và cung cấp qua mạng Internet không cần cài đặt cục bộ.\n• Khẩu quyết: 'SaaS = Thuê phần mềm qua mạng'.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s1-1-definition"
  },
  {
    id: "fc-c3-02",
    front: "Kể tên 4 đặc tính kỹ thuật cơ bản của mô hình dịch vụ SaaS?",
    back: "1. Truy cập qua Internet (HTTP/HTTPS, mọi lúc mọi nơi)\n2. Không cần cài đặt cục bộ (chỉ cần trình duyệt web)\n3. Nhà cung cấp tự quản lý và bảo trì cập nhật\n4. Chi trả theo nhu cầu sử dụng (Pay-as-you-go/Subscription).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s1-2-characteristics"
  },
  {
    id: "fc-c3-03",
    front: "Nêu 4 ưu điểm nổi bật của việc ứng dụng SaaS đối với doanh nghiệp?",
    back: "1. Tiết kiệm chi phí (Cost savings: chuyển CAPEX sang OPEX)\n2. Khả năng mở rộng linh hoạt (Ability of extension: thêm user tức thì)\n3. Tự động cập nhật tính năng mới (Update automatically)\n4. Tính linh hoạt và tiện lợi cao (Flexibility & convenience: làm việc từ xa).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s2-1-advantages"
  },
  {
    id: "fc-c3-04",
    front: "3 Nhược điểm & sự đánh đổi lớn nhất khi doanh nghiệp dùng SaaS là gì?",
    back: "1. Phụ thuộc hoàn toàn vào kết nối Internet (mất mạng = ngừng hoạt động)\n2. Mối lo ngại về An ninh và Quyền riêng tư (Security & privacy)\n3. Hạn chế về khả năng tùy biến chuyên sâu (Customization restrictions).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s2-2-disadvantages"
  },
  {
    id: "fc-c3-05",
    front: "So sánh sự khác nhau căn bản giữa kiến trúc Single-tenant và Multi-tenant SaaS?",
    back: "• Single-tenant ('Biệt thự riêng'): Mỗi khách hàng có App và Database riêng biệt; bảo mật tuyệt đối nhưng chi phí rất cao.\n• Multi-tenant ('Chung cư'): Dùng chung một App và Database; chi phí cực rẻ, nâng cấp nhanh nhưng phân tách logic bằng Tenant_ID.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s3-1-architectures"
  },
  {
    id: "fc-c3-06",
    front: "Cơ chế phân tách dữ liệu an toàn trong CSDL Multi-tenant hoạt động ra sao?",
    back: "Sử dụng cột khóa Tenant_ID trong mỗi bảng CSDL chung kết hợp các câu lệnh lọc truy vấn (WHERE Tenant_ID = 'company_id') để đảm bảo người dùng chỉ truy cập được dữ liệu của tổ chức mình.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s3-2-comparison-matrix"
  },
  {
    id: "fc-c3-07",
    front: "Khái niệm OpenSaaS và 3 tầng công nghệ mở cấu thành nó là gì?",
    back: "• OpenSaaS = SaaS xây dựng trên nền tảng công nghệ mã nguồn mở.\n• 3 Tầng: (1) Ngôn ngữ lập trình mở (PHP, Python, JS) ➔ (2) Hệ điều hành mở (Linux) ➔ (3) Cơ sở dữ liệu mở (MySQL, PostgreSQL).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s4-1-concept-stack"
  },
  {
    id: "fc-c3-08",
    front: "3 Điển hình OpenSaaS tiêu biểu trong giáo trình và 2 thách thức lớn của nó là gì?",
    back: "• 3 Điển hình: WordPress.com (Blog & CMS), Magento (E-commerce), Moodle (Hệ thống đào tạo LMS).\n• 2 Thách thức: Hỗ trợ kỹ thuật bị hạn chế (Limited technical support) & Rủi ro an ninh/riêng tư (Security & privacy risks).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s4-2-pros-cons-cases"
  },
  {
    id: "fc-c3-09",
    front: "Mashup là gì và ví dụ minh họa kinh điển trong thực tế là gì?",
    back: "• Mashup là quá trình tích hợp nhiều dịch vụ/dữ liệu từ nhiều nguồn khác nhau để tạo ra ứng dụng mới.\n• Ví dụ: Ứng dụng GoRide kết hợp bản đồ số (Google Maps) + định vị điều phối xe (Ride-hailing API) + cổng thanh toán.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s5-1-definition-methods"
  },
  {
    id: "fc-c3-10",
    front: "Phân biệt hai phương pháp Mashup: Web-based và Server-based?",
    back: "• Web-based: Trình duyệt người dùng (qua JavaScript) kết hợp nội dung; không cần cài phần mềm server nhưng phụ thuộc mạng client.\n• Server-based: Chương trình trên server thực hiện kết hợp; quản lý dữ liệu an toàn & nhanh hơn nhưng tốn chi phí hạ tầng.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s5-1-definition-methods"
  },
  {
    id: "fc-c3-11",
    front: "Nêu 2 công cụ hỗ trợ công nghệ Mashup chuẩn hóa trong giáo trình?",
    back: "1. EMML (Enterprise Mashup Markup Language): Ngôn ngữ đánh dấu dựa trên XML cho doanh nghiệp.\n2. OpenMashup (Open Markup Language): Tiêu chuẩn mở liên kết widget Web 2.0 và dịch vụ đám mây.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s5-2-benefits-tools"
  },
  {
    id: "fc-c3-12",
    front: "Định nghĩa Service-Oriented Architecture (SOA) và 3 đặc điểm của nó?",
    back: "• SOA: Phương pháp phát triển ứng dụng trong đó các chức năng được thiết kế thành các service tái sử dụng (reusable), giao tiếp qua mạng.\n• 3 Đặc điểm: (1) Modularity; (2) Network communication; (3) Integration capabilities.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s6-1-definition-characteristics"
  },
  {
    id: "fc-c3-13",
    front: "3 Thành phần và 3 thao tác trong tam giác kiến trúc SOA là gì?",
    back: "• 3 Thành phần: Service Provider (Cung cấp), Service Broker (Môi giới danh mục), Service Consumer (Sử dụng).\n• 3 Thao tác: Publish (Phát hành) ➔ Find (Tìm kiếm) ➔ Bind (Ràng buộc gọi dịch vụ).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s6-2-components-examples"
  },
  {
    id: "fc-c3-14",
    front: "Kể tên 4 biện pháp bảo mật cốt lõi (Security measures) trong mô hình SaaS?",
    back: "1. Data encrypt (Mã hóa dữ liệu: TLS & AES-256)\n2. Multi-factor authentication - MFA (Xác thực đa yếu tố)\n3. Access management and authorization (Quản lý phân quyền RBAC)\n4. Backup and restore data (Sao lưu & phục hồi thảm họa).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s7-2-security-measures"
  },
  {
    id: "fc-c3-15",
    front: "Lợi ích khi kết hợp SaaS với công nghệ Blockchain là gì và áp dụng ở đâu?",
    back: "• Lợi ích: Tăng bảo mật, minh bạch (Transparency), chống làm giả (Tamper resistance) và tự động hóa qua Smart Contract.\n• Ứng dụng: Supply chain management, Document management system, Healthcare.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s7-3-future-tech"
  },
  {
    id: "fc-c3-16",
    front: "Lợi ích khi kết hợp SaaS với Big Data là gì và ứng dụng trong những ngành nào?",
    back: "• Lợi ích: Phân tích dữ liệu chuyên sâu (In-depth data analysis) và ra quyết định dựa trên dữ liệu (Data-driven business decisions).\n• Ứng dụng: Bán lẻ (Retail), Tài chính (Financial sector), Y tế (Health industry).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s7-3-future-tech"
  }
];
