"use client";
import React, { useState, useRef } from "react";
import { 
  Sparkles, 
  Quote, 
  Users,
  Shield,
  Layers,
  Heart,
  BookOpen,
  ArrowRight,
  TrendingUp,
  FileText
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmNationalUnity() {
  const [activeTier, setActiveTier] = useState(0); // 0: Đáy, 1: Giữa, 2: Đỉnh
  const containerRef = useRef(null);

  const pyramidTiers = [
    {
      id: 0,
      name: "Tầng 1: Công nhân & Dân cày nghèo",
      role: "Gốc cách mệnh — Lực lượng chủ lực",
      color: "bg-amber-600 border-amber-700 text-white shadow-amber-600/10",
      glowColor: "shadow-amber-500/20 border-amber-600 bg-amber-50/10",
      desc: (
        <div className="space-y-3">
          <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
            Trong <strong>Sách lược vắn tắt</strong>, Hồ Chí Minh xác định: Đảng phải thu phục đại bộ phận giai cấp công nhân; tập hợp đại bộ phận dân cày, dựa vào dân cày nghèo làm thổ địa cách mạng. Người nhấn mạnh: <strong>&quot;công nông là người chủ cách mệnh... là gốc cách mệnh&quot;</strong>.
          </p>
          <div className="bg-amber-500/5 p-4 rounded-xl border border-amber-500/15">
            <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest block mb-1">Trích Đường cách mệnh (1927):</span>
            <p className="font-serif italic text-stone-850 text-xs md:text-sm leading-relaxed">
              &quot;Công nông là hai giai cấp đông đảo và cách mạng nhất, bị bóc lột nặng nề nhất, vì thế lòng cách mệnh càng bền, chí cách mệnh càng quyết... công nông là tay không chân rồi, nếu thua thì chỉ mất một cái kiếp khổ, nếu được thì được cả thế giới, cho nên họ gan góc.&quot;
            </p>
          </div>
        </div>
      )
    },
    {
      id: 1,
      name: "Tầng 2: Tiểu tư sản, Trí thức, Trung nông",
      role: "Đồng minh cách mạng — Lực lượng liên kết",
      color: "bg-amber-500 border-amber-550 text-white shadow-amber-500/10",
      glowColor: "shadow-amber-400/20 border-amber-500 bg-amber-50/5",
      desc: (
        <div className="space-y-3">
          <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
            Trong <strong>Sách lược vắn tắt</strong>, Hồ Chí Minh chỉ rõ nhiệm vụ của Đảng: phải liên lạc mật thiết với tiểu tư sản, trí thức, trung nông để lôi kéo họ về phía vô sản giai cấp, làm tăng sức mạnh cách mạng dân tộc.
          </p>
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-250 flex items-start gap-2.5">
            <span className="text-amber-600 font-bold mt-0.5">➔</span>
            <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
              Người lý giải: <strong>&quot;dân tộc cách mệnh thì chưa phân giai cấp, nghĩa là sĩ, nông, công, thương đều nhất trí chống lại cường quyền&quot;</strong>. Vì vậy phải đoàn kết tất cả các giai tầng tiến bộ này để cô lập kẻ thù tối đa.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      name: "Tầng 3: Phú nông, Địa chủ vừa/nhỏ, Tư sản dân tộc",
      role: "Lực lượng trung lập hóa hoặc tranh thủ",
      color: "bg-amber-400 border-amber-450 text-stone-900 shadow-amber-400/10",
      glowColor: "shadow-amber-300/20 border-amber-400 bg-amber-50/5",
      desc: (
        <div className="space-y-3">
          <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
            Đối với phú nông, trung, tiểu địa chủ và tư sản Việt Nam chưa rõ mặt phản cách mạng, <strong>Sách lược vắn tắt</strong> chỉ dẫn rõ nét phương pháp phân hóa kẻ thù:
          </p>
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-250 flex items-start gap-2.5">
            <span className="text-amber-600 font-bold mt-0.5">➔</span>
            <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
              Phải tranh thủ, lôi kéo hoặc ít nhất cũng làm cho họ <strong>trung lập</strong>, không bị các thế lực phản động lôi kéo chống lại cách mạng. Đây là sách lược vô cùng mềm dẻo, thực tiễn để tập trung mọi mũi nhọn vào thực dân cướp nước.
            </p>
          </div>
        </div>
      )
    }
  ];

  useGSAP(() => {
    // GSAP pyramid detail animation
    gsap.fromTo(".pyramid-detail-panel", 
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
  }, { dependencies: [activeTier], scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-2 select-text font-sans bg-white space-y-10">
      
      {/* SECTION 1: TRIẾT LÝ DÂN LÀ GỐC (PHILOSOPHY SHOWCASE) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Heart className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            Triết lý lấy Dân làm gốc và Sức mạnh Đại đoàn kết
          </h4>
        </div>

        <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
          Kế thừa chân lý lịch sử của chủ nghĩa Mác - Lênin về vai trò sáng tạo của quần chúng, Hồ Chí Minh đã phát triển triết lý &quot;Dân là gốc&quot; thành tôn chỉ hành động cách mạng tối cao:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Marxist-Leninist classic root */}
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-black text-stone-450 uppercase tracking-widest block">Lý luận Mác - Lênin cổ điển</span>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                Cách mạng là sự nghiệp của <strong>quần chúng nhân dân</strong>; quần chúng nhân dân chính là chủ thể chân chính sáng tạo ra lịch sử. Lênin khẳng định:
              </p>
              <p className="font-serif italic text-stone-850 text-xs md:text-sm pl-3 border-l-2 border-stone-300 leading-relaxed">
                &quot;Không có sự đồng tình ủng hộ của đại đa số nhân dân lao động đối với đội tiên phong của mình, tức là đối với giai cấp vô sản, thì cách mạng vô sản không thể thực hiện được.&quot;
              </p>
            </div>
          </div>

          {/* Uncle Ho's inheritance & development */}
          <div className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/20 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest block">Tư tưởng Hồ Chí Minh</span>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                Kế thừa tư tưởng đó, Người đúc rút ra bài học xương máu vĩ đại: <strong>có dân là có tất cả</strong>, được lòng dân thì thắng, mất lòng dân thì bại.
              </p>
              <div className="font-serif italic text-stone-850 text-xs md:text-sm pl-3 border-l-2 border-amber-550/40 space-y-2 leading-relaxed">
                <p>&quot;Trên đời này không gì quý bằng dân, được lòng dân thì được tất cả, mất lòng dân thì mất tất cả.&quot;</p>
                <p>&quot;Cách mệnh là việc chung cả dân chúng chứ không phải việc một hai người.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: PYRAMID OF REVOLUTIONARY FORCES */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Layers className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            Sơ đồ phân tầng lực lượng (Sách lược vắn tắt)
          </h4>
        </div>

        <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
          Trong <strong>Sách lược vắn tắt</strong>, Hồ Chí Minh đã phác thảo mô hình phân tầng lực lượng cách mạng toàn dân tộc vô cùng sắc bén và thực tiễn, đặt liên minh công - nông làm nền tảng cốt lõi:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Force Pyramid SVG/HTML (Left 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center gap-4">
            <div className="w-full max-w-[340px] flex flex-col gap-2.5 my-2">
              {pyramidTiers.slice().reverse().map((tier) => {
                const isActive = activeTier === tier.id;
                
                // Tier layouts: Tier 2 (Đỉnh - hẹp), Tier 1 (Giữa), Tier 0 (Đáy - rộng)
                let widthClass = "w-1/2";
                if (tier.id === 1) widthClass = "w-3/4";
                if (tier.id === 0) widthClass = "w-full";

                return (
                  <div
                    key={tier.id}
                    onClick={() => setActiveTier(tier.id)}
                    className={`h-14 mx-auto rounded-xl border flex items-center justify-center text-center font-extrabold text-xs md:text-sm transition-all duration-300 cursor-pointer select-none ${widthClass} ${
                      isActive 
                        ? "bg-accent border-accent text-white shadow-md scale-[1.03]" 
                        : "bg-stone-50 border-stone-250 text-stone-600 hover:border-amber-400 hover:bg-stone-100/50"
                    }`}
                  >
                    <div className="px-2 leading-tight">
                      <span className={`text-[9px] block uppercase font-bold tracking-wider ${
                        isActive ? "text-amber-100" : "text-stone-400"
                      }`}>
                        Tầng {tier.id + 1}
                      </span>
                      {tier.id === 0 && "Công nhân & Dân cày"}
                      {tier.id === 1 && "Tiểu tư sản, Trí thức..."}
                      {tier.id === 2 && "Phú nông, Tư sản..."}
                    </div>
                  </div>
                );
              })}
            </div>
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">▲ Click từng tầng để xem chỉ dẫn chiến lược ▲</span>
          </div>

          {/* Tier Detail Card (Right 7 cols) */}
          <div className="lg:col-span-7 pyramid-detail-panel">
            <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-5 md:p-6 h-full flex flex-col justify-between min-h-[220px]">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between border-b border-stone-200/60 pb-2">
                  <h5 className="font-extrabold text-stone-850 text-xs md:text-sm">
                    {pyramidTiers[activeTier].name}
                  </h5>
                  <span className="text-[10px] text-amber-700 font-extrabold uppercase tracking-wider">
                    {pyramidTiers[activeTier].role}
                  </span>
                </div>
                {pyramidTiers[activeTier].desc}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 3: LỜI KÊU GỌI TOÀN QUỐC KHÁNG CHIẾN (12/1946) */}
      <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#fbf8f3] to-[#f4eee1] border border-amber-900/10 p-6 md:p-8 text-stone-850 shadow-md">
        
        {/* Scroll Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(217,119,6,0.03),transparent_50%)] pointer-events-none z-0" />
        
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2 text-amber-800">
            <span className="p-1.5 rounded-lg bg-amber-850/5 text-amber-800 shrink-0">
              <FileText className="w-5 h-5" />
            </span>
            <h4 className="font-extrabold text-stone-850 text-sm md:text-base uppercase tracking-wider">
              Lời kêu gọi Toàn quốc kháng chiến (12/1946)
            </h4>
          </div>

          <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
            Khi thực dân Pháp dã tâm xâm lược Việt Nam lần thứ hai, Hồ Chí Minh đã tha thiết kêu gọi toàn thể đồng bào không phân biệt giai tầng, dân tộc, tôn giáo, đảng phái cùng chung sức đấu tranh chống kẻ thù chung:
          </p>

          {/* Proclamation text */}
          <div className="bg-white/80 p-5 rounded-xl border border-amber-900/15 shadow-sm">
            <p className="font-serif italic text-amber-950 text-sm md:text-base leading-relaxed tracking-wide text-center">
              &quot;Bất kỳ đàn ông, đàn bà, bất kỳ người già, người trẻ, không chia tôn giáo, đảng phái, dân tộc. Hễ là người Việt Nam thì phải đứng lên đánh thực dân Pháp để cứu Tổ quốc.&quot;
            </p>
          </div>

          <div className="text-right text-[11px] text-stone-500 font-bold italic">
            — Trích Lời kêu gọi toàn quốc kháng chiến (tháng 12/1946)
          </div>
        </div>
      </div>

    </div>
  );
}
