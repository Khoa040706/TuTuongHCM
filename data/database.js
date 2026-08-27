/* ============================================================
   DỮ LIỆU HỌC TẬP CHUẨN MỰC: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG I: TỔNG QUAN VÀ GIỚI THIỆU HỆ CƠ SỞ DỮ LIỆU
   ============================================================ */

export const databaseData = {
  id: "database",
  title: "Hệ cơ sở dữ liệu",
  subtitle: "Cơ sở dữ liệu quan hệ, thiết kế thực thể liên kết (ERD), kiến trúc 3 mức ANSI-SPARC, chuẩn hóa dữ liệu và truy vấn SQL.",
  sections: [
    /* ============================================================
       SECTION 0: INTERACTIVE CYBER-VAULT HERO BANNER
       ============================================================ */
    {
      id: "db-section-0",
      roman: "★",
      title: "TỔNG QUAN KIẾN TRÚC CSDL & LIVE QUERY WORKBENCH",
      subsections: [
        {
          id: "db-sub-0",
          number: "0",
          title: "Interactive Database Cyber-Vault",
          parts: [
            {
              id: "db-part-hero",
              label: "INTERACTIVE HERO BANNER",
              title: "Trực Quan Hóa Hệ Quản Trị CSDL & Đấu Trường File vs DBMS",
              content: [
                {
                  type: "component",
                  component: "DatabaseIntroHeroBanner"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION I: CSDL LÀ GÌ? TẠI SAO CẦN TỚI CÁC HỆ CSDL?
       ============================================================ */
    {
      id: "db-section-1",
      roman: "I",
      title: "CSDL là gì? Tại sao cần tới các hệ CSDL?",
      subsections: [
        {
          id: "db-sub-1-1",
          number: "1",
          title: "Các hệ thống dùng phương pháp xử lý tập tin (File Processing System)",
          parts: [
            {
              id: "db-part-1-1-a",
              label: "a",
              title: "Khái niệm & Bối cảnh lịch sử của Hệ thống xử lý tập tin",
              content: [
                {
                  type: "definition",
                  term: "Hệ thống xử lý tập tin (File Processing System)",
                  text: "Để lưu trữ thông tin, dữ liệu cho công việc của cơ quan/tổ chức, có thể lưu dưới dạng **các file riêng rẽ**, khi cần thì lấy ra thao tác, xử lý -> gọi là **hệ thống xử lý tập tin**."
                },
                {
                  type: "paragraph",
                  text: "Phương pháp xử lý tập tin được sử dụng rộng rãi trong suốt những năm **60s - 80s** của thế kỷ XX trước khi các hệ quản trị CSDL quan hệ trở nên phổ biến."
                },
                {
                  type: "label",
                  text: "Ưu điểm của phương pháp xử lý tập tin:"
                },
                {
                  type: "list",
                  items: [
                    "**Thời gian triển khai ngắn:** Không đòi hỏi quy trình phân tích và mô hình hóa phức tạp.",
                    "**Chi phí đầu tư thấp:** Ít đầu tư lớn về vật chất, nhân sự, công sức phân tích - thiết kế.",
                    "**Phù hợp với các bài toán nhỏ:** Đáp ứng tốt các nhu cầu lưu trữ đơn giản, xử lý cục bộ độc lập."
                  ]
                }
              ]
            },
            {
              id: "db-part-1-1-b",
              label: "b",
              title: "6 Nhược điểm chí mạng của Hệ thống xử lý tập tin",
              content: [
                {
                  type: "paragraph",
                  text: "Khi bài toán nghiệp vụ có nhu cầu **xử lý dữ liệu lớn, đa người dùng và liên kết phức tạp**, hệ thống xử lý tập tin bộc lộ 6 nhược điểm nghiêm trọng:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "a",
                      title: "Tính dư thừa dữ liệu (Data Redundancy)",
                      bullets: [
                        "Là sự lặp đi lặp lại của thông tin được lưu trữ ở nhiều tập tin khác nhau trong cùng một tổ chức.",
                        "Gây lãng phí công sức nhập liệu, tốn kém dung lượng đĩa cứng và dễ dẫn đến tình trạng dị thường (anomaly)."
                      ]
                    },
                    {
                      number: "b",
                      title: "Tính dị thường / không nhất quán (Data Inconsistency)",
                      bullets: [
                        "Tại một thời điểm, thông tin về cùng một đối tượng có thể **khác nhau** trên các tập tin khác nhau trong cùng hệ thống.",
                        "Nguyên nhân chủ yếu do sự dư thừa dữ liệu gây ra khi một nơi cập nhật nhưng nơi khác không được đồng bộ."
                      ]
                    },
                    {
                      number: "c",
                      title: "Vấn đề về tính nguyên tố của giao tác (Atomicity of Transactions)",
                      bullets: [
                        "Tệp xử lý truyền thống khó đảm bảo tính chất **\"hoặc thực hiện hoàn toàn, hoặc không thực hiện gì\"** (All-or-Nothing).",
                        "Khó đưa hệ thống về trạng thái nhất quán trước khi xảy ra sự cố (mất điện, lỗi phần cứng).",
                        "Thiếu khả năng chia sẻ thông tin giữa các hệ thống, khó mở rộng hoặc kết nối với hệ thống khác."
                      ]
                    },
                    {
                      number: "d",
                      title: "Vấn đề toàn vẹn (Integrity)",
                      bullets: [
                        "Các ràng buộc nghiệp vụ bị nhúng trực tiếp vào mã nguồn của từng chương trình ứng dụng.",
                        "Khi có thêm ràng buộc mới -> rất khó thay đổi đồng loạt toàn bộ các chương trình để tuân thủ."
                      ]
                    },
                    {
                      number: "e",
                      title: "Dị thường của truy cập tương tranh (Concurrent Access Anomalies)",
                      bullets: [
                        "Nhiều hệ thống cho phép nhiều người dùng **cập nhật dữ liệu đồng thời** để tăng hiệu quả và tốc độ phản hồi.",
                        "Nếu không có cơ chế kiểm soát khóa chặt chẽ sẽ dẫn đến xung đột ghi đè và dữ liệu không nhất quán."
                      ]
                    },
                    {
                      number: "f",
                      title: "Tính không toàn vẹn, an toàn dữ liệu (Data Integrity & Security)",
                      bullets: [
                        "Thể hiện sự không đầy đủ của thông tin cần lưu trữ so với yêu cầu quản lý của hệ thống.",
                        "An toàn dữ liệu bao gồm: cơ chế bảo mật, phân cấp đối tượng sử dụng dữ liệu, sao lưu dữ liệu dự phòng (backup)."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "db-part-1-1-c",
              label: "c",
              title: "Studio Trực Quan Hóa 6 Nhược Điểm Của File Processing",
              content: [
                {
                  type: "component",
                  component: "FileProcessingPitfallsVisualizer"
                },
                {
                  type: "conclusion",
                  title: "Kết luận chuyển dịch phương pháp luận:",
                  text: "Để khắc phục triệt để các hạn chế trên, khoa học máy tính bắt buộc phải thay đổi cách tiếp cận hệ thống -> **Tiếp cận Cơ sở dữ liệu (Database Approach)**."
                }
              ]
            }
          ]
        },
        {
          id: "db-sub-1-2",
          number: "2",
          title: "Kiểm tra nhanh kiến thức: Hệ thống xử lý tập tin",
          parts: [
            {
              id: "db-part-1-2-quiz",
              label: "★",
              title: "Mini Concept Check: Hệ thống tập tin & Nhu cầu CSDL",
              content: [
                {
                  type: "component",
                  component: "DatabasePart1ConceptQuiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION II: CƠ SỞ DỮ LIỆU & HỆ QUẢN TRỊ CSDL (DBMS)
       ============================================================ */
    {
      id: "db-section-2",
      roman: "II",
      title: "Cơ sở dữ liệu (Database) & Hệ quản trị CSDL (DBMS)",
      subsections: [
        {
          id: "db-sub-2-1",
          number: "1",
          title: "Khái niệm, Ưu điểm & Thách thức của Cơ sở dữ liệu",
          parts: [
            {
              id: "db-part-2-1-a",
              label: "a",
              title: "Khái niệm Cơ sở dữ liệu (Database)",
              content: [
                {
                  type: "definition",
                  term: "Định nghĩa Cơ sở dữ liệu (Database)",
                  text: "CSDL là **tập hợp có cấu trúc** của thông tin, được lưu trữ trên các thiết bị trừ tin nhằm thỏa mãn yêu cầu khai thác thông tin **đồng thời** cho nhiều người sử dụng hay nhiều chương trình ứng dụng với các mục đích khác nhau."
                }
              ]
            },
            {
              id: "db-part-2-1-b",
              label: "b",
              title: "Ưu điểm vượt trội của Cơ sở dữ liệu",
              content: [
                {
                  type: "label",
                  text: "1. Về bản thân thông tin lưu trữ:"
                },
                {
                  type: "list",
                  items: [
                    "**Giảm thiểu sự trùng lặp thông tin đến mức thấp nhất**, nhờ đó: Bảo đảm **tính nhất quán (consistency)** và Bảo đảm **tính toàn vẹn của dữ liệu (integrity)**.",
                    "**Dữ liệu có thể được truy xuất theo nhiều cách khác nhau:** Không bị gò bó bởi cấu trúc tệp đơn lẻ.",
                    "**Khả năng chia sẻ thông tin cao:** Cho phép nhiều người dùng và nhiều ứng dụng khác nhau cùng khai thác đồng thời."
                  ]
                },
                {
                  type: "label",
                  text: "2. Về hiệu quả sử dụng thông tin:"
                },
                {
                  type: "list",
                  items: [
                    "**Chia sẻ thông tin** thông suốt giữa nhiều người dùng và các phòng ban nghiệp vụ.",
                    "**Tiết kiệm tài nguyên:** Giảm thiểu dung lượng lưu trữ và chi phí bảo trì.",
                    "**Tăng hiệu quả khai thác:** Truy xuất dữ liệu nhanh chóng, chính xác và trực quan."
                  ]
                }
              ]
            },
            {
              id: "db-part-2-1-c",
              label: "c",
              title: "Những vấn đề thách thức nảy sinh khi dùng CSDL",
              content: [
                {
                  type: "paragraph",
                  text: "Bên cạnh các ưu điểm to lớn, việc tập trung hóa dữ liệu cũng đặt ra các thách thức cần giải quyết:"
                },
                {
                  type: "list",
                  items: [
                    "**Cần xác định rõ trách nhiệm đối với sự an toàn và tính chính xác của dữ liệu:** Cần quy định rõ ai có trách nhiệm cập nhật, chỉnh sửa? Những thông tin nào được phép sửa?",
                    "**Cần cơ chế bảo mật hoặc phân quyền** khai thác thông tin chi tiết của từng người sử dụng.",
                    "**Giải quyết sự tranh chấp trong truy cập dữ liệu** khi nhiều người dùng cùng truy cập và thao tác trên một nguồn dữ liệu đồng thời."
                  ]
                },
                {
                  type: "component",
                  component: "DatabaseProsAndChallengesVisualizer"
                }
              ]
            }
          ]
        },

        {
          id: "db-sub-2-2",
          number: "2",
          title: "Các đối tượng sử dụng CSDL (User Categories)",
          parts: [
            {
              id: "db-part-2-2-a",
              label: "a",
              title: "Phân loại 3 nhóm đối tượng người dùng CSDL",
              content: [
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Người sử dụng không chuyên về tin học và CSDL (End-Users / Naive Users)",
                      bullets: [
                        "Là những người dùng cuối không có kiến thức chuyên sâu về công nghệ.",
                        "CSDL cần cung cấp công cụ, giao diện trực quan (GUI, biểu mẫu, báo cáo) để những người này có thể sử dụng, khai thác thuận tiện khi cần."
                      ]
                    },
                    {
                      number: "2",
                      title: "Chuyên viên tin học biết khai thác CSDL (Application Programmers)",
                      bullets: [
                        "Là các lập trình viên, kỹ sư phần mềm hiểu biết về lập trình và cách khai thác CSDL.",
                        "Có thể xây dựng các ứng dụng phục vụ nhiều mục đích khác nhau trên nền tảng CSDL."
                      ]
                    },
                    {
                      number: "3",
                      title: "Người quản trị CSDL (Database Administrator - DBA)",
                      bullets: [
                        "Là chuyên gia am hiểu sâu sắc về tin học, về các hệ quản trị CSDL và hệ thống máy tính.",
                        "Là người **tổ chức CSDL** (khai báo cấu trúc, thiết lập ràng buộc, ghi nhận các yêu cầu bảo mật).",
                        "Là người **cấp quyền hạn** khai thác CSDL cho toàn bộ người dùng trong hệ thống."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "DatabaseUserRolesStudio"
                }
              ]
            }
          ]
        },

        {
          id: "db-sub-2-3",
          number: "3",
          title: "Kiến trúc ba mức của một hệ CSDL (Three-Level Architecture)",
          parts: [
            {
              id: "db-part-2-3-a",
              label: "a",
              title: "Khái niệm Mô hình dữ liệu & 3 Mức biểu diễn",
              content: [
                {
                  type: "definition",
                  term: "Mô hình dữ liệu (Data Model)",
                  text: "Mô hình dữ liệu là **sự hình thức hóa toán học**, gồm 2 phần: **1) Ký hiệu mô tả dữ liệu**; và **2) Tập hợp các phép toán** diễn tả ràng buộc trong dữ liệu và các phép xử lý trên dữ liệu."
                },
                {
                  type: "paragraph",
                  text: "Kiến trúc chuẩn ANSI-SPARC phân chia hệ thống cơ sở dữ liệu thành **3 mức biểu diễn** trừu tượng:"
                },
                {
                  type: "table",
                  headers: ["Mức Biểu Diễn", "Tên Tiếng Anh", "Mô Tả Bản Chất Chi Tiết"],
                  rows: [
                    [
                      "**Mức vật lý (mức trong)**",
                      "Physical Level / Internal Level",
                      "Các loại tệp dữ liệu, tệp giao dịch, tệp chỉ dẫn... theo cấu trúc nào đó, lưu trữ trên thiết bị lưu trữ tin."
                    ],
                    [
                      "**Mức khái niệm (mô hình ER)**",
                      "Conceptual Level / Logical Schema",
                      "Sự trừu tượng hóa thế giới thực gần với người dùng CSDL. HQTCSDL cung cấp khả năng định nghĩa dữ liệu ở mức này để mô tả sơ đồ quan niệm (thường gọi là mô hình CSDL). Mức vật lý là sự cài đặt cụ thể của mức khái niệm."
                    ],
                    [
                      "**Mức khung nhìn (mức ngoài)**",
                      "View Level / External Level",
                      "Là cách nhìn, quan điểm của từng người sử dụng đối với CSDL mức khái niệm. Mỗi khung nhìn (View) là một phần hoặc sự trừu tượng hóa một phần của CSDL mức khái niệm."
                    ]
                  ]
                }
              ]
            },
            {
              id: "db-part-2-3-b",
              label: "b",
              title: "Sơ đồ minh họa kiến trúc 3 mức & Component tương tác",
              content: [
                {
                  type: "code",
                  code: `User 1 -> View 1 ┐
User 2 -> View 2 ├ -> CSDL mức khái niệm -> CSDL mức vật lý
User n -> View n ┘`
                },
                {
                  type: "component",
                  component: "ThreeLevelArchitectureExplorer"
                }
              ]
            }
          ]
        },

        {
          id: "db-sub-2-4",
          number: "4",
          title: "Hệ quản trị CSDL (DBMS - Database Management System)",
          parts: [
            {
              id: "db-part-2-4-a",
              label: "a",
              title: "Định nghĩa & Mối quan hệ giữa CSDL và HQTCSDL",
              content: [
                {
                  type: "definition",
                  term: "Hệ quản trị CSDL (DBMS - Database Management System)",
                  text: "Hệ quản trị CSDL là **phần mềm** dùng để tạo lập, quản lý và xử lý dữ liệu. **CSDL là một thành phần** bên trong HQTCSDL."
                },
                {
                  type: "list",
                  items: [
                    "**Các HQTCSDL thường gặp:** Oracle, Paradox, MS Access, Sybase, Foxpro, SQL Server, MySQL, PostgreSQL...",
                    "**Ví dụ minh họa thực tiễn:** Một danh bạ điện thoại cá nhân (gồm họ tên, số điện thoại, địa chỉ) có thể lưu trữ bằng phần mềm như Access hoặc Excel. Tập hợp dữ liệu có liên quan ngữ nghĩa với nhau chính là **CSDL**, còn phần mềm Access / Excel chính là **Hệ quản trị CSDL**."
                  ]
                }
              ]
            },
            {
              id: "db-part-2-4-b",
              label: "b",
              title: "Các chức năng cốt lõi của Hệ quản trị CSDL",
              content: [
                {
                  type: "label",
                  text: "Hai khả năng cơ bản bắt buộc:"
                },
                {
                  type: "list",
                  items: [
                    "**Quản lý dữ liệu ở mức xử lý tệp** như một hệ điều hành chuyên dụng.",
                    "**Truy cập khối lượng dữ liệu lớn** có hiệu quả cao với độ trễ thấp."
                  ]
                },
                {
                  type: "label",
                  text: "Các chức năng quản trị & điều khiển khác:"
                },
                {
                  type: "list",
                  items: [
                    "Cung cấp giao diện giữa users và CSDL; giữa CSDL với các hệ thống phần mềm khác.",
                    "Cung cấp ngôn ngữ bậc cao (thường là ngôn ngữ phi thủ tục như SQL) giúp users truy xuất và thao tác CSDL.",
                    "Quản lý giao tác (transaction), phân quyền và an toàn dữ liệu khi có một hay nhiều người sử dụng đồng thời.",
                    "Điều khiển sự khớp, tính toàn vẹn khi chuyển hóa dữ liệu và khi có sự cố hệ thống.",
                    "Kiểm tra độ tin cậy của dữ liệu trước khi lưu trữ."
                  ]
                },
                {
                  type: "component",
                  component: "DbmsFunctionsRoadmap"
                }
              ]
            }
          ]
        },

        {
          id: "db-sub-2-5",
          number: "5",
          title: "Kiểm tra nhanh kiến thức: CSDL, Kiến trúc 3 mức & HQTCSDL",
          parts: [
            {
              id: "db-part-2-5-quiz",
              label: "★",
              title: "Mini Concept Check: CSDL & Hệ quản trị CSDL",
              content: [
                {
                  type: "component",
                  component: "DatabasePart2ConceptQuiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION III: CÁC MÔ HÌNH DỮ LIỆU (DATA MODELS)
       ============================================================ */
    {
      id: "db-section-3",
      roman: "III",
      title: "Các mô hình dữ liệu (Data Models)",
      subsections: [
        {
          id: "db-sub-3-1",
          number: "1",
          title: "Khái niệm mô hình dữ liệu & Phân loại 3 nhóm lớn",
          parts: [
            {
              id: "db-part-3-1-a",
              label: "a",
              title: "Khái niệm & 3 thành phần cấu thành mô hình dữ liệu",
              content: [
                {
                  type: "definition",
                  term: "Mô hình dữ liệu (Data Model)",
                  text: "Là tập hợp các **khái niệm** và **ký pháp** dùng để mô tả dữ liệu, các mối quan hệ của dữ liệu, các ràng buộc trên dữ liệu của một tổ chức."
                },
                {
                  type: "paragraph",
                  text: "Mỗi loại mô hình đặc trưng cho một phương pháp tiếp cận dữ liệu của người phân tích - thiết kế hệ thống. Một mô hình dữ liệu hoàn chỉnh bao gồm **3 thành phần cốt lõi**:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Mô tả cấu trúc của CSDL",
                      bullets: ["Định nghĩa các kiểu dữ liệu, thực thể, bảng, mối quan hệ và cấu trúc tổ chức của CSDL."]
                    },
                    {
                      number: "2",
                      title: "Mô tả các thao tác trên dữ liệu",
                      bullets: ["Định nghĩa các phép toán được phép thực hiện trên dữ liệu (Thêm, Xóa, Sửa, Truy vấn dữ liệu)."]
                    },
                    {
                      number: "3",
                      title: "Mô tả các ràng buộc toàn vẹn",
                      bullets: ["Thiết lập các quy tắc nhằm đảm bảo sự chính xác, nhất quán và hợp lệ của dữ liệu."]
                    }
                  ]
                }
              ]
            },
            {
              id: "db-part-3-1-b",
              label: "b",
              title: "Phân loại các mô hình dữ liệu (3 nhóm lớn)",
              content: [
                {
                  type: "paragraph",
                  text: "Khoa học cơ sở dữ liệu phân chia các mô hình dữ liệu thành **3 nhóm chính**:"
                },
                {
                  type: "list",
                  items: [
                    "**a) Mô hình dữ liệu logic trên cơ sở đối tượng (Object-based logical model):** Mô hình thực thể mối quan hệ (ER Model), Mô hình hướng đối tượng (Object-Oriented Model), Mô hình dữ liệu ngữ nghĩa (Semantic Data Model), Mô hình dữ liệu chức năng (Functional Data Model).",
                    "**b) Mô hình dữ liệu logic trên cơ sở bản ghi (Record-based logical model):** Mô hình quan hệ (Relational Model), Mô hình mạng (Network Model), Mô hình phân cấp (Hierarchical Model).",
                    "**c) Mô hình dữ liệu vật lý (Physical Data Model):** Mô tả dữ liệu ở mức thấp nhất - dữ liệu được lưu trữ thế nào trong máy tính. Hai mô hình vật lý thường dùng: **mô hình hợp nhất** và **mô hình bộ nhớ khung**."
                  ]
                },
                {
                  type: "component",
                  component: "DataModelsClassificationStudio"
                }
              ]
            }
          ]
        },

        {
          id: "db-sub-3-2",
          number: "2",
          title: "Mô hình mạng (Network Model) & Mô hình phân cấp (Hierarchical Model)",
          parts: [
            {
              id: "db-part-3-2-a",
              label: "a",
              title: "Mô hình mạng (Network Model - Mục 3.3)",
              content: [
                {
                  type: "definition",
                  term: "Khái niệm chính trong Mô hình mạng",
                  text: "**Mẫu tin (record)**, **loại mẫu tin (record type)**, **loại liên hệ (set type)**."
                },
                {
                  type: "list",
                  items: [
                    "Mỗi loại mẫu tin đặc trưng cho một đối tượng riêng biệt (VD: Khoa, SinhVien...).",
                    "Mỗi loại mẫu tin được ký hiệu bằng **hình chữ nhật**; mỗi thể hiện của loại mẫu tin gọi là **mẫu tin** (VD: loại mẫu tin *SinhVien* có các mẫu tin là các sinh viên đang học tại trường).",
                    "**Loại liên hệ:** là sự liên kết giữa mẫu tin chủ và mẫu tin thành viên. Ký hiệu bằng **hình bầu dục**, với các mũi tên đi từ **loại mẫu tin chủ ➔ loại mẫu tin thành viên**."
                  ]
                },
                {
                  type: "highlight",
                  text: "**Nhận xét:**<br/>• **Ưu điểm:** tương đối đơn giản, dễ sử dụng.<br/>• **Nhược điểm:** không thích hợp biểu diễn CSDL quy mô lớn, vì đồ thị có hướng hạn chế khả năng diễn đạt ngữ nghĩa của dữ liệu, nhất là các mối liên hệ phức tạp trong thực tế."
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ minh họa (các thực thể):** SVien, MHoc, HPhan, KQua, DKien — liên kết qua các loại liên hệ: SVIEN_DIEM, MHOC_MO, MHOC_SAU, MHOC_TRUOC, KQUA_HPHAN."
                }
              ]
            },
            {
              id: "db-part-3-2-b",
              label: "b",
              title: "Mô hình phân cấp (Hierarchical Model - Mục 3.6)",
              content: [
                {
                  type: "definition",
                  term: "Cấu trúc Mô hình phân cấp",
                  text: "Mô hình dữ liệu là một **cây (tree)**, trong đó: Các **nút (node)** biểu diễn tập các thực thể; Giữa **nút cha** và **nút con** liên hệ theo một mối quan hệ xác định (quan hệ 1-nhiều)."
                },
                {
                  type: "code",
                  code: `Mức 1: SVien (TenSV, Lop, Nganh)
Mức 2:  ├── HPhan (TenHP, SLuong)
Mức 2:  └── (liên kết đến) MHoc (TenMH, Khoa, TinChi)
Mức 3:        └── KQua (DiemLT, DiemTH)`
                },
                {
                  type: "component",
                  component: "NetworkVsHierarchicalDuel"
                }
              ]
            }
          ]
        },

        {
          id: "db-sub-3-3",
          number: "3",
          title: "Mô hình thực thể kết hợp (Entity-Relationship Model - ER Model)",
          parts: [
            {
              id: "db-part-3-3-a",
              label: "a",
              title: "Các khái niệm chính trong Mô hình ER (Mục 3.4)",
              content: [
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Thực thể (Entity)",
                      bullets: [
                        "Là đối tượng/khái niệm có thể nhận biết một cách duy nhất (tương tự \"mẫu tin\" trong mô hình mạng). Ký hiệu: **hình chữ nhật**. VD: SinhVien, Khoa, MonHoc.",
                        "**Thực thể yếu (Weak Entity):** sự tồn tại phụ thuộc vào một thực thể khác. VD: *ThanNhan* phụ thuộc vào *NhanVien*. Ký hiệu: **đường viền kẻ đôi**.",
                        "**Thực thể mạnh (Strong Entity):** có một hay nhiều thực thể yếu phụ thuộc vào sự tồn tại của nó. Ký hiệu: **đường viền kẻ đơn**."
                      ]
                    },
                    {
                      number: "2",
                      title: "Loại thực thể (Entity Type) & Thuộc tính (Attribute)",
                      bullets: [
                        "**Loại thực thể (Entity Type):** loại đối tượng/khái niệm tồn tại độc lập.",
                        "**Thuộc tính của loại thực thể (Attribute):** các đặc tính riêng biệt của loại thực thể.",
                        "**Khóa của loại thực thể (Key):** các thuộc tính nhận diện loại thực thể."
                      ]
                    },
                    {
                      number: "3",
                      title: "Loại mối kết hợp (Relationship Type) & Số ngôi (Degree)",
                      bullets: [
                        "**Loại mối kết hợp:** sự liên kết giữa một loại thực thể mạnh và một loại thực thể yếu; giữa 2 thực thể có thể có nhiều mối kết hợp.",
                        "**Số ngôi của mối kết hợp (Degree):** tổng số loại thực thể tham gia vào mối kết hợp. Mối kết hợp cũng có thể có thuộc tính riêng.",
                        "**Ví dụ minh họa:** Các thực thể SVien, HPhan, MHoc, Nganh, Khoa; các mối kết hợp: *hoc*, *mo*, *dieukien*, *mhoctruoc/mhocsau* với các bậc số lượng (1,n), (0,n), (1,1)..."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "ErModelInteractiveStudio"
                }
              ]
            }
          ]
        },

        {
          id: "db-sub-3-4",
          number: "4",
          title: "Mô hình quan hệ (Relational) & Mô hình hướng đối tượng (OODM)",
          parts: [
            {
              id: "db-part-3-4-a",
              label: "a",
              title: "Mô hình quan hệ (Relational Model - Mục 3.5)",
              content: [
                {
                  type: "definition",
                  term: "Mô hình quan hệ (Relational Model)",
                  text: "Dựa trên cơ sở khái niệm **lý thuyết tập hợp** của các quan hệ, tức là các **tập k-bộ** với k cố định. Dữ liệu được tổ chức thành các **bảng (quan hệ)** gồm các cột (thuộc tính) và dòng (bộ giá trị)."
                },
                {
                  type: "label",
                  text: "Ví dụ minh họa các quan hệ:"
                },
                {
                  type: "list",
                  items: [
                    "`SVien (MaSV, Ten, Lop, Nganh)`",
                    "`Hoc (MaSV, MaHP, DiemLT, DiemTH)`",
                    "`HPhan (MaHP, SLuong, MaMH)`",
                    "`MHoc (MaMH, TenMH, Khoa, TinChi)`",
                    "`DKien (MaMH, MaMHTruoc)`"
                  ]
                }
              ]
            },
            {
              id: "db-part-3-4-b",
              label: "b",
              title: "Mô hình hướng đối tượng (Object-Oriented Data Model - OODM - Mục 3.7)",
              content: [
                {
                  type: "paragraph",
                  text: "Sử dụng các khái niệm: **Lớp (Class)**, **đối tượng (Object)**, **Sự kế thừa (Inheritance)**, kế thừa bội (multiple inheritance)."
                },
                {
                  type: "label",
                  text: "Đặc trưng cơ bản của cách tiếp cận hướng đối tượng:"
                },
                {
                  type: "list",
                  items: [
                    "**Tính đóng gói (Encapsulation):** Đóng gói cả dữ liệu và hành vi.",
                    "**Tính đa hình (Polymorphism):** Linh hoạt xử lý theo ngữ cảnh.",
                    "**Tính tái sử dụng (Reusability):** Thông qua cơ chế kế thừa.",
                    "Hướng tiếp cận này đang được quan tâm phát triển và có thể sẽ là mô hình CSDL của tương lai."
                  ]
                },
                {
                  type: "label",
                  text: "Ví dụ minh họa (các lớp và quan hệ):"
                },
                {
                  type: "list",
                  items: [
                    "**Lớp SVien:** thuộc tính (Ten, Lop, Nganh); phương thức (LapTKB(), InBangDiem()).",
                    "**Lớp Diem:** thuộc tính (DiemTH, DiemLT, DiemPrj); phương thức (SuaDiem()).",
                    "**Lớp HPhan:** thuộc tính (Ten, SLuong).",
                    "**Lớp MHoc:** thuộc tính (Ten, Khoa, SoTinChi); phương thức (CapNhatSTC()); có quan hệ đệ quy \"Mhoc truoc\" / \"Mhoc sau\" (Dieu kien - dieu kien tien quyet).",
                    "**Quan hệ:** SVien - *hoc* ➔ HPhan (1..* - 0..*); HPhan - *mo* ➔ MHoc (1 - 0..*)."
                  ]
                },
                {
                  type: "component",
                  component: "RelationalVsOopStudio"
                },
                {
                  type: "component",
                  component: "FiveModelsMultiPerspectiveArena"
                }
              ]
            }
          ]
        },

        {
          id: "db-sub-3-5",
          number: "5",
          title: "Kiểm tra nhanh kiến thức: Các mô hình dữ liệu",
          parts: [
            {
              id: "db-part-3-5-quiz",
              label: "★",
              title: "Mini Concept Check: Mô hình dữ liệu & Phân loại",
              content: [
                {
                  type: "component",
                  component: "DatabasePart3ConceptQuiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION IV: TÓM TẮT KIẾN THỨC CẦN NHỚ (ÔN THI)
       ============================================================ */
    {
      id: "db-section-4",
      roman: "IV",
      title: "Tóm tắt kiến thức cần nhớ (Ôn thi)",
      subsections: [
        {
          id: "db-sub-4-1",
          number: "1",
          title: "6 Trọng điểm ôn thi & Bộ thẻ ghi nhớ Flashcards",
          parts: [
            {
              id: "db-part-4-1-a",
              label: "a",
              title: "6 Điểm cốt lõi cần nắm vững toàn Chương I",
              content: [
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Nhược điểm hệ thống xử lý tập tin",
                      bullets: ["Dư thừa dữ liệu, không nhất quán, vấn đề nguyên tố giao tác, vấn đề toàn vẹn, dị thường truy cập tương tranh, thiếu an toàn dữ liệu."]
                    },
                    {
                      number: "2",
                      title: "Cơ sở dữ liệu (CSDL)",
                      bullets: ["Tập hợp có cấu trúc, phục vụ nhiều người dùng/ứng dụng đồng thời."]
                    },
                    {
                      number: "3",
                      title: "Ba mức kiến trúc CSDL",
                      bullets: ["Vật lý (Physical) - Khái niệm (Conceptual) - Khung nhìn (View/External)."]
                    },
                    {
                      number: "4",
                      title: "Hệ quản trị CSDL (DBMS)",
                      bullets: ["Phần mềm tạo lập & xử lý dữ liệu; CSDL là một thành phần của HQTCSDL."]
                    },
                    {
                      number: "5",
                      title: "3 nhóm mô hình dữ liệu",
                      bullets: ["Logic hướng đối tượng (ER, OO, ngữ nghĩa, chức năng) - Logic bản ghi (quan hệ, mạng, phân cấp) - Vật lý."]
                    },
                    {
                      number: "6",
                      title: "Nắm vững đặc điểm, ưu/nhược điểm của 5 mô hình",
                      bullets: ["Mô hình mạng, Mô hình ER, Mô hình quan hệ, Mô hình phân cấp, Mô hình hướng đối tượng."]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "DatabaseChapter1SummaryDashboard"
                }
              ]
            }
          ]
        },

        {
          id: "db-sub-4-2",
          number: "2",
          title: "Kiểm tra tổng hợp toàn diện Chương I",
          parts: [
            {
              id: "db-part-4-2-quiz",
              label: "★",
              title: "Final Chapter 1 Master Exam",
              content: [
                {
                  type: "component",
                  component: "DatabaseChapter1MasterExamQuiz"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
