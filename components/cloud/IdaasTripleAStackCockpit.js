"use client";
import React, { useState } from "react";

export default function IdaasTripleAStackCockpit() {
  const [activeTab, setActiveTab] = useState("pillars"); // 'pillars' | 'simulator' | 'vendors'
  const [selectedPillar, setSelectedPillar] = useState("authn");

  // Simulator State
  const [simStep, setSimStep] = useState(1); // 1: AuthN, 2: AuthZ, 3: AccountMgmt
  const [authMethod, setAuthMethod] = useState("password_mfa"); // 'password' | 'password_mfa' | 'biometrics'
  const [authStatus, setAuthStatus] = useState("idle"); // 'idle' | 'verifying' | 'success' | 'failed'
  const [userRole, setUserRole] = useState("staff"); // 'staff' | 'manager' | 'admin'
  const [provisionState, setProvisionState] = useState("active"); // 'active' | 'deprovisioned'

  const pillars = {
    authn: {
      id: "authn",
      name: "1. Authentication (Xác Thực Danh Tính)",
      short: "Xác Thực",
      icon: "🪪",
      badge: "Bạn Là Ai? (Who are you?)",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      definition: "Quá trình xác minh và kiểm chứng xem người dùng hoặc thiết bị có thực sự đúng là danh tính mà họ khai báo hay không.",
      mechanisms: [
        "Mật khẩu & Mã PIN (Kiến thức người dùng biết).",
        "Mã OTP qua SMS / Authenticator App (Vật người dùng sở hữu).",
        "Sinh trắc học: Vân tay, FaceID (Đặc điểm cơ thể người dùng).",
        "Xác thực đa yếu tố (MFA - Multi-Factor Authentication) và Đăng nhập một lần (SSO)."
      ],
      examTip: "Từ khóa đề thi: 'Xác minh danh tính' ➔ Luôn là Authentication (AuthN). Đừng nhầm lẫn với cấp quyền truy cập."
    },
    authz: {
      id: "authz",
      name: "2. Authorization (Phân Quyền Truy Cập)",
      short: "Phân Quyền",
      icon: "🛡️",
      badge: "Bạn Được Phép Làm Gì? (What can you do?)",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      definition: "Quá trình xác định và cấp các quyền hạn cụ thể cho một danh tính đã được xác thực (ai được đọc, ghi, sửa, xóa tài nguyên nào).",
      mechanisms: [
        "Kiểm soát truy cập dựa trên vai trò (RBAC - Role-Based Access Control).",
        "Kiểm soát truy cập dựa trên thuộc tính (ABAC - Attribute-Based Access Control).",
        "Danh sách kiểm soát truy cập (ACLs - Access Control Lists).",
        "Phân quyền theo ngữ cảnh (Contextual / Conditional Access: theo vị trí IP, thiết bị)."
      ],
      examTip: "Từ khóa đề thi: 'Cấp quyền truy cập tài nguyên' ➔ Luôn là Authorization (AuthZ). Diễn ra SAU khi Authentication thành công."
    },
    acct: {
      id: "acct",
      name: "3. Account Management (Quản Lý Tài Khoản)",
      short: "Quản Trị Tài Khoản",
      icon: "👥",
      badge: "Vòng Đời Tài Khoản (Account Lifecycle)",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      definition: "Quá trình quản lý toàn bộ vòng đời của tài khoản người dùng từ lúc khởi tạo, cập nhật thông tin cho đến khi vô hiệu hóa hoặc xóa bỏ.",
      mechanisms: [
        "Tự động cấp phát tài khoản (User Provisioning) khi nhân viên mới gia nhập công ty.",
        "Cập nhật quyền hạn khi nhân viên thuyên chuyển phòng ban.",
        "Thu hồi tức thì (Deprovisioning / Offboarding) khi nhân sự nghỉ việc chỉ với 1 click.",
        "Đặt lại mật khẩu tự phục vụ (Self-service Password Reset) và đồng bộ thư mục (LDAP/SCIM)."
      ],
      examTip: "Từ khóa đề thi: 'Tạo, cập nhật, xóa tài khoản' ➔ Account Management. Cốt lõi là tự động hóa Provisioning và Deprovisioning."
    }
  };

  const handleSimulateLogin = () => {
    setAuthStatus("verifying");
    setTimeout(() => {
      setAuthStatus("success");
      setSimStep(2);
    }, 600);
  };

  const handleResetSim = () => {
    setSimStep(1);
    setAuthStatus("idle");
    setProvisionState("active");
  };

  const currentPillar = pillars[selectedPillar];

  return (
    <div className="my-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-[#0d111e] via-[#111728] to-[#090d16] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
            <span>🛡️ Mục II • Khái Niệm Cơ Bản &amp; Bộ Ba Chức Năng Cốt Lõi</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Bộ Ba Trụ Cột AAA (Authentication - Authorization - Account Management)
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khám phá 3 chức năng sống còn cấu thành nên giải pháp Identity as a Service (IDaaS) trên nền tảng đám mây.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex rounded-xl bg-neutral-900/80 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab("pillars")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "pillars"
                ? "bg-indigo-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            3 Trụ Cột AAA
          </button>
          <button
            onClick={() => setActiveTab("simulator")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "simulator"
                ? "bg-emerald-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Mô Phỏng Chu Trình
          </button>
          <button
            onClick={() => setActiveTab("vendors")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "vendors"
                ? "bg-purple-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Giải Pháp Tiêu Biểu
          </button>
        </div>
      </div>

      {/* TAB 1: 3 TRỤ CỘT AAA */}
      {activeTab === "pillars" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {Object.values(pillars).map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPillar(p.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selectedPillar === p.id
                    ? "border-indigo-500 bg-indigo-950/40 shadow-lg shadow-indigo-950/50"
                    : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <div className="text-2xl mb-1">{p.icon}</div>
                <div className="font-bold text-sm text-white">{p.short}</div>
                <div className="text-xs text-indigo-400/90 mt-1">{p.badge}</div>
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-indigo-500/30 bg-neutral-900/90 p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{currentPillar.icon}</span>
                <div>
                  <h4 className="font-bold text-lg text-white">{currentPillar.name}</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">{currentPillar.definition}</p>
                </div>
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded border ${currentPillar.badgeColor}`}>
                {currentPillar.badge}
              </span>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                Các phương thức &amp; kỹ thuật triển khai cốt lõi:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {currentPillar.mechanisms.map((m, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 rounded-lg border border-neutral-800 bg-neutral-950/60 p-3 text-xs text-neutral-300"
                  >
                    <span className="text-indigo-400 font-bold mt-0.5">✔</span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-200">
              <span className="font-bold text-amber-400">💡 Mẹo nhận diện câu hỏi thi trắc nghiệm: </span>
              {currentPillar.examTip}
            </div>
          </div>

          {/* Core Formula Callout */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 text-center">
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-1">
              Khẩu Quyết Vàng Của Quản Lý Danh Tính Đám Mây (IDaaS Formula)
            </div>
            <div className="text-base md:text-lg font-black text-indigo-400 font-mono">
              3 Chức Năng Cốt Lõi = AAA (Authentication - Authorization - Account Management)
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MÔ PHỎNG CHU TRÌNH THỰC TẾ */}
      {activeTab === "simulator" && (
        <div className="mt-6 space-y-6">
          <div className="rounded-xl border border-emerald-500/30 bg-neutral-900/90 p-5 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-3">
              <div>
                <h4 className="font-bold text-lg text-white">
                  Phòng Thí Nghiệm Chu Trình Danh Tính: Xác Thực ➔ Phân Quyền ➔ Quản Trị
                </h4>
                <p className="text-xs text-neutral-400">
                  Thực hành tương tác trực tiếp 3 giai đoạn của một người dùng trong hệ thống IDaaS doanh nghiệp.
                </p>
              </div>

              <button
                onClick={handleResetSim}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-all"
              >
                🔄 Khởi Tạo Lại
              </button>
            </div>

            {/* Stepper Header */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div
                className={`p-2.5 rounded-lg border font-bold ${
                  simStep === 1
                    ? "border-blue-500 bg-blue-950/40 text-blue-300"
                    : simStep > 1
                    ? "border-emerald-500/50 bg-emerald-950/20 text-emerald-400"
                    : "border-neutral-800 bg-neutral-950/50 text-neutral-500"
                }`}
              >
                1. Authentication (Xác thực)
              </div>
              <div
                className={`p-2.5 rounded-lg border font-bold ${
                  simStep === 2
                    ? "border-emerald-500 bg-emerald-950/40 text-emerald-300"
                    : simStep > 2
                    ? "border-emerald-500/50 bg-emerald-950/20 text-emerald-400"
                    : "border-neutral-800 bg-neutral-950/50 text-neutral-500"
                }`}
              >
                2. Authorization (Phân quyền)
              </div>
              <div
                className={`p-2.5 rounded-lg border font-bold ${
                  simStep === 3
                    ? "border-purple-500 bg-purple-950/40 text-purple-300"
                    : "border-neutral-800 bg-neutral-950/50 text-neutral-500"
                }`}
              >
                3. Account Management (Vòng đời)
              </div>
            </div>

            {/* STEP 1: AUTHENTICATION */}
            {simStep === 1 && (
              <div className="rounded-xl border border-blue-500/20 bg-neutral-950 p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    Giai Đoạn 1: Xác Minh Danh Tính Người Dùng
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                    Authentication (AuthN)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <button
                    onClick={() => setAuthMethod("password")}
                    className={`p-3 rounded-lg border text-xs text-left transition-all ${
                      authMethod === "password"
                        ? "border-blue-500 bg-blue-950/40 text-white"
                        : "border-neutral-800 bg-neutral-900/40 text-neutral-400"
                    }`}
                  >
                    🔑 Mật Khẩu Đơn (Single-Factor)
                  </button>
                  <button
                    onClick={() => setAuthMethod("password_mfa")}
                    className={`p-3 rounded-lg border text-xs text-left transition-all ${
                      authMethod === "password_mfa"
                        ? "border-blue-500 bg-blue-950/40 text-white font-bold"
                        : "border-neutral-800 bg-neutral-900/40 text-neutral-400"
                    }`}
                  >
                    🛡️ Mật Khẩu + OTP (MFA)
                  </button>
                  <button
                    onClick={() => setAuthMethod("biometrics")}
                    className={`p-3 rounded-lg border text-xs text-left transition-all ${
                      authMethod === "biometrics"
                        ? "border-blue-500 bg-blue-950/40 text-white"
                        : "border-neutral-800 bg-neutral-900/40 text-neutral-400"
                    }`}
                  >
                    👁️ Sinh Trắc Học (Passkey/FIDO2)
                  </button>
                </div>

                <div className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
                  <div className="text-xs text-neutral-300">
                    Người dùng khai báo: <span className="font-mono text-amber-300">nguyenvana@company.com</span>
                  </div>
                  <button
                    onClick={handleSimulateLogin}
                    disabled={authStatus === "verifying"}
                    className="px-4 py-2 text-xs font-bold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-900/40"
                  >
                    {authStatus === "verifying" ? "Đang Xác Minh..." : "Đăng Nhập & Xác Thực ➔"}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: AUTHORIZATION */}
            {simStep === 2 && (
              <div className="rounded-xl border border-emerald-500/20 bg-neutral-950 p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Giai Đoạn 2: Kiểm Tra &amp; Cấp Quyền Truy Cập Tài Nguyên
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                    Authorization (AuthZ)
                  </span>
                </div>

                <div className="text-xs text-neutral-300">
                  Danh tính đã được xác thực hợp lệ! Hãy chọn <span className="font-bold text-emerald-400">Vai Trò (Role)</span> để kiểm tra chính sách phân quyền RBAC:
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setUserRole("staff")}
                    className={`p-2.5 rounded-lg border text-xs font-semibold ${
                      userRole === "staff"
                        ? "border-emerald-500 bg-emerald-950/40 text-white"
                        : "border-neutral-800 bg-neutral-900/50 text-neutral-400"
                    }`}
                  >
                    Nhân Viên (Staff)
                  </button>
                  <button
                    onClick={() => setUserRole("manager")}
                    className={`p-2.5 rounded-lg border text-xs font-semibold ${
                      userRole === "manager"
                        ? "border-emerald-500 bg-emerald-950/40 text-white"
                        : "border-neutral-800 bg-neutral-900/50 text-neutral-400"
                    }`}
                  >
                    Trưởng Phòng (Manager)
                  </button>
                  <button
                    onClick={() => setUserRole("admin")}
                    className={`p-2.5 rounded-lg border text-xs font-semibold ${
                      userRole === "admin"
                        ? "border-emerald-500 bg-emerald-950/40 text-white"
                        : "border-neutral-800 bg-neutral-900/50 text-neutral-400"
                    }`}
                  >
                    Quản Trị Viên (Admin)
                  </button>
                </div>

                {/* Permissions Matrix */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-neutral-900 border border-neutral-800">
                    <span>Xem bảng tin nội bộ &amp; công việc cá nhân:</span>
                    <span className="text-emerald-400 font-bold">✔ Được phép</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-neutral-900 border border-neutral-800">
                    <span>Duyệt ngân sách &amp; xem báo cáo doanh thu:</span>
                    <span className={userRole !== "staff" ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>
                      {userRole !== "staff" ? "✔ Được phép" : "✖ Bị từ chối (403 Forbidden)"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-neutral-900 border border-neutral-800">
                    <span>Xóa dữ liệu hệ thống &amp; cấp quyền người khác:</span>
                    <span className={userRole === "admin" ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>
                      {userRole === "admin" ? "✔ Được phép" : "✖ Bị từ chối (403 Forbidden)"}
                    </span>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setSimStep(3)}
                    className="px-4 py-2 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all"
                  >
                    Chuyển Sang Quản Trị Vòng Đời Tài Khoản ➔
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: ACCOUNT MANAGEMENT */}
            {simStep === 3 && (
              <div className="rounded-xl border border-purple-500/20 bg-neutral-950 p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                    Giai Đoạn 3: Quản Trị Vòng Đời Tài Khoản
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                    Account Management
                  </span>
                </div>

                <div className="text-xs text-neutral-300">
                  Trạng thái tài khoản hiện tại trong danh bạ đám mây IDaaS:
                  <span
                    className={`ml-2 font-bold px-2 py-0.5 rounded ${
                      provisionState === "active"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                    }`}
                  >
                    {provisionState === "active" ? "ĐANG HOẠT ĐỘNG (PROVISIONED)" : "ĐÃ THU HỒI QUYỀN (DEPROVISIONED)"}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 space-y-2">
                  <div className="font-semibold text-white">Hành động quản trị một chạm (Lifecycle Actions):</div>
                  <div className="flex flex-wrap gap-2">
                    {provisionState === "active" ? (
                      <button
                        onClick={() => setProvisionState("deprovisioned")}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white transition-all shadow-md"
                      >
                        🚫 Thu Hồi Quyền Tức Thì (Deprovision - Nhân Viên Nghỉ Việc)
                      </button>
                    ) : (
                      <button
                        onClick={() => setProvisionState("active")}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md"
                      >
                        ✨ Cấp Phát Lại Tài Khoản (User Provisioning)
                      </button>
                    )}
                  </div>
                </div>

                <div className="text-[11px] text-neutral-400">
                  {provisionState === "deprovisioned"
                    ? "Ngay khi bấm thu hồi, người dùng lập tức bị ngắt phiên đăng nhập trên toàn bộ các ứng dụng liên kết (Email, Slack, Salesforce, AWS) trong vòng 0 giây, ngăn ngừa triệt để nguy cơ đánh cắp dữ liệu doanh nghiệp!"
                    : "Tính năng Auto-provisioning tự động tạo hòm thư, cấp quyền truy cập tài liệu và phân quyền nhóm theo phòng ban chỉ trong vài giây sau khi nhân sự ký hợp đồng."}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: GIẢI PHÁP TIÊU BIỂU */}
      {activeTab === "vendors" && (
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">🟡</span>
                <h5 className="font-bold text-sm text-white">Okta Workforce Identity</h5>
              </div>
              <p className="text-xs text-neutral-400">
                Nhà cung cấp IDaaS độc lập hàng đầu thế giới, cung cấp nền tảng quản trị danh tính thuần túy cho hàng ngàn ứng dụng doanh nghiệp.
              </p>
              <div className="text-[11px] font-mono text-indigo-400">Universal Directory • SSO • MFA</div>
            </div>

            <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">🟦</span>
                <h5 className="font-bold text-sm text-white">Microsoft Entra ID</h5>
              </div>
              <p className="text-xs text-neutral-400">
                Trước đây là Azure Active Directory (Azure AD), giải pháp IDaaS áp đảo tại các doanh nghiệp sử dụng hệ sinh thái Microsoft 365 và Windows.
              </p>
              <div className="text-[11px] font-mono text-blue-400">Conditional Access • B2B/B2C • PIM</div>
            </div>

            <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <h5 className="font-bold text-sm text-white">Auth0 (by Okta) &amp; Ping</h5>
              </div>
              <p className="text-xs text-neutral-400">
                Nền tảng quản lý danh tính linh hoạt dành cho các nhà phát triển ứng dụng Web/Mobile và các tập đoàn tài chính đa quốc gia.
              </p>
              <div className="text-[11px] font-mono text-emerald-400">Developer-First • CIAM • OpenID Connect</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
