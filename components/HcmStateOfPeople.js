"use client";
import React from "react";
import { Sparkles, Quote, CheckCircle2, Award, Scale, HelpCircle } from "lucide-react";

export default function HcmStateOfPeople() {
  return (
    <div className="w-full py-2 select-text font-sans bg-transparent space-y-8">
      
      {/* HEADER BLOCK */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-800 text-[10px] font-bold uppercase tracking-wider">
            📜 Mục II.1.b
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-650" />
          <span className="text-xs text-stone-500 font-bold font-sans">Tiểu mục 1 — Phần b</span>
        </div>
        <h4 className="text-xl md:text-2xl font-black font-playfair tracking-tight mb-2 text-stone-900 leading-tight">
          NHÀ NƯỚC CỦA NHÂN DÂN
        </h4>
      </div>

      {/* KHAI NIEM */}
      <div className="bg-indigo-50/30 border border-indigo-150 p-5 rounded-2xl text-stone-700 text-xs md:text-sm leading-relaxed text-justify space-y-3">
        <h5 className="font-extrabold text-indigo-900 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
          <Scale className="w-4.5 h-4.5 text-indigo-650" />
          Định Nghĩa Khái Niệm
        </h5>
        <p>
          Nhà nước của nhân dân là nhà nước mà <strong>tất cả mọi quyền lực trong nhà nước và trong xã hội đều thuộc về nhân dân</strong>.
        </p>
        <p>
          Nhà nước dân chủ tức là <strong>&quot;dân là chủ&quot;</strong> — khẳng định địa vị chủ thể tối cao của mọi quyền lực là nhân dân.
        </p>

        {/* Quote Card */}
        <div className="relative overflow-hidden rounded-xl bg-white border border-indigo-100 p-5 shadow-sm mt-3">
          <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-indigo-600 opacity-10 -rotate-12 pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <p className="font-playfair italic text-stone-850 text-xs md:text-sm leading-relaxed text-justify">
              &quot;Trong nước Việt Nam Dân chủ Cộng hòa của chúng ta, tất cả mọi quyền lực đều là của nhân dân.&quot;
            </p>
            <div className="flex items-center justify-end text-[9px] font-bold text-indigo-750 font-sans tracking-wide">
              <span>— Hồ Chí Minh (Toàn tập, t.8, tr.262)</span>
            </div>
          </div>
        </div>
      </div>

      {/* TWO FORMS OF DEMOCRACY (SIDE-BY-SIDE TABLE) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-stone-150 pb-2">
          <CheckCircle2 className="w-4.5 h-4.5 text-indigo-650" />
          <h5 className="font-extrabold text-stone-900 text-xs md:text-sm uppercase tracking-wider">
            Hai Hình Thức Thực Thi Quyền Lực Của Nhân Dân
          </h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Direct Democracy */}
          <div className="bg-white border border-indigo-100 rounded-2xl p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)] space-y-3">
            <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[10px] font-bold uppercase tracking-wider">
              Dân Chủ Trực Tiếp
            </span>
            <h6 className="font-bold text-stone-900 text-xs md:text-sm">Nhân dân trực tiếp quyết định</h6>
            <p className="text-stone-600 text-xs leading-relaxed text-justify">
              Nhân dân trực tiếp quyết định mọi vấn đề liên quan đến vận mệnh quốc gia, dân tộc và quyền lợi của dân chúng.
            </p>
            <p className="text-stone-600 text-xs leading-relaxed text-justify font-bold italic pt-2 border-t border-stone-100">
              → Hồ Chí Minh luôn coi trọng và tạo điều kiện thuận lợi để thực hành, vì đây là &quot;hình thức dân chủ hoàn bị nhất&quot;.
            </p>
          </div>

          {/* Indirect Democracy */}
          <div className="bg-white border border-indigo-100 rounded-2xl p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)] space-y-3">
            <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[10px] font-bold uppercase tracking-wider">
              Dân Chủ Gián Tiếp (Đại Diện)
            </span>
            <h6 className="font-bold text-stone-900 text-xs md:text-sm">Thông qua các đại diện ủy quyền</h6>
            <p className="text-stone-600 text-xs leading-relaxed text-justify">
              Là hình thức được sử dụng rộng rãi để thực thi quyền lực của nhân dân thông qua các đại diện do họ lựa chọn, bầu ra và những thiết chế quyền lực do họ lập nên.
            </p>
            <p className="text-stone-600 text-xs leading-relaxed text-justify font-bold italic pt-2 border-t border-stone-100">
              → Quyền lực nhà nước là &quot;Thừa ủy quyền&quot; của nhân dân. Tự bản thân nhà nước không có quyền lực.
            </p>
          </div>
        </div>
      </div>

      {/* DETAIL CONTENT OF STATE OF PEOPLE */}
      <div className="space-y-4 bg-stone-50/50 p-5 rounded-2xl border border-stone-200/60">
        <h5 className="font-bold text-stone-900 text-xs md:text-sm">Bản chất &quot;Thừa ủy quyền&quot; &amp; Vai trò &quot;Công bộc&quot;:</h5>
        
        <ul className="list-disc list-inside space-y-3 pl-2 text-stone-650 text-xs md:text-sm">
          <li className="text-justify">
            Cơ quan quyền lực nhà nước và cán bộ <strong>&quot;đều là công bộc của dân, nghĩa là để gánh vác việc chung cho dân, chứ không phải để đè đầu dân&quot;</strong> (Toàn tập, t.10, tr.572).
          </li>
          <li className="text-justify">
            Bác chỉ rõ: <em>&quot;Nước ta là nước dân chủ, địa vị cao nhất là dân, từ người quét nhà, nấu ăn cho đến Chủ tịch nước đều là phân công làm đầy tớ cho dân&quot;</em> (Toàn tập, t.7, tr.434).
          </li>
          <li className="text-justify">
            Hồ Chí Minh kịch liệt phê phán những cán bộ thoái hóa, biến chất tự coi mình là <strong>&quot;quan cách mạng&quot;</strong>, đứng trên nhân dân, cậy thế cậy quyền hành dân.
          </li>
        </ul>

        {/* Quyen kiem soat, bai mien */}
        <div className="pt-4 border-t border-stone-200 space-y-3">
          <h6 className="font-bold text-stone-950 text-xs md:text-sm">Nhân dân có quyền kiểm soát, phê bình, bãi miễn:</h6>
          <p className="text-stone-600 text-xs leading-relaxed text-justify">
            Dân có quyền bãi miễn những đại biểu mà họ đã lựa chọn, bầu ra và giải tán thiết chế quyền lực do họ lập nên nếu tỏ ra không xứng đáng.
          </p>
          
          {/* Quote bãi miễn */}
          <div className="relative overflow-hidden rounded-xl bg-white border border-stone-200 p-4 space-y-2 mt-2">
            <p className="font-playfair italic text-stone-850 text-xs leading-relaxed text-justify">
              &quot;Nhân dân có quyền bãi miễn đại biểu Quốc hội và đại biểu Hội đồng nhân dân nếu những đại biểu ấy tỏ ra không xứng đáng (Toàn tập, t.12, tr.375)... Nếu Chính phủ làm hại dân thì dân có quyền đuổi Chính phủ (Toàn tập, t.5, tr.75).&quot;
            </p>
          </div>
        </div>

        {/* Luat phap dan chu */}
        <div className="pt-4 border-t border-stone-200 space-y-2">
          <h6 className="font-bold text-stone-950 text-xs md:text-sm">Luật pháp dân chủ:</h6>
          <p className="text-stone-600 text-xs leading-relaxed text-justify">
            Khác biệt căn bản với luật pháp phong kiến, thực dân, luật pháp Việt Nam mới phản ánh ý nguyện, bảo vệ quyền lợi của quần chúng nhân dân và là phương tiện để kiểm soát quyền lực nhà nước.
          </p>
        </div>
      </div>

      {/* GHI NHỚ & TỪ KHÓA ÔN THI */}
      <div className="space-y-4 pt-4 border-t border-stone-200">
        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 border-l-4 border-l-amber-500 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-amber-800">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
            <h5 className="font-extrabold text-xs md:text-sm uppercase tracking-wider">
              💡 GHI NHỚ CỐT LÕI (Mục II.1.b)
            </h5>
          </div>
          
          <ul className="space-y-2 text-stone-750 text-xs md:text-sm pl-2">
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Nguyên lý cốt lõi:</strong> &quot;Dân là chủ&quot; — nhân dân là chủ thể tối cao của mọi quyền lực nhà nước.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Bản chất công bộc:</strong> Cán bộ từ quét nhà đến Chủ tịch nước đều là người đầy tớ, gánh vác việc chung cho dân, không làm quan đè đầu dân.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Quyền kiểm soát tối cao:</strong> Nhân dân có quyền kiểm soát, phê bình, bãi miễn đại biểu không xứng đáng và &quot;đuổi Chính phủ&quot; nếu làm hại dân.</span>
            </li>
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h5 className="font-extrabold text-xs md:text-sm text-stone-850 uppercase tracking-wider">
            📋 TỪ KHÓA ÔN THI
          </h5>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "Tất cả quyền lực thuộc về nhân dân",
              "Dân là chủ",
              "Dân chủ trực tiếp hoàn bị nhất",
              "Dân chủ gián tiếp thừa ủy quyền",
              "Công bộc của dân",
              "Đầy tớ của dân",
              "Quyền bãi miễn đại biểu",
              "Quyền đuổi Chính phủ",
              "Luật pháp dân chủ"
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
