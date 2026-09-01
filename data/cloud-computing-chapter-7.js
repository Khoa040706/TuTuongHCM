/* ============================================================
   GIÁO TRÌNH ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)
   Chương 7: Cloud Data Storage (Lưu trữ Dữ liệu Đám mây)
   Biên tập chuẩn học thuật từ tài liệu nguồn taskcanlam
   ============================================================ */

export const cloudComputingChapter7 = {
  id: "cloud-ch7",
  title: "Chương 7",
  subtitle: "Cloud Data Storage (Lưu trữ Dữ liệu trên Đám mây)",
  sections: [
    /* ============================
       MỤC ★: OVERVIEW CHƯƠNG
       ============================ */
    {
      id: "cloud-ch7-s0",
      roman: "★",
      title: "Tổng quan chương: Kiến trúc Lưu trữ Dữ liệu Đám mây",
      subsections: [
        {
          id: "cloud-ch7-s0-overview",
          number: "0",
          title: "Bản đồ kiến trúc & Radar kỹ năng Chương 7",
          parts: [
            {
              id: "cloud-ch7-s0-p1",
              label: "★",
              title: "Tổng quan tri thức toàn chương",
              content: [
                {
                  type: "cloud-chapter-hero",
                  chapterId: "cloud-ch7"
                },
                {
                  type: "highlight",
                  text: "Chương 7 hoàn thiện bức tranh toàn cảnh về Cloud Computing với phân hệ Lưu trữ: Tiến trình tiến hóa từ Centralized ➔ NAS ➔ SAN, kiến trúc phân tầng 4 lớp của Cloud Storage, 4 hình thái lưu trữ hiện đại (Object Storage S3, Block Storage EBS, SDS, Hybrid Storage), quy trình sao lưu 3 giai đoạn (Select ➔ Transfer ➔ Store) và các giải pháp cơ sở dữ liệu phân tán toàn cầu."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC I: NETWORK STORAGE
       ============================ */
    {
      id: "cloud-ch7-s1",
      roman: "I",
      title: "Tiến hóa Lưu trữ Mạng: Centralized ➔ NAS ➔ SAN",
      subsections: [
        {
          id: "cloud-ch7-s1-evolution",
          number: "1",
          title: "Hạn chế của Lưu trữ Tập trung (Centralized Storage)",
          parts: [
            {
              id: "cloud-ch7-s1-evolution-p1",
              label: "a",
              title: "Khái niệm lưu trữ mạng ban đầu",
              content: [
                {
                  type: "paragraph",
                  text: "Lưu trữ mạng (Network Storage) là phương pháp kết nối các máy chủ và thiết bị lưu trữ thông qua mạng để cho phép nhiều người dùng và máy trạm chia sẻ dữ liệu tập trung:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Lưu trữ tập trung cổ điển (Centralized Storage):</strong> Dữ liệu được lưu trên một máy chủ đơn lẻ hoặc cụm ổ đĩa gắn trực tiếp (DAS - Direct Attached Storage).",
                    "<strong>Hạn chế cốt tử:</strong> Khó mở rộng dung lượng vật lý (Scalability bottleneck), nghẽn cổ chai I/O khi lượng truy cập tăng vọt, và nguy cơ mất trắng dữ liệu khi máy chủ trung tâm gặp sự cố phần cứng."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch7-s1-nas-san",
          number: "2",
          title: "So sánh Chuyên sâu NAS (File-level) vs SAN (Block-level)",
          parts: [
            {
              id: "cloud-ch7-s1-nas-san-p1",
              label: "b",
              title: "Đối sánh hai kiến trúc lưu trữ mạng tiền thân",
              content: [
                {
                  type: "table",
                  headers: ["Tiêu chí", "NAS (Network Attached Storage)", "SAN (Storage Area Network)"],
                  rows: [
                    ["Môi trường mạng", "Mạng cục bộ LAN thông thường (Ethernet/IP)", "Mạng quang chuyên dụng tốc độ cao (Fibre Channel, iSCSI)"],
                    ["Giao thức truy xuất", "File-level access (NFS, SMB/CIFS)", "Block-level access (SCSI commands, FCP)"],
                    ["Đối tượng sử dụng", "Chia sẻ file tài liệu giữa máy tính cá nhân và văn phòng", "Dành cho CSDL giao dịch lớn, máy ảo máy chủ doanh nghiệp"],
                    ["Hiệu năng & Độ trễ", "Hiệu năng trung bình, phụ thuộc tải mạng LAN", "Hiệu năng cực cao, băng thông khổng lồ, độ trễ tiệm cận 0"],
                    ["Chi phí & Triển khai", "Giá thành thấp, cắm là chạy (Plug-and-play)", "Chi phí đầu tư rất lớn, cấu hình switch quang phức tạp"]
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC II: CLOUD STORAGE ARCHITECTURE
       ============================ */
    {
      id: "cloud-ch7-s2",
      roman: "II",
      title: "Kiến trúc 4 Lớp của Cloud Storage & Xu hướng Hiện đại",
      subsections: [
        {
          id: "cloud-ch7-s2-layers",
          number: "1",
          title: "Kiến trúc Phân tầng 4 Lớp của Cloud Storage (CSA)",
          parts: [
            {
              id: "cloud-ch7-s2-layers-p1",
              label: "a",
              title: "Cấu trúc từ Client đến Hạ tầng vật lý",
              content: [
                {
                  type: "paragraph",
                  text: "Hệ thống lưu trữ đám mây chuẩn mực được tổ chức thành 4 lớp chặt chẽ:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>1. Client Layer (Lớp người dùng):</strong> Ứng dụng Web, Mobile Apps, công cụ dòng lệnh CLI và SDK tích hợp.",
                    "<strong>2. Access Layer (Lớp truy cập):</strong> Cổng tiếp nhận giao tiếp bảo mật qua HTTPS, kiểm tra quyền truy cập (Authentication/IAM) và định tuyến API RESTful.",
                    "<strong>3. Service Layer (Lớp dịch vụ):</strong> Quản lý đối tượng (Object Management), lập chỉ mục siêu dữ liệu (Metadata Indexing), quản lý danh sách kiểm soát truy cập (ACL) và chính sách vòng đời dữ liệu (Lifecycle Rules).",
                    "<strong>4. Storage Infrastructure (Lớp hạ tầng lưu trữ):</strong> Cụm hàng triệu ổ đĩa HDD/SSD, máy chủ lưu trữ chuyên dụng và thuật toán nhân bản tự động (Data Replication / Erasure Coding) đảm bảo dữ liệu không thể bị phá hủy."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch7-s2-trends",
          number: "2",
          title: "4 Xu hướng Lưu trữ Đám mây Hiện đại",
          parts: [
            {
              id: "cloud-ch7-s2-trends-p1",
              label: "b",
              title: "Object Storage, SDS, Unstructured & Hybrid",
              content: [
                {
                  type: "table",
                  headers: ["Hình thái lưu trữ", "Đặc điểm cấu trúc dữ liệu", "Ưu điểm & Nhược điểm", "Ví dụ tiêu biểu"],
                  rows: [
                    [
                      "Object Storage (Lưu trữ đối tượng)",
                      "Dữ liệu được đóng gói thành các đối tượng gồm: Data nhị phân + Metadata phong phú + Khóa định danh duy nhất (Unique Key). Không có cấu trúc thư mục lồng nhau.",
                      "Ưu: Mở rộng dung lượng vô hạn, chi phí cực rẻ, độ bền đạt 99.999999999% (11 số 9). Nhược: Không tối ưu cho việc sửa đổi file nhỏ liên tục.",
                      "AWS S3, Google Cloud Storage, Azure Blob Storage"
                    ],
                    [
                      "Software-Defined Storage (SDS)",
                      "Tách rời hoàn toàn lớp phần mềm quản lý lưu trữ khỏi phần cứng vật lý bên dưới.",
                      "Ưu: Tận dụng phần cứng thông thường giá rẻ (Commodity Hardware), không bị khóa nhà sản xuất. Nhược: Đòi hỏi năng lực kỹ thuật cài đặt cao.",
                      "Ceph Storage, OpenStack Swift, VMware vSAN"
                    ],
                    [
                      "Unstructured Storage",
                      "Lưu trữ dữ liệu phi cấu trúc (video 4K, tệp âm thanh, file nhật ký hệ thống, ảnh vệ tinh).",
                      "Ưu: Lưu trữ mọi định dạng linh hoạt. Nhược: Không truy vấn được bằng câu lệnh SQL truyền thống.",
                      "YouTube CDN, Google Photos, Dropbox"
                    ],
                    [
                      "Hybrid Storage",
                      "Kết hợp đồng bộ giữa bộ lưu trữ tại chỗ (On-Premises) và lưu trữ đám mây công cộng.",
                      "Ưu: Dữ liệu tối mật lưu tại chỗ, dữ liệu lớn ít dùng đẩy lên Cloud để tiết kiệm. Nhược: Quản lý hạ tầng kép phức tạp.",
                      "AWS Storage Gateway, Azure Stack"
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
       MỤC III: BẢO MẬT & SAO LƯU
       ============================ */
    {
      id: "cloud-ch7-s3",
      roman: "III",
      title: "An ninh Lưu trữ & Quy trình Sao lưu 3 Giai đoạn",
      subsections: [
        {
          id: "cloud-ch7-s3-security",
          number: "1",
          title: "3 Mối đe dọa ↔ 3 Lá chắn Bảo vệ Dữ liệu",
          parts: [
            {
              id: "cloud-ch7-s3-security-p1",
              label: "a",
              title: "Tam giác an ninh lưu trữ đám mây",
              content: [
                {
                  type: "paragraph",
                  text: "Dữ liệu lưu trữ trên đám mây đối diện với 3 nguy cơ lớn: Tấn công mạng (Cyber Attacks), Rò rỉ dữ liệu (Data Leaks) và Mất mát dữ liệu do sự cố phần cứng hoặc thiên tai (Lost Data). Doanh nghiệp đối phó bằng 3 lá chắn:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Mã hóa dữ liệu (Data Encryption):</strong> Mã hóa đường truyền bằng TLS 1.3 và mã hóa dữ liệu tĩnh trong ổ đĩa bằng thuật toán mã hóa khối khóa đối xứng AES-256 (kết hợp dịch vụ quản lý khóa KMS).",
                    "<strong>Kiểm soát quyền truy cập nghiêm ngặt:</strong> Áp dụng chính sách đặc quyền tối thiểu (Least Privilege) qua IAM Policies, chữ ký URL tạm thời (Pre-signed URLs) và danh sách ACL.",
                    "<strong>Sao lưu và Phục hồi (Backup & Disaster Recovery):</strong> Tự động đồng bộ sang nhiều vùng địa lý cách nhau hàng ngàn kilomet."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch7-s3-backup",
          number: "2",
          title: "Quy trình Sao lưu Đám mây 3 Bước (Cloud Backup Process)",
          parts: [
            {
              id: "cloud-ch7-s3-backup-p1",
              label: "b",
              title: "Select ➔ Transfer ➔ Store & Manage",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Bước 1: Select backup data (Lựa chọn dữ liệu):</strong> Xác định các tệp tin, CSDL hoặc ảnh chụp máy ảo cần bảo vệ; lựa chọn chiến lược sao lưu toàn phần (Full), sao lưu gia tăng (Incremental) hoặc sao lưu vi phân (Differential).",
                    "<strong>Bước 2: Transfer data to cloud (Truyền tải dữ liệu):</strong> Dữ liệu được nén, mã hóa tại nguồn và truyền tải qua đường mạng băng thông cao với cơ chế tiếp tục truyền khi mất kết nối (Chunked upload & Resumable transfer).",
                    "<strong>Bước 3: Store and manage backup data (Lưu trữ và quản lý):</strong> Áp dụng quy tắc vòng đời (Lifecycle Policies) để tự động chuyển dữ liệu cũ từ kho lưu trữ nóng (Standard/Hot Tier) sang kho lưu trữ lạnh (Cold/Glacier Tier) để giảm chi phí lưu trữ dài hạn tới 90%."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC IV: BLOCK STORAGE & DB
       ============================ */
    {
      id: "cloud-ch7-s4",
      roman: "IV",
      title: "Block Storage Chuyên sâu & Giải pháp Cơ sở Dữ liệu Đám mây",
      subsections: [
        {
          id: "cloud-ch7-s4-block",
          number: "1",
          title: "Block Storage: Cột sống của Máy ảo và Cơ sở Dữ liệu",
          parts: [
            {
              id: "cloud-ch7-s4-block-p1",
              label: "a",
              title: "Ổ đĩa ảo hiệu năng cao",
              content: [
                {
                  type: "definition",
                  term: "Block Storage trên Cloud",
                  definition: "Block Storage chia nhỏ dữ liệu thành các khối độc lập có kích thước cố định (ví dụ 4KB hoặc 8KB), mỗi khối có một địa chỉ phân giải duy nhất. Hệ điều hành trên máy ảo nhìn nhận Block Storage như một ổ cứng vật lý cục bộ, cho phép định dạng mọi hệ thống tệp (ext4, XFS, NTFS) và đọc ghi ngẫu nhiên với tốc độ hàng chục ngàn IOPS."
                },
                {
                  type: "paragraph",
                  text: "Các dịch vụ Block Storage tiêu biểu: <strong>Amazon Elastic Block Store (EBS)</strong>, <strong>Google Persistent Disk</strong>, <strong>Microsoft Azure Managed Disks</strong>."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch7-s4-database",
          number: "2",
          title: "Các Giải pháp Cơ sở Dữ liệu Quản lý Đám mây (Cloud Database)",
          parts: [
            {
              id: "cloud-ch7-s4-database-p1",
              label: "b",
              title: "Hệ quản trị CSDL Quan hệ & Phi quan hệ",
              content: [
                {
                  type: "table",
                  headers: ["Nhà cung cấp", "CSDL Quan hệ (RDBMS)", "CSDL Phi quan hệ (NoSQL)", "Kho dữ liệu phân tích (Data Warehouse)"],
                  rows: [
                    ["Amazon Web Services (AWS)", "Amazon RDS, Amazon Aurora", "Amazon DynamoDB", "Amazon Redshift"],
                    ["Microsoft Azure", "Azure SQL Database", "Azure Cosmos DB", "Azure Synapse Analytics"],
                    ["Google Cloud Platform (GCP)", "Cloud SQL, Cloud Spanner", "Cloud Firestore, Bigtable", "Google BigQuery"]
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
      id: "cloud-ch7-s5",
      roman: "V",
      title: "Tổng kết Toàn diện Chương 7 & Bảng Từ khóa Cốt lõi",
      subsections: [
        {
          id: "cloud-ch7-s5-summary",
          number: "1",
          title: "Ghi nhớ then chốt toàn môn học",
          parts: [
            {
              id: "cloud-ch7-s5-summary-p1",
              label: "a",
              title: "Bảng thuật ngữ lưu trữ chuẩn quốc tế",
              content: [
                {
                  type: "table",
                  headers: ["Khái niệm", "Thuật ngữ tiếng Anh", "Ý nghĩa học thuật cốt lõi"],
                  rows: [
                    ["Lưu trữ mạng", "Network Storage", "Hạ tầng lưu trữ dữ liệu qua mạng chia sẻ tài nguyên."],
                    ["NAS", "Network Attached Storage", "Lưu trữ mức tệp (File-level) kết nối vào mạng LAN thông thường."],
                    ["SAN", "Storage Area Network", "Mạng lưu trữ mức khối (Block-level) kết nối quang tốc độ cao chuyên dụng."],
                    ["Lưu trữ đối tượng", "Object Storage", "Lưu trữ dữ liệu phi cấu trúc gồm Data + Metadata + Unique Key (S3)."],
                    ["Lưu trữ khối", "Block Storage", "Ổ đĩa ảo hiệu năng cao dùng cho HĐH máy ảo và Cơ sở dữ liệu."],
                    ["Lưu trữ định nghĩa bằng PM", "Software-Defined Storage (SDS)", "Tách biệt phần mềm điều khiển khỏi phần cứng lưu trữ."],
                    ["Kho lưu trữ lạnh", "Cold Storage / Glacier", "Tầng lưu trữ dữ liệu lưu trữ dài hạn ít dùng với chi phí cực thấp."]
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
