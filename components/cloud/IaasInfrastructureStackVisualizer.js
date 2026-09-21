"use client";
import React, { useState } from "react";

export default function IaasInfrastructureStackVisualizer() {
  const [activeTab, setActiveTab] = useState("pillars"); // 'pillars' | 'capex-opex'
  const [selectedPillar, setSelectedPillar] = useState(0);
  const [financeModel, setFinanceModel] = useState("opex"); // 'capex' | 'opex'

  // 5 Thành phần cơ bản của IaaS từ tài liệu bài giảng
  const iaasPillars = [
    {
      id: "servers",
      title: "1. Servers (Máy Chủ)",
      icon: "🖥️",
      badge: "Năng Lực Tính Toán",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      summary: "Cung cấp máy chủ vật lý (Physical/Bare-metal) hoặc máy chủ ảo (Virtual Machines) để chạy hệ điều hành và ứng dụng.",
      details: [
        "Phần cứng gồm CPU (vCPU đa luồng), RAM hiệu năng cao, bo mạch chủ và hệ thống cấp nguồn dự phòng (Dual PSU).",
        "Hỗ trợ cài đặt đa dạng hệ điều hành: Các bản phân phối Linux (Ubuntu, RHEL, Debian) hoặc Windows Server.",
        "Người dùng toàn quyền quản trị cao nhất (quyền Root / Administrator) để cài đặt phần mềm tùy ý."
      ],
      examNote: "Trong IaaS, bạn có toàn quyền cài đặt OS và phần mềm trên server, khác hoàn toàn với PaaS (chỉ quản lý app & data)."
    },
    {
      id: "storage",
      title: "2. Storage (Lưu Trữ Dữ Liệu)",
      icon: "💾",
      badge: "Bộ Nhớ & Ổ Đĩa",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      summary: "Lưu trữ dữ liệu an toàn trên các ổ đĩa ảo với cơ chế sao lưu, nhân bản và co giãn linh hoạt theo nhu cầu.",
      details: [
        "Bao gồm 3 định dạng lưu trữ chủ đạo: Block Storage (ổ cứng ảo cho OS), Object Storage (lưu trữ tệp phi cấu trúc) và File Storage (chia sẻ tệp NFS).",
        "Tốc độ đọc/ghi cao dựa trên công nghệ ổ cứng thể rắn NVMe/SSD, đáp ứng các CSDL đòi hỏi IOPS lớn.",
        "Tự động nhân bản dữ liệu qua nhiều vùng khả dụng (Availability Zones) để chống mất mát dữ liệu khi ổ đĩa hỏng."
      ],
      examNote: "Cần nhớ: Storage trong IaaS tách rời khỏi máy chủ vật lý, cho phép gắn/tháo và tăng dung lượng tức thì mà không gián đoạn máy chủ."
    },
    {
      id: "networking",
      title: "3. Networking (Mạng & Bảo Mật)",
      icon: "🌐",
      badge: "Kết Nối & Tường Lửa",
      badgeColor: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      summary: "Thiết lập hạ tầng mạng ảo hoàn chỉnh gồm Mạng riêng ảo (VPC), Tường lửa (Firewall) và Bộ cân bằng tải (Load Balancer).",
      details: [
        "Mạng riêng ảo (VPC/Subnet): Cho phép doanh nghiệp tự quy hoạch dải địa chỉ IP (CIDR), bảng định tuyến (Route Table) và cổng Internet Gateway.",
        "Tường lửa (Firewall / Security Groups): Kiểm soát lưu lượng ra/vào (Inbound/Outbound rules) theo cổng và giao thức (TCP, UDP, ICMP).",
        "Load Balancer: Phân phối lưu lượng truy cập đồng đều đến các cụm máy chủ, ngăn ngừa quá tải và loại bỏ điểm nghẽn đơn lẻ (SPOF)."
      ],
      examNote: "Networking trong IaaS mang lại khả năng cô lập mạng tuyệt đối cấp doanh nghiệp, bảo vệ máy chủ khỏi tấn công từ Internet công cộng."
    },
    {
      id: "virtualization",
      title: "4. Virtualization System (Hệ Thống Ảo Hóa)",
      icon: "⚡",
      badge: "Phân Bổ Tài Nguyên",
      badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      summary: "Công nghệ cốt lõi giúp phân tách phần cứng vật lý thành nhiều máy chủ ảo độc lập, tối ưu hóa hiệu suất sử dụng tài nguyên.",
      details: [
        "Phần mềm giám sát máy ảo (Hypervisor): Tạo và quản lý các máy ảo (VM) độc lập (KVM, VMware ESXi, Microsoft Hyper-V).",
        "Đóng gói container (Containerization): Ảo hóa ở tầng hệ điều hành, cho phép đóng gói ứng dụng siêu nhẹ qua Docker/containerd.",
        "Tối ưu hóa tỷ lệ sử dụng phần cứng từ 15% (máy chủ vật lý truyền thống) lên tới 80-90% nhờ chia sẻ tài nguyên thông minh."
      ],
      examNote: "Ảo hóa chính là trái tim công nghệ biến phần cứng vật lý cồng kềnh thành các dịch vụ đám mây linh hoạt."
    },
    {
      id: "management",
      title: "5. Management & Automation (Quản Lý & Tự Động Hóa)",
      icon: "🛠️",
      badge: "Điều Khiển & IaC",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      summary: "Bộ công cụ giao diện điều khiển (Dashboard) và tự động hóa triển khai hạ tầng bằng mã nguồn (Infrastructure as Code - IaC).",
      details: [
        "Bảng điều khiển trực quan (Cloud Console) và giao diện dòng lệnh (CLI) giúp quản lý tài nguyên chỉ trong vài cú nhấp chuột.",
        "Tự động hóa mở rộng (Auto-scaling): Tự động thêm máy chủ khi tải tăng cao và thu hồi khi lưu lượng giảm về mức bình thường.",
        "Hạ tầng như mã nguồn (IaC): Sử dụng Terraform, CloudFormation để định nghĩa toàn bộ cụm máy chủ bằng file cấu hình có thể tái sử dụng."
      ],
      examNote: "Management & Automation giúp loại bỏ hoàn toàn các thao tác cấu hình thủ công dễ sai sót của quản trị viên."
    }
  ];

  const currentPillar = iaasPillars[selectedPillar];

  return (
    <div className="my-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#101620] via-[#131b26] to-[#0d121a] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
            <span>🏛️ Mục I • Tổng Quan IaaS</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Kiến Trúc Hạ Tầng IaaS &amp; 5 Trụ Cột Cơ Bản
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khẩu quyết: <strong className="text-blue-300">IaaS = Thuê hạ tầng (Server + Storage + Network)</strong> để tối ưu chi phí đầu tư ban đầu
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex rounded-xl bg-neutral-900/90 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab("pillars")}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
              activeTab === "pillars"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>🧱 5 Trụ Cột IaaS</span>
          </button>
          <button
            onClick={() => setActiveTab("capex-opex")}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
              activeTab === "capex-opex"
                ? "bg-amber-600 text-white shadow-md shadow-amber-600/30"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>💰 CAPEX vs OPEX</span>
          </button>
        </div>
      </div>

      {/* TAB 1: 5 TRỤ CỘT CƠ BẢN CỦA IAAS */}
      {activeTab === "pillars" && (
        <div className="mt-6 space-y-6">
          {/* 5 Pillars Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {iaasPillars.map((pillar, idx) => (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillar(idx)}
                className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                  selectedPillar === idx
                    ? "border-blue-500 bg-blue-950/50 shadow-md shadow-blue-900/30 ring-1 ring-blue-500/40"
                    : "border-neutral-800 bg-neutral-900/60 hover:border-neutral-700"
                }`}
              >
                <span className="text-2xl mb-1">{pillar.icon}</span>
                <span className="text-[10px] font-bold text-neutral-400 uppercase">Trụ cột {idx + 1}</span>
                <span className="text-xs font-bold text-white line-clamp-1 mt-0.5">{pillar.title.split(". ")[1]}</span>
              </button>
            ))}
          </div>

          {/* Active Pillar Detail Card */}
          <div className="rounded-2xl border border-blue-500/30 bg-neutral-900/80 p-5 md:p-6 backdrop-blur-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-2xl border border-blue-500/30">
                  {currentPillar.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{currentPillar.title}</h4>
                  <p className="text-xs text-neutral-300 mt-0.5">{currentPillar.summary}</p>
                </div>
              </div>
              <span className={`self-start sm:self-auto px-3 py-1 rounded-full border text-xs font-bold ${currentPillar.badgeColor}`}>
                {currentPillar.badge}
              </span>
            </div>

            {/* Technical Detail Points */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block">
                Đặc Điểm &amp; Chức Năng Kỹ Thuật:
              </span>
              <ul className="space-y-2">
                {currentPillar.details.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-300">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-[10px] font-bold text-blue-400 mt-0.5">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exam Takeaway Alert */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-3.5 text-xs text-neutral-300">
              <strong className="text-amber-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                <span>🎯</span> ĐIỂM CẦN NHỚ CHO BÀI THI:
              </strong>
              <p className="text-amber-200/90 leading-relaxed font-medium">{currentPillar.examNote}</p>
            </div>
          </div>

          {/* Master Summary Bento */}
          <div className="rounded-xl border border-neutral-800 bg-black/40 p-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-3">
              <span className="text-xs font-bold uppercase text-white flex items-center gap-2">
                <span>⚡</span> TỔNG KẾT NHANH 5 THÀNH PHẦN IAAS
              </span>
              <span className="text-[10px] font-mono text-blue-400">Core Architecture Stack</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
              <div className="rounded-lg bg-neutral-900/60 p-2.5 border border-neutral-800">
                <span className="text-blue-400 font-bold block">1. Servers</span>
                <span className="text-neutral-400 text-[11px]">Vật lý &amp; Ảo hóa, toàn quyền root</span>
              </div>
              <div className="rounded-lg bg-neutral-900/60 p-2.5 border border-neutral-800">
                <span className="text-emerald-400 font-bold block">2. Storage</span>
                <span className="text-neutral-400 text-[11px]">Ổ đĩa ảo, Block, Object &amp; File</span>
              </div>
              <div className="rounded-lg bg-neutral-900/60 p-2.5 border border-neutral-800">
                <span className="text-indigo-400 font-bold block">3. Networking</span>
                <span className="text-neutral-400 text-[11px]">VPC, Firewall, Load Balancer</span>
              </div>
              <div className="rounded-lg bg-neutral-900/60 p-2.5 border border-neutral-800">
                <span className="text-amber-400 font-bold block">4. Virtualization</span>
                <span className="text-neutral-400 text-[11px]">Hypervisor, Container tối ưu phần cứng</span>
              </div>
              <div className="rounded-lg bg-neutral-900/60 p-2.5 border border-neutral-800">
                <span className="text-purple-400 font-bold block">5. Automation</span>
                <span className="text-neutral-400 text-[11px]">Dashboard, CLI &amp; Hạ tầng như mã (IaC)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CAPEX VS OPEX FINANCIAL COMPARISON */}
      {activeTab === "capex-opex" && (
        <div className="mt-6 space-y-5 rounded-2xl border border-amber-500/30 bg-neutral-900/80 p-5 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Bản Chất Kinh Tế Của Điện Toán Đám Mây IaaS
              </span>
              <h4 className="text-base font-bold text-white mt-0.5">
                Chuyển Dịch Tài Chính: Tự Mua (CAPEX) vs Thuê Đám Mây (OPEX)
              </h4>
            </div>

            <div className="flex rounded-lg bg-black/60 p-1 border border-neutral-800">
              <button
                onClick={() => setFinanceModel("capex")}
                className={`px-3 py-1.5 text-xs font-bold rounded transition-all ${
                  financeModel === "capex"
                    ? "bg-rose-600 text-white shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                🏢 Tự Đầu Tư (CAPEX)
              </button>
              <button
                onClick={() => setFinanceModel("opex")}
                className={`px-3 py-1.5 text-xs font-bold rounded transition-all ${
                  financeModel === "opex"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                ☁️ Thuê IaaS (OPEX)
              </button>
            </div>
          </div>

          {/* Model Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`rounded-xl border p-4 transition-all ${
              financeModel === "capex" ? "border-rose-500/50 bg-rose-950/20" : "border-neutral-800 bg-black/40 opacity-60"
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-400 uppercase">🏢 Tự Mua Máy Chủ (CAPEX - Capital Expenditure)</span>
                <span className="text-xs px-2 py-0.5 rounded bg-rose-900/50 text-rose-300 font-mono">Chi phí vốn cố định</span>
              </div>
              <ul className="mt-3 space-y-2 text-xs text-neutral-300">
                <li>• Bỏ ra hàng trăm triệu đồng mua máy chủ vật lý, tủ rack, hệ thống làm mát.</li>
                <li>• Khấu hao tài sản cố định sau 3 - 5 năm; máy chủ mất giá nhanh chóng.</li>
                <li>• Mất nhiều tuần để mua sắm và lắp đặt; lãng phí khi tài nguyên không dùng hết.</li>
                <li>• Phải tự thuê đội ngũ kỹ sư vận hành và túc trực xử lý sự cố phần cứng.</li>
              </ul>
            </div>

            <div className={`rounded-xl border p-4 transition-all ${
              financeModel === "opex" ? "border-emerald-500/50 bg-emerald-950/20" : "border-neutral-800 bg-black/40 opacity-60"
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 uppercase">☁️ Thuê Hạ Tầng IaaS (OPEX - Operational Expenditure)</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-900/50 text-emerald-300 font-mono">Chi phí vận hành biến đổi</span>
              </div>
              <ul className="mt-3 space-y-2 text-xs text-neutral-300">
                <li>• <strong>Chi phí ban đầu bằng 0 ($0 CAPEX):</strong> Khởi tạo máy chủ chỉ trong vài phút.</li>
                <li>• <strong>Thanh toán Pay-as-you-go:</strong> Dùng bao nhiêu trả bấy nhiêu theo giờ/phút.</li>
                <li>• Tự động co giãn: Tăng máy chủ khi có khách, xóa bỏ khi hết đợt sale để tiết kiệm tiền.</li>
                <li>• Nhà cung cấp đám mây chịu trách nhiệm thay thế linh kiện hỏng hóc và bảo trì Datacenter.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
