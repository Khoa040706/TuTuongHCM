"use client";
import React, { useState } from "react";

export default function PaasArchitectureStackVisualizer() {
  // Mode: 'paas-components' (4 thành phần) | 'shared-responsibility' (IaaS vs PaaS vs SaaS)
  const [activeTab, setActiveTab] = useState("paas-components");
  const [selectedComponent, setSelectedComponent] = useState(0);
  const [activeModel, setActiveModel] = useState("paas"); // 'on-premise' | 'iaas' | 'paas' | 'saas'

  // 4 Thành phần chính của PaaS theo chuẩn giáo trình
  const paasComponents = [
    {
      id: "os",
      title: "1. Hệ Điều Hành (Operating System)",
      badge: "Nền Tảng Cốt Lõi",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      icon: "🖥️",
      role: "Cung cấp môi trường nền tảng để chạy các dịch vụ máy chủ, ứng dụng và công cụ quản trị.",
      details: [
        "Thường là các bản phân phối Linux tối ưu (Alpine, Debian, Red Hat Enterprise Linux) hoặc Windows Server.",
        "Được cấu hình hóa và container hóa, cô lập an toàn bằng cgroups và namespaces.",
        "Nhà cung cấp đám mây tự động vá các lỗ hổng bảo mật hạt nhân (Kernel patches) và cập nhật định kỳ không gián đoạn."
      ],
      developerNote: "Lập trình viên không có quyền truy cập root/SSH vào phần cứng vật lý, nhưng được bảo vệ 100% trước lỗi hệ thống tầng thấp."
    },
    {
      id: "dev-env",
      title: "2. Môi Trường Phát Triển (Development Environment)",
      badge: "Công Cụ & Runtime",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      icon: "⚙️",
      role: "Bộ SDK, trình biên dịch, công cụ gỡ lỗi (debugger) và môi trường thực thi ngôn ngữ đa dạng.",
      details: [
        "Hỗ trợ sẵn các Runtime phổ biến: Node.js (V8), Python, Java (OpenJDK), Go, .NET Core, Ruby, PHP.",
        "Tích hợp sẵn Buildpacks hoặc Dockerfile parser để tự động đóng gói mã nguồn khi đẩy lên (Git push).",
        "Tự động quản lý dependencies (npm, pip, maven, gradle, nuget) trong quá trình build."
      ],
      developerNote: "Chỉ cần chọn phiên bản runtime (ví dụ: Node.js 20 LTS hoặc Python 3.12), PaaS sẽ tự thiết lập toàn bộ môi trường thực thi chuẩn."
    },
    {
      id: "database",
      title: "3. Cơ Sở Dữ Liệu (Database Management System)",
      badge: "Kho Lưu Trữ Dữ Liệu",
      badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      icon: "🗄️",
      role: "Hệ thống quản trị cơ sở dữ liệu được cấu hình sẵn, kết nối trực tiếp với ứng dụng.",
      details: [
        "Hỗ trợ cả CSDL quan hệ (PostgreSQL, MySQL, Cloud SQL, Azure SQL) và NoSQL (MongoDB, Redis, Firestore, Cosmos DB).",
        "Tự động sao lưu dự phòng (Automated Snapshots & Daily Backups), hỗ trợ khôi phục về điểm thời gian cụ thể (PITR).",
        "Cơ chế tự động nhân bản (Replication), chuyển đổi dự phòng khi gặp sự cố (High Availability Failover) và bộ nhớ đệm (In-memory Caching)."
      ],
      developerNote: "Lập trình viên chỉ cần lấy chuỗi kết nối (Connection String / ENV variables) để truy vấn, không phải cài đặt hay bảo trì dịch vụ DB."
    },
    {
      id: "web-server",
      title: "4. Máy Chủ Web (Web Server & Ingress)",
      badge: "Cổng Giao Tiếp Mạng",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      icon: "🌐",
      role: "Xử lý các yêu cầu HTTP/HTTPS từ người dùng, cân bằng tải và phân phối lưu lượng vào ứng dụng.",
      details: [
        "Sử dụng các máy chủ web hiện đại hiệu năng cao như Nginx, Apache HTTP Server, Envoy Proxy hoặc Traefik.",
        "Tự động cấp phát và gia hạn chứng chỉ bảo mật SSL/TLS miễn phí (Let's Encrypt hoặc Wildcard certs).",
        "Tích hợp cân bằng tải thông minh (Load Balancer), quản lý tên miền tùy chỉnh (Custom Domains) và định tuyến ngược (Reverse Proxy)."
      ],
      developerNote: "Hệ thống tự động điều phối lưu lượng đến các container lành mạnh (Health check endpoints), loại bỏ các tiến trình lỗi mà không gây gián đoạn dịch vụ."
    }
  ];

  // 9 Tầng kiến trúc CNTT và ma trận trách nhiệm
  const layers = [
    { name: "Applications (Ứng dụng)", cat: "app" },
    { name: "Data (Dữ liệu)", cat: "app" },
    { name: "Runtime (Môi trường chạy)", cat: "platform" },
    { name: "Middleware (Phần mềm trung gian)", cat: "platform" },
    { name: "O/S (Hệ điều hành)", cat: "platform" },
    { name: "Virtualization (Ảo hóa)", cat: "infra" },
    { name: "Servers (Máy chủ vật lý)", cat: "infra" },
    { name: "Storage (Ổ lưu trữ)", cat: "infra" },
    { name: "Networking (Mạng)", cat: "infra" }
  ];

  // Trách nhiệm theo từng mô hình: 'user' | 'provider'
  const modelMatrix = {
    "on-premise": {
      title: "On-Premise (Tự Xây Dựng Tại Chỗ)",
      badge: "Doanh Nghiệp Quản Lý 100%",
      desc: "Doanh nghiệp tự bỏ vốn CAPEX mua sắm phần cứng, cài đặt OS, bảo trì định kỳ và chịu mọi rủi ro hỏng hóc.",
      color: "from-rose-600 to-amber-600",
      userLayers: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      providerLayers: []
    },
    iaas: {
      title: "IaaS (Infrastructure as a Service)",
      badge: "Thuê Hạ Tầng Ảo Hóa",
      desc: "Nhà cung cấp quản lý phần cứng vật lý, máy chủ, mạng và ảo hóa. Bạn tự quản lý OS, cài đặt môi trường và vận hành mã nguồn.",
      color: "from-blue-600 to-indigo-600",
      userLayers: [0, 1, 2, 3, 4],
      providerLayers: [5, 6, 7, 8]
    },
    paas: {
      title: "PaaS (Platform as a Service)",
      badge: "Tập Trung 100% Vào Ứng Dụng & Dữ Liệu",
      desc: "Nhà cung cấp quản lý toàn bộ từ hạ tầng đến OS, CSDL và Web Server. Bạn CHỈ CẦN tập trung vào 2 tầng duy nhất: Applications & Data!",
      color: "from-emerald-600 to-teal-600",
      userLayers: [0, 1],
      providerLayers: [2, 3, 4, 5, 6, 7, 8]
    },
    saas: {
      title: "SaaS (Software as a Service)",
      badge: "Nhà Cung Cấp Quản Lý Toàn Bộ 100%",
      desc: "Người dùng chỉ truy cập phần mềm hoàn thiện qua trình duyệt Web, hoàn toàn không can thiệp vào bất kỳ tầng kỹ thuật nào.",
      color: "from-amber-600 to-orange-600",
      userLayers: [],
      providerLayers: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-[#121815] via-[#141b18] to-[#0f1412] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            <span>✨ Mục I.1 &amp; I.4 • Kiến Trúc PaaS</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Kiến Trúc Nền Tảng PaaS &amp; 4 Thành Phần Cốt Lõi
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khám phá 4 thành phần thiết yếu của PaaS và ranh giới trách nhiệm chia sẻ giữa Lập trình viên vs Nhà cung cấp
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex rounded-xl bg-neutral-900/90 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab("paas-components")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all ${
              activeTab === "paas-components"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>🧱 4 Thành Phần Chính</span>
          </button>
          <button
            onClick={() => setActiveTab("shared-responsibility")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all ${
              activeTab === "shared-responsibility"
                ? "bg-teal-600 text-white shadow-lg shadow-teal-600/30"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>⚖️ Ranh Giới Trách Nhiệm</span>
          </button>
        </div>
      </div>

      {/* TAB 1: 4 THÀNH PHẦN CHÍNH CỦA PAAS */}
      {activeTab === "paas-components" && (
        <div className="mt-6 space-y-6">
          {/* Quick Selectors */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {paasComponents.map((comp, idx) => (
              <button
                key={comp.id}
                onClick={() => setSelectedComponent(idx)}
                className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                  selectedComponent === idx
                    ? "border-emerald-500 bg-emerald-950/40 shadow-md shadow-emerald-900/20"
                    : "border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 hover:bg-neutral-800/50"
                }`}
              >
                <span className="text-2xl mb-1">{comp.icon}</span>
                <span className="text-xs font-semibold text-neutral-400">Thành phần {idx + 1}</span>
                <span className="text-sm font-bold text-white line-clamp-1">{comp.title.split(". ")[1]}</span>
              </button>
            ))}
          </div>

          {/* Active Component Deep Dive Card */}
          {(() => {
            const current = paasComponents[selectedComponent];
            return (
              <div className="rounded-2xl border border-emerald-500/30 bg-neutral-900/70 p-6 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-2xl border border-emerald-500/30">
                      {current.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{current.title}</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{current.role}</p>
                    </div>
                  </div>
                  <span className={`self-start md:self-auto rounded-full border px-3 py-1 text-xs font-semibold ${current.badgeColor}`}>
                    {current.badge}
                  </span>
                </div>

                {/* Details Points */}
                <div className="mt-5 space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Chi Tiết Kỹ Thuật Trong Môi Trường PaaS:
                  </h5>
                  <ul className="space-y-2.5">
                    {current.details.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-300">
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-400">
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Developer Key Takeaway */}
                <div className="mt-5 rounded-xl border border-amber-500/30 bg-amber-950/20 p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">💡</span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Góc Nhìn Lập Trình Viên (Dev Perspective):
                      </span>
                      <p className="mt-1 text-xs text-amber-200/90 leading-relaxed">
                        {current.developerNote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Master 4 Components Summary Banner */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 text-center">
              <span className="text-xs font-bold text-blue-400">1. Operating System</span>
              <p className="text-[11px] text-neutral-400 mt-1">Linux/Windows tối ưu, cô lập container, auto-patching</p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 text-center">
              <span className="text-xs font-bold text-emerald-400">2. Dev Environment</span>
              <p className="text-[11px] text-neutral-400 mt-1">Node, Python, Java, Go, SDKs, Buildpacks tự động</p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 text-center">
              <span className="text-xs font-bold text-amber-400">3. Database</span>
              <p className="text-[11px] text-neutral-400 mt-1">SQL &amp; NoSQL có sẵn, auto-backup, replication HA</p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 text-center">
              <span className="text-xs font-bold text-purple-400">4. Web Server</span>
              <p className="text-[11px] text-neutral-400 mt-1">Nginx, Reverse Proxy, Auto-SSL, Ingress routing</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: RANH GIỚI TRÁCH NHIỆM (IaaS vs PaaS vs SaaS) */}
      {activeTab === "shared-responsibility" && (
        <div className="mt-6 space-y-6">
          {/* Model Switcher Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {Object.keys(modelMatrix).map((key) => {
              const model = modelMatrix[key];
              const isSelected = activeModel === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveModel(key)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "border-emerald-500 bg-neutral-800 shadow-md shadow-emerald-950/50"
                      : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700"
                  }`}
                >
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                    {key.toUpperCase()}
                  </span>
                  <span className="text-xs text-neutral-300 font-medium block mt-1 line-clamp-1">
                    {model.title.split(" (")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Model Description Header */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h4 className="text-base font-bold text-white">{modelMatrix[activeModel].title}</h4>
              <span className="inline-block rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-0.5 text-xs font-semibold text-emerald-400">
                {modelMatrix[activeModel].badge}
              </span>
            </div>
            <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
              {modelMatrix[activeModel].desc}
            </p>
          </div>

          {/* 9 Layers Stack Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Stack Visual */}
            <div className="lg:col-span-7 space-y-1.5">
              <div className="flex items-center justify-between text-xs text-neutral-400 px-2 pb-1 font-semibold">
                <span>9 TẦNG CÔNG NGHỆ CNTT</span>
                <span>TRÁCH NHIỆM VẬN HÀNH</span>
              </div>
              {layers.map((layer, idx) => {
                const isUser = modelMatrix[activeModel].userLayers.includes(idx);
                return (
                  <div
                    key={idx}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg border text-xs font-medium transition-all ${
                      isUser
                        ? "border-emerald-500/60 bg-emerald-950/40 text-emerald-200 shadow-sm"
                        : "border-neutral-800 bg-neutral-900/40 text-neutral-400"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-neutral-500">#{9 - idx}</span>
                      <span className={isUser ? "font-bold text-white" : "text-neutral-400"}>
                        {layer.name}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        isUser
                          ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                          : "bg-neutral-800 border-neutral-700 text-neutral-400"
                      }`}
                    >
                      {isUser ? "👤 BẠN QUẢN LÝ" : "☁️ CLOUD QUẢN LÝ"}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Analysis & Exam Tip */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-xl border border-neutral-800 bg-black/40 p-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Tỷ Lệ Quản Lý Trong {activeModel.toUpperCase()}
                </h5>
                <div className="mt-3 flex items-center gap-4">
                  <div className="text-center">
                    <span className="text-2xl font-black text-emerald-400">
                      {modelMatrix[activeModel].userLayers.length}/9
                    </span>
                    <span className="block text-[10px] text-neutral-400 uppercase">Bạn Quản Lý</span>
                  </div>
                  <div className="h-8 w-px bg-neutral-800" />
                  <div className="text-center">
                    <span className="text-2xl font-black text-teal-400">
                      {modelMatrix[activeModel].providerLayers.length}/9
                    </span>
                    <span className="block text-[10px] text-neutral-400 uppercase">Cloud Quản Lý</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>🎯</span> TRỌNG TÂM ĐỀ THI (MUST-KNOW)
                </span>
                <p className="mt-1.5 text-xs text-amber-200/90 leading-relaxed">
                  Trong mô hình <strong>PaaS</strong>, nhà phát triển (Developer) <strong>CHỈ chịu trách nhiệm cho đúng 2 tầng</strong>:{" "}
                  <strong className="text-white">Applications (Ứng dụng)</strong> và{" "}
                  <strong className="text-white">Data (Dữ liệu)</strong>. Toàn bộ 7 tầng còn lại (từ Runtime đến Networking) do nhà cung cấp đảm nhiệm!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
