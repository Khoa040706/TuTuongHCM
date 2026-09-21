"use client";
import React, { useState } from "react";

export default function FidmTokenFlowSimulator() {
  const [activeTab, setActiveTab] = useState("flow"); // 'flow' | 'components' | 'token_inspector'
  const [currentStep, setCurrentStep] = useState(1); // 1, 2, 3, 4
  const [isPlayingAuto, setIsPlayingAuto] = useState(false);

  const steps = [
    {
      step: 1,
      title: "Bước 1: Xác Thực User Tại IdP (User Authentication)",
      actor: "Người Dùng (User) ➔ Identity Provider (IdP)",
      icon: "🔑",
      color: "blue",
      desc: "Người dùng truy cập vào cổng đăng nhập trung tâm của Identity Provider (ví dụ Okta hoặc Google) và nhập thông tin xác thực (Mật khẩu + MFA).",
      actionDetail: "IdP kiểm tra thông tin trong cơ sở dữ liệu danh bạ người dùng. Nếu chính xác, danh tính được công nhận hợp lệ."
    },
    {
      step: 2,
      title: "Bước 2: Phát Hành Authentication Token (Token Issuance)",
      actor: "Identity Provider (IdP) ➔ Trình Duyệt / Ứng Dụng",
      icon: "📜",
      color: "purple",
      desc: "IdP tạo một chứng chỉ điện tử bảo mật (SAML 2.0 Assertion hoặc JWT Token), dùng khóa riêng tư (Private Key) của mình để ký số (Digital Signature).",
      actionDetail: "Token chứa thông tin: Tên người dùng, Email, Vai trò, Thời gian hết hạn và Chữ ký số chống giả mạo."
    },
    {
      step: 3,
      title: "Bước 3: Gửi Token Sang Service Provider (Access Service at SP)",
      actor: "Trình Duyệt (Client) ➔ Service Provider (SP)",
      icon: "🚀",
      color: "amber",
      desc: "Trình duyệt của người dùng tự động chuyển hướng (Redirect) và mang theo Token vừa được phát hành đến ứng dụng đích (ví dụ Salesforce hoặc Zoom).",
      actionDetail: "Người dùng KHÔNG HỀ PHẢI nhập lại mật khẩu của mình cho Service Provider!"
    },
    {
      step: 4,
      title: "Bước 4: SP Xác Minh Token & Mở Quyền Truy Cập (Token Verification)",
      actor: "Service Provider (SP) ➔ Cấp Quyền Cho User",
      icon: "✅",
      color: "emerald",
      desc: "Service Provider dùng khóa công khai (Public Key) của IdP để kiểm tra tính toàn vẹn của chữ ký số trên Token.",
      actionDetail: "Xác minh hợp lệ ➔ SP tin tưởng danh tính và mở quyền truy cập tài nguyên dịch vụ ngay lập tức cho người dùng!"
    }
  ];

  const componentsData = {
    idp: {
      name: "1. Identity Provider (IdP)",
      badge: "Bên Cung Cấp Danh Tính",
      icon: "🏢",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      role: "Chịu trách nhiệm lưu trữ cơ sở dữ liệu tài khoản, trực tiếp xác thực người dùng và ký phát hành các Token bảo mật.",
      examples: "Okta, Microsoft Entra ID (Azure AD), Google Cloud Identity, Ping Identity, PingFederate.",
      examNote: "Nhớ từ khóa: IdP là bên XÁC THỰC DANH TÍNH và PHÁT HÀNH TOKEN."
    },
    sp: {
      name: "2. Service Provider (SP)",
      badge: "Bên Cung Cấp Dịch Vụ",
      icon: "🌐",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      role: "Nơi cung cấp các ứng dụng, tài nguyên hoặc dịch vụ cho người dùng. SP tin tưởng IdP và dựa vào Token của IdP để cấp quyền.",
      examples: "Salesforce, Zoom, Workday, Slack, ServiceNow, AWS Management Console.",
      examNote: "Nhớ từ khóa: SP là bên CHẤP NHẬN & XÁC MINH TOKEN từ IdP để cấp quyền truy cập."
    },
    token: {
      name: "3. Authentication Token (Chứng Chỉ Bảo Mật)",
      badge: "Tấm Thẻ Bài Thông Hành",
      icon: "🎟️",
      badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      role: "Tài liệu số được mã hóa và ký điện tử chứa thông tin xác thực danh tính để SP kiểm tra mà không cần biết mật khẩu của người dùng.",
      examples: "SAML 2.0 Assertion (định dạng XML có chữ ký số) hoặc JSON Web Token (JWT).",
      examNote: "Nhớ từ khóa: Token do IdP CẤP ĐỂ XÁC MINH DANH TÍNH VỚI SP."
    }
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => (prev < 4 ? prev + 1 : 1));
  };

  const handlePlayAuto = () => {
    setIsPlayingAuto(true);
    let s = 1;
    setCurrentStep(s);
    const interval = setInterval(() => {
      s++;
      if (s <= 4) {
        setCurrentStep(s);
      } else {
        clearInterval(interval);
        setIsPlayingAuto(false);
      }
    }, 1200);
  };

  const currentStepData = steps[currentStep - 1];

  return (
    <div className="my-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-[#0d111e] via-[#111728] to-[#090d16] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
            <span>🤝 Mục IV • Liên Minh Quản Lý Danh Tính (FIDM)</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Mô Phỏng Luồng Liên Minh Danh Tính FIDM (4 Bước Chuẩn Học Thuật)
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khám phá cơ chế 1 danh tính truy cập đa hệ thống giữa Người dùng ➔ Identity Provider (IdP) ➔ Service Provider (SP).
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex rounded-xl bg-neutral-900/80 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab("flow")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "flow"
                ? "bg-indigo-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Mô Phỏng 4 Bước
          </button>
          <button
            onClick={() => setActiveTab("components")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "components"
                ? "bg-emerald-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            3 Thành Phần Cốt Lõi
          </button>
          <button
            onClick={() => setActiveTab("token_inspector")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "token_inspector"
                ? "bg-amber-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Cấu Trúc Token
          </button>
        </div>
      </div>

      {/* TAB 1: MÔ PHỎNG 4 BƯỚC */}
      {activeTab === "flow" && (
        <div className="mt-6 space-y-6">
          {/* Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-neutral-950 p-3 rounded-xl border border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-neutral-400">Điều khiển luồng FIDM:</span>
              <button
                onClick={handlePlayAuto}
                disabled={isPlayingAuto}
                className="px-3 py-1 text-xs font-bold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all flex items-center gap-1"
              >
                <span>▶️</span> {isPlayingAuto ? "Đang chạy..." : "Tự Động Chạy (Auto Run)"}
              </button>
              <button
                onClick={handleNextStep}
                className="px-3 py-1 text-xs font-semibold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-all"
              >
                Bước Tiếp Theo ➔
              </button>
            </div>

            <div className="text-xs text-neutral-400 font-mono">
              Bước hiện tại: <span className="font-bold text-indigo-400">{currentStep} / 4</span>
            </div>
          </div>

          {/* Stepper Node Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5">
            {steps.map((s) => (
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

          {/* Current Step Detail Box */}
          <div className="rounded-xl border border-indigo-500/30 bg-neutral-900/90 p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{currentStepData.icon}</span>
                <h4 className="font-bold text-base text-white">{currentStepData.title}</h4>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {currentStepData.actor}
              </span>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">{currentStepData.desc}</p>

            <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-xs text-neutral-300">
              <span className="font-bold text-amber-400">Chi tiết kỹ thuật dưới nền: </span>
              {currentStepData.actionDetail}
            </div>
          </div>

          {/* Golden Rule Callout */}
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 text-center">
            <div className="text-xs uppercase font-bold text-emerald-400 tracking-wider mb-1">
              Khẩu Quyết Ghi Nhớ Cốt Lõi Mục IV (FIDM Formula)
            </div>
            <div className="text-base md:text-lg font-black text-white font-mono">
              FIDM = IdP phát Token ➔ SP xác minh Token (Không cần đăng nhập lại!)
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 3 THÀNH PHẦN CỐT LÕI */}
      {activeTab === "components" && (
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.values(componentsData).map((c, i) => (
              <div
                key={i}
                className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 space-y-3 hover:border-indigo-500/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{c.icon}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${c.badgeColor}`}>
                    {c.badge}
                  </span>
                </div>
                <h4 className="font-bold text-base text-white">{c.name}</h4>
                <p className="text-xs text-neutral-300 leading-relaxed">{c.role}</p>

                <div className="rounded-lg bg-neutral-950 p-2.5 text-xs text-neutral-400 border border-neutral-850">
                  <span className="font-semibold text-neutral-300">Ví dụ thực tế: </span>
                  <span className="text-indigo-400 font-mono">{c.examples}</span>
                </div>

                <div className="text-[11px] text-amber-300/90 font-medium">
                  💡 {c.examNote}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: CẤU TRÚC TOKEN */}
      {activeTab === "token_inspector" && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
              <span className="font-bold text-sm text-white flex items-center gap-2">
                <span>🎟️</span> Cấu Trúc Mã Hóa Của Một Authentication Token (SAML / JWT Payload)
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                Digitally Signed
              </span>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">
              Token đóng vai trò như một &quot;tấm thẻ bài thông hành&quot;. Nhờ có chữ ký số bí mật của IdP, Service Provider (SP) có thể kiểm chứng 100% tính nguyên vẹn mà không cần kết nối hỏi trực tiếp mật khẩu của người dùng.
            </p>

            {/* Code Block Mockup */}
            <pre className="rounded-lg bg-neutral-900 p-3 text-xs font-mono text-emerald-400 overflow-x-auto border border-neutral-800">
{`{
  "issuer": "https://company.okta.com",        // IdP phát hành
  "audience": "https://salesforce.com",       // SP được phép nhận
  "user_id": "usr_9984729104",                 // Định danh duy nhất
  "email": "nguyenvana@company.com",          // Email người dùng
  "roles": ["Finance_Manager", "Editor"],     // Quyền hạn gán sẵn
  "issued_at": 1726048800,                    // Thời gian cấp
  "expires_at": 1726052400,                   // Hết hạn sau 1 giờ
  "signature": "SHA256withRSA_8b91a0c4f..."   // Chữ ký số chống giả mạo
}`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
