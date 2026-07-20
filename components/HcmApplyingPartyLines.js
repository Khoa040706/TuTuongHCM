"use client";
import React, { useState } from "react";
import { 
  FileText, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  Key, 
  Compass,
  Bookmark,
  Calendar,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Award,
  Globe2,
  Users
} from "lucide-react";

export default function HcmApplyingPartyLines() {
  const [selectedMilestoneIdx, setSelectedMilestoneIdx] = useState(3); // Default to Đại hội XIII

  const partyMilestones = [
    {
      time: "2/11/1993",
      title: "Nghị quyết số 07-NQ/TW (Bộ Chính trị khóa VII)",
      sub: "Về đại đoàn kết dân tộc và tăng cường Mặt trận dân tộc thống nhất",
      content: "Nghị quyết đầu tiên kế thừa và phát triển tư tưởng Hồ Chí Minh về đại đoàn kết trong sự nghiệp đổi mới đất nước."
    },
    {
      time: "6/1996",
      title: "Đại hội đại biểu toàn quốc lần thứ VIII",
      sub: "Đặt đại đoàn kết ở một tầm cao mới",
      content: "Nhằm phát huy sức mạnh của toàn dân trong thời kỳ công nghiệp hóa, hiện đại hóa đất nước."
    },
    {
      time: "Đại hội XII",
      title: "Đại hội đại biểu toàn quốc lần thứ XII",
      sub: "Đường lối chiến lược, động lực và nguồn lực to lớn",
      content: "Khẳng định đại đoàn kết dân tộc là đường lối chiến lược của cách mạng Việt Nam, đề ra 6 nhiệm vụ phương hướng trọng tâm trên nền tảng liên minh Công - Nông - Trí."
    },
    {
      time: "Đại hội XIII",
      title: "Đại hội đại biểu toàn quốc lần thứ XIII",
      sub: "Phát huy sức mạnh đại đoàn kết & Dân chủ XHCN",
      content: "Chỉ rõ: Phát huy sức mạnh đại đoàn kết toàn dân tộc, dân chủ xã hội chủ nghĩa, quyền làm chủ của nhân dân; tăng cường pháp chế, bảo đảm kỷ cương xã hội."
    }
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
            <span>Chương V — Mục III.1</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black font-playfair tracking-tight text-stone-900 leading-tight">
            1. QUÁN TRIỆT TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC VÀ ĐOÀN KẾT QUỐC TẾ TRONG HOẠCH ĐỊNH CHỦ TRƯƠNG, ĐƯỜNG LỐI CỦA ĐẢNG
          </h3>

          <p className="text-xs md:text-sm font-semibold text-stone-600 max-w-3xl leading-relaxed">
            Khơi dậy phát huy tối đa sức mạnh dân tộc và thời đại &bull; Đặt lợi ích dân tộc lên hàng đầu &bull; Đổi mới mục tiêu từ chiến thắng ngoại xâm sang chiến thắng nghèo nàn, lạc hậu.
          </p>
        </div>
      </div>

      {/* THẺ SO SÁNH ĐỔI MỚI MỤC TIÊU (BEFORE VS NOW TARGET CARD) */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
          <TrendingUp className="w-5 h-5 text-amber-600" />
          <h4 className="font-extrabold text-sm md:text-base text-stone-900 uppercase tracking-wider">
            YÊU CẦU CHUNG: CHUYỂN HƯỚNG MỤC TIÊU SỨC MẠNH ĐẠI ĐOÀN KẾT
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Before */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-amber-200 text-amber-900">
              Trước đây
            </span>
            <h5 className="font-extrabold text-stone-900 text-base">Chiến thắng Giặc Ngoại xâm</h5>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
              Sức mạnh của khối đại đoàn kết toàn dân tộc là sức mạnh để tập hợp toàn dân giải phóng dân tộc, bảo vệ độc lập tự do Tổ quốc.
            </p>
          </div>

          {/* Now */}
          <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">
              Hiện nay (Trong thời kỳ Đổi mới)
            </span>
            <h5 className="font-extrabold text-stone-900 text-base">Chiến thắng Nghèo nàn và Lạc hậu</h5>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
              Sức mạnh đại đoàn kết phải là sức mạnh để phát triển kinh tế - xã hội, xây dựng đất nước <em>&ldquo;dân giàu, nước mạnh, dân chủ, công bằng, văn minh&rdquo;</em>.
            </p>
          </div>

        </div>

        <div className="space-y-2 text-stone-700 text-xs md:text-sm leading-relaxed text-justify pt-1">
          <p>
            • Phải <strong>&ldquo;khơi dậy và phát huy đến mức cao nhất sức mạnh dân tộc và sức mạnh quốc tế&rdquo;</strong>.
          </p>
          <p>
            • <strong>&ldquo;Đặt lợi ích dân tộc, của đất nước lên hàng đầu&rdquo;</strong>, lấy đó làm cơ sở để xây dựng các chủ trương, chính sách kinh tế - xã hội.
          </p>
          <p>
            • Phải <strong>&ldquo;xuất phát từ lợi ích dân tộc&rdquo;</strong> mà mở rộng quan hệ hợp tác quốc tế, tranh thủ mọi khả năng có thể tranh thủ được để <strong>&ldquo;xây dựng, phát triển đất nước&rdquo;</strong>.
          </p>
        </div>
      </div>

      {/* DÒNG THỜI GIAN VĂN KIỆN TƯƠNG TÁC (INTERACTIVE MILESTONE TIMELINE) */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-600" />
            <h4 className="font-extrabold text-sm md:text-base text-stone-900 uppercase tracking-wider">
              CÁC MỐC VĂN KIỆN & NGHỊ QUYẾT ĐẢNG QUAN TRỌNG
            </h4>
          </div>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
            Chạm từng mốc để xem chi tiết
          </span>
        </div>

        {/* Milestone Scroll Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {partyMilestones.map((m, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedMilestoneIdx(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all duration-300 shrink-0 cursor-pointer border ${
                selectedMilestoneIdx === idx
                  ? "bg-amber-600 text-white border-amber-700 shadow-sm scale-105"
                  : "bg-stone-100 hover:bg-stone-200/80 text-stone-700 border-stone-200"
              }`}
            >
              {m.time}
            </button>
          ))}
        </div>

        {/* Selected Milestone Card */}
        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-amber-900 bg-amber-200/80 px-2.5 py-0.5 rounded">
              {partyMilestones[selectedMilestoneIdx].time}
            </span>
            <span className="text-[11px] font-bold text-stone-500">Mốc {selectedMilestoneIdx + 1}/4</span>
          </div>
          <h5 className="font-extrabold text-base md:text-lg text-stone-900">
            {partyMilestones[selectedMilestoneIdx].title}
          </h5>
          <p className="text-amber-900 font-bold text-xs md:text-sm">
            {partyMilestones[selectedMilestoneIdx].sub}
          </p>
          <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify font-medium pt-1">
            {partyMilestones[selectedMilestoneIdx].content}
          </p>
        </div>

        {/* CHI TIẾT ĐẠI HỘI XII */}
        <div className="space-y-3 pt-2 text-stone-700 text-sm md:text-base leading-relaxed text-justify border-t border-stone-100">
          <h5 className="font-bold text-stone-900 text-sm md:text-base">
            • Đại hội XII của Đảng đề ra phương hướng, nhiệm vụ tăng cường khối đại đoàn kết toàn dân tộc:
          </h5>
          <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm">
            <li>Trên nền tầng <strong>&ldquo;liên minh giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức&rdquo;</strong> do Đảng lãnh đạo.</li>
            <li><strong>&ldquo;Pháthuy mạnh mẽ mọi nguồn lực, mọi tiềm năng sáng tạo của nhân dân&rdquo;</strong> để xây dựng và bảo vệ Tổ quốc.</li>
            <li>Lấy mục tiêu xây dựng một nước Việt Nam <strong>&ldquo;hòa bình, độc lập, thống nhất, toàn vẹn lãnh thổ&rdquo;</strong>, <strong>&ldquo;dân giàu, nước mạnh, dân chủ, công bằng, văn minh&rdquo;</strong> làm điểm tương đồng.</li>
            <li><strong>&ldquo;Tôn trọng những điểm khác biệt&rdquo;</strong> không trái với lợi ích chung của quốc gia - dân tộc.</li>
            <li><strong>&ldquo;Đề cao tinh thần dân tộc, truyền thống yêu nước, nhân nghĩa, khoan dung&rdquo;</strong> để tập hợp, đoàn kết mọi người Việt Nam ở trong và ngoài nước.</li>
            <li><strong>&ldquo;Tăng cường quan hệ mật thiết giữa nhân dân với Đảng, Nhà nước&rdquo;</strong>, tạo sinh lực mới của khối đại đoàn kết toàn dân tộc.</li>
          </ul>
        </div>
      </div>

      {/* SƠ ĐỒ TIẾN TRÌNH ĐỐI NGOẠI 4 NẤC THANG (4-STEP FOREIGN DIPLOMACY EVOLUTION BAR) */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
          <Globe2 className="w-5 h-5 text-amber-600" />
          <h4 className="font-extrabold text-sm md:text-base text-stone-900 uppercase tracking-wider">
            VẬN DỤNG SÁNG TẠO ĐOÀN KẾT QUỐC TẾ QUA 35 NĂM ĐỔI MỚI (4 NẤC THANG TƯƠNG TÁC)
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Nấc 1 */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-1.5">
            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-amber-200 text-amber-900">
              Đại hội VII
            </span>
            <h6 className="font-bold text-xs md:text-sm text-stone-900">&ldquo;Muốn là bạn&rdquo;</h6>
            <p className="text-stone-600 text-xs text-justify">
              Chính thức mở rộng quan hệ đối ngoại, muốn làm bạn với tất cả các nước.
            </p>
          </div>

          {/* Nấc 2 */}
          <div className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200 space-y-1.5">
            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-orange-200 text-orange-900">
              Đại hội VIII
            </span>
            <h6 className="font-bold text-xs md:text-sm text-stone-900">&ldquo;Sẵn sàng là bạn&rdquo;</h6>
            <p className="text-stone-600 text-xs text-justify">
              Chủ động khẳng định tư thế sẵn sàng hợp tác bình đẳng, cùng có lợi.
            </p>
          </div>

          {/* Nấc 3 */}
          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-1.5">
            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">
              Đại hội IX
            </span>
            <h6 className="font-bold text-xs md:text-sm text-stone-900">&ldquo;Là bạn và đối tác tin cậy&rdquo;</h6>
            <p className="text-stone-600 text-xs text-justify">
              Nâng tầm quan hệ thành thành viên có trách nhiệm của cộng đồng quốc tế.
            </p>
          </div>

          {/* Nấc 4 */}
          <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 space-y-1.5">
            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-blue-200 text-blue-900">
              Đại hội XII, XIII
            </span>
            <h6 className="font-bold text-xs md:text-sm text-stone-900">Hội nhập sâu rộng &amp; Hiệu quả</h6>
            <p className="text-stone-600 text-xs text-justify">
              Tạo khung khổ quan hệ ổn định bền vững, uy tín quốc tế ngày càng nâng cao.
            </p>
          </div>

        </div>

        {/* Diamond Quote Đại hội XIII Cơ đồ tiềm lực */}
        <div className="relative rounded-2xl p-5 md:p-6 bg-gradient-to-r from-red-600/10 via-amber-500/10 to-transparent border border-red-600/25 shadow-md text-center my-4 overflow-hidden">
          <Quote className="absolute top-2 left-2 w-12 h-12 text-red-700 opacity-10 pointer-events-none z-0" />
          <div className="relative z-10 space-y-1">
            <p className="text-xs font-extrabold uppercase tracking-widest text-red-800 mb-1">
              Khẳng định lịch sử tại Đại hội XIII của Đảng
            </p>
            <p className="text-base md:text-lg font-black font-playfair text-red-700 italic">
              &ldquo;Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như hiện nay.&rdquo;
            </p>
          </div>
        </div>

      </div>

      {/* KHUNG GHI NHỚ & TỪ KHÓA ÔN THI MỤC III.1 (LUÔN MỞ) */}
      <div className="bg-gradient-to-br from-amber-500/10 via-red-400/5 to-emerald-500/10 border-2 border-amber-500/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-md">
        
        <div className="flex items-center gap-2.5 text-amber-900 border-b border-amber-500/20 pb-3">
          <Bookmark className="w-5 h-5 text-amber-700" />
          <h5 className="font-black text-sm md:text-base uppercase tracking-wider">
            📌 GHI NHỚ TRỌNG TÂM MỤC III.1 (ÔN THI)
          </h5>
        </div>

        <ul className="space-y-3 text-stone-850 font-bold text-xs md:text-sm leading-relaxed text-justify">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>Trước đây:</strong> sức mạnh đại đoàn kết để <strong>&ldquo;chiến thắng giặc ngoại xâm&rdquo;</strong> &rarr; <strong>Hiện nay:</strong> để <strong>&ldquo;chiến thắng nghèo nàn, lạc hậu&rdquo;</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>Nghị quyết 07-NQ/TW (2/11/1993)</strong> — văn kiện đầu tiên kế thừa, phát triển tư tưởng Hồ Chí Minh về đại đoàn kết trong đổi mới.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Tiến trình đối ngoại: <strong>&ldquo;muốn là bạn&rdquo;</strong> &rarr; <strong>&ldquo;sẵn sàng là bạn&rdquo;</strong> &rarr; <strong>&ldquo;là bạn và đối tác tin cậy&rdquo;</strong> (VII &rarr; VIII &rarr; IX) &rarr; đến XII, XIII: <strong>&ldquo;quan hệ đối ngoại, hội nhập quốc tế sâu rộng, hiệu quả&rdquo;</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Đại hội XIII: Đất nước <strong>&ldquo;chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như hiện nay&rdquo;</strong>.</span>
          </li>
        </ul>

        <div className="pt-2 border-t border-amber-500/20 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs uppercase tracking-wider">
            <Key className="w-4 h-4 text-amber-700" />
            <span>🎯 TỪ KHÓA ÔN THI MỤC III.1:</span>
          </div>
          <p className="text-stone-800 text-xs md:text-sm font-semibold leading-relaxed text-justify italic">
            Nghị quyết 07-NQ/TW (2/11/1993); Đại hội VIII (6/1996) - tầm cao mới, công nghiệp hóa, hiện đại hóa; Đại hội XII: &ldquo;Đại đoàn kết dân tộc là đường lối chiến lược&rdquo;; &ldquo;Dân giàu, nước mạnh, dân chủ, công bằng, văn minh&rdquo;; Liên minh công nhân - nông dân - trí thức; Đại hội XIII: &ldquo;Phát huy sức mạnh đại đoàn kết toàn dân tộc, dân chủ xã hội chủ nghĩa&rdquo;; &ldquo;Muốn là bạn&rdquo; &rarr; &ldquo;sẵn sàng là bạn&rdquo; &rarr; &ldquo;là bạn và đối tác tin cậy&rdquo;; Cơ đồ, tiềm lực, vị thế, uy tín quốc tế (Đại hội XIII).
          </p>
        </div>

      </div>

    </div>
  );
}
