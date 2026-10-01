# TỔNG HỢP 2 BỘ ĐỀ THI TRẮC NGHIỆM CHUẨN MỰC
# MÔN HỌC: HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
## CHƯƠNG IV: RÀNG BUỘC TOÀN VẸN (INTEGRITY CONSTRAINTS)

> **Thông tin giáo trình:** Giáo trình Hệ Cơ Sở Dữ Liệu — Chương IV: Ràng buộc toàn vẹn.
> **Quy mô:** 2 Bộ đề thi độc lập (Đề 1 & Đề 2), 40 câu hỏi trắc nghiệm chuẩn / đề.
> **Tổng số câu hỏi:** 80 câu hỏi học thuật chất lượng cao (db-c4-d1-001 đến db-c4-d2-040).
> **Phân bổ độ khó chuẩn mực (30% - 40% - 30%):**
> - 🟢 **Dễ (Nhận biết):** 12 câu / đề (30%)
> - 🟡 **Trung bình (Thông hiểu):** 16 câu / đề (40%)
> - 🔴 **Khó / Bẫy (Vận dụng cao):** 12 câu / đề (30%) — 100% có bẫy tư duy, trickDetails ({ whyTrapped, trickWord, citation, tip }).
> **Cân bằng đáp án:** Chính xác 10 A, 10 B, 10 C, 10 D (25% mỗi đáp án) trên từng đề.
> **Kiểm định kỹ thuật:** Độ lệch chiều dài phương án $\Delta L = L_{max} - L_{min} \le 15$ ký tự trên toàn bộ 80 câu.
> **Đa dạng dạng câu hỏi:** Chọn nhận định SAI, Điền khuyết (...), Chùm mệnh đề I-II-III, Biểu diễn Logic vị từ tương đương, Tình huống CSDL & Bảng Tầm Ảnh Hưởng, Khái niệm & Cây phả hệ 8 loại RBTV.



## BỘ ĐỀ SỐ 1 (MÃ ĐỀ: db-c4-d1)

*Bộ đề kiểm tra toàn diện kiến thức Chương IV: Bản chất RBTV & 3 yếu tố cốt lõi, RBTV trên 1 quan hệ, RBTV trên nhiều quan hệ, Kỹ thuật Bảng Tầm Ảnh Hưởng và Biểu thức Logic vị từ.*

---

### 📌 CHUYÊN ĐỀ 1: KHÁI NIỆM RBTV, 3 YẾU TỐ & KỸ THUẬT BẢNG TẦM ẢNH HƯỞNG (Câu 1 - 10)

#### Câu 1 (db-c4-d1-001) — [🟢 DỄ (NHẬN BIẾT)]

**Khái niệm Ràng buộc toàn vẹn (RBTV) trong cơ sở dữ liệu được định nghĩa chuẩn xác là gì?**

- **A.** Là các điều kiện bất biến mà mọi đối tượng CSDL phải thỏa mãn ở mọi thời điểm
- **B.** Là thuật toán nén dữ liệu giúp giảm thiểu không gian lưu trữ vật lý của ổ đĩa
- **C.** Là phương pháp mã hóa đường truyền mạng giữa máy trạm khách và máy chủ CSDL
- **D.** Là bảng sao lưu dự phòng tạm thời được tự động tạo ra khi có sự cố mất điện

> **Đáp án đúng:** **A** — *Là các điều kiện bất biến mà mọi đối tượng CSDL phải thỏa mãn ở mọi thời điểm*
>
> **Giải thích chi tiết:** Giáo trình nêu rõ: RBTV là những điều kiện bất biến mà các đối tượng của CSDL phải thỏa mãn ở bất kỳ thời điểm nào. Trong thực tế, RBTV chính là các quy tắc quản lý (business rules).

---

#### Câu 2 (db-c4-d1-002) — [🟢 DỄ (NHẬN BIẾT)]

**Một Ràng buộc toàn vẹn (RBTV) hoàn chỉnh trong cơ sở dữ liệu được xác định bởi 3 yếu tố cốt lõi nào?**

- **A.** Bao gồm 3 yếu tố: Mã nguồn chương trình, Tên bảng dữ liệu và Cổng kết nối mạng
- **B.** Bao gồm 3 yếu tố: Điều kiện (Condition), Bối cảnh (Context) và Tầm ảnh hưởng
- **C.** Bao gồm 3 yếu tố: Dung lượng bộ nhớ RAM, Tốc độ xung nhịp CPU và Ổ đĩa cứng SSD
- **D.** Bao gồm 3 yếu tố: Tài khoản quản trị, Mật khẩu người dùng và Quyền hạn truy cập

> **Đáp án đúng:** **B** — *Bao gồm 3 yếu tố: Điều kiện (Condition), Bối cảnh (Context) và Tầm ảnh hưởng*
>
> **Giải thích chi tiết:** Một RBTV được xác định hoàn chỉnh bởi 3 yếu tố: a) Điều kiện (quy tắc logic); b) Bối cảnh (các bảng có hiệu lực); c) Tầm ảnh hưởng (thời điểm cần kiểm tra khi Thêm, Sửa, Xóa).

---

#### Câu 3 (db-c4-d1-003) — [🟢 DỄ (NHẬN BIẾT)]

**Trong Bảng Tầm Ảnh Hưởng của một ràng buộc toàn vẹn, ký hiệu dấu trừ ("-") mang ý nghĩa kỹ thuật gì?**

- **A.** Thao tác bị cấm hoàn toàn và hệ quản trị CSDL sẽ từ chối quyền thực thi lệnh
- **B.** Bắt buộc hệ thống phải dừng lại và kích hoạt thủ tục kiểm tra toàn bộ bảng
- **C.** Không cần kiểm tra RBTV vì thao tác này chắc chắn không làm vi phạm quy tắc
- **D.** Dữ liệu vừa cập nhật sẽ tự động bị hệ thống trừ đi một đơn vị giá trị số học

> **Đáp án đúng:** **C** — *Không cần kiểm tra RBTV vì thao tác này chắc chắn không làm vi phạm quy tắc*
>
> **Giải thích chi tiết:** Ký hiệu "-" trong Bảng Tầm Ảnh Hưởng có nghĩa là không cần kiểm tra, thao tác cập nhật đó chắc chắn an toàn và không thể vi phạm RBTV, giúp tối ưu hóa hiệu năng I/O.

---

#### Câu 4 (db-c4-d1-004) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) kích hoạt cơ chế kiểm tra các ràng buộc toàn vẹn vào thời điểm nào?**

- **A.** Kích hoạt ngẫu nhiên mỗi khi bộ nhớ đệm RAM của máy chủ cơ sở dữ liệu bị đầy
- **B.** Chỉ kích hoạt duy nhất một lần vào thời điểm người quản trị khởi tạo máy chủ
- **C.** Chỉ kích hoạt khi người dùng gửi yêu cầu truy vấn trích xuất dữ liệu SELECT
- **D.** Kích hoạt ngay khi thực hiện cập nhật (Thêm, Sửa, Xóa) hoặc khi bảo trì định kỳ

> **Đáp án đúng:** **D** — *Kích hoạt ngay khi thực hiện cập nhật (Thêm, Sửa, Xóa) hoặc khi bảo trì định kỳ*
>
> **Giải thích chi tiết:** RDBMS kiểm tra RBTV: 1) Ngay khi thực hiện thao tác cập nhật (Thêm, Sửa, Xóa); 2) Định kỳ hoặc đột xuất khi bảo trì hệ thống.

---

#### Câu 5 (db-c4-d1-005) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khẳng định nào sau đây là NHẬN ĐỊNH SAI về kỹ thuật lập Bảng Tầm Ảnh Hưởng của một ràng buộc toàn vẹn?**

- **A.** Tất cả các ô trong Bảng Tầm Ảnh Hưởng bắt buộc phải luôn luôn mang dấu cộng
- **B.** Dấu cộng (+) chỉ định hệ quản trị CSDL cần kích hoạt mã kiểm tra tính hợp lệ
- **C.** Dấu +(*) hoặc -(*) thể hiện việc kiểm tra có điều kiện khi sửa đúng thuộc tính
- **D.** Bảng Tầm Ảnh Hưởng gồm các cột tương ứng với ba thao tác: Thêm, Xóa và Sửa

> **Đáp án đúng:** **A** — *Tất cả các ô trong Bảng Tầm Ảnh Hưởng bắt buộc phải luôn luôn mang dấu cộng*
>
> **Giải thích chi tiết:** Nhận định A sai vì mục tiêu tối thượng của Bảng Tầm Ảnh Hưởng là xác định đúng ô nào cần kiểm tra (+), ô nào an toàn không cần kiểm tra (-), chứ không phải tất cả đều là dấu cộng.

---

#### Câu 6 (db-c4-d1-006) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Bối cảnh (Context) của một ràng buộc toàn vẹn là ...(1)... mà ràng buộc đó có hiệu lực, có thể gồm ...(2)... tùy theo bản chất của quy tắc."**

- **A.** những người dùng quản trị / một nhóm tài khoản hoặc toàn bộ máy chủ mạng
- **B.** những quan hệ (bảng dữ liệu) / một quan hệ hoặc nhiều quan hệ khác nhau
- **C.** những câu lệnh truy vấn SELECT / một dòng đơn lẻ hoặc nhiều trang bộ nhớ
- **D.** những tệp tin sao lưu dự phòng / một thiết bị đĩa hoặc toàn bộ phân vùng

> **Đáp án đúng:** **B** — *những quan hệ (bảng dữ liệu) / một quan hệ hoặc nhiều quan hệ khác nhau*
>
> **Giải thích chi tiết:** Bối cảnh (Context) là những quan hệ (bảng) mà RBTV đó có hiệu lực. Có thể là một quan hệ hoặc nhiều quan hệ.

---

#### Câu 7 (db-c4-d1-007) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho các nhận định sau về Bảng Tầm Ảnh Hưởng của ràng buộc Khóa chính (Primary Key):
(I) Thao tác Thêm một dòng mới luôn mang dấu cộng (+).
(II) Thao tác Xóa một dòng hiện có luôn mang dấu trừ (-).
(III) Thao tác Sửa các thuộc tính khóa chính luôn mang dấu cộng (+).
Khẳng định nào sau đây là ĐÚNG?**

- **A.** Chỉ có duy nhất nhận định (I) là nhận định đúng, hai nhận định còn lại sai
- **B.** Chỉ có nhận định (I) và (III) đúng, nhận định (II) là nhận định sai lầm
- **C.** Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác
- **D.** Nhận định (II) đúng còn nhận định (I) và (III) đều là nhận định sai lệch

> **Đáp án đúng:** **C** — *Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác*
>
> **Giải thích chi tiết:** Cả 3 nhận định đều đúng. Với Khóa chính: Thêm mới có thể trùng khóa (+); Xóa bớt một dòng thì tập còn lại càng không thể trùng khóa (-); Sửa thuộc tính khóa chính có thể gây trùng khóa (+).

---

#### Câu 8 (db-c4-d1-008) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Xét Bảng Tầm Ảnh Hưởng của ràng buộc Khóa chính: Vì sao thao tác Xóa (Delete) một dòng trong bảng LUÔN LUÔN mang dấu trừ ("-")?**

- **A.** Vì thao tác xóa dữ liệu không làm thay đổi số lượng các thuộc tính của bảng
- **B.** Vì hệ quản trị cơ sở dữ liệu tự động vô hiệu hóa khóa chính trước khi xóa
- **C.** Vì khi xóa một dòng thì hệ thống tự động chèn một dòng rỗng bù đắp vào bảng
- **D.** Vì xóa bớt một bộ thì các bộ còn lại chắc chắn không thể tự trùng nhau được

> **Đáp án đúng:** **D** — *Vì xóa bớt một bộ thì các bộ còn lại chắc chắn không thể tự trùng nhau được*
>
> **Giải thích chi tiết:** Giáo trình chỉ rõ: Nếu tập các bộ ban đầu đã không trùng khóa, thì khi xóa bớt một dòng, tập các dòng còn lại hiển nhiên vẫn phân biệt đôi một, tính duy nhất của khóa chính KHÔNG THỂ bị vi phạm (dấu -).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ thao tác cập nhật nào cũng nguy hiểm nên đánh dấu (+) cho cả lệnh Xóa.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy thao tác Xóa trong Bảng Tầm Ảnh Hưởng của Khóa chính (Delete operation on PK)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục III.1.a & V.3*
> - 💡 **Mẹo hóa giải:** Khóa chính: Xóa mang dấu TRỪ (-) tuyệt đối! Vì bớt đi 1 dòng thì các dòng còn lại không thể tự trùng nhau.

---

#### Câu 9 (db-c4-d1-009) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Trong Bảng Tầm Ảnh Hưởng của Ràng buộc khóa ngoại (phụ thuộc tồn tại giữa bảng cha R1 và bảng con R2): Dấu kiểm tra ở bảng cha R1 đối với thao tác Xóa là gì?**

- **A.** Mang dấu cộng (+) vì xóa dòng cha có nguy cơ làm các dòng con bị mồ côi
- **B.** Mang dấu trừ (-) vì xóa dòng ở bảng cha không bao giờ ảnh hưởng tới bảng con
- **C.** Mang dấu trừ có điều kiện vì chỉ kiểm tra khi thuộc tính khóa cha nhận NULL
- **D.** Không xác định được vì bảng cha không nằm trong bối cảnh của ràng buộc ngoại

> **Đáp án đúng:** **A** — *Mang dấu cộng (+) vì xóa dòng cha có nguy cơ làm các dòng con bị mồ côi*
>
> **Giải thích chi tiết:** Khi xóa một dòng ở bảng cha (R1), nếu có dòng ở bảng con (R2) đang tham chiếu đến khóa đó thì việc xóa cha sẽ vi phạm toàn vẹn tham chiếu (làm con bị mồ côi). Do đó thao tác Xóa ở bảng cha BẮT BUỘC mang dấu cộng (+).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm: nghĩ thao tác Xóa là an toàn như ở bảng Khóa chính.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy thao tác Xóa ở bảng cha trong ràng buộc Khóa ngoại (Delete on parent table in FK)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục VI.1*
> - 💡 **Mẹo hóa giải:** Khóa ngoại: Bảng cha XÓA mang dấu CỘNG (+)! (Bảng con XÓA mới mang dấu TRỪ -).

---

#### Câu 10 (db-c4-d1-010) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Cho ràng buộc C: "Số cán bộ của một khoa không được vượt quá 50 người" trong bảng KHOA(makhoa, tenkhoa, soCB). Thao tác nào sau đây mang dấu trừ ("-") trong Bảng Tầm Ảnh Hưởng?**

- **A.** Thao tác Thêm một khoa mới vào bảng KHOA và cập nhật giá trị cột số cán bộ
- **B.** Thao tác Xóa một khoa và thao tác Sửa tên khoa không liên quan đến cột soCB
- **C.** Thao tác Sửa giá trị cột soCB từ mức hai mươi cán bộ lên năm mươi cán bộ
- **D.** Mọi thao tác Thêm, Sửa, Xóa trên bảng KHOA đều bắt buộc phải mang dấu cộng

> **Đáp án đúng:** **B** — *Thao tác Xóa một khoa và thao tác Sửa tên khoa không liên quan đến cột soCB*
>
> **Giải thích chi tiết:** Ràng buộc quy định soCB <= 50. Khi Xóa một khoa, số cán bộ không tăng thêm nên không thể vi phạm quy tắc (dấu -). Khi Sửa tên khoa (tenkhoa), cột soCB không đổi nên cũng an toàn tuyệt đối (dấu -).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay đánh đồng thao tác Sửa cột bất kỳ đều mang dấu (+).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy sửa thuộc tính không liên quan đến biểu thức ràng buộc (Update non-involved attribute)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục III.1 & V.3*
> - 💡 **Mẹo hóa giải:** Sửa thuộc tính KHÔNG tham gia biểu thức RBTV ➔ Luôn mang dấu TRỪ (-)!

---

### 📌 CHUYÊN ĐỀ 2: PHÂN LOẠI RBTV CÓ BỐI CẢNH LÀ MỘT QUAN HỆ (Câu 11 - 20)

#### Câu 11 (db-c4-d1-011) — [🟢 DỄ (NHẬN BIẾT)]

**Ràng buộc toàn vẹn có bối cảnh là MỘT quan hệ được chia thành 3 phân loại chính nào dưới đây?**

- **A.** RBTV bảo mật đa tầng, RBTV lưu trữ vật lý và RBTV giao tác mạng
- **B.** RBTV khóa ngoại, RBTV chu trình đồ thị và RBTV thuộc tính suy diễn
- **C.** RBTV về miền giá trị, RBTV liên thuộc tính và RBTV liên bộ
- **D.** RBTV chỉ mục tự động, RBTV sao lưu tập tin và RBTV giải phóng RAM

> **Đáp án đúng:** **C** — *RBTV về miền giá trị, RBTV liên thuộc tính và RBTV liên bộ*
>
> **Giải thích chi tiết:** Giáo trình phân loại rõ: Bối cảnh một quan hệ gồm 3 loại: 1) Miền giá trị; 2) Liên thuộc tính; 3) Liên bộ.

---

#### Câu 12 (db-c4-d1-012) — [🟢 DỄ (NHẬN BIẾT)]

**Trong CSDL HSSINHVIEN, quy tắc: "Điểm thi của sinh viên phải từ 0 đến 10" thuộc loại ràng buộc toàn vẹn nào?**

- **A.** Ràng buộc toàn vẹn do chu trình đồ thị của lược đồ quan hệ
- **B.** Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ đơn
- **C.** Ràng buộc toàn vẹn về phụ thuộc tồn tại giữa hai quan hệ con
- **D.** Ràng buộc toàn vẹn về miền giá trị (Domain integrity constraint)

> **Đáp án đúng:** **D** — *Ràng buộc toàn vẹn về miền giá trị (Domain integrity constraint)*
>
> **Giải thích chi tiết:** Điều kiện điểm thi từ 0 đến 10 áp dụng trực tiếp và độc lập lên miền giá trị của thuộc tính Diem, do đó thuộc loại RBTV về miền giá trị.

---

#### Câu 13 (db-c4-d1-013) — [🟢 DỄ (NHẬN BIẾT)]

**Quy tắc: "Trong bảng HOADON, ngày lập hóa đơn (ngayHD) phải trước hoặc cùng ngày xuất kho (ngayXuat)" thuộc loại RBTV nào?**

- **A.** Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ đơn
- **B.** Ràng buộc toàn vẹn về miền giá trị của từng thuộc tính riêng
- **C.** Ràng buộc toàn vẹn liên bộ giữa các dòng dữ liệu khác nhau
- **D.** Ràng buộc toàn vẹn về thuộc tính tổng hợp từ nhiều quan hệ

> **Đáp án đúng:** **A** — *Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ đơn*
>
> **Giải thích chi tiết:** Quy tắc hd.ngayHD <= hd.ngayXuat là mối quan hệ giữa 2 thuộc tính khác nhau trong CÙNG MỘT DÒNG (bộ) của bảng HOADON, nên thuộc loại RBTV liên thuộc tính.

---

#### Câu 14 (db-c4-d1-014) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khẳng định nào sau đây diễn giải CHUẨN XÁC NHẤT về bản chất của Ràng buộc toàn vẹn liên bộ (Inter-tuple constraint)?**

- **A.** Là điều kiện kiểm tra định dạng dữ liệu của từng ô độc lập trong bảng
- **B.** Là mối quan hệ ràng buộc giữa các bộ (dòng) khác nhau trong cùng một quan hệ
- **C.** Là ràng buộc giữa hai cột dữ liệu nằm trên hai dòng hoàn toàn ngẫu nhiên
- **D.** Là sự kết nối tham chiếu khóa ngoại giữa bảng cha và các bảng dữ liệu con

> **Đáp án đúng:** **B** — *Là mối quan hệ ràng buộc giữa các bộ (dòng) khác nhau trong cùng một quan hệ*
>
> **Giải thích chi tiết:** RBTV liên bộ là sự ràng buộc giữa các bộ (tuples) bên trong MỘT quan hệ. Ví dụ: Ràng buộc khóa chính (không được có 2 bộ trùng mã số).

---

#### Câu 15 (db-c4-d1-015) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong CSDL HSSINHVIEN, ràng buộc C1: "Mỗi sinh viên có một mã số SV duy nhất không trùng lặp" được xếp vào loại RBTV nào?**

- **A.** Ràng buộc toàn vẹn liên thuộc tính giữa họ tên và mã số của sinh viên
- **B.** Ràng buộc toàn vẹn về miền giá trị (Domain constraint) của cột mã số
- **C.** Ràng buộc toàn vẹn liên bộ (Inter-tuple constraint) trong bảng SINH_VIEN
- **D.** Ràng buộc toàn vẹn về phụ thuộc tồn tại tham chiếu sang danh mục khoa

> **Đáp án đúng:** **C** — *Ràng buộc toàn vẹn liên bộ (Inter-tuple constraint) trong bảng SINH_VIEN*
>
> **Giải thích chi tiết:** Mã sinh viên là Khóa chính. Khóa chính cấm 2 bộ bất kỳ có cùng giá trị mã số: (∀t1, t2 ∈ SINH_VIEN: t1.maSV = t2.maSV ⇒ t1 = t2), đây là sự so sánh giữa CÁC BỘ với nhau nên là RBTV liên bộ.

---

#### Câu 16 (db-c4-d1-016) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Nếu một thuộc tính A trong quan hệ có thể tính toán được từ các thuộc tính khác trong ...(1)..., người thiết kế CSDL nên ...(2)... thuộc tính A để tránh dư thừa dữ liệu."**

- **A.** máy chủ phân tán / mã hóa bảo mật cho
- **B.** toàn bộ các bảng khác / tăng kích thước của
- **C.** từ điển dữ liệu hệ thống / nhân đôi giá trị
- **D.** cùng một bộ (dòng) đó / loại bỏ hoàn toàn

> **Đáp án đúng:** **D** — *cùng một bộ (dòng) đó / loại bỏ hoàn toàn*
>
> **Giải thích chi tiết:** Giáo trình nêu rõ nguyên tắc thiết kế chuẩn: Nếu thuộc tính A tính được từ các thuộc tính khác trong cùng một bộ, ta có thể loại bỏ A khỏi quan hệ để tránh dư thừa và dị thường cập nhật.

---

#### Câu 17 (db-c4-d1-017) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho các nhận định sau về RBTV trên một quan hệ:
(I) RBTV miền giá trị chỉ kiểm tra một thuộc tính độc lập trên từng bộ.
(II) RBTV liên thuộc tính thể hiện mối quan hệ giữa các cột trong cùng một dòng.
(III) Quy tắc tamUng ≤ luong là một ví dụ chuẩn mực của RBTV miền giá trị.
Khẳng định nào sau đây là ĐÚNG?**

- **A.** Chỉ có nhận định (I) và (II) đúng, nhận định (III) là nhận định sai lầm
- **B.** Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác
- **C.** Chỉ có duy nhất nhận định (III) là nhận định hoàn toàn đúng đắn theo sách
- **D.** Nhận định (I) sai còn nhận định (II) và (III) đều là nhận định chính xác

> **Đáp án đúng:** **A** — *Chỉ có nhận định (I) và (II) đúng, nhận định (III) là nhận định sai lầm*
>
> **Giải thích chi tiết:** Nhận định (I) và (II) đúng. Nhận định (III) sai vì giáo trình ghi rõ: tamUng <= luong là VÍ DỤ SAI của miền giá trị, đây thực chất là RBTV liên thuộc tính.

---

#### Câu 18 (db-c4-d1-018) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Trong quan hệ NHANVIEN(maNV, tenNV, luong, tamUng, conLai), quy tắc: "tamUng ≤ luong". Vì sao giáo trình khẳng định việc coi đây là RBTV miền giá trị là SAI LẦM?**

- **A.** Vì thuộc tính tamUng có kiểu dữ liệu chuỗi ký tự không thể so sánh với số
- **B.** Vì điều kiện này so sánh hai cột khác nhau trong cùng bộ chứ không phải miền giá trị
- **C.** Vì tiền tạm ứng của nhân viên luôn luôn bắt buộc phải lớn hơn mức lương thực tế
- **D.** Vì quan hệ NHANVIEN có chứa khóa chính nên mọi ràng buộc đều thành liên bộ

> **Đáp án đúng:** **B** — *Vì điều kiện này so sánh hai cột khác nhau trong cùng bộ chứ không phải miền giá trị*
>
> **Giải thích chi tiết:** Giáo trình nhấn mạnh: Điều kiện tamUng <= luong không thể là RBTV miền giá trị vì miền giá trị chỉ áp dụng trên từng thuộc tính riêng lẻ đối với tập giá trị hợp lệ dom(A). Việc đối sánh giữa 2 thuộc tính trong cùng dòng là bản chất của RBTV LIÊN THUỘC TÍNH.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay thấy điều kiện kiểm tra số tiền nên nhầm với ràng buộc miền giá trị > 0.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy nhận thức sai lầm giữa miền giá trị và liên thuộc tính (Domain vs Inter-attribute trap)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục V.1*
> - 💡 **Mẹo hóa giải:** So sánh giữa 2 CỘT trong cùng 1 dòng (A <= B) ➔ 100% là LIÊN THUỘC TÍNH, không phải miền giá trị!

---

#### Câu 19 (db-c4-d1-019) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Ràng buộc C2 trong CSDL HSSINHVIEN: "Mỗi sinh viên chỉ được phép thi tối đa 2 lần cho một môn học" trong KET_QUA(maSV, maMH, lanThi, diem) thuộc loại RBTV nào?**

- **A.** Ràng buộc liên thuộc tính giữa thuộc tính lần thi lanThi và thuộc tính điểm số
- **B.** Ràng buộc liên bộ giữa các lần thi khác nhau của cùng một sinh viên trong bảng
- **C.** Ràng buộc về miền giá trị của thuộc tính lanThi (điều kiện lanThi nằm trong tập {1, 2})
- **D.** Ràng buộc về phụ thuộc tồn tại tham chiếu sang danh mục các môn học mở lớp

> **Đáp án đúng:** **C** — *Ràng buộc về miền giá trị của thuộc tính lanThi (điều kiện lanThi nằm trong tập {1, 2})*
>
> **Giải thích chi tiết:** Điều kiện mỗi sinh viên thi tối đa 2 lần được quản lý thông qua miền giá trị hợp lệ của cột lanThi chỉ được nhận giá trị 1 hoặc 2 (lanThi ∈ {1, 2} hay lanThi <= 2), do đó thuộc loại RBTV về miền giá trị.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh thấy cụm từ "thi tối đa 2 lần" nên nghĩ phải đếm các bộ (dòng) của sinh viên đó và chọn liên bộ.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy hình thức ngôn ngữ của ràng buộc số lần thi (lanThi domain constraint)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục II.1 Ví dụ 1*
> - 💡 **Mẹo hóa giải:** Số lần thi tối đa 2 lần được cài đặt qua điều kiện miền giá trị: lanThi <= 2 (hoặc lanThi IN (1, 2)).

---

#### Câu 20 (db-c4-d1-020) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Trong bảng KET_QUA(maSV, maMH, lanThi, Diem), quy tắc: "Diem là số thực từ 0 đến 10 với độ chính xác đến 0.5 điểm". Biểu thức số học chuẩn nào diễn đạt điều kiện bước nhảy này?**

- **A.** Điều kiện số học: (t.Diem * 10 mod 5 = 1) với mọi bộ t thuộc quan hệ bảng
- **B.** Điều kiện số học: (t.Diem mod 0.5 = 0) trong tập hợp số nguyên không âm
- **C.** Điều kiện số học: (round(t.Diem, 1) = t.Diem) với mọi giá trị điểm số
- **D.** Điều kiện số học: ((t.Diem * 4) mod 2 = 0) với mọi bộ t thuộc quan hệ KET_QUA

> **Đáp án đúng:** **D** — *Điều kiện số học: ((t.Diem * 4) mod 2 = 0) với mọi bộ t thuộc quan hệ KET_QUA*
>
> **Giải thích chi tiết:** Giáo trình Mục V.1 Ví dụ 4 ghi rõ: Điểm thi 0..10 có bước nhảy 0.5 (như 0, 0.5, 1, 1.5...) được biểu diễn số học bằng: ((t.Diem * 4) mod 2 = 0, ∀t ∈ KetQua) hoặc (t.Diem * 2 là số nguyên).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ toán tử mod dùng được trực tiếp cho số thực 0.5 trong biểu thức hình thức.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy biểu diễn số học bước nhảy độ chính xác điểm thi (Step precision arithmetic expression)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục V.1*
> - 💡 **Mẹo hóa giải:** Bước nhảy 0.5: Quy đồng nguyên ((Diem * 4) mod 2 = 0) hoặc ((Diem * 2) mod 1 = 0).

---

### 📌 CHUYÊN ĐỀ 3: PHÂN LOẠI RBTV CÓ BỐI CẢNH LÀ NHIỀU QUAN HỆ & CHU TRÌNH ĐỒ THỊ (Câu 21 - 30)

#### Câu 21 (db-c4-d1-021) — [🟢 DỄ (NHẬN BIẾT)]

**Ràng buộc về phụ thuộc tồn tại (Existence dependency) trong cơ sở dữ liệu quan hệ còn được gọi bằng tên phổ biến nào?**

- **A.** Ràng buộc khóa ngoại (Foreign key / Referential integrity constraint)
- **B.** Ràng buộc khóa chính duy nhất của các thực thể trong cơ sở dữ liệu
- **C.** Ràng buộc miền giá trị mở rộng cho các thuộc tính có kiểu ngày tháng
- **D.** Ràng buộc tối ưu hóa tốc độ truy vấn của cỗ máy tìm kiếm dữ liệu

> **Đáp án đúng:** **A** — *Ràng buộc khóa ngoại (Foreign key / Referential integrity constraint)*
>
> **Giải thích chi tiết:** Giáo trình khẳng định: RBTV về phụ thuộc tồn tại còn gọi là ràng buộc khóa ngoại (foreign key) — rất phổ biến trong CSDL quan hệ.

---

#### Câu 22 (db-c4-d1-022) — [🟢 DỄ (NHẬN BIẾT)]

**Trong CSDL QLHANGHOA, quy tắc: "Mỗi hóa đơn bán hàng phải có ít nhất một mặt hàng" thuộc loại RBTV nào?**

- **A.** Ràng buộc toàn vẹn về miền giá trị của thuộc tính số lượng trong bảng
- **B.** Ràng buộc toàn vẹn liên bộ, liên quan hệ (giữa HOA_DON và CTIET_HD)
- **C.** Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ HOA_DON
- **D.** Ràng buộc toàn vẹn về phụ thuộc hàm suy diễn của bảng HANG_HOA

> **Đáp án đúng:** **B** — *Ràng buộc toàn vẹn liên bộ, liên quan hệ (giữa HOA_DON và CTIET_HD)*
>
> **Giải thích chi tiết:** Quy tắc này ràng buộc giữa tập các bộ của HOA_DON và tập các bộ của CTIET_HD (ứng với 1 dòng HOA_DON phải tồn tại ít nhất 1 dòng CTIET_HD có cùng soHD), do đó thuộc loại RBTV liên bộ, liên quan hệ.

---

#### Câu 23 (db-c4-d1-023) — [🟢 DỄ (NHẬN BIẾT)]

**Một thuộc tính được gọi là "Thuộc tính tổng hợp" (Derived / Aggregate attribute) khi giá trị của nó thỏa mãn điều kiện nào?**

- **A.** Là khóa chính đại diện cho tất cả các bảng dữ liệu trong toàn hệ thống
- **B.** Được nhập trực tiếp từ bàn phím và không thể thay đổi sau khi tạo lập
- **C.** Được tính toán tự động từ các thuộc tính của các quan hệ khác trong CSDL
- **D.** Được mã hóa bằng hàm băm một chiều để phục vụ lưu trữ mật khẩu an toàn

> **Đáp án đúng:** **C** — *Được tính toán tự động từ các thuộc tính của các quan hệ khác trong CSDL*
>
> **Giải thích chi tiết:** Thuộc tính tổng hợp là thuộc tính mà giá trị của nó được tính toán giá trị từ các thuộc tính của các quan hệ khác (Ví dụ: congNo tính từ tổng tiền hóa đơn trừ đi tổng tiền phiếu thu).

---

#### Câu 24 (db-c4-d1-024) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Dấu hiệu toán học nào sau đây chứng minh sự tồn tại phụ thuộc của quan hệ R2 vào quan hệ R1 theo giáo trình?**

- **A.** Quan hệ R1 và quan hệ R2 có cùng số lượng các dòng dữ liệu bên trong bảng
- **B.** Số lượng thuộc tính của quan hệ R1 lớn hơn số lượng thuộc tính quan hệ R2
- **C.** Tên của quan hệ R1 trùng khớp hoàn toàn với một thuộc tính bất kỳ trong R2
- **D.** Khóa chính K1 của R1 là tập con của khóa chính phức hợp K2 của R2 (K1 ⊆ K2)

> **Đáp án đúng:** **D** — *Khóa chính K1 của R1 là tập con của khóa chính phức hợp K2 của R2 (K1 ⊆ K2)*
>
> **Giải thích chi tiết:** Giáo trình Mục VI.1 chỉ rõ Dấu hiệu 1: Nếu K1 là khóa chính của R1 và K2 là khóa chính của R2, mà K1 ⊆ K2 thì có phụ thuộc tồn tại của R2 vào R1.

---

#### Câu 25 (db-c4-d1-025) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Quy tắc: "Ngày lập hóa đơn (HOA_DON.ngayHD) phải sau hoặc bằng ngày đặt hàng (DAT_HANG.ngayDH)" thuộc loại RBTV nào?**

- **A.** Ràng buộc toàn vẹn liên thuộc tính, liên quan hệ giữa hai quan hệ
- **B.** Ràng buộc toàn vẹn liên bộ trong cùng một quan hệ đơn bảng HOA_DON
- **C.** Ràng buộc toàn vẹn về miền giá trị của thuộc tính ngày đặt hàng
- **D.** Ràng buộc toàn vẹn do chu trình đồ thị của các bảng kinh doanh

> **Đáp án đúng:** **A** — *Ràng buộc toàn vẹn liên thuộc tính, liên quan hệ giữa hai quan hệ*
>
> **Giải thích chi tiết:** Ràng buộc này so sánh giữa 2 thuộc tính (ngayHD và ngayDH) nằm ở 2 LƯỢC ĐỒ QUAN HỆ KHÁC NHAU (HOA_DON và DAT_HANG), nên được xếp vào loại RBTV liên thuộc tính, liên quan hệ.

---

#### Câu 26 (db-c4-d1-026) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong đồ thị biểu diễn lược đồ CSDL phục vụ phân tích RBTV chu trình, hai loại nút cơ bản của đồ thị là gì?**

- **A.** Nút máy chủ máy khách và Nút đường truyền cáp quang của mạng nội bộ
- **B.** Nút thuộc tính (Attribute nodes) và Nút lược đồ quan hệ (Relation nodes)
- **C.** Nút tài khoản người dùng và Nút quyền hạn truy cập mức bảng dữ liệu
- **D.** Nút bản ghi dữ liệu hiện tại và Nút bản ghi dữ liệu trong lịch sử sao lưu

> **Đáp án đúng:** **B** — *Nút thuộc tính (Attribute nodes) và Nút lược đồ quan hệ (Relation nodes)*
>
> **Giải thích chi tiết:** Lược đồ CSDL được biểu diễn bằng đồ thị vô hướng gồm 2 loại nút: Nút thuộc tính (A) và Nút lược đồ quan hệ (R). Một cung nối A với R nếu A ∈ R.

---

#### Câu 27 (db-c4-d1-027) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho CSDL QLHANGHOA. Công thức tính công nợ của khách hàng: congNo = Tổng trị giá các hóa đơn bán − Tổng tiền các phiếu thu. Khi phát sinh một Phiếu thu mới (Thêm phiếu thu), công nợ thay đổi thế nào?**

- **A.** Công nợ của khách hàng tự động được xóa về 0 bất kể số tiền thu được là bao
- **B.** Công nợ của khách hàng sẽ tăng thêm đúng bằng số tiền ghi trên phiếu thu mới
- **C.** Công nợ của khách hàng sẽ giảm đi đúng bằng số tiền ghi trên phiếu thu mới
- **D.** Công nợ của khách hàng không đổi vì phiếu thu chỉ ảnh hưởng đến quỹ tiền mặt

> **Đáp án đúng:** **C** — *Công nợ của khách hàng sẽ giảm đi đúng bằng số tiền ghi trên phiếu thu mới*
>
> **Giải thích chi tiết:** Theo định nghĩa: congNo = Tổng_Ban - Tổng_Thu. Do đó khi Thêm một phiếu thu (tăng Tổng_Thu), số tiền nợ congNo của khách hàng sẽ giảm tương ứng.

---

#### Câu 28 (db-c4-d1-028) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Khi đồ thị lược đồ CSDL xuất hiện chu trình (Ví dụ chu trình 3 bảng DAT_HANG - HOA_DON - CTIET_HD), chính sách giao hàng CHUẨN MỰC của CSDL QLHANGHOA là gì?**

- **A.** Hủy toàn bộ đơn đặt hàng nếu kho hàng thiếu hụt dù chỉ một sản phẩm duy nhất
- **B.** Bắt buộc phải giao đầy đủ 100% tất cả các mặt hàng có trong đơn đặt hàng
- **C.** Công ty được phép giao tùy ý mọi mặt hàng dù khách hàng có đặt mua hay không
- **D.** Chỉ giao các mặt hàng khách đã đặt và không bao giờ giao vượt số lượng đặt

> **Đáp án đúng:** **D** — *Chỉ giao các mặt hàng khách đã đặt và không bao giờ giao vượt số lượng đặt*
>
> **Giải thích chi tiết:** Giáo trình Mục VI.3 nêu rõ: CSDL QLHANGHOA áp dụng chính sách (2): Một hóa đơn chỉ giao những mặt hàng khách đã đặt, có thể không giao đủ nhưng KHÔNG BAO GIỜ GIAO VƯỢT yêu cầu đặt hàng.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn phương án lý tưởng là "phải giao đầy đủ 100% mặt hàng" (Chính sách 1).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy 3 trường hợp chính sách giao hàng của chu trình đồ thị CSDL QLHANGHOA`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục VI.3 Ví dụ 12*
> - 💡 **Mẹo hóa giải:** Chuẩn CSDL QLHANGHOA: Chính sách (2) ➔ Không bắt buộc giao đủ, nhưng TUYỆT ĐỐI KHÔNG GIAO VƯỢT!

---

#### Câu 29 (db-c4-d1-029) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Bảng KHACH có thuộc tính tổng hợp congNo tính từ HOA_DON và PHIEU_THU. Trong Bảng Tầm Ảnh Hưởng đối với bảng PHIEU_THU, thao tác nào cần phải kiểm tra (+)?**

- **A.** Cả ba thao tác: Thêm một phiếu thu, Xóa một phiếu thu và Sửa tiền phiếu thu (+)
- **B.** Chỉ duy nhất thao tác Thêm phiếu thu mang dấu cộng, Xóa và Sửa mang dấu trừ
- **C.** Chỉ thao tác Xóa phiếu thu mang dấu cộng, Thêm và Sửa an toàn không kiểm tra
- **D.** Bảng PHIEU_THU hoàn toàn không bị ảnh hưởng vì cột congNo nằm ở bảng KHACH

> **Đáp án đúng:** **A** — *Cả ba thao tác: Thêm một phiếu thu, Xóa một phiếu thu và Sửa tiền phiếu thu (+)*
>
> **Giải thích chi tiết:** Thuộc tính tổng hợp congNo phụ thuộc trực tiếp vào từng phiếu thu. Dù Thêm, Xóa hay Sửa (soTien, maKH) ở bảng PHIEU_THU đều làm thay đổi tổng tiền đã thu, dẫn đến giá trị congNo ở bảng KHACH bị sai lệch nếu không cập nhật lại. Do đó cả 3 thao tác đều mang dấu (+).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ bảng chứa thuộc tính (KHACH) mới chịu ảnh hưởng, bảng nguồn (PHIEU_THU) thì không.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy Bảng Tầm Ảnh Hưởng của thuộc tính tổng hợp trên các bảng nguồn`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục VI.2.c*
> - 💡 **Mẹo hóa giải:** Thuộc tính tổng hợp: Mọi thao tác Thêm, Xóa, Sửa trên CÁC BẢNG NGUỒN đều mang dấu CỘNG (+)!

---

#### Câu 30 (db-c4-d1-030) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Cho quy tắc: "Mỗi hóa đơn phải có ít nhất một mặt hàng" (HOA_DON và CTIET_HD). Khi thực hiện thao tác XÓA một dòng trong bảng CTIET_HD, hệ thống có cần kiểm tra RBTV không?**

- **A.** Không cần kiểm tra (-) vì xóa bớt mặt hàng chỉ làm giảm bớt số lượng chi tiết
- **B.** Có cần kiểm tra (+) vì nếu xóa dòng chi tiết cuối cùng thì hóa đơn sẽ bị rỗng
- **C.** Chỉ kiểm tra khi người dùng xóa toàn bộ các dòng của bảng bằng lệnh TRUNCATE
- **D.** Không xác định được vì thao tác xóa ở bảng con luôn luôn mặc định mang dấu trừ

> **Đáp án đúng:** **B** — *Có cần kiểm tra (+) vì nếu xóa dòng chi tiết cuối cùng thì hóa đơn sẽ bị rỗng*
>
> **Giải thích chi tiết:** Ràng buộc đòi hỏi mỗi hóa đơn phải có ÍT NHẤT 1 mặt hàng. Khi xóa một dòng trong CTIET_HD, nếu đó là mặt hàng duy nhất còn lại của hóa đơn đó thì hóa đơn sẽ vi phạm ràng buộc (không còn mặt hàng nào). Do đó thao tác Xóa ở CTIET_HD bắt buộc mang dấu CỘNG (+).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ bảng con CTIET_HD khi Xóa luôn mang dấu (-) như trong ràng buộc khóa ngoại thông thường.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy thao tác Xóa bảng con trong RBTV liên bộ liên quan hệ tối thiểu một dòng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục VI.2.a*
> - 💡 **Mẹo hóa giải:** Ràng buộc "Ít nhất một...": Xóa ở bảng con mang dấu CỘNG (+) vì nguy cơ xóa sạch thành số 0!

---

### 📌 CHUYÊN ĐỀ 4: BIỂU DIỄN HÌNH THỨC LOGIC VỊ TỪ & ĐỒ ÁN ĐỀ TÀI SINH VIÊN (Câu 31 - 40)

#### Câu 31 (db-c4-d1-031) — [🟢 DỄ (NHẬN BIẾT)]

**Trong biểu diễn hình thức của RBTV bằng Logic vị từ bậc nhất, ký hiệu toán học "∀" mang ý nghĩa là gì?**

- **A.** Toán tử kéo theo (Implication operator, nếu điều kiện này thì điều kiện kia)
- **B.** Lượng từ tồn tại (Existential quantifier, chỉ cần có ít nhất một bộ)
- **C.** Lượng từ với mọi (Universal quantifier, áp dụng cho tất cả các bộ)
- **D.** Toán tử tuyển logic (Logical disjunction, phép toán OR giữa hai mệnh đề)

> **Đáp án đúng:** **C** — *Lượng từ với mọi (Universal quantifier, áp dụng cho tất cả các bộ)*
>
> **Giải thích chi tiết:** Ký hiệu ∀ là lượng từ "với mọi" (For all), chỉ định điều kiện phải đúng cho tất cả các phần tử (bộ) thuộc tập hợp.

---

#### Câu 32 (db-c4-d1-032) — [🟢 DỄ (NHẬN BIẾT)]

**Trong biểu diễn Logic vị từ, biểu thức: "t.nam = true ∨ t.nam = false" đối với sinh viên t thể hiện ràng buộc gì?**

- **A.** Ràng buộc khóa chính yêu cầu giới tính của sinh viên không được phép trùng nhau
- **B.** Ràng buộc liên thuộc tính giữa năm sinh và giới tính của sinh viên trong bảng
- **C.** Ràng buộc liên bộ bắt buộc lớp học phải có cả sinh viên nam và sinh viên nữ
- **D.** Ràng buộc miền giá trị của thuộc tính giới tính nam chỉ nhận true hoặc false

> **Đáp án đúng:** **D** — *Ràng buộc miền giá trị của thuộc tính giới tính nam chỉ nhận true hoặc false*
>
> **Giải thích chi tiết:** Biểu thức kiểm tra giá trị của cột nam chỉ được là true hoặc false, đây là biểu diễn chuẩn của RBTV về miền giá trị thuộc tính boolean.

---

#### Câu 33 (db-c4-d1-033) — [🟢 DỄ (NHẬN BIẾT)]

**Trong Đồ án Đề tài sinh viên: SINHVIEN(MaSV, Hoten, Namsinh, QQ, Hocluc) và DETAI(MaDT...). Thuộc tính nào sau đây là Khóa chính của bảng SINHVIEN?**

- **A.** Thuộc tính MaSV là khóa chính xác định duy nhất thông tin mỗi sinh viên
- **B.** Thuộc tính Hoten là khóa chính vì mỗi sinh viên luôn có một danh xưng
- **C.** Thuộc tính Hocluc là khóa chính phân loại kết quả học tập của sinh viên
- **D.** Tổ hợp hai thuộc tính (Namsinh, QQ) là khóa chính đại diện cho sinh viên

> **Đáp án đúng:** **A** — *Thuộc tính MaSV là khóa chính xác định duy nhất thông tin mỗi sinh viên*
>
> **Giải thích chi tiết:** Mỗi sinh viên có một mã số duy nhất MaSV, đây là khóa chính của quan hệ SINHVIEN.

---

#### Câu 34 (db-c4-d1-034) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Biểu thức Logic vị từ nào sau đây diễn đạt CHUẨN XÁC NHẤT tính duy nhất của Khóa chính K trong quan hệ R?**

- **A.** ∀ t1, t2 ∈ R: t1.K ≠ t2.K ⇒ t1 = t2 (nếu khác khóa thì phải là cùng một bộ)
- **B.** ∀ t1, t2 ∈ R: t1.K = t2.K ⇒ t1 = t2 (nếu trùng khóa thì phải là cùng một bộ)
- **C.** ∃ t1, t2 ∈ R: t1.K = t2.K ∧ t1 ≠ t2 (tồn tại hai bộ khác nhau có cùng khóa)
- **D.** ∀ t ∈ R: t.K > 0 ∧ t.K < 1000000 (khóa chính bắt buộc phải là số nguyên dương)

> **Đáp án đúng:** **B** — *∀ t1, t2 ∈ R: t1.K = t2.K ⇒ t1 = t2 (nếu trùng khóa thì phải là cùng một bộ)*
>
> **Giải thích chi tiết:** Định nghĩa hình thức của khóa chính: Với mọi cặp bộ t1, t2 trong R, nếu giá trị khóa K bằng nhau thì hai bộ đó phải trùng khít nhau hoàn toàn (t1 = t2), tức là không thể có 2 bộ khác nhau mà trùng khóa.

---

#### Câu 35 (db-c4-d1-035) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong Đồ án Đề tài, bảng SV_DT(MaSV, MaDT, NoiAD, KQ) lưu sinh viên thực hiện đề tài. Khóa chính của bảng SV_DT là gì?**

- **A.** Chỉ duy nhất một thuộc tính MaDT vì mỗi đề tài chỉ được giao cho đúng một người
- **B.** Chỉ duy nhất một thuộc tính MaSV vì mỗi sinh viên chỉ được làm đúng một đề tài
- **C.** Tổ hợp gồm hai thuộc tính (MaSV, MaDT) đại diện cho việc sinh viên làm đề tài
- **D.** Toàn bộ bốn thuộc tính (MaSV, MaDT, NoiAD, KQ) ghép lại thành một khóa chính

> **Đáp án đúng:** **C** — *Tổ hợp gồm hai thuộc tính (MaSV, MaDT) đại diện cho việc sinh viên làm đề tài*
>
> **Giải thích chi tiết:** Vì một sinh viên có thể làm nhiều đề tài và một đề tài có thể do nhiều sinh viên thực hiện, khóa chính của bảng kết hợp SV_DT là cặp tổ hợp (MaSV, MaDT).

---

#### Câu 36 (db-c4-d1-036) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho các nhận định sau về biểu diễn Logic vị từ của RBTV:
(I) Lượng từ ∀ thường đi kèm với phép kéo theo (⇒).
(II) Lượng từ ∃ thường đi kèm với phép hội (∧).
(III) Biểu thức: ∀t ∈ KHOA: t.soCB ≤ 50 là một biểu diễn logic vị từ hoàn toàn hợp lệ.
Khẳng định nào sau đây là ĐÚNG?**

- **A.** Nhận định (I) sai còn nhận định (II) và (III) đều là nhận định chính xác
- **B.** Chỉ có nhận định (I) và (II) đúng, nhận định (III) là nhận định sai lầm
- **C.** Chỉ có duy nhất nhận định (III) là nhận định đúng đắn theo quy chuẩn logic
- **D.** Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác

> **Đáp án đúng:** **D** — *Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác*
>
> **Giải thích chi tiết:** Cả 3 nhận định đều chuẩn mực theo lý thuyết Logic vị từ: ∀ thường đi với ⇒; ∃ thường đi với ∧; và ∀t ∈ KHOA: t.soCB <= 50 là biểu diễn chuẩn của ràng buộc số cán bộ khoa.

---

#### Câu 37 (db-c4-d1-037) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Trong bài toán Đồ án Đề tài, quy tắc ràng buộc Khóa ngoại đòi hỏi mọi giá trị MaSV trong bảng SV_DT bắt buộc phải ...(1)... trong bảng ...(2)..."**

- **A.** đã tồn tại từ trước / SINHVIEN (quan hệ cha chứa thông tin sinh viên)
- **B.** bị xóa bỏ hoàn toàn / DETAI (quan hệ danh mục các đề tài nghiên cứu)
- **C.** được mã hóa tự động / KHOA (quan hệ các đơn vị quản lý chuyên môn)
- **D.** nhận giá trị là NULL / KET_QUA (quan hệ bảng điểm thi của học viên)

> **Đáp án đúng:** **A** — *đã tồn tại từ trước / SINHVIEN (quan hệ cha chứa thông tin sinh viên)*
>
> **Giải thích chi tiết:** Ràng buộc khóa ngoại: SV_DT.MaSV tham chiếu SINHVIEN.MaSV. Do đó mọi MaSV xuất hiện ở SV_DT bắt buộc phải đã tồn tại trong bảng cha SINHVIEN.

---

#### Câu 38 (db-c4-d1-038) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Trong Đồ án Đề tài, quy tắc nghiệp vụ: "Sinh viên được tham gia thực hiện đề tài nghiên cứu phải có học lực (Hocluc) từ Khá trở lên". Bảng Tầm Ảnh Hưởng của quy tắc này kiểm tra ở những đâu?**

- **A.** Chỉ kiểm tra duy nhất khi Thêm một đề tài mới vào bảng DETAI trong hệ thống
- **B.** Kiểm tra khi Thêm mới vào SV_DT (+) và khi Sửa cột Hocluc ở bảng SINHVIEN (+)
- **C.** Kiểm tra khi Xóa một sinh viên khỏi bảng SINHVIEN và khi Xóa bảng SV_DT
- **D.** Chỉ kiểm tra khi Sửa tên đề tài trong DETAI mà không cần kiểm tra sinh viên

> **Đáp án đúng:** **B** — *Kiểm tra khi Thêm mới vào SV_DT (+) và khi Sửa cột Hocluc ở bảng SINHVIEN (+)*
>
> **Giải thích chi tiết:** Quy tắc: Sinh viên làm đề tài phải có Hocluc ∈ {'Khá', 'Giỏi', 'Xuất sắc'}. Nguy cơ vi phạm xuất hiện khi: 1) Thêm một phân công mới vào SV_DT (phải kiểm tra sinh viên đó có đủ học lực không); 2) Sửa Hocluc ở bảng SINHVIEN (từ Khá hạ xuống Trung bình trong khi đang làm đề tài).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chỉ nhớ kiểm tra ở bảng SV_DT mà quên mất bảng SINHVIEN khi bị hạ học lực.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy xác định đầy đủ các thao tác trong Bảng Tầm Ảnh Hưởng của ràng buộc điều kiện nghiệp vụ`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục VIII.1*
> - 💡 **Mẹo hóa giải:** Ràng buộc điều kiện liên bảng: Phải kiểm tra CẢ THỜI ĐIỂM GÁN MỚI (SV_DT) VÀ THỜI ĐIỂM SỬA ĐIỀU KIỆN (SINHVIEN)!

---

#### Câu 39 (db-c4-d1-039) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Xét quy tắc: "Kinh phí thực hiện của mỗi đề tài nghiên cứu phải lớn hơn 0" trong DETAI(MaDT, TenDT, Chunhiem, Kinhphi). Biểu thức logic vị từ hình thức nào dưới đây là CHUẨN XÁC?**

- **A.** ∀ dt1, dt2 ∈ DETAI: dt1.Kinhphi ≠ dt2.Kinhphi (kinh phí các đề tài không trùng nhau)
- **B.** ∃ dt ∈ DETAI: dt.Kinhphi > 0 (tồn tại ít nhất một đề tài nghiên cứu có kinh phí > 0)
- **C.** ∀ dt ∈ DETAI: dt.Kinhphi > 0 (với mọi bộ dt trong quan hệ DETAI thì kinh phí > 0)
- **D.** ∀ dt ∈ DETAI: dt.Kinhphi = 0 ⇒ dt.MaDT = NULL (kinh phí bằng 0 thì mã đề tài rỗng)

> **Đáp án đúng:** **C** — *∀ dt ∈ DETAI: dt.Kinhphi > 0 (với mọi bộ dt trong quan hệ DETAI thì kinh phí > 0)*
>
> **Giải thích chi tiết:** Ràng buộc áp dụng cho TẤT CẢ các đề tài trong bảng DETAI nên sử dụng lượng từ "với mọi": ∀ dt ∈ DETAI: dt.Kinhphi > 0.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm lượng từ với mọi (∀) và lượng từ tồn tại (∃).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy lượng từ trong biểu thức Logic vị từ của ràng buộc toàn thể (Universal vs Existential)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục VIII.1*
> - 💡 **Mẹo hóa giải:** Điều kiện áp dụng cho TẤT CẢ đối tượng ➔ BẮT BUỘC dùng lượng từ VỚI MỌI (∀)!

---

#### Câu 40 (db-c4-d1-040) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống tổng hợp: Cho quy tắc: "Mỗi sinh viên chỉ được phép thực hiện tối đa 2 đề tài nghiên cứu". Đây là loại RBTV nào và thao tác nào cần kiểm tra trong Bảng Tầm Ảnh Hưởng?**

- **A.** RBTV phụ thuộc tồn tại; chỉ kiểm tra duy nhất khi Thêm một đề tài mới vào hệ thống
- **B.** RBTV miền giá trị của cột MaSV; cần kiểm tra khi Xóa sinh viên khỏi bảng SINHVIEN
- **C.** RBTV liên thuộc tính của DETAI; cần kiểm tra khi Sửa kinh phí của đề tài nghiên cứu
- **D.** RBTV liên bộ liên quan hệ; cần kiểm tra khi Thêm mới vào SV_DT (+) và khi Sửa MaSV (+)

> **Đáp án đúng:** **D** — *RBTV liên bộ liên quan hệ; cần kiểm tra khi Thêm mới vào SV_DT (+) và khi Sửa MaSV (+)*
>
> **Giải thích chi tiết:** Quy tắc giới hạn số lượng đề tài của mỗi sinh viên liên quan đến việc đếm số dòng trong SV_DT theo từng MaSV (liên bộ liên quan hệ). Nguy cơ vượt quá 2 đề tài chỉ xảy ra khi: 1) Thêm một phân công mới vào SV_DT (+); 2) Sửa MaSV của một dòng trong SV_DT (+). Thao tác Xóa (-) an toàn vì chỉ làm giảm số lượng.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm với ràng buộc miền giá trị hoặc đánh dấu kiểm tra cả thao tác Xóa.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy phân loại và Bảng Tầm Ảnh Hưởng của ràng buộc giới hạn số lượng tham gia tối đa`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục VI.2 & VIII.1*
> - 💡 **Mẹo hóa giải:** Ràng buộc "Tối đa N...": Thêm (+) và Sửa (+). Xóa mang dấu TRỪ (-) vì bớt đi thì càng không thể vượt quá N!

---

### 📊 BẢNG ĐÁP ÁN NHANH — BỘ ĐỀ SỐ 1 (MÃ ĐỀ: DB-C4-D1)

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **1** | `A` | **11** | `C` | **21** | `A` | **31** | `C` |
| **2** | `B` | **12** | `D` | **22** | `B` | **32** | `D` |
| **3** | `C` | **13** | `A` | **23** | `C` | **33** | `A` |
| **4** | `D` | **14** | `B` | **24** | `D` | **34** | `B` |
| **5** | `A` | **15** | `C` | **25** | `A` | **35** | `C` |
| **6** | `B` | **16** | `D` | **26** | `B` | **36** | `D` |
| **7** | `C` | **17** | `A` | **27** | `C` | **37** | `A` |
| **8** | `D` | **18** | `B` | **28** | `D` | **38** | `B` |
| **9** | `A` | **19** | `C` | **29** | `A` | **39** | `C` |
| **10** | `B` | **20** | `D` | **30** | `B` | **40** | `D` |


## BỘ ĐỀ SỐ 2 (MÃ ĐỀ: db-c4-d2)

*Bộ đề kiểm tra chuyên sâu và nâng cao: Bẫy nhầm Miền giá trị vs Liên thuộc tính, Bẫy dấu (+) và (-) của Khóa chính/Khóa ngoại, 3 chính sách chu trình giao hàng và Đồ án đề tài sinh viên.*

---

### 📌 CHUYÊN ĐỀ 1: KHÁI NIỆM RBTV, 3 YẾU TỐ & KỸ THUẬT BẢNG TẦM ẢNH HƯỞNG (Câu 1 - 10)

#### Câu 1 (db-c4-d2-001) — [🟢 DỄ (NHẬN BIẾT)]

**Mục đích tối thượng của việc thiết lập các Ràng buộc toàn vẹn (RBTV) trong cơ sở dữ liệu là gì?**

- **A.** Tự động tăng tốc độ hiển thị giao diện đồ họa trên màn hình máy trạm
- **B.** Bảo đảm tính đúng đắn, nhất quán và độ tin cậy của dữ liệu trong CSDL
- **C.** Giảm thiểu tối đa dung lượng các tệp tin hình ảnh đính kèm trong bảng
- **D.** Ngăn chặn người dùng đăng xuất khỏi hệ điều hành máy chủ bất ngờ

> **Đáp án đúng:** **B** — *Bảo đảm tính đúng đắn, nhất quán và độ tin cậy của dữ liệu trong CSDL*
>
> **Giải thích chi tiết:** Mục đích của RBTV là đảm bảo tính đúng đắn, tính nhất quán (consistency) và độ tin cậy phản ánh đúng thực tế của dữ liệu trong CSDL.

---

#### Câu 2 (db-c4-d2-002) — [🟢 DỄ (NHẬN BIẾT)]

**Trong 3 yếu tố của một RBTV, yếu tố "Điều kiện" (Condition) KHÔNG THỂ được biểu diễn bằng hình thức nào sau đây?**

- **A.** Hệ thống các biểu thức toán học của Logic vị từ bậc nhất với lượng từ
- **B.** Ngôn ngữ tự nhiên mô tả các quy tắc quản lý nghiệp vụ của thế giới thực
- **C.** Mã nhị phân máy tính thuần túy chỉ gồm các chuỗi ký tự 0 và 1 rời rạc
- **D.** Ngôn ngữ đại số quan hệ hoặc ngôn ngữ thao tác dữ liệu tập hợp chuẩn

> **Đáp án đúng:** **C** — *Mã nhị phân máy tính thuần túy chỉ gồm các chuỗi ký tự 0 và 1 rời rạc*
>
> **Giải thích chi tiết:** Giáo trình quy định điều kiện có thể biểu diễn bằng: Ngôn ngữ tự nhiên, Thuật giải, Đại số tập hợp / ĐSQH, Phụ thuộc hàm, hoặc Logic vị từ. Mã nhị phân 0-1 không phải là hình thức biểu diễn RBTV.

---

#### Câu 3 (db-c4-d2-003) — [🟢 DỄ (NHẬN BIẾT)]

**Trong Bảng Tầm Ảnh Hưởng của một RBTV, ký hiệu dấu cộng ("+") thể hiện hành động nào của hệ quản trị CSDL?**

- **A.** Bắt buộc người dùng phải nhập mật khẩu xác nhận cấp cao trước khi thao tác
- **B.** Cho phép câu lệnh thực thi ngay lập tức mà không cần bất kỳ sự kiểm tra nào
- **C.** Hệ thống tự động cộng thêm một đơn vị giá trị vào thuộc tính khóa của bảng
- **D.** Cần phải kiểm tra RBTV để kịp thời phát hiện và ngăn chặn nếu có vi phạm

> **Đáp án đúng:** **D** — *Cần phải kiểm tra RBTV để kịp thời phát hiện và ngăn chặn nếu có vi phạm*
>
> **Giải thích chi tiết:** Ký hiệu "+" có nghĩa là cần phải kiểm tra: RDBMS sẽ kích hoạt thủ tục kiểm tra hoặc Trigger để chặn thao tác nếu dữ liệu vi phạm ràng buộc.

---

#### Câu 4 (db-c4-d2-004) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Dấu -(+) hoặc +(*) trong Bảng Tầm Ảnh Hưởng biểu thị việc kiểm tra ...(1)..., nghĩa là chỉ kiểm tra khi thuộc tính được cập nhật có ...(2)... biểu thức của RBTV."**

- **A.** có điều kiện / tham gia trực tiếp vào trong
- **B.** bắt buộc tuyệt đối / bị xóa bỏ hoàn toàn khỏi
- **C.** tạm thời bị hoãn / giá trị mặc định trùng với
- **D.** ngẫu nhiên định kỳ / kiểu dữ liệu số nguyên trong

> **Đáp án đúng:** **A** — *có điều kiện / tham gia trực tiếp vào trong*
>
> **Giải thích chi tiết:** Ký hiệu +(*) hoặc -(*) chỉ định việc kiểm tra có điều kiện: chỉ kiểm tra khi thuộc tính bị sửa đổi có liên quan trực tiếp đến biểu thức ràng buộc.

---

#### Câu 5 (db-c4-d2-005) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khi phân loại theo Bối cảnh (Context), toàn bộ các ràng buộc toàn vẹn được chia làm hai nhánh cơ bản nào?**

- **A.** RBTV lưu trên ổ đĩa cứng vật lý và RBTV xử lý tạm thời trên bộ nhớ đệm
- **B.** RBTV có bối cảnh là một quan hệ và RBTV có bối cảnh là nhiều quan hệ
- **C.** RBTV dành cho người dùng cuối và RBTV dành riêng cho quản trị viên DBA
- **D.** RBTV cho dữ liệu kiểu số học và RBTV cho dữ liệu kiểu chuỗi ký tự dài

> **Đáp án đúng:** **B** — *RBTV có bối cảnh là một quan hệ và RBTV có bối cảnh là nhiều quan hệ*
>
> **Giải thích chi tiết:** Giáo trình phân chia RBTV theo bối cảnh thành 2 nhóm lớn: 1) Bối cảnh là một quan hệ (Single-relation); 2) Bối cảnh là nhiều quan hệ (Multi-relation).

---

#### Câu 6 (db-c4-d2-006) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho các thao tác trên cơ sở dữ liệu: Thao tác Thêm (Insert), Thao tác Xóa (Delete) và Thao tác Sửa (Update). Thao tác nào có thể coi là tổ hợp của việc Xóa dòng cũ rồi Thêm dòng mới?**

- **A.** Thao tác Xóa (Delete) bản chất là thay thế dòng dữ liệu bằng một chuỗi rỗng
- **B.** Thao tác Thêm (Insert) bản chất là xóa bỏ dữ liệu rỗng và ghi đè dữ liệu mới
- **C.** Thao tác Sửa (Update) bản chất là xóa bỏ trạng thái cũ và thêm trạng thái mới
- **D.** Cả ba thao tác trên đều độc lập hoàn toàn và không có mối liên hệ logic nào

> **Đáp án đúng:** **C** — *Thao tác Sửa (Update) bản chất là xóa bỏ trạng thái cũ và thêm trạng thái mới*
>
> **Giải thích chi tiết:** Về mặt lý thuyết và trong cỗ máy RDBMS (Trigger inserted / deleted): Thao tác Sửa (Update) một dòng dữ liệu tương đương với việc Xóa dòng dữ liệu cũ và Thêm dòng dữ liệu mới.

---

#### Câu 7 (db-c4-d2-007) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho Bảng Tầm Ảnh Hưởng của một ràng buộc toàn vẹn bất kỳ: Nếu tại một ô mang dấu trừ ("-"), lợi ích kỹ thuật lớn nhất đối với hệ thống là gì?**

- **A.** Cho phép người dùng thực hiện cập nhật mà không cần đăng nhập tài khoản
- **B.** Tự động tăng dung lượng bộ nhớ RAM thực thi của máy chủ lên gấp hai lần
- **C.** Ngăn chặn hoàn toàn hiện tượng nghẽn mạng xảy ra trên đường truyền nội bộ
- **D.** Tiết kiệm tài nguyên xử lý và chi phí truy xuất đĩa (I/O) cho máy chủ CSDL

> **Đáp án đúng:** **D** — *Tiết kiệm tài nguyên xử lý và chi phí truy xuất đĩa (I/O) cho máy chủ CSDL*
>
> **Giải thích chi tiết:** Xác định chính xác các ô mang dấu trừ (-) giúp RDBMS bỏ qua kiểm tra, tránh các truy vấn kiểm tra dư thừa, tiết kiệm tối đa tài nguyên CPU và chi phí I/O đọc ghi đĩa.

---

#### Câu 8 (db-c4-d2-008) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Xét Bảng Tầm Ảnh Hưởng của Ràng buộc khóa ngoại (R2 tham chiếu R1): Vì sao thao tác THÊM (Insert) một dòng mới vào bảng cha R1 LUÔN LUÔN mang dấu trừ ("-")?**

- **A.** Vì thêm một dòng cha mới chỉ làm phong phú nguồn tham chiếu chứ không gây lỗi
- **B.** Vì hệ quản trị cơ sở dữ liệu tự động sao chép dòng cha mới sang tất cả bảng con
- **C.** Vì thao tác thêm vào bảng cha luôn luôn bị vô hiệu hóa nếu bảng con đang mở
- **D.** Vì khóa ngoại chỉ kiểm tra các thao tác xóa và không bao giờ kiểm tra thao tác thêm

> **Đáp án đúng:** **A** — *Vì thêm một dòng cha mới chỉ làm phong phú nguồn tham chiếu chứ không gây lỗi*
>
> **Giải thích chi tiết:** Ràng buộc khóa ngoại đòi hỏi: Giá trị khóa ngoại ở bảng con phải tồn tại ở bảng cha. Khi THÊM một dòng mới vào bảng cha (R1), tập giá trị hợp lệ ở bảng cha mở rộng thêm, hoàn toàn không thể làm bất kỳ dòng nào ở bảng con bị vi phạm (dấu -).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm thao tác Thêm ở bảng con (dấu +) với thao tác Thêm ở bảng cha (dấu -).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy thao tác Thêm ở bảng cha trong ràng buộc Khóa ngoại (Insert on parent table in FK)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục VI.1*
> - 💡 **Mẹo hóa giải:** Khóa ngoại: Bảng cha THÊM mang dấu TRỪ (-)! (Bảng con THÊM mới mang dấu CỘNG +).

---

#### Câu 9 (db-c4-d2-009) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Trong Bảng Tầm Ảnh Hưởng của Ràng buộc khóa ngoại (R2 tham chiếu R1): Vì sao thao tác XÓA (Delete) ở bảng con R2 LUÔN LUÔN mang dấu trừ ("-")?**

- **A.** Vì bảng con không có quyền lưu trữ khóa chính nên được phép xóa tự do tùy ý
- **B.** Vì xóa bớt một dòng con thì không thể làm xuất hiện khóa ngoại không tồn tại
- **C.** Vì khi xóa bảng con thì hệ thống tự động xóa toàn bộ các dòng ở bảng cha theo
- **D.** Vì thao tác xóa ở bảng con luôn luôn kích hoạt cơ chế sao lưu tự động khẩn cấp

> **Đáp án đúng:** **B** — *Vì xóa bớt một dòng con thì không thể làm xuất hiện khóa ngoại không tồn tại*
>
> **Giải thích chi tiết:** Khóa ngoại cấm dòng con trỏ về hư vô. Khi XÓA bớt một dòng ở bảng con (R2), dòng đó biến mất, không còn tham chiếu nào cần kiểm tra, các dòng con còn lại vẫn hợp lệ. Do đó xóa ở bảng con TUYỆT ĐỐI AN TOÀN (dấu -).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ bảng con bị ràng buộc nên khi Xóa cũng phải kiểm tra (+).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy thao tác Xóa ở bảng con trong ràng buộc Khóa ngoại (Delete on child table in FK)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục VI.1*
> - 💡 **Mẹo hóa giải:** Khóa ngoại: Bảng con XÓA mang dấu TRỪ (-)! (Bảng cha XÓA mới mang dấu CỘNG +).

---

#### Câu 10 (db-c4-d2-010) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Cho ràng buộc C: "Trong bảng KET_QUA, điểm thi Diem phải nằm trong đoạn từ 0 đến 10". Bảng Tầm Ảnh Hưởng của ràng buộc này đối với thao tác SỬA (Update) được xác định như thế nào?**

- **A.** Mang dấu trừ (-) tuyệt đối vì sửa điểm không làm thay đổi mã số của sinh viên
- **B.** Mang dấu cộng (+) đối với tất cả mọi thuộc tính bất kể cột nào bị sửa đổi
- **C.** Mang dấu +(Diem) nghĩa là chỉ kiểm tra khi giá trị cột Diem bị thay đổi
- **D.** Hệ thống tự động từ chối mọi thao tác sửa điểm sau khi đã nhập vào bảng

> **Đáp án đúng:** **C** — *Mang dấu +(Diem) nghĩa là chỉ kiểm tra khi giá trị cột Diem bị thay đổi*
>
> **Giải thích chi tiết:** Ràng buộc chỉ kiểm tra giá trị của cột Diem. Nếu sửa MaSV hay MaMH mà không sửa Diem thì không thể làm điểm bị sai miền giá trị. Do đó thao tác Sửa mang dấu có điều kiện +(Diem).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay ghi dấu (+) chung chung mà không chỉ định thuộc tính điều kiện +(Diem).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy ký hiệu kiểm tra có điều kiện khi sửa thuộc tính tham gia ràng buộc`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục III.1 & V.1*
> - 💡 **Mẹo hóa giải:** Sửa thuộc tính: Phải ghi rõ +(ThuộcTính) để hệ thống chỉ kiểm tra khi cột đó bị sửa!

---

### 📌 CHUYÊN ĐỀ 2: PHÂN LOẠI RBTV CÓ BỐI CẢNH LÀ MỘT QUAN HỆ (Câu 11 - 20)

#### Câu 11 (db-c4-d2-011) — [🟢 DỄ (NHẬN BIẾT)]

**Loại Ràng buộc toàn vẹn nào liên quan trực tiếp đến tập các giá trị hợp lệ mà một thuộc tính có thể nhận được?**

- **A.** Ràng buộc toàn vẹn về phụ thuộc tồn tại giữa hai quan hệ độc lập
- **B.** Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ dữ liệu
- **C.** Ràng buộc toàn vẹn liên bộ giữa các dòng dữ liệu khác nhau trong bảng
- **D.** Ràng buộc toàn vẹn về miền giá trị (Domain integrity constraint)

> **Đáp án đúng:** **D** — *Ràng buộc toàn vẹn về miền giá trị (Domain integrity constraint)*
>
> **Giải thích chi tiết:** RBTV về miền giá trị quy định các giá trị mà một thuộc tính A có thể nhận phải thuộc vào miền xác định dom(A).

---

#### Câu 12 (db-c4-d2-012) — [🟢 DỄ (NHẬN BIẾT)]

**Trong bảng NHANVIEN(maNV, tenNV, luong, thuong), quy tắc: "Tiền thưởng không được vượt quá 50% mức lương" thuộc loại RBTV nào?**

- **A.** Ràng buộc toàn vẹn liên thuộc tính (Inter-attribute constraint)
- **B.** Ràng buộc toàn vẹn về miền giá trị của từng cột số học riêng biệt
- **C.** Ràng buộc toàn vẹn liên bộ giữa các nhân viên trong cùng một phòng
- **D.** Ràng buộc toàn vẹn do chu trình đồ thị của các quan hệ tổ chức

> **Đáp án đúng:** **A** — *Ràng buộc toàn vẹn liên thuộc tính (Inter-attribute constraint)*
>
> **Giải thích chi tiết:** Quy tắc thuong <= 0.5 * luong là sự đối sánh giữa 2 thuộc tính trong CÙNG MỘT DÒNG của một nhân viên, do đó là RBTV liên thuộc tính.

---

#### Câu 13 (db-c4-d2-013) — [🟢 DỄ (NHẬN BIẾT)]

**Ràng buộc quy định: "Tổng số cán bộ của một khoa không được vượt quá 50 người" trong bảng KHOA(makhoa, tenkhoa, soCB) thuộc loại RBTV nào?**

- **A.** Ràng buộc toàn vẹn liên thuộc tính giữa tên khoa và số cán bộ
- **B.** Ràng buộc toàn vẹn về miền giá trị của thuộc tính số cán bộ soCB
- **C.** Ràng buộc toàn vẹn về phụ thuộc tồn tại đối với danh mục cán bộ
- **D.** Ràng buộc toàn vẹn do chu trình đồ thị của các đơn vị đào tạo

> **Đáp án đúng:** **B** — *Ràng buộc toàn vẹn về miền giá trị của thuộc tính số cán bộ soCB*
>
> **Giải thích chi tiết:** Ràng buộc soCB <= 50 là điều kiện áp đặt trực tiếp lên miền giá trị hợp lệ của thuộc tính soCB (thuộc tập số nguyên từ 1 đến 50), do đó thuộc loại RBTV về miền giá trị.

---

#### Câu 14 (db-c4-d2-014) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khác biệt căn bản nhất giữa RBTV liên thuộc tính và RBTV liên bộ trong cùng một quan hệ là gì?**

- **A.** Liên thuộc tính nằm trên nhiều bảng, liên bộ chỉ nằm trên một bảng
- **B.** Liên thuộc tính chỉ áp dụng cho số, liên bộ chỉ áp dụng cho chuỗi
- **C.** Liên thuộc tính xét trong cùng 1 bộ, liên bộ xét giữa các bộ khác nhau
- **D.** Liên thuộc tính không cần kiểm tra khi Thêm, liên bộ luôn kiểm tra

> **Đáp án đúng:** **C** — *Liên thuộc tính xét trong cùng 1 bộ, liên bộ xét giữa các bộ khác nhau*
>
> **Giải thích chi tiết:** Ranh giới cốt lõi: RBTV liên thuộc tính thể hiện mối liên hệ giữa các cột trong CÙNG MỘT BỘ (dòng); còn RBTV liên bộ thể hiện sự ràng buộc giữa CÁC BỘ KHÁC NHAU trong bảng.

---

#### Câu 15 (db-c4-d2-015) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong bảng MON_HOC(maMH, tenMH, soTietLT, soTietTH), quy tắc: "soTietLT + soTietTH = 45" thuộc loại RBTV nào?**

- **A.** Ràng buộc toàn vẹn về thuộc tính tổng hợp từ các bảng kết quả thi
- **B.** Ràng buộc toàn vẹn về miền giá trị của thuộc tính số tiết lý thuyết
- **C.** Ràng buộc toàn vẹn liên bộ giữa các môn học khác nhau trong chương trình
- **D.** Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ MON_HOC

> **Đáp án đúng:** **D** — *Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ MON_HOC*
>
> **Giải thích chi tiết:** Điều kiện soTietLT + soTietTH = 45 liên kết 2 thuộc tính trong cùng một dòng môn học, nên là RBTV liên thuộc tính.

---

#### Câu 16 (db-c4-d2-016) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Phát biểu nào sau đây là NHẬN ĐỊNH SAI khi nói về Ràng buộc toàn vẹn miền giá trị?**

- **A.** RBTV miền giá trị luôn đòi hỏi phải có sự so sánh giữa hai cột trong bảng
- **B.** RBTV miền giá trị chỉ kiểm tra tính hợp lệ của từng thuộc tính độc lập
- **C.** Kiểm tra kiểu dữ liệu số nguyên từ 0 đến 10 là một ví dụ về miền giá trị
- **D.** Trong Bảng Tầm Ảnh Hưởng, thao tác Xóa một dòng luôn mang dấu trừ (-)

> **Đáp án đúng:** **A** — *RBTV miền giá trị luôn đòi hỏi phải có sự so sánh giữa hai cột trong bảng*
>
> **Giải thích chi tiết:** Nhận định A sai vì RBTV miền giá trị chỉ áp dụng trên từng thuộc tính độc lập. Nếu so sánh giữa hai cột trong bảng thì đó là RBTV liên thuộc tính!

---

#### Câu 17 (db-c4-d2-017) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho bảng HOADON(soHD, ngayHD, ngayGiao, trigia). Quy tắc nào sau đây là một ví dụ chuẩn về RBTV liên thuộc tính?**

- **A.** Điều kiện kiểm tra mã hóa đơn soHD không được trùng lặp giữa các dòng
- **B.** Điều kiện logic trong cùng một hóa đơn: ngayGiao phải sau hoặc bằng ngayHD
- **C.** Điều kiện trị giá hóa đơn trigia bắt buộc phải là một số thực dương lớn hơn 0
- **D.** Mỗi số hóa đơn soHD trong bảng phải tồn tại trong danh mục đơn đặt hàng

> **Đáp án đúng:** **B** — *Điều kiện logic trong cùng một hóa đơn: ngayGiao phải sau hoặc bằng ngayHD*
>
> **Giải thích chi tiết:** Quy tắc ngayGiao >= ngayHD so sánh 2 thuộc tính trong cùng một hóa đơn, đây là ví dụ chuẩn về RBTV liên thuộc tính. (soHD không trùng là liên bộ; trigia > 0 là miền giá trị; tồn tại trong đặt hàng là khóa ngoại).

---

#### Câu 18 (db-c4-d2-018) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Cho quan hệ NHANVIEN(maNV, tenNV, luong, tamUng, conLai) với quy tắc: conLai = luong − tamUng. Về mặt tối ưu thiết kế CSDL, giải pháp chuẩn mực là gì?**

- **A.** Nhân đôi thuộc tính conLai thành hai cột độc lập để tăng tốc độ truy vấn
- **B.** Bắt buộc giữ lại thuộc tính conLai và tạo thêm bảng phụ để lưu trữ lịch sử
- **C.** Loại bỏ thuộc tính conLai khỏi bảng vì có thể tính được từ luong và tamUng
- **D.** Chuyển đổi kiểu dữ liệu của cả ba thuộc tính sang kiểu chuỗi ký tự cố định

> **Đáp án đúng:** **C** — *Loại bỏ thuộc tính conLai khỏi bảng vì có thể tính được từ luong và tamUng*
>
> **Giải thích chi tiết:** Giáo trình Mục V.2 khẳng định: Nếu thuộc tính conLai tính toán được từ các thuộc tính khác trong cùng bảng (luong - tamUng), ta nên LOẠI BỎ thuộc tính này khỏi lược đồ để tránh dư thừa và dị thường khi cập nhật.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ thuộc tính nào có trong nghiệp vụ thì đều phải tạo thành cột trong bảng.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy loại bỏ thuộc tính dư thừa có thể tính toán được trong cùng một bộ`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục V.2*
> - 💡 **Mẹo hóa giải:** Thuộc tính tính được từ các cột CÙNG BẢNG ➔ Loại bỏ khỏi bảng để tránh dư thừa (Normal form design)!

---

#### Câu 19 (db-c4-d2-019) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Xét quy tắc: "Trong cùng một phòng ban, không có hai nhân viên nào có cùng họ tên". Đây là loại RBTV nào và biểu diễn logic vị từ như thế nào?**

- **A.** RBTV khóa ngoại: NHANVIEN.Phong tham chiếu đến bảng danh mục họ tên nhân sự
- **B.** RBTV liên thuộc tính: ∀ t ∈ NHANVIEN: t.Phong ≠ t.Hoten trong cùng một dòng
- **C.** RBTV miền giá trị: ∀ t ∈ NHANVIEN: t.Hoten ∈ dom(Phong) với mọi nhân viên
- **D.** RBTV liên bộ: ∀ t1, t2 ∈ NHANVIEN: (t1.Phong = t2.Phong ∧ t1.Hoten = t2.Hoten) ⇒ t1 = t2

> **Đáp án đúng:** **D** — *RBTV liên bộ: ∀ t1, t2 ∈ NHANVIEN: (t1.Phong = t2.Phong ∧ t1.Hoten = t2.Hoten) ⇒ t1 = t2*
>
> **Giải thích chi tiết:** Quy tắc cấm 2 người trong cùng phòng có trùng tên là sự so sánh giữa CÁC BỘ KHÁC NHAU trong cùng bảng NHANVIEN, do đó là RBTV liên bộ. Biểu thức: Nếu cùng phòng và cùng tên thì phải là cùng 1 người (t1 = t2).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh thấy có cả 2 thuộc tính Phong và Hoten nên vội vã chọn liên thuộc tính.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy nhầm lẫn giữa liên bộ nhiều thuộc tính và liên thuộc tính trong dòng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục V.3*
> - 💡 **Mẹo hóa giải:** So sánh giữa 2 BỘ KHÁC NHAU (t1 và t2) ➔ 100% là LIÊN BỘ (dù biểu thức dùng 1 hay nhiều cột)!

---

#### Câu 20 (db-c4-d2-020) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Trong Bảng Tầm Ảnh Hưởng của RBTV liên thuộc tính (Ví dụ: ngayHD ≤ ngayXuat trong HOADON): Thao tác XÓA (Delete) một hóa đơn mang dấu gì và vì sao?**

- **A.** Mang dấu trừ (-) vì xóa nguyên một dòng thì không thể làm vi phạm quy tắc ngày
- **B.** Mang dấu cộng (+) vì khi xóa một hóa đơn thì các ngày xuất kho khác bị mồ côi
- **C.** Mang dấu +(ngayHD) vì hệ thống bắt buộc phải kiểm tra ngày lập trước khi xóa
- **D.** Mang dấu cộng (+) nếu hóa đơn đó có trị giá thanh toán vượt mức mười triệu

> **Đáp án đúng:** **A** — *Mang dấu trừ (-) vì xóa nguyên một dòng thì không thể làm vi phạm quy tắc ngày*
>
> **Giải thích chi tiết:** RBTV liên thuộc tính chỉ kiểm tra mối quan hệ nội tại giữa các cột trong CÙNG MỘT DÒNG. Khi xóa toàn bộ dòng đó đi, dòng đó không còn tồn tại nên không thể vi phạm quy tắc. Do đó thao tác Xóa LUÔN MANG DẤU TRỪ (-).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ bảng nghiệp vụ quan trọng thì xóa hóa đơn phải kiểm tra (+).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy thao tác Xóa trong Bảng Tầm Ảnh Hưởng của RBTV liên thuộc tính`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục V.2*
> - 💡 **Mẹo hóa giải:** RBTV liên thuộc tính (trong cùng dòng): XÓA dòng luôn luôn mang dấu TRỪ (-)! Chắc chắn không thể vi phạm!

---

### 📌 CHUYÊN ĐỀ 3: PHÂN LOẠI RBTV CÓ BỐI CẢNH LÀ NHIỀU QUAN HỆ & CHU TRÌNH ĐỒ THỊ (Câu 21 - 30)

#### Câu 21 (db-c4-d2-021) — [🟢 DỄ (NHẬN BIẾT)]

**Ràng buộc toàn vẹn có bối cảnh là NHIỀU quan hệ bao gồm những phân loại chính nào theo giáo trình?**

- **A.** Miền giá trị mở rộng, Liên thuộc tính nội bộ, Phụ thuộc hàm chuẩn và Độc lập dữ liệu logic phân tán
- **B.** Phụ thuộc tồn tại, Liên bộ liên quan hệ, Liên thuộc tính liên quan hệ, Thuộc tính tổng hợp và Chu trình
- **C.** Mã hóa mật khẩu người dùng, Phân quyền bảng dữ liệu, Sao lưu dự phòng và Nhật ký giao tác toàn hệ thống
- **D.** Bảo mật tầng mạng, Kiểm tra phần cứng máy chủ, Giải phóng bộ nhớ đệm và Đồng bộ hóa theo thời gian thực

> **Đáp án đúng:** **B** — *Phụ thuộc tồn tại, Liên bộ liên quan hệ, Liên thuộc tính liên quan hệ, Thuộc tính tổng hợp và Chu trình*
>
> **Giải thích chi tiết:** Giáo trình Mục VII (Sơ đồ tổng hợp): Bối cảnh nhiều quan hệ gồm 5 loại: 1) Phụ thuộc tồn tại; 2) Liên bộ liên quan hệ; 3) Liên thuộc tính liên quan hệ; 4) Thuộc tính tổng hợp; 5) Do chu trình trong đồ thị lược đồ.

---

#### Câu 22 (db-c4-d2-022) — [🟢 DỄ (NHẬN BIẾT)]

**Trong CSDL HSSINHVIEN, điều kiện: "Mỗi sinh viên trong bảng SINH_VIEN phải thuộc về một khoa có thật trong bảng KHOA" là loại RBTV nào?**

- **A.** Ràng buộc toàn vẹn liên thuộc tính giữa họ tên sinh viên và tên khoa
- **B.** Ràng buộc toàn vẹn về miền giá trị của mã khoa trong bảng sinh viên
- **C.** Ràng buộc toàn vẹn về phụ thuộc tồn tại (Ràng buộc khóa ngoại)
- **D.** Ràng buộc toàn vẹn do chu trình đồ thị của các khoa chuyên môn

> **Đáp án đúng:** **C** — *Ràng buộc toàn vẹn về phụ thuộc tồn tại (Ràng buộc khóa ngoại)*
>
> **Giải thích chi tiết:** Sự tồn tại của sinh viên phụ thuộc vào sự tồn tại của khoa (SINH_VIEN.maKhoa tham chiếu KHOA.makhoa), đây là định nghĩa chuẩn của RBTV về phụ thuộc tồn tại (khóa ngoại).

---

#### Câu 23 (db-c4-d2-023) — [🟢 DỄ (NHẬN BIẾT)]

**Dấu hiệu toán học thứ hai (Dấu hiệu 2) nhận biết phụ thuộc tồn tại của quan hệ R2 vào quan hệ R1 trong giáo trình là gì?**

- **A.** Hai quan hệ R1 và R2 hoàn toàn không có bất kỳ thuộc tính chung nào
- **B.** Số lượng thuộc tính của quan hệ R2 bằng đúng số lượng thuộc tính quan hệ R1
- **C.** Tập khóa chính của R2 là tập con thực sự của tập khóa chính của quan hệ R1
- **D.** Khóa K1 của R1 xuất hiện như một thuộc tính thông thường trong R2 (K1 ⊆ R2)

> **Đáp án đúng:** **D** — *Khóa K1 của R1 xuất hiện như một thuộc tính thông thường trong R2 (K1 ⊆ R2)*
>
> **Giải thích chi tiết:** Dấu hiệu (2) trong Giáo trình Mục VI.1: Nếu K1 là khóa của R1 và K1 ⊆ R2 (K1 xuất hiện như thuộc tính thường trong R2) thì có phụ thuộc tồn tại của R2 vào R1 (K1 là khóa ngoại của R2).

---

#### Câu 24 (db-c4-d2-024) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong CSDL QLHANGHOA, quy tắc: "Số tiền công nợ (congNo) của khách hàng bằng tổng tiền hóa đơn bán trừ tổng tiền phiếu thu" thuộc loại RBTV nào?**

- **A.** Ràng buộc toàn vẹn về thuộc tính tổng hợp (Aggregate / derived attribute)
- **B.** Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ KHACH
- **C.** Ràng buộc toàn vẹn về miền giá trị của số tiền công nợ khách hàng
- **D.** Ràng buộc toàn vẹn do chu trình đồ thị của các đơn đặt hàng

> **Đáp án đúng:** **A** — *Ràng buộc toàn vẹn về thuộc tính tổng hợp (Aggregate / derived attribute)*
>
> **Giải thích chi tiết:** Cột congNo nằm ở bảng KHACH nhưng được tính toán từ các thuộc tính của 2 bảng khác là HOA_DON và PHIEU_THU, nên thuộc loại RBTV về thuộc tính tổng hợp.

---

#### Câu 25 (db-c4-d2-025) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Trong đồ thị lược đồ CSDL, nếu tồn tại một chu trình giữa các bảng dữ liệu thì giữa chúng bắt buộc phải có một ...(1)... để điều phối và kiểm soát tính ...(2)... của dữ liệu."**

- **A.** chỉ mục phân cụm độc quyền / bảo mật đa tầng cho máy chủ
- **B.** ràng buộc toàn vẹn chu trình / nhất quán ngữ nghĩa nghiệp vụ
- **C.** bản sao lưu dữ liệu tạm / toàn vẹn bộ nhớ đệm hệ thống
- **D.** khóa chính tự tăng liên tục / độc lập vật lý của các bảng

> **Đáp án đúng:** **B** — *ràng buộc toàn vẹn chu trình / nhất quán ngữ nghĩa nghiệp vụ*
>
> **Giải thích chi tiết:** Khi đồ thị CSDL xuất hiện chu trình (cycle), giữa các bảng này bắt buộc phải có một ràng buộc toàn vẹn chu trình để đảm bảo tính nhất quán ngữ nghĩa của dữ liệu.

---

#### Câu 26 (db-c4-d2-026) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho các nhận định sau về RBTV phụ thuộc tồn tại (Khóa ngoại):
(I) Khóa ngoại liên kết hai quan hệ dựa trên sự phụ thuộc tồn tại.
(II) Bảng con tham chiếu khóa ngoại không được phép chứa giá trị NULL nếu có NOT NULL.
(III) Bảng con có thể chứa giá trị khóa ngoại mà bảng cha hoàn toàn chưa có.
Khẳng định nào sau đây là ĐÚNG?**

- **A.** Chỉ có duy nhất nhận định (III) là nhận định đúng đắn theo nguyên lý tham chiếu
- **B.** Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác
- **C.** Chỉ có nhận định (I) và (II) đúng, nhận định (III) là nhận định hoàn toàn sai
- **D.** Nhận định (I) là nhận định sai, nhận định (II) và (III) là những nhận định đúng

> **Đáp án đúng:** **C** — *Chỉ có nhận định (I) và (II) đúng, nhận định (III) là nhận định hoàn toàn sai*
>
> **Giải thích chi tiết:** Nhận định (I) và (II) đúng. Nhận định (III) sai vì bản chất của khóa ngoại là cấm bảng con chứa giá trị không tồn tại ở bảng cha.

---

#### Câu 27 (db-c4-d2-027) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong CSDL QLHANGHOA, quy tắc: "Một đơn đặt hàng chỉ được giải quyết trong một hóa đơn duy nhất". Đây là loại RBTV nào?**

- **A.** Ràng buộc toàn vẹn về thuộc tính tổng hợp của phiếu thanh toán
- **B.** Ràng buộc toàn vẹn về miền giá trị của mã số đơn đặt hàng soDH
- **C.** Ràng buộc toàn vẹn liên thuộc tính trong cùng bảng đơn đặt hàng
- **D.** Ràng buộc toàn vẹn liên bộ, liên quan hệ (giữa DAT_HANG và HOA_DON)

> **Đáp án đúng:** **D** — *Ràng buộc toàn vẹn liên bộ, liên quan hệ (giữa DAT_HANG và HOA_DON)*
>
> **Giải thích chi tiết:** Quy tắc này ràng buộc giữa các bộ của DAT_HANG và HOA_DON (cấm 1 soDH xuất hiện trên 2 dòng HOA_DON khác nhau), do đó thuộc loại RBTV liên bộ, liên quan hệ.

---

#### Câu 28 (db-c4-d2-028) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Xét chu trình đồ thị giữa 3 bảng: DAT_HANG - HOA_DON - CTIET_HD. Nếu một công ty áp dụng chính sách: "Mỗi hóa đơn phải giao đầy đủ 100% tất cả mặt hàng khách đã đặt", thì hậu quả thực tế nào có thể xảy ra?**

- **A.** Hóa đơn không thể xuất được nếu kho hàng bị tạm hết dù chỉ một mặt hàng duy nhất
- **B.** Toàn bộ dữ liệu của bảng đơn đặt hàng tự động bị chuyển sang trạng thái đã hủy
- **C.** Hệ thống tự động mua hàng từ nhà cung cấp bên ngoài để bù đắp vào kho hàng
- **D.** Không có hậu quả nào vì mọi hệ thống thương mại đều bắt buộc phải áp dụng chính sách này

> **Đáp án đúng:** **A** — *Hóa đơn không thể xuất được nếu kho hàng bị tạm hết dù chỉ một mặt hàng duy nhất*
>
> **Giải thích chi tiết:** Chính sách (1) đòi hỏi phải giao đủ 100% mặt hàng trong đơn. Nếu kho thiếu 1 mặt hàng thì không thể xuất hóa đơn cho các mặt hàng còn lại, gây ách tắc giao hàng trong thực tế. Vì vậy CSDL QLHANGHOA chọn chính sách (2) linh hoạt hơn: không bắt buộc đủ nhưng không giao vượt.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ chính sách giao đủ 100% luôn là tối ưu nhất mà không thấy nhược điểm thực tế.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy phân tích ưu nhược điểm của 3 chính sách chu trình giao hàng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục VI.3*
> - 💡 **Mẹo hóa giải:** Chính sách 1 (Giao đủ 100%): Thiếu 1 món là KẸT CẢ ĐƠN. Chính sách 2 (Không giao vượt): Thực tế và tối ưu nhất!

---

#### Câu 29 (db-c4-d2-029) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Bảng KHACH có thuộc tính congNo tính từ HOA_DON và PHIEU_THU. Khi thực hiện XÓA một khách hàng ra khỏi bảng KHACH, Bảng Tầm Ảnh Hưởng quy định dấu gì?**

- **A.** Mang dấu trừ (-) tuyệt đối vì xóa khách hàng thì công nợ tự động biến mất theo
- **B.** Mang dấu cộng (+) vì phải kiểm tra khách hàng đó đã thanh toán hết nợ (congNo = 0) chưa
- **C.** Mang dấu trừ (-) vì bảng KHACH là bảng chứa thuộc tính chứ không phải bảng nguồn
- **D.** Hệ thống tự động cấm xóa khách hàng trong mọi hoàn cảnh kể cả khi công nợ bằng 0

> **Đáp án đúng:** **B** — *Mang dấu cộng (+) vì phải kiểm tra khách hàng đó đã thanh toán hết nợ (congNo = 0) chưa*
>
> **Giải thích chi tiết:** Quy tắc quản lý kinh doanh nghiêm ngặt: Không thể tùy tiện xóa một khách hàng nếu khách hàng đó vẫn còn nợ tiền công ty (congNo > 0) hoặc công ty còn nợ tiền khách (congNo < 0). Do đó thao tác Xóa ở bảng KHACH bắt buộc phải kiểm tra mang dấu CỘNG (+).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ xóa ở bảng chứa thuộc tính suy diễn thì chỉ việc xóa dòng là xong (dấu -).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy kiểm tra điều kiện công nợ khi xóa khách hàng trong Bảng Tầm Ảnh Hưởng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục VI.2.c*
> - 💡 **Mẹo hóa giải:** Xóa khách hàng: BẮT BUỘC kiểm tra (+) để đảm bảo congNo = 0 mới cho phép xóa!

---

#### Câu 30 (db-c4-d2-030) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Trong RBTV liên thuộc tính liên quan hệ (Ví dụ: HOA_DON.ngayHD ≥ DAT_HANG.ngayDH): Khi SỬA cột ngayDH ở bảng DAT_HANG, hệ thống có cần kiểm tra không?**

- **A.** Chỉ kiểm tra khi người quản trị thực hiện sửa đổi cả mã số khách hàng đặt hàng
- **B.** Không cần kiểm tra (-) vì hóa đơn đã lập rồi thì ngày đặt hàng sửa đổi không ảnh hưởng
- **C.** Có kiểm tra +(ngayDH) vì nếu lùi ngày đặt hàng ra sau ngày lập hóa đơn sẽ gây vi phạm
- **D.** Mang dấu trừ (-) tuyệt đối vì bảng DAT_HANG là bảng gốc xuất hiện trước hóa đơn

> **Đáp án đúng:** **C** — *Có kiểm tra +(ngayDH) vì nếu lùi ngày đặt hàng ra sau ngày lập hóa đơn sẽ gây vi phạm*
>
> **Giải thích chi tiết:** Ràng buộc đòi hỏi ngayHD >= ngayDH. Nếu ai đó sửa ngayDH ở bảng DAT_HANG thành một ngày lớn hơn ngayHD của hóa đơn tương ứng thì sẽ vi phạm ràng buộc (đặt hàng sau khi đã lập hóa đơn!). Do đó thao tác Sửa cột ngayDH bắt buộc phải kiểm tra: +(ngayDH).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ ngày đặt hàng đã qua rồi thì sửa thoải mái không ai kiểm tra.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy Bảng Tầm Ảnh Hưởng khi sửa thuộc tính tham gia ràng buộc thời gian liên bảng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục VI.2.b*
> - 💡 **Mẹo hóa giải:** Sửa bất kỳ thuộc tính nào có mặt trong biểu thức (kể cả bảng đặt hàng) ➔ BẮT BUỘC mang dấu CỘNG (+)!

---

### 📌 CHUYÊN ĐỀ 4: BIỂU DIỄN HÌNH THỨC LOGIC VỊ TỪ & ĐỒ ÁN ĐỀ TÀI SINH VIÊN (Câu 31 - 40)

#### Câu 31 (db-c4-d2-031) — [🟢 DỄ (NHẬN BIẾT)]

**Trong biểu diễn hình thức của RBTV bằng Logic vị từ bậc nhất, ký hiệu toán học "∃" mang ý nghĩa là gì?**

- **A.** Toán tử phủ định logic (Logical negation, đảo ngược giá trị đúng sai)
- **B.** Lượng từ với mọi (Universal quantifier, áp dụng bắt buộc cho tất cả phần tử)
- **C.** Toán tử tương đương logic (Equivalence operator, hai vế có cùng giá trị chân lý)
- **D.** Lượng từ tồn tại (Existential quantifier, có ít nhất một phần tử thỏa mãn)

> **Đáp án đúng:** **D** — *Lượng từ tồn tại (Existential quantifier, có ít nhất một phần tử thỏa mãn)*
>
> **Giải thích chi tiết:** Ký hiệu ∃ là lượng từ "tồn tại" (There exists), chỉ định phải có ít nhất một phần tử thỏa mãn điều kiện.

---

#### Câu 32 (db-c4-d2-032) — [🟢 DỄ (NHẬN BIẾT)]

**Trong biểu thức Logic vị từ, toán tử kéo theo "P ⇒ Q" chỉ nhận giá trị SAI (False) trong trường hợp duy nhất nào?**

- **A.** Khi mệnh đề P nhận giá trị Đúng (True) nhưng mệnh đề Q lại nhận giá trị Sai (False)
- **B.** Khi cả hai mệnh đề P và Q đều cùng nhận giá trị Đúng (True) trong biểu thức
- **C.** Khi cả hai mệnh đề P và Q đều cùng nhận giá trị Sai (False) trong biểu thức
- **D.** Khi mệnh đề P nhận giá trị Sai (False) còn mệnh đề Q nhận giá trị Đúng (True)

> **Đáp án đúng:** **A** — *Khi mệnh đề P nhận giá trị Đúng (True) nhưng mệnh đề Q lại nhận giá trị Sai (False)*
>
> **Giải thích chi tiết:** Theo bảng chân trị của logic mệnh đề: Phép kéo theo P ⇒ Q chỉ sai khi tiền đề P đúng mà kết luận Q sai (True ⇒ False là False). Các trường hợp còn lại đều Đúng.

---

#### Câu 33 (db-c4-d2-033) — [🟢 DỄ (NHẬN BIẾT)]

**Trong Đồ án Đề tài: DETAI(MaDT, TenDT, Chunhiem, Kinhphi). Thuộc tính nào sau đây đóng vai trò là Khóa chính của bảng DETAI?**

- **A.** Thuộc tính TenDT là khóa chính vì mỗi đề tài bắt buộc phải có tên riêng
- **B.** Thuộc tính MaDT là khóa chính phân biệt duy nhất từng đề tài nghiên cứu
- **C.** Thuộc tính Chunhiem là khóa chính đại diện cho giảng viên phụ trách đề tài
- **D.** Thuộc tính Kinhphi là khóa chính phân loại quy mô kinh phí của đề tài

> **Đáp án đúng:** **B** — *Thuộc tính MaDT là khóa chính phân biệt duy nhất từng đề tài nghiên cứu*
>
> **Giải thích chi tiết:** Mỗi đề tài có mã số duy nhất MaDT, đây là khóa chính của quan hệ DETAI.

---

#### Câu 34 (db-c4-d2-034) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Biểu thức Logic vị từ nào sau đây diễn đạt CHUẨN XÁC: "Mọi sinh viên trong KET_QUA đều phải tồn tại trong bảng SINH_VIEN" (Khóa ngoại)?**

- **A.** ∀ kq ∈ KET_QUA, ∀ sv ∈ SINH_VIEN: kq.maSV = sv.maSV (mọi kq trùng mã với mọi sv)
- **B.** ∃ kq ∈ KET_QUA, ∀ sv ∈ SINH_VIEN: kq.maSV = sv.maSV (tồn tại kq ứng với mọi sv)
- **C.** ∀ kq ∈ KET_QUA, ∃ sv ∈ SINH_VIEN: kq.maSV = sv.maSV (mọi kq đều có sv tương ứng)
- **D.** ∃ kq ∈ KET_QUA, ∃ sv ∈ SINH_VIEN: kq.maSV ≠ sv.maSV (tồn tại cặp có mã khác nhau)

> **Đáp án đúng:** **C** — *∀ kq ∈ KET_QUA, ∃ sv ∈ SINH_VIEN: kq.maSV = sv.maSV (mọi kq đều có sv tương ứng)*
>
> **Giải thích chi tiết:** Biểu diễn hình thức chuẩn của ràng buộc khóa ngoại (phụ thuộc tồn tại): Với mọi bộ kq trong KET_QUA, phải tồn tại một bộ sv trong SINH_VIEN sao cho kq.maSV = sv.maSV.

---

#### Câu 35 (db-c4-d2-035) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong Đồ án Đề tài, bảng SV_DT có hai khóa ngoại MaSV và MaDT. Hai khóa ngoại này tham chiếu tương ứng đến những bảng nào?**

- **A.** MaSV tham chiếu bảng DETAI, MaDT tham chiếu bảng SINHVIEN theo thứ tự đảo
- **B.** MaSV tham chiếu bảng KHOA, MaDT tham chiếu bảng MON_HOC trong hệ thống
- **C.** Cả hai khóa ngoại này đều cùng tham chiếu về bảng cha duy nhất là SINHVIEN
- **D.** MaSV tham chiếu bảng cha SINHVIEN, MaDT tham chiếu bảng cha DETAI

> **Đáp án đúng:** **D** — *MaSV tham chiếu bảng cha SINHVIEN, MaDT tham chiếu bảng cha DETAI*
>
> **Giải thích chi tiết:** Bảng kết hợp SV_DT có: MaSV là khóa ngoại tham chiếu SINHVIEN(MaSV); MaDT là khóa ngoại tham chiếu DETAI(MaDT).

---

#### Câu 36 (db-c4-d2-036) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cho các nhận định sau về biểu diễn Logic vị từ của RBTV:
(I) Biểu thức ∀t ∈ R: P(t) tương đương với phủ định ¬(∃t ∈ R: ¬P(t)).
(II) Lượng từ với mọi đòi hỏi toàn bộ các dòng hiện có đều phải thỏa mãn điều kiện.
(III) Nếu quan hệ R đang rỗng (không có dòng nào), biểu thức ∀t ∈ R: P(t) luôn luôn ĐÚNG.
Khẳng định nào sau đây là ĐÚNG?**

- **A.** Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác
- **B.** Chỉ có nhận định (I) và (II) đúng, nhận định (III) là nhận định sai lầm
- **C.** Chỉ có duy nhất nhận định (II) là nhận định đúng đắn theo quy chuẩn logic
- **D.** Nhận định (I) là nhận định sai, nhận định (II) và (III) là những nhận định đúng

> **Đáp án đúng:** **A** — *Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác*
>
> **Giải thích chi tiết:** Cả 3 nhận định đều chuẩn mực theo logic toán học: 1) Luật De Morgan mở rộng; 2) Bản chất lượng từ ∀; 3) Mệnh đề với mọi trên tập rỗng (Vacuous truth) luôn nhận giá trị TRUE.

---

#### Câu 37 (db-c4-d2-037) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Điền vào chỗ trống: "Trong Logic vị từ, để biểu diễn tính toàn vẹn tham chiếu của khóa ngoại giữa quan hệ con R2 và quan hệ cha R1, ta sử dụng cặp lượng từ ...(1)... cho R2 và ...(2)... cho R1."**

- **A.** ∃ (tồn tại một bộ thuộc R2) / ∀ (với mọi bộ thuộc R1)
- **B.** ∀ (với mọi bộ thuộc R2) / ∃ (tồn tại ít nhất một bộ thuộc R1)
- **C.** ∀ (với mọi bộ thuộc R2) / ∀ (với mọi bộ thuộc R1)
- **D.** ∃ (tồn tại một bộ thuộc R2) / ∃ (tồn tại một bộ thuộc R1)

> **Đáp án đúng:** **B** — *∀ (với mọi bộ thuộc R2) / ∃ (tồn tại ít nhất một bộ thuộc R1)*
>
> **Giải thích chi tiết:** Cấu trúc chuẩn của khóa ngoại trong logic vị từ: ∀ t2 ∈ R2, ∃ t1 ∈ R1: t2.FK = t1.PK.

---

#### Câu 38 (db-c4-d2-038) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Trong Đồ án Đề tài, quy tắc: "Mỗi đề tài nghiên cứu chỉ được giao cho tối đa 3 sinh viên cùng thực hiện". Khi SỬA cột MaDT trong bảng SV_DT, Bảng Tầm Ảnh Hưởng quy định dấu gì?**

- **A.** Mang dấu trừ có điều kiện vì chỉ kiểm tra khi sinh viên đó có học lực yếu kém
- **B.** Mang dấu trừ (-) tuyệt đối vì sửa mã đề tài chỉ làm giảm bớt số người của đề tài cũ
- **C.** Mang dấu +(MaDT) vì việc đổi đề tài có thể làm đề tài mới vượt quá 3 sinh viên
- **D.** Hệ thống tự động từ chối thao tác sửa mã đề tài và bắt buộc phải xóa rồi tạo mới

> **Đáp án đúng:** **C** — *Mang dấu +(MaDT) vì việc đổi đề tài có thể làm đề tài mới vượt quá 3 sinh viên*
>
> **Giải thích chi tiết:** Quy tắc giới hạn số sinh viên tối đa cho một đề tài là 3. Khi sửa MaDT của một dòng trong SV_DT (chuyển sinh viên từ đề tài A sang đề tài B), đề tài B được cộng thêm 1 người và có nguy cơ vượt quá 3 người. Do đó bắt buộc phải kiểm tra: +(MaDT).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ sửa mã thì đề tài cũ bớt người nên an toàn (-), mà quên mất đề tài mới tăng người (+).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy tăng số lượng ở đối tượng đích khi sửa thuộc tính phân nhóm`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục VI.2 & VIII.1*
> - 💡 **Mẹo hóa giải:** Sửa thuộc tính phân nhóm (MaDT, MaPhong...): Đối tượng đích TĂNG số lượng ➔ BẮT BUỘC mang dấu CỘNG (+)!

---

#### Câu 39 (db-c4-d2-039) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Xét quy tắc: "Năm sinh của sinh viên phải hợp lệ: Namsinh nằm trong khoảng từ 1980 đến năm hiện hành" trong SINHVIEN. Biểu thức Logic vị từ nào dưới đây là CHUẨN XÁC NHẤT?**

- **A.** ∀ sv ∈ SINHVIEN: sv.Namsinh = 1980 ⇒ sv.Hocluc = N'Xuất sắc'
- **B.** ∃ sv ∈ SINHVIEN: sv.Namsinh ≥ 1980 ∨ sv.Namsinh ≤ Year(GetDate())
- **C.** ∀ sv1, sv2 ∈ SINHVIEN: sv1.Namsinh ≠ sv2.Namsinh ∧ sv1.Namsinh ≥ 1980
- **D.** ∀ sv ∈ SINHVIEN: sv.Namsinh ≥ 1980 ∧ sv.Namsinh ≤ Year(GetDate())

> **Đáp án đúng:** **D** — *∀ sv ∈ SINHVIEN: sv.Namsinh ≥ 1980 ∧ sv.Namsinh ≤ Year(GetDate())*
>
> **Giải thích chi tiết:** Ràng buộc miền giá trị áp dụng cho mọi sinh viên trong bảng SINHVIEN: ∀ sv ∈ SINHVIEN: sv.Namsinh >= 1980 ∧ sv.Namsinh <= Year(GetDate()).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm phép hội (∧) với phép tuyển (∨) khi thể hiện đoạn giá trị [A, B].
> - 🎯 **Từ khóa gài bẫy:** `Bẫy toán tử liên kết trong đoạn giá trị miền năm sinh (AND vs OR)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục V.1 & VIII.1*
> - 💡 **Mẹo hóa giải:** Nằm trong đoạn [A, B] ➔ BẮT BUỘC dùng phép HỘI (∧) cả hai cận: x >= A ∧ x <= B!

---

#### Câu 40 (db-c4-d2-040) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống tổng hợp: Cho quy tắc: "Chủ nhiệm đề tài (Chunhiem) trong bảng DETAI bắt buộc phải là một cán bộ thuộc một khoa có trong bảng KHOA". Bảng Tầm Ảnh Hưởng của quy tắc này kiểm tra ở những thao tác nào?**

- **A.** Thêm vào DETAI (+), Sửa Chunhiem ở DETAI (+), Xóa ở bảng KHOA (+), Sửa makhoa ở KHOA (+)
- **B.** Chỉ kiểm tra duy nhất khi Thêm một đề tài mới vào bảng DETAI trong hệ thống
- **C.** Chỉ kiểm tra khi Xóa một cán bộ khỏi danh mục và không cần kiểm tra bảng KHOA
- **D.** Kiểm tra tất cả các thao tác Thêm, Xóa, Sửa trên cả ba bảng SINHVIEN, DETAI, KHOA

> **Đáp án đúng:** **A** — *Thêm vào DETAI (+), Sửa Chunhiem ở DETAI (+), Xóa ở bảng KHOA (+), Sửa makhoa ở KHOA (+)*
>
> **Giải thích chi tiết:** Đây là ràng buộc khóa ngoại (phụ thuộc tồn tại) giữa DETAI (bảng con) và KHOA (bảng cha). Do đó: 1) Bảng con DETAI: Thêm (+), Sửa Chunhiem (+), Xóa (-); 2) Bảng cha KHOA: Thêm (-), Xóa (+), Sửa makhoa (+).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay bỏ sót các thao tác ở bảng cha (Xóa KHOA và Sửa makhoa).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy Bảng Tầm Ảnh Hưởng đầy đủ hai chiều của ràng buộc khóa ngoại thực tế`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 4, Mục VI.1 & VIII.1*
> - 💡 **Mẹo hóa giải:** Khóa ngoại hoàn chỉnh: Bảng con (Thêm +, Sửa +); Bảng cha (Xóa +, Sửa +)!

---

### 📊 BẢNG ĐÁP ÁN NHANH — BỘ ĐỀ SỐ 2 (MÃ ĐỀ: DB-C4-D2)

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **1** | `B` | **11** | `D` | **21** | `B` | **31** | `D` |
| **2** | `C` | **12** | `A` | **22** | `C` | **32** | `A` |
| **3** | `D` | **13** | `B` | **23** | `D` | **33** | `B` |
| **4** | `A` | **14** | `C` | **24** | `A` | **34** | `C` |
| **5** | `B` | **15** | `D` | **25** | `B` | **35** | `D` |
| **6** | `C` | **16** | `A` | **26** | `C` | **36** | `A` |
| **7** | `D` | **17** | `B` | **27** | `D` | **37** | `B` |
| **8** | `A` | **18** | `C` | **28** | `A` | **38** | `C` |
| **9** | `B` | **19** | `D` | **29** | `B` | **39** | `D` |
| **10** | `C` | **20** | `A` | **30** | `C` | **40** | `A` |


