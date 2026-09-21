"use client";
import React, { useState } from "react";

export default function CloudStorageArchitectureXray() {
  const [activeTab, setActiveTab] = useState("xray_stack"); // 'xray_stack' | 'csa_components' | 'request_flow'
  const [selectedLayer, setSelectedLayer] = useState(1); // 1 to 4
  const [selectedCsa, setSelectedCsa] = useState("servers"); // 'servers' | 'network' | 'management'
  const [flowStep, setFlowStep] = useState(1);

  const layers = [
    {
      id: 1,
      name: "Tầng 1: Client Layer (Lớp Khách Hàng / Ứng Dụng)",
      role: "Giao diện đầu cuối tiếp nhận thao tác của người dùng",
      badge: "Giao Tiếp Người Dùng",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      icon: "💻",
      protocols: "Web Browser (Chrome/Firefox), Mobile App, SDK (Python, Java, Go), REST API, CLI Tools (aws s3, gcloud storage).",
      details: [
        "Người dùng gửi yêu cầu tải lên (Upload - HTTP PUT/POST) hoặc tải về (Download - HTTP GET).",
        "Ứng dụng doanh nghiệp tích hợp qua SDK lập trình để lưu trữ tài liệu, video, backup database.",
        "Mã hóa phía máy khách (Client-Side Encryption) có thể được thực hiện ngay tại tầng này trước khi truyền dữ liệu đi."
      ]
    },
    {
      id: 2,
      name: "Tầng 2: Access Layer (Lớp Cổng Truy Cập & Xác Thực)",
      role: "Cổng gác cửa bảo mật kiểm tra danh tính và điều phối kết nối",
      badge: "Cổng An Ninh & REST API",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      icon: "🚪",
      protocols: "HTTPS / TLS 1.3, RESTful Endpoints, DNS Anycast, Web Application Firewall (WAF), Load Balancer.",
      details: [
        "Xác thực danh tính người dùng qua Token số, API Key hoặc chữ ký số bí mật (Secret HMAC Key).",
        "Kiểm tra tính hợp lệ của gói tin HTTP, lọc bỏ tấn công DDoS hoặc chèn mã độc vào header yêu cầu.",
        "Cân bằng tải các yêu cầu đến các máy chủ dịch vụ tối ưu gần nhất với vị trí địa lý của người dùng."
      ]
    },
    {
      id: 3,
      name: "Tầng 3: Service Layer (Lớp Dịch Vụ & Xử Lý Logic)",
      role: "Bộ não quản lý đối tượng, metadata và chính sách phân quyền",
      badge: "Quản Trị Metadata & ACL",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      icon: "🧠",
      protocols: "Metadata DB (Cassandra, Spanner), IAM Policy Engine, Object Lifecycle Manager, ACL Verifier.",
      details: [
        "Object Management: Xử lý đóng gói dữ liệu thành đối tượng (Object = Data + Metadata + Unique ID).",
        "Metadata Storage: Lưu trữ và đánh chỉ mục siêu dữ liệu (Tên file, kích thước, định dạng MIME, thời gian tạo, tag tùy biến).",
        "Access Control Lists (ACLs): Đối soát quyền đọc/ghi theo từng người dùng, phòng ban hoặc mở công khai (Public Read)."
      ]
    },
    {
      id: 4,
      name: "Tầng 4: Storage Infrastructure (Lớp Hạ Tầng Lưu Trữ Vật Lý)",
      role: "Nơi lưu trữ bit dữ liệu thực tế trên hàng triệu ổ cứng vật lý",
      badge: "Hạ Tầng Ổ Đĩa & Nhân Bản",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      icon: "🗄️",
      protocols: "Commodity Hard Drives (HDD/SSD), Erasure Coding, Multi-Region Replication, NVMe Clusters.",
      details: [
        "Chia nhỏ file thành các mảnh khối (Chunks) và phân tán lên hàng loạt máy chủ lưu trữ (Storage Servers).",
        "Áp dụng thuật toán mã hóa xóa (Erasure Coding) và nhân bản 3 bản sao (3x Replication) trên nhiều trung tâm dữ liệu độc lập.",
        "Tự động phát hiện đĩa cứng bị hỏng và tự động phục hồi dữ liệu ngầm mà không gây gián đoạn dịch vụ."
      ]
    }
  ];

  const csaComponents = {
    servers: {
      id: "servers",
      name: "1. Storage Servers (Máy Chủ Lưu Trữ Lõi)",
      badge: "Thành Phần Cốt Lõi",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      icon: "🖥️",
      summary: "Thành phần cốt lõi của CSA, chịu trách nhiệm lưu trữ dữ liệu thực tế và xử lý các yêu cầu đọc/ghi (I/O) liên tục.",
      features: [
        "Được thiết kế với dung lượng lưu trữ khổng lồ (Petabytes trên mỗi tủ rack) và hiệu năng I/O cực cao.",
        "Sử dụng phần cứng máy chủ tiêu chuẩn (Commodity hardware) nhưng được tối ưu hóa luồng làm mát và tiết kiệm điện năng.",
        "Chạy phần mềm lưu trữ phân tán quản lý trực tiếp hàng trăm ổ đĩa SAS/NVMe, tự động cách ly ổ lỗi."
      ],
      examKeyword: "Từ khóa thi: 'Thành phần cốt lõi, lưu trữ dữ liệu thực tế + xử lý yêu cầu truy cập dung lượng lớn' ➔ Storage Servers."
    },
    network: {
      id: "network",
      name: "2. Data Transfer Network (Mạng Truyền Dẫn Dữ Liệu)",
      badge: "Băng Thông Cao & Trễ Thấp",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      icon: "🌐",
      summary: "Mạng lưới kết nối giữa người dùng và máy chủ lưu trữ, bảo đảm dữ liệu truyền đi siêu tốc và an toàn tuyệt đối.",
      features: [
        "Mạng đường trục quang tốc độ cao (100GbE / 400GbE) nối liền giữa các trung tâm dữ liệu (Inter-datacenter backbone).",
        "Bảo đảm băng thông cực cao (High Bandwidth) và độ trễ cực thấp (Low Latency) cho các tệp tin media dung lượng lớn.",
        "Mã hóa toàn bộ lưu lượng trên đường truyền mạng (In-Transit Encryption) bằng chuẩn mã hóa TLS/HTTPS."
      ],
      examKeyword: "Từ khóa thi: 'Kết nối user với storage server, băng thông cao, độ trễ thấp, an toàn' ➔ Data Transfer Network."
    },
    management: {
      id: "management",
      name: "3. Management Services (Dịch Vụ Quản Trị & Giám Sát)",
      badge: "Giám Sát & Cảnh Báo",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      icon: "📊",
      summary: "Công cụ và phần mềm quản trị toàn diện hệ sinh thái lưu trữ, theo dõi hiệu năng và phát hiện sự cố.",
      features: [
        "Quản lý vòng đời tài nguyên: Tự động chuyển dữ liệu cũ ít dùng sang gói lưu trữ lưu trữ lạnh (Cold Storage / Glacier).",
        "Giám sát hiệu năng thời gian thực: Đo lường độ trễ (latency), số lượng phép tính IOPS và tỷ lệ lỗi đọc/ghi.",
        "Hệ thống cảnh báo tự động: Phát hiện tức thì tình trạng ổ cứng sắp hỏng hoặc lưu lượng tăng đột biến để điều phối dự phòng."
      ],
      examKeyword: "Từ khóa thi: 'Công cụ/phần mềm quản lý, giám sát tài nguyên, theo dõi hiệu năng, cảnh báo sự cố' ➔ Management Services."
    }
  };

  const flowSteps = [
    {
      step: 1,
      title: "1. Client Gửi Yêu Cầu (Upload/Download)",
      layer: "Tầng 1 (Client) ➔ Tầng 2 (Access)",
      icon: "📤",
      desc: "Trình duyệt hoặc ứng dụng gửi HTTP PUT kèm mã xác thực (Access Key/Token) và tệp tin qua kết nối HTTPS bảo mật."
    },
    {
      step: 2,
      title: "2. Access Layer Xác Thực & Cân Bằng Tải",
      layer: "Tầng 2 (Access Layer)",
      icon: "🛡️",
      desc: "Hệ thống kiểm tra chữ ký số HMAC, giải mã gói tin an toàn và chuyển tiếp yêu cầu đến dịch vụ điều phối đối tượng."
    },
    {
      step: 3,
      title: "3. Service Layer Xử Lý Metadata & ACL",
      layer: "Tầng 3 (Service Layer)",
      icon: "📋",
      desc: "Hệ thống cấp phát một Unique Object ID, trích xuất và lưu Metadata vào cơ sở dữ liệu phân tán, kiểm tra quyền truy cập ACL."
    },
    {
      step: 4,
      title: "4. Storage Infrastructure Nhân Bản Đa Vùng",
      layer: "Tầng 4 (Storage Infrastructure)",
      icon: "💾",
      desc: "File được băm nhỏ và ghi đồng thời lên 3 cụm máy chủ Storage Servers ở 3 vùng độc lập, sau đó trả về mã 200 OK thành công."
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-sky-500/20 bg-[#0a0f1d] p-6 shadow-2xl backdrop-blur-md">
      {/* Component Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400 font-bold text-sm">
              7.3
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
              Mục III.3 • Kiến Trúc Điện Toán Đám Mây Cho Lưu Trữ (CSA)
            </span>
          </div>
          <h3 className="mt-1 text-xl font-bold text-slate-100">
            Mặt Cắt X-Ray 4 Tầng &amp; Bộ Ba Khối Cốt Lõi Cloud Storage (CSA)
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            Bóc tách cấu trúc 4 tầng xếp chồng Top-Down và 3 thành phần kiến trúc CSA: Storage Servers, Data Transfer Network và Management Services.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex rounded-xl bg-slate-900/80 p-1 border border-slate-800">
          <button
            onClick={() => setActiveTab("xray_stack")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === "xray_stack"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🔬 Mặt Cắt 4 Tầng
          </button>
          <button
            onClick={() => setActiveTab("csa_components")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === "csa_components"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🏛️ 3 Khối CSA Cốt Lõi
          </button>
          <button
            onClick={() => setActiveTab("request_flow")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === "request_flow"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            ⚡ Luồng Xử Lý Dữ Liệu
          </button>
        </div>
      </div>

      {/* TAB 1: 4-LAYER X-RAY STACK */}
      {activeTab === "xray_stack" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left 4 Layers Stack (4 cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Sơ Đồ 4 Lớp Xếp Chồng (Top-Down):
              </span>
              {layers.map((l) => {
                const isSelected = selectedLayer === l.id;
                return (
                  <button
                    key={l.id}
                    onClick={() => setSelectedLayer(l.id)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "border-sky-500 bg-sky-950/60 ring-2 ring-sky-500/40 shadow-lg shadow-sky-500/10"
                        : "border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/80"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{l.icon}</span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-100">{l.name.split(":")[1]}</h4>
                        <span className="text-[11px] text-slate-400 line-clamp-1">{l.role}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-sky-400 font-bold ml-2">
                      L{l.id}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Layer Detail Panel (7 cols) */}
            {(() => {
              const cur = layers[selectedLayer - 1];
              return (
                <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-3xl">{cur.icon}</span>
                      <div>
                        <h4 className="text-base font-bold text-slate-100">{cur.name}</h4>
                        <span className="text-xs text-sky-400 font-medium">{cur.role}</span>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${cur.badgeColor}`}>
                      {cur.badge}
                    </span>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      📋 Chức Năng Cốt Lõi:
                    </h5>
                    <div className="space-y-1.5">
                      {cur.details.map((d, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-sky-400 font-bold mt-0.5">•</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider block">
                      Giao Thức &amp; Công Nghệ Thực Thi:
                    </span>
                    <p className="text-xs font-mono text-sky-300 leading-relaxed">
                      {cur.protocols}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* TAB 2: 3 CSA CORE COMPONENTS */}
      {activeTab === "csa_components" && (
        <div className="mt-6 space-y-6">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 flex items-center gap-3">
            <span className="text-3xl">🏛️</span>
            <div>
              <h4 className="text-sm font-bold text-emerald-200">
                Chi Tiết 3 Thành Phần Kiến Trúc CSA (Cloud Storage Architecture)
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Ba trụ cột hạ tầng bảo đảm hệ thống Cloud Storage vận hành trơn tru: Máy chủ lưu trữ, Mạng truyền dẫn và Dịch vụ quản lý.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.values(csaComponents).map((c) => {
              const isSelected = selectedCsa === c.id;
              return (
                <div
                  key={c.id}
                  onClick={() => setSelectedCsa(c.id)}
                  className={`cursor-pointer rounded-xl border p-4 transition-all flex flex-col justify-between ${
                    isSelected
                      ? "border-sky-500 bg-sky-950/40 ring-1 ring-sky-500/50 shadow-lg"
                      : "border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-800/40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{c.icon}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${c.badgeColor}`}>
                        {c.badge}
                      </span>
                    </div>
                    <h5 className="mt-2.5 text-sm font-bold text-slate-100">{c.name}</h5>
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed">{c.summary}</p>

                    <div className="mt-3 space-y-1 text-xs text-slate-400">
                      {c.features.map((f, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <span className="text-sky-400 font-bold">•</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 rounded bg-slate-950/80 p-2.5 text-[11px] text-amber-300 border border-amber-500/20">
                    {c.examKeyword}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: REQUEST FLOW SIMULATOR */}
      {activeTab === "request_flow" && (
        <div className="mt-6 space-y-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {flowSteps.map((s) => {
              const isActive = flowStep === s.step;
              const isPast = flowStep &gt; s.step;
              return (
                <button
                  key={s.step}
                  onClick={() => setFlowStep(s.step)}
                  className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                    isActive
                      ? "border-sky-500 bg-sky-950/60 ring-2 ring-sky-500/40 shadow-lg"
                      : isPast
                      ? "border-emerald-500/40 bg-emerald-950/20 text-emerald-400"
                      : "border-slate-800 bg-slate-900/40 text-slate-500 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xl">{s.icon}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      Bước {s.step}
                    </span>
                  </div>
                  <span className="mt-2 text-xs font-bold text-slate-200 truncate w-full">
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Current Step Display Card */}
          {(() => {
            const cur = flowSteps[flowStep - 1];
            return (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cur.icon}</span>
                    <div>
                      <h4 className="text-base font-bold text-slate-100">{cur.title}</h4>
                      <span className="text-xs font-mono text-sky-400 font-semibold">{cur.layer}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      disabled={flowStep === 1}
                      onClick={() => setFlowStep((p) => Math.max(1, p - 1))}
                      className="px-3 py-1 text-xs rounded-lg border border-slate-700 bg-slate-800 text-slate-300 disabled:opacity-40"
                    >
                      ← Trước
                    </button>
                    <button
                      disabled={flowStep === 4}
                      onClick={() => setFlowStep((p) => Math.min(4, p + 1))}
                      className="px-3 py-1 text-xs rounded-lg border border-sky-600 bg-sky-600 text-white disabled:opacity-40"
                    >
                      Tiếp →
                    </button>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cur.desc}
                </p>

                <div className="rounded-lg bg-sky-950/30 p-3 border border-sky-500/20 text-xs text-sky-200 flex items-center gap-2">
                  <span className="text-base">💡</span>
                  <span>
                    Dữ liệu được lưu trữ phân tán và tự động nhân bản (Replication) trên nhiều server nhằm đảm bảo <strong>Availability</strong> (Độ sẵn sàng) và <strong>Security</strong> (Bảo mật).
                  </span>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Footer Rule Callout */}
      <div className="mt-6 rounded-xl border border-slate-800/80 bg-slate-950/80 p-3.5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="text-sky-400 font-bold">💡 Khẩu quyết kiến trúc:</span>
          <span>4 Lớp Top-Down: <strong>Client ➔ Access ➔ Service ➔ Storage Infrastructure</strong>.</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          <span>Mục III.3 &amp; III.4 • Giáo trình chính thức</span>
        </div>
      </div>
    </div>
  );
}
