/* ============================================================
   GIÁO TRÌNH ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)
   Chương 4: Platform as a Service (PaaS)
   Biên tập chuẩn học thuật từ tài liệu nguồn taskcanlam
   ============================================================ */

export const cloudComputingChapter4 = {
  id: "cloud-ch4",
  title: "Chương 4",
  subtitle: "Platform as a Service - PaaS (Nền tảng như một Dịch vụ)",
  sections: [
    /* ============================
       MỤC ★: OVERVIEW CHƯƠNG
       ============================ */
    {
      id: "cloud-ch4-s0",
      roman: "★",
      title: "Tổng quan chương: Kiến trúc Nền tảng Đám mây (PaaS)",
      subsections: [
        {
          id: "cloud-ch4-s0-overview",
          number: "0",
          title: "Bản đồ kiến trúc & Radar kỹ năng Chương 4",
          parts: [
            {
              id: "cloud-ch4-s0-p1",
              label: "★",
              title: "Tổng quan tri thức toàn chương",
              content: [
                {
                  type: "cloud-chapter-hero",
                  chapterId: "cloud-ch4"
                },
                {
                  type: "highlight",
                  text: "Chương 4 tập trung vào tầng trung gian của mô hình kim tự tháp Cloud: Platform as a Service (PaaS). Nghiên cứu tiến trình lịch sử 4 giai đoạn, 4 thành phần cấu thành môi trường thực thi, lợi ích tự động hóa CI/CD, nguy cơ phụ thuộc công nghệ (Vendor Lock-in), so sánh các nền tảng công nghiệp (GAE, Azure App Services, Red Hat OpenShift, Cloud Foundry) và xu thế kiến trúc không máy chủ Serverless (FaaS)."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC I: ĐỊNH NGHĨA & LỊCH SỬ
       ============================ */
    {
      id: "cloud-ch4-s1",
      roman: "I",
      title: "Định nghĩa, Lịch sử 4 Giai đoạn & 4 Thành phần PaaS",
      subsections: [
        {
          id: "cloud-ch4-s1-def",
          number: "1",
          title: "Khái niệm & Bản chất của PaaS",
          parts: [
            {
              id: "cloud-ch4-s1-def-p1",
              label: "a",
              title: "Định nghĩa chuẩn học thuật",
              content: [
                {
                  type: "definition",
                  term: "Platform as a Service (PaaS)",
                  definition: "PaaS là mô hình điện toán đám mây trong đó nhà cung cấp dịch vụ phân phối một môi trường nền tảng hoàn chỉnh (bao gồm hệ điều hành, môi trường thực thi ngôn ngữ lập trình, cơ sở dữ liệu và máy chủ web) cho các nhà phát triển để xây dựng, thử nghiệm, triển khai và quản lý ứng dụng mà không cần quan tâm đến sự phức tạp của việc mua sắm và duy trì hạ tầng phần cứng bên dưới."
                },
                {
                  type: "paragraph",
                  text: "Lập trình viên chỉ cần tập trung 100% năng lực vào việc viết mã nguồn và tối ưu hóa logic nghiệp vụ; mọi công việc nặng nhọc như cài đặt bản vá hệ điều hành, cấu hình mạng và cân bằng tải đều được tự động hóa."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch4-s1-history",
          number: "2",
          title: "Tiến trình 4 Giai đoạn Phát triển & 4 Thành phần Cốt lõi",
          parts: [
            {
              id: "cloud-ch4-s1-history-p1",
              label: "b",
              title: "Từ nền tảng đơn giản đến đa đám mây Hybrid",
              content: [
                {
                  type: "table",
                  headers: ["Giai đoạn", "Thời kỳ", "Đại diện tiêu biểu", "Đặc trưng kiến trúc"],
                  rows: [
                    ["Phase 1", "Đầu thập niên 2000", "Google App Engine (GAE), Heroku", "Mô hình đơn giản, hỗ trợ ít ngôn ngữ (chủ yếu Python, Ruby), dễ deploy."],
                    ["Phase 2", "Cuối thập niên 2000", "Microsoft Azure, AWS Elastic Beanstalk", "Hỗ trợ đa ngôn ngữ (.NET, Java, PHP), tích hợp sâu với các dịch vụ đám mây."],
                    ["Phase 3", "Đầu thập niên 2010", "Red Hat OpenShift, IBM Cloud Foundry", "Đưa vào quy trình DevOps, tích hợp đường ống CI/CD và tự động hóa điều phối."],
                    ["Phase 4", "Giữa 2010 đến nay", "OpenShift Container Platform, Kubernetes PaaS", "Kiến trúc microservices bản địa đám mây, đa nền tảng và hỗ trợ Hybrid Cloud."]
                  ]
                },
                {
                  type: "paragraph",
                  text: "Mọi giải pháp PaaS chuẩn mực đều tích hợp sẵn 4 thành phần thiết yếu:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>1. Hệ điều hành (Operating System):</strong> Nền tảng Linux hoặc Windows được chuẩn hóa và tự động cập nhật an ninh.",
                    "<strong>2. Môi trường phát triển & Runtime:</strong> Trình thông dịch/biên dịch (Node.js, Java JVM, Python, Go, .NET Core) kèm SDK quản trị.",
                    "<strong>3. Dịch vụ Cơ sở dữ liệu (Database Services):</strong> Dịch vụ CSDL quan hệ hoặc phi quan hệ (SQL/NoSQL) được quản lý tự động sao lưu và mở rộng.",
                    "<strong>4. Máy chủ Web & Reverse Proxy:</strong> Nginx, Apache, Envoy xử lý tiếp nhận yêu cầu HTTP/HTTPS và định tuyến lưu lượng."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC II: LỢI ÍCH CỐT LÕI
       ============================ */
    {
      id: "cloud-ch4-s2",
      roman: "II",
      title: "4 Nhóm Lợi ích Vượt trội của Mô hình PaaS",
      subsections: [
        {
          id: "cloud-ch4-s2-benefits",
          number: "1",
          title: "Tối ưu Chi phí, Thời gian & Tự động hóa CI/CD",
          parts: [
            {
              id: "cloud-ch4-s2-benefits-p1",
              label: "a",
              title: "Phân tích 4 trụ cột giá trị",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>1. Tiết kiệm chi phí đầu tư (Cost Savings):</strong> Chuyển hoàn toàn chi phí mua sắm bản quyền phần mềm và phần cứng đắt đỏ sang hình thức <em>Pay-as-you-go</em>. Chỉ trả tiền theo số lượng instance và chu kỳ CPU tiêu thụ thực tế.",
                    "<strong>2. Rút ngắn thời gian đưa sản phẩm ra thị trường (Time to Market):</strong> Môi trường dev, staging và production có cấu hình đồng nhất, loại bỏ lỗi 'chạy được trên máy tôi nhưng lỗi trên server'. Triển khai mã nguồn chỉ bằng một lệnh (`git push` hoặc One-click deployment).",
                    "<strong>3. Tự động hóa tích hợp và phân phối liên tục (CI/CD):</strong> Tích hợp sẵn bộ công cụ tự động kiểm thử, build Docker image và phát hành phiên bản mới không gián đoạn (Zero-downtime deployment qua chiến lược Blue/Green hoặc Canary).",
                    "<strong>4. Tự động co giãn (Auto-scaling):</strong> Tự động bổ sung các bản sao ứng dụng khi số lượng request tăng vọt và tự động co cụm về mức tối thiểu khi hết giờ cao điểm."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC III: RÀO CẢN & NHƯỢC ĐIỂM
       ============================ */
    {
      id: "cloud-ch4-s3",
      roman: "III",
      title: "Các Rào cản Kỹ thuật: Vendor Lock-in & An ninh",
      subsections: [
        {
          id: "cloud-ch4-s3-drawbacks",
          number: "1",
          title: "3 Thách thức Sống còn: Vendor Lock-in, Bảo mật & Tương thích",
          parts: [
            {
              id: "cloud-ch4-s3-drawbacks-p1",
              label: "a",
              title: "Phân tích rủi ro kiến trúc",
              content: [
                {
                  type: "paragraph",
                  text: "Dù mang lại tốc độ phát triển cực nhanh, PaaS tiềm ẩn 3 rủi ro chiến lược mà doanh nghiệp phải cân nhắc:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Khóa chặt vào nhà cung cấp (Vendor Lock-in):</strong> Các nhà cung cấp PaaS thường sử dụng các API độc quyền, cơ chế quản lý dữ liệu đặc thù hoặc thư viện riêng (ví dụ Google App Engine Datastore API). Khi muốn chuyển ứng dụng sang nhà cung cấp khác hoặc về On-Premises, kỹ sư buộc phải viết lại một phần lớn mã nguồn.",
                    "<strong>Rủi ro bảo mật & kiểm soát hạn chế (Security & Limited Control):</strong> Do không được truy cập vào nhân hệ điều hành hay phần cứng vật lý, doanh nghiệp không thể cài đặt các phần mềm giám sát an ninh tùy chỉnh chuyên sâu và phải hoàn toàn tin tưởng vào cơ chế bảo mật của bên thứ ba.",
                    "<strong>Vấn đề tương thích hệ thống cũ (Legacy Compatibility):</strong> Các ứng dụng doanh nghiệp lâu năm được thiết kế nguyên khối (Monolithic), phụ thuộc vào hệ thống tệp cục bộ (Local File System) hoặc các giao thức mạng đặc biệt sẽ rất khó chuyển đổi lên môi trường PaaS chuẩn."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC IV: CÁC NỀN TẢNG THỰC TẾ
       ============================ */
    {
      id: "cloud-ch4-s4",
      roman: "IV",
      title: "Khảo sát 4 Nền tảng PaaS Tiêu biểu trong Công nghiệp",
      subsections: [
        {
          id: "cloud-ch4-s4-platforms",
          number: "1",
          title: "GAE, Azure App Services, Red Hat OpenShift & Cloud Foundry",
          parts: [
            {
              id: "cloud-ch4-s4-platforms-p1",
              label: "a",
              title: "So sánh các nền tảng công nghiệp",
              content: [
                {
                  type: "table",
                  headers: ["Nền tảng", "Công nghệ cốt lõi", "Ưu thế vượt trội", "Hạn chế cần lưu ý"],
                  rows: [
                    [
                      "Google App Engine (GAE)",
                      "Hạ tầng máy chủ container của Google",
                      "Tự động co giãn siêu nhanh (từ 0 lên hàng ngàn instance), tích hợp sâu với BigQuery, Datastore, Firebase.",
                      "Bị giới hạn cấu hình môi trường chuẩn; Vendor Lock-in ở các API chuyên biệt."
                    ],
                    [
                      "Microsoft Azure App Service",
                      "Hệ sinh thái dịch vụ đám mây Azure",
                      "Tương thích hoàn hảo với .NET, SQL Server, Visual Studio và Azure Active Directory; hỗ trợ cả Windows & Linux.",
                      "Chi phí có thể tăng cao nhanh chóng khi nâng cấp cấu hình Premium; giao diện quản trị phức tạp."
                    ],
                    [
                      "Red Hat OpenShift",
                      "Kubernetes cấp doanh nghiệp (Enterprise K8s)",
                      "Dựa trên Kubernetes chuẩn công nghiệp, bảo mật cực cao, hỗ trợ cả Public Cloud lẫn Private On-premises.",
                      "Đòi hỏi đội ngũ kỹ sư phải có kiến thức chuyên sâu về Kubernetes; chi phí bản quyền doanh nghiệp đắt."
                    ],
                    [
                      "IBM Cloud Foundry",
                      "Công nghệ nguồn mở Cloud Foundry",
                      "Mô hình trừu tượng hóa cao (`cf push`), quản lý vòng đời ứng dụng hoàn hảo, tích hợp AI Watson.",
                      "Thị phần thu hẹp trước sự phát triển vũ bão của các nền tảng dựa trên Kubernetes."
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
       MỤC V: TỔNG KẾT & TƯƠNG LAI
       ============================ */
    {
      id: "cloud-ch4-s5",
      roman: "V",
      title: "Xu hướng Tương lai: Serverless (FaaS) & Bảng Từ khóa",
      subsections: [
        {
          id: "cloud-ch4-s5-trends",
          number: "1",
          title: "Sự chuyển dịch sang Serverless, Edge Computing & Bảng Tổng kết",
          parts: [
            {
              id: "cloud-ch4-s5-trends-p1",
              label: "a",
              title: "Serverless (FaaS) và điện toán biên",
              content: [
                {
                  type: "paragraph",
                  text: "Tương lai của PaaS gắn liền với sự trừu tượng hóa sâu sắc hơn nữa: <strong>Kiến trúc không máy chủ (Serverless Architecture / Function as a Service - FaaS)</strong> như AWS Lambda, Google Cloud Functions, Azure Functions. Trong mô hình này, người lập trình thậm chí không cần quản lý một ứng dụng chạy thường trực mà chỉ viết các hàm xử lý sự kiện (Event-driven functions), máy chủ chỉ khởi chạy trong mili-giây khi có request đến và tính phí chính xác theo thời gian chạy thực tế."
                },
                {
                  type: "table",
                  headers: ["Từ khóa", "Thuật ngữ tiếng Anh", "Nội dung học thuật cốt lõi"],
                  rows: [
                    ["PaaS", "Platform as a Service", "Nền tảng phát triển, chạy và quản trị ứng dụng không cần quản lý hạ tầng."],
                    ["Khóa nhà cung cấp", "Vendor Lock-in", "Rủi ro bị ràng buộc bởi các API và kiến trúc độc quyền của bên cung cấp."],
                    ["Đường ống CI/CD", "Continuous Integration / Continuous Delivery", "Quy trình tự động hóa kiểm thử, đóng gói và phát hành ứng dụng."],
                    ["Tự động co giãn", "Auto-scaling", "Tự động tăng giảm số lượng instance máy chủ theo lưu lượng tải."],
                    ["Kubernetes", "Container Orchestration Platform", "Chuẩn công nghiệp điều phối container, nền tảng của OpenShift."],
                    ["Serverless / FaaS", "Function as a Service", "Mô hình tính toán kích hoạt theo sự kiện, tính tiền chính xác theo chu kỳ CPU chạy."]
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
