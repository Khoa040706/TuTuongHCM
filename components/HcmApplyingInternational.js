"use client";
import React from "react";
import { 
  Globe2, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  Key, 
  Compass,
  Bookmark,
  BookOpen,
  Award,
  Table,
  Check,
  ShieldCheck
} from "lucide-react";

export default function HcmApplyingInternational() {
  const essayQuestions = [
    {
      num: "Câu 1",
      question: "Phân tích tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và sự vận dụng của Đảng Cộng sản Việt Nam trong giai đoạn hiện nay?"
    },
    {
      num: "Câu 2",
      question: "Vận dụng tư tưởng Hồ Chí Minh về nguyên tắc, phương thức đại đoàn kết toàn dân tộc trong giai đoạn hiện nay?"
    },
    {
      num: "Câu 3",
      question: "Phân tích quan điểm Hồ Chí Minh về sự cần thiết phải đoàn kết quốc tế và sự vận dụng của Đảng Cộng sản Việt Nam trong giai đoạn hiện nay?"
    }
  ];

  return (
    <div className="w-full py-2 select-text font-sans bg-transparent space-y-8">
      
      {/* HEADER CARD */}
      <div 
        style={{
          background: `linear-gradient(135deg, rgba(217, 119, 6, 0.09) 0%, rgba(16, 185, 129, 0.05) 50%, rgba(255, 255, 255, 0.98) 100%)`,
          borderColor: `rgba(217, 119, 6, 0.2)`
        }}
        className="relative overflow-hidden rounded-3xl p-6 md:p-8 border shadow-[0_10px_30px_rgba(217,119,6,0.04)]"
      >
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -top-12 w-48 h-48 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[11px] font-extrabold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Chương V — Mục III.3 &amp; Tổng kết</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black font-playfair tracking-tight text-stone-900 leading-tight">
            3. ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC PHẢI KẾT HỢP VỚI ĐOÀN KẾT QUỐC TẾ
          </h3>

          <p className="text-xs md:text-sm font-semibold text-stone-600 max-w-3xl leading-relaxed">
            4 Bài học vận dụng chiến lược đoàn kết quốc tế Hồ Chí Minh &bull; Bảng Tổng kết Mục III &bull; Câu hỏi Ôn tập Giáo trình chính thức.
          </p>
        </div>
      </div>

      {/* CHI TIẾT NỘI DUNG MỤC III.3 */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        
        <div className="space-y-3 text-stone-700 text-sm md:text-base leading-relaxed text-justify">
          <p className="font-bold text-stone-900">• Nguyên tắc vận dụng:</p>
          <div className="pl-2 md:pl-4 space-y-2">
            <p>
              • Trong giai đoạn cách mạng hiện nay, việc phát huy <strong>&ldquo;bài học kết hợp sức mạnh dân tộc với sức mạnh thời đại, chủ nghĩa yêu nước với chủ nghĩa quốc tế, lợi ích dân tộc và nghĩa vụ quốc tế&rdquo;</strong> theo tư tưởng Hồ Chí Minh, phải:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                <strong>&ldquo;Nhất quán coi cách mạng Việt Nam là một bộ phận không thể tách rời của cách mạng thế giới.&rdquo;</strong>
              </li>
              <li>
                Tiếp tục <strong>&ldquo;đoàn kết, ủng hộ&rdquo;</strong> các phong trào cách mạng, các xu hướng và trào lưu tiến bộ của thời đại vì các mục tiêu <em>&ldquo;hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội.&rdquo;</em>
              </li>
            </ul>

            <p className="font-bold text-stone-900 pt-1">• Để nâng cao hiệu quả hợp tác quốc tế, chủ động tích cực hội nhập kinh tế với khu vực và thế giới, Đảng, Nhà nước ta chủ trương:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nêu cao <strong>&ldquo;nguyên tắc độc lập, tự chủ, tự lực, tự cường.&rdquo;</strong></li>
              <li>Phát huy mạnh mẽ <strong>&ldquo;sức mạnh dân tộc&rdquo;</strong> &ndash; sức mạnh của chủ nghĩa yêu nước, sức mạnh của người làm chủ, sức mạnh đại đoàn kết toàn dân.</li>
              <li>Trên cơ sở <strong>&ldquo;sức mạnh bên trong&rdquo;</strong> mà tranh thủ và tận dụng sự đồng tình, ủng hộ rộng rãi của <strong>&ldquo;lực lượng bên ngoài.&rdquo;</strong></li>
            </ul>
          </div>
        </div>

      </div>

      {/* 4 THẺ BÀI HỌC CHIẾN LƯỢC (4 STRATEGIC LESSON CARDS) */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
          <Award className="w-5 h-5 text-amber-600" />
          <h4 className="font-extrabold text-sm md:text-base text-stone-900 uppercase tracking-wider">
            4 BÀI HỌC VẬN DỤNG CHIẾN LƯỢC ĐOÀN KẾT QUỐC TẾ HỒ CHÍ MINH
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Lesson 1 */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-amber-200 text-amber-900">
              Bài học 1
            </span>
            <h5 className="font-extrabold text-stone-900 text-sm md:text-base">Mục tiêu Đoàn kết</h5>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
              Làm rõ đoàn kết để thực hiện mục tiêu cách mạng giai đoạn hiện nay: <strong>&ldquo;dân giàu, nước mạnh, dân chủ, xã hội công bằng, văn minh.&rdquo;</strong>
            </p>
          </div>

          {/* Lesson 2 */}
          <div className="p-5 rounded-2xl bg-orange-50/80 border border-orange-200 space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-orange-200 text-orange-900">
              Bài học 2
            </span>
            <h5 className="font-extrabold text-stone-900 text-sm md:text-base">Mở cửa &amp; Hội nhập</h5>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
              <strong>&ldquo;Mở cửa, hội nhập quốc tế&rdquo;</strong>, làm bạn của tất cả các nước, phấn đấu vì hòa bình độc lập phát triển, tham gia các vấn đề toàn cầu.
            </p>
          </div>

          {/* Lesson 3 */}
          <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">
              Bài học 3
            </span>
            <h5 className="font-extrabold text-stone-900 text-sm md:text-base">Độc lập Tự chủ cho CNH - HĐH</h5>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
              Nêu cao <strong>&ldquo;độc lập tự chủ, tự lực tự cường&rdquo;</strong>, kết hợp sức mạnh dân tộc với thời đại để <strong>&ldquo;công nghiệp hóa, hiện đại hóa đất nước.&rdquo;</strong>
            </p>
          </div>

          {/* Lesson 4 */}
          <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-blue-200 text-blue-900">
              Bài học 4
            </span>
            <h5 className="font-extrabold text-stone-900 text-sm md:text-base">Xây dựng Đảng hạt nhân Đoàn kết</h5>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
              <strong>&ldquo;Xây dựng Đảng trong sạch, vững mạnh&rdquo;</strong> làm hạt nhân đoàn kết toàn dân tộc và quốc tế, nâng cao năng lực lãnh đạo ngang tầm nhiệm vụ.
            </p>
          </div>

        </div>

        <p className="text-xs md:text-sm text-stone-700 italic text-justify pt-1">
          • KẾT LUẬN: Những quan điểm cơ bản cùng những giá trị thực tiễn của tư tưởng đoàn kết quốc tế Hồ Chí Minh là <strong>&ldquo;những bài học quý báu&rdquo;</strong> cần được nhận thức và vận dụng sáng tạo phù hợp với cách mạng Việt Nam và thế giới tiến bộ hiện nay.
        </p>
      </div>

      {/* KHUNG GHI NHỚ & TỪ KHÓA ÔN THI MỤC III.3 (LUÔN MỞ) */}
      <div className="bg-gradient-to-br from-amber-500/10 via-emerald-400/5 to-blue-500/10 border-2 border-amber-500/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-md">
        
        <div className="flex items-center gap-2.5 text-amber-900 border-b border-amber-500/20 pb-3">
          <Bookmark className="w-5 h-5 text-amber-700" />
          <h5 className="font-black text-sm md:text-base uppercase tracking-wider">
            📌 GHI NHỚ TRỌNG TÂM MỤC III.3 (ÔN THI)
          </h5>
        </div>

        <ul className="space-y-3 text-stone-850 font-bold text-xs md:text-sm leading-relaxed text-justify">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>4 bài học vận dụng chiến lược đoàn kết quốc tế Hồ Chí Minh:</strong> (1) Mục tiêu dân giàu nước mạnh; (2) Mở cửa hội nhập làm bạn với tất cả các nước; (3) Độc lập tự chủ CNH-HĐH; (4) Xây dựng Đảng trong sạch vững mạnh làm hạt nhân đoàn kết.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Cách mạng Việt Nam <strong>&ldquo;luôn là một bộ phận không thể tách rời của cách mạng thế giới.&rdquo;</strong></span>
          </li>
        </ul>

        <div className="pt-2 border-t border-amber-500/20 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs uppercase tracking-wider">
            <Key className="w-4 h-4 text-amber-700" />
            <span>🎯 TỪ KHÓA ÔN THI MỤC III.3:</span>
          </div>
          <p className="text-stone-800 text-xs md:text-sm font-semibold leading-relaxed text-justify italic">
            Độc lập, tự chủ, tự lực, tự cường; Sức mạnh dân tộc kết hợp sức mạnh thời đại; Mở cửa, hội nhập quốc tế, là bạn của tất cả các nước; Công nghiệp hóa, hiện đại hóa đất nước; Xây dựng Đảng trong sạch, vững mạnh - hạt nhân đoàn kết; Cách mạng Việt Nam là bộ phận của cách mạng thế giới.
          </p>
        </div>

      </div>

      {/* BẢNG TỔNG KẾT NHANH MỤC III (EXECUTION CHEAT-SHEET TABLE) */}
      <div className="bg-white border-2 border-amber-500/40 rounded-3xl p-6 md:p-8 shadow-lg space-y-4">
        <div className="flex items-center gap-2 text-amber-900 border-b border-amber-200 pb-3">
          <Table className="w-5 h-5 text-amber-700" />
          <h4 className="font-black text-sm md:text-base uppercase tracking-wider">
            ⚡ TỔNG KẾT NHANH MỤC III (BẢNG CHEAT-SHEET ÔN THI NHANH)
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
                <td className="py-3 px-4 font-bold text-stone-900">1. Quán triệt trong hoạch định đường lối</td>
                <td className="py-3 px-4 leading-relaxed">
                  Nghị quyết 07-NQ/TW (1993); Đại hội VIII, XII, XIII; tiến trình đối ngoại &ldquo;muốn là bạn&rdquo; &rarr; &ldquo;đối tác tin cậy&rdquo;.
                </td>
              </tr>
              <tr className="hover:bg-stone-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-stone-900">2. Liên minh công - nông - trí</td>
                <td className="py-3 px-4 leading-relaxed">
                  Mặt trận rộng &harr; liên minh mạnh &harr; Đảng vững; 5 giải pháp tăng cường đại đoàn kết.
                </td>
              </tr>
              <tr className="hover:bg-stone-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-stone-900">3. Kết hợp với đoàn kết quốc tế</td>
                <td className="py-3 px-4 leading-relaxed">
                  Độc lập tự chủ + hội nhập quốc tế; 4 bài học vận dụng chiến lược đoàn kết quốc tế Hồ Chí Minh.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* PHẦN C: CÂU HỎI ÔN TẬP (NGUYÊN VĂN GIÁO TRÌNH) */}
      <div className="bg-white border-2 border-stone-800/20 rounded-3xl p-6 md:p-8 shadow-md space-y-5">
        <div className="flex items-center gap-2.5 text-stone-900 border-b border-stone-200 pb-3">
          <BookOpen className="w-5 h-5 text-amber-700" />
          <h4 className="font-black text-base md:text-lg uppercase tracking-wider font-playfair">
            📚 C. CÂU HỎI ÔN TẬP TỰ LUẬN (NGUYÊN VĂN GIÁO TRÌNH)
          </h4>
        </div>

        <div className="space-y-3">
          {essayQuestions.map((q, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-stone-200 text-stone-800">
                {q.num}
              </span>
              <p className="font-bold text-stone-900 text-xs md:text-sm leading-relaxed pt-1">
                {q.question}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🎉 BANNER HOÀN THÀNH 100% CHƯƠNG V (GLORIOUS CHAPTER V COMPLETION BANNER) */}
      <div className="relative overflow-hidden rounded-3xl p-8 md:p-10 bg-gradient-to-br from-amber-600 via-red-600 to-amber-700 text-white text-center shadow-xl space-y-4">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>HOÀN THÀNH 100% CHƯƠNG V</span>
          </div>

          <h3 className="text-2xl md:text-4xl font-black font-playfair tracking-tight leading-tight">
            CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH LÝ THUYẾT CHƯƠNG V!
          </h3>

          <p className="text-xs md:text-sm max-w-2xl mx-auto font-medium text-amber-100 leading-relaxed">
            Tư tưởng Hồ Chí Minh về Đại đoàn kết toàn dân tộc và Đoàn kết quốc tế đã được số hóa trọn vẹn 100% nguyên văn giáo trình cùng đầy đủ sơ đồ tương tác &amp; từ khóa ôn thi.
          </p>

          <div className="pt-2">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white text-amber-900 font-extrabold text-xs md:text-sm shadow-md">
              <Check className="w-4 h-4 text-amber-700" />
              Sẵn sàng cho các bài kiểm tra &amp; Đề thi trắc nghiệm tiếp theo
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
