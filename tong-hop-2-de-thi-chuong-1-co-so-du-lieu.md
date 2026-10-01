# TỔNG HỢP 2 BỘ ĐỀ THI TRẮC NGHIỆM CHƯƠNG I: HỆ CƠ SỞ DỮ LIỆU
*(Tổng cộng 80 câu hỏi học thuật chuẩn mực — Cơ cấu: 30% Dễ - 40% Trung bình - 30% Khó / Bẫy)*

- **Môn học:** Hệ cơ sở dữ liệu (Database System)
- **Chương:** Chương I — Tổng quan và giới thiệu hệ cơ sở dữ liệu
- **Quy mô:** 2 Bộ đề độc lập (Đề 1 & Đề 2), mỗi đề đúng 40 câu hỏi (Tổng = 80 câu)
- **Tỷ lệ độ khó:** 12 Dễ (30%) — 16 Trung bình (40%) — 12 Khó (30%) cho từng đề
- **Quy chuẩn kỹ thuật:** Đáp ứng độ lệch chiều dài phương án $\Delta L = L_{\max} - L_{\min} \le 15$ ký tự trên toàn bộ 80 câu
- **Bẫy tư duy:** 100% câu hỏi Khó đều có trường `trickDetails` ({ `whyTrapped`, `trickWord`, `citation`, `tip` })
- **Phân bổ đáp án:** Cân bằng tuyệt đối 10 A, 10 B, 10 C, 10 D trên từng bộ đề

---

## BỘ ĐỀ THI SỐ 1 (MÃ ĐỀ: db-c1-d1)

*Bộ đề số 1 tập trung khảo sát toàn diện kiến thức nền tảng, đối sánh hệ thống tập tin với CSDL, kiến trúc 3 mức ANSI-SPARC và giải phẫu 5 mô hình dữ liệu kinh điển.*

---

### 📌 CHUYÊN ĐỀ 1: HỆ THỐNG XỬ LÝ TẬP TIN & NHU CẦU CSDL (Câu 1 - 8)

#### Câu 1 (db-c1-d1-001) — [🟢 DỄ (NHẬN BIẾT)]

**Phương pháp xử lý tập tin (File Processing System) được sử dụng rộng rãi trong giai đoạn lịch sử nào?**

- **A.** Giai đoạn những năm 60s đến 80s của thế kỷ XX
- **B.** Giai đoạn những năm 20s đến 40s của thế kỷ XX
- **C.** Giai đoạn những năm 90s đến 2010 của thế kỷ XX
- **D.** Giai đoạn từ sau năm 2015 cho đến thời điểm nay

> **Đáp án đúng:** **A** — *Giai đoạn những năm 60s đến 80s của thế kỷ XX*
>
> **Giải thích chi tiết:** Giáo trình ghi rõ: Phương pháp xử lý tập tin được sử dụng rộng rãi trong suốt những năm 60s - 80s của thế kỷ XX trước khi các hệ quản trị CSDL quan hệ trở nên phổ biến.

---

#### Câu 2 (db-c1-d1-002) — [🟢 DỄ (NHẬN BIẾT)]

**Ưu điểm nổi bật nhất của phương pháp xử lý tập tin truyền thống đối với các bài toán nhỏ là gì?**

- **A.** Cơ chế tự động kiểm soát truy cập tương tranh hoàn hảo
- **B.** Khả năng chia sẻ dữ liệu quy mô lớn cho hàng ngàn người
- **C.** Thời gian triển khai ngắn và chi phí đầu tư rất thấp
- **D.** Khả năng đảm bảo tính nguyên tố tuyệt đối của giao tác

> **Đáp án đúng:** **C** — *Thời gian triển khai ngắn và chi phí đầu tư rất thấp*
>
> **Giải thích chi tiết:** Hệ thống xử lý tập tin có ưu điểm là thời gian triển khai ngắn, ít tốn kém chi phí đầu tư về nhân sự và thiết bị, phù hợp với các ứng dụng nhỏ, độc lập.

---

#### Câu 3 (db-c1-d1-003) — [🟢 DỄ (NHẬN BIẾT)]

**Hiện tượng lặp đi lặp lại thông tin giống nhau ở nhiều tập tin khác nhau trong tổ chức được gọi là gì?**

- **A.** Hiện tượng dị thường trong truy cập tương tranh
- **B.** Hiện tượng dư thừa dữ liệu (Data Redundancy)
- **C.** Hiện tượng thiếu an toàn dữ liệu trên bộ nhớ
- **D.** Hiện tượng vi phạm tính nguyên tố của giao tác

> **Đáp án đúng:** **B** — *Hiện tượng dư thừa dữ liệu (Data Redundancy)*
>
> **Giải thích chi tiết:** Tính dư thừa dữ liệu (Data Redundancy) là sự lặp lại của thông tin được lưu trữ ở nhiều file khác nhau, gây lãng phí dung lượng và dẫn đến không nhất quán.

---

#### Câu 4 (db-c1-d1-004) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Tại sao sự dư thừa dữ liệu (Data Redundancy) lại là nguyên nhân gốc rễ gây ra sự không nhất quán dữ liệu?**

- **A.** Vì kích thước file vượt quá giới hạn lưu trữ của thiết bị
- **B.** Vì phần cứng đĩa từ luôn tự động xóa ngẫu nhiên các file
- **C.** Vì hệ điều hành từ chối cho phép nhiều người cùng đọc file
- **D.** Vì khi cập nhật một file thì các file khác bị bỏ quên

> **Đáp án đúng:** **D** — *Vì khi cập nhật một file thì các file khác bị bỏ quên*
>
> **Giải thích chi tiết:** Khi thông tin bị nhân bản ở nhiều file, nếu có sự thay đổi nhưng chỉ cập nhật ở một file mà không đồng bộ các file còn lại, hệ thống sẽ rơi vào trạng thái không nhất quán.

---

#### Câu 5 (db-c1-d1-005) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Tính chất "hoặc thực hiện trọn vẹn, hoặc không thực hiện gì cả" (All-or-Nothing) của giao tác gọi là gì?**

- **A.** Tính độc lập vật lý của dữ liệu lưu trên đĩa
- **B.** Tính nguyên tố của giao tác (Atomicity Property)
- **C.** Tính phân cấp dạng cây của các nút trong hệ thống
- **D.** Tính toàn vẹn thực thể của các bảng trong CSDL

> **Đáp án đúng:** **B** — *Tính nguyên tố của giao tác (Atomicity Property)*
>
> **Giải thích chi tiết:** Tính nguyên tố (Atomicity) bảo đảm một giao dịch hoặc phải hoàn thành 100% các bước, hoặc nếu gặp sự cố thì hủy bỏ toàn bộ, không để lại trạng thái dở dang.

---

#### Câu 6 (db-c1-d1-006) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong hệ thống xử lý tập tin truyền thống, các ràng buộc toàn vẹn dữ liệu thường được lưu trữ ở đâu?**

- **A.** Được nhúng trực tiếp vào mã nguồn từng chương trình
- **B.** Được lưu tập trung trong từ điển dữ liệu của HQTCSDL
- **C.** Được ghi trực tiếp lên bảng phân vùng MBR của ổ đĩa
- **D.** Được quản lý tự động bởi hệ điều hành máy chủ vật lý

> **Đáp án đúng:** **A** — *Được nhúng trực tiếp vào mã nguồn từng chương trình*
>
> **Giải thích chi tiết:** Ở hệ thống tập tin, các ràng buộc toàn vẹn bị nhúng trực tiếp vào code của từng ứng dụng, khiến việc thay đổi hoặc bổ sung ràng buộc mới trở nên vô cùng khó khăn.

---

#### Câu 7 (db-c1-d1-007) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Hai nhân viên cùng mở một file dữ liệu để sửa số dư tài khoản nhưng không có cơ chế khóa. Kết quả là gì?**

- **A.** Hệ thống tự động sao lưu dữ liệu sang một máy chủ đám mây
- **B.** Hệ điều hành lập tức khóa vĩnh viễn tài khoản của cả hai
- **C.** Tập tin tự động chuyển đổi sang mô hình dữ liệu quan hệ
- **D.** Dị thường truy cập tương tranh làm mất dữ liệu cập nhật

> **Đáp án đúng:** **D** — *Dị thường truy cập tương tranh làm mất dữ liệu cập nhật*
>
> **Giải thích chi tiết:** Khi nhiều người cùng cập nhật đồng thời mà thiếu cơ chế kiểm soát truy cập tương tranh (concurrency control), thao tác ghi của người này sẽ đè bẹp thao tác của người kia, gây mất mát dữ liệu.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ hệ điều hành sẽ tự khóa tài khoản hoặc có cơ chế tự động sao lưu thông minh.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy dị thường truy cập tương tranh (Concurrent Access Anomalies) trong hệ thống tập tin`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục I.1.b*
> - 💡 **Mẹo hóa giải:** Hệ thống file KHÔNG CÓ cơ chế kiểm soát tương tranh mức bản ghi ➔ Dẫn đến dị thường ghi đè mất dữ liệu (Lost Update).

---

#### Câu 8 (db-c1-d1-008) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Phát biểu nào sau đây phản ánh ĐÚNG NHẤT về nguyên nhân máy tính bắt buộc phải chuyển sang cách tiếp cận CSDL?**

- **A.** Do giá thành ổ đĩa cứng tăng cao đột biến trong thế kỷ
- **B.** Do các công ty phần mềm ngừng sản xuất hệ điều hành file
- **C.** Do hệ thống tập tin không giải quyết được 6 hạn chế lớn
- **D.** Do người dùng không còn nhu cầu bảo mật thông tin nội bộ

> **Đáp án đúng:** **C** — *Do hệ thống tập tin không giải quyết được 6 hạn chế lớn*
>
> **Giải thích chi tiết:** Để giải quyết triệt để 6 hạn chế chí mạng của hệ thống tập tin (dư thừa, không nhất quán, nguyên tố, toàn vẹn, tương tranh, an toàn), khoa học máy tính bắt buộc phải chuyển sang tiếp cận CSDL.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm lẫn nguyên nhân là do yếu tố giá thành phần cứng hoặc ngừng hỗ trợ hệ điều hành.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy động lực chuyển dịch phương pháp luận từ File System sang Database Approach`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục I.1.c*
> - 💡 **Mẹo hóa giải:** Động lực cốt lõi = Giải quyết triệt để 6 nhược điểm cố hữu của phương pháp xử lý tập tin.

---

### 📌 CHUYÊN ĐỀ 2: CƠ SỞ DỮ LIỆU & HỆ QUẢN TRỊ CSDL (DBMS) (Câu 9 - 18)

#### Câu 9 (db-c1-d1-009) — [🟢 DỄ (NHẬN BIẾT)]

**Theo giáo trình chuẩn, định nghĩa nào sau đây phản ánh CHÍNH XÁC bản chất của Cơ sở dữ liệu (Database)?**

- **A.** Là tập hợp có cấu trúc của thông tin lưu trên bộ nhớ ngoài
- **B.** Là thiết bị phần cứng dùng để sao lưu dữ liệu khi mất điện
- **C.** Là phần mềm chuyên dụng dùng để lập trình giao diện web
- **D.** Là danh sách các câu lệnh truy vấn viết bằng ngôn ngữ C++

> **Đáp án đúng:** **A** — *Là tập hợp có cấu trúc của thông tin lưu trên bộ nhớ ngoài*
>
> **Giải thích chi tiết:** CSDL là tập hợp có cấu trúc của thông tin, được lưu trữ trên các thiết bị trừ tin (bộ nhớ ngoài) nhằm thỏa mãn yêu cầu khai thác đồng thời cho nhiều người dùng/chương trình.

---

#### Câu 10 (db-c1-d1-010) — [🟢 DỄ (NHẬN BIẾT)]

**Khẳng định nào dưới đây là CHUẨN XÁC NHẤT về mối quan hệ giữa Cơ sở dữ liệu và Hệ quản trị CSDL?**

- **A.** CSDL và HQTCSDL là hai phần mềm chạy hoàn toàn độc lập
- **B.** HQTCSDL là phần mềm quản lý, CSDL là một thành phần bên trong
- **C.** CSDL là phần mềm lớn, còn HQTCSDL là tệp dữ liệu con bên trong
- **D.** HQTCSDL là thiết bị phần cứng, CSDL là hệ điều hành máy chủ

> **Đáp án đúng:** **B** — *HQTCSDL là phần mềm quản lý, CSDL là một thành phần bên trong*
>
> **Giải thích chi tiết:** Hệ quản trị CSDL là PHẦN MỀM dùng để tạo lập, quản lý và xử lý dữ liệu. CSDL là MỘT THÀNH PHẦN bên trong HQTCSDL.

---

#### Câu 11 (db-c1-d1-011) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Hai khả năng cơ bản BẮT BUỘC phải có của một Hệ quản trị CSDL chuẩn theo giáo trình là gì?**

- **A.** Cung cấp môi trường soạn thảo văn bản và bảng tính điện tử
- **B.** Tự động sửa chữa phần cứng và thay thế ổ đĩa khi hỏng hóc
- **C.** Quản lý dữ liệu mức tệp và truy cập khối lượng dữ liệu lớn
- **D.** Thiết kế đồ họa giao diện người dùng và biên dịch mã nguồn

> **Đáp án đúng:** **C** — *Quản lý dữ liệu mức tệp và truy cập khối lượng dữ liệu lớn*
>
> **Giải thích chi tiết:** HQTCSDL bắt buộc phải có 2 khả năng cơ bản: (1) Quản lý dữ liệu ở mức xử lý tệp như một hệ điều hành; (2) Truy cập khối lượng dữ liệu lớn có hiệu quả cao.

---

#### Câu 12 (db-c1-d1-012) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Nhóm đối tượng nào sử dụng CSDL thông qua các giao diện trực quan, biểu mẫu và báo cáo có sẵn?**

- **A.** Các chuyên viên tin học chuyên viết hệ điều hành nhúng
- **B.** Người quản trị CSDL chịu trách nhiệm cấp quyền bảo mật
- **C.** Các nhà khoa học chuyên nghiên cứu cấu trúc vi mạch bán dẫn
- **D.** Người dùng không chuyên về tin học (End-Users / Naive)

> **Đáp án đúng:** **D** — *Người dùng không chuyên về tin học (End-Users / Naive)*
>
> **Giải thích chi tiết:** Người dùng không chuyên (End-Users / Naive Users) khai thác CSDL thông qua các ứng dụng có giao diện trực quan (GUI, biểu mẫu, menu) được lập trình sẵn.

---

#### Câu 13 (db-c1-d1-013) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Ai là người chịu trách nhiệm chính trong việc tổ chức CSDL và cấp phát quyền hạn khai thác cho người dùng?**

- **A.** Chuyên viên kiểm thử phần mềm ứng dụng di động trong nhóm
- **B.** Người quản trị CSDL (Database Administrator - viết tắt DBA)
- **C.** Nhân viên tiếp thị sản phẩm phần mềm của công ty công nghệ
- **D.** Khách hàng mua hàng trực tuyến trên website thương mại điện tử

> **Đáp án đúng:** **B** — *Người quản trị CSDL (Database Administrator - viết tắt DBA)*
>
> **Giải thích chi tiết:** DBA (Database Administrator) là chuyên gia am hiểu sâu sắc, chịu trách nhiệm tổ chức CSDL (thiết kế cấu trúc, ràng buộc, bảo mật) và cấp phát quyền hạn cho mọi người dùng.

---

#### Câu 14 (db-c1-d1-014) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Tập hợp các phần mềm nào dưới đây ĐỀU là các Hệ quản trị Cơ sở dữ liệu (DBMS) theo giáo trình?**

- **A.** Oracle, Paradox, MS Access, SQL Server, MySQL, PostgreSQL
- **B.** Windows 11, Ubuntu Linux, macOS Sonoma, Red Hat Enterprise
- **C.** Microsoft Word, Excel, PowerPoint, Outlook, OneNote, Teams
- **D.** Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge

> **Đáp án đúng:** **A** — *Oracle, Paradox, MS Access, SQL Server, MySQL, PostgreSQL*
>
> **Giải thích chi tiết:** Giáo trình liệt kê các HQTCSDL thường gặp: Oracle, Paradox, MS Access, Sybase, Foxpro, SQL Server, MySQL, PostgreSQL.

---

#### Câu 15 (db-c1-d1-015) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Bên cạnh các ưu điểm vượt trội, việc sử dụng CSDL tập trung đặt ra 3 thách thức lớn nào cần giải quyết?**

- **A.** Chi phí mua giấy in, tiền điện chiếu sáng và bảo trì điều hòa
- **B.** Tốc độ gõ phím của lập trình viên và độ phân giải màn hình
- **C.** Trách nhiệm dữ liệu, cơ chế bảo mật phân quyền và tranh chấp
- **D.** Khả năng tương thích với các máy in kim đời cũ của văn phòng

> **Đáp án đúng:** **C** — *Trách nhiệm dữ liệu, cơ chế bảo mật phân quyền và tranh chấp*
>
> **Giải thích chi tiết:** 3 thách thức khi dùng CSDL: (1) Xác định trách nhiệm với tính an toàn và chính xác của dữ liệu; (2) Cơ chế bảo mật và phân quyền chi tiết; (3) Giải quyết tranh chấp truy cập đồng thời.

---

#### Câu 16 (db-c1-d1-016) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tại sao việc giảm thiểu sự trùng lặp thông tin trong CSDL lại giúp bảo đảm tính toàn vẹn (Integrity)?**

- **A.** Vì người quản trị không cần phải cấp mật khẩu cho người sử dụng
- **B.** Vì CSDL sẽ tự động nhân bản dữ liệu sang hàng chục máy chủ khác
- **C.** Vì dung lượng đĩa cứng sẽ luôn trống 100% để lưu trữ dữ liệu mới
- **D.** Vì khi dữ liệu chỉ lưu một nơi thì các quy tắc kiểm tra sẽ nhất quán

> **Đáp án đúng:** **D** — *Vì khi dữ liệu chỉ lưu một nơi thì các quy tắc kiểm tra sẽ nhất quán*
>
> **Giải thích chi tiết:** Khi dữ liệu không bị trùng lặp, các quy tắc ràng buộc toàn vẹn được kiểm tra và thực thi tập trung tại một nguồn duy nhất, ngăn chặn tình trạng dữ liệu mâu thuẫn hay sai lệch.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn phương án nhân bản đa máy chủ hoặc nhầm lẫn giữa tính toàn vẹn và dung lượng trống.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy mối quan hệ bản chất giữa Giảm trùng lặp và Tính toàn vẹn dữ liệu trong CSDL`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục II.1.b*
> - 💡 **Mẹo hóa giải:** Giảm trùng lặp ➔ Dữ liệu duy nhất ➔ Đảm bảo Nhất quán (Consistency) & Toàn vẹn (Integrity).

---

#### Câu 17 (db-c1-d1-017) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Một công ty dùng Excel để lưu danh bạ khách hàng. Theo quan điểm học thuật chuẩn, phát biểu nào sau đây là ĐÚNG?**

- **A.** Tập hợp dữ liệu danh bạ là CSDL, phần mềm Excel là HQTCSDL
- **B.** File Excel là phần cứng, còn thông tin danh bạ là hệ điều hành
- **C.** Excel không thể coi là phần mềm vì thiếu tính năng lập trình mạng
- **D.** Danh bạ khách hàng là HQTCSDL, còn phần mềm Excel là CSDL con

> **Đáp án đúng:** **A** — *Tập hợp dữ liệu danh bạ là CSDL, phần mềm Excel là HQTCSDL*
>
> **Giải thích chi tiết:** Giáo trình nêu ví dụ thực tiễn: Tập hợp dữ liệu danh bạ khách hàng có quan hệ ngữ nghĩa chính là CSDL, còn phần mềm Excel/Access dùng để lưu trữ và xử lý chính là HQTCSDL.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ Excel chỉ là bảng tính thông thường, không thể đóng vai trò HQTCSDL trong ví dụ minh họa.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy phân biệt giữa dữ liệu (CSDL) và công cụ quản lý (HQTCSDL) qua ví dụ thực tế`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục II.4.a*
> - 💡 **Mẹo hóa giải:** Dữ liệu lưu trữ = CSDL; Phần mềm thao tác/tạo lập (Excel/Access/Oracle) = HQTCSDL.

---

#### Câu 18 (db-c1-d1-018) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Nếu một hệ thống cho phép người dùng viết truy vấn bằng ngôn ngữ phi thủ tục (Non-procedural), điều đó có nghĩa là gì?**

- **A.** Người dùng phải mô tả chi tiết từng bước thuật toán duyệt file
- **B.** Người dùng chỉ cần chỉ rõ dữ liệu cần lấy là gì, không cần nêu cách lấy
- **C.** Hệ thống bắt buộc người dùng phải tự cấp phát bộ nhớ RAM trên máy
- **D.** Người dùng không được phép truy vấn dữ liệu quá hai lần mỗi ngày

> **Đáp án đúng:** **B** — *Người dùng chỉ cần chỉ rõ dữ liệu cần lấy là gì, không cần nêu cách lấy*
>
> **Giải thích chi tiết:** Ngôn ngữ phi thủ tục (như SQL) cho phép người dùng chỉ định kết quả mong muốn ("lấy cái gì") mà không cần phải lập trình chỉ rõ giải thuật hay con đường truy xuất vật lý ("lấy như thế nào").
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm ngôn ngữ phi thủ tục với việc bắt buộc phải viết mã giải thuật từng bước như C/Java.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy khái niệm ngôn ngữ phi thủ tục (Non-procedural Language) trong HQTCSDL`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục II.4.b*
> - 💡 **Mẹo hóa giải:** Ngôn ngữ phi thủ tục (SQL) = Nêu "What" (Cần cái gì), HQTCSDL tự lo "How" (Lấy ra sao).

---

### 📌 CHUYÊN ĐỀ 3: KIẾN TRÚC 3 MỨC ANSI-SPARC & TÍNH ĐỘC LẬP DỮ LIỆU (Câu 19 - 26)

#### Câu 19 (db-c1-d1-019) — [🟢 DỄ (NHẬN BIẾT)]

**Kiến trúc chuẩn của một hệ cơ sở dữ liệu theo mô hình ANSI-SPARC được chia thành mấy mức biểu diễn?**

- **A.** Được chia thành 2 mức biểu diễn gồm mức phần mềm và phần cứng
- **B.** Được chia thành 5 mức biểu diễn tương ứng 5 tầng giao thức mạng
- **C.** Được chia thành 4 mức biểu diễn tương ứng 4 mô hình dữ liệu chính
- **D.** Được chia thành 3 mức biểu diễn: Mức vật lý, khái niệm và khung nhìn

> **Đáp án đúng:** **D** — *Được chia thành 3 mức biểu diễn: Mức vật lý, khái niệm và khung nhìn*
>
> **Giải thích chi tiết:** Kiến trúc chuẩn ANSI-SPARC phân chia hệ CSDL thành 3 mức trừu tượng: Mức vật lý (Internal), Mức khái niệm (Conceptual) và Mức khung nhìn (External/View).

---

#### Câu 20 (db-c1-d1-020) — [🟢 DỄ (NHẬN BIẾT)]

**Mức biểu diễn nào trong kiến trúc 3 mức thể hiện cách dữ liệu được lưu trữ thực tế trên các thiết bị đĩa từ?**

- **A.** Mức khung nhìn của từng người dùng trong hệ thống (View Level)
- **B.** Mức khái niệm mô tả thế giới thực của toàn bộ CSDL (Conceptual)
- **C.** Mức vật lý của hệ thống lưu trữ trên thiết bị đĩa (Physical Level)
- **D.** Mức logic hướng đối tượng diễn tả mối liên kết giữa các lớp

> **Đáp án đúng:** **C** — *Mức vật lý của hệ thống lưu trữ trên thiết bị đĩa (Physical Level)*
>
> **Giải thích chi tiết:** Mức vật lý (Physical/Internal Level) mô tả cấu trúc lưu trữ dữ liệu thực tế trên các thiết bị đĩa từ (các tệp dữ liệu, tệp chỉ dẫn, cách tổ chức bản ghi vật lý).

---

#### Câu 21 (db-c1-d1-021) — [🟢 DỄ (NHẬN BIẾT)]

**Mức khái niệm (Conceptual Schema) trong kiến trúc 3 mức đóng vai trò cốt lõi nào dưới đây?**

- **A.** Là tập hợp các rãnh từ và sector vật lý trên bề mặt đĩa cứng
- **B.** Là sự trừu tượng hóa thế giới thực gần gũi với người dùng CSDL
- **C.** Là giao diện đồ họa riêng lẻ dành riêng cho từng cá nhân sử dụng
- **D.** Là mã nhị phân 0 và 1 được nạp trực tiếp vào thanh ghi của CPU

> **Đáp án đúng:** **B** — *Là sự trừu tượng hóa thế giới thực gần gũi với người dùng CSDL*
>
> **Giải thích chi tiết:** Mức khái niệm là sự trừu tượng hóa thế giới thực gần với người dùng, mô tả toàn bộ cấu trúc logic, thực thể và mối quan hệ của CSDL. Mức vật lý là cài đặt cụ thể của mức khái niệm.

---

#### Câu 22 (db-c1-d1-022) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Mỗi khung nhìn (View) ở mức ngoài trong kiến trúc 3 mức ANSI-SPARC được định nghĩa là gì?**

- **A.** Là một phần hoặc sự trừu tượng hóa một phần của mức khái niệm
- **B.** Là bản sao chụp toàn bộ ổ cứng vật lý của máy chủ trung tâm
- **C.** Là một vi mạch điện tử chuyên dụng gắn trên bo mạch chủ máy chủ
- **D.** Là một giao thức mã hóa đường truyền mạng cục bộ không dây LAN

> **Đáp án đúng:** **A** — *Là một phần hoặc sự trừu tượng hóa một phần của mức khái niệm*
>
> **Giải thích chi tiết:** Mỗi khung nhìn (View) là cách nhìn, quan điểm của từng người sử dụng đối với CSDL, thể hiện một phần hoặc sự trừu tượng hóa một phần của CSDL mức khái niệm.

---

#### Câu 23 (db-c1-d1-023) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khái niệm "Tính độc lập dữ liệu vật lý" (Physical Data Independence) được hiểu chính xác là gì?**

- **A.** Khả năng thay đổi sơ đồ khái niệm mà không ảnh hưởng tới khung nhìn
- **B.** Khả năng ngắt hoàn toàn kết nối vật lý với Internet khi máy chủ chạy
- **C.** Khả năng thay đổi cấu trúc vật lý mà không làm đổi sơ đồ khái niệm
- **D.** Khả năng di chuyển máy chủ vật lý từ phòng này sang phòng khác an toàn

> **Đáp án đúng:** **C** — *Khả năng thay đổi cấu trúc vật lý mà không làm đổi sơ đồ khái niệm*
>
> **Giải thích chi tiết:** Độc lập dữ liệu vật lý là khả năng thay đổi cấu trúc lưu trữ vật lý (ví dụ chuyển từ HDD sang SSD, thay đổi chỉ mục) mà không phải viết lại sơ đồ khái niệm hay ứng dụng.

---

#### Câu 24 (db-c1-d1-024) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khái niệm "Tính độc lập dữ liệu logic" (Logical Data Independence) mang lại lợi ích gì cho hệ thống?**

- **A.** Tự động tăng dung lượng bộ nhớ RAM máy chủ lên gấp hai lần
- **B.** Bắt buộc người dùng phải học lại cú pháp truy vấn SQL từ đầu
- **C.** Ngăn chặn hoàn toàn mọi người dùng không được truy xuất CSDL
- **D.** Cho phép thay đổi sơ đồ khái niệm mà không làm đổi các khung nhìn

> **Đáp án đúng:** **D** — *Cho phép thay đổi sơ đồ khái niệm mà không làm đổi các khung nhìn*
>
> **Giải thích chi tiết:** Độc lập dữ liệu logic là khả năng sửa đổi sơ đồ khái niệm (như thêm bảng mới, thêm thuộc tính) mà không làm ảnh hưởng đến các khung nhìn và ứng dụng đang sử dụng.

---

#### Câu 25 (db-c1-d1-025) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: DBA quyết định tạo thêm chỉ mục B-Tree và sắp xếp lại tệp trên đĩa cứng để tăng tốc độ. Mức nào bị ảnh hưởng?**

- **A.** Mức vật lý thay đổi, mức khái niệm và mức ngoài giữ nguyên vẹn
- **B.** Mức khung nhìn của người dùng bị thay đổi giao diện biểu mẫu
- **C.** Tất cả các chương trình ứng dụng của lập trình viên bị lỗi runtime
- **D.** Mức khái niệm bị xóa bỏ hoàn toàn và phải thiết kế lại từ đầu

> **Đáp án đúng:** **A** — *Mức vật lý thay đổi, mức khái niệm và mức ngoài giữ nguyên vẹn*
>
> **Giải thích chi tiết:** Việc tạo chỉ mục hay tổ chức lại tệp trên đĩa chỉ thuộc về mức vật lý. Nhờ tính độc lập dữ liệu vật lý, mức khái niệm và các khung nhìn mức ngoài hoàn toàn không bị ảnh hưởng.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay lo sợ khi tối ưu ổ đĩa thì chương trình ứng dụng hoặc giao diện người dùng sẽ bị phá vỡ.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy tính độc lập dữ liệu vật lý (Physical Data Independence) trong kiến trúc 3 mức`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục II.3*
> - 💡 **Mẹo hóa giải:** Chỉnh sửa lưu trữ, chỉ mục, cấu trúc tệp = Thay đổi Mức vật lý ➔ Mức khái niệm & Khung nhìn KHÔNG ĐỔI.

---

#### Câu 26 (db-c1-d1-026) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Phòng Đào tạo chỉ được xem điểm tổng kết, không được xem điểm thành phần chi tiết của sinh viên. Đây là ví dụ về mức nào?**

- **A.** Mức lưu trữ vật lý các byte nhị phân trên đĩa cứng máy chủ
- **B.** Mức biểu diễn bảng mã ký tự ASCII của ngôn ngữ lập trình C
- **C.** Mức khung nhìn (View Level) phân quyền hiển thị theo góc nhìn
- **D.** Mức kết nối dây cáp mạng quang nối giữa các giảng đường học

> **Đáp án đúng:** **C** — *Mức khung nhìn (View Level) phân quyền hiển thị theo góc nhìn*
>
> **Giải thích chi tiết:** Việc lọc và chỉ hiển thị một tập con dữ liệu phù hợp với nhu cầu và quyền hạn của một nhóm người dùng (Phòng Đào tạo) chính là bản chất của Mức khung nhìn (View Level / External Level).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm với mức khái niệm toàn thể vì nghĩ đây là quy tắc nghiệp vụ chung của trường đại học.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy phân định mức khung nhìn (View Level) dựa trên ngữ cảnh phân quyền người dùng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục II.3.a*
> - 💡 **Mẹo hóa giải:** Góc nhìn riêng của một nhóm người dùng (chỉ thấy phần dữ liệu được phép) = Mức khung nhìn (View).

---

### 📌 CHUYÊN ĐỀ 4: CÁC MÔ HÌNH DỮ LIỆU (DATA MODELS) (Câu 27 - 40)

#### Câu 27 (db-c1-d1-027) — [🟢 DỄ (NHẬN BIẾT)]

**Một mô hình dữ liệu (Data Model) hoàn chỉnh theo giáo trình bắt buộc phải bao gồm 3 thành phần cốt lõi nào?**

- **A.** Bàn phím gõ, Chuột máy tính điều khiển và Màn hình hiển thị màu
- **B.** Mô tả cấu trúc, Mô tả các thao tác và Mô tả ràng buộc toàn vẹn
- **C.** Dây nguồn điện lưới, Ổ cắm ba chấu và Bộ lưu điện dự phòng UPS
- **D.** Hệ điều hành máy chủ, Trình duyệt web và Phần mềm phòng chống virus

> **Đáp án đúng:** **B** — *Mô tả cấu trúc, Mô tả các thao tác và Mô tả ràng buộc toàn vẹn*
>
> **Giải thích chi tiết:** Mô hình dữ liệu gồm 3 thành phần: (1) Mô tả cấu trúc dữ liệu; (2) Mô tả các thao tác trên dữ liệu (Thêm, Xóa, Sửa, Truy vấn); (3) Mô tả các ràng buộc toàn vẹn.

---

#### Câu 28 (db-c1-d1-028) — [🟢 DỄ (NHẬN BIẾT)]

**Nhóm mô hình dữ liệu nào dưới đây thuộc nhóm "Mô hình logic trên cơ sở bản ghi" (Record-based)?**

- **A.** Mô hình ER, Mô hình hướng đối tượng và Mô hình dữ liệu ngữ nghĩa
- **B.** Mô hình đám mây công cộng, Mô hình đám mây riêng và Mô hình lai
- **C.** Mô hình bộ nhớ khung, Mô hình hợp nhất và Mô hình đĩa từ quang học
- **D.** Mô hình quan hệ, Mô hình mạng và Mô hình phân cấp dạng cấu trúc cây

> **Đáp án đúng:** **D** — *Mô hình quan hệ, Mô hình mạng và Mô hình phân cấp dạng cấu trúc cây*
>
> **Giải thích chi tiết:** Mô hình logic trên cơ sở bản ghi (Record-based) gồm 3 mô hình kinh điển: Mô hình quan hệ (Relational), Mô hình mạng (Network) và Mô hình phân cấp (Hierarchical).

---

#### Câu 29 (db-c1-d1-029) — [🟢 DỄ (NHẬN BIẾT)]

**Trong mô hình mạng (Network Model), loại liên hệ (set type) giữa mẫu tin chủ và mẫu tin thành viên được ký hiệu bằng hình gì?**

- **A.** Được ký hiệu bằng hình chữ nhật có đường viền nét đôi rất đậm
- **B.** Được ký hiệu bằng hình thoi có bốn góc nhọn cân xứng với nhau
- **C.** Được ký hiệu bằng hình bầu dục với mũi tên đi từ chủ sang thành viên
- **D.** Được ký hiệu bằng hình tam giác đều hướng đỉnh thẳng lên phía trên

> **Đáp án đúng:** **C** — *Được ký hiệu bằng hình bầu dục với mũi tên đi từ chủ sang thành viên*
>
> **Giải thích chi tiết:** Trong mô hình mạng, loại liên hệ (set type) ký hiệu bằng hình bầu dục, có các mũi tên đi từ loại mẫu tin chủ sang loại mẫu tin thành viên.

---

#### Câu 30 (db-c1-d1-030) — [🟢 DỄ (NHẬN BIẾT)]

**Mô hình phân cấp (Hierarchical Model) tổ chức dữ liệu theo cấu trúc hình học toán học nào dưới đây?**

- **A.** Cấu trúc cây (Tree) gồm nút gốc, các nút cha và các nút con
- **B.** Cấu trúc đồ thị vô hướng có chu trình khép kín giữa các đỉnh
- **C.** Cấu trúc ma trận hai chiều gồm các số phức liên hợp với nhau
- **D.** Cấu trúc vòng tròn đồng tâm liên kết qua các vector tiếp tuyến

> **Đáp án đúng:** **A** — *Cấu trúc cây (Tree) gồm nút gốc, các nút cha và các nút con*
>
> **Giải thích chi tiết:** Mô hình phân cấp là một cấu trúc cây (tree), trong đó các nút biểu diễn tập các thực thể, giữa nút cha và nút con liên kết theo mối quan hệ 1-nhiều.

---

#### Câu 31 (db-c1-d1-031) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong mô hình thực thể kết hợp (ER Model), thực thể yếu (Weak Entity) được ký hiệu quy ước bằng hình gì?**

- **A.** Hình chữ nhật có đường viền kẻ đơn thanh mảnh nằm ngang
- **B.** Hình chữ nhật có đường viền kẻ đôi thể hiện sự phụ thuộc tồn tại
- **C.** Hình thoi có đường viền kẻ đứt khúc cách đều nhau liên tục
- **D.** Hình tròn đồng tâm có mũi tên chỉ hướng sang thực thể khác

> **Đáp án đúng:** **B** — *Hình chữ nhật có đường viền kẻ đôi thể hiện sự phụ thuộc tồn tại*
>
> **Giải thích chi tiết:** Trong mô hình ER: Thực thể mạnh ký hiệu bằng hình chữ nhật viền đơn; Thực thể yếu (phụ thuộc sự tồn tại vào thực thể khác) ký hiệu bằng hình chữ nhật viền đôi.

---

#### Câu 32 (db-c1-d1-032) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khái niệm "Số ngôi của mối kết hợp" (Degree of Relationship) trong mô hình ER được định nghĩa là gì?**

- **A.** Số lượng bản ghi tối đa được phép lưu trữ trong bảng cơ sở dữ liệu
- **B.** Số lượng thuộc tính khóa có trong loại thực thể mạnh tham gia
- **C.** Số lần người dùng thực hiện truy vấn dữ liệu thành công trong ngày
- **D.** Tổng số loại thực thể tham gia vào mối kết hợp đó trong mô hình

> **Đáp án đúng:** **D** — *Tổng số loại thực thể tham gia vào mối kết hợp đó trong mô hình*
>
> **Giải thích chi tiết:** Số ngôi của mối kết hợp (Degree) là tổng số loại thực thể cùng tham gia vào mối kết hợp đó (ví dụ: mối kết hợp 2 ngôi nhị phân, 3 ngôi tam phân).

---

#### Câu 33 (db-c1-d1-033) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Mô hình quan hệ (Relational Data Model) được xây dựng dựa trên nền tảng lý thuyết toán học nào?**

- **A.** Lý thuyết tập hợp của các quan hệ, tức là các tập k-bộ cố định
- **B.** Lý thuyết hình học phi Euclid và ma trận vi phân đạo hàm cấp hai
- **C.** Lý thuyết xác suất thống kê Bayes trong không gian nhiều chiều
- **D.** Lý thuyết mật mã đường cong elliptic bảo vệ khóa công khai

> **Đáp án đúng:** **A** — *Lý thuyết tập hợp của các quan hệ, tức là các tập k-bộ cố định*
>
> **Giải thích chi tiết:** Mô hình quan hệ dựa trên cơ sở khái niệm lý thuyết tập hợp của các quan hệ, tức là các tập k-bộ (k-tuple) với k cố định, biểu diễn dữ liệu dưới dạng bảng 2 chiều.

---

#### Câu 34 (db-c1-d1-034) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Đặc trưng cơ bản nào của mô hình hướng đối tượng (OODM) cho phép đóng gói cả dữ liệu và các hành vi xử lý?**

- **A.** Tính đa hình (Polymorphism) cho phép linh hoạt gọi hàm theo ngữ cảnh
- **B.** Tính đóng gói (Encapsulation) tích hợp thuộc tính và phương thức
- **C.** Tính kế thừa bội (Multiple Inheritance) từ nhiều lớp cha khác nhau
- **D.** Tính tái sử dụng mã nguồn thông qua việc kế thừa cấu trúc lớp

> **Đáp án đúng:** **B** — *Tính đóng gói (Encapsulation) tích hợp thuộc tính và phương thức*
>
> **Giải thích chi tiết:** Tính đóng gói (Encapsulation) trong hướng đối tượng cho phép gom nhóm cả thuộc tính (dữ liệu) và phương thức (hành vi/thao tác) vào trong một lớp đối tượng thống nhất.

---

#### Câu 35 (db-c1-d1-035) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Hai mô hình nào sau đây thuộc nhóm "Mô hình dữ liệu vật lý" (Physical Data Model) theo giáo trình?**

- **A.** Mô hình thực thể kết hợp (ER) và mô hình hướng đối tượng (OODM)
- **B.** Mô hình phân cấp dạng cây và mô hình mạng dạng đồ thị có hướng
- **C.** Mô hình hợp nhất và mô hình bộ nhớ khung mô tả mức lưu trữ thấp
- **D.** Mô hình quan hệ bảng k-bộ và mô hình dữ liệu ngữ nghĩa logic

> **Đáp án đúng:** **C** — *Mô hình hợp nhất và mô hình bộ nhớ khung mô tả mức lưu trữ thấp*
>
> **Giải thích chi tiết:** Giáo trình khẳng định rõ: Hai mô hình dữ liệu vật lý thường dùng là mô hình hợp nhất và mô hình bộ nhớ khung (mô tả dữ liệu ở mức thấp nhất trong máy tính).

---

#### Câu 36 (db-c1-d1-036) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Đâu là NHƯỢC ĐIỂM LỚN NHẤT của mô hình mạng (Network Model) khi áp dụng cho các hệ thống CSDL quy mô lớn?**

- **A.** Hệ thống hoàn toàn không cho phép lưu trữ dữ liệu dạng số nguyên
- **B.** Không thể kết nối các máy tính với nhau qua mạng cáp đồng nội bộ
- **C.** Bắt buộc người dùng phải mua bản quyền phần mềm với giá rất đắt
- **D.** Đồ thị có hướng bị hạn chế khả năng diễn đạt các liên hệ phức tạp

> **Đáp án đúng:** **D** — *Đồ thị có hướng bị hạn chế khả năng diễn đạt các liên hệ phức tạp*
>
> **Giải thích chi tiết:** Nhược điểm mô hình mạng: Không thích hợp biểu diễn CSDL quy mô lớn, vì đồ thị có hướng hạn chế khả năng diễn đạt ngữ nghĩa của dữ liệu, nhất là các mối liên hệ phức tạp.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn lý do bản quyền đắt đỏ hoặc không hỗ trợ kiểu số.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy nhược điểm bản chất của mô hình mạng (Network Model) trong CSDL lớn`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục III.2.a*
> - 💡 **Mẹo hóa giải:** Nhược điểm mô hình mạng = Đồ thị có hướng hạn chế diễn đạt ngữ nghĩa liên hệ phức tạp khi mở rộng quy mô lớn.

---

#### Câu 37 (db-c1-d1-037) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Trong mô hình phân cấp, nếu một sinh viên đăng ký học nhiều môn, và mỗi môn có nhiều sinh viên (N-N), hạn chế nào sẽ bộc lộ?**

- **A.** Hệ thống tự động chuyển sang mô hình ER mà không cần sự đồng ý
- **B.** Bắt buộc phải nhân bản dữ liệu gây dư thừa vì cây chỉ hỗ trợ 1-N
- **C.** Máy chủ sẽ tự động tắt nguồn để bảo vệ bộ nhớ RAM không bị cháy
- **D.** Mô hình phân cấp giải quyết hoàn hảo mối quan hệ N-N không cần đổi

> **Đáp án đúng:** **B** — *Bắt buộc phải nhân bản dữ liệu gây dư thừa vì cây chỉ hỗ trợ 1-N*
>
> **Giải thích chi tiết:** Cấu trúc cây của mô hình phân cấp chỉ hỗ trợ quan hệ cha-con 1-N. Để biểu diễn quan hệ Nhiều-Nhiều (N-N), bắt buộc phải nhân bản thông tin nút ở nhiều nhánh cây, dẫn đến dư thừa dữ liệu.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ lầm tưởng mô hình phân cấp giải quyết tốt N-N hoặc hệ thống tự động đổi mô hình.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy cấu trúc cây phân cấp (Hierarchical Tree) không hỗ trợ tự nhiên quan hệ N-N`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục III.2.b*
> - 💡 **Mẹo hóa giải:** Mô hình phân cấp = Chỉ hỗ trợ 1-N ➔ Để biểu diễn N-N buộc phải nhân bản dữ liệu (Dư thừa).

---

#### Câu 38 (db-c1-d1-038) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Mối quan hệ đệ quy (Recursive Relationship) trong mô hình ER thể hiện trường hợp thực tế nào dưới đây?**

- **A.** Một bảng dữ liệu bị xóa bỏ nhưng vẫn xuất hiện trong bộ nhớ tạm
- **B.** Hai người dùng cùng cập nhật dữ liệu một lúc gây ra lỗi xung đột
- **C.** Một loại thực thể tự tham gia vào mối kết hợp với chính bản thân nó
- **D.** Một cơ sở dữ liệu được sao lưu định kỳ hàng tuần sang ổ cứng ngoài

> **Đáp án đúng:** **C** — *Một loại thực thể tự tham gia vào mối kết hợp với chính bản thân nó*
>
> **Giải thích chi tiết:** Mối quan hệ đệ quy là mối kết hợp mà trong đó cùng một loại thực thể tham gia nhiều hơn một lần với các vai trò khác nhau (ví dụ: Môn học tiên quyết: Môn học [trước] kết hợp với Môn học [sau]).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm với khái niệm truy cập đồng thời hoặc xóa dữ liệu trong bộ nhớ tạm.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy mối quan hệ đệ quy (Recursive Relationship) trong mô hình ER`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục III.3.a*
> - 💡 **Mẹo hóa giải:** Mối quan hệ đệ quy = Thực thể liên kết với chính nó (VD: Môn học tiên quyết MHoc_Truoc - MHoc_Sau).

---

#### Câu 39 (db-c1-d1-039) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Khi so sánh giữa Mô hình quan hệ và Mô hình hướng đối tượng, nhận định nào sau đây là CHUẨN XÁC NHẤT?**

- **A.** Mô hình quan hệ tách rời dữ liệu và hàm; Hướng đối tượng đóng gói cả hai
- **B.** Mô hình quan hệ chỉ lưu được số nguyên, Hướng đối tượng chỉ lưu ký tự
- **C.** Mô hình hướng đối tượng ra đời vào những năm 60s trước mô hình quan hệ
- **D.** Mô hình quan hệ dựa trên đồ thị có hướng, còn Hướng đối tượng dựa trên cây

> **Đáp án đúng:** **A** — *Mô hình quan hệ tách rời dữ liệu và hàm; Hướng đối tượng đóng gói cả hai*
>
> **Giải thích chi tiết:** Mô hình quan hệ tổ chức dữ liệu thành các bảng tách biệt với chương trình xử lý. Ngược lại, mô hình hướng đối tượng (OODM) đóng gói cả dữ liệu (thuộc tính) và hành vi (phương thức) trong cùng một lớp.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm lẫn về thời gian ra đời hoặc kiểu dữ liệu mà hai mô hình hỗ trợ.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy so sánh bản chất kiến trúc giữa Mô hình Quan hệ (RDBMS) và Hướng đối tượng (OODM)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục III.4.a & III.4.b*
> - 💡 **Mẹo hóa giải:** Mô hình Quan hệ = Dữ liệu tách rời hàm (Bảng k-bộ); Hướng đối tượng = Đóng gói dữ liệu + Phương thức (Class).

---

#### Câu 40 (db-c1-d1-040) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống tổng hợp: Để biểu diễn mối quan hệ phụ thuộc tồn tại giữa Nhân viên và Thân nhân của họ, mô hình ER dùng cách nào?**

- **A.** Ép buộc Nhân viên và Thân nhân phải lưu chung vào một thư mục tập tin
- **B.** Xóa bỏ toàn bộ thông tin của Nhân viên để chỉ lưu lại thông tin Thân nhân
- **C.** Dùng mô hình mạng với mũi tên đi ngược từ Thân nhân sang cho Nhân viên
- **D.** Khai báo Thân nhân là thực thể yếu viền đôi phụ thuộc Nhân viên viền đơn

> **Đáp án đúng:** **D** — *Khai báo Thân nhân là thực thể yếu viền đôi phụ thuộc Nhân viên viền đơn*
>
> **Giải thích chi tiết:** Giáo trình chỉ rõ ví dụ: ThânNhan là thực thể yếu (ký hiệu hình chữ nhật nét đôi) vì sự tồn tại của nó hoàn toàn phụ thuộc vào thực thể mạnh NhanVien (hình chữ nhật nét đơn).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn cách gộp chung vào 1 bảng hoặc nhầm lẫn chiều mũi tên.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy nhận diện thực thể yếu (Weak Entity) phụ thuộc tồn tại trong mô hình ER`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục III.3.a*
> - 💡 **Mẹo hóa giải:** Thân nhân phụ thuộc Nhân viên = Thực thể yếu (Weak Entity - viền đôi) phụ thuộc Thực thể mạnh (viền đơn).

---

### 📊 BẢNG ĐÁP ÁN NHANH — BỘ ĐỀ THI SỐ 1 (MÃ ĐỀ: DB-C1-D1)

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **1** | **A** | **11** | **C** | **21** | **B** | **31** | **B** |
| **2** | **C** | **12** | **D** | **22** | **A** | **32** | **D** |
| **3** | **B** | **13** | **B** | **23** | **C** | **33** | **A** |
| **4** | **D** | **14** | **A** | **24** | **D** | **34** | **B** |
| **5** | **B** | **15** | **C** | **25** | **A** | **35** | **C** |
| **6** | **A** | **16** | **D** | **26** | **C** | **36** | **D** |
| **7** | **D** | **17** | **A** | **27** | **B** | **37** | **B** |
| **8** | **C** | **18** | **B** | **28** | **D** | **38** | **C** |
| **9** | **A** | **19** | **D** | **29** | **C** | **39** | **A** |
| **10** | **B** | **20** | **C** | **30** | **A** | **40** | **D** |




=========================================================================================

## BỘ ĐỀ THI SỐ 2 (MÃ ĐỀ: db-c1-d2)

*Bộ đề số 2 tiếp cận từ các tình huống thực tiễn, phân tích kiến trúc chuyên sâu, cơ chế quản lý giao tác, 2 tầng ánh xạ dữ liệu và nguyên tắc chuẩn mực của RDBMS.*

---

### 📌 CHUYÊN ĐỀ 1: HỆ THỐNG XỬ LÝ TẬP TIN & NHU CẦU CSDL (Câu 1 - 8)

#### Câu 1 (db-c1-d2-001) — [🟢 DỄ (NHẬN BIẾT)]

**Hệ thống dùng phương pháp xử lý tập tin (File Processing System) lưu trữ dữ liệu dưới hình thức nào?**

- **A.** Lưu trữ tập trung vào một kho lưu trữ phân tán đám mây
- **B.** Lưu trữ dưới dạng các tập tin riêng rẽ cho từng ứng dụng
- **C.** Lưu trữ trực tiếp dưới dạng bảng quan hệ chuẩn hóa 3NF
- **D.** Lưu trữ thành các khối chuỗi khối mã hóa an toàn cao

> **Đáp án đúng:** **B** — *Lưu trữ dưới dạng các tập tin riêng rẽ cho từng ứng dụng*
>
> **Giải thích chi tiết:** Để lưu trữ thông tin cho công việc của cơ quan/tổ chức, hệ thống xử lý tập tin lưu dưới dạng các file riêng rẽ, khi cần thì lấy ra thao tác, xử lý.

---

#### Câu 2 (db-c1-d2-002) — [🟢 DỄ (NHẬN BIẾT)]

**Hạn chế nào sau đây KHÔNG PHẢI là nhược điểm của phương pháp xử lý tập tin theo bài giảng?**

- **A.** Thời gian triển khai quá ngắn và chi phí đầu tư rất rẻ
- **B.** Sự dư thừa dữ liệu và không nhất quán giữa các tệp tin
- **C.** Khó đảm bảo tính nguyên tố của các giao tác trong hệ thống
- **D.** Dị thường trong truy cập tương tranh khi có nhiều người dùng

> **Đáp án đúng:** **A** — *Thời gian triển khai quá ngắn và chi phí đầu tư rất rẻ*
>
> **Giải thích chi tiết:** Thời gian triển khai ngắn và chi phí đầu tư thấp là ƯU ĐIỂM của hệ thống tập tin đối với các bài toán nhỏ, không phải là nhược điểm.

---

#### Câu 3 (db-c1-d2-003) — [🟢 DỄ (NHẬN BIẾT)]

**Khi cùng một thông tin khách hàng nhưng địa chỉ ở file Kế toán khác với file Bán hàng, đây là hiện tượng gì?**

- **A.** Hiện tượng bảo vệ an toàn dữ liệu mức cao nhất của máy chủ
- **B.** Hiện tượng tính toán sai lệch của bộ xử lý số học và logic
- **C.** Hiện tượng không nhất quán dữ liệu (Data Inconsistency)
- **D.** Hiện tượng tối ưu hóa không gian lưu trữ của hệ điều hành

> **Đáp án đúng:** **C** — *Hiện tượng không nhất quán dữ liệu (Data Inconsistency)*
>
> **Giải thích chi tiết:** Tính không nhất quán (Data Inconsistency) là tình trạng tại một thời điểm, thông tin về cùng một đối tượng có sự khác nhau trên các tập tin khác nhau trong cùng hệ thống.

---

#### Câu 4 (db-c1-d2-004) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khi một sự cố mất điện xảy ra giữa chừng trong giao tác chuyển tiền của hệ thống tập tin, hậu quả thường gặp là gì?**

- **A.** Hệ thống tự động hoàn tiền về tài khoản nguồn ngay tức khắc
- **B.** Giao dịch được tự động chuyển sang máy chủ dự phòng ở Mỹ
- **C.** Đĩa cứng tự động sửa lỗi và cân bằng lại số dư cho cả hai
- **D.** Dữ liệu rơi vào trạng thái dở dang và mất tính nhất quán

> **Đáp án đúng:** **D** — *Dữ liệu rơi vào trạng thái dở dang và mất tính nhất quán*
>
> **Giải thích chi tiết:** Hệ thống tập tin khó đảm bảo tính nguyên tố (All-or-Nothing). Khi mất điện giữa chừng, tài khoản gửi đã bị trừ nhưng tài khoản nhận chưa được cộng, khiến hệ thống mất nhất quán.

---

#### Câu 5 (db-c1-d2-005) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Tại sao việc thay đổi các quy tắc ràng buộc nghiệp vụ trong hệ thống tập tin lại tốn kém công sức và dễ sai sót?**

- **A.** Vì các ràng buộc bị phân tán và nhúng trực tiếp trong mã nguồn
- **B.** Vì hệ điều hành cấm người quản trị không được sửa đổi tập tin
- **C.** Vì dung lượng đĩa cứng quá nhỏ không đủ ghi nhớ các quy tắc mới
- **D.** Vì các lập trình viên bắt buộc phải thi lại chứng chỉ quốc tế

> **Đáp án đúng:** **A** — *Vì các ràng buộc bị phân tán và nhúng trực tiếp trong mã nguồn*
>
> **Giải thích chi tiết:** Trong hệ thống tập tin, quy tắc nghiệp vụ nằm rải rác trong code của từng chương trình. Khi đổi quy tắc, phải rà soát và sửa đổi đồng loạt toàn bộ các chương trình ứng dụng.

---

#### Câu 6 (db-c1-d2-006) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Yếu tố "An toàn dữ liệu" (Data Security) trong hệ thống xử lý thông tin bao gồm những khía cạnh nào dưới đây?**

- **A.** Trang bị bàn ghế công thái học và bàn phím cơ chống ồn cho nhân sự
- **B.** Mua sắm máy lạnh công suất lớn và bình cứu hỏa tự động trong phòng
- **C.** Cơ chế bảo mật, phân cấp đối tượng sử dụng và sao lưu dự phòng
- **D.** Lắp đặt camera giám sát cổng ra vào cơ quan và khóa cửa cuốn điện

> **Đáp án đúng:** **C** — *Cơ chế bảo mật, phân cấp đối tượng sử dụng và sao lưu dự phòng*
>
> **Giải thích chi tiết:** Giáo trình nêu rõ: An toàn dữ liệu bao gồm: cơ chế bảo mật, phân cấp đối tượng sử dụng dữ liệu, sao lưu dữ liệu dự phòng (backup).

---

#### Câu 7 (db-c1-d2-007) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Giả sử một thư viện trường học dùng các file Excel riêng lẻ để quản lý mượn sách. Bất cập nào sẽ xuất hiện khi sinh viên mượn quá hạn?**

- **A.** Phần mềm Excel sẽ tự động gửi tin nhắn SMS cảnh báo phụ huynh
- **B.** Khó kiểm tra ràng buộc sách quá hạn nếu không mở từng file dò thủ công
- **C.** Máy tính của thủ thư sẽ tự động chuyển đổi dữ liệu sang CSDL Oracle
- **D.** Sinh viên mượn sách quá hạn sẽ bị trừ điểm rèn luyện tự động ngay

> **Đáp án đúng:** **B** — *Khó kiểm tra ràng buộc sách quá hạn nếu không mở từng file dò thủ công*
>
> **Giải thích chi tiết:** Vì dữ liệu phân tán trên các file riêng rẽ và thiếu cơ chế toàn vẹn tự động, việc kiểm tra ràng buộc mượn sách đòi hỏi mở từng file tra cứu thủ công, rất dễ bỏ sót và tốn thời gian.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay suy diễn Excel có thể tự gửi SMS hoặc tự động trừ điểm rèn luyện.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy bất cập kiểm soát ràng buộc toàn vẹn (Integrity) trong môi trường tập tin riêng rẽ`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục I.1.b*
> - 💡 **Mẹo hóa giải:** Hệ thống file riêng rẽ = Thiếu kiểm soát toàn vẹn tập trung ➔ Buộc phải dò tìm thủ công, dễ sai lệch.

---

#### Câu 8 (db-c1-d2-008) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Điểm khác biệt CỐT LÕI NHẤT giữa phương pháp tiếp cận tập tin và tiếp cận Cơ sở dữ liệu là gì?**

- **A.** Tiếp cận CSDL dùng màn hình cong, tiếp cận tập tin dùng màn phẳng
- **B.** Tiếp cận CSDL không cần người quản trị, hệ thống tự động hoàn toàn
- **C.** Tiếp cận tập tin chỉ chạy trên máy chủ Linux, CSDL chỉ chạy Windows
- **D.** Tiếp cận CSDL tập trung hóa dữ liệu và tách rời dữ liệu khỏi ứng dụng

> **Đáp án đúng:** **D** — *Tiếp cận CSDL tập trung hóa dữ liệu và tách rời dữ liệu khỏi ứng dụng*
>
> **Giải thích chi tiết:** Điểm khác biệt cốt lõi: Tiếp cận CSDL tập trung hóa dữ liệu, loại bỏ trùng lặp và tách rời định nghĩa cấu trúc dữ liệu khỏi mã nguồn ứng dụng, đem lại tính độc lập dữ liệu cao.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm với yếu tố phần cứng hiển thị hoặc hệ điều hành máy chủ.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy bản chất khác biệt giữa File Approach và Database Approach`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục I.1.c & II.1*
> - 💡 **Mẹo hóa giải:** Bản chất Database Approach = Tập trung hóa dữ liệu + Độc lập giữa dữ liệu và chương trình ứng dụng.

---

### 📌 CHUYÊN ĐỀ 2: CƠ SỞ DỮ LIỆU & HỆ QUẢN TRỊ CSDL (DBMS) (Câu 9 - 18)

#### Câu 9 (db-c1-d2-009) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Mục tiêu chính của việc lưu trữ Cơ sở dữ liệu trên các thiết bị nhớ ngoài (thiết bị trừ tin) là gì?**

- **A.** Để giảm độ sáng của màn hình làm việc giúp bảo vệ mắt cho người dùng
- **B.** Để tăng tốc độ tính toán của các lệnh số học trong bộ xử lý ALU
- **C.** Để dữ liệu không bị mất đi khi tắt máy tính hoặc mất nguồn điện
- **D.** Để lập trình viên không cần phải viết chú thích trong mã nguồn code

> **Đáp án đúng:** **C** — *Để dữ liệu không bị mất đi khi tắt máy tính hoặc mất nguồn điện*
>
> **Giải thích chi tiết:** CSDL được lưu trữ trên bộ nhớ ngoài (như đĩa cứng SSD/HDD) nhằm mục đích bảo toàn dữ liệu lâu dài, không bị biến mất khi tắt máy hoặc gặp sự cố mất điện.

---

#### Câu 10 (db-c1-d2-010) — [🟢 DỄ (NHẬN BIẾT)]

**Viết tắt DBMS trong lĩnh vực công nghệ thông tin là tên viết tắt của cụm từ tiếng Anh nào?**

- **A.** Digital Business Management Software for Enterprise
- **B.** Database Management System (Hệ quản trị Cơ sở dữ liệu)
- **C.** Direct Binary Memory Storage for Operating Systems
- **D.** Dynamic Base Modeling Schema for Computer Network

> **Đáp án đúng:** **B** — *Database Management System (Hệ quản trị Cơ sở dữ liệu)*
>
> **Giải thích chi tiết:** DBMS là viết tắt của Database Management System, trong tiếng Việt dịch là Hệ quản trị Cơ sở dữ liệu.

---

#### Câu 11 (db-c1-d2-011) — [🟢 DỄ (NHẬN BIẾT)]

**Đối tượng nào trong hệ thống CSDL có vai trò lập trình xây dựng các phần mềm ứng dụng khai thác dữ liệu?**

- **A.** Chuyên viên tin học biết khai thác CSDL (Application Programmers)
- **B.** Người sử dụng không chuyên về tin học tại các phòng ban
- **C.** Nhân viên bảo vệ tòa nhà trung tâm máy chủ của doanh nghiệp
- **D.** Người dùng vãng lai truy cập website để đọc tin tức giải trí

> **Đáp án đúng:** **A** — *Chuyên viên tin học biết khai thác CSDL (Application Programmers)*
>
> **Giải thích chi tiết:** Chuyên viên tin học (Application Programmers) là các kỹ sư phần mềm am hiểu lập trình, có nhiệm vụ xây dựng các ứng dụng nghiệp vụ tương tác với CSDL.

---

#### Câu 12 (db-c1-d2-012) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong kiến trúc hệ thống CSDL, ngôn ngữ truy vấn có cấu trúc SQL đóng vai trò gì giữa người dùng và CSDL?**

- **A.** Là ngôn ngữ bậc thấp dùng để nạp trực tiếp vào BIOS của máy chủ
- **B.** Là giao thức truyền tín hiệu sóng radio tầm xa qua vệ tinh viễn thông
- **C.** Là công cụ dùng để thiết kế bản vẽ mạch điện tử in trên bo mạch
- **D.** Là ngôn ngữ bậc cao giúp người dùng truy xuất và thao tác trên CSDL

> **Đáp án đúng:** **D** — *Là ngôn ngữ bậc cao giúp người dùng truy xuất và thao tác trên CSDL*
>
> **Giải thích chi tiết:** HQTCSDL cung cấp ngôn ngữ bậc cao (như SQL) đóng vai trò là giao diện trung gian cho phép người dùng truy xuất, tìm kiếm và thao tác dữ liệu một cách trực quan.

---

#### Câu 13 (db-c1-d2-013) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khả năng chia sẻ thông tin cao của CSDL mang lại lợi ích thực tiễn nào cho doanh nghiệp?**

- **A.** Nhiều phòng ban và ứng dụng cùng khai thác một nguồn dữ liệu đồng bộ
- **B.** Mỗi nhân viên tự mua một máy chủ riêng đặt tại nhà để lưu dữ liệu
- **C.** Doanh nghiệp không cần phải trả tiền bản quyền hệ điều hành máy tính
- **D.** Cho phép chia sẻ mật khẩu quản trị cho tất cả mọi khách hàng bên ngoài

> **Đáp án đúng:** **A** — *Nhiều phòng ban và ứng dụng cùng khai thác một nguồn dữ liệu đồng bộ*
>
> **Giải thích chi tiết:** Khả năng chia sẻ cao cho phép nhiều người dùng ở các phòng ban khác nhau và nhiều phần mềm khác nhau cùng khai thác đồng thời một nguồn dữ liệu chuẩn xác, nhất quán.

---

#### Câu 14 (db-c1-d2-014) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Công việc nào dưới đây KHÔNG THUỘC trách nhiệm chính của Người quản trị CSDL (DBA)?**

- **A.** Khai báo cấu trúc CSDL và thiết lập các ràng buộc toàn vẹn dữ liệu
- **B.** Lập kế hoạch sao lưu dự phòng và phục hồi dữ liệu khi gặp sự cố
- **C.** Cấp phát và thu hồi quyền hạn truy cập CSDL của người sử dụng
- **D.** Trực tiếp sửa chữa màn hình máy tính và hàn linh kiện bo mạch hỏng

> **Đáp án đúng:** **D** — *Trực tiếp sửa chữa màn hình máy tính và hàn linh kiện bo mạch hỏng*
>
> **Giải thích chi tiết:** Sửa chữa phần cứng vật lý, hàn vi mạch là việc của kỹ sư phần cứng, không thuộc chuyên môn tổ chức CSDL, bảo mật và phân quyền của Người quản trị CSDL (DBA).

---

#### Câu 15 (db-c1-d2-015) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Cơ chế giải quyết tranh chấp trong truy cập dữ liệu (Concurrency Control) của HQTCSDL nhằm mục đích gì?**

- **A.** Tự động ngắt kết nối mạng của tất cả những ai truy cập trái phép
- **B.** Ngăn chặn xung đột ghi đè khi nhiều người cùng cập nhật dữ liệu
- **C.** Tự động giảm lương của nhân viên nếu nhập sai dữ liệu vào hệ thống
- **D.** Phát hiện lỗi chính tả tiếng Việt trong văn bản lưu trên hệ thống

> **Đáp án đúng:** **B** — *Ngăn chặn xung đột ghi đè khi nhiều người cùng cập nhật dữ liệu*
>
> **Giải thích chi tiết:** Cơ chế điều khiển tương tranh giải quyết tranh chấp dữ liệu khi nhiều người dùng cùng thao tác đồng thời, bảo đảm dữ liệu luôn nhất quán và không bị ghi đè mất mát.

---

#### Câu 16 (db-c1-d2-016) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Một doanh nghiệp muốn xây dựng hệ thống thanh toán trực tuyến. Vì sao họ BẮT BUỘC phải dùng HQTCSDL thay vì lưu file?**

- **A.** Vì các ngân hàng thương mại cấm thanh toán trực tuyến qua mạng cáp quang
- **B.** Vì lưu trữ bằng file không thể hiển thị được màu sắc trên màn hình máy tính
- **C.** Vì HQTCSDL có cơ chế quản lý giao tác (Transaction) đảm bảo tính nguyên tố
- **D.** Vì chỉ có HQTCSDL mới có thể cài đặt được trên hệ điều hành điện thoại

> **Đáp án đúng:** **C** — *Vì HQTCSDL có cơ chế quản lý giao tác (Transaction) đảm bảo tính nguyên tố*
>
> **Giải thích chi tiết:** Thanh toán tài chính đòi hỏi tính nguyên tố (Atomicity) và cô lập của Giao tác (Transaction) — tiền bị trừ ở tài khoản A thì bắt buộc phải chuyển sang tài khoản B. Chỉ HQTCSDL mới hỗ trợ quản trị giao tác an toàn.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn các lý do về giao diện hiển thị màu sắc hoặc quy định cấm phi lý.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy yêu cầu quản lý giao tác (Transaction Management) trong nghiệp vụ tài chính ngân hàng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục II.4.b*
> - 💡 **Mẹo hóa giải:** Nghiệp vụ tài chính/ngân hàng = Bắt buộc dùng HQTCSDL vì cần cơ chế Transaction (ACID) bảo đảm nguyên tố.

---

#### Câu 17 (db-c1-d2-017) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tại sao việc phân quyền khai thác CSDL chi tiết đến từng đối tượng người dùng lại là thách thức nảy sinh khi dùng CSDL?**

- **A.** Vì các phần mềm HQTCSDL không có tính năng đặt mật khẩu bảo vệ tài khoản
- **B.** Vì dữ liệu tập trung một nơi, nếu phân quyền lỏng lẻo sẽ lộ bí mật kinh doanh
- **C.** Vì pháp luật cấm không cho phép các công ty phân chia phòng ban nội bộ
- **D.** Vì người quản trị CSDL bắt buộc phải gặp trực tiếp từng khách hàng ký tên

> **Đáp án đúng:** **B** — *Vì dữ liệu tập trung một nơi, nếu phân quyền lỏng lẻo sẽ lộ bí mật kinh doanh*
>
> **Giải thích chi tiết:** Trong CSDL, tất cả tài nguyên thông tin được gom về một mối. Nếu không có chính sách và cơ chế phân quyền chặt chẽ theo vai trò (Role-based access), nguy cơ lộ dữ liệu mật giữa các phòng ban là cực kỳ lớn.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm lẫn với việc phần mềm thiếu tính năng mật khẩu hoặc rào cản pháp lý.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy thách thức bảo mật và phân quyền trong môi trường CSDL tập trung`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục II.1.c*
> - 💡 **Mẹo hóa giải:** CSDL tập trung = Rủi ro rò rỉ tập trung ➔ Thách thức sống còn là phân quyền truy cập chi tiết.

---

#### Câu 18 (db-c1-d2-018) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Một HQTCSDL có chức năng "Kiểm tra độ tin cậy của dữ liệu trước khi lưu trữ". Điều này có nghĩa là gì?**

- **A.** Kiểm tra định dạng, miền giá trị và tính hợp lệ của dữ liệu trước khi ghi đĩa
- **B.** Gửi thư điện tử đến cơ quan công an để xác minh nhân thân của người nhập
- **C.** Tự động gọi điện thoại cho khách hàng để hỏi xem họ có thực sự muốn lưu
- **D.** Chỉ cho phép lưu trữ dữ liệu nếu người nhập đã tốt nghiệp đại học chuyên ngành

> **Đáp án đúng:** **A** — *Kiểm tra định dạng, miền giá trị và tính hợp lệ của dữ liệu trước khi ghi đĩa*
>
> **Giải thích chi tiết:** Kiểm tra độ tin cậy trước khi lưu trữ là việc HQTCSDL tự động thẩm định dữ liệu nhập vào có thỏa mãn các ràng buộc miền giá trị (kiểu dữ liệu, độ dài, khoảng giá trị hợp lệ) hay không trước khi ghi vào đĩa.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay bị đánh lừa bởi các phương án liên quan đến xác minh nhân thân hoặc bằng cấp.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy kiểm tra độ tin cậy của dữ liệu (Data Validation) trong HQTCSDL`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục II.4.b*
> - 💡 **Mẹo hóa giải:** Kiểm tra độ tin cậy = Kiểm tra ràng buộc toàn vẹn & miền giá trị hợp lệ trước khi Commit vào CSDL.

---

### 📌 CHUYÊN ĐỀ 3: KIẾN TRÚC 3 MỨC ANSI-SPARC & TÍNH ĐỘC LẬP DỮ LIỆU (Câu 19 - 26)

#### Câu 19 (db-c1-d2-019) — [🟢 DỄ (NHẬN BIẾT)]

**Tổ chức nào đã đề xuất kiến trúc 3 mức chuẩn mực cho các hệ cơ sở dữ liệu vào thập niên 1970?**

- **A.** Liên đoàn Bóng đá Thế giới (Federation of Association FIFA)
- **B.** Tổ chức Y tế Thế giới (World Health Organization - WHO)
- **C.** Hiệp hội Vận tải Hàng không Quốc tế (IATA Global Agency)
- **D.** Tổ chức ANSI-SPARC (American National Standards Institute)

> **Đáp án đúng:** **D** — *Tổ chức ANSI-SPARC (American National Standards Institute)*
>
> **Giải thích chi tiết:** Kiến trúc 3 mức chuẩn của CSDL do ủy ban ANSI-SPARC (American National Standards Institute / Standards Planning And Requirements Committee) đề xuất.

---

#### Câu 20 (db-c1-d2-020) — [🟢 DỄ (NHẬN BIẾT)]

**Tên gọi khác của "Mức vật lý" và "Mức khung nhìn" trong kiến trúc 3 mức ANSI-SPARC lần lượt là gì?**

- **A.** Mức trung gian (Middle Level) và Mức hạt nhân (Kernel Level)
- **B.** Mức phần cứng (Hardware Level) và Mức giao diện (Interface)
- **C.** Mức trong (Internal Level) và Mức ngoài (External Level)
- **D.** Mức sơ cấp (Primary Level) và Mức thứ cấp (Secondary Level)

> **Đáp án đúng:** **C** — *Mức trong (Internal Level) và Mức ngoài (External Level)*
>
> **Giải thích chi tiết:** Theo giáo trình: Mức vật lý còn gọi là Mức trong (Internal Level); Mức khung nhìn còn gọi là Mức ngoài (External Level); Mức khái niệm gọi là Conceptual/Logical.

---

#### Câu 21 (db-c1-d2-021) — [🟢 DỄ (NHẬN BIẾT)]

**Sơ đồ quan niệm (Conceptual Schema) thường sử dụng mô hình nào để biểu diễn cấu trúc thế giới thực?**

- **A.** Mô hình thực thể mối kết hợp (Entity-Relationship Model - ER)
- **B.** Mô hình điện trở tương đương trong định luật Ohm mạch điện xoay
- **C.** Mô hình ma trận bán dẫn vi phân trong thiết kế chip điện tử
- **D.** Mô hình quỹ đạo chuyển động của vệ tinh địa tĩnh quanh trái đất

> **Đáp án đúng:** **A** — *Mô hình thực thể mối kết hợp (Entity-Relationship Model - ER)*
>
> **Giải thích chi tiết:** Giáo trình ghi rõ: HQTCSDL cung cấp khả năng định nghĩa dữ liệu ở mức này để mô tả sơ đồ quan niệm (thường gọi là mô hình CSDL, ví dụ mô hình ER).

---

#### Câu 22 (db-c1-d2-022) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Mối quan hệ bản chất giữa Mức vật lý và Mức khái niệm trong kiến trúc 3 mức là gì?**

- **A.** Mức khái niệm là phần cứng, mức vật lý là ý nghĩ của người lập trình
- **B.** Mức vật lý là sự cài đặt cụ thể của mức khái niệm trên thiết bị lưu trữ
- **C.** Hai mức này hoàn toàn không có bất kỳ mối liên hệ nào với nhau trong máy
- **D.** Mức khái niệm luôn luôn được tạo ra sau khi mức vật lý đã bị xóa bỏ

> **Đáp án đúng:** **B** — *Mức vật lý là sự cài đặt cụ thể của mức khái niệm trên thiết bị lưu trữ*
>
> **Giải thích chi tiết:** Giáo trình khẳng định: Mức khái niệm là sự trừu tượng hóa thế giới thực gần với người dùng. Mức vật lý chính là sự cài đặt cụ thể của mức khái niệm trên thiết bị lưu trữ.

---

#### Câu 23 (db-c1-d2-023) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khung nhìn (View) ở mức ngoài giúp ích gì cho vấn đề bảo mật an toàn dữ liệu của tổ chức?**

- **A.** Ngăn không cho người dùng mở màn hình máy tính nếu chưa quét vân tay
- **B.** Tự động mã hóa bàn phím người dùng bằng thuật toán lượng tử siêu bảo mật
- **C.** Giới hạn người dùng chỉ nhìn thấy dữ liệu họ được phép, che giấu phần còn lại
- **D.** Xóa sạch các tệp dữ liệu vật lý sau mỗi lần người dùng kết thúc phiên làm

> **Đáp án đúng:** **C** — *Giới hạn người dùng chỉ nhìn thấy dữ liệu họ được phép, che giấu phần còn lại*
>
> **Giải thích chi tiết:** Khung nhìn (View) cung cấp một cơ chế bảo mật mạnh mẽ: mỗi người dùng hoặc nhóm người dùng chỉ được cấp quyền nhìn thấy phần dữ liệu liên quan đến nhiệm vụ của họ, che giấu các thông tin nhạy cảm khác.

---

#### Câu 24 (db-c1-d2-024) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khi nâng cấp dung lượng đĩa cứng và thay đổi thuật toán đánh chỉ số (Index), tại sao các ứng dụng không cần viết lại?**

- **A.** Nhờ CPU tự động nhận diện và sửa lỗi phần mềm trong nháy mắt
- **B.** Nhờ người dùng không bao giờ kiểm tra kết quả truy vấn dữ liệu
- **C.** Nhờ các nhà mạng viễn thông hỗ trợ tự động viết lại mã nguồn code
- **D.** Nhờ tính độc lập dữ liệu vật lý (Physical Data Independence)

> **Đáp án đúng:** **D** — *Nhờ tính độc lập dữ liệu vật lý (Physical Data Independence)*
>
> **Giải thích chi tiết:** Tính độc lập dữ liệu vật lý bảo đảm rằng các thay đổi trong việc tổ chức lưu trữ vật lý hay chỉ mục không làm thay đổi sơ đồ khái niệm, do đó các chương trình ứng dụng không cần sửa đổi.

---

#### Câu 25 (db-c1-d2-025) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Khi bổ sung thêm một cột "Số điện thoại dự phòng" vào bảng SinhVien. Các ứng dụng cũ chỉ đọc cột "MaSV, HoTen" có bị lỗi không? Vì sao?**

- **A.** Bị lỗi ngay lập tức vì cấu trúc bảng đã bị thay đổi kích thước bản ghi
- **B.** Bị lỗi vì hệ điều hành yêu cầu phải cài đặt lại toàn bộ phần mềm từ đầu
- **C.** Không bị lỗi, nhờ tính độc lập dữ liệu logic che chắn cho các khung nhìn cũ
- **D.** Không bị lỗi, nhưng tất cả dữ liệu cũ trong bảng SinhVien sẽ bị xóa sạch

> **Đáp án đúng:** **C** — *Không bị lỗi, nhờ tính độc lập dữ liệu logic che chắn cho các khung nhìn cũ*
>
> **Giải thích chi tiết:** Nhờ tính độc lập dữ liệu logic (Logical Data Independence), việc thêm thuộc tính mới vào mức khái niệm không làm thay đổi các khung nhìn hiện có của các ứng dụng cũ, giúp ứng dụng tiếp tục hoạt động bình thường.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay lo sợ bất kỳ sự thay đổi cấu trúc bảng nào cũng làm hỏng các chương trình đang chạy.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy tính độc lập dữ liệu logic (Logical Data Independence) khi mở rộng thuộc tính`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục II.3*
> - 💡 **Mẹo hóa giải:** Thêm cột/thêm bảng mới vào mức khái niệm = Khung nhìn cũ không đổi ➔ Nhờ Độc lập dữ liệu logic.

---

#### Câu 26 (db-c1-d2-026) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Mô hình 3 mức ANSI-SPARC giải quyết triệt để vấn đề phụ thuộc dữ liệu (Data Dependency) trong hệ thống tập tin bằng cách nào?**

- **A.** Bằng cách tạo ra hai tầng ánh xạ: Khung nhìn - Khái niệm và Khái niệm - Vật lý
- **B.** Bằng cách cấm người dùng không được phép tạo các tập tin dữ liệu mới
- **C.** Bằng cách gộp chung tất cả các tệp trên đĩa cứng vào trong một file nén zip
- **D.** Bằng cách bắt buộc tất cả nhân viên phải sử dụng chung một tài khoản đăng nhập

> **Đáp án đúng:** **A** — *Bằng cách tạo ra hai tầng ánh xạ: Khung nhìn - Khái niệm và Khái niệm - Vật lý*
>
> **Giải thích chi tiết:** ANSI-SPARC phân tách dữ liệu thành 3 mức thông qua 2 tầng ánh xạ (Mapping): Ánh xạ Ngoài - Khái niệm (External/Conceptual Mapping) và Ánh xạ Khái niệm - Trong (Conceptual/Internal Mapping), đem lại tính độc lập dữ liệu toàn diện.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người không biết cơ chế kỹ thuật giúp đạt được tính độc lập dữ liệu chính là 2 tầng ánh xạ (Mapping).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy cơ chế ánh xạ giữa 3 mức trong kiến trúc ANSI-SPARC`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục II.3.a*
> - 💡 **Mẹo hóa giải:** Độc lập dữ liệu đạt được nhờ 2 tầng ánh xạ: Ngoài-Khái niệm (Logic) & Khái niệm-Trong (Vật lý).

---

### 📌 CHUYÊN ĐỀ 4: CÁC MÔ HÌNH DỮ LIỆU (DATA MODELS) (Câu 27 - 40)

#### Câu 27 (db-c1-d2-027) — [🟢 DỄ (NHẬN BIẾT)]

**Mô hình dữ liệu (Data Model) là sự hình thức hóa toán học bao gồm 2 phần cơ bản nào?**

- **A.** Bàn phím nhập liệu cơ học và Màn hình tinh thể lỏng hiển thị
- **B.** Ký hiệu mô tả dữ liệu và Tập hợp các phép toán trên dữ liệu
- **C.** Dây dẫn cáp đồng trục truyền tín hiệu và Đầu nối jack cắm tròn
- **D.** Tài liệu hướng dẫn sử dụng in trên giấy và Đĩa CD cài đặt gốc

> **Đáp án đúng:** **B** — *Ký hiệu mô tả dữ liệu và Tập hợp các phép toán trên dữ liệu*
>
> **Giải thích chi tiết:** Giáo trình định nghĩa: Mô hình dữ liệu là sự hình thức hóa toán học, gồm 2 phần: 1) Ký hiệu mô tả dữ liệu; và 2) Tập hợp các phép toán diễn tả ràng buộc và các phép xử lý.

---

#### Câu 28 (db-c1-d2-028) — [🟢 DỄ (NHẬN BIẾT)]

**Mô hình nào sau đây KHÔNG THUỘC nhóm "Mô hình dữ liệu logic trên cơ sở đối tượng" (Object-based)?**

- **A.** Mô hình dữ liệu ngữ nghĩa và Mô hình dữ liệu chức năng chuyên biệt
- **B.** Mô hình thực thể kết hợp (Entity-Relationship Model - ER Model)
- **C.** Mô hình dữ liệu hướng đối tượng (Object-Oriented Data Model - OODM)
- **D.** Mô hình phân cấp dạng cấu trúc cây phân nhánh (Hierarchical Model)

> **Đáp án đúng:** **D** — *Mô hình phân cấp dạng cấu trúc cây phân nhánh (Hierarchical Model)*
>
> **Giải thích chi tiết:** Mô hình phân cấp (Hierarchical) thuộc nhóm Mô hình logic trên cơ sở bản ghi (Record-based), không thuộc nhóm hướng đối tượng.

---

#### Câu 29 (db-c1-d2-029) — [🟢 DỄ (NHẬN BIẾT)]

**Trong mô hình mạng (Network Model), mỗi loại mẫu tin (record type) được biểu diễn trực quan bằng hình học nào?**

- **A.** Được biểu diễn bằng một hình ngôi sao năm cánh có viền màu vàng
- **B.** Được biểu diễn bằng một hình chữ nhật đặc trưng cho một đối tượng
- **C.** Được biểu diễn bằng một hình elip dẹt nằm ngang có mũi tên bao quanh
- **D.** Được biểu diễn bằng một hình lục giác đều có các cạnh nối với nhau

> **Đáp án đúng:** **B** — *Được biểu diễn bằng một hình chữ nhật đặc trưng cho một đối tượng*
>
> **Giải thích chi tiết:** Trong mô hình mạng: Mỗi loại mẫu tin (record type) đặc trưng cho một đối tượng (VD: Khoa, SinhVien...) và được ký hiệu bằng hình chữ nhật.

---

#### Câu 30 (db-c1-d2-030) — [🟢 DỄ (NHẬN BIẾT)]

**Trong mô hình phân cấp, mỗi nút con có thể có tối đa bao nhiêu nút cha (Parent Node)?**

- **A.** Bắt buộc phải có đúng hai nút cha tương ứng với hai bán cầu não
- **B.** Có thể có vô số nút cha tùy theo số lượng người dùng truy cập
- **C.** Chỉ có thể có duy nhất một nút cha trong cấu trúc cây phân nhánh
- **D.** Không bao giờ có nút cha vì các nút hoàn toàn độc lập với nhau

> **Đáp án đúng:** **C** — *Chỉ có thể có duy nhất một nút cha trong cấu trúc cây phân nhánh*
>
> **Giải thích chi tiết:** Trong cấu trúc cây chuẩn của mô hình phân cấp, mỗi nút con chỉ có duy nhất một nút cha (quan hệ 1-N). Đây là đặc trưng cơ bản và cũng là hạn chế lớn của mô hình này.

---

#### Câu 31 (db-c1-d2-031) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong mô hình thực thể kết hợp (ER), mối kết hợp (Relationship Type) được biểu diễn bằng hình gì?**

- **A.** Được biểu diễn bằng hình thoi nối giữa các loại thực thể tham gia
- **B.** Được biểu diễn bằng hình chữ nhật nét đôi có góc vuông sắc nét
- **C.** Được biểu diễn bằng hình tròn có dấu cộng nằm chính giữa tâm hình
- **D.** Được biểu diễn bằng hình parabol cong vút về phía góc phần tư thứ nhất

> **Đáp án đúng:** **A** — *Được biểu diễn bằng hình thoi nối giữa các loại thực thể tham gia*
>
> **Giải thích chi tiết:** Trong mô hình ER chuẩn: Mối kết hợp (Relationship Type) được ký hiệu bằng hình thoi, nối với các loại thực thể tham gia.

---

#### Câu 32 (db-c1-d2-032) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Thuộc tính khóa (Key Attribute) của một loại thực thể trong mô hình ER được quy ước trình bày như thế nào?**

- **A.** Tên thuộc tính được viết bằng mực đỏ và in đậm kích thước lớn
- **B.** Tên thuộc tính được đặt bên ngoài sơ đồ và có dấu sao đánh dấu đầu
- **C.** Tên thuộc tính được bao quanh bởi một hình vuông màu đen viền dày
- **D.** Tên thuộc tính được gạch chân nằm bên trong hình bầu dục thuộc tính

> **Đáp án đúng:** **D** — *Tên thuộc tính được gạch chân nằm bên trong hình bầu dục thuộc tính*
>
> **Giải thích chi tiết:** Trong sơ đồ ER: Thuộc tính được vẽ bằng hình bầu dục, và thuộc tính khóa (Key) được phân biệt bằng cách gạch chân dưới tên thuộc tính.

---

#### Câu 33 (db-c1-d2-033) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Trong mô hình dữ liệu quan hệ, mỗi dòng (Row) trong bảng đại diện cho khái niệm toán học nào?**

- **A.** Đại diện cho một bộ giá trị (Tuple hay k-bộ) của quan hệ đó
- **B.** Đại diện cho một biến số nhị phân trong hàm logic vị từ cấp một
- **C.** Đại diện cho một mặt phẳng không gian trong hình học giải tích
- **D.** Đại diện cho một bước nhảy con trỏ chuột trên màn hình máy tính

> **Đáp án đúng:** **A** — *Đại diện cho một bộ giá trị (Tuple hay k-bộ) của quan hệ đó*
>
> **Giải thích chi tiết:** Trong mô hình quan hệ: Mỗi dòng của bảng là một bộ (tuple hay k-bộ), biểu diễn một thể hiện cụ thể của đối tượng thực tế.

---

#### Câu 34 (db-c1-d2-034) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Khái niệm "Tính kế thừa" (Inheritance) trong mô hình hướng đối tượng mang lại giá trị nào sau đây?**

- **A.** Tự động sao chép toàn bộ tiền tiết kiệm của người dùng vào tài khoản ngân hàng
- **B.** Lớp con kế thừa các thuộc tính và phương thức từ lớp cha, tăng tái sử dụng
- **C.** Cho phép một máy tính tự động tiếp quản bàn phím của một máy tính khác từ xa
- **D.** Bắt buộc các lập trình viên phải truyền lại mã nguồn cho con cháu của mình

> **Đáp án đúng:** **B** — *Lớp con kế thừa các thuộc tính và phương thức từ lớp cha, tăng tái sử dụng*
>
> **Giải thích chi tiết:** Tính kế thừa (Inheritance) cho phép lớp con tiếp nhận và mở rộng các thuộc tính, phương thức từ lớp cha, giúp tái sử dụng mã nguồn và giảm trùng lặp logic.

---

#### Câu 35 (db-c1-d2-035) — [🟡 TRUNG BÌNH (THÔNG HIỂU)]

**Tại sao mô hình hướng đối tượng (OODM) được nhận định "có thể sẽ là mô hình CSDL của tương lai"?**

- **A.** Vì mô hình hướng đối tượng cấm người dùng không được xóa dữ liệu khỏi đĩa
- **B.** Vì mô hình này không cần sử dụng năng lượng điện khi máy chủ hoạt động
- **C.** Vì chi phí mua máy tính để chạy mô hình hướng đối tượng rẻ hơn bình thường
- **D.** Vì có thể biểu diễn tự nhiên các kiểu dữ liệu phức tạp, đa phương tiện và đồ họa

> **Đáp án đúng:** **D** — *Vì có thể biểu diễn tự nhiên các kiểu dữ liệu phức tạp, đa phương tiện và đồ họa*
>
> **Giải thích chi tiết:** OODM kết hợp sức mạnh của lập trình hướng đối tượng với khả năng lưu trữ bền vững, rất phù hợp để xử lý các cấu trúc dữ liệu phức tạp, đa phương tiện, CAD/CAM và AI hiện đại.

---

#### Câu 36 (db-c1-d2-036) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**So sánh về khả năng biểu diễn quan hệ nhiều-nhiều (N-N), phát biểu nào sau đây phản ánh ĐÚNG BẢN CHẤT?**

- **A.** Mô hình phân cấp hỗ trợ tự nhiên N-N; Mô hình ER bắt buộc phải chia cây
- **B.** Không có mô hình nào trong khoa học máy tính có thể biểu diễn được N-N
- **C.** Mô hình ER và Quan hệ hỗ trợ N-N dễ dàng; Mô hình phân cấp gặp bế tắc
- **D.** Mô hình mạng cấm hoàn toàn mối quan hệ N-N và chỉ hỗ trợ quan hệ 1-1

> **Đáp án đúng:** **C** — *Mô hình ER và Quan hệ hỗ trợ N-N dễ dàng; Mô hình phân cấp gặp bế tắc*
>
> **Giải thích chi tiết:** Mô hình ER (qua mối kết hợp N-N) và mô hình Quan hệ (qua bảng trung gian kết hợp) giải quyết quan hệ N-N rất tự nhiên và chuẩn xác. Ngược lại, mô hình phân cấp dạng cây bị bế tắc và phải nhân bản dữ liệu.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm lẫn giữa mô hình phân cấp (chỉ 1-N) và mô hình mạng hay quan hệ.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy khả năng biểu diễn quan hệ Nhiều-Nhiều (N-N) giữa các mô hình dữ liệu`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục III.2.b & III.3.a*
> - 💡 **Mẹo hóa giải:** Mô hình ER & Quan hệ = Xử lý N-N dễ dàng; Mô hình Phân cấp (Tree) = Không hỗ trợ tự nhiên N-N.

---

#### Câu 37 (db-c1-d2-037) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Trong mô hình ER, một mối kết hợp giữa 3 loại thực thể: Bác sĩ, Bệnh nhân và Thuốc được gọi là gì?**

- **A.** Mối kết hợp đệ quy tự thân của thực thể Bác sĩ điều trị
- **B.** Mối kết hợp yếu không xác định vì thiếu thuộc tính khóa
- **C.** Mối kết hợp nhị phân kép gồm hai mối liên hệ tách biệt
- **D.** Mối kết hợp tam phân (3 ngôi - Degree 3) giữa 3 thực thể

> **Đáp án đúng:** **D** — *Mối kết hợp tam phân (3 ngôi - Degree 3) giữa 3 thực thể*
>
> **Giải thích chi tiết:** Số ngôi của mối kết hợp (Degree) là tổng số thực thể tham gia. Mối kết hợp gồm 3 thực thể (Bác sĩ, Bệnh nhân, Thuốc) là mối kết hợp 3 ngôi (tam phân - Ternary relationship).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm với mối kết hợp nhị phân kép hoặc mối kết hợp yếu.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy khái niệm số ngôi (Degree) của mối kết hợp 3 thực thể trong mô hình ER`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục III.3.a*
> - 💡 **Mẹo hóa giải:** Số ngôi (Degree) = Số loại thực thể tham gia ➔ 3 thực thể tham gia = Mối kết hợp 3 ngôi (Tam phân).

---

#### Câu 38 (db-c1-d2-038) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống: Giả sử một sinh viên học môn "Cơ sở dữ liệu" phải học trước môn "Cơ sở lập trình". Mối liên hệ này trong mô hình mạng được gọi là gì?**

- **A.** Loại liên hệ đệ quy (MHOC_TRUOC / MHOC_SAU) giữa các mẫu tin
- **B.** Loại liên hệ vòng khép kín không xác định được chủ thành viên
- **C.** Hiện tượng sập nguồn dữ liệu khi hai mẫu tin trùng mã số khóa
- **D.** Mối quan hệ kế thừa hướng đối tượng giữa hai lớp phần mềm con

> **Đáp án đúng:** **A** — *Loại liên hệ đệ quy (MHOC_TRUOC / MHOC_SAU) giữa các mẫu tin*
>
> **Giải thích chi tiết:** Giáo trình Chương I mục 3.3 đưa ra ví dụ trực tiếp: Quan hệ điều kiện tiên quyết giữa môn học trước và môn học sau (MHoc_Truoc, MHoc_Sau) được biểu diễn bằng các loại liên hệ giữa mẫu tin môn học với nhau.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn mối liên hệ hướng đối tượng hoặc chu trình khép kín.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy quan hệ điều kiện tiên quyết môn học trong ví dụ kinh điển của mô hình mạng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục III.2.a*
> - 💡 **Mẹo hóa giải:** Ví dụ giáo trình: Môn học trước - Môn học sau = Liên hệ MHOC_TRUOC, MHOC_SAU trong mô hình mạng.

---

#### Câu 39 (db-c1-d2-039) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Điều kiện nào sau đây BẮT BUỘC phải thỏa mãn để một tập hợp các bảng được coi là một CSDL quan hệ chuẩn?**

- **A.** Số lượng cột của mỗi bảng bắt buộc phải bằng chính xác số lượng dòng của bảng đó
- **B.** Tất cả các cột trong bảng đều phải có kiểu dữ liệu là số nguyên không dấu 32-bit
- **C.** Mỗi bảng phải có tên phân biệt, các dòng là duy nhất và mỗi ô chỉ chứa một giá trị nguyên tố
- **D.** Mỗi bảng bắt buộc phải có ít nhất mười nghìn dòng dữ liệu thì mới được phép lưu

> **Đáp án đúng:** **C** — *Mỗi bảng phải có tên phân biệt, các dòng là duy nhất và mỗi ô chỉ chứa một giá trị nguyên tố*
>
> **Giải thích chi tiết:** Theo chuẩn mô hình quan hệ của E.F. Codd: Mỗi quan hệ có tên phân biệt, thứ tự dòng/cột không quan trọng, các bộ là duy nhất (không trùng nhau), và mỗi thuộc tính tại mỗi ô chỉ chứa một giá trị nguyên tố (Atomic - 1NF).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ bị lừa bởi các quy định ép buộc về kiểu số nguyên, số lượng dòng tối thiểu hoặc ma trận vuông.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy điều kiện chuẩn mực của bảng quan hệ (Relational Table) trong mô hình quan hệ`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục III.4.a*
> - 💡 **Mẹo hóa giải:** Chuẩn bảng quan hệ = Giá trị nguyên tố (Atomic) + Tên phân biệt + Dòng duy nhất (Tuple).

---

#### Câu 40 (db-c1-d2-040) — [🔴 KHÓ (VẬN DỤNG CAO / BẪY TƯ DUY)]

**Tình huống phân tích: Tại sao mô hình dữ liệu quan hệ (RDBMS) lại thống trị ngành công nghiệp phần mềm suốt hơn 40 năm qua?**

- **A.** Vì chính phủ các nước ban hành luật cấm các lập trình viên sử dụng bất kỳ mô hình nào khác
- **B.** Nhờ nền tảng toán học tập hợp vững chắc, tính độc lập dữ liệu cao và ngôn ngữ SQL chuẩn hóa
- **C.** Vì phần cứng máy tính chỉ có thể đọc được dữ liệu dạng bảng, không đọc được dữ liệu khác
- **D.** Vì chi phí trả lương cho lập trình viên SQL thấp hơn rất nhiều so với lập trình viên khác

> **Đáp án đúng:** **B** — *Nhờ nền tảng toán học tập hợp vững chắc, tính độc lập dữ liệu cao và ngôn ngữ SQL chuẩn hóa*
>
> **Giải thích chi tiết:** RDBMS thống trị hơn 4 thập kỷ nhờ: (1) Dựa trên cơ sở toán học tập hợp chặt chẽ; (2) Đảm bảo tính độc lập dữ liệu xuất sắc; (3) Ngôn ngữ SQL phi thủ tục trực quan, mạnh mẽ và được quốc tế chuẩn hóa (ANSI/ISO).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn các lý do ép buộc phi lý từ chính phủ hoặc phần cứng máy tính.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy động lực thống trị 4 thập kỷ của Mô hình dữ liệu quan hệ (RDBMS)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Hệ CSDL — Chương 1, Mục III.4.a & IV.1*
> - 💡 **Mẹo hóa giải:** Thành công của RDBMS = Nền tảng toán học tập hợp + Độc lập dữ liệu + Ngôn ngữ SQL chuẩn hóa.

---

### 📊 BẢNG ĐÁP ÁN NHANH — BỘ ĐỀ THI SỐ 2 (MÃ ĐỀ: DB-C1-D2)

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **1** | **B** | **11** | **A** | **21** | **A** | **31** | **A** |
| **2** | **A** | **12** | **D** | **22** | **B** | **32** | **D** |
| **3** | **C** | **13** | **A** | **23** | **C** | **33** | **A** |
| **4** | **D** | **14** | **D** | **24** | **D** | **34** | **B** |
| **5** | **A** | **15** | **B** | **25** | **C** | **35** | **D** |
| **6** | **C** | **16** | **C** | **26** | **A** | **36** | **C** |
| **7** | **B** | **17** | **B** | **27** | **B** | **37** | **D** |
| **8** | **D** | **18** | **A** | **28** | **D** | **38** | **A** |
| **9** | **C** | **19** | **D** | **29** | **B** | **39** | **C** |
| **10** | **B** | **20** | **C** | **30** | **C** | **40** | **B** |


