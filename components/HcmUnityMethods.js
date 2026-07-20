"use client";
import React from "react";
import { 
  Compass, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  Key, 
  Bookmark,
  Users,
  Megaphone,
  Network,
  ArrowRight
} from "lucide-react";

export default function HcmUnityMethods() {
  return (
    <div className="w-full py-2 select-text font-sans bg-transparent space-y-8">
      
      {/* HEADER CARD */}
      <div 
        style={{
          background: `linear-gradient(135deg, rgba(217, 119, 6, 0.09) 0%, rgba(202, 138, 4, 0.05) 50%, rgba(255, 255, 255, 0.98) 100%)`,
          borderColor: `rgba(217, 119, 6, 0.2)`
        }}
        className="relative overflow-hidden rounded-3xl p-6 md:p-8 border shadow-[0_10px_30px_rgba(217,119,6,0.04)]"
      >
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -top-12 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[11px] font-extrabold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Chương V — Mục I.5</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black font-playfair tracking-tight text-stone-900 leading-tight">
            5. PHƯƠNG THỨC XÂY DỰNG KHỐI ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC
          </h3>

          <p className="text-xs md:text-sm font-semibold text-stone-600 max-w-3xl leading-relaxed">
            3 phương thức chiến lược: Công tác dân vận &bull; Thành lập đoàn thể tổ chức quần chúng &bull; Tập hợp các đoàn thể trong Mặt trận dân tộc thống nhất.
          </p>
        </div>
      </div>

      {/* 3-STEP ROADMAP DIAGRAM */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
          <Network className="w-5 h-5 text-amber-600" />
          <h4 className="font-extrabold text-sm md:text-base text-stone-900 uppercase tracking-wider">
            SƠ ĐỒ TIẾN TRÌNH 3 BƯỚC PHƯƠNG THỨC XÂY DỰNG ĐẠI ĐOÀN KẾT
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          
          {/* Step 1 */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2 relative">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-amber-200 text-amber-900">
                Bước 1
              </span>
              <Megaphone className="w-4 h-4 text-amber-700" />
            </div>
            <h5 className="font-bold text-sm md:text-base text-stone-900">Làm tốt công tác Dân vận</h5>
            <p className="text-stone-600 text-xs leading-relaxed text-justify">
              Giáo dục, tuyên truyền, hướng dẫn, giải thích cho nhân dân hiểu rõ quyền lợi và nghĩa vụ.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl bg-orange-50/80 border border-orange-200 space-y-2 relative">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-orange-200 text-orange-900">
                Bước 2
              </span>
              <Users className="w-4 h-4 text-orange-700" />
            </div>
            <h5 className="font-bold text-sm md:text-base text-stone-900">Thành lập các Đoàn thể</h5>
            <p className="text-stone-600 text-xs leading-relaxed text-justify">
              Tổ chức quần chúng phù hợp từng giai cấp, giới, lứa tuổi (Công đoàn, Nông dân, Thanh niên, Phụ nữ...).
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2 relative">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">
                Bước 3
              </span>
              <Network className="w-4 h-4 text-emerald-700" />
            </div>
            <h5 className="font-bold text-sm md:text-base text-stone-900">Hợp thành Mặt trận thống nhất</h5>
            <p className="text-stone-600 text-xs leading-relaxed text-justify">
              Mặt trận dân tộc thống nhất là sợi dây gắn kết Đảng với nhân dân, tạo sức mạnh tổng hợp.
            </p>
          </div>

        </div>
      </div>

      {/* CHI TIẾT 3 PHƯƠNG THỨC */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-8">
        
        {/* PHƯƠNG THỨC 1 */}
        <div className="space-y-3 border-b border-stone-100 pb-6">
          <div className="flex items-center gap-2 text-amber-700 font-bold text-base md:text-lg font-playfair">
            <Megaphone className="w-5 h-5 shrink-0" />
            <h4>Một là, làm tốt công tác vận động quần chúng (dân vận).</h4>
          </div>

          <div className="space-y-2.5 text-stone-700 text-sm md:text-base leading-relaxed pl-2 md:pl-4 text-justify">
            <p className="italic font-semibold text-stone-900">
              • Hồ Chí Minh viết: &ldquo;Đoàn kết là một mục tiêu, một nhiệm vụ hàng đầu của Đảng.&rdquo;
            </p>
            <p>
              • Để thực hiện mục tiêu đó &rarr; <em>&ldquo;phải làm tốt công tác vận động quần chúng.&rdquo;</em>
            </p>
            <p className="font-bold text-stone-900">
              • Vận động quần chính chính là <strong>đoàn kết mọi người, tạo ra động lực phát triển kinh tế - xã hội và văn hoá.</strong>
            </p>
            <div className="space-y-2">
              <p className="font-bold text-stone-900">• Đảng, Nhà nước, cán bộ, đảng viên phải:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  Làm tốt công tác <strong>giáo dục, tuyên truyền, hướng dẫn, giúp đỡ và vận động</strong> quần chúng nhân dân thực hiện chủ trương, đường lối của Đảng, chính sách và pháp luật của Nhà nước.
                </li>
                <li>
                  <strong>Giúp nhân dân thấy rõ quyền lợi, gắn liền với quyền lợi, trách nhiệm và nghĩa vụ</strong> của mỗi công dân đối với Đảng, Tổ quốc, dân tộc &rarr; <strong>tự nguyện, tích cực, chủ động, tự giác phấn đấu và cống hiến</strong> cho Cách mạng.
                </li>
                <li className="italic">
                  Người dặn dò: &ldquo;Cần phải chịu khó tìm hiểu giải thích cho họ hiểu rằng những việc đó là vì lợi ích của họ mà phải làm...&rdquo;
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-stone-900">• Mỗi phương pháp tiếp cận, vận động cũng phải:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Phù hợp với tâm lý, nguyện vọng của quần chúng.</strong></li>
                <li>
                  <strong>Xuất phát từ thực tế, tránh phong kiến quan liêu và vận dụng</strong> (có nghĩa rộng và nghĩa hẹp, gồm phong tục, tập quán).
                </li>
                <li><strong>Cụ thể phù hợp với từng địa phương, vùng miền, đối tượng nhân dân.</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* PHƯƠNG THỨC 2 */}
        <div className="space-y-3 border-b border-stone-100 pb-6">
          <div className="flex items-center gap-2 text-orange-700 font-bold text-base md:text-lg font-playfair">
            <Users className="w-5 h-5 shrink-0" />
            <h4>Hai là, thành lập đoàn thể, tổ chức quần chúng phù hợp với từng tầng lớp để tập hợp quần chúng.</h4>
          </div>

          <div className="space-y-2.5 text-stone-700 text-sm md:text-base leading-relaxed pl-2 md:pl-4 text-justify">
            <p>
              • Để tập hợp quần chúng nhân dân hiệu quả, cần tổ chức <strong>&ldquo;đoàn thể, tổ chức quần chúng&rdquo;</strong> &rarr; để tập hợp, giáo dục, rèn luyện quần chúng phù hợp từng giai cấp, dân tộc, tôn giáo, lứa tuổi, giới tính, vùng miền, ví dụ:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-1">
              <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-center font-bold text-orange-900 text-xs">
                &ldquo;Công đoàn&rdquo;
              </div>
              <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-center font-bold text-orange-900 text-xs">
                &ldquo;Hội Nông dân&rdquo;
              </div>
              <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-center font-bold text-orange-900 text-xs">
                &ldquo;Đoàn Thanh niên&rdquo;
              </div>
              <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-center font-bold text-orange-900 text-xs">
                &ldquo;Hội Phụ nữ&rdquo;
              </div>
            </div>

            <p>
              • Các đoàn thể, tổ chức quần chúng có nhiệm vụ <strong>&ldquo;giáo dục, rèn luyện, phát huy tính tích cực của các tầng lớp nhân dân&rdquo;</strong>, góp phần thực hiện nhiệm vụ của bản thân trung tầng giai đoạn.
            </p>

            <p>
              • Các đoàn thể phụ trách <strong>&ldquo;quản lý sinh hoạt của lực lượng&rdquo;</strong>, có nhiệm vụ <strong>&ldquo;tuyên truyền, giáo dục, giác ngộ, vận động, tập hợp lực lượng quần chúng tham gia cách mạng, đấu tranh bảo vệ quyền và lợi ích của mình.&rdquo;</strong>
            </p>

            <p className="font-bold text-stone-900">
              • Trong suốt tiến trình cách mạng Việt Nam, các tổ chức, đoàn thể <em>&ldquo;không ngừng ngày càng vững mạnh và phát triển, hoạt động ngày càng hiệu quả&rdquo;</em> &rarr; là <strong>&ldquo;hạt nhân của khối đại đoàn kết toàn dân.&rdquo;</strong>
            </p>
          </div>
        </div>

        {/* PHƯƠNG THỨC 3 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-base md:text-lg font-playfair">
            <Network className="w-5 h-5 shrink-0" />
            <h4>Ba là, các đoàn thể, tổ chức quần chúng được tập hợp và đoàn kết trong Mặt trận dân tộc thống nhất.</h4>
          </div>

          <div className="space-y-2.5 text-stone-700 text-sm md:text-base leading-relaxed pl-2 md:pl-4 text-justify">
            <p>
              • Các đoàn thể, tổ chức quần chúng <strong>&ldquo;hợp thành Mặt trận dân tộc thống nhất.&rdquo;</strong>
            </p>

            <p className="font-bold text-stone-900">
              • <strong>Mặt trận dân tộc thống nhất càng rộng rãi, củng cố chặt chẽ, thống nhất bao nhiêu thì khối đại đoàn kết toàn dân tộc càng mạnh mẽ, bền vững bấy nhiêu.</strong>
            </p>

            <p>
              • Các đoàn thể, tổ chức quần chúng và Mặt trận dân tộc thống nhất là <strong>&ldquo;sợi dây gắn kết Đảng với nhân dân.&rdquo;</strong>
            </p>

            {/* Diamond Quote Tổ chức của nhân dân */}
            <div className="relative rounded-2xl p-5 md:p-6 bg-gradient-to-r from-amber-500/10 via-emerald-500/5 to-transparent border border-amber-500/25 shadow-sm overflow-hidden my-3">
              <Quote className="absolute top-2 left-2 w-10 h-10 text-amber-800 opacity-10 pointer-events-none z-0" />
              <p className="relative z-10 pl-4 text-stone-900 font-bold italic text-sm md:text-base leading-relaxed text-justify">
                &ldquo;Những đoàn thể ấy là tổ chức của nhân dân, phấn đấu cho quyền lợi của nhân dân, làm lực lượng mật thiết nhất của Chính phủ.&rdquo;
              </p>
            </div>

            <p>
              • <strong>Bản chất của đoàn thể nhân dân, các tổ chức quần chúng là</strong> &rarr; <strong>chủ yếu của nhân dân</strong> &rarr; vai trò của các đoàn thể và các đoàn thể giúp các giai cấp, tầng lớp trong xã hội tham gia vào các tổ chức của mình.
            </p>

            <p className="font-bold text-stone-900">
              • Công tác vận động quần chúng phát triển chiến lược: <em>&ldquo;Đoàn kết, đoàn kết, đại đoàn kết, Thành công, thành công, đại thành công!&rdquo;</em>
            </p>

            <p className="italic">
              • Người chỉ rõ: &ldquo;Mặt trận dân tộc thống nhất vẫn là một trong những lực lượng to lớn của cách mạng Việt Nam... Phải đoàn kết tất cả các đảng phái, các đoàn thể, các cá nhân sĩ phu trong Mặt trận Tổ quốc Việt Nam, thực hiện hợp tác lâu dài, giúp đỡ lẫn nhau, cùng nhau tiến bộ. Phải đoàn kết các dân tộc anh em, cùng nhau xây dựng Tổ quốc... Phải đoàn kết các tôn giáo, cùng nhau xây dựng đời sống hòa thuận ấm no, xây dựng Tổ quốc...&rdquo;
            </p>
          </div>
        </div>

      </div>

      {/* KHUNG GHI NHỚ & TỪ KHÓA ÔN THI MỤC I.5 (LUÔN MỞ) */}
      <div className="bg-gradient-to-br from-amber-500/10 via-orange-400/5 to-emerald-500/10 border-2 border-amber-500/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-md">
        
        <div className="flex items-center gap-2.5 text-amber-900 border-b border-amber-500/20 pb-3">
          <Bookmark className="w-5 h-5 text-amber-700" />
          <h5 className="font-black text-sm md:text-base uppercase tracking-wider">
            📌 GHI NHỚ TRỌNG TÂM MỤC I.5 (ÔN THI)
          </h5>
        </div>

        <ul className="space-y-3 text-stone-850 font-bold text-xs md:text-sm leading-relaxed text-justify">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>3 phương thức xây dựng khối đại đoàn kết:</strong> (1) Làm tốt công tác dân vận; (2) Thành lập đoàn thể, tổ chức quần chúng phù hợp; (3) Các đoàn thể, tổ chức quần chúng tạo hợp, đoàn kết trong Mặt trận dân tộc thống nhất.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Các đoàn thể là <strong>&ldquo;tổ chức của dân, phấn đấu cho dân, bệnh vực quyền của dân, làm lực lượng mật thiết nhân dân với Chính phủ.&rdquo;</strong></span>
          </li>
        </ul>

        <div className="pt-2 border-t border-amber-500/20 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs uppercase tracking-wider">
            <Key className="w-4 h-4 text-amber-700" />
            <span>🎯 TỪ KHÓA ÔN THI MỤC I.5:</span>
          </div>
          <p className="text-stone-800 text-xs md:text-sm font-semibold leading-relaxed text-justify italic">
            Công tác dân vận; giáo dục - tuyên truyền - vận động; Công đoàn, Hội Nông dân, Đoàn Thanh niên, Hội Phụ nữ; hạt nhân của khối đại đoàn kết; sợi dây gắn kết Đảng - dân; đoàn kết rộng rãi - dân tộc anh em - đồng bào tôn giáo.
          </p>
        </div>

      </div>

    </div>
  );
}
