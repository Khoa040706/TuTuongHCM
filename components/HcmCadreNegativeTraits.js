"use client";
import React from "react";
import { AlertTriangle, Quote, ShieldAlert } from "lucide-react";

export default function HcmCadreNegativeTraits() {
  const negativeTraits = [
    {
      id: 1,
      title: "Mang nặng chủ nghĩa cá nhân",
      desc: "Việc gì cũng nghĩ đến lợi ích riêng của mình trước hết; sa vào tư tưởng cá nhân chủ nghĩa ích kỷ, vụ lợi."
    },
    {
      id: 2,
      title: "Ngại gian khổ, hy sinh",
      desc: "Lười biếng, ngại chịu đựng khó khăn gian khổ, sa vào tham ô, hủ hóa, lãng phí, xa hoa, sống xa hoa hưởng lạc."
    },
    {
      id: 3,
      title: "Tham danh, trục lợi",
      desc: "Chạy theo hư danh, thích địa vị, quyền hành, tìm cách vun vén lợi ích cá nhân, tham quyền cố vị."
    },
    {
      id: 4,
      title: "Coi thường tập thể, xem khinh quần chúng",
      desc: "Tự cho mình là giỏi nhất, không coi trọng trí tuệ tập thể, độc đoán, chuyên quyền, xa rời quần chúng."
    },
    {
      id: 5,
      title: "Mắc bệnh quan liêu, mệnh lệnh",
      desc: "Thích ra oai, chỉ tay năm ngón, xa rời thực tế, thờ ơ trước những khó khăn và nguyện vọng chính đáng của nhân dân."
    },
    {
      id: 6,
      title: "Không chịu học tập để tiến bộ",
      desc: "Lười học tập chính trị, văn hóa, chuyên môn nghiệp vụ; tự mãn với những hiểu biết nông cạn của bản thân."
    },
    {
      id: 7,
      title: "Mất đoàn kết, vô kỷ luật",
      desc: "Thiếu tính tổ chức, kỷ luật; kéo bè kéo cánh, gây mất đoàn kết nội bộ; kém tinh thần trách nhiệm trước công việc."
    },
    {
      id: 8,
      title: "Không chấp hành đúng đường lối chính sách",
      desc: "Xem nhẹ chỉ thị, nghị quyết của Đảng và chính sách pháp luật của Nhà nước; thực hiện một cách đối phó, hời hợt."
    }
  ];

  return (
    <div className="w-full py-4 space-y-6">
      <div className="bg-red-500/5 border-l-4 border-red-650 rounded-2xl p-6 md:p-8 space-y-5 shadow-sm">
        
        {/* Header Block */}
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-red-100 text-red-700 shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5 animate-pulse" />
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-red-150 text-red-800 text-[10px] font-bold uppercase tracking-wider">
                Cảnh báo & Loại bỏ
              </span>
              <span className="text-[10px] text-stone-500 font-semibold">
                Bài báo Nhân dân, số 5409 (3/2/1969)
              </span>
            </div>
            <h6 className="text-sm md:text-base font-extrabold text-stone-900 font-playfair leading-tight">
              8 BIỂU HIỆN CỦA CHỦ NGHĨA CÁ NHÂN (&quot;GIẶC NỘI XÂM&quot;)
            </h6>
          </div>
        </div>

        {/* 8 Negative Traits List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {negativeTraits.map((trait) => (
            <div 
              key={trait.id}
              className="bg-white border border-red-100 hover:border-red-200 p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all duration-300 flex items-start gap-3"
            >
              <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-xs font-black text-red-600 shrink-0">
                {trait.id}
              </span>
              <div className="space-y-1">
                <h6 className="text-xs font-bold text-stone-950 block leading-tight">
                  {trait.title}
                </h6>
                <p className="text-[11px] md:text-xs text-stone-600 leading-relaxed text-justify">
                  {trait.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bác Hồ's warning Quote Card */}
        <div className="bg-white/80 border border-red-200/60 p-4.5 rounded-xl space-y-3 relative overflow-hidden">
          <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-red-600/[0.03] -rotate-12 pointer-events-none" />
          <p className="font-playfair italic text-stone-850 text-xs md:text-sm leading-relaxed text-justify relative z-10">
            &quot;Chủ nghĩa cá nhân là một thứ vi trùng rất độc, do nó mà sinh ra các thứ bệnh nguy hiểm: quan liêu, mệnh lệnh, bè phái, chủ quan, tham ô, lãng phí... Nó là đồng minh của giặc ngoại xâm... Địch bên ngoài không đáng sợ. Địch bên trong đáng sợ hơn, vì nó phá hoại từ trong phá ra.&quot;
          </p>
          <div className="flex items-center justify-end text-[9px] font-bold text-red-750 font-sans tracking-wide">
            <span>— Hồ Chí Minh, tác phẩm &quot;Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân&quot;</span>
          </div>
        </div>

      </div>
    </div>
  );
}
