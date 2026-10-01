# TỔNG HỢP 2 BỘ ĐỀ THI TRẮC NGHIỆM CHƯƠNG III: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU
*(Tổng cộng 80 câu hỏi học thuật chuẩn mực — Cơ cấu: 30% Dễ - 40% Trung bình - 30% Khó)*

- **Môn học:** Phân tích thiết kế và yêu cầu (Requirements Analysis and Design)
- **Chương:** Chapter 3: Initiation Phase — From Business Events to a System Use Case Model
- **Quy mô:** 2 Bộ đề độc lập (Đề 1 & Đề 2), mỗi đề đúng 40 câu hỏi cố định (Tổng = 80 câu biên soạn mới 100%, 0% trùng lặp)
- **Tỷ lệ độ khó:** 12 Dễ (30%) — 16 Trung bình (40%) — 12 Khó (30%) cho từng đề
- **Tỷ lệ nguồn:** 36 câu Inside (giáo trình ad-ch3.js) + 4 câu Outside (thực tế dự án Use Case & Thiết kế hệ thống)
- **Quy chuẩn kỹ thuật:** Đáp ứng độ lệch chiều dài phương án $\Delta L = L_{\max} - L_{\min} \le 15$ ký tự trên toàn bộ 80 câu
- **Đa dạng hình thức:** Trắc nghiệm chọn đúng, Chọn sai/ngoại lệ (**KHÔNG/SAI**), Tình huống thực tế (Case study), Ghép cặp phân loại (Matching), Điền khuyết/Trình tự logic (Fill-in)

---

## BỘ ĐỀ THI SỐ 1 (MÃ ĐỀ: ad-c3-d1)

*Bộ đề số 1 tập trung khảo sát cột mốc LCO của Initiation Phase, định nghĩa Use Case theo Ivar Jacobson, kỹ thuật phân rã sự kiện (Event Decomposition: External, Temporal, State), bảng phân tích sự kiện (Event Table), nhận diện Actor/Use Case, quan hệ <<include>> vs <<extend>>, cấu trúc Use Case Description và các sai lầm kinh điển (Functional Decomposition, CRUD trap).*

---

#### Câu 1 (ad-c3-d1-001) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Giai đoạn Khởi động dự án (Initiation / Inception Phase) trong Unified Process kết thúc bằng cột mốc nào?**

- **A.** Cột mốc Mục tiêu vòng đời dự án (Lifecycle Objective Milestone - LCO)
- **B.** Cột mốc Kiến trúc vòng đời hoàn chỉnh (Lifecycle Architecture Milestone)
- **C.** Cột mốc Khả năng vận hành ban đầu (Initial Operational Capability Milestone)
- **D.** Cột mốc Phát hành sản phẩm thương mại chính thức (Product Release Milestone)

> **Đáp án đúng:** **A** — *Cột mốc Mục tiêu vòng đời dự án (Lifecycle Objective Milestone - LCO)*
>
> **Giải thích chi tiết:** Trong Unified Process (UP), pha Initiation (Inception) kết thúc bằng cột mốc LCO (Lifecycle Objective Milestone), xác nhận phạm vi sơ bộ và tính khả thi kinh doanh của dự án.

---

#### Câu 2 (ad-c3-d1-002) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Theo định nghĩa chuẩn mực của Ivar Jacobson, bản chất cốt lõi của một Use Case (Ca sử dụng) là gì?**

- **A.** Một chuỗi các hành động mang lại một kết quả giá trị có thể quan sát được cho Actor
- **B.** Một bảng cơ sở dữ liệu quan hệ dùng để lưu trữ các bản ghi thông tin của người dùng
- **C.** Một đoạn mã lập trình hàm xử lý thuật toán phức tạp trên máy chủ đám mây nội bộ
- **D.** Một biểu đồ mạng máy tính hiển thị cách thức kết nối dây cáp và trạm phát sóng wifi

> **Đáp án đúng:** **A** — *Một chuỗi các hành động mang lại một kết quả giá trị có thể quan sát được cho Actor*
>
> **Giải thích chi tiết:** Ivar Jacobson định nghĩa Use Case là một tập hợp các chuỗi hành động mà hệ thống thực hiện nhằm mang lại một kết quả có giá trị quan sát được (Observable result of value) cho một Actor cụ thể.

---

#### Câu 3 (ad-c3-d1-003) — [🟢 DỄ (NHẬN BIẾT)] [FILL-BLANK]

**Bốn thành phần ký hiệu trực quan cơ bản cấu thành một Biểu đồ Use Case Diagram trong UML bao gồm:**

- **A.** Actor (Hình người), Use Case (Hình elip), Association (Đường nối) và System Boundary
- **B.** Class (Hình chữ nhật 3 ngăn), Interface (Hình tròn), Package (Thư mục) và Dependency
- **C.** Initial Node (Hình tròn đen), Final Node (Mắt bò), Decision (Quả trám) và Swimlane
- **D.** Database Table (Bảng), Primary Key (Khóa chính), Foreign Key (Khóa ngoại) và Trigger

> **Đáp án đúng:** **A** — *Actor (Hình người), Use Case (Hình elip), Association (Đường nối) và System Boundary*
>
> **Giải thích chi tiết:** Use Case Diagram gồm 4 thành phần nền tảng: Actor (Tác nhân), Use Case (Ca sử dụng), Association (Đường liên kết tương tác) và System Boundary (Ranh giới hệ thống dạng khung chữ nhật).

---

#### Câu 4 (ad-c3-d1-004) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về bản chất và mục đích của mô hình Use Case?**

- **A.** Mô hình Use Case tập trung thiết kế cấu trúc lưu trữ vật lý của các bảng cơ sở dữ liệu
- **B.** Mô hình Use Case mô tả chức năng của hệ thống dưới góc nhìn hướng người dùng bên ngoài
- **C.** Mô hình Use Case giúp phân định rõ ràng phạm vi bên trong và bên ngoài ranh giới hệ thống
- **D.** Mô hình Use Case đóng vai trò nền tảng để lập kế hoạch kiểm thử và viết tài liệu hướng dẫn

> **Đáp án đúng:** **A** — *Mô hình Use Case tập trung thiết kế cấu trúc lưu trữ vật lý của các bảng cơ sở dữ liệu*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì mô hình Use Case là mô hình chức năng hành vi mức logic hướng người dùng, không bao giờ dùng để thiết kế cấu trúc vật lý của cơ sở dữ liệu.

---

#### Câu 5 (ad-c3-d1-005) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Trong 6 hoạt động chính của giai đoạn Initiation, hoạt động nào đóng vai trò xác định tính khả thi dự án?**

- **A.** Tiến hành nghiên cứu và đánh giá tính khả thi dự án trên 3 phương diện (Feasibility Study)
- **B.** Lập trình hoàn tất 100% các chức năng cốt lõi và kiểm thử tải trọng máy chủ ở mức cực hạn
- **C.** Cài đặt hệ điều hành và phân chia ổ đĩa cứng cho tất cả các máy trạm tại các chi nhánh
- **D.** Thiết kế chi tiết giao diện đồ họa cho từng nút bấm của ứng dụng trên điện thoại di động

> **Đáp án đúng:** **A** — *Tiến hành nghiên cứu và đánh giá tính khả thi dự án trên 3 phương diện (Feasibility Study)*
>
> **Giải thích chi tiết:** Nghiên cứu tính khả thi (Feasibility Study) đánh giá 3 phương diện: Kinh tế (Economic), Kỹ thuật (Technical) và Vận hành (Organizational) là hoạt động then chốt của Initiation.

---

#### Câu 6 (ad-c3-d1-006) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Khi phân tích 'Hệ thống Đăng ký môn học', đối tượng nào nằm BÊN NGOÀI ranh giới System Boundary?**

- **A.** Sinh viên đăng ký môn học và Giảng viên nhập điểm (Được mô hình hóa là các Actor bên ngoài)
- **B.** Ca sử dụng Đăng ký môn học và Ca sử dụng Xem điểm thi (Được vẽ bên trong ranh giới hộp)
- **C.** Ca sử dụng Thanh toán học phí trực tuyến (Được vẽ bên trong khung ranh giới của hệ thống)
- **D.** Cơ sở dữ liệu nội bộ chứa danh sách lớp học mở trong học kỳ đang diễn ra của nhà trường

> **Đáp án đúng:** **A** — *Sinh viên đăng ký môn học và Giảng viên nhập điểm (Được mô hình hóa là các Actor bên ngoài)*
>
> **Giải thích chi tiết:** Sinh viên và Giảng viên là các Actor (người dùng bên ngoài), bắt buộc phải nằm ngoài khung chữ nhật System Boundary. Các Use Case nằm bên trong ranh giới hệ thống.

---

#### Câu 7 (ad-c3-d1-007) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Kỹ thuật 'Phân rã sự kiện' (Event Decomposition Technique) trong kỹ nghệ yêu cầu là gì?**

- **A.** Phương pháp tiếp cận dựa vào các sự kiện nghiệp vụ để xác định các Use Case của hệ thống
- **B.** Kỹ thuật kiểm tra dung lượng RAM của máy chủ khi có hàng triệu người dùng truy cập web
- **C.** Quy trình xóa sạch các bản ghi nhật ký sự cố phần mềm sau khi đã hoàn tất bảo trì định kỳ
- **D.** Phương pháp chia nhỏ mã nguồn chương trình thành các hàm ngôn ngữ máy vi xử lý nhị phân

> **Đáp án đúng:** **A** — *Phương pháp tiếp cận dựa vào các sự kiện nghiệp vụ để xác định các Use Case của hệ thống*
>
> **Giải thích chi tiết:** Event Decomposition là kỹ thuật tiêu chuẩn giúp BA phân tích các sự kiện nghiệp vụ diễn ra trong môi trường thực tế, từ đó suy diễn ra danh sách các Use Case tương ứng của hệ thống.

---

#### Câu 8 (ad-c3-d1-008) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Sự kiện bên ngoài (External Event) trong phân loại sự kiện nghiệp vụ có đặc điểm nào sau đây?**

- **A.** Xảy ra trong môi trường bên ngoài và do một tác nhân (Actor) bên ngoài trực tiếp kích hoạt
- **B.** Tự động kích hoạt khi đồng hồ hệ thống điểm đúng 0 giờ đêm ngày cuối cùng của quý tài chính
- **C.** Kích hoạt khi dung lượng ổ đĩa cứng của máy chủ lưu trữ dữ liệu bị đầy vượt mức cho phép
- **D.** Chỉ xảy ra khi toàn bộ hệ thống mạng Internet của doanh nghiệp bị ngắt kết nối vật lý

> **Đáp án đúng:** **A** — *Xảy ra trong môi trường bên ngoài và do một tác nhân (Actor) bên ngoài trực tiếp kích hoạt*
>
> **Giải thích chi tiết:** External Event (Sự kiện bên ngoài) là sự kiện xảy ra ngoài môi trường hệ thống và do Actor bên ngoài (như Khách hàng đặt mua, Sinh viên nộp đơn) kích hoạt và gửi tín hiệu vào hệ thống.

---

#### Câu 9 (ad-c3-d1-009) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Sự kiện thời gian (Temporal Event) trong hệ thống thông tin được nhận diện bằng dấu hiệu nào?**

- **A.** Xảy ra tự động theo các mốc thời gian định kỳ hoặc thời hạn xác định trước mà không cần Actor
- **B.** Do người dùng nhấp chuột trực tiếp vào biểu tượng chiếc đồng hồ trên màn hình điện thoại
- **C.** Do lập trình viên cài đặt lại ngày giờ của máy tính cá nhân khi đi công tác qua nước ngoài
- **D.** Chỉ kích hoạt khi pin của máy tính xách tay bị cạn kiệt và chuyển sang chế độ ngủ đông

> **Đáp án đúng:** **A** — *Xảy ra tự động theo các mốc thời gian định kỳ hoặc thời hạn xác định trước mà không cần Actor*
>
> **Giải thích chi tiết:** Temporal Event (Sự kiện thời gian) kích hoạt dựa trên thời gian trôi qua hoặc một mốc lịch trình định trước (như hàng tuần, cuối tháng, hết hạn hợp đồng) mà không do Actor khởi phát trực tiếp.

---

#### Câu 10 (ad-c3-d1-010) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Sự kiện trạng thái (State Event) diễn ra khi hệ thống ghi nhận điều kiện nào sau đây?**

- **A.** Một điều kiện hoặc trạng thái bên trong hệ thống thay đổi vượt qua một ngưỡng quy định trước
- **B.** Một khách hàng mới bước vào quầy giao dịch để mở sổ tiết kiệm không kỳ hạn bằng tiền mặt
- **C.** Thời điểm nửa đêm ngày chủ nhật hàng tuần khi các máy chủ bắt đầu tiến hành sao lưu dữ liệu
- **D.** Khi toàn bộ nhân viên trong công ty kết thúc giờ làm việc buổi chiều và tắt máy tính ra về

> **Đáp án đúng:** **A** — *Một điều kiện hoặc trạng thái bên trong hệ thống thay đổi vượt qua một ngưỡng quy định trước*
>
> **Giải thích chi tiết:** State Event (Sự kiện trạng thái / Internal Event) xảy ra khi trạng thái nội bộ của dữ liệu trong hệ thống thay đổi đạt tới một ngưỡng hoặc điều kiện logic (như số dư < 0, tồn kho < min).

---

#### Câu 11 (ad-c3-d1-011) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về 3 loại Business Events trong kỹ nghệ phân tích?**

- **A.** Mọi Business Event bắt buộc phải do người dùng con người trực tiếp ngồi trước máy tính gõ lệnh
- **B.** External Event luôn có nguồn gốc phát sinh từ các Actor nằm bên ngoài ranh giới hệ thống
- **C.** Temporal Event không có Actor chủ động kích hoạt mà dựa trên sự trôi qua của thời gian
- **D.** State Event được kích hoạt dựa trên sự thay đổi trạng thái dữ liệu nội tại của hệ thống

> **Đáp án đúng:** **A** — *Mọi Business Event bắt buộc phải do người dùng con người trực tiếp ngồi trước máy tính gõ lệnh*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì chỉ có External Event do Actor khởi phát; Temporal Event do thời gian kích hoạt, còn State Event do điều kiện trạng thái nội bộ kích hoạt tự động.

---

#### Câu 12 (ad-c3-d1-012) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Bảng phân tích sự kiện (Event Table) tiêu chuẩn thường bao gồm 6 cột thông tin cốt lõi nào sau đây?**

- **A.** Event, Trigger, Source, Use Case, Response và Destination (Bảng 6 cột chuẩn của Satzinger)
- **B.** Class Name, Attributes, Operations, Visibility, Stereotype và Multiplicity (Chuẩn hướng đối tượng)
- **C.** Database Name, Table Name, Column Name, Data Type, Nullable và Default Value (Chuẩn CSDL)
- **D.** Project Name, Budget, Schedule, Team Members, Milestones và Deliverables (Chuẩn quản trị)

> **Đáp án đúng:** **A** — *Event, Trigger, Source, Use Case, Response và Destination (Bảng 6 cột chuẩn của Satzinger)*
>
> **Giải thích chi tiết:** Event Table chuẩn gồm 6 cột: Event (Sự kiện), Trigger (Tác nhân kích hoạt), Source (Nguồn), Use Case (Ca sử dụng), Response (Phản hồi đầu ra) và Destination (Nơi nhận phản hồi).

---

#### Câu 13 (ad-c3-d1-013) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: 'Vào ngày 1 hàng tháng, hệ thống tự động gửi hóa đơn tiền điện tới email khách hàng'. Đây là loại sự kiện gì?**

- **A.** Temporal Event (Sự kiện thời gian kích hoạt theo lịch biểu chu kỳ ngày đầu tiên của tháng)
- **B.** External Event (Sự kiện bên ngoài do nhân viên ngành điện lực nhấp chuột gửi từng email)
- **C.** State Event (Sự kiện trạng thái do hòm thư email của khách hàng đã bị quá tải dung lượng)
- **D.** System Error (Lỗi hệ thống do đồng hồ máy tính chạy nhanh hơn thời gian thực tế hai ngày)

> **Đáp án đúng:** **A** — *Temporal Event (Sự kiện thời gian kích hoạt theo lịch biểu chu kỳ ngày đầu tiên của tháng)*
>
> **Giải thích chi tiết:** Hành động gửi hóa đơn tự động lặp lại theo mốc thời gian cố định (ngày 1 hàng tháng) là một Temporal Event (Sự kiện thời gian) kinh điển.

---

#### Câu 14 (ad-c3-d1-014) — [🔴 KHÓ (VẬN DỤNG CAO)] [MATCHING]

**Hãy chọn phương án ghép cặp ĐÚNG NHẤT giữa sự kiện nghiệp vụ và phân loại kỹ thuật của nó:**

- **A.** Khách gửi đơn hàng ➔ External; Đến hạn trả nợ ➔ Temporal; Lượng hàng chạm đáy ➔ State
- **B.** Khách gửi đơn hàng ➔ Temporal; Đến hạn trả nợ ➔ External; Lượng hàng chạm đáy ➔ State
- **C.** Khách gửi đơn hàng ➔ State; Đến hạn trả nợ ➔ Temporal; Lượng hàng chạm đáy ➔ External
- **D.** Khách gửi đơn hàng ➔ External; Đến hạn trả nợ ➔ State; Lượng hàng chạm đáy ➔ Temporal

> **Đáp án đúng:** **A** — *Khách gửi đơn hàng ➔ External; Đến hạn trả nợ ➔ Temporal; Lượng hàng chạm đáy ➔ State*
>
> **Giải thích chi tiết:** Khách gửi đơn: External (Actor kích hoạt); Đến hạn thanh toán: Temporal (Thời gian kích hoạt); Lượng hàng dưới mức an toàn: State (Trạng thái dữ liệu nội bộ chạm ngưỡng kích hoạt).

---

#### Câu 15 (ad-c3-d1-015) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong chuẩn UML, một 'Actor' (Tác nhân) được định nghĩa chuẩn xác là đối tượng nào?**

- **A.** Một vai trò (Role) bên ngoài hệ thống trực tiếp tương tác và trao đổi thông tin với hệ thống
- **B.** Một lập trình viên trực tiếp viết mã nguồn các chức năng của phần mềm trong phòng dự án
- **C.** Một máy chủ mạng đặt trong phòng máy trung tâm làm nhiệm vụ lưu trữ các tệp cơ sở dữ liệu
- **D.** Một bảng dữ liệu quan hệ chứa danh sách tài khoản và mật khẩu đã được mã hóa an toàn

> **Đáp án đúng:** **A** — *Một vai trò (Role) bên ngoài hệ thống trực tiếp tương tác và trao đổi thông tin với hệ thống*
>
> **Giải thích chi tiết:** Actor trong UML là một thực thể hoặc vai trò (Role) nằm ngoài ranh giới hệ thống, tương tác với hệ thống bằng cách gửi dữ liệu vào hoặc nhận thông tin từ hệ thống.

---

#### Câu 16 (ad-c3-d1-016) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Loại Actor nào sau đây trực tiếp kích hoạt Use Case nhằm hoàn thành mục tiêu công việc của chính mình?**

- **A.** Primary Actor (Tác nhân chính / Tác nhân khởi xướng trực tiếp nhận giá trị từ Use Case)
- **B.** Supporting Actor (Tác nhân hỗ trợ cung cấp dịch vụ xác thực thông tin cho hệ thống)
- **C.** Offstage Actor (Tác nhân hậu trường quan tâm đến kết quả báo cáo nhưng không thao tác)
- **D.** Internal Actor (Tác nhân nội bộ là một con chip vi xử lý gắn trên bo mạch chủ của máy chủ)

> **Đáp án đúng:** **A** — *Primary Actor (Tác nhân chính / Tác nhân khởi xướng trực tiếp nhận giá trị từ Use Case)*
>
> **Giải thích chi tiết:** Primary Actor (Tác nhân chính) là đối tượng chủ động khởi xướng và tương tác với hệ thống nhằm đạt được một mục tiêu cụ thể mang lại giá trị cho bản thân họ.

---

#### Câu 17 (ad-c3-d1-017) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Một hệ thống thanh toán trực tuyến bên ngoài (như Cổng VNPay) hỗ trợ kiểm tra thẻ tín dụng được xếp vào loại Actor nào?**

- **A.** Supporting Actor (Tác nhân hỗ trợ / Secondary Actor cung cấp dịch vụ hạ tầng cho Use Case)
- **B.** Primary Actor (Tác nhân chính khởi xướng toàn bộ phiên giao dịch mua sắm hàng hóa)
- **C.** Offstage Actor (Tác nhân hậu trường hoàn toàn không có bất kỳ kết nối mạng nào tới hệ thống)
- **D.** Internal Actor (Tác nhân nội bộ được lập trình bằng ngôn ngữ Assembly bên trong hệ thống)

> **Đáp án đúng:** **A** — *Supporting Actor (Tác nhân hỗ trợ / Secondary Actor cung cấp dịch vụ hạ tầng cho Use Case)*
>
> **Giải thích chi tiết:** Hệ thống bên ngoài (External System) cung cấp dịch vụ hỗ trợ (như Cổng thanh toán, Dịch vụ gửi SMS OTP) để Use Case hoàn thành được gọi là Supporting / Secondary Actor.

---

#### Câu 18 (ad-c3-d1-018) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Cơ quan Thuế hoặc Ban Kiểm toán công ty không trực tiếp dùng phần mềm nhưng yêu cầu ghi vết dữ liệu được gọi là:**

- **A.** Offstage Actor (Tác nhân hậu trường / Stakeholder có quyền lợi nhưng không trực tiếp thao tác)
- **B.** Primary Actor (Tác nhân chính trực tiếp nhấp chuột tạo từng đơn hàng bán lẻ tại cửa hàng)
- **C.** Secondary Actor (Tác nhân thứ cấp cung cấp dịch vụ máy chủ sao lưu đám mây cho dự án)
- **D.** Hardware Actor (Tác nhân phần cứng là dây cáp mạng quang nối giữa các tòa nhà làm việc)

> **Đáp án đúng:** **A** — *Offstage Actor (Tác nhân hậu trường / Stakeholder có quyền lợi nhưng không trực tiếp thao tác)*
>
> **Giải thích chi tiết:** Offstage Actor (hay Stakeholder) là đối tượng có quyền lợi gắn liền với kết quả của Use Case (ví dụ: Cơ quan thuế cần hóa đơn chuẩn) nhưng không trực tiếp thao tác với hệ thống.

---

#### Câu 19 (ad-c3-d1-019) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi áp dụng các nguyên tắc nhận diện Actor trong dự án phần mềm?**

- **A.** Một Actor bắt buộc phải được vẽ nằm BÊN TRONG khung chữ nhật System Boundary của biểu đồ
- **B.** Actor đại diện cho vai trò (Role) mà người dùng đảm nhận, chứ không phải chức danh cụ thể
- **C.** Một cá nhân ngoài đời thực có thể đồng thời đóng nhiều vai trò Actor khác nhau trong hệ thống
- **D.** Một Actor có thể là một người dùng con người hoặc một hệ thống phần mềm/phần cứng bên ngoài

> **Đáp án đúng:** **A** — *Một Actor bắt buộc phải được vẽ nằm BÊN TRONG khung chữ nhật System Boundary của biểu đồ*
>
> **Giải thích chi tiết:** Khẳng định A SAI nghiêm trọng vì theo quy tắc UML, Actor luôn luôn nằm BÊN NGOÀI ranh giới hệ thống (System Boundary), đại diện cho môi trường bên ngoài tương tác vào.

---

#### Câu 20 (ad-c3-d1-020) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Trong hệ thống máy ATM, 'Khách hàng rút tiền' và 'Ngân hàng phát hành thẻ' lần lượt đóng vai trò là:**

- **A.** Khách hàng là Primary Actor; Ngân hàng phát hành thẻ là Supporting Actor hỗ trợ xác thực
- **B.** Khách hàng là Supporting Actor; Ngân hàng phát hành thẻ là Primary Actor khởi xướng giao dịch
- **C.** Cả hai đối tượng trên bắt buộc phải được mô hình hóa là Offstage Actor nằm ngoài biểu đồ
- **D.** Khách hàng là Actor bên ngoài; còn Ngân hàng phát hành thẻ là Use Case bên trong hệ thống

> **Đáp án đúng:** **A** — *Khách hàng là Primary Actor; Ngân hàng phát hành thẻ là Supporting Actor hỗ trợ xác thực*
>
> **Giải thích chi tiết:** Khách hàng là Primary Actor (người có mục tiêu rút tiền mặt). Ngân hàng phát hành thẻ là Supporting Actor (hệ thống bên ngoài cung cấp dịch vụ xác thực số dư và mật khẩu thẻ).

---

#### Câu 21 (ad-c3-d1-021) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Quy ước đặt tên chuẩn mực quốc tế cho một System Use Case trong kỹ nghệ yêu cầu là:**

- **A.** Bắt đầu bằng một Động từ hành động kết hợp với một Cụm danh từ (Ví dụ: Register for Course)
- **B.** Bắt đầu bằng một Danh từ số nhiều chỉ định danh các bảng cơ sở dữ liệu quan hệ (Ví dụ: Courses)
- **C.** Bắt đầu bằng một Tính từ mô tả cảm xúc và trải nghiệm người dùng (Ví dụ: Beautiful Interface)
- **D.** Sử dụng tên chức danh nghề nghiệp của người lập trình viên chính của dự án (Ví dụ: John Developer)

> **Đáp án đúng:** **A** — *Bắt đầu bằng một Động từ hành động kết hợp với một Cụm danh từ (Ví dụ: Register for Course)*
>
> **Giải thích chi tiết:** Use Case Naming Convention chuẩn là: `Verb + Noun Phrase` ở thể chủ động (Active voice), ví dụ: 'Register for Course', 'Withdraw Cash', 'Generate Monthly Report'.

---

#### Câu 22 (ad-c3-d1-022) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Bản chất của quan hệ <<include>> (Bao hàm) giữa hai Use Case trong UML được hiểu là:**

- **A.** Một quan hệ bắt buộc (Mandatory) dùng để tách và tái sử dụng một luồng chức năng dùng chung
- **B.** Một quan hệ tùy chọn (Optional) chỉ được kích hoạt khi có sự cố kỹ thuật hoặc lỗi ngoại lệ
- **C.** Một quan hệ kế thừa hướng đối tượng cho phép lớp con ghi đè các hàm lập trình của lớp cha
- **D.** Một quan hệ vật lý kết nối trực tiếp cổng mạng giữa máy chủ web và máy chủ cơ sở dữ liệu

> **Đáp án đúng:** **A** — *Một quan hệ bắt buộc (Mandatory) dùng để tách và tái sử dụng một luồng chức năng dùng chung*
>
> **Giải thích chi tiết:** Quan hệ `<<include>>` là quan hệ bắt buộc (Mandatory): Use Case gốc luôn luôn gọi và thực thi Use Case được bao hàm để hoàn thành nhiệm vụ, giúp tái sử dụng các bước chung.

---

#### Câu 23 (ad-c3-d1-023) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Hướng mũi tên nét đứt của quan hệ <<include>> trong biểu đồ Use Case Diagram được quy định như thế nào?**

- **A.** Mũi tên nét đứt có gắn nhãn <<include>> trỏ từ Base Use Case VỀ PHÍA Included Use Case
- **B.** Mũi tên nét đứt có gắn nhãn <<include>> trỏ từ Included Use Case NGƯỢC LẠI Base Use Case
- **C.** Mũi tên nét liền có hình tam giác rỗng trỏ từ Included Use Case sang Base Use Case
- **D.** Đường thẳng nằm ngang không có bất kỳ mũi tên định hướng nào ở hai đầu mút đoạn thẳng

> **Đáp án đúng:** **A** — *Mũi tên nét đứt có gắn nhãn <<include>> trỏ từ Base Use Case VỀ PHÍA Included Use Case*
>
> **Giải thích chi tiết:** Quy chuẩn UML: Mũi tên nét đứt `<<include>>` trỏ từ Base Use Case VỀ PHÍA Included Use Case (Base ➔ Included), thể hiện rằng Base phụ thuộc và gọi Use Case con.

---

#### Câu 24 (ad-c3-d1-024) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Bản chất của quan hệ <<extend>> (Mở rộng) giữa hai Use Case trong biểu đồ UML là gì?**

- **A.** Quan hệ mở rộng có điều kiện (Optional / Conditional) chỉ kích hoạt tại một điểm mở rộng cụ thể
- **B.** Quan hệ bắt buộc phải thực hiện 100% trong mọi tình huống giao dịch của người sử dụng
- **C.** Quan hệ xóa bỏ hoàn toàn Use Case gốc để thay thế bằng một Use Case khác tiên tiến hơn
- **D.** Quan hệ bảo mật ngăn cấm người dùng truy cập trái phép vào các bảng cơ sở dữ liệu nội bộ

> **Đáp án đúng:** **A** — *Quan hệ mở rộng có điều kiện (Optional / Conditional) chỉ kích hoạt tại một điểm mở rộng cụ thể*
>
> **Giải thích chi tiết:** Quan hệ `<<extend>>` là quan hệ có điều kiện (Conditional / Optional): Extension Use Case chỉ chèn hành vi bổ sung vào Base Use Case khi một điều kiện cụ thể (Extension Point) được thỏa mãn.

---

#### Câu 25 (ad-c3-d1-025) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Khái niệm 'Điểm mở rộng' (Extension Point) trong quan hệ <<extend>> có vai trò như thế nào?**

- **A.** Xác định vị trí chính xác bên trong luồng kịch bản của Base Use Case mà hành vi mở rộng sẽ chèn vào
- **B.** Xác định địa chỉ IP của máy chủ phụ trợ sẽ tiếp nhận lưu lượng mạng bị quá tải của hệ thống
- **C.** Xác định thời điểm hệ thống sẽ tự động đăng xuất tài khoản người dùng sau năm phút không dùng
- **D.** Xác định vị trí cắm thêm bộ nhớ RAM vật lý trên thanh vi mạch của máy chủ cơ sở dữ liệu

> **Đáp án đúng:** **A** — *Xác định vị trí chính xác bên trong luồng kịch bản của Base Use Case mà hành vi mở rộng sẽ chèn vào*
>
> **Giải thích chi tiết:** Extension Point (Điểm mở rộng) là một vị trí được định danh rõ ràng trong luồng thực thi của Base Use Case, nơi mà hành vi mở rộng của Extension Use Case có thể được chèn vào.

---

#### Câu 26 (ad-c3-d1-026) — [🔴 KHÓ (VẬN DỤNG CAO)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi so sánh giữa quan hệ <<include>> và quan hệ <<extend>>?**

- **A.** Trong quan hệ <<extend>>, Base Use Case bắt buộc phải biết rõ và phụ thuộc vào Extension Case
- **B.** Trong quan hệ <<include>>, Base Use Case bắt buộc phải thực thi luồng của Included Use Case
- **C.** Mũi tên của quan hệ <<extend>> trỏ từ Extension Use Case VỀ PHÍA Base Use Case của hệ thống
- **D.** Mũi tên của quan hệ <<include>> trỏ từ Base Use Case VỀ PHÍA Included Use Case của hệ thống

> **Đáp án đúng:** **A** — *Trong quan hệ <<extend>>, Base Use Case bắt buộc phải biết rõ và phụ thuộc vào Extension Case*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì trong `<<extend>>`, Base Use Case hoàn toàn ĐỘC LẬP và KHÔNG biết về sự tồn tại của Extension Case. Chính Extension Case mới biết và trỏ về Base Case.

---

#### Câu 27 (ad-c3-d1-027) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Quan hệ Kế thừa (Generalization) giữa các Use Case trong UML được biểu diễn trực quan bằng ký hiệu nào?**

- **A.** Đường nét liền có một đầu mũi tên hình tam giác rỗng trỏ từ Use Case con về Use Case cha
- **B.** Đường nét đứt có gắn nhãn chữ <<generalization>> trỏ từ Use Case cha sang Use Case con
- **C.** Đường cong hình sin uốn lượn có màu sắc sặc sỡ nối hai hình elip Use Case lại với nhau
- **D.** Một hình quả trám màu đen đặc nằm ở chính giữa đoạn thẳng kết nối hai hình elip lại

> **Đáp án đúng:** **A** — *Đường nét liền có một đầu mũi tên hình tam giác rỗng trỏ từ Use Case con về Use Case cha*
>
> **Giải thích chi tiết:** Quan hệ Generalization (Kế thừa / Chuyên biệt hóa) được biểu diễn bằng đường nét liền có mũi tên hình tam giác rỗng (Hollow triangle) trỏ từ con về cha (Child ➔ Parent).

---

#### Câu 28 (ad-c3-d1-028) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Khi đặt hàng, khách có thể chọn 'Áp dụng mã giảm giá voucher'. Mối quan hệ giữa 2 Use Case là:**

- **A.** Quan hệ <<extend>> vì việc áp dụng voucher là hành vi tùy chọn chỉ diễn ra khi khách có mã
- **B.** Quan hệ <<include>> vì mọi đơn đặt hàng bắt buộc 100% phải luôn có mã voucher giảm giá
- **C.** Quan hệ Generalization vì việc áp dụng voucher là một dạng đặc biệt của ngôn ngữ lập trình
- **D.** Hai Use Case này hoàn toàn không thể xuất hiện cùng nhau trong cùng một bản vẽ hệ thống

> **Đáp án đúng:** **A** — *Quan hệ <<extend>> vì việc áp dụng voucher là hành vi tùy chọn chỉ diễn ra khi khách có mã*
>
> **Giải thích chi tiết:** Áp dụng voucher là hành vi bổ sung mang tính điều kiện (chỉ thực hiện khi khách có mã và chọn dùng), do đó được mô hình hóa bằng quan hệ `<<extend>>` trỏ về Use Case 'Đặt hàng'.

---

#### Câu 29 (ad-c3-d1-029) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Biểu mẫu đặc tả Use Case chi tiết chuẩn mực (Fully Dressed Use Case Template) thường có bao nhiêu trường chính?**

- **A.** Gồm 10 trường thông tin chuẩn mực (Name, ID, Actor, Stakeholders, Pre, Post, Trigger, Flows)
- **B.** Chỉ bao gồm duy nhất 2 trường thông tin là Tên ca sử dụng và Đoạn mã lập trình của hàm xử lý
- **C.** Gồm 50 trường thông tin chi tiết quy định thông số phần cứng của máy chủ mạng đám mây
- **D.** Bắt buộc phải có đúng 100 trường tương ứng với 100 câu hỏi trắc nghiệm của bài kiểm tra

> **Đáp án đúng:** **A** — *Gồm 10 trường thông tin chuẩn mực (Name, ID, Actor, Stakeholders, Pre, Post, Trigger, Flows)*
>
> **Giải thích chi tiết:** Biểu mẫu Fully Dressed tiêu chuẩn (theo Alistair Cockburn / Craig Larman) gồm 10 trường: Tên, ID, Actor, Stakeholders & Interests, Preconditions, Postconditions, Trigger, Main Flow, Extensions, Special Requirements.

---

#### Câu 30 (ad-c3-d1-030) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trường 'Điều kiện tiên quyết' (Preconditions) trong bản đặc tả Fully Dressed Use Case có ý nghĩa là gì?**

- **A.** Các điều kiện bắt buộc phải đúng (True) trước khi Use Case được phép bắt đầu thực thi
- **B.** Trạng thái của hệ thống sau khi Use Case đã hoàn thành thành công toàn bộ các bước
- **C.** Danh sách các lỗi phần cứng máy chủ có thể xảy ra trong khi người dùng thao tác nhập liệu
- **D.** Thời gian tối đa mà lập trình viên được phép sử dụng để hoàn thành việc viết mã chức năng

> **Đáp án đúng:** **A** — *Các điều kiện bắt buộc phải đúng (True) trước khi Use Case được phép bắt đầu thực thi*
>
> **Giải thích chi tiết:** Preconditions (Điều kiện tiên quyết) nêu rõ trạng thái hệ thống bắt buộc phải thỏa mãn trước khi Use Case có thể bắt đầu (ví dụ: 'Người dùng đã đăng nhập thành công vào hệ thống').

---

#### Câu 31 (ad-c3-d1-031) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Trường 'Điều kiện sau thành công' (Postconditions / Success Guarantee) trong đặc tả Use Case đảm bảo điều gì?**

- **A.** Trạng thái của hệ thống sau khi Use Case kết thúc thành công mục tiêu của Primary Actor
- **B.** Tổng số tiền thưởng mà chuyên viên phân tích nghiệp vụ BA sẽ nhận được sau khi dự án xong
- **C.** Mức độ hài lòng tính bằng điểm số của ban giám đốc công ty đối với đội ngũ lập trình viên
- **D.** Các điều kiện mạng viễn thông bắt buộc phải có để bắt đầu khởi chạy máy tính văn phòng

> **Đáp án đúng:** **A** — *Trạng thái của hệ thống sau khi Use Case kết thúc thành công mục tiêu của Primary Actor*
>
> **Giải thích chi tiết:** Postconditions (Đảm bảo thành công) xác định trạng thái của hệ thống sau khi Use Case hoàn thành (ví dụ: 'Đơn hàng được lưu vào CSDL, số lượng tồn kho được cập nhật giảm, email xác nhận đã gửi').

---

#### Câu 32 (ad-c3-d1-032) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Phát biểu nào sau đây phân biệt CHÍNH XÁC giữa Luồng chính (Main Flow) và Luồng nhánh rẽ (Extensions)?**

- **A.** Main Flow là kịch bản lý tưởng 'Happy Path'; Extensions mô tả các nhánh ngoại lệ và lỗi xử lý
- **B.** Main Flow chỉ viết bằng tiếng Anh; còn Extensions bắt buộc phải được dịch sang tiếng Pháp
- **C.** Main Flow do khách hàng viết; còn Extensions do chuyên viên bảo vệ cơ quan trực tiếp viết
- **D.** Main Flow và Extensions là hai thuật ngữ hoàn toàn đồng nghĩa và có thể dùng thay thế nhau

> **Đáp án đúng:** **A** — *Main Flow là kịch bản lý tưởng 'Happy Path'; Extensions mô tả các nhánh ngoại lệ và lỗi xử lý*
>
> **Giải thích chi tiết:** Main Success Scenario (Happy Path) là kịch bản thuận lợi khi không có lỗi xảy ra. Extensions (Alternative Flows) mô tả các tình huống rẽ nhánh, lỗi nhập liệu hoặc sự cố cần xử lý thay thế.

---

#### Câu 33 (ad-c3-d1-033) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Sai lầm phổ biến nhất có tên 'Functional Decomposition' (Phân rã chức năng) trong mô hình Use Case là gì?**

- **A.** Xé nhỏ Use Case thành các thao tác đơn lẻ như 'Tạo', 'Đọc', 'Sửa', 'Xóa' thay vì mục tiêu trọn vẹn
- **B.** Quên không tô màu sắc rực rỡ cho các biểu tượng hình người Actor trên trang giấy biểu đồ
- **C.** Vẽ sơ đồ ranh giới hệ thống bằng hình tròn thay vì vẽ bằng khung hình chữ nhật đứng chuẩn
- **D.** Sử dụng quá nhiều ngôn ngữ lập trình khác nhau để viết phần mềm cho hệ thống thông tin đó

> **Đáp án đúng:** **A** — *Xé nhỏ Use Case thành các thao tác đơn lẻ như 'Tạo', 'Đọc', 'Sửa', 'Xóa' thay vì mục tiêu trọn vẹn*
>
> **Giải thích chi tiết:** Functional Decomposition là sai lầm kinh điển khi BA chia nhỏ Use Case theo tư duy lập trình hàm (CRUD: Create, Read, Update, Delete) thay vì tập trung vào mục tiêu hoàn chỉnh mang lại giá trị cho người dùng.

---

#### Câu 34 (ad-c3-d1-034) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Sai lầm phổ biến nào sau đây thường xảy ra khi vẽ quan hệ <<extend>> trong biểu đồ Use Case?**

- **A.** Vẽ mũi tên ngược từ Base Use Case trỏ sang Extension Case thay vì trỏ ngược lại về Base
- **B.** Đặt tên cho Extension Use Case bằng một động từ kết hợp với một cụm danh từ ở thể chủ động
- **C.** Gắn nhãn chữ <<extend>> trên đường nét đứt kết nối giữa hai hình elip trong biểu đồ UML
- **D.** Xác định rõ ràng điểm mở rộng Extension Point bên trong văn bản đặc tả kịch bản Use Case

> **Đáp án đúng:** **A** — *Vẽ mũi tên ngược từ Base Use Case trỏ sang Extension Case thay vì trỏ ngược lại về Base*
>
> **Giải thích chi tiết:** Rất nhiều người nhầm lẫn vẽ mũi tên `<<extend>>` từ Base ➔ Extension (như luồng logic suy nghĩ). Quy chuẩn UML bắt buộc mũi tên phải trỏ ngược từ Extension ➔ Base.

---

#### Câu 35 (ad-c3-d1-035) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Một BA mới vào nghề vẽ 4 Use Case: 'Thêm SV', 'Sửa SV', 'Xóa SV', 'Xem SV'. Cách chuẩn hóa tối ưu nhất là:**

- **A.** Gom cả 4 thao tác trên thành một Use Case duy nhất có tên là 'Quản lý thông tin sinh viên'
- **B.** Giữ nguyên 4 Use Case độc lập và nối thêm quan hệ <<include>> giữa từng cặp Use Case với nhau
- **C.** Xóa bỏ hoàn toàn 4 Use Case trên và thay thế bằng một Use Case duy nhất có tên là 'Đăng nhập'
- **D.** Đổi tên 4 Use Case trên sang tiếng La-tinh để tăng tính học thuật và bảo mật cho tài liệu dự án

> **Đáp án đúng:** **A** — *Gom cả 4 thao tác trên thành một Use Case duy nhất có tên là 'Quản lý thông tin sinh viên'*
>
> **Giải thích chi tiết:** Bốn thao tác CRUD đối với một thực thể dữ liệu nên được gom thành một Use Case mục tiêu trọn vẹn cấp người dùng: 'Manage Student Information' (Quản lý thông tin sinh viên).

---

#### Câu 36 (ad-c3-d1-036) — [🔴 KHÓ (VẬN DỤNG CAO)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi biên soạn kịch bản luồng sự kiện trong Fully Dressed Use Case?**

- **A.** Luồng kịch bản bắt buộc phải nhúng trực tiếp các câu lệnh truy vấn SQL SELECT và tên bảng vật lý
- **B.** Luồng kịch bản cần được đánh số thứ tự tuần tự rõ ràng (1, 2, 3...) theo cặp tương tác Actor - Hệ thống
- **C.** Luồng kịch bản phải mô tả hệ thống phản hồi cái GÌ (WHAT) chứ không đi sâu vào chi tiết công nghệ (HOW)
- **D.** Các luồng nhánh rẽ (Extensions) nên được đánh mã định danh liên kết tương ứng với bước xảy ra lỗi

> **Đáp án đúng:** **A** — *Luồng kịch bản bắt buộc phải nhúng trực tiếp các câu lệnh truy vấn SQL SELECT và tên bảng vật lý*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì đặc tả Use Case mô tả ở mức nghiệp vụ/người dùng (User-goal level), tuyệt đối tránh đưa các chi tiết cài đặt kỹ thuật như mã lệnh SQL, tên hàm code hay cấu trúc phần cứng vào luồng kịch bản.

---

#### Câu 37 (ad-c3-d1-037) — [🔴 KHÓ (VẬN DỤNG CAO)] [SINGLE-CORRECT]

**[Outside] Trong quá trình chuyển đổi từ RUP sang Agile/Scrum, một Use Case mức User-Goal thường tương ứng với:**

- **A.** Một Epic lớn và thường được phân rã thành nhiều User Stories nhỏ để phát triển trong từng Sprint
- **B.** Một dòng chú thích mã nguồn đơn lẻ (Code comment) được viết bên trong hàm khởi tạo của lớp Java
- **C.** Một biên bản cuộc họp giao ban hàng ngày (Daily Standup) kéo dài không quá mười lăm phút
- **D.** Một lệnh kiểm thử đơn vị tự động (Unit Test) chạy trên môi trường máy chủ tích hợp liên tục

> **Đáp án đúng:** **A** — *Một Epic lớn và thường được phân rã thành nhiều User Stories nhỏ để phát triển trong từng Sprint*
>
> **Giải thích chi tiết:** [Outside] Trong thực tế Agile, một Use Case hoàn chỉnh mức User-Goal thường tương đương với một Epic hoặc Feature lớn, sau đó được BA phân rã thành nhiều User Stories nhỏ để đưa vào các Sprint.

---

#### Câu 38 (ad-c3-d1-038) — [🔴 KHÓ (VẬN DỤNG CAO)] [SINGLE-CORRECT]

**[Outside] Khi phân tích yêu cầu phi chức năng (NFRs như tốc độ < 2 giây), BA nên bố trí vào trường nào của Use Case?**

- **A.** Trường Yêu cầu đặc biệt (Special Requirements / Non-Functional Requirements của Use Case đó)
- **B.** Trường Tên ca sử dụng (Use Case Name) bằng cách ghép thêm số giây yêu cầu vào đằng sau tên
- **C.** Trường Tác nhân chính (Primary Actor) bằng cách đặt tên tác nhân là 'Người dùng mong muốn 2 giây'
- **D.** Bỏ qua không cần ghi nhận vì yêu cầu phi chức năng không có giá trị đối với hệ thống phần mềm

> **Đáp án đúng:** **A** — *Trường Yêu cầu đặc biệt (Special Requirements / Non-Functional Requirements của Use Case đó)*
>
> **Giải thích chi tiết:** [Outside] Các yêu cầu phi chức năng mang tính cục bộ gắn liền với một Use Case (như thời gian phản hồi, bảo mật) được ghi nhận chuẩn xác vào trường 'Special Requirements' của Use Case đó.

---

#### Câu 39 (ad-c3-d1-039) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**[Outside] Tình huống: Website gọi API sang Cổng thanh toán VNPay để xử lý thẻ. Trong sơ đồ Use Case, VNPay được mô hình hóa là:**

- **A.** Một Supporting Actor bên ngoài ranh giới hệ thống, kết nối tới Use Case thanh toán bằng đường liên kết
- **B.** Một Use Case con hình elip nằm bên trong ranh giới hệ thống và nối với Use Case chính bằng <<include>>
- **C.** Một cơ sở dữ liệu nội bộ được vẽ bằng hình trụ đứng đặt ở trung tâm biểu đồ Use Case Diagram
- **D.** Một lớp lập trình hướng đối tượng có đầy đủ các thuộc tính mã nguồn và các phương thức riêng tư

> **Đáp án đúng:** **A** — *Một Supporting Actor bên ngoài ranh giới hệ thống, kết nối tới Use Case thanh toán bằng đường liên kết*
>
> **Giải thích chi tiết:** [Outside] Dịch vụ bên ngoài (External Service/API như VNPay, MoMo) đóng vai trò là Secondary/Supporting Actor, nằm NGOÀI ranh giới hệ thống và tương tác với Use Case qua Association.

---

#### Câu 40 (ad-c3-d1-040) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**[Outside] Tình huống: Khách hàng yêu cầu vẽ Use Case cho chức năng 'Đăng nhập' (Login). Lời khuyên chuẩn mực của BA là gì?**

- **A.** Tránh biến Login thành Use Case độc lập; nên đưa việc đăng nhập vào Điều kiện tiên quyết (Precondition)
- **B.** Lập tức vẽ 10 Use Case Login khác nhau tương ứng với 10 loại trình duyệt web có trên thị trường
- **C.** Vẽ Use Case Login nối quan hệ <<include>> tới tất cả 100 Use Case khác có trong toàn bộ hệ thống
- **D.** Xóa bỏ hoàn toàn tính năng xác thực đăng nhập để người dùng có thể tự do xem toàn bộ dữ liệu bí mật

> **Đáp án đúng:** **A** — *Tránh biến Login thành Use Case độc lập; nên đưa việc đăng nhập vào Điều kiện tiên quyết (Precondition)*
>
> **Giải thích chi tiết:** [Outside] 'Login' không mang lại giá trị nghiệp vụ độc lập (Observable result of value). Kinh nghiệm thực tế chuẩn: coi 'User is logged in' là Precondition của các Use Case chính, tránh bẫy vẽ Use Case Login nối `<<include>>` tràn lan.

---

## BỘ ĐỀ THI SỐ 2 (MÃ ĐỀ: ad-c3-d2)

*Bộ đề số 2 đi sâu vào chi tiết các biến thể sự kiện thời gian/trạng thái, quy tắc đặt tên Use Case theo chuẩn Động từ - Danh từ, nguyên tắc Elementary Business Process (EBP), quan hệ kế thừa Use Case & Actor, quy tắc ranh giới hệ thống (System Boundary), điểm mở rộng Extension Point, kiểm chứng kịch bản ngoại lệ và bài học thực tiễn tránh bẫy thiết kế.*

---

#### Câu 1 (ad-c3-d2-001) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Mục tiêu tối thượng của giai đoạn Khởi động dự án (Inception / Initiation Phase) là gì?**

- **A.** Xác định ranh giới phạm vi, tầm nhìn dự án và chứng minh được tính khả thi kinh doanh
- **B.** Lập trình hoàn chỉnh toàn bộ mã nguồn của hệ thống và xuất xưởng sản phẩm cho khách
- **C.** Thiết kế chi tiết toàn bộ các lược đồ cơ sở dữ liệu quan hệ và khóa ngoại của các bảng
- **D.** Ký kết hợp đồng bảo hành phần mềm kéo dài trong vòng mười năm với các khách hàng

> **Đáp án đúng:** **A** — *Xác định ranh giới phạm vi, tầm nhìn dự án và chứng minh được tính khả thi kinh doanh*
>
> **Giải thích chi tiết:** Mục tiêu then chốt của Initiation (Inception) là thiết lập phạm vi (Scope), tầm nhìn (Vision), trường hợp kinh doanh (Business Case) và chứng minh tính khả thi trước khi chi ngân sách lớn.

---

#### Câu 2 (ad-c3-d2-002) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Khái niệm 'Observable Result of Value' (Kết quả giá trị có thể quan sát được) trong Use Case nghĩa là gì?**

- **A.** Use Case phải mang lại một kết quả trọn vẹn, có ý nghĩa thực tế đối với mục tiêu của Actor
- **B.** Use Case bắt buộc phải hiển thị được hình ảnh đồ họa 3D chuyển động trên màn hình máy tính
- **C.** Use Case phải in ra giấy một văn bản có đóng dấu đỏ của giám đốc điều hành doanh nghiệp
- **D.** Use Case chỉ cần trả về mã lỗi HTTP 200 trên thanh trạng thái của trình duyệt web là đủ

> **Đáp án đúng:** **A** — *Use Case phải mang lại một kết quả trọn vẹn, có ý nghĩa thực tế đối với mục tiêu của Actor*
>
> **Giải thích chi tiết:** Use Case không phải là thao tác nửa vời (như bấm nút, nhập form). Nó phải mang lại một kết quả trọn vẹn, có ý nghĩa và giá trị đối với Actor (như 'Đăng ký thành công', 'Nhận tiền mặt').

---

#### Câu 3 (ad-c3-d2-003) — [🟢 DỄ (NHẬN BIẾT)] [FILL-BLANK]

**Hai mức độ chi tiết tiêu chuẩn của tài liệu đặc tả Use Case (Use Case Description) trong RUP là:**

- **A.** Mức tóm tắt sơ bộ (Brief Description) và Mức đặc tả chi tiết (Fully Dressed Description)
- **B.** Mức mã nhị phân ngôn ngữ máy (Binary Code) và Mức mã nguồn ngôn ngữ bậc cao (High-Level)
- **C.** Mức thiết kế giao diện đồ họa (Graphic UI) và Mức thiết kế mạch vi xử lý phần cứng (Hardware)
- **D.** Mức kế hoạch chi phí ngân sách (Budget Cost) và Mức tiến độ biểu thời gian (Time Schedule)

> **Đáp án đúng:** **A** — *Mức tóm tắt sơ bộ (Brief Description) và Mức đặc tả chi tiết (Fully Dressed Description)*
>
> **Giải thích chi tiết:** Hai mức mô tả Use Case chuẩn: Brief Description (đoạn văn tóm tắt 1-2 câu về mục tiêu) và Fully Dressed Description (bản đặc tả chi tiết với đầy đủ 10 trường dữ liệu và các luồng kịch bản).

---

#### Câu 4 (ad-c3-d2-004) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về các đặc trưng của giai đoạn Initiation trong Unified Process?**

- **A.** Giai đoạn Initiation hoàn thành việc lập trình và kiểm thử 100% tất cả các tính năng dự án
- **B.** Giai đoạn Initiation chỉ xây dựng khoảng 10% đến 20% các Use Case quan trọng nhất của hệ thống
- **C.** Giai đoạn Initiation tập trung nhận diện các rủi ro lớn nhất và ước tính sơ bộ về ngân sách
- **D.** Giai đoạn Initiation giúp ban lãnh đạo đưa ra quyết định Go hoặc No-Go tại cổng kiểm soát

> **Đáp án đúng:** **A** — *Giai đoạn Initiation hoàn thành việc lập trình và kiểm thử 100% tất cả các tính năng dự án*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì pha Initiation chỉ khảo sát, lập kế hoạch và định hình phạm vi (chỉ đặc tả sâu khoảng 10-20% Use Case cốt lõi), tuyệt đối không lập trình 100% tính năng.

---

#### Câu 5 (ad-c3-d2-005) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Khung chữ nhật 'Ranh giới hệ thống' (System Boundary) trong Use Case Diagram có vai trò cốt lõi là gì?**

- **A.** Xác định phạm vi trách nhiệm: những gì thuộc về phần mềm ở bên trong và bên ngoài là Actor
- **B.** Trang trí khung viền mỹ thuật cho trang giấy vẽ biểu đồ để gây ấn tượng với khách hàng
- **C.** Ngăn cản các virus độc hại từ mạng Internet xâm nhập vào các hình elip Use Case bên trong
- **D.** Chỉ định vị trí đặt máy chủ vật lý bên trong tòa nhà trung tâm dữ liệu của doanh nghiệp

> **Đáp án đúng:** **A** — *Xác định phạm vi trách nhiệm: những gì thuộc về phần mềm ở bên trong và bên ngoài là Actor*
>
> **Giải thích chi tiết:** System Boundary (Hộp ranh giới hệ thống) phân định rõ ranh giới phạm vi: những Use Case bên trong thuộc trách nhiệm xây dựng của hệ thống; các Actor bên ngoài là môi trường tương tác.

---

#### Câu 6 (ad-c3-d2-006) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Khi ngân hàng số kết nối cổng Napas để chuyển tiền, Napas nằm ở vị trí nào so với System Boundary?**

- **A.** Napas là Actor bên ngoài, bắt buộc phải nằm ngoài khung chữ nhật System Boundary của app
- **B.** Napas là một Use Case nội bộ, bắt buộc phải nằm bên trong khung chữ nhật System Boundary
- **C.** Napas bắt buộc phải được vẽ đè lên trên đường viền nét liền của khung chữ nhật hệ thống
- **D.** Napas không được phép xuất hiện trong bất kỳ bản vẽ kỹ thuật nào của dự án ngân hàng số

> **Đáp án đúng:** **A** — *Napas là Actor bên ngoài, bắt buộc phải nằm ngoài khung chữ nhật System Boundary của app*
>
> **Giải thích chi tiết:** Cổng thanh toán liên ngân hàng Napas là một hệ thống bên ngoài (External System Actor), do đó bắt buộc phải nằm NGOÀI ranh giới System Boundary của ứng dụng ngân hàng số.

---

#### Câu 7 (ad-c3-d2-007) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Nguyên tắc vàng trong kỹ thuật phân rã sự kiện (Event Decomposition) quy định tỷ lệ ánh xạ là gì?**

- **A.** Mỗi sự kiện nghiệp vụ (Business Event) tương ứng với đúng một Ca sử dụng (System Use Case)
- **B.** Mỗi sự kiện nghiệp vụ bắt buộc phải sinh ra đúng mười Ca sử dụng khác nhau trong hệ thống
- **C.** Mọi sự kiện nghiệp vụ đều bị gộp chung vào một Ca sử dụng duy nhất có tên là Quản trị viên
- **D.** Không có bất kỳ mối quan hệ hay quy tắc ánh xạ nào giữa Business Event và System Use Case

> **Đáp án đúng:** **A** — *Mỗi sự kiện nghiệp vụ (Business Event) tương ứng với đúng một Ca sử dụng (System Use Case)*
>
> **Giải thích chi tiết:** Quy tắc kinh điển của Event Decomposition là: '1 Business Event ➔ 1 System Use Case'. Mỗi khi một sự kiện xảy ra, hệ thống phản hồi bằng một Use Case tương ứng.

---

#### Câu 8 (ad-c3-d2-008) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong bảng phân tích sự kiện (Event Table), cột 'Trigger' (Tác nhân kích hoạt) có ý nghĩa là gì?**

- **A.** Tín hiệu hoặc dữ liệu đầu vào cụ thể làm cho hệ thống nhận biết rằng sự kiện đã bắt đầu xảy ra
- **B.** Tên của người kỹ sư phân tích nghiệp vụ chịu trách nhiệm phê duyệt tài liệu thiết kế
- **C.** Thời gian tối đa mà máy chủ được phép trì hoãn trước khi phát tín hiệu báo động đỏ
- **D.** Địa chỉ thư điện tử của khách hàng nhận kết quả giao dịch thanh toán thành công của đơn hàng

> **Đáp án đúng:** **A** — *Tín hiệu hoặc dữ liệu đầu vào cụ thể làm cho hệ thống nhận biết rằng sự kiện đã bắt đầu xảy ra*
>
> **Giải thích chi tiết:** Trigger (Tác nhân kích hoạt) là tín hiệu hoặc luồng dữ liệu (Data/Signal) gửi vào hệ thống, báo hiệu rằng sự kiện nghiệp vụ đã xảy ra (ví dụ: 'Đơn đặt hàng được gửi', 'Tín hiệu đồng hồ báo giờ').

---

#### Câu 9 (ad-c3-d2-009) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Trong cấu trúc của Event Table, sự khác biệt giữa cột 'Source' và cột 'Destination' là gì?**

- **A.** Source là đối tượng khởi phát và gửi Trigger vào; Destination là đối tượng nhận Response ra
- **B.** Source là ngôn ngữ lập trình nguồn; Destination là tập tin nhị phân sau khi biên dịch xong
- **C.** Source luôn luôn là máy tính máy chủ; còn Destination luôn luôn là điện thoại thông minh
- **D.** Source và Destination là hai cột dữ liệu hoàn toàn giống nhau và có thể xóa bớt một cột

> **Đáp án đúng:** **A** — *Source là đối tượng khởi phát và gửi Trigger vào; Destination là đối tượng nhận Response ra*
>
> **Giải thích chi tiết:** Source (Nguồn) là nơi xuất phát tín hiệu Trigger (thường là Primary Actor). Destination (Đích đến) là nơi nhận kết quả phản hồi Response từ hệ thống (có thể là Actor đó hoặc bên thứ ba).

---

#### Câu 10 (ad-c3-d2-010) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về vai trò của Bảng phân tích sự kiện (Event Table)?**

- **A.** Event Table được dùng trực tiếp để thay thế cho cơ sở dữ liệu quan hệ SQL trong môi trường thật
- **B.** Event Table là cầu nối chuyển tiếp giúp BA xác định danh sách Use Case một cách có hệ thống
- **C.** Event Table giúp đảm bảo không bỏ sót bất kỳ sự kiện nghiệp vụ quan trọng nào của doanh nghiệp
- **D.** Event Table ghi nhận rõ ràng nguồn kích hoạt, phản hồi đầu ra và đích đến của từng sự kiện

> **Đáp án đúng:** **A** — *Event Table được dùng trực tiếp để thay thế cho cơ sở dữ liệu quan hệ SQL trong môi trường thật*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì Event Table là công cụ tài liệu phân tích logic của BA trong giai đoạn thiết kế yêu cầu, hoàn toàn không phải cơ sở dữ liệu để lưu trữ bản ghi người dùng.

---

#### Câu 11 (ad-c3-d2-011) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Các bước chuẩn mực trong quy trình áp dụng kỹ thuật Phân rã sự kiện (Event Decomposition) là:**

- **A.** Nhận diện sự kiện ➔ Xác định loại sự kiện ➔ Lập Event Table ➔ Suy diễn danh sách Use Case
- **B.** Viết mã nguồn Java ➔ Tạo bảng cơ sở dữ liệu ➔ Thiết kế giao diện ➔ Mới bắt đầu tìm sự kiện
- **C.** Vẽ sơ đồ mạng ➔ Mua sắm máy chủ ➔ Cài đặt hệ điều hành ➔ Phỏng vấn giám đốc điều hành
- **D.** Ký duyệt hợp đồng ➔ Sa thải lập trình viên ➔ Tự động bàn giao hệ thống cho khách hàng dùng

> **Đáp án đúng:** **A** — *Nhận diện sự kiện ➔ Xác định loại sự kiện ➔ Lập Event Table ➔ Suy diễn danh sách Use Case*
>
> **Giải thích chi tiết:** Quy trình chuẩn: 1. Nhận diện các sự kiện nghiệp vụ ➔ 2. Phân loại sự kiện (External/Temporal/State) ➔ 3. Lập bảng Event Table chi tiết ➔ 4. Đặt tên và xác định danh sách System Use Cases.

---

#### Câu 12 (ad-c3-d2-012) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Tiêu chí nào giúp BA phân biệt giữa một Business Event thực sự và một thao tác nội bộ trong Use Case?**

- **A.** Business Event diễn ra độc lập và đòi hỏi hệ thống phản hồi; thao tác nội bộ chỉ là một bước con
- **B.** Business Event luôn viết bằng chữ in hoa; còn thao tác nội bộ luôn viết bằng chữ in thường
- **C.** Business Event chỉ xảy ra vào ban đêm; còn thao tác nội bộ chỉ được thực hiện vào ban ngày
- **D.** Business Event do giám đốc công ty thực hiện; còn thao tác nội bộ do bảo vệ cơ quan làm

> **Đáp án đúng:** **A** — *Business Event diễn ra độc lập và đòi hỏi hệ thống phản hồi; thao tác nội bộ chỉ là một bước con*
>
> **Giải thích chi tiết:** Một Business Event là sự kiện kích hoạt cả một quy trình nghiệp vụ trọn vẹn. Các hành vi nhỏ như 'Nhập tên đăng nhập', 'Bấm nút Tiếp tục' chỉ là bước con (Internal Steps) bên trong Use Case.

---

#### Câu 13 (ad-c3-d2-013) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Khi cảm biến nhiệt độ phòng máy chủ vượt quá 50 độ C, còi báo động tự động hú vang. Đây là sự kiện gì?**

- **A.** State Event (Sự kiện trạng thái do thông số nhiệt độ bên trong chạm ngưỡng giới hạn nguy hiểm)
- **B.** External Event (Sự kiện bên ngoài do một nhân viên cố tình châm lửa vào thanh cảm biến)
- **C.** Temporal Event (Sự kiện thời gian do đồng hồ báo thức trên điện thoại di động phát chuông)
- **D.** Software Bug (Lỗi lập trình phần mềm do kỹ sư kiểm thử cài đặt sai thư viện đồ họa máy tính)

> **Đáp án đúng:** **A** — *State Event (Sự kiện trạng thái do thông số nhiệt độ bên trong chạm ngưỡng giới hạn nguy hiểm)*
>
> **Giải thích chi tiết:** Sự kiện được kích hoạt tự động khi một trạng thái hoặc chỉ số nội tại (nhiệt độ phòng máy) vượt qua ngưỡng quy định là một State Event (Sự kiện trạng thái) điển hình.

---

#### Câu 14 (ad-c3-d2-014) — [🔴 KHÓ (VẬN DỤNG CAO)] [MATCHING]

**Hãy chọn phương án ghép cặp ĐÚNG NHẤT giữa các cột của Event Table và vai trò kỹ thuật của chúng:**

- **A.** Trigger - Dữ liệu kích hoạt; Source - Tác nhân khởi xướng; Response - Dữ liệu kết quả phản hồi
- **B.** Trigger - Nơi nhận kết quả; Source - Tên ca sử dụng; Response - Dữ liệu kích hoạt ban đầu
- **C.** Trigger - Tên lập trình viên; Source - Cổng mạng Internet; Response - Bảng cơ sở dữ liệu
- **D.** Trigger - Báo cáo tài chính; Source - Ký hiệu biểu đồ; Response - Địa chỉ phòng máy chủ

> **Đáp án đúng:** **A** — *Trigger - Dữ liệu kích hoạt; Source - Tác nhân khởi xướng; Response - Dữ liệu kết quả phản hồi*
>
> **Giải thích chi tiết:** Trong Event Table: Trigger là tín hiệu/dữ liệu kích hoạt; Source là nơi phát sinh tín hiệu; Response là dữ liệu/thông báo phản hồi mà hệ thống tạo ra sau khi xử lý.

---

#### Câu 15 (ad-c3-d2-015) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Nguyên tắc cốt lõi quan trọng nhất khi nhận diện Actor trong mô hình Use Case là gì?**

- **A.** Actor đại diện cho một Vai trò (Role) trong mối quan hệ với hệ thống, chứ không phải một chức danh
- **B.** Actor bắt buộc phải là một nhân viên chính thức có tên trong bảng chấm công hàng tháng
- **C.** Mỗi con người cụ thể ngoài đời bắt buộc phải được vẽ thành một Actor riêng biệt độc lập
- **D.** Actor chỉ được phép tương tác với hệ thống thông qua các bàn phím máy tính để bàn có dây

> **Đáp án đúng:** **A** — *Actor đại diện cho một Vai trò (Role) trong mối quan hệ với hệ thống, chứ không phải một chức danh*
>
> **Giải thích chi tiết:** Actor mô hình hóa VAI TRÒ (Role) tương tác, không phải con người cụ thể hay chức danh hành chính. Ví dụ: 'Customer' (Khách hàng) là vai trò, có thể do nhiều người đảm nhận.

---

#### Câu 16 (ad-c3-d2-016) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong mô hình hóa Use Case, một 'System Actor' (Tác nhân hệ thống) khác với Human Actor ở điểm nào?**

- **A.** Là một hệ thống phần mềm, cơ sở dữ liệu hoặc thiết bị phần cứng bên ngoài giao tiếp tự động
- **B.** Là một nhân sự cấp quản lý có quyền can thiệp vào máy chủ mà không cần nhập mật khẩu
- **C.** Là một con robot hình người có khả năng tự động bấm phím máy tính như nhân viên văn phòng
- **D.** Là một khái niệm hoàn toàn bị cấm sử dụng trong tất cả các bản vẽ biểu đồ chuẩn của UML

> **Đáp án đúng:** **A** — *Là một hệ thống phần mềm, cơ sở dữ liệu hoặc thiết bị phần cứng bên ngoài giao tiếp tự động*
>
> **Giải thích chi tiết:** System Actor là một hệ thống bên ngoài (External System), API hoặc thiết bị tự động tương tác với hệ thống đang xét (như Cổng thanh toán, Hệ thống Email, Cảm biến phần cứng).

---

#### Câu 17 (ad-c3-d2-017) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Nếu một giảng viên đại học vừa tham gia giảng dạy vừa đăng ký học thêm văn bằng hai, BA nên làm gì?**

- **A.** Mô hình hóa thành hai Actor độc lập: 'Giảng viên' (Instructor) và 'Sinh viên' (Student)
- **B.** Chỉ mô hình hóa một Actor duy nhất là Giảng viên và cấm người này đăng ký học môn học mới
- **C.** Tạo ra một Actor mới có tên là 'Siêu con người' có toàn quyền xem toàn bộ đề thi của trường
- **D.** Xóa bỏ hoàn toàn hồ sơ của người này trên hệ thống để tránh việc xảy ra lỗi trùng lặp dữ liệu

> **Đáp án đúng:** **A** — *Mô hình hóa thành hai Actor độc lập: 'Giảng viên' (Instructor) và 'Sinh viên' (Student)*
>
> **Giải thích chi tiết:** Vì Actor đại diện cho vai trò tương tác: khi lên lớp họ đóng vai trò Instructor; khi đăng ký học họ đóng vai trò Student. Hai vai trò độc lập tương tác với các Use Case khác nhau.

---

#### Câu 18 (ad-c3-d2-018) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi bàn về các phương pháp nhận diện Actor cho hệ thống mới?**

- **A.** Mọi người dùng khi dùng phần mềm đều bắt buộc phải được gán vào vai trò Primary Actor
- **B.** BA có thể tìm kiếm Actor bằng cách trả lời câu hỏi: 'Ai là người cung cấp thông tin đầu vào?'
- **C.** BA có thể tìm kiếm Actor bằng cách trả lời câu hỏi: 'Hệ thống nào nhận dữ liệu xuất ra?'
- **D.** Các dịch vụ hạ tầng như đồng hồ thời gian của hệ điều hành có thể coi là tác nhân thời gian

> **Đáp án đúng:** **A** — *Mọi người dùng khi dùng phần mềm đều bắt buộc phải được gán vào vai trò Primary Actor*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì người dùng có thể là Supporting Actor (hỗ trợ xác thực) hoặc Offstage Actor (chỉ nhận báo cáo gián tiếp), không phải ai cũng là Primary Actor.

---

#### Câu 19 (ad-c3-d2-019) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Khi đối chiếu từ bảng sự kiện (Event Table), thông tin ở cột nào thường giúp xác định trực tiếp các Actors?**

- **A.** Cột Source (Xác định Primary Actor) và cột Destination (Xác định Secondary/Supporting Actor)
- **B.** Cột Use Case (Xác định danh sách các bảng dữ liệu sẽ được tạo bên trong cơ sở dữ liệu)
- **C.** Cột Response (Xác định tên ngôn ngữ lập trình sẽ được sử dụng để viết mã cho chức năng)
- **D.** Cột Trigger (Xác định số lượng vi xử lý cần mua để lắp đặt cho hệ thống máy chủ mạng)

> **Đáp án đúng:** **A** — *Cột Source (Xác định Primary Actor) và cột Destination (Xác định Secondary/Supporting Actor)*
>
> **Giải thích chi tiết:** Cột Source (Nguồn gửi tín hiệu) thường trực tiếp chỉ ra Primary Actor. Cột Destination (Nơi nhận kết quả phản hồi) giúp nhận diện các Supporting hoặc Offstage Actors.

---

#### Câu 20 (ad-c3-d2-020) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Trong phần mềm bệnh viện, 'Bác sĩ' nhập đơn thuốc và 'Cơ quan Bảo hiểm Xã hội' nhận báo cáo chi phí:**

- **A.** Bác sĩ là Primary Actor trực tiếp; Cơ quan BHXH là Offstage/Supporting Actor nhận dữ liệu
- **B.** Bác sĩ là Supporting Actor; còn Cơ quan BHXH là Primary Actor trực tiếp khám cho bệnh nhân
- **C.** Cả Bác sĩ và Cơ quan BHXH đều bắt buộc phải là các Use Case hình elip bên trong phần mềm
- **D.** Cơ quan BHXH là ranh giới hệ thống; còn Bác sĩ là một thuộc tính riêng tư của cơ sở dữ liệu

> **Đáp án đúng:** **A** — *Bác sĩ là Primary Actor trực tiếp; Cơ quan BHXH là Offstage/Supporting Actor nhận dữ liệu*
>
> **Giải thích chi tiết:** Bác sĩ trực tiếp tương tác hoàn thành mục tiêu kê đơn (Primary Actor). Cơ quan BHXH là bên liên quan nhận báo cáo chi phí để duyệt bảo hiểm (Offstage / External Actor).

---

#### Câu 21 (ad-c3-d2-021) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Mục đích quan trọng nhất của việc tổ chức và liên kết các Use Case bằng các quan hệ nâng cao là gì?**

- **A.** Quản lý độ phức tạp, tránh lặp lại các luồng logic chung và làm sơ đồ sáng sủa, dễ hiểu
- **B.** Để làm cho bản vẽ trông phức tạp hơn nhằm chứng minh năng lực kỹ thuật với khách hàng
- **C.** Nhằm mục đích tự động biên dịch sơ đồ Use Case thành các tập tin mã nguồn ngôn ngữ Java
- **D.** Để loại bỏ hoàn toàn sự cần thiết phải viết tài liệu đặc tả kịch bản Use Case chi tiết

> **Đáp án đúng:** **A** — *Quản lý độ phức tạp, tránh lặp lại các luồng logic chung và làm sơ đồ sáng sủa, dễ hiểu*
>
> **Giải thích chi tiết:** Tổ chức Use Case bằng `<<include>>`, `<<extend>>` và Generalization giúp tái sử dụng luồng logic, loại bỏ dư thừa và quản lý độ phức tạp của các hệ thống quy mô lớn.

---

#### Câu 22 (ad-c3-d2-022) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Quan hệ Kế thừa (Generalization) giữa các Actor trong Use Case Diagram có ý nghĩa như thế nào?**

- **A.** Actor con kế thừa toàn bộ các Use Case và quyền truy cập của Actor cha, đồng thời có thêm quyền riêng
- **B.** Actor con sẽ xóa bỏ toàn bộ quyền truy cập và chức năng của Actor cha trong hệ thống phần mềm
- **C.** Hai Actor này hoàn toàn độc lập và không thể giao tiếp với cùng một hệ thống thông tin chung
- **D.** Chỉ dùng để biểu thị mối quan hệ huyết thống gia đình ngoài đời thực của những người sử dụng

> **Đáp án đúng:** **A** — *Actor con kế thừa toàn bộ các Use Case và quyền truy cập của Actor cha, đồng thời có thêm quyền riêng*
>
> **Giải thích chi tiết:** Actor Generalization cho phép Actor con kế thừa toàn bộ mối liên kết tương tác với các Use Case của Actor cha (is-a relationship) và bổ sung các quyền/tính năng chuyên biệt.

---

#### Câu 23 (ad-c3-d2-023) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Hướng mũi tên nét đứt của quan hệ <<extend>> trong biểu đồ Use Case Diagram được quy định là:**

- **A.** Mũi tên nét đứt có gắn nhãn <<extend>> trỏ từ Extension Use Case VỀ PHÍA Base Use Case
- **B.** Mũi tên nét đứt có gắn nhãn <<extend>> trỏ từ Base Use Case VỀ PHÍA Extension Use Case
- **C.** Mũi tên nét liền hai chiều có hình tam giác đặc màu đen ở cả hai đầu của đoạn liên kết
- **D.** Không bao giờ có mũi tên mà chỉ là một đường nét đứt khúc nằm ngang ở giữa hai hình elip

> **Đáp án đúng:** **A** — *Mũi tên nét đứt có gắn nhãn <<extend>> trỏ từ Extension Use Case VỀ PHÍA Base Use Case*
>
> **Giải thích chi tiết:** Quy chuẩn UML: Mũi tên nét đứt `<<extend>>` trỏ từ Extension Use Case VỀ PHÍA Base Use Case (Extension ➔ Base), vì Extension Case biết rõ điểm mở rộng của Base Case.

---

#### Câu 24 (ad-c3-d2-024) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Về tính độc lập, điểm khác biệt then chốt giữa Base Use Case trong <<include>> và trong <<extend>> là:**

- **A.** Trong <<include>>, Base Case phụ thuộc vào Use Case con; trong <<extend>>, Base Case hoàn toàn độc lập
- **B.** Trong <<include>>, Base Case không biết Use Case con; trong <<extend>>, Base Case bắt buộc phải biết
- **C.** Cả hai quan hệ trên đều đòi hỏi Base Use Case phải phụ thuộc chặt chẽ vào các Use Case bên cạnh
- **D.** Không có bất kỳ sự khác biệt nào về tính độc lập giữa hai loại quan hệ kỹ thuật kể trên

> **Đáp án đúng:** **A** — *Trong <<include>>, Base Case phụ thuộc vào Use Case con; trong <<extend>>, Base Case hoàn toàn độc lập*
>
> **Giải thích chi tiết:** Trong `<<include>>`, Base Case biết rõ và bắt buộc phải gọi Included Case để thành công. Trong `<<extend>>`, Base Case hoàn toàn độc lập, không hề biết có sự mở rộng nào hay không.

---

#### Câu 25 (ad-c3-d2-025) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi nói về quan hệ <<extend>> trong mô hình Use Case?**

- **A.** Mọi hành vi được định nghĩa trong Extension Use Case bắt buộc phải luôn luôn được thực thi
- **B.** Extension Use Case chỉ chèn thêm hành vi vào Base Use Case khi điều kiện mở rộng thỏa mãn
- **C.** Một Base Use Case có thể có nhiều Extension Use Case khác nhau gắn vào các Extension Point
- **D.** Extension Use Case giúp giữ cho Base Use Case đơn giản, không bị rối rắm bởi các ngoại lệ

> **Đáp án đúng:** **A** — *Mọi hành vi được định nghĩa trong Extension Use Case bắt buộc phải luôn luôn được thực thi*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì `<<extend>>` là quan hệ tùy chọn có điều kiện (Optional / Conditional), hành vi mở rộng chỉ thực thi khi điều kiện kích hoạt tại Extension Point được đáp ứng.

---

#### Câu 26 (ad-c3-d2-026) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Khi nào một chuyên viên BA NÊN trích xuất một luồng logic thành một Use Case riêng với quan hệ <<include>>?**

- **A.** Khi luồng logic đó xuất hiện lặp đi lặp lại ở ít nhất từ hai Use Case độc lập trở lên
- **B.** Khi luồng logic đó chỉ gồm đúng một thao tác nhấp chuột duy nhất của người sử dụng
- **C.** Khi khách hàng yêu cầu muốn xem thật nhiều hình elip màu xanh trên trang tài liệu dự án
- **D.** Khi lập trình viên muốn chia nhỏ chương trình thành các hàm ngắn không quá năm dòng lệnh

> **Đáp án đúng:** **A** — *Khi luồng logic đó xuất hiện lặp đi lặp lại ở ít nhất từ hai Use Case độc lập trở lên*
>
> **Giải thích chi tiết:** Ta trích xuất một Included Use Case khi có một đoạn kịch bản hoặc logic chung (như 'Xác thực sinh viên', 'Kiểm tra tín dụng') được dùng chung bởi hai hoặc nhiều Use Case khác nhau.

---

#### Câu 27 (ad-c3-d2-027) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: Khi 'Đăng ký môn học', hệ thống BẮT BUỘC phải thực hiện 'Kiểm tra môn tiên quyết'. Mối quan hệ là:**

- **A.** Quan hệ <<include>> trỏ từ 'Đăng ký môn học' sang 'Kiểm tra môn tiên quyết'
- **B.** Quan hệ <<extend>> trỏ từ 'Đăng ký môn học' sang 'Kiểm tra môn tiên quyết'
- **C.** Quan hệ Generalization trỏ từ 'Kiểm tra môn tiên quyết' sang 'Đăng ký môn học'
- **D.** Hai Use Case này không thể có bất kỳ mối liên hệ nào với nhau trong cùng biểu đồ

> **Đáp án đúng:** **A** — *Quan hệ <<include>> trỏ từ 'Đăng ký môn học' sang 'Kiểm tra môn tiên quyết'*
>
> **Giải thích chi tiết:** Vì việc kiểm tra môn tiên quyết là bắt buộc 100% trong mọi lần đăng ký, nên 'Đăng ký môn học' bao hàm (`<<include>>`) Use Case 'Kiểm tra môn tiên quyết'.

---

#### Câu 28 (ad-c3-d2-028) — [🔴 KHÓ (VẬN DỤNG CAO)] [MATCHING]

**Hãy chọn phương án ghép cặp ĐÚNG NHẤT giữa loại quan hệ trong Use Case Diagram và đặc điểm ngữ nghĩa:**

- **A.** <<include>> - Bắt buộc dùng chung; <<extend>> - Mở rộng có điều kiện; Generalization - Kế thừa
- **B.** <<include>> - Tùy chọn rẽ nhánh; <<extend>> - Bắt buộc thực thi; Generalization - Xóa dữ liệu
- **C.** <<include>> - Kế thừa lớp cha; <<extend>> - Bắt buộc dùng chung; Generalization - Tùy chọn
- **D.** <<include>> - Gọi hàm đệ quy; <<extend>> - Quản trị hệ thống; Generalization - Báo cáo lỗi

> **Đáp án đúng:** **A** — *<<include>> - Bắt buộc dùng chung; <<extend>> - Mở rộng có điều kiện; Generalization - Kế thừa*
>
> **Giải thích chi tiết:** Ngữ nghĩa chuẩn: `<<include>>` (Bắt buộc / Tái sử dụng), `<<extend>>` (Tùy chọn / Mở rộng có điều kiện), Generalization (Kế thừa / Chuyên biệt hóa is-a).

---

#### Câu 29 (ad-c3-d2-029) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trong bản đặc tả Fully Dressed Use Case, trường 'Stakeholders and Interests' nhằm mục đích gì?**

- **A.** Liệt kê tất cả các bên liên quan và những kỳ vọng, lợi ích mà hệ thống phải đảm bảo cho họ
- **B.** Liệt kê số tài khoản ngân hàng của các nhà đầu tư tài chính đã rót vốn vào công ty công nghệ
- **C.** Liệt kê danh sách các món ăn yêu thích của khách hàng khi tham gia các buổi tiệc chiêu đãi
- **D.** Liệt kê thời gian biểu các ca trực đêm của nhân viên bảo vệ phụ trách an ninh tòa nhà

> **Đáp án đúng:** **A** — *Liệt kê tất cả các bên liên quan và những kỳ vọng, lợi ích mà hệ thống phải đảm bảo cho họ*
>
> **Giải thích chi tiết:** Stakeholders and Interests (Các bên liên quan và quyền lợi) nêu rõ ai quan tâm đến kết quả của Use Case này và hệ thống cần thỏa mãn những yêu cầu/ràng buộc gì cho họ.

---

#### Câu 30 (ad-c3-d2-030) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Trường 'Yêu cầu đặc biệt' (Special Requirements) trong kịch bản Fully Dressed Use Case dùng để ghi nhận:**

- **A.** Các yêu cầu phi chức năng (hiệu năng, bảo mật, tính sẵn sàng) gắn liền với Use Case cụ thể đó
- **B.** Các lời chúc mừng sinh nhật được gửi tự động tới hòm thư cá nhân của các lập trình viên
- **C.** Danh sách các phần thưởng hiện vật dành cho nhân viên bán hàng đạt doanh số cao nhất tháng
- **D.** Những điều khoản pháp lý quy định mức lương tối thiểu của người lao động trong doanh nghiệp

> **Đáp án đúng:** **A** — *Các yêu cầu phi chức năng (hiệu năng, bảo mật, tính sẵn sàng) gắn liền với Use Case cụ thể đó*
>
> **Giải thích chi tiết:** Special Requirements (Yêu cầu đặc biệt) là nơi BA ghi lại các yêu cầu phi chức năng (Non-Functional Requirements / Quality Attributes) đặc thù của riêng Use Case đó.

---

#### Câu 31 (ad-c3-d2-031) — [🟢 DỄ (NHẬN BIẾT)] [SINGLE-CORRECT]

**Sai lầm phổ biến khi đặt tên cho Use Case bằng danh từ kỹ thuật (như 'Student Database') vi phạm nguyên tắc nào?**

- **A.** Vi phạm quy tắc Động từ + Cụm danh từ biểu thị mục tiêu hành động của người dùng (Verb + Noun)
- **B.** Vi phạm luật bản quyền sở hữu trí tuệ của tổ chức chuẩn hóa phần mềm quốc tế OMG
- **C.** Làm cho máy vi tính không thể nhận dạng được chữ cái tiếng Anh khi người dùng gõ lệnh
- **D.** Vi phạm các quy tắc đặt tên biến trong các ngôn ngữ lập trình hướng đối tượng C++ và Java

> **Đáp án đúng:** **A** — *Vi phạm quy tắc Động từ + Cụm danh từ biểu thị mục tiêu hành động của người dùng (Verb + Noun)*
>
> **Giải thích chi tiết:** Use Case phải phản ánh hành vi hướng mục tiêu của người dùng: bắt buộc dùng `Verb + Noun Phrase` (như 'Manage Student Information'), không được đặt tên là một danh từ tĩnh như 'Student Database'.

---

#### Câu 32 (ad-c3-d2-032) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Sai lầm nào sau đây xảy ra khi BA nhầm lẫn giữa một bước trong luồng sự kiện với một Use Case?**

- **A.** Vẽ các hành động nhỏ như 'Nhập mật khẩu' hay 'Bấm nút Xác nhận' thành các Use Case hình elip riêng
- **B.** Sử dụng biểu tượng hình người (Stick figure) để biểu diễn các tác nhân con người tương tác
- **C.** Đánh số thứ tự các bước trong luồng kịch bản chính Main Success Scenario từ 1 đến 10
- **D.** Mô tả các tình huống rẽ nhánh lỗi ngoại lệ trong phần kịch bản mở rộng Extension Flows

> **Đáp án đúng:** **A** — *Vẽ các hành động nhỏ như 'Nhập mật khẩu' hay 'Bấm nút Xác nhận' thành các Use Case hình elip riêng*
>
> **Giải thích chi tiết:** Biến các bước thao tác vi mô (như 'Enter Password', 'Click Submit') thành Use Case riêng là sai lầm phổ biến. Chúng chỉ là các bước con bên trong luồng kịch bản của một Use Case trọn vẹn.

---

#### Câu 33 (ad-c3-d2-033) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Việc vẽ biểu tượng Actor bên trong khung hình chữ nhật System Boundary sẽ gây ra hậu quả nào?**

- **A.** Làm sai lệch ranh giới hệ thống, biến một thực thể bên ngoài thành một phần mềm nội bộ bên trong
- **B.** Làm cho tệp tin hình ảnh của biểu đồ bị hỏng định dạng và không thể mở được trên máy tính
- **C.** Làm tăng chi phí tiền điện tiêu thụ của các máy chủ đám mây lưu trữ tài liệu phân tích
- **D.** Tự động kích hoạt cơ chế xóa sạch toàn bộ mã nguồn của các kỹ sư lập trình trong dự án

> **Đáp án đúng:** **A** — *Làm sai lệch ranh giới hệ thống, biến một thực thể bên ngoài thành một phần mềm nội bộ bên trong*
>
> **Giải thích chi tiết:** Actor đại diện cho thế giới bên ngoài. Đưa Actor vào bên trong System Boundary là sai nghiêm trọng về mặt ngữ nghĩa UML, khiến người đọc hiểu nhầm Actor là một thành phần phần mềm của hệ thống.

---

#### Câu 34 (ad-c3-d2-034) — [🟡 TRUNG BÌNH (THÔNG HIỂU)] [SINGLE-CORRECT]

**Quy trình tư duy 11 chặng (The Cognitive Pipeline) của một BA từ bài toán thực tế đến Use Case Model bắt đầu từ:**

- **A.** Khảo sát bối cảnh kinh doanh ➔ Nhận diện các Business Events ➔ Phân loại Actor và lập Event Table
- **B.** Viết mã nguồn các lớp đối tượng ➔ Tạo bảng dữ liệu ➔ Rồi mới tìm hiểu khách hàng cần làm gì
- **C.** Vẽ ngay các biểu đồ hình elip phức tạp với hàng trăm quan hệ <<extend>> đan xen chằng chịt
- **D.** Cài đặt phần mềm diệt virus cho máy tính rồi đợi khách hàng tự gửi biểu đồ hoàn chỉnh sang

> **Đáp án đúng:** **A** — *Khảo sát bối cảnh kinh doanh ➔ Nhận diện các Business Events ➔ Phân loại Actor và lập Event Table*
>
> **Giải thích chi tiết:** Tiến trình tư duy chuẩn: Đi từ bối cảnh kinh doanh ➔ Nhận diện các sự kiện nghiệp vụ (Events) ➔ Phân loại tác nhân (Actors) ➔ Lập Event Table ➔ Chuẩn hóa Use Case Model và viết đặc tả.

---

#### Câu 35 (ad-c3-d2-035) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**Tình huống: BA vẽ 'Cơ sở dữ liệu Oracle' là hình người Actor nằm BÊN TRONG hộp System Boundary. Lỗi sai là:**

- **A.** Sai cả hai yếu tố: CSDL nội bộ không phải Actor bên ngoài, và Actor tuyệt đối không nằm trong Boundary
- **B.** Vẽ đúng hoàn toàn 100% vì cơ sở dữ liệu đóng vai trò quan trọng nhất trong toàn bộ hệ thống
- **C.** Chỉ sai ở chỗ không tô màu đỏ cho biểu tượng hình người của cơ sở dữ liệu trên trang giấy
- **D.** Chỉ sai ở chỗ đặt tên chữ Oracle viết hoa thay vì phải viết bằng toàn bộ chữ cái in thường

> **Đáp án đúng:** **A** — *Sai cả hai yếu tố: CSDL nội bộ không phải Actor bên ngoài, và Actor tuyệt đối không nằm trong Boundary*
>
> **Giải thích chi tiết:** Sai nghiêm trọng: 1. CSDL nội bộ là thành phần bên trong, không phải Actor; 2. Quy tắc UML cấm vẽ Actor nằm bên trong khung chữ nhật System Boundary.

---

#### Câu 36 (ad-c3-d2-036) — [🔴 KHÓ (VẬN DỤNG CAO)] [CHOOSE-WRONG]

**Khẳng định nào sau đây là SAI khi tiến hành kiểm định chất lượng mô hình Use Case (Audit Checklist)?**

- **A.** Một Use Case chuẩn chỉ cần phục vụ cho lập trình viên đọc hiểu, không cần người dùng nghiệp vụ hiểu
- **B.** Mỗi Use Case phải có tên bắt đầu bằng một động từ thể chủ động gắn liền với cụm danh từ rõ nghĩa
- **C.** Mọi Actor trong biểu đồ bắt buộc phải có ít nhất một đường liên kết tương tác với một Use Case
- **D.** Không được xuất hiện các Use Case 'mồ côi' hoàn toàn không kết nối tới bất kỳ Actor hay Use Case nào

> **Đáp án đúng:** **A** — *Một Use Case chuẩn chỉ cần phục vụ cho lập trình viên đọc hiểu, không cần người dùng nghiệp vụ hiểu*
>
> **Giải thích chi tiết:** Khẳng định A SAI vì Use Case là ngôn ngữ cầu nối giao tiếp: nó bắt buộc phải được viết bằng ngôn ngữ nghiệp vụ trong sáng để cả khách hàng/người dùng lẫn đội ngũ kỹ thuật cùng hiểu thống nhất.

---

#### Câu 37 (ad-c3-d2-037) — [🔴 KHÓ (VẬN DỤNG CAO)] [SINGLE-CORRECT]

**[Outside] Trong kiến trúc phần mềm hướng dịch vụ (Microservices), ranh giới một Use Case nghiệp vụ có quan hệ thế nào?**

- **A.** Một Use Case nghiệp vụ có thể cần sự phối hợp xử lý của nhiều Microservices độc lập bên dưới
- **B.** Mỗi Use Case bắt buộc phải tương ứng đúng với một Microservice và cấm giao tiếp với service khác
- **C.** Kiến trúc Microservices hoàn toàn cấm đoán việc sử dụng mô hình Use Case trong phân tích nghiệp vụ
- **D.** Mọi Microservices đều bắt buộc phải được mô hình hóa thành các Actor hình người trên biểu đồ

> **Đáp án đúng:** **A** — *Một Use Case nghiệp vụ có thể cần sự phối hợp xử lý của nhiều Microservices độc lập bên dưới*
>
> **Giải thích chi tiết:** [Outside] Use Case ở mức nghiệp vụ (Business Capability). Khi triển khai kỹ thuật Microservices, một Use Case (như 'Place Order') có thể gọi đồng thời Order Service, Inventory Service và Payment Service.

---

#### Câu 38 (ad-c3-d2-038) — [🔴 KHÓ (VẬN DỤNG CAO)] [SINGLE-CORRECT]

**[Outside] Trong phân cấp quản trị sản phẩm số (Product Management), mối quan hệ thứ bậc chuẩn mực từ lớn đến nhỏ là:**

- **A.** Theme ➔ Epic (Tương đương Use Case lớn) ➔ Feature ➔ User Story ➔ Task (Nhiệm vụ kỹ thuật)
- **B.** Task ➔ User Story ➔ Feature ➔ Epic ➔ Theme (Xếp theo thứ tự từ chi tiết nhất đến tổng quan)
- **C.** User Story ➔ Task ➔ Theme ➔ Feature ➔ Epic (Xếp theo thứ tự bảng chữ cái tiếng Anh chuẩn)
- **D.** Feature ➔ Theme ➔ Task ➔ User Story ➔ Epic (Xếp theo thời gian thành lập công ty phần mềm)

> **Đáp án đúng:** **A** — *Theme ➔ Epic (Tương đương Use Case lớn) ➔ Feature ➔ User Story ➔ Task (Nhiệm vụ kỹ thuật)*
>
> **Giải thích chi tiết:** [Outside] Thứ bậc chuẩn trong Agile/Product: Theme (Chủ đề chiến lược) ➔ Epic (Mục tiêu lớn / Use Case) ➔ Feature (Tính năng) ➔ User Story (Câu chuyện người dùng nhỏ trong Sprint) ➔ Task (Tác vụ kỹ thuật).

---

#### Câu 39 (ad-c3-d2-039) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**[Outside] Tình huống: Ứng dụng giao hàng đồ ăn gọi Google Maps API để tính khoảng cách. Google Maps được mô hình hóa là:**

- **A.** Supporting Actor bên ngoài ranh giới hệ thống, cung cấp dịch vụ dữ liệu bản đồ cho Use Case
- **B.** Use Case con bên trong hệ thống và nối với Use Case tính phí vận chuyển bằng quan hệ <<extend>>
- **C.** Primary Actor vì Google Maps là người trực tiếp bỏ tiền ra trả phí đơn hàng đồ ăn cho khách hàng
- **D.** Internal Database Table chứa các bản ghi vị trí kinh độ vĩ độ lưu trữ trên ổ đĩa máy tính

> **Đáp án đúng:** **A** — *Supporting Actor bên ngoài ranh giới hệ thống, cung cấp dịch vụ dữ liệu bản đồ cho Use Case*
>
> **Giải thích chi tiết:** [Outside] Dịch vụ đám mây bên thứ ba (như Google Maps API) đóng vai trò Supporting / Secondary Actor nằm bên ngoài System Boundary, cung cấp dịch vụ tính toán tọa độ cho hệ thống.

---

#### Câu 40 (ad-c3-d2-040) — [🔴 KHÓ (VẬN DỤNG CAO)] [CASE-STUDY]

**[Outside] Tình huống: Khi phân tích hệ thống thương mại điện tử, cách nào giúp BA tránh bẫy CRUD Functional Decomposition?**

- **A.** Thiết kế Use Case theo mục tiêu người dùng hoàn chỉnh (như 'Checkout Order' thay vì chia lẻ từng nút bấm)
- **B.** Vẽ riêng từng Use Case cho mỗi câu lệnh SQL (INSERT, SELECT, UPDATE, DELETE) của bảng cơ sở dữ liệu
- **C.** Không cho phép người dùng thực hiện bất kỳ thao tác chỉnh sửa thông tin nào trên giao diện web
- **D.** Xóa bỏ hoàn toàn chức năng giỏ hàng và ép khách hàng phải gọi điện thoại trực tiếp để đặt hàng

> **Đáp án đúng:** **A** — *Thiết kế Use Case theo mục tiêu người dùng hoàn chỉnh (như 'Checkout Order' thay vì chia lẻ từng nút bấm)*
>
> **Giải thích chi tiết:** [Outside] Để tránh bẫy Functional Decomposition, BA phải tập trung vào User Goal trọn vẹn: ví dụ Use Case 'Checkout Order' bao gồm cả việc xem lại, nhập địa chỉ, chọn thanh toán và xác nhận đơn hàng.

---

