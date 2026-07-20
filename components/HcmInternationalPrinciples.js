"use client";
import React from "react";
import { 
  ShieldCheck, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  Key, 
  Compass,
  Bookmark,
  Flag,
  Globe,
  Flame,
  Table,
  Zap
} from "lucide-react";

export default function HcmInternationalPrinciples() {
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
            <span>Chương V — Mục II.3</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black font-playfair tracking-tight text-stone-900 leading-tight">
            3. NGUYÊN TẮC ĐOÀN KẾT QUỐC TẾ
          </h3>

          <p className="text-xs md:text-sm font-semibold text-stone-600 max-w-3xl leading-relaxed">
            Thống nhất mục tiêu và lợi ích &bull; Có lý, có tình &bull; Trên cơ sở độc lập, tự chủ (Tự lực cánh sinh, dựa vào sức mình là chính).
          </p>
        </div>
      </div>

      {/* 2 THẺ NGUYÊN TẮC ĐẮP NỔI (2 PRINCIPLE DEPTH CARDS) */}
      
      {/* THẺ NGUYÊN TẮC A */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        
        <div className="flex items-start gap-3 border-b border-stone-100 pb-4">
          <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-700 mt-0.5 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold font-playfair text-stone-900 leading-snug">
              a) Đoàn kết trên cơ sở &ldquo;thống nhất mục tiêu và lợi ích; có lý, có tình&rdquo;
            </h4>
          </div>
        </div>

        <div className="space-y-4 text-stone-700 text-sm md:text-base leading-relaxed text-justify">
          <p>
            • Giống như xây dựng khối đại đoàn kết toàn dân tộc, muốn thực hiện đoàn kết quốc tế trong cuộc đấu tranh chống chủ nghĩa đế quốc và các lực lượng phản động quốc tế, phải <strong>&ldquo;tìm ra được những điểm tương đồng về mục tiêu và lợi ích&rdquo;</strong> giữa các dân tộc, các lực lượng tiến bộ và phong trào cách mạng thế giới.
          </p>

          <p>
            • Hồ Chí Minh phát hiện ra sự tương đồng này nhờ <strong>&ldquo;đặt cách mạng Việt Nam trong bối cảnh chung của thời đại&rdquo;</strong>, kết hợp lợi ích cách mạng Việt Nam với trào lưu cách mạng thế giới và nhận thức về <strong>&ldquo;nghĩa vụ của Việt Nam đối với sự nghiệp cách mạng chung của nhân dân tiến bộ trên thế giới&rdquo;</strong>.
          </p>

          {/* KHUNG 3 NGỌN CỜ CHIẾN LƯỢC (3 BANNER CARDS) */}
          <div className="pt-2 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs uppercase tracking-wider">
              <Flag className="w-4 h-4 text-amber-700" />
              <span>3 NGỌN CỜ CHIẾN LƯỢC HỒ CHÍ MINH GIƯƠNG CAO CHO CÁC ĐỐI TƯỢNG:</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              
              {/* Ngọn cờ 1 */}
              <div className="p-4 rounded-2xl bg-red-50/80 border border-red-200 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-red-200 text-red-900">
                  Ngọn cờ 1
                </span>
                <h6 className="font-bold text-xs md:text-sm text-stone-900">
                  Đối với phong trào CS & Công nhân quốc tế
                </h6>
                <p className="text-xs text-stone-700 leading-relaxed font-semibold">
                  Ngọn cờ <strong>&ldquo;Độc lập dân tộc gắn liền với Chủ nghĩa xã hội&rdquo;</strong>, đoàn kết trên nền tảng Mác - Lênin và quốc tế vô sản, <strong>&ldquo;có lý, có tình&rdquo;</strong>.
                </p>
              </div>

              {/* Ngọn cờ 2 */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-amber-200 text-amber-900">
                  Ngọn cờ 2
                </span>
                <h6 className="font-bold text-xs md:text-sm text-stone-900">
                  Đối với các dân tộc trên thế giới
                </h6>
                <p className="text-xs text-stone-700 leading-relaxed font-semibold">
                  Ngọn cờ <strong>&ldquo;Độc lập, tự do và bình đẳng giữa các dân tộc&rdquo;</strong>; tôn trọng độc lập chủ quyền, toàn vẹn lãnh thổ và quyền tự quyết.
                </p>
              </div>

              {/* Ngọn cờ 3 */}
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">
                  Ngọn cờ 3
                </span>
                <h6 className="font-bold text-xs md:text-sm text-stone-900">
                  Đối với các lực lượng tiến bộ thế giới
                </h6>
                <p className="text-xs text-stone-700 leading-relaxed font-semibold">
                  Ngọn cờ <strong>&ldquo;Hòa bình, chống chiến tranh xâm lược&rdquo;</strong>; hòa bình chân chính xây trên công bằng và lý tưởng dân chủ.
                </p>
              </div>

            </div>
          </div>

          {/* Diamond Quote 9/1947 Làm bạn với tất cả */}
          <div className="relative rounded-2xl p-5 md:p-6 bg-gradient-to-r from-amber-500/10 via-red-500/5 to-transparent border border-amber-500/25 shadow-sm overflow-hidden my-3">
            <Quote className="absolute top-2 left-2 w-10 h-10 text-amber-800 opacity-10 pointer-events-none z-0" />
            <p className="relative z-10 pl-4 text-stone-900 font-bold italic text-sm md:text-base leading-relaxed text-justify">
              &ldquo;Tháng 9/1947, trả lời nhà báo Mỹ S. Éli Mâysi, Hồ Chí Minh tuyên bố chính sách đối ngoại của Việt Nam là: Làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai.&rdquo;
            </p>
          </div>

          <div className="space-y-2 pl-2 md:pl-4">
            <p>
              • Thời đại Hồ Chí Minh sống là thời đại còn <strong>&ldquo;phong trào đấu tranh giải phóng dân tộc&rdquo;</strong> diễn ra mạnh mẽ trên hầu khắp các châu lục.
            </p>
            <p>
              • Người không chỉ là <strong>&ldquo;nhà tư tưởng, người cổ vũ&rdquo;</strong> mà còn là <strong>&ldquo;người ủng hộ nhiệt thành&rdquo;</strong> cuộc đấu tranh của các dân tộc vì các quyền dân tộc cơ bản của họ.
            </p>
            <p className="font-bold text-stone-900">
              • Nêu cao tư tưởng độc lập và quyền bình đẳng giữa các dân tộc, Hồ Chí Minh trở thành <em>&ldquo;người khởi xướng, người cầm cờ và là hiện thân&rdquo;</em> của những khát vọng của muôn dân trĩu giọt trong việc khẳng định cột mốc dân tộc.
            </p>
            <p>
              • Quan điểm <strong>&ldquo;hòa bình trong công lý&rdquo;</strong> của Hồ Chí Minh đã <strong>&ldquo;làm rung động trái tim nhân loại&rdquo;</strong>, cảm hóa lôi kéo lực lượng tiến bộ, hình thành <strong>&ldquo;mặt trận nhân dân thế giới&rdquo;</strong> (có cả nhân dân Pháp và Mỹ) đoàn kết với Việt Nam.
            </p>
          </div>

        </div>
      </div>

      {/* THẺ NGUYÊN TẮC B */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        
        <div className="flex items-start gap-3 border-b border-stone-100 pb-4">
          <div className="p-2.5 rounded-2xl bg-red-600/10 text-red-700 mt-0.5 shrink-0">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold font-playfair text-stone-900 leading-snug">
              b) Đoàn kết trên cơ sở &ldquo;độc lập, tự chủ&rdquo;
            </h4>
          </div>
        </div>

        <div className="space-y-4 text-stone-700 text-sm md:text-base leading-relaxed text-justify">
          <p>
            • Đoàn kết quốc tế là để <strong>&ldquo;tranh thủ sự đồng tình, ủng hộ, giúp đỡ của các lực lượng quốc tế&rdquo;</strong> nhằm <strong>&ldquo;tăng thêm nội lực&rdquo;</strong>, tạo sức mạnh thực hiện thắng lợi các nhiệm vụ cách mạng đề ra.
          </p>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1 font-bold text-amber-950">
            <p>&bull; &ldquo;Muốn đoàn kết tốt phải có nội lực tốt.&rdquo;</p>
            <p>&bull; &ldquo;Nội lực là nhân tố quyết định&rdquo;, còn &ldquo;nguồn lực ngoại nhập chỉ phát huy tác dụng thông qua nguồn lực nội sinh.&rdquo;</p>
          </div>

          <p className="font-bold text-stone-900">
            • Trong đấu tranh cách mạng, Hồ Chí Minh luôn nêu cao khẩu hiệu: <strong>&ldquo;Tự lực cánh sinh, dựa vào sức mình là chính.&rdquo;</strong>
          </p>

          <p className="italic">
            • Trong kháng chiến chống thực dân Pháp, Người chỉ rõ: <em>&ldquo;Một dân tộc không tự lực cánh sinh mà cứ ngồi chờ dân tộc khác giúp đỡ thì không xứng đáng được độc lập.&rdquo;</em>
          </p>

          {/* Diamond Quote Thực lực là cái chiêng, ngoại giao là cái tiếng */}
          <div className="relative rounded-2xl p-5 md:p-6 bg-gradient-to-r from-red-600/10 via-amber-500/10 to-transparent border border-red-600/25 shadow-md text-center my-4 overflow-hidden">
            <Quote className="absolute top-2 left-2 w-12 h-12 text-red-700 opacity-10 pointer-events-none z-0" />
            <div className="relative z-10 space-y-1">
              <p className="text-xs font-extrabold uppercase tracking-widest text-red-800 mb-1">
                Câu nói nổi tiếng kinh điển của Bác Hồ
              </p>
              <p className="text-base md:text-lg font-black font-playfair text-red-700 italic">
                &ldquo;Thực lực là cái chiêng, ngoại giao là cái tiếng, chiêng có to tiếng mới lớn.&rdquo;
              </p>
            </div>
          </div>

          <div className="space-y-2 pl-2 md:pl-4">
            <p>
              • Hồ Chí Minh chỉ rõ: muốn tranh thủ được sự ủng hộ quốc tế, <strong>&ldquo;Đảng phải có đường lối độc lập, tự chủ và đúng đắn.&rdquo;</strong>
            </p>
            <p className="italic">
              - Trả lời phóng viên nước ngoài, Người nói: &ldquo;Độc lập nghĩa là chúng tôi tự điều khiển lấy mọi công việc của chúng tôi, không có sự can thiệp ở ngoài vào.&rdquo;
            </p>
            <p className="italic">
              - Trong quan hệ giữa các đảng cộng sản, Người xác định: &ldquo;Các đảng dù lớn hay nhỏ đều độc lập và bình đẳng, đồng thời đoàn kết nhất trí giúp đỡ lẫn nhau.&rdquo;
            </p>

            <div className="pt-2 space-y-1 font-semibold text-stone-850">
              <p className="font-bold text-stone-900">• Kết quả thực tiễn:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  Trong kháng chiến chống Pháp: đường lối đúng đắn, sáng tạo đã giúp cách mạng giành thắng lợi.
                </li>
                <li>
                  Trong kháng chiến chống Mỹ: với <strong>&ldquo;đường lối độc lập, tự chủ, kết hợp hài hòa giữa lợi ích dân tộc và lợi ích quốc tế&rdquo;</strong> &rarr; tranh thủ sự ủng hộ của thế giới, nhận sự giúp đỡ vô cùng to lớn của <strong>&ldquo;Liên Xô, Trung Quốc và các nước xã hội chủ nghĩa&rdquo;</strong> để đánh thắng đế quốc Mỹ.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* KHUNG GHI NHỚ & TỪ KHÓA ÔN THI MỤC II.3 (LUÔN MỞ) */}
      <div className="bg-gradient-to-br from-amber-500/10 via-red-400/5 to-emerald-500/10 border-2 border-amber-500/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-md">
        
        <div className="flex items-center gap-2.5 text-amber-900 border-b border-amber-500/20 pb-3">
          <Bookmark className="w-5 h-5 text-amber-700" />
          <h5 className="font-black text-sm md:text-base uppercase tracking-wider">
            📌 GHI NHỚ TRỌNG TÂM MỤC II.3 (ÔN THI)
          </h5>
        </div>

        <ul className="space-y-3 text-stone-850 font-bold text-xs md:text-sm leading-relaxed text-justify">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>Nội lực là nhân tố quyết định, ngoại lực chỉ phát huy tác dụng thông qua nội lực</strong> &rarr; đây là luận điểm cốt lõi, rất dễ ra thi.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Khẩu hiệu: <strong>&ldquo;Tự lực cánh sinh, dựa vào sức mình là chính&rdquo;</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Câu nói nổi tiếng: <strong>&ldquo;Thực lực là cái chiêng, ngoại giao là cái tiếng, chiêng có to tiếng mới lớn&rdquo;</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Chính sách đối ngoại: <strong>&ldquo;Làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai&rdquo;</strong> (9/1947, trả lời nhà báo Mỹ S. Éli Mâysi).</span>
          </li>
        </ul>

        <div className="pt-2 border-t border-amber-500/20 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs uppercase tracking-wider">
            <Key className="w-4 h-4 text-amber-700" />
            <span>🎯 TỪ KHÓA ÔN THI MỤC II.3:</span>
          </div>
          <p className="text-stone-800 text-xs md:text-sm font-semibold leading-relaxed text-justify italic">
            Có lý, có tình; Độc lập dân tộc gắn liền với chủ nghĩa xã hội; Quyền bình đẳng giữa các dân tộc - quyền tự quyết; &ldquo;Làm bạn với tất cả mọi nước dân chủ, không gây thù oán với một ai&rdquo; (9/1947); Hòa bình chân chính xây trên công bằng và lý tưởng dân chủ; Mặt trận nhân dân thế giới (có nhân dân Pháp và nhân dân Mỹ); Tự lực cánh sinh, dựa vào sức mình là chính; Nội lực - ngoại lực; thực lực là cái chiêng, ngoại giao là cái tiếng; Đường lối độc lập, tự chủ của Đảng.
          </p>
        </div>

      </div>

      {/* BẢNG TỔNG KẾT NHANH MỤC II (EXECUTION SUMMARY CHEAT-SHEET TABLE) */}
      <div className="bg-white border-2 border-amber-500/40 rounded-3xl p-6 md:p-8 shadow-lg space-y-4">
        
        <div className="flex items-center gap-2 text-amber-900 border-b border-amber-200 pb-3">
          <Table className="w-5 h-5 text-amber-700" />
          <h4 className="font-black text-sm md:text-base uppercase tracking-wider">
            ⚡ TỔNG KẾT NHANH MỤC II (BẢNG CHEAT-SHEET ÔN THI NHANH)
          </h4>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-stone-200">
          <table className="w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="bg-amber-500/15 text-amber-950 font-black border-b border-stone-200">
                <th className="py-3 px-4 w-1/3">Nội dung</th>
                <th className="py-3 px-4 w-2/3">Ý chính trọng tâm</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-800">
              <tr className="hover:bg-stone-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-stone-900">1. Sự cần thiết</td>
                <td className="py-3 px-4 leading-relaxed">
                  <strong>a)</strong> Kết hợp sức mạnh dân tộc + sức mạnh thời đại.<br />
                  <strong>b)</strong> Góp phần cùng nhân dân thế giới thực hiện mục tiêu cách mạng thời đại.
                </td>
              </tr>
              <tr className="hover:bg-stone-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-stone-900">2. Lực lượng &amp; Hình thức</td>
                <td className="py-3 px-4 leading-relaxed">
                  <strong>a)</strong> 3 lực lượng: phong trào CS-CN quốc tế, phong trào giải phóng dân tộc, phong trào hòa bình-dân chủ.<br />
                  <strong>b)</strong> 4 tầng mặt trận đoàn kết quốc tế.
                </td>
              </tr>
              <tr className="hover:bg-stone-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-stone-900">3. Nguyên tắc</td>
                <td className="py-3 px-4 leading-relaxed">
                  <strong>a)</strong> Thống nhất mục tiêu, lợi ích, có lý có tình.<br />
                  <strong>b)</strong> Độc lập, tự chủ (tự lực cánh sinh, dựa vào sức mình là chính).
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
