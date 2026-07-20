"use client";
import React from "react";
import { Sparkles, Quote, Compass, Activity, ShieldAlert, GraduationCap, Award, BookOpen } from "lucide-react";

export default function HcmApplyPartyBuilding() {
  const blocks = [
    {
      id: "a",
      title: "Đề ra đường lối, chủ trương đúng đắn",
      icon: Compass,
      iconBg: "bg-red-50 text-red-650",
      content: "Đường lối, chủ trương của Đảng phải dựa trên nền tảng lý luận chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh, đồng thời phải vận dụng, phát triển sáng tạo phù hợp với hoàn cảnh đất nước trong từng giai đoạn lịch sử.",
      quote: "<strong>&quot;Sai một ly đi một dặm&quot;</strong> — đúc kết sâu sắc của Hồ Chí Minh chỉ rõ tầm quan trọng quyết định của việc định hình đường lối chính trị đúng đắn."
    },
    {
      id: "b",
      title: "Tổ chức thực hiện tốt đường lối, chủ trương",
      icon: Activity,
      iconBg: "bg-amber-50 text-amber-650",
      content: "Phải nhanh chóng <strong>thể chế hóa</strong> và triển khai hành động tích cực trong toàn hệ thống chính trị. Phát huy vai trò và trách nhiệm của đội ngũ cán bộ, đảng viên, đặc biệt là đội ngũ <strong>cán bộ cấp chiến lược</strong>. Người đứng đầu phải nêu cao trách nhiệm gương mẫu để quần chúng noi theo."
    },
    {
      id: "c",
      title: "Chú trọng công tác chỉnh đốn Đảng thường xuyên",
      icon: ShieldAlert,
      iconBg: "bg-orange-50 text-orange-650",
      content: "Sự nghiệp cách mạng và công cuộc đổi mới có thành công hay không phụ thuộc trực tiếp vào chất lượng, độ trong sạch của Đảng. Phải chỉnh đốn Đảng thường xuyên để Đảng luôn xứng đáng <strong>&quot;là đạo đức, là văn minh&quot;</strong>, đảng viên vừa là người lãnh đạo, vừa là người đầy tớ trung thành của dân. Phải thống nhất giữa nói và làm, tăng cường kiểm tra, giám sát để phục vụ Tổ quốc, đưa nước nhà tiến vững chắc lên CNXH.",
      quote: "<em>&quot;thành công hay không phụ thuộc vào chất lượng, sự trong sạch của bản thân Đảng.&quot;</em>"
    }
  ];

  return (
    <div className="w-full py-2 select-text font-sans bg-transparent space-y-8">
      
      {/* HEADER */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded bg-red-500/10 border border-red-500/20 text-red-800 text-[10px] font-bold uppercase tracking-wider">
            📜 Mục III.1
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
          <span className="text-xs text-stone-500 font-bold font-sans">Tiểu mục 1 — Vận dụng vào xây dựng Đảng</span>
        </div>
        <h4 className="text-xl md:text-2xl font-black font-playfair tracking-tight mb-2 text-stone-900 leading-tight">
          XÂY DỰNG ĐẢNG THẬT SỰ TRONG SẠCH, VỮNG MẠNH
        </h4>
      </div>

      {/* 3 BLOCKS */}
      <div className="space-y-5">
        {blocks.map((bl) => {
          const IconComponent = bl.icon;
          return (
            <div 
              key={bl.id}
              className="bg-stone-50/50 border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-800 text-[10px] font-black uppercase">
                  Phần {bl.id}
                </span>
                <div className={`p-1.5 rounded-lg ${bl.iconBg} shrink-0`}>
                  <IconComponent className="w-4.5 h-4.5" />
                </div>
                <h5 className="font-extrabold text-stone-900 text-xs md:text-sm uppercase tracking-wide">
                  {bl.title}
                </h5>
              </div>

              <p className="text-[11px] md:text-xs text-stone-600 leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: bl.content }} />

              {bl.quote && (
                <div className="relative overflow-hidden rounded-xl bg-white border border-stone-200/80 p-4 space-y-2">
                  <p className="font-playfair italic text-stone-800 text-[11px] md:text-xs leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: bl.quote }} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* STUDENT RESPONSIBILITY BOX */}
      <div className="bg-red-500/[0.02] border-2 border-red-150 p-6 rounded-2xl space-y-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5.5 h-5.5 text-red-650" />
          <h5 className="font-black text-red-950 text-xs md:text-sm uppercase tracking-wider">
            Trách Nhiệm Của Sinh Viên Học Sinh
          </h5>
        </div>

        <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
          Mục tiêu cốt lõi của công tác xây dựng Đảng là hướng tới một nước Việt Nam <strong>&quot;hùng cường&quot;</strong>, nhân dân có cuộc sống <strong>&quot;ấm no, tự do, hạnh phúc&quot;</strong> — những từ ngữ cao quý thường xuất hiện trong các văn bản chỉ đạo của Chủ tịch Hồ Chí Minh.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Party member student */}
          <div className="bg-white border border-red-100 rounded-xl p-4.5 space-y-2">
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-red-600" />
              <span className="text-[10px] font-black text-red-800 bg-red-50 px-2 py-0.5 rounded uppercase">
                Sinh viên là đảng viên:
              </span>
            </div>
            <p className="text-[11px] text-stone-600 leading-relaxed text-justify">
              Gương mẫu thực hiện tốt đường lối, quan điểm, chủ trương và điều lệ của Đảng. Phải là công dân gương mẫu hàng đầu và là sinh viên đạt kết quả tốt trong học tập, rèn luyện đạo đức.
            </p>
          </div>

          {/* Non-party member student */}
          <div className="bg-white border border-red-100 rounded-xl p-4.5 space-y-2">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-red-600" />
              <span className="text-[10px] font-black text-stone-750 bg-stone-100 px-2 py-0.5 rounded uppercase">
                Sinh viên chưa là đảng viên:
              </span>
            </div>
            <p className="text-[11px] text-stone-600 leading-relaxed text-justify">
              Tích cực học tập và nghiên cứu tư tưởng Hồ Chí Minh. Phấn đấu rèn luyện để được đứng vào hàng ngũ của Đảng hoặc là người tích cực ủng hộ Đảng, góp phần đưa nước nhà sánh vai cường quốc năm châu.
            </p>
          </div>
        </div>

        {/* Quote khai trường */}
        <div className="relative overflow-hidden rounded-xl bg-white border border-red-100 p-4 mt-2">
          <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-red-600 opacity-10 -rotate-12 pointer-events-none" />
          <p className="font-playfair italic text-stone-850 text-[11px] md:text-xs leading-relaxed text-justify">
            &quot;Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.&quot;
          </p>
          <div className="flex items-center justify-end text-[9px] font-bold text-red-750 font-sans tracking-wide">
            <span>— Trích thư gửi học sinh nhân ngày khai trường đầu tiên (9/1945)</span>
          </div>
        </div>
      </div>

      {/* GHI NHỚ & TỪ KHÓA ÔN THI */}
      <div className="space-y-4 pt-4 border-t border-stone-200">
        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 border-l-4 border-l-amber-500 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-amber-800">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
            <h5 className="font-extrabold text-xs md:text-sm uppercase tracking-wider">
              💡 GHI NHỚ CỐT LÕI (Mục III.1)
            </h5>
          </div>
          
          <ul className="space-y-2 text-stone-750 text-xs md:text-sm pl-2">
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Mục tiêu tối thượng:</strong> Đất nước hùng cường, nhân dân có cuộc sống ấm no, tự do, hạnh phúc.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Chìa khóa quyết định:</strong> Sự thành công hay thất bại của sự nghiệp cách mạng đều phụ thuộc vào chất lượng, sự trong sạch của bản thân Đảng cầm quyền.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Bản lĩnh sinh viên:</strong> Thực hành tốt đường lối Đảng, tích cực học tập rèn luyện đạo đức để góp phần kiến thiết nước nhà sánh vai cường quốc năm châu.</span>
            </li>
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h5 className="font-extrabold text-xs md:text-sm text-stone-850 uppercase tracking-wider">
            📋 TỪ KHÓA ÔN THI
          </h5>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "Đường lối đúng đắn",
              "Thể chế hóa chủ trương",
              "Cán bộ chiến lược",
              "Người đứng đầu nêu gương",
              "Chỉnh đốn Đảng",
              "Đảng là đạo đức văn minh",
              "Thống nhất nói và làm",
              "Kiểm tra giám sát",
              "Sinh viên là đảng viên gương mẫu",
              "Sánh vai cường quốc năm châu",
              "Thư gửi học sinh 9/1945"
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
