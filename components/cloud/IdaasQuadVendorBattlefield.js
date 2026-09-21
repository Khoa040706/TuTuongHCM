"use client";
import React, { useState } from "react";

export default function IdaasQuadVendorBattlefield() {
  const [activeTab, setActiveTab] = useState("battlefield"); // 'battlefield' | 'ping_deepdive' | 'deployment_pipeline'
  const [selectedVendor, setSelectedVendor] = useState("ping");
  const [deployStep, setDeployStep] = useState(1);

  const vendors = {
    ping: {
      id: "ping",
      name: "Ping Identity",
      tagline: "Ông Lớn Enterprise Identity & Chuẩn FIDM Toàn Cầu",
      badge: "Enterprise Leader",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      icon: "🛡️",
      type: "Thương mại (Enterprise Commercial)",
      coreCapabilities: {
        sso: "Hỗ trợ chuẩn liên minh toàn cầu SAML 2.0, WS-Federation, OpenID Connect.",
        mfa: "Tích hợp PingID (Push notification, QR code, FaceID, Vân tay FIDO2).",
        accessMgmt: "Dynamic Authorization, kết hợp sâu sắc RBAC và ABAC ngữ cảnh cao.",
        audit: "Ghi log chi tiết từng hành vi xác thực, cảnh báo xâm nhập thời gian thực."
      },
      strengths: [
        "Khả năng mở rộng siêu lớn cho hàng triệu người dùng doanh nghiệp và khách hàng (CIAM).",
        "Tương thích vượt trội với cả hạ tầng On-Premises (Active Directory) và Multi-Cloud.",
        "Tiên phong trong các chuẩn mở liên minh danh tính (Federated Identity)."
      ],
      examTip: "Trong đề thi, Ping Identity là ví dụ kinh điển nhất về giải pháp IDaaS toàn diện đầy đủ 4 trụ cột: AuthN, AuthZ, Account Mgmt và Audit."
    },
    singlepoint: {
      id: "singlepoint",
      name: "SinglePoint",
      tagline: "Đơn Giản Hóa Truy Cập & Quản Lý Tập Trung Tức Thì",
      badge: "Fast Onboarding",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      icon: "🎯",
      type: "Thương mại (Commercial Cloud Service)",
      coreCapabilities: {
        sso: "Cung cấp Single Sign-On dựa trên nền Web với giao diện tối giản cho nhân viên.",
        mfa: "Xác thực hai lớp cơ bản qua SMS OTP và ứng dụng Authenticator di động.",
        accessMgmt: "Quản lý quyền truy cập tập trung theo vai trò phòng ban (RBAC gọn nhẹ).",
        audit: "Báo cáo lịch sử đăng nhập định kỳ và nhật ký truy cập ứng dụng."
      },
      strengths: [
        "Triển khai cực kỳ nhanh chóng, không đòi hỏi cấu hình hạ tầng phức tạp.",
        "Chi phí bản quyền hợp lý, tối ưu cho doanh nghiệp quy mô vừa và nhỏ (SMEs).",
        "Giao diện người dùng trực quan, giảm thiểu thời gian đào tạo nhân viên."
      ],
      examTip: "SinglePoint chú trọng vào sự tiện lợi, triển khai nhanh và giải quyết bài toán quản trị tập trung mật khẩu."
    },
    symplified: {
      id: "symplified",
      name: "Symplified",
      tagline: "Tiên Phong IDaaS Đám Mây & Bảo Mật Ứng Dụng Web",
      badge: "Cloud Pioneer",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      icon: "⚡",
      type: "Thương mại (Cloud Security Pioneer)",
      coreCapabilities: {
        sso: "Reverse Proxy Architecture và SAML SSO cho ứng dụng SaaS nội bộ và đám mây.",
        mfa: "Xác thực thích ứng (Risk-based Adaptive Authentication).",
        accessMgmt: "Kiểm soát truy cập dựa trên chính sách chi tiết (Policy-based Access Control).",
        audit: "Giám sát phiên làm việc và kiểm toán tuân thủ bảo mật (Compliance Audit)."
      },
      strengths: [
        "Kiến trúc Proxy độc đáo cho phép bảo vệ cả các ứng dụng Web cũ (Legacy Apps) không hỗ trợ SAML.",
        "Khả năng kiểm soát chính sách truy cập chi tiết đến từng URL của ứng dụng.",
        "Một trong những nhà cung cấp đầu tiên định nghĩa thị trường IDaaS chuyên dụng."
      ],
      examTip: "Symplified nổi tiếng với kiến trúc bảo vệ kết hợp giữa đám mây và ứng dụng tại chỗ thông qua giải pháp Identity Bridge."
    },
    opensaas: {
      id: "opensaas",
      name: "OpenSaaS",
      tagline: "Nền Tảng Mã Nguồn Mở Tự Quản Trị Tuyệt Đối",
      badge: "Open-Source Standard",
      badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      icon: "🔓",
      type: "Mã Nguồn Mở (Open-Source IDaaS)",
      coreCapabilities: {
        sso: "Hỗ trợ các giao thức mở: OpenID, OAuth 2.0, SAML mở.",
        mfa: "Tích hợp thư viện xác thực đa yếu tố mã nguồn mở (TOTP, Google Authenticator).",
        accessMgmt: "Module phân quyền tùy biến linh hoạt bằng code theo nhu cầu tổ chức.",
        audit: "Xuất log hệ thống chuẩn Syslog/Elasticsearch để doanh nghiệp tự lưu trữ."
      },
      strengths: [
        "Mã nguồn mở: Không bị phụ thuộc vào một nhà cung cấp (Zero Vendor Lock-in).",
        "Tiết kiệm 100% chi phí bản quyền phần mềm (Free Licensing).",
        "Toàn quyền kiểm soát mã nguồn, tự do chỉnh sửa và tùy biến sâu theo hạ tầng bảo mật riêng."
      ],
      examTip: "Bẫy đề thi cực quan trọng: OpenSaaS là đại diện duy nhất MÃ NGUỒN MỞ trong 4 giải pháp giáo trình liệt kê. Thích hợp cho đơn vị muốn tự chủ dữ liệu danh tính."
    }
  };

  const deploymentSteps = [
    {
      step: 1,
      name: "1. Khảo Sát & Phân Tích Yêu Cầu (Survey & Assessment)",
      icon: "🔍",
      focus: "Xác định hiện trạng và nhu cầu tổ chức",
      details: [
        "Liệt kê toàn bộ ứng dụng đang dùng (Cloud SaaS, Web nội bộ, phần mềm kế toán cũ).",
        "Thống kê số lượng người dùng, phân loại nhóm quyền và rà soát nguồn danh bạ hiện có (Active Directory, LDAP, Google Workspace).",
        "Xác định các tiêu chuẩn tuân thủ bắt buộc (ISO 27001, GDPR, HIPAA)."
      ],
      warning: "Nếu bỏ qua bước khảo sát, việc tích hợp về sau sẽ dễ gặp xung đột cấu trúc dữ liệu người dùng."
    },
    {
      step: 2,
      name: "2. Cài Đặt & Cấu Hình Hệ Thống (Installation & Configuration)",
      icon: "⚙️",
      focus: "Thiết lập hạ tầng IDaaS và chính sách bảo mật cốt lõi",
      details: [
        "Khởi tạo tenant IDaaS trên đám mây hoặc triển khai cụm cổng kết nối (Identity Gateway/Bridge).",
        "Cấu hình các chính sách bảo mật bắt buộc: Độ dài mật khẩu, thời hạn hết phiên, quy tắc kích hoạt MFA thích ứng.",
        "Thiết lập kết nối an toàn với máy chủ quản lý danh bạ doanh nghiệp (Directory Sync)."
      ],
      warning: "Phải thử nghiệm cơ chế tự động đồng bộ (SCIM) trên môi trường Staging trước khi chạy thật."
    },
    {
      step: 3,
      name: "3. Tích Hợp Hệ Thống (Integration with Applications)",
      icon: "🔗",
      focus: "Đấu nối ứng dụng vào cổng SSO và phân quyền",
      details: [
        "Đăng ký các ứng dụng vào IDaaS qua giao thức SAML 2.0, OpenID Connect hoặc OAuth 2.0.",
        "Map (ánh xạ) các trường thuộc tính người dùng (Username, Email, Role, Department).",
        "Thực hiện kiểm thử luồng đăng nhập SSO và cơ chế thu hồi quyền tự động khi tài khoản bị khóa."
      ],
      warning: "Ưu tiên tích hợp trước các ứng dụng trọng yếu có đông người dùng như Email và Chat doanh nghiệp."
    },
    {
      step: 4,
      name: "4. Đào Tạo Người Dùng & Quản Trị Viên (Training & Onboarding)",
      icon: "🎓",
      focus: "Chuyển giao và hướng dẫn vận hành",
      details: [
        "Hướng dẫn nhân viên cách cài đặt ứng dụng MFA trên smartphone và cách sử dụng cổng đăng nhập 1 lần.",
        "Tập huấn đội ngũ Quản trị IT: Cách cấp phát tài khoản mới, xử lý sự cố kẹt phiên và đặt lại MFA.",
        "Ban hành cẩm nang ứng phó khi nhân viên bị mất điện thoại chứa ứng dụng xác thực."
      ],
      warning: "Trải nghiệm người dùng trong tuần đầu tiên quyết định sự thành bại của dự án IDaaS."
    },
    {
      step: 5,
      name: "5. Theo Dõi & Tối Ưu Hóa (Monitoring & Continuous Optimization)",
      icon: "📈",
      focus: "Giám sát nhật ký truy cập và tối ưu chính sách",
      details: [
        "Bật tính năng giám sát Real-time Audit Logs để phát hiện kịp thời các hành vi đăng nhập bất thường (khác vị trí địa lý, thời gian bất thường).",
        "Rà soát định kỳ các tài khoản rác (Orphaned Accounts) của nhân viên đã nghỉ việc.",
        "Tối ưu hóa quy tắc truy cập theo ngữ cảnh (Contextual Access) để cân bằng giữa bảo mật và trải nghiệm mượt mà."
      ],
      warning: "Bảo mật danh tính là một quá trình liên tục (Continuous Process), không phải là công việc cài đặt một lần rồi bỏ đó."
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-indigo-500/20 bg-[#0d111e] p-6 shadow-2xl backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400 font-bold text-sm">
              6.7
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Mục VII.2 &amp; VII.3 • Khảo Sát Giải Pháp &amp; Triển Khai Thực Tiễn
            </span>
          </div>
          <h3 className="mt-1 text-xl font-bold text-slate-100">
            Võ Đài 4 Giải Pháp IDaaS &amp; Quy Trình Triển Khai 5 Bước
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            So sánh thực chiến Ping Identity vs SinglePoint vs Symplified vs OpenSaaS theo bộ khung chuẩn: SSO + MFA + Access Management + Audit.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex rounded-xl bg-slate-900/80 p-1 border border-slate-800">
          <button
            onClick={() => setActiveTab("battlefield")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === "battlefield"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            ⚔️ 4 Giải Pháp IDaaS
          </button>
          <button
            onClick={() => setActiveTab("ping_deepdive")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === "ping_deepdive"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🛡️ Bóc Tách Ping Identity
          </button>
          <button
            onClick={() => setActiveTab("deployment_pipeline")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === "deployment_pipeline"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🚀 Quy Trình 5 Bước
          </button>
        </div>
      </div>

      {/* TAB 1: 4 VENDORS BATTLEFIELD */}
      {activeTab === "battlefield" && (
        <div className="mt-6 space-y-6">
          {/* Vendor Selector Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.values(vendors).map((v) => {
              const isSelected = selectedVendor === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setSelectedVendor(v.id)}
                  className={`flex flex-col items-start p-3.5 rounded-xl border transition-all text-left ${
                    isSelected
                      ? "border-indigo-500 bg-indigo-950/40 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/50"
                      : "border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-800/40"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-2xl">{v.icon}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${v.badgeColor}`}>
                      {v.badge}
                    </span>
                  </div>
                  <h4 className="mt-2 text-sm font-bold text-slate-100">{v.name}</h4>
                  <p className="mt-0.5 text-[11px] text-slate-400 line-clamp-1">{v.type}</p>
                </button>
              );
            })}
          </div>

          {/* Selected Vendor Spotlight */}
          {(() => {
            const v = vendors[selectedVendor];
            return (
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-xl border border-indigo-500/30">
                      {v.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-100 flex items-center gap-2">
                        {v.name}
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${v.badgeColor}`}>
                          {v.type}
                        </span>
                      </h4>
                      <p className="text-xs text-indigo-300">{v.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Core Framework: SSO + MFA + Access + Audit */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
                    <span>⚡</span> Đối Soát 4 Trụ Cột Chuẩn Giáo Trình: SSO • MFA • Access Management • Audit
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    <div className="rounded-lg bg-slate-950/70 p-3 border border-slate-800/80">
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
                        <span>🔑</span> 1. Single Sign-On (SSO)
                      </div>
                      <p className="mt-1 text-xs text-slate-300">{v.coreCapabilities.sso}</p>
                    </div>

                    <div className="rounded-lg bg-slate-950/70 p-3 border border-slate-800/80">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                        <span>🛡️</span> 2. Multi-Factor Authentication (MFA)
                      </div>
                      <p className="mt-1 text-xs text-slate-300">{v.coreCapabilities.mfa}</p>
                    </div>

                    <div className="rounded-lg bg-slate-950/70 p-3 border border-slate-800/80">
                      <div className="flex items-center gap-2 text-xs font-bold text-purple-400">
                        <span>👤</span> 3. Access Management (Phân Quyền)
                      </div>
                      <p className="mt-1 text-xs text-slate-300">{v.coreCapabilities.accessMgmt}</p>
                    </div>

                    <div className="rounded-lg bg-slate-950/70 p-3 border border-slate-800/80">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                        <span>📊</span> 4. Audit &amp; Logging (Kiểm Toán)
                      </div>
                      <p className="mt-1 text-xs text-slate-300">{v.coreCapabilities.audit}</p>
                    </div>
                  </div>
                </div>

                {/* Key Strengths */}
                <div className="rounded-lg bg-indigo-950/30 p-3.5 border border-indigo-500/20">
                  <h5 className="text-xs font-bold text-indigo-300 mb-1.5 flex items-center gap-1.5">
                    <span>💎</span> Điểm Mạnh Cạnh Tranh Nổi Bật:
                  </h5>
                  <ul className="space-y-1">
                    {v.strengths.map((str, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-indigo-400 font-bold">•</span>
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exam Tip Callout */}
                <div className="rounded-lg bg-amber-500/10 p-3 border border-amber-500/30 flex items-start gap-2.5">
                  <span className="text-base text-amber-400">💡</span>
                  <div>
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                      Mẹo Làm Bài Thi Trắc Nghiệm:
                    </span>
                    <p className="mt-0.5 text-xs text-amber-200/90 leading-relaxed">
                      {v.examTip}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* TAB 2: PING IDENTITY DEEP-DIVE */}
      {activeTab === "ping_deepdive" && (
        <div className="mt-6 space-y-5">
          <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🛡️</span>
              <div>
                <h4 className="text-base font-bold text-blue-200">
                  Kiến Trúc Toàn Diện Của Ping Identity (Giáo Trình Trọng Tâm)
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Giáo trình dành riêng một phần phân tích sâu Ping Identity như ví dụ tiêu chuẩn cho mọi giải pháp IDaaS thương mại quy mô lớn.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pillar 1: Authentication */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 font-bold text-xs">
                  1
                </span>
                <h5 className="text-sm font-bold text-slate-100">
                  Authentication (Xác Thực Đa Yếu Tố)
                </h5>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cung cấp nền tảng <strong className="text-blue-300">PingID</strong> hỗ trợ xác thực thích ứng (Contextual MFA):
              </p>
              <ul className="text-xs text-slate-400 space-y-1 pl-3 border-l border-blue-500/30">
                <li>• Quét sinh trắc học di động (FaceID, cảm biến vân tay trên iOS/Android).</li>
                <li>• Mã OTP một lần qua SMS, Email, Hardware Token (YubiKey).</li>
                <li>• Nhận diện thiết bị tin cậy và tự động yêu cầu MFA khi phát hiện vị trí truy cập lạ.</li>
              </ul>
            </div>

            {/* Pillar 2: Authorization */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-xs">
                  2
                </span>
                <h5 className="text-sm font-bold text-slate-100">
                  Authorization (Phân Quyền Động)
                </h5>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cung cấp nền tảng <strong className="text-emerald-300">PingAuthorize</strong> kiểm soát truy cập mức độ chi tiết:
              </p>
              <ul className="text-xs text-slate-400 space-y-1 pl-3 border-l border-emerald-500/30">
                <li>• <strong>RBAC (Role-Based)</strong>: Phân quyền theo chức danh công việc của nhân sự.</li>
                <li>• <strong>ABAC (Attribute-Based)</strong>: Phân quyền theo thuộc tính động (Thời gian, IP mạng, mức độ rủi ro).</li>
                <li>• <strong>Dynamic Policy</strong>: Cho phép xem dữ liệu nhưng tự động che mờ (Masking) số CMND/Thẻ ngân hàng.</li>
              </ul>
            </div>

            {/* Pillar 3: Account Management */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400 font-bold text-xs">
                  3
                </span>
                <h5 className="text-sm font-bold text-slate-100">
                  Account Management (Quản Lý Vòng Đời)
                </h5>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nền tảng <strong className="text-purple-300">PingDirectory &amp; SCIM Sync</strong> đồng bộ danh bạ:
              </p>
              <ul className="text-xs text-slate-400 space-y-1 pl-3 border-l border-purple-500/30">
                <li>• Cấp phát tự động (Auto-provisioning) tài khoản sang Google, Salesforce, AWS.</li>
                <li>• Tự phục vụ (Self-service): Nhân viên tự đặt lại mật khẩu, mở khóa tài khoản an toàn.</li>
                <li>• Thu hồi tức thì (Deprovisioning) khi nhân viên nghỉ việc chỉ với 1 thao tác.</li>
              </ul>
            </div>

            {/* Pillar 4: Audit & Realtime Monitoring */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">
                  4
                </span>
                <h5 className="text-sm font-bold text-slate-100">
                  Audit &amp; Giám Sát Real-Time
                </h5>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nền tảng <strong className="text-amber-300">PingIntelligence</strong> ứng dụng AI giám sát API:
              </p>
              <ul className="text-xs text-slate-400 space-y-1 pl-3 border-l border-amber-500/30">
                <li>• Ghi lại đầy đủ nhật ký (Audit Log): Ai đã truy cập tài nguyên gì, lúc mấy giờ, từ IP nào.</li>
                <li>• Trí tuệ nhân tạo (AI/ML) phát hiện hành vi quét API độc hại hoặc đánh cắp token xác thực.</li>
                <li>• Tự động ngắt phiên kết nối và gửi thông báo khẩn đến đội phản ứng bảo mật (SOC).</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 5-STEP DEPLOYMENT PIPELINE */}
      {activeTab === "deployment_pipeline" && (
        <div className="mt-6 space-y-5">
          {/* Steps Progress Navigator */}
          <div className="grid grid-cols-5 gap-2">
            {deploymentSteps.map((s) => {
              const isActive = deployStep === s.step;
              const isPast = deployStep &gt; s.step;
              return (
                <button
                  key={s.step}
                  onClick={() => setDeployStep(s.step)}
                  className={`flex flex-col items-center p-2.5 rounded-xl border text-center transition-all ${
                    isActive
                      ? "border-indigo-500 bg-indigo-950/60 ring-2 ring-indigo-500/40 shadow-lg"
                      : isPast
                      ? "border-emerald-500/40 bg-emerald-950/20 text-emerald-400"
                      : "border-slate-800 bg-slate-900/40 text-slate-500 hover:border-slate-700"
                  }`}
                >
                  <span className="text-lg">{s.icon}</span>
                  <span className="mt-1 text-[11px] font-bold hidden sm:inline">Bước {s.step}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Details */}
          {(() => {
            const cur = deploymentSteps[deployStep - 1];
            return (
              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cur.icon}</span>
                    <div>
                      <h4 className="text-base font-bold text-slate-100">{cur.name}</h4>
                      <p className="text-xs text-indigo-400 font-semibold">{cur.focus}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      disabled={deployStep === 1}
                      onClick={() => setDeployStep((p) => Math.max(1, p - 1))}
                      className="px-2.5 py-1 text-xs rounded-lg border border-slate-700 bg-slate-800 text-slate-300 disabled:opacity-40"
                    >
                      ← Trước
                    </button>
                    <button
                      disabled={deployStep === 5}
                      onClick={() => setDeployStep((p) => Math.min(5, p + 1))}
                      className="px-2.5 py-1 text-xs rounded-lg border border-indigo-600 bg-indigo-600 text-white disabled:opacity-40"
                    >
                      Tiếp →
                    </button>
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    📋 Các Công Việc Bắt Buộc Trong Bước Này:
                  </h5>
                  <div className="space-y-2">
                    {cur.details.map((d, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 rounded-lg bg-slate-950/60 p-3 border border-slate-800/80"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold">
                          ✓
                        </span>
                        <span className="text-xs text-slate-300 leading-relaxed">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg bg-red-500/10 p-3 border border-red-500/30 flex items-start gap-2.5">
                  <span className="text-base text-red-400">⚠️</span>
                  <div>
                    <span className="text-xs font-bold text-red-300 uppercase tracking-wide">
                      Cảnh Báo Thất Bại Triển Khai:
                    </span>
                    <p className="mt-0.5 text-xs text-red-200/90">{cur.warning}</p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Summary Footer */}
      <div className="mt-6 rounded-xl border border-slate-800/80 bg-slate-950/80 p-3.5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="text-indigo-400 font-bold">💡 Khẩu quyết cốt tử:</span>
          <span>Mọi giải pháp IDaaS đều xoay quanh: <strong>SSO + MFA + Access Management + Audit</strong>.</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          <span>4 Giải pháp: Ping Identity, SinglePoint, Symplified, OpenSaaS (Mã nguồn mở)</span>
        </div>
      </div>
    </div>
  );
}
