"use client";
import React, { useState } from "react";
import { 
  Workflow, 
  Users, 
  GitBranch, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Eye, 
  ArrowRight,
  ShieldCheck,
  Swords
} from "lucide-react";

export default function ProcessVsBusinessUseCaseArena() {
  const [activeAspect, setActiveAspect] = useState("perspective"); // "focus" | "scope" | "perspective" | "model"

  const aspects = {
    perspective: {
      title: "1. Góc nhìn (Perspective)",
      processName: "Góc nhìn Nội bộ Vận hành (Internal View)",
      processDesc: "Đứng từ bên trong văn phòng công ty nhìn ra: Thấy rõ từng phòng ban (Sales, Kế toán, Kho vận) phối hợp bàn giao hồ sơ qua lại theo luồng công việc.",
      useCaseName: "Góc nhìn Tác nhân Bên ngoài (External View)",
      useCaseDesc: "Đứng từ góc nhìn của Khách hàng nhìn vào: Khách hàng không quan tâm bên trong công ty chạy bao nhiêu thủ tục giấy tờ, họ chỉ thấy kết quả nhận được giá trị.",
      example: "Khách chỉ thấy hành động 'Đặt mua vé máy bay' (Use Case), trong khi hãng bay phải chạy qua 4 phòng ban 'Kiểm tra chỗ ➔ Trừ thẻ ngân hàng ➔ Xuất vé ➔ Báo cáo doanh thu' (Process)."
    },
    focus: {
      title: "2. Trọng tâm (Focus)",
      processName: "Luồng hoạt động End-to-End",
      processDesc: "Tập trung vào trình tự các bước thực thi từ khi sự kiện bắt đầu đến khi kết thúc; bao gồm các điều kiện rẽ nhánh (IF-ELSE) và luồng xử lý song song.",
      useCaseName: "Mục tiêu nhận Giá trị của 1 Actor",
      useCaseDesc: "Tập trung vào kết quả kinh doanh cụ thể mà một tác nhân bên ngoài muốn đạt được khi tương tác với doanh nghiệp.",
      example: "Process tập trung vào 'Các bước kiểm duyệt hồ sơ vay'; Use Case tập trung vào mục tiêu 'Khách hàng nhận tiền vay mua nhà'."
    },
    scope: {
      title: "3. Phạm vi ranh giới (Scope)",
      processName: "Rộng lớn qua nhiều phòng ban",
      processDesc: "Một Business Process lớn (như Order-to-Cash) có thể trải dài qua 5 phòng ban, liên quan đến hàng chục Worker và kéo dài nhiều ngày.",
      useCaseName: "Giới hạn bởi 1 Actor duy nhất",
      useCaseDesc: "Một Business Use Case bị giới hạn bởi một mục tiêu độc lập của một tác nhân bên ngoài trong một phiên làm việc cụ thể.",
      example: "Quy trình Order-to-Cash bao gồm nhiều Business Use Cases nhỏ: 'Khách đặt hàng', 'Khách thanh toán', 'Khách yêu cầu đổi trả'."
    },
    model: {
      title: "4. Mô hình trực quan hóa (Typical Model)",
      processName: "Activity Diagram / Swimlane Workflow",
      processDesc: "Sử dụng sơ đồ hoạt động UML (Activity Diagram) có các đường phân làn bơi (Swimlanes) đại diện cho từng phòng ban chịu trách nhiệm thực thi.",
      useCaseName: "Business Use Case Diagram",
      useCaseDesc: "Sử dụng sơ đồ Ca sử dụng nghiệp vụ UML với biểu tượng Actor hình người que và Use Case hình oval biểu diễn dịch vụ cung cấp.",
      example: "Activity Diagram vẽ các khối hành động nối tiếp nhau; Business Use Case Diagram vẽ đường liên kết giữa Actor và Oval ca sử dụng."
    }
  };

  const current = aspects[activeAspect];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <Swords className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Đối Chiếu Business Process vs Business Use Case
            </h2>
            <p className="text-xs text-slate-400">
              Phân định rõ ràng sự khác biệt giữa Lăng kính vận hành nội bộ và Lăng kính tác nhân bên ngoài.
            </p>
          </div>
        </div>

        {/* 4 Aspect Selector Tabs */}
        <div className="flex flex-wrap gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
          <button
            onClick={() => setActiveAspect("perspective")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeAspect === "perspective" ? "bg-cyan-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            1. Góc nhìn
          </button>
          <button
            onClick={() => setActiveAspect("focus")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeAspect === "focus" ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            2. Trọng tâm
          </button>
          <button
            onClick={() => setActiveAspect("scope")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeAspect === "scope" ? "bg-purple-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            3. Phạm vi
          </button>
          <button
            onClick={() => setActiveAspect("model")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeAspect === "model" ? "bg-emerald-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            4. Mô hình
          </button>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          Tiêu chí: {current.title}
        </h3>
      </div>

      {/* Side-by-Side Dual Arena */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Left: Business Process */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-cyan-500/40 flex flex-col justify-between space-y-3 shadow-lg">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-extrabold text-cyan-400 flex items-center gap-1.5">
                <Workflow className="w-4 h-4" /> Business Process (Quy trình)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                Activity Diagram
              </span>
            </div>
            <h4 className="font-bold text-sm sm:text-base text-white">{current.processName}</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-medium">
              {current.processDesc}
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-[11px] text-cyan-300">
            Lăng kính: Internal Operational Swimlanes
          </div>
        </div>

        {/* Right: Business Use Case */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-purple-500/40 flex flex-col justify-between space-y-3 shadow-lg">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-extrabold text-purple-400 flex items-center gap-1.5">
                <Users className="w-4 h-4" /> Business Use Case (Ca sử dụng)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                Use Case Diagram
              </span>
            </div>
            <h4 className="font-bold text-sm sm:text-base text-white">{current.useCaseName}</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-medium">
              {current.useCaseDesc}
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-[11px] text-purple-300">
            Lăng kính: External Actor&apos;s Goal & Value
          </div>
        </div>
      </div>

      {/* Real-world Contrast Example */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-slate-950 to-purple-950/40 border border-cyan-500/30 text-xs sm:text-sm text-slate-200 flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <span className="text-emerald-400 font-bold uppercase text-xs block mb-0.5">Ví dụ minh họa trực quan:</span>
          <span>{current.example}</span>
        </div>
      </div>
    </div>
  );
}
