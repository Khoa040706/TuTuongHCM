/* ============================================================
   TỪ ĐIỂN THUẬT NGỮ SONG NGỮ ĐIỆN TOÁN ĐÁM MÂY (GLOSSARY)
   Phục vụ tính năng tìm kiếm thông minh Việt - Anh (Ctrl + K)
   ============================================================ */

export const cloudGlossary = [
  {
    id: "term-iaas",
    vi: "Hạ tầng như một dịch vụ",
    en: "Infrastructure as a Service",
    abbreviation: "IaaS",
    aliases: ["hạ tầng đám mây", "máy chủ ảo", "compute cloud"],
    definition: "Mô hình dịch vụ cloud cung cấp tài nguyên phần cứng (máy chủ, ổ đĩa, mạng) qua Internet theo nhu cầu on-demand.",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s1-def"
  },
  {
    id: "term-paas",
    vi: "Nền tảng như một dịch vụ",
    en: "Platform as a Service",
    abbreviation: "PaaS",
    aliases: ["nền tảng đám mây", "môi trường phát triển ứng dụng"],
    definition: "Mô hình dịch vụ cung cấp môi trường nền tảng (OS, runtime, CSDL, web server) để lập trình viên phát triển và chạy ứng dụng mà không cần quản trị hạ tầng.",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s1-def"
  },
  {
    id: "term-saas",
    vi: "Phần mềm như một dịch vụ",
    en: "Software as a Service",
    abbreviation: "SaaS",
    aliases: ["phần mềm đám mây", "ứng dụng dịch vụ"],
    definition: "Mô hình phân phối phần mềm chạy trên hạ tầng của bên thứ ba, người dùng sử dụng qua Internet bằng trình duyệt web mà không cần cài đặt.",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s1-def"
  },
  {
    id: "term-idaas",
    vi: "Quản lý danh tính như một dịch vụ",
    en: "Identity as a Service",
    abbreviation: "IDaaS",
    aliases: ["quản lý danh tính", "iam cloud"],
    definition: "Dịch vụ quản trị danh tính và quyền truy cập (IAM) tập trung trên nền tảng đám mây gồm xác thực, phân quyền và quản lý tài khoản.",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s1-def"
  },
  {
    id: "term-sso",
    vi: "Đăng nhập một lần",
    en: "Single Sign-On",
    abbreviation: "SSO",
    aliases: ["đăng nhập tập trung", "one login"],
    definition: "Cơ chế cho phép người dùng chỉ cần đăng nhập một lần duy nhất vào IdP là có thể truy cập nhiều ứng dụng liên kết mà không cần nhập lại mật khẩu.",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s2-sso"
  },
  {
    id: "term-fidm",
    vi: "Quản lý danh tính liên hiệp",
    en: "Federated Identity Management",
    abbreviation: "FIDM",
    aliases: ["liên hiệp danh tính", "identity federation"],
    definition: "Hệ thống liên kết cho phép chia sẻ danh tính an toàn giữa các tổ chức khác nhau thông qua thỏa thuận tin cậy giữa IdP và SP.",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s2-fidm"
  },
  {
    id: "term-idp",
    vi: "Nhà cung cấp danh tính",
    en: "Identity Provider",
    abbreviation: "IdP",
    aliases: ["bên xác thực", "auth provider"],
    definition: "Hệ thống chịu trách nhiệm xác minh danh tính người dùng và phát hành các thẻ chứng thực an toàn (Authentication Tokens).",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s2-fidm"
  },
  {
    id: "term-sp",
    vi: "Nhà cung cấp dịch vụ",
    en: "Service Provider",
    abbreviation: "SP",
    aliases: ["bên cung cấp dịch vụ", "relying party"],
    definition: "Ứng dụng hoặc dịch vụ chấp nhận token từ IdP để cấp quyền truy cập tài nguyên cho người dùng.",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s2-fidm"
  },
  {
    id: "term-multi-tenant",
    vi: "Kiến trúc đa khách thuê",
    en: "Multi-tenant Architecture",
    abbreviation: "Multi-tenancy",
    aliases: ["đa nhiệm", "dùng chung hạ tầng"],
    definition: "Kiến trúc phần mềm trong đó một phiên bản cài đặt ứng dụng duy nhất phục vụ nhiều khách hàng độc lập, phân tách dữ liệu logic an toàn.",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s2-comparison"
  },
  {
    id: "term-single-tenant",
    vi: "Kiến trúc đơn khách thuê",
    en: "Single-tenant Architecture",
    abbreviation: "Single-tenancy",
    aliases: ["đơn nhiệm", "biệt lập dữ liệu"],
    definition: "Mỗi khách hàng sở hữu một phiên bản phần mềm và một cơ sở dữ liệu riêng biệt, tối đa hóa bảo mật và tùy biến.",
    chapterId: "cloud-ch3",
    subsectionId: "cloud-ch3-s2-comparison"
  },
  {
    id: "term-auto-scaling",
    vi: "Tự động co giãn",
    en: "Auto-scaling",
    abbreviation: "Auto-scale",
    aliases: ["co giãn linh hoạt", "elasticity"],
    definition: "Cơ chế tự động tăng hoặc giảm số lượng máy chủ ảo tương ứng với tải lưu lượng truy cập thực tế.",
    chapterId: "cloud-ch1",
    subsectionId: "cloud-ch1-s2-features"
  },
  {
    id: "term-load-balancer",
    vi: "Bộ cân bằng tải",
    en: "Load Balancer",
    abbreviation: "LB",
    aliases: ["cân bằng tải mạng", "traffic distributor"],
    definition: "Thiết bị hoặc phần mềm phân phối đều đặn lưu lượng truy cập mạng đến cụm máy chủ backend còn hoạt động tốt.",
    chapterId: "cloud-ch5",
    subsectionId: "cloud-ch5-s3-algorithms"
  },
  {
    id: "term-leaf-spine",
    vi: "Tô-pô mạng Leaf-Spine",
    en: "Leaf-Spine Topology",
    abbreviation: "Leaf-Spine",
    aliases: ["kiến trúc mạng spine leaf", "mạng data center"],
    definition: "Kiến trúc mạng hai tầng phẳng trong Trung tâm dữ liệu kết nối mọi switch Leaf đến tất cả switch Spine, triệt tiêu điểm nghẽn cổ chai.",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s2-topologies"
  },
  {
    id: "term-hypervisor",
    vi: "Bộ ảo hóa phần cứng",
    en: "Hypervisor / Virtual Machine Monitor",
    abbreviation: "VMM",
    aliases: ["phần mềm ảo hóa", "type 1 type 2"],
    definition: "Lớp phần mềm điều phối chạy trực tiếp trên phần cứng (Type-1) hoặc trên hệ điều hành (Type-2) để tạo và quản lý các máy ảo độc lập.",
    chapterId: "cloud-ch2",
    subsectionId: "cloud-ch2-s4-hypervisor"
  },
  {
    id: "term-object-storage",
    vi: "Lưu trữ đối tượng",
    en: "Object Storage",
    abbreviation: "S3",
    aliases: ["lưu trữ phi cấu trúc", "cloud object storage"],
    definition: "Kiến trúc lưu trữ dữ liệu dưới dạng đối tượng gồm data nhị phân, metadata phong phú và khóa định danh duy nhất, truy cập qua API HTTP.",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s2-trends"
  },
  {
    id: "term-block-storage",
    vi: "Lưu trữ khối",
    en: "Block Storage",
    abbreviation: "EBS",
    aliases: ["ổ đĩa ảo", "managed disk"],
    definition: "Cung cấp các khối lưu trữ dữ liệu thô gắn vào máy chủ ảo như ổ đĩa vật lý, tối ưu cho HĐH và CSDL với tốc độ I/O cao.",
    chapterId: "cloud-ch7",
    subsectionId: "cloud-ch7-s4-block"
  },
  {
    id: "term-vendor-lockin",
    vi: "Khóa nhà cung cấp",
    en: "Vendor Lock-in",
    abbreviation: "Lock-in",
    aliases: ["phụ thuộc nhà cung cấp", "rào cản chuyển đổi"],
    definition: "Tình trạng khách hàng bị lệ thuộc vào công nghệ hoặc dịch vụ độc quyền của một nhà cung cấp đám mây duy nhất, khó chuyển đổi sang nền tảng khác.",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s3-drawbacks"
  },
  {
    id: "term-serverless",
    vi: "Kiến trúc không máy chủ",
    en: "Serverless Computing / Function as a Service",
    abbreviation: "FaaS",
    aliases: ["hàm dịch vụ", "lambda"],
    definition: "Mô hình thực thi code kích hoạt theo sự kiện, nhà cung cấp tự quản lý hạ tầng hoàn toàn và chỉ tính phí theo mili-giây khi hàm chạy.",
    chapterId: "cloud-ch4",
    subsectionId: "cloud-ch4-s5-trends"
  }
];
