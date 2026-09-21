/* ============================================================
   GIÁO TRÌNH ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)
   Chương 5: Infrastructure as a Service (IaaS)
   Biên soạn chuẩn học thuật theo tài liệu bài giảng chính thức
   Phạm vi: Toàn bộ Chương 5 (Mục I đến VIII hoàn chỉnh)
   ============================================================ */

export const cloudComputingChapter5 = {
  id: "cloud-ch5",
  title: "Chương 5",
  subtitle: "Infrastructure as a Service (IaaS)",
  sections: [
    /* ============================
       MỤC ★: TỔNG QUAN CHƯƠNG (Hero Banner sẽ làm sau cùng)
       ============================ */
    {
      id: "cloud-ch5-s0",
      roman: "★",
      title: "Tổng quan chương: Infrastructure as a Service (IaaS)",
      subsections: [
        {
          id: "cloud-ch5-s0-overview",
          number: "0",
          title: "Bản đồ kiến thức cốt lõi Chương 5 (Mục I - IV)",
          parts: [
            {
              id: "cloud-ch5-s0-p1",
              label: "★",
              title: "Tổng quan kiến trúc hạ tầng đám mây IaaS",
              content: [
                {
                  type: "highlight",
                  text: "Chương 5 nghiên cứu toàn diện mô hình Hạ tầng như một Dịch vụ (Infrastructure as a Service - IaaS): Định nghĩa 'Thuê phần cứng thay vì tự mua', 5 thành phần cơ bản (Servers, Storage, Networking, Virtualization system, Management & Automation), phân tích đối soát 3 loại máy chủ (Physical Server / Bare-metal, Dedicated Virtual Server, Shared Virtual Server), bộ tam công nghệ lưu trữ đám mây (Block Storage, File Storage, Object Storage), hạ tầng mạng ảo VPC, kỹ thuật ảo hóa Hypervisor vs Containerization, tự động hóa hạ tầng (IaC) và nguyên lý hoạt động của Cân bằng tải (Load Balancing) cùng 3 thuật toán kinh điển Round Robin, Least Connections và IP Hash."
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Thông báo kế hoạch Hero Banner Mục ★",
                  text: "Theo đúng chỉ thị của bạn và quy chuẩn StudyMaster, Hero Banner Mục ★ (Section 0) của Chương 5 sẽ được thiết kế ở bước sau cùng sau khi toàn bộ nội dung giáo trình được bạn nghiệm thu."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC I: TỔNG QUAN VỀ IAAS
       ============================ */
    {
      id: "cloud-ch5-s1",
      roman: "I",
      title: "Tổng quan về IaaS (IaaS Overview & Core Components)",
      subsections: [
        {
          id: "cloud-ch5-s1-1-definition",
          number: "1.1",
          title: "Định nghĩa IaaS & 5 Thành phần cơ bản",
          parts: [
            {
              id: "cloud-ch5-s1-1-p1",
              label: "1.1.1",
              title: "Bản chất học thuật của Infrastructure as a Service",
              content: [
                {
                  type: "paragraph",
                  text: "Infrastructure as a Service (IaaS) là mô hình dịch vụ điện toán đám mây cung cấp các tài nguyên hạ tầng điện toán thô — bao gồm máy chủ tính toán (Servers), hệ thống lưu trữ (Storage) và hạ tầng mạng (Networks) — cho người dùng thông qua mạng Internet."
                },
                {
                  type: "highlight",
                  text: "Bản chất cốt lõi: Thay vì phải bỏ một khoản vốn khổng lồ (CAPEX) để tự đầu tư mua sắm phần cứng, xây dựng phòng máy chủ (Datacenter) và tốn kém chi phí quản lý hạ tầng vật lý, người dùng sẽ 'thuê' tài nguyên hạ tầng theo nhu cầu sử dụng thực tế (OPEX)."
                },
                {
                  type: "paragraph",
                  text: "Theo tài liệu bài giảng chính thức, một kiến trúc IaaS hoàn chỉnh được cấu thành từ 5 thành phần cơ bản sau đây:"
                },
                {
                  type: "bullets",
                  items: [
                    "Servers (Máy chủ): Cung cấp năng lực tính toán dưới dạng máy chủ vật lý thật (Physical/Bare-metal) hoặc máy chủ ảo (Virtual Machines) chạy các hệ điều hành Linux hoặc Windows Server.",
                    "Storage (Lưu trữ): Cung cấp không gian lưu trữ dữ liệu bền vững trên các ổ đĩa ảo với cơ chế tự động sao lưu, nhân bản và co giãn dung lượng tức thời.",
                    "Networking (Hạ tầng mạng): Cung cấp mạng riêng ảo (VPC), tường lửa (Firewall) kiểm soát luồng truy cập, địa chỉ IP tĩnh và hệ thống cân bằng tải (Load Balancer).",
                    "Virtualization System (Hệ thống ảo hóa): Công nghệ nền tảng (Hypervisor, Container) giúp phân tách phần cứng vật lý thành nhiều máy ảo độc lập, tối ưu hóa tài nguyên.",
                    "Management & Automation (Quản lý & Tự động hóa): Cung cấp bảng điều khiển (Console), công cụ dòng lệnh (CLI) và các giải pháp tự động hóa triển khai hạ tầng bằng mã nguồn (Infrastructure as Code - IaC)."
                  ]
                },
                {
                  type: "table",
                  headers: ["Thành Phần Cơ Bản", "Mô Tả Chức Năng Chi Tiết", "Giá Trị Mang Lại"],
                  rows: [
                    ["Servers", "Máy chủ vật lý (Bare-metal) hoặc máy chủ ảo (VMs)", "Cung cấp vCPU và RAM để chạy hệ điều hành"],
                    ["Storage", "Lưu trữ dữ liệu trên ổ đĩa ảo (Block, File, Object)", "Bảo vệ an toàn dữ liệu, chống mất mát do hỏng ổ đĩa"],
                    ["Networking", "Mạng riêng ảo, Firewall, Load Balancer, Gateway", "Kết nối an toàn, cô lập logic và phân phối lưu lượng"],
                    ["Virtualization System", "Hypervisor & Containerization", "Tạo server ảo, tối ưu hiệu suất sử dụng tài nguyên"],
                    ["Management & Automation", "Bảng điều khiển Web, CLI, Công cụ IaC (Terraform)", "Tự động hóa triển khai, mở rộng và giám sát 24/7"]
                  ]
                },
                {
                  type: "iaas-infrastructure-stack-visualizer"
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "Khẩu quyết ghi nhớ cốt lõi (Must-Know for Exams)",
                  text: "IaaS = Thuê hạ tầng (Server + Storage + Network) ➔ Giúp doanh nghiệp tiết kiệm tối đa chi phí đầu tư ban đầu (chuyển đổi hoàn toàn từ CAPEX sang OPEX)."
                },
                {
                  type: "micro-quiz",
                  question: "Theo định nghĩa chuẩn học thuật, bản chất cốt lõi của mô hình Infrastructure as a Service (IaaS) là gì?",
                  options: [
                    "Người dùng thuê tài nguyên hạ tầng phần cứng (servers, storage, networks) qua Internet thay vì tự mua",
                    "Người dùng mua đĩa phần mềm đóng gói để tự cài đặt cục bộ lên máy tính cá nhân tại văn phòng",
                    "Nhà cung cấp đám mây bàn giao toàn quyền sở hữu máy chủ vật lý cho khách hàng mang về nhà",
                    "Người dùng chỉ thuê một phần mềm hoàn chỉnh qua trình duyệt Web mà không có quyền cài đặt OS"
                  ],
                  answerIndex: 0,
                  explanation: "Bản chất của IaaS là dịch vụ đám mây cho phép người dùng thuê tài nguyên hạ tầng (máy chủ, ổ đĩa, mạng) qua Internet, loại bỏ gánh nặng mua sắm phần cứng và bảo trì phòng máy chủ vật lý.",
                  hint: "Khẩu quyết: 'Thuê hạ tầng (Server + Storage + Network) qua Internet'."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC II: CÁC LOẠI SERVER TRONG IAAS
       ============================ */
    {
      id: "cloud-ch5-s2",
      roman: "II",
      title: "Các loại Server trong IaaS (Server Types in IaaS)",
      subsections: [
        {
          id: "cloud-ch5-s2-1-server-types",
          number: "2.1",
          title: "Physical Server, Dedicated Virtual Server & Shared Virtual Server",
          parts: [
            {
              id: "cloud-ch5-s2-1-p1",
              label: "2.1.1",
              title: "Chi tiết kỹ thuật 3 loại máy chủ trong môi trường IaaS",
              content: [
                {
                  type: "paragraph",
                  text: "Trong mô hình IaaS, tùy thuộc vào nhu cầu về hiệu năng, mức độ bảo mật và ngân sách tài chính, doanh nghiệp có thể lựa chọn 1 trong 3 loại máy chủ sau đây:"
                },
                {
                  type: "bullets",
                  items: [
                    "2.1. Physical Server (Máy chủ vật lý / Bare-Metal): Thiết bị phần cứng thật bao gồm CPU, RAM, ổ lưu trữ (HDD/SSD), bo mạch chủ và bộ nguồn. Chạy hệ điều hành (Linux, Windows Server) giao tiếp trực tiếp với phần cứng mà không thông qua lớp ảo hóa. Đặc điểm: Hiệu năng cao nhất, tùy biến toàn diện, chịu tải cực lớn. Ưu điểm: Hiệu năng ổn định tuyệt đối, kiểm soát toàn diện. Nhược điểm: Chi phí đầu tư rất cao, khó mở rộng nhanh, quản trị phức tạp. Ứng dụng phù hợp: Phân tích dữ liệu lớn (Big Data Analytics), các ứng dụng doanh nghiệp quan trọng sống còn (Critical Enterprise Apps).",
                    "2.2. Dedicated Virtual Server (Máy chủ ảo chuyên dụng): Máy chủ ảo sở hữu tài nguyên phần cứng riêng biệt, không chia sẻ với bất kỳ máy chủ nào khác trên cùng máy vật lý. Đặc điểm: Hiệu năng ổn định, tùy biến cao, mở rộng linh hoạt. Ưu điểm: Hiệu năng cao (hoàn toàn không bị ảnh hưởng bởi tải của server khác), bảo mật tốt, dễ quản lý và tùy biến. Nhược điểm: Chi phí cao hơn máy chủ dùng chung, đòi hỏi kỹ năng quản trị. Ứng dụng phù hợp: Ngành tài chính / Y tế (yêu cầu bảo mật cao), hệ thống ERP/CRM, website thương mại điện tử lớn.",
                    "2.3. Shared Virtual Server (Máy chủ ảo dùng chung): Máy chủ ảo chia sẻ chung tài nguyên phần cứng (CPU, RAM, storage) với các máy chủ ảo khác trên cùng một máy vật lý. Ưu điểm: Chi phí thấp (rất rẻ), dễ quản lý và triển khai nhanh chóng, linh hoạt. Nhược điểm: Hiệu năng không ổn định (do hiện tượng láng giềng ồn ào - Noisy Neighbor), bảo mật thấp hơn, khả năng tùy biến bị hạn chế. Ứng dụng phù hợp: Website cá nhân, blog tin tức, website giới thiệu doanh nghiệp nhỏ, dự án thử nghiệm (Test/Dev)."
                  ]
                },
                {
                  type: "table",
                  headers: ["Loại Server", "Hiệu Năng", "Chi Phí", "Mức Độ Bảo Mật", "Ứng Dụng Điển Hình"],
                  rows: [
                    ["Physical Server", "Cao nhất (Ổn định 100%)", "Cao nhất (Đắt đỏ)", "Cao (Toàn quyền kiểm soát)", "Big Data, Critical Enterprise Apps"],
                    ["Dedicated Virtual", "Cao, rất ổn định", "Trung bình - cao", "Cao (Tài nguyên riêng biệt)", "Tài chính/Y tế, ERP/CRM, E-Commerce"],
                    ["Shared Virtual", "Không ổn định (Chia sẻ)", "Thấp (Rất rẻ)", "Thấp (Dùng chung phần cứng)", "Website cá nhân/blog, Test/Dev"]
                  ]
                },
                {
                  type: "server-types-comparison-duel"
                },
                {
                  type: "callout",
                  variant: "danger",
                  title: "Trọng tâm trắc nghiệm: Hiện tượng 'Noisy Neighbor' trong Shared Server",
                  text: "Trong Shared Virtual Server, nếu một máy ảo láng giềng bị quá tải hoặc chạy tác vụ nặng, nó sẽ chiếm dụng CPU/RAM chung, làm suy giảm hiệu năng của các máy ảo khác trên cùng máy vật lý. Đây là lý do các hệ thống Ngân hàng và Y tế bắt buộc phải dùng Dedicated hoặc Physical Server."
                },
                {
                  type: "micro-quiz",
                  question: "Một công ty thương mại điện tử lớn cần triển khai cổng thanh toán trực tuyến xử lý hàng triệu giao dịch tài chính với yêu cầu bảo mật cao và tài nguyên không bị ảnh hưởng bởi server khác. Loại server IaaS nào là phù hợp nhất?",
                  options: [
                    "Dedicated Virtual Server (Máy chủ ảo chuyên dụng với tài nguyên riêng biệt)",
                    "Shared Virtual Server (Máy chủ ảo dùng chung chia sẻ tài nguyên giá rẻ)",
                    "Máy tính cá nhân của lập trình viên cắm dây mạng tại văn phòng",
                    "Chỉ sử dụng đĩa mềm lưu trữ dữ liệu offline không cần máy chủ"
                  ],
                  answerIndex: 0,
                  explanation: "Dedicated Virtual Server cung cấp tài nguyên riêng biệt, không chia sẻ CPU/RAM với người khác, đáp ứng hoàn hảo yêu cầu bảo mật cao, hiệu năng ổn định và tính linh hoạt cho cổng thanh toán tài chính và thương mại điện tử.",
                  hint: "Tài nguyên riêng biệt + Bảo mật cao cho tài chính = Dedicated Virtual Server."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC III: CÁC THÀNH PHẦN KHÁC CỦA IAAS
       ============================ */
    {
      id: "cloud-ch5-s3",
      roman: "III",
      title: "Các thành phần khác của IaaS (Storage, Networking, Virtualization & Automation)",
      subsections: [
        {
          id: "cloud-ch5-s3-1-other-components",
          number: "3.1",
          title: "3 Loại Storage, Hạ tầng mạng, Ảo hóa & Quản lý tự động hóa",
          parts: [
            {
              id: "cloud-ch5-s3-1-p1",
              label: "3.1.1",
              title: "Khảo sát chuyên sâu 4 trụ cột kỹ thuật bổ trợ trong IaaS",
              content: [
                {
                  type: "paragraph",
                  text: "Bên cạnh năng lực tính toán của máy chủ, kiến trúc IaaS phụ thuộc chặt chẽ vào 4 thành phần hạ tầng kỹ thuật chuyên sâu sau đây:"
                },
                {
                  type: "bullets",
                  items: [
                    "3.1. Storage (Hệ thống lưu trữ dữ liệu): Bao gồm 3 loại hình chính:\n  • Object Storage: Lưu trữ dữ liệu dạng đối tượng (gồm Binary data + Metadata + Unique ID), truy cập qua giao thức HTTP/HTTPS REST API, dung lượng mở rộng vô hạn (ví dụ Amazon S3, Google Cloud Storage, lưu ảnh/video/backup).\n  • Block Storage: Cung cấp các khối dữ liệu gắn trực tiếp vào máy chủ như ổ đĩa cứng vật lý SSD/HDD, tốc độ cực nhanh, độ trễ thấp, tối ưu cho Hệ điều hành (OS boot disk) và Cơ sở dữ liệu (ví dụ Amazon EBS, GCP Persistent Disk).\n  • File Storage: Hệ thống tệp tin dùng chung được tổ chức theo cây thư mục phân cấp, cho phép nhiều máy chủ truy cập và đọc/ghi đồng thời qua giao thức mạng NFS/SMB (ví dụ Amazon EFS, Azure Files).",
                    "3.2. Networking (Hạ tầng mạng ảo):\n  • Virtual Network (VPC): Mạng riêng ảo kết nối an toàn các server và dịch vụ bên trong đám mây, cho phép tự phân chia Subnet công khai/riêng tư.\n  • Firewall (Tường lửa / Security Groups): Kiểm soát luồng traffic vào/ra, bảo vệ an ninh bằng cách đóng/mở các cổng dịch vụ.\n  • Load Balancer: Phân phối lưu lượng truy cập đồng đều giữa các server trong cụm.",
                    "3.3. Virtualization System (Hệ thống ảo hóa):\n  • Hypervisor (Bộ giám sát máy ảo): Phần mềm tạo và quản lý máy chủ ảo từ tài nguyên phần cứng vật lý (KVM, VMware ESXi, Hyper-V).\n  • Containerization (Đóng gói container): Ảo hóa ở tầng hệ điều hành, đóng gói mã nguồn và thư viện thành container siêu nhẹ (Docker, containerd).",
                    "3.4. Management & Automation (Quản lý & Tự động hóa):\n  • Management Tools: Giao diện Web Console và Dashboard trực quan giúp theo dõi và quản lý tài nguyên.\n  • Automation: Các công cụ tự động triển khai, cấu hình và mở rộng tài nguyên (Hạ tầng như mã nguồn - Infrastructure as Code như Terraform, Ansible, CloudFormation, Auto-scaling)."
                  ]
                },
                {
                  type: "cloud-storage-triad-sandbox"
                },
                {
                  type: "callout",
                  variant: "accent",
                  title: "Mẹo phân biệt nhanh 3 loại Storage khi đi thi",
                  text: "1. Block Storage: Gắn như ổ cứng trực tiếp vào server ➔ Dùng cho OS & CSDL. 2. File Storage: Cây thư mục chia sẻ cho NHIỀU server cùng truy cập (NFS). 3. Object Storage: Lưu trữ tệp độc lập qua HTTP API với Metadata ➔ Dùng cho Ảnh, Video, Sao lưu dự phòng."
                },
                {
                  type: "micro-quiz",
                  question: "Khi cần lưu trữ dữ liệu cho Hệ quản trị Cơ sở dữ liệu (Database) hoặc làm ổ đĩa khởi động hệ điều hành (Boot disk) đòi hỏi tốc độ đọc/ghi (IOPS) cực nhanh và độ trễ thấp, loại lưu trữ nào trong IaaS là lựa chọn tối ưu nhất?",
                  options: [
                    "Block Storage (cung cấp khối dữ liệu gắn trực tiếp vào server như ổ SSD/HDD)",
                    "Object Storage (lưu trữ tệp qua HTTP API không thể gắn trực tiếp làm ổ đĩa boot)",
                    "File Storage (hệ thống tệp mạng NFS có độ trễ cao hơn không tối ưu cho DB nặng)",
                    "Chỉ sử dụng bộ nhớ đệm Cache tạm thời không lưu dữ liệu lâu dài"
                  ],
                  answerIndex: 0,
                  explanation: "Block Storage chia dữ liệu thành các khối nhị phân và giao tiếp qua bus ổ đĩa với độ trễ micro-giây, là lựa chọn bắt buộc cho việc cài đặt hệ điều hành (OS) và lưu trữ CSDL hiệu năng cao.",
                  hint: "Ổ đĩa gắn trực tiếp vào server cho OS & Database = Block Storage."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC IV: LOAD BALANCING (CÂN BẰNG TẢI)
       ============================ */
    {
      id: "cloud-ch5-s4",
      roman: "IV",
      title: "Cân bằng tải trong IaaS (Load Balancing)",
      subsections: [
        {
          id: "cloud-ch5-s4-1-load-balancing",
          number: "4.1",
          title: "Định nghĩa, Cách hoạt động, 3 Thuật toán & 5 Lợi ích",
          parts: [
            {
              id: "cloud-ch5-s4-1-p1",
              label: "4.1.1",
              title: "Nguyên lý vận hành và các thuật toán cân bằng tải kinh điển",
              content: [
                {
                  type: "paragraph",
                  text: "4.1. Định nghĩa & Thành phần chính:\n• Load Balancing (Cân bằng tải) là kỹ thuật phân phối lưu lượng truy cập (traffic) hoặc khối lượng công việc đồng đều giữa các máy chủ (servers) nhằm tránh tình trạng quá tải, nâng cao hiệu suất và đảm bảo hệ thống vận hành mượt mà.\n• Hai thành phần chính: (1) Load Balancer (thiết bị phần cứng chuyên dụng hoặc phần mềm phân phối traffic); (2) Backend Servers (nhóm các máy chủ trực tiếp xử lý request từ người dùng)."
                },
                {
                  type: "paragraph",
                  text: "4.2. Cách hoạt động:\n• Traffic distribution: Load Balancer tiếp nhận toàn bộ request từ Client và điều hướng thông minh đến các Backend Servers theo thuật toán định sẵn.\n• Health monitoring (Kiểm tra sức khỏe): Load Balancer liên tục kiểm tra tình trạng hoạt động và hiệu năng của từng Backend Server (qua Ping hoặc HTTP GET /health). Nếu phát hiện một server bị lỗi hoặc không phản hồi, Load Balancer sẽ tự động cô lập và chuyển hướng lưu lượng sang các server lành mạnh còn lại."
                },
                {
                  type: "paragraph",
                  text: "4.3. Ba thuật toán phân phối phổ biến nhất:\n• Round Robin: Phân phối request tuần tự lần lượt cho từng server theo vòng tròn khép kín (Server 1 ➔ Server 2 ➔ Server 3 ➔ Server 1). Đơn giản, hiệu quả khi các server có cấu hình tương đương.\n• Least Connections: Gửi request mới đến server hiện đang có ít kết nối hoạt động nhất (Least active connections). Cực kỳ hiệu quả khi thời gian xử lý của các request không đồng đều.\n• IP Hash: Sử dụng thuật toán băm (hashing) địa chỉ IP của Client để xác định server phục vụ cố định. Đảm bảo một Client luôn kết nối đến cùng một server (phục vụ lưu trữ phiên làm việc / Sticky Session)."
                },
                {
                  type: "paragraph",
                  text: "4.4. Năm lợi ích cốt lõi của Load Balancing:\n1. Tăng hiệu năng & khả năng chịu tải: Phân phối đều workload, tránh overload 1 server, tối đa hóa năng lực xử lý của toàn bộ hệ thống.\n2. High Availability & Reliability: Tạo cơ chế dự phòng và chịu lỗi (Fault Tolerance); tự động chuyển traffic khi có server gặp sự cố; tích hợp Auto-scaling để tự động thêm/bớt server theo nhu cầu.\n3. Cải thiện trải nghiệm người dùng: Giảm đáng kể thời gian phản hồi (Response time), nâng cao tốc độ tải trang.\n4. Tăng cường bảo mật: Chống tấn công từ chối dịch vụ (DDoS) bằng cách phân tán lưu lượng độc hại; tích hợp các giải pháp bảo mật nâng cao như giải mã SSL tập trung (SSL Termination) và WAF.\n5. Giảm chi phí vận hành: Tối ưu hóa hiệu suất sử dụng tài nguyên phần cứng, quản lý và giám sát tập trung dễ dàng."
                },
                {
                  type: "load-balancer-traffic-simulator"
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Khẩu quyết ghi nhớ cốt lõi của Mục IV",
                  text: "Cần nhớ: Load Balancing = Phân phối tải + Tăng Availability + Khả năng chịu lỗi (Fault Tolerance) + Tăng cường bảo mật chống DDoS."
                },
                {
                  type: "micro-quiz",
                  question: "Thuật toán cân bằng tải nào chuyển hướng yêu cầu mới đến máy chủ hiện đang duy trì số lượng kết nối hoạt động thấp nhất trong cụm backend servers?",
                  options: [
                    "Least Connections (Kết nối ít nhất)",
                    "Round Robin (Tuần tự vòng tròn)",
                    "IP Hash (Băm địa chỉ IP)",
                    "Random Selection (Chọn ngẫu nhiên không kiểm tra)"
                  ],
                  answerIndex: 0,
                  explanation: "Thuật toán Least Connections liên tục theo dõi số lượng kết nối đang mở của từng máy chủ và chuyển request mới đến server có ít kết nối nhất, giúp tối ưu hóa phân phối tải khi các tác vụ có độ nặng nhẹ khác nhau.",
                  hint: "Từ khóa: 'Số lượng kết nối thấp nhất' ➔ Least Connections."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC V: DỰ PHÒNG & LƯU TRỮ DỮ LIỆU (REDUNDANCY & DATA STORAGE)
       ============================ */
    {
      id: "cloud-ch5-s5",
      roman: "V",
      title: "Dự phòng & Lưu trữ dữ liệu (Redundancy & Data Storage)",
      subsections: [
        {
          id: "cloud-ch5-s5-1-redundancy",
          number: "5.1",
          title: "Khái niệm Redundancy & 4 Loại dự phòng cơ bản",
          parts: [
            {
              id: "cloud-ch5-s5-1-p1",
              label: "5.1.1",
              title: "Bản chất học thuật và Mục tiêu của Redundancy",
              content: [
                {
                  type: "paragraph",
                  text: "Redundancy (Tính dự phòng) là việc tạo ra các bản sao lưu hoặc cơ chế thay thế trong hệ thống nhằm đảm bảo khi một thành phần bị hỏng hóc, toàn bộ hệ thống và dữ liệu vẫn tiếp tục hoạt động bình thường."
                },
                {
                  type: "paragraph",
                  text: "Mục tiêu tối thượng của Redundancy là nâng cao tính sẵn sàng (High Availability) và độ tin cậy (Reliability), triệt tiêu điểm lỗi đơn lẻ (Single Point of Failure - SPOF), giảm thiểu thời gian ngừng hoạt động (Downtime) và bảo vệ an toàn dữ liệu trước mọi sự cố."
                },
                {
                  type: "highlight",
                  text: "4 Loại Redundancy trọng yếu: (1) Hardware Redundancy (nguồn điện kép, máy chủ, ổ cứng RAID); (2) Software Redundancy (chạy nhiều bản sao dịch vụ song song); (3) Network Redundancy (nhiều đường truyền cáp quang độc lập); (4) Data Redundancy (sao lưu và nhân bản dữ liệu ở nhiều vị trí địa lý)."
                }
              ]
            },
            {
              id: "cloud-ch5-s5-1-p2",
              label: "5.1.2",
              title: "Phương pháp Dự phòng dữ liệu & 3 Chiến lược sao lưu (Backup Strategies)",
              content: [
                {
                  type: "paragraph",
                  text: "Có 3 phương pháp dự phòng dữ liệu chủ đạo: Backup (sao lưu định kỳ), Disaster Recovery (kế hoạch và quy trình phục hồi sau thảm họa) và Data Replication (sao chép dữ liệu liên tục theo thời gian thực đến nhiều vùng khả dụng)."
                },
                {
                  type: "paragraph",
                  text: "3 Chiến lược sao lưu dữ liệu kinh điển gồm: Full Backup (sao chép toàn bộ dữ liệu, tốn dung lượng nhất nhưng phục hồi nhanh nhất); Incremental Backup (chỉ lưu thay đổi so với lần gần nhất, tiết kiệm dung lượng nhất nhưng phục hồi chậm nhất); Differential Backup (lưu tất cả thay đổi so với bản Full gần nhất, cân bằng giữa dung lượng và thời gian phục hồi)."
                },
                {
                  type: "disaster-recovery-redundancy-simulator"
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "Hai chỉ số vàng trong Disaster Recovery: RTO và RPO",
                  text: "RTO (Recovery Time Objective) là thời gian tối đa cho phép hệ thống ngừng hoạt động trước khi phục hồi lại. RPO (Recovery Point Objective) là lượng dữ liệu tối đa chấp nhận bị mất tính theo khoảng thời gian kể từ bản sao lưu gần nhất."
                },
                {
                  type: "micro-quiz",
                  question: "Chiến lược sao lưu nào CHỈ sao chép các dữ liệu đã thay đổi so với bản sao lưu gần nhất (bất kể bản gần nhất đó là Full hay Incremental), mang lại tốc độ sao lưu nhanh nhất và tiết kiệm dung lượng đĩa nhất?",
                  options: [
                    "Incremental Backup (Sao lưu gia tăng / vi sai)",
                    "Full Backup (Sao lưu toàn bộ)",
                    "Differential Backup (Sao lưu tích lũy)",
                    "Mirror Backup (Sao lưu nhân bản trực tiếp)"
                  ],
                  answerIndex: 0,
                  explanation: "Incremental Backup chỉ sao chép phần dữ liệu phát sinh hoặc thay đổi so với lần sao lưu ngay trước đó, nên thời gian thực hiện rất nhanh và tốn ít dung lượng nhất. Tuy nhiên, khi phục hồi đòi hỏi phải có bản Full ban đầu và toàn bộ các bản Incremental liên tiếp theo chuỗi.",
                  hint: "Từ khóa: 'Chỉ thay đổi so với lần gần nhất' ➔ Incremental Backup."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VI: CLOUD-BASED NAS (NETWORK ATTACHED STORAGE)
       ============================ */
    {
      id: "cloud-ch5-s6",
      roman: "VI",
      title: "Cloud-based NAS (Network Attached Storage)",
      subsections: [
        {
          id: "cloud-ch5-s6-1-definition-benefits",
          number: "6.1",
          title: "Định nghĩa & 4 Lợi ích cốt lõi của Cloud NAS",
          parts: [
            {
              id: "cloud-ch5-s6-1-p1",
              label: "6.1.1",
              title: "Khái niệm Máy Chủ Lưu Trữ Tập Trung (Centralized Storage Server)",
              content: [
                {
                  type: "paragraph",
                  text: "Cloud-based NAS là thiết bị lưu trữ kết nối mạng cho phép người dùng và ứng dụng truy cập, lưu trữ và chia sẻ dữ liệu từ bất kỳ thiết bị nào thông qua kết nối mạng Internet."
                },
                {
                  type: "paragraph",
                  text: "Trong kiến trúc hạ tầng IaaS, Cloud-based NAS hoạt động như một máy chủ lưu trữ tập trung (Centralized Storage Server), cung cấp không gian chia sẻ tệp tin dùng chung cho hàng trăm máy tính và máy chủ ảo cùng lúc qua các giao thức mạng tiêu chuẩn như NFS, SMB và CIFS."
                },
                {
                  type: "highlight",
                  text: "4 Lợi ích đột phá của Cloud-based NAS: (1) Truy cập mọi lúc mọi nơi chỉ cần có Internet; (2) Khả năng mở rộng linh hoạt (Scalability) dung lượng không giới hạn mà không cần tắt hệ thống; (3) Tính bảo mật cao với mã hóa đa tầng và phân quyền RBAC; (4) Dễ dàng quản lý và giám sát trực quan qua giao diện Dashboard."
                }
              ]
            },
            {
              id: "cloud-ch5-s6-1-p2",
              label: "6.1.2",
              title: "3 Nhà cung cấp Cloud NAS tiêu biểu & Ứng dụng thực tế",
              content: [
                {
                  type: "paragraph",
                  text: "Giáo trình bài giảng chỉ rõ 3 giải pháp Cloud-based NAS tiêu biểu trong công nghiệp: Nirvanix CloudNAS (tiên phong kết hợp giao thức NAS với Object Storage quy mô lớn), Amazon FSx for NetApp ONTAP (hệ thống lưu trữ tệp doanh nghiệp hiệu năng cao, đa giao thức NFS/SMB) và Google Cloud Filestore (dịch vụ NFS quản lý toàn diện cho GKE và Compute Engine)."
                },
                {
                  type: "paragraph",
                  text: "Các ứng dụng thực tế phong phú bao gồm: Chia sẻ dữ liệu văn phòng và cộng tác làm việc từ xa, sao lưu và phục hồi dữ liệu (Backup & DR), và làm kho lưu trữ tập trung cho Database cùng các cụm Web Services đa máy chủ."
                },
                {
                  type: "cloud-nas-storage-explorer"
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Công thức ghi nhớ nhanh Mục VI",
                  text: "Cloud-based NAS = Thiết bị lưu trữ qua mạng Internet + Máy chủ tập trung (Centralized storage server) + Chia sẻ đa thiết bị + Giao thức NFS/SMB."
                },
                {
                  type: "micro-quiz",
                  question: "Đặc điểm nào sau đây KHÔNG PHẢI là lợi ích cốt lõi của giải pháp lưu trữ Cloud-based NAS?",
                  options: [
                    "Bắt buộc người dùng phải có mặt trực tiếp tại mạng nội bộ LAN của văn phòng mới truy cập được",
                    "Truy cập dữ liệu mọi lúc mọi nơi từ bất kỳ thiết bị nào chỉ cần có Internet",
                    "Khả năng mở rộng linh hoạt dung lượng tức thì mà không cần mua ổ cứng vật lý",
                    "Bảo mật cao với cơ chế mã hóa dữ liệu và quản lý hạn ngạch trực quan qua Dashboard"
                  ],
                  answerIndex: 0,
                  explanation: "Cloud-based NAS xóa bỏ hoàn toàn rào cản mạng nội bộ (LAN). Điểm mạnh vượt trội của nó là cho phép truy cập từ bất kỳ đâu trên thế giới qua kết nối Internet công cộng được mã hóa an toàn.",
                  hint: "Chọn phương án đi ngược lại bản chất kết nối linh hoạt qua Internet của đám mây."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VII: ƯU ĐIỂM, USE CASES & NHÀ CUNG CẤP IAAS LỚN
       ============================ */
    {
      id: "cloud-ch5-s7",
      roman: "VII",
      title: "Ưu điểm, Use Cases & Các Nhà cung cấp IaaS Lớn",
      subsections: [
        {
          id: "cloud-ch5-s7-1-advantages-cases",
          number: "7.1",
          title: "5 Ưu điểm, 5 Use Cases & Vai trò Chuyển đổi số",
          parts: [
            {
              id: "cloud-ch5-s7-1-p1",
              label: "7.1.1",
              title: "5 Ưu thế cạnh tranh vượt trội của mô hình IaaS",
              content: [
                {
                  type: "paragraph",
                  text: "Mô hình IaaS mang lại cuộc cách mạng về hạ tầng CNTT nhờ 5 ưu điểm nổi bật: (1) Giảm chi phí đầu tư ban đầu (chuyển đổi hoàn toàn CAPEX sang OPEX theo mô hình Pay-as-you-go); (2) Linh hoạt mở rộng quy mô (Scalability) tức thì theo tải; (3) Tiết kiệm chi phí vận hành và bảo trì phần cứng; (4) Tăng cường bảo mật và đạt các chứng chỉ quốc tế (ISO 27001, HIPAA, GDPR); (5) Tăng độ sẵn sàng (Availability) và độ tin cậy với SLA 99.99%."
                },
                {
                  type: "paragraph",
                  text: "5 Use Cases phổ biến hàng đầu trong doanh nghiệp: (1) Data Storage, Backup & Recovery (lưu trữ và sao lưu an toàn); (2) Software Development & Testing (khởi tạo và hủy môi trường Dev/Test tự động); (3) Website & Web Application Hosting (vận hành cổng thông tin và trang TMĐT); (4) Disaster Recovery (hệ thống dự phòng thảm họa chi phí thấp); (5) High-Performance Computing / AI / Big Data (xử lý dữ liệu lớn và huấn luyện mô hình AI trên cụm GPU)."
                },
                {
                  type: "highlight",
                  text: "Vai trò trong doanh nghiệp: IaaS là động cơ đẩy nhanh chuyển đổi số (Digital Transformation), tối ưu hóa dòng tiền, tăng cường khả năng thích ứng linh hoạt trước biến động thị trường và rút ngắn tối đa thời gian ra mắt sản phẩm (Time-to-Market)."
                },
                {
                  type: "iaas-enterprise-usecase-matrix"
                }
              ]
            },
            {
              id: "cloud-ch5-s7-1-p2",
              label: "7.1.2",
              title: "Tam Hùng IaaS Toàn Cầu: AWS vs Microsoft Azure vs Google Cloud",
              content: [
                {
                  type: "paragraph",
                  text: "Thị trường IaaS toàn cầu chịu sự chi phối áp đảo của 3 nhà cung cấp hàng đầu (chiếm hơn 65% thị phần): Amazon Web Services (AWS - người dẫn đầu với Amazon EC2 và S3), Microsoft Azure (lựa chọn ưu tiên của các tập đoàn với Azure VMs và Blob Storage) và Google Cloud Platform (GCP - bá chủ về dữ liệu lớn và AI với Google Compute Engine và GCS)."
                },
                {
                  type: "paragraph",
                  text: "Mỗi nhà cung cấp đều phát triển bộ tứ trụ cột dịch vụ đồng nhất tương ứng nhau: Compute (EC2 vs VMs vs GCE), Storage (S3 vs Blob vs GCS), Networking (Amazon VPC vs Azure VNet vs Google VPC) và Quản lý truy cập (AWS IAM vs Microsoft Entra ID vs Google Cloud IAM)."
                },
                {
                  type: "iaas-big-three-battlefield"
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Mẹo đối soát nhanh tên dịch vụ thi cử",
                  text: "Nhớ cặp tương đương kinh điển: Amazon EC2 ➔ Azure Virtual Machines ➔ Google Compute Engine; Amazon S3 ➔ Azure Blob Storage ➔ Google Cloud Storage."
                },
                {
                  type: "micro-quiz",
                  question: "Dịch vụ máy chủ ảo tính toán (Compute) của nhà cung cấp Google Cloud Platform (GCP) có tên gọi chính thức là gì?",
                  options: [
                    "Google Compute Engine (GCE)",
                    "Google Virtual Machine (GVM)",
                    "Google Elastic Compute (GEC)",
                    "Google Cloud Server (GCS)"
                  ],
                  answerIndex: 0,
                  explanation: "Google Compute Engine (GCE) là dịch vụ IaaS cốt lõi của Google Cloud cung cấp các máy chủ ảo có thể cấu hình linh hoạt vCPU, RAM và GPU chạy trên hạ tầng mạng toàn cầu của Google.",
                  hint: "Từ khóa: 'Compute Engine' viết tắt là GCE."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VIII: TỔNG KẾT TOÀN BỘ CHƯƠNG 5 (KEY TAKEAWAYS)
       ============================ */
    {
      id: "cloud-ch5-s8",
      roman: "VIII",
      title: "Tổng kết toàn bộ Chương 5 (Key Takeaways & Exam Master)",
      subsections: [
        {
          id: "cloud-ch5-s8-1-summary",
          number: "8.1",
          title: "8 Trụ cột tri thức cốt lõi & Cảnh báo bẫy thi trắc nghiệm",
          parts: [
            {
              id: "cloud-ch5-s8-1-p1",
              label: "8.1.1",
              title: "Hệ thống hóa toàn bộ kiến thức IaaS cần ghi nhớ",
              content: [
                {
                  type: "paragraph",
                  text: "Chương 5 đã nghiên cứu toàn diện mô hình IaaS thông qua 8 trụ cột học thuật: (1) Bản chất IaaS là thuê tài nguyên phần cứng qua Internet; (2) Đối chiếu 3 loại server Physical, Dedicated Virtual và Shared Virtual; (3) Bộ tam lưu trữ Block, File và Object Storage; (4) Kỹ thuật Load Balancing với 3 thuật toán Round Robin, Least Connections, IP Hash; (5) Tính dự phòng Redundancy và 3 chiến lược sao lưu Full, Incremental, Differential; (6) Giải pháp Cloud-based NAS máy chủ lưu trữ tập trung; (7) 5 ưu điểm và 5 Use Cases doanh nghiệp; (8) Bộ tứ trụ cột của tam hùng AWS, Azure và GCP."
                },
                {
                  type: "chapter5-master-key-terms-matrix"
                },
                {
                  type: "callout",
                  variant: "success",
                  title: "Khẩu quyết tổng kết toàn bộ Chương 5 (Key Formula)",
                  text: "IaaS = Thuê hạ tầng thô (Compute, Storage, Network) + Trả tiền theo sử dụng (OPEX) + Tự do kiểm soát hệ điều hành và ứng dụng + Kiến trúc High Availability nhờ Load Balancing và Redundancy."
                },
                {
                  type: "micro-quiz",
                  question: "Trong mô hình chia sẻ trách nhiệm (Shared Responsibility Model) của IaaS, khách hàng doanh nghiệp PHẢI chịu trách nhiệm quản lý tầng nào sau đây?",
                  options: [
                    "Hệ điều hành (OS), các bản vá bảo mật và ứng dụng cài đặt bên trong máy chủ ảo",
                    "Hệ thống làm mát và máy phát điện dự phòng của Data Center",
                    "Bộ phận phần cứng vật lý, bo mạch chủ và ổ đĩa máy chủ vật lý",
                    "Phần mềm ảo hóa Hypervisor ở tầng hạ tầng vật lý của nhà cung cấp"
                  ],
                  answerIndex: 0,
                  explanation: "Trong IaaS, nhà cung cấp chỉ quản trị phần cứng vật lý, mạng vật lý, cơ sở vật chất và tầng ảo hóa Hypervisor. Khách hàng hoàn toàn chịu trách nhiệm cài đặt, vá lỗi hệ điều hành (OS), cấu hình tường lửa máy ảo, quản lý middleware, dữ liệu và ứng dụng của mình.",
                  hint: "IaaS cho phép người dùng toàn quyền kiểm soát từ tầng Hệ điều hành (OS) trở lên."
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
   TỪ ĐIỂN THUẬT NGỮ CHUYÊN SÂU CHƯƠNG 5 (26 TERMS)
   ============================================================ */
export const cloudChapter5Glossary = [
  {
    id: "g5-iaas",
    termVi: "Hạ Tầng Như Một Dịch Vụ",
    termEn: "Infrastructure as a Service",
    abbreviation: "IaaS",
    definition: "Mô hình dịch vụ điện toán đám mây cung cấp các tài nguyên hạ tầng cơ bản gồm máy chủ, ổ đĩa lưu trữ và mạng qua Internet, người dùng thuê phần cứng thay vì tự đầu tư phòng máy.",
    subsectionId: "cloud-ch5-s1-1-definition"
  },
  {
    id: "g5-physical-server",
    termVi: "Máy Chủ Vật Lý",
    termEn: "Physical Server / Bare-Metal",
    abbreviation: "Bare-Metal",
    definition: "Thiết bị phần cứng máy chủ thật, hệ điều hành giao tiếp trực tiếp phần cứng không qua ảo hóa, đem lại hiệu năng cao nhất và kiểm soát toàn diện cho tải lớn Big Data.",
    subsectionId: "cloud-ch5-s2-1-server-types"
  },
  {
    id: "g5-dedicated-server",
    termVi: "Máy Chủ Ảo Chuyên Dụng",
    termEn: "Dedicated Virtual Server",
    abbreviation: "Dedicated VM",
    definition: "Máy chủ ảo sở hữu tài nguyên vCPU, RAM riêng biệt, không chia sẻ với server khác trên cùng máy vật lý, mang lại hiệu năng cao, ổn định và bảo mật cho tài chính, y tế.",
    subsectionId: "cloud-ch5-s2-1-server-types"
  },
  {
    id: "g5-shared-server",
    termVi: "Máy Chủ Ảo Dùng Chung",
    termEn: "Shared Virtual Server",
    abbreviation: "Shared VM",
    definition: "Máy chủ ảo chia sẻ tài nguyên phần cứng chung với nhiều máy ảo khác, chi phí cực rẻ nhưng hiệu năng có thể không ổn định do hiện tượng láng giềng ồn ào (Noisy Neighbor).",
    subsectionId: "cloud-ch5-s2-1-server-types"
  },
  {
    id: "g5-block-storage",
    termVi: "Lưu Trữ Dạng Khối",
    termEn: "Block Storage",
    abbreviation: "Block Store",
    definition: "Dịch vụ lưu trữ phân chia dữ liệu thành các khối nhị phân và gắn trực tiếp vào máy chủ như ổ đĩa cục bộ, tốc độ IOPS cực nhanh chuyên dùng cho OS và CSDL.",
    subsectionId: "cloud-ch5-s3-1-other-components"
  },
  {
    id: "g5-file-storage",
    termVi: "Lưu Trữ Dạng Tệp Tin",
    termEn: "File Storage",
    abbreviation: "File Store",
    definition: "Hệ thống lưu trữ theo cấu trúc cây thư mục phân cấp, hỗ trợ giao thức mạng NFS/SMB cho phép nhiều máy chủ truy cập và đọc/ghi tệp đồng thời.",
    subsectionId: "cloud-ch5-s3-1-other-components"
  },
  {
    id: "g5-object-storage",
    termVi: "Lưu Trữ Dạng Đối Tượng",
    termEn: "Object Storage",
    abbreviation: "Object Store",
    definition: "Mô hình lưu trữ dữ liệu dạng đối tượng độc lập (Data + Metadata + Unique ID) truy cập qua giao thức HTTP REST API với khả năng mở rộng dung lượng vô hạn.",
    subsectionId: "cloud-ch5-s3-1-other-components"
  },
  {
    id: "g5-vpc",
    termVi: "Mạng Riêng Ảo Đám Mây",
    termEn: "Virtual Private Cloud",
    abbreviation: "VPC",
    definition: "Hạ tầng mạng cô lập về mặt logic trên đám mây, cho phép doanh nghiệp tự định cấu hình dải địa chỉ IP, bảng định tuyến và tường lửa kiểm soát lưu lượng an toàn.",
    subsectionId: "cloud-ch5-s3-1-other-components"
  },
  {
    id: "g5-hypervisor",
    termVi: "Bộ Giám Sát Máy Ảo",
    termEn: "Hypervisor",
    abbreviation: "VMM",
    definition: "Phần mềm hoặc firmware tạo lập và điều phối các máy ảo (VM) từ tài nguyên phần cứng vật lý bên dưới (ví dụ KVM, VMware ESXi, Hyper-V).",
    subsectionId: "cloud-ch5-s3-1-other-components"
  },
  {
    id: "g5-containerization",
    termVi: "Đóng Gói Container",
    termEn: "Containerization",
    abbreviation: "Containers",
    definition: "Kỹ thuật ảo hóa ở tầng hệ điều hành, cho phép đóng gói ứng dụng cùng mọi phụ thuộc vào một container siêu nhẹ có thể khởi chạy tức thì.",
    subsectionId: "cloud-ch5-s3-1-other-components"
  },
  {
    id: "g5-iac",
    termVi: "Hạ Tầng Như Mã Nguồn",
    termEn: "Infrastructure as Code",
    abbreviation: "IaC",
    definition: "Phương pháp quản lý và cấp phát hạ tầng CNTT bằng các tệp mã nguồn cấu hình định nghĩa sẵn (Terraform, Ansible) thay vì cài đặt thủ công.",
    subsectionId: "cloud-ch5-s3-1-other-components"
  },
  {
    id: "g5-load-balancer",
    termVi: "Bộ Cân Bằng Tải",
    termEn: "Load Balancer",
    abbreviation: "LB",
    definition: "Thiết bị hoặc phần mềm đứng trước cụm máy chủ, chịu trách nhiệm phân phối lưu lượng truy cập đồng đều nhằm tránh quá tải và tăng độ sẵn sàng của hệ thống.",
    subsectionId: "cloud-ch5-s4-1-load-balancing"
  },
  {
    id: "g5-round-robin",
    termVi: "Thuật Toán Tuần Tự Vòng Tròn",
    termEn: "Round Robin Algorithm",
    abbreviation: "RR",
    definition: "Thuật toán cân bằng tải đơn giản nhất, phân phối các yêu cầu đến lần lượt từng máy chủ backend theo thứ tự xoay vòng tuần tự.",
    subsectionId: "cloud-ch5-s4-1-load-balancing"
  },
  {
    id: "g5-health-check",
    termVi: "Kiểm Tra Sức Khỏe Máy Chủ",
    termEn: "Health Check Monitoring",
    abbreviation: "Health Check",
    definition: "Cơ chế Load Balancer định kỳ gửi tín hiệu kiểm tra tình trạng sống/chết của các server backend để tự động ngắt kết nối khỏi các server bị sự cố.",
    subsectionId: "cloud-ch5-s4-1-load-balancing"
  },
  {
    id: "g5-redundancy",
    termVi: "Tính Dự Phòng",
    termEn: "Redundancy",
    abbreviation: "Redundancy",
    definition: "Cơ chế tạo các bản sao lưu hoặc phương án thay thế song song (phần cứng, mạng, phần mềm, dữ liệu) nhằm duy trì hoạt động liên tục khi có thành phần bị lỗi.",
    subsectionId: "cloud-ch5-s5-1-redundancy"
  },
  {
    id: "g5-disaster-recovery",
    termVi: "Phục Hồi Thảm Họa",
    termEn: "Disaster Recovery",
    abbreviation: "DR",
    definition: "Tập hợp các chính sách, công cụ và quy trình cho phép phục hồi hoặc tiếp tục các hạ tầng công nghệ sống còn sau một thảm họa thiên tai hoặc sự cố nghiêm trọng.",
    subsectionId: "cloud-ch5-s5-1-redundancy"
  },
  {
    id: "g5-full-backup",
    termVi: "Sao Lưu Toàn Bộ",
    termEn: "Full Backup",
    abbreviation: "Full Backup",
    definition: "Phương pháp sao chép toàn bộ 100% dữ liệu của hệ thống, tốn nhiều thời gian và dung lượng lưu trữ nhất nhưng có tốc độ khôi phục nhanh nhất chỉ với một bản duy nhất.",
    subsectionId: "cloud-ch5-s5-1-redundancy"
  },
  {
    id: "g5-incremental-backup",
    termVi: "Sao Lưu Gia Tăng / Vi Sai",
    termEn: "Incremental Backup",
    abbreviation: "Incremental",
    definition: "Phương pháp chỉ sao chép phần dữ liệu đã thay đổi so với bản sao lưu gần nhất, tiết kiệm dung lượng nhất nhưng đòi hỏi toàn bộ chuỗi các bản sao khi khôi phục.",
    subsectionId: "cloud-ch5-s5-1-redundancy"
  },
  {
    id: "g5-differential-backup",
    termVi: "Sao Lưu Tích Lũy",
    termEn: "Differential Backup",
    abbreviation: "Differential",
    definition: "Phương pháp sao lưu tất cả dữ liệu đã thay đổi kể từ bản Full Backup gần nhất, dung lượng tăng dần qua các ngày nhưng phục hồi nhanh chỉ với 2 bản.",
    subsectionId: "cloud-ch5-s5-1-redundancy"
  },
  {
    id: "g5-rto",
    termVi: "Mục Tiêu Thời Gian Phục Hồi",
    termEn: "Recovery Time Objective",
    abbreviation: "RTO",
    definition: "Khoảng thời gian tối đa cho phép hệ thống hoặc ứng dụng ngừng hoạt động trước khi gây ra thiệt hại không thể chấp nhận được cho doanh nghiệp.",
    subsectionId: "cloud-ch5-s5-1-redundancy"
  },
  {
    id: "g5-rpo",
    termVi: "Mục Tiêu Điểm Phục Hồi",
    termEn: "Recovery Point Objective",
    abbreviation: "RPO",
    definition: "Khoảng thời gian dữ liệu tối đa chấp nhận bị mất tính từ thời điểm thảm họa ngược về bản sao lưu gần nhất mà doanh nghiệp có thể chịu đựng được.",
    subsectionId: "cloud-ch5-s5-1-redundancy"
  },
  {
    id: "g5-cloud-nas",
    termVi: "Lưu Trữ Gắn Mạng Đám Mây",
    termEn: "Cloud-based Network Attached Storage",
    abbreviation: "Cloud NAS",
    definition: "Thiết bị lưu trữ kết nối mạng trên đám mây, cho phép người dùng và máy chủ truy cập và chia sẻ tệp tin từ bất kỳ đâu qua Internet theo giao thức NFS hoặc SMB.",
    subsectionId: "cloud-ch5-s6-1-definition-benefits"
  },
  {
    id: "g5-centralized-storage",
    termVi: "Máy Chủ Lưu Trữ Tập Trung",
    termEn: "Centralized Storage Server",
    abbreviation: "Central Storage",
    definition: "Kiến trúc máy chủ chuyên dụng đóng vai trò là điểm lưu trữ tập trung duy nhất cho toàn bộ dữ liệu tệp tin của doanh nghiệp, giúp quản lý phân quyền và sao lưu nhất quán.",
    subsectionId: "cloud-ch5-s6-1-definition-benefits"
  },
  {
    id: "g5-capex-opex",
    termVi: "Chuyển Đổi CAPEX sang OPEX",
    termEn: "Capital Expenditure to Operational Expenditure",
    abbreviation: "CAPEX to OPEX",
    definition: "Lợi ích tài chính cốt lõi của IaaS, chuyển đổi chi phí đầu tư mua sắm tài sản cố định ban đầu (CAPEX) sang chi phí vận hành biến đổi linh hoạt hàng tháng (OPEX) theo nhu cầu thực tế.",
    subsectionId: "cloud-ch5-s7-1-advantages-cases"
  },
  {
    id: "g5-amazon-ec2",
    termVi: "Máy Chủ Ảo Amazon EC2",
    termEn: "Amazon Elastic Compute Cloud",
    abbreviation: "Amazon EC2",
    definition: "Dịch vụ điện toán đám mây IaaS chủ lực của AWS, cung cấp năng lực tính toán máy chủ ảo có thể mở rộng quy mô linh hoạt theo yêu cầu.",
    subsectionId: "cloud-ch5-s7-1-advantages-cases"
  },
  {
    id: "g5-azure-blob-storage",
    termVi: "Lưu Trữ Đối Tượng Azure Blob",
    termEn: "Azure Blob Storage",
    abbreviation: "Azure Blob",
    definition: "Giải pháp lưu trữ đối tượng đám mây của Microsoft Azure, tối ưu hóa cho việc lưu trữ hàng tỷ tệp dữ liệu phi cấu trúc như hình ảnh, video, nhật ký và bản sao lưu.",
    subsectionId: "cloud-ch5-s7-1-advantages-cases"
  }
];

/* ============================================================
   BỘ FLASHCARDS CHUẨN THUẬT TOÁN SM-2 CHƯƠNG 5 (20 THẺ)
   ============================================================ */
export const cloudChapter5Flashcards = [
  {
    id: "fc-c5-01",
    front: "Định nghĩa chuẩn học thuật và khẩu quyết cốt lõi của Infrastructure as a Service (IaaS) là gì?",
    back: "• IaaS là mô hình dịch vụ đám mây cung cấp tài nguyên hạ tầng (servers, storage, networks) qua Internet.\n• Khẩu quyết: 'IaaS = Thuê phần cứng thay vì tự mua' ➔ Tiết kiệm chi phí đầu tư ban đầu (CAPEX sang OPEX).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s1-1-definition"
  },
  {
    id: "fc-c5-02",
    front: "Năm thành phần cơ bản cấu thành nên một kiến trúc IaaS là gì?",
    back: "1. Servers (Máy chủ vật lý/ảo)\n2. Storage (Lưu trữ ổ đĩa ảo)\n3. Networking (Mạng, Firewall, Load Balancer)\n4. Virtualization system (Hệ thống ảo hóa Hypervisor/Container)\n5. Management & Automation (Công cụ quản lý & tự động hóa IaC)",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s1-1-definition"
  },
  {
    id: "fc-c5-03",
    front: "Đặc điểm, ưu điểm và trường hợp ứng dụng phù hợp nhất của Physical Server (Bare-metal) là gì?",
    back: "• Chạy OS trực tiếp trên phần cứng thật không qua ảo hóa.\n• Ưu điểm: Hiệu năng cao nhất, ổn định tuyệt đối, kiểm soát toàn diện.\n• Nhược điểm: Chi phí rất cao, khó mở rộng.\n• Ứng dụng: Phân tích Big Data, tải cực nặng, ứng dụng doanh nghiệp sống còn.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s2-1-server-types"
  },
  {
    id: "fc-c5-04",
    front: "Dedicated Virtual Server khác biệt cơ bản với Shared Virtual Server ở điểm mấu chốt nào?",
    back: "• Dedicated Virtual Server: Sở hữu tài nguyên vCPU/RAM riêng biệt, không chia sẻ với server khác (hiệu năng cao, bảo mật tốt, không bị noisy neighbor).\n• Shared Virtual Server: Cùng chia sẻ tài nguyên phần cứng chung với server khác (chi phí cực rẻ nhưng hiệu năng không ổn định).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s2-1-server-types"
  },
  {
    id: "fc-c5-05",
    front: "Ba loại hình lưu trữ (Storage) chính trong IaaS là gì và ứng dụng tiêu biểu của từng loại?",
    back: "1. Block Storage: Gắn trực tiếp như ổ đĩa cho máy chủ ➔ Dùng cho OS boot disk & Database.\n2. File Storage: Cây thư mục chia sẻ cho nhiều server đọc/ghi đồng thời qua mạng NFS.\n3. Object Storage: Lưu tệp độc lập qua HTTP REST API ➔ Dùng cho Ảnh, Video, Backup dung lượng lớn.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s3-1-other-components"
  },
  {
    id: "fc-c5-06",
    front: "Hạ tầng mạng (Networking) trong IaaS cung cấp những thành phần an ninh và kết nối cơ bản nào?",
    back: "• Virtual Network (VPC/Subnet): Kết nối và cô lập server logic.\n• Firewall (Tường lửa/Security Groups): Kiểm soát lưu lượng đóng/mở cổng mạng.\n• Load Balancer: Phân phối lưu lượng đồng đều giữa các máy chủ.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s3-1-other-components"
  },
  {
    id: "fc-c5-07",
    front: "Định nghĩa và hai thành phần cơ bản của hệ thống Cân bằng tải (Load Balancing) là gì?",
    back: "• Định nghĩa: Phân phối lưu lượng truy cập hoặc công việc đồng đều giữa các máy chủ để tránh quá tải.\n• Hai thành phần chính: (1) Load Balancer (thiết bị/phần mềm phân phối traffic); (2) Backend Servers (nhóm máy chủ trực tiếp xử lý request).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s4-1-load-balancing"
  },
  {
    id: "fc-c5-08",
    front: "Cơ chế Health Monitoring (Kiểm tra sức khỏe) trong Load Balancing hoạt động như thế nào?",
    back: "• Load Balancer định kỳ gửi request kiểm tra (ping hoặc HTTP GET /health).\n• Nếu một backend server bị lỗi hoặc không phản hồi, Load Balancer tự động cô lập server đó và chuyển hướng toàn bộ traffic sang các server lành mạnh còn lại.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s4-1-load-balancing"
  },
  {
    id: "fc-c5-09",
    front: "Phân biệt 3 thuật toán cân bằng tải phổ biến: Round Robin, Least Connections và IP Hash?",
    back: "• Round Robin: Phân phối tuần tự xoay vòng từng server.\n• Least Connections: Gửi đến server đang có ít kết nối hoạt động nhất.\n• IP Hash: Băm IP của Client để gán cố định vào một server (duy trì session).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s4-1-load-balancing"
  },
  {
    id: "fc-c5-10",
    front: "Năm lợi ích cốt lõi của Load Balancing và khẩu quyết thi cử cần nhớ là gì?",
    back: "• 5 Lợi ích: Tăng hiệu năng/tải, High Availability/Fault Tolerance, Cải thiện UX, Tăng bảo mật chống DDoS, Giảm chi phí vận hành.\n• Khẩu quyết: Load Balancing = Phân phối tải + Tăng Availability + Fault Tolerance + Bảo mật.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s4-1-load-balancing"
  },
  {
    id: "fc-c5-11",
    front: "Định nghĩa Redundancy trong IaaS và kể tên 4 loại dự phòng cơ bản?",
    back: "• Định nghĩa: Tạo các bản sao lưu hoặc cơ chế thay thế để hệ thống duy trì hoạt động khi có thành phần bị lỗi (tăng High Availability & Reliability).\n• 4 loại: (1) Hardware Redundancy; (2) Software Redundancy; (3) Network Redundancy; (4) Data Redundancy.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s5-1-redundancy"
  },
  {
    id: "fc-c5-12",
    front: "So sánh 3 chiến lược sao lưu: Full Backup, Incremental Backup và Differential Backup?",
    back: "• Full Backup: Lưu 100% dữ liệu, tốn dung lượng/thời gian nhất nhưng restore nhanh nhất (chỉ cần 1 bản).\n• Incremental Backup: Chỉ lưu dữ liệu đổi so với lần gần nhất, tốn ít dung lượng nhất nhưng restore chậm nhất (Full + chuỗi Inc).\n• Differential Backup: Lưu dữ liệu đổi kể từ bản Full gần nhất, dung lượng tăng dần nhưng restore nhanh (Full + 1 bản Diff mới nhất).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s5-1-redundancy"
  },
  {
    id: "fc-c5-13",
    front: "Phân biệt hai chỉ số cốt tử trong Phục hồi thảm họa: RTO và RPO?",
    back: "• RTO (Recovery Time Objective): Thời gian tối đa chấp nhận để phục hồi hệ thống sau sự cố gián đoạn.\n• RPO (Recovery Point Objective): Lượng dữ liệu tối đa chấp nhận bị mất (tính theo khoảng thời gian từ sự cố ngược về bản sao lưu gần nhất).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s5-1-redundancy"
  },
  {
    id: "fc-c5-14",
    front: "Cloud-based NAS là gì và đóng vai trò gì trong kiến trúc hạ tầng IaaS?",
    back: "• Định nghĩa: Thiết bị lưu trữ kết nối mạng cho phép truy cập và chia sẻ tệp tin từ bất kỳ đâu qua Internet.\n• Vai trò: Hoạt động như một máy chủ lưu trữ tập trung (centralized storage server), chia sẻ tệp tin cho đa thiết bị qua giao thức mạng NFS/SMB.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s6-1-definition-benefits"
  },
  {
    id: "fc-c5-15",
    front: "Kể tên 3 giải pháp Cloud-based NAS tiêu biểu trong giáo trình và các ứng dụng thực tế?",
    back: "• 3 Giải pháp: Nirvanix CloudNAS, Amazon FSx for NetApp ONTAP, Google Cloud Filestore.\n• Ứng dụng thực tế: Chia sẻ dữ liệu văn phòng/remote work, sao lưu và phục hồi thảm họa (Backup & DR), kho lưu trữ tập trung cho Database và Web services.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s6-1-definition-benefits"
  },
  {
    id: "fc-c5-16",
    front: "Năm ưu điểm đột phá lớn nhất của mô hình IaaS đối với doanh nghiệp là gì?",
    back: "1. Giảm chi phí đầu tư ban đầu (CAPEX sang OPEX Pay-as-you-go).\n2. Linh hoạt mở rộng quy mô (Scalability).\n3. Tiết kiệm chi phí vận hành và bảo dưỡng phần cứng.\n4. Tăng cường bảo mật và đạt các chứng chỉ quốc tế (ISO 27001, HIPAA).\n5. Tăng tính sẵn sàng (High Availability) với SLA 99.99%.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s7-1-advantages-cases"
  },
  {
    id: "fc-c5-17",
    front: "Khái niệm CAPEX và OPEX khác nhau như thế nào trong bài toán đầu tư hạ tầng IaaS?",
    back: "• CAPEX (Capital Expenditure): Chi phí vốn đầu tư mua sắm tài sản cố định ban đầu (server vật lý, phòng lạnh) rất đắt và rủi ro.\n• OPEX (Operational Expenditure): Chi phí vận hành linh hoạt hàng tháng trả theo mức tiêu thụ thực tế (Pay-as-you-go).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s7-1-advantages-cases"
  },
  {
    id: "fc-c5-18",
    front: "Năm trường hợp sử dụng (Use Cases) phổ biến nhất của IaaS trong thực tế là gì?",
    back: "1. Data Storage, Backup & Recovery\n2. Software Development & Testing (Dev/Test)\n3. Website & Web Application Hosting (TMĐT)\n4. Disaster Recovery (Dự phòng thảm họa)\n5. High-Performance Computing (HPC) & Big Data / AI",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s7-1-advantages-cases"
  },
  {
    id: "fc-c5-19",
    front: "Bộ tứ trụ cột dịch vụ IaaS chuẩn của 3 nhà cung cấp AWS, Azure và GCP tương ứng nhau như thế nào?",
    back: "• Compute: Amazon EC2 ➔ Azure Virtual Machines ➔ Google Compute Engine.\n• Storage: Amazon S3/EBS ➔ Azure Blob/Disks ➔ Google Cloud Storage/Persistent Disk.\n• Network: Amazon VPC ➔ Azure VNet ➔ Google VPC.\n• Identity: AWS IAM ➔ Microsoft Entra ID ➔ Google Cloud IAM.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s7-1-advantages-cases"
  },
  {
    id: "fc-c5-20",
    front: "Khẩu quyết tổng kết toàn bộ Chương 5 (Key Formula của IaaS) là gì?",
    back: "IaaS = Thuê hạ tầng thô (Compute, Storage, Network) qua Internet + Chuyển CAPEX sang OPEX (Pay-as-you-go) + Toàn quyền kiểm soát từ OS trở lên + Đảm bảo High Availability và Fault Tolerance bằng Load Balancing & Redundancy.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s8-1-summary"
  }
];
