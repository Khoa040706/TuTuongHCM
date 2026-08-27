"use client";
import React, { useState } from "react";
import { 
  Swords, 
  Workflow, 
  RotateCw, 
  ShieldAlert, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Boxes, 
  TrendingDown, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function TraditionalVsUpBattleArena() {
  const [selectedAxis, setSelectedAxis] = useState("risk"); // "structure" | "risk" | "deliverables" | "fit"

  const axes = {
    structure: {
      title: "1. Cấu trúc quy trình (Process Structure)",
      waterfallTitle: "Linear Sequential (Tuyến tính 1 lần duy nhất)",
      waterfallDesc: "Tiến trình một chiều (One pass): Plan -> Analyze -> Design -> Build -> Test. Mỗi giai đoạn bắt buộc phải hoàn thành 100% và đóng băng (Sign-off) mới được chuyển sang giai đoạn kế tiếp.",
      upTitle: "Iterative & Incremental (Lặp & Tăng dần)",
      upDesc: "Chia dự án thành 4 phase (Inception, Elaboration, Construction, Transition). Trong mỗi phase trải qua nhiều vòng lặp nhỏ lặp lại đầy đủ chu trình phân tích, thiết kế, code và test.",
      winner: "Unified Process linh hoạt hơn, phản ánh đúng thực tế phát triển phần mềm."
    },
    risk: {
      title: "2. Quản trị rủi ro (Risk Handling)",
      waterfallTitle: "Rủi ro dồn về cuối (Late Risk Exposure)",
      waterfallDesc: "Do khâu kiểm thử (Testing) diễn ra ở cuối cùng, các sai sót kiến trúc hoặc hiểu lầm yêu cầu từ giai đoạn đầu chỉ được phát hiện khi sắp hết hạn dự án, gây thiệt hại tài chính cực lớn.",
      upTitle: "Xử lý rủi ro từ sớm (Front-loaded Risk Mitigation)",
      upDesc: "Ngay từ giai đoạn Elaboration (pha 2), đội ngũ đã phải xây dựng kiến trúc cốt lõi và kiểm thử sớm để triệt tiêu các rủi ro kỹ thuật nguy hiểm nhất trước khi vào Construction.",
      winner: "Unified Process vượt trội hoàn toàn về kiểm soát rủi ro và ổn định kiến trúc."
    },
    deliverables: {
      title: "3. Sản phẩm chuyển giao (Deliverables)",
      waterfallTitle: "Một khối duy nhất ở cuối (Big Bang Release)",
      waterfallDesc: "Trong suốt 80% thời gian đầu của dự án, sản phẩm bàn giao chỉ là các tập tài liệu giấy tờ. Khách hàng chỉ nhìn thấy phần mềm chạy được khi toàn bộ dự án đã kết thúc.",
      upTitle: "Tăng dần sau mỗi vòng lặp (Working Increments)",
      upDesc: "Cứ sau mỗi vòng lặp (Iteration từ 2-6 tuần), đội dự án lại xuất bản một bản tăng dần hoạt động được (Working Increment) đã qua kiểm thử để khách hàng dùng thử và đánh giá.",
      winner: "Unified Process giúp khách hàng sớm thấy được giá trị và an tâm về tiến độ."
    },
    fit: {
      title: "4. Độ phù hợp dự án (Best Fit)",
      waterfallTitle: "Dự án yêu cầu ổn định (Fixed Scope)",
      waterfallDesc: "Cực kỳ phù hợp cho các dự án xây cầu đường, hệ thống hành chính công hoặc dự án gia công phần mềm có phạm vi hợp đồng cố định, yêu cầu đã được phân tích rất kỹ từ đầu.",
      upTitle: "Dự án phức tạp & quy mô lớn (Complex OO Systems)",
      upDesc: "Lựa chọn lý tưởng cho các hệ thống phần mềm doanh nghiệp hướng đối tượng (OO) phức tạp, ứng dụng công nghệ mới hoặc có yêu cầu cần tinh chỉnh dần theo thời gian.",
      winner: "Tùy thuộc vào bản chất yêu cầu dự án: Ổn định chọn Waterfall, Phức tạp chọn UP."
    }
  };

  const current = axes[selectedAxis];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
            <Swords className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Đấu Trường Traditional SDLC (Waterfall) vs Unified Process (UP)
            </h2>
            <p className="text-xs text-slate-400">
              Đối đầu trực diện trên 4 trục: Cấu trúc, Quản trị rủi ro, Sản phẩm bàn giao và Độ phù hợp dự án.
            </p>
          </div>
        </div>

        {/* 4 Axes Tabs */}
        <div className="flex flex-wrap gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setSelectedAxis("structure")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              selectedAxis === "structure" ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            1. Cấu trúc
          </button>
          <button
            onClick={() => setSelectedAxis("risk")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              selectedAxis === "risk" ? "bg-purple-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            2. Rủi ro
          </button>
          <button
            onClick={() => setSelectedAxis("deliverables")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              selectedAxis === "deliverables" ? "bg-emerald-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            3. Deliverables
          </button>
          <button
            onClick={() => setSelectedAxis("fit")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              selectedAxis === "fit" ? "bg-amber-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            4. Phù hợp
          </button>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          Tiêu chí đối chiếu: {current.title}
        </h3>
      </div>

      {/* Side by Side Arena Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Left: Waterfall Card */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-blue-500/40 flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-extrabold text-blue-400 flex items-center gap-1.5">
                <Workflow className="w-4 h-4" /> Traditional SDLC (Waterfall)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                Tuyến tính (Linear)
              </span>
            </div>
            <h4 className="font-bold text-sm sm:text-base text-white">{current.waterfallTitle}</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-medium">
              {current.waterfallDesc}
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-[11px] text-blue-300">
            Flow: Plan ➔ Analyze ➔ Design ➔ Build ➔ Test
          </div>
        </div>

        {/* Right: Unified Process Card */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-purple-500/40 flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-extrabold text-purple-400 flex items-center gap-1.5">
                <RotateCw className="w-4 h-4" /> Unified Process (UP)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                Lặp & Tăng dần (Iterative)
              </span>
            </div>
            <h4 className="font-bold text-sm sm:text-base text-white">{current.upTitle}</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-medium">
              {current.upDesc}
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-[11px] text-purple-300">
            Flow: Inception ➔ Elaboration ➔ Construction ➔ Transition
          </div>
        </div>
      </div>

      {/* Winner & Takeaway Footer */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/40 via-slate-950 to-blue-950/40 border border-purple-500/30 text-xs sm:text-sm text-slate-200 flex items-start sm:items-center gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
        <div>
          <span className="text-emerald-400 font-bold uppercase text-xs block mb-0.5">
            Nhận định chuyên gia BA:
          </span>
          <span>{current.winner}</span>
        </div>
      </div>
    </div>
  );
}
