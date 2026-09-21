"use client";
import React, { useState } from "react";
import {
  HardDrive,
  Database,
  Layers,
  ShieldCheck,
  AlertTriangle,
  RefreshCw,
  Plus,
  Trash2,
  CheckCircle2,
  Sparkles,
  Server,
  Cpu,
  ArrowRight,
  Sliders
} from "lucide-react";

export default function StorageVirtualizationSandbox() {
  const [activeMode, setActiveMode] = useState("virtualized"); // 'local' | 'virtualized'
  const [allocatedVms, setAllocatedVms] = useState([
    { id: "vm-1", name: "Khách hàng Alpha (E-Commerce)", size: 250, color: "bg-sky-500" },
    { id: "vm-2", name: "Khách hàng Beta (Database CRM)", size: 400, color: "bg-purple-500" },
    { id: "vm-3", name: "Khách hàng Gamma (Web App)", size: 150, color: "bg-emerald-500" }
  ]);
  const [simulatedDiskFail, setSimulatedDiskFail] = useState(false);

  const TOTAL_POOL_CAPACITY = 2000; // 2000 GB = 2 TB
  const usedCapacity = allocatedVms.reduce((acc, vm) => acc + vm.size, 0);
  const remainingCapacity = TOTAL_POOL_CAPACITY - usedCapacity;

  const handleAddVm = () => {
    if (remainingCapacity < 200) return;
    const newId = `vm-${Date.now()}`;
    setAllocatedVms([
      ...allocatedVms,
      { id: newId, name: `Khách hàng mới #${allocatedVms.length + 1}`, size: 200, color: "bg-amber-500" }
    ]);
  };

  const handleRemoveVm = (id) => {
    setAllocatedVms(allocatedVms.filter((vm) => vm.id !== id));
  };

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-linear-to-b from-stone-50/70 via-white to-stone-50/50 p-5 sm:p-7 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-purple-600 text-white mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Hộp Cát Quản Lý Lưu Trữ (Storage Sandbox)
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Mục IV: Lưu Trữ Cục Bộ vs Ảo Hóa Lưu Trữ (Storage Virtualization)
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Trực quan hóa nhược điểm của ổ đĩa cục bộ rải rác và sức mạnh của Ảo hóa lưu trữ: tách rời vị trí vật lý, gom thành Pool chung và cấp phát quota linh hoạt.
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-stone-100 border border-stone-200 self-start sm:self-auto">
          <button
            onClick={() => setActiveMode("local")}
            className={`px-3 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeMode === "local"
                ? "bg-stone-900 text-amber-400 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            1. Lưu Trữ Cục Bộ (Chưa Ảo Hóa)
          </button>
          <button
            onClick={() => setActiveMode("virtualized")}
            className={`px-3 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeMode === "virtualized"
                ? "bg-stone-900 text-amber-400 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            2. Ảo Hóa Lưu Trữ (Khuyến Nghị)
          </button>
        </div>
      </div>

      {/* ============================================================
          MODE 1: LOCAL STORAGE (PROBLEMS)
          ============================================================ */}
      {activeMode === "local" && (
        <div className="mt-6 space-y-5 animate-in fade-in duration-300">
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-900 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong>2 Vấn Đề Chí Mạng Của Lưu Trữ Cục Bộ (Local Storage):</strong>
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-rose-800">
                <li>1 Server vật lý chạy nhiều máy ảo (VM) của nhiều khách hàng đồng thời ➔ Khó kiểm soát và giới hạn quota dung lượng độc lập.</li>
                <li>Ổ cứng phân tán rải rác khắp hàng trăm rack trong DC ➔ Khi 1 ổ đĩa hỏng, nhân viên kỹ thuật phải chạy bộ đến <strong>đúng rack vật lý cụ thể</strong> để tháo lắp thay thế.</li>
              </ul>
            </div>
          </div>

          {/* Scattered Racks Diagram */}
          <div className="p-6 rounded-3xl bg-stone-950 text-white border-2 border-stone-800 shadow-xl">
            <div className="text-xs font-mono font-bold text-amber-400 mb-4 text-center">
              Ổ ĐĨA BỊ KHÓA CHẾT VÀO VỊ TRÍ TỪNG RACK VẬT LÝ
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Rack A */}
              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-700">
                <div className="text-xs font-bold text-stone-300">Rack #12 (Dãy A)</div>
                <div className="mt-2 p-2.5 rounded-xl bg-stone-800 border border-stone-700 space-y-1.5">
                  <div className="text-[11px] font-mono text-emerald-400 flex items-center justify-between">
                    <span>Server 1A: Ổ cứng 500GB</span>
                    <HardDrive className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[10px] text-stone-400">Chỉ dùng 120GB ➔ Lãng phí 380GB thừa</div>
                </div>
              </div>

              {/* Rack B (Full/Error) */}
              <div className="p-4 rounded-2xl bg-stone-900 border border-rose-500/70">
                <div className="text-xs font-bold text-rose-400">Rack #25 (Dãy B) — BÁO ĐỘNG</div>
                <div className="mt-2 p-2.5 rounded-xl bg-rose-950/60 border border-rose-500/50 space-y-1.5">
                  <div className="text-[11px] font-mono text-rose-300 flex items-center justify-between">
                    <span>Server 2B: Ổ cứng 500GB</span>
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                  </div>
                  <div className="text-[10px] text-rose-300 font-bold">ĐÃ ĐẦY 100% ➔ Server bị treo!</div>
                </div>
                <div className="mt-2 text-[9px] text-rose-400 text-center">
                  Nhân viên phải mang ổ cứng chạy đến đúng Rack #25 thay thế
                </div>
              </div>

              {/* Rack C */}
              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-700">
                <div className="text-xs font-bold text-stone-300">Rack #48 (Dãy C)</div>
                <div className="mt-2 p-2.5 rounded-xl bg-stone-800 border border-stone-700 space-y-1.5">
                  <div className="text-[11px] font-mono text-amber-400 flex items-center justify-between">
                    <span>Server 3C: Ổ cứng 1TB</span>
                    <HardDrive className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[10px] text-stone-400">Dùng 850GB ➔ Sắp cạn kiệt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          MODE 2: STORAGE VIRTUALIZATION (SOLUTION)
          ============================================================ */}
      {activeMode === "virtualized" && (
        <div className="mt-6 space-y-6 animate-in fade-in duration-300">
          {/* Solution Banner */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>Giải Pháp Ảo Hóa Lưu Trữ (Storage Virtualization):</strong>
              <p className="mt-0.5 text-emerald-800 leading-relaxed">
                Tách rời hoàn toàn lưu trữ vật lý khỏi vị trí rack cụ thể. Toàn bộ ổ cứng được gom thành một <strong>Hồ chứa chung (Centralized Storage Pool)</strong>, cho phép cấp phát dung lượng động cho các máy ảo qua phần mềm mà không cần đụng vào phần cứng.
              </p>
            </div>
          </div>

          {/* Centralized Storage Pool Visualizer */}
          <div className="p-6 rounded-3xl bg-stone-950 text-white border-2 border-stone-800 shadow-2xl">
            {/* Storage Pool Bar */}
            <div className="pb-5 border-b border-stone-800">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-purple-400" />
                  <span className="font-mono font-bold text-sm text-stone-200">
                    CENTRALIZED STORAGE POOL (TỔNG DUNG LƯỢNG: {TOTAL_POOL_CAPACITY} GB)
                  </span>
                </div>
                <span className="text-xs font-mono text-amber-400">
                  Đã cấp phát: {usedCapacity} GB / Còn trống: {remainingCapacity} GB
                </span>
              </div>

              {/* Progress Bar of Pool */}
              <div className="w-full h-4 rounded-full bg-stone-800 overflow-hidden flex">
                {allocatedVms.map((vm) => (
                  <div
                    key={vm.id}
                    style={{ width: `${(vm.size / TOTAL_POOL_CAPACITY) * 100}%` }}
                    className={`${vm.color} transition-all duration-300`}
                    title={`${vm.name}: ${vm.size} GB`}
                  />
                ))}
              </div>
            </div>

            {/* Allocated Virtual Machines (Clients) */}
            <div className="mt-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                  Danh Sách Máy Ảo (VMs) Được Cấp Phát Dung Lượng:
                </span>
                <button
                  onClick={handleAddVm}
                  disabled={remainingCapacity < 200}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 text-white font-extrabold text-xs hover:bg-purple-500 disabled:opacity-50 transition-colors shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Cấp Thêm VM Mới (+200GB)
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {allocatedVms.map((vm) => (
                  <div key={vm.id} className="p-3.5 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-stone-200 flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${vm.color}`} />
                        <span className="truncate max-w-[140px]">{vm.name}</span>
                      </div>
                      <div className="text-[11px] font-mono text-amber-400 mt-1">
                        Dung lượng: {vm.size} GB
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveVm(vm.id)}
                      className="p-1.5 rounded-lg text-stone-500 hover:text-rose-400 hover:bg-stone-800 transition-colors"
                      title="Thu hồi VM"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Self-Healing / Fault Tolerance Simulation */}
            <div className="mt-6 pt-4 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-stone-300">
                  Thử nghiệm sự cố phần cứng: Giả lập 1 ổ đĩa vật lý trong pool bị cháy hỏng
                </span>
              </div>

              <button
                onClick={() => setSimulatedDiskFail(!simulatedDiskFail)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  simulatedDiskFail
                    ? "bg-rose-500 text-white shadow-xs"
                    : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                }`}
              >
                {simulatedDiskFail ? "💥 Ổ Đĩa Đang Hỏng ➔ Hệ Thống Tự Khôi Phục" : "Thử Nghiệm Hỏng 1 Ổ Đĩa"}
              </button>
            </div>

            {simulatedDiskFail && (
              <div className="mt-3 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-xs text-emerald-300 flex items-center gap-2 animate-in fade-in duration-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>An toàn tuyệt đối:</strong> Ảo hóa lưu trữ tự động phân bổ lại các khối dữ liệu (Data Blocks) sang các ổ đĩa dự phòng còn lại trong Pool. Máy ảo của khách hàng không bị gián đoạn dù chỉ 1 mili-giây!
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quick Summary Note */}
      <div className="mt-5 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs space-y-1">
        <div className="font-extrabold text-amber-900">📌 Ghi nhớ cốt lõi Mục IV:</div>
        <p className="text-stone-700 leading-relaxed">
          • <strong>Lưu trữ phân tán + không ảo hóa:</strong> Rất khó bảo trì, dễ xảy ra lỗi cấp phát dung lượng, tốn công nhân sự.<br />
          • <strong>Ảo hóa lưu trữ (Storage Virtualization):</strong> Tách rời lưu trữ vật lý khỏi vị trí cụ thể, quản lý và cấp phát quota tập trung linh hoạt.
        </p>
      </div>
    </div>
  );
}
