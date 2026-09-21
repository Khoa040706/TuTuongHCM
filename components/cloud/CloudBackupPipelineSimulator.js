"use client";
import React, { useState, useEffect } from "react";

export default function CloudBackupPipelineSimulator() {
  const [activeTab, setActiveTab] = useState("pipeline"); // 'pipeline' | 'components' | 'balance'
  const [selectedSource, setSelectedSource] = useState("db"); // 'db' | 'vm' | 'files'
  const [pipelineStep, setPipelineStep] = useState(0); // 0: idle, 1: select, 2: transfer, 3: store, 4: completed
  const [isSimulating, setIsSimulating] = useState(false);
  const [restoreDrillActive, setRestoreDrillActive] = useState(false);
  const [restoreProgress, setRestoreProgress] = useState(0);
  
  // Interactive Threat-Shield Balance state
  const [activeChallenge, setActiveChallenge] = useState("security"); // 'security' | 'compliance'
  const [shieldActive, setShieldActive] = useState(false);

  const dataSources = {
    db: {
      name: "Transactional Database",
      detail: "Oracle / MySQL Production DB",
      rawSize: "250 GB",
      dedupSize: "68 GB",
      type: "Dữ liệu cấu trúc khối (Relational Tables)",
      icon: "🗄️"
    },
    vm: {
      name: "Virtual Machine Image",
      detail: "VMware vSphere / Hyper-V VMDK",
      rawSize: "500 GB",
      dedupSize: "115 GB",
      type: "Ảnh đĩa máy ảo hệ điều hành & ứng dụng",
      icon: "🖥️"
    },
    files: {
      name: "Enterprise File Repository",
      detail: "Hồ sơ hợp đồng & Tài liệu PDF/CAD",
      rawSize: "180 GB",
      dedupSize: "92 GB",
      type: "Tệp tin phi cấu trúc văn phòng",
      icon: "📁"
    }
  };

  const handleStartBackup = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setRestoreDrillActive(false);
    setRestoreProgress(0);
    setPipelineStep(1);

    setTimeout(() => {
      setPipelineStep(2);
      setTimeout(() => {
        setPipelineStep(3);
        setTimeout(() => {
          setPipelineStep(4);
          setIsSimulating(false);
        }, 1400);
      }, 1500);
    }, 1300);
  };

  const handleRunRestoreDrill = () => {
    if (restoreDrillActive) return;
    setRestoreDrillActive(true);
    setRestoreProgress(0);

    const interval = setInterval(() => {
      setRestoreProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  return (
    <div className="my-8 rounded-2xl border border-sky-500/20 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-900/90 p-5 shadow-2xl backdrop-blur-xl sm:p-7 text-slate-100">
      {/* Visualizer Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-sky-500/20 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
            <span>Mục V</span>
            <span className="h-1 w-1 rounded-full bg-sky-400" />
            <span>Quy Trình 3 Bước Chuẩn Giáo Trình</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
            Cloud-based Backup System Simulator
          </h3>
          <p className="text-xs text-sky-200/70 sm:text-sm">
            Trực quan hóa quy trình Select → Transfer → Store/Manage và lá chắn giải pháp đối kháng
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-1.5 rounded-xl border border-slate-700/50 bg-slate-950/70 p-1">
          <button
            onClick={() => setActiveTab("pipeline")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeTab === "pipeline"
                ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🔄 3 Bước Sao Lưu
          </button>
          <button
            onClick={() => setActiveTab("components")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeTab === "components"
                ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🏛️ 3 Thành Phần
          </button>
          <button
            onClick={() => setActiveTab("balance")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeTab === "balance"
                ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            ⚖️ Thách Thức & Giải Pháp
          </button>
        </div>
      </div>

      {/* TAB 1: 3-STEP PIPELINE SIMULATOR */}
      {activeTab === "pipeline" && (
        <div className="mt-6 space-y-6">
          {/* Data Source Selector */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-sky-300/80">
              1. Lựa chọn nguồn dữ liệu cần sao lưu (Data Source)
            </label>
            <div className="mt-2.5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {Object.entries(dataSources).map(([key, src]) => {
                const isSelected = selectedSource === key;
                return (
                  <button
                    key={key}
                    disabled={isSimulating}
                    onClick={() => {
                      setSelectedSource(key);
                      setPipelineStep(0);
                      setRestoreDrillActive(false);
                    }}
                    className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all ${
                      isSelected
                        ? "border-sky-400 bg-sky-500/15 shadow-lg shadow-sky-500/10 ring-1 ring-sky-400/50"
                        : "border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-800/40"
                    } ${isSimulating ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <span className="text-2xl">{src.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-white">{src.name}</div>
                      <div className="text-xs text-slate-400">{src.detail}</div>
                      <div className="mt-1 flex items-center gap-2 text-[11px] text-sky-300">
                        <span>Gốc: {src.rawSize}</span>
                        <span>→</span>
                        <span className="font-bold text-emerald-300">Nén: {src.dedupSize}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive 3-Stage Pipeline Display */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold text-slate-400">
                ĐƯỜNG ỐNG SAO LƯU (CLOUD DATA BACKUP PIPELINE)
              </span>
              <span className="text-xs font-bold text-sky-400">
                Khẩu quyết: Select → Transfer → Store/Manage
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* STEP 1: SELECT */}
              <div
                className={`relative rounded-xl border p-4 transition-all duration-500 ${
                  pipelineStep === 1
                    ? "border-amber-400 bg-amber-500/15 ring-2 ring-amber-400/40 shadow-lg shadow-amber-500/20"
                    : pipelineStep > 1
                    ? "border-emerald-500/50 bg-emerald-500/10 text-slate-300"
                    : "border-slate-800 bg-slate-900/40 text-slate-500"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-amber-400/20 px-2 py-0.5 text-[11px] font-bold text-amber-300">
                    BƯỚC 1
                  </span>
                  {pipelineStep === 1 && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                    </span>
                  )}
                  {pipelineStep > 1 && <span className="text-emerald-400 text-xs font-bold">✓ Đã lọc</span>}
                </div>
                <h4 className="mt-2 font-bold text-white">Select backup data</h4>
                <p className="mt-1 text-xs text-slate-300">
                  Chọn lọc dữ liệu cần sao lưu từ nguồn {dataSources[selectedSource].name}.
                </p>
                <div className="mt-3 space-y-1 text-[11px] text-slate-400 border-t border-slate-700/40 pt-2">
                  <div>• Dung lượng gốc: <strong className="text-slate-200">{dataSources[selectedSource].rawSize}</strong></div>
                  <div>• Khử trùng lặp (Deduplication): <strong className="text-emerald-300">-60% blocks</strong></div>
                  <div>• Lập chỉ mục Snapshot metadata</div>
                </div>
              </div>

              {/* STEP 2: TRANSFER */}
              <div
                className={`relative rounded-xl border p-4 transition-all duration-500 ${
                  pipelineStep === 2
                    ? "border-sky-400 bg-sky-500/15 ring-2 ring-sky-400/40 shadow-lg shadow-sky-500/20"
                    : pipelineStep > 2
                    ? "border-emerald-500/50 bg-emerald-500/10 text-slate-300"
                    : "border-slate-800 bg-slate-900/40 text-slate-500"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-sky-400/20 px-2 py-0.5 text-[11px] font-bold text-sky-300">
                    BƯỚC 2
                  </span>
                  {pipelineStep === 2 && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
                    </span>
                  )}
                  {pipelineStep > 2 && <span className="text-emerald-400 text-xs font-bold">✓ Đã truyền</span>}
                </div>
                <h4 className="mt-2 font-bold text-white">Transfer data to cloud</h4>
                <p className="mt-1 text-xs text-slate-300">
                  Truyền dữ liệu nén qua đường hầm mạng tốc độ cao lên Cloud.
                </p>
                <div className="mt-3 space-y-1 text-[11px] text-slate-400 border-t border-slate-700/40 pt-2">
                  <div>• Đường truyền: <strong className="text-sky-300">SSL/TLS In-transit AES-256</strong></div>
                  <div>• Transport Optimization: <strong className="text-slate-200">Đa luồng song song</strong></div>
                  <div>• Băng thông đẩy lên: <strong className="text-emerald-300">850 Mbps</strong></div>
                </div>
              </div>

              {/* STEP 3: STORE & MANAGE */}
              <div
                className={`relative rounded-xl border p-4 transition-all duration-500 ${
                  pipelineStep === 3
                    ? "border-violet-400 bg-violet-500/15 ring-2 ring-violet-400/40 shadow-lg shadow-violet-500/20"
                    : pipelineStep === 4
                    ? "border-emerald-500/60 bg-emerald-500/15 text-slate-300 ring-1 ring-emerald-400/40"
                    : "border-slate-800 bg-slate-900/40 text-slate-500"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-violet-400/20 px-2 py-0.5 text-[11px] font-bold text-violet-300">
                    BƯỚC 3
                  </span>
                  {pipelineStep === 3 && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
                    </span>
                  )}
                  {pipelineStep === 4 && <span className="text-emerald-400 text-xs font-bold">✓ Hoàn tất</span>}
                </div>
                <h4 className="mt-2 font-bold text-white">Store and manage</h4>
                <p className="mt-1 text-xs text-slate-300">
                  Lưu trữ & quản lý bản backup trên hạ tầng lưu trữ đám mây an toàn.
                </p>
                <div className="mt-3 space-y-1 text-[11px] text-slate-400 border-t border-slate-700/40 pt-2">
                  <div>• Vị trí: <strong className="text-violet-300">Multi-Region Cloud Vault</strong></div>
                  <div>• Retention Policy: <strong className="text-slate-200">Lưu trữ 30 ngày (WORM)</strong></div>
                  <div>• Mã hóa At-rest: <strong className="text-emerald-300">KMS Key Quản lý riêng</strong></div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-slate-800 pt-4">
              <button
                onClick={handleStartBackup}
                disabled={isSimulating}
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all shadow-lg ${
                  isSimulating
                    ? "bg-slate-800 text-slate-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-400 hover:to-blue-500 shadow-sky-500/25 active:scale-98"
                }`}
              >
                <span>{isSimulating ? "⏳ Đang chạy sao lưu..." : "🚀 Kích hoạt Quy trình Sao lưu 3 Bước"}</span>
              </button>

              {pipelineStep === 4 && (
                <button
                  onClick={handleRunRestoreDrill}
                  disabled={restoreDrillActive && restoreProgress < 100}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/20 px-4 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/30 transition-all active:scale-98"
                >
                  <span>🎯 Diễn tập Khôi phục Dữ liệu (Instant Restore Drill)</span>
                </button>
              )}
            </div>

            {/* Restore Drill Feedback */}
            {restoreDrillActive && (
              <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-4 transition-all">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-300">
                    Tiến độ khôi phục dữ liệu từ Cloud Backup:
                  </span>
                  <span className="font-mono font-bold text-emerald-400">{restoreProgress}%</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
                    style={{ width: `${restoreProgress}%` }}
                  />
                </div>
                {restoreProgress === 100 && (
                  <p className="mt-2 text-xs text-emerald-200">
                    ✅ Diễn tập thành công! Hệ thống đáp ứng cam kết RTO &lt; 5 phút, toàn vẹn 100% dữ liệu mà không gây gián đoạn kinh doanh.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* 3 Core Benefits Showcase */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-sky-500/20 bg-sky-950/20 p-3.5">
              <div className="text-xl">⚡</div>
              <div className="mt-1 font-bold text-sky-300 text-sm">High Availability</div>
              <div className="text-xs text-slate-300">Tính sẵn sàng cao</div>
              <p className="mt-1 text-[11px] text-slate-400">
                Dữ liệu bản sao lưu luôn sẵn sàng phục hồi mọi lúc, mọi nơi ngay khi sự cố xảy ra.
              </p>
            </div>
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-3.5">
              <div className="text-xl">🛡️</div>
              <div className="mt-1 font-bold text-emerald-300 text-sm">Data Security</div>
              <div className="text-xs text-slate-300">Bảo mật dữ liệu</div>
              <p className="mt-1 text-[11px] text-slate-400">
                Mã hóa đầu cuối In-transit & At-rest, cô lập an toàn trước ransomware và tấn công mạng.
              </p>
            </div>
            <div className="rounded-xl border border-amber-500/20 bg-amber-950/20 p-3.5">
              <div className="text-xl">💰</div>
              <div className="mt-1 font-bold text-amber-300 text-sm">Cost Efficiency</div>
              <div className="text-xs text-slate-300">Hiệu quả chi phí</div>
              <p className="mt-1 text-[11px] text-slate-400">
                Loại bỏ chi phí mua sắm băng từ vật lý, tủ đĩa dự phòng và bảo trì trung tâm dữ liệu thứ hai.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 3 CORE COMPONENTS */}
      {activeTab === "components" && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-xs text-slate-300">
            Hệ thống sao lưu trên Cloud (Cloud-based Backup System) được cấu thành từ đúng <strong className="text-sky-300">3 thành phần chính</strong> vận hành nhịp nhàng:
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Component 1 */}
            <div className="rounded-xl border border-sky-500/30 bg-slate-900/80 p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-2xl">
                  📤
                </span>
                <div>
                  <div className="text-xs font-bold text-sky-400">THÀNH PHẦN 1</div>
                  <h4 className="font-bold text-white text-base">Data Sources</h4>
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-300 font-medium">Nguồn dữ liệu cần backup</div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Là nơi phát sinh dữ liệu hoạt động của doanh nghiệp cần được bảo vệ: Các máy chủ cơ sở dữ liệu quan hệ (SQL, Oracle), máy ảo (VMDK/VHDX), các thư mục tệp tin tài liệu và ứng dụng SaaS.
              </p>
              <div className="mt-4 rounded-lg bg-slate-950/60 p-2.5 text-[11px] text-sky-200/80">
                • Phân loại dữ liệu nóng / lạnh<br />
                • Hỗ trợ tác vụ Snapshot trực tiếp
              </div>
            </div>

            {/* Component 2 */}
            <div className="rounded-xl border border-blue-500/30 bg-slate-900/80 p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-2xl">
                  ☁️
                </span>
                <div>
                  <div className="text-xs font-bold text-blue-400">THÀNH PHẦN 2</div>
                  <h4 className="font-bold text-white text-base">Cloud Infrastructure</h4>
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-300 font-medium">Hạ tầng cloud lưu bản backup</div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Kho lưu trữ đám mây khổng lồ của các nhà cung cấp (AWS S3 Glacier, Azure Blob Storage, Google Cloud Storage) đảm bảo khả năng sao lưu phân tán đa vùng địa lý với độ bền dữ liệu lên đến 99.999999999%.
              </p>
              <div className="mt-4 rounded-lg bg-slate-950/60 p-2.5 text-[11px] text-blue-200/80">
                • Khả năng mở rộng vô hạn (Elastic)<br />
                • Tự động sao chép đa khu vực (Geo-redundant)
              </div>
            </div>

            {/* Component 3 */}
            <div className="rounded-xl border border-indigo-500/30 bg-slate-900/80 p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-2xl">
                  ⚙️
                </span>
                <div>
                  <div className="text-xs font-bold text-indigo-400">THÀNH PHẦN 3</div>
                  <h4 className="font-bold text-white text-base">Backup Management Software</h4>
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-300 font-medium">Phần mềm quản lý sao lưu</div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Bộ não điều phối toàn bộ quy trình: Lập lịch trình tự động (Cron schedule), thực hiện nén và khử trùng lặp (Deduplication), mã hóa khóa bảo mật, giám sát tình trạng và kích hoạt quy trình khôi phục sự cố.
              </p>
              <div className="mt-4 rounded-lg bg-slate-950/60 p-2.5 text-[11px] text-indigo-200/80">
                • Bảng điều khiển quản trị trung tâm<br />
                • Cảnh báo lỗi & Báo cáo tuân thủ tự động
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: THREAT-SHIELD BALANCE (MỤC V.4) */}
      {activeTab === "balance" && (
        <div className="mt-6 space-y-6">
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white">
                Bảng Cân Bằng Đối Kháng: Thách Thức vs Giải Pháp (Mục V.4)
              </h4>
              <span className="text-xs text-amber-400 font-medium">
                Click chọn thách thức để bật lá chắn giải pháp
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Challenge 1 */}
            <button
              onClick={() => {
                setActiveChallenge("security");
                setShieldActive(true);
              }}
              className={`rounded-xl border p-5 text-left transition-all ${
                activeChallenge === "security"
                  ? "border-red-400 bg-red-950/30 ring-1 ring-red-400/50"
                  : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="rounded bg-red-500/20 px-2 py-0.5 text-xs font-bold text-red-300">
                  THÁCH THỨC 1
                </span>
                <span className="text-2xl">⚠️</span>
              </div>
              <h4 className="mt-2 text-base font-bold text-white">Data security (Bảo mật dữ liệu)</h4>
              <p className="mt-1 text-xs text-slate-300">
                Rủi ro bị nghe lén trên đường truyền mạng, bị xâm nhập đánh cắp dữ liệu mật trong kho lưu trữ hoặc bị mã độc Ransomware tống tiền.
              </p>
            </button>

            {/* Challenge 2 */}
            <button
              onClick={() => {
                setActiveChallenge("compliance");
                setShieldActive(true);
              }}
              className={`rounded-xl border p-5 text-left transition-all ${
                activeChallenge === "compliance"
                  ? "border-amber-400 bg-amber-950/30 ring-1 ring-amber-400/50"
                  : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="rounded bg-amber-500/20 px-2 py-0.5 text-xs font-bold text-amber-300">
                  THÁCH THỨC 2
                </span>
                <span className="text-2xl">⚖️</span>
              </div>
              <h4 className="mt-2 text-base font-bold text-white">Regulatory compliance (Tuân thủ quy định)</h4>
              <p className="mt-1 text-xs text-slate-300">
                Đòi hỏi khắt khe về vị trí địa lý dữ liệu (Data Residency), đường truyền băng thông lớn và yêu cầu kiểm toán lưu trữ độc lập.
              </p>
            </button>
          </div>

          {/* Active Solution Shield Display */}
          <div className="rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-slate-900/80 to-emerald-950/40 p-5 shadow-xl">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-2xl">
                🛡️
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  GIẢI PHÁP ĐỐI ỨNG CHUẨN GIÁO TRÌNH
                </span>
                <h4 className="text-base font-bold text-white">
                  {activeChallenge === "security"
                    ? "Encryption and security (Mã hóa & Bảo mật)"
                    : "Transport Optimization + Management and monitoring (Tối ưu hóa đường truyền & Giám sát)"}
                </h4>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs text-slate-300 border-t border-emerald-500/20 pt-3">
              {activeChallenge === "security" ? (
                <>
                  <div className="rounded-lg bg-slate-950/60 p-3">
                    <strong className="text-emerald-300">1. Mã hóa đa tầng:</strong> Áp dụng chuẩn mã hóa quân sự AES-256 cho cả dữ liệu trên đường truyền (In-transit qua TLS 1.3) và dữ liệu đang lưu (At-rest).
                  </div>
                  <div className="rounded-lg bg-slate-950/60 p-3">
                    <strong className="text-emerald-300">2. Cô lập bản sao lưu (Air-gapped):</strong> Lưu trữ phiên bản sao lưu bất biến (Immutable / WORM - Write Once, Read Many) ngăn chặn triệt để mã độc xóa/mã hóa tống tiền.
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-lg bg-slate-950/60 p-3">
                    <strong className="text-emerald-300">1. Transport Optimization:</strong> Tối ưu hóa băng thông mạng bằng thuật toán nén thông minh, chia nhỏ khối truyền tải song song và điều tiết lưu lượng ngoài giờ cao điểm.
                  </div>
                  <div className="rounded-lg bg-slate-950/60 p-3">
                    <strong className="text-emerald-300">2. Management and Monitoring:</strong> Phần mềm quản lý cung cấp nhật ký kiểm toán (Audit logs) chi tiết, tự động báo cáo tuân thủ tiêu chuẩn và cảnh báo mọi hành vi truy cập trái phép.
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
