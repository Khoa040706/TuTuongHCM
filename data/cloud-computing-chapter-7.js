/* ============================================================
   GIÁO TRÌNH ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)
   Chương 7: Cloud Data Storage (Lưu Trữ Dữ Liệu Đám Mây)
   Biên soạn chuẩn học thuật theo tài liệu bài giảng chính thức
   Phạm vi đợt 1: Từ Mục I đến Mục IV
   ============================================================ */

export const cloudComputingChapter7 = {
  id: "cloud-ch7",
  title: "Chương 7",
  subtitle: "Cloud Data Storage (Lưu trữ Dữ liệu Đám mây)",
  sections: [
    /* ============================
       MỤC ★: TỔNG QUAN CHƯƠNG (Hero Banner sẽ làm sau cùng)
       ============================ */
    {
      id: "cloud-ch7-s0",
      roman: "★",
      title: "Tổng quan chương: Cloud Data Storage (Lưu trữ Dữ liệu Đám mây)",
      subsections: [
        {
          id: "cloud-ch7-s0-overview",
          number: "0",
          title: "Bản đồ kiến thức cốt lõi & Buồng lái điều phối toàn Chương 7",
          parts: [
            {
              id: "cloud-ch7-s0-p1",
              label: "★",
              title: "Tổng quan kiến trúc lưu trữ dữ liệu đám mây",
              content: [
                {
                  type: "chapter-7-hero-banner"
                },
                {
                  type: "highlight",
                  text: "Chương 7 nghiên cứu toàn diện các giải pháp Lưu trữ dữ liệu từ truyền thống đến hiện đại: Sự tiến hóa từ Centralized Storage đến NAS (File-level) và SAN (Block-level); Kiến trúc 4 tầng Cloud Storage cùng 3 thành phần cốt lõi CSA; 4 xu hướng lưu trữ hiện đại (Unstructured, Object Storage [Data + Metadata + ID], SDS, Hybrid); Phòng tuyến an ninh dữ liệu (3 đe dọa đối ứng 3 biện pháp); Hệ thống sao lưu đám mây 3 bước (Select ➔ Transfer ➔ Store/Manage); 4 Ứng dụng công nghiệp & Tam Hùng Cloud Database (AWS, Azure, GCP); và Block Storage hiệu năng cao (EBS, Persistent Disk, Azure Managed Disks)."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC I: NETWORK STORAGE (LƯU TRỮ MẠNG)
       ============================ */
    {
      id: "cloud-ch7-s1",
      roman: "I",
      title: "Network Storage (Lưu trữ mạng) — Khái niệm & Vai trò",
      subsections: [
        {
          id: "cloud-ch7-s1-1-intro",
          number: "1.1",
          title: "Định nghĩa & Vai trò / Tầm quan trọng của Network Storage",
          parts: [
            {
              id: "cloud-ch7-s1-1-p1",
              label: "1.1.1",
              title: "Định nghĩa Network Storage",
              content: [
                {
                  type: "paragraph",
                  text: "Network storage là phương pháp lưu trữ dữ liệu trên các máy chủ (servers) được kết nối và liên thông với nhau thông qua mạng máy tính."
                },
                {
                  type: "paragraph",
                  text: "Phương thức này cho phép chia sẻ, đồng bộ và quản lý dữ liệu hiệu quả, an toàn giữa nhiều người dùng và thiết bị đầu cuối khác nhau trong tổ chức."
                }
              ]
            },
            {
              id: "cloud-ch7-s1-1-p2",
              label: "1.1.2",
              title: "Vai trò & Tầm quan trọng đối với tổ chức",
              content: [
                {
                  type: "paragraph",
                  text: "Cung cấp giải pháp lưu trữ đáng tin cậy (reliable) và có khả năng mở rộng linh hoạt (scalable) đáp ứng nhu cầu bùng nổ dữ liệu ngày càng tăng của tổ chức."
                },
                {
                  type: "paragraph",
                  text: "Cải thiện vượt bậc hiệu năng (performance), nâng cao năng lực quản trị dữ liệu (data management), thắt chặt bảo mật (security) và giảm thiểu tối đa chi phí vận hành CNTT."
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Khẩu quyết cốt tử Mục I",
                  text: "Cần nhớ: Network storage = nền tảng cơ bản trước khi có Cloud Storage. Mục tiêu: chia sẻ + quản lý dữ liệu qua mạng."
                },
                {
                  type: "micro-quiz",
                  question: "Khái niệm Network Storage (Lưu trữ mạng) được định nghĩa chuẩn xác như thế nào trong giáo trình?",
                  options: [
                    "Lưu trữ dữ liệu trên các máy chủ kết nối qua mạng Internet",
                    "Cài đặt ứng dụng trực tiếp trên từng máy tính cá nhân riêng",
                    "Sử dụng đĩa mềm để sao chép thông tin thủ công giữa các máy",
                    "Ngắt kết nối mạng toàn bộ hệ thống để bảo vệ dữ liệu nội bộ"
                  ],
                  answerIndex: 0,
                  explanation: "Network Storage là phương pháp lưu trữ dữ liệu trên các server được kết nối với nhau qua mạng, cho phép chia sẻ và quản trị dữ liệu hiệu quả giữa nhiều người dùng và thiết bị.",
                  hint: "Từ khóa: 'Lưu trữ trên server kết nối mạng' ➔ Network Storage."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC II: GIAI ĐOẠN ĐẦU CỦA NETWORK STORAGE
       ============================ */
    {
      id: "cloud-ch7-s2",
      roman: "II",
      title: "Giai đoạn đầu của Network Storage (Centralized ➔ NAS ➔ SAN)",
      subsections: [
        {
          id: "cloud-ch7-s2-1-centralized",
          number: "2.1",
          title: "Centralized Storage (Lưu trữ tập trung) & Hạn chế cố hữu",
          parts: [
            {
              id: "cloud-ch7-s2-1-p1",
              label: "2.1.1",
              title: "Khái niệm & Kiến trúc lưu trữ tập trung",
              content: [
                {
                  type: "paragraph",
                  text: "Centralized Storage là mô hình trong đó toàn bộ dữ liệu của tổ chức được lưu trữ tại đúng một vị trí duy nhất trên một máy chủ trung tâm lớn."
                },
                {
                  type: "paragraph",
                  text: "Hệ thống thường sử dụng ổ cứng nội bộ hoặc mảng đĩa gắn trực tiếp vào máy chủ (Direct-Attached Storage - DAS)."
                },
                {
                  type: "highlight",
                  text: "3 Hạn chế cốt tử của Centralized Storage: (1) Khó mở rộng (Ability of extension) do giới hạn khe cắm phần cứng; (2) Nghẽn cổ chai (Efficiency bottleneck) khi nhiều người truy cập cùng lúc; (3) Quản lý tốn công, chi phí cao, dễ mất trắng dữ liệu khi hỏng hóc (Single Point of Failure)."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch7-s2-2-nas-san",
          number: "2.2",
          title: "Tiến hóa lên NAS (Network Attached Storage) & SAN (Storage Area Network)",
          parts: [
            {
              id: "cloud-ch7-s2-2-p1",
              label: "2.2.1",
              title: "NAS (Network Attached Storage) — Cấp độ tệp tin (File-Level)",
              content: [
                {
                  type: "paragraph",
                  text: "NAS là thiết bị lưu trữ chuyên dụng được kết nối trực tiếp vào mạng cục bộ LAN, cho phép người dùng và thiết bị trong mạng truy cập dữ liệu dễ dàng ở cấp độ tệp tin (File-level)."
                },
                {
                  type: "paragraph",
                  text: "Lợi ích vượt trội của NAS: Truy cập dễ dàng (Easy access), chia sẻ tài nguyên linh hoạt (Share resources) và chi phí thấp (Low cost). Đa dạng thiết bị (Mac, Windows, điện thoại, TV, camera) đều có thể truy cập chung."
                }
              ]
            },
            {
              id: "cloud-ch7-s2-2-p2",
              label: "2.2.2",
              title: "SAN (Storage Area Network) — Cấp độ khối (Block-Level)",
              content: [
                {
                  type: "paragraph",
                  text: "SAN là mạng chuyên dụng tốc độ cao kết nối các thiết bị lưu trữ (ổ cứng, mảng đĩa, tape drive) với máy chủ doanh nghiệp qua giao thức Fiber Channel (cáp quang) hoặc iSCSI (IP SAN)."
                },
                {
                  type: "paragraph",
                  text: "Mục đích của SAN: Cung cấp hệ thống lưu trữ tập trung, mở rộng linh hoạt và đạt hiệu năng cực cao ở cấp độ khối (Block-level)."
                },
                {
                  type: "paragraph",
                  text: "3 Thành phần kiến trúc chính của SAN: (1) Host Layer (Lớp máy chủ gắn card HBA); (2) Fabric Layer (Lớp mạng chuyển mạch trung gian - SAN Switch quang); (3) Storage Layer (Lớp lưu trữ vật lý mảng đĩa)."
                },
                {
                  type: "paragraph",
                  text: "Ưu điểm của SAN: Nâng cao tính sẵn sàng của ứng dụng, hiệu năng cực đại, đơn giản hóa quản lý tập trung. Nhược điểm: Chi phí đầu tư ban đầu rất cao, cấu hình phức tạp, phụ thuộc nhà cung cấp, tiêu tốn nhiều điện năng và không gian."
                },
                {
                  type: "nas-vs-san-evolution-duel"
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "Khẩu quyết vàng đối soát thi cử NAS vs SAN",
                  text: "NAS: Kết nối mạng LAN • Truy cập File-level • Chi phí Thấp • Cấu hình Đơn giản. SAN: Mạng tốc độ cao riêng (Fiber Channel/iSCSI) • Truy cập Block-level • Chi phí Cao • Cấu hình Phức tạp."
                },
                {
                  type: "micro-quiz",
                  question: "Đặc điểm khác biệt bản chất nhất giữa NAS và SAN về cấp độ truy cập dữ liệu trong đề thi là gì?",
                  options: [
                    "NAS truy cập File-level qua LAN, còn SAN dùng Block-level mạng riêng",
                    "NAS truy cập Block-level mạng quang, SAN dùng File-level qua mạng LAN",
                    "NAS dùng giao thức Fiber Channel, còn SAN dùng cáp mạng Ethernet LAN",
                    "NAS chỉ dành riêng cho Database lớn, còn SAN chỉ dùng chia sẻ tệp tin"
                  ],
                  answerIndex: 0,
                  explanation: "NAS hoạt động ở cấp độ tệp tin (File-level) thông qua mạng LAN thông thường, trong khi SAN hoạt động ở cấp độ khối (Block-level) thông qua mạng truyền dẫn tốc độ cao riêng biệt (Fiber Channel hoặc iSCSI).",
                  hint: "Khẩu quyết: 'NAS = File-level qua LAN; SAN = Block-level qua mạng quang riêng'."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC III: CLOUD STORAGE (KHÁI NIỆM, KIẾN TRÚC & XU HƯỚNG)
       ============================ */
    {
      id: "cloud-ch7-s3",
      roman: "III",
      title: "Cloud Storage — Khái niệm, Kiến trúc & Xu hướng hiện đại",
      subsections: [
        {
          id: "cloud-ch7-s3-1-cloud-storage-core",
          number: "3.1",
          title: "Sự ra đời, 3 Lợi ích lớn & Kiến trúc 4 tầng Cloud Storage",
          parts: [
            {
              id: "cloud-ch7-s3-1-p1",
              label: "3.1.1",
              title: "Sự ra đời, phát triển & 3 Lợi ích (Benefits) của Cloud Storage",
              content: [
                {
                  type: "paragraph",
                  text: "Cloud Storage xuất hiện vào cuối những năm 2000s với các dịch vụ tiên phong: Amazon S3 (2006), Google Cloud Storage và Microsoft Azure Blob Storage."
                },
                {
                  type: "paragraph",
                  text: "Động lực phát triển: Nhu cầu lưu trữ và xử lý dữ liệu lớn (Big Data) bùng nổ kết hợp với sự hoàn thiện của hạ tầng ảo hóa đám mây."
                },
                {
                  type: "paragraph",
                  text: "3 Lợi ích lớn: (1) Khả năng mở rộng linh hoạt (Ability of extension); (2) Truy cập mọi lúc, mọi nơi qua Internet (Access anytime, anywhere); (3) Tiết kiệm chi phí đầu tư ban đầu (Cost savings)."
                }
              ]
            },
            {
              id: "cloud-ch7-s3-1-p2",
              label: "3.1.2",
              title: "Kiến trúc 4 lớp xếp chồng & 3 Thành phần kiến trúc CSA",
              content: [
                {
                  type: "paragraph",
                  text: "Kiến trúc Cloud Storage được phân tầng thành 4 lớp từ trên xuống dưới: (1) Client Layer (Browser, App, API, CLI); (2) Access Layer (Auth, HTTPS, REST API); (3) Service Layer (Object Management, Metadata, ACL); (4) Storage Infrastructure (Servers, Disks, Replication)."
                },
                {
                  type: "paragraph",
                  text: "3 Thành phần kiến trúc cốt lõi (Cloud Storage Architecture - CSA): (1) Storage Servers: Lưu dữ liệu thực tế và xử lý I/O dung lượng lớn; (2) Data Transfer Network: Mạng truyền dữ liệu nhanh, an toàn, băng thông cao, độ trễ thấp; (3) Management Services: Công cụ phần mềm quản lý tài nguyên, theo dõi hiệu năng và cảnh báo sự cố."
                },
                {
                  type: "cloud-storage-architecture-xray"
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch7-s3-2-mechanisms-trends",
          number: "3.2",
          title: "Cơ chế hoạt động (Upload phân tán) & 4 Xu hướng lưu trữ hiện đại",
          parts: [
            {
              id: "cloud-ch7-s3-2-p1",
              label: "3.2.1",
              title: "Cơ chế hoạt động của Cloud Storage (Quy trình Upload 3 bước)",
              content: [
                {
                  type: "paragraph",
                  text: "Quy trình upload dữ liệu gồm 3 bước: (1) Bước 1: Người dùng upload dữ liệu qua giao diện người dùng (User interface / REST API); (2) Bước 2: Dữ liệu được băm nhỏ, phân tán và sao lưu (backup/replication) trên nhiều server nhằm đảm bảo độ sẵn sàng (availability) và an toàn (security); (3) Bước 3: Người dùng truy cập dữ liệu từ bất kỳ đâu có Internet qua cloud interface."
                }
              ]
            },
            {
              id: "cloud-ch7-s3-2-p2",
              label: "3.2.2",
              title: "4 Xu hướng lưu trữ hiện đại: Unstructured, Object, SDS & Hybrid",
              content: [
                {
                  type: "paragraph",
                  text: "1. Unstructured Storage (Phi cấu trúc): Không theo cấu trúc hàng/cột (text, ảnh, video...). Ưu điểm là chứa được mọi loại file linh hoạt nhưng nhược điểm là khó tìm kiếm và không dùng câu lệnh SQL truyền thống (Ví dụ: Google Photos, YouTube, Dropbox)."
                },
                {
                  type: "paragraph",
                  text: "2. Object Storage (Lưu trữ đối tượng): Dữ liệu được đóng gói thành từng Object gồm đúng 3 thành phần: data + metadata + unique ID. Dễ mở rộng vô hạn, giá rẻ, quản lý thông minh nhờ metadata nhưng không phù hợp truy cập I/O cao (Ví dụ: AWS S3, Google Cloud Storage, Azure Blob)."
                },
                {
                  type: "paragraph",
                  text: "3. Software-Defined Storage (SDS): Tách biệt phần mềm quản trị khỏi phần cứng vật lý. Tăng tính linh hoạt, không phụ thuộc nhà cung cấp thiết bị độc quyền nhưng cấu hình phức tạp (Ví dụ: Ceph, OpenStack Swift, VMware vSAN)."
                },
                {
                  type: "paragraph",
                  text: "4. Hybrid Storage (Lưu trữ lai): Kết hợp Cloud Storage với On-premises Storage. Cân bằng tối ưu giữa bảo mật, chi phí và hiệu năng (Ví dụ: AWS Outposts, Azure Stack, Google Anthos). Rất phù hợp cho tổ chức tài chính, y tế, chính phủ: dữ liệu nhạy cảm lưu on-premises, dữ liệu sao lưu đưa lên cloud."
                },
                {
                  type: "callout",
                  variant: "danger",
                  title: "Khẩu quyết vàng thi cử Mục III",
                  text: "Cần nhớ: Object Storage = data + metadata + ID (khác hẳn File storage truyền thống). SDS = tách phần mềm khỏi phần cứng."
                },
                {
                  type: "object-storage-data-flow-simulator"
                },
                {
                  type: "micro-quiz",
                  question: "Theo chuẩn giáo trình, cấu trúc của một đối tượng trong mô hình Object Storage bao gồm những thành phần nào?",
                  options: [
                    "Dữ liệu thô (Data), siêu dữ liệu (Metadata) và mã định danh duy nhất (ID)",
                    "Tên thư mục mẹ (Parent), quyền truy cập (ACL) và nội dung tệp tin phân cấp",
                    "Khối phân vùng vật lý (Sector), rãnh từ (Track) và bảng chỉ mục tệp tin FAT",
                    "Mã hóa khóa công khai (RSA), chứng chỉ số SSL và đường dẫn tệp tin cục bộ"
                  ],
                  answerIndex: 0,
                  explanation: "Trong mô hình Object Storage, dữ liệu không được tổ chức theo cây thư mục phân cấp mà được đóng gói thành đối tượng độc lập gồm đúng 3 thành phần: Data (dữ liệu thô) + Metadata (siêu dữ liệu mô tả) + Unique ID (mã định danh duy nhất toàn cầu).",
                  hint: "Khẩu quyết vàng: 'Object Storage = Data + Metadata + ID'."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC IV: BẢO MẬT DỮ LIỆU CLOUD STORAGE
       ============================ */
    {
      id: "cloud-ch7-s4",
      roman: "IV",
      title: "Bảo mật dữ liệu Cloud Storage (Data Security)",
      subsections: [
        {
          id: "cloud-ch7-s4-1-threats-protection",
          number: "4.1",
          title: "3 Mối đe dọa, 3 Biện pháp bảo vệ, Giám sát IDS & Tuân thủ quy định",
          parts: [
            {
              id: "cloud-ch7-s4-1-p1",
              label: "4.1.1",
              title: "3 Mối đe dọa an ninh (Threats) & 3 Biện pháp bảo vệ (Protection)",
              content: [
                {
                  type: "paragraph",
                  text: "3 Mối đe dọa an ninh lớn đối với dữ liệu đám mây: (1) Cyber attack (Tấn công mạng như Ransomware, DDoS); (2) Data leak (Rò rỉ dữ liệu do cấu hình sai quyền truy cập public); (3) Lost data (Mất mát dữ liệu do thiên tai, lỗi phần cứng hoặc xóa nhầm)."
                },
                {
                  type: "paragraph",
                  text: "3 Biện pháp bảo vệ dữ liệu trọng yếu: (1) Data Encryption: Mã hóa dữ liệu khi lưu trữ (at-rest) và khi truyền tải trên mạng (in-transit); (2) Access Control: Kiểm soát truy cập chặt chẽ theo nguyên tắc đặc quyền tối thiểu (IAM, RBAC, ACL); (3) Backup and Recovery: Sao lưu định kỳ và xây dựng quy trình phục hồi sau thảm họa."
                }
              ]
            },
            {
              id: "cloud-ch7-s4-1-p2",
              label: "4.1.2",
              title: "Giám sát phát hiện xâm nhập (IDS) & Tuân thủ quy định (Compliance)",
              content: [
                {
                  type: "paragraph",
                  text: "Hệ thống giám sát & phát hiện đe dọa: (1) Monitoring Systems: Giám sát tài nguyên và lưu lượng hệ thống 24/7; (2) Intrusion Detection (IDS): Phát hiện các hành vi quét cổng và đột nhập bất thường; (3) Log Analysis: Phân tích nhật ký truy cập để điều tra và truy vết sự cố."
                },
                {
                  type: "paragraph",
                  text: "Tuân thủ quy định (Compliance): Áp dụng nghiêm ngặt các tiêu chuẩn và quy định bảo mật quốc tế (GDPR bảo vệ dữ liệu cá nhân EU, HIPAA bảo mật hồ sơ y tế, ISO 27001 hệ thống quản lý an toàn thông tin) nhằm bảo đảm tính tuân thủ pháp lý khi lưu trữ dữ liệu trên cloud."
                },
                {
                  type: "callout",
                  variant: "success",
                  title: "Khẩu quyết vàng thi cử Mục IV",
                  text: "Cần nhớ: 3 đe dọa chính (cyber attack, data leak, lost data) ➔ 3 biện pháp chính (encryption, access control, backup/recovery)."
                },
                {
                  type: "cloud-data-security-shield"
                },
                {
                  type: "micro-quiz",
                  question: "Ba biện pháp bảo vệ dữ liệu đám mây chính được nhấn mạnh trong giáo trình để đối phó với các mối đe dọa là gì?",
                  options: [
                    "Mã hóa dữ liệu (Encryption), kiểm soát truy cập (Access Control) và sao lưu",
                    "Tắt toàn bộ cổng mạng, ngắt kết nối Internet và sao chép thủ công định kỳ",
                    "Cài đặt phần mềm diệt virus miễn phí, xóa bỏ nhật ký hệ thống và đổi tên ổ",
                    "Nâng cấp dung lượng RAM máy chủ, bổ sung card đồ họa và thay thế nguồn điện"
                  ],
                  answerIndex: 0,
                  explanation: "Giáo trình chỉ rõ bộ ba biện pháp bảo vệ dữ liệu đám mây cốt lõi bao gồm: Data Encryption (mã hóa dữ liệu), Access Control (kiểm soát quyền truy cập) và Backup and Recovery (sao lưu và phục hồi dữ liệu).",
                  hint: "Khẩu quyết: '3 đe dọa chính ➔ 3 biện pháp: Encryption, Access Control, Backup/Recovery'."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC V: CLOUD-BASED BACKUP SYSTEM (HỆ THỐNG SAO LƯU TRÊN CLOUD)
       ============================ */
    {
      id: "cloud-ch7-s5",
      roman: "V",
      title: "Cloud-based Backup System (Hệ thống sao lưu trên Cloud)",
      subsections: [
        {
          id: "cloud-ch7-s5-1-components",
          number: "5.1",
          title: "Thành phần chính của hệ thống sao lưu trên Cloud",
          parts: [
            {
              id: "cloud-ch7-s5-1-p1",
              label: "5.1.1",
              title: "3 Thành phần cốt lõi cấu thành Cloud Backup System",
              content: [
                {
                  type: "paragraph",
                  text: "Hệ thống sao lưu trên đám mây (Cloud-based Backup System) là giải pháp bảo vệ dữ liệu sống còn của doanh nghiệp, gồm 3 thành phần chính vận hành đồng bộ:"
                },
                {
                  type: "list",
                  items: [
                    "Data Sources: Nguồn dữ liệu cần backup (bao gồm cơ sở dữ liệu quan hệ/NoSQL, ảnh máy ảo VMDK/VHDX, thư mục tệp tin tài liệu doanh nghiệp và các dịch vụ ứng dụng SaaS).",
                    "Cloud Infrastructure: Hạ tầng cloud lưu bản backup (kho lưu trữ đám mây an toàn, co giãn đàn hồi và nhân bản đa vùng địa lý như AWS S3/Glacier, Azure Blob, Google Cloud Storage).",
                    "Backup Management Software: Phần mềm quản lý sao lưu (chịu trách nhiệm lập lịch tự động, nén dữ liệu, khử trùng lặp Deduplication, quản lý khóa mã hóa và điều phối quy trình khôi phục sự cố)."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch7-s5-2-process",
          number: "5.2",
          title: "Quy trình sao lưu dữ liệu (Cloud Data Backup Process)",
          parts: [
            {
              id: "cloud-ch7-s5-2-p1",
              label: "5.2.1",
              title: "Quy trình 3 bước sao lưu chuẩn giáo trình",
              content: [
                {
                  type: "paragraph",
                  text: "Quy trình sao lưu dữ liệu lên đám mây diễn ra tuần tự qua 3 bước nghiêm ngặt:"
                },
                {
                  type: "list",
                  items: [
                    "Bước 1: Select backup data (Chọn dữ liệu cần sao lưu) — Quản trị viên hoặc chính sách tự động lọc các cơ sở dữ liệu, phân vùng ổ đĩa hoặc thư mục tệp tin cần bảo vệ; xác định chế độ sao lưu toàn phần (Full), vi sai (Differential) hay tăng dần (Incremental).",
                    "Bước 2: Transfer data to the cloud (Truyền dữ liệu lên cloud) — Dữ liệu được nén, khử trùng lặp để giảm thiểu dung lượng, sau đó truyền qua đường hầm mạng tốc độ cao được mã hóa bảo mật SSL/TLS (In-transit Encryption).",
                    "Bước 3: Store and manage backup data (Lưu trữ & quản lý bản backup) — Bản sao lưu được ghi an toàn vào kho lưu trữ đa vùng, áp dụng chính sách vòng đời (Retention Policy), phân tầng lưu trữ (Hot/Cool/Cold/Archive) và thường xuyên kiểm thử khôi phục."
                  ]
                },
                {
                  type: "callout",
                  variant: "danger",
                  title: "Khẩu quyết vàng thi cử Mục V",
                  text: "Cần nhớ: Quy trình 3 bước chuẩn: Select ➔ Transfer ➔ Store/Manage."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch7-s5-3-benefits",
          number: "5.3",
          title: "Lợi ích vượt trội của Cloud-based Backup",
          parts: [
            {
              id: "cloud-ch7-s5-3-p1",
              label: "5.3.1",
              title: "Bộ ba giá trị cốt lõi",
              content: [
                {
                  type: "paragraph",
                  text: "So với phương pháp sao lưu băng từ (Tape Backup) hoặc tủ đĩa vật lý truyền thống, Cloud Backup mang lại 3 lợi ích vượt trội:"
                },
                {
                  type: "list",
                  items: [
                    "High Availability (Tính sẵn sàng cao): Bản sao lưu được lưu trữ trên hạ tầng đám mây phân tán, sẵn sàng phục hồi mọi lúc mọi nơi ngay cả khi toàn bộ trung tâm dữ liệu chính bị tê liệt.",
                    "Data Security (Bảo mật dữ liệu): Áp dụng mã hóa kép tiêu chuẩn quân sự (cả trên đường truyền lẫn khi lưu trữ) cùng cơ chế lưu trữ bất biến (Immutable WORM) chống mã độc tống tiền Ransomware.",
                    "Cost Efficiency (Hiệu quả chi phí): Chuyển đổi hoàn toàn chi phí đầu tư thiết bị vật lý tốn kém (CAPEX) sang chi phí vận hành theo nhu cầu thực tế (OPEX), loại bỏ gánh nặng bảo trì phần cứng dự phòng."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch7-s5-4-challenges-solutions",
          number: "5.4",
          title: "Thách thức & Giải pháp đối ứng",
          parts: [
            {
              id: "cloud-ch7-s5-4-p1",
              label: "5.4.1",
              title: "Ma trận Thách thức & Giải pháp chuẩn giáo trình",
              content: [
                {
                  type: "table",
                  headers: ["Thách thức (Challenges)", "Giải pháp (Solutions)"],
                  rows: [
                    ["Data security (Bảo mật dữ liệu trước nguy cơ nghe lén và rò rỉ)", "Encryption and security (Mã hóa đầu cuối và kiểm soát quyền truy cập nghiêm ngặt)"],
                    ["Regulatory compliance (Tuân thủ quy định pháp lý và tắc nghẽn đường truyền)", "Transport Optimization + Management and monitoring (Tối ưu hóa đường truyền mạng + Quản trị và giám sát kiểm toán liên tục)"]
                  ]
                },
                {
                  type: "cloud-backup-pipeline-simulator"
                },
                {
                  type: "micro-quiz",
                  question: "Theo chuẩn giáo trình, thứ tự 3 bước chính xác trong quy trình sao lưu dữ liệu lên Cloud (Cloud Data Backup Process) là gì?",
                  options: [
                    "Select backup data ➔ Transfer data to the cloud ➔ Store and manage backup data",
                    "Transfer data to the cloud ➔ Select backup data ➔ Store and manage backup data",
                    "Store and manage backup data ➔ Select backup data ➔ Transfer data to the cloud",
                    "Encrypt backup data ➔ Compress backup data ➔ Delete original data sources"
                  ],
                  answerIndex: 0,
                  explanation: "Giáo trình quy định chuẩn xác quy trình 3 bước sao lưu dữ liệu: Bước 1: Select backup data (chọn dữ liệu cần sao lưu) ➔ Bước 2: Transfer data to the cloud (truyền dữ liệu lên cloud) ➔ Bước 3: Store and manage backup data (lưu trữ & quản lý bản backup).",
                  hint: "Khẩu quyết: 'Select ➔ Transfer ➔ Store/Manage'."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VI: CLOUD STORAGE CHO INDUSTRY & DATABASE SOLUTIONS
       ============================ */
    {
      id: "cloud-ch7-s6",
      roman: "VI",
      title: "Cloud Storage cho Industry & Database Solutions",
      subsections: [
        {
          id: "cloud-ch7-s6-1-industry",
          number: "6.1",
          title: "Cloud Storage cho ngành công nghiệp (Industry)",
          parts: [
            {
              id: "cloud-ch7-s6-1-p1",
              label: "6.1.1",
              title: "Lợi ích & 4 Ứng dụng thực tế trong công nghiệp",
              content: [
                {
                  type: "paragraph",
                  text: "Lợi ích cốt lõi của Cloud Storage đối với các ngành công nghiệp:"
                },
                {
                  type: "list",
                  items: [
                    "Khả năng mở rộng (Scalability): Đáp ứng lưu lượng dữ liệu đột biến từ các chuỗi nhà máy và cảm biến IoT.",
                    "Tiết kiệm chi phí (Cost Efficiency): Tối ưu hóa chi phí lưu trữ hạ tầng và nhân sự vận hành.",
                    "Truy cập linh hoạt (Flexible Access): Cho phép chuyên gia và kỹ sư truy xuất dữ liệu dây chuyền từ bất kỳ đâu.",
                    "Tăng cường bảo mật (Enhanced Security): Bảo vệ bí mật quy trình sản xuất và sở hữu trí tuệ doanh nghiệp."
                  ]
                },
                {
                  type: "paragraph",
                  text: "4 Ứng dụng thực tế tiêu biểu trong chuyển đổi số công nghiệp:"
                },
                {
                  type: "list",
                  items: [
                    "Quản lý chuỗi cung ứng (Supply Chain Management): Theo dõi đơn hàng, vị trí tàu xe và kho vận toàn cầu theo thời gian thực.",
                    "Quản lý sản xuất (Production Management): Giám sát trạng thái hoạt động của dây chuyền lắp ráp và quản lý quy trình sản xuất tự động.",
                    "Bảo trì dự đoán (Predictive Maintenance): Thu thập và phân tích dữ liệu rung động/nhiệt độ từ cảm biến máy móc để dự báo hư hỏng trước khi sự cố xảy ra.",
                    "Phân tích dữ liệu lớn (Big Data Analytics): Xây dựng hồ dữ liệu (Data Lake) công nghiệp để khai phá insight kinh doanh và dự báo nhu cầu thị trường."
                  ]
                }
              ]
            },
            {
              id: "cloud-ch7-s6-1-p2",
              label: "6.1.2",
              title: "Thách thức công nghiệp & Giải pháp công cụ hỗ trợ",
              content: [
                {
                  type: "paragraph",
                  text: "4 Thách thức lớn khi triển khai lưu trữ đám mây công nghiệp: (1) Bảo mật dữ liệu (Data Security); (2) Độ trễ (Latency) khi truyền lượng lớn dữ liệu cảm biến; (3) Tuân thủ quy định (Regulatory Compliance); (4) Khả năng tích hợp (Integration) với hệ thống cũ SCADA/ERP."
                },
                {
                  type: "paragraph",
                  text: "4 Giải pháp & công cụ hỗ trợ chính: (1) Cloud storage providers uy tín; (2) Data management & security tools chuyên sâu; (3) Backup and recovery strategy toàn diện; (4) Integrated solution (giải pháp tích hợp API chuẩn hóa)."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch7-s6-2-database",
          number: "6.2",
          title: "Cloud-based Database Solutions (Giải pháp cơ sở dữ liệu trên Cloud)",
          parts: [
            {
              id: "cloud-ch7-s6-2-p1",
              label: "6.2.1",
              title: "Tam Hùng Cloud Database & Công cụ hỗ trợ",
              content: [
                {
                  type: "paragraph",
                  text: "3 Nhà cung cấp dịch vụ cơ sở dữ liệu hàng đầu trên nền tảng Cloud (3 'ông lớn'):"
                },
                {
                  type: "list",
                  items: [
                    "Amazon Web Services (AWS): Tiên phong với Amazon RDS, Aurora, DynamoDB, Redshift.",
                    "Microsoft Azure: Tối ưu doanh nghiệp với Azure SQL Database, Azure Cosmos DB, Azure Synapse Analytics.",
                    "Google Cloud Platform (GCP): Xuất sắc về Big Data/AI với Cloud SQL, Cloud Spanner, Google BigQuery, Cloud Firestore."
                  ]
                },
                {
                  type: "paragraph",
                  text: "Công cụ & giải pháp hỗ trợ vận hành Database trên Cloud:"
                },
                {
                  type: "list",
                  items: [
                    "Database management tools: Bộ công cụ quản trị, giám sát và tối ưu hóa truy vấn chuyên dụng từ AWS, Azure, Google Cloud.",
                    "Data backup and recovery strategy: Chiến lược sao lưu và phục hồi thảm họa trọng tâm ➔ regular backups (sao lưu định kỳ tự động).",
                    "Security and compliance solutions: Giải pháp bảo mật tường lửa, mã hóa dữ liệu cơ sở dữ liệu và kiểm toán tuân thủ."
                  ]
                },
                {
                  type: "callout",
                  variant: "danger",
                  title: "Khẩu quyết vàng thi cử Mục VI",
                  text: "Cần nhớ: 3 'ông lớn' cung cấp cloud database: AWS — Azure — GCP."
                },
                {
                  type: "industry-and-cloud-database-matrix"
                },
                {
                  type: "micro-quiz",
                  question: "Theo giáo trình, 3 'ông lớn' hàng đầu thế giới cung cấp dịch vụ Database trên nền tảng Cloud là ai?",
                  options: [
                    "Amazon Web Services (AWS) — Microsoft Azure — Google Cloud Platform (GCP)",
                    "IBM Cloud — Oracle Cloud Infrastructure — Alibaba Cloud Enterprise",
                    "Cisco Systems — Huawei Cloud — Tencent Cloud Solutions",
                    "VMware vSphere — Red Hat OpenShift — Docker Swarm Platform"
                  ],
                  answerIndex: 0,
                  explanation: "Giáo trình nêu rõ 3 nhà cung cấp dịch vụ Database trên Cloud lớn nhất ('ông lớn') gồm: Amazon Web Services (AWS), Microsoft Azure và Google Cloud Platform (GCP).",
                  hint: "Khẩu quyết: '3 ông lớn cloud database: AWS - Azure - GCP'."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VII: BLOCK STORAGE TRÊN NỀN TẢNG CLOUD COMPUTING
       ============================ */
    {
      id: "cloud-ch7-s7",
      roman: "VII",
      title: "Block Storage trên nền tảng Cloud Computing",
      subsections: [
        {
          id: "cloud-ch7-s7-1-definition",
          number: "7.1",
          title: "Định nghĩa & Bản chất của Block Storage",
          parts: [
            {
              id: "cloud-ch7-s7-1-p1",
              label: "7.1.1",
              title: "Cơ chế Khối & Mã định danh duy nhất (Unique Identifier)",
              content: [
                {
                  type: "paragraph",
                  text: "Block Storage (Lưu trữ cấp khối) là mô hình lưu trữ dữ liệu dưới dạng các block (khối) riêng lẻ có kích thước cố định, trong đó mỗi block sở hữu một unique identifier (mã định danh duy nhất)."
                },
                {
                  type: "paragraph",
                  text: "Cơ chế này cho phép hệ điều hành truy cập và quản lý dữ liệu cực kỳ nhanh, linh hoạt ở mức I/O thô, không bị ràng buộc bởi tầng cây thư mục hay cấu trúc tệp tin."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch7-s7-2-popular-types",
          number: "7.2",
          title: "Các loại Block Storage phổ biến trên Cloud",
          parts: [
            {
              id: "cloud-ch7-s7-2-p1",
              label: "7.2.1",
              title: "Bộ ba dịch vụ đĩa khối hàng đầu",
              content: [
                {
                  type: "paragraph",
                  text: "3 Dịch vụ Block Storage tiêu biểu được giáo trình chỉ định:"
                },
                {
                  type: "list",
                  items: [
                    "Amazon Elastic Block Store (EBS): Cung cấp các khối lưu trữ bền vững gắn liền với máy ảo Amazon EC2.",
                    "Google Persistent Disk: Dịch vụ đĩa khối bền vững gắn vào máy ảo Google Compute Engine với độ tin cậy cực cao.",
                    "Microsoft Azure Managed Disks: Các ổ đĩa khối được quản lý tự động gắn liền với Azure Virtual Machines."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch7-s7-3-benefits",
          number: "7.3",
          title: "Lợi ích cốt lõi (Benefits)",
          parts: [
            {
              id: "cloud-ch7-s7-3-p1",
              label: "7.3.1",
              title: "4 Lợi thế vượt trội của Block Storage",
              content: [
                {
                  type: "list",
                  items: [
                    "Hiệu suất cao (High Performance): Tốc độ IOPS cực cao, độ trễ đọc/ghi tính bằng mili-giây, đáp ứng các tác vụ ngẫu nhiên tần suất lớn.",
                    "Khả năng mở rộng (Scalability): Tăng dung lượng và tốc độ I/O độc lập mà không cần khởi động lại máy ảo.",
                    "Tính sẵn sàng và độ bền (Availability and Durability): Tự động sao chép phân tán trong vùng khả dụng (Availability Zone), hạn chế tối đa rủi ro hỏng đĩa.",
                    "Tích hợp và tương thích (Integration and Compatibility): Định dạng phân vùng (NTFS, EXT4, XFS) tương thích 100% với mọi hệ điều hành như một ổ đĩa vật lý thông thường."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch7-s7-4-applications",
          number: "7.4",
          title: "Ứng dụng thực tế (Applications)",
          parts: [
            {
              id: "cloud-ch7-s7-4-p1",
              label: "7.4.1",
              title: "3 Lĩnh vực ứng dụng cốt lõi",
              content: [
                {
                  type: "list",
                  items: [
                    "Lưu trữ cơ sở dữ liệu (Database Storage): Nền tảng bắt buộc cho các hệ CSDL quan hệ và NoSQL đòi hỏi ghi đè từng block dữ liệu ngẫu nhiên liên tục.",
                    "Lưu trữ máy ảo (Virtual Machine Storage): Đóng vai trò là Boot Volume lưu trữ hệ điều hành và tệp tin hoán đổi hệ thống (Swap).",
                    "Lưu trữ ứng dụng doanh nghiệp (Enterprise Application Storage): Phục vụ các hệ thống ERP, SAP, CRM đòi hỏi tính nhất quán dữ liệu tuyệt đối."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch7-s7-5-challenges-solutions",
          number: "7.5",
          title: "Thách thức & Giải pháp đối ứng",
          parts: [
            {
              id: "cloud-ch7-s7-5-p1",
              label: "7.5.1",
              title: "Ma trận 4 Cặp Thách Thức — Giải Pháp",
              content: [
                {
                  type: "table",
                  headers: ["Thách thức (Challenges)", "Giải pháp (Solutions)"],
                  rows: [
                    ["Bảo mật dữ liệu (Data Security)", "Mã hóa dữ liệu (Data Encryption)"],
                    ["Hiệu suất & độ trễ (Performance & Latency)", "Sao lưu và phục hồi (Backup and Recovery)"],
                    ["Quản lý & tối ưu chi phí (Cost Management)", "Quản lý tài nguyên (Resource Management)"],
                    ["Tuân thủ quy định (Regulatory Compliance)", "Đảm bảo tuân thủ (Compliance Assurance)"]
                  ]
                },
                {
                  type: "callout",
                  variant: "danger",
                  title: "Khẩu quyết vàng thi cử Mục VII",
                  text: "Cần nhớ: Block Storage = dữ liệu chia thành block + ID riêng ➔ nhanh, linh hoạt, phù hợp Database & Virtual Machine."
                },
                {
                  type: "block-storage-deep-dive-explorer"
                },
                {
                  type: "micro-quiz",
                  question: "Bản chất cốt lõi của Block Storage là gì và nó phù hợp nhất cho các kịch bản ứng dụng nào?",
                  options: [
                    "Dữ liệu chia thành các block riêng lẻ có unique identifier, phù hợp cho Database và Virtual Machine",
                    "Dữ liệu lưu trữ theo dạng cây thư mục phân cấp, phù hợp cho chia sẻ tệp tin văn phòng mạng LAN",
                    "Dữ liệu đóng gói thành đối tượng gồm siêu dữ liệu mô tả, phù hợp cho website lưu ảnh và video tĩnh",
                    "Dữ liệu được nén thành các tệp ISO lưu trữ trên đĩa quang, phù hợp cho việc sao lưu dữ liệu lạnh lâu năm"
                  ],
                  answerIndex: 0,
                  explanation: "Định nghĩa chuẩn giáo trình: Block storage lưu dữ liệu dưới dạng các block riêng lẻ, mỗi block có unique identifier, cho phép truy cập nhanh và linh hoạt. Khẩu quyết: Phù hợp nhất cho Database & Virtual Machine.",
                  hint: "Khẩu quyết: 'Block Storage = block + ID riêng ➔ nhanh, linh hoạt, Database & Virtual Machine'."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VIII: 🔑 TỔNG KẾT NHANH TOÀN CHƯƠNG 7
       ============================ */
    {
      id: "cloud-ch7-s8",
      roman: "VIII",
      title: "🔑 Tổng kết nhanh toàn chương 7",
      subsections: [
        {
          id: "cloud-ch7-s8-1-summary",
          number: "8.1",
          title: "Hệ thống hóa toàn diện 8 trụ cột tri thức Chương 7",
          parts: [
            {
              id: "cloud-ch7-s8-1-p1",
              label: "8.1.1",
              title: "6 Ý cốt lõi tóm lược toàn bộ chương theo tài liệu bài giảng",
              content: [
                {
                  type: "list",
                  items: [
                    "Network Storage ➔ Tiền đề của Cloud Storage: Sự tiến hóa từ Centralized Storage đến NAS (truy cập cấp độ tệp tin File-level qua mạng LAN) và SAN (truy cập cấp độ khối Block-level qua mạng tốc độ cao Fiber Channel/iSCSI).",
                    "Cloud Storage: Kiến trúc 4 lớp chuẩn mực (Client Layer ➔ Access Layer ➔ Service Layer ➔ Storage Infrastructure); cùng 4 xu hướng lưu trữ hiện đại gồm Unstructured Data, Object Storage (Data + Metadata + ID), Software-Defined Storage (SDS), Hybrid Storage.",
                    "Bảo mật dữ liệu: 3 Mối đe dọa lớn (cyber attack, data leak, lost data) đối ứng với 3 Biện pháp bảo vệ trọng yếu (Data Encryption, Access Control, Backup and Recovery); kết hợp hệ thống phát hiện xâm nhập IDS và tuân thủ các chuẩn quốc tế (GDPR, HIPAA, ISO 27001).",
                    "Cloud-based Backup System: Gồm 3 thành phần chính (Data Sources, Cloud Infrastructure, Backup Management Software) vận hành theo quy trình 3 bước chuẩn: Select ➔ Transfer ➔ Store/Manage.",
                    "Industry & Database Solutions: 3 nhà cung cấp dịch vụ Database trên Cloud lớn nhất (AWS, Azure, GCP); ứng dụng Cloud Storage sâu rộng vào chuỗi cung ứng, sản xuất, bảo trì dự đoán và phân tích dữ liệu lớn.",
                    "Block Storage: Dữ liệu chia thành block riêng lẻ kèm unique identifier, hiệu năng cao, độ trễ mili-giây, tối ưu cho Database & Virtual Machine (tiêu biểu gồm Amazon EBS, Google Persistent Disk, Microsoft Azure Managed Disks)."
                  ]
                },
                {
                  type: "chapter-7-master-key-terms-matrix"
                },
                {
                  type: "micro-quiz",
                  question: "Khẳng định nào sau đây là ĐÚNG NHẤT khi đối sánh giữa các mô hình lưu trữ đã học trong Chương 7?",
                  options: [
                    "NAS hoạt động ở file-level trên LAN; SAN và Block Storage hoạt động ở block-level hiệu năng cao cho DB/VM; Object Storage lưu data kèm metadata và ID",
                    "NAS hoạt động ở block-level cho CSDL lớn; SAN hoạt động ở file-level qua mạng LAN; Block Storage chỉ dùng cho việc sao lưu ảnh tĩnh",
                    "Object Storage có tốc độ IOPS ngẫu nhiên cao hơn Block Storage nên được ưu tiên hàng đầu làm Boot Volume cho máy ảo",
                    "Quy trình sao lưu trên Cloud bắt đầu bằng việc truyền dữ liệu (Transfer), sau đó mới lựa chọn dữ liệu (Select) và lưu trữ (Store)"
                  ],
                  answerIndex: 0,
                  explanation: "Tổng kết chuẩn xác toàn chương: NAS là file-level trên mạng LAN; SAN và Cloud Block Storage là block-level với hiệu năng I/O cực cao cho Database & VM; Object Storage là mô hình phẳng lưu data + metadata + unique ID không giới hạn dung lượng.",
                  hint: "Khắc sâu các cặp: NAS = File-level, SAN/Block = Block-level, Object = Data + Metadata + ID."
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
   TỪ ĐIỂN THUẬT NGỮ CHUYÊN SÂU CHƯƠNG 7 (MỤC I - VIII) (27 TERMS)
   ============================================================ */
export const cloudChapter7Glossary = [
  {
    id: "g7-network-storage",
    termVi: "Lưu Trữ Mạng",
    termEn: "Network Storage",
    abbreviation: "Network Storage",
    definition: "Phương pháp lưu trữ dữ liệu trên các máy chủ được kết nối mạng với nhau, cho phép chia sẻ và quản trị tập trung dữ liệu giữa nhiều thiết bị và người dùng.",
    subsectionId: "cloud-ch7-s1-1-intro"
  },
  {
    id: "g7-centralized-storage",
    termVi: "Lưu Trữ Tập Trung",
    termEn: "Centralized Storage",
    abbreviation: "Centralized Storage",
    definition: "Mô hình lưu trữ toàn bộ dữ liệu tại một máy chủ vật lý duy nhất, dễ bị nghẽn cổ chai và là điểm lỗi đơn lẻ (Single Point of Failure).",
    subsectionId: "cloud-ch7-s2-1-centralized"
  },
  {
    id: "g7-nas",
    termVi: "Thiết Bị Lưu Trữ Gắn Mạng",
    termEn: "Network Attached Storage",
    abbreviation: "NAS",
    definition: "Thiết bị lưu trữ chuyên dụng kết nối trực tiếp vào mạng LAN nội bộ, cho phép truy cập và chia sẻ dữ liệu ở cấp độ tệp tin (File-level).",
    subsectionId: "cloud-ch7-s2-2-nas-san"
  },
  {
    id: "g7-san",
    termVi: "Mạng Lưu Trữ Chuyên Dụng",
    termEn: "Storage Area Network",
    abbreviation: "SAN",
    definition: "Mạng chuyên dụng tốc độ cao độc lập kết nối mảng đĩa với máy chủ qua cáp quang Fiber Channel hoặc iSCSI, truy cập ở cấp độ khối (Block-level).",
    subsectionId: "cloud-ch7-s2-2-nas-san"
  },
  {
    id: "g7-fiber-channel",
    termVi: "Mạng Cáp Quang Kênh Lưu Trữ",
    termEn: "Fiber Channel",
    abbreviation: "FC",
    definition: "Công nghệ mạng truyền dẫn dữ liệu tốc độ gigabit chuyên dụng trong hệ thống SAN, cung cấp độ trễ cực thấp và khả năng truyền tải dữ liệu không mất mát.",
    subsectionId: "cloud-ch7-s2-2-nas-san"
  },
  {
    id: "g7-iscsi",
    termVi: "Giao Thức Giao Tiếp SCSI Qua IP",
    termEn: "Internet Small Computer System Interface",
    abbreviation: "iSCSI",
    definition: "Giao thức cho phép truyền tải các lệnh SCSI cấp khối qua mạng IP Ethernet tiêu chuẩn, giúp giảm chi phí triển khai hệ thống SAN so với mạng cáp quang.",
    subsectionId: "cloud-ch7-s2-2-nas-san"
  },
  {
    id: "g7-cloud-storage",
    termVi: "Lưu Trữ Đám Mây",
    termEn: "Cloud Storage",
    abbreviation: "Cloud Storage",
    definition: "Mô hình lưu trữ dữ liệu trên mạng Internet được quản lý và vận hành bởi nhà cung cấp dịch vụ đám mây với khả năng mở rộng vô hạn và thanh toán theo nhu cầu.",
    subsectionId: "cloud-ch7-s3-1-cloud-storage-core"
  },
  {
    id: "g7-csa",
    termVi: "Kiến Trúc Lưu Trữ Đám Mây",
    termEn: "Cloud Storage Architecture",
    abbreviation: "CSA",
    definition: "Khung kiến trúc hạ tầng lưu trữ đám mây gồm 3 thành phần cốt lõi: Storage Servers (máy chủ lưu trữ), Data Transfer Network (mạng truyền dẫn) và Management Services.",
    subsectionId: "cloud-ch7-s3-1-cloud-storage-core"
  },
  {
    id: "g7-unstructured-storage",
    termVi: "Lưu Trữ Phi Cấu Trúc",
    termEn: "Unstructured Storage",
    abbreviation: "Unstructured",
    definition: "Phương pháp lưu trữ các định dạng dữ liệu không theo mô hình bảng/cột quan hệ truyền thống như hình ảnh, video, âm thanh, tài liệu văn bản.",
    subsectionId: "cloud-ch7-s3-2-mechanisms-trends"
  },
  {
    id: "g7-object-storage",
    termVi: "Lưu Trữ Đối Tượng",
    termEn: "Object Storage",
    abbreviation: "Object Storage",
    definition: "Mô hình lưu trữ đóng gói dữ liệu thành các đối tượng độc lập gồm Data Payload, Metadata mô tả và Mã định danh duy nhất Unique ID trong một không gian phẳng.",
    subsectionId: "cloud-ch7-s3-2-mechanisms-trends"
  },
  {
    id: "g7-metadata",
    termVi: "Siêu Dữ Liệu",
    termEn: "Metadata",
    abbreviation: "Metadata",
    definition: "Dữ liệu mô tả thông tin chi tiết về dữ liệu chính (như kích thước, định dạng MIME, thời gian tạo, tác giả, thẻ bảo mật), là chìa khóa mở rộng của Object Storage.",
    subsectionId: "cloud-ch7-s3-2-mechanisms-trends"
  },
  {
    id: "g7-sds",
    termVi: "Lưu Trữ Định Nghĩa Bằng Phần Mềm",
    termEn: "Software-Defined Storage",
    abbreviation: "SDS",
    definition: "Kiến trúc lưu trữ tách biệt hoàn toàn phần mềm quản lý và điều phối lưu trữ ra khỏi phần cứng vật lý, giúp tận dụng phần cứng máy chủ x86 phổ thông.",
    subsectionId: "cloud-ch7-s3-2-mechanisms-trends"
  },
  {
    id: "g7-hybrid-storage",
    termVi: "Lưu Trữ Lai",
    termEn: "Hybrid Storage",
    abbreviation: "Hybrid Storage",
    definition: "Giải pháp kết hợp giữa hạ tầng lưu trữ đám mây công cộng và lưu trữ tại chỗ On-premises nhằm cân bằng giữa bảo mật dữ liệu nhạy cảm và tối ưu hóa chi phí.",
    subsectionId: "cloud-ch7-s3-2-mechanisms-trends"
  },
  {
    id: "g7-compliance",
    termVi: "Tuân Thủ Quy Định Bảo Mật",
    termEn: "Security Compliance",
    abbreviation: "Compliance",
    definition: "Việc đáp ứng các tiêu chuẩn bảo vệ dữ liệu pháp lý quốc tế (như GDPR tại châu Âu, HIPAA trong y tế tại Mỹ, ISO 27001) khi lưu trữ dữ liệu trên đám mây.",
    subsectionId: "cloud-ch7-s4-1-threats-protection"
  },
  {
    id: "g7-backup-sources",
    termVi: "Nguồn Dữ Liệu Sao Lưu",
    termEn: "Data Sources",
    abbreviation: "Data Sources",
    definition: "Các máy chủ CSDL, phân vùng máy ảo hoặc kho tệp tin doanh nghiệp chứa dữ liệu gốc cần được bảo vệ qua hệ thống sao lưu.",
    subsectionId: "cloud-ch7-s5-1-components"
  },
  {
    id: "g7-backup-cloud-infra",
    termVi: "Hạ Tầng Cloud Lưu Trữ Bản Sao Lưu",
    termEn: "Cloud Infrastructure",
    abbreviation: "Cloud Infra",
    definition: "Hạ tầng lưu trữ đám mây đa khu vực địa lý của nhà cung cấp, đảm bảo độ bền và tính sẵn sàng cao cho các bản sao lưu dự phòng.",
    subsectionId: "cloud-ch7-s5-1-components"
  },
  {
    id: "g7-backup-software",
    termVi: "Phần Mềm Quản Lý Sao Lưu",
    termEn: "Backup Management Software",
    abbreviation: "Backup Software",
    definition: "Bộ công cụ chịu trách nhiệm tự động hóa việc lập lịch, nén, khử trùng lặp (Deduplication), mã hóa và khôi phục dữ liệu.",
    subsectionId: "cloud-ch7-s5-1-components"
  },
  {
    id: "g7-backup-process",
    termVi: "Quy Trình Sao Lưu Dữ Liệu 3 Bước",
    termEn: "Cloud Data Backup Process",
    abbreviation: "3-Step Backup",
    definition: "Quy trình chuẩn hóa gồm 3 bước tuần tự: Select backup data (Chọn dữ liệu) ➔ Transfer data to cloud (Truyền tải dữ liệu) ➔ Store and manage backup data (Lưu trữ và quản lý).",
    subsectionId: "cloud-ch7-s5-2-process"
  },
  {
    id: "g7-supply-chain-cloud",
    termVi: "Quản Lý Chuỗi Cung Ứng",
    termEn: "Supply Chain Management",
    abbreviation: "SCM",
    definition: "Ứng dụng Cloud Storage trong việc đồng bộ hóa dữ liệu logistics, tồn kho và theo dõi lộ trình phân phối hàng hóa theo thời gian thực.",
    subsectionId: "cloud-ch7-s6-1-industry"
  },
  {
    id: "g7-predictive-maintenance",
    termVi: "Bảo Trì Dự Đoán",
    termEn: "Predictive Maintenance",
    abbreviation: "PdM",
    definition: "Phương pháp phân tích dữ liệu cảm biến IoT công nghiệp lưu trữ trên Cloud để phát hiện sớm nguy cơ hư hỏng thiết bị trước khi sự cố xảy ra.",
    subsectionId: "cloud-ch7-s6-1-industry"
  },
  {
    id: "g7-big-data-analytics",
    termVi: "Phân Tích Dữ Liệu Lớn",
    termEn: "Big Data Analytics",
    abbreviation: "Big Data",
    definition: "Hoạt động phân tích trên các hồ dữ liệu (Data Lake) khổng lồ lưu trữ trên Cloud nhằm đưa ra các quyết định kinh doanh chiến lược.",
    subsectionId: "cloud-ch7-s6-1-industry"
  },
  {
    id: "g7-regular-backups",
    termVi: "Sao Lưu Định Kỳ",
    termEn: "Regular Backups",
    abbreviation: "Regular Backups",
    definition: "Chiến lược bảo vệ cơ sở dữ liệu trên cloud cốt lõi bằng cách tự động tạo các bản snapshot định kỳ theo chu kỳ giờ/ngày.",
    subsectionId: "cloud-ch7-s6-2-database"
  },
  {
    id: "g7-block-storage",
    termVi: "Lưu Trữ Cấp Khối",
    termEn: "Block Storage",
    abbreviation: "Block Storage",
    definition: "Mô hình lưu trữ dữ liệu dưới dạng các khối riêng lẻ, mỗi khối có unique identifier, cho phép truy cập và quản lý dữ liệu nhanh, linh hoạt.",
    subsectionId: "cloud-ch7-s7-1-definition"
  },
  {
    id: "g7-unique-identifier",
    termVi: "Mã Định Danh Duy Nhất",
    termEn: "Unique Identifier",
    abbreviation: "Unique ID",
    definition: "Chuỗi định danh độc nhất gán cho từng block dữ liệu trong Block Storage giúp hệ điều hành định vị và ghép nối lại dữ liệu với tốc độ cao.",
    subsectionId: "cloud-ch7-s7-1-definition"
  },
  {
    id: "g7-amazon-ebs",
    termVi: "Dịch Vụ Khối Đĩa Đàn Hồi Amazon",
    termEn: "Amazon Elastic Block Store",
    abbreviation: "EBS",
    definition: "Dịch vụ lưu trữ đĩa khối hiệu năng cao gắn liền với máy tính ảo EC2 của Amazon Web Services.",
    subsectionId: "cloud-ch7-s7-2-popular-types"
  },
  {
    id: "g7-google-pd",
    termVi: "Ổ Đĩa Bền Vững Google",
    termEn: "Google Persistent Disk",
    abbreviation: "Persistent Disk",
    definition: "Dịch vụ ổ đĩa khối bền bỉ, an toàn gắn vào máy ảo Google Compute Engine của nền tảng Google Cloud.",
    subsectionId: "cloud-ch7-s7-2-popular-types"
  },
  {
    id: "g7-azure-managed-disks",
    termVi: "Ổ Đĩa Quản Lý Azure",
    termEn: "Microsoft Azure Managed Disks",
    abbreviation: "Managed Disks",
    definition: "Giải pháp ổ đĩa lưu trữ khối cấp doanh nghiệp gắn với máy ảo Azure Virtual Machines của Microsoft.",
    subsectionId: "cloud-ch7-s7-2-popular-types"
  }
];

/* ============================================================
   BỘ FLASHCARDS SM-2 CHƯƠNG 7 (MỤC I - VIII) (20 CARDS)
   ============================================================ */
export const cloudChapter7Flashcards = [
  {
    id: "fc-c7-01",
    front: "Định nghĩa Network Storage là gì và nêu tầm quan trọng sống còn của nó trong kỷ nguyên số?",
    back: "• Định nghĩa: Phương pháp lưu trữ dữ liệu trên các máy chủ kết nối mạng, cho phép chia sẻ và quản trị tập trung dữ liệu giữa nhiều thiết bị.\n• Tầm quan trọng: Giúp mở rộng dung lượng linh hoạt, tối ưu chi phí hạ tầng, truy cập dữ liệu mọi lúc mọi nơi và nâng cao mức độ an toàn dữ liệu.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s1-1-intro"
  },
  {
    id: "fc-c7-02",
    front: "Mô hình Centralized Storage là gì? Nêu ưu điểm và nhược điểm cố hữu của mô hình này?",
    back: "• Định nghĩa: Lưu trữ toàn bộ dữ liệu tại một máy chủ/trung tâm dữ liệu duy nhất.\n• Ưu điểm: Dễ quản trị tập trung, đơn giản hóa cấu hình sao lưu.\n• Nhược điểm: Điểm lỗi đơn lẻ (Single Point of Failure), nghẽn cổ chai băng thông và khó mở rộng quy mô lớn.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s2-1-centralized"
  },
  {
    id: "fc-c7-03",
    front: "So sánh sự khác biệt bản chất giữa NAS (Network Attached Storage) và SAN (Storage Area Network)?",
    back: "• NAS: Kết nối trực tiếp vào mạng LAN thông thường, truy cập ở cấp độ tệp tin (File-level), chi phí thấp, cấu hình đơn giản.\n• SAN: Mạng tốc độ cao riêng biệt (Fiber Channel/iSCSI), truy cập ở cấp độ khối (Block-level), hiệu năng cực cao, chi phí đắt đỏ và cấu hình phức tạp.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s2-2-nas-san"
  },
  {
    id: "fc-c7-04",
    front: "Trình bày 3 lớp thành phần chính trong kiến trúc của hệ thống SAN (Storage Area Network)?",
    back: "1. Host Layer: Lớp các máy chủ ứng dụng chạy cơ sở dữ liệu hoặc máy ảo, được gắn card mạng HBA quang.\n2. Fabric Layer: Lớp mạng trung gian gồm các thiết bị chuyển mạch SAN Switch tốc độ cao điều phối lưu lượng.\n3. Storage Layer: Lớp lưu trữ vật lý gồm các tủ mảng đĩa (Disk Arrays) chia thành các phân vùng logic LUN.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s2-2-nas-san"
  },
  {
    id: "fc-c7-05",
    front: "Kể tên 3 lợi ích vượt trội của Cloud Storage so với các mô hình lưu trữ truyền thống?",
    back: "1. Khả năng mở rộng linh hoạt (Ability of extension): Tự động co giãn dung lượng lưu trữ theo nhu cầu thực tế.\n2. Truy cập mọi lúc, mọi nơi (Access anytime, anywhere): Truy xuất dữ liệu tức thì từ bất kỳ đâu qua kết nối Internet.\n3. Tiết kiệm chi phí (Cost savings): Chuyển đổi chi phí đầu tư mua sắm phần cứng (CAPEX) sang chi phí vận hành (OPEX).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s3-1-cloud-storage-core"
  },
  {
    id: "fc-c7-06",
    front: "Trình bày cấu trúc 4 lớp xếp chồng từ trên xuống dưới của kiến trúc Cloud Storage?",
    back: "1. Client Layer: Lớp ứng dụng/khách hàng (Browser, App, API, CLI).\n2. Access Layer: Lớp cổng truy cập & bảo mật (Auth, HTTPS, REST API, WAF).\n3. Service Layer: Lớp dịch vụ logic (Object Management, Metadata, ACL).\n4. Storage Infrastructure: Lớp hạ tầng lưu trữ vật lý (Servers, Disks, Replication đa vùng).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s3-1-cloud-storage-core"
  },
  {
    id: "fc-c7-07",
    front: "Nêu vai trò của 3 thành phần cốt lõi trong kiến trúc CSA (Cloud Storage Architecture)?",
    back: "• Storage Servers: Thành phần cốt lõi, lưu trữ dữ liệu thực tế và xử lý các yêu cầu đọc/ghi dung lượng lớn.\n• Data Transfer Network: Mạng kết nối người dùng với máy chủ lưu trữ, bảo đảm băng thông cao, độ trễ thấp và an toàn.\n• Management Services: Công cụ/phần mềm quản lý tài nguyên lưu trữ, theo dõi hiệu năng và cảnh báo sự cố.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s3-1-cloud-storage-core"
  },
  {
    id: "fc-c7-08",
    front: "Theo chuẩn giáo trình, cấu trúc của một đối tượng trong Object Storage gồm những thành phần nào?",
    back: "Gồm đúng 3 thành phần không thể tách rời:\n1. Data Payload: Dữ liệu nhị phân thô thực tế của tệp tin.\n2. Metadata: Tập hợp các siêu dữ liệu mô tả thuộc tính chi tiết không giới hạn.\n3. Unique ID: Mã định danh duy nhất toàn cầu đại diện cho vị trí logic của đối tượng.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s3-2-mechanisms-trends"
  },
  {
    id: "fc-c7-09",
    front: "Khái niệm Software-Defined Storage (SDS) và Hybrid Storage có điểm gì cốt lõi cần nhớ?",
    back: "• SDS (Software-Defined Storage): Tách biệt phần mềm quản lý lưu trữ ra khỏi phần cứng vật lý, chạy trên máy chủ x86 phổ thông.\n• Hybrid Storage: Kết hợp Cloud Storage và On-premises Storage nhằm cân bằng bộ ba: Bảo mật - Chi phí - Hiệu năng (dữ liệu mật giữ tại chỗ, dữ liệu sao lưu đẩy lên cloud).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s3-2-mechanisms-trends"
  },
  {
    id: "fc-c7-10",
    front: "Kể tên 3 mối đe dọa an ninh lớn và 3 biện pháp bảo vệ dữ liệu đám mây tương ứng trong giáo trình?",
    back: "• 3 Mối đe dọa: (1) Cyber attack (Tấn công mạng); (2) Data leak (Rò rỉ dữ liệu); (3) Lost data (Mất mát dữ liệu).\n• 3 Biện pháp bảo vệ: (1) Data Encryption (Mã hóa dữ liệu); (2) Access Control (Kiểm soát truy cập); (3) Backup and Recovery (Sao lưu và phục hồi).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s4-1-threats-protection"
  },
  {
    id: "fc-c7-11",
    front: "Kể tên 3 thành phần chính của Hệ thống sao lưu trên Cloud (Cloud-based Backup System)?",
    back: "1. Data Sources: Nguồn dữ liệu cần backup (Database, Virtual Machines, Files, Ứng dụng).\n2. Cloud Infrastructure: Hạ tầng cloud lưu bản backup đa vùng an toàn.\n3. Backup Management Software: Phần mềm quản lý chính sách, lập lịch, mã hóa và khôi phục.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s5-1-components"
  },
  {
    id: "fc-c7-12",
    front: "Trình bày chuẩn xác thứ tự 3 bước trong quy trình Cloud Data Backup Process?",
    back: "Quy trình 3 bước chuẩn giáo trình:\n• Bước 1: Select backup data (Chọn dữ liệu cần sao lưu).\n• Bước 2: Transfer data to the cloud (Truyền dữ liệu lên cloud qua kênh mã hóa).\n• Bước 3: Store and manage backup data (Lưu trữ và quản lý bản backup an toàn).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s5-2-process"
  },
  {
    id: "fc-c7-13",
    front: "Kể tên 3 lợi ích vượt trội của Cloud-based Backup System so với sao lưu truyền thống?",
    back: "1. High Availability: Tính sẵn sàng cao, phục hồi tức thì mọi lúc mọi nơi.\n2. Data Security: Bảo mật dữ liệu với mã hóa kép và bảo vệ chống Ransomware.\n3. Cost Efficiency: Hiệu quả chi phí, chuyển đổi sang mô hình OPEX trả theo lượng dùng.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s5-3-benefits"
  },
  {
    id: "fc-c7-14",
    front: "Trong Cloud-based Backup System, giải pháp tương ứng cho 2 thách thức Data security và Regulatory compliance là gì?",
    back: "• Thách thức Data security ➔ Giải pháp: Encryption and security (Mã hóa đầu cuối và kiểm soát bảo mật).\n• Thách thức Regulatory compliance ➔ Giải pháp: Transport Optimization + Management and monitoring (Tối ưu đường truyền + Quản trị và giám sát tuân thủ).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s5-4-challenges-solutions"
  },
  {
    id: "fc-c7-15",
    front: "Kể tên 4 ứng dụng thực tế tiêu biểu của Cloud Storage trong ngành công nghiệp (Industry)?",
    back: "1. Quản lý chuỗi cung ứng (Supply Chain Management).\n2. Quản lý sản xuất (Production Management).\n3. Bảo trì dự đoán (Predictive Maintenance).\n4. Phân tích dữ liệu lớn (Big Data Analytics).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s6-1-industry"
  },
  {
    id: "fc-c7-16",
    front: "Kể tên 3 'ông lớn' cung cấp dịch vụ cơ sở dữ liệu trên nền tảng Cloud theo giáo trình?",
    back: "3 'ông lớn' cung cấp Cloud Database:\n1. Amazon Web Services (AWS)\n2. Microsoft Azure\n3. Google Cloud Platform (GCP)",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s6-2-database"
  },
  {
    id: "fc-c7-17",
    front: "Định nghĩa Block Storage là gì? Nêu cấu trúc nhận diện đặc trưng của nó?",
    back: "• Định nghĩa: Block Storage lưu trữ dữ liệu dưới dạng các block (khối) riêng lẻ, mỗi block có một unique identifier (mã định danh duy nhất).\n• Đặc trưng: Cho phép truy cập và quản lý dữ liệu cực nhanh, linh hoạt ở cấp độ I/O thô.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s7-1-definition"
  },
  {
    id: "fc-c7-18",
    front: "Kể tên 3 loại dịch vụ Block Storage phổ biến nhất trên Cloud từ 3 nhà cung cấp hàng đầu?",
    back: "1. Amazon Elastic Block Store (EBS) từ AWS.\n2. Google Persistent Disk từ GCP.\n3. Microsoft Azure Managed Disks từ Microsoft Azure.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s7-2-popular-types"
  },
  {
    id: "fc-c7-19",
    front: "Block Storage phù hợp nhất cho các kịch bản ứng dụng nào? Kể tên 3 ứng dụng trong giáo trình?",
    back: "Khẩu quyết: Phù hợp nhất cho Database & Virtual Machine.\n3 Ứng dụng chuẩn giáo trình:\n1. Lưu trữ cơ sở dữ liệu (Database Storage).\n2. Lưu trữ máy ảo (Virtual Machine Storage - Boot Volume).\n3. Lưu trữ ứng dụng doanh nghiệp (Enterprise Application Storage).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s7-4-applications"
  },
  {
    id: "fc-c7-20",
    front: "Kể tên 4 cặp Thách thức ↔ Giải pháp đối ứng khi triển khai Block Storage theo giáo trình?",
    back: "1. Bảo mật dữ liệu (Data Security) ↔ Mã hóa dữ liệu (Data Encryption).\n2. Hiệu suất & độ trễ (Performance & Latency) ↔ Sao lưu và phục hồi (Backup and Recovery).\n3. Quản lý & tối ưu chi phí (Cost Management) ↔ Quản lý tài nguyên (Resource Management).\n4. Tuân thủ quy định (Regulatory Compliance) ↔ Đảm bảo tuân thủ (Compliance Assurance).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s7-5-challenges-solutions"
  }
];
