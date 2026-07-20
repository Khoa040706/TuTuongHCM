"use client";
import React, { useState, useRef } from "react";
import { 
  Quote, 
  Sparkles, 
  Layers, 
  HelpCircle, 
  Users, 
  Heart, 
  BookOpen, 
  ArrowRight,
  ShieldAlert,
  Compass,
  CheckCircle2
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmSocialismConcept() {
  const [activeTab, setActiveTab] = useState("approach"); // approach | comparison | stages
  const [activeDomain, setActiveDomain] = useState("all");
  const [selectedRegime, setSelectedRegime] = useState("new");
  const [activeStage, setActiveStage] = useState("lower");
  
  const containerRef = useRef(null);

  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".animate-fade-in") : document.querySelectorAll(".animate-fade-in");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "power2.out" }
    );
      }
    }
  }, { scope: containerRef, dependencies: [activeTab, activeDomain, selectedRegime, activeStage] });

  // 1. Lĩnh vực tiếp cận
  const domains = [
    {
      id: "all",
      name: "Tất cả",
      desc: "Cách tiếp cận dung dị, mộc mạc của Hồ Chí Minh.",
      details: "Người không đưa ra định nghĩa học thuật hàn lâm phức tạp, mà tiếp cận một cách dung dị, dễ hiểu, dễ nhớ, thông qua các đặc trưng thực tế của từng lĩnh vực đời sống."
    },
    {
      id: "kinh-te",
      name: "Kinh tế",
      desc: "Công bằng, không bóc lột, xóa đói giảm nghèo.",
      details: "Công nhân và nông dân có công ăn việc làm ổn định, lực lượng sản xuất phát triển mạnh mẽ, tư liệu sản xuất chủ yếu thuộc về công hữu."
    },
    {
      id: "chinh-tri",
      name: "Chính trị",
      desc: "Nhân dân lao động thực sự làm chủ đất nước.",
      details: "Quyền lực thuộc về nhân dân, thiết lập nhà nước dân chủ chuyên chính theo nguyên lý mácxít, bảo vệ quyền làm chủ của đa số người lao động."
    },
    {
      id: "van-hoa",
      name: "Văn hóa",
      desc: "Đạo đức cách mạng, lối sống lành mạnh, tiến bộ.",
      details: "Xây dựng nền văn hóa mới lấy con người làm trung tâm, xóa bỏ các tệ nạn, hủ tục, thói ích kỷ của xã hội bóc lột cũ."
    },
    {
      id: "khoa-hoc",
      name: "Khoa học - kỹ thuật",
      desc: "Ứng dụng khoa học hiện đại nâng cao đời sống.",
      details: "Phát triển công nghệ hiện đại, cải tiến phương thức sản xuất từ thủ công lên cơ giới hóa để tăng năng suất và giải phóng lao động."
    },
    {
      id: "nguon-luc",
      name: "Nguồn lực con người",
      desc: "Phát huy tối đa năng lực mỗi cá nhân.",
      details: "Đào tạo con người mới xã hội chủ nghĩa có đức có tài, coi con người là vốn quý nhất của xã hội."
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-stone-50 border border-stone-200/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-full">
            Mục II.1.a
          </span>
          <h3 className="text-xl md:text-2xl font-serif font-black text-stone-900 mt-2">
            Quan niệm của Hồ Chí Minh về Chủ nghĩa Xã hội
          </h3>
          <p className="text-stone-500 text-xs md:text-sm mt-1">
            Tìm hiểu cách tiếp cận dung dị, mộc mạc và bản chất lý luận sâu sắc của Người.
          </p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex bg-stone-200/60 p-1 rounded-xl self-start md:self-center">
          <button
            onClick={() => setActiveTab("approach")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "approach"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Cách tiếp cận
          </button>
          <button
            onClick={() => setActiveTab("comparison")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "comparison"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            So sánh bản chất
          </button>
          <button
            onClick={() => setActiveTab("stages")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "stages"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Các giai đoạn
          </button>
        </div>
      </div>

      {/* 1. TAB CÁCH TIẾP CẬN */}
      {activeTab === "approach" && (
        <div className="space-y-6 animate-fade-in">
          {/* Quote Block */}
          <div className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-amber-600/5 to-orange-600/10 border-l-4 border-amber-600 shadow-sm">
            <Quote className="absolute top-2 left-2 w-16 h-16 text-amber-600/5 -rotate-12 pointer-events-none" />
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 block mb-2">
              Quan niệm cốt lõi mộc mạc của Người
            </span>
            <p className="relative z-10 font-serif italic text-stone-850 text-base md:text-lg leading-relaxed pl-4">
              &quot;Nói một cách tóm tắt, mộc mạc, chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc.&quot;
            </p>
            <div className="mt-3 text-right">
              <span className="text-xs font-bold text-amber-700">— Hồ Chí Minh</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif font-bold text-stone-900 text-sm md:text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Cách tiếp cận dung dị qua từng lĩnh vực
            </h4>
            <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
              Hồ Chí Minh không định nghĩa trực tiếp bằng lý thuyết khô khan, mà chỉ rõ bản chất xã hội chủ nghĩa qua các khía cạnh sinh hoạt thường nhật dễ nhớ:
            </p>
            
            {/* Domain selector */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 pt-2">
              {domains.map((dom) => (
                <button
                  key={dom.id}
                  onClick={() => setActiveDomain(dom.id)}
                  className={`px-2.5 py-2 rounded-xl text-center border text-[11px] font-bold transition-all duration-300 ${
                    activeDomain === dom.id
                      ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                      : "bg-white text-stone-700 border-stone-250 hover:bg-stone-100"
                  }`}
                >
                  {dom.name}
                </button>
              ))}
            </div>

            {/* Selected Domain detail Card */}
            {(() => {
              const selected = domains.find(d => d.id === activeDomain);
              return (
                <div className="mt-4 p-5 rounded-2xl bg-white border border-stone-200 shadow-sm transition-all duration-300">
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block mb-1">
                    Chi tiết lĩnh vực
                  </span>
                  <h5 className="font-bold text-stone-900 text-sm md:text-base mb-2">
                    {selected.name} — {selected.desc}
                  </h5>
                  <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                    {selected.details}
                  </p>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* 2. TAB SO SÁNH BẢN CHẤT */}
      {activeTab === "comparison" && (
        <div className="space-y-6 animate-fade-in">
          <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
            Hồ Chí Minh làm nổi bật bản chất của chủ nghĩa xã hội bằng cách đặt nó trong mối quan hệ so sánh trực diện với chế độ cũ bóc lột:
          </p>

          {/* Regime Switcher cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Chế độ cũ */}
            <div 
              onClick={() => setSelectedRegime("old")}
              className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                selectedRegime === "old"
                  ? "bg-red-500/5 border-red-500/40 shadow-sm ring-1 ring-red-500/20"
                  : "bg-white border-stone-200 hover:border-stone-300 opacity-70 hover:opacity-100"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-red-100 text-red-700">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <h5 className="font-serif font-black text-stone-900 text-sm md:text-base">
                  Chế độ cũ (bóc lột)
                </h5>
              </div>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                Chỉ có lợi ích cá nhân của <strong>thiểu số giai cấp thống trị</strong> được thỏa mãn. Lợi ích của quần chúng lao động bị chà đạp, giày xéo dã man.
              </p>
            </div>

            {/* Chế độ XHCN & CSCN */}
            <div 
              onClick={() => setSelectedRegime("new")}
              className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                selectedRegime === "new"
                  ? "bg-emerald-500/5 border-emerald-500/40 shadow-sm ring-1 ring-emerald-500/20"
                  : "bg-white border-stone-200 hover:border-stone-300 opacity-70 hover:opacity-100"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
                  <Users className="w-4 h-4" />
                </div>
                <h5 className="font-serif font-black text-stone-900 text-sm md:text-base">
                  Chế độ XHCN & CSCN
                </h5>
              </div>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                Do <strong>nhân dân lao động làm chủ</strong>. Mỗi người là một phần của tập thể, đóng góp xứng đáng và giữ vị trí nhất định trong xã hội.
              </p>
            </div>
          </div>

          {/* Relation box */}
          <div className="p-5 rounded-2xl bg-stone-100 border border-stone-250 space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-stone-600 block">
              Mối quan hệ biện chứng Cá nhân - Tập thể
            </span>
            <div className="flex items-start gap-3">
              <span className="text-amber-700 font-bold text-lg leading-none">→</span>
              <p className="text-stone-850 font-serif italic text-sm md:text-base leading-relaxed">
                &quot;Lợi ích cá nhân nằm trong lợi ích tập thể. Chỉ khi lợi ích chung của tập thể được bảo đảm thì lợi ích riêng của cá nhân mới có điều kiện thỏa mãn.&quot;
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 3. TAB CÁC GIAI ĐOẠN */}
      {activeTab === "stages" && (
        <div className="space-y-6 animate-fade-in">
          <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
            Hồ Chí Minh vạch rõ mục tiêu lâu dài của cách mạng Việt Nam: Tiến lên <strong>Chủ nghĩa Xã hội (CNXH)</strong>, rồi đến <strong>Chủ nghĩa Cộng sản (CNCS)</strong>. Đây là hai giai đoạn phát triển nối tiếp nhau:
          </p>

          {/* Stage Switcher buttons */}
          <div className="flex border-b border-stone-200">
            <button
              onClick={() => setActiveStage("lower")}
              className={`pb-2.5 px-4 text-xs font-extrabold border-b-2 transition-all duration-300 ${
                activeStage === "lower"
                  ? "border-amber-600 text-amber-700"
                  : "border-transparent text-stone-500 hover:text-stone-800"
              }`}
            >
              Giai đoạn thấp: Chủ nghĩa Xã hội
            </button>
            <button
              onClick={() => setActiveStage("higher")}
              className={`pb-2.5 px-4 text-xs font-extrabold border-b-2 transition-all duration-300 ${
                activeStage === "higher"
                  ? "border-amber-600 text-amber-700"
                  : "border-transparent text-stone-500 hover:text-stone-800"
              }`}
            >
              Giai đoạn cao: Chủ nghĩa Cộng sản
            </button>
          </div>

          {/* Similarities & Differences list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Giống nhau (Always visible, fits both stages) */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200">
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block mb-3">
                Điểm giống nhau giữa 2 giai đoạn
              </span>
              <ul className="space-y-2.5 text-stone-700 text-xs md:text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sức sản xuất xã hội phát triển ở mức cao.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Nền tảng kinh tế: Tư liệu sản xuất đều thuộc về của chung.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Không còn giai cấp áp bức, bóc lột con người.</span>
                </li>
              </ul>
            </div>

            {/* Khác nhau (Dynamic based on selected stage) */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200">
              <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block mb-3">
                Đặc trưng riêng của giai đoạn
              </span>
              {activeStage === "lower" ? (
                <div className="space-y-3">
                  <p className="text-stone-700 text-xs md:text-sm">
                    <strong>Chủ nghĩa Xã hội:</strong> Vẫn còn ít vết tích, tàn dư của xã hội cũ để lại trong lối sống, tư duy và tổ chức xã hội.
                  </p>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-50 text-[10px] font-bold text-amber-700 uppercase">
                    Giai đoạn đầu của xã hội CSCN
                  </span>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-stone-700 text-xs md:text-sm">
                    <strong>Chủ nghĩa Cộng sản:</strong> Phát triển hoàn thiện vượt bậc, hoàn toàn không còn bất kỳ vết tích hay tàn dư nào của xã hội cũ bóc lột.
                  </p>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-50 text-[10px] font-bold text-amber-700 uppercase">
                    Đỉnh cao phát triển loài người
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Conclusion */}
          <div className="relative overflow-hidden p-5 rounded-2xl bg-stone-900 text-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest">
                Kết luận tổng kết
              </span>
              <h5 className="font-serif font-black text-sm md:text-base">
                Theo HCM, xã hội XHCN là giai đoạn đầu của xã hội CSCN:
              </h5>
              <p className="text-stone-300 text-xs leading-relaxed max-w-xl">
                Tuy còn tồn đọng tàn dư nhưng đã hoàn toàn sạch bóng áp bức, bóc lột. Nhân dân lao động làm chủ, sống ấm no, hạnh phúc, tự do và thống nhất biện chứng quyền lợi cá nhân - tập thể.
              </p>
            </div>
            
            <div className="p-3 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/25 shrink-0 self-start md:self-center">
              <Heart className="w-6 h-6 animate-pulse" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
