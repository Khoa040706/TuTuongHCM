/* ============================================================
   DỮ LIỆU HỌC TẬP CHUẨN MỰC: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG III: NGÔN NGỮ SQL (STRUCTURED QUERY LANGUAGE) - T-SQL
   HOÀN TẤT TRỌN VẸN 100%: MỤC 0, I, II, III, IV, V (VIEW), VI (BÀI TẬP) & VII (GRAND EXAM)
   ============================================================ */

export const databaseCh3Data = {
  id: "database-ch3",
  title: "Chương III: Ngôn ngữ SQL",
  subtitle: "Cỗ máy truy vấn dữ liệu có cấu trúc: Hệ thống kiểu dữ liệu, Định nghĩa CSDL (DDL), Cập nhật DML, Truy vấn DQL (JOIN, Subquery, GROUP BY, HAVING), Khung nhìn (View), 8 Bài tập CSDL QLBanHang & Grand Master Exam.",
  sections: [
    /* ============================================================
       SECTION 0: INTERACTIVE SQL CYBER-ENGINE HERO BANNER
       ============================================================ */
    {
      id: "db3-section-0",
      roman: "★",
      title: "TỔNG QUAN NGÔN NGỮ SQL & CỖ MÁY TRUY VẤN",
      subsections: [
        {
          id: "db3-sub-0",
          number: "0",
          title: "Interactive SQL Cyber-Engine",
          parts: [
            {
              id: "db3-part-hero",
              label: "INTERACTIVE HERO BANNER",
              title: "Trực Quan Hóa 4 Phân Hệ SQL, Pipeline Tối Ưu Hóa & Thứ Tự Thực Thi Logic",
              content: [
                {
                  type: "component",
                  component: "SqlCyberEngineHeroBanner"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION I: SƠ LƯỢC VỀ HỆ QTCSDL SQL SERVER & T-SQL
       ============================================================ */
    {
      id: "db3-section-1",
      roman: "I",
      title: "Sơ lược về hệ QTCSDL SQL Server 2000 & Chuẩn T-SQL",
      subsections: [
        {
          id: "db3-sub-1-1",
          number: "1",
          title: "Hệ quản trị CSDL quan hệ SQL Server 2000",
          parts: [
            {
              id: "db3-part-1-1-a",
              label: "a",
              title: "Bản chất & Các đặc tính ưu việt của SQL Server",
              content: [
                {
                  type: "definition",
                  term: "SQL Server 2000",
                  definition: "Là một Hệ quản trị cơ sở dữ liệu quan hệ (RDBMS - Relational Database Management System) mạnh mẽ, phổ biến và được ứng dụng rộng rãi trong các hệ thống thông tin doanh nghiệp."
                },
                {
                  type: "paragraph",
                  text: "SQL Server cung cấp kiến trúc Client/Server hoàn chỉnh với các ưu điểm kỹ thuật vượt trội:"
                },
                {
                  type: "list",
                  items: [
                    "<strong>Khả năng lưu trữ quy mô lớn:</strong> Quản lý dung lượng dữ liệu từ hàng Terabyte đến Petabyte ổn định.",
                    "<strong>Tính bảo mật đa tầng:</strong> Cơ chế xác thực Windows & SQL Server Authentication, phân quyền chi tiết tới từng bảng, cột và dòng.",
                    "<strong>Sao lưu và phục hồi dữ liệu vượt trội:</strong> Hỗ trợ sao lưu dự phòng mạnh mẽ (Full, Differential, Transaction Log Backup) giúp khôi phục hệ thống khi có sự cố mà không làm mất dữ liệu."
                  ]
                }
              ]
            },
            {
              id: "db3-part-1-1-b",
              label: "b",
              title: "Ngôn ngữ Transact-SQL (T-SQL) & Hai phân nhóm cốt lõi",
              content: [
                {
                  type: "definition",
                  term: "Transact-SQL (T-SQL)",
                  definition: "Là ngôn ngữ mở rộng độc quyền của Microsoft dựa trên chuẩn ANSI/ISO SQL quốc tế, bổ sung các cấu trúc điều khiển lập trình (IF...ELSE, WHILE, Biến, Hàm người dùng, Cursor, Xử lý ngoại lệ)."
                },
                {
                  type: "table",
                  headers: ["Phân Nhóm", "Tên Đầy Đủ", "Ý Nghĩa & Mục Đích", "Các Câu Lệnh Tiêu Biểu"],
                  rows: [
                    [
                      "<strong>DDL</strong>",
                      "Data Definition Language",
                      "Ngôn ngữ định nghĩa dữ liệu: Dùng để khởi tạo, thay đổi cấu trúc hoặc xóa bỏ các đối tượng trong CSDL (Database, Table, View, Index).",
                      "<code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>"
                    ],
                    [
                      "<strong>DML</strong>",
                      "Data Manipulation Language",
                      "Ngôn ngữ thao tác dữ liệu: Dùng để truy vấn, chèn mới, cập nhật hoặc xóa các bản ghi dữ liệu bên trong các bảng.",
                      "<code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>"
                    ]
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION II: CÁC KIỂU DỮ LIỆU TRONG SQL (DATA TYPES)
       ============================================================ */
    {
      id: "db3-section-2",
      roman: "II",
      title: "Các kiểu dữ liệu trong SQL Server",
      subsections: [
        {
          id: "db3-sub-2-1",
          number: "1",
          title: "Hệ thống kiểu dữ liệu số chính xác & số gần đúng",
          parts: [
            {
              id: "db3-part-2-1-a",
              label: "a",
              title: "Khái niệm & Nhóm số chính xác (Exact Numbers)",
              content: [
                {
                  type: "definition",
                  term: "Kiểu dữ liệu (Data Type)",
                  definition: "Là thuộc tính chỉ định loại dữ liệu (số, chuỗi, ngày tháng...) và dung lượng bộ nhớ tối đa có thể lưu trữ của một cột hoặc đối tượng trong cơ sở dữ liệu."
                },
                {
                  type: "table",
                  headers: ["Kiểu Dữ Liệu", "Kích Thước", "Dải Giá Trị & Mô Tả Chi Tiết"],
                  rows: [
                    ["<code>tinyint</code>", "1 byte", "Số nguyên dương từ <strong>0 đến 255</strong>."],
                    ["<code>smallint</code>", "2 byte", "Số nguyên từ <strong>-32.768 đến 32.767</strong>."],
                    ["<code>int</code>", "4 byte", "Số nguyên từ <strong>-2.147.483.648 đến 2.147.483.647</strong>."],
                    ["<code>bigint</code>", "8 byte", "Số nguyên cực lớn từ <strong>-2<sup>63</sup> đến 2<sup>63</sup>-1</strong>."],
                    ["<code>numeric(p,d)</code> / <code>decimal(p,d)</code>", "Biến đổi", "Số độ chính xác cố định gồm <code>p</code> chữ số, <code>d</code> chữ số phần thập phân."],
                    ["<code>money</code>", "8 byte", "Dữ liệu tiền tệ từ <strong>-2<sup>63</sup>/10000 đến (2<sup>63</sup>-1)/10000</strong>."]
                  ]
                }
              ]
            },
            {
              id: "db3-part-2-1-b",
              label: "b",
              title: "Nhóm số gần đúng & Ngày giờ",
              content: [
                {
                  type: "table",
                  headers: ["Kiểu Dữ Liệu", "Kích Thước", "Mô Tả & Độ Chính Xác"],
                  rows: [
                    ["<code>float(n)</code>", "8 byte", "Số dấu chấm động từ <strong>-1.79E+308 đến 1.79E+308</strong>."],
                    ["<code>real</code>", "4 byte", "Số dấu chấm động đơn từ <strong>-3.40E+38 đến 3.40E+38</strong>."],
                    ["<code>datetime</code>", "8 byte", "Ngày giờ từ 01/01/1753 đến 31/12/9999 (chính xác đến 3.33ms)."],
                    ["<code>smalldatetime</code>", "4 byte", "Ngày giờ từ 01/01/1900 đến 06/06/2079 (chính xác đến phút)."]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "db3-sub-2-2",
          number: "2",
          title: "Hệ thống kiểu chuỗi ký tự chuẩn vs Chuỗi Unicode",
          parts: [
            {
              id: "db3-part-2-2-a",
              label: "a",
              title: "Chuỗi ký tự Non-Unicode vs Chuỗi Unicode",
              content: [
                {
                  type: "table",
                  headers: ["Kiểu Dữ Liệu", "Bản Chất Kích Thước", "Mô Tả Đặc Thù"],
                  rows: [
                    ["<code>char(n)</code>", "Cố định", "Lưu ký tự cố định <code>n</code> byte (tối đa 8.000 ký tự)."],
                    ["<code>varchar(n)</code>", "Thay đổi", "Lưu ký tự độ dài thay đổi theo thực tế (tối đa 8.000 ký tự)."],
                    ["<code>text</code>", "Lớn", "Lưu văn bản cực lớn lên tới 2GB."],
                    ["<code>nchar(n)</code>", "Cố định (2n bytes)", "Dữ liệu ký tự Unicode cố định (tối đa 4.000 ký tự)."],
                    ["<code>nvarchar(n)</code>", "Thay đổi (2x+2 bytes)", "Dữ liệu ký tự Unicode linh hoạt (tối đa 4.000 ký tự)."],
                    ["<code>ntext</code>", "Cực lớn", "Dữ liệu ký tự Unicode dung lượng lớn lên tới 1GB."]
                  ]
                }
              ]
            },
            {
              id: "db3-part-2-2-b",
              label: "b",
              title: "Bộ trực quan hóa kiểu dữ liệu & Bẫy chuỗi Unicode",
              content: [
                {
                  type: "component",
                  component: "SqlDataTypesVisualizer"
                },
                {
                  type: "component",
                  component: "SqlUnicodeStringMatrix"
                },
                {
                  type: "component",
                  component: "DatabaseCh3Part1ConceptQuiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION III: CÂU LỆNH ĐỊNH NGHĨA DỮ LIỆU (DDL), CẬP NHẬT & RÀNG BUỘC
       ============================================================ */
    {
      id: "db3-section-3",
      roman: "III",
      title: "Câu lệnh định nghĩa dữ liệu (DDL), Cập nhật & Ràng buộc toàn vẹn",
      subsections: [
        {
          id: "db3-sub-3-1",
          number: "1",
          title: "Tạo Cơ sở dữ liệu, Bảng & Thuộc tính cột (NULL, DEFAULT, IDENTITY)",
          parts: [
            {
              id: "db3-part-3-1-a",
              label: "a",
              title: "CREATE DATABASE, CREATE TABLE & Thuộc tính cột",
              content: [
                {
                  type: "code",
                  language: "sql",
                  code: `CREATE DATABASE QLNV;\nGO\nUSE QLNV;\nGO\n\nCREATE TABLE NhanVien (\n    manv char(5) NOT NULL PRIMARY KEY,\n    tennv nvarchar(30) NOT NULL,\n    luong money DEFAULT (1000),\n    phong int\n);`
                },
                {
                  type: "component",
                  component: "SqlConstraintViolationSandbox"
                },
                {
                  type: "component",
                  component: "SqlTableDesignerWorkbench"
                }
              ]
            }
          ]
        },
        {
          id: "db3-sub-3-2",
          number: "2",
          title: "Cập nhật DML, Thứ tự Khóa ngoại, ALTER & DROP TABLE",
          parts: [
            {
              id: "db3-part-3-2-a",
              label: "a",
              title: "Thao tác INSERT, UPDATE, DELETE & Quản trị cấu trúc",
              content: [
                {
                  type: "component",
                  component: "SqlFkInsertSequenceVisualizer"
                },
                {
                  type: "component",
                  component: "SqlDmlLiveSandbox"
                },
                {
                  type: "component",
                  component: "SqlAlterTableWorkbench"
                },
                {
                  type: "component",
                  component: "SqlDropTableDependencyGraph"
                },
                {
                  type: "component",
                  component: "SqlComprehensiveQldtStudio"
                },
                {
                  type: "component",
                  component: "DatabaseCh3Part2ConceptQuiz"
                },
                {
                  type: "component",
                  component: "DatabaseCh3Part3ConceptQuiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION IV: CÂU LỆNH THAO TÁC DỮ LIỆU (DML) - TRUY VẤN (DQL)
       ============================================================ */
    {
      id: "db3-section-4",
      roman: "IV",
      title: "Câu lệnh thao tác dữ liệu (DML) — Truy vấn dữ liệu (DQL / SELECT)",
      subsections: [
        {
          id: "db3-sub-4-1",
          number: "1",
          title: "Khái niệm chung & CSDL Công Ty mẫu",
          parts: [
            {
              id: "db3-part-4-1-a",
              label: "a",
              title: "Bản chất ngôn ngữ rút trích dữ liệu & CSDL Công Ty",
              content: [
                {
                  type: "component",
                  component: "SqlQueryConsoleLiveWorkbench"
                },
                {
                  type: "component",
                  component: "SqlRelationalAlgebraBridge"
                }
              ]
            }
          ]
        },
        {
          id: "db3-sub-4-2",
          number: "2",
          title: "Truy vấn cơ bản: SELECT, WHERE, LIKE, BETWEEN & ORDER BY",
          parts: [
            {
              id: "db3-part-4-2-a",
              label: "a",
              title: "Cú pháp SELECT, toán tử LIKE & Sắp xếp ORDER BY",
              content: [
                {
                  type: "component",
                  component: "SqlLikeWildcardSandbox"
                },
                {
                  type: "component",
                  component: "DatabaseCh3Part4ConceptQuiz"
                }
              ]
            }
          ]
        },
        {
          id: "db3-sub-4-3",
          number: "3",
          title: "JOIN, Truy vấn lồng, GROUP BY & HAVING",
          parts: [
            {
              id: "db3-part-4-3-a",
              label: "a",
              title: "Các phép JOIN, Subquery IN/EXISTS & Gom nhóm",
              content: [
                {
                  type: "component",
                  component: "SqlJoinFamilyVisualizer"
                },
                {
                  type: "component",
                  component: "SqlNestedQueryTracer"
                },
                {
                  type: "component",
                  component: "DatabaseCh3Part5ConceptQuiz"
                },
                {
                  type: "component",
                  component: "SqlAggregateNullInspector"
                },
                {
                  type: "component",
                  component: "SqlGroupByHavingPipeline"
                },
                {
                  type: "component",
                  component: "DatabaseChapter3DqlSummaryDashboard"
                },
                {
                  type: "component",
                  component: "DatabaseChapter3DqlMasterExamQuiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION V: KHUNG NHÌN (VIEW)
       ============================================================ */
    {
      id: "db3-section-5",
      roman: "V",
      title: "Khung nhìn (View)",
      subsections: [
        {
          id: "db3-sub-5-1",
          number: "1",
          title: "Bản chất Khung nhìn (View) & Cú pháp Quản trị",
          parts: [
            {
              id: "db3-part-5-1-a",
              label: "a",
              title: "Khái niệm Bảng vật lý vs Khung nhìn (View)",
              content: [
                {
                  type: "definition",
                  term: "Bảng (Table) vs Khung nhìn (View)",
                  definition: "Bảng là quan hệ được tổ chức lưu trữ vật lý trong CSDL. Khung nhìn (View) cũng là một quan hệ nhưng là BẢNG ẢO: không được lưu trữ vật lý, không chứa dữ liệu thực, được định nghĩa từ những bảng khác thông qua câu truy vấn SELECT và có thể truy vấn hay cập nhật thông qua khung nhìn."
                },
                {
                  type: "paragraph",
                  text: "Cú pháp tạo và xóa khung nhìn:"
                },
                {
                  type: "code",
                  language: "sql",
                  code: `-- Tạo khung nhìn:\nCREATE VIEW <tên khung nhìn> AS <câu truy vấn>\n\n-- Xóa khung nhìn:\nDROP VIEW <tên khung nhìn>`
                },
                {
                  type: "list",
                  items: [
                    "<strong>Đặc điểm của \"bảng ảo\" này:</strong>",
                    "• Danh sách thuộc tính trùng với các thuộc tính trong mệnh đề <code>SELECT</code>.",
                    "• Số dòng phụ thuộc vào điều kiện ở mệnh đề <code>WHERE</code>.",
                    "• Dữ liệu được lấy từ các bảng ở mệnh đề <code>FROM</code>."
                  ]
                },
                {
                  type: "code",
                  language: "sql",
                  code: `-- Ví dụ: Tạo khung nhìn 'NVP5' chứa danh sách nhân viên phòng số 5:\nCREATE VIEW NVP5 AS\nSELECT MANV, HONV, TENLOT, TENNV\nFROM NHANVIEN\nWHERE PHG = 5;\n\n-- Sử dụng khung nhìn như một bảng thông thường:\nSELECT TENNV\nFROM NVP5\nWHERE luong > 2000;`
                },
                {
                  type: "component",
                  component: "SqlViewVirtualTableWorkbench"
                }
              ]
            },
            {
              id: "db3-part-5-1-b",
              label: "b",
              title: "Quy tắc Cập nhật Dữ liệu qua View & Mệnh đề WITH CHECK OPTION",
              content: [
                {
                  type: "callout",
                  variant: "important",
                  title: "Quy tắc Cập nhật qua View & WITH CHECK OPTION",
                  text: "• Một View chỉ có thể INSERT/UPDATE/DELETE khi nó dựa trên 1 bảng cơ sở duy nhất, không chứa DISTINCT, không chứa GROUP BY, HAVING, hàm kết hợp hay cột tính toán.\n• Mệnh đề WITH CHECK OPTION: Ngăn chặn thao tác INSERT hoặc UPDATE làm cho dữ liệu không còn thỏa mãn điều kiện WHERE của chính View đó (tránh lỗi bẫy biến mất dữ liệu)."
                },
                {
                  type: "component",
                  component: "SqlViewUpdatableSandbox"
                },
                {
                  type: "component",
                  component: "DatabaseCh3Part6ConceptQuiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION VI: BÀI TẬP TỔNG HỢP CHƯƠNG III (CSDL QLBANHANG)
       ============================================================ */
    {
      id: "db3-section-6",
      roman: "VI",
      title: "Bài tập tổng hợp Chương III (CSDL QLBanHang)",
      subsections: [
        {
          id: "db3-sub-6-1",
          number: "1",
          title: "Lời giải chuẩn mực & Phân tích 8 Bài tập Thực hành CSDL QLBanHang",
          parts: [
            {
              id: "db3-part-6-1-a",
              label: "a",
              title: "Đặc tả lược đồ CSDL QLBanHang & Studio Lời giải T-SQL",
              content: [
                {
                  type: "paragraph",
                  text: "Cho lược đồ CSDL <code>QLBanHang</code>. Thực hiện 8 yêu cầu sau bằng SQL:"
                },
                {
                  type: "list",
                  items: [
                    "<strong>1.</strong> Tạo CSDL và tạo các bảng, nhập dữ liệu cho các bảng trong CSDL.",
                    "<strong>2.</strong> Cho biết mã và tên của các mặt hàng có giá lớn hơn 10 và số lượng hiện có ít hơn 20.",
                    "<strong>3.</strong> Cho biết thông tin những khách hàng nào đã mua mặt hàng áo Việt Tiến.",
                    "<strong>4.</strong> Cho biết thông tin những mặt hàng nào chưa từng được khách hàng đặt mua.",
                    "<strong>5.</strong> Cho biết tổng số lượng bán được của mỗi mặt hàng.",
                    "<strong>6.</strong> Bổ sung ràng buộc cho bảng <code>DONDATHANG</code>: ràng buộc kiểm tra ngày giao hàng và ngày chuyển hàng phải sau hoặc bằng với ngày đặt hàng.",
                    "<strong>7.</strong> Cho biết thông tin những khách hàng có cùng ngày sinh.",
                    "<strong>8.</strong> Thống kê số lượng hóa đơn đã lập của mỗi nhân viên."
                  ]
                },
                {
                  type: "component",
                  component: "SqlQlBanHangExerciseWorkbench"
                }
              ]
            },
            {
              id: "db3-part-6-1-b",
              label: "b",
              title: "Bộ giải mã kỹ thuật chuyên sâu: Anti-Join (Bài 4) & Self-Join (Bài 7)",
              content: [
                {
                  type: "component",
                  component: "SqlAntiJoinPatternExplorer"
                },
                {
                  type: "component",
                  component: "SqlSelfJoinMatchingVisualizer"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION VII: TỔNG KẾT TOÀN DIỆN & GRAND MASTER EXAM CHƯƠNG III
       ============================================================ */
    {
      id: "db3-section-7",
      roman: "VII",
      title: "Tổng kết toàn diện & Grand Master Exam Chương III",
      subsections: [
        {
          id: "db3-sub-7-1",
          number: "1",
          title: "Grand Summary Dashboard: 7 Trụ Cột Tri Thức T-SQL",
          parts: [
            {
              id: "db3-part-7-1-a",
              label: "a",
              title: "Bản đồ kiến thức toàn bộ Chương III",
              content: [
                {
                  type: "component",
                  component: "DatabaseChapter3CompleteSummaryDashboard"
                }
              ]
            }
          ]
        },
        {
          id: "db3-sub-7-2",
          number: "2",
          title: "Grand Master Exam: Đề Kiểm Tra Toàn Diện Chương III",
          parts: [
            {
              id: "db3-part-7-2-a",
              label: "a",
              title: "Đề thi trắc nghiệm 10 câu Grand Master Exam",
              content: [
                {
                  type: "component",
                  component: "DatabaseChapter3GrandMasterExamQuiz"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
