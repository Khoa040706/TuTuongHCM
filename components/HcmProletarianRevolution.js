"use client";
import React, { useState, useRef } from "react";
import { 
  Sparkles, 
  Heart,
  Quote, 
  Map, 
  ArrowRight,
  TrendingUp,
  Compass,
  ArrowRightLeft,
  BookOpen,
  Calendar,
  AlertCircle
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmProletarianRevolution() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  const journeySteps = [
    {
      id: 0,
      year: "Trước 1911",
      title: "Khủng hoảng & Bế tắc",
      shortDesc: "Phong trào yêu nước nổ ra liên tục nhưng đều thất bại.",
      detail: (
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm md:text-base">
            Từ khi thực dân Pháp xâm lược đặt ách thống trị, vấn đề sống còn của dân tộc Việt Nam là phải đấu tranh giải phóng dân tộc khỏi ách thực dân, đế quốc.
          </p>
          <div className="bg-rose-50 border border-rose-250 p-4 rounded-xl flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <p className="text-stone-800 text-xs md:text-sm font-semibold">
              Hàng loạt phong trào cứu nước nổ ra theo các hệ tư tưởng phong kiến hay dân chủ tư sản đều thất bại, thể hiện sự khủng hoảng, bế tắc sâu sắc về giai cấp lãnh đạo và đường lối cách mạng.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 1,
      year: "1911",
      title: "Tây du khảo sát thực tế",
      shortDesc: "Bác ra đi tìm đường cứu nước, khảo sát các nước tư bản phương Tây.",
      detail: (
        <div className="space-y-4">
          <p className="text-stone-700 leading-relaxed text-sm md:text-base">
            Hồ Chí Minh quyết định sang phương Tây để trực tiếp quan sát và tìm hiểu con đường tự giải phóng. Người bộc lộ ý chí:
          </p>
          
          <div className="relative group overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-amber-500/5 to-amber-600/5 border-l-4 border-amber-600 shadow-sm">
            <Quote className="absolute top-2 left-2 w-12 h-12 text-amber-600/10 -rotate-12 pointer-events-none" />
            <p className="relative z-10 font-serif italic text-stone-850 text-sm md:text-base leading-relaxed pl-4">
              &quot;Tôi muốn đi ra nước ngoài, xem nước Pháp và các nước khác. Sau khi xem xét họ làm như thế nào, tôi sẽ trở về giúp đồng bào chúng ta.&quot;
            </p>
          </div>

          <div className="space-y-2 border-t border-stone-150 pt-3">
            <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest block">Không lựa chọn cách mạng tư sản:</span>
            <p className="text-stone-700 text-xs md:text-sm">
              Tìm hiểu cách mạng Mỹ (1776) và cách mạng Pháp (1789), Người nhận ra đây là những cuộc cách mạng không triệt để:
            </p>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 font-serif italic text-stone-800 text-xs md:text-sm">
              &quot;Cách mệnh Pháp cũng như cách mệnh Mỹ, nghĩa là cách mệnh tư sản, cách mệnh không đến nơi, tiếng là cộng hòa và dân chủ, kỳ thực trong thì nó tước lục công nông, ngoài thì nó áp bức thuộc địa.&quot;
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      year: "1917",
      title: "Cách mạng Tháng Mười Nga",
      shortDesc: "Tiếng súng Cung điện Mùa Đông mở ra kỷ nguyên mới.",
      detail: (
        <div className="space-y-4">
          <p className="text-stone-700 leading-relaxed text-sm md:text-base">
            Sự kiện <strong>Cách mạng Tháng Mười Nga (1917)</strong> giành thắng lợi vang dội đã ảnh hưởng cực kỳ sâu sắc tới việc lựa chọn con đường cứu nước của Hồ Chí Minh.
          </p>
          <div className="bg-amber-500/5 border border-amber-500/10 p-4 rounded-xl space-y-2">
            <p className="text-stone-800 text-xs md:text-sm font-semibold">
              Người rút ra kết luận sâu sắc:
            </p>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed italic border-l-2 border-amber-600 pl-3">
              Chỉ có cách mệnh Nga là đã thành công đến nơi, nghĩa là dân chúng được hưởng hạnh phúc, tự do, bình đẳng thật sự chứ không giả hiệu. Từ đó, Người hướng niềm tin hoàn toàn vào chủ nghĩa Mác - Lênin.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      year: "1920",
      title: "Luận cương Lênin & Ánh sáng",
      shortDesc: "Tìm thấy con đường cứu nước chân chính: Cách mạng vô sản.",
      detail: (
        <div className="space-y-4">
          <p className="text-stone-700 leading-relaxed text-sm md:text-base">
            Tháng 7-1920, Hồ Chí Minh đọc bản <strong>Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa</strong> của V.I. Lênin đăng trên báo L'Humanité (Nhân đạo).
          </p>

          <div className="relative group overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-amber-500/5 to-amber-600/10 border-l-4 border-amber-600 shadow-sm">
            <Quote className="absolute top-2 left-2 w-12 h-12 text-amber-600/10 -rotate-12 pointer-events-none" />
            <p className="relative z-10 font-serif italic text-stone-850 text-sm md:text-base leading-relaxed pl-4">
              &quot;Luận cương của Lênin làm cho tôi rất cảm động, phấn khởi, sáng tỏ, tin tưởng biết bao! Tôi vui mừng đến phát khóc lên... Hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta!&quot;
            </p>
            <div className="mt-2 text-right">
              <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">— Bác Hồ kể lại trong &quot;Con đường dẫn tôi đến chủ nghĩa Lênin&quot;</span>
            </div>
          </div>

          <div className="bg-amber-500/5 p-4 rounded-xl border border-amber-500/15 flex items-start gap-2.5">
            <span className="text-amber-600 font-bold mt-0.5">→</span>
            <p className="text-stone-800 text-xs md:text-sm font-semibold">
              Người khẳng định đanh thép chân lý thời đại: &quot;Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản.&quot; Từ đó, Người hoàn toàn tin theo Lênin, tin theo Quốc tế thứ ba.
            </p>
          </div>
        </div>
      )
    }
  ];

  useGSAP(() => {
    // GSAP Step panel animations
    gsap.fromTo(".journey-node-panel", 
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, { dependencies: [activeStep], scope: containerRef });

  useGSAP(() => {
    // GSAP Tab change animations
    gsap.fromTo(".creativity-panel", 
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" }
    );
  }, { dependencies: [activeTab], scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-2 select-text font-sans bg-white space-y-10">
      
      {/* SECTION 1: JOURNEY TIMELINE */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Compass className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            Hành trình tìm thấy con đường cứu nước (1911 - 1920)
          </h4>
        </div>

        {/* Horizontal Timeline Layout */}
        <div className="bg-stone-50 rounded-2xl p-4 md:p-6 border border-stone-200/80 shadow-sm relative overflow-hidden">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-[52px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-amber-500/20 via-amber-600/40 to-amber-700/20 z-0"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-stretch md:items-start gap-4">
            {journeySteps.map((step) => {
              const isActive = activeStep === step.id;
              
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex-1 flex flex-row md:flex-col items-center gap-3.5 p-3 rounded-xl border transition-all duration-300 cursor-pointer select-none ${
                    isActive 
                      ? "bg-amber-700 border-amber-700 text-white shadow-md shadow-amber-600/15 scale-[1.02]" 
                      : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50 hover:border-amber-400/40"
                  }`}
                >
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-sm font-extrabold text-xs md:text-sm ${
                    isActive ? "bg-white text-amber-700" : "bg-amber-50 text-amber-700"
                  }`}>
                    {step.year.replace("Trước ", "")}
                  </div>
                  
                  <div className="text-left md:text-center space-y-0.5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                      isActive ? "text-amber-100" : "text-amber-700"
                    }`}>
                      {step.year}
                    </span>
                    <h5 className="text-xs md:text-sm font-bold leading-tight font-sans line-clamp-1">
                      {step.title}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Detail Card */}
        <div className="journey-node-panel bg-white border border-stone-200/80 rounded-2xl p-5 md:p-6 shadow-sm min-h-[220px] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-stone-150 pb-3">
              <span className="text-xs font-black text-amber-700 uppercase tracking-widest">
                Chi tiết chặng đường: {journeySteps[activeStep].year}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-xs text-stone-500 font-bold">{journeySteps[activeStep].title}</span>
            </div>
            {journeySteps[activeStep].detail}
          </div>

          <div className="mt-6 flex justify-between items-center text-xs border-t border-stone-150 pt-4">
            <span className="text-stone-400 font-medium">Chặng {activeStep + 1} / {journeySteps.length}</span>
            {activeStep < journeySteps.length - 1 && (
              <button
                onClick={() => setActiveStep(prev => prev + 1)}
                className="px-3 py-1.5 rounded-lg bg-amber-600 text-white font-bold hover:bg-amber-700 cursor-pointer select-none flex items-center gap-1 border-none shadow-sm"
              >
                Chặng tiếp <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 2: COMPARISON OF LIBERATION SEQUENCE */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <ArrowRightLeft className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            So sánh trình tự giải phóng (Âu Châu vs Thuộc địa)
          </h4>
        </div>

        <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
          Xuất phát từ hoàn cảnh chính trị - xã hội đặc thù của các nước thuộc địa phương Đông, Hồ Chí Minh đã vận dụng sáng tạo học thuyết cách mạng vô sản của chủ nghĩa Mác - Lênin, tạo nên sự hoán đổi lịch sử đầy chiến lược:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Marx & Engels flow */}
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-5 md:p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest block">
                Chủ nghĩa Mác - Ăng-ghen (Châu Âu)
              </span>
              <h5 className="font-extrabold text-stone-850 text-sm md:text-base leading-snug">
                Giải phóng Giai cấp làm tiền đề
              </h5>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                Tại các nước tư bản phát triển châu Âu, mâu thuẫn giai cấp (Vô sản vs Tư sản) là mâu thuẫn chủ yếu. Do đó, trình tự cách mạng vô sản được hoạch định:
              </p>
            </div>

            {/* Sequence map */}
            <div className="flex flex-col gap-2 my-2">
              {["Giải phóng giai cấp", "Giải phóng dân tộc", "Giải phóng xã hội", "Giải phóng con người"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="bg-white border border-stone-200/80 px-3.5 py-2 rounded-xl text-xs font-bold text-stone-700 w-full flex justify-between items-center shadow-xs">
                    <span>{idx + 1}. {item}</span>
                    {idx < 3 && <TrendingUp className="w-3.5 h-3.5 text-stone-400 rotate-90" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ho Chi Minh flow */}
          <div className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/25 rounded-2xl p-5 md:p-6 space-y-4 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
              <Sparkles className="w-20 h-20 text-amber-600" />
            </div>
            
            <div className="relative z-10 space-y-2">
              <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest block">
                Tư tưởng Hồ Chí Minh (Thuộc địa Đông Dương)
              </span>
              <h5 className="font-extrabold text-stone-850 text-sm md:text-base leading-snug">
                Giải phóng Dân tộc là trước hết, trên hết
              </h5>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                Tại nước thuộc địa bán phong kiến, mâu thuẫn dân tộc (Toàn thể nhân dân vs Thực dân Pháp) nổi lên gay gắt nhất. Do đó, Người hoán đổi trình tự cách mạng vô sản:
              </p>
            </div>

            {/* Sequence map */}
            <div className="relative z-10 flex flex-col gap-2 my-2">
              {["Giải phóng dân tộc", "Giải phóng xã hội", "Giải phóng giai cấp", "Giải phóng con người"].map((item, idx) => {
                const isSpecial = idx === 0;
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <div className={`px-3.5 py-2 rounded-xl text-xs font-bold w-full flex justify-between items-center shadow-xs ${
                      isSpecial 
                        ? "bg-amber-600 text-white border border-amber-600 shadow-sm" 
                        : "bg-white border border-stone-250 text-stone-700"
                    }`}>
                      <span>{idx + 1}. {item}</span>
                      {idx < 3 && <TrendingUp className="w-3.5 h-3.5 text-stone-400 rotate-90" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        <div className="bg-amber-500/5 p-4 rounded-xl border border-amber-500/10 flex items-start gap-2.5">
          <span className="text-amber-600 font-bold mt-0.5">➔</span>
          <p className="text-stone-850 text-xs md:text-sm font-semibold italic">
            Người chỉ rõ: Giải phóng dân tộc gắn liền với giải phóng giai cấp, trong đó giải phóng dân tộc là trước hết, trên hết. Đồng thời, độc lập dân tộc phải gắn liền với chủ nghĩa xã hội.
          </p>
        </div>
      </div>

      {/* SECTION 3: NÉT ĐỘC ĐÁO SÁNG TẠO TRONG CHÁNH CƯƠNG 1930 */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <BookOpen className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            Nét độc đáo sáng tạo trong Chánh cương vắn tắt (1930)
          </h4>
        </div>

        <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
          Sự sáng tạo lớn nhất của Hồ Chí Minh so với quan điểm chính thống của Quốc tế Cộng sản lúc bấy giờ được thể hiện rõ nét qua việc hoạch định sách lược cách mạng dân tộc dân chủ nhân dân:
        </p>

        {/* Tab selection */}
        <div className="flex bg-stone-100 p-1.5 rounded-xl gap-1 w-fit border border-stone-200">
          <button
            onClick={() => setActiveTab(0)}
            className={`px-4 py-2 rounded-lg font-bold text-xs cursor-pointer border-none transition-all duration-200 ${
              activeTab === 0 ? "bg-white text-amber-700 shadow-sm" : "text-stone-500 hover:text-stone-850"
            }`}
          >
            Chánh cương vắn tắt 1930
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`px-4 py-2 rounded-lg font-bold text-xs cursor-pointer border-none transition-all duration-200 ${
              activeTab === 1 ? "bg-white text-amber-700 shadow-sm" : "text-stone-500 hover:text-stone-850"
            }`}
          >
            Quốc tế Cộng sản (Đại hội VI)
          </button>
        </div>

        {/* Tab details show */}
        <div className="creativity-panel bg-white border border-stone-200/80 rounded-2xl p-5 md:p-6 shadow-sm min-h-[180px]">
          {activeTab === 0 ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-700">
                <span className="p-1.5 rounded bg-amber-50 text-amber-700 font-extrabold text-[10px] uppercase">
                  Tư tưởng Hồ Chí Minh
                </span>
                <h5 className="font-bold text-stone-850 text-sm md:text-base leading-none">
                  Đặt chống đế quốc lên hàng đầu
                </h5>
              </div>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                Người khẳng định phương hướng chiến lược cách mạng Việt Nam: làm <strong>tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản</strong>. Trong đó:
              </p>
              <div className="bg-amber-500/5 p-4 rounded-xl border border-amber-500/10 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-stone-800 text-xs md:text-sm leading-relaxed">
                  <strong>Không tiến hành hai nhiệm vụ ngang hàng nhau</strong>: Đặt nhiệm vụ <strong>chống đế quốc, giải phóng dân tộc</strong> làm ưu tiên số một; còn nhiệm vụ chống phong kiến (chia ruộng đất cho dân nghèo) sẽ từng bước thực hiện. Vì vậy, Người chỉ nêu <em>&quot;thâu hết ruộng đất của đế quốc... chia cho dân cày nghèo&quot;</em> mà chưa nêu chủ trương <em>&quot;người cày có ruộng&quot;</em> để tránh kích động giai cấp địa chủ yêu nước quá sớm.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-stone-500">
                <span className="p-1.5 rounded bg-stone-100 text-stone-600 font-extrabold text-[10px] uppercase">
                  Chỉ thị chung
                </span>
                <h5 className="font-bold text-stone-850 text-sm md:text-base leading-none">
                  Tiến hành đồng thời hai nhiệm vụ
                </h5>
              </div>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                Theo chỉ thị chung của Đại hội VI Quốc tế Cộng sản về phong trào cách mạng thuộc địa:
              </p>
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/80 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                  <strong>Thực hiện đồng thời, song hành khăng khít</strong>: Nhiệm vụ chống đế quốc và chống phong kiến phải thực hiện cùng lúc, nương tựa vào nhau. Đồng thời, khái niệm &quot;Cách mạng tư sản dân quyền&quot; của Quốc tế Cộng sản lúc đó chưa bao hàm đầy đủ, nổi bật nhiệm vụ chống đế quốc giải phóng dân tộc hàng đầu như Chánh cương vắn tắt của Bác.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e1d1a] to-[#141312] border border-[#2a2926] p-5 text-white shadow-md">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,119,6,0.08),transparent_60%)] pointer-events-none z-0" />
          <div className="relative z-10 space-y-1.5">
            <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">
              Kết luận khoa học lịch sử:
            </span>
            <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
              Việc đặt giải phóng dân tộc lên hàng đầu và phân kỳ nhiệm vụ ruộng đất từng bước của Hồ Chí Minh chính là <strong>nét độc đáo, sáng tạo lỗi lạc</strong>, phù hợp hoàn hảo với yêu cầu khách quan của lịch sử Việt Nam cuối thế kỷ XIX - đầu thế kỷ XX, giúp lôi kéo toàn bộ các lực lượng yêu nước để chiến thắng kẻ thù chung.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

// Simple Helper Component for checkmark icon
function Check(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
