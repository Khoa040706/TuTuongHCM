"use client";
import React, { useState } from "react";
import {
  ShieldAlert,
  ShieldCheck,
  Cpu,
  Layers,
  Lock,
  Unlock,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  Terminal,
  Activity,
  ArrowDown,
  ArrowUp
} from "lucide-react";

export default function PrivilegeLevelsHierarchy() {
  const [illegalAttempt, setIllegalAttempt] = useState(null); // null | 'blocked'

  const triggerIllegalInstruction = () => {
    setIllegalAttempt("blocked");
  };

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-linear-to-b from-stone-50/70 via-white to-stone-50/50 p-5 sm:p-7 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-500 text-white mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Kiến Trúc Phân Tầng Đặc Quyền (Privilege Levels)
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Mục VI.2: Hypervisor Mode vs Kernel Mode vs User Mode
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Khi có Hypervisor, hệ thống được phân cấp thành 3 mức đặc quyền nghiêm ngặt để bảo đảm an ninh và cô lập tuyệt đối giữa các máy ảo.
          </p>
        </div>

        <button
          onClick={triggerIllegalInstruction}
          className="px-4 py-2 rounded-2xl bg-rose-600 text-white font-extrabold text-xs hover:bg-rose-500 transition-all shadow-xs flex items-center gap-2 self-start sm:self-auto"
        >
          <ShieldAlert className="w-4 h-4" />
          💥 Giả Lập VM Gửi Lệnh Trái Phép
        </button>
      </div>

      {/* 3 Privilege Levels Ladder */}
      <div className="mt-6 space-y-4">
        {/* LEVEL 1: HYPERVISOR MODE (HIGHEST PRIVILEGE) */}
        <div className="p-5 rounded-3xl bg-linear-to-r from-stone-900 via-stone-850 to-stone-900 text-white border-2 border-stone-800 shadow-lg relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-amber-500 text-stone-900 font-black text-xs flex items-center justify-center font-mono">
                LV1
              </span>
              <div>
                <h4 className="font-black text-sm sm:text-base text-amber-400">
                  Hypervisor Mode (Root Mode / Ring -1)
                </h4>
                <span className="text-xs text-stone-400">
                  Mức đặc quyền cao nhất — Được tin cậy tuyệt đối (Absolute Trust)
                </span>
              </div>
            </div>
            <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Quyền hạn: 100% Phần cứng
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3 text-xs text-stone-300">
            <div className="p-2.5 rounded-xl bg-stone-800/80 border border-stone-700">
              ✓ Thực hiện mọi thao tác can thiệp phần cứng, CPU, RAM vật lý.
            </div>
            <div className="p-2.5 rounded-xl bg-stone-800/80 border border-stone-700">
              ✓ Duy nhất Hypervisor có quyền tạo mới, tiêu hủy và cấp phát bộ nhớ VM.
            </div>
            <div className="p-2.5 rounded-xl bg-stone-800/80 border border-stone-700">
              ✓ Đóng vai trò trọng tài tối cao phân chia tài nguyên và cô lập lỗi.
            </div>
          </div>
        </div>

        {/* Downward Arrow */}
        <div className="flex justify-center -my-2">
          <ArrowDown className="w-5 h-5 text-stone-400" />
        </div>

        {/* LEVEL 2: KERNEL MODE (OS OF VM) */}
        <div className="p-5 rounded-3xl bg-linear-to-r from-sky-50 via-white to-sky-50 border-2 border-sky-300 shadow-sm relative">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-sky-600 text-white font-black text-xs flex items-center justify-center font-mono">
                LV2
              </span>
              <div>
                <h4 className="font-black text-sm sm:text-base text-sky-900">
                  Kernel Mode (Guest Operating System - OS của VM)
                </h4>
                <span className="text-xs text-stone-600">
                  Mức đặc quyền hệ điều hành máy ảo — Bị giới hạn tập lệnh
                </span>
              </div>
            </div>
            <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
              Tập lệnh bị giới hạn
            </span>
          </div>

          <p className="text-xs text-stone-700 leading-relaxed bg-white/80 p-3 rounded-xl border border-sky-150">
            Guest OS chỉ được sử dụng tài nguyên trong phạm vi bộ nhớ mà Hypervisor đã ấn định cấp phát. Không thể thực thi các lệnh chiếm quyền phần cứng trực tiếp, không thể gây ảnh hưởng hay làm sập các VM khác bên cạnh.
          </p>
        </div>

        {/* Downward Arrow */}
        <div className="flex justify-center -my-2">
          <ArrowDown className="w-5 h-5 text-stone-400" />
        </div>

        {/* LEVEL 3: USER MODE (APPLICATIONS) */}
        <div className="p-5 rounded-3xl bg-linear-to-r from-stone-50 via-white to-stone-50 border border-stone-300 shadow-xs relative">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-stone-700 text-white font-black text-xs flex items-center justify-center font-mono">
                LV3
              </span>
              <div>
                <h4 className="font-black text-sm sm:text-base text-stone-900">
                  User Mode (Ứng dụng người dùng bên trong VM)
                </h4>
                <span className="text-xs text-stone-500">
                  Mức đặc quyền thấp nhất — Không gian người dùng (Web browser, Office, App)
                </span>
              </div>
            </div>
            <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
              Tập lệnh thông thường
            </span>
          </div>

          <p className="text-xs text-stone-600 leading-relaxed bg-stone-50 p-3 rounded-xl border border-stone-200">
            Các ứng dụng chạy trong User mode bị giới hạn tối đa, nếu ứng dụng bị crash hoặc nhiễm mã độc thì chỉ làm sập chính app đó, hoàn toàn không gây ảnh hưởng đến hệ điều hành Guest OS hay các app khác.
          </p>
        </div>
      </div>

      {/* Trap & Emulate Attack Simulation Modal / Alert */}
      {illegalAttempt === "blocked" && (
        <div className="mt-5 p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-xs animate-in fade-in duration-300">
          <div className="flex items-center justify-between pb-2 border-b border-emerald-200 mb-2">
            <div className="flex items-center gap-2 font-black text-emerald-900 text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>CƠ CHẾ TRAP & EMULATE ĐÃ KÍCH HOẠT THÀNH CÔNG!</span>
            </div>
            <button
              onClick={() => setIllegalAttempt(null)}
              className="text-emerald-700 hover:text-emerald-900 font-bold"
            >
              Đóng
            </button>
          </div>
          <p className="text-emerald-800 leading-relaxed">
            Khi Guest OS hoặc ứng dụng cố tình gửi lệnh ghi đè thanh ghi phần cứng (ví dụ: lệnh can thiệp bảng trang RAM vật lý), CPU phát hiện hành vi vi phạm và <strong>gây ngắt (Trap)</strong> đẩy quyền xử lý về <strong>Hypervisor Mode</strong>. Hypervisor kiểm tra, chặn đứng việc can thiệp trái phép và cô lập lỗi ngay lập tức, bảo toàn an ninh 100% cho máy chủ!
          </p>
        </div>
      )}

      {/* Summary Note */}
      <div className="mt-5 p-4 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Quy tắc thi cử:</strong> Chỉ <strong>Hypervisor</strong> mới được tạo VM & cấp phát bộ nhớ; OS của máy ảo chỉ dùng trong phạm vi được cấp.
          </span>
        </div>
        <span className="text-stone-400 font-mono shrink-0">Mục VI.2</span>
      </div>
    </div>
  );
}
