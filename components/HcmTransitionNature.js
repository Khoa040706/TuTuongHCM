"use client";
import React, { useState, useRef } from "react";
import { 
  Compass, 
  Sparkles, 
  HelpCircle, 
  Quote, 
  CheckCircle2, 
  ShieldAlert, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Heart,
  Scale,
  Users,
  Layers,
  Activity,
  BookOpen
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmTransitionNature() {
  const [activeTab, setActiveTab] = useState("nature"); // nature | characteristics | tasks
  const [activeField, setActiveField] = useState("politics"); // politics | economy | culture | society
  const containerRef = useRef(null);

  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".animate-tab-content") : document.querySelectorAll(".animate-tab-content");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
      }
    }
  }, { scope: containerRef, dependencies: [activeTab, activeField] });

  return (
    <div ref={containerRef} className="w-full bg-stone-50 border border-stone-200/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-full">
            Mục II.3.a
          </span>
          <h3 className="text-xl md:text-2xl font-serif font-black text-stone-900 mt-2">
            Thời kỳ Quá độ lên Chủ nghĩa Xã hội ở Việt Nam
          </h3>
          <p className="text-stone-500 text-xs md:text-sm mt-1">
            Phân tích tính chất, đặc điểm to nhất và hệ thống nhiệm vụ cải biến sâu sắc của thời kỳ quá độ.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap bg-stone-200/60 p-1 rounded-xl self-start md:self-center">
          <button
            onClick={() => setActiveTab("nature")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "nature"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Tính chất cải biến
          </button>
          <button
            onClick={() => setActiveTab("characteristics")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "characteristics"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Đặc điểm to nhất
          </button>
          <button
            onClick={() => setActiveTab("tasks")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "tasks"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Nhiệm vụ 4 lĩnh vực
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="animate-tab-content">
        
        {/* 1. TÍNH CHẤT THỜI KỲ QUÁ ĐỘ */}
        {activeTab === "nature" && (
          <div className="space-y-6">
            <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
              Thời kỳ quá độ lên CNXH ở Việt Nam là <strong>thời kỳ cải biến sâu sắc nhất nhưng vô cùng phức tạp, lâu dài, khó khăn và gian khổ</strong>. Đây là công cuộc chuyển đổi toàn diện xã hội cũ thành xã hội mới chưa từng có trong lịch sử:
            </p>

            {/* 3 Tasks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-extrabold flex items-center justify-center">1</span>
                <h5 className="font-serif font-black text-stone-900 text-xs uppercase tracking-wider pt-1">Thay đổi triệt để nếp sống</h5>
                <p className="text-stone-600 text-xs leading-normal">
                  Cải biến những thói quen, nếp nghĩ và thành kiến có gốc rễ sâu xa, lâu đời hàng ngàn năm phong kiến, thực dân.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-extrabold flex items-center justify-center">2</span>
                <h5 className="font-serif font-black text-stone-900 text-xs uppercase tracking-wider pt-1">Xóa bỏ bóc lột</h5>
                <p className="text-stone-600 text-xs leading-normal">
                  Bài trừ triệt để chế độ người bóc lột người, thiết lập quan hệ sản xuất mới công bằng, tiến bộ.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-extrabold flex items-center justify-center">3</span>
                <h5 className="font-serif font-black text-stone-900 text-xs uppercase tracking-wider pt-1">Phát triển văn hóa</h5>
                <p className="text-stone-600 text-xs leading-normal">
                  Biến một nước nghèo nàn, dốt nát và cực khổ thành một nước có nền văn hóa cao, đời sống ấm no, tươi vui hạnh phúc.
                </p>
              </div>
            </div>

            {/* Bác Hồ comparison of difficulty */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-600/5 to-orange-600/5 border-l-4 border-amber-600 space-y-3">
              <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm flex items-center gap-2">
                <ShieldAlert className="w-4.5 h-4.5 text-amber-700" />
                Độ khó khăn, phức tạp của công cuộc cải biến
              </h5>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                Trong điều kiện nước ta xuất phát từ nước nông nghiệp lạc hậu, mới thoát khỏi ách thực dân phong kiến, Hồ Chí Minh đánh giá: <strong>đây là cuộc biến đổi sâu sắc nhất, khó khăn nhất, thậm chí phức tạp hơn cả việc đánh giặc ngoại xâm</strong>.
              </p>
              <p className="text-amber-700 text-xs font-bold italic border-t border-stone-250/60 pt-2">
                → Do đó: Tiến lên chủ nghĩa xã hội không thể nóng vội &quot;một sớm một chiều&quot; mà bắt buộc phải tiến hành dần dần, từng bước vững chắc.
              </p>
            </div>
          </div>
        )}

        {/* 2. ĐẶC ĐIỂM THỜI KỲ QUÁ ĐỘ */}
        {activeTab === "characteristics" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Đặc điểm chung */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2 border-b border-stone-100 pb-2.5 mb-1.5">
                  <span className="p-1 rounded bg-stone-100 text-stone-700">
                    <Layers className="w-4 h-4" />
                  </span>
                  <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider">
                    Đặc điểm chung (Giống các nước)
                  </h5>
                </div>
                <ul className="space-y-2.5 text-stone-650 text-xs leading-relaxed">
                  <li className="flex items-start gap-1.5">
                    <span className="text-stone-850 font-bold">•</span>
                    <span>Tồn tại tình trạng <strong>đan xen phức tạp</strong> giữa các yếu tố của xã hội cũ bên cạnh những nhân tố xã hội mới trên tất cả các lĩnh vực.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-stone-850 font-bold">•</span>
                    <span>Đây là giai đoạn đầu, các yếu tố xã hội cũ còn cụm lại thành một thế lực lớn, chưa bị các yếu tố mới chiến thắng hoàn toàn.</span>
                  </li>
                </ul>
              </div>

              {/* Đặc điểm to nhất */}
              <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 shadow-sm space-y-3">
                <div className="flex items-center gap-2 border-b border-amber-200/40 pb-2.5 mb-1.5">
                  <span className="p-1 rounded bg-amber-100 text-amber-700">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <h5 className="font-serif font-black text-amber-800 text-xs md:text-sm uppercase tracking-wider">
                    Đặc điểm to nhất (Riêng của Việt Nam)
                  </h5>
                </div>
                <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                  Đặc điểm lớn nhất, bao trùm và chi phối toàn bộ tiến trình lịch sử ở nước ta:
                </p>
                <div className="relative p-4 rounded-xl bg-white border border-amber-500/20 text-stone-850 font-serif italic text-xs leading-relaxed shadow-sm">
                  &quot;Đặc điểm to nhất của ta trong thời kỳ quá độ là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không phải kinh qua giai đoạn phát triển tư bản chủ nghĩa.&quot;
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Đặc điểm đặc thù này cùng với các mục tiêu của CNXH trực tiếp quyết định và quy định hệ thống nhiệm vụ lịch sử của nhân dân ta.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 3. NHIỆM VỤ THỜI KỲ QUÁ ĐỘ */}
        {activeTab === "tasks" && (
          <div className="space-y-6">
            <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
              Nhiệm vụ chung: Đấu tranh cải tạo, xóa bỏ các tàn tích của xã hội cũ, đồng thời xây dựng các nhân tố mới trên tất cả các lĩnh vực đời sống cụ thể:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <button
                onClick={() => setActiveField("politics")}
                className={`p-3.5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  activeField === "politics"
                    ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                    : "bg-white text-stone-750 border-stone-200 hover:bg-stone-50"
                }`}
              >
                <span className="text-[10px] font-bold uppercase opacity-75">Lĩnh vực 1</span>
                <span className="font-serif font-bold text-xs md:text-sm mt-1">Chính trị</span>
              </button>
              <button
                onClick={() => setActiveField("economy")}
                className={`p-3.5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  activeField === "economy"
                    ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                    : "bg-white text-stone-750 border-stone-200 hover:bg-stone-50"
                }`}
              >
                <span className="text-[10px] font-bold uppercase opacity-75">Lĩnh vực 2</span>
                <span className="font-serif font-bold text-xs md:text-sm mt-1">Kinh tế</span>
              </button>
              <button
                onClick={() => setActiveField("culture")}
                className={`p-3.5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  activeField === "culture"
                    ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                    : "bg-white text-stone-750 border-stone-200 hover:bg-stone-50"
                }`}
              >
                <span className="text-[10px] font-bold uppercase opacity-75">Lĩnh vực 3</span>
                <span className="font-serif font-bold text-xs md:text-sm mt-1">Văn hóa</span>
              </button>
              <button
                onClick={() => setActiveField("society")}
                className={`p-3.5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  activeField === "society"
                    ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                    : "bg-white text-stone-750 border-stone-200 hover:bg-stone-50"
                }`}
              >
                <span className="text-[10px] font-bold uppercase opacity-75">Lĩnh vực 4</span>
                <span className="font-serif font-bold text-xs md:text-sm mt-1">Quan hệ xã hội</span>
              </button>
            </div>

            {/* Field detail panel */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4 animate-tab-content">
              {activeField === "politics" && (
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-amber-600" />
                    <h5 className="font-serif font-black text-stone-900 text-sm md:text-base">
                      Nhiệm vụ Chính trị — Xây dựng chế độ Dân chủ
                    </h5>
                  </div>
                  <ul className="space-y-2 text-stone-700 text-xs md:text-sm pl-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Xây dựng chế độ dân chủ xã hội chủ nghĩa thực chất (bản chất tối thượng của CNXH).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Kiên quyết đấu tranh chống các biểu hiện nguy hại của <strong>chủ nghĩa cá nhân</strong>, trước hết là ngay trong nội bộ Đảng.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Bồi dưỡng, giáo dục sâu rộng nâng cao tri thức và năng lực làm chủ của quần chúng nhân dân trong bộ máy chính quyền từ cơ sở đến Trung ương.</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeField === "economy" && (
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-amber-600" />
                    <h5 className="font-serif font-black text-stone-900 text-sm md:text-base">
                      Nhiệm vụ Kinh tế — Kiến thiết nền tảng vật chất
                    </h5>
                  </div>
                  <p className="text-stone-700 text-xs leading-relaxed">
                    Trong bối cảnh nền kinh tế lạc hậu và nghèo nàn, Hồ Chí Minh xác định hai trọng tâm hành động:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/60">
                      <h6 className="font-bold text-stone-900 text-xs uppercase mb-1">Cải tạo kinh tế cũ</h6>
                      <p className="text-stone-600 text-xs leading-normal">Thay đổi các quan hệ sản xuất lỗi thời, giải phóng sức sản xuất của người lao động.</p>
                    </div>
                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/60">
                      <h6 className="font-bold text-stone-900 text-xs uppercase mb-1">Xây dựng kinh tế mới</h6>
                      <p className="text-stone-600 text-xs leading-normal">Xây dựng công nghiệp và nông nghiệp hiện đại, áp dụng khoa học công nghệ tiên tiến.</p>
                    </div>
                  </div>
                  <p className="text-amber-700 text-xs font-semibold leading-relaxed border-t border-stone-100 pt-2.5">
                    → Phương châm: Trong mối quan hệ giữa cải tạo và xây dựng thì <strong>xây dựng là nhiệm vụ chủ chốt, lâu dài nhất</strong>, luôn đi đôi với việc tôn trọng đầy đủ quyền làm chủ của nhân dân.
                  </p>
                </div>
              )}

              {activeField === "culture" && (
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    <h5 className="font-serif font-black text-stone-900 text-sm md:text-base">
                      Nhiệm vụ Văn hóa — Xây dựng nền văn hóa mới tiến bộ
                    </h5>
                  </div>
                  <ul className="space-y-2 text-stone-700 text-xs md:text-sm pl-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Triệt để tẩy trừ mọi di tích thuộc địa và ảnh hưởng nô dịch nguy hại của văn hóa thực dân, đế quốc cũ.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Kế thừa, phát triển những truyền thống tốt đẹp của văn hóa dân tộc, đồng thời hấp thụ có lọc lựa những tinh hoa văn hóa tiến bộ thế giới.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Hướng tới xây dựng nền văn hóa Việt Nam có tính chất: <strong>Dân tộc, Khoa học, và Đại chúng</strong>.</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeField === "society" && (
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-amber-600" />
                    <h5 className="font-serif font-black text-stone-900 text-sm md:text-base">
                      Nhiệm vụ Quan hệ xã hội — Dân chủ, công bằng, văn minh
                    </h5>
                  </div>
                  <ul className="space-y-2 text-stone-700 text-xs md:text-sm pl-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Thay đổi triệt để những quan hệ cũ, tập tục lạc hậu đã bám rễ thành thói quen trì trệ trong lối sống, nếp sống hằng ngày.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Xây dựng một xã hội công bằng, tôn trọng con người, chú ý thỏa mãn các lợi ích cá nhân đúng đắn để mỗi người cải thiện đời sống riêng, phát huy sở trường riêng trong sự hài hòa biện chứng với lợi ích của tập thể.</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Overall Conclusion */}
      <div className="relative overflow-hidden p-6 rounded-3xl bg-stone-900 text-white shadow-md flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-1.5">
          <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest block">
            Kết luận tổng kết
          </span>
          <h4 className="font-serif font-black text-sm md:text-base">
            Bản chất cải biến sâu sắc và đặc thù con đường Việt Nam
          </h4>
          <p className="text-stone-300 text-xs leading-relaxed max-w-2xl">
            Tính chất và đặc điểm to nhất của thời kỳ quá độ tại Việt Nam quy định hệ thống nhiệm vụ cải biến to lớn trên mọi mặt đời sống. Đây là một cuộc cách mạng sâu sắc, toàn diện và lâu dài đòi hỏi Đảng lãnh đạo và nhân dân cùng kiên định nỗ lực từng bước vững chắc.
          </p>
        </div>

        <div className="p-3 bg-white/10 rounded-full text-amber-500 border border-white/10 shrink-0 self-start md:self-center">
          <Activity className="w-6 h-6 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
