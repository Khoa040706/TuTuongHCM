"use client";
import React, { useState } from "react";

export default function Chapter6MasterKeyTermsMatrix() {
  const [activeFilter, setActiveFilter] = useState("all"); // 'all' | 'core' | 'protocols' | 'management' | 'vendors'
  const [searchQuery, setSearchQuery] = useState("");
  const [showExamTraps, setShowExamTraps] = useState(false);

  const masterPillars = [
    {
      id: "idaas_core_aaa",
      pillarNumber: 1,
      title: "1. Bản Chất IDaaS & Bộ Ba AAA",
      category: "core",
      icon: "🪪",
      formula: "IDaaS = Cloud IAM • Bộ ba AAA: AuthN + AuthZ + Account Mgmt",
      coreConcepts: "IDaaS là dịch vụ quản lý danh tính trên đám mây. AuthN (Authentication) trả lời 'Bạn là ai?'. AuthZ (Authorization) trả lời 'Bạn được phép làm gì?'. Account Management quản trị toàn bộ vòng đời tài khoản (tạo, phân quyền, sửa đổi, vô hiệu hóa).",
      examTrap: "Tuyệt đối không nhầm AuthN và AuthZ. Đề thi thường gài: 'Kiểm tra mật khẩu, vân tay' là AuthN; 'Cấp quyền truy cập thư mục' là AuthZ."
    },
    {
      id: "benefits_challenges",
      pillarNumber: 2,
      title: "2. Cán Cân 6 Lợi Ích & 5 Thách Thức",
      category: "core",
      icon: "⚖️",
      formula: "6 Lợi ích (Chi phí, Co giãn, Bảo mật, Quản lý, UX, Tuân thủ) vs 5 Thách thức (Bảo mật, Phụ thuộc, Tích hợp, Quy định, Chi phí)",
      coreConcepts: "Doanh nghiệp được hưởng lợi từ tiết kiệm chi phí ban đầu, quản lý tập trung và nâng cao trải nghiệm SSO. Tuy nhiên phải đánh đổi sự phụ thuộc hoàn toàn vào nhà cung cấp (Vendor Lock-in) và rủi ro rò rỉ dữ liệu tập trung.",
      examTrap: "Lưu ý từ khóa: 'Cost' và 'Security' xuất hiện ở CẢ HAI BÊN lợi ích và thách thức tùy thuộc vào quy mô và mức độ kiểm soát của doanh nghiệp."
    },
    {
      id: "fidm_architecture",
      pillarNumber: 3,
      title: "3. Liên Minh Danh Tính (FIDM)",
      category: "protocols",
      icon: "🌐",
      formula: "1 Danh tính dùng chung • IdP phát hành Token ➔ SP xác minh Token",
      coreConcepts: "Federated Identity Management (FIDM) cho phép dùng 1 tài khoản đăng nhập qua nhiều hệ thống của các tổ chức khác nhau. IdP (Identity Provider) giữ mật khẩu và xác thực. Service Provider (SP) chỉ nhận và xác minh Token có chữ ký số chứ không bao giờ thấy mật khẩu.",
      examTrap: "Đề thi hỏi: 'Trong FIDM, SP có lưu mật khẩu người dùng không?' ➔ Đáp án là KHÔNG, SP chỉ xác minh Token do IdP phát hành."
    },
    {
      id: "single_sign_on",
      pillarNumber: 4,
      title: "4. Single Sign-On (SSO)",
      category: "protocols",
      icon: "🔑",
      formula: "Login 1 lần vào IdP ➔ Truy cập đa ứng dụng SP • Rủi ro Single Point of Failure",
      coreConcepts: "Người dùng đăng nhập 1 lần duy nhất tại IdP, IdP tạo SSO Session và cấp Token chuyển hướng sang các SP. Giúp nhân viên không phải nhớ nhiều mật khẩu. Tuy nhiên nếu tài khoản SSO bị tin tặc chiếm đoạt, toàn bộ hệ thống liên kết sẽ bị xâm nhập dây chuyền.",
      examTrap: "Điểm yếu chí tử của SSO là 'Single Point of Failure' (Điểm lỗi đơn lẻ) và 'Hiệu ứng Domino'. Biện pháp khắc phục bắt buộc là bật Adaptive MFA."
    },
    {
      id: "account_provisioning",
      pillarNumber: 5,
      title: "5. Vòng Đời Cấp Phát Tài Khoản",
      category: "management",
      icon: "🔄",
      formula: "4 Bước: Create ➔ Grant Access ➔ Account Mgmt ➔ Disable/Delete",
      coreConcepts: "Provisioning là quá trình tự động tạo và duy trì tài khoản. Khi nhân viên mới vào ➔ Tự động tạo và gán quyền theo vai trò (RBAC). Khi chuyển phòng ➔ Cập nhật quyền. Khi nghỉ việc (Offboarding) ➔ Vô hiệu hóa hoặc xóa ngay lập tức (Deprovisioning) để chống tài khoản ma.",
      examTrap: "Quên Deprovisioning tài khoản của nhân viên đã thôi việc là nguyên nhân hàng đầu gây thất thoát dữ liệu bảo mật trong doanh nghiệp."
    },
    {
      id: "openid_standard",
      pillarNumber: 6,
      title: "6. Chuẩn Mở OpenID (OP & RP)",
      category: "protocols",
      icon: "🔓",
      formula: "OpenID = FIDM mã nguồn mở • OP (thay IdP) + RP (thay SP)",
      coreConcepts: "Giao thức mở cho phép người dùng đăng nhập nhiều website bằng 1 tài khoản OpenID (ví dụ Đăng nhập bằng Google). Quy trình 5 bước: Chọn OP ➔ OP xác thực ➔ OP cấp Token ➔ Gửi Token sang RP ➔ RP cấp quyền truy cập.",
      examTrap: "Cặp từ khóa tương đương tuyệt đối trong đề thi: OpenID Provider (OP) tương đương IdP; Relying Party (RP) tương đương Service Provider (SP)."
    },
    {
      id: "mobile_id_management",
      pillarNumber: 7,
      title: "7. Quản Lý Danh Tính Di Động",
      category: "management",
      icon: "📱",
      formula: "Mobile ID = MFA + MDM (Thiết bị) + MAM (Ứng dụng) + Contextual Access",
      coreConcepts: "Quản lý truy cập từ smartphone và tablet. MDM (Mobile Device Management) can thiệp cấp phần cứng/OS (khóa màn hình, mã hóa máy). MAM (Mobile Application Management) cô lập dữ liệu công ty trong các app riêng (Containerization). Hỗ trợ xóa dữ liệu từ xa (Remote Wipe).",
      examTrap: "Phân biệt rạch ròi: MDM quản lý toàn bộ thiết bị (kể cả ảnh/app riêng của nhân viên); MAM chỉ quản lý và mã hóa các ứng dụng của công ty (rất hợp BYOD)."
    },
    {
      id: "quad_vendors_framework",
      pillarNumber: 8,
      title: "8. Bộ Tứ Giải Pháp & Khung Chung",
      category: "vendors",
      icon: "⚔️",
      formula: "Bộ khung: SSO + MFA + Access Mgmt + Audit • 5 Bước triển khai",
      coreConcepts: "4 giải pháp giáo trình: Ping Identity (Thương mại chuẩn FIDM), SinglePoint (Đơn giản, triển khai nhanh), Symplified (Tiên phong đám mây & Reverse Proxy), OpenSaaS (Mã nguồn mở duy nhất). Quy trình 5 bước: Khảo sát ➔ Cài đặt ➔ Tích hợp ➔ Đào tạo ➔ Theo dõi & Tối ưu.",
      examTrap: "OpenSaaS là giải pháp DUY NHẤT có tính chất mã nguồn mở (Open-source) trong 4 giải pháp giáo trình liệt kê. Không phải trả phí bản quyền."
    }
  ];

  const filteredPillars = masterPillars.filter((p) => {
    const matchCategory = activeFilter === "all" || p.category === activeFilter;
    const matchQuery =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.coreConcepts.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.examTrap.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchQuery;
  });

  return (
    <div className="my-8 rounded-2xl border border-indigo-500/20 bg-[#0d111e] p-6 shadow-2xl backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400 font-bold text-sm">
              ★
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Mục VIII • Tổng Kết Trọng Tâm &amp; Ma Trận Tri Thức Toàn Chương
            </span>
          </div>
          <h3 className="mt-1 text-xl font-bold text-slate-100">
            Ma Trận 8 Trụ Cột Tri Thức Cốt Tử — Chương 6 (IDaaS)
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            Hệ thống hóa toàn diện kiến thức thi cử: Bộ ba AAA, Cán cân đánh đổi, FIDM, SSO, Cấp phát tài khoản, OpenID, Mobile ID và Bộ tứ giải pháp.
          </p>
        </div>

        {/* Exam Traps Switcher */}
        <button
          onClick={() => setShowExamTraps(!showExamTraps)}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all border ${
            showExamTraps
              ? "bg-red-500/20 text-red-300 border-red-500/40 shadow-lg shadow-red-500/10 ring-1 ring-red-500/50"
              : "bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200"
          }`}
        >
          <span>🎯</span>
          <span>{showExamTraps ? "Đang Bật Radar Soi Bẫy" : "Bật Radar Soi Bẫy Điểm Liệt"}</span>
        </button>
      </div>

      {/* Control Bar: Filters & Search */}
      <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 rounded-xl bg-slate-900/80 p-1 border border-slate-800">
          <button
            onClick={() => setActiveFilter("all")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeFilter === "all"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Tất Cả (8)
          </button>
          <button
            onClick={() => setActiveFilter("core")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeFilter === "core"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Nền Tảng IDaaS (2)
          </button>
          <button
            onClick={() => setActiveFilter("protocols")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeFilter === "protocols"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Giao Thức FIDM &amp; SSO (3)
          </button>
          <button
            onClick={() => setActiveFilter("management")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeFilter === "management"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Quản Trị &amp; Di Động (2)
          </button>
          <button
            onClick={() => setActiveFilter("vendors")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeFilter === "vendors"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Giải Pháp &amp; Triển Khai (1)
          </button>
        </div>

        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm theo từ khóa (AAA, IdP, SCIM...)"
            className="w-full md:w-64 rounded-xl border border-slate-800 bg-slate-900/90 px-3.5 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-200"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Grid of 8 Pillars */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPillars.map((p) => (
          <div
            key={p.id}
            className={`rounded-xl border transition-all p-4 flex flex-col justify-between ${
              showExamTraps
                ? "border-red-500/30 bg-red-950/10 hover:border-red-500/50"
                : "border-slate-800 bg-slate-900/60 hover:border-indigo-500/40"
            }`}
          >
            <div>
              {/* Header card */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{p.icon}</span>
                  <h4 className="text-sm font-bold text-slate-100">{p.title}</h4>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-indigo-400 border border-slate-700">
                  Trụ Cột #{p.pillarNumber}
                </span>
              </div>

              {/* Formula Badge */}
              <div className="mt-3 rounded-lg bg-indigo-950/40 p-2.5 border border-indigo-500/20 text-xs font-semibold text-indigo-300">
                <span className="text-indigo-400 font-bold">⚡ Công thức: </span>
                {p.formula}
              </div>

              {/* Core Concepts */}
              <div className="mt-3 text-xs text-slate-300 leading-relaxed">
                {p.coreConcepts}
              </div>
            </div>

            {/* Exam Trap Section */}
            <div
              className={`mt-4 rounded-lg p-3 border transition-all ${
                showExamTraps
                  ? "bg-red-500/15 border-red-500/40 shadow-inner"
                  : "bg-slate-950/60 border-slate-800/80"
              }`}
            >
              <div className="flex items-start gap-2">
                <span className="text-sm shrink-0 mt-0.5">
                  {showExamTraps ? "🚨" : "💡"}
                </span>
                <div>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wide block ${
                      showExamTraps ? "text-red-400" : "text-amber-400"
                    }`}
                  >
                    Bẫy Trắc Nghiệm Cần Khắc Cốt Ghi Tâm:
                  </span>
                  <p className="mt-0.5 text-xs text-slate-300 leading-relaxed">
                    {p.examTrap}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Navigation Tip */}
      <div className="mt-6 rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-3.5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-indigo-300">
          <span className="text-indigo-400 font-bold">🎓 Lời khuyên ôn luyện:</span>
          <span>Nắm chắc sự khác biệt giữa <strong>IdP/SP (trong FIDM)</strong> và <strong>OP/RP (trong OpenID)</strong> cùng bản chất của <strong>Bộ ba AAA</strong> để ẵm trọn 100% điểm thi trắc nghiệm!</span>
        </div>
      </div>
    </div>
  );
}
