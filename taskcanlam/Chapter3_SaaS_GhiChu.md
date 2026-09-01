# CHƯƠNG 3: SOFTWARE AS A SERVICE (SaaS)

## I. Định nghĩa & Đặc điểm SaaS

**1.1. Định nghĩa**
- **SaaS (Software as a Service)** = mô hình phân phối phần mềm, trong đó **nhà cung cấp bên thứ ba (third-party provider)** lưu trữ (host) ứng dụng và cung cấp cho khách hàng qua **Internet**.
- Không cần cài đặt phần mềm tại máy người dùng.

**1.2. Đặc điểm chính (Main characteristics)**
- Access via the Internet (truy cập qua Internet)
- No need to install local software (không cần cài phần mềm cục bộ)
- Updates, Management, Maintenance → do **service provider** thực hiện
- Pay according to use (trả tiền theo mức sử dụng)

> **Cần nhớ:** SaaS = "thuê phần mềm qua mạng", nhà cung cấp lo toàn bộ hạ tầng + vận hành.

---

## II. Ưu điểm & Nhược điểm của SaaS

**2.1. Ưu điểm (Benefits)**
- Cost savings (tiết kiệm chi phí)
- Ability of extension (khả năng mở rộng)
- Update automatically (tự động cập nhật)
- Flexibility and convenience (linh hoạt, tiện lợi)

**2.2. Nhược điểm (Disadvantages)**
- Depends on Internet connection (phụ thuộc kết nối mạng)
- Security and privacy (bảo mật & quyền riêng tư)
- Customization restrictions (hạn chế tùy biến)

> **Cần nhớ:** Đánh đổi giữa "tiện lợi, rẻ" ↔ "phụ thuộc mạng, khó tùy biến, rủi ro bảo mật".

---

## III. Single-tenant vs Multi-tenant SaaS

**3.1. Single-Tenant SaaS (SaaS đơn nhiệm)**
- Mỗi khách hàng có **database + phiên bản phần mềm riêng biệt**, dữ liệu hoàn toàn cô lập, không chia sẻ tài nguyên.
- Phù hợp: doanh nghiệp lớn, tổ chức yêu cầu **bảo mật cao**, cần tùy biến.
- Ưu điểm: High security, Easy customization, Stable performance.
- Nhược điểm: High costs, Difficulty in management.

**3.2. Multi-Tenant SaaS (SaaS đa nhiệm)**
- Nhiều khách hàng **dùng chung database + phần mềm**, mỗi khách chỉ dùng một phần tài nguyên hệ thống.
- Phù hợp: doanh nghiệp nhỏ/vừa, không cần tùy biến cao, muốn giải pháp rẻ, dễ quản lý.
- Ưu điểm: Cost savings, Easy management, Scalability.
- Nhược điểm: Security and privacy, Customization restrictions.

| Tiêu chí | Single-Tenant | Multi-Tenant |
|---|---|---|
| DB & App | Riêng biệt | Dùng chung |
| Bảo mật | Cao | Thấp hơn |
| Chi phí | Cao | Thấp |
| Đối tượng | DN lớn | DN nhỏ/vừa |

> **Cần nhớ:** Single-tenant = "biệt thự riêng", Multi-tenant = "chung cư".

---

## IV. OpenSaaS Solution

**4.1. Định nghĩa**
- **OpenSaaS** = mô hình SaaS phát triển dựa trên **open-source programming languages**, chạy trên **open-source OS** và **open-source database management systems**.

**4.2. Đặc điểm (Features)**
- Open source programming languages
- Open operating system (VD: Linux)
- Open source database

**4.3. Nhược điểm (Disadvantages)**
- Limited technical support (hỗ trợ kỹ thuật hạn chế)
- Security and privacy

**4.4. Ví dụ (Examples)**
- **WordPress.com**: nền tảng blog + CMS, tạo/quản lý website dễ dàng, không cần biết lập trình sâu.
- **Magento**: nền tảng e-commerce mã nguồn mở, giúp DN tạo & quản lý cửa hàng online.
- **Moodle**: Learning Management System (LMS) mã nguồn mở cho giáo dục & doanh nghiệp.

> **Cần nhớ:** OpenSaaS = SaaS + mã nguồn mở → linh hoạt nhưng ít hỗ trợ chính thức.

---

## V. Integration Issues (Mashups)

**5.1. Định nghĩa**
- **Mashup** = quá trình **tích hợp nhiều dịch vụ/dữ liệu từ nhiều nguồn khác nhau** để tạo ra ứng dụng/dịch vụ mới.
- Trong cloud: kết hợp dịch vụ từ nhiều SaaS provider → giải pháp toàn diện cho DN.
- Ví dụ: GoRide kết hợp bản đồ + ride-hailing (map mashup).

**5.2. Hai phương pháp mashup**

| Phương pháp | Cách hoạt động | Ưu điểm | Nhược điểm |
|---|---|---|---|
| **Web-based** | Trình duyệt (qua JavaScript) kết hợp nội dung để hiển thị kết quả | Không cần cài thêm phần mềm, dễ triển khai | Hiệu năng phụ thuộc trình duyệt & tốc độ mạng |
| **Server Based** | Chương trình trên server thực hiện kết hợp dữ liệu | Quản lý dữ liệu tốt hơn, hiệu năng cao hơn (không phụ thuộc browser) | Cần đầu tư hạ tầng server + phần mềm tích hợp |

**5.3. Lợi ích (Benefits) & Thách thức (Challenges)**
- Lợi ích: Flexible integration, Enhanced features, Cost savings
- Thách thức: Security and privacy, Compatibility, Efficiency

**5.4. Công cụ hỗ trợ**
- **EMML** (Enterprise Mashup Markup Language)
- **OpenMashup** (Open Markup Language)

> **Cần nhớ:** Mashup = "trộn nhiều API/dịch vụ thành 1 ứng dụng mới"; 2 kiểu chính = Web-based (client) vs Server-based (server).

---

## VI. Service-Oriented Architecture (SOA)

**6.1. Định nghĩa**
- **SOA** = phương pháp phát triển ứng dụng, trong đó các chức năng được thiết kế thành **các service tái sử dụng (reusable services)**, tương tác với nhau qua mạng (network).

**6.2. Đặc điểm (Characteristics)**
- Modularity (tính module hóa)
- Network communication (giao tiếp qua mạng)
- Integration capabilities (khả năng tích hợp)

**6.3. Ưu & nhược điểm**
- Ưu điểm: Service reuse, Flexible and scalable, Easy integration
- Nhược điểm: Complexity (phức tạp), High cost (chi phí cao)

**6.4. Thành phần (Components)**
- Service Provider
- Service Consumer
- Service Broker

**6.5. Ví dụ minh họa**
- Amazon Web Services (AWS), Microsoft Azure

> **Cần nhớ:** SOA = kiến trúc "lắp ghép" các service độc lập, tái sử dụng được, giao tiếp qua mạng.

---

## VII. SaaS trong thực tế – Bảo mật – Xu hướng tương lai

**7.1. SaaS trong thực tế (SaaS in Reality)**
- **Google Apps / Google Workspace**: Gmail, Drive, Docs, Sheets, Slides, Calendar, Meet.
  - Lợi ích: Cost savings, Easy to manage, Strengthen cooperation, High security.
  - Ứng dụng: Businesses, Education, Personal.
- **Salesforce**: nền tảng CRM (Customer Relationship Management) trên cloud; SaaS Pioneer (tiên phong SaaS trong ngành CRM).
  - Dịch vụ: Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Salesforce Chatter.
  - Lợi ích: Increase sales efficiency, Improve customer service, Marketing Optimization, Enhance internal collaboration.

**7.2. Bảo mật trong SaaS (Security in SaaS)**
- Bảo mật quan trọng vì dữ liệu DN được lưu & xử lý trên cloud.
- Rủi ro: nếu không đảm bảo bảo mật → dữ liệu bị truy cập trái phép, mất hoặc bị tấn công.
- **Biện pháp bảo mật (Security measures):**
  - Data encrypt (mã hóa dữ liệu)
  - Multi-factor authentication – MFA (xác thực đa yếu tố)
  - Access management and authorization (quản lý & phân quyền truy cập)
  - Backup and restore data (sao lưu & phục hồi dữ liệu)
- **Thách thức bảo mật:** Cloud data management, Access control
- Ví dụ: Gmail, Salesforce

**7.3. Tương lai của SaaS (The Future of SaaS)**
- Xu hướng phát triển: Continuous growth, Diverse markets
- Tích hợp công nghệ mới: AI (Artificial Intelligence), IoT (Internet of Things)
- Vẫn cần cải thiện: Security and privacy, Customization capabilities
- Lợi ích dài hạn: Cost effective, Ability of extension → áp dụng trong Finance, Education, Healthcare

**7.4. SaaS kết hợp Blockchain**
- **Blockchain**: công nghệ sổ cái phân tán (distributed ledger), đảm bảo transparency, security, tamper resistance.
- Kết hợp SaaS + Blockchain → tăng bảo mật, minh bạch, độ tin cậy.
- Lợi ích: Enhanced security, Identity and access management, Smart Contract.
- Ứng dụng: Supply chain management, Document management system, Healthcare.

**7.5. SaaS kết hợp Big Data**
- **Big Data**: tập dữ liệu lớn, phức tạp mà công cụ truyền thống không xử lý hiệu quả.
- Kết hợp SaaS + Big Data → giải pháp quản lý, phân tích, sử dụng dữ liệu lớn hiệu quả.
- Lợi ích: In-depth data analysis, Data-driven business decisions.
- Ứng dụng: Retail, Financial sector, Health industry.

> **Cần nhớ:** SaaS thực tế = Google Workspace, Salesforce; Bảo mật SaaS xoay quanh encrypt + MFA + access control; Tương lai SaaS gắn với AI, IoT, Blockchain, Big Data.

---

## TỔNG KẾT NHANH (Key Takeaways)
- SaaS = phần mềm dùng qua Internet, provider quản lý toàn bộ.
- Single-tenant (riêng, bảo mật cao) vs Multi-tenant (chung, rẻ, dễ mở rộng).
- OpenSaaS = SaaS + mã nguồn mở.
- Mashup = tích hợp nhiều dịch vụ (Web-based / Server-based).
- SOA = kiến trúc service tái sử dụng, nền tảng cho tích hợp SaaS.
- SaaS thực tế: Google Workspace, Salesforce.
- Bảo mật: encrypt, MFA, access control, backup.
- Tương lai: AI, IoT, Blockchain, Big Data.
