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
  BookOpen,
  Globe,
  AlertTriangle,
  Flame,
  FileText
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmTransitionPrinciples() {
  const [activeTab, setActiveTab] = useState("marx"); // marx | independence | solidarity | construction
  const [selectedDisease, setSelectedDisease] = useState(null); // null | 1..5
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".animate-tab-content",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
  }, { scope: containerRef, dependencies: [activeTab] });

  // 5 căn bệnh của chủ nghĩa cá nhân
  const diseases = [
    {
      id: 1,
      name: "Bệnh tham lam",
      description: "Chạy theo danh lợi, tiền tài, vun vén cho cá nhân mà quên đi lợi ích chung của tập thể và nhân dân.",
      quote: "Đặt lợi ích cá nhân lên trên lợi ích của Đảng, của nhân dân, chỉ chăm lo cho gia đình và bản thân mình."
    },
    {
      id: 2,
      name: "Bệnh kiêu ngạo",
      description: "Tự cao tự đại, xem thường tập thể, cho mình là thông minh nhất, tài giỏi nhất mà không chịu lắng nghe.",
      quote: "Khi được giao việc gì thì tự đắc, cho mình là anh hùng, xem khinh người khác, không muốn học hỏi ai."
    },
    {
      id: 3,
      name: "Bệnh háo danh",
      description: "Thích được ca tụng, ưa thành tích ảo, phô trương hình thức để lấy tiếng vang chứ không làm việc thực chất.",
      quote: "Chỉ muốn làm những việc có tiếng tăm, không muốn làm những việc âm thầm nhưng thiết thực."
    },
    {
      id: 4,
      name: "Bệnh vô tổ chức, vô kỷ luật",
      description: "Tự ý hành động, vô nguyên tắc, coi thường kỷ cương, nội quy của Đảng và pháp luật của Nhà nước.",
      quote: "Muốn sao làm vậy, không theo nghị quyết, không báo cáo, tự đặt mình ra ngoài kỷ luật của tập thể."
    },
    {
      id: 5,
      name: "Gây hại tập thể",
      description: "Làm chia rẽ mất đoàn kết nội bộ, gây hại cho đồng chí, cho nhân dân và suy yếu uy tín tổ chức đảng.",
      quote: "Kéo bè kéo cánh, gièm pha đồng chí, xa rời nhân dân, làm hại đến danh dự và uy tín của Đảng."
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-stone-50 border border-stone-200/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-widest bg-[rgba(var(--accent-rgb),0.1)] px-2.5 py-1 rounded-full">
            Mục II.3.b
          </span>
          <h3 className="text-xl md:text-2xl font-serif font-black text-stone-900 mt-2">
            Nguyên tắc xây dựng CNXH trong thời kỳ quá độ
          </h3>
          <p className="text-stone-500 text-xs md:text-sm mt-1">
            Tìm hiểu 4 nguyên tắc cốt lõi dẫn đường cho công cuộc xây dựng chủ nghĩa xã hội của Hồ Chí Minh.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap bg-stone-250/60 p-1 rounded-xl self-start md:self-center">
          <button
            onClick={() => setActiveTab("marx")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "marx"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Nền tảng Mác - Lênin
          </button>
          <button
            onClick={() => setActiveTab("independence")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "independence"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Độc lập dân tộc
          </button>
          <button
            onClick={() => setActiveTab("solidarity")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "solidarity"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Đoàn kết quốc tế
          </button>
          <button
            onClick={() => setActiveTab("construction")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "construction"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Xây đi đôi với Chống
          </button>
        </div>
      </div>

      {/* Intro Box */}
      <div className="p-4 bg-stone-100/60 border border-stone-200 rounded-2xl flex gap-3.5 items-start">
        <div className="p-2 rounded-xl bg-white text-[var(--accent)] shrink-0 border border-stone-200">
          <Compass className="w-5 h-5" />
        </div>
        <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
          Theo Hồ Chí Minh, xây dựng chủ nghĩa xã hội là một quá trình sâu sắc, phức tạp, lâu dài, khó khăn và gian khổ, đòi hỏi tính năng động, sáng tạo cực kỳ cao. Song, tính năng động sáng tạo ấy phải luôn <strong>tuân thủ nghiêm ngặt các nguyên tắc chính trị cốt lõi</strong>.
        </p>
      </div>

      {/* Main Content Areas */}
      <div className="animate-tab-content space-y-6">
        
        {/* 1. NỀN TẢNG MÁC - LÊNIN */}
        {activeTab === "marx" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-4">
                <h4 className="font-serif font-black text-stone-900 text-sm md:text-base flex items-center gap-2">
                  <BookOpen className="w-4.5 h-4.5 text-[var(--accent)]" />
                  Mọi tư tưởng, hành động phải trên nền tảng chủ nghĩa Mác - Lênin
                </h4>
                <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
                  Hồ Chí Minh luôn khẳng định vai trò là khoa học cách mạng dẫn lối của chủ nghĩa Mác - Lênin. Người quan niệm đây không phải là những tín điều cứng nhắc mà là kim chỉ nam cho mọi hành động thực tiễn.
                </p>
                <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                  <h5 className="font-bold text-stone-800 text-xs uppercase tracking-wider">Hệ thống Lý luận Khoa học</h5>
                  <ul className="space-y-2 text-stone-650 text-xs md:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-2"></span>
                      <span>Là khoa học về giải phóng giai cấp, cách mạng của quần chúng bị áp bức, bóc lột.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-2"></span>
                      <span>Là khoa học về sự thắng lợi của chủ nghĩa xã hội ở tất cả các nước.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-2"></span>
                      <span>Là khoa học về xây dựng chủ nghĩa xã hội.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[rgba(var(--accent-rgb),0.03)] to-stone-100 p-6 rounded-3xl border border-stone-200 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-[10px] font-black text-[var(--accent)] uppercase tracking-wider bg-[rgba(var(--accent-rgb),0.1)] px-2 py-0.5 rounded-md">
                    Phương pháp luận sáng tạo
                  </span>
                  <h5 className="font-serif font-black text-stone-900 text-sm">
                    Vận dụng sáng tạo, chống giáo điều khô cứng
                  </h5>
                  <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                    Xây dựng chủ nghĩa xã hội đòi hỏi phải trung thành với lý luận nhưng phải hết sức tránh tình trạng rập khuôn máy móc, học vẹt.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm relative italic text-stone-805 text-xs leading-relaxed">
                  <Quote className="w-8 h-8 text-[rgba(var(--accent-rgb),0.1)] absolute -top-3 -left-2 -z-0" />
                  <span className="relative z-10">
                    &quot;Phải không ngừng học tập, lập trường, quan điểm và phương pháp của chủ nghĩa Mác - Lênin&quot;, &quot;cụ thể hóa chủ nghĩa Mác - Lênin cho thích hợp với điều kiện hoàn cảnh từng lúc, từng nơi&quot;.
                  </span>
                  <div className="text-right text-[10px] font-bold text-stone-500 mt-2">— Hồ Chí Minh</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. GIỮ VỮNG ĐỘC LẬP DÂN TỘC */}
        {activeTab === "independence" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Cột trái: Độc lập dân tộc */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
                  <span className="p-1 rounded bg-[rgba(var(--accent-rgb),0.1)] text-[var(--accent)]">
                    <Heart className="w-4 h-4" />
                  </span>
                  <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider">
                    Độc lập là mục tiêu trước hết
                  </h5>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Mục đích cao nhất của cách mạng Việt Nam là giành độc lập cho Tổ quốc, tự do cho nhân dân.
                </p>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-250/60 text-stone-700 text-xs italic leading-relaxed">
                  &quot;Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mệnh và của cải để giữ vững quyền tự do và độc lập ấy&quot;.
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Trong Di chúc, Người mong muốn đất nước sau chiến tranh phải &quot;thống nhất, độc lập, dân chủ và giàu mạnh&quot;.
                </p>
              </div>

              {/* Cột giữa: Sơ đồ biện chứng trực quan */}
              <div className="bg-gradient-to-b from-stone-900 to-stone-955 text-white p-5 rounded-3xl border border-stone-800 shadow-md flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h5 className="font-serif font-black text-amber-500 text-xs md:text-sm uppercase tracking-wider">
                    Mối quan hệ biện chứng
                  </h5>
                  <p className="text-stone-300 text-[11px] leading-relaxed">
                    Mối quan hệ hữu cơ không thể tách rời giữa Độc lập dân tộc và Chủ nghĩa xã hội trong tiến trình cách mạng Việt Nam.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3 py-2 bg-white/5 rounded-2xl border border-white/5 p-4">
                  <div className="w-full text-center p-2 rounded bg-amber-500/10 border border-amber-500/25 text-amber-400 font-bold text-xs">
                    Độc lập dân tộc
                    <div className="text-[9px] font-normal text-stone-300 mt-0.5">(Điều kiện tiên quyết)</div>
                  </div>

                  <div className="flex flex-col items-center text-amber-500 shrink-0">
                    <span className="text-xs font-bold leading-none">▲</span>
                    <span className="text-[9px] font-mono tracking-widest my-0.5">BIỆN CHỨNG</span>
                    <span className="text-xs font-bold leading-none">▼</span>
                  </div>

                  <div className="w-full text-center p-2 rounded bg-amber-500/10 border border-amber-500/25 text-amber-400 font-bold text-xs">
                    Chủ nghĩa xã hội
                    <div className="text-[9px] font-normal text-stone-300 mt-0.5">(Cơ sở bảo đảm trường tồn)</div>
                  </div>
                </div>

                <p className="text-[10px] text-stone-400 italic text-center">
                  Độc lập là tiền đề để tiến tới CNXH; CNXH là bức tường thành vững chắc bảo vệ nền độc lập vĩnh viễn.
                </p>
              </div>

              {/* Cột phải: Trích dẫn nổi tiếng */}
              <div className="bg-gradient-to-br from-[rgba(var(--accent-rgb),0.03)] to-stone-100 p-6 rounded-2xl border border-stone-200 flex flex-col justify-between">
                <div className="space-y-3">
                  <h5 className="font-serif font-black text-stone-900 text-sm flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                    Chân lý thời đại
                  </h5>
                  <p className="text-stone-650 text-xs leading-relaxed">
                    Lời hiệu triệu bất hủ của Bác Hồ kết tinh khát vọng ngàn đời của dân tộc Việt Nam.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm relative italic text-stone-850 text-xs md:text-sm font-serif font-bold text-center leading-relaxed">
                  <Quote className="w-8 h-8 text-[rgba(var(--accent-rgb),0.1)] absolute top-2 left-2" />
                  <p className="relative z-10 pt-4 pb-2">
                    &quot;Không có gì quý hơn độc lập, tự do&quot;
                  </p>
                  <span className="block text-[10px] font-sans font-bold text-stone-500 text-right mt-1">— Tuyên ngôn năm 1966</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. ĐOÀN KẾT & HỌC TẬP KINH NGHIỆM QUỐC TẾ */}
        {activeTab === "solidarity" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-4">
                <h4 className="font-serif font-black text-stone-900 text-sm md:text-base flex items-center gap-2">
                  <Globe className="w-4.5 h-4.5 text-[var(--accent)]" />
                  Phải đoàn kết, học tập kinh nghiệm của các nước anh em
                </h4>
                <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
                  Hồ Chí Minh khẳng định cách mạng Việt Nam không tách rời dòng chảy thế giới. Việt Nam cần tranh thủ sự ủng hộ rộng rãi và học tập kinh nghiệm từ các quốc gia xã hội chủ nghĩa khác.
                </p>

                <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                  <h5 className="font-bold text-stone-800 text-xs uppercase tracking-wider">Nguyên tắc đoàn kết quốc tế</h5>
                  <ul className="space-y-3 text-stone-650 text-xs md:text-sm">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>Xác định cách mạng Việt Nam là một bộ phận của lực lượng hòa bình, dân chủ, xã hội chủ nghĩa thế giới.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>Sự đoàn kết giữa các nước xã hội chủ nghĩa và sự nhất trí giữa các Đảng có ý nghĩa quan trọng bậc nhất.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Khác biệt VN vs Liên Xô */}
              <div className="bg-gradient-to-br from-stone-900 to-stone-955 text-white p-6 rounded-3xl border border-stone-800 flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded">
                    Tư duy độc lập tự chủ
                  </span>
                  <h5 className="font-serif font-black text-white text-sm md:text-base">
                    Sự khác biệt thực tiễn giữa Việt Nam & Liên Xô
                  </h5>
                  <p className="text-stone-300 text-xs leading-relaxed">
                    Bác Hồ đánh giá rất cao thành tựu vĩ đại của Liên Xô, nhưng kịch liệt chống tư tưởng rập khuôn, copy nguyên bản. Người nhấn mạnh tính chất địa lý, văn hóa riêng của đất nước để tìm ra con đường đi phù hợp nhất.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-stone-200 italic font-serif text-xs md:text-sm leading-relaxed relative">
                  <Quote className="w-7 h-7 text-amber-500/20 absolute -top-2.5 -left-1" />
                  &quot;Ta không thể giống Liên Xô, vì Liên Xô có phong tục tập quán khác, có lịch sử địa lý khác... ta có thể đi con đường khác để tiến lên CNXH&quot;
                  <span className="block text-[10px] font-sans font-bold text-amber-500 text-right mt-2">— Hồ Chí Minh</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. XÂY ĐI ĐÔI VỚI CHỐNG */}
        {activeTab === "construction" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-4">
                <h4 className="font-serif font-black text-stone-900 text-sm md:text-base flex items-center gap-2">
                  <Scale className="w-4.5 h-4.5 text-[var(--accent)]" />
                  Xây dựng phải đi đôi với chống lại các lực lượng cản trở
                </h4>
                <p className="text-stone-650 text-xs leading-relaxed">
                  Bên cạnh việc ra sức kiến thiết các lĩnh vực đời sống mới (Xây), phải quyết liệt đấu tranh chống âm mưu phá hoại bên ngoài, tàn dư cũ và bài trừ giặc nội xâm bên trong là chủ nghĩa cá nhân (Chống).
                </p>

                {/* Cảnh cáo bệnh làm thinh */}
                <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-2">
                  <h5 className="font-bold text-amber-800 text-xs flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-700" />
                    Cảnh cáo nghiêm khắc &quot;Căn bệnh làm thinh&quot;
                  </h5>
                  <p className="text-stone-700 text-xs leading-normal">
                    Người yêu cầu người cách mạng phải dũng cảm đấu tranh chống lại các quan điểm lệch lạc: nghe những lời bình luận không đúng, cũng làm thinh, không dám biện bác; ai nói sao, ai làm gì cũng mặc kệ.
                  </p>
                </div>

                <div className="p-4.5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2.5">
                  <h5 className="font-bold text-stone-850 text-xs uppercase tracking-wider">Lời dặn đối với kẻ địch</h5>
                  <p className="text-stone-650 text-xs leading-relaxed italic">
                    &quot;Đối với kẻ địch, người cộng sản phải luôn tỉnh táo, giữ vững lập trường, quyết không được hòa bình mà mất cảnh giác. Phải luôn sẵn sàng đập tan mọi âm mưu độc ác của kẻ địch, bảo vệ những thành quả của cách mạng, bảo vệ lao động hòa bình của nhân dân&quot;.
                  </p>
                </div>
              </div>

              {/* 5 Căn bệnh của chủ nghĩa cá nhân */}
              <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 border-b border-stone-100 pb-2.5">
                  <span className="p-1 rounded bg-red-100 text-red-700">
                    <Flame className="w-4 h-4" />
                  </span>
                  <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider">
                    5 Bệnh lý nguy hại của Chủ nghĩa Cá nhân
                  </h5>
                </div>
                
                <p className="text-stone-500 text-[11px] leading-relaxed">
                  Chủ nghĩa cá nhân là thứ giặc nội xâm nguy hiểm nhất. Bác Hồ chỉ ra các bệnh lý nghiêm trọng cần bài trừ (Click vào từng bệnh để xem chi tiết):
                </p>

                {/* Diseases Cards List */}
                <div className="space-y-2">
                  {diseases.map((d) => (
                    <div 
                      key={d.id}
                      onClick={() => setSelectedDisease(selectedDisease === d.id ? null : d.id)}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                        selectedDisease === d.id 
                          ? "bg-red-500/5 border-red-500/30 shadow-sm"
                          : "bg-stone-50 border-stone-200/80 hover:bg-stone-100/60"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-stone-800 text-xs md:text-sm">
                          {d.id}. {d.name}
                        </span>
                        <span className="text-[10px] text-stone-400 font-bold">
                          {selectedDisease === d.id ? "Thu gọn ▲" : "Xem thêm ▼"}
                        </span>
                      </div>

                      {selectedDisease === d.id && (
                        <div className="mt-2.5 pt-2.5 border-t border-red-200/30 text-xs space-y-2 animate-tab-content">
                          <p className="text-stone-700 leading-relaxed font-sans">
                            {d.description}
                          </p>
                          <div className="bg-white/60 p-2 rounded-lg border border-red-200/20 italic text-stone-600 text-[11px]">
                            &quot;{d.quote}&quot;
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Footer Conclusion */}
      <div className="relative overflow-hidden p-6 rounded-3xl bg-stone-900 text-white shadow-md flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-1.5">
          <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest block">
            Kết luận tổng kết mục II.3.b
          </span>
          <h4 className="font-serif font-black text-sm md:text-base">
            Tính thống nhất biện chứng của các nguyên tắc
          </h4>
          <p className="text-stone-300 text-xs leading-relaxed max-w-2xl">
            Bốn nguyên tắc xây dựng chủ nghĩa xã hội trong thời kỳ quá độ của Hồ Chí Minh có mối quan hệ biện chứng chặt chẽ, tạo thành một chỉnh thể thống nhất bảo đảm cho công cuộc cải biến xã hội cũ xây dựng xã hội mới ở Việt Nam luôn đi đúng hướng và đi tới thắng lợi hoàn toàn.
          </p>
        </div>

        <div className="p-3 bg-white/10 rounded-full text-amber-500 border border-white/10 shrink-0 self-start md:self-center">
          <Activity className="w-6 h-6 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
