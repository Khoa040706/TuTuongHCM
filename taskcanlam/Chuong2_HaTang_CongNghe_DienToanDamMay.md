# ĐIỆN TOÁN ĐÁM MÂY – HẠ TẦNG VÀ CÔNG NGHỆ

> **Mục tiêu bài học:**
> - Nắm cơ bản về hạ tầng **Trung tâm dữ liệu (Data Center)**: tổ chức, mạng, điện năng, tản nhiệt.
> - Mô tả **công nghệ ảo hóa (Virtualization)** cốt lõi: ảo hóa phần cứng, ảo hóa phần mềm, đặc trưng riêng.

---

## I. Trung tâm dữ liệu (Data Center) – Tổng quan & Cấu trúc vật lý

### 1.1. Data Center là gì
- Nơi tập trung hạ tầng máy chủ (server), lưu trữ, mạng để vận hành dịch vụ đám mây.

### 1.2. Giá đỡ (Rack)
- Các **rack** chứa thiết bị (server, switch...) được đặt cạnh nhau thành **hàng**.

### 1.3. Cụm (PoD – Point of Delivery)
- Một PoD = tập hợp nhiều rack + hệ thống hỗ trợ, gồm:
  - **Power Distribution System** (hệ thống phân phối điện)
  - **Modular UPS** (bộ lưu điện dạng module)
  - **InfraSuite Manager / DCIM** (phần mềm quản lý hạ tầng data center)
  - **RowCool** (làm mát theo hàng)
  - **Cold/Hot Aisle Containment** (ngăn lối đi nóng/lạnh)

**Cần nhớ:** Rack → PoD → Data Center (từ nhỏ đến lớn).

---

## II. Điện năng và tản nhiệt (Power & Cooling)

### 2.1. Đặc điểm
- Data Center tiêu thụ **lượng điện khổng lồ**.
- **Tản nhiệt = phần đối ứng của điện năng** → điện tiêu thụ càng nhiều thì nhu cầu làm mát càng lớn.
- Thiết bị làm mát quan trọng **ngang hàng** với thiết bị tính toán.

### 2.2. Sàn nâng (Raised Floor) & làm mát bằng không khí
- Cấu trúc kim loại nâng sàn cao **1–4 feet** so với nền bê tông.
- Khoảng trống dưới sàn: chứa **cáp điện** + **luồng khí lạnh**.
- Ống điều hòa thổi khí lạnh dưới sàn nâng → lỗ đục dưới rack → khí lạnh luồn dọc 2 bên rack.
- Mỗi thiết bị có **quạt** hút khí lạnh làm mát mạch điện tử.

### 2.3. Ngăn nhiệt & Lối đi Nóng/Lạnh (Thermal/Aisle Containment)
- Mục đích: đưa khí nóng thoát khỏi rack, tránh bị hút ngược lại thiết bị khác.
- Cách làm:
  - Gắn nắp mặt trước rack, để mặt sau mở.
  - Hút khí lạnh 2 bên, thoát khí nóng ra sau.
  - Xếp rack thành hàng: mặt trước đối diện nhau → **lối đi lạnh (cold aisle)**; mặt sau đối diện nhau → **lối đi nóng (hot aisle)**.
  - **Chimney** (ống dẫn có quạt) thổi khí nóng lên trên.

### 2.4. Lights-Out Data Center ("Trung tâm dữ liệu không đèn")
- Giảm tối đa tiêu thụ điện không cần thiết (tắt đèn khi không có người).
- Máy chủ, switch, storage → truy cập & quản lý **qua mạng** (remote).
- **Lợi ích:**
  - Giảm chi phí nhân sự.
  - Ít khả năng cấu hình sai (do ít người ra vào).
  - Giảm nguy cơ bị tấn công ác ý (vật lý).

**Cần nhớ:** Sàn nâng → Ngăn nhiệt (cold/hot aisle) → Chimney → Lights-out = chuỗi giải pháp tối ưu năng lượng & làm mát.

---

## III. Kết nối mạng (Networking) trong Data Center

### 3.1. Thành phần cơ bản
- **Switch** trong mỗi rack kết nối các server → giao tiếp nội bộ + với phần còn lại DC + Internet.
- Switch đặt trên cùng của rack → **Top-of-Rack switch (ToR switch)**.
- Server dùng **multi-port NIC** (card mạng đa cổng): mỗi cổng nối ToR switch, hoạt động song song → băng thông gấp **K lần** một giao diện đơn.

### 3.2. Hướng lưu lượng: North-South & East-West
- **North-South:** lưu lượng giữa Internet ↔ balancer ↔ các pod/rack (vào/ra DC).
- **East-West:** lưu lượng giữa các rack/pod với nhau (nội bộ DC).
- Mô hình: `Internet → balancer → balancer (mỗi pod) → racks`.

### 3.3. Fat Tree
- Cấu trúc cây phân cấp: 100% traffic qua liên kết gốc, 1/P qua mỗi liên kết cấp pod, 1/PR qua mỗi liên kết trong pod.
- Nhược điểm: liên kết cấp cao dễ **nghẽn cổ chai (bottleneck)**.

### 3.4. Link Aggregation
- Gộp nhiều liên kết tốc độ thấp thành 1 liên kết tốc độ cao.
- Ví dụ: **10 đường 10 Gbps → 1 đường 100 Gbps** (nhờ hardware link aggregation).

### 3.5. Leaf-Spine
- Mỗi **leaf** (gắn với 1 rack) kết nối tới **tất cả spine** → không có single point of failure như Fat Tree.
- Nếu 1 spine hỏng (vd. spine 3) → traffic vẫn định tuyến qua spine còn lại → **tăng khả năng chịu lỗi (fault tolerance)**.

### 3.6. Super-Spine
- Mở rộng Leaf-Spine: thêm tầng **super spine** kết nối nhiều **pod** với nhau.
- Cấu trúc: `super spine → spine (từng pod) → leaf → rack`.

**Cần nhớ:**
| Mô hình | Đặc điểm chính |
|---|---|
| Fat Tree | Cây phân cấp, dễ bottleneck ở gốc |
| Link Aggregation | Gộp nhiều link nhỏ → 1 link lớn |
| Leaf-Spine | Mỗi leaf nối mọi spine → dự phòng tốt |
| Super-Spine | Leaf-Spine mở rộng liên kết nhiều pod |

---

## IV. Lưu trữ (Storage)

### 4.1. Vấn đề của lưu trữ cục bộ (Local Storage)
- 1 server chạy nhiều VM của nhiều khách hàng đồng thời → cần phần mềm **giới hạn dung lượng lưu trữ** mỗi khách hàng.
- Ổ đĩa phân tán khắp DC → khi hỏng, nhân viên phải đến **đúng rack** để thay.

### 4.2. Giải pháp
- **Ảo hóa lưu trữ (Storage Virtualization)** – tách rời lưu trữ vật lý khỏi vị trí/rack cụ thể, quản lý tập trung.

**Cần nhớ:** Storage phân tán + không ảo hóa → khó bảo trì, dễ lỗi cấp phát dung lượng.

---

## V. Công nghệ ảo hóa (Virtualization Technology) – 3 loại

| Loại | Đặc điểm |
|---|---|
| **Software emulation** (Giả lập phần mềm) | Emulator mô phỏng OS2 chạy trên OS1, đọc từng lệnh của chương trình P |
| **Para-virtualization** (Ảo hóa bán phần) | Cần **sửa đổi mã nguồn OS** trước khi chạy |
| **Full virtualization** (Ảo hóa toàn phần) | **Không cần sửa mã nguồn** OS, tránh chi phí mô phỏng phần mềm |

### 5.1. Software Emulation
- Thực thi chương trình P (biên dịch cho OS2) bằng **emulator** chạy trên nền OS1.
- Emulator đọc tuần tự từng **instruction** trong P, mô phỏng hành vi OS2.
- Ví dụ: **BlueStacks** (chạy app Android trên PC), **WINE** (chạy chương trình Windows trên Linux), **Android Emulator**.

### 5.2. Para-virtualization
- Cho phép nhiều OS chạy trên cùng 1 máy.
- **Hypervisor** kiểm soát & lập lịch cho các OS (tương tự OS lập lịch cho process).
- Tốc độ thực thi cao vì bộ xử lý **thực thi lệnh trực tiếp (native execution)**.
- Điều kiện: mã OS phải được **sửa đổi** trước để tránh chiếm quyền phần cứng.

### 5.3. Full Virtualization
- Giống Para nhưng khác biệt:
  - Tránh chi phí mô phỏng phần mềm.
  - **Không cần sửa mã nguồn OS**.
- Đang được dùng để hỗ trợ **VM (Virtual Machine)** trong cloud data center:
  - Mô phỏng tập lệnh thương mại.
  - Cơ sở/hoạt động độc lập, cách ly.
  - Thực thi hiệu quả, chi phí thấp.

**Cần nhớ:** Full virtualization = công nghệ nền tảng cho VM trong cloud hiện nay (không cần sửa OS).

---

## VI. Ảo hóa phần cứng (Hardware Virtualization) & Hypervisor

### 6.1. Ý tưởng chung
- **Hypervisor** (phần mềm trên máy chủ) tạo ra 1 hoặc nhiều **VM (Virtual Machine)**.
- Mỗi VM: khởi động 1 OS riêng + chạy 1 hoặc nhiều ứng dụng.
- Kiến trúc: `apps → OS (từng VM) → hypervisor → server hardware`.

### 6.2. User mode / Kernel mode / Hypervisor mode
- Thông thường: **App → User mode**, **OS → Kernel mode**.
- Khi có hypervisor: **3 mức đặc quyền**:
  1. **Hypervisor mode** – được **tin cậy tuyệt đối**, thực hiện mọi thao tác phần cứng.
  2. **Kernel mode** (OS) – giới hạn tập lệnh, không ảnh hưởng VM khác/hypervisor.
  3. **User mode** (app) – giới hạn tập lệnh, không ảnh hưởng app khác/OS.
- Chỉ **hypervisor** mới được tạo VM & cấp phát bộ nhớ; OS chỉ dùng trong phạm vi được cấp.

### 6.3. Thiết bị nhập xuất ảo (Virtual I/O)
- Luồng: `Guest OS → Virtual I/O → Hypervisor → Device controller`.
- Từ góc nhìn OS: **thiết bị ảo không phân biệt được với thiết bị thật** (cùng thao tác bus).
- Ví dụ: **virtual disk** thực chất dùng mạng data center để lưu vào **data center storage**.

### 6.4. VM là đối tượng số (Digital Object)
- VM được tạo & quản lý **hoàn toàn bằng phần mềm**.
- Hypervisor lưu: bản ghi VM, vùng bộ nhớ đã cấp, thiết bị I/O ảo, trạng thái hiện tại.
- → VM có thể: **đóng gói, di chuyển (migrate), cân bằng tải (load balancing)**.

### 6.5. Chuyển máy ảo (VM Migration) – 3 giai đoạn
1. **Pre-copy** (sao chép trước): copy toàn bộ bộ nhớ VM sang máy mới, VM **vẫn đang chạy**.
2. **Stop-and-copy** (dừng và sao chép): VM **tạm ngưng**, copy các trang đã thay đổi sau bước 1.
3. **Post-copy** (sao chép sau): gửi thông tin trạng thái còn lại (đủ để **unsuspend** VM) sang hypervisor máy mới → VM tiếp tục chạy.

**Cần nhớ:** 3 giai đoạn migration: Pre-copy (đang chạy) → Stop-and-copy (tạm dừng) → Post-copy (khôi phục & chạy tiếp).

---

## VII. Ảo hóa bằng ứng dụng (Hosted Hypervisor)

### 7.1. So sánh với ảo hóa phần cứng
- **Ảo hóa phần cứng:** hypervisor chạy **trực tiếp trên phần cứng**.
- **Ảo hóa bằng ứng dụng:** hypervisor chạy **trên 1 OS thông thường** (host OS) → gọi là **hosted hypervisor**.
- Hosted hypervisor chạy song song với app khác (trong **user mode**), vẫn cho phép tạo/quản lý VM.
- OS của VM gọi là **guest operating system**.

### 7.2. Kiến trúc
`apps on VM → guest OS → hosted hypervisor → host OS (OS chính của user) → computer hardware`
- Các app khác của user chạy song song, không qua VM.

### 7.3. Cơ chế cho Guest OS chạy như đặc quyền cao nhất
- **Cơ chế ảo hóa của bộ xử lý (CPU virtualization).**
- **Ánh xạ thao tác của Guest OS lên Host OS.**

### 7.4. Một số chức năng
- Hypervisor gán **địa chỉ mạng riêng** cho mỗi Guest OS.
- Chuyển tiếp yêu cầu I/O đĩa tới Host OS → Guest OS tưởng đang dùng I/O riêng.
- Có thể **chia sẻ tệp/hệ thống tệp** giữa Host OS và Guest OS.

### 7.5. Hosted Hypervisor vs Multiboot
| | Hosted Hypervisor | Multiboot |
|---|---|---|
| Số OS chạy cùng lúc | **Nhiều, đồng thời** | Chỉ 1 tại một thời điểm |
| Chuyển đổi giữa OS | Nhanh chóng, linh hoạt | Phải khởi động lại máy |

**Cần nhớ:** Hosted hypervisor = ảo hóa "trên OS", khác Multiboot (chỉ chạy 1 OS/lần) — điểm mạnh là chạy đồng thời nhiều OS.

---

## TỪ KHÓA QUAN TRỌNG CẦN NHỚ
- **Data Center, Rack, PoD (Point of Delivery)**
- **Raised floor, Hot/Cold aisle containment, Chimney, Lights-out data center**
- **ToR switch, North-South/East-West traffic, Fat Tree, Link Aggregation, Leaf-Spine, Super-Spine**
- **Storage virtualization**
- **Software emulation, Para-virtualization, Full virtualization**
- **Hypervisor, VM (Virtual Machine), Guest OS, Host OS**
- **User mode / Kernel mode / Hypervisor mode**
- **Virtual I/O**
- **VM Migration: Pre-copy → Stop-and-copy → Post-copy**
- **Hosted hypervisor vs Multiboot**
