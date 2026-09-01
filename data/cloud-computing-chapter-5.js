/* ============================================================
   GIÁO TRÌNH ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)
   Chương 5: Infrastructure as a Service (IaaS)
   Biên tập chuẩn học thuật từ tài liệu nguồn taskcanlam
   ============================================================ */

export const cloudComputingChapter5 = {
  id: "cloud-ch5",
  title: "Chương 5",
  subtitle: "Infrastructure as a Service - IaaS (Hạ tầng như một Dịch vụ)",
  sections: [
    /* ============================
       MỤC ★: OVERVIEW CHƯƠNG
       ============================ */
    {
      id: "cloud-ch5-s0",
      roman: "★",
      title: "Tổng quan chương: Kiến trúc Hạ tầng Đám mây (IaaS)",
      subsections: [
        {
          id: "cloud-ch5-s0-overview",
          number: "0",
          title: "Bản đồ kiến trúc & Radar kỹ năng Chương 5",
          parts: [
            {
              id: "cloud-ch5-s0-p1",
              label: "★",
              title: "Tổng quan tri thức toàn chương",
              content: [
                {
                  type: "cloud-chapter-hero",
                  chapterId: "cloud-ch5"
                },
                {
                  type: "highlight",
                  text: "Chương 5 khám phá tầng hạ tầng nền tảng của điện toán đám mây: Infrastructure as a Service (IaaS). Khảo sát 3 loại máy chủ (Physical Server, Dedicated Virtual Server, Shared Virtual Server), các loại lưu trữ khối/đối tượng/tệp, kỹ thuật Cân bằng tải (Load Balancing: Round Robin, Least Connections, IP Hash), cơ chế dự phòng đa tầng (Redundancy) và kiến trúc 3 trụ cột IaaS của AWS, Azure và Google Cloud."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC I: TỔNG QUAN & 3 LOẠI SERVER
       ============================ */
    {
      id: "cloud-ch5-s1",
      roman: "I",
      title: "Khái niệm IaaS & Phân loại 3 Dạng Máy chủ",
      subsections: [
        {
          id: "cloud-ch5-s1-def",
          number: "1",
          title: "Định nghĩa & 5 Thành phần Cơ bản của IaaS",
          parts: [
            {
              id: "cloud-ch5-s1-def-p1",
              label: "a",
              title: "Bản chất dịch vụ hạ tầng",
              content: [
                {
                  type: "definition",
                  term: "Infrastructure as a Service (IaaS)",
                  definition: "IaaS là mô hình dịch vụ đám mây cung cấp các tài nguyên điện toán cơ bản nhất gồm máy chủ xử lý (Compute), bộ nhớ lưu trữ (Storage), mạng (Networking) và phần mềm ảo hóa thông qua Internet theo nhu cầu (On-demand). Khách hàng thuê năng lực phần cứng được ảo hóa thay vì phải tự mua sắm, lắp đặt và quản lý trung tâm dữ liệu vật lý tốn kém."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Máy chủ (Servers):</strong> Máy chủ vật lý (Bare-metal) hoặc máy chủ ảo hóa (VM instances).",
                    "<strong>Bộ nhớ lưu trữ (Storage):</strong> Các khối đĩa ảo (Block storage), hệ thống tệp mạng (File storage) hoặc vùng lưu trữ đối tượng (Object storage).",
                    "<strong>Hạ tầng mạng (Networking):</strong> Tường lửa ảo (Virtual Firewall), bộ cân bằng tải (Load Balancer), mạng riêng ảo (VPC).",
                    "<strong>Hệ thống ảo hóa (Virtualization System):</strong> Hypervisor Type-1 tối ưu hóa chia sẻ tài nguyên phần cứng.",
                    "<strong>Công cụ tự động hóa & Quản trị:</strong> Dashboard điều khiển, API hạ tầng dưới dạng mã nguồn (Infrastructure as Code - IaC)."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch5-s1-servers",
          number: "2",
          title: "So sánh 3 Dạng Máy chủ: Physical vs Dedicated vs Shared",
          parts: [
            {
              id: "cloud-ch5-s1-servers-p1",
              label: "b",
              title: "Đặc tính kỹ thuật và kịch bản áp dụng",
              content: [
                {
                  type: "table",
                  headers: ["Loại máy chủ", "Bản chất tài nguyên", "Ưu điểm & Nhược điểm", "Trường hợp sử dụng phù hợp"],
                  rows: [
                    [
                      "Physical Server (Bare-Metal)",
                      "Phần cứng chuyên biệt 100%, không qua lớp Hypervisor ảo hóa.",
                      "Ưu: Hiệu năng đỉnh cao, kiểm soát toàn diện. Nhược: Chi phí đắt nhất, khó co giãn tức thì.",
                      "Xử lý dữ liệu lớn (Big Data Analytics), máy chủ CSDL lõi ngân hàng, ứng dụng quan trọng cấp quốc gia."
                    ],
                    [
                      "Dedicated Virtual Server (Máy chủ ảo chuyên dụng)",
                      "Máy ảo chạy trên phần cứng vật lý dành riêng cho một khách hàng duy nhất.",
                      "Ưu: Hiệu năng ổn định, không bị ảnh hưởng bởi tải của khách khác, an toàn cao. Nhược: Chi phí cao hơn máy ảo dùng chung.",
                      "Hệ thống hoạch định tài nguyên doanh nghiệp (ERP/CRM), sàn giao dịch thương mại điện tử lớn, dữ liệu y tế."
                    ],
                    [
                      "Shared Virtual Server (Máy chủ ảo dùng chung)",
                      "Nhiều máy ảo cùng chia sẻ chung CPU, RAM và đường mạng trên một máy chủ vật lý.",
                      "Ưu: Chi phí cực rẻ, cấp phát trong vài giây. Nhược: Hiệu năng biến động (vấn đề người hàng xóm ồn ào - Noisy Neighbor), an ninh logic.",
                      "Website cá nhân, blog thông tin, môi trường thử nghiệm phần mềm (Dev/Test), ứng dụng doanh nghiệp nhỏ."
                    ]
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC II: LƯU TRỮ & MẠNG IAAS
       ============================ */
    {
      id: "cloud-ch5-s2",
      roman: "II",
      title: "Hạ tầng Lưu trữ & Mạng Riêng Ảo (VPC)",
      subsections: [
        {
          id: "cloud-ch5-s2-storage",
          number: "1",
          title: "3 Dạng Lưu trữ Đám mây: Block, File & Object Storage",
          parts: [
            {
              id: "cloud-ch5-s2-storage-p1",
              label: "a",
              title: "Đặc tính và giao thức lưu trữ",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Block Storage (Lưu trữ khối):</strong> Cung cấp các khối lưu trữ thô (raw blocks) gắn trực tiếp vào máy chủ ảo như một ổ đĩa cứng vật lý (ví dụ: AWS EBS, Azure Managed Disks). Phù hợp cho việc cài đặt hệ điều hành và cơ sở dữ liệu đòi hỏi tốc độ I/O và độ trễ cực thấp.",
                    "<strong>File Storage (Lưu trữ tệp):</strong> Cung cấp hệ thống tệp chia sẻ dùng chung (NFS, SMB) cho phép hàng trăm máy chủ ảo đồng thời truy cập đọc ghi vào cùng một thư mục tập trung (ví dụ: AWS EFS, Google Cloud Filestore).",
                    "<strong>Object Storage (Lưu trữ đối tượng):</strong> Lưu trữ phi cấu trúc theo cặp Key-Value gồm dữ liệu nhị phân, định danh duy nhất và siêu dữ liệu (Metadata) phong phú. Truy cập thông qua giao thức HTTP REST API, khả năng mở rộng dung lượng vô hạn (ví dụ: AWS S3, Google Cloud Storage, Azure Blob Storage)."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch5-s2-network",
          number: "2",
          title: "Mạng Riêng Ảo (VPC) & Tường lửa Bảo vệ",
          parts: [
            {
              id: "cloud-ch5-s2-network-p1",
              label: "b",
              title: "Cách ly an ninh mức mạng",
              content: [
                {
                  type: "paragraph",
                  text: "<strong>Virtual Private Cloud (VPC):</strong> Mạng riêng ảo được cô lập logic hoàn toàn bên trong đám mây công cộng của nhà cung cấp. Kỹ sư có toàn quyền cấu hình dải địa chỉ IP (CIDR block), tạo các mạng con (Subnets công khai và riêng tư), thiết lập bảng định tuyến (Route Tables) và cổng kết nối Internet Gateway."
                },
                {
                  type: "paragraph",
                  text: "An ninh được siết chặt qua hai lớp: <strong>Security Groups (Tường lửa ảo có trạng thái cấp instance)</strong> và <strong>Network ACLs (Bộ lọc gói tin không trạng thái cấp subnet)</strong>."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC III: LOAD BALANCING
       ============================ */
    {
      id: "cloud-ch5-s3",
      roman: "III",
      title: "Cân bằng tải (Load Balancing) & Các Thuật toán Điển hình",
      subsections: [
        {
          id: "cloud-ch5-s3-algorithms",
          number: "1",
          title: "Nguyên lý Hoạt động & 3 Thuật toán Điều phối Tải",
          parts: [
            {
              id: "cloud-ch5-s3-algorithms-p1",
              label: "a",
              title: "Cơ chế phân phối lưu lượng và kiểm tra sức khỏe",
              content: [
                {
                  type: "definition",
                  term: "Load Balancer (Bộ cân bằng tải)",
                  definition: "Load Balancer là thiết bị phần cứng hoặc dịch vụ phần mềm nằm giữa người dùng và cụm máy chủ xử lý (Backend Servers), có nhiệm vụ phân phối đều đặn lưu lượng truy cập mạng đến các máy chủ còn khỏe mạnh nhằm tối ưu hóa thông lượng, giảm thiểu thời gian phản hồi và ngăn ngừa tình trạng quá tải cục bộ."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Round Robin (Vòng tròn tuần tự):</strong> Phân phối các request mới lần lượt theo thứ tự đến từng máy chủ trong danh sách. Phù hợp khi tất cả máy chủ có năng lực phần cứng tương đương và các tác vụ có thời lượng xử lý đồng đều.",
                    "<strong>Least Connections (Số kết nối ít nhất):</strong> Chuyển tiếp request mới đến máy chủ hiện đang duy trì số lượng phiên kết nối hoạt động thấp nhất. Cực kỳ hiệu quả cho các tác vụ phiên dài hạn như giao dịch trực tuyến, streaming video.",
                    "<strong>IP Hash (Băm địa chỉ IP):</strong> Sử dụng thuật toán băm địa chỉ IP của máy khách để xác định máy chủ đích. Đảm bảo một khách hàng luôn được phục vụ bởi cùng một máy chủ (Session Persistence / Sticky Sessions) phục vụ việc lưu giỏ hàng hoặc trạng thái đăng nhập."
                  ]
                },
                {
                  type: "paragraph",
                  text: "<strong>Health Monitoring (Kiểm tra sức khỏe):</strong> Load Balancer định kỳ gửi các gói tin thăm dò (Ping/HTTP check) tới các máy chủ backend. Nếu máy chủ nào không phản hồi, nó sẽ tự động bị loại khỏi danh sách định tuyến cho đến khi phục hồi hoàn toàn."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC IV: REDUNDANCY & NAS
       ============================ */
    {
      id: "cloud-ch5-s4",
      roman: "IV",
      title: "Cơ chế Dự phòng (Redundancy) & Lưu trữ Mạng Cloud NAS",
      subsections: [
        {
          id: "cloud-ch5-s4-redundancy",
          number: "1",
          title: "4 Cấp độ Dự phòng Đảm bảo Tính Sẵn sàng Cao (High Availability)",
          parts: [
            {
              id: "cloud-ch5-s4-redundancy-p1",
              label: "a",
              title: "Nguyên lý loại trừ điểm lỗi đơn lẻ (No Single Point of Failure)",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>1. Hardware Redundancy (Dự phòng phần cứng):</strong> Trang bị nguồn điện kép, quạt tản nhiệt dự phòng, cấu hình đĩa RAID và card mạng đa cổng cho từng máy chủ vật lý.",
                    "<strong>2. Network Redundancy (Dự phòng mạng):</strong> Bố trí các tuyến cáp quang đa đường dẫn và các bộ chuyển mạch ToR/Spine chạy song song.",
                    "<strong>3. Software Redundancy (Dự phòng phần mềm):</strong> Chạy nhiều phiên bản ứng dụng đồng thời trên nhiều vùng sẵn sàng (Multi-Availability Zones).",
                    "<strong>4. Data Redundancy (Dự phòng dữ liệu):</strong> Nhân bản dữ liệu tự động (Replication) ra ít nhất 3 vị trí địa lý độc lập để phòng ngừa thiên tai (Disaster Recovery)."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch5-s4-nas",
          number: "2",
          title: "Thiết bị Lưu trữ Đính kèm Mạng Đám mây (Cloud NAS)",
          parts: [
            {
              id: "cloud-ch5-s4-nas-p1",
              label: "b",
              title: "Lưu trữ tập trung dùng chung",
              content: [
                {
                  type: "paragraph",
                  text: "<strong>Cloud-based NAS:</strong> Giải pháp lưu trữ tập trung trên đám mây cho phép nhiều người dùng, máy trạm và máy chủ ứng dụng cùng truy cập đọc/ghi dữ liệu chung thông qua giao thức chuẩn mạng (NFS/SMB). Ví dụ tiêu biểu: Amazon FSx, Google Cloud Filestore."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC V: TỔNG KẾT
       ============================ */
    {
      id: "cloud-ch5-s5",
      roman: "V",
      title: "Tổng kết Chương 5 & Bộ 3 Nhà cung cấp IaaS Lớn",
      subsections: [
        {
          id: "cloud-ch5-s5-summary",
          number: "1",
          title: "3 Trụ cột IaaS Toàn cầu & Bảng Từ vựng Chuyên ngành",
          parts: [
            {
              id: "cloud-ch5-s5-summary-p1",
              label: "a",
              title: "Đối sánh AWS, Azure và Google Cloud",
              content: [
                {
                  type: "table",
                  headers: ["Trụ cột dịch vụ", "Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)"],
                  rows: [
                    ["Máy chủ tính toán (Compute)", "Amazon EC2", "Azure Virtual Machines", "Google Compute Engine"],
                    ["Lưu trữ đối tượng (Storage)", "Amazon S3", "Azure Blob Storage", "Google Cloud Storage"],
                    ["Mạng riêng ảo (Networking)", "Amazon VPC", "Azure Virtual Network", "Google Cloud VPC"],
                    ["Quản lý danh tính (IAM)", "AWS IAM", "Microsoft Entra ID (Azure AD)", "Google Cloud IAM"]
                  ]
                },
                {
                  type: "table",
                  headers: ["Khái niệm", "Thuật ngữ tiếng Anh", "Bản chất học thuật"],
                  rows: [
                    ["IaaS", "Infrastructure as a Service", "Thuê tài nguyên phần cứng (máy chủ, mạng, ổ đĩa) qua Internet."],
                    ["Bare-Metal", "Physical Server", "Máy chủ vật lý độc lập không cài lớp ảo hóa Hypervisor."],
                    ["Block Storage", "Raw Block Storage", "Ổ đĩa ảo gắn ngoài tốc độ cao dành cho HĐH và CSDL."],
                    ["Object Storage", "Object-based Storage", "Lưu trữ phi cấu trúc theo khóa Key-Value truy cập qua HTTP REST API."],
                    ["Load Balancing", "Traffic Distribution", "Phân phối tải đều đặn giữa các máy chủ để chống nghẽn."],
                    ["Redundancy", "System Duplication", "Dự phòng linh kiện và dữ liệu nhằm đạt khả năng chịu lỗi tối đa."]
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
