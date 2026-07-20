"use client";
import React from "react";
import { 
  Sparkles, 
  Quote, 
  CheckCircle2, 
  Heart, 
  Compass, 
  ShieldCheck, 
  Scale, 
  Users, 
  Globe,
  AlertTriangle,
  Award
} from "lucide-react";

export default function HcmPartyMorality() {
  const adminContents = [
    {
      num: "Một là",
      title: "Lương tâm, trí tuệ & danh dự",
      icon: Heart,
      accentBorder: "border-t-amber-650",
      accentText: "text-amber-800",
      accentBg: "bg-amber-500/10",
      desc: "Đảng văn minh phải là một Đảng tiêu biểu cho lương tâm, trí tuệ và danh dự cao quý của toàn thể dân tộc Việt Nam."
    },
    {
      num: "Hai là",
      title: "Phù hợp quy luật phát triển",
      icon: Compass,
      accentBorder: "border-t-orange-500",
      accentText: "text-orange-850",
      accentBg: "bg-orange-500/10",
      desc: "Đảng ra đời tất yếu, phù hợp quy luật phát triển văn minh, tiến bộ của dân tộc và nhân loại. Lấy lợi ích tối cao của dân tộc làm trọng, lợi ích giai cấp đặt dưới lợi ích dân tộc."
    },
    {
      num: "Ba là",
      title: "Luôn trong sạch, vững mạnh",
      icon: ShieldCheck,
      accentBorder: "border-t-red-500",
      accentText: "text-red-800",
      accentBg: "bg-red-500/10",
      desc: "Đảng phải luôn luôn giữ gìn sự trong sạch, vững mạnh để hoàn thành sứ mệnh lịch sử. Đối với Đảng cầm quyền, Hồ Chí Minh đặc biệt chú trọng việc phòng và chống các tiêu cực từ bên trong."
    },
    {
      num: "Bốn là",
      title: "Khuôn khổ Hiến pháp & Pháp luật",
      icon: Scale,
      accentBorder: "border-t-emerald-600",
      accentText: "text-emerald-800",
      accentBg: "bg-emerald-500/10",
      desc: "Đảng hoạt động nghiêm túc trong khuôn khổ Hiến pháp và pháp luật. Đảng là một bộ phận của dân tộc, không phải là một tổ chức đứng trên hay đứng ngoài dân tộc."
    },
    {
      num: "Năm là",
      title: "Đội ngũ chiến sĩ tiên phong",
      icon: Users,
      accentBorder: "border-t-blue-600",
      accentText: "text-blue-800",
      accentBg: "bg-blue-500/10",
      desc: "Mọi đảng viên, cán bộ từ lãnh đạo cao nhất đến đảng viên thường đều phải gương mẫu, tiên phong trong công tác chuyên môn và đời sống sinh hoạt hằng ngày."
    },
    {
      num: "Sáu là",
      title: "Quan hệ quốc tế trong sáng",
      icon: Globe,
      accentBorder: "border-t-purple-600",
      accentText: "text-purple-800",
      accentBg: "bg-purple-500/10",
      desc: "Đảng văn minh bảo vệ lợi ích dân tộc Việt Nam đồng thời tôn trọng độc lập, chủ quyền của các nước khác; vì hòa bình, hợp tác hữu nghị của nhân loại."
    }
  ];

  return (
    <div className="w-full py-2 select-text font-sans bg-transparent space-y-12">
      
      {/* SECTION 1: ĐẢNG LÀ ĐẠO ĐỨC */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Award className="w-4.5 h-4.5" />
          </span>
          <h4 className="text-sm md:text-base font-extrabold text-stone-850 uppercase tracking-wider">
            1. Lý luận của Hồ Chí Minh: Đảng là đạo đức
          </h4>
        </div>

        <p className="text-stone-700 text-sm md:text-base leading-relaxed text-justify">
          Tại Lễ kỷ niệm 30 năm Ngày thành lập Đảng (năm 1960), Hồ Chí Minh đã đưa ra định nghĩa kinh điển về bản chất của Đảng ta:
        </p>

        {/* Premium Quote Card 1 */}
        <div className="relative overflow-hidden rounded-2xl bg-amber-50/40 border-l-4 border-amber-650 p-6 md:p-8 shadow-sm">
          <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-amber-500 opacity-10 -rotate-12 pointer-events-none" />
          <div className="relative z-10 space-y-3">
            <p className="font-playfair italic text-stone-850 text-sm md:text-base lg:text-lg leading-relaxed text-center">
              &quot;Đảng ta là đạo đức, là văn minh.&quot;
            </p>
            <div className="flex items-center justify-end text-xs font-semibold text-stone-500 mt-2 font-sans tracking-wide">
              <span>— Lễ kỷ niệm 30 năm thành lập Đảng (1960)</span>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-sm md:text-base leading-relaxed text-justify">
          Hồ Chí Minh khẳng định <strong>đạo đức cách mạng là cái gốc, là nền tảng vững chắc</strong> của người cách mạng. Đạo đức cách mạng của Đảng Cộng sản Việt Nam được biểu hiện cụ thể ở ba nội dung cốt lõi:
        </p>

        {/* 3 Manifestations list */}
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 shadow-sm flex gap-4">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 font-extrabold text-xs flex items-center justify-center shrink-0">
              01
            </div>
            <div className="space-y-1">
              <h5 className="font-bold text-stone-900 text-sm">Mục đích hoạt động tối cao</h5>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed text-justify">
                Đảng lãnh đạo đấu tranh giải phóng dân tộc, giải phóng xã hội, giải phóng giai cấp và giải phóng con người theo học thuyết Mác - Lênin. Đưa lại nền độc lập cho dân tộc, cuộc sống tự do, ấm no, hạnh phúc thực sự cho nhân dân, đoàn kết quốc tế hữu nghị.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 shadow-sm flex gap-4">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 font-extrabold text-xs flex items-center justify-center shrink-0">
              02
            </div>
            <div className="space-y-1">
              <h5 className="font-bold text-stone-900 text-sm">Đường lối chính trị trung thành với nhân dân</h5>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed text-justify">
                Cương lĩnh, đường lối, chủ trương và mọi hoạt động thực tiễn của Đảng đều phải phục vụ lợi ích của quần chúng nhân dân. Đảng không có mục đích tự thân; mục đích duy nhất của Đảng là làm cho đất nước hùng cường, đi lên chủ nghĩa xã hội, mang lại quyền lợi thiết thực cho nhân dân.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 shadow-sm flex gap-4">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 font-extrabold text-xs flex items-center justify-center shrink-0">
              03
            </div>
            <div className="space-y-1">
              <h5 className="font-bold text-stone-900 text-sm">Đội ngũ đảng viên thấm nhuần đạo đức cách mạng</h5>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed text-justify">
                Mỗi đảng viên phải ra sức tu dưỡng, rèn luyện nhân cách đạo đức, suốt đời phấn đấu cho lý tưởng cách mạng. Đảng viên phải có lòng nhân ái, &quot;phải có tình đồng chí thương yêu lẫn nhau&quot;; trung với Đảng, hiếu với dân; rèn luyện bốn đức: Cần, Kiệm, Liêm, Chính và luôn chí công vô tư, giữ tinh thần quốc tế trong sáng.
              </p>
            </div>
          </div>
        </div>

        {/* Premium Quote Card 2 (Mascot characteristics of Party members) */}
        <div className="relative overflow-hidden rounded-2xl bg-amber-50/40 border-l-4 border-amber-650 p-6 md:p-8 shadow-sm">
          <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-amber-500 opacity-10 -rotate-12 pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <p className="font-playfair italic text-stone-850 text-sm md:text-base leading-relaxed text-justify">
              &quot;Đảng của giai cấp công nhân và nhân dân lao động, nghĩa là những người thợ thuyền, dân cày và lao động trí óc kiên quyết nhất, hăng hái nhất, trong sạch nhất, tận tâm tận lực phụng sự Tổ quốc và nhân dân. Những người mà: Giàu sang không thể quyến rũ, Nghèo khó không thể chuyển lay, Uy lực không thể khuất phục.&quot;
            </p>
            <p className="font-playfair italic text-stone-850 text-sm md:text-base leading-relaxed text-justify">
              &quot;Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư. Phải giữ gìn Đảng ta thật trong sạch, phải xứng đáng là người lãnh đạo, là người đầy tớ thật trung thành của nhân dân. Đảng sẵn sàng vui vẻ làm trâu ngựa, làm tôi tớ trung thành của nhân dân.&quot;
            </p>
            <div className="flex items-center justify-end text-xs font-semibold text-stone-500 mt-2 font-sans tracking-wide">
              <span>— Di chúc & các tác phẩm chính luận của Hồ Chí Minh</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: ĐẢNG LÀ VĂN MINH (6 PRINCIPLES GRID) */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Sparkles className="w-4.5 h-4.5" />
          </span>
          <h4 className="text-sm md:text-base font-extrabold text-stone-850 uppercase tracking-wider">
            2. Xây dựng Đảng trở thành một Đảng văn minh
          </h4>
        </div>

        <p className="text-stone-700 text-sm md:text-base leading-relaxed text-justify">
          Xây dựng Đảng có đạo đức cách mạng đồng thời là quá trình xây dựng Đảng trở thành một Đảng văn minh — Hồ Chí Minh định nghĩa đây là <strong>&quot;một Đảng cách mạng chân chính&quot;</strong>, được biểu hiện ở 6 nội dung cơ bản sau:
        </p>

        {/* Numbered Cards Grid 2x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {adminContents.map((content, idx) => {
            const IconComponent = content.icon;
            return (
              <div 
                key={idx}
                className={`bg-white border border-stone-200/80 rounded-2xl p-5 hover:shadow-md transition-all duration-350 flex flex-col justify-between border-t-4 ${content.accentBorder}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${content.accentBg} ${content.accentText} uppercase tracking-wider`}>
                      {content.num}
                    </span>
                    <IconComponent className={`w-5 h-5 ${content.accentText}`} />
                  </div>
                  <h6 className="text-sm font-bold text-stone-900 mb-2 font-playfair leading-tight">
                    {content.title}
                  </h6>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed text-justify">
                    {content.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: CẢNH BÁO NGUY CƠ SUY THOÁI */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-red-500/10 text-red-650">
            <AlertTriangle className="w-4.5 h-4.5" />
          </span>
          <h4 className="text-sm md:text-base font-extrabold text-stone-850 uppercase tracking-wider">
            3. Cảnh báo của Bác về nguy cơ suy thoái đạo đức
          </h4>
        </div>

        <p className="text-stone-700 text-sm md:text-base leading-relaxed text-justify">
          Hồ Chí Minh cảnh báo nghiêm khắc rằng, nếu Đảng không giữ vững đạo đức và sự văn minh, quyền lãnh đạo cách mạng của Đảng sẽ bị lung lay và tiêu biến:
        </p>

        {/* Warning Quote Card */}
        <div className="relative overflow-hidden rounded-2xl bg-red-500/5 border-l-4 border-red-600 p-6 md:p-8 shadow-sm">
          <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-red-600 opacity-10 -rotate-12 pointer-events-none" />
          <div className="relative z-10 space-y-3.5">
            <p className="font-playfair italic text-stone-850 text-sm md:text-base lg:text-lg leading-relaxed text-justify">
              &quot;Một dân tộc, một đảng và mỗi con người, ngày hôm qua là vĩ đại, có sức hấp dẫn lớn, không nhất định hôm nay và ngày mai vẫn được mọi người yêu mến và ca ngợi, nếu lòng dạ không trong sáng nữa, nếu sa vào chủ nghĩa cá nhân.&quot;
            </p>
            <div className="flex items-center justify-end text-xs font-semibold text-stone-500 mt-2 font-sans tracking-wide">
              <span>— Bài nói chuyện của Hồ Chí Minh</span>
            </div>
          </div>
        </div>

        <div className="bg-stone-50/40 border border-stone-250/70 p-5 rounded-2xl text-stone-700 text-xs md:text-sm leading-relaxed text-justify space-y-3">
          <p>
            Đảng không tự nhiên giữ vững được lòng yêu mến của nhân dân nếu đội ngũ cán bộ suy thoái về tư tưởng chính trị, đạo đức và lối sống. Sự suy thoái đó sẽ biến Đảng từ một lực lượng tiên phong thành một tổ chức biến chất, xa rời lợi ích tối cao của đất nước, khiến mọi thành quả của sự nghiệp cách mạng bền bỉ xây dựng bấy lâu đều có nguy cơ bị tiêu tan.
          </p>
          <p>
            Bởi vậy, việc xây dựng Đảng là đạo đức, văn minh không chỉ là lý tưởng, mà là <strong>điều kiện sống còn</strong> để bảo vệ chế độ và lợi ích của quốc gia - dân tộc trong mọi thời kỳ, đặc biệt là trong giai đoạn phát triển kinh tế thị trường và hội nhập sâu rộng. Luận điểm này là sự phát triển sáng tạo vượt bậc của Người đối với lý luận xây dựng Đảng của V.I. Lênin.
          </p>
        </div>
      </div>

      {/* SECTION 4: HỘP GHI NHỚ VÀ TỪ KHÓA ÔN THI */}
      <div className="space-y-6 pt-2">
        {/* GHI NHỚ BOX */}
        <div className="p-6 rounded-2xl bg-amber-500/5 border-l-4 border-amber-500 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-amber-800">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <h5 className="font-extrabold text-sm md:text-base uppercase tracking-wider">
              GHI NHỚ QUAN TRỌNG
            </h5>
          </div>
          <ul className="space-y-3.5 text-stone-750 text-xs md:text-sm">
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Câu nói cốt lõi (1960):</strong> &quot;Đảng ta là đạo đức, là văn minh&quot; — khẳng định bản chất nhân văn và cách mạng của Đảng Cộng sản Việt Nam.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>3 biểu hiện của Đảng là đạo đức:</strong> Bao gồm (1) Mục đích hoạt động giải phóng tối cao; (2) Đường lối, cương lĩnh trung thành với dân tộc; (3) Đội ngũ đảng viên gương mẫu, tu dưỡng đạo đức.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>6 nội dung của Đảng văn minh:</strong> Lương tâm & danh dự; phù hợp quy luật tiến bộ; luôn trong sạch vững mạnh; hoạt động trong khuôn khổ Hiến pháp & pháp luật; cán bộ đảng viên gương mẫu; quan hệ quốc tế trong sáng.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Ý nghĩa lý luận sâu sắc:</strong> Luận điểm này là bước tiến sáng tạo lý luận lớn của Hồ Chí Minh bổ sung cho học thuyết của V.I. Lênin về đảng kiểu mới của giai cấp vô sản.</span>
            </li>
          </ul>
        </div>

        {/* TỪ KHÓA ÔN THI BOX */}
        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h5 className="font-extrabold text-xs md:text-sm text-stone-850 uppercase tracking-wider">
            📋 TỪ KHÓA ÔN THI
          </h5>
          <div className="flex flex-wrap gap-2 pt-1.5">
            {[
              "Đảng ta là đạo đức, là văn minh (1960)",
              "Đạo đức cách mạng là gốc",
              "Cần, kiệm, liêm, chính",
              "Chí công vô tư",
              "Đảng cách mạng chân chính",
              "6 nội dung Đảng văn minh",
              "Phát triển sáng tạo lý luận Lênin",
              "Chủ nghĩa cá nhân"
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
