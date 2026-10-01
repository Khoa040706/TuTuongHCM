# TỔNG HỢP 2 BỘ ĐỀ THI BẪY CHUYÊN SÂU — CHƯƠNG II: MÔ HÌNH DỮ LIỆU QUAN HỆ (RELATIONAL DATA MODEL)
## MÔN HỌC: HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)

---

### MỤC LỤC TỔNG QUAN

1. [BẢNG TRA CỨU ĐÁP ÁN NHANH ĐỀ BẪY 1 & 2](#bang-tra-cuu-dap-an-nhanh)
2. [NỘI DUNG CHI TIẾT ĐỀ BẪY 1 (db-c2-t1)](#de-thi-bay-so-1-db-c2-t1)
3. [NỘI DUNG CHI TIẾT ĐỀ BẪY 2 (db-c2-t2)](#de-thi-bay-so-2-db-c2-t2)

---

## <a name="bang-tra-cuu-dap-an-nhanh"></a> BẢNG TRA CỨU ĐÁP ÁN NHANH

### BẢNG ĐÁP ÁN ĐỀ BẪY SỐ 1 (db-c2-t1-001 ĐẾN 050)

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | `A` | **11** | `C` | **21** | `A` | **31** | `C` | **41** | `A` |
| **2** | `B` | **12** | `D` | **22** | `B` | **32** | `D` | **42** | `B` |
| **3** | `C` | **13** | `A` | **23** | `C` | **33** | `A` | **43** | `C` |
| **4** | `D` | **14** | `B` | **24** | `D` | **34** | `B` | **44** | `D` |
| **5** | `A` | **15** | `C` | **25** | `A` | **35** | `C` | **45** | `A` |
| **6** | `B` | **16** | `D` | **26** | `B` | **36** | `D` | **46** | `B` |
| **7** | `C` | **17** | `A` | **27** | `C` | **37** | `A` | **47** | `C` |
| **8** | `D` | **18** | `B` | **28** | `D` | **38** | `B` | **48** | `D` |
| **9** | `A` | **19** | `C` | **29** | `A` | **39** | `C` | **49** | `A` |
| **10** | `B` | **20** | `D` | **30** | `B` | **40** | `D` | **50** | `B` |


### BẢNG ĐÁP ÁN ĐỀ BẪY SỐ 2 (db-c2-t2-001 ĐẾN 050)

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | `C` | **11** | `A` | **21** | `C` | **31** | `A` | **41** | `C` |
| **2** | `D` | **12** | `B` | **22** | `D` | **32** | `B` | **42** | `D` |
| **3** | `A` | **13** | `C` | **23** | `A` | **33** | `C` | **43** | `A` |
| **4** | `B` | **14** | `D` | **24** | `B` | **34** | `D` | **44** | `B` |
| **5** | `C` | **15** | `A` | **25** | `C` | **35** | `A` | **45** | `C` |
| **6** | `D` | **16** | `B` | **26** | `D` | **36** | `B` | **46** | `D` |
| **7** | `A` | **17** | `C` | **27** | `A` | **37** | `C` | **47** | `A` |
| **8** | `B` | **18** | `D` | **28** | `B` | **38** | `D` | **48** | `B` |
| **9** | `C` | **19** | `A` | **29** | `C` | **39** | `A` | **49** | `C` |
| **10** | `D` | **20** | `B` | **30** | `D` | **40** | `B` | **50** | `D` |


---

## <a name="de-thi-bay-so-1-db-c2-t1"></a> ĐỀ THI BẪY SỐ 1 (db-c2-t1)

> **Quy mô:** 50 câu hỏi bẫy vận dụng cao (100% Hard / Trick Questions)
> **Mã định danh:** `db-c2-t1-001` đến `db-c2-t1-050`

### Câu 1 [db-c2-t1-001]

Khẳng định nào sau đây là KHÔNG ĐÚNG khi nói về mối quan hệ giữa Siêu khóa (Super Key) và Khóa (Key)?

- **A.** Mọi siêu khóa đều là khóa của lược đồ quan hệ và không chứa thuộc tính dư thừa  *(Đáp án đúng)*
- **B.** Mọi khóa của lược đồ quan hệ chắc chắn đều thỏa mãn định nghĩa của một siêu khóa
- **C.** Một siêu khóa bị loại bỏ các thuộc tính dư thừa sẽ trở thành một khóa tối thiểu
- **D.** Mọi tập con chứa một siêu khóa của lược đồ quan hệ cũng chính là một siêu khóa

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục I.4 nêu rõ: Khóa là siêu khóa tối thiểu. Mọi khóa đều là siêu khóa, nhưng một siêu khóa có thể chứa các thuộc tính dư thừa nên KHÔNG PHẢI mọi siêu khóa đều là khóa.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn tính chất hai chiều: tưởng Siêu khóa và Khóa có thể hoán đổi cho nhau.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ngụy biện đảo chiều: "Mọi siêu khóa đều là khóa"`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.4.a & I.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mọi Khóa ĐỀU LÀ Siêu khóa, nhưng Siêu khóa CHƯA CHẮC là Khóa (vì có thể dư thừa)!

---

### Câu 2 [db-c2-t1-002]

Thuộc tính khóa (Prime Attribute) trong mô hình dữ liệu quan hệ được định nghĩa chuẩn xác là gì?

- **A.** Là thuộc tính bắt buộc phải nằm bên trong khóa chính được chọn để cài đặt
- **B.** Là thuộc tính có tham gia vào một khóa bất kỳ nào đó của lược đồ quan hệ  *(Đáp án đúng)*
- **C.** Là thuộc tính duy nhất có kiểu dữ liệu số nguyên tự tăng trong bảng quan hệ
- **D.** Là thuộc tính khóa ngoại tham chiếu đến khóa chính của bảng quan hệ cha

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục I.4.f: Thuộc tính khóa (Prime Attribute) là thuộc tính có tham gia vào MỘT KHÓA BẤT KỲ (khóa dự tuyển hoặc khóa chính), không bắt buộc phải nằm trong khóa chính.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Hầu hết học viên cho rằng chỉ thuộc tính nằm trong "Khóa chính" mới là Thuộc tính khóa.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy đánh đồng Khóa chính với Bất kỳ khóa nào trong định nghĩa Prime Attribute`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.4.f
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Prime Attribute = Nằm trong BẤT KỲ KHÓA NÀO (kể cả khóa dự tuyển Candidate Key)!

---

### Câu 3 [db-c2-t1-003]

Cho quan hệ r gồm 5 bộ dữ liệu khác nhau. Khi người dùng cố tình thêm vào một bộ mới giống hệt một bộ đã có, quan hệ r sẽ thay đổi như thế nào?

- **A.** Hệ quản trị CSDL sẽ tự động xóa sạch toàn bộ 5 bộ dữ liệu cũ của quan hệ r ngay lập tức
- **B.** Quan hệ r tự động tăng lên thành 6 bộ và bộ mới được xếp ở vị trí cuối cùng của bảng
- **C.** Quan hệ r hoàn toàn không thay đổi và số phần tử của quan hệ r vẫn giữ nguyên là 5 bộ  *(Đáp án đúng)*
- **D.** Toàn bộ cấu trúc các cột của quan hệ r sẽ bị nhân đôi lên để chứa dữ liệu mới trùng lặp

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Theo tiên đề lý thuyết tập hợp (mục I.3.b): Một quan hệ là một tập hợp các bộ. Thêm vào một dòng (bộ) giống với dòng đã có thì quan hệ KHÔNG THAY ĐỔI ($A \cup \{x\} = A$ nếu $x \in A$).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh bị ảnh hưởng bởi bảng Excel hoặc SQL không có khóa nên nghĩ số dòng tăng lên 6.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy lý thuyết tập hợp toán học: Tập hợp không chứa phần tử trùng lặp`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Quan hệ r = Tập hợp các bộ ➔ Thêm dòng trùng lặp thì r KHÔNG THAY ĐỔI!

---

### Câu 4 [db-c2-t1-004]

Khẳng định nào sau đây là ĐÚNG khi nói về giá trị của Khóa ngoại (Foreign Key) trong một quan hệ con?

- **A.** Giá trị khóa ngoại chỉ được phép nhận các giá trị số nguyên dương lớn hơn không
- **B.** Giá trị khóa ngoại bắt buộc phải luôn luôn khác NULL trong tất cả các trường hợp
- **C.** Giá trị khóa ngoại bắt buộc phải trùng khớp với khóa chính trong cùng bảng đó
- **D.** Giá trị khóa ngoại có thể nhận giá trị NULL nếu không có ràng buộc cấm rỗng  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Khóa ngoại tham chiếu đến khóa của quan hệ khác. Giá trị của khóa ngoại có thể là NULL (ví dụ: nhân viên chưa được phân vào phòng ban nào thì MaPhong là NULL), trừ khi có ràng buộc NOT NULL hoặc là khóa của thực thể yếu.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm quy tắc NOT NULL của Khóa chính áp đặt luôn cho Khóa ngoại.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tuyệt đối hóa: Khóa ngoại HOÀN TOÀN CÓ THỂ MANG GIÁ TRỊ NULL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.4.e
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa chính CẤM NULL; Khóa ngoại ĐƯỢC PHÉP NULL (trừ khi có ràng buộc riêng)!

---

### Câu 5 [db-c2-t1-005]

Cho lược đồ quan hệ R(U) với tập thuộc tính U = {A, B, C, D, E}. Phát biểu nào sau đây về Siêu khóa là HOÀN TOÀN ĐÚNG?

- **A.** Tập hợp tất cả thuộc tính U chắc chắn là một siêu khóa của lược đồ quan hệ R  *(Đáp án đúng)*
- **B.** Chỉ có tập hợp nào gồm đúng một thuộc tính duy nhất mới được coi là siêu khóa
- **C.** Một lược đồ quan hệ có thể không có bất kỳ một siêu khóa nào nếu bảng đang rỗng
- **D.** Tập rỗng luôn luôn được định nghĩa là một siêu khóa chuẩn của mọi quan hệ toán học

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục I.4.a nêu rõ tính chất: Một quan hệ có ít nhất một siêu khóa, đó là tập U gồm tất cả thuộc tính của quan hệ.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ bảng rỗng thì không có siêu khóa hoặc nhầm tập rỗng là siêu khóa.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tính tồn tại: Tập thuộc tính U LUÔN LUÔN là một Siêu khóa`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tập U chứa tất cả thuộc tính ➔ Chắc chắn là một Siêu khóa của quan hệ!

---

### Câu 6 [db-c2-t1-006]

Sự khác biệt bản chất duy nhất giữa "Khóa chính" (Primary Key) và "Khóa dự tuyển" (Candidate Key) là gì?

- **A.** Khóa chính có ít thuộc tính hơn so với tất cả các khóa dự tuyển của quan hệ đó
- **B.** Khóa chính là khóa tối thiểu được người thiết kế chọn để cài đặt cho quan hệ  *(Đáp án đúng)*
- **C.** Khóa chính không cho phép giá trị trùng lặp còn khóa dự tuyển thì cho phép trùng
- **D.** Khóa chính được tạo tự động bởi hệ điều hành còn khóa dự tuyển do DBA tự gõ

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục I.4.c & I.4.d: Khóa chính là một khóa tối thiểu được người phân tích chọn để cài đặt. Các khóa tối thiểu khác không được chọn làm khóa chính gọi là khóa dự tuyển. Cả hai đều là khóa tối thiểu và đều không cho phép trùng lặp.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nghĩ Khóa chính phải có ít thuộc tính hơn Khóa dự tuyển hoặc Khóa dự tuyển được trùng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy bản chất: Đều là khóa tối thiểu, chỉ khác ở việc ĐƯỢC CHỌN ĐỂ CÀI ĐẶT`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.4.c & I.4.d
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa chính = Khóa tối thiểu được CHỌN CÀI ĐẶT; Các khóa tối thiểu còn lại = Khóa dự tuyển.

---

### Câu 7 [db-c2-t1-007]

Điền thuật ngữ: "Toàn bộ mô tả cấu trúc của một CSDL được gọi là (...), còn dữ liệu thực tế lưu trữ tại một thời điểm nhất định được gọi là (...)."

- **A.** Khung nhìn CSDL (Database View) ... Lược đồ quan hệ con (Sub-schema)
- **B.** Thể hiện của CSDL (Database Instance) ... Lược đồ CSDL (Database Schema)
- **C.** Lược đồ CSDL (Database Schema) ... Thể hiện của CSDL (Database Instance)  *(Đáp án đúng)*
- **D.** Lược đồ vật lý (Internal Schema) ... Mô hình thực thể kết hợp (ERD Schema)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục I.5.a phân biệt rõ: Toàn bộ mô tả CSDL gọi là Lược đồ CSDL (Database Schema). Toàn bộ dữ liệu lưu trữ tại một thời điểm gọi là Thể hiện của CSDL (Database Instance).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay đảo ngược thứ tự giữa Schema (Cấu trúc mô tả) và Instance (Dữ liệu tại thời điểm).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy cặp khái niệm song sinh Schema vs Instance`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.5.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mô tả cấu trúc = Lược đồ (Schema); Dữ liệu tại 1 thời điểm = Thể hiện (Instance)!

---

### Câu 8 [db-c2-t1-008]

Cho quan hệ r gồm các thuộc tính U = {MaSV, Hoten, Ngaysinh, Lop}. Khẳng định nào sau đây về thứ tự các dòng và các cột là ĐÚNG?

- **A.** Thứ tự các dòng bắt buộc phải luôn luôn được sắp xếp tăng dần theo khóa chính
- **B.** Đổi chỗ hai dòng trong bảng sẽ làm thay đổi bản chất toán học của quan hệ r
- **C.** Đổi chỗ hai cột thuộc tính sẽ tạo ra một lược đồ quan hệ hoàn toàn mới trên đĩa
- **D.** Thứ tự của các dòng và thứ tự của các cột hoàn toàn không làm thay đổi quan hệ  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Theo tiên đề lý thuyết tập hợp (mục I.3.b): Một quan hệ là một tập hợp các bộ, và một bộ là một ánh xạ từ thuộc tính sang giá trị. Do đó, thứ tự của các dòng và thứ tự của các cột không quan trọng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thói quen nhìn bảng vật lý có thứ tự hiển thị làm thí sinh tưởng đổi thứ tự là đổi quan hệ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tính chất phi thứ tự (Unordered) của tập hợp trong mô hình quan hệ`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Lý thuyết tập hợp: Thứ tự dòng và thứ tự cột HOÀN TOÀN KHÔNG QUAN TRỌNG!

---

### Câu 9 [db-c2-t1-009]

Cho các nhận định về Họ nhà Khóa:
(I) Một quan hệ có thể có nhiều khóa dự tuyển.
(II) Mỗi quan hệ chỉ được phép có duy nhất một siêu khóa.
(III) Khóa tối thiểu không chứa thuộc tính dư thừa.
Tổ hợp ĐÚNG là:

- **A.** Nhận định (I) và (III) hoàn toàn đúng, nhận định (II) sai  *(Đáp án đúng)*
- **B.** Cả ba nhận định (I), (II) và (III) đều hoàn toàn chính xác theo sách
- **C.** Chỉ có duy nhất nhận định (III) là đúng, nhận định (I) và (II) sai
- **D.** Nhận định (II) và (III) hoàn toàn đúng, nhận định (I) sai

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** (II) sai vì một quan hệ có thể có NHIỀU siêu khóa (mọi tập cha của khóa đều là siêu khóa). (I) và (III) hoàn toàn đúng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn số lượng siêu khóa (vô số) với khóa chính (duy nhất).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy số lượng siêu khóa: Có thể có rất nhiều Siêu khóa, không bao giờ chỉ có duy nhất 1`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.4.a & I.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Siêu khóa có thể có RẤT NHIỀU; Khóa chính được chọn thì DUY NHẤT 1!

---

### Câu 10 [db-c2-t1-010]

Trong định nghĩa hình thức toán học của mô hình quan hệ, một quan hệ r trên lược đồ R(A1, ..., An) là một tập con của phép toán nào?

- **A.** Phép hợp logic của các tập hợp thuộc tính D(A1) U D(A2) U ... U D(An)
- **B.** Tích Descartes của các miền giá trị D(A1) x D(A2) x ... x D(An)  *(Đáp án đúng)*
- **C.** Phép giao toán học của tất cả các miền giá trị D(A1) ∩ ... ∩ D(An)
- **D.** Phép hiệu tập hợp giữa tập thuộc tính U và các miền giá trị D(Ai)

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục I.3.a: Một quan hệ r trên LĐQH R là một tập con của tích Descartes của các miền giá trị: r ⊆ D(A1) × D(A2) × ... × D(An).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm tích Descartes với phép hợp (Union) các miền giá trị.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy nền tảng toán học: Quan hệ là tập con của TÍCH DESCARTES các miền giá trị`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Quan hệ r ⊆ D(A1) × D(A2) × ... × D(An) (Tích Descartes)!

---

### Câu 11 [db-c2-t1-011]

Khái niệm "Tân từ của lược đồ quan hệ" (Predicate) được hiểu một cách chính xác nhất là gì?

- **A.** Là danh sách toàn bộ các giá trị số nguyên đang được lưu trong ổ đĩa cứng máy chủ
- **B.** Là câu lệnh lập trình C dùng để cấp phát bộ nhớ động cho các con trỏ liên kết
- **C.** Là ý nghĩa ngữ nghĩa thực tế giải thích quy tắc quản lý của lược đồ quan hệ đó  *(Đáp án đúng)*
- **D.** Là hàm băm dùng để mã hóa mật khẩu người dùng trước khi lưu xuống cơ sở dữ liệu

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục I.2.a: Tân từ của LĐQH là ý nghĩa ngữ nghĩa của LĐQH (ví dụ: Mỗi sinh viên có một mã số duy nhất, mỗi mã số xác định tất cả thuộc tính của sinh viên đó...).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thuật ngữ "Tân từ" thuần túy toán logic làm thí sinh dễ nhầm sang câu lệnh code.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thuật ngữ Tân từ (Predicate) chính là Ý NGHĨA NGỮ NGHĨA của lược đồ`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tân từ = Ý nghĩa ngữ nghĩa đời thực của Lược đồ quan hệ!

---

### Câu 12 [db-c2-t1-012]

Cho lược đồ quan hệ R(A, B, C, D) có 2 khóa tối thiểu là K1 = {A, B} và K2 = {B, C}. Tập hợp các thuộc tính khóa (Prime Attributes) của R là gì?

- **A.** Chỉ có duy nhất thuộc tính {D} vì D là thuộc tính không tham gia vào khóa nào
- **B.** Chỉ duy nhất thuộc tính {B} vì B là thuộc tính chung xuất hiện ở cả hai khóa
- **C.** Chỉ có 2 thuộc tính {A, B} nếu K1 được người thiết kế lựa chọn làm khóa chính
- **D.** Tập hợp gồm 3 thuộc tính {A, B, C} vì cả ba đều tham gia vào ít nhất một khóa  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Thuộc tính khóa (Prime Attribute) là thuộc tính tham gia vào MỘT KHÓA BẤT KỲ. Ở đây A và B tham gia vào K1; B và C tham gia vào K2. Do đó tập thuộc tính khóa là {A, B, C}. Thuộc tính D là thuộc tính không khóa.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay lấy giao của 2 khóa ({B}) hoặc chỉ lấy khóa chính {A, B}.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy xác định Prime Attribute: Lấy HỢP của tất cả các khóa tối thiểu`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.4.f
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Prime Attributes = {A, B} ∪ {B, C} = {A, B, C}!

---

### Câu 13 [db-c2-t1-013]

Bẫy nhận định: Trong một quan hệ, có thể tồn tại 2 thuộc tính trùng tên nhau hay không?

- **A.** Không bao giờ, trong cùng một quan hệ tuyệt đối không được có 2 thuộc tính cùng tên  *(Đáp án đúng)*
- **B.** Có thể, miễn là hai thuộc tính đó có kiểu dữ liệu khác nhau (một số và một chuỗi)
- **C.** Có thể, nếu một thuộc tính là khóa chính còn thuộc tính kia là khóa ngoại tham chiếu
- **D.** Có thể, nếu người quản trị DBA sử dụng hệ điều hành 64 bit để cài đặt cơ sở dữ liệu

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục I.1.c lưu ý quan trọng: Trong cùng một quan hệ (đối tượng), KHÔNG ĐƯỢC CÓ 2 THUỘC TÍNH CÙNG TÊN. Các thuộc tính phải được phân biệt bằng tên gọi duy nhất.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ khác kiểu dữ liệu thì được trùng tên như overloading trong OOP.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy trùng tên thuộc tính: Trong 1 quan hệ, tên thuộc tính BẮT BUỘC PHẢI DUY NHẤT`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.1.c
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Trong 1 bảng quan hệ: TUYỆT ĐỐI KHÔNG ĐƯỢC có 2 cột trùng tên!

---

### Câu 14 [db-c2-t1-014]

Mô hình dữ liệu quan hệ được nhà khoa học E.F. Codd đề xuất chính thức vào năm nào?

- **A.** Năm 1985 khi hệ điều hành đồ họa Microsoft Windows 1.0 lần đầu tiên ra mắt
- **B.** Năm 1970 / 1971 trong các bài báo khoa học mang tính bước ngoặt của ACM  *(Đáp án đúng)*
- **C.** Năm 1995 cùng thời điểm ngôn ngữ lập trình Java của hãng Sun được công bố
- **D.** Năm 1960 trong giai đoạn sơ khai của các hệ thống xử lý tập tin máy tính lớn

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục I.1.b nêu rõ: Mô hình CSDL quan hệ do E.F. Codd đề xuất năm 1970/1971.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm mốc 1960 (File processing) hoặc thập niên 80-90.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy mốc lịch sử phát minh RDBMS: E.F. Codd 1970/1971`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* E.F. Codd phát minh Mô hình quan hệ vào năm 1970/1971!

---

### Câu 15 [db-c2-t1-015]

Cho bảng NHANVIEN có 7 cột và 10 dòng dữ liệu. Theo thuật ngữ toán học trong giáo trình, quan hệ này có bao nhiêu phần tử và mỗi phần tử là một bộ mấy giá trị?

- **A.** Quan hệ có đúng 70 phần tử độc lập, mỗi phần tử tương ứng với một ô trong bảng
- **B.** Quan hệ có đúng 7 phần tử, và mỗi phần tử là một bộ 10 giá trị (còn gọi là 10-bộ)
- **C.** Quan hệ có đúng 10 phần tử, và mỗi phần tử là một bộ 7 giá trị (còn gọi là 7-bộ)  *(Đáp án đúng)*
- **D.** Quan hệ có vô số phần tử do tích Descartes của 7 miền thuộc tính sinh ra liên tục

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục I.3.b (Ví dụ 7-bộ): Mỗi dòng là một phần tử của quan hệ. Bảng có 10 dòng ➔ 10 phần tử. Bảng có 7 thuộc tính ➔ mỗi phần tử là một bộ 7 giá trị (7-bộ).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn giữa số dòng (số phần tử) với số cột (bậc k của k-bộ), hoặc lấy 7x10=70.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy số phần tử của quan hệ = SỐ DÒNG (bộ), Bậc của bộ = SỐ CỘT`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Số phần tử = Số dòng (10); Mỗi phần tử = k-bộ tương ứng số cột (7-bộ)!

---

### Câu 16 [db-c2-t1-016]

Hai quan hệ r1 và r2 được gọi là "tương thích" (Compatible) với nhau khi và chỉ khi thỏa mãn điều kiện gì?

- **A.** Chúng hoàn toàn không có bất kỳ thuộc tính chung nào (tức là U1 giao U2 bằng rỗng)
- **B.** Chúng có cùng số lượng các dòng dữ liệu bên trong bảng bất kể số lượng cột
- **C.** Chúng được lưu trữ trên cùng một cung từ (sector) của cùng một ổ đĩa cứng vật lý
- **D.** Chúng có cùng tập thuộc tính U (tức là U1 = U2 cả về tên gọi và miền giá trị)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục II.1.b định nghĩa: Hai quan hệ r1, r2 tương thích với nhau nếu chúng CÓ CÙNG TẬP THUỘC TÍNH U (U1 = U2). Nếu không có thuộc tính chung (U1 ∩ U2 = ∅) thì gọi là HAI QUAN HỆ RỜI NHAU.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm định nghĩa "tương thích" với định nghĩa "rời nhau" hoặc cùng số dòng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy định nghĩa Tương thích (U1 = U2) vs Rời nhau (U1 ∩ U2 = ∅)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tương thích = CÙNG TẬP THUỘC TÍNH U1 = U2!

---

### Câu 17 [db-c2-t1-017]

Phát biểu nào sau đây là KHÔNG ĐÚNG khi nói về Phép chiếu (Projection — ký hiệu π) trong đại số quan hệ?

- **A.** Phép chiếu luôn luôn giữ nguyên số lượng các bộ giống hệt như quan hệ ban đầu  *(Đáp án đúng)*
- **B.** Phép chiếu dùng để trích chọn một tập con các thuộc tính cần thiết từ quan hệ gốc
- **C.** Phép chiếu bắt buộc phải thực hiện thao tác loại bỏ các bộ trùng lặp trong kết quả
- **D.** Số lượng các bộ trong kết quả của phép chiếu có thể nhỏ hơn số bộ của quan hệ gốc

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Khẳng định "luôn giữ nguyên số lượng các bộ" là SAI. Giáo trình mục II.2.b nêu rõ: Thao tác thực hiện phép chiếu gồm: 1) Giữ lại các thuộc tính trong tập X; 2) Loại bỏ các bộ trùng lặp. Do đó, số bộ kết quả có thể ít hơn số bộ ban đầu.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh quen với lệnh SQL `SELECT cot FROM bang` (không có DISTINCT) nên nghĩ phép chiếu không loại bỏ dòng trùng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy toán học của Phép chiếu π: BẮT BUỘC loại bỏ bộ trùng lặp`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.2.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Phép chiếu trong ĐSQH luôn tự động LOẠI BỎ BỘ TRÙNG LẶP (tương đương SELECT DISTINCT)!

---

### Câu 18 [db-c2-t1-018]

Tính chất toán học nào sau đây là ĐÚNG đối với Phép chọn (Selection — ký hiệu σ)?

- **A.** Phép chọn làm thay đổi cấu trúc số lượng cột của quan hệ kết quả thu được
- **B.** Các phép chọn có tính chất giao hoán: σ_C1(σ_C2(R)) = σ_C2(σ_C1(R))  *(Đáp án đúng)*
- **C.** Các phép chọn không bao giờ có thể kết hợp với nhau bằng toán tử logic AND
- **D.** Phép chọn chỉ có thể thực hiện được khi quan hệ có chứa ít nhất một khóa ngoại

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục II.2.a ghi rõ: Các phép chọn có tính giao hoán: σ_C1(σ_C2(R)) = σ_C2(σ_C1(R)) = σ_(C1 ∧ C2)(R). Phép chọn lọc dòng, không làm đổi số lượng cột.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh không nhớ tính giao hoán của phép chọn hoặc nhầm phép chọn làm thay đổi cột.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tính chất giao hoán của Phép chọn σ`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Phép chọn σ có tính GIAO HOÁN: Lọc điều kiện 1 rồi lọc điều kiện 2 = Lọc 2 rồi lọc 1!

---

### Câu 19 [db-c2-t1-019]

Cho quan hệ r1 có 3 bộ và quan hệ r2 có 4 bộ, biết r1 và r2 là hai quan hệ rời nhau. Số bộ trong kết quả của Phép tích Descartes r1 x r2 là bao nhiêu?

- **A.** Chính xác là 1 bộ (vì chỉ có bộ nào có khóa chính giống nhau mới kết hợp được)
- **B.** Chính xác là 7 bộ (vì số bộ của tích Descartes bằng tổng số bộ của 2 quan hệ)
- **C.** Chính xác là 12 bộ (vì số bộ của tích Descartes bằng tích số bộ của 2 quan hệ)  *(Đáp án đúng)*
- **D.** Chính xác là 0 bộ (vì hai quan hệ rời nhau không có thuộc tính chung để ghép)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục II.3.a: Phép tích Descartes chỉ xét trên 2 quan hệ rời nhau; Số bộ của r × s = (số bộ của r) × (số bộ của s) = 3 × 4 = 12 bộ.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người lấy 3+4=7 bộ hoặc nhầm tích Descartes đòi hỏi thuộc tính chung.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy số bộ tích Descartes = Số bộ r x Số bộ s`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tích Descartes: Số bộ = 3 x 4 = 12 bộ; Bậc = n + m thuộc tính!

---

### Câu 20 [db-c2-t1-020]

Sự khác biệt cốt lõi giữa Phép kết nối bằng (Equijoin) và Phép kết nối tự nhiên (Natural Join — ký hiệu *) là gì?

- **A.** Kết nối bằng chỉ thực hiện trên một quan hệ đơn còn kết nối tự nhiên thực hiện trên ba quan hệ
- **B.** Kết nối bằng không sử dụng toán tử dấu bằng còn kết nối tự nhiên thì bắt buộc phải dùng
- **C.** Kết nối tự nhiên giữ lại cả hai cột trùng tên còn kết nối bằng thì xóa bỏ cả hai cột đó
- **D.** Kết nối tự nhiên kết nối trên thuộc tính trùng tên và loại bỏ 1 cột trùng để tránh dư thừa  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục II.3.b: Kết nối tự nhiên (r * s) là phép kết nối bằng tại các thuộc tính trùng tên của 2 quan hệ, và một trong hai thuộc tính trùng tên bị loại bỏ khỏi kết quả để tránh dư thừa dữ liệu.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ kết nối tự nhiên giữ lại cả 2 cột trùng tên như tích Descartes.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy loại bỏ cột trùng trong Kết nối tự nhiên Natural Join (*)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Kết nối tự nhiên: Bằng nhau ở cột trùng tên + LOẠI BỎ 1 CỘT TRÙNG TÊN!

---

### Câu 21 [db-c2-t1-021]

Điều kiện bắt buộc để có thể thực hiện được các phép toán tập hợp: Hợp (∪), Giao (∩) và Hiệu (−) trong đại số quan hệ là gì?

- **A.** Hai quan hệ tham gia phép toán bắt buộc phải là hai quan hệ tương thích (cùng tập thuộc tính)  *(Đáp án đúng)*
- **B.** Hai quan hệ tham gia phép toán bắt buộc phải có số lượng các bộ dữ liệu hoàn toàn bằng nhau
- **C.** Hai quan hệ tham gia phép toán bắt buộc phải có ít nhất một trường khóa ngoại liên kết với nhau
- **D.** Hai quan hệ tham gia phép toán bắt buộc phải được tạo ra bởi cùng một người sử dụng cuối

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục II.4.c nhấn mạnh: Các phép hợp (∪), giao (∩), hiệu (−) CHỈ THỰC HIỆN ĐƯỢC trên hai quan hệ TƯƠNG THÍCH (có cùng tập thuộc tính U).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh quen với UNION trong SQL có thể khác tên cột (chỉ cần cùng kiểu dữ liệu) nên quên điều kiện ĐSQH thuần túy.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy điều kiện tương thích nghiêm ngặt trong toán Đại số quan hệ`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.4.c
  + 💡 *Mẹo phản xạ nhanh (`tip`):* ∪, ∩, − trong ĐSQH: BẮT BUỘC 2 quan hệ phải TƯƠNG THÍCH (Cùng tập thuộc tính U)!

---

### Câu 22 [db-c2-t1-022]

Trong đại số quan hệ, phép toán nào tương ứng trực tiếp với lượng từ phổ quát "VỚI MỌI" (∀) trong toán logic, chuyên giải bài toán mang ý nghĩa "TẤT CẢ"?

- **A.** Phép tích Descartes nhân chéo hai quan hệ (ký hiệu là ×)
- **B.** Phép chia đại số quan hệ (Division — ký hiệu là ÷)  *(Đáp án đúng)*
- **C.** Phép kết nối tự nhiên giữa các quan hệ (ký hiệu là *)
- **D.** Phép hiệu giữa hai quan hệ tương thích (ký hiệu là −)

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục II.5.b khẳng định: Phép chia (÷) là công cụ toán học tương ứng với lượng từ phổ quát VỚI MỌI (∀), chuyên dùng để giải các bài toán mang ý nghĩa "TẤT CẢ" hoặc "MỌI" (VD: sinh viên học tất cả các môn của khoa CNTT).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ bài toán "Tất cả" dùng phép kết nối hoặc phép giao.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phép toán giải quyết bài toán "TẤT CẢ" / "VỚI MỌI (∀)": Chính là Phép Chia (÷)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.5.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tìm đối tượng thỏa mãn "TẤT CẢ" / "VỚI MỌI" ➔ Bắt buộc dùng PHÉP CHIA (÷)!

---

### Câu 23 [db-c2-t1-023]

Cho quan hệ r trên lược đồ R(A, B, C) và quan hệ s trên lược đồ S(B, C). Tập thuộc tính của quan hệ kết quả thu được từ Phép chia r ÷ s là gì?

- **A.** Gồm 2 thuộc tính {B, C} giống hệt như lược đồ của quan hệ chia s
- **B.** Gồm cả 3 thuộc tính {A, B, C} giống hệt như lược đồ của quan hệ bị chia ban đầu
- **C.** Chỉ gồm duy nhất một thuộc tính {A} (tức là tập hiệu thuộc tính R - S)  *(Đáp án đúng)*
- **D.** Gồm 5 thuộc tính {A, B, C, B, C} do tích hợp tất cả các cột của cả hai quan hệ

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục II.5.b định nghĩa: Phép chia của r(R) cho s(S), ký hiệu r ÷ s, là quan hệ trên lược đồ R - S. Với R = {A, B, C} và S = {B, C}, tập thuộc tính kết quả là R - S = {A}.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh không nhớ cấu trúc thuộc tính kết quả của phép chia là R - S.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy lược đồ kết quả phép chia: Luôn có thuộc tính là R - S`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.5.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Lược đồ kết quả r(R) ÷ s(S) = R - S!

---

### Câu 24 [db-c2-t1-024]

Biểu thức ĐSQH nào sau đây biểu diễn ĐÚNG yêu cầu: "Tìm mã số và họ tên của các sinh viên sinh trước năm 1985 và có quê quán ở Cần Thơ" từ bảng SINHVIEN(MaSV, Hoten, Namsinh, QQ, Hocluc)?

- **A.** σ_(Namsinh < 1985) (SINHVIEN) ∪ σ_(QQ = 'Cần Thơ') (SINHVIEN)
- **B.** σ_(MaSV, Hoten) (π_(Namsinh < 1985 ∧ QQ = 'Cần Thơ') (SINHVIEN))
- **C.** π_(Namsinh < 1985 ∧ QQ = 'Cần Thơ') (σ_(MaSV, Hoten) (SINHVIEN))
- **D.** π_(MaSV, Hoten) (σ_(Namsinh < 1985 ∧ QQ = 'Cần Thơ') (SINHVIEN))  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Để lọc các dòng thỏa mãn điều kiện năm sinh và quê quán, dùng phép chọn σ_(Namsinh < 1985 ∧ QQ = 'Cần Thơ'). Sau đó chiếu lấy mã SV và họ tên bằng phép chiếu π_(MaSV, Hoten). Phương án A viết chuẩn xác.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm lẫn ký hiệu giữa Phép chiếu π (lọc cột) và Phép chọn σ (lọc dòng điều kiện).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy đảo lộn ký hiệu toán học: π là Chiếu (cột), σ là Chọn (dòng điều kiện)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.2.a & II.2.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Chọn điều kiện dùng σ; Chiếu lấy cột dùng π!

---

### Câu 25 [db-c2-t1-025]

Cho 2 quan hệ r và s tương thích. Khẳng định nào sau đây về tính chất giao hoán của các phép toán tập hợp là ĐÚNG?

- **A.** Phép hợp và phép giao có tính giao hoán, nhưng phép hiệu không có tính giao hoán  *(Đáp án đúng)*
- **B.** Cả ba phép hợp, phép giao và phép hiệu đều có tính chất giao hoán đối xứng nhau
- **C.** Chỉ có duy nhất phép hợp là có tính giao hoán, còn phép giao và phép hiệu thì không
- **D.** Không có bất kỳ phép toán tập hợp nào có tính chất giao hoán trong đại số quan hệ

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** r ∪ s = s ∪ r (giao hoán); r ∩ s = s ∩ r (giao hoán). Tuy nhiên r - s ≠ s - r (phép hiệu KHÔNG có tính giao hoán).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người nhớ nhầm tính giao hoán áp dụng cho cả phép trừ/hiệu.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tính giao hoán: Phép hiệu (Difference −) KHÔNG GIAO HOÁN`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.4
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Hợp và Giao có giao hoán; Phép Hiệu r - s KHÔNG giao hoán!

---

### Câu 26 [db-c2-t1-026]

Khi thực hiện Phép chọn σ_C(r), nếu điều kiện C sử dụng các toán tử so sánh thứ tự {<, ≤, >, ≥}, miền giá trị của thuộc tính tham gia BẮT BUỘC phải thỏa mãn điều kiện gì?

- **A.** Miền giá trị của thuộc tính đó bắt buộc phải là kiểu chuỗi ký tự Unicode
- **B.** Miền giá trị của thuộc tính đó bắt buộc phải là miền có thứ tự xác định  *(Đáp án đúng)*
- **C.** Miền giá trị của thuộc tính đó bắt buộc phải chứa toàn các số nguyên dương
- **D.** Miền giá trị của thuộc tính đó bắt buộc không được phép chứa giá trị rỗng NULL

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục II.2.a lưu ý rõ: Toán tử so sánh {=, <, ≤, >, ≥, ≠} chỉ áp dụng cho thuộc tính có miền giá trị CÓ THỨ TỰ. Nếu miền không có thứ tự thì CHỈ ĐƯỢC DÙNG {=, ≠}.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh ít chú ý đến điều kiện tiên quyết "miền giá trị có thứ tự" đối với các toán tử so sánh.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy điều kiện tiên quyết: Toán tử so sánh thứ tự chỉ áp dụng cho Miền có thứ tự`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* So sánh lớn hơn/nhỏ hơn: Bắt buộc Miền giá trị phải có thứ tự!

---

### Câu 27 [db-c2-t1-027]

Phép đặt lại tên (Rename) trong đại số quan hệ có vai trò kỹ thuật quan trọng nhất là gì?

- **A.** Tự động mã hóa tên người dùng để ngăn chặn tin tặc tấn công nghe lén qua đường truyền mạng
- **B.** Làm thay đổi vĩnh viễn tên của bảng dữ liệu lưu trữ vật lý trên đĩa cứng của máy chủ
- **C.** Giúp đặt tên cho các quan hệ trung gian và thuộc tính, làm biểu thức phức hợp rõ ràng hơn  *(Đáp án đúng)*
- **D.** Bắt buộc phải sử dụng để hệ điều hành Windows nhận diện được các ký tự tiếng Việt có dấu

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục II.5.a: Để trả lời một câu hỏi phức tạp, phải tổ hợp nhiều phép toán. Dùng phép đặt tên để đặt tên cho các quan hệ trung gian (và thuộc tính), giúp biểu thức ĐSQH rõ ràng, mạch lạc hơn.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm phép Rename trong ĐSQH với lệnh đổi tên bảng vĩnh viễn `sp_rename` trong SQL.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy vai trò của Rename: Tạo định danh cho quan hệ trung gian trong chuỗi tính toán`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.5.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Rename trong ĐSQH = Đặt tên cho quan hệ trung gian giúp biểu thức rõ ràng!

---

### Câu 28 [db-c2-t1-028]

Cho 3 mệnh đề về Đại số quan hệ:
(I) ĐSQH có tính đầy đủ và phi thủ tục.
(II) Phép kết nối điều kiện θ-Join chỉ chấp nhận duy nhất toán tử so sánh bằng (=).
(III) Phép chiếu π luôn tự động loại bỏ các bộ trùng lặp.
Tổ hợp ĐÚNG là:

- **A.** Mệnh đề (II) và (III) hoàn toàn đúng, mệnh đề (I) hoàn toàn sai lệch
- **B.** Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn chính xác giáo trình
- **C.** Chỉ có duy nhất mệnh đề (I) là đúng, mệnh đề (II) và (III) là sai sót
- **D.** Mệnh đề (I) và (III) hoàn toàn đúng, mệnh đề (II) hoàn toàn sai lệch  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** (II) sai vì phép θ-Join chấp nhận bất kỳ toán tử so sánh nào trong {=, <, ≤, >, ≥, ≠}. Khi θ là toán tử bằng (=) thì mới gọi là Equijoin. (I) và (III) hoàn toàn đúng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm lẫn giữa định nghĩa tổng quát của θ-Join với trường hợp riêng Equijoin.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy toán tử θ-Join: θ có thể là bất kỳ toán tử so sánh nào, không chỉ có dấu bằng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.1.a, II.2.b, II.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* θ-Join: θ là {=, <, ≤, >, ≥, ≠}; Chỉ khi θ là dấu '=' mới là Equijoin!

---

### Câu 29 [db-c2-t1-029]

Biểu thức ĐSQH biểu diễn câu hỏi: "In ra mã số và họ tên của các sinh viên KHÔNG tham gia thực hiện bất kỳ đề tài nào" (dùng SINHVIEN và SV_DT) là gì?

- **A.** π_(MaSV, Hoten) (SINHVIEN) − π_(MaSV, Hoten) (SINHVIEN * SV_DT)  *(Đáp án đúng)*
- **B.** π_(MaSV, Hoten) (SINHVIEN) ∩ π_(MaSV, Hoten) (SINHVIEN * SV_DT)
- **C.** π_(MaSV, Hoten) (SINHVIEN) ∪ π_(MaSV, Hoten) (SINHVIEN * SV_DT)
- **D.** π_(MaSV, Hoten) (σ_(MaDT = NULL) (SINHVIEN * SV_DT))

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Để tìm đối tượng KHÔNG tham gia (phủ định), kỹ thuật chuẩn mực trong ĐSQH là dùng PHÉP HIỆU (Difference −): Lấy tất cả sinh viên trừ đi những sinh viên có xuất hiện trong bảng SV_DT. Hai vế của phép hiệu đều có thuộc tính {MaSV, Hoten} nên hoàn toàn tương thích.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay cố gắng dùng điều kiện `MaDT = NULL` trong phép kết nối tự nhiên (vốn loại bỏ dòng không khớp).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy kỹ thuật Anti-Join trong ĐSQH: Bắt buộc dùng Phép Hiệu (−)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.4.c
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tìm đối tượng KHÔNG làm gì ➔ Lấy Tất cả TRỪ ĐI đối tượng Có làm: Tất cả − Có tham gia!

---

### Câu 30 [db-c2-t1-030]

Cho quan hệ r(A, B) có 2 bộ {(1, 2), (1, 3)}. Khi thực hiện phép chiếu π_A(r), kết quả thu được gồm bao nhiêu bộ dữ liệu?

- **A.** Gồm 2 bộ giống nhau là {(1), (1)} vì phép chiếu giữ nguyên số bộ
- **B.** Đúng 1 bộ duy nhất là {(1)} do giá trị trùng lặp đã bị loại bỏ  *(Đáp án đúng)*
- **C.** Gồm 0 bộ vì phép chiếu bị lỗi do hai dòng có giá trị cột A trùng nhau
- **D.** Gồm 4 bộ do hệ quản trị CSDL nhân đôi dữ liệu để lưu vết lịch sử

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Các bộ ban đầu có giá trị trên thuộc tính A là 1 và 1. Theo định nghĩa phép chiếu trong lý thuyết tập hợp, các bộ trùng lặp bị loại bỏ, chỉ giữ lại một bộ đại diện duy nhất là {(1)}.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh chọn 2 bộ do thói quen nhìn thấy 2 dòng trong kết quả truy vấn SQL không có DISTINCT.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy loại bỏ trùng lặp trong phép chiếu của Đại số quan hệ`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.2.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Phép chiếu π trong ĐSQH: Tự động loại bỏ trùng ➔ 2 dòng số 1 chỉ còn 1 dòng duy nhất!

---

### Câu 31 [db-c2-t1-031]

Biểu thức nào sau đây thể hiện phép kết nối tự nhiên giữa 3 quan hệ SINHVIEN, SV_DT và DETAI để tìm sinh viên làm đề tài tại nơi áp dụng 'Cần Thơ'?

- **A.** π_(NoiAD = 'Cần Thơ') (SINHVIEN ∪ SV_DT ∪ DETAI)
- **B.** σ_(NoiAD = 'Cần Thơ') (SINHVIEN × SV_DT × DETAI)
- **C.** σ_(NoiAD = 'Cần Thơ') (SINHVIEN * SV_DT * DETAI)  *(Đáp án đúng)*
- **D.** σ_(NoiAD = 'Cần Thơ') (SINHVIEN ∩ SV_DT ∩ DETAI)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục II.3.b (Ví dụ): Sử dụng phép kết nối tự nhiên (*) giữa 3 quan hệ để tự động ghép trên các thuộc tính trùng tên (MaSV giữa SINHVIEN và SV_DT; MaDT giữa SV_DT và DETAI), sau đó áp dụng phép chọn σ với điều kiện NoiAD = 'Cần Thơ'.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm dấu kết nối tự nhiên (*) với tích Descartes (×) hoặc phép hợp (∪).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy cú pháp kết nối chuỗi 3 quan hệ: Dùng dấu sao (*)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Kết nối tự nhiên nhiều bảng dùng dấu sao (*): SINHVIEN * SV_DT * DETAI!

---

### Câu 32 [db-c2-t1-032]

Điền thuật ngữ: "Phép kết nối dùng để (...) hai bộ có liên quan nhau thuộc hai quan hệ khác nhau thành một bộ mới, cho phép xử lý (...) giữa các quan hệ trong CSDL."

- **A.** Định dạng ... tốc độ quay đĩa cứng
- **B.** Nhân đôi ... sự phân mảnh phần cứng
- **C.** Xóa bỏ ... sự xung đột khóa chính
- **D.** Kết hợp ... mối liên quan ngữ nghĩa  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục II.3.b nêu rõ ý nghĩa: Phép kết nối dùng để kết hợp hai bộ có liên quan nhau thuộc hai quan hệ khác nhau thành một bộ mới; cho phép xử lý mối liên quan giữa các quan hệ trong toàn bộ CSDL.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh bị lôi cuốn bởi các phương án kỹ thuật phần cứng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ý nghĩa cốt lõi của Phép kết nối Join trong RDBMS`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Kết nối = Kết hợp 2 bộ có liên quan + Xử lý mối liên quan giữa các bảng!

---

### Câu 33 [db-c2-t1-033]

Khi thực hiện Phép giao r1 ∩ r2, biểu thức nào sau đây tương đương về mặt toán học thông qua Phép hiệu (−)?

- **A.** r1 − (r1 − r2)  *(Đáp án đúng)*
- **B.** (r1 − r2) ∪ (r2 − r1)
- **C.** (r1 ∪ r2) − r1
- **D.** (r1 − r2) − r2

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Theo lý thuyết tập hợp: Phần tử thuộc r1 ∩ r2 là phần tử thuộc r1 nhưng không thuộc (r1 − r2). Do đó r1 ∩ r2 = r1 − (r1 − r2).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn công thức hiệu đối xứng `(r1 − r2) ∪ (r2 − r1)` (đó là XOR, không phải AND/Giao).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tương đương đại số: r1 ∩ r2 = r1 − (r1 − r2)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Giao bằng 2 lần hiệu: r1 ∩ r2 = r1 − (r1 − r2)!

---

### Câu 34 [db-c2-t1-034]

Bẫy cú pháp ĐSQH: Biểu thức nào sau đây là SAI VỀ MẶT CÚ PHÁP ĐẠI SỐ QUAN HỆ?

- **A.** π_(MaSV, Hoten) (σ_(DiemTB > 8) (SINHVIEN))
- **B.** σ_(MaSV, Hoten) (π_(DiemTB > 8) (SINHVIEN))  *(Đáp án đúng)*
- **C.** σ_(DiemTB > 8 ∧ QQ = 'Hà Nội') (SINHVIEN)
- **D.** π_(Hoten) (SINHVIEN) − π_(Hoten) (GIANGVIEN)

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Phương án A sai cú pháp nghiêm trọng: Phép chọn σ nhận điều kiện logic dạng Boolean (như DiemTB > 8), không được truyền danh sách thuộc tính (MaSV, Hoten). Ngược lại, phép chiếu π mới nhận danh sách thuộc tính. Phương án A đã đánh tráo vị trí của σ và π.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh đọc lướt không chú ý tham số bên dưới của σ là danh sách cột (sai cú pháp).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy đánh tráo tham số giữa Phép chọn σ (điều kiện) và Phép chiếu π (danh sách cột)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.2.a & II.2.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* σ nhận ĐIỀU KIỆN (Boolean); π nhận DANH SÁCH CỘT!

---

### Câu 35 [db-c2-t1-035]

Cho quan hệ r(A, B, C) và điều kiện C1: A = 1, điều kiện C2: B > 5. Khẳng định nào sau đây là ĐÚNG khi tối ưu hóa câu truy vấn trong RDBMS?

- **A.** Thực hiện phép chiếu trên tất cả các cột trước khi lọc dòng để tiết kiệm bộ nhớ RAM
- **B.** Luôn luôn bắt buộc phải thực hiện tích Descartes trước rồi mới được phép áp dụng phép chọn
- **C.** Nên thực hiện phép chọn σ trước để giảm bớt số dòng trước khi thực hiện phép kết nối tốn kém  *(Đáp án đúng)*
- **D.** Thứ tự thực hiện các phép toán đại số quan hệ hoàn toàn không ảnh hưởng đến tốc độ thực thi

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Nguyên lý tối ưu hóa truy vấn kinh điển trong RDBMS (dựa trên ĐSQH): "Đẩy phép chọn xuống càng sớm càng tốt" (Push down selections) để giảm kích thước dữ liệu trung gian trước khi thực hiện các phép kết nối (Join) tốn kém.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ tích Descartes là bước bắt buộc đầu tiên.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy nguyên lý tối ưu hóa: Đẩy phép chọn σ xuống sớm nhất để giảm số dòng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.2 & II.3
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tối ưu hóa: LỌC DÒNG (σ) TRƯỚC ➔ Giảm kích thước bảng ➔ Kết nối (Join) nhanh hơn!

---

### Câu 36 [db-c2-t1-036]

Theo Bước 1 của quy trình chuyển đổi ERD sang quan hệ, một thuộc tính đa trị (Multivalued attribute, ví dụ: Skill của nhân viên) được xử lý như thế nào?

- **A.** Chuyển thành một cột mới ngay trong bảng nhân viên và cho phép cột đó mang giá trị rỗng
- **B.** Gộp tất cả các giá trị vào chung một ô duy nhất và ngăn cách nhau bằng dấu phẩy
- **C.** Bỏ qua hoàn toàn thuộc tính đa trị vì mô hình quan hệ không hỗ trợ kiểu dữ liệu danh sách
- **D.** Tách thành một quan hệ riêng, có khóa ngoại tham chiếu về khóa chính của thực thể ban đầu  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục III.2.a (Bước 1): Thuộc tính đa trị được tách thành MỘT QUAN HỆ RIÊNG, có khóa ngoại tham chiếu về khóa chính của quan hệ ban đầu (ví dụ: EMPLOYEE_SKILL(Employee_ID, Skill)).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Học viên hay chọn gộp chuỗi bằng dấu phẩy (vi phạm chuẩn 1NF) hoặc thêm cột vào bảng gốc.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy chuyển đổi thuộc tính đa trị: Bắt buộc tách thành một bảng quan hệ riêng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thuộc tính đa trị ➔ TÁCH THÀNH QUAN HỆ RIÊNG + Khóa ngoại về bảng gốc!

---

### Câu 37 [db-c2-t1-037]

Theo Bước 1, khi chuyển đổi một thuộc tính phức hợp (Composite attribute, ví dụ: Address gồm Street, City, State, Zip) sang quan hệ, quy tắc chuẩn là gì?

- **A.** Chỉ đưa các thuộc tính đơn thành phần vào quan hệ, loại bỏ thuộc tính phức hợp gộp  *(Đáp án đúng)*
- **B.** Đưa cả thuộc tính gộp Address và tất cả các thuộc tính con vào chung quan hệ đó
- **C.** Tạo một bảng riêng có tên là ADDRESS và đặt khóa ngoại tham chiếu về bảng CUSTOMER
- **D.** Chuyển thuộc tính phức hợp thành một khóa chính thứ hai của lược đồ quan hệ

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục III.2.a: Thuộc tính phức hợp chỉ lấy các THUỘC TÍNH ĐƠN THÀNH PHẦN của nó (không lấy thuộc tính gộp). Ví dụ: CUSTOMER chỉ chứa Street, City, State, Zip; không có cột Customer_Address.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay giữ lại cả cột gộp cha (Address) lẫn các cột con thành phần.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thuộc tính phức hợp: CHỈ LẤY THÀNH PHẦN ĐƠN, LOẠI BỎ THUỘC TÍNH GỘP`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thuộc tính phức hợp ➔ Rã thành các cột con đơn lẻ; Bỏ cột gộp cha!

---

### Câu 38 [db-c2-t1-038]

Theo Bước 2, khóa chính của một quan hệ được tạo từ Thực thể yếu (Weak Entity) được cấu thành chuẩn xác từ những thành phần nào?

- **A.** Chỉ duy nhất khóa riêng phần của thực thể yếu là đủ để xác định duy nhất bản ghi
- **B.** Khóa riêng phần (Partial key) của thực thể yếu kết hợp với Khóa chính của thực thể mạnh  *(Đáp án đúng)*
- **C.** Chỉ sử dụng khóa chính của thực thể mạnh làm khóa chính duy nhất của thực thể yếu
- **D.** Một số nguyên tự tăng ngẫu nhiên do hệ điều hành máy tính tự động cấp phát

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục III.3.a: Khóa chính của thực thể yếu gồm: 1) Khóa riêng phần (Partial key) của thực thể yếu; 2) Khóa chính của quan hệ định danh (thực thể mạnh). Đồng thời khóa ngoại tham chiếu thực thể mạnh KHÔNG ĐƯỢC NULL.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ khóa riêng phần tự đứng một mình làm khóa chính được.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy cấu trúc khóa chính thực thể yếu: Partial key + Khóa ngoại thực thể mạnh`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa chính thực thể yếu = Khóa riêng phần (Partial key) + Khóa chính thực thể mạnh!

---

### Câu 39 [db-c2-t1-039]

Theo Bước 3, khi chuyển đổi một mối quan hệ hai ngôi Một - Nhiều (1:N, ví dụ: KHOA 1 - N LOP), vị trí đặt khóa ngoại chuẩn xác là gì?

- **A.** Bắt buộc phải tạo thêm một bảng trung gian mới chứa hai khóa ngoại của cả hai thực thể
- **B.** Khóa chính ở phía "Nhiều" (LOP) trở thành khóa ngoại đặt ở quan hệ phía "Một" (KHOA)
- **C.** Khóa chính ở phía "Một" (KHOA) trở thành khóa ngoại đặt ở quan hệ phía "Nhiều" (LOP)  *(Đáp án đúng)*
- **D.** Không cần đặt khóa ngoại ở bảng nào vì mối quan hệ 1:N được lưu bằng con trỏ vật lý

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục III.4.a (Bảng tổng kết Bước 3): Quan hệ Một - nhiều (1:N): Khóa chính ở phía "MỘT" trở thành khóa ngoại ở phía "NHIỀU". Đặt ngược lại sẽ vi phạm tính nguyên tố và gây dư thừa dữ liệu.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Rất nhiều học viên bị nhầm đặt ngược khóa ngoại từ phía Nhiều sang phía Một.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy chiều đặt khóa ngoại 1:N: Khóa của phía 1 sang làm khóa ngoại phía N`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* 1:N ➔ Lấy khóa của phía 1 đem sang làm KHÓA NGOẠI ở phía N!

---

### Câu 40 [db-c2-t1-040]

Theo Bước 3, khi chuyển đổi một mối quan hệ hai ngôi Nhiều - Nhiều (M:N, ví dụ: SINHVIEN M - N MONHOC), giải pháp kỹ thuật bắt buộc là gì?

- **A.** Tạo thêm một thuộc tính đa trị chứa danh sách mã môn học trong bảng SINHVIEN
- **B.** Đặt khóa chính của SINHVIEN sang làm khóa ngoại nằm trong bảng MONHOC
- **C.** Đặt khóa chính của MONHOC sang làm khóa ngoại nằm trong bảng SINHVIEN
- **D.** Tạo một quan hệ mới, khóa chính là tổ hợp khóa chính của hai thực thể tham gia  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục III.4.a: Mối quan hệ Nhiều - nhiều (M:N): Tạo quan hệ mới, khóa chính là tổ hợp khóa chính của hai thực thể tham gia (đồng thời là khóa ngoại tương ứng đến từng thực thể).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay cố gắng nhét khóa ngoại vào 1 trong 2 bảng (bất khả thi với M:N).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy chuyển đổi quan hệ M:N: BẮT BUỘC tạo một quan hệ kết hợp mới`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* M:N ➔ Bắt buộc TẠO BẢNG MỚI có khóa chính là tổ hợp 2 khóa ngoại!

---

### Câu 41 [db-c2-t1-041]

Theo Bước 3, trong mối quan hệ Một - Một (1:1), vị trí đặt khóa ngoại và các thuộc tính của mối quan hệ chuẩn xác nhất là ở đâu?

- **A.** Khóa chính ở phía bắt buộc làm khóa ngoại ở phía tùy chọn kèm các thuộc tính của quan hệ  *(Đáp án đúng)*
- **B.** Khóa chính ở phía tùy chọn làm khóa ngoại ở phía bắt buộc kèm các thuộc tính của quan hệ
- **C.** Bắt buộc phải tạo thêm một bảng thứ ba để chứa hai khóa ngoại giống như quan hệ nhiều-nhiều
- **D.** Khóa ngoại có thể đặt tùy tiện ở bất kỳ phía nào mà không cần quan tâm đến tính bắt buộc

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục III.4.a: Quan hệ 1:1: Khóa chính ở phía bắt buộc làm khóa ngoại ở phía tùy chọn. Chú ý: Tất cả thuộc tính của mối quan hệ đều được mang sang quan hệ ở phía tùy chọn (nơi đặt khóa ngoại) để tránh phát sinh giá trị NULL.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay đặt khóa ngoại ở phía bắt buộc, dẫn đến hàng loạt bản ghi bị mang giá trị NULL ở phía tùy chọn.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy quy tắc 1:1: Đặt khóa ngoại ở phía TÙY CHỌN (Optional side)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Quan hệ 1:1 ➔ Đặt khóa ngoại và thuộc tính quan hệ ở PHÍA TÙY CHỌN!

---

### Câu 42 [db-c2-t1-042]

Theo Bước 5, khi chuyển đổi một mối quan hệ một ngôi Một - Nhiều đệ quy (1:N Unary, ví dụ: Nhân viên quản lý nhân viên khác), giải pháp chuẩn là gì?

- **A.** Bắt buộc phải nhân đôi bảng nhân viên thành hai bảng độc lập hoàn toàn trên đĩa
- **B.** Tạo khóa ngoại đệ quy tham chiếu đến chính khóa chính trong cùng quan hệ đó  *(Đáp án đúng)*
- **C.** Tách thành một bảng kết hợp mới chứa hai khóa ngoại tham chiếu về máy chủ
- **D.** Mô hình quan hệ không hỗ trợ quan hệ đệ quy nên bắt buộc phải loại bỏ

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục III.5.a: Quan hệ một ngôi Một - nhiều (1:N đệ quy): Tạo khóa ngoại đệ quy (Recursive Foreign Key) tham chiếu đến khóa chính trong cùng một quan hệ (ví dụ: EMPLOYEE có cột Manager_ID tham chiếu Employee_ID).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay tưởng đệ quy là phải tạo bảng trung gian mới.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy quan hệ đệ quy 1:N: Khóa ngoại đệ quy (Recursive FK) trong CÙNG 1 BẢNG`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.5.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đệ quy 1:N ➔ Thêm 1 cột Khóa ngoại đệ quy trỏ về chính Khóa chính của bảng đó!

---

### Câu 43 [db-c2-t1-043]

Theo Bước 6, quy tắc tổng quát khi chuyển đổi một mối quan hệ n-ngôi (n-ary Relationship, ví dụ: 3 ngôi giữa Vendor, Part, Warehouse) là tạo ra bao nhiêu quan hệ?

- **A.** Tạo ra đúng 2n quan hệ để lưu trữ các bảng chỉ dẫn ngược cho từng thực thể
- **B.** Tạo ra đúng n quan hệ và ghép nối khóa ngoại vòng tròn khép kín giữa chúng
- **C.** Tạo ra đúng n + 1 quan hệ (gồm n quan hệ thực thể và 1 quan hệ kết hợp mới)  *(Đáp án đúng)*
- **D.** Chỉ tạo duy nhất 1 quan hệ khổng lồ chứa tất cả các thuộc tính của n thực thể

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục III.5.b định nghĩa: Quy tắc n + 1 quan hệ: Tạo ra n + 1 quan hệ gồm: n quan hệ cho n kiểu thực thể tham gia; và 1 quan hệ kết hợp chứa các khóa ngoại tham chiếu đến khóa chính của n quan hệ kia.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh không nhớ công thức chuẩn n + 1 quan hệ cho mối kết hợp n-ngôi.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy quy tắc n + 1 quan hệ trong chuyển đổi quan hệ n-ngôi`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.5.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Quan hệ n-ngôi ➔ Tạo n + 1 QUAN HỆ (n bảng thực thể + 1 bảng kết hợp)!

---

### Câu 44 [db-c2-t1-044]

Theo Bước 7, trong mối quan hệ Cha/Con (Supertype/Subtype, ví dụ: EMPLOYEE và HOURLY_EMPLOYEE), khóa chính của quan hệ con có đặc điểm kỹ thuật gì?

- **A.** Quan hệ con không được phép có khóa chính riêng mà dùng chung vùng nhớ với quan hệ cha
- **B.** Là một mã số độc lập không có bất kỳ liên hệ tham chiếu nào với bảng thực thể cha
- **C.** Bắt buộc phải là một chuỗi ký tự ngẫu nhiên do lập trình viên quy định trong mã nguồn
- **D.** Vừa là khóa chính của quan hệ con, vừa là khóa ngoại tham chiếu về khóa chính quan hệ cha  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục III.6.a: Khóa chính của quan hệ cha trở thành khóa chính ĐỒNG THỜI là khóa ngoại của các quan hệ con (tham chiếu về quan hệ cha). Giữa cha và con hình thành quan hệ 1:1.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ bảng con có khóa chính riêng và một khóa ngoại riêng biệt.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy PK bảng con Supertype/Subtype: Vừa là Khóa chính VỪA LÀ Khóa ngoại trỏ về Cha`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.6.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Bảng con Subtype: Khóa chính ĐỒNG THỜI là Khóa ngoại tham chiếu về Bảng cha!

---

### Câu 45 [db-c2-t1-045]

Trong CSDL Quản lý bán hàng (Chương II, Mục IV): Hanghoa(MaHG, TenHG, DVT, Dongia, Cohang). Thuộc tính Cohang lưu giá trị 0 hoặc 1 mang ý nghĩa nghiệp vụ gì?

- **A.** Cohang = 0 nghĩa là hết hàng; Cohang = 1 nghĩa là mặt hàng đó hiện còn hàng trong kho  *(Đáp án đúng)*
- **B.** Cohang = 0 nghĩa là hàng bán lẻ; Cohang = 1 nghĩa là hàng chỉ bán buôn cho đại lý
- **C.** Cohang = 0 nghĩa là hàng nhập khẩu; Cohang = 1 nghĩa là hàng sản xuất nội địa
- **D.** Cohang = 0 nghĩa là hàng chưa chịu thuế; Cohang = 1 nghĩa là hàng đã hoàn thành thuế

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục IV.1 ghi chú rõ ràng về thuộc tính: Hanghoa(MaHG, TenHG, DVT, Dongia, Cohang) -- Cohang = 0: hết hàng; Cohang = 1: còn hàng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm với thuộc tính Daily (đại lý/bán lẻ) của bảng Khách.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ý nghĩa quy ước thuộc tính Cohang trong CSDL Quản lý bán hàng`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục IV.1
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Cohang: 0 = Hết hàng; 1 = Còn hàng (Khach.Daily: 1 = Đại lý; 0 = Bán lẻ)!

---

### Câu 46 [db-c2-t1-046]

Trong CSDL Quản lý bán hàng: Khach(MaKH, Hoten, Diachi, Daily). Biểu thức ĐSQH tìm mã số, họ tên của các khách hàng là ĐẠI LÝ và ở địa chỉ 'Cần Thơ' là gì?

- **A.** σ_(MaKH, Hoten) (π_(Daily = 1 ∧ Diachi = 'Cần Thơ') (Khach))
- **B.** π_(MaKH, Hoten) (σ_(Daily = 1 ∧ Diachi = 'Cần Thơ') (Khach))  *(Đáp án đúng)*
- **C.** π_(Daily = 1) (Khach) ∩ π_(Diachi = 'Cần Thơ') (Khach)
- **D.** π_(MaKH, Hoten) (Khach) − σ_(Daily = 0) (Khach)

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Khách là đại lý có `Daily = 1`, địa chỉ Cần Thơ có `Diachi = 'Cần Thơ'`. Biểu thức chọn lọc các dòng thỏa mãn cả 2 điều kiện bằng phép `∧`, sau đó chiếu lấy MaKH và Hoten bằng π.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm Daily=1 với Daily=0 hoặc nhầm ký hiệu giữa π và σ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy điều kiện đại lý Daily=1 và cú pháp chọn/chiếu ĐSQH`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục IV.1 & IV.2
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đại lý = Daily = 1; Chọn điều kiện dùng σ, Chiếu cột dùng π!

---

### Câu 47 [db-c2-t1-047]

Trong CSDL Quản lý bán hàng, cấu trúc khóa chính của bảng Chitiet_HD(SoHD, MaHG, Soluong, Giaban) được thiết kế chuẩn xác là gì?

- **A.** Khóa chính chỉ gồm duy nhất một thuộc tính MaHG của hàng hóa
- **B.** Khóa chính chỉ gồm duy nhất một thuộc tính SoHD của hóa đơn
- **C.** Khóa chính là tổ hợp của cả hai thuộc tính (SoHD, MaHG)  *(Đáp án đúng)*
- **D.** Khóa chính là tổ hợp của cả 4 thuộc tính SoHD, MaHG, Soluong, Giaban

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Một hóa đơn có thể có nhiều mặt hàng, một mặt hàng có thể nằm trong nhiều hóa đơn (quan hệ nhiều-nhiều). Do đó bảng Chitiet_HD có khóa chính là tổ hợp (SoHD, MaHG).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ SoHD đứng một mình làm khóa chính (khi đó 1 hóa đơn chỉ mua được 1 món hàng, sai thực tế).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy khóa chính tổ hợp trong bảng Chi tiết hóa đơn (Chitiet_HD)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục IV.1
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Chi tiết hóa đơn = Bảng kết hợp M:N ➔ Khóa chính bắt buộc là (SoHD, MaHG)!

---

### Câu 48 [db-c2-t1-048]

Yêu cầu: "In ra số hóa đơn và tổng trị giá của các hóa đơn có ngày giao hàng sau ngày lập hóa đơn". Phép toán ĐSQH nào được sử dụng để kiểm tra điều kiện ngày?

- **A.** Phép chia ĐSQH giữa cột Ngaygiao và Ngaylap: Hoadon ÷ Hoadon này
- **B.** Phép chiếu trích xuất hai cột: π_(Ngaygiao > Ngaylap) (Hoadon)
- **C.** Phép tích Descartes nhân chéo hai bảng: Hoadon × Hoadon bán hàng
- **D.** Phép chọn so sánh hai thuộc tính: σ_(Ngaygiao > Ngaylap) (Hoadon)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục II.2.a nêu rõ cấu trúc biểu thức logic C của phép chọn: `(tên thuộc tính) (toán tử so sánh) (tên thuộc tính)`. Ở đây so sánh giữa Ngaygiao và Ngaylap dùng phép chọn σ_(Ngaygiao > Ngaylap).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ phép chọn chỉ so sánh thuộc tính với hằng số, không biết so sánh giữa 2 thuộc tính.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy cú pháp phép chọn: Hoàn toàn có thể so sánh giữa 2 thuộc tính với nhau`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* So sánh giữa 2 cột trong cùng dòng: Dùng phép chọn σ_(Cột1 > Cột2)!

---

### Câu 49 [db-c2-t1-049]

Khi chuyển đổi một mối quan hệ ba ngôi có danh hiệu riêng (ví dụ: PATIENT_TREATMENT có mã điều trị riêng), điểm cốt lõi cần lưu ý khi chọn khóa chính là gì?

- **A.** Khóa chính bắt buộc phải đảm bảo tính duy nhất và có thể là danh hiệu riêng của thực thể kết hợp  *(Đáp án đúng)*
- **B.** Bắt buộc không được phép đặt danh hiệu riêng làm khóa chính mà phải gộp 3 khóa ngoại
- **C.** Mối quan hệ ba ngôi không được phép có bất kỳ khóa chính nào khi cài đặt vào RDBMS
- **D.** Khóa chính bắt buộc phải là địa chỉ IP máy chủ của bác sĩ trực tiếp điều trị ca đó

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục III.5.b lưu ý quan trọng: Khi mối quan hệ ba ngôi có danh hiệu riêng (VD: PATIENT_TREATMENT), cần xác định rõ khóa chính cho quan hệ kết hợp này... Nguyên tắc bắt buộc: khóa chính phải đảm bảo tính duy nhất (unique).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Nhiều người mặc định mối quan hệ 3 ngôi lúc nào cũng phải ghép cả 3 khóa ngoại làm khóa chính.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy linh hoạt khi có danh hiệu riêng: Có thể chọn danh hiệu riêng làm Khóa chính`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.5.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Có danh hiệu riêng (Identifier) ➔ Có thể dùng danh hiệu riêng làm Khóa chính!

---

### Câu 50 [db-c2-t1-050]

Tổng kết Chương II: Cỗ máy Đại số quan hệ (Relational Algebra) đóng vai trò nền tảng nào trong cấu trúc hoạt động của các hệ quản trị CSDL quan hệ hiện đại?

- **A.** Là ngôn ngữ dòng lệnh duy nhất mà người dùng cuối phải gõ trực tiếp trên bàn phím máy trạm
- **B.** Là cơ sở lý thuyết toán học trực tiếp để phân tích, tối ưu hóa và thực thi các câu lệnh truy vấn SQL  *(Đáp án đúng)*
- **C.** Là chương trình điều khiển phần cứng dùng để định dạng các track và sector trên đĩa cứng
- **D.** Là giao thức mạng dùng để truyền tải các gói tin TCP/IP giữa máy khách và máy chủ CSDL

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục II.1.a & V.1 khẳng định: Đại số quan hệ là cơ sở lý thuyết toán học cho việc thiết lập các ngôn ngữ dữ liệu bậc cao hơn (như SQL). Bộ tối ưu hóa truy vấn (Query Optimizer) của RDBMS biên dịch SQL thành cây biểu thức ĐSQH để tối ưu và thực thi.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ ĐSQH chỉ là lý thuyết trên giấy, không biết RDBMS chuyển SQL thành ĐSQH để tối ưu.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy vai trò cốt lõi của ĐSQH: Nền tảng toán học tối ưu và thực thi truy vấn SQL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.1.a & V.1
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đại số quan hệ = Nền tảng toán học để RDBMS phân tích, tối ưu hóa và thực thi SQL!

---



---

## <a name="de-thi-bay-so-2-db-c2-t2"></a> ĐỀ THI BẪY SỐ 2 (db-c2-t2)

> **Quy mô:** 50 câu hỏi bẫy vận dụng cao (100% Hard / Trick Questions)
> **Mã định danh:** `db-c2-t2-001` đến `db-c2-t2-050`

### Câu 1 [db-c2-t2-001]

Trong mô hình quan hệ, phát biểu nào sau đây về tính chất của Siêu khóa (Super Key) là HOÀN TOÀN SAI?

- **A.** Tập hợp tất cả các thuộc tính U luôn luôn là một siêu khóa của lược đồ quan hệ
- **B.** Mọi tập cha chứa một siêu khóa của lược đồ quan hệ cũng chính là một siêu khóa
- **C.** Một siêu khóa bắt buộc phải có số lượng thuộc tính nhỏ hơn hoặc bằng khóa chính  *(Đáp án đúng)*
- **D.** Một quan hệ luôn luôn có ít nhất một siêu khóa bất kể số lượng các dòng dữ liệu

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục I.4.a: Khóa chính là siêu khóa tối thiểu, còn siêu khóa có thể chứa nhiều thuộc tính dư thừa tùy ý (thậm chí là toàn bộ tập thuộc tính U). Khẳng định "siêu khóa bắt buộc có số thuộc tính nhỏ hơn hoặc bằng khóa chính" là hoàn toàn sai.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ từ "Siêu" (Super) nghĩa là phải nhỏ gọn hoặc tối ưu hơn khóa chính.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy kích thước siêu khóa: Siêu khóa thường LỚN HƠN hoặc bằng Khóa tối thiểu`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Siêu khóa chứa thuộc tính dư thừa ➔ Kích thước thường LỚN HƠN Khóa tối thiểu!

---

### Câu 2 [db-c2-t2-002]

Thuộc tính không khóa (Non-Prime Attribute) được định nghĩa chính xác theo chuẩn giáo trình là gì?

- **A.** Là thuộc tính chỉ đóng vai trò làm khóa ngoại tham chiếu sang bảng quan hệ khác
- **B.** Là thuộc tính không được phép đặt làm khóa chính của bảng quan hệ khi cài đặt
- **C.** Là thuộc tính có kiểu dữ liệu chuỗi ký tự tự do và có thể nhận giá trị rỗng NULL
- **D.** Là thuộc tính không tham gia vào bất kỳ một khóa tối thiểu nào của lược đồ quan hệ  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục I.4.f: Thuộc tính không khóa (Non-Prime Attribute) là thuộc tính KHÔNG THAM GIA VÀO KHÓA NÀO. Nếu nó tham gia vào bất kỳ một khóa nào (kể cả khóa dự tuyển) thì nó đã là Prime Attribute.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm: tưởng không nằm trong Khóa chính thì là Non-prime attribute.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy định nghĩa Non-Prime Attribute: Phải không tham gia vào BẤT KỲ KHÓA NÀO`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.4.f
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Non-Prime = Không tham gia vào BẤT KỲ khóa nào (cả PK lẫn Candidate Key)!

---

### Câu 3 [db-c2-t2-003]

Cho quan hệ HOCBONG với thuộc tính DiemTB chỉ nhận các giá trị số thực từ 0 đến 10. Tập hợp các giá trị hợp lệ này được gọi là gì?

- **A.** Miền giá trị (Domain ký hiệu là dom hay D) của thuộc tính DiemTB  *(Đáp án đúng)*
- **B.** Tập hợp tất cả các bộ giá trị của lược đồ quan hệ HOCBONG trên đĩa
- **C.** Tích Descartes của các trường thuộc tính số nguyên trong hệ cơ sở dữ liệu
- **D.** Lược đồ con mức ngoài dành cho người sử dụng cuối xem bảng điểm số

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục I.1.a & I.1.c định nghĩa: Thông thường mỗi thuộc tính chỉ chọn giá trị trong một tập con của kiểu dữ liệu ➔ gọi là Miền giá trị (Domain), ký hiệu là D(A) hay dom(A).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm Miền giá trị với Kiểu dữ liệu hoặc Tập hợp các bộ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy thuật ngữ Miền giá trị (Domain) vs Kiểu dữ liệu (Data Type)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.1.a & I.1.c
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khoảng giá trị hợp lệ của 1 thuộc tính (0..10) = MIỀN GIÁ TRỊ (Domain)!

---

### Câu 4 [db-c2-t2-004]

Khi nói về cấu trúc bảng của một quan hệ r(R), khẳng định nào sau đây là ĐÚNG theo lý thuyết CSDL quan hệ?

- **A.** Một ô trong bảng có thể chứa một danh sách mảng nhiều số nguyên để tiết kiệm dòng
- **B.** Mỗi giao điểm giữa một dòng và một cột bắt buộc chỉ chứa duy nhất một giá trị nguyên tố  *(Đáp án đúng)*
- **C.** Một ô trong bảng có thể chứa một bảng con khác lồng nhau mà không vi phạm quy tắc
- **D.** Các dòng trong bảng bắt buộc phải có số lượng các cột thay đổi tùy theo từng đối tượng

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Nguyên lý cốt lõi của mô hình quan hệ (chuẩn 1NF của Codd): Dữ liệu là phẳng, mỗi ô tại giao điểm của dòng và cột chỉ chứa DUY NHẤT MỘT GIÁ TRỊ NGUYÊN TỐ (Atomic value). Không chứa mảng hay bảng con lồng nhau.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh quen với NoSQL/JSON ngày nay cho phép mảng trong ô nên chọn sai.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tính nguyên tố của giá trị ô (Atomic value) trong mô hình quan hệ cổ điển`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.1 & I.3
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mô hình quan hệ Codd: Mỗi ô CHỈ CHỨA 1 GIÁ TRỊ NGUYÊN TỐ (Atomic value)!

---

### Câu 5 [db-c2-t2-005]

Cho 3 phát biểu về Lược đồ và Thể hiện của CSDL:
(I) Một lược đồ CSDL có thể tương ứng với nhiều thể hiện khác nhau theo thời gian.
(II) Lược đồ CSDL thường xuyên thay đổi liên tục theo từng giây khi người dùng thêm dữ liệu.
(III) Mức logic mô tả toàn bộ cấu trúc CSDL độc lập với ngôn ngữ cài đặt vật lý.
Tổ hợp ĐÚNG là:

- **A.** Chỉ có duy nhất phát biểu (I) là đúng, phát biểu (II) và (III) là sai sót
- **B.** Cả ba phát biểu (I), (II) và (III) đều hoàn toàn chính xác giáo trình
- **C.** Phát biểu (I) và (III) hoàn toàn đúng, phát biểu (II) hoàn toàn sai lệch  *(Đáp án đúng)*
- **D.** Phát biểu (II) và (III) hoàn toàn đúng, phát biểu (I) hoàn toàn sai lệch

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** (II) sai vì Lược đồ CSDL (Schema) rất ít khi thay đổi (chỉ đổi khi tái cấu trúc hệ thống). Cái thay đổi liên tục từng giây khi thêm/sửa/xóa dữ liệu chính là Thể hiện của CSDL (Instance). (I) và (III) đúng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm lẫn giữa tần suất thay đổi của Schema (tĩnh) và Instance (động).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tần suất thay đổi: Schema rất tĩnh, Instance thay đổi liên tục từng giây`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.5.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thêm/xóa dữ liệu ➔ Thay đổi THỂ HIỆN (Instance); Lược đồ (Schema) KHÔNG ĐỔI!

---

### Câu 6 [db-c2-t2-006]

Trong ngôn ngữ C, cấu trúc `struct NHANVIEN { int MaNV; ... struct NHANVIEN *next; };` được dùng để minh họa cho mức nào trong kiến trúc CSDL?

- **A.** Mức phân tích nghiệp vụ (Business Analysis Level của các giám đốc)
- **B.** Mức khái niệm (Conceptual Level mô tả mối quan hệ giữa các thực thể)
- **C.** Mức khung nhìn (View Level hiển thị thông tin bảng biểu cho người dùng)
- **D.** Mức vật lý (Internal/Physical Level cài đặt cấu trúc lưu trữ của tập tin)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục I.5.b nêu rõ: Cấu trúc struct trong ngôn ngữ C (kèm con trỏ next đến bản ghi tiếp theo) là ví dụ minh họa trực quan cho MỨC VẬT LÝ (Internal/Physical Level).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ struct là định nghĩa bảng ở mức logic/khái niệm.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ví dụ giáo trình: Struct C với con trỏ tệp = Mức Vật Lý (Physical)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.5.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mã nguồn struct C, con trỏ tệp (pointer) = MỨC VẬT LÝ!

---

### Câu 7 [db-c2-t2-007]

Điều kiện toán học để một tập thuộc tính K được công nhận là "Khóa của lược đồ quan hệ R(U)" gồm hai điều kiện nào sau đây?

- **A.** K là một siêu khóa của R và không có bất kỳ tập con thực sự nào của K là siêu khóa  *(Đáp án đúng)*
- **B.** K là một tập con của U và số lượng thuộc tính trong K bắt buộc phải bằng đúng 1
- **C.** K là khóa chính được người thiết kế chọn và K không chứa bất kỳ giá trị số âm nào
- **D.** K là khóa ngoại tham chiếu đến bảng cha và K có chứa ít nhất hai thuộc tính khóa

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục I.4.b: Khóa của LĐQH là một siêu khóa của lược đồ này sao cho mọi tập con thực sự của nó không là siêu khóa (tính chất tối thiểu/tối tiểu).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh thường quên điều kiện thứ hai: "mọi tập con thực sự không là siêu khóa".
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy định nghĩa Khóa tối thiểu: Siêu khóa + Tính tối thiểu không thể thu gọn`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa = Siêu khóa + Mọi tập con thực sự của nó KHÔNG LÀ siêu khóa!

---

### Câu 8 [db-c2-t2-008]

Cho quan hệ SINHVIEN có khóa chính là MaSV. Khẳng định nào sau đây là KHÔNG ĐÚNG về quy tắc toàn vẹn thực thể?

- **A.** Không bao giờ được phép có hai sinh viên khác nhau cùng mang chung một giá trị MaSV
- **B.** Có thể tồn tại một sinh viên có giá trị MaSV là NULL nếu sinh viên đó chưa nhập học  *(Đáp án đúng)*
- **C.** Giá trị của MaSV dùng để nhận biết duy nhất từng sinh viên cụ thể trong toàn bộ CSDL
- **D.** Bất kỳ thao tác thêm dòng mới có MaSV trùng với dòng cũ đều bị hệ thống từ chối

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Quy tắc toàn vẹn thực thể (Entity Integrity): Khóa chính tuyệt đối KHÔNG ĐƯỢC PHÉP CHỨA GIÁ TRỊ NULL. Khẳng định "MaSV có thể là NULL" là hoàn toàn sai.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nghĩ sinh viên chưa nhập học thì mã số có thể để trống (NULL).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy toàn vẹn thực thể: Khóa chính TUYỆT ĐỐI CẤM NULL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.4 & Tam trụ toàn vẹn
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa chính: CẤM TRÙNG LẶP + TUYỆT ĐỐI CẤM NULL!

---

### Câu 9 [db-c2-t2-009]

Điền thuật ngữ: "Một tập hợp gồm một hay nhiều thuộc tính của quan hệ này là khóa của một quan hệ khác được gọi là (...)."

- **A.** Khóa riêng phần của thực thể yếu (Partial Identifying Key)
- **B.** Khóa dự tuyển có độ ưu tiên cao nhất (Primary Candidate Key)
- **C.** Khóa ngoài hay Khóa ngoại (Foreign Key ký hiệu là FK)  *(Đáp án đúng)*
- **D.** Siêu khóa tối thiểu toàn cục (Global Minimal Super Key)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục I.4.e định nghĩa nguyên văn: Khóa ngoài / Khóa ngoại (Foreign Key) là một tập hợp gồm một hay nhiều thuộc tính là khóa của một lược đồ quan hệ khác.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm với khóa riêng phần của thực thể yếu.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy định nghĩa chuẩn mực của Khóa ngoại Foreign Key`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.4.e
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Là khóa của bảng khác ➔ Được gọi là KHÓA NGOẠI (Foreign Key)!

---

### Câu 10 [db-c2-t2-010]

Cho bảng KetQua(MaSV, MaMH, DiemThi). Nhận định nào sau đây về khóa của bảng KetQua là CHÍNH XÁC NHẤT?

- **A.** Thuộc tính DiemThi bắt buộc phải tham gia vào khóa chính để phân biệt điểm
- **B.** Chỉ cần một mình thuộc tính MaSV là đủ làm khóa chính duy nhất của bảng
- **C.** Chỉ cần một mình thuộc tính MaMH là đủ làm khóa chính duy nhất của bảng
- **D.** Khóa chính bắt buộc phải là tổ hợp của cả hai thuộc tính (MaSV, MaMH)  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Một sinh viên thi nhiều môn, một môn có nhiều sinh viên thi. Một mình MaSV hoặc MaMH đều bị lặp lại. Do đó khóa chính tối thiểu bắt buộc phải là tổ hợp (MaSV, MaMH).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn MaSV làm khóa chính mà quên một sinh viên thi nhiều môn khác nhau.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy khóa chính tổ hợp trong bảng kết quả học tập`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.2.b & I.4
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Bảng điểm: 1 SV thi nhiều môn ➔ Khóa chính BẮT BUỘC là (MaSV, MaMH)!

---

### Câu 11 [db-c2-t2-011]

Khái niệm "Tập các thuộc tính U = {A1, A2, ..., An}" trong mô hình quan hệ có đặc trưng toán học nào?

- **A.** Là một tập hợp hữu hạn các phần tử phân biệt, mỗi phần tử có một miền giá trị tương ứng  *(Đáp án đúng)*
- **B.** Là một dãy số vô hạn các ký tự nhị phân được sắp xếp theo thứ tự địa chỉ ô nhớ RAM
- **C.** Là một danh sách liên kết đơn có thứ tự bắt buộc cố định từ trái sang phải trên đĩa
- **D.** Là tập hợp các khóa ngoại được chia sẻ chung cho toàn bộ các hệ quản trị trên mạng

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục I.1.a định nghĩa hình thức: Cho tập hữu hạn các phần tử U = {A1, A2, ..., An}. Tập U được gọi là tập các thuộc tính. Mỗi phần tử Ai có một miền giá trị tương ứng D(Ai).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh bị đánh lạc hướng sang danh sách liên kết có thứ tự hoặc địa chỉ RAM.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy định nghĩa tập thuộc tính U là tập hữu hạn các phần tử phân biệt`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tập thuộc tính U = Tập hợp HỮU HẠN các phần tử phân biệt!

---

### Câu 12 [db-c2-t2-012]

Khi nói về Mô hình quan hệ, 3 thành phần cấu thành hoàn chỉnh được Codd định nghĩa năm 1970 gồm những gì?

- **A.** Bộ vi xử lý trung tâm CPU, Bộ nhớ trong RAM, và Thiết bị lưu trữ ngoài đĩa từ
- **B.** Hệ thống ký hiệu mô tả, Tập hợp các phép toán, và Ràng buộc toàn vẹn quan hệ  *(Đáp án đúng)*
- **C.** Tài khoản đăng nhập DBA, Mật khẩu người dùng cuối, và Quyền truy cập tệp tin
- **D.** Ngôn ngữ lập trình C, Trình biên dịch mã máy, và Hệ điều hành máy tính chủ

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục I.1.b: Mô hình quan hệ bao gồm 3 thành phần: 1) Hệ thống các ký hiệu mô tả dữ liệu; 2) Tập hợp các phép toán; 3) Ràng buộc toàn vẹn quan hệ.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn phần cứng máy tính hoặc hệ thống tài khoản phân quyền.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy 3 thành phần cấu thành Mô hình quan hệ theo Codd`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.1.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mô hình quan hệ Codd = Ký hiệu mô tả + Phép toán + Ràng buộc toàn vẹn!

---

### Câu 13 [db-c2-t2-013]

Cho lược đồ quan hệ R(A, B, C) có duy nhất 1 khóa tối thiểu là {A}. Tập hợp nào sau đây KHÔNG PHẢI là siêu khóa của R?

- **A.** Tập hợp gồm 2 thuộc tính {A, B} chứa thuộc tính khóa A bên trong
- **B.** Tập hợp gồm cả 3 thuộc tính {A, B, C} của lược đồ quan hệ R
- **C.** Tập hợp thuộc tính {B, C} không chứa thuộc tính khóa A bên trong  *(Đáp án đúng)*
- **D.** Tập hợp gồm 2 thuộc tính {A, C} chứa thuộc tính khóa A bên trong

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Vì {A} là khóa duy nhất, mọi siêu khóa bắt buộc phải chứa {A} (tính chất: tập cha của khóa là siêu khóa). Tập {B, C} không chứa {A} nên không thể xác định duy nhất một bộ, do đó không phải là siêu khóa.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm: tưởng 2 thuộc tính {B, C} ghép lại thì sẽ thành siêu khóa.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy điều kiện Siêu khóa: Bắt buộc phải bao hàm ít nhất một Khóa tối thiểu`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Siêu khóa BẮT BUỘC phải chứa khóa {A} bên trong nó ➔ {B, C} KHÔNG PHẢI siêu khóa!

---

### Câu 14 [db-c2-t2-014]

Bẫy nhận định: "Nếu lược đồ quan hệ có nhiều khóa dự tuyển thì người thiết kế BẮT BUỘC phải chọn tất cả các khóa dự tuyển đó làm khóa chính." Khẳng định này là:

- **A.** Sai, vì quan hệ không được phép có khóa chính mà chỉ được phép có khóa ngoại
- **B.** Đúng, vì hệ quản trị CSDL quan hệ yêu cầu mọi khóa dự tuyển đều phải là khóa chính
- **C.** Đúng, nếu quan hệ đó có trên một ngàn dòng dữ liệu được lưu trữ trên máy chủ
- **D.** Sai, người thiết kế chỉ chọn đúng DUY NHẤT MỘT khóa tối thiểu để làm khóa chính  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục I.4.c & I.4.d: Khóa chính là MỘT khóa tối thiểu được người phân tích chọn để cài đặt. Một quan hệ chỉ có DUY NHẤT MỘT khóa chính. Các khóa tối thiểu còn lại là khóa dự tuyển.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm giữa việc có nhiều candidate keys với số lượng khóa chính được cài đặt.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy số lượng khóa chính: Mỗi bảng chỉ có DUY NHẤT 1 Khóa chính (Primary Key)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.4.c
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Có thể có nhiều khóa dự tuyển, nhưng CHỈ ĐƯỢC CHỌN ĐÚNG 1 Khóa chính!

---

### Câu 15 [db-c2-t2-015]

Khái niệm "Quan hệ rỗng" (Empty Relation ký hiệu r = ∅) trong mô hình quan hệ mang ý nghĩa kỹ thuật gì?

- **A.** Lược đồ quan hệ đã được khai báo các thuộc tính nhưng chưa có dòng dữ liệu nào được nạp  *(Đáp án đúng)*
- **B.** Lược đồ quan hệ đã bị người quản trị DBA dùng lệnh xóa bỏ hoàn toàn khỏi bộ nhớ đĩa
- **C.** Lược đồ quan hệ không có bất kỳ thuộc tính nào và không có tên gọi trong hệ thống
- **D.** Một bảng dữ liệu bị hỏng cung từ vật lý khiến hệ điều hành không thể đọc được

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục I.2.b: Khi cho tập thuộc tính U, ta coi như cho trước LĐQH, và cùng với nó có quan hệ rỗng r = ∅. Khi lược đồ được nạp thêm ít nhất một dòng ➔ ta có quan hệ khác rỗng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm quan hệ rỗng là bảng bị xóa khỏi CSDL (DROP TABLE).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy quan hệ rỗng: Đã có cấu trúc cột nhưng CHƯA NẠP DÒNG DỮ LIỆU NÀO`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục I.2.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Quan hệ rỗng r = ∅ ➔ Đã có cấu trúc cột, chỉ là số dòng = 0!

---

### Câu 16 [db-c2-t2-016]

Cho 2 quan hệ r1 và r2 có thuộc tính U1 = {MaNV, Hoten} và U2 = {MaNV, Luong}. Kết quả của Phép hợp r1 ∪ r2 trong đại số quan hệ là gì?

- **A.** Thu được một quan hệ mới gồm cả 3 thuộc tính {MaNV, Hoten, Luong} của cả hai
- **B.** Không thực hiện được vì hai quan hệ r1 và r2 không tương thích (U1 khác U2)  *(Đáp án đúng)*
- **C.** Thu được một quan hệ rỗng vì hai quan hệ không có cùng số lượng các dòng dữ liệu
- **D.** Hệ thống tự động điền giá trị NULL vào cột Hoten và Luong cho các dòng bị thiếu

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục II.4.a & II.4.c: Phép hợp (∪) BẮT BUỘC phải thực hiện trên hai quan hệ TƯƠNG THÍCH (có cùng tập thuộc tính U1 = U2). Ở đây U1 ≠ U2 nên phép toán KHÔNG THỂ THỰC HIỆN ĐƯỢC.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh bị nhầm sang phép kết nối tự nhiên (Join) hoặc phép Full Outer Join của SQL.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy điều kiện tiên quyết của Phép Hợp ∪ trong toán ĐSQH`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.4.a & II.4.c
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khác tập thuộc tính ➔ TUYỆT ĐỐI KHÔNG THỰC HIỆN ĐƯỢC phép hợp ∪!

---

### Câu 17 [db-c2-t2-017]

Trong đại số quan hệ, kết quả của Phép hiệu r1 − r2 giữa hai quan hệ tương thích được định nghĩa chính xác là gì?

- **A.** Tập hợp các bộ vừa thuộc r1 vừa thuộc r2: {t | t ∈ r1 ∧ t ∈ r2}
- **B.** Tập hợp các bộ thuộc r2 nhưng không thuộc r1: {t | t ∈ r2 ∧ t ∉ r1}
- **C.** Tập hợp các bộ thuộc r1 nhưng không thuộc r2: {t | t ∈ r1 ∧ t ∉ r2}  *(Đáp án đúng)*
- **D.** Tập hợp các bộ thuộc r1 hoặc thuộc r2: {t | t ∈ r1 ∨ t ∈ r2}

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục II.4.c: Hiệu của 2 quan hệ tương thích r, s, ký hiệu r − s, là quan hệ gồm các bộ thuộc r nhưng không thuộc s: r − s = {t | t ∈ r ∧ t ∉ s}.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm thứ tự trừ: lấy phần tử của r2 trừ r1.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy định nghĩa hình thức toán học của Phép Hiệu Difference (−)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.4.c
  + 💡 *Mẹo phản xạ nhanh (`tip`):* r1 − r2 = Các bộ thuộc r1 nhưng KHÔNG THUỘC r2!

---

### Câu 18 [db-c2-t2-018]

Khi thực hiện Phép tích Descartes r(R) × s(S) trên 2 quan hệ rời nhau với R có n thuộc tính và S có m thuộc tính, bậc của quan hệ kết quả là bao nhiêu?

- **A.** Chính xác là n − m thuộc tính trên lược đồ hiệu R − S
- **B.** Chính xác là n × m thuộc tính do nhân chéo tất cả các cột
- **C.** Chính xác là giá trị lớn nhất giữa n và m: max(n, m)
- **D.** Chính xác là n + m thuộc tính trên lược đồ hợp R ∪ S  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục II.3.a: Kết quả là quan hệ gồm các (n + m)-bộ trên lược đồ R1 ∪ R2 (n thành phần đầu thuộc r, m thành phần sau thuộc s). Bậc của quan hệ kết quả là n + m.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm giữa bậc thuộc tính (cộng n + m) với số dòng (nhân n x m).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Bậc thuộc tính (Degree) = n + m vs Số dòng (Cardinality) = n x m`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Tích Descartes: SỐ CỘT = n + m; SỐ DÒNG = số dòng r × số dòng s!

---

### Câu 19 [db-c2-t2-019]

Phát biểu nào sau đây là ĐÚNG khi so sánh Phép chọn (σ) và Phép chiếu (π)?

- **A.** Phép chọn cắt quan hệ theo chiều ngang (lọc dòng), phép chiếu cắt theo chiều dọc (lọc cột)  *(Đáp án đúng)*
- **B.** Phép chọn cắt quan hệ theo chiều dọc (lọc cột), phép chiếu cắt theo chiều ngang (lọc dòng)
- **C.** Cả phép chọn và phép chiếu đều làm giảm đồng thời cả số dòng và số cột của quan hệ gốc
- **D.** Phép chọn luôn loại bỏ các bộ trùng lặp còn phép chiếu giữ nguyên tất cả các bộ trùng lặp

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Phép chọn σ lọc các bộ (dòng) thỏa điều kiện ➔ Cắt ngang quan hệ (Horizontal slice). Phép chiếu π trích chọn các thuộc tính (cột) ➔ Cắt dọc quan hệ (Vertical slice).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nói ngược: tưởng chọn là cắt dọc và chiếu là cắt ngang.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy hình học trực quan: Chọn σ = Cắt ngang (Dòng); Chiếu π = Cắt dọc (Cột)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.2
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Chọn σ = Lọc dòng (CẮT NGANG); Chiếu π = Lọc cột (CẮT DỌC)!

---

### Câu 20 [db-c2-t2-020]

Cho 2 quan hệ r và s có chung thuộc tính A. Trong kết quả của Phép kết nối tự nhiên r * s, thuộc tính A sẽ xuất hiện mấy lần?

- **A.** Xuất hiện 2 lần riêng biệt với tên gọi r.A và s.A giống hệt như tích Descartes
- **B.** Xuất hiện đúng 1 lần duy nhất do một trong hai thuộc tính trùng tên đã bị loại bỏ  *(Đáp án đúng)*
- **C.** Bị xóa bỏ hoàn toàn khỏi kết quả và không xuất hiện lần nào trong bảng mới
- **D.** Xuất hiện vô số lần tùy thuộc vào số lượng các bộ dữ liệu trùng khớp nhau

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục II.3.b ghi rõ: Trong phép kết nối tự nhiên, một trong hai thuộc tính trùng tên bị LOẠI BỎ khỏi kết quả để tránh dư thừa. Thuộc tính A chỉ xuất hiện đúng 1 lần.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh quen với kết quả `SELECT * FROM r JOIN s ON r.A = s.A` trong SQL (hiển thị cả 2 cột A).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy khác biệt giữa ĐSQH và SQL: Natural Join trong ĐSQH chỉ giữ 1 cột A`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* ĐSQH Natural Join (*): Thuộc tính trùng tên CHỈ XUẤT HIỆN 1 LẦN DUY NHẤT!

---

### Câu 21 [db-c2-t2-021]

Cho các nhận định về Phép chia (Division — ÷) trong đại số quan hệ:
(I) Quan hệ chia s bắt buộc phải có tập thuộc tính là tập con của quan hệ bị chia r.
(II) Kết quả của r ÷ s chứa các bộ kết hợp với mọi bộ của s đều thuộc về r.
(III) Phép chia có tính chất giao hoán: r ÷ s = s ÷ r.
Tổ hợp ĐÚNG là:

- **A.** Chỉ duy nhất nhận định (I) là đúng, nhận định (II), (III) sai
- **B.** Cả ba nhận định (I), (II) và (III) đều hoàn toàn chính xác
- **C.** Tổ hợp (I) và (II) hoàn toàn đúng đắn, nhận định (III) sai  *(Đáp án đúng)*
- **D.** Tổ hợp (II) và (III) hoàn toàn đúng đắn, nhận định (I) sai

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** (III) sai vì phép chia toán học không bao giờ giao hoán ($r \div s \neq s \div r$). (I) và (II) hoàn toàn đúng theo giáo trình mục II.5.b.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh đọc lướt nhận định (III) tưởng phép chia cũng giao hoán như phép nhân.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tính giao hoán: Phép chia (Division ÷) TUYỆT ĐỐI KHÔNG GIAO HOÁN`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.5.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Phép chia r ÷ s KHÔNG CÓ tính giao hoán!

---

### Câu 22 [db-c2-t2-022]

Biểu thức ĐSQH tìm mã các đề tài có kinh phí ≥ 20 triệu HOẶC do thầy 'Lê Đức Phúc' làm chủ nhiệm là gì?

- **A.** π_(MaDT) (σ_(Kinhphi < 20 ∨ Chunhiem ≠ 'Lê Đức Phúc') (DETAI))
- **B.** π_(MaDT) (σ_(Kinhphi ≥ 20 ∧ Chunhiem = 'Lê Đức Phúc') (DETAI))
- **C.** π_(MaDT) (σ_(Kinhphi ≥ 20 ∧ Chunhiem ≠ 'Lê Đức Phúc') (DETAI))
- **D.** π_(MaDT) (σ_(Kinhphi ≥ 20 ∨ Chunhiem = 'Lê Đức Phúc') (DETAI))  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Từ khóa "HOẶC" trong câu hỏi tương ứng với toán tử tuyển logic `∨` (OR) trong biểu thức của phép chọn σ. Dùng `∧` là sai vì đó là "VÀ".
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn nhầm phép `∧` (AND) thay vì `∨` (OR).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy toán tử logic: "HOẶC" bắt buộc dùng toán tử tuyển logic ∨`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Hoặc = Toán tử ∨; Và = Toán tử ∧!

---

### Câu 23 [db-c2-t2-023]

Cho quan hệ r gồm các thuộc tính (MaSV, MaMH, DiemThi). Biểu thức nào sau đây tìm các sinh viên có điểm thi môn 'CSDL' lớn hơn điểm thi môn 'CTDL' của chính sinh viên đó?

- **A.** Cần đổi tên để tự kết nối: σ_(r1.MaSV=r2.MaSV ∧ r1.DiemThi>r2.DiemThi) (σ_(MaMH='CSDL')(r1) × σ_(MaMH='CTDL')(r2))  *(Đáp án đúng)*
- **B.** Chỉ dùng một phép chọn lọc đơn: σ_(MaSV=MaSV ∧ r.DiemThi>r.DiemThi) (σ_(MaMH='CSDL')(r) ∩ σ_(MaMH='CTDL')(r))
- **C.** Dùng phép hợp hai bảng điểm con lại: σ_(r.MaSV=r.MaSV ∧ DiemThi>5) (σ_(MaMH='CSDL')(r) ∪ σ_(MaMH='CTDL')(r))
- **D.** Đại số quan hệ hoàn toàn bất lực trước truy vấn so sánh hai dòng, phải chuyển sang dùng lệnh SQL nâng cao

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Vì mỗi dòng chỉ lưu 1 môn, điều kiện so sánh giữa 2 môn của cùng 1 sinh viên đòi hỏi phải thực hiện phép TỰ KẾN NỐI (Self-join) thông qua phép đổi tên quan hệ trung gian r1 và r2, sau đó so sánh DiemThi.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay chọn phương án B (viết `MaMH = CSDL ∧ MaMH = CTDL` trên 1 dòng, điều kiện này luôn luôn False).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Self-join trong ĐSQH: Bắt buộc đổi tên quan hệ để so sánh 2 dòng với nhau`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.3 & II.5
  + 💡 *Mẹo phản xạ nhanh (`tip`):* So sánh dữ liệu giữa 2 dòng trong cùng 1 bảng ➔ Bắt buộc phải TỰ KẾT NỐI (Self-Join)!

---

### Câu 24 [db-c2-t2-024]

Điền thuật ngữ: "Phép kết nối điều kiện (θ-Join) khi toán tử so sánh θ là toán tử bằng (=) thì được gọi là (...)."

- **A.** Phép kết nối tự nhiên chuẩn (Natural Join)
- **B.** Phép kết nối điều kiện bằng (Equijoin)  *(Đáp án đúng)*
- **C.** Phép tích Descartes chuẩn (Cartesian Product)
- **D.** Phép kết nối nửa ngoài chuẩn (Semi-join)

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục II.3.b định nghĩa: Nếu θ là toán tử so sánh bằng "=" ➔ gọi là kết nối bằng (Equijoin). Khi kết nối bằng trên các thuộc tính trùng tên và bỏ 1 cột trùng thì mới là Kết nối tự nhiên.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm Equijoin với Natural Join (quên rằng Natural Join còn có thêm điều kiện bỏ cột trùng tên).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân biệt Equijoin (kết nối bằng) vs Natural Join (kết nối tự nhiên)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* θ là dấu '=' ➔ KẾT NỐI BẰNG (Equijoin); Kết nối bằng cột trùng tên + bỏ 1 cột ➔ NATURAL JOIN!

---

### Câu 25 [db-c2-t2-025]

Cho bảng Giangvien có 10 người và Canbo có 15 người, trong đó có đúng 5 người vừa là cán bộ vừa là giảng viên. Số bộ trong kết quả của Giangvien ∪ Canbo là bao nhiêu?

- **A.** Chính xác là 5 bộ (vì chỉ có 5 người chung mới được đưa vào kết quả phép hợp)
- **B.** Chính xác là 25 bộ (vì 10 + 15 = 25 bộ, phép hợp luôn cộng gộp tất cả các dòng)
- **C.** Chính xác là 20 bộ (vì 10 + 15 − 5 = 20 bộ, các phần tử trùng lặp chỉ tính một lần)  *(Đáp án đúng)*
- **D.** Chính xác là 50 bộ (vì phép hợp nhân đôi số lượng cán bộ với số lượng giảng viên)

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Theo nguyên lý tập hợp: $|A \cup B| = |A| + |B| - |A \cap B| = 10 + 15 - 5 = 20$ bộ. Các phần tử trùng lặp (5 người) chỉ được giữ lại 1 lần duy nhất trong phép hợp.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay lấy 10 + 15 = 25 (quên mất phép hợp trong ĐSQH loại bỏ trùng lặp).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy loại bỏ phần tử giao trong Phép Hợp ∪ của đại số quan hệ`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* |A ∪ B| = |A| + |B| − |A ∩ B| = 10 + 15 − 5 = 20 bộ!

---

### Câu 26 [db-c2-t2-026]

Khi thực hiện Phép kết nối tự nhiên r * s, nếu hai quan hệ r và s hoàn toàn KHÔNG CÓ bất kỳ thuộc tính chung nào, kết quả sẽ tương đương với phép toán nào?

- **A.** Tương đương với Phép hợp r ∪ s của hai quan hệ rời nhau
- **B.** Thu được một quan hệ rỗng r = ∅ vì không có thuộc tính để ghép nối
- **C.** Bị lỗi cú pháp toán học và hệ thống từ chối thực hiện câu truy vấn
- **D.** Tương đương chính xác với Phép tích Descartes r × s  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Theo định nghĩa: Nếu r và s không có thuộc tính chung, điều kiện kết nối bằng trở thành luôn đúng (chân lý). Khi đó phép kết nối tự nhiên suy biến thành Phép tích Descartes r × s.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ không có thuộc tính chung thì Natural Join trả về rỗng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy suy biến của Natural Join khi không có thuộc tính chung: Thành Tích Descartes`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Không có cột chung ➔ Natural Join (*) biến thành TÍCH DESCARTES (×)!

---

### Câu 27 [db-c2-t2-027]

Hai biểu thức ĐSQH sau đây có tương đương nhau về mặt kết quả không:
E1 = σ_C (π_X (r))
E2 = π_X (σ_C (r))
(Giả sử điều kiện C chỉ liên quan đến các thuộc tính nằm trong tập X).

- **A.** Hoàn toàn tương đương nhau và E2 tối ưu hơn vì lọc dòng trước khi chiếu  *(Đáp án đúng)*
- **B.** Tuyệt đối không bao giờ tương đương nhau vì thứ tự các phép toán bị đảo ngược
- **C.** Chỉ tương đương nhau khi quan hệ r có chứa ít nhất một khóa ngoại
- **D.** Chỉ tương đương nhau khi điều kiện C chỉ sử dụng duy nhất toán tử so sánh bằng

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Nếu điều kiện C chỉ chứa thuộc tính trong X, thì lọc dòng trước rồi chiếu cột (E2) hay chiếu cột trước rồi lọc dòng (E1) đều cho kết quả như nhau. Trong đó E2 tối ưu hơn vì giảm số dòng trước.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ đảo thứ tự phép toán thì kết quả lúc nào cũng khác nhau.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy quy tắc giao hoán giữa Phép chọn và Phép chiếu khi C ⊆ X`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.2
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Nếu C chỉ chứa cột trong X ➔ σ và π có thể hoán đổi; Lọc dòng (σ) trước thì nhanh hơn!

---

### Câu 28 [db-c2-t2-028]

Cho lược đồ R(A, B) và S(B). Giả sử r = {(1, a), (1, b), (2, a)} và s = {(a), (b)}. Kết quả của Phép chia r ÷ s là gì?

- **A.** Gồm 2 bộ là {(1), (2)} vì cả 1 và 2 đều có xuất hiện trong quan hệ r
- **B.** Gồm đúng 1 bộ duy nhất là {(1)} vì chỉ có giá trị 1 đi kèm với cả (a) và (b)  *(Đáp án đúng)*
- **C.** Gồm 0 bộ rỗng vì số lượng dòng của quan hệ s ít hơn số dòng của quan hệ r
- **D.** Gồm 3 bộ giống hệt như quan hệ r ban đầu do phép chia giữ nguyên dữ liệu

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Theo định nghĩa phép chia: r ÷ s tìm các giá trị A sao cho A ghép với TẤT CẢ các giá trị B trong s đều thuộc r. Giá trị A = 1 có (1, a) và (1, b) ➔ Thỏa mãn. Giá trị A = 2 chỉ có (2, a), thiếu (2, b) ➔ Loại. Kết quả là {(1)}.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay lấy cả giá trị A = 2 (quên mất điều kiện phải đi kèm với TẤT CẢ phần tử của s).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy tính toán thực tế của Phép chia r ÷ s`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.5.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Chỉ giữ lại giá trị nào đi kèm với TẤT CẢ các dòng của s ➔ Chỉ có 1!

---

### Câu 29 [db-c2-t2-029]

Toán tử logic nào sau đây được phép sử dụng để liên kết các biểu thức điều kiện con bên trong Phép chọn (Selection — σ)?

- **A.** Các phép toán số học cộng, trừ, nhân, chia giữa các chuỗi ký tự Unicode
- **B.** Chỉ duy nhất toán tử ∧ (AND), tuyệt đối không được dùng toán tử ∨ (OR)
- **C.** Các toán tử logic chuẩn: ∧ (AND - hội), ∨ (OR - tuyển), và ¬ (NOT - phủ định)  *(Đáp án đúng)*
- **D.** Các lệnh gán biến con trỏ bộ nhớ trong ngôn ngữ lập trình hợp ngữ

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục II.2.a: Điều kiện C trong phép chọn là một biểu thức logic, các biểu thức con có thể kết hợp với nhau bằng các toán tử logic: ∧ (AND), ∨ (OR), ¬ (NOT).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ phép chọn chỉ hỗ trợ AND mà không hỗ trợ OR/NOT.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy các toán tử logic hợp lệ trong điều kiện C của Phép chọn σ`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.2.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Điều kiện chọn σ hỗ trợ đầy đủ: ∧ (AND), ∨ (OR), ¬ (NOT)!

---

### Câu 30 [db-c2-t2-030]

Biểu thức ĐSQH nào sau đây tìm mã số và tên các đề tài được thực hiện bởi sinh viên có học lực 'Xuất sắc' (dùng SINHVIEN, SV_DT, DETAI)?

- **A.** π_(MaDT, TenDT) (σ_(Hocluc = 'Xuất sắc') (SINHVIEN) × DETAI)
- **B.** σ_(MaDT, TenDT) (π_(Hocluc = 'Xuất sắc') (SINHVIEN * SV_DT * DETAI))
- **C.** π_(MaDT, TenDT) (SINHVIEN * SV_DT) ∩ π_(MaDT, TenDT) (DETAI)
- **D.** π_(MaDT, TenDT) (σ_(Hocluc = 'Xuất sắc') (SINHVIEN * SV_DT * DETAI))  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Kết nối tự nhiên 3 bảng để liên kết MaSV và MaDT, lọc sinh viên có Hocluc = 'Xuất sắc' bằng σ, sau đó chiếu lấy MaDT và TenDT bằng π.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm ký hiệu σ và π hoặc dùng phép giao giữa 2 bảng không tương thích.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy truy vấn liên kết 3 bảng bằng kết nối tự nhiên và phép chọn/chiếu`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.2 & II.3
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Ghép 3 bảng dùng (*), Lọc dòng dùng σ, Lấy cột dùng π!

---

### Câu 31 [db-c2-t2-031]

Trong đại số quan hệ, nếu quan hệ r có 0 bộ dữ liệu (r = ∅), kết quả của phép chiếu π_X(r) trên tập thuộc tính X bất kỳ sẽ là gì?

- **A.** Là quan hệ rỗng (∅) trên lược đồ X và không có bất kỳ bộ dữ liệu nào  *(Đáp án đúng)*
- **B.** Là một quan hệ chứa 1 bộ duy nhất với tất cả các trường đều mang giá trị NULL
- **C.** Hệ thống sẽ báo lỗi sập bộ nhớ do không thể chiếu trên một quan hệ rỗng
- **D.** Hệ thống tự động nạp ngẫu nhiên một dòng dữ liệu mẫu vào quan hệ kết quả

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Theo định nghĩa: π_X(r) = {t[X] | t ∈ r}. Nếu r = ∅ thì không có bộ t nào thuộc r, do đó tập kết quả cũng là tập rỗng ∅ trên lược đồ X.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nghĩ kết quả trả về 1 dòng chứa giá trị NULL.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phép chiếu trên tập rỗng: Kết quả luôn luôn là Tập Rỗng (∅)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.2.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Chiếu trên tập rỗng ➔ Kết quả CHẮC CHẮN LÀ TẬP RỖNG (∅)!

---

### Câu 32 [db-c2-t2-032]

Cho 2 quan hệ r và s có U1 = {A, B} và U2 = {A, B}. Khẳng định nào sau đây về mối quan hệ giữa phép giao và phép hiệu là ĐÚNG?

- **A.** Phép giao r ∩ s có thể biểu diễn qua phép hiệu là: (r − s) − s
- **B.** Phép giao r ∩ s có thể biểu diễn qua phép hiệu là: r − (r − s)  *(Đáp án đúng)*
- **C.** Phép giao r ∩ s có thể biểu diễn qua phép hiệu là: s − (s ∪ r)
- **D.** Phép giao và phép hiệu là hai phép toán hoàn toàn độc lập không thể quy đổi

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Đẳng thức tập hợp kinh điển: r ∩ s = r − (r − s). Phần bù của phần bù chính là phần giao nhau của hai tập hợp.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh không nhớ công thức biến đổi tương đương giữa phép giao và phép hiệu.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy đẳng thức tập hợp: r ∩ s = r − (r − s)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.4.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* r ∩ s = r − (r − s)!

---

### Câu 33 [db-c2-t2-033]

Trong biểu thức ĐSQH: `XuatSac ← σ_(DiemTB ≥ 9.0)(HOCBONG)`, ký hiệu mũi tên ngược `←` mang ý nghĩa gì?

- **A.** Chuyển toàn bộ dữ liệu của quan hệ XuatSac lưu đè vào bảng HOCBONG trên ổ đĩa
- **B.** So sánh xem quan hệ XuatSac có nhỏ hơn hoặc bằng quan hệ HOCBONG hay không
- **C.** Gán kết quả của biểu thức ĐSQH bên phải cho tên quan hệ trung gian XuatSac bên trái  *(Đáp án đúng)*
- **D.** Xóa sạch toàn bộ dữ liệu của quan hệ HOCBONG sau khi thực hiện xong câu lệnh

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục II.5.a: Cú pháp phép đặt tên: `⟨tên quan hệ trung gian⟩ ← ⟨biểu thức ĐSQH⟩`. Dấu `←` là phép gán kết quả của biểu thức cho một quan hệ trung gian.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm dấu `←` là phép so sánh nhỏ hơn hoặc bằng `<=`.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ký hiệu toán học: Mũi tên ← là phép gán tên quan hệ trung gian`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.5.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Dấu ← trong ĐSQH = Gán kết quả cho quan hệ trung gian!

---

### Câu 34 [db-c2-t2-034]

Một câu hỏi nghiệp vụ: "Tìm các đề tài có tất cả sinh viên khoa CNTT tham gia". Dấu hiệu then chốt nào trong câu hỏi chỉ ra cần dùng Phép chia (÷)?

- **A.** Cụm từ "KHOA CNTT" chỉ ra rằng bắt buộc phải sử dụng phép tích Descartes
- **B.** Cụm từ "TÌM CÁC ĐỀ TÀI" chỉ ra rằng cần lọc cột mã đề tài bằng phép chiếu
- **C.** Cụm từ "THAM GIA" chỉ ra rằng bắt buộc phải sử dụng phép kết nối ngoài
- **D.** Cụm từ "TẤT CẢ SINH VIÊN KHOA CNTT" tương ứng với lượng từ với mọi ∀  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục II.5.b: Ý nghĩa nghiệp vụ của phép chia là giải quyết các bài toán mang ý nghĩa "TẤT CẢ" hoặc "MỌI" (lượng từ ∀). Khi gặp yêu cầu "tất cả sinh viên khoa CNTT", đó là dấu hiệu chuẩn xác của Phép chia (÷).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Học viên hay dùng phép Join thông thường mà không nhận ra đây là bài toán phổ quát ∀.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy nhận diện yêu cầu nghiệp vụ: Cụm từ "TẤT CẢ" = Phép Chia (÷)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.5.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đề bài có chữ "TẤT CẢ / MỌI" ➔ Dấu hiệu chắc chắn dùng PHÉP CHIA (÷)!

---

### Câu 35 [db-c2-t2-035]

Khẳng định nào sau đây là KHÔNG ĐÚNG khi nói về Đại số quan hệ (Relational Algebra)?

- **A.** Đại số quan hệ là một ngôn ngữ lập trình thủ tục bắt buộc phải biên dịch ra tệp .exe  *(Đáp án đúng)*
- **B.** Đại số quan hệ có tính đầy đủ và là ngôn ngữ phi thủ tục dựa trên toán học
- **C.** Đại số quan hệ là nền tảng trực tiếp để xây dựng ngôn ngữ truy vấn dữ liệu SQL
- **D.** Kết quả của một phép toán đại số quan hệ luôn luôn là một quan hệ mới

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục II.1.a: Đại số quan hệ là ngôn ngữ PHI THỦ TỤC (Non-procedural) và có tính đầy đủ, là cơ sở cho SQL. Khẳng định "là ngôn ngữ lập trình thủ tục biên dịch ra file .exe" là SAI.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhầm lẫn giữa ngôn ngữ thủ tục (Procedural như C) với ngôn ngữ phi thủ tục của ĐSQH.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy bản chất ĐSQH: Là ngôn ngữ PHI THỦ TỤC, không phải ngôn ngữ thủ tục`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.1.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đại số quan hệ = PHI THỦ TỤC (Non-procedural); Kết quả luôn là 1 quan hệ!

---

### Câu 36 [db-c2-t2-036]

Theo Bước 4, một Thực thể kết hợp (Associative Entity) KHÔNG CÓ danh hiệu riêng (No natural identifier) sẽ được chuyển đổi sang mô hình quan hệ giống như trường hợp nào?

- **A.** Xử lý giống mối quan hệ một - một (1:1), khóa chính lấy từ phía thực thể tùy chọn
- **B.** Xử lý giống mối quan hệ nhiều - nhiều (M:N), khóa chính là tổ hợp các khóa ngoại  *(Đáp án đúng)*
- **C.** Xử lý giống một kiểu thực thể thường độc lập, không cần bất kỳ khóa ngoại liên kết
- **D.** Xử lý giống mối quan hệ cha - con kế thừa, khóa chính tự động đồng bộ từ máy chủ

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục III.3.b (Bước 4): Thực thể kết hợp không có danh hiệu riêng được xử lý GIỐNG MỐI QUAN HỆ NHIỀU-NHIỀU (khóa chính tổ hợp từ 2 khóa ngoại của 2 thực thể tham gia).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh không nhớ quy tắc phân nhánh của Bước 4 khi thực thể kết hợp không có identifier riêng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Bước 4: Không có danh hiệu riêng ➔ Xử lý như quan hệ Nhiều-Nhiều (M:N)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thực thể kết hợp không có mã riêng ➔ Xử lý y hệt quan hệ M:N (PK tổ hợp từ các FK)!

---

### Câu 37 [db-c2-t2-037]

Theo Bước 5, khi chuyển đổi mối quan hệ một ngôi Nhiều - Nhiều đệ quy (M:N Unary, ví dụ: Môn học tiên quyết: 1 môn có nhiều môn trước, 1 môn là điều kiện cho nhiều môn sau), quy tắc chuẩn là gì?

- **A.** Bắt buộc phải phân tách thành 3 quan hệ độc lập để ngăn chặn hiện tượng lặp vô tận khi duyệt
- **B.** Chỉ cần tạo duy nhất 1 quan hệ và bổ sung thêm 2 cột khóa ngoại cùng đặt trực tiếp trong bảng
- **C.** Tạo 2 quan hệ: bảng cho thực thể gốc và bảng kết hợp gồm 2 khóa ngoại cùng trỏ về khóa chính  *(Đáp án đúng)*
- **D.** Mô hình dữ liệu quan hệ hoàn toàn không cho phép đệ quy nên bắt buộc phải loại bỏ mối quan hệ

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục III.5.a (Bảng Bước 5): Quan hệ một ngôi M:N đệ quy: Tạo 2 quan hệ: (1) quan hệ cho kiểu thực thể đó; (2) quan hệ kết hợp gồm 2 thuộc tính là khóa ngoại cùng tham chiếu về khóa chính của (1) -- khóa chính quan hệ kết hợp là tổ hợp 2 thuộc tính đó.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm M:N đệ quy với 1:N đệ quy (tưởng chỉ cần thêm cột trong 1 bảng).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy đệ quy M:N: BẮT BUỘC TẠO 2 QUAN HỆ (Bảng thực thể + Bảng kết hợp đệ quy)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.5.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đệ quy M:N ➔ 2 bảng: Bảng gốc + Bảng kết hợp (chứa 2 FK cùng trỏ về PK gốc)!

---

### Câu 38 [db-c2-t2-038]

Theo Bước 7, trong mối quan hệ Cha/Con (Supertype/Subtype), các thuộc tính chung của tất cả các đối tượng (như Mã nhân viên, Họ tên, Địa chỉ) sẽ được đặt ở đâu?

- **A.** Không lưu trong CSDL mà chỉ được tính toán hiển thị tạm thời trên giao diện web
- **B.** Bắt buộc phải nhân bản và sao chép lặp lại trong tất cả các quan hệ Con (Subtype)
- **C.** Tách riêng thành một bảng trung gian độc lập lưu toàn bộ các thông tin tổng quát
- **D.** Đặt trong quan hệ Cha (Supertype), quan hệ con chỉ chứa thuộc tính đặc thù riêng  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục III.6.a: Thuộc tính của thực thể cha trở thành thuộc tính của quan hệ cha. Thuộc tính riêng của thực thể con trở thành thuộc tính của quan hệ con tương ứng. Tránh dư thừa dữ liệu.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhân bản các thuộc tính chung vào từng bảng con (gây dư thừa dữ liệu nghiêm trọng).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân bổ thuộc tính Supertype/Subtype: Chung ở CHA, Riêng ở CON`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.6.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thuộc tính chung nằm ở BẢNG CHA; Thuộc tính riêng nằm ở BẢNG CON!

---

### Câu 39 [db-c2-t2-039]

Bẫy sai lầm kinh điển: Một lập trình viên chuyển đổi quan hệ 1:N giữa LOP (1) và SINHVIEN (N) bằng cách đặt MaSV (khóa của SINHVIEN) làm khóa ngoại trong bảng LOP. Hậu quả trực tiếp là gì?

- **A.** Vi phạm tính nguyên tố của thuộc tính vì ô MaSV trong bảng LOP phải lưu danh sách mảng nhiều sinh viên  *(Đáp án đúng)*
- **B.** Hệ quản trị CSDL tự động kích hoạt tiến trình xóa sạch dữ liệu sinh viên do vi phạm ràng buộc toàn vẹn
- **C.** Không gây ra bất kỳ tác hại nào vì khóa ngoại đặt ở bảng nào trong mối quan hệ 1:N cũng có tác dụng như nhau
- **D.** Làm cho toàn bộ bảng SINHVIEN tự động bị nhân đôi dung lượng lưu trữ vật lý trên hệ thống tập tin đĩa từ

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Đặt ngược khóa ngoại về phía 1 (LOP): vì 1 lớp có nhiều sinh viên, cột MaSV trong LOP sẽ phải lưu một danh sách mảng các mã SV (vi phạm 1NF) hoặc phải nhân đôi dòng LOP cho mỗi sinh viên (dư thừa dữ liệu nghiêm trọng). Quy tắc bắt buộc: Khóa ngoại phải đặt ở phía N (SINHVIEN).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Học viên không hiểu sâu lý do vì sao 1:N phải đặt FK ở phía N mà không được đặt ở phía 1.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy đặt ngược khóa ngoại trong quan hệ 1:N: Gây vi phạm tính nguyên tố 1NF`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Đặt FK ở phía 1 ➔ Cột FK bị đa trị (chứa danh sách) ➔ Vi phạm chuẩn 1NF ngay!

---

### Câu 40 [db-c2-t2-040]

Trong CSDL Quản lý bán hàng: Hoadon(SoHD, Ngaylap, Ngaygiao, Trigia, MaKH). Thuộc tính MaKH trong bảng Hoadon đóng vai trò kỹ thuật gì?

- **A.** Là Khóa chính (Primary Key) xác định duy nhất từng hóa đơn bán lẻ trong CSDL
- **B.** Là Khóa ngoại (Foreign Key) tham chiếu đến khóa chính MaKH của bảng Khach  *(Đáp án đúng)*
- **C.** Là Thuộc tính đa trị lưu trữ danh sách tất cả các khách hàng mua chung hóa đơn đó
- **D.** Là Thuộc tính dẫn xuất được tự động tính toán từ bảng chi tiết hóa đơn bán hàng

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục IV.1: MaKH trong bảng Hoadon là khóa ngoại tham chiếu đến khóa chính MaKH của bảng Khach (quan hệ 1:N: một khách hàng có nhiều hóa đơn).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm MaKH là khóa chính thứ hai của Hoadon.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy xác định vai trò của MaKH trong bảng Hoadon: Là Khóa ngoại`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục IV.1
  + 💡 *Mẹo phản xạ nhanh (`tip`):* MaKH trong Hoadon = KHÓA NGOẠI tham chiếu về bảng Khach!

---

### Câu 41 [db-c2-t2-041]

Trong CSDL Quản lý bán hàng, biểu thức ĐSQH nào sau đây tìm mã số, họ tên các khách hàng đã từng mua mặt hàng có mã số 'HG001'?

- **A.** π_(MaKH, Hoten) (Khach) ∩ π_(MaKH, Hoten) (Hoadon * Chitiet_HD)
- **B.** σ_(MaKH, Hoten) (π_(MaHG = 'HG001') (Khach * Hoadon * Chitiet_HD))
- **C.** π_(MaKH, Hoten) (σ_(MaHG = 'HG001') (Khach * Hoadon * Chitiet_HD))  *(Đáp án đúng)*
- **D.** π_(MaKH, Hoten) (σ_(MaHG = 'HG001') (Khach × Chitiet_HD))

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Cần kết nối 3 bảng: Khach (chứa Hoten, MaKH), Hoadon (nối MaKH và SoHD), Chitiet_HD (nối SoHD và MaHG). Sau đó lọc MaHG = 'HG001' bằng σ và chiếu lấy MaKH, Hoten bằng π.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay bỏ quên bảng trung gian Hoadon và cố gắng nối trực tiếp Khach với Chitiet_HD.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy đường dẫn kết nối chuỗi 3 bảng: Khach ➔ Hoadon ➔ Chitiet_HD`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục IV.1 & IV.2
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khách không có MaHG ➔ Phải đi qua Hoadon: Khach * Hoadon * Chitiet_HD!

---

### Câu 42 [db-c2-t2-042]

Theo Bước 2, điều kiện bắt buộc nào sau đây được áp dụng cho khóa ngoại tham chiếu đến thực thể mạnh trong quan hệ thực thể yếu?

- **A.** Khóa ngoại tham chiếu đến thực thể mạnh có thể tự động thay đổi giá trị ngẫu nhiên
- **B.** Khóa ngoại tham chiếu đến thực thể mạnh bắt buộc phải luôn luôn mang giá trị NULL
- **C.** Khóa ngoại tham chiếu đến thực thể mạnh phải có kiểu dữ liệu chuỗi ký tự tự do
- **D.** Khóa ngoại tham chiếu đến thực thể mạnh tuyệt đối KHÔNG ĐƯỢC PHÉP NULL  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục III.3.a lưu ý rõ: Khóa ngoại tham chiếu đến thực thể mạnh KHÔNG ĐƯỢC NULL. Vì thực thể yếu tồn tại phụ thuộc vào thực thể mạnh, nếu khóa ngoại này rỗng thì sự tồn tại của thực thể yếu mất căn cứ.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh nhớ mang máng "khóa ngoại được phép NULL" mà quên ngoại lệ bắt buộc của Thực thể yếu.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy ngoại lệ khóa ngoại: Khóa ngoại trong Thực thể yếu BẮT BUỘC NOT NULL`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.3.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Thực thể yếu: Khóa ngoại trỏ về thực thể mạnh BẮT BUỘC NOT NULL!

---

### Câu 43 [db-c2-t2-043]

Trong CSDL Quản lý bán hàng, để tìm các mặt hàng CHƯA TỪNG ĐƯỢC BÁN trong bất kỳ hóa đơn nào, biểu thức ĐSQH chuẩn mực là gì?

- **A.** π_(MaHG, TenHG) (Hanghoa) − π_(MaHG, TenHG) (Hanghoa * Chitiet_HD)  *(Đáp án đúng)*
- **B.** π_(MaHG, TenHG) (Hanghoa) ∩ π_(MaHG, TenHG) (Hanghoa * Chitiet_HD)
- **C.** π_(MaHG, TenHG) (Hanghoa) ∪ π_(MaHG, TenHG) (Hanghoa * Chitiet_HD)
- **D.** π_(MaHG, TenHG) (σ_(Soluong = 0) (Hanghoa * Chitiet_HD))

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Tìm các mặt hàng CHƯA TỪNG ĐƯỢC BÁN (phủ định) đòi hỏi dùng Phép Hiệu (−): Lấy tất cả mặt hàng trừ đi các mặt hàng đã có trong chi tiết hóa đơn (Chitiet_HD).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay tìm dòng có `Soluong = 0` (hàng chưa bán thì không hề có dòng trong Chitiet_HD).
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy Anti-Join bài toán kinh điển: Mặt hàng chưa từng bán = Tất cả − Đã bán`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục IV.2
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mặt hàng chưa từng bán = Hanghoa − (Hanghoa * Chitiet_HD)!

---

### Câu 44 [db-c2-t2-044]

Quy trình 7 bước chuyển đổi ERD sang quan hệ thuộc giai đoạn nào trong vòng đời thiết kế cơ sở dữ liệu?

- **A.** Giai đoạn Thiết kế dữ liệu vật lý (tạo tệp tin cấu hình và phân chia vùng đĩa cứng)
- **B.** Giai đoạn Thiết kế dữ liệu logic (chuyển đổi từ mô hình quan niệm sang mô hình quan hệ)  *(Đáp án đúng)*
- **C.** Giai đoạn Phân tích yêu cầu nghiệp vụ (thu thập biểu mẫu và phỏng vấn người dùng)
- **D.** Giai đoạn Bảo trì và vận hành hệ thống (sao lưu dữ liệu và kiểm tra tường lửa)

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** Giáo trình mục III.1 (Tổng quan): Chuyển đổi ERD sang các quan hệ là quá trình THIẾT KẾ DỮ LIỆU LOGIC: từ sơ đồ ERD (mức quan niệm/khái niệm) chuyển thành các quan hệ ở mức logic để cài đặt vào RDBMS.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm chuyển đổi ERD sang quan hệ là thiết kế vật lý hoặc mức quan niệm.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy giai đoạn thiết kế: Chuyển đổi ERD sang Relations = THIẾT KẾ LOGIC`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.1
  + 💡 *Mẹo phản xạ nhanh (`tip`):* ERD (Quan niệm) ➔ Quan hệ (LOGIC) ➔ Bảng đĩa cứng (VẬT LÝ)!

---

### Câu 45 [db-c2-t2-045]

Trong quan hệ 1:1 giữa PHONG_BAN và NHAN_VIEN (mối quan hệ "Trưởng phòng": Mỗi phòng có 1 trưởng phòng, mỗi nhân viên làm trưởng phòng tối đa 1 phòng). Phía nào là phía BẮT BUỘC và phía nào là TÙY CHỌN?

- **A.** Cả hai phía PHONG_BAN và NHAN_VIEN đều hoàn toàn bắt buộc trong mọi doanh nghiệp
- **B.** NHAN_VIEN là phía bắt buộc (vì nhân viên nào cũng làm trưởng phòng), PHONG_BAN là phía tùy chọn
- **C.** PHONG_BAN là phía bắt buộc (vì phòng nào cũng phải có trưởng phòng), NHAN_VIEN là phía tùy chọn  *(Đáp án đúng)*
- **D.** Cả hai phía PHONG_BAN và NHAN_VIEN đều hoàn toàn tùy chọn và không có quy tắc ràng buộc

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Mỗi phòng ban bắt buộc phải có 1 trưởng phòng ➔ PHONG_BAN là phía BẮT BUỘC. Không phải nhân viên nào cũng làm trưởng phòng (chỉ một số ít làm) ➔ NHAN_VIEN là phía TÙY CHỌN. Do đó khóa ngoại TruongPhong_ID sẽ được đặt trong bảng PHONG_BAN.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay xác định ngược phía bắt buộc và phía tùy chọn, dẫn đến đặt khóa ngoại sai bảng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy xác định phía Bắt buộc vs Tùy chọn trong quan hệ 1:1`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Phòng phải có trưởng phòng ➔ BẮT BUỘC; Nhân viên không nhất thiết làm sếp ➔ TÙY CHỌN!

---

### Câu 46 [db-c2-t2-046]

Cho CSDL Quản lý bán hàng: Yêu cầu "Tìm khách hàng mua TẤT CẢ các mặt hàng hiện có trong kho". Phép toán ĐSQH nào bắt buộc phải xuất hiện trong lời giải?

- **A.** Phép hợp (∪) của tất cả các hóa đơn bán buôn và hóa đơn bán lẻ của công ty
- **B.** Phép tích Descartes (×) nhân đôi bảng khách hàng với bảng chi tiết hóa đơn
- **C.** Phép kết nối ngoài bên trái (Left Outer Join) giữa bảng khách hàng và bảng hàng hóa
- **D.** Phép chia đại số quan hệ (÷) giữa bảng các mặt hàng đã mua với bảng tất cả mặt hàng  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Yêu cầu tìm khách hàng mua "TẤT CẢ các mặt hàng" là bài toán phổ quát ứng với lượng từ ∀. Bắt buộc phải sử dụng Phép Chia (÷): Chiếu các cặp (MaKH, MaHG) đã mua chia cho tập tất cả MaHG: `π_(MaKH, MaHG)(Hoadon * Chitiet_HD) ÷ π_(MaHG)(Hanghoa)`.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm sang phép kết nối Join hoặc Group By/Count.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy bài toán chia trong CSDL Bán hàng: Mua TẤT CẢ mặt hàng = Phép Chia (÷)`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục II.5.b & IV.2
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Mua TẤT CẢ mặt hàng ➔ Bắt buộc dùng PHÉP CHIA (÷)!

---

### Câu 47 [db-c2-t2-047]

Theo Bước 4, khi một Thực thể kết hợp CÓ danh hiệu riêng (ví dụ: SHIPMENT có mã `Shipment_No`), khóa chính của quan hệ kết hợp SHIPMENT sẽ là gì?

- **A.** Khóa chính là danh hiệu riêng Shipment_No của chính thực thể kết hợp đó  *(Đáp án đúng)*
- **B.** Bắt buộc phải là tổ hợp của hai khóa ngoại Customer_ID và Vendor_ID
- **C.** Khóa chính bắt buộc phải là ngày giao hàng kết hợp với số tiền vận chuyển
- **D.** Thực thể kết hợp không được phép có khóa chính mà chỉ có các khóa ngoại

- **Đáp án chính xác:** `A`
- **Giải thích học thuật:** Giáo trình mục III.3.b (Bước 4, phần 2): Khi thực thể kết hợp CÓ DANH HIỆU RIÊNG (Has its own identifier) ➔ Khóa chính là danh hiệu riêng của thực thể kết hợp đó (ví dụ: Shipment_No là PK; Customer_ID và Vendor_ID là các FK).
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh mặc định thực thể kết hợp lúc nào cũng phải có khóa chính là tổ hợp 2 khóa ngoại.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy phân nhánh Bước 4: Có danh hiệu riêng ➔ Khóa chính là danh hiệu riêng đó`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.3.b
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Có mã riêng (Shipment_No) ➔ Mã riêng đó làm KHÓA CHÍNH!

---

### Câu 48 [db-c2-t2-048]

Cho các nhận định về quy trình 7 bước chuyển đổi ERD:
(I) Thuộc tính đa trị tách thành quan hệ riêng có khóa ngoại.
(II) Quan hệ 1:N đặt khóa ngoại ở bảng phía Một.
(III) Quan hệ cha/con tạo quan hệ cho cả thực thể cha và thực thể con.
Tổ hợp ĐÚNG là:

- **A.** Cả ba nhận định (I), (II) và (III) đều hoàn toàn chính xác giáo trình
- **B.** Nhận định (I) và (III) hoàn toàn đúng, nhận định (II) hoàn toàn sai lệch  *(Đáp án đúng)*
- **C.** Chỉ có duy nhất nhận định (I) là đúng, nhận định (II) và (III) là sai sót
- **D.** Nhận định (II) và (III) hoàn toàn đúng, nhận định (I) hoàn toàn sai lệch

- **Đáp án chính xác:** `B`
- **Giải thích học thuật:** (II) sai vì quan hệ 1:N bắt buộc phải đặt khóa ngoại ở bảng phía NHIỀU (N), tuyệt đối không đặt ở phía Một. (I) và (III) hoàn toàn đúng.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh đọc lướt nhận định (II) thấy từ "khóa ngoại" là tưởng đúng.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy vị trí đặt khóa ngoại 1:N: Đặt ở phía 1 là SAI HOÀN TOÀN`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục III.4.a
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Khóa ngoại 1:N đặt ở phía NHIỀU; Đặt ở phía 1 là SAI!

---

### Câu 49 [db-c2-t2-049]

Trong CSDL Quản lý bán hàng: Khach(MaKH, Hoten, Diachi, Daily). Ý nghĩa quy ước của giá trị thuộc tính Daily là gì?

- **A.** Daily = 1 là khách hàng thân thiết VIP; Daily = 0 là khách hàng vãng lai
- **B.** Daily = 1 là khách hàng mua trả góp; Daily = 0 là khách thanh toán tiền mặt
- **C.** Daily = 1 là khách hàng mua dạng đại lý; Daily = 0 là khách mua bán lẻ  *(Đáp án đúng)*
- **D.** Daily = 1 là khách hàng nội thành; Daily = 0 là khách hàng ở ngoại tỉnh

- **Đáp án chính xác:** `C`
- **Giải thích học thuật:** Giáo trình mục IV.1 ghi chú rõ ràng về thuộc tính bảng Khách: Khach(MaKH, Hoten, Diachi, Daily) -- Daily = 1: khách là đại lý; Daily = 0: khách mua bán lẻ.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh hay nhầm với khách VIP hay khách trả góp.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy quy ước thuộc tính Daily: 1 = Đại lý, 0 = Bán lẻ`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục IV.1
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Daily: 1 = Đại lý; 0 = Bán lẻ!

---

### Câu 50 [db-c2-t2-050]

Tóm lược Chương II: Yếu tố nào sau đây là sự kết hợp chuẩn xác giữa mô hình toán học mức quan niệm với cỗ máy thực thi mức vật lý?

- **A.** Các tệp tin nhị phân không có cấu trúc được lưu trữ rải rác trên các ổ đĩa mềm
- **B.** Các bảng mạch tích hợp phần cứng và các đường truyền cáp quang tốc độ cao
- **C.** Các câu lệnh hợp ngữ Assembly can thiệp trực tiếp vào thanh ghi vi xử lý máy tính
- **D.** Lược đồ quan hệ (Relations) với các phép toán Đại số quan hệ và ràng buộc toàn vẹn  *(Đáp án đúng)*

- **Đáp án chính xác:** `D`
- **Giải thích học thuật:** Giáo trình mục V.1: Mô hình dữ liệu quan hệ kết hợp hoàn hảo giữa lý thuyết tập hợp toán học trừu tượng (LĐQH, ĐSQH, Ràng buộc toàn vẹn) với khả năng cài đặt tối ưu trên các hệ quản trị CSDL vật lý.
- **Phân tích bẫy tư duy (`trickDetails`):**
  + ⚠️ *Vì sao dễ mắc bẫy (`whyTrapped`):* Thí sinh bị phân tâm bởi các câu hỏi về phần cứng hoặc tệp tin cũ.
  + 🎯 *Từ khóa bẫy (`trickWord`):* `Bẫy triết lý tổng kết Chương II: Lược đồ quan hệ + ĐSQH + Ràng buộc toàn vẹn`
  + 📖 *Trích dẫn giáo trình (`citation`):* Giáo trình Hệ CSDL — Chương 2, Mục V.1
  + 💡 *Mẹo phản xạ nhanh (`tip`):* Chương II = Nền tảng toán học: Lược đồ quan hệ + Đại số quan hệ + Ràng buộc toàn vẹn!

---


