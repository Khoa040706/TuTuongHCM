/* ============================================================
   GIÁO TRÌNH ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)
   Chương 2: ĐIỆN TOÁN ĐÁM MÂY – HẠ TẦNG VÀ CÔNG NGHỆ (Cloud Infrastructure & Technology)
   Phiên bản Chuẩn StudyMaster: Micro-content • Interactive Simulators • Phản Xạ Trắc Nghiệm
   Biên tập chuẩn học thuật từ bài giảng chính thức (Mục I đến IV)
   Lưu ý: Hero Banner Mục ★ sẽ được hoàn thiện ở bước cuối cùng theo đúng yêu cầu người dùng.
   ============================================================ */

export const cloudComputingChapter2 = {
  id: "cloud-ch2",
  title: "Chương 2",
  subtitle: "Điện toán đám mây – Hạ tầng và Công nghệ (Cloud Infrastructure & Technology)",
  sections: [
    /* ============================
       MỤC ★: TỔNG QUAN CHƯƠNG (Hero Banner sẽ làm sau cùng)
       ============================ */
    {
      id: "cloud-ch2-s0",
      roman: "★",
      title: "Tổng quan chương: Hạ tầng & Công nghệ Đám mây",
      subsections: [
        {
          id: "cloud-ch2-s0-overview",
          number: "0",
          title: "Bản đồ kiến thức cốt lõi Chương 2",
          parts: [
            {
              id: "cloud-ch2-s0-p1",
              label: "★",
              title: "Tổng quan tri thức toàn chương",
              content: [
                {
                  type: "cloud-chapter-hero",
                  chapterId: "cloud-ch2"
                },
                {
                  type: "highlight",
                  text: "Chương 2 phân tích chuyên sâu về phần cứng vật lý và kiến trúc kỹ thuật nền tảng vận hành các siêu trung tâm dữ liệu (Hyperscale Data Center): Cấu trúc phân cấp phần cứng (Rack ➔ PoD ➔ Data Center), thách thức điện năng và chuỗi giải pháp làm mát ngăn nhiệt (Sàn nâng, Lối đi lạnh/nóng, Chimney, Lights-Out DC), các mô hình mạng kết nối chịu lỗi (North-South vs East-West, Leaf-Spine, Link Aggregation), giải pháp Ảo hóa lưu trữ (Storage Virtualization) và toàn bộ các công nghệ Ảo hóa CPU, 3 mức đặc quyền, Virtual I/O và Live VM Migration."
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Lưu ý lộ trình học tập",
                  text: "Học viên nên đi tuần tự từ Mục I (Tổng quan & Cấu trúc vật lý) ➔ Mục II (Điện năng & Tản nhiệt) ➔ Mục III (Kết nối mạng Data Center) ➔ Mục IV (Lưu trữ & Ảo hóa) ➔ Mục V (Các công nghệ ảo hóa) ➔ Mục VI (Ảo hóa phần cứng & Hypervisor) ➔ Mục VII (Ảo hóa ứng dụng & Multiboot) ➔ Mục VIII (Tổng kết 10 từ khóa cốt lõi) và thực hành ngay trên các bộ mô phỏng trực quan để nắm vững bản chất kỹ thuật."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC I: TRUNG TÂM DỮ LIỆU (DATA CENTER) – TỔNG QUAN & CẤU TRÚC VẬT LÝ
       ============================ */
    {
      id: "cloud-ch2-s1",
      roman: "I",
      title: "Trung tâm dữ liệu (Data Center) – Tổng quan & Cấu trúc vật lý",
      subsections: [
        {
          id: "cloud-ch2-s1-1-definition-structure",
          number: "1.1",
          title: "Khái niệm Data Center & Cấu trúc Giá đỡ (Rack)",
          parts: [
            {
              id: "cloud-ch2-s1-1-p1",
              label: "CƠ BẢN",
              title: "Định nghĩa Data Center & Giá đỡ máy chủ (Server Rack)",
              content: [
                {
                  type: "paragraph",
                  text: "<strong>1.1. Data Center là gì:</strong> Là cơ sở hạ tầng vật lý chuyên dụng, nơi tập trung toàn bộ máy chủ (server), hệ thống lưu trữ (storage) và mạng (network) để vận hành các dịch vụ điện toán đám mây với quy mô công nghiệp."
                },
                {
                  type: "paragraph",
                  text: "<strong>1.2. Giá đỡ (Rack):</strong> Là các tủ khung kim loại tiêu chuẩn chứa các thiết bị tính toán (server, switch mạng, PDU...). Trong phòng máy Data Center, các <strong>rack</strong> được đặt cạnh nhau thành từng <strong>hàng (rows)</strong> để thuận tiện cho việc cấp nguồn, đi dây mạng và dẫn luồng khí làm mát."
                },
                {
                  type: "datacenter-hierarchy-explorer"
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch2-s1-2-pod",
          number: "1.2",
          title: "Cụm PoD (Point of Delivery) & 5 Thành phần hỗ trợ",
          parts: [
            {
              id: "cloud-ch2-s1-2-p1",
              label: "KIẾN TRÚC POD",
              title: "Cấu tạo module hóa và 5 hệ thống hỗ trợ bên trong một PoD",
              content: [
                {
                  type: "paragraph",
                  text: "<strong>1.3. Cụm (PoD – Point of Delivery):</strong> Một PoD là tập hợp gồm <strong>nhiều rack máy chủ</strong> kết hợp cùng <strong>hệ thống hỗ trợ hoàn chỉnh</strong>, tạo thành một khối module hóa khép kín có thể nhân bản mở rộng nhanh chóng."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Power Distribution System (PDS):</strong> Hệ thống phân phối điện năng cao áp, bảo đảm cấp nguồn điện liên tục và chia tải an toàn tới từng thanh PDU trong rack.",
                    "<strong>Modular UPS:</strong> Bộ lưu điện dự phòng dạng module, bảo vệ toàn bộ cụm server trước các sự cố sụt điện áp hoặc mất điện lưới đột ngột mà không làm gián đoạn hệ thống.",
                    "<strong>InfraSuite Manager / DCIM:</strong> Phần mềm quản lý hạ tầng Data Center thông minh, giám sát nhiệt độ, độ ẩm, dòng điện và lưu lượng quạt theo thời gian thực.",
                    "<strong>RowCool:</strong> Hệ thống thiết bị làm mát áp sát từng hàng rack, thổi khí lạnh trực tiếp và triệt tiêu các điểm nóng nhiệt độ cao tại nguồn.",
                    "<strong>Cold/Hot Aisle Containment:</strong> Hệ thống vách ngăn cách ly vật lý lối đi nóng và lối đi lạnh, ngăn hiện tượng trộn lẫn không khí gây lãng phí năng lượng."
                  ]
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "📌 Cần nhớ trọng tâm thi cử: Trật tự phân cấp",
                  text: "Thứ tự sắp xếp cấu trúc vật lý Data Center từ nhỏ đến lớn: <strong>Rack ➔ PoD ➔ Data Center</strong>. (Rack là tủ đơn lẻ, nhiều Rack tạo thành PoD, nhiều PoD tạo thành Data Center)."
                },
                {
                  type: "micro-quiz",
                  question: "Thứ tự sắp xếp nào sau đây mô tả chính xác cấu trúc phân cấp vật lý trong một Trung tâm dữ liệu (Data Center) từ quy mô nhỏ đến lớn?",
                  options: [
                    "Rack ➔ PoD ➔ Data Center",
                    "PoD ➔ Rack ➔ Data Center",
                    "Data Center ➔ PoD ➔ Rack",
                    "Server ➔ PoD ➔ Rack"
                  ],
                  answerIndex: 0,
                  explanation: "Quy tắc chuẩn: Nhiều Server gắn trong 1 Rack ➔ Nhiều Rack kèm hệ thống hỗ trợ tạo thành PoD (Point of Delivery) ➔ Toàn bộ các PoD nằm trong Data Center.",
                  hint: "Tìm trật tự: Tủ máy chủ (Rack) đứng đầu, cụm phân phối (PoD) ở giữa, cả tòa nhà (Data Center) ở cuối."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC II: ĐIỆN NĂNG VÀ TẢN NHIỆT (POWER & COOLING)
       ============================ */
    {
      id: "cloud-ch2-s2",
      roman: "II",
      title: "Điện năng và tản nhiệt (Power & Cooling)",
      subsections: [
        {
          id: "cloud-ch2-s2-1-characteristics",
          number: "2.1",
          title: "Đặc điểm tiêu thụ điện & Vai trò của tản nhiệt",
          parts: [
            {
              id: "cloud-ch2-s2-1-p1",
              label: "NGUYÊN LÝ",
              title: "Mối quan hệ đối ứng giữa điện năng và làm mát",
              content: [
                {
                  type: "paragraph",
                  text: "Trung tâm dữ liệu tiêu thụ <strong>lượng điện khổng lồ</strong> (tương đương lượng điện tiêu thụ của cả một thành phố vừa và nhỏ). Trong đó, gần như toàn bộ điện năng cấp cho chip bán dẫn đều chuyển hóa thành nhiệt lượng tỏa ra môi trường:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Tản nhiệt là phần đối ứng của điện năng:</strong> Điện tiêu thụ càng nhiều ➔ Lượng nhiệt tỏa ra càng lớn ➔ Nhu cầu làm mát càng cao.",
                    "<strong>Tầm quan trọng ngang hàng:</strong> Trong Data Center, thiết bị làm mát đóng vai trò quan trọng <strong>ngang hàng với thiết bị tính toán</strong>; nếu hệ thống làm mát sập, máy chủ sẽ tự ngắt chỉ sau vài phút do quá nhiệt (Thermal Throttling)."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch2-s2-2-cooling-solutions",
          number: "2.2",
          title: "Sàn nâng (Raised Floor) & Ngăn nhiệt Lối đi Nóng/Lạnh",
          parts: [
            {
              id: "cloud-ch2-s2-2-p1",
              label: "GIẢI PHÁP LÀM MÁT",
              title: "Cơ chế khí động học sàn nâng, Cold/Hot Aisle và ống thoát Chimney",
              content: [
                {
                  type: "table",
                  headers: ["Giải pháp công nghệ", "Đặc tính kỹ thuật & Nguyên lý vận hành", "Mục đích"],
                  rows: [
                    ["Sàn nâng (Raised Floor)", "Cấu trúc khung kim loại nâng cao 1–4 feet (khoảng 30–120 cm) so với sàn bê tông cứng.", "Khoảng trống dưới sàn dùng chứa bó cáp điện và dẫn luồng khí lạnh áp suất cao."],
                    ["Cấp khí qua lỗ đục", "Ống điều hòa thổi khí lạnh dưới sàn ➔ lỗ đục dưới đáy rack ➔ khí lạnh luồn dọc 2 bên rack.", "Mỗi server có quạt hút khí lạnh thổi qua tản nhiệt làm mát vi mạch điện tử."],
                    ["Ngăn nhiệt (Containment)", "Gắn nắp mặt trước rack, mặt sau để mở. Hút khí lạnh từ 2 bên hông và thổi khí nóng ra sau.", "Đưa khí nóng thoát nhanh khỏi rack, tránh bị hút ngược lại vào thiết bị khác."],
                    ["Cold Aisle & Hot Aisle", "Xếp hàng rack mặt trước đối diện nhau tạo Lối đi lạnh (Cold Aisle); mặt sau đối diện nhau tạo Lối đi nóng (Hot Aisle).", "Tách rời tuyệt đối hai vùng khí, nhiệt độ lối lạnh duy trì 18–21°C, lối nóng 30–35°C."],
                    ["Ống thoát Chimney", "Ống dẫn dạng ống khói gắn quạt hút trên đỉnh lối đi nóng.", "Hút toàn bộ luồng khí nóng đẩy thẳng lên trần kỹ thuật dẫn về giàn lạnh."]
                  ]
                },
                {
                  type: "thermal-containment-simulator"
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch2-s2-3-lights-out",
          number: "2.3",
          title: "Trung tâm dữ liệu không đèn (Lights-Out Data Center)",
          parts: [
            {
              id: "cloud-ch2-s2-3-p1",
              label: "TỐI ƯU HÓA",
              title: "Mô hình vận hành tự động hóa hoàn toàn từ xa qua mạng",
              content: [
                {
                  type: "paragraph",
                  text: "<strong>Lights-Out Data Center ('Trung tâm dữ liệu không đèn'):</strong> Là mô hình phòng máy vận hành hoàn toàn tự động, tắt hết đèn chiếu sáng khi không có người để giảm tối đa tiêu thụ điện không cần thiết. Mọi máy chủ, switch mạng và thiết bị lưu trữ đều được truy cập và quản trị <strong>100% qua mạng từ xa (Remote Management)</strong>."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>1. Giảm chi phí nhân sự:</strong> Không cần bố trí kỹ sư túc trực 24/7 bên trong phòng máy lạnh buốt.",
                    "<strong>2. Ít khả năng cấu hình sai:</strong> Hạn chế con người ra vào phòng máy vật lý giúp triệt tiêu nguy cơ cắm nhầm cổng mạng, va chạm dây cáp hoặc ngắt nhầm nguồn.",
                    "<strong>3. Giảm nguy cơ bị tấn công ác ý (vật lý):</strong> Cửa phòng máy được khóa kín, giảm thiểu tối đa nguy cơ truy cập vật lý trái phép vào ổ cứng chứa dữ liệu nhạy cảm."
                  ]
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "📌 Cần nhớ trọng tâm thi cử: Chuỗi giải pháp tối ưu năng lượng & làm mát",
                  text: "Chuỗi 4 giải pháp tối ưu năng lượng & tản nhiệt trong Data Center gồm: <strong>Sàn nâng ➔ Ngăn nhiệt (Cold/Hot Aisle) ➔ Chimney ➔ Lights-out Data Center</strong>. Chiều cao sàn nâng chuẩn là <strong>1–4 feet</strong>."
                },
                {
                  type: "micro-quiz",
                  question: "Trong thiết kế trung tâm dữ liệu, việc sắp xếp các hàng rack sao cho mặt trước đối diện nhau và mặt sau đối diện nhau nhằm mục đích gì?",
                  options: [
                    "Để nhân viên kỹ thuật có không gian đi lại rộng rãi hơn",
                    "Tạo thành Lối đi lạnh (Cold Aisle) và Lối đi nóng (Hot Aisle) ngăn khí nóng bị hút ngược",
                    "Giúp giảm số lượng bóng đèn chiếu sáng cần lắp đặt trong phòng máy",
                    "Tăng tính thẩm mỹ đối xứng cho tòa nhà Data Center"
                  ],
                  answerIndex: 1,
                  explanation: "Việc xếp mặt trước đối diện nhau (Lối đi lạnh) và mặt sau đối diện nhau (Lối đi nóng) tạo ra cơ chế Thermal Containment, giúp đưa khí nóng thoát nhanh khỏi rack và triệt tiêu nguy cơ khí nóng bị hút ngược lại làm nóng các máy chủ khác.",
                  hint: "Tìm đáp án liên quan đến cô lập hai luồng khí nóng và lạnh."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC III: KẾT NỐI MẠNG (NETWORKING) TRONG DATA CENTER
       ============================ */
    {
      id: "cloud-ch2-s3",
      roman: "III",
      title: "Kết nối mạng (Networking) trong Data Center",
      subsections: [
        {
          id: "cloud-ch2-s3-1-basics-traffic-flow",
          number: "3.1",
          title: "Thành phần cơ bản & Hướng lưu lượng North-South vs East-West",
          parts: [
            {
              id: "cloud-ch2-s3-1-p1",
              label: "HẠ TẦNG MẠNG",
              title: "Top-of-Rack Switch, Multi-port NIC và phân luồng lưu lượng",
              content: [
                {
                  type: "paragraph",
                  text: "Mạng lưới Data Center được cấu thành từ hàng trăm nghìn cổng kết nối chuyển mạch tốc độ cao:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Top-of-Rack switch (ToR switch):</strong> Switch đặt ngay trên đỉnh mỗi rack để kết nối tất cả các máy chủ trong rack đó, đóng vai trò giao tiếp nội bộ trong rack và là cửa ngõ nối ra mạng Data Center và Internet.",
                    "<strong>Multi-port NIC (Card mạng đa cổng):</strong> Mỗi máy chủ sử dụng card mạng nhiều cổng, mỗi cổng nối song song vào ToR switch ➔ Giúp băng thông kết nối tăng gấp <strong>K lần</strong> so với một cổng giao diện đơn lẻ và bảo đảm dự phòng đứt cáp."
                  ]
                },
                {
                  type: "table",
                  headers: ["Hướng lưu lượng", "Đường đi gói tin & Phạm vi", "Đặc tính trong Cloud hiện đại"],
                  rows: [
                    ["North-South (Bắc - Nam)", "Lưu lượng giữa Internet ↔ Bộ cân bằng tải (Balancer) ↔ Các Pod/Rack.", "Là lưu lượng vào và ra khỏi Data Center (Ví dụ: Người dùng tải trang web từ trình duyệt)."],
                    ["East-West (Đông - Tây)", "Lưu lượng giữa các rack/pod với nhau trong nội bộ Data Center.", "Là lưu lượng giao tiếp nội bộ giữa các microservices, CSDL và cụm tính toán; chiếm tới hơn 70-80% tổng lưu lượng."]
                  ]
                },
                {
                  type: "datacenter-traffic-flow"
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch2-s3-2-topologies",
          number: "3.2",
          title: "Đấu trường 4 Tô-pô Mạng: Fat Tree, Link Aggregation, Leaf-Spine & Super-Spine",
          parts: [
            {
              id: "cloud-ch2-s3-2-p1",
              label: "TÔ-PÔ MẠNG",
              title: "So sánh cấu trúc cây phân cấp vs mạng phẳng 2 tầng chịu lỗi",
              content: [
                {
                  type: "paragraph",
                  text: "Để khắc phục nhược điểm nghẽn mạng và gia tăng độ sẵn sàng, kiến trúc mạng Data Center đã trải qua cuộc cách mạng chuyển dịch từ Fat Tree sang Leaf-Spine:"
                },
                {
                  type: "table",
                  headers: ["Mô hình mạng", "Đặc điểm cấu trúc & Tỷ lệ phân luồng", "Ưu điểm / Nhược điểm chính"],
                  rows: [
                    ["Fat Tree", "Cấu trúc cây phân cấp: 100% traffic qua liên kết gốc (root), 1/P qua mỗi liên kết cặp pod, 1/PR qua mỗi liên kết trong pod.", "Nhược điểm: Liên kết cấp cao rất dễ bị nghẽn cổ chai (Bottleneck) và là Single Point of Failure."],
                    ["Link Aggregation (LAG)", "Gộp nhiều liên kết vật lý tốc độ thấp thành 1 liên kết logic tốc độ cao (VD: 10 đường 10 Gbps ➔ 1 đường 100 Gbps).", "Ưu điểm: Tăng băng thông tức thì bằng phần cứng mà không cần thay đổi hạ tầng cáp mạng."],
                    ["Leaf-Spine", "Kiến trúc mạng phẳng 2 tầng: Mỗi switch Leaf (gắn rack) kết nối tới TẤT CẢ switch Spine (xương sống).", "Ưu điểm vượt trội: Không có Single Point of Failure. Nếu 1 spine hỏng ➔ traffic tự động định tuyến qua các spine còn lại ➔ Tăng tối đa khả năng chịu lỗi (Fault Tolerance)."],
                    ["Super-Spine", "Mở rộng từ Leaf-Spine bằng cách bổ sung thêm tầng Super-Spine liên kết nhiều cụm PoD với nhau.", "Cấu trúc chuẩn: Super Spine ➔ Spine (từng pod) ➔ Leaf (từng rack) ➔ Server."]
                  ]
                },
                {
                  type: "network-topology-battlefield"
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "📌 Bảng tóm tắt cần nhớ khi thi",
                  text: "• <strong>Fat Tree:</strong> Cây phân cấp, dễ bottleneck ở gốc.<br />• <strong>Link Aggregation:</strong> Gộp nhiều link nhỏ ➔ 1 link lớn.<br />• <strong>Leaf-Spine:</strong> Mỗi leaf nối mọi spine ➔ Dự phòng cực tốt, độ trễ 2-hop không đổi.<br />• <strong>Super-Spine:</strong> Leaf-Spine mở rộng liên kết nhiều pod."
                },
                {
                  type: "micro-quiz",
                  question: "Ưu điểm cốt lõi nào giúp kiến trúc mạng Leaf-Spine thay thế hoàn toàn mô hình Fat Tree truyền thống trong các trung tâm dữ liệu đám mây?",
                  options: [
                    "Chi phí mua cáp mạng rẻ hơn 50% so với mọi mô hình khác",
                    "Mỗi switch Leaf kết nối tới tất cả switch Spine, bảo đảm không có điểm lỗi đơn lẻ (Fault Tolerance)",
                    "Hoàn toàn không cần sử dụng thiết bị cân bằng tải Load Balancer",
                    "Cho phép truyền dữ liệu mà không cần địa chỉ IP"
                  ],
                  answerIndex: 1,
                  explanation: "Trong mô hình Leaf-Spine, mỗi switch Leaf kết nối tới TẤT CẢ các switch Spine. Nếu một switch Spine bất kỳ bị sự cố, toàn bộ lưu lượng được tự động chuyển hướng qua các Spine còn lại mà không làm gián đoạn hệ thống (Fault Tolerance), loại bỏ hoàn toàn Single Point of Failure của Fat Tree.",
                  hint: "Tìm ưu điểm về khả năng dự phòng khi có thiết bị hỏng."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC IV: LƯU TRỮ (STORAGE)
       ============================ */
    {
      id: "cloud-ch2-s4",
      roman: "IV",
      title: "Lưu trữ (Storage)",
      subsections: [
        {
          id: "cloud-ch2-s4-1-local-vs-virtualized",
          number: "4.1",
          title: "Vấn đề của Lưu trữ cục bộ & Giải pháp Ảo hóa lưu trữ",
          parts: [
            {
              id: "cloud-ch2-s4-1-p1",
              label: "LƯU TRỮ",
              title: "Tách rời lưu trữ vật lý khỏi vị trí rack nhờ Storage Virtualization",
              content: [
                {
                  type: "paragraph",
                  text: "Trong hạ tầng đám mây phục vụ hàng triệu người dùng, việc gắn ổ cứng vật lý trực tiếp vào máy chủ cục bộ bộc lộ những hạn chế nghiêm trọng:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>4.1. Vấn đề của lưu trữ cục bộ (Local Storage):</strong> Một máy chủ vật lý phải chạy đồng thời nhiều máy ảo (VM) của nhiều khách hàng khác nhau ➔ Cần giải pháp phần mềm phức tạp để <strong>giới hạn dung lượng lưu trữ (quota)</strong> cho từng khách hàng độc lập. Bên cạnh đó, ổ cứng nằm rải rác khắp hàng nghìn rack trong Data Center ➔ Khi một ổ cứng bị hỏng hóc, nhân viên kỹ thuật phải mất công tìm và chạy đến <strong>đúng rack vật lý cụ thể</strong> để thay thế.",
                    "<strong>4.2. Giải pháp Ảo hóa lưu trữ (Storage Virtualization):</strong> Là công nghệ trừu tượng hóa, <strong>tách rời lưu trữ vật lý khỏi vị trí/rack cụ thể</strong>. Toàn bộ dung lượng ổ đĩa từ các máy chủ và mảng đĩa chuyên dụng được gom chung lại thành một 'Hồ chứa lưu trữ' (Storage Pool) thống nhất, cho phép quản lý và cấp phát tập trung chỉ qua vài thao tác trên bảng điều khiển."
                  ]
                },
                {
                  type: "storage-virtualization-sandbox"
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "📌 Cần nhớ trọng tâm thi cử",
                  text: "<strong>Lưu trữ phân tán + không ảo hóa ➔ Khó bảo trì, dễ lỗi cấp phát dung lượng.</strong> Ảo hóa lưu trữ là chìa khóa giúp phân bổ hạn mức linh hoạt và bảo vệ dữ liệu tự khôi phục khi có ổ cứng hỏng."
                },
                {
                  type: "micro-quiz",
                  question: "Giải pháp Ảo hóa lưu trữ (Storage Virtualization) trong Data Center mang lại lợi ích cốt lõi nào so với việc sử dụng lưu trữ cục bộ (Local Storage)?",
                  options: [
                    "Làm tăng tốc độ quay vật lý của các đĩa từ HDD lên gấp 10 lần",
                    "Tách rời lưu trữ vật lý khỏi vị trí rack cụ thể để quản lý tập trung và phân bổ quota linh hoạt",
                    "Xóa bỏ hoàn toàn nhu cầu sao lưu dữ liệu dự phòng",
                    "Buộc mọi khách hàng phải sử dụng chung 1 dung lượng ổ cứng cố định bằng nhau"
                  ],
                  answerIndex: 1,
                  explanation: "Storage Virtualization giúp tách rời lớp lưu trữ vật lý khỏi vị trí địa lý của từng rack, biến toàn bộ ổ cứng thành một Storage Pool tập trung, cho phép cấp phát dung lượng động cho các máy ảo mà không phụ thuộc vào phần cứng cục bộ.",
                  hint: "Tìm lợi ích về tách rời vật lý và quản trị tập trung."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC V: CÁC CÔNG NGHỆ ẢO HÓA (VIRTUALIZATION TECHNOLOGIES)
       ============================ */
    {
      id: "cloud-ch2-s5",
      roman: "V",
      title: "Các công nghệ ảo hóa (Virtualization Technologies)",
      subsections: [
        {
          id: "cloud-ch2-s5-1-types",
          number: "5.1",
          title: "3 Loại công nghệ ảo hóa: Emulation, Para-virtualization & Full Virtualization",
          parts: [
            {
              id: "cloud-ch2-s5-1-p1",
              label: "CÔNG NGHỆ ẢO HÓA",
              title: "Cơ chế phân loại và so sánh 3 cấp độ ảo hóa trong điện toán",
              content: [
                {
                  type: "paragraph",
                  text: "Trong khoa học máy tính, công nghệ ảo hóa được phân chia thành <strong>3 nhóm kiến trúc cơ bản</strong> dựa trên mức độ can thiệp vào mã nguồn hệ điều hành và cách thức bộ vi xử lý thực thi chỉ lệnh:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>1. Software Emulation (Mô phỏng phần mềm):</strong> Một chương trình phần mềm (Emulator) chạy trên hệ điều hành 1 (OS1) đọc tuần tự <em>từng lệnh (instruction)</em> trong chương trình để mô phỏng hành vi của hệ điều hành 2 (OS2). Nhược điểm: Tốc độ chậm nhất do chi phí thông dịch từng lệnh quá lớn. Ví dụ: BlueStacks (chạy Android trên Windows), WINE (chạy Windows trên Linux). Không dùng cho hạ tầng Data Center.",
                    "<strong>2. Para-virtualization (Ảo hóa bán phần):</strong> Cho phép nhiều hệ điều hành chạy đồng thời trên cùng một máy vật lý. Hypervisor đóng vai trò kiểm soát và lập lịch, các chỉ lệnh CPU được thực thi trực tiếp (Native Execution) nên tốc độ rất cao. Điểm hạn chế chí tử: <strong>BẮT BUỘC PHẢI SỬA ĐỔI MÃ NGUỒN HỆ ĐIỀU HÀNH (OS)</strong> trước khi biên dịch để hệ điều hành biết nó đang chạy trong môi trường ảo hóa.",
                    "<strong>3. Full Virtualization (Ảo hóa toàn phần):</strong> Công nghệ ảo hóa hoàn chỉnh phần cứng với sự hỗ trợ của tập lệnh CPU (Intel VT-x, AMD-V). <strong>KHÔNG CẦN SỬA ĐỔI MÃ NGUỒN HỆ ĐIỀU HÀNH</strong> và <strong>TRÁNH ĐƯỢC CHI PHÍ MÔ PHỎNG PHẦN MỀM</strong>. Đây chính là <strong>CÔNG NGHỆ NỀN TẢNG CỐT LÕI CHO MÁY ẢO (VM) TRONG CÁC CLOUD DATA CENTER HIỆN NAY</strong>."
                  ]
                },
                {
                  type: "virtualization-types-comparison"
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "📌 Trọng tâm đề thi",
                  text: "Câu hỏi trắc nghiệm kinh điển: <em>'Công nghệ ảo hóa nào bắt buộc phải sửa đổi mã nguồn của hệ điều hành?'</em> ➔ <strong>Para-virtualization</strong>. <em>'Công nghệ nào không cần sửa OS, tránh chi phí mô phỏng và là chuẩn mực của Cloud Data Center?'</em> ➔ <strong>Full Virtualization</strong>."
                },
                {
                  type: "micro-quiz",
                  question: "Công nghệ ảo hóa nào BẮT BUỘC phải sửa đổi mã nguồn của Hệ điều hành khách (Guest OS) trước khi chạy?",
                  options: [
                    "Software Emulation (Mô phỏng phần mềm)",
                    "Para-virtualization (Ảo hóa bán phần)",
                    "Full Virtualization (Ảo hóa toàn phần)",
                    "Storage Virtualization (Ảo hóa lưu trữ)"
                  ],
                  answerIndex: 1,
                  explanation: "Trong Para-virtualization, hệ điều hành khách (Guest OS) bắt buộc phải được chỉnh sửa mã nguồn để thay thế các chỉ lệnh nhạy cảm phần cứng bằng các lời gọi hàm hypercall trực tiếp tới Hypervisor.",
                  hint: "Nhớ từ khóa: 'Para' bắt buộc phải sửa đổi mã nguồn OS."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VI: ẢO HÓA PHẦN CỨNG & BỘ GIÁM SÁT MÁY ẢO (HYPERVISOR)
       ============================ */
    {
      id: "cloud-ch2-s6",
      roman: "VI",
      title: "Ảo hóa phần cứng & Bộ giám sát máy ảo (Hypervisor)",
      subsections: [
        {
          id: "cloud-ch2-s6-1-privilege-levels",
          number: "6.1",
          title: "3 Mức đặc quyền phần cứng: Hypervisor Mode, Kernel Mode & User Mode",
          parts: [
            {
              id: "cloud-ch2-s6-1-p1",
              label: "BẢO MẬT & ĐẶC QUYỀN",
              title: "Kiến trúc phân tầng đặc quyền và cơ chế Trap-and-Emulate",
              content: [
                {
                  type: "paragraph",
                  text: "Để đảm bảo an toàn tuyệt đối và cách ly giữa các máy ảo trên cùng một phần cứng, kiến trúc CPU ảo hóa hiện đại thiết lập <strong>3 mức đặc quyền (Privilege Levels)</strong> nghiêm ngặt:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>1. Hypervisor Mode (Root Ring 0 / Chế độ Hypervisor):</strong> Mức đặc quyền cao nhất và được tin cậy tuyệt đối. <strong>Chỉ có Hypervisor mới có toàn quyền tạo lập máy ảo và cấp phát bộ nhớ RAM vật lý</strong>.",
                    "<strong>2. Kernel Mode (Chế độ nhân hệ điều hành):</strong> Dành riêng cho hệ điều hành khách (Guest OS). Guest OS bị giới hạn, không được phép can thiệp trực tiếp vào phần cứng gốc.",
                    "<strong>3. User Mode (Chế độ người dùng):</strong> Mức đặc quyền thấp nhất, dành cho các ứng dụng thông thường (User Applications) chạy bên trong hệ điều hành khách."
                  ]
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Cơ chế bẫy chỉ lệnh (Trap-and-Emulate)",
                  text: "Khi một máy ảo (Guest OS) cố tình gửi một chỉ lệnh đặc quyền nhạy cảm (như cố truy cập trực tiếp thanh ghi phần cứng hoặc phân chia lại RAM), CPU vật lý sẽ lập tức kích hoạt ngắt phần cứng <strong>'Trap' (Bẫy)</strong>, tước quyền thực thi và chuyển giao quyền kiểm soát cho Hypervisor xử lý giả lập (Emulate) một cách an toàn."
                },
                {
                  type: "privilege-levels-hierarchy"
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch2-s6-2-virtual-io",
          number: "6.2",
          title: "Ảo hóa Nhập/Xuất (Virtual I/O) & Máy ảo là Digital Object",
          parts: [
            {
              id: "cloud-ch2-s6-2-p1",
              label: "VIRTUAL I/O & BẢN CHẤT VM",
              title: "Đường ống chuyển tiếp Virtual I/O và tính chất Digital Object của máy ảo",
              content: [
                {
                  type: "paragraph",
                  text: "<strong>6.2.1. Ảo hóa Nhập/Xuất (Virtual I/O):</strong> Đối với hệ điều hành khách (Guest OS), <strong>các thiết bị ảo không thể phân biệt được với thiết bị vật lý thật</strong>. Mọi tác vụ ghi/đọc dữ liệu đều đi qua chuỗi quy trình chuẩn hóa:"
                },
                {
                  type: "paragraph",
                  text: "<div class='p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-center font-mono font-bold text-indigo-900 text-xs sm:text-sm'>Guest OS ➔ Virtual I/O ➔ Hypervisor ➔ Device Controller ➔ Data Center Storage</div>"
                },
                {
                  type: "paragraph",
                  text: "Toàn bộ đĩa ảo (Virtual Disk) được lưu trữ tập trung vào hệ thống lưu trữ Data Center Storage (SAN/NAS), giúp tách rời hoàn toàn dữ liệu đĩa khỏi một máy chủ cụ thể."
                },
                {
                  type: "paragraph",
                  text: "<strong>6.2.2. Máy ảo là một Đối tượng Kỹ thuật số (Digital Object):</strong> Máy ảo được tạo lập và quản lý <strong>100% bằng phần mềm</strong>. Vì là một Digital Object thuần túy, máy ảo sở hữu các đặc tính siêu việt:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Đóng gói (Encapsulation):</strong> Toàn bộ trạng thái CPU, cấu hình RAM, ổ đĩa và card mạng của máy ảo được đóng gói gọn trong các tập tin cấu hình.",
                    "<strong>Nhân bản (Cloning):</strong> Tạo hàng trăm máy ảo giống hệt nhau chỉ trong vài giây từ một ảnh mẫu (Image/Snapshot).",
                    "<strong>Di chuyển linh hoạt (Migration):</strong> Di chuyển nguyên vẹn máy ảo từ máy chủ vật lý này sang máy chủ vật lý khác qua mạng mà không cần di chuyển bất kỳ phần cứng nào.",
                    "<strong>Cân bằng tải (Load Balancing):</strong> Tự động điều phối các máy ảo sang các máy chủ ít tải hơn để giải phóng nhiệt và tối ưu năng lượng."
                  ]
                },
                {
                  type: "virtual-io-pipeline-visualizer"
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch2-s6-3-vm-migration",
          number: "6.3",
          title: "Di chuyển máy ảo trực tiếp (Live VM Migration) qua 3 Giai đoạn",
          parts: [
            {
              id: "cloud-ch2-s6-3-p1",
              label: "LIVE MIGRATION",
              title: "3 Giai đoạn di chuyển máy ảo với thời gian ngưng trệ tiệm cận 0",
              content: [
                {
                  type: "paragraph",
                  text: "Một trong những tính năng kỳ diệu nhất của điện toán đám mây là <strong>Live VM Migration</strong> — di chuyển một máy ảo đang chạy từ Máy chủ A sang Máy chủ B mà người dùng đang truy cập không hề cảm thấy bị gián đoạn. Quy trình này trải qua đúng <strong>3 giai đoạn tuần tự</strong>:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Giai đoạn 1 – Pre-copy Phase:</strong> Sao chép các trang bộ nhớ (Memory Pages) từ Host A sang Host B qua mạng tốc độ cao. Trong suốt giai đoạn này, <em>máy ảo (VM) vẫn tiếp tục chạy và phục vụ người dùng bình thường</em>. Những trang nhớ bị người dùng thay đổi (dirty pages) tiếp tục được sao chép bổ sung theo từng đợt lặp.",
                    "<strong>Giai đoạn 2 – Stop-and-copy Phase (Cực kỳ then chốt):</strong> Tạm ngưng máy ảo (Suspend VM) trong một khoảng thời gian cực ngắn (dưới 0.5 giây / vài trăm mili-giây). Trong tích tắc này, hệ thống truyền nốt các trang nhớ bẩn (dirty pages) cuối cùng cùng toàn bộ trạng thái thanh ghi CPU registers sang Host B.",
                    "<strong>Giai đoạn 3 – Post-copy Phase:</strong> Host B gửi xác nhận trạng thái hoàn tất, khôi phục lại máy ảo (Unsuspend VM) để máy ảo tiếp tục vận hành trên Host B. Mạng cập nhật bảng địa chỉ ARP và Host A giải phóng tài nguyên RAM."
                  ]
                },
                {
                  type: "vm-migration-simulator"
                },
                {
                  type: "micro-quiz",
                  question: "Trong quy trình di chuyển máy ảo trực tiếp (Live VM Migration), việc tạm ngưng máy ảo (Suspend VM) để truyền các trang nhớ bẩn cuối cùng và thanh ghi CPU diễn ra ở giai đoạn nào?",
                  options: [
                    "Giai đoạn Pre-copy (Sao chép trước)",
                    "Giai đoạn Stop-and-copy (Dừng và sao chép)",
                    "Giai đoạn Post-copy (Sao chép sau)",
                    "Giai đoạn Initialization (Khởi tạo phần cứng)"
                  ],
                  answerIndex: 1,
                  explanation: "Giai đoạn Stop-and-copy là giai đoạn tạm ngưng VM trong tích tắc (<0.5 giây) để truyền nốt các trang nhớ bẩn (dirty pages) cuối cùng và thanh ghi CPU sang máy chủ đích.",
                  hint: "Tìm giai đoạn có chữ 'Stop' đại diện cho việc tạm ngưng máy ảo trong thời gian cực ngắn."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VII: ẢO HÓA BẰNG ỨNG DỤNG (HOSTED HYPERVISOR / TYPE 2)
       ============================ */
    {
      id: "cloud-ch2-s7",
      roman: "VII",
      title: "Ảo hóa bằng ứng dụng (Hosted Hypervisor / Type 2)",
      subsections: [
        {
          id: "cloud-ch2-s7-1-hosted-features",
          number: "7.1",
          title: "Hosted Hypervisor (Type 2) vs Bare-Metal (Type 1) & 3 Tính năng Cốt lõi",
          parts: [
            {
              id: "cloud-ch2-s7-1-p1",
              label: "HOSTED HYPERVISOR",
              title: "Kiến trúc phân tầng và 3 tính năng đặc trưng của Type 2 Hypervisor",
              content: [
                {
                  type: "paragraph",
                  text: "Khác với <strong>Bare-Metal Hypervisor (Type 1)</strong> chạy trực tiếp trên phần cứng máy chủ tại các Cloud Data Center, <strong>Hosted Hypervisor (Type 2)</strong> là một phần mềm chạy trên một <strong>Hệ điều hành chủ (Host OS)</strong> thông thường song song với các ứng dụng khác (Chrome, Word, VS Code)."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Hệ điều hành khách (Guest OS):</strong> Là hệ điều hành cài đặt và chạy bên trong máy ảo.",
                    "<strong>Hệ điều hành chủ (Host OS):</strong> Là hệ điều hành nền tảng cài đặt trên máy vật lý (Windows, macOS, Ubuntu).",
                    "<strong>1. Gán địa chỉ IP riêng cho Guest OS:</strong> Hỗ trợ các chế độ mạng ảo linh hoạt như Bridged (VM nhận IP độc lập cùng dải LAN với Host), NAT (chia sẻ kết nối Internet của Host) hoặc Host-Only (cô lập an toàn tuyệt đối).",
                    "<strong>2. Chuyển tiếp I/O đĩa tới Host OS:</strong> Ổ cứng của máy ảo được đóng gói thành một tập tin đơn lẻ trên Host OS (ví dụ: file .vmdk hoặc .vdi). Mọi lệnh đọc/ghi đĩa từ Guest OS được Hypervisor ánh xạ thành thao tác đọc/ghi file trên Host OS.",
                    "<strong>3. Chia sẻ tệp & thư mục (Shared Folders):</strong> Cho phép ánh xạ trực tiếp thư mục giữa Host OS và Guest OS, hỗ trợ sao chép văn bản (Clipboard) hai chiều tiện lợi."
                  ]
                },
                {
                  type: "bare-metal-vs-hosted-duel"
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch2-s7-2-hosted-vs-multiboot",
          number: "7.2",
          title: "Hosted Hypervisor vs Khởi động kép (Multiboot / Dual Boot)",
          parts: [
            {
              id: "cloud-ch2-s7-2-p1",
              label: "ĐỐI CHIẾU THỰC TIỄN",
              title: "Sự khác biệt căn bản giữa máy ảo Type 2 và chế độ Multiboot",
              content: [
                {
                  type: "paragraph",
                  text: "Rất nhiều người nhầm lẫn giữa việc cài đặt máy ảo (Hosted Hypervisor) và cài đặt nhiều hệ điều hành trên ổ đĩa vật lý (Multiboot / Dual Boot). Đây là 2 phương thức hoàn toàn khác biệt về bản chất vận hành:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Hosted Hypervisor:</strong> Cho phép <strong>chạy đồng thời nhiều hệ điều hành cùng lúc</strong>. Người dùng có thể chuyển đổi giữa Windows và Linux ngay tức khắc chỉ bằng một cú nhấp chuột hoặc tổ hợp phím (Alt+Tab), tài nguyên RAM và mạng được chia sẻ linh hoạt theo nhu cầu.",
                    "<strong>Multiboot (Dual Boot):</strong> Cài nhiều hệ điều hành vào các phân vùng đĩa vật lý khác nhau. <strong>CHỈ DUY NHẤT 1 HỆ ĐIỀU HÀNH CHẠY TẠI MỘT THỜI ĐIỂM</strong>. Muốn chuyển sang hệ điều hành khác, <strong>BẮT BUỘC PHẢI KHỞI ĐỘNG LẠI MÁY TÍNH (REBOOT)</strong>, chọn lại menu bootloader (GRUB), làm đứt đoạn hoàn toàn phiên làm việc hiện tại."
                  ]
                },
                {
                  type: "hosted-vs-multiboot-comparison"
                },
                {
                  type: "micro-quiz",
                  question: "Đặc điểm nào sau đây là sự khác biệt cơ bản nhất của Multiboot (Dual Boot) so với Hosted Hypervisor?",
                  options: [
                    "Multiboot có thể chạy song song 5 hệ điều hành cùng một lúc",
                    "Multiboot chỉ cho phép duy nhất một hệ điều hành hoạt động tại một thời điểm và bắt buộc phải khởi động lại máy khi muốn chuyển đổi",
                    "Multiboot sử dụng phần mềm Hypervisor để quản lý bộ nhớ",
                    "Multiboot cho phép copy-paste clipboard hai chiều giữa các hệ điều hành trong thời gian thực"
                  ],
                  answerIndex: 1,
                  explanation: "Trong mô hình Multiboot, máy tính chỉ có thể tải và chạy duy nhất một hệ điều hành tại một thời điểm trên phần cứng vật lý. Muốn chuyển sang hệ điều hành khác, người dùng bắt buộc phải khởi động lại máy tính (Reboot).",
                  hint: "Hãy nhớ đến nhược điểm phải tắt máy khởi động lại của Multiboot."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VIII: TỔNG KẾT TOÀN CHƯƠNG & 10 TỪ KHÓA CỐT LÕI
       ============================ */
    {
      id: "cloud-ch2-s8",
      roman: "VIII",
      title: "Tổng kết toàn chương: 10 Từ khóa cốt lõi & Ôn luyện phản xạ",
      subsections: [
        {
          id: "cloud-ch2-s8-1-master-matrix",
          number: "8.1",
          title: "Bản đồ 10 Từ khóa Cốt lõi & Ma trận Ôn thi Trọng tâm",
          parts: [
            {
              id: "cloud-ch2-s8-1-p1",
              label: "TỔNG KẾT",
              title: "Hệ thống hóa toàn bộ tri thức kỹ thuật Chương 2",
              content: [
                {
                  type: "paragraph",
                  text: "Chúc mừng bạn đã hoàn thành toàn bộ nội dung lý thuyết và thực hành của <strong>Chương 2: Hạ tầng & Công nghệ Đám mây</strong>. Dưới đây là <strong>Ma trận 10 từ khóa cốt lõi</strong> đúc kết toàn bộ các khái niệm trọng tâm xuất hiện trong đề thi và các cuộc phỏng vấn kỹ thuật Cloud Engineer:"
                },
                {
                  type: "chapter2-master-keyterms-matrix"
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "💡 Hướng dẫn ôn tập hiệu quả",
                  text: "Hãy bật tính năng <strong>'Chế độ Ôn thi (Ẩn định nghĩa)'</strong> trên bảng ma trận để tự kiểm tra khả năng giải thích từng khái niệm trước khi chuyển sang luyện đề trắc nghiệm chính thức."
                },
                {
                  type: "micro-quiz",
                  question: "Thứ tự phân cấp kiến trúc vật lý của Data Center và thứ tự 3 giai đoạn của Live VM Migration lần lượt là:",
                  options: [
                    "Data Center ➔ PoD ➔ Rack và Stop-and-copy ➔ Pre-copy ➔ Post-copy",
                    "Rack ➔ PoD ➔ Data Center và Pre-copy ➔ Stop-and-copy ➔ Post-copy",
                    "PoD ➔ Rack ➔ Data Center và Pre-copy ➔ Post-copy ➔ Stop-and-copy",
                    "Server ➔ Data Center ➔ PoD và Stop-and-copy ➔ Post-copy ➔ Pre-copy"
                  ],
                  answerIndex: 1,
                  explanation: "Kiến trúc phân cấp vật lý từ nhỏ đến lớn là: Rack (giá đỡ) ➔ PoD (cụm module) ➔ Data Center (trung tâm dữ liệu). Quy trình Live VM Migration trải qua đúng 3 giai đoạn: Pre-copy (chép RAM khi VM đang chạy) ➔ Stop-and-copy (tạm ngưng chép dirty pages & CPU registers) ➔ Post-copy (khôi phục VM trên máy đích).",
                  hint: "Tìm phương án có Rack đứng đầu và Pre-copy bắt đầu quy trình di chuyển."
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
   TỪ ĐIỂN THUẬT NGỮ SONG NGỮ (GLOSSARY) CHO CHƯƠNG 2 (MỤC I - IV)
   ============================================================ */
export const cloudChapter2Glossary = [
  {
    id: "g2-datacenter",
    termVi: "Trung tâm dữ liệu",
    termEn: "Data Center",
    abbreviation: "DC",
    definition: "Cơ sở hạ tầng vật lý chuyên dụng nơi tập trung máy chủ, lưu trữ và mạng để vận hành các dịch vụ điện toán đám mây.",
    subsectionId: "cloud-ch2-s1-1-definition-structure"
  },
  {
    id: "g2-rack",
    termVi: "Giá đỡ thiết bị",
    termEn: "Server Rack",
    abbreviation: "Rack (42U)",
    definition: "Tủ khung kim loại tiêu chuẩn chứa các máy chủ, switch và PDU, được xếp cạnh nhau thành từng hàng trong Data Center.",
    subsectionId: "cloud-ch2-s1-1-definition-structure"
  },
  {
    id: "g2-pod",
    termVi: "Cụm phân phối tài nguyên",
    termEn: "Point of Delivery",
    abbreviation: "PoD",
    definition: "Module khép kín gồm tập hợp nhiều rack kết hợp với hệ thống điện (PDS, UPS), làm mát (RowCool) và quản lý (DCIM).",
    subsectionId: "cloud-ch2-s1-2-pod"
  },
  {
    id: "g2-raised-floor",
    termVi: "Sàn nâng",
    termEn: "Raised Floor",
    abbreviation: "Raised Floor (1-4 ft)",
    definition: "Khung sàn kim loại nâng cao 1-4 feet so với sàn bê tông, tạo khoảng trống dẫn khí lạnh áp suất cao và chứa cáp điện.",
    subsectionId: "cloud-ch2-s2-2-cooling-solutions"
  },
  {
    id: "g2-cold-aisle",
    termVi: "Lối đi lạnh",
    termEn: "Cold Aisle",
    abbreviation: "Cold Aisle",
    definition: "Lối đi nơi các mặt trước của hai hàng rack đối diện nhau, đón khí lạnh thổi từ sàn nâng vào làm mát máy chủ (18-21°C).",
    subsectionId: "cloud-ch2-s2-2-cooling-solutions"
  },
  {
    id: "g2-hot-aisle",
    termVi: "Lối đi nóng",
    termEn: "Hot Aisle",
    abbreviation: "Hot Aisle",
    definition: "Lối đi nơi các mặt sau của hai hàng rack đối diện nhau, thu gom toàn bộ khí nóng thải ra từ server để dẫn lên Chimney.",
    subsectionId: "cloud-ch2-s2-2-cooling-solutions"
  },
  {
    id: "g2-chimney",
    termVi: "Ống thoát khí nóng",
    termEn: "Thermal Chimney Duct",
    abbreviation: "Chimney",
    definition: "Ống dẫn có quạt hút gắn trên nóc lối đi nóng, hút toàn bộ khí nóng đẩy thẳng lên trần kỹ thuật tránh bị hút ngược.",
    subsectionId: "cloud-ch2-s2-2-cooling-solutions"
  },
  {
    id: "g2-lights-out",
    termVi: "Trung tâm dữ liệu không đèn",
    termEn: "Lights-Out Data Center",
    abbreviation: "Lights-Out DC",
    definition: "Mô hình Data Center tắt đèn hoàn toàn và không có người trực tiếp bên trong, toàn bộ thiết bị được quản trị từ xa qua mạng.",
    subsectionId: "cloud-ch2-s2-3-lights-out"
  },
  {
    id: "g2-tor-switch",
    termVi: "Switch đặt trên đỉnh rack",
    termEn: "Top-of-Rack Switch",
    abbreviation: "ToR Switch",
    definition: "Thiết bị chuyển mạch đặt ở đỉnh mỗi rack để kết nối tất cả máy chủ trong rack ra mạng lõi của Data Center.",
    subsectionId: "cloud-ch2-s3-1-basics-traffic-flow"
  },
  {
    id: "g2-multi-port-nic",
    termVi: "Card mạng đa cổng",
    termEn: "Multi-port Network Interface Card",
    abbreviation: "Multi-port NIC",
    definition: "Card mạng trên máy chủ có nhiều cổng vật lý nối song song vào ToR switch, nhân băng thông lên K lần và chống đứt cáp.",
    subsectionId: "cloud-ch2-s3-1-basics-traffic-flow"
  },
  {
    id: "g2-north-south",
    termVi: "Lưu lượng Bắc - Nam",
    termEn: "North-South Traffic",
    abbreviation: "North-South",
    definition: "Dòng lưu lượng mạng di chuyển vào hoặc ra khỏi Data Center giữa người dùng Internet và các máy chủ.",
    subsectionId: "cloud-ch2-s3-1-basics-traffic-flow"
  },
  {
    id: "g2-east-west",
    termVi: "Lưu lượng Đông - Tây",
    termEn: "East-West Traffic",
    abbreviation: "East-West",
    definition: "Dòng lưu lượng mạng trao đổi ngang nội bộ giữa các máy chủ và rack trong cùng Data Center (chiếm >70% băng thông).",
    subsectionId: "cloud-ch2-s3-1-basics-traffic-flow"
  },
  {
    id: "g2-fat-tree",
    termVi: "Tô-pô mạng Fat Tree",
    termEn: "Fat Tree Topology",
    abbreviation: "Fat Tree",
    definition: "Kiến trúc mạng cây phân cấp truyền thống, nhược điểm là các liên kết cấp cao ở gốc dễ bị nghẽn cổ chai (Bottleneck).",
    subsectionId: "cloud-ch2-s3-2-topologies"
  },
  {
    id: "g2-leaf-spine",
    termVi: "Tô-pô mạng Leaf-Spine",
    termEn: "Leaf-Spine Topology",
    abbreviation: "Leaf-Spine",
    definition: "Kiến trúc mạng phẳng 2 tầng, mỗi switch Leaf nối tới tất cả switch Spine, bảo đảm khả năng chịu lỗi (Fault Tolerance) cao.",
    subsectionId: "cloud-ch2-s3-2-topologies"
  },
  {
    id: "g2-super-spine",
    termVi: "Tô-pô mạng Super-Spine",
    termEn: "Super-Spine Topology",
    abbreviation: "Super-Spine",
    definition: "Mở rộng của Leaf-Spine với thêm tầng Super-Spine ở trên cùng để kết nối hàng chục cụm PoD trong siêu trung tâm dữ liệu.",
    subsectionId: "cloud-ch2-s3-2-topologies"
  },
  {
    id: "g2-storage-virt",
    termVi: "Ảo hóa lưu trữ",
    termEn: "Storage Virtualization",
    abbreviation: "Storage Pool",
    definition: "Kỹ thuật tách rời lưu trữ vật lý khỏi vị trí rack cụ thể, gom thành một Pool chung để quản trị và phân bổ quota linh hoạt.",
    subsectionId: "cloud-ch2-s4-1-local-vs-virtualized"
  },
  {
    id: "g2-software-emulation",
    termVi: "Giả lập phần mềm",
    termEn: "Software Emulation",
    abbreviation: "Emulation",
    definition: "Mô hình ảo hóa trong đó chương trình Emulator đọc tuần tự từng chỉ lệnh để mô phỏng OS khác (chậm nhất do overhead thông dịch).",
    subsectionId: "cloud-ch2-s5-1-types"
  },
  {
    id: "g2-para-virt",
    termVi: "Ảo hóa bán phần",
    termEn: "Para-virtualization",
    abbreviation: "Para-virt",
    definition: "Ảo hóa yêu cầu bắt buộc phải sửa đổi mã nguồn của Hệ điều hành khách (Guest OS) trước khi chạy để tương tác trực tiếp với Hypervisor.",
    subsectionId: "cloud-ch2-s5-1-types"
  },
  {
    id: "g2-full-virt",
    termVi: "Ảo hóa toàn phần",
    termEn: "Full Virtualization",
    abbreviation: "Full-virt",
    definition: "Ảo hóa hoàn chỉnh phần cứng với sự trợ giúp của CPU (VT-x/AMD-V), không cần sửa mã nguồn OS, là chuẩn mực cho Cloud Data Center.",
    subsectionId: "cloud-ch2-s5-1-types"
  },
  {
    id: "g2-hypervisor",
    termVi: "Bộ giám sát máy ảo",
    termEn: "Hypervisor / Virtual Machine Monitor",
    abbreviation: "Hypervisor / VMM",
    definition: "Lớp phần mềm quản trị tạo lập, điều phối tài nguyên CPU, RAM, ổ đĩa và cô lập an toàn giữa các máy ảo trên máy chủ vật lý.",
    subsectionId: "cloud-ch2-s6-1-privilege-levels"
  },
  {
    id: "g2-privilege-levels",
    termVi: "3 Mức đặc quyền phần cứng",
    termEn: "Hardware Privilege Levels",
    abbreviation: "Hypervisor/Kernel/User",
    definition: "Cơ chế phân cấp: Hypervisor mode (Root) có quyền tối thượng tạo VM; Kernel mode (Guest OS); User mode (Ứng dụng người dùng).",
    subsectionId: "cloud-ch2-s6-1-privilege-levels"
  },
  {
    id: "g2-trap-and-emulate",
    termVi: "Cơ chế bẫy và giả lập",
    termEn: "Trap-and-Emulate",
    abbreviation: "Trap & Emulate",
    definition: "Kỹ thuật CPU ngắt lệnh khi Guest OS chạy chỉ lệnh nhạy cảm phần cứng, chuyển giao cho Hypervisor kiểm tra và giả lập an toàn.",
    subsectionId: "cloud-ch2-s6-1-privilege-levels"
  },
  {
    id: "g2-virtual-io",
    termVi: "Ảo hóa Nhập/Xuất",
    termEn: "Virtual I/O",
    abbreviation: "Virtual I/O",
    definition: "Đường ống chuyển tiếp: Guest OS ➔ Virtual I/O ➔ Hypervisor ➔ Device Controller ➔ DC Storage, thiết bị ảo hoạt động y hệt thiết bị thật.",
    subsectionId: "cloud-ch2-s6-2-virtual-io"
  },
  {
    id: "g2-digital-object",
    termVi: "Đối tượng kỹ thuật số",
    termEn: "Digital Object",
    abbreviation: "VM Digital Object",
    definition: "Bản chất của máy ảo (VM) được tạo và quản lý 100% bằng phần mềm, cho phép đóng gói, nhân bản (clone), di chuyển và cân bằng tải.",
    subsectionId: "cloud-ch2-s6-2-virtual-io"
  },
  {
    id: "g2-live-migration",
    termVi: "Di chuyển máy ảo trực tiếp",
    termEn: "Live VM Migration",
    abbreviation: "Live Migration",
    definition: "Di chuyển máy ảo đang hoạt động sang máy chủ vật lý khác qua 3 giai đoạn: Pre-copy ➔ Stop-and-copy ➔ Post-copy với downtime < 0.5s.",
    subsectionId: "cloud-ch2-s6-3-vm-migration"
  },
  {
    id: "g2-pre-copy",
    termVi: "Giai đoạn sao chép trước",
    termEn: "Pre-copy Phase",
    abbreviation: "Pre-copy",
    definition: "Giai đoạn sao chép các trang nhớ RAM sang máy đích trong khi máy ảo vẫn tiếp tục chạy và phục vụ người dùng bình thường.",
    subsectionId: "cloud-ch2-s6-3-vm-migration"
  },
  {
    id: "g2-stop-and-copy",
    termVi: "Giai đoạn tạm ngưng và sao chép",
    termEn: "Stop-and-copy Phase",
    abbreviation: "Stop-and-copy",
    definition: "Giai đoạn tạm ngưng máy ảo trong tích tắc (< 0.5s) để truyền nốt các trang nhớ bẩn (dirty pages) cuối cùng và thanh ghi CPU.",
    subsectionId: "cloud-ch2-s6-3-vm-migration"
  },
  {
    id: "g2-post-copy",
    termVi: "Giai đoạn hoàn tất di chuyển",
    termEn: "Post-copy Phase",
    abbreviation: "Post-copy",
    definition: "Giai đoạn máy đích khôi phục máy ảo vận hành (Unsuspend), cập nhật bảng định tuyến mạng và máy nguồn giải phóng bộ nhớ RAM.",
    subsectionId: "cloud-ch2-s6-3-vm-migration"
  },
  {
    id: "g2-bare-metal-hypervisor",
    termVi: "Hypervisor Type 1 (Bare-Metal)",
    termEn: "Type 1 Bare-Metal Hypervisor",
    abbreviation: "Type 1 Hypervisor",
    definition: "Hypervisor chạy trực tiếp trên phần cứng vật lý không qua Host OS trung gian, hiệu năng tối đa, là chuẩn của Cloud Data Center.",
    subsectionId: "cloud-ch2-s7-1-hosted-features"
  },
  {
    id: "g2-hosted-hypervisor",
    termVi: "Hypervisor Type 2 (Hosted)",
    termEn: "Type 2 Hosted Hypervisor",
    abbreviation: "Type 2 Hypervisor",
    definition: "Hypervisor cài đặt và chạy như một ứng dụng trên Hệ điều hành chủ (Host OS), thích hợp cho phát triển, thử nghiệm cá nhân.",
    subsectionId: "cloud-ch2-s7-1-hosted-features"
  },
  {
    id: "g2-multiboot",
    termVi: "Khởi động kép",
    termEn: "Multiboot / Dual Boot",
    abbreviation: "Multiboot",
    definition: "Cài đặt nhiều hệ điều hành trên ổ cứng nhưng chỉ chạy 1 OS tại một thời điểm, muốn đổi OS bắt buộc phải khởi động lại máy tính (Reboot).",
    subsectionId: "cloud-ch2-s7-2-hosted-vs-multiboot"
  },
  {
    id: "g2-bridged-networking",
    termVi: "Mạng cầu nối máy ảo",
    termEn: "Bridged Networking",
    abbreviation: "Bridged Adapter",
    definition: "Chế độ mạng ảo gán cho Guest OS một địa chỉ IP riêng độc lập thuộc cùng dải mạng LAN vật lý với máy tính chủ Host OS.",
    subsectionId: "cloud-ch2-s7-1-hosted-features"
  },
  {
    id: "g2-shared-folder",
    termVi: "Thư mục chia sẻ",
    termEn: "Shared Folders",
    abbreviation: "Shared Folders",
    definition: "Tính năng của Hosted Hypervisor cho phép chia sẻ thư mục và bộ nhớ tạm (Clipboard) hai chiều giữa Host OS và Guest OS.",
    subsectionId: "cloud-ch2-s7-1-hosted-features"
  }
];

/* ============================================================
   THẺ GHI NHỚ THUẬT NGỮ (FLASHCARDS SM-2) CHO CHƯƠNG 2 TOÀN DIỆN
   ============================================================ */
export const cloudChapter2Flashcards = [
  {
    id: "fc-c2-01",
    front: "Cấu trúc phân cấp vật lý của Data Center từ nhỏ đến lớn được sắp xếp theo trật tự nào?",
    back: "Rack ➔ PoD ➔ Data Center.\n(Nhiều server nằm trong Rack, nhiều Rack hợp thành PoD, nhiều PoD nằm trong Data Center).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s1-1-definition-structure"
  },
  {
    id: "fc-c2-02",
    front: "Một PoD (Point of Delivery) hoàn chỉnh bao gồm 5 hệ thống hỗ trợ cơ bản nào?",
    back: "1. Power Distribution System (PDS)\n2. Modular UPS\n3. InfraSuite Manager / DCIM\n4. RowCool (Làm mát theo hàng)\n5. Cold/Hot Aisle Containment",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s1-2-pod"
  },
  {
    id: "fc-c2-03",
    front: "Chiều cao chuẩn của Sàn nâng (Raised Floor) trong Data Center là bao nhiêu và khoảng trống dưới sàn chứa gì?",
    back: "• Chiều cao chuẩn: 1 đến 4 feet (khoảng 30 đến 120 cm) so với sàn bê tông.\n• Khoảng trống dưới sàn chứa: Cáp điện nguồn + Luồng khí lạnh áp suất cao từ điều hòa.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s2-2-cooling-solutions"
  },
  {
    id: "fc-c2-04",
    front: "Phân biệt Lối đi lạnh (Cold Aisle) và Lối đi nóng (Hot Aisle)?",
    back: "• Cold Aisle: Mặt trước các rack đối diện nhau, đón khí lạnh thổi từ lỗ sàn lên (18-21°C).\n• Hot Aisle: Mặt sau các rack đối diện nhau, thoát khí nóng ra sau và bay lên ống Chimney.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s2-2-cooling-solutions"
  },
  {
    id: "fc-c2-05",
    front: "Lights-Out Data Center là gì và mang lại 3 lợi ích cốt lõi nào?",
    back: "• Là trung tâm dữ liệu tắt đèn hoàn toàn, quản lý từ xa qua mạng.\n• 3 Lợi ích: (1) Giảm chi phí nhân sự; (2) Ít khả năng cấu hình sai do con người; (3) Giảm nguy cơ bị tấn công vật lý.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s2-3-lights-out"
  },
  {
    id: "fc-c2-06",
    front: "Phân biệt lưu lượng North-South và East-West trong Data Center?",
    back: "• North-South: Lưu lượng vào/ra giữa Internet và các máy chủ bên trong Data Center.\n• East-West: Lưu lượng trao đổi ngang nội bộ giữa các server/rack trong Data Center (chiếm >70% băng thông).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s3-1-basics-traffic-flow"
  },
  {
    id: "fc-c2-07",
    front: "Tại sao kiến trúc mạng Leaf-Spine lại vượt trội hơn hẳn so với Fat Tree?",
    back: "• Fat Tree: Cây phân cấp, dễ bị nghẽn cổ chai ở gốc và là Single Point of Failure.\n• Leaf-Spine: Mọi Leaf nối mọi Spine. Nếu 1 Spine hỏng, traffic tự động chuyển qua Spine khác ➔ Khả năng chịu lỗi (Fault Tolerance) tuyệt vời.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s3-2-topologies"
  },
  {
    id: "fc-c2-08",
    front: "Lưu trữ cục bộ (Local Storage) gặp 2 vấn đề lớn nào và giải pháp khắc phục là gì?",
    back: "• 2 Vấn đề: Khó giới hạn quota cho nhiều VM trên 1 server; ổ cứng rải rác khó bảo trì khi hỏng.\n• Giải pháp: Ảo hóa lưu trữ (Storage Virtualization) gom ổ cứng thành Storage Pool tập trung tách rời vật lý.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s4-1-local-vs-virtualized"
  },
  {
    id: "fc-c2-09",
    front: "Phân biệt 3 công nghệ ảo hóa: Software Emulation, Para-virtualization và Full Virtualization?",
    back: "• Software Emulation: Emulator đọc từng lệnh mô phỏng (rất chậm, ví dụ: BlueStacks).\n• Para-virtualization: Lệnh CPU chạy trực tiếp nhưng BẮT BUỘC PHẢI SỬA MÃ NGUỒN OS.\n• Full Virtualization: Không cần sửa OS, tránh chi phí mô phỏng, là chuẩn của Cloud Data Center.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s5-1-types"
  },
  {
    id: "fc-c2-10",
    front: "3 Mức đặc quyền phần cứng (Privilege Levels) trong ảo hóa gồm những gì và ai có quyền tạo VM?",
    back: "• 3 Mức: Hypervisor mode (quyền cao nhất) ➔ Kernel mode (Guest OS) ➔ User mode (App).\n• Chỉ có Hypervisor mới có quyền tạo máy ảo và cấp phát bộ nhớ RAM vật lý.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s6-1-privilege-levels"
  },
  {
    id: "fc-c2-11",
    front: "Chuỗi quy trình của đường ống Virtual I/O và tính chất Digital Object của máy ảo là gì?",
    back: "• Đường ống I/O: Guest OS ➔ Virtual I/O ➔ Hypervisor ➔ Device Controller ➔ DC Storage.\n• VM là Digital Object: Tạo/quản lý 100% bằng phần mềm nên có thể đóng gói, clone, di chuyển và cân bằng tải linh hoạt.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s6-2-virtual-io"
  },
  {
    id: "fc-c2-12",
    front: "Quy trình Live VM Migration trải qua đúng 3 giai đoạn nào và downtime diễn ra ở đâu?",
    back: "• 3 Giai đoạn: (1) Pre-copy ➔ (2) Stop-and-copy ➔ (3) Post-copy.\n• Downtime diễn ra ở giai đoạn (2) Stop-and-copy: Tạm ngưng VM chớp nhoáng (<0.5s) để gửi các trang nhớ bẩn cuối cùng và thanh ghi CPU.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s6-3-vm-migration"
  },
  {
    id: "fc-c2-13",
    front: "Phân biệt Type 1 Bare-Metal Hypervisor và Type 2 Hosted Hypervisor?",
    back: "• Type 1 (Bare-metal): Chạy trực tiếp trên phần cứng, không qua Host OS, hiệu năng cao nhất (ESXi, KVM, Hyper-V Core) ➔ Dùng cho Cloud DC.\n• Type 2 (Hosted): Chạy như một ứng dụng trên Host OS (VirtualBox, VMware Workstation) ➔ Dùng cho cá nhân/thử nghiệm.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s7-1-hosted-features"
  },
  {
    id: "fc-c2-14",
    front: "Sự khác biệt sống còn giữa Hosted Hypervisor và Multiboot (Dual Boot) là gì?",
    back: "• Hosted Hypervisor: Chạy đồng thời nhiều OS cùng lúc, chuyển đổi tức thì trong 0.1s không làm gián đoạn công việc.\n• Multiboot: Chỉ chạy duy nhất 1 OS tại một thời điểm, muốn chuyển OS bắt buộc phải Khởi động lại máy tính (Reboot mất ~45s).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s7-2-hosted-vs-multiboot"
  },
  {
    id: "fc-c2-15",
    front: "3 Chế độ mạng máy ảo (Virtual Networking) trong Hosted Hypervisor khác nhau thế nào?",
    back: "• Bridged: VM nhận IP riêng cùng dải LAN với Host, hoạt động như máy vật lý độc lập.\n• NAT: VM nhận IP dải riêng, chia sẻ kết nối Internet của Host.\n• Host-Only: VM chỉ kết nối nội bộ với Host, hoàn toàn cô lập khỏi Internet.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s7-1-hosted-features"
  },
  {
    id: "fc-c2-16",
    front: "10 Từ khóa cốt lõi toàn Chương 2 Đám mây gồm những gì?",
    back: "1. Data Center/Rack/PoD | 2. Raised Floor/Aisles/Chimney/Lights-out | 3. ToR/North-South/East-West/Leaf-Spine | 4. Storage Virtualization | 5. Emulation/Para/Full Virt | 6. Hypervisor/VM/Host/Guest | 7. User/Kernel/Hypervisor Mode | 8. Virtual I/O | 9. Live Migration (3 bước) | 10. Hosted vs Multiboot.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s8-1-master-matrix"
  }
];
