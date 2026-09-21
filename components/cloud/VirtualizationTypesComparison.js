"use client";
import React, { useState } from "react";
import {
  Cpu,
  Layers,
  Code2,
  CheckCircle2,
  XCircle,
  Sparkles,
  Zap,
  ArrowRight,
  Server,
  Terminal,
  HelpCircle,
  Sliders
} from "lucide-react";

const VIRT_TYPES = [
  {
    id: "emulation",
    name: "Software Emulation",
    nameVi: "Giả lập phần mềm",
    badge: "Mô phỏng từng lệnh",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    color: "from-amber-500/20 to-orange-500/20",
    borderAccent: "border-amber-400",
    mechanism: "Emulator chạy trên OS1 đọc tuần tự từng chỉ lệnh (instruction) trong chương trình P để mô phỏng hành vi của OS2.",
    speed: "Chậm nhất (Overhead cao do phải thông dịch từng lệnh)",
    needOsModify: false,
    osModifyText: "Không cần sửa OS (nhưng tốn chi phí mô phỏng phần mềm)",
    examples: ["BlueStacks (chạy Android trên PC Windows)", "WINE (chạy Windows trên Linux)", "Android Emulator trong Android Studio"],
    roleInCloud: "Thích hợp cho thử nghiệm ứng dụng đa nền tảng, không dùng cho hạ tầng máy chủ Data Center."
  },
  {
    id: "para",
    name: "Para-virtualization",
    nameVi: "Ảo hóa bán phần",
    badge: "Sửa mã nguồn OS",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
    color: "from-sky-500/20 to-blue-500/20",
    borderAccent: "border-sky-400",
    mechanism: "Nhiều OS chạy trên cùng 1 máy. Hypervisor kiểm soát và lập lịch. Bộ xử lý thực thi lệnh trực tiếp (Native Execution).",
    speed: "Rất cao (Lệnh CPU chạy trực tiếp không qua thông dịch)",
    needOsModify: true,
    osModifyText: "BẮT BUỘC phải sửa đổi mã nguồn OS trước khi chạy để tránh chiếm quyền phần cứng",
    examples: ["Xen Project (thế hệ đầu)", "VirtIO paravirtualized drivers", "Custom enterprise Linux kernels"],
    roleInCloud: "Từng được dùng trong giai đoạn đầu của Cloud, hiện bị thay thế dần do phiền hà việc phải vá mã nguồn HĐH."
  },
  {
    id: "full",
    name: "Full Virtualization",
    nameVi: "Ảo hóa toàn phần (Chuẩn Cloud)",
    badge: "Không sửa OS • Chuẩn Data Center",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    color: "from-emerald-500/20 to-teal-500/20",
    borderAccent: "border-emerald-500 ring-2 ring-emerald-300",
    mechanism: "Ảo hóa hoàn chỉnh phần cứng với sự trợ giúp của CPU (Intel VT-x / AMD-V). Mô phỏng tập lệnh thương mại, cách ly độc lập tuyệt đối.",
    speed: "Gần tương đương phần cứng vật lý (Near-native performance)",
    needOsModify: false,
    osModifyText: "KHÔNG CẦN sửa mã nguồn OS, tránh hoàn toàn chi phí mô phỏng",
    examples: ["KVM (Kernel-based Virtual Machine)", "VMware ESXi / vSphere", "Microsoft Hyper-V", "AWS Nitro System"],
    roleInCloud: "CÔNG NGHỆ NỀN TẢNG cho toàn bộ máy ảo (VMs) trong Cloud Data Center hiện đại ngày nay."
  }
];

export default function VirtualizationTypesComparison() {
  const [selectedType, setSelectedType] = useState("full");
  const [checkOsModify, setCheckOsModify] = useState(false);

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-linear-to-b from-stone-50/70 via-white to-stone-50/50 p-5 sm:p-7 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-purple-600 text-white mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Ma Trận Đối Đầu 3 Công Nghệ Ảo Hóa
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Mục V: So Sánh 3 Loại Công Nghệ Ảo Hóa
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Phân biệt bản chất kỹ thuật: <strong className="text-stone-900">Software Emulation</strong> (đọc từng lệnh), <strong className="text-stone-900">Para-virtualization</strong> (cần sửa OS) và <strong className="text-stone-900">Full Virtualization</strong> (chuẩn Cloud không cần sửa OS).
          </p>
        </div>

        {/* Quick Inspector Button */}
        <button
          onClick={() => setCheckOsModify(!checkOsModify)}
          className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all shadow-xs ${
            checkOsModify
              ? "bg-amber-500 text-stone-900 ring-2 ring-amber-400"
              : "bg-stone-900 text-amber-400 hover:bg-stone-800"
          }`}
        >
          {checkOsModify ? "✓ Đang Soi: 'Có Sửa Mã Nguồn OS Không?'" : "🔍 Kiểm Tra Điều Kiện Sửa Mã Nguồn OS"}
        </button>
      </div>

      {/* 3 Pillars Comparison Grid */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {VIRT_TYPES.map((item) => {
          const isSelected = selectedType === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedType(item.id)}
              className={`p-5 rounded-3xl border transition-all duration-200 cursor-pointer bg-white flex flex-col justify-between ${
                isSelected
                  ? `${item.borderAccent} shadow-lg scale-[1.01]`
                  : "border-stone-200/90 hover:border-stone-300 shadow-xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-md border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  {item.id === "full" && (
                    <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      ★ Tiêu chuẩn vàng
                    </span>
                  )}
                </div>

                <h4 className="font-black text-base text-stone-900 mt-1">
                  {item.name}
                </h4>
                <div className="text-xs font-bold text-stone-500 mb-3">
                  ({item.nameVi})
                </div>

                {/* OS Modification Highlight Box */}
                {checkOsModify && (
                  <div className={`p-3 rounded-xl mb-3 text-xs border ${
                    item.needOsModify
                      ? "bg-rose-50 border-rose-300 text-rose-900"
                      : "bg-emerald-50 border-emerald-300 text-emerald-900"
                  }`}>
                    <div className="font-extrabold flex items-center gap-1.5 mb-0.5">
                      {item.needOsModify ? (
                        <>
                          <XCircle className="w-4 h-4 text-rose-600" />
                          <span>Bắt buộc sửa đổi OS</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Không cần sửa mã nguồn OS</span>
                        </>
                      )}
                    </div>
                    <p className="text-[11px] opacity-90">{item.osModifyText}</p>
                  </div>
                )}

                {/* Mechanism */}
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-extrabold text-stone-700 block mb-0.5">⚙️ Cơ chế hoạt động:</span>
                    <p className="text-stone-600 leading-relaxed bg-stone-50 p-2.5 rounded-xl border border-stone-150">
                      {item.mechanism}
                    </p>
                  </div>

                  <div>
                    <span className="font-extrabold text-stone-700 block mb-0.5">⚡ Hiệu năng & Tốc độ:</span>
                    <p className="text-stone-600 font-medium">
                      {item.speed}
                    </p>
                  </div>

                  <div>
                    <span className="font-extrabold text-stone-700 block mb-1">📱 Ví dụ thực tế:</span>
                    <ul className="list-disc list-inside space-y-0.5 text-stone-600 text-[11px]">
                      {item.examples.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Role in Cloud */}
              <div className="mt-4 pt-3 border-t border-stone-100 text-xs">
                <span className="font-bold text-stone-500 block mb-0.5">Ứng dụng trong Cloud:</span>
                <p className="font-semibold text-stone-800 leading-snug">
                  {item.roleInCloud}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Exam Takeaway Alert */}
      <div className="mt-6 p-4 rounded-2xl bg-amber-50/90 border border-amber-300 text-xs space-y-1.5">
        <div className="font-extrabold text-amber-950 flex items-center gap-1.5 text-sm">
          <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
          📌 Cần nhớ trọng tâm thi cử Mục V:
        </div>
        <p className="text-amber-900 leading-relaxed font-medium">
          <strong>Full virtualization</strong> là công nghệ nền tảng cho máy ảo (VM) trong các Cloud Data Center hiện nay nhờ ưu điểm: <em>Mô phỏng tập lệnh thương mại, cơ sở hoạt động độc lập cách ly, thực thi hiệu quả chi phí thấp và <strong>hoàn toàn không cần sửa đổi mã nguồn HĐH</strong></em>.
        </p>
      </div>
    </div>
  );
}
