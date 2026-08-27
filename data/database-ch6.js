/* ============================================================
   DỮ LIỆU HỌC TẬP CHUẨN MỰC: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG VI: CHUẨN HÓA CƠ SỞ DỮ LIỆU (DATABASE NORMALIZATION)
   HOÀN TẤT TRỌN VẸN 100%: MỤC 0 ĐẾN MỤC X
   ============================================================ */

export const databaseCh6Data = {
  id: "database-ch6",
  title: "Chương VI: Chuẩn hóa Cơ sở dữ liệu",
  subtitle: "Lý thuyết & Kỹ thuật chuẩn hóa cơ sở dữ liệu quan hệ: Các dạng chuẩn 1NF, 2NF, 3NF, BCNF, 4NF, 5NF; Hai tiêu chí vàng của phép tách: Phép tách không làm mất thông tin (Lossless Join Decomposition) & Phép tách bảo toàn phụ thuộc hàm (Dependency Preservation); Thuật toán Chase (Bảng đuổi); Thuật toán phân rã đạt 3NF và BCNF; Bộ bài tập lớn chương VI & Grand Master Exam 10 câu.",
  sections: [
    /* ============================================================
       SECTION 0: TỔNG QUAN & CYBER ARCHITECTURE HERO BANNER
       ============================================================ */
    {
      id: "db6-section-0",
      roman: "★",
      title: "TỔNG QUAN CHUẨN HÓA CƠ SỞ DỮ LIỆU & THÁP 5 TẦNG CHUẨN HÓA",
      subsections: [
        {
          id: "db6-sub-0",
          number: "0",
          title: "Interactive Database Normalization Engine",
          parts: [
            {
              id: "db6-part-hero",
              label: "INTERACTIVE HERO BANNER",
              title: "Tháp Kim Tự Tháp 5 Tầng Chuẩn Hóa & 2 Tiêu Chí Vàng Phân Rã Lược Đồ",
              content: [
                {
                  type: "component",
                  component: "NormalizationCyberHeroBanner"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION I: TẠI SAO CẦN CHUẨN HÓA? (MOTIVATION & ANOMALIES)
       ============================================================ */
    {
      id: "db6-section-1",
      roman: "I",
      title: "Tại sao cần chuẩn hóa? (Why Normalize?)",
      subsections: [
        {
          id: "db6-sub-1-1",
          number: "1",
          title: "Ví dụ minh họa & Các thảm họa dị thường",
          parts: [
            {
              id: "db6-part-1-1-a",
              label: "a",
              title: "Ví dụ Cung cấp SP & Nhân viên - Lớp học",
              content: [
                {
                  type: "paragraph",
                  text: "<strong>1. Ví dụ minh họa (CungCapSP):</strong> Xét lược đồ <code>CungCapSP(maNCC, tenNCC, diaChi, sanPham, gia)</code>. Vấn đề phát sinh: <strong>trùng lặp thông tin</strong> (<code>tenNCC, diaChi</code> bị lặp lại ở nhiều dòng có cùng <code>maNCC</code>) &rarr; tăng chi phí lưu trữ và chi phí kiểm tra ràng buộc toàn vẹn (RBTV). Cách giải quyết: tách thành 2 lược đồ con: <code>CungCap(maNCC, sanPham, gia)</code> và <code>NhaCC(maNCC, tenNCC, diaChi)</code>."
                },
                {
                  type: "paragraph",
                  text: "<strong>2. Ví dụ minh họa (Nhân viên - Lớp học):</strong> Xét lược đồ với khóa chính là <code>{maNV, tenKH}</code>. Các dị thường (anomalies) xảy ra trong CSDL:"
                },
                {
                  type: "list",
                  items: [
                    "<strong>Dị thường khi thêm (Insertion anomaly):</strong> Không thể thêm 1 nhân viên mới nếu nhân viên đó chưa tham gia lớp học nào (do <code>tenKH</code> thuộc khóa chính không được nhận giá trị NULL).",
                    "<strong>Dị thường khi xóa (Deletion anomaly):</strong> Nếu xóa nhân viên duy nhất tham gia một lớp học, ta sẽ vô tình làm mất luôn thông tin về lớp học đó trong hệ thống.",
                    "<strong>Dị thường khi hiệu chỉnh (Modification anomaly):</strong> Tăng lương cho nhân viên đòi hỏi phải cập nhật ở rất nhiều hàng (vì thông tin lương bị lặp lại nhiều lần)."
                  ]
                },
                {
                  type: "callout",
                  variant: "important",
                  title: "Kết luận cốt lõi",
                  text: "Sự trùng lặp thông tin (data duplication) là nguyên nhân căn bản khiến CSDL có chất lượng kém. Cần có tiêu chuẩn đánh giá chất lượng thiết kế lược đồ CSDL và phương pháp cải tiến lược đồ."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION II: CHUẨN HÓA DỮ LIỆU (NORMALIZATION CONCEPT)
       ============================================================ */
    {
      id: "db6-section-2",
      roman: "II",
      title: "Chuẩn hóa dữ liệu (Database Normalization)",
      subsections: [
        {
          id: "db6-sub-2-1",
          number: "1",
          title: "Định nghĩa, Cấu trúc tốt & 3 Câu hỏi chuẩn hóa",
          parts: [
            {
              id: "db6-part-2-1-a",
              label: "a",
              title: "Bản chất & Mục tiêu của chuẩn hóa",
              content: [
                {
                  type: "definition",
                  term: "Chuẩn hóa dữ liệu (Normalization)",
                  definition: "• Là công cụ cơ bản để kiểm tra và cải tiến một thiết kế CSDL luận lý, thỏa mãn các ràng buộc toàn vẹn → giúp tránh data duplication không cần thiết.\n• Là quá trình phân rã các quan hệ không bình thường (anomaly) thành các quan hệ có cấu trúc tốt (well-structured) nhỏ hơn."
                },
                {
                  type: "list",
                  items: [
                    "<strong>Quan hệ có cấu trúc tốt (well-structured):</strong> Có sự dư thừa dữ liệu tối thiểu; cho phép thêm, xóa, cập nhật các hàng (row) mà không gây mâu thuẫn dữ liệu.",
                    "<strong>Mục tiêu của chuẩn hóa:</strong> Giảm dư thừa dữ liệu; Tránh 3 loại dị thường (Insertion anomaly, Deletion anomaly, Modification anomaly).",
                    "<strong>Các dạng chuẩn:</strong> 1NF (First Normal Form), 2NF (Second Normal Form), 3NF (Third Normal Form), BCNF (Boyce-Codd Normal Form)..."
                  ]
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "3 Vấn đề cần nắm vững cho mỗi dạng chuẩn",
                  text: "1. Là gì? (Định nghĩa hình thức)\n2. Cách kiểm tra? (Thuật toán nhận diện)\n3. Cách chuẩn hóa? (Thuật toán phân rã đưa về dạng chuẩn đó)"
                },
                {
                  type: "component",
                  component: "NormalizationMotivationStudio"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION III: DẠNG CHUẨN 1 (1NF - FIRST NORMAL FORM)
       ============================================================ */
    {
      id: "db6-section-3",
      roman: "III",
      title: "Dạng chuẩn 1 (1NF - First Normal Form)",
      subsections: [
        {
          id: "db6-sub-3-1",
          number: "1",
          title: "Thuộc tính đơn, Định nghĩa 1NF & Cách đưa về 1NF",
          parts: [
            {
              id: "db6-part-3-1-a",
              label: "a",
              title: "Thuộc tính đơn vs Thuộc tính kép & Phương pháp tách",
              content: [
                {
                  type: "list",
                  items: [
                    "<strong>Thuộc tính đơn (thuộc tính nguyên tố):</strong> Thuộc tính A của R không phải là sự tích hợp của nhiều thuộc tính khác (giá trị đơn nguyên tử, không thể chia nhỏ).",
                    "<strong>Thuộc tính kép (thuộc tính không nguyên tố):</strong> Nếu người dùng có thể truy xuất đến từng phần tử con của thuộc tính A (Ví dụ: <code>Chuyen_Mon(MaGV, Mon)</code> với <code>Mon = 'Pascal, CTDL, TRR'</code> &rarr; <code>Mon</code> là thuộc tính kép; <code>VatTu(maVT, tenVT, dvTinh)</code> mà <code>tenVT</code> gồm cả tên vật tư và quy cách &rarr; <code>tenVT</code> là thuộc tính kép)."
                  ]
                },
                {
                  type: "definition",
                  term: "Định nghĩa Dạng chuẩn 1 (1NF)",
                  definition: "• Một lược đồ quan hệ R đạt 1NF nếu mọi thuộc tính của R đều là thuộc tính đơn (nguyên tố).\n• Một lược đồ CSDL đạt 1NF nếu mọi lược đồ quan hệ Ri của nó đều đạt 1NF.\n• Lược đồ quan hệ 1NF còn gọi là lược đồ quan hệ chuẩn hóa; Lược đồ không đạt 1NF gọi là lược đồ không chuẩn (phi chuẩn)."
                },
                {
                  type: "paragraph",
                  text: "<strong>Cách đưa về dạng chuẩn 1NF (Tách thuộc tính kép thành các thuộc tính đơn):</strong>"
                },
                {
                  type: "list",
                  items: [
                    "<strong>Tách dọc (Split Columns):</strong> Tách thành nhiều cột riêng biệt (Ví dụ: <code>VatTu(maVT, tenVT, dvTinh)</code> &rarr; <code>VatTu(maVT, tenVT, quyCach, dvTinh)</code>).",
                    "<strong>Tách ngang (Split Rows):</strong> Tách thành nhiều dòng riêng biệt (Ví dụ: quan hệ <code>Chuyen_Mon</code> tách <code>Mon</code> thành từng dòng riêng cho mỗi môn học của giảng viên)."
                  ]
                },
                {
                  type: "component",
                  component: "FirstNormalFormStudio"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION IV: DẠNG CHUẨN 2 (2NF - SECOND NORMAL FORM)
       ============================================================ */
    {
      id: "db6-section-4",
      roman: "IV",
      title: "Dạng chuẩn 2 (2NF - Second Normal Form)",
      subsections: [
        {
          id: "db6-sub-4-1",
          number: "1",
          title: "Phụ thuộc hàm đầy đủ, Thuộc tính khóa & Định nghĩa 2NF",
          parts: [
            {
              id: "db6-part-4-1-a",
              label: "a",
              title: "Khái niệm nền tảng & Định nghĩa 2NF",
              content: [
                {
                  type: "list",
                  items: [
                    "<strong>Phụ thuộc hàm đầy đủ (Full FD):</strong> <code>X &rarr; Y</code> là đầy đủ nếu loại bỏ bất kỳ thuộc tính A nào trong X thì <code>(X \\ {A}) &not;&rarr; Y</code>.",
                    "<strong>Phụ thuộc hàm riêng phần (Partial FD):</strong> Là phụ thuộc hàm không phải là phụ thuộc hàm đầy đủ (thuộc tính không khóa phụ thuộc vào một phần của khóa).",
                    "<strong>Thuộc tính khóa (Prime attribute):</strong> Là thuộc tính của R mà là thành phần của <strong>ít nhất một khóa dự tuyển (candidate key)</strong> trong R.",
                    "<strong>Thuộc tính không khóa (Non-prime attribute):</strong> Không tham gia vào bất kỳ khóa nào."
                  ]
                },
                {
                  type: "definition",
                  term: "Định nghĩa Dạng chuẩn 2 (2NF)",
                  definition: "Lược đồ quan hệ R đạt 2NF nếu:\n1. R đạt 1NF.\n2. Mọi thuộc tính không khóa A trong R đều phụ thuộc hàm ĐẦY ĐỦ vào khóa của R."
                },
                {
                  type: "component",
                  component: "PrimeAttributeInspector"
                }
              ]
            }
          ]
        },
        {
          id: "db6-sub-4-2",
          number: "2",
          title: "Định lý nhận diện nhanh, Thuật toán kiểm tra & Phân rã 2NF",
          parts: [
            {
              id: "db6-part-4-2-a",
              label: "a",
              title: "4 Quy tắc vàng, Giải 4 ví dụ & Thuật toán phân rã",
              content: [
                {
                  type: "callout",
                  variant: "important",
                  title: "4 Nhận xét quan trọng (Định lý kiểm tra nhanh 2NF)",
                  text: "1. Nếu R chỉ có 1 khóa K và |K| = 1 (khóa chỉ có 1 thuộc tính) thì R LUÔN ĐẠT 2NF.\n2. Một LĐQH đạt 2NF vẫn có thể còn chứa sự trùng lặp thông tin (do bắc cầu).\n3. Nếu TẤT CẢ thuộc tính của R đều là thuộc tính khóa → R đạt 2NF (không có thuộc tính không khóa nào để vi phạm).\n4. Nếu TẤT CẢ các khóa của R chỉ có 1 thuộc tính → R đạt 2NF."
                },
                {
                  type: "component",
                  component: "SecondNormalFormDiagnosticStudio"
                },
                {
                  type: "component",
                  component: "SecondNormalFormDecompositionWalkthrough"
                },
                {
                  type: "component",
                  component: "Custom2NFSandbox"
                },
                {
                  type: "component",
                  component: "DatabaseCh6Part1ConceptQuiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION V: DẠNG CHUẨN 3 (3NF - THIRD NORMAL FORM)
       ============================================================ */
    {
      id: "db6-section-5",
      roman: "V",
      title: "Dạng chuẩn 3 (3NF - Third Normal Form)",
      subsections: [
        {
          id: "db6-sub-5-1",
          number: "1",
          title: "Phụ thuộc bắc cầu, Định nghĩa 3NF & Thuật toán kiểm tra",
          parts: [
            {
              id: "db6-part-5-1-a",
              label: "a",
              title: "Khái niệm phụ thuộc bắc cầu & Định nghĩa hình thức 3NF",
              content: [
                {
                  type: "definition",
                  term: "Phụ thuộc hàm bắc cầu (Transitive Dependency)",
                  definition: "Cho R(U, F), A là thuộc tính của U. A phụ thuộc bắc cầu vào X trên R nếu tồn tại tập con Y của U sao cho:\n• X → Y, Y → A, nhưng Y ↛ X, và A ∉ (X ∪ Y)."
                },
                {
                  type: "definition",
                  term: "Định nghĩa Dạng chuẩn 3 (3NF)",
                  definition: "• Định nghĩa 1: Lược đồ quan hệ R đạt 3NF nếu R đạt 2NF và mọi thuộc tính không khóa của R đều KHÔNG phụ thuộc bắc cầu vào khóa chính.\n• Định nghĩa 2 (Tương đương): R đạt 3NF nếu với mọi FD X → A trong F (A ∉ X) thì: X là SIÊU KHÓA (X⁺ = U), HOẶC A là THUỘC TÍNH KHÓA (thuộc ít nhất 1 candidate key)."
                },
                {
                  type: "component",
                  component: "ThirdNormalFormDeconstructorStudio"
                },
                {
                  type: "component",
                  component: "NormalFormsComparisonMatrixStudio"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION VI: DẠNG CHUẨN BOYCE-CODD (BCNF)
       ============================================================ */
    {
      id: "db6-section-6",
      roman: "VI",
      title: "Dạng chuẩn Boyce-Codd (BCNF)",
      subsections: [
        {
          id: "db6-sub-6-1",
          number: "1",
          title: "Định nghĩa BCNF, Case study R(CSZ) & 3 Mệnh đề vàng",
          parts: [
            {
              id: "db6-part-6-1-a",
              label: "a",
              title: "Bản chất BCNF & Phân rã chuẩn hóa",
              content: [
                {
                  type: "definition",
                  term: "Định nghĩa Dạng chuẩn Boyce-Codd (BCNF)",
                  definition: "Lược đồ quan hệ R đạt BCNF nếu với mọi FD X → A trong F (A ∉ X) thì X BẮT BUỘC PHẢI LÀ SIÊU KHÓA (X⁺ = U)."
                },
                {
                  type: "callout",
                  variant: "important",
                  title: "So sánh cốt lõi: 3NF vs BCNF",
                  text: "• Nếu R đạt BCNF thì R chắc chắn đạt 3NF.\n• Khác biệt: 3NF chỉ cấm thuộc tính không khóa phụ thuộc vào tập có bao đóng khác U; BCNF cấm TẤT CẢ các thuộc tính (kể cả thuộc tính khóa) phụ thuộc vào tập có bao đóng khác U."
                },
                {
                  type: "component",
                  component: "BoyceCoddNormalFormStudio"
                },
                {
                  type: "component",
                  component: "NormalFormsTextbookExamplesSolver"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION VII: CÁC BƯỚC CHUẨN HÓA (TỔNG QUAN LUỒNG XỬ LÝ)
       ============================================================ */
    {
      id: "db6-section-7",
      roman: "VII",
      title: "Các bước chuẩn hóa (Tổng quan luồng xử lý)",
      subsections: [
        {
          id: "db6-sub-7-1",
          number: "1",
          title: "Sơ đồ luồng 4 chặng chuẩn hóa & Sandbox toàn năng",
          parts: [
            {
              id: "db6-part-7-1-a",
              label: "a",
              title: "Sơ đồ luồng 4 chặng & Concept Quiz 2",
              content: [
                {
                  type: "list",
                  items: [
                    "<strong>Chặng 1 (Đạt 1NF):</strong> Lược đồ ban đầu &rarr; Tách nhóm các thuộc tính kép.",
                    "<strong>Chặng 2 (Đạt 2NF):</strong> Lược đồ 1NF &rarr; Tách các FD riêng phần (phụ thuộc bộ phận).",
                    "<strong>Chặng 3 (Đạt 3NF):</strong> Lược đồ 2NF &rarr; Tách các FD bắc cầu.",
                    "<strong>Chặng 4 (Đạt BCNF):</strong> Lược đồ 3NF &rarr; Tách các FD có vế trái không là siêu khóa."
                  ]
                },
                {
                  type: "component",
                  component: "FullNormalizationPipelineVisualizer"
                },
                {
                  type: "component",
                  component: "FullNormalFormCustomSandbox"
                },
                {
                  type: "component",
                  component: "DatabaseCh6Part2ConceptQuiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION VIII: PHÂN RÃ CÁC LƯỢC ĐỒ QUAN HỆ (DECOMPOSITION)
       ============================================================ */
    {
      id: "db6-section-8",
      roman: "VIII",
      title: "Phân rã các lược đồ quan hệ (Decomposition)",
      subsections: [
        {
          id: "db6-sub-8-1",
          number: "1",
          title: "Kiểm tra Lossless Join (Thuật toán Chase & Delobel) & Bảo toàn FD",
          parts: [
            {
              id: "db6-part-8-1-a",
              label: "a",
              title: "Khái niệm phân rã & 2 Tiêu chuẩn vàng",
              content: [
                {
                  type: "definition",
                  term: "Phân rã lược đồ quan hệ (Decomposition)",
                  definition: "Phân rã một lược đồ quan hệ R(U) là thay R bằng tập các lược đồ con R₁(U₁), R₂(U₂), ..., Rk(Uk) sao cho U₁ ∪ U₂ ∪ ... ∪ Uk = U."
                },
                {
                  type: "list",
                  items: [
                    "<strong>Phân rã bảo toàn nội dung (Lossless join decomposition):</strong> Phép kết tự nhiên (natural join) các lược đồ con phải cho lại đúng R (không sinh thêm bộ giả mạo hoặc mất dữ liệu): R₁ ⋈ R₂ ⋈ ... ⋈ Rk = R.",
                    "<strong>Phân rã bảo toàn phụ thuộc hàm (Dependency preserving decomposition):</strong> (∪ F_i)⁺ ≡ F⁺."
                  ]
                },
                {
                  type: "component",
                  component: "ChaseAlgorithmLosslessSimulator"
                },
                {
                  type: "component",
                  component: "DelobelAndDependencyPreservationStudio"
                }
              ]
            }
          ]
        },
        {
          id: "db6-sub-8-2",
          number: "2",
          title: "Thuật toán phân rã 3NF (Tổng hợp) & Phân rã BCNF (Cây Delobel)",
          parts: [
            {
              id: "db6-part-8-2-a",
              label: "a",
              title: "Thuật toán tổng hợp 3NF & Cây phân rã BCNF",
              content: [
                {
                  type: "component",
                  component: "ThreeNFSynthesisEngineStudio"
                },
                {
                  type: "component",
                  component: "BCNFDecompositionTreeStudio"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION IX: TỔNG KẾT VỀ CHUẨN HÓA CƠ SỞ DỮ LIỆU
       ============================================================ */
    {
      id: "db6-section-9",
      roman: "IX",
      title: "Tổng kết về chuẩn hóa CSDL (Master Summary & Trade-offs)",
      subsections: [
        {
          id: "db6-sub-9-1",
          number: "1",
          title: "Bản chất triệt tiêu dị thường & Định lý đánh đổi cốt lõi",
          parts: [
            {
              id: "db6-part-9-1-a",
              label: "a",
              title: "Master Summary Dashboard & Định lý đánh đổi 3NF vs BCNF",
              content: [
                {
                  type: "component",
                  component: "NormalizationMasterSummaryDashboard"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION X: BÀI TẬP CHƯƠNG VI & GRAND MASTER EXAM
       ============================================================ */
    {
      id: "db6-section-10",
      roman: "X",
      title: "Bài tập chương VI & Grand Master Exam 10 Câu",
      subsections: [
        {
          id: "db6-sub-10-1",
          number: "1",
          title: "Bộ Bài Tập Lớn Cuối Chương (Bài 1 & Bài 2)",
          parts: [
            {
              id: "db6-part-10-1-a",
              label: "a",
              title: "Giải chi tiết Bài 1 (5 câu) & Bài 2 (Chứng minh, Tìm khóa, Chuẩn hóa)",
              content: [
                {
                  type: "component",
                  component: "Chapter6GrandExercisesSuite"
                }
              ]
            }
          ]
        },
        {
          id: "db6-sub-10-2",
          number: "2",
          title: "Grand Master Exam 10 Câu Trắc Nghiệm Tổng Hợp",
          parts: [
            {
              id: "db6-part-10-2-a",
              label: "a",
              title: "Bài thi tổng lực Chương VI có Timer đếm ngược",
              content: [
                {
                  type: "component",
                  component: "DatabaseChapter6GrandMasterQuiz"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
