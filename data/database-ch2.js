/* ============================================================
   DỮ LIỆU HỌC TẬP CHUẨN MỰC: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG II: MÔ HÌNH DỮ LIỆU QUAN HỆ (RELATIONAL DATA MODEL)
   HOÀN TẤT 100%: PHẦN I, PHẦN II, PHẦN III, PHẦN IV & PHẦN V TỔNG KẾT
   ============================================================ */

export const databaseCh2Data = {
  id: "database-ch2",
  title: "Chương II: Mô hình dữ liệu quan hệ",
  subtitle: "Nền tảng toán học của RDBMS: Lý thuyết tập hợp, Giải phẫu bảng k-bộ, Tam trụ ràng buộc toàn vẹn & Cỗ máy đại số quan hệ.",
  sections: [
    /* ============================================================
       SECTION 0: INTERACTIVE RELATIONAL CYBER-MATRIX HERO BANNER
       ============================================================ */
    {
      id: "db2-section-0",
      roman: "★",
      title: "TỔNG QUAN MÔ HÌNH QUAN HỆ & RELATIONAL MATRIX",
      subsections: [
        {
          id: "db2-sub-0",
          number: "0",
          title: "Interactive Relational Cyber-Matrix",
          parts: [
            {
              id: "db2-part-hero",
              label: "INTERACTIVE HERO BANNER",
              title: "Trực Quan Hóa Cấu Trúc Bảng Toán Học & Tam Trụ Ràng Buộc Toàn Vẹn",
              content: [
                {
                  type: "component",
                  component: "RelationalModelHeroBanner"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION I: CÁC ĐỊNH NGHĨA (BASIC DEFINITIONS)
       ============================================================ */
    {
      id: "db2-section-1",
      roman: "I",
      title: "Các định nghĩa cơ bản",
      subsections: [
        {
          id: "db2-sub-1-1",
          number: "1",
          title: "Mở đầu & Khái niệm Mô hình quan hệ",
          parts: [
            {
              id: "db2-part-1-1-a",
              label: "a",
              title: "Ví dụ minh họa — Bảng HOCBONG & Rút ra các khái niệm",
              content: [
                {
                  type: "table",
                  headers: ["maSoSV", "hoTenSV", "ngaySinh", "diemTB", "mucHBg"],
                  rows: [
                    ["Ti05020", "Lê Ngọc Phúc", "06-12-1988", "9.0", "240.000"],
                    ["Ti05023", "Nguyễn Mỹ Truyền", "20-02-1987", "8.2", "180.000"],
                    ["Ti05027", "Phạm Thu Hoa", "23-05-1987", "8.5", "180.000"],
                    ["Ti05006", "Phạm Thu Hường", "23-06-1987", "7.8", "120.000"]
                  ]
                },
                {
                  type: "paragraph",
                  text: "Bảng trên lưu thông tin xếp loại học bổng của sinh viên. Từ ví dụ thực tế này, khoa học CSDL rút ra các khái niệm nền tảng:"
                },
                {
                  type: "list",
                  items: [
                    "**maSoSV, hoTenSV, ngaySinh, diemTB, mucHBg:** gọi là các **thuộc tính (attribute)**.",
                    "**{9.0, 8.2, 8.5, 7.8}:** chính là **miền giá trị (domain)** của thuộc tính `diemTB`.",
                    "Một dòng trong bảng (VD: `Ti05020 Lê Ngọc Phúc 06-12-1988 9.0 240.000`) gọi là một **bộ (tuple)**.",
                    "Bảng có tên **HOCBONG** gọi là một **quan hệ (relation)**."
                  ]
                },
                {
                  type: "definition",
                  term: "Định nghĩa hình thức toán học",
                  text: "Cho tập hữu hạn các phần tử **$U = \\{A_1, A_2, \\dots, A_n\\}$**. Tập $U$ được gọi là **tập các thuộc tính**. Mỗi phần tử $A_i$ của tập $U$ có một miền giá trị tương ứng, ký hiệu là **$D(A_i)$** hay **$\\text{dom}(A_i)$**."
                }
              ]
            },
            {
              id: "db2-part-1-1-b",
              label: "b",
              title: "Mô hình quan hệ là gì? (Mục 1.2)",
              content: [
                {
                  type: "paragraph",
                  text: "Mô hình CSDL quan hệ (gọi tắt là **mô hình quan hệ**) do **E.F Codd** đề xuất năm **1970/1971**."
                },
                {
                  type: "label",
                  text: "Mô hình này bao gồm 3 thành phần:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Hệ thống các ký hiệu",
                      bullets: ["Dùng để mô tả dữ liệu dưới dạng dòng và cột như: quan hệ, bộ, thuộc tính, khóa chính, khóa ngoại..."]
                    },
                    {
                      number: "2",
                      title: "Tập hợp các phép toán",
                      bullets: ["Các phép toán được phép thực thi trên dữ liệu như phép toán tập hợp, phép toán đại số quan hệ."]
                    },
                    {
                      number: "3",
                      title: "Ràng buộc toàn vẹn quan hệ",
                      bullets: ["Relational integrity constraints nhằm kiểm soát tính đúng đắn và nhất quán của dữ liệu."]
                    }
                  ]
                }
              ]
            },
            {
              id: "db2-part-1-1-c",
              label: "c",
              title: "Thuộc tính (Attribute — Mục 1.3)",
              content: [
                {
                  type: "definition",
                  term: "Thuộc tính (Attribute)",
                  text: "Là các **đặc trưng của đối tượng** (VD: Bài toán quản lý điểm thi sinh viên ➔ đối tượng sinh viên có các đặc trưng: họ tên, ngày sinh, học bổng, tỉnh, lớp... ➔ đó là các thuộc tính)."
                },
                {
                  type: "list",
                  items: [
                    "Được **phân biệt bằng tên gọi**.",
                    "Phải thuộc vào **một kiểu dữ liệu nhất định** (số, chuỗi, ngày tháng, logic, hình ảnh...).",
                    "**Lưu ý quan trọng:** Trong cùng một quan hệ (đối tượng), **không được có 2 thuộc tính cùng tên**.",
                    "Thông thường mỗi thuộc tính chỉ chọn giá trị trong một **tập con của kiểu dữ liệu** ➔ gọi là **miền giá trị (domain)** của thuộc tính đó (VD: điểm thi sinh viên chỉ là các số thực từ 0 đến 10).",
                    "Thường dùng chữ cái hoa **$A, B, C$** để biểu diễn thuộc tính, hoặc **$A_1, \\dots, A_n$** để biểu diễn số lượng lớn thuộc tính."
                  ]
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-1-2",
          number: "2",
          title: "Lược đồ quan hệ, Tân từ & Lược đồ CSDL",
          parts: [
            {
              id: "db2-part-1-2-a",
              label: "a",
              title: "Lược đồ quan hệ (Relation Schema — Mục 1.4)",
              content: [
                {
                  type: "definition",
                  term: "Lược đồ quan hệ (Relation Schema)",
                  text: "Là **tập tất cả các thuộc tính** cần quản lý của một đối tượng cùng với những mối liên hệ giữa chúng. Ký hiệu: **$R(U)$** hoặc **$R(A_1, \\dots, A_n)$**."
                },
                {
                  type: "paragraph",
                  text: "Ví dụ: Lược đồ quan hệ sinh viên (đặt tên SV):<br/>`SV(maSoSV, hoTenSV, ngaySinh, diemTB, mucHbg)`"
                },
                {
                  type: "highlight",
                  text: "**Tân từ của lược đồ quan hệ (Predicate):**<br/>• Là **ý nghĩa** ngữ nghĩa của LĐQH.<br/>• Ví dụ: với LĐQH SV ở trên, tân từ là: *\"Mỗi sinh viên có một mã số duy nhất, mỗi mã số xác định tất cả các thuộc tính của sinh viên đó như họ tên, ngày sinh, mức học bổng...\"*"
                }
              ]
            },
            {
              id: "db2-part-1-2-b",
              label: "b",
              title: "Lược đồ CSDL (Database Schema)",
              content: [
                {
                  type: "definition",
                  term: "Lược đồ CSDL (Database Schema)",
                  text: "Nhiều lược đồ quan hệ cùng nằm trong một hệ thống quản lý ➔ gọi là **lược đồ CSDL**."
                },
                {
                  type: "paragraph",
                  text: "Ví dụ: Lược đồ CSDL quản lý điểm sinh viên gồm 5 lược đồ quan hệ:"
                },
                {
                  type: "list",
                  items: [
                    "`SV(maSV, hotenSV, ngaySinh, maLop, tinh, hocBong)`",
                    "`Lop(maLop, tenLop, siSo, maKhoa)`",
                    "`Khoa(maKhoa, tenKhoa, soCB)`",
                    "`MonHoc(maMH, tenMH, soTiet)`",
                    "`KetQua(maSV, maMH, diemThi)`"
                  ]
                },
                {
                  type: "key-point",
                  text: "**Nhận xét:** Khi cho tập thuộc tính $U = \\{A_1, A_2, \\dots, A_n\\}$, ta coi như cho trước LĐQH, và cùng với nó có quan hệ rỗng **$r = \\emptyset$**. Khi lược đồ được nạp thêm ít nhất một dòng ➔ ta có quan hệ **khác rỗng**."
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-1-3",
          number: "3",
          title: "Khái niệm Quan hệ & Cơ sở lý thuyết tập hợp",
          parts: [
            {
              id: "db2-part-1-3-a",
              label: "a",
              title: "Định nghĩa Quan hệ (Relation — Mục 1.5)",
              content: [
                {
                  type: "definition",
                  term: "Khái niệm Quan hệ (Relation)",
                  text: "Quan hệ là **sự thể hiện của LĐQH tại một thời điểm**. Một quan hệ **$r$** trên LĐQH $R$ là một **tập con của tích Descartes (Đề các)** của các miền giá trị $D(A_i), i = 1\\dots n$."
                },
                {
                  type: "code",
                  code: `r ⊆ D(A1) × D(A2) × ... × D(An)
với D(Ai) là miền giá trị của thuộc tính Ai.`
                },
                {
                  type: "paragraph",
                  text: "Ví dụ: Bảng HOCBONG là một quan hệ, với $U = \\{\\text{maSoSV, hoTenSV, ngaySinh, diemTB, mucHbg}\\}$."
                },
                {
                  type: "label",
                  text: "Nhận xét bản chất:"
                },
                {
                  type: "list",
                  items: [
                    "Quan hệ $r$ là một **bảng hai chiều**: Cột thứ $i$ là các giá trị của $D(A_i)$; Mỗi dòng là một bộ $n$ giá trị của các thuộc tính $A_i$ — một dòng chứa thông tin về một đối tượng, gọi là **một bộ (tuple)** của quan hệ.",
                    "Trên một LĐQH có thể xây dựng được **nhiều quan hệ khác nhau** — chỉ cần thay đổi một dòng hoặc một cột là được một quan hệ mới."
                  ]
                }
              ]
            },
            {
              id: "db2-part-1-3-b",
              label: "b",
              title: "Hai lưu ý cốt lõi theo lý thuyết tập hợp & Ví dụ 7-bộ",
              content: [
                {
                  type: "highlight",
                  text: "**Lưu ý quan trọng theo lý thuyết tập hợp:**<br/>1. Thêm vào một dòng (cột) **giống với dòng (cột) đã có** thì quan hệ **không thay đổi**.<br/>2. **Thứ tự của các dòng (cột) không quan trọng**."
                },
                {
                  type: "table",
                  headers: ["ma", "hoten", "nsinh", "donvi", "luong", "phucap", "thuong"],
                  rows: [
                    ["01", "Minh", "1965", "K.CNTT", "800", "50", "100"],
                    ["02", "Đông", "1946", "K. toán", "700", "122", "48"],
                    ["03", "Long", "1954", "K. lý", "1.500", "100", "90"],
                    ["04", "Kiên", "1956", "K. hóa", "1.900", "150", "75"],
                    ["05", "Đại", "1958", "K. văn", "3.000", "60", "80"]
                  ]
                },
                {
                  type: "paragraph",
                  text: "Với $U = \\{\\text{ma, hoten, nsinh, donvi, luong, phucap, thuong}\\}$, quan hệ $r$ trên có **5 phần tử**. Mỗi phần tử là một bộ 7 giá trị (còn gọi là **7-bộ**)."
                },
                {
                  type: "component",
                  component: "RelationalMathAndConceptsVisualizer"
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-1-4",
          number: "4",
          title: "Họ nhà Khóa trong Lược đồ quan hệ",
          parts: [
            {
              id: "db2-part-1-4-a",
              label: "a",
              title: "Quy ước ký hiệu & Định nghĩa Siêu khóa (Mục 1.6 a)",
              content: [
                {
                  type: "paragraph",
                  text: "Từ đây, quy ước ký hiệu toán học: **thuộc tính bằng chữ hoa $A, B, C$**; **tập thuộc tính bằng $X, Y, Z$**; **giá trị cụ thể bằng chữ thường $a, b, c...$**"
                },
                {
                  type: "definition",
                  term: "Siêu khóa (Super Key — SK)",
                  text: "Siêu khóa của một LĐQH $R$ là **một tập hợp gồm một hay nhiều thuộc tính** của $R$ có tính chất **xác định duy nhất một bộ** trong mỗi thể hiện của $R$."
                },
                {
                  type: "code",
                  code: `Ký hiệu tập thuộc tính này là SK, ta có ràng buộc trên r(R):
ti(SK) ≠ tj(SK), với ti, tj là hai bộ khác nhau bất kỳ trong r.`
                },
                {
                  type: "list",
                  items: [
                    "Cho $R(U)$, nếu $SK$ là siêu khóa của $R$ thì **$SK \\subseteq U$**.",
                    "Một quan hệ có **ít nhất một siêu khóa**, đó là tập $U$ gồm tất cả thuộc tính của quan hệ.",
                    "**Mọi tập con của $U$ chứa một siêu khóa cũng là siêu khóa**."
                  ]
                }
              ]
            },
            {
              id: "db2-part-1-4-b",
              label: "b",
              title: "Khóa, Khóa chính, Khóa dự tuyển & Khóa ngoại (Mục 1.6 b, c, d, e, f)",
              content: [
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "b",
                      title: "Khóa (Key / Khóa tối thiểu)",
                      bullets: [
                        "Khóa của LĐQH là **một siêu khóa** của lược đồ này sao cho **mọi tập con thực sự của nó không là siêu khóa**.",
                        "➔ Khóa là **siêu khóa tối thiểu (tối tiểu)**.",
                        "VD: LĐQH SV, thuộc tính **maSV** là khóa."
                      ]
                    },
                    {
                      number: "c",
                      title: "Khóa chính (Primary Key)",
                      bullets: [
                        "Là **một khóa tối thiểu** được người phân tích **chọn để cài đặt**."
                      ]
                    },
                    {
                      number: "d",
                      title: "Khóa dự tuyển (Candidate Key)",
                      bullets: [
                        "Là các khóa tối thiểu **khác** mà không phải khóa chính."
                      ]
                    },
                    {
                      number: "e",
                      title: "Khóa ngoài / Khóa ngoại (Foreign Key)",
                      bullets: [
                        "Là một tập hợp gồm một hay nhiều thuộc tính **là khóa của một lược đồ quan hệ khác**.",
                        "Trong mô hình dữ liệu quan hệ, **khóa đóng vai trò quan trọng** vì nó giúp nhận biết thực thể một cách nhanh chóng trong CSDL."
                      ]
                    },
                    {
                      number: "f",
                      title: "Thuộc tính khóa & Thuộc tính không khóa",
                      bullets: [
                        "**Thuộc tính khóa (Prime Attribute):** là thuộc tính có tham gia vào **một khóa bất kỳ** (dự tuyển hay khóa chính).",
                        "**Thuộc tính không khóa (Non-Prime Attribute):** là thuộc tính **không tham gia** vào khóa nào."
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  component: "RelationalKeysHierarchyStudio"
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-1-5",
          number: "5",
          title: "Lược đồ và Thể hiện của CSDL qua 3 mức",
          parts: [
            {
              id: "db2-part-1-5-a",
              label: "a",
              title: "Lược đồ CSDL vs Thể hiện của CSDL (Mục 1.7)",
              content: [
                {
                  type: "definition",
                  term: "Lược đồ CSDL (Database Schema)",
                  text: "Toàn bộ mô tả CSDL gọi là **lược đồ CSDL**. Tương ứng với 3 mức trừu xuất dữ liệu (đã học ở Chương I), có 3 loại lược đồ: **1) Mức cao nhất:** nhiều **lược đồ ngoài** (lược đồ con/khung nhìn) cho các cách nhìn dữ liệu khác nhau của người sử dụng khác nhau; **2) Mức logic:** **lược đồ logic**; **3) Mức thấp nhất:** **lược đồ vật lý**."
                },
                {
                  type: "definition",
                  term: "Thể hiện của CSDL (Database Instance)",
                  text: "Toàn bộ dữ liệu lưu trữ trong CSDL tại **một thời điểm nhất định** gọi là **một thể hiện của CSDL**. ➔ **Nhiều thể hiện** của CSDL có thể tương ứng với **cùng một lược đồ CSDL**."
                }
              ]
            },
            {
              id: "db2-part-1-5-b",
              label: "b",
              title: "Ví dụ minh họa 3 mức biểu diễn (Khung nhìn ➔ Logic ➔ Struct C Vật lý)",
              content: [
                {
                  type: "list",
                  items: [
                    "**Khung nhìn 1:** `MaNV, Hodem, Ten, Tuoi, Luong`",
                    "**Khung nhìn 2:** `MaNV, Ten, Ma_chi_nhanh`",
                    "**Mức logic:** `MaNV, Hodem, Ten, Ngay_sinh, Tuoi, Luong, Ma_chi_nhanh`"
                  ]
                },
                {
                  type: "code",
                  code: `// Mức vật lý: Cài đặt cấu trúc lưu trữ tập tin trong ngôn ngữ C
struct NHANVIEN {
    int MaNV;
    int Ma_chi_nhanh;
    char Hodem[15];
    char Ten[15];
    struct date Ngay_sinh;
    float Luong;
    struct NHANVIEN *next;  // con trỏ đến bản ghi tiếp theo của tệp NHANVIEN
};`
                },
                {
                  type: "component",
                  component: "SchemaVsInstance3LevelExplorer"
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-1-6",
          number: "6",
          title: "Kiểm tra nhanh kiến thức: Các định nghĩa mô hình quan hệ",
          parts: [
            {
              id: "db2-part-1-6-quiz",
              label: "★",
              title: "Mini Concept Check: Các định nghĩa mô hình quan hệ",
              content: [
                {
                  type: "component",
                  component: "DatabaseCh2Part1ConceptQuiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION II: ĐẠI SỐ QUAN HỆ (RELATIONAL ALGEBRA)
       ============================================================ */
    {
      id: "db2-section-2",
      roman: "II",
      title: "Đại số quan hệ (Relational Algebra)",
      subsections: [
        {
          id: "db2-sub-2-1",
          number: "1",
          title: "Giới thiệu & Các khái niệm nền tảng",
          parts: [
            {
              id: "db2-part-2-1-a",
              label: "a",
              title: "Giới thiệu Đại số quan hệ (Mục 2.1)",
              content: [
                {
                  type: "paragraph",
                  text: "Đại số quan hệ là **phương pháp mô hình hóa các phép toán** để thao tác trên CSDL quan hệ."
                },
                {
                  type: "list",
                  items: [
                    "Là **ưu điểm** của mô hình dữ liệu quan hệ (tiếp cận kết quả công cụ toán học trong xây dựng ngôn ngữ khai thác, xử lý dữ liệu).",
                    "Các phép toán của đại số quan hệ khá đơn giản nhưng **khá mạnh**, có tính **đầy đủ, phi thủ tục**.",
                    "Là cơ sở cho việc thiết lập các **ngôn ngữ con dữ liệu bậc cao hơn** (VD: SQL)."
                  ]
                }
              ]
            },
            {
              id: "db2-part-2-1-b",
              label: "b",
              title: "Một số khái niệm cơ bản (Tương thích, Rời nhau, Xếp cạnh nhau)",
              content: [
                {
                  type: "definition",
                  term: "Hai quan hệ tương thích",
                  text: "Hai quan hệ $r_1, r_2$ **tương thích** với nhau nếu chúng có **cùng tập thuộc tính $U$** ($U_1 = U_2$)."
                },
                {
                  type: "definition",
                  term: "Hai quan hệ rời nhau",
                  text: "$r_1, r_2$ là **hai quan hệ rời nhau** nếu chúng **không có thuộc tính chung** ($U_1 \\cap U_2 = \\emptyset$)."
                },
                {
                  type: "definition",
                  term: "Khái niệm xếp cạnh nhau",
                  text: "Cho bộ $t = (a_1, a_2, \\dots, a_n)$ và bộ $u = (b_1, b_2, \\dots, b_m)$, ta có:\n$$(t, u) = (a_1, a_2, \\dots, a_n, b_1, b_2, \\dots, b_m)$$"
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-2-2",
          number: "2",
          title: "Phép chọn (Selection — σ) & Phép chiếu (Projection — π)",
          parts: [
            {
              id: "db2-part-2-2-a",
              label: "a",
              title: "Phép chọn (Selection — ký hiệu σ — Mục 2.2)",
              content: [
                {
                  type: "definition",
                  term: "Phép chọn (Selection — σ)",
                  text: "Dùng để xây dựng **một tập con các bộ** của quan hệ đã cho, **thỏa mãn một điều kiện $C$** cho trước. Điều kiện $C$ là một biểu thức logic trả về **True/False**."
                },
                {
                  type: "code",
                  code: `σ_C(r) = { t | t ∈ r, C(t) = True }`
                },
                {
                  type: "label",
                  text: "Cấu trúc biểu thức logic C:"
                },
                {
                  type: "list",
                  items: [
                    "`(tên thuộc tính) (toán tử so sánh) (giá trị hằng)`",
                    "`(tên thuộc tính) (toán tử so sánh) (tên thuộc tính)`",
                    "**Toán tử so sánh:** `{=, <, ≤, >, ≥, ≠}`",
                    "**Giá trị hằng:** một giá trị trong miền thuộc tính."
                  ]
                },
                {
                  type: "highlight",
                  text: "**Lưu ý quan trọng:**<br/>• Toán tử so sánh `{=, <, ≤, >, ≥, ≠}` chỉ áp dụng cho thuộc tính có **miền giá trị có thứ tự**. Nếu miền không có thứ tự ➔ chỉ dùng `{=, ≠}`.<br/>• **Các phép chọn có tính giao hoán:** $\\sigma_{C_1}(\\sigma_{C_2}(R)) = \\sigma_{C_2}(\\sigma_{C_1}(R))$."
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ 1:** Trên quan hệ `HOCBONG`: `σ_(DiemTB ≥ 9.0)(HOCBONG)`"
                },
                {
                  type: "table",
                  headers: ["maSoSV", "hoTenSV", "NgaySinh", "DiemTB", "MucHBg"],
                  rows: [
                    ["Ti05020", "Lê Ngọc Phúc", "06-12-1988", "9.0", "240.000"]
                  ]
                },
                {
                  type: "label",
                  text: "CSDL mẫu dùng cho các ví dụ tiếp theo:"
                },
                {
                  type: "list",
                  items: [
                    "`SINHVIEN(MaSV, Hoten, Namsinh, QQ, Hocluc)`",
                    "`DETAI(MaDT, TenDT, Chunhiem, Kinhphi)`",
                    "`SV_DT(MaSV, MaDT, NoiAD, KQ)`"
                  ]
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ 2:** Tìm những sinh viên sinh trước 1984 và quê ở Đồng Tháp:<br/>`σ_(Namsinh < 1984 ∧ QQ = 'Đồng Tháp')(SINHVIEN)`<br/>➔ Kết quả: `SV003 - Trần Đức Thịnh - 1983 - Đồng Tháp - 8.1`"
                }
              ]
            },
            {
              id: "db2-part-2-2-b",
              label: "b",
              title: "Phép chiếu (Projection — ký hiệu π — Mục 2.3)",
              content: [
                {
                  type: "definition",
                  term: "Phép chiếu (Projection — π)",
                  text: "Cho $r$ là quan hệ trên LĐQH $R(U), X \\subseteq U$, khi đó:\n$$\\pi_X(r) = \\{t[X] \\mid t \\in r\\}$$\ntrong đó $t[X]$ là giá trị của bộ $t$ trên tập thuộc tính $X$."
                },
                {
                  type: "key-point",
                  text: "**Nhận xét:** Thực hiện phép chiếu gồm 2 thao tác:<br/>1. Giữ lại các thuộc tính trong tập $X$.<br/>2. Chọn bộ đại diện trong các bộ giống nhau (**loại bỏ trùng lặp**)."
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ 1:** `π_(MaSoSV, DiemTB)(HOCBONG)`"
                },
                {
                  type: "table",
                  headers: ["maSoSV", "diemTb"],
                  rows: [
                    ["Ti05020", "9.0"],
                    ["Ti05023", "8.2"],
                    ["Ti05027", "8.5"],
                    ["Ti05006", "7.8"]
                  ]
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ 2:** Tìm họ tên, năm sinh của sinh viên quê ở Cần Thơ:<br/>`π_(Hoten, Namsinh)(σ_(QQ = 'Cần Thơ')(SINHVIEN))`"
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ 3:** Tìm mã số, tên đề tài do thầy Lê Đức Phúc chủ nhiệm, kinh phí ≥ 10tr:<br/>`π_(MaDT, TenDT)(σ_(Chunhiem = 'Lê Đức Phúc' ∧ Kinhphi ≥ 10)(DETAI))`"
                },
                {
                  type: "component",
                  component: "RelationalAlgebraOperatorsSuite"
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-2-3",
          number: "3",
          title: "Phép tích Descartes (×) & Phép kết nối (Join — ⋈, *)",
          parts: [
            {
              id: "db2-part-2-3-a",
              label: "a",
              title: "Phép tích Descartes (Cartesian Product — ký hiệu × — Mục 2.4)",
              content: [
                {
                  type: "definition",
                  term: "Phép tích Descartes (×)",
                  text: "Chỉ xét trên **hai LĐQH rời nhau** ($U_1 \\cap U_2 = \\emptyset$). Cho $R_1, R_2$ với $U_1 = \\{A_1, \\dots, A_n\\}, U_2 = \\{B_1, \\dots, B_m\\}$. Giả sử $r, s$ là hai quan hệ trên $R_1, R_2$ tương ứng:\n$$r \\times s = \\{t \\mid t = (t_1, t_2), t_1 \\in r, t_2 \\in s\\}$$"
                },
                {
                  type: "list",
                  items: [
                    "Kết quả là quan hệ gồm các **$(n+m)$-bộ** trên lược đồ $R_1 \\cup R_2$: $n$ thành phần đầu thuộc $r$, $m$ thành phần sau thuộc $s$.",
                    "**Số bộ của $r \\times s = (\\text{số bộ của } r) \\times (\\text{số bộ của } s)$**."
                  ]
                }
              ]
            },
            {
              id: "db2-part-2-3-b",
              label: "b",
              title: "Phép kết nối (Join — ký hiệu ⋈ — Mục 2.5)",
              content: [
                {
                  type: "definition",
                  term: "Phép kết nối điều kiện (θ-Join)",
                  text: "Cho $\\theta$ là một trong các phép so sánh: $=, >, <, \\neq, \\ge, \\le$. $r$ là quan hệ trên $(A_1, \\dots, A_n)$, $s$ là quan hệ trên $(B_1, \\dots, B_m)$. Kết nối $r$ với $s$ theo điều kiện $A_i \\ \\theta \\ B_j$:\n$$r \\bowtie_{(A_i \\ \\theta \\ B_j)} s = \\{(t, u) \\mid t \\in r, u \\in s \\text{ và } t[A_i] \\ \\theta \\ u[B_j]\\}$$"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Kết nối bằng (Equijoin)",
                      bullets: ["Nếu $\\theta$ là toán tử so sánh bằng '$=$' ➔ gọi là **kết nối bằng**."]
                    },
                    {
                      number: "2",
                      title: "Kết nối tự nhiên (Natural Join — ký hiệu *)",
                      bullets: [
                        "Nếu kết nối bằng tại **thuộc tính trùng tên** của hai quan hệ $r, s$ ➔ gọi là **phép kết nối tự nhiên**, ký hiệu **$r * s$** (hoặc $r \\bowtie s$).",
                        "Một trong hai thuộc tính trùng tên bị **loại bỏ** khỏi kết quả để tránh dư thừa."
                      ]
                    }
                  ]
                },
                {
                  type: "highlight",
                  text: "**Ý nghĩa của Phép Kết Nối:**<br/>• Phép kết nối dùng để **kết hợp hai bộ có liên quan nhau** thuộc hai quan hệ khác nhau thành một bộ mới.<br/>• Cho phép **xử lý mối liên quan giữa các quan hệ** trong toàn bộ CSDL."
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ:** Tìm tên đề tài áp dụng ở Đồng Tháp và họ tên sinh viên thực hiện tương ứng:<br/>`π_(TenDT, Hoten)(σ_(NoiAD = 'Đồng Tháp')(SINHVIEN * SV_DT * DETAI))`"
                },
                {
                  type: "component",
                  component: "RelationalJoinLabVisualizer"
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-2-4",
          number: "4",
          title: "Các phép toán tập hợp tương thích: Hợp (∪), Giao (∩), Hiệu (−)",
          parts: [
            {
              id: "db2-part-2-4-a",
              label: "a",
              title: "Phép hợp (Union — ký hiệu ∪ — Mục 2.6)",
              content: [
                {
                  type: "definition",
                  term: "Phép hợp (Union — ∪)",
                  text: "Hợp của hai quan hệ **tương thích** $r_1, r_2$, ký hiệu **$r_1 \\cup r_2$**, là quan hệ trên $U$ gồm các phần tử thuộc $r_1$ hoặc $r_2$:\n$$r_1 \\cup r_2 = \\{t \\mid t \\in r_1 \\lor t \\in r_2\\}$$"
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ:** Cho 2 LĐQH:<br/>`Canbo(Maso, Hoten, Ngsinh, QQ, Hs_luong)`<br/>`Giangvien(Maso, Hoten, Ngaysinh, QQ, Hs_luong)`<br/>In ra mã số và họ tên của tất cả cán bộ và giảng viên:<br/>`π_(Maso, Hoten)(Canbo ∪ Giangvien)`"
                }
              ]
            },
            {
              id: "db2-part-2-4-b",
              label: "b",
              title: "Phép giao (Intersection — ký hiệu ∩ — Mục 2.7)",
              content: [
                {
                  type: "definition",
                  term: "Phép giao (Intersection — ∩)",
                  text: "Giao của hai quan hệ tương thích $r_1, r_2$, ký hiệu **$r_1 \\cap r_2$**, là quan hệ trên $U$ gồm các bộ **vừa thuộc $r_1$ vừa thuộc $r_2$**:\n$$r_1 \\cap r_2 = \\{t \\mid t \\in r_1 \\land t \\in r_2\\}$$"
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ:** In mã SV và họ tên của SV vừa thực hiện đề tài \"DT001\" vừa thực hiện đề tài \"DT005\":<br/>`π_(MaSV, Hoten)(σ_(MaDT='DT001')(SINHVIEN * SV_DT)) ∩ π_(MaSV, Hoten)(σ_(MaDT='DT005')(SINHVIEN * SV_DT))`"
                }
              ]
            },
            {
              id: "db2-part-2-4-c",
              label: "c",
              title: "Phép hiệu (Difference — ký hiệu − — Mục 2.8)",
              content: [
                {
                  type: "definition",
                  term: "Phép hiệu (Difference — −)",
                  text: "Hiệu của hai quan hệ tương thích $r, s$, ký hiệu **$r - s$**, là quan hệ gồm các bộ **thuộc $r$ nhưng không thuộc $s$**:\n$$r - s = \\{t \\mid t \\in r \\land t \\notin s\\}$$"
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ:** In mã SV, họ tên của SV **không** thực hiện đề tài có nơi áp dụng ở Vĩnh Long:<br/>`π_(MaSV, Hoten)(SINHVIEN) − π_(MaSV, Hoten)(σ_(NoiAD='Vĩnh Long')(SV_DT * SINHVIEN * SV_DT))`"
                },
                {
                  type: "highlight",
                  text: "⚠️ **Lưu ý bắt buộc:** Các phép **hợp (∪), giao (∩), hiệu (−)** chỉ thực hiện được trên **hai quan hệ tương thích** (cùng tập thuộc tính $U$)."
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-2-5",
          number: "5",
          title: "Phép đặt lại tên (Rename) & Phép chia (Division — ÷)",
          parts: [
            {
              id: "db2-part-2-5-a",
              label: "a",
              title: "Phép đặt lại tên (Rename — Mục 2.9)",
              content: [
                {
                  type: "paragraph",
                  text: "Để trả lời một câu hỏi phức tạp, có thể phải **tổ hợp nhiều phép toán** đại số quan hệ. Dùng **phép đặt tên** để đặt tên cho các **quan hệ trung gian**, giúp biểu thức rõ ràng hơn."
                },
                {
                  type: "code",
                  code: `⟨tên quan hệ trung gian⟩ ← ⟨biểu thức ĐSQH⟩`
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ:** Với biểu thức `σ_(DiemTB ≥ 9.0)(HOCBONG) * THANHTICH` (THANHTICH là bảng lưu thành tích SV, gồm `maSoSV, thanhTichSV`), có thể viết thành:"
                },
                {
                  type: "code",
                  code: `XuatSac ← σ_(DiemTB ≥ 9.0)(HOCBONG)
KetQua ← XuatSac * THANHTICH`
                },
                {
                  type: "list",
                  items: [
                    "Cũng có thể **đặt lại tên cho các thuộc tính** trong quan hệ trung gian/kết quả bằng cách liệt kê tên mới trong dấu ngoặc đi kèm tên quan hệ."
                  ]
                }
              ]
            },
            {
              id: "db2-part-2-5-b",
              label: "b",
              title: "Phép chia (Division — ký hiệu ÷ — Mục 2.10)",
              content: [
                {
                  type: "definition",
                  term: "Phép chia (Division — ÷)",
                  text: "Cho LĐQH $R(A_1, A_2, \\dots, A_n)$, $S$ là lược đồ con của $R$. Giả sử $r, s$ là các quan hệ trên $R, S$ tương ứng. Phép chia của $r$ cho $s$, ký hiệu **$r \\div s$**, là quan hệ trên lược đồ **$R - S$** gồm các **$(n-m)$-bộ $t$** sao cho tồn tại bộ $t_s \\in s$ mà $t$ ghép với $t_s$ được bộ thuộc $r$:\n$$r \\div s = \\{t \\mid \\forall t_s \\in s \\implies (t, t_s) \\in r\\}$$"
                },
                {
                  type: "key-point",
                  text: "**Ý nghĩa nghiệp vụ:** Phép chia đại số quan hệ là công cụ toán học tương ứng với lượng từ phổ quát **VỚI MỌI ($\\forall$)**, chuyên dùng để giải các bài toán mang ý nghĩa **\"TẤT CẢ\"** hoặc **\"MỌI\"** (VD: Tìm sinh viên đã học tất cả các môn của khoa CNTT)."
                },
                {
                  type: "component",
                  component: "RelationalDivisionStepByStepVisualizer"
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-2-6",
          number: "6",
          title: "Studio lắp ghép truy vấn ĐSQH phức hợp",
          parts: [
            {
              id: "db2-part-2-6-builder",
              label: "PIPELINE",
              title: "Thực thi chuỗi biểu thức đa bước (Multi-Step Query Execution)",
              content: [
                {
                  type: "component",
                  component: "RelationalAlgebraQueryBuilder"
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-2-7",
          number: "7",
          title: "Kiểm tra nhanh kiến thức: Đại số quan hệ",
          parts: [
            {
              id: "db2-part-2-7-quiz",
              label: "★",
              title: "Mini Concept Check: 10 Phép toán Đại số quan hệ",
              content: [
                {
                  type: "component",
                  component: "DatabaseCh2Part2ConceptQuiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION III: CHUYỂN ĐỔI ERD SANG CÁC QUAN HỆ (MAPPING ERD TO RELATIONS)
       ============================================================ */
    {
      id: "db2-section-3",
      roman: "III",
      title: "Chuyển đổi ERD sang các quan hệ (Mapping ER Diagram to Relations)",
      subsections: [
        {
          id: "db2-sub-3-1",
          number: "1",
          title: "Tổng quan quy trình 7 bước chuyển đổi ERD ➔ Quan hệ",
          parts: [
            {
              id: "db2-part-3-1-overview",
              label: "★",
              title: "Bản chất của quá trình thiết kế dữ liệu logic",
              content: [
                {
                  type: "paragraph",
                  text: "Đây là quá trình **thiết kế dữ liệu**: từ một sơ đồ thực thể kết hợp (ERD) đã xây dựng ở mức quan niệm, chuyển đổi thành tập các **lược đồ quan hệ (relations)** ở mức logic để cài đặt vào hệ quản trị CSDL quan hệ (RDBMS)."
                },
                {
                  type: "key-point",
                  text: "Quy trình chuẩn mực gồm **7 bước**, áp dụng tuần tự cho từng thành phần của sơ đồ ERD."
                },
                {
                  type: "component",
                  component: "ErdToRelational7StepsNavigator"
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-3-2",
          number: "2",
          title: "Bước 1: Chuyển các thực thể thường (Regular Entities)",
          parts: [
            {
              id: "db2-part-3-2-a",
              label: "a",
              title: "Quy tắc chuyển đổi 3 loại thuộc tính của thực thể thường",
              content: [
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Thuộc tính đơn (Simple attribute)",
                      bullets: ["Chuyển trực tiếp thành thuộc tính của quan hệ."]
                    },
                    {
                      number: "2",
                      title: "Thuộc tính phức hợp (Composite attribute)",
                      bullets: ["Chỉ lấy các **thuộc tính đơn thành phần** của nó (không lấy thuộc tính 'cha' gộp)."]
                    },
                    {
                      number: "3",
                      title: "Thuộc tính đa trị (Multivalued attribute)",
                      bullets: ["Tách thành **một quan hệ riêng**, có khóa ngoại tham chiếu về khóa chính của quan hệ ban đầu."]
                    }
                  ]
                }
              ]
            },
            {
              id: "db2-part-3-2-b",
              label: "b",
              title: "Các ví dụ minh họa chi tiết Bước 1",
              content: [
                {
                  type: "list",
                  items: [
                    "**Ví dụ (a) — Thuộc tính đơn:** Thực thể `CUSTOMER(Customer_ID, Customer_Name, Customer_Address)` ➔ chuyển trực tiếp thành quan hệ:<br/>`CUSTOMER(Customer_ID, Customer_Name, Customer_Address)`",
                    "**Ví dụ (b) — Thuộc tính phức hợp:** `Customer_Address` là thuộc tính tổ hợp gồm `Street, City, State, Zip` ➔ quan hệ `CUSTOMER` chỉ chứa các thành phần đơn:<br/>`CUSTOMER(Customer_ID, Customer_Name, Street, City, State, Zip)`",
                    "**Ví dụ (c) — Thuộc tính đa trị:** Thực thể `EMPLOYEE(Employee_ID, Employee_Name, Employee_Address, Skill*)` với `Skill` là đa trị ➔ Tách thành 2 quan hệ, có quan hệ 1:N giữa quan hệ gốc và quan hệ mới:<br/>`EMPLOYEE(Employee_ID, Employee_Name, Employee_Address)`<br/>`EMPLOYEE_SKILL(Employee_ID, Skill)`"
                  ]
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-3-3",
          number: "3",
          title: "Bước 2: Chuyển các thực thể yếu & Bước 4: Thực thể kết hợp",
          parts: [
            {
              id: "db2-part-3-3-a",
              label: "a",
              title: "Bước 2: Chuyển các thực thể yếu (Weak Entities)",
              content: [
                {
                  type: "definition",
                  term: "Quy tắc chuyển đổi Thực thể yếu",
                  text: "Thực thể yếu chuyển thành **một quan hệ riêng**, có **khóa ngoại** tham chiếu đến quan hệ được tạo từ **thực thể mạnh** (chủ sở hữu) của nó."
                },
                {
                  type: "highlight",
                  text: "**Khóa chính** của quan hệ thực thể yếu gồm:<br/>• **Khóa riêng phần (partial key)** của thực thể yếu.<br/>• **+ Khóa chính của quan hệ định danh** (thực thể mạnh).<br/>⚠️ **Lưu ý:** Khóa ngoại tham chiếu đến thực thể mạnh **không được NULL**."
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ:** Thực thể yếu `DEPENDENT` phụ thuộc vào `EMPLOYEE` qua mối quan hệ 'Has':<br/>`EMPLOYEE(Employee_ID, Employee_Name)`<br/>`DEPENDENT(First_Name, Middle_Initial, Last_Name, Employee_ID, Date_of_Birth, Gender)`<br/>➔ Khóa chính của `DEPENDENT` = `(First_Name, Employee_ID)` — danh định riêng phần + khóa ngoại của EMPLOYEE."
                }
              ]
            },
            {
              id: "db2-part-3-3-b",
              label: "b",
              title: "Bước 4: Chuyển các thực thể kết hợp (Associative Entities)",
              content: [
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Không có danh hiệu riêng (No natural identifier)",
                      bullets: ["Xử lý **giống mối quan hệ nhiều-nhiều** (khóa chính tổ hợp từ 2 khóa ngoại)."]
                    },
                    {
                      number: "2",
                      title: "Có danh hiệu riêng (Has its own identifier)",
                      bullets: [
                        "Khóa chính là **danh hiệu riêng** của thực thể kết hợp đó.",
                        "Các mối quan hệ hai ngôi còn lại chuyển đổi bình thường (theo Bước 3)."
                      ]
                    }
                  ]
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ:** Thực thể kết hợp `SHIPMENT` (có danh hiệu riêng `Shipment_No`) giữa `CUSTOMER` và `VENDOR`:<br/>`CUSTOMER(Customer_ID, Name, ...)`<br/>`VENDOR(Vendor_ID, Address, ...)`<br/>`SHIPMENT(Shipment_No, Customer_ID, Vendor_ID, Date, Amount)`<br/>➔ `Shipment_No` là khóa chính; `Customer_ID`, `Vendor_ID` là các khóa ngoại."
                },
                {
                  type: "component",
                  component: "WeakAndAssociativeEntityStudio"
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-3-4",
          number: "4",
          title: "Bước 3: Chuyển các mối quan hệ hai ngôi (Binary Relationships)",
          parts: [
            {
              id: "db2-part-3-4-a",
              label: "a",
              title: "Quy tắc chuyển đổi 3 loại quan hệ hai ngôi: 1:N, M:N, 1:1",
              content: [
                {
                  type: "table",
                  headers: ["Loại quan hệ", "Cách chuyển đổi chuẩn"],
                  rows: [
                    ["Một - nhiều (1:N)", "Khóa chính ở phía 'một' trở thành khóa ngoại ở phía 'nhiều'."],
                    ["Nhiều - nhiều (M:N)", "Tạo quan hệ mới, khóa chính là tổ hợp khóa chính của hai thực thể tham gia (đồng thời là khóa ngoại tương ứng đến từng thực thể)."],
                    ["Một - một (1:1)", "Khóa chính ở phía bắt buộc làm khóa ngoại ở phía tùy chọn."]
                  ]
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ (1:N) — `CUSTOMER 'Submits' ORDER`:**<br/>`CUSTOMER(Customer_ID, Customer_Name, Customer_Address)`<br/>`ORDER(Order_ID, Order_Date, Customer_ID)` — `Customer_ID` là khóa ngoại, không được rỗng."
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ (M:N) — `RAW MATERIALS 'Supplies' VENDOR`** (kèm thuộc tính `Unit_Price` trên mối quan hệ):<br/>`RAW_MATERIALS(Material_ID, Standard_Cost, Unit_of_Measure)`<br/>`VENDOR(Vendor_ID, Vendor_Name, Vendor_Address)`<br/>`QUOTE(Material_ID, Vendor_ID, Unit_Price)` — quan hệ mới, khóa chính tổ hợp `(Material_ID, Vendor_ID)`."
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ (1:1) — `NURSE 'In_charge' CARE_CENTER`** (mối quan hệ có thuộc tính `Date_Assigned`):<br/>`NURSE(Nurse_ID, Name, Date_Of_Birth)`<br/>`CARE_CENTER(Center_Name, Location, Nurse_In_Charge, Date_Assigned)`<br/>💡 *Chú ý:* **Tất cả thuộc tính của mối quan hệ** (VD: `Date_Assigned`) đều được mang sang quan hệ ở **phía tùy chọn** (nơi đặt khóa ngoại)."
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-3-5",
          number: "5",
          title: "Bước 5: Quan hệ một ngôi (Đệ quy) & Bước 6: Quan hệ ba ngôi/n-ngôi",
          parts: [
            {
              id: "db2-part-3-5-a",
              label: "a",
              title: "Bước 5: Chuyển các mối quan hệ một ngôi (Unary / Recursive Relationships)",
              content: [
                {
                  type: "table",
                  headers: ["Loại quan hệ", "Cách chuyển đổi chuẩn"],
                  rows: [
                    ["Một - nhiều (1:N)", "Tạo khóa ngoại đệ quy (recursive foreign key): tham chiếu đến khóa chính trong cùng một quan hệ."],
                    ["Nhiều - nhiều (M:N)", "Tạo 2 quan hệ: (1) quan hệ cho kiểu thực thể đó; (2) quan hệ kết hợp gồm 2 thuộc tính là khóa ngoại (cùng tham chiếu về khóa chính của quan hệ (1)) – khóa chính của quan hệ kết hợp là tổ hợp 2 thuộc tính đó."]
                  ]
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ (1:N đệ quy) — `EMPLOYEE 'Manages' chính EMPLOYEE khác`:**<br/>`EMPLOYEE(Employee_ID, Name, Birthdate, Manager_ID)` — `Manager_ID` tham chiếu đến `Employee_ID`."
                }
              ]
            },
            {
              id: "db2-part-3-5-b",
              label: "b",
              title: "Bước 6: Chuyển các mối quan hệ ba ngôi và n-ngôi (Ternary / n-ary Relationships)",
              content: [
                {
                  type: "definition",
                  term: "Quy tắc n + 1 quan hệ",
                  text: "Tạo ra **n + 1 quan hệ**: **n quan hệ** cho n kiểu thực thể tham gia vào mối quan hệ; **1 quan hệ kết hợp**, chứa các khóa ngoại tham chiếu đến khóa chính của n quan hệ kia (khóa chính của quan hệ kết hợp thường là tổ hợp các khóa ngoại này)."
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ:** Mối quan hệ ba ngôi `Supplies` giữa `VENDOR`, `PART`, `WAREHOUSE`:<br/>`VENDOR(Vendor_ID, ...)`<br/>`PART(Part_ID, ...)`<br/>`WAREHOUSE(Warehouse_ID, ...)`<br/>`SUPPLIES(Vendor_ID, Part_ID, Warehouse_ID, Shipping_mode, Unit_cost)`"
                },
                {
                  type: "highlight",
                  text: "**Lưu ý quan trọng khi có danh định riêng:**<br/>Khi mối quan hệ ba ngôi có **danh định riêng** (VD: mối quan hệ giữa `PATIENT`, `PHYSICIAN`, `TREATMENT` được đặt tên là thực thể kết hợp `PATIENT_TREATMENT`), cần **xác định rõ khóa chính** cho quan hệ kết hợp này – đây có thể là điểm mà những người thiết kế khác nhau chọn khóa chính khác nhau cho cùng một ERD. Nguyên tắc bắt buộc: **khóa chính phải đảm bảo tính duy nhất (unique)**."
                },
                {
                  type: "code",
                  code: `PATIENT(Patient_ID, Patient_Name)
PHYSICIAN(Physician_ID, Physician_Name)
TREATMENT(Treatment_Code, Description)
PATIENT_TREATMENT(Patient_ID, Physician_ID, Treatment_Code, Date, Time, Results)`
                },
                {
                  type: "component",
                  component: "RecursiveAndTernaryJoinStudio"
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-3-6",
          number: "6",
          title: "Bước 7: Quan hệ cha/con (Supertype/Subtype) & Bảng tổng kết",
          parts: [
            {
              id: "db2-part-3-6-a",
              label: "a",
              title: "Bước 7: Chuyển các mối quan hệ cha/con (Supertype / Subtype Relationships)",
              content: [
                {
                  type: "list",
                  items: [
                    "Tạo ra các quan hệ cho **cả thực thể cha (supertype) và thực thể con (subtype)**.",
                    "**Thuộc tính của thực thể cha** (gồm cả danh hiệu và các yếu tố phân biệt) ➔ trở thành thuộc tính của **quan hệ cha**.",
                    "**Thuộc tính riêng của thực thể con** ➔ trở thành thuộc tính của **quan hệ con** tương ứng.",
                    "**Khóa chính của quan hệ cha** ➔ trở thành **khóa chính đồng thời là khóa ngoại** của các quan hệ con (tham chiếu về quan hệ cha).",
                    "Giữa thực thể cha và mỗi thực thể con hình thành **quan hệ 1:1**, trong đó **thực thể cha là bảng chính**."
                  ]
                },
                {
                  type: "paragraph",
                  text: "**Ví dụ:** `EMPLOYEE` (cha) có 3 loại con: `HOURLY_EMPLOYEE`, `SALARIED_EMPLOYEE`, `CONSULTANT` (phân biệt qua thuộc tính `Employee_Type = 'H'/'S'/'C'`):"
                },
                {
                  type: "code",
                  code: `EMPLOYEE(Employee_Number, Employee_Name, Address, Employee_Type, Date_Hired)

HOURLY_EMPLOYEE(H_Employee_Number, Hourly_Rate)
SALARIED_EMPLOYEE(S_Employee_Number, Annual_Salary, Stock_Options)
CONSULTANT(C_Employee_Number, Contract_Number, Billing_Rate)`
                },
                {
                  type: "key-point",
                  text: "`H_Employee_Number`, `S_Employee_Number`, `C_Employee_Number` **vừa là khóa chính** của quan hệ con, **vừa là khóa ngoại** tham chiếu đến `Employee_Number` của quan hệ cha `EMPLOYEE`."
                },
                {
                  type: "component",
                  component: "SupertypeSubtypeHierarchyVisualizer"
                }
              ]
            },
            {
              id: "db2-part-3-6-b",
              label: "b",
              title: "Bảng tổng kết 7 bước chuyển đổi ERD ➔ Relations",
              content: [
                {
                  type: "table",
                  headers: ["Bước", "Thành phần ERD", "Kết quả chuyển đổi chuẩn"],
                  rows: [
                    ["1", "Thực thể thường (regular entity)", "1 quan hệ; thuộc tính đa trị ➔ tách quan hệ con riêng"],
                    ["2", "Thực thể yếu (weak entity)", "1 quan hệ, khóa chính = khóa riêng phần + khóa ngoại của thực thể mạnh"],
                    ["3", "Quan hệ hai ngôi (binary)", "1:N ➔ khóa ngoại; M:N ➔ quan hệ mới; 1:1 ➔ khóa ngoại ở phía tùy chọn"],
                    ["4", "Thực thể kết hợp (associative entity)", "Có danh hiệu riêng ➔ khóa chính riêng; không có ➔ như M:N"],
                    ["5", "Quan hệ một ngôi (unary/recursive)", "1:N ➔ khóa ngoại đệ quy; M:N ➔ quan hệ kết hợp mới"],
                    ["6", "Quan hệ ba ngôi/n-ngôi (ternary/n-ary)", "n+1 quan hệ (n thực thể + 1 quan hệ kết hợp)"],
                    ["7", "Quan hệ cha/con (supertype/subtype)", "1 quan hệ cha + các quan hệ con (khóa chính con = khóa ngoại về cha)"]
                  ]
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-3-7",
          number: "7",
          title: "Kiểm tra nhanh kiến thức: Chuyển đổi ERD sang Quan hệ",
          parts: [
            {
              id: "db2-part-3-7-quiz",
              label: "★",
              title: "Mini Concept Check: 7 Bước chuyển đổi ERD sang Relations",
              content: [
                {
                  type: "component",
                  component: "DatabaseCh2Part3ConceptQuiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION IV: BÀI TẬP ĐẠI SỐ QUAN HỆ (PRACTICE EXERCISES)
       ============================================================ */
    {
      id: "db2-section-4",
      roman: "IV",
      title: "Bài tập chương II (Relational Algebra Exercises)",
      subsections: [
        {
          id: "db2-sub-4-1",
          number: "1",
          title: "CSDL Mẫu Dùng Cho Bài Tập (Mục 4.1)",
          parts: [
            {
              id: "db2-part-4-1-schema",
              label: "★",
              title: "Lược đồ CSDL Quản Lý Bán Hàng",
              content: [
                {
                  type: "paragraph",
                  text: "Hệ thống CSDL quản lý bán hàng gồm 4 lược đồ quan hệ chuẩn mực:"
                },
                {
                  type: "code",
                  code: `Hanghoa(MaHG, TenHG, DVT, Dongia, Cohang)
  -- Cohang = 0: hết hàng; Cohang = 1: còn hàng

Khach(MaKH, Hoten, Diachi, Daily)
  -- Daily = 1: khách là đại lý; Daily = 0: khách mua bán lẻ

Hoadon(SoHD, Ngaylap, Ngaygiao, Trigia, MaKH)

Chitiet_HD(SoHD, MaHG, Soluong, Giaban)
  -- lưu chi tiết hóa đơn: số HĐ, mã hàng, số lượng bán, giá bán`
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-4-2",
          number: "2",
          title: "Lời giải chi tiết 11 câu hỏi truy vấn ĐSQH (Mục 4.2)",
          parts: [
            {
              id: "db2-part-4-2-solutions",
              label: "WORKBENCH",
              title: "Studio Thực Thi & Đối Chiếu 11 Bài Tập Truy Vấn ĐSQH",
              content: [
                {
                  type: "component",
                  component: "RelationalAlgebraExerciseWorkbench"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION V: TỔNG KẾT KIẾN THỨC CẦN NHỚ & MASTER EXAM
       ============================================================ */
    {
      id: "db2-section-5",
      roman: "V",
      title: "Tóm tắt kiến thức cần nhớ & Master Exam Chương II",
      subsections: [
        {
          id: "db2-sub-5-1",
          number: "1",
          title: "Dashboard Tóm tắt kiến thức ôn thi toàn diện Chương II",
          parts: [
            {
              id: "db2-part-5-1-dashboard",
              label: "SUMMARY",
              title: "Tổng hợp 3 Trụ cột: Định nghĩa & Khóa, 10 Phép toán ĐSQH, 7 Bước ERD",
              content: [
                {
                  type: "component",
                  component: "DatabaseChapter2SummaryDashboard"
                }
              ]
            }
          ]
        },

        {
          id: "db2-sub-5-2",
          number: "2",
          title: "Đề kiểm tra tổng hợp Master Exam Chương II",
          parts: [
            {
              id: "db2-part-5-2-masterquiz",
              label: "EXAM",
              title: "Master Exam: Đề Thi Trắc Nghiệm Tổng Hợp Toàn Bộ Chương II",
              content: [
                {
                  type: "component",
                  component: "DatabaseChapter2MasterExamQuiz"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
