"use client";
import React, { useState } from "react";
import {
  Layers,
  Server,
  Laptop,
  Network,
  HardDrive,
  FolderSync,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Share2,
  Cpu,
  Monitor
} from "lucide-react";

export default function BareMetalVsHostedDuel() {
  const [activeArch, setActiveArch] = useState("compare"); // 'compare' | 'type1' | 'type2'
  const [networkMode, setNetworkMode] = useState("bridged"); // 'bridged' | 'nat' | 'hostonly'
  const [showSharedFolderDemo, setShowSharedFolderDemo] = useState(false);

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-linear-to-b from-stone-50/70 via-white to-stone-50/50 p-5 sm:p-7 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-600 text-white mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Kiến Trúc Đối Kháng & Tính Năng Hypervisor
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Mục VII.1–VII.4: Bare-Metal (Type 1) vs Hosted Hypervisor (Type 2)
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Phân biệt cấu trúc phân tầng giữa <strong>Bare-metal</strong> (tiêu chuẩn Cloud DC) và <strong>Hosted</strong> (chạy trên Host OS) cùng 3 cơ chế: Gán IP riêng, Ánh xạ đĩa ảo và Thư mục chia sẻ.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex gap-1.5 bg-stone-100 p-1.5 rounded-2xl border border-stone-200 self-start sm:self-auto">
          <button
            onClick={() => setActiveArch("compare")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeArch === "compare"
                ? "bg-white text-stone-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Đối Chiếu Song Song
          </button>
          <button
            onClick={() => setActiveArch("type1")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeArch === "type1"
                ? "bg-white text-stone-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Chuyên Sâu Type 1
          </button>
          <button
            onClick={() => setActiveArch("type2")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeArch === "type2"
                ? "bg-white text-stone-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Chuyên Sâu Type 2
          </button>
        </div>
      </div>

      {/* Main Duel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* Type 1: Bare-Metal Hypervisor */}
        {(activeArch === "compare" || activeArch === "type1") && (
          <div
            className={`rounded-3xl border p-5 sm:p-6 transition-all ${
              activeArch === "type1"
                ? "md:col-span-2 bg-linear-to-b from-indigo-50/50 to-white border-indigo-300 ring-2 ring-indigo-200"
                : "bg-white border-stone-200 shadow-md"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl bg-indigo-600 text-white shadow-xs">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-black text-stone-900">Type 1: Bare-Metal Hypervisor</h4>
                  <span className="text-[11px] font-bold text-indigo-600">Trực tiếp trên phần cứng (Native)</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-indigo-100 text-indigo-800 border border-indigo-200">
                Chuẩn Cloud DC
              </span>
            </div>

            {/* Stack Visualizer */}
            <div className="space-y-2 my-4">
              <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200 text-center text-xs font-bold text-purple-900">
                Apps (Ứng dụng người dùng)
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded-xl bg-sky-100 border border-sky-300 text-center text-xs font-extrabold text-sky-900">
                  Guest OS #1 (Linux)
                </div>
                <div className="p-2 rounded-xl bg-sky-100 border border-sky-300 text-center text-xs font-extrabold text-sky-900">
                  Guest OS #2 (Windows)
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-indigo-600 text-white text-center text-xs font-black shadow-xs flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Type 1 Hypervisor (VMware ESXi, Hyper-V Core, KVM, Xen)
              </div>
              <div className="p-3 rounded-xl bg-stone-900 text-stone-200 text-center text-xs font-black flex items-center justify-center gap-2">
                <Cpu className="w-4 h-4 text-amber-400" />
                Physical Hardware (CPU Intel/AMD, RAM ECC, Storage SAN)
              </div>
            </div>

            {/* Characteristics */}
            <div className="space-y-2 text-xs text-stone-600 pt-2 border-t border-stone-100">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Không có Host OS trung gian:</strong> Hypervisor đóng vai trò như hạt nhân điều khiển máy tính, giao tiếp trực tiếp với CPU/RAM.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Hiệu năng cực cao (Near-native):</strong> Độ trễ I/O tối thiểu, tận dụng tối đa sức mạnh phần cứng cho hàng trăm VM đồng thời.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Sản phẩm tiêu biểu:</strong> VMware vSphere/ESXi, Microsoft Hyper-V Server, KVM (Linux Kernel-based VM), Citrix XenServer.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Type 2: Hosted Hypervisor */}
        {(activeArch === "compare" || activeArch === "type2") && (
          <div
            className={`rounded-3xl border p-5 sm:p-6 transition-all ${
              activeArch === "type2"
                ? "md:col-span-2 bg-linear-to-b from-amber-50/50 to-white border-amber-300 ring-2 ring-amber-200"
                : "bg-white border-stone-200 shadow-md"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl bg-amber-600 text-white shadow-xs">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-black text-stone-900">Type 2: Hosted Hypervisor</h4>
                  <span className="text-[11px] font-bold text-amber-700">Chạy như ứng dụng trên Host OS</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-amber-100 text-amber-800 border border-amber-200">
                Phát triển / Cá nhân
              </span>
            </div>

            {/* Stack Visualizer */}
            <div className="space-y-2 my-4">
              <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200 text-center text-xs font-bold text-purple-900">
                Apps (Ứng dụng chạy trong VM)
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded-xl bg-sky-100 border border-sky-300 text-center text-xs font-extrabold text-sky-900">
                  Guest OS #1 (Ubuntu)
                </div>
                <div className="p-2 rounded-xl bg-sky-100 border border-sky-300 text-center text-xs font-extrabold text-sky-900">
                  Guest OS #2 (macOS)
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-amber-600 text-white text-center text-xs font-black shadow-xs flex items-center justify-center gap-2">
                <Layers className="w-4 h-4" />
                Type 2 Hypervisor (VMware Workstation, Oracle VirtualBox)
              </div>
              <div className="p-2.5 rounded-xl bg-blue-100 border border-blue-300 text-center text-xs font-black text-blue-900">
                Host OS (Windows 11 / macOS / Ubuntu Desktop)
              </div>
              <div className="p-3 rounded-xl bg-stone-900 text-stone-200 text-center text-xs font-black flex items-center justify-center gap-2">
                <Cpu className="w-4 h-4 text-amber-400" />
                Physical Hardware (Laptop, Desktop PC)
              </div>
            </div>

            {/* Characteristics */}
            <div className="space-y-2 text-xs text-stone-600 pt-2 border-t border-stone-100">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Phải qua Host OS:</strong> Hypervisor chạy song song với các ứng dụng bình thường (như Chrome, Word) trên máy tính người dùng.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Dễ cài đặt và sử dụng:</strong> Cài đặt như một phần mềm thông thường (.exe/.dmg), không cần format lại ổ cứng vật lý.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Sản phẩm tiêu biểu:</strong> VMware Workstation / Fusion, Oracle VM VirtualBox, Parallels Desktop.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Hosted Hypervisor Super-Features Lab */}
      <div className="mt-8 rounded-3xl bg-linear-to-br from-stone-900 to-stone-850 text-white p-5 sm:p-7 border border-stone-800 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
              <HardDrive className="w-5 h-5" />
            </span>
            <div>
              <h4 className="text-sm sm:text-base font-black text-white">
                Thực Nghiệm 3 Tính Năng Cốt Lõi Của Hosted Hypervisor
              </h4>
              <p className="text-xs text-stone-400">
                Khám phá cơ chế gán IP, ánh xạ đĩa ảo thành file và chia sẻ thư mục Host-Guest
              </p>
            </div>
          </div>
        </div>

        {/* Feature 1: Gán IP riêng (Network Modes) */}
        <div className="mt-6 p-4 rounded-2xl bg-stone-950/60 border border-stone-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <span className="text-xs font-bold text-stone-300 flex items-center gap-2 uppercase tracking-wider">
              <Network className="w-4 h-4 text-sky-400" />
              1. Cơ chế Gán IP Riêng Cho Guest OS (Virtual Networking)
            </span>

            <div className="flex gap-1.5">
              {[
                { id: "bridged", label: "Bridged (Cầu nối)" },
                { id: "nat", label: "NAT (Chia sẻ)" },
                { id: "hostonly", label: "Host-Only (Cô lập)" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setNetworkMode(item.id)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    networkMode === item.id
                      ? "bg-sky-500 text-white shadow-xs"
                      : "bg-stone-800 text-stone-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Network IP Diagram */}
          <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-xs leading-relaxed">
            {networkMode === "bridged" && (
              <div className="space-y-1.5">
                <div className="text-sky-300 font-bold">
                  🌐 <strong>Bridged Adapter (Cầu nối trực tiếp):</strong>
                </div>
                <div className="text-stone-300">
                  Guest OS nhận một địa chỉ IP riêng độc lập từ cùng mạng LAN/Router vật lý của Host OS (Ví dụ: Router cấp cho Host: <code className="text-amber-300">192.168.1.15</code>, cấp cho VM: <code className="text-emerald-400">192.168.1.50</code>). Các máy khác trong phòng có thể truy cập thẳng vào VM như một máy tính vật lý riêng biệt!
                </div>
              </div>
            )}
            {networkMode === "nat" && (
              <div className="space-y-1.5">
                <div className="text-amber-300 font-bold">
                  🔄 <strong>NAT (Network Address Translation):</strong>
                </div>
                <div className="text-stone-300">
                  Host OS đóng vai trò như một Router ảo. Guest OS nhận dải IP ảo nội bộ (Ví dụ: <code className="text-emerald-400">10.0.2.15</code>). VM có thể ra Internet qua mạng của Host, nhưng các thiết bị ngoài mạng LAN không nhìn thấy trực tiếp VM.
                </div>
              </div>
            )}
            {networkMode === "hostonly" && (
              <div className="space-y-1.5">
                <div className="text-rose-300 font-bold">
                  🔒 <strong>Host-Only (Mạng nội bộ cô lập):</strong>
                </div>
                <div className="text-stone-300">
                  Tạo mạng riêng biệt chỉ giữa Host OS và các Guest OS. VM không có kết nối Internet và được cách ly 100% khỏi mạng bên ngoài, bảo đảm an toàn tuyệt đối khi phân tích mã độc (Malware Analysis).
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Feature 2 & 3: Virtual Disk to Host File & Shared Folder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {/* Virtual Disk Mapping */}
          <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800 space-y-2">
            <span className="text-xs font-bold text-stone-300 flex items-center gap-2 uppercase tracking-wider">
              <HardDrive className="w-4 h-4 text-amber-400" />
              2. Ánh Xạ I/O & Đĩa Ảo Thành File
            </span>
            <p className="text-xs text-stone-400 leading-relaxed">
              Mọi phân vùng ổ cứng <code className="text-sky-300">C:\</code> hoặc <code className="text-sky-300">/dev/sda</code> bên trong Guest OS thực chất là một <strong>tập tin đơn lẻ</strong> trên Host OS:
            </p>
            <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-[11px] font-mono text-amber-300">
              C:\Users\Admin\VirtualBox VMs\Ubuntu\disk.vdi (40 GB)
            </div>
            <p className="text-[11px] text-stone-400">
              Khi Guest OS ghi dữ liệu, Hypervisor chuyển tiếp (forward) lệnh I/O thành thao tác ghi file bình thường trên hệ điều hành chủ!
            </p>
          </div>

          {/* Shared Folders & Clipboard */}
          <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-300 flex items-center gap-2 uppercase tracking-wider">
                <FolderSync className="w-4 h-4 text-emerald-400" />
                3. Chia Sẻ Thư Mục & Clipboard
              </span>
              <button
                onClick={() => setShowSharedFolderDemo(!showSharedFolderDemo)}
                className="px-2.5 py-1 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 text-[11px] font-bold transition-all cursor-pointer"
              >
                {showSharedFolderDemo ? "Thu gọn" : "Xem mẫu"}
              </button>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Cho phép ánh xạ một thư mục trên Host OS thành ổ đĩa mạng bên trong VM để trao đổi file kéo thả tức thì và copy-paste văn bản hai chiều (Bidirectional).
            </p>
            {showSharedFolderDemo && (
              <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-[11px] text-emerald-300 space-y-1">
                <div>📁 <strong>Host Path:</strong> <code className="text-white">D:\ProjectDocs\</code></div>
                <div>➔ <strong>Guest Mount:</strong> <code className="text-white">/mnt/hgfs/ProjectDocs/</code></div>
                <div className="text-stone-400 text-[10px] pt-1">✓ Đồng bộ tệp tin thời gian thực không cần cắm USB.</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Academic Exam Alert */}
      <div className="mt-5 p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs leading-relaxed">
        <strong>📌 Chốt hạ kiến thức thi cử:</strong>
        <ul className="list-disc list-inside mt-1 space-y-1 text-indigo-850">
          <li><strong>Type 1 (Bare-Metal):</strong> Chạy trực tiếp trên phần cứng, hiệu năng cao nhất, không có Host OS. Dùng trong <em>Data Center, Cloud IaaS</em> (ESXi, KVM, Hyper-V Core).</li>
          <li><strong>Type 2 (Hosted):</strong> Chạy như một phần mềm ứng dụng trên Host OS (Windows, macOS). Dùng cho <em>cá nhân, phát triển, thử nghiệm</em> (VMware Workstation, VirtualBox).</li>
          <li><strong>Tính năng Hosted:</strong> Gán IP riêng (Bridged/NAT/Host-Only), chuyển tiếp I/O đĩa ảo thành tệp tin trên Host, chia sẻ thư mục và bộ nhớ tạm (clipboard).</li>
        </ul>
      </div>
    </div>
  );
}
