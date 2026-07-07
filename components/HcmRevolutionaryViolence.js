"use client";
import React, { useState, useRef } from "react";
import { 
  Sparkles, 
  Quote, 
  Layers, 
  ShieldAlert,
  Flame,
  Award,
  Calendar,
  Compass,
  ArrowRight,
  TrendingUp,
  Activity,
  Heart
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmRevolutionaryViolence() {
  const [activeTheory, setActiveTheory] = useState(0); // 0: Mác, 1: Ăng-ghen, 2: Lênin
  const [activeForm, setActiveForm] = useState(0); // 0: Chính trị, 1: Vũ trang
  const containerRef = useRef(null);

  const theories = [
    {
      id: 0,
      author: "C. Mác (1867)",
      book: "Bộ Tư bản (quyển I, tập I)",
      quote: "&quot;Bạo lực là bà đỡ của một chế độ xã hội cũ đang thai nghén một chế độ mới.&quot;",
      desc: "Lý luận kinh điển chỉ rõ vai trò tất yếu của bạo lực như động lực hộ tống sự sinh thành của hình thái kinh tế xã hội mới từ lòng xã hội cũ."
    },
    {
      id: 1,
      author: "Ph. Ăng-ghen (1878)",
      book: "Tác phẩm Chống Đuy-rinh",
      quote: "&quot;Bạo lực còn đóng một vai trò khác trong lịch sử, vai trò cách mạng; bạo lực là công cụ mà sự vận động xã hội dùng để tự mở đường cho mình và đập tan những hình thức chính trị đã hóa đá và chết cứng.&quot;",
      desc: "Khẳng định bạo lực là công cụ giải phóng, đập tan xiềng xích chính trị trì trệ để mở đường cho bánh xe lịch sử tiến lên phía trước."
    },
    {
      id: 2,
      author: "V.I. Lênin",
      book: "Học thuyết Cách mạng vô sản",
      quote: "&quot;Không có bạo lực cách mạng thì không thể thay thế nhà nước tư sản bằng nhà nước vô sản được.&quot;",
      desc: "Rút ra từ thực tiễn Cách mạng Tháng Mười Nga, Lênin cụ thể hóa tính tất yếu của bạo lực trong việc trấn áp giai cấp thống trị phản động."
    }
  ];

  const struggleForms = [
    {
      id: 0,
      name: "Đấu tranh Chính trị",
      role: "Cơ sở, Nền tảng thiết yếu",
      icon: Heart,
      color: "border-amber-400 bg-amber-50/20 text-amber-900 shadow-sm",
      detail: "Là mặt trận tập hợp lực lượng chính trị đông đảo của toàn bộ quần chúng nhân dân. Đấu tranh chính trị đóng vai trò là cơ sở vững chắc, nền tảng cho việc xây dựng lực lượng vũ trang và tiến hành đấu tranh vũ trang sau này."
    },
    {
      id: 1,
      name: "Đấu tranh Vũ trang",
      role: "Ý nghĩa Quyết định then chốt",
      icon: ShieldAlert,
      color: "border-rose-450 bg-rose-50/20 text-rose-900 shadow-sm",
      detail: "Sử dụng lực lượng quân sự đập tan bộ máy chiến tranh của địch. Đấu tranh vũ trang có ý nghĩa quyết định trực tiếp đối với việc tiêu diệt sinh lực quân sự và đập tan âm mưu thôn tính của kẻ thù cướp nước, đi đến kết thúc chiến tranh."
    }
  ];

  useGSAP(() => {
    // GSAP theory change animation
    gsap.fromTo(".theory-detail-panel", 
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" }
    );
  }, { dependencies: [activeTheory], scope: containerRef });

  useGSAP(() => {
    // GSAP struggle form change animation
    gsap.fromTo(".struggle-detail-panel", 
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
  }, { dependencies: [activeForm], scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-2 select-text font-sans bg-white space-y-10">
      
      {/* SECTION 1: MARXIST-LENINIST TIMELINE OF THEORY */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Calendar className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            Cơ sở lý luận kinh điển Mác - Lênin về Bạo lực Cách mạng
          </h4>
        </div>

        <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
          Tư tưởng bạo lực cách mạng của Hồ Chí Minh bắt nguồn và kế thừa sâu sắc từ học thuyết khoa học của các nhà kinh điển phong trào vô sản thế giới:
        </p>

        {/* Horizontal tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {theories.map((t) => {
            const isActive = activeTheory === t.id;
            return (
              <div
                key={t.id}
                onClick={() => setActiveTheory(t.id)}
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer select-none text-left flex flex-col justify-between gap-2 ${
                  isActive 
                    ? "bg-amber-700 border-amber-700 text-white shadow-md scale-[1.02]" 
                    : "bg-stone-50 border-stone-250 text-stone-600 hover:bg-stone-100/50 hover:border-amber-400/40"
                }`}
              >
                <div>
                  <span className={`text-[9px] font-black uppercase tracking-wider ${
                    isActive ? "text-amber-250" : "text-amber-700"
                  }`}>
                    {t.book}
                  </span>
                  <h5 className="font-extrabold text-xs md:text-sm leading-tight mt-0.5">
                    {t.author}
                  </h5>
                </div>
                <div className={`text-[10px] font-bold ${isActive ? "text-white" : "text-amber-700"} flex items-center gap-1`}>
                  Xem luận cương trích dẫn <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Theory Detail Panel */}
        <div className="theory-detail-panel bg-stone-50 border border-stone-250 rounded-2xl p-5 md:p-6 shadow-sm min-h-[160px] flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest block">
              Trích dẫn luận điểm kinh điển:
            </span>
            <p 
              className="font-serif italic text-stone-850 text-xs md:text-sm leading-relaxed pl-3 border-l-2 border-amber-600"
              dangerouslySetInnerHTML={{ __html: theories[activeTheory].quote }}
            />
            <p className="text-stone-600 text-xs md:text-sm pt-2 leading-relaxed font-medium">
              {theories[activeTheory].desc}
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: DUAL PANEL (COLONIAL VIOLENCE VS REVOLUTIONARY VIOLENCE) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Activity className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            Tất yếu đối đầu: Bạo lực Thực dân vs Bạo lực Cách mạng
          </h4>
        </div>

        <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
          Hồ Chí Minh chỉ rõ việc dùng bạo lực cách mạng là con đường tất yếu tự vệ của quần chúng nhân dân trước sự tàn bạo của kẻ thù:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Colonial Violence */}
          <div className="bg-rose-500/5 border border-rose-500/15 rounded-2xl p-5 md:p-6 space-y-3.5 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-[10px] font-black text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded w-fit block uppercase tracking-wide">
                Bạo lực Phản cách mạng (Thực dân, đế quốc)
              </span>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                Kẻ thù dùng bạo lực dã man để đàn áp các phong trào yêu nước, thủ tiêu quyền tự do dân chủ, bóc lột và đẩy nhân dân thuộc địa vào bước đường cùng. Bác vạch trần bản chất:
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-white border border-rose-200 shadow-sm font-serif italic text-stone-850 text-xs md:text-sm">
              &quot;Chế độ thực dân, tự bản thân nó, đã là một hành động bạo lực của kẻ mạnh đối với kẻ yếu rồi.&quot;
            </div>
          </div>

          {/* Revolutionary Violence */}
          <div className="bg-amber-500/5 border border-amber-500/15 rounded-2xl p-5 md:p-6 space-y-3.5 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-[10px] font-black text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded w-fit block uppercase tracking-wide">
                Bạo lực Cách mạng (Quần chúng nhân dân)
              </span>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                Để giành tự do, nhân dân buộc phải dùng bạo lực chính nghĩa đập tan bạo lực tàn độc của địch. Người viết trong tư liệu lịch sử:
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-amber-250 shadow-sm font-serif italic text-stone-850 text-xs md:text-sm leading-relaxed">
              &quot;Trong cuộc đấu tranh gian khổ chống kẻ thù của giai cấp và dân tộc, cần dùng bạo lực cách mạng chống lại bạo lực phản cách mạng, giành lấy chính quyền và bảo vệ chính quyền.&quot;
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: DUAL FORCES & DUAL FORMS */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Layers className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            Hình thức bạo lực cách mạng: 2 Lực lượng & 2 Hình thức đấu tranh
          </h4>
        </div>

        <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
          Theo tư tưởng Hồ Chí Minh, bạo lực cách mạng là bạo lực của quần chúng nhân dân, cấu thành từ sự kết hợp khăng khít giữa hai lực lượng và hai hình thức đấu tranh cốt lõi:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Visual selector buttons (Left 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 justify-center">
            
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1">
              <span className="text-[10px] font-black text-amber-700 uppercase tracking-wider block">Hai lực lượng cách mạng:</span>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="bg-white border border-stone-250 px-3 py-1.5 rounded-lg font-bold text-xs text-stone-700">
                  Lực lượng chính trị
                </span>
                <span className="bg-white border border-stone-250 px-3 py-1.5 rounded-lg font-bold text-xs text-stone-700">
                  Lực lượng vũ trang
                </span>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-2">
              <span className="text-[10px] font-black text-amber-700 uppercase tracking-wider block">Hai hình thức đấu tranh (Click chọn):</span>
              <div className="flex flex-col gap-2">
                {struggleForms.map((form) => {
                  const isActive = activeForm === form.id;
                  const FormIcon = form.icon;
                  return (
                    <div
                      key={form.id}
                      onClick={() => setActiveForm(form.id)}
                      className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer select-none flex items-center gap-2.5 ${
                        isActive 
                          ? "bg-amber-600 text-white border-amber-600 shadow-sm" 
                          : "bg-white border-stone-200 hover:border-amber-400 hover:bg-stone-100/50 text-stone-700"
                      }`}
                    >
                      <FormIcon className="w-4 h-4 shrink-0" />
                      <div className="text-left">
                        <h6 className="font-bold text-xs leading-none">{form.name}</h6>
                        <span className={`text-[9px] font-medium leading-none block mt-0.5 ${isActive ? "text-amber-100" : "text-stone-400"}`}>
                          {form.role}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Form detail card (Right 7 cols) */}
          <div className="lg:col-span-7 struggle-detail-panel">
            <div className="bg-stone-50 border border-stone-250 rounded-2xl p-5 md:p-6 h-full flex flex-col justify-between min-h-[200px]">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                  <h5 className="font-extrabold text-stone-850 text-xs md:text-sm">
                    {struggleForms[activeForm].name}
                  </h5>
                  <span className="text-[10px] text-amber-700 font-extrabold uppercase tracking-wider">
                    {struggleForms[activeForm].role}
                  </span>
                </div>
                
                <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-medium">
                  {struggleForms[activeForm].detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: FORMULA OF 1945 AUGUST REVOLUTION */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Flame className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            Công thức thắng lợi Cách mạng Tháng Tám (1945) & Sách lược linh hoạt
          </h4>
        </div>

        <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
          Việc xác định và áp dụng hình thức bạo lực đấu tranh không rập khuôn, máy móc mà phải luôn dựa trên <strong>hoàn cảnh lịch sử cụ thể</strong>. Bác dạy rõ:
        </p>

        {/* Uncle Ho Quote flexibility */}
        <div className="relative group overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-amber-500/5 to-amber-605/5 border-l-4 border-amber-600 shadow-sm">
          <Quote className="absolute top-2 left-2 w-12 h-12 text-amber-600/10 -rotate-12 pointer-events-none" />
          <p className="relative z-10 font-serif italic text-stone-850 text-xs md:text-sm leading-relaxed pl-4">
            &quot;Tuỳ tình hình cụ thể mà quyết định những hình thức đấu tranh cách mạng thích hợp, sử dụng đúng và khéo kết hợp các hình thức đấu tranh vũ trang và đấu tranh chính trị để giành thắng lợi cho cách mạng.&quot;
          </p>
        </div>

        {/* 1945 Formula Display Box */}
        <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e1d1a] to-[#141312] border border-[#2a2926] p-6 text-white shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,119,6,0.08),transparent_60%)] pointer-events-none z-0" />
          
          <div className="relative z-10 space-y-4 text-center">
            <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">
              Minh chứng thực tiễn vĩ đại: Cách mạng Tháng Tám 1945
            </span>
            
            {/* Visual Formula layout */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-3.5 my-4">
              <div className="bg-[#2a2926] border border-stone-750 p-4 rounded-xl font-extrabold text-xs md:text-sm text-stone-250 w-full md:w-56 shadow-sm">
                Lực lượng Chính trị quần chúng<br/>
                <span className="text-[10px] text-amber-500 font-bold uppercase">(Vai trò chủ yếu)</span>
              </div>
              
              <span className="text-xl font-bold text-amber-500 font-sans shrink-0">+</span>
              
              <div className="bg-[#2a2926] border border-stone-750 p-4 rounded-xl font-extrabold text-xs md:text-sm text-stone-250 w-full md:w-56 shadow-sm">
                Lực lượng Vũ trang cách mạng<br/>
                <span className="text-[10px] text-amber-500 font-bold uppercase">(Vai trò phối hợp, hỗ trợ)</span>
              </div>

              <span className="text-xl font-bold text-amber-500 font-sans shrink-0">➔</span>

              <div className="bg-amber-600 border border-amber-600 p-4 rounded-xl font-extrabold text-xs md:text-sm text-white w-full md:w-56 shadow-md">
                Tổng khởi nghĩa giành chính quyền<br/>
                <span className="text-[10px] text-amber-100 font-bold uppercase">(Thắng lợi trọn vẹn)</span>
              </div>
            </div>

            <p className="text-stone-300 text-xs md:text-sm leading-relaxed max-w-3xl mx-auto pt-2 border-t border-[#2a2926]">
              Hình thức tổng khởi nghĩa năm 1945 của quần chúng nhân dân cả nước, chủ yếu dựa trên sức mạnh của <strong>lực lượng chính trị</strong> kết hợp khôn khéo với <strong>lực lượng vũ trang</strong>, đã đánh đổ thực dân - phong kiến, đưa toàn bộ chính quyền về tay nhân dân Việt Nam.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
