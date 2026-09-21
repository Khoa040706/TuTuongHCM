"use client";
import React, { useState } from "react";

export default function Chapter5MasterKeyTermsMatrix() {
  const [activeFilter, setActiveFilter] = useState("all"); // 'all' | 'compute' | 'storage' | 'network' | 'reliability'
  const [searchQuery, setSearchQuery] = useState("");
  const [showExamTraps, setShowExamTraps] = useState(false);

  const masterPillars = [
    {
      id: "iaas_core",
      pillarNumber: 1,
      title: "1. Bản Chất IaaS",
      category: "compute",
      icon: "🏗️",
      formula: "Thuê phần cứng thô qua Internet • Pay-as-you-go",
      coreConcepts: "IaaS cung cấp hạ tầng điện toán thô (Compute, Storage, Networking, Virtualization). Người dùng tự cài đặt và quản trị Hệ điều hành (OS), Middleware và Ứng dụng.",
      examTrap: "Đừng nhầm với PaaS: Ở IaaS, khách hàng PHẢI tự chịu trách nhiệm cài đặt và vá lỗi hệ điều hành (OS) và cơ sở dữ liệu."
    },
    {
      id: "server_types",
      pillarNumber: 2,
      title: "2. Phân Loại 3 Máy Chủ",
      category: "compute",
      icon: "🖥️",
      formula: "Physical (Mạnh) ➔ Dedicated (Cân bằng) ➔ Shared (Rẻ)",
      coreConcepts: "Physical/Bare-metal: 1 khách hàng chiếm trọn máy vật lý, hiệu năng cao nhất, đắt nhất. Dedicated Virtual: Ảo hóa nhưng phần cứng vật lý dành riêng. Shared Virtual: Chia sẻ phần cứng với nhiều khách hàng khác (rẻ nhất, nguy cơ hàng xóm ồn ào).",
      examTrap: "Shared Virtual Server có chi phí thấp nhất nhưng hiệu năng dễ bị biến động do hiện tượng 'Noisy Neighbors'."
    },
    {
      id: "storage_triad",
      pillarNumber: 3,
      title: "3. Bộ Tam Lưu Trữ Đám Mây",
      category: "storage",
      icon: "🧱",
      formula: "Block (OS/DB) • File (NFS/Shared) • Object (REST API/Web)",
      coreConcepts: "Block Storage: Gắn 1-1 như ổ đĩa cục bộ cho OS/DB (EBS, Persistent Disk). File Storage: Cấu trúc thư mục phân cấp chia sẻ đa server (EFS, Filestore). Object Storage: Lưu trữ dạng đối tượng + metadata qua HTTP API, mở rộng vô hạn (S3, GCS, Blob).",
      examTrap: "Cơ sở dữ liệu (Database) đòi hỏi ghi I/O liên tục bắt buộc dùng BLOCK STORAGE. Không thể cài OS trực tiếp lên Object Storage."
    },
    {
      id: "load_balancing",
      pillarNumber: 4,
      title: "4. Cân Bằng Tải (Load Balancing)",
      category: "network",
      icon: "⚖️",
      formula: "Phân phối lưu lượng ➔ Availability + Chống DDoS",
      coreConcepts: "Phân phối đều tải mạng giữa cụm máy chủ, tự động cách ly máy chủ lỗi (Health Checks). 3 thuật toán kinh điển: Round Robin (xoay vòng lần lượt), Least Connections (ưu tiên máy ít kết nối nhất), IP Hash (cố định IP client với một server).",
      examTrap: "Round Robin chia đều số lượng kết nối nhưng KHÔNG xét đến cấu hình máy chủ mạnh hay yếu."
    },
    {
      id: "redundancy_backup",
      pillarNumber: 5,
      title: "5. Dự Phòng & Chiến Lược Sao Lưu",
      category: "reliability",
      icon: "🛡️",
      formula: "Redundancy = Backup + Dự phòng ➔ High Availability",
      coreConcepts: "4 loại dự phòng: Hardware, Software, Network, Data. 3 chiến lược sao lưu: Full (lưu toàn bộ, restore nhanh nhất), Incremental (chỉ lưu thay đổi so với lần gần nhất, restore chậm nhất), Differential (lưu tích lũy so với Full gần nhất). Chỉ số RTO (thời gian phục hồi) và RPO (mức mất dữ liệu).",
      examTrap: "Khôi phục từ Incremental Backup bắt buộc phải có bản Full + TẤT CẢ các bản Incremental theo chuỗi thời gian."
    },
    {
      id: "cloud_nas",
      pillarNumber: 6,
      title: "6. Cloud-based NAS",
      category: "storage",
      icon: "🗄️",
      formula: "Centralized Storage Server qua mạng Internet",
      coreConcepts: "Thiết bị lưu trữ kết nối mạng cho phép chia sẻ tập tin từ bất kỳ thiết bị nào qua Internet. Đóng vai trò máy chủ lưu trữ tập trung. 3 đại diện tiêu biểu: Nirvanix CloudNAS, Amazon FSx for NetApp ONTAP, Google Cloud Filestore.",
      examTrap: "Cloud NAS cung cấp giao diện hệ thống tệp tin chuẩn (POSIX / SMB / NFS) chứ không phải lưu trữ khối phân vùng raw."
    },
    {
      id: "iaas_advantages",
      pillarNumber: 7,
      title: "7. Ưu Điểm & Use Cases",
      category: "reliability",
      icon: "💼",
      formula: "Chuyển CAPEX sang OPEX • Scalability tức thì",
      coreConcepts: "5 ưu điểm: Giảm chi phí ban đầu, mở rộng linh hoạt, tiết kiệm bảo trì, tăng bảo mật quốc tế, độ sẵn sàng cao. 5 Use Cases: Backup/Storage, Dev/Test, Web Hosting, Disaster Recovery, High-Performance Computing (AI/Big Data).",
      examTrap: "CAPEX là chi phí đầu tư mua sắm tài sản cố định ban đầu; OPEX là chi phí vận hành thường xuyên theo nhu cầu sử dụng thực tế."
    },
    {
      id: "big_three",
      pillarNumber: 8,
      title: "8. Tam Hùng IaaS Toàn Cầu",
      category: "compute",
      icon: "⚔️",
      formula: "AWS (Số 1) • Azure (Số 2 Doanh nghiệp) • GCP (Số 3 AI/Data)",
      coreConcepts: "Mỗi hãng đều có bộ tứ trụ cột: Compute (EC2 / VMs / GCE), Storage (S3 / Blob / GCS), Network (VPC / VNet / VPC), IAM (AWS IAM / Entra ID / Cloud IAM).",
      examTrap: "Nắm chắc bảng đối chiếu chéo tên dịch vụ giữa AWS, Azure và GCP để không mất điểm oan trong câu hỏi trắc nghiệm ghép đôi."
    }
  ];

  const filteredPillars = masterPillars.filter((p) => {
    const matchCategory = activeFilter === "all" || p.category === activeFilter;
    const matchQuery =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.coreConcepts.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.formula.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchQuery;
  });

  return (
    <div className="my-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#101724] via-[#121a28] to-[#0e1420] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
            <span>🎓 Mục VIII • Tổng Kết Nhanh Toàn Bộ Chương 5 (Key Takeaways)</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Ma Trận 8 Trụ Cột Tri Thức Toàn Diện &amp; Bí Quyết Ôn Thi IaaS
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Hệ thống hóa toàn bộ kiến thức từ Mục I đến Mục VII, công thức ghi nhớ nhanh và danh sách cảnh báo bẫy điểm liệt trong đề thi trắc nghiệm.
          </p>
        </div>

        {/* Toggle Exam Traps Button */}
        <button
          onClick={() => setShowExamTraps(!showExamTraps)}
          className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all flex items-center gap-1.5 ${
            showExamTraps
              ? "bg-amber-500 text-neutral-950 border-amber-400 shadow-lg shadow-amber-500/30 font-black"
              : "bg-neutral-900 border-amber-500/40 text-amber-400 hover:bg-amber-500/10"
          }`}
        >
          <span>⚠️</span>
          <span>{showExamTraps ? "Đang Bật Cảnh Báo Bẫy Thi" : "Bật Cảnh Báo Bẫy Thi"}</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3 py-1 text-xs font-medium rounded-lg border transition-all ${
              activeFilter === "all"
                ? "bg-blue-600 text-white border-blue-500"
                : "bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-neutral-200"
            }`}
          >
            Tất Cả 8 Trụ Cột
          </button>
          <button
            onClick={() => setActiveFilter("compute")}
            className={`px-3 py-1 text-xs font-medium rounded-lg border transition-all ${
              activeFilter === "compute"
                ? "bg-blue-600 text-white border-blue-500"
                : "bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-neutral-200"
            }`}
          >
            Compute &amp; Server
          </button>
          <button
            onClick={() => setActiveFilter("storage")}
            className={`px-3 py-1 text-xs font-medium rounded-lg border transition-all ${
              activeFilter === "storage"
                ? "bg-emerald-600 text-white border-emerald-500"
                : "bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-neutral-200"
            }`}
          >
            Storage &amp; NAS
          </button>
          <button
            onClick={() => setActiveFilter("network")}
            className={`px-3 py-1 text-xs font-medium rounded-lg border transition-all ${
              activeFilter === "network"
                ? "bg-purple-600 text-white border-purple-500"
                : "bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-neutral-200"
            }`}
          >
            Network &amp; LB
          </button>
          <button
            onClick={() => setActiveFilter("reliability")}
            className={`px-3 py-1 text-xs font-medium rounded-lg border transition-all ${
              activeFilter === "reliability"
                ? "bg-amber-600 text-white border-amber-500"
                : "bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-neutral-200"
            }`}
          >
            Dự Phòng &amp; Quản Trị
          </button>
        </div>

        <div className="w-full md:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="🔍 Tìm trụ cột, từ khóa..."
            className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-xs text-neutral-200 placeholder-neutral-500 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Grid of 8 Pillars */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPillars.map((p) => (
          <div
            key={p.id}
            className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-4 hover:border-blue-500/40 transition-all space-y-2.5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{p.icon}</span>
                <h4 className="font-bold text-sm text-white">{p.title}</h4>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                Pillar 0{p.pillarNumber}
              </span>
            </div>

            <div className="rounded-lg bg-neutral-950 p-2 text-xs font-mono text-emerald-400 border border-neutral-850">
              ⚡ {p.formula}
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">{p.coreConcepts}</p>

            {showExamTraps && (
              <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-2.5 text-xs text-amber-200 animate-fadeIn">
                <span className="font-bold text-amber-400">⚠️ Bẫy thi cần nhớ: </span>
                {p.examTrap}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Quick Summary */}
      <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-950/20 p-4 text-xs text-neutral-300 flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="font-bold text-blue-400">Chúc mừng bạn! </span>
          Bạn đã hoàn thành trọn vẹn toàn bộ 8 mục kiến thức của Chương 5: Infrastructure as a Service (IaaS).
        </div>
        <div className="text-neutral-400 font-mono text-[11px]">
          Tổng cộng: 8 Visualizers • 8 Micro-Quizzes • 26 Thuật ngữ Glossary • 20 Flashcards
        </div>
      </div>
    </div>
  );
}
