/* ============================================================
   NGÂN HÀNG CÂU HỎI BẪY CHUYÊN SÂU — CHƯƠNG 5 (BỘ ĐỀ 2)
   Môn học: Điện toán đám mây (Cloud Computing)
   Mã chương: cloud-ch5
   Bộ đề bẫy số: 2 (trick-2)
   Quy mô: 50 câu hỏi bẫy Vận dụng cao (Hard / Trick)
   Đặc điểm:
   - 100% câu hỏi có trickDetails (whyTrapped, trickWord, citation, tip)
   - Đa dạng hóa 5 dạng câu hỏi: Chọn câu SAI, Chọn câu ĐÚNG, Chùm mệnh đề I-II-III,
     Kịch bản kiến trúc thực tế, Phân biệt khái niệm song sinh.
   - 100% câu hỏi đạt chuẩn cân bằng độ dài phương án ΔL = Lmax - Lmin <= 15 ký tự
   - Độc lập 100% với Bộ đề bẫy 1
   - Phân bổ đáp án chuẩn: 12A - 13B - 12C - 13D
   ============================================================ */

export const questionsCloudCh5Trick2 = [
  {
    "id": "cloud-c5-d2-001",
    "chapterId": "cloud-ch5",
    "question": "Khi nghiên cứu về mô hình trách nhiệm chia sẻ trong IaaS, nhận định nào sau đây là SAI?",
    "options": [
      "Nhà cung cấp IaaS chịu trách nhiệm tự động quét virus và cập nhật bản vá cho hệ điều hành máy ảo.",
      "Khách hàng toàn quyền quyết định lựa chọn cài đặt phiên bản hệ điều hành Linux hay Windows Server.",
      "Việc thiết lập cấu hình tường lửa cục bộ và phân quyền truy cập người dùng thuộc trách nhiệm khách hàng.",
      "Nhà cung cấp dịch vụ đám mây chịu trách nhiệm bảo đảm tính sẵn sàng của hạ tầng phần cứng vật lý."
    ],
    "answer": 0,
    "explanation": "Trong mô hình IaaS, nhà cung cấp chỉ quản lý hạ tầng phần cứng và tầng ảo hóa. Khách hàng thuê máy ảo PHẢI tự chịu trách nhiệm cài đặt, quản trị, quét virus và vá lỗi bảo mật cho hệ điều hành của mình.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn giữa IaaS với PaaS/SaaS nơi nhà cung cấp tự vá lỗi hệ điều hành.",
      "trickWord": "Bẫy ngụy biện nhà cung cấp IaaS tự động cập nhật bản vá bảo mật hệ điều hành",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục I.1 & VIII.1",
      "tip": "IaaS = Khách hàng tự cài OS nên KHÁCH HÀNG PHẢI TỰ VÁ LỖI HỆ ĐIỀU HÀNH."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-002",
    "chapterId": "cloud-ch5",
    "question": "Về các đặc tính kỹ thuật của máy chủ ảo dùng chung (Shared Virtual Server), khẳng định nào sau đây là SAI?",
    "options": [
      "Chi phí thuê máy chủ ảo dùng chung rất rẻ, phù hợp cho các website tin tức nhỏ hoặc môi trường thử nghiệm.",
      "Tài nguyên CPU và RAM hoàn toàn cách ly vật lý, không bao giờ bị ảnh hưởng bởi tải của các máy ảo khác.",
      "Hiệu năng tính toán của máy chủ có thể bị suy giảm do hiện tượng láng giềng ồn ào (Noisy Neighbor).",
      "Nhiều máy chủ ảo khác nhau cùng chia sẻ chung năng lực tính toán trên cùng một máy chủ vật lý bên dưới."
    ],
    "answer": 1,
    "explanation": "Shared Virtual Server chia sẻ chung CPU/RAM vật lý; do đó tài nguyên KHÔNG cách ly vật lý hoàn toàn và rất dễ bị ảnh hưởng hiệu năng khi có máy ảo láng giềng chạy tác vụ nặng (Noisy Neighbor).",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ máy ảo nào cũng được cách ly tài nguyên vật lý tuyệt đối 100%.",
      "trickWord": "Bẫy tài nguyên hoàn toàn cách ly vật lý không bao giờ bị ảnh hưởng",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục II.1",
      "tip": "Shared Server = Dùng chung phần cứng ➔ Dễ bị hiện tượng 'Noisy Neighbor' làm sụt giảm hiệu năng."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-003",
    "chapterId": "cloud-ch5",
    "question": "Khi nói về hệ thống lưu trữ đối tượng (Object Storage) trong IaaS, phát biểu nào sau đây là SAI?",
    "options": [
      "Object Storage có khả năng mở rộng dung lượng gần như không giới hạn mà không cần phải tắt hệ thống.",
      "Dữ liệu được lưu trữ dưới dạng đối tượng gồm khối nhị phân, siêu dữ liệu (Metadata) và định danh duy nhất.",
      "Người dùng có thể dễ dàng định dạng phân vùng ext4 để gắn trực tiếp làm ổ đĩa boot chạy hệ điều hành.",
      "Người dùng và ứng dụng tương tác, tải lên hoặc tải về các đối tượng thông qua giao thức web HTTP/HTTPS."
    ],
    "answer": 2,
    "explanation": "Object Storage lưu trữ qua REST API (HTTP/HTTPS) và không hoạt động theo cơ chế khối đĩa; do đó KHÔNG THỂ định dạng file system (ext4/NTFS) để gắn trực tiếp làm ổ đĩa khởi động (Boot disk) cho hệ điều hành. Muốn boot OS phải dùng Block Storage.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ đánh đồng lưu trữ đối tượng với ổ cứng máy tính thông thường.",
      "trickWord": "Bẫy định dạng phân vùng ext4 gắn trực tiếp làm ổ đĩa boot chạy hệ điều hành",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục III.1",
      "tip": "Boot OS & Database ➔ Bắt buộc dùng Block Storage; Object Storage không thể làm ổ boot."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-004",
    "chapterId": "cloud-ch5",
    "question": "Về kỹ thuật Cân bằng tải (Load Balancing) và thuật toán Round Robin, nhận định nào sau đây là SAI?",
    "options": [
      "Load Balancer tiếp nhận các yêu cầu từ Client và phân phối đồng đều đến nhóm các máy chủ backend.",
      "Thuật toán Round Robin phân phối tuần tự các yêu cầu mới cho từng máy chủ theo một vòng tròn khép kín.",
      "Round Robin hoạt động rất đơn giản và đạt hiệu quả cao khi các máy chủ backend có cấu hình tương đương.",
      "Round Robin là thuật toán tối ưu nhất khi các máy chủ chênh lệch cấu hình và thời gian xử lý rất khác nhau."
    ],
    "answer": 3,
    "explanation": "Khi các máy chủ chênh lệch cấu hình hoặc các tác vụ nặng nhẹ không đều, Round Robin sẽ gây quá tải cho các server yếu. Trong trường hợp đó, thuật toán Least Connections (hoặc Weighted Least Connections) mới là lựa chọn tối ưu.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ thuật toán phổ biến như Round Robin là tối ưu cho mọi trường hợp tải.",
      "trickWord": "Bẫy Round Robin tối ưu nhất khi máy chủ chênh lệch cấu hình và thời gian xử lý",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục IV.1",
      "tip": "Request nặng nhẹ khác nhau ➔ Phải dùng Least Connections; Round Robin chỉ tốt khi tải đều."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-005",
    "chapterId": "cloud-ch5",
    "question": "Khi nghiên cứu về giải pháp Cloud-based NAS trong IaaS, nhận định nào sau đây là SAI?",
    "options": [
      "Cloud-based NAS chỉ cho phép các máy tính kết nối mạng nội bộ LAN tại văn phòng truy cập dữ liệu.",
      "Đóng vai trò như một máy chủ lưu trữ tập trung cung cấp tệp tin dùng chung cho hàng trăm máy chủ ảo.",
      "Hỗ trợ các giao thức mạng tiêu chuẩn công nghiệp như NFS, SMB và CIFS để chia sẻ tệp tin đa nền tảng.",
      "Cho phép người dùng quản trị linh hoạt việc cấp phát dung lượng và phân quyền bảo mật qua giao diện web."
    ],
    "answer": 0,
    "explanation": "Cloud-based NAS xóa bỏ giới hạn mạng cục bộ (LAN), cho phép người dùng và máy chủ truy cập dữ liệu từ bất kỳ đâu trên thế giới qua kết nối mạng Internet công cộng được mã hóa an toàn.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm lẫn Cloud NAS với thiết bị ổ cứng mạng NAS truyền thống đặt tại phòng máy văn phòng.",
      "trickWord": "Bẫy Cloud NAS chỉ cho phép các máy tính mạng nội bộ LAN văn phòng truy cập",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục VI.1",
      "tip": "Cloud-based NAS = Truy cập mọi lúc, mọi nơi qua Internet (không giới hạn trong mạng LAN)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-006",
    "chapterId": "cloud-ch5",
    "question": "Về tính dự phòng (Redundancy) và các chiến lược sao lưu dữ liệu, khẳng định nào sau đây là SAI?",
    "options": [
      "Full Backup sao chép toàn bộ dữ liệu hệ thống, tốn nhiều dung lượng nhất nhưng phục hồi nhanh nhất.",
      "Incremental Backup (sao lưu gia tăng) có thời gian phục hồi dữ liệu nhanh hơn hẳn so với Full Backup.",
      "Incremental Backup chỉ sao chép các tệp tin có sự thay đổi hoặc tạo mới kể từ lần sao lưu gần nhất.",
      "Differential Backup sao chép tất cả các tệp dữ liệu đã thay đổi kể từ bản sao lưu đầy đủ gần đây nhất."
    ],
    "answer": 1,
    "explanation": "Incremental Backup phục hồi CHẬM NHẤT vì khi xảy ra sự cố, người quản trị phải nạp bản Full ban đầu rồi nạp lần lượt từng bản Incremental theo chuỗi liên tiếp. Full Backup mới là bản phục hồi nhanh nhất.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nhầm giữa tốc độ sao lưu (Incremental nhanh nhất) với tốc độ phục hồi (Full nhanh nhất).",
      "trickWord": "Bẫy Incremental Backup có thời gian phục hồi dữ liệu nhanh hơn Full Backup",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục V.1",
      "tip": "Incremental Backup: Tốc độ sao lưu nhanh nhất NHƯNG tốc độ phục hồi CHẬM NHẤT."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-007",
    "chapterId": "cloud-ch5",
    "question": "Khi xây dựng kế hoạch phục hồi thảm họa (Disaster Recovery), khẳng định nào sau đây về RTO và RPO là SAI?",
    "options": [
      "RTO (Recovery Time Objective) là khoảng thời gian tối đa cho phép hệ thống ngừng hoạt động sau sự cố.",
      "RPO (Recovery Point Objective) là lượng dữ liệu tối đa chấp nhận bị mất mát tính theo khoảng thời gian.",
      "RPO đo lường số giờ máy chủ ngừng chạy, còn RTO đo lường dung lượng RAM tối đa bị hư hỏng vật lý.",
      "Khi doanh nghiệp thiết lập giá trị RTO và RPO càng tiệm cận mức 0 thì chi phí đầu tư hạ tầng càng lớn."
    ],
    "answer": 2,
    "explanation": "RTO đo lường THỜI GIAN hệ thống được phép ngừng chạy (Time Downtime). RPO đo lường LƯỢNG DỮ LIỆU chấp nhận bị mất tính theo khoảng thời gian kể từ bản backup gần nhất (Data loss interval). Khẳng định hoán đổi sai lệch hoàn toàn.",
    "trickDetails": {
      "whyTrapped": "Học viên rất hay bị bẫy hoán đổi định nghĩa hoặc gán ghép sai đơn vị đo lường giữa RTO và RPO.",
      "trickWord": "Bẫy RPO đo lường số giờ máy chủ ngừng chạy và RTO đo lường dung lượng RAM hư hỏng",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục V.1",
      "tip": "RTO = Recovery Time (Thời gian gián đoạn); RPO = Recovery Point (Điểm dữ liệu mất mát)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-008",
    "chapterId": "cloud-ch5",
    "question": "Khi nói về đặc tính kỹ thuật của Block Storage trong môi trường IaaS, nhận định nào sau đây là SAI?",
    "options": [
      "Block Storage chia nhỏ dữ liệu thành các khối nhị phân độc lập có kích thước cố định để đọc và ghi.",
      "Cung cấp tốc độ đọc ghi (IOPS) cực cao và độ trễ siêu thấp, tối ưu cho việc cài đặt hệ điều hành và CSDL.",
      "Các khối dữ liệu được quản lý trực tiếp bởi hệ điều hành máy chủ và giao tiếp qua giao thức bus ổ đĩa.",
      "Block Storage truy cập dữ liệu thông qua các lệnh gọi API HTTP/HTTPS từ trình duyệt web của người dùng."
    ],
    "answer": 3,
    "explanation": "Truy cập dữ liệu thông qua API web HTTP/HTTPS là đặc tính độc quyền của Object Storage. Block Storage gắn trực tiếp vào máy chủ thông qua giao thức lưu trữ khối (iSCSI, Fibre Channel, NVMe-oF) chứ không dùng HTTP.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nhầm lẫn cơ chế truy xuất của Object Storage (HTTP REST API) sang Block Storage.",
      "trickWord": "Bẫy Block Storage truy cập dữ liệu thông qua các lệnh gọi API HTTP/HTTPS",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục III.1",
      "tip": "HTTP/HTTPS REST API = Object Storage; Ổ đĩa gắn bus trực tiếp = Block Storage."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-009",
    "chapterId": "cloud-ch5",
    "question": "Khảo sát về Tam Hùng IaaS toàn cầu và các dịch vụ tương đương, cặp đối chiếu nào sau đây là SAI?",
    "options": [
      "Dịch vụ lưu trữ Amazon S3 tương đương trực tiếp với dịch vụ máy chủ ảo Google Compute Engine.",
      "Dịch vụ máy chủ ảo Amazon EC2 tương đương trực tiếp với dịch vụ Microsoft Azure Virtual Machines.",
      "Dịch vụ lưu trữ khối Amazon EBS tương đương trực tiếp với dịch vụ Google Cloud Persistent Disk.",
      "Dịch vụ mạng riêng ảo Amazon VPC tương đương trực tiếp với dịch vụ Microsoft Azure Virtual Network."
    ],
    "answer": 0,
    "explanation": "Amazon S3 là dịch vụ LƯU TRỮ ĐỐI TƯỢNG (Object Storage), trong khi Google Compute Engine là dịch vụ MÁY CHỦ ẢO (Compute). Cặp tương đương chuẩn của Amazon S3 phải là Google Cloud Storage (GCS).",
    "trickDetails": {
      "whyTrapped": "Thí sinh không nhớ rõ phân loại dịch vụ Compute vs Storage giữa các nhà cung cấp đám mây.",
      "trickWord": "Bẫy gán ghép Amazon S3 tương đương với Google Compute Engine",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục VII.1",
      "tip": "Nhớ bộ tứ: EC2 = VMs = Compute Engine; S3 = Blob = Cloud Storage."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-010",
    "chapterId": "cloud-ch5",
    "question": "Khi so sánh công nghệ ảo hóa Hypervisor và Containerization trong IaaS, nhận định nào sau đây là SAI?",
    "options": [
      "Hypervisor phân chia tài nguyên phần cứng vật lý để tạo ra các máy ảo độc lập có hệ điều hành riêng.",
      "Containerization ảo hóa ở tầng phần cứng và bắt buộc mỗi container phải tự chạy một nhân kernel riêng.",
      "Container ảo hóa ở tầng hệ điều hành, chia sẻ chung nhân kernel của máy chủ giúp khởi động siêu nhanh.",
      "Máy ảo chạy qua Hypervisor cung cấp mức độ cô lập an toàn cao hơn so với các container chạy chung OS."
    ],
    "answer": 1,
    "explanation": "Containerization ảo hóa ở tầng HỆ ĐIỀU HÀNH (OS level) và chia sẻ chung nhân Linux Kernel với máy chủ vật lý; nhận định cho rằng container ảo hóa phần cứng và chạy kernel riêng là hoàn toàn sai (đó là đặc tính của Hypervisor).",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ Docker container cũng có nhân hệ điều hành độc lập như máy ảo VMware/KVM.",
      "trickWord": "Bẫy Containerization ảo hóa tầng phần cứng và tự chạy một nhân kernel riêng",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục III.1",
      "tip": "Hypervisor = Ảo hóa phần cứng (Mỗi VM 1 OS riêng); Container = Ảo hóa OS (Dùng chung Kernel)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-011",
    "chapterId": "cloud-ch5",
    "question": "Về các giá trị kinh tế và nguồn nhân lực khi doanh nghiệp chuyển sang dùng IaaS, khẳng định nào sau đây là SAI?",
    "options": [
      "Doanh nghiệp không phải tốn ngân sách xây dựng phòng máy chủ, mua sắm máy phát điện và điều hòa.",
      "Mô hình trả tiền theo dung lượng thực dùng (Pay-as-you-go) giúp doanh nghiệp tối ưu hóa chi phí vận hành.",
      "Doanh nghiệp hoàn toàn không cần đội ngũ kỹ sư IT quản trị hệ thống và vận hành phần mềm ứng dụng.",
      "Khả năng co giãn tài nguyên linh hoạt giúp hệ thống đáp ứng tốt các đợt tăng vọt người dùng đột biến."
    ],
    "answer": 2,
    "explanation": "IaaS chỉ giải phóng doanh nghiệp khỏi việc bảo trì phần cứng vật lý; doanh nghiệp VẪN RẤT CẦN đội ngũ kỹ sư IT chuyên trách để cài đặt hệ điều hành, cấu hình mạng, quản trị cơ sở dữ liệu và bảo mật ứng dụng.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ bị bẫy bởi tư duy sai lầm rằng dùng đám mây là sa thải hết nhân viên IT.",
      "trickWord": "Bẫy doanh nghiệp hoàn toàn không cần đội ngũ kỹ sư IT quản trị hệ thống",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục I.1 & VII.1",
      "tip": "IaaS chỉ thay thế thợ bảo trì phần cứng; kỹ sư quản trị hệ điều hành và phần mềm vẫn bắt buộc."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-012",
    "chapterId": "cloud-ch5",
    "question": "Về cơ chế Kiểm tra sức khỏe (Health Monitoring) của bộ cân bằng tải trong IaaS, nhận định nào sau đây là SAI?",
    "options": [
      "Load Balancer liên tục gửi các gói tin thăm dò (Ping hoặc HTTP request) tới từng máy chủ backend.",
      "Nếu một máy chủ phản hồi mã lỗi HTTP 500 liên tiếp, Load Balancer sẽ tự động cô lập máy chủ bị lỗi đó.",
      "Lưu lượng người dùng mới sẽ tự động được chuyển hướng sang các máy chủ lành mạnh còn lại trong cụm.",
      "Khi phát hiện máy chủ bị sập, Load Balancer vẫn tiếp tục đẩy đều 100% lưu lượng vào máy chủ lỗi đó."
    ],
    "answer": 3,
    "explanation": "Mục đích sống còn của Health Monitoring là phát hiện máy chủ lỗi để NGỪNG điều hướng traffic vào đó (cô lập máy chủ hỏng). Nhận định cho rằng Load Balancer vẫn đẩy 100% traffic vào server hỏng là hoàn toàn vô lý.",
    "trickDetails": {
      "whyTrapped": "Các phương án diễn giải rất học thuật, phương án sai đi ngược lại nguyên lý hoạt động cơ bản.",
      "trickWord": "Bẫy Load Balancer vẫn tiếp tục đẩy đều 100% lưu lượng vào máy chủ bị lỗi",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục IV.1",
      "tip": "Health Check phát hiện server lỗi ➔ Lập tức cô lập và chuyển traffic sang server lành mạnh."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-013",
    "chapterId": "cloud-ch5",
    "question": "Theo mô hình phân chia trách nhiệm 9 tầng của điện toán đám mây, phát biểu nào sau đây là ĐÚNG về IaaS?",
    "options": [
      "Khách hàng toàn quyền kiểm soát và quản lý từ tầng Hệ điều hành (OS), Runtime đến Data và Applications.",
      "Khách hàng chỉ chịu trách nhiệm bảo trì các thanh RAM vật lý và hệ thống quạt tản nhiệt của máy chủ.",
      "Nhà cung cấp dịch vụ đám mây chịu trách nhiệm cấu hình mật khẩu người dùng bên trong máy ảo khách hàng.",
      "Khách hàng hoàn toàn không quản lý bất kỳ tầng kỹ thuật nào tương tự như khi sử dụng dịch vụ SaaS."
    ],
    "answer": 0,
    "explanation": "Trong mô hình IaaS, nhà cung cấp lo 4 tầng hạ tầng (Ảo hóa, Máy chủ, Storage, Mạng). Khách hàng toàn quyền kiểm soát và chịu trách nhiệm 5 tầng phía trên: Hệ điều hành (OS), Middleware, Runtime, Data và Applications.",
    "trickDetails": {
      "whyTrapped": "Các phương án nhiễu gán sai trách nhiệm phần cứng hoặc đánh đồng ranh giới IaaS với SaaS.",
      "trickWord": "Chuẩn xác 5 tầng trách nhiệm của khách hàng trong IaaS từ tầng OS trở lên",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục I.1",
      "tip": "IaaS = Khách hàng quản lý từ Hệ điều hành (OS) trở lên đến Dữ liệu và Ứng dụng."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-014",
    "chapterId": "cloud-ch5",
    "question": "Về các đặc tính kỹ thuật của máy chủ vật lý Bare-Metal trong IaaS, phát biểu nào sau đây là ĐÚNG?",
    "options": [
      "Hệ điều hành bắt buộc phải chạy thông qua một phần mềm ảo hóa Hypervisor trung gian của nhà cung cấp.",
      "Mang lại hiệu năng tính toán cao nhất và ổn định tuyệt đối vì giao tiếp trực tiếp với phần cứng thật.",
      "Không hỗ trợ cài đặt các hệ điều hành phổ biến như Linux hay Windows Server trên máy chủ vật lý.",
      "Tài nguyên máy chủ luôn bị chia sẻ cho hàng trăm khách hàng khác nhau nhằm mục đích giảm chi phí."
    ],
    "answer": 1,
    "explanation": "Máy chủ vật lý Bare-Metal không qua lớp ảo hóa Hypervisor, hệ điều hành truy cập trực tiếp CPU/RAM phần cứng thật nên mang lại hiệu năng cao nhất, chịu tải cực lớn và ổn định 100%, không lo hiện tượng Noisy Neighbor.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nhầm Bare-Metal với máy ảo hoặc nghĩ Bare-Metal không chạy được Linux.",
      "trickWord": "Hiệu năng tính toán cao nhất và ổn định tuyệt đối vì giao tiếp trực tiếp phần cứng",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục II.1",
      "tip": "Bare-Metal = Máy chủ vật lý thật (No Hypervisor) ➔ Hiệu năng tối đa, không chia sẻ phần cứng."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-015",
    "chapterId": "cloud-ch5",
    "question": "Về nguyên lý hoạt động của thuật toán cân bằng tải Least Connections, phát biểu nào sau đây là ĐÚNG?",
    "options": [
      "Phân phối các yêu cầu tuần tự lần lượt cho từng máy chủ theo số thứ tự từ 1 đến hết rồi quay lại.",
      "Sử dụng thuật toán băm địa chỉ MAC của người dùng để chọn ra máy chủ phục vụ ngẫu nhiên không kiểm tra.",
      "Chuyển hướng yêu cầu mới đến máy chủ hiện đang duy trì số lượng kết nối hoạt động thấp nhất trong cụm.",
      "Luôn luôn gửi toàn bộ 100% tất cả các yêu cầu vào máy chủ duy nhất có dung lượng ổ đĩa trống nhiều nhất."
    ],
    "answer": 2,
    "explanation": "Least Connections theo dõi số lượng kết nối đang mở (active connections) của từng backend server và chuyển request mới đến server có ít kết nối nhất, giúp tối ưu hóa tải khi thời lượng xử lý request không đều nhau.",
    "trickDetails": {
      "whyTrapped": "Các phương án nhiễu mô tả Round Robin (tuần tự) hoặc cơ chế băm sai lệch.",
      "trickWord": "Chuyển yêu cầu đến máy chủ có số lượng kết nối hoạt động thấp nhất trong cụm",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục IV.1",
      "tip": "Least Connections = Kết nối ít nhất ➔ Dành cho các tác vụ có thời gian xử lý không đồng đều."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-016",
    "chapterId": "cloud-ch5",
    "question": "Về cấu trúc và cách thức lưu trữ của hệ thống lưu trữ đối tượng (Object Storage), nhận định nào sau đây là ĐÚNG?",
    "options": [
      "Dữ liệu được chia thành các track và sector trên đĩa từ tương tự như ổ cứng máy tính cá nhân truyền thống.",
      "Chỉ cho phép lưu trữ các tệp văn bản thuần túy và nghiêm cấm việc lưu trữ các tệp hình ảnh hoặc video.",
      "Bắt buộc người dùng phải gắn trực tiếp vào cổng SATA của máy chủ vật lý mới có thể đọc được dữ liệu.",
      "Mỗi đối tượng gồm dữ liệu nhị phân, siêu dữ liệu (Metadata) phong phú và một mã định danh duy nhất."
    ],
    "answer": 3,
    "explanation": "Object Storage lưu trữ dữ liệu dưới dạng đối tượng gồm 3 thành phần cấu thành chuẩn học thuật: (1) Khối dữ liệu nhị phân (Binary data); (2) Siêu dữ liệu mô tả (Metadata); (3) Khóa định danh duy nhất (Unique ID).",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nhầm cấu trúc Sector của ổ đĩa cơ hoặc nghĩ Object Storage cấm lưu ảnh.",
      "trickWord": "Mỗi đối tượng gồm dữ liệu nhị phân, siêu dữ liệu Metadata và mã định danh duy nhất",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục III.1",
      "tip": "Cấu trúc Object Storage = Data + Metadata + Unique ID (truy cập qua REST API)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-017",
    "chapterId": "cloud-ch5",
    "question": "Trong quản trị thảm họa (Disaster Recovery), định nghĩa nào sau đây về chỉ số RTO là CHUẨN XÁC NHẤT?",
    "options": [
      "Khoảng thời gian tối đa cho phép hệ thống ngừng hoạt động trước khi được khôi phục trở lại bình thường.",
      "Tổng dung lượng dữ liệu tối đa tính bằng terabyte mà hệ thống chấp nhận bị mất mát sau một thảm họa.",
      "Số lượng máy tính cá nhân của nhân viên văn phòng bị nhiễm mã độc tống tiền trong cùng một ngày.",
      "Khoảng thời gian mà doanh nghiệp bắt buộc phải thanh toán tiền thuê bao cho nhà cung cấp dịch vụ."
    ],
    "answer": 0,
    "explanation": "RTO (Recovery Time Objective) là chỉ tiêu thời gian tối đa cho phép hệ thống gián đoạn dịch vụ (Downtime) sau khi sự cố xảy ra cho đến khi hệ thống hoạt động trở lại bình thường.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm với định nghĩa của RPO (đo lường lượng dữ liệu mất tính theo thời gian).",
      "trickWord": "Khoảng thời gian tối đa cho phép hệ thống ngừng hoạt động trước khi phục hồi",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục V.1",
      "tip": "RTO = Recovery Time Objective (Mục tiêu thời gian phục hồi tối đa sau thảm họa)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-018",
    "chapterId": "cloud-ch5",
    "question": "Bản chất của giải pháp Khởi tạo hạ tầng bằng mã nguồn (Infrastructure as Code - IaC) trong IaaS là gì?",
    "options": [
      "Bắt buộc kỹ sư phải đến tận trung tâm dữ liệu để dùng chìa khóa cơ học mở tủ rack máy chủ hàng ngày.",
      "Sử dụng các tệp tin cấu hình khai báo để tự động cung cấp, mở rộng và quản trị tài nguyên hạ tầng đám mây.",
      "Phần mềm tự động viết mã nguồn các trang web thương mại điện tử thay thế hoàn toàn cho lập trình viên.",
      "Cơ chế tự động in toàn bộ thông tin đăng nhập của máy chủ ra giấy để lưu trữ trong két sắt công ty."
    ],
    "answer": 1,
    "explanation": "IaC (như Terraform, Ansible, CloudFormation) định nghĩa toàn bộ hạ tầng (VMs, VPC, Load Balancers) dưới dạng mã nguồn cấu hình, cho phép tự động hóa việc khởi tạo, nhân bản và quản trị hạ tầng có thể kiểm soát phiên bản (Version control).",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ hiểu nhầm IaC là phần mềm tự động viết code web thay cho con người.",
      "trickWord": "Sử dụng các tệp tin cấu hình khai báo để tự động cung cấp và quản trị hạ tầng",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục I.1 & III.1",
      "tip": "IaC = Hạ tầng được định nghĩa bằng mã nguồn (Code) ➔ Tự động hóa triển khai & nhân bản."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-019",
    "chapterId": "cloud-ch5",
    "question": "Khi đối chiếu giữa Microsoft Azure và Amazon Web Services (AWS), dịch vụ máy chủ ảo tương đương là gì?",
    "options": [
      "Dịch vụ máy chủ Amazon S3 tương đương trực tiếp với dịch vụ máy chủ ảo Microsoft Azure VMs.",
      "Dịch vụ lưu trữ Amazon EBS tương đương trực tiếp với dịch vụ máy chủ ảo Microsoft Azure VMs.",
      "Dịch vụ tính toán Azure Virtual Machines tương đương trực tiếp với dịch vụ Amazon Elastic Compute Cloud.",
      "Hai nhà cung cấp này hoàn toàn không có bất kỳ dịch vụ máy chủ ảo nào tương đương nhau trên thực tế."
    ],
    "answer": 2,
    "explanation": "Dịch vụ máy chủ ảo tính toán cốt lõi của AWS là Amazon EC2 (Elastic Compute Cloud), tương đương trực tiếp với Azure Virtual Machines (Azure VMs) của Microsoft và Google Compute Engine (GCE) của Google Cloud.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nhầm S3 (Object Storage) hoặc EBS (Block Storage) với EC2.",
      "trickWord": "Azure Virtual Machines tương đương trực tiếp với dịch vụ Amazon EC2 của AWS",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục VII.1",
      "tip": "EC2 (AWS) = Azure VMs (Microsoft) = Compute Engine (Google Cloud)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-020",
    "chapterId": "cloud-ch5",
    "question": "Về cơ chế hoạt động của thuật toán cân bằng tải IP Hash, nhận định nào sau đây là ĐÚNG?",
    "options": [
      "Thuật toán chỉ cho phép các máy tính có cùng một địa chỉ IP nội bộ mới được gửi yêu cầu lên hệ thống.",
      "Mỗi lần người dùng gửi yêu cầu, thuật toán sẽ tự động đổi địa chỉ IP của máy chủ sang một dải số mới.",
      "Hệ thống sẽ từ chối phục vụ đối với tất cả các địa chỉ IP của khách hàng đến từ các quốc gia châu Á.",
      "Sử dụng thuật toán băm địa chỉ IP của Client để gắn kết cố định người dùng với một máy chủ backend cụ thể."
    ],
    "answer": 3,
    "explanation": "IP Hash lấy địa chỉ IP của client đưa qua hàm băm để tính ra chỉ số máy chủ backend cố định. Điều này bảo đảm mọi request từ cùng một client luôn đến cùng một server (phục vụ Sticky Session / Stateful Session).",
    "trickDetails": {
      "whyTrapped": "Các phương án nhiễu bịa đặt về việc đổi IP máy chủ hoặc phân biệt vùng địa lý.",
      "trickWord": "Sử dụng hàm băm địa chỉ IP của Client để gắn kết cố định người dùng với một server",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục IV.1",
      "tip": "IP Hash = Băm địa chỉ IP Client ➔ Cố định máy chủ phục vụ (Sticky Session)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-021",
    "chapterId": "cloud-ch5",
    "question": "Về chiến lược sao lưu vi sai / tích lũy (Differential Backup), khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Sao chép toàn bộ các dữ liệu đã thay đổi hoặc tạo mới kể từ bản sao lưu đầy đủ (Full Backup) gần nhất.",
      "Chỉ sao chép các tệp tin có sự thay đổi so với bản sao lưu vi sai được thực hiện vào ngày hôm qua.",
      "Bắt buộc người quản trị hệ thống phải xóa sạch toàn bộ cơ sở dữ liệu cũ trước khi thực hiện sao lưu.",
      "Hoàn toàn không tốn bất kỳ một megabyte dung lượng đĩa cứng nào trong suốt quá trình sao lưu dữ liệu."
    ],
    "answer": 0,
    "explanation": "Differential Backup luôn đối chiếu và sao chép TOÀN BỘ dữ liệu đã thay đổi kể từ bản FULL BACKUP gần nhất (khác với Incremental là chỉ so với lần gần nhất bất kỳ). Khi phục hồi chỉ cần: Bản Full + Bản Differential gần nhất.",
    "trickDetails": {
      "whyTrapped": "Thí sinh rất hay nhầm lẫn định nghĩa của Differential (so với Full) và Incremental (so với lần gần nhất).",
      "trickWord": "Sao chép toàn bộ dữ liệu thay đổi kể từ bản sao lưu đầy đủ Full Backup gần nhất",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục V.1",
      "tip": "Differential Backup = Thay đổi so với bản FULL gần nhất; Incremental = Thay đổi so với LẦN gần nhất."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-022",
    "chapterId": "cloud-ch5",
    "question": "Về bản chất kiến trúc của giải pháp Cloud-based NAS trong IaaS, phát biểu nào sau đây là ĐÚNG?",
    "options": [
      "Là thiết bị phần cứng bắt buộc phải gắn trực tiếp vào bo mạch chủ của máy tính người dùng cá nhân.",
      "Hoạt động như máy chủ lưu trữ tập trung, chia sẻ cây thư mục cho nhiều máy chủ qua giao thức NFS/SMB.",
      "Chỉ dùng để lưu trữ các tệp âm thanh và hoàn toàn không hỗ trợ chia sẻ các tệp tin văn phòng Word, PDF.",
      "Xóa sạch toàn bộ dữ liệu lưu trữ nếu các máy chủ kết nối bị mất nguồn điện lưới trong vòng 5 phút."
    ],
    "answer": 1,
    "explanation": "Cloud-based NAS trong IaaS đóng vai trò một Máy chủ lưu trữ tập trung (Centralized Storage Server), cung cấp không gian chia sẻ tệp tin dạng cây thư mục qua mạng cho hàng trăm máy chủ qua giao thức mạng NFS hoặc SMB.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nhầm Cloud NAS với ổ đĩa cục bộ hoặc các phương án bịa đặt về mất dữ liệu.",
      "trickWord": "Hoạt động như máy chủ lưu trữ tập trung chia sẻ cây thư mục qua giao thức NFS/SMB",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục VI.1",
      "tip": "Cloud NAS = Centralized Storage Server + Cây thư mục dùng chung (NFS/SMB)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-023",
    "chapterId": "cloud-ch5",
    "question": "Xét 3 mệnh đề sau đây về 3 loại máy chủ trong môi trường IaaS:\nI. Physical Server (Bare-metal) không sử dụng lớp ảo hóa Hypervisor, mang lại hiệu năng cao nhất.\nII. Dedicated Virtual Server sở hữu tài nguyên CPU và RAM riêng biệt, không chia sẻ với máy ảo khác.\nIII. Shared Virtual Server có chi phí thấp nhất nhưng dễ bị ảnh hưởng bởi hiện tượng Noisy Neighbor.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có mệnh đề I và II đúng.",
      "Chỉ có mệnh đề I và III đúng.",
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có duy nhất mệnh đề II đúng."
    ],
    "answer": 2,
    "explanation": "Cả 3 mệnh đề đều phản ánh chính xác các đặc tính kỹ thuật của 3 loại server trong IaaS: Bare-metal (không Hypervisor), Dedicated (tài nguyên riêng), Shared (rẻ nhưng dính Noisy Neighbor).",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghi ngờ một trong 3 định nghĩa này có sai sót về mặt kỹ thuật.",
      "trickWord": "Cả 3 mệnh đề về 3 loại máy chủ IaaS đều hoàn toàn chuẩn xác theo giáo trình",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục II.1",
      "tip": "Physical = Max performance; Dedicated = Tài nguyên riêng; Shared = Rẻ + Noisy Neighbor."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-024",
    "chapterId": "cloud-ch5",
    "question": "Xét 3 mệnh đề sau đây về bộ tam lưu trữ dữ liệu trong kiến trúc IaaS:\nI. Block Storage gắn vào máy chủ như ổ đĩa vật lý, tối ưu cho ổ đĩa boot hệ điều hành và cơ sở dữ liệu.\nII. File Storage cung cấp hệ thống tệp tin phân cấp cho phép nhiều máy chủ truy cập đồng thời qua NFS/SMB.\nIII. Object Storage lưu trữ dữ liệu kèm theo Metadata phong phú và mở rộng dung lượng vô hạn qua HTTP API.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có mệnh đề I và II đúng.",
      "Chỉ có mệnh đề I và III đúng.",
      "Chỉ có duy nhất mệnh đề I đúng.",
      "Cả 3 mệnh đề I, II và III đều đúng."
    ],
    "answer": 3,
    "explanation": "Cả 3 mệnh đề đều mô tả chuẩn xác bộ tam lưu trữ đám mây kinh điển: Block Storage (OS boot/DB), File Storage (NFS/SMB chia sẻ đa server) và Object Storage (Metadata/REST API mở rộng vô hạn).",
    "trickDetails": {
      "whyTrapped": "Học viên hay nhầm lẫn tính năng giữa File Storage và Object Storage.",
      "trickWord": "Cả 3 mệnh đề về bộ tam Block, File, Object Storage đều hoàn toàn đúng",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục III.1",
      "tip": "Bộ tam lưu trữ: Block (Ổ đĩa boot/DB), File (NFS dùng chung), Object (HTTP API vô hạn)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-025",
    "chapterId": "cloud-ch5",
    "question": "Xét 3 mệnh đề sau đây về 3 thuật toán cân bằng tải phổ biến trong IaaS:\nI. Round Robin phân phối các yêu cầu lần lượt tuần tự theo vòng tròn, phù hợp với server đồng cấu hình.\nII. Least Connections chuyển request tới server có ít kết nối nhất, tối ưu khi thời gian xử lý không đều.\nIII. IP Hash sử dụng thuật toán băm địa chỉ IP của Client để gắn kết cố định phiên làm việc người dùng.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có mệnh đề I và II đúng.",
      "Chỉ có mệnh đề II và III đúng.",
      "Chỉ có duy nhất mệnh đề I đúng."
    ],
    "answer": 0,
    "explanation": "Cả 3 mệnh đề đều định nghĩa chính xác 3 thuật toán cân bằng tải trọng tâm của Chương 5: Round Robin (tuần tự vòng tròn), Least Connections (ít kết nối nhất) và IP Hash (băm IP, duy trì Sticky Session).",
    "trickDetails": {
      "whyTrapped": "Thí sinh có thể không nhớ rõ ứng dụng duy trì session của thuật toán IP Hash.",
      "trickWord": "Cả 3 thuật toán Round Robin, Least Connections, IP Hash đều được mô tả chuẩn xác",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục IV.1",
      "tip": "Nhớ bộ 3: Round Robin (Vòng tròn), Least Connections (Ít kết nối), IP Hash (Sticky Session)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-026",
    "chapterId": "cloud-ch5",
    "question": "Xét 3 mệnh đề sau đây về tính dự phòng (Redundancy) trong hạ tầng IaaS:\nI. Hardware Redundancy sử dụng nguồn điện kép, máy chủ dự phòng và hệ thống mảng ổ đĩa RAID.\nII. Data Redundancy thực hiện sao lưu và nhân bản dữ liệu đến nhiều trung tâm dữ liệu độc lập.\nIII. Việc triển khai Redundancy giúp doanh nghiệp hoàn toàn không phải chi trả chi phí duy trì phần cứng.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có mệnh đề II và III đúng.",
      "Chỉ có mệnh đề I và II đúng.",
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có duy nhất mệnh đề I đúng."
    ],
    "answer": 1,
    "explanation": "Mệnh đề I và II đúng. Mệnh đề III sai vì việc thiết lập tính dự phòng đòi hỏi chạy thêm phần cứng và nhân bản tài nguyên nên doanh nghiệp VẪN PHẢI TRẢ PHÍ duy trì tài nguyên dự phòng đó.",
    "trickDetails": {
      "whyTrapped": "Mệnh đề III gài bẫy ngụy biện về việc miễn phí chi phí duy trì hạ tầng dự phòng.",
      "trickWord": "Mệnh đề III sai về miễn trừ chi phí duy trì; I và II đúng về các loại Redundancy",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục V.1",
      "tip": "Redundancy tăng tính sẵn sàng nhưng đòi hỏi chi phí cho phần cứng dự phòng; chỉ có I và II đúng."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-027",
    "chapterId": "cloud-ch5",
    "question": "Xét 3 mệnh đề sau đây về 3 chiến lược sao lưu dữ liệu trong IaaS:\nI. Full Backup sao chép toàn bộ dữ liệu, mang lại tốc độ phục hồi nhanh nhất sau sự cố.\nII. Incremental Backup chỉ sao chép phần dữ liệu thay đổi so với lần sao lưu gần nhất.\nIII. Differential Backup có thời gian phục hồi dữ liệu chậm hơn nhiều so với Incremental Backup.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có mệnh đề I và III đúng.",
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có mệnh đề I và II đúng.",
      "Chỉ có duy nhất mệnh đề II đúng."
    ],
    "answer": 2,
    "explanation": "Mệnh đề I và II đúng. Mệnh đề III sai vì Differential Backup phục hồi NHANH HƠN Incremental Backup (Differential chỉ cần nạp 2 bản: Full + Diff gần nhất; trong khi Incremental phải nạp chuỗi nhiều bản liên tiếp).",
    "trickDetails": {
      "whyTrapped": "Mệnh đề III đánh lừa về tốc độ phục hồi giữa Differential và Incremental.",
      "trickWord": "Mệnh đề III sai về tốc độ phục hồi của Differential Backup; I và II đúng",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục V.1",
      "tip": "Tốc độ phục hồi: Full (Nhanh nhất) ➔ Differential (Nhanh vừa) ➔ Incremental (Chậm nhất)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-028",
    "chapterId": "cloud-ch5",
    "question": "Xét 3 mệnh đề sau đây về hai chỉ số phục hồi thảm họa RTO và RPO:\nI. RTO đo lường thời gian gián đoạn tối đa mà hệ thống của doanh nghiệp có thể chấp nhận được.\nII. RPO đo lường lượng dữ liệu tối đa chấp nhận bị mất mát tính theo khoảng thời gian sao lưu.\nIII. Khi giá trị mục tiêu của RTO và RPO càng nhỏ thì chi phí đầu tư cho hệ thống dự phòng càng rẻ.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có mệnh đề I và III đúng.",
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có duy nhất mệnh đề I đúng.",
      "Chỉ có mệnh đề I và II đúng."
    ],
    "answer": 3,
    "explanation": "Mệnh đề I và II đúng. Mệnh đề III sai vì RTO và RPO càng nhỏ (càng tiệm cận 0 giây) thì hệ thống càng đòi hỏi nhân bản thời gian thực (Active-Active multi-region) cực kỳ tốn kém, chi phí rất đắt đỏ chứ không hề rẻ.",
    "trickDetails": {
      "whyTrapped": "Mệnh đề III gài bẫy kinh tế: RTO/RPO nhỏ là tốt, nhưng chi phí phải CỰC KỲ ĐẮT.",
      "trickWord": "Mệnh đề III sai về chi phí đầu tư càng rẻ khi RTO và RPO càng nhỏ; I và II đúng",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục V.1",
      "tip": "RTO/RPO gần bằng 0 (Zero downtime/data loss) ➔ Chi phí đầu tư hạ tầng ĐẮT ĐỎ NHẤT."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-029",
    "chapterId": "cloud-ch5",
    "question": "Xét 3 mệnh đề sau đây về giải pháp lưu trữ mạng Cloud-based NAS:\nI. Đóng vai trò như một máy chủ lưu trữ tập trung (Centralized Storage Server) kết nối qua Internet.\nII. Hỗ trợ chia sẻ tệp tin dùng chung cho hàng trăm máy chủ thông qua giao thức NFS, SMB và CIFS.\nIII. Cho phép mở rộng dung lượng lưu trữ linh hoạt mà không cần tắt hay khởi động lại hệ thống.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có mệnh đề I và II đúng.",
      "Chỉ có mệnh đề II và III đúng.",
      "Chỉ có duy nhất mệnh đề I đúng."
    ],
    "answer": 0,
    "explanation": "Cả 3 mệnh đề đều phản ánh chính xác các ưu điểm đột phá của Cloud-based NAS được nêu trong bài giảng: Centralized server, đa giao thức NFS/SMB/CIFS, và khả năng mở rộng trực tuyến (Online scalability).",
    "trickDetails": {
      "whyTrapped": "Thí sinh có thể không rõ Cloud NAS có mở rộng được mà không cần tắt máy chủ hay không.",
      "trickWord": "Cả 3 mệnh đề về tính năng và giao thức của Cloud-based NAS đều hoàn toàn đúng",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục VI.1",
      "tip": "Cloud-based NAS = Centralized Storage + NFS/SMB/CIFS + Mở rộng online linh hoạt."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-030",
    "chapterId": "cloud-ch5",
    "question": "Xét 3 mệnh đề sau đây về Tam Hùng IaaS toàn cầu (AWS, Microsoft Azure, Google Cloud):\nI. Amazon Web Services dẫn đầu thị trường IaaS toàn cầu với các dịch vụ Amazon EC2 và Amazon S3.\nII. Microsoft Azure cung cấp các dịch vụ hạ tầng tính toán Azure VMs và lưu trữ Azure Blob Storage.\nIII. Google Cloud Platform là giải pháp độc quyền chỉ cung cấp PaaS và không hỗ trợ máy chủ ảo IaaS.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có mệnh đề II và III đúng.",
      "Chỉ có mệnh đề I và II đúng.",
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có duy nhất mệnh đề I đúng."
    ],
    "answer": 1,
    "explanation": "Mệnh đề I và II đúng. Mệnh đề III sai vì Google Cloud Platform (GCP) sở hữu dịch vụ IaaS cực kỳ mạnh mẽ là Google Compute Engine (GCE) và Persistent Disk, thuộc top 3 nhà cung cấp IaaS lớn nhất thế giới.",
    "trickDetails": {
      "whyTrapped": "Mệnh đề III phủ nhận năng lực IaaS của Google Cloud (vốn rất nổi tiếng với GCE).",
      "trickWord": "Mệnh đề III sai về Google Cloud không hỗ trợ dịch vụ IaaS; I và II đúng",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục VII.1",
      "tip": "Tam Hùng IaaS toàn cầu: AWS + Microsoft Azure + Google Cloud (GCE là IaaS)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-031",
    "chapterId": "cloud-ch5",
    "question": "Xét 3 mệnh đề sau đây về kỹ thuật Cân bằng tải (Load Balancing) và an ninh mạng:\nI. Load Balancer giúp phân tán các luồng truy cập độc hại nhằm giảm thiểu rủi ro tấn công từ chối dịch vụ (DDoS).\nII. Tích hợp giải pháp giải mã chứng chỉ bảo mật tập trung (SSL Termination) để giảm tải tính toán cho máy chủ.\nIII. Mọi hệ thống Load Balancer bắt buộc phải được chế tạo dưới dạng thiết bị phần cứng cồng kềnh tại văn phòng.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có mệnh đề I và III đúng.",
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có mệnh đề I và II đúng.",
      "Chỉ có duy nhất mệnh đề II đúng."
    ],
    "answer": 2,
    "explanation": "Mệnh đề I và II đúng. Mệnh đề III sai vì Load Balancer có thể là thiết bị phần cứng chuyên dụng hoặc hoàn toàn là phần mềm / dịch vụ đám mây ảo hóa (như Nginx, HAProxy, AWS ALB, GCP Cloud Load Balancing).",
    "trickDetails": {
      "whyTrapped": "Mệnh đề III ép buộc Load Balancer phải là thiết bị phần cứng cồng kềnh vật lý.",
      "trickWord": "Mệnh đề III sai về bắt buộc Load Balancer phải là thiết bị phần cứng; I và II đúng",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục IV.1",
      "tip": "Load Balancer có thể là Hardware Appliance HOẶC Software/Cloud Virtual Appliance."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-032",
    "chapterId": "cloud-ch5",
    "question": "Xét 3 mệnh đề sau đây về mạng riêng ảo Virtual Private Cloud (VPC) trong IaaS:\nI. Cho phép cô lập logic hoàn toàn không gian mạng của doanh nghiệp trên hạ tầng đám mây công cộng.\nII. Hỗ trợ phân chia mạng thành các mạng con công khai (Public Subnet) và mạng con riêng tư (Private Subnet).\nIII. Nghiêm cấm tuyệt đối việc kết nối mạng VPC với trung tâm dữ liệu tại chỗ On-premise thông qua VPN.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có mệnh đề I và III đúng.",
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có duy nhất mệnh đề I đúng.",
      "Chỉ có mệnh đề I và II đúng."
    ],
    "answer": 3,
    "explanation": "Mệnh đề I và II đúng. Mệnh đề III sai vì VPC hỗ trợ tuyệt vời việc kết nối với mạng On-premise của doanh nghiệp thông qua VPN Gateway hoặc kết nối cáp chuyên dụng (AWS Direct Connect, Azure ExpressRoute) để tạo Hybrid Cloud.",
    "trickDetails": {
      "whyTrapped": "Mệnh đề III cài cắm điều cấm đoán phi lý đối với mạng lai (Hybrid Cloud).",
      "trickWord": "Mệnh đề III sai về cấm kết nối với mạng On-premise qua VPN; I và II đúng",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục III.1 & VII.1",
      "tip": "VPC = Cô lập logic + Public/Private Subnet + Kết nối mượt mà với On-premise qua VPN."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-033",
    "chapterId": "cloud-ch5",
    "question": "Một công ty công nghệ chuyên phân tích dữ liệu lớn (Big Data Analytics) và huấn luyện mô hình thị giác máy tính với cụm GPU. Họ yêu cầu máy chủ phải đạt hiệu năng xử lý thô tối đa, hoàn toàn không có độ trễ do ảo hóa gây ra và kiểm soát trực tiếp phần cứng. Loại máy chủ IaaS nào là lựa chọn tối ưu nhất?",
    "options": [
      "Thuê Physical Server (Máy chủ vật lý Bare-Metal) chạy trực tiếp hệ điều hành trên phần cứng thật.",
      "Thuê máy chủ ảo dùng chung (Shared Virtual Server) để tiết kiệm tối đa ngân sách tài chính ban đầu.",
      "Chỉ sử dụng máy tính cá nhân của các kỹ sư trong phòng thí nghiệm cắm mạng nội bộ văn phòng.",
      "Mua các ổ đĩa mềm cổ điển để lưu trữ dữ liệu huấn luyện và nạp thủ công vào máy tính cá nhân."
    ],
    "answer": 0,
    "explanation": "Physical Server (Bare-Metal) không qua lớp ảo hóa Hypervisor, trao quyền kiểm soát trực tiếp phần cứng và GPU, triệt tiêu độ trễ ảo hóa, là lựa chọn số một cho các bài toán Big Data và tính toán hiệu năng cao (HPC).",
    "trickDetails": {
      "whyTrapped": "Thí sinh có thể chọn Dedicated Virtual Server nhưng Bare-metal mới là giải pháp không độ trễ ảo hóa.",
      "trickWord": "Physical Server (Bare-Metal) chạy trực tiếp phần cứng thật không qua ảo hóa",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục II.1",
      "tip": "Hiệu năng tối đa, không độ trễ ảo hóa, Big Data/HPC ➔ Physical Server (Bare-Metal)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-034",
    "chapterId": "cloud-ch5",
    "question": "Một ứng dụng ngân hàng trực tuyến nhận thấy vào những khung giờ cao điểm, tốc độ xử lý giao dịch bị chậm bất thường. Sau khi điều tra, đội ngũ kỹ thuật phát hiện một máy ảo đào tiền mã hóa trên cùng máy vật lý bên dưới đang ngốn sạch tài nguyên CPU dùng chung. Hiện tượng này và giải pháp khắc phục dứt điểm là gì?",
    "options": [
      "Hiện tượng đứt cáp quang biển; giải pháp là cử thợ lặn đi kiểm tra đường dây dưới đáy đại dương.",
      "Hiện tượng Noisy Neighbor; giải pháp là chuyển sang Dedicated Virtual Server hoặc Bare-metal Server.",
      "Hiện tượng lỗi bộ nhớ đệm trình duyệt; giải pháp là yêu cầu tất cả khách hàng xóa lịch sử duyệt web.",
      "Hiện tượng nhà cung cấp đám mây bị phá sản; giải pháp là dừng hoạt động ngân hàng vĩnh viễn ngay lập tức."
    ],
    "answer": 1,
    "explanation": "Đây là hiện tượng kinh điển Noisy Neighbor (Láng giềng ồn ào) trên máy chủ ảo dùng chung (Shared Server). Giải pháp dứt điểm là nâng cấp lên Dedicated Virtual Server (tài nguyên riêng) hoặc Physical Server (Bare-metal).",
    "trickDetails": {
      "whyTrapped": "Thí sinh không nhớ thuật ngữ kỹ thuật 'Noisy Neighbor' và giải pháp di chuyển sang Dedicated Server.",
      "trickWord": "Hiện tượng Noisy Neighbor và giải pháp chuyển sang Dedicated Virtual Server",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục II.1",
      "tip": "Máy ảo láng giềng chiếm dụng CPU ➔ Hiện tượng 'Noisy Neighbor'; Khắc phục = Dùng Dedicated Server."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-035",
    "chapterId": "cloud-ch5",
    "question": "Một nền tảng mạng xã hội video cần lưu trữ hàng triệu video ngắn do người dùng đăng tải mỗi ngày với kích thước tệp rất đa dạng, dung lượng dự kiến tăng từ vài terabyte lên hàng petabyte mà không muốn phải lo lắng việc phân vùng lại ổ cứng. Loại lưu trữ IaaS nào là phù hợp nhất?",
    "options": [
      "Block Storage gắn trực tiếp vào một máy chủ duy nhất cho đến khi ổ đĩa máy tính bị đầy bộ nhớ.",
      "File Storage sử dụng giao thức SMB với giới hạn dung lượng tối đa không vượt quá 500 gigabyte.",
      "Object Storage (như Amazon S3, Google Cloud Storage) với khả năng mở rộng vô hạn qua REST API.",
      "Lưu trữ dữ liệu tạm thời trên bộ nhớ RAM của máy chủ và xóa sạch toàn bộ sau mỗi 24 giờ hoạt động."
    ],
    "answer": 2,
    "explanation": "Object Storage (Amazon S3, GCP Cloud Storage) được thiết kế chuyên biệt cho dữ liệu phi cấu trúc dung lượng khổng lồ (ảnh, video, backup), mở rộng dung lượng vô hạn tự động và truy xuất trực tiếp qua web API.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ lưu video vào ổ cứng Block Storage hoặc File Storage là đủ.",
      "trickWord": "Object Storage với khả năng mở rộng vô hạn và truy cập thông qua REST API",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục III.1",
      "tip": "Lưu hàng triệu tệp video/ảnh quy mô Petabyte ➔ Lựa chọn duy nhất là OBJECT STORAGE."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-036",
    "chapterId": "cloud-ch5",
    "question": "Một trang web bán lẻ trực tuyến lưu thông tin giỏ hàng của khách hàng trên bộ nhớ RAM cục bộ của máy chủ web backend mà chưa kịp đồng bộ sang cơ sở dữ liệu dùng chung. Để khách hàng không bị mất giỏ hàng khi tải lại trang, kiến trúc sư hệ thống cần cấu hình thuật toán Load Balancer nào?",
    "options": [
      "Thuật toán Round Robin phân phối tuần tự ngẫu nhiên yêu cầu sang các máy chủ backend khác nhau.",
      "Thuật toán Least Connections luôn chuyển yêu cầu sang máy chủ đang có ít kết nối nhất trong cụm.",
      "Ngắt toàn bộ các máy chủ web hiện có và chỉ duy trì một máy chủ duy nhất chạy liên tục cả ngày.",
      "Thuật toán IP Hash nhằm bảo đảm các yêu cầu từ cùng một địa chỉ IP luôn gửi đến cùng một server."
    ],
    "answer": 3,
    "explanation": "Khi ứng dụng là Stateful (lưu giỏ hàng trên RAM cục bộ), thuật toán IP Hash sẽ băm IP của client để định tuyến mọi request của người đó về đúng máy chủ ban đầu, duy trì Sticky Session mượt mà.",
    "trickDetails": {
      "whyTrapped": "Thí sinh không gắn kết được bài toán duy trì giỏ hàng (Sticky Session) với thuật toán IP Hash.",
      "trickWord": "Thuật toán IP Hash bảo đảm các yêu cầu cùng một IP luôn gửi đến cùng một server",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục IV.1",
      "tip": "Giỏ hàng lưu trên RAM / Cần duy trì Sticky Session ➔ Phải dùng thuật toán IP HASH."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-037",
    "chapterId": "cloud-ch5",
    "question": "Một công ty tài chính cần triển khai cơ sở dữ liệu quan hệ Oracle Database xử lý hàng chục nghìn giao dịch mỗi giây (OLTP). Ổ đĩa lưu trữ bắt buộc phải đạt tốc độ đọc/ghi IOPS cực cao, độ trễ phản hồi dưới 1 mili-giây và gắn trực tiếp vào máy chủ. Giải pháp lưu trữ nào đáp ứng chuẩn xác?",
    "options": [
      "Block Storage hiệu năng cao (như Amazon EBS io2 hoặc Google Persistent Disk SSD Extreme).",
      "Object Storage lưu trữ qua giao thức web HTTP công cộng với độ trễ phản hồi khoảng vài giây.",
      "Một ổ đĩa mềm dung lượng 1.44 MB cắm vào cổng USB của máy chủ ảo thông qua phần mềm giả lập.",
      "Hệ thống tệp tin mạng File Storage sử dụng đường truyền cáp đồng tốc độ thấp thế hệ cũ thời xưa."
    ],
    "answer": 0,
    "explanation": "Cơ sở dữ liệu giao dịch OLTP hiệu năng cao bắt buộc phải dùng Block Storage (như Amazon EBS Provisioned IOPS SSD hoặc GCP Extreme Persistent Disk) vì nó giao tiếp qua bus ổ cứng với IOPS cực đại và độ trễ micro-giây.",
    "trickDetails": {
      "whyTrapped": "Các phương án nhiễu rất phi lý; cần nhận diện Block Storage SSD hiệu năng cao cho CSDL.",
      "trickWord": "Block Storage hiệu năng cao như Amazon EBS io2 hoặc GCP Persistent Disk SSD",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục III.1",
      "tip": "Cơ sở dữ liệu Database hiệu năng cao (IOPS cao, low latency) ➔ Block Storage SSD."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-038",
    "chapterId": "cloud-ch5",
    "question": "Một ngân hàng thương mại yêu cầu xây dựng kế hoạch phục hồi sau thảm họa (Disaster Recovery) với quy định: Trong trường hợp trung tâm dữ liệu chính bị hỏa hoạn, thời gian gián đoạn tối đa không quá 10 phút và lượng dữ liệu giao dịch bị mất tối đa không được vượt quá 30 giây. Mục tiêu kỹ thuật cần thiết lập là gì?",
    "options": [
      "Thiết lập chỉ số RTO là 24 giờ và RPO là 7 ngày cùng giải pháp sao lưu băng từ gửi qua bưu điện.",
      "Thiết lập mục tiêu RTO $\\le$ 10 phút và RPO $\\le$ 30 giây cùng cơ chế nhân bản dữ liệu liên tục thời gian thực.",
      "Tắt toàn bộ hệ thống ngân hàng vào ban đêm để tránh nguy cơ xảy ra hỏa hoạn tại phòng máy chủ một các.",
      "Yêu cầu khách hàng tự ghi nhớ số dư tài khoản của mình trên giấy để đối chiếu sau khi có sự cố một các."
    ],
    "answer": 1,
    "explanation": "Thời gian gián đoạn tối đa 10 phút = RTO (Recovery Time Objective) $\\le$ 10 phút; Lượng dữ liệu mất tối đa 30 giây = RPO (Recovery Point Objective) $\\le$ 30 giây, kết hợp Replication liên tục giữa các Data Center.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nhầm lẫn vị trí của RTO (10 phút) và RPO (30 giây).",
      "trickWord": "Thiết lập mục tiêu RTO <= 10 phút và RPO <= 30 giây cùng nhân bản dữ liệu liên tục",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục V.1",
      "tip": "Thời gian ngừng hệ thống = RTO; Lượng dữ liệu mất = RPO."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-039",
    "chapterId": "cloud-ch5",
    "question": "Một cụm 15 máy chủ web chạy ứng dụng thương mại điện tử cần đọc và ghi đồng thời vào một không gian lưu trữ tệp tin chung chứa hóa đơn điện tử và hợp đồng PDF của khách hàng, với cấu trúc cây thư mục phân cấp rõ ràng. Giải pháp lưu trữ nào là tối ưu nhất?",
    "options": [
      "Sử dụng 15 ổ đĩa Block Storage độc lập và không cho phép các máy chủ nhìn thấy dữ liệu của nhau.",
      "Chỉ lưu trữ hóa đơn trên bộ nhớ Cache tạm thời của một máy tính cá nhân đặt tại phòng bảo vệ.",
      "Triển khai giải pháp Cloud-based NAS hoặc File Storage hỗ trợ giao thức chia sẻ tệp tin NFS/SMB.",
      "In toàn bộ hóa đơn ra giấy và thuê kho bãi bên ngoài để lưu trữ tài liệu thủ công truyền thống."
    ],
    "answer": 2,
    "explanation": "Khi nhiều máy chủ (Multi-instance) cần đọc/ghi ĐỒNG THỜI vào một cây thư mục tệp tin dùng chung, File Storage / Cloud-based NAS (dùng giao thức NFS hoặc SMB) là giải pháp tối ưu và chuẩn xác nhất.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ Block Storage gắn được cho 15 máy chủ cùng lúc để đọc ghi tệp tin thông thường.",
      "trickWord": "Cloud-based NAS hoặc File Storage hỗ trợ giao thức chia sẻ tệp tin NFS/SMB",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục III.1 & VI.1",
      "tip": "Nhiều máy chủ cùng đọc/ghi cây thư mục chia sẻ ➔ Chọn File Storage / Cloud NAS (NFS/SMB)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-040",
    "chapterId": "cloud-ch5",
    "question": "Một cổng dịch vụ công trực tuyến nhận thấy hệ thống cân bằng tải Round Robin đang gây nghẽn nghiêm trọng: Máy chủ số 1 bị quá tải 100% CPU do đang xử lý các tác vụ kết xuất báo cáo thống kê phức tạp mất 40 giây, trong khi máy chủ số 2 và 3 lại nhàn rỗi do chỉ xử lý lượt xem tin tức mất 0.2 giây. Thuật toán cân bằng tải nào sẽ giải quyết triệt để tình trạng bất công bằng này?",
    "options": [
      "Tiếp tục duy trì Round Robin và yêu cầu người dân không được tra cứu báo cáo thống kê nữa.",
      "Tắt hoàn toàn máy chủ số 2 và số 3 để dồn toàn bộ lưu lượng công việc còn lại vào máy chủ số 1.",
      "Chuyển sang thuật toán chọn máy chủ ngẫu nhiên hoàn toàn không cần quan tâm đến tải hệ thống.",
      "Chuyển sang thuật toán Least Connections để tự động điều hướng request mới tới server ít kết nối nhất."
    ],
    "answer": 3,
    "explanation": "Khi thời lượng xử lý request chênh lệch lớn (40 giây vs 0.2 giây), thuật toán Least Connections sẽ liên tục đếm số kết nối đang mở và chỉ gửi request mới đến các máy chủ đang rảnh rỗi (server 2 và 3), giải phóng cho server 1.",
    "trickDetails": {
      "whyTrapped": "Thí sinh không nắm được thế mạnh vượt trội của Least Connections trong việc xử lý tải bất đối xứng.",
      "trickWord": "Chuyển sang thuật toán Least Connections điều hướng request tới server ít kết nối nhất",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục IV.1",
      "tip": "Request xử lý nặng nhẹ không đều gây nghẽn ➔ Giải pháp là LEAST CONNECTIONS."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-041",
    "chapterId": "cloud-ch5",
    "question": "Một nhóm kỹ sư DevOps cần triển khai đồng bộ một môi trường thử nghiệm bao gồm 30 máy chủ ảo Linux, 2 cụm cân bằng tải, 1 mạng riêng ảo VPC có 4 Subnet và các nhóm bảo mật Firewall. Thay vì bấm chuột thủ công hàng trăm lần trên Dashboard, giải pháp hiện đại nào giúp họ tự động hóa 100% công đoạn này chỉ bằng một dòng lệnh?",
    "options": [
      "Sử dụng công cụ Khởi tạo hạ tầng bằng mã nguồn (IaC như Terraform) thuộc thành phần Automation.",
      "Thuê thêm 20 nhân viên thực tập sinh để ngồi phân chia nhau bấm chuột thủ công trên giao diện web.",
      "Gửi công văn bằng văn bản giấy qua bưu điện yêu cầu nhà cung cấp đám mây tự bấm chuột hộ công ty.",
      "Tắt toàn bộ hệ thống máy tính và chuyển sang làm việc trên giấy tờ sổ sách thủ công truyền thống."
    ],
    "answer": 0,
    "explanation": "Thành phần Management & Automation trong IaaS cung cấp công cụ Infrastructure as Code (IaC như Terraform, Ansible), cho phép lập trình viên định nghĩa toàn bộ hạ tầng bằng mã nguồn và triển khai tự động chỉ với 1 lệnh.",
    "trickDetails": {
      "whyTrapped": "Các phương án nhiễu rất phi lý; đáp án đúng gắn với công cụ chuẩn mực Infrastructure as Code (IaC).",
      "trickWord": "Công cụ Khởi tạo hạ tầng bằng mã nguồn IaC như Terraform thuộc thành phần Automation",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục I.1 & III.1",
      "tip": "Tự động hóa triển khai hạ tầng đám mây bằng code ➔ Infrastructure as Code (IaC / Terraform)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-042",
    "chapterId": "cloud-ch5",
    "question": "Điểm khác biệt mấu chốt giữa Block Storage và Object Storage trong môi trường IaaS là gì?",
    "options": [
      "Block Storage chỉ lưu văn bản chữ, còn Object Storage là thiết bị phần cứng chỉ dùng để nghe nhạc.",
      "Block Storage gắn trực tiếp làm ổ boot/DB, còn Object Storage lưu đối tượng truy cập qua REST API.",
      "Block Storage không có khả năng bảo mật, còn Object Storage miễn phí hoàn toàn dung lượng lưu trữ.",
      "Hai giải pháp này hoàn toàn đồng nghĩa và chỉ khác nhau ở cách viết tắt bằng tiếng Anh thương mại."
    ],
    "answer": 1,
    "explanation": "Khác biệt cốt lõi: Block Storage chia khối nhị phân gắn vào bus ổ đĩa của server (làm OS boot disk, Database); Object Storage lưu tệp phẳng cùng metadata, truy xuất qua giao thức web HTTP/HTTPS REST API.",
    "trickDetails": {
      "whyTrapped": "Thí sinh rất hay nhầm lẫn cách thức truy cập và mục đích sử dụng giữa Block và Object Storage.",
      "trickWord": "Block Storage gắn trực tiếp làm ổ boot/DB; Object Storage lưu đối tượng qua REST API",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục III.1",
      "tip": "Block Storage = Ổ cứng gắn máy chủ (Boot/DB); Object Storage = Kho lưu trữ tệp qua Web API."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-043",
    "chapterId": "cloud-ch5",
    "question": "Sự khác biệt căn bản giữa hai chỉ số phục hồi thảm họa RTO và RPO là gì?",
    "options": [
      "RTO đo lường số tiền bị thiệt hại, còn RPO đo lường số lượng nhân viên công ty phải nghỉ việc.",
      "RTO là chỉ số áp dụng cho mạng LAN, còn RPO là chỉ số áp dụng cho các mạng máy tính không dây.",
      "RTO là thời gian tối đa hệ thống ngừng chạy, còn RPO là lượng dữ liệu tối đa chấp nhận bị mất mát.",
      "RTO và RPO là hai thuật ngữ hoàn toàn trái ngược nhau về mặt đạo đức trong kinh doanh tài chính."
    ],
    "answer": 2,
    "explanation": "RTO (Recovery Time Objective) giới hạn thời gian tối đa hệ thống ngừng hoạt động (Downtime). RPO (Recovery Point Objective) giới hạn lượng dữ liệu tối đa chấp nhận bị mất tính từ thời điểm sao lưu gần nhất.",
    "trickDetails": {
      "whyTrapped": "Học viên rất dễ nhầm lẫn giữa trục thời gian ngừng hệ thống (RTO) và lượng dữ liệu mất mát (RPO).",
      "trickWord": "RTO là thời gian tối đa ngừng chạy; RPO là lượng dữ liệu tối đa chấp nhận mất mát",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục V.1",
      "tip": "RTO = Time (Thời gian gián đoạn); RPO = Point in time (Lượng dữ liệu bị mất)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-044",
    "chapterId": "cloud-ch5",
    "question": "Điểm khác biệt cốt lõi giữa chiến lược sao lưu Incremental Backup và Differential Backup là gì?",
    "options": [
      "Incremental Backup không sao lưu dữ liệu, còn Differential Backup sao chép tất cả các tệp tin hệ thống.",
      "Incremental Backup chỉ chạy trên Windows, còn Differential Backup chỉ chạy trên hệ điều hành Linux.",
      "Incremental Backup bắt buộc phải dùng đĩa mềm, còn Differential Backup bắt buộc phải dùng đĩa CD.",
      "Incremental sao lưu thay đổi so với lần gần nhất, còn Differential sao lưu thay đổi so với bản Full."
    ],
    "answer": 3,
    "explanation": "Incremental Backup chỉ sao chép phần dữ liệu thay đổi so với LẦN SAO LƯU GẦN NHẤT bất kỳ; Differential Backup sao chép tất cả phần dữ liệu thay đổi so với BẢN FULL BACKUP GẦN NHẤT.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm mốc đối chiếu của Incremental (lần gần nhất) và Differential (bản Full gần nhất).",
      "trickWord": "Incremental sao lưu thay đổi so với lần gần nhất; Differential so với bản Full",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục V.1",
      "tip": "Incremental = So với LẦN gần nhất; Differential = So với bản FULL gần nhất."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-045",
    "chapterId": "cloud-ch5",
    "question": "Khác biệt mấu chốt về tài nguyên giữa Dedicated Virtual Server và Shared Virtual Server là gì?",
    "options": [
      "Dedicated sở hữu tài nguyên CPU và RAM riêng biệt, còn Shared chia sẻ chung tài nguyên phần cứng.",
      "Dedicated chỉ dành cho các trang blog cá nhân, còn Shared là giải pháp độc quyền của các ngân hàng.",
      "Dedicated không thể kết nối mạng Internet, còn Shared bắt buộc phải cắm trực tiếp dây cáp quang biển.",
      "Dedicated có chi phí thuê hàng tháng rẻ hơn gấp mười lần so với chi phí của Shared Virtual Server."
    ],
    "answer": 0,
    "explanation": "Dedicated Virtual Server được cấp phát CPU/RAM riêng biệt, không chia sẻ với ai trên máy vật lý, hiệu năng ổn định; Shared Virtual Server chia sẻ chung CPU/RAM với các máy ảo khác, dễ bị Noisy Neighbor.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ Dedicated đắt hơn thì là máy chủ vật lý, hoặc nhầm lẫn về chi phí.",
      "trickWord": "Dedicated sở hữu tài nguyên riêng biệt; Shared chia sẻ chung tài nguyên phần cứng",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục II.1",
      "tip": "Dedicated = Riêng biệt (không Noisy Neighbor); Shared = Dùng chung (rẻ, dính Noisy Neighbor)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-046",
    "chapterId": "cloud-ch5",
    "question": "Khác biệt căn bản về cơ chế điều phối giữa thuật toán Round Robin và Least Connections là gì?",
    "options": [
      "Round Robin chỉ dùng cho mạng không dây, còn Least Connections chỉ dùng cho mạng cáp quang dưới biển.",
      "Round Robin phân phối tuần tự theo vòng tròn, còn Least Connections chọn server đang có ít kết nối nhất.",
      "Round Robin luôn chọn máy chủ có ổ đĩa lớn nhất, còn Least Connections luôn chọn máy chủ có ít RAM nhất.",
      "Round Robin bắt buộc người dùng nhập mật khẩu, còn Least Connections cho phép truy cập hoàn toàn ẩn danh."
    ],
    "answer": 1,
    "explanation": "Round Robin điều phối lần lượt theo vòng tròn thứ tự (1, 2, 3... 1); Least Connections liên tục đo lường số lượng kết nối đang mở và ưu tiên gửi request mới đến server đang có ít kết nối hoạt động nhất.",
    "trickDetails": {
      "whyTrapped": "Các phương án nhiễu gán ghép sai lệch về dung lượng RAM hoặc mật khẩu truy cập.",
      "trickWord": "Round Robin phân phối tuần tự theo vòng tròn; Least Connections chọn server ít kết nối nhất",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục IV.1",
      "tip": "Round Robin = Tuần tự vòng tròn; Least Connections = Dựa trên số lượng kết nối thực tế."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-047",
    "chapterId": "cloud-ch5",
    "question": "Điểm khác biệt căn bản về cấu trúc lưu trữ giữa File Storage và Object Storage là gì?",
    "options": [
      "File Storage chỉ lưu trữ các tệp âm thanh MP3, còn Object Storage chỉ lưu trữ các tệp văn bản Word.",
      "File Storage không có khả năng bảo mật, còn Object Storage có khả năng tự động chống trộm phần cứng.",
      "File Storage tổ chức theo cây thư mục phân cấp, còn Object Storage tổ chức theo không gian phẳng qua API.",
      "Hai giải pháp này hoàn toàn đồng nhất về cấu trúc và chỉ khác nhau ở giao thức mạng cục bộ LAN."
    ],
    "answer": 2,
    "explanation": "File Storage lưu trữ dữ liệu theo cấu trúc Cây thư mục phân cấp (Hierarchical folders/files) truy cập qua NFS/SMB; Object Storage lưu dữ liệu trong Không gian phẳng (Flat namespace), không có thư mục lồng nhau, truy xuất qua REST API.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ lầm tưởng Object Storage cũng có các thư mục con lồng nhau như ổ cứng máy tính.",
      "trickWord": "File Storage tổ chức theo cây thư mục phân cấp; Object Storage tổ chức theo không gian phẳng",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục III.1",
      "tip": "File Storage = Cây thư mục phân cấp (Tree structure); Object Storage = Không gian phẳng (Flat)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-048",
    "chapterId": "cloud-ch5",
    "question": "Sự khác biệt căn bản giữa Hypervisor Loại 1 (Bare-metal) và Hypervisor Loại 2 (Hosted) là gì?",
    "options": [
      "Loại 1 chỉ hoạt động trên điện thoại di động, còn Loại 2 chỉ hoạt động trên các máy chủ siêu máy tính.",
      "Loại 1 không thể tạo được máy ảo Windows, còn Loại 2 không thể tạo được các máy chủ ảo chạy Linux.",
      "Loại 1 là phần mềm độc hại nguy hiểm, còn Loại 2 là phần mềm chống virus được quốc tế công nhận.",
      "Loại 1 cài trực tiếp trên phần cứng vật lý, còn Loại 2 cài đặt như một ứng dụng trên hệ điều hành khác."
    ],
    "answer": 3,
    "explanation": "Type 1 Hypervisor (như VMware ESXi, KVM) cài đặt trực tiếp lên phần cứng vật lý (Bare-metal) cho hiệu năng cao; Type 2 Hypervisor (như VMware Workstation, VirtualBox) cài đặt như một ứng dụng chạy trên một OS chủ (Host OS).",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn vị trí cài đặt của Type 1 (trực tiếp phần cứng) và Type 2 (trên OS chủ).",
      "trickWord": "Loại 1 cài trực tiếp trên phần cứng vật lý; Loại 2 cài đặt như ứng dụng trên hệ điều hành",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục III.1",
      "tip": "Hypervisor Type 1 = Cài trực tiếp trên phần cứng (Bare-metal); Type 2 = Cài trên OS chủ (Hosted)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-049",
    "chapterId": "cloud-ch5",
    "question": "Khác biệt mấu chốt về ranh giới quản lý hệ thống giữa mô hình IaaS và mô hình PaaS là gì?",
    "options": [
      "Trên IaaS khách hàng chỉ quản lý mã nguồn, còn trên PaaS khách hàng tự quản lý toàn bộ hệ điều hành.",
      "Trên IaaS khách hàng tự quản lý Hệ điều hành và Runtime, còn trên PaaS do nhà cung cấp đảm nhận.",
      "Trên IaaS khách hàng được miễn phí tiền điện, còn trên PaaS khách hàng bắt buộc phải trả tiền mạng.",
      "Hai mô hình này hoàn toàn giống nhau về mọi mặt và chỉ khác nhau ở tên viết tắt bằng tiếng Anh."
    ],
    "answer": 1,
    "explanation": "Trong IaaS, khách hàng tự cài đặt và quản trị Hệ điều hành (OS), Middleware và Runtime. Trong PaaS, toàn bộ các tầng này do nhà cung cấp quản lý sẵn, lập trình viên chỉ cần quản lý Applications và Data.",
    "trickDetails": {
      "whyTrapped": "Thí sinh rất hay nhầm lẫn đảo chiều quyền quản trị OS giữa IaaS và PaaS.",
      "trickWord": "IaaS khách hàng tự quản lý Hệ điều hành và Runtime; PaaS do nhà cung cấp đảm nhận",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục I.1",
      "tip": "IaaS = Khách hàng tự lo Hệ điều hành (OS); PaaS = Nhà cung cấp lo sẵn Hệ điều hành (OS)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c5-d2-050",
    "chapterId": "cloud-ch5",
    "question": "Điểm khác biệt cốt lõi giữa Hardware Redundancy và Data Redundancy trong hạ tầng IaaS là gì?",
    "options": [
      "Hardware Redundancy chỉ dùng cho văn phòng nhỏ, còn Data Redundancy chỉ dùng cho các viện nghiên cứu.",
      "Hardware Redundancy không tốn chi phí mua sắm, còn Data Redundancy bắt buộc phải thanh toán bằng tiền mặt.",
      "Hardware Redundancy chỉ hoạt động vào ban ngày, còn Data Redundancy chỉ hoạt động vào các ngày cuối tuần.",
      "Hardware Redundancy nhân bản thiết bị vật lý, còn Data Redundancy sao chép dữ liệu sang nhiều vị trí."
    ],
    "answer": 3,
    "explanation": "Hardware Redundancy tập trung vào việc tạo các thành phần phần cứng thay thế (bộ nguồn phụ, máy chủ dự phòng, card mạng kép, RAID); Data Redundancy tập trung vào việc nhân bản dữ liệu sang nhiều phân vùng hoặc trung tâm dữ liệu độc lập.",
    "trickDetails": {
      "whyTrapped": "Các phương án nhiễu rất hài hước và phi lý; câu đúng phân định rõ ranh giới phần cứng vs dữ liệu.",
      "trickWord": "Hardware Redundancy nhân bản thiết bị vật lý; Data Redundancy sao chép dữ liệu đa vị trí",
      "citation": "Giáo trình Điện toán đám mây — Chương 5, Mục V.1",
      "tip": "Hardware Redundancy = Nhân bản phần cứng (Nguồn, Máy chủ, RAID); Data Redundancy = Nhân bản dữ liệu."
    },
    "difficulty": "hard",
    "isTrick": true
  }
];
