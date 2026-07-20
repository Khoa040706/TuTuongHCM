"use client";
import React, { useState, useRef } from "react";
import { 
  Sparkles, 
  Quote, 
  BookOpen, 
  Compass, 
  CheckCircle2, 
  TrendingUp, 
  Anchor, 
  HelpCircle,
  ShieldAlert,
  ArrowRight
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmPartyFoundingNecessity() {
  const [activeFactor, setActiveFactor] = useState(null);
  const containerRef = useRef(null);

  const factors = [
    {
      id: "marxism",
      title: "Chủ nghĩa Mác - Lênin",
      bgClass: "bg-red-50 hover:bg-red-100/70 border-red-200 text-red-800",
      activeBgClass: "bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/10",
      dotColor: "bg-red-500",
      iconColor: "text-red-600",
      activeIconColor: "text-red-200",
      desc: "Là nền tảng tư tưởng lý luận khoa học và cách mạng của Đảng. Cung cấp thế giới quan và phương pháp luận đúng đắn để giải phóng giai cấp, giải phóng dân tộc.",
      detailTitle: "Chủ nghĩa Mác - Lênin — Nền tảng tư tưởng lý luận",
      bullets: [
        "Sự ra đời của Đảng Cộng sản theo học thuyết Mác - Lênin là sản phẩm kết hợp giữa Chủ nghĩa xã hội khoa học và Phong trào công nhân.",
        "Hồ Chí Minh đã vận dụng và phát triển sáng tạo lý luận kiểu mới này của V.I. Lênin vào điều kiện cụ thể của nước ta.",
        "Chỉ rõ Đảng muốn vững phải có chủ nghĩa làm cốt, trong Đảng ai cũng phải hiểu chủ nghĩa ấy, ai cũng phải theo chủ nghĩa ấy."
      ]
    },
    {
      id: "worker-mvmt",
      title: "Phong trào công nhân",
      bgClass: "bg-blue-50 hover:bg-blue-100/70 border-blue-200 text-blue-800",
      activeBgClass: "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/10",
      dotColor: "bg-blue-500",
      iconColor: "text-blue-600",
      activeIconColor: "text-blue-200",
      desc: "Lực lượng nòng cốt, cơ sở giai cấp quyết định bản chất cách mạng của Đảng Cộng sản Việt Nam.",
      detailTitle: "Phong trào công nhân — Cơ sở giai cấp tiên phong",
      bullets: [
        "Phong trào đấu tranh của công nhân nổ ra mạnh mẽ, phát triển từ tự phát lên tự giác rõ rệt từ năm 1925 trở đi.",
        "Giai cấp công nhân Việt Nam tuy số lượng nhỏ nhưng có tính kỷ luật cao, tinh thần triệt để cách mạng và liên kết tự nhiên với phong trào yêu nước.",
        "Là lực lượng lãnh đạo thông qua đội tiên phong là Đảng Cộng sản."
      ]
    },
    {
      id: "patriotic-mvmt",
      title: "Phong trào yêu nước",
      bgClass: "bg-amber-50 hover:bg-amber-100/70 border-amber-200 text-amber-800",
      activeBgClass: "bg-amber-600 border-amber-600 text-white shadow-lg shadow-amber-600/10",
      dotColor: "bg-amber-500",
      iconColor: "text-amber-600",
      activeIconColor: "text-yellow-300",
      desc: "Luận điểm sáng tạo riêng biệt của Hồ Chí Minh, phản ánh quy luật ra đời của Đảng tại một xã hội thuộc địa - phong kiến như Việt Nam.",
      detailTitle: "Phong trào yêu nước — Giá trị đặc sắc & sáng tạo Hồ Chí Minh",
      bullets: [
        "Ở một nước thuộc địa như Việt Nam, mọi giai cấp (trừ tay sai đế quốc) đều có mâu thuẫn dân tộc cơ bản và lòng yêu nước nồng nàn.",
        "Phong trào yêu nước có trước phong trào công nhân hàng nghìn năm, là chất xúc tác gắn kết chủ nghĩa Mác - Lênin với đời sống nhân dân.",
        "Dưới ảnh hưởng của chủ nghĩa Mác - Lênin, phong trào yêu nước chuyển dần sang xu hướng cộng sản, kết hợp nhuần nhuyễn với phong trào công nhân."
      ]
    }
  ];

  useGSAP(() => {
    if (activeFactor !== null) {
      {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".factor-detail-node") : document.querySelectorAll(".factor-detail-node");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets, 
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
      }
    }
    }
  }, { dependencies: [activeFactor], scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-2 select-text font-sans bg-transparent space-y-12">
      
      {/* SECTION 1: VAI TRÒ LÃNH ĐẠO CỦA ĐẢNG (NGƯỜI CẦM LÁI) */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Anchor className="w-4.5 h-4.5" />
          </span>
          <h4 className="text-sm md:text-base font-extrabold text-stone-850 uppercase tracking-wider">
            Vai trò lãnh đạo của Đảng và Tác phẩm &quot;Đường cách mệnh&quot; (1927)
          </h4>
        </div>

        <p className="text-stone-700 text-sm md:text-base leading-relaxed text-justify">
          Trong tác phẩm lý luận kinh điển đặt nền móng đầu tiên cho Đảng — <strong>Đường cách mệnh (năm 1927)</strong>, Hồ Chí Minh đã khẳng định vai trò lãnh đạo tiên phong và tính chất tiên quyết của Đảng đối với thắng lợi của sự nghiệp giải phóng dân tộc:
        </p>

        {/* Premium Quote Card */}
        <div className="relative overflow-hidden rounded-2xl bg-amber-50/40 border-l-4 border-amber-600 p-6 md:p-8 shadow-sm">
          <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-amber-500 opacity-10 -rotate-12 pointer-events-none" />
          <div className="relative z-10 space-y-3">
            <p className="font-playfair italic text-stone-800 text-sm md:text-base lg:text-lg leading-relaxed text-justify">
              &quot;Cách mệnh trước hết phải có cái gì? Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi. Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy.&quot;
            </p>
            <div className="flex items-center justify-end text-xs font-semibold text-stone-500 mt-2 font-sans tracking-wide">
              <span>— Tác phẩm &quot;Đường cách mệnh&quot; (1927)</span>
            </div>
          </div>
        </div>

        {/* Key Point Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          <div className="bg-stone-50/50 border border-stone-200/80 rounded-2xl p-5 hover:shadow-sm transition-all duration-300">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">Hình tượng người cầm lái</span>
            </div>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed text-justify">
              Hình ảnh Đảng như <strong>&quot;người cầm lái&quot;</strong> dẫn dắt con thuyền cách mạng vượt sóng gió là quan điểm nhất quán của Người trong suốt hai giai đoạn (cách mạng dân tộc dân chủ nhân dân và cách mạng xã hội chủ nghĩa).
            </p>
          </div>

          <div className="bg-stone-50/50 border border-stone-200/80 rounded-2xl p-5 hover:shadow-sm transition-all duration-300">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">Kiểu đảng vô sản mới</span>
            </div>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed text-justify">
              Đảng Cộng sản Việt Nam do chính Hồ Chí Minh sáng lập và rèn luyện. Đảng tồn tại và phát triển bền vững theo hệ thống quan điểm của V.I. Lênin về đảng kiểu mới của giai cấp vô sản.
            </p>
          </div>
        </div>

        {/* Conclusion Callout Box */}
        <div className="p-5 rounded-2xl bg-amber-500/5 border-l-4 border-amber-600/70 shadow-[0_4px_20px_rgba(217,119,6,0.02)]">
          <div className="flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-stone-800 text-sm md:text-base leading-relaxed font-bold text-justify">
              Sự lãnh đạo của Đảng Cộng sản Việt Nam là một tất yếu khách quan, xuất phát từ yêu cầu phát triển tự nhiên của dân tộc Việt Nam nhằm tìm kiếm một lực lượng tiên phong dẫn lối đi đến độc lập tự do.
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: QUY LUẬT RA ĐỜI CỦA ĐẢNG (INTERACTIVE CONVERGENCE DIAGRAM) */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Compass className="w-4.5 h-4.5" />
          </span>
          <h4 className="text-sm md:text-base font-extrabold text-stone-850 uppercase tracking-wider">
            Sơ đồ Hội tụ: Quy luật ra đời của Đảng Cộng sản Việt Nam
          </h4>
        </div>

        <p className="text-stone-700 text-sm md:text-base leading-relaxed text-justify">
          Đối với Việt Nam, Hồ Chí Minh đã chỉ ra quy luật thành lập Đảng mang tính đặc sắc riêng: <strong>Sự kết hợp giữa lý luận Mác - Lênin với phong trào công nhân và phong trào yêu nước</strong>. Hãy click vào từng nhánh nguồn gốc bên dưới để xem phân tích chi tiết:
        </p>

        {/* Interactive Convergence Diagram Container */}
        <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
          <div className="absolute top-2 right-3 text-[10px] font-black text-stone-300 tracking-wider uppercase select-none">
            Interactive Convergence Model
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl relative z-10 mb-8 mt-2">
            {factors.map((factor) => {
              const isActive = activeFactor === factor.id;
              return (
                <button
                  key={factor.id}
                  onClick={() => setActiveFactor(isActive ? null : factor.id)}
                  className={`flex flex-col items-center p-5 rounded-2xl border text-center transition-all duration-300 cursor-pointer outline-none ${
                    isActive ? factor.activeBgClass : factor.bgClass
                  }`}
                >
                  <span className={`w-3 h-3 rounded-full ${factor.dotColor} mb-3`} />
                  <h5 className={`font-bold text-xs md:text-sm tracking-tight mb-2 ${isActive ? "text-white" : "text-stone-900"}`}>
                    {factor.title}
                  </h5>
                  <p className={`text-[11px] md:text-xs leading-relaxed ${isActive ? "text-stone-100" : "text-stone-600"}`}>
                    {factor.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Central Target Node (Founding Result) */}
          <div className="w-full flex flex-col items-center relative z-10 py-4 border-t border-stone-200/80 pt-6">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-700 text-[10.5px] font-extrabold uppercase tracking-widest mb-3 animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Đảng Cộng sản Việt Nam ra đời (1930)</span>
            </div>
            
            <div className="max-w-2xl text-center">
              <p className="text-xs md:text-sm text-stone-500 leading-relaxed italic">
                &ldquo;Đảng ra đời là do nhu cầu tất yếu của xã hội Việt Nam; được toàn dân tộc tin tưởng trao cho sứ mệnh lịch sử cách mạng.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Selected Factor Detail Display */}
        {activeFactor !== null && (
          <div className="factor-detail-node p-5 md:p-6 rounded-2xl bg-white border border-stone-200/80 shadow-md space-y-4">
            <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
              <CheckCircle2 className={`w-5 h-5 ${factors.find(f => f.id === activeFactor).iconColor}`} />
              <h5 className="text-sm md:text-base font-black text-stone-900 font-playfair">
                {factors.find(f => f.id === activeFactor).detailTitle}
              </h5>
            </div>
            <ul className="list-disc list-inside space-y-2.5 pl-1.5">
              {factors.find(f => f.id === activeFactor).bullets.map((bullet, idx) => (
                <li 
                  key={idx} 
                  className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify marker:text-amber-600"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Sub-context of Patriotic Movement and Transition */}
        <div className="bg-stone-50/30 border border-stone-200/60 rounded-2xl p-5 space-y-3.5 text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
          <p>
            Quy luật sáng tạo này hoàn toàn phù hợp với xã hội Việt Nam lúc bấy giờ. Tại một nước thuộc địa, mâu thuẫn lớn nhất là <strong>mâu thuẫn dân tộc</strong> giữa toàn thể nhân dân Việt Nam với các thế lực đế quốc xâm lược và tay sai. Do đó, phong trào yêu nước luôn diễn ra mãnh liệt và bền bỉ qua các giai đoạn.
          </p>
          <p>
            Lúc đầu, nhiều chí sĩ yêu nước đi theo xu hướng dân chủ tư sản. Tuy nhiên, qua thực tế thử thách lịch sử và dưới sự ảnh hưởng sâu rộng của chủ nghĩa Mác - Lênin, phong trào yêu nước đã dần chuyển dịch hướng đi sang quỹ đạo cộng sản, rõ nét nhất từ <strong>năm 1925 trở đi</strong> thông qua hoạt động huấn luyện của <strong>Hội Việt Nam Cách mệnh Thanh niên</strong>.
          </p>
        </div>
      </div>

      {/* SECTION 3: HỘP GHI NHỚ VÀ TỪ KHÓA ÔN THI */}
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
              <span><strong>Đảng như &quot;người cầm lái&quot;:</strong> Đây là luận điểm nhất quán và xuyên suốt cả hai giai đoạn cách mạng dân tộc dân chủ nhân dân và cách mạng xã hội chủ nghĩa.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Điểm sáng tạo của Hồ Chí Minh:</strong> Khẳng định quy luật thành lập Đảng tại Việt Nam là sự kết hợp của 3 yếu tố: <em>Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước</em> (Luận điểm gốc của Lênin chỉ gồm 2 yếu tố đầu).</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Mốc thời gian cốt lõi:</strong> Nguyễn Ái Quốc bắt đầu chuyển hướng phong trào yêu nước từ năm 1925, xuất bản tác phẩm lý luận &quot;Đường cách mệnh&quot; năm 1927, và thành lập Đảng Cộng sản Việt Nam vào đầu năm 1930.</span>
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
              "Đường cách mệnh (1927)",
              "Đảng như người cầm lái",
              "Đảng kiểu mới của giai cấp vô sản",
              "Chủ nghĩa Mác-Lênin + Phong trào công nhân + Phong trào yêu nước",
              "Mâu thuẫn dân tộc",
              "Hội Việt Nam Cách mệnh Thanh niên",
              "Đảng ra đời đầu 1930"
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
