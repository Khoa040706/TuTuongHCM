"use client";
import React, { useState, useRef } from "react";
import { 
  BookOpen, 
  Layers, 
  MessageSquare, 
  ShieldAlert, 
  RefreshCcw, 
  Users, 
  Globe, 
  Sparkles, 
  Quote, 
  ChevronDown,
  ChevronUp,
  Heart,
  CheckCircle2
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HcmTwelveArticles from "./HcmTwelveArticles";

export default function HcmPartyPrinciples() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMemoryExpanded, setIsMemoryExpanded] = useState(false);
  const containerRef = useRef(null);

  const principles = [
    { 
      id: "01",
      title: "Nền tảng tư tưởng", 
      shortDesc: "Chủ nghĩa Mác - Lênin là kim chỉ nam",
      icon: BookOpen,
      badgeBg: "bg-red-100 text-red-700 border-red-200",
      activeBg: "bg-red-600 text-white border-red-600 shadow-lg shadow-red-600/20",
      activeBorder: "border-red-600",
      iconColor: "text-red-600",
      accentText: "text-red-700",
      bgLight: "bg-red-50/60 border-red-100"
    },
    { 
      id: "02",
      title: "Tập trung dân chủ", 
      shortDesc: "Nguyên tắc tổ chức cơ bản của Đảng",
      icon: Layers,
      badgeBg: "bg-blue-100 text-blue-700 border-blue-200",
      activeBg: "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20",
      activeBorder: "border-blue-600",
      iconColor: "text-blue-600",
      accentText: "text-blue-700",
      bgLight: "bg-blue-50/60 border-blue-100"
    },
    { 
      id: "03",
      title: "Tự phê bình & phê bình", 
      shortDesc: "Rửa mặt hằng ngày, thang thuốc tốt nhất",
      icon: MessageSquare,
      badgeBg: "bg-amber-100 text-amber-800 border-amber-200",
      activeBg: "bg-amber-600 text-white border-amber-600 shadow-lg shadow-amber-600/20",
      activeBorder: "border-amber-600",
      iconColor: "text-amber-600",
      accentText: "text-amber-800",
      bgLight: "bg-amber-50/60 border-amber-100"
    },
    { 
      id: "04",
      title: "Kỷ luật nghiêm minh", 
      shortDesc: "Kỷ luật sắt bắt nguồn từ lòng tự giác",
      icon: ShieldAlert,
      badgeBg: "bg-emerald-100 text-emerald-800 border-emerald-200",
      activeBg: "bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/20",
      activeBorder: "border-emerald-600",
      iconColor: "text-emerald-600",
      accentText: "text-emerald-800",
      bgLight: "bg-emerald-50/60 border-emerald-100"
    },
    { 
      id: "05",
      title: "Thường xuyên tự chỉnh đốn", 
      shortDesc: "Công việc cấp bách xây dựng Đảng trong sạch",
      icon: RefreshCcw,
      badgeBg: "bg-purple-100 text-purple-800 border-purple-200",
      activeBg: "bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-600/20",
      activeBorder: "border-purple-600",
      iconColor: "text-purple-600",
      accentText: "text-purple-800",
      bgLight: "bg-purple-50/60 border-purple-100"
    },
    { 
      id: "06",
      title: "Đoàn kết, thống nhất", 
      shortDesc: "Giữ gìn như con ngươi của mắt mình",
      icon: Users,
      badgeBg: "bg-cyan-100 text-cyan-800 border-cyan-200",
      activeBg: "bg-cyan-600 text-white border-cyan-600 shadow-lg shadow-cyan-600/20",
      activeBorder: "border-cyan-600",
      iconColor: "text-cyan-600",
      accentText: "text-cyan-800",
      bgLight: "bg-cyan-50/60 border-cyan-100"
    },
    { 
      id: "07",
      title: "Dân chúng & Quốc tế", 
      shortDesc: "Mối quan hệ máu thịt & Quốc tế vô sản",
      icon: Globe,
      badgeBg: "bg-rose-100 text-rose-800 border-rose-200",
      activeBg: "bg-rose-600 text-white border-rose-600 shadow-lg shadow-rose-600/20",
      activeBorder: "border-rose-600",
      iconColor: "text-rose-600",
      accentText: "text-rose-800",
      bgLight: "bg-rose-50/60 border-rose-100"
    }
  ];

  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".principles-panel-node") : document.querySelectorAll(".principles-panel-node");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
      }
    }
  }, { dependencies: [activeTab], scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-2 select-text font-sans bg-transparent space-y-8">
      
      {/* SECTION 1: HEADER BLOCK */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
            📜 Mục I.2.b
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="text-xs text-stone-500 font-bold font-sans">Những vấn đề nguyên tắc trong hoạt động của Đảng</span>
        </div>
        <h4 className="text-xl md:text-2xl font-black font-playfair tracking-tight mb-2 text-stone-900 leading-tight">
          NHỮNG VẤN ĐỀ NGUYÊN TẮC TRONG HOẠT ĐỘNG CỦA ĐẢNG
        </h4>
        <p className="text-stone-700 text-sm md:text-base leading-relaxed text-justify">
          Hồ Chí Minh đặc biệt nhấn mạnh các nguyên tắc cốt lõi giúp Đảng Cộng sản Việt Nam giữ vững vai trò tiền phong, giữ gìn bản chất cách mạng, luôn trong sạch, vững mạnh và liên hệ mật thiết với nhân dân. Hãy click chọn từng nguyên tắc trong **7 Thẻ Nguyên Tắc** dưới đây để xem phân tích chi tiết:
        </p>
      </div>

      {/* SECTION 2: 7-CARD INTERACTIVE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 select-none">
        {principles.map((p, idx) => {
          const Icon = p.icon;
          const isActive = idx === activeTab;
          return (
            <button
              key={p.id}
              onClick={() => setActiveTab(idx)}
              className={`flex flex-col justify-between p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer outline-none relative overflow-hidden group ${
                isActive 
                  ? `${p.activeBg} scale-[1.02]` 
                  : "bg-white hover:bg-stone-50/80 border-stone-200/90 text-stone-800 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Top Row: Badge ID & Icon */}
              <div className="flex items-center justify-between w-full mb-3">
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-black tracking-wider uppercase border ${
                  isActive ? "bg-white/20 text-white border-white/30" : p.badgeBg
                }`}>
                  {p.id}
                </span>
                <Icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                  isActive ? "text-white" : p.iconColor
                }`} />
              </div>

              {/* Title & Short Description */}
              <div className="space-y-1">
                <h5 className={`font-bold text-xs md:text-sm tracking-tight leading-snug ${
                  isActive ? "text-white" : "text-stone-900"
                }`}>
                  {p.title}
                </h5>
                <p className={`text-[11px] leading-relaxed line-clamp-2 ${
                  isActive ? "text-white/90" : "text-stone-500"
                }`}>
                  {p.shortDesc}
                </p>
              </div>

              {/* Active Indicator Bar */}
              {isActive && (
                <div className="w-full h-1 bg-white/40 rounded-full mt-3 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* SECTION 3: TAB CONTENT PANELS */}
      <div className="principles-panel-node bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-[0_6px_25px_rgba(0,0,0,0.03)] min-h-[300px] transition-all duration-300">
        
        {/* TAB 1: NỀN TẢNG TƯ TƯỞNG */}
        {activeTab === 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
              <span className="w-8 h-8 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-black text-xs shrink-0">
                01
              </span>
              <h5 className="text-base md:text-lg font-black font-playfair text-stone-900">
                Đảng lấy chủ nghĩa Mác - Lênin làm nền tảng tư tưởng và kim chỉ nam cho hành động
              </h5>
            </div>

            <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
              Đây là nguyên tắc hàng đầu, quyết định bản chất giai cấp vô sản của Đảng ta. Trong tác phẩm lý luận kinh điển đặt nền móng đầu tiên cho Đảng — <strong>Đường cách mệnh (1927)</strong>, Nguyễn Ái Quốc khẳng định sâu sắc vị thế của lý luận cách mạng:
            </p>

            {/* Quote Card */}
            <div className="relative overflow-hidden rounded-2xl bg-red-50/60 border-l-4 border-red-600 p-5 shadow-sm">
              <Quote className="absolute top-2 left-2 w-10 h-10 text-red-600 opacity-10 pointer-events-none z-0" />
              <div className="relative z-10 space-y-3 pl-4">
                <p className="font-playfair italic text-stone-800 text-xs md:text-sm leading-relaxed text-justify">
                  &quot;Đảng muốn vững thì phải có chủ nghĩa làm cốt, trong đảng ai cũng phải hiểu, ai cũng phải theo chủ nghĩa ấy. Đảng mà không có chủ nghĩa cũng như người không có trí khôn, tàu không có bàn chỉ nam. Bây giờ học thuyết nhiều, chủ nghĩa nhiều, nhưng chủ nghĩa chân chính nhất, chắc chắn nhất, cách mệnh nhất là chủ nghĩa Lênin.&quot;
                </p>
                <div className="flex items-center justify-end text-[10px] font-semibold text-red-700 font-sans tracking-wide">
                  <span>— Nguyễn Ái Quốc, tác phẩm &quot;Đường cách mệnh&quot; (1927)</span>
                </div>
              </div>
            </div>

            <div className="bg-stone-50/70 p-5 rounded-2xl border border-stone-200/60 text-stone-700 text-xs md:text-sm leading-relaxed text-justify space-y-3">
              <p>
                Hồ Chí Minh luôn nhấn mạnh Đảng phải tuyệt đối trung thành với chủ nghĩa Mác - Lênin. Tuy nhiên, đi đôi với sự trung thành, Người yêu cầu Đảng phải luôn luôn <strong>sáng tạo, vận dụng linh hoạt</strong> cho phù hợp với hoàn cảnh lịch sử cụ thể, từng lúc, từng nơi của đất nước, <strong>không được phép giáo điều</strong>, rập khuôn máy móc.
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: TẬP TRUNG DÂN CHỦ */}
        {activeTab === 1 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
              <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0">
                02
              </span>
              <h5 className="text-base md:text-lg font-black font-playfair text-stone-900">
                Tập trung dân chủ — Nguyên tắc tổ chức cơ bản của Đảng
              </h5>
            </div>

            <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
              Đây là nguyên tắc tổ chức cơ bản nhất của một Đảng kiểu mới. Hồ Chí Minh đưa ra hai luận đề có mối liên hệ mật thiết biện chứng không thể tách rời:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-blue-50/50 border-l-4 border-blue-600 rounded-2xl p-5 hover:shadow-sm transition-all duration-300">
                <h6 className="font-bold text-stone-900 text-xs md:text-sm mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  Tập trung trên nền tảng dân chủ
                </h6>
                <p className="text-stone-600 text-xs leading-relaxed text-justify">
                  Tập trung không phải độc đoán chuyên quyền. Phải làm cho tất cả mọi đảng viên được bày tỏ hết ý kiến của mình ở trong Đảng — khơi dậy tinh thần trách nhiệm và tính tích cực chủ động của tất cả đảng viên.
                </p>
              </div>

              <div className="bg-blue-50/50 border-l-4 border-blue-600 rounded-2xl p-5 hover:shadow-sm transition-all duration-300">
                <h6 className="font-bold text-stone-900 text-xs md:text-sm mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  Dân chủ phải đi đến tập trung
                </h6>
                <p className="text-stone-600 text-xs leading-relaxed text-justify">
                  Khi đã thảo luận tự do, bày tỏ ý kiến rồi thì phải đi đến tập trung, tức là ý chí thống nhất, hành động thống nhất. Lúc ấy, quyền tự do của đảng viên trở thành quyền phục tùng chân lý — chân lý là những điều có lợi cho dân, cho nước.
                </p>
              </div>
            </div>

            {/* Collective leadership vs individual responsibility */}
            <div className="bg-stone-50/70 border border-stone-200/60 p-5 rounded-2xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
                  Tập thể lãnh đạo & Cá nhân phụ trách
                </span>
              </div>
              
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
                Đối với tập thể lãnh đạo và cá nhân phụ trách, Hồ Chí Minh coi <strong>tập thể lãnh đạo là dân chủ, cá nhân phụ trách là tập trung</strong>. Người chỉ rõ hai điều cần tránh:
              </p>

              <ul className="list-disc list-inside space-y-2.5 pl-2 text-stone-600 text-xs md:text-sm">
                <li className="text-justify"><strong className="text-stone-800">Một là độc đoán, chuyên quyền:</strong> Coi thường tập thể, tự ý quyết định mọi công việc theo ý chí chủ quan cá nhân.</li>
                <li className="text-justify"><strong className="text-stone-800">Hai là dựa dẫm tập thể:</strong> Không dám quyết đoán, trốn tránh trách nhiệm cá nhân, đùn đẩy mọi việc cho tập thể.</li>
              </ul>
              
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify font-bold italic pt-1 border-t border-stone-200/60">
                → Hai vế này phải luôn luôn song hành và đi đôi với nhau. Điều kiện tiên quyết để thực hiện nguyên tắc này là tổ chức Đảng phải thực sự trong sạch, vững mạnh.
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: TỰ PHÊ BÌNH VÀ PHÊ BÌNH */}
        {activeTab === 2 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
              <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-xs shrink-0">
                03
              </span>
              <h5 className="text-base md:text-lg font-black font-playfair text-stone-900">
                Tự phê bình và phê bình — Thang thuốc tốt nhất
              </h5>
            </div>

            <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
              Đây là quy luật tồn tại và phát triển của Đảng. Người coi đây là công việc phải làm thường xuyên, liên tục, liên hệ trực tiếp với đời sống sinh hoạt hằng ngày:
            </p>

            {/* Quote Card */}
            <div className="relative overflow-hidden rounded-2xl bg-amber-50/60 border-l-4 border-amber-600 p-5 shadow-sm">
              <Quote className="absolute top-2 left-2 w-10 h-10 text-amber-600 opacity-10 pointer-events-none z-0" />
              <div className="relative z-10 space-y-3 pl-4">
                <p className="font-playfair italic text-stone-800 text-xs md:text-sm leading-relaxed text-justify">
                  &quot;Tự phê bình, tự kiểm điểm, tự sửa chữa là việc làm thường xuyên, như mỗi ngày phải rửa mặt. Tự phê bình và phê bình là thang thuốc tốt nhất để làm cho phần tốt trong mỗi tổ chức và mỗi con người nảy nở như hoa mùa xuân và phần xấu bị mất dần đi.&quot;
                </p>
                <div className="flex items-center justify-end text-[10px] font-semibold text-amber-800 font-sans tracking-wide">
                  <span>— Lời dạy của Chủ tịch Hồ Chí Minh</span>
                </div>
              </div>
            </div>

            <div className="bg-stone-50/70 border border-stone-200/60 p-5 rounded-2xl text-stone-700 text-xs md:text-sm leading-relaxed space-y-3">
              <h6 className="font-bold text-stone-900">Cách thức tiến hành tự phê bình và phê bình:</h6>
              <ul className="list-disc list-inside space-y-2 pl-2 text-stone-600">
                <li className="text-justify">Phải tiến hành một cách <strong>trung thực, chân thành, khách quan</strong>, không nể nang, né tránh.</li>
                <li className="text-justify">Phải <strong>kiên quyết, đúng người, đúng việc</strong>, không lợi dụng phê bình để công kích cá nhân hay hạ bệ đồng chí.</li>
                <li className="text-justify">Tiến hành phải <strong>có văn hóa</strong>, trên tinh thần tôn trọng và xây dựng lẫn nhau.</li>
              </ul>
            </div>

            {/* Quote Card Di chúc */}
            <div className="relative overflow-hidden rounded-2xl bg-amber-50/60 border-l-4 border-amber-600 p-5 shadow-sm">
              <Quote className="absolute top-2 left-2 w-10 h-10 text-amber-600 opacity-10 pointer-events-none z-0" />
              <div className="relative z-10 space-y-3 pl-4">
                <p className="font-playfair italic text-stone-800 text-xs md:text-sm leading-relaxed text-justify">
                  &quot;Trong Đảng thực hành dân chủ rộng rãi, thường xuyên và nghiêm chỉnh tự phê bình và phê bình là cách tốt nhất để củng cố và phát triển sự đoàn kết và thống nhất của Đảng. Phải có tình đồng chí thương yêu lẫn nhau.&quot;
                </p>
                <div className="flex items-center justify-end text-[10px] font-semibold text-amber-800 font-sans tracking-wide">
                  <span>— Trích bản Di chúc thiêng liêng (1969)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: KỶ LUẬT NGHIÊM MINH, TỰ GIÁC */}
        {activeTab === 3 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
              <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xs shrink-0">
                04
              </span>
              <h5 className="text-base md:text-lg font-black font-playfair text-stone-900">
                Kỷ luật nghiêm minh, tự giác — Sức mạnh nội sinh của Đảng
              </h5>
            </div>

            <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
              Hồ Chí Minh nhấn mạnh bản chất kỷ luật của Đảng Cộng sản khác biệt hoàn toàn với các tổ chức chính trị thông thường khác:
            </p>

            {/* Quote Card */}
            <div className="relative overflow-hidden rounded-2xl bg-emerald-50/60 border-l-4 border-emerald-600 p-5 shadow-sm">
              <Quote className="absolute top-2 left-2 w-10 h-10 text-emerald-600 opacity-10 pointer-events-none z-0" />
              <div className="relative z-10 space-y-3 pl-4">
                <p className="font-playfair italic text-stone-800 text-xs md:text-sm leading-relaxed text-justify">
                  &quot;Đảng tổ chức rất nghiêm, khác với các đảng phái khác và các hội quần chúng. Trong Đảng chỉ kết nạp những phần tử hăng hái nhất, cách mạng nhất. Đảng có những điều kiện kỷ luật bắt buộc mỗi đảng viên phải theo. Không có kỷ luật sắt không có Đảng. Đã vào Đảng thì phải theo tư tưởng của Đảng. Đảng đã chỉ thị nghị quyết là phải làm. Không làm thì đuổi ra khỏi Đảng.&quot;
                </p>
                <div className="flex items-center justify-end text-[10px] font-semibold text-emerald-800 font-sans tracking-wide">
                  <span>— Lời dạy của Chủ tịch Hồ Chí Minh</span>
                </div>
              </div>
            </div>

            <div className="bg-stone-50/70 border border-stone-200/60 p-5 rounded-2xl text-stone-700 text-xs md:text-sm leading-relaxed space-y-3 text-justify">
              <p>
                Sức mạnh của một đảng cộng sản bắt nguồn từ <strong>kỷ luật thống nhất</strong>, muôn người như một, cùng chung một ý chí và hành động. Bác ví von rằng Đảng ta tuy đông người nhưng khi tiền đánh thì chỉ như <strong>một người</strong> — điều đó có được hoàn toàn nhờ trong Đảng có kỷ luật vững vàng.
              </p>
              <p>
                Kỷ luật này phải được giữ gìn cực kỳ nghiêm chỉnh từ trên xuống dưới, không có vùng cấm, không có ngoại lệ. Đồng thời, kỷ luật đó bắt nguồn từ <strong>lòng tự giác</strong> của đảng viên về nhiệm vụ của họ đối với Đảng. Khi đã có sự tự giác, kỷ luật của Đảng mới trở nên nghiêm minh và bền vững lâu dài.
              </p>
            </div>
          </div>
        )}

        {/* TAB 5: THƯỜNG XUYÊN TỰ CHỈNH ĐỐN */}
        {activeTab === 4 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
              <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-black text-xs shrink-0">
                05
              </span>
              <h5 className="text-base md:text-lg font-black font-playfair text-stone-900">
                Đảng phải thường xuyên tự chỉnh đốn
              </h5>
            </div>

            <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
              Hồ Chí Minh chỉ rõ quyền lực của Đảng là do giai cấp công nhân, nhân dân lao động và toàn thể dân tộc giao phó. Đảng <strong>không có mục đích tự thân</strong>, không phải là một tổ chức làm quan phát tài mà từ trong xã hội mà ra, hoạt động vì Tổ quốc giàu mạnh, đồng bào sung sướng. Do đó, thường xuyên tự chỉnh đốn trở thành một nhiệm vụ cực kỳ quan trọng trong công tác xây dựng Đảng.
            </p>

            {/* Embedded 12 Articles Grid Component */}
            <HcmTwelveArticles />

            {/* Di chúc Quote */}
            <div className="relative overflow-hidden rounded-2xl bg-purple-50/60 border-l-4 border-purple-600 p-5 shadow-sm">
              <Quote className="absolute top-2 left-2 w-10 h-10 text-purple-600 opacity-10 pointer-events-none z-0" />
              <div className="relative z-10 space-y-3 pl-4">
                <p className="font-playfair italic text-stone-800 text-xs md:text-sm leading-relaxed text-justify">
                  &quot;Ngay sau khi cuộc kháng chiến chống Mỹ, cứu nước của nhân dân ta hoàn toàn thắng lợi, việc cần phải làm trước tiên là chỉnh đốn lại Đảng, làm cho mỗi đảng viên, mỗi đoàn viên, mỗi chi bộ đều ra sức làm tròn nhiệm vụ đảng giao phó cho mình, toàn tâm toàn ý phục vụ nhân dân. Làm được như vậy, thì dù công việc to lớn mấy, khó khăn mấy chúng ta cũng nhất định thắng lợi.&quot;
                </p>
                <div className="flex items-center justify-end text-[10px] font-semibold text-purple-800 font-sans tracking-wide">
                  <span>— Di chúc Hồ Chí Minh (1969)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: ĐOÀN KẾT, THỐNG NHẤT TRONG ĐẢNG */}
        {activeTab === 5 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
              <span className="w-8 h-8 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-black text-xs shrink-0">
                06
              </span>
              <h5 className="text-base md:text-lg font-black font-playfair text-stone-900">
                Đoàn kết, thống nhất trong Đảng — Hạt nhân của đại đoàn kết
              </h5>
            </div>

            <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
              Đoàn kết là sinh mệnh của Đảng, là gốc rễ tạo nên sức mạnh vô địch của cách mạng. Đoàn kết trong Đảng là điều kiện tiên quyết để xây dựng khối đại đoàn kết toàn dân tộc; và phải được nhất trí trên cơ sở chủ nghĩa Mác - Lênin, trên cương lĩnh, đường lối, quan điểm, nghị quyết của Đảng.
            </p>

            {/* Di chúc Quote */}
            <div className="relative overflow-hidden rounded-2xl bg-cyan-50/60 border-l-4 border-cyan-600 p-5 shadow-sm">
              <Quote className="absolute top-2 left-2 w-10 h-10 text-cyan-600 opacity-10 pointer-events-none z-0" />
              <div className="relative z-10 space-y-3 pl-4">
                <p className="font-playfair italic text-stone-800 text-xs md:text-sm leading-relaxed text-justify">
                  &quot;Nhờ đoàn kết chặt chẽ, một lòng một dạ phục vụ giai cấp, phục vụ nhân dân, phục vụ Tổ quốc, cho nên từ ngày thành lập đến nay, Đảng ta đã đoàn kết, tổ chức và lãnh đạo nhân dân ta hăng hái đấu tranh tiến từ thắng lợi này đến thắng lợi khác. Đoàn kết là một truyền thống cực kỳ quý báu của Đảng và của dân tộc ta. Các đồng chí từ Trung ương đến các chi bộ cần phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình.&quot;
                </p>
                <div className="flex items-center justify-end text-[10px] font-semibold text-cyan-800 font-sans tracking-wide">
                  <span>— Di chúc Hồ Chí Minh (1969)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: DÂN CHÚNG & QUỐC TẾ */}
        {activeTab === 6 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
              <span className="w-8 h-8 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-black text-xs shrink-0">
                07
              </span>
              <h5 className="text-base md:text-lg font-black font-playfair text-stone-900">
                Mối quan hệ mật thiết với nhân dân & Đoàn kết quốc tế
              </h5>
            </div>

            <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
              Nguyên tắc này thể hiện bản chất dân chủ và tinh thần nhân văn quốc tế sâu sắc trong tư tưởng Hồ Chí Minh:
            </p>

            {/* Subsection 7a */}
            <div className="bg-stone-50/70 p-5 rounded-2xl border border-stone-200/60 space-y-4">
              <div className="flex items-center gap-2">
                <Heart className="w-4.5 h-4.5 text-rose-600" />
                <h6 className="font-bold text-stone-900 text-sm">7a. Đảng phải liên hệ mật thiết với nhân dân</h6>
              </div>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed text-justify">
                Đảng Cộng sản Việt Nam là một bộ phận của toàn thể dân tộc Việt Nam. Mối quan hệ giữa Đảng với quần chúng nhân dân là mối quan hệ khăng khít, máu thịt, là nhân tố quyết định mọi thắng lợi cách mạng.
              </p>
              
              {/* Quotes for 7a */}
              <div className="relative overflow-hidden rounded-xl bg-white border border-stone-200 p-4 space-y-2">
                <p className="font-playfair italic text-stone-800 text-xs leading-relaxed text-justify">
                  &quot;Đảng không phải từ trên trời sa xuống. Nó ở trong xã hội mà ra. Đảng không phải một tổ chức để làm quan phát tài. Nó phải làm tròn nhiệm vụ giải phóng dân tộc, làm cho Tổ quốc giàu mạnh, đồng bào sung sướng. Ngoài lợi ích của dân tộc, của Tổ quốc, thì Đảng không có lợi ích gì khác. Đảng ta là một đảng cách mạng, một đảng vì dân, vì nước.&quot;
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl bg-white border border-stone-200 p-4 space-y-2">
                <p className="font-playfair italic text-stone-800 text-xs leading-relaxed text-justify">
                  &quot;Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì. Chúng ta tranh được tự do, độc lập rồi mà dân cứ chết đói, chết rét, thì tự do, độc lập cũng không làm gì. Dân chỉ biết rõ giá trị của tự do, của độc lập khi mà dân được ăn no, mặc đủ.&quot; (1945)
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl bg-white border border-stone-200 p-4 space-y-2">
                <p className="font-playfair italic text-stone-800 text-xs leading-relaxed text-justify">
                  &quot;Đảng không phải làm quan, sai khiến quần chúng mà phải làm đầy tớ cho quần chúng và phải làm cho ra trò, nếu không quần chúng sẽ đá đít.&quot; (10/5/1950)
                </p>
              </div>

              <div className="text-stone-600 text-xs md:text-sm leading-relaxed text-justify space-y-2.5 pt-2 border-t border-stone-100">
                <p>
                  Đảng viên tuyệt đối không được có tư tưởng <strong>&quot;vác mặt quan cách mạng&quot;</strong>, xâm phạm quyền làm chủ của nhân dân. Đảng viên không được <strong>&quot;ăn cỗ đi trước, lội nước đi sau&quot;</strong>, mà phải luôn hòa mình vào quần chúng để học hỏi quần chúng nhưng không được phép <strong>&quot;theo đuôi quần chúng&quot;</strong>, phải nâng cao nhận thức dân chúng để hướng dẫn họ đấu tranh.
                </p>
              </div>
            </div>

            {/* Subsection 7b */}
            <div className="bg-stone-50/70 p-5 rounded-2xl border border-stone-200/60 space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4.5 h-4.5 text-rose-600" />
                <h6 className="font-bold text-stone-900 text-sm">7b. Đoàn kết quốc tế</h6>
              </div>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed text-justify">
                Đảng phải chú trọng giữ vững và tăng cường mối quan hệ quốc tế trong sáng. Hồ Chí Minh coi cách mạng Việt Nam là một bộ phận khăng khít của phong trào cách mạng vô sản thế giới.
              </p>
              
              <div className="relative overflow-hidden rounded-xl bg-white border border-stone-200 p-4">
                <p className="font-playfair italic text-stone-800 text-xs leading-relaxed text-justify">
                  &quot;Trong Di chúc, Người mong Đảng sẽ ra sức hoạt động, góp phần đắc lực vào việc khôi phục lại khối đoàn kết giữa các đảng anh em trên nền tảng chủ nghĩa Mác - Lênin và chủ nghĩa quốc tế vô sản, có lý có tình.&quot;
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* SECTION 4: COLLAPSIBLE GHI NHỚ VÀ TỪ KHÓA ÔN THI */}
      <div className="space-y-4 pt-4 border-t border-stone-200">
        
        {/* Collapsible Trigger button */}
        <button
          onClick={() => setIsMemoryExpanded(!isMemoryExpanded)}
          className="w-full flex items-center justify-between p-5 rounded-2xl bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/20 text-amber-800 transition-all duration-300 cursor-pointer outline-none"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-600 animate-pulse" />
            <h5 className="font-extrabold text-xs md:text-sm uppercase tracking-wider text-left">
              💡 GHI NHỚ & TỪ KHÓA ÔN THI (Mục 2b)
            </h5>
          </div>
          {isMemoryExpanded ? <ChevronUp className="w-5 h-5 shrink-0" /> : <ChevronDown className="w-5 h-5 shrink-0" />}
        </button>

        {/* Collapsible Panel Content */}
        {isMemoryExpanded && (
          <div className="space-y-5 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* GHI NHỚ BOX */}
            <div className="p-6 rounded-2xl bg-amber-500/5 border-l-4 border-amber-500 shadow-sm space-y-3.5">
              <ul className="space-y-3 text-stone-700 text-xs md:text-sm">
                <li className="flex items-start gap-2 text-justify">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
                  <span><strong>7 nguyên tắc cốt lõi:</strong> (1) Chủ nghĩa Mác-Lênin làm nền tảng; (2) Tập trung dân chủ; (3) Tự phê bình và phê bình; (4) Kỷ luật nghiêm minh, tự giác; (5) Thường xuyên tự chỉnh đốn; (6) Đoàn kết thống nhất; (7) Liên hệ mật thiết với nhân dân và đoàn kết quốc tế.</span>
                </li>
                <li className="flex items-start gap-2 text-justify">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
                  <span><strong>Câu kinh điển về chủ nghĩa làm cốt:</strong> &quot;Đảng muốn vững thì phải có chủ nghĩa làm cốt... học thuyết nhiều nhưng chủ nghĩa chân chính nhất, chắc chắn nhất, cách mệnh nhất là chủ nghĩa Lênin.&quot;</span>
                </li>
                <li className="flex items-start gap-2 text-justify">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
                  <span><strong>Ý nghĩa ẩn dụ của tự phê bình:</strong> Người ví tự phê bình & phê bình giống như &quot;rửa mặt hằng ngày&quot; và là &quot;thang thuốc tốt nhất&quot; để loại bỏ phần xấu, phát huy phần tốt.</span>
                </li>
                <li className="flex items-start gap-2 text-justify">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
                  <span><strong>Nguyên tắc tổ chức:</strong> Tập trung dân chủ và tập thể lãnh đạo (dân chủ) kết hợp cá nhân phụ trách (tập trung). Tránh độc đoán chuyên quyền và tránh dựa dẫm đùn đẩy trách nhiệm.</span>
                </li>
                <li className="flex items-start gap-2 text-justify">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
                  <span><strong>Mối liên hệ nhân dân:</strong> &quot;Đảng không phải từ trên trời sa xuống...&quot;, &quot;nếu nước độc lập mà dân chết đói thì độc lập chẳng có nghĩa lý gì&quot;. Đảng là đầy tớ trung thành của nhân dân, coi trọng chữ <strong>TÍN</strong> trong công tác quần chúng.</span>
                </li>
              </ul>
            </div>

            {/* TỪ KHÓA BOX */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <h5 className="font-extrabold text-xs md:text-sm text-stone-800 uppercase tracking-wider">
                📋 TỪ KHÓA ÔN THI
              </h5>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Chủ nghĩa làm cốt",
                  "Không giáo điều",
                  "Tập trung dân chủ",
                  "Tập thể lãnh đạo - Cá nhân phụ trách",
                  "Rửa mặt hằng ngày",
                  "Thang thuốc tốt nhất",
                  "Kỷ luật sắt",
                  "Lòng tự giác của đảng viên",
                  "Đầy tớ trung thành",
                  "Ăn cỗ đi trước - Lội nước đi sau",
                  "Đoàn kết như giữ gìn con ngươi của mắt mình",
                  "Có lý có tình"
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
        )}

      </div>

    </div>
  );
}
