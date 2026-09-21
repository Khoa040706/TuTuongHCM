/* ============================================================
   GIÁO TRÌNH ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)
   Chương 9: PART 09: VIRTUALIZATION (Công nghệ Ảo hóa & Điện toán Xanh)
   Phiên bản Redesign Chuẩn StudyMaster: Bento Grid • Micro-content • Interactive Simulators
   Biên tập chuẩn học thuật từ trọn bộ slide bài giảng chính khóa (Mục I đến VII)
   ============================================================ */

export const cloudComputingChapter9 = {
  id: "cloud-ch9",
  title: "Chương 9",
  subtitle: "Virtualization (Công nghệ Ảo hóa & Điện toán Xanh)",
  sections: [
    /* ============================
       MỤC ★: OVERVIEW CHƯƠNG
       ============================ */
    {
      id: "cloud-ch9-s0",
      roman: "★",
      title: "Tổng quan chương: Bản đồ Kiến trúc Ảo hóa & Điện toán Xanh",
      subsections: [
        {
          id: "cloud-ch9-s0-overview",
          number: "0",
          title: "Bản đồ kiến thức & Radar kỹ năng Chương 9",
          parts: [
            {
              id: "cloud-ch9-s0-p1",
              label: "★",
              title: "Tổng quan tri thức toàn chương",
              content: [
                {
                  type: "cloud-chapter-hero",
                  chapterId: "cloud-ch9"
                },
                {
                  type: "highlight",
                  text: "Chương 9 nghiên cứu toàn diện về công nghệ nền tảng cốt lõi của điện toán đám mây: Bản chất công nghệ Ảo hóa (Virtualization), cơ chế điều phối Bộ nhớ ảo (Virtual Memory với Paging & Swapping), nguyên lý Điện toán xanh (Green Computing), các giải pháp ảo hóa máy chủ doanh nghiệp hàng đầu (Microsoft Hyper-V, VMware ESXi Type 1 Hypervisor với vMotion/DRS/vCenter), các hình thái ảo hóa máy trạm & ứng dụng (Parallels Desktop, Microsoft VDI, Microsoft App-V, VMware View) và mạng riêng ảo bảo mật VPN trên Windows."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC I: TỔNG QUAN VỀ VIRTUALIZATION
       ============================ */
    {
      id: "cloud-ch9-s1",
      roman: "I",
      title: "Tổng quan về Virtualization",
      subsections: [
        {
          id: "cloud-ch9-s1-1-definition",
          number: "1.1",
          title: "Định nghĩa Virtualization",
          parts: [
            {
              id: "cloud-ch9-s1-1-p1",
              label: "1.1",
              title: "Bản chất Công nghệ Ảo hóa",
              content: [
                {
                  type: "definition",
                  term: "Virtualization (Công nghệ Ảo hóa)",
                  meaning: "Quá trình tạo ra phiên bản logic (ảo) của các tài nguyên công nghệ thông tin như hệ điều hành, máy chủ, thiết bị lưu trữ hoặc mạng, tách rời phần mềm khỏi giới hạn vật lý của phần cứng bên dưới."
                },
                {
                  type: "paragraph",
                  text: "Trong mô hình truyền thống (Bare-Metal), mỗi hệ điều hành gắn chặt với một cỗ máy vật lý duy nhất. Ảo hóa phá vỡ sự gắn kết này bằng cách chèn một tầng trừu tượng (Hypervisor) ở giữa, cho phép một cỗ máy vật lý chạy đồng thời nhiều môi trường độc lập."
                },
                {
                  type: "callout",
                  title: "💡 Khẩu quyết học thuật",
                  text: "Ảo hóa không phải là giả lập (emulation) mà là <strong>phân tách (abstraction) và chia sẻ hiệu năng phần cứng vật lý</strong> thành nhiều thực thể độc lập an toàn."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s1-2-benefits",
          number: "1.2",
          title: "Lợi ích chính của Virtualization",
          parts: [
            {
              id: "cloud-ch9-s1-2-p1",
              label: "1.2",
              title: "4 Giá Trị Đột Phá Cho Doanh Nghiệp",
              content: [
                {
                  type: "paragraph",
                  text: "Ảo hóa mang lại 4 lợi ích kinh tế - kỹ thuật mang tính sống còn cho hạ tầng trung tâm dữ liệu hiện đại:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Tối ưu hóa tài nguyên phần cứng (Resource Utilization):</strong> Đưa mức sử dụng CPU từ 10-15% (máy chủ vật lý truyền thống) lên 70-80% nhờ chạy nhiều máy ảo trên cùng một phần cứng.",
                    "<strong>Tiết kiệm chi phí đầu tư & vận hành (CapEx & OpEx):</strong> Giảm thiểu số lượng máy chủ vật lý, từ đó cắt giảm chi phí mua sắm, diện tích phòng máy, điện năng tiêu thụ và chi phí làm mát.",
                    "<strong>Độ linh hoạt & Tốc độ triển khai (Agility & Provisioning):</strong> Khởi tạo một máy chủ mới (VM) chỉ trong vài phút từ file template hoặc bản sao chép, thay vì mất nhiều tuần đặt hàng và lắp ráp phần cứng.",
                    "<strong>Khôi phục sau thảm họa & Tính sẵn sàng cao (High Availability & DR):</strong> Máy ảo được lưu dưới dạng các tệp tin hình ảnh đĩa (VHDX, VMDK), dễ dàng sao lưu, nhân bản và di chuyển tức thời."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s1-3-types",
          number: "1.3",
          title: "Các loại Virtualization trong slide",
          parts: [
            {
              id: "cloud-ch9-s1-3-p1",
              label: "1.3",
              title: "3 Hình Thái Ảo Hóa Cơ Bản & Micro-Quiz",
              content: [
                {
                  type: "paragraph",
                  text: "Giáo trình phân loại công nghệ ảo hóa thành 3 trụ cột cơ bản chi phối toàn bộ hạ tầng IT:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>1. Server Virtualization (Ảo hóa máy chủ):</strong> Phân chia một máy chủ vật lý mạnh thành nhiều máy ảo (VM) độc lập, mỗi VM có HĐH và ứng dụng riêng (Hyper-V, VMware ESXi).",
                    "<strong>2. Desktop Virtualization (Ảo hóa máy trạm):</strong> Tách biệt môi trường máy tính để bàn của người dùng khỏi thiết bị vật lý, cho phép truy cập desktop từ xa qua mạng (VDI, VMware View).",
                    "<strong>3. Storage Virtualization (Ảo hóa lưu trữ):</strong> Gom cụm nhiều thiết bị lưu trữ vật lý khác nhau (DAS, NAS, SAN) thành một vùng lưu trữ logic duy nhất (Storage Pool) để quản trị tập trung."
                  ]
                },
                {
                  type: "micro-quiz",
                  question: "Bản chất cốt lõi của công nghệ Ảo hóa (Virtualization) trong điện toán đám mây là gì?",
                  options: [
                    "Tăng tốc độ xung nhịp CPU của máy chủ vật lý lên gấp đôi để xử lý nhiều tác vụ",
                    "Tách rời phần mềm và hệ điều hành khỏi giới hạn của phần cứng vật lý bên dưới",
                    "Thay thế toàn bộ ổ cứng cơ học HDD bằng ổ đĩa thể rắn SSD có tốc độ truy xuất cao",
                    "Nén dung lượng dữ liệu của hệ điều hành để lưu trữ nhiều bản sao lưu trên đám mây"
                  ],
                  answerIndex: 1,
                  explanation: "Ảo hóa là kỹ thuật tách rời phần mềm, HĐH và ứng dụng khỏi sự ràng buộc của phần cứng vật lý, tạo ra các tài nguyên logic dùng chung an toàn và linh hoạt.",
                  hint: "Hãy chú ý đến mối quan hệ giữa phần mềm (software/OS) và phần cứng vật lý (physical hardware)."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s1-4-objectives",
          number: "1.4",
          title: "Mục tiêu học tập của phần Virtualization",
          parts: [
            {
              id: "cloud-ch9-s1-4-p1",
              label: "1.4",
              title: "Chuẩn Đầu Ra & Bản Đồ Kỹ Năng",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Nắm vững cơ chế trừu tượng hóa:</strong> Phân biệt rõ sự khác nhau giữa máy ảo (VM), bộ giám sát (Hypervisor) và máy chủ vật lý (Host).",
                    "<strong>Làm chủ nguyên lý quản lý bộ nhớ:</strong> Hiểu thấu đáo cách hệ điều hành phối hợp giữa RAM vật lý và bộ nhớ ảo trên đĩa qua cơ chế Paging & Swapping.",
                    "<strong>Đánh giá kiến trúc doanh nghiệp:</strong> So sánh sâu sắc giữa Microsoft Hyper-V và VMware ESXi Type 1 Hypervisor.",
                    "<strong>Ứng dụng máy trạm & bảo mật:</strong> Nắm vững mô hình triển khai VDI, App-V và thiết lập mạng riêng ảo VPN an toàn."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC II: VIRTUAL MEMORY – BỘ NHỚ ẢO
       ============================ */
    {
      id: "cloud-ch9-s2",
      roman: "II",
      title: "Virtual Memory – Bộ nhớ Ảo",
      subsections: [
        {
          id: "cloud-ch9-s2-1-definition",
          number: "2.1",
          title: "Định nghĩa Virtual Memory",
          parts: [
            {
              id: "cloud-ch9-s2-1-p1",
              label: "2.1",
              title: "Khái niệm Bộ nhớ Ảo",
              content: [
                {
                  type: "definition",
                  term: "Virtual Memory (Bộ nhớ ảo)",
                  meaning: "Kỹ thuật quản lý bộ nhớ của hệ điều hành cho phép sử dụng một phần không gian lưu trữ trên ổ đĩa cứng (Hard Disk/SSD) như một phần mở rộng của bộ nhớ truy xuất ngẫu nhiên (RAM) vật lý."
                },
                {
                  type: "paragraph",
                  text: "Bộ nhớ ảo tạo ra ảo tưởng cho các tiến trình rằng hệ thống đang sở hữu một không gian bộ nhớ liền mạch khổng lồ, ngay cả khi dung lượng RAM thực tế nhỏ hơn rất nhiều so với tổng nhu cầu của các ứng dụng đang chạy."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s2-2-mechanism",
          number: "2.2",
          title: "Nguyên lý hoạt động & Sơ đồ điều phối",
          parts: [
            {
              id: "cloud-ch9-s2-2-p1",
              label: "2.2",
              title: "Cơ Chế Ánh Xạ Địa Chỉ (MMU & Page Table)",
              content: [
                {
                  type: "paragraph",
                  text: "Bộ xử lý phần cứng Memory Management Unit (MMU) kết hợp cùng Bảng trang (Page Table) của hệ điều hành để ánh xạ giữa Địa chỉ ảo (Virtual Address) của tiến trình và Địa chỉ vật lý (Physical Address):"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Virtual Address Space:</strong> Mỗi tiến trình được cấp một không gian địa chỉ ảo độc lập, không thể đọc/ghi đè sang không gian của tiến trình khác.",
                    "<strong>Page Table Lookup:</strong> Khi CPU truy xuất một địa chỉ, MMU tra cứu Page Table để tìm khung trang (Page Frame) tương ứng trong RAM.",
                    "<strong>Page Fault Interrupt:</strong> Nếu trang nhớ chưa có trong RAM (đang nằm trên ổ đĩa), CPU kích hoạt ngắt Page Fault để HĐH nạp trang từ đĩa vào RAM."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s2-3-components",
          number: "2.3",
          title: "Thành phần và cơ chế quan trọng",
          parts: [
            {
              id: "cloud-ch9-s2-3-p1",
              label: "2.3",
              title: "Memory Pages, Swapping & Bộ Mô Phỏng Trực Quan",
              content: [
                {
                  type: "paragraph",
                  text: "Hai cơ chế then chốt điều phối bộ nhớ ảo là chia trang (Paging) và hoán chuyển trang (Swapping):"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Memory Pages (Trang nhớ):</strong> Không gian nhớ được chia thành các khối có kích thước cố định bằng nhau (thường là 4KB trên kiến trúc x86/x64).",
                    "<strong>Swapping (Tráo đổi trang):</strong> Quá trình chuyển các trang nhớ ít được truy xuất từ RAM vật lý sang tệp lưu trữ tạm trên ổ đĩa (Pagefile.sys trên Windows hoặc Swap Partition trên Linux)."
                  ]
                },
                {
                  type: "virtual-memory-swapping"
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s2-4-advantages",
          number: "2.4",
          title: "Lợi ích / ưu điểm của Virtual Memory",
          parts: [
            {
              id: "cloud-ch9-s2-4-p1",
              label: "2.4",
              title: "3 Lợi Điểm Vượt Trội Của Bộ Nhớ Ảo",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Chạy ứng dụng vượt kích thước RAM vật lý:</strong> Các chương trình đồ họa, xử lý video hoặc CSDL lớn có thể thực thi trơn tru ngay cả khi kích thước dữ liệu vượt quá dung lượng RAM của máy.",
                    "<strong>Tăng mức độ đa chương trình (Multitasking):</strong> Cho phép nhiều ứng dụng cùng nạp vào bộ nhớ và chạy song song mà không sợ hết RAM đột ngột.",
                    "<strong>Bảo vệ và cách ly bộ nhớ (Memory Isolation):</strong> Tiến trình bị cô lập hoàn toàn trong không gian địa chỉ riêng, ngăn chặn lỗi crash dây chuyền hoặc tấn công can thiệp dữ liệu."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s2-5-disadvantages",
          number: "2.5",
          title: "Nhược điểm của Virtual Memory",
          parts: [
            {
              id: "cloud-ch9-s2-5-p1",
              label: "2.5",
              title: "Độ Trễ Ổ Đĩa, Hiện Tượng Thrashing & Micro-Quiz",
              content: [
                {
                  type: "paragraph",
                  text: "Mặc dù giải quyết bài toán thiếu bộ nhớ, Virtual Memory tồn tại hai nhược điểm cố hữu do chênh lệch tốc độ phần cứng:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Tốc độ truy xuất chậm hơn nhiều so với RAM:</strong> Tốc độ của ổ cứng SSD (khoảng vài GB/s) và đặc biệt là HDD (khoảng 150 MB/s) chậm hơn hàng chục đến hàng trăm lần so với băng thông RAM DDR4/DDR5 (từ 25 - 60 GB/s).",
                    "<strong>Hiện tượng Thrashing (Nghẽn tráo đổi liên tục):</strong> Xảy ra khi RAM vật lý quá thiếu, hệ điều hành dành hầu hết chu kỳ xử lý để đọc/ghi các trang nhớ ra vào ổ đĩa thay vì thực thi lệnh ứng dụng, khiến hệ thống bị đơ (freeze) hoàn toàn."
                  ]
                },
                {
                  type: "micro-quiz",
                  question: "Hiện tượng Thrashing (nghẽn tráo đổi trang) trong Bộ nhớ ảo xảy ra khi nào?",
                  options: [
                    "Khi hệ điều hành dành phần lớn thời gian swap trang thay vì thực thi lệnh ứng dụng",
                    "Khi dung lượng RAM vật lý vượt quá giới hạn hỗ trợ tối đa của bo mạch chủ máy tính",
                    "Khi các tập tin thực thi của phần mềm bị nhiễm virus dẫn đến tràn bộ nhớ đệm CPU",
                    "Khi tốc độ đọc ghi của ổ đĩa SSD vượt quá băng thông truyền tải của vi xử lý RAM"
                  ],
                  answerIndex: 0,
                  explanation: "Thrashing xảy ra khi RAM thiếu trầm trọng, HĐH liên tục tráo đổi trang (swapping) giữa RAM và đĩa cứng khiến CPU bị nghẽn I/O và hiệu năng sụt giảm nghiêm trọng.",
                  hint: "Hãy chú ý đến việc CPU bị lãng phí thời gian vào hành động đọc ghi trang nhớ liên tục giữa RAM và đĩa."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC III: GREEN COMPUTING
       ============================ */
    {
      id: "cloud-ch9-s3",
      roman: "III",
      title: "Green Computing",
      subsections: [
        {
          id: "cloud-ch9-s3-1-definition",
          number: "3.1",
          title: "Định nghĩa Green Computing",
          parts: [
            {
              id: "cloud-ch9-s3-1-p1",
              label: "3.1",
              title: "Điện Toán Thân Thiện Với Môi Trường",
              content: [
                {
                  type: "definition",
                  term: "Green Computing (Điện toán Xanh)",
                  meaning: "Nghiên cứu và thực hành sản xuất, thiết kế, sử dụng và tiêu hủy các thiết bị máy tính, máy chủ và hệ thống liên quan sao cho đạt hiệu quả năng lượng cao nhất và giảm thiểu tác động tiêu cực đến môi trường tự nhiên."
                },
                {
                  type: "paragraph",
                  text: "Trong bối cảnh các trung tâm dữ liệu toàn cầu tiêu thụ khoảng 1-2% tổng sản lượng điện thế giới, Green Computing không chỉ là trách nhiệm xã hội mà còn là giải pháp sống còn để hạ thấp chi phí vận hành (OpEx) của các nhà cung cấp dịch vụ đám mây."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s3-2-goals",
          number: "3.2",
          title: "Mục tiêu của Green Computing",
          parts: [
            {
              id: "cloud-ch9-s3-2-p1",
              label: "3.2",
              title: "3 Trụ Cột Sinh Thái Cốt Lõi",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>1. Tiết kiệm năng lượng (Energy saving):</strong> Cắt giảm điện năng tiêu thụ trên từng vi xử lý, thiết bị mạng, hệ thống lưu trữ và toàn bộ hệ thống điều hòa làm mát (HVAC).",
                    "<strong>2. Giảm phát thải khí nhà kính (Reduce carbon emissions):</strong> Hạn chế lượng khí thải CO2 gián tiếp thông qua việc sử dụng năng lượng tái tạo (nắng, gió, thủy điện) và giảm công suất tiêu thụ.",
                    "<strong>3. Tái sử dụng & Giảm rác thải điện tử (Reuse, recycle & reduce e-waste):</strong> Kéo dài tuổi thọ thiết bị phần cứng, tận dụng lại linh kiện cũ và quy chuẩn hóa quy trình tiêu hủy an toàn."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s3-3-solutions",
          number: "3.3",
          title: "Giải pháp Green Computing trong slide",
          parts: [
            {
              id: "cloud-ch9-s3-3-p1",
              label: "3.3",
              title: "Các Giải Pháp Kỹ Thuật Triển Khai Thực Tế",
              content: [
                {
                  type: "paragraph",
                  text: "Các kỹ sư trung tâm dữ liệu áp dụng đồng bộ các giải pháp công nghệ cao để hiện thực hóa Điện toán xanh:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Tối ưu hóa thiết kế luồng nhiệt:</strong> Sử dụng hệ thống Lối đi Nóng / Lối đi Lạnh (Hot/Cold Aisle Containment) và làm mát bằng chất lỏng (Liquid Cooling) để hạ chỉ số PUE (Power Usage Effectiveness) tiệm cận mức lý tưởng 1.0.",
                    "<strong>Điều chế điện áp và tần số linh hoạt (DVFS):</strong> Tự động giảm xung nhịp CPU khi máy chủ chạy tải thấp vào ban đêm.",
                    "<strong>Chế độ ngủ thông minh (Sleep & Standby States):</strong> Chuyển các khối máy chủ nhàn rỗi sang trạng thái ngủ sâu để triệt tiêu điện năng hao phí."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s3-4-virtualization-link",
          number: "3.4",
          title: "Liên hệ với Virtualization",
          parts: [
            {
              id: "cloud-ch9-s3-4-p1",
              label: "3.4",
              title: "Đòn Bẩy Ảo Hóa & Micro-Quiz",
              content: [
                {
                  type: "paragraph",
                  text: "Ảo hóa là công cụ kỹ thuật mạnh mẽ nhất thúc đẩy Điện toán xanh thông qua cơ chế hợp nhất máy chủ (Server Consolidation):"
                },
                {
                  type: "callout",
                  title: "🌱 Hiệu ứng Đòn bẩy Xanh",
                  text: "Gom 100 máy chủ vật lý đang hoạt động ở mức 10% tải thành 15 máy chủ chạy ở mức 70% tải giúp <strong>giảm ngay lập tức 85 máy chủ vật lý</strong>. Điều này trực tiếp cắt giảm hàng ngàn kWh điện chạy máy, hàng ngàn kWh điện làm mát và giảm 85 cỗ máy thải ra môi trường thành rác e-waste khi hết khấu hao."
                },
                {
                  type: "micro-quiz",
                  question: "Đâu là đóng góp trực tiếp lớn nhất của công nghệ Ảo hóa đối với Điện toán Xanh?",
                  options: [
                    "Tự động tắt nguồn máy tính của nhân viên văn phòng sau giờ hành chính mỗi ngày",
                    "Hợp nhất nhiều máy ảo lên ít máy chủ vật lý để giảm điện năng và nhiệt lượng",
                    "Loại bỏ hoàn toàn nhu cầu sử dụng dây cáp mạng đồng truyền thống trong Data Center",
                    "Chuyển đổi toàn bộ mã nguồn ứng dụng sang các ngôn ngữ thông dịch tiết kiệm điện"
                  ],
                  answerIndex: 1,
                  explanation: "Server Consolidation (hợp nhất máy chủ) cho phép chạy hàng chục máy ảo trên một vài máy chủ vật lý, nâng hiệu suất từ 15% lên 70-80%, giảm số server vật lý cần chạy và làm mát.",
                  hint: "Nghĩ về kỹ thuật gom nhiều máy ảo lại để giảm thiểu số lượng thiết bị phần cứng cắm điện thực tế."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC IV: SERVER VIRTUALIZATION VÀ MICROSOFT HYPER-V
       ============================ */
    {
      id: "cloud-ch9-s4",
      roman: "IV",
      title: "Server Virtualization và Microsoft Hyper-V",
      subsections: [
        {
          id: "cloud-ch9-s4-1-server-virt",
          number: "4.1",
          title: "Server Virtualization",
          parts: [
            {
              id: "cloud-ch9-s4-1-p1",
              label: "4.1",
              title: "Khái Niệm & Sự Cần Thiết",
              content: [
                {
                  type: "paragraph",
                  text: "Server Virtualization là công nghệ che giấu tài nguyên máy chủ vật lý (bao gồm số lượng và danh tính của từng bộ vi xử lý, bộ nhớ và ổ đĩa) khỏi người dùng máy chủ, thay vào đó tạo ra các môi trường máy chủ ảo độc lập."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Loại bỏ tình trạng Sprawl:</strong> Chấm dứt hiện tượng bùng nổ số lượng máy chủ vật lý chuyên dụng (1 server chỉ chạy 1 ứng dụng như Web, Mail hoặc DB).",
                    "<strong>Độc lập phần cứng:</strong> Hệ điều hành của máy ảo không bị trói buộc vào driver cụ thể của bo mạch chủ, card mạng hay ổ đĩa vật lý."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s4-2-hyperv-intro",
          number: "4.2",
          title: "Microsoft Hyper-V",
          parts: [
            {
              id: "cloud-ch9-s4-2-p1",
              label: "4.2",
              title: "Kiến Trúc Microkernelized Hypervisor",
              content: [
                {
                  type: "definition",
                  term: "Microsoft Hyper-V",
                  meaning: "Giải pháp ảo hóa máy chủ cấp doanh nghiệp của Microsoft được tích hợp sâu trong hệ điều hành Windows Server, cho phép tạo và quản lý máy ảo x86/x64 với độ trễ thấp và bảo mật cao."
                },
                {
                  type: "paragraph",
                  text: "Kiến trúc Hyper-V phân định rõ ràng 2 phân vùng (Partition):"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Parent Partition:</strong> Phân vùng cha chạy Windows Server, giữ quyền quản lý và điều khiển ngăn xếp phần cứng thông qua Virtualization Service Provider (VSP).",
                    "<strong>Child Partitions:</strong> Các phân vùng con chứa hệ điều hành khách (Guest OS), truy cập tài nguyên phần cứng thông qua Virtualization Service Client (VSC) và Bus bộ nhớ chia sẻ VMBus."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s4-3-benefits",
          number: "4.3",
          title: "Lợi ích của Hyper-V",
          parts: [
            {
              id: "cloud-ch9-s4-3-p1",
              label: "4.3",
              title: "3 Lợi Ích Cốt Lõi Khi Vận Hành Hyper-V",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>1. Server Consolidation (Hợp nhất máy chủ):</strong> Gom nhiều dịch vụ của công ty lên một cụm máy chủ Hyper-V, tiết kiệm tối đa ngân sách mua sắm máy chủ.",
                    "<strong>2. Tối ưu hiệu suất vi xử lý CPU:</strong> Cấp phát vCPU động và cân bằng luồng chỉ mục giúp khai thác triệt để sức mạnh của các CPU đa nhân hiện đại.",
                    "<strong>3. Cải thiện cân bằng tải và chịu lỗi (Load Balancing & Failover):</strong> Hỗ trợ kết nối cụm Failover Cluster, tự động khởi động lại VM trên node khác khi có sự cố phần cứng."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s4-4-features",
          number: "4.4",
          title: "Tính năng của Hyper-V",
          parts: [
            {
              id: "cloud-ch9-s4-4-p1",
              label: "4.4",
              title: "Các Tính Năng Cao Cấp Trong Windows Server",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Live Migration:</strong> Di chuyển máy ảo đang chạy giữa hai máy chủ Hyper-V mà không mất kết nối mạng và không làm gián đoạn người dùng.",
                    "<strong>Dynamic Memory:</strong> Tự động điều chỉnh dung lượng RAM cấp phát cho máy ảo theo nhu cầu tải thực tế tại từng thời điểm.",
                    "<strong>Hyper-V Replica:</strong> Cơ chế đồng bộ bản sao máy ảo sang trung tâm dữ liệu dự phòng từ xa qua đường truyền mạng IP để khắc phục thảm họa (Disaster Recovery).",
                    "<strong>Checkpoints / Snapshots:</strong> Đóng băng trạng thái máy ảo tại một thời điểm để dễ dàng rollback khi nâng cấp phần mềm gặp sự cố."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s4-5-applications",
          number: "4.5",
          title: "Ứng dụng thực tế của Hyper-V",
          parts: [
            {
              id: "cloud-ch9-s4-5-p1",
              label: "4.5",
              title: "Kịch Bản Ứng Dụng Doanh Nghiệp & Micro-Quiz",
              content: [
                {
                  type: "paragraph",
                  text: "Hyper-V là nền tảng cốt lõi được sử dụng trong các môi trường doanh nghiệp quy mô lớn:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Xây dựng Trung tâm Dữ liệu Ảo hóa (Software-Defined Data Center):</strong> Hợp nhất toàn bộ ứng dụng nội bộ ERP, CRM, Mail Exchange và File Server.",
                    "<strong>Môi trường Thử nghiệm & Phát triển (Dev/Test Labs):</strong> Tạo nhanh môi trường sandbox để kiểm thử phần mềm mà không lo ảnh hưởng hệ thống production.",
                    "<strong>Nền tảng của Microsoft Azure:</strong> Bản thân hạ tầng điện toán đám mây toàn cầu Azure được xây dựng trên nền tảng Hyper-V cải tiến."
                  ]
                },
                {
                  type: "micro-quiz",
                  question: "Lợi ích nổi bật nhất của kỹ thuật Server Consolidation bằng Microsoft Hyper-V là gì?",
                  options: [
                    "Tối ưu hóa tải phần cứng, nâng hiệu suất CPU từ 15% lên mức 70% trên ít máy chủ",
                    "Thay thế toàn bộ switch mạng vật lý bằng mạng vô tuyến tầm xa không dây bảo mật",
                    "Cho phép người dùng cuối tự ý can thiệp vào BIOS của máy chủ vật lý từ xa qua Web",
                    "Tự động tăng gấp đôi xung nhịp phần cứng vi xử lý mà không cần hệ thống làm mát"
                  ],
                  answerIndex: 0,
                  explanation: "Server Consolidation giúp gom các máy chủ vật lý sử dụng phân tán, nâng tỷ lệ sử dụng tài nguyên trung bình từ 10-15% lên 70-80%, tiết kiệm chi phí mua sắm và vận hành.",
                  hint: "Nghĩ về việc hợp nhất máy chủ giúp tăng tỷ lệ khai thác vi xử lý (CPU utilization) trên số lượng ít thiết bị hơn."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC V: VMWARE ESXi
       ============================ */
    {
      id: "cloud-ch9-s5",
      roman: "V",
      title: "VMware ESXi",
      subsections: [
        {
          id: "cloud-ch9-s5-1-definition",
          number: "5.1",
          title: "Định nghĩa VMware ESXi & Type 1 Hypervisor",
          parts: [
            {
              id: "cloud-ch9-s5-1-p1",
              label: "5.1",
              title: "Chuẩn Mực Bare-Metal Hypervisor",
              content: [
                {
                  type: "definition",
                  term: "VMware ESXi",
                  meaning: "Hệ điều hành ảo hóa máy chủ Bare-Metal (Type 1 Hypervisor) cài đặt trực tiếp lên phần cứng máy chủ mà không cần thông qua hệ điều hành nền, kiểm soát trực tiếp CPU, RAM và thiết bị I/O."
                },
                {
                  type: "paragraph",
                  text: "So sánh hai kiến trúc Hypervisor kinh điển trong thi cử và thực tế:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Type 1 (Bare-Metal):</strong> ESXi, Hyper-V, KVM — Chạy trực tiếp trên phần cứng. Ưu điểm: Hiệu năng tiệm cận 100% phần cứng, độ trễ cực thấp, độ bảo mật cao do không có lỗ hổng của HĐH chủ.",
                    "<strong>Type 2 (Hosted):</strong> VMware Workstation, VirtualBox, Parallels — Chạy trên một HĐH chủ (Windows/macOS/Linux). Phù hợp cho máy tính cá nhân để học tập và lập trình."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s5-2-benefits",
          number: "5.2",
          title: "Lợi ích của VMware ESXi",
          parts: [
            {
              id: "cloud-ch9-s5-2-p1",
              label: "5.2",
              title: "Hiệu Năng & Độ Tin Cậy Tiêu Chuẩn Viễn Thông",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Kích thước siêu gọn nhẹ (Ultra-compact footprint):</strong> Nhân ESXi chỉ khoảng 150MB, giảm thiểu bề mặt tấn công bảo mật và tăng tốc thời gian khởi động máy chủ.",
                    "<strong>Độ tin cậy chuẩn doanh nghiệp 99.999%:</strong> Được thiết kế cho các hệ thống tài chính, ngân hàng và viễn thông chạy liên tục nhiều năm không cần khởi động lại.",
                    "<strong>Hỗ trợ phần cứng đa dạng:</strong> Tương thích với các dòng máy chủ doanh nghiệp hàng đầu từ Dell EMC, HPE, Lenovo, Cisco UCS."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s5-3-features",
          number: "5.3",
          title: "Tính năng chính: vSphere Hypervisor, vMotion & DRS",
          parts: [
            {
              id: "cloud-ch9-s5-3-p1",
              label: "5.3",
              title: "Bộ Ba Đột Phá Công Nghệ & Mô Phỏng vMotion",
              content: [
                {
                  type: "paragraph",
                  text: "VMware dẫn đầu thị trường ảo hóa nhờ bộ ba công nghệ độc quyền mang tính cách mạng:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>1. vSphere Hypervisor:</strong> Nền tảng điều phối ảo hóa cực kỳ mạnh mẽ, quản lý vi xử lý ảo hóa vCPU và bộ nhớ RAM ảo với hiệu năng vượt trội.",
                    "<strong>2. VMware vMotion (Live Migration):</strong> Cho phép di chuyển toàn bộ máy ảo đang chạy giữa hai máy chủ vật lý khác nhau mà người dùng không hề bị gián đoạn hay rớt kết nối (Zero-Downtime).",
                    "<strong>3. VMware DRS (Distributed Resource Scheduler):</strong> Tự động giám sát tải của toàn bộ cụm máy chủ và tự động di chuyển các VM để cân bằng tải, tránh tình trạng một host bị quá tải trong khi host khác đang nhàn rỗi."
                  ]
                },
                {
                  type: "vmotion-zero-downtime"
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s5-4-vcenter",
          number: "5.4",
          title: "VMware vCenter Server",
          parts: [
            {
              id: "cloud-ch9-s5-4-p1",
              label: "5.4",
              title: "Bộ Não Quản Lý Tập Trung Toàn Hạ Tầng",
              content: [
                {
                  type: "definition",
                  term: "VMware vCenter Server",
                  meaning: "Trung tâm chỉ huy và quản lý tập trung cho toàn bộ các máy chủ ESXi, cụm máy tính (Cluster), máy ảo (VM) và mạng lưu trữ phân tán trong toàn doanh nghiệp."
                },
                {
                  type: "paragraph",
                  text: "vCenter cung cấp giao diện Web HTML5 (vSphere Client) giúp quản trị viên có cái nhìn toàn cảnh: cấu hình vMotion, kích hoạt High Availability (HA), quản lý bảo mật phân quyền RBAC và theo dõi biểu đồ tài nguyên thời gian thực."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s5-5-deployment",
          number: "5.5",
          title: "Triển khai và sử dụng ESXi",
          parts: [
            {
              id: "cloud-ch9-s5-5-p1",
              label: "5.5",
              title: "Quy Trình 4 Bước Chuẩn Doanh Nghiệp",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Bước 1 - Cài đặt ESXi lên phần cứng:</strong> Khởi động máy chủ từ USB/ISO, cài ESXi trực tiếp lên ổ đĩa flash nội bộ hoặc thẻ SD chuyên dụng của máy chủ.",
                    "<strong>Bước 2 - Cấu hình mạng DCUI:</strong> Thiết lập địa chỉ IP tĩnh, Subnet Mask, Gateway và DNS thông qua giao diện điều khiển màn hình vàng-đen Direct Console User Interface.",
                    "<strong>Bước 3 - Truy cập Web Host Client:</strong> Mở trình duyệt web từ máy trạm quản trị, đăng nhập IP của máy chủ ESXi qua giao thức HTTPS.",
                    "<strong>Bước 4 - Tạo Datastore & Triển khai VM:</strong> Kết nối mạng lưu trữ SAN/iSCSI, tải file ISO cài đặt và khởi tạo các máy ảo đầu tiên."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s5-6-cloud-link",
          number: "5.6",
          title: "Điểm cần liên hệ với Cloud Computing",
          parts: [
            {
              id: "cloud-ch9-s5-6-p1",
              label: "5.6",
              title: "Cầu Nối Đám Mây Lai (Hybrid Cloud) & Micro-Quiz",
              content: [
                {
                  type: "paragraph",
                  text: "ESXi và vSphere chính là nền tảng hạ tầng xây dựng nên các đám mây riêng (Private Cloud) và đám mây lai (Hybrid Cloud):"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Nền tảng của IaaS:</strong> Cung cấp tài nguyên máy chủ ảo theo yêu cầu cho người dùng tự phục vụ (Self-service Portal).",
                    "<strong>VMware Cloud on AWS/Azure:</strong> Cho phép doanh nghiệp mở rộng cụm ESXi nội bộ lên hạ tầng đám mây công cộng của Amazon hoặc Microsoft mà không cần thay đổi kiến trúc ứng dụng."
                  ]
                },
                {
                  type: "micro-quiz",
                  question: "Công nghệ VMware vMotion mang lại khả năng đột phá nào cho trung tâm dữ liệu?",
                  options: [
                    "Tự động sao lưu toàn bộ cơ sở dữ liệu lên đám mây công cộng mỗi 5 phút một lần",
                    "Di chuyển máy ảo đang hoạt động giữa các máy chủ vật lý mà không gián đoạn dịch vụ",
                    "Chuyển đổi giao diện đồ họa máy ảo thành ứng dụng web di động cho điện thoại",
                    "Nén dung lượng ổ đĩa SAN lưu trữ của máy ảo giảm 90% không làm mất thông tin"
                  ],
                  answerIndex: 1,
                  explanation: "vMotion cho phép live migration (di chuyển máy ảo sống) qua mạng chia sẻ SAN/NAS với thời gian dừng gần như bằng không (Zero-downtime), phục vụ bảo trì phần cứng mà không ngắt kết nối người dùng.",
                  hint: "Hãy nhớ lại tính năng Zero-Downtime khi bảo trì phần cứng máy chủ mà người dùng đang truy cập không bị ngắt quãng."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VI: DESKTOP & APPLICATION VIRTUALIZATION
       ============================ */
    {
      id: "cloud-ch9-s6",
      roman: "VI",
      title: "Desktop & Application Virtualization",
      subsections: [
        {
          id: "cloud-ch9-s6-1-parallels",
          number: "6.1",
          title: "Parallels Desktop",
          parts: [
            {
              id: "cloud-ch9-s6-1-p1",
              label: "6.1",
              title: "Ảo Hóa Máy Trạm Trên macOS",
              content: [
                {
                  type: "definition",
                  term: "Parallels Desktop for Mac",
                  meaning: "Phần mềm ảo hóa Type 2 chạy trên hệ điều hành macOS, cho phép người dùng chạy Windows, Linux song song mượt mà cùng các ứng dụng Mac mà không cần khởi động lại máy."
                },
                {
                  type: "paragraph",
                  text: "Nhờ tính năng Coherence Mode, các cửa sổ ứng dụng Windows hiển thị trực tiếp trên thanh Dock của Mac giống như một phần mềm nguyên bản của macOS, tạo sự tiện lợi tối đa cho người làm việc đa nền tảng."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s6-2-ms-desktop",
          number: "6.2",
          title: "Microsoft Desktop Virtualization",
          parts: [
            {
              id: "cloud-ch9-s6-2-p1",
              label: "6.2",
              title: "Hệ Sinh Thái Ảo Hóa Người Dùng Của Microsoft",
              content: [
                {
                  type: "paragraph",
                  text: "Microsoft cung cấp danh mục giải pháp toàn diện để quản lý môi trường làm việc của người dùng doanh nghiệp, bao gồm 2 trụ cột chính:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Virtual Desktop Infrastructure (VDI):</strong> Tập trung hóa toàn bộ hệ điều hành desktop lên máy chủ trung tâm trong Data Center.",
                    "<strong>Application Virtualization (App-V):</strong> Trừu tượng hóa từng ứng dụng phần mềm độc lập khỏi hệ điều hành máy trạm."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s6-3-vdi",
          number: "6.3",
          title: "Microsoft VDI",
          parts: [
            {
              id: "cloud-ch9-s6-3-p1",
              label: "6.3",
              title: "Kiến Trúc Hạ Tầng Máy Tính Để Bàn Ảo (VDI)",
              content: [
                {
                  type: "definition",
                  term: "Microsoft VDI (Virtual Desktop Infrastructure)",
                  meaning: "Mô hình kiến trúc triển khai các hệ điều hành máy tính để bàn (Windows 10/11) dưới dạng các máy ảo chạy tập trung trên máy chủ Hyper-V trong trung tâm dữ liệu, người dùng truy cập từ xa qua giao thức RDP."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Bảo mật dữ liệu tuyệt đối:</strong> Mọi dữ liệu nhạy cảm lưu tại máy chủ trung tâm, thiết bị đầu cuối của nhân viên bị mất cắp cũng không rò rỉ dữ liệu.",
                    "<strong>Hỗ trợ Thin Client / BYOD:</strong> Người dùng có thể dùng máy tính cấu hình yếu, laptop cá nhân hoặc máy tính bảng để làm việc với đầy đủ phần mềm công ty."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s6-4-appv",
          number: "6.4",
          title: "Microsoft App-V",
          parts: [
            {
              id: "cloud-ch9-s6-4-p1",
              label: "6.4",
              title: "Ảo Hóa Ứng Dụng & Mô Phỏng VDI vs App-V",
              content: [
                {
                  type: "definition",
                  term: "Microsoft App-V (Application Virtualization)",
                  meaning: "Công nghệ đóng gói ứng dụng phần mềm vào môi trường ảo hóa độc lập (Sandbox), cho phép ứng dụng chạy trực tiếp trên máy trạm mà không cần cài đặt truyền thống vào Windows Registry và tệp hệ thống."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Triệt tiêu xung đột DLL Hell:</strong> Có thể chạy song song hai phiên bản ứng dụng xung đột nhau (ví dụ Microsoft Office 2016 và Office 2021) trên cùng một máy tính.",
                    "<strong>Truyền phát theo nhu cầu (Application Streaming):</strong> Ứng dụng được tải từng phần mã cần thiết về máy qua mạng, người dùng có thể mở phần mềm chỉ sau vài giây."
                  ]
                },
                {
                  type: "vdi-vs-appv"
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s6-5-ms-virt-benefits",
          number: "6.5",
          title: "Ưu điểm của Microsoft Desktop Virtualization",
          parts: [
            {
              id: "cloud-ch9-s6-5-p1",
              label: "6.5",
              title: "Bảng So Sánh Chiến Lược VDI vs App-V",
              content: [
                {
                  type: "table",
                  headers: ["Tiêu Chí So Sánh", "Microsoft VDI (Ảo hóa Desktop)", "Microsoft App-V (Ảo hóa Ứng dụng)"],
                  rows: [
                    ["Nơi thực thi mã lệnh", "100% trên máy chủ Data Center", "Trực tiếp trên CPU & RAM của máy trạm"],
                    ["Tài nguyên máy trạm", "Yêu cầu rất thấp (Thin Client)", "Yêu cầu đủ mạnh để chạy ứng dụng"],
                    ["Băng thông mạng", "Cần kết nối liên tục để stream màn hình", "Chỉ cần tải gói ban đầu, có thể dùng offline"],
                    ["Phạm vi cô lập", "Toàn bộ hệ điều hành độc lập", "Chỉ đóng gói ứng dụng trong Sandbox"],
                    ["Mục đích chính", "Bảo mật dữ liệu, quản lý tập trung", "Chống xung đột phần mềm, không cần cài đặt"]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s6-6-applications",
          number: "6.6",
          title: "Ứng dụng thực tế",
          parts: [
            {
              id: "cloud-ch9-s6-6-p1",
              label: "6.6",
              title: "Các Kịch Bản Triển Khai Thực Tiễn",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Trung tâm Chăm sóc Khách hàng (Call Centers):</strong> Hàng trăm nhân viên dùng chung máy tính nhưng đăng nhập vào hồ sơ VDI cá nhân hóa riêng.",
                    "<strong>Ngân hàng & Tổ chức Tài chính:</strong> Cấm mang dữ liệu ra khỏi máy chủ để tuân thủ quy chuẩn bảo mật PCI-DSS và bảo mật tài chính.",
                    "<strong>Làm việc từ xa (Work From Home):</strong> Cấp phát nhanh môi trường máy ảo an toàn cho nhân sự hợp đồng hoặc đối tác mà không cần gửi máy tính vật lý."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s6-7-vmware-view",
          number: "6.7",
          title: "VMware View",
          parts: [
            {
              id: "cloud-ch9-s6-7-p1",
              label: "6.7",
              title: "Virtual Desktop On Demand & Micro-Quiz",
              content: [
                {
                  type: "definition",
                  term: "VMware View (VMware Horizon)",
                  meaning: "Giải pháp VDI hàng đầu của VMware, cung cấp máy tính để bàn ảo theo yêu cầu (Virtual Desktop on Demand) dựa trên giao thức truyền hình ảnh tối ưu hóa PCoIP hoặc Blast Extreme."
                },
                {
                  type: "paragraph",
                  text: "VMware View giúp bộ phận IT quản lý vòng đời hàng ngàn máy trạm từ một giao diện duy nhất, tự động nhân bản (Instant Clones) các máy tính để bàn mới trong tích tắc khi có ca làm việc mới."
                },
                {
                  type: "micro-quiz",
                  question: "Điểm khác biệt cốt lõi nhất giữa Microsoft VDI và Microsoft App-V là gì?",
                  options: [
                    "VDI ảo hóa cả hệ điều hành ở máy chủ, còn App-V ảo hóa từng ứng dụng trên máy trạm",
                    "VDI chỉ chạy được trên điện thoại di động, còn App-V bắt buộc phải cài đặt trên Mac",
                    "VDI chạy không cần kết nối mạng, còn App-V yêu cầu đường truyền quang quốc tế 10Gb",
                    "VDI chỉ phục vụ cho việc lập trình, còn App-V là giải pháp sao lưu dữ liệu tự động"
                  ],
                  answerIndex: 0,
                  explanation: "VDI truyền tải toàn bộ màn hình desktop của máy ảo lưu trên server Data Center về máy trạm, trong khi App-V đóng gói từng ứng dụng độc lập để chạy trực tiếp trên máy trạm mà không cần cài đặt.",
                  hint: "Hãy phân biệt nơi thực thi: VDI chạy toàn bộ HĐH trên máy chủ, còn App-V chạy ứng dụng độc lập tại máy trạm."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VII: VPN ON WINDOWS & TỔNG KẾT TOÀN CHƯƠNG
       ============================ */
    {
      id: "cloud-ch9-s7",
      roman: "VII",
      title: "VPN on Windows & Tổng kết Toàn chương",
      subsections: [
        {
          id: "cloud-ch9-s7-1-vpn-concept",
          number: "7.1",
          title: "VPN trên Windows",
          parts: [
            {
              id: "cloud-ch9-s7-1-p1",
              label: "7.1",
              title: "Khái Niệm Mạng Riêng Ảo",
              content: [
                {
                  type: "definition",
                  term: "Virtual Private Network (VPN)",
                  meaning: "Công nghệ thiết lập một đường hầm (Tunnel) mã hóa an toàn truyền qua mạng công cộng Internet, cho phép thiết bị từ xa kết nối vào mạng nội bộ doanh nghiệp như thể đang cắm cáp trực tiếp."
                },
                {
                  type: "paragraph",
                  text: "Trên hệ điều hành Windows (Windows 10/11 và Windows Server), tính năng VPN Client và VPN Server được tích hợp sẵn nguyên bản, không đòi hỏi chi phí bản quyền bổ sung từ bên thứ ba."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s7-2-vpn-features",
          number: "7.2",
          title: "Tính năng của VPN trên Windows",
          parts: [
            {
              id: "cloud-ch9-s7-2-p1",
              label: "7.2",
              title: "4 Giao Thức Bảo Mật & Bộ Soi Gói Tin Đường Hầm",
              content: [
                {
                  type: "paragraph",
                  text: "Windows VPN hỗ trợ 4 giao thức đóng gói đường hầm với các cấp độ bảo mật khác nhau:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>PPTP (Point-to-Point Tunneling Protocol):</strong> Giao thức cổ điển, cấu hình đơn giản nhưng bảo mật yếu (mã hóa MPPE 128-bit), hiện nay ít khuyến nghị sử dụng.",
                    "<strong>L2TP/IPsec (Layer 2 Tunneling Protocol):</strong> Kết hợp L2TP để tạo đường hầm và IPsec với mã hóa AES-256 để bảo vệ gói tin. Yêu cầu chứng chỉ số hoặc khóa chia sẻ trước (Preshared Key).",
                    "<strong>SSTP (Secure Socket Tunneling Protocol):</strong> Đóng gói đường hầm qua giao thức SSL/TLS trên cổng TCP 443. Khả năng vượt qua mọi tường lửa và Proxy cực tốt vì cổng 443 là cổng web HTTPS.",
                    "<strong>IKEv2 (Internet Key Exchange v2):</strong> Rất ổn định trên thiết bị di động, tự động phục hồi kết nối tức thì khi chuyển mạng từ Wi-Fi sang 4G/5G (MOBIKE technology)."
                  ]
                },
                {
                  type: "vpn-tunnel-inspector"
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s7-3-vpn-benefits-apps",
          number: "7.3",
          title: "Ưu điểm và ứng dụng",
          parts: [
            {
              id: "cloud-ch9-s7-3-p1",
              label: "7.3",
              title: "Lợi Ích Kinh Tế & Bảo Vệ Tài Sản Số",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Tiết kiệm chi phí viễn thông:</strong> Thay thế các đường truyền thuê riêng đắt đỏ (Leased Line) bằng kết nối Internet công cộng được mã hóa.",
                    "<strong>Truy cập từ xa an toàn cho nhân viên:</strong> Cho phép nhân viên làm việc tại nhà truy cập an toàn vào cơ sở dữ liệu nội bộ, máy chủ file và ERP công ty.",
                    "<strong>Kết nối chi nhánh (Site-to-Site VPN):</strong> Nối liền mạng LAN của văn phòng trụ sở với các chi nhánh ở tỉnh thành khác thành một mạng thống nhất."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s7-4-quick-summary-table",
          number: "7.4",
          title: "Bảng tổng hợp nhanh (Master Cheat Sheet Matrix)",
          parts: [
            {
              id: "cloud-ch9-s7-4-p1",
              label: "7.4",
              title: "Ma Trận Đối Chiếu 8 Công Nghệ Ảo Hóa",
              content: [
                {
                  type: "table",
                  headers: ["Công Nghệ", "Loại Hình", "Đặc Điểm Nổi Bật", "Trường Hợp Sử Dụng"],
                  rows: [
                    ["Virtual Memory", "Bộ nhớ ảo", "Paging & Swapping bù đắp thiếu RAM", "Mọi HĐH hiện đại"],
                    ["Green Computing", "Sinh thái IT", "Hợp nhất máy chủ, giảm PUE & e-waste", "Chiến lược bền vững Data Center"],
                    ["Microsoft Hyper-V", "Server Virt", "Type 1 Microkernel, tích hợp Windows Server", "Ảo hóa máy chủ doanh nghiệp"],
                    ["VMware ESXi", "Server Virt", "Type 1 Bare-Metal, vMotion Zero-Downtime", "Hạ tầng Cloud & Ngân hàng"],
                    ["Parallels Desktop", "Desktop Virt", "Type 2 Hosted, chạy Windows trên macOS", "Người dùng cá nhân trên Mac"],
                    ["Microsoft VDI", "Desktop Virt", "HĐH chạy trên Data Center, stream hình ảnh", "Bảo mật tuyệt đối, Thin Client"],
                    ["Microsoft App-V", "App Virt", "Đóng gói ứng dụng Sandbox, chống xung đột", "Triển khai phần mềm không cài đặt"],
                    ["Windows VPN", "Network Virt", "Đường hầm mã hóa (PPTP, L2TP, SSTP, IKEv2)", "Truy cập từ xa an toàn"]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s7-5-cloud-keywords-scope",
          number: "7.5",
          title: "Các từ khóa Cloud Computing cần đối chiếu với slide này",
          parts: [
            {
              id: "cloud-ch9-s7-5-p1",
              label: "7.5",
              title: "Từ Khóa Trọng Tâm Thi Cử",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Type 1 vs Type 2 Hypervisor:</strong> Phân biệt Bare-Metal (trực tiếp phần cứng) và Hosted (thông qua HĐH chủ).",
                    "<strong>vMotion & Live Migration:</strong> Khả năng di chuyển máy ảo đang chạy không gián đoạn (Zero-Downtime).",
                    "<strong>Server Consolidation:</strong> Hợp nhất máy chủ giúp tăng tỷ lệ sử dụng CPU từ 15% lên 75%, tiết kiệm điện.",
                    "<strong>VDI vs App-V:</strong> Phân biệt ảo hóa toàn bộ màn hình desktop máy chủ vs ảo hóa gói ứng dụng độc lập trên máy trạm.",
                    "<strong>SSTP Port 443:</strong> Giao thức VPN an toàn có khả năng vượt tường lửa tốt nhất nhờ dùng cổng HTTPS chuẩn."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch9-s7-6-chapter-summary",
          number: "7.6",
          title: "Cần nhớ toàn chương & Sơ đồ Cây Kiến trúc",
          parts: [
            {
              id: "cloud-ch9-s7-6-p1",
              label: "7.6",
              title: "Tổng Kết Toàn Chương, Ma Trận Lọc Động & Micro-Quiz",
              content: [
                {
                  type: "virtualization-master-summary-matrix"
                },
                {
                  type: "highlight",
                  text: "Cần nhớ toàn chương: Ảo hóa tối ưu hóa tài nguyên vật lý thành nhiều môi trường ảo độc lập, an toàn và linh hoạt — từ Bộ nhớ ảo, Máy chủ ảo hóa (Hyper-V, ESXi) đến Máy trạm ảo (VDI, App-V) và Mạng riêng ảo (VPN)."
                },
                {
                  type: "micro-quiz",
                  question: "Trong các giao thức VPN trên Windows, giao thức nào sử dụng cổng SSL 443 để vượt tường lửa?",
                  options: [
                    "Giao thức SSTP (Secure Socket Tunneling Protocol) truyền qua cổng bảo mật 443",
                    "Giao thức PPTP (Point-to-Point Tunneling Protocol) với thuật toán mã hóa DES cũ",
                    "Giao thức L2TP (Layer 2 Tunneling Protocol) bắt buộc phải đi kèm chứng chỉ IPsec",
                    "Giao thức IKEv2 (Internet Key Exchange v2) chuyên dùng cho các thiết bị di động"
                  ],
                  answerIndex: 0,
                  explanation: "SSTP sử dụng kênh mã hóa SSL qua cổng TCP 443 (cổng HTTPS tiêu chuẩn), cho phép đường hầm VPN đi qua hầu hết mọi tường lửa và proxy mà không bị chặn.",
                  hint: "Nghĩ về giao thức VPN sử dụng chứng chỉ bảo mật Secure Socket (SSL) qua cổng HTTPS thông dụng."
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
   DANH MỤC THẺ GHI NHỚ (FLASHCARDS) TOÀN CHƯƠNG 9
   Phục vụ thuật toán lặp lại ngắt quãng SuperMemo-2 (SM-2)
   ============================================================ */
export const cloudChapter9Flashcards = [
  {
    cardId: "cloud_fc_25",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s1-1-definition",
    front: "Virtualization là gì và 3 loại hình ảo hóa căn bản?",
    back: "Ảo hóa: Quá trình tạo ra phiên bản ảo của tài nguyên IT (OS, Server, Storage, Network). 3 loại: Server Virtualization (nhiều VM trên 1 server), Desktop Virtualization (nhiều desktop trên 1 máy), Storage Virtualization (gom nhiều ổ đĩa thành 1 đơn vị thống nhất).",
    vi: "Công nghệ Ảo hóa",
    en: "Virtualization Overview",
    abbreviation: "Virtualization"
  },
  {
    cardId: "cloud_fc_26",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s2-2-mechanism",
    front: "Bản chất của Virtual Memory và cơ chế hoạt động khi RAM bị đầy?",
    back: "Virtual Memory dùng ổ cứng (hard disk/SSD) làm bộ nhớ mở rộng bù đắp thiếu hụt RAM vật lý. Khi RAM đầy: Hệ điều hành xác định memory pages ít dùng, chuyển sang Virtual Memory trên ổ đĩa; khi cần lại sẽ nạp ngược về RAM.",
    vi: "Nguyên lý Bộ nhớ Ảo",
    en: "Virtual Memory Mechanism",
    abbreviation: "Virtual Memory"
  },
  {
    cardId: "cloud_fc_27",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s2-3-components",
    front: "Memory Pages và Swapping đóng vai trò gì trong quản lý bộ nhớ ảo?",
    back: "Memory Pages: Khối dữ liệu nhỏ kích thước cố định (thường 4KB). Swapping: Quá trình hoán chuyển các memory pages qua lại giữa RAM vật lý và ổ đĩa cứng khi cần giải phóng hoặc nạp lại bộ nhớ.",
    vi: "Trang nhớ & Hoán chuyển",
    en: "Pages & Swapping",
    abbreviation: "Paging & Swapping"
  },
  {
    cardId: "cloud_fc_28",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s3-2-goals",
    front: "Green Computing là gì và 3 mục tiêu môi trường cốt lõi?",
    back: "Sử dụng hiệu quả tài nguyên CNTT (ICT) để giảm tác động tiêu cực đến môi trường. 3 mục tiêu: 1. Energy saving (tiết kiệm điện năng), 2. Reduce carbon emissions (giảm phát thải CO2), 3. Reuse and recycle (tái sử dụng và tái chế giảm e-waste).",
    vi: "Điện toán Xanh",
    en: "Green Computing",
    abbreviation: "Green IT"
  },
  {
    cardId: "cloud_fc_29",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s3-4-virtualization-link",
    front: "Mối liên hệ tương hỗ giữa Virtualization và Green Computing là gì?",
    back: "Ảo hóa giúp tăng hiệu suất sử dụng tài nguyên và giảm số lượng phần cứng vật lý cần thiết (Server Consolidation), từ đó giảm điện năng tiêu thụ, giảm nhu cầu làm mát (giảm CO2) và kéo dài tuổi thọ phần cứng (giảm rác thải e-waste).",
    vi: "Ảo hóa & Điện toán Xanh",
    en: "Virtualization & Green IT Link",
    abbreviation: "Green Virtualization"
  },
  {
    cardId: "cloud_fc_30",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s4-3-benefits",
    front: "Microsoft Hyper-V là gì và 3 lợi ích vượt trội trong ảo hóa máy chủ?",
    back: "Hyper-V là công nghệ ảo hóa máy chủ của Microsoft tích hợp trong Windows Server. 3 lợi ích: 1. Server consolidation (gom nhiều VM trên 1 server giảm máy vật lý), 2. Tăng hiệu suất CPU, 3. Cải thiện cân bằng tải (load balancing).",
    vi: "Microsoft Hyper-V & Hợp nhất Máy chủ",
    en: "Microsoft Hyper-V & Consolidation",
    abbreviation: "Hyper-V"
  },
  {
    cardId: "cloud_fc_31",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s5-1-definition",
    front: "VMware ESXi là gì và vì sao được xếp vào Type 1 Hypervisor?",
    back: "VMware ESXi là nền tảng ảo hóa cấp doanh nghiệp của VMware. Là Type 1 Hypervisor (Bare-Metal) vì chạy trực tiếp trên phần cứng máy chủ mà không cần hệ điều hành nền bên dưới, mang lại hiệu năng cao và độ bảo mật tối đa.",
    vi: "VMware ESXi Type 1 Hypervisor",
    en: "VMware ESXi Bare-Metal",
    abbreviation: "ESXi Type 1"
  },
  {
    cardId: "cloud_fc_32",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s5-3-features",
    front: "Bộ ba tính năng đỉnh cao vSphere Hypervisor, vMotion và DRS trong ESXi là gì?",
    back: "1. vSphere Hypervisor: Tạo và quản lý VM hiệu năng cao. 2. vMotion: Di chuyển máy ảo VM đang chạy giữa các server vật lý mà không làm gián đoạn dịch vụ (zero-downtime). 3. DRS: Tự động phân phối tài nguyên để tối ưu hiệu năng toàn cụm cluster.",
    vi: "Bộ ba Công nghệ VMware",
    en: "vSphere Hypervisor, vMotion & DRS",
    abbreviation: "vMotion & DRS"
  },
  {
    cardId: "cloud_fc_33",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s6-5-ms-virt-benefits",
    front: "Điểm khác biệt cốt lõi giữa Microsoft VDI và Microsoft App-V là gì?",
    back: "VDI (Virtual Desktop Infrastructure): Ảo hóa toàn bộ hệ điều hành desktop lưu trên server trung tâm. App-V (Application Virtualization): Ảo hóa từng ứng dụng phần mềm độc lập, chạy trên máy người dùng không cần cài đặt, loại bỏ xung đột phần mềm.",
    vi: "Microsoft VDI vs App-V",
    en: "Microsoft VDI vs App-V",
    abbreviation: "VDI vs App-V"
  },
  {
    cardId: "cloud_fc_34",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s6-7-vmware-view",
    front: "Vai trò và ưu điểm của VMware View trong cung cấp virtual desktop on demand?",
    back: "VMware View cung cấp máy tính để bàn ảo theo yêu cầu (on-demand) với mô hình quản lý tập trung. Ưu điểm: Bảo mật tăng cường (data lưu trên server), truy cập linh hoạt từ nhiều thiết bị và giảm đáng kể chi phí quản lý IT.",
    vi: "VMware View Desktop on Demand",
    en: "VMware View Virtual Desktop",
    abbreviation: "VMware View"
  },
  {
    cardId: "cloud_fc_35",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s7-2-vpn-features",
    front: "VPN trên Windows hỗ trợ những giao thức bảo mật nào và ưu điểm kinh tế?",
    back: "Hỗ trợ 4 giao thức: PPTP, L2TP/IPSec, SSTP và IKEv2. Ưu điểm kinh tế: Được tích hợp sẵn nguyên bản trong Windows, không cần tốn chi phí mua thêm phần mềm của bên thứ ba.",
    vi: "VPN trên Windows",
    en: "VPN on Windows Protocols",
    abbreviation: "Windows VPN"
  },
  {
    cardId: "cloud_fc_36",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s7-6-chapter-summary",
    front: "6 điểm chốt kiến thức cốt lõi của công nghệ Ảo hóa (Virtualization) là gì?",
    back: "1. Dùng phần cứng hiệu quả hơn + giảm chi phí + linh hoạt. 2. Hyper-V & ESXi là hai trụ cột server virtualization. 3. ESXi là Type 1 Hypervisor. 4. VDI / VMware View là desktop ảo quản lý tập trung. 5. App-V ảo hóa ứng dụng di động, chống xung đột. 6. Security là yếu tố xuyên suốt.",
    vi: "6 Điểm Chốt Kiến thức Ảo hóa",
    en: "6 Core Virtualization Takeaways",
    abbreviation: "6 Core Takeaways"
  }
];

/* ============================================================
   TỪ ĐIỂN THUẬT NGỮ SONG NGỮ (GLOSSARY) TOÀN CHƯƠNG 9
   Phục vụ tính năng tìm kiếm thông minh Việt - Anh (Ctrl + K)
   ============================================================ */
export const cloudChapter9Glossary = [
  {
    id: "term-virtualization",
    vi: "Công nghệ Ảo hóa",
    en: "Virtualization",
    abbreviation: "Virtualization",
    aliases: ["ao hoa", "cong nghe ao hoa", "virtual technology"],
    definition: "Quá trình tạo ra phiên bản ảo của một tài nguyên CNTT như hệ điều hành, máy chủ, thiết bị lưu trữ hoặc mạng trên nền tảng phần cứng vật lý.",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s1-1-definition"
  },
  {
    id: "term-virtual-memory",
    vi: "Bộ nhớ ảo",
    en: "Virtual Memory",
    abbreviation: "Virtual Memory",
    aliases: ["bo nho ao", "swap memory", "paging file"],
    definition: "Kỹ thuật quản lý bộ nhớ của hệ điều hành giúp bù đắp sự thiếu hụt RAM vật lý bằng cách sử dụng một phần không gian lưu trữ trên ổ đĩa cứng.",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s2-1-definition"
  },
  {
    id: "term-memory-pages",
    vi: "Trang nhớ",
    en: "Memory Pages",
    abbreviation: "Pages",
    aliases: ["trang nho", "khoi nho", "paging"],
    definition: "Các khối dữ liệu có kích thước cố định (thường là 4KB) được hệ điều hành chia nhỏ từ không gian bộ nhớ để phục vụ điều phối và quản lý.",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s2-3-components"
  },
  {
    id: "term-swapping",
    vi: "Tráo đổi trang nhớ",
    en: "Swapping",
    abbreviation: "Swapping",
    aliases: ["trao doi trang", "swap out", "swap in"],
    definition: "Quá trình chuyển dịch các trang nhớ (memory pages) qua lại giữa bộ nhớ RAM vật lý và vùng lưu trữ bộ nhớ ảo trên ổ đĩa khi cần thiết.",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s2-3-components"
  },
  {
    id: "term-green-computing",
    vi: "Điện toán xanh",
    en: "Green Computing",
    abbreviation: "Green IT",
    aliases: ["dien toan xanh", "green it", "ict than thien moi truong"],
    definition: "Nghiên cứu và thực hành sử dụng các tài nguyên công nghệ thông tin một cách hiệu quả, tiết kiệm năng lượng và giảm thiểu phát thải khí nhà kính.",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s3-1-definition"
  },
  {
    id: "term-e-waste",
    vi: "Rác thải điện tử",
    en: "Electronic Waste (E-waste)",
    abbreviation: "E-waste",
    aliases: ["rac thai dien tu", "thiet bi dien tu cu", "linh kien thai bo"],
    definition: "Các thiết bị điện tử hoặc linh kiện máy tính bị loại bỏ sau khi hết hạn sử dụng, đòi hỏi phải được thu gom và tái chế theo quy chuẩn để bảo vệ môi trường.",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s3-2-goals"
  },
  {
    id: "term-server-virtualization",
    vi: "Ảo hóa máy chủ",
    en: "Server Virtualization",
    abbreviation: "Server Virt",
    aliases: ["ao hoa may chu", "may chu ao", "virtual server"],
    definition: "Công nghệ phân chia một máy chủ vật lý thành nhiều máy ảo (VM) độc lập, mỗi máy ảo vận hành như một máy chủ hoàn chỉnh với hệ điều hành riêng.",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s4-1-server-virt"
  },
  {
    id: "term-server-consolidation",
    vi: "Hợp nhất máy chủ",
    en: "Server Consolidation",
    abbreviation: "Consolidation",
    aliases: ["hop nhat may chu", "gom cum may chu", "giam so luong server"],
    definition: "Chiến lược gom nhiều máy ảo chạy ứng dụng khác nhau lên một số lượng ít máy chủ vật lý cấu hình mạnh, giúp giảm chi phí phần cứng và điện năng.",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s4-3-benefits"
  },
  {
    id: "term-type-1-hypervisor",
    vi: "Bộ ảo hóa Bare-Metal Type 1",
    en: "Type 1 Hypervisor",
    abbreviation: "Type 1",
    aliases: ["bare-metal hypervisor", "ao hoa phan cung truc tiep", "esxi hypervisor"],
    definition: "Lớp phần mềm ảo hóa chạy trực tiếp trên phần cứng máy chủ vật lý mà không cần thông qua hệ điều hành nền, mang lại hiệu năng cao và độ ổn định tối đa.",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s5-1-definition"
  },
  {
    id: "term-vmware-esxi",
    vi: "Nền tảng VMware ESXi",
    en: "VMware ESXi",
    abbreviation: "ESXi",
    aliases: ["esxi", "vsphere hypervisor", "vmware server virtualization"],
    definition: "Nền tảng ảo hóa máy chủ doanh nghiệp Bare-Metal Type 1 hàng đầu thế giới do VMware phát triển.",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s5-1-definition"
  },
  {
    id: "term-vmotion",
    vi: "Di chuyển máy ảo sống vMotion",
    en: "VMware vMotion",
    abbreviation: "vMotion",
    aliases: ["live migration", "di chuyen vm khong gián doan", "chuyen may ao song"],
    definition: "Tính năng cho phép di chuyển toàn bộ máy ảo VM đang hoạt động giữa các máy chủ vật lý khác nhau mà hoàn toàn không làm gián đoạn dịch vụ (zero-downtime).",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s5-3-features"
  },
  {
    id: "term-drs",
    vi: "Bộ điều phối tài nguyên phân tán",
    en: "Distributed Resource Scheduler",
    abbreviation: "DRS",
    aliases: ["can bang tai vmware", "drs cluster", "tu dong phan bo tai nguyen"],
    definition: "Hệ thống tự động theo dõi và phân phối lại tài nguyên CPU và RAM giữa các máy chủ trong cụm cluster để tối ưu hóa hiệu năng và cân bằng tải.",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s5-3-features"
  },
  {
    id: "term-vcenter-server",
    vi: "Máy chủ quản lý tập trung vCenter",
    en: "VMware vCenter Server",
    abbreviation: "vCenter",
    aliases: ["vcenter", "quan ly tap trung vmware", "vsphere client center"],
    definition: "Bảng điều khiển và máy chủ quản trị tập trung cho toàn bộ máy ảo và hạ tầng máy chủ ảo hóa VMware vSphere.",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s5-4-vcenter"
  },
  {
    id: "term-vdi",
    vi: "Hạ tầng máy tính để bàn ảo",
    en: "Virtual Desktop Infrastructure",
    abbreviation: "VDI",
    aliases: ["desktop ao", "vdi microsoft", "vmware horizon view"],
    definition: "Mô hình công nghệ lưu trữ và thực thi toàn bộ môi trường hệ điều hành máy tính để bàn của người dùng tập trung tại máy chủ dữ liệu.",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s6-3-vdi"
  },
  {
    id: "term-app-v",
    vi: "Ảo hóa ứng dụng App-V",
    en: "Application Virtualization (App-V)",
    abbreviation: "App-V",
    aliases: ["ao hoa ung dung", "microsoft app-v", "stream ung dung"],
    definition: "Giải pháp ảo hóa ứng dụng cho phép chạy phần mềm độc lập trong môi trường ảo mà không cần cài đặt trực tiếp vào hệ điều hành của máy trạm.",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s6-4-appv"
  },
  {
    id: "term-vpn",
    vi: "Mạng riêng ảo",
    en: "Virtual Private Network",
    abbreviation: "VPN",
    aliases: ["mang rieng ao", "ket noi bao mat", "duong ham vpn"],
    definition: "Công nghệ thiết lập đường truyền kết nối an toàn, riêng tư và được mã hóa thông qua mạng công cộng Internet.",
    chapterId: "cloud-ch9",
    subsectionId: "cloud-ch9-s7-1-vpn-concept"
  }
];
