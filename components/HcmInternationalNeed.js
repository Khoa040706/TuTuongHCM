"use client";
import React from "react";
import { 
  Globe, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  Key, 
  Compass,
  Bookmark,
  ShieldAlert,
  Zap,
  Flag,
  Flame
} from "lucide-react";

export default function HcmInternationalNeed() {
  return (
    <div className="w-full py-2 select-text font-sans bg-transparent space-y-8">
      
      {/* HEADER CARD */}
      <div 
        style={{
          background: `linear-gradient(135deg, rgba(217, 119, 6, 0.09) 0%, rgba(37, 99, 235, 0.05) 50%, rgba(255, 255, 255, 0.98) 100%)`,
          borderColor: `rgba(217, 119, 6, 0.2)`
        }}
        className="relative overflow-hidden rounded-3xl p-6 md:p-8 border shadow-[0_10px_30px_rgba(217,119,6,0.04)]"
      >
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -top-12 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[11px] font-extrabold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Chương V — Mục II.1</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black font-playfair tracking-tight text-stone-900 leading-tight">
            1. SỰ CẦN THIẾT PHẢI ĐOÀN KẾT QUỐC TẾ
          </h3>

          <p className="text-xs md:text-sm font-semibold text-stone-600 max-w-3xl leading-relaxed">
            Kết hợp sức mạnh dân tộc với sức mạnh thời đại &bull; Thực hiện thắng lợi các mục tiêu cách mạng cao cả của thời đại theo tư tưởng Hồ Chí Minh.
          </p>
        </div>
      </div>

      {/* BẢNG SONG SONG 2 NGUỒN SỨC MẠNH (DUAL POWER CARDS) */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        
        <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
          <Zap className="w-5 h-5 text-amber-600" />
          <h4 className="font-extrabold text-sm md:text-base text-stone-900 uppercase tracking-wider">
            BẢNG SO SÁNH 2 NGUỒN SỨC MẠNH: DÂN TỘC & THỜI ĐẠI
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Power 1: Sức mạnh Dân tộc */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-3">
            <div className="flex items-center gap-2 text-amber-900">
              <Flag className="w-5 h-5 text-amber-700 shrink-0" />
              <h5 className="font-extrabold text-base md:text-lg">🇻🇳 SỨC MẠNH DÂN TỘC</h5>
            </div>
            <p className="text-xs text-stone-600 font-semibold">
              Là sự tổng hợp của các yếu tố <strong>&ldquo;vật chất và tinh thần&rdquo;</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs md:text-sm text-stone-800 leading-relaxed">
              <li>Sức mạnh của <strong>&ldquo;chủ nghĩa yêu nước&rdquo;</strong> và ý thức <strong>&ldquo;tự lực, tự cường dân tộc&rdquo;</strong>.</li>
              <li>Sức mạnh của <strong>&ldquo;tinh thần đoàn kết&rdquo;</strong>.</li>
              <li>Sức mạnh của <strong>&ldquo;ý chí đấu tranh anh dũng, bất khuất&rdquo;</strong> cho độc lập, tự do.</li>
            </ul>
            <p className="text-xs text-amber-950 font-bold italic pt-1">
              &rarr; Giúp dân tộc Việt Nam vượt qua mọi thử thách, khó khăn trong dựng nước và giữ nước.
            </p>
          </div>

          {/* Power 2: Sức mạnh Thời đại */}
          <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 space-y-3">
            <div className="flex items-center gap-2 text-blue-950">
              <Globe className="w-5 h-5 text-blue-700 shrink-0" />
              <h5 className="font-extrabold text-base md:text-lg">🌐 SỨC MẠNH THỜI ĐẠI</h5>
            </div>
            <p className="text-xs text-stone-600 font-semibold">
              Là sức mạnh của các trào lưu cách mạng thế giới:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs md:text-sm text-stone-800 leading-relaxed">
              <li>Sức mạnh của <strong>&ldquo;phong trào cách mạng thế giới&rdquo;</strong>.</li>
              <li>Sức mạnh của <strong>&ldquo;chủ nghĩa Mác - Lênin&rdquo;</strong> được xác lập bởi <strong>&ldquo;Cách mạng Tháng Mười Nga năm 1917&rdquo;</strong>.</li>
              <li>Sức mạnh vĩ đại tiên tiến của giai cấp công nhân và các dân tộc bị áp bức.</li>
            </ul>
            <p className="text-xs text-blue-950 font-bold italic pt-1">
              &rarr; Liên kết, tập hợp trong khối đoàn kết quốc tế tạo nên sức mạnh to lớn nhân gấp bội.
            </p>
          </div>

        </div>
      </div>

      {/* CHI TIẾT MỤC II.1a & II.1b */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-8">
        
        {/* SUBSECTION A */}
        <div className="space-y-3 border-b border-stone-100 pb-6">
          <h4 className="text-lg md:text-xl font-bold font-playfair text-stone-900 leading-snug">
            a) Thực hiện đoàn kết quốc tế nhằm &ldquo;kết hợp sức mạnh dân tộc với sức mạnh thời đại&rdquo;, tạo sức mạnh tổng hợp cho cách mạng
          </h4>

          <div className="space-y-2.5 text-stone-700 text-sm md:text-base leading-relaxed pl-2 md:pl-4 text-justify">
            <div className="space-y-1.5">
              <p className="font-bold text-stone-900">• Thực hiện đoàn kết quốc tế để:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Tập hợp lực lượng bên ngoài.</strong></li>
                <li><strong>Tranh thủ sự đồng tình, ủng hộ, giúp đỡ của bạn bè quốc tế.</strong></li>
                <li>
                  <strong>&ldquo;Kết hợp sức mạnh dân tộc với sức mạnh của các trào lưu cách mạng thời đại&rdquo;</strong> &rarr; tạo sức mạnh tổng hợp cho cách mạng Việt Nam.
                </li>
              </ul>
            </div>

            <p>
              • Đây là <strong>&ldquo;một trong những nội dung chủ yếu&rdquo;</strong> trong tư tưởng Hồ Chí Minh về đoàn kết quốc tế, là <strong>&ldquo;bài học quan trọng nhất, mang tính thời sự sâu sắc nhất&rdquo;</strong> của cách mạng Việt Nam.
            </p>

            <div className="space-y-1.5 pt-1">
              <p className="font-bold text-stone-900">• Quá trình nhận thức của Hồ Chí Minh:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  Hồ Chí Minh sớm xác định: <strong>&ldquo;Cách mạng Việt Nam là một bộ phận của cách mạng thế giới&rdquo;</strong> ngay từ khi tìm thấy con đường cứu nước.
                </li>
                <li>
                  Người cho rằng: cách mạng Việt Nam <strong>&ldquo;chỉ có thể thành công khi thực hiện đoàn kết chặt chẽ với phong trào cách mạng thế giới&rdquo;</strong>.
                </li>
                <li><strong>Đại đoàn kết toàn dân tộc phải gắn liền với đoàn kết quốc tế.</strong></li>
                <li><strong>Đại đoàn kết toàn dân tộc là cơ sở</strong> cho việc thực hiện đoàn kết quốc tế.</li>
                <li>
                  Cùng với quá trình phát triển thắng lợi của cách mạng Việt Nam, tư tưởng đoàn kết với phong trào cách mạng thế giới được Hồ Chí Minh <strong>&ldquo;phát triển ngày càng đầy đủ, rõ ràng và cụ thể hơn&rdquo;</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SUBSECTION B */}
        <div className="space-y-4">
          <h4 className="text-lg md:text-xl font-bold font-playfair text-stone-900 leading-snug">
            b) Thực hiện đoàn kết quốc tế nhằm &ldquo;góp phần cùng nhân dân thế giới thực hiện thắng lợi các mục tiêu cách mạng của thời đại&rdquo;
          </h4>

          <div className="space-y-3 text-stone-700 text-sm md:text-base leading-relaxed pl-2 md:pl-4 text-justify">
            <div className="space-y-1">
              <p className="font-bold text-stone-900">• Hồ Chí Minh chỉ ra:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>&ldquo;Chủ nghĩa yêu nước chân chính&rdquo;</strong> phải gắn liền với <strong>&ldquo;chủ nghĩa quốc tế vô sản&rdquo;</strong>.
                </li>
                <li>
                  <strong>&ldquo;Đại đoàn kết dân tộc&rdquo;</strong> phải gắn liền với <strong>&ldquo;đoàn kết quốc tế&rdquo;</strong>.
                </li>
                <li>
                  Thực hiện đoàn kết quốc tế <strong>&ldquo;không chỉ vì thắng lợi của cách mạng mỗi nước&rdquo;</strong> mà còn vì <strong>&ldquo;sự nghiệp chung của nhân loại tiến bộ&rdquo;</strong> trong cuộc đấu tranh chống chủ nghĩa đế quốc và các thế lực phản động quốc tế, vì <strong>&ldquo;các mục tiêu cách mạng của thời đại&rdquo;</strong>.
                </li>
              </ul>
            </div>

            <div className="space-y-1">
              <p className="font-bold text-stone-900">• Đặc điểm thời đại Hồ Chí Minh sống và hoạt động:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Thời đại đã <strong>&ldquo;chấm dứt sự tồn tại biệt lập giữa các quốc gia&rdquo;</strong>.</li>
                <li>Mở ra các <strong>&ldquo;quan hệ quốc tế ngày càng sâu rộng&rdquo;</strong>.</li>
                <li><strong>&ldquo;Vận mệnh mỗi dân tộc không thể tách rời vận mệnh chung của loài người&rdquo;</strong>.</li>
              </ul>
            </div>

            {/* KHUNG CẢNH BÁO ĐỎ: 3 KHUYNH HƯỚNG SAI LẦM CẦN CHỐNG */}
            <div className="p-5 rounded-2xl bg-red-50/90 border-2 border-red-500/40 space-y-2 shadow-sm my-4">
              <div className="flex items-center gap-2 text-red-900 font-extrabold text-sm uppercase tracking-wider">
                <ShieldAlert className="w-5 h-5 text-red-700 shrink-0" />
                <span>⚠️ CẢNH BÁO: 3 KHUYNH HƯỚNG SAI LẦM CẦN CHỐNG (THEO HCM)</span>
              </div>
              <p className="text-xs text-stone-700 font-medium">
                Để tăng cường đoàn kết quốc tế, các Đảng Cộng sản trên thế giới phải kiên trì chống lại 3 khuynh hướng gây suy yếu sức mạnh đoàn kết:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                <div className="p-2.5 rounded-xl bg-white border border-red-200 text-center font-bold text-red-900 text-xs">
                  ❌ Chủ nghĩa cơ hội
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-red-200 text-center font-bold text-red-900 text-xs">
                  ❌ Chủ nghĩa vị kỷ dân tộc
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-red-200 text-center font-bold text-red-900 text-xs">
                  ❌ Chủ nghĩa sôvanh
                </div>
              </div>
            </div>

            <div className="space-y-1 pt-1">
              <p className="font-bold text-stone-900">• Ý nghĩa / Kết quả:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  Thắng lợi của cách mạng Việt Nam là <strong>&ldquo;thắng lợi của tư tưởng Hồ Chí Minh&rdquo;</strong>, thắng lợi của <strong>&ldquo;độc lập dân tộc gắn liền với chủ nghĩa xã hội&rdquo;</strong>.
                </li>
                <li>
                  Nhờ <strong>&ldquo;kết hợp giải phóng dân tộc với giải phóng giai cấp&rdquo;</strong>, chủ nghĩa yêu nước truyền thống Việt Nam được <strong>&ldquo;bổ sung nguồn lực mới&rdquo;</strong>.
                </li>
                <li>
                  Nhờ <strong>&ldquo;giữ vững ngọn cờ chủ nghĩa xã hội&rdquo;</strong>, Việt Nam <strong>&ldquo;tranh thủ được sự đồng tình, ủng hộ của Quốc tế&rdquo;</strong>, huy động được sức mạnh của các trào lưu cách mạng thời đại &rarr; Làm cho <strong>&ldquo;sức mạnh dân tộc được nhân lên gấp bội&rdquo;</strong>, chiến thắng được những kẻ thù có sức mạnh to lớn hơn mình về nhiều mặt.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* KHUNG GHI NHỚ & TỪ KHÓA ÔN THI MỤC II.1 (LUÔN MỞ) */}
      <div className="bg-gradient-to-br from-amber-500/10 via-blue-400/5 to-red-500/10 border-2 border-amber-500/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-md">
        
        <div className="flex items-center gap-2.5 text-amber-900 border-b border-amber-500/20 pb-3">
          <Bookmark className="w-5 h-5 text-amber-700" />
          <h5 className="font-black text-sm md:text-base uppercase tracking-wider">
            📌 GHI NHỚ TRỌNG TÂM MỤC II.1 (ÔN THI)
          </h5>
        </div>

        <ul className="space-y-3 text-stone-850 font-bold text-xs md:text-sm leading-relaxed text-justify">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Trong tư tưởng Hồ Chí Minh, thực hiện đoàn kết quốc tế, <strong>&ldquo;kết hợp chặt chẽ chủ nghĩa yêu nước với chủ nghĩa quốc tế vô sản&rdquo;</strong> là nhằm góp phần cùng nhân dân thế giới thực hiện thắng lợi các mục tiêu cách mạng của <strong>&ldquo;dân tộc và thời đại&rdquo;</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Bác chỉ rõ: Nhân dân Việt Nam <strong>&ldquo;không chỉ chiến đấu vì độc lập, tự do của đất nước mình&rdquo;</strong> mà còn <strong>&ldquo;vì độc lập, tự do của các nước khác&rdquo;</strong>; không chỉ bảo vệ lợi ích sống còn của dân tộc mình mà còn vì những <strong>&ldquo;mục tiêu cao cả của thời đại&rdquo;</strong>: hòa bình, độc lập dân tộc, dân chủ và chủ nghĩa xã hội.</span>
          </li>
        </ul>

        <div className="pt-2 border-t border-amber-500/20 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs uppercase tracking-wider">
            <Key className="w-4 h-4 text-amber-700" />
            <span>🎯 TỪ KHÓA ÔN THI MỤC II.1:</span>
          </div>
          <p className="text-stone-800 text-xs md:text-sm font-semibold leading-relaxed text-justify italic">
            Sức mạnh dân tộc - Sức mạnh thời đại; Cách mạng Tháng Mười Nga 1917; Chủ nghĩa yêu nước chân chính gắn liền với chủ nghĩa quốc tế vô sản; Đại đoàn kết toàn dân tộc gắn liền với đoàn kết quốc tế; Chủ nghĩa cơ hội, chủ nghĩa vị kỷ dân tộc, chủ nghĩa sôvanh; Độc lập dân tộc gắn liền với chủ nghĩa xã hội.
          </p>
        </div>

      </div>

    </div>
  );
}
