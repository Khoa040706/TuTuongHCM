"use client";
import React from "react";
import { Sparkles, Quote, ShieldAlert, ArrowDown, ArrowUp, CheckCircle, Shield, Users, Landmark } from "lucide-react";

export default function HcmStatePowerControl() {
  return (
    <div className="w-full py-2 select-text font-sans bg-transparent space-y-8">
      
      {/* HEADER BLOCK */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-800 text-[10px] font-bold uppercase tracking-wider">
            📜 Mục II.3.a
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-650" />
          <span className="text-xs text-stone-500 font-bold font-sans">Tiểu mục 3 — Phần a</span>
        </div>
        <h4 className="text-xl md:text-2xl font-black font-playfair tracking-tight mb-2 text-stone-900 leading-tight">
          KIỂM SOÁT QUYỀN LỰC NHÀ NƯỚC
        </h4>
      </div>

      {/* MUC DICH & TINH TAT YEU */}
      <div className="bg-indigo-50/30 border border-indigo-150 p-6 rounded-2xl space-y-4">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-indigo-650" />
          <h5 className="font-extrabold text-indigo-900 text-xs md:text-sm uppercase tracking-wider">
            Mục Đích &amp; Tính Tất Yếu Của Kiểm Soát Quyền Lực
          </h5>
        </div>

        <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
          <strong>Mục đích:</strong> Giữ vững bản chất nhân dân của Nhà nước, bảo đảm bộ máy hoạt động hiệu quả, ngăn ngừa và phòng chống sự thoái hóa, biến chất trong đội ngũ cán bộ.
        </p>
        
        <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
          <strong>Tính tất yếu:</strong> Cán bộ, cơ quan nhà nước dù ít hay nhiều đều nắm giữ quyền lực do nhân dân ủy thác. Khi nắm quyền lực trong tay, nếu không kiểm soát tốt sẽ rất dễ dẫn đến lạm dụng quyền lực, xa dân, nhũng nhiễu dân.
        </p>

        {/* Quote lạm quyền */}
        <div className="relative overflow-hidden rounded-xl bg-white border border-indigo-100 p-5 shadow-sm">
          <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-indigo-600 opacity-10 -rotate-12 pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <p className="font-playfair italic text-stone-850 text-xs md:text-sm leading-relaxed text-justify">
              &quot;Dân ghét các ông chủ tịch, các ông ủy viên vì cái tội ngông nghênh, cậy thế, cậy quyền... khi nắm được chút quyền trong tay vẫn hay lạm dụng.&quot;
            </p>
            <div className="flex items-center justify-end text-[9px] font-bold text-indigo-750 font-sans tracking-wide">
              <span>— Hồ Chí Minh (Toàn tập, t.4, tr.51)</span>
            </div>
          </div>
        </div>
      </div>

      {/* FLOWCHART - HỆ THỐNG KIỂM SOÁT QUYỀN LỰC */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-stone-150 pb-2">
          <Sparkles className="w-4.5 h-4.5 text-indigo-650" />
          <h5 className="font-extrabold text-stone-900 text-xs md:text-sm uppercase tracking-wider">
            Sơ Đồ Luồng Hệ Thống Kiểm Soát Quyền Lực
          </h5>
        </div>

        {/* Flowchart container */}
        <div className="p-6 md:p-8 rounded-2xl border border-indigo-100 bg-indigo-50/5 flex flex-col items-center space-y-8">
          
          {/* Node 1: Đảng CSVN */}
          <div className="w-full max-w-sm bg-white border border-indigo-200 p-4 rounded-2xl shadow-sm text-center space-y-2 relative group hover:border-indigo-500 transition-colors">
            <div className="mx-auto w-8 h-8 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-xs">Đ</div>
            <h6 className="font-black text-xs md:text-sm text-indigo-900 uppercase">Đảng Cộng Sản Việt Nam</h6>
            <p className="text-[10px] md:text-xs text-stone-600">Đảng cầm quyền, đề ra đường lối chính sách và lãnh đạo Nhà nước</p>
            
            {/* Connection Arrow Down */}
            <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 flex flex-col items-center pointer-events-none">
              <ArrowDown className="w-5 h-5 text-indigo-550 animate-bounce" />
            </div>
          </div>

          {/* Node 2: Nhà Nước */}
          <div className="w-full max-w-sm bg-white border-2 border-indigo-600 p-5 rounded-2xl shadow-md text-center space-y-2 relative">
            <div className="mx-auto w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">
              <Landmark className="w-4.5 h-4.5" />
            </div>
            <h6 className="font-black text-xs md:text-sm text-indigo-900 uppercase">Bộ Máy Nhà Nước</h6>
            <p className="text-[10px] md:text-xs text-stone-750 font-bold">Cán bộ và cơ quan thực thi quyền lực công</p>
            <div className="bg-stone-50 border border-stone-200 p-2.5 rounded-lg text-left text-[9px] md:text-[10px] text-stone-550 space-y-1">
              <p><strong>Hiến pháp 1946 quy định kiểm soát bên trong:</strong></p>
              <p>· Nghị viện nhân dân có quyền kiểm soát và phê bình Chính phủ.</p>
              <p>· Bộ trưởng không được Nghị viện tín nhiệm thì phải từ chức.</p>
            </div>

            {/* Connection Arrow Up */}
            <div className="absolute left-1/2 -top-8 -translate-x-1/2 flex flex-col items-center pointer-events-none" />
            
            {/* Connection Arrow Up from People */}
            <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 flex flex-col items-center pointer-events-none">
              <ArrowUp className="w-5 h-5 text-indigo-550 animate-bounce" />
            </div>
          </div>

          {/* Node 3: Nhân Dân */}
          <div className="w-full max-w-sm bg-white border border-indigo-200 p-4 rounded-2xl shadow-sm text-center space-y-2 relative group hover:border-indigo-500 transition-colors">
            <div className="mx-auto w-8 h-8 rounded-full bg-indigo-50 text-indigo-750 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <h6 className="font-black text-xs md:text-sm text-indigo-900 uppercase">Nhân Dân Lao Động</h6>
            <p className="text-[10px] md:text-xs text-stone-600">Chủ thể tối cao của quyền lực nhà nước, ủy thác quyền lực</p>
          </div>

        </div>
      </div>

      {/* DETAIL METHODS OF CONTROL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Hướng 1: Đảng kiểm soát */}
        <div className="bg-white border border-indigo-100 rounded-2xl p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)] space-y-4">
          <span className="px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[10px] font-black uppercase tracking-wider">
            1. Đảng Lãnh Đạo &amp; Kiểm Soát
          </span>
          
          <p className="text-stone-600 text-xs leading-relaxed text-justify">
            Đảng lãnh đạo thông qua công tác kiểm tra, giám sát cán bộ chấp hành đường lối chính sách. Bác nhấn mạnh: <strong>&quot;phải tăng cường công tác kiểm tra&quot;</strong> để thúc đẩy và giáo dục cán bộ làm gương mẫu cho nhân dân.
          </p>

          <div className="bg-stone-50 border border-stone-200 p-3.5 rounded-xl space-y-2">
            <h6 className="font-bold text-stone-900 text-xs">Điều kiện để kiểm soát tốt:</h6>
            <ul className="list-disc list-inside text-[11px] text-stone-600 space-y-1 pl-1">
              <li>Việc kiểm soát phải có <strong>hệ thống</strong>.</li>
              <li>Người đi kiểm soát phải là người <strong>rất có uy tín</strong>.</li>
            </ul>
          </div>
        </div>

        {/* Hướng 2: Nhân dân kiểm soát */}
        <div className="bg-white border border-indigo-100 rounded-2xl p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)] space-y-4">
          <span className="px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[10px] font-black uppercase tracking-wider">
            2. Nhân Dân Kiểm Soát
          </span>
          
          <p className="text-stone-600 text-xs leading-relaxed text-justify">
            Quyền kiểm soát của quần chúng nhân dân là cốt lõi. Bác khẳng định số lượng đảng viên rất nhỏ bé so với quần chúng, nên phải có nhân dân giúp sức và kiểm soát công việc nhà nước.
          </p>

          <div className="bg-stone-50 border border-stone-200 p-3.5 rounded-xl space-y-2">
            <h6 className="font-bold text-stone-900 text-xs">Hai cách kiểm soát phối hợp:</h6>
            <ul className="list-disc list-inside text-[11px] text-stone-600 space-y-1 pl-1">
              <li>Kiểm soát từ trên xuống (tổ chức Đảng, Nhà nước).</li>
              <li>Kiểm soát từ dưới lên (quần chúng nhân dân).</li>
            </ul>
            <p className="text-[10px] text-stone-500 italic pt-1 border-t border-stone-200">
              → Phải kết hợp chặt chẽ cả 2 cách để tạo thành cơ chế khép kín.
            </p>
          </div>
        </div>

      </div>

      {/* Quote tuong tap t14 */}
      <div className="relative overflow-hidden rounded-2xl bg-stone-50 border border-stone-200 p-6 space-y-4">
        <h5 className="font-bold text-stone-900 text-xs md:text-sm">Trích lục chỉ dạy về công tác kiểm tra của Đảng:</h5>
        
        <div className="relative overflow-hidden rounded-xl bg-white border border-stone-200 p-5 shadow-sm">
          <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-indigo-600 opacity-10 -rotate-12 pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <p className="font-playfair italic text-stone-850 text-xs leading-relaxed text-justify">
              &quot;Kiểm tra có tác dụng thúc đẩy và giáo dục đảng viên, cán bộ làm tròn nhiệm vụ, làm gương mẫu tốt cho nhân dân. Công việc của Đảng và Nhà nước ngày càng nhiều. Muốn hoàn thành tốt mọi việc, thì toàn thể đảng viên và cán bộ phải chấp hành nghiêm chỉnh đường lối và chính sách của Đảng. Và muốn như vậy, thì các cấp ủy đảng phải tăng cường công tác kiểm tra.&quot;
            </p>
            <div className="flex items-center justify-end text-[9px] font-bold text-indigo-750 font-sans tracking-wide">
              <span>— Hồ Chí Minh (Toàn tập, t.14, tr.362)</span>
            </div>
          </div>
        </div>
      </div>

      {/* GHI NHỚ & TỪ KHÓA ÔN THI */}
      <div className="space-y-4 pt-4 border-t border-stone-200">
        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 border-l-4 border-l-amber-500 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-amber-800">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
            <h5 className="font-extrabold text-xs md:text-sm uppercase tracking-wider">
              💡 GHI NHỚ CỐT LÕI (Mục II.3.a)
            </h5>
          </div>
          
          <ul className="space-y-2 text-stone-750 text-xs md:text-sm pl-2">
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Mục đích tối hậu:</strong> Ngăn chặn tình trạng tha hóa, lạm quyền, cậy thế cậy quyền trong đội ngũ cán bộ nhà nước.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>2 chủ thể kiểm soát:</strong> Đảng Cộng sản Việt Nam (Đảng cầm quyền) và Nhân dân lao động.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Phép phối hợp kiểm soát:</strong> Kết hợp đồng bộ kiểm soát từ trên xuống (của Đảng và Nhà nước) với kiểm soát từ dưới lên (của quần chúng nhân dân).</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Hiến pháp 1946:</strong> Thể chế hóa quyền kiểm soát, phê bình Chính phủ của Nghị viện nhân dân.</span>
            </li>
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h5 className="font-extrabold text-xs md:text-sm text-stone-850 uppercase tracking-wider">
            📋 TỪ KHÓA ÔN THI
          </h5>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "Kiểm soát quyền lực",
              "Phòng chống thoái hóa",
              "Ngăn ngừa lạm quyền",
              "Đảng cầm quyền lãnh đạo",
              "Tăng cường kiểm tra",
              "Nghị viện nhân dân kiểm soát",
              "Kiểm soát từ trên xuống",
              "Kiểm soát từ dưới lên",
              "Quần chúng giúp sức kiểm soát",
              "Hiến pháp 1946"
            ].map((keyword, idx) => (
              <span 
                key={idx}
                className="inline-flex items-center px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[11px] md:text-xs font-bold leading-none tracking-wide select-none"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
