/* ============================================================
   GIÁO TRÌNH ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)
   Chương 1: Giới thiệu về Điện toán đám mây
   Biên tập chuẩn học thuật từ tài liệu nguồn taskcanlam
   ============================================================ */

export const cloudComputingChapter1 = {
  id: "cloud-ch1",
  title: "Chương 1",
  subtitle: "Giới thiệu về Điện toán đám mây (Introduction to Cloud Computing)",
  sections: [
    /* ============================
       MỤC ★: OVERVIEW CHƯƠNG
       ============================ */
    {
      id: "cloud-ch1-s0",
      roman: "★",
      title: "Tổng quan chương: Bản đồ & Pipeline Điện toán đám mây",
      subsections: [
        {
          id: "cloud-ch1-s0-overview",
          number: "0",
          title: "Bản đồ kiến thức & Radar kỹ năng Chương 1",
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
                  text: "Chương 1 thiết lập nền tảng nhận thức về Điện toán đám mây: từ lịch sử phát triển Timesharing, 5 đặc tính cốt lõi của chuẩn NIST, 4 mô hình triển khai (Deployment Models), 3 mô hình dịch vụ (Service Models: IaaS - PaaS - SaaS) đến các thách thức bảo mật và ứng dụng thực tiễn trong kỷ nguyên số."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC I: TỔNG QUAN & LỊCH SỬ
       ============================ */
    {
      id: "cloud-ch1-s1",
      roman: "I",
      title: "Tổng quan & Lịch sử Cloud Computing",
      subsections: [
        {
          id: "cloud-ch1-s1-scope",
          number: "1",
          title: "Sự hiện diện của Cloud Computing khắp mọi nơi",
          parts: [
            {
              id: "cloud-ch1-s1-scope-p1",
              label: "a",
              title: "Các lĩnh vực ứng dụng điển hình",
              content: [
                {
                  type: "paragraph",
                  text: "Trong thời đại số hóa, Điện toán đám mây (Cloud Computing) không còn là khái niệm học thuật thuần túy mà đã trở thành huyết mạch vận hành của toàn bộ nền kinh tế số."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Doanh nghiệp khởi nghiệp (Startups):</strong> Lưu trữ và phân phối website trên nền tảng đám mây, tự động co giãn tài nguyên (auto-scaling) khi lưu lượng truy cập đột biến mà không cần mua trước máy chủ vật lý.",
                    "<strong>Hệ sinh thái IoT & Nhà thông minh:</strong> Các cảm biến và thiết bị gia dụng được kết nối và điều phối thông qua đám mây để lưu trữ chuỗi thời gian (time-series data) và phân tích thời gian thực.",
                    "<strong>Chuyển đổi số doanh nghiệp:</strong> Vận hành các hệ thống ERP, CRM, kế toán, tính lương và xuất hóa đơn điện tử dưới dạng phần mềm dịch vụ (SaaS).",
                    "<strong>Giáo dục và làm việc cộng tác:</strong> Soạn thảo tài liệu, bảng tính, bài giảng đồng thời trực tuyến thông qua trình duyệt web.",
                    "<strong>Y tế thông minh (Healthcare):</strong> Thiết bị theo dõi sinh trắc học cá nhân truyền dữ liệu sức khỏe liên tục lên cloud để phát hiện sớm và cảnh báo khẩn cấp.",
                    "<strong>Ngành bán lẻ & Thương mại điện tử:</strong> Thuê tài nguyên tính toán để chạy các thuật toán máy học phân tích hành vi khách hàng và tối ưu chuỗi cung ứng theo chu kỳ."
                  ]
                },
                {
                  type: "definition",
                  term: "Nguyên lý cốt lõi cần nhớ",
                  definition: "Cloud hiện diện ở hầu hết mọi lĩnh vực đời sống và công nghiệp: Web, IoT, Doanh nghiệp, Giáo dục, Y tế, Bán lẻ. Bản chất là dịch chuyển từ việc sở hữu tài sản cố định (CapEx) sang tiêu thụ tài nguyên như tiện ích điện nước (OpEx)."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch1-s1-history",
          number: "2",
          title: "Các cột mốc lịch sử phát triển của Cloud Computing",
          parts: [
            {
              id: "cloud-ch1-s1-history-p1",
              label: "b",
              title: "Tiến trình qua các thập kỷ",
              content: [
                {
                  type: "paragraph",
                  text: "Lịch sử Điện toán đám mây là một chuỗi tiến hóa liên tục của các mô hình chia sẻ tài nguyên và tối ưu hóa năng lực tính toán:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Thập niên 1960 (Early Concepts):</strong> Khái niệm ban đầu về máy tính như một tiện ích công cộng (utility computing). IBM và DEC cung cấp mô hình phân chia thời gian (<em>Timesharing</em>) cho phép nhiều người dùng kết nối qua thiết bị đầu cuối vào cùng một siêu máy chủ.",
                    "<strong>Năm 1972:</strong> IBM phát triển máy ảo (Virtual Machine - VM) đầu tiên trên hệ máy mainframe CP-40/VM-370, đặt nền móng cho công nghệ ảo hóa hiện đại.",
                    "<strong>Năm 1977:</strong> Biểu tượng đám mây (Cloud Symbol) lần đầu được sử dụng trong sơ đồ mạng để đại diện cho vùng mạng viễn thông phức tạp mà điểm đầu cuối không cần biết chi tiết bên trong.",
                    "<strong>Thập niên 1990 (The Rise of the Internet):</strong> Internet bùng nổ; năm 1991 mạng toàn cầu World Wide Web (WWW) ra đời. Năm 1997, giáo sư Ramnath Chellappa đưa ra định nghĩa học thuật đầu tiên về thuật ngữ <em>Cloud Computing</em>.",
                    "<strong>Năm 1999:</strong> Salesforce thành lập, tiên phong trong việc cung cấp phần mềm doanh nghiệp CRM thuần túy qua trình duyệt Internet mà không cần cài đặt.",
                    "<strong>Thập niên 2000 (The Birth of Modern Cloud):</strong> Năm 2002, Amazon ra mắt AWS; năm 2006 ra mắt Hadoop và dịch vụ EC2/S3; năm 2008 Google ra mắt Google App Engine; năm 2010 Microsoft thương mại hóa Windows Azure.",
                    "<strong>Năm 2017 đến nay:</strong> Mô hình tính phí theo giây (Pay-per-second billing), bùng nổ mạng phân phối nội dung CDN, Serverless và các kiến trúc bản địa đám mây (Cloud-Native)."
                  ]
                },
                {
                  type: "highlight",
                  text: "Quy luật 3 giai đoạn tiến hóa: <strong>Timesharing (1960s) ➔ Internet & Ảo hóa (1990s) ➔ Đám mây hiện đại đa dịch vụ (2000s đến nay)</strong>."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC II: ĐỊNH NGHĨA & 5 ĐẶC TÍNH NIST
       ============================ */
    {
      id: "cloud-ch1-s2",
      roman: "II",
      title: "Định nghĩa, Kiến trúc & 5 Đặc tính Cốt lõi (NIST)",
      subsections: [
        {
          id: "cloud-ch1-s2-def",
          number: "1",
          title: "Định nghĩa chuẩn và Mô hình Kiến trúc cơ bản",
          parts: [
            {
              id: "cloud-ch1-s2-def-p1",
              label: "a",
              title: "Khái niệm học thuật theo Viện Tiêu chuẩn NIST",
              content: [
                {
                  type: "definition",
                  term: "Định nghĩa Điện toán đám mây (NIST SP 800-145)",
                  definition: "Điện toán đám mây là mô hình cho phép truy cập mạng thuận tiện, theo nhu cầu (on-demand) tới một tập hợp tài nguyên tính toán có thể cấu hình được (ví dụ: mạng, máy chủ, lưu trữ, ứng dụng và dịch vụ). Các tài nguyên này có thể được cấp phát và giải phóng nhanh chóng với nỗ lực quản lý tối thiểu hoặc sự tương tác tối thiểu từ nhà cung cấp dịch vụ."
                },
                {
                  type: "paragraph",
                  text: "Về mặt kiến trúc vật lý và logic, người dùng đầu cuối (thiết bị di động, máy trạm cá nhân, máy in văn phòng) kết nối thông qua hạ tầng định tuyến Internet (Routers / Switches) để tiếp cận vùng tài nguyên tập trung được trừu tượng hóa (Virtual Desktop, Application Engine, Database, Storage Cluster)."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch1-s2-features",
          number: "2",
          title: "5 Đặc tính Cốt lõi của Điện toán đám mây (Essential Characteristics)",
          parts: [
            {
              id: "cloud-ch1-s2-features-p1",
              label: "b",
              title: "5 Tiêu chí bắt buộc theo chuẩn NIST",
              content: [
                {
                  type: "paragraph",
                  text: "Bất kỳ hệ thống nào muốn được công nhận là một đám mây chuẩn mực đều phải đáp ứng đầy đủ cả 5 thuộc tính sau:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>1. On-demand self-service (Tự phục vụ theo nhu cầu):</strong> Học viên hoặc kỹ sư có thể tự động cấp phát tài nguyên tính toán như thời gian máy chủ, dung lượng lưu trữ mạng thông qua giao diện Web portal hoặc API mà không cần sự can thiệp con người từ nhà cung cấp.",
                    "<strong>2. Broad network access (Truy cập mạng diện rộng):</strong> Tài nguyên sẵn sàng được truy cập qua mạng thông qua các giao thức tiêu chuẩn, tương thích với các nền tảng khách hàng không đồng nhất (điện thoại di động, máy tính bảng, máy tính xách tay và máy trạm).",
                    "<strong>3. Resource pooling (Dùng chung tài nguyên):</strong> Nguồn tài nguyên tính toán của nhà cung cấp được gộp lại để phục vụ nhiều người tiêu dùng thông qua mô hình đa khách thuê (Multi-tenant), với các tài nguyên vật lý và ảo khác nhau được gán và tái phân bổ linh hoạt theo nhu cầu của khách hàng.",
                    "<strong>4. Rapid elasticity (Co giãn nhanh chóng):</strong> Năng lực tính toán có thể được cung cấp và thu hồi một cách linh hoạt, nhanh chóng, trong một số trường hợp là tự động, nhằm mở rộng hoặc thu nhỏ quy mô tương ứng với tải công việc.",
                    "<strong>5. Measured service (Dịch vụ đo lường được):</strong> Hệ thống đám mây tự động kiểm soát và tối ưu hóa việc sử dụng tài nguyên bằng cách tận dụng năng lực đo lường ở một mức độ trừu tượng thích hợp với từng loại dịch vụ (dung lượng lưu trữ, băng thông mạng, số chu kỳ CPU tiêu thụ). Mức sử dụng tài nguyên có thể được theo dõi, kiểm soát và báo cáo minh bạch cho cả bên cung cấp lẫn bên sử dụng."
                  ]
                },
                {
                  type: "highlight",
                  text: "Từ khóa ghi nhớ nhanh: <strong>On-demand (Tự cấp) ➔ Broad access (Đa thiết bị) ➔ Pooling (Đa khách thuê) ➔ Elasticity (Co giãn nhanh) ➔ Measured (Trả theo lượng dùng)</strong>."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC III: CÁC MÔ HÌNH CLOUD
       ============================ */
    {
      id: "cloud-ch1-s3",
      roman: "III",
      title: "Phân loại Mô hình Đám mây: Triển khai & Dịch vụ",
      subsections: [
        {
          id: "cloud-ch1-s3-deployment",
          number: "1",
          title: "Mô hình Triển khai (Deployment Models)",
          parts: [
            {
              id: "cloud-ch1-s3-deployment-p1",
              label: "a",
              title: "4 Mô hình triển khai căn bản và Multi-Cloud",
              content: [
                {
                  type: "paragraph",
                  text: "Mô hình triển khai trả lời cho câu hỏi: <em>Hạ tầng đám mây nằm ở đâu, do ai quản lý và phạm vi phục vụ là những đối tượng nào?</em>"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Private Cloud (Đám mây riêng):</strong> Hạ tầng đám mây được xây dựng dành riêng cho một tổ chức duy nhất sử dụng. Có thể do chính tổ chức đó hoặc bên thứ ba sở hữu, quản lý và vận hành. <em>Ưu điểm:</em> Bảo mật và kiểm soát tối đa. <em>Nhược điểm:</em> Chi phí đầu tư ban đầu (CapEx) và chi phí vận hành rất cao.",
                    "<strong>Public Cloud (Đám mây công cộng):</strong> Hạ tầng được cung cấp cho công chúng hoặc một nhóm ngành lớn, do một doanh nghiệp chuyên nghiệp sở hữu (AWS, Microsoft Azure, Google Cloud). <em>Ưu điểm:</em> Chi phí đầu vào thấp, trả tiền theo mức dùng thực tế, khả năng mở rộng vô hạn. <em>Nhược điểm:</em> Kiểm soát hạn chế, phải chia sẻ hạ tầng dùng chung.",
                    "<strong>Community Cloud (Đám mây cộng đồng):</strong> Được chia sẻ bởi nhiều tổ chức có cùng mối quan tâm, mục tiêu hoặc yêu cầu tuân thủ chính sách chung (ví dụ: khối ngân hàng, liên minh các trường đại học, khối cơ quan chính phủ).",
                    "<strong>Hybrid Cloud (Đám mây lai):</strong> Sự kết hợp của hai hoặc nhiều mô hình đám mây riêng biệt (Private, Community hoặc Public). Các đám mây này vẫn giữ tư cách độc lập nhưng được liên kết chặt chẽ bởi công nghệ tiêu chuẩn cho phép chuyển giao dữ liệu và ứng dụng (ví dụ: phân bổ đột biến đám mây - Cloud bursting).",
                    "<strong>Multi-Cloud (Đa đám mây):</strong> Xu hướng sử dụng đồng thời nhiều nhà cung cấp Public Cloud khác nhau (ví dụ vừa dùng AWS vừa dùng GCP) nhằm loại trừ rủi ro phụ thuộc vào một nhà cung cấp duy nhất (Vendor Lock-in) và tận dụng thế mạnh riêng biệt của từng hãng."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch1-s3-service",
          number: "2",
          title: "Mô hình Dịch vụ (Service Models): Kim tự tháp SPI",
          parts: [
            {
              id: "cloud-ch1-s3-service-p1",
              label: "b",
              title: "IaaS ➔ PaaS ➔ SaaS: Trách nhiệm quản lý",
              content: [
                {
                  type: "paragraph",
                  text: "Ba mô hình dịch vụ truyền thống (thường gọi là tam giác SPI: SaaS - PaaS - IaaS) phản ánh mức độ trừu tượng hóa và phân chia trách nhiệm quản trị giữa khách hàng và nhà cung cấp:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>IaaS (Infrastructure as a Service - Hạ tầng như một dịch vụ):</strong> Cung cấp tài nguyên tính toán nền tảng bao gồm máy chủ ảo, năng lực xử lý, bộ nhớ lưu trữ và mạng. Người dùng có toàn quyền cài đặt và chạy bất kỳ phần mềm nào, từ hệ điều hành đến ứng dụng (Ví dụ: AWS EC2, Google Compute Engine, Azure Virtual Machines). Triết lý: <em>Migrate to it (Di chuyển lên đám mây)</em>.",
                    "<strong>PaaS (Platform as a Service - Nền tảng như một dịch vụ):</strong> Cung cấp môi trường phát triển và thực thi ứng dụng. Khách hàng chỉ cần quản lý mã nguồn và dữ liệu ứng dụng, toàn bộ hệ điều hành, runtime, middleware, database máy chủ đều do nhà cung cấp quản trị (Ví dụ: Google App Engine, Heroku, AWS Elastic Beanstalk). Triết lý: <em>Build on it (Xây dựng trên nền tảng)</em>.",
                    "<strong>SaaS (Software as a Service - Phần mềm như một dịch vụ):</strong> Cung cấp ứng dụng hoàn chỉnh chạy trên hạ tầng đám mây, người dùng cuối truy cập thông qua trình duyệt web mà không cần cài đặt hay bảo trì bất kỳ thành phần nào (Ví dụ: Gmail, Google Docs, Microsoft 365, Salesforce). Triết lý: <em>Consume it (Tiêu thụ dịch vụ)</em>."
                  ]
                },
                {
                  type: "highlight",
                  text: "Nguyên lý bậc thang quản lý: Càng đi lên cao (từ IaaS ➔ PaaS ➔ SaaS), người dùng càng ít phải nhọc công quản trị hạ tầng, nhưng sự linh hoạt tùy biến cấu hình hệ thống cũng sẽ giảm dần tương ứng."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC IV: CÔNG CỤ & THÁCH THỨC
       ============================ */
    {
      id: "cloud-ch1-s4",
      roman: "IV",
      title: "Công cụ Quản lý, Kiến trúc Phân tầng & Thách thức",
      subsections: [
        {
          id: "cloud-ch1-s4-tools",
          number: "1",
          title: "Công cụ Quản lý & 3 Lớp Kiến trúc Nền tảng",
          parts: [
            {
              id: "cloud-ch1-s4-tools-p1",
              label: "a",
              title: "Hệ thống quản lý và 3 tầng kiến trúc",
              content: [
                {
                  type: "paragraph",
                  text: "Để điều phối hàng ngàn máy chủ vật lý thành một thể thống nhất, các kiến trúc sư sử dụng hai nhóm công cụ quản lý chính:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Mã nguồn mở (Open-Source):</strong> OpenStack (chuẩn công nghiệp phổ biến nhất), Apache CloudStack, Eucalyptus.",
                    "<strong>Thương mại (Commercial):</strong> VMware vCloud Director, Microsoft Hyper-V kết hợp System Center."
                  ]
                },
                {
                  type: "paragraph",
                  text: "Hệ thống được cấu trúc thành 3 lớp phân tầng mạch lạc:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>1. Foundation layer (Lớp nền tảng):</strong> Bao gồm phần cứng vật lý máy chủ, hạ tầng mạng, tủ rack trung tâm dữ liệu và phần mềm ảo hóa (Hypervisor).",
                    "<strong>2. Infrastructure services (Lớp dịch vụ hạ tầng):</strong> Cung cấp năng lực tính toán (Compute), bộ nhớ khối/đối tượng (Storage) và mạng ảo hóa (Software-Defined Networking).",
                    "<strong>3. Application services (Lớp dịch vụ ứng dụng):</strong> Nơi triển khai các API, môi trường thực thi và ứng dụng nghiệp vụ phục vụ trực tiếp người tiêu dùng."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch1-s4-challenges",
          number: "2",
          title: "5 Thách thức lớn của Điện toán đám mây",
          parts: [
            {
              id: "cloud-ch1-s4-challenges-p1",
              label: "b",
              title: "Các rào cản kỹ thuật và quản trị",
              content: [
                {
                  type: "paragraph",
                  text: "Mặc dù mang lại lợi ích kinh tế vượt trội, việc chuyển dịch lên Cloud đối mặt với 5 rào cản nghiêm trọng:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Bảo mật (Security & Privacy):</strong> Dữ liệu và mã nguồn nằm trên máy chủ của bên thứ ba, tiềm ẩn nguy cơ rò rỉ hoặc bị truy cập trái phép nếu không mã hóa đầy đủ.",
                    "<strong>Thiếu hụt nguồn nhân lực (Lack of resources/expertise):</strong> Sự khan hiếm kỹ sư có chứng chỉ chuyên sâu về kiến trúc và quản trị đám mây.",
                    "<strong>Quản trị và kiểm soát chi phí (Governance):</strong> Nguy cơ bùng nổ chi phí (Cloud sprawl) do việc cấp phát tài nguyên quá dễ dàng mà thiếu chính sách giám sát tự động.",
                    "<strong>Tuân thủ pháp lý (Compliance):</strong> Rào cản về chủ quyền dữ liệu (Data Sovereignty) khi luật pháp yêu cầu dữ liệu nhạy cảm của công dân phải đặt trên lãnh thổ quốc gia sở tại.",
                    "<strong>Độ phức tạp đa đám mây (Multi-Cloud Complexity):</strong> Việc đồng bộ dữ liệu và bảo mật nhất quán giữa nhiều nhà cung cấp khác nhau đòi hỏi quy trình kỹ thuật rất tinh vi."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC V: TỔNG KẾT & GHI NHỚ
       ============================ */
    {
      id: "cloud-ch1-s5",
      roman: "V",
      title: "Tổng kết Chương 1 & Bảng Từ khóa Cốt lõi",
      subsections: [
        {
          id: "cloud-ch1-s5-summary",
          number: "1",
          title: "Bảng thuật ngữ trọng tâm & Ghi nhớ ôn thi",
          parts: [
            {
              id: "cloud-ch1-s5-summary-p1",
              label: "a",
              title: "Bảng tổng hợp từ vựng chuyên ngành",
              content: [
                {
                  type: "table",
                  headers: ["Khái niệm", "Thuật ngữ tiếng Anh", "Ý nghĩa học thuật cốt lõi"],
                  rows: [
                    ["Ảo hóa", "Virtualization", "Công nghệ trừu tượng hóa phần cứng vật lý để tạo ra nhiều máy ảo VM độc lập."],
                    ["Khả năng mở rộng", "Scalability", "Khả năng tăng hoặc giảm tài nguyên hệ thống một cách chủ động theo nhu cầu."],
                    ["Tự động co giãn", "Auto Scaling", "Cơ chế tự động bổ sung hoặc gỡ bỏ máy chủ theo tải lưu lượng thời gian thực."],
                    ["Mô hình dịch vụ", "Service Models", "Phân loại theo mức trừu tượng: IaaS (hạ tầng), PaaS (nền tảng), SaaS (phần mềm)."],
                    ["Mô hình triển khai", "Deployment Models", "Phân loại theo quyền sở hữu: Private (riêng), Public (chung), Community, Hybrid."],
                    ["Tính sẵn sàng", "Availability", "Tỷ lệ thời gian dịch vụ duy trì hoạt động ổn định và người dùng truy cập được."],
                    ["Khả năng chịu lỗi", "Fault Tolerance", "Khả năng duy trì vận hành bình thường nhờ nhân bản dữ liệu và dự phòng khi có linh kiện hỏng."]
                  ]
                },
                {
                  type: "definition",
                  term: "7 Luận điểm vàng trước khi thi",
                  definition: "1. Cloud = Dịch vụ IT qua Internet, on-demand, không cần đầu tư hạ tầng vật lý ban đầu.<br/>2. 5 đặc tính NIST: On-demand, Broad access, Pooling, Elasticity, Measured.<br/>3. 4 mô hình triển khai: Private, Public, Community, Hybrid (+ Multi-Cloud).<br/>4. 3 mô hình dịch vụ: IaaS (Migrate), PaaS (Build), SaaS (Consume).<br/>5. 5 thách thức: Security, Expertise, Governance, Compliance, Multi-Cloud.<br/>6. AWS là ví dụ tiêu biểu cho IaaS: Scalability, Auto Scaling, Pay-as-you-go, Fault Tolerance.<br/>7. Web 2.0 (tương tác 2 chiều) là tiền đề kỹ thuật trực tiếp thúc đẩy các ứng dụng đám mây cộng tác."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
