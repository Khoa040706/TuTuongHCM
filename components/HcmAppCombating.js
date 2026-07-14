"use client";
import React, { useState, useRef } from "react";
import { 
  Compass, 
  Sparkles, 
  HelpCircle, 
  ShieldAlert, 
  ArrowRight,
  Flame,
  AlertOctagon,
  TrendingUp,
  History,
  Bookmark,
  CheckCircle2,
  Users,
  Briefcase
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmAppCombating() {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".animate-goal-detail",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
  }, { scope: containerRef, dependencies: [selectedGoal] });

  // 4 Mục tiêu của Đảng cầm quyền
  const goals = [
    {
      id: "rich",
      title: "1. Dân giàu",
      desc: "Nâng cao đời sống vật chất và tinh thần của nhân dân, mang lại cuộc sống ấm no, thịnh vượng, tự do và hạnh phúc thực tế cho mỗi gia đình.",
      color: "from-amber-600/10 to-yellow-600/10 border-amber-300 text-amber-800"
    },
    {
      id: "strong",
      title: "2. Nước mạnh",
      desc: "Đất nước phát triển cường thịnh, có nền quốc phòng và an ninh vững chắc để bảo vệ vững chắc độc lập chủ quyền, có vị thế uy tín cao trên quốc tế.",
      color: "from-red-600/10 to-orange-600/10 border-red-300 text-red-800"
    },
    {
      id: "democracy",
      title: "3. Dân chủ",
      desc: "Quyền lực thuộc về nhân dân, thiết lập nền dân chủ XHCN thực chất, bảo đảm mọi công dân đều được trực tiếp tham gia quản lý và giám sát xã hội.",
      color: "from-blue-600/10 to-cyan-600/10 border-blue-300 text-blue-800"
    },
    {
      id: "fair",
      title: "4. Công bằng, văn minh",
      desc: "Xã hội công bằng, bình đẳng, không còn áp bức bóc lột, phát triển cao về văn hóa, giáo dục, khoa học công nghệ và nền tảng đạo đức tốt đẹp.",
      color: "from-emerald-600/10 to-teal-600/10 border-emerald-300 text-emerald-800"
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-stone-50 border border-stone-200/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
      {/* Header */}
      <div>
        <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-widest bg-[rgba(var(--accent-rgb),0.1)] px-2.5 py-1 rounded-full">
          Mục IV.4
        </span>
        <h3 className="text-xl md:text-2xl font-serif font-black text-stone-900 mt-2">
          Đấu tranh chống suy thoái trong nội bộ
        </h3>
        <p className="text-stone-500 text-xs md:text-sm mt-1">
          Nhận diện nguy cơ và đấu tranh chống suy thoái tư tưởng chính trị, đạo đức, lối sống, &quot;tự diễn biến&quot;, &quot;tự chuyển hóa&quot; để xây dựng chỉnh đốn Đảng vững mạnh.
        </p>
      </div>

      {/* Critical Threat Banner */}
      <div className="bg-red-950 text-white p-6 rounded-3xl border border-red-900 shadow-md relative overflow-hidden space-y-4">
        <AlertOctagon className="w-24 h-24 text-red-700/15 absolute -bottom-5 -right-5" />
        <div className="flex items-center gap-2 text-red-400">
          <ShieldAlert className="w-5 h-5 shrink-0" />
          <span className="text-[10px] font-black uppercase tracking-widest">
            Nguy cơ sinh tử đe dọa chế độ
          </span>
        </div>
        
        <p className="text-stone-200 text-xs md:text-sm leading-relaxed font-serif font-bold italic">
          &quot;Nếu không ngăn chặn, đẩy lùi kịp thời tình trạng suy thoái này: chỉ là một bước ngắn, thậm chí rất ngắn, nguy hiểm khôn lường — là một nguy cơ trực tiếp đe dọa sự tồn vong của Đảng và chế độ.&quot;
        </p>
        <p className="text-stone-400 text-[11px] leading-relaxed border-t border-white/10 pt-3">
          Mặc dù cách mạng Việt Nam đã đạt những thành tựu vĩ đại trong giải phóng dân tộc, bảo vệ Tổ quốc và đổi mới, nhưng sự suy thoái tư tưởng chính trị, đạo đức lối sống của một bộ phận cán bộ đảng viên là thách thức cực kỳ lớn. Do đó, <strong>Xây dựng Đảng luôn là nhiệm vụ then chốt</strong>.
        </p>
      </div>

      {/* Theoretical development compare */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Thời Bác Hồ */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-3">
          <div className="flex items-center gap-2 border-b border-stone-100 pb-2.5">
            <span className="p-1 rounded bg-stone-100 text-stone-700">
              <History className="w-4 h-4" />
            </span>
            <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider">
              Thời Chủ tịch Hồ Chí Minh
            </h5>
          </div>
          <p className="text-stone-600 text-xs leading-relaxed">
            Người tuy chưa sử dụng các thuật ngữ hiện đại như &quot;suy thoái&quot;, &quot;tự diễn biến&quot;, &quot;tự chuyển hóa&quot;, nhưng đã sớm chỉ rõ các <strong>biểu hiện bệnh lý nguy hiểm của chủ nghĩa cá nhân</strong> và cảnh báo nghiêm khắc tác hại tàn độc của chúng đối với Đảng cầm quyền.
          </p>
        </div>

        {/* Ngày nay */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-3">
          <div className="flex items-center gap-2 border-b border-stone-100 pb-2.5">
            <span className="p-1 rounded bg-[rgba(var(--accent-rgb),0.1)] text-[var(--accent)]">
              <TrendingUp className="w-4 h-4" />
            </span>
            <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider">
              Vận dụng trong giai đoạn hiện nay
            </h5>
          </div>
          <p className="text-stone-600 text-xs leading-relaxed">
            Đảng ta cụ thể hóa lý luận của Bác thành cuộc đấu tranh quyết liệt nhằm: ngăn chặn, đẩy lùi suy thoái chính trị, đạo đức, lối sống, các biểu hiện &quot;tự diễn biến&quot;, &quot;tự chuyển hóa&quot; bằng các hành động pháp lý cụ thể, làm cho Đảng ngày càng trong sạch, vững mạnh.
          </p>
        </div>
      </div>

      {/* 4 Mục tiêu của Đảng Cầm quyền (Bento Grid) */}
      <div className="space-y-4">
        <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
          <Sparkles className="w-4.5 h-4.5 text-[var(--accent)]" />
          4 Mục tiêu cốt lõi để Đảng xứng đáng cầm quyền (Click chọn)
        </h5>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {goals.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelectedGoal(selectedGoal === g.id ? null : g.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between min-h-[110px] bg-gradient-to-br ${g.color} ${
                selectedGoal === g.id
                  ? "ring-2 ring-stone-900 shadow-sm"
                  : "hover:shadow-sm"
              }`}
            >
              <h6 className="font-serif font-black text-xs md:text-sm">
                {g.title}
              </h6>
              <span className="text-[9px] text-stone-500 font-bold uppercase tracking-wider pt-2 border-t border-stone-200/50">
                {selectedGoal === g.id ? "Đang chọn" : "Chi tiết →"}
              </span>
            </button>
          ))}
        </div>

        {/* Selected goal detail */}
        {selectedGoal && (
          <div className="p-5.5 rounded-3xl bg-white border border-stone-200 shadow-sm animate-goal-detail space-y-2">
            <h6 className="font-serif font-black text-stone-900 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-[var(--accent)]" />
              Mục tiêu: {goals.find(g => g.id === selectedGoal).title}
            </h6>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
              {goals.find(g => g.id === selectedGoal).desc}
            </p>
          </div>
        )}
      </div>

      {/* Final conclusion */}
      <div className="p-5 bg-stone-100/50 border border-stone-250 rounded-2xl text-stone-700 text-xs md:text-sm leading-relaxed font-semibold text-center">
        🎯 Độc lập dân tộc gắn liền với chủ nghĩa xã hội là bài học xuyên suốt chỉ đường cho mọi thắng lợi của Việt Nam. Giữ vững lý tưởng độc lập dân tộc trên con đường quá độ đi lên chủ nghĩa xã hội là bảo đảm vĩnh viễn cho giang sơn gấm vóc phát triển phồn vinh!
      </div>
    </div>
  );
}
