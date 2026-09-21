"use client";
import React, { useState } from "react";

export default function SsoDominoSimulator() {
  const [activeTab, setActiveTab] = useState("sso_flow"); // 'sso_flow' | 'domino_sandbox' | 'pros_cons'
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompromised, setIsCompromised] = useState(false);
  const [mfaEnabled, setMfaEnabled] = useState(true);

  const ssoSteps = [
    {
      step: 1,
      title: "Bước 1: Login Vào IdP (Nhập Credentials)",
      actor: "User ➔ Identity Provider (IdP)",
      icon: "🔑",
      desc: "Người dùng chỉ cần truy cập vào cổng đăng nhập duy nhất của IdP (ví dụ Okta hoặc Azure AD) và nhập tên tài khoản, mật khẩu 1 lần duy nhất."
    },
    {
      step: 2,
      title: "Bước 2: IdP Xác Thực & Phát Hành Token (Issue Token)",
      actor: "IdP ➔ User Browser",
      icon: "📜",
      desc: "IdP kiểm tra thông tin hợp lệ, tạo một phiên đăng nhập tập trung (SSO Session) và ký phát hành Authentication Token (SAML/JWT) bảo mật."
    },
    {
      step: 3,
      title: "Bước 3: Gửi Token Đến Service Provider (Request Access)",
      actor: "User Browser ➔ Service Provider (SP)",
      icon: "🚀",
      desc: "Trình duyệt tự động chuyển hướng và gửi Token kèm theo yêu cầu truy cập đến ứng dụng mục tiêu (Google Workspace, Slack, Salesforce)."
    },
    {
      step: 4,
      title: "Bước 4: SP Verify Token & Cấp Quyền Truy Cập",
      actor: "Service Provider ➔ Hoàn Tất Cấp Quyền",
      icon: "✅",
      desc: "Service Provider kiểm tra chữ ký số công khai của IdP trên Token. Nếu hợp lệ, cấp quyền vào thẳng ứng dụng mà KHÔNG bắt nhập lại mật khẩu."
    }
  ];

  const connectedApps = [
    { id: "email", name: "Corporate Email (M365)", icon: "✉️", sensitivity: "Cao", data: "Hàng ngàn email mật và hợp đồng kinh doanh" },
    { id: "slack", name: "Slack / Teams Chat", icon: "💬", sensitivity: "Trung bình", data: "Kênh trao đổi nội bộ, mã OTP, liên kết nhạy cảm" },
    { id: "crm", name: "Salesforce CRM", icon: "💼", sensitivity: "Cực cao", data: "Cơ sở dữ liệu khách hàng, doanh thu, thông tin thanh toán" },
    { id: "cloud", name: "AWS Cloud Console", icon: "☁️", sensitivity: "Nguy hiểm", data: "Toàn bộ hạ tầng máy chủ, cơ sở dữ liệu sản xuất" }
  ];

  return (
    <div className="my-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-[#0d111e] via-[#111728] to-[#090d16] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
            <span>🔑 Mục V • Single Sign-On (Đăng Nhập Một Lần)</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Mô Phỏng SSO 4 Bước &amp; Hiểm Họa Dây Chuyền (Single Point of Failure)
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khám phá quy trình đăng nhập 1 lần vào IdP và bài toán đánh đổi bảo mật kinh điển: Tiện lợi tột đỉnh vs Rủi ro sập cả chuỗi hệ thống.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex rounded-xl bg-neutral-900/80 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab("sso_flow")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "sso_flow"
                ? "bg-indigo-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Quy Trình 4 Bước
          </button>
          <button
            onClick={() => setActiveTab("domino_sandbox")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "domino_sandbox"
                ? "bg-rose-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Hiệu Ứng Domino Sandbox
          </button>
          <button
            onClick={() => setActiveTab("pros_cons")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "pros_cons"
                ? "bg-amber-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Lợi Ích &amp; Thách Thức
          </button>
        </div>
      </div>

      {/* TAB 1: QUY TRÌNH 4 BƯỚC */}
      {activeTab === "sso_flow" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5">
            {ssoSteps.map((s) => (
              <button
                key={s.step}
                onClick={() => setCurrentStep(s.step)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  currentStep === s.step
                    ? "border-indigo-500 bg-indigo-950/40 text-white shadow-lg shadow-indigo-950/50"
                    : "border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-lg">{s.icon}</span>
                  <span
                    className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      currentStep === s.step ? "bg-indigo-500/20 text-indigo-300" : "bg-neutral-800 text-neutral-500"
                    }`}
                  >
                    BƯỚC 0{s.step}
                  </span>
                </div>
                <div className="font-bold text-xs line-clamp-1">{s.title.split(": ")[1]}</div>
                <div className="text-[10px] text-neutral-500 mt-1 line-clamp-1">{s.actor}</div>
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-indigo-500/30 bg-neutral-900/90 p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h4 className="font-bold text-base text-white flex items-center gap-2">
                <span>{ssoSteps[currentStep - 1].icon}</span>
                <span>{ssoSteps[currentStep - 1].title}</span>
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                {ssoSteps[currentStep - 1].actor}
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {ssoSteps[currentStep - 1].desc}
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 text-center">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
              Khẩu quyết cốt lõi:{" "}
            </span>
            <span className="text-xs text-neutral-300">
              User chỉ cần đăng nhập 1 lần duy nhất tại IdP ➔ Truy cập được nhiều ứng dụng/hệ thống mà không cần login lại.
            </span>
          </div>
        </div>
      )}

      {/* TAB 2: HIỆU ỨNG DOMINO SANDBOX */}
      {activeTab === "domino_sandbox" && (
        <div className="mt-6 space-y-6">
          <div className="rounded-xl border border-rose-500/30 bg-neutral-900/90 p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-3">
              <div>
                <h4 className="font-bold text-lg text-white">
                  Phòng Thí Nghiệm Rủi Ro: Hiệu Ứng Domino Trong SSO
                </h4>
                <p className="text-xs text-neutral-400">
                  Khám phá hiểm họa Single Point of Failure: Khi 1 tài khoản SSO master bị tin tặc đánh cắp.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsCompromised(!isCompromised)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-md ${
                    isCompromised
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                      : "bg-rose-600 hover:bg-rose-500 text-white animate-pulse"
                  }`}
                >
                  {isCompromised ? "🛡️ Khôi Phục An Toàn" : "💥 Giả Lập Bị Đánh Cắp Tài Khoản SSO"}
                </button>
              </div>
            </div>

            {/* Central IdP Node */}
            <div
              className={`p-4 rounded-xl border text-center transition-all ${
                isCompromised
                  ? "border-rose-500 bg-rose-950/40 shadow-xl shadow-rose-950/50"
                  : "border-indigo-500/40 bg-indigo-950/20"
              }`}
            >
              <div className="text-3xl mb-1">{isCompromised ? "💀" : "🏰"}</div>
              <div className="font-bold text-sm text-white">
                Cổng Đăng Nhập SSO Master (Identity Provider)
              </div>
              <div
                className={`text-xs font-mono font-bold mt-1 ${
                  isCompromised ? "text-rose-400 animate-bounce" : "text-emerald-400"
                }`}
              >
                {isCompromised
                  ? "BÁO ĐỘNG ĐỎ: TÀI KHOẢN MASTER ĐÃ BỊ TIN TẶC CHIẾM ĐOẠT!"
                  : "BẢO MẬT BÌNH THƯỜNG: DANH TÍNH ĐANG ĐƯỢC BẢO VỆ"}
              </div>
            </div>

            {/* Downstream Apps Domino Effect */}
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Tình trạng các dịch vụ liên kết trong hệ sinh thái doanh nghiệp:
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {connectedApps.map((app) => (
                <div
                  key={app.id}
                  className={`p-3.5 rounded-xl border transition-all ${
                    isCompromised
                      ? "border-rose-500/60 bg-rose-950/30 text-rose-200"
                      : "border-neutral-800 bg-neutral-950 text-neutral-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs flex items-center gap-2">
                      <span>{app.icon}</span>
                      <span>{app.name}</span>
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        isCompromised
                          ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                          : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      }`}
                    >
                      {isCompromised ? "BỊ XÂM NHẬP DÂY CHUYỀN" : "AN TOÀN"}
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">{app.data}</div>
                </div>
              ))}
            </div>

            {/* Resolution Callout */}
            <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-200">
              <span className="font-bold text-amber-400">Giải pháp khắc phục hiểm họa SSO: </span>
              Bắt buộc kích hoạt <strong>Xác thực đa yếu tố thích ứng (Adaptive MFA)</strong>, kiểm tra địa chỉ IP / thiết bị lạ (Contextual Access) và cơ chế tự động ngắt toàn bộ phiên làm việc (Session Revocation) chỉ với 1 click khi phát hiện dấu hiệu bất thường.
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: LỢI ÍCH & THÁCH THỨC */}
      {activeTab === "pros_cons" && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-emerald-500/30 bg-neutral-950 p-5 space-y-3">
            <h4 className="font-bold text-sm text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <span>✔</span> 4 Lợi Ích Cốt Lõi Của SSO
            </h4>
            <ul className="text-xs text-neutral-300 space-y-2.5">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Đơn giản hóa quản lý mật khẩu:</strong> Người dùng không còn phải ghi nhớ hàng chục mật khẩu phức tạp.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Cải thiện trải nghiệm người dùng:</strong> Đăng nhập 1 lần truy cập tức thì mọi công cụ làm việc.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Tăng cường bảo mật:</strong> Dễ dàng áp dụng các chính sách mật khẩu mạnh và MFA tập trung.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Quản lý tập trung:</strong> Quản trị viên dễ dàng cấp quyền hoặc khóa tài khoản ngay lập tức.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-rose-500/30 bg-neutral-950 p-5 space-y-3">
            <h4 className="font-bold text-sm text-rose-400 uppercase tracking-wider flex items-center gap-2">
              <span>✖</span> 3 Thách Thức Lớn Của SSO
            </h4>
            <ul className="text-xs text-neutral-300 space-y-2.5">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span><strong>Security (Rủi ro bảo mật):</strong> 1 tài khoản SSO bị lộ ➔ mất quyền truy cập vào TẤT CẢ các hệ thống (Single Point of Failure).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span><strong>Compatibility (Tính tương thích):</strong> Khó tích hợp với các ứng dụng cũ (Legacy) không hỗ trợ giao thức hiện đại.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span><strong>Complexity (Độ phức tạp kỹ thuật):</strong> Triển khai và quản lý phức tạp, đòi hỏi đội ngũ kỹ thuật trình độ cao.</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
