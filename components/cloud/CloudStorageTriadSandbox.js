"use client";
import React, { useState } from "react";

export default function CloudStorageTriadSandbox() {
  const [activeTab, setActiveTab] = useState("storage"); // 'storage' | 'network' | 'virtualization' | 'automation'
  const [selectedStorage, setSelectedStorage] = useState("block"); // 'block' | 'file' | 'object'

  const storageTypes = {
    block: {
      id: "block",
      name: "1. Block Storage (Lưu Trữ Dạng Khối)",
      icon: "🧱",
      badge: "Gắn Ổ Đĩa Ảo (SSD/HDD)",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      howItWorks: "Chia dữ liệu thành các khối (blocks) có kích thước cố định, mỗi khối có một địa chỉ riêng biệt. Gắn trực tiếp vào máy chủ ảo như một ổ đĩa cục bộ (Local Disk).",
      examples: "Amazon EBS (Elastic Block Store), Google Persistent Disk, Azure Managed Disks.",
      speed: "Tốc độ đọc/ghi (IOPS) cực nhanh, độ trễ siêu thấp (micro-giây).",
      accessPattern: "Gắn 1-1 vào một máy chủ ảo duy nhất tại một thời điểm (Single Instance Attachment).",
      bestFor: "Cài đặt Hệ điều hành (Boot disk cho OS) và Chạy Hệ quản trị Cơ sở dữ liệu (PostgreSQL, MySQL, Oracle, MongoDB đòi hỏi ghi đĩa liên tục)."
    },
    file: {
      id: "file",
      name: "2. File Storage (Lưu Trữ Dạng Tệp Phân Cấp)",
      icon: "📁",
      badge: "Dùng Chung Đa Máy Chủ (NFS)",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      howItWorks: "Tổ chức dữ liệu theo cây thư mục phân cấp quen thuộc (Folder / Subfolder / Files). Nhiều máy chủ ảo có thể mount và đọc/ghi đồng thời qua giao thức NFS hoặc SMB.",
      examples: "Amazon EFS (Elastic File System), Azure Files, Google Cloud Filestore, NFS Server.",
      speed: "Tốc độ trung bình - cao, tối ưu cho việc chia sẻ tệp đồng thời giữa nhiều máy chủ.",
      accessPattern: "Truy cập đa máy chủ (Multi-Attach / Many-to-Many via Network Mount).",
      bestFor: "Hệ thống quản lý nội dung (WordPress uploads chia sẻ chung giữa cụm web servers), kho mã nguồn dùng chung, môi trường phân tích dữ liệu cộng tác."
    },
    object: {
      id: "object",
      name: "3. Object Storage (Lưu Trữ Dạng Đối Tượng)",
      icon: "📦",
      badge: "Quy Mô Vô Hạn Qua API",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      howItWorks: "Mỗi tệp dữ liệu được đóng gói thành một 'Object' chứa: Dữ liệu nhị phân (Binary Data) + Siêu dữ liệu mở rộng (Metadata) + Khóa định danh duy nhất (Unique ID). Không có cấu trúc thư mục lồng nhau; truy cập trực tiếp qua giao thức Web HTTP/HTTPS REST API.",
      examples: "Amazon S3 (Simple Storage Service), Google Cloud Storage (GCS), Azure Blob Storage.",
      speed: "Độ trễ cao hơn Block/File, nhưng khả năng mở rộng dung lượng là vô hạn (Petabytes/Exabytes).",
      accessPattern: "Truy cập trực tiếp từ bất kỳ đâu qua Internet bằng URL hoặc SDK.",
      bestFor: "Lưu trữ hình ảnh, video, tệp âm thanh cho ứng dụng Web/Mobile; Bản sao lưu dự phòng (Backups & Disaster Recovery); Hồ dữ liệu phân tích (Data Lake)."
    }
  };

  const currentSt = storageTypes[selectedStorage];

  return (
    <div className="my-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#101724] via-[#121a28] to-[#0e1420] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
            <span>💾 Mục III • Các Thành Phần Khác Của IaaS</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Bộ Tam Lưu Trữ (Block - File - Object) &amp; Mạng / Ảo Hóa
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khám phá 3 định dạng lưu trữ đám mây cốt lõi cùng hạ tầng Mạng riêng ảo (VPC), Ảo hóa (Hypervisor) và Tự động hóa
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex rounded-xl bg-neutral-900/90 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab("storage")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "storage"
                ? "bg-blue-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>💾 3 Loại Storage</span>
          </button>
          <button
            onClick={() => setActiveTab("network")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "network"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>🌐 Networking</span>
          </button>
          <button
            onClick={() => setActiveTab("virtualization")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "virtualization"
                ? "bg-amber-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>⚡ Virtualization</span>
          </button>
          <button
            onClick={() => setActiveTab("automation")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "automation"
                ? "bg-purple-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>🛠️ Automation (IaC)</span>
          </button>
        </div>
      </div>

      {/* TAB 1: 3 LOẠI STORAGE */}
      {activeTab === "storage" && (
        <div className="mt-6 space-y-6">
          {/* 3 Storage Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {Object.keys(storageTypes).map((k) => {
              const st = storageTypes[k];
              const isSelected = selectedStorage === k;
              return (
                <button
                  key={k}
                  onClick={() => setSelectedStorage(k)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "border-blue-500 bg-blue-950/60 shadow-md ring-1 ring-blue-500"
                      : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700"
                  }`}
                >
                  <span className="text-2xl">{st.icon}</span>
                  <div>
                    <span className="text-xs font-bold text-white block line-clamp-1">{st.name.split(". ")[1]}</span>
                    <span className="text-[10px] text-neutral-400 block mt-0.5">{st.badge}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Storage Deep Dive Card */}
          <div className="rounded-2xl border border-blue-500/30 bg-neutral-900/80 p-5 md:p-6 backdrop-blur-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-3">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span>{currentSt.icon}</span> {currentSt.name}
                </h4>
                <p className="text-xs text-neutral-300 mt-1 leading-relaxed">{currentSt.howItWorks}</p>
              </div>
              <span className={`self-start sm:self-auto px-3 py-1 rounded-full border text-xs font-bold ${currentSt.badgeColor}`}>
                {currentSt.badge}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="rounded-xl border border-neutral-800 bg-black/40 p-3 space-y-1">
                <span className="text-neutral-400 font-semibold block text-[10px] uppercase">⚡ Tốc Độ &amp; Hiệu Năng:</span>
                <p className="text-blue-300 font-medium">{currentSt.speed}</p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-black/40 p-3 space-y-1">
                <span className="text-neutral-400 font-semibold block text-[10px] uppercase">🔌 Cơ Chế Gắn Kết:</span>
                <p className="text-emerald-300 font-medium">{currentSt.accessPattern}</p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-black/40 p-3 space-y-1">
                <span className="text-neutral-400 font-semibold block text-[10px] uppercase">🏢 Đại Diện Tiêu Biểu:</span>
                <p className="text-amber-300 font-mono text-[11px]">{currentSt.examples}</p>
              </div>
            </div>

            <div className="rounded-xl border border-blue-500/20 bg-blue-950/20 p-3.5 text-xs text-neutral-300">
              <strong className="text-blue-400 block mb-1">🎯 Trường Hợp Sử Dụng Tối Ưu (Best Practices):</strong>
              <p className="leading-relaxed">{currentSt.bestFor}</p>
            </div>
          </div>

          {/* Quick Comparison Summary Matrix */}
          <div className="overflow-x-auto rounded-xl border border-neutral-800">
            <table className="w-full text-left text-xs bg-neutral-900/60">
              <thead className="bg-black/80 text-neutral-400 uppercase text-[10px] border-b border-neutral-800">
                <tr>
                  <th className="p-3">Loại Lưu Trữ</th>
                  <th className="p-3 text-blue-400">Đơn Vị Quản Lý</th>
                  <th className="p-3 text-emerald-400">Cách Giao Tiếp</th>
                  <th className="p-3 text-amber-400">Ứng Dụng Chuẩn</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-neutral-300">
                <tr>
                  <td className="p-3 font-bold text-white">Block Storage</td>
                  <td className="p-3">Khối nhị phân (Raw Blocks)</td>
                  <td className="p-3">Giao thức bus ổ cứng (iSCSI, Fibre Channel)</td>
                  <td className="p-3 text-emerald-300 font-medium">Ổ đĩa OS, Database (MySQL, Postgres)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">File Storage</td>
                  <td className="p-3">Cây thư mục (Files &amp; Folders)</td>
                  <td className="p-3">Giao thức mạng chia sẻ (NFS, SMB)</td>
                  <td className="p-3 text-emerald-300 font-medium">Thư mục uploads dùng chung cho nhiều Web Server</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">Object Storage</td>
                  <td className="p-3">Đối tượng độc lập (Data + Metadata + ID)</td>
                  <td className="p-3">Giao thức Web (HTTP/HTTPS REST API)</td>
                  <td className="p-3 text-emerald-300 font-medium">Ảnh, Video, Tệp backup, Data Lake vô hạn</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: NETWORKING IN IAAS */}
      {activeTab === "network" && (
        <div className="mt-6 space-y-4 rounded-2xl border border-indigo-500/30 bg-neutral-900/80 p-5 md:p-6">
          <div className="border-b border-neutral-800 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Mục 3.2 • Hạ Tầng Mạng Đám Mây</span>
            <h4 className="text-base font-bold text-white mt-0.5">Mạng Riêng Ảo (VPC), Tường Lửa &amp; Cân Bằng Tải</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="rounded-xl border border-neutral-800 bg-black/40 p-4 space-y-2">
              <span className="text-2xl">🌐</span>
              <h5 className="text-xs font-bold text-white">Virtual Network (VPC)</h5>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Mạng riêng ảo cô lập hoàn toàn về mặt logic trên cloud. Doanh nghiệp tự cấu hình dải địa chỉ IP (CIDR), chia Subnet công khai (Public) cho Web và Subnet riêng tư (Private) cho Database.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-black/40 p-4 space-y-2">
              <span className="text-2xl">🛡️</span>
              <h5 className="text-xs font-bold text-white">Firewall &amp; Security Groups</h5>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Bức tường lửa ảo kiểm soát luồng dữ liệu (traffic rules). Chỉ mở đúng các cổng cần thiết (ví dụ: Cổng 80/443 cho Web, chặn toàn bộ cổng 22/3389 từ Internet công cộng để chống đột nhập).
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-black/40 p-4 space-y-2">
              <span className="text-2xl">⚖️</span>
              <h5 className="text-xs font-bold text-white">Load Balancer</h5>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Bộ điều phối lưu lượng đứng trước các cụm máy chủ, tự động phân phối request đều đặn, loại bỏ tình trạng một máy chủ bị nghẽn trong khi các máy khác nhàn rỗi.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: VIRTUALIZATION SYSTEM */}
      {activeTab === "virtualization" && (
        <div className="mt-6 space-y-4 rounded-2xl border border-amber-500/30 bg-neutral-900/80 p-5 md:p-6">
          <div className="border-b border-neutral-800 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Mục 3.3 • Hệ Thống Ảo Hóa Cốt Lõi</span>
            <h4 className="text-base font-bold text-white mt-0.5">Hypervisor (Máy Ảo) vs Containerization (Đóng Gói Container)</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-neutral-800 bg-black/40 p-4 space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase">🖥️ Ảo Hóa Máy Ảo (Hypervisor)</span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Tạo các máy ảo độc lập từ phần cứng máy chủ. Mỗi máy ảo (VM) sở hữu một hệ điều hành khách (Guest OS) riêng biệt, mang lại độ cô lập và an toàn bảo mật cao nhất.
              </p>
              <span className="text-[11px] text-neutral-400 block font-mono">Công nghệ: KVM, VMware ESXi, Hyper-V, Xen</span>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-black/40 p-4 space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase">🐳 Ảo Hóa Container (Containerization)</span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Ảo hóa ở tầng Hệ điều hành (OS Level Virtualization). Các container chia sẻ chung nhân kernel của Host OS nhưng cô lập không gian người dùng. Khởi động trong vài mili-giây, cực nhẹ.
              </p>
              <span className="text-[11px] text-neutral-400 block font-mono">Công nghệ: Docker, containerd, Kubernetes (K8s)</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: MANAGEMENT & AUTOMATION */}
      {activeTab === "automation" && (
        <div className="mt-6 space-y-4 rounded-2xl border border-purple-500/30 bg-neutral-900/80 p-5 md:p-6">
          <div className="border-b border-neutral-800 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Mục 3.4 • Quản Lý &amp; Tự Động Hóa</span>
            <h4 className="text-base font-bold text-white mt-0.5">Management Tools &amp; Infrastructure as Code (IaC)</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-neutral-800 bg-black/40 p-4 space-y-2">
              <span className="text-xs font-bold text-purple-400 uppercase">🖥️ Management Tools (Công Cụ Quản Lý)</span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Cung cấp giao diện trực quan (Web Console) và giao diện dòng lệnh (CLI/SDK) cho phép các kỹ sư giám sát CPU, RAM, lưu lượng băng thông và thao tác bật/tắt máy chủ từ xa trong tầm tay.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-black/40 p-4 space-y-2">
              <span className="text-xs font-bold text-teal-400 uppercase">⚡ Automation &amp; IaC (Hạ Tầng Như Mã Nguồn)</span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Tự động hóa hoàn toàn việc cấp phát hạ tầng bằng mã nguồn (Terraform, Ansible, CloudFormation). Định nghĩa toàn bộ mạng VPC, máy chủ và CSDL trong file text, đảm bảo tính nhất quán 100% khi nhân bản môi trường.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
