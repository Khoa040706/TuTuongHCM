"use client";
import React, { useState, useRef } from "react";
import { 
  GitBranch, 
  Layers, 
  Cpu, 
  TrendingUp, 
  HelpCircle,
  Shield, 
  Sparkles, 
  Heart, 
  Compass, 
  CheckCircle,
  ChevronRight
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmSocialismNecessity() {
  const [activeStep, setActiveStep] = useState(0); // Lực lượng sản xuất stepper
  const [selectedPath, setSelectedPath] = useState("direct"); // direct | detour
  const [activeTab, setActiveTab] = useState("evolution"); // evolution | paths | vietnam
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".animate-slide-up",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power2.out" }
    );
  }, { scope: containerRef, dependencies: [activeTab, activeStep, selectedPath] });

  // 1. Dữ liệu sự tiến hóa Lực lượng Sản xuất
  const productionSteps = [
    {
      title: "Thời kỳ sơ khởi",
      tool: "Cành cây, búa đá",
      desc: "Cách sản xuất nguyên thủy phụ thuộc hoàn toàn vào thiên nhiên hoang dã.",
      impact: "Chế độ xã hội tương ứng: Cộng sản nguyên thủy, mọi người bình đẳng do năng suất cực thấp."
    },
    {
      title: "Thời kỳ cơ giới",
      tool: "Máy móc cơ khí, sức điện",
      desc: "Thay thế sức người bằng máy móc quy mô công nghiệp, năng suất nhảy vọt.",
      impact: "Thúc đẩy mâu thuẫn giữa tính chất xã hội hóa của lực lượng sản xuất với chế độ tư hữu tư bản."
    },
    {
      title: "Thời kỳ hiện đại",
      tool: "Sức nguyên tử, công nghệ cao",
      desc: "Ứng dụng tự động hóa, công nghệ hạt nhân và kỹ thuật số hiện đại.",
      impact: "Mở ra thời đại mới, đòi hỏi một phương thức sản xuất công bằng hơn: Chủ nghĩa Xã hội."
    }
  ];

  // 2. Dữ liệu 5 hình thái kinh tế - xã hội
  const socialFormations = [
    { name: "Cộng sản nguyên thủy", color: "bg-stone-300 text-stone-800" },
    { name: "Chiếm hữu nô lệ", color: "bg-orange-200 text-orange-850" },
    { name: "Phong kiến", color: "bg-amber-200 text-amber-900" },
    { name: "Tư bản chủ nghĩa", color: "bg-red-200 text-red-900" },
    { name: "XHCN & Cộng sản chủ nghĩa", color: "bg-emerald-600 text-white font-black" }
  ];

  return (
    <div ref={containerRef} className="w-full bg-stone-50 border border-stone-200/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-full">
            Mục II.1.b
          </span>
          <h3 className="text-xl md:text-2xl font-serif font-black text-stone-900 mt-2">
            Tiến lên Chủ nghĩa Xã hội là một Tất yếu Khách quan
          </h3>
          <p className="text-stone-500 text-xs md:text-sm mt-1">
            Quy luật phát triển lịch sử - tự nhiên và tính đặc thù sáng tạo trong con đường đi lên của Việt Nam.
          </p>
        </div>

        {/* Tabs switcher */}
        <div className="flex bg-stone-200/60 p-1 rounded-xl self-start md:self-center">
          <button
            onClick={() => setActiveTab("evolution")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "evolution"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Lịch sử - Tự nhiên
          </button>
          <button
            onClick={() => setActiveTab("paths")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "paths"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Lộ trình phát triển
          </button>
          <button
            onClick={() => setActiveTab("vietnam")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "vietnam"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Sự lựa chọn của Việt Nam
          </button>
        </div>
      </div>

      {/* 1. TAB LỊCH SỬ TỰ NHIÊN */}
      {activeTab === "evolution" && (
        <div className="space-y-6 animate-slide-up">
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-stone-900 text-sm md:text-base flex items-center gap-2">
              <Layers className="w-4.5 h-4.5 text-amber-600" />
              Học thuyết hình thái kinh tế - xã hội (C. Mác)
            </h4>
            <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
              Mác chỉ rõ sự phát triển của xã hội loài người là một <strong>quá trình lịch sử - tự nhiên</strong>, tuân theo quy luật khách quan của sự phát triển lực lượng sản xuất:
            </p>

            {/* formations block */}
            <div className="flex flex-col md:flex-row items-center gap-2 bg-stone-100 p-4.5 rounded-2xl border border-stone-200">
              {socialFormations.map((form, idx) => (
                <React.Fragment key={idx}>
                  <div className={`px-4 py-3 rounded-xl text-center text-xs font-bold shadow-sm grow w-full md:w-auto ${form.color}`}>
                    {form.name}
                  </div>
                  {idx < socialFormations.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-stone-400 rotate-90 md:rotate-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
            
            <div className="bg-red-500/5 p-4 rounded-xl border border-red-500/20 text-red-900 text-xs md:text-sm font-semibold flex items-center gap-2">
              <span className="font-bold text-lg">→</span>
              <span>Quy luật tất yếu: &quot;Sự sụp đổ của giai cấp tư sản và thắng lợi của giai cấp vô sản là tất yếu như nhau.&quot;</span>
            </div>
          </div>

          <div className="space-y-4 pt-3 border-t border-stone-200">
            <h4 className="font-serif font-bold text-stone-900 text-sm md:text-base flex items-center gap-2">
              <Cpu className="w-4.5 h-4.5 text-amber-600" />
              Sự vận dụng và chứng minh thực tiễn của Hồ Chí Minh
            </h4>
            
            {/* Quote block */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-600/5 to-orange-600/5 border-l-3 border-amber-600 text-stone-800 text-xs md:text-sm font-serif italic leading-relaxed">
              &quot;Cách sản xuất và sức sản xuất phát triển và biến đổi mãi, do đó mà tư tưởng của người, chế độ xã hội, v.v., cũng phát triển và biến đổi.&quot;
            </div>

            {/* Interactive stepper */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest block">
                Nhấn chọn để xem quá trình phát triển lực lượng sản xuất:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {productionSteps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`p-3 rounded-xl border text-left transition-all duration-300 ${
                      activeStep === idx
                        ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                        : "bg-white text-stone-700 border-stone-250 hover:bg-stone-100"
                    }`}
                  >
                    <span className="text-[10px] font-extrabold uppercase block opacity-70">Bước {idx + 1}</span>
                    <span className="text-xs font-bold block mt-1">{step.tool}</span>
                  </button>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2">
                <h5 className="font-bold text-stone-900 text-sm">
                  {productionSteps[activeStep].title} — Công cụ: {productionSteps[activeStep].tool}
                </h5>
                <p className="text-stone-700 text-xs leading-relaxed">
                  {productionSteps[activeStep].desc}
                </p>
                <p className="text-amber-700 text-[11px] font-bold italic leading-relaxed pt-1.5 border-t border-stone-100 mt-2">
                  {productionSteps[activeStep].impact}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. TAB LỘ TRÌNH PHÁT TRIỂN */}
      {activeTab === "paths" && (
        <div className="space-y-6 animate-slide-up">
          <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
            Hồ Chí Minh chỉ rõ rằng mặc dù tiến lên chủ nghĩa xã hội là xu thế tất yếu chung, nhưng <strong>lộ trình không bắt buộc phải giống nhau</strong> đối với mọi quốc gia. Có hai phương thức chuyển biến chính:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Lộ trình đi thẳng */}
            <div
              onClick={() => setSelectedPath("direct")}
              className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                selectedPath === "direct"
                  ? "bg-amber-500/5 border-amber-500/40 shadow-sm ring-1 ring-amber-500/20"
                  : "bg-white border-stone-200 hover:border-stone-300 opacity-75 hover:opacity-100"
              }`}
            >
              <span className="text-[9px] font-black text-amber-700 uppercase tracking-widest block mb-1">
                Phương thức 1
              </span>
              <h5 className="font-serif font-black text-stone-900 text-sm md:text-base mb-2">
                Trải qua giai đoạn Tư bản chủ nghĩa
              </h5>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                Các nước đã phát triển công nghiệp tư bản chủ nghĩa mạnh mẽ, sau cuộc cách mạng vô sản sẽ <strong>&quot;đi thẳng&quot;</strong> lên chủ nghĩa xã hội (ví dụ lịch sử của Liên Xô).
              </p>
            </div>

            {/* Lộ trình bỏ qua */}
            <div
              onClick={() => setSelectedPath("detour")}
              className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                selectedPath === "detour"
                  ? "bg-emerald-500/5 border-emerald-500/40 shadow-sm ring-1 ring-emerald-500/20"
                  : "bg-white border-stone-200 hover:border-stone-300 opacity-75 hover:opacity-100"
              }`}
            >
              <span className="text-[9px] font-black text-emerald-700 uppercase tracking-widest block mb-1">
                Phương thức 2
              </span>
              <h5 className="font-serif font-black text-stone-900 text-sm md:text-base mb-2">
                Bỏ qua giai đoạn Tư bản chủ nghĩa
              </h5>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                Áp dụng đối với các nước thuộc địa, nông nghiệp lạc hậu (như Đông Âu, Trung Quốc, Việt Nam), tiến lên chủ nghĩa xã hội sau khi đánh đổ đế quốc và phong kiến dưới sự lãnh đạo của Đảng vô sản.
              </p>
            </div>
          </div>

          {/* New Democracy details for detour path */}
          {selectedPath === "detour" && (
            <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-3.5 animate-slide-up">
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block">
                Khái quát về &quot;Chế độ Dân chủ Mới&quot;
              </span>
              <p className="text-stone-650 text-xs leading-relaxed">
                Đây là chặng đệm trung gian cực kỳ quan trọng được Hồ Chí Minh đúc kết từ thực tiễn cách mạng phương Đông từ năm 1953:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200/60">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-stone-750 text-xs">Dưới sự lãnh đạo chặt chẽ của Đảng và giai cấp công nhân.</span>
                </div>
                <div className="flex items-start gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200/60">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-stone-750 text-xs">Nhân dân đã đánh đổ thành công đế quốc xâm lược và phong kiến tay sai.</span>
                </div>
                <div className="flex items-start gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200/60">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-stone-750 text-xs">Nền tảng chính trị vững bền: khối liên minh công nông vững chắc.</span>
                </div>
                <div className="flex items-start gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200/60">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-stone-750 text-xs">Nhân dân lao động làm chủ, thực thi dân chủ chuyên chính vô sản.</span>
                </div>
              </div>
            </div>
          )}

          {/* Conclusion */}
          <div className="p-4.5 rounded-xl bg-stone-100 border border-stone-250 text-xs md:text-sm text-stone-750 leading-relaxed">
            <strong>Tổng kết biện chứng:</strong> Hồ Chí Minh khẳng định quy luật phát triển xã hội có tính chất chung (hướng tới XHCN), nhưng biểu hiện của quy luật đó ở từng quốc gia lại có tính đặc thù sâu sắc tùy thuộc vào điều kiện bối cảnh lịch sử cụ thể.
          </div>
        </div>
      )}

      {/* 3. TAB VIỆT NAM */}
      {activeTab === "vietnam" && (
        <div className="space-y-6 animate-slide-up">
          <div className="space-y-3.5">
            <h4 className="font-serif font-bold text-stone-900 text-sm md:text-base flex items-center gap-2">
              <Compass className="w-4.5 h-4.5 text-amber-600" />
              Bối cảnh đặc thù lịch sử của Việt Nam
            </h4>
            
            <div className="space-y-3 text-stone-700 text-xs md:text-sm leading-relaxed">
              <p>
                Việt Nam đã phải trải qua <strong>hàng nghìn năm</strong> dưới ách thống trị tàn bạo của phong kiến trung ương, thực dân Pháp xâm lược và phát xít Nhật.
              </p>
              <p>
                Nhiều khuynh hướng cứu dân, cứu nước mang màu sắc phong kiến (Cần Vương) hay dân chủ tư sản (Đông Du, Duy Tân, khởi nghĩa Yên Bái) đã được thử nghiệm kiên cường nhưng đều <strong>thất bại, không đem lại kết quả thực tế</strong>.
              </p>
            </div>
          </div>

          {/* The Socialism core value box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-600/5 to-amber-700/10 border-l-4 border-amber-700 space-y-3.5">
            <h5 className="font-serif font-black text-stone-900 text-sm md:text-base flex items-center gap-2">
              <Heart className="w-4.5 h-4.5 text-amber-700" />
              Sự lựa chọn duy nhất đúng đắn: Chủ nghĩa Xã hội
            </h5>
            <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
              Chỉ có chủ nghĩa xã hội mới là cội nguồn đích thực giải quyết các vấn đề lịch sử của Việt Nam:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
              <div className="bg-white p-3.5 rounded-xl border border-stone-200 flex gap-2.5">
                <span className="text-amber-700 font-bold">✓</span>
                <p className="text-stone-700 text-xs leading-normal">
                  Đem lại nền <strong>tự do, bình đẳng, bác ái thực chất</strong> cho mọi người dân.
                </p>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-stone-200 flex gap-2.5">
                <span className="text-amber-700 font-bold">✓</span>
                <p className="text-stone-700 text-xs leading-normal">
                  Xóa bỏ những bức tường ngăn cản con người đoàn kết, yêu thương nhau.
                </p>
              </div>
            </div>

            <p className="text-stone-700 text-xs md:text-sm italic leading-relaxed pt-2 border-t border-stone-200/60">
              &quot;Con đường đi lên chủ nghĩa xã hội của Việt Nam vừa là tất yếu lịch sử, vừa đáp ứng khát vọng cháy bỏng của các lực lượng tiến bộ xã hội trong quá trình tự giải phóng.&quot;
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
