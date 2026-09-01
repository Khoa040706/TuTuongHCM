/* ============================================================
   GIÁO TRÌNH ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)
   Chương 2: Hạ tầng và Công nghệ Điện toán đám mây
   Biên tập chuẩn học thuật từ tài liệu nguồn taskcanlam
   ============================================================ */

export const cloudComputingChapter2 = {
  id: "cloud-ch2",
  title: "Chương 2",
  subtitle: "Hạ tầng và Công nghệ Điện toán đám mây (Cloud Infrastructure & Virtualization)",
  sections: [
    /* ============================
       MỤC ★: OVERVIEW CHƯƠNG
       ============================ */
    {
      id: "cloud-ch2-s0",
      roman: "★",
      title: "Tổng quan chương: Hạ tầng Vật lý & Công nghệ Ảo hóa",
      subsections: [
        {
          id: "cloud-ch2-s0-overview",
          number: "0",
          title: "Bản đồ kiến trúc & Radar kỹ năng Chương 2",
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
                  text: "Chương 2 đi sâu vào thế giới vật lý và logic vận hành của Cloud: Thiết kế Trung tâm dữ liệu (Data Center), quản lý điện năng & tản nhiệt lối đi nóng/lạnh, cấu trúc liên kết mạng Leaf-Spine, kỹ thuật ảo hóa (Full, Para, Emulation), 3 mức đặc quyền Hypervisor và quy trình 3 giai đoạn di chuyển máy ảo (VM Migration)."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC I: DATA CENTER & COOLING
       ============================ */
    {
      id: "cloud-ch2-s1",
      roman: "I",
      title: "Trung tâm Dữ liệu (Data Center), Điện năng & Tản nhiệt",
      subsections: [
        {
          id: "cloud-ch2-s1-datacenter",
          number: "1",
          title: "Cấu trúc Phân tầng Vật lý: Server ➔ Rack ➔ PoD ➔ Data Center",
          parts: [
            {
              id: "cloud-ch2-s1-datacenter-p1",
              label: "a",
              title: "Các khối cấu thành trung tâm dữ liệu",
              content: [
                {
                  type: "paragraph",
                  text: "Trung tâm dữ liệu (Data Center) là tổ hợp công trình kỹ thuật tập trung các hệ thống máy chủ, thiết bị lưu trữ và chuyển mạch mạng phục vụ việc cung cấp dịch vụ đám mây liên tục 24/7."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Giá đỡ (Rack):</strong> Khung kim loại tiêu chuẩn (thường là 42U) chứa các máy chủ dạng phiến (blade/rackmount servers), bộ chuyển mạch và phân phối nguồn.",
                    "<strong>Cụm phân phối (PoD - Point of Delivery):</strong> Tập hợp nhiều dãy rack kết hợp với hệ thống phụ trợ đồng bộ bao gồm: Hệ thống phân phối điện (PDS), Bộ lưu điện module (Modular UPS), Phần mềm quản lý DCIM (Data Center Infrastructure Management) và hệ thống điều hòa làm mát theo hàng (RowCool).",
                    "<strong>Nguyên lý thứ bậc:</strong> <em>Server ➔ Rack ➔ PoD ➔ Data Center</em> (từ cấp vi mô đến đại quy mô)."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch2-s1-cooling",
          number: "2",
          title: "Giải pháp Điện năng, Tản nhiệt & Trung tâm dữ liệu không đèn",
          parts: [
            {
              id: "cloud-ch2-s1-cooling-p1",
              label: "b",
              title: "Lối đi Nóng/Lạnh và Lights-Out Data Center",
              content: [
                {
                  type: "paragraph",
                  text: "Hiệu năng tiêu thụ điện năng (PUE - Power Usage Effectiveness) là chỉ số sống còn của mọi Data Center. Nhiệt lượng tỏa ra tỷ lệ thuận với điện năng tiêu thụ, biến hệ thống làm mát thành thành phần có tầm quan trọng ngang hàng với chip xử lý tính toán:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Sàn nâng (Raised Floor):</strong> Cấu trúc khung kim loại nâng cao từ 1 đến 4 feet so với sàn bê tông. Khoảng trống bên dưới được dùng làm ống dẫn khí lạnh áp suất cao và bố trí các trục cáp điện/mạng an toàn.",
                    "<strong>Ngăn cách Lối đi Nóng / Lạnh (Cold/Hot Aisle Containment):</strong> Các dãy rack được xếp quay mặt trước vào nhau tạo thành <em>Lối đi lạnh (Cold Aisle)</em> hút khí mát, và mặt sau quay vào nhau tạo thành <em>Lối đi nóng (Hot Aisle)</em> để xả khí nóng. Khí nóng được ống khói (Chimney) hút ngược lên trần để tái tuần hoàn qua dàn lạnh, ngăn chặn hiện tượng hòa trộn khí nóng làm giảm hiệu suất tản nhiệt.",
                    "<strong>Trung tâm dữ liệu không đèn (Lights-Out Data Center):</strong> Mô hình vận hành tự động hóa hoàn toàn từ xa (Remote Management), không cần bật đèn hay duy trì nhân sự thường trực bên trong sàn máy chủ. Lợi ích: Tiết kiệm điện năng, loại trừ lỗi thao tác con người và tối đa hóa an ninh vật lý."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC II: NETWORKING
       ============================ */
    {
      id: "cloud-ch2-s2",
      roman: "II",
      title: "Hạ tầng Mạng Data Center & Kiến trúc Leaf-Spine",
      subsections: [
        {
          id: "cloud-ch2-s2-traffic",
          number: "1",
          title: "Đặc điểm Luồng dữ liệu: North-South vs East-West",
          parts: [
            {
              id: "cloud-ch2-s2-traffic-p1",
              label: "a",
              title: "Phân loại lưu lượng mạng đám mây",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Lưu lượng Bắc - Nam (North-South Traffic):</strong> Luồng dữ liệu đi vào và đi ra khỏi Data Center (giao tiếp giữa khách hàng Internet bên ngoài ➔ Cân bằng tải Load Balancer ➔ Các máy chủ ứng dụng bên trong).",
                    "<strong>Lưu lượng Đông - Tây (East-West Traffic):</strong> Luồng dữ liệu giao tiếp nội bộ giữa các máy chủ, rack và pod trong cùng Data Center (ví dụ: máy chủ Web truy vấn cụm CSDL, đồng bộ dữ liệu sao lưu, truyền thông điệp giữa các Microservices). Trong kiến trúc đám mây hiện đại, lưu lượng East-West chiếm tới hơn 75% tổng băng thông."
                  ]
                },
                {
                  type: "paragraph",
                  text: "Ở cấp độ rack, bộ chuyển mạch gắn đỉnh tủ <strong>ToR (Top-of-Rack Switch)</strong> kết nối toàn bộ máy chủ trong tủ thông qua các card mạng đa cổng (Multi-port NICs) kết hợp kỹ thuật <em>Link Aggregation</em> để nhân bội băng thông (ví dụ gộp 10 đường 10Gbps thành 1 đường 100Gbps)."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch2-s2-topologies",
          number: "2",
          title: "Các Tô-pô Mạng: Fat Tree, Leaf-Spine & Super-Spine",
          parts: [
            {
              id: "cloud-ch2-s2-topologies-p1",
              label: "b",
              title: "Từ mô hình cây truyền thống đến kiến trúc Spine-and-Leaf",
              content: [
                {
                  type: "table",
                  headers: ["Mô hình", "Cấu trúc & Đặc tính", "Đánh giá Khả năng Chịu lỗi (Fault Tolerance)"],
                  rows: [
                    [
                      "Fat Tree (Cây phân cấp)",
                      "Phân cấp theo hình chóp: Core ➔ Aggregation ➔ Edge. Băng thông thu hẹp dần khi đi lên đỉnh.",
                      "Dễ tắc nghẽn (bottleneck) ở các liên kết tầng Core. Khi switch lõi hỏng, toàn bộ phân đoạn mạng bị tê liệt."
                    ],
                    [
                      "Leaf-Spine (Lá - Xương sống)",
                      "Hai tầng phẳng: Mọi switch Leaf (gắn với từng rack) đều kết nối trực tiếp đến tất cả switch Spine.",
                      "Độ trễ cố định (chính xác 2 bước nhảy). Nếu một switch Spine hỏng, lưu lượng tự động định tuyến qua các Spine còn lại, không điểm nghẽn."
                    ],
                    [
                      "Super-Spine",
                      "Bổ sung thêm tầng Super-Spine trên đỉnh để liên kết các cụm PoD độc lập lại với nhau thành Data Center khổng lồ.",
                      "Mở rộng quy mô cực lớn (Hyperscale), hỗ trợ hàng trăm nghìn máy chủ với tính dự phòng đa tầng."
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
       MỤC III: CÔNG NGHỆ ẢO HÓA
       ============================ */
    {
      id: "cloud-ch2-s3",
      roman: "III",
      title: "3 Hình thái Công nghệ Ảo hóa (Virtualization Technologies)",
      subsections: [
        {
          id: "cloud-ch2-s3-types",
          number: "1",
          title: "Software Emulation, Para-virtualization & Full Virtualization",
          parts: [
            {
              id: "cloud-ch2-s3-types-p1",
              label: "a",
              title: "So sánh 3 công nghệ ảo hóa cốt lõi",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>1. Software Emulation (Giả lập phần mềm):</strong> Một chương trình phần mềm (Emulator) giả lập toàn bộ tập lệnh và kiến trúc phần cứng của máy tính mục tiêu trên nền một hệ điều hành chủ khác. Emulator giải mã và thực thi tuần tự từng chỉ lệnh máy. <em>Ví dụ:</em> BlueStacks (chạy Android trên Windows/PC), WINE, QEMU software-mode. <em>Ưu:</em> Cực kỳ linh hoạt, chạy được hệ điều hành khác kiến trúc CPU. <em>Nhược:</em> Tốc độ rất chậm do gánh nặng mô phỏng chỉ lệnh (Overhead cao).",
                    "<strong>2. Para-virtualization (Ảo hóa bán phần):</strong> Nhiều hệ điều hành khách (Guest OS) cùng chia sẻ phần cứng dưới sự điều phối của Hypervisor. Để đạt tốc độ xử lý phần cứng trực tiếp (Near-native performance), <strong>mã nguồn của Guest OS bắt buộc phải được sửa đổi</strong> để thay thế các chỉ lệnh nhạy cảm bằng các lệnh gọi hypercall trực tiếp tới Hypervisor. <em>Ví dụ:</em> Xen phiên bản cũ.",
                    "<strong>3. Full Virtualization (Ảo hóa toàn phần):</strong> Hệ điều hành khách (Guest OS) được cách ly hoàn toàn và <strong>không cần phải chỉnh sửa mã nguồn</strong>. Nhờ sự hỗ trợ từ các tập lệnh phần cứng của CPU hiện đại (Intel VT-x, AMD-V), Hypervisor bẫy và xử lý các thao tác đặc quyền một cách trong suốt. Đây chính là công nghệ nền tảng thống trị toàn bộ máy ảo VM trong các đám mây công cộng (AWS EC2, Google Cloud Compute) hiện nay."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC IV: HYPERVISOR & MIGRATION
       ============================ */
    {
      id: "cloud-ch2-s4",
      roman: "IV",
      title: "Cơ chế Hypervisor & 3 Giai đoạn Di chuyển Máy ảo (VM Migration)",
      subsections: [
        {
          id: "cloud-ch2-s4-hypervisor",
          number: "1",
          title: "3 Mức Đặc quyền Phần cứng & Ảo hóa I/O",
          parts: [
            {
              id: "cloud-ch2-s4-hypervisor-p1",
              label: "a",
              title: "Phân cấp đặc quyền và bản chất số của VM",
              content: [
                {
                  type: "paragraph",
                  text: "Trong kiến trúc ảo hóa phần cứng, mô hình 2 vòng đặc quyền truyền thống (User mode và Kernel mode) được nâng cấp thành mô hình 3 mức phân định nghiêm ngặt:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Hypervisor Mode (Root Ring -1):</strong> Mức đặc quyền cao nhất và được tin cậy tuyệt đối, có quyền truy cập trực tiếp mọi tài nguyên phần cứng vật lý và quản lý việc cấp phát bộ nhớ, chu kỳ CPU cho các máy ảo.",
                    "<strong>Kernel Mode (Ring 0):</strong> Mức đặc quyền của nhân hệ điều hành khách (Guest OS Kernel). Bị giới hạn trong không gian tài nguyên được Hypervisor cấp phát, không thể can thiệp sang máy ảo khác.",
                    "<strong>User Mode (Ring 3):</strong> Mức thực thi của các ứng dụng người dùng chạy bên trong máy ảo."
                  ]
                },
                {
                  type: "paragraph",
                  text: "<strong>Bản chất đối tượng số của VM:</strong> Máy ảo VM thực chất là một đối tượng số (Digital Object) được biểu diễn bằng metadata, file cấu hình và vùng nhớ RAM ảo do Hypervisor lưu giữ. Do đó, VM có thể được nhân bản, lưu ảnh chụp (snapshot), di chuyển qua mạng và cân bằng tải giữa các máy chủ vật lý khác nhau một cách dễ dàng."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch2-s4-migration",
          number: "2",
          title: "Quy trình 3 Giai đoạn Di chuyển Máy ảo (Live VM Migration)",
          parts: [
            {
              id: "cloud-ch2-s4-migration-p1",
              label: "b",
              title: "Pre-copy ➔ Stop-and-copy ➔ Post-copy",
              content: [
                {
                  type: "paragraph",
                  text: "Di chuyển máy ảo trực tiếp (Live Migration) cho phép chuyển một máy ảo đang hoạt động từ máy chủ vật lý A sang máy chủ vật lý B mà người dùng cuối gần như không cảm nhận thấy sự gián đoạn dịch vụ. Quá trình diễn ra qua 3 bước kinh điển:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>1. Pre-copy (Sao chép trước):</strong> Toàn bộ trang bộ nhớ RAM của VM được sao chép sang máy chủ đích qua đường mạng Data Center tốc độ cao. Trong lúc sao chép, <em>VM nguồn vẫn tiếp tục chạy và phục vụ người dùng bình thường</em>. Những trang RAM bị ghi đè mới (dirty pages) sẽ được ghi nhận lại để sao chép tiếp trong các vòng lặp kế tiếp.",
                    "<strong>2. Stop-and-copy (Dừng và sao chép):</strong> Khi lượng trang RAM thay đổi còn lại đủ nhỏ, Hypervisor sẽ <em>tạm dừng VM trong vài mili-giây</em>. Sao chép nốt những trang RAM bẩn cuối cùng kèm trạng thái thanh ghi CPU (CPU registers, Program Counter) sang máy chủ đích.",
                    "<strong>3. Post-copy (Khôi phục và chạy tiếp):</strong> Hypervisor tại máy chủ đích kích hoạt (unsuspend) VM. Máy ảo tiếp tục chạy liền mạch trên hạ tầng mới, toàn bộ tài nguyên ở máy chủ nguồn được giải phóng an toàn."
                  ]
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
      id: "cloud-ch2-s5",
      roman: "V",
      title: "Tổng kết Chương 2 & Bảng Thuật ngữ Trọng tâm",
      subsections: [
        {
          id: "cloud-ch2-s5-summary",
          number: "1",
          title: "Bảng từ khóa & Điểm cốt lõi cần nhớ",
          parts: [
            {
              id: "cloud-ch2-s5-summary-p1",
              label: "a",
              title: "Thuật ngữ kỹ thuật then chốt",
              content: [
                {
                  type: "table",
                  headers: ["Thuật ngữ", "Khái niệm tiếng Anh", "Bản chất kỹ thuật"],
                  rows: [
                    ["Rack & PoD", "Rack & Point of Delivery", "Đơn vị đóng gói phần cứng vật lý và phân phối nguồn/làm mát."],
                    ["Lối đi nóng/lạnh", "Hot/Cold Aisle Containment", "Phương pháp tách biệt khí mát đầu vào và khí nóng xả ra."],
                    ["DC không đèn", "Lights-Out Data Center", "Trung tâm dữ liệu vận hành tự động từ xa không người trực tiếp."],
                    ["ToR Switch", "Top-of-Rack Switch", "Bộ chuyển mạch đặt trên nóc tủ rack nối server với toàn mạng."],
                    ["Lưu lượng Đông-Tây", "East-West Traffic", "Lưu lượng trao đổi nội bộ giữa các máy chủ bên trong Data Center."],
                    ["Leaf-Spine", "Leaf-Spine Topology", "Kiến trúc mạng 2 tầng kết nối đối xứng chịu lỗi và không nghẽn."],
                    ["Ảo hóa toàn phần", "Full Virtualization", "Chạy Guest OS nguyên bản không cần chỉnh sửa mã nguồn."],
                    ["Ảo hóa bán phần", "Para-virtualization", "Bắt buộc sửa đổi mã nguồn Guest OS để gọi lệnh hypercall."],
                    ["Di chuyển máy ảo", "VM Live Migration", "Quy trình 3 bước: Pre-copy ➔ Stop-and-copy ➔ Post-copy."]
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
