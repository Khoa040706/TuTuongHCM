"use client";
import React, { useState } from "react";

export default function DisasterRecoveryRedundancySimulator() {
  const [activeTab, setActiveTab] = useState("redundancy_types"); // 'redundancy_types' | 'backup_duel' | 'dr_sandbox'
  const [selectedRedundancy, setSelectedRedundancy] = useState("hardware");
  const [backupStrategy, setBackupStrategy] = useState("full");

  // Disaster Simulator State
  const [dcPrimaryStatus, setDcPrimaryStatus] = useState("healthy"); // 'healthy' | 'disaster' | 'recovering'
  const [dcSecondaryStatus, setDcSecondaryStatus] = useState("standby"); // 'standby' | 'active_serving'
  const [failoverInitiated, setFailoverInitiated] = useState(false);
  const [replicationLagSec, setReplicationLagSec] = useState(3);
  const [recoveryTimeSec, setRecoveryTimeSec] = useState(0);

  const redundancyCategories = {
    hardware: {
      id: "hardware",
      name: "1. Hardware Redundancy (Dự Phòng Phần Cứng)",
      icon: "🖥️",
      badge: "Máy Chủ & Nguồn Điện",
      color: "blue",
      desc: "Trang bị các phần cứng song song hoặc thay thế để chịu tải khi có linh kiện hỏng hóc.",
      components: [
        "Nguồn điện kép dự phòng (Dual Power Supplies) và bộ lưu điện UPS + Máy phát điện diesel.",
        "Bộ điều khiển đĩa mảng dự phòng (RAID 1, 5, 10) chống mất dữ liệu khi chết ổ cứng.",
        "Máy chủ dự phòng nóng (Hot-standby Servers) sẵn sàng nhận tải ngay lập tức.",
        "Hệ thống làm mát điều hòa kép (Dual Precision Cooling) bảo vệ phòng máy."
      ],
      examTip: "Từ khóa đề thi: 'Phần cứng dự phòng' luôn bảo vệ tính toàn vẹn vật lý và duy trì uptime cho các thành phần vật lý trong Data Center."
    },
    software: {
      id: "software",
      name: "2. Software Redundancy (Dự Phòng Phần Mềm)",
      icon: "⚙️",
      badge: "Dịch Vụ & Ứng Dụng",
      color: "emerald",
      desc: "Chạy đồng thời nhiều phiên bản ứng dụng hoặc dịch vụ microservice để đảm bảo dịch vụ không đứt đoạn.",
      components: [
        "Mô hình Cụm (Clustering) chạy chế độ Active-Active hoặc Active-Passive.",
        "Cơ chế tự phục hồi (Self-healing & Auto-restart) tự tạo lại Pod/Container khi ứng dụng bị crash.",
        "Cơ chế chuyển tiếp lỗi tự động (Automatic Failover) cho Database Master-Replica.",
        "Circuit Breaker (Ngắt mạch) ngăn chặn sự cố dây chuyền giữa các microservices."
      ],
      examTip: "Đảm bảo tính sẵn sàng cao (High Availability) cho tầng logic nghiệp vụ ngay cả khi một tiến trình phần mềm bị treo hoặc lỗi mã."
    },
    network: {
      id: "network",
      name: "3. Network Redundancy (Dự Phòng Kết Nối Mạng)",
      icon: "🌐",
      badge: "Đường Truyền & Định Tuyến",
      color: "purple",
      desc: "Thiết lập nhiều đường truyền mạng độc lập và thiết bị mạng dự phòng để chống ngắt kết nối.",
      components: [
        "Đường truyền Internet từ nhiều nhà mạng độc lập (Dual ISP Multi-homing qua BGP).",
        "Cặp thiết bị Switch / Router lõi dự phòng (HSRP / VRRP protocol).",
        "Nhiều card mạng trên mỗi server gộp kênh (NIC Teaming / Link Aggregation LACP).",
        "Kết nối đám mây chuyên dụng kép (AWS Direct Connect / Azure ExpressRoute Redundancy)."
      ],
      examTip: "Nếu chỉ có 1 đường cáp quang duy nhất vào Data Center, sự cố đứt cáp sẽ làm tê liệt toàn bộ hệ thống dù server bên trong vẫn chạy 100%."
    },
    data: {
      id: "data",
      name: "4. Data Redundancy (Dự Phòng Dữ Liệu)",
      icon: "🗄️",
      badge: "Sao Lưu & Bản Sao",
      color: "amber",
      desc: "Lưu giữ nhiều bản sao của cùng một dữ liệu tại các vị trí vật lý và địa lý khác nhau.",
      components: [
        "Đồng bộ hóa dữ liệu thời gian thực (Synchronous / Asynchronous Replication).",
        "Cơ chế phân tán đa vùng khả dụng (Multi-AZ) và đa khu vực địa lý (Multi-Region).",
        "Chiến lược sao lưu định kỳ (Periodic Backup: Full, Incremental, Differential).",
        "Kho lưu trữ bất biến (Immutable Object Storage) chống mã độc tống tiền (Ransomware)."
      ],
      examTip: "Khẩu quyết cốt lõi: 'Redundancy = sao lưu + dự phòng ➔ Fault Tolerance + High Availability'. Mục tiêu tối thượng là KHÔNG BAO GIỜ MẤT DỮ LIỆU."
    }
  };

  const backupStrategies = {
    full: {
      id: "full",
      name: "Full Backup (Sao Lưu Toàn Bộ)",
      badge: "Chậm Nhất Khi Lưu • Nhanh Nhất Khi Phục Hồi",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      howItWorks: "Sao chép toàn bộ 100% tất cả các tệp và cơ sở dữ liệu của hệ thống tại thời điểm chỉ định.",
      storageCost: "Rất cao (tốn dung lượng đĩa tối đa vì nhân bản toàn bộ mỗi lần chạy).",
      backupSpeed: "Rất chậm (phải đọc và ghi toàn bộ dữ liệu, gây nghẽn I/O hệ thống).",
      restoreSpeed: "Cực kỳ nhanh (Chỉ cần nạp ĐÚNG 1 BẢN SAO DUY NHẤT này là khôi phục 100% hệ thống).",
      restoreSteps: "Bước 1: Chọn bản Full Backup gần nhất ➔ Khôi phục ➔ Hoàn tất.",
      bestScenario: "Chạy định kỳ vào cuối tuần hoặc đầu mỗi tháng khi lượng truy cập thấp."
    },
    incremental: {
      id: "incremental",
      name: "Incremental Backup (Sao Lưu Gia Tăng / Vi Sai)",
      badge: "Nhanh Nhất Khi Lưu • Chậm Nhất Khi Phục Hồi",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      howItWorks: "CHỈ sao chép những dữ liệu thay đổi so với bản sao lưu GẦN NHẤT (bất kể lần gần nhất là Full hay Incremental).",
      storageCost: "Thấp nhất (chỉ tốn dung lượng cho phần dữ liệu mới phát sinh trong ngày).",
      backupSpeed: "Nhanh nhất (chỉ quét và nén các khối dữ liệu vừa thay đổi).",
      restoreSpeed: "Chậm và phức tạp nhất (Bắt buộc phải khôi phục bản Full ban đầu + LẦN LƯỢT TỪNG BẢN Incremental theo đúng thứ tự thời gian).",
      restoreSteps: "Bước 1: Khôi phục Full (Chủ nhật) ➔ Bước 2: Nạp Inc Thứ 2 ➔ Bước 3: Nạp Inc Thứ 3 ➔ Bước 4: Nạp Inc Thứ 4 (nếu đứt 1 mắt xích, dữ liệu sau đó sẽ mất).",
      bestScenario: "Chạy tự động hàng ngày/hàng giờ cho hệ thống có khối lượng dữ liệu khổng lồ."
    },
    differential: {
      id: "differential",
      name: "Differential Backup (Sao Lưu Tích Lũy)",
      badge: "Cân Bằng Hoàn Hảo Giữa Dung Lượng & Tốc Độ",
      badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      howItWorks: "Sao chép TẤT CẢ các dữ liệu đã thay đổi KỂ TỪ BẢN FULL BACKUP GẦN NHẤT. Dung lượng bản sao sẽ phình to dần theo các ngày tiếp theo.",
      storageCost: "Trung bình (tốn hơn Incremental nhưng tiết kiệm hơn Full liên tục).",
      backupSpeed: "Nhanh vừa phải (chậm hơn Incremental vào cuối tuần vì lượng tích lũy tăng).",
      restoreSpeed: "Rất nhanh (Chỉ cần đúng 2 bản: Bản Full gần nhất + Bản Differential MỚI NHẤT).",
      restoreSteps: "Bước 1: Khôi phục bản Full (Chủ nhật) ➔ Bước 2: Khôi phục bản Differential mới nhất (Thứ 5). Bỏ qua các bản thứ 2, 3, 4!",
      bestScenario: "Mô hình chuẩn của doanh nghiệp: Full Backup vào Chủ Nhật + Differential hàng đêm."
    }
  };

  const handleSimulateDisaster = () => {
    setDcPrimaryStatus("disaster");
    setFailoverInitiated(false);
  };

  const handleTriggerFailover = () => {
    setFailoverInitiated(true);
    setDcSecondaryStatus("active_serving");
    setRecoveryTimeSec(12); // Simulated RTO achieved in 12s
  };

  const handleResetSystem = () => {
    setDcPrimaryStatus("healthy");
    setDcSecondaryStatus("standby");
    setFailoverInitiated(false);
    setRecoveryTimeSec(0);
  };

  const currentRed = redundancyCategories[selectedRedundancy];
  const currentBkp = backupStrategies[backupStrategy];

  return (
    <div className="my-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#101724] via-[#121a28] to-[#0e1420] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
            <span>🛡️ Mục V • Dự Phòng &amp; Phục Hồi Thảm Họa (Disaster Recovery)</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Mô Phỏng Redundancy, 3 Chiến Lược Sao Lưu &amp; Đo Lường RTO / RPO
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khám phá 4 loại dự phòng cốt lõi, giải mã bài toán kinh điển Full vs Incremental vs Differential Backup và thực hành phản ứng sự cố thảm họa.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex rounded-xl bg-neutral-900/80 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab("redundancy_types")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "redundancy_types"
                ? "bg-blue-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            4 Loại Redundancy
          </button>
          <button
            onClick={() => setActiveTab("backup_duel")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "backup_duel"
                ? "bg-amber-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            3 Cơ Chế Backup
          </button>
          <button
            onClick={() => setActiveTab("dr_sandbox")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "dr_sandbox"
                ? "bg-rose-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Mô Phỏng Thảm Họa (Failover)
          </button>
        </div>
      </div>

      {/* TAB 1: 4 LOẠI REDUNDANCY */}
      {activeTab === "redundancy_types" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.values(redundancyCategories).map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedRedundancy(r.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedRedundancy === r.id
                    ? "border-blue-500 bg-blue-950/40 shadow-lg shadow-blue-950/50"
                    : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <div className="text-2xl mb-1">{r.icon}</div>
                <div className="font-bold text-sm text-white">{r.name.split(" (")[0]}</div>
                <div className="text-xs text-blue-400/90 mt-0.5">{r.badge}</div>
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-blue-500/30 bg-neutral-900/90 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{currentRed.icon}</span>
                <div>
                  <h4 className="font-bold text-lg text-white">{currentRed.name}</h4>
                  <p className="text-xs text-neutral-400">{currentRed.desc}</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                {currentRed.badge}
              </span>
            </div>

            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                Các thành phần kỹ thuật triển khai thực tế:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {currentRed.components.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 rounded-lg border border-neutral-800 bg-neutral-950/60 p-3 text-xs text-neutral-300"
                  >
                    <span className="text-blue-400 font-bold mt-0.5">✔</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-200">
              <span className="font-bold text-amber-400">💡 Lưu ý trọng tâm thi cử: </span>
              {currentRed.examTip}
            </div>
          </div>

          {/* Formula Callout */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 text-center">
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-1">
              Khẩu Quyết Vàng Của Kiến Trúc Hạ Tầng (IaaS Formula)
            </div>
            <div className="text-base md:text-lg font-black text-blue-400 font-mono">
              Redundancy = Backup + Dự Phòng Đa Tầng ➔ Fault Tolerance (Chịu Lỗi) + High Availability (Sẵn Sàng Cao)
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ĐỐI SOÁT 3 CƠ CHẾ SAO LƯU */}
      {activeTab === "backup_duel" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {Object.values(backupStrategies).map((b) => (
              <button
                key={b.id}
                onClick={() => setBackupStrategy(b.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  backupStrategy === b.id
                    ? "border-amber-500 bg-amber-950/30 shadow-lg shadow-amber-950/40"
                    : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <div className="font-bold text-sm text-white">{b.name}</div>
                <div className="text-xs text-amber-400/90 mt-1">{b.badge}</div>
              </button>
            ))}
          </div>

          {/* Detailed Box */}
          <div className="rounded-xl border border-amber-500/30 bg-neutral-900/90 p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
              <div>
                <h4 className="font-bold text-lg text-white">{currentBkp.name}</h4>
                <p className="text-xs text-neutral-400 mt-0.5">{currentBkp.howItWorks}</p>
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded border ${currentBkp.badgeColor}`}>
                {currentBkp.badge}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  Chi Phí Lưu Trữ
                </div>
                <div className="mt-1 text-xs font-medium text-neutral-200">{currentBkp.storageCost}</div>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  Tốc Độ Khi Sao Lưu
                </div>
                <div className="mt-1 text-xs font-medium text-neutral-200">{currentBkp.backupSpeed}</div>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  Tốc Độ Khi Khôi Phục (Restore)
                </div>
                <div className="mt-1 text-xs font-medium text-emerald-400 font-bold">{currentBkp.restoreSpeed}</div>
              </div>
            </div>

            <div className="rounded-lg border border-neutral-800 bg-neutral-950/80 p-3 text-xs">
              <span className="font-bold text-amber-400">Quy trình khôi phục khi gặp sự cố: </span>
              <span className="text-neutral-300">{currentBkp.restoreSteps}</span>
            </div>

            <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 p-3 text-xs text-blue-200">
              <span className="font-bold text-blue-400">🎯 Tình huống áp dụng tối ưu: </span>
              {currentBkp.bestScenario}
            </div>
          </div>

          {/* Quick Comparison Matrix Table */}
          <div className="overflow-x-auto rounded-xl border border-neutral-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-950 text-neutral-400 border-b border-neutral-800 uppercase font-semibold">
                <tr>
                  <th className="p-3">Tiêu Chí So Sánh</th>
                  <th className="p-3 text-blue-400">Full Backup</th>
                  <th className="p-3 text-emerald-400">Incremental Backup</th>
                  <th className="p-3 text-amber-400">Differential Backup</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-neutral-300">
                <tr className="hover:bg-neutral-900/50">
                  <td className="p-3 font-semibold text-white">Dữ liệu sao lưu</td>
                  <td className="p-3">Toàn bộ 100% dữ liệu</td>
                  <td className="p-3">Chỉ dữ liệu đổi so với lần gần nhất</td>
                  <td className="p-3">Tất cả dữ liệu đổi kể từ bản Full gần nhất</td>
                </tr>
                <tr className="hover:bg-neutral-900/50">
                  <td className="p-3 font-semibold text-white">Dung lượng đĩa tốn</td>
                  <td className="p-3 text-rose-400 font-bold">Rất nhiều (Cao nhất)</td>
                  <td className="p-3 text-emerald-400 font-bold">Rất ít (Tiết kiệm nhất)</td>
                  <td className="p-3 text-amber-400">Tăng dần qua từng ngày</td>
                </tr>
                <tr className="hover:bg-neutral-900/50">
                  <td className="p-3 font-semibold text-white">Số bản cần để Restore</td>
                  <td className="p-3 text-emerald-400 font-bold">Đúng 1 bản duy nhất</td>
                  <td className="p-3 text-rose-400 font-bold">Bản Full + Tất cả bản Inc theo chuỗi</td>
                  <td className="p-3 text-amber-400 font-bold">Bản Full + Bản Diff mới nhất (2 bản)</td>
                </tr>
                <tr className="hover:bg-neutral-900/50">
                  <td className="p-3 font-semibold text-white">Rủi ro mất dữ liệu</td>
                  <td className="p-3">Rất thấp</td>
                  <td className="p-3 text-rose-300">Cao nếu đứt 1 bản Inc trung gian</td>
                  <td className="p-3 text-emerald-300">Thấp, độc lập giữa các ngày Diff</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: MÔ PHỎNG THẢM HỌA & FAILOVER SANDBOX */}
      {activeTab === "dr_sandbox" && (
        <div className="mt-6 space-y-6">
          <div className="rounded-xl border border-rose-500/30 bg-neutral-900/90 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
              <div>
                <h4 className="font-bold text-lg text-white">
                  Phòng Thí Nghiệm Xử Lý Sự Cố: Multi-Region Disaster Recovery
                </h4>
                <p className="text-xs text-neutral-400">
                  Thực hành kích hoạt thảm họa cháy nổ / mất điện tại Primary Region và kiểm tra năng lực Chuyển đổi dự phòng (Failover).
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                {dcPrimaryStatus === "healthy" && (
                  <button
                    onClick={handleSimulateDisaster}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg bg-rose-600 hover:bg-rose-500 text-white transition-all shadow-lg shadow-rose-900/50 flex items-center gap-1.5"
                  >
                    <span>💥 Giả Lập Sập DC A</span>
                  </button>
                )}

                {dcPrimaryStatus === "disaster" && !failoverInitiated && (
                  <button
                    onClick={handleTriggerFailover}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-600 hover:bg-amber-500 text-white transition-all shadow-lg shadow-amber-900/50 animate-pulse flex items-center gap-1.5"
                  >
                    <span>🔄 Kích Hoạt Chuyển Vùng (Failover DC B)</span>
                  </button>
                )}

                {(dcPrimaryStatus === "disaster" || failoverInitiated) && (
                  <button
                    onClick={handleResetSystem}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-all flex items-center gap-1.5"
                  >
                    <span>♻️ Khôi Phục Hệ Thống Ban Đầu</span>
                  </button>
                )}
              </div>
            </div>

            {/* Architecture Visualizer */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Data Center A (Primary) */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  dcPrimaryStatus === "healthy"
                    ? "border-emerald-500/50 bg-emerald-950/20"
                    : "border-rose-500/80 bg-rose-950/40 animate-pulse"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-white flex items-center gap-2">
                    <span>🏢 Data Center A (Primary - Sài Gòn)</span>
                  </span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded ${
                      dcPrimaryStatus === "healthy"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                    }`}
                  >
                    {dcPrimaryStatus === "healthy" ? "ĐANG HOẠT ĐỘNG (100% TẢI)" : "SẬP TOÀN BỘ (DISASTER)"}
                  </span>
                </div>
                <p className="text-xs text-neutral-400">
                  {dcPrimaryStatus === "healthy"
                    ? "Máy chủ tính toán, cơ sở dữ liệu chính (Master DB) và cụm lưu trữ đang phục vụ tất cả người dùng bình thường."
                    : "Hỏa hoạn hoặc đứt lưới điện khiến toàn bộ máy chủ và đường truyền tại TP.HCM ngưng trệ!"}
                </p>
                <div className="mt-3 text-xs font-mono text-neutral-300 bg-neutral-950/80 p-2 rounded border border-neutral-800">
                  Tình trạng tải: {dcPrimaryStatus === "healthy" ? "🟢 10,000 req/sec" : "🔴 0 req/sec (DROPPED)"}
                </div>
              </div>

              {/* Data Center B (Secondary / Standby) */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  dcSecondaryStatus === "active_serving"
                    ? "border-emerald-500/60 bg-emerald-950/30 shadow-lg shadow-emerald-950/50"
                    : "border-blue-500/30 bg-blue-950/20"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-white flex items-center gap-2">
                    <span>🏢 Data Center B (Secondary - Hà Nội)</span>
                  </span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded ${
                      dcSecondaryStatus === "active_serving"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }`}
                  >
                    {dcSecondaryStatus === "active_serving" ? "ĐÃ TIẾP NHẬN TẢI (FAILOVER)" : "DỰ PHÒNG NÓNG (HOT STANDBY)"}
                  </span>
                </div>
                <p className="text-xs text-neutral-400">
                  {dcSecondaryStatus === "active_serving"
                    ? "Hệ thống DNS & Load Balancer toàn cầu đã điều hướng 100% lưu lượng truy cập sang cụm máy chủ tại Hà Nội."
                    : "Dữ liệu đang được đồng bộ liên tục ngầm (Replication) từ DC A qua đường truyền riêng."}
                </p>
                <div className="mt-3 text-xs font-mono text-neutral-300 bg-neutral-950/80 p-2 rounded border border-neutral-800">
                  Tình trạng tải: {dcSecondaryStatus === "active_serving" ? "🟢 10,000 req/sec (SERVED)" : "🟡 Chờ lệnh Failover"}
                </div>
              </div>
            </div>

            {/* Metrics: RTO and RPO Analysis */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-blue-500/30 bg-neutral-950 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    RTO (Recovery Time Objective)
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                    Thời Gian Phục Hồi
                  </span>
                </div>
                <div className="mt-2 text-2xl font-black text-white">
                  {failoverInitiated ? `${recoveryTimeSec} Giây` : "Mục tiêu: < 60 Giây"}
                </div>
                <p className="mt-1 text-xs text-neutral-400">
                  Khoảng thời gian tối đa cho phép hệ thống ngừng hoạt động trước khi phục hồi lại dịch vụ.
                </p>
              </div>

              <div className="rounded-xl border border-amber-500/30 bg-neutral-950 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    RPO (Recovery Point Objective)
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                    Mức Độ Mất Dữ Liệu
                  </span>
                </div>
                <div className="mt-2 text-2xl font-black text-white">
                  {replicationLagSec} Giây Độ Trễ
                </div>
                <p className="mt-1 text-xs text-neutral-400">
                  Khoảng thời gian dữ liệu tối đa chấp nhận bị mất (tính từ thời điểm thảm họa ngược về bản sao lưu gần nhất).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
