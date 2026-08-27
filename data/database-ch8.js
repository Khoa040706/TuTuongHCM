/* ============================================================
   DỮ LIỆU HỌC TẬP CHUẨN MỰC: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG VIII: THỦ TỤC LƯU TRỮ (STORED PROCEDURE) & BẪY SỰ KIỆN (TRIGGER)
   HOÀN TẤT TRỌN VẸN 100%: MỤC 0 ĐẾN MỤC VIII
   ============================================================ */

export const databaseCh8Data = {
  id: "database-ch8",
  title: "Chương VIII: Thủ tục lưu trữ (Stored Procedure) & Bẫy sự kiện (Trigger)",
  subtitle: "Lập trình Cơ sở dữ liệu nâng cao trên nền T-SQL: Khám phá điểm chung & khác biệt giữa SP và Trigger, cơ chế mã hóa WITH ENCRYPTION, thủ tục hệ thống sp_helptext, kỹ thuật truyền tham số IN/OUT, lệnh RETURN và quản trị giao dịch.",
  sections: [
    /* ============================================================
       SECTION 0: TỔNG QUAN & CYBER ENGINE HERO BANNER
       ============================================================ */
    {
      id: "db8-section-0",
      roman: "★",
      title: "TỔNG QUAN STORED PROCEDURE & TRIGGER CYBER-ENGINE",
      subsections: [
        {
          id: "db8-sub-0",
          number: "0",
          title: "Interactive Stored Procedure & Trigger Cyber-Engine",
          parts: [
            {
              id: "db8-part-hero",
              label: "INTERACTIVE HERO BANNER",
              title: "Kiến Trúc Lập Trình Cơ Sở Dữ Liệu Phía Server: Thủ Tục & Bẫy Sự Kiện",
              content: [
                {
                  type: "component",
                  component: "StoredProcedureTriggerCyberHeroBanner"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION I: ĐIỂM CHUNG & SỰ KHÁC BIỆT CỐT LÕI GIỮA STORED PROCEDURE VÀ TRIGGER
       ============================================================ */
    {
      id: "db8-section-1",
      roman: "I",
      title: "Điểm chung & Sự khác biệt cốt lõi giữa Stored Procedure và Trigger",
      subsections: [
        {
          id: "db8-sub-1-1",
          number: "1",
          title: "Điểm chung giữa Stored Procedure và Trigger",
          parts: [
            {
              id: "db8-part-1-1-a",
              label: "a",
              title: "Các điểm tương đồng về kiến trúc T-SQL & Cơ chế bảo mật",
              content: [
                {
                  type: "paragraph",
                  text: "Cả **Stored Procedure (SP)** và **Trigger** đều là các đối tượng lập trình phía Server (Database Server Objects) quan trọng bậc nhất trong RDBMS, có các đặc điểm chung sau:"
                },
                {
                  type: "list",
                  items: [
                    "<strong>Cấu trúc lệnh T-SQL:</strong> Đều là tập hợp các câu lệnh viết bằng T-SQL, được lưu trữ và quản lý sẵn trực tiếp bên trong cơ sở dữ liệu.",
                    "<strong>Hỗ trợ mã hóa nội dung (WITH ENCRYPTION):</strong> Hỗ trợ mã hóa toàn bộ văn bản mã nguồn bằng tùy chọn <code>WITH ENCRYPTION</code> khi tạo (<code>CREATE</code>) hoặc sửa (<code>ALTER</code>), nhằm ngăn chặn người khác xem mã nguồn bên trong.",
                    "<strong>Tra cứu cú pháp/nội dung qua thủ tục hệ thống:</strong> Có thể xem lại văn bản mã nguồn bằng lệnh hệ thống <code>sp_helptext &lt;tên đối tượng&gt;</code>. <em>(Nếu đối tượng đã tạo với <code>WITH ENCRYPTION</code> thì lệnh <code>sp_helptext</code> sẽ bị chặn và không thể hiển thị được nội dung)</em>.",
                    "<strong>Cơ chế Quản trị DDL:</strong> Đều có thể sửa đổi cấu trúc bằng lệnh <code>ALTER</code> và xóa khỏi CSDL bằng lệnh <code>DROP</code> mà không cần phải viết lại từ đầu."
                  ]
                },
                {
                  type: "code",
                  language: "sql",
                  title: "Ví dụ: Tra cứu nội dung đối tượng bằng sp_helptext",
                  code: `-- Tra cứu mã nguồn của đối tượng ds_sv
EXEC sp_helptext 'ds_sv';

-- Nếu đối tượng đã được tạo WITH ENCRYPTION, SQL Server sẽ báo:
-- Msg 15153, Level 16, State 1: The text for object 'ds_sv' is encrypted.`
                },
                {
                  type: "component",
                  component: "SpTriggerCommonAndEncryptionStudio"
                }
              ]
            }
          ]
        },
        {
          id: "db8-sub-1-2",
          number: "2",
          title: "Sự khác biệt cốt lõi: Gọi chủ động (EXEC) vs Kích hoạt tự động (Auto-fired)",
          parts: [
            {
              id: "db8-part-1-2-a",
              label: "a",
              title: "Cơ chế kích hoạt và ngữ cảnh thực thi",
              content: [
                {
                  type: "callout",
                  variant: "important",
                  title: "SỰ KHÁC BIỆT CỐT LÕI GIỮA SP VÀ TRIGGER",
                  text: "• Stored Procedure (SP): Phải được người dùng hoặc ứng dụng client gọi thực thi CHỦ ĐỘNG thông qua lệnh EXEC / EXECUTE.\n• Trigger: Hoàn toàn TỰ ĐỘNG KÍCH HOẠT (auto-fired) ngầm trên Server ngay khi phát sinh các sự kiện thao tác dữ liệu (INSERT, UPDATE, DELETE) trên bảng liên quan. Trigger KHÔNG THỂ gọi trực tiếp bằng lệnh EXEC!"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION II: PHẦN A — STORED PROCEDURE (THỦ TỤC LƯU TRỮ)
       ============================================================ */
    {
      id: "db8-section-2",
      roman: "II",
      title: "Phần A — Stored Procedure (Thủ tục lưu trữ)",
      subsections: [
        {
          id: "db8-sub-2-1",
          number: "1",
          title: "Khái niệm, Phạm vi (Scope) & 3 Loại thủ tục",
          parts: [
            {
              id: "db8-part-2-1-a",
              label: "a",
              title: "Khái niệm và 3 nhóm Stored Procedure trong RDBMS",
              content: [
                {
                  type: "definition",
                  term: "Stored Procedure (SP — Thủ tục lưu trữ)",
                  definition: "Là một tập hợp các dòng lệnh, biến (variables) và cấu trúc điều khiển (control structures) viết bằng T-SQL, được biên dịch sẵn và lưu trữ trực tiếp bên trong CSDL để tái sử dụng nhiều lần và gia tăng hiệu năng thực thi."
                },
                {
                  type: "paragraph",
                  text: "<strong>Phạm vi hoạt động (Scope):</strong> Stored Procedure hoạt động cục bộ bên trong CSDL chứa nó, nhưng có thể được gọi thực thi từ các ngôn ngữ lập trình bên ngoài (ứng dụng client: C#, Java, Python, Web...)."
                },
                {
                  type: "list",
                  items: [
                    "<strong>1. Thủ tục hệ thống (System):</strong> Do hệ quản trị CSDL SQL Server cung cấp sẵn, thường bắt đầu bằng tiền tố <code>sp_</code> (ví dụ: <code>sp_rename</code>, <code>sp_bindrule</code>, <code>sp_helptext</code>...).",
                    "<strong>2. Thủ tục mở rộng (Extended):</strong> Được xây dựng từ các thư viện liên kết động <code>DLL</code> bên ngoài, cho phép tương tác trực tiếp với hệ điều hành (ví dụ: <code>xp_cmdshell</code>).",
                    "<strong>3. Thủ tục do người dùng định nghĩa (User-defined):</strong> Do lập trình viên hoặc DBA tự viết theo yêu cầu nghiệp vụ của hệ thống."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "db8-sub-2-2",
          number: "2",
          title: "Tạo mới & Thực thi Stored Procedure",
          parts: [
            {
              id: "db8-part-2-2-a",
              label: "a",
              title: "Cú pháp tạo mới, thực thi và ví dụ thực tế",
              content: [
                {
                  type: "code",
                  language: "sql",
                  title: "Cú pháp tạo mới và thực thi Stored Procedure",
                  code: `-- 1. CÚ PHÁP TẠO MỚI:
CREATE PROC/PROCEDURE <tên thủ tục> [Các tham số]
AS
[DECLARE <biến cục bộ>]
<Các câu lệnh SQL>
GO

-- 2. CÚ PHÁP THỰC THI:
EXEC/EXECUTE <tên thủ tục> [tham số];`
                },
                {
                  type: "code",
                  language: "sql",
                  title: "Ví dụ: Tạo thủ tục ds_sv lấy danh sách sinh viên lớp 'CD10'",
                  code: `-- Tạo thủ tục ds_sv
CREATE PROCEDURE ds_sv
AS
BEGIN
    SELECT * FROM sinhvien WHERE malop = 'CD10';
END;
GO

-- Thực thi thủ tục:
EXEC ds_sv;`
                }
              ]
            }
          ]
        },
        {
          id: "db8-sub-2-3",
          number: "3",
          title: "Thủ tục có tham số: Tham số Đầu vào (INPUT) & Đầu ra (OUTPUT)",
          parts: [
            {
              id: "db8-part-2-3-a",
              label: "a",
              title: "Tham số đầu vào (Input Parameter)",
              content: [
                {
                  type: "paragraph",
                  text: "Tham số đầu vào cho phép truyền dữ liệu từ môi trường gọi vào bên trong thủ tục để thực thi các câu lệnh theo điều kiện động."
                },
                {
                  type: "code",
                  language: "sql",
                  title: "Ví dụ: Thủ tục kq_sv xem điểm của sinh viên theo mã",
                  code: `-- Tạo thủ tục kq_sv nhận tham số đầu vào @masv
CREATE PROCEDURE kq_sv @masv varchar(4)
AS
BEGIN
    SELECT masv, mamh, diem
    FROM diem
    WHERE masv = @masv;
END;
GO

-- Thực thi: Truyền giá trị '01' cho tham số @masv
EXEC kq_sv '01';`
                }
              ]
            },
            {
              id: "db8-part-2-3-b",
              label: "b",
              title: "Tham số đầu ra (OUTPUT Parameter)",
              content: [
                {
                  type: "paragraph",
                  text: "Dùng từ khóa `OUTPUT` để trả kết quả tính toán hoặc dữ liệu từ bên trong thủ tục ra môi trường gọi bên ngoài."
                },
                {
                  type: "code",
                  language: "sql",
                  title: "Ví dụ: Thủ tục xem_diem với tham số OUTPUT",
                  code: `-- 1. ĐỊNH NGHĨA THỦ TỤC CÓ THAM SỐ OUTPUT:
CREATE PROCEDURE xem_diem 
    @masv varchar(10),
    @mamh varchar(10),
    @diem int OUTPUT
AS
BEGIN
    SELECT @diem = diem
    FROM ketqua
    WHERE masv = @masv AND mamh = @mamh;
END;
GO

-- 2. GỌI THỦ TỤC CÓ THAM SỐ OUTPUT:
DECLARE @diem_sv int;
EXEC xem_diem '01', 'CSDL', @diem_sv OUTPUT;
PRINT @diem_sv;`
                },
                {
                  type: "callout",
                  variant: "important",
                  title: "LƯU Ý QUAN TRỌNG KHI SỬ DỤNG OUTPUT PARAMETER",
                  text: "• Bắt buộc phải DECLARE biến hứng trước để nhận giá trị trả về.\n• Cả tham số trong định nghĩa thủ tục lẫn biến nhận trong lệnh EXEC đều PHẢI KÈM TỪ KHÓA OUTPUT. Nếu quên từ khóa OUTPUT ở lệnh EXEC, biến nhận sẽ không nhận được dữ liệu (mang giá trị NULL)."
                },
                {
                  type: "component",
                  component: "StoredProcedureParameterFlowStudio"
                }
              ]
            }
          ]
        },
        {
          id: "db8-sub-2-4",
          number: "4",
          title: "Lệnh RETURN: Thoát sớm & Trả về mã trạng thái số nguyên",
          parts: [
            {
              id: "db8-part-2-4-a",
              label: "a",
              title: "2 Trường hợp sử dụng lệnh RETURN trong Stored Procedure",
              content: [
                {
                  type: "paragraph",
                  text: "Lệnh `RETURN` được sử dụng trong 2 trường hợp cụ thể:"
                },
                {
                  type: "list",
                  items: [
                    "<strong>a) Thoát khỏi thủ tục khi điều kiện không hợp lệ (Early Exit):</strong> Dừng ngay lập tức việc thực thi các câu lệnh tiếp theo trong thủ tục.",
                    "<strong>b) Trả về giá trị (mã trạng thái số nguyên integer) cho chương trình gọi:</strong> Để kiểm tra trạng thái thực thi thành công hay thất bại (ví dụ: 1 = Đạt, 0 = Không đạt)."
                  ]
                },
                {
                  type: "code",
                  language: "sql",
                  title: "Trường hợp a: Thoát khỏi thủ tục khi điều kiện không hợp lệ",
                  code: `CREATE PROC xem_diem @masv varchar(4) = null
AS
BEGIN
    IF (@masv IS NULL)
    BEGIN
        PRINT 'Nhap ma sinh vien';
        RETURN; -- Thoát ngay lập tức, không chạy các lệnh bên dưới
    END
    ELSE
    BEGIN
        SELECT diem FROM diem WHERE masv = @masv;
    END;
END;`
                },
                {
                  type: "code",
                  language: "sql",
                  title: "Trường hợp b: Trả về giá trị (mã trạng thái) cho chương trình gọi",
                  code: `-- 1. Định nghĩa thủ tục kiểm tra điểm:
CREATE PROC kiemtra_diem @masv varchar(10)
AS
BEGIN
    IF (SELECT diem FROM diem WHERE masv = @masv) >= 5
        RETURN 1; -- Trả về mã 1: Điểm trên trung bình
    ELSE
        RETURN 0; -- Trả về mã 0: Điểm dưới trung bình
END;
GO

-- 2. Cách gọi và hứng mã trạng thái bằng biến @trave:
DECLARE @trave int;
EXEC @trave = kiemtra_diem '01';

IF (@trave = 1)
    PRINT 'Diem tren trung binh';
ELSE
    PRINT 'Diem duoi trung binh';`
                },
                {
                  type: "component",
                  component: "StoredProcedureReturnSimulatorStudio"
                }
              ]
            }
          ]
        },
        {
          id: "db8-sub-2-5",
          number: "5",
          title: "Quản lý riêng của Stored Procedure: DROP & ALTER",
          parts: [
            {
              id: "db8-part-2-5-a",
              label: "a",
              title: "Cú pháp xóa (DROP) và sửa đổi (ALTER)",
              content: [
                {
                  type: "code",
                  language: "sql",
                  title: "Cú pháp xóa và sửa đổi Stored Procedure",
                  code: `-- 1. XÓA THỦ TỤC (DROP):
DROP PROC/PROCEDURE <tên thủ tục>;

-- 2. SỬA ĐỔI THỦ TỤC (ALTER):
ALTER PROC/PROCEDURE <tên thủ tục> [Các tham số]
AS
BEGIN
    [DECLARE <biến cục bộ>]
    <Các câu lệnh SQL>
END;`
                },
                {
                  type: "callout",
                  variant: "tip",
                  title: "MẸO THỰC HÀNH T-SQL CHUYÊN NGHIỆP",
                  text: "Nên sử dụng ALTER PROCEDURE thay vì DROP rồi CREATE lại. Vì lệnh ALTER sẽ GIỮ NGUYÊN các quyền phân quyền bảo mật (Permissions) đã cấp cho người dùng trên thủ tục đó, trong khi DROP sẽ xóa vĩnh viễn toàn bộ phân quyền!"
                }
              ]
            }
          ]
        },
        {
          id: "db8-sub-2-6",
          number: "6",
          title: "Bài kiểm tra Checkpoint 4 câu củng cố kiến thức Mục I & II",
          parts: [
            {
              id: "db8-part-2-6-a",
              label: "a",
              title: "Interactive Checkpoint Quiz",
              content: [
                {
                  type: "component",
                  component: "DatabaseChapter8Part1Quiz"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION III: PHẦN B — TRIGGER (BẪY SỰ KIỆN)
       ============================================================ */
    {
      id: "db8-section-3",
      roman: "III",
      title: "Phần B — Trigger (Bẫy sự kiện)",
      subsections: [
        {
          id: "db8-sub-3-1",
          number: "1",
          title: "Khái niệm & 5 Kiểu Trigger",
          parts: [
            {
              id: "db8-part-3-1-a",
              label: "a",
              title: "Bản chất của Trigger & 5 Kiểu phân loại chính",
              content: [
                {
                  type: "definition",
                  term: "Trigger (Bẫy sự kiện)",
                  definition: "Là cấu trúc lệnh T-SQL đặc biệt, tự động thực thi (auto-fired) mỗi khi dữ liệu trên bảng liên quan bị cập nhật (INSERT, UPDATE, DELETE). Không cần và không thể gọi bằng lệnh EXEC."
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "KHUYẾN CÁO VÀNG KHI THIẾT KẾ TRIGGER",
                  text: "Chỉ nên dùng Trigger cho các hành động nghiệp vụ phức tạp. Tránh lạm dụng cho xử lý đơn giản vì Trigger chạy ngầm, khó kiểm soát, dễ ảnh hưởng hiệu năng (Deadlock/Latency) và làm giảm độ rõ ràng của hệ thống."
                },
                {
                  type: "list",
                  items: [
                    "<strong>1. Insert:</strong> Kích hoạt tự động khi phát sinh thao tác <code>INSERT</code> dữ liệu vào bảng.",
                    "<strong>2. Delete:</strong> Kích hoạt tự động khi phát sinh thao tác <code>DELETE</code> dữ liệu khỏi bảng.",
                    "<strong>3. Update:</strong> Kích hoạt tự động khi phát sinh thao tác <code>UPDATE</code> dữ liệu trên bảng.",
                    "<strong>4. Instead of:</strong> Thay thế hoàn toàn hành động DML gốc (thao tác gốc không được thực hiện trên bảng/view).",
                    "<strong>5. After:</strong> Xảy ra sau khi hành động DML gốc đã hoàn tất (mặc định tương đương từ khóa <code>FOR</code>)."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "db8-sub-3-2",
          number: "2",
          title: "Cú pháp Tạo mới Trigger",
          parts: [
            {
              id: "db8-part-3-2-a",
              label: "a",
              title: "Cú pháp tổng quát định nghĩa Trigger trong T-SQL",
              content: [
                {
                  type: "code",
                  language: "sql",
                  title: "Cú pháp tổng quát tạo Trigger",
                  code: `CREATE TRIGGER <tên trigger> ON <tên bảng>
[WITH ENCRYPTION]
FOR | INSTEAD OF | AFTER <biến cố kích hoạt>
AS
<Các câu lệnh SQL>

-- Trong đó <biến cố kích hoạt> có thể là: insert, update, delete
-- Có thể kết hợp nhiều sự kiện phân cách bằng dấu phẩy: FOR insert, update, delete`
                }
              ]
            }
          ]
        },
        {
          id: "db8-sub-3-3",
          number: "3",
          title: "Hai Bảng ảo đặc biệt trong Trigger (INSERTED & DELETED)",
          parts: [
            {
              id: "db8-part-3-3-a",
              label: "a",
              title: "Cơ chế quản lý bộ nhớ RAM của bảng inserted và deleted",
              content: [
                {
                  type: "paragraph",
                  text: "Khi một Trigger được kích hoạt thực thi, SQL Server tự động tạo ra 2 bảng tạm ảo (logical tables) trong bộ nhớ RAM, có cấu trúc cột y hệt bảng gốc nhưng chỉ chứa các bản ghi bị tác động:"
                },
                {
                  type: "list",
                  items: [
                    "<strong>Bảng <code>inserted</code>:</strong> Chứa các bản ghi mới thêm vào (khi INSERT) hoặc chứa giá trị mới sau khi cập nhật (khi UPDATE).",
                    "<strong>Bảng <code>deleted</code>:</strong> Chứa các bản ghi vừa bị xóa (khi DELETE) hoặc chứa giá trị cũ trước khi cập nhật (khi UPDATE)."
                  ]
                },
                {
                  type: "component",
                  component: "TriggerInsertedDeletedLifecycleStudio"
                }
              ]
            }
          ]
        },
        {
          id: "db8-sub-3-4",
          number: "4",
          title: "Các ví dụ chuẩn mực theo từng loại Trigger",
          parts: [
            {
              id: "db8-part-3-4-a",
              label: "a",
              title: "4 Ví dụ kinh điển: INSERT, DELETE, UPDATE & Trigger đa hành động",
              content: [
                {
                  type: "code",
                  language: "sql",
                  title: "a) INSERT TRIGGER — Kiểm tra sĩ số lớp > 0",
                  code: `-- Kiểm tra sĩ số của lớp mới thêm vào: Nếu > 0 Commit tran, ngược lại Rollback tran
CREATE TRIGGER kiemtra_siso ON lop
FOR insert
AS
BEGIN
    IF (SELECT siso FROM inserted) > 0
        COMMIT TRAN;
    ELSE
    BEGIN
        PRINT N'Sĩ số của lớp phải > 0';
        ROLLBACK TRAN; -- Hủy bỏ thao tác chèn
    END;
END;`
                },
                {
                  type: "code",
                  language: "sql",
                  title: "b) DELETE TRIGGER — Lưu sinh viên bị xóa vào bảng lưu trữ",
                  code: `-- Tự động backup sinh viên bị xóa vào bảng sinhvien_xoa
CREATE TRIGGER xoa ON sinhvien
FOR delete
AS
BEGIN
    INSERT INTO sinhvien_xoa SELECT * FROM deleted;
END;`
                },
                {
                  type: "code",
                  language: "sql",
                  title: "c) UPDATE TRIGGER — Tự động cập nhật điểm trung bình",
                  code: `-- Tự động tính lại điểm trung bình trên bảng sinhvien khi sửa bảng diem
CREATE TRIGGER dtb ON diem
FOR update
AS
BEGIN
    UPDATE sinhvien
    SET dtb = (SELECT AVG(diem) FROM diem WHERE diem.masv = sinhvien.masv GROUP BY sinhvien.masv);
END;`
                },
                {
                  type: "code",
                  language: "sql",
                  title: "d) TRIGGER VỚI NHIỀU HÀNH ĐỘNG — Gộp insert, update, delete",
                  code: `-- Gộp cả 3 biến cố: insert, update, delete trên bảng diem
CREATE TRIGGER dtb1 ON diem
FOR insert, update, delete
AS
BEGIN
    UPDATE sinhvien
    SET dtb = (SELECT AVG(diem) FROM diem WHERE diem.masv = sinhvien.masv GROUP BY sinhvien.masv);
    SELECT * FROM sinhvien;
END;`
                },
                {
                  type: "component",
                  component: "MultiTriggerExecutionStudio"
                }
              ]
            }
          ]
        },
        {
          id: "db8-sub-3-5",
          number: "5",
          title: "Instead of vs After (For)",
          parts: [
            {
              id: "db8-part-3-5-a",
              label: "a",
              title: "So sánh cơ chế Đánh chặn trên View vs Thực thi sau",
              content: [
                {
                  type: "paragraph",
                  text: "Sự phân chia giữa `INSTEAD OF` và `AFTER` định hình cách SQL Server xử lý câu lệnh DML:"
                },
                {
                  type: "list",
                  items: [
                    "<strong>INSTEAD OF Trigger:</strong> Thay thế hoàn toàn thao tác DML gốc (thao tác gốc <em>không</em> thực hiện). <strong>Có thể thao tác trên VIEW</strong> (kể cả view phức tạp join nhiều bảng) — điều mà <code>for/after</code> không hỗ trợ tốt.",
                    "<strong>AFTER Trigger (mặc định tương đương FOR):</strong> Thực thi <strong>sau khi</strong> hành động gốc đã hoàn tất. Dùng phổ biến để kiểm tra ràng buộc nghiệp vụ, ghi log kiểm toán, đồng bộ dữ liệu."
                  ]
                },
                {
                  type: "component",
                  component: "InsteadOfVsAfterTriggerStudio"
                }
              ]
            }
          ]
        },
        {
          id: "db8-sub-3-6",
          number: "6",
          title: "Quản lý riêng của Trigger",
          parts: [
            {
              id: "db8-part-3-6-a",
              label: "a",
              title: "Xem nội dung, Xóa (DROP), Sửa (ALTER) & Tắt/Bật (DISABLE/ENABLE)",
              content: [
                {
                  type: "list",
                  items: [
                    "<strong>Xem nội dung:</strong> Dùng lệnh <code>EXEC sp_helptext &lt;tên trigger&gt;</code> hoặc trong SSMS (Chuột phải vào trigger ➔ <em>All tasks</em> ➔ <em>Manage trigger</em>).",
                    "<strong>Xóa trigger (DROP):</strong> <code>DROP TRIGGER &lt;danh sách các trigger&gt;</code> (có thể xóa nhiều trigger cùng lúc, phân cách bằng dấu phẩy).",
                    "<strong>Sửa nội dung (ALTER):</strong> <code>ALTER TRIGGER &lt;tên trigger&gt; ON &lt;tên bảng&gt; ...</code>",
                    "<strong>Tắt / Bật trigger (Đặc thù riêng của Trigger, SP không có):</strong><br />• <code>ALTER TABLE &lt;tên bảng&gt; DISABLE TRIGGER &lt;tên trigger&gt;;</code> (Tạm tắt, trigger vẫn tồn tại trong CSDL nhưng không tự động chạy).<br />• <code>ALTER TABLE &lt;tên bảng&gt; ENABLE TRIGGER &lt;tên trigger&gt;;</code> (Bật lại trigger đã bị tắt)."
                  ]
                },
                {
                  type: "component",
                  component: "TriggerManagementToggleStudio"
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================================================
       SECTION IV: TỔNG KẾT TOÀN DIỆN & ĐẠI MA TRẬN SO SÁNH SP VS TRIGGER
       ============================================================ */
    {
      id: "db8-section-4",
      roman: "IV",
      title: "Tổng kết toàn diện — So sánh Stored Procedure vs Trigger",
      subsections: [
        {
          id: "db8-sub-4-1",
          number: "1",
          title: "Đại ma trận đối chiếu 10 tiêu chí chuẩn xác 100%",
          parts: [
            {
              id: "db8-part-4-1-a",
              label: "a",
              title: "Master Comparison Grid",
              content: [
                {
                  type: "component",
                  component: "SpVsTriggerMasterMatrixStudio"
                }
              ]
            }
          ]
        },
        {
          id: "db8-sub-4-2",
          number: "2",
          title: "Grand Checkpoint Quiz 5 Câu Trắc Nghiệm Toàn Chương",
          parts: [
            {
              id: "db8-part-4-2-a",
              label: "a",
              title: "Bài thi đánh giá năng lực lập trình T-SQL & Trigger",
              content: [
                {
                  type: "component",
                  component: "DatabaseChapter8GrandMasterQuiz"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};



