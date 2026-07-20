"use client";
import React, { useState } from "react";
import { 
  Building2, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  Key, 
  Layers, 
  Compass,
  Bookmark,
  Calendar,
  ChevronRight,
  ShieldCheck,
  Users
} from "lucide-react";

export default function HcmFrontOrganization() {
  const [selectedTimelineIdx, setSelectedTimelineIdx] = useState(3); // Default to Việt Minh (1941)

  const timelineEvents = [
    { year: "1930", title: "Mặt trận Phản đế đồng minh", context: "Thành lập sau khi Đảng ra đời để tập hợp lực lượng đấu tranh chống đế quốc." },
    { year: "1936", title: "Mặt trận Dân chủ Đông Dương", context: "Tập hợp rộng rãi các tầng lớp nhân dân đấu tranh vì dân chủ, dân sinh, hòa bình." },
    { year: "1939", title: "Mặt trận Nhân dân phản đế Đông Dương", context: "Chuyển hướng chiến lược đặt nhiệm vụ giải phóng dân tộc lên hàng đầu khi Chiến tranh thế giới II nổ ra." },
    { year: "1941", title: "Mặt trận Việt Minh", context: "Mặt trận Việt Nam Độc lập Đồng minh do Hồ Chí Minh sáng lập, là ngọn cờ tập hợp toàn dân làm nên Cách mạng Tháng Tám 1945." },
    { year: "1951", title: "Mặt trận Liên Việt", context: "Hợp nhất Việt Minh và Hội Liên Việt, tăng cường khối đoàn kết toàn dân trong kháng chiến chống Pháp." },
    { year: "1960", title: "Mặt trận Dân tộc giải phóng miền Nam Việt Nam", context: "Ngọn cờ đoàn kết nhân dân miền Nam đấu tranh chống Mỹ cứu nước, thống nhất nhà nước." },
    { year: "1968", title: "Liên minh các lực lượng dân tộc, dân chủ và hòa bình VN", context: "Mở rộng khối đoàn kết nhân sĩ, trí thức, tư sản dân tộc tại các đô thị miền Nam." },
    { year: "1955, 1976", title: "Mặt trận Tổ quốc Việt Nam", context: "Tổ chức liên minh chính trị rộng lớn nhất đại diện cho toàn thể nhân dân Việt Nam sau ngày đất nước thống nhất." }
  ];

  return (
    <div className="w-full py-2 select-text font-sans bg-transparent space-y-8">
      
      {/* HEADER CARD */}
      <div 
        style={{
          background: `linear-gradient(135deg, rgba(217, 119, 6, 0.09) 0%, rgba(185, 28, 28, 0.05) 50%, rgba(255, 255, 255, 0.98) 100%)`,
          borderColor: `rgba(217, 119, 6, 0.2)`
        }}
        className="relative overflow-hidden rounded-3xl p-6 md:p-8 border shadow-[0_10px_30px_rgba(217,119,6,0.04)]"
      >
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -top-12 w-48 h-48 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[11px] font-extrabold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Chương V — Mục I.4</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black font-playfair tracking-tight text-stone-900 leading-tight">
            4. HÌNH THỨC, NGUYÊN TẮC TỔ CHỨC CỦA KHỐI ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC — MẶT TRẬN DÂN TỘC THỐNG NHẤT
          </h3>

          <p className="text-xs md:text-sm font-semibold text-stone-600 max-w-3xl leading-relaxed">
            Mặt trận dân tộc thống nhất là tổ chức chính trị - xã hội rộng lớn tập hợp mọi người dân nước Việt, vận hành trên 3 nguyên tắc cốt lõi của Hồ Chí Minh.
          </p>
        </div>
      </div>

      {/* PHẦN A: MẶT TRẬN DÂN TỘC THỐNG NHẤT */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        
        <div className="flex items-start gap-3 border-b border-stone-100 pb-4">
          <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-700 mt-0.5 shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold font-playfair text-stone-900 leading-snug">
              a) Mặt trận dân tộc thống nhất
            </h4>
          </div>
        </div>

        <div className="space-y-4 text-stone-700 text-sm md:text-base leading-relaxed">
          <p className="text-justify font-bold text-stone-900">
            • <strong>Khối đại đoàn kết toàn dân tộc chỉ trở thành lực lượng tự phát, có sức mạnh khi được tập hợp, tổ chức lại thành một khối vững chắc</strong> &rarr; đó là <strong>&ldquo;Mặt trận dân tộc thống nhất.&rdquo;</strong>
          </p>

          <p className="text-justify">
            • Mặt trận dân tộc thống nhất là nơi <strong>&ldquo;quy tụ mọi tổ chức và cá nhân yêu nước&rdquo;</strong>, tập hợp mọi người dân nước Việt, cả trong nước và kiều bào ở nước ngoài.
          </p>

          <div className="space-y-2 text-justify">
            <p className="font-bold text-stone-900">
              • Hồ Chí Minh chú trọng tập hợp quần chúng nhân dân vào những <strong>tổ chức yêu nước phù hợp</strong>, ví dụ:
            </p>
            <ul className="list-disc pl-6 space-y-1 font-medium text-stone-800">
              <li>Hội Ái hữu tương trợ.</li>
              <li>Công hội hay Nông hội.</li>
              <li>Đoàn thanh niên hay Hội phụ nữ.</li>
              <li>Đội thiếu niên nhi đồng hay Phụ lão.</li>
              <li>Hội Phật giáo cứu quốc, Công giáo cứu quốc.</li>
              <li>Các nghiệp đoàn...</li>
              <li>Trong đó, bao trùm là <strong>&ldquo;Mặt trận dân tộc thống nhất.&rdquo;</strong></li>
            </ul>
          </div>

          {/* DÒNG THỜI GIAN LỊCH SỬ TƯƠNG TÁC (INTERACTIVE HISTORICAL TIMELINE) */}
          <div className="pt-4 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-amber-700" />
                <span>DÒNG THỜI GIAN 8 TÊN GỌI MẶT TRẬN QUA CÁC THỜI KỲ LỊCH SỬ:</span>
              </div>
              <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                Chạm mốc năm để xem chi tiết
              </span>
            </div>

            {/* Timeline Year Scroll Strip */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {timelineEvents.map((ev, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedTimelineIdx(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all duration-300 shrink-0 cursor-pointer border ${
                    selectedTimelineIdx === idx
                      ? "bg-amber-600 text-white border-amber-700 shadow-sm scale-105"
                      : "bg-stone-100 hover:bg-stone-200/80 text-stone-700 border-stone-200"
                  }`}
                >
                  {ev.year}
                </button>
              ))}
            </div>

            {/* Selected Timeline Card */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-amber-800 bg-amber-200/80 px-2.5 py-0.5 rounded">
                  Năm {timelineEvents[selectedTimelineIdx].year}
                </span>
                <span className="text-[11px] font-bold text-stone-500">Mốc {selectedTimelineIdx + 1}/8</span>
              </div>
              <h5 className="font-extrabold text-base md:text-lg text-stone-900">
                {timelineEvents[selectedTimelineIdx].title}
              </h5>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify font-medium">
                {timelineEvents[selectedTimelineIdx].context}
              </p>
            </div>
          </div>

          <p className="text-justify pt-2">
            • Dù có nhiều tên gọi khác nhau nhưng <strong>bản chất chỉ là một tổ chức chính trị - xã hội</strong> nhằm tập hợp đông đảo các giai cấp, tầng lớp, dân tộc, tôn giáo, đảng phái, các tổ chức, cá nhân yêu nước ở trong và ngoài nước, <em>&ldquo;phấn đấu vì mục tiêu chung là độc lập, thống nhất của Tổ quốc và tự do, hạnh phúc của nhân dân.&rdquo;</em>
          </p>

        </div>
      </div>

      {/* PHẦN B: NGUYÊN TẮC XÂY DỰNG VÀ HOẠT ĐỘNG (SƠ ĐỒ 3 TRỤ CỘT) */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        
        <div className="flex items-start gap-3 border-b border-stone-100 pb-4">
          <div className="p-2.5 rounded-2xl bg-red-600/10 text-red-700 mt-0.5 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold font-playfair text-stone-900 leading-snug">
              b) Nguyên tắc xây dựng và hoạt động của Mặt trận dân tộc thống nhất
            </h4>
          </div>
        </div>

        {/* 3 PILLARS DIAGRAM OVERVIEW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-amber-200 text-amber-900">
              Nguyên tắc 1 (Cốt lõi)
            </span>
            <h6 className="font-bold text-xs md:text-sm text-stone-900">Liên minh Công - Nông - Trí & Đảng lãnh đạo</h6>
            <p className="text-stone-600 text-[11.5px] leading-relaxed text-justify">
              Xây dựng trên nền tảng khối liên minh giai cấp công nhân, nông dân, trí thức dưới sự lãnh đạo của Đảng.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-orange-200 text-orange-900">
              Nguyên tắc 2
            </span>
            <h6 className="font-bold text-xs md:text-sm text-stone-900">Hiệp thương dân chủ</h6>
            <p className="text-stone-600 text-[11.5px] leading-relaxed text-justify">
              Mọi vấn đề cùng nhau bàn bạc công khai đi đến nhất trí, loại trừ áp đặt hay dân chủ hình thức.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">
              Nguyên tắc 3
            </span>
            <h6 className="font-bold text-xs md:text-sm text-stone-900">Đoàn kết lâu dài & Cầu đồng tồn dị</h6>
            <p className="text-stone-600 text-[11.5px] leading-relaxed text-justify">
              Đoàn kết thật sự, chân thành giúp nhau cùng tiến bộ; lấy cái chung để hạn chế cái riêng.
            </p>
          </div>
        </div>

        {/* CHI TIẾT 3 NGUYÊN TẮC */}
        <div className="space-y-6 pt-2 text-stone-700 text-sm md:text-base leading-relaxed">
          
          {/* NGUYÊN TẮC 1 */}
          <div className="space-y-3 border-b border-stone-100 pb-6">
            <h5 className="font-bold text-stone-900 text-base md:text-lg">
              Một là, phải được xây dựng trên nền tảng liên minh công nhân - nông dân - trí thức và đặt dưới sự lãnh đạo của Đảng.
            </h5>
            <div className="space-y-2 text-justify pl-2 md:pl-4">
              <p>
                • Mục đích chung của Mặt trận: tập hợp tới mức cao nhất lực lượng dân tộc vào khối đại đoàn kết toàn dân.
              </p>
              <p>
                • Mặt trận là <strong>mặt khối đoàn kết chặt chẽ, có tổ chức trên nền tầng khối liên minh giai cấp công nhân, giai cấp nông dân, đội ngũ trí thức, dưới sự lãnh đạo của Đảng</strong> &rarr; đây là <strong>nguyên tắc cốt lõi</strong> trong chiến lược đại đoàn kết toàn dân tộc của Hồ Chí Minh.
              </p>
              <p className="italic font-semibold text-stone-900">
                • Hồ Chí Minh viết: &ldquo;Lực lượng chủ yếu trong khối đoàn kết dân tộc là công nông, cho nên liên minh công nông là nền tầng của Mặt trận dân tộc thống nhất.&rdquo;
              </p>
              <p className="font-bold text-stone-900">• Sở dĩ phải lấy liên minh công nông làm nền tầng vì:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Họ là người trực tiếp sản xuất tất cả mọi tài phú làm cho xã hội sống.</li>
                <li>Họ đông hơn hết, công bị áp bức bóc lót nặng nề hơn hết.</li>
                <li>Ý chí cách mạng của họ chí khí, bền bỉ hơn các tầng lớp khác.</li>
              </ul>
              <p>
                • <strong>Không chỉ nhấn mạnh vai trò của công nông</strong> mà còn phải thấy vai trò và sự cần thiết phải liên minh với các giai cấp khác, <strong>nhất là với đội ngũ trí thức.</strong>
              </p>
              <p>
                • <strong>Đảng Cộng sản Việt Nam vừa là thành viên, vừa là lực lượng lãnh đạo</strong>, Đảng không có lợi ích riêng mà gắn liền với lợi ích toàn xã hội, toàn dân tộc.
              </p>
              <p>
                • <strong>Sự lãnh đạo Mặt trận</strong> thể hiện ở khả năng nắm bắt thực tiễn, phát hiện quy luật khách quan để đề ra đường lối và phương pháp cách mạng phù hợp, lãnh đạo Mặt trận hoàn thành nhiệm vụ <em>&ldquo;đấu tranh giải phóng dân tộc và giải phóng giai cấp, kết hợp độc lập dân tộc với chủ nghĩa xã hội.&rdquo;</em>
              </p>
            </div>
          </div>

          {/* NGUYÊN TẮC 2 */}
          <div className="space-y-3 border-b border-stone-100 pb-6">
            <h5 className="font-bold text-stone-900 text-base md:text-lg">
              Hai là, phải hoạt động theo nguyên tắc hiệp thương dân chủ.
            </h5>
            <div className="space-y-2 text-justify pl-2 md:pl-4">
              <p>
                • Mặt trận dân tộc thống nhất là tổ chức chính trị - xã hội rộng lớn của dân tộc, gồm nhiều giai cấp, tầng lớp, đảng phái, dân tộc, tôn giáo khác nhau, với nhiều lợi ích khác nhau.
              </p>
              <p className="font-bold text-stone-900">
                • <strong>Hoạt động của Mặt trận phải dựa trên nguyên tắc hiệp thương dân chủ.</strong>
              </p>
              <p>
                • Mọi vấn đề của Mặt trận đều phải được đưa ra để tất cả thành viên <strong>&ldquo;cùng nhau bàn bạc công khai, đi đến nhất trí&rdquo;</strong>, loại trừ mọi sự áp đặt hoặc dân chủ hình thức.
              </p>
              <p>
                • <strong>&ldquo;Những lợi ích riêng chính đáng, phù hợp với lợi ích chung&rdquo;</strong> của đất nước, của dân tộc được tôn trọng.
              </p>
              <p>
                • Những gì riêng biệt, không phù hợp sẽ được giải quyết bằng <strong>&ldquo;lợi ích chung của dân tộc&rdquo;</strong>, bằng sự nhận thức ngày càng đúng đắn hơn của mỗi người, để bộ phận về mối quan hệ giữa lợi ích chung và lợi ích riêng.
              </p>
            </div>
          </div>

          {/* NGUYÊN TẮC 3 */}
          <div className="space-y-3">
            <h5 className="font-bold text-stone-900 text-base md:text-lg">
              Ba là, phải đoàn kết lâu dài, chặt chẽ, đoàn kết thật sự, chân thành, thân ái giúp đỡ nhau cùng tiến bộ.
            </h5>
            <div className="space-y-2 text-justify pl-2 md:pl-4">
              <p>
                • Đoàn kết trong Mặt trận phải là <strong>lâu dài, chặt chẽ, đoàn kết thật sự, chân thành, thân ái, giúp đỡ nhau cùng tiến bộ.</strong>
              </p>
              <p>
                • Các thành viên có những điểm tương đồng nhưng cũng có những điểm khác biệt &rarr; cần có sự bàn bạc để đi đến nhất trí.
              </p>
              <p className="font-bold text-amber-900">
                • Hồ Chí Minh nhấn mạnh phương châm <strong>&ldquo;Cầu đồng tồn dị&rdquo;</strong>, lấy cái chung để hạn chế cái riêng, cái khác biệt.
              </p>

              {/* Diamond Quote Đoàn kết thực sự */}
              <div className="relative rounded-2xl p-5 md:p-6 bg-gradient-to-r from-amber-500/10 via-red-500/5 to-transparent border border-amber-500/25 shadow-sm overflow-hidden my-3">
                <Quote className="absolute top-2 left-2 w-10 h-10 text-amber-800 opacity-10 pointer-events-none z-0" />
                <p className="relative z-10 pl-4 text-stone-900 font-bold italic text-sm md:text-base leading-relaxed text-justify">
                  &ldquo;Đoàn kết thực sự nghĩa là mục đích phải nhất trí và hành động cũng phải nhất trí. Đoàn kết thực sự nghĩa là vừa đoàn kết, vừa đấu tranh, học những cái tốt của nhau, phê bình những cái sai của nhau và phê bình trên lập trường thân ái, vì nước, vì dân.&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* KHUNG GHI NHỚ & TỪ KHÓA ÔN THI MỤC I.4 (LUÔN MỞ) */}
      <div className="bg-gradient-to-br from-amber-500/10 via-red-400/5 to-orange-500/10 border-2 border-amber-500/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-md">
        
        <div className="flex items-center gap-2.5 text-amber-900 border-b border-amber-500/20 pb-3">
          <Bookmark className="w-5 h-5 text-amber-700" />
          <h5 className="font-black text-sm md:text-base uppercase tracking-wider">
            📌 GHI NHỚ TRỌNG TÂM MỤC I.4 (ÔN THI)
          </h5>
        </div>

        <ul className="space-y-3 text-stone-850 font-bold text-xs md:text-sm leading-relaxed text-justify">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>Nền tảng của Mặt trận dân tộc thống nhất = Liên minh công nhân - nông dân - trí thức, dưới sự lãnh đạo của Đảng.</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>3 nguyên tắc:</strong> (1) Nền tảng liên minh công - nông - trí thức, lãnh đạo của Đảng; (2) Hiệp thương dân chủ; (3) Đoàn kết lâu dài, chặt chẽ, thật sự, chân thành - &ldquo;cầu đồng tồn dị&rdquo;.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>Cần nhớ tên gọi Mặt trận qua các giai đoạn</strong> (rất hay ra thi): Mặt trận Phản đế đồng minh (1930) &rarr; Mặt trận Dân chủ Đông Dương (1936) &rarr; Mặt trận Nhân dân phản đế Đông Dương (1939) &rarr; Mặt trận Việt Minh (1941) &rarr; Mặt trận Liên Việt (1951) &rarr; Mặt trận Dân tộc giải phóng miền Nam Việt Nam (1960) &rarr; Liên minh các lực lượng dân tộc, dân chủ và hòa bình Việt Nam (1968) &rarr; Mặt trận Tổ quốc Việt Nam (1955, 1976).</span>
          </li>
        </ul>

        <div className="pt-2 border-t border-amber-500/20 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs uppercase tracking-wider">
            <Key className="w-4 h-4 text-amber-700" />
            <span>🎯 TỪ KHÓA ÔN THI MỤC I.4:</span>
          </div>
          <p className="text-stone-800 text-xs md:text-sm font-semibold leading-relaxed text-justify italic">
            Mặt trận dân tộc thống nhất; liên minh công - nông - trí thức; đảng vừa là thành viên vừa là lãnh đạo; hiệp thương dân chủ; &ldquo;cầu đồng tồn dị&rdquo;; đoàn kết thật sự - chân thành; các tên gọi Mặt trận qua từng giai đoạn.
          </p>
        </div>

      </div>

    </div>
  );
}
