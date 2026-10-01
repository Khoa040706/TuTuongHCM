# TỔNG HỢP 2 BỘ ĐỀ THI TRẮC NGHIỆM CHƯƠNG IV: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
*(Tổng cộng 80 câu hỏi học thuật chuẩn mực — Cơ cấu: 30% Dễ - 40% Trung bình - 30% Khó)*

- **Môn học:** Phân tích thiết kế và yêu cầu (Requirements Analysis and Design)
- **Chương:** Chapter 4: Discovery Phase I — Baseline, Elicitation & Use Case Foundations
- **Quy mô:** 2 Bộ đề độc lập (Đề 1 & Đề 2), mỗi đề đúng 40 câu hỏi cố định (Tổng = 80 câu biên soạn mới 100%, 0% trùng lặp)
- **Tỷ lệ độ khó:** 12 Dễ (30%) — 16 Trung bình (40%) — 12 Khó (30%) cho từng đề
- **Tỷ lệ nguồn:** 36 câu Inside (giáo trình ad-ch4.js) + 4 câu Outside (thực tế dự án Baseline, Elicitation & Use Case)
- **Quy chuẩn kỹ thuật:** Đáp ứng độ lệch chiều dài phương án $\Delta L = L_{\max} - L_{\min} \le 15$ ký tự trên toàn bộ 80 câu
- **Đa dạng hình thức:** Trắc nghiệm chọn đúng, Chọn sai/ngoại lệ (**KHÔNG/SAI**), Tình huống thực tế (Case study), Ghép cặp phân loại (Matching), Điền khuyết/Trình tự logic (Fill-in)

---

## BỘ ĐỀ THI SỐ 1 (MÃ ĐỀ: ad-c4-d1)

*Bộ đề số 1 tập trung khảo sát bản chất Baseline là Snapshot & Stable Reference, chu trình 5 hoạt động Discovery (Elicit -> Analyze -> Specify -> Validate -> Manage), phân tích hành vi Behavioral Analysis (WHAT) vs Structural Analysis (HOW), 4 thành phần chuẩn mực của Use Case Diagram, 3 cấp độ mô tả và 9 trường Fully-Dressed, bài tập Thư viện (Reserve Book) và kỹ nghệ phân gói Packages.*

---

#### Câu 1 (ad-c4-d1-001) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong quản trị yêu cầu phần mềm, khái niệm 'Baseline' (Mốc cơ sở) được định nghĩa chuẩn xác nhất là gì?**

- **A.** Một ảnh chụp trạng thái (Snapshot) đã thống nhất dùng làm mốc tham chiếu ổn định để theo dõi
- **B.** Một bản hợp đồng pháp lý bắt buộc khách hàng phải thanh toán toàn bộ chi phí dự án ngay từ đầu
- **C.** Một tập hợp các đoạn mã nguồn lập trình đã được tối ưu hóa hiệu năng và đóng gói thành tệp exe
- **D.** Một sơ đồ mạng máy tính nội bộ thể hiện cách thức kết nối các máy chủ dữ liệu của doanh nghiệp

> **Đáp án đúng:** **A** — *Một ảnh chụp trạng thái (Snapshot) đã thống nhất dùng làm mốc tham chiếu ổn định để theo dõi*
>
> **Giải thích chi tiết:** Baseline là một ảnh chụp trạng thái (Snapshot) đã được các bên liên quan chính thức thống nhất, dùng làm mốc tham chiếu ổn định (Stable Reference) để so sánh tiến độ và kiểm soát thay đổi.

---

#### Câu 2 (ad-c4-d1-002) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Ba yếu tố nền tảng cốt lõi cấu thành nên hồ sơ Baseline ban đầu của một dự án phần mềm bao gồm:**

- **A.** Project Scope (Phạm vi dự án), Vision (Tầm nhìn nghiệp vụ) và Initial Requirements (Tập yêu cầu)
- **B.** Source Code (Mã nguồn phần mềm), Test Script (Kịch bản kiểm thử) và Deployment Server (Máy chủ)
- **C.** Database Schema (Lược đồ dữ liệu), Network Topology (Tô-pô mạng) và Firewall Rule (Tường lửa)
- **D.** User Interface Design (Giao diện đồ họa), CSS Style Guide (Bảng kiểu) và HTML Template (Khuôn mẫu)

> **Đáp án đúng:** **A** — *Project Scope (Phạm vi dự án), Vision (Tầm nhìn nghiệp vụ) và Initial Requirements (Tập yêu cầu)*
>
> **Giải thích chi tiết:** Hồ sơ Baseline ban đầu bao gồm 3 thành tố: Project Scope (Phạm vi làm và không làm), Vision (Tầm nhìn và giá trị nghiệp vụ), và Initial Requirements (Tập yêu cầu tính năng ứng viên ban đầu).

---

#### Câu 3 (ad-c4-d1-003) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về mục đích và nguyên tắc quản trị Baseline trong dự án?**

- **A.** Baseline là tài liệu cố định bất di bất dịch và tuyệt đối không bao giờ được phép thay đổi
- **B.** Baseline là công cụ then chốt giúp quản trị và ngăn chặn hiện tượng phình to phạm vi vô hạn
- **C.** Baseline cung cấp thước đo tiến độ đáng tin cậy để đo lường mức độ hoàn thành của phần mềm
- **D.** Baseline là cơ sở căn chỉnh kỳ vọng giữa khách hàng và đội ngũ phát triển trước khi thực thi

> **Đáp án đúng:** **A** — *Baseline là tài liệu cố định bất di bất dịch và tuyệt đối không bao giờ được phép thay đổi*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì Baseline KHÔNG phải là đóng băng bất di bất dịch. Khi có yêu cầu thay đổi hợp lý, dự án vẫn cập nhật Baseline thông qua quy trình kiểm soát thay đổi (Change Control) chính thức.

---

#### Câu 4 (ad-c4-d1-004) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Khi dự án đã chính thức Set Baseline, bất kỳ sự thay đổi yêu cầu nào phát sinh bắt buộc phải thông qua cơ chế nào?**

- **A.** Quy trình kiểm soát thay đổi (Change Control) và được phê duyệt bởi Change Control Board
- **B.** Thỏa thuận miệng riêng lẻ giữa lập trình viên chính và người đại diện của phía khách hàng
- **C.** Quyết định tự ý chỉnh sửa mã nguồn trực tiếp trên máy chủ sản phẩm của chuyên viên kiểm thử
- **D.** Tự động chấp nhận toàn bộ mà không cần phân tích chi phí, thời gian và rủi ro ảnh hưởng

> **Đáp án đúng:** **A** — *Quy trình kiểm soát thay đổi (Change Control) và được phê duyệt bởi Change Control Board*
>
> **Giải thích chi tiết:** Sau khi đã chốt Baseline, mọi yêu cầu thay đổi (Change Request) đều phải trải qua quy trình Change Control chính thức, được phân tích tác động và phê duyệt bởi Hội đồng kiểm soát thay đổi (CCB).

---

#### Câu 5 (ad-c4-d1-005) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Sau khi chốt Baseline, khách hàng liên tục yêu cầu thêm tính năng mới mà không tăng ngân sách. Hiện tượng này gọi là gì?**

- **A.** Scope Creep (Hiện tượng phình to phạm vi dự án một cách mất kiểm soát do thiếu Change Control)
- **B.** Refactoring (Quá trình tái cấu trúc mã nguồn bên trong nhằm nâng cao tính mở rộng của hệ thống)
- **C.** Regression Testing (Quy trình kiểm thử hồi quy tự động nhằm xác minh mã nguồn không phát sinh lỗi)
- **D.** Continuous Integration (Hoạt động tích hợp mã nguồn tự động diễn ra liên tục trên môi trường mây)

> **Đáp án đúng:** **A** — *Scope Creep (Hiện tượng phình to phạm vi dự án một cách mất kiểm soát do thiếu Change Control)*
>
> **Giải thích chi tiết:** Hiện tượng khách hàng liên tục đưa thêm tính năng mới vào dự án mà không điều chỉnh thời gian, ngân sách và nguồn lực được gọi là Scope Creep (Phình to phạm vi dự án).

---

#### Câu 6 (ad-c4-d1-006) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong tiến trình phát triển Unified Process (UP), giai đoạn Discovery Phase nằm ở vị trí nào?**

- **A.** Nằm ở giai đoạn chuyển tiếp then chốt từ cuối pha Inception sang đầu pha Elaboration
- **B.** Nằm ở giai đoạn cuối cùng của pha Transition khi sản phẩm chuẩn bị bàn giao cho khách
- **C.** Nằm hoàn toàn ở giữa pha Construction khi các lập trình viên đang tiến hành viết mã
- **D.** Nằm tách biệt bên ngoài và chỉ bắt đầu sau khi toàn bộ phần mềm đã được triển khai xong

> **Đáp án đúng:** **A** — *Nằm ở giai đoạn chuyển tiếp then chốt từ cuối pha Inception sang đầu pha Elaboration*
>
> **Giải thích chi tiết:** Discovery Phase là giai đoạn bản lề chuyển tiếp giữa cuối pha Khởi động (Inception) và đầu pha Tinh chế (Elaboration) trong Unified Process để đào sâu khám phá yêu cầu.

---

#### Câu 7 (ad-c4-d1-007) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Mục tiêu quan trọng hàng đầu của giai đoạn khám phá yêu cầu (Discovery Phase) là gì?**

- **A.** Thấu hiểu sâu sắc miền bài toán nghiệp vụ và làm rõ chi tiết các nhu cầu tiềm ẩn của người dùng
- **B.** Cài đặt hoàn chỉnh hệ điều hành máy chủ và phân bổ địa chỉ IP tĩnh cho toàn bộ mạng nội bộ
- **C.** Viết toàn bộ mã nguồn lập trình phần mềm để chạy thử nghiệm các tính năng trên máy tính cá nhân
- **D.** Thiết kế chi tiết cấu trúc phần cứng của bảng vi mạch điện tử sẽ dùng cho thiết bị đầu cuối

> **Đáp án đúng:** **A** — *Thấu hiểu sâu sắc miền bài toán nghiệp vụ và làm rõ chi tiết các nhu cầu tiềm ẩn của người dùng*
>
> **Giải thích chi tiết:** Mục tiêu cốt lõi của Discovery Phase là thấu hiểu sâu sắc miền bài toán (Understand the Problem Domain) và làm rõ các nhu cầu nghiệp vụ thực sự của các bên liên quan.

---

#### Câu 8 (ad-c4-d1-008) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [FILL-BLANK]

**Chu trình lặp 5 hoạt động cốt lõi của Discovery Phase diễn ra theo trình tự chuẩn mực nào sau đây?**

- **A.** Elicit (Khơi gợi) -> Analyze (Phân tích) -> Specify (Đặc tả) -> Validate (Xác thực) -> Manage
- **B.** Design (Thiết kế) -> Code (Lập trình) -> Test (Kiểm thử) -> Deploy (Triển khai) -> Maintenance
- **C.** Planning (Lập kế hoạch) -> Modeling (Mô hình hóa) -> Estimating (Ước lượng) -> Billing -> Sign
- **D.** Interview (Phỏng vấn) -> Coding (Viết mã) -> Shipping (Giao hàng) -> Training (Đào tạo) -> End

> **Đáp án đúng:** **A** — *Elicit (Khơi gợi) -> Analyze (Phân tích) -> Specify (Đặc tả) -> Validate (Xác thực) -> Manage*
>
> **Giải thích chi tiết:** Chu trình lặp 5 hoạt động chuẩn của Discovery Phase: 1. Elicit (Khơi gợi), 2. Analyze (Phân tích), 3. Specify (Đặc tả), 4. Validate (Xác thực), 5. Manage (Quản lý).

---

#### Câu 9 (ad-c4-d1-009) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Trong chu trình Discovery, hoạt động 'Requirements Elicitation' (Khơi gợi yêu cầu) có bản chất là:**

- **A.** Quá trình tích cực tìm kiếm, phát hiện và thu thập các nhu cầu nghiệp vụ từ nhiều nguồn khác nhau
- **B.** Quá trình biên dịch mã nguồn từ ngôn ngữ bậc cao sang ngôn ngữ máy để thực thi trên hệ điều hành
- **C.** Quá trình kiểm thử tải nhằm đánh giá khả năng chịu đựng của máy chủ khi có triệu người truy cập
- **D.** Quá trình sao lưu toàn bộ dữ liệu cơ sở dữ liệu lên đám mây nhằm đề phòng sự cố hỏng hóc vật lý

> **Đáp án đúng:** **A** — *Quá trình tích cực tìm kiếm, phát hiện và thu thập các nhu cầu nghiệp vụ từ nhiều nguồn khác nhau*
>
> **Giải thích chi tiết:** Requirements Elicitation là quá trình chủ động tìm kiếm, khám phá và khơi gợi các nhu cầu tiềm ẩn của Stakeholders thông qua phỏng vấn, workshop, quan sát, khảo sát.

---

#### Câu 10 (ad-c4-d1-010) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về các sản phẩm bàn giao (Deliverables) của Discovery Phase?**

- **A.** Sản phẩm bàn giao chính của Discovery Phase là bộ mã nguồn hoàn chỉnh đã qua biên dịch xong
- **B.** Sản phẩm bàn giao bao gồm Mô hình ca sử dụng (Use Case Model) đã được cập nhật hoàn chỉnh
- **C.** Sản phẩm bàn giao bao gồm Tập tài liệu đặc tả ca sử dụng chi tiết (Use Case Descriptions)
- **D.** Sản phẩm bàn giao bao gồm Tài liệu đặc tả bổ sung về yêu cầu phi chức năng (Supplementary Spec)

> **Đáp án đúng:** **A** — *Sản phẩm bàn giao chính của Discovery Phase là bộ mã nguồn hoàn chỉnh đã qua biên dịch xong*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì Discovery Phase tập trung vào khám phá và phân tích yêu cầu (Use Case Model, Use Case Descriptions, Supplementary Specs), chưa phải giai đoạn tạo ra mã nguồn hoàn chỉnh.

---

#### Câu 11 (ad-c4-d1-011) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Khi phân tích yêu cầu, Phòng Bán hàng muốn quy trình duyệt đơn nhanh, còn Phòng Kế toán đòi hỏi kiểm soát chặt chẽ. BA nên làm gì?**

- **A.** Tổ chức buổi hội thảo hòa giải (Conflict Resolution Workshop) để phân tích tác động và tìm điểm cân bằng
- **B.** Lập tức chọn làm theo ý của Phòng Bán hàng và bỏ qua toàn bộ các ý kiến phản ánh từ Phòng Kế toán
- **C.** Lập tức chọn làm theo ý của Phòng Kế toán và từ chối hỗ trợ tiếp nhận mọi yêu cầu từ Phòng Bán hàng
- **D.** Hủy bỏ toàn bộ dự án phần mềm vì cho rằng hai phòng ban này có quan điểm mâu thuẫn không thể hàn gắn

> **Đáp án đúng:** **A** — *Tổ chức buổi hội thảo hòa giải (Conflict Resolution Workshop) để phân tích tác động và tìm điểm cân bằng*
>
> **Giải thích chi tiết:** Khi có xung đột yêu cầu giữa các bên liên quan, vai trò của BA là tổ chức hội thảo giải quyết xung đột (Conflict Resolution Workshop), phân tích trade-off và tìm giải pháp hài hòa đáp ứng mục tiêu chung của tổ chức.

---

#### Câu 12 (ad-c4-d1-012) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Bản chất cốt lõi của phân tích hành vi (Behavioral Analysis) trong kỹ nghệ yêu cầu là gì?**

- **A.** Mô tả hệ thống làm CÁI GÌ (WHAT the system does) từ góc nhìn quan sát bên ngoài của người sử dụng
- **B.** Mô tả hệ thống được lập trình NHƯ THẾ NÀO (HOW it is built) ở mức cấu trúc mã nguồn bên trong
- **C.** Mô tả chi tiết cấu trúc các bảng dữ liệu quan hệ và các khóa ngoại liên kết trong hệ quản trị
- **D.** Mô tả cách thức tối ưu hóa bộ nhớ đệm RAM và tần số xung nhịp của bộ vi xử lý trên bo mạch chủ

> **Đáp án đúng:** **A** — *Mô tả hệ thống làm CÁI GÌ (WHAT the system does) từ góc nhìn quan sát bên ngoài của người sử dụng*
>
> **Giải thích chi tiết:** Behavioral Analysis tập trung vào góc nhìn Black-box: mô tả hệ thống làm CÁI GÌ (WHAT) để phục vụ người dùng, hoàn toàn độc lập với chi tiết cài đặt kỹ thuật bên trong (HOW).

---

#### Câu 13 (ad-c4-d1-013) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Điểm khác biệt căn bản nhất giữa Phân tích hành vi (Behavioral) và Phân tích cấu trúc (Structural) là:**

- **A.** Behavioral xem hệ thống là Hộp đen (Black-box); Structural phân tích các thực thể bên trong (White-box)
- **B.** Behavioral dùng cho lập trình hướng đối tượng; còn Structural chỉ áp dụng cho lập trình thủ tục cũ
- **C.** Behavioral chỉ tạo ra mã nguồn phần cứng; còn Structural chỉ tập trung xây dựng cơ sở dữ liệu đám mây
- **D.** Behavioral không cần sự tham gia của con người; còn Structural yêu cầu toàn bộ khách hàng phải viết mã

> **Đáp án đúng:** **A** — *Behavioral xem hệ thống là Hộp đen (Black-box); Structural phân tích các thực thể bên trong (White-box)*
>
> **Giải thích chi tiết:** Behavioral Analysis nhìn hệ thống dưới dạng Black-box (hành vi bên ngoài, tương tác với Actor). Structural Analysis nhìn dưới dạng White-box (cấu trúc bên trong, Classes, Objects, Relationships).

---

#### Câu 14 (ad-c4-d1-014) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Bốn thành phần ký hiệu trực quan chuẩn mực cấu thành nên một Biểu đồ Ca sử dụng (Use Case Diagram) là:**

- **A.** Actor (Tác nhân), Use Case (Ca sử dụng), Association (Đường liên kết) và System Boundary (Ranh giới)
- **B.** Entity (Thực thể), Attribute (Thuộc tính), Relationship (Mối quan hệ) và Primary Key (Khóa chính)
- **C.** Class (Lớp), Method (Phương thức), Property (Thuộc tính) và Constructor (Hàm khởi tạo đối tượng)
- **D.** State (Trạng thái), Transition (Chuyển trạng thái), Event (Sự kiện) và Guard Condition (Điều kiện)

> **Đáp án đúng:** **A** — *Actor (Tác nhân), Use Case (Ca sử dụng), Association (Đường liên kết) và System Boundary (Ranh giới)*
>
> **Giải thích chi tiết:** Bốn thành phần chuẩn UML của Use Case Diagram gồm: Actor (người/hệ thống ngoài), Use Case (hình elip), Association (đường nối) và System Boundary (khung chữ nhật xác định phạm vi hệ thống).

---

#### Câu 15 (ad-c4-d1-015) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về các quy tắc biểu diễn ký hiệu trong Use Case Diagram?**

- **A.** Actor đại diện cho một con người cụ thể bằng xương bằng thịt có họ và tên đầy đủ trong công ty
- **B.** Tên của Use Case bắt buộc phải bắt đầu bằng một Động từ hành động kết hợp với một Cụm danh từ
- **C.** System Boundary phân định rõ ràng những gì nằm trong hệ thống và những tác nhân nằm bên ngoài
- **D.** Đường liên kết Association thể hiện mối quan hệ giao tiếp hai chiều giữa Actor và Use Case tương ứng

> **Đáp án đúng:** **A** — *Actor đại diện cho một con người cụ thể bằng xương bằng thịt có họ và tên đầy đủ trong công ty*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì Actor trong UML đại diện cho VAI TRÒ (Role) mà người hoặc hệ thống ngoài đảm nhận khi tương tác với hệ thống, KHÔNG đại diện cho một cá nhân cụ thể.

---

#### Câu 16 (ad-c4-d1-016) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Tại sao Biểu đồ Ca sử dụng (Use Case Diagram) lại được ví như 'Mục lục' (Table of Contents) của tài liệu yêu cầu?**

- **A.** Vì nó cung cấp cái nhìn tổng quan toàn cảnh về phạm vi chức năng mà không đi sâu vào chi tiết bước thực hiện
- **B.** Vì nó liệt kê số trang giấy chính xác của từng chương tài liệu để người đọc dễ tra cứu mục lục
- **C.** Vì nó chứa đựng toàn bộ các câu lệnh mã nguồn lập trình và các hàm thuật toán xử lý dữ liệu phức tạp
- **D.** Vì nó tự động tạo ra một cuốn sách giáo khoa hoàn chỉnh giúp sinh viên vượt qua kỳ thi tốt nghiệp đại học

> **Đáp án đúng:** **A** — *Vì nó cung cấp cái nhìn tổng quan toàn cảnh về phạm vi chức năng mà không đi sâu vào chi tiết bước thực hiện*
>
> **Giải thích chi tiết:** Use Case Diagram đóng vai trò như Mục lục (Table of Contents): cung cấp bức tranh toàn cảnh cấp cao (WHAT) về mọi dịch vụ mà hệ thống cung cấp mà không làm rối mắt người đọc bằng chi tiết kịch bản.

---

#### Câu 17 (ad-c4-d1-017) — [🔴 KHÓ (VẬN DỤNG CAO)] [MATCHING]

**Hãy chọn phương án GHÉP CẶP CHÍNH XÁC giữa thành phần Use Case Diagram và ý nghĩa ngữ nghĩa chuẩn mực của nó:**

- **A.** 1-Actor: Vai trò bên ngoài; 2-Use Case: Mục tiêu nghiệp vụ; 3-System Boundary: Ranh giới phạm vi phần mềm
- **B.** 1-Actor: Cơ sở dữ liệu; 2-Use Case: Bảng tính toán; 3-System Boundary: Tường lửa bảo vệ máy chủ đám mây
- **C.** 1-Actor: Dòng lệnh mã nguồn; 2-Use Case: Biến số cục bộ; 3-System Boundary: Thư mục chứa tệp tin dự án
- **D.** 1-Actor: Màn hình cảm ứng; 2-Use Case: Bàn phím máy tính; 3-System Boundary: Dây cáp kết nối mạng diện rộng

> **Đáp án đúng:** **A** — *1-Actor: Vai trò bên ngoài; 2-Use Case: Mục tiêu nghiệp vụ; 3-System Boundary: Ranh giới phạm vi phần mềm*
>
> **Giải thích chi tiết:** Ghép cặp chuẩn xác: 1-Actor: Vai trò tương tác bên ngoài; 2-Use Case: Mục tiêu nghiệp vụ mang lại giá trị quan sát được; 3-System Boundary: Khung ranh giới phân định phạm vi phần mềm.

---

#### Câu 18 (ad-c4-d1-018) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Theo chuẩn Alistair Cockburn và Unified Process, có 3 cấp độ mô tả Use Case Description lần lượt là:**

- **A.** Brief (Tóm tắt ngắn gọn), Casual (Không chính thức dạng văn xuôi) và Fully-Dressed (Hoàn chỉnh chi tiết)
- **B.** Simple (Đơn giản mức 1), Complex (Phức tạp mức 2) và Overloaded (Quá tải mức 3 không thể biên dịch)
- **C.** Draft (Bản nháp ban đầu), Final (Bản cuối hoàn tất) và Archived (Bản lưu trữ hồ sơ đã bị tiêu hủy)
- **D.** Internal (Nội bộ nhóm code), External (Cho đối tác xem) và Public (Công khai cho toàn bộ xã hội đọc)

> **Đáp án đúng:** **A** — *Brief (Tóm tắt ngắn gọn), Casual (Không chính thức dạng văn xuôi) và Fully-Dressed (Hoàn chỉnh chi tiết)*
>
> **Giải thích chi tiết:** Ba cấp độ mô tả Use Case chuẩn mực gồm: Brief (Tóm tắt 1 đoạn văn ngắn), Casual (Vài đoạn văn tự do bao quát các kịch bản), Fully-Dressed (Cấu trúc khuôn mẫu 9-10 trường chi tiết nhất).

---

#### Câu 19 (ad-c4-d1-019) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Đặc điểm nổi bật nhất của cấp độ mô tả ca sử dụng dạng 'Brief Description' là gì?**

- **A.** Một đoạn văn ngắn từ hai đến ba câu tóm tắt tác nhân chính, mục tiêu nghiệp vụ và luồng sự kiện chủ đạo
- **B.** Một cuốn sách hướng dẫn dày hàng trăm trang chứa đầy đủ chi tiết mã nguồn và hình ảnh chụp màn hình
- **C.** Một bảng mã nhị phân chứa các số không và một được nạp trực tiếp vào thanh ghi của bộ xử lý máy tính
- **D.** Một hợp đồng pháp lý có công chứng xác nhận quyền sở hữu trí tuệ của nhóm lập trình viên phần mềm

> **Đáp án đúng:** **A** — *Một đoạn văn ngắn từ hai đến ba câu tóm tắt tác nhân chính, mục tiêu nghiệp vụ và luồng sự kiện chủ đạo*
>
> **Giải thích chi tiết:** Brief Description là bản tóm tắt súc tích (1 đoạn văn ngắn 2-3 câu), phác thảo rõ Actor chính, mục tiêu của ca sử dụng và luồng tương tác cốt lõi trong giai đoạn đầu dự án.

---

#### Câu 20 (ad-c4-d1-020) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong khuôn mẫu mô tả Fully-Dressed, trường 'Preconditions' (Điều kiện tiên quyết) có ý nghĩa như thế nào?**

- **A.** Xác định các điều kiện trạng thái bắt buộc hệ thống phải bảo đảm luôn ĐÚNG trước khi Use Case bắt đầu
- **B.** Xác định các điều kiện trạng thái hệ thống phải cam kết hoàn thành sau khi Use Case kết thúc thành công
- **C.** Xác định tên họ đầy đủ của người lập trình viên chịu trách nhiệm viết mã nguồn cho ca sử dụng này
- **D.** Xác định tổng số tiền kinh phí mà khách hàng phải chi trả thêm nếu ca sử dụng phát sinh lỗi kỹ thuật

> **Đáp án đúng:** **A** — *Xác định các điều kiện trạng thái bắt buộc hệ thống phải bảo đảm luôn ĐÚNG trước khi Use Case bắt đầu*
>
> **Giải thích chi tiết:** Preconditions (Điều kiện tiên quyết) nêu rõ những điều kiện bắt buộc phải thỏa mãn trước khi Use Case có thể được kích hoạt (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống).

---

#### Câu 21 (ad-c4-d1-021) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Trường 'Postconditions' (hay Success Guarantees) trong tài liệu đặc tả ca sử dụng cam kết điều gì?**

- **A.** Trạng thái dữ liệu và thế giới thực mà hệ thống bảo đảm đạt được sau khi ca sử dụng kết thúc thành công
- **B.** Thời gian bảo hành miễn phí của nhà phát triển phần mềm trong vòng mười hai tháng sau khi triển khai
- **C.** Số lượng bản ghi dữ liệu tối đa mà người dùng được phép xóa bỏ khỏi cơ sở dữ liệu mà không bị phạt
- **D.** Mức độ bồi thường thiệt hại tài chính nếu hệ thống máy chủ bị sét đánh gây mất kết nối mạng Internet

> **Đáp án đúng:** **A** — *Trạng thái dữ liệu và thế giới thực mà hệ thống bảo đảm đạt được sau khi ca sử dụng kết thúc thành công*
>
> **Giải thích chi tiết:** Postconditions (Điều kiện sau thành công) xác định trạng thái ổn định của hệ thống sau khi Use Case hoàn thành (ví dụ: Đơn hàng đã tạo, tiền đã trừ, email xác nhận đã gửi).

---

#### Câu 22 (ad-c4-d1-022) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về cấu trúc Luồng sự kiện chính (Main Flow) và Luồng thay thế (Alternative Flow)?**

- **A.** Luồng sự kiện chính (Main Flow) luôn luôn bao gồm cả các kịch bản người dùng nhập sai mật khẩu và hủy đơn
- **B.** Luồng sự kiện chính (Main Flow hay Happy Path) mô tả kịch bản lý tưởng nhất khi mọi việc diễn ra suôn sẻ
- **C.** Luồng thay thế (Alternative Flow) mô tả các nhánh rẽ nghiệp vụ hợp lệ khác để đi đến mục tiêu hoàn thành
- **D.** Luồng ngoại lệ (Exception Flow) xử lý các tình huống lỗi phát sinh khiến ca sử dụng không thể về đích

> **Đáp án đúng:** **A** — *Luồng sự kiện chính (Main Flow) luôn luôn bao gồm cả các kịch bản người dùng nhập sai mật khẩu và hủy đơn*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì Main Flow (Happy Path) chỉ mô tả kịch bản lý tưởng nhất khi không có bất kỳ sai sót nào. Các tình huống người dùng nhập sai thông tin hay hủy giao dịch thuộc về Alternative/Exception Flows.

---

#### Câu 23 (ad-c4-d1-023) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Tại sao trong kỹ nghệ yêu cầu, BA nên áp dụng nguyên tắc tách rời Quy tắc nghiệp vụ (Business Rules Decoupling)?**

- **A.** Giúp kịch bản Use Case gọn gàng, độc lập với các quy tắc nghiệp vụ thường xuyên thay đổi theo chính sách
- **B.** Giúp hệ thống tự động tăng tốc độ xử lý của chip nhớ máy chủ lên gấp mười lần mà không cần nâng cấp
- **C.** Giúp loại bỏ hoàn toàn trách nhiệm giải trình của giám đốc dự án khi phần mềm bị trễ hạn bàn giao
- **D.** Giúp khách hàng không cần phải kiểm thử lại các chức năng trước khi đưa phần mềm vào vận hành thực tế

> **Đáp án đúng:** **A** — *Giúp kịch bản Use Case gọn gàng, độc lập với các quy tắc nghiệp vụ thường xuyên thay đổi theo chính sách*
>
> **Giải thích chi tiết:** Tách rời Quy tắc nghiệp vụ (Business Rules Decoupling) giúp Use Case tập trung vào luồng tương tác thuần túy, tránh bị phình to và dễ bảo trì khi chính sách công ty (như biểu phí, công thức giảm giá) thay đổi.

---

#### Câu 24 (ad-c4-d1-024) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Khi viết đặc tả ca sử dụng 'Place Order', ngân hàng từ chối thanh toán thẻ tín dụng do hết hạn mức. Tình huống này nên xử lý ở đâu?**

- **A.** Xây dựng thành một Luồng ngoại lệ (Exception Flow) thông báo lỗi cụ thể và cho phép người dùng đổi thẻ khác
- **B.** Lập tức ghi đè vào bước số một của Luồng chính (Main Flow) và ép buộc người dùng khởi động lại máy tính
- **C.** Bỏ qua lỗi này và coi như giao dịch đã thanh toán thành công để tiếp tục xuất kho gửi hàng cho người mua
- **D.** Tự động xóa vĩnh viễn tài khoản của khách hàng khỏi hệ thống và đưa vào danh sách đen của cảnh sát mạng

> **Đáp án đúng:** **A** — *Xây dựng thành một Luồng ngoại lệ (Exception Flow) thông báo lỗi cụ thể và cho phép người dùng đổi thẻ khác*
>
> **Giải thích chi tiết:** Thẻ tín dụng bị từ chối là tình huống lỗi không thể hoàn tất mục tiêu chính theo Happy Path, do đó phải được ghi nhận và xử lý trong Exception Flow (Luồng ngoại lệ).

---

#### Câu 25 (ad-c4-d1-025) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong bài toán Hệ thống Quản lý Thư viện (Library System), hai Tác nhân (Actors) chính thường tương tác với hệ thống là:**

- **A.** Patron (Độc giả mượn sách) và Librarian (Thủ thư quản lý kho sách và cấp phát tài liệu cho người dùng)
- **B.** Database Administrator (Quản trị viên dữ liệu) và Network Engineer (Kỹ sư quản lý đường truyền mạng)
- **C.** Author (Tác giả viết sách) và Publisher (Nhà xuất bản in ấn sách giấy thương mại trên thị trường)
- **D.** Security Guard (Bảo vệ trông xe) và Janitor (Nhân viên tạp vụ chịu trách nhiệm dọn dẹp vệ sinh phòng)

> **Đáp án đúng:** **A** — *Patron (Độc giả mượn sách) và Librarian (Thủ thư quản lý kho sách và cấp phát tài liệu cho người dùng)*
>
> **Giải thích chi tiết:** Trong bài tập phân tích Thư viện chuẩn mực, hai tác nhân người dùng chính là Patron (Độc giả sử dụng dịch vụ) và Librarian (Thủ thư quản lý nghiệp vụ và tài liệu).

---

#### Câu 26 (ad-c4-d1-026) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Điều kiện tiên quyết (Precondition) mang tính cốt lõi của Ca sử dụng 'Reserve Book' (Đặt giữ sách trước) là gì?**

- **A.** Độc giả đã đăng nhập thành công và cuốn sách mong muốn hiện tại ĐÃ ĐƯỢC MƯỢN HẾT bởi người khác
- **B.** Độc giả phải đến tận quầy thủ thư và nộp khoản tiền mặt tương đương giá trị bán lẻ của cuốn sách đó
- **C.** Cuốn sách phải đang còn sẵn ít nhất một trăm bản in trên giá sách để độc giả tùy ý lựa chọn mang về
- **D.** Độc giả phải là giảng viên đại học có học hàm tiến sĩ trở lên và có thẻ công tác tại cơ quan bộ ngành

> **Đáp án đúng:** **A** — *Độc giả đã đăng nhập thành công và cuốn sách mong muốn hiện tại ĐÃ ĐƯỢC MƯỢN HẾT bởi người khác*
>
> **Giải thích chi tiết:** Ca sử dụng 'Reserve Book' (Đặt trước) chỉ có ý nghĩa khi sách không còn sẵn trên kệ (tất cả các bản sao đều đã bị mượn hết bởi độc giả khác).

---

#### Câu 27 (ad-c4-d1-027) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi phân tích ca sử dụng 'Reserve Book' trong Hệ thống Quản lý Thư viện?**

- **A.** Độc giả có thể thực hiện đặt giữ trước (Reserve Book) ngay cả khi cuốn sách đang có sẵn trên giá thư viện
- **B.** Hệ thống sẽ thêm độc giả vào danh sách chờ (Waitlist) theo nguyên tắc thứ tự ưu tiên ai đến trước được trước
- **C.** Khi cuốn sách được độc giả khác mang trả, hệ thống sẽ tự động gửi thông báo nhận sách tới độc giả đặt trước
- **D.** Nếu độc giả không đến nhận sách trong thời hạn quy định, quyền ưu tiên mượn sách sẽ chuyển cho người kế tiếp

> **Đáp án đúng:** **A** — *Độc giả có thể thực hiện đặt giữ trước (Reserve Book) ngay cả khi cuốn sách đang có sẵn trên giá thư viện*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì sách có sẵn trên kệ thì độc giả mượn trực tiếp (Borrow Book), không ai cho phép Reserve Book khi sách đang rảnh rỗi trên giá.

---

#### Câu 28 (ad-c4-d1-028) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Khi độc giả thực hiện 'Reserve Book', hệ thống phát hiện độc giả này đã có 3 yêu cầu đặt trước đang chờ (đạt giới hạn tối đa). Hệ thống nên xử lý thế nào?**

- **A.** Kích hoạt Luồng ngoại lệ thông báo từ chối đặt trước do đã đạt hạn mức tối đa theo quy định của thư viện
- **B.** Tự động xóa bỏ ngẫu nhiên một cuốn sách độc giả đã mượn tuần trước để dành chỗ cho yêu cầu đặt trước mới
- **C.** Lập tức khóa vĩnh viễn thẻ thư viện của độc giả và phát còi báo động khẩn cấp tại phòng đọc thư viện
- **D.** Bỏ qua quy định giới hạn và cho phép độc giả đặt trước vô hạn số lượng sách để nâng cao trải nghiệm vui vẻ

> **Đáp án đúng:** **A** — *Kích hoạt Luồng ngoại lệ thông báo từ chối đặt trước do đã đạt hạn mức tối đa theo quy định của thư viện*
>
> **Giải thích chi tiết:** Vi phạm quy tắc nghiệp vụ về giới hạn số lượng đặt trước là một kịch bản ngoại lệ (Exception Flow): hệ thống từ chối yêu cầu, giải thích lý do rõ ràng và giữ nguyên trạng thái dữ liệu an toàn.

---

#### Câu 29 (ad-c4-d1-029) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Một BA mới vào nghề vẽ các Use Case trong hệ thống Thư viện gồm: 'Click nút Search', 'Nhập từ khóa', 'Hiện kết quả'. Lỗi thiết kế này là gì?**

- **A.** Lỗi phân rã chức năng quá chi tiết theo giao diện đồ họa (UI Pollution & Functional Decomposition)
- **B.** Lỗi thiết kế hệ thống theo mô hình lập trình hướng khía cạnh (Aspect-Oriented Programming Bug)
- **C.** Lỗi cấu hình sai xung nhịp vi xử lý máy chủ khi biên dịch mã nguồn trên môi trường thực tế
- **D.** Lỗi không cài đặt chứng chỉ bảo mật số SSL cho tên miền của cổng thông tin thư viện điện tử

> **Đáp án đúng:** **A** — *Lỗi phân rã chức năng quá chi tiết theo giao diện đồ họa (UI Pollution & Functional Decomposition)*
>
> **Giải thích chi tiết:** Việc biến từng thao tác bấm nút, nhập liệu giao diện thành Use Case là sai lầm kinh điển UI Pollution và Functional Decomposition. Cần gom lại thành 1 Use Case trọn vẹn mang lại giá trị: 'Search Catalog'.

---

#### Câu 30 (ad-c4-d1-030) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong sơ đồ Use Case, quan hệ `<<include>>` thể hiện bản chất ngữ nghĩa nào sau đây?**

- **A.** Hành vi của Use Case được bao gồm là BẮT BUỘC thực thi trong mọi lần chạy của Base Use Case
- **B.** Hành vi của Use Case được bao gồm chỉ là tùy chọn và chỉ chạy khi có sự kiện bất thường xảy ra
- **C.** Quan hệ kế thừa tính đa hình giữa hai lớp đối tượng lập trình có cùng phương thức khởi tạo
- **D.** Đường truyền dữ liệu vật lý nối giữa hai máy chủ dịch vụ đặt tại hai quốc gia khác nhau trên thế giới

> **Đáp án đúng:** **A** — *Hành vi của Use Case được bao gồm là BẮT BUỘC thực thi trong mọi lần chạy của Base Use Case*
>
> **Giải thích chi tiết:** Quan hệ `<<include>>` biểu thị hành vi dùng chung BẮT BUỘC: Base Use Case bắt buộc phải gọi và thực thi Included Use Case để hoàn thành mục tiêu của mình.

---

#### Câu 31 (ad-c4-d1-031) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Điểm khác biệt cốt lõi nhất của quan hệ `<<extend>>` so với quan hệ `<<include>>` là gì?**

- **A.** `<<extend>>` là hành vi TÙY CHỌN có điều kiện; Base Use Case hoàn toàn KHÔNG biết về Extension Case
- **B.** `<<extend>>` là hành vi bắt buộc thực hiện trong một trăm phần trăm các lần giao dịch của người dùng
- **C.** `<<extend>>` yêu cầu mũi tên nét đứt phải trỏ từ Base Use Case hướng sang phía Extension Use Case
- **D.** `<<extend>>` chỉ áp dụng được cho các hệ thống phần mềm nhúng điều khiển thiết bị phần cứng điện tử

> **Đáp án đúng:** **A** — *`<<extend>>` là hành vi TÙY CHỌN có điều kiện; Base Use Case hoàn toàn KHÔNG biết về Extension Case*
>
> **Giải thích chi tiết:** Trong `<<extend>>`, hành vi mở rộng là TÙY CHỌN (Optional/Conditional) tại Extension Point, và Base Use Case hoàn toàn độc lập, không hề biết về sự tồn tại của Extension Case.

---

#### Câu 32 (ad-c4-d1-032) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về quy tắc vẽ hướng mũi tên trong biểu đồ Use Case UML?**

- **A.** Trong quan hệ `<<extend>>`, mũi tên nét đứt có nhãn trỏ từ Base Use Case sang Extension Use Case
- **B.** Trong quan hệ `<<include>>`, mũi tên nét đứt có nhãn trỏ từ Base Use Case sang Included Use Case
- **C.** Trong quan hệ Generalization giữa hai Actor, mũi tên hình tam giác rỗng trỏ về phía Actor cha tổng quát
- **D.** Đường liên kết Association giữa Actor và Use Case thông thường là đường thẳng liền nét không có mũi tên

> **Đáp án đúng:** **A** — *Trong quan hệ `<<extend>>`, mũi tên nét đứt có nhãn trỏ từ Base Use Case sang Extension Use Case*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì trong `<<extend>>`, mũi tên nét đứt bắt buộc phải trỏ từ Extension Use Case VỀ PHÍA Base Use Case (vì chính Extension Case mới biết điểm mở rộng của Base Case).

---

#### Câu 33 (ad-c4-d1-033) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Tính năng 'Apply Discount Coupon' chỉ kích hoạt khi khách hàng có mã giảm giá hợp lệ trong quá trình 'Checkout'. Nên thiết kế quan hệ nào?**

- **A.** Quan hệ `<<extend>>` từ 'Apply Discount Coupon' trỏ về 'Checkout' kèm theo một Extension Point được định danh
- **B.** Quan hệ `<<include>>` bắt buộc toàn bộ mọi khách hàng vào mua sắm đều phải nhập mã giảm giá thì mới cho mua
- **C.** Quan hệ Kế thừa đa mức giữa lớp khách hàng VIP và lớp khách hàng vãng lai trong sơ đồ cơ sở dữ liệu
- **D.** Vẽ hai Use Case này nằm hoàn toàn tách rời nhau và không có bất kỳ mối liên hệ nào trong toàn bộ hệ thống

> **Đáp án đúng:** **A** — *Quan hệ `<<extend>>` từ 'Apply Discount Coupon' trỏ về 'Checkout' kèm theo một Extension Point được định danh*
>
> **Giải thích chi tiết:** Áp dụng mã giảm giá là hành vi tùy chọn, có điều kiện (chỉ chạy khi khách có mã và nhập hợp lệ), do đó chuẩn xác nhất là dùng quan hệ `<<extend>>` trỏ về Base Case 'Checkout' tại Extension Point tương ứng.

---

#### Câu 34 (ad-c4-d1-034) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Trong các dự án phần mềm doanh nghiệp quy mô lớn, kỹ thuật đóng gói Use Case bằng Packages mang lại lợi ích gì?**

- **A.** Gom nhóm các ca sử dụng có liên quan theo phân hệ nghiệp vụ, giúp quản lý kiến trúc và phân chia đội ngũ
- **B.** Tự động nén toàn bộ mã nguồn của dự án thành định dạng zip giúp tiết kiệm dung lượng đĩa cứng máy chủ
- **C.** Ngăn cản hoàn toàn việc kiểm thử phần mềm của bên thứ ba nhằm giữ bí mật tuyệt đối công nghệ dự án
- **D.** Tăng gấp đôi tốc độ tải trang web của người dùng cuối mà không cần tối ưu hóa các câu truy vấn cơ sở dữ liệu

> **Đáp án đúng:** **A** — *Gom nhóm các ca sử dụng có liên quan theo phân hệ nghiệp vụ, giúp quản lý kiến trúc và phân chia đội ngũ*
>
> **Giải thích chi tiết:** Packages trong Use Case Model giúp cấu trúc hóa hệ thống lớn thành các phân hệ nghiệp vụ mạch lạc (Subsystems), hỗ trợ quản lý phạm vi và phân bổ công việc cho nhiều nhóm phát triển độc lập.

---

#### Câu 35 (ad-c4-d1-035) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Dấu hiệu rõ ràng nhất để nhận diện một mô hình Use Case đã bị rơi vào cạm bẫy 'Functional Decomposition' là gì?**

- **A.** Sơ đồ xuất hiện hàng chục Use Case nhỏ li ti mô tả từng thao tác nhập liệu hoặc các bước trong một hàm
- **B.** Sơ đồ chỉ có đúng một Actor duy nhất và không có bất kỳ đường liên kết nào nối với các ca sử dụng
- **C.** Sơ đồ sử dụng màu sắc quá rực rỡ khiến người xem bị chói mắt và không thể đọc được nội dung chữ bên trong
- **D.** Sơ đồ được vẽ trên giấy A4 trắng thay vì được xuất bản từ các phần mềm vẽ biểu đồ chuyên nghiệp của hãng

> **Đáp án đúng:** **A** — *Sơ đồ xuất hiện hàng chục Use Case nhỏ li ti mô tả từng thao tác nhập liệu hoặc các bước trong một hàm*
>
> **Giải thích chi tiết:** Functional Decomposition (Phân rã chức năng con) biểu hiện qua việc xé nhỏ quy trình thành hàng loạt Use Case vụn vặt (như 'Nhập tên', 'Check tuổi', 'Bấm Save'), biến Use Case thành lưu đồ thuật toán.

---

#### Câu 36 (ad-c4-d1-036) — [🔴 KHÓ (VẬN DỤNG CAO)] [MATCHING]

**Hãy chọn phương án GHÉP CẶP CHÍNH XÁC giữa 4 sai lầm kinh điển và biểu hiện thực tế tương ứng trong phân tích Use Case:**

- **A.** 1-UI Pollution: Ghi chi tiết nút bấm; 2-Data Flow: Vẽ đường truyền dữ liệu; 3-Wrong Arrow: Lộn chiều mũi tên
- **B.** 1-UI Pollution: Vẽ sai màu sắc; 2-Data Flow: Quên mật khẩu; 3-Wrong Arrow: Dùng chuột hỏng khi vẽ sơ đồ
- **C.** 1-UI Pollution: Mất kết nối wifi; 2-Data Flow: Hỏng ổ cứng; 3-Wrong Arrow: Không cài đặt trình duyệt web
- **D.** 1-UI Pollution: Hết bộ nhớ đệm; 2-Data Flow: Sai địa chỉ email; 3-Wrong Arrow: Quên lưu tệp tin ra đĩa mềm

> **Đáp án đúng:** **A** — *1-UI Pollution: Ghi chi tiết nút bấm; 2-Data Flow: Vẽ đường truyền dữ liệu; 3-Wrong Arrow: Lộn chiều mũi tên*
>
> **Giải thích chi tiết:** Ghép cặp chuẩn mực: 1-UI Pollution (Ghi rõ chi tiết nút bấm, textbox trên giao diện); 2-Data Flow trap (Nhầm Use Case với luồng truyền dữ liệu DFD); 3-Wrong Arrow (Lộn ngược chiều mũi tên `<<include>>`/`<<extend>>`).

---

#### Câu 37 (ad-c4-d1-037) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**[Outside] Trong quy trình Agile / Scrum hiện đại, hồ sơ Baseline ban đầu đóng vai trò kết nối như thế nào với Product Backlog?**

- **A.** Baseline đóng vai trò làm khung tầm nhìn và phạm vi cấp cao, từ đó tinh chế thành các Epics và User Stories
- **B.** Baseline thay thế hoàn toàn Product Backlog và cấm Product Owner không được thay đổi thứ tự ưu tiên các thẻ
- **C.** Baseline là danh sách các lỗi bảo mật phát hiện được sau mỗi chu kỳ Sprint bàn giao phần mềm cho khách hàng
- **D.** Baseline chỉ dùng để lưu trữ hồ sơ bảng lương của các lập trình viên tham gia vào dự án phát triển phần mềm

> **Đáp án đúng:** **A** — *Baseline đóng vai trò làm khung tầm nhìn và phạm vi cấp cao, từ đó tinh chế thành các Epics và User Stories*
>
> **Giải thích chi tiết:** [Outside] Trong môi trường Agile/Scrum hiện đại, Baseline của Inception định hình phạm vi cấp cao và tầm nhìn sản phẩm, làm nền tảng để Product Owner phân rã thành Epics và User Stories có thể ước lượng được.

---

#### Câu 38 (ad-c4-d1-038) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**[Outside] Khi ứng dụng công cụ Generative AI hỗ trợ hoạt động Elicitation, vai trò quan trọng nhất mà BA cần kiểm soát là:**

- **A.** Thẩm định tính xác thực của yêu cầu, đối chiếu với bối cảnh nghiệp vụ thực tế và ngăn ngừa bẫy ảo giác của AI
- **B.** Để cho công cụ AI tự động ký duyệt biên bản nghiệm thu hợp đồng với khách hàng mà không cần đọc lại nội dung
- **C.** Ủy quyền cho AI trực tiếp gọi điện thoại thương thảo chi phí và hạn chót bàn giao dự án với ban giám đốc
- **D.** Tắt hoàn toàn các công cụ tường lửa của doanh nghiệp để phần mềm AI có thể tự do quét toàn bộ dữ liệu nội bộ

> **Đáp án đúng:** **A** — *Thẩm định tính xác thực của yêu cầu, đối chiếu với bối cảnh nghiệp vụ thực tế và ngăn ngừa bẫy ảo giác của AI*
>
> **Giải thích chi tiết:** [Outside] Khi dùng AI khơi gợi yêu cầu, BA giữ vai trò 'Human-in-the-loop' cốt lõi: kiểm tra chéo độ chính xác, tính khả thi nghiệp vụ và loại bỏ ảo giác (Hallucinations) mà mô hình ngôn ngữ lớn có thể sinh ra.

---

#### Câu 39 (ad-c4-d1-039) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**[Outside] Trong kiến trúc Vi dịch vụ (Microservices), khi phân rã một Use Case lớn xuyên suốt nhiều dịch vụ độc lập, kiến trúc sư nên:**

- **A.** Áp dụng mẫu Saga Pattern hoặc Event-Driven Architecture để điều phối các giao dịch phân tán giữa các dịch vụ
- **B.** Gom tất cả các bảng dữ liệu của mọi dịch vụ vào chung một cơ sở dữ liệu quan hệ duy nhất đặt trên máy chủ cũ
- **C.** Buộc tất cả các dịch vụ phải gọi đồng bộ lẫn nhau qua giao thức HTTP liên tục cho đến khi máy chủ bị treo
- **D.** Xóa bỏ hoàn toàn khái niệm Use Case và yêu cầu lập trình viên tự viết mã theo ý thích cá nhân mà không cần tài liệu

> **Đáp án đúng:** **A** — *Áp dụng mẫu Saga Pattern hoặc Event-Driven Architecture để điều phối các giao dịch phân tán giữa các dịch vụ*
>
> **Giải thích chi tiết:** [Outside] Khi một Use Case nghiệp vụ (như Place Order) tương tác qua nhiều Microservices (Inventory, Payment, Shipping), kiến trúc sư cần dùng Saga Pattern hoặc Event-Driven Architecture để bảo đảm tính nhất quán sau cùng (Eventual Consistency).

---

#### Câu 40 (ad-c4-d1-040) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**[Outside] Khái niệm 'Bounded Context' trong Thiết kế hướng miền (Domain-Driven Design - DDD) tương đồng với khái niệm nào trong Use Case Model?**

- **A.** Ranh giới hệ thống phân hệ (Subsystem / System Boundary) định nghĩa ngữ nghĩa nghiệp vụ nhất quán của các thực thể
- **B.** Một dòng lệnh điều kiện IF ELSE đơn giản dùng để kiểm tra tính hợp lệ của mật khẩu người dùng khi đăng nhập
- **C.** Một thanh vi mạch bán dẫn lưu trữ tạm thời các khối dữ liệu hình ảnh trước khi hiển thị lên màn hình máy tính
- **D.** Một quy trình kiểm toán tài chính hàng năm của các chuyên viên kiểm toán độc lập đối với các công ty cổ phần

> **Đáp án đúng:** **A** — *Ranh giới hệ thống phân hệ (Subsystem / System Boundary) định nghĩa ngữ nghĩa nghiệp vụ nhất quán của các thực thể*
>
> **Giải thích chi tiết:** [Outside] Bounded Context trong DDD đóng vai trò thiết lập ranh giới tường minh mà bên trong đó mô hình nghiệp vụ có ý nghĩa nhất quán, tương đương với việc thiết lập System / Subsystem Boundary trong phân tích Use Case.

---

## BỘ ĐỀ THI SỐ 2 (MÃ ĐỀ: ad-c4-d2)

*Bộ đề số 2 đi sâu vào tính chất cam kết hợp đồng của Baseline, xử lý phiếu yêu cầu thay đổi (CR & CCB), kỹ thuật khơi gợi phỏng vấn và quan sát thực địa, tài liệu đặc tả bổ sung Supplementary Specification (NFRs), vai trò Mục lục của Use Case Diagram, trường Trigger, luồng hội thoại hai chiều, phân biệt mượn sách Borrow Book vs Reserve Book và xử lý ngoại lệ.*

---

#### Câu 1 (ad-c4-d2-001) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Về mặt pháp lý và quản trị, Baseline đóng vai trò là loại văn bản thỏa thuận nào giữa hai bên?**

- **A.** Một cam kết chính thức giữa khách hàng và nhóm dự án về các tính năng sẽ được phát triển
- **B.** Một bản hóa đơn thu tiền trước hạn định bắt buộc đối tác phải chuyển khoản trong ngày
- **C.** Một tài liệu bảo hiểm tài sản đề phòng các sự cố chập cháy bo mạch máy tính văn phòng
- **D.** Một biên bản xử phạt hành chính đối với các lập trình viên không hoàn thành chỉ tiêu mã

> **Đáp án đúng:** **A** — *Một cam kết chính thức giữa khách hàng và nhóm dự án về các tính năng sẽ được phát triển*
>
> **Giải thích chi tiết:** Baseline đóng vai trò như một thỏa thuận chính thức (Formal Agreement) giữa khách hàng và đội ngũ phát triển, xác định rõ những gì sẽ được làm trong phạm vi thống nhất.

---

#### Câu 2 (ad-c4-d2-002) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Lý do mang tính sống còn nhất để một dự án phần mềm bắt buộc phải thiết lập Baseline là gì?**

- **A.** Ngăn ngừa nguy cơ phình to phạm vi (Scope Creep) làm dự án bị trễ hạn và cạn kiệt ngân sách
- **B.** Bắt buộc tất cả nhân viên lập trình phải làm việc tăng ca vào những ngày nghỉ cuối tuần
- **C.** Giảm bớt thời gian bảo hành và loại bỏ quyền yêu cầu sửa lỗi phần mềm của khách hàng
- **D.** Cho phép đội ngũ dự án tự do thay đổi công nghệ cơ sở dữ liệu mà không cần báo trước

> **Đáp án đúng:** **A** — *Ngăn ngừa nguy cơ phình to phạm vi (Scope Creep) làm dự án bị trễ hạn và cạn kiệt ngân sách*
>
> **Giải thích chi tiết:** Thiết lập Baseline là yêu cầu sống còn nhằm kiểm soát sự thay đổi, ngăn chặn hiện tượng Scope Creep (Phình to phạm vi) khiến dự án vỡ tiến độ và đội chi phí nghiêm trọng.

---

#### Câu 3 (ad-c4-d2-003) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Một bộ hồ sơ Baseline hoàn chỉnh vào cuối giai đoạn Khởi động thường bao gồm các tài liệu nào?**

- **A.** Vision Document, Business Case, Use Case Model cấp cao và Bảng thuật ngữ Glossary
- **B.** Source Code hoàn chỉnh, Database Schema chi tiết và Kịch bản kiểm thử hiệu năng cao
- **C.** Hợp đồng thuê địa điểm văn phòng, Bảng chấm công nhân viên và Hóa đơn mua sắm bàn ghế
- **D.** Sơ đồ đi dây mạng cáp quang, Bảng cấu hình tường lửa và Tài khoản quản trị máy chủ

> **Đáp án đúng:** **A** — *Vision Document, Business Case, Use Case Model cấp cao và Bảng thuật ngữ Glossary*
>
> **Giải thích chi tiết:** Hồ sơ Baseline chuẩn cuối Inception bao gồm: Vision Document (Tài liệu tầm nhìn), Business Case (Đề án kinh doanh), Sơ đồ Use Case cấp cao và Bảng thuật ngữ chuyên ngành (Glossary).

---

#### Câu 4 (ad-c4-d2-004) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Khi có một yêu cầu thay đổi (Change Request) phát sinh sau Baseline, bước xử lý đầu tiên của BA là gì?**

- **A.** Phân tích tác động của sự thay đổi đối với phạm vi, tiến độ, chi phí và chất lượng dự án
- **B.** Lập tức viết mã nguồn bổ sung tính năng mới đó vào hệ thống ngay trong ngày làm việc
- **C.** Yêu cầu khách hàng thanh toán thêm tiền phạt vi phạm hợp đồng trước khi xem xét nội dung
- **D.** Từ chối thẳng thừng mọi đề xuất thay đổi của khách hàng mà không cần lắng nghe lý do

> **Đáp án đúng:** **A** — *Phân tích tác động của sự thay đổi đối với phạm vi, tiến độ, chi phí và chất lượng dự án*
>
> **Giải thích chi tiết:** Khi nhận Change Request sau Baseline, bước đầu tiên mang tính chuyên nghiệp của BA là thực hiện Phân tích tác động (Impact Analysis) về phạm vi, thời gian, chi phí và rủi ro để trình CCB phê duyệt.

---

#### Câu 5 (ad-c4-d2-005) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Giám đốc đối tác muốn bổ sung tính năng thanh toán quét mã QR vào hệ thống đã chốt Baseline. Cách giải quyết chuẩn của Quản lý dự án là:**

- **A.** Lập Phiếu yêu cầu thay đổi (CR), đánh giá tác động chi phí và trình Hội đồng kiểm soát thay đổi (CCB) phê duyệt
- **B.** Âm thầm bảo lập trình viên làm thêm tính năng này ngoài giờ mà không ghi nhận vào bất kỳ tài liệu nào
- **C.** Từ chối thẳng thừng yêu cầu của Giám đốc đối tác và tuyên bố chấm dứt hợp đồng hợp tác ngay lập tức
- **D.** Chấp nhận ngay lập tức mọi chi phí phát sinh mà không cần báo cáo hay bàn bạc với ban giám đốc công ty

> **Đáp án đúng:** **A** — *Lập Phiếu yêu cầu thay đổi (CR), đánh giá tác động chi phí và trình Hội đồng kiểm soát thay đổi (CCB) phê duyệt*
>
> **Giải thích chi tiết:** Quy trình chuẩn mực là tạo Change Request (CR), phân tích tác động toàn diện về chi phí, nguồn lực và tiến độ, sau đó trình CCB và các bên liên quan đàm phán chính thức trước khi điều chỉnh Baseline.

---

#### Câu 6 (ad-c4-d2-006) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Nhiệm vụ cốt lõi của giai đoạn Khám phá yêu cầu (Discovery Phase) đối với miền bài toán là gì?**

- **A.** Chuyển hóa các nhu cầu nghiệp vụ còn mơ hồ của khách hàng thành các yêu cầu phần mềm tường minh
- **B.** Thay thế toàn bộ dàn máy vi tính cũ của khách hàng bằng hệ thống máy chủ siêu phân luồng mới
- **C.** Tuyển dụng thêm hàng trăm nhân viên kỹ thuật phần mềm để phục vụ cho công tác kiểm thử tải
- **D.** Đăng ký bản quyền thương hiệu cho tên gọi của phần mềm tại cục sở hữu trí tuệ của nhà nước

> **Đáp án đúng:** **A** — *Chuyển hóa các nhu cầu nghiệp vụ còn mơ hồ của khách hàng thành các yêu cầu phần mềm tường minh*
>
> **Giải thích chi tiết:** Nhiệm vụ trọng tâm của Discovery Phase là làm rõ miền bài toán (Problem Domain), chuyển hóa những ý tưởng, mong muốn mơ hồ thành các yêu cầu phần mềm rõ ràng, khả thi và có thể đo lường.

---

#### Câu 7 (ad-c4-d2-007) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong chu trình Discovery, hoạt động Xác thực yêu cầu (Requirements Validation) mang ý nghĩa gì?**

- **A.** Kiểm chứng lại với các bên liên quan để bảo đảm hệ thống đang được xây dựng đúng nhu cầu thực tế
- **B.** Kiểm tra xem các đoạn mã nguồn lập trình có tuân thủ đúng quy tắc thụt đầu dòng của ngôn ngữ
- **C.** Đo lường thời gian đáp ứng của máy chủ cơ sở dữ liệu khi có nhiều người truy cập đồng thời
- **D.** Kiểm tra xem tên miền trang web của doanh nghiệp đã được gia hạn phí thường niên hay chưa

> **Đáp án đúng:** **A** — *Kiểm chứng lại với các bên liên quan để bảo đảm hệ thống đang được xây dựng đúng nhu cầu thực tế*
>
> **Giải thích chi tiết:** Validation (Xác thực) nhằm bảo đảm 'Building the right system' — đối chiếu, rà soát lại các yêu cầu đã đặc tả với các Stakeholders để xác nhận hệ thống giải quyết đúng bài toán nghiệp vụ của họ.

---

#### Câu 8 (ad-c4-d2-008) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [FILL-BLANK]

**Hãy chọn tập hợp các Kỹ thuật Khơi gợi yêu cầu (Elicitation Techniques) phổ biến và chuẩn mực nhất của BA:**

- **A.** Interview (Phỏng vấn), Workshop (Hội thảo), Survey (Khảo sát) và Observation (Quan sát thực địa)
- **B.** Unit Testing (Kiểm thử đơn vị), Code Review (Đọc mã), Refactoring (Tái cấu trúc) và Git Commit
- **C.** Defragmentation (Chống phân mảnh đĩa), Overclocking (Ép xung chip), Formatting (Định dạng ổ đĩa)
- **D.** Graphic Design (Thiết kế đồ họa), Video Editing (Dựng video clip), Sound Mixing (Phối âm thanh)

> **Đáp án đúng:** **A** — *Interview (Phỏng vấn), Workshop (Hội thảo), Survey (Khảo sát) và Observation (Quan sát thực địa)*
>
> **Giải thích chi tiết:** Bộ công cụ Elicitation kinh điển của BA gồm: Phỏng vấn sâu (Interview), Hội thảo yêu cầu (JAD/Requirements Workshop), Bảng câu hỏi khảo sát (Survey/Questionnaire) và Quan sát thực địa (Observation).

---

#### Câu 9 (ad-c4-d2-009) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Phát biểu nào sau đây phân biệt CHÍNH XÁC giữa hoạt động Phân tích (Analyze) và Đặc tả (Specify)?**

- **A.** Analyze là tìm hiểu bản chất và cấu trúc yêu cầu; Specify là ghi lại các yêu cầu đó bằng tài liệu chuẩn
- **B.** Analyze là trực tiếp viết mã nguồn phần mềm; còn Specify chỉ là việc thiết kế giao diện đồ họa bên ngoài
- **C.** Analyze là việc kiểm tra bảo mật máy chủ; còn Specify là việc ký kết hợp đồng thương mại với đối tác
- **D.** Analyze là hoạt động của khách hàng; còn Specify là nhiệm vụ hoàn toàn độc quyền của nhân viên kiểm thử

> **Đáp án đúng:** **A** — *Analyze là tìm hiểu bản chất và cấu trúc yêu cầu; Specify là ghi lại các yêu cầu đó bằng tài liệu chuẩn*
>
> **Giải thích chi tiết:** Analyze là quá trình mổ xẻ, phát hiện mâu thuẫn, tinh lọc và mô hình hóa yêu cầu; trong khi Specify là hoạt động chính thức ghi nhận các yêu cầu đó thành văn bản đặc tả chuẩn mực (như Use Case Description).

---

#### Câu 10 (ad-c4-d2-010) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về tài liệu Đặc tả bổ sung (Supplementary Specification)?**

- **A.** Tài liệu Supplementary Specification chỉ chứa đựng danh sách họ tên và số điện thoại của nhân viên
- **B.** Tài liệu này dùng để nắm bắt các yêu cầu phi chức năng (NFRs) như hiệu năng, bảo mật và tính khả dụng
- **C.** Tài liệu này ghi nhận các ràng buộc kỹ thuật về mặt pháp lý, tiêu chuẩn công nghệ và môi trường cài đặt
- **D.** Tài liệu này bổ trợ cho Use Case Model để mô tả những yêu cầu không gắn liền với một ca sử dụng đơn lẻ

> **Đáp án đúng:** **A** — *Tài liệu Supplementary Specification chỉ chứa đựng danh sách họ tên và số điện thoại của nhân viên*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì Supplementary Specification là tài liệu kỹ thuật quan trọng lưu trữ các yêu cầu phi chức năng (URPS+: Usability, Reliability, Performance, Supportability) và các ràng buộc pháp lý/kỹ thuật toàn hệ thống.

---

#### Câu 11 (ad-c4-d2-011) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Trong buổi phỏng vấn Elicitation, người dùng cuối không thể diễn đạt được quy trình làm việc của họ. BA nên làm gì?**

- **A.** Áp dụng phương pháp Quan sát thực địa (Observation / Job Shadowing) và dùng Mockup giao diện để gợi mở
- **B.** Lập tức chỉ trích người dùng thiếu năng lực chuyên môn và yêu cầu thay thế người dùng khác ngay lập tức
- **C.** Tự ý bịa ra một quy trình làm việc theo suy nghĩ cá nhân của mình mà không cần hỏi lại người dùng nữa
- **D.** Hủy bỏ toàn bộ các buổi khảo sát tiếp theo và yêu cầu khách hàng tự viết tài liệu kỹ thuật phần mềm

> **Đáp án đúng:** **A** — *Áp dụng phương pháp Quan sát thực địa (Observation / Job Shadowing) và dùng Mockup giao diện để gợi mở*
>
> **Giải thích chi tiết:** Khi người dùng gặp khó khăn trong việc diễn đạt (Tacit knowledge), BA chuyên nghiệp sẽ dùng kỹ thuật Quan sát thực địa (Observation / Job Shadowing) hoặc dùng Prototypes/Mockups trực quan để người dùng phản hồi.

---

#### Câu 12 (ad-c4-d2-012) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong biểu đồ Use Case của UML, khung hình chữ nhật 'System Boundary' có ý nghĩa biểu diễn là gì?**

- **A.** Xác định ranh giới phạm vi phần mềm: phân biệt những gì hệ thống thực hiện và những gì nằm bên ngoài
- **B.** Hiển thị kích thước vật lý của màn hình vi tính mà người dùng sẽ sử dụng để chạy phần mềm này
- **C.** Đại diện cho một bảng cơ sở dữ liệu quan hệ dùng để lưu trữ toàn bộ các tài khoản của người dùng
- **D.** Là một thanh vi xử lý điện tử điều khiển tốc độ nạp dữ liệu từ máy quét mã vạch vào bộ nhớ tạm

> **Đáp án đúng:** **A** — *Xác định ranh giới phạm vi phần mềm: phân biệt những gì hệ thống thực hiện và những gì nằm bên ngoài*
>
> **Giải thích chi tiết:** System Boundary (Ranh giới hệ thống) là khung chữ nhật bao bọc các Use Case, định nghĩa tường minh phạm vi hệ thống: bên trong khung là chức năng hệ thống cung cấp, bên ngoài là các Actor tương tác.

---

#### Câu 13 (ad-c4-d2-013) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Phát biểu nào sau đây thể hiện CHÍNH XÁC bản chất của ký hiệu Tác nhân (Actor) trong biểu đồ Use Case?**

- **A.** Actor đại diện cho một vai trò tương tác với hệ thống, có thể là con người hoặc hệ thống phần mềm ngoài
- **B.** Actor bắt buộc phải là một nhân viên chính thức đang hưởng lương trong biên chế của tổ chức doanh nghiệp
- **C.** Actor là một đoạn mã lập trình giao diện người dùng được viết bằng ngôn ngữ kịch bản trên trình duyệt
- **D.** Actor luôn luôn nằm bên trong ranh giới System Boundary để thực hiện các thao tác tính toán dữ liệu

> **Đáp án đúng:** **A** — *Actor đại diện cho một vai trò tương tác với hệ thống, có thể là con người hoặc hệ thống phần mềm ngoài*
>
> **Giải thích chi tiết:** Actor đại diện cho một Vai trò (Role) tương tác với hệ thống từ bên ngoài: có thể là con người (khách hàng, nhân viên) hoặc một hệ thống bên ngoài (cổng thanh toán, dịch vụ email).

---

#### Câu 14 (ad-c4-d2-014) — [🟢 DỄ (NHẬN BIẾT)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi ví von Biểu đồ Use Case Diagram như 'Mục lục' của cuốn tài liệu yêu cầu?**

- **A.** Biểu đồ Use Case Diagram chứa đựng toàn bộ các câu lệnh mã nguồn và thuật toán xử lý dữ liệu chi tiết
- **B.** Nó cung cấp cái nhìn tổng quan toàn cảnh về phạm vi chức năng mà không làm quá tải thông tin người đọc
- **C.** Nó đóng vai trò định hướng giúp các bên liên quan dễ dàng tra cứu sang Use Case Description chi tiết
- **D.** Nó giúp phân định ranh giới hệ thống một cách trực quan giữa môi trường bên trong và các tác nhân ngoài

> **Đáp án đúng:** **A** — *Biểu đồ Use Case Diagram chứa đựng toàn bộ các câu lệnh mã nguồn và thuật toán xử lý dữ liệu chi tiết*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì Use Case Diagram chỉ đóng vai trò như Mục lục (Table of Contents) cấp cao, KHÔNG BAO GIỜ chứa mã nguồn hay chi tiết thuật toán cài đặt bên trong.

---

#### Câu 15 (ad-c4-d2-015) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi phân biệt giữa Primary Actor (Tác nhân chính) và Supporting Actor (Tác nhân hỗ trợ)?**

- **A.** Supporting Actor là người trực tiếp khởi phát ca sử dụng để đạt được mục tiêu cá nhân của mình
- **B.** Primary Actor là tác nhân chủ động kích hoạt ca sử dụng nhằm đạt được một mục tiêu nghiệp vụ cụ thể
- **C.** Supporting Actor (Secondary Actor) cung cấp dịch vụ hoặc thông tin hỗ trợ cho hệ thống khi thực thi
- **D.** Supporting Actor thường là các hệ thống bên thứ ba như Cổng thanh toán ngân hàng hoặc Máy chủ SMS

> **Đáp án đúng:** **A** — *Supporting Actor là người trực tiếp khởi phát ca sử dụng để đạt được mục tiêu cá nhân của mình*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì người trực tiếp khởi phát Use Case để đạt được mục tiêu cá nhân là Primary Actor. Supporting Actor chỉ đóng vai trò hỗ trợ, bị hệ thống gọi tới để hoàn thành giao dịch.

---

#### Câu 16 (ad-c4-d2-016) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [MATCHING]

**Hãy chọn phương án GHÉP CẶP CHÍNH XÁC giữa 4 loại quan hệ trong Use Case Diagram và đặc điểm ngữ nghĩa của chúng:**

- **A.** 1-Association: Giao tiếp hai chiều; 2-Include: Bắt buộc dùng chung; 3-Extend: Mở rộng tùy chọn có điều kiện
- **B.** 1-Association: Kế thừa thuộc tính; 2-Include: Xóa bỏ dữ liệu; 3-Extend: Khởi động lại hệ điều hành máy chủ
- **C.** 1-Association: Ghi đè phương thức; 2-Include: Khóa tài khoản; 3-Extend: Đổi mật khẩu định kỳ hàng tháng
- **D.** 1-Association: Sao lưu đĩa mềm; 2-Include: Quét vi rút mạng; 3-Extend: Nâng cấp bộ nhớ trong của máy tính

> **Đáp án đúng:** **A** — *1-Association: Giao tiếp hai chiều; 2-Include: Bắt buộc dùng chung; 3-Extend: Mở rộng tùy chọn có điều kiện*
>
> **Giải thích chi tiết:** Ghép cặp chuẩn mực: 1-Association (Đường liên kết tương tác giữa Actor và Use Case); 2-Include (Quan hệ bắt buộc tái sử dụng luồng chung); 3-Extend (Quan hệ mở rộng hành vi tùy chọn có điều kiện).

---

#### Câu 17 (ad-c4-d2-017) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Trong hệ thống Trạm thu phí tự động không dừng (ETC), xe ô tô đi qua trạm và được quét thẻ RFID. Mô hình Use Case nào chuẩn nhất?**

- **A.** Primary Actor là Chủ phương tiện xe; Use Case là 'Pay Toll Fee'; Supporting Actor là Ngân hàng liên kết
- **B.** Primary Actor là Chiếc thẻ nhựa RFID; Use Case là 'Sạc pin thẻ'; Supporting Actor là Cột đèn giao thông
- **C.** Primary Actor là Khung sắt trạm thu phí; Use Case là 'Đóng rào chắn'; Supporting Actor là Mây trời trên cao
- **D.** Primary Actor là Đường cao tốc bê tông; Use Case là 'Đo độ lún'; Supporting Actor là Xe lu lăn mặt đường

> **Đáp án đúng:** **A** — *Primary Actor là Chủ phương tiện xe; Use Case là 'Pay Toll Fee'; Supporting Actor là Ngân hàng liên kết*
>
> **Giải thích chi tiết:** Trong hệ thống ETC: Chủ phương tiện xe (Vehicle Owner) đóng vai trò Primary Actor (mục tiêu trả phí đường bộ qua Use Case 'Pay Toll Fee'), Ngân hàng trừ tiền tự động là Supporting/Secondary Actor.

---

#### Câu 18 (ad-c4-d2-018) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Khác với Brief Description (ngắn gọn) và Fully-Dressed (khuôn mẫu chuẩn), cấp độ 'Casual Description' có đặc điểm là:**

- **A.** Mô tả bằng văn xuôi không chính thức gồm vài đoạn văn bao quát các kịch bản bình thường và kịch bản lỗi
- **B.** Mô tả hoàn toàn bằng các câu lệnh SQL viết trực tiếp vào hệ quản trị cơ sở dữ liệu trên máy chủ đám mây
- **C.** Mô tả bằng các ký hiệu hình học trừu tượng mà chỉ có chuyên gia toán học mới có khả năng giải mã được
- **D.** Mô tả chi tiết tần số điện áp và công suất tiêu thụ điện năng của màn hình hiển thị trong phòng làm việc

> **Đáp án đúng:** **A** — *Mô tả bằng văn xuôi không chính thức gồm vài đoạn văn bao quát các kịch bản bình thường và kịch bản lỗi*
>
> **Giải thích chi tiết:** Casual Description là cấp độ mô tả dạng văn xuôi tự do (Informal paragraph format), dài vài đoạn văn, phác thảo luồng chính và một số luồng rẽ nhánh mà chưa cần khuôn mẫu bảng biểu phức tạp.

---

#### Câu 19 (ad-c4-d2-019) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trường 'Trigger' (Sự kiện kích hoạt) trong tài liệu đặc tả ca sử dụng Fully-Dressed có vai trò gì?**

- **A.** Xác định sự kiện khởi đầu hoặc hành động cụ thể khiến cho ca sử dụng bắt đầu thực thi
- **B.** Xác định thời điểm hệ thống sẽ tự động tắt nguồn máy tính sau khi người dùng ngừng làm việc
- **C.** Xác định số lượng dòng mã nguồn tối đa mà lập trình viên được phép viết cho tính năng này
- **D.** Xác định tổng số tiền bồi thường bảo hiểm nếu người dùng làm đổ nước trà lên bàn phím máy tính

> **Đáp án đúng:** **A** — *Xác định sự kiện khởi đầu hoặc hành động cụ thể khiến cho ca sử dụng bắt đầu thực thi*
>
> **Giải thích chi tiết:** Trigger (Sự kiện kích hoạt) định nghĩa sự kiện cụ thể làm khởi phát việc thực thi của Use Case (ví dụ: Khách hàng bấm nút 'Thanh toán' trên giỏ hàng, hoặc Sự kiện thời gian đến 00:00 hàng ngày).

---

#### Câu 20 (ad-c4-d2-020) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Trong Use Case Description, Luồng thay thế (Alternative Flow) được thiết kế nhằm mục đích gì?**

- **A.** Mô tả các con đường nghiệp vụ hợp lệ khác giúp Actor đạt được mục tiêu khi có điều kiện rẽ nhánh
- **B.** Mô tả cách thức sửa chữa phần cứng máy vi tính khi bị sét đánh làm hỏng bo mạch chủ của máy chủ
- **C.** Mô tả quy trình giải thể công ty và thanh lý toàn bộ tài sản doanh nghiệp khi dự án bị phá sản
- **D.** Mô tả các điều khoản xử phạt tiền đối với khách hàng nếu hủy bỏ đơn đặt hàng sau hai mươi bốn giờ

> **Đáp án đúng:** **A** — *Mô tả các con đường nghiệp vụ hợp lệ khác giúp Actor đạt được mục tiêu khi có điều kiện rẽ nhánh*
>
> **Giải thích chi tiết:** Alternative Flows (Luồng thay thế) mô tả các nhánh nghiệp vụ hợp lệ khác (ví dụ: Khách chọn thanh toán qua Ví điện tử thay vì Thẻ tín dụng) để vẫn đi đến kết quả hoàn thành mục tiêu của ca sử dụng.

---

#### Câu 21 (ad-c4-d2-021) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi viết 'Postconditions' (Điều kiện sau thành công) cho Use Case 'Transfer Money'?**

- **A.** Postcondition là tài khoản người gửi đã bị trừ tiền thành công nhưng tài khoản người nhận chưa được ghi có
- **B.** Postcondition bảo đảm số dư của tài khoản người gửi đã bị trừ đúng số tiền và các khoản phí chuyển khoản
- **C.** Postcondition bảo đảm số dư của tài khoản người thụ hưởng đã được cộng đúng số tiền chuyển khoản của khách
- **D.** Postcondition bảo đảm một bản ghi nhật ký giao dịch tài chính đã được lưu trữ an toàn trong cơ sở dữ liệu

> **Đáp án đúng:** **A** — *Postcondition là tài khoản người gửi đã bị trừ tiền thành công nhưng tài khoản người nhận chưa được ghi có*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì trong giao dịch tài chính (Tính chất ACID), không thể chấp nhận trạng thái tài khoản gửi đã trừ mà tài khoản nhận không được cộng. Postcondition phải bảo đảm tính toàn vẹn nhất quán dữ liệu.

---

#### Câu 22 (ad-c4-d2-022) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Kịch bản Luồng chính (Happy Path) trong Use Case Description nên được trình bày theo văn phong hội thoại chuẩn nào?**

- **A.** Trình bày các bước theo kiểu hội thoại xen kẽ: Hành động của Tác nhân -> Phản hồi xử lý của Hệ thống
- **B.** Trình bày độc thoại toàn bộ bằng các câu lệnh truy vấn dữ liệu SQL lồng nhau phức tạp của máy chủ
- **C.** Trình bày danh sách toàn bộ các lỗi tiềm ẩn mà lập trình viên có thể gặp phải khi viết mã nguồn
- **D.** Trình bày bảng lương chi tiết của từng thành viên trong ban giám đốc điều hành của tập đoàn đối tác

> **Đáp án đúng:** **A** — *Trình bày các bước theo kiểu hội thoại xen kẽ: Hành động của Tác nhân -> Phản hồi xử lý của Hệ thống*
>
> **Giải thích chi tiết:** Văn phong chuẩn của Use Case Description là mô tả tương tác hội thoại hai chiều đối thoại (Two-column dialog hoặc Numbered steps): Bước 1: Actor hành động -> Bước 2: System kiểm tra và phản hồi.

---

#### Câu 23 (ad-c4-d2-023) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Khi tách các Quy tắc nghiệp vụ (như công thức tính thuế VAT) ra khỏi kịch bản Use Case, BA đạt được lợi ích gì?**

- **A.** Kịch bản Use Case không bị xáo trộn khi nhà nước thay đổi biểu thuế, chỉ cần cập nhật tài liệu Business Rules
- **B.** Hệ điều hành máy tính sẽ tự động giảm giá bán của phần mềm xuống năm mươi phần trăm cho người sử dụng
- **C.** Khách hàng không bao giờ cần phải thanh toán thuế VAT cho nhà nước khi mua sắm các sản phẩm điện tử
- **D.** Lập trình viên không cần phải kiểm thử lại các tính năng phần mềm trước khi đưa vào vận hành thương mại

> **Đáp án đúng:** **A** — *Kịch bản Use Case không bị xáo trộn khi nhà nước thay đổi biểu thuế, chỉ cần cập nhật tài liệu Business Rules*
>
> **Giải thích chi tiết:** Decoupling Business Rules giúp duy trì sự độc lập giữa luồng tương tác và chính sách nghiệp vụ. Khi thuế suất thay đổi (ví dụ 10% sang 8%), Use Case vẫn giữ nguyên, chỉ sửa tham chiếu quy tắc nghiệp vụ.

---

#### Câu 24 (ad-c4-d2-024) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Khách hàng thực hiện ca sử dụng 'Cancel Order', nhưng đơn hàng đã đóng gói và bàn giao cho bưu tá vận chuyển. BA nên đặc tả thế nào?**

- **A.** Xây dựng Exception Flow: Hệ thống từ chối hủy trực tiếp, thông báo chuyển hướng sang quy trình 'Return / Refund'
- **B.** Tự động xóa sạch toàn bộ đơn hàng khỏi cơ sở dữ liệu và coi như đơn hàng chưa từng tồn tại trên đời này
- **C.** Gửi tin nhắn đe dọa người giao hàng phải lập tức quay đầu xe và nộp lại hàng hóa cho phòng bảo vệ công ty
- **D.** Bắt buộc khách hàng phải bồi thường gấp mười lần giá trị đơn hàng thì mới cho phép tắt ứng dụng trên điện thoại

> **Đáp án đúng:** **A** — *Xây dựng Exception Flow: Hệ thống từ chối hủy trực tiếp, thông báo chuyển hướng sang quy trình 'Return / Refund'*
>
> **Giải thích chi tiết:** Khi đơn hàng đã chuyển sang trạng thái đang vận chuyển (In Transit), không thể hủy trực tiếp. Đây là một Exception Flow trong 'Cancel Order', hệ thống thông báo từ chối hủy và hướng dẫn quy trình Trả hàng/Hoàn tiền.

---

#### Câu 25 (ad-c4-d2-025) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong ca sử dụng 'Borrow Book' của Hệ thống Thư viện, điều kiện tiên quyết (Precondition) chuẩn mực là gì?**

- **A.** Thẻ độc giả đang ở trạng thái hoạt động bình thường, không bị khóa và sách đang có sẵn trên giá thư viện
- **B.** Độc giả phải nộp trước một khoản tiền mặt bảo lãnh tương đương mười triệu đồng cho nhân viên thủ thư
- **C.** Độc giả phải là tác giả của chính cuốn sách đó và có chữ ký xác nhận của nhà xuất bản sách quốc gia
- **D.** Độc giả phải cam kết đọc xong toàn bộ cuốn sách dày một nghìn trang trong vòng hai mươi tư giờ đồng hồ

> **Đáp án đúng:** **A** — *Thẻ độc giả đang ở trạng thái hoạt động bình thường, không bị khóa và sách đang có sẵn trên giá thư viện*
>
> **Giải thích chi tiết:** Precondition của 'Borrow Book': Thẻ thư viện hợp lệ (không bị khóa do nợ sách hay phạt tiền) và cuốn sách mong muốn mượn đang có sẵn trên giá (Available on Shelf).

---

#### Câu 26 (ad-c4-d2-026) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Phát biểu nào sau đây phân biệt CHÍNH XÁC mục tiêu nghiệp vụ giữa 'Borrow Book' và 'Reserve Book'?**

- **A.** Borrow Book là mượn trực tiếp sách có sẵn; Reserve Book là đặt chỗ trước cho cuốn sách đang bị mượn hết
- **B.** Borrow Book chỉ áp dụng cho sách giáo khoa; còn Reserve Book chỉ dành riêng cho truyện tranh thiếu nhi
- **C.** Borrow Book chỉ dành cho sinh viên năm nhất; còn Reserve Book chỉ dành cho giáo sư chuẩn bị về hưu
- **D.** Borrow Book là giao dịch trả tiền; còn Reserve Book là dịch vụ hoàn toàn miễn phí cho mọi công dân

> **Đáp án đúng:** **A** — *Borrow Book là mượn trực tiếp sách có sẵn; Reserve Book là đặt chỗ trước cho cuốn sách đang bị mượn hết*
>
> **Giải thích chi tiết:** Phân biệt chuẩn xác: 'Borrow Book' áp dụng khi sách đang có sẵn trên kệ (Available) để mượn mang về; 'Reserve Book' áp dụng khi sách đã được người khác mượn hết (Checked Out) để vào danh sách chờ.

---

#### Câu 27 (ad-c4-d2-027) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về việc mô tả kịch bản ca sử dụng trong Hệ thống Thư viện?**

- **A.** Kịch bản Use Case bắt buộc phải ghi rõ tên các nút bấm, màu sắc phông chữ và kích thước của các ô nhập liệu
- **B.** Kịch bản cần tập trung vào mục tiêu nghiệp vụ của độc giả và phản hồi logic của hệ thống quản lý thư viện
- **C.** Kịch bản nên tránh ràng buộc chặt chẽ vào một công nghệ giao diện cụ thể như ứng dụng web hay di động
- **D.** Các quy định về số lượng sách tối đa được mượn nên được tham chiếu đến quy tắc nghiệp vụ Business Rules

> **Đáp án đúng:** **A** — *Kịch bản Use Case bắt buộc phải ghi rõ tên các nút bấm, màu sắc phông chữ và kích thước của các ô nhập liệu*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì mô tả chi tiết nút bấm, màu sắc, font chữ là vi phạm lỗi 'UI Pollution' (Làm ô nhiễm giao diện). Use Case là phân tích yêu cầu hành vi mức công nghệ độc lập (Technology-independent).

---

#### Câu 28 (ad-c4-d2-028) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Khi độc giả thực hiện Use Case 'Return Book', hệ thống phát hiện cuốn sách bị rách nát trang bìa. Hệ thống nên xử lý thế nào?**

- **A.** Kích hoạt Luồng ngoại lệ ghi nhận tình trạng hỏng sách, tính phí bồi thường và chuyển giao cho thủ thư xử lý
- **B.** Lập tức gọi điện báo cảnh sát hình sự đến bắt giữ độc giả vì hành vi cố ý phá hoại tài sản công dân
- **C.** Vẫn cho phép trả sách bình thường và âm thầm đổ toàn bộ trách nhiệm bồi thường lên người mượn kế tiếp
- **D.** Tự động xóa tên cuốn sách đó khỏi cơ sở dữ liệu và coi như thư viện chưa bao giờ sở hữu tài liệu này

> **Đáp án đúng:** **A** — *Kích hoạt Luồng ngoại lệ ghi nhận tình trạng hỏng sách, tính phí bồi thường và chuyển giao cho thủ thư xử lý*
>
> **Giải thích chi tiết:** Sách bị hỏng khi trả là một kịch bản ngoại lệ (Exception Flow): hệ thống phát hiện sự cố, ghi nhận biên bản hư hỏng tài liệu, áp dụng quy tắc phạt bồi thường theo Business Rules và thông báo cho Thủ thư thụ lý.

---

#### Câu 29 (ad-c4-d2-029) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Trong sơ đồ Use Case Thư viện, một BA vẽ mũi tên có nhãn 'Mã sách ISBN' nối từ Độc giả sang Use Case. Sai lầm này là gì?**

- **A.** Cạm bẫy luồng dữ liệu (Data Flow Trap): Nhầm lẫn biểu đồ Use Case với biểu đồ luồng dữ liệu (DFD)
- **B.** Lỗi không cài đặt chương trình phòng chống mã độc gián điệp trên máy vi tính của nhân viên phân tích
- **C.** Lỗi cấu hình sai địa chỉ máy chủ cơ sở dữ liệu khiến cho đường truyền internet bị ngắt quãng liên tục
- **D.** Lỗi vẽ sơ đồ mạng máy tính nội bộ của trường đại học không tuân thủ các quy định về an toàn điện lực

> **Đáp án đúng:** **A** — *Cạm bẫy luồng dữ liệu (Data Flow Trap): Nhầm lẫn biểu đồ Use Case với biểu đồ luồng dữ liệu (DFD)*
>
> **Giải thích chi tiết:** Đường liên kết Association giữa Actor và Use Case trong UML chỉ là đường thẳng thể hiện kênh giao tiếp, KHÔNG BAO GIỜ mang nhãn dữ liệu như luồng dữ liệu của sơ đồ DFD. Đây là cạm bẫy Data Flow kinh điển.

---

#### Câu 30 (ad-c4-d2-030) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong sơ đồ Use Case, quan hệ Kế thừa (Generalization) giữa các Actor thể hiện điều gì?**

- **A.** Actor con kế thừa toàn bộ các ca sử dụng của Actor cha và có thể có thêm các ca sử dụng chuyên biệt riêng
- **B.** Actor con sẽ bị xóa bỏ hoàn toàn quyền truy cập hệ thống và chuyển giao toàn bộ dữ liệu cho Actor cha
- **C.** Hai Actor này có cùng chung ngày tháng năm sinh và có quan hệ huyết thống gia đình ngoài đời thực
- **D.** Đường truyền mạng cáp quang kết nối giữa hai văn phòng làm việc của hai nhân viên trong cùng tòa nhà

> **Đáp án đúng:** **A** — *Actor con kế thừa toàn bộ các ca sử dụng của Actor cha và có thể có thêm các ca sử dụng chuyên biệt riêng*
>
> **Giải thích chi tiết:** Generalization giữa các Actor (ví dụ: 'Manager' kế thừa 'Employee') có nghĩa là Actor con có toàn quyền thực hiện tất cả các Use Case mà Actor cha được làm, đồng thời có thêm quyền thực hiện các ca sử dụng cấp cao hơn.

---

#### Câu 31 (ad-c4-d2-031) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Khái niệm 'Extension Point' (Điểm mở rộng định danh) trong quan hệ `<<extend>>` có vai trò kỹ thuật gì?**

- **A.** Xác định vị trí chính xác trong luồng kịch bản của Base Use Case mà hành vi mở rộng có thể được chèn vào
- **B.** Xác định cổng cắm dây mạng internet ở phía sau thùng máy tính của người dùng khi sử dụng phần mềm
- **C.** Xác định thời điểm hệ thống sẽ tự động đăng xuất tài khoản của người dùng khi họ không làm việc
- **D.** Xác định mức dung lượng bộ nhớ RAM tối đa mà hệ điều hành được phép cấp phát cho phần mềm này

> **Đáp án đúng:** **A** — *Xác định vị trí chính xác trong luồng kịch bản của Base Use Case mà hành vi mở rộng có thể được chèn vào*
>
> **Giải thích chi tiết:** Extension Point là vị trí được định danh rõ ràng trong kịch bản của Base Use Case (ví dụ: `Point: [Before Payment]`) để Extension Use Case móc nối hành vi mở rộng vào khi điều kiện kích hoạt được thỏa mãn.

---

#### Câu 32 (ad-c4-d2-032) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về việc sử dụng quan hệ `<<include>>` trong mô hình Use Case?**

- **A.** Quan hệ `<<include>>` chỉ là hành vi tùy chọn, người dùng có quyền chọn thực hiện hoặc bỏ qua tùy thích
- **B.** Quan hệ `<<include>>` giúp tái sử dụng các đoạn logic nghiệp vụ dùng chung giữa nhiều ca sử dụng khác nhau
- **C.** Mũi tên nét đứt của quan hệ `<<include>>` luôn luôn trỏ từ Base Use Case hướng về phía Included Use Case
- **D.** Base Use Case không thể hoàn thành mục tiêu trọn vẹn của mình nếu Included Use Case gặp lỗi thất bại

> **Đáp án đúng:** **A** — *Quan hệ `<<include>>` chỉ là hành vi tùy chọn, người dùng có quyền chọn thực hiện hoặc bỏ qua tùy thích*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì `<<include>>` là quan hệ BẮT BUỘC (Mandatory), không phải tùy chọn. Quan hệ tùy chọn có điều kiện là `<<extend>>`.

---

#### Câu 33 (ad-c4-d2-033) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Khi nào nhóm phân tích nên tổ chức phân chia mô hình Use Case thành các Package (Gói phân hệ)?**

- **A.** Khi hệ thống có quy mô lớn với hàng chục Use Case cần phân chia theo các phân hệ nghiệp vụ mạch lạc
- **B.** Khi hệ thống chỉ có đúng một ca sử dụng duy nhất và chỉ có một người dùng sử dụng trong cả năm
- **C.** Khi người lập trình viên muốn nén toàn bộ mã nguồn vào đĩa CD để gửi bưu điện cho khách hàng xem
- **D.** Khi công ty muốn che giấu toàn bộ các chức năng của phần mềm để đối thủ cạnh tranh không sao chép

> **Đáp án đúng:** **A** — *Khi hệ thống có quy mô lớn với hàng chục Use Case cần phân chia theo các phân hệ nghiệp vụ mạch lạc*
>
> **Giải thích chi tiết:** Khi hệ thống mở rộng quy mô lớn (hàng chục đến hàng trăm Use Case), việc gom nhóm thành các Package theo Domain/Subsystem (như Bán hàng, Kho, Tài chính) giúp kiến trúc rõ ràng và dễ quản lý dự án.

---

#### Câu 34 (ad-c4-d2-034) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Bạn cần bổ sung tính năng 'Đăng ký nhận quà sinh nhật' vào ca sử dụng 'Checkout'. Bạn nên dùng giải pháp nào?**

- **A.** Dùng quan hệ `<<extend>>` từ ca sử dụng 'Receive Birthday Gift' móc vào Extension Point trong 'Checkout'
- **B.** Viết lại toàn bộ hệ thống từ đầu và thay đổi ngôn ngữ lập trình từ Java sang ngôn ngữ máy tính khác
- **C.** Dùng quan hệ `<<include>>` bắt buộc một trăm phần trăm khách hàng đến mua sắm đều phải nhận quà sinh nhật
- **D.** Tạo một biểu đồ Use Case hoàn toàn mới và không cho phép khách hàng thực hiện thanh toán giỏ hàng nữa

> **Đáp án đúng:** **A** — *Dùng quan hệ `<<extend>>` từ ca sử dụng 'Receive Birthday Gift' móc vào Extension Point trong 'Checkout'*
>
> **Giải thích chi tiết:** Nhận quà sinh nhật là tính năng mở rộng tùy chọn chỉ áp dụng cho khách hàng có ngày sinh nhật trong tháng. Giải pháp chuẩn UML là dùng quan hệ `<<extend>>` kèm Extension Point để giữ cho Base Case 'Checkout' trong sáng.

---

#### Câu 35 (ad-c4-d2-035) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Cạm bẫy 'CRUD Trap' trong thiết kế Use Case biểu hiện như thế nào và gây ra tác hại gì cho dự án?**

- **A.** Xé nhỏ một thực thể thành 4 Use Case Create, Read, Update, Delete gây lạm phát và mất bức tranh nghiệp vụ
- **B.** Làm cho hệ thống cơ sở dữ liệu bị hỏng khóa ngoại và tự động xóa toàn bộ các bản ghi của khách hàng
- **C.** Khiến cho máy chủ bị nghẽn mạng do lượng truy cập từ các robot tìm kiếm trên mạng internet quá lớn
- **D.** Làm cho màn hình vi tính của người sử dụng bị đổi màu và không thể hiển thị được các ký tự văn bản

> **Đáp án đúng:** **A** — *Xé nhỏ một thực thể thành 4 Use Case Create, Read, Update, Delete gây lạm phát và mất bức tranh nghiệp vụ*
>
> **Giải thích chi tiết:** CRUD Trap xảy ra khi BA tư duy theo cơ sở dữ liệu, phân mảnh một đối tượng thành 4 Use Case vụn vặt (Tạo, Xem, Sửa, Xóa). Cần gom lại thành 1 Use Case quản lý nghiệp vụ trọn vẹn (như 'Manage Customer Profiles').

---

#### Câu 36 (ad-c4-d2-036) — [🔴 KHÓ (VẬN DỤNG CAO)] [MATCHING]

**Hãy chọn phương án GHÉP CẶP CHÍNH XÁC giữa các tiêu chí trong Checklist đánh giá chất lượng đặc tả Use Case:**

- **A.** 1-User Goal: Mang lại giá trị quan sát được; 2-Black-box: Không phụ thuộc UI; 3-Complete: Bao quát kịch bản lỗi
- **B.** 1-User Goal: Đo cường độ dòng điện máy tính; 2-Black-box: Sơn màu đen thùng máy; 3-Complete: Xóa sạch mã nguồn
- **C.** 1-User Goal: Thu tiền lệ phí sử dụng mạng; 2-Black-box: Đóng gói hộp đĩa mềm; 3-Complete: Khóa bàn phím máy tính
- **D.** 1-User Goal: Tăng xung nhịp xử lý của chip; 2-Black-box: Mua thêm màn hình vi tính; 3-Complete: Tắt kết nối wifi

> **Đáp án đúng:** **A** — *1-User Goal: Mang lại giá trị quan sát được; 2-Black-box: Không phụ thuộc UI; 3-Complete: Bao quát kịch bản lỗi*
>
> **Giải thích chi tiết:** Ghép cặp chuẩn mực trong Checklist kiểm định Use Case: 1-User Goal (Ca sử dụng đạt được mục tiêu mang lại giá trị quan sát được); 2-Black-box view (Mô tả hành vi độc lập với chi tiết giao diện UI/mã nguồn); 3-Completeness (Bao quát đầy đủ Luồng chính và các Luồng ngoại lệ).

---

#### Câu 37 (ad-c4-d2-037) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**[Outside] Trong khung làm việc Scaled Agile Framework (SAFe), khái niệm Baseline được quản trị qua sự kiện nào?**

- **A.** PI Planning (Program Increment Planning) nơi toàn bộ Release Train đồng thuận về cam kết mục tiêu và phạm vi
- **B.** Buổi họp Daily Standup mười lăm phút hàng ngày của một nhóm lập trình viên độc lập trong góc văn phòng
- **C.** Buổi tiệc liên hoan cuối năm của ban giám đốc tập đoàn đối tác khi hoàn thành việc chia cổ tức tài chính
- **D.** Quy trình nộp phạt tiền cho công ty viễn thông khi đường truyền internet của tòa nhà bị mất tín hiệu

> **Đáp án đúng:** **A** — *PI Planning (Program Increment Planning) nơi toàn bộ Release Train đồng thuận về cam kết mục tiêu và phạm vi*
>
> **Giải thích chi tiết:** [Outside] Trong quy mô Agile doanh nghiệp lớn (SAFe), PI Planning là sự kiện cốt lõi xác lập Baseline cho một chu kỳ Program Increment (thường 8-12 tuần), nơi toàn bộ Agile Release Train đồng thuận mục tiêu (PI Objectives) và phạm vi cam kết.

---

#### Câu 38 (ad-c4-d2-038) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**[Outside] Khi ứng dụng công cụ NLP và Mô hình ngôn ngữ lớn (LLM) để trích xuất Use Case từ biên bản phỏng vấn, rủi ro lớn nhất là:**

- **A.** Mô hình có thể sinh ra các bước kịch bản ảo giác (Hallucinations) không có thật trong nghiệp vụ của doanh nghiệp
- **B.** Mô hình làm tiêu tốn quá nhiều mực in của máy in văn phòng khi in tài liệu yêu cầu ra các trang giấy trắng
- **C.** Mô hình tự động gửi email mời các đối thủ cạnh tranh tham gia vào ban giám đốc điều hành của công ty mình
- **D.** Mô hình làm giảm tốc độ đường truyền internet của toàn bộ khu vực thành phố xuống mức thấp kỷ lục

> **Đáp án đúng:** **A** — *Mô hình có thể sinh ra các bước kịch bản ảo giác (Hallucinations) không có thật trong nghiệp vụ của doanh nghiệp*
>
> **Giải thích chi tiết:** [Outside] Rủi ro lớn nhất khi dùng LLMs tự động hóa trích xuất yêu cầu là hiện tượng 'Hallucination' (Ảo giác thông tin): AI tự sáng tạo thêm các quy tắc hoặc bước xử lý không hề tồn tại trong nghiệp vụ thực tế của khách hàng.

---

#### Câu 39 (ad-c4-d2-039) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**[Outside] Trong kiến trúc Microservices, làm thế nào để tránh cạm bẫy 'Distributed Monolith' khi thiết kế các Use Case lớn?**

- **A.** Thiết kế các dịch vụ có tính kết dính cao (High Cohesion) và giao tiếp phi đồng bộ thông qua Message Broker
- **B.** Bắt buộc tất cả các dịch vụ vi mô phải chia sẻ chung một cơ sở dữ liệu duy nhất và dùng chung một khóa chính
- **C.** Cấm tất cả các dịch vụ không được trao đổi bất kỳ dữ liệu nào với nhau trong toàn bộ vòng đời vận hành
- **D.** Chuyển toàn bộ mã nguồn của các dịch vụ vi mô về một tệp tin duy nhất dài hàng trăm nghìn dòng lệnh

> **Đáp án đúng:** **A** — *Thiết kế các dịch vụ có tính kết dính cao (High Cohesion) và giao tiếp phi đồng bộ thông qua Message Broker*
>
> **Giải thích chi tiết:** [Outside] Để tránh biến Microservices thành Distributed Monolith (Nguyên khối phân tán), các ca sử dụng lớn cần được phân rã theo ranh giới nghiệp vụ tự quản (Loose Coupling & High Cohesion), giao tiếp phi đồng bộ qua Event Broker (như Kafka, RabbitMQ).

---

#### Câu 40 (ad-c4-d2-040) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**[Outside] Khi ánh xạ mô hình Use Case sang Thiết kế hướng miền (DDD), khái niệm 'Aggregate Root' đảm nhận vai trò gì?**

- **A.** Là thực thể cổng vào duy nhất chịu trách nhiệm bảo đảm toàn vẹn các quy tắc nghiệp vụ khi thực thi ca sử dụng
- **B.** Là một thanh bộ nhớ RAM máy tính lưu trữ tạm thời các biểu tượng đồ họa trước khi vẽ lên màn hình vi tính
- **C.** Là một sợi dây cáp mạng quang nối từ tổng đài bưu điện trung tâm vào phòng máy chủ của công ty bảo hiểm
- **D.** Là chức danh của người nhân viên bảo vệ chịu trách nhiệm bấm chuông báo giờ tan làm cho toàn bộ công ty

> **Đáp án đúng:** **A** — *Là thực thể cổng vào duy nhất chịu trách nhiệm bảo đảm toàn vẹn các quy tắc nghiệp vụ khi thực thi ca sử dụng*
>
> **Giải thích chi tiết:** [Outside] Trong DDD, Aggregate Root là thực thể đóng vai trò 'người gác cổng' duy nhất của một cụm thực thể, chịu trách nhiệm thực thi các bất biến nghiệp vụ (Business Invariants) khi Use Case tác động lên dữ liệu.

---

