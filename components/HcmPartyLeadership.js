"use client";
import React, { useState, useRef } from "react";
import { 
  Sparkles, 
  Heart,
  Quote, 
  Users,
  Shield,
  Layers,
  BookOpen,
  Anchor,
  Compass,
  ArrowRight,
  TrendingUp,
  CheckCircle,
  FileText
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmPartyLeadership() {
  const [activeCircle, setActiveCircle] = useState(2); // default to outer circle (Dân tộc Việt Nam)
  const containerRef = useRef(null);

  const circles = [
    {
      id: 0,
      name: "Giai cấp công nhân",
      badge: "Đội tiên phong chính thống",
      desc: "Theo chủ nghĩa Mác - Lênin, Đảng Cộng sản là nhân tố chủ quan để giai cấp công nhân hoàn thành sứ mệnh lịch sử của mình. Giai cấp công nhân phải tổ chức ra chính đảng để thuyết phục, giác ngộ và tập hợp quần chúng ra đấu tranh."
    },
    {
      id: 1,
      name: "Nhân dân lao động",
      badge: "Đại diện lực lượng nòng cốt",
      desc: "Xuất phát từ hoàn cảnh Việt Nam là nước thuộc địa - phong kiến với đại đa số nhân dân là nông dân và người lao động nghèo, Hồ Chí Minh chỉ rõ Đảng Cộng sản Việt Nam đồng thời là đội tiên phong của cả nhân dân lao động."
    },
    {
      id: 2,
      name: "Dân tộc Việt Nam",
      badge: "Đảng của cả dân tộc",
      desc: "Trong Báo cáo chính trị tại Đại hội II của Đảng (1951), Người viết: &quot;Chính vì Đảng Lao động Việt Nam là Đảng của giai cấp công nhân và nhân dân lao động, cho nên nó phải là Đảng của dân tộc Việt Nam&quot;. Đây là luận điểm bổ sung, phát triển sáng tạo lý luận Mác - Lênin."
    }
  ];

  const qualities = [
    { title: "Kiên quyết nhất", color: "bg-amber-50 text-amber-700 border-amber-200" },
    { title: "Hăng hái nhất", color: "bg-orange-50 text-orange-700 border-orange-200" },
    { title: "Trong sạch nhất", color: "bg-yellow-50 text-yellow-700 border-yellow-250" },
    { title: "Tận lực phụng sự Tổ quốc", color: "bg-amber-100 text-amber-800 border-amber-300" }
  ];

  useGSAP(() => {
    // GSAP concentric circle details animation
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".circle-detail-panel") : document.querySelectorAll(".circle-detail-panel");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets, 
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
      }
    }
  }, { dependencies: [activeCircle], scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-2 select-text font-sans bg-transparent space-y-10">
      
      {/* SECTION 1: SPOTLIGHT "ĐƯỜNG CÁCH MỆNH 1927" */}
      <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e1d1a] to-[#141312] border border-[#2a2926] p-6 md:p-8 text-white shadow-xl">
        
        {/* Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,119,6,0.12),transparent_60%)] pointer-events-none z-0" />
        
        {/* Quote watermark */}
        <Quote className="absolute top-4 left-4 w-28 h-28 text-amber-500 opacity-10 -rotate-12 pointer-events-none z-0" />

        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
              Đường cách mệnh (1927)
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-xs text-stone-400 font-medium">Điều kiện tiên quyết của cách mạng</span>
          </div>

          <p className="text-stone-300 text-xs md:text-sm leading-relaxed max-w-3xl">
            Trong tác phẩm lý luận kinh điển đặt nền móng cho Đảng ta — <strong>Đường cách mệnh (1927)</strong>, Nguyễn Ái Quốc đã đặt câu hỏi cốt lõi và khẳng định vai trò tất yếu lãnh đạo của Đảng đối với cách mạng giải phóng dân tộc:
          </p>

          {/* Core Spotlight Quote */}
          <div className="border-l-3 border-amber-500 pl-4 md:pl-6 my-2">
            <p className="font-serif italic text-amber-100 text-sm md:text-lg leading-relaxed tracking-wide">
              &quot;Cách mệnh trước hết phải có cái gì? Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với các dân tộc bị áp bức và vô sản giai cấp mọi nơi. Đảng có vững cách mệnh mới thành công.&quot;
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 text-stone-450 border-t border-[#2a2926] text-xs">
            <span className="italic font-medium">Nguyễn Ái Quốc — Tác phẩm Đường cách mệnh</span>
            <span className="text-amber-500 font-bold uppercase tracking-widest text-[9.5px]">Đảng cách mệnh làm đầu</span>
          </div>
        </div>
      </div>

      {/* SECTION 2: VAI TRÒ CỦA ĐẢNG THEO CHỦ NGHĨA MÁC-LÊNIN */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Users className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            Vai trò của Đảng đối với quần chúng nhân dân
          </h4>
        </div>

        <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
          Tiếp thu lý luận khoa học từ chủ nghĩa Mác - Lênin, Hồ Chí Minh chỉ rõ Đảng Cộng sản là nhân tố chủ quan quyết định thắng lợi, có nhiệm vụ xây dựng phong trào cách mạng qua các bước vững chắc:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-stone-50 border border-stone-200/80 p-4.5 rounded-2xl space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0">
              01
            </div>
            <h5 className="font-bold text-stone-850 text-sm">Thuyết phục & Giác ngộ</h5>
            <p className="text-stone-600 text-xs leading-relaxed">
              Truyền bá chủ nghĩa Mác - Lênin và tinh thần yêu nước, giác ngộ giai cấp và thức tỉnh lòng tự tôn dân tộc của nhân dân lao động.
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200/80 p-4.5 rounded-2xl space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0">
              02
            </div>
            <h5 className="font-bold text-stone-850 text-sm">Tập hợp lực lượng</h5>
            <p className="text-stone-600 text-xs leading-relaxed">
              Tổ chức quần chúng nhân dân vào các hội nhóm cứu quốc (Công hội, Nông hội, Mặt trận...) nhằm tạo sức mạnh đoàn kết toàn dân tộc.
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200/80 p-4.5 rounded-2xl space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0">
              03
            </div>
            <h5 className="font-bold text-stone-850 text-sm">Huấn luyện & Đấu tranh</h5>
            <p className="text-stone-600 text-xs leading-relaxed">
              Đào tạo cán bộ cách mạng, tổ chức diễn tập phong trào quần chúng và lãnh đạo toàn dân đứng lên đấu tranh giành chính quyền khi thời cơ chín muồi.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: BẢN CHẤT SÁNG TẠO CỦA ĐẢNG (INTERACTIVE CONCENTRIC CIRCLES) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Layers className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            Bản chất ba lớp sáng tạo của Đảng Cộng sản Việt Nam
          </h4>
        </div>

        <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
          Khác với mô hình chính đảng vô sản phương Tây vốn chỉ nhấn mạnh tính giai cấp công nhân thuần túy, Hồ Chí Minh đã phát triển sáng tạo lý luận phù hợp với hoàn cảnh thuộc địa Việt Nam qua ba tầng vai trò lồng ghép:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Concentric Circles Visualizer (Left 5 cols) */}
          <div className="lg:col-span-5 flex justify-center py-6">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full flex items-center justify-center border border-dashed border-stone-200">
              
              {/* Outer circle: Dân tộc Việt Nam */}
              <div 
                onClick={() => setActiveCircle(2)}
                className={`absolute w-64 h-64 md:w-72 md:h-72 rounded-full border flex items-start justify-center pt-3 cursor-pointer transition-all duration-300 ${
                  activeCircle === 2 
                    ? "bg-amber-500/10 border-amber-600 shadow-[0_0_15px_rgba(217,119,6,0.15)] scale-[1.02]" 
                    : "bg-stone-50/40 border-stone-200 hover:border-amber-400/50"
                }`}
              >
                <span className={`text-[10px] md:text-xs font-black uppercase tracking-wider ${
                  activeCircle === 2 ? "text-amber-800" : "text-stone-400"
                }`}>
                  3. Cả dân tộc Việt Nam
                </span>
              </div>

              {/* Middle circle: Nhân dân lao động */}
              <div 
                onClick={() => setActiveCircle(1)}
                className={`absolute w-44 h-44 md:w-50 md:h-50 rounded-full border flex items-start justify-center pt-3 cursor-pointer transition-all duration-300 ${
                  activeCircle === 1 
                    ? "bg-amber-600/15 border-amber-600 shadow-[0_0_15px_rgba(217,119,6,0.2)] scale-[1.02]" 
                    : "bg-white border-stone-200 hover:border-amber-400/50"
                }`}
              >
                <span className={`text-[9.5px] md:text-xs font-black uppercase tracking-wider ${
                  activeCircle === 1 ? "text-amber-800" : "text-stone-400"
                }`}>
                  2. Nhân dân lao động
                </span>
              </div>

              {/* Inner circle: Giai cấp công nhân */}
              <div 
                onClick={() => setActiveCircle(0)}
                className={`absolute w-24 h-24 md:w-28 md:h-28 rounded-full border flex items-center justify-center p-3 text-center cursor-pointer transition-all duration-300 ${
                  activeCircle === 0 
                    ? "bg-amber-600 border-amber-700 text-white shadow-md shadow-amber-700/30 scale-[1.05]" 
                    : "bg-amber-500/10 border-amber-500/25 text-amber-700 hover:scale-[1.02]"
                }`}
              >
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-wide leading-tight">
                  1. Giai cấp<br/>công nhân
                </span>
              </div>

            </div>
          </div>

          {/* Circle details content panel (Right 7 cols) */}
          <div className="lg:col-span-7 circle-detail-panel">
            <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-5 md:p-6 space-y-4 min-h-[220px] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-amber-700 bg-amber-500/10 px-2 py-0.5 rounded">
                    Lớp {activeCircle + 1}
                  </span>
                  <h5 className="font-extrabold text-stone-850 text-sm md:text-base leading-none">
                    {circles[activeCircle].name}
                  </h5>
                </div>
                
                <span className="text-[10px] font-extrabold text-stone-450 uppercase tracking-widest block">
                  {circles[activeCircle].badge}
                </span>

                <p 
                  className="text-stone-700 text-xs md:text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: circles[activeCircle].desc }}
                />
              </div>

              <div className="border-t border-stone-200/60 pt-4 flex flex-wrap gap-2">
                {qualities.map((q, idx) => (
                  <span 
                    key={idx}
                    className={`px-2.5 py-1 rounded-lg border text-[10px] font-extrabold uppercase tracking-wide shadow-xs ${q.color}`}
                  >
                    {q.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Luận điểm phát triển lý luận Mác - Lênin */}
        <div className="bg-amber-500/5 p-4 rounded-xl border border-amber-500/10 flex items-start gap-2.5">
          <span className="text-amber-600 font-bold mt-0.5">➔</span>
          <p className="text-stone-850 text-xs md:text-sm font-semibold italic">
            Hồ Chí Minh chỉ rõ, trong hoàn cảnh thuộc địa, Đảng Cộng sản Việt Nam vừa là đội tiên phong của giai cấp công nhân, vừa là của nhân dân lao động, kiên quyết nhất, hăng hái nhất, trong sạch nhất và phụng sự Tổ quốc. Đây là luận điểm vô cùng quan trọng có ý nghĩa bổ sung, phát triển sáng tạo lý luận Mác - Lênin về xây dựng đảng kiểu mới.
          </p>
        </div>
      </div>

    </div>
  );
}
