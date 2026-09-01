# CHƯƠNG 6: IDENTITY AS A SERVICE (IDaaS)

> Ghi chú tóm tắt – Cloud Computing – Chapter 6

---

## I. Giới thiệu chung

### 1.1. Mục tiêu chương
- Mô tả **khó khăn** trong quản lý danh tính (ID management)
- Thảo luận giải pháp **SSO (Single Sign-On)**
- Trình bày **lợi ích** của IDaaS
- Giới thiệu các **giải pháp IDaaS** của một số công ty

### 1.2. Nội dung chính (6 phần)
1. Single Sign-On
2. Manage federated identities (FIDM)
3. Provision of accounts
4. OpenID
5. Mobile ID management
6. Chapter summary

**➡ Cần nhớ:** IDaaS xoay quanh 3 trụ cột: **Authentication – Authorization – Account Management**

---

## II. Khái niệm cơ bản về IDaaS

### 2.1. Định nghĩa
- **IDaaS** = mô hình dịch vụ cung cấp giải pháp **quản lý danh tính & truy cập (Identity and Access Management)** thông qua **cloud**
- Giúp tổ chức quản lý user & access rights: **hiệu quả – an toàn – tiết kiệm chi phí**

### 2.2. Chức năng chính (3 chức năng cốt lõi)
| Chức năng | Ý nghĩa |
|---|---|
| **Authentication** (Xác thực) | Xác minh danh tính người dùng |
| **Authorization** (Phân quyền) | Cấp quyền truy cập tài nguyên |
| **Account Management** (Quản lý tài khoản) | Tạo, cập nhật, xóa tài khoản |

**➡ Cần nhớ:** 3 chức năng = **AAA** (Authentication – Authorization – Account management)

---

## III. Lợi ích & Thách thức của IDaaS

### 3.1. Lợi ích (6 lợi ích)
1. **Cost savings** – giảm chi phí đầu tư hạ tầng, chi phí bảo trì
2. **Scalability** – linh hoạt, phù hợp tổ chức có quy mô thay đổi
3. **Enhanced security** – bảo mật cao, giảm rủi ro tấn công
4. **Effective access management** – quản lý tập trung, giám sát & báo cáo
5. **Improve user experience** – SSO, đơn giản hóa đăng nhập
6. **Compliance** – hỗ trợ tuân thủ quy định, luôn cập nhật

### 3.2. Thách thức (5 thách thức)
1. **Data security risks** – rủi ro bảo mật dữ liệu
2. **Availability & dependency on supplier** – phụ thuộc nhà cung cấp, rủi ro gián đoạn dịch vụ
3. **Integration with existing systems** – vấn đề tương thích, chuyển đổi (transition)
4. **Compliance with regulations** – quy định bảo vệ dữ liệu cá nhân
5. **Cost** – chi phí triển khai, bảo trì, đào tạo

**➡ Cần nhớ:** Lợi ích nhiều (6) nhưng đánh đổi là **phụ thuộc nhà cung cấp** và **rủi ro bảo mật tập trung**

---

## IV. Federated Identity Management (FIDM)

### 4.1. Khái niệm
- FIDM: hệ thống cho phép user dùng **1 danh tính** để truy cập **nhiều hệ thống khác nhau**
- **Mục tiêu:** tăng tiện lợi + bảo mật khi truy cập nhiều dịch vụ

### 4.2. Thành phần chính
| Thành phần | Vai trò |
|---|---|
| **IdP** (Identity Provider) | Xác thực danh tính, phát hành token |
| **SP** (Service Provider) | Chấp nhận & tin tưởng token từ IdP để cấp quyền truy cập |
| **Token** | Chứng chỉ do IdP cấp để xác minh danh tính với SP |

### 4.3. Quy trình hoạt động (4 bước)
1. Xác thực user tại **IdP**
2. **Issue** (phát hành) authentication token
3. Truy cập dịch vụ tại **SP**
4. **Verify** token tại SP

**➡ Cần nhớ:** FIDM = **IdP phát token → SP xác minh token** (không cần đăng nhập lại)

---

## V. Single Sign-On (SSO)

### 5.1. Khái niệm
- SSO: user **đăng nhập 1 lần** → truy cập được **nhiều ứng dụng/hệ thống** mà không cần login lại
- **Mục tiêu:** đơn giản hóa đăng nhập, tăng trải nghiệm người dùng

### 5.2. Quy trình xác thực SSO (4 bước)
1. Login vào **IdP** (nhập credentials)
2. IdP xác thực → **issue token**
3. User gửi token đến **SP** để request access
4. SP **verify token** → cấp quyền truy cập

### 5.3. Lợi ích SSO
- Đơn giản hóa quản lý mật khẩu
- Cải thiện trải nghiệm người dùng
- Tăng cường bảo mật
- Quản lý tập trung

### 5.4. Thách thức SSO
| Thách thức | Mô tả |
|---|---|
| **Security** | 1 tài khoản SSO bị lộ → mất quyền truy cập nhiều hệ thống |
| **Compatibility** | Vấn đề tương thích giữa các hệ thống/ứng dụng |
| **Complexity** | Triển khai & quản lý phức tạp, đòi hỏi kỹ thuật cao |

**➡ Cần nhớ:** SSO tiện lợi nhưng **rủi ro dây chuyền** nếu tài khoản bị chiếm đoạt (single point of failure)

---

## VI. Provisioning of Accounts & OpenID

### 6.1. Provisioning of Accounts (Cấp phát tài khoản)
- **Định nghĩa:** quá trình tạo, quản lý, duy trì tài khoản người dùng trong hệ thống
- **Mục tiêu:** đảm bảo user có đúng quyền truy cập tài nguyên/dịch vụ cần thiết

**Quy trình (4 bước):**
1. **Create account** – tạo tài khoản mới (tên, email, role)
2. **Grant access** – cấp quyền & vai trò phù hợp
3. **Account management** – cập nhật thông tin, điều chỉnh quyền
4. **Disable/Delete account** – vô hiệu hóa/xóa khi user rời tổ chức

### 6.2. OpenID
- **Định nghĩa:** giao thức mở, cho phép dùng **1 tài khoản** đăng nhập nhiều website/dịch vụ khác nhau
- **Mục tiêu:** đơn giản hóa đăng nhập, tăng bảo mật

**Quy trình (5 bước):**
1. User chọn **OpenID Provider (OP)**
2. OP xác thực user
3. OP **issue token**
4. User dùng token đăng nhập vào **Relying Party (RP)** = dịch vụ
5. RP **cho phép truy cập**

**➡ Cần nhớ:** OpenID giống FIDM nhưng dùng thuật ngữ riêng: **OP (thay IdP)** và **RP (thay SP)**

---

## VII. Mobile ID Management & Ví dụ các giải pháp IDaaS

### 7.1. Mobile ID Management
- **Định nghĩa:** quản lý danh tính & quyền truy cập từ **thiết bị di động** (smartphone, tablet)
- **Mục tiêu:** bảo vệ thông tin/tài nguyên tổ chức khi truy cập từ mobile

**Tính năng chính:**
- MFA (Multi-Factor Authentication)
- **MDM** (Mobile Device Management)
- **MAM** (Mobile Application Management)
- Contextual access control (kiểm soát truy cập theo ngữ cảnh)

**Quy trình (4 bước):** Đăng ký & xác thực thiết bị → Cấu hình & quản lý thiết bị → Quản lý ứng dụng mobile → Theo dõi & giám sát

### 7.2. Ví dụ các giải pháp IDaaS (bảng so sánh nhanh)

| Giải pháp | Đặc điểm nổi bật | Tính năng chính |
|---|---|---|
| **Ping Identity** | Cung cấp IAM tools cho doanh nghiệp, linh hoạt & dễ triển khai | SSO, MFA, Mobile ID Mgmt, Integration |
| **SinglePoint** | Tập trung bảo vệ & quản lý danh tính | Centralized ID mgmt, SSO, MFA, Access Mgmt, Audit |
| **Symplified** | Tương tự SinglePoint, có thêm FIDM | SSO, MFA, Access Mgmt, **FIDM**, Audit |
| **OpenSaaS** | Mô hình **mã nguồn mở (open source)**, tùy biến cao | Open source code, SSO, MFA, Access Mgmt, Easy integration |

**Quy trình triển khai chung (Ping/SinglePoint/Symplified – 5 bước):**
1. Khảo sát & phân tích (Survey and analysis)
2. Cài đặt & cấu hình (Installation and configuration)
3. Tích hợp hệ thống hiện có (Integrate with existing system)
4. Đào tạo & hỗ trợ (Training and support)
5. Theo dõi & tối ưu (Track and optimize)

### 7.3. Chi tiết Ping Identity (ví dụ tiêu biểu)
- **Authentication:** password-based, MFA, biometrics, device-based
  → Quy trình: nhập thông tin → xác thực → bật MFA (nếu có) → cấp quyền truy cập
- **Authorization:** RBAC (Role-Based), ABAC (Attribute-Based), Dynamic Authorization
  → Quy trình: xác thực user → xác định quyền → check chính sách → cấp quyền
- **Account Management:** tạo/xóa tự động, lifecycle mgmt, đồng bộ, recovery
- **Audit:** ghi log truy cập → lưu trữ → phân tích → cảnh báo/báo cáo real-time

**➡ Cần nhớ:** Tất cả các giải pháp IDaaS (Ping, SinglePoint, Symplified, OpenSaaS) đều xoay quanh bộ khung: **SSO + MFA + Access Management + Audit**, khác nhau ở mức độ mở (open source) hay tích hợp thêm FIDM.

---

## 📌 TỔNG KẾT NHANH TOÀN CHƯƠNG

- **IDaaS** = quản lý danh tính & truy cập qua cloud (AAA: Authentication – Authorization – Account Mgmt)
- **FIDM**: 1 danh tính dùng cho nhiều hệ thống (IdP – SP – Token)
- **SSO**: đăng nhập 1 lần, dùng nhiều nơi (dựa trên nền FIDM)
- **OpenID**: chuẩn mở của SSO/FIDM (OP – RP)
- **Provisioning**: vòng đời tài khoản (tạo → cấp quyền → quản lý → xóa)
- **Mobile ID Management**: bảo mật danh tính trên thiết bị di động (MDM, MAM, MFA)
- **Ví dụ thực tế**: Ping Identity, SinglePoint, Symplified, OpenSaaS

**Từ khóa cần nhớ:** IDaaS, SSO, FIDM, IdP/SP, OP/RP, Token, MFA, RBAC/ABAC, MDM/MAM, Provisioning
