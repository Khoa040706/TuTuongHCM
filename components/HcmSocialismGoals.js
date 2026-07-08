"use client";
import React, { useState, useRef } from "react";
import { 
  Users, 
  TrendingUp, 
  BookOpen, 
  Heart, 
  Quote, 
  CheckCircle2, 
  ShieldAlert, 
  Compass, 
  ArrowRight,
  Sparkles,
  Info,
  Scale
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmSocialismGoals() {
  const [activeTab, setActiveTab] = useState("politics"); // politics | economy | culture | society
  const [activeRightId, setActiveRightId] = useState(0); // 0 to 6 for the 7 rights
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".animate-tab-content",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
  }, { scope: containerRef, dependencies: [activeTab] });

  // 7 Quyền dân chủ cơ bản
  const rights = [
    { id: 0, name: "Quyền làm việc", desc: "Được tự do lựa chọn nghề nghiệp, đóng góp công lao động và hưởng thành quả xứng đáng." },
    { id: 1, name: "Quyền nghỉ ngơi", desc: "Có chế độ làm việc và nghỉ ngơi hợp lý để tái tạo sức lao động và chăm sóc gia đình." },
    { id: 2, name: "Quyền học tập", desc: "Được tiếp cận giáo dục, nâng cao trình độ học vấn, văn hóa và chuyên môn nghiệp vụ." },
    { id: 3, name: "Quyền tự do thân thể", desc: "Bảo đảm bất khả xâm phạm về thân thể, danh dự và nhân phẩm của mỗi công dân." },
    { id: 4, name: "Quyền tự do ngôn luận", desc: "Bao gồm quyền tự do ngôn luận, báo chí, hội họp, lập hội, và biểu tình theo quy định." },
    { id: 5, name: "Quyền tự do tín ngưỡng", desc: "Tự do theo hoặc không theo một tôn giáo nào, không bị phân biệt đối xử vì tôn giáo." },
    { id: 6, name: "Quyền bầu cử, ứng cử", desc: "Tham gia xây dựng chính quyền bằng cách lựa chọn hoặc trực tiếp ứng cử đại biểu quốc dân." }
  ];

  return (
    <div ref={containerRef} className="w-full bg-stone-50 border border-stone-200/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-full">
            Mục II.2.a
          </span>
          <h3 className="text-xl md:text-2xl font-serif font-black text-stone-900 mt-2">
            Mục tiêu Chủ nghĩa Xã hội ở Việt Nam
          </h3>
          <p className="text-stone-500 text-xs md:text-sm mt-1">
            Hệ thống mục tiêu toàn diện trên các lĩnh vực nhằm hướng tới sự phát triển toàn diện của con người.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap bg-stone-200/60 p-1 rounded-xl self-start md:self-center">
          <button
            onClick={() => setActiveTab("politics")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "politics"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Chính trị
          </button>
          <button
            onClick={() => setActiveTab("economy")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "economy"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Kinh tế
          </button>
          <button
            onClick={() => setActiveTab("culture")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "culture"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Văn hóa
          </button>
          <button
            onClick={() => setActiveTab("society")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "society"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Quan hệ xã hội
          </button>
        </div>
      </div>

      {/* Content panel */}
      <div className="animate-tab-content">
        
        {/* 1. MỤC TIÊU CHÍNH TRỊ */}
        {activeTab === "politics" && (
          <div className="space-y-6">
            <div className="relative overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-amber-600/5 to-orange-600/10 border-l-4 border-amber-600 shadow-sm">
              <Quote className="absolute top-2 left-2 w-12 h-12 text-amber-600/5 -rotate-12 pointer-events-none" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 block mb-1">
                Khẳng định của Hồ Chí Minh
              </span>
              <p className="relative z-10 font-serif italic text-stone-850 text-sm md:text-base leading-relaxed pl-4">
                &quot;Chế độ ta là chế độ dân chủ. Tức là nhân dân làm chủ... Nước ta là nước dân chủ, địa vị cao nhất là dân, vì dân là chủ.&quot;
              </p>
            </div>

            <div className="space-y-3.5">
              <h4 className="font-serif font-bold text-stone-900 text-sm md:text-base flex items-center gap-2">
                <Users className="w-4.5 h-4.5 text-amber-600" />
                Sơ đồ mối quan hệ: Quyền hành và Lực lượng đều ở nơi dân
              </h4>
              <p className="text-stone-650 text-xs md:text-sm">
                Khi khẳng định &quot;dân làm chủ&quot; (năng lực, hành vi) và &quot;dân là chủ&quot; (vị thế, quyền lực), Người chỉ rõ quyền hạn và trách nhiệm thực chất của nhân dân:
              </p>

              {/* Grid 6 points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 font-bold text-xs flex items-center justify-center shrink-0">1</span>
                  <p className="text-stone-700 text-xs font-semibold leading-snug">Tất cả lợi ích đều vì nhân dân.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 font-bold text-xs flex items-center justify-center shrink-0">2</span>
                  <p className="text-stone-700 text-xs font-semibold leading-snug">Tất cả quyền hạn đều của nhân dân.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 font-bold text-xs flex items-center justify-center shrink-0">3</span>
                  <p className="text-stone-700 text-xs font-semibold leading-snug">Công cuộc đổi mới là trách nhiệm của nhân dân.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 font-bold text-xs flex items-center justify-center shrink-0">4</span>
                  <p className="text-stone-700 text-xs font-semibold leading-snug">Sự nghiệp bảo vệ & xây dựng nước là công việc của dân.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 font-bold text-xs flex items-center justify-center shrink-0">5</span>
                  <p className="text-stone-700 text-xs font-semibold leading-snug">Các cấp chính quyền đều do dân cử ra.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 font-bold text-xs flex items-center justify-center shrink-0">6</span>
                  <p className="text-stone-700 text-xs font-semibold leading-snug">Các tổ chức đoàn thể do dân tổ chức nên.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. MỤC TIÊU KINH TẾ */}
        {activeTab === "economy" && (
          <div className="space-y-6">
            <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
              Mục tiêu kinh tế của chủ nghĩa xã hội là xây dựng được một <strong>nền kinh tế phát triển cao</strong> gắn liền với mục tiêu chính trị, nhằm thực hiện đầy đủ quyền làm chủ của nhân dân.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Quốc doanh */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest block">
                  Thành phần 1
                </span>
                <h5 className="font-serif font-black text-stone-900 text-sm md:text-base">
                  Kinh tế Quốc doanh
                </h5>
                <p className="text-stone-650 text-xs leading-relaxed">
                  Là hình thức sở hữu của <strong>toàn dân</strong>, giữ vai trò lãnh đạo nền kinh tế quốc dân. Nhà nước xã hội chủ nghĩa phải bảo đảm ưu tiên phát triển thành phần này để định hướng xã hội.
                </p>
              </div>

              {/* Hợp tác xã */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest block">
                  Thành phần 2
                </span>
                <h5 className="font-serif font-black text-stone-900 text-sm md:text-base">
                  Kinh tế Hợp tác xã
                </h5>
                <p className="text-stone-650 text-xs leading-relaxed">
                  Là hình thức sở hữu <strong>tập thể</strong> của nhân dân lao động. Nhà nước đặc biệt khuyến khích, hướng dẫn và hỗ trợ, giúp đỡ để phát triển liên kết kinh tế tự nguyện.
                </p>
              </div>
            </div>

            {/* Economic details */}
            <div className="p-5 rounded-2xl bg-stone-100 border border-stone-250 space-y-3">
              <h5 className="font-bold text-stone-900 text-xs uppercase tracking-wider">
                Đặc trưng cơ cấu và gắn kết chính trị
              </h5>
              <ul className="space-y-2 text-stone-700 text-xs md:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>Xây dựng một nền kinh tế phát triển cao với <strong>công nghiệp và nông nghiệp hiện đại, khoa học và kỹ thuật tiên tiến</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>Mục tiêu kinh tế và chính trị gắn bó hữu cơ: <em>&quot;Chế độ kinh tế và xã hội của chúng ta nhằm thực hiện đầy đủ quyền dân chủ của nhân dân.&quot;</em></span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* 3. MỤC TIÊU VĂN HÓA */}
        {activeTab === "culture" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <h4 className="font-serif font-bold text-stone-900 text-sm md:text-base flex items-center gap-2">
                  <BookOpen className="w-4.5 h-4.5 text-amber-600" />
                  Quan hệ biện chứng Kinh tế - Văn hóa
                </h4>
                <p className="text-stone-650 text-xs leading-relaxed">
                  Hồ Chí Minh chỉ rõ chính trị và kinh tế là nền tảng quyết định tính chất của văn hóa. Ngược lại, văn hóa soi đường, thúc đẩy hoàn thành mục tiêu kinh tế và chính trị.
                </p>
                <div className="p-4.5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-stone-850 font-serif italic text-xs leading-relaxed">
                  &quot;Muốn tiến lên CNXH phải phát triển kinh tế và văn hóa. Vì sao không nói phát triển văn hóa và kinh tế? Tục ngữ có câu: 'Có thực mới vực được đạo'; vì thế kinh tế phải đi trước.&quot;
                </div>
              </div>

              {/* Roles list */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-3">
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block">
                  Vai trò của Văn hóa trong kiến thiết chế độ mới
                </span>
                <ul className="space-y-2.5 text-stone-700 text-xs">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-700 font-bold">•</span>
                    <span>Nâng cao trình độ văn hóa giúp đẩy mạnh khôi phục kinh tế, thúc đẩy quyền dân chủ.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-700 font-bold">•</span>
                    <span>Là điều kiện tiên quyết xây dựng nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ, giàu mạnh.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-700 font-bold">•</span>
                    <span><strong>Định hướng cốt lõi:</strong> Văn hóa phải <em>&quot;xã hội chủ nghĩa về nội dung, dân tộc về hình thức&quot;</em>.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-700 font-bold">•</span>
                    <span>Tẩy trừ triệt để tàn dư nô dịch, thực dân của văn hóa đế quốc.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-700 font-bold">•</span>
                    <span>Kế thừa tinh hoa dân tộc kết hợp tiếp thu văn hóa tiến bộ của nhân loại để xây dựng nền văn hóa có tính: <strong>dân tộc, khoa học, và đại chúng</strong>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 4. MỤC TIÊU QUAN HỆ XÃ HỘI */}
        {activeTab === "society" && (
          <div className="space-y-6">
            <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
              Mục tiêu xã hội là xây dựng một cộng đồng <strong>dân chủ, công bằng, văn minh</strong>. Trong đó, mỗi người dân với tư cách làm chủ đất nước phải làm tròn bổn phận, đồng thời được hưởng đầy đủ các quyền lợi hiến định:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Stepper list of 7 rights */}
              <div className="md:col-span-5 space-y-1.5">
                <span className="text-[9px] font-black text-stone-500 uppercase tracking-widest block mb-2">
                  Nhấp để xem chi tiết 7 Quyền dân chủ cơ bản:
                </span>
                {rights.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setActiveRightId(r.id)}
                    className={`w-full p-2.5 rounded-xl border text-left text-xs font-bold transition-all duration-300 flex items-center justify-between ${
                      activeRightId === r.id
                        ? "bg-rose-600 text-white border-rose-600 shadow-sm"
                        : "bg-white text-stone-750 border-stone-200 hover:bg-stone-50"
                    }`}
                  >
                    <span>{r.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                ))}
              </div>

              {/* Detailed panel for active right */}
              <div className="md:col-span-7 p-6 rounded-2xl bg-white border border-stone-200 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-rose-700 bg-rose-500/10 p-1.5 rounded-lg">
                      <Scale className="w-5 h-5" />
                    </span>
                    <h5 className="font-serif font-black text-stone-900 text-sm md:text-base">
                      {rights[activeRightId].name}
                    </h5>
                  </div>
                  <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                    {rights[activeRightId].desc}
                  </p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-stone-100">
                  <span className="text-[10px] font-bold text-stone-500 block mb-1">
                    Bảo đảm pháp lý
                  </span>
                  <p className="text-stone-600 text-xs italic leading-normal">
                    Mọi công dân đều hoàn toàn bình đẳng trước pháp luật của nhà nước dân chủ.
                  </p>
                </div>
              </div>
            </div>

            {/* Alert on abusing democracy */}
            <div className="p-4.5 rounded-xl bg-red-500/5 border border-red-500/20 text-xs flex gap-2.5 items-start">
              <ShieldAlert className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h5 className="font-bold text-stone-950 uppercase tracking-wider text-[11px]">
                  Ranh giới tự do dân chủ
                </h5>
                <p className="text-stone-700 leading-relaxed">
                  Nhà nước bảo đảm quyền tự do dân chủ tối đa cho công dân, nhưng <strong>nghiêm cấm mọi hành vi lợi dụng các quyền tự do dân chủ</strong> để xâm phạm lợi ích của Nhà nước, lợi ích công cộng hoặc quyền lợi của nhân dân.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overall Conclusion Summary */}
      <div className="relative overflow-hidden p-6 rounded-3xl bg-stone-900 text-white shadow-md flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-1.5">
          <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest block">
            Kết luận của Hồ Chí Minh về Mục tiêu xã hội
          </span>
          <h4 className="font-serif font-black text-sm md:text-base">
            Xã hội XHCN là xã hội: Dân chủ, Công bằng, Văn minh, Tôn trọng con người
          </h4>
          <p className="text-stone-300 text-xs leading-relaxed max-w-2xl">
            Nhà nước luôn chú ý xem xét, bảo đảm thỏa mãn những lợi ích cá nhân đúng đắn để mỗi người dân có điều kiện cải thiện đời sống riêng, phát huy cá tính và sở trường riêng trong sự hài hòa biện chứng với lợi ích chung của tập thể.
          </p>
        </div>

        <div className="p-3 bg-white/10 rounded-full text-amber-500 border border-white/10 shrink-0 self-start md:self-center">
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
