"use client";
import React, { useState, useRef } from "react";
import { 
  Users, 
  Cpu, 
  Heart, 
  UserCheck, 
  ArrowRight, 
  Quote, 
  CheckCircle2, 
  ShieldAlert,
  Award,
  Activity,
  Smile,
  Compass
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmSocialismFeatures() {
  const [activeFeature, setActiveFeature] = useState(0); // 0 | 1 | 2 | 3
  const [distributionInput, setDistributionInput] = useState("high"); // high | low | none | disabled
  const containerRef = useRef(null);

  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".animate-content") : document.querySelectorAll(".animate-content");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
    );
      }
    }
  }, { scope: containerRef, dependencies: [activeFeature] });

  // 4 Đặc trưng cơ bản
  const features = [
    {
      id: 0,
      title: "1. Về chính trị: Do nhân dân làm chủ",
      icon: Users,
      color: "from-amber-600 to-amber-700",
      accent: "text-amber-700 bg-amber-500/10 border-amber-500/20",
      desc: "Xã hội XHCN là xã hội có địa vị cao nhất thuộc về nhân dân, hoạt động vì lợi ích nhân dân.",
      content: (
        <div className="space-y-4">
          <p className="text-stone-750 leading-relaxed text-sm">
            Hồ Chí Minh chỉ rõ: trong xã hội xã hội chủ nghĩa, <strong>nhân dân giữ địa vị cao nhất</strong>. Mọi quyền lợi, quyền hạn, quyền lực đều thuộc về nhân dân; mọi hoạt động kiến thiết quốc gia, bảo vệ chế độ cũng đều do nhân dân gánh vác.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-3">
            <div className="bg-amber-500/5 p-4 rounded-xl border border-amber-500/20">
              <h5 className="font-bold text-stone-900 text-xs mb-1 uppercase tracking-wider text-amber-800">
                Nền tảng tổ chức
              </h5>
              <p className="text-stone-650 text-xs leading-relaxed">
                Nhân dân làm chủ dưới sự lãnh đạo của Đảng Cộng sản, trên cơ sở liên minh công - nông kiên cố.
              </p>
            </div>
            <div className="bg-amber-500/5 p-4 rounded-xl border border-amber-500/20">
              <h5 className="font-bold text-stone-900 text-xs mb-1 uppercase tracking-wider text-amber-800">
                Bản chất nhà nước
              </h5>
              <p className="text-stone-650 text-xs leading-relaxed">
                Nhà nước dân chủ pháp quyền thực sự: Của dân, do dân, vì dân, luôn đặt lợi ích của nhân dân lên hàng đầu.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest block">
              Tư tưởng chính trị Hồ Chí Minh thể hiện:
            </span>
            <ul className="space-y-2 text-stone-700 text-xs">
              <li className="flex items-start gap-2">
                <span className="text-amber-700 font-bold mt-0.5">1.</span>
                <span><strong>Tính nhân văn cao cả:</strong> Luôn trân trọng và hướng tới tự do, giải phóng con người khỏi ách bóc lột.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700 font-bold mt-0.5">2.</span>
                <span><strong>Nhận thức sâu sắc về vai trò nhân dân:</strong> Coi nhân dân là gốc rễ, là động lực quyết định thắng lợi cách mạng.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700 font-bold mt-0.5">3.</span>
                <span><strong>Đảng lãnh đạo dựa vào dân:</strong> Huy động hiệu quả nhân lực, tài lực, trí lực của dân để trực tiếp mang lại lợi ích cho nhân dân.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "2. Về kinh tế: Lực lượng sản xuất hiện đại & Công hữu",
      icon: Cpu,
      color: "from-orange-600 to-orange-700",
      accent: "text-orange-700 bg-orange-500/10 border-orange-500/20",
      desc: "Nền kinh tế phát triển cao, sở hữu công cộng đối với các tư liệu sản xuất cốt lõi.",
      content: (
        <div className="space-y-4">
          <p className="text-stone-750 leading-relaxed text-sm">
            Theo Hồ Chí Minh, chủ nghĩa xã hội phải phát triển cao hơn chủ nghĩa tư bản, do đó bắt buộc phải có một <strong>nền kinh tế phát triển vượt bậc</strong> dựa trên hai trụ cột:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-3">
            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest block mb-1">
                Trụ cột 1
              </span>
              <h5 className="font-bold text-stone-900 text-xs mb-1.5">Lực lượng sản xuất hiện đại</h5>
              <p className="text-stone-600 text-xs leading-relaxed">
                Công cụ, phương tiện lao động tiến bộ không ngừng tiến hóa từ thủ công lên cơ giới hóa: máy móc, sức điện, và sức nguyên tử.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest block mb-1">
                Trụ cột 2
              </span>
              <h5 className="font-bold text-stone-900 text-xs mb-1.5">Sở hữu tư liệu sản xuất công hữu</h5>
              <p className="text-stone-600 text-xs leading-relaxed">
                Các tư liệu sản xuất chủ yếu đều thuộc sở hữu của toàn dân, xóa bỏ nguồn gốc bóc lột của giai cấp tư sản thống trị.
              </p>
            </div>
          </div>

          {/* Công hữu block */}
          <div className="p-4.5 rounded-2xl bg-orange-500/5 border border-orange-500/25 space-y-2">
            <h5 className="font-bold text-stone-900 text-xs uppercase tracking-wider text-orange-800">
              Quan điểm của Bác về chế độ Công Hữu
            </h5>
            <p className="text-stone-700 text-xs leading-relaxed italic">
              Người diễn đạt một cách giản dị, mộc mạc: <strong>&quot;Lấy nhà máy, xe lửa, ngân hàng, v.v., làm của chung&quot;</strong>. Đây chính là tư liệu sản xuất cốt lõi thuộc về nhân dân dưới sự quản lý của nhà nước cách mạng.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "3. Về văn hóa, đạo đức: Công bằng & Hợp lý",
      icon: Heart,
      color: "from-rose-600 to-rose-700",
      accent: "text-rose-700 bg-rose-500/10 border-rose-500/20",
      desc: "Trình độ đạo đức cao, xóa bỏ bóc lột, tôn trọng cá nhân và phân phối công bằng theo lao động.",
      content: (
        <div className="space-y-4">
          <p className="text-stone-750 leading-relaxed text-sm">
            Chủ nghĩa xã hội bảo đảm sự công bằng, hợp lý tối đa trong mọi quan hệ xã hội. Con người được tôn trọng tuyệt đối, các dân tộc đoàn kết, hòa bình gắn bó:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="bg-rose-500/5 p-4 rounded-xl border border-rose-500/20 space-y-1.5">
              <h5 className="font-bold text-stone-900 text-xs text-rose-800 uppercase tracking-wider">
                Giải phóng cá nhân
              </h5>
              <p className="text-stone-650 text-xs leading-relaxed">
                Chỉ có CNXH mới thực sự chú ý xem xét, thỏa mãn các lợi ích cá nhân đúng đắn, giúp mỗi người cải thiện đời sống riêng, phát huy tính cách và sở trường riêng của mình.
              </p>
            </div>
            <div className="bg-rose-500/5 p-4 rounded-xl border border-rose-500/20 space-y-1.5">
              <h5 className="font-bold text-rose-800 text-xs uppercase tracking-wider">
                Môi trường xã hội nhân văn
              </h5>
              <p className="text-stone-650 text-xs leading-relaxed">
                Xóa bỏ triệt để hiện tượng người bóc lột người; đoàn kết không phân biệt chủng tộc; con người hiểu nhau và thương yêu nhau chân thành.
              </p>
            </div>
          </div>

          {/* Interactive Distribution simulation */}
          <div className="p-4.5 rounded-2xl bg-white border border-stone-200 space-y-3.5 my-2">
            <span className="text-[10px] font-black text-rose-700 uppercase tracking-widest block">
              Mô phỏng nguyên tắc phân phối lao động của CNXH
            </span>
            <p className="text-stone-650 text-xs leading-relaxed">
              Nguyên tắc vàng: <strong>&quot;Làm nhiều hưởng nhiều, làm ít hưởng ít, không làm thì không hưởng&quot;</strong> (ngoại trừ trẻ em, người già, người mất khả năng lao động). Nhấp chọn mức độ đóng góp lao động:
            </p>
            
            <div className="flex gap-2">
              <button 
                onClick={() => setDistributionInput("high")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
                  distributionInput === "high"
                    ? "bg-rose-600 text-white shadow-sm"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                Lao động nhiều
              </button>
              <button 
                onClick={() => setDistributionInput("low")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
                  distributionInput === "low"
                    ? "bg-rose-600 text-white shadow-sm"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                Lao động ít
              </button>
              <button 
                onClick={() => setDistributionInput("none")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
                  distributionInput === "none"
                    ? "bg-rose-600 text-white shadow-sm"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                Lười biếng / Không làm
              </button>
              <button 
                onClick={() => setDistributionInput("disabled")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
                  distributionInput === "disabled"
                    ? "bg-rose-600 text-white shadow-sm"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                Mất khả năng lao động
              </button>
            </div>

            <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-xs">
              {distributionInput === "high" && (
                <p className="text-emerald-700 font-medium">
                  → <strong>Kết quả:</strong> Hưởng thành quả lao động ở mức cao. Khích lệ tinh thần làm việc tích cực, đóng góp lớn cho xã hội.
                </p>
              )}
              {distributionInput === "low" && (
                <p className="text-amber-700 font-medium">
                  → <strong>Kết quả:</strong> Hưởng thành quả lao động ở mức thấp tương đương. Bảo đảm tính công bằng khách quan.
                </p>
              )}
              {distributionInput === "none" && (
                <p className="text-red-700 font-medium">
                  → <strong>Kết quả:</strong> Không được hưởng thành quả xã hội. Xóa bỏ thói ăn bám, lười lao động của chế độ bóc lột cũ.
                </p>
              )}
              {distributionInput === "disabled" && (
                <p className="text-blue-700 font-medium">
                  → <strong>Kết quả:</strong> Nhận trợ cấp xã hội, chăm sóc y tế và giáo dục miễn phí. Thể hiện tính nhân văn sâu sắc của CNXH.
                </p>
              )}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "4. Về chủ thể: Công trình tập thể dưới sự lãnh đạo của Đảng",
      icon: UserCheck,
      color: "from-emerald-600 to-emerald-700",
      accent: "text-emerald-700 bg-emerald-500/10 border-emerald-500/20",
      desc: "Nhân dân là chủ thể xây dựng, Đảng Cộng sản đóng vai trò lãnh đạo định hướng sáng tạo.",
      content: (
        <div className="space-y-4">
          <p className="text-stone-750 leading-relaxed text-sm">
            Chủ nghĩa xã hội không phải là công trình từ trên xuống mà là <strong>sự nghiệp tập thể của chính quần chúng nhân dân</strong>, đặt dưới sự dẫn dắt của một Đảng cách mạng tiên phong chân chính:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-3">
            <div className="bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/20">
              <h5 className="font-bold text-stone-900 text-xs mb-1 uppercase tracking-wider text-emerald-800">
                Vai trò của nhân dân
              </h5>
              <p className="text-stone-650 text-xs leading-relaxed">
                Nhân dân là chủ thể sáng tạo, là lực lượng trực tiếp quyết định tốc độ xây dựng, sự vững mạnh và trường tồn của chế độ XHCN.
              </p>
            </div>
            <div className="bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/20">
              <h5 className="font-bold text-stone-900 text-xs mb-1 uppercase tracking-wider text-emerald-800">
                Mục tiêu thống nhất
              </h5>
              <p className="text-stone-650 text-xs leading-relaxed">
                Khác biệt hoàn toàn với chế độ cũ, lợi ích của mỗi cá nhân người lao động gắn bó chặt chẽ, thống nhất hữu cơ với lợi ích của toàn xã hội.
              </p>
            </div>
          </div>

          {/* Party Leadership Quote */}
          <div className="relative overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-teal-600/10 border-l-4 border-emerald-600 shadow-sm">
            <Quote className="absolute top-2 left-2 w-12 h-12 text-emerald-600/5 -rotate-12 pointer-events-none" />
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-800 block mb-2">
              Khẳng định đanh thép của Hồ Chí Minh
            </span>
            <p className="relative z-10 font-serif italic text-stone-850 text-xs md:text-sm leading-relaxed pl-3">
              &quot;Cần có sự lãnh đạo của một đảng cách mạng chân chính của giai cấp công nhân, toàn tâm toàn ý phục vụ nhân dân. Chỉ có sự lãnh đạo của một đảng biết vận dụng sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước mình thì mới có thể đưa cách mạng giải phóng dân tộc và cách mạng xã hội chủ nghĩa đến thành công.&quot;
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-stone-50 border border-stone-200/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-full">
            Mục II.1.c
          </span>
          <h3 className="text-xl md:text-2xl font-serif font-black text-stone-900 mt-2">
            Một số đặc trưng cơ bản của xã hội Xã hội Chủ nghĩa
          </h3>
          <p className="text-stone-500 text-xs md:text-sm mt-1">
            Bản chất ưu việt, khác biệt hoàn toàn với các chế độ xã hội bóc lột cũ trong lịch sử.
          </p>
        </div>
      </div>

      <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
        Hồ Chí Minh tiếp cận hệ thống đặc trưng của chủ nghĩa xã hội một cách toàn diện qua các lĩnh vực của đời sống xã hội, đúc kết thành <strong>4 đặc trưng cơ bản</strong> sau:
      </p>

      {/* Grid of 4 features */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {features.map((feat) => {
          const IconComponent = feat.icon;
          return (
            <div
              key={feat.id}
              onClick={() => setActiveFeature(feat.id)}
              className={`p-5 rounded-2xl border cursor-pointer flex flex-col justify-between transition-all duration-300 ${
                activeFeature === feat.id
                  ? `bg-stone-900 text-white border-stone-900 shadow-md transform -translate-y-1`
                  : "bg-white border-stone-200 hover:border-stone-300 hover:shadow-sm"
              }`}
            >
              <div className="space-y-4">
                <div className={`p-2 rounded-xl w-fit border ${
                  activeFeature === feat.id ? "text-amber-500 bg-white/10 border-white/10" : feat.accent
                }`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-black text-xs md:text-sm leading-tight">
                    {feat.title.split(": ")[0]}
                  </h4>
                  <h5 className={`font-serif font-bold text-sm md:text-base mt-1 ${
                    activeFeature === feat.id ? "text-amber-500" : "text-stone-850"
                  }`}>
                    {feat.title.split(": ")[1]}
                  </h5>
                </div>
              </div>
              <p className={`text-xs mt-3.5 leading-normal ${
                activeFeature === feat.id ? "text-stone-300" : "text-stone-600"
              }`}>
                {feat.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Feature Content Panel */}
      <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm animate-content">
        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block mb-2">
          Chi tiết đặc trưng đang xem
        </span>
        <h4 className="font-serif font-black text-stone-900 text-base md:text-lg border-b border-stone-100 pb-3 mb-4 flex items-center gap-2">
          {(() => {
            const ActiveIcon = features[activeFeature].icon;
            return <ActiveIcon className="w-5 h-5 text-amber-600" />;
          })()}
          {features[activeFeature].title}
        </h4>
        {features[activeFeature].content}
      </div>

      {/* Overall Conclusion */}
      <div className="p-5 rounded-2xl bg-stone-900 text-white flex items-center gap-4.5 border border-stone-850 shadow-sm">
        <div className="p-3 rounded-full bg-white/10 text-amber-500 border border-white/10 shrink-0">
          <Compass className="w-6 h-6 animate-spin-slow" />
        </div>
        <div className="space-y-1">
          <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest block">
            Kết luận tổng kết
          </span>
          <p className="text-stone-300 text-xs leading-relaxed">
            Hồ Chí Minh chỉ rõ: Xã hội xã hội chủ nghĩa có bản chất khác hẳn các xã hội đã tồn tại trong lịch sử, là đỉnh cao tiến hóa nhân loại nơi nhân dân lao động làm chủ, không còn bất kỳ dấu vết áp bức, bóc lột người nào.
          </p>
        </div>
      </div>
    </div>
  );
}
