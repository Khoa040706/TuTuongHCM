"use client";
import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, RefreshCcw, Landmark, ShieldCheck } from "lucide-react";

export default function LsdLandReformVisualizer() {
  const [activeSide, setActiveSide] = useState("achievements"); // 'achievements' or 'limitations'

  return (
    <div className="my-8 rounded-2xl border border-emerald-300/80 dark:border-emerald-900/60 bg-gradient-to-br from-emerald-50/40 via-white to-amber-50/40 p-5 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-200 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 text-xs font-bold uppercase tracking-wider mb-2">
          <Landmark size={14} /> Cách mạng dân chủ ruộng đất (1953 - 1956)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Chuyên Đề: Cải Cách Ruộng Đất "Người Cày Có Ruộng"
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Hội nghị TW 5 & Quốc hội khóa I thông qua Luật Cải cách ruộng đất (12-1953) đáp ứng khát vọng nghìn đời của nông dân Việt Nam.
        </p>
      </div>

      {/* Switch Buttons */}
      <div className="flex justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveSide("achievements")}
          className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all flex items-center gap-2 ${
            activeSide === "achievements"
              ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          <CheckCircle2 size={16} /> Ý Nghĩa & Thành Tựu Lớn
        </button>
        <button
          onClick={() => setActiveSide("limitations")}
          className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all flex items-center gap-2 ${
            activeSide === "limitations"
              ? "bg-rose-700 text-white shadow-lg shadow-rose-700/30 scale-105"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          <AlertTriangle size={16} /> Hạn Chế Sai Lầm & Đợt Sửa Sai (10-1956)
        </button>
      </div>

      {/* Side Content */}
      {activeSide === "achievements" ? (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-800 shadow-md">
          <h4 className="text-lg font-bold font-serif text-emerald-800 dark:text-emerald-300 mb-3 flex items-center gap-2">
            <ShieldCheck size={20} /> Thành Tựu & Động Lực Cho Chiến Thắng Điện Biên Phủ
          </h4>
          <ul className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 bg-emerald-50/50 dark:bg-emerald-950/30 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <span>
                <strong>Tịch thu ruộng đất giai cấp địa chủ:</strong> Chia cho hơn 2 triệu hộ gia đình nông dân nghèo (hàng ngàn hécta ruộng đất, trâu bò, nông cụ).
              </span>
            </li>
            <li className="flex items-start gap-2 bg-emerald-50/50 dark:bg-emerald-950/30 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <span>
                <strong>Giải phóng sức sản xuất nông thôn:</strong> Nông dân phấn khởi tăng gia sản xuất, đóng góp hàng vạn tấn gạo, thực phẩm cho mặt trận.
              </span>
            </li>
            <li className="flex items-start gap-2 bg-emerald-50/50 dark:bg-emerald-950/30 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <span>
                <strong>Hậu phương vững chắc:</strong> Động viên tinh thần hàng vạn thanh niên hăng hái gia nhập bộ đội, tham gia dân công hỏa tuyến phục vụ Chiến dịch Điện Biên Phủ.
              </span>
            </li>
          </ul>
        </div>
      ) : (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-rose-300 dark:border-rose-800 shadow-md">
          <h4 className="text-lg font-bold font-serif text-rose-800 dark:text-rose-300 mb-3 flex items-center gap-2">
            <RefreshCcw size={20} /> Nguyên Nhân Sai Lầm & Tinh Thần Tự Phê Bình Của Đảng
          </h4>
          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
            <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50">
              <strong>Hạn chế mắc phải:</strong> Quy nhầm thành phần nông dân; đấu tố tràn lan, quy thù; rập khuôn máy móc kinh nghiệm nước ngoài, độc đoán chủ quan.
            </div>
            <div className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50">
              <strong>Thái độ thẳng thắn sửa sai (10-1956):</strong> Trung ương Đảng và Bác Hồ nhận thức đầy đủ sai lầm, công khai tự phê bình trước nhân dân, khôi phục danh dự cho những trường hợp bị xử lý sai, sửa chữa triệt để để củng cố lòng dân.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
