/* ============================================================
   DỮ LIỆU HỌC TẬP CHUẨN MỰC: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG V: PHỤ THUỘC HÀM VÀ KHÓA (FUNCTIONAL DEPENDENCIES AND KEYS)
   HOÀN TẤT: MỤC 0, I, II, III (KHÓA & THUẬT TOÁN TÌM KHÓA) & IV (BÀI TẬP SLIDE)
   ============================================================ */

export const databaseCh5Data = {
  id: "database-ch5",
  title: "Chương V: Phụ thuộc hàm và khóa",
  subtitle: "Nền tảng toán học & lý thuyết chuẩn hóa cơ sở dữ liệu quan hệ: Định nghĩa Phụ thuộc hàm (FD: X -> Y), Hệ tiên đề Armstrong (Armstrong's Axioms), Thuật toán tìm Bao đóng tập thuộc tính (X+), Thuật toán xác định Khóa chính & Siêu khóa tối tiểu (Candidate Keys), Phân loại thuộc tính (L, R, M, D) & Phủ tối thiểu (Minimal Cover).",
  sections: [
    /* ============================================================
       SECTION 0: TỔNG QUAN & CYBER MATH HERO BANNER
       ============================================================ */
    {
      id: "db5-section-0",
      roman: "★",
      title: "TỔNG QUAN PHỤ THUỘC HÀM, HỆ TIÊN ĐỀ ARMSTRONG & KHÓA",
      subsections: [
        {
          id: "db5-sub-0",
          number: "0",
          title: "Interactive Functional Dependencies & Keys Engine",
          parts: [
            {
              id: "db5-part-hero",
              label: "INTERACTIVE HERO BANNER",
              title: "Trực Quan Hóa 4 Trụ Cột Toán Học: Phụ Thuộc Hàm, Hệ Tiên Đề Armstrong, Bao Đóng X+ & Thuật Toán Tìm Khóa L/R/M/D",
              content: [
                {
                  type: "component",
                  component: "FunctionalDependenciesCyberHeroBanner"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION I: LÝ THUYẾT THIẾT KẾ CSDL (DATABASE DESIGN THEORY)
       ============================================================ */
    {
      id: "db5-section-1",
      roman: "I",
      title: "Lý thuyết thiết kế CSDL (Database Design Theory)",
      subsections: [
        {
          id: "db5-sub-1-1",
          number: "1",
          title: "Vấn đề đặt ra & 4 Dị thường thiết kế kinh điển",
          parts: [
            {
              id: "db5-part-1-1-a",
              label: "a",
              title: "Ví dụ minh họa & 4 Thảm họa khi thiết kế không tốt",
              content: [
                {
                  type: "paragraph",
                  text: "<strong>Vấn đề đặt ra:</strong> Làm thế nào để thiết kế một CSDL cho tốt? Xét ví dụ minh họa: Lược đồ <code>S(S#, Sname, add, pro, price)</code> — trong đó một nhà cung cấp (NCC) có thể xuất hiện nhiều lần vì cung cấp nhiều mặt hàng (<code>pro</code>) khác nhau &rarr; dữ liệu bị lặp."
                },
                {
                  type: "list",
                  items: [
                    "<strong>1. Dư thừa dữ liệu (Redundancy):</strong> Địa chỉ (<code>add</code>) và tên NCC (<code>Sname</code>) bị lặp lại nhiều lần trong quan hệ.",
                    "<strong>2. Không nhất quán (Inconsistency):</strong> Khi sửa địa chỉ NCC ở một bộ (row) nhưng các bộ khác vẫn giữ giá trị cũ &rarr; một NCC có thể có hai địa chỉ khác nhau trong cùng CSDL.",
                    "<strong>3. Dị thường khi thêm bộ (Insertion anomalies):</strong> Nếu một NCC chưa cung cấp mặt hàng nào thì không thể thêm vào quan hệ vì các thuộc tính <code>pro</code>, <code>price</code> sẽ là NULL.",
                    "<strong>4. Dị thường khi xóa bộ (Deletion anomalies):</strong> Không thể xóa tất cả các mặt hàng của một NCC mà không làm mất luôn thông tin về NCC đó (trong khi các NCC khác vẫn có thể cung cấp mặt hàng tương tự)."
                  ]
                },
                {
                  type: "callout",
                  variant: "important",
                  title: "Cách giải quyết căn bản",
                  text: "Tách (decompose) lược đồ ban đầu thành các lược đồ con phù hợp hơn — đây chính là lý do căn bản cần nghiên cứu lý thuyết phụ thuộc hàm và khóa."
                },
                {
                  type: "component",
                  component: "BadDesignAnomaliesStudio"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION II: PHỤ THUỘC HÀM (FUNCTIONAL DEPENDENCY - FD)
       ============================================================ */
    {
      id: "db5-section-2",
      roman: "II",
      title: "Phụ thuộc hàm (Functional Dependency - FD)",
      subsections: [
        {
          id: "db5-sub-2-1",
          number: "1",
          title: "Định nghĩa, Ví dụ & Các nhận xét quan trọng",
          parts: [
            {
              id: "db5-part-2-1-a",
              label: "a",
              title: "Định nghĩa hình thức của Phụ thuộc hàm",
              content: [
                {
                  type: "paragraph",
                  text: "Ký hiệu: <code>X &rarr; Y</code> (&ldquo;X xác định hàm Y&rdquo; hay &ldquo;Y phụ thuộc hàm vào X&rdquo;)."
                },
                {
                  type: "definition",
                  term: "Định nghĩa hình thức Phụ thuộc hàm",
                  definition: "Với mọi quan hệ r xây dựng trên lược đồ R(U), với hai bộ bất kỳ t1, t2 ∈ r:\nNếu t1.X = t2.X thì t1.Y = t2.Y\n(trong đó t.X là bộ t thu hẹp trên tập thuộc tính X)."
                },
                {
                  type: "list",
                  items: [
                    "<strong>Ví dụ minh họa (Bảng nhân viên):</strong> <code>NHAN_VIEN(e#, ename, dept_name, dept_addr, class)</code>",
                    "• <code>dept_name &rarr; class</code>",
                    "• <code>dept_name &rarr; dept_addr</code>",
                    "• <code>e# &rarr; ename</code>",
                    "• <code>e# &rarr; dept_name, dept_addr, class</code>"
                  ]
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Các nhận xét quan trọng",
                  text: "• Khóa trong quan hệ xác định hàm mọi thuộc tính khác.\n• Các phụ thuộc hàm (pth) diễn tả mối tương quan liên bộ, liên thuộc tính.\n• Ký hiệu R(U, F): lược đồ quan hệ R xây dựng trên tập thuộc tính U, với tập các ràng buộc phụ thuộc hàm F.\n• X → Y không suy ra được Y → X (chiều ngược lại chưa chắc đúng): Ví dụ: e# → ename nhưng ename ↛ e#; e# → dept_name nhưng dept_name ↛ e#."
                },
                {
                  type: "component",
                  component: "FunctionalDependencyExplorer"
                }
              ]
            }
          ]
        },
        {
          id: "db5-sub-2-2",
          number: "2",
          title: "Hệ tiên đề Armstrong & Quy tắc suy diễn bổ sung",
          parts: [
            {
              id: "db5-part-2-2-a",
              label: "a",
              title: "3 Tiên đề cơ bản & 3 Quy tắc dẫn xuất",
              content: [
                {
                  type: "paragraph",
                  text: "<strong>Phụ thuộc được suy dẫn logic từ F (Logical Implication):</strong> Cho <code>R(U, F)</code>, f là một FD trên R(U). Ta nói f được suy dẫn logic từ F, ký hiệu <code>F &vDash; f</code>, nếu mọi quan hệ r trên R(U) thỏa F thì cũng thỏa f. Ký hiệu <code>F⁺ = { f | F &vDash; f }</code> — gọi là <strong>bao đóng của tập phụ thuộc hàm F</strong> (closure of F)."
                },
                {
                  type: "list",
                  items: [
                    "<strong>(A1) Phản xạ (Reflexivity):</strong> Nếu Y &subseteq; X thì X &rarr; Y.",
                    "<strong>(A2) Tăng trưởng (Augmentation):</strong> Nếu Z &subseteq; U và X &rarr; Y thì ZX &rarr; ZY (hoặc XZ &rarr; YZ).",
                    "<strong>(A3) Bắc cầu (Transitivity):</strong> Nếu X &rarr; Y và Y &rarr; Z thì X &rarr; Z.",
                    "<strong>Bổ đề 1:</strong> Hệ tiên đề Armstrong là <strong>đúng đắn (sound)</strong>."
                  ]
                },
                {
                  type: "paragraph",
                  text: "<strong>Bổ đề 2 — Các quy tắc suy diễn bổ sung (Additional Inference Rules):</strong>"
                },
                {
                  type: "list",
                  items: [
                    "<strong>1. Quy tắc hợp (Union):</strong> Nếu X &rarr; Y và X &rarr; Z thì X &rarr; YZ.",
                    "<strong>2. Quy tắc giả bắc cầu (Pseudotransitivity):</strong> Nếu X &rarr; Y và WY &rarr; Z thì WX &rarr; Z, với W &subseteq; U.",
                    "<strong>3. Quy tắc tách (Decomposition):</strong> Nếu X &rarr; YZ thì X &rarr; Y và X &rarr; Z."
                  ]
                },
                {
                  type: "component",
                  component: "ArmstrongAxiomsProofStudio"
                }
              ]
            }
          ]
        },
        {
          id: "db5-sub-2-3",
          number: "3",
          title: "Bao đóng của tập thuộc tính (Attribute Closure X+) & Thuật toán",
          parts: [
            {
              id: "db5-part-2-3-a",
              label: "a",
              title: "Định nghĩa, Bổ đề 3 & Thuật toán tính X+",
              content: [
                {
                  type: "definition",
                  term: "Bao đóng của X đối với F (X+)",
                  definition: "X⁺ = { A ∈ U | (X → A) ∈ F⁺ }\nLà tập tất cả các thuộc tính A sao cho X → A được suy diễn từ F nhờ hệ tiên đề Armstrong."
                },
                {
                  type: "list",
                  items: [
                    "<strong>Nhận xét:</strong> X &subseteq; X⁺; &forall; A &isin; X thì A &isin; X⁺; Nếu Y = A1A2..Aik và X &rarr; Y, theo tiên đề tách: X &rarr; Aij &forall; j=1..k. <em>Ý nghĩa:</em> X⁺ chính là tập tất cả các thuộc tính phụ thuộc vào X.",
                    "<strong>Bổ đề 3:</strong> <code>F &vdash; (X &rarr; Y) &hArr; Y &subseteq; X⁺</code> (X &rarr; Y được suy diễn từ F nhờ hệ luật Armstrong khi và chỉ khi Y là tập con của bao đóng X đối với F).",
                    "<strong>Định lý:</strong> Hệ tiên đề Armstrong là <strong>đúng đắn và đầy đủ (sound and complete)</strong>."
                  ]
                },
                {
                  type: "component",
                  component: "ArmstrongSoundnessCompletenessInspector"
                },
                {
                  type: "component",
                  component: "AttributeClosureCalculatorStudio"
                },
                {
                  type: "component",
                  component: "CustomAttributeClosureSandbox"
                },
                {
                  type: "component",
                  component: "DatabaseCh5Part1ConceptQuiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION III: KHÓA (KEY) & THUẬT TOÁN TÌM KHÓA
       ============================================================ */
    {
      id: "db5-section-3",
      roman: "III",
      title: "Khóa (Key) & Thuật toán tìm khóa",
      subsections: [
        {
          id: "db5-sub-3-1",
          number: "1",
          title: "Định nghĩa Siêu khóa, Khóa tối tiểu, Khóa chính & Khóa dự tuyển",
          parts: [
            {
              id: "db5-part-3-1-a",
              label: "a",
              title: "Đặc tả chi tiết các loại khóa trong quan hệ",
              content: [
                {
                  type: "list",
                  items: [
                    "<strong>Siêu khóa (Super Key):</strong> Siêu khóa là tập con X khác rỗng các thuộc tính của R sao cho với hai bộ t1, t2 bất kỳ trong r &isin; R: <code>t1[X] &ne; t2[X]</code>. <em>Điều kiện:</em> X là siêu khóa của R &hArr; <code>X &rarr; U</code> (tức <code>X⁺ = U</code>). Siêu khóa xác định duy nhất một hàng trong bảng.",
                    "<strong>Khóa tối tiểu (Minimal Key) / Khóa:</strong> Khóa tối tiểu K là siêu khóa, kèm thêm tính chất: nếu loại khỏi K bất kỳ thuộc tính nào thì K <strong>không còn</strong> là siêu khóa nữa (Khóa tối tiểu là siêu khóa nhỏ nhất).",
                    "<strong>Định nghĩa khóa dựa trên tập pth:</strong> Cho <code>R(U, F)</code>, <code>K &subseteq; U</code> được gọi là khóa của R(U, F) nếu: 1) <code>K⁺ = U</code> (tức K &rarr; U &isin; F⁺); 2) <code>(K \\ {A})⁺ &ne; U, &forall; A &isin; K</code> (bớt bất kỳ phần tử nào khỏi K thì bao đóng không còn bằng U).",
                    "<strong>Khóa chính (Primary Key) & Khóa dự tuyển (Candidate Key):</strong> Khóa chính là một khóa tối tiểu được người phân tích <strong>chọn</strong> để cài đặt. Khóa dự tuyển là các khóa tối tiểu <strong>khác</strong>, không phải khóa chính."
                  ]
                },
                {
                  type: "component",
                  component: "KeyDefinitionsDeconstructor"
                }
              ]
            }
          ]
        },
        {
          id: "db5-sub-3-2",
          number: "2",
          title: "Thuật toán tìm khóa: Tìm một khóa & Tìm tất cả các khóa",
          parts: [
            {
              id: "db5-part-3-2-a",
              label: "a",
              title: "a) Tìm MỘT khóa từ một siêu khóa (Thuật toán loại bớt dần)",
              content: [
                {
                  type: "paragraph",
                  text: "<strong>Ý tưởng:</strong> Nếu X⁺ = U thì (X &cup; {A})⁺ = U. Nếu X là khóa tối tiểu thì (X \\ {A})⁺ &ne; U, &forall; A &isin; U. Từ một siêu khóa X bất kỳ (X⁺ = U), có thể loại bớt dần các phần tử của X (miễn vẫn giữ X⁺ = U) để thu được tập X nhỏ nhất — đó chính là khóa."
                },
                {
                  type: "list",
                  items: [
                    "<strong>Bước 1:</strong> Đặt <code>K = U</code>.",
                    "<strong>Bước 2:</strong> Lặp lại: loại khỏi K phần tử A nếu <code>(K \\ {A})⁺ = U</code>."
                  ]
                },
                {
                  type: "component",
                  component: "SingleKeyPruningSimulator"
                }
              ]
            },
            {
              id: "db5-part-3-2-b",
              label: "b",
              title: "b) Tìm TẤT CẢ các khóa của lược đồ quan hệ (Thuật toán phân loại N / D / L)",
              content: [
                {
                  type: "paragraph",
                  text: "Thuật toán phân rã không gian thuộc tính thành 3 nhóm để sinh trọn bộ các khóa tối tiểu:"
                },
                {
                  type: "list",
                  items: [
                    "<strong>UR:</strong> Tập thuộc tính xuất hiện ở vế phải các FD trong F.",
                    "<strong>UL:</strong> Tập thuộc tính xuất hiện ở vế trái các FD trong F.",
                    "<strong>N = U \\ UR:</strong> Các thuộc tính cô lập và chỉ xuất hiện ở vế trái &rarr; <code>N &subseteq; Khóa</code> (Bắt buộc có trong mọi khóa).",
                    "<strong>D = UR \\ UL:</strong> Các thuộc tính chỉ xuất hiện ở vế phải &rarr; <code>D &cap; Khóa = &empty;</code> (Loại bỏ hoàn toàn).",
                    "<strong>L = U \\ (N &cup; D):</strong> Các thuộc tính trung gian &rarr; Thử nghiệm tổ hợp X = N &cup; Li theo thứ tự tăng dần số phần tử.",
                    "<strong>Quy tắc cắt tỉa nhánh (Pruning):</strong> Nếu X = N &cup; Li đã là khóa thì không cần thử với các Lj &sup; Li (chứa Li)."
                  ]
                },
                {
                  type: "component",
                  component: "AllCandidateKeysEngineStudio"
                },
                {
                  type: "component",
                  component: "CandidateKeysTextbookWalkthrough"
                },
                {
                  type: "component",
                  component: "CustomKeyFinderSandbox"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION IV: BÀI TẬP MINH HỌA (TRONG SLIDE)
       ============================================================ */
    {
      id: "db5-section-4",
      roman: "IV",
      title: "Bài tập minh họa (trong slide)",
      subsections: [
        {
          id: "db5-sub-4-1",
          number: "1",
          title: "Đồ án bài tập lớn: Lược đồ 11 thuộc tính U = ABCDEGHIJLM",
          parts: [
            {
              id: "db5-part-4-1-a",
              label: "a",
              title: "Đặc tả bài toán & Studio Lời giải hoàn chỉnh 3 câu",
              content: [
                {
                  type: "paragraph",
                  text: "Cho lược đồ quan hệ <code>R(U, F)</code> với <code>U = ABCDEGHIJLM</code> và tập phụ thuộc hàm <code>F = { M&rarr;ABC, AB&rarr;CH, ABC&rarr;EH, MB&rarr;CDG, DG&rarr;HL }</code>."
                },
                {
                  type: "list",
                  items: [
                    "<strong>a)</strong> Tính bao đóng <code>X = M⁺</code>.",
                    "<strong>b)</strong> <code>M &rarr; DG</code> có được suy dẫn từ F hay không?",
                    "<strong>c)</strong> Tìm tất cả các khóa của lược đồ quan hệ."
                  ]
                },
                {
                  type: "component",
                  component: "SlideMasterExerciseSolver"
                },
                {
                  type: "component",
                  component: "DatabaseCh5Part2ConceptQuiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION V: PHỦ TỐI THIỂU CỦA TẬP PHỤ THUỘC HÀM (MINIMAL COVER)
       ============================================================ */
    {
      id: "db5-section-5",
      roman: "V",
      title: "Phủ tối thiểu của tập phụ thuộc hàm (Minimal Cover)",
      subsections: [
        {
          id: "db5-sub-5-1",
          number: "1",
          title: "Phụ thuộc hàm tương đương, Bổ đề & Phụ thuộc đầy đủ",
          parts: [
            {
              id: "db5-part-5-1-a",
              label: "a",
              title: "Khái niệm Phủ, Tương đương & Phụ thuộc đầy đủ",
              content: [
                {
                  type: "paragraph",
                  text: "<strong>Cho lược đồ R(A1..An), hai tập FD F và G:</strong>"
                },
                {
                  type: "list",
                  items: [
                    "<strong>F phủ G (F covers G):</strong> nếu <code>F⁺ &supe; G</code> (tức <code>F⁺ &supe; G⁺</code>) &rarr; Các FD trong G đều có thể suy ra được nhờ các FD trong F.",
                    "<strong>F tương đương G (F &equiv; G):</strong> nếu F phủ G và G phủ F (<code>F⁺ &supe; G &and; G⁺ &supe; F</code> hay <code>F⁺ = G⁺</code>).",
                    "<strong>Bổ đề:</strong> Với mỗi tập FD F, luôn tìm được một tập FD G tương đương với F, mà <strong>vế phải</strong> của các FD trong G chỉ gồm <strong>không quá một thuộc tính</strong>.",
                    "<strong>Khái niệm Phụ thuộc đầy đủ (Full FD):</strong> Với X &rarr; Y &isin; F⁺, ta nói Y phụ thuộc đầy đủ vào X nếu với mọi X' &sub; X thì <code>X' &rarr; Y &notin; F⁺</code> (không có tập con thực sự nào của X cũng xác định được Y)."
                  ]
                },
                {
                  type: "component",
                  component: "FDEquivalenceAndFullFDStudio"
                }
              ]
            }
          ]
        },
        {
          id: "db5-sub-5-2",
          number: "2",
          title: "Định nghĩa & Thuật toán 3 bước tìm Phủ tối thiểu",
          parts: [
            {
              id: "db5-part-5-2-a",
              label: "a",
              title: "3 Điều kiện của Phủ tối thiểu & Thuật toán 3 bước",
              content: [
                {
                  type: "definition",
                  term: "Định nghĩa Tập Phủ Tối Thiểu (Minimal Cover)",
                  definition: "Tập F được gọi là phủ tối thiểu nếu thỏa cả 3 điều kiện:\n1. Vế phải của tất cả các FD trong F đều chỉ có MỘT thuộc tính.\n2. Mỗi FD X → A trong F đều quan trọng: với mọi X → A ∈ F thì F và F \\ {X → A} không tương đương (không có FD dư thừa).\n3. Mỗi thuộc tính ở vế trái của mỗi FD đều quan trọng: không thể bớt bất kỳ thuộc tính nào khỏi vế trái (phụ thuộc đầy đủ)."
                },
                {
                  type: "list",
                  items: [
                    "<strong>Bước 1 (Phân rã vế phải):</strong> Phân rã vế phải tất cả các FD (áp dụng luật tách) &rarr; thu được tập G mà mỗi FD chỉ có 1 thuộc tính vế phải.",
                    "<strong>Bước 2 (Loại bỏ FD dư thừa):</strong> Với mỗi X &rarr; A &isin; G, đặt H = G \\ {X &rarr; A}. Nếu <code>A &isin; X_H⁺</code> thì loại bỏ X &rarr; A khỏi G.",
                    "<strong>Bước 3 (Loại bỏ thuộc tính dư thừa vế trái):</strong> Với mỗi X &rarr; A &isin; G và B &isin; X, nếu <code>A &isin; (X \\ {B})_G⁺</code> thì rút gọn thành (X \\ {B}) &rarr; A."
                  ]
                },
                {
                  type: "component",
                  component: "MinimalCover3StepEngineStudio"
                },
                {
                  type: "component",
                  component: "MinimalCoverSlideExamplesSolver"
                },
                {
                  type: "component",
                  component: "CustomMinimalCoverAndKeysSandbox"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION VI: BÀI TẬP CHƯƠNG V & TỔNG KẾT KHÁI NIỆM CỐT LÕI
       ============================================================ */
    {
      id: "db5-section-6",
      roman: "VI",
      title: "Bài tập chương V & Tổng kết các khái niệm cốt lõi",
      subsections: [
        {
          id: "db5-sub-6-1",
          number: "1",
          title: "Bộ 3 Bài tập lớn tổng hợp cuối chương (Bài 1, Bài 2, Bài 3)",
          parts: [
            {
              id: "db5-part-6-1-a",
              label: "a",
              title: "Studio Lời giải chi tiết trọn vẹn 3 Bài tập lớn",
              content: [
                {
                  type: "paragraph",
                  text: "Tổng hợp các bài tập lớn tổng hợp rèn luyện toàn diện kỹ năng: Tính Bao Đóng X⁺, Chứng minh suy dẫn logic, Tìm toàn bộ Khóa tối tiểu bằng phân nhóm N/D/L và Thuật toán rút gọn Phủ tối thiểu."
                },
                {
                  type: "component",
                  component: "Chapter5GrandExercisesSuite"
                }
              ]
            }
          ]
        },
        {
          id: "db5-sub-6-2",
          number: "2",
          title: "Grand Summary Matrix & Grand Master Exam 10 Câu",
          parts: [
            {
              id: "db5-part-6-2-a",
              label: "a",
              title: "Ma trận tổng hợp kiến thức & Bài thi tổng lực kết thúc Chương V",
              content: [
                {
                  type: "component",
                  component: "DatabaseChapter5SummaryDashboard"
                },
                {
                  type: "component",
                  component: "DatabaseChapter5GrandMasterQuiz"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
