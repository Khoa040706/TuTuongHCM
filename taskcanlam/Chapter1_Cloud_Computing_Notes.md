# CHƯƠNG 1: GIỚI THIỆU VỀ ĐIỆN TOÁN ĐÁM MÂY (Introduction to Cloud Computing)

## 🎯 Mục tiêu bài học
- Phân tích hạn chế của mô hình điện toán truyền thống (traditional computing models)
- Hiểu các khái niệm cốt lõi của Cloud Computing
- Khám phá các ứng dụng, công cụ, công nghệ cloud tiêu biểu

---

## I. Tổng quan & Lịch sử Cloud Computing

### I.1. Cloud Computing xuất hiện ở đâu? (Cloud Computing Everywhere)
- Startup lưu trữ website trên cloud, tự động scale khi traffic tăng
- Thiết bị IoT nhà thông minh được điều khiển qua smartphone (dữ liệu qua cloud)
- Doanh nghiệp dùng phần mềm/hạ tầng cloud cho kế toán, lương, hóa đơn
- Sinh viên cộng tác chỉnh sửa tài liệu online qua trình duyệt
- Thiết bị y tế đeo tay upload dữ liệu sức khỏe lên cloud để theo dõi, cảnh báo
- Doanh nghiệp bán lẻ thuê tài nguyên cloud để phân tích dữ liệu bán hàng theo chu kỳ

**Cần nhớ:** Cloud hiện diện ở hầu hết mọi lĩnh vực: web, IoT, doanh nghiệp, giáo dục, y tế, bán lẻ.

---

### I.2. Lịch sử Cloud Computing (History of Cloud Computing)

| Giai đoạn | Sự kiện chính |
|---|---|
| **1960s** | Early Concepts – khái niệm ban đầu; IBM & DEC cung cấp *timesharing* |
| 1972 | IBM phát triển VM (Virtual Machine) đầu tiên |
| 1977 | Cloud Symbol được sử dụng |
| **1990s** | The Rise of the Internet – Internet bùng nổ; 1991 WWW ra đời; 1997 thuật ngữ "Cloud" được Ramesh Chellappa đặt tên |
| 1999 | Salesforce thành lập |
| **2000s** | The Birth of Modern Cloud Computing – 2002 Amazon Web Services (AWS) ra mắt; 2006 Hadoop; 2008 Google App Engine; 2010 Microsoft Azure |
| 2017 | AWS & GCP tính phí theo giây (Pay per Second Billing) |
| 2019 | Thị trường CDN bùng nổ |
| **Hiện tại & tương lai** | Development and Application, Present and Future |

**Cần nhớ:** Cloud phát triển qua 3 giai đoạn lớn: *Timesharing (1960s) → Internet (1990s) → Modern Cloud (2000s)*.

---

## II. Định nghĩa, Kiến trúc & Đặc điểm Cloud Computing

### II.1. Định nghĩa Cloud Computing (Definition)

> **Cloud Computing** là mô hình cung cấp dịch vụ IT qua Internet, cho phép người dùng truy cập và sử dụng tài nguyên tính toán (server, storage, network, software) theo nhu cầu (on-demand) **mà không cần đầu tư hạ tầng vật lý**.

### Kiến trúc Cloud Computing (Cloud Architecture)
```
Cloud Computing (Servers, Virtual Desktop, Software Platform, Application, Storage Data)
        ↓ Internet
   Router ↔ Switch
        ↓
End User (Mobile, Laptop, Printer, Desktop...)
```
- Người dùng kết nối qua Internet → Router → Switch → truy cập tài nguyên cloud

**Cần nhớ:** Cloud = dịch vụ IT qua Internet, không cần sở hữu hạ tầng vật lý.

---

### II.2. Đặc điểm & Lợi ích của Cloud Computing (Features and Benefits)

5 đặc điểm cốt lõi (NIST model):
1. **On-demand self-service** – Tự phục vụ theo nhu cầu
2. **Broad network access** – Truy cập diện rộng (qua mạng, nhiều thiết bị)
3. **Resource pooling** – Chia sẻ tài nguyên (nhiều người dùng dùng chung hạ tầng)
4. **Rapid elasticity** – Khả năng co giãn nhanh (scale up/down linh hoạt) → liên quan **Scalability**
5. **Measured service** – Dịch vụ đo lường được (trả tiền theo mức sử dụng)

**Cần nhớ:** 5 đặc điểm = *On-demand, Broad access, Pooling, Elasticity, Measured*.

---

## III. Phân biệt hệ thống Cloud (Differentiating Cloud Computing Systems)

Có 2 cách phân loại:
- **Deployment Models** (Mô hình triển khai) – *ai sở hữu & chia sẻ tài nguyên như thế nào*
- **Service Models** (Mô hình dịch vụ) – *dịch vụ cloud được cung cấp ra sao*

### III.1. Deployment Models (Mô hình triển khai)

| Mô hình | Định nghĩa | Đặc điểm |
|---|---|---|
| **Private Cloud** (Đám mây riêng) | Do 1 tổ chức sở hữu & vận hành (nội bộ hoặc thuê ngoài) | ✔ Bảo mật cao ✔ Chi phí cao (tự chi trả) ✔ Kiểm soát cao |
| **Public Cloud** (Đám mây công cộng) | Do nhà cung cấp bên ngoài cung cấp, phục vụ công chúng | ✔ Chi phí thấp (pay-as-you-go) ✔ Khả năng mở rộng cao (scalability) ✔ Bảo mật thấp hơn (chia sẻ hạ tầng chung) |
| **Community Cloud** (Đám mây cộng đồng) | Nhiều tổ chức có chung mục tiêu/nhu cầu dùng chung (VD: trường ĐH, viện nghiên cứu) | ✔ Chia sẻ chi phí & tài nguyên ✔ Bảo mật tốt hơn Public |
| **Hybrid Cloud** (Đám mây lai) | Kết hợp ≥2 mô hình (private, public, community) | ✔ Linh hoạt ✔ Quản lý phức tạp (tích hợp nhiều môi trường) |
| **Multi-Cloud** | Dùng nhiều nhà cung cấp cloud cùng lúc (AWS, Azure, GCP...) | ✔ Nhiều nhà cung cấp ✔ Môi trường độc lập ✔ Tránh vendor lock-in ✔ Tăng độ bền vững & linh hoạt |

**Cần nhớ:** Private (riêng - bảo mật cao, tốn kém) – Public (chung - rẻ, dễ mở rộng) – Community (nhóm chung mục đích) – Hybrid (lai) – Multi-Cloud (nhiều nhà cung cấp, tránh phụ thuộc).

### III.2. Service Models (Mô hình dịch vụ)

> Mô tả cách dịch vụ cloud được cung cấp cho người dùng.

| Mô hình | Định nghĩa | Ví dụ |
|---|---|---|
| **SaaS** (Software as a Service) | Cung cấp phần mềm ứng dụng qua Internet, dùng qua trình duyệt, không cần cài đặt/quản lý | Gmail, Google Docs |
| **PaaS** (Platform as a Service) | Cung cấp nền tảng để phát triển, chạy, quản lý ứng dụng mà không cần xây/duy trì hạ tầng | Google App Engine |
| **IaaS** (Infrastructure as a Service) | Cung cấp tài nguyên tính toán cơ bản qua Internet: server, storage, network, theo nhu cầu (on-demand) | AWS EC2 |

**Sơ đồ trách nhiệm quản lý (từ slide "CONSUME IT → BUILD ON IT → MIGRATE TO IT"):**
- SaaS → người dùng chỉ "tiêu thụ" (Consume)
- PaaS → người dùng "xây dựng" trên nền tảng (Build on)
- IaaS → người dùng "di chuyển hạ tầng" lên (Migrate to)

**Các dịch vụ khác (Other services – mô hình "X-as-a-Service"):**
- Database-as-a-Service
- Communication-as-a-Service
- Integration-Platform-as-a-Service
- Testing-as-a-Service
- Network as a Service
- Security as a Service
- Disaster Recovery as a Service
- Mobile Backend as a Service
- Desktop as a Service

**Cần nhớ:** IaaS (hạ tầng) → PaaS (nền tảng) → SaaS (phần mềm) — càng lên cao, người dùng càng ít phải quản lý, nhà cung cấp quản lý càng nhiều.

---

## IV. Công cụ quản lý & Thành phần nền tảng Cloud

### IV.1. Công cụ quản lý Cloud (Cloud Management Tools)

| Loại | Công cụ |
|---|---|
| **Open-Source** (mã nguồn mở) | Apache CloudStack, Eucalyptus, OpenStack |
| **Commercial** (thương mại) | Microsoft Hyper-V & System Center (Cloud OS), VMware vCloud Director |

---

### IV.2. Thành phần nền tảng Cloud (Platform Components)

3 lớp chính:
1. **Foundation layer** (Lớp nền tảng) – ảo hóa, phần cứng → liên quan **Virtualization**
2. **Infrastructure services** (Dịch vụ hạ tầng) – compute, storage, network
3. **Application services** (Dịch vụ ứng dụng) – phần mềm chạy trên hạ tầng

**Cần nhớ:** Kiến trúc cloud xây theo lớp: Foundation → Infrastructure → Application.

---

## V. Thách thức của Cloud Computing (Challenges)

- **Security** (Bảo mật) – dữ liệu lưu trên hạ tầng bên thứ ba
- **Lack of resources** (Thiếu nguồn lực) – thiếu nhân sự/kỹ năng vận hành cloud
- **Governance** (Quản trị) – kiểm soát chính sách sử dụng cloud
- **Compliance** (Tuân thủ) – tuân thủ quy định pháp lý, ngành
- **Multi-Cloud** (Môi trường đa đám mây) – quản lý phức tạp khi dùng nhiều nhà cung cấp

**Cần nhớ:** 5 thách thức = *Security, Resources, Governance, Compliance, Multi-Cloud management*.

---

## VI. Web 2.0 (nền tảng thúc đẩy Cloud Computing)

### Định nghĩa
Web 2.0 = thế hệ web cho phép người dùng **tương tác, tạo và chia sẻ nội dung** (khác Web 1.0 chỉ đọc tĩnh).

### Đặc điểm chính (Main features)
- **User interaction** – Tương tác người dùng
- **Social network** – Mạng xã hội
- **Online collaboration** – Cộng tác trực tuyến
- **User-generated content** – Nội dung do người dùng tạo

### Lợi ích (Benefits)
- High interoperability – Khả năng tương tác cao
- Create rich content – Tạo nội dung phong phú
- Strengthen cooperation – Tăng cường hợp tác
- Community development – Phát triển cộng đồng

### Ví dụ Web 2.0
Blog, Facebook, Twitter, Wikipedia, mạng chia sẻ (share icon), video call/conference

**Cần nhớ:** Web 2.0 = nền web "tương tác 2 chiều" → tiền đề cho các dịch vụ cloud cộng tác (Google Docs, mạng xã hội...).

---

## VII. Ứng dụng thực tế & Tổng kết Chương 1

### VII.1. Ví dụ nền tảng Cloud thực tế (Cloud Applications)

### Google Cloud Platform solutions
- **Gmail**: Easy access (dễ truy cập), Synchronization (đồng bộ), Diverse features (nhiều tính năng)
- **Google Docs** (kèm PSD, Illustrator, PowerPoint, Excel, Apple Pages tương thích): Cost savings (tiết kiệm chi phí), Synchronization (đồng bộ), Easy sharing (dễ chia sẻ)

### Amazon Web Services (AWS)
- **Storage service:**
  - Cung cấp server ảo hóa (virtualized servers) để chạy ứng dụng trên cloud
  - Thuê tài nguyên tính toán theo giờ, co giãn linh hoạt theo nhu cầu → **Auto Scaling**
  - Trả phí theo nhu cầu sử dụng → tiết kiệm chi phí, tăng hiệu quả tài nguyên
- **Benefits of AWS:**
  - **Scalability**: co giãn linh hoạt tài nguyên theo nhu cầu thực tế
  - **Cost savings**: chỉ trả tiền cho tài nguyên đã dùng
  - **High reliability**: nhân bản dữ liệu tự động (data replication) + giải pháp dự phòng (redundancy) → đảm bảo an toàn, độ tin cậy → liên quan **Fault Tolerance & Availability**

**Cần nhớ:** AWS là ví dụ điển hình IaaS: co giãn tài nguyên (scalability/auto scaling), tiết kiệm chi phí, độ tin cậy cao nhờ replication & redundancy (fault tolerance).

---

### VII.2. Tổng kết Chương 1 (Summary)

- **Khái niệm cloud & Internet**: Cloud Computing cung cấp dịch vụ IT qua Internet, dùng tài nguyên theo nhu cầu, không cần đầu tư hạ tầng vật lý
- **Tài nguyên ảo hóa & khả năng mở rộng**: Ứng dụng cloud dựa trên **virtualization** (ảo hóa tài nguyên) và có khả năng **scalability** (mở rộng linh hoạt)

---

## 📌 BẢNG TỪ KHÓA CỐT LÕI CẦN NHỚ

| Khái niệm | Giải thích ngắn |
|---|---|
| **Virtualization** (Ảo hóa) | Tạo tài nguyên ảo (VM, storage ảo...) từ phần cứng vật lý dùng chung → nền tảng của cloud (VD: IBM VM 1972, Foundation layer) |
| **Distributed Computing** (Điện toán phân tán) | Nhiều máy chủ/nguồn lực phối hợp xử lý cùng lúc, phân bổ tài nguyên qua mạng (ngầm hiểu trong kiến trúc Resource pooling) |
| **Scalability** (Khả năng mở rộng) | Tăng/giảm tài nguyên linh hoạt theo nhu cầu → thể hiện qua *Rapid elasticity*, AWS scalability |
| **Auto Scaling** | Tự động co giãn tài nguyên theo tải sử dụng thực tế (AWS: thuê theo giờ, tự scale up/down) |
| **Service Models** | IaaS (hạ tầng) → PaaS (nền tảng) → SaaS (phần mềm) |
| **Deployment Models** | Private – Public – Community – Hybrid – Multi-Cloud |
| **Cloud Architecture** | Foundation layer → Infrastructure services → Application services |
| **Availability** (Tính sẵn sàng) | Dịch vụ luôn truy cập được qua Broad network access, Measured service |
| **Fault Tolerance** (Chịu lỗi) | Nhân bản dữ liệu (data replication) + dự phòng (redundancy) đảm bảo hệ thống vẫn hoạt động khi có sự cố (AWS high reliability) |
| **Security** (Bảo mật) | Thách thức lớn của cloud; Private cloud bảo mật cao nhất, Public cloud thấp nhất |

---

## ✅ GHI NHỚ NHANH TRƯỚC KHI THI
1. Cloud Computing = dịch vụ IT qua Internet, on-demand, không cần đầu tư hạ tầng
2. 5 đặc điểm NIST: On-demand, Broad access, Pooling, Elasticity, Measured
3. Deployment: Private – Public – Community – Hybrid – Multi-Cloud
4. Service: IaaS – PaaS – SaaS (từ hạ tầng → phần mềm)
5. Thách thức: Security, Resources, Governance, Compliance, Multi-Cloud
6. AWS = ví dụ điển hình về Scalability, Cost savings, Fault Tolerance (reliability)
7. Web 2.0 là nền tảng thúc đẩy các ứng dụng cloud tương tác (Gmail, Docs, mạng xã hội)
