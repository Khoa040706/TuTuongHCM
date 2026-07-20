"use client";
import React from "react";
import { Sparkles, Quote, CheckCircle2, Heart, Award, ShieldCheck, Scale } from "lucide-react";

export default function HcmStateForPeople() {
  return (
    <div className="w-full py-2 select-text font-sans bg-transparent space-y-8">
      
      {/* HEADER BLOCK */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-800 text-[10px] font-bold uppercase tracking-wider">
            📜 Mục II.1.d
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-650" />
          <span className="text-xs text-stone-500 font-bold font-sans">Tiểu mục 1 — Phần d</span>
        </div>
        <h4 className="text-xl md:text-2xl font-black font-playfair tracking-tight mb-2 text-stone-900 leading-tight">
          NHÀ NƯỚC VÌ NHÂN DÂN
        </h4>
      </div>

      {/* KHAI NIEM */}
      <div className="bg-indigo-50/30 border border-indigo-150 p-5 rounded-2xl text-stone-700 text-xs md:text-sm leading-relaxed text-justify space-y-3">
        <h5 className="font-extrabold text-indigo-900 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
          <Heart className="w-4.5 h-4.5 text-indigo-650" />
          Định Nghĩa Khái Niệm
        </h5>
        <p>
          Nhà nước vì nhân dân là nhà nước <strong>phục vụ lợi ích và nguyện vọng của nhân dân</strong>, không có đặc quyền đặc lợi, thực sự trong sạch, cần, kiệm, liêm, chính.
        </p>
        <p>
          Hồ Chí Minh là hình mẫu của một vị Chủ tịch vì dân. Người yêu cầu mọi công việc của Chính phủ phải nhằm vào một mục đích duy nhất là <strong>mưu tự do hạnh phúc cho mọi người</strong>.
        </p>

        {/* Quote Card */}
        <div className="relative overflow-hidden rounded-xl bg-white border border-indigo-100 p-5 shadow-sm mt-3">
          <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-indigo-600 opacity-10 -rotate-12 pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <p className="font-playfair italic text-stone-850 text-xs md:text-sm leading-relaxed text-justify">
              &quot;Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì có hại cho dân, ta phải hết sức tránh.&quot;
            </p>
            <div className="flex items-center justify-end text-[9px] font-bold text-indigo-750 font-sans tracking-wide">
              <span>— Hồ Chí Minh (Toàn tập, t.4, tr.21, 52)</span>
            </div>
          </div>
        </div>
      </div>

      {/* THUOC TINH DUOC LONG DAN */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-stone-150 pb-2">
          <Award className="w-4.5 h-4.5 text-indigo-650" />
          <h5 className="font-extrabold text-stone-900 text-xs md:text-sm uppercase tracking-wider">
            Thuộc Tính &quot;Được Lòng Dân&quot;
          </h5>
        </div>

        <div className="bg-stone-50 border border-stone-200/80 p-5 rounded-2xl text-stone-700 text-xs md:text-sm leading-relaxed text-justify space-y-3">
          <p>
            Thước đo tối cao của một Nhà nước vì dân là phải <strong>&quot;được lòng dân&quot;</strong>, làm sao cho <strong>&quot;dân tin, dân mến, dân yêu&quot;</strong>.
          </p>
          <p>
            Muốn dân yêu mến, trước hết cán bộ nhà nước phải có tình yêu chân thành đối với nhân dân, tôn trọng dân, đặt lợi ích của nhân dân trên hết thảy và có một tinh thần <strong>chí công vô tư</strong> tuyệt đối.
          </p>
        </div>
      </div>

      {/* TWO DEMANDS FOR CADRES */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-stone-150 pb-2">
          <Scale className="w-4.5 h-4.5 text-indigo-650" />
          <h5 className="font-extrabold text-stone-900 text-xs md:text-sm uppercase tracking-wider">
            Đòi Hỏi Phẩm Chất Cán Bộ: Vừa Là Đầy Tớ, Vừa Là Người Lãnh Đạo
          </h5>
        </div>

        <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
          Đây là hai đòi hỏi tưởng chừng mâu thuẫn nhưng lại thống nhất biện chứng sâu sắc trong tư duy Hồ Chí Minh:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Servant role */}
          <div className="bg-white border border-indigo-100 rounded-2xl p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)] space-y-3">
            <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[10px] font-bold uppercase tracking-wider">
              1. Là Người Đầy Tớ
            </span>
            <h6 className="font-bold text-stone-900 text-xs md:text-sm">Tận tụy phục vụ nhân dân</h6>
            <p className="text-stone-600 text-xs leading-relaxed text-justify">
              Cán bộ phải trung thành, tận tụy, cần kiệm liêm chính, chí công vô tư; thực hiện phương châm hoạt động: <strong>&quot;lo trước thiên hạ, vui sau thiên hạ&quot;</strong>.
            </p>
          </div>

          {/* Leader role */}
          <div className="bg-white border border-indigo-100 rounded-2xl p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)] space-y-3">
            <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[10px] font-bold uppercase tracking-wider">
              2. Là Người Lãnh Đạo
            </span>
            <h6 className="font-bold text-stone-900 text-xs md:text-sm">Trí tuệ, sáng suốt dẫn dắt</h6>
            <p className="text-stone-600 text-xs leading-relaxed text-justify">
              Phải có trí tuệ hơn người, tinh thần minh mẫn, sáng suốt, có tầm nhìn xa trông rộng, gần gũi nhân dân và biết cách trọng dụng hiền tài đất nước.
            </p>
          </div>
        </div>

        <div className="bg-stone-50 border border-stone-200/80 p-5 rounded-2xl space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4.5 h-4.5 text-indigo-650" />
            <span className="text-[10px] font-bold text-indigo-750 bg-indigo-50 px-2 py-0.5 rounded-full uppercase">
              Giao Thoa Bản Chất &quot;Vừa Hiền Vừa Minh&quot;
            </span>
          </div>
          
          <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
            Người đại diện cho nhân dân gánh vác việc nước phải <strong>&quot;gồm đủ cả đức và tài&quot;</strong>, phải <strong>&quot;vừa hiền lại vừa minh&quot;</strong>.
          </p>
          
          <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
            Phải hội tụ đủ cả 2 yếu tố đó mới có thể: <em>&quot;chẳng những làm những việc trực tiếp lợi cho dân, mà cũng có khi làm những việc mới xem qua như là hại đến dân, nhưng thực chất là vì lợi ích toàn cục, lợi ích lâu dài của nhân dân&quot;</em> (Toàn tập, t.5, tr.285).
          </p>
        </div>
      </div>

      {/* GHI NHỚ & TỪ KHÓA ÔN THI */}
      <div className="space-y-4 pt-4 border-t border-stone-200">
        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 border-l-4 border-l-amber-500 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-amber-800">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
            <h5 className="font-extrabold text-xs md:text-sm uppercase tracking-wider">
              💡 GHI NHỚ CỐT LÕI (Mục II.1.d)
            </h5>
          </div>
          
          <ul className="space-y-2 text-stone-750 text-xs md:text-sm pl-2">
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Mục đích tối cao:</strong> Nhà nước mưu cầu tự do hạnh phúc cho toàn dân, đặt quyền lợi dân lên trên hết thảy.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Thước đo nhà nước vì dân:</strong> Phải &quot;được lòng dân&quot;, được &quot;dân tin, dân mến, dân yêu&quot;.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Đòi hỏi đối với cán bộ:</strong> Vừa là đầy tớ (trung thành, tận tụy, cần kiệm liêm chính), vừa là người lãnh đạo (trí tuệ hơn người, vừa hiền vừa minh).</span>
            </li>
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h5 className="font-extrabold text-xs md:text-sm text-stone-850 uppercase tracking-wider">
            📋 TỪ KHÓA ÔN THI
          </h5>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "Vì nhân dân phục vụ",
              "Mưu tự do hạnh phúc cho dân",
              "Được lòng dân",
              "Dân tin dân mến dân yêu",
              "Đầy tớ trung thành",
              "Người lãnh đạo",
              "Vừa hiền vừa minh",
              "Đức tài trọn vẹn",
              "Lợi ích toàn cục lâu dài",
              "Chí công vô tư"
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
