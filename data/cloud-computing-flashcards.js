/* ============================================================
   DANH MỤC THẺ GHI NHỚ THUẬT NGỮ (FLASHCARDS)
   Phục vụ thuật toán lặp lại ngắt quãng SM-2 trên Cloud Computing
   ============================================================ */

export const cloudFlashcards = [
  {
    cardId: "cloud_fc_01",
    chapterId: "cloud-ch1",
    subsectionId: "cloud-ch1-s2-features",
    front: "On-demand Self-service trong mô hình NIST là gì?",
    back: "Khả năng tự phục vụ: Người dùng tự cấp phát tài nguyên tính toán (server, storage...) tự động mà không cần can thiệp thủ công từ nhà cung cấp.",
    vi: "Tự phục vụ theo nhu cầu",
    en: "On-demand self-service",
    abbreviation: "On-demand"
  },
  {
    cardId: "cloud_fc_02",
    chapterId: "cloud-ch1",
    subsectionId: "cloud-ch1-s2-features",
    front: "Rapid Elasticity trong Cloud mang lại lợi ích gì?",
    back: "Khả năng co giãn nhanh: Tài nguyên được co giãn linh hoạt tăng hoặc giảm theo thời gian thực tương ứng với tải hệ thống.",
    vi: "Độ co giãn nhanh",
    en: "Rapid elasticity",
    abbreviation: "Elasticity"
  },
  {
    cardId: "cloud_fc_03",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s3-types",
    front: "Hypervisor Type 1 (Bare-Metal) khác Type 2 ở điểm nào?",
    back: "Type 1 chạy trực tiếp trên phần cứng vật lý (ESXi, Xen, KVM). Type 2 chạy trên nền một Hệ điều hành chủ (VirtualBox, VMware Workstation).",
    vi: "Bộ ảo hóa Bare-Metal",
    en: "Type-1 Bare-Metal Hypervisor",
    abbreviation: "Type-1"
  },
  {
    cardId: "cloud_fc_04",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s4-migration",
    front: "3 giai đoạn của quy trình Live VM Migration là gì?",
    back: "1. Pre-copy (sao chép trước khi VM đang chạy) ➔ 2. Stop-and-copy (tạm dừng chép RAM bẩn) ➔ 3. Post-copy (khôi phục chạy tiếp).",
    vi: "Di chuyển máy ảo trực tiếp",
    en: "Live VM Migration",
    abbreviation: "Migration"
  },
  {
    cardId: "cloud_fc_05",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s2-comparison",
    front: "Đặc trưng kiến trúc Multi-tenant trong SaaS là gì?",
    back: "Một bản cài đặt ứng dụng duy nhất phục vụ nhiều khách hàng (tenants) cùng lúc với cơ chế phân tách logic và bảo mật dữ liệu an toàn.",
    vi: "Kiến trúc đa khách thuê",
    en: "Multi-tenant Architecture",
    abbreviation: "Multi-tenancy"
  },
  {
    cardId: "cloud_fc_06",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s3-mashups",
    front: "Sự khác biệt giữa Web-based Mashup và Server-based Mashup?",
    back: "Web-based chạy hoàn toàn trên trình duyệt người dùng qua JS; Server-based xử lý tổng hợp dữ liệu trên máy chủ trung gian an toàn và hiệu năng hơn.",
    vi: "Tích hợp ứng dụng Mashup",
    en: "Service Mashups",
    abbreviation: "Mashup"
  },
  {
    cardId: "cloud_fc_07",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s3-drawbacks",
    front: "Khái niệm Vendor Lock-in trong PaaS là gì?",
    back: "Rủi ro bị phụ thuộc chặt chẽ vào các API và dịch vụ độc quyền của một nhà cung cấp, khiến việc chuyển đổi sang nền tảng khác trở nên vô cùng tốn kém.",
    vi: "Khóa chặt nhà cung cấp",
    en: "Vendor Lock-in",
    abbreviation: "Lock-in"
  },
  {
    cardId: "cloud_fc_08",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s5-trends",
    front: "Kiến trúc Serverless / FaaS hoạt động theo nguyên lý nào?",
    back: "Mô hình tính toán kích hoạt theo sự kiện (Event-driven): Hàm code chỉ khởi chạy khi có request đến và tính tiền theo từng mili-giây thời gian chạy thực tế.",
    vi: "Hàm như một dịch vụ",
    en: "Function as a Service",
    abbreviation: "FaaS"
  },
  {
    cardId: "cloud_fc_09",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s3-algorithms",
    front: "So sánh 2 thuật toán cân bằng tải: Round Robin vs Least Connections?",
    back: "Round Robin chia tuần tự lần lượt; Least Connections chia ưu tiên cho máy chủ hiện có ít phiên kết nối hoạt động nhất.",
    vi: "Thuật toán cân bằng tải",
    en: "Load Balancing Algorithms",
    abbreviation: "LB"
  },
  {
    cardId: "cloud_fc_10",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s2-sso",
    front: "SSO (Single Sign-On) trong IDaaS mang lại giá trị gì?",
    back: "Cho phép người dùng chỉ cần đăng nhập 1 lần duy nhất là có thể truy cập an toàn vào nhiều dịch vụ ứng dụng đám mây độc lập qua giao thức SAML/OIDC.",
    vi: "Đăng nhập một lần",
    en: "Single Sign-On",
    abbreviation: "SSO"
  },
  {
    cardId: "cloud_fc_11",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s4-rbac-abac",
    front: "Sự khác biệt cốt lõi giữa RBAC và ABAC là gì?",
    back: "RBAC phân quyền dựa trên vai trò chức danh (Role); ABAC phân quyền theo ngữ cảnh thuộc tính linh hoạt (Người dùng + Tài nguyên + Môi trường).",
    vi: "Kiểm soát truy cập",
    en: "RBAC vs ABAC",
    abbreviation: "IAM"
  },
  {
    cardId: "cloud_fc_12",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s2-trends",
    front: "3 thành phần cấu tạo nên một Object trong Object Storage là gì?",
    back: "Gồm: 1. Dữ liệu nhị phân (Data) + 2. Siêu dữ liệu mô tả (Metadata) + 3. Khóa định danh duy nhất toàn cục (Unique Identifier).",
    vi: "Lưu trữ đối tượng",
    en: "Object Storage Architecture",
    abbreviation: "S3"
  }
];
