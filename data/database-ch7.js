/* ============================================================
   DỮ LIỆU HỌC TẬP CHUẨN MỰC: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG VII: TỐI ƯU HÓA CÂU HỎI (QUERY OPTIMIZATION)
   HOÀN TẤT TRỌN VẸN 100%: MỤC 0 ĐẾN MỤC VII
   ============================================================ */

export const databaseCh7Data = {
  id: "database-ch7",
  title: "Chương VII: Tối ưu hóa câu hỏi",
  subtitle: "Lý thuyết & Kỹ thuật tối ưu hóa câu truy vấn: Mục tiêu tối ưu Không gian & Thời gian; 6 Chiến lược tối ưu tổng quát; 11 Quy tắc biến đổi tương đương L1 - L11; Ví dụ CSDL Thư Viện & 2 Chặng tối ưu hóa cây truy vấn (Đẩy phép chọn σ và phép chiếu π xuống sâu); Giải chi tiết Bài tập tự luyện; 5 Nguyên tắc vàng và Grand Master Exam 10 câu.",
  sections: [
    /* ============================================================
       SECTION 0: TỔNG QUAN & CYBER PIPELINE HERO BANNER
       ============================================================ */
    {
      id: "db7-section-0",
      roman: "★",
      title: "TỔNG QUAN TỐI ƯU HÓA CÂU HỎI & CYBER PIPELINE HERO BANNER",
      subsections: [
        {
          id: "db7-sub-0",
          number: "0",
          title: "Interactive Query Optimization Engine",
          parts: [
            {
              id: "db7-part-hero",
              label: "INTERACTIVE HERO BANNER",
              title: "Cỗ Máy Tối Ưu Truy Vấn 4 Chặng & 2 Chiến Lược Tối Ưu Hóa Cốt Lõi",
              content: [
                {
                  type: "component",
                  component: "QueryOptimizationCyberHeroBanner"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION I: ĐẶT VẤN ĐỀ & MỤC TIÊU TỐI ƯU HÓA
       ============================================================ */
    {
      id: "db7-section-1",
      roman: "I",
      title: "Đặt vấn đề & Mục tiêu tối ưu hóa",
      subsections: [
        {
          id: "db7-sub-1-1",
          number: "1",
          title: "Mục tiêu tối ưu hóa & Ví dụ minh họa ý tưởng",
          parts: [
            {
              id: "db7-part-1-1-a",
              label: "a",
              title: "Mục tiêu Không gian (Space) & Thời gian (Time)",
              content: [
                {
                  type: "list",
                  items: [
                    "<strong>Về mặt không gian (space):</strong>\n• Tối ưu bộ nhớ sử dụng cho câu hỏi.\n• Tối ưu việc sử dụng thiết bị ngoại vi phục vụ cho việc khai thác dữ liệu.",
                    "<strong>Về mặt thời gian (time):</strong>\n• Giảm thời gian thực hiện câu hỏi.\n• Giảm độ phức tạp của câu hỏi.\n• Giảm số bộ (tuples), số quan hệ (relations), số nhân tử trong biểu thức điều kiện... nhằm giảm thao tác thực hiện."
                  ]
                }
              ]
            },
            {
              id: "db7-part-1-1-b",
              label: "b",
              title: "Ví dụ minh họa ý tưởng tối ưu & Giải thích cơ chế",
              content: [
                {
                  type: "paragraph",
                  text: "Cho 2 lược đồ quan hệ <code>R(AB)</code> và <code>S(CD)</code>. Yêu cầu: đưa ra thuộc tính A của các bộ thỏa mãn điều kiện <code>B = C</code> và <code>D = 100</code>."
                },
                {
                  type: "list",
                  items: [
                    "<strong>Câu hỏi viết bằng đại số quan hệ (DSQH) – dạng chưa tối ưu:</strong><br /><code>π_A( σ_{(B=C) ∧ (D=100)} ( AB × CD ) )</code>",
                    "<strong>Bước 1:</strong> Đưa phép chọn <code>D = 100</code> vào bên trong phép tích Đề-các:<br /><code>π_A( σ_{B=C} ( AB × σ_{D=100}(CD) ) )</code>",
                    "<strong>Bước 2:</strong> Chuyển phép chọn <code>σ_{B=C}</code> của tích Đề-các thành phép kết nối bằng (equi-join):<br /><code>π_A( AB ⋈_{B=C} σ_{D=100}(CD) )</code>"
                  ]
                },
                {
                  type: "callout",
                  variant: "important",
                  title: "Giải thích vì sao nhanh hơn & Nhận xét chung",
                  text: "• Trong biểu thức π_A( AB ⋈_{B=C} σ_{D=100}(CD) ): Chỉ chọn trên quan hệ S(CD) những bộ có giá trị D = 100 → số bộ lấy ra ít hơn toàn bộ số bộ của quan hệ S.\n• Số ít bộ được chọn ra đó mới đem đi kết nối với quan hệ R(AB). Phép kết nối chỉ giữ lại những bộ của R có giá trị tại B bằng với giá trị tại C của các bộ đã lọc.\n→ Nhanh hơn rất nhiều so với việc: lấy tích Đề-các R × S trước, rồi mới chọn trong kết quả những bộ có B = C (vì tích Đề-các sinh ra rất nhiều bộ trung gian không cần thiết).\n• Nhận xét: Số lần cần truy nhập tới bộ nhớ thứ cấp (secondary storage / Disk I/O) sẽ giảm đi nhiều. Trình tự thực hiện các phép tính đóng vai trò quan trọng trong quá trình tối ưu hóa câu hỏi."
                },
                {
                  type: "component",
                  component: "QueryOptimizationMotivationStudio"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION II: CÁC CHIẾN LƯỢC TỐI ƯU TỔNG QUÁT
       ============================================================ */
    {
      id: "db7-section-2",
      roman: "II",
      title: "Các chiến lược tối ưu tổng quát",
      subsections: [
        {
          id: "db7-sub-2-1",
          number: "1",
          title: "6 Nguyên tắc & Chiến lược chung khi tối ưu hóa câu hỏi",
          parts: [
            {
              id: "db7-part-2-1-a",
              label: "a",
              title: "6 Chiến lược tối ưu hóa nền tảng",
              content: [
                {
                  type: "list",
                  items: [
                    "<strong>1. Thực hiện phép chọn (selection) sớm nhất có thể:</strong> Đẩy phép chọn xuống sâu trong cây biểu thức càng sớm càng tốt để giảm số bộ dữ liệu cần xử lý ở các bước sau.",
                    "<strong>2. Tổ hợp những phép chọn xác định với phép tích Đề-các thành phép kết nối (join):</strong> Vì join hiệu quả hơn tích Đề-các kèm chọn lọc sau đó.",
                    "<strong>3. Tổ hợp đầy các phép tính một ngôi (unary operations):</strong> Như phép chọn hoặc phép chiếu (projection) lại với nhau để thực hiện cùng lúc, giảm số lần duyệt dữ liệu.",
                    "<strong>4. Tìm các biểu thức con chung (common sub-expressions):</strong> Trong một biểu thức để tránh tính toán lặp lại.",
                    "<strong>5. Xử lý các tệp (files) trước:</strong> Cân nhắc cách tổ chức, chỉ mục của tệp dữ liệu trước khi thực hiện.",
                    "<strong>6. Đánh giá trước khi thực hiện tính toán (ước lượng chi phí – cost estimation):</strong> Để chọn chiến lược thực hiện tối ưu."
                  ]
                },
                {
                  type: "component",
                  component: "GeneralOptimizationStrategiesStudio"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION III: BIỂU THỨC TƯƠNG ĐƯƠNG (EQUIVALENCE RULES)
       ============================================================ */
    {
      id: "db7-section-3",
      roman: "III",
      title: "Biểu thức tương đương (Equivalence Rules L1 - L11)",
      subsections: [
        {
          id: "db7-sub-3-1",
          number: "1",
          title: "Khái niệm quan hệ tương đương & Quy tắc kết nối/tích Đề-các (L1, L2)",
          parts: [
            {
              id: "db7-part-3-1-a",
              label: "a",
              title: "Khái niệm quan hệ tương đương",
              content: [
                {
                  type: "definition",
                  term: "Khái niệm quan hệ tương đương (Equivalent Relations)",
                  definition: "• Nếu quan niệm quan hệ là một tập các bộ (k-bộ) với k cố định → hai quan hệ tương đương khi và chỉ khi chúng có CÙNG TẬP CÁC BỘ.\n• Nếu quan niệm quan hệ là tập các ánh xạ từ tập tên thuộc tính vào tập trị → hai quan hệ bằng nhau nếu chúng có CÙNG TẬP ÁNH XẠ.\n• Có một số phép chuyển dịch đại số (algebraic transformation) thông thường được liệt kê thành các quy tắc (rules) dưới đây."
                },
                {
                  type: "list",
                  items: [
                    "<strong>L1 – Quy tắc giao hoán (commutativity) giữa phép kết nối và phép tích Đề-các:</strong><br />Nếu E₁, E₂ là hai biểu thức quan hệ, F là điều kiện trên các thuộc tính của E₁ và E₂:<br />• <code>E₁ ⋈_F E₂ ≡ E₂ ⋈_F E₁</code><br />• <code>E₁ * E₂ ≡ E₂ * E₁</code> (kết nối tự nhiên - natural join)<br />• <code>E₁ × E₂ ≡ E₂ × E₁</code> (tích Đề-các)",
                    "<strong>L2 – Quy tắc kết hợp (associativity) của phép kết nối và phép tích Đề-các:</strong><br />Nếu E₁, E₂, E₃ là các biểu thức quan hệ, F₁, F₂ là các điều kiện:<br />• <code>(E₁ ⋈_{F₁} E₂) ⋈_{F₂} E₃ ≡ E₁ ⋈_{F₁} (E₂ ⋈_{F₂} E₃)</code><br />• <code>(E₁ * E₂) * E₃ ≡ E₁ * (E₂ * E₃)</code><br />• <code>(E₁ × E₂) × E₃ ≡ E₁ × (E₂ × E₃)</code>"
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "db7-sub-3-2",
          number: "2",
          title: "Các quy tắc liên quan tới phép chọn & phép chiếu (L3 - L11)",
          parts: [
            {
              id: "db7-part-3-2-a",
              label: "a",
              title: "Hệ thống 11 Quy tắc vàng (L3 đến L11)",
              content: [
                {
                  type: "list",
                  items: [
                    "<strong>L3 – Dãy các phép chiếu (sequences of projections):</strong><br /><code>π_{A₁...A_n}( π_{B₁...B_m}(E) ) ≡ π_{A₁...A_n}(E)</code> (nếu <code>{A₁...A_n} ⊆ {B₁...B_m}</code>).",
                    "<strong>L4 – Dãy các phép chọn (sequences of selections):</strong><br /><code>σ_{F₁}( σ_{F₂}(E) ) ≡ σ_{F₁ ∧ F₂}(E)</code>.<br />Vì <code>F₁ ∧ F₂ = F₂ ∧ F₁</code> nên phép chọn có tính giao hoán: <code>σ_{F₁}( σ_{F₂}(E) ) ≡ σ_{F₂}( σ_{F₁}(E) )</code>.",
                    "<strong>L5 – Giao hoán phép chọn và phép chiếu:</strong><br /><code>σ_F( π_{A₁...A_n}(E) ) ≡ π_{A₁...A_n}( σ_F(E) )</code> (nếu tất cả thuộc tính trong F đều thuộc {A₁...A_n}).",
                    "<strong>L6 – Giao hoán phép chọn và phép tích Đề-các:</strong><br />Nếu tất cả các thuộc tính của F là thuộc tính của E₁:<br /><code>σ_F(E₁ × E₂) ≡ σ_F(E₁) × E₂</code>.<br />• <em>Hệ quả 1:</em> Nếu F có dạng <code>F₁ ∧ F₂</code>, trong đó F₁ chỉ chứa thuộc tính của E₁ và F₂ chỉ chứa thuộc tính của E₂:<br /><code>σ_F(E₁ × E₂) ≡ σ_{F₁}(E₁) × σ_{F₂}(E₂)</code>.<br />• <em>Hệ quả 2:</em> Nếu F₁ chỉ chứa thuộc tính của E₁, nhưng F₂ chứa thuộc tính của cả E₁ và E₂:<br /><code>σ_F(E₁ × E₂) ≡ σ_{F₂}( σ_{F₁}(E₁) × E₂ )</code>.",
                    "<strong>L7 – Giao hoán phép chọn và phép hợp (union):</strong><br />Nếu E = E₁ ∪ E₂: <code>σ_F(E₁ ∪ E₂) ≡ σ_F(E₁) ∪ σ_F(E₂)</code>.",
                    "<strong>L8 – Giao hoán phép chọn và phép hiệu tập hợp (set difference):</strong><br /><code>σ_F(E₁ \\ E₂) ≡ σ_F(E₁) \\ σ_F(E₂)</code> (thực hiện σ_F(E₂) trước sẽ hiệu quả hơn vì kích cỡ quan hệ bé đi rất nhiều).",
                    "<strong>L9 – Hoán vị phép chọn với nối tự nhiên (natural join – trường hợp đặc biệt):</strong><br />Nếu F là điều kiện chỉ chứa các thuộc tính chung của E₁ và E₂:<br /><code>σ_F(E₁ ⋈ E₂) ≡ σ_F(E₁) ⋈ σ_F(E₂)</code>.",
                    "<strong>L10 – Hoán vị phép chiếu với tích Đề-các:</strong><br /><code>π_{A₁...A_n}(E₁ × E₂) ≡ π_{B₁...B_m}(E₁) × π_{C₁...C_k}(E₂)</code> (với B₁...B_m thuộc E₁ và C₁...C_k thuộc E₂).",
                    "<strong>L11 – Giao hoán phép chiếu với phép hợp:</strong><br /><code>π_{A₁...A_n}(E₁ ∪ E₂) ≡ π_{A₁...A_n}(E₁) ∪ π_{A₁...A_n}(E₂)</code>."
                  ]
                },
                {
                  type: "callout",
                  variant: "important",
                  title: "Lưu ý quan trọng từ giáo trình",
                  text: "• Các quy tắc L4, L5, L6 nói chung là để ĐẨY PHÉP CHỌN XUỐNG TRƯỚC PHÉP KẾT NỐI, vì phép kết nối thường thực hiện lâu như phép tích Đề-các.\n• Quy tắc đẩy PHÉP CHIẾU XUỐNG TRƯỚC PHÉP TÍCH ĐỀ-CÁC HOẶC PHÉP HỢP cũng tương tự quy tắc L6, L7.\n• CHÚ Ý ĐẶC BIỆT: Không có quy tắc tổng quát cho việc đẩy phép chiếu xuống trước PHÉP HIỆU CÁC TẬP HỢP (\\)!"
                },
                {
                  type: "component",
                  component: "EquivalenceRulesCatalogStudio"
                },
                {
                  type: "component",
                  component: "PushdownSelectionSimulator"
                },
                {
                  type: "component",
                  component: "PushdownProjectionSimulator"
                },
                {
                  type: "component",
                  component: "EquivalenceRulesCustomSandbox"
                },
                {
                  type: "component",
                  component: "DatabaseCh7Part1ConceptQuiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION IV: VÍ DỤ MINH HỌA (CSDL THƯ VIỆN & CÂY TRUY VẤN)
       ============================================================ */
    {
      id: "db7-section-4",
      roman: "IV",
      title: "Ví dụ minh họa (CSDL Thư viện & 2 Chặng tối ưu)",
      subsections: [
        {
          id: "db7-sub-4-1",
          number: "1",
          title: "Cơ sở dữ liệu ví dụ Thư viện & Phân tích cây ban đầu",
          parts: [
            {
              id: "db7-part-4-1-a",
              label: "a",
              title: "Lược đồ CSDL & Câu truy vấn mượn sách trước 12/01/2009",
              content: [
                {
                  type: "paragraph",
                  text: "<strong>Lược đồ CSDL Thư viện:</strong><br />• <code>Sach(tensach, tacgia, tennxb, masach)</code><br />• <code>NXB(tennxb, diachi, thanhpho, manxb)</code><br />• <code>DocGia(tendg, diachi, madg)</code><br />• <code>Muon(madg, masach, ngay)</code>"
                },
                {
                  type: "list",
                  items: [
                    "<strong>Yêu cầu truy vấn:</strong> Liệt kê các sách đã được mượn trước ngày <code>12/01/2009</code>.",
                    "<strong>Biểu thức ĐSQH ban đầu (chưa tối ưu):</strong><br /><code>π_{tensach}( σ_{ngay < '12/01/2009'}( Sach * Muon * DocGia ) )</code>",
                    "<strong>Phân tích điều kiện trong kết nối tự nhiên:</strong><br />• <code>Sach.masach = Muon.masach AND Muon.madg = DocGia.madg</code><br />• <code>ngay < '12/01/2009'</code>",
                    "<strong>Nguyên tắc tối ưu hóa:</strong> Cố gắng tách các phép chọn và <strong>di chuyển xuống càng sâu càng tốt</strong> trong cây biểu thức (đẩy gần lá – gần các quan hệ gốc)."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "db7-sub-4-2",
          number: "2",
          title: "2 Bước tối ưu: Đẩy phép chọn & Biến đổi phép chiếu",
          parts: [
            {
              id: "db7-part-4-2-a",
              label: "a",
              title: "Quy trình 2 bước tối ưu hóa hoàn chỉnh",
              content: [
                {
                  type: "list",
                  items: [
                    "<strong>Bước tối ưu 1 – Đẩy phép chọn xuống:</strong><br />• Đưa phép chọn <code>σ_{ngay < '12/01/2009'}</code> xuống dưới phép chiếu và tách khỏi 2 phép chọn còn lại (áp dụng L4, L5), vì thuộc tính <code>ngay</code> chỉ thuộc quan hệ <code>Muon</code>.<br />• Đưa phép chọn <code>Muon.madg = DocGia.madg</code> xuống dưới, trước phép tích Đề-các của <code>Muon</code> và <code>DocGia</code>.",
                    "<strong>Bước tối ưu 2 – Biến đổi các phép chiếu:</strong><br />• Dùng phép chiếu để <strong>chỉ chọn ra những thuộc tính cần thiết</strong> cho phép tích Đề-các (loại bỏ sớm các thuộc tính không dùng đến), giúp giảm kích thước dữ liệu trung gian.<br />• Chiếu <code>π_{Muon.masach, Muon.madg}</code> và <code>π_{DocGia.madg}</code> trước khi tích Đề-các <code>Muon × DocGia</code>, kèm chọn <code>σ_{Muon.madg = DocGia.madg}</code>.<br />• Kết quả trên tiếp tục chọn <code>σ_{Sach.masach = Muon.masach}</code> với <code>Sach</code> (đã chiếu <code>π_{Sach.masach, tensach}</code>).<br />• Cuối cùng áp dụng chọn <code>σ_{ngay < '12/01/2009'}</code> và chiếu <code>π_{tensach}</code>."
                  ]
                },
                {
                  type: "callout",
                  variant: "important",
                  title: "Kết luận 2 giai đoạn chính của quá trình tối ưu hóa",
                  text: "1. Tách và đẩy các phép chọn xuống sâu nhất có thể (gần các quan hệ gốc).\n2. Chèn/biến đổi các phép chiếu để chỉ giữ lại thuộc tính cần thiết ở mỗi bước trung gian."
                },
                {
                  type: "component",
                  component: "LibraryQueryOptimizationWalkthrough"
                },
                {
                  type: "component",
                  component: "QueryTreeDualViewerStudio"
                },
                {
                  type: "component",
                  component: "JoinOrderCostOptimizerStudio"
                },
                {
                  type: "component",
                  component: "CustomQueryTreeSandbox"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION V: BÀI TẬP TỰ LUYỆN (EXERCISES)
       ============================================================ */
    {
      id: "db7-section-5",
      roman: "V",
      title: "Bài tập tự luyện & Giải chi tiết",
      subsections: [
        {
          id: "db7-sub-5-1",
          number: "1",
          title: "Giải chi tiết Bài 1 & Bài 2 CSDL Thư viện",
          parts: [
            {
              id: "db7-part-5-1-a",
              label: "a",
              title: "Studio giải từng bước các bài tập tự luyện",
              content: [
                {
                  type: "paragraph",
                  text: "Với CSDL <code>ThuVien</code> ở trên, viết biểu thức đại số quan hệ thực hiện các truy vấn sau và <strong>tối ưu hóa</strong> các biểu thức đó (có giải thích từng bước):"
                },
                {
                  type: "list",
                  items: [
                    "<strong>Bài 1:</strong> Cho biết danh sách những quyển sách có thời gian mượn lớn hơn 1 năm và <strong>hiện chưa trả</strong>.",
                    "<strong>Bài 2:</strong> Cho biết họ tên của những độc giả ở <strong>TP.HCM</strong> đã mượn sách có tên <strong>'Thế giới phẳng'</strong> của NXB Trẻ."
                  ]
                },
                {
                  type: "component",
                  component: "Chapter7ExercisesSolverStudio"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION VI: TÓM TẮT NHANH (ÔN THI SIÊU TỐC)
       ============================================================ */
    {
      id: "db7-section-6",
      roman: "VI",
      title: "Tóm tắt nhanh (Ôn thi siêu tốc & 5 Nguyên tắc vàng)",
      subsections: [
        {
          id: "db7-sub-6-1",
          number: "1",
          title: "Master Summary Dashboard & Bảng tra cứu",
          parts: [
            {
              id: "db7-part-6-1-a",
              label: "a",
              title: "Tổng kết 11 quy tắc L1 - L11 & 5 Nguyên tắc vàng",
              content: [
                {
                  type: "component",
                  component: "QueryOptimizationMasterSummaryDashboard"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION VII: GRAND MASTER EXAM 10 CÂU TRẮC NGHIỆM TỔNG HỢP
       ============================================================ */
    {
      id: "db7-section-7",
      roman: "VII",
      title: "Grand Master Exam 10 Câu Trắc Nghiệm Toàn Diện",
      subsections: [
        {
          id: "db7-sub-7-1",
          number: "1",
          title: "Bài thi tổng lực Chương VII có Timer đếm ngược",
          parts: [
            {
              id: "db7-part-7-1-a",
              label: "a",
              title: "Grand Master Exam",
              content: [
                {
                  type: "component",
                  component: "DatabaseChapter7GrandMasterQuiz"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
