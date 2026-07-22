"use client";
import React from "react";
import { Sprout, Factory, Globe, TrendingUp, CheckCircle2, Award } from "lucide-react";

export default function LsdDoiMoiResults1986To1991() {
  return (
    <div className="my-8 rounded-2xl border border-emerald-300 dark:border-emerald-700 bg-gradient-to-br from-emerald-50/70 via-white to-amber-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Award size={14} /> Thành quả 5 năm (1986 - 1991)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Kết Quả Bước Đầu 5 Năm Thực Hiện Đường Lối Đổi Mới
        </h3>
        <p className="text-sm font-serif text-emerald-800 dark:text-emerald-300 font-bold mt-2 italic">
          Kỳ tích "Khoán 10", kiềm chế lạm phát phi mã và mở cửa nền kinh tế
        </p>
      </div>

      {/* Grid 4 Key Accomplishments */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Khoan 10 Agriculture */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-emerald-200 dark:border-emerald-900/50 pb-3 mb-3">
            <Sprout size={20} className="text-emerald-600" />
            <h4 className="font-bold text-base font-serif text-emerald-800 dark:text-emerald-300">
              Nghị Quyết "Khoán 10" (4-1988)
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Khoán hộ nông dân canh tác ổn định 15 năm. Năm 1988 phải nhập khẩu 45 vạn tấn gạo, đến **năm 1989 Việt Nam lần đầu xuất khẩu 1,4 triệu tấn gạo**.
          </p>
        </div>

        {/* Card 2: Industrial Autonomy */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-blue-200 dark:border-blue-900/50 pb-3 mb-3">
            <Factory size={20} className="text-blue-600" />
            <h4 className="font-bold text-base font-serif text-blue-900 dark:text-blue-300">
              Quyết Định 217-HĐBT (1987)
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Trao quyền tự chủ kinh doanh cho xí nghiệp quốc doanh. Thủy điện Hòa Bình phát điện tổ máy 1, liên doanh Vietsovpetro khai thác tấn dầu thô đầu tiên.
          </p>
        </div>

        {/* Card 3: FDI & Foreign Trade */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-amber-200 dark:border-amber-900/50 pb-3 mb-3">
            <Globe size={20} className="text-amber-600" />
            <h4 className="font-bold text-base font-serif text-amber-900 dark:text-amber-300">
              Luật Đầu Tư Nước Ngoài (1988)
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Quốc hội khóa VIII thông qua Luật Đầu tư nước ngoài (có hiệu lực từ 1-1-1988), thu hút nguồn vốn FDI, khơi thông dòng vốn ngoại giao kinh tế.
          </p>
        </div>

        {/* Card 4: Inflation Dropped */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-purple-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-purple-200 dark:border-purple-900/50 pb-3 mb-3">
            <TrendingUp size={20} className="text-purple-600" />
            <h4 className="font-bold text-base font-serif text-purple-900 dark:text-purple-300">
              Kiềm Chế Lạm Phát Phi Mã
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Lạm phát giảm mạnh từ **774,7% (1986)** xuống còn **67,1% (1990)**. Xóa bỏ hoàn toàn chế độ phân phối hàng hóa theo tem phiếu cuối năm 1988.
          </p>
        </div>
      </div>
    </div>
  );
}
