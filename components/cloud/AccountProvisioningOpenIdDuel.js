"use client";
import React, { useState } from "react";

export default function AccountProvisioningOpenIdDuel() {
  const [activeTab, setActiveTab] = useState("provisioning"); // 'provisioning' | 'openid' | 'term_duel'
  const [provStep, setProvStep] = useState(1);
  const [openIdStep, setOpenIdStep] = useState(1);

  const provisioningSteps = [
    {
      step: 1,
      title: "Bước 1: Create Account (Tạo Tài Khoản Mới)",
      icon: "👤",
      badge: "Onboarding Nhân Sự",
      desc: "Hệ thống IDaaS tự động trích xuất thông tin nhân sự từ hệ thống HR (Họ tên, email công ty, phòng ban, mã nhân viên) và khởi tạo tài khoản trên danh bạ đám mây.",
      action: "Tự động đồng bộ qua giao thức SCIM (System for Cross-domain Identity Management)."
    },
    {
      step: 2,
      title: "Bước 2: Grant Access (Cấp Quyền & Vai Trò Phù Hợp)",
      icon: "🔑",
      badge: "Phân Quyền RBAC",
      desc: "Dựa vào phòng ban và chức danh, người dùng được tự động gán vào các nhóm quyền tương ứng (ví dụ: Marketing group được cấp quyền vào Canva, Google Analytics, Mailchimp).",
      action: "Áp dụng nguyên tắc đặc quyền tối thiểu (Least Privilege), không cấp thừa quyền."
    },
    {
      step: 3,
      title: "Bước 3: Account Management (Cập Nhật & Điều Chỉnh Quyền)",
      icon: "🔄",
      badge: "Duy Trì Vòng Đời",
      desc: "Khi nhân viên thăng chức, chuyển bộ phận hoặc tham gia dự án mới, quyền truy cập sẽ tự động được cập nhật hoặc thu hồi các quyền cũ không còn phù hợp.",
      action: "Định kỳ rà soát quyền truy cập (Access Review) để chống tích tụ quyền lực dư thừa."
    },
    {
      step: 4,
      title: "Bước 4: Disable / Delete Account (Vô Hiệu Hóa & Xóa Tài Khoản)",
      icon: "🚫",
      badge: "Offboarding Tức Thì",
      desc: "Khi nhân viên nghỉ việc, tài khoản lập tức bị vô hiệu hóa hoặc xóa bỏ trên toàn bộ tất cả ứng dụng chỉ với 1 click từ phía quản trị viên.",
      action: "Chặn đứng hoàn toàn nguy cơ cựu nhân viên tiếp tục truy cập dữ liệu nhạy cảm."
    }
  ];

  const openIdSteps = [
    {
      step: 1,
      title: "Bước 1: User Chọn OpenID Provider (OP)",
      actor: "User ➔ Website Dịch Vụ (RP)",
      icon: "👆",
      desc: "Người dùng truy cập vào website dịch vụ (Relying Party - RP) và bấm nút: 'Đăng nhập với Google' hoặc 'Đăng nhập với Yahoo' (chọn OpenID Provider)."
    },
    {
      step: 2,
      title: "Bước 2: OP Xác Thực User (Authentication)",
      actor: "OpenID Provider (OP)",
      icon: "🪪",
      desc: "Website chuyển hướng người dùng sang trang đăng nhập của OP. Người dùng nhập mật khẩu + xác nhận sinh trắc học hoặc MFA an toàn tại máy chủ OP."
    },
    {
      step: 3,
      title: "Bước 3: OP Phát Hành Token (Issue Token)",
      actor: "OpenID Provider ➔ User Browser",
      icon: "📜",
      desc: "Sau khi xác thực thành công, OP tạo một ID Token (chứa thông tin định danh người dùng đã được ký số) và gửi về cho trình duyệt của người dùng."
    },
    {
      step: 4,
      title: "Bước 4: User Dùng Token Đăng Nhập Vào Relying Party (RP)",
      actor: "User Browser ➔ Relying Party (RP)",
      icon: "🚀",
      desc: "Trình duyệt tự động chuyển hướng quay trở lại website dịch vụ (RP) và gửi kèm theo ID Token vừa nhận được từ OP."
    },
    {
      step: 5,
      title: "Bước 5: RP Cho Phép Truy Cập (Access Granted)",
      actor: "Relying Party (RP)",
      icon: "🎉",
      desc: "RP kiểm tra chữ ký số trên Token để xác nhận tính xác thực từ OP ➔ Cấp quyền đăng nhập vào dịch vụ mà KHÔNG CẦN người dùng tạo mật khẩu mới."
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-[#0d111e] via-[#111728] to-[#090d16] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
            <span>🔄 Mục VI • Cấp Phát Tài Khoản &amp; Giao Thức OpenID</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Vòng Đời Cấp Phát Tài Khoản (Provisioning) &amp; Giao Thức OpenID
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Trực quan hóa quy trình 4 bước quản trị tài khoản và luồng xác thực OpenID 5 bước với cặp thuật ngữ đặc thù OP &amp; RP.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex rounded-xl bg-neutral-900/80 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab("provisioning")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "provisioning"
                ? "bg-indigo-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            4 Bước Provisioning
          </button>
          <button
            onClick={() => setActiveTab("openid")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "openid"
                ? "bg-emerald-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            5 Bước OpenID
          </button>
          <button
            onClick={() => setActiveTab("term_duel")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "term_duel"
                ? "bg-amber-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Đối Soát FIDM vs OpenID
          </button>
        </div>
      </div>

      {/* TAB 1: 4 BƯỚC PROVISIONING */}
      {activeTab === "provisioning" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5">
            {provisioningSteps.map((p) => (
              <button
                key={p.step}
                onClick={() => setProvStep(p.step)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  provStep === p.step
                    ? "border-indigo-500 bg-indigo-950/40 text-white shadow-lg shadow-indigo-950/50"
                    : "border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl">{p.icon}</span>
                  <span
                    className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      provStep === p.step ? "bg-indigo-500/20 text-indigo-300" : "bg-neutral-800 text-neutral-500"
                    }`}
                  >
                    BƯỚC 0{p.step}
                  </span>
                </div>
                <div className="font-bold text-xs line-clamp-1">{p.title.split(": ")[1]}</div>
                <div className="text-[10px] text-indigo-400/80 mt-1">{p.badge}</div>
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-indigo-500/30 bg-neutral-900/90 p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h4 className="font-bold text-base text-white flex items-center gap-2">
                <span>{provisioningSteps[provStep - 1].icon}</span>
                <span>{provisioningSteps[provStep - 1].title}</span>
              </h4>
              <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                {provisioningSteps[provStep - 1].badge}
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {provisioningSteps[provStep - 1].desc}
            </p>
            <div className="rounded-lg bg-neutral-950 p-2.5 text-xs text-neutral-400 border border-neutral-800">
              <span className="font-semibold text-emerald-400">Cơ chế kỹ thuật: </span>
              {provisioningSteps[provStep - 1].action}
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-3.5 text-center text-xs text-neutral-300">
            <span className="font-bold text-indigo-400">Mục tiêu tối thượng của Provisioning: </span>
            Đảm bảo người dùng có <span className="underline font-semibold text-white">ĐÚNG QUYỀN TRUY CẬP</span> vào tài nguyên cần thiết khi làm việc, và <span className="underline font-semibold text-rose-400">BỊ THU HỒI TỨC THÌ</span> khi rời bỏ tổ chức.
          </div>
        </div>
      )}

      {/* TAB 2: 5 BƯỚC OPENID */}
      {activeTab === "openid" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {openIdSteps.map((o) => (
              <button
                key={o.step}
                onClick={() => setOpenIdStep(o.step)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  openIdStep === o.step
                    ? "border-emerald-500 bg-emerald-950/40 text-white shadow-md shadow-emerald-950/50"
                    : "border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-lg">{o.icon}</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">0{o.step}</span>
                </div>
                <div className="font-bold text-xs line-clamp-1">{o.title.split(": ")[1]}</div>
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-emerald-500/30 bg-neutral-900/90 p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h4 className="font-bold text-base text-white flex items-center gap-2">
                <span>{openIdSteps[openIdStep - 1].icon}</span>
                <span>{openIdSteps[openIdStep - 1].title}</span>
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                {openIdSteps[openIdStep - 1].actor}
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {openIdSteps[openIdStep - 1].desc}
            </p>
          </div>

          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Khẩu quyết thi cử OpenID:{" "}
            </span>
            <span className="text-xs text-neutral-300 font-mono">
              OpenID là giao thức mở cho phép dùng 1 tài khoản đăng nhập nhiều website (OP xác thực ➔ RP cấp quyền).
            </span>
          </div>
        </div>
      )}

      {/* TAB 3: ĐỐI SOÁT FIDM VS OPENID */}
      {activeTab === "term_duel" && (
        <div className="mt-6 space-y-4">
          <div className="overflow-x-auto rounded-xl border border-neutral-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-950 text-neutral-400 border-b border-neutral-800 uppercase font-semibold">
                <tr>
                  <th className="p-3">Vai Trò Kiến Trúc</th>
                  <th className="p-3 text-indigo-400">Thuật Ngữ FIDM (Mục IV)</th>
                  <th className="p-3 text-emerald-400">Thuật Ngữ OpenID (Mục VI)</th>
                  <th className="p-3">Ý Nghĩa Thực Tế</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-neutral-300">
                <tr className="hover:bg-neutral-900/50">
                  <td className="p-3 font-semibold text-white">Bên Cung Cấp Danh Tính</td>
                  <td className="p-3 font-mono font-bold text-indigo-300">IdP (Identity Provider)</td>
                  <td className="p-3 font-mono font-bold text-emerald-300">OP (OpenID Provider)</td>
                  <td className="p-3">Nơi nắm giữ tài khoản và xác minh mật khẩu (Google, Okta, Microsoft).</td>
                </tr>
                <tr className="hover:bg-neutral-900/50">
                  <td className="p-3 font-semibold text-white">Bên Cung Cấp Dịch Vụ</td>
                  <td className="p-3 font-mono font-bold text-indigo-300">SP (Service Provider)</td>
                  <td className="p-3 font-mono font-bold text-emerald-300">RP (Relying Party)</td>
                  <td className="p-3">Ứng dụng hoặc website mà người dùng muốn truy cập (Spotify, Zoom, Tiki).</td>
                </tr>
                <tr className="hover:bg-neutral-900/50">
                  <td className="p-3 font-semibold text-white">Vật Phẩm Ủy Quyền</td>
                  <td className="p-3 font-mono text-indigo-300">Authentication Token / SAML</td>
                  <td className="p-3 font-mono text-emerald-300">ID Token / JWT Token</td>
                  <td className="p-3">Chứng chỉ số có chữ ký điện tử để chứng minh danh tính với bên cung cấp dịch vụ.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-200">
            <span className="font-bold text-amber-400">⚠️ Cảnh báo bẫy thi điểm liệt: </span>
            Đề thi cực kỳ hay hỏi: &quot;Trong giao thức OpenID, thành phần tương đương với Identity Provider (IdP) của FIDM là gì?&quot; ➔ Đáp án đúng là <strong>OpenID Provider (OP)</strong>. Và thành phần tương đương với Service Provider (SP) là <strong>Relying Party (RP)</strong>!
          </div>
        </div>
      )}
    </div>
  );
}
