"use client";
import React from "react";
import { 
  Users, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  Key, 
  Compass,
  Bookmark,
  RefreshCw,
  ShieldCheck,
  Building2,
  FileCheck,
  ShieldAlert,
  Scale
} from "lucide-react";

export default function HcmApplyingAlliance() {
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
            <span>Chương V — Mục III.2</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black font-playfair tracking-tight text-stone-900 leading-tight">
            2. XÂY DỰNG KHỐI ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC TRÊN NỀN TẢNG LIÊN MINH CÔNG - NÔNG - TRÍ ĐƯỚI SỰ LÃNH ĐẠO CỦA ĐẢNG
          </h3>

          <p className="text-xs md:text-sm font-semibold text-stone-600 max-w-3xl leading-relaxed">
            Quy luật hai chiều giữa Mặt trận - Liên minh - Đảng &bull; 5 Giải pháp tăng cường khối đại đoàn kết toàn dân tộc trong thời kỳ mới.
          </p>
        </div>
      </div>

      {/* SƠ ĐỒ TAM GIÁC QUY LUẬT TƯƠNG TÁC 2 CHIỀU (TRIANGULAR RECIPROCAL LOOP DIAGRAM) */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
          <RefreshCw className="w-5 h-5 text-amber-600" />
          <h4 className="font-extrabold text-sm md:text-base text-stone-900 uppercase tracking-wider">
            QUY LUẬT TƯƠNG TÁC 2 CHIỀU GIỮA 3 YẾU TỐ CỐT LÕI
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          
          {/* Node 1 */}
          <div className="p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-center space-y-2 relative shadow-sm">
            <div className="w-10 h-10 mx-auto rounded-xl bg-amber-600 text-white flex items-center justify-center font-black text-sm">
              1
            </div>
            <h5 className="font-extrabold text-stone-900 text-sm md:text-base">Mặt trận Dân tộc thống nhất</h5>
            <p className="text-stone-600 text-xs leading-relaxed">
              Mặt trận càng mở rộng rãi &rarr; tạo không gian quy tụ toàn dân.
            </p>
          </div>

          {/* Node 2 */}
          <div className="p-5 rounded-2xl bg-orange-50/90 border border-orange-200 text-center space-y-2 relative shadow-sm">
            <div className="w-10 h-10 mx-auto rounded-xl bg-orange-600 text-white flex items-center justify-center font-black text-sm">
              2
            </div>
            <h5 className="font-extrabold text-stone-900 text-sm md:text-base">Liên minh Công - Nông - Trí</h5>
            <p className="text-stone-600 text-xs leading-relaxed">
              Khối liên minh càng củng cố mạnh mẽ &rarr; làm nền tảng vững chắc.
            </p>
          </div>

          {/* Node 3 */}
          <div className="p-5 rounded-2xl bg-red-50/90 border border-red-200 text-center space-y-2 relative shadow-sm">
            <div className="w-10 h-10 mx-auto rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-sm">
              3
            </div>
            <h5 className="font-extrabold text-stone-900 text-sm md:text-base">Sự lãnh đạo của Đảng</h5>
            <p className="text-stone-600 text-xs leading-relaxed">
              Sự lãnh đạo càng vững vàng &rarr; bảo đảm định hướng cho Mặt trận.
            </p>
          </div>

        </div>

        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center font-bold text-amber-950 text-xs md:text-sm">
          🔄 Quy luật hai chiều: Ba yếu tố tác động qua lại, cùng củng cố lẫn nhau, làm cho sức mạnh đại đoàn kết toàn dân tộc được nhân lên to lớn hơn.
        </div>
      </div>

      {/* NỘI DUNG CHI TIẾT & ĐẠI HỘI XII */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        
        <div className="space-y-3 text-stone-700 text-sm md:text-base leading-relaxed text-justify">
          <p className="font-bold text-stone-900">
            • Thực tiễn lịch sử cách mạng Việt Nam đã <em>&ldquo;chứng minh sức sống của tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc.&rdquo;</em>
          </p>
          <p>
            • Đại đoàn kết toàn dân tộc, từ chỗ là <strong>&ldquo;tư tưởng của lãnh tụ&rdquo;</strong> đã trở thành <strong>&ldquo;quan điểm xuyên suốt đường lối chiến lược&rdquo;</strong> của Đảng Cộng sản Việt Nam trong cách mạng dân tộc dân chủ nhân dân cũng như trong cách mạng xã hội chủ nghĩa.
          </p>
          <p>
            • Tư tưởng đó đã <strong>&ldquo;thấm sâu trong tư tưởng, tình cảm&rdquo;</strong> của tất cả những người Việt Nam yêu nước, phải <strong>&ldquo;biến thành hành động cách mạng&rdquo;</strong> của hàng triệu con người, tạo thành <strong>&ldquo;sức mạnh vô địch&rdquo;</strong> trong sự nghiệp xây dựng và bảo vệ Tổ quốc.
          </p>
        </div>

        {/* ĐẠI HỘI XII KHẲNG ĐỊNH ĐỔI MỚI MẶT TRẬN */}
        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h5 className="font-bold text-stone-900 text-sm md:text-base">
            • Đại hội XII của Đảng khẳng định: Mặt trận Tổ quốc và các đoàn thể nhân dân tiếp tục &ldquo;đổi mới nội dung và phương thức hoạt động&rdquo;:
          </h5>
          <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm text-stone-700">
            <li>Vận động đông đảo nhân dân tham gia các <strong>&ldquo;phong trào thi đua yêu nước&rdquo;</strong>.</li>
            <li>Phát huy ngày càng tốt hơn vai trò <strong>&ldquo;đại diện quyền và lợi ích hợp pháp, chính đáng&rdquo;</strong> của đoàn viên, hội viên và nhân dân.</li>
            <li><strong>&ldquo;Chủ động tham gia giám sát và phản biện xã hội&rdquo;</strong>.</li>
            <li>Làm tốt vai trò <strong>&ldquo;cầu nối giữa Đảng, Nhà nước và nhân dân&rdquo;</strong>.</li>
            <li>Tham gia <strong>&ldquo;xây dựng Đảng, Nhà nước và hệ thống chính trị&rdquo;</strong>.</li>
            <li>Góp phần tích cực vào những thành tựu chung của đất nước.</li>
          </ul>
        </div>

      </div>

      {/* 5 THẺ GIẢI PHÁP ĐẮP NỔI (5 SOLUTION GRID CARDS) */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
          <FileCheck className="w-5 h-5 text-amber-600" />
          <h4 className="font-extrabold text-sm md:text-base text-stone-900 uppercase tracking-wider">
            5 GIẢI PHÁP TĂNG CƯỜNG KHỐI ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Sol 1 */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-amber-200 text-amber-900">
              Một là
            </span>
            <h6 className="font-bold text-xs md:text-sm text-stone-900">Đẩy mạnh tuyên truyền nhận thức</h6>
            <p className="text-stone-600 text-xs leading-relaxed text-justify">
              Đẩy mạnh tuyên truyền để các cấp, ngành, lực lượng <strong>&ldquo;nhận thức sâu sắc&rdquo;</strong> về sự cần thiết phải tăng cường khối đại đoàn kết.
            </p>
          </div>

          {/* Sol 2 */}
          <div className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200 space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-orange-200 text-orange-900">
              Hai là
            </span>
            <h6 className="font-bold text-xs md:text-sm text-stone-900">Lãnh đạo &amp; Thể chế hóa</h6>
            <p className="text-stone-600 text-xs leading-relaxed text-justify">
              Tăng cường sự lãnh đạo của Đảng, quản lý của Nhà nước và tiếp tục <strong>&ldquo;thể chế hóa&rdquo;</strong> đường lối chính sách về đại đoàn kết.
            </p>
          </div>

          {/* Sol 3 */}
          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">
              Ba là
            </span>
            <h6 className="font-bold text-xs md:text-sm text-stone-900">Giải quyết tốt quan hệ lợi ích</h6>
            <p className="text-stone-600 text-xs leading-relaxed text-justify">
              <strong>&ldquo;Kết hợp hài hòa&rdquo;</strong> lợi ích cá nhân, lợi ích tập thể và toàn xã hội giữa các giai cấp, tầng lớp.
            </p>
          </div>

          {/* Sol 4 */}
          <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-blue-200 text-blue-900">
              Bốn là
            </span>
            <h6 className="font-bold text-xs md:text-sm text-stone-900">Mối quan hệ mật thiết Dân - Đảng</h6>
            <p className="text-stone-600 text-xs leading-relaxed text-justify">
              Tăng cường quan hệ mật thiết giữa nhân dân với Đảng, Nhà nước, tạo sinh lực mới cho đại đoàn kết.
            </p>
          </div>

          {/* Sol 5 */}
          <div className="p-4 rounded-2xl bg-red-50/80 border border-red-200 space-y-2 col-span-1 md:col-span-2 lg:col-span-1">
            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-red-200 text-red-900">
              Năm là
            </span>
            <h6 className="font-bold text-xs md:text-sm text-stone-900">Đấu tranh chống quan điểm sai trái</h6>
            <p className="text-stone-600 text-xs leading-relaxed text-justify">
              <strong>&ldquo;Kiên quyết đấu tranh&rdquo;</strong> với các quan điểm sai trái, thù địch phá hoại khối đại đoàn kết toàn dân tộc.
            </p>
          </div>

        </div>
      </div>

      {/* KHUNG GHI NHỚ & TỪ KHÓA ÔN THI MỤC III.2 (LUÔN MỞ) */}
      <div className="bg-gradient-to-br from-amber-500/10 via-red-400/5 to-orange-500/10 border-2 border-amber-500/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-md">
        
        <div className="flex items-center gap-2.5 text-amber-900 border-b border-amber-500/20 pb-3">
          <Bookmark className="w-5 h-5 text-amber-700" />
          <h5 className="font-black text-sm md:text-base uppercase tracking-wider">
            📌 GHI NHỚ TRỌNG TÂM MỤC III.2 (ÔN THI)
          </h5>
        </div>

        <ul className="space-y-3 text-stone-850 font-bold text-xs md:text-sm leading-relaxed text-justify">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>Quy luật hai chiều:</strong> Mặt trận dân tộc thống nhất rộng rãi &harr; Liên minh công-nông-trí mạnh &harr; Sự lãnh đạo của Đảng vững &rarr; ba yếu tố tác động qua lại, cùng củng cố lẫn nhau.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>5 giải pháp</strong> tăng cường khối đại đoàn kết toàn dân tộc: tuyên truyền nhận thức &ndash; tăng cường lãnh đạo/thể chế hóa &ndash; giải quyết quan hệ lợi ích &ndash; tăng cường quan hệ dân với Đảng/Nhà nước &ndash; đấu tranh chống quan điểm sai trái, thù địch.</span>
          </li>
        </ul>

        <div className="pt-2 border-t border-amber-500/20 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs uppercase tracking-wider">
            <Key className="w-4 h-4 text-amber-700" />
            <span>🎯 TỪ KHÓA ÔN THI MỤC III.2:</span>
          </div>
          <p className="text-stone-800 text-xs md:text-sm font-semibold leading-relaxed text-justify italic">
            Liên minh công - nông - trí; Mặt trận dân tộc thống nhất; Đại hội XII: đổi mới nội dung, phương thức hoạt động Mặt trận Tổ quốc; Giám sát, phản biện xã hội; Cầu nối giữa Đảng, Nhà nước và nhân dân; 5 giải pháp tăng cường đại đoàn kết toàn dân tộc.
          </p>
        </div>

      </div>

    </div>
  );
}
