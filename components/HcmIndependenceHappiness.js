"use client";
import React, { useState, useRef } from "react";
import { 
  Sparkles, 
  Heart,
  Quote, 
  FileText, 
  Check, 
  Award,
  BookOpen,
  Anchor,
  Compass,
  ArrowRight,
  Utensils,
  Shirt,
  Home,
  GraduationCap
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmIndependenceHappiness() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTask, setHoveredTask] = useState(null);
  const containerRef = useRef(null);

  const tabs = [
    { 
      title: "Triết lý Độc lập & Tự do", 
      icon: Compass,
      accent: "from-amber-600 to-amber-700"
    },
    { 
      title: "Chánh cương vắn tắt (1930)", 
      icon: BookOpen,
      accent: "from-orange-600 to-amber-800"
    },
    { 
      title: "Chăm lo dân sinh (1945)", 
      icon: Award,
      accent: "from-amber-700 to-yellow-600"
    }
  ];

  const chanhCuongGoals = [
    { num: 1, text: "Làm cho nước Nam được hoàn toàn độc lập." },
    { num: 2, text: "Thủ tiêu hết các thứ quốc trái." },
    { num: 3, text: "Thâu hết ruộng đất của đế quốc chủ nghĩa làm của công chia cho dân cày nghèo." },
    { num: 4, text: "Bỏ sưu thuế cho dân cày nghèo." },
    { num: 5, text: "Thi hành luật ngày làm 8 giờ." }
  ];

  const urgentTasks = [
    {
      id: "food",
      title: "Làm cho dân có ăn",
      icon: Utensils,
      bg: "bg-amber-500/5 hover:bg-amber-500/10",
      border: "border-amber-500/20 hover:border-amber-500/40",
      iconColor: "text-amber-600 bg-amber-50",
      desc: "Giải quyết nạn đói cấp bách ngay sau Cách mạng Tháng Tám. Bác Hồ kêu gọi toàn dân tăng gia sản xuất và lập 'Hũ gạo cứu đói', bản thân Người cũng nhịn ăn mỗi tuần một bữa để làm gương."
    },
    {
      id: "clothing",
      title: "Làm cho dân có mặc",
      icon: Shirt,
      bg: "bg-orange-550/5 hover:bg-orange-550/10",
      border: "border-orange-550/20 hover:border-orange-550/40",
      iconColor: "text-orange-600 bg-orange-50",
      desc: "Chăm lo đời sống thường nhật của nhân dân, quyên góp áo ấm mùa đông, đảm bảo mọi người dân nghèo từ thành thị tới nông thôn đều có quần áo ấm che thân trong mùa đông rét mướt."
    },
    {
      id: "shelter",
      title: "Làm cho dân có chỗ ở",
      icon: Home,
      bg: "bg-yellow-600/5 hover:bg-yellow-600/10",
      border: "border-yellow-600/20 hover:border-yellow-600/40",
      iconColor: "text-yellow-600 bg-yellow-50",
      desc: "Cải thiện điều kiện cư trú cho đồng bào. Khôi phục nhà cửa bị tàn phá sau chiến tranh, xây dựng tinh thần tương thân tương ái 'nhường cơm sẻ áo', đùm bọc nhau về nơi ăn chốn ở."
    },
    {
      id: "education",
      title: "Làm cho dân có học hành",
      icon: GraduationCap,
      bg: "bg-amber-700/5 hover:bg-amber-700/10",
      border: "border-amber-700/20 hover:border-amber-700/40",
      iconColor: "text-amber-700 bg-amber-50",
      desc: "Tiêu diệt giặc dốt. Ngày 8-9-1945, Bác ký sắc lệnh thành lập Nha Bình dân học vụ để mở các lớp học chữ Quốc ngữ ban đêm cho mọi tầng lớp nhân dân, xóa mù chữ diện rộng."
    }
  ];

  useGSAP(() => {
    // GSAP Tab change entrance animations
    gsap.fromTo(".happiness-tab-panel", 
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, { dependencies: [activeTab], scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-2 select-text font-sans bg-white space-y-10">
      
      {/* SECTION 1: INTERACTIVE TABS */}
      <div>
        <div className="flex border-b border-stone-200/80 pb-3 mb-6 gap-2 flex-wrap">
          {tabs.map((tab, idx) => {
            const TabIcon = tab.icon;
            const isActive = idx === activeTab;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer border-none outline-none ${
                  isActive 
                    ? "bg-amber-700 text-white shadow-md shadow-amber-700/10" 
                    : "bg-stone-100 hover:bg-stone-200/60 text-stone-600 hover:text-stone-900"
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? "text-yellow-300" : "text-stone-500"}`} />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* TAB PANELS */}
        <div className="happiness-tab-panel min-h-[220px]">
          {activeTab === 0 && (
            <div className="space-y-5">
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/80 space-y-3">
                <p className="text-stone-750 leading-relaxed text-sm md:text-base">
                  Theo Hồ Chí Minh: <strong>độc lập dân tộc phải gắn với tự do của nhân dân</strong>.
                </p>
                <div className="flex items-start gap-3 border-t border-stone-200/60 pt-3">
                  <span className="p-1 rounded bg-amber-50 text-amber-600 font-extrabold text-xs tracking-wider shrink-0 mt-0.5">
                    Học thuyết Tam dân
                  </span>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    Người đánh giá rất cao học thuyết <strong>&quot;Tam dân&quot;</strong> của nhà cách mạng <strong>Tôn Trung Sơn</strong> (Trung Quốc): <em>Dân tộc độc lập, dân quyền tự do, dân sinh hạnh phúc</em>. Người đã chắt lọc điểm tiến bộ này để cụ thể hóa vào cách mạng Việt Nam.
                  </p>
                </div>
              </div>

              <div className="border-l-3 border-amber-600 pl-4 space-y-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-stone-100 text-[10px] font-bold text-stone-600 uppercase">
                  Tuyên ngôn Nhân quyền & Dân quyền Pháp (1791)
                </span>
                <p className="text-stone-750 text-sm leading-relaxed">
                  Người đã viện dẫn bản tuyên ngôn vĩ đại của Cách mạng Pháp để tạo chỗ đứng vững chắc về mặt pháp lý quốc tế:
                </p>

                {/* Quote Box */}
                <div className="relative group overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/10 shadow-sm">
                  <Quote className="absolute top-2 left-2 w-12 h-12 text-amber-600/10 -rotate-12 pointer-events-none" />
                  <p className="relative z-10 font-serif italic text-stone-850 text-sm md:text-base leading-relaxed pl-4">
                    &quot;Người ta sinh ra tự do và bình đẳng về quyền lợi, và phải luôn luôn được tự do và bình đẳng về quyền lợi.&quot;
                  </p>
                </div>

                <div className="flex items-start gap-2 bg-amber-500/5 p-3 rounded-lg border border-amber-500/15 mt-3">
                  <span className="text-amber-600 font-bold">→</span>
                  <p className="text-stone-800 text-sm font-medium">
                    Từ cơ sở đó, Hồ Chí Minh khẳng định dân tộc Việt Nam đương nhiên cũng phải được <strong>tự do và bình đẳng về quyền lợi</strong>. Người kết luận đầy sức nặng: <em>&quot;Đó là những lẽ phải không ai chối cãi được&quot;</em>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="space-y-4">
              <p className="text-stone-750 leading-relaxed text-sm md:text-base">
                <strong>Năm 1930</strong>, ngay trong <strong>Chánh cương vắn tắt của Đảng</strong>, Hồ Chí Minh đã trực tiếp xác định mục tiêu đấu tranh cụ thể của cách mạng Việt Nam bao gồm cả độc lập dân tộc lẫn các quyền lợi thiết thực cho nhân dân:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-4">
                {chanhCuongGoals.map((g) => (
                  <div key={g.num} className="bg-white border border-stone-200/80 rounded-xl p-4 hover:border-amber-405 hover:shadow-sm transition-all duration-200 flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0">
                      {g.num}
                    </span>
                    <p className="text-stone-750 text-xs md:text-sm font-medium leading-relaxed">
                      {g.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="space-y-5">
              <div className="bg-stone-50 p-4.5 rounded-xl border border-stone-200/80 space-y-3">
                <p className="text-stone-750 leading-relaxed text-sm md:text-base">
                  <strong>Cách mạng Tháng Tám năm 1945</strong> thành công, nước nhà giành được độc lập. Để giữ vững thành quả cách mạng, Hồ Chí Minh liên tục nhấn mạnh mối quan hệ khăng khít giữa độc lập dân tộc với quyền thụ hưởng tự do, dân chủ thực tế của mỗi công dân:
                </p>

                {/* Quote Box */}
                <div className="relative group overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-orange-550/5 to-amber-600/5 border-l-4 border-amber-600 shadow-sm">
                  <Quote className="absolute top-2 left-2 w-12 h-12 text-amber-600/10 -rotate-12 pointer-events-none" />
                  <p className="relative z-10 font-serif italic text-stone-850 text-sm md:text-base leading-relaxed pl-4">
                    &quot;Độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.&quot;
                  </p>
                  <div className="mt-2 text-right">
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">— Hồ Chí Minh nhấn mạnh sau Cách mạng</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-stone-700 text-sm">
                  Chính vì lý do đó, độc lập phải luôn song hành gắn liền với <strong>hạnh phúc của nhân dân</strong>.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SECTION 2: 4 URGENT TASKS GRID */}
      <div className="bg-stone-50/50 rounded-2xl p-5 md:p-6 border border-stone-200/80 shadow-sm space-y-6">
        <div className="space-y-1.5 text-center md:text-left">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-extrabold uppercase tracking-wider">
            Bối cảnh 1945
          </span>
          <h4 className="text-base md:text-lg font-extrabold text-stone-850 tracking-tight">
            4 Nhiệm vụ cấp bách chăm lo đời sống nhân dân
          </h4>
          <p className="text-xs text-stone-500 max-w-2xl leading-relaxed">
            Ngay sau Cách mạng Tháng Tám năm 1945, trong hoàn cảnh đất nước đối mặt với nạn đói rét hoành hành và giặc mù chữ bủa vây, Chủ tịch Hồ Chí Minh đã yêu cầu Chính phủ lâm thời thực hiện ngay bốn nhiệm vụ tối khẩn:
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {urgentTasks.map((task, idx) => {
            const Icon = task.icon;
            const isHovered = hoveredTask === task.id;
            
            return (
              <div
                key={task.id}
                onMouseEnter={() => setHoveredTask(task.id)}
                onMouseLeave={() => setHoveredTask(null)}
                className={`p-4.5 rounded-2xl border transition-all duration-300 flex flex-col md:flex-row gap-4 bg-white ${task.border} ${
                  isHovered ? "shadow-md scale-[1.01]" : ""
                }`}
              >
                {/* Icon block */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ${task.iconColor} ${
                  isHovered ? "scale-110 rotate-3" : ""
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                {/* Content block */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-700">0{idx + 1}.</span>
                    <h5 className="font-bold text-stone-850 text-sm md:text-base leading-snug">
                      {task.title}
                    </h5>
                  </div>
                  <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                    {task.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: SPOTLIGHT "HAM MUỐN TỘT BẬC" */}
      <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e1d1a] to-[#141312] border border-[#2a2926] p-6 md:p-8 text-white shadow-xl">
        
        {/* Glow Radial Highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,119,6,0.12),transparent_60%)] pointer-events-none z-0" />
        
        {/* Huge watermarked quote icon */}
        <Quote className="absolute top-4 left-4 w-28 h-28 text-amber-500/[0.04] -rotate-12 pointer-events-none z-0" />

        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
              Ý chí suốt đời cách mạng
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-xs text-stone-400 font-medium">Ham muốn tột bậc</span>
          </div>

          <p className="text-stone-300 text-xs md:text-sm leading-relaxed max-w-3xl">
            Suốt cả cuộc đời hoạt động cách mạng đầy gian lao, thử thách, Hồ Chí Minh luôn coi <strong>độc lập gắn liền với tự do, hạnh phúc cho nhân dân</strong> là tôn chỉ hoạt động duy nhất. Người từng bộc bạch lòng mình trước quốc dân đồng bào:
          </p>

          {/* Core Spotlight Quote */}
          <div className="border-l-3 border-amber-500 pl-4 md:pl-6 my-2">
            <p className="font-serif italic text-amber-100 text-sm md:text-lg lg:text-xl leading-relaxed tracking-wide">
              &quot;Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, đồng bào ai cũng có cơm ăn áo mặc, ai cũng được học hành.&quot;
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 text-stone-450 border-t border-[#2a2926] text-xs">
            <span className="italic font-medium">Lời bộc bạch bất hủ của Chủ tịch Hồ Chí Minh</span>
            <span className="text-amber-500 font-bold uppercase tracking-widest text-[9.5px]">Tư tưởng dân sinh vĩ đại</span>
          </div>
        </div>
      </div>

    </div>
  );
}
