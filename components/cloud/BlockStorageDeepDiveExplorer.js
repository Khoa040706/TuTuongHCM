"use client";
import React, { useState } from "react";

export default function BlockStorageDeepDiveExplorer() {
  const [activeTab, setActiveTab] = useState("anatomy"); // 'anatomy' | 'providers' | 'applications' | 'challenges'
  const [selectedEnvironment, setSelectedEnvironment] = useState("database"); // 'database' | 'vm' | 'enterprise_app'
  const [iopsValue, setIopsValue] = useState(16000);
  const [isMounted, setIsMounted] = useState(true);
  const [activeChallengePair, setActiveChallengePair] = useState("security");

  const environments = {
    database: {
      name: "Cơ Sở Dữ Liệu (Database Storage)",
      useCase: "Oracle / MySQL / PostgreSQL / SQL Server",
      icon: "🗄️",
      recommendedType: "SSD Provisioned IOPS (io2 / Ultra Disk)",
      desc: "Yêu cầu tốc độ đọc/ghi I/O ngẫu nhiên liên tục ở mức mili-giây cực nhỏ. Block Storage hoạt động như ổ đĩa vật lý trực tiếp không qua tầng trừu tượng tệp.",
      metric: "Latency: 0.8ms | IOPS: Lên tới 64,000"
    },
    vm: {
      name: "Máy Ảo (Virtual Machine Storage)",
      useCase: "Boot Volume cho AWS EC2 / Azure VM / GCE",
      icon: "🖥️",
      recommendedType: "General Purpose SSD (gp3 / Balanced PD)",
      desc: "Lưu trữ phân vùng hệ điều hành (/root, C:\\) và swap memory. Cung cấp khả năng gắn/tháo linh hoạt giữa các máy ảo khi xảy ra sự cố phần cứng.",
      metric: "Boot time: 12s | Độc lập với vòng đời VM"
    },
    enterprise_app: {
      name: "Ứng Dụng Doanh Nghiệp (Enterprise Application)",
      useCase: "Hệ thống ERP / CRM / SAP HANA / E-Commerce Core",
      icon: "🏢",
      recommendedType: "High-Throughput Block Volume",
      desc: "Đòi hỏi tính nhất quán dữ liệu nghiêm ngặt (Strict Consistency) và khả năng tăng kích thước đĩa (Volume expansion) tức thời không cần gián đoạn dịch vụ.",
      metric: "Độ sẵn sàng: 99.999% | Bền vững đa vùng"
    }
  };

  const blockProviders = {
    ebs: {
      name: "Amazon Elastic Block Store (EBS)",
      provider: "AWS (Amazon Web Services)",
      icon: "🟠",
      types: ["gp3 (General Purpose SSD)", "io2 Block Express (Cực đại 256,000 IOPS)", "st1 / sc1 (Throughput Optimized HDD)"],
      highlight: "Gắn liền với EC2, hỗ trợ Snapshot đa vùng lưu vào S3 và mã hóa KMS tự động.",
      durability: "99.8% - 99.999% độ bền hàng năm"
    },
    gpd: {
      name: "Google Persistent Disk",
      provider: "Google Cloud Platform (GCP)",
      icon: "🔴",
      types: ["Standard Persistent Disk (HDD)", "Balanced PD (SSD cân bằng)", "SSD Persistent Disk", "Extreme PD"],
      highlight: "Gắn linh hoạt vào Google Compute Engine, hỗ trợ đọc đa máy chủ (Multi-reader) và mã hóa mặc định.",
      durability: "Tự động nhân bản trong Zone hoặc Regional Persistent Disk"
    },
    azure_disks: {
      name: "Microsoft Azure Managed Disks",
      provider: "Microsoft Azure",
      icon: "🔵",
      types: ["Ultra Disk Storage (Dành cho DB khắt khe nhất)", "Premium SSD v2", "Standard SSD", "Standard HDD"],
      highlight: "Tích hợp sâu với Azure Virtual Machines, tự động dự phòng lưu trữ mà không cần quản lý tài khoản lưu trữ.",
      durability: "Hỗ trợ LRS (Locally Redundant) và ZRS (Zone-Redundant)"
    }
  };

  const challengeSolutionPairs = {
    security: {
      id: "security",
      challengeTitle: "Bảo mật dữ liệu (Data Security)",
      solutionTitle: "Mã hóa dữ liệu (Data Encryption)",
      icon: "🔐",
      challengeDetail: "Nguy cơ bị đọc lén khối dữ liệu thô trên đĩa lưu trữ vật lý hoặc đánh cắp đĩa snapshot.",
      solutionDetail: "Kích hoạt mã hóa cấp độ Volume chuẩn AES-256 với khóa quản lý riêng (Customer Managed Key - CMK/KMS). Mọi block được mã hóa trước khi ghi vào đĩa.",
      statusColor: "emerald"
    },
    performance: {
      id: "performance",
      challengeTitle: "Hiệu suất & độ trễ (Performance & Latency)",
      solutionTitle: "Sao lưu và phục hồi (Backup and Recovery)",
      icon: "⚡",
      challengeDetail: "Nghẽn cổ chai I/O khi khối lượng đọc/ghi ngẫu nhiên tăng đột biến gây trễ ứng dụng.",
      solutionDetail: "Sử dụng đĩa SSD NVMe chuyên dụng, kết hợp tạo Snapshot định kỳ không ngắt quãng (Point-in-time snapshot) và phục hồi nhanh sang volume mới.",
      statusColor: "sky"
    },
    cost: {
      id: "cost",
      challengeTitle: "Quản lý & tối ưu chi phí (Cost Management)",
      solutionTitle: "Quản lý tài nguyên (Resource Management)",
      icon: "💰",
      challengeDetail: "Chi phí tăng vọt khi cấp phát dư thừa dung lượng đĩa và IOPS nhàn rỗi không sử dụng (Over-provisioning).",
      solutionDetail: "Thực hiện Resource Management: Định kỳ quét các unattached volumes (ổ đĩa mồ côi), tự động hạ cấp volume nhàn rỗi và co giãn IOPS theo nhu cầu.",
      statusColor: "amber"
    },
    compliance: {
      id: "compliance",
      challengeTitle: "Tuân thủ quy định (Regulatory Compliance)",
      solutionTitle: "Đảm bảo tuân thủ (Compliance Assurance)",
      icon: "⚖️",
      challengeDetail: "Các yêu cầu pháp lý nghiêm ngặt về lưu trữ dữ liệu tài chính/y tế trong phạm vi quốc gia.",
      solutionDetail: "Áp dụng chính sách Compliance Assurance: Khóa cứng vị trí lưu trữ Block Storage trong vùng địa lý quy định, cấu hình kiểm toán truy cập bất biến.",
      statusColor: "indigo"
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-sky-500/20 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-900/90 p-5 shadow-2xl backdrop-blur-xl sm:p-7 text-slate-100">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-sky-500/20 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
            <span>Mục VII</span>
            <span className="h-1 w-1 rounded-full bg-sky-400" />
            <span>Block Storage &amp; Giải Phẫu Đĩa Khối</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
            Block Storage Deep Dive Explorer
          </h3>
          <p className="text-xs text-sky-200/70 sm:text-sm">
            Dữ liệu chia thành Block + ID riêng → Nhanh, linh hoạt, tối ưu cho Database &amp; Virtual Machine
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-1 rounded-xl border border-slate-700/50 bg-slate-950/70 p-1">
          <button
            onClick={() => setActiveTab("anatomy")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeTab === "anatomy"
                ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🔬 Cơ Chế Khối
          </button>
          <button
            onClick={() => setActiveTab("providers")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeTab === "providers"
                ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            💽 3 Loại Đĩa Khối
          </button>
          <button
            onClick={() => setActiveTab("applications")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeTab === "applications"
                ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🚀 Ứng Dụng Thực Tế
          </button>
          <button
            onClick={() => setActiveTab("challenges")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeTab === "challenges"
                ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            ⚖️ 4 Cặp Thách Thức
          </button>
        </div>
      </div>

      {/* TAB 1: BLOCK ANATOMY & MOUNT SANDBOX (MỤC VII.1 & VII.3) */}
      {activeTab === "anatomy" && (
        <div className="mt-6 space-y-6">
          {/* Slogan Alert */}
          <div className="rounded-xl border border-sky-400/40 bg-sky-950/30 p-4 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              🔑 KHẨU QUYẾT BẤT BIẾN BLOCK STORAGE
            </span>
            <div className="mt-1 text-base font-extrabold text-white sm:text-lg">
              Block Storage = Dữ liệu chia thành <span className="text-sky-400">Block + Unique ID riêng</span> → Nhanh, linh hoạt, phù hợp <span className="text-emerald-400">Database &amp; Virtual Machine</span>
            </div>
          </div>

          {/* Interactive Block Decomposition Visualizer */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                MÔ PHỎNG GIẢI PHẪU DỮ LIỆU CẤP ĐỘ KHỐI (4KB BLOCKS)
              </span>
              <span className="rounded-md bg-sky-500/20 px-2 py-0.5 text-[11px] font-semibold text-sky-300">
                Raw Block Device
              </span>
            </div>

            <p className="mt-3 text-xs text-slate-300">
              Khác với Object Storage (lưu toàn bộ tệp với metadata) hay File Storage (cây thư mục), <strong>Block Storage</strong> xé nhỏ tệp thành các khối kích thước cố định (ví dụ 4KB), mỗi khối được đánh dấu bằng một <strong>Unique Identifier</strong> và lưu trữ độc lập.
            </p>

            {/* Block Grid representation */}
            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {[
                { id: "BLK-0x8F1A", index: 0, size: "4 KB", data: "Data Payload [Sector 0-7]", status: "Allocated" },
                { id: "BLK-0x3C2B", index: 1, size: "4 KB", data: "Index Tree Leaf [Sector 8-15]", status: "Allocated" },
                { id: "BLK-0x9D4E", index: 2, size: "4 KB", data: "Transactional Log [WAL]", status: "Allocated" },
                { id: "BLK-0x1F80", index: 3, size: "4 KB", data: "Table Row Header [0x00A0]", status: "Allocated" }
              ].map((blk) => (
                <div key={blk.id} className="rounded-xl border border-sky-500/30 bg-slate-900/80 p-3 shadow">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold text-sky-400">{blk.id}</span>
                    <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-[9px] font-bold text-emerald-400">
                      {blk.size}
                    </span>
                  </div>
                  <div className="mt-2 text-xs font-medium text-white truncate">{blk.data}</div>
                  <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Block #{blk.index}</span>
                    <span className="text-emerald-400">Unique ID Verified</span>
                  </div>
                </div>
              ))}
            </div>

            {/* IOPS & Latency Control Benchmark */}
            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    ⚡ Thử nghiệm điều chỉnh IOPS (Input/Output Operations Per Second)
                  </h5>
                  <p className="text-[11px] text-slate-400">
                    Kéo thanh trượt để trải nghiệm hiệu năng I/O cực cao và độ trễ cực thấp
                  </p>
                </div>
                <div className="font-mono text-sm font-bold text-emerald-400 bg-slate-950 px-3 py-1 rounded-lg border border-emerald-500/30">
                  {iopsValue.toLocaleString()} IOPS
                </div>
              </div>

              <input
                type="range"
                min="3000"
                max="64000"
                step="1000"
                value={iopsValue}
                onChange={(e) => setIopsValue(Number(e.target.value))}
                className="mt-3 w-full accent-sky-400 cursor-pointer"
              />

              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="rounded-lg bg-slate-950/60 p-2 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Độ Trễ I/O</div>
                  <div className="font-bold text-sky-300">
                    {(1.5 - (iopsValue / 64000) * 0.9).toFixed(2)} ms
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/60 p-2 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Băng Thông Đọc/Ghi</div>
                  <div className="font-bold text-emerald-300">
                    {Math.round((iopsValue * 16) / 1024)} MB/s
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/60 p-2 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Độ Bền Dự Báo</div>
                  <div className="font-bold text-amber-300">99.999%</div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Core Benefits Grid (Mục VII.3) */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-sky-500/20 bg-sky-950/20 p-3.5">
              <div className="text-xl">🚀</div>
              <div className="mt-1 font-bold text-sky-300 text-xs">High Performance</div>
              <p className="mt-1 text-[11px] text-slate-400">
                Hiệu suất đọc/ghi I/O vượt trội, độ trễ mili-giây cực thấp cho database.
              </p>
            </div>
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-3.5">
              <div className="text-xl">📈</div>
              <div className="mt-1 font-bold text-emerald-300 text-xs">Scalability</div>
              <p className="mt-1 text-[11px] text-slate-400">
                Mở rộng dung lượng và tốc độ IOPS tức thì mà không cần dừng máy ảo.
              </p>
            </div>
            <div className="rounded-xl border border-amber-500/20 bg-amber-950/20 p-3.5">
              <div className="text-xl">🛡️</div>
              <div className="mt-1 font-bold text-amber-300 text-xs">Availability &amp; Durability</div>
              <p className="mt-1 text-[11px] text-slate-400">
                Tự động nhân bản trong Zone bảo vệ an toàn trước sự cố hỏng hóc đĩa vật lý.
              </p>
            </div>
            <div className="rounded-xl border border-violet-500/20 bg-violet-950/20 p-3.5">
              <div className="text-xl">🔌</div>
              <div className="mt-1 font-bold text-violet-300 text-xs">Integration &amp; Compatibility</div>
              <p className="mt-1 text-[11px] text-slate-400">
                Tương thích tuyệt đối với mọi hệ điều hành (Ext4, NTFS, XFS) như ổ cứng thật.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 3 POPULAR BLOCK STORAGE TYPES (MỤC VII.2) */}
      {activeTab === "providers" && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-xs text-slate-300">
            Giáo trình định danh rõ <strong className="text-sky-300">3 loại Block Storage phổ biến</strong> đến từ 3 nhà cung cấp đám mây hàng đầu thế giới:
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {Object.entries(blockProviders).map(([key, item]) => (
              <div key={key} className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">{item.provider}</span>
                  </div>
                  <h4 className="mt-3 font-bold text-white text-base">{item.name}</h4>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">{item.highlight}</p>
                  
                  <div className="mt-4 space-y-1.5 text-[11px]">
                    <div className="font-semibold text-sky-400">Các dòng ổ đĩa hỗ trợ:</div>
                    {item.types.map((t, idx) => (
                      <div key={idx} className="rounded bg-slate-950/60 px-2 py-1 text-slate-300">• {t}</div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-400 font-medium">
                  ✓ {item.durability}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: 3 CORE APPLICATIONS (MỤC VII.4) */}
      {activeTab === "applications" && (
        <div className="mt-6 space-y-6">
          {/* Selector */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {Object.entries(environments).map(([key, env]) => {
              const isSelected = selectedEnvironment === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedEnvironment(key)}
                  className={`rounded-xl border p-4 text-left transition-all ${
                    isSelected
                      ? "border-sky-400 bg-sky-500/15 ring-2 ring-sky-400/40 shadow-lg"
                      : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
                  }`}
                >
                  <div className="text-2xl">{env.icon}</div>
                  <h4 className="mt-2 font-bold text-white text-sm">{env.name}</h4>
                  <div className="text-xs text-slate-400 mt-0.5">{env.useCase}</div>
                </button>
              );
            })}
          </div>

          {/* Mount Sandbox */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase">ỨNG DỤNG MỤC VII.4</span>
                <h4 className="text-base font-bold text-white mt-0.5">
                  {environments[selectedEnvironment].name}
                </h4>
              </div>
              <button
                onClick={() => setIsMounted(!isMounted)}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                  isMounted
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "bg-red-500/20 text-red-300 border border-red-500/40"
                }`}
              >
                {isMounted ? "● ĐÃ GẮN ĐĨA (MOUNTED)" : "○ CHƯA GẮN (DETACHED)"}
              </button>
            </div>

            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {environments[selectedEnvironment].desc}
            </p>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs">
              <div className="rounded-lg bg-slate-900/70 p-3 border border-slate-800">
                <span className="font-semibold text-slate-400">Loại đĩa khuyến nghị:</span>
                <div className="mt-1 font-bold text-sky-300">
                  {environments[selectedEnvironment].recommendedType}
                </div>
              </div>
              <div className="rounded-lg bg-slate-900/70 p-3 border border-slate-800">
                <span className="font-semibold text-slate-400">Chỉ số cam kết SLA:</span>
                <div className="mt-1 font-bold text-emerald-300">
                  {environments[selectedEnvironment].metric}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: 4 CHALLENGE-SOLUTION PAIRS (MỤC VII.5) */}
      {activeTab === "challenges" && (
        <div className="mt-6 space-y-6">
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
            <h4 className="text-sm font-bold text-white">
              Ma Trận 4 Cặp Thách Thức &amp; Giải Pháp Đối Ứng (Mục VII.5)
            </h4>
            <p className="mt-1 text-xs text-slate-400">
              Mỗi thách thức khi triển khai Block Storage đều có một giải pháp kỹ thuật tương ứng theo chuẩn giáo trình
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {Object.entries(challengeSolutionPairs).map(([key, pair]) => {
              const isSelected = activeChallengePair === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveChallengePair(key)}
                  className={`rounded-xl border p-4 text-left transition-all ${
                    isSelected
                      ? "border-sky-400 bg-sky-950/30 ring-1 ring-sky-400/50 shadow-md"
                      : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl">{pair.icon}</span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase">Cặp {key}</span>
                  </div>
                  <div className="mt-2 text-xs font-bold text-red-300">
                    ⚠️ Thách thức: {pair.challengeTitle}
                  </div>
                  <div className="mt-1 text-xs font-bold text-emerald-300">
                    🛡️ Giải pháp: {pair.solutionTitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Solution Banner */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-5">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <span className="text-2xl">{challengeSolutionPairs[activeChallengePair].icon}</span>
              <h4 className="font-bold text-white text-base">
                Chi Tiết Cặp: {challengeSolutionPairs[activeChallengePair].challengeTitle} ↔ {challengeSolutionPairs[activeChallengePair].solutionTitle}
              </h4>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs">
              <div className="rounded-xl bg-red-950/20 border border-red-500/20 p-4">
                <span className="font-bold text-red-300">Phân tích Thách thức:</span>
                <p className="mt-1 text-slate-300 leading-relaxed">
                  {challengeSolutionPairs[activeChallengePair].challengeDetail}
                </p>
              </div>

              <div className="rounded-xl bg-emerald-950/20 border border-emerald-500/20 p-4">
                <span className="font-bold text-emerald-300">Giải pháp thực thi chuẩn:</span>
                <p className="mt-1 text-slate-300 leading-relaxed">
                  {challengeSolutionPairs[activeChallengePair].solutionDetail}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
