/* ============================================================
   GIÁO TRÌNH ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)
   Chương 6: Identity as a Service (IDaaS)
   Biên tập chuẩn học thuật từ tài liệu nguồn taskcanlam
   ============================================================ */

export const cloudComputingChapter6 = {
  id: "cloud-ch6",
  title: "Chương 6",
  subtitle: "Identity as a Service - IDaaS (Quản lý Danh tính như một Dịch vụ)",
  sections: [
    /* ============================
       MỤC ★: OVERVIEW CHƯƠNG
       ============================ */
    {
      id: "cloud-ch6-s0",
      roman: "★",
      title: "Tổng quan chương: Quản lý Danh tính & Truy cập Đám mây (IDaaS)",
      subsections: [
        {
          id: "cloud-ch6-s0-overview",
          number: "0",
          title: "Bản đồ kiến trúc & Radar kỹ năng Chương 6",
          parts: [
            {
              id: "cloud-ch6-s0-p1",
              label: "★",
              title: "Tổng quan tri thức toàn chương",
              content: [
                {
                  type: "cloud-chapter-hero",
                  chapterId: "cloud-ch6"
                },
                {
                  type: "highlight",
                  text: "Chương 6 nghiên cứu lá chắn an ninh cốt lõi của đám mây: Identity as a Service (IDaaS). Đi sâu vào 3 trụ cột AAA (Authentication - Authorization - Account Management), cơ chế Đăng nhập một lần (SSO), Quản lý danh tính liên hiệp (FIDM qua IdP và SP), chuẩn mở OpenID (OP và RP), vòng đời cấp phát tài khoản (Provisioning), phân quyền RBAC/ABAC và quản lý thiết bị di động doanh nghiệp (MDM/MAM)."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC I: TỔNG QUAN & 3 TRỤ CỘT
       ============================ */
    {
      id: "cloud-ch6-s1",
      roman: "I",
      title: "Khái niệm IDaaS & 3 Trụ cột Chức năng Cốt lõi (AAA)",
      subsections: [
        {
          id: "cloud-ch6-s1-def",
          number: "1",
          title: "Định nghĩa & 3 Chức năng AAA của IDaaS",
          parts: [
            {
              id: "cloud-ch6-s1-def-p1",
              label: "a",
              title: "Khái niệm học thuật",
              content: [
                {
                  type: "definition",
                  term: "Identity as a Service (IDaaS)",
                  definition: "IDaaS là mô hình dịch vụ đám mây chuyên trách việc cung cấp các giải pháp Quản lý Danh tính và Quyền truy cập (IAM - Identity and Access Management) tập trung từ xa qua Internet. IDaaS cho phép doanh nghiệp xác thực người dùng, ủy quyền truy cập tài nguyên và quản lý vòng đời tài khoản một cách an toàn, nhất quán và tiết kiệm chi phí vận hành."
                },
                {
                  type: "table",
                  headers: ["Trụ cột chức năng", "Khái niệm tiếng Anh", "Nhiệm vụ nghiệp vụ"],
                  rows: [
                    ["1. Xác thực (Authentication)", "Authentication (AuthN)", "Kiểm tra và chứng thực xem người dùng thực sự là ai (User credentials, Mật khẩu, MFA, Sinh trắc học)."],
                    ["2. Phân quyền (Authorization)", "Authorization (AuthZ)", "Xác định người dùng đã được xác thực có quyền hạn làm gì trên tài nguyên nào (RBAC, ABAC, Quyền đọc/ghi)."],
                    ["3. Quản lý tài khoản (Account Mgmt)", "Account Lifecycle Management", "Quy trình tự động tạo mới, cập nhật chức danh, đồng bộ và thu hồi/xóa bỏ tài khoản khi nhân viên nghỉ việc."]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch6-s1-benefits",
          number: "2",
          title: "Lợi ích Chiến lược vs Thách thức Rủi ro",
          parts: [
            {
              id: "cloud-ch6-s1-benefits-p1",
              label: "b",
              title: "Đánh giá hai mặt của IDaaS",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Lợi ích:</strong> Tiết kiệm chi phí đầu tư máy chủ xác thực nội bộ; khả năng mở rộng quy mô tức thì khi công ty tăng trưởng; nâng cao trải nghiệm làm việc nhờ SSO; kiểm soát tập trung và báo cáo kiểm toán (Audit Logs) chặt chẽ phục vụ tuân thủ các chứng chỉ bảo mật quốc tế (ISO 27001, SOC 2).",
                    "<strong>Thách thức:</strong> Rủi ro điểm lỗi đơn lẻ tập trung (Single Point of Failure); nguy cơ nếu tài khoản IDaaS bị xâm phạm thì kẻ tấn công sẽ tiếp cận được toàn bộ hệ thống vệ tinh; sự phụ thuộc vào đường truyền mạng và độ tin cậy của bên thứ ba."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC II: FIDM & SSO
       ============================ */
    {
      id: "cloud-ch6-s2",
      roman: "II",
      title: "Danh tính Liên hiệp (FIDM) & Đăng nhập Một lần (SSO)",
      subsections: [
        {
          id: "cloud-ch6-s2-fidm",
          number: "1",
          title: "Quản lý Danh tính Liên hiệp (Federated Identity Management - FIDM)",
          parts: [
            {
              id: "cloud-ch6-s2-fidm-p1",
              label: "a",
              title: "Mô hình quan hệ tin cậy IdP và SP",
              content: [
                {
                  type: "paragraph",
                  text: "FIDM là hệ thống cho phép người dùng sử dụng một danh tính duy nhất được công nhận qua lại giữa nhiều tổ chức hoặc hệ thống ứng dụng khác nhau mà không cần tạo tài khoản riêng rẽ:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Identity Provider (IdP - Nhà cung cấp danh tính):</strong> Cơ quan thẩm quyền chịu trách nhiệm xác thực người dùng và phát hành các thẻ chứng thực an toàn (Authentication Token như SAML Assertion, JWT). Ví dụ: Okta, Azure AD, Ping Identity.",
                    "<strong>Service Provider (SP - Nhà cung cấp dịch vụ):</strong> Ứng dụng nghiệp vụ (Salesforce, Workday, GitHub) tiếp nhận token từ IdP, kiểm tra chữ ký số và cấp quyền truy cập cho người dùng mà không bao giờ nhìn thấy mật khẩu gốc của họ.",
                    "<strong>Authentication Token (Thẻ chứng thực):</strong> Chuỗi mã hóa chứa các thuộc tính (Claims) của người dùng kèm chữ ký mật mã học của IdP."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch6-s2-sso",
          number: "2",
          title: "Cơ chế Đăng nhập Một lần (Single Sign-On - SSO)",
          parts: [
            {
              id: "cloud-ch6-s2-sso-p1",
              label: "b",
              title: "Quy trình xác thực SSO 4 bước",
              content: [
                {
                  type: "paragraph",
                  text: "SSO là trải nghiệm thực tiễn xây dựng trên nền tảng FIDM, cho phép người dùng <strong>chỉ cần đăng nhập một lần duy nhất</strong> vào đầu ngày làm việc là có thể truy cập liền mạch mọi ứng dụng đám mây:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Bước 1:</strong> Người dùng truy cập ứng dụng (Service Provider), ứng dụng phát hiện chưa có phiên đăng nhập và chuyển hướng (Redirect) trình duyệt sang trang đăng nhập của IdP.",
                    "<strong>Bước 2:</strong> Người dùng nhập thông tin xác thực (Mật khẩu + MFA) tại IdP. IdP xác minh thành công và tạo một mã chứng thực có chữ ký số (SAML/OIDC Token).",
                    "<strong>Bước 3:</strong> Trình duyệt chuyển tiếp Token này về lại cho ứng dụng Service Provider.",
                    "<strong>Bước 4:</strong> Service Provider xác thực chữ ký của Token, tạo phiên làm việc cục bộ và cho phép người dùng vào làm việc mà không cần hỏi mật khẩu lần thứ hai."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC III: PROVISIONING & OPENID
       ============================ */
    {
      id: "cloud-ch6-s3",
      roman: "III",
      title: "Cấp phát Tài khoản (Provisioning) & Chuẩn Mở OpenID",
      subsections: [
        {
          id: "cloud-ch6-s3-provisioning",
          number: "1",
          title: "Vòng đời Cấp phát Tài khoản (Account Provisioning / Deprovisioning)",
          parts: [
            {
              id: "cloud-ch6-s3-provisioning-p1",
              label: "a",
              title: "4 Giai đoạn quản lý vòng đời tài khoản",
              content: [
                {
                  type: "paragraph",
                  text: "Quản lý cấp phát tài khoản tự động (thường triển khai qua giao thức SCIM - System for Cross-domain Identity Management) kiểm soát 4 bước trong vòng đời của nhân viên:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>1. Create Account (Khởi tạo tài khoản):</strong> Khi phòng nhân sự thêm nhân viên mới vào hệ thống HR, IDaaS tự động kích hoạt tạo tài khoản đồng loạt trên email, Slack, Zoom và cloud servers.",
                    "<strong>2. Grant Access (Cấp quyền):</strong> Tự động gán các vai trò và quyền truy cập thư mục dựa theo phòng ban và chức danh.",
                    "<strong>3. Account Management (Điều chỉnh quyền):</strong> Cập nhật tăng/giảm quyền khi nhân viên luân chuyển phòng ban hoặc thăng chức.",
                    "<strong>4. Deprovisioning / Delete Account (Thu hồi & Khóa tài khoản):</strong> Khi nhân viên nghỉ việc, chỉ một thao tác vô hiệu hóa tại IdP trung tâm sẽ ngay lập tức khóa quyền truy cập trên toàn bộ hàng trăm ứng dụng liên kết, triệt tiêu nguy cơ rò rỉ dữ liệu."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch6-s3-openid",
          number: "2",
          title: "Chuẩn mở OpenID / OpenID Connect (OIDC)",
          parts: [
            {
              id: "cloud-ch6-s3-openid-p1",
              label: "b",
              title: "Quan hệ giữa OP (OpenID Provider) và RP (Relying Party)",
              content: [
                {
                  type: "definition",
                  term: "OpenID & OpenID Connect (OIDC)",
                  definition: "OpenID là giao thức phi tập trung tiêu chuẩn mở cho phép người dùng sử dụng một tài khoản số duy nhất (ví dụ Google ID, Facebook ID, Apple ID) để đăng nhập vào nhiều trang web khác nhau mà không cần để lộ mật khẩu."
                },
                {
                  type: "paragraph",
                  text: "Trong chuẩn OpenID, hai khái niệm cốt lõi tương ứng là: <strong>OpenID Provider (OP)</strong> đóng vai trò như IdP (xác thực và cấp ID Token) và <strong>Relying Party (RP)</strong> đóng vai trò như SP (ứng dụng tin cậy chấp nhận ID Token)."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC IV: MOBILE ID & GIẢI PHÁP
       ============================ */
    {
      id: "cloud-ch6-s4",
      roman: "IV",
      title: "Mobile ID Management, Phân quyền RBAC/ABAC & Giải pháp",
      subsections: [
        {
          id: "cloud-ch6-s4-mobile",
          number: "1",
          title: "Quản trị Danh tính Thiết bị Di động (MDM & MAM)",
          parts: [
            {
              id: "cloud-ch6-s4-mobile-p1",
              label: "a",
              title: "Bảo vệ truy cập từ thiết bị cá nhân (BYOD)",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Mobile Device Management (MDM):</strong> Quản lý toàn diện phần cứng thiết bị di động (bắt buộc đặt mã PIN, mã hóa ổ đĩa điện thoại, khóa máy và xóa sạch dữ liệu từ xa khi bị mất cắp).",
                    "<strong>Mobile Application Management (MAM):</strong> Quản lý chỉ riêng các ứng dụng công việc của công ty mà không xâm phạm dữ liệu cá nhân của nhân viên (ngăn cấm sao chép dữ liệu từ ứng dụng công ty sang ứng dụng cá nhân).",
                    "<strong>Kiểm soát theo ngữ cảnh (Contextual Access):</strong> Kiểm tra vị trí địa lý (Geo-location), độ tin cậy của thiết bị và dải IP trước khi cấp quyền truy cập nhạy cảm."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch6-s4-rbac-abac",
          number: "2",
          title: "Mô hình Phân quyền: RBAC vs ABAC",
          parts: [
            {
              id: "cloud-ch6-s4-rbac-abac-p1",
              label: "b",
              title: "Kiểm soát truy cập dựa trên Vai trò vs Thuộc tính",
              content: [
                {
                  type: "table",
                  headers: ["Tiêu chí so sánh", "RBAC (Role-Based Access Control)", "ABAC (Attribute-Based Access Control)"],
                  rows: [
                    ["Cơ sở phân quyền", "Gán quyền theo vai trò chức danh (Ví dụ: Kế toán, Kỹ sư, Giám đốc).", "Gán quyền linh hoạt theo thuộc tính đa chiều (User + Resource + Environment)."],
                    ["Quy tắc điển hình", "Vai trò Kế toán được xem bảng lương.", "Nếu Người dùng = 'Kế toán' VÀ Thời gian = 'Giờ hành chính' VÀ Thiết bị = 'Máy công ty' thì cho phép xem."],
                    ["Độ phức tạp", "Đơn giản, dễ cấu hình, phù hợp tổ chức tĩnh.", "Rất chi tiết, độ linh hoạt cực cao, phù hợp Zero Trust."],
                    ["Khả năng quản trị", "Dễ bùng nổ số lượng vai trò (Role explosion) khi quy mô lớn.", "Chính sách quản lý thống nhất dưới dạng biểu thức logic."]
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC V: TỔNG KẾT
       ============================ */
    {
      id: "cloud-ch6-s5",
      roman: "V",
      title: "Tổng kết Chương 6 & Bảng Thuật ngữ Cốt lõi",
      subsections: [
        {
          id: "cloud-ch6-s5-summary",
          number: "1",
          title: "Bảng từ khóa & Tóm lược ôn thi",
          parts: [
            {
              id: "cloud-ch6-s5-summary-p1",
              label: "a",
              title: "Bảng thuật ngữ an ninh danh tính",
              content: [
                {
                  type: "table",
                  headers: ["Thuật ngữ", "Khái niệm tiếng Anh", "Bản chất kỹ thuật"],
                  rows: [
                    ["IDaaS", "Identity as a Service", "Dịch vụ quản trị danh tính và quyền truy cập tập trung trên đám mây."],
                    ["SSO", "Single Sign-On", "Đăng nhập một lần duy nhất truy cập được nhiều ứng dụng liên kết."],
                    ["FIDM", "Federated Identity Management", "Mô hình thiết lập quan hệ tin cậy danh tính xuyên tổ chức."],
                    ["IdP", "Identity Provider", "Bên xác thực danh tính và phát hành token."],
                    ["SP", "Service Provider", "Bên cung cấp dịch vụ xác minh token và cấp quyền."],
                    ["Provisioning", "Account Lifecycle Provisioning", "Quy trình tự động hóa tạo mới, duy trì và thu hồi tài khoản."],
                    ["RBAC", "Role-Based Access Control", "Phân quyền truy cập dựa trên vai trò/chức danh."],
                    ["ABAC", "Attribute-Based Access Control", "Phân quyền truy cập theo ngữ cảnh thuộc tính linh hoạt."]
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
