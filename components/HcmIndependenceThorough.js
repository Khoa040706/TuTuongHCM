"use client";
import React, { useState } from "react";
import { 
  Shield, 
  Globe, 
  Coins, 
  AlertTriangle, 
  Sparkles, 
  ArrowRight,
  Compass,
  Briefcase
} from "lucide-react";

export default function HcmIndependenceThorough() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 0,
      title: "Quyền tự quyết về Ngoại giao",
      icon: Globe,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      glowColor: "shadow-blue-500/10 border-blue-500/40 bg-blue-50/20",
      desc: "Quyền thiết lập quan hệ đối ngoại độc lập, bình đẳng với các quốc gia khác trên thế giới mà không chịu sự can thiệp, áp đặt từ bên ngoài."
    },
    {
      id: 1,
      title: "Có Quân đội riêng",
      icon: Shield,
      color: "text-rose-600 bg-rose-50 border-rose-200",
      glowColor: "shadow-rose-500/10 border-rose-500/40 bg-rose-50/20",
      desc: "Lực lượng quân sự độc lập để bảo vệ chủ quyền biên giới, giữ gìn hòa bình đất nước và sẵn sàng đập tan các thế lực xâm lược."
    },
    {
      id: 2,
      title: "Có Nền tài chính riêng",
      icon: Coins,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      glowColor: "shadow-amber-500/10 border-amber-500/40 bg-amber-50/20",
      desc: "Hệ thống tiền tệ độc lập (phát hành tiền đồng Việt Nam), ngân khố riêng và tự chủ hoàn toàn trong việc hoạch định chính sách kinh tế quốc gia."
    }
  ];

  return (
    <div className="w-full py-2 select-text font-sans bg-white space-y-8">
      
      {/* CẢNH BÁO ĐỘC LẬP GIẢ HIỆU */}
      <div className="bg-rose-500/5 rounded-2xl p-5 md:p-6 border border-rose-500/15 shadow-sm space-y-4">
        <div className="flex items-center gap-3 text-rose-700">
          <AlertTriangle className="w-6 h-6 shrink-0" />
          <h4 className="font-extrabold text-stone-850 text-sm md:text-base uppercase tracking-wider">
            Cảnh giác trước âm mưu &quot;Độc lập giả hiệu&quot;
          </h4>
        </div>
        <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
          Lịch sử đấu tranh cho thấy, bọn thực dân và đế quốc xâm lược thường dùng các chiêu bài mị dân xảo quyệt. Chúng lập nên những <strong>chính phủ bù nhìn bản xứ</strong> và rầm rộ tuyên truyền khẩu hiệu <strong>&quot;độc lập tự do&quot; giả hiệu</strong>. 
        </p>
        <div className="bg-white/80 p-4 rounded-xl border border-rose-200/40 flex items-start gap-2.5">
          <span className="text-rose-600 font-black mt-0.5">→</span>
          <p className="text-stone-800 text-xs md:text-sm font-semibold italic">
            Thực chất của những chiêu bài này chỉ nhằm che đậy bản chất &quot;ăn cướp&quot; và &quot;giết người&quot; dã man của chủ nghĩa thực dân xâm lược.
          </p>
        </div>
      </div>

      {/* 3 TRỤ CỘT CHỦ QUYỀN TỰ QUYẾT */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Sparkles className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            3 Trụ cột cốt lõi của độc lập thật sự
          </h4>
        </div>

        <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
          Theo tư tưởng Hồ Chí Minh: <strong>độc lập dân tộc phải là độc lập thật sự, hoàn toàn và triệt để</strong> trên tất cả các lĩnh vực của đời sống xã hội. Người đanh thép nhấn mạnh:
        </p>

        {/* 3D Pillar Cards Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activePillar === pillar.id;
            
            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`p-5 rounded-2xl border transition-all duration-350 cursor-pointer select-none flex flex-col items-center text-center gap-3 ${
                  isActive 
                    ? pillar.glowColor + " shadow-md scale-[1.02]" 
                    : "bg-white border-stone-200/80 hover:border-stone-300 hover:bg-stone-50/50 text-stone-600"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm border ${
                  isActive ? "bg-white" : pillar.color
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h5 className="font-extrabold text-stone-850 text-xs md:text-sm leading-snug">
                  {pillar.title}
                </h5>
              </div>
            );
          })}
        </div>

        {/* Detail Panel */}
        <div className="bg-stone-50 border border-stone-200/80 p-5 rounded-2xl relative overflow-hidden transition-all duration-300 min-h-[110px]">
          <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
            {React.createElement(pillars[activePillar].icon, { className: "w-20 h-20" })}
          </div>
          <div className="relative z-10 space-y-1.5">
            <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest block">
              Ý nghĩa chủ quyền tự quyết:
            </span>
            <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
              {pillars[activePillar].desc}
            </p>
          </div>
        </div>

        <div className="bg-amber-500/5 p-4 rounded-xl border border-amber-500/10 flex items-start gap-2.5">
          <span className="text-amber-600 font-bold mt-0.5">→</span>
          <p className="text-stone-800 text-xs md:text-sm font-semibold italic">
            Người nhấn mạnh: &quot;độc lập mà dân không có quyền tự quyết về ngoại giao, không có quân đội riêng, không có nền tài chính riêng... thì độc lập đó chẳng có ý nghĩa gì.&quot;
          </p>
        </div>
      </div>

      {/* BIỆN PHÁP NGOẠI GIAO SAU 1945 */}
      <div className="relative overflow-hidden rounded-2xl border border-stone-200/80 p-5 md:p-6 bg-white space-y-4">
        <div className="flex items-center gap-2.5 text-amber-700">
          <span className="p-2 rounded-xl bg-amber-500/10 shrink-0">
            <Briefcase className="w-5 h-5" />
          </span>
          <h4 className="font-bold text-stone-850 text-sm md:text-base tracking-tight">
            Ngoại giao bảo vệ độc lập non trẻ (Sau 1945)
          </h4>
        </div>
        <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
          Ngay sau Cách mạng Tháng Tám năm 1945, chính quyền cách mạng đứng trước hoàn cảnh hiểm nghèo vì <strong>nạn thù trong giặc ngoài</strong> bủa vây (quân Tưởng, quân Pháp, tàn dư phong kiến). 
        </p>
        <div className="flex items-start gap-2.5 bg-stone-50 p-4 rounded-xl border border-stone-200/60">
          <span className="text-amber-600 font-black mt-0.5 font-sans">→</span>
          <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
            Để bảo vệ nền độc lập thật sự, Chủ tịch Hồ Chí Minh cùng Chính phủ nước Việt Nam Dân chủ Cộng hòa đã khôn khéo sử dụng nhiều biện pháp linh hoạt, đặc biệt là <strong>biện pháp ngoại giao mềm dẻo nhưng kiên quyết về nguyên tắc</strong>, nhằm kéo dài thời gian hòa hoãn chuẩn bị thực lực, bảo đảm vững chắc nền độc lập thực chất của đất nước.
          </p>
        </div>
      </div>

    </div>
  );
}
