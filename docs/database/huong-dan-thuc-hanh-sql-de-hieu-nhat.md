# CẨM NANG THỰC HÀNH SQL DỄ HIỂU NHẤT TỪ A ĐẾN Z
## LÀM CHỦ DDL, DML, DQL QUA CSDL MẪU CÔNG TY & CÁC ẨN DỤ ĐỜI THỰC

> **Môn học**: Hệ Cơ sở Dữ liệu (Database Systems)  
> **Chủ đề**: Thực hành Cú pháp SQL — Từ Định nghĩa Bảng đến Truy vấn Nâng cao  
> **Phương pháp tiếp cận**: Ẩn dụ đời thường $\longrightarrow$ Cú pháp khung $\longrightarrow$ Ví dụ cụ thể dễ nhớ nhất.

---

## PHẦN I. CƠ SỞ DỮ LIỆU MẪU XUYÊN SUỐT: QUẢN LÝ CÔNG TY

Để dễ hình dung và thực hành nhất, toàn bộ các câu lệnh trong cẩm nang này sẽ áp dụng trên **2 bảng đời thực siêu gần gũi**:
1. **`PHONGBAN` (Bảng Cha)**: Lưu thông tin các phòng ban trong công ty.
2. **`NHANVIEN` (Bảng Con)**: Lưu thông tin nhân viên và phòng ban mà họ trực thuộc.

```text
┌─────────────────────────────────┐                 ┌────────────────────────────────────────────────────────┐
│     PHONGBAN (Bảng Cha)         │                 │                 NHANVIEN (Bảng Con)                    │
├──────────────┬──────────────────┤                 ├──────────┬──────────────────┬─────────────┬────────────┤
│ MaPB (PK)    │ TenPB            │ ◄───[1 : N]───  │ MaNV (PK)│ HoTen            │ Luong       │ MaPB (FK)  │
├──────────────┼──────────────────┤                 ├──────────┼──────────────────┼─────────────┼────────────┤
│ 1            │ Phòng Kỹ Thuật   │                 │ 100      │ Nguyễn Văn An    │ 15.000.000  │ 1          │
│ 2            │ Phòng Kinh Doanh │                 │ 101      │ Trần Thị Bình    │ 7.000.000   │ 1          │
│ 3            │ Phòng Nhân Sự    │                 │ 102      │ Lê Văn Cường     │ 22.000.000  │ 2          │
└──────────────┴──────────────────┘                 │ 103      │ Nguyễn Thị Duyên │ 12.000.000  │ 2          │
                                                    │ 104      │ Phạm Hoàng Em    │ 6.000.000   │ 1          │
                                                    └──────────┴──────────────────┴─────────────┴────────────┘
```

---

## PHẦN II. MỤC III: CÂU LỆNH ĐỊNH NGHĨA & QUẢN TRỊ BẢNG (DDL & DML CƠ BẢN)

---

### 1. Tạo Database, Bảng & Các Thuộc Tính Cột

#### a. `IDENTITY(1, 1)` — Máy bấm số tự động tăng
- **Ý nghĩa đời thực**: Giống như máy rút số thứ tự ở phòng khám hay ngân hàng. Bạn không cần tự gõ số, máy sẽ tự nhảy: người đầu tiên số `1`, người thứ hai số `2`, người thứ ba số `3`...
- **Cú pháp**: `TenCot INT IDENTITY(số_bắt_đầu, bước_nhảy)`
- **Lưu ý thi**: Khi `INSERT` dữ liệu, **tuyệt đối không được điền giá trị cho cột IDENTITY**, hệ thống sẽ tự sinh tự động!

#### b. `NULL` vs `NOT NULL` — Bắt buộc nhập hay Tùy chọn
- `NOT NULL`: Bắt buộc phải có dữ liệu, **cấm để trống** (ví dụ: Họ tên, Mã số).
- `NULL`: Cho phép để trống nếu chưa có thông tin (ví dụ: Email phụ, Ghi chú).

#### c. `DEFAULT` — Giá trị điền sẵn khi người dùng "lười"
- **Ý nghĩa đời thực**: Khi làm thủ tục hành chính, nếu bạn không tick chọn quốc tịch thì giấy tờ tự động đóng dấu sẵn là "Việt Nam".
- **Cú pháp**: `TenCot KieuDuLieu DEFAULT giá_trị_mặc_định`

---

#### 💡 CODE MẪU TẠO CSDL VÀ 2 BẢNG HOÀN CHỈNH:

```sql
-- 1. Tạo Database mới và chuyển vào sử dụng
CREATE DATABASE CongTyDB;
GO
USE CongTyDB;
GO

-- 2. Tạo Bảng PHONGBAN (Tạo bảng Cha trước)
CREATE TABLE PHONGBAN (
    MaPB INT IDENTITY(1, 1) PRIMARY KEY, -- Mã tự nhảy: 1, 2, 3...
    TenPB NVARCHAR(50) NOT NULL          -- Bắt buộc phải có tên phòng
);

-- 3. Tạo Bảng NHANVIEN (Tạo bảng Con sau)
CREATE TABLE NHANVIEN (
    MaNV INT IDENTITY(100, 1) PRIMARY KEY,  -- Tự nhảy từ 100, 101, 102...
    HoTen NVARCHAR(50) NOT NULL,            -- Cấm để trống họ tên
    NgayVaoLam DATETIME DEFAULT GETDATE(),  -- Không nhập thì lấy ngày giờ hiện tại
    Luong DECIMAL(10, 2) DEFAULT 5000000,   -- Không nhập lương thì mặc định là 5 triệu
    Email VARCHAR(100) NULL,                -- Được phép để trống
    MaPB INT NOT NULL,                      -- Thuộc phòng ban nào
    
    -- Khai báo Khóa ngoại liên kết tới bảng PHONGBAN
    CONSTRAINT FK_NV_PB FOREIGN KEY (MaPB) REFERENCES PHONGBAN(MaPB)
);
```

---

### 2. Thao Tác Cập Nhật Dữ Liệu (`INSERT`, `UPDATE`, `DELETE`)

#### a. `INSERT INTO` — Thêm dòng mới
```sql
-- Thêm dữ liệu vào bảng PHONGBAN (Không nhập cột MaPB vì là IDENTITY)
INSERT INTO PHONGBAN (TenPB) VALUES (N'Phòng Kỹ Thuật');
INSERT INTO PHONGBAN (TenPB) VALUES (N'Phòng Kinh Doanh');
INSERT INTO PHONGBAN (TenPB) VALUES (N'Phòng Nhân Sự');

-- Thêm dữ liệu vào bảng NHANVIEN
INSERT INTO NHANVIEN (HoTen, Luong, MaPB) 
VALUES (N'Nguyễn Văn An', 15000000, 1);

INSERT INTO NHANVIEN (HoTen, Luong, MaPB) 
VALUES (N'Trần Thị Bình', 7000000, 1);
```

#### b. `UPDATE` — Sửa dữ liệu đã có
```sql
-- Tăng lương cho nhân viên có MaNV = 100 lên 18 triệu
UPDATE NHANVIEN
SET Luong = 18000000
WHERE MaNV = 100;
```
> ⚠️ **CẢNH BÁO PHÒNG THI**: Luôn luôn kiểm tra xem đã có mệnh đề `WHERE` chưa! Nếu viết `UPDATE NHANVIEN SET Luong = 18000000` mà quên `WHERE` $\longrightarrow$ **Toàn bộ nhân viên công ty đều bị sửa thành 18 triệu!**

#### c. `DELETE` — Xóa dòng dữ liệu
```sql
-- Xóa nhân viên có MaNV = 101
DELETE FROM NHANVIEN
WHERE MaNV = 101;
```
> ⚠️ **CẢNH BÁO PHÒNG THI**: Quên `WHERE` trong câu lệnh `DELETE` là **xóa sạch sành sanh mọi dòng trong bảng**!

---

### 3. Quy Tắc Vàng: Thứ Tự Khóa Ngoại (Quy tắc Cha - Con)

> 🎯 **Nguyên lý đời thực bất biến**: *"Sinh Cha trước - Sinh Con sau; Xóa Con trước - Xóa Cha sau."*

```text
       KHI THÊM / TẠO                            KHI XÓA / HỦY
   ┌────────────────────┐                    ┌────────────────────┐
   │ 1. Tạo bảng CHA    │                    │ 1. Xóa dữ liệu CON │
   │    (PHONGBAN)      │                    │    (NHANVIEN)      │
   └─────────┬──────────┘                    └─────────┬──────────┘
             │                                         │
             ▼                                         ▼
   ┌────────────────────┐                    ┌────────────────────┐
   │ 2. Tạo bảng CON    │                    │ 2. Xóa dữ liệu CHA │
   │    (NHANVIEN)      │                    │    (PHONGBAN)      │
   └────────────────────┘                    └────────────────────┘
```

- **Khi INSERT**: Không thể gán một nhân viên vào `MaPB = 99` nếu trong bảng `PHONGBAN` chưa tồn tại phòng số `99`!
- **Khi DELETE**: Không thể xóa Phòng Kỹ Thuật (`MaPB = 1`) nếu trong bảng `NHANVIEN` vẫn còn người thuộc phòng số `1`. Hệ thống sẽ chặn lại ngay để bảo vệ tính toàn vẹn tham chiếu.

---

### 4. `ALTER TABLE` (Cải tạo bảng) vs `DROP TABLE` (Xóa sổ bảng)

- **`ALTER TABLE` (Sửa nhà)**: Giữ nguyên nhà cũ, chỉ đục tường thêm phòng hoặc sơn lại.
  ```sql
  -- Thêm cột SoDienThoai vào bảng NHANVIEN
  ALTER TABLE NHANVIEN 
  ADD SoDienThoai VARCHAR(15);

  -- Đổi kiểu dữ liệu của cột SoDienThoai lên thành VARCHAR(20)
  ALTER TABLE NHANVIEN 
  ALTER COLUMN SoDienThoai VARCHAR(20);

  -- Xóa bỏ cột SoDienThoai khỏi bảng
  ALTER TABLE NHANVIEN 
  DROP COLUMN SoDienThoai;
  ```
- **`DROP TABLE` (San bằng ngôi nhà)**: Xóa sổ vĩnh viễn cả bảng, mất sạch cả cấu trúc lẫn dữ liệu.
  ```sql
  DROP TABLE NHANVIEN; -- Bắt buộc xóa bảng con trước
  DROP TABLE PHONGBAN; -- Rồi mới được xóa bảng cha sau
  ```

---

## PHẦN III. MỤC IV: CÂU LỆNH THAO TÁC & TRUY VẤN DỮ LIỆU (DQL - `SELECT`)

---

### 1. Truy Vấn Cơ Bản: `SELECT`, `WHERE`, `LIKE`, `BETWEEN` & `ORDER BY`

#### a. `SELECT ... FROM` — Lấy cột nào từ bảng nào
```sql
-- Lấy tất cả mọi cột trong bảng nhân viên
SELECT * FROM NHANVIEN;

-- Chỉ lấy cột Họ tên và Lương
SELECT HoTen, Luong FROM NHANVIEN;
```

#### b. `WHERE` — Bộ lọc điều kiện dòng thô
```sql
-- Tìm những nhân viên có lương lớn hơn 10 triệu
SELECT HoTen, Luong 
FROM NHANVIEN 
WHERE Luong > 10000000;
```

#### c. `BETWEEN ... AND ...` — Lọc giá trị trong một khoảng
- Lấy những người có lương từ 7 triệu đến 15 triệu (bao gồm cả mốc 7 triệu và 15 triệu):
```sql
SELECT HoTen, Luong 
FROM NHANVIEN 
WHERE Luong BETWEEN 7000000 AND 15000000;
```

#### d. `LIKE` — Tìm kiếm gần đúng với `%` và `_`
- **`%`**: Đại diện cho một chuỗi ký tự bất kỳ (bao nhiêu ký tự cũng được, kể cả 0 ký tự).
- **`_`**: Đại diện cho **đúng 1 ký tự** duy nhất.

```sql
-- Tìm nhân viên có họ là "Nguyễn" (Bắt đầu bằng chữ Nguyễn, phía sau là gì cũng được)
SELECT HoTen FROM NHANVIEN WHERE HoTen LIKE N'Nguyễn%';

-- Tìm nhân viên có chữ "n" ở vị trí cuối cùng
SELECT HoTen FROM NHANVIEN WHERE HoTen LIKE N'%n';

-- Tìm nhân viên có ký tự thứ hai là chữ "r" (ví dụ: Trần, Trịnh)
SELECT HoTen FROM NHANVIEN WHERE HoTen LIKE N'_r%';
```

#### e. `ORDER BY` — Sắp xếp thứ tự danh sách kết quả
- **`ASC`**: Tăng dần từ nhỏ đến lớn (Mặc định).
- **`DESC`**: Giảm dần từ lớn đến nhỏ.

```sql
-- Sắp xếp danh sách nhân viên theo Lương giảm dần (ai lương cao nhất đứng đầu bảng)
SELECT HoTen, Luong 
FROM NHANVIEN 
ORDER BY Luong DESC;
```

---

### 2. Nâng Cao: `INNER JOIN`, `GROUP BY`, `HAVING` & Truy Vấn Lồng (Subquery)

---

#### a. `INNER JOIN` — Ghép bảng để hiển thị thông tin đầy đủ
- **Vấn đề**: Bảng `NHANVIEN` chỉ lưu con số khô khan `MaPB = 1`. Bạn muốn in ra báo cáo có chữ *"Phòng Kỹ Thuật"* thì phải kết nối sang bảng `PHONGBAN`.
- **Cú pháp chuẩn**:
  ```sql
  SELECT 
      NV.MaNV,
      NV.HoTen, 
      NV.Luong, 
      PB.TenPB
  FROM NHANVIEN NV
  INNER JOIN PHONGBAN PB ON NV.MaPB = PB.MaPB;
  ```
> 🔍 **Kết quả**: Hệ thống sẽ so khớp: dòng nào có `NV.MaPB = PB.MaPB` thì ghép lại thành một dòng dài hoàn chỉnh!

---

#### b. `GROUP BY` & 5 Hàm Gom Nhóm Cốt Lõi
- **Ý nghĩa đời thực**: Gom các nhân viên thuộc cùng một phòng ban vào một nhóm để tính toán chung:
  - `COUNT(MaNV)`: Đếm số lượng người trong phòng.
  - `SUM(Luong)`: Tính tổng quỹ lương của phòng đó.
  - `AVG(Luong)`: Tính lương bình quân của phòng.
  - `MAX(Luong)` / `MIN(Luong)`: Lương cao nhất / thấp nhất phòng.

```sql
-- Thống kê từng phòng ban có bao nhiêu nhân viên và tổng lương phải trả:
SELECT 
    MaPB, 
    COUNT(MaNV) AS SoNhanVien,
    SUM(Luong) AS TongQuyLuong,
    AVG(Luong) AS LuongTrungBinh
FROM NHANVIEN
GROUP BY MaPB;
```

> ⚠️ **QUY TẮC THI SỐNG CÒN CỦA GROUP BY**:
> Bất kỳ cột nào xuất hiện ở mệnh đề `SELECT` mà **không nằm bên trong** các hàm gom nhóm (`COUNT/SUM/AVG/MIN/MAX`) thì **BẮT BUỘC PHẢI XUẤT HIỆN TRONG MỆNH ĐỀ `GROUP BY`**!
> *(Nếu viết `SELECT MaPB, HoTen, COUNT(MaNV)... GROUP BY MaPB` sẽ bị lỗi biên dịch ngay vì `HoTen` không biết chọn ai trong nhóm để hiển thị!)*

---

#### c. `HAVING` — Bộ lọc trên nhóm (Phân biệt sống còn với `WHERE`)

```text
┌────────────────────────────────────────────────────────────────────────┐
│                   SO SÁNH: WHERE vs HAVING                              │
├───────────────────────────────────┬────────────────────────────────────┤
│   MỆNH ĐỀ WHERE                   │   MỆNH ĐỀ HAVING                   │
├───────────────────────────────────┼────────────────────────────────────┤
│ • Lọc TỪNG DÒNG THÔ               │ • Lọc TRÊN TỪNG NHÓM               │
│ • Chạy TRƯỚC khi gom nhóm         │ • Chạy SAU khi gom nhóm            │
│ • CẤM TUYỆT ĐỐI dùng hàm gom nhóm │ • CHUYÊN DÙNG với các hàm gom nhóm │
│   (Không được viết WHERE SUM > 0) │   (Ví dụ: HAVING COUNT(*) >= 2)    │
│ • Ẩn dụ: Bác bảo vệ cổng soi từng │ • Ẩn dụ: Ban giám khảo chấm điểm   │
│   học sinh trước khi vào trường.  │   cả lớp sau khi thi đua xong.     │
└───────────────────────────────────┴────────────────────────────────────┘
```

#### 💡 Ví dụ câu lệnh kết hợp cả `WHERE` và `HAVING`:
*"Tìm những phòng ban có từ 2 nhân viên trở lên, nhưng chỉ tính những nhân viên có lương từ 10 triệu trở lên":*

```sql
SELECT 
    MaPB, 
    COUNT(MaNV) AS SoNhanVienLuongCao
FROM NHANVIEN
WHERE Luong >= 10000000              -- Bước 1: Lọc bỏ ngay những ai lương < 10tr trước
GROUP BY MaPB                       -- Bước 2: Gom những người còn lại theo từng phòng
HAVING COUNT(MaNV) >= 2;            -- Bước 3: Chỉ giữ lại phòng nào gom xong còn >= 2 người
```

---

#### d. Truy Vấn Lồng (Subquery) — Câu lệnh SELECT nằm trong SELECT
- **Bài toán đời thực**: *"Tìm danh sách những nhân viên có mức lương cao hơn mức lương trung bình của toàn công ty?"*
- **Tư duy**: Bạn không thể gõ cứng một con số cụ thể vì lương trung bình có thể thay đổi bất kỳ lúc nào. Bạn cần một câu lệnh con tính toán mức lương trung bình trước, rồi câu lệnh bên ngoài sẽ lấy kết quả đó để so sánh!

```sql
SELECT MaNV, HoTen, Luong
FROM NHANVIEN
WHERE Luong > (
    -- SUBQUERY: Câu truy vấn con chạy trước, trả về 1 con số duy nhất
    SELECT AVG(Luong) FROM NHANVIEN
);
```

---

## PHẦN IV. BẢNG TRA CỨU CỨU SINH BỎ TÚI TRƯỚC GIỜ THI

| Tình huống / Từ khóa | Cách viết chuẩn & Mẹo nhớ | Lỗi sai / Bẫy thi thường gặp |
| :--- | :--- | :--- |
| **`IDENTITY(1,1)`** | Máy tự bấm số tăng dần: $1, 2, 3...$ | Tự gõ giá trị vào cột này khi `INSERT` $\longrightarrow$ **Báo lỗi ngay**. |
| **`DEFAULT`** | Điền sẵn giá trị nếu người dùng bỏ trống | Không cần mất công gõ lại các giá trị lặp lại. |
| **`UPDATE / DELETE`** | **BẮT BUỘC PHẢI CÓ `WHERE`** | Quên `WHERE` là ghi đè hoặc xóa sạch toàn bộ bảng! |
| **`ALTER TABLE`** | Sửa đổi cấu trúc cột (`ADD`, `DROP COLUMN`) | Không nhầm với `UPDATE` (sửa nội dung dòng). |
| **`DROP TABLE`** | Xóa sổ vĩnh viễn cả cái bảng | Phải xóa bảng Con (chứa FK) trước, bảng Cha sau. |
| **`BETWEEN A AND B`** | Lấy trong khoảng: $\ge A$ và $\le B$ | Luôn lấy cả 2 mốc biên $A$ và $B$. |
| **`LIKE '%An'`** | Tìm kiếm ký tự: `%` (chuỗi tùy ý), `_` (1 ký tự) | Nhớ dùng tiền tố $N$ nếu tìm kiếm tiếng Việt có dấu: `N'%An%'`. |
| **`WHERE` vs `HAVING`** | `WHERE` lọc dòng thô; `HAVING` lọc nhóm | **Cấm tuyệt đối** viết hàm gom nhóm `COUNT/SUM` trong `WHERE`. |
| **Cột trong `GROUP BY`** | Mọi cột ở `SELECT` không có hàm $\implies$ **Phải nằm trong `GROUP BY`** | Viết thiếu cột trong `GROUP BY` $\longrightarrow$ **Lỗi biên dịch ngay**. |
| **`INNER JOIN`** | Ghép 2 bảng theo khóa chung | Bắt buộc có từ khóa `ON BảngA.Khoa = BảngB.Khoa`. |
| **`Subquery`** | Câu `SELECT` con đặt trong dấu ngoặc đơn `(...)` | Thường dùng để tính trước một giá trị so sánh động (`AVG`, `MAX`). |
