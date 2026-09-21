"use client";
import React, { useState, useEffect } from "react";
import {
  Layers,
  Power,
  RotateCcw,
  Monitor,
  Clock,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRightLeft,
  Cpu,
  Zap,
  Play,
  Terminal
} from "lucide-react";

export default function HostedVsMultibootComparison() {
  const [activeTab, setActiveTab] = useState("compare"); // 'compare' | 'sim-hosted' | 'sim-multiboot'
  const [hostedActiveOs, setHostedActiveOs] = useState("windows"); // 'windows' | 'linux'
  const [multibootState, setMultibootState] = useState("running-win"); // 'running-win' | 'rebooting' | 'grub' | 'running-linux'
  const [rebootTimer, setRebootTimer] = useState(0);

  // Multiboot simulation timer
  useEffect(() => {
    let timer;
    if (multibootState === "rebooting") {
      timer = setTimeout(() => {
        setMultibootState("grub");
      }, 1500);
    } else if (multibootState === "grub") {
      timer = setTimeout(() => {
        setMultibootState("running-linux");
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [multibootState]);

  const triggerHostedSwitch = () => {
    setHostedActiveOs((prev) => (prev === "windows" ? "linux" : "windows"));
  };

  const triggerMultibootReboot = () => {
    if (multibootState === "running-win") {
      setMultibootState("rebooting");
    } else if (multibootState === "running-linux") {
      setMultibootState("rebooting");
    }
  };

  const resetMultiboot = () => {
    setMultibootState("running-win");
  };

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-linear-to-b from-stone-50/70 via-white to-stone-50/50 p-5 sm:p-7 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-purple-600 text-white mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Mô Phỏng Thực Nghiệm & Đối Soánh Trực Quan
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Mục VII.5: Hosted Hypervisor vs Multiboot (Dual Boot)
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Tại sao điện toán hiện đại chuyển hẳn sang <strong>Hosted Hypervisor</strong> thay vì cài <strong>Multiboot</strong>? Trải nghiệm ngay sự khác biệt sống còn giữa chuyển cửa sổ tức thì và phải khởi động lại máy!
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-1.5 bg-stone-100 p-1.5 rounded-2xl border border-stone-200 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("compare")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "compare"
                ? "bg-white text-stone-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Bảng Đối So sánh
          </button>
          <button
            onClick={() => setActiveTab("sim-switch")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "sim-switch"
                ? "bg-purple-600 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            🕹️ Thử Nghiệm Chuyển Đổi OS
          </button>
        </div>
      </div>

      {/* Mode 1: Detailed Comparison Cards */}
      {activeTab === "compare" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          {/* Hosted Hypervisor Card */}
          <div className="rounded-3xl border border-emerald-300 bg-linear-to-b from-emerald-50/40 via-white to-stone-50/30 p-5 sm:p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl bg-emerald-600 text-white shadow-xs">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-black text-stone-900">Hosted Hypervisor (Type 2)</h4>
                  <span className="text-[11px] font-bold text-emerald-700">Chạy đồng thời nhiều OS</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                Linh hoạt tối đa
              </span>
            </div>

            <div className="space-y-3 text-xs text-stone-700 leading-relaxed">
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 font-medium">
                <span className="font-extrabold text-emerald-900">⚡ Chạy đồng thời (Concurrent):</span> Cả Host OS và nhiều Guest OS đều cùng hoạt động song song trong cùng một thời điểm.
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Chuyển đổi tức thì (Instant):</strong> Chuyển giữa Windows và Linux chỉ bằng 1 cú nhấp chuột hoặc tổ hợp phím <kbd className="px-1.5 py-0.5 bg-stone-200 rounded text-[10px] font-mono">Alt + Tab</kbd> (mất 0.1 giây).
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Chia sẻ dữ liệu dễ dàng:</strong> Kéo thả file qua Shared Folders, copy-paste trực tiếp văn bản/ảnh qua Clipboard hai chiều.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>An toàn & Thử nghiệm:</strong> Guest OS chạy cô lập trong môi trường Sandbox ảo; nếu nhiễm virus hoặc lỗi hệ thống chỉ cần xóa snapshot khôi phục, không ảnh hưởng Host.
                  </span>
                </div>
                <div className="flex items-start gap-2 text-stone-500">
                  <span className="font-bold text-amber-600 shrink-0">⚠️ Nhược điểm:</span>
                  <span>Tiêu hao một phần RAM/CPU cho Host OS; hiệu năng đồ họa 3D không đạt tuyệt đối 100%.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Multiboot Card */}
          <div className="rounded-3xl border border-rose-200 bg-linear-to-b from-rose-50/40 via-white to-stone-50/30 p-5 sm:p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl bg-rose-600 text-white shadow-xs">
                  <Power className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-black text-stone-900">Multiboot (Dual Boot)</h4>
                  <span className="text-[11px] font-bold text-rose-700">Chỉ 1 OS duy nhất / lần</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-rose-100 text-rose-800 border border-rose-200">
                Hiệu năng phần cứng
              </span>
            </div>

            <div className="space-y-3 text-xs text-stone-700 leading-relaxed">
              <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 font-medium">
                <span className="font-extrabold text-rose-900">🛑 Chỉ 1 OS tại một thời điểm:</span> Không thể chạy đồng thời. Hệ điều hành nắm quyền kiểm soát 100% phần cứng máy tính.
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Bắt buộc Khởi Động Lại Máy (Reboot):</strong> Muốn chuyển từ Windows sang Ubuntu, bắt buộc phải lưu toàn bộ tài liệu, tắt máy, chờ BIOS POST, chọn lại menu boot GRUB (mất 45s - 1 phút).
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Không chia sẻ thời gian thực:</strong> Không thể copy-paste clipboard, không thể chạy thử nghiệm dịch vụ web trên OS này và kiểm tra trên OS kia đồng thời.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Rủi ro phân vùng đĩa:</strong> Nếu phân vùng bị lỗi bootloader (GRUB hỏng), toàn bộ máy tính có thể không khởi động được vào bất cứ OS nào.
                  </span>
                </div>
                <div className="flex items-start gap-2 text-stone-600">
                  <span className="font-bold text-emerald-600 shrink-0">✓ Ưu điểm:</span>
                  <span>Khai thác 100% sức mạnh phần cứng (phù hợp chơi game AAA hạng nặng hoặc huấn luyện AI nặng cục bộ).</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Interactive Switch Simulation (Dual Arena) */}
      {activeTab === "sim-switch" && (
        <div className="my-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Arena 1: Hosted Hypervisor Switcher */}
            <div className="p-5 rounded-3xl bg-stone-900 text-white border border-stone-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-extrabold text-xs uppercase tracking-wider text-emerald-400">
                    Hosted Hypervisor (Chuyển Cửa Sổ Tức Thì)
                  </span>
                </div>
                <button
                  onClick={triggerHostedSwitch}
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                >
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                  Chuyển OS (0.1s)
                </button>
              </div>

              {/* Window Desktop Visualizer */}
              <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-400 font-mono">Màn hình máy tính người dùng</span>
                  <span className="px-2 py-0.5 rounded-full bg-stone-800 text-[10px] text-stone-300 font-mono">
                    Độ trễ: ~50ms
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Host OS Window */}
                  <div
                    className={`p-3 rounded-xl border transition-all duration-300 ${
                      hostedActiveOs === "windows"
                        ? "border-sky-500 bg-sky-950/40 ring-1 ring-sky-400"
                        : "border-stone-800 bg-stone-900/60 opacity-60"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-sky-400">
                      <span>Windows 11 (Host OS)</span>
                      {hostedActiveOs === "windows" && <span className="text-[10px] text-emerald-400">Active</span>}
                    </div>
                    <p className="text-[11px] text-stone-400 mt-2">
                      Đang mở: Chrome, Word, Spotify. Tiến trình nền chạy liên tục không bị gián đoạn.
                    </p>
                  </div>

                  {/* Guest OS VM Window */}
                  <div
                    className={`p-3 rounded-xl border transition-all duration-300 ${
                      hostedActiveOs === "linux"
                        ? "border-amber-500 bg-amber-950/40 ring-1 ring-amber-400"
                        : "border-stone-800 bg-stone-900/60 opacity-60"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                      <span>Ubuntu VM (Guest OS)</span>
                      {hostedActiveOs === "linux" && <span className="text-[10px] text-emerald-400">Active</span>}
                    </div>
                    <p className="text-[11px] text-stone-400 mt-2">
                      Đang chạy: Web Server Apache, Docker container. Vẫn nhận gói tin bình thường!
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center justify-between">
                  <span>✓ Cả 2 hệ điều hành đều đang hoạt động đồng thời 100%!</span>
                  <span className="font-mono text-xs font-bold">Downtime: 0s</span>
                </div>
              </div>
            </div>

            {/* Arena 2: Multiboot Reboot Nightmare */}
            <div className="p-5 rounded-3xl bg-stone-900 text-white border border-stone-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      multibootState === "rebooting"
                        ? "bg-rose-500 animate-ping"
                        : multibootState === "grub"
                        ? "bg-amber-400"
                        : "bg-emerald-500"
                    }`}
                  />
                  <span className="font-extrabold text-xs uppercase tracking-wider text-rose-400">
                    Multiboot (Phải Reboot Toàn Bộ)
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={triggerMultibootReboot}
                    disabled={multibootState === "rebooting" || multibootState === "grub"}
                    className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white text-xs font-black flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  >
                    <Power className="w-3.5 h-3.5" />
                    Reboot Máy
                  </button>
                  <button
                    onClick={resetMultiboot}
                    className="p-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-all cursor-pointer"
                    title="Reset"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Screen Simulator for Multiboot */}
              <div className="p-4 rounded-2xl bg-black border border-stone-800 min-h-[160px] flex flex-col justify-center text-center space-y-2">
                {multibootState === "running-win" && (
                  <div className="space-y-1.5">
                    <div className="text-sky-400 text-xs font-black">Màn hình Windows 11 Physical</div>
                    <p className="text-[11px] text-stone-400">
                      Chỉ có Windows chạy. Muốn dùng Linux? Bạn phải bấm nút <strong>Reboot Máy</strong> bên trên!
                    </p>
                  </div>
                )}

                {multibootState === "rebooting" && (
                  <div className="space-y-2">
                    <div className="inline-block p-3 rounded-full bg-rose-950 text-rose-400 animate-spin">
                      <RotateCcw className="w-5 h-5" />
                    </div>
                    <div className="text-rose-400 text-xs font-mono font-bold">
                      Restarting PC... Shutting down all services...
                    </div>
                    <p className="text-[10px] text-stone-500">Mọi ứng dụng bị tắt hoàn toàn. Mất 15s tắt máy.</p>
                  </div>
                )}

                {multibootState === "grub" && (
                  <div className="text-left font-mono text-xs text-stone-200 p-2 bg-stone-950 rounded border border-stone-800 space-y-1">
                    <div className="text-amber-400 font-bold">GNU GRUB version 2.06</div>
                    <div className="bg-stone-700 px-2 py-0.5 rounded text-white">* Ubuntu Linux (Loading...)</div>
                    <div className="text-stone-500 px-2 py-0.5">Windows Boot Manager (C:)</div>
                    <div className="text-[10px] text-stone-400 pt-1">Tự động chọn sau 3s...</div>
                  </div>
                )}

                {multibootState === "running-linux" && (
                  <div className="space-y-1.5">
                    <div className="text-amber-400 text-xs font-black">Màn hình Ubuntu Linux Physical</div>
                    <p className="text-[11px] text-stone-400">
                      Đã vào Ubuntu! Nhưng hiện tại <strong>Windows đã bị tắt hoàn toàn</strong>, không thể copy dữ liệu từ Windows sang!
                    </p>
                  </div>
                )}
              </div>

              <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-[11px] flex items-center justify-between">
                <span>⚠️ Chuyển đổi làm đứt đoạn 100% tiến trình công việc!</span>
                <span className="font-mono text-xs font-bold text-amber-400">
                  {multibootState === "running-win" || multibootState === "running-linux" ? "Đang chạy 1 OS" : "Downtime: ~45s"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Summary Matrix Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b-2 border-stone-300 text-stone-900 bg-stone-100/70">
              <th className="py-3 px-4 font-black">Tiêu chí so sánh</th>
              <th className="py-3 px-4 font-black text-emerald-800">Hosted Hypervisor (Type 2)</th>
              <th className="py-3 px-4 font-black text-rose-800">Multiboot (Dual Boot)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 text-stone-700">
            <tr className="hover:bg-stone-50">
              <td className="py-3 px-4 font-bold">Số lượng OS chạy cùng lúc</td>
              <td className="py-3 px-4 font-extrabold text-emerald-700">Nhiều OS đồng thời (Concurrent)</td>
              <td className="py-3 px-4 font-bold text-rose-700">Chỉ 1 OS duy nhất tại một thời điểm</td>
            </tr>
            <tr className="hover:bg-stone-50">
              <td className="py-3 px-4 font-bold">Thời gian chuyển đổi OS</td>
              <td className="py-3 px-4 font-extrabold text-emerald-700">0.1 giây (Chuyển cửa sổ / Alt+Tab)</td>
              <td className="py-3 px-4 font-bold text-rose-700">45 giây – 1 phút (Phải khởi động lại máy)</td>
            </tr>
            <tr className="hover:bg-stone-50">
              <td className="py-3 px-4 font-bold">Chia sẻ tệp & Clipboard</td>
              <td className="py-3 px-4 font-extrabold text-emerald-700">Có (Shared Folders & Bi-directional)</td>
              <td className="py-3 px-4 font-bold text-rose-700">Không (Phải qua USB hoặc phân vùng trung gian)</td>
            </tr>
            <tr className="hover:bg-stone-50">
              <td className="py-3 px-4 font-bold">Hiệu năng phần cứng</td>
              <td className="py-3 px-4 font-bold text-stone-600">80% – 95% (Tốn tài nguyên cho Host OS)</td>
              <td className="py-3 px-4 font-extrabold text-emerald-700">100% Native (Khai thác trực tiếp phần cứng)</td>
            </tr>
            <tr className="hover:bg-stone-50">
              <td className="py-3 px-4 font-bold">Mục đích sử dụng chính</td>
              <td className="py-3 px-4 font-bold text-stone-800">Phát triển, thử nghiệm, học tập, chạy app chéo nền</td>
              <td className="py-3 px-4 font-bold text-stone-800">Chơi game AAA nặng, đồ họa render tối đa</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
