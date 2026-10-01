# Kế hoạch Thực thi: Biên soạn Bộ đề Bẫy 2 & Xuất File Tổng hợp Chương 5 — Điện toán đám mây

> **Chuyên mục:** Ngân hàng đề thi trắc nghiệm Bẫy tư duy (Trick Exam Sets)  
> **Môn học:** Điện toán đám mây (Cloud Computing)  
> **Chương:** Chương 5 — Infrastructure as a Service (IaaS)  
> **Dữ liệu nguồn giáo trình:** `data/cloud-computing-chapter-5.js`  
> **Bộ đề bẫy 1 đối chiếu:** `data/questions-cloud-ch5-trick1.js` (50 câu: `cloud-c5-d1-001` ➔ `cloud-c5-d1-050`)  
> **Quy mô triển khai:** 50 câu bẫy mới độc lập (`cloud-c5-d2-001` ➔ `cloud-c5-d2-050`) + File tổng hợp 100 câu 2 bộ đề.

---

## 🎯 1. Mục tiêu & Yêu cầu Kỹ thuật Bắt buộc

1. **Đa dạng hóa 5 dạng cấu trúc câu hỏi (50 câu)**:
   * **Dạng 1 (24% = 12 câu)**: Chọn phát biểu SAI / KHÔNG CHÍNH XÁC (Cài cắm mệnh đề ngụy biện: *nhà cung cấp IaaS chịu trách nhiệm tự động vá lỗi hệ điều hành máy ảo của khách hàng, Shared Virtual Server không bao giờ bị ảnh hưởng hiệu năng bởi láng giềng, Object Storage có thể format để làm ổ đĩa boot hệ điều hành, Round Robin là thuật toán tối ưu nhất cho các tác vụ tính toán không đồng đều, Cloud NAS chỉ dùng được trong mạng LAN...*).
   * **Dạng 2 (20% = 10 câu)**: Chọn phát biểu ĐÚNG / CHÍNH XÁC NHẤT (Các phương án nhiễu chứa từ ngữ tuyệt đối hóa sai lệch; kiểm tra chuẩn xác về cơ chế Block Storage, thuật toán Least Connections, chỉ số RTO/RPO trong Disaster Recovery, kiến trúc Tam hùng AWS/Azure/GCP).
   * **Dạng 3 (20% = 10 câu)**: Đánh giá chùm mệnh đề logic kỹ thuật (I, II, III, IV) và chọn tổ hợp chân trị đúng về 3 loại server (Physical, Dedicated, Shared), 3 chiến lược sao lưu (Full, Incremental, Differential), 3 thuật toán Load Balancing, 4 loại Redundancy.
   * **Dạng 4 (18% = 9 câu)**: Tình huống / Kịch bản kỹ thuật & kiến trúc thực tế (Lựa chọn Bare-metal cho Big Data/HPC, đối phó hiện tượng Noisy Neighbor trong ngân hàng bằng Dedicated Server, chọn Object Storage lưu trữ video stream, cấu hình IP Hash cho Sticky Session, lập kế hoạch Disaster Recovery với RTO dưới 15 phút).
   * **Dạng 5 (18% = 9 câu)**: Phân biệt các cặp khái niệm song sinh dễ nhầm lẫn (Block Storage vs File Storage vs Object Storage, Physical Server vs Dedicated Virtual Server vs Shared Virtual Server, RTO vs RPO, Incremental Backup vs Differential Backup, IaaS vs PaaS).

2. **Khác biệt hoàn toàn với Bộ đề bẫy 1**:
   * 100% câu hỏi mới khai thác sâu vào chi tiết kỹ thuật: cơ chế IOPS và bus kết nối của Block Storage, cấu trúc metadata và REST API của Object Storage, hiện tượng láng giềng ồn ào (Noisy Neighbor), giao thức NFS/SMB của Cloud NAS, chỉ số RTO/RPO, thuật toán băm IP Client, 4 loại Redundancy (Hardware, Software, Network, Data).

3. **Chống đoán bừa tuyệt đối (Equal Option Length Balance)**:
   * Trong cùng một câu hỏi: $\Delta L = L_{\max} - L_{\min} \le 15$ ký tự trên **100% câu hỏi** ($50/50$ câu).

4. **100% Câu hỏi có trường `trickDetails` đầy đủ**:
   * `whyTrapped`: Phân tích cụ thể cơ chế tâm lý khiến học viên dễ chọn sai.
   * `trickWord`: Từ khóa / chi tiết gài bẫy trực tiếp.
   * `citation`: Dẫn chứng mục học thuật trong giáo trình Chương 5.
   * `tip`: Mẹo nhận diện và phương pháp loại trừ phương án nhiễu.

5. **Cân bằng đáp án phân bổ**:
   * Đúng chuẩn 12–13 câu cho mỗi phương án (12A, 13B, 12C, 13D) để tránh thiên lệch xác suất.

6. **Tích hợp hệ thống & Xuất file Markdown tổng hợp**:
   * Tạo file `data/questions-cloud-ch5-trick2.js`.
   * Cập nhật `lib/curriculum.js` tích hợp `sets["trick-2"]` và gộp mảng `tricks`.
   * Tạo tệp `tong-hop-2-de-thi-bay-chuong-5-dien-toan-dam-may.md` tổng hợp toàn diện 100 câu của cả 2 bộ đề bẫy Chương 5, gồm:
     - 2 Bảng tra cứu đáp án nhanh dạng lưới ma trận 10 dòng x 5 cột.
     - Ma trận phân loại 5 dạng câu hỏi bẫy.
     - Toàn bộ nội dung câu hỏi, đáp án, giải thích chi tiết và phân tích bẫy tư duy.

---

## 🗺️ 2. Lộ trình Thực hiện Từng bước (Step-by-Step Execution Plan)

### Bước 1: Khảo sát đối chiếu & Xây dựng Ma trận 50 câu hỏi mới Chương 5
* Rà soát toàn bộ 50 câu của `data/questions-cloud-ch5-trick1.js` để đảm bảo 0% trùng lặp.
* Xây dựng ngân hàng 50 câu mới bao phủ toàn bộ 8 mục giáo trình Chương 5:
  - Mục I: Định nghĩa IaaS & 5 thành phần cơ bản (Servers, Storage, Networking, Virtualization, Management/Automation).
  - Mục II: 3 Loại Server (Physical/Bare-metal, Dedicated Virtual, Shared Virtual & Hiện tượng Noisy Neighbor).
  - Mục III: 3 Loại Storage (Block, File, Object), Mạng VPC, Firewall/Security Groups, Virtualization (Hypervisor vs Container), IaC.
  - Mục IV: Cân bằng tải (Load Balancing), Health Monitoring, 3 Thuật toán (Round Robin, Least Connections, IP Hash) & 5 Lợi ích (chống DDoS, HA).
  - Mục V: Dự phòng (Redundancy: Hardware, Software, Network, Data), 3 Chiến lược sao lưu (Full, Incremental, Differential), RTO và RPO.
  - Mục VI: Cloud-based NAS (Centralized Storage Server, NFS/SMB, 4 Lợi ích, 3 Nhà cung cấp: Nirvanix, AWS FSx, GCP Filestore).
  - Mục VII: 5 Ưu điểm, 5 Use Cases & Tam Hùng IaaS Toàn Cầu (AWS, Azure, GCP).
  - Mục VIII: Tổng kết toàn bộ Chương 5 & Ranh giới trách nhiệm chia sẻ IaaS.

### Bước 2: Tạo script tự động sinh và kiểm thử
* Tạo script `scripts/generate-cloud-ch5-trick2.mjs`:
  - Đảm bảo độ lệch chiều dài $\Delta L \le 15$ trên từng câu.
  - Phân bổ đáp án chuẩn: 12A - 13B - 12C - 13D.
  - Kiểm tra tính duy nhất (0 câu trùng với Đề 1).
  - Ghi ra file `data/questions-cloud-ch5-trick2.js`.

### Bước 3: Kiểm định tự động xác minh tiêu chí
* Tạo script `scripts/verify-cloud-ch5-trick2.mjs` kiểm tra 6 tiêu chuẩn:
  1. Đủ 50 câu hỏi.
  2. ID đúng định dạng `cloud-c5-d2-001` -> `cloud-c5-d2-050`.
  3. $\Delta L \le 15$ ký tự trên 100% câu hỏi.
  4. 100% câu có đủ 4 trường `trickDetails`.
  5. 0 câu trùng lặp với Đề bẫy 1.
  6. Phân bổ đáp án cân bằng.

### Bước 4: Tích hợp vào hệ thống (Curriculum Adapter)
* Sửa file `lib/curriculum.js`:
  - Import `questionsCloudCh5Trick2`.
  - Cập nhật `questionsMap["cloud-ch5"]`: thêm `sets["trick-2"]` và gộp mảng `tricks: [...questionsCloudCh5Trick1, ...questionsCloudCh5Trick2]`.

### Bước 5: Xuất file Markdown Tổng hợp 2 Bộ đề bẫy
* Tạo và chạy script `scripts/generate-cloud-ch5-tricks-markdown.mjs`:
  - Xuất ra `tong-hop-2-de-thi-bay-chuong-5-dien-toan-dam-may.md`.
  - Bao gồm 2 bảng tra cứu đáp án nhanh ở đầu file.
  - Hiển thị đầy đủ câu hỏi, lựa chọn, đáp án đúng, giải thích và 4 trường `trickDetails`.

### Bước 6: Kiểm thử tổng thể & Build hệ thống
* Chạy `npm run test:backend` (xác nhận 17/17 tests pass).
* Chạy `npm run build` (xác nhận Next.js App Router biên dịch thành công 100%).
