"use client";
import React from "react";
import { Sparkles, Quote, Landmark, Users, UserCheck, Settings, Scale, ShieldCheck } from "lucide-react";

export default function HcmApplyStateBuilding() {
  const cards = [
    {
      num: "01",
      title: "Xây dựng Nhà nước thật sự trong sạch, vững mạnh",
      icon: Landmark,
      iconBg: "bg-indigo-50 text-indigo-700",
      content: "Đẩy mạnh hoàn thiện pháp luật gắn liền với tổ chức thi hành để nâng cao hiệu lực hiệu quả. Bảo đảm pháp luật vừa là công cụ để Nhà nước quản lý xã hội, vừa là công cụ để nhân dân làm chủ, giám sát và kiểm soát quyền lực công. Quản lý đất nước theo pháp luật kết hợp xây dựng đạo đức xã hội. Tiếp tục hoàn thiện hệ thống luật pháp tôn trọng, bảo đảm, bảo vệ quyền con người, quyền và nghĩa vụ công dân."
    },
    {
      num: "02",
      title: "Cơ chế phân công, phối hợp, kiểm soát quyền lực",
      icon: Users,
      iconBg: "bg-indigo-50 text-indigo-700",
      content: "Xác định rõ cơ chế phân công, phối hợp thực thi quyền lực, đặc biệt là <strong>cơ chế kiểm soát quyền lực</strong> giữa các cơ quan trong việc thực hiện quyền <strong>Lập pháp, Hành pháp, Tư pháp</strong> (trên cơ sở quyền lực nhà nước là thống nhất). Phân định rõ thẩm quyền, trách nhiệm giữa cơ quan Trung ương với địa phương."
    },
    {
      num: "03",
      title: "Xây dựng đội ngũ cán bộ, công chức",
      icon: UserCheck,
      iconBg: "bg-indigo-50 text-indigo-700",
      content: "Xây dựng tiêu chí, tiêu chuẩn về cán bộ. Đẩy mạnh cải cách công tác cán bộ để xây dựng đội ngũ có bản lĩnh chính trị vững vàng, phẩm chất đạo đức trong sáng, trình độ năng lực chuyên môn phù hợp nhiệm vụ. Thực hiện thí điểm dân chủ bầu trực tiếp một số chức danh cơ sở/cấp huyện; thi tuyển cán bộ quản lý. Hoàn thiện đánh giá cán bộ bằng năng lực, hiệu quả thực tế và xây dựng chính sách đãi ngộ, thu hút nhân tài. Đẩy mạnh chống tham nhũng, lãng phí, quan liêu, hách dịch."
    },
    {
      num: "04",
      title: "Đổi mới sự lãnh đạo của Đảng đối với Nhà nước",
      icon: Settings,
      iconBg: "bg-indigo-50 text-indigo-700",
      content: "Đổi mới phương thức lãnh đạo của Đảng bằng: các chủ trương chính sách lớn; lãnh đạo thể chế hóa đường lối thành luật pháp; lãnh đạo xây dựng đội ngũ cán bộ đủ đức tài; lãnh đạo tổ chức thực hiện hiệu quả. Đảng viên và tổ chức đảng phải tuyệt đối gương mẫu tuân thủ pháp luật."
    }
  ];

  return (
    <div className="w-full py-2 select-text font-sans bg-transparent space-y-8">
      
      {/* HEADER */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-800 text-[10px] font-bold uppercase tracking-wider">
            📜 Mục III.2
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-650" />
          <span className="text-xs text-stone-500 font-bold font-sans">Tiểu mục 2 — Vận dụng vào xây dựng Nhà nước</span>
        </div>
        <h4 className="text-xl md:text-2xl font-black font-playfair tracking-tight mb-2 text-stone-900 leading-tight">
          VẬN DỤNG VÀO XÂY DỰNG NHÀ NƯỚC VIỆT NAM MỚI
        </h4>
      </div>

      {/* 4 VERTICAL CARDS */}
      <div className="space-y-5">
        {cards.map((c) => {
          const CardIcon = c.icon;
          return (
            <div 
              key={c.num}
              className="bg-white border border-stone-250 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
            >
              {/* Big Number */}
              <span className="text-3xl md:text-4xl font-black text-indigo-600/10 select-none shrink-0 leading-none pt-1">
                {c.num}
              </span>

              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 rounded-lg ${c.iconBg} shrink-0`}>
                    <CardIcon className="w-4.5 h-4.5" />
                  </div>
                  <h5 className="font-extrabold text-stone-900 text-xs md:text-sm uppercase tracking-wide leading-tight">
                    {c.title}
                  </h5>
                </div>
                <p 
                  className="text-[11px] md:text-xs text-stone-600 leading-relaxed text-justify"
                  dangerouslySetInnerHTML={{ __html: c.content }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* GHI NHỚ & TỪ KHÓA ÔN THI */}
      <div className="space-y-4 pt-4 border-t border-stone-200">
        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 border-l-4 border-l-amber-500 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-amber-800">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
            <h5 className="font-extrabold text-xs md:text-sm uppercase tracking-wider">
              💡 GHI NHỚ CỐT LÕI (Mục III.2)
            </h5>
          </div>
          
          <ul className="space-y-2 text-stone-750 text-xs md:text-sm pl-2">
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Mục tiêu then chốt:</strong> Hoàn thiện hệ thống pháp luật gắn liền với thực thi nghiêm túc, kết hợp giáo dục đạo đức xã hội sâu sắc.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Cơ chế phối hợp quyền lực:</strong> Phân công, phối hợp và kiểm soát quyền lực chặt chẽ giữa 3 quyền Lập pháp, Hành pháp và Tư pháp.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Cải cách công tác cán bộ:</strong> Thí điểm dân chủ bầu trực tiếp chức danh cơ sở, tuyển dụng công chức minh bạch, lấy hiệu quả làm thước đo thực chất.</span>
            </li>
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h5 className="font-extrabold text-xs md:text-sm text-stone-850 uppercase tracking-wider">
            📋 TỪ KHÓA ÔN THI
          </h5>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "Hoàn thiện pháp luật",
              "Công cụ nhân dân làm chủ",
              "Quản lý bằng luật và đạo đức",
              "Bảo vệ quyền con người",
              "Phân công phối hợp quyền lực",
              "Kiểm soát quyền lực nhà nước",
              "Thí điểm bầu trực tiếp cán bộ",
              "Đánh giá cán bộ bằng hiệu quả",
              "Chế độ đãi ngộ nhân tài",
              "Đổi mới phương thức lãnh đạo",
              "Lãnh đạo thể chế hóa"
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
