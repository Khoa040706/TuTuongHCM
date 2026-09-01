# CHƯƠNG 7: CLOUD DATA STORAGE (Lưu trữ dữ liệu trên Cloud)

> Ghi chú tóm tắt phục vụ ôn tập – Faculty of Information Technology

---

## I. Network Storage (Lưu trữ mạng) – Khái niệm & Vai trò

### 1.1. Định nghĩa
- **Network storage**: phương pháp lưu trữ dữ liệu trên các server được kết nối với nhau qua mạng.
- Cho phép chia sẻ & quản lý dữ liệu hiệu quả giữa nhiều người dùng/thiết bị.

### 1.2. Vai trò / Tầm quan trọng
- Cung cấp giải pháp lưu trữ **đáng tin cậy, có khả năng mở rộng (scalable)**.
- Đáp ứng nhu cầu lưu trữ ngày càng tăng của tổ chức/doanh nghiệp.
- Cải thiện: performance (hiệu năng), data management, security, giảm chi phí vận hành.

**➡ Cần nhớ:** Network storage = nền tảng cơ bản trước khi có Cloud Storage. Mục tiêu: chia sẻ + quản lý dữ liệu qua mạng.

---

## II. Giai đoạn đầu của Network Storage (Centralized → NAS → SAN)

### 2.1. Centralized Storage (Lưu trữ tập trung)
- Dữ liệu lưu tại **1 vị trí duy nhất** (server lớn).
- Thường dùng ổ cứng nội bộ hoặc mảng đĩa gắn trực tiếp vào server.
- **Hạn chế**:
  - *Ability of extension*: khó mở rộng do giới hạn không gian/phần cứng.
  - *Efficiency*: hiệu năng giảm khi nhiều người truy cập cùng lúc → bottleneck (nghẽn cổ chai).
  - *Manage*: quản lý tốn công, chi phí cao, dễ mất dữ liệu khi hỏng phần cứng/phần mềm.

### 2.2. NAS – Network Attached Storage
- Thiết bị lưu trữ **kết nối trực tiếp vào LAN**, cho phép user/thiết bị trong mạng truy cập dễ dàng.
- **Lợi ích**: Easy access, Share resources, Low cost.
- Ví dụ ứng dụng: Mac, Windows, laptop, điện thoại, TV, camera, gaming console... đều truy cập chung 1 NAS.

### 2.3. SAN – Storage Area Network
- Mạng **tốc độ cao** kết nối các thiết bị lưu trữ (hard drive, tape drive) với server qua giao thức **Fiber Channel** hoặc **iSCSI**.
- Mục đích: cung cấp hệ thống lưu trữ **tập trung – mở rộng – hiệu năng cao**.
- **Thành phần chính (Main components)**:
  1. Host Layer (Lớp máy chủ)
  2. Fabric Layer (Lớp mạng trung gian – SAN Switch)
  3. Storage Layer (Lớp lưu trữ)
- **Ưu điểm**: Improve application availability, Enhance performance, Simplify centralized management.
- **Nhược điểm**: High initial cost, Complex configuration & management, Limited scalability & vendor dependency, Single point of failure (nếu không có redundancy), High power & space requirements.

**➡ Cần nhớ (so sánh nhanh):**

| Tiêu chí | NAS | SAN |
|---|---|---|
| Kết nối | LAN | Mạng tốc độ cao riêng (Fiber Channel/iSCSI) |
| Truy cập | File-level | Block-level |
| Chi phí | Thấp | Cao |
| Độ phức tạp | Đơn giản | Phức tạp |

---

## III. Cloud Storage – Khái niệm, Kiến trúc & Xu hướng hiện đại

### 3.1. Sự ra đời & phát triển
- Xuất hiện **cuối những năm 2000s** với các dịch vụ: **Amazon S3, Google Cloud Storage, Microsoft Azure Blob Storage**.
- Động lực: nhu cầu lưu trữ dữ liệu lớn + phát triển công nghệ cloud.

### 3.2. Lợi ích (Benefits)
- **Ability of extension** – khả năng mở rộng linh hoạt.
- **Access anytime, anywhere** – truy cập mọi lúc mọi nơi.
- **Cost savings** – tiết kiệm chi phí.

### 3.3. Kiến trúc Cloud Storage (Main components)
Sơ đồ 4 lớp (từ trên xuống):
1. **Client Layer** (Browser, App, API, CLI)
2. **Access Layer** (Auth, HTTPS, REST API)
3. **Service Layer** (Object Management, Metadata, ACL)
4. **Storage Infrastructure** (Servers, Disks, Replication)

#### Chi tiết thành phần kiến trúc (CSA – Cloud Storage Architecture)
- **Storage Servers**: thành phần cốt lõi, lưu dữ liệu + xử lý yêu cầu truy cập; thiết kế dung lượng lớn, hiệu năng cao.
- **Data Transfer Network**: kết nối user ↔ storage server, đảm bảo truyền dữ liệu nhanh – an toàn; băng thông cao, độ trễ thấp.
- **Management Services**: công cụ/phần mềm quản lý & giám sát hoạt động lưu trữ (quản lý tài nguyên, theo dõi hiệu năng, cảnh báo sự cố).

### 3.4. Cơ chế hoạt động (Cloud Storage Works) – Quy trình upload dữ liệu
1. User upload dữ liệu qua **user interface**.
2. Dữ liệu được **phân tán & sao lưu (backup)** trên nhiều server → đảm bảo *availability* & *security*.
3. User truy cập dữ liệu từ bất kỳ đâu có Internet qua **cloud interface**.

### 3.5. Xu hướng hiện đại (Modern Trends)

| Loại lưu trữ | Đặc điểm chính | Ưu điểm | Nhược điểm | Ví dụ |
|---|---|---|---|---|
| **Unstructured Storage** (phi cấu trúc) | Không theo bảng/cột (text, ảnh, video...) | Linh hoạt, chứa mọi loại dữ liệu | Khó tìm kiếm, không dùng SQL | Google Photos, YouTube, Dropbox |
| **Object Storage** | Dữ liệu = **object** gồm *data + metadata + unique ID* | Dễ mở rộng, rẻ, quản lý hiệu quả (nhờ metadata) | Không phù hợp truy cập I/O cao | AWS S3, Google Cloud Storage, Azure Blob |
| **SDS (Software-Defined Storage)** | Tách phần mềm quản lý khỏi phần cứng | Linh hoạt, không phụ thuộc thiết bị, dễ mở rộng | Cấu hình phức tạp, cần kỹ thuật cao | Ceph, OpenStack Swift, VMware vSAN |
| **Hybrid Storage** | Kết hợp Cloud Storage + On-premises Storage | Cân bằng bảo mật – chi phí – hiệu năng | Quản lý phức tạp, tốn chi phí kép | AWS Outposts, Azure Stack, Google Anthos |

- **Hybrid Storage** – ứng dụng: phù hợp tổ chức cần cân bằng hiệu năng/chi phí/bảo mật (tài chính, y tế, chính phủ) → dữ liệu nhạy cảm giữ on-premises, dữ liệu ít quan trọng đưa lên cloud để giảm chi phí.

**➡ Cần nhớ:** Object Storage = data + metadata + ID (khác hẳn File storage truyền thống). SDS = tách phần mềm khỏi phần cứng.

---

## IV. Bảo mật dữ liệu Cloud Storage (Data Security)

### 4.1. Các mối đe dọa (Threats to Data in the Cloud)
- **Cyber attack** (tấn công mạng)
- **Data leak** (rò rỉ dữ liệu)
- **Lost data** (mất dữ liệu)

### 4.2. Biện pháp bảo vệ (Data Protection Measures)
- **Data Encryption** (mã hóa dữ liệu)
- **Access Control** (kiểm soát truy cập)
- **Backup and Recovery** (sao lưu & phục hồi)

### 4.3. Giám sát & phát hiện đe dọa (Threat Monitoring and Detection)
- **Monitoring Systems** – hệ thống giám sát
- **Intrusion Detection** – phát hiện xâm nhập
- **Log Analysis** – phân tích nhật ký

### 4.4. Tuân thủ quy định (Compliance)
- Áp dụng các **tiêu chuẩn/quy định bảo mật** (VD: GDPR, HIPAA, ISO 27001…).
- Đảm bảo tuân thủ (*Ensure compliance*) khi lưu trữ dữ liệu trên cloud.

**➡ Cần nhớ:** 3 đe dọa chính (cyber attack, data leak, lost data) ↔ 3 biện pháp chính (encryption, access control, backup/recovery).

---

## V. Cloud-based Backup System (Hệ thống sao lưu trên Cloud)

### 5.1. Thành phần chính
- **Data Sources** – nguồn dữ liệu cần backup
- **Cloud Infrastructure** – hạ tầng cloud lưu bản backup
- **Backup Management Software** – phần mềm quản lý sao lưu

### 5.2. Quy trình backup (Cloud Data Backup Process)
1. **Bước 1**: Select backup data (chọn dữ liệu cần sao lưu)
2. **Bước 2**: Transfer data to the cloud (truyền dữ liệu lên cloud)
3. **Bước 3**: Store and manage backup data (lưu trữ & quản lý bản backup)

### 5.3. Lợi ích
- **High Availability** (tính sẵn sàng cao)
- **Data Security** (bảo mật dữ liệu)
- **Cost Efficiency** (hiệu quả chi phí)

### 5.4. Thách thức & Giải pháp
| Thách thức | Giải pháp |
|---|---|
| Data security | Encryption and security |
| Regulatory compliance | Transport Optimization + Management and monitoring |

**➡ Cần nhớ:** Quy trình 3 bước: **Select → Transfer → Store/Manage**.

---

## VI. Cloud Storage cho Industry & Database Solutions

### 6.1. Cloud Storage cho ngành công nghiệp (Industry)

**Lợi ích:**
- Khả năng mở rộng (Scalability)
- Tiết kiệm chi phí (Cost Efficiency)
- Truy cập linh hoạt (Flexible Access)
- Tăng cường bảo mật (Enhanced Security)

**Ứng dụng thực tế:**
- Quản lý chuỗi cung ứng (Supply Chain Management)
- Quản lý sản xuất (Production Management)
- Bảo trì dự đoán (Predictive Maintenance)
- Phân tích dữ liệu lớn (Big Data Analytics)

**Thách thức:**
- Bảo mật dữ liệu (Data Security)
- Độ trễ (Latency)
- Tuân thủ quy định (Regulatory Compliance)
- Khả năng tích hợp (Integration)

**Giải pháp & công cụ hỗ trợ:**
- Cloud storage providers
- Data management & security tools
- Backup and recovery strategy
- Integrated solution

### 6.2. Cloud-based Database Solutions

**Nhà cung cấp dịch vụ database trên cloud:**
- Amazon Web Services (**AWS**)
- **Microsoft Azure**
- **Google Cloud Platform (GCP)**

**Công cụ & giải pháp hỗ trợ:**
- Database management tools (từ AWS, Azure, Google Cloud)
- Data backup and recovery strategy → regular backups (sao lưu định kỳ)
- Security and compliance solutions

**➡ Cần nhớ:** 3 "ông lớn" cung cấp cloud database: **AWS – Azure – GCP**.

---

## VII. Block Storage trên nền tảng Cloud Computing

### 7.1. Định nghĩa
- **Block storage**: lưu dữ liệu dưới dạng các **block (khối) riêng lẻ**, mỗi block có **unique identifier**.
- Cho phép truy cập & quản lý dữ liệu **nhanh, linh hoạt**.

### 7.2. Các loại Block Storage phổ biến
- **Amazon Elastic Block Store (EBS)**
- **Google Persistent Disk**
- **Microsoft Azure Managed Disks**

### 7.3. Lợi ích (Benefits)
- Hiệu suất cao (**High Performance**)
- Khả năng mở rộng (**Scalability**)
- Tính sẵn sàng và độ bền (**Availability and Durability**)
- Tích hợp và tương thích (**Integration and Compatibility**)

### 7.4. Ứng dụng (Applications)
- Lưu trữ cơ sở dữ liệu (**Database Storage**)
- Lưu trữ máy ảo (**Virtual Machine Storage**)
- Lưu trữ ứng dụng doanh nghiệp (**Enterprise Application Storage**)

### 7.5. Thách thức & Giải pháp
| Thách thức | Giải pháp |
|---|---|
| Bảo mật dữ liệu (Data Security) | Mã hóa dữ liệu (Data Encryption) |
| Hiệu suất & độ trễ (Performance & Latency) | Sao lưu và phục hồi (Backup and Recovery) |
| Quản lý & tối ưu chi phí (Cost Management) | Quản lý tài nguyên (Resource Management) |
| Tuân thủ quy định (Regulatory Compliance) | Đảm bảo tuân thủ (Compliance Assurance) |

**➡ Cần nhớ:** Block Storage = dữ liệu chia thành **block + ID riêng** → nhanh, linh hoạt, phù hợp Database & Virtual Machine.

---

## 🔑 TỔNG KẾT NHANH CHƯƠNG 7

- **Network Storage** → tiền đề của Cloud Storage: Centralized → NAS (file-level, LAN) → SAN (block-level, tốc độ cao).
- **Cloud Storage**: kiến trúc 4 lớp (Client – Access – Service – Storage Infrastructure); xu hướng gồm Unstructured, Object, SDS, Hybrid Storage.
- **Bảo mật**: 3 đe dọa (cyber attack, leak, lost data) ↔ 3 biện pháp (encryption, access control, backup).
- **Backup System**: quy trình Select → Transfer → Store/Manage.
- **Industry & Database**: 3 nhà cung cấp lớn AWS/Azure/GCP; ứng dụng vào supply chain, production, predictive maintenance, big data.
- **Block Storage**: dữ liệu dạng block + ID, hiệu năng cao, dùng cho database & VM (EBS, Persistent Disk, Azure Managed Disks).
