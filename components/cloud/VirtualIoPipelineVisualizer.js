"use client";
import React, { useState } from "react";
import {
  HardDrive,
  Cpu,
  Layers,
  FileCode,
  Copy,
  PackageCheck,
  ArrowRight,
  Database,
  Network,
  Share2,
  Sparkles,
  CheckCircle2,
  Sliders,
  Server
} from "lucide-react";

export default function VirtualIoPipelineVisualizer() {
  const [activeTab, setActiveTab] = useState("io-flow"); // 'io-flow' | 'digital-object'
  const [isPackaged, setIsPackaged] = useState(false);
  const [clonedCount, setClonedCount] = useState(1);

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-linear-to-b from-stone-50/70 via-white to-stone-50/50 p-5 sm:p-7 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-teal-600 text-white mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Nhập Xuất Ảo & Đối Tượng Số
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Mục VI.3 & VI.4: Virtual I/O & VM Là Đối Tượng Số (Digital Object)
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Tìm hiểu cách hệ điều hành máy ảo tương tác với thiết bị I/O ảo không khác gì phần cứng thật, và vì sao VM có thể đóng gói, clone, di chuyển linh hoạt.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-stone-100 border border-stone-200 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("io-flow")}
            className={`px-3 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === "io-flow"
                ? "bg-stone-900 text-amber-400 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            1. Luồng Virtual I/O
          </button>
          <button
            onClick={() => setActiveTab("digital-object")}
            className={`px-3 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === "digital-object"
                ? "bg-stone-900 text-amber-400 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            2. VM Là Digital Object
          </button>
        </div>
      </div>

      {/* ============================================================
          TAB 1: VIRTUAL I/O PIPELINE
          ============================================================ */}
      {activeTab === "io-flow" && (
        <div className="mt-6 space-y-6 animate-in fade-in duration-300">
          <div className="p-6 rounded-3xl bg-stone-950 text-white border-2 border-stone-800 shadow-2xl">
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider text-center mb-6">
              ĐƯỜNG TRUYỀN LỆNH GHI DỮ LIỆU TỪ MÁY ẢO ĐẾN DATA CENTER STORAGE
            </div>

            {/* 4 Pipeline Stages */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
              {/* Step 1: Guest OS */}
              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-700 text-center relative">
                <div className="text-[10px] font-mono text-stone-400">Bước 1</div>
                <div className="font-black text-sm text-sky-400 mt-1">Guest OS</div>
                <p className="text-[11px] text-stone-400 mt-1 leading-snug">
                  Gửi lệnh đọc/ghi tệp tin thông qua driver bus chuẩn.
                </p>
                <div className="mt-2 text-[9px] text-emerald-400 font-mono">Tưởng đang ghi ổ thật</div>
              </div>

              {/* Step 2: Virtual I/O */}
              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-700 text-center relative">
                <div className="text-[10px] font-mono text-stone-400">Bước 2</div>
                <div className="font-black text-sm text-indigo-400 mt-1">Virtual I/O</div>
                <p className="text-[11px] text-stone-400 mt-1 leading-snug">
                  Tầng thiết bị ảo tiếp nhận, mô phỏng đúng tập lệnh bus.
                </p>
                <div className="mt-2 text-[9px] text-indigo-300 font-mono">Không phân biệt được</div>
              </div>

              {/* Step 3: Hypervisor */}
              <div className="p-4 rounded-2xl bg-stone-900 border border-amber-500/60 text-center relative">
                <div className="text-[10px] font-mono text-stone-400">Bước 3</div>
                <div className="font-black text-sm text-amber-400 mt-1">Hypervisor</div>
                <p className="text-[11px] text-stone-400 mt-1 leading-snug">
                  Ánh xạ đĩa ảo (virtual disk) thành các gói tin lưu trữ qua mạng.
                </p>
                <div className="mt-2 text-[9px] text-amber-300 font-mono">Phần mềm điều phối</div>
              </div>

              {/* Step 4: Storage */}
              <div className="p-4 rounded-2xl bg-stone-900 border border-emerald-500/60 text-center relative">
                <div className="text-[10px] font-mono text-stone-400">Bước 4</div>
                <div className="font-black text-sm text-emerald-400 mt-1">DC Storage</div>
                <p className="text-[11px] text-stone-400 mt-1 leading-snug">
                  Device Controller ghi vào hệ thống lưu trữ SAN/NAS qua mạng DC.
                </p>
                <div className="mt-2 text-[9px] text-emerald-300 font-mono">Mảng đĩa vật lý</div>
              </div>
            </div>

            {/* Pipeline Flow Equation */}
            <div className="mt-6 p-3 rounded-2xl bg-stone-900/80 border border-stone-800 text-center text-xs text-stone-300 font-mono">
              <span className="text-amber-400 font-bold">Chuỗi luồng chuẩn:</span> Guest OS ➔ Virtual I/O ➔ Hypervisor ➔ Device controller ➔ Data Center Storage
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-xs text-sky-900">
            <strong>💡 Điểm mấu chốt thi cử:</strong> Từ góc nhìn của hệ điều hành máy ảo (Guest OS), <em>thiết bị ảo không phân biệt được với thiết bị thật</em> vì chúng dùng chung thao tác bus và giao diện tập lệnh.
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 2: VM AS A DIGITAL OBJECT
          ============================================================ */}
      {activeTab === "digital-object" && (
        <div className="mt-6 space-y-6 animate-in fade-in duration-300">
          <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h4 className="font-black text-base text-stone-900">
                  Máy Ảo Là Một Đối Tượng Số (Digital Object)
                </h4>
                <p className="text-xs text-stone-600 mt-0.5">
                  Bởi vì toàn bộ máy ảo được định nghĩa và quản lý 100% bằng phần mềm, nó có thể được đóng gói và sao chép như một tệp tin thông thường.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPackaged(!isPackaged)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all shadow-xs ${
                    isPackaged
                      ? "bg-emerald-600 text-white"
                      : "bg-stone-900 text-amber-400 hover:bg-stone-800"
                  }`}
                >
                  {isPackaged ? "✓ Đã Đóng Gói (file .ova)" : "📦 Đóng Gói Máy Ảo"}
                </button>
                <button
                  onClick={() => setClonedCount(clonedCount + 1)}
                  className="px-3.5 py-2 rounded-xl bg-purple-600 text-white text-xs font-extrabold hover:bg-purple-500 transition-colors shadow-xs flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Nhân Bản ({clonedCount})
                </button>
              </div>
            </div>

            {/* What Hypervisor stores inside a VM Digital Object */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs mb-5">
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="font-extrabold text-stone-900 mb-1">1. Bản Ghi VM</div>
                <p className="text-stone-600 text-[11px]">Thông tin cấu hình CPU, số nhân, UUID và quyền hạn.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="font-extrabold text-stone-900 mb-1">2. Vùng Nhớ Đã Cấp</div>
                <p className="text-stone-600 text-[11px]">Bảng ánh xạ địa chỉ RAM ảo sang RAM vật lý.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="font-extrabold text-stone-900 mb-1">3. Thiết Bị I/O Ảo</div>
                <p className="text-stone-600 text-[11px]">Card mạng ảo (vNIC), ổ đĩa ảo (vDisk), MAC address.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="font-extrabold text-stone-900 mb-1">4. Trạng Thái Hiện Tại</div>
                <p className="text-stone-600 text-[11px]">Thanh ghi CPU, con trỏ lệnh EIP và bộ nhớ cache.</p>
              </div>
            </div>

            {/* Super Powers of Digital Object */}
            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-xs space-y-2">
              <span className="font-extrabold text-purple-950 uppercase tracking-wider block">
                🚀 4 Khả năng vượt trội khi VM là Digital Object:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-purple-900">
                <div>• <strong>Đóng gói (Package):</strong> Xuất ra file hình ảnh duy nhất dễ dàng chia sẻ.</div>
                <div>• <strong>Di chuyển (Migrate):</strong> Chuyển sang máy chủ khác mà không cần tắt máy.</div>
                <div>• <strong>Nhân bản (Clone):</strong> Tạo 100 bản sao trong vài giây phục vụ thử nghiệm.</div>
                <div>• <strong>Cân bằng tải (Load Balancing):</strong> Phân phối động giữa các cluster.</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
