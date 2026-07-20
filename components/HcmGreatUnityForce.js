"use client";
import React, { useState } from "react";
import { 
  Users, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  Key, 
  Layers,
  Heart,
  Bookmark,
  ShieldAlert,
  ArrowRight
} from "lucide-react";

export default function HcmGreatUnityForce() {
  const [activeDiagramNode, setActiveDiagramNode] = useState("hat-nhan");

  return (
    <div className="w-full py-2 select-text font-sans bg-transparent space-y-8">
      
      {/* HEADER CARD */}
      <div 
        style={{
          background: `linear-gradient(135deg, rgba(217, 119, 6, 0.09) 0%, rgba(234, 88, 12, 0.05) 50%, rgba(255, 255, 255, 0.98) 100%)`,
          borderColor: `rgba(217, 119, 6, 0.2)`
        }}
        className="relative overflow-hidden rounded-3xl p-6 md:p-8 border shadow-[0_10px_30px_rgba(217,119,6,0.04)]"
      >
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -top-12 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[11px] font-extrabold uppercase tracking-widest">
            <Users className="w-3.5 h-3.5 text-amber-600" />
            <span>Chương V — Mục I.2</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black font-playfair tracking-tight text-stone-900 leading-tight">
            2. LỰC LƯỢNG CỦA KHỐI ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC
          </h3>

          <p className="text-xs md:text-sm font-semibold text-stone-600 max-w-3xl leading-relaxed">
            Nắm vững chủ thể rộng lớn của khối đại đoàn kết, nền tảng cốt lõi Công - Nông - Trí và hạt nhân lãnh đạo trong Đảng theo tư tưởng Hồ Chí Minh.
          </p>
        </div>
      </div>

      {/* SƠ ĐỒ ĐỒ HỌA TƯƠNG TÁC: HẠT NHÂN & NỀN TẢNG (INTERACTIVE DIAGRAM) */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-600" />
            <h4 className="font-extrabold text-sm md:text-base text-stone-900 uppercase tracking-wider">
              SƠ ĐỒ CẤU TRÚC: HẠT NHÂN - NỀN TẢNG - MỞ RỘNG
            </h4>
          </div>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
            Chạm vào từng phần để xem giải thích
          </span>
        </div>

        {/* Interactive Diagram Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          
          {/* Node 1: Hạt nhân */}
          <button
            type="button"
            onClick={() => setActiveDiagramNode("hat-nhan")}
            className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
              activeDiagramNode === "hat-nhan"
                ? "bg-red-700 text-white border-red-800 shadow-md shadow-red-700/20 scale-[1.02]"
                : "bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded ${activeDiagramNode === "hat-nhan" ? "bg-white/20 text-white" : "bg-red-100 text-red-800"}`}>
                Yếu tố 1 (Cốt lõi)
              </span>
              <Sparkles className="w-4 h-4" />
            </div>
            <h5 className="font-black text-sm md:text-base mb-1">🌌 HẠT NHÂN</h5>
            <p className={`text-xs ${activeDiagramNode === "hat-nhan" ? "text-red-100" : "text-stone-600"} font-medium`}>
              Sự đoàn kết và thống nhất trong Đảng
            </p>
          </button>

          {/* Node 2: Nền tảng */}
          <button
            type="button"
            onClick={() => setActiveDiagramNode("nen-tang")}
            className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
              activeDiagramNode === "nen-tang"
                ? "bg-amber-600 text-white border-amber-700 shadow-md shadow-amber-600/20 scale-[1.02]"
                : "bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded ${activeDiagramNode === "nen-tang" ? "bg-white/20 text-white" : "bg-amber-100 text-amber-800"}`}>
                Yếu tố 2 (Nền gốc)
              </span>
              <Layers className="w-4 h-4" />
            </div>
            <h5 className="font-black text-sm md:text-base mb-1">🏛️ NỀN TẢNG</h5>
            <p className={`text-xs ${activeDiagramNode === "nen-tang" ? "text-amber-100" : "text-stone-600"} font-medium`}>
              Liên minh Công nhân - Nông dân - Trí thức
            </p>
          </button>

          {/* Node 3: Chủ thể toàn dân */}
          <button
            type="button"
            onClick={() => setActiveDiagramNode("chu-the")}
            className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
              activeDiagramNode === "chu-the"
                ? "bg-emerald-700 text-white border-emerald-800 shadow-md shadow-emerald-700/20 scale-[1.02]"
                : "bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded ${activeDiagramNode === "chu-the" ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-800"}`}>
                Yếu tố 3 (Rộng lớn)
              </span>
              <Users className="w-4 h-4" />
            </div>
            <h5 className="font-black text-sm md:text-base mb-1">🇻🇳 CHỦ THỂ TOÀN DÂN</h5>
            <p className={`text-xs ${activeDiagramNode === "chu-the" ? "text-emerald-100" : "text-stone-600"} font-medium`}>
              Toàn thể nhân dân & kiều bào yêu nước
            </p>
          </button>

        </div>

        {/* Diagram Explanation Box */}
        <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-stone-850 text-xs md:text-sm leading-relaxed text-justify space-y-2">
          {activeDiagramNode === "hat-nhan" && (
            <div>
              <p className="font-bold text-red-900 text-sm mb-1">📌 Giải thích HẠT NHÂN trong Đảng:</p>
              <p>
                Sự đoàn kết và thống nhất trong Đảng là yếu tố <strong>&ldquo;hạt nhân&rdquo;</strong> quyết định sự đoàn kết ngoài xã hội. Sự đoàn kết của Đảng càng vững chắc thì khối đại đoàn kết toàn dân tộc càng được tăng cường.
              </p>
            </div>
          )}

          {activeDiagramNode === "nen-tang" && (
            <div>
              <p className="font-bold text-amber-900 text-sm mb-1">📌 Giải thích NỀN TẢNG (NỀN GỐC):</p>
              <p>
                Khối đại đoàn kết phải lấy <strong>Công nhân - Nông dân - Trí thức</strong> làm nền tảng vững chắc. Bác Hồ ví nền tảng này như <em>&ldquo;cái nền của nhà, gốc của cây&rdquo;</em>. Nền có vững, gốc có tốt thì cây mới sinh cành nảy lá.
              </p>
            </div>
          )}

          {activeDiagramNode === "chu-the" && (
            <div>
              <p className="font-bold text-emerald-900 text-sm mb-1">📌 Giải thích CHỦ THỂ TOÀN DÂN:</p>
              <p>
                Bao gồm toàn thể nhân dân Việt Nam ở mọi tầng lớp, giai cấp, dân tộc, tôn giáo, lứa tuổi, trong nước và ngoài nước. Bác dạy: <em>&ldquo;Ai có tài, có đức, có sức, có lòng phụng sự Tổ quốc và phục vụ nhân dân thì ta đoàn kết với họ.&rdquo;</em>
              </p>
            </div>
          )}
        </div>

      </div>

      {/* PHẦN A: CHỦ THỂ CỦA KHỐI ĐẠI ĐOÀN KẾT */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        
        {/* Title Subsection */}
        <div className="flex items-start gap-3 border-b border-stone-100 pb-4">
          <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-700 mt-0.5 shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold font-playfair text-stone-900 leading-snug">
              a) Chủ thể của khối đại đoàn kết toàn dân tộc
            </h4>
          </div>
        </div>

        {/* Content Block */}
        <div className="space-y-4 text-stone-700 text-sm md:text-base leading-relaxed">
          <p className="text-justify">
            • <strong>Chủ thể của khối đại đoàn kết toàn dân tộc</strong> gồm: <strong>toàn thể nhân dân</strong>, tất cả những người Việt Nam yêu nước ở:
          </p>

          <ul className="list-disc pl-6 space-y-1 font-medium text-stone-800 text-justify">
            <li>Các giai cấp, các tầng lớp trong xã hội.</li>
            <li>Các ngành, các giới, các lứa tuổi.</li>
            <li>Các dân tộc, đồng bào các tôn giáo, các đảng phái...</li>
          </ul>

          <div className="space-y-2 text-justify">
            <p>
              • <strong>&ldquo;Nhân dân&rdquo;</strong> trong tư tưởng Hồ Chí Minh được hiểu với 2 nghĩa, <strong>cả hai đều là chủ thể của khối đại đoàn kết toàn dân tộc:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 font-medium text-stone-800">
              <li>Vừa là <strong>con người Việt Nam cụ thể</strong>.</li>
              <li>Vừa là <strong>một tập hợp đông đảo quần chúng nhân dân</strong>.</li>
            </ul>
          </div>

          <div className="space-y-2 text-justify">
            <p>
              • <strong>&ldquo;Đại đoàn kết toàn dân tộc&rdquo;</strong> tức là phải <strong>tập hợp, đoàn kết được tất cả mọi người dân vào một khối thống nhất</strong>, không phân biệt:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Dân tộc, giai cấp, tầng lớp, đảng phái, tôn giáo, lứa tuổi, giới tính, nghề nghiệp, trong nước hay ngoài nước.</li>
              <li>
                Cùng hướng vào mục tiêu chung: <em>&ldquo;ai có tài, có đức, có sức, có lòng phụng sự Tổ quốc và phục vụ nhân dân thì ta đoàn kết với họ.&rdquo;</em>
              </li>
            </ul>
          </div>

          <p className="text-justify">
            • Từ <strong>&ldquo;Ta&rdquo;</strong> ở đây là chủ thể, vừa là <strong>Đảng Cộng sản Việt Nam</strong> nói riêng, vừa là <strong>mọi người dân Việt Nam</strong> nói chung.
          </p>

          <div className="space-y-2 text-justify">
            <p className="font-bold text-stone-900">• Trong xây dựng khối đại đoàn kết toàn dân tộc, phải:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Đứng vững trên lập trường giai cấp công nhân.</strong>
              </li>
              <li>
                <strong>Giải quyết hài hòa mối quan hệ giữa giai cấp, dân tộc</strong> để tập hợp lực lượng.
              </li>
              <li>
                <strong>Không bỏ sót một lực lượng nào</strong> miễn là họ có lòng trung thành và sẵn sàng phục vụ Tổ quốc, không phản bội lại quyền lợi của nhân dân.
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* PHẦN B: NỀN TẢNG CỦA KHỐI ĐẠI ĐOÀN KẾT */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        
        {/* Title Subsection */}
        <div className="flex items-start gap-3 border-b border-stone-100 pb-4">
          <div className="p-2.5 rounded-2xl bg-orange-600/10 text-orange-700 mt-0.5 shrink-0">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold font-playfair text-stone-900 leading-snug">
              b) Nền tảng của khối đại đoàn kết toàn dân tộc
            </h4>
          </div>
        </div>

        {/* Content Block */}
        <div className="space-y-4 text-stone-700 text-sm md:text-base leading-relaxed">
          
          <p className="text-justify">• Hồ Chí Minh chỉ rõ:</p>

          {/* Diamond Quote Nền gốc đại đoàn kết */}
          <div className="relative rounded-2xl p-5 md:p-6 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/25 shadow-sm overflow-hidden my-3">
            <Quote className="absolute top-2 left-2 w-10 h-10 text-amber-800 opacity-10 pointer-events-none z-0" />
            <p className="relative z-10 pl-4 text-stone-900 font-bold italic text-sm md:text-base leading-relaxed text-justify">
              &ldquo;Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao động khác. Đó là nền gốc của đại đoàn kết. Nó cũng như cái nền của nhà, gốc của cây. Nhưng đã có nền vững, gốc tốt, còn phải đoàn kết các tầng lớp nhân dân khác.&rdquo;
            </p>
          </div>

          <div className="space-y-2 text-justify">
            <p className="font-bold text-stone-900">
              • <strong>Lực lượng làm nền tảng cho khối đại đoàn kết toàn dân tộc</strong>, theo Hồ Chí Minh, là:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pl-2">
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-center font-black text-amber-900 text-sm">
                🛠️ Công nhân
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-center font-black text-amber-900 text-sm">
                🌾 Nông dân
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-center font-black text-amber-900 text-sm">
                🎓 Trí thức
              </div>
            </div>
          </div>

          <p className="text-justify">
            • <strong>Nền tảng này càng được củng cố vững chắc</strong> thì khối đại đoàn kết toàn dân tộc càng có thể mở rộng &rarr; <strong>không có thế lực nào có thể làm suy yếu khối đại đoàn kết toàn dân tộc.</strong>
          </p>

          <p className="text-justify">
            • Trong khối đại đoàn kết toàn dân tộc, phải đặc biệt chú trọng yếu tố <strong>&ldquo;hạt nhân&rdquo;</strong> là <strong>sự đoàn kết và thống nhất trong Đảng</strong> vì đó là điều kiện cho sự đoàn kết ngoài xã hội.
          </p>

          <p className="text-justify">
            • <strong>Sự đoàn kết của Đảng càng được củng cố</strong> thì <strong>sự đoàn kết toàn dân tộc càng được tăng cường.</strong>
          </p>

          <div className="space-y-2 text-justify">
            <p className="font-bold text-stone-900">
              • <strong>Đoàn kết, dân tộc đoàn kết và sự gắn bó máu thịt giữa Đảng với nhân dân</strong> đã tạo nên <strong>sức mạnh bên trong</strong> của cách mạng Việt Nam để:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Vượt qua mọi khó khăn, thử thách.</li>
              <li>Chiến thắng mọi kẻ thù.</li>
              <li>Đi tới thắng lợi cuối cùng của cách mạng.</li>
            </ul>
          </div>

        </div>
      </div>

      {/* KHUNG GHI NHỚ & TỪ KHÓA ÔN THI (LUÔN MỞ) */}
      <div className="bg-gradient-to-br from-amber-500/10 via-orange-400/5 to-emerald-500/10 border-2 border-amber-500/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-md">
        
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
            <span><strong>&ldquo;Nền tảng&rdquo;</strong> của khối đại đoàn kết = <strong>công nhân - nông dân - trí thức</strong> (câu hỏi rất hay được hỏi).</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>&ldquo;Hạt nhân&rdquo;</strong> của khối đại đoàn kết = <strong>sự đoàn kết, thống nhất trong Đảng.</strong></span>
          </li>
        </ul>

        {/* Từ khóa ôn thi */}
        <div className="pt-2 border-t border-amber-500/20 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs uppercase tracking-wider">
            <Key className="w-4 h-4 text-amber-700" />
            <span>🎯 TỪ KHÓA ÔN THI:</span>
          </div>
          <p className="text-stone-800 text-xs md:text-sm font-semibold leading-relaxed text-justify italic">
            Chủ thể; &ldquo;nhân dân&rdquo; (2 nghĩa); lập trường giai cấp công nhân; không bỏ sót lực lượng; nền gốc của đại đoàn kết; công nhân - nông dân - trí thức; hạt nhân đoàn kết trong Đảng; gắn bó máu thịt Đảng - dân.
          </p>
        </div>

      </div>

    </div>
  );
}
