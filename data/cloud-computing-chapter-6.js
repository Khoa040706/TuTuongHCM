/* ============================================================
   GIÁO TRÌNH ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)
   Chương 6: Identity as a Service (IDaaS)
   Biên soạn chuẩn học thuật theo tài liệu bài giảng chính thức
   Toàn bộ giáo trình: Từ Mục ★ đến Mục VIII (Hoàn thiện 100%)
   ============================================================ */

export const cloudComputingChapter6 = {
  id: "cloud-ch6",
  title: "Chương 6",
  subtitle: "Identity as a Service (IDaaS)",
  sections: [
    /* ============================
       MỤC ★: TỔNG QUAN CHƯƠNG (Hero Banner)
       ============================ */
    {
      id: "cloud-ch6-s0",
      roman: "★",
      title: "Tổng quan chương: Identity as a Service (IDaaS)",
      subsections: [
        {
          id: "cloud-ch6-s0-overview",
          number: "0",
          title: "Bản đồ kiến thức cốt lõi Chương 6: Identity as a Service",
          parts: [
            {
              id: "cloud-ch6-s0-p1",
              label: "★",
              title: "Tổng quan tri thức toàn chương & Buồng điều khiển danh tính IDaaS",
              content: [
                {
                  type: "chapter6-hero-banner"
                },
                {
                  type: "highlight",
                  text: "Chương 6 nghiên cứu toàn diện giải pháp Quản lý danh tính và quyền truy cập dưới dạng dịch vụ đám mây (Identity as a Service - IDaaS): Bộ ba trụ cột chức năng cốt lõi AAA (Authentication - Authorization - Account Management), cán cân chiến lược giữa 6 Lợi ích và 5 Thách thức đánh đổi, kiến trúc Liên minh danh tính Federated Identity Management (FIDM) với bộ ba IdP - SP - Token, giải pháp Đăng nhập một lần Single Sign-On (SSO) và rủi ro điểm lỗi đơn lẻ (Single Point of Failure), quy trình 4 bước vòng đời cấp phát tài khoản (Provisioning) qua chuẩn SCIM, chuẩn mở OpenID (OP thay IdP, RP thay SP), giải pháp bảo vệ danh tính di động Mobile ID (MFA, MDM vs MAM, Remote Wipe) cùng khảo sát chuyên sâu 4 nhà cung cấp IDaaS tiêu biểu (Ping Identity, SinglePoint, Symplified, OpenSaaS) và quy trình triển khai 5 bước chuẩn công nghiệp."
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Lộ trình học tập & Buồng điều khiển Hero Banner",
                  text: "Bạn có thể tương tác với 4 chế độ trên Hero Banner phía trên (Bộ ba AAA, Vòng đời Pipeline, 4 Nhà cung cấp, Radar Bẫy thi) hoặc nhấp vào 8 trạm Lab Hubs để tự động cuộn trang mượt mà và làm nổi bật phần thực hành tương tác mong muốn."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC I: GIỚI THIỆU CHUNG
       ============================ */
    {
      id: "cloud-ch6-s1",
      roman: "I",
      title: "Giới thiệu chung về Identity Management & IDaaS",
      subsections: [
        {
          id: "cloud-ch6-s1-1-intro",
          number: "1.1",
          title: "Mục tiêu chương & Khó khăn trong quản lý danh tính",
          parts: [
            {
              id: "cloud-ch6-s1-1-p1",
              label: "1.1.1",
              title: "Bài toán khó khăn trong quản lý danh tính truyền thống",
              content: [
                {
                  type: "paragraph",
                  text: "Trong kỷ nguyên số hóa và điện toán đám mây, nhân viên doanh nghiệp phải sử dụng hàng chục ứng dụng khác nhau mỗi ngày (Email, ERP, CRM, Cloud Storage, HR Portal)."
                },
                {
                  type: "paragraph",
                  text: "Mô hình quản lý danh tính cục bộ truyền thống dẫn đến tình trạng người dùng phải ghi nhớ quá nhiều mật khẩu, dễ bị tấn công lừa đảo (Phishing), trong khi đội ngũ IT mất hàng trăm giờ mỗi tháng chỉ để xử lý các yêu cầu đặt lại mật khẩu và cấp phát tài khoản thủ công."
                },
                {
                  type: "highlight",
                  text: "Mục tiêu cốt lõi của Chương 6: (1) Mô tả khó khăn trong quản lý danh tính; (2) Thảo luận giải pháp Đăng nhập một lần (Single Sign-On - SSO); (3) Trình bày toàn diện lợi ích & thách thức của IDaaS; (4) Giới thiệu các giải pháp IDaaS hàng đầu thế giới."
                }
              ]
            },
            {
              id: "cloud-ch6-s1-1-p2",
              label: "1.1.2",
              title: "6 Nội dung chính của bài học & Khẩu quyết 3 trụ cột",
              content: [
                {
                  type: "paragraph",
                  text: "Chương 6 được cấu trúc chặt chẽ gồm 6 phần nội dung học thuật: (1) Single Sign-On (SSO); (2) Manage federated identities (FIDM); (3) Provision of accounts (Cấp phát tài khoản); (4) OpenID; (5) Mobile ID management (Quản lý danh tính di động); (6) Chapter summary (Tổng kết chương)."
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "Khẩu quyết ghi nhớ cốt lõi Mục I",
                  text: "Cần nhớ: IDaaS xoay quanh 3 trụ cột cơ bản: Authentication (Xác thực) - Authorization (Phân quyền) - Account Management (Quản lý tài khoản)."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC II: KHÁI NIỆM CƠ BẢN VỀ IDAAS
       ============================ */
    {
      id: "cloud-ch6-s2",
      roman: "II",
      title: "Khái niệm cơ bản về IDaaS & Bộ ba chức năng AAA",
      subsections: [
        {
          id: "cloud-ch6-s2-1-definition",
          number: "2.1",
          title: "Định nghĩa IDaaS & 3 Chức năng cốt lõi (AAA)",
          parts: [
            {
              id: "cloud-ch6-s2-1-p1",
              label: "2.1.1",
              title: "Định nghĩa chuẩn học thuật của Identity as a Service",
              content: [
                {
                  type: "paragraph",
                  text: "Identity as a Service (IDaaS) là mô hình dịch vụ điện toán đám mây cung cấp các giải pháp quản lý danh tính và quyền truy cập (Identity and Access Management - IAM) được lưu trữ và vận hành hoàn toàn trên hạ tầng đám mây (Cloud)."
                },
                {
                  type: "paragraph",
                  text: "IDaaS giúp các tổ chức và doanh nghiệp quản lý danh mục người dùng (User Directory) và quyền truy cập (Access Rights) một cách: Hiệu quả - An toàn - Tiết kiệm chi phí tối đa."
                },
                {
                  type: "highlight",
                  text: "3 Chức năng cốt lõi bắt buộc của IDaaS: (1) Authentication (Xác thực danh tính người dùng); (2) Authorization (Cấp quyền truy cập tài nguyên); (3) Account Management (Tạo, cập nhật, xóa và quản lý vòng đời tài khoản)."
                },
                {
                  type: "idaas-triple-a-cockpit"
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Công thức vàng thi cử Mục II",
                  text: "Cần nhớ: 3 Chức năng cốt lõi của IDaaS = Bộ ba AAA (Authentication - Authorization - Account Management)."
                },
                {
                  type: "micro-quiz",
                  question: "Chức năng nào trong bộ ba AAA của IDaaS chịu trách nhiệm xác định xem một người dùng đã đăng nhập hợp lệ ĐƯỢC PHÉP TRUY CẬP vào những tài nguyên hoặc dữ liệu cụ thể nào?",
                  options: [
                    "Authorization (Phân quyền truy cập)",
                    "Authentication (Xác thực danh tính)",
                    "Account Management (Quản lý tài khoản)",
                    "Accounting (Ghi nhật ký kiểm toán)"
                  ],
                  answerIndex: 0,
                  explanation: "Authorization (Phân quyền) là quá trình kiểm tra và cấp phép cho người dùng truy cập các tài nguyên cụ thể dựa trên vai trò hoặc chính sách (Permissions). Ngược lại, Authentication chỉ làm nhiệm vụ xác minh xem 'bạn là ai'.",
                  hint: "Từ khóa: 'Cấp quyền truy cập tài nguyên' ➔ Luôn là Authorization."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC III: LỢI ÍCH & THÁCH THỨC CỦA IDAAS
       ============================ */
    {
      id: "cloud-ch6-s3",
      roman: "III",
      title: "Lợi ích & Thách thức của IDaaS (Benefits & Challenges)",
      subsections: [
        {
          id: "cloud-ch6-s3-1-benefits-challenges",
          number: "3.1",
          title: "6 Lợi ích đột phá & 5 Thách thức thực tế của IDaaS",
          parts: [
            {
              id: "cloud-ch6-s3-1-p1",
              label: "3.1.1",
              title: "6 Lợi ích chiến lược khi ứng dụng IDaaS trong doanh nghiệp",
              content: [
                {
                  type: "paragraph",
                  text: "1. Cost savings: Giảm mạnh chi phí đầu tư hạ tầng máy chủ ban đầu (CAPEX) và chi phí bảo trì, nâng cấp phần mềm bản quyền hàng năm."
                },
                {
                  type: "paragraph",
                  text: "2. Scalability: Khả năng co giãn linh hoạt, dễ dàng mở rộng từ vài chục nhân viên lên hàng trăm ngàn người dùng mà không cần thay đổi phần cứng."
                },
                {
                  type: "paragraph",
                  text: "3. Enhanced security: Bảo mật nâng cao, giảm thiểu nguy cơ bị tấn công đánh cắp tài khoản nhờ tích hợp MFA, Passkey và trí tuệ nhân tạo phát hiện bất thường."
                },
                {
                  type: "paragraph",
                  text: "4. Effective access management: Quản lý tập trung trên một giao diện điều khiển duy nhất, hỗ trợ giám sát và xuất báo cáo kiểm toán (Audit logs) tức thì."
                },
                {
                  type: "paragraph",
                  text: "5. Improve user experience: Cơ chế Đăng nhập một lần (SSO) đơn giản hóa thao tác đăng nhập, xóa bỏ gánh nặng ghi nhớ nhiều mật khẩu."
                },
                {
                  type: "paragraph",
                  text: "6. Compliance: Hỗ trợ tuân thủ các quy định bảo vệ dữ liệu pháp lý (ISO 27001, GDPR, HIPAA) nhờ hệ thống luôn được nhà cung cấp cập nhật liên tục."
                }
              ]
            },
            {
              id: "cloud-ch6-s3-1-p2",
              label: "3.1.2",
              title: "5 Thách thức thực tế & Bài toán đánh đổi cốt lõi",
              content: [
                {
                  type: "paragraph",
                  text: "Song hành với lợi ích, doanh nghiệp phải đối mặt với 5 thách thức lớn: (1) Data security risks (Rủi ro bảo mật dữ liệu tập trung); (2) Availability & dependency on supplier (Phụ thuộc vào nhà cung cấp, nguy cơ gián đoạn dịch vụ khi nhà mạng gặp sự cố); (3) Integration with existing systems (Khó khăn tương thích và chuyển đổi các ứng dụng cũ Legacy); (4) Compliance with regulations (Các quy định khắt khe về bảo vệ dữ liệu cá nhân theo lãnh thổ); (5) Cost (Chi phí triển khai ban đầu, đào tạo và phí thuê bao định kỳ)."
                },
                {
                  type: "idaas-benefits-challenges-matrix"
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "Khẩu quyết ghi nhớ cốt lõi Mục III",
                  text: "Cần nhớ: IDaaS đem lại nhiều lợi ích (6 lợi ích), nhưng cái giá đánh đổi lớn nhất là PHỤ THUỘC VÀO NHÀ CUNG CẤP và RỦI RO BẢO MẬT TẬP TRUNG."
                },
                {
                  type: "micro-quiz",
                  question: "Theo bài giảng chính thức, nguy cơ lớn nhất mà doanh nghiệp phải chấp nhận đánh đổi khi chuyển toàn bộ hệ thống quản lý danh tính lên dịch vụ IDaaS là gì?",
                  options: [
                    "Phụ thuộc chặt chẽ vào nhà cung cấp (Vendor dependency) và rủi ro bảo mật tập trung",
                    "Hoàn toàn không thể tích hợp được cơ chế xác thực đa yếu tố (MFA)",
                    "Người dùng bắt buộc phải tạo nhiều mật khẩu khác nhau cho từng ứng dụng",
                    "Tổ chức bị mất khả năng mở rộng số lượng người dùng khi doanh nghiệp tăng trưởng"
                  ],
                  answerIndex: 0,
                  explanation: "Khi sử dụng IDaaS, toàn bộ dữ liệu danh tính và cổng đăng nhập của doanh nghiệp phụ thuộc vào CSP. Nếu nhà cung cấp gặp sự cố ngừng hoạt động (Downtime) hoặc bị tin tặc tấn công, toàn bộ hoạt động của doanh nghiệp có thể bị tê liệt.",
                  hint: "Từ khóa khẩu quyết bài học: 'Phụ thuộc nhà cung cấp và rủi ro bảo mật tập trung'."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC IV: FEDERATED IDENTITY MANAGEMENT (FIDM)
       ============================ */
    {
      id: "cloud-ch6-s4",
      roman: "IV",
      title: "Federated Identity Management (FIDM - Quản lý Danh tính Liên minh)",
      subsections: [
        {
          id: "cloud-ch6-s4-1-fidm-core",
          number: "4.1",
          title: "Khái niệm & 3 Thành phần chính của FIDM",
          parts: [
            {
              id: "cloud-ch6-s4-1-p1",
              label: "4.1.1",
              title: "Khái niệm Federated Identity Management (FIDM)",
              content: [
                {
                  type: "paragraph",
                  text: "Federated Identity Management (FIDM) là hệ thống quản lý danh tính liên minh cho phép người dùng sử dụng ĐÚNG 1 DANH TÍNH DUY NHẤT để truy cập an toàn vào NHIỀU HỆ THỐNG VÀ ỨNG DỤNG KHÁC NHAU thuộc các tổ chức độc lập."
                },
                {
                  type: "paragraph",
                  text: "Mục tiêu cốt lõi của FIDM là: Gia tăng sự tiện lợi tối đa cho người dùng kết hợp với nâng cao tính bảo mật khi truy cập đa dịch vụ xuyên biên giới tổ chức."
                },
                {
                  type: "highlight",
                  text: "3 Thành phần bắt buộc của FIDM: (1) IdP (Identity Provider) - Bên xác thực danh tính và phát hành Token; (2) SP (Service Provider) - Bên cung cấp dịch vụ, chấp nhận và tin tưởng Token từ IdP để cấp quyền; (3) Token - Chứng chỉ số do IdP cấp để xác minh danh tính với SP."
                }
              ]
            },
            {
              id: "cloud-ch6-s4-1-p2",
              label: "4.1.2",
              title: "Quy trình hoạt động 4 bước kinh điển của FIDM",
              content: [
                {
                  type: "paragraph",
                  text: "Quy trình xác thực và ủy quyền trong liên minh danh tính FIDM diễn ra qua 4 bước tuần tự: (1) Bước 1: Xác thực user tại IdP; (2) Bước 2: IdP phát hành (Issue) authentication token có chữ ký số; (3) Bước 3: Người dùng chuyển hướng mang Token truy cập dịch vụ tại SP; (4) Bước 4: SP xác minh (Verify) tính toàn vẹn của Token và cấp quyền truy cập."
                },
                {
                  type: "fidm-token-flow-simulator"
                },
                {
                  type: "callout",
                  variant: "success",
                  title: "Khẩu quyết vàng thi cử Mục IV",
                  text: "Cần nhớ: FIDM = IdP phát token ➔ SP xác minh token (Người dùng truy cập ứng dụng mượt mà không cần đăng nhập lại)."
                },
                {
                  type: "micro-quiz",
                  question: "Trong kiến trúc Federated Identity Management (FIDM), thực thể nào chịu trách nhiệm trực tiếp xác minh danh tính người dùng và phát hành Authentication Token?",
                  options: [
                    "Identity Provider (IdP)",
                    "Service Provider (SP)",
                    "Application Gateway (AG)",
                    "End User Device (Thiết bị đầu cuối)"
                  ],
                  answerIndex: 0,
                  explanation: "Identity Provider (IdP) là bên nắm giữ danh bạ tài khoản, chịu trách nhiệm trực tiếp xác minh người dùng (nhập mật khẩu, quét vân tay) và ký phát hành Authentication Token để gửi sang cho Service Provider (SP).",
                  hint: "Từ khóa: 'Phát hành token và xác thực danh tính' ➔ IdP (Identity Provider)."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC V: SINGLE SIGN-ON (SSO)
       ============================ */
    {
      id: "cloud-ch6-s5",
      roman: "V",
      title: "Single Sign-On (SSO) & Cơ chế Đăng nhập một lần",
      subsections: [
        {
          id: "cloud-ch6-s5-1-sso-core",
          number: "5.1",
          title: "Khái niệm, quy trình 4 bước, lợi ích & thách thức của SSO",
          parts: [
            {
              id: "cloud-ch6-s5-1-p1",
              label: "5.1.1",
              title: "Khái niệm SSO, mục tiêu cốt lõi & cơ chế hoạt động",
              content: [
                {
                  type: "paragraph",
                  text: "Single Sign-On (SSO) là phương thức kiểm soát truy cập cho phép người dùng đăng nhập 1 lần duy nhất bằng 1 bộ thông tin danh tính (Username/Password) để truy cập nhiều ứng dụng và hệ thống độc lập mà không cần phải xác thực lại."
                },
                {
                  type: "paragraph",
                  text: "Mục tiêu cốt lõi của SSO: (1) Đơn giản hóa quá trình đăng nhập cho người dùng cuối; (2) Tăng năng suất làm việc và trải nghiệm người dùng; (3) Giảm thiểu tải cho đội ngũ hỗ trợ CNTT trong việc xử lý yêu cầu quên mật khẩu."
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "Khẩu quyết cốt tử Mục V",
                  text: "Cần nhớ: SSO tiện lợi nhưng rủi ro dây chuyền nếu tài khoản bị chiếm đoạt (Single Point of Failure - Điểm lỗi đơn lẻ)."
                }
              ]
            },
            {
              id: "cloud-ch6-s5-1-p2",
              label: "5.1.2",
              title: "Quy trình xác thực 4 bước, 4 Lợi ích & 3 Thách thức của SSO",
              content: [
                {
                  type: "paragraph",
                  text: "Quy trình xác thực SSO tiêu chuẩn gồm 4 bước tuần tự: (1) Bước 1: Login vào IdP (Nhập tên người dùng và mật khẩu tại cổng xác thực tập trung); (2) Bước 2: IdP xác thực & issue token (Kiểm tra hợp lệ và cấp Token có chữ ký số); (3) Bước 3: Gửi token đến SP (Trình duyệt chuyển hướng gửi Token sang ứng dụng dịch vụ); (4) Bước 4: SP verify token & cấp quyền truy cập tài nguyên."
                },
                {
                  type: "paragraph",
                  text: "4 Lợi ích vượt trội: (1) Đơn giản hóa quản lý mật khẩu; (2) Cải thiện trải nghiệm người dùng; (3) Tăng cường bảo mật (kết hợp MFA trung tâm); (4) Quản lý tập trung quyền hạn."
                },
                {
                  type: "paragraph",
                  text: "3 Thách thức lớn: (1) Security: Rủi ro Single Point of Failure (mất tài khoản SSO đồng nghĩa mất quyền truy cập vào tất cả ứng dụng); (2) Compatibility: Khó khăn trong việc tương thích với các ứng dụng cũ; (3) Complexity: Triển khai và cấu hình liên minh phức tạp."
                },
                {
                  type: "sso-domino-simulator"
                },
                {
                  type: "micro-quiz",
                  question: "Thách thức an ninh lớn nhất (điểm yếu chí tử) của mô hình Single Sign-On (SSO) được nhấn mạnh trong giáo trình là gì?",
                  options: [
                    "Hiện tượng Single Point of Failure (Nếu tài khoản SSO bị lộ, toàn bộ ứng dụng liên kết đều bị chiếm đoạt)",
                    "Người dùng buộc phải ghi nhớ quá nhiều mật khẩu phức tạp cho từng ứng dụng độc lập",
                    "Hệ thống không thể tích hợp được với các giao thức xác thực hiện đại như SAML hay OIDC",
                    "Tốn kém quá nhiều băng thông mạng Internet khi truyền tải mật khẩu thô giữa các máy chủ"
                  ],
                  answerIndex: 0,
                  explanation: "Bởi vì SSO tập trung hóa toàn bộ quyền đăng nhập vào 1 điểm duy nhất, nếu tài khoản SSO của người dùng bị lộ, tin tặc sẽ lập tức có chìa khóa vạn năng truy cập vào tất cả các ứng dụng liên kết (Single Point of Failure / Hiệu ứng Domino). Để khắc phục, bắt buộc phải bật xác thực đa yếu tố thích ứng (Adaptive MFA).",
                  hint: "Từ khóa: 'Single Point of Failure' - Một mắt xích gãy làm sụp đổ toàn chuỗi an ninh."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VI: CẤP PHÁT TÀI KHOẢN & OPENID
       ============================ */
    {
      id: "cloud-ch6-s6",
      roman: "VI",
      title: "Cấp phát tài khoản (Provisioning) & Chuẩn mở OpenID",
      subsections: [
        {
          id: "cloud-ch6-s6-1-provisioning-openid",
          number: "6.1",
          title: "Vòng đời cấp phát tài khoản & Giao thức xác thực OpenID",
          parts: [
            {
              id: "cloud-ch6-s6-1-p1",
              label: "6.1.1",
              title: "Cấp phát tài khoản (Provisioning of Accounts) & Vòng đời 4 bước",
              content: [
                {
                  type: "paragraph",
                  text: "Provisioning of Accounts là quá trình tạo, quản lý và duy trì tài khoản người dùng trên các hệ thống đám mây. Mục tiêu cốt lõi là đảm bảo mỗi người dùng có đúng quyền truy cập thích hợp vào tài nguyên công việc."
                },
                {
                  type: "paragraph",
                  text: "Vòng đời cấp phát tài khoản gồm 4 bước bắt buộc: (1) Bước 1: Create account (Khởi tạo tài khoản mới từ danh bạ nhân sự HR); (2) Bước 2: Grant access (Cấp quyền hạn và phân vai trò RBAC); (3) Bước 3: Account management (Duy trì, cập nhật khi thuyên chuyển công tác); (4) Bước 4: Disable/Delete account (Khóa hoặc xóa bỏ tài khoản tức thì khi nhân viên thôi việc)."
                },
                {
                  type: "highlight",
                  text: "Deprovisioning (Bước 4) là chốt chặn an ninh tối quan trọng nhằm loại bỏ 'tài khoản ma' (Orphaned Accounts), ngăn chặn nguy cơ nhân viên cũ tiếp tục truy cập dữ liệu nhạy cảm của doanh nghiệp."
                }
              ]
            },
            {
              id: "cloud-ch6-s6-1-p2",
              label: "6.1.2",
              title: "Giao thức mở OpenID & Đối chiếu cặp thuật ngữ OP / RP",
              content: [
                {
                  type: "paragraph",
                  text: "OpenID là một giao thức mở phi tập trung, cho phép người dùng sử dụng 1 tài khoản OpenID duy nhất để đăng nhập vào nhiều website khác nhau trên Internet mà không phải đăng ký tài khoản mới."
                },
                {
                  type: "paragraph",
                  text: "Quy trình xác thực OpenID diễn ra qua 5 bước tuần tự: (1) Bước 1: User chọn OpenID Provider (OP); (2) Bước 2: OP xác thực danh tính người dùng; (3) Bước 3: OP phát hành (issue) token chứng thực; (4) Bước 4: User dùng token gửi sang Relying Party (RP); (5) Bước 5: RP xác minh token và cho phép user truy cập."
                },
                {
                  type: "callout",
                  variant: "danger",
                  title: "Khẩu quyết cốt tử thi cử Mục VI",
                  text: "Cần nhớ: OpenID giống FIDM nhưng dùng thuật ngữ riêng: OP (OpenID Provider) thay thế cho IdP và RP (Relying Party) thay thế cho SP."
                },
                {
                  type: "account-provisioning-openid-duel"
                },
                {
                  type: "micro-quiz",
                  question: "Trong kiến trúc giao thức OpenID, thuật ngữ nào sau đây đóng vai trò tương đương với Service Provider (SP) trong mô hình FIDM truyền thống?",
                  options: [
                    "Relying Party (RP)",
                    "OpenID Provider (OP)",
                    "Identity Broker (IB)",
                    "Access Gateway (AG)"
                  ],
                  answerIndex: 0,
                  explanation: "Trong giao thức OpenID, bên cung cấp dịch vụ/website mà người dùng muốn truy cập được gọi là Relying Party (RP - Bên tin cậy), tương đương hoàn toàn với Service Provider (SP) trong mô hình FIDM. Còn bên xác thực danh tính được gọi là OpenID Provider (OP), tương đương với Identity Provider (IdP).",
                  hint: "Khẩu quyết: 'OP thay cho IdP, còn RP thay cho SP'."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VII: QUẢN LÝ DANH TÍNH DI ĐỘNG & CÁC GIẢI PHÁP IDAAS
       ============================ */
    {
      id: "cloud-ch6-s7",
      roman: "VII",
      title: "Mobile ID Management & Khảo sát các giải pháp IDaaS",
      subsections: [
        {
          id: "cloud-ch6-s7-1-mobile-id",
          number: "7.1",
          title: "Quản lý danh tính di động (Mobile ID Management)",
          parts: [
            {
              id: "cloud-ch6-s7-1-p1",
              label: "7.1.1",
              title: "Định nghĩa, 4 tính năng & quy trình 4 bước quản trị Mobile ID",
              content: [
                {
                  type: "paragraph",
                  text: "Mobile ID Management là giải pháp quản lý danh tính và quyền truy cập từ các thiết bị di động (smartphone, máy tính bảng) vào các ứng dụng và dữ liệu của tổ chức."
                },
                {
                  type: "paragraph",
                  text: "4 Tính năng cốt lõi của Mobile ID: (1) Multi-Factor Authentication (MFA trên di động); (2) Mobile Device Management (MDM - Quản lý thiết bị); (3) Mobile Application Management (MAM - Quản lý ứng dụng); (4) Contextual access control (Kiểm soát truy cập dựa trên ngữ cảnh thiết bị, vị trí IP)."
                },
                {
                  type: "paragraph",
                  text: "Quy trình quản trị di động 4 bước: (1) Đăng ký & xác thực thiết bị ➔ (2) Cấu hình & quản lý thiết bị ➔ (3) Quản lý ứng dụng mobile ➔ (4) Theo dõi & giám sát."
                },
                {
                  type: "mobile-id-management-shield"
                },
                {
                  type: "micro-quiz",
                  question: "Trong bối cảnh nhân viên sử dụng thiết bị cá nhân để làm việc (BYOD), giải pháp nào cho phép công ty mã hóa và cô lập dữ liệu doanh nghiệp mà KHÔNG xâm phạm vào ảnh hay ứng dụng cá nhân của nhân viên?",
                  options: [
                    "Mobile Application Management (MAM)",
                    "Mobile Device Management (MDM)",
                    "Full Disk Encryption (FDE)",
                    "Hardware Security Module (HSM)"
                  ],
                  answerIndex: 0,
                  explanation: "MAM (Mobile Application Management) hoạt động theo cơ chế Containerization (cô lập ứng dụng), chỉ quản lý và áp đặt chính sách bảo mật lên các app công ty (như Outlook, Teams) mà không can thiệp vào quyền riêng tư cá nhân của người dùng, rất lý tưởng cho mô hình BYOD.",
                  hint: "Từ khóa: 'Quản lý ứng dụng công ty mà không xâm phạm quyền riêng tư máy' ➔ MAM."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch6-s7-2-idaas-vendors",
          number: "7.2",
          title: "Khảo sát 4 giải pháp IDaaS & Quy trình triển khai 5 bước",
          parts: [
            {
              id: "cloud-ch6-s7-2-p1",
              label: "7.2.1",
              title: "Bộ tứ giải pháp Ping Identity, SinglePoint, Symplified, OpenSaaS",
              content: [
                {
                  type: "paragraph",
                  text: "Giáo trình khảo sát 4 giải pháp IDaaS tiêu biểu: (1) Ping Identity (Ông lớn enterprise, chuẩn liên minh FIDM toàn cầu); (2) SinglePoint (Giao diện đơn giản, triển khai nhanh); (3) Symplified (Tiên phong đám mây & Reverse Proxy bảo vệ web app cũ); (4) OpenSaaS (Nền tảng mã nguồn mở duy nhất)."
                },
                {
                  type: "paragraph",
                  text: "Chi tiết kiến trúc Ping Identity bao quát 4 trụ cột: Authentication (MFA, biometrics), Authorization (RBAC, ABAC, Dynamic), Account Management (Vòng đời, đồng bộ danh bạ), Audit (Ghi log kiểm toán, cảnh báo real-time)."
                },
                {
                  type: "paragraph",
                  text: "Quy trình triển khai IDaaS 5 bước tiêu chuẩn công nghiệp: (1) Bước 1: Khảo sát & phân tích yêu cầu ➔ (2) Bước 2: Cài đặt & cấu hình ➔ (3) Bước 3: Tích hợp ứng dụng ➔ (4) Bước 4: Đào tạo người dùng & admin ➔ (5) Bước 5: Theo dõi & tối ưu hóa."
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Khẩu quyết vàng thi cử Mục VII",
                  text: "Cần nhớ: Tất cả các giải pháp IDaaS đều xoay quanh bộ khung: SSO + MFA + Access Management + Audit. OpenSaaS là đại diện duy nhất mã nguồn mở (Open-source)."
                },
                {
                  type: "idaas-quad-vendor-battlefield"
                },
                {
                  type: "micro-quiz",
                  question: "Trong 4 giải pháp IDaaS được nêu trong giáo trình (Ping Identity, SinglePoint, Symplified, OpenSaaS), giải pháp nào có đặc thù là nền tảng mã nguồn mở (Open-source) giúp doanh nghiệp tránh hoàn toàn Vendor Lock-in?",
                  options: [
                    "OpenSaaS",
                    "Ping Identity",
                    "SinglePoint",
                    "Symplified"
                  ],
                  answerIndex: 0,
                  explanation: "OpenSaaS là giải pháp duy nhất trong danh sách được phát triển dưới dạng mã nguồn mở (Open-source), cho phép các tổ chức tự chủ mã nguồn, không mất phí bản quyền và hoàn toàn tránh được rủi ro bị phụ thuộc nhà cung cấp độc quyền (Vendor Lock-in).",
                  hint: "Từ khóa: 'Mã nguồn mở (Open-source)' ➔ OpenSaaS."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VIII: TỔNG KẾT TOÀN CHƯƠNG & MA TRẬN TRI THỨC
       ============================ */
    {
      id: "cloud-ch6-s8",
      roman: "VIII",
      title: "Tổng kết nhanh toàn chương & Ma trận tri thức thi cử",
      subsections: [
        {
          id: "cloud-ch6-s8-1-summary",
          number: "8.1",
          title: "Hệ thống hóa 8 trụ cột tri thức cốt tử của Chương 6",
          parts: [
            {
              id: "cloud-ch6-s8-1-p1",
              label: "8.1.1",
              title: "Tổng quan các khái niệm cốt lõi & Cảnh báo bẫy điểm liệt",
              content: [
                {
                  type: "highlight",
                  text: "Toàn bộ Chương 6 gói gọn trong 8 trụ cột: (1) IDaaS & Bộ ba AAA (Authentication, Authorization, Account Management); (2) Cán cân 6 Lợi ích vs 5 Thách thức; (3) Liên minh FIDM (IdP phát Token, SP xác minh Token); (4) Single Sign-On SSO (Đăng nhập 1 lần, điểm lỗi đơn lẻ SPOF); (5) Cấp phát tài khoản (Vòng đời 4 bước, SCIM); (6) Chuẩn mở OpenID (OP thay IdP, RP thay SP); (7) Mobile ID (MFA, MDM, MAM); (8) Bộ tứ giải pháp (Ping, SinglePoint, Symplified, OpenSaaS) & Khung chung (SSO + MFA + Access Mgmt + Audit)."
                },
                {
                  type: "chapter6-master-key-terms-matrix"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

/* ============================================================
   TỪ ĐIỂN THUẬT NGỮ CHUYÊN SÂU CHƯƠNG 6 (TOÀN BÀI - 26 TERMS)
   ============================================================ */
export const cloudChapter6Glossary = [
  {
    id: "g6-idaas",
    termVi: "Quản Lý Danh Tính Như Một Dịch Vụ",
    termEn: "Identity as a Service",
    abbreviation: "IDaaS",
    definition: "Mô hình dịch vụ điện toán đám mây cung cấp các giải pháp quản lý danh tính và quyền truy cập (IAM) được lưu trữ và vận hành hoàn toàn trên cloud.",
    subsectionId: "cloud-ch6-s2-1-definition"
  },
  {
    id: "g6-iam",
    termVi: "Quản Lý Danh Tính & Truy Cập",
    termEn: "Identity and Access Management",
    abbreviation: "IAM",
    definition: "Khuôn khổ chính sách và công nghệ đảm bảo đúng người dùng có quyền truy cập thích hợp vào đúng tài nguyên công nghệ của tổ chức.",
    subsectionId: "cloud-ch6-s2-1-definition"
  },
  {
    id: "g6-authentication",
    termVi: "Xác Thực Danh Tính",
    termEn: "Authentication",
    abbreviation: "AuthN",
    definition: "Quá trình kiểm tra và xác minh xem người dùng có thực sự đúng là danh tính mà họ tự khai báo hay không (Bạn là ai?).",
    subsectionId: "cloud-ch6-s2-1-definition"
  },
  {
    id: "g6-authorization",
    termVi: "Phân Quyền Truy Cập",
    termEn: "Authorization",
    abbreviation: "AuthZ",
    definition: "Quá trình xác định các quyền hạn và hành động cụ thể mà một danh tính đã được xác thực được phép thực hiện trên tài nguyên (Bạn được làm gì?).",
    subsectionId: "cloud-ch6-s2-1-definition"
  },
  {
    id: "g6-account-management",
    termVi: "Quản Lý Tài Khoản",
    termEn: "Account Management",
    abbreviation: "Account Mgmt",
    definition: "Quá trình quản trị toàn bộ vòng đời của tài khoản người dùng từ lúc khởi tạo, cập nhật quyền hạn cho đến khi thu hồi hoặc xóa bỏ.",
    subsectionId: "cloud-ch6-s2-1-definition"
  },
  {
    id: "g6-triple-a",
    termVi: "Bộ Ba Chức Năng AAA",
    termEn: "Triple-A Functions",
    abbreviation: "AAA",
    definition: "Ba chức năng cốt lõi cấu thành nên IDaaS theo chuẩn giáo trình: Authentication (Xác thực) - Authorization (Phân quyền) - Account Management (Quản lý tài khoản).",
    subsectionId: "cloud-ch6-s2-1-definition"
  },
  {
    id: "g6-sso",
    termVi: "Đăng Nhập Một Lần",
    termEn: "Single Sign-On",
    abbreviation: "SSO",
    definition: "Phương thức xác thực cho phép người dùng đăng nhập 1 lần duy nhất bằng 1 bộ thông tin đăng nhập để truy cập vào nhiều ứng dụng và dịch vụ khác nhau.",
    subsectionId: "cloud-ch6-s5-1-sso-core"
  },
  {
    id: "g6-mfa",
    termVi: "Xác Thực Đa Yếu Tố",
    termEn: "Multi-Factor Authentication",
    abbreviation: "MFA",
    definition: "Cơ chế bảo mật yêu cầu người dùng cung cấp từ hai yếu tố xác thực độc lập trở lên (Mật khẩu, OTP, Sinh trắc học) trước khi cấp quyền truy cập.",
    subsectionId: "cloud-ch6-s3-1-benefits-challenges"
  },
  {
    id: "g6-provisioning",
    termVi: "Cấp Phát Tài Khoản Tự Động",
    termEn: "User Provisioning",
    abbreviation: "Provisioning",
    definition: "Quá trình tự động tạo mới tài khoản, gán quyền hạn và cấp phát tài nguyên cho nhân viên mới gia nhập tổ chức trên toàn bộ các ứng dụng liên kết.",
    subsectionId: "cloud-ch6-s6-1-provisioning-openid"
  },
  {
    id: "g6-deprovisioning",
    termVi: "Thu Hồi Tài Khoản Tức Thì",
    termEn: "User Deprovisioning / Offboarding",
    abbreviation: "Deprovisioning",
    definition: "Quá trình tự động vô hiệu hóa và thu hồi ngay lập tức mọi quyền truy cập của nhân viên khi họ rời khỏi công ty, ngăn chặn rò rỉ dữ liệu.",
    subsectionId: "cloud-ch6-s6-1-provisioning-openid"
  },
  {
    id: "g6-fidm",
    termVi: "Quản Lý Danh Tính Liên Minh",
    termEn: "Federated Identity Management",
    abbreviation: "FIDM",
    definition: "Hệ thống liên kết cho phép người dùng dùng 1 danh tính duy nhất để truy cập xuyên biên giới vào nhiều hệ thống của các tổ chức đối tác khác nhau.",
    subsectionId: "cloud-ch6-s4-1-fidm-core"
  },
  {
    id: "g6-idp",
    termVi: "Bên Cung Cấp Danh Tính",
    termEn: "Identity Provider",
    abbreviation: "IdP",
    definition: "Hệ thống chịu trách nhiệm quản lý thông tin danh bạ người dùng, xác thực người dùng và phát hành các Authentication Token tin cậy.",
    subsectionId: "cloud-ch6-s4-1-fidm-core"
  },
  {
    id: "g6-sp",
    termVi: "Bên Cung Cấp Dịch Vụ",
    termEn: "Service Provider",
    abbreviation: "SP",
    definition: "Ứng dụng hoặc dịch vụ cung cấp tài nguyên cho người dùng, chấp nhận và xác minh Token từ IdP để cấp quyền mà không cần giữ mật khẩu của user.",
    subsectionId: "cloud-ch6-s4-1-fidm-core"
  },
  {
    id: "g6-token",
    termVi: "Chứng Chỉ Xác Thực Điện Tử",
    termEn: "Authentication Token",
    abbreviation: "Auth Token",
    definition: "Chứng chỉ số được mã hóa và ký điện tử bởi IdP chứa thông tin xác nhận danh tính người dùng để Service Provider kiểm tra tính hợp lệ.",
    subsectionId: "cloud-ch6-s4-1-fidm-core"
  },
  {
    id: "g6-spof",
    termVi: "Điểm Lỗi Đơn Lẻ",
    termEn: "Single Point of Failure",
    abbreviation: "SPOF",
    definition: "Một thành phần hoặc mắt xích duy nhất trong hệ thống mà nếu nó gặp sự cố hoặc bị tấn công thì toàn bộ hệ thống liên kết sẽ ngưng trệ hoặc sụp đổ.",
    subsectionId: "cloud-ch6-s5-1-sso-core"
  },
  {
    id: "g6-adaptive-mfa",
    termVi: "Xác Thực Đa Yếu Tố Thích Ứng",
    termEn: "Adaptive / Contextual MFA",
    abbreviation: "Adaptive MFA",
    definition: "Cơ chế bảo mật tự động đánh giá rủi ro theo ngữ cảnh (vị trí IP, thiết bị lạ, thời gian bất thường) để quyết định có yêu cầu thêm lớp xác thực phụ hay không.",
    subsectionId: "cloud-ch6-s5-1-sso-core"
  },
  {
    id: "g6-scim",
    termVi: "Chuẩn Quản Lý Danh Tính Xuyên Miền",
    termEn: "System for Cross-domain Identity Management",
    abbreviation: "SCIM",
    definition: "Giao thức mở dựa trên HTTP và JSON được thiết kế để tự động hóa việc đồng bộ và cấp phát tài khoản người dùng giữa các hệ thống đám mây.",
    subsectionId: "cloud-ch6-s6-1-provisioning-openid"
  },
  {
    id: "g6-openid",
    termVi: "Chuẩn Xác Thực Mở OpenID",
    termEn: "OpenID Standard Protocol",
    abbreviation: "OpenID",
    definition: "Giao thức xác thực mở phi tập trung cho phép người dùng sử dụng một tài khoản duy nhất để đăng nhập vào bất kỳ trang web nào hỗ trợ OpenID.",
    subsectionId: "cloud-ch6-s6-1-provisioning-openid"
  },
  {
    id: "g6-op",
    termVi: "Bên Cung Cấp Danh Tính OpenID",
    termEn: "OpenID Provider",
    abbreviation: "OP",
    definition: "Thực thể chịu trách nhiệm xác thực người dùng và phát hành token trong mô hình OpenID, tương đương với Identity Provider (IdP) trong FIDM.",
    subsectionId: "cloud-ch6-s6-1-provisioning-openid"
  },
  {
    id: "g6-rp",
    termVi: "Bên Tin Cậy OpenID",
    termEn: "Relying Party",
    abbreviation: "RP",
    definition: "Ứng dụng hoặc website dựa vào OpenID Provider để xác thực danh tính người dùng, tương đương với Service Provider (SP) trong FIDM.",
    subsectionId: "cloud-ch6-s6-1-provisioning-openid"
  },
  {
    id: "g6-mobile-id",
    termVi: "Quản Lý Danh Tính Di Động",
    termEn: "Mobile Identity Management",
    abbreviation: "Mobile ID",
    definition: "Tập hợp các chính sách và công cụ quản lý danh tính, xác thực và kiểm soát quyền truy cập từ các thiết bị thông minh (smartphone, tablet) vào mạng doanh nghiệp.",
    subsectionId: "cloud-ch6-s7-1-mobile-id"
  },
  {
    id: "g6-mdm",
    termVi: "Quản Lý Thiết Bị Di Động",
    termEn: "Mobile Device Management",
    abbreviation: "MDM",
    definition: "Phần mềm bảo mật cho phép quản trị viên IT giám sát, quản lý và áp đặt chính sách an ninh lên toàn bộ phần cứng và hệ điều hành của thiết bị di động.",
    subsectionId: "cloud-ch6-s7-1-mobile-id"
  },
  {
    id: "g6-mam",
    termVi: "Quản Lý Ứng Dụng Di Động",
    termEn: "Mobile Application Management",
    abbreviation: "MAM",
    definition: "Giải pháp bảo mật chỉ tập trung quản lý, kiểm soát và mã hóa các ứng dụng doanh nghiệp (Containerization) mà không can thiệp vào dữ liệu cá nhân của người dùng.",
    subsectionId: "cloud-ch6-s7-1-mobile-id"
  },
  {
    id: "g6-remote-wipe",
    termVi: "Xóa Dữ Liệu Từ Xa",
    termEn: "Remote Wipe",
    abbreviation: "Remote Wipe",
    definition: "Tính năng an ninh cho phép người quản trị từ xa xóa sạch dữ liệu công ty hoặc toàn bộ thiết bị khi bị mất cắp hoặc nhân viên nghỉ việc.",
    subsectionId: "cloud-ch6-s7-1-mobile-id"
  },
  {
    id: "g6-ping-identity",
    termVi: "Nền Tảng Ping Identity",
    termEn: "Ping Identity Platform",
    abbreviation: "Ping Identity",
    definition: "Giải pháp IDaaS thương mại quy mô lớn hàng đầu thế giới, cung cấp trọn vẹn bộ 4 trụ cột: SSO liên minh SAML/OIDC, PingID MFA, phân quyền động và giám sát API AI.",
    subsectionId: "cloud-ch6-s7-2-idaas-vendors"
  },
  {
    id: "g6-opensaas",
    termVi: "Nền Tảng IDaaS Mã Nguồn Mở OpenSaaS",
    termEn: "OpenSaaS Open-Source Platform",
    abbreviation: "OpenSaaS",
    definition: "Giải pháp quản lý danh tính mã nguồn mở miễn phí bản quyền, giúp các tổ chức toàn quyền tự chủ mã nguồn và tránh hoàn toàn nguy cơ Vendor Lock-in.",
    subsectionId: "cloud-ch6-s7-2-idaas-vendors"
  }
];

/* ============================================================
   BỘ FLASHCARDS CHUẨN THUẬT TOÁN SM-2 CHƯƠNG 6 (TOÀN BÀI - 20 THẺ)
   ============================================================ */
export const cloudChapter6Flashcards = [
  {
    id: "fc-c6-01",
    front: "Định nghĩa IDaaS là gì và ba chức năng cốt lõi (bộ ba AAA) gồm những gì?",
    back: "• IDaaS (Identity as a Service) là giải pháp quản lý danh tính và quyền truy cập (IAM) được cung cấp thông qua điện toán đám mây.\n• 3 Chức năng cốt lõi (AAA): (1) Authentication (Xác thực danh tính); (2) Authorization (Phân quyền truy cập); (3) Account Management (Quản lý vòng đời tài khoản).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s2-1-definition"
  },
  {
    id: "fc-c6-02",
    front: "Phân biệt sự khác nhau bản chất giữa Authentication (AuthN) và Authorization (AuthZ)?",
    back: "• Authentication (Xác thực): Trả lời câu hỏi 'Bạn là ai?' bằng cách kiểm chứng danh tính (Mật khẩu, OTP, Vân tay).\n• Authorization (Phân quyền): Trả lời câu hỏi 'Bạn được phép làm gì?' bằng cách cấp quyền truy cập tài nguyên dựa trên vai trò (RBAC) sau khi đã xác thực.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s2-1-definition"
  },
  {
    id: "fc-c6-03",
    front: "Vai trò của chức năng Account Management trong mô hình IDaaS là gì?",
    back: "• Quản lý toàn bộ vòng đời của tài khoản người dùng: tạo mới, cập nhật thông tin và phân quyền, xóa bỏ hoặc vô hiệu hóa.\n• Hai quy trình quan trọng nhất: User Provisioning (tự động cấp phát quyền cho người mới) và Deprovisioning (thu hồi tức thì quyền khi nghỉ việc).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s2-1-definition"
  },
  {
    id: "fc-c6-04",
    front: "Kể tên 6 lợi ích đột phá của dịch vụ IDaaS đối với các tổ chức và doanh nghiệp?",
    back: "1. Cost savings (Giảm chi phí hạ tầng & bảo trì)\n2. Scalability (Linh hoạt co giãn quy mô)\n3. Enhanced security (Bảo mật cao, giảm rủi ro tấn công)\n4. Effective access management (Quản lý tập trung, giám sát & báo cáo)\n5. Improve user experience (SSO đơn giản hóa đăng nhập)\n6. Compliance (Hỗ trợ tuân thủ quy định pháp lý)",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s3-1-benefits-challenges"
  },
  {
    id: "fc-c6-05",
    front: "Nêu 5 thách thức lớn của IDaaS và khẩu quyết đánh đổi cốt lõi cần nhớ trong bài thi?",
    back: "• 5 Thách thức: (1) Data security risks; (2) Availability & dependency on supplier; (3) Integration with existing systems; (4) Compliance with regulations; (5) Cost.\n• Khẩu quyết: Lợi ích nhiều (6) nhưng đánh đổi lớn nhất là PHỤ THUỘC NHÀ CUNG CẤP và RỦI RO BẢO MẬT TẬP TRUNG.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s3-1-benefits-challenges"
  },
  {
    id: "fc-c6-06",
    front: "Federated Identity Management (FIDM) là gì và mục tiêu cốt lõi của giải pháp này?",
    back: "• Định nghĩa: Hệ thống cho phép người dùng sử dụng ĐÚNG 1 DANH TÍNH DUY NHẤT để truy cập an toàn vào nhiều hệ thống và ứng dụng khác nhau của các tổ chức độc lập.\n• Mục tiêu: Tăng tính tiện lợi tối đa cho người dùng + Nâng cao tính bảo mật khi truy cập đa dịch vụ.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s4-1-fidm-core"
  },
  {
    id: "fc-c6-07",
    front: "Nêu vai trò của 3 thành phần chính trong mô hình liên minh danh tính FIDM: IdP, SP và Token?",
    back: "• IdP (Identity Provider): Xác thực danh tính người dùng và ký phát hành Authentication Token.\n• SP (Service Provider): Cung cấp dịch vụ, tin tưởng và xác minh Token từ IdP để cấp quyền truy cập.\n• Token: Chứng chỉ số có chữ ký điện tử do IdP cấp để người dùng chứng minh danh tính với SP.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s4-1-fidm-core"
  },
  {
    id: "fc-c6-08",
    front: "Trình bày 4 bước trong quy trình hoạt động kinh điển của Federated Identity Management (FIDM)?",
    back: "• Bước 1: Xác thực user tại IdP (User authentication).\n• Bước 2: IdP phát hành (Issue) authentication token có chữ ký số.\n• Bước 3: Người dùng chuyển hướng mang Token truy cập dịch vụ tại SP.\n• Bước 4: SP xác minh (Verify) tính toàn vẹn của Token và cấp quyền truy cập.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s4-1-fidm-core"
  },
  {
    id: "fc-c6-09",
    front: "Khẩu quyết thi cử cốt lõi của Mục IV (FIDM) cần nhớ là gì?",
    back: "Khẩu quyết: FIDM = IdP phát Token ➔ SP xác minh Token (Người dùng truy cập ứng dụng mượt mà không cần đăng nhập lại).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s4-1-fidm-core"
  },
  {
    id: "fc-c6-10",
    front: "Tại sao trong mô hình FIDM, người dùng không cần phải chia sẻ mật khẩu của mình cho Service Provider (SP)?",
    back: "Bởi vì người dùng chỉ xác thực trực tiếp với Identity Provider (IdP). IdP sau đó cấp một Token đã được ký số điện tử. SP chỉ cần dùng khóa công khai của IdP để kiểm tra chữ ký số trên Token là xác nhận được danh tính, do đó mật khẩu của người dùng không bao giờ bị lộ cho SP.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s4-1-fidm-core"
  },
  {
    id: "fc-c6-11",
    front: "Khái niệm Single Sign-On (SSO) là gì và mục tiêu cốt lõi của giải pháp này?",
    back: "• Định nghĩa: Phương thức xác thực cho phép người dùng đăng nhập 1 lần duy nhất để truy cập vào nhiều ứng dụng độc lập mà không cần phải đăng nhập lại.\n• Mục tiêu: Đơn giản hóa việc đăng nhập, nâng cao trải nghiệm người dùng (UX) và giảm tải công việc hỗ trợ quên mật khẩu cho bộ phận IT.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s5-1-sso-core"
  },
  {
    id: "fc-c6-12",
    front: "Trình bày 4 bước trong quy trình xác thực Single Sign-On (SSO) tiêu chuẩn?",
    back: "• Bước 1: Login vào IdP (Nhập tên đăng nhập & mật khẩu tại cổng tập trung).\n• Bước 2: IdP xác thực & issue token (Kiểm tra và phát hành Token có chữ ký số).\n• Bước 3: Gửi token đến SP (Trình duyệt chuyển tiếp Token sang ứng dụng dịch vụ).\n• Bước 4: SP verify token & cấp quyền truy cập tài nguyên.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s5-1-sso-core"
  },
  {
    id: "fc-c6-13",
    front: "Thách thức an ninh lớn nhất (Single Point of Failure) của SSO là gì và cách khắc phục?",
    back: "• Thách thức: Vì chỉ đăng nhập 1 lần nên nếu tài khoản SSO bị lộ mật khẩu, tin tặc sẽ lập tức có chìa khóa truy cập vào TẤT CẢ các ứng dụng liên kết (Hiệu ứng Domino).\n• Giải pháp: Bắt buộc áp dụng Xác thực đa yếu tố thích ứng (Adaptive MFA - yêu cầu OTP/Vân tay khi phát hiện ngữ cảnh lạ).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s5-1-sso-core"
  },
  {
    id: "fc-c6-14",
    front: "Provisioning of Accounts là gì và nêu 4 bước trong vòng đời cấp phát tài khoản?",
    back: "• Định nghĩa: Quá trình tạo, quản lý và duy trì tài khoản người dùng trên hệ thống đám mây nhằm đảm bảo đúng quyền truy cập.\n• 4 Bước vòng đời: (1) Create account (Tạo mới từ HR); (2) Grant access (Cấp quyền theo vai trò RBAC); (3) Account management (Cập nhật, duy trì); (4) Disable/Delete account (Khóa hoặc xóa ngay khi nhân viên thôi việc - Deprovisioning).",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s6-1-provisioning-openid"
  },
  {
    id: "fc-c6-15",
    front: "Giao thức OpenID là gì và nêu 5 bước trong quy trình xác thực OpenID?",
    back: "• Định nghĩa: Giao thức mở cho phép dùng 1 tài khoản duy nhất đăng nhập vào nhiều website khác nhau trên Internet.\n• 5 Bước: (1) User chọn OpenID Provider (OP) ➔ (2) OP xác thực người dùng ➔ (3) OP issue token ➔ (4) User gửi token sang Relying Party (RP) ➔ (5) RP xác minh và cấp quyền truy cập.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s6-1-provisioning-openid"
  },
  {
    id: "fc-c6-16",
    front: "Đối chiếu cặp thuật ngữ đặc thù trong giao thức OpenID với mô hình FIDM truyền thống?",
    back: "• OP (OpenID Provider) tương đương với IdP (Identity Provider) — Nơi xác thực và cấp token.\n• RP (Relying Party) tương đương với SP (Service Provider) — Nơi cung cấp dịch vụ/website mà user muốn truy cập.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s6-1-provisioning-openid"
  },
  {
    id: "fc-c6-17",
    front: "Kể tên 4 tính năng cốt lõi của Mobile ID Management được nhấn mạnh trong giáo trình?",
    back: "1. Multi-Factor Authentication (MFA di động: vân tay, FaceID, Push Notification)\n2. Mobile Device Management (MDM: quản lý cấp phần cứng/OS toàn thiết bị)\n3. Mobile Application Management (MAM: cô lập và bảo vệ ứng dụng công ty)\n4. Contextual access control (Kiểm soát truy cập dựa trên ngữ cảnh thiết bị, vị trí IP)",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s7-1-mobile-id"
  },
  {
    id: "fc-c6-18",
    front: "Phân biệt sự khác nhau giữa Mobile Device Management (MDM) và Mobile Application Management (MAM)?",
    back: "• MDM (Device): Quản lý toàn bộ thiết bị phần cứng (bắt buộc cài passcode máy, mã hóa ổ đĩa, kiểm tra jailbreak/root). Can thiệp sâu vào máy.\n• MAM (Application): Chỉ quản lý và mã hóa phân vùng chứa ứng dụng công ty (Outlook, Teams - Containerization), không can thiệp vào dữ liệu cá nhân (ảnh, tin nhắn riêng). Rất tối ưu cho BYOD.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s7-1-mobile-id"
  },
  {
    id: "fc-c6-19",
    front: "Kể tên 4 giải pháp IDaaS tiêu biểu trong giáo trình và chỉ ra giải pháp mã nguồn mở?",
    back: "• 4 Giải pháp: (1) Ping Identity; (2) SinglePoint; (3) Symplified; (4) OpenSaaS.\n• Giải pháp mã nguồn mở: OpenSaaS là đại diện DUY NHẤT có tính chất open-source, giúp tổ chức tự chủ mã nguồn và miễn phí bản quyền.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s7-2-idaas-vendors"
  },
  {
    id: "fc-c6-20",
    front: "Nêu bộ khung tính năng chung của mọi giải pháp IDaaS và 5 bước trong quy trình triển khai?",
    back: "• Bộ khung chung: SSO + MFA + Access Management + Audit.\n• 5 Bước triển khai: (1) Khảo sát & phân tích yêu cầu ➔ (2) Cài đặt & cấu hình ➔ (3) Tích hợp ứng dụng ➔ (4) Đào tạo người dùng & admin ➔ (5) Theo dõi & tối ưu hóa liên tục.",
    subjectId: "cloud-computing",
    chapterId: "cloud-ch6",
    subsectionId: "cloud-ch6-s7-2-idaas-vendors"
  }
];

