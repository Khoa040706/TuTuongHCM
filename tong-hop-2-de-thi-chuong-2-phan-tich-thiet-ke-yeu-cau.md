# TỔNG HỢP 2 BỘ ĐỀ THI TRẮC NGHIỆM CHƯƠNG II: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
*(Tổng cộng 80 câu hỏi học thuật chuẩn mực — Cơ cấu: 30% Dễ - 40% Trung bình - 30% Khó)*

- **Môn học:** Phân tích thiết kế và yêu cầu (Requirements Analysis and Design)
- **Chương:** Chapter 2: Systems Development Life Cycle (SDLC) & Business Modeling
- **Quy mô:** 2 Bộ đề độc lập (Đề 1 & Đề 2), mỗi đề đúng 40 câu hỏi cố định (Tổng = 80 câu biên soạn mới 100%, 0% trùng lặp)
- **Tỷ lệ độ khó:** 12 Dễ (30%) — 16 Trung bình (40%) — 12 Khó (30%) cho từng đề
- **Tỷ lệ nguồn:** 36 câu Inside (giáo trình ad-ch2.js) + 4 câu Outside (thực tế dự án SDLC & Chuyển đổi số)
- **Quy chuẩn kỹ thuật:** Đáp ứng độ lệch chiều dài phương án $\Delta L = L_{\max} - L_{\min} \le 15$ ký tự trên toàn bộ 80 câu
- **Đa dạng hình thức:** Trắc nghiệm chọn đúng, Chọn sai/ngoại lệ (**KHÔNG/SAI**), Tình huống thực tế (Case study), Ghép cặp phân loại (Matching), Điền khuyết/Trình tự logic (Fill-in)

---

## BỘ ĐỀ THI SỐ 1 (MÃ ĐỀ: ad-c2-d1)

*Bộ đề số 1 tập trung khảo sát trường phái Predictive Approach, 5 giai đoạn cốt lõi của SDLC (Planning, Analysis, Design, Implementation, Support), bản chất Business Modeling, đánh giá tính khả thi và cú pháp Activity Diagram.*

---

#### Câu 1 (ad-c2-d1-001) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Phát biểu nào sau đây mô tả CHÍNH XÁC quan hệ giữa SDLC và Methodology trong phát triển phần mềm?**

- **A.** SDLC là khái niệm khung bao trùm; Methodology là cách triển khai chi tiết cụ thể
- **B.** Methodology là khái niệm bao trùm; SDLC chỉ là một công cụ lập trình nhỏ bên trong
- **C.** SDLC và Methodology là hai khái niệm hoàn toàn đồng nghĩa và có thể thay thế nhau
- **D.** SDLC chỉ dùng cho mô hình Thác nước; còn Methodology chỉ áp dụng cho mô hình Agile

> **Đáp án đúng:** **A** — *SDLC là khái niệm khung bao trùm; Methodology là cách triển khai chi tiết cụ thể*
>
> **Giải thích chi tiết:** SDLC là khái niệm bao trùm (Umbrella concept) định nghĩa các pha cần thiết. Methodology (như Waterfall, Scrum, UP) là cách triển khai cụ thể, quy định thứ tự và tần suất lặp của các pha đó.

---

#### Câu 2 (ad-c2-d1-002) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Triết lý cốt lõi của trường phái tiếp cận dự đoán (Predictive Approach) được đúc kết qua câu khẩu hiệu nào?**

- **A.** 'Plan the work, then work the plan' (Lập kế hoạch trước, rồi thực thi đúng kế hoạch)
- **B.** 'Embrace change, deliver early and often' (Chào đón thay đổi và bàn giao liên tục)
- **C.** 'Code first, think later and fix on production' (Cứ viết mã trước rồi sửa sau)
- **D.** 'No documentation, just working software' (Không cần tài liệu chỉ cần có phần mềm)

> **Đáp án đúng:** **A** — *'Plan the work, then work the plan' (Lập kế hoạch trước, rồi thực thi đúng kế hoạch)*
>
> **Giải thích chi tiết:** Predictive Approach tuân thủ triết lý 'Plan the work, then work the plan' — lập kế hoạch toàn diện ngay từ đầu và kiểm soát chặt chẽ việc thực thi đúng kế hoạch.

---

#### Câu 3 (ad-c2-d1-003) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Về phương diện bàn giao sản phẩm (Delivery), trường phái Predictive Approach có đặc trưng nổi bật nào?**

- **A.** Bàn giao toàn bộ hệ thống hoàn chỉnh một lần duy nhất vào giai đoạn cuối (Big-bang)
- **B.** Bàn giao các phần mềm chạy được tăng dần đều đặn sau mỗi chu kỳ từ hai đến ba tuần
- **C.** Không bao giờ bàn giao sản phẩm chạy được cho khách hàng trước thời hạn mười năm
- **D.** Bàn giao mã nguồn thô hàng ngày để khách hàng tự biên dịch và tự chịu trách nhiệm

> **Đáp án đúng:** **A** — *Bàn giao toàn bộ hệ thống hoàn chỉnh một lần duy nhất vào giai đoạn cuối (Big-bang)*
>
> **Giải thích chi tiết:** Predictive Approach bàn giao theo kiểu Big-bang release — chuyển giao toàn bộ sản phẩm hoàn chỉnh một lần duy nhất ở cuối giai đoạn Implementation.

---

#### Câu 4 (ad-c2-d1-004) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi so sánh giữa Predictive Approach và Adaptive Approach?**

- **A.** Predictive Approach chào đón và khuyến khích thay đổi yêu cầu liên tục ở mọi thời điểm
- **B.** Adaptive Approach chia nhỏ dự án thành nhiều vòng lặp ngắn để bàn giao sản phẩm tăng dần
- **C.** Predictive Approach đòi hỏi tài liệu đặc tả trang trọng và phê duyệt ký duyệt chặt chẽ
- **D.** Adaptive Approach yêu cầu khách hàng tham gia đánh giá thường xuyên sau từng vòng lặp

> **Đáp án đúng:** **A** — *Predictive Approach chào đón và khuyến khích thay đổi yêu cầu liên tục ở mọi thời điểm*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì Predictive Approach kiểm soát thay đổi rất khắt khe thông qua quy trình trang trọng (Formal change control), chứ không chào đón thay đổi tự do.

---

#### Câu 5 (ad-c2-d1-005) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Theo bảng tiêu chí 3 chiều, yếu tố nào sau đây là dấu hiệu rõ ràng nhất ủng hộ việc chọn Adaptive Approach?**

- **A.** Yêu cầu nghiệp vụ ban đầu còn mơ hồ, công nghệ mới và khách hàng muốn phát hành sớm
- **B.** Hệ thống kiểm soát bay hàng không có yêu cầu kỹ thuật cố định và phải kiểm toán chặt
- **C.** Dự án có ngân sách đóng băng, phạm vi cố định 100% và hợp đồng phạt vi phạm tiến độ
- **D.** Khách hàng quá bận rộn và tuyên bố chỉ có thể gặp đội ngũ dự án đúng một lần duy nhất

> **Đáp án đúng:** **A** — *Yêu cầu nghiệp vụ ban đầu còn mơ hồ, công nghệ mới và khách hàng muốn phát hành sớm*
>
> **Giải thích chi tiết:** Adaptive Approach phù hợp nhất khi yêu cầu chưa rõ ràng, dễ biến động, áp dụng công nghệ mới và cần kiểm chứng thị trường nhanh (MVP).

---

#### Câu 6 (ad-c2-d1-006) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Một công ty làm phần mềm kế toán theo luật thuế mới ban hành cố định. Tiếp cận nào là tối ưu nhất?**

- **A.** Predictive Approach vì quy định pháp lý đã hoàn toàn rõ ràng, chuẩn hóa và ít thay đổi
- **B.** Adaptive Approach vì phải liên tục thay đổi thuật toán tính thuế mỗi tuần một lần ngẫu nhiên
- **C.** Bỏ qua bước phân tích yêu cầu để tiến hành viết mã giao diện ngay trong ngày đầu tiên
- **D.** Thuê ngoài toàn bộ mà không cần lập kế hoạch hay phân tích bất kỳ tài liệu quy chuẩn nào

> **Đáp án đúng:** **A** — *Predictive Approach vì quy định pháp lý đã hoàn toàn rõ ràng, chuẩn hóa và ít thay đổi*
>
> **Giải thích chi tiết:** Khi luật pháp và quy định nghiệp vụ đã rõ ràng, cố định và có tính chuẩn hóa cao (như luật thuế), Predictive Approach (như Waterfall) là lựa chọn an toàn và hiệu quả nhất.

---

#### Câu 7 (ad-c2-d1-007) — [🔴 KHÓ (VẬN DỤNG CAO)] [MATCHING]

**Hãy chọn phương án ghép cặp ĐÚNG NHẤT giữa chiều kích thước dự án và đặc trưng của Predictive Approach:**

- **A.** Requirements - Đóng băng từ đầu; Change - Kiểm soát khắt khe; Delivery - Cuối kỳ
- **B.** Requirements - Thay đổi liên tục; Change - Tự do phát sinh; Delivery - Hàng tuần
- **C.** Requirements - Không cần ghi nhận; Change - Cấm tuyệt đối; Delivery - Ngẫu nhiên
- **D.** Requirements - Khách hàng tự viết; Change - Không kiểm soát; Delivery - Đầu kỳ

> **Đáp án đúng:** **A** — *Requirements - Đóng băng từ đầu; Change - Kiểm soát khắt khe; Delivery - Cuối kỳ*
>
> **Giải thích chi tiết:** Trong Predictive: Requirements được xác định chi tiết và đóng băng (freeze) sớm; Change được kiểm soát qua formal process; Delivery được chuyển giao ở cuối kỳ.

---

#### Câu 8 (ad-c2-d1-008) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Giai đoạn đầu tiên 'Planning' (Lập kế hoạch) trong SDLC tập trung trả lời câu hỏi cốt lõi nào?**

- **A.** Tại sao chúng ta lại xây dựng hệ thống thông tin này? (Why build the system?)
- **B.** Hệ thống thông tin cần phải làm được những chức năng gì? (What is needed?)
- **C.** Hệ thống sẽ được thiết kế kiến trúc hoạt động ra làm sao? (How will it work?)
- **D.** Ai sẽ là người trực tiếp vận hành máy chủ lưu trữ dữ liệu? (Who will run it?)

> **Đáp án đúng:** **A** — *Tại sao chúng ta lại xây dựng hệ thống thông tin này? (Why build the system?)*
>
> **Giải thích chi tiết:** Giai đoạn Planning trả lời câu hỏi 'Why build the system?' — xác định lý do kinh doanh, giá trị kỳ vọng và tính khả thi của dự án.

---

#### Câu 9 (ad-c2-d1-009) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong 5 giai đoạn của SDLC, sản phẩm bàn giao (Deliverable) quan trọng nhất của giai đoạn Analysis là gì?**

- **A.** Tài liệu đặc tả yêu cầu hệ thống hoàn chỉnh (SRS / System Requirements Spec)
- **B.** Bản kế hoạch dự án tổng thể và phiếu đề xuất khả thi ban đầu (Project Charter)
- **C.** Bản thiết kế lược đồ cơ sở dữ liệu quan hệ và mô hình vật lý mạng máy tính
- **D.** Các gói mã nguồn đã được biên dịch hoàn tất kèm kịch bản kiểm thử hiệu năng

> **Đáp án đúng:** **A** — *Tài liệu đặc tả yêu cầu hệ thống hoàn chỉnh (SRS / System Requirements Spec)*
>
> **Giải thích chi tiết:** Sản phẩm bàn giao trọng tâm của giai đoạn Analysis là Tài liệu đặc tả yêu cầu hệ thống (System Requirements Specification - SRS / BRD) và các mô hình phân tích logic.

---

#### Câu 10 (ad-c2-d1-010) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về giai đoạn 'Design' (Thiết kế) trong vòng đời SDLC?**

- **A.** Giai đoạn Design tập trung đi tìm câu trả lời cho câu hỏi nghiệp vụ 'Hệ thống cần làm GÌ'
- **B.** Giai đoạn Design chuyển hóa các yêu cầu logic (WHAT) thành các thông số kỹ thuật (HOW)
- **C.** Thiết kế giao diện người dùng (UI/UX) và kiến trúc hệ thống là hoạt động then chốt của Design
- **D.** Thiết kế cơ sở dữ liệu vật lý và các giao thức mạng được hoàn tất trong giai đoạn Design

> **Đáp án đúng:** **A** — *Giai đoạn Design tập trung đi tìm câu trả lời cho câu hỏi nghiệp vụ 'Hệ thống cần làm GÌ'*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì câu hỏi 'Hệ thống cần làm GÌ' (WHAT) thuộc về giai đoạn Analysis. Giai đoạn Design trả lời câu hỏi 'Hệ thống hoạt động NHƯ THẾ NÀO' (HOW).

---

#### Câu 11 (ad-c2-d1-011) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Hoạt động nào sau đây thuộc về giai đoạn 'Implementation' (Triển khai & Thi công) trong SDLC?**

- **A.** Lập trình mã nguồn, kiểm thử tích hợp hệ thống, đào tạo người dùng và chuyển đổi dữ liệu
- **B.** Khảo sát phỏng vấn sơ bộ để tìm hiểu tính khả thi kinh tế và ước tính tổng ngân sách
- **C.** Vẽ các sơ đồ ca sử dụng nghiệp vụ tổng quan và mô hình hóa dòng dữ liệu mức trừu tượng
- **D.** Bảo trì định kỳ và hỗ trợ giải quyết sự cố kỹ thuật phát sinh sau khi đưa vào vận hành

> **Đáp án đúng:** **A** — *Lập trình mã nguồn, kiểm thử tích hợp hệ thống, đào tạo người dùng và chuyển đổi dữ liệu*
>
> **Giải thích chi tiết:** Giai đoạn Implementation bao gồm các hoạt động: viết mã (Programming), kiểm thử (Testing), cài đặt hệ thống (Installation/Deployment), đào tạo người dùng và chuyển đổi dữ liệu.

---

#### Câu 12 (ad-c2-d1-012) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Giai đoạn 'Support' (Hỗ trợ & Bảo trì) trong SDLC thường chiếm tỷ trọng chi phí như thế nào trong toàn vòng đời?**

- **A.** Chiếm tỷ trọng chi phí lớn nhất, thường từ 60% đến 80% tổng chi phí sở hữu hệ thống (TCO)
- **B.** Chiếm tỷ trọng chi phí nhỏ nhất, hầu như không đáng kể so với chi phí mua máy chủ ban đầu
- **C.** Hoàn toàn không tốn chi phí vì phần mềm sau khi lập trình xong sẽ không bao giờ phát sinh lỗi
- **D.** Luôn luôn bằng đúng một phần mười chi phí của giai đoạn phân tích yêu cầu nghiệp vụ ban đầu

> **Đáp án đúng:** **A** — *Chiếm tỷ trọng chi phí lớn nhất, thường từ 60% đến 80% tổng chi phí sở hữu hệ thống (TCO)*
>
> **Giải thích chi tiết:** Giai đoạn Support (Bảo trì) kéo dài trong suốt thời gian hệ thống vận hành và thường chiếm từ 60% đến 80% tổng chi phí sở hữu (Total Cost of Ownership - TCO).

---

#### Câu 13 (ad-c2-d1-013) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Sau khi hệ thống vận hành 3 tháng, người dùng phát hiện lỗi tính sai chiết khấu VIP. Hoạt động này thuộc pha nào?**

- **A.** Pha Support (Bảo trì sửa lỗi - Corrective Maintenance nhằm khắc phục sự cố vận hành)
- **B.** Pha Planning (Lập kế hoạch lại toàn bộ dự án từ đầu và giải tán đội ngũ triển khai cũ)
- **C.** Pha Analysis (Phỏng vấn lại toàn bộ giám đốc công ty để xem xét giải thể hệ thống)
- **D.** Pha Design (Vẽ lại toàn bộ kiến trúc mạng máy tính và mua bổ sung máy chủ mới)

> **Đáp án đúng:** **A** — *Pha Support (Bảo trì sửa lỗi - Corrective Maintenance nhằm khắc phục sự cố vận hành)*
>
> **Giải thích chi tiết:** Khắc phục lỗi phát sinh sau khi hệ thống đã Go-Live thuộc hoạt động Bảo trì sửa lỗi (Corrective Maintenance) trong giai đoạn Support của SDLC.

---

#### Câu 14 (ad-c2-d1-014) — [🟢 DỄ (NHẬN BIẾT)] [FILL-BLANK]

**Năm giai đoạn chuẩn mực của SDLC sắp xếp theo đúng tiến trình thời gian thực hiện tuần tự là:**

- **A.** Planning ➔ Analysis ➔ Design ➔ Implementation ➔ Support
- **B.** Analysis ➔ Planning ➔ Design ➔ Implementation ➔ Support
- **C.** Planning ➔ Design ➔ Analysis ➔ Implementation ➔ Support
- **D.** Design ➔ Planning ➔ Analysis ➔ Support ➔ Implementation

> **Đáp án đúng:** **A** — *Planning ➔ Analysis ➔ Design ➔ Implementation ➔ Support*
>
> **Giải thích chi tiết:** Trình tự chuẩn mực của 5 pha SDLC là: Planning (Lập kế hoạch) ➔ Analysis (Phân tích) ➔ Design (Thiết kế) ➔ Implementation (Thi công/Triển khai) ➔ Support (Hỗ trợ/Bảo trì).

---

#### Câu 15 (ad-c2-d1-015) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Mục đích quan trọng nhất của việc Mô hình hóa doanh nghiệp (Business Modeling) trước khi xây dựng phần mềm là gì?**

- **A.** Hiểu rõ ngữ cảnh và quy trình thực tế nhằm tránh tự động hóa một quy trình đang bị lỗi
- **B.** Để kéo dài thời gian dự án nhằm mục đích thu thêm tiền phụ phí tư vấn từ phía khách hàng
- **C.** Để người lập trình không cần phải học các ngôn ngữ lập trình hiện đại như Java hay C#
- **D.** Nhằm mục đích thay thế hoàn toàn vai trò của ban giám đốc điều hành trong doanh nghiệp

> **Đáp án đúng:** **A** — *Hiểu rõ ngữ cảnh và quy trình thực tế nhằm tránh tự động hóa một quy trình đang bị lỗi*
>
> **Giải thích chi tiết:** Mô hình hóa doanh nghiệp giúp BA hiểu rõ bối cảnh hoạt động, tối ưu hóa quy trình trước khi tin học hóa, tránh sai lầm kinh điển 'tự động hóa một quy trình tồi sẽ chỉ tạo ra kết quả tồi nhanh hơn'.

---

#### Câu 16 (ad-c2-d1-016) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong 4 khái niệm cốt lõi của Business Modeling, khái niệm nào đại diện cho một vai trò BÊN NGOÀI tương tác với doanh nghiệp?**

- **A.** Business Actor (Tác nhân doanh nghiệp — ví dụ: Khách hàng, Nhà cung cấp đối tác)
- **B.** Business Worker (Nhân sự nội bộ — ví dụ: Nhân viên bán hàng, Giao dịch viên quầy)
- **C.** Business Use Case (Ca sử dụng nghiệp vụ — ví dụ: Quy trình thanh toán đơn hàng)
- **D.** Business Entity (Thực thể nghiệp vụ — ví dụ: Hóa đơn đỏ, Đơn đặt hàng, Hợp đồng)

> **Đáp án đúng:** **A** — *Business Actor (Tác nhân doanh nghiệp — ví dụ: Khách hàng, Nhà cung cấp đối tác)*
>
> **Giải thích chi tiết:** Business Actor là vai trò hoặc thực thể nằm BÊN NGOÀI ranh giới doanh nghiệp (như Khách hàng, Ngân hàng liên kết, Cơ quan thuế) tương tác và nhận giá trị từ doanh nghiệp.

---

#### Câu 17 (ad-c2-d1-017) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Điểm khác biệt cốt lõi nhất giữa Business Worker và Business Actor trong mô hình nghiệp vụ là gì?**

- **A.** Business Worker nằm bên TRONG tổ chức; còn Business Actor là đối tượng nằm bên NGOÀI
- **B.** Business Worker là hệ thống máy tính tự động; còn Business Actor luôn luôn là con người
- **C.** Business Worker không bao giờ nhận lương; còn Business Actor là người trả lương nhân viên
- **D.** Business Worker chỉ xuất hiện trong phần mềm; còn Business Actor chỉ xuất hiện ở đời thực

> **Đáp án đúng:** **A** — *Business Worker nằm bên TRONG tổ chức; còn Business Actor là đối tượng nằm bên NGOÀI*
>
> **Giải thích chi tiết:** Ranh giới doanh nghiệp phân định: Business Actor là đối tượng bên NGOÀI (External) nhận giá trị; Business Worker là nhân sự hoặc vai trò bên TRONG (Internal) tham gia thực thi quy trình.

---

#### Câu 18 (ad-c2-d1-018) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Khái niệm nào sau đây trong Business Modeling đại diện cho các đối tượng thông tin thụ động được quy trình xử lý?**

- **A.** Business Entity (Thực thể nghiệp vụ như: Hóa đơn, Hồ sơ bệnh án, Hợp đồng tín dụng)
- **B.** Business Actor (Tác nhân chủ động yêu cầu hệ thống cung cấp dịch vụ bên ngoài)
- **C.** Business Worker (Người lao động trực tiếp thao tác các công việc văn phòng nội bộ)
- **D.** Business Goal (Mục tiêu doanh thu hàng năm được ban tổng giám đốc phê chuẩn)

> **Đáp án đúng:** **A** — *Business Entity (Thực thể nghiệp vụ như: Hóa đơn, Hồ sơ bệnh án, Hợp đồng tín dụng)*
>
> **Giải thích chi tiết:** Business Entity (Thực thể nghiệp vụ) là những thứ (things) hoặc tài liệu thông tin thụ động (Passive objects) được tạo ra, sử dụng hoặc cập nhật bởi các Business Use Case.

---

#### Câu 19 (ad-c2-d1-019) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi bàn về khái niệm Business Use Case?**

- **A.** Business Use Case chỉ mô tả các thao tác nhấp chuột và nhập liệu trên phần mềm máy tính
- **B.** Business Use Case mô tả một chuỗi hành động mang lại giá trị có thể quan sát được cho Actor
- **C.** Business Use Case biểu diễn quy trình kinh doanh tổng thể bất kể có phần mềm hỗ trợ hay không
- **D.** Business Use Case thường được kích hoạt bởi một Business Actor nằm ngoài tổ chức

> **Đáp án đúng:** **A** — *Business Use Case chỉ mô tả các thao tác nhấp chuột và nhập liệu trên phần mềm máy tính*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì mô tả nhấp chuột/nhập liệu là System Use Case chi tiết. Business Use Case ở mức vĩ mô, biểu diễn luồng giá trị nghiệp vụ từ đầu đến cuối (End-to-End business value).

---

#### Câu 20 (ad-c2-d1-020) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Khi phân tích quy trình đặt vé máy bay, 'Hành khách' và 'Nhân viên soát vé' lần lượt được mô hình hóa là:**

- **A.** Hành khách là Business Actor; Nhân viên soát vé là Business Worker của hãng
- **B.** Hành khách là Business Worker; Nhân viên soát vé là Business Actor của hãng
- **C.** Cả hai đối tượng trên đều bắt buộc phải được mô hình hóa là Business Entity
- **D.** Cả hai đối tượng trên đều bắt buộc phải được mô hình hóa là System Actor

> **Đáp án đúng:** **A** — *Hành khách là Business Actor; Nhân viên soát vé là Business Worker của hãng*
>
> **Giải thích chi tiết:** Hành khách là khách hàng bên ngoài (Business Actor) nhận dịch vụ bay. Nhân viên soát vé là nhân sự nội bộ của hãng hàng không (Business Worker) thực thi quy trình phục vụ.

---

#### Câu 21 (ad-c2-d1-021) — [🔴 KHÓ (VẬN DỤNG CAO)] [SINGLE-CORRECT]

**Mối quan hệ giữa Quy trình nghiệp vụ (Business Process) và Ca sử dụng nghiệp vụ (Business Use Case) được hiểu là:**

- **A.** Business Process là chuỗi hoạt động thực tế; Business Use Case là cách chuẩn hóa trong UML
- **B.** Business Process chỉ dùng cho sản xuất cơ khí; còn Business Use Case chỉ dùng viết code
- **C.** Business Process và Business Use Case là hai khái niệm đối lập hoàn toàn không liên quan
- **D.** Business Process bắt buộc phải có máy tính; còn Business Use Case làm bằng sổ tay giấy

> **Đáp án đúng:** **A** — *Business Process là chuỗi hoạt động thực tế; Business Use Case là cách chuẩn hóa trong UML*
>
> **Giải thích chi tiết:** Business Process là dòng chảy công việc kinh doanh trong thực tế; Business Use Case là kỹ thuật mô hình hóa chuẩn mực của UML để nắm bắt và đặc tả dòng chảy công việc đó.

---

#### Câu 22 (ad-c2-d1-022) — [🟢 DỄ (NHẬN BIẾT)] [FILL-BLANK]

**Thuật ngữ biểu diễn 4 thành phần cốt lõi của Mô hình hóa nghiệp vụ theo mô hình RUP/UML chuẩn là:**

- **A.** Business Actor, Business Worker, Business Use Case và Business Entity
- **B.** Input Block, Process Block, Storage System và Output Device
- **C.** Predictive Approach, Adaptive Approach, Waterfall Model và Scrum Framework
- **D.** Planning Phase, Analysis Phase, Design Phase và Implementation Phase

> **Đáp án đúng:** **A** — *Business Actor, Business Worker, Business Use Case và Business Entity*
>
> **Giải thích chi tiết:** Bốn khái niệm nền tảng trong Business Modeling theo Rational Unified Process (RUP) là: Business Actor, Business Worker, Business Use Case và Business Entity.

---

#### Câu 23 (ad-c2-d1-023) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Giai đoạn Khởi động dự án (Initiation Phase) đóng vai trò như thế nào trong quản trị vòng đời phát triển hệ thống?**

- **A.** Là 'Cổng kiểm soát' (Project Gatekeeper) giúp ban lãnh đạo ra quyết định Go hoặc No-Go
- **B.** Là giai đoạn tập trung toàn bộ kỹ sư lập trình để hoàn thành 100% mã nguồn dự án
- **C.** Là giai đoạn triển khai lắp đặt hệ thống máy chủ mạng thực tế tại các chi nhánh
- **D.** Là giai đoạn giải tán ban quản lý dự án để bàn giao toàn bộ cho khách hàng tự quản

> **Đáp án đúng:** **A** — *Là 'Cổng kiểm soát' (Project Gatekeeper) giúp ban lãnh đạo ra quyết định Go hoặc No-Go*
>
> **Giải thích chi tiết:** Initiation Phase đóng vai trò cổng kiểm soát (Project Gate / Gatekeeper), thẩm định giá trị và tính khả thi để lãnh đạo quyết định có cấp ngân sách triển khai dự án hay dừng lại (Go/No-Go).

---

#### Câu 24 (ad-c2-d1-024) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Hoạt động nào sau đây KHÔNG THUỘC 4 hoạt động chính trong giai đoạn Khởi động dự án (Initiation Phase)?**

- **A.** Viết mã nguồn các thuật toán phức tạp và triển khai thử nghiệm trên môi trường Production
- **B.** Xác định bài toán nghiệp vụ, cơ hội cải tiến và lập Phiếu yêu cầu hệ thống (System Request)
- **C.** Tiến hành nghiên cứu và đánh giá tính khả thi dự án trên 3 phương diện (Feasibility Study)
- **D.** Xây dựng kế hoạch sơ bộ ban đầu và hoàn thiện bản Tuyên ngôn dự án (Project Charter)

> **Đáp án đúng:** **A** — *Viết mã nguồn các thuật toán phức tạp và triển khai thử nghiệm trên môi trường Production*
>
> **Giải thích chi tiết:** Viết mã nguồn (Coding) và triển khai Production thuộc về giai đoạn Implementation, tuyệt đối không thuộc giai đoạn Initiation (Khởi động).

---

#### Câu 25 (ad-c2-d1-025) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Ba khía cạnh kinh điển cấu thành bản Đánh giá tính khả thi (Feasibility Analysis) toàn diện của một dự án là:**

- **A.** Khả thi Kinh tế (Economic), Khả thi Kỹ thuật (Technical) và Khả thi Vận hành (Organizational)
- **B.** Khả thi Lập trình (Coding), Khả thi Kiểm thử (Testing) và Khả thi Mạng cáp quang (Hardware)
- **C.** Khả thi Đồ họa (Graphic), Khả thi Âm thanh (Audio) và Khả thi Giao diện người dùng (UI/UX)
- **D.** Khả thi Quốc gia (National), Khả thi Khu vực (Regional) và Khả thi Toàn cầu (Global)

> **Đáp án đúng:** **A** — *Khả thi Kinh tế (Economic), Khả thi Kỹ thuật (Technical) và Khả thi Vận hành (Organizational)*
>
> **Giải thích chi tiết:** Nghiên cứu tính khả thi bao gồm 3 khía cạnh nền tảng: Khả thi Kinh tế (Economic Feasibility), Khả thi Kỹ thuật (Technical Feasibility) và Khả thi Tổ chức/Vận hành (Organizational/Operational Feasibility).

---

#### Câu 26 (ad-c2-d1-026) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Khía cạnh 'Khả thi Kỹ thuật' (Technical Feasibility) nhằm mục đích trả lời câu hỏi mấu chốt nào sau đây?**

- **A.** Chúng ta có đủ năng lực công nghệ và chuyên môn kỹ thuật để xây dựng hệ thống hay không?
- **B.** Dự án này có mang lại lợi nhuận tài chính vượt trội hơn chi phí đầu tư ban đầu hay không?
- **C.** Người dùng cuối trong tổ chức có chấp nhận sử dụng và hòa nhập với phần mềm hay không?
- **D.** Ban giám đốc công ty có sẵn sàng chi tiền thưởng Tết cho đội ngũ lập trình hay không?

> **Đáp án đúng:** **A** — *Chúng ta có đủ năng lực công nghệ và chuyên môn kỹ thuật để xây dựng hệ thống hay không?*
>
> **Giải thích chi tiết:** Technical Feasibility đánh giá tính thực tế của giải pháp công nghệ: độ phức tạp, rủi ro kỹ thuật, tính tương thích và mức độ thành thạo công nghệ của đội ngũ kỹ sư.

---

#### Câu 27 (ad-c2-d1-027) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Trong phân tích khả thi kinh tế, các chỉ số tài chính định lượng quan trọng nào thường được BA sử dụng?**

- **A.** Tỷ suất hoàn vốn đầu tư (ROI), Thời gian hoàn vốn (Payback Period) và Giá trị hiện tại ròng (NPV)
- **B.** Tần số xung nhịp vi xử lý CPU, Dung lượng bộ nhớ RAM và Tốc độ truyền dẫn đường truyền mạng
- **C.** Số lượng dòng mã lệnh viết ra mỗi ngày và số lượng hàm lập trình được tạo trong dự án
- **D.** Số lần nhấp chuột trung bình của người dùng trên giao diện ứng dụng web trong một tháng

> **Đáp án đúng:** **A** — *Tỷ suất hoàn vốn đầu tư (ROI), Thời gian hoàn vốn (Payback Period) và Giá trị hiện tại ròng (NPV)*
>
> **Giải thích chi tiết:** Phân tích khả thi kinh tế sử dụng phương pháp Phân tích Chi phí - Lợi ích (Cost-Benefit Analysis) với các chỉ số tài chính chuẩn tắc: ROI, Payback Period và NPV.

---

#### Câu 28 (ad-c2-d1-028) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Tài liệu chính thức do cấp lãnh đạo phê chuẩn để trao quyền cho Quản lý dự án sử dụng tài nguyên tổ chức là:**

- **A.** Project Charter (Bản tuyên ngôn dự án / Quyết định thành lập dự án chính thức)
- **B.** Software Bug Report (Phiếu báo cáo sự cố phần mềm do bộ phận kiểm thử tạo ra)
- **C.** Daily Meeting Minutes (Biên bản cuộc họp giao ban hàng ngày của đội ngũ kỹ thuật)
- **D.** Employee Resignation Letter (Đơn xin thôi việc của nhân viên văn phòng dự án)

> **Đáp án đúng:** **A** — *Project Charter (Bản tuyên ngôn dự án / Quyết định thành lập dự án chính thức)*
>
> **Giải thích chi tiết:** Project Charter (Tuyên ngôn dự án) là văn bản chính thức phê duyệt dự án, xác định mục tiêu cấp cao, phạm vi sơ bộ và trao quyền hành chính thức cho Project Manager huy động nguồn lực.

---

#### Câu 29 (ad-c2-d1-029) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Phần mềm rất ưu việt nhưng các nhân viên lớn tuổi từ chối sử dụng vì sợ mất việc. Dự án đang gặp rủi ro gì?**

- **A.** Thất bại về Khả thi Tổ chức và Vận hành (Organizational & Operational Feasibility)
- **B.** Thất bại về Khả thi Kỹ thuật phần cứng (Technical Feasibility do mạng quá chậm)
- **C.** Thất bại về Khả thi Bản quyền phần mềm (Legal Feasibility do vi phạm sở hữu trí tuệ)
- **D.** Thất bại về Khả thi Kiến trúc cơ sở dữ liệu (Database Feasibility do thiếu bộ nhớ)

> **Đáp án đúng:** **A** — *Thất bại về Khả thi Tổ chức và Vận hành (Organizational & Operational Feasibility)*
>
> **Giải thích chi tiết:** Sự phản kháng của người dùng, rào cản tâm lý, văn hóa tổ chức và mức độ chấp nhận giải pháp mới thuộc phạm trù Khả thi Tổ chức/Vận hành (Organizational/Operational Feasibility).

---

#### Câu 30 (ad-c2-d1-030) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Ký hiệu chuẩn trong sơ đồ Business Use Case Diagram để phân biệt Business Actor/Worker với System Actor là gì?**

- **A.** Sử dụng thêm một nét gạch chéo ('/') xuyên qua biểu tượng hình người (Stick figure)
- **B.** Tô màu đỏ rực rỡ toàn bộ biểu tượng hình người để gây sự chú ý đặc biệt
- **C.** Vẽ thêm hình tam giác bao quanh đầu của biểu tượng hình người trong sơ đồ
- **D.** Gạch chân hai lần dưới tên định danh của nhân sự trên bản vẽ kỹ thuật UML

> **Đáp án đúng:** **A** — *Sử dụng thêm một nét gạch chéo ('/') xuyên qua biểu tượng hình người (Stick figure)*
>
> **Giải thích chi tiết:** Trong chuẩn UML/RUP Business Modeling, để phân biệt Business Actor hoặc Business Worker với System Actor thông thường, người ta vẽ thêm một dấu gạch chéo ('/') xuyên qua hình người.

---

#### Câu 31 (ad-c2-d1-031) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Biểu đồ Hoạt động (Activity Diagram) trong UML được sử dụng với mục đích chính yếu nào sau đây?**

- **A.** Mô hình hóa dòng chảy điều khiển, logic tuần tự và sự phân nhánh của quy trình nghiệp vụ
- **B.** Thiết kế cấu trúc các bảng dữ liệu quan hệ và khóa ngoại trong hệ quản trị cơ sở dữ liệu
- **C.** Biểu diễn cách sắp xếp dây cáp mạng và máy chủ vật lý bên trong phòng máy chủ trung tâm
- **D.** Hiển thị bảng mã màu và phông chữ đồ họa dùng cho thiết kế giao diện ứng dụng di động

> **Đáp án đúng:** **A** — *Mô hình hóa dòng chảy điều khiển, logic tuần tự và sự phân nhánh của quy trình nghiệp vụ*
>
> **Giải thích chi tiết:** Activity Diagram là biểu đồ hành vi mô hình hóa khía cạnh động của hệ thống, thể hiện dòng chảy điều khiển (Control Flow) và tuần tự các bước trong quy trình nghiệp vụ.

---

#### Câu 32 (ad-c2-d1-032) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Ký hiệu hình quả trám (Diamond symbol) trong biểu đồ Activity Diagram của UML thể hiện nút nào sau đây?**

- **A.** Nút Quyết định (Decision node) để rẽ nhánh điều kiện hoặc Nút Nhập dòng (Merge node)
- **B.** Nút Bắt đầu quy trình (Initial node) với một vòng tròn màu đen đặc hoàn toàn
- **C.** Nút Kết thúc quy trình (Activity Final node) với vòng tròn có tâm đen đặc bên trong
- **D.** Thanh phân nhánh đồng thời (Fork node) để kích hoạt nhiều luồng công việc song song

> **Đáp án đúng:** **A** — *Nút Quyết định (Decision node) để rẽ nhánh điều kiện hoặc Nút Nhập dòng (Merge node)*
>
> **Giải thích chi tiết:** Ký hiệu hình quả trám (Diamond) được dùng làm Nút Quyết định (Decision node) để phân nhánh theo điều kiện rẽ (Guard conditions) hoặc làm Nút Nhập dòng (Merge node).

---

#### Câu 33 (ad-c2-d1-033) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về thanh đồng bộ (Synchronization Bar) trong Activity Diagram?**

- **A.** Thanh Fork nhận nhiều luồng đầu vào và chỉ phát ra duy nhất một luồng công việc đầu ra
- **B.** Thanh Fork nhận một luồng đầu vào duy nhất và tách thành hai hoặc nhiều luồng song song
- **C.** Thanh Join nhận nhiều luồng song song và chỉ tiếp tục khi tất cả luồng đã hoàn tất
- **D.** Cả Fork và Join đều được biểu diễn trực quan bằng một thanh ngang hoặc dọc đặc màu đen

> **Đáp án đúng:** **A** — *Thanh Fork nhận nhiều luồng đầu vào và chỉ phát ra duy nhất một luồng công việc đầu ra*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì mô tả đó là của thanh Join (Hội tụ), không phải thanh Fork (Phân nhánh). Thanh Fork nhận 1 luồng vào và phát ra nhiều luồng ra song song.

---

#### Câu 34 (ad-c2-d1-034) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Khái niệm 'Làn bơi' (Swimlanes / Partitions) trong sơ đồ Activity Diagram mang lại giá trị nào sau đây?**

- **A.** Phân định rõ ràng trách nhiệm thực thi của từng phòng ban, cá nhân hoặc hệ thống cụ thể
- **B.** Giúp sơ đồ trông giống một hồ bơi thể thao chuyên nghiệp để tăng tính hấp dẫn mỹ thuật
- **C.** Cho phép lập trình viên tự động bỏ qua các hoạt động nằm trong làn bơi không mong muốn
- **D.** Dùng để tính toán lượng nước tiêu thụ của các máy tính hoạt động trong văn phòng công ty

> **Đáp án đúng:** **A** — *Phân định rõ ràng trách nhiệm thực thi của từng phòng ban, cá nhân hoặc hệ thống cụ thể*
>
> **Giải thích chi tiết:** Swimlanes (Làn bơi trách nhiệm) chia sơ đồ thành các cột hoặc hàng tương ứng với các đối tượng/phòng ban khác nhau, làm rõ ai (Who) chịu trách nhiệm thực thi hành động nào.

---

#### Câu 35 (ad-c2-d1-035) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Sau khi khách đặt hàng, hệ thống đồng thời trừ kho VÀ gửi email xác nhận. Cần dùng ký hiệu nào?**

- **A.** Thanh phân nhánh đồng thời (Fork node) để tách thành hai luồng hành động chạy song song
- **B.** Nút Quyết định (Decision node) để hệ thống chỉ được phép chọn duy nhất một trong hai hành động
- **C.** Nút Kết thúc hoạt động (Activity Final node) để dừng toàn bộ quy trình ngay lập tức
- **D.** Vòng lặp vô tận (Infinite Loop) để gửi email liên tục cho đến khi hòm thư khách hàng đầy

> **Đáp án đúng:** **A** — *Thanh phân nhánh đồng thời (Fork node) để tách thành hai luồng hành động chạy song song*
>
> **Giải thích chi tiết:** Khi hai hoặc nhiều hành động diễn ra đồng thời (song song độc lập) sau một sự kiện, ký hiệu Fork (Thanh phân nhánh) bắt buộc phải được sử dụng.

---

#### Câu 36 (ad-c2-d1-036) — [🔴 KHÓ (VẬN DỤNG CAO)] [MATCHING]

**Hãy chọn phương án ghép cặp ĐÚNG NHẤT giữa ký hiệu trong Activity Diagram và ý nghĩa chuẩn mực của nó:**

- **A.** Hình tròn đen: Bắt đầu; Quả trám: Rẽ nhánh; Thanh ngang: Đồng bộ; Hình chữ nhật bo góc: Hành động
- **B.** Hình tròn đen: Kết thúc; Quả trám: Bắt đầu; Thanh ngang: Rẽ nhánh; Hình chữ nhật bo góc: Luồng dữ liệu
- **C.** Hình tròn đen: Lỗi hệ thống; Quả trám: Cơ sở dữ liệu; Thanh ngang: Giao diện; Hình chữ nhật bo góc: Máy chủ
- **D.** Hình tròn đen: Hành động; Quả trám: Đồng bộ; Thanh ngang: Bắt đầu; Hình chữ nhật bo góc: Rẽ nhánh

> **Đáp án đúng:** **A** — *Hình tròn đen: Bắt đầu; Quả trám: Rẽ nhánh; Thanh ngang: Đồng bộ; Hình chữ nhật bo góc: Hành động*
>
> **Giải thích chi tiết:** Ký hiệu UML chuẩn: Hình tròn đen (Initial node), Quả trám (Decision/Merge node), Thanh ngang đặc (Fork/Join node), Hình chữ nhật bo góc (Action state).

---

#### Câu 37 (ad-c2-d1-037) — [🔴 KHÓ (VẬN DỤNG CAO)] [OUTSIDE] [CASE-STUDY]

**[Outside] Hiện tượng khách hàng ký hợp đồng phạm vi cố định nhưng lại đòi làm việc kiểu 'Agile nửa vời' gây ra rủi ro gì?**

- **A.** Đội ngũ rơi vào bẫy 'Scope Creep', liên tục thay đổi yêu cầu nhưng ngân sách và hạn chót không tăng
- **B.** Phần mềm sẽ tự động bị các tổ chức bảo mật quốc tế thu hồi chứng chỉ an toàn thông tin ngay lập tức
- **C.** Toàn bộ máy chủ đám mây của doanh nghiệp sẽ bị đình chỉ hoạt động vì vi phạm bản quyền phần mềm
- **D.** Lập trình viên sẽ bị cấm sử dụng các ngôn ngữ lập trình mã nguồn mở trong toàn bộ sự nghiệp sau này

> **Đáp án đúng:** **A** — *Đội ngũ rơi vào bẫy 'Scope Creep', liên tục thay đổi yêu cầu nhưng ngân sách và hạn chót không tăng*
>
> **Giải thích chi tiết:** [Outside] 'Agile nửa vời' (Flaccid Agile) khi kết hợp với hợp đồng Fixed-price / Fixed-scope thường dẫn đến thảm họa: khách hàng liên tục thêm bớt yêu cầu mà không chịu ký phụ lục điều chỉnh chi phí.

---

#### Câu 38 (ad-c2-d1-038) — [🔴 KHÓ (VẬN DỤNG CAO)] [OUTSIDE] [SINGLE-CORRECT]

**[Outside] Khi phân tích chỉ số tài chính của dự án phần mềm, chỉ số NPV (Net Present Value) dương (> 0) có ý nghĩa gì?**

- **A.** Dự án có hiệu quả tài chính sinh lời cao hơn mức chi phí cơ hội của vốn đầu tư bỏ ra
- **B.** Dự án chắc chắn sẽ hoàn thành sớm hơn kế hoạch ban đầu ít nhất là ba đến bốn tháng
- **C.** Dự án không có bất kỳ rủi ro kỹ thuật nào trong suốt toàn bộ quá trình viết mã nguồn
- **D.** Dự án không cần phải thuê chuyên viên phân tích nghiệp vụ BA hay chuyên gia kiểm thử

> **Đáp án đúng:** **A** — *Dự án có hiệu quả tài chính sinh lời cao hơn mức chi phí cơ hội của vốn đầu tư bỏ ra*
>
> **Giải thích chi tiết:** [Outside] NPV (Giá trị hiện tại ròng) dương chứng tỏ tổng dòng tiền thu về trong tương lai (đã quy về hiện tại theo tỷ suất chiết khấu) lớn hơn tổng chi phí đầu tư ban đầu, dự án có khả thi kinh tế.

---

#### Câu 39 (ad-c2-d1-039) — [🔴 KHÓ (VẬN DỤNG CAO)] [OUTSIDE] [SINGLE-CORRECT]

**[Outside] Để kiểm soát hiện tượng 'Phình phạm vi' (Scope Creep) trong giai đoạn Implementation, BA bắt buộc phải áp dụng quy trình nào?**

- **A.** Quy trình Quản lý Yêu cầu Thay đổi (Change Request - CR) có đánh giá tác động chi phí và tiến độ
- **B.** Quy trình tự động chấp nhận vô điều kiện mọi lời đề nghị của khách hàng qua tin nhắn điện thoại
- **C.** Quy trình từ chối tuyệt đối việc giao tiếp với khách hàng trong suốt thời gian đội ngũ thi công
- **D.** Quy trình bí mật sửa đổi mã nguồn vào ban đêm để ban quản lý dự án không hay biết sự thay đổi

> **Đáp án đúng:** **A** — *Quy trình Quản lý Yêu cầu Thay đổi (Change Request - CR) có đánh giá tác động chi phí và tiến độ*
>
> **Giải thích chi tiết:** [Outside] Khi phát sinh yêu cầu mới ngoài phạm vi cơ sở (Baseline), quy trình Change Request (CR) bắt buộc phải được kích hoạt để phân tích tác động (Impact Analysis) đến tiến độ và ngân sách.

---

#### Câu 40 (ad-c2-d1-040) — [🔴 KHÓ (VẬN DỤNG CAO)] [OUTSIDE] [CASE-STUDY]

**[Outside] Trong 4 chiến lược chuyển đổi hệ thống, chiến lược 'Chuyển đổi Trực tiếp' (Direct/Cutover) có đặc trưng rủi ro gì?**

- **A.** Cắt bỏ hệ thống cũ và bật hệ thống mới ngay lập tức; chi phí thấp nhất nhưng rủi ro gián đoạn cao nhất
- **B.** Cho hệ thống cũ và hệ thống mới chạy song song cùng lúc trong ba năm để so sánh số liệu kiểm toán
- **C.** Chỉ triển khai thử nghiệm trên duy nhất một chi nhánh nhỏ trước khi nhân rộng ra toàn bộ công ty
- **D.** Triển khai từng phân hệ nhỏ nối tiếp nhau cho đến khi thay thế hoàn toàn toàn bộ phần mềm cũ

> **Đáp án đúng:** **A** — *Cắt bỏ hệ thống cũ và bật hệ thống mới ngay lập tức; chi phí thấp nhất nhưng rủi ro gián đoạn cao nhất*
>
> **Giải thích chi tiết:** [Outside] Direct Conversion (Cutover / Big-bang) tắt hệ thống cũ và chuyển sang hệ thống mới ngay lập tức. Chi phí thấp nhất nhưng mức độ rủi ro cao nhất vì không có hệ thống dự phòng khi xảy ra sự cố lớn.

---

## BỘ ĐỀ THI SỐ 2 (MÃ ĐỀ: ad-c2-d2)

*Bộ đề số 2 chuyên sâu về trường phái Adaptive Approach (Agile/Scrum), đối chiếu vai trò Business Worker vs Business Actor, các kỹ thuật phân tích khả thi tài chính (ROI/Payback), luồng đối tượng và làn bơi Swimlanes trong Activity Diagram.*

---

#### Câu 1 (ad-c2-d2-001) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Triết lý cốt lõi của trường phái tiếp cận thích ứng (Adaptive Approach) được đúc kết qua phát biểu nào?**

- **A.** 'Embrace change, deliver early and often' (Chào đón thay đổi và bàn giao thường xuyên)
- **B.** 'Freeze all requirements at day one' (Đóng băng mọi yêu cầu ngay từ ngày khởi đầu)
- **C.** 'Avoid customer feedback at all costs' (Tránh né phản hồi của người dùng bằng mọi giá)
- **D.** 'Complete all documentation before coding' (Viết xong toàn bộ tài liệu rồi mới viết mã)

> **Đáp án đúng:** **A** — *'Embrace change, deliver early and often' (Chào đón thay đổi và bàn giao thường xuyên)*
>
> **Giải thích chi tiết:** Adaptive Approach (như Agile/Scrum) tuân theo triết lý 'Embrace change, deliver early and often' — chào đón sự biến động của yêu cầu và bàn giao phần mềm chạy được liên tục.

---

#### Câu 2 (ad-c2-d2-002) — [🟢 DỄ (NHẬN BIẾT)] [FILL-BLANK]

**Khái niệm chu kỳ làm việc ngắn từ 1 đến 4 tuần để tạo ra bản tăng dần chạy được trong Adaptive gọi là:**

- **A.** Vòng lặp phát triển tăng dần (Iteration hoặc Sprint trong các phương pháp luận Agile)
- **B.** Giai đoạn bảo trì dứt điểm sản phẩm phần mềm sau khi đã hoàn thành toàn bộ hợp đồng
- **C.** Giai đoạn khảo sát tính khả thi ban đầu để trình ban lãnh đạo phê duyệt ngân sách
- **D.** Quy trình đóng băng yêu cầu tuyệt đối nhằm ngăn chặn mọi sự thay đổi của khách hàng

> **Đáp án đúng:** **A** — *Vòng lặp phát triển tăng dần (Iteration hoặc Sprint trong các phương pháp luận Agile)*
>
> **Giải thích chi tiết:** Trong Adaptive Approach, Iteration (hoặc Sprint) là chu kỳ thời gian cố định (Timebox từ 1-4 tuần), trong đó nhóm hoàn thành một phần tính năng và có thể chạy được.

---

#### Câu 3 (ad-c2-d2-003) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Về mức độ tham gia của khách hàng (Customer Involvement), trường phái Adaptive Approach có đặc trưng gì?**

- **A.** Khách hàng tham gia liên tục, đồng hành và phản hồi trong từng buổi đánh giá vòng lặp
- **B.** Khách hàng chỉ xuất hiện ở ngày đầu tiên để ký hợp đồng và ngày cuối cùng để nghiệm thu
- **C.** Khách hàng hoàn toàn bị cấm xem sản phẩm đang làm cho đến khi hết hạn bảo hành năm năm
- **D.** Khách hàng chỉ được phép giao tiếp với đội ngũ kỹ thuật thông qua văn bản luật sư gửi

> **Đáp án đúng:** **A** — *Khách hàng tham gia liên tục, đồng hành và phản hồi trong từng buổi đánh giá vòng lặp*
>
> **Giải thích chi tiết:** Trong Adaptive, khách hàng là đối tác đồng hành xuyên suốt, tham gia vào các buổi lập kế hoạch và nghiệm thu sau mỗi vòng lặp để định hướng sản phẩm kịp thời.

---

#### Câu 4 (ad-c2-d2-004) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về khía cạnh Tài liệu (Documentation) trong Adaptive Approach?**

- **A.** Adaptive Approach hoàn toàn cấm đoán việc viết bất kỳ tài liệu kỹ thuật nào trong dự án
- **B.** Adaptive Approach hướng tới tài liệu 'vừa đủ dùng' (Just enough) và mang tính thực tế cao
- **C.** Adaptive Approach coi phần mềm hoạt động tốt có giá trị cao hơn tài liệu quá dài dòng
- **D.** Adaptive Approach vẫn lưu trữ các quyết định kiến trúc và hướng dẫn cài đặt then chốt

> **Đáp án đúng:** **A** — *Adaptive Approach hoàn toàn cấm đoán việc viết bất kỳ tài liệu kỹ thuật nào trong dự án*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì Tuyên ngôn Agile nêu rõ 'phần mềm chạy tốt quan trọng hơn tài liệu đồ sộ', chứ không hề cấm đoán tài liệu. Nhóm vẫn viết tài liệu vừa đủ dùng (Just enough).

---

#### Câu 5 (ad-c2-d2-005) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Trong quản trị sự thay đổi (Change Management), Adaptive Approach xem các thay đổi yêu cầu phát sinh là:**

- **A.** Cơ hội để cải tiến giải pháp và tối đa hóa giá trị kinh doanh đem lại cho khách hàng
- **B.** Một hành vi vi phạm hợp đồng kinh tế nghiêm trọng cần phải xử phạt hành chính nặng
- **C.** Sự thiếu sót tai hại của đội ngũ lập trình viên khi không thể đoán trước được tương lai
- **D.** Rào cản nguy hiểm cần phải được loại trừ bằng cách cắt đứt liên lạc với người dùng

> **Đáp án đúng:** **A** — *Cơ hội để cải tiến giải pháp và tối đa hóa giá trị kinh doanh đem lại cho khách hàng*
>
> **Giải thích chi tiết:** Adaptive Approach coi sự thay đổi là tất yếu và là cơ hội để hệ thống thích ứng tốt hơn với nhu cầu thực tế của thị trường, đem lại giá trị tối đa cho người dùng.

---

#### Câu 6 (ad-c2-d2-006) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Một startup công nghệ phát triển ứng dụng Web3 mới lạ, thị trường biến động từng ngày. Nên chọn gì?**

- **A.** Adaptive Approach vì giúp phát hành bản MVP sớm, đo lường phản hồi và điều chỉnh linh hoạt
- **B.** Predictive Approach vì bắt buộc phải khóa chết toàn bộ yêu cầu kỹ thuật trong vòng 3 năm
- **C.** Không áp dụng bất kỳ mô hình nào, để lập trình viên tự do viết mã theo sở thích cá nhân
- **D.** Dành 2 năm đầu tiên chỉ để vẽ sơ đồ chi tiết và tuyệt đối không viết một dòng mã nào

> **Đáp án đúng:** **A** — *Adaptive Approach vì giúp phát hành bản MVP sớm, đo lường phản hồi và điều chỉnh linh hoạt*
>
> **Giải thích chi tiết:** Khi yêu cầu không chắc chắn, công nghệ mới và thị trường biến động nhanh, Adaptive Approach là con đường duy nhất giúp thử nghiệm, học hỏi và thích ứng kịp thời.

---

#### Câu 7 (ad-c2-d2-007) — [🔴 KHÓ (VẬN DỤNG CAO)] [MATCHING]

**Hãy chọn phương án ghép cặp ĐÚNG NHẤT giữa tiêu chí đánh giá và phương pháp tiếp cận SDLC phù hợp:**

- **A.** Yêu cầu ổn định ➔ Predictive; Yêu cầu biến động ➔ Adaptive; Cần MVP nhanh ➔ Adaptive
- **B.** Yêu cầu ổn định ➔ Adaptive; Yêu cầu biến động ➔ Predictive; Cần MVP nhanh ➔ Predictive
- **C.** Yêu cầu ổn định ➔ Bỏ qua SDLC; Yêu cầu biến động ➔ Thác nước; Cần MVP nhanh ➔ Đóng băng
- **D.** Yêu cầu ổn định ➔ Không làm; Yêu cầu biến động ➔ Cấm đổi; Cần MVP nhanh ➔ Viết tài liệu

> **Đáp án đúng:** **A** — *Yêu cầu ổn định ➔ Predictive; Yêu cầu biến động ➔ Adaptive; Cần MVP nhanh ➔ Adaptive*
>
> **Giải thích chi tiết:** Tiêu chí chuẩn: Yêu cầu rõ ràng, ổn định ➔ Predictive; Yêu cầu không chắc chắn, biến động liên tục hoặc cần phát hành bản mẫu nhanh (MVP) ➔ Adaptive.

---

#### Câu 8 (ad-c2-d2-008) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Giai đoạn thứ hai 'Analysis' (Phân tích yêu cầu) trong SDLC tập trung trả lời câu hỏi cốt lõi nào?**

- **A.** Hệ thống thông tin cần phải làm được những gì cho người dùng? (What is needed?)
- **B.** Tại sao chúng ta phải đầu tư ngân sách để làm hệ thống này? (Why build it?)
- **C.** Hệ thống sẽ được thiết kế cơ sở dữ liệu và hạ tầng ra sao? (How will it work?)
- **D.** Ai sẽ là người chi trả tiền bản quyền phần mềm cho dự án? (Who pays for it?)

> **Đáp án đúng:** **A** — *Hệ thống thông tin cần phải làm được những gì cho người dùng? (What is needed?)*
>
> **Giải thích chi tiết:** Giai đoạn Analysis tìm hiểu sâu sắc nghiệp vụ của người dùng để trả lời câu hỏi: 'Hệ thống cần phải làm được những gì?' (What is needed / What must the system do?).

---

#### Câu 9 (ad-c2-d2-009) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong giai đoạn đầu tiên (Planning Phase), hai sản phẩm bàn giao sơ bộ quan trọng nhất thường là gì?**

- **A.** Phiếu yêu cầu hệ thống (System Request) và Báo cáo nghiên cứu khả thi (Feasibility Study)
- **B.** Mã nguồn hoàn chỉnh của hệ thống kèm theo các bản thiết kế mạch vi xử lý máy chủ
- **C.** Bản hợp đồng thuê ngoài nhân sự văn phòng và danh sách số điện thoại của khách hàng
- **D.** Biên bản bàn giao quyền sở hữu trí tuệ phần mềm cho các đối tác liên kết thương mại

> **Đáp án đúng:** **A** — *Phiếu yêu cầu hệ thống (System Request) và Báo cáo nghiên cứu khả thi (Feasibility Study)*
>
> **Giải thích chi tiết:** Giai đoạn Planning kết thúc với 2 tài liệu nền tảng: Phiếu yêu cầu hệ thống (System Request) và Báo cáo nghiên cứu tính khả thi (Feasibility Study) cùng Kế hoạch dự án sơ bộ.

---

#### Câu 10 (ad-c2-d2-010) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi bàn về giai đoạn Hỗ trợ & Bảo trì (Support Phase) trong SDLC?**

- **A.** Giai đoạn Support đồng nghĩa với việc xóa bỏ toàn bộ hệ thống cũ để lập trình lại từ đầu
- **B.** Giai đoạn Support bao gồm việc sửa lỗi phần mềm phát sinh trong quá trình người dùng sử dụng
- **C.** Giai đoạn Support bao gồm việc tối ưu hóa hiệu năng và cập nhật theo các quy định mới
- **D.** Giai đoạn Support đòi hỏi đội ngũ hỗ trợ kỹ thuật (Helpdesk) trợ giúp người dùng hàng ngày

> **Đáp án đúng:** **A** — *Giai đoạn Support đồng nghĩa với việc xóa bỏ toàn bộ hệ thống cũ để lập trình lại từ đầu*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì giai đoạn Support nhằm giữ cho hệ thống vận hành liên tục và ổn định (Keep it running), sửa chữa lỗi và nâng cấp nhỏ, chứ không phải phá bỏ viết lại từ đầu.

---

#### Câu 11 (ad-c2-d2-011) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Hoạt động nào sau đây là trọng tâm bản chất của giai đoạn 'Design' (Thiết kế hệ thống)?**

- **A.** Chuyển đổi các mô hình logic thành lược đồ cơ sở dữ liệu vật lý và kiến trúc phần mềm
- **B.** Phỏng vấn người sử dụng để ghi nhận các mong muốn nghiệp vụ sơ bộ ban đầu của họ
- **C.** Đóng gói hệ thống vào đĩa quang và bán đại trà trên thị trường cho người tiêu dùng
- **D.** Cài đặt phần mềm diệt virus trên tất cả các máy vi tính xách tay của ban giám đốc

> **Đáp án đúng:** **A** — *Chuyển đổi các mô hình logic thành lược đồ cơ sở dữ liệu vật lý và kiến trúc phần mềm*
>
> **Giải thích chi tiết:** Giai đoạn Design chuyển hóa các yêu cầu logic (WHAT) thành mô hình vật lý cụ thể (HOW): kiến trúc mạng, thiết kế cơ sở dữ liệu vật lý, giao diện người dùng và thông số kỹ thuật.

---

#### Câu 12 (ad-c2-d2-012) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Trong quản trị bảo trì phần mềm, hoạt động bổ sung tính năng mới để nâng cao năng lực cạnh tranh được gọi là:**

- **A.** Bảo trì hoàn thiện nâng cao (Perfective Maintenance nhằm gia tăng giá trị sử dụng)
- **B.** Bảo trì sửa lỗi khẩn cấp (Corrective Maintenance nhằm khắc phục các sự cố sập mạng)
- **C.** Bảo trì thích ứng môi trường (Adaptive Maintenance nhằm theo kịp các bản cập nhật HĐH)
- **D.** Bảo trì phòng ngừa rủi ro (Preventive Maintenance nhằm tránh các lỗi có thể xảy ra)

> **Đáp án đúng:** **A** — *Bảo trì hoàn thiện nâng cao (Perfective Maintenance nhằm gia tăng giá trị sử dụng)*
>
> **Giải thích chi tiết:** Bảo trì hoàn thiện (Perfective Maintenance) là hoạt động nâng cấp, bổ sung thêm các tính năng mới theo yêu cầu kinh doanh để hệ thống phục vụ người dùng tốt hơn.

---

#### Câu 13 (ad-c2-d2-013) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Khi ngân hàng chuyển đổi từ Windows Server 2012 sang Windows Server 2022, ứng dụng cần sửa đổi để chạy được. Đây là dạng bảo trì gì?**

- **A.** Bảo trì thích ứng (Adaptive Maintenance để thích nghi với môi trường công nghệ mới)
- **B.** Bảo trì sửa lỗi (Corrective Maintenance vì phần mềm bị lỗi logic ngay từ đầu dự án)
- **C.** Bảo trì hoàn thiện (Perfective Maintenance vì giao diện người dùng trông đẹp mắt hơn)
- **D.** Bảo trì phòng ngừa (Preventive Maintenance vì không liên quan đến hệ điều hành máy)

> **Đáp án đúng:** **A** — *Bảo trì thích ứng (Adaptive Maintenance để thích nghi với môi trường công nghệ mới)*
>
> **Giải thích chi tiết:** Bảo trì thích ứng (Adaptive Maintenance) là việc điều chỉnh hệ thống phần mềm để thích nghi với những thay đổi trong môi trường phần cứng, hệ điều hành hoặc quy định pháp lý.

---

#### Câu 14 (ad-c2-d2-014) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [FILL-BLANK]

**Năm câu hỏi cốt lõi tương ứng với 5 giai đoạn SDLC (Planning, Analysis, Design, Implementation, Support) lần lượt là:**

- **A.** Why build it? ➔ What is needed? ➔ How will it work? ➔ Build & Deploy? ➔ Keep it running?
- **B.** How will it work? ➔ Why build it? ➔ What is needed? ➔ Keep it running? ➔ Build & Deploy?
- **C.** What is needed? ➔ Why build it? ➔ How will it work? ➔ Build & Deploy? ➔ Keep it running?
- **D.** Why build it? ➔ How will it work? ➔ What is needed? ➔ Keep it running? ➔ Build & Deploy?

> **Đáp án đúng:** **A** — *Why build it? ➔ What is needed? ➔ How will it work? ➔ Build & Deploy? ➔ Keep it running?*
>
> **Giải thích chi tiết:** Chuỗi 5 câu hỏi cốt lõi: Planning (Why?), Analysis (What?), Design (How?), Implementation (Build & Deploy), Support (Keep it running).

---

#### Câu 15 (ad-c2-d2-015) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Khái niệm 'Ranh giới doanh nghiệp' (Enterprise Boundary) trong Business Modeling có ý nghĩa là gì?**

- **A.** Đường phân định rõ những đối tượng thuộc tổ chức và các thực thể nằm bên ngoài tổ chức
- **B.** Hàng rào bảo vệ vật lý và hệ thống camera giám sát lắp đặt xung quanh tòa nhà văn phòng
- **C.** Tổng số vốn điều lệ tối thiểu mà công ty phải đăng ký với các cơ quan quản lý nhà nước
- **D.** Ranh giới địa lý giữa các quận huyện trên bản đồ hành chính nơi công ty đặt chi nhánh

> **Đáp án đúng:** **A** — *Đường phân định rõ những đối tượng thuộc tổ chức và các thực thể nằm bên ngoài tổ chức*
>
> **Giải thích chi tiết:** Enterprise Boundary (Ranh giới doanh nghiệp) phân định phạm vi tổ chức: những ai/thực thể nào thuộc nội bộ doanh nghiệp (Internal) và những ai là đối tác/khách hàng bên ngoài (External).

---

#### Câu 16 (ad-c2-d2-016) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Một nhân sự nội bộ trực tiếp tham gia vận hành và thực thi các hoạt động trong quy trình nghiệp vụ được gọi là:**

- **A.** Business Worker (Người thực thi nghiệp vụ — ví dụ: Thủ kho, Kế toán viên, Thu ngân)
- **B.** Business Actor (Khách hàng vãng lai bước vào cửa hàng để mua sắm hàng hóa bán lẻ)
- **C.** Business Entity (Tờ séc ngân hàng và phiếu thu chi tiền mặt lưu trữ trong két sắt)
- **D.** Business Goal (Mục tiêu tăng trưởng lợi nhuận quý được đề ra tại cuộc họp cổ đông)

> **Đáp án đúng:** **A** — *Business Worker (Người thực thi nghiệp vụ — ví dụ: Thủ kho, Kế toán viên, Thu ngân)*
>
> **Giải thích chi tiết:** Business Worker là cá nhân hoặc vai trò thuộc nội bộ doanh nghiệp (Internal), trực tiếp tham gia xử lý các hoạt động trong một hoặc nhiều Business Use Case.

---

#### Câu 17 (ad-c2-d2-017) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Phát biểu nào sau đây phân biệt CHÍNH XÁC giữa Business Actor và System Actor?**

- **A.** Business Actor tương tác với doanh nghiệp; System Actor tương tác với phần mềm cụ thể
- **B.** Business Actor luôn là máy tính; còn System Actor luôn luôn là con người bằng xương thịt
- **C.** Business Actor chỉ tồn tại trên giấy tờ; còn System Actor chỉ tồn tại ở các nước phát triển
- **D.** Business Actor và System Actor là hai khái niệm hoàn toàn trùng lặp không có gì phân biệt

> **Đáp án đúng:** **A** — *Business Actor tương tác với doanh nghiệp; System Actor tương tác với phần mềm cụ thể*
>
> **Giải thích chi tiết:** Business Actor tương tác với toàn bộ tổ chức/doanh nghiệp ở mức vĩ mô; còn System Actor là người dùng hoặc hệ thống bên ngoài tương tác trực tiếp với ứng dụng phần mềm cụ thể.

---

#### Câu 18 (ad-c2-d2-018) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về Thực thể nghiệp vụ (Business Entity)?**

- **A.** Business Entity là một người lao động có hợp đồng lao động chính thức với doanh nghiệp
- **B.** Business Entity là tài liệu hoặc thông tin thụ động được tạo ra hoặc sử dụng bởi quy trình
- **C.** Hóa đơn bán hàng, Đơn đặt hàng, Hồ sơ bảo hành là những ví dụ điển hình của Business Entity
- **D.** Business Entity thường có vòng đời trạng thái (ví dụ: Tạo mới ➔ Đã duyệt ➔ Đã thanh toán)

> **Đáp án đúng:** **A** — *Business Entity là một người lao động có hợp đồng lao động chính thức với doanh nghiệp*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì người lao động là Business Worker. Business Entity là đối tượng thông tin hoặc tài liệu thụ động (như Đơn hàng, Hợp đồng, Hóa đơn) được quy trình xử lý.

---

#### Câu 19 (ad-c2-d2-019) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Tại sao trong quy trình chuẩn, công việc Business Modeling cần được thực hiện trước khi thiết kế hệ thống phần mềm?**

- **A.** Để tối ưu hóa quy trình trước, tránh việc biến một quy trình thủ công tồi tệ thành phần mềm tồi
- **B.** Vì các ngôn ngữ lập trình hiện đại như C# hay Python bắt buộc phải đọc sơ đồ Business Modeling
- **C.** Để người quản lý dự án có cớ từ chối thanh toán lương cho các lập trình viên mới tuyển dụng
- **D.** Vì nếu không có Business Modeling thì các máy chủ mạng sẽ không thể kết nối Internet được

> **Đáp án đúng:** **A** — *Để tối ưu hóa quy trình trước, tránh việc biến một quy trình thủ công tồi tệ thành phần mềm tồi*
>
> **Giải thích chi tiết:** Nếu tin học hóa một quy trình đang rối rắm và lỗi thời, ta chỉ thu được một phần mềm tồi tệ hoạt động nhanh hơn. Business Modeling giúp xem xét, tái cấu trúc quy trình tối ưu trước.

---

#### Câu 20 (ad-c2-d2-020) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Trong quy trình khám bệnh tại bệnh viện, 'Bệnh nhân', 'Bác sĩ' và 'Bệnh án' lần lượt là:**

- **A.** Bệnh nhân: Business Actor; Bác sĩ: Business Worker; Bệnh án: Business Entity
- **B.** Bệnh nhân: Business Worker; Bác sĩ: Business Actor; Bệnh án: Business Entity
- **C.** Bệnh nhân: Business Entity; Bác sĩ: Business Worker; Bệnh án: Business Actor
- **D.** Bệnh nhân: Business Actor; Bác sĩ: Business Entity; Bệnh án: Business Worker

> **Đáp án đúng:** **A** — *Bệnh nhân: Business Actor; Bác sĩ: Business Worker; Bệnh án: Business Entity*
>
> **Giải thích chi tiết:** Bệnh nhân là khách hàng bên ngoài (Business Actor) nhận dịch vụ khám; Bác sĩ là nhân sự nội bộ (Business Worker) thực hiện khám; Bệnh án là tài liệu thông tin thụ động (Business Entity).

---

#### Câu 21 (ad-c2-d2-021) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong sơ đồ Business Use Case mức doanh nghiệp, ký hiệu nào được dùng để biểu diễn một Ca sử dụng nghiệp vụ?**

- **A.** Hình elip có một đường gạch chéo ('/') xuyên qua kèm tên quy trình nghiệp vụ bên trong
- **B.** Hình tam giác cân tô màu đỏ với các đường nét đứt khúc xung quanh khung viền ngoài
- **C.** Hình chữ nhật vuông vức có chứa đoạn mã lập trình chi tiết của hàm xử lý hóa đơn
- **D.** Hình lục giác đều có chứa chữ ký xác nhận của tổng giám đốc công ty ở chính giữa

> **Đáp án đúng:** **A** — *Hình elip có một đường gạch chéo ('/') xuyên qua kèm tên quy trình nghiệp vụ bên trong*
>
> **Giải thích chi tiết:** Trong ký hiệu RUP/UML Business Modeling, Business Use Case được biểu diễn bằng hình elip có một đường gạch chéo ('/') xuyên qua ở mép trên bên trái.

---

#### Câu 22 (ad-c2-d2-022) — [🔴 KHÓ (VẬN DỤNG CAO)] [MATCHING]

**Hãy chọn phương án ghép cặp ĐÚNG NHẤT giữa khái niệm Business Modeling và ví dụ thực tế trong chuỗi bán lẻ:**

- **A.** Actor - Khách mua hàng; Worker - Nhân viên thu ngân; Entity - Phiếu xuất kho hàng
- **B.** Actor - Nhân viên thu ngân; Worker - Khách mua hàng; Entity - Phiếu xuất kho hàng
- **C.** Actor - Phiếu xuất kho hàng; Worker - Nhân viên thu ngân; Entity - Khách mua hàng
- **D.** Actor - Khách mua hàng; Worker - Phiếu xuất kho hàng; Entity - Nhân viên thu ngân

> **Đáp án đúng:** **A** — *Actor - Khách mua hàng; Worker - Nhân viên thu ngân; Entity - Phiếu xuất kho hàng*
>
> **Giải thích chi tiết:** Trong cửa hàng bán lẻ: Khách mua hàng là Business Actor; Nhân viên thu ngân là Business Worker; Phiếu xuất kho là Business Entity.

---

#### Câu 23 (ad-c2-d2-023) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Tài liệu khởi phát ban đầu mô tả lý do kinh doanh và giá trị kỳ vọng của hệ thống thông tin mới là:**

- **A.** Phiếu yêu cầu hệ thống (System Request / Project Proposal Document)
- **B.** Bản thiết kế lược đồ cơ sở dữ liệu vật lý hoàn chỉnh ở mức chi tiết
- **C.** Bản hợp đồng lao động chính thức giữa kỹ sư lập trình và ban giám đốc
- **D.** Bản vẽ thiết kế bố trí phòng làm việc và điều hòa nhiệt độ văn phòng

> **Đáp án đúng:** **A** — *Phiếu yêu cầu hệ thống (System Request / Project Proposal Document)*
>
> **Giải thích chi tiết:** System Request (Phiếu yêu cầu hệ thống) là tài liệu khởi phát dự án, nêu rõ nhà tài trợ (Sponsor), nhu cầu kinh doanh (Business Need), tính năng mong muốn và giá trị kỳ vọng.

---

#### Câu 24 (ad-c2-d2-024) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về Nghiên cứu tính khả thi (Feasibility Study) trong giai đoạn Initiation?**

- **A.** Mọi dự án công nghệ khi lập phiếu yêu cầu đều bắt buộc phải được chấp thuận triển khai 100%
- **B.** Feasibility Study giúp tổ chức đánh giá toàn diện xem có nên tiếp tục đầu tư hay dừng lại
- **C.** Feasibility Study cần được cập nhật và đánh giá lại liên tục qua từng giai đoạn then chốt
- **D.** Nếu dự án bị đánh giá là không khả thi (No-Go), tổ chức sẽ tiết kiệm được rất nhiều nguồn lực

> **Đáp án đúng:** **A** — *Mọi dự án công nghệ khi lập phiếu yêu cầu đều bắt buộc phải được chấp thuận triển khai 100%*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì mục đích của Feasibility Study là sàng lọc; rất nhiều ý tưởng đề xuất sẽ bị bác bỏ (No-Go) nếu không đạt yêu cầu về tài chính, công nghệ hoặc khả năng vận hành.

---

#### Câu 25 (ad-c2-d2-025) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong phân tích khả thi kinh tế, khái niệm 'Thời gian hoàn vốn' (Payback Period) được định nghĩa là gì?**

- **A.** Khoảng thời gian cần thiết để tổng lợi ích tích lũy bù đắp hoàn toàn tổng chi phí đầu tư ban đầu
- **B.** Tổng số ngày làm việc chính thức của một kỹ sư lập trình trong suốt toàn bộ năm tài chính
- **C.** Thời hạn tối đa mà ngân hàng cho phép doanh nghiệp chậm thanh toán lãi suất vay ngắn hạn
- **D.** Thời gian cần thiết để sao lưu toàn bộ dữ liệu máy chủ sang một trung tâm dữ liệu dự phòng

> **Đáp án đúng:** **A** — *Khoảng thời gian cần thiết để tổng lợi ích tích lũy bù đắp hoàn toàn tổng chi phí đầu tư ban đầu*
>
> **Giải thích chi tiết:** Payback Period (Thời gian hoàn vốn) là khoảng thời gian (thường tính bằng năm hoặc tháng) để dòng thu nhập tích lũy từ dự án cân bằng với tổng chi phí đầu tư bỏ ra ban đầu.

---

#### Câu 26 (ad-c2-d2-026) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Yếu tố nào sau đây là tiêu chuẩn quan trọng nhất để đánh giá 'Khả thi Tổ chức/Vận hành' (Organizational Feasibility)?**

- **A.** Sự ủng hộ mạnh mẽ của ban lãnh đạo cấp cao (Management Sponsorship) và sự sẵn sàng của người dùng
- **B.** Khả năng mua được các máy chủ máy tính có cấu hình vi xử lý tốc độ cao nhất trên thế giới
- **C.** Dung lượng lưu trữ của các ổ cứng mạng có đáp ứng được hàng tỷ bức ảnh cá nhân hay không
- **D.** Số lượng kỹ sư lập trình biết sử dụng đồng thời cả năm ngôn ngữ lập trình khác nhau

> **Đáp án đúng:** **A** — *Sự ủng hộ mạnh mẽ của ban lãnh đạo cấp cao (Management Sponsorship) và sự sẵn sàng của người dùng*
>
> **Giải thích chi tiết:** Organizational Feasibility xem xét liệu dự án có nhận được sự hậu thuẫn từ lãnh đạo (Executive Sponsor) và liệu người dùng cuối có đón nhận hệ thống mới vào quy trình làm việc hay không.

---

#### Câu 27 (ad-c2-d2-027) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Khi đánh giá 'Khả thi Kỹ thuật' (Technical Feasibility), rủi ro của dự án sẽ tăng vọt trong trường hợp nào?**

- **A.** Dự án có quy mô rất lớn, sử dụng công nghệ hoàn toàn mới lạ mà đội ngũ chưa từng có kinh nghiệm
- **B.** Dự án áp dụng công nghệ quen thuộc đã được kiểm chứng ổn định trên thị trường suốt mười năm
- **C.** Quy mô dự án nhỏ gọn, phạm vi công việc gói gọn trong một phòng ban chức năng duy nhất
- **D.** Đội ngũ kỹ sư dự án đã từng làm thành công ba hệ thống có tính chất tương tự trước đó

> **Đáp án đúng:** **A** — *Dự án có quy mô rất lớn, sử dụng công nghệ hoàn toàn mới lạ mà đội ngũ chưa từng có kinh nghiệm*
>
> **Giải thích chi tiết:** Rủi ro kỹ thuật tỷ lệ thuận với: Quy mô dự án lớn, Công nghệ mới mẻ chưa trưởng thành, và Sự thiếu hụt kinh nghiệm chuyên môn của đội ngũ phát triển.

---

#### Câu 28 (ad-c2-d2-028) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Dự án đầu tư 200 triệu đồng. Sau 3 năm, tổng lợi nhuận ròng thu về là 100 triệu đồng. Tỷ suất hoàn vốn ROI là:**

- **A.** 50% (Được tính bằng công thức chuẩn: Tổng lợi ích ròng chia cho Tổng chi phí đầu tư ban đầu)
- **B.** 100% (Được tính bằng cách lấy tổng lợi nhuận thu về nhân đôi do thời gian kéo dài ba năm)
- **C.** 20% (Được tính bằng cách chia đều chi phí đầu tư cho từng quý hoạt động của doanh nghiệp)
- **D.** 10% (Được tính theo mức lãi suất gửi tiết kiệm không kỳ hạn của ngân hàng thương mại)

> **Đáp án đúng:** **A** — *50% (Được tính bằng công thức chuẩn: Tổng lợi ích ròng chia cho Tổng chi phí đầu tư ban đầu)*
>
> **Giải thích chi tiết:** ROI = (Tổng lợi ích ròng / Tổng chi phí đầu tư) = 100 triệu / 200 triệu = 0.5 = 50%. Đây là chỉ số chuẩn trong đánh giá hiệu quả tài chính của dự án.

---

#### Câu 29 (ad-c2-d2-029) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Cổng kiểm soát dự án (Stage Gate / Project Gate) ở cuối giai đoạn Initiation có thể đưa ra các quyết định nào?**

- **A.** Go (Cho phép triển khai), No-Go (Hủy bỏ dự án) hoặc Hold/Rework (Yêu cầu rà soát bổ sung)
- **B.** Bắt buộc phải sa thải toàn bộ nhân viên tham gia nghiên cứu tính khả thi của dự án đó
- **C.** Tự động chuyển toàn bộ mã nguồn của phần mềm lên các kho lưu trữ trực tuyến công cộng
- **D.** Chỉ được phép chọn quyết định Go và cấm tuyệt đối việc dừng hay trì hoãn dự án lại

> **Đáp án đúng:** **A** — *Go (Cho phép triển khai), No-Go (Hủy bỏ dự án) hoặc Hold/Rework (Yêu cầu rà soát bổ sung)*
>
> **Giải thích chi tiết:** Project Gatekeeper đưa ra một trong 3 quyết định: Go (tiến hành pha kế tiếp), No-Go (chấm dứt dự án để bảo toàn vốn), hoặc Hold/Rework (tạm hoãn để làm rõ thêm thông tin).

---

#### Câu 30 (ad-c2-d2-030) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Ký hiệu trực quan biểu diễn Nút Kết thúc hoạt động (Activity Final Node) trong sơ đồ Activity Diagram của UML là:**

- **A.** Vòng tròn viền ngoài bao quanh một điểm đen đặc ở giữa (Bull's eye)
- **B.** Hình quả trám màu xanh lá cây có chứa dấu cộng màu trắng ở bên trong
- **C.** Hình vuông góc cạnh có viền đứt đoạn kèm dấu gạch chéo màu đỏ thắm
- **D.** Mũi tên hai chiều hướng thẳng đứng về phía góc trái trên cùng trang

> **Đáp án đúng:** **A** — *Vòng tròn viền ngoài bao quanh một điểm đen đặc ở giữa (Bull's eye)*
>
> **Giải thích chi tiết:** Activity Final Node (Nút kết thúc hoạt động) được biểu diễn bằng biểu tượng mắt bò (Bull's eye) — một vòng tròn bên ngoài bao quanh một điểm tròn đen đặc bên trong.

---

#### Câu 31 (ad-c2-d2-031) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Thanh đồng bộ kết hợp (Join Node) trong Activity Diagram hoạt động theo nguyên tắc logic nào sau đây?**

- **A.** Chỉ cho phép luồng công việc tiếp tục khi TẤT CẢ các luồng đầu vào đồng thời đã hoàn thành
- **B.** Chỉ cần duy nhất một luồng đầu vào bất kỳ hoàn thành là cho phép luồng tiếp theo chạy ngay
- **C.** Tự động hủy bỏ toàn bộ các luồng công việc nếu có một luồng thực hiện quá ba mươi giây
- **D.** Chuyển tiếp ngẫu nhiên một trong các luồng vào và xóa vĩnh viễn các luồng công việc còn lại

> **Đáp án đúng:** **A** — *Chỉ cho phép luồng công việc tiếp tục khi TẤT CẢ các luồng đầu vào đồng thời đã hoàn thành*
>
> **Giải thích chi tiết:** Join Node (Hội tụ đồng bộ) nhận nhiều luồng chạy song song và đóng vai trò điểm đồng bộ: nó bắt buộc phải đợi tất cả các luồng vào hoàn thành xong mới kích hoạt luồng ra.

---

#### Câu 32 (ad-c2-d2-032) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Điều kiện rẽ nhánh (Guard Condition) gắn trên các nhánh thoát của Nút Quyết định trong Activity Diagram được viết trong cặp dấu nào?**

- **A.** Cặp dấu ngoặc vuông '[ ]' (Ví dụ: [Số dư tài khoản >= Số tiền rút] hoặc [Không đủ tiền])
- **B.** Cặp dấu ngoặc nhọn '{ }' kèm theo các dòng lệnh lập trình chi tiết của ngôn ngữ Java
- **C.** Cặp dấu ngoặc đơn '( )' kèm theo dấu hỏi chấm lớn để biểu thị sự nghi ngờ của hệ thống
- **D.** Cặp dấu gạch chéo '/ /' kèm theo tên của người kỹ sư phân tích vẽ ra biểu đồ đó

> **Đáp án đúng:** **A** — *Cặp dấu ngoặc vuông '[ ]' (Ví dụ: [Số dư tài khoản >= Số tiền rút] hoặc [Không đủ tiền])*
>
> **Giải thích chi tiết:** Trong UML, Guard Condition (Điều kiện canh gác) luôn luôn được đặt bên trong cặp dấu ngoặc vuông `[ ]`. Nhánh tương ứng chỉ được kích hoạt nếu điều kiện bên trong đúng (True).

---

#### Câu 33 (ad-c2-d2-033) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về Biểu đồ Hoạt động (Activity Diagram) trong kỹ nghệ yêu cầu?**

- **A.** Activity Diagram là công cụ chính yếu dùng để thiết kế lược đồ quan hệ và khóa ngoại cơ sở dữ liệu
- **B.** Activity Diagram rất hữu hiệu trong việc mô hình hóa các quy trình nghiệp vụ phức tạp đa luồng
- **C.** Activity Diagram cho phép thể hiện rõ ràng các điều kiện rẽ nhánh và các luồng thực thi song song
- **D.** Activity Diagram kết hợp làn bơi (Swimlanes) giúp làm rõ trách nhiệm của từng phòng ban liên quan

> **Đáp án đúng:** **A** — *Activity Diagram là công cụ chính yếu dùng để thiết kế lược đồ quan hệ và khóa ngoại cơ sở dữ liệu*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì thiết kế lược đồ quan hệ và khóa ngoại là vai trò của Biểu đồ Lớp (Class Diagram) hoặc Mô hình ERD, tuyệt đối không phải của Activity Diagram.

---

#### Câu 34 (ad-c2-d2-034) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Điểm phân biệt bản chất nhất giữa Business Use Case Diagram và System Use Case Diagram là gì?**

- **A.** Business Use Case mô tả quy trình kinh doanh tổng thể; System Use Case mô tả ranh giới phần mềm
- **B.** Business Use Case chỉ dùng cho ngân hàng; còn System Use Case chỉ dùng cho bệnh viện tư nhân
- **C.** Business Use Case không bao giờ có Actor; còn System Use Case bắt buộc phải có mười Actor
- **D.** Business Use Case do lập trình viên vẽ; còn System Use Case do giám đốc kinh doanh trực tiếp vẽ

> **Đáp án đúng:** **A** — *Business Use Case mô tả quy trình kinh doanh tổng thể; System Use Case mô tả ranh giới phần mềm*
>
> **Giải thích chi tiết:** Business Use Case Diagram mô hình hóa hoạt động kinh doanh của toàn bộ doanh nghiệp (bất kể có IT hay không); còn System Use Case Diagram chỉ mô hình hóa ranh giới và chức năng của phần mềm cụ thể.

---

#### Câu 35 (ad-c2-d2-035) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Khi mô hình hóa quy trình duyệt hồ sơ vay tín dụng qua 3 phòng ban (Kinh doanh, Thẩm định, Ban giám đốc), kỹ thuật nào tối ưu nhất?**

- **A.** Sử dụng Activity Diagram có chia 3 làn bơi (Swimlanes) tương ứng với từng phòng ban
- **B.** Vẽ 3 biểu đồ hình tròn độc lập và không có bất kỳ đường dây kết nối luồng nào giữa chúng
- **C.** Chỉ mô tả quy trình của phòng Kinh doanh và bỏ qua hoàn toàn hai phòng ban chức năng còn lại
- **D.** Viết mã nguồn Java trực tiếp vào biên bản cuộc họp mà không cần vẽ bất kỳ biểu đồ nào

> **Đáp án đúng:** **A** — *Sử dụng Activity Diagram có chia 3 làn bơi (Swimlanes) tương ứng với từng phòng ban*
>
> **Giải thích chi tiết:** Khi quy trình trải dài qua nhiều bộ phận, Swimlanes (Làn bơi) trong Activity Diagram là kỹ thuật trực quan hoàn hảo nhất để thể hiện sự bàn giao công việc và trách nhiệm qua từng khâu.

---

#### Câu 36 (ad-c2-d2-036) — [🔴 KHÓ (VẬN DỤNG CAO)] [SINGLE-CORRECT]

**Trong Activity Diagram, khi muốn biểu diễn một thực thể thông tin được truyền giữa hai hành động, người ta dùng:**

- **A.** Luồng đối tượng (Object Flow) kết nối tới Nút đối tượng (Object Node hình chữ nhật)
- **B.** Một vòng lặp vô tận (Infinite loop) với hai mũi tên đâm ngược chiều nhau liên tục
- **C.** Biểu tượng chiếc chìa khóa vàng để biểu thị dữ liệu đó đã được mã hóa an toàn tuyệt đối
- **D.** Một đám mây hình elip màu xanh da trời có chứa địa chỉ email của người gửi thông tin

> **Đáp án đúng:** **A** — *Luồng đối tượng (Object Flow) kết nối tới Nút đối tượng (Object Node hình chữ nhật)*
>
> **Giải thích chi tiết:** Trong UML Activity Diagram, Object Node (hình chữ nhật) và Object Flow (mũi tên nét đứt hoặc liền có mang đối tượng) được sử dụng để thể hiện dữ liệu/tài liệu được tạo ra và tiêu thụ giữa các hành động.

---

#### Câu 37 (ad-c2-d2-037) — [🔴 KHÓ (VẬN DỤNG CAO)] [OUTSIDE] [SINGLE-CORRECT]

**[Outside] Trong các chiến lược chuyển đổi hệ thống, chiến lược 'Chuyển đổi Song song' (Parallel Conversion) có ưu điểm vượt trội là gì?**

- **A.** Độ an toàn cao nhất vì luôn có hệ thống cũ hoạt động làm chỗ dựa dự phòng nếu hệ thống mới lỗi
- **B.** Chi phí triển khai rẻ nhất vì nhân viên chỉ cần làm việc một nửa thời gian so với ngày thường
- **C.** Thời gian triển khai ngắn nhất và không bao giờ đòi hỏi phải nhập dữ liệu kiểm toán đối chiếu
- **D.** Loại bỏ hoàn toàn sự cần thiết phải kiểm thử phần mềm trước khi đưa vào môi trường thực tế

> **Đáp án đúng:** **A** — *Độ an toàn cao nhất vì luôn có hệ thống cũ hoạt động làm chỗ dựa dự phòng nếu hệ thống mới lỗi*
>
> **Giải thích chi tiết:** [Outside] Parallel Conversion chạy song song cả 2 hệ thống trong một thời gian. Ưu điểm là an toàn nhất (Safe fallback), nhưng nhược điểm là chi phí đắt đỏ và nhân viên phải nhập liệu gấp đôi.

---

#### Câu 38 (ad-c2-d2-038) — [🔴 KHÓ (VẬN DỤNG CAO)] [OUTSIDE] [CASE-STUDY]

**[Outside] Doanh nghiệp có 200 cửa hàng tiện lợi toàn quốc. Chiến lược chuyển đổi hệ thống nào giúp thăm dò rủi ro an toàn nhất?**

- **A.** Chiến lược Chuyển đổi Thí điểm (Pilot Conversion — thử nghiệm hoàn chỉnh tại 2-3 cửa hàng trước)
- **B.** Chiến lược Chuyển đổi Trực tiếp (Direct Conversion — đồng loạt bật hệ thống mới trên cả 200 cửa hàng)
- **C.** Cắt bỏ toàn bộ hệ thống bán hàng cũ và cho phép nhân viên bán hàng ghi sổ tay trong một năm
- **D.** Đóng cửa toàn bộ 200 cửa hàng trong ba tháng để lập trình viên cài đặt phần mềm từng máy một

> **Đáp án đúng:** **A** — *Chiến lược Chuyển đổi Thí điểm (Pilot Conversion — thử nghiệm hoàn chỉnh tại 2-3 cửa hàng trước)*
>
> **Giải thích chi tiết:** [Outside] Pilot Conversion chọn một địa điểm đại diện (Pilot site) để vận hành thử toàn bộ hệ thống, xử lý triệt để các phát sinh thực tế trước khi nhân rộng trên toàn quốc.

---

#### Câu 39 (ad-c2-d2-039) — [🔴 KHÓ (VẬN DỤNG CAO)] [OUTSIDE] [SINGLE-CORRECT]

**[Outside] Một đề án phần mềm có chi phí đầu tư 500 triệu đồng và dự kiến mang lại lợi ích tài chính 800 triệu đồng. Tỷ suất hoàn vốn ROI là:**

- **A.** 60% (Được tính bằng công thức: Lợi nhuận ròng 300 triệu chia cho Tổng chi phí đầu tư 500 triệu)
- **B.** 160% (Được tính bằng cách lấy tổng lợi ích chia đôi rồi nhân với số lượng kỹ sư của dự án)
- **C.** 30% (Được tính bằng cách lấy tổng chi phí chia cho thời gian khấu hao máy chủ năm năm)
- **D.** 25% (Được tính theo tỷ lệ lạm phát bình quân của nền kinh tế trong chu kỳ ba năm gần nhất)

> **Đáp án đúng:** **A** — *60% (Được tính bằng công thức: Lợi nhuận ròng 300 triệu chia cho Tổng chi phí đầu tư 500 triệu)*
>
> **Giải thích chi tiết:** [Outside] Lợi nhuận ròng = 800 triệu - 500 triệu = 300 triệu. ROI = 300 triệu / 500 triệu = 60%. Đây là bài toán tài chính cơ bản trong phân tích khả thi kinh tế dự án phần mềm.

---

#### Câu 40 (ad-c2-d2-040) — [🔴 KHÓ (VẬN DỤNG CAO)] [OUTSIDE] [CASE-STUDY]

**[Outside] Tình huống: Khi hai công ty bảo hiểm sáp nhập, hệ thống phần mềm mới bị nhân viên phản đối dữ dội vì làm thay đổi thói quen. BA nên làm gì?**

- **A.** Lập kế hoạch Quản trị Thay đổi (Change Management), đào tạo đồng hành và giải thích lợi ích rõ ràng
- **B.** Gửi thông báo đe dọa sa thải toàn bộ các nhân viên có ý kiến thắc mắc về phần mềm mới
- **C.** Lập tức gỡ bỏ hệ thống mới và quay lại hoàn toàn quy trình xử lý giấy tờ thủ công như trước
- **D.** Khuyên ban giám đốc không cần quan tâm đến nhân viên vì phần mềm đã mua rồi thì phải dùng

> **Đáp án đúng:** **A** — *Lập kế hoạch Quản trị Thay đổi (Change Management), đào tạo đồng hành và giải thích lợi ích rõ ràng*
>
> **Giải thích chi tiết:** [Outside] Thất bại do rào cản văn hóa và tâm lý người dùng thuộc về Khả thi Vận hành (Organizational Feasibility). Giải pháp chuẩn của BA là triển khai Quản trị Thay đổi (Change Management), lắng nghe, đào tạo và truyền thông rõ giá trị.

---

