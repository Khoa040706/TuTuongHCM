/* ============================================================
   GIÁO TRÌNH ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)
   Chương 3: Software as a Service (SaaS)
   Biên tập chuẩn học thuật từ tài liệu nguồn taskcanlam
   ============================================================ */

export const cloudComputingChapter3 = {
  id: "cloud-ch3",
  title: "Chương 3",
  subtitle: "Software as a Service - SaaS (Phần mềm như một Dịch vụ)",
  sections: [
    /* ============================
       MỤC ★: OVERVIEW CHƯƠNG
       ============================ */
    {
      id: "cloud-ch3-s0",
      roman: "★",
      title: "Tổng quan chương: Kiến trúc Phần mềm Dịch vụ (SaaS)",
      subsections: [
        {
          id: "cloud-ch3-s0-overview",
          number: "0",
          title: "Bản đồ kiến trúc & Radar kỹ năng Chương 3",
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
                  text: "Chương 3 khảo sát mô hình dịch vụ cấp cao nhất trong điện toán đám mây: Bản chất Software as a Service (SaaS), sự đối lập kiến trúc Single-tenant vs Multi-tenant, giải pháp OpenSaaS, kỹ thuật tích hợp Mashup, kiến trúc hướng dịch vụ SOA và các rào cản bảo mật dữ liệu doanh nghiệp khi kết hợp với AI, Blockchain và Big Data."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC I: ĐỊNH NGHĨA & ĐẶC ĐIỂM
       ============================ */
    {
      id: "cloud-ch3-s1",
      roman: "I",
      title: "Bản chất, Đặc tính & Đánh đổi của Mô hình SaaS",
      subsections: [
        {
          id: "cloud-ch3-s1-def",
          number: "1",
          title: "Khái niệm & 4 Đặc điểm Nhận diện SaaS",
          parts: [
            {
              id: "cloud-ch3-s1-def-p1",
              label: "a",
              title: "Định nghĩa chuẩn",
              content: [
                {
                  type: "definition",
                  term: "Software as a Service (SaaS)",
                  definition: "SaaS là mô hình phân phối phần mềm trong đó ứng dụng được lưu trữ tập trung trên hạ tầng của nhà cung cấp dịch vụ bên thứ ba (Third-party provider) và được phân phối tới khách hàng qua mạng Internet. Người dùng đầu cuối truy cập thông qua trình duyệt web mà không cần cài đặt, bảo trì hay nâng cấp phần mềm cục bộ."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Truy cập toàn cầu qua Internet:</strong> Người dùng có thể làm việc từ bất kỳ thiết bị nào có kết nối mạng.",
                    "<strong>Loại bỏ cài đặt cục bộ:</strong> Không đòi hỏi máy trạm cấu hình cao, không phát sinh chi phí triển khai tại chỗ.",
                    "<strong>Nhà cung cấp quản trị toàn diện:</strong> Toàn bộ việc cập nhật vá lỗi, bảo trì máy chủ, tối ưu hiệu năng và sao lưu dữ liệu đều do nhà cung cấp đảm nhiệm.",
                    "<strong>Chi phí linh hoạt (Pay according to use):</strong> Đăng ký thuê bao theo tháng/năm dựa trên số lượng người dùng thực tế."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch3-s1-tradeoffs",
          number: "2",
          title: "Cán cân Đánh đổi: Lợi ích vs Nhược điểm",
          parts: [
            {
              id: "cloud-ch3-s1-tradeoffs-p1",
              label: "b",
              title: "Phân tích ưu thế và rào cản",
              content: [
                {
                  type: "table",
                  headers: ["Lợi ích vượt trội (Benefits)", "Rào cản & Nhược điểm (Drawbacks)"],
                  rows: [
                    [
                      "Tiết kiệm chi phí đầu tư ban đầu (Chuyển CapEx thành OpEx)",
                      "Phụ thuộc 100% vào sự ổn định của kết nối Internet"
                    ],
                    [
                      "Khả năng mở rộng quy mô tức thì theo số lượng nhân sự",
                      "Mối lo ngại về an ninh, chủ quyền và quyền riêng tư dữ liệu"
                    ],
                    [
                      "Tự động cập nhật tính năng mới đồng loạt cho mọi người dùng",
                      "Hạn chế khả năng tùy biến sâu theo quy trình nội bộ đặc thù"
                    ],
                    [
                      "Hợp tác làm việc thời gian thực dễ dàng giữa các chi nhánh",
                      "Nguy cơ phụ thuộc nhà cung cấp (Vendor Lock-in) khi chuyển đổi dữ liệu"
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
       MỤC II: TENANCY MODELS
       ============================ */
    {
      id: "cloud-ch3-s2",
      roman: "II",
      title: "Mô hình Kiến trúc: Single-Tenant vs Multi-Tenant",
      subsections: [
        {
          id: "cloud-ch3-s2-comparison",
          number: "1",
          title: "Đối sánh Chuyên sâu Kiến trúc Đơn nhiệm vs Đa nhiệm",
          parts: [
            {
              id: "cloud-ch3-s2-comparison-p1",
              label: "a",
              title: "Biệt thự độc lập vs Căn hộ chung cư",
              content: [
                {
                  type: "paragraph",
                  text: "Lựa chọn giữa Single-tenant và Multi-tenant là quyết định kiến trúc quan trọng nhất khi thiết kế và sử dụng dịch vụ SaaS:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Single-Tenant SaaS (Đơn khách thuê):</strong> Mỗi khách hàng sở hữu một phiên bản phần mềm độc lập chạy trên một cơ sở dữ liệu riêng biệt. Dữ liệu được cách ly hoàn toàn ở cấp độ vật lý hoặc máy chủ ảo. <em>Hình ảnh ẩn dụ:</em> Như một căn biệt thự biệt lập. <em>Phù hợp:</em> Các ngân hàng, tổ chức tài chính, cơ quan quốc phòng có yêu cầu an ninh tối thượng và quy trình tùy biến cao.",
                    "<strong>Multi-Tenant SaaS (Đa khách thuê):</strong> Một bản cài đặt ứng dụng duy nhất phục vụ đồng thời hàng ngàn khách hàng khác nhau. Tất cả cùng chia sẻ hạ tầng tính toán và cơ sở dữ liệu chung, dữ liệu được phân tách bảo mật bằng định danh Tenant ID. <em>Hình ảnh ẩn dụ:</em> Như một tòa nhà chung cư cao tầng. <em>Phù hợp:</em> Doanh nghiệp vừa và nhỏ (SMEs) cần chi phí thấp, triển khai nhanh và dễ nâng cấp."
                  ]
                },
                {
                  type: "table",
                  headers: ["Tiêu chí so sánh", "Single-Tenant SaaS", "Multi-Tenant SaaS"],
                  rows: [
                    ["Cơ sở dữ liệu & Ứng dụng", "Tách biệt, độc lập 100%", "Dùng chung một nền tảng duy nhất"],
                    ["Mức độ bảo mật & Cách ly", "Cực cao (Cách ly vật lý/logic cấp cao)", "Phụ thuộc vào cơ chế phân quyền logic phần mềm"],
                    ["Chi phí vận hành & Thuê bao", "Rất cao (Chi phí tài nguyên nhân bản)", "Rất thấp (Tối ưu hóa chia sẻ tài nguyên)"],
                    ["Khả năng tùy biến giao diện/mã", "Dễ dàng can thiệp sâu theo yêu cầu", "Bị giới hạn trong các thiết lập có sẵn"],
                    ["Nâng cấp phiên bản", "Thực hiện riêng lẻ cho từng khách hàng", "Nâng cấp một lần cho toàn bộ hệ thống"]
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC III: OPENSAAS & MASHUPS
       ============================ */
    {
      id: "cloud-ch3-s3",
      roman: "III",
      title: "Giải pháp OpenSaaS & Kỹ thuật Tích hợp Dịch vụ (Mashups)",
      subsections: [
        {
          id: "cloud-ch3-s3-opensaas",
          number: "1",
          title: "Mô hình OpenSaaS & Các Nền tảng Tiêu biểu",
          parts: [
            {
              id: "cloud-ch3-s3-opensaas-p1",
              label: "a",
              title: "SaaS trên nền tảng Mã nguồn mở",
              content: [
                {
                  type: "definition",
                  term: "OpenSaaS",
                  definition: "OpenSaaS là mô hình SaaS được xây dựng hoàn toàn dựa trên các ngôn ngữ lập trình mã nguồn mở, vận hành trên hệ điều hành nguồn mở (Linux) và quản lý bởi các hệ quản trị cơ sở dữ liệu nguồn mở (MySQL, PostgreSQL)."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>WordPress.com:</strong> Nền tảng xuất bản nội dung CMS nguồn mở phổ biến nhất thế giới.",
                    "<strong>Magento:</strong> Hệ sinh thái thương mại điện tử (E-Commerce) mã nguồn mở mạnh mẽ.",
                    "<strong>Moodle:</strong> Hệ thống quản lý học tập trực tuyến (LMS) tiêu chuẩn trong ngành giáo dục."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch3-s3-mashups",
          number: "2",
          title: "Kỹ thuật Mashup: Web-Based vs Server-Based",
          parts: [
            {
              id: "cloud-ch3-s3-mashups-p1",
              label: "b",
              title: "Tích hợp đa nguồn dữ liệu",
              content: [
                {
                  type: "paragraph",
                  text: "<strong>Mashup</strong> là quá trình tích hợp nhiều API, dịch vụ hoặc nguồn dữ liệu từ các nhà cung cấp khác nhau để tạo ra một ứng dụng hoàn toàn mới (ví dụ: GoRide kết hợp bản đồ Google Maps với thuật toán định tuyến tài xế):"
                },
                {
                  type: "table",
                  headers: ["Phương pháp", "Cơ chế hoạt động", "Ưu điểm", "Nhược điểm"],
                  rows: [
                    [
                      "Web-Based Mashup (Client-side)",
                      "Trình duyệt phía người dùng (qua JavaScript) trực tiếp gọi các API và tổng hợp nội dung.",
                      "Triển khai đơn giản, không tốn tài nguyên máy chủ trung gian.",
                      "Hiệu năng phụ thuộc vào thiết bị và đường truyền của người dùng; dễ lộ API keys."
                    ],
                    [
                      "Server-Based Mashup (Server-side)",
                      "Máy chủ trung gian thực hiện việc kết hợp, làm sạch và xử lý dữ liệu trước khi gửi về client.",
                      "Bảo mật cao, kiểm soát dữ liệu chặt chẽ, tối ưu băng thông mạng.",
                      "Đòi hỏi chi phí đầu tư hạ tầng máy chủ và phần mềm tích hợp phức tạp."
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
       MỤC IV: SOA & BẢO MẬT
       ============================ */
    {
      id: "cloud-ch3-s4",
      roman: "IV",
      title: "Kiến trúc Hướng dịch vụ (SOA) & An ninh SaaS Doanh nghiệp",
      subsections: [
        {
          id: "cloud-ch3-s4-soa",
          number: "1",
          title: "Kiến trúc Hướng dịch vụ (Service-Oriented Architecture - SOA)",
          parts: [
            {
              id: "cloud-ch3-s4-soa-p1",
              label: "a",
              title: "3 Thực thể trong tam giác SOA",
              content: [
                {
                  type: "paragraph",
                  text: "SOA là triết lý thiết kế phần mềm trong đó các chức năng nghiệp vụ được đóng gói thành các dịch vụ độc lập, có thể tái sử dụng và giao tiếp qua mạng:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Service Provider (Bên cung cấp dịch vụ):</strong> Xây dựng dịch vụ và xuất bản đặc tả giao diện lên môi trường mạng.",
                    "<strong>Service Consumer (Bên tiêu thụ dịch vụ):</strong> Ứng dụng hoặc khách hàng tìm kiếm và gọi dịch vụ để sử dụng.",
                    "<strong>Service Broker / Registry (Bên trung gian / Đăng ký dịch vụ):</strong> Danh bạ tập trung giúp bên tiêu thụ tra cứu vị trí và giao thức kết nối của bên cung cấp."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch3-s4-security",
          number: "2",
          title: "Các Biện pháp Bảo vệ Dữ liệu & Xu hướng Công nghệ Tương lai",
          parts: [
            {
              id: "cloud-ch3-s4-security-p1",
              label: "b",
              title: "Trụ cột an ninh thông tin trong SaaS",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Mã hóa dữ liệu (Data Encryption):</strong> Bắt buộc mã hóa cả khi truyền tải trên đường truyền (In-transit với TLS 1.3) và khi lưu trữ trong ổ đĩa (At-rest với AES-256).",
                    "<strong>Xác thực đa yếu tố (Multi-Factor Authentication - MFA):</strong> Ngăn chặn đánh cắp tài khoản bằng mã sinh trắc học hoặc OTP thời gian thực.",
                    "<strong>Kiểm soát quyền truy cập (RBAC / ABAC):</strong> Phân quyền dựa trên vai trò hoặc thuộc tính người dùng nhằm giới hạn tối thiểu quyền hạn truy xuất.",
                    "<strong>Sự kết hợp với AI & Big Data:</strong> SaaS tích hợp trí tuệ nhân tạo để phân tích dự đoán và cá nhân hóa trải nghiệm khách hàng.",
                    "<strong>SaaS kết hợp Blockchain:</strong> Sử dụng sổ cái phân tán (Distributed Ledger) và Hợp đồng thông minh (Smart Contract) để minh bạch hóa chuỗi cung ứng và quản lý danh tính phi tập trung."
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
      id: "cloud-ch3-s5",
      roman: "V",
      title: "Tổng kết Chương 3 & Bảng Từ khóa Then chốt",
      subsections: [
        {
          id: "cloud-ch3-s5-summary",
          number: "1",
          title: "Ghi nhớ ôn tập trọng tâm",
          parts: [
            {
              id: "cloud-ch3-s5-summary-p1",
              label: "a",
              title: "Bảng thuật ngữ cốt lõi",
              content: [
                {
                  type: "table",
                  headers: ["Khái niệm", "Thuật ngữ tiếng Anh", "Nội dung học thuật"],
                  rows: [
                    ["SaaS", "Software as a Service", "Mô hình thuê phần mềm dùng qua Internet do bên thứ ba quản trị."],
                    ["Single-tenant", "Single-tenant Architecture", "Mỗi khách hàng có CSDL và phiên bản phần mềm riêng biệt (Biệt thự)."],
                    ["Multi-tenant", "Multi-tenant Architecture", "Nhiều khách hàng dùng chung phần mềm và CSDL phân tách logic (Chung cư)."],
                    ["OpenSaaS", "Open-Source SaaS", "Mô hình SaaS xây dựng hoàn toàn từ các công nghệ mã nguồn mở."],
                    ["Mashup", "Service Mashup", "Kỹ thuật kết hợp nhiều API thành một dịch vụ hoàn chỉnh (Web hoặc Server based)."],
                    ["SOA", "Service-Oriented Architecture", "Kiến trúc module hóa lắp ghép các dịch vụ độc lập tái sử dụng."],
                    ["MFA", "Multi-Factor Authentication", "Xác thực đa yếu tố tăng cường an ninh tài khoản người dùng."]
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
