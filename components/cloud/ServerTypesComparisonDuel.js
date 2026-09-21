"use client";
import React, { useState } from "react";

export default function ServerTypesComparisonDuel() {
  const [activeServer, setActiveServer] = useState("physical"); // 'physical' | 'dedicated' | 'shared'
  const [useCase, setUseCase] = useState("bigdata"); // 'bigdata' | 'ecommerce' | 'blog'

  const serverProfiles = {
    physical: {
      id: "physical",
      name: "1. Physical Server (Máy Chủ Vật Lý / Bare-Metal)",
      badge: "Hiệu Năng Tuyệt Đối",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      icon: "🖥️",
      architecture: "Chạy hệ điều hành (Linux, Windows Server) giao tiếp trực tiếp với linh kiện phần cứng (CPU, RAM, NVMe/SSD, Motherboard) mà không qua lớp ảo hóa (Hypervisor).",
      metrics: {
        perf: 100,
        perfLabel: "Cao Nhất (100%)",
        cost: 95,
        costLabel: "Rất Đắt (CAPEX lớn)",
        security: 98,
        securityLabel: "Bảo Mật Cao Nhất"
      },
      pros: "Hiệu năng ổn định tuyệt đối, không có độ trễ ảo hóa, toàn quyền kiểm soát phần cứng và cấu hình BIOS/UEFI tầng sâu.",
      cons: "Chi phí đầu tư và duy trì rất cao, khó co giãn tức thì (mất hàng tuần mua sắm thêm máy), quản lý phần cứng phức tạp.",
      suitableApps: "Phân tích dữ liệu lớn (Big Data Analytics), Huấn luyện mô hình AI/ML quy mô lớn, Ứng dụng doanh nghiệp sống còn (Critical Enterprise Apps)."
    },
    dedicated: {
      id: "dedicated",
      name: "2. Dedicated Virtual Server (Máy Chủ Ảo Chuyên Dụng)",
      badge: "Tài Nguyên Riêng Biệt",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      icon: "🛡️",
      architecture: "Máy chủ ảo chạy trên hạ tầng có tài nguyên vCPU, RAM được gán riêng biệt (Dedicated Host/Instance), không bị chia sẻ với bất kỳ khách hàng nào khác trên cùng máy chủ vật lý.",
      metrics: {
        perf: 85,
        perfLabel: "Cao & Ổn Định (85%)",
        cost: 65,
        costLabel: "Trung Bình - Cao",
        security: 90,
        securityLabel: "Bảo Mật Rất Tốt"
      },
      pros: "Hiệu năng ổn định (hoàn toàn không bị ảnh hưởng bởi tải của các server láng giềng), bảo mật cao, dễ dàng quản lý và sao lưu snapshot tức thì.",
      cons: "Chi phí thuê hàng tháng cao hơn đáng kể so với máy chủ dùng chung; đòi hỏi kỹ năng quản trị hệ điều hành.",
      suitableApps: "Cổng thanh toán tài chính / Hệ thống y tế (yêu cầu tuân thủ PCI-DSS, HIPAA), Hệ thống ERP/CRM doanh nghiệp, Website thương mại điện tử lớn."
    },
    shared: {
      id: "shared",
      name: "3. Shared Virtual Server (Máy Chủ Ảo Dùng Chung)",
      badge: "Tiết Kiệm Chi Phí",
      badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      icon: "👥",
      architecture: "Máy chủ ảo cùng chia sẻ chung năng lực CPU, RAM, băng thông và ổ đĩa vật lý với nhiều máy ảo của các khách hàng khác trên cùng một máy chủ vật lý.",
      metrics: {
        perf: 50,
        perfLabel: "Không Ổn Định (50%)",
        cost: 20,
        costLabel: "Rất Rẻ (Tiết kiệm)",
        security: 60,
        securityLabel: "Cơ Bản (Chia sẻ)"
      },
      pros: "Chi phí thuê cực kỳ rẻ, thời gian khởi tạo chỉ trong vài chục giây, dễ quản lý và linh hoạt xóa bỏ khi thử nghiệm xong.",
      cons: "Hiệu năng không ổn định (hiện tượng Noisy Neighbor - server bên cạnh chạy nặng sẽ làm nghẽn tài nguyên của bạn), bảo mật thấp hơn, tùy biến nhân kernel hạn chế.",
      suitableApps: "Website cá nhân / Blog tin tức, Website giới thiệu doanh nghiệp nhỏ ít tải, Môi trường kiểm thử và phát triển dự án (Test/Dev)."
    }
  };

  const useCases = {
    bigdata: {
      title: "Bài Toán 1: Phân Tích Dữ Liệu Lớn & AI Đòi Hỏi Tải Cực Nặng",
      workload: "Hàng terabyte dữ liệu đọc/ghi liên tục, cần 128 vCPU và 512GB RAM xử lý thời gian thực.",
      recommended: "physical",
      reason: "Bắt buộc dùng Physical Server (Bare-metal) để loại bỏ 100% độ trễ của lớp ảo hóa Hypervisor, tận dụng tối đa băng thông PCIe và bus bộ nhớ phần cứng."
    },
    ecommerce: {
      title: "Bài Toán 2: Sàn Thương Mại Điện Tử & Hệ Thống Ngân Hàng",
      workload: "Xử lý hàng triệu giao dịch tài chính, yêu cầu bảo mật thông tin thẻ và không được phép gián đoạn.",
      recommended: "dedicated",
      reason: "Dedicated Virtual Server là lựa chọn vàng: Vừa đảm bảo tài nguyên cô lập an toàn không bị ảnh hưởng bởi kẻ xấu, vừa hỗ trợ co giãn linh hoạt khi có đợt Flash Sale."
    },
    blog: {
      title: "Bài Toán 3: Blog Cá Nhân & Môi Trường Thử Nghiệm (Test/Dev)",
      workload: "Lưu lượng truy cập vài trăm lượt/ngày, ngân sách hạn chế, chỉ cần môi trường chạy mã nguồn thử.",
      recommended: "shared",
      reason: "Shared Virtual Server là giải pháp kinh tế tối ưu nhất: Chi phí chỉ vài đô-la mỗi tháng, khởi tạo nhanh, không lãng phí tài nguyên khi máy chủ nhàn rỗi."
    }
  };

  const current = serverProfiles[activeServer];

  return (
    <div className="my-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#101722] via-[#121a28] to-[#0e141f] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
            <span>⚔️ Mục II • Các Loại Server Trong IaaS</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Đấu Trường Đối Soát: Physical vs Dedicated vs Shared Server
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khảo sát 3 loại máy chủ: Đặc điểm phần cứng, cơ chế cô lập tài nguyên và ma trận đánh giá Hiệu năng - Chi phí - Bảo mật
          </p>
        </div>
      </div>

      {/* 3 SERVER SELECTOR BUTTONS */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-2.5">
        {Object.keys(serverProfiles).map((k) => {
          const s = serverProfiles[k];
          const isSelected = activeServer === k;
          return (
            <button
              key={k}
              onClick={() => setActiveServer(k)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                isSelected
                  ? "border-blue-500 bg-blue-950/60 shadow-lg shadow-blue-950/40 ring-1 ring-blue-500"
                  : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-800/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{s.icon}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${s.badgeColor}`}>
                  {s.badge}
                </span>
              </div>
              <h4 className="text-xs font-bold text-white mt-2 line-clamp-1">{s.name.split(". ")[1]}</h4>
              <span className="text-[11px] text-neutral-400 block mt-0.5">{s.metrics.perfLabel}</span>
            </button>
          );
        })}
      </div>

      {/* ACTIVE SERVER PROFILE DETAILS */}
      <div className="mt-6 space-y-5 rounded-2xl border border-blue-500/30 bg-neutral-900/80 p-5 md:p-6 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
          <div>
            <h4 className="text-base md:text-lg font-bold text-white">{current.name}</h4>
            <p className="text-xs text-neutral-300 mt-1 leading-relaxed">{current.architecture}</p>
          </div>
          <span className={`self-start sm:self-auto px-3 py-1 rounded-full border text-xs font-bold ${current.badgeColor}`}>
            {current.badge}
          </span>
        </div>

        {/* 3 METRIC GAUGES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-neutral-800 bg-black/40 p-3.5 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-400 font-semibold">⚡ Hiệu Năng:</span>
              <span className="text-blue-400 font-bold">{current.metrics.perfLabel}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-neutral-800 overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full transition-all duration-500" style={{ width: `${current.metrics.perf}%` }} />
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-black/40 p-3.5 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-400 font-semibold">💰 Mức Chi Phí:</span>
              <span className="text-amber-400 font-bold">{current.metrics.costLabel}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-neutral-800 overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full transition-all duration-500" style={{ width: `${current.metrics.cost}%` }} />
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-black/40 p-3.5 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-400 font-semibold">🛡️ Cấp Độ Bảo Mật:</span>
              <span className="text-emerald-400 font-bold">{current.metrics.securityLabel}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-neutral-800 overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${current.metrics.security}%` }} />
            </div>
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-3.5 space-y-1">
            <strong className="text-emerald-400 block mb-0.5">👍 Ưu Điểm Nổi Bật:</strong>
            <p className="text-neutral-300 leading-relaxed">{current.pros}</p>
          </div>
          <div className="rounded-xl border border-rose-500/20 bg-rose-950/20 p-3.5 space-y-1">
            <strong className="text-rose-400 block mb-0.5">👎 Nhược Điểm Hạn Chế:</strong>
            <p className="text-neutral-300 leading-relaxed">{current.cons}</p>
          </div>
        </div>

        {/* Suitable Applications */}
        <div className="rounded-xl border border-blue-500/20 bg-blue-950/20 p-3.5 text-xs text-neutral-300">
          <strong className="text-blue-300 block mb-1">🎯 Ứng Dụng Phù Hợp Điển Hình:</strong>
          <p>{current.suitableApps}</p>
        </div>
      </div>

      {/* QUICK COMPARISON TABLE (GIÁO TRÌNH CHUẨN) */}
      <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-3">
          📊 Bảng So Sánh Nhanh Trọng Tâm Thi Cử (Cần Nhớ):
        </span>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-black/60 text-neutral-400 uppercase text-[10px] border-b border-neutral-800">
              <tr>
                <th className="p-2.5">Loại Máy Chủ</th>
                <th className="p-2.5 text-blue-400">⚡ Hiệu Năng</th>
                <th className="p-2.5 text-amber-400">💰 Chi Phí</th>
                <th className="p-2.5 text-emerald-400">🛡️ Bảo Mật</th>
                <th className="p-2.5 text-purple-400">Trường Hợp Phù Hợp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800 text-neutral-300">
              <tr className={activeServer === "physical" ? "bg-blue-950/30 font-semibold" : ""}>
                <td className="p-2.5 text-white font-bold">Physical Server</td>
                <td className="p-2.5 text-blue-300">Cao nhất (Ổn định tuyệt đối)</td>
                <td className="p-2.5 text-rose-300">Cao nhất (Mua phần cứng)</td>
                <td className="p-2.5 text-emerald-300">Cao</td>
                <td className="p-2.5 text-neutral-400">Big Data, Critical Enterprise</td>
              </tr>
              <tr className={activeServer === "dedicated" ? "bg-emerald-950/30 font-semibold" : ""}>
                <td className="p-2.5 text-white font-bold">Dedicated Virtual</td>
                <td className="p-2.5 text-blue-300">Cao, ổn định (Không chia sẻ)</td>
                <td className="p-2.5 text-amber-300">Trung bình - cao</td>
                <td className="p-2.5 text-emerald-300">Cao</td>
                <td className="p-2.5 text-neutral-400">Tài chính, Y tế, E-commerce, ERP</td>
              </tr>
              <tr className={activeServer === "shared" ? "bg-amber-950/30 font-semibold" : ""}>
                <td className="p-2.5 text-white font-bold">Shared Virtual</td>
                <td className="p-2.5 text-neutral-400">Không ổn định (Noisy neighbor)</td>
                <td className="p-2.5 text-emerald-300 font-bold">Thấp (Cực rẻ)</td>
                <td className="p-2.5 text-rose-300">Thấp</td>
                <td className="p-2.5 text-neutral-400">Website cá nhân, Blog, Test/Dev</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CASE STUDY DECISION SANDBOX */}
      <div className="mt-6 border-t border-neutral-800 pt-5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <span>💡</span> Hộp Cát Lựa Chọn Server Theo Tình Huống Thực Tế:
          </span>
          <div className="flex gap-1.5">
            {[
              { id: "bigdata", label: "Big Data / AI" },
              { id: "ecommerce", label: "E-Commerce / Ngân Hàng" },
              { id: "blog", label: "Blog / Test Dev" }
            ].map((uc) => (
              <button
                key={uc.id}
                onClick={() => setUseCase(uc.id)}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                  useCase === uc.id
                    ? "bg-amber-600 text-white"
                    : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
                }`}
              >
                {uc.label}
              </button>
            ))}
          </div>
        </div>

        {(() => {
          const sc = useCases[useCase];
          return (
            <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 text-xs text-neutral-300 space-y-2">
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-2">
                <h5 className="font-bold text-white">{sc.title}</h5>
                <span className="rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 text-[10px] font-bold uppercase">
                  Đề xuất: {sc.recommended.toUpperCase()}
                </span>
              </div>
              <p className="text-neutral-400 text-[11px]"><strong>Mô tả bài toán:</strong> {sc.workload}</p>
              <div className="text-amber-200/90 leading-relaxed font-medium">
                <strong>Lý do kỹ thuật:</strong> {sc.reason}
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
