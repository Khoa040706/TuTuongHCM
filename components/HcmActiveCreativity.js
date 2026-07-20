"use client";
import React, { useState, useRef } from "react";
import { 
  Sparkles, 
  Quote, 
  Layers, 
  CheckCircle,
  HelpCircle,
  AlertTriangle,
  Compass,
  ArrowRight,
  TrendingUp,
  Activity,
  Flame,
  Award
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmActiveCreativity() {
  const [activeMetaphor, setActiveMetaphor] = useState(0); // 0: Con đỉa, 1: Con rắn
  const containerRef = useRef(null);

  const metaphors = [
    {
      id: 0,
      title: "Ẩn dụ &quot;Con đỉa hai vòi&quot;",
      source: "Tác phẩm Bản án chế độ thực dân Pháp (1925)",
      quote: "&quot;Chủ nghĩa tư bản là một con đỉa có một cái vòi bám vào giai cấp vô sản ở chính quốc và một cái vòi khác bám vào giai cấp vô sản ở thuộc địa. Nếu muốn giết con vật ấy, người ta phải đồng thời cắt cả hai vòi.&quot;",
      explanation: "Hình tượng hóa bản chất hút máu tàn bạo của chủ nghĩa thực dân trên cả hai phương diện. Lời cảnh tỉnh rằng cách mạng ở thuộc địa và chính quốc có vai trò quan trọng ngang nhau, phải cùng lúc tấn công để tiêu diệt tận gốc chủ nghĩa đế quốc chứ không thể thiên lệch hay chờ đợi bên nào."
    },
    {
      id: 1,
      title: "Ẩn dụ &quot;Con rắn độc tư bản&quot;",
      source: "Đại hội V Quốc tế Cộng sản (1924)",
      quote: "&quot;nọc độc và sức sống của con rắn độc tư bản chủ nghĩa đang tập trung ở các thuộc địa hơn là ở chính quốc; nếu thờ ơ với vấn đề cách mạng ở thuộc địa thì như đánh chết rắn đằng đuôi.&quot;",
      explanation: "Khẳng định thuộc địa mới là nguồn nuôi dưỡng chính, là chiếc vòi rồng tiếp năng lượng cho chủ nghĩa đế quốc sinh tồn. Do đó, cách mạng thuộc địa có tầm ảnh hưởng mang tính quyết định, có thể đánh sập nguồn sống của con rắn độc trước khi cách mạng chính quốc nổ ra."
    }
  ];

  useGSAP(() => {
    // GSAP metaphor details animation
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".metaphor-detail-card") : document.querySelectorAll(".metaphor-detail-card");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets, 
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
      }
    }
  }, { dependencies: [activeMetaphor], scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-2 select-text font-sans bg-transparent space-y-10">
      
      {/* SECTION 1: COMINTERN VS HO CHI MINH DUEL */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Activity className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            Cuộc tranh luận lý luận: Tính chủ động vs Sự lệ thuộc
          </h4>
        </div>

        <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
          Trước khi Hồ Chí Minh đề ra luận điểm sáng tạo, trong hàng ngũ phong trào cộng sản quốc tế tồn tại khuynh hướng coi nhẹ tiềm năng cách mạng thuộc địa:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Comintern side */}
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-5 md:p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-stone-500">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span className="text-[10px] font-black uppercase tracking-widest block">
                  Quốc tế Cộng sản (Đại hội VI - 1928)
                </span>
              </div>
              
              <h5 className="font-extrabold text-stone-850 text-sm md:text-base leading-snug">
                Xem nhẹ, coi cách mạng thuộc địa phụ thuộc
              </h5>
              
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                Đại hội VI Quốc tế Cộng sản thông qua luận cương cho rằng: <strong>chỉ có thể giải phóng hoàn toàn thuộc địa khi giai cấp vô sản giành thắng lợi ở các nước tư bản tiên tiến (chính quốc)</strong>.
              </p>
            </div>

            <div className="bg-rose-500/5 p-3.5 rounded-xl border border-rose-500/15">
              <p className="text-rose-800 text-[11px] font-bold leading-relaxed">
                ➔ Hệ quả: Làm giảm hẳn tính chủ động, tự lực và sáng tạo của nhân dân các nước thuộc địa trong cuộc đấu tranh giành độc lập dân tộc.
              </p>
            </div>
          </div>

          {/* Ho Chi Minh side */}
          <div className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/25 rounded-2xl p-5 md:p-6 space-y-4 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
              <Sparkles className="w-20 h-20 text-amber-600" />
            </div>

            <div className="relative z-10 space-y-2.5">
              <div className="flex items-center gap-2 text-amber-700">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span className="text-[10px] font-black uppercase tracking-widest block">
                  Luận điểm Hồ Chí Minh (1924)
                </span>
              </div>
              
              <h5 className="font-extrabold text-stone-900 text-sm md:text-base leading-snug">
                Bình đẳng & Có thể giành thắng lợi trước
              </h5>
              
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                Người khẳng định cách mạng thuộc địa và vô sản chính quốc có <strong>quan hệ bình đẳng, khăng khít, tác động qua lại lẫn nhau</strong> chứ không lệ thuộc; thậm chí <strong>cách mạng thuộc địa có thể giành thắng lợi trước</strong>.
              </p>
            </div>

            <div className="relative z-10 bg-amber-500/5 p-3.5 rounded-xl border border-amber-500/15">
              <p className="text-amber-800 text-[11px] font-bold leading-relaxed">
                ➔ Phát kiến: Khơi dậy mạnh mẽ ý chí kiên cường, sức mạnh tự chủ giải phóng và tinh thần sáng tạo không ngừng nghỉ của các dân tộc thuộc địa.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 2: TWO METAPHORS */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Layers className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            Hai hình ảnh ẩn dụ kinh điển của Hồ Chí Minh
          </h4>
        </div>

        <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
          Để thuyết phục Quốc tế Cộng sản thức tỉnh về tiềm năng và tầm quan trọng của cách mạng thuộc địa, Người đã sử dụng hai phép ẩn dụ lẫy lừng đi vào lịch sử lý luận cách mạng thế giới:
        </p>

        {/* Metaphor Select Tab layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {metaphors.map((item) => {
            const isActive = activeMetaphor === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveMetaphor(item.id)}
                className={`p-4.5 rounded-xl border transition-all duration-300 cursor-pointer select-none text-left flex flex-col justify-between gap-2.5 ${
                  isActive 
                    ? "bg-accent border-accent text-white shadow-md shadow-amber-600/10 scale-[1.01]" 
                    : "bg-stone-50 border-stone-250 text-stone-600 hover:border-amber-400 hover:bg-stone-100/50"
                }`}
              >
                <div className="space-y-1">
                  <span className={`text-[9px] font-black uppercase tracking-wider ${
                    isActive ? "text-amber-200" : "text-accent"
                  }`}>
                    {item.source}
                  </span>
                  <h5 className="font-extrabold text-xs md:text-sm leading-snug" dangerouslySetInnerHTML={{ __html: item.title }} />
                </div>
                <div className={`text-[10px] font-bold ${isActive ? "text-white" : "text-accent"} flex items-center gap-1.5`}>
                  Xem ý nghĩa thực tiễn <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Metaphor Detail Panel */}
        <div className="metaphor-detail-card bg-white border border-stone-200/80 rounded-2xl p-5 md:p-6 shadow-sm space-y-4">
          <div className="space-y-3">
            <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest block">
              Trích dẫn tư liệu lịch sử:
            </span>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 font-serif italic text-stone-850 text-xs md:text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: metaphors[activeMetaphor].quote }} />
          </div>

          <div className="space-y-2 border-t border-stone-150 pt-3">
            <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest block">
              Ý nghĩa khoa học lý luận:
            </span>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-medium">
              {metaphors[activeMetaphor].explanation}
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: SELF-RELIANCE & HISTORICAL PROOF */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Flame className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            Tinh thần tự lực giải phóng và Minh chứng chói lọi của lịch sử
          </h4>
        </div>

        {/* Proclamation Banner */}
        <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e1d1a] to-[#141312] border border-[#2a2926] p-6 text-white shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,119,6,0.08),transparent_60%)] pointer-events-none z-0" />
          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              <Quote className="w-4 h-4 shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Lời hiệu triệu tự lực giải phóng (Hội Liên hiệp thuộc địa)</span>
            </div>
            
            <p className="font-serif italic text-amber-100 text-sm md:text-base leading-relaxed pl-4 border-l-2 border-amber-550/40">
              &quot;Hỡi anh em ở các thuộc địa!... Anh em phải làm thế nào để được giải phóng? Vận dụng công thức của Các Mác, chúng tôi xin nói với anh em rằng, công cuộc giải phóng anh em chỉ có thể thực hiện được bằng sự nỗ lực của bản thân anh em.&quot;
            </p>
            
            <div className="text-right text-[10px] text-stone-400 italic">
              — Vận dụng sáng tạo phương châm tự giải phóng giai cấp vô sản của C. Mác vào các nước thuộc địa
            </div>
          </div>
        </div>

        {/* Historical proof card */}
        <div className="bg-stone-50 border border-stone-250 p-5 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-amber-800">
            <Award className="w-5 h-5 shrink-0" />
            <h5 className="font-extrabold text-stone-850 text-sm uppercase tracking-wide">Minh chứng thực tiễn chói lọi của thời đại</h5>
          </div>

          <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
            Lịch sử thế giới đã chứng minh hoàn toàn tính đúng đắn, độc đáo và đi trước thời đại trong luận điểm của Bác:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1.5">
              <span className="text-xs font-black text-amber-700 uppercase">1. Tại Việt Nam (1945)</span>
              <p className="text-stone-600 text-xs leading-relaxed">
                <strong>Thắng lợi Cách mạng Tháng Tám năm 1945</strong> nổ ra và giành chính quyền thành công rực rỡ, trong khi cách mạng vô sản ở chính quốc Pháp vẫn chưa thắng lợi.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1.5">
              <span className="text-xs font-black text-amber-700 uppercase">2. Trên Thế giới (Thập niên 60)</span>
              <p className="text-stone-600 text-xs leading-relaxed">
                <strong>Phong trào giải phóng dân tộc bùng nổ</strong> giành thắng lợi ở hàng loạt quốc gia thuộc địa châu Á, châu Phi, Mỹ Latinh những năm 60 của thế kỷ XX, làm sụp đổ hoàn toàn hệ thống thuộc địa của chủ nghĩa đế quốc.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
