/* ============================================================
   DỮ LIỆU HỌC TẬP CHUẨN MỰC: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG IV: RÀNG BUỘC TOÀN VẸN (INTEGRITY CONSTRAINTS)
   HOÀN TẤT TRỌN VẸN 100%: MỤC 0, I, II, III, IV, V, VI, VII, VIII (BÀI TẬP) & IX (MASTER EXAM)
   ============================================================ */

export const databaseCh4Data = {
  id: "database-ch4",
  title: "Chương IV: Ràng buộc toàn vẹn",
  subtitle: "Lớp khiên bảo vệ tính đúng đắn, nhất quán và tin cậy của dữ liệu: Phân loại ràng buộc đa tầng (Miền giá trị, Thực thể, Tham chiếu, Liên bộ, Liên quan hệ), Biểu diễn hình thức bằng Logic vị từ, Bảng Tầm Ảnh Hưởng (Impact Matrix) & Cơ chế kích hoạt Trigger tự động.",
  sections: [
    /* ============================================================
       SECTION 0: TỔNG QUAN & CYBER SHIELD HERO BANNER
       ============================================================ */
    {
      id: "db4-section-0",
      roman: "★",
      title: "TỔNG QUAN RÀNG BUỘC TOÀN VẸN & CYBER SHIELD",
      subsections: [
        {
          id: "db4-sub-0",
          number: "0",
          title: "Interactive Integrity Constraints Cyber-Shield",
          parts: [
            {
              id: "db4-part-hero",
              label: "INTERACTIVE HERO BANNER",
              title: "Trực Quan Hóa 4 Tầng Khiên Bảo Vệ, Biểu Diễn Logic Vị Từ & Bảng Tầm Ảnh Hưởng Sống",
              content: [
                {
                  type: "component",
                  component: "IntegrityConstraintsCyberHeroBanner"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION I: CSDL MẪU (SAMPLE DATABASES)
       ============================================================ */
    {
      id: "db4-section-1",
      roman: "I",
      title: "CSDL Mẫu (Sample Databases)",
      subsections: [
        {
          id: "db4-sub-1-1",
          number: "1",
          title: "Đặc tả lược đồ CSDL HSSINHVIEN & CSDL QLHANGHOA",
          parts: [
            {
              id: "db4-part-1-1-a",
              label: "a",
              title: "CSDL HSSINHVIEN (Quản lý kết quả học tập)",
              content: [
                {
                  type: "paragraph",
                  text: "Lược đồ CSDL <code>HSSINHVIEN</code> gồm 4 quan hệ chính:"
                },
                {
                  type: "list",
                  items: [
                    "<strong>SINH_VIEN</strong>(<code>maSV</code>, <code>hotenSV</code>, <code>nam</code>, <code>ngSinh</code>, <code>maKhoa</code>): <code>maSV</code> là mã số sinh viên (Khóa chính); <code>nam</code>: true nếu là nam, false nếu là nữ; <code>maKhoa</code>: mã số khoa mà sinh viên đang theo học.",
                    "<strong>KHOA</strong>(<code>makhoa</code>, <code>tenkhoa</code>, <code>soCB</code>): <code>makhoa</code> là khóa chính; <code>soCB</code>: tổng số cán bộ giảng dạy của khoa.",
                    "<strong>MON_HOC</strong>(<code>maMH</code>, <code>tenMH</code>, <code>soTietLT</code>, <code>soTietTH</code>): <code>maMH</code> là khóa chính; <code>soTietLT</code>, <code>soTietTH</code>: tổng số tiết lý thuyết và thực hành của môn học.",
                    "<strong>KET_QUA</strong>(<code>maSV</code>, <code>maMH</code>, <code>lanThi</code>, <code>diem</code>): Khóa chính phức hợp là (<code>maSV</code>, <code>maMH</code>, <code>lanThi</code>); <code>diem</code>: điểm số thi của sinh viên."
                  ]
                }
              ]
            },
            {
              id: "db4-part-1-1-b",
              label: "b",
              title: "CSDL QLHANGHOA (Quản lý đơn hàng và hóa đơn giao hàng)",
              content: [
                {
                  type: "paragraph",
                  text: "Lược đồ CSDL <code>QLHANGHOA</code> phục vụ quản lý hoạt động kinh doanh thương mại với 6 quan hệ:"
                },
                {
                  type: "list",
                  items: [
                    "<strong>KHACH</strong>(<code>maKH</code>, <code>tenKH</code>, <code>diachiKH</code>, <code>dienThoai</code>, <code>congNo</code>): <code>congNo</code> là công nợ với khách hàng — nếu <code>congNo &gt; 0</code>: khách hàng nợ công ty, ngược lại <code>congNo &lt; 0</code>: công ty nợ khách hàng.",
                    "<strong>HANG_HOA</strong>(<code>maHH</code>, <code>tenHH</code>, <code>dvTinh</code>): Danh mục mặt hàng kinh doanh.",
                    "<strong>DAT_HANG</strong>(<code>soDH</code>, <code>maHH</code>, <code>soLuongDat</code>, <code>ngayDH</code>, <code>maKH</code>): <code>soDH</code>: mã số đơn đặt hàng — một đơn đặt hàng có thể gồm nhiều mặt hàng; <code>maHH</code>: mã số hàng hóa cần đặt mua.",
                    "<strong>HOA_DON</strong>(<code>soHD</code>, <code>ngayHD</code>, <code>soDH</code>, <code>trigiaHD</code>, <code>ngayXuat</code>): <code>soHD</code>: mã số hóa đơn bán hàng cho khách; <code>ngayHD</code>: ngày phát hành hóa đơn; <code>soDH</code>: hóa đơn được lập theo yêu cầu của đơn đặt hàng <code>soDH</code>. <em>Quy tắc vàng:</em> <strong>Mỗi đơn đặt hàng chỉ được giải quyết trong một hóa đơn duy nhất</strong>. Do điều kiện khách quan, công ty có thể không giao đầy đủ các mặt hàng/số lượng theo đơn đặt hàng, nhưng <strong>không bao giờ giao vượt</strong> yêu cầu.",
                    "<strong>CTIET_HD</strong>(<code>soHD</code>, <code>maHH</code>, <code>giaBan</code>, <code>soLuongBan</code>): Chi tiết những mặt hàng bán được cho khách hàng theo yêu cầu đơn đặt hàng.",
                    "<strong>PHIEU_THU</strong>(<code>soPT</code>, <code>ngayPT</code>, <code>maKH</code>, <code>soTien</code>): <code>soPT</code>: mã số phiếu thu tiền — khách hàng có thể trả tiền không theo hóa đơn nào, hoặc trả trước khi nhận hàng (tiền đặt cọc); <code>ngayPT</code>: ngày phát hành phiếu thu; <code>soTien</code>: số tiền thu được từ khách hàng."
                  ]
                },
                {
                  type: "component",
                  component: "DatabaseCh4SampleDatabasesStudio"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION II: KHÁI NIỆM RÀNG BUỘC TOÀN VẸN (RBTV)
       ============================================================ */
    {
      id: "db4-section-2",
      roman: "II",
      title: "Khái niệm Ràng buộc toàn vẹn (RBTV)",
      subsections: [
        {
          id: "db4-sub-2-1",
          number: "1",
          title: "Bản chất điều kiện bất biến & Quy tắc quản lý",
          parts: [
            {
              id: "db4-part-2-1-a",
              label: "a",
              title: "Định nghĩa Ràng buộc toàn vẹn & Ví dụ CSDL HSSINHVIEN",
              content: [
                {
                  type: "paragraph",
                  text: "Trong một CSDL luôn tồn tại <strong>rất nhiều mối liên hệ</strong> và <strong>ràng buộc qua lại</strong> giữa các thuộc tính, các bộ với nhau. Các mối liên hệ, ràng buộc này là những <strong>điều kiện bất biến</strong> mà tất cả các bộ của các quan hệ (QH) liên quan trong CSDL đều phải thỏa mãn ở <strong>bất kỳ thời điểm nào</strong>."
                },
                {
                  type: "definition",
                  term: "Ràng buộc toàn vẹn (RBTV)",
                  definition: "RBTV là những điều kiện bất biến mà các đối tượng của CSDL phải thỏa mãn ở bất kỳ thời điểm nào. Trong thực tế, RBTV chính là các quy tắc quản lý (business rules) được áp đặt lên các đối tượng của thế giới thực."
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Ví dụ 1 — Ba ràng buộc tiêu biểu trên CSDL HSSINHVIEN",
                  text: "• C1: Mỗi sinh viên có một mã số riêng biệt, không trùng với bất kỳ sinh viên nào khác (Ràng buộc khóa chính).\n• C2: Mỗi sinh viên chỉ được thi tối đa hai lần cho một môn học (Ràng buộc miền giá trị lanThi <= 2).\n• C3: Mỗi sinh viên phải thuộc về một khoa nào đó (Ràng buộc khóa ngoại tham chiếu đến bảng KHOA)."
                }
              ]
            },
            {
              id: "db4-part-2-1-b",
              label: "b",
              title: "Thời điểm kiểm tra RBTV & Bộ chuyển đổi quy tắc",
              content: [
                {
                  type: "paragraph",
                  text: "Hệ quản trị CSDL quan hệ kích hoạt cơ chế kiểm tra các RBTV tại các thời điểm:"
                },
                {
                  type: "list",
                  items: [
                    "<strong>Ngay khi thực hiện một thao tác cập nhật CSDL:</strong> Thao tác <em>Thêm (INSERT)</em>, <em>Sửa (UPDATE)</em>, hoặc <em>Xóa (DELETE)</em>.",
                    "<strong>Định kỳ hoặc đột xuất:</strong> Khi chạy các tác vụ bảo trì hoặc kiểm tra toàn vẹn định kỳ của hệ thống."
                  ]
                },
                {
                  type: "component",
                  component: "BusinessRuleToConstraintLab"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION III: CÁC YẾU TỐ CỦA MỘT RÀNG BUỘC TOÀN VẸN
       ============================================================ */
    {
      id: "db4-section-3",
      roman: "III",
      title: "Các yếu tố của một Ràng buộc toàn vẹn",
      subsections: [
        {
          id: "db4-sub-3-1",
          number: "1",
          title: "Ba yếu tố cấu thành: Điều kiện, Bối cảnh & Tầm ảnh hưởng",
          parts: [
            {
              id: "db4-part-3-1-a",
              label: "a",
              title: "Đặc tả chi tiết 3 Yếu tố cốt lõi",
              content: [
                {
                  type: "paragraph",
                  text: "Một Ràng buộc toàn vẹn (RBTV) được xác định hoàn chỉnh bởi <strong>ba yếu tố</strong>:"
                },
                {
                  type: "list",
                  items: [
                    "<strong>a) Điều kiện (Condition):</strong> Nội dung quy tắc logic mà dữ liệu phải thỏa mãn. Có thể được biểu diễn bằng: <em>Ngôn ngữ tự nhiên</em>, <em>Thuật giải</em>, <em>Ngôn ngữ đại số tập hợp / đại số quan hệ</em>, <em>Phụ thuộc hàm</em>, hoặc <em>Logic vị từ bậc nhất</em>.",
                    "<strong>b) Bối cảnh (Context):</strong> Là những <strong>quan hệ (bảng) mà RBTV đó có hiệu lực</strong>. Có thể là <em>một quan hệ</em> hoặc <em>nhiều quan hệ</em>. <em>Ví dụ 2:</em> Bối cảnh của RBTV C1 là quan hệ <code>SinhVien</code>.",
                    "<strong>c) Tầm ảnh hưởng (Affected operations):</strong> Nhằm <strong>xác định thời điểm cần kiểm tra</strong> các RBTV đó. Được thể hiện qua <strong>Bảng Tầm Ảnh Hưởng</strong> với 3 thao tác: <code>Thêm</code>, <code>Sửa</code>, <code>Xóa</code>."
                  ]
                },
                {
                  type: "table",
                  headers: ["Ký Hiệu", "Ý Nghĩa Trong Bảng Tầm Ảnh Hưởng", "Hành Động Của Hệ Quản Trị CSDL"],
                  rows: [
                    ["<code>+</code>", "Cần phải kiểm tra RBTV", "Kích hoạt mã kiểm tra/Trigger để chặn nếu vi phạm."],
                    ["<code>-</code>", "Không cần kiểm tra RBTV", "Bỏ qua kiểm tra, cho phép thực thi ngay (an toàn tuyệt đối, tiết kiệm I/O)."],
                    ["<code>-(*)</code> hoặc <code>+(*)</code>", "Kiểm tra có điều kiện", "Chỉ kiểm tra khi thuộc tính được sửa có liên quan trực tiếp đến biểu thức của RBTV."]
                  ]
                },
                {
                  type: "component",
                  component: "IntegrityConstraintThreeFactorsDeconstructor"
                },
                {
                  type: "component",
                  component: "ImpactMatrixInteractiveSimulator"
                },
                {
                  type: "component",
                  component: "IntegrityFormalExpressionStudio"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION IV: PHÂN LOẠI RÀNG BUỘC TOÀN VẸN
       ============================================================ */
    {
      id: "db4-section-4",
      roman: "IV",
      title: "Phân loại Ràng buộc toàn vẹn",
      subsections: [
        {
          id: "db4-sub-4-1",
          number: "1",
          title: "Phân loại theo Bối cảnh: Một Quan Hệ vs Nhiều Quan Hệ",
          parts: [
            {
              id: "db4-part-4-1-a",
              label: "a",
              title: "Hai nhánh phân loại theo bối cảnh & Bài kiểm tra Quiz 1",
              content: [
                {
                  type: "paragraph",
                  text: "RBTV được chia làm <strong>hai loại chính</strong> theo bối cảnh áp dụng:"
                },
                {
                  type: "list",
                  items: [
                    "<strong>1. RBTV có bối cảnh là một quan hệ (Single-relation constraints):</strong> Ràng buộc miền giá trị, ràng buộc thực thể (Khóa chính), ràng buộc liên thuộc tính trong dòng, ràng buộc liên bộ trong cùng một bảng.",
                    "<strong>2. RBTV có bối cảnh là nhiều quan hệ (Multi-relation constraints):</strong> Ràng buộc khóa ngoại (tham chiếu liên bảng), ràng buộc toàn vẹn ngữ nghĩa đa quan hệ (quy tắc công nợ, giao hàng không vượt quá đặt hàng...)."
                  ]
                },
                {
                  type: "component",
                  component: "ConstraintTaxonomyInspector"
                },
                {
                  type: "component",
                  component: "DatabaseCh4Part1ConceptQuiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION V: RBTV CÓ BỐI CẢNH LÀ MỘT QUAN HỆ
       ============================================================ */
    {
      id: "db4-section-5",
      roman: "V",
      title: "RBTV có bối cảnh là MỘT quan hệ",
      subsections: [
        {
          id: "db4-sub-5-1",
          number: "1",
          title: "Miền giá trị, Liên thuộc tính & Liên bộ",
          parts: [
            {
              id: "db4-part-5-1-a",
              label: "a",
              title: "Đặc tả chi tiết 3 loại RBTV trên một bảng",
              content: [
                {
                  type: "list",
                  items: [
                    "<strong>5.1. RBTV về miền giá trị (Domain constraint):</strong> Liên quan đến miền giá trị (domain) của các thuộc tính. <em>Ví dụ 4:</em> Trong LĐQH <code>KetQua</code>, miền giá trị <code>Diem</code> = 0..10 với độ chính xác đơn 0.5 điểm: <code>((t.Diem * 4) mod 2 = 0, ∀t ∈ KetQua)</code>. <em>Lưu ý bẫy:</em> Trong quan hệ <code>NHANVIEN(maNV, tenNV, luong, tamUng, conLai)</code>, điều kiện <code>tamUng ≤ luong</code> là <strong>VÍ DỤ SAI</strong> của miền giá trị, thực chất đây là RBTV liên thuộc tính!",
                    "<strong>5.2. RBTV liên thuộc tính (Inter-attribute constraint):</strong> Thể hiện mối liên hệ giữa các thuộc tính trong <strong>cùng một</strong> lược đồ quan hệ. <em>Ví dụ 5:</em> Trong <code>HOADON</code>: &ldquo;Hàng hóa chỉ được xuất kho sau khi đã lập hóa đơn&rdquo;: <code>∀hd ∈ HOADON: hd.ngayHD ≤ hd.ngayXuat</code>. <em>Lưu ý thiết kế:</em> Nếu thuộc tính A tính được từ các thuộc tính khác trong cùng bảng, ta có thể loại bỏ A khỏi bảng để tránh dư thừa.",
                    "<strong>5.3. RBTV liên bộ (Inter-tuple constraint):</strong> Là sự ràng buộc giữa các bộ (tuples) bên trong <strong>một quan hệ</strong>. Thường được biểu diễn bằng phụ thuộc hàm. <em>Ví dụ 6:</em> Ràng buộc C1 (mã số sinh viên không trùng) thuộc loại RBTV liên bộ."
                  ]
                },
                {
                  type: "component",
                  component: "SingleRelationConstraintStudio"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION VI: RBTV CÓ BỐI CẢNH LÀ NHIỀU QUAN HỆ
       ============================================================ */
    {
      id: "db4-section-6",
      roman: "VI",
      title: "RBTV có bối cảnh là NHIỀU quan hệ",
      subsections: [
        {
          id: "db4-sub-6-1",
          number: "1",
          title: "Phụ thuộc tồn tại (Khóa ngoại) & 2 Dấu hiệu nhận biết",
          parts: [
            {
              id: "db4-part-6-1-a",
              label: "a",
              title: "Khái niệm phụ thuộc tồn tại & 2 Dấu hiệu toán học",
              content: [
                {
                  type: "paragraph",
                  text: "RBTV về phụ thuộc tồn tại (Existence dependency) còn gọi là <strong>ràng buộc khóa ngoại (foreign key)</strong> — rất phổ biến trong CSDL quan hệ."
                },
                {
                  type: "list",
                  items: [
                    "<strong>Ví dụ 7:</strong> Trong <code>KetQua</code>: Sự tồn tại của kết quả thi phụ thuộc vào sự tồn tại của sinh viên trong <code>SinhVien</code>. Trong <code>SinhVien</code>: Sự tồn tại của sinh viên phụ thuộc vào sự tồn tại của khoa trong <code>Khoa</code>.",
                    "<strong>Dấu hiệu (1):</strong> Nếu <code>K1 ⊆ K2</code> (khóa chính K1 của R1 là tập con của khóa chính phức hợp K2 của R2) &rarr; Có phụ thuộc tồn tại của R2 vào R1.",
                    "<strong>Dấu hiệu (2):</strong> Nếu <code>K1 ⊆ R2</code> (khóa K1 xuất hiện như một thuộc tính thông thường trong R2) &rarr; Có phụ thuộc tồn tại của R2 vào R1; K1 gọi là khóa ngoại của R2."
                  ]
                },
                {
                  type: "component",
                  component: "ExistenceDependencyInspector"
                }
              ]
            }
          ]
        },
        {
          id: "db4-sub-6-2",
          number: "2",
          title: "Liên bộ liên bảng, Liên thuộc tính liên bảng & Thuộc tính tổng hợp",
          parts: [
            {
              id: "db4-part-6-2-a",
              label: "a",
              title: "Các dạng RBTV đa quan hệ nâng cao",
              content: [
                {
                  type: "list",
                  items: [
                    "<strong>6.2. RBTV liên bộ, liên quan hệ:</strong> Có tác dụng đối với từng nhóm các bộ của nhiều quan hệ khác nhau (thường là 2 bảng). <em>Ví dụ 9:</em> &ldquo;Mỗi hóa đơn bán hàng phải có ít nhất một mặt hàng&rdquo; (liên quan <code>HOA_DON</code> và <code>CTIET_HD</code>).",
                    "<strong>6.3. RBTV liên thuộc tính, liên quan hệ:</strong> Là mối liên hệ giữa các thuộc tính trong nhiều LĐQH khác nhau. <em>Ví dụ 10:</em> &ldquo;Ngày làm hóa đơn in trên hóa đơn phải sau ngày đặt hàng in trên đơn đặt hàng&rdquo; (<code>HOA_DON.ngayHD ≥ DAT_HANG.ngayDH</code>).",
                    "<strong>6.4. RBTV về thuộc tính tổng hợp (Aggregate/derived attribute):</strong> Xác định khi một thuộc tính A của một bảng được <strong>tính toán giá trị</strong> từ các thuộc tính của <strong>các bảng khác</strong>. <em>Ví dụ 11:</em> Trong CSDL QLHANGHOA: &ldquo;Số tiền công nợ của khách hàng A sẽ bằng hiệu số giữa tổng trị giá các hóa đơn bán cho khách A và tổng số tiền thu của khách đó&rdquo;."
                  ]
                },
                {
                  type: "component",
                  component: "MultiRelationConstraintExplorer"
                }
              ]
            }
          ]
        },
        {
          id: "db4-sub-6-3",
          number: "3",
          title: "RBTV do Chu trình trong đồ thị lược đồ CSDL",
          parts: [
            {
              id: "db4-part-6-3-a",
              label: "a",
              title: "Chu trình đồ thị CSDL & 3 Chính sách giao hàng",
              content: [
                {
                  type: "paragraph",
                  text: "Một lược đồ CSDL có thể được biểu diễn bằng một đồ thị vô hướng với 2 loại nút: <strong>Nút thuộc tính</strong> và <strong>Nút lược đồ quan hệ</strong>. Một cung vô hướng nối nút thuộc tính A với nút LĐQH R có nghĩa là A ∈ R."
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Ví dụ 12 — Chu trình 3 bảng DAT_HANG - HOA_DON - CTIET_HD",
                  text: "Khi lược đồ CSDL có chu trình, sẽ phải có một RBTV thỏa 1 trong 3 trường hợp chính sách sau:\n(1) Một hóa đơn thực hiện cho một đơn đặt hàng chỉ giao những mặt hàng khách đã yêu cầu và PHẢI GIAO ĐẦY ĐỦ TẤT CẢ mặt hàng có trong đơn đặt hàng.\n(2) Một hóa đơn thực hiện cho một đơn đặt hàng chỉ giao những mặt hàng khách đã yêu cầu nhưng CÓ THỂ KHÔNG GIAO ĐẦY ĐỦ tất cả mặt hàng trong đơn đặt hàng (Chính sách chuẩn CSDL QLHANGHOA: không bao giờ giao vượt yêu cầu đặt).\n(3) Một hóa đơn thực hiện cho một đơn đặt hàng CÓ THỂ GỒM TÙY Ý các mặt hàng, dù có hay không có trong đơn đặt hàng của khách."
                },
                {
                  type: "component",
                  component: "SchemaCycleGraphVisualizer"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION VII: SƠ ĐỒ TỔNG HỢP PHÂN LOẠI RBTV
       ============================================================ */
    {
      id: "db4-section-7",
      roman: "VII",
      title: "Sơ đồ tổng hợp phân loại RBTV",
      subsections: [
        {
          id: "db4-sub-7-1",
          number: "1",
          title: "Bản đồ phân loại toàn diện 8 loại Ràng buộc toàn vẹn",
          parts: [
            {
              id: "db4-part-7-1-a",
              label: "a",
              title: "Cây phả hệ 8 loại RBTV & Bài kiểm tra Quiz 2",
              content: [
                {
                  type: "paragraph",
                  text: "Toàn bộ 8 loại RBTV trong cơ sở dữ liệu quan hệ được cấu trúc phân cấp:"
                },
                {
                  type: "list",
                  items: [
                    "<strong>Bối cảnh MỘT quan hệ:</strong> 1) RBTV về miền giá trị; 2) RBTV liên thuộc tính; 3) RBTV liên bộ.",
                    "<strong>Bối cảnh NHIỀU quan hệ:</strong> 4) RBTV về phụ thuộc tồn tại (Khóa ngoại); 5) RBTV liên bộ, liên quan hệ; 6) RBTV liên thuộc tính, liên quan hệ; 7) RBTV về thuộc tính tổng hợp; 8) RBTV do chu trình trong đồ thị lược đồ CSDL."
                  ]
                },
                {
                  type: "component",
                  component: "IntegrityTaxonomyMasterMap"
                },
                {
                  type: "component",
                  component: "DatabaseCh4Part2ConceptQuiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION VIII: BÀI TẬP TỔNG HỢP CHƯƠNG IV
       ============================================================ */
    {
      id: "db4-section-8",
      roman: "VIII",
      title: "Bài tập tổng hợp Chương IV",
      subsections: [
        {
          id: "db4-sub-8-1",
          number: "1",
          title: "Đồ án CSDL Nghiên cứu Đề tài Sinh viên (SINHVIEN, DETAI, SV_DT)",
          parts: [
            {
              id: "db4-part-8-1-a",
              label: "a",
              title: "Đặc tả yêu cầu bài toán & Studio Lời giải hoàn chỉnh",
              content: [
                {
                  type: "paragraph",
                  text: "Cho các lược đồ quan hệ sau:"
                },
                {
                  type: "list",
                  items: [
                    "<strong>SINHVIEN</strong>(<code>MaSV</code>, <code>Hoten</code>, <code>Namsinh</code>, <code>QQ</code>, <code>Hocluc</code>): Mỗi sinh viên có: mã số duy nhất, họ tên, năm sinh, quê quán, học lực.",
                    "<strong>DETAI</strong>(<code>MaDT</code>, <code>TenDT</code>, <code>Chunhiem</code>, <code>Kinhphi</code>): Mỗi đề tài có: mã số duy nhất, tên đề tài, chủ nhiệm đề tài, kinh phí thực hiện đề tài (đơn vị tính: triệu đồng).",
                    "<strong>SV_DT</strong>(<code>MaSV</code>, <code>MaDT</code>, <code>NoiAD</code>, <code>KQ</code>): Mỗi sinh viên có thể thực hiện một hoặc nhiều đề tài: mã số sinh viên, mã đề tài, nơi áp dụng, kết quả thực hiện đề tài."
                  ]
                },
                {
                  type: "callout",
                  variant: "important",
                  title: "Yêu cầu bài tập",
                  text: "Xác định tất cả các ràng buộc toàn vẹn có thể có trong lược đồ CSDL trên (Liệt kê đầy đủ theo từng phân loại: Miền giá trị, Khóa chính, Khóa ngoại, Liên bộ, Liên thuộc tính, Bảng tầm ảnh hưởng)."
                },
                {
                  type: "component",
                  component: "StudentResearchProjectWorkbench"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION IX: TỔNG KẾT TOÀN DIỆN & GRAND MASTER EXAM CHƯƠNG IV
       ============================================================ */
    {
      id: "db4-section-9",
      roman: "IX",
      title: "Tổng kết toàn diện & Grand Master Exam Chương IV",
      subsections: [
        {
          id: "db4-sub-9-1",
          number: "1",
          title: "Grand Summary Dashboard: 8 Trọng Điểm RBTV",
          parts: [
            {
              id: "db4-part-9-1-a",
              label: "a",
              title: "Bản đồ tri thức toàn bộ Chương IV",
              content: [
                {
                  type: "component",
                  component: "DatabaseChapter4SummaryDashboard"
                }
              ]
            }
          ]
        },
        {
          id: "db4-sub-9-2",
          number: "2",
          title: "Grand Master Exam: Đề Kiểm Tra Toàn Diện Chương IV",
          parts: [
            {
              id: "db4-part-9-2-a",
              label: "a",
              title: "Đề thi trắc nghiệm 10 câu Grand Master Exam",
              content: [
                {
                  type: "component",
                  component: "DatabaseChapter4MasterExamQuiz"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
