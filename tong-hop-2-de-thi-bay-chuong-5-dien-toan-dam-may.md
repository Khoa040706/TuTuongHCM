# TÀI LIỆU TỔNG HỢP: 2 BỘ ĐỀ THI BẪY CHƯƠNG V — MÔN ĐIỆN TOÁN ĐÁM MÂY

> **Môn học:** Điện toán đám mây (Cloud Computing)  
> **Chương:** Chương 5 — Infrastructure as a Service (IaaS)  
> **Dữ liệu giáo trình chuẩn:** `data/cloud-computing-chapter-5.js`  
> **Loại tài liệu:** Ngân hàng đề thi BẪY học thuật chuyên sâu (Trick Exam Sets)  
> **Tổng quy mô:** 2 Bộ đề độc lập — Tổng cộng **100 câu hỏi bẫy vận dụng cao** (100% Hard, 100% có `trickDetails`)  
> **Độ lệch chiều dài:** $\Delta L = L_{\max} - L_{\min} \le 15$ ký tự trên 100% câu hỏi (Triệt tiêu hoàn toàn trực giác đoán bừa)  
> **Bộ đề bẫy 1:** 50 câu (`cloud-c5-d1-001` ➔ `cloud-c5-d1-050`) — Phân bổ: 13A, 13B, 12C, 12D  
> **Bộ đề bẫy 2:** 50 câu (`cloud-c5-d2-001` ➔ `cloud-c5-d2-050`) — Phân bổ: 12A, 13B, 12C, 13D  

---

## 📑 MỤC LỤC & BẢNG TRA CỨU ĐÁP ÁN NHANH

### BẢNG ĐÁP ÁN NHANH: BỘ ĐỀ BẪY 1 (cloud-c5-d1)
*(Phân bổ đáp án: 13A, 13B, 12C, 12D)*

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | `A` | **11** | `D` | **21** | `A` | **31** | `D` | **41** | `A` |
| **2** | `C` | **12** | `C` | **22** | `C` | **32** | `C` | **42** | `B` |
| **3** | `B` | **13** | `C` | **23** | `B` | **33** | `C` | **43** | `C` |
| **4** | `D` | **14** | `A` | **24** | `D` | **34** | `A` | **44** | `D` |
| **5** | `D` | **15** | `D` | **25** | `B` | **35** | `B` | **45** | `B` |
| **6** | `B` | **16** | `B` | **26** | `A` | **36** | `D` | **46** | `A` |
| **7** | `A` | **17** | `A` | **27** | `D` | **37** | `B` | **47** | `D` |
| **8** | `C` | **18** | `B` | **28** | `C` | **38** | `D` | **48** | `C` |
| **9** | `B` | **19** | `C` | **29** | `A` | **39** | `A` | **49** | `A` |
| **10** | `A` | **20** | `D` | **30** | `B` | **40** | `C` | **50** | `B` |


---

### BẢNG ĐÁP ÁN NHANH: BỘ ĐỀ BẪY 2 (cloud-c5-d2)
*(Phân bổ đáp án: 12A, 13B, 12C, 13D)*

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
| **9** | `A` | **19** | `C` | **29** | `A` | **39** | `C` | **49** | `B` |
| **10** | `B` | **20** | `D` | **30** | `B` | **40** | `D` | **50** | `D` |


---

## 🏛️ MA TRẬN PHÂN LOẠI DẠNG BẪY HỌC THUẬT (BỘ ĐỀ 2)

| STT | Phân nhóm bẫy | Số câu | Đặc điểm tư duy phân hóa |
| :---: | :--- | :---: | :--- |
| **1** | **Bẫy Khẳng định / Phủ định (Chọn câu SAI)** | **12** | Cài cắm mệnh đề ngụy biện có vẻ hợp lý nhưng vi phạm nguyên lý cơ bản của IaaS (vá lỗi OS, Noisy Neighbor, boot Object Storage, Round Robin). |
| **2** | **Bẫy Nhận định Chuẩn xác (Chọn câu ĐÚNG)** | **10** | Cài cắm từ ngữ tuyệt đối hóa sai lệch trong 3 phương án nhiễu, kiểm tra chuẩn xác ranh giới trách nhiệm chia sẻ từ OS trở lên. |
| **3** | **Bẫy Tổ hợp Logic & Mệnh đề (I, II, III)** | **10** | Đánh giá đồng thời 3 hoặc 4 khía cạnh kỹ thuật IaaS (3 loại server, 3 chiến lược sao lưu, 3 thuật toán Load Balancing, 4 loại Redundancy). |
| **4** | **Bẫy Kịch bản Thực tế & Tình huống Ứng dụng** | **9** | Đặt thí sinh vào vai trò Kiến trúc sư giải quyết bài toán: Bare-metal cho Big Data, Noisy Neighbor trong ngân hàng, Sticky Session qua IP Hash, RTO/RPO. |
| **5** | **Bẫy Khái niệm Song sinh & Dễ nhầm lẫn** | **9** | Phân biệt Block Storage vs Object Storage, RTO vs RPO, Incremental vs Differential, Dedicated vs Shared Server, Type 1 vs Type 2 Hypervisor. |

---

# PHẦN 1: BỘ ĐỀ BẪY 1 (MÃ ĐỀ: cloud-c5-d1)

> **Mô tả:** 50 câu hỏi bẫy tư duy bao quát toàn bộ nội dung giáo trình Chương 5 (Bản chất IaaS, 3 loại Server, Bộ tam lưu trữ, Load Balancing, Redundancy, Cloud NAS, Tam hùng AWS-Azure-GCP).  
> **Quy cách:** 100% câu hỏi có `trickDetails` và độ lệch phương án $\Delta L \le 15$ ký tự.

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


# PHẦN 2: BỘ ĐỀ BẪY 2 (MÃ ĐỀ: cloud-c5-d2)

> **Mô tả:** 50 câu hỏi bẫy tư duy Vận dụng cao chuyên sâu được biên soạn mới hoàn toàn, độc lập 100% với Đề 1, đa dạng hóa 5 dạng câu hỏi, bảo đảm cân bằng đáp án và triệt tiêu đoán mò.  
> **Quy cách:** 100% câu hỏi có `trickDetails` và độ lệch phương án $\Delta L \le 15$ ký tự.

### Câu 1 (cloud-c5-d2-001)

**Khi nghiên cứu về mô hình trách nhiệm chia sẻ trong IaaS, nhận định nào sau đây là SAI?**

- **A.** Nhà cung cấp IaaS chịu trách nhiệm tự động quét virus và cập nhật bản vá cho hệ điều hành máy ảo.
- **B.** Khách hàng toàn quyền quyết định lựa chọn cài đặt phiên bản hệ điều hành Linux hay Windows Server.
- **C.** Việc thiết lập cấu hình tường lửa cục bộ và phân quyền truy cập người dùng thuộc trách nhiệm khách hàng.
- **D.** Nhà cung cấp dịch vụ đám mây chịu trách nhiệm bảo đảm tính sẵn sàng của hạ tầng phần cứng vật lý.

> **Đáp án đúng:** **A** — *Nhà cung cấp IaaS chịu trách nhiệm tự động quét virus và cập nhật bản vá cho hệ điều hành máy ảo.*
>
> **Giải thích chi tiết:** Trong mô hình IaaS, nhà cung cấp chỉ quản lý hạ tầng phần cứng và tầng ảo hóa. Khách hàng thuê máy ảo PHẢI tự chịu trách nhiệm cài đặt, quản trị, quét virus và vá lỗi bảo mật cho hệ điều hành của mình.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm lẫn giữa IaaS với PaaS/SaaS nơi nhà cung cấp tự vá lỗi hệ điều hành.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy ngụy biện nhà cung cấp IaaS tự động cập nhật bản vá bảo mật hệ điều hành`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục I.1 & VIII.1*
> - 💡 **Mẹo hóa giải:** IaaS = Khách hàng tự cài OS nên KHÁCH HÀNG PHẢI TỰ VÁ LỖI HỆ ĐIỀU HÀNH.

---

### Câu 2 (cloud-c5-d2-002)

**Về các đặc tính kỹ thuật của máy chủ ảo dùng chung (Shared Virtual Server), khẳng định nào sau đây là SAI?**

- **A.** Chi phí thuê máy chủ ảo dùng chung rất rẻ, phù hợp cho các website tin tức nhỏ hoặc môi trường thử nghiệm.
- **B.** Tài nguyên CPU và RAM hoàn toàn cách ly vật lý, không bao giờ bị ảnh hưởng bởi tải của các máy ảo khác.
- **C.** Hiệu năng tính toán của máy chủ có thể bị suy giảm do hiện tượng láng giềng ồn ào (Noisy Neighbor).
- **D.** Nhiều máy chủ ảo khác nhau cùng chia sẻ chung năng lực tính toán trên cùng một máy chủ vật lý bên dưới.

> **Đáp án đúng:** **B** — *Tài nguyên CPU và RAM hoàn toàn cách ly vật lý, không bao giờ bị ảnh hưởng bởi tải của các máy ảo khác.*
>
> **Giải thích chi tiết:** Shared Virtual Server chia sẻ chung CPU/RAM vật lý; do đó tài nguyên KHÔNG cách ly vật lý hoàn toàn và rất dễ bị ảnh hưởng hiệu năng khi có máy ảo láng giềng chạy tác vụ nặng (Noisy Neighbor).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ máy ảo nào cũng được cách ly tài nguyên vật lý tuyệt đối 100%.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy tài nguyên hoàn toàn cách ly vật lý không bao giờ bị ảnh hưởng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục II.1*
> - 💡 **Mẹo hóa giải:** Shared Server = Dùng chung phần cứng ➔ Dễ bị hiện tượng 'Noisy Neighbor' làm sụt giảm hiệu năng.

---

### Câu 3 (cloud-c5-d2-003)

**Khi nói về hệ thống lưu trữ đối tượng (Object Storage) trong IaaS, phát biểu nào sau đây là SAI?**

- **A.** Object Storage có khả năng mở rộng dung lượng gần như không giới hạn mà không cần phải tắt hệ thống.
- **B.** Dữ liệu được lưu trữ dưới dạng đối tượng gồm khối nhị phân, siêu dữ liệu (Metadata) và định danh duy nhất.
- **C.** Người dùng có thể dễ dàng định dạng phân vùng ext4 để gắn trực tiếp làm ổ đĩa boot chạy hệ điều hành.
- **D.** Người dùng và ứng dụng tương tác, tải lên hoặc tải về các đối tượng thông qua giao thức web HTTP/HTTPS.

> **Đáp án đúng:** **C** — *Người dùng có thể dễ dàng định dạng phân vùng ext4 để gắn trực tiếp làm ổ đĩa boot chạy hệ điều hành.*
>
> **Giải thích chi tiết:** Object Storage lưu trữ qua REST API (HTTP/HTTPS) và không hoạt động theo cơ chế khối đĩa; do đó KHÔNG THỂ định dạng file system (ext4/NTFS) để gắn trực tiếp làm ổ đĩa khởi động (Boot disk) cho hệ điều hành. Muốn boot OS phải dùng Block Storage.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh dễ đánh đồng lưu trữ đối tượng với ổ cứng máy tính thông thường.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy định dạng phân vùng ext4 gắn trực tiếp làm ổ đĩa boot chạy hệ điều hành`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** Boot OS & Database ➔ Bắt buộc dùng Block Storage; Object Storage không thể làm ổ boot.

---

### Câu 4 (cloud-c5-d2-004)

**Về kỹ thuật Cân bằng tải (Load Balancing) và thuật toán Round Robin, nhận định nào sau đây là SAI?**

- **A.** Load Balancer tiếp nhận các yêu cầu từ Client và phân phối đồng đều đến nhóm các máy chủ backend.
- **B.** Thuật toán Round Robin phân phối tuần tự các yêu cầu mới cho từng máy chủ theo một vòng tròn khép kín.
- **C.** Round Robin hoạt động rất đơn giản và đạt hiệu quả cao khi các máy chủ backend có cấu hình tương đương.
- **D.** Round Robin là thuật toán tối ưu nhất khi các máy chủ chênh lệch cấu hình và thời gian xử lý rất khác nhau.

> **Đáp án đúng:** **D** — *Round Robin là thuật toán tối ưu nhất khi các máy chủ chênh lệch cấu hình và thời gian xử lý rất khác nhau.*
>
> **Giải thích chi tiết:** Khi các máy chủ chênh lệch cấu hình hoặc các tác vụ nặng nhẹ không đều, Round Robin sẽ gây quá tải cho các server yếu. Trong trường hợp đó, thuật toán Least Connections (hoặc Weighted Least Connections) mới là lựa chọn tối ưu.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghĩ thuật toán phổ biến như Round Robin là tối ưu cho mọi trường hợp tải.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy Round Robin tối ưu nhất khi máy chủ chênh lệch cấu hình và thời gian xử lý`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục IV.1*
> - 💡 **Mẹo hóa giải:** Request nặng nhẹ khác nhau ➔ Phải dùng Least Connections; Round Robin chỉ tốt khi tải đều.

---

### Câu 5 (cloud-c5-d2-005)

**Khi nghiên cứu về giải pháp Cloud-based NAS trong IaaS, nhận định nào sau đây là SAI?**

- **A.** Cloud-based NAS chỉ cho phép các máy tính kết nối mạng nội bộ LAN tại văn phòng truy cập dữ liệu.
- **B.** Đóng vai trò như một máy chủ lưu trữ tập trung cung cấp tệp tin dùng chung cho hàng trăm máy chủ ảo.
- **C.** Hỗ trợ các giao thức mạng tiêu chuẩn công nghiệp như NFS, SMB và CIFS để chia sẻ tệp tin đa nền tảng.
- **D.** Cho phép người dùng quản trị linh hoạt việc cấp phát dung lượng và phân quyền bảo mật qua giao diện web.

> **Đáp án đúng:** **A** — *Cloud-based NAS chỉ cho phép các máy tính kết nối mạng nội bộ LAN tại văn phòng truy cập dữ liệu.*
>
> **Giải thích chi tiết:** Cloud-based NAS xóa bỏ giới hạn mạng cục bộ (LAN), cho phép người dùng và máy chủ truy cập dữ liệu từ bất kỳ đâu trên thế giới qua kết nối mạng Internet công cộng được mã hóa an toàn.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm lẫn Cloud NAS với thiết bị ổ cứng mạng NAS truyền thống đặt tại phòng máy văn phòng.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy Cloud NAS chỉ cho phép các máy tính mạng nội bộ LAN văn phòng truy cập`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục VI.1*
> - 💡 **Mẹo hóa giải:** Cloud-based NAS = Truy cập mọi lúc, mọi nơi qua Internet (không giới hạn trong mạng LAN).

---

### Câu 6 (cloud-c5-d2-006)

**Về tính dự phòng (Redundancy) và các chiến lược sao lưu dữ liệu, khẳng định nào sau đây là SAI?**

- **A.** Full Backup sao chép toàn bộ dữ liệu hệ thống, tốn nhiều dung lượng nhất nhưng phục hồi nhanh nhất.
- **B.** Incremental Backup (sao lưu gia tăng) có thời gian phục hồi dữ liệu nhanh hơn hẳn so với Full Backup.
- **C.** Incremental Backup chỉ sao chép các tệp tin có sự thay đổi hoặc tạo mới kể từ lần sao lưu gần nhất.
- **D.** Differential Backup sao chép tất cả các tệp dữ liệu đã thay đổi kể từ bản sao lưu đầy đủ gần đây nhất.

> **Đáp án đúng:** **B** — *Incremental Backup (sao lưu gia tăng) có thời gian phục hồi dữ liệu nhanh hơn hẳn so với Full Backup.*
>
> **Giải thích chi tiết:** Incremental Backup phục hồi CHẬM NHẤT vì khi xảy ra sự cố, người quản trị phải nạp bản Full ban đầu rồi nạp lần lượt từng bản Incremental theo chuỗi liên tiếp. Full Backup mới là bản phục hồi nhanh nhất.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh dễ nhầm giữa tốc độ sao lưu (Incremental nhanh nhất) với tốc độ phục hồi (Full nhanh nhất).
> - 🎯 **Từ khóa gài bẫy:** `Bẫy Incremental Backup có thời gian phục hồi dữ liệu nhanh hơn Full Backup`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** Incremental Backup: Tốc độ sao lưu nhanh nhất NHƯNG tốc độ phục hồi CHẬM NHẤT.

---

### Câu 7 (cloud-c5-d2-007)

**Khi xây dựng kế hoạch phục hồi thảm họa (Disaster Recovery), khẳng định nào sau đây về RTO và RPO là SAI?**

- **A.** RTO (Recovery Time Objective) là khoảng thời gian tối đa cho phép hệ thống ngừng hoạt động sau sự cố.
- **B.** RPO (Recovery Point Objective) là lượng dữ liệu tối đa chấp nhận bị mất mát tính theo khoảng thời gian.
- **C.** RPO đo lường số giờ máy chủ ngừng chạy, còn RTO đo lường dung lượng RAM tối đa bị hư hỏng vật lý.
- **D.** Khi doanh nghiệp thiết lập giá trị RTO và RPO càng tiệm cận mức 0 thì chi phí đầu tư hạ tầng càng lớn.

> **Đáp án đúng:** **C** — *RPO đo lường số giờ máy chủ ngừng chạy, còn RTO đo lường dung lượng RAM tối đa bị hư hỏng vật lý.*
>
> **Giải thích chi tiết:** RTO đo lường THỜI GIAN hệ thống được phép ngừng chạy (Time Downtime). RPO đo lường LƯỢNG DỮ LIỆU chấp nhận bị mất tính theo khoảng thời gian kể từ bản backup gần nhất (Data loss interval). Khẳng định hoán đổi sai lệch hoàn toàn.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Học viên rất hay bị bẫy hoán đổi định nghĩa hoặc gán ghép sai đơn vị đo lường giữa RTO và RPO.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy RPO đo lường số giờ máy chủ ngừng chạy và RTO đo lường dung lượng RAM hư hỏng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** RTO = Recovery Time (Thời gian gián đoạn); RPO = Recovery Point (Điểm dữ liệu mất mát).

---

### Câu 8 (cloud-c5-d2-008)

**Khi nói về đặc tính kỹ thuật của Block Storage trong môi trường IaaS, nhận định nào sau đây là SAI?**

- **A.** Block Storage chia nhỏ dữ liệu thành các khối nhị phân độc lập có kích thước cố định để đọc và ghi.
- **B.** Cung cấp tốc độ đọc ghi (IOPS) cực cao và độ trễ siêu thấp, tối ưu cho việc cài đặt hệ điều hành và CSDL.
- **C.** Các khối dữ liệu được quản lý trực tiếp bởi hệ điều hành máy chủ và giao tiếp qua giao thức bus ổ đĩa.
- **D.** Block Storage truy cập dữ liệu thông qua các lệnh gọi API HTTP/HTTPS từ trình duyệt web của người dùng.

> **Đáp án đúng:** **D** — *Block Storage truy cập dữ liệu thông qua các lệnh gọi API HTTP/HTTPS từ trình duyệt web của người dùng.*
>
> **Giải thích chi tiết:** Truy cập dữ liệu thông qua API web HTTP/HTTPS là đặc tính độc quyền của Object Storage. Block Storage gắn trực tiếp vào máy chủ thông qua giao thức lưu trữ khối (iSCSI, Fibre Channel, NVMe-oF) chứ không dùng HTTP.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh dễ nhầm lẫn cơ chế truy xuất của Object Storage (HTTP REST API) sang Block Storage.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy Block Storage truy cập dữ liệu thông qua các lệnh gọi API HTTP/HTTPS`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** HTTP/HTTPS REST API = Object Storage; Ổ đĩa gắn bus trực tiếp = Block Storage.

---

### Câu 9 (cloud-c5-d2-009)

**Khảo sát về Tam Hùng IaaS toàn cầu và các dịch vụ tương đương, cặp đối chiếu nào sau đây là SAI?**

- **A.** Dịch vụ lưu trữ Amazon S3 tương đương trực tiếp với dịch vụ máy chủ ảo Google Compute Engine.
- **B.** Dịch vụ máy chủ ảo Amazon EC2 tương đương trực tiếp với dịch vụ Microsoft Azure Virtual Machines.
- **C.** Dịch vụ lưu trữ khối Amazon EBS tương đương trực tiếp với dịch vụ Google Cloud Persistent Disk.
- **D.** Dịch vụ mạng riêng ảo Amazon VPC tương đương trực tiếp với dịch vụ Microsoft Azure Virtual Network.

> **Đáp án đúng:** **A** — *Dịch vụ lưu trữ Amazon S3 tương đương trực tiếp với dịch vụ máy chủ ảo Google Compute Engine.*
>
> **Giải thích chi tiết:** Amazon S3 là dịch vụ LƯU TRỮ ĐỐI TƯỢNG (Object Storage), trong khi Google Compute Engine là dịch vụ MÁY CHỦ ẢO (Compute). Cặp tương đương chuẩn của Amazon S3 phải là Google Cloud Storage (GCS).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh không nhớ rõ phân loại dịch vụ Compute vs Storage giữa các nhà cung cấp đám mây.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy gán ghép Amazon S3 tương đương với Google Compute Engine`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục VII.1*
> - 💡 **Mẹo hóa giải:** Nhớ bộ tứ: EC2 = VMs = Compute Engine; S3 = Blob = Cloud Storage.

---

### Câu 10 (cloud-c5-d2-010)

**Khi so sánh công nghệ ảo hóa Hypervisor và Containerization trong IaaS, nhận định nào sau đây là SAI?**

- **A.** Hypervisor phân chia tài nguyên phần cứng vật lý để tạo ra các máy ảo độc lập có hệ điều hành riêng.
- **B.** Containerization ảo hóa ở tầng phần cứng và bắt buộc mỗi container phải tự chạy một nhân kernel riêng.
- **C.** Container ảo hóa ở tầng hệ điều hành, chia sẻ chung nhân kernel của máy chủ giúp khởi động siêu nhanh.
- **D.** Máy ảo chạy qua Hypervisor cung cấp mức độ cô lập an toàn cao hơn so với các container chạy chung OS.

> **Đáp án đúng:** **B** — *Containerization ảo hóa ở tầng phần cứng và bắt buộc mỗi container phải tự chạy một nhân kernel riêng.*
>
> **Giải thích chi tiết:** Containerization ảo hóa ở tầng HỆ ĐIỀU HÀNH (OS level) và chia sẻ chung nhân Linux Kernel với máy chủ vật lý; nhận định cho rằng container ảo hóa phần cứng và chạy kernel riêng là hoàn toàn sai (đó là đặc tính của Hypervisor).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ Docker container cũng có nhân hệ điều hành độc lập như máy ảo VMware/KVM.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy Containerization ảo hóa tầng phần cứng và tự chạy một nhân kernel riêng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** Hypervisor = Ảo hóa phần cứng (Mỗi VM 1 OS riêng); Container = Ảo hóa OS (Dùng chung Kernel).

---

### Câu 11 (cloud-c5-d2-011)

**Về các giá trị kinh tế và nguồn nhân lực khi doanh nghiệp chuyển sang dùng IaaS, khẳng định nào sau đây là SAI?**

- **A.** Doanh nghiệp không phải tốn ngân sách xây dựng phòng máy chủ, mua sắm máy phát điện và điều hòa.
- **B.** Mô hình trả tiền theo dung lượng thực dùng (Pay-as-you-go) giúp doanh nghiệp tối ưu hóa chi phí vận hành.
- **C.** Doanh nghiệp hoàn toàn không cần đội ngũ kỹ sư IT quản trị hệ thống và vận hành phần mềm ứng dụng.
- **D.** Khả năng co giãn tài nguyên linh hoạt giúp hệ thống đáp ứng tốt các đợt tăng vọt người dùng đột biến.

> **Đáp án đúng:** **C** — *Doanh nghiệp hoàn toàn không cần đội ngũ kỹ sư IT quản trị hệ thống và vận hành phần mềm ứng dụng.*
>
> **Giải thích chi tiết:** IaaS chỉ giải phóng doanh nghiệp khỏi việc bảo trì phần cứng vật lý; doanh nghiệp VẪN RẤT CẦN đội ngũ kỹ sư IT chuyên trách để cài đặt hệ điều hành, cấu hình mạng, quản trị cơ sở dữ liệu và bảo mật ứng dụng.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh dễ bị bẫy bởi tư duy sai lầm rằng dùng đám mây là sa thải hết nhân viên IT.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy doanh nghiệp hoàn toàn không cần đội ngũ kỹ sư IT quản trị hệ thống`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục I.1 & VII.1*
> - 💡 **Mẹo hóa giải:** IaaS chỉ thay thế thợ bảo trì phần cứng; kỹ sư quản trị hệ điều hành và phần mềm vẫn bắt buộc.

---

### Câu 12 (cloud-c5-d2-012)

**Về cơ chế Kiểm tra sức khỏe (Health Monitoring) của bộ cân bằng tải trong IaaS, nhận định nào sau đây là SAI?**

- **A.** Load Balancer liên tục gửi các gói tin thăm dò (Ping hoặc HTTP request) tới từng máy chủ backend.
- **B.** Nếu một máy chủ phản hồi mã lỗi HTTP 500 liên tiếp, Load Balancer sẽ tự động cô lập máy chủ bị lỗi đó.
- **C.** Lưu lượng người dùng mới sẽ tự động được chuyển hướng sang các máy chủ lành mạnh còn lại trong cụm.
- **D.** Khi phát hiện máy chủ bị sập, Load Balancer vẫn tiếp tục đẩy đều 100% lưu lượng vào máy chủ lỗi đó.

> **Đáp án đúng:** **D** — *Khi phát hiện máy chủ bị sập, Load Balancer vẫn tiếp tục đẩy đều 100% lưu lượng vào máy chủ lỗi đó.*
>
> **Giải thích chi tiết:** Mục đích sống còn của Health Monitoring là phát hiện máy chủ lỗi để NGỪNG điều hướng traffic vào đó (cô lập máy chủ hỏng). Nhận định cho rằng Load Balancer vẫn đẩy 100% traffic vào server hỏng là hoàn toàn vô lý.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Các phương án diễn giải rất học thuật, phương án sai đi ngược lại nguyên lý hoạt động cơ bản.
> - 🎯 **Từ khóa gài bẫy:** `Bẫy Load Balancer vẫn tiếp tục đẩy đều 100% lưu lượng vào máy chủ bị lỗi`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục IV.1*
> - 💡 **Mẹo hóa giải:** Health Check phát hiện server lỗi ➔ Lập tức cô lập và chuyển traffic sang server lành mạnh.

---

### Câu 13 (cloud-c5-d2-013)

**Theo mô hình phân chia trách nhiệm 9 tầng của điện toán đám mây, phát biểu nào sau đây là ĐÚNG về IaaS?**

- **A.** Khách hàng toàn quyền kiểm soát và quản lý từ tầng Hệ điều hành (OS), Runtime đến Data và Applications.
- **B.** Khách hàng chỉ chịu trách nhiệm bảo trì các thanh RAM vật lý và hệ thống quạt tản nhiệt của máy chủ.
- **C.** Nhà cung cấp dịch vụ đám mây chịu trách nhiệm cấu hình mật khẩu người dùng bên trong máy ảo khách hàng.
- **D.** Khách hàng hoàn toàn không quản lý bất kỳ tầng kỹ thuật nào tương tự như khi sử dụng dịch vụ SaaS.

> **Đáp án đúng:** **A** — *Khách hàng toàn quyền kiểm soát và quản lý từ tầng Hệ điều hành (OS), Runtime đến Data và Applications.*
>
> **Giải thích chi tiết:** Trong mô hình IaaS, nhà cung cấp lo 4 tầng hạ tầng (Ảo hóa, Máy chủ, Storage, Mạng). Khách hàng toàn quyền kiểm soát và chịu trách nhiệm 5 tầng phía trên: Hệ điều hành (OS), Middleware, Runtime, Data và Applications.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Các phương án nhiễu gán sai trách nhiệm phần cứng hoặc đánh đồng ranh giới IaaS với SaaS.
> - 🎯 **Từ khóa gài bẫy:** `Chuẩn xác 5 tầng trách nhiệm của khách hàng trong IaaS từ tầng OS trở lên`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục I.1*
> - 💡 **Mẹo hóa giải:** IaaS = Khách hàng quản lý từ Hệ điều hành (OS) trở lên đến Dữ liệu và Ứng dụng.

---

### Câu 14 (cloud-c5-d2-014)

**Về các đặc tính kỹ thuật của máy chủ vật lý Bare-Metal trong IaaS, phát biểu nào sau đây là ĐÚNG?**

- **A.** Hệ điều hành bắt buộc phải chạy thông qua một phần mềm ảo hóa Hypervisor trung gian của nhà cung cấp.
- **B.** Mang lại hiệu năng tính toán cao nhất và ổn định tuyệt đối vì giao tiếp trực tiếp với phần cứng thật.
- **C.** Không hỗ trợ cài đặt các hệ điều hành phổ biến như Linux hay Windows Server trên máy chủ vật lý.
- **D.** Tài nguyên máy chủ luôn bị chia sẻ cho hàng trăm khách hàng khác nhau nhằm mục đích giảm chi phí.

> **Đáp án đúng:** **B** — *Mang lại hiệu năng tính toán cao nhất và ổn định tuyệt đối vì giao tiếp trực tiếp với phần cứng thật.*
>
> **Giải thích chi tiết:** Máy chủ vật lý Bare-Metal không qua lớp ảo hóa Hypervisor, hệ điều hành truy cập trực tiếp CPU/RAM phần cứng thật nên mang lại hiệu năng cao nhất, chịu tải cực lớn và ổn định 100%, không lo hiện tượng Noisy Neighbor.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh dễ nhầm Bare-Metal với máy ảo hoặc nghĩ Bare-Metal không chạy được Linux.
> - 🎯 **Từ khóa gài bẫy:** `Hiệu năng tính toán cao nhất và ổn định tuyệt đối vì giao tiếp trực tiếp phần cứng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục II.1*
> - 💡 **Mẹo hóa giải:** Bare-Metal = Máy chủ vật lý thật (No Hypervisor) ➔ Hiệu năng tối đa, không chia sẻ phần cứng.

---

### Câu 15 (cloud-c5-d2-015)

**Về nguyên lý hoạt động của thuật toán cân bằng tải Least Connections, phát biểu nào sau đây là ĐÚNG?**

- **A.** Phân phối các yêu cầu tuần tự lần lượt cho từng máy chủ theo số thứ tự từ 1 đến hết rồi quay lại.
- **B.** Sử dụng thuật toán băm địa chỉ MAC của người dùng để chọn ra máy chủ phục vụ ngẫu nhiên không kiểm tra.
- **C.** Chuyển hướng yêu cầu mới đến máy chủ hiện đang duy trì số lượng kết nối hoạt động thấp nhất trong cụm.
- **D.** Luôn luôn gửi toàn bộ 100% tất cả các yêu cầu vào máy chủ duy nhất có dung lượng ổ đĩa trống nhiều nhất.

> **Đáp án đúng:** **C** — *Chuyển hướng yêu cầu mới đến máy chủ hiện đang duy trì số lượng kết nối hoạt động thấp nhất trong cụm.*
>
> **Giải thích chi tiết:** Least Connections theo dõi số lượng kết nối đang mở (active connections) của từng backend server và chuyển request mới đến server có ít kết nối nhất, giúp tối ưu hóa tải khi thời lượng xử lý request không đều nhau.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Các phương án nhiễu mô tả Round Robin (tuần tự) hoặc cơ chế băm sai lệch.
> - 🎯 **Từ khóa gài bẫy:** `Chuyển yêu cầu đến máy chủ có số lượng kết nối hoạt động thấp nhất trong cụm`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục IV.1*
> - 💡 **Mẹo hóa giải:** Least Connections = Kết nối ít nhất ➔ Dành cho các tác vụ có thời gian xử lý không đồng đều.

---

### Câu 16 (cloud-c5-d2-016)

**Về cấu trúc và cách thức lưu trữ của hệ thống lưu trữ đối tượng (Object Storage), nhận định nào sau đây là ĐÚNG?**

- **A.** Dữ liệu được chia thành các track và sector trên đĩa từ tương tự như ổ cứng máy tính cá nhân truyền thống.
- **B.** Chỉ cho phép lưu trữ các tệp văn bản thuần túy và nghiêm cấm việc lưu trữ các tệp hình ảnh hoặc video.
- **C.** Bắt buộc người dùng phải gắn trực tiếp vào cổng SATA của máy chủ vật lý mới có thể đọc được dữ liệu.
- **D.** Mỗi đối tượng gồm dữ liệu nhị phân, siêu dữ liệu (Metadata) phong phú và một mã định danh duy nhất.

> **Đáp án đúng:** **D** — *Mỗi đối tượng gồm dữ liệu nhị phân, siêu dữ liệu (Metadata) phong phú và một mã định danh duy nhất.*
>
> **Giải thích chi tiết:** Object Storage lưu trữ dữ liệu dưới dạng đối tượng gồm 3 thành phần cấu thành chuẩn học thuật: (1) Khối dữ liệu nhị phân (Binary data); (2) Siêu dữ liệu mô tả (Metadata); (3) Khóa định danh duy nhất (Unique ID).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh dễ nhầm cấu trúc Sector của ổ đĩa cơ hoặc nghĩ Object Storage cấm lưu ảnh.
> - 🎯 **Từ khóa gài bẫy:** `Mỗi đối tượng gồm dữ liệu nhị phân, siêu dữ liệu Metadata và mã định danh duy nhất`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** Cấu trúc Object Storage = Data + Metadata + Unique ID (truy cập qua REST API).

---

### Câu 17 (cloud-c5-d2-017)

**Trong quản trị thảm họa (Disaster Recovery), định nghĩa nào sau đây về chỉ số RTO là CHUẨN XÁC NHẤT?**

- **A.** Khoảng thời gian tối đa cho phép hệ thống ngừng hoạt động trước khi được khôi phục trở lại bình thường.
- **B.** Tổng dung lượng dữ liệu tối đa tính bằng terabyte mà hệ thống chấp nhận bị mất mát sau một thảm họa.
- **C.** Số lượng máy tính cá nhân của nhân viên văn phòng bị nhiễm mã độc tống tiền trong cùng một ngày.
- **D.** Khoảng thời gian mà doanh nghiệp bắt buộc phải thanh toán tiền thuê bao cho nhà cung cấp dịch vụ.

> **Đáp án đúng:** **A** — *Khoảng thời gian tối đa cho phép hệ thống ngừng hoạt động trước khi được khôi phục trở lại bình thường.*
>
> **Giải thích chi tiết:** RTO (Recovery Time Objective) là chỉ tiêu thời gian tối đa cho phép hệ thống gián đoạn dịch vụ (Downtime) sau khi sự cố xảy ra cho đến khi hệ thống hoạt động trở lại bình thường.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Dễ nhầm với định nghĩa của RPO (đo lường lượng dữ liệu mất tính theo thời gian).
> - 🎯 **Từ khóa gài bẫy:** `Khoảng thời gian tối đa cho phép hệ thống ngừng hoạt động trước khi phục hồi`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** RTO = Recovery Time Objective (Mục tiêu thời gian phục hồi tối đa sau thảm họa).

---

### Câu 18 (cloud-c5-d2-018)

**Bản chất của giải pháp Khởi tạo hạ tầng bằng mã nguồn (Infrastructure as Code - IaC) trong IaaS là gì?**

- **A.** Bắt buộc kỹ sư phải đến tận trung tâm dữ liệu để dùng chìa khóa cơ học mở tủ rack máy chủ hàng ngày.
- **B.** Sử dụng các tệp tin cấu hình khai báo để tự động cung cấp, mở rộng và quản trị tài nguyên hạ tầng đám mây.
- **C.** Phần mềm tự động viết mã nguồn các trang web thương mại điện tử thay thế hoàn toàn cho lập trình viên.
- **D.** Cơ chế tự động in toàn bộ thông tin đăng nhập của máy chủ ra giấy để lưu trữ trong két sắt công ty.

> **Đáp án đúng:** **B** — *Sử dụng các tệp tin cấu hình khai báo để tự động cung cấp, mở rộng và quản trị tài nguyên hạ tầng đám mây.*
>
> **Giải thích chi tiết:** IaC (như Terraform, Ansible, CloudFormation) định nghĩa toàn bộ hạ tầng (VMs, VPC, Load Balancers) dưới dạng mã nguồn cấu hình, cho phép tự động hóa việc khởi tạo, nhân bản và quản trị hạ tầng có thể kiểm soát phiên bản (Version control).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh dễ hiểu nhầm IaC là phần mềm tự động viết code web thay cho con người.
> - 🎯 **Từ khóa gài bẫy:** `Sử dụng các tệp tin cấu hình khai báo để tự động cung cấp và quản trị hạ tầng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục I.1 & III.1*
> - 💡 **Mẹo hóa giải:** IaC = Hạ tầng được định nghĩa bằng mã nguồn (Code) ➔ Tự động hóa triển khai & nhân bản.

---

### Câu 19 (cloud-c5-d2-019)

**Khi đối chiếu giữa Microsoft Azure và Amazon Web Services (AWS), dịch vụ máy chủ ảo tương đương là gì?**

- **A.** Dịch vụ máy chủ Amazon S3 tương đương trực tiếp với dịch vụ máy chủ ảo Microsoft Azure VMs.
- **B.** Dịch vụ lưu trữ Amazon EBS tương đương trực tiếp với dịch vụ máy chủ ảo Microsoft Azure VMs.
- **C.** Dịch vụ tính toán Azure Virtual Machines tương đương trực tiếp với dịch vụ Amazon Elastic Compute Cloud.
- **D.** Hai nhà cung cấp này hoàn toàn không có bất kỳ dịch vụ máy chủ ảo nào tương đương nhau trên thực tế.

> **Đáp án đúng:** **C** — *Dịch vụ tính toán Azure Virtual Machines tương đương trực tiếp với dịch vụ Amazon Elastic Compute Cloud.*
>
> **Giải thích chi tiết:** Dịch vụ máy chủ ảo tính toán cốt lõi của AWS là Amazon EC2 (Elastic Compute Cloud), tương đương trực tiếp với Azure Virtual Machines (Azure VMs) của Microsoft và Google Compute Engine (GCE) của Google Cloud.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh dễ nhầm S3 (Object Storage) hoặc EBS (Block Storage) với EC2.
> - 🎯 **Từ khóa gài bẫy:** `Azure Virtual Machines tương đương trực tiếp với dịch vụ Amazon EC2 của AWS`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục VII.1*
> - 💡 **Mẹo hóa giải:** EC2 (AWS) = Azure VMs (Microsoft) = Compute Engine (Google Cloud).

---

### Câu 20 (cloud-c5-d2-020)

**Về cơ chế hoạt động của thuật toán cân bằng tải IP Hash, nhận định nào sau đây là ĐÚNG?**

- **A.** Thuật toán chỉ cho phép các máy tính có cùng một địa chỉ IP nội bộ mới được gửi yêu cầu lên hệ thống.
- **B.** Mỗi lần người dùng gửi yêu cầu, thuật toán sẽ tự động đổi địa chỉ IP của máy chủ sang một dải số mới.
- **C.** Hệ thống sẽ từ chối phục vụ đối với tất cả các địa chỉ IP của khách hàng đến từ các quốc gia châu Á.
- **D.** Sử dụng thuật toán băm địa chỉ IP của Client để gắn kết cố định người dùng với một máy chủ backend cụ thể.

> **Đáp án đúng:** **D** — *Sử dụng thuật toán băm địa chỉ IP của Client để gắn kết cố định người dùng với một máy chủ backend cụ thể.*
>
> **Giải thích chi tiết:** IP Hash lấy địa chỉ IP của client đưa qua hàm băm để tính ra chỉ số máy chủ backend cố định. Điều này bảo đảm mọi request từ cùng một client luôn đến cùng một server (phục vụ Sticky Session / Stateful Session).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Các phương án nhiễu bịa đặt về việc đổi IP máy chủ hoặc phân biệt vùng địa lý.
> - 🎯 **Từ khóa gài bẫy:** `Sử dụng hàm băm địa chỉ IP của Client để gắn kết cố định người dùng với một server`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục IV.1*
> - 💡 **Mẹo hóa giải:** IP Hash = Băm địa chỉ IP Client ➔ Cố định máy chủ phục vụ (Sticky Session).

---

### Câu 21 (cloud-c5-d2-021)

**Về chiến lược sao lưu vi sai / tích lũy (Differential Backup), khẳng định nào sau đây là ĐÚNG?**

- **A.** Sao chép toàn bộ các dữ liệu đã thay đổi hoặc tạo mới kể từ bản sao lưu đầy đủ (Full Backup) gần nhất.
- **B.** Chỉ sao chép các tệp tin có sự thay đổi so với bản sao lưu vi sai được thực hiện vào ngày hôm qua.
- **C.** Bắt buộc người quản trị hệ thống phải xóa sạch toàn bộ cơ sở dữ liệu cũ trước khi thực hiện sao lưu.
- **D.** Hoàn toàn không tốn bất kỳ một megabyte dung lượng đĩa cứng nào trong suốt quá trình sao lưu dữ liệu.

> **Đáp án đúng:** **A** — *Sao chép toàn bộ các dữ liệu đã thay đổi hoặc tạo mới kể từ bản sao lưu đầy đủ (Full Backup) gần nhất.*
>
> **Giải thích chi tiết:** Differential Backup luôn đối chiếu và sao chép TOÀN BỘ dữ liệu đã thay đổi kể từ bản FULL BACKUP gần nhất (khác với Incremental là chỉ so với lần gần nhất bất kỳ). Khi phục hồi chỉ cần: Bản Full + Bản Differential gần nhất.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh rất hay nhầm lẫn định nghĩa của Differential (so với Full) và Incremental (so với lần gần nhất).
> - 🎯 **Từ khóa gài bẫy:** `Sao chép toàn bộ dữ liệu thay đổi kể từ bản sao lưu đầy đủ Full Backup gần nhất`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** Differential Backup = Thay đổi so với bản FULL gần nhất; Incremental = Thay đổi so với LẦN gần nhất.

---

### Câu 22 (cloud-c5-d2-022)

**Về bản chất kiến trúc của giải pháp Cloud-based NAS trong IaaS, phát biểu nào sau đây là ĐÚNG?**

- **A.** Là thiết bị phần cứng bắt buộc phải gắn trực tiếp vào bo mạch chủ của máy tính người dùng cá nhân.
- **B.** Hoạt động như máy chủ lưu trữ tập trung, chia sẻ cây thư mục cho nhiều máy chủ qua giao thức NFS/SMB.
- **C.** Chỉ dùng để lưu trữ các tệp âm thanh và hoàn toàn không hỗ trợ chia sẻ các tệp tin văn phòng Word, PDF.
- **D.** Xóa sạch toàn bộ dữ liệu lưu trữ nếu các máy chủ kết nối bị mất nguồn điện lưới trong vòng 5 phút.

> **Đáp án đúng:** **B** — *Hoạt động như máy chủ lưu trữ tập trung, chia sẻ cây thư mục cho nhiều máy chủ qua giao thức NFS/SMB.*
>
> **Giải thích chi tiết:** Cloud-based NAS trong IaaS đóng vai trò một Máy chủ lưu trữ tập trung (Centralized Storage Server), cung cấp không gian chia sẻ tệp tin dạng cây thư mục qua mạng cho hàng trăm máy chủ qua giao thức mạng NFS hoặc SMB.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh dễ nhầm Cloud NAS với ổ đĩa cục bộ hoặc các phương án bịa đặt về mất dữ liệu.
> - 🎯 **Từ khóa gài bẫy:** `Hoạt động như máy chủ lưu trữ tập trung chia sẻ cây thư mục qua giao thức NFS/SMB`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục VI.1*
> - 💡 **Mẹo hóa giải:** Cloud NAS = Centralized Storage Server + Cây thư mục dùng chung (NFS/SMB).

---

### Câu 23 (cloud-c5-d2-023)

**Xét 3 mệnh đề sau đây về 3 loại máy chủ trong môi trường IaaS:
I. Physical Server (Bare-metal) không sử dụng lớp ảo hóa Hypervisor, mang lại hiệu năng cao nhất.
II. Dedicated Virtual Server sở hữu tài nguyên CPU và RAM riêng biệt, không chia sẻ với máy ảo khác.
III. Shared Virtual Server có chi phí thấp nhất nhưng dễ bị ảnh hưởng bởi hiện tượng Noisy Neighbor.
Tổ hợp khẳng định nào sau đây là ĐÚNG?**

- **A.** Chỉ có mệnh đề I và II đúng.
- **B.** Chỉ có mệnh đề I và III đúng.
- **C.** Cả 3 mệnh đề I, II và III đều đúng.
- **D.** Chỉ có duy nhất mệnh đề II đúng.

> **Đáp án đúng:** **C** — *Cả 3 mệnh đề I, II và III đều đúng.*
>
> **Giải thích chi tiết:** Cả 3 mệnh đề đều phản ánh chính xác các đặc tính kỹ thuật của 3 loại server trong IaaS: Bare-metal (không Hypervisor), Dedicated (tài nguyên riêng), Shared (rẻ nhưng dính Noisy Neighbor).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nghi ngờ một trong 3 định nghĩa này có sai sót về mặt kỹ thuật.
> - 🎯 **Từ khóa gài bẫy:** `Cả 3 mệnh đề về 3 loại máy chủ IaaS đều hoàn toàn chuẩn xác theo giáo trình`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục II.1*
> - 💡 **Mẹo hóa giải:** Physical = Max performance; Dedicated = Tài nguyên riêng; Shared = Rẻ + Noisy Neighbor.

---

### Câu 24 (cloud-c5-d2-024)

**Xét 3 mệnh đề sau đây về bộ tam lưu trữ dữ liệu trong kiến trúc IaaS:
I. Block Storage gắn vào máy chủ như ổ đĩa vật lý, tối ưu cho ổ đĩa boot hệ điều hành và cơ sở dữ liệu.
II. File Storage cung cấp hệ thống tệp tin phân cấp cho phép nhiều máy chủ truy cập đồng thời qua NFS/SMB.
III. Object Storage lưu trữ dữ liệu kèm theo Metadata phong phú và mở rộng dung lượng vô hạn qua HTTP API.
Tổ hợp khẳng định nào sau đây là ĐÚNG?**

- **A.** Chỉ có mệnh đề I và II đúng.
- **B.** Chỉ có mệnh đề I và III đúng.
- **C.** Chỉ có duy nhất mệnh đề I đúng.
- **D.** Cả 3 mệnh đề I, II và III đều đúng.

> **Đáp án đúng:** **D** — *Cả 3 mệnh đề I, II và III đều đúng.*
>
> **Giải thích chi tiết:** Cả 3 mệnh đề đều mô tả chuẩn xác bộ tam lưu trữ đám mây kinh điển: Block Storage (OS boot/DB), File Storage (NFS/SMB chia sẻ đa server) và Object Storage (Metadata/REST API mở rộng vô hạn).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Học viên hay nhầm lẫn tính năng giữa File Storage và Object Storage.
> - 🎯 **Từ khóa gài bẫy:** `Cả 3 mệnh đề về bộ tam Block, File, Object Storage đều hoàn toàn đúng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** Bộ tam lưu trữ: Block (Ổ đĩa boot/DB), File (NFS dùng chung), Object (HTTP API vô hạn).

---

### Câu 25 (cloud-c5-d2-025)

**Xét 3 mệnh đề sau đây về 3 thuật toán cân bằng tải phổ biến trong IaaS:
I. Round Robin phân phối các yêu cầu lần lượt tuần tự theo vòng tròn, phù hợp với server đồng cấu hình.
II. Least Connections chuyển request tới server có ít kết nối nhất, tối ưu khi thời gian xử lý không đều.
III. IP Hash sử dụng thuật toán băm địa chỉ IP của Client để gắn kết cố định phiên làm việc người dùng.
Tổ hợp khẳng định nào sau đây là ĐÚNG?**

- **A.** Cả 3 mệnh đề I, II và III đều đúng.
- **B.** Chỉ có mệnh đề I và II đúng.
- **C.** Chỉ có mệnh đề II và III đúng.
- **D.** Chỉ có duy nhất mệnh đề I đúng.

> **Đáp án đúng:** **A** — *Cả 3 mệnh đề I, II và III đều đúng.*
>
> **Giải thích chi tiết:** Cả 3 mệnh đề đều định nghĩa chính xác 3 thuật toán cân bằng tải trọng tâm của Chương 5: Round Robin (tuần tự vòng tròn), Least Connections (ít kết nối nhất) và IP Hash (băm IP, duy trì Sticky Session).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh có thể không nhớ rõ ứng dụng duy trì session của thuật toán IP Hash.
> - 🎯 **Từ khóa gài bẫy:** `Cả 3 thuật toán Round Robin, Least Connections, IP Hash đều được mô tả chuẩn xác`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục IV.1*
> - 💡 **Mẹo hóa giải:** Nhớ bộ 3: Round Robin (Vòng tròn), Least Connections (Ít kết nối), IP Hash (Sticky Session).

---

### Câu 26 (cloud-c5-d2-026)

**Xét 3 mệnh đề sau đây về tính dự phòng (Redundancy) trong hạ tầng IaaS:
I. Hardware Redundancy sử dụng nguồn điện kép, máy chủ dự phòng và hệ thống mảng ổ đĩa RAID.
II. Data Redundancy thực hiện sao lưu và nhân bản dữ liệu đến nhiều trung tâm dữ liệu độc lập.
III. Việc triển khai Redundancy giúp doanh nghiệp hoàn toàn không phải chi trả chi phí duy trì phần cứng.
Tổ hợp khẳng định nào sau đây là ĐÚNG?**

- **A.** Chỉ có mệnh đề II và III đúng.
- **B.** Chỉ có mệnh đề I và II đúng.
- **C.** Cả 3 mệnh đề I, II và III đều đúng.
- **D.** Chỉ có duy nhất mệnh đề I đúng.

> **Đáp án đúng:** **B** — *Chỉ có mệnh đề I và II đúng.*
>
> **Giải thích chi tiết:** Mệnh đề I và II đúng. Mệnh đề III sai vì việc thiết lập tính dự phòng đòi hỏi chạy thêm phần cứng và nhân bản tài nguyên nên doanh nghiệp VẪN PHẢI TRẢ PHÍ duy trì tài nguyên dự phòng đó.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Mệnh đề III gài bẫy ngụy biện về việc miễn phí chi phí duy trì hạ tầng dự phòng.
> - 🎯 **Từ khóa gài bẫy:** `Mệnh đề III sai về miễn trừ chi phí duy trì; I và II đúng về các loại Redundancy`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** Redundancy tăng tính sẵn sàng nhưng đòi hỏi chi phí cho phần cứng dự phòng; chỉ có I và II đúng.

---

### Câu 27 (cloud-c5-d2-027)

**Xét 3 mệnh đề sau đây về 3 chiến lược sao lưu dữ liệu trong IaaS:
I. Full Backup sao chép toàn bộ dữ liệu, mang lại tốc độ phục hồi nhanh nhất sau sự cố.
II. Incremental Backup chỉ sao chép phần dữ liệu thay đổi so với lần sao lưu gần nhất.
III. Differential Backup có thời gian phục hồi dữ liệu chậm hơn nhiều so với Incremental Backup.
Tổ hợp khẳng định nào sau đây là ĐÚNG?**

- **A.** Chỉ có mệnh đề I và III đúng.
- **B.** Cả 3 mệnh đề I, II và III đều đúng.
- **C.** Chỉ có mệnh đề I và II đúng.
- **D.** Chỉ có duy nhất mệnh đề II đúng.

> **Đáp án đúng:** **C** — *Chỉ có mệnh đề I và II đúng.*
>
> **Giải thích chi tiết:** Mệnh đề I và II đúng. Mệnh đề III sai vì Differential Backup phục hồi NHANH HƠN Incremental Backup (Differential chỉ cần nạp 2 bản: Full + Diff gần nhất; trong khi Incremental phải nạp chuỗi nhiều bản liên tiếp).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Mệnh đề III đánh lừa về tốc độ phục hồi giữa Differential và Incremental.
> - 🎯 **Từ khóa gài bẫy:** `Mệnh đề III sai về tốc độ phục hồi của Differential Backup; I và II đúng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** Tốc độ phục hồi: Full (Nhanh nhất) ➔ Differential (Nhanh vừa) ➔ Incremental (Chậm nhất).

---

### Câu 28 (cloud-c5-d2-028)

**Xét 3 mệnh đề sau đây về hai chỉ số phục hồi thảm họa RTO và RPO:
I. RTO đo lường thời gian gián đoạn tối đa mà hệ thống của doanh nghiệp có thể chấp nhận được.
II. RPO đo lường lượng dữ liệu tối đa chấp nhận bị mất mát tính theo khoảng thời gian sao lưu.
III. Khi giá trị mục tiêu của RTO và RPO càng nhỏ thì chi phí đầu tư cho hệ thống dự phòng càng rẻ.
Tổ hợp khẳng định nào sau đây là ĐÚNG?**

- **A.** Chỉ có mệnh đề I và III đúng.
- **B.** Cả 3 mệnh đề I, II và III đều đúng.
- **C.** Chỉ có duy nhất mệnh đề I đúng.
- **D.** Chỉ có mệnh đề I và II đúng.

> **Đáp án đúng:** **D** — *Chỉ có mệnh đề I và II đúng.*
>
> **Giải thích chi tiết:** Mệnh đề I và II đúng. Mệnh đề III sai vì RTO và RPO càng nhỏ (càng tiệm cận 0 giây) thì hệ thống càng đòi hỏi nhân bản thời gian thực (Active-Active multi-region) cực kỳ tốn kém, chi phí rất đắt đỏ chứ không hề rẻ.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Mệnh đề III gài bẫy kinh tế: RTO/RPO nhỏ là tốt, nhưng chi phí phải CỰC KỲ ĐẮT.
> - 🎯 **Từ khóa gài bẫy:** `Mệnh đề III sai về chi phí đầu tư càng rẻ khi RTO và RPO càng nhỏ; I và II đúng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** RTO/RPO gần bằng 0 (Zero downtime/data loss) ➔ Chi phí đầu tư hạ tầng ĐẮT ĐỎ NHẤT.

---

### Câu 29 (cloud-c5-d2-029)

**Xét 3 mệnh đề sau đây về giải pháp lưu trữ mạng Cloud-based NAS:
I. Đóng vai trò như một máy chủ lưu trữ tập trung (Centralized Storage Server) kết nối qua Internet.
II. Hỗ trợ chia sẻ tệp tin dùng chung cho hàng trăm máy chủ thông qua giao thức NFS, SMB và CIFS.
III. Cho phép mở rộng dung lượng lưu trữ linh hoạt mà không cần tắt hay khởi động lại hệ thống.
Tổ hợp khẳng định nào sau đây là ĐÚNG?**

- **A.** Cả 3 mệnh đề I, II và III đều đúng.
- **B.** Chỉ có mệnh đề I và II đúng.
- **C.** Chỉ có mệnh đề II và III đúng.
- **D.** Chỉ có duy nhất mệnh đề I đúng.

> **Đáp án đúng:** **A** — *Cả 3 mệnh đề I, II và III đều đúng.*
>
> **Giải thích chi tiết:** Cả 3 mệnh đề đều phản ánh chính xác các ưu điểm đột phá của Cloud-based NAS được nêu trong bài giảng: Centralized server, đa giao thức NFS/SMB/CIFS, và khả năng mở rộng trực tuyến (Online scalability).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh có thể không rõ Cloud NAS có mở rộng được mà không cần tắt máy chủ hay không.
> - 🎯 **Từ khóa gài bẫy:** `Cả 3 mệnh đề về tính năng và giao thức của Cloud-based NAS đều hoàn toàn đúng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục VI.1*
> - 💡 **Mẹo hóa giải:** Cloud-based NAS = Centralized Storage + NFS/SMB/CIFS + Mở rộng online linh hoạt.

---

### Câu 30 (cloud-c5-d2-030)

**Xét 3 mệnh đề sau đây về Tam Hùng IaaS toàn cầu (AWS, Microsoft Azure, Google Cloud):
I. Amazon Web Services dẫn đầu thị trường IaaS toàn cầu với các dịch vụ Amazon EC2 và Amazon S3.
II. Microsoft Azure cung cấp các dịch vụ hạ tầng tính toán Azure VMs và lưu trữ Azure Blob Storage.
III. Google Cloud Platform là giải pháp độc quyền chỉ cung cấp PaaS và không hỗ trợ máy chủ ảo IaaS.
Tổ hợp khẳng định nào sau đây là ĐÚNG?**

- **A.** Chỉ có mệnh đề II và III đúng.
- **B.** Chỉ có mệnh đề I và II đúng.
- **C.** Cả 3 mệnh đề I, II và III đều đúng.
- **D.** Chỉ có duy nhất mệnh đề I đúng.

> **Đáp án đúng:** **B** — *Chỉ có mệnh đề I và II đúng.*
>
> **Giải thích chi tiết:** Mệnh đề I và II đúng. Mệnh đề III sai vì Google Cloud Platform (GCP) sở hữu dịch vụ IaaS cực kỳ mạnh mẽ là Google Compute Engine (GCE) và Persistent Disk, thuộc top 3 nhà cung cấp IaaS lớn nhất thế giới.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Mệnh đề III phủ nhận năng lực IaaS của Google Cloud (vốn rất nổi tiếng với GCE).
> - 🎯 **Từ khóa gài bẫy:** `Mệnh đề III sai về Google Cloud không hỗ trợ dịch vụ IaaS; I và II đúng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục VII.1*
> - 💡 **Mẹo hóa giải:** Tam Hùng IaaS toàn cầu: AWS + Microsoft Azure + Google Cloud (GCE là IaaS).

---

### Câu 31 (cloud-c5-d2-031)

**Xét 3 mệnh đề sau đây về kỹ thuật Cân bằng tải (Load Balancing) và an ninh mạng:
I. Load Balancer giúp phân tán các luồng truy cập độc hại nhằm giảm thiểu rủi ro tấn công từ chối dịch vụ (DDoS).
II. Tích hợp giải pháp giải mã chứng chỉ bảo mật tập trung (SSL Termination) để giảm tải tính toán cho máy chủ.
III. Mọi hệ thống Load Balancer bắt buộc phải được chế tạo dưới dạng thiết bị phần cứng cồng kềnh tại văn phòng.
Tổ hợp khẳng định nào sau đây là ĐÚNG?**

- **A.** Chỉ có mệnh đề I và III đúng.
- **B.** Cả 3 mệnh đề I, II và III đều đúng.
- **C.** Chỉ có mệnh đề I và II đúng.
- **D.** Chỉ có duy nhất mệnh đề II đúng.

> **Đáp án đúng:** **C** — *Chỉ có mệnh đề I và II đúng.*
>
> **Giải thích chi tiết:** Mệnh đề I và II đúng. Mệnh đề III sai vì Load Balancer có thể là thiết bị phần cứng chuyên dụng hoặc hoàn toàn là phần mềm / dịch vụ đám mây ảo hóa (như Nginx, HAProxy, AWS ALB, GCP Cloud Load Balancing).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Mệnh đề III ép buộc Load Balancer phải là thiết bị phần cứng cồng kềnh vật lý.
> - 🎯 **Từ khóa gài bẫy:** `Mệnh đề III sai về bắt buộc Load Balancer phải là thiết bị phần cứng; I và II đúng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục IV.1*
> - 💡 **Mẹo hóa giải:** Load Balancer có thể là Hardware Appliance HOẶC Software/Cloud Virtual Appliance.

---

### Câu 32 (cloud-c5-d2-032)

**Xét 3 mệnh đề sau đây về mạng riêng ảo Virtual Private Cloud (VPC) trong IaaS:
I. Cho phép cô lập logic hoàn toàn không gian mạng của doanh nghiệp trên hạ tầng đám mây công cộng.
II. Hỗ trợ phân chia mạng thành các mạng con công khai (Public Subnet) và mạng con riêng tư (Private Subnet).
III. Nghiêm cấm tuyệt đối việc kết nối mạng VPC với trung tâm dữ liệu tại chỗ On-premise thông qua VPN.
Tổ hợp khẳng định nào sau đây là ĐÚNG?**

- **A.** Chỉ có mệnh đề I và III đúng.
- **B.** Cả 3 mệnh đề I, II và III đều đúng.
- **C.** Chỉ có duy nhất mệnh đề I đúng.
- **D.** Chỉ có mệnh đề I và II đúng.

> **Đáp án đúng:** **D** — *Chỉ có mệnh đề I và II đúng.*
>
> **Giải thích chi tiết:** Mệnh đề I và II đúng. Mệnh đề III sai vì VPC hỗ trợ tuyệt vời việc kết nối với mạng On-premise của doanh nghiệp thông qua VPN Gateway hoặc kết nối cáp chuyên dụng (AWS Direct Connect, Azure ExpressRoute) để tạo Hybrid Cloud.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Mệnh đề III cài cắm điều cấm đoán phi lý đối với mạng lai (Hybrid Cloud).
> - 🎯 **Từ khóa gài bẫy:** `Mệnh đề III sai về cấm kết nối với mạng On-premise qua VPN; I và II đúng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1 & VII.1*
> - 💡 **Mẹo hóa giải:** VPC = Cô lập logic + Public/Private Subnet + Kết nối mượt mà với On-premise qua VPN.

---

### Câu 33 (cloud-c5-d2-033)

**Một công ty công nghệ chuyên phân tích dữ liệu lớn (Big Data Analytics) và huấn luyện mô hình thị giác máy tính với cụm GPU. Họ yêu cầu máy chủ phải đạt hiệu năng xử lý thô tối đa, hoàn toàn không có độ trễ do ảo hóa gây ra và kiểm soát trực tiếp phần cứng. Loại máy chủ IaaS nào là lựa chọn tối ưu nhất?**

- **A.** Thuê Physical Server (Máy chủ vật lý Bare-Metal) chạy trực tiếp hệ điều hành trên phần cứng thật.
- **B.** Thuê máy chủ ảo dùng chung (Shared Virtual Server) để tiết kiệm tối đa ngân sách tài chính ban đầu.
- **C.** Chỉ sử dụng máy tính cá nhân của các kỹ sư trong phòng thí nghiệm cắm mạng nội bộ văn phòng.
- **D.** Mua các ổ đĩa mềm cổ điển để lưu trữ dữ liệu huấn luyện và nạp thủ công vào máy tính cá nhân.

> **Đáp án đúng:** **A** — *Thuê Physical Server (Máy chủ vật lý Bare-Metal) chạy trực tiếp hệ điều hành trên phần cứng thật.*
>
> **Giải thích chi tiết:** Physical Server (Bare-Metal) không qua lớp ảo hóa Hypervisor, trao quyền kiểm soát trực tiếp phần cứng và GPU, triệt tiêu độ trễ ảo hóa, là lựa chọn số một cho các bài toán Big Data và tính toán hiệu năng cao (HPC).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh có thể chọn Dedicated Virtual Server nhưng Bare-metal mới là giải pháp không độ trễ ảo hóa.
> - 🎯 **Từ khóa gài bẫy:** `Physical Server (Bare-Metal) chạy trực tiếp phần cứng thật không qua ảo hóa`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục II.1*
> - 💡 **Mẹo hóa giải:** Hiệu năng tối đa, không độ trễ ảo hóa, Big Data/HPC ➔ Physical Server (Bare-Metal).

---

### Câu 34 (cloud-c5-d2-034)

**Một ứng dụng ngân hàng trực tuyến nhận thấy vào những khung giờ cao điểm, tốc độ xử lý giao dịch bị chậm bất thường. Sau khi điều tra, đội ngũ kỹ thuật phát hiện một máy ảo đào tiền mã hóa trên cùng máy vật lý bên dưới đang ngốn sạch tài nguyên CPU dùng chung. Hiện tượng này và giải pháp khắc phục dứt điểm là gì?**

- **A.** Hiện tượng đứt cáp quang biển; giải pháp là cử thợ lặn đi kiểm tra đường dây dưới đáy đại dương.
- **B.** Hiện tượng Noisy Neighbor; giải pháp là chuyển sang Dedicated Virtual Server hoặc Bare-metal Server.
- **C.** Hiện tượng lỗi bộ nhớ đệm trình duyệt; giải pháp là yêu cầu tất cả khách hàng xóa lịch sử duyệt web.
- **D.** Hiện tượng nhà cung cấp đám mây bị phá sản; giải pháp là dừng hoạt động ngân hàng vĩnh viễn ngay lập tức.

> **Đáp án đúng:** **B** — *Hiện tượng Noisy Neighbor; giải pháp là chuyển sang Dedicated Virtual Server hoặc Bare-metal Server.*
>
> **Giải thích chi tiết:** Đây là hiện tượng kinh điển Noisy Neighbor (Láng giềng ồn ào) trên máy chủ ảo dùng chung (Shared Server). Giải pháp dứt điểm là nâng cấp lên Dedicated Virtual Server (tài nguyên riêng) hoặc Physical Server (Bare-metal).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh không nhớ thuật ngữ kỹ thuật 'Noisy Neighbor' và giải pháp di chuyển sang Dedicated Server.
> - 🎯 **Từ khóa gài bẫy:** `Hiện tượng Noisy Neighbor và giải pháp chuyển sang Dedicated Virtual Server`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục II.1*
> - 💡 **Mẹo hóa giải:** Máy ảo láng giềng chiếm dụng CPU ➔ Hiện tượng 'Noisy Neighbor'; Khắc phục = Dùng Dedicated Server.

---

### Câu 35 (cloud-c5-d2-035)

**Một nền tảng mạng xã hội video cần lưu trữ hàng triệu video ngắn do người dùng đăng tải mỗi ngày với kích thước tệp rất đa dạng, dung lượng dự kiến tăng từ vài terabyte lên hàng petabyte mà không muốn phải lo lắng việc phân vùng lại ổ cứng. Loại lưu trữ IaaS nào là phù hợp nhất?**

- **A.** Block Storage gắn trực tiếp vào một máy chủ duy nhất cho đến khi ổ đĩa máy tính bị đầy bộ nhớ.
- **B.** File Storage sử dụng giao thức SMB với giới hạn dung lượng tối đa không vượt quá 500 gigabyte.
- **C.** Object Storage (như Amazon S3, Google Cloud Storage) với khả năng mở rộng vô hạn qua REST API.
- **D.** Lưu trữ dữ liệu tạm thời trên bộ nhớ RAM của máy chủ và xóa sạch toàn bộ sau mỗi 24 giờ hoạt động.

> **Đáp án đúng:** **C** — *Object Storage (như Amazon S3, Google Cloud Storage) với khả năng mở rộng vô hạn qua REST API.*
>
> **Giải thích chi tiết:** Object Storage (Amazon S3, GCP Cloud Storage) được thiết kế chuyên biệt cho dữ liệu phi cấu trúc dung lượng khổng lồ (ảnh, video, backup), mở rộng dung lượng vô hạn tự động và truy xuất trực tiếp qua web API.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ lưu video vào ổ cứng Block Storage hoặc File Storage là đủ.
> - 🎯 **Từ khóa gài bẫy:** `Object Storage với khả năng mở rộng vô hạn và truy cập thông qua REST API`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** Lưu hàng triệu tệp video/ảnh quy mô Petabyte ➔ Lựa chọn duy nhất là OBJECT STORAGE.

---

### Câu 36 (cloud-c5-d2-036)

**Một trang web bán lẻ trực tuyến lưu thông tin giỏ hàng của khách hàng trên bộ nhớ RAM cục bộ của máy chủ web backend mà chưa kịp đồng bộ sang cơ sở dữ liệu dùng chung. Để khách hàng không bị mất giỏ hàng khi tải lại trang, kiến trúc sư hệ thống cần cấu hình thuật toán Load Balancer nào?**

- **A.** Thuật toán Round Robin phân phối tuần tự ngẫu nhiên yêu cầu sang các máy chủ backend khác nhau.
- **B.** Thuật toán Least Connections luôn chuyển yêu cầu sang máy chủ đang có ít kết nối nhất trong cụm.
- **C.** Ngắt toàn bộ các máy chủ web hiện có và chỉ duy trì một máy chủ duy nhất chạy liên tục cả ngày.
- **D.** Thuật toán IP Hash nhằm bảo đảm các yêu cầu từ cùng một địa chỉ IP luôn gửi đến cùng một server.

> **Đáp án đúng:** **D** — *Thuật toán IP Hash nhằm bảo đảm các yêu cầu từ cùng một địa chỉ IP luôn gửi đến cùng một server.*
>
> **Giải thích chi tiết:** Khi ứng dụng là Stateful (lưu giỏ hàng trên RAM cục bộ), thuật toán IP Hash sẽ băm IP của client để định tuyến mọi request của người đó về đúng máy chủ ban đầu, duy trì Sticky Session mượt mà.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh không gắn kết được bài toán duy trì giỏ hàng (Sticky Session) với thuật toán IP Hash.
> - 🎯 **Từ khóa gài bẫy:** `Thuật toán IP Hash bảo đảm các yêu cầu cùng một IP luôn gửi đến cùng một server`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục IV.1*
> - 💡 **Mẹo hóa giải:** Giỏ hàng lưu trên RAM / Cần duy trì Sticky Session ➔ Phải dùng thuật toán IP HASH.

---

### Câu 37 (cloud-c5-d2-037)

**Một công ty tài chính cần triển khai cơ sở dữ liệu quan hệ Oracle Database xử lý hàng chục nghìn giao dịch mỗi giây (OLTP). Ổ đĩa lưu trữ bắt buộc phải đạt tốc độ đọc/ghi IOPS cực cao, độ trễ phản hồi dưới 1 mili-giây và gắn trực tiếp vào máy chủ. Giải pháp lưu trữ nào đáp ứng chuẩn xác?**

- **A.** Block Storage hiệu năng cao (như Amazon EBS io2 hoặc Google Persistent Disk SSD Extreme).
- **B.** Object Storage lưu trữ qua giao thức web HTTP công cộng với độ trễ phản hồi khoảng vài giây.
- **C.** Một ổ đĩa mềm dung lượng 1.44 MB cắm vào cổng USB của máy chủ ảo thông qua phần mềm giả lập.
- **D.** Hệ thống tệp tin mạng File Storage sử dụng đường truyền cáp đồng tốc độ thấp thế hệ cũ thời xưa.

> **Đáp án đúng:** **A** — *Block Storage hiệu năng cao (như Amazon EBS io2 hoặc Google Persistent Disk SSD Extreme).*
>
> **Giải thích chi tiết:** Cơ sở dữ liệu giao dịch OLTP hiệu năng cao bắt buộc phải dùng Block Storage (như Amazon EBS Provisioned IOPS SSD hoặc GCP Extreme Persistent Disk) vì nó giao tiếp qua bus ổ cứng với IOPS cực đại và độ trễ micro-giây.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Các phương án nhiễu rất phi lý; cần nhận diện Block Storage SSD hiệu năng cao cho CSDL.
> - 🎯 **Từ khóa gài bẫy:** `Block Storage hiệu năng cao như Amazon EBS io2 hoặc GCP Persistent Disk SSD`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** Cơ sở dữ liệu Database hiệu năng cao (IOPS cao, low latency) ➔ Block Storage SSD.

---

### Câu 38 (cloud-c5-d2-038)

**Một ngân hàng thương mại yêu cầu xây dựng kế hoạch phục hồi sau thảm họa (Disaster Recovery) với quy định: Trong trường hợp trung tâm dữ liệu chính bị hỏa hoạn, thời gian gián đoạn tối đa không quá 10 phút và lượng dữ liệu giao dịch bị mất tối đa không được vượt quá 30 giây. Mục tiêu kỹ thuật cần thiết lập là gì?**

- **A.** Thiết lập chỉ số RTO là 24 giờ và RPO là 7 ngày cùng giải pháp sao lưu băng từ gửi qua bưu điện.
- **B.** Thiết lập mục tiêu RTO $\le$ 10 phút và RPO $\le$ 30 giây cùng cơ chế nhân bản dữ liệu liên tục thời gian thực.
- **C.** Tắt toàn bộ hệ thống ngân hàng vào ban đêm để tránh nguy cơ xảy ra hỏa hoạn tại phòng máy chủ một các.
- **D.** Yêu cầu khách hàng tự ghi nhớ số dư tài khoản của mình trên giấy để đối chiếu sau khi có sự cố một các.

> **Đáp án đúng:** **B** — *Thiết lập mục tiêu RTO $\le$ 10 phút và RPO $\le$ 30 giây cùng cơ chế nhân bản dữ liệu liên tục thời gian thực.*
>
> **Giải thích chi tiết:** Thời gian gián đoạn tối đa 10 phút = RTO (Recovery Time Objective) $\le$ 10 phút; Lượng dữ liệu mất tối đa 30 giây = RPO (Recovery Point Objective) $\le$ 30 giây, kết hợp Replication liên tục giữa các Data Center.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh dễ nhầm lẫn vị trí của RTO (10 phút) và RPO (30 giây).
> - 🎯 **Từ khóa gài bẫy:** `Thiết lập mục tiêu RTO <= 10 phút và RPO <= 30 giây cùng nhân bản dữ liệu liên tục`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** Thời gian ngừng hệ thống = RTO; Lượng dữ liệu mất = RPO.

---

### Câu 39 (cloud-c5-d2-039)

**Một cụm 15 máy chủ web chạy ứng dụng thương mại điện tử cần đọc và ghi đồng thời vào một không gian lưu trữ tệp tin chung chứa hóa đơn điện tử và hợp đồng PDF của khách hàng, với cấu trúc cây thư mục phân cấp rõ ràng. Giải pháp lưu trữ nào là tối ưu nhất?**

- **A.** Sử dụng 15 ổ đĩa Block Storage độc lập và không cho phép các máy chủ nhìn thấy dữ liệu của nhau.
- **B.** Chỉ lưu trữ hóa đơn trên bộ nhớ Cache tạm thời của một máy tính cá nhân đặt tại phòng bảo vệ.
- **C.** Triển khai giải pháp Cloud-based NAS hoặc File Storage hỗ trợ giao thức chia sẻ tệp tin NFS/SMB.
- **D.** In toàn bộ hóa đơn ra giấy và thuê kho bãi bên ngoài để lưu trữ tài liệu thủ công truyền thống.

> **Đáp án đúng:** **C** — *Triển khai giải pháp Cloud-based NAS hoặc File Storage hỗ trợ giao thức chia sẻ tệp tin NFS/SMB.*
>
> **Giải thích chi tiết:** Khi nhiều máy chủ (Multi-instance) cần đọc/ghi ĐỒNG THỜI vào một cây thư mục tệp tin dùng chung, File Storage / Cloud-based NAS (dùng giao thức NFS hoặc SMB) là giải pháp tối ưu và chuẩn xác nhất.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ Block Storage gắn được cho 15 máy chủ cùng lúc để đọc ghi tệp tin thông thường.
> - 🎯 **Từ khóa gài bẫy:** `Cloud-based NAS hoặc File Storage hỗ trợ giao thức chia sẻ tệp tin NFS/SMB`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1 & VI.1*
> - 💡 **Mẹo hóa giải:** Nhiều máy chủ cùng đọc/ghi cây thư mục chia sẻ ➔ Chọn File Storage / Cloud NAS (NFS/SMB).

---

### Câu 40 (cloud-c5-d2-040)

**Một cổng dịch vụ công trực tuyến nhận thấy hệ thống cân bằng tải Round Robin đang gây nghẽn nghiêm trọng: Máy chủ số 1 bị quá tải 100% CPU do đang xử lý các tác vụ kết xuất báo cáo thống kê phức tạp mất 40 giây, trong khi máy chủ số 2 và 3 lại nhàn rỗi do chỉ xử lý lượt xem tin tức mất 0.2 giây. Thuật toán cân bằng tải nào sẽ giải quyết triệt để tình trạng bất công bằng này?**

- **A.** Tiếp tục duy trì Round Robin và yêu cầu người dân không được tra cứu báo cáo thống kê nữa.
- **B.** Tắt hoàn toàn máy chủ số 2 và số 3 để dồn toàn bộ lưu lượng công việc còn lại vào máy chủ số 1.
- **C.** Chuyển sang thuật toán chọn máy chủ ngẫu nhiên hoàn toàn không cần quan tâm đến tải hệ thống.
- **D.** Chuyển sang thuật toán Least Connections để tự động điều hướng request mới tới server ít kết nối nhất.

> **Đáp án đúng:** **D** — *Chuyển sang thuật toán Least Connections để tự động điều hướng request mới tới server ít kết nối nhất.*
>
> **Giải thích chi tiết:** Khi thời lượng xử lý request chênh lệch lớn (40 giây vs 0.2 giây), thuật toán Least Connections sẽ liên tục đếm số kết nối đang mở và chỉ gửi request mới đến các máy chủ đang rảnh rỗi (server 2 và 3), giải phóng cho server 1.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh không nắm được thế mạnh vượt trội của Least Connections trong việc xử lý tải bất đối xứng.
> - 🎯 **Từ khóa gài bẫy:** `Chuyển sang thuật toán Least Connections điều hướng request tới server ít kết nối nhất`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục IV.1*
> - 💡 **Mẹo hóa giải:** Request xử lý nặng nhẹ không đều gây nghẽn ➔ Giải pháp là LEAST CONNECTIONS.

---

### Câu 41 (cloud-c5-d2-041)

**Một nhóm kỹ sư DevOps cần triển khai đồng bộ một môi trường thử nghiệm bao gồm 30 máy chủ ảo Linux, 2 cụm cân bằng tải, 1 mạng riêng ảo VPC có 4 Subnet và các nhóm bảo mật Firewall. Thay vì bấm chuột thủ công hàng trăm lần trên Dashboard, giải pháp hiện đại nào giúp họ tự động hóa 100% công đoạn này chỉ bằng một dòng lệnh?**

- **A.** Sử dụng công cụ Khởi tạo hạ tầng bằng mã nguồn (IaC như Terraform) thuộc thành phần Automation.
- **B.** Thuê thêm 20 nhân viên thực tập sinh để ngồi phân chia nhau bấm chuột thủ công trên giao diện web.
- **C.** Gửi công văn bằng văn bản giấy qua bưu điện yêu cầu nhà cung cấp đám mây tự bấm chuột hộ công ty.
- **D.** Tắt toàn bộ hệ thống máy tính và chuyển sang làm việc trên giấy tờ sổ sách thủ công truyền thống.

> **Đáp án đúng:** **A** — *Sử dụng công cụ Khởi tạo hạ tầng bằng mã nguồn (IaC như Terraform) thuộc thành phần Automation.*
>
> **Giải thích chi tiết:** Thành phần Management & Automation trong IaaS cung cấp công cụ Infrastructure as Code (IaC như Terraform, Ansible), cho phép lập trình viên định nghĩa toàn bộ hạ tầng bằng mã nguồn và triển khai tự động chỉ với 1 lệnh.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Các phương án nhiễu rất phi lý; đáp án đúng gắn với công cụ chuẩn mực Infrastructure as Code (IaC).
> - 🎯 **Từ khóa gài bẫy:** `Công cụ Khởi tạo hạ tầng bằng mã nguồn IaC như Terraform thuộc thành phần Automation`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục I.1 & III.1*
> - 💡 **Mẹo hóa giải:** Tự động hóa triển khai hạ tầng đám mây bằng code ➔ Infrastructure as Code (IaC / Terraform).

---

### Câu 42 (cloud-c5-d2-042)

**Điểm khác biệt mấu chốt giữa Block Storage và Object Storage trong môi trường IaaS là gì?**

- **A.** Block Storage chỉ lưu văn bản chữ, còn Object Storage là thiết bị phần cứng chỉ dùng để nghe nhạc.
- **B.** Block Storage gắn trực tiếp làm ổ boot/DB, còn Object Storage lưu đối tượng truy cập qua REST API.
- **C.** Block Storage không có khả năng bảo mật, còn Object Storage miễn phí hoàn toàn dung lượng lưu trữ.
- **D.** Hai giải pháp này hoàn toàn đồng nghĩa và chỉ khác nhau ở cách viết tắt bằng tiếng Anh thương mại.

> **Đáp án đúng:** **B** — *Block Storage gắn trực tiếp làm ổ boot/DB, còn Object Storage lưu đối tượng truy cập qua REST API.*
>
> **Giải thích chi tiết:** Khác biệt cốt lõi: Block Storage chia khối nhị phân gắn vào bus ổ đĩa của server (làm OS boot disk, Database); Object Storage lưu tệp phẳng cùng metadata, truy xuất qua giao thức web HTTP/HTTPS REST API.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh rất hay nhầm lẫn cách thức truy cập và mục đích sử dụng giữa Block và Object Storage.
> - 🎯 **Từ khóa gài bẫy:** `Block Storage gắn trực tiếp làm ổ boot/DB; Object Storage lưu đối tượng qua REST API`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** Block Storage = Ổ cứng gắn máy chủ (Boot/DB); Object Storage = Kho lưu trữ tệp qua Web API.

---

### Câu 43 (cloud-c5-d2-043)

**Sự khác biệt căn bản giữa hai chỉ số phục hồi thảm họa RTO và RPO là gì?**

- **A.** RTO đo lường số tiền bị thiệt hại, còn RPO đo lường số lượng nhân viên công ty phải nghỉ việc.
- **B.** RTO là chỉ số áp dụng cho mạng LAN, còn RPO là chỉ số áp dụng cho các mạng máy tính không dây.
- **C.** RTO là thời gian tối đa hệ thống ngừng chạy, còn RPO là lượng dữ liệu tối đa chấp nhận bị mất mát.
- **D.** RTO và RPO là hai thuật ngữ hoàn toàn trái ngược nhau về mặt đạo đức trong kinh doanh tài chính.

> **Đáp án đúng:** **C** — *RTO là thời gian tối đa hệ thống ngừng chạy, còn RPO là lượng dữ liệu tối đa chấp nhận bị mất mát.*
>
> **Giải thích chi tiết:** RTO (Recovery Time Objective) giới hạn thời gian tối đa hệ thống ngừng hoạt động (Downtime). RPO (Recovery Point Objective) giới hạn lượng dữ liệu tối đa chấp nhận bị mất tính từ thời điểm sao lưu gần nhất.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Học viên rất dễ nhầm lẫn giữa trục thời gian ngừng hệ thống (RTO) và lượng dữ liệu mất mát (RPO).
> - 🎯 **Từ khóa gài bẫy:** `RTO là thời gian tối đa ngừng chạy; RPO là lượng dữ liệu tối đa chấp nhận mất mát`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** RTO = Time (Thời gian gián đoạn); RPO = Point in time (Lượng dữ liệu bị mất).

---

### Câu 44 (cloud-c5-d2-044)

**Điểm khác biệt cốt lõi giữa chiến lược sao lưu Incremental Backup và Differential Backup là gì?**

- **A.** Incremental Backup không sao lưu dữ liệu, còn Differential Backup sao chép tất cả các tệp tin hệ thống.
- **B.** Incremental Backup chỉ chạy trên Windows, còn Differential Backup chỉ chạy trên hệ điều hành Linux.
- **C.** Incremental Backup bắt buộc phải dùng đĩa mềm, còn Differential Backup bắt buộc phải dùng đĩa CD.
- **D.** Incremental sao lưu thay đổi so với lần gần nhất, còn Differential sao lưu thay đổi so với bản Full.

> **Đáp án đúng:** **D** — *Incremental sao lưu thay đổi so với lần gần nhất, còn Differential sao lưu thay đổi so với bản Full.*
>
> **Giải thích chi tiết:** Incremental Backup chỉ sao chép phần dữ liệu thay đổi so với LẦN SAO LƯU GẦN NHẤT bất kỳ; Differential Backup sao chép tất cả phần dữ liệu thay đổi so với BẢN FULL BACKUP GẦN NHẤT.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm mốc đối chiếu của Incremental (lần gần nhất) và Differential (bản Full gần nhất).
> - 🎯 **Từ khóa gài bẫy:** `Incremental sao lưu thay đổi so với lần gần nhất; Differential so với bản Full`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** Incremental = So với LẦN gần nhất; Differential = So với bản FULL gần nhất.

---

### Câu 45 (cloud-c5-d2-045)

**Khác biệt mấu chốt về tài nguyên giữa Dedicated Virtual Server và Shared Virtual Server là gì?**

- **A.** Dedicated sở hữu tài nguyên CPU và RAM riêng biệt, còn Shared chia sẻ chung tài nguyên phần cứng.
- **B.** Dedicated chỉ dành cho các trang blog cá nhân, còn Shared là giải pháp độc quyền của các ngân hàng.
- **C.** Dedicated không thể kết nối mạng Internet, còn Shared bắt buộc phải cắm trực tiếp dây cáp quang biển.
- **D.** Dedicated có chi phí thuê hàng tháng rẻ hơn gấp mười lần so với chi phí của Shared Virtual Server.

> **Đáp án đúng:** **A** — *Dedicated sở hữu tài nguyên CPU và RAM riêng biệt, còn Shared chia sẻ chung tài nguyên phần cứng.*
>
> **Giải thích chi tiết:** Dedicated Virtual Server được cấp phát CPU/RAM riêng biệt, không chia sẻ với ai trên máy vật lý, hiệu năng ổn định; Shared Virtual Server chia sẻ chung CPU/RAM với các máy ảo khác, dễ bị Noisy Neighbor.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Nhiều người nghĩ Dedicated đắt hơn thì là máy chủ vật lý, hoặc nhầm lẫn về chi phí.
> - 🎯 **Từ khóa gài bẫy:** `Dedicated sở hữu tài nguyên riêng biệt; Shared chia sẻ chung tài nguyên phần cứng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục II.1*
> - 💡 **Mẹo hóa giải:** Dedicated = Riêng biệt (không Noisy Neighbor); Shared = Dùng chung (rẻ, dính Noisy Neighbor).

---

### Câu 46 (cloud-c5-d2-046)

**Khác biệt căn bản về cơ chế điều phối giữa thuật toán Round Robin và Least Connections là gì?**

- **A.** Round Robin chỉ dùng cho mạng không dây, còn Least Connections chỉ dùng cho mạng cáp quang dưới biển.
- **B.** Round Robin phân phối tuần tự theo vòng tròn, còn Least Connections chọn server đang có ít kết nối nhất.
- **C.** Round Robin luôn chọn máy chủ có ổ đĩa lớn nhất, còn Least Connections luôn chọn máy chủ có ít RAM nhất.
- **D.** Round Robin bắt buộc người dùng nhập mật khẩu, còn Least Connections cho phép truy cập hoàn toàn ẩn danh.

> **Đáp án đúng:** **B** — *Round Robin phân phối tuần tự theo vòng tròn, còn Least Connections chọn server đang có ít kết nối nhất.*
>
> **Giải thích chi tiết:** Round Robin điều phối lần lượt theo vòng tròn thứ tự (1, 2, 3... 1); Least Connections liên tục đo lường số lượng kết nối đang mở và ưu tiên gửi request mới đến server đang có ít kết nối hoạt động nhất.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Các phương án nhiễu gán ghép sai lệch về dung lượng RAM hoặc mật khẩu truy cập.
> - 🎯 **Từ khóa gài bẫy:** `Round Robin phân phối tuần tự theo vòng tròn; Least Connections chọn server ít kết nối nhất`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục IV.1*
> - 💡 **Mẹo hóa giải:** Round Robin = Tuần tự vòng tròn; Least Connections = Dựa trên số lượng kết nối thực tế.

---

### Câu 47 (cloud-c5-d2-047)

**Điểm khác biệt căn bản về cấu trúc lưu trữ giữa File Storage và Object Storage là gì?**

- **A.** File Storage chỉ lưu trữ các tệp âm thanh MP3, còn Object Storage chỉ lưu trữ các tệp văn bản Word.
- **B.** File Storage không có khả năng bảo mật, còn Object Storage có khả năng tự động chống trộm phần cứng.
- **C.** File Storage tổ chức theo cây thư mục phân cấp, còn Object Storage tổ chức theo không gian phẳng qua API.
- **D.** Hai giải pháp này hoàn toàn đồng nhất về cấu trúc và chỉ khác nhau ở giao thức mạng cục bộ LAN.

> **Đáp án đúng:** **C** — *File Storage tổ chức theo cây thư mục phân cấp, còn Object Storage tổ chức theo không gian phẳng qua API.*
>
> **Giải thích chi tiết:** File Storage lưu trữ dữ liệu theo cấu trúc Cây thư mục phân cấp (Hierarchical folders/files) truy cập qua NFS/SMB; Object Storage lưu dữ liệu trong Không gian phẳng (Flat namespace), không có thư mục lồng nhau, truy xuất qua REST API.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh dễ lầm tưởng Object Storage cũng có các thư mục con lồng nhau như ổ cứng máy tính.
> - 🎯 **Từ khóa gài bẫy:** `File Storage tổ chức theo cây thư mục phân cấp; Object Storage tổ chức theo không gian phẳng`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** File Storage = Cây thư mục phân cấp (Tree structure); Object Storage = Không gian phẳng (Flat).

---

### Câu 48 (cloud-c5-d2-048)

**Sự khác biệt căn bản giữa Hypervisor Loại 1 (Bare-metal) và Hypervisor Loại 2 (Hosted) là gì?**

- **A.** Loại 1 chỉ hoạt động trên điện thoại di động, còn Loại 2 chỉ hoạt động trên các máy chủ siêu máy tính.
- **B.** Loại 1 không thể tạo được máy ảo Windows, còn Loại 2 không thể tạo được các máy chủ ảo chạy Linux.
- **C.** Loại 1 là phần mềm độc hại nguy hiểm, còn Loại 2 là phần mềm chống virus được quốc tế công nhận.
- **D.** Loại 1 cài trực tiếp trên phần cứng vật lý, còn Loại 2 cài đặt như một ứng dụng trên hệ điều hành khác.

> **Đáp án đúng:** **D** — *Loại 1 cài trực tiếp trên phần cứng vật lý, còn Loại 2 cài đặt như một ứng dụng trên hệ điều hành khác.*
>
> **Giải thích chi tiết:** Type 1 Hypervisor (như VMware ESXi, KVM) cài đặt trực tiếp lên phần cứng vật lý (Bare-metal) cho hiệu năng cao; Type 2 Hypervisor (như VMware Workstation, VirtualBox) cài đặt như một ứng dụng chạy trên một OS chủ (Host OS).
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh hay nhầm lẫn vị trí cài đặt của Type 1 (trực tiếp phần cứng) và Type 2 (trên OS chủ).
> - 🎯 **Từ khóa gài bẫy:** `Loại 1 cài trực tiếp trên phần cứng vật lý; Loại 2 cài đặt như ứng dụng trên hệ điều hành`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục III.1*
> - 💡 **Mẹo hóa giải:** Hypervisor Type 1 = Cài trực tiếp trên phần cứng (Bare-metal); Type 2 = Cài trên OS chủ (Hosted).

---

### Câu 49 (cloud-c5-d2-049)

**Khác biệt mấu chốt về ranh giới quản lý hệ thống giữa mô hình IaaS và mô hình PaaS là gì?**

- **A.** Trên IaaS khách hàng chỉ quản lý mã nguồn, còn trên PaaS khách hàng tự quản lý toàn bộ hệ điều hành.
- **B.** Trên IaaS khách hàng tự quản lý Hệ điều hành và Runtime, còn trên PaaS do nhà cung cấp đảm nhận.
- **C.** Trên IaaS khách hàng được miễn phí tiền điện, còn trên PaaS khách hàng bắt buộc phải trả tiền mạng.
- **D.** Hai mô hình này hoàn toàn giống nhau về mọi mặt và chỉ khác nhau ở tên viết tắt bằng tiếng Anh.

> **Đáp án đúng:** **B** — *Trên IaaS khách hàng tự quản lý Hệ điều hành và Runtime, còn trên PaaS do nhà cung cấp đảm nhận.*
>
> **Giải thích chi tiết:** Trong IaaS, khách hàng tự cài đặt và quản trị Hệ điều hành (OS), Middleware và Runtime. Trong PaaS, toàn bộ các tầng này do nhà cung cấp quản lý sẵn, lập trình viên chỉ cần quản lý Applications và Data.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Thí sinh rất hay nhầm lẫn đảo chiều quyền quản trị OS giữa IaaS và PaaS.
> - 🎯 **Từ khóa gài bẫy:** `IaaS khách hàng tự quản lý Hệ điều hành và Runtime; PaaS do nhà cung cấp đảm nhận`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục I.1*
> - 💡 **Mẹo hóa giải:** IaaS = Khách hàng tự lo Hệ điều hành (OS); PaaS = Nhà cung cấp lo sẵn Hệ điều hành (OS).

---

### Câu 50 (cloud-c5-d2-050)

**Điểm khác biệt cốt lõi giữa Hardware Redundancy và Data Redundancy trong hạ tầng IaaS là gì?**

- **A.** Hardware Redundancy chỉ dùng cho văn phòng nhỏ, còn Data Redundancy chỉ dùng cho các viện nghiên cứu.
- **B.** Hardware Redundancy không tốn chi phí mua sắm, còn Data Redundancy bắt buộc phải thanh toán bằng tiền mặt.
- **C.** Hardware Redundancy chỉ hoạt động vào ban ngày, còn Data Redundancy chỉ hoạt động vào các ngày cuối tuần.
- **D.** Hardware Redundancy nhân bản thiết bị vật lý, còn Data Redundancy sao chép dữ liệu sang nhiều vị trí.

> **Đáp án đúng:** **D** — *Hardware Redundancy nhân bản thiết bị vật lý, còn Data Redundancy sao chép dữ liệu sang nhiều vị trí.*
>
> **Giải thích chi tiết:** Hardware Redundancy tập trung vào việc tạo các thành phần phần cứng thay thế (bộ nguồn phụ, máy chủ dự phòng, card mạng kép, RAID); Data Redundancy tập trung vào việc nhân bản dữ liệu sang nhiều phân vùng hoặc trung tâm dữ liệu độc lập.
>
> **Phân tích bẫy tư duy (Trick Details):**
> - ⚠️ **Vì sao dễ sập bẫy:** Các phương án nhiễu rất hài hước và phi lý; câu đúng phân định rõ ranh giới phần cứng vs dữ liệu.
> - 🎯 **Từ khóa gài bẫy:** `Hardware Redundancy nhân bản thiết bị vật lý; Data Redundancy sao chép dữ liệu đa vị trí`
> - 📖 **Dẫn chứng giáo trình:** *Giáo trình Điện toán đám mây — Chương 5, Mục V.1*
> - 💡 **Mẹo hóa giải:** Hardware Redundancy = Nhân bản phần cứng (Nguồn, Máy chủ, RAID); Data Redundancy = Nhân bản dữ liệu.

---

