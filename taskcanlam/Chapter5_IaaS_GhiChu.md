# CHƯƠNG 5: INFRASTRUCTURE AS A SERVICE (IaaS)

## I. Tổng quan về IaaS

### 1.1. Định nghĩa
- **IaaS (Infrastructure as a Service)**: mô hình dịch vụ cloud cung cấp tài nguyên hạ tầng (servers, storage, networks) qua Internet.
- Người dùng **thuê** phần cứng thay vì tự đầu tư, quản lý hạ tầng vật lý.

### 1.2. Thành phần cơ bản của IaaS
| Thành phần | Mô tả |
|---|---|
| **Servers** | Máy chủ vật lý hoặc ảo |
| **Storage** | Lưu trữ dữ liệu trên ổ đĩa ảo |
| **Networking** | Firewall, load balancer, quản lý mạng |
| **Virtualization system** | Tạo server ảo, tối ưu tài nguyên |
| **Management & Automation** | Công cụ quản lý & tự động hóa |

**➡ Cần nhớ:** IaaS = thuê hạ tầng (server + storage + network) → tiết kiệm đầu tư ban đầu.

---

## II. Các loại Server trong IaaS

### 2.1. Physical Server (Máy chủ vật lý)
- Thiết bị phần cứng thật: CPU, RAM, Storage (HDD/SSD), Motherboard, Power Supply.
- Chạy OS (Linux, Windows Server) giao tiếp trực tiếp phần cứng.
- **Đặc điểm**: hiệu năng cao, tùy biến toàn diện, tải lớn.
- **Ưu điểm**: hiệu năng ổn định, kiểm soát toàn diện.
- **Nhược điểm**: chi phí đầu tư cao, khó mở rộng, quản lý phức tạp.
- **Ứng dụng phù hợp**: Big Data Analytics, ứng dụng doanh nghiệp quan trọng (Critical Enterprise Apps).

### 2.2. Dedicated Virtual Server (Máy chủ ảo chuyên dụng)
- Server ảo, **tài nguyên riêng biệt**, không chia sẻ với server khác trên cùng máy vật lý.
- **Đặc điểm**: hiệu năng ổn định, tùy biến cao, mở rộng linh hoạt.
- **Ưu điểm**: hiệu năng cao (không bị ảnh hưởng bởi tải server khác), bảo mật tốt, dễ quản lý/tùy biến.
- **Nhược điểm**: chi phí cao hơn shared server, cần kỹ năng quản lý.
- **Ứng dụng phù hợp**: tài chính/y tế (bảo mật cao), ERP/CRM, website thương mại điện tử.

### 2.3. Shared Virtual Server (Máy chủ ảo dùng chung)
- Server ảo **chia sẻ tài nguyên** (CPU, RAM, storage) với server ảo khác trên cùng máy vật lý.
- **Ưu điểm**: chi phí thấp, dễ quản lý & triển khai, linh hoạt.
- **Nhược điểm**: hiệu năng không ổn định, bảo mật thấp hơn, tùy biến hạn chế.
- **Ứng dụng phù hợp**: website cá nhân/blog, doanh nghiệp nhỏ, dự án test/dev.

**➡ Cần nhớ (so sánh nhanh):**
| Loại | Hiệu năng | Chi phí | Bảo mật |
|---|---|---|---|
| Physical | Cao nhất | Cao nhất | Cao |
| Dedicated Virtual | Cao, ổn định | Trung bình-cao | Cao |
| Shared Virtual | Không ổn định | Thấp | Thấp |

---

## III. Các thành phần khác của IaaS

### 3.1. Storage
- **Object Storage**: lưu dữ liệu dạng object.
- **Block Storage**: cung cấp block dữ liệu gắn vào server.
- **File Storage**: hệ thống file dùng chung, nhiều server truy cập.

### 3.2. Networking
- **Virtual Network**: kết nối server & dịch vụ trong cloud.
- **Firewall**: kiểm soát traffic, bảo vệ an ninh.
- **Load Balancer**: phân phối traffic đều giữa các server.

### 3.3. Virtualization System
- **Hypervisor**: tạo server ảo từ tài nguyên phần cứng.
- **Containerization**: ảo hóa ở tầng OS, đóng gói ứng dụng thành container.

### 3.4. Management & Automation
- **Management Tools**: giao diện & dashboard quản lý tài nguyên.
- **Automation**: công cụ tự động triển khai, quản lý, mở rộng tài nguyên.

---

## IV. Load Balancing (Cân bằng tải)

### 4.1. Định nghĩa & thành phần
- **Load Balancing**: phân phối traffic/công việc đều giữa các server → tránh quá tải, hệ thống chạy mượt.
- **Thành phần chính**:
  - Load Balancer: thiết bị/phần mềm phân phối traffic.
  - Backend Servers: xử lý request từ user.

### 4.2. Cách hoạt động
- **Traffic distribution**: LB phân phối request đến backend servers.
- **Health monitoring**: kiểm tra tình trạng & hiệu năng backend servers.

### 4.3. Thuật toán phổ biến
- **Round Robin**: phân phối request tuần tự.
- **Least Connections**: gửi đến server có ít connection nhất.
- **IP Hash**: dùng IP client để xác định server.

### 4.4. Lợi ích của Load Balancing
- **Tăng hiệu năng & tải**: phân phối workload, tránh overload 1 server; tăng khả năng xử lý ứng dụng.
- **High Availability & Reliability**: redundancy/fault tolerance (chuyển traffic khi server lỗi); Auto-scaling (thêm/bớt tài nguyên theo traffic).
- **Cải thiện trải nghiệm người dùng**: giảm response time, tăng hiệu năng ứng dụng.
- **Tăng bảo mật**: chống DDoS (phân tán traffic độc hại); các giải pháp bảo mật bổ sung.
- **Giảm chi phí vận hành**: tối ưu resource usage, dễ quản lý & giám sát.

**➡ Cần nhớ:** Load Balancing = phân phối tải + tăng Availability + Fault Tolerance + bảo mật.

---

## V. Redundancy (Dự phòng) & Data Storage

### 5.1. Khái niệm & mục tiêu
- **Redundancy**: tạo bản sao / cơ chế thay thế để hệ thống & dữ liệu tiếp tục hoạt động khi có sự cố.
- **Mục tiêu**: đảm bảo High Availability & Reliability, giảm downtime & mất dữ liệu.

### 5.2. Các loại Redundancy
- **Hardware Redundancy**: server, ổ cứng, nguồn điện, kết nối mạng dự phòng.
- **Software Redundancy**: bản sao lưu phần mềm/dịch vụ.
- **Network Redundancy**: kết nối mạng dự phòng.
- **Data Redundancy**: sao lưu dữ liệu ở nhiều vị trí.

### 5.3. Phương pháp Data Redundancy
- **Backup**: Full, Incremental, Differential backup.
- **Disaster Recovery**: kế hoạch & quy trình phục hồi.
- **Data Replication**: sao chép dữ liệu đến nhiều vị trí khác nhau.

### 5.4. Lợi ích của Redundancy
- Đảm bảo tính sẵn sàng & liên tục dịch vụ (High Availability, Business Continuity).
- Bảo vệ dữ liệu (Data Loss Prevention, Disaster Recovery).
- Tăng độ tin cậy & hiệu năng hệ thống (giảm downtime, cân bằng tải).
- Tăng bảo mật (chống cyber attack, kiểm soát truy cập).
- Tối ưu chi phí vận hành (giảm chi phí khắc phục sự cố, tối ưu tài nguyên).

**➡ Cần nhớ:** Redundancy = sao lưu + dự phòng → Fault Tolerance + High Availability.

---

## VI. Cloud-based NAS (Network Attached Storage)

### 6.1. Định nghĩa
- **NAS**: thiết bị lưu trữ kết nối mạng, cho phép truy cập & chia sẻ dữ liệu từ bất kỳ thiết bị nào có kết nối mạng.
- Hoạt động như **centralized storage server**, cung cấp không gian lưu trữ & quản lý dữ liệu cho nhiều user/thiết bị.

### 6.2. Lợi ích
- **Truy cập mọi lúc mọi nơi**: chỉ cần Internet.
- **Mở rộng linh hoạt**: dễ tăng dung lượng lưu trữ.
- **Bảo mật cao**: mã hóa dữ liệu, kiểm soát truy cập, giám sát an ninh.
- **Dễ quản lý**: giao diện trực quan, công cụ tự động hóa.

### 6.3. Ví dụ nhà cung cấp Cloud NAS
- **Nirvanix CloudNAS**: object storage, mở rộng linh hoạt, tích hợp dễ.
- **Amazon FSx for NetApp ONTAP**: hiệu năng cao, bảo mật, tuân thủ chuẩn.
- **Google Cloud Filestore**.

### 6.4. Ứng dụng của Cloud NAS
- Lưu trữ & chia sẻ dữ liệu (document, image, video) giữa user/nhóm.
- Sao lưu & phục hồi dữ liệu quan trọng.
- Storage cho ứng dụng cloud (database, data analytics, web services).

---

## VII. Ưu điểm, Use Case & Nhà cung cấp IaaS

### 7.1. Ưu điểm của giải pháp IaaS
- **Giảm chi phí đầu tư ban đầu**: tiết kiệm chi phí hardware/infra, trả tiền theo nhu cầu (pay-as-you-go).
- **Linh hoạt & khả năng mở rộng (Scalability)**: dễ tăng/giảm tài nguyên, tùy biến cấu hình.
- **Tiết kiệm chi phí vận hành**: giảm chi phí bảo trì, tự động hóa quản lý.
- **Tăng bảo mật & tuân thủ**: bảo mật đa lớp (mã hóa, kiểm soát truy cập); tuân thủ chuẩn quốc tế (ISO 27001, GDPR, HIPAA).
- **Tăng Availability & Reliability**: hệ thống backup & disaster recovery, mạng lưới data center toàn cầu.

### 7.2. Use Case phổ biến của IaaS
| Use Case | Mô tả | Ví dụ |
|---|---|---|
| **Data Storage & Backup** | Lưu trữ & backup dữ liệu, phục hồi nhanh | Amazon S3 |
| **Development & Testing** | Tạo/xóa môi trường dev-test dễ dàng | Microsoft Azure |
| **Website & App Hosting** | Đảm bảo Availability & hiệu năng cao | Google Cloud Platform (host e-commerce) |
| **Disaster Recovery** | Backup dữ liệu & hệ thống tự động | IaaS cho hệ thống tài chính |
| **High-Performance Applications** | Chạy ứng dụng cần tài nguyên tính toán lớn (Big Data, AI) | Amazon EC2 (machine learning) |

### 7.3. Vai trò của IaaS trong doanh nghiệp
- Hỗ trợ **chuyển đổi số** (digital transformation) linh hoạt & hiệu quả.
- **Tối ưu chi phí**: giảm đầu tư ban đầu & vận hành, pay-as-you-go.
- **Tăng linh hoạt & khả năng mở rộng**: co giãn theo nhu cầu, thích ứng thị trường.
- **Tăng bảo mật & tuân thủ quy định**: bảo vệ dữ liệu/ứng dụng khỏi threat.
- **Tăng hiệu năng & Availability**: hardware/network hiệu năng cao + backup/disaster recovery.
- **Hỗ trợ phát triển & triển khai ứng dụng**: môi trường dev-test linh hoạt, deploy nhanh.

### 7.4. Các nhà cung cấp IaaS lớn

**a) Amazon Web Services (AWS)**
- **Amazon EC2** (Elastic Compute Cloud): server ảo (instance), tùy biến CPU/RAM/storage.
- **Amazon S3** (Simple Storage Service): object storage, lưu trữ không giới hạn, độ bền cao.
- **Amazon VPC** (Virtual Private Cloud): mạng riêng ảo, cô lập & bảo mật.
- **AWS IAM** (Identity and Access Management): quản lý quyền truy cập, MFA, RBAC.
- **Lợi ích AWS IaaS**: linh hoạt & scalability, hiệu năng & reliability cao, bảo mật & tuân thủ, tối ưu chi phí.

**b) Microsoft Azure IaaS**
- Azure Virtual Machines, Azure Blob Storage, Azure Virtual Network, Azure Active Directory, Azure Site Recovery, Azure Monitor, Azure Backup, Azure Load Balancer.

**c) Google Compute Engine**
- Google Compute Engine, Google Cloud Storage, Google VPC, Google Cloud IAM.

**➡ Cần nhớ:** 3 ông lớn IaaS = **AWS – Azure – Google Cloud**, mỗi bên đều có: compute (EC2/VM/Compute Engine), storage (S3/Blob/Cloud Storage), network (VPC), IAM (quản lý quyền truy cập).

---

# TỔNG KẾT NHANH (Key Takeaways)

- **IaaS** = thuê hạ tầng (server, storage, network) qua Internet, thay vì đầu tư phần cứng.
- **3 loại server**: Physical (mạnh, đắt) – Dedicated Virtual (cân bằng) – Shared Virtual (rẻ, ít ổn định).
- **Load Balancing**: phân phối tải → tăng Availability, Fault Tolerance, bảo mật, giảm chi phí.
- **Redundancy**: sao lưu/dự phòng (hardware, software, network, data) → chống mất dữ liệu, đảm bảo continuity.
- **Cloud NAS**: lưu trữ tập trung qua mạng, truy cập mọi lúc mọi nơi, dễ mở rộng.
- **Ưu điểm IaaS**: giảm chi phí đầu tư, linh hoạt scalability, bảo mật/tuân thủ, tăng availability.
- **Use case**: Backup, Dev/Test, Hosting, Disaster Recovery, High-performance computing (AI/Big Data).
- **3 nhà cung cấp lớn**: AWS, Microsoft Azure, Google Cloud – đều có compute + storage + network + IAM.
