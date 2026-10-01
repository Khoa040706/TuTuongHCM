# TỔNG HỢP 2 BỘ ĐỀ THI TRẮC NGHIỆM CHUẨN MỰC
# MÔN HỌC: HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
## CHƯƠNG II: MÔ HÌNH DỮ LIỆU QUAN HỆ (RELATIONAL DATA MODEL)

> **Thông tin giáo trình:** Giáo trình Hệ Cơ Sở Dữ Liệu — Chương II: Mô hình quan hệ.
> **Quy mô:** 2 Bộ đề thi độc lập (Đề 1 & Đề 2), 40 câu hỏi trắc nghiệm chuẩn / đề.
> **Tổng số câu hỏi:** 80 câu hỏi học thuật chất lượng cao (db-c2-d1-001 đến db-c2-d2-040).
> **Phân bổ độ khó chuẩn mực (30% - 40% - 30%):**
> - 🟢 **Dễ (Nhận biết):** 12 câu / đề (30%)
> - 🟡 **Trung bình (Thông hiểu):** 16 câu / đề (40%)
> - 🔴 **Khó / Bẫy (Vận dụng cao):** 12 câu / đề (30%) — 100% có bẫy tư duy, trickDetails ({ whyTrapped, trickWord, citation, tip }).
> **Cân bằng đáp án:** Chính xác 10 A, 10 B, 10 C, 10 D (25% mỗi đáp án) trên từng đề.
> **Kiểm định kỹ thuật:** Độ lệch chiều dài phương án $\Delta L = L_{max} - L_{min} \le 15$ ký tự trên toàn bộ 80 câu.
> **Đa dạng dạng câu hỏi:** Chọn câu SAI, Điền khuyết (...), Chùm mệnh đề I-II-III, Biểu thức tương đương, Tình huống CSDL thực tế, Khái niệm chuẩn.



## BỘ ĐỀ SỐ 1 (MÃ ĐỀ: db-c2-d1)

*Bộ đề kiểm tra toàn diện kiến thức Chương II: Lý thuyết tập hợp & Họ nhà Khóa, Đại số quan hệ cơ bản, Phép Join & Chia, Quy trình 7 bước chuyển đổi ERD.*

---

### 📌 CHUYÊN ĐỀ 1: ĐỊNH NGHĨA CƠ BẢN & HỌ NHÀ KHÓA (Câu 1 - 10)

#### Câu 1 (db-c2-d1-001) — [🟢 DỄ (NHẬN BIẾT)]

**Mô hình cơ sở dữ liệu quan hệ (Relational Data Model) được nhà khoa học E.F. Codd đề xuất vào năm nào?**

- **A.** Được đề xuất vào giai đoạn những năm 1970 - 1971
- **B.** Được đề xuất vào giai đoạn những năm 1950 - 1951
- **C.** Được đề xuất vào giai đoạn những năm 1995 - 1996
- **D.** Được đề xuất vào giai đoạn những năm 2010 - 2011

> **Đáp án đúng:** **A** — *Được đề xuất vào giai đoạn những năm 1970 - 1971*
>
> **Giải thích chi tiết:** Giáo trình khẳng định rõ: Mô hình CSDL quan hệ (gọi tắt là mô hình quan hệ) do E.F. Codd đề xuất vào năm 1970/1971.

---

#### Câu 2 (db-c2-d1-002) — [🟢 DỄ (NHẬN BIẾT)]

**Mô hình dữ liệu quan hệ hoàn chỉnh theo E.F. Codd bao gồm 3 thành phần cốt lõi nào dưới đây?**

- **A.** Màn hình hiển thị màu, Chuột máy tính quang và Bàn phím cơ
- **B.** Hệ điều hành máy chủ, Bộ nhớ đệm RAM và Ổ cứng lưu trữ SSD
- **C.** Hệ thống ký hiệu, Tập hợp phép toán và Ràng buộc toàn vẹn
- **D.** Cáp mạng Internet quang, Trình duyệt web và Cổng thanh toán

> **Đáp án đúng:** **C** — *Hệ thống ký hiệu, Tập hợp phép toán và Ràng buộc toàn vẹn*
>
> **Giải thích chi tiết:** Mô hình quan hệ gồm 3 thành phần: 1) Hệ thống các ký hiệu mô tả dữ liệu; 2) Tập hợp các phép toán trên dữ liệu; 3) Ràng buộc toàn vẹn quan hệ.

---

#### Câu 3 (db-c2-d1-003) — [🟢 DỄ (NHẬN BIẾT)]

**Quy tắc bắt buộc nào sau đây áp dụng cho các thuộc tính (Attributes) trong cùng một quan hệ?**

- **A.** Tất cả các thuộc tính bắt buộc phải có cùng một kiểu dữ liệu số nguyên
- **B.** Trong cùng một quan hệ, không được phép có hai thuộc tính cùng tên
- **C.** Mỗi quan hệ chỉ được phép chứa tối đa năm thuộc tính khác nhau mà thôi
- **D.** Tên của các thuộc tính bắt buộc phải viết hoàn toàn bằng tiếng Latinh cổ

> **Đáp án đúng:** **B** — *Trong cùng một quan hệ, không được phép có hai thuộc tính cùng tên*
>
> **Giải thích chi tiết:** Lưu ý quan trọng trong giáo trình: Được phân biệt bằng tên gọi. Trong cùng một quan hệ (đối tượng), không được có 2 thuộc tính cùng tên.

---

#### Câu 4 (db-c2-d1-004) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Siêu khóa (Super Key) của một lược đồ quan hệ R là tập hợp thuộc tính có tính chất xác định ...(1)... trong mỗi thể hiện của R, và tập U chứa tất cả thuộc tính luôn là một ...(2)... của R."**

- **A.** mọi bảng liên quan / thuộc tính
- **B.** nhiều bộ trùng nhau / khóa ngoại
- **C.** giá trị rỗng bất kỳ / khóa chính
- **D.** duy nhất một bộ / siêu khóa

> **Đáp án đúng:** **D** — *duy nhất một bộ / siêu khóa*
>
> **Giải thích chi tiết:** Siêu khóa là tập hợp thuộc tính xác định duy nhất một bộ trong mỗi thể hiện. Tập U gồm tất cả các thuộc tính của quan hệ luôn là một siêu khóa.

---

#### Câu 5 (db-c2-d1-005) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Nhận định nào sau đây là ĐÚNG NHẤT khi phân biệt giữa Siêu khóa (Super Key) và Khóa tối thiểu (Key)?**

- **A.** Siêu khóa luôn có số lượng thuộc tính ít hơn số lượng thuộc tính của khóa
- **B.** Khóa tối thiểu là siêu khóa mà mọi tập con thực sự của nó không là siêu khóa
- **C.** Một quan hệ chỉ có tối đa một siêu khóa nhưng có thể có rất nhiều khóa
- **D.** Khóa tối thiểu bắt buộc phải chứa toàn bộ tất cả các thuộc tính của bảng

> **Đáp án đúng:** **B** — *Khóa tối thiểu là siêu khóa mà mọi tập con thực sự của nó không là siêu khóa*
>
> **Giải thích chi tiết:** Khóa của LĐQH là một siêu khóa sao cho mọi tập con thực sự của nó không là siêu khóa (tức là siêu khóa tối thiểu hay tối tiểu).

---

#### Câu 6 (db-c2-d1-006) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Phát biểu nào sau đây là SAI khi nói về các lưu ý theo lý thuyết tập hợp của một quan hệ (Relation)?**

- **A.** Thứ tự sắp xếp của các dòng hoặc các cột trong quan hệ là vô cùng quan trọng
- **B.** Thêm vào một dòng hoàn toàn giống với dòng đã có thì quan hệ không thay đổi
- **C.** Một quan hệ r trên lược đồ R là một tập con của tích Descartes các miền giá trị
- **D.** Mỗi dòng trong bảng quan hệ chứa thông tin về một đối tượng, gọi là một bộ

> **Đáp án đúng:** **A** — *Thứ tự sắp xếp của các dòng hoặc các cột trong quan hệ là vô cùng quan trọng*
>
> **Giải thích chi tiết:** Khẳng định SAI là phương án A, vì theo lý thuyết tập hợp: Thứ tự của các dòng (cột) KHÔNG quan trọng.

---

#### Câu 7 (db-c2-d1-007) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Thuộc tính khóa (Prime Attribute) trong lược đồ quan hệ được định nghĩa chính xác là gì?**

- **A.** Là thuộc tính chỉ xuất hiện duy nhất ở các bảng phụ của hệ thống
- **B.** Là thuộc tính bắt buộc phải có kiểu dữ liệu là chuỗi ký tự tự do
- **C.** Là thuộc tính không bao giờ được phép xuất hiện trong câu truy vấn
- **D.** Là thuộc tính có tham gia vào ít nhất một khóa bất kỳ của quan hệ

> **Đáp án đúng:** **D** — *Là thuộc tính có tham gia vào ít nhất một khóa bất kỳ của quan hệ*
>
> **Giải thích chi tiết:** Giáo trình định nghĩa: Thuộc tính khóa (Prime Attribute) là thuộc tính có tham gia vào một khóa bất kỳ (khóa dự tuyển hay khóa chính).

---

#### Câu 8 (db-c2-d1-008) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho các mệnh đề sau về Lược đồ CSDL và Thể hiện CSDL:
(I) Lược đồ CSDL là toàn bộ bản mô tả cấu trúc của CSDL.
(II) Toàn bộ dữ liệu lưu trữ tại một thời điểm nhất định là một thể hiện của CSDL.
(III) Nhiều thể hiện của CSDL có thể cùng tương ứng với một lược đồ CSDL duy nhất.
Số lượng mệnh đề ĐÚNG là:**

- **A.** Chỉ có 2 mệnh đề đúng là mệnh đề số (I) và số (II)
- **B.** Chỉ có duy nhất 1 mệnh đề đúng là mệnh đề số (I)
- **C.** Cả 3 mệnh đề (I), (II) và (III) đều hoàn toàn chính xác
- **D.** Không có mệnh đề nào đúng trong cả ba mệnh đề trên

> **Đáp án đúng:** **C** — *Cả 3 mệnh đề (I), (II) và (III) đều hoàn toàn chính xác*
>
> **Giải thích chi tiết:** Cả 3 mệnh đề đều đúng chuẩn giáo trình: Lược đồ mô tả cấu trúc; Thể hiện là dữ liệu tại một thời điểm; Cùng một lược đồ có thể có nhiều thể hiện khác nhau qua thời gian.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm lẫn giữa Lược đồ (tĩnh) và Thể hiện (động thay đổi theo thời gian).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy phân biệt Schema (Lược đồ) và Instance (Thể hiện) qua chùm mệnh đề`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục I.5*
> - 💡 **Mẹo hóa giải:** Lược đồ = Khung nhà (Cố định); Thể hiện = Đồ đạc trong nhà tại thời điểm t (Thay đổi liên tục).

---

#### Câu 9 (db-c2-d1-009) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho quan hệ r gồm 5 thuộc tính U = {A, B, C, D, E}. Biết K = {A, B} là một khóa của r. Tập thuộc tính nào sau đây CHẮC CHẮN là một siêu khóa của r?**

- **A.** Tập thuộc tính {A, B, C} vì nó là tập cha chứa khóa {A, B}
- **B.** Tập thuộc tính {B, C, D} vì nó chứa tới ba thuộc tính khác
- **C.** Tập thuộc tính {A} vì nó là thuộc tính đứng đầu trong bảng
- **D.** Tập thuộc tính {C, D, E} vì nó tập hợp các thuộc tính phía sau

> **Đáp án đúng:** **A** — *Tập thuộc tính {A, B, C} vì nó là tập cha chứa khóa {A, B}*
>
> **Giải thích chi tiết:** Theo tính chất của siêu khóa: Mọi tập con của U chứa một khóa (hoặc chứa một siêu khóa) đều là một siêu khóa. Vì {A, B} là khóa nên mọi tập chứa {A, B} như {A, B, C} đều là siêu khóa.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người chọn {A} vì nghĩ rút gọn khóa, hoặc chọn {B,C,D} vì có nhiều thuộc tính hơn.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy tính chất tập cha của siêu khóa (Super Key expansion property)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục I.4.a*
> - 💡 **Mẹo hóa giải:** Khóa K ⊆ SK ⊆ U ➔ Cứ tập nào CHỨA TRỌN VẸN khóa K thì tập đó CHẮC CHẮN là Siêu khóa.

---

#### Câu 10 (db-c2-d1-010) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Khi cài đặt cấu trúc lưu trữ của quan hệ NHANVIEN ở Mức vật lý bằng ngôn ngữ C, thành phần nào dưới đây thể hiện mối liên kết giữa các bản ghi của tệp?**

- **A.** Một mảng số nguyên một chiều gồm một triệu phần tử lưu số thứ tự
- **B.** Một con trỏ kiểu cấu trúc struct NHANVIEN *next trỏ tới bản ghi kế tiếp
- **C.** Một chuỗi ký tự cố định chứa họ tên của người quản trị máy chủ CSDL
- **D.** Một biến logic boolean chỉ nhận giá trị đúng hoặc sai trong hàm main

> **Đáp án đúng:** **B** — *Một con trỏ kiểu cấu trúc struct NHANVIEN *next trỏ tới bản ghi kế tiếp*
>
> **Giải thích chi tiết:** Giáo trình đưa ra đoạn mã C minh họa mức vật lý: `struct NHANVIEN *next; // con trỏ đến bản ghi tiếp theo của tệp NHANVIEN` để tổ chức danh sách liên kết các bản ghi.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh ít chú ý ví dụ code C ở mức vật lý trong giáo trình nên dễ đoán mò sang mảng hoặc biến boolean.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy cài đặt mức vật lý (Physical Schema) trong giáo trình bằng cấu trúc struct C`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục I.5.b*
> - 💡 **Mẹo hóa giải:** Mức vật lý struct C = Con trỏ `*next` dùng để liên kết tệp bản ghi trên thiết bị đĩa.

---

### 📌 CHUYÊN ĐỀ 2: ĐẠI SỐ QUAN HỆ CƠ BẢN & TẬP HỢP TƯƠNG THÍCH (Câu 11 - 20)

#### Câu 11 (db-c2-d1-011) — [🟢 DỄ (NHẬN BIẾT)]

**Ký hiệu toán học chuẩn mực của phép chọn (Selection) và phép chiếu (Projection) trong đại số quan hệ lần lượt là:**

- **A.** Ký hiệu ∪ (hợp) cho phép chọn và ký hiệu ∩ (giao) cho phép chiếu
- **B.** Ký hiệu π (pi) cho phép chọn và ký hiệu σ (sigma) cho phép chiếu
- **C.** Ký hiệu σ (sigma) cho phép chọn và ký hiệu π (pi) cho phép chiếu
- **D.** Ký hiệu ⋈ (join) cho phép chọn và ký hiệu × (nhân) cho phép chiếu

> **Đáp án đúng:** **C** — *Ký hiệu σ (sigma) cho phép chọn và ký hiệu π (pi) cho phép chiếu*
>
> **Giải thích chi tiết:** Trong ĐSQH: Phép chọn ký hiệu bằng chữ cái Hy Lạp σ (sigma); Phép chiếu ký hiệu bằng chữ cái Hy Lạp π (pi).

---

#### Câu 12 (db-c2-d1-012) — [🟢 DỄ (NHẬN BIẾT)]

**Điều kiện bắt buộc nào sau đây phải được thỏa mãn để thực hiện các phép toán Hợp (∪), Giao (∩) và Hiệu (−)?**

- **A.** Hai quan hệ bắt buộc phải do cùng một nhân viên tạo ra trong cùng một ngày
- **B.** Hai quan hệ tham gia bắt buộc phải hoàn toàn rời nhau không có thuộc tính chung
- **C.** Số lượng các dòng trong hai quan hệ bắt buộc phải bằng nhau tuyệt đối
- **D.** Hai quan hệ tham gia bắt buộc phải tương thích (có cùng tập thuộc tính U)

> **Đáp án đúng:** **D** — *Hai quan hệ tham gia bắt buộc phải tương thích (có cùng tập thuộc tính U)*
>
> **Giải thích chi tiết:** Các phép toán tập hợp Hợp (∪), Giao (∩), Hiệu (−) chỉ thực hiện được trên hai quan hệ tương thích với nhau (nghĩa là có cùng tập thuộc tính U1 = U2).

---

#### Câu 13 (db-c2-d1-013) — [🟢 DỄ (NHẬN BIẾT)]

**Thao tác tự động đặc trưng nào sau đây LUÔN LUÔN diễn ra khi thực hiện phép chiếu π_X(r) trên quan hệ r?**

- **A.** Tự động xóa sạch toàn bộ các thuộc tính có trong tập thuộc tính X
- **B.** Tự động chọn bộ đại diện trong các bộ giống nhau (loại bỏ trùng lặp)
- **C.** Tự động nhân đôi số lượng các bộ dữ liệu có trong kết quả trả về
- **D.** Tự động sắp xếp các dòng theo thứ tự bảng chữ cái tiếng Anh từ A-Z

> **Đáp án đúng:** **B** — *Tự động chọn bộ đại diện trong các bộ giống nhau (loại bỏ trùng lặp)*
>
> **Giải thích chi tiết:** Thực hiện phép chiếu gồm 2 thao tác: 1) Giữ lại các thuộc tính trong tập X; 2) Chọn bộ đại diện trong các bộ giống nhau (loại bỏ trùng lặp).

---

#### Câu 14 (db-c2-d1-014) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Kết quả của phép tích Descartes r × s trên hai quan hệ rời nhau R1(A1...An) và R2(B1...Bm) là một quan hệ gồm các ...(1)..., và số lượng bộ của r × s bằng ...(2)..."**

- **A.** (n+m)-bộ / tích số bộ của r nhân với số bộ của s
- **B.** (n-m)-bộ / hiệu số bộ của r trừ cho số bộ của s
- **C.** (n×m)-bộ / tổng số bộ của r cộng với số bộ của s
- **D.** bộ đơn lẻ / giá trị lớn nhất giữa số bộ r và s

> **Đáp án đúng:** **A** — *(n+m)-bộ / tích số bộ của r nhân với số bộ của s*
>
> **Giải thích chi tiết:** Kết quả của phép tích Descartes là quan hệ gồm các (n+m)-bộ, và số bộ của r × s bằng (số bộ của r) × (số bộ của s).

---

#### Câu 15 (db-c2-d1-015) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Phát biểu nào sau đây phản ánh ĐÚNG tính chất giao hoán của phép chọn (Selection) trong đại số quan hệ?**

- **A.** Các phép chọn không bao giờ có tính giao hoán trong mọi trường hợp
- **B.** σ_C1(σ_C2(R)) = π_C1(π_C2(R)) với mọi biểu thức logic C1 và C2
- **C.** σ_C1(σ_C2(R)) = σ_C2(σ_C1(R)) với mọi biểu thức logic C1 và C2
- **D.** Tính giao hoán chỉ xảy ra khi quan hệ R hoàn toàn không có dữ liệu

> **Đáp án đúng:** **C** — *σ_C1(σ_C2(R)) = σ_C2(σ_C1(R)) với mọi biểu thức logic C1 và C2*
>
> **Giải thích chi tiết:** Giáo trình khẳng định: Các phép chọn có tính giao hoán: σ_C1(σ_C2(R)) = σ_C2(σ_C1(R)).

---

#### Câu 16 (db-c2-d1-016) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho hai quan hệ tương thích r và s. Biểu thức nào sau đây diễn tả ĐÚNG định nghĩa của phép hiệu (r − s)?**

- **A.** r − s = { t | t ∉ r ∧ t ∉ s } (không thuộc r cũng không thuộc s)
- **B.** r − s = { t | t ∈ r ∨ t ∈ s } (thuộc r hoặc thuộc về tập s)
- **C.** r − s = { t | t ∈ r ∧ t ∈ s } (đồng thời vừa thuộc r vừa thuộc s)
- **D.** r − s = { t | t ∈ r ∧ t ∉ s } (thuộc r nhưng không thuộc s)

> **Đáp án đúng:** **D** — *r − s = { t | t ∈ r ∧ t ∉ s } (thuộc r nhưng không thuộc s)*
>
> **Giải thích chi tiết:** Hiệu của hai quan hệ tương thích r, s là quan hệ gồm các bộ thuộc r nhưng không thuộc s: r − s = { t | t ∈ r ∧ t ∉ s }.

---

#### Câu 17 (db-c2-d1-017) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Mục đích chính của việc sử dụng Phép đặt lại tên (Rename) trong đại số quan hệ là gì?**

- **A.** Đặt tên cho các quan hệ trung gian giúp biểu thức rõ ràng, dễ hiểu hơn
- **B.** Xóa bỏ vĩnh viễn tên của tác giả viết ra hệ quản trị cơ sở dữ liệu
- **C.** Tự động dịch tên các cột từ tiếng Việt sang tiếng Anh cho máy tính hiểu
- **D.** Thay đổi tên nhà cung cấp dịch vụ máy chủ đám mây đang lưu trữ CSDL

> **Đáp án đúng:** **A** — *Đặt tên cho các quan hệ trung gian giúp biểu thức rõ ràng, dễ hiểu hơn*
>
> **Giải thích chi tiết:** Để trả lời câu hỏi phức tạp cần tổ hợp nhiều phép toán, dùng phép đặt tên để đặt tên cho các quan hệ trung gian và thuộc tính, giúp biểu thức mạch lạc.

---

#### Câu 18 (db-c2-d1-018) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho quan hệ R gồm 10 dòng và quan hệ S gồm 5 dòng. Biết R và S rời nhau. Hỏi phép tích Descartes R × S có bao nhiêu dòng và thuộc tính thế nào?**

- **A.** Có đúng 15 dòng và số thuộc tính bằng số thuộc tính của R trừ thuộc tính S
- **B.** Có đúng 50 dòng và số thuộc tính bằng tổng số thuộc tính của R cộng với S
- **C.** Có đúng 5 dòng và số thuộc tính bằng số thuộc tính lớn nhất giữa hai quan hệ
- **D.** Có đúng 2 dòng và số thuộc tính bằng tích số thuộc tính của hai quan hệ đó

> **Đáp án đúng:** **B** — *Có đúng 50 dòng và số thuộc tính bằng tổng số thuộc tính của R cộng với S*
>
> **Giải thích chi tiết:** Số dòng của R × S = 10 × 5 = 50 dòng. Số thuộc tính là n + m (tổng số thuộc tính của hai quan hệ).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm phép nhân tích Descartes với phép cộng số dòng (10 + 5 = 15).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy số dòng và số thuộc tính của phép tích Descartes (Cartesian Product)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục II.4*
> - 💡 **Mẹo hóa giải:** Tích Descartes R × S: Dòng = |R| × |S| (nhân); Cột = n + m (cộng).

---

#### Câu 19 (db-c2-d1-019) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Biểu thức nào sau đây cho kết quả tương đương với phép giao r ∩ s khi chỉ sử dụng phép hiệu (−)?**

- **A.** r − (s − r) (lấy r trừ đi phần thuộc s nhưng không thuộc về r)
- **B.** (r − s) − r (lấy hiệu của r và s trừ tiếp cho quan hệ ban đầu)
- **C.** (r ∪ s) − r (lấy hợp của hai quan hệ rồi trừ đi quan hệ đầu tiên)
- **D.** r − (r − s) (lấy r trừ đi phần thuộc r nhưng không thuộc s)

> **Đáp án đúng:** **D** — *r − (r − s) (lấy r trừ đi phần thuộc r nhưng không thuộc s)*
>
> **Giải thích chi tiết:** Theo lý thuyết tập hợp: r ∩ s = r − (r − s). Vì (r − s) là phần chỉ thuộc r mà không thuộc s, khi lấy r trừ đi phần này sẽ thu được chính xác phần chung (giao).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm với r − (s − r) hoặc (r ∪ s) − r.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy biến đổi tương đương phép giao qua phép hiệu trong lý thuyết tập hợp`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục II.7 & II.8*
> - 💡 **Mẹo hóa giải:** Công thức tập hợp kinh điển: r ∩ s = r − (r − s) = s − (s − r).

---

#### Câu 20 (db-c2-d1-020) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho bảng SINHVIEN có 100 sinh viên, trong đó chỉ có 5 quê quán khác nhau. Hỏi kết quả của phép chiếu π_QueQuan(SINHVIEN) có bao nhiêu dòng?**

- **A.** Có đúng 20 dòng vì lấy 100 chia cho 5 ra số dòng trung bình
- **B.** Có đúng 100 dòng vì phép chiếu luôn giữ nguyên số dòng của bảng
- **C.** Có đúng 5 dòng vì phép chiếu tự động khử các giá trị trùng lặp
- **D.** Có đúng 0 dòng vì quê quán không phải là thuộc tính khóa chính

> **Đáp án đúng:** **C** — *Có đúng 5 dòng vì phép chiếu tự động khử các giá trị trùng lặp*
>
> **Giải thích chi tiết:** Phép chiếu toán học luôn tự động loại bỏ các bộ trùng lặp để chọn bộ đại diện. Vì chỉ có 5 quê quán khác nhau nên kết quả chiếu chỉ có đúng 5 dòng.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay quen với lệnh SELECT QueQuan trong SQL (mặc định không khử trùng lặp nếu thiếu DISTINCT) nên chọn 100 dòng.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy khử trùng lặp bắt buộc của phép chiếu trong Đại số quan hệ toán học`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục II.3*
> - 💡 **Mẹo hóa giải:** Đại số quan hệ toán học: Phép chiếu π LUÔN LUÔN khử trùng lặp (khác với SQL SELECT thuần túy).

---

### 📌 CHUYÊN ĐỀ 3: PHÉP JOIN, PHÉP CHIA & TRUY VẤN BÀI TẬP CSDL (Câu 21 - 30)

#### Câu 21 (db-c2-d1-021) — [🟢 DỄ (NHẬN BIẾT)]

**Phép kết nối tự nhiên (Natural Join — ký hiệu * hoặc ⋈) giữa hai quan hệ có đặc điểm nào dưới đây?**

- **A.** Tự động cộng giá trị số của tất cả các cột có cùng tên lại với nhau
- **B.** Kết nối bằng tại thuộc tính trùng tên và loại bỏ một thuộc tính trùng
- **C.** Chỉ kết nối được nếu hai quan hệ hoàn toàn không có thuộc tính chung
- **D.** Bắt buộc người dùng phải chỉ định rõ tên của khóa chính trong câu lệnh

> **Đáp án đúng:** **B** — *Kết nối bằng tại thuộc tính trùng tên và loại bỏ một thuộc tính trùng*
>
> **Giải thích chi tiết:** Kết nối tự nhiên thực hiện kết nối bằng tại các thuộc tính trùng tên của 2 quan hệ, đồng thời loại bỏ một trong hai thuộc tính trùng tên khỏi kết quả để tránh dư thừa.

---

#### Câu 22 (db-c2-d1-022) — [🟢 DỄ (NHẬN BIẾT)]

**Trong đại số quan hệ, phép toán nào chuyên dùng để giải quyết các câu hỏi mang ý nghĩa "VỚI MỌI" (∀) hoặc "TẤT CẢ"?**

- **A.** Phép chia (Division — ký hiệu ÷) trong đại số quan hệ
- **B.** Phép chiếu (Projection — ký hiệu π) trên tập thuộc tính
- **C.** Phép chọn (Selection — ký hiệu σ) với điều kiện logic
- **D.** Phép tích Descartes (Cartesian Product — ký hiệu ×)

> **Đáp án đúng:** **A** — *Phép chia (Division — ký hiệu ÷) trong đại số quan hệ*
>
> **Giải thích chi tiết:** Ý nghĩa nghiệp vụ của phép chia (÷): Là công cụ toán học tương ứng với lượng từ phổ quát "VỚI MỌI" (∀), chuyên dùng để giải các bài toán mang ý nghĩa "TẤT CẢ".

---

#### Câu 23 (db-c2-d1-023) — [🟢 DỄ (NHẬN BIẾT)]

**Khi kết nối hai quan hệ r(A, B, C) và s(C, D) bằng phép kết nối tự nhiên r * s, lược đồ quan hệ kết quả gồm các thuộc tính nào?**

- **A.** Lược đồ kết quả chỉ gồm duy nhất một thuộc tính chung là (C)
- **B.** Lược đồ kết quả gồm 5 thuộc tính là (A, B, C, C, D) có hai cột C
- **C.** Lược đồ kết quả gồm 4 thuộc tính là (A, B, C, D) không bị lặp lại
- **D.** Lược đồ kết quả gồm 3 thuộc tính là (A, B, D) đã bị xóa cột C

> **Đáp án đúng:** **C** — *Lược đồ kết quả gồm 4 thuộc tính là (A, B, C, D) không bị lặp lại*
>
> **Giải thích chi tiết:** Phép kết nối tự nhiên loại bỏ một trong hai thuộc tính trùng tên (C), do đó lược đồ kết quả có 4 thuộc tính: (A, B, C, D).

---

#### Câu 24 (db-c2-d1-024) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho CSDL Quản lý bán hàng: Hanghoa(MaHG, TenHG, DVT, Dongia, Cohang). Biểu thức nào sau đây tìm các mặt hàng đang HẾT HÀNG (Cohang = 0)?**

- **A.** Hanghoa × σ_(Cohang = 0)(Hanghoa) (dùng phép tích Descartes hai bảng)
- **B.** π_(Cohang = 0)(Hanghoa) (dùng phép chiếu với biểu thức logic bằng 0)
- **C.** Hanghoa ÷ σ_(Cohang = 0)(Hanghoa) (dùng phép chia đại số quan hệ)
- **D.** σ_(Cohang = 0)(Hanghoa) (dùng phép chọn với điều kiện Cohang = 0)

> **Đáp án đúng:** **D** — *σ_(Cohang = 0)(Hanghoa) (dùng phép chọn với điều kiện Cohang = 0)*
>
> **Giải thích chi tiết:** Để lọc các dòng thỏa mãn điều kiện Cohang = 0, ta sử dụng phép chọn: σ_(Cohang = 0)(Hanghoa).

---

#### Câu 25 (db-c2-d1-025) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Phát biểu nào sau đây là ĐÚNG khi nói về phép kết nối điều kiện (θ-Join)?**

- **A.** Là phép tích Descartes kèm theo phép chọn theo điều kiện so sánh θ
- **B.** Bắt buộc toán tử so sánh θ phải luôn luôn là phép so sánh lớn hơn
- **C.** Chỉ thực hiện được khi hai quan hệ có cùng số lượng dòng bằng nhau
- **D.** Kết quả luôn luôn có số dòng nhiều hơn phép tích Descartes của hai bảng

> **Đáp án đúng:** **A** — *Là phép tích Descartes kèm theo phép chọn theo điều kiện so sánh θ*
>
> **Giải thích chi tiết:** Bản chất của θ-Join: r ⋈_θ s chính là thực hiện phép tích Descartes r × s rồi chọn lại các bộ thỏa điều kiện so sánh θ: σ_θ(r × s).

---

#### Câu 26 (db-c2-d1-026) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho CSDL Bán hàng gồm Khach(MaKH, Hoten...) và Hoadon(SoHD, Ngaylap, MaKH...). Biểu thức nào in ra danh sách khách hàng ĐÃ TỪNG mua ít nhất một hóa đơn?**

- **A.** Khach ÷ π_(MaKH)(Hoadon) (lấy quan hệ Khach chia cho mã khách hàng)
- **B.** Khach − Hoadon (lấy quan hệ Khach trừ đi toàn bộ quan hệ Hoadon)
- **C.** π_(MaKH, Hoten)(Khach * Hoadon) (kết nối tự nhiên giữa Khach và Hoadon)
- **D.** π_(MaKH, Hoten)(Khach) × Hoadon (nhân tích Descartes Khach với Hoadon)

> **Đáp án đúng:** **C** — *π_(MaKH, Hoten)(Khach * Hoadon) (kết nối tự nhiên giữa Khach và Hoadon)*
>
> **Giải thích chi tiết:** Kết nối tự nhiên Khach * Hoadon sẽ giữ lại những khách hàng có MaKH xuất hiện trong bảng Hoadon (đã từng mua hàng), sau đó chiếu lấy MaKH, Hoten.

---

#### Câu 27 (db-c2-d1-027) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Phép chia r ÷ s với r trên lược đồ R(A1...An) và s trên lược đồ con S(B1...Bm) sẽ cho kết quả là một quan hệ trên lược đồ ...(1)... gồm các ...(2)..."**

- **A.** R ∪ S / (n+m)-bộ xuất hiện ở cả hai quan hệ r và s
- **B.** R − S / (n−m)-bộ ghép với mọi bộ của s đều thuộc về r
- **C.** R ∩ S / m-bộ có giá trị lớn nhất trong quan hệ r
- **D.** R × S / n-bộ không có giá trị rỗng ở bất kỳ cột nào

> **Đáp án đúng:** **B** — *R − S / (n−m)-bộ ghép với mọi bộ của s đều thuộc về r*
>
> **Giải thích chi tiết:** Định nghĩa phép chia: r ÷ s là quan hệ trên lược đồ R − S gồm các (n−m)-bộ t sao cho với mọi bộ ts ∈ s thì bộ ghép (t, ts) đều thuộc r.

---

#### Câu 28 (db-c2-d1-028) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho CSDL Bán hàng. Biểu thức ĐSQH nào dưới đây tìm danh sách Mã khách hàng (MaKH) CHƯA TỪNG mua bất kỳ một hóa đơn nào?**

- **A.** σ_(SoHD = NULL)(Khach * Hoadon) (chọn các dòng có số hóa đơn bị rỗng)
- **B.** π_(MaKH)(Khach) ∩ π_(MaKH)(Hoadon) (lấy phần giao giữa Khach và Hoadon)
- **C.** π_(MaKH)(Khach * Hoadon) (kết nối tự nhiên giữa hai bảng Khach và Hoadon)
- **D.** π_(MaKH)(Khach) − π_(MaKH)(Hoadon) (chiếu MaKH của Khach trừ MaKH Hoadon)

> **Đáp án đúng:** **D** — *π_(MaKH)(Khach) − π_(MaKH)(Hoadon) (chiếu MaKH của Khach trừ MaKH Hoadon)*
>
> **Giải thích chi tiết:** Để tìm đối tượng "chưa từng / không", ta lấy toàn bộ tập khách hàng trừ đi tập khách hàng đã mua (xuất hiện trong Hoadon): π_MaKH(Khach) − π_MaKH(Hoadon).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn cách Join rồi lọc IS NULL kiểu SQL, nhưng trong ĐSQH chuẩn phép hiệu (−) là công cụ toán học chuẩn xác nhất.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy bài toán tìm đối tượng "chưa từng / không bao giờ" bằng phép hiệu ĐSQH`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục II.8 & IV.2*
> - 💡 **Mẹo hóa giải:** Tìm đối tượng "KHÔNG / CHƯA TỪNG" ➔ Dùng PHÉP HIỆU: Tập_Tổng_Thể − Tập_Đã_Làm.

---

#### Câu 29 (db-c2-d1-029) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho CSDL Sinh viên: SINHVIEN(MaSV, Hoten...), DETAI(MaDT, TenDT...), SV_DT(MaSV, MaDT, KQ...). Biểu thức nào tìm sinh viên đã thực hiện TẤT CẢ các đề tài?**

- **A.** π_(MaSV, MaDT)(SV_DT) − π_(MaDT)(DETAI) (dùng phép trừ hai tập)
- **B.** π_(MaSV, MaDT)(SV_DT) * π_(MaDT)(DETAI) (dùng kết nối tự nhiên)
- **C.** π_(MaSV, MaDT)(SV_DT) ÷ π_(MaDT)(DETAI) (dùng phép chia ĐSQH)
- **D.** π_(MaSV, MaDT)(SV_DT) ∪ π_(MaDT)(DETAI) (dùng phép hợp hai bảng)

> **Đáp án đúng:** **C** — *π_(MaSV, MaDT)(SV_DT) ÷ π_(MaDT)(DETAI) (dùng phép chia ĐSQH)*
>
> **Giải thích chi tiết:** Để tìm sinh viên thực hiện TẤT CẢ các đề tài, ta lấy quan hệ chiếu (MaSV, MaDT) của bảng thực hiện chia cho toàn bộ tập mã đề tài π_MaDT(DETAI).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nhầm với phép Natural Join hoặc phép Hợp.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy ứng dụng phép chia (Division) giải bài toán lượng từ phổ quát "TẤT CẢ"`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục II.10*
> - 💡 **Mẹo hóa giải:** Bài toán "TẤT CẢ / VỚI MỌI" ➔ Dùng PHÉP CHIA: Quan_hệ_thực_hiện ÷ Tập_tiêu_chí_toàn_bộ.

---

#### Câu 30 (db-c2-d1-030) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Giả sử bảng r có 5 dòng và bảng s có 3 dòng. Điều kiện kết nối θ trong phép kết nối r ⋈_θ s không thỏa mãn với bất kỳ cặp bộ nào. Kết quả trả về là gì?**

- **A.** Một quan hệ rỗng ∅ không chứa bất kỳ dòng nào nhưng vẫn có lược đồ
- **B.** Một quan hệ chứa đúng 15 dòng dữ liệu của phép tích Descartes
- **C.** Hệ quản trị CSDL lập tức báo lỗi cú pháp và dừng hoạt động máy chủ
- **D.** Một quan hệ chứa đúng 8 dòng dữ liệu của phép hợp hai quan hệ

> **Đáp án đúng:** **A** — *Một quan hệ rỗng ∅ không chứa bất kỳ dòng nào nhưng vẫn có lược đồ*
>
> **Giải thích chi tiết:** Khi không có cặp bộ nào thỏa mãn điều kiện kết nối θ, tập kết quả trả về là một quan hệ rỗng (r = ∅), cấu trúc lược đồ vẫn được giữ nguyên.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ máy chủ sẽ báo lỗi hoặc trả về tích Descartes đầy đủ.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy kết quả quan hệ rỗng (Empty Relation) khi không có bộ nào khớp điều kiện Join`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục II.5*
> - 💡 **Mẹo hóa giải:** Không có dòng nào thỏa điều kiện kết nối ➔ Kết quả là Quan hệ rỗng (r = ∅), không phải lỗi cú pháp.

---

### 📌 CHUYÊN ĐỀ 4: QUY TRÌNH 7 BƯỚC CHUYỂN ĐỔI ERD SANG MÔ HÌNH QUAN HỆ (Câu 31 - 40)

#### Câu 31 (db-c2-d1-031) — [🟢 DỄ (NHẬN BIẾT)]

**Trong quy trình 7 bước chuyển đổi ERD sang quan hệ, Bước 1 quy định thuộc tính phức hợp (Composite attribute) được chuyển đổi như thế nào?**

- **A.** Bắt buộc phải tách thành một bảng quan hệ riêng biệt có khóa ngoại
- **B.** Chỉ lấy các thuộc tính đơn thành phần của nó, không lấy thuộc tính gộp
- **C.** Gộp tất cả lại thành một chuỗi ký tự duy nhất và mã hóa bảo mật
- **D.** Xóa bỏ hoàn toàn thuộc tính phức hợp vì mô hình quan hệ không hỗ trợ

> **Đáp án đúng:** **B** — *Chỉ lấy các thuộc tính đơn thành phần của nó, không lấy thuộc tính gộp*
>
> **Giải thích chi tiết:** Bước 1 quy định: Thuộc tính phức hợp (composite) chỉ lấy các thuộc tính đơn thành phần của nó (ví dụ: Địa chỉ gồm Đường, Quận, TP thì chỉ lấy Đường, Quận, TP).

---

#### Câu 32 (db-c2-d1-032) — [🟢 DỄ (NHẬN BIẾT)]

**Theo quy tắc chuyển đổi ERD sang quan hệ, thuộc tính đa trị (Multivalued attribute) của một thực thể được xử lý như thế nào?**

- **A.** Tự động nhân bản thực thể ban đầu thành mười bản sao giống hệt nhau
- **B.** Lưu tất cả các giá trị vào một ô duy nhất ngăn cách nhau bằng dấu chấm phẩy
- **C.** Ép buộc người dùng chỉ được phép chọn duy nhất một giá trị đầu tiên nhập vào
- **D.** Tách thành một quan hệ riêng, có khóa ngoại tham chiếu về khóa chính quan hệ gốc

> **Đáp án đúng:** **D** — *Tách thành một quan hệ riêng, có khóa ngoại tham chiếu về khóa chính quan hệ gốc*
>
> **Giải thích chi tiết:** Bước 1c: Thuộc tính đa trị được tách thành một quan hệ riêng, có khóa ngoại tham chiếu về khóa chính của quan hệ ban đầu (tạo quan hệ 1:N).

---

#### Câu 33 (db-c2-d1-033) — [🟢 DỄ (NHẬN BIẾT)]

**Khi chuyển đổi mối quan hệ một - nhiều (1:N) hai ngôi sang mô hình quan hệ, khóa ngoại được đặt ở đâu?**

- **A.** Khóa chính ở phía "một" (1) sẽ trở thành khóa ngoại ở quan hệ phía "nhiều" (N)
- **B.** Khóa chính ở phía "nhiều" (N) sẽ trở thành khóa ngoại ở quan hệ phía "một" (1)
- **C.** Bắt buộc phải tạo một quan hệ kết hợp mới ở giữa để chứa hai khóa ngoại
- **D.** Khóa ngoại được đặt ngẫu nhiên ở một trong hai bảng tùy ý người lập trình

> **Đáp án đúng:** **A** — *Khóa chính ở phía "một" (1) sẽ trở thành khóa ngoại ở quan hệ phía "nhiều" (N)*
>
> **Giải thích chi tiết:** Quy tắc Bước 3 cho quan hệ 1:N: Khóa chính ở phía "một" (1) trở thành khóa ngoại ở quan hệ phía "nhiều" (N).

---

#### Câu 34 (db-c2-d1-034) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khóa chính của quan hệ được tạo từ một Thực thể yếu (Weak Entity) trong Bước 2 bao gồm những thành phần nào?**

- **A.** Chỉ bao gồm duy nhất khóa riêng phần của chính bản thân thực thể yếu đó
- **B.** Khóa riêng phần của thực thể yếu kết hợp với khóa chính của thực thể mạnh
- **C.** Một số nguyên ngẫu nhiên do hệ điều hành máy tính tự động cấp phát khi lưu
- **D.** Tập hợp tất cả các thuộc tính mô tả có trong thực thể yếu đó gộp chung lại

> **Đáp án đúng:** **B** — *Khóa riêng phần của thực thể yếu kết hợp với khóa chính của thực thể mạnh*
>
> **Giải thích chi tiết:** Bước 2 quy định: Khóa chính của quan hệ thực thể yếu gồm: Khóa riêng phần (partial key) + Khóa chính của quan hệ thực thể mạnh (khóa ngoại NOT NULL).

---

#### Câu 35 (db-c2-d1-035) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khi chuyển đổi mối quan hệ nhiều - nhiều (M:N) hai ngôi sang mô hình quan hệ, phương án xử lý chuẩn mực là gì?**

- **A.** Xóa bỏ mối quan hệ nhiều-nhiều vì mô hình quan hệ cấm hoàn toàn quan hệ M:N
- **B.** Chọn một thực thể bất kỳ làm bảng chính và thêm khóa ngoại vào thực thể kia
- **C.** Tạo một quan hệ mới, khóa chính là tổ hợp khóa chính của hai thực thể tham gia
- **D.** Chuyển đổi thành hai mối quan hệ một - một độc lập không liên quan với nhau

> **Đáp án đúng:** **C** — *Tạo một quan hệ mới, khóa chính là tổ hợp khóa chính của hai thực thể tham gia*
>
> **Giải thích chi tiết:** Bước 3 cho quan hệ M:N: Tạo quan hệ mới, khóa chính là tổ hợp khóa chính của hai thực thể tham gia (đồng thời là khóa ngoại tương ứng đến từng thực thể).

---

#### Câu 36 (db-c2-d1-036) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong mối quan hệ một - một (1:1), vị trí đặt khóa ngoại và các thuộc tính riêng của mối quan hệ được quy định như thế nào?**

- **A.** Khóa ngoại được đặt ở cả hai bảng và trỏ chéo lẫn nhau để đảm bảo cân bằng
- **B.** Khóa chính ở phía tùy chọn làm khóa ngoại ở phía bắt buộc kèm thuộc tính riêng
- **C.** Bắt buộc phải tạo thêm một bảng thứ ba ở giữa dù là quan hệ một - một
- **D.** Khóa chính ở phía bắt buộc làm khóa ngoại ở phía tùy chọn kèm thuộc tính riêng

> **Đáp án đúng:** **D** — *Khóa chính ở phía bắt buộc làm khóa ngoại ở phía tùy chọn kèm thuộc tính riêng*
>
> **Giải thích chi tiết:** Quy tắc Bước 3 cho quan hệ 1:1: Khóa chính ở phía bắt buộc làm khóa ngoại ở phía tùy chọn. Tất cả thuộc tính của mối quan hệ đều được mang sang phía tùy chọn này.

---

#### Câu 37 (db-c2-d1-037) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Đối với mối quan hệ ba ngôi (Ternary Relationship), quy tắc chuẩn sẽ tạo ra ...(1)... quan hệ, trong đó có một quan hệ kết hợp chứa các ...(2)... tham chiếu đến các thực thể tham gia."**

- **A.** duy nhất 1 / thuộc tính đơn
- **B.** n + 1 (4 quan hệ) / khóa ngoại
- **C.** n − 1 (2 quan hệ) / khóa chính
- **D.** vô số / trường dữ liệu rỗng

> **Đáp án đúng:** **B** — *n + 1 (4 quan hệ) / khóa ngoại*
>
> **Giải thích chi tiết:** Bước 6: Quy tắc n + 1 quan hệ: Với quan hệ ba ngôi sẽ tạo ra 3 + 1 = 4 quan hệ (3 quan hệ cho 3 thực thể và 1 quan hệ kết hợp chứa các khóa ngoại).

---

#### Câu 38 (db-c2-d1-038) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Thực thể NHANVIEN có mối quan hệ một ngôi 1:N "Quản lý" (Một nhân viên quản lý nhiều nhân viên khác). Khi chuyển sang mô hình quan hệ sẽ xử lý như thế nào?**

- **A.** Hệ thống tự động xóa bỏ những nhân viên không có người quản lý trực tiếp
- **B.** Bắt buộc phải tách thành hai bảng: NHANVIEN_SEP và NHANVIEN_NHANVIEN
- **C.** Tạo thêm một khóa ngoại đệ quy trong cùng bảng NHANVIEN tham chiếu về MaNV
- **D.** Mô hình quan hệ từ chối hỗ trợ quan hệ một ngôi vì vi phạm lý thuyết tập hợp

> **Đáp án đúng:** **C** — *Tạo thêm một khóa ngoại đệ quy trong cùng bảng NHANVIEN tham chiếu về MaNV*
>
> **Giải thích chi tiết:** Bước 5: Với quan hệ một ngôi 1:N đệ quy, ta tạo một khóa ngoại đệ quy (ví dụ Manager_ID) nằm ngay trong cùng quan hệ NHANVIEN tham chiếu về khóa chính Employee_ID.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ phải tách thành 2 bảng riêng biệt cho Sếp và Nhân viên.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy chuyển đổi quan hệ một ngôi 1:N đệ quy (Recursive Foreign Key)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục III.5.a*
> - 💡 **Mẹo hóa giải:** Quan hệ đệ quy 1:N = Thêm Khóa ngoại đệ quy (Recursive FK) trong CHÍNH BẢNG ĐÓ.

---

#### Câu 39 (db-c2-d1-039) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Khi chuyển đổi mối quan hệ Cha/Con (Supertype/Subtype) như EMPLOYEE (cha) và HOURLY_EMPLOYEE (con), khóa chính của bảng con đóng vai trò gì?**

- **A.** Vừa là khóa chính của quan hệ con, vừa là khóa ngoại tham chiếu đến khóa cha
- **B.** Chỉ là một thuộc tính thông thường không có tính chất duy nhất của bảng con
- **C.** Là một khóa độc lập hoàn toàn không có mối liên hệ nào với quan hệ cha
- **D.** Bắt buộc phải do người dùng tự nhập một mã số ngẫu nhiên không trùng lặp

> **Đáp án đúng:** **A** — *Vừa là khóa chính của quan hệ con, vừa là khóa ngoại tham chiếu đến khóa cha*
>
> **Giải thích chi tiết:** Bước 7: Khóa chính của quan hệ cha (Employee_Number) trở thành khóa chính đồng thời là khóa ngoại của các quan hệ con (H_Employee_Number), thiết lập quan hệ 1:1 giữa cha và con.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ bảng con phải tạo khóa chính riêng và thêm một cột khóa ngoại riêng biệt.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy khóa chính kiêm khóa ngoại (PK is FK) trong mối quan hệ Supertype/Subtype`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục III.6.a*
> - 💡 **Mẹo hóa giải:** Mô hình Cha/Con (Super/Subtype) = Khóa chính của bảng con VỪA LÀ PK VỪA LÀ FK trỏ về cha.

---

#### Câu 40 (db-c2-d1-040) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Một thực thể kết hợp SHIPMENT giữa CUSTOMER và VENDOR có sẵn danh hiệu riêng là Shipment_No. Khóa chính của quan hệ SHIPMENT sau khi chuyển đổi sẽ là gì?**

- **A.** Thực thể kết hợp có danh hiệu riêng thì không được phép có bất kỳ khóa ngoại nào
- **B.** Khóa chính bắt buộc phải là tổ hợp hai khóa ngoại (Customer_ID, Vendor_ID)
- **C.** Khóa chính là tổ hợp của cả ba thuộc tính (Shipment_No, Customer_ID, Vendor_ID)
- **D.** Khóa chính là danh hiệu riêng Shipment_No của chính thực thể kết hợp đó

> **Đáp án đúng:** **D** — *Khóa chính là danh hiệu riêng Shipment_No của chính thực thể kết hợp đó*
>
> **Giải thích chi tiết:** Bước 4b quy định: Nếu thực thể kết hợp có danh hiệu riêng (natural identifier) như Shipment_No, thì khóa chính là danh hiệu riêng đó. Customer_ID và Vendor_ID đóng vai trò là các khóa ngoại thông thường.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay áp dụng máy móc quy tắc M:N và chọn khóa chính tổ hợp 2 khóa ngoại.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy thực thể kết hợp có danh hiệu riêng (Associative Entity with Natural Identifier)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục III.3.b*
> - 💡 **Mẹo hóa giải:** Thực thể kết hợp CÓ danh hiệu riêng ➔ Khóa chính LÀ danh hiệu riêng đó (không ghép tổ hợp).

---

### 📊 BẢNG ĐÁP ÁN NHANH — BỘ ĐỀ SỐ 1 (MÃ ĐỀ: DB-C2-D1)

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **1** | `A` | **11** | `C` | **21** | `B` | **31** | `B` |
| **2** | `C` | **12** | `D` | **22** | `A` | **32** | `D` |
| **3** | `B` | **13** | `B` | **23** | `C` | **33** | `A` |
| **4** | `D` | **14** | `A` | **24** | `D` | **34** | `B` |
| **5** | `B` | **15** | `C` | **25** | `A` | **35** | `C` |
| **6** | `A` | **16** | `D` | **26** | `C` | **36** | `D` |
| **7** | `D` | **17** | `A` | **27** | `B` | **37** | `B` |
| **8** | `C` | **18** | `B` | **28** | `D` | **38** | `C` |
| **9** | `A` | **19** | `D` | **29** | `C` | **39** | `A` |
| **10** | `B` | **20** | `C` | **30** | `A` | **40** | `D` |


## BỘ ĐỀ SỐ 2 (MÃ ĐỀ: db-c2-d2)

*Bộ đề kiểm tra nâng cao với tính tương đương đại số quan hệ, bài toán kinh điển mua tất cả mặt hàng, phân rã điều kiện AND/OR và bẫy khóa thực tế.*

---

### 📌 CHUYÊN ĐỀ 1: ĐỊNH NGHĨA CƠ BẢN & HỌ NHÀ KHÓA (Câu 1 - 10)

#### Câu 1 (db-c2-d2-001) — [🟢 DỄ (NHẬN BIẾT)]

**Tập hợp các giá trị hợp lệ mà một thuộc tính có thể nhận được trong cơ sở dữ liệu được gọi là gì?**

- **A.** Tập hợp các siêu khóa dự tuyển của toàn bộ hệ thống CSDL
- **B.** Miền giá trị (Domain, ký hiệu là D hay dom) của thuộc tính đó
- **C.** Lược đồ quan hệ con định nghĩa ở mức khung nhìn ngoài
- **D.** Tích Descartes của hai bảng không có thuộc tính chung

> **Đáp án đúng:** **B** — *Miền giá trị (Domain, ký hiệu là D hay dom) của thuộc tính đó*
>
> **Giải thích chi tiết:** Miền giá trị (domain, ký hiệu D(A) hay dom(A)) là tập các giá trị hợp lệ mà thuộc tính A có thể nhận (ví dụ: điểm thi là số thực từ 0 đến 10).

---

#### Câu 2 (db-c2-d2-002) — [🟢 DỄ (NHẬN BIẾT)]

**Lược đồ quan hệ (Relation Schema, ký hiệu R(U)) được định nghĩa chuẩn xác theo giáo trình là gì?**

- **A.** Tập tất cả các thuộc tính cần quản lý của một đối tượng cùng mối liên hệ
- **B.** Danh sách mật khẩu của người quản trị CSDL lưu trữ trên đĩa cứng
- **C.** Tổng số lượng các dòng dữ liệu hiện đang có trong bảng tại thời điểm t
- **D.** Giao diện đồ họa hiển thị các nút bấm điều khiển của ứng dụng web

> **Đáp án đúng:** **A** — *Tập tất cả các thuộc tính cần quản lý của một đối tượng cùng mối liên hệ*
>
> **Giải thích chi tiết:** Lược đồ quan hệ (Relation Schema) là tập tất cả các thuộc tính cần quản lý của một đối tượng cùng với những mối liên hệ giữa chúng, ký hiệu R(U).

---

#### Câu 3 (db-c2-d2-003) — [🟢 DỄ (NHẬN BIẾT)]

**Khái niệm "Tân từ của lược đồ quan hệ" (Predicate) có ý nghĩa bản chất là gì?**

- **A.** Là tốc độ quay của đĩa cứng tính theo đơn vị số vòng trên mỗi phút
- **B.** Là tên của phần mềm diệt virus được cài đặt trên máy chủ cơ sở dữ liệu
- **C.** Là ý nghĩa ngữ nghĩa thực tế và quy tắc logic của lược đồ quan hệ đó
- **D.** Là số lượng các bảng trung gian cần tạo ra khi thiết kế cơ sở dữ liệu

> **Đáp án đúng:** **C** — *Là ý nghĩa ngữ nghĩa thực tế và quy tắc logic của lược đồ quan hệ đó*
>
> **Giải thích chi tiết:** Tân từ của lược đồ quan hệ (Predicate) chính là ý nghĩa ngữ nghĩa của LĐQH (ví dụ: mỗi sinh viên có một mã số duy nhất, xác định họ tên, ngày sinh...).

---

#### Câu 4 (db-c2-d2-004) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Khóa chính (Primary Key) là ...(1)... được người phân tích chọn để cài đặt, còn các khóa tối thiểu khác gọi là ...(2)..."**

- **A.** tập tất cả thuộc tính / khóa đệ quy
- **B.** một siêu khóa bất kỳ / thuộc tính không khóa
- **C.** khóa ngoại tham chiếu / khóa riêng phần
- **D.** một khóa tối thiểu / khóa dự tuyển (Candidate Key)

> **Đáp án đúng:** **D** — *một khóa tối thiểu / khóa dự tuyển (Candidate Key)*
>
> **Giải thích chi tiết:** Khóa chính là MỘT khóa tối thiểu được chọn để cài đặt; các khóa tối thiểu còn lại không được chọn làm khóa chính được gọi là khóa dự tuyển (Candidate Key).

---

#### Câu 5 (db-c2-d2-005) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Nhận định nào sau đây là ĐÚNG khi nói về Khóa ngoại (Foreign Key) trong mô hình quan hệ?**

- **A.** Là tập thuộc tính trong một quan hệ đóng vai trò là khóa của quan hệ khác
- **B.** Khóa ngoại bắt buộc phải có tên gọi hoàn toàn giống với tên của khóa chính
- **C.** Mỗi bảng chỉ được phép có tối đa duy nhất một khóa ngoại tham chiếu
- **D.** Khóa ngoại không bao giờ được phép nhận giá trị rỗng (NULL) trong mọi tình huống

> **Đáp án đúng:** **A** — *Là tập thuộc tính trong một quan hệ đóng vai trò là khóa của quan hệ khác*
>
> **Giải thích chi tiết:** Khóa ngoài/Khóa ngoại là một tập hợp gồm một hay nhiều thuộc tính là khóa của một lược đồ quan hệ khác, giúp liên kết dữ liệu giữa các bảng.

---

#### Câu 6 (db-c2-d2-006) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Phát biểu nào sau đây là SAI khi nói về thuộc tính không khóa (Non-Prime Attribute)?**

- **A.** Một quan hệ có thể có nhiều thuộc tính không khóa để lưu thông tin mô tả đối tượng
- **B.** Thuộc tính không khóa là thuộc tính không tham gia vào bất kỳ khóa nào của bảng
- **C.** Thuộc tính không khóa là thuộc tính có tham gia vào ít nhất một khóa dự tuyển
- **D.** Trong bảng SINHVIEN(MaSV, Hoten, Diachi), HoTen là thuộc tính không khóa

> **Đáp án đúng:** **C** — *Thuộc tính không khóa là thuộc tính có tham gia vào ít nhất một khóa dự tuyển*
>
> **Giải thích chi tiết:** Khẳng định SAI là phương án A, vì thuộc tính tham gia vào khóa dự tuyển được gọi là THUỘC TÍNH KHÓA (Prime Attribute), không phải thuộc tính không khóa.

---

#### Câu 7 (db-c2-d2-007) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho các nhận định sau về Siêu khóa (Super Key):
(I) Mọi quan hệ đều có ít nhất một siêu khóa là tập U chứa tất cả thuộc tính.
(II) Một siêu khóa có thể chứa các thuộc tính dư thừa không cần thiết.
(III) Mọi siêu khóa đều là khóa chính của quan hệ.
Khẳng định nào sau đây là ĐÚNG?**

- **A.** Cả 3 nhận định (I), (II) và (III) đều là những nhận định đúng
- **B.** Chỉ có nhận định (I) và (II) đúng, nhận định (III) là sai
- **C.** Chỉ có duy nhất nhận định (III) là nhận định hoàn toàn chính xác
- **D.** Tất cả các nhận định trên đều là nhận định hoàn toàn sai lệch

> **Đáp án đúng:** **B** — *Chỉ có nhận định (I) và (II) đúng, nhận định (III) là sai*
>
> **Giải thích chi tiết:** Nhận định (I) và (II) đúng. Nhận định (III) sai vì siêu khóa có thể chứa thuộc tính dư thừa, chỉ có siêu khóa tối thiểu mới là khóa, và trong các khóa chỉ chọn 1 khóa làm khóa chính.

---

#### Câu 8 (db-c2-d2-008) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Cho quan hệ R(A, B, C, D) có các khóa tối thiểu là {A, B} và {A, C}. Tập hợp các thuộc tính khóa (Prime Attributes) của R là:**

- **A.** Tập {A, B, C, D} gồm toàn bộ tất cả các thuộc tính của quan hệ R
- **B.** Chỉ gồm tập {A} vì A là thuộc tính chung duy nhất của cả hai khóa
- **C.** Chỉ gồm tập {D} vì D là thuộc tính không tham gia vào bất kỳ khóa nào
- **D.** Tập {A, B, C} vì các thuộc tính này tham gia vào ít nhất một khóa

> **Đáp án đúng:** **D** — *Tập {A, B, C} vì các thuộc tính này tham gia vào ít nhất một khóa*
>
> **Giải thích chi tiết:** Thuộc tính khóa là thuộc tính tham gia vào MỘT KHÓA BẤT KỲ. Hai khóa là {A, B} và {A, C} nên các thuộc tính khóa là A, B, C. Thuộc tính D là không khóa.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay lấy phần giao {A} thay vì lấy phần hợp của các khóa {A, B, C}.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy xác định tập thuộc tính khóa (Prime Attributes) từ nhiều khóa dự tuyển`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục I.4.b*
> - 💡 **Mẹo hóa giải:** Thuộc tính khóa (Prime) = Thuộc tính thuộc ÍT NHẤT 1 khóa ➔ HỢP tất cả các khóa lại: {A, B} ∪ {A, C} = {A, B, C}.

---

#### Câu 9 (db-c2-d2-009) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho bảng HOCBONG gồm 4 dòng dữ liệu. Nếu người dùng chèn thêm một dòng mới có đầy đủ 5 giá trị HOÀN TOÀN TRÙNG LẶP với một dòng đã có, theo lý thuyết tập hợp quan hệ sẽ thế nào?**

- **A.** Toàn bộ bảng dữ liệu HOCBONG sẽ bị xóa sạch khỏi bộ nhớ của máy chủ
- **B.** Quan hệ sẽ tự động tăng số lượng dòng lên thành năm dòng dữ liệu khác nhau
- **C.** Quan hệ hoàn toàn không thay đổi vì tập hợp không chứa các phần tử trùng lặp
- **D.** Bảng HOCBONG sẽ tự động tách thành hai bảng quan hệ con hoàn toàn độc lập

> **Đáp án đúng:** **C** — *Quan hệ hoàn toàn không thay đổi vì tập hợp không chứa các phần tử trùng lặp*
>
> **Giải thích chi tiết:** Theo lưu ý quan trọng của lý thuyết tập hợp trong giáo trình: Thêm vào một dòng (cột) giống với dòng (cột) đã có thì quan hệ KHÔNG THAY ĐỔI.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh thường nghĩ máy tính sẽ lưu thành 5 dòng hoặc báo lỗi chèn trùng.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy bản chất quan hệ là một tập hợp toán học (Set of Tuples) không chấp nhận phần tử trùng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục I.3.b*
> - 💡 **Mẹo hóa giải:** Lý thuyết tập hợp: Tập {1, 2} ∪ {2} = {1, 2} ➔ Thêm dòng trùng lặp thì Quan hệ KHÔNG ĐỔI.

---

#### Câu 10 (db-c2-d2-010) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho quan hệ r(R) với tập thuộc tính U. Giả sử tồn tại hai bộ ti và tj trong r sao cho ti(X) = tj(X) (với ti khác tj). Ta có thể kết luận chắc chắn điều gì về tập thuộc tính X?**

- **A.** Tập thuộc tính X chắc chắn là khóa chính được chọn của quan hệ r
- **B.** Tập thuộc tính X chắc chắn KHÔNG PHẢI là một siêu khóa của quan hệ r
- **C.** Tập thuộc tính X bắt buộc phải chứa toàn bộ tất cả thuộc tính của U
- **D.** Tập thuộc tính X là một khóa ngoại tham chiếu đến một bảng khác

> **Đáp án đúng:** **B** — *Tập thuộc tính X chắc chắn KHÔNG PHẢI là một siêu khóa của quan hệ r*
>
> **Giải thích chi tiết:** Định nghĩa siêu khóa đòi hỏi: với hai bộ khác nhau bất kỳ thì giá trị trên siêu khóa phải khác nhau (ti(SK) ≠ tj(SK)). Nếu tồn tại hai bộ khác nhau có giá trị trùng nhau trên X thì X dứt khoát không thể là siêu khóa.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người lúng túng trước định nghĩa phủ định của siêu khóa theo ngôn ngữ toán học.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy điều kiện phủ định của định nghĩa Siêu khóa (Violation of Super Key constraint)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục I.4.a*
> - 💡 **Mẹo hóa giải:** Trùng giá trị trên 2 dòng khác nhau ➔ X KHÔNG THỂ là Siêu khóa (và do đó không thể là Khóa).

---

### 📌 CHUYÊN ĐỀ 2: ĐẠI SỐ QUAN HỆ CƠ BẢN & TẬP HỢP TƯƠNG THÍCH (Câu 11 - 20)

#### Câu 11 (db-c2-d2-011) — [🟢 DỄ (NHẬN BIẾT)]

**Đại số quan hệ (Relational Algebra) được coi là ưu điểm nổi bật của mô hình quan hệ chủ yếu vì lý do gì?**

- **A.** Tiếp cận công cụ toán học vững chắc để xây dựng ngôn ngữ xử lý dữ liệu
- **B.** Giúp máy tính không bao giờ bị nhiễm virus độc hại từ mạng Internet
- **C.** Làm giảm giá thành mua sắm phần cứng máy chủ trung tâm dữ liệu
- **D.** Cho phép người dùng vẽ được các sơ đồ tư duy đa màu sắc trực quan

> **Đáp án đúng:** **A** — *Tiếp cận công cụ toán học vững chắc để xây dựng ngôn ngữ xử lý dữ liệu*
>
> **Giải thích chi tiết:** Đại số quan hệ là phương pháp mô hình hóa các phép toán trên CSDL quan hệ, kế thừa kết quả toán học chặt chẽ để thiết lập các ngôn ngữ dữ liệu bậc cao như SQL.

---

#### Câu 12 (db-c2-d2-012) — [🟢 DỄ (NHẬN BIẾT)]

**Hai quan hệ r1 và r2 được gọi là "Hai quan hệ rời nhau" khi thỏa mãn điều kiện toán học nào?**

- **A.** Hai quan hệ được tạo ra ở hai năm hoàn toàn khác biệt nhau
- **B.** Số lượng các dòng trong hai quan hệ hoàn toàn không bằng nhau
- **C.** Một quan hệ lưu trên đĩa cứng còn quan hệ kia lưu trên đám mây
- **D.** Chúng không có bất kỳ thuộc tính chung nào (giao của U1 và U2 bằng rỗng)

> **Đáp án đúng:** **D** — *Chúng không có bất kỳ thuộc tính chung nào (giao của U1 và U2 bằng rỗng)*
>
> **Giải thích chi tiết:** Giáo trình định nghĩa: r1, r2 là hai quan hệ rời nhau nếu chúng không có thuộc tính chung (U1 ∩ U2 = ∅).

---

#### Câu 13 (db-c2-d2-013) — [🟢 DỄ (NHẬN BIẾT)]

**Phép chọn σ_C(r) sử dụng biểu thức điều kiện logic C. Kết quả đánh giá của biểu thức C trên mỗi bộ là gì?**

- **A.** Chỉ nhận một trong hai giá trị chân lý logic: True (Đúng) hoặc False (Sai)
- **B.** Là một chuỗi ký tự tự do chứa họ tên của người viết câu truy vấn dữ liệu
- **C.** Là một số nguyên dương thể hiện dung lượng bộ nhớ cần dùng để lọc dòng
- **D.** Là một tệp hình ảnh nén lưu trữ vị trí của các bản ghi trên đĩa cứng

> **Đáp án đúng:** **A** — *Chỉ nhận một trong hai giá trị chân lý logic: True (Đúng) hoặc False (Sai)*
>
> **Giải thích chi tiết:** Điều kiện C là một biểu thức logic trả về True hoặc False. Phép chọn giữ lại các bộ t sao cho C(t) = True.

---

#### Câu 14 (db-c2-d2-014) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Toán tử so sánh {<, ≤, >, ≥} trong điều kiện của phép chọn chỉ áp dụng cho thuộc tính có ...(1)..., nếu không có thứ tự thì chỉ được dùng toán tử ...(2)..."**

- **A.** dung lượng lớn / {EXISTS, NOT}
- **B.** kiểu dữ liệu chuỗi ký tự / {AND, OR}
- **C.** khóa chính tự tăng / {IN, LIKE}
- **D.** miền giá trị có thứ tự / {=, ≠}

> **Đáp án đúng:** **D** — *miền giá trị có thứ tự / {=, ≠}*
>
> **Giải thích chi tiết:** Lưu ý quan trọng trong giáo trình: Toán tử so sánh chỉ áp dụng cho thuộc tính có miền giá trị có thứ tự. Nếu miền không có thứ tự thì chỉ dùng {=, ≠}.

---

#### Câu 15 (db-c2-d2-015) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Nhận định nào sau đây là SAI khi nói về phép hợp (Union — ký hiệu ∪) trong đại số quan hệ?**

- **A.** Hợp của hai quan hệ tương thích là quan hệ gồm các bộ thuộc r1 hoặc thuộc r2
- **B.** Phép hợp có thể thực hiện tùy ý trên hai quan hệ bất kỳ không cần cùng thuộc tính
- **C.** Các bộ dữ liệu hoàn toàn trùng nhau ở cả hai quan hệ chỉ được lấy một lần duy nhất
- **D.** Lược đồ kết quả của phép hợp có tập thuộc tính giống hệt tập thuộc tính ban đầu

> **Đáp án đúng:** **B** — *Phép hợp có thể thực hiện tùy ý trên hai quan hệ bất kỳ không cần cùng thuộc tính*
>
> **Giải thích chi tiết:** Khẳng định SAI là phương án A, vì phép hợp BẮT BUỘC phải thực hiện trên hai quan hệ TƯƠNG THÍCH (có cùng tập thuộc tính U1 = U2).

---

#### Câu 16 (db-c2-d2-016) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho LĐQH Canbo(Maso, Hoten...) và Giangvien(Maso, Hoten...). Biểu thức nào in ra danh sách mã số và họ tên của những người VỪA LÀ cán bộ VỪA LÀ giảng viên?**

- **A.** π_(Maso, Hoten)(Canbo) − π_(Maso, Hoten)(Giangvien) (dùng phép hiệu hai tập)
- **B.** π_(Maso, Hoten)(Canbo) ∪ π_(Maso, Hoten)(Giangvien) (dùng phép hợp hai tập)
- **C.** π_(Maso, Hoten)(Canbo) ∩ π_(Maso, Hoten)(Giangvien) (dùng phép giao hai tập)
- **D.** π_(Maso, Hoten)(Canbo) × π_(Maso, Hoten)(Giangvien) (dùng tích Descartes)

> **Đáp án đúng:** **C** — *π_(Maso, Hoten)(Canbo) ∩ π_(Maso, Hoten)(Giangvien) (dùng phép giao hai tập)*
>
> **Giải thích chi tiết:** Để tìm những đối tượng thỏa mãn cả hai vai trò (vừa là cán bộ vừa là giảng viên), ta sử dụng phép giao (∩) giữa hai tập sau khi đã chiếu đồng nhất thuộc tính Maso, Hoten.

---

#### Câu 17 (db-c2-d2-017) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khi thực hiện chuỗi phép toán π_X(π_Y(R)) với X ⊆ Y ⊆ U, kết quả trả về tương đương với biểu thức nào?**

- **A.** Tương đương với π_Y(R) vì tập Y lớn hơn và bao trùm tập con X
- **B.** Tương đương với π_X(R) vì việc chiếu liên tiếp thu hẹp về tập con X
- **C.** Tương đương với một quan hệ rỗng vì vi phạm cú pháp đại số quan hệ
- **D.** Tương đương với tích Descartes của hai tập thuộc tính X và Y

> **Đáp án đúng:** **B** — *Tương đương với π_X(R) vì việc chiếu liên tiếp thu hẹp về tập con X*
>
> **Giải thích chi tiết:** Theo tính chất của phép chiếu liên tiếp: Nếu X ⊆ Y thì π_X(π_Y(R)) = π_X(R). Chiếu trên tập hẹp hơn X sẽ loại bỏ các cột của Y không nằm trong X.

---

#### Câu 18 (db-c2-d2-018) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho quan hệ r gồm 20 bộ và quan hệ s gồm 15 bộ. Biết r và s tương thích và có 5 bộ chung nhau. Hỏi phép hợp r ∪ s có bao nhiêu bộ?**

- **A.** Có đúng 30 bộ (lấy 20 + 15 − 5 = 30 vì loại bỏ các bộ trùng lặp)
- **B.** Có đúng 35 bộ (lấy 20 + 15 = 35 giữ nguyên toàn bộ các bộ)
- **C.** Có đúng 5 bộ (chỉ lấy các bộ xuất hiện ở cả hai quan hệ)
- **D.** Có đúng 300 bộ (lấy 20 nhân với 15 theo tích Descartes)

> **Đáp án đúng:** **A** — *Có đúng 30 bộ (lấy 20 + 15 − 5 = 30 vì loại bỏ các bộ trùng lặp)*
>
> **Giải thích chi tiết:** Theo nguyên lý bao hàm và loại trừ của lý thuyết tập hợp: |r ∪ s| = |r| + |s| − |r ∩ s| = 20 + 15 − 5 = 30 bộ (vì phép hợp không chứa phần tử trùng lặp).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay cộng trực tiếp 20 + 15 = 35 mà quên mất phép hợp toán học tự động loại bỏ phần tử trùng.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy số lượng bộ của phép hợp (Union cardinality with overlap)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục II.6*
> - 💡 **Mẹo hóa giải:** Số phần tử phép Hợp = |r| + |s| − |r ∩ s| = 20 + 15 − 5 = 30 bộ.

---

#### Câu 19 (db-c2-d2-019) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho biểu thức logic C = (A = 5 ∧ B = 10). Biểu thức phép chọn nào sau đây cho kết quả HOÀN TOÀN TƯƠNG ĐƯƠNG với σ_C(R)?**

- **A.** σ_(A=5)(R) − σ_(B=10)(R) (hiệu của phép chọn thứ nhất cho thứ hai)
- **B.** σ_(A=5)(R) ∪ σ_(B=10)(R) (hợp của hai phép chọn độc lập từng điều kiện)
- **C.** π_(A=5)(R) ∩ π_(B=10)(R) (giao của hai phép chiếu trên từng điều kiện)
- **D.** σ_(A=5)(σ_(B=10)(R)) hoặc σ_(B=10)(σ_(A=5)(R)) (tổ hợp phép chọn liên tiếp)

> **Đáp án đúng:** **D** — *σ_(A=5)(σ_(B=10)(R)) hoặc σ_(B=10)(σ_(A=5)(R)) (tổ hợp phép chọn liên tiếp)*
>
> **Giải thích chi tiết:** Phép chọn với điều kiện liên kết AND (∧): σ_(C1 ∧ C2)(R) hoàn toàn tương đương với việc thực hiện liên tiếp hai phép chọn σ_C1(σ_C2(R)) nhờ tính giao hoán.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nhầm phép AND với phép Hợp (∪) hoặc phép Trừ (−).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy phân rã điều kiện liên kết AND trong phép chọn đại số quan hệ`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục II.2.a*
> - 💡 **Mẹo hóa giải:** Quy tắc vàng: σ_(C1 ∧ C2)(R) ≡ σ_C1(σ_C2(R)) ≡ σ_C2(σ_C1(R)).

---

#### Câu 20 (db-c2-d2-020) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Xét biểu thức: σ_C(π_X(R)) và π_X(σ_C(R)). Điều kiện cần và đủ để hai biểu thức này tương đương và có thể hoán vị an toàn là gì?**

- **A.** Quan hệ R bắt buộc phải có số lượng dòng nhỏ hơn mười nghìn bản ghi
- **B.** Tập thuộc tính X bắt buộc phải chứa toàn bộ khóa chính của quan hệ R
- **C.** Tất cả các thuộc tính tham gia trong điều kiện C đều phải thuộc tập thuộc tính X
- **D.** Điều kiện logic C bắt buộc phải là phép so sánh bằng không được dùng lớn hơn

> **Đáp án đúng:** **C** — *Tất cả các thuộc tính tham gia trong điều kiện C đều phải thuộc tập thuộc tính X*
>
> **Giải thích chi tiết:** Để đẩy phép chọn qua phép chiếu: σ_C(π_X(R)) = π_X(σ_C(R)), điều kiện bắt buộc là biểu thức C chỉ được sử dụng các thuộc tính có mặt trong tập thuộc tính X (nếu C dùng thuộc tính ngoài X thì sau khi chiếu π_X sẽ không còn thuộc tính đó để kiểm tra C).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ phép chọn và phép chiếu luôn giao hoán tự do trong mọi hoàn cảnh.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy điều kiện tương đương đẩy phép chọn qua phép chiếu (Pushdown Selection predicate)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục II.2 & II.3*
> - 💡 **Mẹo hóa giải:** Đẩy phép chọn qua phép chiếu: Thuộc tính trong C BẮT BUỘC phải nằm trong X.

---

### 📌 CHUYÊN ĐỀ 3: PHÉP JOIN, PHÉP CHIA & TRUY VẤN BÀI TẬP CSDL (Câu 21 - 30)

#### Câu 21 (db-c2-d2-021) — [🟢 DỄ (NHẬN BIẾT)]

**Khi nào một phép kết nối điều kiện (θ-Join) được gọi là "Phép kết nối bằng" (Equijoin)?**

- **A.** Khi toán tử so sánh θ được sử dụng chính là toán tử so sánh bằng (=)
- **B.** Khi số lượng thuộc tính của hai quan hệ tham gia bằng nhau tuyệt đối
- **C.** Khi số lượng các dòng dữ liệu của hai quan hệ bằng nhau hoàn toàn
- **D.** Khi tên gọi của hai quan hệ tham gia hoàn toàn trùng khớp với nhau

> **Đáp án đúng:** **A** — *Khi toán tử so sánh θ được sử dụng chính là toán tử so sánh bằng (=)*
>
> **Giải thích chi tiết:** Giáo trình nêu rõ: Nếu toán tử so sánh θ là toán tử so sánh bằng "=" thì gọi là kết nối bằng (Equijoin).

---

#### Câu 22 (db-c2-d2-022) — [🟢 DỄ (NHẬN BIẾT)]

**Ý nghĩa quan trọng bậc nhất của Phép kết nối (Join) trong mô hình cơ sở dữ liệu quan hệ là gì?**

- **A.** Tự động tăng tốc độ tính toán của card đồ họa khi kết xuất biểu đồ
- **B.** Cho phép liên kết và truy xuất thông tin giữa các quan hệ trong CSDL
- **C.** Ngăn chặn người dùng xóa dữ liệu bảng quan trọng ra khỏi máy chủ lưu
- **D.** Tự động sao lưu dữ liệu máy chủ sang máy in để in ấn tài liệu giấy

> **Đáp án đúng:** **B** — *Cho phép liên kết và truy xuất thông tin giữa các quan hệ trong CSDL*
>
> **Giải thích chi tiết:** Ý nghĩa của phép kết nối: Dùng để kết hợp hai bộ có liên quan thuộc hai quan hệ khác nhau thành một bộ mới, cho phép xử lý mối liên quan giữa các quan hệ trong CSDL.

---

#### Câu 23 (db-c2-d2-023) — [🟢 DỄ (NHẬN BIẾT)]

**Cho CSDL: Hanghoa(MaHG, TenHG, DVT, Dongia...) và Chitiet_HD(SoHD, MaHG, Soluong, Giaban). Thuộc tính chung dùng để kết nối tự nhiên hai bảng này là gì?**

- **A.** Thuộc tính Dongia xuất hiện ở bảng Hanghoa và bảng Khach
- **B.** Thuộc tính SoHD xuất hiện ở bảng Chitiet_HD và bảng Hoadon
- **C.** Thuộc tính MaHG xuất hiện ở cả hai bảng Hanghoa và Chitiet_HD
- **D.** Thuộc tính TenHG chỉ xuất hiện duy nhất ở bảng Hanghoa

> **Đáp án đúng:** **C** — *Thuộc tính MaHG xuất hiện ở cả hai bảng Hanghoa và Chitiet_HD*
>
> **Giải thích chi tiết:** Hai bảng Hanghoa và Chitiet_HD có thuộc tính chung duy nhất là MaHG, đây là thuộc tính dùng để kết nối tự nhiên.

---

#### Câu 24 (db-c2-d2-024) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Phép kết nối tự nhiên r * s thực hiện kết nối bằng tại các thuộc tính trùng tên, và ...(1)... trong hai thuộc tính trùng tên sẽ bị ...(2)... khỏi kết quả để tránh dư thừa."**

- **A.** không có cột nào (xóa sạch toàn bộ những)
- **B.** toàn bộ nguyên vẹn (giữ lại vĩnh viễn các)
- **C.** chính xác hai cái (sao chép vô thời hạn)
- **D.** đúng một đại diện (loại bỏ hoàn toàn các)

> **Đáp án đúng:** **D** — *đúng một đại diện (loại bỏ hoàn toàn các)*
>
> **Giải thích chi tiết:** Giáo trình khẳng định: Một trong hai thuộc tính trùng tên bị loại bỏ khỏi kết quả để tránh dư thừa dữ liệu.

---

#### Câu 25 (db-c2-d2-025) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho CSDL Quản lý bán hàng. Biểu thức nào dưới đây in ra Tên hàng hóa (TenHG) và Giá bán (Giaban) thực tế trong các chi tiết hóa đơn?**

- **A.** σ_(TenHG = Giaban)(Hanghoa * Chitiet_HD) (chọn các dòng có tên bằng giá bán)
- **B.** π_(TenHG, Giaban)(Hanghoa × Chitiet_HD) (nhân tích Descartes và chiếu lấy cột)
- **C.** π_(TenHG, Giaban)(Hanghoa * Chitiet_HD) (kết nối tự nhiên và chiếu thuộc tính)
- **D.** Hanghoa ÷ π_(Giaban)(Chitiet_HD) (thực hiện phép chia đại số quan hệ)

> **Đáp án đúng:** **C** — *π_(TenHG, Giaban)(Hanghoa * Chitiet_HD) (kết nối tự nhiên và chiếu thuộc tính)*
>
> **Giải thích chi tiết:** Kết nối tự nhiên Hanghoa * Chitiet_HD sẽ ghép nối thông tin hàng hóa với chi tiết hóa đơn theo MaHG, sau đó dùng phép chiếu π để lấy TenHG và Giaban.

---

#### Câu 26 (db-c2-d2-026) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho các nhận định sau về Phép chia (r ÷ s):
(I) Lược đồ của quan hệ s phải là lược đồ con của r (S ⊂ R).
(II) Kết quả của r ÷ s là quan hệ trên lược đồ R − S.
(III) Phép chia đòi hỏi hai quan hệ r và s phải tương thích với nhau.
Khẳng định nào sau đây là ĐÚNG?**

- **A.** Chỉ có nhận định (I) và (II) đúng, nhận định (III) là sai
- **B.** Cả ba nhận định (I), (II) và (III) đều là những nhận định đúng
- **C.** Chỉ có duy nhất nhận định (III) là nhận định hoàn toàn chính xác
- **D.** Tất cả các nhận định trên đều là nhận định hoàn toàn sai lệch

> **Đáp án đúng:** **A** — *Chỉ có nhận định (I) và (II) đúng, nhận định (III) là sai*
>
> **Giải thích chi tiết:** Nhận định (I) và (II) đúng. Nhận định (III) sai vì phép chia không đòi hỏi hai quan hệ tương thích, mà S là lược đồ con thực sự của R (S ⊂ R).

---

#### Câu 27 (db-c2-d2-027) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho CSDL Bán hàng gồm Hoadon(SoHD, Ngaylap, MaKH, Trigia). Biểu thức nào tìm các hóa đơn được lập trong năm 2024 có trị giá trên 10 triệu đồng?**

- **A.** π_(SoHD, Ngaylap)(σ_(Trigia > 10000000)(Hoadon))
- **B.** σ_(Year(Ngaylap) = 2024 ∧ Trigia > 10000000)(Hoadon)
- **C.** σ_(Year(Ngaylap) = 2024)(Hoadon) ÷ σ_(Trigia)(Hoadon)
- **D.** σ_(Year(Ngaylap) = 2024)(Hoadon) ∪ σ_(Trigia)(Hoadon)

> **Đáp án đúng:** **B** — *σ_(Year(Ngaylap) = 2024 ∧ Trigia > 10000000)(Hoadon)*
>
> **Giải thích chi tiết:** Dùng phép chọn σ với điều kiện kết hợp AND (∧) cho cả khoảng thời gian lập hóa đơn trong năm 2024 và điều kiện trị giá hóa đơn > 10.000.000.

---

#### Câu 28 (db-c2-d2-028) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho quan hệ R(A, B) có 4 bộ: (1, x), (1, y), (2, x), (3, y) và quan hệ S(B) có 2 bộ: (x), (y). Kết quả của phép chia R ÷ S là quan hệ trên thuộc tính A gồm những bộ nào?**

- **A.** Là quan hệ rỗng không có bộ nào vì phép chia bị lẻ số dòng
- **B.** Gồm cả 3 bộ là (1), (2), (3) vì các giá trị này đều có trong R
- **C.** Gồm hai bộ là (2) và (3) vì đây là các bộ có giá trị đơn lẻ
- **D.** Chỉ gồm duy nhất bộ (1) vì chỉ có A = 1 mới đi kèm với cả x và y

> **Đáp án đúng:** **D** — *Chỉ gồm duy nhất bộ (1) vì chỉ có A = 1 mới đi kèm với cả x và y*
>
> **Giải thích chi tiết:** Phép chia tìm các giá trị A đi kèm với TẤT CẢ các giá trị B trong S ({x, y}). Chỉ có A = 1 đi kèm với cả x và y ((1, x) và (1, y) đều ∈ R). A = 2 chỉ có x, A = 3 chỉ có y nên bị loại.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn tất cả các giá trị của A {1, 2, 3} mà không hiểu bản chất lượng từ "VỚI MỌI".
> - 🎯 **Từ khóa gài bẫy:** `Bẫy tính toán kết quả số học cụ thể của Phép chia đại số quan hệ (Division)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục II.10*
> - 💡 **Mẹo hóa giải:** Phép chia R(A, B) ÷ S(B): Giá trị A nào đi kèm ĐỦ TẤT CẢ các giá trị B của S thì mới được chọn.

---

#### Câu 29 (db-c2-d2-029) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Trong CSDL Bán hàng, để tìm các khách hàng mua TẤT CẢ các mặt hàng có trong cửa hàng, biểu thức ĐSQH chuẩn mực nào sau đây được áp dụng?**

- **A.** π_(MaKH, MaHG)(Hoadon * Chitiet_HD) * π_(MaHG)(Hanghoa)
- **B.** π_(MaKH, MaHG)(Hoadon * Chitiet_HD) ÷ π_(MaHG)(Hanghoa)
- **C.** π_(MaKH, MaHG)(Hoadon * Chitiet_HD) − π_(MaHG)(Hanghoa)
- **D.** π_(MaKH, MaHG)(Hoadon * Chitiet_HD) ∪ π_(MaHG)(Hanghoa)

> **Đáp án đúng:** **B** — *π_(MaKH, MaHG)(Hoadon * Chitiet_HD) ÷ π_(MaHG)(Hanghoa)*
>
> **Giải thích chi tiết:** Để tìm khách hàng mua TẤT CẢ mặt hàng: Ta lấy bảng lưu việc mua hàng của khách π_(MaKH, MaHG)(Hoadon * Chitiet_HD) đem CHIA cho toàn bộ tập mã hàng có trong cửa hàng π_MaHG(Hanghoa).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm lẫn giữa phép chia (÷) và phép kết nối tự nhiên (*) khi đọc lướt biểu thức.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy biểu thức đại số quan hệ phức hợp cho bài toán mua tất cả mặt hàng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục II.10 & IV.2*
> - 💡 **Mẹo hóa giải:** Khách mua TẤT CẢ mặt hàng = (Bảng_Khách_Mua_Hàng) ÷ (Toàn_Bộ_Mặt_Hàng).

---

#### Câu 30 (db-c2-d2-030) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Khi thực hiện phép kết nối tự nhiên giữa hai quan hệ R và S. Nếu hai quan hệ này HOÀN TOÀN KHÔNG CÓ thuộc tính nào trùng tên (U_R ∩ U_S = ∅), kết quả trả về là gì?**

- **A.** Kết quả trả về là một quan hệ rỗng không chứa bất kỳ thuộc tính nào
- **B.** Hệ quản trị CSDL báo lỗi nghiêm trọng vì thiếu thuộc tính kết nối bằng
- **C.** Phép kết nối tự nhiên tự động thoái hóa trở thành phép tích Descartes R × S
- **D.** Hệ thống tự động chọn thuộc tính đầu tiên của mỗi bảng để ép kết nối

> **Đáp án đúng:** **C** — *Phép kết nối tự nhiên tự động thoái hóa trở thành phép tích Descartes R × S*
>
> **Giải thích chi tiết:** Khi hai quan hệ rời nhau (không có thuộc tính chung), điều kiện kết nối bằng tại thuộc tính trùng tên không tồn tại, do đó phép Natural Join thoái hóa thành phép tích Descartes thuần túy R × S.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ hệ thống sẽ báo lỗi hoặc trả về rỗng.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy thoái hóa của Phép kết nối tự nhiên khi hai quan hệ rời nhau`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục II.4 & II.5*
> - 💡 **Mẹo hóa giải:** Hai quan hệ KHÔNG CÓ cột chung ➔ Natural Join (*) thoái hóa thành Tích Descartes (×).

---

### 📌 CHUYÊN ĐỀ 4: QUY TRÌNH 7 BƯỚC CHUYỂN ĐỔI ERD SANG MÔ HÌNH QUAN HỆ (Câu 31 - 40)

#### Câu 31 (db-c2-d2-031) — [🟢 DỄ (NHẬN BIẾT)]

**Mục đích cốt lõi của quy trình 7 bước chuyển đổi ERD sang quan hệ là gì?**

- **A.** Chuyển đổi thiết kế CSDL mức quan niệm sang mức logic để cài đặt vào RDBMS
- **B.** Tự động chuyển đổi mã nguồn chương trình từ ngôn ngữ C sang ngôn ngữ Python
- **C.** Tính toán chi phí tiền điện hàng tháng cho hệ thống máy chủ cơ sở dữ liệu
- **D.** Xóa sạch các ràng buộc nghiệp vụ để người dùng nhập liệu tự do hơn

> **Đáp án đúng:** **A** — *Chuyển đổi thiết kế CSDL mức quan niệm sang mức logic để cài đặt vào RDBMS*
>
> **Giải thích chi tiết:** Bản chất của quá trình: từ sơ đồ ERD đã xây dựng ở mức quan niệm, chuyển đổi thành tập các lược đồ quan hệ ở mức logic để cài đặt vào hệ quản trị CSDL quan hệ.

---

#### Câu 32 (db-c2-d2-032) — [🟢 DỄ (NHẬN BIẾT)]

**Khi chuyển đổi một thuộc tính đơn (Simple attribute) của thực thể thường trong Bước 1, kết quả là gì?**

- **A.** Bị xóa bỏ khỏi lược đồ quan hệ nếu thuộc tính đó không phải là số
- **B.** Bắt buộc phải tách thành một bảng quan hệ riêng biệt có khóa ngoại
- **C.** Tự động biến đổi thành khóa chính của bảng quan hệ đó trong CSDL
- **D.** Chuyển trực tiếp thành một thuộc tính thông thường của quan hệ tương ứng

> **Đáp án đúng:** **D** — *Chuyển trực tiếp thành một thuộc tính thông thường của quan hệ tương ứng*
>
> **Giải thích chi tiết:** Bước 1a: Thuộc tính đơn (Simple attribute) chuyển trực tiếp thành thuộc tính của quan hệ.

---

#### Câu 33 (db-c2-d2-033) — [🟢 DỄ (NHẬN BIẾT)]

**Trong quy trình chuyển đổi, một Thực thể thường (Regular entity) trong ERD sẽ được chuyển đổi thành cái gì?**

- **A.** Được chuyển đổi thành một bảng quan hệ (Relation) tương ứng trong RDBMS
- **B.** Được chuyển đổi thành một dòng dữ liệu (Tuple) duy nhất trong bảng hệ thống
- **C.** Được chuyển đổi thành một file văn bản thô lưu trữ trên ổ đĩa mềm máy tính
- **D.** Được chuyển đổi thành một câu lệnh truy vấn điều khiển truy cập mạng

> **Đáp án đúng:** **A** — *Được chuyển đổi thành một bảng quan hệ (Relation) tương ứng trong RDBMS*
>
> **Giải thích chi tiết:** Mỗi kiểu thực thể thường trong sơ đồ ERD được chuyển đổi thành một bảng quan hệ tương ứng trong CSDL quan hệ.

---

#### Câu 34 (db-c2-d2-034) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Khi chuyển đổi thực thể yếu ở Bước 2, khóa ngoại tham chiếu đến thực thể mạnh sở hữu nó ...(1)... mang giá trị ...(2)..."**

- **A.** bắt buộc phải / âm
- **B.** không được phép / NULL (rỗng)
- **C.** tùy ý có thể / chuỗi chữ
- **D.** luôn luôn / số 0

> **Đáp án đúng:** **B** — *không được phép / NULL (rỗng)*
>
> **Giải thích chi tiết:** Lưu ý bắt buộc trong giáo trình Mục III.2: Khóa ngoại tham chiếu đến thực thể mạnh KHÔNG ĐƯỢC NULL, vì thực thể yếu không thể tồn tại độc lập nếu thiếu thực thể mạnh định danh.

---

#### Câu 35 (db-c2-d2-035) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khi chuyển đổi mối quan hệ nhiều - nhiều (M:N) có thuộc tính riêng (ví dụ: SoLuong, DonGia) sang mô hình quan hệ, thuộc tính riêng đó được đặt ở đâu?**

- **A.** Được lưu vào một file text riêng biệt đặt tại máy chủ của người quản trị
- **B.** Được đưa vào cả hai bảng thực thể ban đầu để tránh bị mất mát dữ liệu
- **C.** Bị loại bỏ hoàn toàn vì mô hình quan hệ cấm mối quan hệ có thuộc tính
- **D.** Được đưa vào quan hệ kết hợp mới được tạo ra ở giữa hai thực thể

> **Đáp án đúng:** **D** — *Được đưa vào quan hệ kết hợp mới được tạo ra ở giữa hai thực thể*
>
> **Giải thích chi tiết:** Khi chuyển đổi quan hệ M:N, quan hệ mới được tạo ra sẽ chứa các khóa ngoại tham chiếu hai bên, và TẤT CẢ thuộc tính riêng của mối quan hệ M:N đều được đưa vào quan hệ mới này.

---

#### Câu 36 (db-c2-d2-036) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Phát biểu nào sau đây là SAI khi nói về quy tắc chuyển đổi mối quan hệ một - một (1:1) hai ngôi?**

- **A.** Tất cả thuộc tính của mối quan hệ 1:1 đều được mang sang phía tùy chọn
- **B.** Khóa chính ở phía bắt buộc sẽ trở thành khóa ngoại ở phía tùy chọn
- **C.** Khóa chính ở phía tùy chọn bắt buộc phải làm khóa ngoại ở phía bắt buộc
- **D.** Mối quan hệ 1:1 không bắt buộc phải tạo thêm một bảng quan hệ thứ ba

> **Đáp án đúng:** **C** — *Khóa chính ở phía tùy chọn bắt buộc phải làm khóa ngoại ở phía bắt buộc*
>
> **Giải thích chi tiết:** Khẳng định SAI là phương án A. Quy tắc chuẩn là: Khóa chính ở phía BẮT BUỘC làm khóa ngoại ở phía TÙY CHỌN (chứ không phải ngược lại, nhằm tránh giá trị NULL ở phía bắt buộc).

---

#### Câu 37 (db-c2-d2-037) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong mối quan hệ một ngôi nhiều - nhiều (M:N đệ quy) của một kiểu thực thể, quy trình chuyển đổi ở Bước 5 tạo ra bao nhiêu quan hệ?**

- **A.** Không thể chuyển đổi được vì mô hình quan hệ từ chối quan hệ đệ quy M:N
- **B.** Chỉ tạo ra duy nhất 1 quan hệ và thêm hai khóa ngoại nằm cùng trên bảng đó
- **C.** Tạo ra 3 quan hệ độc lập để tránh sự trùng lặp dữ liệu giữa các thế hệ
- **D.** Tạo ra đúng 2 quan hệ: 1 cho thực thể đó và 1 quan hệ kết hợp chứa 2 khóa ngoại

> **Đáp án đúng:** **D** — *Tạo ra đúng 2 quan hệ: 1 cho thực thể đó và 1 quan hệ kết hợp chứa 2 khóa ngoại*
>
> **Giải thích chi tiết:** Bước 5b: Với quan hệ một ngôi M:N đệ quy, ta tạo 2 quan hệ: (1) quan hệ cho kiểu thực thể đó; (2) quan hệ kết hợp gồm 2 thuộc tính là khóa ngoại cùng tham chiếu về khóa chính của (1).

---

#### Câu 38 (db-c2-d2-038) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Khi chuyển đổi quan hệ Cha/Con (Supertype/Subtype) gồm EMPLOYEE (cha) và 3 con: HOURLY, SALARIED, CONSULTANT. Phát biểu nào sau đây phản ánh ĐÚNG cấu trúc quan hệ?**

- **A.** Tạo 4 bảng quan hệ, bảng cha chứa thuộc tính chung, các bảng con chứa thuộc tính riêng
- **B.** Chỉ tạo duy nhất 3 bảng con, toàn bộ thông tin của bảng cha bị xóa bỏ hoàn toàn
- **C.** Chỉ tạo duy nhất 1 bảng cha khổng lồ chứa toàn bộ tất cả thuộc tính của các con
- **D.** Tạo 2 bảng quan hệ và dùng phép tích Descartes để kết nối dữ liệu khi cần

> **Đáp án đúng:** **A** — *Tạo 4 bảng quan hệ, bảng cha chứa thuộc tính chung, các bảng con chứa thuộc tính riêng*
>
> **Giải thích chi tiết:** Bước 7: Tạo ra các quan hệ cho cả thực thể cha và thực thể con (ở đây là 1 cha + 3 con = 4 bảng). Thuộc tính chung và danh hiệu phân biệt đặt ở bảng cha, thuộc tính riêng đặt ở từng bảng con.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn cách gộp chung thành 1 bảng lớn duy nhất (chứa nhiều NULL) hoặc chỉ tạo bảng con.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy số lượng bảng và cấu trúc thuộc tính khi chuyển đổi Supertype/Subtype chuẩn`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục III.6.a*
> - 💡 **Mẹo hóa giải:** Chuẩn giáo trình Bước 7 = Tạo quan hệ cho CẢ CHA VÀ CÁC CON (1 cha + n con), liên kết 1:1 qua PK/FK.

---

#### Câu 39 (db-c2-d2-039) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Trong mối quan hệ ba ngôi giữa PATIENT, PHYSICIAN và TREATMENT có tạo thực thể kết hợp PATIENT_TREATMENT. Khi nào khóa chính của PATIENT_TREATMENT là tổ hợp (Patient_ID, Physician_ID, Treatment_Code, Date, Time)?**

- **A.** Khi hệ thống máy chủ bệnh viện bị sự cố và cần phục hồi toàn bộ thông tin bệnh án người bệnh
- **B.** Khi bác sĩ điều trị yêu cầu bệnh nhân phải thanh toán toàn bộ chi phí khám chữa bệnh định kỳ
- **C.** Khi một bệnh nhân có thể được cùng một bác sĩ điều trị cùng một ca nhiều lần ở các thời điểm
- **D.** Khi bệnh nhân chỉ được phép đăng ký khám bệnh với một bác sĩ duy nhất trong toàn bộ quá trình

> **Đáp án đúng:** **C** — *Khi một bệnh nhân có thể được cùng một bác sĩ điều trị cùng một ca nhiều lần ở các thời điểm*
>
> **Giải thích chi tiết:** Nếu một bệnh nhân có thể khám cùng một bác sĩ với cùng một liệu trình nhiều lần, thì chỉ 3 khóa ngoại là chưa đủ phân biệt các lần khám khác nhau. Bắt buộc phải đưa thêm Date và Time vào khóa chính để đảm bảo tính duy nhất.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ khóa chính của quan hệ ba ngôi luôn cố định chỉ là 3 khóa ngoại ghép lại.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy mở rộng khóa chính quan hệ ba ngôi khi có yếu tố thời gian lặp lại`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục III.5.b*
> - 💡 **Mẹo hóa giải:** Nếu sự kiện có thể lặp lại nhiều lần ➔ Bắt buộc phải bổ sung thuộc tính thời gian (Date, Time) vào Khóa chính.

---

#### Câu 40 (db-c2-d2-040) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống tổng hợp: Cho sơ đồ ERD có thực thể KHOA (1) và thực thể LOP (N). Nếu người thiết kế đặt nhầm khóa ngoại MaLop vào bảng KHOA thì hậu quả nghiêm trọng nào sẽ xảy ra?**

- **A.** Toàn bộ các máy tính trong phòng máy của khoa sẽ bị sập nguồn điện lưới ngay tức khắc
- **B.** Một Khoa sẽ chỉ có thể quản lý tối đa được duy nhất một Lớp học, làm sai lệch mô hình nghiệp vụ
- **C.** Hệ quản trị CSDL tự động xóa bỏ toàn bộ sinh viên đang theo học tại các lớp của khoa đó
- **D.** Không có hậu quả nào vì đặt khóa ngoại ở bảng nào trong quan hệ 1:N cũng cho kết quả tương đương

> **Đáp án đúng:** **B** — *Một Khoa sẽ chỉ có thể quản lý tối đa được duy nhất một Lớp học, làm sai lệch mô hình nghiệp vụ*
>
> **Giải thích chi tiết:** Trong quan hệ 1:N (1 Khoa có nhiều Lớp), nếu đặt MaLop vào KHOA thì mỗi dòng Khoa chỉ lưu được 1 MaLop (vì ô giá trị nguyên tố 1NF), dẫn đến một Khoa chỉ có tối đa 1 Lớp, làm phá vỡ hoàn toàn nghiệp vụ 1:N.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ đặt khóa ngoại ở bảng nào cũng được, hoặc không lường trước hậu quả vi phạm 1NF.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy hậu quả nghiệp vụ khi đặt sai vị trí khóa ngoại trong mối quan hệ một - nhiều`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 2, Mục III.3*
> - 💡 **Mẹo hóa giải:** Quan hệ 1:N ➔ BẮT BUỘC đặt FK ở phía NHIỀU (N). Nếu đặt ở phía 1 ➔ Biến quan hệ thành 1:1, sai lệch bản chất.

---

### 📊 BẢNG ĐÁP ÁN NHANH — BỘ ĐỀ SỐ 2 (MÃ ĐỀ: DB-C2-D2)

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **1** | `B` | **11** | `A` | **21** | `A` | **31** | `A` |
| **2** | `A` | **12** | `D` | **22** | `B` | **32** | `D` |
| **3** | `C` | **13** | `A` | **23** | `C` | **33** | `A` |
| **4** | `D` | **14** | `D` | **24** | `D` | **34** | `B` |
| **5** | `A` | **15** | `B` | **25** | `C` | **35** | `D` |
| **6** | `C` | **16** | `C` | **26** | `A` | **36** | `C` |
| **7** | `B` | **17** | `B` | **27** | `B` | **37** | `D` |
| **8** | `D` | **18** | `A` | **28** | `D` | **38** | `A` |
| **9** | `C` | **19** | `D` | **29** | `B` | **39** | `C` |
| **10** | `B` | **20** | `C` | **30** | `C` | **40** | `B` |


