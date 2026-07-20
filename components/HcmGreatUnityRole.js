"use client";
import React from "react";
import { 
  ShieldCheck, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  Key, 
  Star,
  Compass,
  Zap,
  Bookmark
} from "lucide-react";

export default function HcmGreatUnityRole() {
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
            <span>Chương V — Mục I.1</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black font-playfair tracking-tight text-stone-900 leading-tight">
            1. VAI TRÒ CỦA ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC
          </h3>

          <p className="text-xs md:text-sm font-semibold text-stone-600 max-w-3xl leading-relaxed">
            Quan điểm nền tảng của Hồ Chí Minh về vị trí chiến lược, tính sống còn và mục tiêu hàng đầu của khối đại đoàn kết trong sự nghiệp cách mạng Việt Nam.
          </p>
        </div>
      </div>

      {/* PHẦN A: VẤN ĐỀ CÓ Ý NGHĨA CHIẾN LƯỢC */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        
        {/* Title Subsection */}
        <div className="flex items-start gap-3 border-b border-stone-100 pb-4">
          <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-700 mt-0.5 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold font-playfair text-stone-900 leading-snug">
              a) Đại đoàn kết toàn dân tộc là vấn đề có ý nghĩa chiến lược, quyết định thành công của cách mạng
            </h4>
          </div>
        </div>

        {/* Content Block */}
        <div className="space-y-4 text-stone-700 text-sm md:text-base leading-relaxed">
          <p className="font-bold text-stone-900 text-justify">
            • Đại đoàn kết toàn dân tộc là chiến lược lâu dài, nhất quán của cách mạng Việt Nam.
          </p>

          <p className="text-justify">
            • Hồ Chí Minh chỉ rõ:
          </p>

          {/* Diamond Quote 1 */}
          <div className="relative rounded-2xl p-5 md:p-6 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent border border-amber-500/20 shadow-sm overflow-hidden my-4">
            <Quote className="absolute top-2 left-2 w-10 h-10 text-amber-700 opacity-10 pointer-events-none z-0" />
            <p className="relative z-10 pl-4 text-stone-900 font-bold italic text-sm md:text-base leading-relaxed text-justify">
              &ldquo;Sử dạy cho ta bài học này: Lúc nào dân ta đoàn kết muôn người như một thì nước ta độc lập, tự do. Trái lại lúc nào dân ta không đoàn kết thì bị nước ngoài xâm lấn.&rdquo;
            </p>
          </div>

          <div className="pl-4 border-l-2 border-amber-500/40 space-y-2 text-justify">
            <p>
              • <strong>Đại đoàn kết toàn dân tộc là vấn đề mang tính sống còn của dân tộc Việt Nam</strong> &rarr; được duy trì cả trong:
            </p>
            <ul className="list-disc pl-6 space-y-1 font-medium text-stone-800">
              <li>Cách mạng dân tộc dân chủ nhân dân.</li>
              <li>Cách mạng xã hội chủ nghĩa.</li>
            </ul>
          </div>

          <div className="space-y-2 text-justify">
            <p className="font-bold text-stone-900">• Trong mỗi giai đoạn cách mạng:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Chính sách, phương pháp tập hợp đại đoàn kết <strong>có thể và cần thiết điều chỉnh</strong> phù hợp với từng đối tượng.
              </li>
              <li>
                Song <strong>không bao giờ được thay đổi chủ trương đại đoàn kết toàn dân tộc</strong> &rarr; vì đó là <strong>nhân tố quyết định sự thành bại của cách mạng</strong>.
              </li>
            </ul>
          </div>

          {/* Các luận điểm chân lý */}
          <div className="pt-2 space-y-3">
            <p className="font-bold text-stone-900">
              • Các luận điểm mang tính chân lý của Hồ Chí Minh về vai trò, sức mạnh của khối đại đoàn kết:
            </p>
            
            <div className="grid grid-cols-1 gap-2.5 pl-2">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 font-semibold text-stone-850 text-xs md:text-sm">
                - &ldquo;Đoàn kết là sức mạnh của chúng ta.&rdquo;
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 font-semibold text-stone-850 text-xs md:text-sm">
                - &ldquo;Đoàn kết là một lực lượng vô địch của chúng ta để khắc phục khó khăn, giành lấy thắng lợi.&rdquo;
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 font-semibold text-stone-850 text-xs md:text-sm">
                - &ldquo;Đoàn kết là sức mạnh, đoàn kết là thắng lợi.&rdquo;
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 font-semibold text-stone-850 text-xs md:text-sm">
                - &ldquo;Đoàn kết là sức mạnh, là then chốt của thành công.&rdquo;
              </div>
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 font-bold text-amber-900 text-xs md:text-sm leading-relaxed">
                - &ldquo;Bây giờ còn một điểm rất quan trọng, cũng là điểm mẹ. Điểm này mà thực hiện tốt thì đẻ ra con cháu đều tốt: Đó là đoàn kết.&rdquo;
              </div>
            </div>
          </div>

          {/* Diamond Quote Kết luận nổi tiếng */}
          <div className="relative rounded-2xl p-6 bg-gradient-to-r from-red-600/10 via-amber-500/10 to-transparent border border-red-600/20 shadow-md text-center my-6 overflow-hidden">
            <Quote className="absolute top-2 left-2 w-12 h-12 text-red-700 opacity-10 pointer-events-none z-0" />
            <div className="relative z-10 space-y-1">
              <p className="text-xs font-extrabold uppercase tracking-widest text-red-800 mb-1">
                Kết luận nổi tiếng của Chủ tịch Hồ Chí Minh
              </p>
              <p className="text-lg md:text-xl font-black font-playfair text-red-700">
                &ldquo;Đoàn kết, đoàn kết, đại đoàn kết
              </p>
              <p className="text-lg md:text-xl font-black font-playfair text-red-700">
                Thành công, thành công, đại thành công.&rdquo;
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* PHẦN B: MỤC TIÊU NHIỆM VỤ HÀNG ĐẦU */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        
        {/* Title Subsection */}
        <div className="flex items-start gap-3 border-b border-stone-100 pb-4">
          <div className="p-2.5 rounded-2xl bg-red-600/10 text-red-700 mt-0.5 shrink-0">
            <Star className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold font-playfair text-stone-900 leading-snug">
              b) Đại đoàn kết toàn dân tộc là một mục tiêu, nhiệm vụ hàng đầu của cách mạng Việt Nam
            </h4>
          </div>
        </div>

        {/* Content Block */}
        <div className="space-y-4 text-stone-700 text-sm md:text-base leading-relaxed">
          <p className="font-bold text-stone-900 text-justify">
            • Đại đoàn kết không chỉ là khẩu hiệu chiến lược mà còn là mục tiêu lâu dài của cách mạng.
          </p>

          <p className="text-justify">
            • <strong>Đảng là lực lượng lãnh đạo cách mạng Việt Nam</strong> &rarr; tất yếu <strong>đại đoàn kết toàn dân tộc phải được xác định là nhiệm vụ hàng đầu của Đảng.</strong>
          </p>

          <p className="text-justify">
            • Nhiệm vụ này phải được <strong>quán triệt trong tất cả mọi lĩnh vực</strong>: từ đường lối, chủ trương, chính sách, tới hoạt động thực tiễn của Đảng.
          </p>

          <p className="text-justify">
            • Trong lời kết thúc buổi ra mắt Đảng Lao động Việt Nam ngày <strong>3/3/1951</strong>, Hồ Chí Minh tuyên bố:
          </p>

          {/* Diamond Quote 8 chữ 3/3/1951 */}
          <div className="relative rounded-2xl p-5 md:p-6 bg-gradient-to-r from-amber-500/15 via-red-500/10 to-transparent border border-amber-500/30 shadow-sm overflow-hidden my-3">
            <Quote className="absolute top-2 left-2 w-10 h-10 text-amber-800 opacity-10 pointer-events-none z-0" />
            <p className="relative z-10 pl-4 text-amber-950 font-black text-base md:text-lg leading-relaxed text-justify">
              &ldquo;Mục đích của Đảng Lao động Việt Nam có thể gồm trong 8 chữ là: ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC.&rdquo;
            </p>
          </div>

          <div className="space-y-2 text-justify">
            <p className="font-bold text-stone-900">
              • Cách mạng là sự nghiệp của quần chúng, do quần chúng và vì quần chúng.
            </p>
            <p className="pl-4">
              - <strong>Đại đoàn kết là yêu cầu khách quan</strong> của sự nghiệp cách mạng, đồng thời là <strong>đòi hỏi khách quan của quần chúng nhân dân</strong> trong cuộc đấu tranh tự giải phóng (nếu không đoàn kết thì chính họ sẽ thất bại).
            </p>
          </div>

          <div className="space-y-2 text-justify">
            <p className="font-bold text-stone-900">• Sứ mệnh của Đảng Cộng sản:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Thức tỉnh, tập hợp, hướng dẫn quần chúng.</li>
              <li>
                Chuyển những nhu cầu, đòi hỏi khách quan, tự phát của quần chúng thành <strong>đòi hỏi tự giác</strong>, hiện thực có tổ chức trong khối đại đoàn kết.
              </li>
              <li>
                Tạo thành <strong>sức mạnh tổng hợp</strong> trong cuộc đấu tranh vì độc lập dân tộc, tự do cho nhân dân và hạnh phúc cho con người.
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* KHUNG GHI NHỚ & TỪ KHÓA ÔN THI (LUÔN MỞ) */}
      <div className="bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-red-500/10 border-2 border-amber-500/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-md">
        
        {/* Header Ghi nhớ */}
        <div className="flex items-center gap-2.5 text-amber-900 border-b border-amber-500/20 pb-3">
          <Bookmark className="w-5 h-5 text-amber-700" />
          <h5 className="font-black text-sm md:text-base uppercase tracking-wider">
            📌 GHI NHỚ TRỌNG TÂM (ÔN THI)
          </h5>
        </div>

        {/* Content Ghi nhớ */}
        <ul className="space-y-3 text-stone-850 font-bold text-xs md:text-sm leading-relaxed text-justify">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Đại đoàn kết toàn dân tộc = <strong>chiến lược lâu dài + mục tiêu + nhiệm vụ hàng đầu</strong> của Đảng và cách mạng Việt Nam.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Câu thơ <strong>&ldquo;Đoàn kết, đoàn kết, đại đoàn kết - Thành công, thành công, đại thành công&rdquo;</strong> là câu <strong>rất dễ ra thi</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Mục đích 8 chữ của Đảng Lao động Việt Nam (3/3/1951): <strong>&ldquo;Đoàn kết toàn dân, phụng sự Tổ quốc.&rdquo;</strong></span>
          </li>
        </ul>

        {/* Từ khóa ôn thi */}
        <div className="pt-2 border-t border-amber-500/20 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs uppercase tracking-wider">
            <Key className="w-4 h-4 text-amber-700" />
            <span>🎯 TỪ KHÓA ÔN THI:</span>
          </div>
          <p className="text-stone-800 text-xs md:text-sm font-semibold leading-relaxed text-justify italic">
            Chiến lược lâu dài, nhất quán; nhân tố quyết định thành bại; &ldquo;điểm mẹ&rdquo;; đại đoàn kết - đại thành công; nhiệm vụ hàng đầu của Đảng; 3/3/1951; &ldquo;Đoàn kết toàn dân, phụng sự Tổ quốc&rdquo;; sự nghiệp của quần chúng; sức mạnh tổng hợp.
          </p>
        </div>

      </div>

    </div>
  );
}
