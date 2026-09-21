"use client";
import React, { useState } from "react";

export default function CloudNasStorageExplorer() {
  const [activeTab, setActiveTab] = useState("architecture"); // 'architecture' | 'benefits' | 'providers'
  const [selectedProvider, setSelectedProvider] = useState("fsx");
  const [connectedDevice, setConnectedDevice] = useState("all");

  const devices = [
    { id: "all", name: "Tất Cả Thiết Bị", icon: "🌐" },
    { id: "laptop", name: "Laptop Văn Phòng (SMB)", icon: "💻" },
    { id: "mobile", name: "Điện Thoại / Tablet (HTTPS)", icon: "📱" },
    { id: "server", name: "Cụm Web / Database Server (NFS)", icon: "🖥️" },
    { id: "workstation", name: "Máy Trạm Thiết Kế / AI (HPC Mount)", icon: "⚡" }
  ];

  const benefits = [
    {
      id: "access",
      title: "1. Truy Cập Mọi Lúc Mọi Nơi",
      icon: "🌍",
      color: "blue",
      desc: "Người dùng và ứng dụng có thể truy cập, chỉnh sửa và chia sẻ tập tin từ bất kỳ đâu trên thế giới chỉ cần có kết nối Internet.",
      metric: "Uptime 99.99%",
      detail: "Xóa bỏ rào cản vật lý của mạng nội bộ (LAN), kết nối mượt mà cho nhân sự làm việc từ xa (Remote Work) và các chi nhánh toàn cầu."
    },
    {
      id: "scalability",
      title: "2. Khả Năng Mở Rộng Linh Hoạt",
      icon: "📈",
      color: "emerald",
      desc: "Tự động co giãn hoặc tăng dung lượng lưu trữ từ vài Gigabytes lên hàng trăm Petabytes chỉ sau vài cú nhấp chuột.",
      metric: "Tăng dung lượng 0s Downtime",
      detail: "Không cần mua thêm ổ cứng vật lý, không cần tháo lắp máy chủ hay gián đoạn hệ thống đang chạy."
    },
    {
      id: "security",
      title: "3. Bảo Mật Cao & Tuân Thủ Chuẩn",
      icon: "🔒",
      color: "purple",
      desc: "Mã hóa dữ liệu đa tầng (At-rest & In-transit), tích hợp kiểm soát truy cập phân quyền chi tiết (RBAC) và sao lưu tự động.",
      metric: "Mã Hóa Chuẩn AES-256",
      detail: "Tích hợp dịch vụ định danh doanh nghiệp (Active Directory, LDAP), giám sát nhật ký truy cập chống rò rỉ dữ liệu."
    },
    {
      id: "management",
      title: "4. Quản Lý Trực Quan Qua Dashboard",
      icon: "📊",
      color: "amber",
      desc: "Giao diện điều khiển Web thân thiện, phân tích hạn ngạch dung lượng và cấu hình phân quyền chỉ trong vài giây.",
      metric: "1-Click Management",
      detail: "Giảm thiểu 80% gánh nặng vận hành cho đội ngũ IT so với việc bảo trì các hệ thống NAS vật lý tại chỗ."
    }
  ];

  const providers = {
    nirvanix: {
      id: "nirvanix",
      name: "Nirvanix CloudNAS",
      vendor: "Nirvanix Inc. (Pioneer Solution)",
      badge: "Lưu Trữ Tệp Kết Hợp Đối Tượng",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      description: "Giải pháp lưu trữ tệp đám mây tiên phong cho phép các ứng dụng truyền thống gắn kết nối (mount) vào kho lưu trữ đối tượng khổng lồ thông qua giao thức NAS chuẩn.",
      protocols: "NFS v3, CIFS/SMB, REST API",
      performance: "Tối ưu hóa cho lưu trữ dài hạn (Archival) và dữ liệu phi cấu trúc dung lượng lớn.",
      useCases: "Sao lưu sao chép dữ liệu doanh nghiệp quy mô lớn, lưu trữ tư liệu số phát thanh truyền hình."
    },
    fsx: {
      id: "fsx",
      name: "Amazon FSx for NetApp ONTAP",
      vendor: "Amazon Web Services (AWS) + NetApp",
      badge: "Hiệu Năng Cao Cấp • Enterprise Grade",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      description: "Dịch vụ lưu trữ dùng chung được quản lý toàn diện trên AWS, xây dựng trên nền tảng hệ điều hành tệp tin phổ biến nhất thế giới NetApp ONTAP.",
      protocols: "NFS, SMB/CIFS, iSCSI (Đa giao thức đồng thời)",
      performance: "Độ trễ dưới 1 mili-giây, băng thông hàng chục GB/s, IOPS lên tới hàng trăm ngàn.",
      useCases: "Di chuyển ứng dụng doanh nghiệp (SAP, Oracle), điện toán hiệu năng cao (HPC), máy học và ảo hóa máy trạm (VDI)."
    },
    filestore: {
      id: "filestore",
      name: "Google Cloud Filestore",
      vendor: "Google Cloud Platform (GCP)",
      badge: "Managed NFS Siêu Tốc Cho Kubernetes",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      description: "Hệ thống lưu trữ tệp dạng mạng (NFS) được quản lý hoàn toàn bởi Google, kết nối mượt mà với Google Compute Engine và Google Kubernetes Engine (GKE).",
      protocols: "NFS v3, NFS v4.1",
      performance: "Truy cập tệp có tính nhất quán cao (POSIX-compliant), độ trễ thấp tối ưu cho cụm container.",
      useCases: "Quản trị nội dung web phân tán (WordPress/Drupal), phân tích hình ảnh/video, cơ sở dữ liệu phân tán dùng chung tệp."
    }
  };

  const currentProv = providers[selectedProvider];

  return (
    <div className="my-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#101724] via-[#121a28] to-[#0e1420] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
            <span>🗄️ Mục VI • Cloud-based NAS (Network Attached Storage)</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Khám Phá Cloud NAS: Máy Chủ Lưu Trữ Tập Trung &amp; 3 Giải Pháp Lớn
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Tìm hiểu nguyên lý Centralized Storage Server, 4 lợi ích chuyển đổi số và đối soát bộ ba Nirvanix, AWS FSx ONTAP, Google Filestore.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex rounded-xl bg-neutral-900/80 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "architecture"
                ? "bg-blue-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Mô Hình Tập Trung
          </button>
          <button
            onClick={() => setActiveTab("benefits")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "benefits"
                ? "bg-emerald-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            4 Lợi Ích Cốt Lõi
          </button>
          <button
            onClick={() => setActiveTab("providers")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "providers"
                ? "bg-purple-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            3 Nhà Cung Cấp
          </button>
        </div>
      </div>

      {/* TAB 1: MÔ HÌNH TẬP TRUNG */}
      {activeTab === "architecture" && (
        <div className="mt-6 space-y-6">
          {/* Device Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-neutral-400">Xem luồng truy cập từ thiết bị:</span>
            {devices.map((d) => (
              <button
                key={d.id}
                onClick={() => setConnectedDevice(d.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all flex items-center gap-1.5 ${
                  connectedDevice === d.id
                    ? "bg-blue-600 text-white border-blue-500 shadow"
                    : "bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-neutral-200"
                }`}
              >
                <span>{d.icon}</span>
                <span>{d.name}</span>
              </button>
            ))}
          </div>

          {/* Centralized Storage Diagram */}
          <div className="rounded-xl border border-blue-500/30 bg-neutral-950/80 p-6 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              {/* Left Column: Client Devices */}
              <div className="space-y-3">
                <div className="text-xs uppercase font-bold text-neutral-400 tracking-wider mb-2">
                  1. Thiết Bị &amp; Máy Chủ Khách (Clients)
                </div>
                <div
                  className={`p-3 rounded-lg border text-xs transition-all ${
                    connectedDevice === "all" || connectedDevice === "laptop"
                      ? "border-blue-500/50 bg-blue-950/20 text-neutral-200"
                      : "border-neutral-800 bg-neutral-900/30 text-neutral-500 opacity-60"
                  }`}
                >
                  <div className="font-bold flex items-center gap-2">
                    <span>💻 Laptop &amp; PC Văn Phòng</span>
                  </div>
                  <div className="text-neutral-400 mt-1">Truy cập thư mục chia sẻ qua giao thức SMB/CIFS như ổ đĩa mạng nội bộ (Z:\).</div>
                </div>

                <div
                  className={`p-3 rounded-lg border text-xs transition-all ${
                    connectedDevice === "all" || connectedDevice === "mobile"
                      ? "border-emerald-500/50 bg-emerald-950/20 text-neutral-200"
                      : "border-neutral-800 bg-neutral-900/30 text-neutral-500 opacity-60"
                  }`}
                >
                  <div className="font-bold flex items-center gap-2">
                    <span>📱 Di Động &amp; Chi Nhánh Từ Xa</span>
                  </div>
                  <div className="text-neutral-400 mt-1">Đồng bộ ảnh/tài liệu qua HTTPS WebDAV và cổng xác thực SSO.</div>
                </div>

                <div
                  className={`p-3 rounded-lg border text-xs transition-all ${
                    connectedDevice === "all" || connectedDevice === "server"
                      ? "border-amber-500/50 bg-amber-950/20 text-neutral-200"
                      : "border-neutral-800 bg-neutral-900/30 text-neutral-500 opacity-60"
                  }`}
                >
                  <div className="font-bold flex items-center gap-2">
                    <span>🖥️ Cụm Máy Chủ Web &amp; Ứng Dụng</span>
                  </div>
                  <div className="text-neutral-400 mt-1">Mount đồng thời qua NFS v4, chia sẻ chung thư mục mã nguồn và file tải lên.</div>
                </div>
              </div>

              {/* Middle Column: Cloud Network & Gateway */}
              <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 text-center space-y-3">
                <div className="text-3xl animate-bounce">⚡</div>
                <div className="font-bold text-sm text-white">Đường Truyền Mạng &amp; Mã Hóa</div>
                <div className="text-xs text-neutral-400">
                  Kết nối an toàn qua Internet công cộng bằng VPN, TLS/SSL và giao thức lưu trữ tiêu chuẩn (NFS, SMB, iSCSI).
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 font-mono">
                  AES-256 In-Transit
                </div>
              </div>

              {/* Right Column: Centralized NAS Server */}
              <div className="rounded-xl border border-blue-500/60 bg-blue-950/30 p-5 space-y-3 shadow-xl shadow-blue-950/50">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    2. Máy Chủ Lưu Trữ Tập Trung
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                    ONLINE
                  </span>
                </div>
                <h4 className="text-lg font-black text-white">Centralized Cloud NAS Server</h4>
                <p className="text-xs text-neutral-300">
                  Đóng vai trò là trung tâm duy nhất quản lý toàn bộ tệp tin, cấp quyền người dùng, tự động sao lưu và cung cấp dung lượng tức thì.
                </p>

                <div className="space-y-1.5 text-xs text-neutral-300">
                  <div className="flex justify-between border-b border-blue-500/20 pb-1">
                    <span className="text-neutral-400">Dung lượng:</span>
                    <span className="font-bold text-white">100 TB (Tự co giãn)</span>
                  </div>
                  <div className="flex justify-between border-b border-blue-500/20 pb-1">
                    <span className="text-neutral-400">Phân quyền:</span>
                    <span className="font-bold text-emerald-400">RBAC &amp; ACLs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Giao thức hỗ trợ:</span>
                    <span className="font-mono text-amber-300">NFS / SMB / CIFS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 text-xs text-neutral-300">
            <span className="font-bold text-blue-400">📌 Định nghĩa giáo trình: </span>
            <span className="italic">
              &quot;Cloud-based NAS là thiết bị lưu trữ kết nối mạng cho phép người dùng truy cập và chia sẻ dữ liệu từ bất kỳ thiết bị nào qua kết nối Internet, đóng vai trò như một máy chủ lưu trữ tập trung (centralized storage server).&quot;
            </span>
          </div>
        </div>
      )}

      {/* TAB 2: 4 LỢI ÍCH CỐT LÕI */}
      {activeTab === "benefits" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div
                key={b.id}
                className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 hover:border-blue-500/40 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{b.icon}</span>
                    <div>
                      <h4 className="font-bold text-base text-white">{b.title}</h4>
                      <span className="text-xs font-semibold text-emerald-400">{b.metric}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-neutral-300">{b.desc}</p>
                <div className="rounded-lg bg-neutral-950 p-3 text-xs text-neutral-400 border border-neutral-850">
                  <span className="font-semibold text-neutral-300">Chi tiết vận hành: </span>
                  {b.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: 3 NHÀ CUNG CẤP LỚN */}
      {activeTab === "providers" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {Object.values(providers).map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedProvider(p.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selectedProvider === p.id
                    ? "border-purple-500 bg-purple-950/30 shadow-lg shadow-purple-950/40"
                    : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <div className="font-bold text-sm text-white">{p.name}</div>
                <div className="text-xs text-purple-400/90 mt-1">{p.vendor}</div>
              </button>
            ))}
          </div>

          {/* Provider Detail Card */}
          <div className="rounded-xl border border-purple-500/30 bg-neutral-900/90 p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
              <div>
                <h4 className="font-bold text-lg text-white">{currentProv.name}</h4>
                <div className="text-xs text-neutral-400">{currentProv.vendor}</div>
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded border ${currentProv.badgeColor}`}>
                {currentProv.badge}
              </span>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">{currentProv.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  Giao thức hỗ trợ
                </div>
                <div className="mt-1 text-xs font-mono text-purple-300">{currentProv.protocols}</div>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  Đặc tính hiệu năng
                </div>
                <div className="mt-1 text-xs text-neutral-200">{currentProv.performance}</div>
              </div>
            </div>

            <div className="rounded-lg border border-neutral-800 bg-neutral-950/70 p-3 text-xs">
              <span className="font-bold text-amber-400">Ứng dụng tiêu biểu trong thực tế: </span>
              <span className="text-neutral-300">{currentProv.useCases}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
