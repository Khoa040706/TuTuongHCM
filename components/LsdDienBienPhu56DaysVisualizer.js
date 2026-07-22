"use client";
import React, { useState } from "react";
import { Shield, Target, Flame, CheckCircle2 } from "lucide-react";

export default function LsdDienBienPhu56DaysVisualizer() {
  const [activeStage, setActiveStage] = useState("all");

  const stages = [
    {
      id: "dot-1",
      title: "Đợt 1 (13/3 - 17/3/1954)",
      target: "Tiêu diệt cụm cứ điểm Him Lam và Độc Lập, bức hàng Bản Kéo",
      desc: "Nổ súng mở màn chiến dịch. Phá vỡ cửa ngõ phía Bắc và Đông Bắc của tập đoàn cứ điểm Điện Biên Phủ.",
      color: "bg-rose-600 text-white"
    },
    {
      id: "dot-2",
      title: "Đợt 2 (30/3 - 30/4/1954)",
      target: "Tấn công các ngọn đồi phía Đông (A1, C1, C2, D1, E1...)",
      desc: "Đợt tấn công dai dẳng, quyết liệt nhất. Ta siết chặt vòng vây, siết dòng tiếp viện đường không của Pháp.",
      color: "bg-amber-600 text-white"
    },
    {
      id: "dot-3",
      title: "Đợt 3 (01/5 - 07/5/1954)",
      target: "Tổng công kích tiêu diệt toàn bộ tập đoàn cứ điểm",
      desc: "17h30 ngày 07/5/1954: Lá cờ 'Quyết chiến Quyết thắng' tung bay trên mái hầm tướng De Castries. Bắt sống toàn bộ Ban chỉ huy Pháp.",
      color: "bg-emerald-600 text-white"
    }
  ];

  const visibleStages = stages.filter((s) => activeStage === "all" || activeStage === s.id);

  return (
    <div className="my-8 rounded-2xl border border-red-300 dark:border-red-900/60 bg-gradient-to-br from-amber-50/50 via-white to-red-50/40 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl relative overflow-hidden">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-red-200 dark:border-red-900/60 pb-5 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300 text-xs font-bold uppercase tracking-wider mb-2 border border-red-200">
            <Flame size={14} className="text-red-600 animate-pulse" /> Thiên sử vàng dân tộc Việt Nam
          </span>
          <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white tracking-wide">
            Chiến Dịch Điện Biên Phủ 56 Ngày Đêm (13/3 - 07/5/1954)
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
            "Nên vành hoa đỏ, nên thiên sử vàng" — Đánh bại hoàn toàn Kế hoạch Navarre của thực dân Pháp.
          </p>
        </div>
        <div className="px-4 py-3 bg-red-800 text-white shadow-md rounded-xl text-center shrink-0">
          <span className="text-xs text-amber-200 font-semibold uppercase tracking-widest block">Khoảnh khắc lịch sử</span>
          <span className="text-base md:text-lg font-extrabold font-serif">17h30 Ngày 07-5-1954</span>
        </div>
      </div>

      {/* Core Strategy Switch Box */}
      <div className="mb-8 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-800 shadow-md text-slate-800 dark:text-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 shrink-0">
            <Target size={28} />
          </div>
          <div>
            <h4 className="text-base font-bold font-serif text-slate-900 dark:text-white">Quyết định lịch sử của Đại tướng Võ Nguyên Giáp:</h4>
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 mt-0.5">
              Chuyển phương châm từ <strong className="text-rose-700 dark:text-rose-400">"Đánh nhanh, giải quyết nhanh"</strong> sang <strong className="text-emerald-700 dark:text-emerald-400">"Đánh chắc, tiến chắc"</strong>. Đây được xem là quyết định khó khăn nhất nhưng sáng suốt nhất trong đời cầm quân của Đại tướng.
            </p>
          </div>
        </div>
      </div>

      {/* Stages Filter */}
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setActiveStage("all")}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeStage === "all" ? "bg-amber-600 text-white shadow-md" : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          Tất cả 3 Đợt tiến công
        </button>
        {stages.map((st) => (
          <button
            key={st.id}
            onClick={() => setActiveStage(st.id)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
              activeStage === st.id ? "bg-red-600 text-white shadow-md ring-2 ring-red-300" : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300"
            }`}
          >
            {st.title.split(" ")[0] + " " + st.title.split(" ")[1]}
          </button>
        ))}
      </div>

      {/* Stages Grid (Centered if single item selected!) */}
      <div className={visibleStages.length === 1 ? "max-w-2xl mx-auto" : "grid grid-cols-1 md:grid-cols-3 gap-6"}>
        {visibleStages.map((st) => (
          <div key={st.id} className="rounded-2xl border border-amber-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md flex flex-col justify-between">
            <div>
              <div className={`px-3 py-1 rounded-lg text-xs font-bold w-fit mb-3 ${st.color}`}>
                {st.title}
              </div>
              <h5 className="font-bold text-base md:text-lg text-amber-900 dark:text-amber-300 font-serif mb-2">{st.target}</h5>
              <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{st.desc}</p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
              <CheckCircle2 size={15} /> Hoàn thành mục tiêu chiến dịch
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
