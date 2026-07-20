"use client";
import React from "react";
import { Sparkles, Quote, ShieldAlert, AlertTriangle, Trash2, Heart, Scale, UserCheck, Flag, CheckCircle, TrendingUp } from "lucide-react";

export default function HcmStateAntiCorruption() {
  const negativeTraits = [
    {
      id: "Một là",
      title: "Đặc quyền, đặc lợi",
      icon: ShieldAlert,
      iconBg: "bg-red-50 text-red-700",
      content: "Xây dựng Nhà nước trong sạch đòi hỏi phải tẩy trừ tận gốc thói đặc quyền đặc lợi. Biểu hiện là cậy mình là người trong cơ quan chính quyền để cửa quyền, hách dịch với dân, lạm quyền, vơ vét tiền của, lợi dụng chức quyền làm lợi cho cá nhân mình, sa vào chủ nghĩa cá nhân ích kỷ."
    },
    {
      id: "Hai là",
      title: "Tham ô, lãng phí, quan liêu (Giặc nội xâm)",
      icon: Trash2,
      iconBg: "bg-rose-50 text-rose-700",
      content: "Bác coi đây là <strong>&quot;giặc nội xâm&quot;</strong>, thứ giặc ở trong lòng nguy hiểm hơn giặc ngoại xâm. Phê phán người <em>&quot;lấy của công dùng vào việc tư, giành cả việc tốt về mình&quot;</em>. Nêu rõ tội tham ô, lãng phí là bạn đồng minh của thực dân phong kiến, tội như Việt gian mật thám.<br/><br/><strong>Mốc pháp luật lịch sử:</strong><br/>· <strong>27/11/1946:</strong> Ký Sắc lệnh phạt tội đưa/nhận hối lộ từ 5 - 20 năm tù khổ sai và phạt gấp đôi tiền nhận hối lộ.<br/>· <strong>26/1/1946:</strong> Ký lệnh phạt tội tham ô công quỹ mức cao nhất là tử hình.<br/><br/><strong>Lãng phí:</strong> Bác lên án lãng phí sức lao động, thời gian, tiền của. Xem tiết kiệm là &quot;quốc sách&quot;.<br/><strong>Quan liêu:</strong> Là &quot;bệnh gốc&quot; ấp ủ, dung túng tham ô. Muốn trừ tham ô trước hết phải tẩy sạch bệnh quan liêu."
    },
    {
      id: "Ba là",
      title: "Tư túng, chia rẽ, kiêu ngạo",
      icon: AlertTriangle,
      iconBg: "bg-amber-50 text-amber-700",
      content: "Gây mất đoàn kết nội bộ. Lên án tệ kéo bè kéo cánh, đưa bà con bạn hữu không tài năng vào chức quyền. Cán bộ kiêu ngạo tự coi mình trong Chính phủ là thần thánh, mang bộ mặt <strong>&quot;quan cách mạng&quot;</strong> làm mất uy tín của Đảng và Nhà nước."
    }
  ];

  const causesSub = [
    "Do sự thiếu tu dưỡng, rèn luyện của bản thân cán bộ."
  ];

  const causesObj = [
    "Do công tác cán bộ của Đảng và Nhà nước chưa tốt.",
    "Do cách tổ chức, vận hành trong Đảng, Nhà nước, sự phối hợp giữa hai bên chưa thật sự khoa học, hiệu quả.",
    "Do trình độ phát triển còn thấp của đời sống xã hội.",
    "Do tàn dư của những chính sách phản động của chế độ thực dân, phong kiến.",
    "Do âm mưu chống phá của các lực lượng phản động."
  ];

  const remedies = [
    {
      id: "Một là",
      title: "Nâng cao trình độ dân chủ xã hội",
      desc: "Thực hành dân chủ rộng rãi, phát huy quyền làm chủ thật sự của nhân dân. Đây là giải pháp căn bản và có ý nghĩa lâu dài nhất.",
      icon: TrendingUp,
      iconBg: "bg-red-50 text-red-700"
    },
    {
      id: "Hai là",
      title: "Pháp luật và kỷ luật nghiêm minh",
      desc: "Công tác kiểm tra phải thường xuyên. Với kẻ thoái hóa: phải thẳng tay trừng trị, không có vùng cấm. 'Trăm điều phải có thần pháp quyền'.",
      icon: Scale,
      iconBg: "bg-red-50 text-red-700"
    },
    {
      id: "Ba là",
      title: "Coi trọng giáo dục đạo đức & cảm hóa",
      desc: "Phạt nghiêm là cần thiết nhưng không được lạm dụng. Lấy giáo dục, cảm hóa làm chủ yếu để khơi dậy lương tâm trong mỗi con người.",
      icon: Heart,
      iconBg: "bg-red-50 text-red-700"
    },
    {
      id: "Bốn là",
      title: "Cán bộ đi trước làm gương",
      desc: "Chức vụ càng cao trách nhiệm nêu gương càng lớn. Sự làm gương của người đứng đầu tác động mạnh mẽ đến cấp dưới và nhân dân.",
      icon: UserCheck,
      iconBg: "bg-red-50 text-red-700"
    },
    {
      id: "Năm là",
      title: "Huy động sức mạnh lòng yêu nước",
      desc: "Huy động sức mạnh chủ nghĩa yêu nước của toàn thể nhân dân và cán bộ đảng viên tự giác tu dưỡng và thực hành đạo đức cách mạng.",
      icon: Flag,
      iconBg: "bg-red-50 text-red-700"
    }
  ];

  return (
    <div className="w-full py-2 select-text font-sans bg-transparent space-y-8">
      
      {/* HEADER BLOCK */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded bg-red-500/10 border border-red-500/20 text-red-800 text-[10px] font-bold uppercase tracking-wider">
            📜 Mục II.3.b
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
          <span className="text-xs text-stone-500 font-bold font-sans">Tiểu mục 3 — Phần b</span>
        </div>
        <h4 className="text-xl md:text-2xl font-black font-playfair tracking-tight mb-2 text-stone-900 leading-tight">
          PHÒNG, CHỐNG TIÊU CỰC TRONG NHÀ NƯỚC
        </h4>
      </div>

      {/* 3 RED WARNING CARDS */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-stone-150 pb-2">
          <AlertTriangle className="w-4.5 h-4.5 text-red-650" />
          <h5 className="font-extrabold text-stone-900 text-xs md:text-sm uppercase tracking-wider">
            Các Loại Tiêu Cực Cần Phòng Chống, Khắc Phục
          </h5>
        </div>

        <div className="space-y-5">
          {negativeTraits.map((trait, idx) => {
            const IconComponent = trait.icon;
            return (
              <div 
                key={idx}
                className="bg-red-500/[0.02] border-2 border-red-100 border-l-4 border-l-red-600 rounded-2xl p-5 md:p-6 shadow-sm space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 text-[10px] font-black uppercase">
                    {trait.id}
                  </span>
                  <div className={`p-1.5 rounded-lg ${trait.iconBg} shrink-0`}>
                    <IconComponent className="w-4.5 h-4.5" />
                  </div>
                  <h6 className="font-extrabold text-stone-900 text-xs md:text-sm">{trait.title}</h6>
                </div>
                <p 
                  className="text-[11px] md:text-xs text-stone-600 leading-relaxed text-justify"
                  dangerouslySetInnerHTML={{ __html: trait.content }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* CAUSES OF NEGATIVE TRAITS */}
      <div className="bg-stone-50 border border-stone-200 p-6 rounded-2xl space-y-4">
        <h5 className="font-bold text-stone-900 text-xs md:text-sm">Nguyên Nhân Nảy Sinh Tiêu Cực:</h5>
        
        <div className="space-y-3">
          {/* Subjective */}
          <div className="space-y-2">
            <span className="text-[10px] font-black text-red-800 bg-red-50 px-2 py-0.5 rounded uppercase">
              Nguyên nhân chủ quan (Gốc rễ):
            </span>
            <ul className="list-disc list-inside text-xs text-stone-650 pl-2">
              {causesSub.map((c, i) => (
                <li key={i} className="text-justify">
                  Bắt nguồn từ căn bệnh mẹ là <strong>&quot;chủ nghĩa cá nhân&quot;</strong> và sự thiếu rèn luyện tu dưỡng đạo đức của chính cán bộ.
                </li>
              ))}
            </ul>
          </div>

          {/* Objective */}
          <div className="space-y-2 pt-2 border-t border-stone-200">
            <span className="text-[10px] font-black text-stone-750 bg-stone-100 px-2 py-0.5 rounded uppercase">
              Nguyên nhân khách quan (Tác động từ ngoài):
            </span>
            <ul className="list-disc list-inside text-xs text-stone-650 pl-2 space-y-1">
              {causesObj.map((c, i) => (
                <li key={i} className="text-justify">{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-[11px] text-red-750 italic font-bold pt-2 border-t border-stone-200">
          * Cảnh báo của Bác: Các nguyên nhân trên liên kết với nhau tấn công cán bộ. Nếu Đảng và Nhà nước không có biện pháp phòng ngừa tốt và chính sách bảo vệ cán bộ thì nguy cơ mất cán bộ là rất lớn.
        </p>
      </div>

      {/* 5 REMEDIES (VERTICAL CARDS WITH BIG NUMBERS) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-stone-150 pb-2">
          <CheckCircle className="w-4.5 h-4.5 text-red-650" />
          <h5 className="font-extrabold text-stone-900 text-xs md:text-sm uppercase tracking-wider">
            5 Biện Pháp Phòng, Chống Tiêu Cực Cơ Bản
          </h5>
        </div>

        <div className="space-y-4">
          {remedies.map((rem, idx) => {
            const RemIcon = rem.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-stone-250 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
              >
                {/* Big Number Accent */}
                <span className="text-2xl md:text-3xl font-black text-red-600/10 select-none shrink-0 leading-none pt-0.5">
                  0{idx + 1}
                </span>

                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-1.5 rounded-lg ${rem.iconBg} shrink-0`}>
                      <RemIcon className="w-4.5 h-4.5" />
                    </div>
                    <h6 className="font-extrabold text-stone-900 text-xs md:text-sm">
                      {rem.title}
                    </h6>
                  </div>
                  <p className="text-[11px] md:text-xs text-stone-600 leading-relaxed text-justify">
                    {rem.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quote luong tam t6 */}
      <div className="relative overflow-hidden rounded-2xl bg-stone-50 border border-stone-200 p-6 space-y-4">
        <h5 className="font-bold text-stone-900 text-xs md:text-sm">Lương tâm của người cầm quyền:</h5>
        
        <div className="relative overflow-hidden rounded-xl bg-white border border-stone-200 p-5 shadow-sm">
          <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-red-600 opacity-10 -rotate-12 pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <p className="font-playfair italic text-stone-850 text-xs leading-relaxed text-justify">
              &quot;Cán bộ các cơ quan, các đoàn thể, cấp cao thì quyền to, cấp thấp thì quyền nhỏ. Dù to hay nhỏ, nếu không có lương tâm là có dịp đục khoét, có dịp ăn của đút, có dịp 'dĩ công vi tư'.&quot;
            </p>
            <div className="flex items-center justify-end text-[9px] font-bold text-red-750 font-sans tracking-wide">
              <span>— Hồ Chí Minh (Toàn tập, t.6, tr.127)</span>
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
              💡 GHI NHỚ CỐT LÕI (Mục II.3.b)
            </h5>
          </div>
          
          <ul className="space-y-2 text-stone-750 text-xs md:text-sm pl-2">
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>3 loại tiêu cực chính:</strong> Đặc quyền đặc lợi; Tham ô lãng phí quan liêu (giặc nội xâm); Tư túng chia rẽ kiêu ngạo.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Tội lỗi tham ô:</strong> Ngang hàng với tội Việt gian mật thám, Bác ban lệnh hình phạt cao nhất là tử hình.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Bệnh gốc quan liêu:</strong> Quan liêu đẻ ra tham ô lãng phí, muốn diệt tham ô lãng phí phải diệt quan liêu trước.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Bệnh mẹ chủ nghĩa cá nhân:</strong> Là nguồn gốc nội tâm sâu xa sản sinh mọi loại bệnh tiêu cực.</span>
            </li>
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h5 className="font-extrabold text-xs md:text-sm text-stone-850 uppercase tracking-wider">
            📋 TỪ KHÓA ÔN THI
          </h5>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "Đặc quyền đặc lợi",
              "Giặc nội xâm",
              "Tham ô lãng phí quan liêu",
              "Việt gian mật thám",
              "Tử hình tội tham ô",
              "Bệnh gốc quan liêu",
              "Tư túng chia rẽ kiêu ngạo",
              "Bệnh mẹ chủ nghĩa cá nhân",
              "5 biện pháp phòng chống",
              "Thần pháp quyền không vùng cấm",
              "Lương tâm dĩ công vi tư"
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
