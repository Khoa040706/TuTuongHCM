"use client";
import React, { useState } from "react";
import { Shield, Target, Award } from "lucide-react";

export default function LsdCampaignsCompareVisualizer() {
  const [activeTab, setActiveTab] = useState("compare"); // 'compare', 'viet-bac', 'bien-gioi'

  const vietBac = {
    title: "Chiến Dịch Việt Bắc Thu Đông 1947",
    time: "16-9 đến 21-12-1947 (75 ngày đêm)",
    nature: "Chiến dịch Phản công bảo vệ căn cứ địa ATK Việt Bắc",
    enemyPlan: "Pháp huy động 15.000 quân tấn công 3 mũi (Dù, Bộ, Thủy) hòng tiêu diệt cơ quan đầu não Việt Minh",
    ourStrategy: "Chỉ thị 'Phải phá tan cuộc tấn công mùa đông của giặc Pháp' (15-10-1947)",
    keyBattles: "Bắc Kạn, Chợ Mới, Chợ Đồn, đường số 4 (Lạng Sơn - Cao Bằng), Sông Lô, Đoan Hùng",
    significance: "Bẻ gãy 3 mũi tấn công của Pháp; Bảo vệ an toàn ATK Việt Bắc; Đánh bại hoàn toàn chiến lược 'Đánh nhanh thắng nhanh' của Pháp."
  };

  const bienGioi = {
    title: "Chiến Dịch Biên Giới Thu Đông 1950",
    time: "16-9 đến 17-10-1950 (30 ngày đêm)",
    nature: "Chiến dịch Tiến công quy mô lớn đầu tiên ta chủ động mở",
    enemyPlan: "Kế hoạch Revers (Pháp) khóa chặt biên giới Việt - Trung, bao vây ATK Việt Bắc",
    ourStrategy: "Chủ tịch Hồ Chí Minh trực tiếp ra mặt trận thị sát chỉ đạo; Khai thông biên giới Việt - Trung",
    keyBattles: "Đông Khê, Thất Khê, Cao Bằng, đường số 4",
    significance: "Tiêu diệt 8.000 quân Pháp; Giao thông biên giới khai thông rộng mở; Đưa cuộc kháng chiến chuyển sang giai đoạn mới (chủ động tiến công)."
  };

  return (
    <div className="my-8 rounded-2xl border border-amber-200/90 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/50 via-white to-amber-100/40 p-5 md:p-8 shadow-xl">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
          <Target size={14} className="text-amber-600" /> Bước ngoặt chiến trường quân sự
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
          So Sánh 2 Chiến Dịch Bản Lề (1947 vs 1950)
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Từ thế phòng ngự bảo vệ căn cứ địa (Việt Bắc 1947) chuyển sang thế chủ động tiến công quy mô lớn (Biên giới 1950).
        </p>
      </div>

      {/* Switcher Buttons */}
      <div className="flex justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveTab("compare")}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === "compare"
              ? "bg-amber-600 text-white shadow-md"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          So sánh song song
        </button>
        <button
          onClick={() => setActiveTab("viet-bac")}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === "viet-bac"
              ? "bg-red-600 text-white shadow-md"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          Chiến dịch Việt Bắc 1947
        </button>
        <button
          onClick={() => setActiveTab("bien-gioi")}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === "bien-gioi"
              ? "bg-emerald-600 text-white shadow-md"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          Chiến dịch Biên giới 1950
        </button>
      </div>

      {/* Grid Content (Centered when single item selected) */}
      <div className={activeTab === "compare" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "max-w-2xl mx-auto w-full"}>
        {/* Việt Bắc 1947 */}
        {(activeTab === "compare" || activeTab === "viet-bac") && (
          <div className="rounded-2xl border border-red-200 dark:border-red-900/60 bg-white dark:bg-slate-900 p-6 shadow-md">
            <div className="flex items-center gap-3 border-b border-red-200 dark:border-red-900/40 pb-4 mb-4">
              <div className="p-3 rounded-xl bg-red-600 text-white shadow-md">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold font-serif text-red-700 dark:text-red-400">{vietBac.title}</h4>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{vietBac.time}</span>
              </div>
            </div>

            <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
              <div className="p-2.5 rounded-lg bg-red-50/60 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40">
                <span className="font-bold text-red-800 dark:text-red-300 block mb-1">Tính chất chiến dịch:</span>
                {vietBac.nature}
              </div>

              <div>
                <span className="font-bold text-amber-800 dark:text-amber-400 block mb-1">Âm mưu của Pháp:</span>
                {vietBac.enemyPlan}
              </div>

              <div>
                <span className="font-bold text-amber-800 dark:text-amber-400 block mb-1">Chỉ thị của Đảng:</span>
                {vietBac.ourStrategy}
              </div>

              <div>
                <span className="font-bold text-amber-800 dark:text-amber-400 block mb-1">Địa điểm nòng cốt:</span>
                {vietBac.keyBattles}
              </div>

              <div className="p-3 rounded-xl bg-amber-50/80 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 font-medium text-slate-800 dark:text-amber-300 mt-4">
                <span className="font-bold text-slate-900 dark:text-white block mb-1 flex items-center gap-1.5">
                  <Award size={16} className="text-amber-600" /> Ý nghĩa chiến lược:
                </span>
                {vietBac.significance}
              </div>
            </div>
          </div>
        )}

        {/* Biên giới 1950 */}
        {(activeTab === "compare" || activeTab === "bien-gioi") && (
          <div className="rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-white dark:bg-slate-900 p-6 shadow-md">
            <div className="flex items-center gap-3 border-b border-emerald-200 dark:border-emerald-900/40 pb-4 mb-4">
              <div className="p-3 rounded-xl bg-emerald-600 text-white shadow-md">
                <Target size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold font-serif text-emerald-700 dark:text-emerald-400">{bienGioi.title}</h4>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{bienGioi.time}</span>
              </div>
            </div>

            <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
              <div className="p-2.5 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40">
                <span className="font-bold text-emerald-800 dark:text-emerald-300 block mb-1">Tính chất chiến dịch:</span>
                {bienGioi.nature}
              </div>

              <div>
                <span className="font-bold text-amber-800 dark:text-amber-400 block mb-1">Âm mưu của Pháp:</span>
                {bienGioi.enemyPlan}
              </div>

              <div>
                <span className="font-bold text-amber-800 dark:text-amber-400 block mb-1">Sự chỉ đạo đặc biệt:</span>
                {bienGioi.ourStrategy}
              </div>

              <div>
                <span className="font-bold text-amber-800 dark:text-amber-400 block mb-1">Địa điểm nòng cốt:</span>
                {bienGioi.keyBattles}
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/80 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 font-medium text-slate-800 dark:text-emerald-300 mt-4">
                <span className="font-bold text-slate-900 dark:text-white block mb-1 flex items-center gap-1.5">
                  <Award size={16} className="text-emerald-600" /> Ý nghĩa chiến lược:
                </span>
                {bienGioi.significance}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
