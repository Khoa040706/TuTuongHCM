# TỔNG HỢP 2 BỘ ĐỀ THI TRẮC NGHIỆM CHƯƠNG I: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
*(Tổng cộng 80 câu hỏi học thuật chuẩn mực — Cơ cấu: 30% Dễ - 40% Trung bình - 30% Khó)*

- **Môn học:** Phân tích thiết kế và yêu cầu (Requirements Analysis and Design)
- **Chương:** Chapter 1: Introduction — Requirements Analysis and Design
- **Quy mô:** 2 Bộ đề độc lập (Đề 1 & Đề 2), mỗi đề đúng 40 câu hỏi cố định (Tổng = 80 câu biên soạn mới 100%)
- **Tỷ lệ độ khó:** 12 Dễ (30%) — 16 Trung bình (40%) — 12 Khó (30%) cho từng đề
- **Tỷ lệ nguồn:** 36 câu Inside (giáo trình ad-ch1.js) + 4 câu Outside (thực tế dự án BA)
- **Quy chuẩn kỹ thuật:** Đáp ứng độ lệch chiều dài phương án $\Delta L = L_{\max} - L_{\min} \le 15$ ký tự trên toàn bộ 80 câu
- **Đa dạng hình thức:** Trắc nghiệm chọn đúng, Chọn sai/ngoại lệ (**KHÔNG/SAI**), Tình huống thực tế (Case study), Ghép cặp phân loại (Matching), Điền khuyết/Trình tự logic (Fill-in)

---

## BỘ ĐỀ THI SỐ 1 (MÃ ĐỀ: ad-c1-d1)

*Bộ đề số 1 tập trung khảo sát tổng quan hệ thống thông tin (IPO, TPS/MIS/DSS/ESS), vai trò cốt lõi của Business Analyst, các kỹ thuật khơi mở yêu cầu, mô hình hóa UML và vòng đời SDLC/UP.*

---

#### Câu 1 (ad-c1-d1-001) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Mô hình xử lý cơ bản nhất của một hệ thống thông tin (IPO model) bao gồm các khối nào?**

- **A.** Khối Input, Process và Output
- **B.** Khối Storage, Network và Host
- **C.** Khối Hardware, Code và People
- **D.** Khối Strategy, Task và Output

> **Đáp án đúng:** **A** — *Khối Input, Process và Output*
>
> **Giải thích chi tiết:** Mô hình IPO cơ bản bao gồm 3 khối cốt lõi: Input (Đầu vào), Process (Xử lý) và Output (Đầu ra), ngoài ra có Storage và Feedback loop.

---

#### Câu 2 (ad-c1-d1-002) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong 5 thành phần cốt lõi của hệ thống thông tin, thành phần nào giữ vai trò quan trọng nhất?**

- **A.** Con người (People - người dùng và chuyên gia)
- **B.** Phần cứng (Hardware - máy chủ và trạm làm việc)
- **C.** Quy trình (Procedures - văn bản hướng dẫn nghiệp vụ)
- **D.** Mạng lưới (Networks - hạ tầng cáp quang truyền dẫn)

> **Đáp án đúng:** **A** — *Con người (People - người dùng và chuyên gia)*
>
> **Giải thích chi tiết:** Con người (People) là yếu tố quyết định giá trị của hệ thống thông tin vì họ là chủ thể vận hành, nhập liệu và ra quyết định.

---

#### Câu 3 (ad-c1-d1-003) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Phát biểu nào sau đây mô tả CHÍNH XÁC quan hệ giữa Dữ liệu (Data) và Thông tin (Information)?**

- **A.** Thông tin là dữ liệu đã được gán ngữ cảnh có ý nghĩa
- **B.** Dữ liệu là thông tin đã được phân tích và tổng hợp lại
- **C.** Dữ liệu và thông tin là hai khái niệm đồng nghĩa hoàn toàn
- **D.** Thông tin luôn luôn là các con số thô chưa qua biến đổi

> **Đáp án đúng:** **A** — *Thông tin là dữ liệu đã được gán ngữ cảnh có ý nghĩa*
>
> **Giải thích chi tiết:** Dữ liệu (Data) là các sự kiện thô chưa qua xử lý. Khi dữ liệu được xử lý và đặt vào ngữ cảnh cụ thể, nó trở thành Thông tin (Information).

---

#### Câu 4 (ad-c1-d1-004) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Hệ thống xử lý giao dịch TPS (Transaction Processing System) phục vụ chủ yếu cho cấp quản lý nào?**

- **A.** Cấp tác nghiệp vận hành hàng ngày (Operational level)
- **B.** Cấp chiến thuật điều phối phòng ban (Tactical level)
- **C.** Cấp chiến lược định hướng toàn cầu (Strategic level)
- **D.** Cấp hội đồng quản trị ra quyết định (Executive board)

> **Đáp án đúng:** **A** — *Cấp tác nghiệp vận hành hàng ngày (Operational level)*
>
> **Giải thích chi tiết:** TPS là hệ thống thông tin phục vụ cấp tác nghiệp (Operational level), ghi nhận và xử lý các giao dịch phát sinh thường nhật.

---

#### Câu 5 (ad-c1-d1-005) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Điểm khác biệt cốt lõi nhất giữa hệ thống MIS và hệ thống DSS trong tổ chức doanh nghiệp là gì?**

- **A.** MIS cung cấp báo cáo định kỳ; DSS hỗ trợ phân tích What-if
- **B.** MIS chỉ xử lý phi cấu trúc; DSS chỉ ghi nhận giao dịch thô
- **C.** MIS phục vụ tổng giám đốc; DSS phục vụ nhân viên thu ngân
- **D.** MIS không có cơ sở dữ liệu; DSS bắt buộc phải có máy chủ lớn

> **Đáp án đúng:** **A** — *MIS cung cấp báo cáo định kỳ; DSS hỗ trợ phân tích What-if*
>
> **Giải thích chi tiết:** MIS tập trung tạo ra các báo cáo định kỳ tóm tắt từ TPS; DSS cung cấp các mô hình toán học và phân tích What-if cho các quyết định bán cấu trúc.

---

#### Câu 6 (ad-c1-d1-006) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Hệ thống hỗ trợ điều hành chiến lược ESS (Executive Support System) có đặc điểm nổi bật nào?**

- **A.** Tổng hợp thông tin nội bộ và dữ liệu vĩ mô bên ngoài
- **B.** Thực hiện quét mã vạch và thanh toán hóa đơn siêu thị
- **C.** Chỉ phục vụ trưởng phòng kinh doanh lập kế hoạch tuần
- **D.** Tự động gửi email nhắc việc cho nhân viên mới thử việc

> **Đáp án đúng:** **A** — *Tổng hợp thông tin nội bộ và dữ liệu vĩ mô bên ngoài*
>
> **Giải thích chi tiết:** ESS hỗ trợ lãnh đạo cấp cao (C-level) với bảng điều khiển trực quan (Dashboard), kết hợp thông tin nội bộ với dữ liệu thị trường bên ngoài.

---

#### Câu 7 (ad-c1-d1-007) — [🔴 KHÓ (VẬN DỤNG CAO)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về các phân hệ phần mềm tích hợp trong doanh nghiệp?**

- **A.** ERP chỉ quản lý kế toán và tuyệt đối không chia sẻ dữ liệu
- **B.** CRM tối ưu hóa các quy trình chăm sóc và tương tác khách hàng
- **C.** SCM quản lý dòng chảy hàng hóa từ nhà cung ứng đến người mua
- **D.** Hệ thống BI hỗ trợ phân tích dữ liệu lịch sử để dự báo tương lai

> **Đáp án đúng:** **A** — *ERP chỉ quản lý kế toán và tuyệt đối không chia sẻ dữ liệu*
>
> **Giải thích chi tiết:** Khẳng định ERP chỉ quản lý kế toán và không chia sẻ dữ liệu là SAI. ERP là giải pháp hoạch định nguồn lực tổng thể chia sẻ CSDL tập trung cho toàn doanh nghiệp.

---

#### Câu 8 (ad-c1-d1-008) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Chuỗi siêu thị ghi nhận 10.000 dòng hóa đơn bán lẻ mỗi ngày. Việc tổng hợp số lượng sữa bán ra theo từng quận thuộc bước chuyển đổi nào?**

- **A.** Chuyển từ Dữ liệu thô (Data) sang Thông tin (Information)
- **B.** Chuyển từ Trí tuệ (Wisdom) ngược về Dữ liệu thô (Data)
- **C.** Chuyển từ Quy trình (Procedure) sang Phần cứng (Hardware)
- **D.** Chuyển từ Đầu ra (Output) sang khối Nhập liệu (Input)

> **Đáp án đúng:** **A** — *Chuyển từ Dữ liệu thô (Data) sang Thông tin (Information)*
>
> **Giải thích chi tiết:** Từng dòng hóa đơn là Dữ liệu thô. Khi được gom nhóm, tính toán theo khu vực và mặt hàng để thấy được xu hướng thì đã trở thành Thông tin.

---

#### Câu 9 (ad-c1-d1-009) — [🔴 KHÓ (VẬN DỤNG CAO)] [MATCHING]

**Hãy ghép cặp tương ứng giữa hệ thống thông tin và cấp bậc quản lý phù hợp nhất trong doanh nghiệp:**

- **A.** TPS - Tác nghiệp; MIS/DSS - Quản lý; ESS - Chiến lược
- **B.** TPS - Chiến lược; MIS/DSS - Tác nghiệp; ESS - Quản lý
- **C.** TPS - Quản lý; MIS/DSS - Chiến lược; ESS - Tác nghiệp
- **D.** TPS - Tác nghiệp; MIS/DSS - Chiến lược; ESS - Quản lý

> **Đáp án đúng:** **A** — *TPS - Tác nghiệp; MIS/DSS - Quản lý; ESS - Chiến lược*
>
> **Giải thích chi tiết:** Thứ tự phân tầng chuẩn từ dưới lên: TPS phục vụ cấp tác nghiệp, MIS/DSS phục vụ cấp quản lý chiến thuật, ESS phục vụ cấp chiến lược cao nhất.

---

#### Câu 10 (ad-c1-d1-010) — [🟢 DỄ (NHẬN BIẾT)] [FILL-BLANK]

**Trong chu trình IPO mở rộng, thành phần đóng vai trò so sánh đầu ra với tiêu chuẩn để điều chỉnh đầu vào là:**

- **A.** Cơ chế phản hồi và kiểm soát (Feedback & Control loop)
- **B.** Khối thiết bị ngoại vi trích xuất dữ liệu (Output block)
- **C.** Bộ xử lý trung tâm điều phối tác vụ (Processing unit)
- **D.** Cơ sở dữ liệu lưu trữ hồ sơ nghiệp vụ (Storage system)

> **Đáp án đúng:** **A** — *Cơ chế phản hồi và kiểm soát (Feedback & Control loop)*
>
> **Giải thích chi tiết:** Feedback loop (Vòng phản hồi) ghi nhận kết quả đầu ra, đối chiếu với mục tiêu đặt ra để gửi thông tin điều chỉnh ngược lại cho pha Input và Process.

---

#### Câu 11 (ad-c1-d1-011) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Vai trò trọng tâm bản chất nhất của một chuyên viên Business Analyst (BA) trong dự án phần mềm là gì?**

- **A.** Hiểu bài toán nghiệp vụ và đề xuất giải pháp tạo giá trị
- **B.** Trực tiếp viết toàn bộ mã nguồn của các chức năng backend
- **C.** Cài đặt hệ điều hành và bảo trì máy chủ cho phòng máy tính
- **D.** Đảm nhận việc quyết định bảng lương cho các lập trình viên

> **Đáp án đúng:** **A** — *Hiểu bài toán nghiệp vụ và đề xuất giải pháp tạo giá trị*
>
> **Giải thích chi tiết:** BA là người phân tích vấn đề kinh doanh của tổ chức, xác định nhu cầu của các bên liên quan và đề xuất giải pháp khả thi mang lại giá trị.

---

#### Câu 12 (ad-c1-d1-012) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Hình ảnh ẩn dụ kinh điển 'Cầu nối' (The Bridge) của BA thể hiện sự kết nối giữa hai đối tượng chính nào?**

- **A.** Các bên liên quan nghiệp vụ và đội ngũ kỹ thuật công nghệ
- **B.** Bộ phận tuyển dụng nhân sự và bộ phận tài chính kế toán
- **C.** Nhà cung cấp máy tính phần cứng và nhân viên trực bảo vệ
- **D.** Nhà mạng viễn thông bên ngoài và khách hàng mua hàng lẻ

> **Đáp án đúng:** **A** — *Các bên liên quan nghiệp vụ và đội ngũ kỹ thuật công nghệ*
>
> **Giải thích chi tiết:** BA là cầu nối phiên dịch giữa ngôn ngữ nghiệp vụ của Business Stakeholders và ngôn ngữ kỹ thuật của IT Development Team.

---

#### Câu 13 (ad-c1-d1-013) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Nhiệm vụ nào sau đây KHÔNG THUỘC trách nhiệm cốt lõi của một chuyên viên Business Analyst?**

- **A.** Trực tiếp cấu hình cơ sở dữ liệu trên máy chủ production
- **B.** Thu thập và làm rõ các yêu cầu từ phía người dùng cuối
- **C.** Mô hình hóa quy trình nghiệp vụ bằng biểu đồ tiêu chuẩn
- **D.** Hỗ trợ người dùng kiểm thử nghiệm thu giải pháp phần mềm

> **Đáp án đúng:** **A** — *Trực tiếp cấu hình cơ sở dữ liệu trên máy chủ production*
>
> **Giải thích chi tiết:** Việc cấu hình hệ quản trị CSDL trên máy chủ production là công việc của Database Administrator (DBA) hoặc DevOps, không phải của BA.

---

#### Câu 14 (ad-c1-d1-014) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Trong bộ kỹ năng của BA, kỹ năng nào giúp phân rã vấn đề phức tạp thành các thành phần logic nhỏ hơn?**

- **A.** Kỹ năng tư duy phân tích và giải quyết vấn đề logic
- **B.** Kỹ năng đàm phán hợp đồng thương mại với đối tác lớn
- **C.** Kỹ năng thiết kế đồ họa banner và logo nhận diện web
- **D.** Kỹ năng vận hành máy in công nghiệp và bảo trì đường dây

> **Đáp án đúng:** **A** — *Kỹ năng tư duy phân tích và giải quyết vấn đề logic*
>
> **Giải thích chi tiết:** Analytical Thinking & Problem Solving giúp BA nhìn thấu cấu trúc vấn đề, phân rã quy trình lớn thành các use case nhỏ để đặc tả chính xác.

---

#### Câu 15 (ad-c1-d1-015) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Tại sao Business Analyst cần phải có kiến thức nền tảng nhất định về mặt kỹ thuật phần mềm (Technical skills)?**

- **A.** Để đánh giá tính khả thi và trao đổi hiệu quả với dev
- **B.** Để có thể thay thế lập trình viên viết code khi thiếu người
- **C.** Để tự cài đặt toàn bộ hệ thống cáp mạng cho văn phòng mới
- **D.** Để trực tiếp sửa lỗi bảo mật nhân hệ điều hành máy chủ Linux

> **Đáp án đúng:** **A** — *Để đánh giá tính khả thi và trao đổi hiệu quả với dev*
>
> **Giải thích chi tiết:** Kiến thức kỹ thuật giúp BA biết giải pháp nào là khả thi, hiểu được hạn chế công nghệ và truyền đạt yêu cầu rõ ràng cho lập trình viên.

---

#### Câu 16 (ad-c1-d1-016) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Trong vòng đời dự án SDLC, khối lượng công việc và mức độ tham gia của BA tập trung cao độ nhất ở giai đoạn nào?**

- **A.** Giai đoạn Khởi động dự án và Phân tích yêu cầu hệ thống
- **B.** Giai đoạn Viết mã nguồn chức năng và Đóng gói phát hành
- **C.** Giai đoạn Cài đặt phần mềm vào máy khách và Vệ sinh thiết bị
- **D.** Giai đoạn Bàn giao bản quyền thương mại và Thanh lý hợp đồng

> **Đáp án đúng:** **A** — *Giai đoạn Khởi động dự án và Phân tích yêu cầu hệ thống*
>
> **Giải thích chi tiết:** BA hoạt động tích cực nhất ở giai đoạn Planning và Analysis, làm rõ bài toán và viết tài liệu đặc tả trước khi đội ngũ bước vào thiết kế chi tiết.

---

#### Câu 17 (ad-c1-d1-017) — [🔴 KHÓ (VẬN DỤNG CAO)] [CHOOSE-WRONG]

**Phát biểu nào sau đây là SAI khi nói về trách nhiệm của Business Analyst trong kiểm thử phần mềm?**

- **A.** BA là người trực tiếp viết mã tự động kiểm thử hiệu năng
- **B.** BA hỗ trợ xây dựng kịch bản kiểm thử chấp nhận người dùng
- **C.** BA xác minh xem chức năng xây dựng có đúng đặc tả hay không
- **D.** BA đồng hành cùng người dùng trong các buổi đánh giá nghiệm thu

> **Đáp án đúng:** **A** — *BA là người trực tiếp viết mã tự động kiểm thử hiệu năng*
>
> **Giải thích chi tiết:** Viết mã kiểm thử hiệu năng (Automation Performance Testing) là nhiệm vụ của QA/Tester chuyên nghiệp. BA tham gia vào kiểm thử UAT xác nhận nghiệp vụ.

---

#### Câu 18 (ad-c1-d1-018) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Khách hàng yêu cầu thêm một chức năng báo cáo rất phức tạp nhưng thời hạn dự án còn 2 tuần. BA nên làm gì ĐÚNG NHẤT?**

- **A.** Phân tích tác động, tư vấn ưu tiên scope hoặc dời sang pha sau
- **B.** Lập tức từ chối thẳng thừng và không tiếp tục lắng nghe khách
- **C.** Âm thầm ép lập trình viên tăng ca thâu đêm mà không báo cáo
- **D.** Hủy bỏ toàn bộ các chức năng cốt lõi trước đó để làm báo cáo

> **Đáp án đúng:** **A** — *Phân tích tác động, tư vấn ưu tiên scope hoặc dời sang pha sau*
>
> **Giải thích chi tiết:** BA chuyên nghiệp phải tiến hành Impact Analysis (Phân tích tác động về thời gian, chi phí, tài nguyên) và thương lượng với Product Owner/Khách hàng.

---

#### Câu 19 (ad-c1-d1-019) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Khả năng lắng nghe thấu cảm, điều phối xung đột ý kiến giữa các phòng ban thuộc nhóm kỹ năng nào của BA?**

- **A.** Kỹ năng giao tiếp và quan hệ liên cá nhân (Soft skills)
- **B.** Kỹ năng kiểm thử hiệu năng cơ sở dữ liệu (Database skills)
- **C.** Kỹ năng bảo mật an toàn thông tin mạng (Security skills)
- **D.** Kỹ năng thiết kế mạch vi xử lý nhúng (Hardware skills)

> **Đáp án đúng:** **A** — *Kỹ năng giao tiếp và quan hệ liên cá nhân (Soft skills)*
>
> **Giải thích chi tiết:** Kỹ năng lắng nghe, thương lượng, thuyết phục và xử lý xung đột thuộc nhóm Interpersonal & Communication Skills (Kỹ năng mềm) cực kỳ quan trọng của BA.

---

#### Câu 20 (ad-c1-d1-020) — [🟢 DỄ (NHẬN BIẾT)] [FILL-BLANK]

**Tài liệu đặc tả yêu cầu phần mềm do BA chủ trì biên soạn làm căn cứ kỹ thuật cho toàn dự án thường được gọi là:**

- **A.** Tài liệu đặc tả yêu cầu phần mềm chuẩn (BRD hoặc SRS)
- **B.** Bản hợp đồng lao động thời vụ cho nhân sự dự án gia công
- **C.** Báo cáo kết quả kiểm toán tài chính nội bộ định kỳ năm
- **D.** Sổ tay hướng dẫn lắp đặt phần cứng máy chủ trung tâm dữ liệu

> **Đáp án đúng:** **A** — *Tài liệu đặc tả yêu cầu phần mềm chuẩn (BRD hoặc SRS)*
>
> **Giải thích chi tiết:** BRD (Business Requirements Document) và SRS (Software Requirements Specification) là các tài liệu chuẩn mực do BA biên soạn để chuyển giao cho dev team.

---

#### Câu 21 (ad-c1-d1-021) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Khái niệm nào đại diện cho một khung quy trình toàn diện hướng dẫn toàn bộ các bước phát triển phần mềm?**

- **A.** Methodology (Phương pháp luận phát triển hệ thống)
- **B.** Technique (Kỹ thuật thực hiện một hành động cụ thể)
- **C.** Tool (Công cụ phần mềm hỗ trợ tự động hóa thao tác)
- **D.** Model (Mô hình biểu diễn trừu tượng hóa một khía cạnh)

> **Đáp án đúng:** **A** — *Methodology (Phương pháp luận phát triển hệ thống)*
>
> **Giải thích chi tiết:** Methodology là phương pháp luận — khung quy trình tổng thể có cấu trúc hướng dẫn toàn bộ vòng đời phát triển phần mềm (như Waterfall, Agile, UP).

---

#### Câu 22 (ad-c1-d1-022) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Tổ chức quốc tế nào chịu trách nhiệm quản lý và chuẩn hóa Ngôn ngữ Mô hình hóa Thống nhất (UML)?**

- **A.** Tổ chức chuẩn hóa Object Management Group (OMG)
- **B.** Tổ chức Tiêu chuẩn Đo lường Quốc tế Viễn thông (ITU)
- **C.** Viện Tiêu chuẩn và Công nghệ Quốc gia Mỹ (NIST)
- **D.** Hiệp hội Phần mềm Nguồn mở Apache Quốc tế (ASF)

> **Đáp án đúng:** **A** — *Tổ chức chuẩn hóa Object Management Group (OMG)*
>
> **Giải thích chi tiết:** UML được tiêu chuẩn hóa và duy trì bởi tổ chức Object Management Group (OMG) từ năm 1997 cho đến nay.

---

#### Câu 23 (ad-c1-d1-023) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Mục đích quan trọng nhất của việc xây dựng Mô hình (Model) trong kỹ nghệ phần mềm là gì?**

- **A.** Trừu tượng hóa để quản lý độ phức tạp của hệ thống
- **B.** Trang trí tài liệu dự án thêm nhiều màu sắc bắt mắt
- **C.** Thay thế hoàn toàn mã nguồn chương trình ứng dụng thực
- **D.** Loại bỏ hoàn toàn vai trò của các lập trình viên phần mềm

> **Đáp án đúng:** **A** — *Trừu tượng hóa để quản lý độ phức tạp của hệ thống*
>
> **Giải thích chi tiết:** Mô hình giúp đơn giản hóa và trừu tượng hóa hiện thực, cho phép con người nắm bắt và quản lý độ phức tạp của hệ thống trước khi bắt tay lập trình.

---

#### Câu 24 (ad-c1-d1-024) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Nhóm biểu đồ nào trong UML tập trung thể hiện khía cạnh tương tác động và hành vi theo thời gian của hệ thống?**

- **A.** Nhóm biểu đồ hành vi (Behavioral & Interaction diagrams)
- **B.** Nhóm biểu đồ cấu trúc tĩnh dữ liệu (Structural diagrams)
- **C.** Nhóm biểu đồ hạ tầng vật lý máy chủ (Deployment diagrams)
- **D.** Nhóm biểu đồ kiến trúc thành phần nhúng (Component models)

> **Đáp án đúng:** **A** — *Nhóm biểu đồ hành vi (Behavioral & Interaction diagrams)*
>
> **Giải thích chi tiết:** Behavioral Diagrams (như Sequence Diagram, Activity Diagram, State Machine) mô tả hành vi động và sự tương tác giữa các đối tượng theo thời gian.

---

#### Câu 25 (ad-c1-d1-025) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Kỹ thuật thu thập yêu cầu nào sau đây đặc biệt hiệu quả để tìm hiểu quy trình thực tế mà người dùng khó diễn đạt bằng lời?**

- **A.** Quan sát trực tiếp tại nơi làm việc (Observation technique)
- **B.** Phát phiếu điều tra trắc nghiệm qua email (Questionnaire)
- **C.** Đọc lướt các bài báo công nghệ trên mạng (Web searching)
- **D.** Gửi tin nhắn hỏi nhanh qua ứng dụng trò chuyện nội bộ

> **Đáp án đúng:** **A** — *Quan sát trực tiếp tại nơi làm việc (Observation technique)*
>
> **Giải thích chi tiết:** Observation (Quan sát trực tiếp) giúp BA nhìn thấy thao tác thực tế của người dùng, phát hiện các bước ngầm định mà người dùng quên hoặc không diễn đạt được.

---

#### Câu 26 (ad-c1-d1-026) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Đặc điểm nổi bật nhất của kỹ thuật Hội thảo thiết kế ứng dụng chung JAD (Joint Application Development) là gì?**

- **A.** Tập hợp chuyên gia nghiệp vụ và kỹ thuật trong cùng phiên làm việc
- **B.** Chỉ phỏng vấn riêng lẻ từng nhân viên để tránh tranh luận công khai
- **C.** Gửi bảng câu hỏi ẩn danh qua hòm thư góp ý của cơ quan doanh nghiệp
- **D.** Chờ đợi người dùng tự gửi yêu cầu bằng văn bản khi có nhu cầu mới

> **Đáp án đúng:** **A** — *Tập hợp chuyên gia nghiệp vụ và kỹ thuật trong cùng phiên làm việc*
>
> **Giải thích chi tiết:** JAD là kỹ thuật hội thảo tập trung nhiều bên liên quan (Users, Managers, BAs, Devs) có người điều phối (Facilitator) để đạt được đồng thuận nhanh chóng.

---

#### Câu 27 (ad-c1-d1-027) — [🔴 KHÓ (VẬN DỤNG CAO)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về kỹ thuật khảo sát bằng Bảng câu hỏi (Questionnaire / Survey)?**

- **A.** Cho phép đào sâu và giải thích linh hoạt mọi tình huống phức tạp
- **B.** Tiết kiệm chi phí khi thu thập ý kiến của hàng ngàn người dùng
- **C.** Dữ liệu thu về dễ dàng thống kê và phân tích bằng công cụ định lượng
- **D.** Tỷ lệ phản hồi thường thấp và câu hỏi có thể bị người trả lời hiểu sai

> **Đáp án đúng:** **A** — *Cho phép đào sâu và giải thích linh hoạt mọi tình huống phức tạp*
>
> **Giải thích chi tiết:** Bảng câu hỏi không linh hoạt và không đào sâu được chi tiết; kỹ thuật cho phép linh hoạt đào sâu là Phỏng vấn trực tiếp (Interview).

---

#### Câu 28 (ad-c1-d1-028) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Khách hàng chưa hình dung rõ giao diện và luồng nghiệp vụ mới. Kỹ thuật kỹ nghệ nào phù hợp nhất để kích hoạt yêu cầu?**

- **A.** Xây dựng bản mẫu thử nghiệm tương tác (Prototyping technique)
- **B.** Gửi tài liệu phân tích CSDL dài 500 trang cho khách tự đọc
- **C.** Bắt buộc khách hàng ký biên bản chốt yêu cầu ngay trong ngày đầu
- **D.** Yêu cầu khách hàng tự học ngôn ngữ lập trình để hiểu hệ thống

> **Đáp án đúng:** **A** — *Xây dựng bản mẫu thử nghiệm tương tác (Prototyping technique)*
>
> **Giải thích chi tiết:** Prototyping (Tạo bản mẫu mô phỏng giao diện/luồng hoạt động) giúp người dùng 'nhìn thấy và chạm vào' hệ thống tương lai, từ đó làm rõ yêu cầu dễ dàng.

---

#### Câu 29 (ad-c1-d1-029) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Phát biểu nào sau đây phân biệt CHÍNH XÁC quan hệ giữa Tool (Công cụ) và Technique (Kỹ thuật)?**

- **A.** Technique là phương pháp thực hiện; Tool là phần mềm hỗ trợ
- **B.** Technique là thiết bị phần cứng; Tool là văn bản tài liệu hướng dẫn
- **C.** Technique là ngôn ngữ lập trình; Tool là bộ nhớ máy tính để bàn
- **D.** Technique và Tool là hai từ đồng nghĩa hoàn toàn trong kỹ nghệ phần mềm

> **Đáp án đúng:** **A** — *Technique là phương pháp thực hiện; Tool là phần mềm hỗ trợ*
>
> **Giải thích chi tiết:** Technique (như Phỏng vấn, JAD) là cách thức con người hành động; Tool (như Jira, Enterprise Architect) là công cụ phần mềm hỗ trợ thực hiện kỹ thuật đó.

---

#### Câu 30 (ad-c1-d1-030) — [🟢 DỄ (NHẬN BIẾT)] [FILL-BLANK]

**Công cụ phần mềm hỗ trợ tự động hóa các hoạt động phân tích, thiết kế và sinh tài liệu trong kỹ nghệ phần mềm gọi là:**

- **A.** Công cụ CASE (Computer-Aided Software Engineering tools)
- **B.** Phần mềm chỉnh sửa hiệu ứng video và biên tập âm thanh số
- **C.** Hệ điều hành mạng thời gian thực dùng trong thiết bị bay
- **D.** Trình duyệt web dùng để tra cứu tin tức thời tiết buổi sáng

> **Đáp án đúng:** **A** — *Công cụ CASE (Computer-Aided Software Engineering tools)*
>
> **Giải thích chi tiết:** CASE tools (Computer-Aided Software Engineering) là các công cụ hỗ trợ tự động hóa quy trình phân tích, thiết kế, vẽ sơ đồ và sinh mã nguồn.

---

#### Câu 31 (ad-c1-d1-031) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Năm giai đoạn chuẩn theo trình tự thời gian của vòng đời phát triển hệ thống truyền thống (SDLC) là:**

- **A.** Planning ➔ Analysis ➔ Design ➔ Implementation ➔ Maintenance
- **B.** Analysis ➔ Planning ➔ Implementation ➔ Design ➔ Maintenance
- **C.** Design ➔ Analysis ➔ Planning ➔ Maintenance ➔ Implementation
- **D.** Implementation ➔ Planning ➔ Analysis ➔ Design ➔ Maintenance

> **Đáp án đúng:** **A** — *Planning ➔ Analysis ➔ Design ➔ Implementation ➔ Maintenance*
>
> **Giải thích chi tiết:** Thứ tự chuẩn của 5 giai đoạn SDLC truyền thống: Lập kế hoạch (Planning) ➔ Phân tích (Analysis) ➔ Thiết kế (Design) ➔ Cài đặt (Implementation) ➔ Bảo trì (Maintenance).

---

#### Câu 32 (ad-c1-d1-032) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Quy trình thống nhất Unified Process (UP) được chia thành 4 giai đoạn (Phases) theo thứ tự nào?**

- **A.** Inception ➔ Elaboration ➔ Construction ➔ Transition
- **B.** Elaboration ➔ Inception ➔ Transition ➔ Construction
- **C.** Inception ➔ Construction ➔ Elaboration ➔ Transition
- **D.** Construction ➔ Inception ➔ Elaboration ➔ Transition

> **Đáp án đúng:** **A** — *Inception ➔ Elaboration ➔ Construction ➔ Transition*
>
> **Giải thích chi tiết:** 4 giai đoạn của Unified Process: Khởi đầu (Inception) ➔ Lập mô hình kiến trúc (Elaboration) ➔ Xây dựng (Construction) ➔ Chuyển giao (Transition).

---

#### Câu 33 (ad-c1-d1-033) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Sự phân định trọng tâm giữa giai đoạn Phân tích (Analysis) và Thiết kế (Design) được hiểu là:**

- **A.** Analysis trả lời câu hỏi 'WHAT'; Design trả lời câu hỏi 'HOW'
- **B.** Analysis trả lời câu hỏi 'HOW'; Design trả lời câu hỏi 'WHAT'
- **C.** Analysis trả lời câu hỏi 'WHEN'; Design trả lời câu hỏi 'WHY'
- **D.** Analysis trả lời câu hỏi 'WHO'; Design trả lời câu hỏi 'WHERE'

> **Đáp án đúng:** **A** — *Analysis trả lời câu hỏi 'WHAT'; Design trả lời câu hỏi 'HOW'*
>
> **Giải thích chi tiết:** Analysis tập trung vào việc hệ thống CẦN LÀM GÌ (WHAT), còn Design tập trung vào việc hệ thống SẼ LÀM NHƯ THẾ NÀO bằng công nghệ cụ thể (HOW).

---

#### Câu 34 (ad-c1-d1-034) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Mục tiêu trọng yếu nhất của giai đoạn Elaboration trong quy trình Unified Process (UP) là gì?**

- **A.** Xây dựng đường cơ sở kiến trúc và triệt tiêu các rủi ro lớn
- **B.** Viết xong 100% dòng mã nguồn của toàn bộ các chức năng phụ
- **C.** Đóng gói đĩa cài đặt và chuyển giao cho khách hàng nghiệm thu
- **D.** Bảo trì hệ thống sau khi đã vận hành trên thị trường 2 năm

> **Đáp án đúng:** **A** — *Xây dựng đường cơ sở kiến trúc và triệt tiêu các rủi ro lớn*
>
> **Giải thích chi tiết:** Giai đoạn Elaboration trong UP tập trung giải quyết các rủi ro kiến trúc cao nhất, thiết lập Architectural Baseline và hoàn thiện mô hình phân tích.

---

#### Câu 35 (ad-c1-d1-035) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Nhược điểm lớn nhất của mô hình Thác nước (Waterfall / Sequential SDLC) khi triển khai thực tế là gì?**

- **A.** Rất khó thích ứng khi yêu cầu người dùng thay đổi giữa chừng
- **B.** Không thể lập tài liệu đặc tả ở giai đoạn đầu của dự án phần mềm
- **C.** Không cho phép phân công công việc cụ thể cho từng thành viên
- **D.** Bắt buộc người dùng phải trực tiếp tham gia lập trình cùng với dev

> **Đáp án đúng:** **A** — *Rất khó thích ứng khi yêu cầu người dùng thay đổi giữa chừng*
>
> **Giải thích chi tiết:** Mô hình Thác nước mang tính tuần tự cứng nhắc; nếu có thay đổi hoặc sai sót ở giai đoạn đầu, chi phí sửa chữa ở giai đoạn cuối là cực kỳ đắt đỏ.

---

#### Câu 36 (ad-c1-d1-036) — [🔴 KHÓ (VẬN DỤNG CAO)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi so sánh giữa Traditional SDLC và Unified Process (UP)?**

- **A.** UP chỉ chạy duy nhất 1 chu kỳ tuần tự và cấm lặp lại các bước
- **B.** Traditional SDLC tuyến tính có thể gây rủi ro trễ tiến độ dự án
- **C.** UP kết hợp 4 phases theo thời gian và 9 workflows kỹ thuật
- **D.** UP coi việc khử rủi ro kiến trúc sớm ở Elaboration là sống còn

> **Đáp án đúng:** **A** — *UP chỉ chạy duy nhất 1 chu kỳ tuần tự và cấm lặp lại các bước*
>
> **Giải thích chi tiết:** Khẳng định UP chỉ chạy duy nhất 1 chu kỳ tuần tự là SAI. UP là quy trình Lặp và Tăng dần (Iterative & Incremental), mỗi giai đoạn có thể có nhiều iterations.

---

#### Câu 37 (ad-c1-d1-037) — [🔴 KHÓ (VẬN DỤNG CAO)] [OUTSIDE] [CASE-STUDY]

**[Outside] Trong mô hình Agile/Scrum thực tế, vai trò của Business Analyst thường tương thích chặt chẽ nhất với vai trò nào?**

- **A.** Cố vấn nghiệp vụ đắc lực cho Product Owner (PO proxy / BA)
- **B.** Chuyên gia quản trị máy chủ mạng và tường lửa an ninh (DevOps)
- **C.** Trưởng nhóm lập trình chịu trách nhiệm review code hàng ngày
- **D.** Nhân sự kế toán phụ trách thanh toán thù lao cho các lập trình viên

> **Đáp án đúng:** **A** — *Cố vấn nghiệp vụ đắc lực cho Product Owner (PO proxy / BA)*
>
> **Giải thích chi tiết:** [Outside] Trong thực tế Agile/Scrum, BA thường đóng vai trò là cánh tay đắc lực của Product Owner (hoặc Proxy PO), chịu trách nhiệm làm mịn User Stories và chuẩn bị Product Backlog.

---

#### Câu 38 (ad-c1-d1-038) — [🔴 KHÓ (VẬN DỤNG CAO)] [OUTSIDE] [CASE-STUDY]

**[Outside] Doanh nghiệp có hệ thống kế toán 15 năm tuổi chạy ổn định nhưng giao diện cũ. Chiến lược phân tích nào an toàn nhất cho BA?**

- **A.** Nghiên cứu tài liệu cũ kết hợp phỏng vấn sâu người vận hành (As-Is)
- **B.** Ngay lập tức xóa bỏ hệ thống cũ và yêu cầu mua ngay phần mềm mới
- **C.** Tự ý suy đoán toàn bộ quy trình kế toán mà không cần hỏi người dùng
- **D.** Bỏ qua quy tắc kế toán cũ và ép nhân viên làm theo chuẩn tự chế

> **Đáp án đúng:** **A** — *Nghiên cứu tài liệu cũ kết hợp phỏng vấn sâu người vận hành (As-Is)*
>
> **Giải thích chi tiết:** [Outside] Khi phân tích hệ thống kế thừa (Legacy System), BA cần khảo sát kỹ quy trình hiện tại (As-Is), đối chiếu luật kế toán hiện hành và tài liệu cũ trước khi đề xuất mô hình tương lai (To-Be).

---

#### Câu 39 (ad-c1-d1-039) — [🔴 KHÓ (VẬN DỤNG CAO)] [OUTSIDE] [SINGLE-CORRECT]

**[Outside] Khái niệm MVP (Minimum Viable Product) trong phát triển sản phẩm công nghệ hiện đại có ý nghĩa là gì?**

- **A.** Sản phẩm có đủ tính năng cốt lõi tối thiểu để kiểm chứng thị trường
- **B.** Bản mẫu hoàn chỉnh 100% tính năng sau 5 năm nghiên cứu kỹ lưỡng
- **C.** Tài liệu bản vẽ thiết kế không chứa bất kỳ đoạn mã lập trình nào
- **D.** Sản phẩm phần mềm miễn phí không có mục đích thương mại lâu dài

> **Đáp án đúng:** **A** — *Sản phẩm có đủ tính năng cốt lõi tối thiểu để kiểm chứng thị trường*
>
> **Giải thích chi tiết:** [Outside] MVP (Sản phẩm khả thi tối thiểu) là phiên bản có đủ chức năng cốt lõi giúp đội ngũ thu thập phản hồi thực tế từ khách hàng với chi phí và công sức tối thiểu.

---

#### Câu 40 (ad-c1-d1-040) — [🔴 KHÓ (VẬN DỤNG CAO)] [OUTSIDE] [CASE-STUDY]

**[Outside] Khi dự án đang trong pha thi công (Construction) mà khách hàng muốn đổi logic cốt lõi, quy trình chuẩn nhất là gì?**

- **A.** Lập Phiếu yêu cầu thay đổi (CR) và đánh giá lại chi phí, tiến độ
- **B.** Lập tức đáp ứng ngay mà không cần thông báo cho ban quản lý dự án
- **C.** Gửi email khiển trách khách hàng vì đã làm gián đoạn việc viết code
- **D.** Tự động xóa toàn bộ mã nguồn cũ để bắt đầu dự án lại từ con số không

> **Đáp án đúng:** **A** — *Lập Phiếu yêu cầu thay đổi (CR) và đánh giá lại chi phí, tiến độ*
>
> **Giải thích chi tiết:** [Outside] Khi có yêu cầu thay đổi phạm vi (Scope change), quy trình quản lý thay đổi (Change Request - CR) bắt buộc kích hoạt để phân tích tác động và điều chỉnh phụ lục hợp đồng.

---

## BỘ ĐỀ THI SỐ 2 (MÃ ĐỀ: ad-c1-d2)

*Bộ đề số 2 chuyên sâu đối sánh chuyên gia, các cạm bẫy thực tiễn, phân loại biểu đồ UML cấu trúc vs hành vi, 4 pha Unified Process và giải quyết xung đột yêu cầu nghiệp vụ.*

---

#### Câu 1 (ad-c1-d2-001) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Định nghĩa nào sau đây phản ánh ĐẦY ĐỦ NHẤT về bản chất của một Hệ thống thông tin (IS)?**

- **A.** Là tập hợp người, thiết bị, dữ liệu và quy trình phối hợp
- **B.** Là một chiếc máy tính cá nhân dùng soạn thảo văn bản đơn thuần
- **C.** Là đường dây mạng Internet kết nối các chi nhánh văn phòng
- **D.** Là tập hợp các tủ sắt chứa hồ sơ giấy của phòng hành chính

> **Đáp án đúng:** **A** — *Là tập hợp người, thiết bị, dữ liệu và quy trình phối hợp*
>
> **Giải thích chi tiết:** Hệ thống thông tin là tập hợp có tổ chức gồm con người, phần cứng, phần mềm, mạng truyền thông, tài nguyên dữ liệu và quy trình nhằm thu thập, xử lý và phân phối thông tin.

---

#### Câu 2 (ad-c1-d2-002) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong các yếu tố sau, yếu tố nào đóng vai trò là 'Input' điển hình trong hệ thống thông tin bệnh viện?**

- **A.** Thông tin triệu chứng và chỉ số sinh tồn của bệnh nhân
- **B.** Bản in hóa đơn thanh toán viện phí trao cho thân nhân
- **C.** Báo cáo thống kê số ca khỏi bệnh gửi về Bộ Y tế định kỳ
- **D.** Màn hình thông báo gọi số thứ tự khám bệnh tại sảnh chờ

> **Đáp án đúng:** **A** — *Thông tin triệu chứng và chỉ số sinh tồn của bệnh nhân*
>
> **Giải thích chi tiết:** Dữ liệu triệu chứng, huyết áp, nhịp tim nhập vào hệ thống lúc tiếp nhận bệnh nhân là Đầu vào (Input); các hóa đơn, bảng báo cáo là Đầu ra (Output).

---

#### Câu 3 (ad-c1-d2-003) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Khái niệm 'Tri thức' (Knowledge) trong chuỗi giá trị thông tin được hiểu chuẩn xác là gì?**

- **A.** Thông tin được đúc kết cùng kinh nghiệm để chỉ dẫn hành động
- **B.** Dãy số nhị phân 0 và 1 lưu trên bề mặt từ tính của ổ cứng
- **C.** Toàn bộ tài liệu văn bản chưa được con người đọc và đối chiếu
- **D.** Một thông báo lỗi xuất hiện trên màn hình máy tính cá nhân

> **Đáp án đúng:** **A** — *Thông tin được đúc kết cùng kinh nghiệm để chỉ dẫn hành động*
>
> **Giải thích chi tiết:** Tri thức (Knowledge) là sự kết hợp giữa thông tin đã xử lý với kinh nghiệm, bối cảnh, hiểu biết chuyên môn để áp dụng giải quyết vấn đề thực tế.

---

#### Câu 4 (ad-c1-d2-004) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Đặc trưng nào sau đây KHÔNG PHẢI là đặc tính của Hệ thống xử lý giao dịch TPS?**

- **A.** Chuyên phục vụ các quyết định chiến lược dài hạn của chủ tịch
- **B.** Xử lý khối lượng giao dịch cực kỳ lớn với độ chính xác cao
- **C.** Dữ liệu có tính lặp lại thường xuyên và cấu trúc rất rõ ràng
- **D.** Yêu cầu tốc độ phản hồi nhanh chóng và đảm bảo tính nhất quán

> **Đáp án đúng:** **A** — *Chuyên phục vụ các quyết định chiến lược dài hạn của chủ tịch*
>
> **Giải thích chi tiết:** TPS phục vụ nhân viên tác nghiệp hàng ngày (Operational level), không phải phục vụ quyết định dài hạn của Chủ tịch (đó là vai trò của ESS/EIS).

---

#### Câu 5 (ad-c1-d2-005) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Hệ thống hỗ trợ ra quyết định DSS (Decision Support System) thường sử dụng nguồn dữ liệu nào?**

- **A.** Dữ liệu lịch sử từ TPS/MIS kết hợp mô hình phân tích tối ưu
- **B.** Chỉ sử dụng dữ liệu phát thanh radio từ các đài truyền hình
- **C.** Chỉ dùng văn bản viết tay của các nhân viên bảo vệ cơ quan
- **D.** Toàn bộ mã nguồn chương trình ứng dụng của đối thủ cạnh tranh

> **Đáp án đúng:** **A** — *Dữ liệu lịch sử từ TPS/MIS kết hợp mô hình phân tích tối ưu*
>
> **Giải thích chi tiết:** DSS lấy dữ liệu từ TPS và MIS, sau đó tích hợp các mô hình thống kê, tài chính và tối ưu hóa để hỗ trợ phân tích các kịch bản What-if.

---

#### Câu 6 (ad-c1-d2-006) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Hệ thống quản lý chuỗi cung ứng SCM (Supply Chain Management) mang lại giá trị nào sau đây?**

- **A.** Đồng bộ hóa dòng thông tin từ nhà cung cấp đến khách hàng
- **B.** Thay thế toàn bộ nhân viên giao hàng bằng hệ thống tự động
- **C.** Chỉ dùng để tính toán lương cho cán bộ công nhân viên xưởng
- **D.** Tự động gửi email chúc mừng sinh nhật cho người mua hàng lẻ

> **Đáp án đúng:** **A** — *Đồng bộ hóa dòng thông tin từ nhà cung cấp đến khách hàng*
>
> **Giải thích chi tiết:** SCM tối ưu hóa luồng nguyên vật liệu, thông tin và tài chính giữa các đối tác trong chuỗi cung ứng từ nhà cung cấp đến điểm tiêu thụ cuối cùng.

---

#### Câu 7 (ad-c1-d2-007) — [🔴 KHÓ (VẬN DỤNG CAO)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi bàn về tính toàn vẹn của mô hình IPO trong thực tế?**

- **A.** Mọi hệ thống thông tin đều hoạt động tốt dù thiếu khối lưu trữ
- **B.** Khối xử lý (Process) chuyển đổi dữ liệu thô thành thông tin hữu ích
- **C.** Khối đầu ra (Output) truyền tải kết quả đến người dùng hoặc hệ thống
- **D.** Vòng phản hồi (Feedback) giúp hệ thống tự điều chỉnh khi có sai lệch

> **Đáp án đúng:** **A** — *Mọi hệ thống thông tin đều hoạt động tốt dù thiếu khối lưu trữ*
>
> **Giải thích chi tiết:** Khẳng định thiếu khối lưu trữ (Storage) mà vẫn hoạt động tốt là SAI. Hệ thống thông tin bắt buộc phải lưu trữ dữ liệu để phục vụ tái sử dụng và kiểm toán.

---

#### Câu 8 (ad-c1-d2-008) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Giám đốc ngân hàng cần dự báo tỷ lệ nợ xấu trong 3 năm tới khi lãi suất tăng 2%. Hệ thống nào hỗ trợ đắc lực nhất?**

- **A.** Hệ thống hỗ trợ ra quyết định phân tích kịch bản (DSS system)
- **B.** Hệ thống máy ATM rút tiền tự động tại các góc phố (TPS system)
- **C.** Phần mềm in sao kê tài khoản ngân hàng định kỳ tháng (MIS system)
- **D.** Ứng dụng quét mã QR chuyển tiền nhanh trên điện thoại di động

> **Đáp án đúng:** **A** — *Hệ thống hỗ trợ ra quyết định phân tích kịch bản (DSS system)*
>
> **Giải thích chi tiết:** Bài toán 'What-if' (nếu lãi suất tăng 2% thì nợ xấu biến động thế nào) là bài toán bán cấu trúc kinh điển, được giải quyết tối ưu bởi DSS.

---

#### Câu 9 (ad-c1-d2-009) — [🔴 KHÓ (VẬN DỤNG CAO)] [MATCHING]

**Hãy chọn phương án ghép cặp ĐÚNG NHẤT giữa giai đoạn trong Unified Process và cột mốc kết thúc tương ứng:**

- **A.** Inception - Lifecycle Objective; Elaboration - Lifecycle Architecture
- **B.** Inception - Product Release; Elaboration - Lifecycle Objective
- **C.** Inception - Lifecycle Architecture; Elaboration - Product Release
- **D.** Inception - Initial Operation; Elaboration - Final Maintenance

> **Đáp án đúng:** **A** — *Inception - Lifecycle Objective; Elaboration - Lifecycle Architecture*
>
> **Giải thích chi tiết:** Theo chuẩn Unified Process (UP): Pha Inception kết thúc bằng cột mốc Mục tiêu vòng đời (Lifecycle Objective); Pha Elaboration kết thúc bằng cột mốc Kiến trúc vòng đời (Lifecycle Architecture).

---

#### Câu 10 (ad-c1-d2-010) — [🟢 DỄ (NHẬN BIẾT)] [FILL-BLANK]

**Thành phần quy định rõ 'ai được phép làm gì, vào thời điểm nào và theo trình tự nào' trong một hệ thống thông tin là:**

- **A.** Quy trình nghiệp vụ và chính sách vận hành (Procedures)
- **B.** Hệ thống dây cáp mạng truyền dẫn tín hiệu (Hardware components)
- **C.** Bộ vi xử lý trung tâm của các máy chủ mạng (Processing chips)
- **D.** Các con số số liệu thô thu thập từ biểu mẫu giấy (Raw datasets)

> **Đáp án đúng:** **A** — *Quy trình nghiệp vụ và chính sách vận hành (Procedures)*
>
> **Giải thích chi tiết:** Quy trình (Procedures) là tập hợp các chỉ dẫn, chính sách và quy tắc quy định cách thức con người tương tác và vận hành hệ thống thông tin.

---

#### Câu 11 (ad-c1-d2-011) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Theo định nghĩa chuẩn mực từ tổ chức IIBA (BABOK Guide), bản chất của Phân tích nghiệp vụ là gì?**

- **A.** Kích hoạt sự thay đổi trong tổ chức bằng cách định nghĩa các nhu cầu
- **B.** Trực tiếp lập trình các module xử lý giao tiếp mạng cho máy chủ đám mây
- **C.** Sửa chữa các thiết bị viễn thông và bảo trì đường dây cáp quang nội bộ
- **D.** Quản lý dòng tiền doanh nghiệp và ký duyệt quyết toán thuế hàng quý

> **Đáp án đúng:** **A** — *Kích hoạt sự thay đổi trong tổ chức bằng cách định nghĩa các nhu cầu*
>
> **Giải thích chi tiết:** Theo BABOK Guide (IIBA): Phân tích nghiệp vụ là thực hành tạo điều kiện thay đổi trong một doanh nghiệp bằng cách định nghĩa các nhu cầu và đề xuất giải pháp mang lại giá trị cho các bên liên quan.

---

#### Câu 12 (ad-c1-d2-012) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong mối quan hệ hợp tác dự án, đối tượng nào được xem là khách hàng nội bộ quan trọng nhất của BA?**

- **A.** Người dùng nghiệp vụ trực tiếp và nhà tài trợ dự án (Sponsor)
- **B.** Công ty cung cấp dịch vụ viễn thông Internet cho tòa nhà chính
- **C.** Đội ngũ nhân viên vệ sinh dọn dẹp phòng máy chủ trung tâm dữ liệu
- **D.** Các đối thủ cạnh tranh đang cung cấp sản phẩm tương đương thị trường

> **Đáp án đúng:** **A** — *Người dùng nghiệp vụ trực tiếp và nhà tài trợ dự án (Sponsor)*
>
> **Giải thích chi tiết:** Business Stakeholders (bao gồm Project Sponsor và End-users) là những người hưởng lợi trực tiếp từ giải pháp và là đối tượng BA phục vụ.

---

#### Câu 13 (ad-c1-d2-013) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Nhiệm vụ 'Elicitation' trong quy trình làm việc chuẩn của Business Analyst mang ý nghĩa chính xác là gì?**

- **A.** Khai phá, khơi gợi và thu thập yêu cầu từ các bên liên quan
- **B.** Tự động sinh mã nguồn chương trình từ bản vẽ sơ đồ lớp đối tượng
- **C.** Thực hiện sao lưu dự phòng toàn bộ cơ sở dữ liệu lên đám mây
- **D.** Viết tài liệu hướng dẫn kỹ thuật bảo trì phần cứng bo mạch chủ

> **Đáp án đúng:** **A** — *Khai phá, khơi gợi và thu thập yêu cầu từ các bên liên quan*
>
> **Giải thích chi tiết:** Elicitation không chỉ là 'thu thập' bị động mà là quá trình chủ động khám phá, gợi mở, phỏng vấn để làm sáng tỏ các nhu cầu tiềm ẩn của người dùng.

---

#### Câu 14 (ad-c1-d2-014) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Để tìm ra nguyên nhân gốc rễ (Root Cause) của một sự cố tắc nghẽn quy trình, BA thường áp dụng công cụ nào?**

- **A.** Kỹ thuật đặt câu hỏi 5 Whys kết hợp biểu đồ xương cá (Fishbone Diagram)
- **B.** Tự động biên dịch lại toàn bộ mã nguồn của hệ thống sang ngôn ngữ mới
- **C.** Nâng cấp gấp đôi dung lượng bộ nhớ RAM cho tất cả các máy trạm cá nhân
- **D.** Gia hạn thêm 6 tháng bảo hành thiết bị phần cứng cho toàn bộ chi nhánh

> **Đáp án đúng:** **A** — *Kỹ thuật đặt câu hỏi 5 Whys kết hợp biểu đồ xương cá (Fishbone Diagram)*
>
> **Giải thích chi tiết:** Kỹ thuật 5 Whys và Biểu đồ xương cá (Ishikawa / Fishbone Diagram) là phương pháp kinh điển giúp BA truy tìm nguyên nhân gốc rễ (Root Cause) thay vì chỉ khắc phục tạm thời triệu chứng bên ngoài.

---

#### Câu 15 (ad-c1-d2-015) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Vì sao Business Analyst cần am hiểu sâu sắc về nghiệp vụ ngành (Domain Knowledge) của khách hàng?**

- **A.** Để hiểu được ngôn ngữ chuyên ngành và các quy định pháp lý
- **B.** Để có thể trực tiếp làm thay công việc của giám đốc tài chính
- **C.** Để tự ý sửa đổi quy trình kế toán mà không cần hội ý với sếp
- **D.** Để chứng minh với lập trình viên rằng mình biết nhiều thuật toán

> **Đáp án đúng:** **A** — *Để hiểu được ngôn ngữ chuyên ngành và các quy định pháp lý*
>
> **Giải thích chi tiết:** Domain Knowledge giúp BA nói cùng ngôn ngữ với chuyên gia nghiệp vụ, hiểu được các ràng buộc pháp lý và nhanh chóng nắm bắt bản chất vấn đề.

---

#### Câu 16 (ad-c1-d2-016) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Kỹ năng nào giúp BA giải quyết các tình huống mâu thuẫn lợi ích giữa phòng Bán hàng và phòng Kế toán?**

- **A.** Kỹ năng đàm phán, thương lượng và quản lý xung đột nghiệp vụ
- **B.** Kỹ năng lập trình thuật toán tìm đường đi ngắn nhất trên đồ thị
- **C.** Kỹ năng cài đặt máy tính bảng và kết nối mạng nội bộ không dây
- **D.** Kỹ năng đọc mã nhị phân và kiểm tra bộ nhớ RAM của máy chủ mạng

> **Đáp án đúng:** **A** — *Kỹ năng đàm phán, thương lượng và quản lý xung đột nghiệp vụ*
>
> **Giải thích chi tiết:** Conflict Resolution & Negotiation (Giải quyết xung đột và đàm phán) là kỹ năng mềm sống còn giúp BA hài hòa lợi ích và đạt được đồng thuận chung.

---

#### Câu 17 (ad-c1-d2-017) — [🔴 KHÓ (VẬN DỤNG CAO)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về vị thế và ranh giới trách nhiệm của Business Analyst?**

- **A.** BA có toàn quyền tự ý quyết định thay đổi ngân sách của dự án
- **B.** BA là người điều phối và làm mịn các yêu cầu chức năng hệ thống
- **C.** BA phải đảm bảo các giải pháp kỹ thuật đáp ứng đúng mục tiêu kinh doanh
- **D.** BA hỗ trợ người dùng xây dựng các tiêu chí nghiệm thu phần mềm (UAT)

> **Đáp án đúng:** **A** — *BA có toàn quyền tự ý quyết định thay đổi ngân sách của dự án*
>
> **Giải thích chi tiết:** BA không có quyền tự ý thay đổi ngân sách dự án. Quyết định ngân sách thuộc thẩm quyền của Project Sponsor, Project Manager hoặc Ban điều hành.

---

#### Câu 18 (ad-c1-d2-018) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Trưởng phòng kho muốn phần mềm đơn giản nhất có thể, nhưng Giám đốc kiểm toán yêu cầu nhập 20 trường bắt buộc. BA nên làm gì?**

- **A.** Tổ chức phiên làm việc chung để phân tích rủi ro và tìm điểm cân bằng
- **B.** Lập tức đứng về phía trưởng phòng kho và bỏ qua ý kiến giám đốc kiểm toán
- **C.** Lập tức đứng về phía giám đốc kiểm toán và phớt lờ khó khăn của nhân viên
- **D.** Bí mật yêu cầu lập trình viên làm hai phiên bản phần mềm chạy song song

> **Đáp án đúng:** **A** — *Tổ chức phiên làm việc chung để phân tích rủi ro và tìm điểm cân bằng*
>
> **Giải thích chi tiết:** BA đóng vai trò trung gian điều phối, tổ chức phiên làm việc để đối chiếu giữa rủi ro tuân thủ (Compliance) và hiệu suất vận hành (Usability) để thống nhất giải pháp.

---

#### Câu 19 (ad-c1-d2-019) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Trong giai đoạn Thiết kế (Design Phase), mức độ tham gia chủ yếu của Business Analyst là gì?**

- **A.** Làm rõ các thắc mắc nghiệp vụ và rà soát tính đúng đắn của thiết kế
- **B.** Trực tiếp thiết kế bảng mạch in và hàn chip điện tử cho máy chủ mạng
- **C.** Viết toàn bộ mã nguồn của các stored procedures trong cơ sở dữ liệu
- **D.** Rút lui hoàn toàn khỏi dự án và chỉ quay lại khi phần mềm xuất xưởng

> **Đáp án đúng:** **A** — *Làm rõ các thắc mắc nghiệp vụ và rà soát tính đúng đắn của thiết kế*
>
> **Giải thích chi tiết:** Trong pha Design, Software Architects và Designers nắm vai trò chủ đạo, nhưng BA vẫn phải túc trực để giải đáp nghiệp vụ và review thiết kế màn hình/CSDL.

---

#### Câu 20 (ad-c1-d2-020) — [🟢 DỄ (NHẬN BIẾT)] [FILL-BLANK]

**Hoạt động đối chiếu xem phần mềm hoàn thiện có đáp ứng đúng tài liệu yêu cầu ban đầu hay không được gọi là:**

- **A.** Xác minh và nghiệm thu phần mềm (Verification & Validation)
- **B.** Lập trình giao diện người dùng bằng ngôn ngữ phong cách CSS
- **C.** Phá dỡ hạ tầng mạng cũ để thanh lý phế liệu cho nhà tái chế
- **D.** Tuyển dụng thêm năm mươi kỹ sư kiểm thử tự động từ thị trường

> **Đáp án đúng:** **A** — *Xác minh và nghiệm thu phần mềm (Verification & Validation)*
>
> **Giải thích chi tiết:** Verification (xây dựng sản phẩm có đúng quy trình/đặc tả không) và Validation (xây dựng có đúng cái người dùng thực sự cần không) là trách nhiệm nghiệm thu quan trọng.

---

#### Câu 21 (ad-c1-d2-021) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Khái niệm nào mô tả một cách thức cụ thể, có các bước hướng dẫn rõ ràng để thực hiện một công việc kỹ nghệ?**

- **A.** Technique (Kỹ thuật hành động cụ thể)
- **B.** Methodology (Khung phương pháp luận lớn)
- **C.** Hardware (Thiết bị phần cứng máy tính)
- **D.** Strategy (Chiến lược phát triển thị trường)

> **Đáp án đúng:** **A** — *Technique (Kỹ thuật hành động cụ thể)*
>
> **Giải thích chi tiết:** Technique là một kỹ thuật cụ thể (như kỹ thuật Phỏng vấn, Phân tích tài liệu, Viết Use Case) hướng dẫn từng bước con người thực hiện một nhiệm vụ.

---

#### Câu 22 (ad-c1-d2-022) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Ba chuyên gia huyền thoại (được mệnh danh là 'Three Amigos') đồng sáng lập nên chuẩn UML bao gồm những ai?**

- **A.** Grady Booch, James Rumbaugh và tiến sĩ Ivar Jacobson
- **B.** Bill Gates, Steve Jobs và chuyên gia Linus Torvalds
- **C.** Dennis Ritchie, Ken Thompson và giáo sư Bjarne Stroustrup
- **D.** Tim Berners-Lee, Alan Turing và nhà toán học John von Neumann

> **Đáp án đúng:** **A** — *Grady Booch, James Rumbaugh và tiến sĩ Ivar Jacobson*
>
> **Giải thích chi tiết:** Bộ ba Three Amigos gồm Grady Booch (phương pháp Booch), James Rumbaugh (OMT) và Ivar Jacobson (OOSE) tại hãng Rational Software đã cùng nhau hợp nhất và khai sinh ra ngôn ngữ UML.

---

#### Câu 23 (ad-c1-d2-023) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Biểu đồ nào trong UML thường được BA sử dụng đầu tiên để làm rõ ranh giới hệ thống và các chức năng chính?**

- **A.** Biểu đồ Ca sử dụng tổng quan (Use Case Diagram)
- **B.** Biểu đồ Lớp chi tiết cơ sở dữ liệu (Class Diagram)
- **C.** Biểu đồ Đóng gói triển khai hạ tầng (Deployment Diagram)
- **D.** Biểu đồ Thời gian phản hồi tín hiệu (Timing Diagram)

> **Đáp án đúng:** **A** — *Biểu đồ Ca sử dụng tổng quan (Use Case Diagram)*
>
> **Giải thích chi tiết:** Use Case Diagram là công cụ giao tiếp số 1 của BA, mô tả hệ thống làm được gì (chức năng) và ai tương tác với nó (actors) từ góc nhìn người dùng.

---

#### Câu 24 (ad-c1-d2-024) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Nhóm biểu đồ cấu trúc (Structural Diagrams) trong UML được dùng để thể hiện khía cạnh nào của hệ thống?**

- **A.** Các thành phần tĩnh, quan hệ dữ liệu và kiến trúc phần mềm
- **B.** Trình tự trao đổi thông điệp theo thời gian giữa các đối tượng
- **C.** Luồng điều khiển rẽ nhánh của một quy trình kế toán phức tạp
- **D.** Sự thay đổi trạng thái của đơn hàng từ lúc đặt đến lúc giao

> **Đáp án đúng:** **A** — *Các thành phần tĩnh, quan hệ dữ liệu và kiến trúc phần mềm*
>
> **Giải thích chi tiết:** Structural Diagrams (như Class Diagram, Object Diagram, Component Diagram) biểu diễn cấu trúc tĩnh không thay đổi theo thời gian của hệ thống.

---

#### Câu 25 (ad-c1-d2-025) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Ưu điểm lớn nhất của kỹ thuật Phỏng vấn trực tiếp 1-1 (Personal Interview) trong thu thập yêu cầu là gì?**

- **A.** Tạo cơ hội đào sâu thông tin, quan sát thái độ và làm rõ nghi vấn
- **B.** Thu thập ý kiến của mười nghìn người cùng lúc với chi phí cực thấp
- **C.** Không đòi hỏi người đi phỏng vấn phải có bất kỳ kỹ năng giao tiếp nào
- **D.** Dữ liệu thu được luôn luôn chuẩn hóa và tự động đưa vào máy tính ngay

> **Đáp án đúng:** **A** — *Tạo cơ hội đào sâu thông tin, quan sát thái độ và làm rõ nghi vấn*
>
> **Giải thích chi tiết:** Phỏng vấn 1-1 cho phép tương tác trực tiếp hai chiều, giúp BA đặt câu hỏi đào sâu (Follow-up questions), giải thích hiểu lầm và xây dựng mối quan hệ.

---

#### Câu 26 (ad-c1-d2-026) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Trong một buổi hội thảo JAD (Joint Application Development), vai trò của Facilitator là gì?**

- **A.** Điều phối cuộc họp trung lập, giữ đúng tiến độ và dung hòa ý kiến
- **B.** Trực tiếp quyết định toàn bộ tính năng kỹ thuật mà không cần hỏi ai
- **C.** Lập tức ghi nhận mọi yêu cầu vô lý của người dùng vào biên bản chốt
- **D.** Chỉ ngồi yên lặng quan sát và không được phép can thiệp vào cuộc họp

> **Đáp án đúng:** **A** — *Điều phối cuộc họp trung lập, giữ đúng tiến độ và dung hòa ý kiến*
>
> **Giải thích chi tiết:** Facilitator (Người điều phối) là nhân sự trung lập, dẫn dắt phiên JAD theo đúng chương trình nghị sự, giải quyết tranh luận và đảm bảo mọi người đều được lên tiếng.

---

#### Câu 27 (ad-c1-d2-027) — [🔴 KHÓ (VẬN DỤNG CAO)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về kỹ thuật tạo Bản mẫu (Prototyping) trong phân tích thiết kế?**

- **A.** Bản mẫu luôn luôn là phần mềm chính thức hoàn chỉnh có thể bán ngay
- **B.** Bản mẫu giúp phát hiện sớm các hiểu lầm giữa người dùng và nhóm phát triển
- **C.** Bản mẫu có thể ở dạng phác thảo trên giấy hoặc mô hình tương tác trên web
- **D.** Người dùng có thể bị ngộ nhận rằng hệ thống đã hoàn thiện khi thấy bản mẫu

> **Đáp án đúng:** **A** — *Bản mẫu luôn luôn là phần mềm chính thức hoàn chỉnh có thể bán ngay*
>
> **Giải thích chi tiết:** Bản mẫu (Prototype) chỉ là mô hình thử nghiệm ban đầu nhằm làm rõ yêu cầu, không phải là sản phẩm chính thức có thể đưa vào vận hành thực tế ngay.

---

#### Câu 28 (ad-c1-d2-028) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Ngân hàng có 500 chi nhánh trên cả nước và cần lấy ý kiến về tính năng mới của ứng dụng nội bộ. Kỹ thuật nào tối ưu nhất?**

- **A.** Khảo sát trực tuyến bằng Bảng câu hỏi chuẩn hóa (Online Survey)
- **B.** Cử đoàn BA bay đến trực tiếp phỏng vấn 1-1 từng nhân viên cả 500 nơi
- **C.** Tổ chức một phiên họp JAD tập trung toàn bộ năm ngàn nhân viên lại
- **D.** Quan sát trực tiếp tại một chi nhánh duy nhất rồi áp đặt cho cả nước

> **Đáp án đúng:** **A** — *Khảo sát trực tuyến bằng Bảng câu hỏi chuẩn hóa (Online Survey)*
>
> **Giải thích chi tiết:** Với phạm vi địa lý phân tán rộng và đối tượng người dùng đông đảo (500 chi nhánh), Bảng câu hỏi trực tuyến (Survey) là phương pháp tối ưu chi phí và thời gian.

---

#### Câu 29 (ad-c1-d2-029) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Trong kỹ nghệ phần mềm hiện đại, các công cụ như Jira, Confluence, Enterprise Architect thuộc nhóm nào?**

- **A.** Tool (Công cụ hỗ trợ phân tích, thiết kế và quản trị dự án)
- **B.** Methodology (Khung phương pháp luận phát triển phần mềm chuẩn)
- **C.** Technique (Kỹ thuật điều tra tâm lý người dùng khi phỏng vấn)
- **D.** Model (Mô hình toán học mô phỏng thuật toán xử lý dữ liệu lớn)

> **Đáp án đúng:** **A** — *Tool (Công cụ hỗ trợ phân tích, thiết kế và quản trị dự án)*
>
> **Giải thích chi tiết:** Jira, Confluence, Enterprise Architect là các Tool (Công cụ phần mềm) giúp tự động hóa và hỗ trợ quản lý vòng đời yêu cầu.

---

#### Câu 30 (ad-c1-d2-030) — [🟢 DỄ (NHẬN BIẾT)] [FILL-BLANK]

**Thuật ngữ biểu diễn mối quan hệ giữa 4 khái niệm kỹ nghệ yêu cầu theo đúng logic thứ bậc từ lớn đến nhỏ là:**

- **A.** Methodology hướng dẫn quy trình ➔ Sử dụng Technique ➔ Tạo ra Model
- **B.** Model quy định phương pháp luận ➔ Tạo ra Tool ➔ Hướng dẫn Methodology
- **C.** Tool quyết định bài toán kinh doanh ➔ Sinh ra Technique ➔ Định hình Model
- **D.** Technique thay thế Methodology ➔ Phá bỏ Model ➔ Không cần dùng Tool

> **Đáp án đúng:** **A** — *Methodology hướng dẫn quy trình ➔ Sử dụng Technique ➔ Tạo ra Model*
>
> **Giải thích chi tiết:** Methodology là khung bao trùm; bên trong khung đó, BA áp dụng các Technique cụ thể để xây dựng nên các Model, với sự trợ giúp của các Tool.

---

#### Câu 31 (ad-c1-d2-031) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Giai đoạn đầu tiên 'Planning' (Lập kế hoạch) trong SDLC truyền thống tập trung trả lời câu hỏi cốt lõi nào?**

- **A.** Tại sao chúng ta phải xây dựng hệ thống này? (Why build it?)
- **B.** Hệ thống sẽ được viết bằng ngôn ngữ lập trình nào? (Which code?)
- **C.** Cơ sở dữ liệu sẽ được đặt ở phòng máy chủ tầng mấy? (Where host?)
- **D.** Ai sẽ là người trực tiếp cài đặt phần mềm cho khách hàng? (Who install?)

> **Đáp án đúng:** **A** — *Tại sao chúng ta phải xây dựng hệ thống này? (Why build it?)*
>
> **Giải thích chi tiết:** Planning phase tập trung thẩm định bài toán kinh doanh và tính khả thi (Feasibility): Tại sao cần xây dựng hệ thống và nó có đáng đầu tư hay không.

---

#### Câu 32 (ad-c1-d2-032) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Giai đoạn cuối cùng 'Transition' trong quy trình Unified Process (UP) tập trung vào hoạt động nào?**

- **A.** Chuyển giao hệ thống vào môi trường thực tế và đào tạo người dùng
- **B.** Khảo sát sơ bộ tính khả thi kinh tế của bài toán kinh doanh ban đầu
- **C.** Viết các dòng mã nguồn đầu tiên của các thuật toán xử lý dữ liệu
- **D.** Khử toàn bộ các rủi ro kiến trúc nền tảng tại phòng thí nghiệm

> **Đáp án đúng:** **A** — *Chuyển giao hệ thống vào môi trường thực tế và đào tạo người dùng*
>
> **Giải thích chi tiết:** Transition phase trong UP đưa sản phẩm từ môi trường phát triển sang môi trường vận hành thực tế (Production), kiểm thử Beta và bàn giao cho người dùng.

---

#### Câu 33 (ad-c1-d2-033) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Sản phẩm bàn giao quan trọng nhất kết thúc giai đoạn Phân tích (Analysis Deliverables) thường là gì?**

- **A.** Tài liệu đặc tả yêu cầu hệ thống hoàn chỉnh (SRS / BRD)
- **B.** Đĩa CD chứa mã nguồn chương trình ứng dụng đã biên dịch
- **C.** Biên bản nghiệm thu bàn giao bản quyền phần mềm thương mại
- **D.** Hóa đơn thanh toán tiền điện của máy chủ trung tâm dữ liệu

> **Đáp án đúng:** **A** — *Tài liệu đặc tả yêu cầu hệ thống hoàn chỉnh (SRS / BRD)*
>
> **Giải thích chi tiết:** Kết quả then chốt của giai đoạn Analysis là Tài liệu đặc tả yêu cầu (System Requirements Document - SRS/BRD) mô tả đầy đủ những gì hệ thống phải làm.

---

#### Câu 34 (ad-c1-d2-034) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Đặc trưng then chốt nhất của phương pháp tiếp cận 'Lặp và Tăng dần' (Iterative & Incremental) là gì?**

- **A.** Chia dự án thành nhiều chu kỳ nhỏ, mỗi chu kỳ tạo ra sản phẩm chạy được
- **B.** Chỉ kiểm thử phần mềm một lần duy nhất vào ngày cuối cùng của hợp đồng
- **C.** Bắt buộc toàn bộ yêu cầu phải đóng băng hoàn toàn ngay từ tháng đầu tiên
- **D.** Không cho phép người dùng nhìn thấy bất kỳ kết quả nào trước năm năm

> **Đáp án đúng:** **A** — *Chia dự án thành nhiều chu kỳ nhỏ, mỗi chu kỳ tạo ra sản phẩm chạy được*
>
> **Giải thích chi tiết:** Iterative & Incremental chia nhỏ dự án thành các vòng lặp (Iterations); mỗi vòng lặp thực hiện đầy đủ phân tích, thiết kế, code, test và tạo ra bản tăng dần (Increment).

---

#### Câu 35 (ad-c1-d2-035) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Trong quy trình Unified Process (UP), các 'Workflows' (Luồng công việc) có mối quan hệ thế nào với các 'Phases'?**

- **A.** Các Workflows diễn ra song song xuyên suốt các Phases với mức độ khác nhau
- **B.** Mỗi Phase chỉ được phép thực hiện duy nhất một Workflow tương ứng duy nhất
- **C.** Workflows chỉ bắt đầu hoạt động sau khi tất cả các Phases đã hoàn tất xong
- **D.** Workflows và Phases là hai khái niệm hoàn toàn tách biệt và đối lập nhau

> **Đáp án đúng:** **A** — *Các Workflows diễn ra song song xuyên suốt các Phases với mức độ khác nhau*
>
> **Giải thích chi tiết:** Mô hình 2 chiều của UP: Trục hoành là Phases (thời gian), trục tung là Workflows (hoạt động kỹ thuật). Các workflows diễn ra đồng thời ở mọi phase với cường độ khác nhau.

---

#### Câu 36 (ad-c1-d2-036) — [🔴 KHÓ (VẬN DỤNG CAO)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi bàn về giai đoạn Khởi động dự án (Inception Phase) trong UP?**

- **A.** Inception là giai đoạn lập trình xong toàn bộ 100% các chức năng cốt lõi
- **B.** Inception nhằm thiết lập phạm vi dự án và ước tính sơ bộ bài toán kinh doanh
- **C.** Inception nhận diện các tác nhân chính và các ca sử dụng quan trọng nhất
- **D.** Nếu dự án không khả thi về mặt kinh tế, nó có thể bị hủy bỏ ngay tại Inception

> **Đáp án đúng:** **A** — *Inception là giai đoạn lập trình xong toàn bộ 100% các chức năng cốt lõi*
>
> **Giải thích chi tiết:** Inception chỉ là giai đoạn khởi động sơ khởi để xác định phạm vi và tính khả thi. Việc lập trình toàn bộ chức năng diễn ra chủ yếu ở Construction phase.

---

#### Câu 37 (ad-c1-d2-037) — [🔴 KHÓ (VẬN DỤNG CAO)] [OUTSIDE] [SINGLE-CORRECT]

**[Outside] Trong thực tế các dự án số hóa ngân hàng, kỹ thuật 'User Story' thường được BA sử dụng thay thế cho định dạng nào?**

- **A.** Thay thế cho các tài liệu đặc tả chức năng dài dòng truyền thống
- **B.** Thay thế cho toàn bộ kiến trúc cơ sở dữ liệu và bảng quan hệ
- **C.** Thay thế cho các hợp đồng lao động của nhân viên phòng tín dụng
- **D.** Thay thế cho biên bản kiểm toán tài chính hàng năm của cổ đông

> **Đáp án đúng:** **A** — *Thay thế cho các tài liệu đặc tả chức năng dài dòng truyền thống*
>
> **Giải thích chi tiết:** [Outside] Trong môi trường phát triển phần mềm hiện đại (Agile), User Story ngắn gọn ('Là ai... tôi muốn gì... để được gì...') thường được BA dùng để thay cho các tài liệu SRS cồng kềnh.

---

#### Câu 38 (ad-c1-d2-038) — [🔴 KHÓ (VẬN DỤNG CAO)] [OUTSIDE] [CASE-STUDY]

**[Outside] Khi người dùng phàn nàn 'Hệ thống chạy chậm vào lúc 9 giờ sáng', BA cần phân loại yêu cầu này vào nhóm nào?**

- **A.** Yêu cầu phi chức năng về hiệu năng hệ thống (Non-Functional / Performance)
- **B.** Yêu cầu chức năng về tính toán hóa đơn bán lẻ (Functional Requirement)
- **C.** Yêu cầu về mặt pháp lý và tuân thủ thuế nhà nước (Regulatory Compliance)
- **D.** Yêu cầu về mặt thẩm mỹ màu sắc biểu tượng ứng dụng (Cosmetic design)

> **Đáp án đúng:** **A** — *Yêu cầu phi chức năng về hiệu năng hệ thống (Non-Functional / Performance)*
>
> **Giải thích chi tiết:** [Outside] Tốc độ phản hồi, thông lượng, độ ổn định của hệ thống là Yêu cầu phi chức năng (Non-Functional Requirement - NFR), cụ thể là Performance Requirement.

---

#### Câu 39 (ad-c1-d2-039) — [🔴 KHÓ (VẬN DỤNG CAO)] [OUTSIDE] [SINGLE-CORRECT]

**[Outside] Khái niệm 'Scope Creep' (Phình phạm vi dự án) trong quản trị yêu cầu phần mềm ám chỉ hiện tượng gì?**

- **A.** Yêu cầu liên tục phát sinh và mở rộng ngoài tầm kiểm soát của kế hoạch
- **B.** Dự án bị cắt giảm nhân sự đột ngột dẫn đến thiếu người kiểm thử lỗi
- **C.** Hệ thống máy chủ bị quá tải do dung lượng bộ nhớ RAM bị phân mảnh lớn
- **D.** Khách hàng thanh toán tiền trước thời hạn quy định trong hợp đồng khung

> **Đáp án đúng:** **A** — *Yêu cầu liên tục phát sinh và mở rộng ngoài tầm kiểm soát của kế hoạch*
>
> **Giải thích chi tiết:** [Outside] Scope Creep là hiện tượng các yêu cầu mới liên tục được thêm vào một cách không chính thức mà không tăng thời gian hay chi phí, khiến dự án dễ đổ vỡ.

---

#### Câu 40 (ad-c1-d2-040) — [🔴 KHÓ (VẬN DỤNG CAO)] [OUTSIDE] [CASE-STUDY]

**[Outside] Tình huống: Dự án làm app thương mại điện tử cần ra mắt trước dịp Tết. BA nên tư vấn giải pháp tối ưu nào cho doanh nghiệp?**

- **A.** Áp dụng phương pháp Timeboxing, ưu tiên các tính năng mua sắm cốt lõi
- **B.** Kéo dài thời hạn dự án thêm một năm để hoàn thiện toàn bộ mọi tính năng
- **C.** Bỏ qua hoàn toàn khâu kiểm thử thanh toán tiền để kịp ngày xuất xưởng
- **D.** Ép lập trình viên không ngủ trong ba tuần liên tục để chạy đua tiến độ

> **Đáp án đúng:** **A** — *Áp dụng phương pháp Timeboxing, ưu tiên các tính năng mua sắm cốt lõi*
>
> **Giải thích chi tiết:** [Outside] Chiến lược Timeboxing và MoSCoW (phân loại Must have / Should have) cho phép BA cùng doanh nghiệp đóng gói các tính năng cốt lõi nhất để bàn giao đúng thời hạn vàng Tết.

---

