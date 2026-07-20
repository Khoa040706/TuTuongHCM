"use client";
import React from "react";
import { Sparkles, Quote, CheckCircle2, UserCheck, ShieldAlert, Award } from "lucide-react";

export default function HcmStateByPeople() {
  const duties = [
    "Tuân theo pháp luật của Nhà nước",
    "Tuân theo kỷ luật lao động",
    "Giữ gìn trật tự chung",
    "Đóng góp (nộp thuế) đúng kỳ, đúng số",
    "Hăng hái tham gia công việc chung",
    "Bảo vệ tài sản công cộng",
    "Bảo vệ Tổ quốc"
  ];

  return (
    <div className="w-full py-2 select-text font-sans bg-transparent space-y-8">
      
      {/* HEADER BLOCK */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-800 text-[10px] font-bold uppercase tracking-wider">
            📜 Mục II.1.c
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-650" />
          <span className="text-xs text-stone-500 font-bold font-sans">Tiểu mục 1 — Phần c</span>
        </div>
        <h4 className="text-xl md:text-2xl font-black font-playfair tracking-tight mb-2 text-stone-900 leading-tight">
          NHÀ NƯỚC DO NHÂN DÂN
        </h4>
      </div>

      {/* KHAI NIEM */}
      <div className="bg-indigo-50/30 border border-indigo-150 p-5 rounded-2xl text-stone-700 text-xs md:text-sm leading-relaxed text-justify space-y-3">
        <h5 className="font-extrabold text-indigo-900 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
          <UserCheck className="w-4.5 h-4.5 text-indigo-650" />
          Định Nghĩa Khái Niệm &amp; &quot;Dân Làm Chủ&quot;
        </h5>
        <p>
          Nhà nước do nhân dân trước hết là nhà nước do <strong>nhân dân lập nên</strong> sau thắng lợi của sự nghiệp cách mạng dưới sự lãnh đạo của Đảng Cộng sản Việt Nam. Nhân dân cử ra, tổ chức nên nhà nước thông qua các quyền dân chủ như bầu cử, ứng cử, phúc quyết...
        </p>
        <p>
          Cụm từ <strong>&quot;Dân làm chủ&quot;</strong> nhấn mạnh cả về quyền lợi và nghĩa vụ của nhân dân với tư cách người chủ nước nhà.
        </p>

        {/* Quote Card */}
        <div className="relative overflow-hidden rounded-xl bg-white border border-indigo-100 p-5 shadow-sm mt-3">
          <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-indigo-600 opacity-10 -rotate-12 pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <p className="font-playfair italic text-stone-850 text-xs md:text-sm leading-relaxed text-justify">
              &quot;Nước ta là nước dân chủ, nghĩa là nhà nước do nhân dân làm chủ. Nhân dân có quyền lợi làm chủ, thì phải có nghĩa vụ làm tròn bổn phận công dân, giữ đúng đạo đức công dân.&quot;
            </p>
            <div className="flex items-center justify-end text-[9px] font-bold text-indigo-750 font-sans tracking-wide">
              <span>— Hồ Chí Minh (Toàn tập, t.9, tr.258)</span>
            </div>
          </div>
        </div>
      </div>

      {/* DUTIES GRID */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-stone-150 pb-2">
          <CheckCircle2 className="w-4.5 h-4.5 text-indigo-650" />
          <h5 className="font-extrabold text-stone-900 text-xs md:text-sm uppercase tracking-wider">
            Các Nghĩa Vụ Công Dân Khi Làm Chủ Nước Nhà
          </h5>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {duties.map((duty, idx) => (
            <div key={idx} className="bg-stone-50 border border-stone-200/80 p-4 rounded-xl flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-[10px] font-black text-indigo-750 shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="text-xs text-stone-700 font-semibold leading-snug">{duty}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RESPONSIBILITIES OF THE STATE */}
      <div className="bg-indigo-50/10 border border-indigo-100 p-6 rounded-2xl space-y-4">
        <h5 className="font-bold text-stone-900 text-xs md:text-sm flex items-center gap-2">
          <Award className="w-4.5 h-4.5 text-indigo-650" />
          Trách nhiệm của bộ máy Nhà nước:
        </h5>
        
        <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
          Nhà nước phải <strong>tạo mọi điều kiện</strong> để nhân dân thực hiện đầy đủ các quyền lợi và nghĩa vụ do Hiến pháp và pháp luật quy định. Cán bộ, đảng viên phải tuyệt đối tôn trọng quyền làm chủ thực tế của dân.
        </p>

        <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
          Đồng thời, Hồ Chí Minh yêu cầu nhân dân cũng phải tự giác phấn đấu học tập, nâng cao trình độ để có đủ năng lực làm chủ. Người chỉ dạy:
        </p>

        {/* Quote Năng lực làm chủ */}
        <div className="relative overflow-hidden rounded-xl bg-white border border-indigo-100 p-5 shadow-sm">
          <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-indigo-600 opacity-10 -rotate-12 pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <p className="font-playfair italic text-stone-850 text-xs md:text-sm leading-relaxed text-justify">
              &quot;Chúng ta là những người lao động làm chủ nước nhà. Muốn làm chủ được tốt, phải có năng lực làm chủ.&quot;
            </p>
            <div className="flex items-center justify-end text-[9px] font-bold text-indigo-750 font-sans tracking-wide">
              <span>— Hồ Chí Minh (Toàn tập, t.12, tr.527)</span>
            </div>
          </div>
        </div>

        <p className="text-stone-650 text-xs leading-relaxed text-justify italic pt-2 border-t border-stone-200/60">
          * Điểm độc đáo: Nhà nước do nhân dân không chỉ tuyên bố quyền trên giấy tờ, mà còn có nhiệm vụ chuẩn bị, động viên nhân dân chuẩn bị tốt năng lực làm chủ thực chất → Thể hiện tư tưởng dân chủ triệt để của Hồ Chí Minh.
        </p>
      </div>

      {/* GHI NHỚ & TỪ KHÓA ÔN THI */}
      <div className="space-y-4 pt-4 border-t border-stone-200">
        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 border-l-4 border-l-amber-500 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-amber-800">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
            <h5 className="font-extrabold text-xs md:text-sm uppercase tracking-wider">
              💡 GHI NHỚ CỐT LÕI (Mục II.1.c)
            </h5>
          </div>
          
          <ul className="space-y-2 text-stone-750 text-xs md:text-sm pl-2">
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Mối quan hệ Quyền lợi - Nghĩa vụ:</strong> Dân chủ là dân làm chủ, có quyền lợi đi đôi với nghĩa vụ và bổn phận công dân.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Năng lực làm chủ:</strong> Làm chủ tốt đòi hỏi phải có năng lực làm chủ thực tiễn, Nhà nước có trách nhiệm bồi dưỡng năng lực này cho dân.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Dân chủ triệt để:</strong> Nhà nước chuẩn bị và động viên nhân dân tích cực tham gia vào công tác quản lý nhà nước chứ không cai trị đơn thuần.</span>
            </li>
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h5 className="font-extrabold text-xs md:text-sm text-stone-850 uppercase tracking-wider">
            📋 TỪ KHÓA ÔN THI
          </h5>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "Nhà nước do nhân dân lập nên",
              "Dân cử ra",
              "Dân làm chủ",
              "Quyền lợi đi đôi với nghĩa vụ",
              "Giữ đạo đức công dân",
              "Năng lực làm chủ",
              "Dân chủ triệt để",
              "Động viên nhân dân tham gia"
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
