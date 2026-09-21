"use client";
import React, { useState } from "react";

export default function IaasBigThreeBattlefield() {
  const [viewMode, setViewMode] = useState("pillar"); // 'pillar' | 'vendor' | 'cross_lookup'
  const [selectedPillar, setSelectedPillar] = useState("compute");
  const [selectedVendor, setSelectedVendor] = useState("aws");
  const [searchQuery, setSearchQuery] = useState("");

  const pillars = {
    compute: {
      id: "compute",
      name: "1. Compute (Máy Chủ Tính Toán)",
      icon: "⚡",
      badge: "vCPU & RAM Đám Mây",
      color: "blue",
      desc: "Cung cấp năng lực tính toán thông qua các máy chủ ảo có thể cấu hình linh hoạt vCPU, RAM, GPU.",
      services: {
        aws: {
          name: "Amazon EC2 (Elastic Compute Cloud)",
          desc: "Dịch vụ máy chủ ảo lâu đời và phổ biến nhất thế giới với hàng trăm loại cấu hình (Instance Types) tối ưu cho bộ nhớ, điện toán, lưu trữ.",
          features: "Hỗ trợ Spot Instances giá rẻ tới 90%, Nitro System hypervisor bảo mật bằng phần cứng chuyên dụng."
        },
        azure: {
          name: "Azure Virtual Machines (VMs)",
          desc: "Tích hợp sâu sắc với hệ sinh thái doanh nghiệp Microsoft (Windows Server, SQL Server, Active Directory).",
          features: "Azure Hybrid Benefit giúp tái sử dụng bản quyền Windows/SQL Server có sẵn để tiết kiệm chi phí."
        },
        gcp: {
          name: "Google Compute Engine (GCE)",
          desc: "Máy chủ ảo chạy trên hạ tầng toàn cầu siêu tốc của Google, nổi tiếng với tốc độ khởi động cực nhanh.",
          features: "Hỗ trợ Custom Machine Types (cho phép tự chọn chính xác số vCPU và dung lượng RAM lẻ tùy ý mà không bị gò bó vào gói cố định)."
        }
      }
    },
    storage: {
      id: "storage",
      name: "2. Storage (Lưu Trữ Khối & Đối Tượng)",
      icon: "💾",
      badge: "Block & Object Storage",
      color: "emerald",
      desc: "Hệ thống lưu trữ dữ liệu an toàn, bền bỉ với độ tin cậy 99.999999999% (11 số 9).",
      services: {
        aws: {
          name: "Amazon S3 (Simple Storage Service) & EBS",
          desc: "S3 là tiêu chuẩn vàng của Object Storage; EBS (Elastic Block Store) đóng vai trò ổ cứng ảo gắn trực tiếp cho EC2.",
          features: "Nhiều tầng lưu trữ (S3 Standard, Intelligent-Tiering, Glacier Flexible/Deep Archive) tối ưu chi phí tự động."
        },
        azure: {
          name: "Azure Blob Storage & Managed Disks",
          desc: "Blob Storage lưu trữ dữ liệu phi cấu trúc dung lượng lớn; Managed Disks cung cấp ổ đĩa ảo SSD/HDD bền bỉ.",
          features: "Hỗ trợ Hot, Cool, Cold và Archive Access Tiers. Tích hợp trực tiếp với Azure Data Lake Storage Gen2."
        },
        gcp: {
          name: "Google Cloud Storage (GCS) & Persistent Disk",
          desc: "GCS cung cấp không gian lưu trữ đối tượng toàn cầu đồng nhất qua một API duy nhất; Persistent Disk hỗ trợ gắn đa máy chủ.",
          features: "Tính năng tự động định tuyến toàn cầu qua mạng cáp quang riêng của Google, không phụ thuộc nhiều vào mạng Internet công cộng."
        }
      }
    },
    network: {
      id: "network",
      name: "3. Network (Hạ Tầng Mạng Ảo Riêng Biệt)",
      icon: "🌐",
      badge: "VPC & Kết Nối Đám Mây",
      color: "purple",
      desc: "Mạng riêng ảo cô lập an toàn, cho phép kiểm soát toàn bộ dải IP, subnet, bảng định tuyến và tường lửa.",
      services: {
        aws: {
          name: "Amazon VPC (Virtual Private Cloud)",
          desc: "Thiết lập mạng ảo cô lập cho tài nguyên AWS. Kết nối mạng nội bộ on-premise qua AWS Direct Connect hoặc VPN.",
          features: "Kiểm soát an ninh qua Security Groups (Stateful) và Network ACLs (Stateless)."
        },
        azure: {
          name: "Azure Virtual Network (VNet)",
          desc: "Môi trường mạng logic kết nối an toàn các tài nguyên Azure với nhau và với trung tâm dữ liệu tại chỗ qua ExpressRoute.",
          features: "Hỗ trợ Network Security Groups (NSG) và kết nối ngang hàng toàn cầu (Global VNet Peering)."
        },
        gcp: {
          name: "Google Cloud VPC (Virtual Private Cloud)",
          desc: "VPC của Google có phạm vi toàn cầu mặc định (Global VPC), cho phép các subnet tại nhiều châu lục nói chuyện trực tiếp.",
          features: "Định tuyến qua mạng đường trục Backbone cáp quang riêng của Google, độ trễ và độ giật thấp nhất thị trường."
        }
      }
    },
    iam: {
      id: "iam",
      name: "4. IAM (Quản Lý Danh Tính & Phân Quyền)",
      icon: "🔑",
      badge: "Bảo Mật & Định Danh",
      color: "amber",
      desc: "Kiểm soát xác thực (Authentication) và phân quyền (Authorization) ai được phép làm gì với tài nguyên nào.",
      services: {
        aws: {
          name: "AWS IAM (Identity & Access Management)",
          desc: "Quản lý người dùng, nhóm, vai trò (Roles) và các chính sách phân quyền chi tiết định dạng JSON (IAM Policies).",
          features: "Áp dụng nguyên tắc đặc quyền tối thiểu (Least Privilege), hỗ trợ xác thực đa yếu tố (MFA)."
        },
        azure: {
          name: "Microsoft Entra ID (Trước đây: Azure Active Directory)",
          desc: "Giải pháp quản lý định danh và truy cập dựa trên đám mây toàn diện nhất cho các doanh nghiệp dùng Office 365 / Windows.",
          features: "Tính năng Conditional Access (Truy cập có điều kiện) dựa trên rủi ro thiết bị và vị trí địa lý."
        },
        gcp: {
          name: "Google Cloud IAM (Cloud IAM)",
          desc: "Cung cấp quyền kiểm soát quyền truy cập chi tiết cho các tài nguyên Google Cloud cụ thể dựa trên vai trò (Roles).",
          features: "Cấu trúc phân cấp theo Tổ chức (Organization) ➔ Thư mục (Folders) ➔ Dự án (Projects) ➔ Tài nguyên (Resources)."
        }
      }
    }
  };

  const vendors = {
    aws: {
      id: "aws",
      name: "Amazon Web Services (AWS)",
      logo: "🟧",
      marketShare: "Khoảng 31% - 32% (Số 1 Thế Giới)",
      headline: "Người tiên phong định hình nên ngành công nghiệp điện toán đám mây từ năm 2006.",
      strengths: "Hệ sinh thái dịch vụ đa dạng và trưởng thành nhất, cộng đồng người dùng đông đảo, tài liệu phong phú.",
      keyServices: [
        { pillar: "Compute", service: "Amazon EC2" },
        { pillar: "Storage", service: "Amazon S3, Amazon EBS" },
        { pillar: "Network", service: "Amazon VPC, Route 53, Direct Connect" },
        { pillar: "Identity", service: "AWS IAM" }
      ]
    },
    azure: {
      id: "azure",
      name: "Microsoft Azure",
      logo: "🟦",
      marketShare: "Khoảng 23% - 25% (Số 2 Thế Giới)",
      headline: "Lựa chọn hàng đầu của các tập đoàn Fortune 500 nhờ tích hợp hoàn hảo với hệ sinh thái Microsoft.",
      strengths: "Hạ tầng đám mây lai (Hybrid Cloud) mạnh mẽ với Azure Arc, chiết khấu bản quyền Windows/SQL Server.",
      keyServices: [
        { pillar: "Compute", service: "Azure Virtual Machines" },
        { pillar: "Storage", service: "Azure Blob Storage, Managed Disks" },
        { pillar: "Network", service: "Azure Virtual Network (VNet), ExpressRoute" },
        { pillar: "Identity", service: "Microsoft Entra ID (Azure AD)" }
      ]
    },
    gcp: {
      id: "gcp",
      name: "Google Cloud Platform (GCP)",
      logo: "🟩",
      marketShare: "Khoảng 10% - 12% (Số 3 Thế Giới)",
      headline: "Bá chủ về xử lý Big Data, Trí tuệ nhân tạo (AI/ML) và công nghệ Container (Kubernetes).",
      strengths: "Mạng cáp quang viễn thông toàn cầu riêng biệt, công nghệ mã nguồn mở (GKE), khả năng phân tích dữ liệu siêu tốc.",
      keyServices: [
        { pillar: "Compute", service: "Google Compute Engine (GCE)" },
        { pillar: "Storage", service: "Google Cloud Storage (GCS), Persistent Disk" },
        { pillar: "Network", service: "Google Cloud VPC, Cloud CDN" },
        { pillar: "Identity", service: "Google Cloud IAM" }
      ]
    }
  };

  const currentPillarData = pillars[selectedPillar];
  const currentVendorData = vendors[selectedVendor];

  // Quick lookup list for cross reference
  const crossLookupData = [
    { pillar: "Máy chủ tính toán (Compute)", aws: "Amazon EC2", azure: "Azure Virtual Machines", gcp: "Google Compute Engine (GCE)" },
    { pillar: "Lưu trữ đối tượng (Object Storage)", aws: "Amazon S3", azure: "Azure Blob Storage", gcp: "Google Cloud Storage (GCS)" },
    { pillar: "Lưu trữ ổ đĩa khối (Block Storage)", aws: "Amazon EBS", azure: "Azure Managed Disks", gcp: "Persistent Disk" },
    { pillar: "Lưu trữ tệp dùng chung (File Storage)", aws: "Amazon EFS / FSx", azure: "Azure Files", gcp: "Google Cloud Filestore" },
    { pillar: "Mạng riêng ảo (Private Network)", aws: "Amazon VPC", azure: "Azure Virtual Network (VNet)", gcp: "Google Cloud VPC" },
    { pillar: "Quản lý danh tính (IAM)", aws: "AWS IAM", azure: "Microsoft Entra ID (Azure AD)", gcp: "Google Cloud IAM" },
    { pillar: "Cân bằng tải (Load Balancing)", aws: "Elastic Load Balancing (ALB/NLB)", azure: "Azure Load Balancer", gcp: "Cloud Load Balancing" }
  ];

  const filteredCross = crossLookupData.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      item.pillar.toLowerCase().includes(q) ||
      item.aws.toLowerCase().includes(q) ||
      item.azure.toLowerCase().includes(q) ||
      item.gcp.toLowerCase().includes(q)
    );
  });

  return (
    <div className="my-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#101724] via-[#121a28] to-[#0e1420] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
            <span>⚔️ Mục VII.4 • Võ Đài Các Nhà Cung Cấp IaaS Lớn</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Võ Đài Tam Hùng IaaS: AWS vs Azure vs Google Cloud (GCP)
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Đối soát trực quan 3 ông lớn chiếm hơn 65% thị phần đám mây toàn cầu theo bộ tứ trụ cột đồng nhất: Compute, Storage, Network và IAM.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex rounded-xl bg-neutral-900/80 p-1 border border-neutral-800">
          <button
            onClick={() => setViewMode("pillar")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              viewMode === "pillar"
                ? "bg-blue-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Theo 4 Trụ Cột
          </button>
          <button
            onClick={() => setViewMode("vendor")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              viewMode === "vendor"
                ? "bg-purple-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Theo Nhà Cung Cấp
          </button>
          <button
            onClick={() => setViewMode("cross_lookup")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              viewMode === "cross_lookup"
                ? "bg-amber-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Tra Cứu Chéo Dịch Vụ
          </button>
        </div>
      </div>

      {/* TAB 1: THEO 4 TRỤ CỘT */}
      {viewMode === "pillar" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.values(pillars).map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPillar(p.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedPillar === p.id
                    ? "border-blue-500 bg-blue-950/40 shadow-lg shadow-blue-950/50"
                    : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <div className="text-2xl mb-1">{p.icon}</div>
                <div className="font-bold text-xs text-white">{p.name.split(" (")[0]}</div>
                <div className="text-[10px] text-blue-400/90 mt-0.5">{p.badge}</div>
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-blue-500/30 bg-neutral-900/90 p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
              <div>
                <h4 className="font-bold text-lg text-white">{currentPillarData.name}</h4>
                <p className="text-xs text-neutral-400 mt-0.5">{currentPillarData.desc}</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                {currentPillarData.badge}
              </span>
            </div>

            {/* 3 Vendors Cards for Selected Pillar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* AWS */}
              <div className="rounded-xl border border-amber-500/30 bg-neutral-950 p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-amber-400 flex items-center gap-1.5">
                    <span>🟧</span> AWS
                  </span>
                  <span className="text-[10px] bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20 font-mono">
                    Market Leader
                  </span>
                </div>
                <div className="font-bold text-sm text-white">
                  {currentPillarData.services.aws.name}
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {currentPillarData.services.aws.desc}
                </p>
                <div className="text-[11px] text-amber-200/90 bg-amber-950/30 p-2 rounded border border-amber-500/20">
                  <span className="font-semibold text-amber-400">Đặc tính: </span>
                  {currentPillarData.services.aws.features}
                </div>
              </div>

              {/* Azure */}
              <div className="rounded-xl border border-blue-500/30 bg-neutral-950 p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-blue-400 flex items-center gap-1.5">
                    <span>🟦</span> Microsoft Azure
                  </span>
                  <span className="text-[10px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded border border-blue-500/20 font-mono">
                    Enterprise
                  </span>
                </div>
                <div className="font-bold text-sm text-white">
                  {currentPillarData.services.azure.name}
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {currentPillarData.services.azure.desc}
                </p>
                <div className="text-[11px] text-blue-200/90 bg-blue-950/30 p-2 rounded border border-blue-500/20">
                  <span className="font-semibold text-blue-400">Đặc tính: </span>
                  {currentPillarData.services.azure.features}
                </div>
              </div>

              {/* GCP */}
              <div className="rounded-xl border border-emerald-500/30 bg-neutral-950 p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-emerald-400 flex items-center gap-1.5">
                    <span>🟩</span> Google Cloud (GCP)
                  </span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">
                    AI &amp; Data
                  </span>
                </div>
                <div className="font-bold text-sm text-white">
                  {currentPillarData.services.gcp.name}
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {currentPillarData.services.gcp.desc}
                </p>
                <div className="text-[11px] text-emerald-200/90 bg-emerald-950/30 p-2 rounded border border-emerald-500/20">
                  <span className="font-semibold text-emerald-400">Đặc tính: </span>
                  {currentPillarData.services.gcp.features}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: THEO NHÀ CUNG CẤP */}
      {viewMode === "vendor" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {Object.values(vendors).map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVendor(v.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selectedVendor === v.id
                    ? "border-blue-500 bg-blue-950/40 shadow-lg shadow-blue-950/50"
                    : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{v.logo}</span>
                  <div className="font-bold text-sm text-white">{v.name}</div>
                </div>
                <div className="text-xs text-blue-400/90 font-mono">{v.marketShare}</div>
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-blue-500/30 bg-neutral-900/90 p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{currentVendorData.logo}</span>
                <div>
                  <h4 className="font-bold text-lg text-white">{currentVendorData.name}</h4>
                  <div className="text-xs text-neutral-400">{currentVendorData.headline}</div>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold">
                Thị phần: {currentVendorData.marketShare}
              </span>
            </div>

            <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-xs text-neutral-300">
              <span className="font-bold text-amber-400">Thế mạnh vượt trội: </span>
              {currentVendorData.strengths}
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                Bộ tứ trụ cột dịch vụ IaaS chuẩn:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {currentVendorData.keyServices.map((ks, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-950/70 p-3 text-xs"
                  >
                    <span className="text-neutral-400 font-semibold">{ks.pillar}</span>
                    <span className="font-bold text-white font-mono">{ks.service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: BẢNG TRA CỨU CHÉO */}
      {viewMode === "cross_lookup" && (
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="🔍 Nhập tên dịch vụ hoặc trụ cột (VD: EC2, S3, Blob, VPC, File, IAM)..."
              className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-xs text-neutral-200 placeholder-neutral-500 focus:border-blue-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="px-3 py-2 text-xs rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
              >
                Xóa
              </button>
            )}
          </div>

          <div className="overflow-x-auto rounded-xl border border-neutral-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-950 text-neutral-400 border-b border-neutral-800 uppercase font-semibold">
                <tr>
                  <th className="p-3">Hạng Mục Dịch Vụ</th>
                  <th className="p-3 text-amber-400">AWS</th>
                  <th className="p-3 text-blue-400">Azure</th>
                  <th className="p-3 text-emerald-400">Google Cloud (GCP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-neutral-300">
                {filteredCross.length > 0 ? (
                  filteredCross.map((item, index) => (
                    <tr key={index} className="hover:bg-neutral-900/60 transition-colors">
                      <td className="p-3 font-semibold text-white">{item.pillar}</td>
                      <td className="p-3 font-mono text-amber-300">{item.aws}</td>
                      <td className="p-3 font-mono text-blue-300">{item.azure}</td>
                      <td className="p-3 font-mono text-emerald-300">{item.gcp}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="p-4 text-center text-neutral-500">
                      Không tìm thấy dịch vụ tương ứng với từ khóa &quot;{searchQuery}&quot;
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-200">
            <span className="font-bold text-amber-400">⚠️ Cảnh báo bẫy thi trắc nghiệm: </span>
            Đề thi cực kỳ hay hỏi chéo dạng: &quot;Amazon EC2 tương đương với dịch vụ nào của GCP?&quot; ➔ Đáp án đúng là <strong>Google Compute Engine (GCE)</strong>. Hoặc &quot;Dịch vụ Object Storage của Azure có tên là gì?&quot; ➔ Đáp án đúng là <strong>Azure Blob Storage</strong>.
          </div>
        </div>
      )}
    </div>
  );
}
