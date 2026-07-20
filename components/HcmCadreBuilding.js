"use client";
import React, { useRef } from "react";
import { 
  ShieldCheck, 
  Sparkles, 
  Quote, 
  CheckCircle2, 
  BookOpen, 
  Award,
  Users,
  Brain,
  GraduationCap,
  Heart,
  TrendingUp,
  AlertOctagon,
  Scale
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HcmCadreNegativeTraits from "./HcmCadreNegativeTraits";

export default function HcmCadreBuilding() {
  const containerRef = useRef(null);

  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".cadre-card") : document.querySelectorAll(".cadre-card");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );
      }
    }
  }, { scope: containerRef });

  const requirements = [
    {
      id: 1,
      title: "Phải tuyệt đối trung thành với Đảng",
      desc: "Cán bộ, đảng viên phải tuyệt đối trung thành với Đảng, suốt đời phấn đấu cho lợi ích của cách mạng, vì mục tiêu lý tưởng của Đảng. Là những người &quot;đặt lợi ích của Đảng lên trên hết, lên trước hết&quot;. Vì lợi ích của Đảng tức là lợi ích của dân tộc, của Tổ quốc. Vô luận lúc nào, vô luận việc gì, đảng viên và cán bộ phải đặt lợi ích của Đảng ra trước, lợi ích của cá nhân lại sau... Nếu gặp khi lợi ích chung của Đảng mâu thuẫn với lợi ích riêng của cá nhân, thì phải kiên quyết hy sinh lợi ích của cá nhân cho lợi ích của Đảng — khi cần đến tính mệnh cũng phải vui lòng hy sinh cho Đảng.",
      icon: ShieldCheck,
      iconBg: "bg-red-50 text-red-650",
      accentBorder: "border-l-red-550"
    },
    {
      id: 2,
      title: "Phải nghiêm chỉnh thực hiện Cương lĩnh, đường lối",
      desc: "Nghiêm chỉnh thực hiện Cương lĩnh, đường lối, quan điểm, chủ trương, nghị quyết của Đảng và các nguyên tắc xây dựng Đảng, đảm bảo sự thống nhất tuyệt đối trong hành động của toàn Đảng.",
      icon: CheckCircle2,
      iconBg: "bg-blue-50 text-blue-600",
      accentBorder: "border-l-blue-550"
    },
    {
      id: 3,
      title: "Phải luôn luôn tu dưỡng, rèn luyện đạo đức cách mạng",
      desc: "Luôn luôn tu dưỡng, rèn luyện, trau dồi đạo đức cách mạng suốt cuộc đời hoạt động. Đạo đức cách mạng không phải trên trời sa xuống mà do rèn luyện gian khổ hằng ngày mà có, như ngọc càng mài càng sáng, vàng càng luyện càng trong.",
      icon: Award,
      iconBg: "bg-amber-50 text-amber-650",
      accentBorder: "border-l-amber-550"
    },
    {
      id: 4,
      title: "Phải luôn luôn học tập nâng cao trình độ về mọi mặt",
      desc: "Học tập không ngừng nâng cao trình độ lý luận chính trị, chuyên môn nghiệp vụ, văn hóa và năng lực hoạt động thực tiễn để hoàn thành tốt mọi nhiệm vụ được giao phó trong bối cảnh lịch sử mới.",
      icon: GraduationCap,
      iconBg: "bg-purple-50 text-purple-600",
      accentBorder: "border-l-purple-550"
    },
    {
      id: 5,
      title: "Phải có mối liên hệ mật thiết với nhân dân",
      desc: "Cán bộ, đảng viên là người đầy tớ thật trung thành của nhân dân, tôn trọng và phát huy quyền làm chủ của nhân dân; tiên phong, gương mẫu, chịu khổ trước nhân dân và vui sau nhân dân — thực hiện đúng phương châm chỉ dẫn: &quot;đảng viên đi trước, làng nước theo sau&quot;.",
      icon: Users,
      iconBg: "bg-rose-50 text-rose-600",
      accentBorder: "border-l-rose-550"
    },
    {
      id: 6,
      title: "Phải luôn luôn chịu trách nhiệm, năng động, sáng tạo",
      desc: "Cán bộ, đảng viên phải là những người hành động với tinh thần &quot;thắng không kiêu, bại không nản&quot;, luôn luôn có tinh thần sáng tạo, hăng hái, nêu cao trách nhiệm, dám chịu trách nhiệm trước Đảng và trước nhân dân.",
      icon: TrendingUp,
      iconBg: "bg-cyan-50 text-cyan-600",
      accentBorder: "border-l-cyan-550"
    },
    {
      id: 7,
      title: "Phải là những người luôn luôn phòng và chống các tiêu cực",
      desc: "Đặc biệt phòng, chống tham ô, lãng phí, quan liêu vì Hồ Chí Minh cho đó là &quot;giặc nội xâm&quot;, những kẻ địch bên trong tàn phá tổ chức. &quot;Mỗi kẻ địch bên trong là một bạn đồng minh của kẻ địch bên ngoài. Địch bên ngoài không đáng sợ. Địch bên trong đáng sợ hơn, vì nó phá hoại từ trong phá ra&quot;.",
      icon: AlertOctagon,
      iconBg: "bg-stone-50 text-stone-700",
      accentBorder: "border-l-stone-600",
      embeddedComponent: true
    }
  ];

  const cadreWorkPrinciples = [
    "Phải hiểu và đánh giá đúng cán bộ",
    "Phải chú trọng huấn luyện cán bộ, huấn luyện một cách thiết thực, có hiệu quả",
    "Phải đề bạt đúng cán bộ",
    "Phải sắp xếp, sử dụng cán bộ cho đúng",
    "Phải kết hợp cán bộ cấp trên phải đến và cán bộ địa phương",
    "Phải chống bệnh địa phương cục bộ",
    "Phải kết hợp cán bộ trẻ với cán bộ cũ",
    "Phải phòng và chống các tiêu cực trong công tác cán bộ",
    "Phải thường xuyên kiểm tra, giúp đỡ cán bộ"
  ];

  return (
    <div ref={containerRef} className="w-full py-2 select-text font-sans bg-transparent space-y-10">
      
      {/* SECTION 1: HEADER */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
            📜 Mục I.2.c
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="text-xs text-stone-500 font-bold font-sans">Xây dựng đội ngũ cán bộ, đảng viên</span>
        </div>
        <h4 className="text-xl md:text-2xl font-black font-playfair tracking-tight mb-2 text-stone-900 leading-tight">
          XÂY DỰNG ĐỘI NGŨ CÁN BỘ, ĐẢNG VIÊN VỪA CÓ ĐỨC VỪA CÓ TÀI
        </h4>
        <p className="text-stone-700 text-sm md:text-base leading-relaxed text-justify">
          Hồ Chí Minh đặc biệt coi trọng việc rèn luyện cán bộ, đảng viên. Người lưu ý phải xây dựng đội ngũ cán bộ, đảng viên <strong>vừa có đức vừa có tài, trong sạch, vững mạnh</strong> toàn diện để làm tròn sứ mệnh dẫn dắt dân tộc đi đến thắng lợi cuối cùng.
        </p>
      </div>

      {/* SECTION 2: 7 REQUIREMENTS (VERTICAL CARDS) */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 border-b border-stone-150 pb-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <h5 className="font-extrabold text-stone-900 text-sm uppercase tracking-wider">
            7 Yêu Cầu Chủ Yếu Đối Với Đội Ngũ Cán Bộ, Đảng Viên
          </h5>
        </div>

        <div className="space-y-5">
          {requirements.map((req, idx) => {
            const ReqIcon = req.icon;
            return (
              <div
                key={req.id}
                className={`cadre-card bg-white border border-stone-200 border-l-4 ${req.accentBorder} rounded-2xl p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.015)] hover:shadow-md transition-all duration-300 space-y-4`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${req.iconBg} shrink-0`}>
                      <ReqIcon className="w-5 h-5" />
                    </div>
                    <h6 className="text-xs md:text-sm font-extrabold text-stone-900 font-playfair leading-tight">
                      {req.id}. {req.title}
                    </h6>
                  </div>
                  <span className="text-[10px] font-bold text-stone-400 bg-stone-50 px-2 py-0.5 rounded-full">
                    Yêu cầu {req.id}
                  </span>
                </div>
                
                <p 
                  className="text-[11px] md:text-xs text-stone-600 leading-relaxed text-justify"
                  dangerouslySetInnerHTML={{ __html: req.desc }}
                />

                {/* If Requirement 7: Embed the negative traits Alert Box component */}
                {req.embeddedComponent && (
                  <div className="pt-2">
                    <HcmCadreNegativeTraits />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: VIEWS ON ERRORS & CORRECTION */}
      <div className="space-y-6 bg-stone-50/50 p-6 md:p-8 rounded-3xl border border-stone-200/60">
        <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
          <Scale className="w-4.5 h-4.5 text-stone-700" />
          <h5 className="font-extrabold text-stone-900 text-sm uppercase tracking-wider">
            Nhận diện sai lầm & Biện pháp khắc phục
          </h5>
        </div>

        <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
          Hồ Chí Minh chỉ rõ thái độ đúng đắn của một Đảng cách mạng chân chính trước sai lầm và khuyết điểm:
        </p>

        {/* Quote Card: Sửa sai lầm */}
        <div className="relative overflow-hidden rounded-2xl bg-amber-500/5 border-l-4 border-amber-600 p-5 shadow-sm">
          <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-amber-600 opacity-10 -rotate-12 pointer-events-none" />
          <div className="relative z-10 space-y-3">
            <p className="font-playfair italic text-stone-850 text-xs md:text-sm leading-relaxed text-justify">
              &quot;Chúng ta không sợ sai lầm, nhưng đã nhận biết sai lầm thì phải ra sức sửa chữa. Vậy nên, ai không phạm những lầm lỗi... thì nên chú ý tránh đi, và gắng sức cho thêm tiến bộ. Ai đã phạm những lầm lỗi... thì phải hết sức sửa chữa... Chúng ta phải ghi sâu những chữ &apos;công bình, chính trực&apos; vào lòng.&quot;
            </p>
            <div className="flex items-center justify-end text-[9px] font-bold text-amber-700 font-sans tracking-wide">
              <span>— Lời dạy của Chủ tịch Hồ Chí Minh</span>
            </div>
          </div>
        </div>

        {/* Quote Card: Không giấu khuyết điểm */}
        <div className="relative overflow-hidden rounded-2xl bg-red-500/5 border-l-4 border-red-650 p-5 shadow-sm">
          <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-red-600 opacity-10 -rotate-12 pointer-events-none" />
          <div className="relative z-10 space-y-3">
            <p className="font-playfair italic text-stone-850 text-xs md:text-sm leading-relaxed text-justify">
              &quot;Một đảng giàu giếm khuyết điểm của mình là một đảng hỏng. Đảng không che giấu những khuyết điểm của mình, không sợ phê bình. Đảng phải nhận khuyết điểm của mình mà tự sửa chữa, để tiến bộ, và để dạy bảo cán bộ và đảng viên.&quot;
            </p>
            <div className="flex items-center justify-end text-[9px] font-bold text-red-750 font-sans tracking-wide">
              <span>— Hồ Chí Minh, tác phẩm &quot;Sửa đổi lối làm việc&quot; (1947)</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 text-stone-700 text-xs md:text-sm leading-relaxed text-justify space-y-3">
          <h6 className="font-bold text-stone-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Các mối quan hệ then chốt cần xử lý khôn khéo:
          </h6>
          <ul className="list-disc list-inside space-y-2.5 pl-2 text-stone-650 text-xs md:text-sm">
            <li><strong>Nghiêm khắc và Độ lượng:</strong> Vừa phải giữ nghiêm kỷ cương vừa bao dung, tạo cơ hội sửa sai.</li>
            <li><strong>Kỷ luật và Khoan hòa:</strong> Kết hợp giữa kỷ luật chặt chẽ và thái độ cư xử nhân văn.</li>
            <li><strong>Phòng đi trước và đi liền với Chống:</strong> Lấy phòng ngừa làm chính, đồng thời kiên quyết bài trừ tiêu cực.</li>
            <li><strong>Đối với người, đối với việc, đối với mình:</strong> Xử lý ba mối quan hệ đều trên cơ sở <strong>vừa có lý vừa có tình</strong>; có tấm lòng bao dung đi liền với xử lý đúng người, đúng kỷ luật của Đảng và pháp luật của Nhà nước, bất kể người đó là ai.</li>
          </ul>
        </div>
      </div>

      {/* SECTION 4: CADRE WORK & CHECKLIST TABLE */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 border-b border-stone-150 pb-2">
          <Brain className="w-4.5 h-4.5 text-stone-750" />
          <h5 className="font-extrabold text-stone-900 text-sm uppercase tracking-wider">
            Quan Điểm Của Bác Về Công Tác Cán Bộ
          </h5>
        </div>

        <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
          Hồ Chí Minh khẳng định vị trí quyết định của người cán bộ trong tiến trình cách mạng thông qua định luận nổi tiếng:
        </p>

        {/* Core quote card */}
        <div className="relative overflow-hidden rounded-2xl bg-indigo-500/5 border-l-4 border-indigo-650 p-5 shadow-sm">
          <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-indigo-600 opacity-10 -rotate-12 pointer-events-none" />
          <div className="relative z-10 space-y-3">
            <p className="font-playfair italic text-stone-850 text-xs md:text-sm leading-relaxed text-justify">
              &quot;Cán bộ là những người đem chính sách của Đảng, của Chính phủ giải thích cho dân chúng hiểu rõ và thi hành. Đồng thời đem tình hình của dân chúng báo cáo cho Đảng, cho Chính phủ hiểu rõ, để đặt chính sách cho đúng. Cán bộ là gốc của mọi công việc. Muôn việc thành công hoặc thất bại, đều do cán bộ tốt hoặc kém.&quot;
            </p>
            <div className="flex items-center justify-end text-[9px] font-bold text-indigo-750 font-sans tracking-wide">
              <span>— Lời dạy nổi tiếng về tầm quan trọng của Cán Bộ</span>
            </div>
          </div>
        </div>

        {/* 9 Requirements Table */}
        <div className="space-y-4">
          <h6 className="font-bold text-stone-900 text-xs md:text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-indigo-650" />
            9 yêu cầu cốt lõi trong công tác cán bộ của Đảng:
          </h6>
          
          <div className="overflow-hidden rounded-2xl border border-indigo-100 shadow-sm">
            <table className="w-full text-left border-collapse bg-indigo-50/15">
              <thead>
                <tr className="bg-indigo-50 border-b border-indigo-100">
                  <th className="px-5 py-3 text-[11px] md:text-xs font-black text-indigo-900 uppercase tracking-wider w-16 text-center">STT</th>
                  <th className="px-5 py-3 text-[11px] md:text-xs font-black text-indigo-900 uppercase tracking-wider">Nội Dung Yêu Cầu Bản Thân</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-indigo-100/60">
                {cadreWorkPrinciples.map((principle, idx) => (
                  <tr key={idx} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="px-5 py-3 text-center">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100/80 text-[10px] font-bold text-indigo-700">
                        {idx + 1}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-[11px] md:text-xs text-stone-700 font-medium">
                      {principle}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SECTION 5: GHI NHỚ & TỪ KHÓA ÔN THI (LUÔN HIỂN THỊ) */}
      <div className="space-y-5 pt-6 border-t border-stone-200">
        
        {/* GHI NHỚ BOX */}
        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 border-l-4 border-l-amber-500 shadow-sm space-y-3.5">
          <div className="flex items-center gap-2 text-amber-800">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
            <h5 className="font-extrabold text-xs md:text-sm uppercase tracking-wider">
              💡 GHI NHỚ CỐT LÕI (Mục 2c)
            </h5>
          </div>
          
          <ul className="space-y-3 text-stone-750 text-xs md:text-sm pl-2">
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>7 yêu cầu đối với cán bộ, đảng viên:</strong> Trung thành tuyệt đối với Đảng — thực hiện nghiêm Cương lĩnh/đường lối — tu dưỡng đạo đức — học tập nâng cao trình độ — liên hệ mật thiết với nhân dân — chịu trách nhiệm, năng động sáng tạo — phòng chống tiêu cực.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>&quot;Giặc nội xâm&quot;:</strong> Tham ô, lãng phí, quan liêu. Địch bên trong đáng sợ hơn địch bên ngoài vì phá hoại từ trong phá ra.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Bài báo mốc lịch sử:</strong> &quot;Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân&quot; (Báo Nhân dân, số 5409, ngày 3/2/1969).</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Mục tiêu đào tạo thế hệ trẻ:</strong> Hồ Chí Minh căn dặn trong Di chúc phải đào tạo thế hệ cách mạng đời sau &quot;vừa hồng vừa chuyên&quot;.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Tầm quan trọng của cán bộ:</strong> &quot;Cán bộ là gốc của mọi công việc&quot;, &quot;muôn việc thành công hoặc thất bại, đều do cán bộ tốt hoặc kém&quot;.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>9 yêu cầu công tác cán bộ:</strong> Đánh giá đúng, huấn luyện thiết thực, đề bạt đúng, sắp xếp đúng, kết hợp cấp trên-địa phương, chống bệnh cục bộ, kết hợp trẻ-cũ, chống tiêu cực, kiểm tra giúp đỡ.</span>
            </li>
          </ul>
        </div>

        {/* TỪ KHÓA BOX */}
        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h5 className="font-extrabold text-xs md:text-sm text-stone-850 uppercase tracking-wider">
            📋 TỪ KHÓA ÔN THI
          </h5>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "Vừa có đức vừa có tài",
              "Đặt lợi ích Đảng lên trước hết",
              "Đảng viên đi trước, làng nước theo sau",
              "Thắng không kiêu, bại không nản",
              "Giặc nội xâm",
              "Nâng cao đạo đức cách mạng (3/2/1969)",
              "Vừa hồng vừa chuyên",
              "Cán bộ là gốc của mọi công việc",
              "Vừa có lý vừa có tình",
              "Công bình chính trực",
              "9 yêu cầu công tác cán bộ"
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

    </div>
  );
}
