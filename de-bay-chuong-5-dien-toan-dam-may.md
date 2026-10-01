# BỘ ĐỀ BẪY 1 — CHƯƠNG 5: INFRASTRUCTURE AS A SERVICE (IaaS)
*(50 Câu hỏi Bẫy Vận dụng cao — 100% Hard — Phân tích Cơ chế Bẫy Tư duy & Đáp án Giải thích Chi tiết)*

- **Môn học:** Điện toán đám mây (Cloud Computing)
- **Chương:** Chương 5 — Infrastructure as a Service (IaaS)
- **Số lượng:** Đúng 50 câu hỏi trắc nghiệm
- **Độ khó:** 100% Vận dụng cao (Hard / Trick)
- **Chuẩn kỹ thuật:** Đáp ứng độ lệch chiều dài phương án $\Delta L = L_{\max} - L_{\min} \le 15$ ký tự, 100% có `trickDetails`

---

## 📌 PHẦN 1: KHÁI NIỆM CỐT LÕI & SHARED RESPONSIBILITY TRONG IAAS (Câu 1 - 7)

### Câu 1 (cloud-c5-d1-001)

**Theo định nghĩa học thuật chuẩn, bản chất cốt lõi của mô hình Infrastructure as a Service (IaaS) là gì?**

- **A.** Mô hình thuê tài nguyên phần cứng hạ tầng thô bao gồm máy chủ, lưu trữ và mạng qua Internet
- **B.** Mô hình thuê một phần mềm ứng dụng hoàn chỉnh để người dùng cuối sử dụng qua trình duyệt web
- **C.** Mô hình cung cấp môi trường lập trình và máy chủ web có sẵn để lập trình viên chỉ việc tải mã nguồn
- **D.** Mô hình mua đứt bản quyền vĩnh viễn các thiết bị máy tính vật lý và tự đặt tại văn phòng làm việc

> **Đáp án đúng:** **A** — *Mô hình thuê tài nguyên phần cứng hạ tầng thô bao gồm máy chủ, lưu trữ và mạng qua Internet*
>
> **Giải thích chi tiết:** IaaS (Hạ tầng như một Dịch vụ) là mô hình cung cấp các tài nguyên điện toán thô — máy chủ (Compute), bộ nhớ lưu trữ (Storage) và hạ tầng mạng (Networking) — cho phép người dùng thuê theo nhu cầu sử dụng thực tế (OPEX) thay vì tự mua sắm phần cứng (CAPEX).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm IaaS với SaaS (thuê ứng dụng cho người dùng cuối) hoặc PaaS (môi trường nền tảng lập trình).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy bản chất cung cấp tài nguyên hạ tầng thô (Compute, Storage, Network) của IaaS`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục I.1*
> - 💡 **Mẹo hóa giải:** IaaS = Thuê hạ tầng phần cứng thô (Compute + Storage + Network).

---

### Câu 2 (cloud-c5-d1-002)

**Trong mô hình trách nhiệm chia sẻ của IaaS, khách hàng chịu trách nhiệm tự quản lý 5 tầng kỹ thuật nào?**

- **A.** Nguồn điện lưới quốc gia, Hệ thống máy phát điện dự phòng, Máy làm mát và Vỏ tủ rack
- **B.** Ảo hóa phần cứng, Hệ thống máy chủ vật lý, Hệ thống lưu trữ thô và Thiết bị mạng lõi
- **C.** Hệ điều hành, Phần mềm trung gian (Middleware), Môi trường thực thi, Dữ liệu và Ứng dụng
- **D.** Đường cáp quang dưới biển, Trạm phát sóng vệ tinh, Cột ăng-ten viễn thông và Sợi thủy tinh

> **Đáp án đúng:** **C** — *Hệ điều hành, Phần mềm trung gian (Middleware), Môi trường thực thi, Dữ liệu và Ứng dụng*
>
> **Giải thích chi tiết:** Trong IaaS, nhà cung cấp quản lý 4 tầng hạ tầng dưới cùng: Ảo hóa, Máy chủ vật lý, Lưu trữ và Mạng. Khách hàng chịu trách nhiệm toàn bộ 5 tầng phía trên: Hệ điều hành (OS), Middleware, Runtime, Data và Applications.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ nhà cung cấp IaaS phải tự vá lỗi hệ điều hành và quản lý dữ liệu cho khách hàng.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy 5 tầng trách nhiệm của khách hàng trong IaaS: OS, Middleware, Runtime, Data, App`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục I.1*
> - 💡 **Mẹo hóa giải:** IaaS = Khách hàng quản lý từ Hệ điều hành (OS) trở lên đến Dữ liệu và Ứng dụng.

---

### Câu 3 (cloud-c5-d1-003)

**Tập hợp nào dưới đây phản ánh ĐẦY ĐỦ 5 thành phần cơ bản cấu thành nên kiến trúc IaaS theo bài giảng?**

- **A.** Chuột điều khiển, Bàn phím gõ, Màn hình hiển thị, Loa phát thanh và Dây cắm nguồn điện
- **B.** Máy chủ (Servers), Lưu trữ (Storage), Mạng (Networking), Ảo hóa và Quản lý tự động hóa
- **C.** Trình duyệt web, Phần mềm văn phòng, Trò chơi điện tử, Ứng dụng nghe nhạc và Xem phim
- **D.** Nhân viên bảo vệ, Kế toán trưởng, Giám đốc nhân sự, Nhân viên lễ tân và Đội vệ sinh

> **Đáp án đúng:** **B** — *Máy chủ (Servers), Lưu trữ (Storage), Mạng (Networking), Ảo hóa và Quản lý tự động hóa*
>
> **Giải thích chi tiết:** Theo tài liệu bài giảng chính thức, 5 thành phần cơ bản của IaaS gồm: (1) Servers (Máy chủ), (2) Storage (Lưu trữ), (3) Networking (Mạng), (4) Virtualization System (Hệ thống ảo hóa), (5) Management & Automation (Quản lý và tự động hóa IaC).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm các thành phần hạ tầng cốt lõi với thiết bị ngoại vi hoặc phần mềm người dùng cuối.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy 5 thành phần kỹ thuật cơ bản cấu thành kiến trúc IaaS`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục I.1*
> - 💡 **Mẹo hóa giải:** 5 thành phần IaaS = Servers + Storage + Networking + Virtualization + Management & Automation.

---

### Câu 4 (cloud-c5-d1-004)

**Nếu một công ty cần toàn quyền kiểm soát nhân hệ điều hành, cài đặt module kernel và thiết lập cổng mạng, họ phải chọn gì?**

- **A.** Chỉ được phép sử dụng máy tính bỏ túi cơ học cổ điển và không được kết nối mạng Internet
- **B.** Platform as a Service (PaaS) vì hệ thống đã khóa kín hệ điều hành để bảo vệ an toàn tối đa
- **C.** Software as a Service (SaaS) vì cho phép người dùng tự do biên dịch lại nhân Linux tùy ý
- **D.** Infrastructure as a Service (IaaS) vì cấp toàn quyền quản trị máy chủ từ tầng hệ điều hành

> **Đáp án đúng:** **D** — *Infrastructure as a Service (IaaS) vì cấp toàn quyền quản trị máy chủ từ tầng hệ điều hành*
>
> **Giải thích chi tiết:** Chỉ có IaaS mới cấp quyền root/administrator hệ điều hành, cho phép doanh nghiệp tự do tùy biến kernel, cài đặt bất kỳ phần mềm trung gian nào và thiết lập tường lửa. PaaS và SaaS đều trừu tượng hóa và khóa tầng hệ điều hành.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhầm lẫn giữa IaaS (toàn quyền OS) và PaaS (chỉ quản lý code ứng dụng, không có quyền root OS).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy quyền kiểm soát toàn diện tầng hệ điều hành và kernel trong IaaS`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục I.1*
> - 💡 **Mẹo hóa giải:** Cần quyền Root / can thiệp Hệ điều hành ➔ Bắt buộc phải chọn IaaS.

---

### Câu 5 (cloud-c5-d1-005)

**Thành phần "Management & Automation" trong IaaS mang lại năng lực vận hành mang tính đột phá nào?**

- **A.** Bắt buộc các kỹ sư CNTT phải ghi chép lại toàn bộ thông số máy chủ vào một cuốn sổ tay giấy
- **B.** Tự động viết toàn bộ các báo cáo tài chính doanh nghiệp để nộp cho cơ quan thuế nhà nước
- **C.** Tự động tắt nguồn máy tính của giám đốc nếu công ty không đạt chỉ tiêu doanh số bán hàng
- **D.** Quản lý qua bảng điều khiển Web, CLI và tự động hóa hạ tầng bằng mã nguồn (IaC như Terraform)

> **Đáp án đúng:** **D** — *Quản lý qua bảng điều khiển Web, CLI và tự động hóa hạ tầng bằng mã nguồn (IaC như Terraform)*
>
> **Giải thích chi tiết:** Management & Automation trong IaaS cung cấp API, giao diện điều khiển (Console), công cụ dòng lệnh (CLI) và giải pháp Khởi tạo hạ tầng bằng mã nguồn (Infrastructure as Code - IaC như Terraform, Ansible), giúp lập trình viên tự động triển khai hàng nghìn máy chủ trong vài phút.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm lẫn vai trò tự động hóa hạ tầng kỹ thuật với công việc kế toán hành chính.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy năng lực tự động hóa hạ tầng bằng mã nguồn (Infrastructure as Code - IaC)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục I.1*
> - 💡 **Mẹo hóa giải:** Management & Automation IaaS = Dashboard + CLI + Tự động hóa hạ tầng bằng code (IaC).

---

### Câu 6 (cloud-c5-d1-006)

**Về mặt tài chính, lợi thế vượt bậc của IaaS so với việc tự xây dựng trung tâm dữ liệu truyền thống là gì?**

- **A.** Doanh nghiệp được nhà cung cấp đám mây tặng miễn phí 100% tất cả các máy chủ vật lý đời mới
- **B.** Chuyển đổi hoàn toàn chi phí đầu tư mua sắm tài sản (CAPEX) sang chi phí vận hành linh hoạt (OPEX)
- **C.** Không bao giờ phải trả bất kỳ khoản phí dịch vụ nào cho nhà cung cấp trong suốt vòng đời sử dụng
- **D.** Bắt buộc doanh nghiệp phải đặt cọc toàn bộ vốn điều lệ của công ty cho nhà cung cấp đám mây

> **Đáp án đúng:** **B** — *Chuyển đổi hoàn toàn chi phí đầu tư mua sắm tài sản (CAPEX) sang chi phí vận hành linh hoạt (OPEX)*
>
> **Giải thích chi tiết:** Thay vì phải chi hàng triệu USD vốn đầu tư ban đầu (CAPEX) để mua máy chủ, thiết bị mạng, hệ thống UPS và điều hòa phòng máy, doanh nghiệp dùng IaaS chỉ cần trả chi phí vận hành (OPEX) theo lưu lượng thực tế sử dụng (Pay-as-you-go).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Học viên dễ bị bẫy đảo chiều giữa CAPEX và OPEX hoặc chọn các phương án tặng máy miễn phí phi lý.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy chuyển đổi mô hình tài chính từ CAPEX sang OPEX trong IaaS`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục I.1 & VII.1*
> - 💡 **Mẹo hóa giải:** Lợi thế tài chính IaaS = Chuyển từ CAPEX (mua sắm tài sản lớn) sang OPEX (thuê bao linh hoạt).

---

### Câu 7 (cloud-c5-d1-007)

**Ai là người chịu trách nhiệm chính trong việc sao lưu dữ liệu và cài đặt các bản vá bảo mật OS trên máy ảo IaaS?**

- **A.** Khách hàng thuê dịch vụ phải tự thiết lập lịch sao lưu và tự tải, cài các bản vá bảo mật OS
- **B.** Nhà cung cấp đám mây tự động cập nhật hệ điều hành và tự sao lưu dữ liệu cho khách hàng
- **C.** Cơ quan quản lý an ninh mạng quốc gia sẽ cử người đến tận nơi để cài đặt bản vá hàng tuần
- **D.** Không ai cần phải làm gì vì các máy ảo trên đám mây có khả năng miễn nhiễm với mọi loại virus

> **Đáp án đúng:** **A** — *Khách hàng thuê dịch vụ phải tự thiết lập lịch sao lưu và tự tải, cài các bản vá bảo mật OS*
>
> **Giải thích chi tiết:** Trong mô hình IaaS, nhà cung cấp chỉ bảo đảm phần cứng và tầng ảo hóa hoạt động liên tục. Toàn bộ việc vá lỗi bảo mật hệ điều hành máy ảo (OS patching), cấu hình tường lửa cục bộ và lập kế hoạch sao lưu dữ liệu (Backup) là trách nhiệm 100% của khách hàng.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người lầm tưởng nhà cung cấp IaaS sẽ tự động vá lỗi hệ điều hành như trong mô hình PaaS hoặc SaaS.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy trách nhiệm vá lỗi OS và sao lưu dữ liệu thuộc về khách hàng trong IaaS`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục I.1 & VIII.1*
> - 💡 **Mẹo hóa giải:** Trên IaaS: Khách hàng tự cài OS ➔ Khách hàng PHẢI TỰ VÁ LỖI OS VÀ TỰ SAO LƯU DỮ LIỆU.

---

## 📌 PHẦN 2: BA TRỤ CỘT HẠ TẦNG IAAS: COMPUTE, STORAGE, NETWORK (Câu 8 - 15)

### Câu 8 (cloud-c5-d1-008)

**Đặc trưng kỹ thuật mang tính định danh của máy chủ vật lý Bare-metal (Physical Server) trong IaaS là gì?**

- **A.** Thiết bị máy tính mini xách tay có kích thước nhỏ gọn được cắm nguồn điện qua cổng sạc USB
- **B.** Máy chủ ảo được tạo ra bởi phần mềm ảo hóa và chia sẻ chung tài nguyên CPU với người khác
- **C.** Máy chủ vật lý dành riêng cho một khách hàng, chạy trực tiếp trên phần cứng không qua ảo hóa
- **D.** Hệ thống máy chủ chỉ được phép hoạt động vào ban ngày và tự động tắt nguồn vào ban đêm

> **Đáp án đúng:** **C** — *Máy chủ vật lý dành riêng cho một khách hàng, chạy trực tiếp trên phần cứng không qua ảo hóa*
>
> **Giải thích chi tiết:** Bare-metal Server là máy chủ vật lý chuyên dụng (đơn người thuê - Single-tenant), không cài đặt bất kỳ lớp ảo hóa Hypervisor nào ở giữa. Hệ điều hành chạy trực tiếp trên phần cứng vật lý, mang lại hiệu năng tối đa 100%.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm Bare-metal với máy ảo chuyên dụng (Dedicated VM - vẫn có lớp ảo hóa).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy bản chất không qua lớp ảo hóa Hypervisor của Bare-metal Server`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục II.1*
> - 💡 **Mẹo hóa giải:** Bare-metal = Máy chủ vật lý thật, KHÔNG QUA ẢO HÓA (No Hypervisor), hiệu năng thuần 100%.

---

### Câu 9 (cloud-c5-d1-009)

**Ưu thế kỹ thuật vượt trội nhất của máy chủ Bare-metal so với các máy chủ ảo thông thường là gì?**

- **A.** Giá thuê hàng tháng rẻ hơn gấp mười lần so với việc thuê một máy chủ ảo chia sẻ thông thường
- **B.** Loại bỏ hoàn toàn độ trễ ảo hóa (Virtualization Overhead) và triệt tiêu nguy cơ Noisy Neighbor
- **C.** Thời gian cấp phát máy chủ diễn ra tức thì chỉ trong vòng một phần nghìn giây sau khi nhấn chuột
- **D.** Khách hàng không cần phải trả tiền điện và tiền đường truyền mạng Internet cho nhà cung cấp

> **Đáp án đúng:** **B** — *Loại bỏ hoàn toàn độ trễ ảo hóa (Virtualization Overhead) và triệt tiêu nguy cơ Noisy Neighbor*
>
> **Giải thích chi tiết:** Vì không có lớp phần mềm Hypervisor trung gian, Bare-metal Server giải phóng toàn bộ năng lực phần cứng, không bị mất hiệu năng do ảo hóa (No overhead) và do chỉ có một người dùng duy nhất nên triệt tiêu hoàn toàn vấn đề Noisy Neighbor.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm là Bare-metal có giá rẻ hơn hoặc cấp phát nhanh hơn máy ảo (thực tế Bare-metal đắt hơn và cấp phát lâu hơn).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy ưu điểm triệt tiêu Virtualization Overhead và Noisy Neighbor của Bare-metal`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục II.1*
> - 💡 **Mẹo hóa giải:** Ưu thế Bare-metal = Hiệu năng thuần cực đại + Không trễ ảo hóa + Không có Noisy Neighbor.

---

### Câu 10 (cloud-c5-d1-010)

**Bản chất kỹ thuật của loại máy chủ Dedicated Virtual Server (Máy ảo chuyên dụng) trong IaaS là gì?**

- **A.** Máy ảo chạy trên một máy chủ vật lý chuyên dụng dành riêng cho một khách hàng duy nhất
- **B.** Máy chủ vật lý thật không cài đặt bất kỳ phần mềm ảo hóa nào và chạy trực tiếp hệ điều hành
- **C.** Máy ảo dùng chung phần cứng vật lý với hàng trăm khách hàng xa lạ khác trong trung tâm dữ liệu
- **D.** Ứng dụng phần mềm văn phòng được mở trong một cửa sổ trình duyệt web của người dùng cuối

> **Đáp án đúng:** **A** — *Máy ảo chạy trên một máy chủ vật lý chuyên dụng dành riêng cho một khách hàng duy nhất*
>
> **Giải thích chi tiết:** Dedicated Virtual Server (hoặc Dedicated Host) là giải pháp kết hợp: người dùng vẫn tận dụng được sự linh hoạt của máy ảo (VM), nhưng máy ảo này được cam kết chạy trên một máy chủ vật lý riêng biệt không chia sẻ với bất kỳ khách hàng nào khác.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm Dedicated Virtual Server với Physical Server (Bare-metal) hoặc Shared VM.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy bản chất máy ảo chạy trên phần cứng vật lý riêng của Dedicated Virtual Server`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục II.1*
> - 💡 **Mẹo hóa giải:** Dedicated Virtual Server = Vẫn là máy ảo, nhưng nằm trên máy chủ vật lý riêng 1-1.

---

### Câu 11 (cloud-c5-d1-011)

**Đặc điểm nào dưới đây là lợi thế cạnh tranh cốt lõi của Shared Virtual Server (Máy ảo dùng chung)?**

- **A.** Nhà cung cấp cam kết bồi thường 100% doanh thu nếu ứng dụng của khách hàng gặp sự cố dừng máy
- **B.** Được sở hữu riêng toàn bộ dàn máy chủ vật lý khổng lồ đặt tại trung tâm dữ liệu của hãng
- **C.** Hiệu năng xử lý đồ họa luôn đạt mức tối đa và không bao giờ bị ảnh hưởng bởi người khác
- **D.** Chi phí thuê cực rẻ, cấp phát linh hoạt trong vài giây và co giãn tài nguyên vô cùng nhanh chóng

> **Đáp án đúng:** **D** — *Chi phí thuê cực rẻ, cấp phát linh hoạt trong vài giây và co giãn tài nguyên vô cùng nhanh chóng*
>
> **Giải thích chi tiết:** Shared Virtual Server là mô hình phổ biến nhất của đám mây công cộng (AWS EC2 tiêu chuẩn): nhiều máy ảo chia sẻ phần cứng vật lý, giúp tối ưu hóa chi phí đến mức tối đa, khởi tạo chỉ mất vài giây và mở rộng linh hoạt theo nhu cầu.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm lẫn ưu điểm giá rẻ và tốc độ cấp phát của Shared VM với các đặc tính của máy chủ riêng.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy lợi thế chi phí rẻ và cấp phát siêu tốc của Shared Virtual Server`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục II.1*
> - 💡 **Mẹo hóa giải:** Shared Virtual Server = Chi phí rẻ nhất, cấp phát trong vài giây, co giãn linh hoạt nhất.

---

### Câu 12 (cloud-c5-d1-012)

**So sánh về thời gian cấp phát (Provisioning Time), trật tự từ NHANH NHẤT đến CHẬM NHẤT là gì?**

- **A.** Dedicated Virtual Server ➔ Physical Server (Bare-metal) ➔ Shared Virtual Server
- **B.** Physical Server (Bare-metal) ➔ Shared Virtual Server ➔ Dedicated Virtual Server
- **C.** Shared Virtual Server ➔ Dedicated Virtual Server ➔ Physical Server (Bare-metal)
- **D.** Physical Server (Bare-metal) ➔ Dedicated Virtual Server ➔ Shared Virtual Server

> **Đáp án đúng:** **C** — *Shared Virtual Server ➔ Dedicated Virtual Server ➔ Physical Server (Bare-metal)*
>
> **Giải thích chi tiết:** Shared VM được tạo từ tài nguyên ảo hóa có sẵn nên chỉ mất vài chục giây; Dedicated VM mất vài phút để cô lập phần cứng; còn Bare-metal Server phải nạp cấu hình phần cứng vật lý thực tế nên mất từ 15 đến hàng chục phút.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay tưởng máy chủ vật lý Bare-metal chạy nhanh hơn thì cũng được khởi tạo nhanh hơn.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy trật tự thời gian khởi tạo cấp phát giữa Shared VM, Dedicated VM và Bare-metal`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục II.1*
> - 💡 **Mẹo hóa giải:** Thời gian cấp phát: Shared VM (vài giây) < Dedicated VM (vài phút) < Bare-metal (hàng chục phút).

---

### Câu 13 (cloud-c5-d1-013)

**Kịch bản ứng dụng nào dưới đây BẮT BUỘC HOẶC ƯU TIÊN SỐ 1 việc lựa chọn máy chủ Bare-metal Server?**

- **A.** Môi trường kiểm thử mã nguồn tạm thời của sinh viên thực tập trong thời gian hai tiếng đồng hồ
- **B.** Trang web giới thiệu sản phẩm của một cửa hàng tạp hóa nhỏ có vài chục lượt truy cập mỗi ngày
- **C.** Cơ sở dữ liệu In-memory quy mô siêu lớn, Tính toán hiệu năng cao (HPC) và Ảo hóa lồng nhau
- **D.** Hệ thống lưu trữ ảnh đại diện cá nhân của các tài khoản mạng xã hội không đòi hỏi tốc độ cao

> **Đáp án đúng:** **C** — *Cơ sở dữ liệu In-memory quy mô siêu lớn, Tính toán hiệu năng cao (HPC) và Ảo hóa lồng nhau*
>
> **Giải thích chi tiết:** Bare-metal Server đắt đỏ nên chỉ dành cho các tác vụ đòi hỏi hiệu năng phần cứng tối thượng: CSDL giao dịch tài chính khổng lồ (SAP HANA, Oracle RAC), tính toán khoa học HPC, học sâu AI, hoặc Nested Virtualization (chạy Hypervisor trên máy chủ).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ chọn các ứng dụng web đơn giản hoặc môi trường test ngắn hạn vốn chỉ cần Shared VM giá rẻ.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy kịch bản ứng dụng thực tế tối ưu của Bare-metal Server (HPC, In-memory DB)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục II.1*
> - 💡 **Mẹo hóa giải:** Bare-metal = Dành cho tác vụ nặng nhất: HPC, In-memory DB (SAP HANA), Nested Virtualization.

---

### Câu 14 (cloud-c5-d1-014)

**Hiện tượng suy giảm hiệu năng do "Noisy Neighbor" (Hàng xóm ồn ào) THƯỜNG XẢY RA TRÊN LOẠI MÁY CHỦ NÀO?**

- **A.** Shared Virtual Server (Máy ảo chia sẻ tài nguyên phần cứng vật lý dùng chung)
- **B.** Physical Server (Máy chủ vật lý Bare-metal chạy độc lập không qua ảo hóa)
- **C.** Dedicated Virtual Server (Máy ảo chạy trên máy chủ vật lý dành riêng 1-1)
- **D.** Máy tính cá nhân của lập trình viên được rút hoàn toàn dây cáp mạng ra ngoài

> **Đáp án đúng:** **A** — *Shared Virtual Server (Máy ảo chia sẻ tài nguyên phần cứng vật lý dùng chung)*
>
> **Giải thích chi tiết:** Hiện tượng Noisy Neighbor chỉ xảy ra trên môi trường dùng chung (Shared Virtual Server / Multi-tenancy), khi một máy ảo của khách hàng khác tiêu thụ đột biến tài nguyên CPU, RAM hoặc I/O làm ảnh hưởng tới các máy ảo xung quanh.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Học viên dễ nhầm lẫn sang Bare-metal hoặc Dedicated VM (vốn đã được cô lập phần cứng 100% nên không bị Noisy Neighbor).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy môi trường xảy ra hiện tượng Noisy Neighbor chỉ có ở Shared Virtual Server`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục II.1*
> - 💡 **Mẹo hóa giải:** Noisy Neighbor CHỈ XẢY RA TRÊN Shared Virtual Server (máy ảo dùng chung phần cứng).

---

### Câu 15 (cloud-c5-d1-015)

**Đặc điểm kỹ thuật cốt lõi phân biệt Block Storage (như AWS EBS, Azure Disk) với các loại lưu trữ khác là gì?**

- **A.** Chỉ cho phép lưu trữ các tệp tin có dung lượng nhỏ hơn một Kilobyte và tự xóa sau một ngày
- **B.** Dữ liệu được lưu trữ dạng trang web tĩnh và chỉ có thể đọc được thông qua đường link URL mạng
- **C.** Dữ liệu được in trực tiếp ra các cuộn băng từ tính cổ điển và lưu trữ trong kho chống cháy
- **D.** Dữ liệu được chia thành các khối thô (Blocks), độ trễ cực thấp, dùng để cài OS và CSDL quan hệ

> **Đáp án đúng:** **D** — *Dữ liệu được chia thành các khối thô (Blocks), độ trễ cực thấp, dùng để cài OS và CSDL quan hệ*
>
> **Giải thích chi tiết:** Block Storage hoạt động như một ổ đĩa cứng vật lý gắn trực tiếp vào máy chủ (SAN). Dữ liệu được chia thành các khối (blocks) cố định, giao tiếp qua giao thức khối (iSCSI, Fibre Channel), cung cấp IOPS cao và độ trễ thấp nhất để cài đặt hệ điều hành và CSDL.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm Block Storage với Object Storage (lưu file qua URL) hoặc File Storage.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy đặc trưng kỹ thuật phân đoạn khối thô (Raw Blocks) của Block Storage`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** Block Storage = Ổ cứng ảo gắn máy chủ ➔ Tốc độ cao, IOPS cao, dùng cài OS & CSDL quan hệ.

---

## 📌 PHẦN 3: LỢI ÍCH KINH TẾ & KỸ THUẬT CỦA IAAS (Câu 16 - 22)

### Câu 16 (cloud-c5-d1-016)

**Đặc trưng cấu trúc tổ chức dữ liệu của hệ thống File Storage (như Cloud NAS, AWS EFS) là gì?**

- **A.** Dữ liệu được lưu trữ hoàn toàn phẳng không có bất kỳ thư mục nào và chỉ đánh số ID duy nhất
- **B.** Dữ liệu được tổ chức theo cấu trúc cây thư mục phân cấp (Hierarchical Directory Tree)
- **C.** Dữ liệu được cắt nhỏ thành các mảnh vụn ngẫu nhiên và phân tán trên các máy chủ trên toàn cầu
- **D.** Dữ liệu được mã hóa thành các ký tự tiếng Latin cổ và chỉ có thể giải mã bằng mắt thường

> **Đáp án đúng:** **B** — *Dữ liệu được tổ chức theo cấu trúc cây thư mục phân cấp (Hierarchical Directory Tree)*
>
> **Giải thích chi tiết:** File Storage tổ chức dữ liệu theo cây thư mục phân cấp quen thuộc (Files, Folders, Subfolders) với các đường dẫn tệp tin rõ ràng, hỗ trợ truy cập chia sẻ đồng thời qua các giao thức mạng chuẩn như NFS hoặc SMB.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhầm lẫn giữa cấu trúc cây thư mục của File Storage với không gian tên phẳng (Flat namespace) của Object Storage.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy cấu trúc cây thư mục phân cấp (Hierarchical Tree) của File Storage`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** File Storage = Cấu trúc cây thư mục phân cấp (Folder/File) như ổ đĩa chia sẻ mạng.

---

### Câu 17 (cloud-c5-d1-017)

**Phương thức truy cập và cấu trúc không gian tên (Namespace) của Object Storage (như AWS S3) là gì?**

- **A.** Không gian tên phẳng (Flat namespace), gán Metadata tùy biến và truy cập qua HTTP REST API
- **B.** Cấu trúc cây thư mục lồng nhau hàng trăm tầng và bắt buộc truy cập qua cổng cáp quang nối tiếp
- **C.** Được truy cập trực tiếp thông qua các chân cắm vật lý trên bo mạch chủ của máy chủ vật lý
- **D.** Chỉ được truy cập thông qua các dòng lệnh trong môi trường chế độ dòng lệnh MS-DOS cổ điển

> **Đáp án đúng:** **A** — *Không gian tên phẳng (Flat namespace), gán Metadata tùy biến và truy cập qua HTTP REST API*
>
> **Giải thích chi tiết:** Object Storage lưu trữ dữ liệu dưới dạng các Object độc lập trong một không gian phẳng (Flat namespace - không có thư mục thực sự). Mỗi đối tượng gồm: Data, Metadata tùy biến và Unique ID, truy cập qua giao thức Web chuẩn (HTTP/HTTPS REST API: GET, PUT, DELETE).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ các folder trên S3 là thư mục thực sự (thực tế chỉ là tiền tố chuỗi Prefix trong key).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy không gian tên phẳng (Flat namespace) và giao thức HTTP REST API của Object Storage`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** Object Storage = Flat namespace + Metadata + Unique ID + Truy cập qua HTTP REST API.

---

### Câu 18 (cloud-c5-d1-018)

**Hạn chế kiến trúc mang tính bản chất nào dưới đây khiến Object Storage KHÔNG THỂ THAY THẾ Block Storage?**

- **A.** Dung lượng lưu trữ bị giới hạn tối đa ở mức 10 Megabyte và không thể mở rộng thêm dung lượng
- **B.** Không thể cài đặt hệ điều hành để boot máy chủ và không hỗ trợ sửa đổi từng phần của tệp tin
- **C.** Tốc độ tải dữ liệu qua mạng bị nhà cung cấp giới hạn không được vượt quá một Kilobyte mỗi giây
- **D.** Chỉ cho phép lưu trữ duy nhất các tệp tin văn bản thuần túy và cấm hoàn toàn lưu trữ hình ảnh

> **Đáp án đúng:** **B** — *Không thể cài đặt hệ điều hành để boot máy chủ và không hỗ trợ sửa đổi từng phần của tệp tin*
>
> **Giải thích chi tiết:** Object Storage có độ trễ cao hơn Block Storage, không thể mount như một phân vùng đĩa để boot OS. Đặc biệt, Object Storage là bất biến (Immutable): muốn sửa một ký tự trong file 5GB, hệ thống phải tải lên ghi đè toàn bộ tệp 5GB chứ không sửa từng block được.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay tưởng Object Storage hoàn hảo có thể thay thế hoàn toàn mọi loại ổ đĩa trên máy tính.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy giới hạn không thể boot hệ điều hành và không sửa đổi từng phần của Object Storage`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** Object Storage KHÔNG THỂ: Boot hệ điều hành; KHÔNG THỂ: Sửa đổi một phần của tệp tin.

---

### Câu 19 (cloud-c5-d1-019)

**Dịch vụ nào dưới đây là lựa chọn lưu trữ TỐI ƯU NHẤT để lưu trữ hàng triệu video bài giảng trực tuyến?**

- **A.** Bộ nhớ RAM của máy chủ ảo vì tốc độ truy xuất video nhanh nhất và không tốn tiền lưu trữ
- **B.** Block Storage (AWS EBS) vì giá thành rẻ nhất khi lưu trữ dữ liệu quy mô hàng trăm Terabyte
- **C.** Object Storage (AWS S3, Google Cloud Storage) vì dung lượng vô hạn, giá rẻ và phân phối toàn cầu
- **D.** Đĩa mềm 1.44MB vì tính năng bảo mật tuyệt đối không thể bị nhiễm mã độc qua đường mạng

> **Đáp án đúng:** **C** — *Object Storage (AWS S3, Google Cloud Storage) vì dung lượng vô hạn, giá rẻ và phân phối toàn cầu*
>
> **Giải thích chi tiết:** Object Storage (S3, GCS) là giải pháp hoàn hảo cho dữ liệu phi cấu trúc dung lượng khổng lồ (video, ảnh, tài liệu): khả năng mở rộng vô hạn (Exabytes), độ bền 99.999999999% (11 số 9), chi phí trên mỗi GB cực rẻ và tích hợp sẵn CDN phân phối toàn cầu.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhầm lẫn sang Block Storage (EBS rất đắt nếu lưu hàng trăm TB video) hoặc RAM (mất dữ liệu khi tắt máy).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy lựa chọn loại lưu trữ tối ưu cho dữ liệu phi cấu trúc quy mô lớn (Video, Audio)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** Lưu trữ hàng triệu video/ảnh/backup lớn ➔ Bắt buộc dùng Object Storage (AWS S3, GCS).

---

### Câu 20 (cloud-c5-d1-020)

**Khi triển khai hệ quản trị CSDL quan hệ (MySQL, PostgreSQL) yêu cầu xử lý giao dịch IOPS cực cao, ta nên chọn loại nào?**

- **A.** Lưu tạm thời dữ liệu lên bộ nhớ đệm của trình duyệt web của nhân viên trực quầy thu ngân
- **B.** Object Storage (AWS S3 Standard) để tận dụng đường dẫn truy cập qua giao thức mạng HTTP
- **C.** Hệ thống tệp tin Cloud NAS chia sẻ qua mạng nội bộ để nhiều máy chủ cùng truy cập vào file DB
- **D.** Block Storage (Provisioned IOPS SSD) để đảm bảo tốc độ đọc ghi đĩa nhanh nhất với độ trễ thấp nhất

> **Đáp án đúng:** **D** — *Block Storage (Provisioned IOPS SSD) để đảm bảo tốc độ đọc ghi đĩa nhanh nhất với độ trễ thấp nhất*
>
> **Giải thích chi tiết:** Cơ sở dữ liệu giao dịch (OLTP) đòi hỏi độ trễ đọc ghi cực thấp (tính bằng mili-giây) và số lượng phép đọc ghi mỗi giây (IOPS) rất lớn. Block Storage (như AWS EBS io2, gp3) là lựa chọn duy nhất đáp ứng được yêu cầu này.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn Object Storage vì nghĩ dung lượng lớn, hoặc chọn NAS mà không biết NAS có độ trễ mạng cao.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy giải pháp lưu trữ tối ưu cho CSDL quan hệ giao dịch cao (High IOPS Block Storage)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** CSDL quan hệ cần IOPS cao ➔ Chọn Block Storage (Provisioned IOPS SSD).

---

### Câu 21 (cloud-c5-d1-021)

**Nếu nhiều máy chủ web cần đọc và ghi đồng thời vào một thư mục chứa mã nguồn dùng chung, giải pháp nào phù hợp nhất?**

- **A.** File Storage (Cloud NAS như AWS EFS) hỗ trợ kết nối đồng thời từ nhiều máy chủ qua giao thức NFS
- **B.** Block Storage tiêu chuẩn gắn cổng đơn vì chỉ cho phép duy nhất một máy ảo kết nối tại một thời điểm
- **C.** Gửi tệp tin đính kèm qua email cá nhân cho từng máy chủ mỗi khi có thay đổi mã nguồn mới
- **D.** Chép mã nguồn vào thẻ nhớ điện thoại rồi đem cắm thủ công lần lượt vào từng máy chủ vật lý

> **Đáp án đúng:** **A** — *File Storage (Cloud NAS như AWS EFS) hỗ trợ kết nối đồng thời từ nhiều máy chủ qua giao thức NFS*
>
> **Giải thích chi tiết:** File Storage (như AWS EFS, Azure Files) được thiết kế đặc thù cho mô hình Multi-attach (hàng trăm máy chủ ảo cùng mount một thư mục mạng qua NFS/SMB để chia sẻ dữ liệu đồng thời). Block Storage thông thường chỉ cho phép 1 máy ảo gắn đĩa.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm là Block Storage cũng cho phép nhiều máy chủ đọc ghi tự do (thực tế Block Storage bị khóa đơn máy chủ).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy khả năng chia sẻ đồng thời nhiều máy chủ (Multi-instance) của File Storage`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1 & VI.1*
> - 💡 **Mẹo hóa giải:** Nhiều máy chủ cùng đọc ghi vào 1 thư mục dùng chung ➔ Chọn File Storage (Cloud NAS).

---

### Câu 22 (cloud-c5-d1-022)

**Chức năng cốt lõi của thiết bị Cân bằng tải (Load Balancer) trong kiến trúc hạ tầng IaaS là gì?**

- **A.** Cân đo trọng lượng vật lý của các tủ rack xem có bị vượt quá tải trọng chịu lực của sàn nhà
- **B.** Tự động tăng tốc độ quay của quạt làm mát trong phòng máy chủ khi nhiệt độ môi trường tăng lên
- **C.** Phân phối đều lưu lượng truy cập qua nhóm máy chủ backend và loại bỏ điểm lỗi đơn độc (SPoF)
- **D.** Tự động cắt điện toàn bộ hệ thống máy tính nếu phát hiện có nhân viên truy cập mạng xã hội

> **Đáp án đúng:** **C** — *Phân phối đều lưu lượng truy cập qua nhóm máy chủ backend và loại bỏ điểm lỗi đơn độc (SPoF)*
>
> **Giải thích chi tiết:** Load Balancer đóng vai trò là cửa ngõ điều phối, tiếp nhận toàn bộ lưu lượng truy cập từ client và phân phối đồng đều đến cụm máy chủ backend, giúp tối ưu tài nguyên, nâng cao tính sẵn sàng (HA) và triệt tiêu Single Point of Failure (SPoF).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay suy diễn nghĩa đen từ "cân bằng tải" thành cân trọng lượng cơ học hoặc chỉnh quạt gió.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy nghĩa đen của thuật ngữ Cân bằng tải (Load Balancing) trong hạ tầng đám mây`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục IV.1*
> - 💡 **Mẹo hóa giải:** Load Balancer = Điều phối lưu lượng mạng đều qua cụm server ➔ Loại bỏ SPoF, tăng HA.

---

## 📌 PHẦN 4: THÁCH THỨC, RỦI RO BẢO MẬT & QUẢN TRỊ IAAS (Câu 23 - 29)

### Câu 23 (cloud-c5-d1-023)

**Thuật toán cân bằng tải Round Robin hoạt động theo nguyên tắc phân bổ lưu lượng nào dưới đây?**

- **A.** Chuyển toàn bộ tất cả các yêu cầu đến duy nhất một máy chủ mạnh nhất cho đến khi máy chủ đó bị sập
- **B.** Phân bổ tuần tự luần lượt các yêu cầu đến từng máy chủ theo một vòng tròn khép kín (1 ➔ 2 ➔ 3 ➔ 1)
- **C.** Lựa chọn ngẫu nhiên một máy chủ bất kỳ mà không cần quan tâm đến thứ tự hay trạng thái hoạt động
- **D.** Đo nhiệt độ của chip vi xử lý để chọn máy chủ nào đang mát nhất thì mới chuyển yêu cầu đến

> **Đáp án đúng:** **B** — *Phân bổ tuần tự luần lượt các yêu cầu đến từng máy chủ theo một vòng tròn khép kín (1 ➔ 2 ➔ 3 ➔ 1)*
>
> **Giải thích chi tiết:** Round Robin là thuật toán đơn giản nhất: điều phối các request lần lượt tuần tự theo vòng tròn (Server 1 ➔ Server 2 ➔ Server 3 ➔ Server 1), cực kỳ hiệu quả khi các máy chủ có cấu hình phần cứng ngang nhau và tác vụ xử lý đồng đều.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm Round Robin với thuật toán chọn ngẫu nhiên (Random) hoặc chọn theo tải động.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy nguyên lý điều phối tuần tự vòng tròn của thuật toán Round Robin`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục IV.1*
> - 💡 **Mẹo hóa giải:** Round Robin = Tuần tự xoay vòng tròn (1 ➔ 2 ➔ 3 ➔ 1).

---

### Câu 24 (cloud-c5-d1-024)

**Thuật toán Least Connections được đánh giá là tối ưu vượt trội hơn Round Robin trong trường hợp nào?**

- **A.** Khi hệ thống chỉ có duy nhất một máy chủ đơn lẻ hoạt động và không có bất kỳ máy chủ dự phòng nào
- **B.** Khi toàn bộ tất cả các yêu cầu gửi đến máy chủ đều là các tệp tin hình ảnh có dung lượng bằng nhau
- **C.** Khi tất cả các máy chủ trong cụm đều bị mất kết nối mạng và không thể tiếp nhận thêm dữ liệu mới
- **D.** Khi các yêu cầu xử lý có thời gian chiếm dụng kết nối kéo dài không đều nhau (Streaming, DB)

> **Đáp án đúng:** **D** — *Khi các yêu cầu xử lý có thời gian chiếm dụng kết nối kéo dài không đều nhau (Streaming, DB)*
>
> **Giải thích chi tiết:** Least Connections chuyển request mới đến server đang có số kết nối hiện tại thấp nhất. Với các tác vụ nặng kéo dài (như stream video, giao dịch ngân hàng phức tạp), Round Robin sẽ gây quá tải máy chủ bị nghẽn request dài, trong khi Least Connections cân bằng tải chính xác.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ Round Robin luôn tối ưu trong mọi trường hợp mà bỏ qua yếu tố thời lượng kết nối.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy ưu thế của thuật ngữ Least Connections khi xử lý kết nối kéo dài`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục IV.1*
> - 💡 **Mẹo hóa giải:** Kết nối dài / tải không đều (Streaming, Database) ➔ Chọn Least Connections.

---

### Câu 25 (cloud-c5-d1-025)

**Thuật toán IP Hash trong cân bằng tải được thiết kế chuyên biệt để giải quyết bài toán nghiệp vụ nào?**

- **A.** Tự động đổi địa chỉ IP của máy chủ sang một quốc gia khác để tránh bị chặn truy cập mạng
- **B.** Duy trì trạng thái phiên làm việc (Sticky Session / Session Affinity) cho từng khách hàng cố định
- **C.** Mã hóa toàn bộ địa chỉ IP của người dùng thành các đoạn mật khẩu bảo mật dài 100 ký tự
- **D.** Phát hiện và ngăn chặn các cuộc gọi điện thoại lừa đảo qua mạng viễn thông di động quốc tế

> **Đáp án đúng:** **B** — *Duy trì trạng thái phiên làm việc (Sticky Session / Session Affinity) cho từng khách hàng cố định*
>
> **Giải thích chi tiết:** IP Hash băm địa chỉ IP nguồn của client để luôn điều hướng các request từ client đó về đúng một máy chủ backend cố định. Điều này giúp duy trì trạng thái phiên (Session State, giỏ hàng) trên máy chủ mà không cần dùng cụm cache tập trung.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm IP Hash là kỹ thuật đổi IP ẩn danh hoặc kỹ thuật chống cuộc gọi rác.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy bài toán duy trì phiên làm việc Sticky Session của thuật toán IP Hash`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục IV.1*
> - 💡 **Mẹo hóa giải:** IP Hash = Băm IP nguồn ➔ Khách hàng luôn vào đúng 1 server cũ (Sticky Session).

---

### Câu 26 (cloud-c5-d1-026)

**Cơ chế "Kiểm tra sức khỏe tự động" (Health Check) của Load Balancer hoạt động như thế nào khi một server bị sập?**

- **A.** Tự động phát hiện máy chủ không phản hồi và ngừng chuyển hướng lưu lượng truy cập tới máy chủ đó
- **B.** Tự động gửi nhân viên kỹ thuật đến tận nhà của người truy cập để sửa chữa máy tính cá nhân
- **C.** Ngừng toàn bộ hoạt động của tất cả các máy chủ còn lại trong cụm và phát tín hiệu báo động
- **D.** Tự động gửi thông báo lên đài truyền hình quốc gia để cảnh báo cho tất cả người dân biết

> **Đáp án đúng:** **A** — *Tự động phát hiện máy chủ không phản hồi và ngừng chuyển hướng lưu lượng truy cập tới máy chủ đó*
>
> **Giải thích chi tiết:** Load Balancer gửi tín hiệu kiểm tra định kỳ (HTTP GET /health, TCP ping). Khi một máy chủ backend gặp sự cố và không trả về HTTP 200 OK, Load Balancer lập tức đánh dấu unhealthy và cô lập máy chủ đó, chỉ điều phối traffic đến các máy chủ khỏe mạnh còn lại.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn các hành động báo động cực đoan (dừng toàn bộ hệ thống hoặc báo truyền hình).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy cơ chế cô lập máy chủ hỏng tự động của tính năng Health Check`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục IV.1*
> - 💡 **Mẹo hóa giải:** Health Check = Server lỗi ➔ Tự động loại bỏ khỏi cụm, không gửi khách vào máy hỏng.

---

### Câu 27 (cloud-c5-d1-027)

**Lợi ích của việc áp dụng Load Balancer trong quá trình bảo trì và nâng cấp phần mềm máy chủ là gì?**

- **A.** Cho phép máy chủ hoạt động bình thường mà không cần cung cấp nguồn điện lưới trong suốt một năm
- **B.** Giúp lập trình viên không cần viết mã nguồn nâng cấp mà hệ thống tự động suy nghĩ ra phiên bản mới
- **C.** Tự động xóa sạch toàn bộ mã nguồn cũ và bắt buộc khách hàng phải sử dụng giao diện phần mềm mới
- **D.** Cho phép rút từng máy chủ ra bảo trì lần lượt mà hệ thống vẫn duy trì hoạt động 100% (Zero-downtime)

> **Đáp án đúng:** **D** — *Cho phép rút từng máy chủ ra bảo trì lần lượt mà hệ thống vẫn duy trì hoạt động 100% (Zero-downtime)*
>
> **Giải thích chi tiết:** Với Load Balancer, ta có thể áp dụng chiến lược Rolling Update: rút Server 1 ra khỏi cụm (Load Balancer ngừng chuyển traffic vào), tiến hành nâng cấp vá lỗi, sau đó đưa trở lại cụm rồi làm tiếp Server 2. Quá trình này không gây gián đoạn dịch vụ (Zero-downtime).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ muốn nâng cấp server thì bắt buộc phải thông báo bảo trì dừng toàn bộ hệ thống vào ban đêm.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy khả năng bảo trì không gián đoạn (Zero-downtime maintenance) nhờ Load Balancer`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục IV.1*
> - 💡 **Mẹo hóa giải:** Bảo trì qua Load Balancer = Nâng cấp xoay vòng từng server ➔ Không dừng hệ thống (Zero-downtime).

---

### Câu 28 (cloud-c5-d1-028)

**Điểm khác biệt cốt lõi giữa Cân bằng tải Tầng 4 (NLB - Layer 4) và Cân bằng tải Tầng 7 (ALB - Layer 7) là gì?**

- **A.** Layer 4 chỉ hoạt động vào ban ngày; Layer 7 chỉ hoạt động vào ban đêm trong các trung tâm dữ liệu
- **B.** Layer 4 chỉ hoạt động trên máy tính 4 nhân; Layer 7 chỉ hoạt động trên các máy chủ có 7 nhân CPU
- **C.** Layer 4 điều hướng dựa trên IP và Port mạng; Layer 7 điều hướng thông minh dựa trên nội dung HTTP/URL
- **D.** Layer 4 được sản xuất bởi công ty tư nhân; Layer 7 là tiêu chuẩn độc quyền của cơ quan quân sự

> **Đáp án đúng:** **C** — *Layer 4 điều hướng dựa trên IP và Port mạng; Layer 7 điều hướng thông minh dựa trên nội dung HTTP/URL*
>
> **Giải thích chi tiết:** Network Load Balancer (Layer 4 trong mô hình OSI) điều phối cực nhanh dựa trên thông tin gói tin thô: Địa chỉ IP và Cổng TCP/UDP. Application Load Balancer (Layer 7) đọc sâu vào nội dung gói tin HTTP/HTTPS: URL path, HTTP Header, Cookie để điều hướng tới đúng microservice chuyên biệt.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay suy diễn tầng 4 và tầng 7 thành số lượng nhân CPU (4 core, 7 core) gây cười.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy phân biệt cơ chế điều phối giữa Layer 4 (IP/Port) và Layer 7 (HTTP/URL Content)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục IV.1*
> - 💡 **Mẹo hóa giải:** Layer 4 = Dựa trên IP & Port (rất nhanh); Layer 7 = Dựa trên URL, Header, Cookie (thông minh).

---

### Câu 29 (cloud-c5-d1-029)

**Mục tiêu tối thượng của việc thiết kế kiến trúc Dự phòng (Redundancy) trong hạ tầng IaaS là gì?**

- **A.** Loại bỏ các điểm lỗi đơn độc (Single Point of Failure - SPoF) để đảm bảo hệ thống vận hành liên tục
- **B.** Làm cho hệ thống tiêu thụ điện năng nhiều gấp đôi để trung tâm dữ liệu được ấm áp vào mùa đông
- **C.** Tăng gấp đôi số lượng nhân viên văn phòng cần tuyển dụng để công ty trông có vẻ đông đúc hơn
- **D.** Bắt buộc người dùng phải trả tiền thuê bao dịch vụ hai lần cho cùng một tài nguyên máy chủ ảo

> **Đáp án đúng:** **A** — *Loại bỏ các điểm lỗi đơn độc (Single Point of Failure - SPoF) để đảm bảo hệ thống vận hành liên tục*
>
> **Giải thích chi tiết:** Redundancy là nguyên lý thiết kế nhân bản các thành phần quan trọng (nguồn điện, card mạng, máy chủ, đường truyền). Nếu một linh kiện hoặc máy chủ bị chết, thành phần dự phòng lập tức tiếp quản công việc, loại bỏ Single Point of Failure (SPoF).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn các lý do sưởi ấm phòng máy hoặc tăng chi phí nhân sự thay vì triệt tiêu điểm chết SPoF.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy mục tiêu loại bỏ điểm lỗi đơn độc (SPoF) của nguyên lý Redundancy`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** Redundancy = Nhân bản dự phòng ➔ Triệt tiêu điểm nghẽn đơn độc (No SPoF).

---

## 📌 PHẦN 5: TÍNH SẴN SÀNG CAO (HA), KHẮC PHỤC THẢM HỌA (DR) & DI CHUYỂN ĐÁM MÂY (Câu 30 - 36)

### Câu 30 (cloud-c5-d1-030)

**Tập hợp nào dưới đây phản ánh ĐÚNG 4 loại hình dự phòng cơ bản được chuẩn hóa trong tài liệu bài giảng?**

- **A.** Dự phòng tiền mặt, Dự phòng vàng bạc, Dự phòng sổ đỏ nhà đất và Dự phòng cổ phiếu ngân hàng
- **B.** Dự phòng phần cứng (Hardware), Dự phòng tiến trình (Process), Dự phòng mạng và Dự phòng địa lý
- **C.** Dự phòng bút bi, Dự phòng giấy in văn phòng, Dự phòng kẹp bấm tài liệu và Dự phòng thước kẻ
- **D.** Dự phòng nước ngọt, Dự phòng bánh kẹo, Dự phòng cà phê hòa tan và Dự phòng mì gói ăn liền

> **Đáp án đúng:** **B** — *Dự phòng phần cứng (Hardware), Dự phòng tiến trình (Process), Dự phòng mạng và Dự phòng địa lý*
>
> **Giải thích chi tiết:** Giáo trình chuẩn hóa 4 loại hình dự phòng: (1) Hardware Redundancy (PSU kép, quạt kép, RAID), (2) Process Redundancy (nhiều instance VM), (3) Network Redundancy (đa đường truyền, đa switch), (4) Geographic Redundancy (đa vùng địa lý Multi-Region).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm lẫn dự phòng kỹ thuật hạ tầng đám mây với dự phòng tài chính cá nhân hoặc văn phòng phẩm.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy 4 loại hình dự phòng hạ tầng: Hardware, Process, Network, Geographic`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** 4 loại Redundancy = Phần cứng (Hardware) + Tiến trình (Process) + Mạng (Network) + Địa lý (Geographic).

---

### Câu 31 (cloud-c5-d1-031)

**Điểm khác biệt mấu chốt giữa chiến lược Incremental Backup và Differential Backup là gì?**

- **A.** Incremental chỉ dành cho máy tính chạy Windows; Differential chỉ dành cho máy chủ chạy hệ điều hành Linux
- **B.** Incremental luôn sao lưu 100% dữ liệu gốc; Differential chỉ sao lưu các tệp tin có dung lượng bằng 0
- **C.** Incremental chỉ thực hiện vào ban ngày; Differential bắt buộc phải thực hiện vào ban đêm sau 12 giờ
- **D.** Incremental chỉ lưu thay đổi so với lần sao lưu gần nhất; Differential lưu thay đổi so với lần Full gần nhất

> **Đáp án đúng:** **D** — *Incremental chỉ lưu thay đổi so với lần sao lưu gần nhất; Differential lưu thay đổi so với lần Full gần nhất*
>
> **Giải thích chi tiết:** Incremental Backup chỉ sao lưu phần dữ liệu thay đổi so với lần sao lưu gần nhất trước đó (dù là Full hay Incremental), tốn ít ổ đĩa nhất. Differential Backup sao lưu toàn bộ phần dữ liệu thay đổi tích lũy so với lần Full Backup gần nhất.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Đây là câu hỏi bẫy kinh điển nhất trong mọi đề thi: thí sinh cực kỳ hay nhầm lẫn mốc tham chiếu của Incremental và Differential.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy mốc so sánh: Incremental (so với lần gần nhất) vs Differential (so với Full gần nhất)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** Incremental = So với LẦN GẦN NHẤT; Differential = So với LẦN FULL GẦN NHẤT.

---

### Câu 32 (cloud-c5-d1-032)

**Khi xảy ra sự cố thảm họa mất dữ liệu, quy trình khôi phục (Restore) của chiến lược nào là PHỨC TẠP VÀ LÂU NHẤT?**

- **A.** Differential Backup vì chỉ cần lấy bản Full đầu tiên kèm bản Differential mới nhất
- **B.** Full Backup vì chỉ cần lấy một bản sao lưu duy nhất nạp vào hệ thống để khôi phục lại
- **C.** Incremental Backup vì phải phục hồi tuần tự từ bản Full cùng tất cả các bản Incremental
- **D.** Cả ba phương pháp đều có thời gian và độ phức tạp phục hồi hệ thống giống hệt nhau

> **Đáp án đúng:** **C** — *Incremental Backup vì phải phục hồi tuần tự từ bản Full cùng tất cả các bản Incremental*
>
> **Giải thích chi tiết:** Để restore từ Incremental, ta phải nạp bản Full Backup gốc, rồi nạp tuần tự từng bản Incremental từ ngày 1 đến ngày N. Nếu một bản Incremental ở giữa bị hỏng, toàn bộ chuỗi khôi phục phía sau sẽ thất bại.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Incremental sao lưu nhanh nhất nên nhiều người lầm tưởng nó cũng khôi phục nhanh nhất.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy sự đánh đổi: Incremental sao lưu nhanh nhất nhưng khôi phục phức tạp và lâu nhất`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** Sao lưu: Incremental nhanh nhất; Khôi phục (Restore): Incremental LÂU VÀ PHỨC TẠP NHẤT.

---

### Câu 33 (cloud-c5-d1-033)

**Chỉ số RPO (Recovery Point Objective) trong kế hoạch phòng chống thảm họa đo lường điều gì?**

- **A.** Tổng số tiền tối đa mà công ty bảo hiểm sẽ bồi thường thiệt hại cho doanh nghiệp sau hỏa hoạn
- **B.** Khoảng thời gian tối đa để các kỹ sư khôi phục hệ thống máy chủ hoạt động bình thường trở lại
- **C.** Lượng dữ liệu tối đa mà doanh nghiệp chấp nhận bị mất mát, được tính bằng đơn vị thời gian
- **D.** Số lượng máy tính cá nhân bị hư hỏng linh kiện phần cứng sau khi xảy ra sự cố sấm sét đánh

> **Đáp án đúng:** **C** — *Lượng dữ liệu tối đa mà doanh nghiệp chấp nhận bị mất mát, được tính bằng đơn vị thời gian*
>
> **Giải thích chi tiết:** RPO (Recovery Point Objective - Điểm khôi phục mục tiêu) đo lường mức độ mất mát dữ liệu chấp nhận được tính bằng thời gian. Ví dụ: RPO = 2 giờ nghĩa là nếu hệ thống sập lúc 14h, ta chấp nhận mất tối đa dữ liệu từ 12h đến 14h (phải sao lưu định kỳ ít nhất 2 giờ/lần).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm lẫn giữa RPO (mất dữ liệu tối đa tính bằng thời gian) và RTO (thời gian khôi phục hệ thống).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy phân biệt giữa chỉ số RPO (mất dữ liệu) và RTO (thời gian chết của hệ thống)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** RPO = Dữ liệu mất tối đa (tính bằng giờ); RTO = Thời gian chết hệ thống tối đa (thời gian khôi phục).

---

### Câu 34 (cloud-c5-d1-034)

**Chỉ số RTO (Recovery Time Objective) trong kế hoạch khôi phục sau thảm họa được hiểu chính xác là gì?**

- **A.** Khoảng thời gian tối đa cho phép hệ thống ngừng hoạt động để kỹ sư khắc phục sự cố xong xuôi
- **B.** Số lượng bản ghi dữ liệu khách hàng bị xóa khỏi cơ sở dữ liệu trong suốt quá trình xảy ra lỗi
- **C.** Khoảng cách địa lý tính bằng Kilomet giữa hai trung tâm dữ liệu chính và trung tâm dữ liệu dự phòng
- **D.** Thời gian bảo hành miễn phí các linh kiện máy tính do nhà sản xuất phần cứng cam kết ban đầu

> **Đáp án đúng:** **A** — *Khoảng thời gian tối đa cho phép hệ thống ngừng hoạt động để kỹ sư khắc phục sự cố xong xuôi*
>
> **Giải thích chi tiết:** RTO (Recovery Time Objective - Thời gian khôi phục mục tiêu) là khoảng thời gian tối đa mà hệ thống có thể chấp nhận bị gián đoạn (Downtime). Ví dụ RTO = 30 phút nghĩa là trong vòng 30 phút sau sự cố, hệ thống bắt buộc phải được kích hoạt chạy lại.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm RTO với RPO hoặc nhầm sang khoảng cách địa lý giữa 2 trung tâm dữ liệu.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy định nghĩa chuẩn thời gian chết hệ thống tối đa cho phép của chỉ số RTO`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** RTO = Thời gian tối đa hệ thống được phép nằm im chết (Downtime) trước khi sống lại.

---

### Câu 35 (cloud-c5-d1-035)

**Mục đích chiến lược lớn nhất của giải pháp Dự phòng địa lý (Geographic Redundancy) là phòng ngừa rủi ro gì?**

- **A.** Hiện tượng một con chuột máy tính bị hỏng nút bấm chuột trái trong văn phòng làm việc công ty
- **B.** Các thảm họa diện rộng mang tính khu vực như động đất, lũ lụt, chiến tranh hoặc mất điện lưới toàn vùng
- **C.** Nguy cơ nhân viên văn phòng quên tắt màn hình máy tính cá nhân trước khi ra về vào buổi chiều
- **D.** Tình trạng phòng làm việc bị hết nước lọc đóng chai phục vụ cho các nhân viên trong mùa nắng nóng

> **Đáp án đúng:** **B** — *Các thảm họa diện rộng mang tính khu vực như động đất, lũ lụt, chiến tranh hoặc mất điện lưới toàn vùng*
>
> **Giải thích chi tiết:** Dự phòng địa lý (Multi-Region / Geographic Redundancy) đặt các cụm máy chủ và dữ liệu nhân bản ở các vùng địa lý cách xa nhau hàng trăm hoặc hàng nghìn km, bảo đảm nếu toàn bộ một thành phố bị mất điện, lũ lụt hay động đất thì cụm ở vùng khác lập tức thay thế.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn các sự cố vi mô văn phòng thay vì thảm họa địa lý cấp vùng/quốc gia.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy rủi ro thảm họa diện rộng cấp vùng mà Geographic Redundancy nhắm tới`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** Dự phòng địa lý = Phòng ngừa thảm họa thiên tai diện rộng (động đất, lũ lụt, mất điện toàn vùng).

---

### Câu 36 (cloud-c5-d1-036)

**Bản chất kiến trúc của Mạng riêng ảo (Virtual Private Cloud - VPC) trong hạ tầng IaaS là gì?**

- **A.** Ứng dụng trò chuyện nhắn tin miễn phí giữa các nhân viên trong cùng một phòng ban của công ty
- **B.** Hệ thống dây cáp đồng vật lý được nhà cung cấp kéo trực tiếp từ trung tâm dữ liệu về nhà người dùng
- **C.** Trình duyệt web độc quyền chỉ cho phép truy cập vào các trang báo điện tử của cơ quan nhà nước
- **D.** Vùng mạng logic được cô lập hoàn toàn trên hạ tầng đám mây công cộng dành riêng cho một khách hàng

> **Đáp án đúng:** **D** — *Vùng mạng logic được cô lập hoàn toàn trên hạ tầng đám mây công cộng dành riêng cho một khách hàng*
>
> **Giải thích chi tiết:** VPC là một phân vùng mạng ảo cô lập logic bên trong đám mây công cộng của nhà cung cấp. Người dùng toàn quyền kiểm soát môi trường mạng này: tự định nghĩa dải địa chỉ IP (CIDR block), tạo các Subnet, cấu hình Route Table và cổng Gateway mạng.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ VPC là đường dây mạng vật lý riêng hoặc một phần mềm chat nội bộ.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy bản chất vùng mạng logic cô lập hoàn toàn (Isolated Virtual Network) của VPC`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** VPC = Vùng mạng ảo cô lập logic của riêng bạn trên Cloud công cộng.

---

## 📌 PHẦN 6: IAAS VS PAAS VS SAAS & TIÊU CHÍ LỰA CHỌN NHÀ CUNG CẤP (Câu 37 - 43)

### Câu 37 (cloud-c5-d1-037)

**Để bảo vệ an toàn tối đa cho máy chủ CSDL, kiến trúc sư đám mây nên đặt máy chủ này ở phân vùng nào trong VPC?**

- **A.** Phân vùng mạng công cộng (Public Subnet) và mở tất cả các cổng kết nối cho mọi người trên Internet vào
- **B.** Phân vùng mạng riêng tư (Private Subnet) không có địa chỉ IP công khai và không gắn Internet Gateway
- **C.** Đặt trực tiếp lên trang chủ của mạng xã hội Facebook để mọi người cùng giám sát an ninh mạng giúp
- **D.** Gửi toàn bộ cơ sở dữ liệu qua thư điện tử công cộng vào hòm thư cá nhân của các nhân viên mới

> **Đáp án đúng:** **B** — *Phân vùng mạng riêng tư (Private Subnet) không có địa chỉ IP công khai và không gắn Internet Gateway*
>
> **Giải thích chi tiết:** Máy chủ CSDL nhạy cảm bắt buộc phải đặt trong Private Subnet: không cấp Public IP, không có kết nối trực tiếp từ Internet. Muốn truy cập từ bên ngoài, chỉ có các máy chủ Web/App nằm trong Public Subnet mới được phép kết nối qua mạng nội bộ.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm lẫn giữa Public Subnet (cho Web Server) và Private Subnet (cho Database).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy nguyên tắc an ninh đặt CSDL trong Private Subnet không kết nối Internet trực tiếp`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** Database quan trọng ➔ Luôn đặt trong Private Subnet (không cấp Public IP).

---

### Câu 38 (cloud-c5-d1-038)

**Điểm khác biệt mấu chốt về cơ chế hoạt động giữa Security Group và Network ACL trong mạng VPC là gì?**

- **A.** Security Group do khách hàng tự quản lý; Network ACL là cơ quan công an kiểm soát hoàn toàn 100%
- **B.** Security Group chỉ chặn virus máy tính; Network ACL chỉ chặn các cuộc tấn công vật lý vào phòng máy
- **C.** Security Group chỉ hoạt động trên mạng không dây Wi-Fi; Network ACL chỉ hoạt động trên dây cáp mạng LAN
- **D.** Security Group có trạng thái (Stateful) ở cấp máy ảo; Network ACL không trạng thái (Stateless) ở cấp Subnet

> **Đáp án đúng:** **D** — *Security Group có trạng thái (Stateful) ở cấp máy ảo; Network ACL không trạng thái (Stateless) ở cấp Subnet*
>
> **Giải thích chi tiết:** Security Group hoạt động ở tầng máy ảo (Instance-level) và là Stateful (nếu cho phép luồng vào Inbound thì tự động mở luồng ra Outbound tương ứng). Network ACL hoạt động ở tầng phân vùng (Subnet-level) và là Stateless (phải cấu hình cả luật vào và luật ra riêng biệt).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Đây là câu hỏi bẫy kinh điển nhất về mạng đám mây: nhầm lẫn giữa cơ chế Stateful và Stateless.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy cơ chế Stateful của Security Group vs Stateless của Network ACL`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** Security Group = Cấp Instance + Stateful (tự nhớ luồng); Network ACL = Cấp Subnet + Stateless.

---

### Câu 39 (cloud-c5-d1-039)

**Bản chất công nghệ của giải pháp Cloud-based NAS (Network Attached Storage) là gì?**

- **A.** Dịch vụ máy chủ lưu trữ tệp tin tập trung gắn mạng đám mây, chia sẻ tệp cho nhiều máy ảo qua NFS/SMB
- **B.** Hệ thống lưu trữ dữ liệu dạng thẻ cào điện thoại bằng giấy được cất giữ trong tủ sắt văn phòng
- **C.** Ổ đĩa cứng quang học CD-ROM được các kỹ sư gắn trực tiếp vào cổng USB của điện thoại di động
- **D.** Phần mềm diệt virus cài đặt trực tiếp trên máy tính để bàn để quét sạch các tệp tin văn bản rác

> **Đáp án đúng:** **A** — *Dịch vụ máy chủ lưu trữ tệp tin tập trung gắn mạng đám mây, chia sẻ tệp cho nhiều máy ảo qua NFS/SMB*
>
> **Giải thích chi tiết:** Cloud NAS là dịch vụ lưu trữ tệp tin tập trung (Centralized Storage Server) chạy trên hạ tầng đám mây, cung cấp không gian lưu trữ dùng chung cho nhiều máy chủ ảo (EC2, Azure VM) cùng truy cập đọc ghi đồng thời qua các giao thức mạng chuẩn NFS hoặc SMB/CIFS.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm Cloud NAS với ổ đĩa gắn cục bộ (Block Storage) hoặc thiết bị lưu trữ vật lý văn phòng.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy định nghĩa máy chủ lưu trữ tệp tin tập trung gắn mạng của Cloud-based NAS`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục VI.1*
> - 💡 **Mẹo hóa giải:** Cloud NAS = Máy chủ lưu trữ tệp tập trung trên mạng (NFS/SMB), nhiều server cùng dùng.

---

### Câu 40 (cloud-c5-d1-040)

**Hai giao thức mạng chuẩn hóa phổ biến nhất được sử dụng trong hệ thống Cloud-based NAS là gì?**

- **A.** Giao thức Bluetooth và hồng ngoại dùng để truyền dữ liệu giữa các điện thoại di động thông minh
- **B.** Giao thức HTTP và HTTPS dùng để duyệt các trang web thông tin giải trí trực tuyến trên mạng
- **C.** Giao thức NFS (Network File System) cho Linux và SMB/CIFS (Server Message Block) cho Windows
- **D.** Giao thức truyền hình cáp analog và sóng vô tuyến AM/FM dùng để phát thanh trên đài phát thanh

> **Đáp án đúng:** **C** — *Giao thức NFS (Network File System) cho Linux và SMB/CIFS (Server Message Block) cho Windows*
>
> **Giải thích chi tiết:** Cloud NAS sử dụng 2 giao thức chia sẻ tệp mạng kinh điển: NFS (phổ biến nhất cho môi trường hệ điều hành Linux/Unix) và SMB/CIFS (chuẩn mực cho môi trường hệ điều hành Microsoft Windows).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm giao thức chia sẻ file (NFS/SMB) với giao thức web (HTTP/HTTPS) hoặc Bluetooth.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy 2 giao thức chia sẻ file mạng tiêu chuẩn: NFS cho Linux và SMB cho Windows`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục VI.1*
> - 💡 **Mẹo hóa giải:** Cloud NAS Protocols = NFS (dành cho Linux) + SMB/CIFS (dành cho Windows).

---

### Câu 41 (cloud-c5-d1-041)

**Tập hợp nào dưới đây phản ánh ĐÚNG 3 dịch vụ Cloud NAS tiêu biểu của Tam Hùng IaaS toàn cầu?**

- **A.** Amazon EFS (Elastic File System), Microsoft Azure Files và Google Cloud Filestore
- **B.** Microsoft Word, Microsoft Excel và công cụ trình chiếu thuyết trình Microsoft PowerPoint
- **C.** Mạng xã hội Facebook, ứng dụng chia sẻ ảnh Instagram và nền tảng nhắn tin WhatsApp
- **D.** Trình duyệt web Google Chrome, Mozilla Firefox và trình duyệt Apple Safari trên máy Mac

> **Đáp án đúng:** **A** — *Amazon EFS (Elastic File System), Microsoft Azure Files và Google Cloud Filestore*
>
> **Giải thích chi tiết:** 3 giải pháp Cloud-based NAS hàng đầu thế giới của 3 ông lớn gồm: AWS EFS (Elastic File System), Azure Files và Google Cloud Filestore.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm với các bộ phần mềm văn phòng của Microsoft hoặc các ứng dụng mạng xã hội.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy nhận diện 3 dịch vụ Cloud NAS chính thức: AWS EFS, Azure Files, GCP Filestore`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục VI.1*
> - 💡 **Mẹo hóa giải:** 3 dịch vụ Cloud NAS chuẩn giáo trình = AWS EFS + Azure Files + Google Cloud Filestore.

---

### Câu 42 (cloud-c5-d1-042)

**Khái niệm Mạng điều khiển bằng phần mềm (SDN - Software-Defined Networking) trong IaaS mang lại giá trị gì?**

- **A.** Bắt buộc các kỹ sư CNTT phải tự tay hàn các vi mạch điện tử trên thiết bị chuyển mạch
- **B.** Tách mặt phẳng điều khiển (Control Plane) khỏi mặt phẳng dữ liệu (Data Plane) mạng
- **C.** Làm cho các sợi dây cáp mạng vật lý tự biến mất và truyền dữ liệu qua suy nghĩ con người
- **D.** Cấm hoàn toàn việc truyền tải dữ liệu hình ảnh và âm thanh qua hệ thống mạng nội bộ

> **Đáp án đúng:** **B** — *Tách mặt phẳng điều khiển (Control Plane) khỏi mặt phẳng dữ liệu (Data Plane) mạng*
>
> **Giải thích chi tiết:** SDN là xương sống mạng của đám mây: tách biệt tầng điều khiển logic (Control Plane tập trung hóa) khỏi tầng chuyển mạch dữ liệu (Data Plane phần cứng), cho phép lập trình viên tạo mạng ảo, cấp IP, mở cổng tường lửa ngay lập tức qua API mà không cần chạm tay vào dây mạng.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn các giải pháp hàn vi mạch thủ công hoặc truyền dữ liệu qua suy nghĩ hoang đường.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy nguyên lý tách biệt Control Plane và Data Plane của công nghệ mạng SDN`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** SDN trong IaaS = Tách biệt Control Plane khỏi Data Plane ➔ Lập trình điều khiển mạng qua phần mềm.

---

### Câu 43 (cloud-c5-d1-043)

**Thiết bị NAT Gateway trong mạng ảo VPC được sử dụng cho mục đích kỹ thuật nào?**

- **A.** Tự động tăng tốc độ xử lý của vi xử lý máy tính lên gấp một trăm lần so với thiết kế của nhà máy
- **B.** Cho phép tin tặc từ mạng Internet công cộng tự do truy cập trực tiếp vào các máy chủ cơ sở dữ liệu
- **C.** Cho phép các máy ảo trong Private Subnet kết nối ra Internet để tải bản vá nhưng chặn chiều ngược lại
- **D.** Làm cho máy chủ không bao giờ bị mất điện kể cả khi trung tâm dữ liệu bị cắt toàn bộ nguồn điện

> **Đáp án đúng:** **C** — *Cho phép các máy ảo trong Private Subnet kết nối ra Internet để tải bản vá nhưng chặn chiều ngược lại*
>
> **Giải thích chi tiết:** NAT Gateway (Network Address Translation) đặt tại Public Subnet, cho phép các máy chủ trong Private Subnet (như máy chủ ứng dụng, CSDL) gửi request ra ngoài Internet để tải bản cập nhật phần mềm, tải thư viện, đồng thời chặn hoàn toàn chiều kết nối từ ngoài Internet vào trong.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm NAT Gateway với Internet Gateway (mở 2 chiều công khai) hoặc tưởng NAT mở đường cho tin tặc.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy vai trò kết nối 1 chiều ra ngoài an toàn của thiết bị NAT Gateway`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** NAT Gateway = Cho phép máy trong Private Subnet ra Internet tải patch, CHẶN CHIỀU VÀO.

---

## 📌 PHẦN 7: CÁC NHÀ CUNG CẤP IAAS HÀNG ĐẦU & TRƯỜNG HỢP SỬ DỤNG THỰC TIỄN (Câu 44 - 50)

### Câu 44 (cloud-c5-d1-044)

**Use Case "Lift-and-Shift Migration" (Di chuyển nguyên trạng) trong IaaS được hiểu chính xác là gì?**

- **A.** Bắt buộc các kỹ sư CNTT phải tự khuân vác các thùng máy chủ vật lý chạy bộ dọc theo đường quốc lộ
- **B.** Dùng cần cẩu và xe tải hạng nặng để bốc toàn bộ tòa nhà trung tâm dữ liệu cũ sang một thành phố khác
- **C.** Xóa sạch toàn bộ hệ thống cũ và bắt đầu lập trình lại một phần mềm mới hoàn toàn từ con số không
- **D.** Di chuyển nguyên trạng toàn bộ máy ảo và dữ liệu từ On-premise lên đám mây mà không cần sửa đổi mã nguồn

> **Đáp án đúng:** **D** — *Di chuyển nguyên trạng toàn bộ máy ảo và dữ liệu từ On-premise lên đám mây mà không cần sửa đổi mã nguồn*
>
> **Giải thích chi tiết:** Lift-and-Shift (Rehosting) là chiến lược di chuyển đám mây nhanh nhất: đóng gói các máy ảo đang chạy tại trung tâm dữ liệu nội bộ (On-premise) và đưa nguyên trạng lên máy ảo IaaS trên đám mây mà không đòi hỏi phải tái cấu trúc hay viết lại mã nguồn ứng dụng.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh dịch nghĩa đen từ "Lift-and-Shift" thành việc dùng xe tải cẩu nhà hoặc khuân vác máy chủ chạy bộ.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy nghĩa đen của thuật ngữ chiến lược di chuyển nguyên trạng Lift-and-Shift`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục VII.1*
> - 💡 **Mẹo hóa giải:** Lift-and-Shift = Di chuyển nguyên trạng máy ảo từ On-premise lên IaaS, KHÔNG SỬA CODE.

---

### Câu 45 (cloud-c5-d1-045)

**Vì sao mô hình IaaS được đánh giá là lựa chọn số 1 cho các bài toán Xử lý Dữ liệu lớn (Big Data) và HPC?**

- **A.** Do nhà cung cấp dịch vụ IaaS miễn phí toàn bộ 100% chi phí xử lý dữ liệu cho các dự án nghiên cứu
- **B.** Khả năng khởi tạo tức thì cụm hàng nghìn máy chủ tính toán cực mạnh trong vài giờ rồi tắt bỏ để tiết kiệm
- **C.** Bởi vì máy chủ IaaS có khả năng tự động đọc hiểu và phân tích dữ liệu mà không cần con người lập trình
- **D.** Do các thuật toán Big Data chỉ có thể chạy được trên các máy tính sử dụng nguồn điện năng lượng gió

> **Đáp án đúng:** **B** — *Khả năng khởi tạo tức thì cụm hàng nghìn máy chủ tính toán cực mạnh trong vài giờ rồi tắt bỏ để tiết kiệm*
>
> **Giải thích chi tiết:** Các bài toán Big Data và HPC (High Performance Computing) chỉ cần chạy tính toán đột biến trong vài ngày/tuần. Thay vì đầu tư hàng triệu USD mua siêu máy tính rồi để không, doanh nghiệp dùng IaaS bật hàng nghìn node EC2/Compute Engine, tính toán xong thì xóa sạch, chỉ trả tiền vài giờ chạy.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm là IaaS tự động phân tích dữ liệu không cần lập trình viên hoặc miễn phí toàn bộ.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy lý do IaaS tối ưu cho Big Data & HPC nhờ năng lực co giãn theo nhu cầu tính toán`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục VII.1*
> - 💡 **Mẹo hóa giải:** Big Data / HPC chọn IaaS = Cần cụm máy tính khủng trong thời gian ngắn, chạy xong tắt ngay.

---

### Câu 46 (cloud-c5-d1-046)

**Vị thế lịch sử và ưu thế cạnh tranh lớn nhất của Amazon Web Services (AWS) trong Tam Hùng IaaS toàn cầu là gì?**

- **A.** Nhà tiên phong IaaS đầu tiên trên thế giới (2006), sở hữu thị phần số 1 và danh mục dịch vụ phong phú nhất
- **B.** Công ty duy nhất trên thế giới có khả năng sản xuất chip vi xử lý máy tính bằng kim cương nhân tạo
- **C.** Doanh nghiệp độc quyền cung cấp dịch vụ đám mây cho tất cả các ngân hàng trung ương trên toàn cầu
- **D.** Tập đoàn đầu tiên cung cấp dịch vụ máy chủ đám mây miễn phí trọn đời cho toàn bộ người dân thế giới

> **Đáp án đúng:** **A** — *Nhà tiên phong IaaS đầu tiên trên thế giới (2006), sở hữu thị phần số 1 và danh mục dịch vụ phong phú nhất*
>
> **Giải thích chi tiết:** AWS ra mắt dịch vụ IaaS đầu tiên vào năm 2006 (S3 và EC2), mở đầu cho kỷ nguyên điện toán đám mây hiện đại. Cho đến nay, AWS luôn duy trì thị phần số 1 toàn cầu với hệ sinh thái dịch vụ hạ tầng sâu rộng và mạng lưới trung tâm dữ liệu rộng khắp nhất.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn các thông tin viễn tưởng như chip bằng kim cương hoặc miễn phí trọn đời.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy vị thế tiên phong số 1 toàn cầu từ năm 2006 của Amazon Web Services (AWS)`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục VII.1*
> - 💡 **Mẹo hóa giải:** AWS = Tiên phong IaaS đầu tiên (2006: S3, EC2), thị phần số 1 thế giới, dịch vụ phong phú nhất.

---

### Câu 47 (cloud-c5-d1-047)

**Lợi thế cạnh tranh áp đảo giúp Microsoft Azure thu hút đông đảo khối doanh nghiệp truyền thống sử dụng IaaS là gì?**

- **A.** Khách hàng dùng Azure không cần cài đặt phần mềm diệt virus vì máy chủ Azure không thể bị nhiễm mã độc
- **B.** Chi phí dịch vụ của Azure luôn rẻ hơn một trăm lần so với tất cả các nhà cung cấp đám mây khác
- **C.** Azure cam kết đền bù toàn bộ tài sản doanh nghiệp nếu công ty bị lỗ trong hoạt động kinh doanh
- **D.** Tích hợp hoàn hảo với hệ sinh thái Windows Server, Active Directory và chính sách bản quyền Hybrid Benefit

> **Đáp án đúng:** **D** — *Tích hợp hoàn hảo với hệ sinh thái Windows Server, Active Directory và chính sách bản quyền Hybrid Benefit*
>
> **Giải thích chi tiết:** Microsoft Azure thống trị phân khúc doanh nghiệp truyền thống nhờ sự tích hợp sâu với Windows Server, Active Directory, SQL Server và chương trình Azure Hybrid Benefit (cho phép doanh nghiệp tận dụng lại giấy phép On-premise có sẵn để tiết kiệm chi phí trên đám mây).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm Azure rẻ hơn 100 lần hoặc bảo hiểm kinh doanh cho khách hàng phi thực tế.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy lợi thế tích hợp hệ sinh thái doanh nghiệp và chính sách Hybrid Benefit của Microsoft Azure`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục VII.1*
> - 💡 **Mẹo hóa giải:** Microsoft Azure IaaS = Tối ưu số 1 cho Windows Server, Active Directory & chính sách Hybrid Benefit.

---

### Câu 48 (cloud-c5-d1-048)

**Điểm mạnh công nghệ độc nhất vô nhị của Google Cloud Platform (GCP) trong phân khúc hạ tầng IaaS là gì?**

- **A.** Là nhà cung cấp đám mây duy nhất trên thế giới không bao giờ gặp bất kỳ sự cố gián đoạn dịch vụ nào
- **B.** Khả năng tự động tăng gấp đôi dung lượng bộ nhớ RAM của máy chủ mà không cần khách hàng trả tiền
- **C.** Hạ tầng mạng cáp quang riêng toàn cầu có độ trễ cực thấp và tối ưu hóa sâu sắc cho Kubernetes, Big Data
- **D.** Tự động gửi miễn phí cho mỗi lập trình viên một chiếc điện thoại Google Pixel đời mới nhất mỗi năm

> **Đáp án đúng:** **C** — *Hạ tầng mạng cáp quang riêng toàn cầu có độ trễ cực thấp và tối ưu hóa sâu sắc cho Kubernetes, Big Data*
>
> **Giải thích chi tiết:** Google sở hữu mạng đường trục cáp quang riêng (Global Fiber Network) kết nối trực tiếp các Data Center với độ trễ thấp nhất thế giới. Ngoài ra, GCP là cái nôi của Kubernetes, TensorFlow và BigQuery, mang lại hiệu năng IaaS vượt trội cho Container và Dữ liệu lớn.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn các lý do tặng quà điện thoại Pixel hoặc cam kết 100% không bao giờ gặp sự cố.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy điểm mạnh về mạng cáp quang toàn cầu độ trễ thấp và tối ưu Kubernetes của GCP`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục VII.1*
> - 💡 **Mẹo hóa giải:** Google Cloud (GCP) IaaS = Mạng đường trục cáp quang toàn cầu siêu nhanh + Tối ưu Kubernetes & Big Data.

---

### Câu 49 (cloud-c5-d1-049)

**Use Case "Môi trường Phát triển và Kiểm thử" (Dev/Test) trên nền tảng IaaS giúp tối ưu hóa chi phí như thế nào?**

- **A.** Khởi tạo máy chủ lập trình ban ngày và tắt vào ban đêm để ngừng tính tiền dịch vụ
- **B.** Bắt buộc các lập trình viên phải làm việc liên tục 24 giờ mỗi ngày không được tắt máy
- **C.** Nhà cung cấp đám mây không thu tiền thuê bao máy chủ đối với lập trình viên trẻ tuổi
- **D.** Tự động sao chép mã nguồn của các công ty đối thủ về cho lập trình viên tham khảo

> **Đáp án đúng:** **A** — *Khởi tạo máy chủ lập trình ban ngày và tắt vào ban đêm để ngừng tính tiền dịch vụ*
>
> **Giải thích chi tiết:** Môi trường Dev/Test chỉ cần hoạt động trong giờ làm việc (khoảng 8-10 tiếng/ngày). Nhờ tính năng tự động hóa của IaaS, doanh nghiệp có thể lập lịch tự động bật máy ảo lúc 8h sáng và tắt lúc 18h chiều, giúp cắt giảm hơn 60% chi phí so với việc mua máy chủ chạy 24/7.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay chọn các phương án miễn phí theo độ tuổi hoặc ép làm việc xuyên đêm phi lý.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy cơ chế tối ưu chi phí bật/tắt máy ảo Dev/Test theo giờ làm việc trong IaaS`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục VII.1*
> - 💡 **Mẹo hóa giải:** Dev/Test trên IaaS = Bật khi làm việc, tắt vào ban đêm/cuối tuần ➔ Cắt giảm hơn 60% chi phí.

---

### Câu 50 (cloud-c5-d1-050)

**Tình huống tổng hợp: Một trang thương mại điện tử cần chuẩn bị hạ tầng IaaS đón đợt khuyến mãi Black Friday thì nên làm gì?**

- **A.** Mua thêm 100 máy chủ vật lý thật về cắm vào mạng văn phòng và hủy bỏ hoàn toàn hệ thống đám mây
- **B.** Thiết lập cụm máy ảo Auto-scaling kết hợp Load Balancer phân bổ đa AZ và lưu ảnh trên Object Storage
- **C.** Tắt hoàn toàn trang web trong ngày Black Friday để bảo vệ máy chủ không bị quá tải nhiệt độ
- **D.** Chỉ cho phép khách hàng thanh toán bằng tiền mặt trực tiếp tại văn phòng của công ty thương mại

> **Đáp án đúng:** **B** — *Thiết lập cụm máy ảo Auto-scaling kết hợp Load Balancer phân bổ đa AZ và lưu ảnh trên Object Storage*
>
> **Giải thích chi tiết:** Kiến trúc IaaS chuẩn mực chống nghẽn cho mùa mua sắm cao điểm Black Friday: (1) Load Balancer phân phối tải đều, (2) Auto-scaling tự động nhân bản máy ảo khi truy cập tăng vọt, (3) Triển khai đa Vùng sẵn sàng (Multi-AZ) để dự phòng, (4) Lưu trữ ảnh/media tĩnh trên Object Storage (S3/CDN).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ chọn giải pháp mua máy chủ vật lý cục bộ (lãng phí sau sự kiện) hoặc tắt web gây cười.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy giải pháp kiến trúc tổng hợp đón đỉnh tải Black Friday trên IaaS`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục II.1, III.1, IV.1 & VII.1*
> - 💡 **Mẹo hóa giải:** Đón tải Black Friday = Load Balancer + Auto-scaling VMs + Multi-AZ + Object Storage CDN.

---

## 📊 BẢNG ĐÁP ÁN TỔNG HỢP NHANH (50 CÂU)

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **1** | **A** | **11** | **D** | **21** | **A** | **31** | **D** | **41** | **A** |
| **2** | **C** | **12** | **C** | **22** | **C** | **32** | **C** | **42** | **B** |
| **3** | **B** | **13** | **C** | **23** | **B** | **33** | **C** | **43** | **C** |
| **4** | **D** | **14** | **A** | **24** | **D** | **34** | **A** | **44** | **D** |
| **5** | **D** | **15** | **D** | **25** | **B** | **35** | **B** | **45** | **B** |
| **6** | **B** | **16** | **B** | **26** | **A** | **36** | **D** | **46** | **A** |
| **7** | **A** | **17** | **A** | **27** | **D** | **37** | **B** | **47** | **D** |
| **8** | **C** | **18** | **B** | **28** | **C** | **38** | **D** | **48** | **C** |
| **9** | **B** | **19** | **C** | **29** | **A** | **39** | **A** | **49** | **A** |
| **10** | **A** | **20** | **D** | **30** | **B** | **40** | **C** | **50** | **B** |

